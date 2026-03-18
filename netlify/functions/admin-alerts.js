// netlify/functions/admin-alerts.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function isAuthorized(event) {
  return event.headers['x-admin-password'] === process.env.ADMIN_PASSWORD;
}

export const handler = async (event) => {
  if (!isAuthorized(event)) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  if (event.httpMethod === 'GET') {
    const { data, error } = await supabase
      .from('alerts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 200, body: JSON.stringify(data) };
  }

  if (event.httpMethod === 'POST') {
    const { state, alert_text, effective_date, active } = JSON.parse(event.body || '{}');
    if (!alert_text) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing alert_text' }) };
    }

    const { data, error } = await supabase
      .from('alerts')
      .insert({ state, alert_text, effective_date, active: active !== false })
      .select()
      .single();

    if (error) {
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 201, body: JSON.stringify(data) };
  }

  if (event.httpMethod === 'PUT') {
    const { id, ...updates } = JSON.parse(event.body || '{}');
    if (!id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing id' }) };
    }

    const { error } = await supabase
      .from('alerts')
      .update(updates)
      .eq('id', id);

    if (error) {
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  }

  return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
};
