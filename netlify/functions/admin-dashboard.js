// netlify/functions/admin-dashboard.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function isAuthorized(event) {
  return event.headers['x-admin-password'] === process.env.ADMIN_PASSWORD;
}

export const handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  if (!isAuthorized(event)) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  const [pendingReviews, approvedReviews, unreadFeedback, totalPurchases] = await Promise.all([
    supabase.from('reviews').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
    supabase.from('reviews').select('id', { count: 'exact', head: true }).eq('status', 'approved'),
    supabase.from('feedback').select('id', { count: 'exact', head: true }).eq('admin_read', false),
    supabase.from('guide_purchases').select('id', { count: 'exact', head: true }),
  ]);

  return {
    statusCode: 200,
    body: JSON.stringify({
      pendingReviews: pendingReviews.count || 0,
      approvedReviews: approvedReviews.count || 0,
      unreadFeedback: unreadFeedback.count || 0,
      totalPurchases: totalPurchases.count || 0,
    }),
  };
};
