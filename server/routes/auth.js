const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const { sendPasswordResetEmail } = require('../utils/mailer');

const USERS_FILE = path.join(__dirname, '..', '..', 'data', 'users.json');
const BCRYPT_ROUNDS = 12;
const RESET_TOKEN_EXPIRY_MS = 60 * 60 * 1000;

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Too many authentication attempts. Please try again later.' }
});

router.use(authLimiter);

function readUsers() {
  try {
    if (!fs.existsSync(USERS_FILE)) return [];
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeUsers(users) {
  const dir = path.dirname(USERS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

function signToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'dev-secret-change-in-production',
    { expiresIn: process.env.JWT_EXPIRES_IN || '30d' }
  );
}

function setAuthCookie(res, token) {
  const isProduction = process.env.NODE_ENV === 'production';
  res.cookie('token', token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'Strict',
    maxAge: 30 * 24 * 60 * 60 * 1000
  });
}

function verifyToken(req) {
  const token = req.cookies && req.cookies.token;
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'dev-secret-change-in-production');
  } catch {
    return null;
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post('/signup', async (req, res) => {
  try {
    const { email, password, role, state } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Email, password, and role are required.' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    }
    if (!['parent', 'educator'].includes(role)) {
      return res.status(400).json({ error: 'Role must be "parent" or "educator".' });
    }

    const users = readUsers();
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);
    const newUser = {
      id: crypto.randomUUID(),
      email: email.toLowerCase(),
      password: hashedPassword,
      role,
      state: state || null,
      createdAt: new Date().toISOString(),
      purchase_status: false,
      stripe_customer_id: null,
      resetToken: null,
      resetTokenExpiry: null
    };

    users.push(newUser);
    writeUsers(users);

    const token = signToken(newUser);
    setAuthCookie(res, token);

    res.status(201).json({
      message: 'Account created successfully.',
      user: { id: newUser.id, email: newUser.email, role: newUser.role, state: newUser.state }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create account. Please try again.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const users = readUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = signToken(user);
    setAuthCookie(res, token);

    res.json({
      message: 'Logged in successfully.',
      user: { id: user.id, email: user.email, role: user.role, state: user.state }
    });
  } catch (err) {
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict'
  });
  res.json({ message: 'Logged out successfully.' });
});

router.get('/me', (req, res) => {
  try {
    const decoded = verifyToken(req);
    if (!decoded) {
      return res.status(401).json({ error: 'Not authenticated.' });
    }

    const users = readUsers();
    const user = users.find(u => u.id === decoded.userId);
    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    res.json({
      user: { id: user.id, email: user.email, role: user.role, state: user.state }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve user.' });
  }
});

router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const users = readUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (user) {
      const resetToken = crypto.randomBytes(32).toString('hex');
      user.resetToken = resetToken;
      user.resetTokenExpiry = Date.now() + RESET_TOKEN_EXPIRY_MS;
      writeUsers(users);

      const appUrl = process.env.APP_URL || 'http://localhost:3000';
      const resetUrl = `${appUrl}/#/reset-password?token=${resetToken}&email=${encodeURIComponent(user.email)}`;

      try {
        await sendPasswordResetEmail(user.email, resetUrl);
      } catch {
        // Email sending may fail in dev; continue silently
      }
    }

    res.json({ message: 'If an account exists with that email, a reset link has been sent.' });
  } catch (err) {
    res.status(500).json({ error: 'Password reset request failed. Please try again.' });
  }
});

router.post('/reset-password', async (req, res) => {
  try {
    const { email, token, newPassword } = req.body;

    if (!email || !token || !newPassword) {
      return res.status(400).json({ error: 'Email, token, and new password are required.' });
    }
    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    }

    const users = readUsers();
    const user = users.find(u =>
      u.email.toLowerCase() === email.toLowerCase() &&
      u.resetToken === token &&
      u.resetTokenExpiry && u.resetTokenExpiry > Date.now()
    );

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired reset token.' });
    }

    user.password = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);
    user.resetToken = null;
    user.resetTokenExpiry = null;
    writeUsers(users);

    res.json({ message: 'Password has been reset. You can now log in.' });
  } catch (err) {
    res.status(500).json({ error: 'Password reset failed. Please try again.' });
  }
});

module.exports = router;
