const nodemailer = require('nodemailer');

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    }
  });

  return transporter;
}

async function sendEmail({ to, subject, html, text }) {
  const transport = getTransporter();

  const mailOptions = {
    from: `EduAdvocate <${process.env.FROM_EMAIL || 'hello@eduadvocate.com'}>`,
    to,
    subject,
    html,
    text
  };

  return transport.sendMail(mailOptions);
}

async function sendGuideEmail(to, guideHtml) {
  return sendEmail({
    to,
    subject: 'Your EduAdvocate Meeting Guide',
    html: `
      <div style="font-family: Georgia, serif; max-width: 700px; margin: 0 auto; color: #2C2C2C;">
        <div style="background: #1B2E4B; color: #fff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">EduAdvocate</h1>
          <p style="margin: 8px 0 0; opacity: 0.9;">Your Personalized Meeting Guide</p>
        </div>
        <div style="padding: 24px;">
          ${guideHtml}
        </div>
        <div style="background: #F8F5F0; padding: 16px 24px; font-size: 13px; color: #666; border-top: 1px solid #ddd;">
          <p style="margin: 0;">This guide is for educational purposes only. It is not legal advice.</p>
          <p style="margin: 8px 0 0;">&copy; ${new Date().getFullYear()} Axiom 38 LLC DBA EduAdvocate. All rights reserved.</p>
        </div>
      </div>
    `,
    text: 'Your EduAdvocate meeting guide is attached. Please view this email in an HTML-compatible email client for the best experience.'
  });
}

async function sendPasswordResetEmail(to, resetUrl) {
  return sendEmail({
    to,
    subject: 'Reset Your EduAdvocate Password',
    html: `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 500px; margin: 0 auto; color: #2C2C2C;">
        <h2 style="color: #1B2E4B;">Password Reset Request</h2>
        <p>You requested a password reset for your EduAdvocate account.</p>
        <p><a href="${resetUrl}" style="display: inline-block; background: #D4920A; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">Reset Password</a></p>
        <p style="font-size: 13px; color: #666;">This link expires in 1 hour. If you did not request this reset, you can safely ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
        <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} Axiom 38 LLC DBA EduAdvocate</p>
      </div>
    `,
    text: `Reset your EduAdvocate password by visiting: ${resetUrl}\n\nThis link expires in 1 hour.`
  });
}

async function sendFeedbackNotification(feedback) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) return;

  return sendEmail({
    to: adminEmail,
    subject: `[EduAdvocate] New Product Feedback (${feedback.rating}/5 stars)`,
    html: `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; color: #2C2C2C;">
        <h2 style="color: #1B2E4B;">New Product Feedback</h2>
        <p><strong>Role:</strong> ${feedback.role}</p>
        <p><strong>Email:</strong> ${feedback.email || 'Not provided'}</p>
        <p><strong>Rating:</strong> ${'★'.repeat(feedback.rating)}${'☆'.repeat(5 - feedback.rating)}</p>
        <h3>What worked well:</h3>
        <p>${feedback.workedWell || 'Not provided'}</p>
        <h3>What could be improved:</h3>
        <p>${feedback.improvements || 'Not provided'}</p>
        <h3>Feature requests:</h3>
        <p>${feedback.featureRequests || 'Not provided'}</p>
      </div>
    `,
    text: `New feedback from ${feedback.role}: ${feedback.rating}/5 stars`
  });
}

async function sendReviewNotification(review) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) return;

  return sendEmail({
    to: adminEmail,
    subject: `[EduAdvocate] New Review Pending Approval — ${review.firstName} (${review.role})`,
    html: `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; color: #2C2C2C;">
        <h2 style="color: #1B2E4B;">New Review Submitted</h2>
        <p><strong>Name:</strong> ${review.firstName}</p>
        <p><strong>Role:</strong> ${review.role}</p>
        <p><strong>State:</strong> ${review.state || 'Not provided'}</p>
        <p><strong>Status:</strong> Pending approval</p>
        <h3>Experience:</h3>
        <blockquote style="border-left: 3px solid #D4920A; padding-left: 12px; margin: 12px 0; font-style: italic;">"${review.experience}"</blockquote>
        <p style="margin-top: 24px;">
          <a href="${process.env.APP_URL || 'https://eduadvocate.com'}/#/admin" style="display: inline-block; background: #1B2E4B; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 6px;">Review in Admin Panel</a>
        </p>
      </div>
    `,
    text: `New review from ${review.firstName} (${review.role}): "${review.experience}". Log in to admin panel to approve or reject.`
  });
}

module.exports = {
  sendEmail,
  sendGuideEmail,
  sendPasswordResetEmail,
  sendFeedbackNotification,
  sendReviewNotification
};
