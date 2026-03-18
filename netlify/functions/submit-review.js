// netlify/functions/submit-review.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// TODO: configure email provider and uncomment to enable admin notifications
// async function notifyAdmin(review) {
//   // Send email to ADMIN_EMAIL about new review
//   // Include: review.reviewer_first_name, review.rating, review.review_text
// }

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { firstName, role, state, rating, reviewText } = JSON.parse(event.body || '{}');

    if (!firstName || !role || !rating || !reviewText) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    if (rating < 1 || rating > 5) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Rating must be between 1 and 5' }) };
    }

    if (reviewText.length > 500) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Review text exceeds 500 character limit' }) };
    }

    const { error } = await supabase
      .from('reviews')
      .insert({
        reviewer_first_name: firstName,
        reviewer_role: role,
        reviewer_state: state || null,
        rating,
        review_text: reviewText,
        status: 'pending',
      });

    if (error) {
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }

    // notifyAdmin({ reviewer_first_name: firstName, rating, review_text: reviewText });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Review submission error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
