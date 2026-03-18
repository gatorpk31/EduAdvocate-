// netlify/functions/validate-guide-token.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

exports.handler = async (event) => {
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
      .select('guide_token, token_used')
      .eq('stripe_session_id', sessionId)
      .single();

    if (error || !purchase) {
      return { statusCode: 403, body: JSON.stringify({ error: 'Purchase not found' }) };
    }

    if (purchase.token_used) {
      return { statusCode: 403, body: JSON.stringify({ error: 'Token already used' }) };
    }

    // Mark token as used immediately
    const { error: updateError } = await supabase
      .from('guide_purchases')
      .update({ token_used: true, token_used_at: new Date().toISOString() })
      .eq('stripe_session_id', sessionId);

    if (updateError) {
      console.error('Failed to mark token as used:', updateError.message);
      return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ guideToken: purchase.guide_token }),
    };
  } catch (err) {
    console.error('Token validation error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
