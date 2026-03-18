// netlify/functions/access-guide.js
// Returns guide form data for a valid guide_token.
// This is the permanent re-access endpoint — no expiration.
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
    const { token } = JSON.parse(event.body || '{}');
    if (!token) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing token' }) };
    }

    const { data: purchase, error } = await supabase
      .from('guide_purchases')
      .select('guide_state, guide_plan_type, guide_grade, guide_concerns')
      .eq('guide_token', token)
      .single();

    if (error || !purchase) {
      return { statusCode: 404, body: JSON.stringify({ error: 'Guide not found' }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        guide: {
          state: purchase.guide_state,
          planType: purchase.guide_plan_type,
          grade: purchase.guide_grade,
          concerns: purchase.guide_concerns || [],
        },
      }),
    };
  } catch (err) {
    console.error('Access guide error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
