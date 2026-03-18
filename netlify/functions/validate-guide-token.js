// netlify/functions/validate-guide-token.js
// Exchanges a Stripe session_id for a guide_token + form data.
// Called once after Stripe redirect. The guide_token is the permanent access key.
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { sessionId } = JSON.parse(event.body || '{}');
    if (!sessionId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing sessionId' }) };
    }

    const { data: purchase, error } = await supabase
      .from('guide_purchases')
      .select('guide_token, guide_state, guide_plan_type, guide_grade, guide_concerns, guide_relationship, guide_issues')
      .eq('stripe_session_id', sessionId)
      .single();

    if (error || !purchase) {
      // Webhook may not have fired yet — tell the client to retry
      return { statusCode: 202, body: JSON.stringify({ status: 'pending' }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        guideToken: purchase.guide_token,
        guide: {
          state: purchase.guide_state,
          planType: purchase.guide_plan_type,
          grade: purchase.guide_grade,
          concerns: purchase.guide_concerns || [],
          relationship: purchase.guide_relationship || '',
          issues: purchase.guide_issues || [],
        },
      }),
    };
  } catch (err) {
    console.error('Token validation error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
