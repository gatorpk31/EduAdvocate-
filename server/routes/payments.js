const express = require('express');
const router = express.Router();

// ═══════════════════════════════════════════════════════════════════
// STRIPE PAYMENT ROUTES — FULLY WRITTEN, FULLY INACTIVE AT LAUNCH
// ═══════════════════════════════════════════════════════════════════
//
// When EduAdvocate activates payments, uncomment the code below.
// You will also need to:
//   1. Uncomment Stripe env vars in .env
//   2. Update pricing page CTA buttons in public/js/app.js to call
//      createCheckoutSession() instead of routing to signup
//   3. Uncomment stripe-stub.js in the frontend
//   4. npm install stripe
//
// Files that need changes when activating Stripe:
//   - server/routes/payments.js (this file — uncomment all)
//   - public/js/stripe-stub.js (uncomment all)
//   - public/js/app.js (pricing page CTA routes)
//   - .env (add Stripe keys)
//   - package.json (add stripe dependency)
// ═══════════════════════════════════════════════════════════════════

// STRIPE_ACTIVATE: Uncomment the require below when enabling payments
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// STRIPE_ACTIVATE: Create Checkout Session for Parent Annual Plan ($4.99/school year)
// router.post('/create-checkout-session/parent', async (req, res) => {
//   try {
//     const { email, userId } = req.body;
//
//     if (!email || !userId) {
//       return res.status(400).json({ error: 'Email and user ID are required.' });
//     }
//
//     const session = await stripe.checkout.sessions.create({
//       mode: 'payment',
//       customer_email: email,
//       line_items: [{
//         price: process.env.STRIPE_PARENT_PRICE_ID,
//         quantity: 1
//       }],
//       success_url: `${process.env.APP_URL}/#/payment-success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.APP_URL}/#/pricing`,
//       metadata: {
//         userId,
//         planType: 'parent_annual'
//       }
//     });
//
//     res.json({ url: session.url });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to create checkout session.' });
//   }
// });

// STRIPE_ACTIVATE: Create Checkout Session for Educator Monthly Plan ($10.99/month)
// router.post('/create-checkout-session/educator', async (req, res) => {
//   try {
//     const { email, userId } = req.body;
//
//     if (!email || !userId) {
//       return res.status(400).json({ error: 'Email and user ID are required.' });
//     }
//
//     const session = await stripe.checkout.sessions.create({
//       mode: 'subscription',
//       customer_email: email,
//       line_items: [{
//         price: process.env.STRIPE_EDUCATOR_PRICE_ID,
//         quantity: 1
//       }],
//       success_url: `${process.env.APP_URL}/#/payment-success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.APP_URL}/#/pricing`,
//       metadata: {
//         userId,
//         planType: 'educator_monthly'
//       }
//     });
//
//     res.json({ url: session.url });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to create checkout session.' });
//   }
// });

// STRIPE_ACTIVATE: Webhook handler for Stripe events
// Verify webhook signature to prevent spoofing
// router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
//   const sig = req.headers['stripe-signature'];
//   let event;
//
//   try {
//     event = stripe.webhooks.constructEvent(
//       req.body,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     return res.status(400).json({ error: 'Webhook signature verification failed.' });
//   }
//
//   switch (event.type) {
//     case 'checkout.session.completed': {
//       const session = event.data.object;
//       const userId = session.metadata.userId;
//       const planType = session.metadata.planType;
//       const customerId = session.customer;
//
//       // Update user record: set purchase_status = true, stripe_customer_id
//       // Read users.json, find user by userId, update fields, write back
//       const fs = require('fs');
//       const path = require('path');
//       const USERS_FILE = path.join(__dirname, '..', '..', 'data', 'users.json');
//       try {
//         const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
//         const user = users.find(u => u.id === userId);
//         if (user) {
//           user.purchase_status = true;
//           user.stripe_customer_id = customerId;
//           user.planType = planType;
//           user.purchaseDate = new Date().toISOString();
//           fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
//         }
//       } catch (err) {
//         console.error('Failed to update user after payment:', err.message);
//       }
//       break;
//     }
//
//     case 'customer.subscription.deleted': {
//       const subscription = event.data.object;
//       const customerId = subscription.customer;
//
//       // Revoke access: set purchase_status = false for this customer
//       const fs = require('fs');
//       const path = require('path');
//       const USERS_FILE = path.join(__dirname, '..', '..', 'data', 'users.json');
//       try {
//         const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
//         const user = users.find(u => u.stripe_customer_id === customerId);
//         if (user) {
//           user.purchase_status = false;
//           fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
//         }
//       } catch (err) {
//         console.error('Failed to update user after subscription cancellation:', err.message);
//       }
//       break;
//     }
//
//     case 'invoice.payment_failed': {
//       const invoice = event.data.object;
//       // Optionally notify user of failed payment
//       // Could send email via mailer utility
//       break;
//     }
//   }
//
//   res.json({ received: true });
// });

// STRIPE_ACTIVATE: Customer portal session (for managing subscriptions)
// router.post('/customer-portal', async (req, res) => {
//   try {
//     const { stripeCustomerId } = req.body;
//
//     if (!stripeCustomerId) {
//       return res.status(400).json({ error: 'Customer ID is required.' });
//     }
//
//     const portalSession = await stripe.billingPortal.sessions.create({
//       customer: stripeCustomerId,
//       return_url: `${process.env.APP_URL}/#/account`
//     });
//
//     res.json({ url: portalSession.url });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to create portal session.' });
//   }
// });

module.exports = router;
