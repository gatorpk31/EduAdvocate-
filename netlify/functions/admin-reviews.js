// netlify/functions/admin-reviews.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function getAdminPassword(event) {
  return event.headers['x-admin-password'];
}

function isAuthorized(event) {
  return getAdminPassword(event) === process.env.ADMIN_PASSWORD;
}

// TODO: configure email provider and uncomment to enable admin notifications
// async function notifyAdmin(review) {
//   // Send email to ADMIN_EMAIL about new review submission
// }

export const handler = async (event) => {
  if (!isAuthorized(event)) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  if (event.httpMethod === 'GET') {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) {
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 200, body: JSON.stringify(data) };
  }

  if (event.httpMethod === 'PUT') {
    const { id, status, admin_note } = JSON.parse(event.body || '{}');
    if (!id || !status) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing id or status' }) };
    }

    const updates = { status, admin_note: admin_note || null };
    if (status === 'approved') {
      updates.approved_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from('reviews')
      .update(updates)
      .eq('id', id);

    if (error) {
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  }

  return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
};
