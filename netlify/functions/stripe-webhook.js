// netlify/functions/stripe-webhook.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// TODO: configure email provider and uncomment to enable admin notifications
// async function notifyAdmin(purchase) {
//   // Send email to ADMIN_EMAIL about new purchase
//   // Include: purchase.customer_email, purchase.stripe_session_id, purchase.purchased_at
// }

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const sig = event.headers['stripe-signature'];
  if (!sig) {
    return { statusCode: 400, body: 'Missing stripe-signature header' };
  }

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;

    const meta = session.metadata || {};
    let concerns = null;
    try { concerns = JSON.parse(meta.guide_concerns || 'null'); } catch {}

    const { error } = await supabase
      .from('guide_purchases')
      .insert({
        stripe_session_id: session.id,
        customer_email: session.customer_email || session.customer_details?.email || null,
        guide_state: meta.guide_state || null,
        guide_plan_type: meta.guide_plan_type || null,
        guide_grade: meta.guide_grade || null,
        guide_concerns: concerns,
      });

    if (error) {
      console.error('Failed to record purchase:', error.message);
      return { statusCode: 500, body: 'Failed to record purchase' };
    }

    // notifyAdmin({ customer_email: session.customer_email, stripe_session_id: session.id, purchased_at: new Date().toISOString() });
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
