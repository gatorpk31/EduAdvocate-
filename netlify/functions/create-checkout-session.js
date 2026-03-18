// netlify/functions/create-checkout-session.js
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { customerEmail, guideState, planType, grade, concerns, relationship, issues } = JSON.parse(event.body || '{}');

    if (!guideState || !planType || !grade || !concerns?.length) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing guide selections' }) };
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: customerEmail || undefined,
      line_items: [{
        price: process.env.STRIPE_GUIDE_PRICE_ID,
        quantity: 1,
      }],
      metadata: {
        guide_state: guideState,
        guide_plan_type: planType,
        guide_grade: grade,
        guide_concerns: JSON.stringify(concerns),
        guide_relationship: relationship || '',
        guide_issues: JSON.stringify(issues || []),
      },
      payment_intent_data: {
        statement_descriptor_suffix: 'PLANVOCATE',
      },
      // Stripe Tax: currently disabled.
      // To enable: go to Stripe Dashboard → Tax → Enable automatic tax collection,
      // then add: automatic_tax: { enabled: true }
      // No code changes beyond this line are needed.
      // The product tax code is set to txcd_10103001 (Information Services — General)
      // in the Stripe Dashboard, so rates will auto-apply when Tax is enabled.
      success_url: `${process.env.URL}/guide/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL}/guide?canceled=true`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error('Checkout session error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create checkout session' }),
    };
  }
};
