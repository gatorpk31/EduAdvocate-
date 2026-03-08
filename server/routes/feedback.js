const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const { sendFeedbackNotification } = require('../utils/mailer');

const REVIEWS_FILE = path.join(__dirname, '..', '..', 'data', 'reviews.json');

const feedbackLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { error: 'Too many submissions. Please try again later.' }
});

router.use(feedbackLimiter);

function readReviews() {
  try {
    if (!fs.existsSync(REVIEWS_FILE)) return [];
    const data = fs.readFileSync(REVIEWS_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeReviews(reviews) {
  const dir = path.dirname(REVIEWS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2), 'utf8');
}

router.post('/review', async (req, res) => {
  try {
    const { firstName, role, state, experience, permissionGranted } = req.body;

    if (!firstName || !role || !experience) {
      return res.status(400).json({ error: 'First name, role, and experience are required.' });
    }
    if (!['Parent', 'Educator', 'Advocate'].includes(role)) {
      return res.status(400).json({ error: 'Role must be Parent, Educator, or Advocate.' });
    }
    if (experience.length < 50) {
      return res.status(400).json({ error: 'Please share at least 50 characters about your experience.' });
    }
    if (!permissionGranted) {
      return res.status(400).json({ error: 'Permission to display your experience is required.' });
    }

    const reviews = readReviews();
    const review = {
      id: crypto.randomUUID(),
      firstName,
      role,
      state: state || null,
      experience,
      permissionGranted: true,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    reviews.push(review);
    writeReviews(reviews);

    res.status(201).json({ message: 'Thank you for sharing your experience. Your review will appear after approval.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit review. Please try again.' });
  }
});

router.post('/product', async (req, res) => {
  try {
    const { email, role, workedWell, improvements, featureRequests, rating } = req.body;

    if (!role || !rating) {
      return res.status(400).json({ error: 'Role and rating are required.' });
    }
    if (!['Parent', 'Educator'].includes(role)) {
      return res.status(400).json({ error: 'Role must be Parent or Educator.' });
    }
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5.' });
    }

    try {
      await sendFeedbackNotification({ email, role, workedWell, improvements, featureRequests, rating });
    } catch {
      // Email sending may fail; still acknowledge the feedback
    }

    res.json({ message: 'Thank you for your feedback. It helps us improve EduAdvocate.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit feedback. Please try again.' });
  }
});

router.get('/reviews', (req, res) => {
  try {
    const reviews = readReviews();
    const approved = reviews
      .filter(r => r.status === 'approved')
      .map(r => ({
        id: r.id,
        firstName: r.firstName,
        role: r.role,
        state: r.state,
        experience: r.experience,
        createdAt: r.createdAt
      }));

    res.json({ reviews: approved });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load reviews.' });
  }
});

module.exports = router;
