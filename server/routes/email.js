const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { sendGuideEmail } = require('../utils/mailer');

const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { error: 'Too many email requests. Please try again later.' }
});

router.use(emailLimiter);

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post('/send-guide', async (req, res) => {
  try {
    const { email, guideHtml } = req.body;

    if (!email || !guideHtml) {
      return res.status(400).json({ error: 'Email and guide content are required.' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (guideHtml.length > 200000) {
      return res.status(400).json({ error: 'Guide content exceeds maximum size.' });
    }

    await sendGuideEmail(email, guideHtml);

    res.json({ message: 'Guide sent to your email successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send guide email. Please try again.' });
  }
});

module.exports = router;
