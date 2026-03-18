// netlify/functions/admin-login.js
import crypto from 'crypto';

const MAX_ATTEMPTS = 3;
const LOCKOUT_MS = 30 * 60 * 1000; // 30 minutes
const SESSION_EXPIRY_MS = 8 * 60 * 60 * 1000; // 8 hours

// In-memory rate limiting (resets on function cold start)
const attempts = {};
const sessions = {};

function isLockedOut(ip) {
  const record = attempts[ip];
  if (!record) return false;
  if (record.count >= MAX_ATTEMPTS) {
    if (Date.now() - record.lastAttempt < LOCKOUT_MS) return true;
    delete attempts[ip];
  }
  return false;
}

function recordAttempt(ip) {
  if (!attempts[ip]) attempts[ip] = { count: 0, lastAttempt: 0 };
  attempts[ip].count++;
  attempts[ip].lastAttempt = Date.now();
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown';

  if (isLockedOut(ip)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: 'Too many failed attempts. Try again in 30 minutes.' }),
    };
  }

  const { password } = JSON.parse(event.body || '{}');

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    recordAttempt(ip);
    return { statusCode: 401, body: JSON.stringify({ error: 'Invalid password' }) };
  }

  // Clear failed attempts on success
  delete attempts[ip];

  const sessionToken = crypto.randomBytes(32).toString('hex');
  sessions[sessionToken] = Date.now() + SESSION_EXPIRY_MS;

  return {
    statusCode: 200,
    headers: {
      'Set-Cookie': `admin_session=${sessionToken}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${SESSION_EXPIRY_MS / 1000}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
    },
    body: JSON.stringify({ success: true }),
  };
};

// Export for use by other admin functions
export { sessions, SESSION_EXPIRY_MS };
