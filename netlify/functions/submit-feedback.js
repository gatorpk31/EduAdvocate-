// netlify/functions/submit-feedback.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// TODO: configure email provider and uncomment to enable admin notifications
// async function notifyAdmin(feedback) {
//   // Send email to ADMIN_EMAIL about new feedback
//   // Include: feedback.submitter_email, feedback.rating
// }

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { email, role, whatWorked, whatToImprove, featureRequests, rating } = JSON.parse(event.body || '{}');

    if (!role) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Role is required' }) };
    }

    const { error } = await supabase
      .from('feedback')
      .insert({
        submitter_email: email || null,
        submitter_role: role,
        what_worked: whatWorked || null,
        what_to_improve: whatToImprove || null,
        feature_requests: featureRequests || null,
        rating: rating || null,
      });

    if (error) {
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }

    // notifyAdmin({ submitter_email: email, rating });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Feedback submission error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
