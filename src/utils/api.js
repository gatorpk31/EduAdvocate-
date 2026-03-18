const API_BASE = '/api';

async function apiCall(endpoint, options = {}) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export function createCheckoutSession(customerEmail) {
  return apiCall('create-checkout-session', {
    method: 'POST',
    body: JSON.stringify({ customerEmail }),
  });
}

export function validateGuideToken(sessionId) {
  return apiCall('validate-guide-token', {
    method: 'POST',
    body: JSON.stringify({ sessionId }),
  });
}

export function submitReview(review) {
  return apiCall('submit-review', {
    method: 'POST',
    body: JSON.stringify(review),
  });
}

export function submitFeedback(feedback) {
  return apiCall('submit-feedback', {
    method: 'POST',
    body: JSON.stringify(feedback),
  });
}

// Admin API calls
function adminHeaders(password) {
  return { 'x-admin-password': password };
}

export function adminLogin(password) {
  return apiCall('admin-login', {
    method: 'POST',
    body: JSON.stringify({ password }),
  });
}

export function adminGetDashboard(password) {
  return apiCall('admin-dashboard', { headers: adminHeaders(password) });
}

export function adminGetReviews(password) {
  return apiCall('admin-reviews', { headers: adminHeaders(password) });
}

export function adminUpdateReview(password, id, status, admin_note) {
  return apiCall('admin-reviews', {
    method: 'PUT',
    headers: adminHeaders(password),
    body: JSON.stringify({ id, status, admin_note }),
  });
}

export function adminGetFeedback(password) {
  return apiCall('admin-feedback', { headers: adminHeaders(password) });
}

export function adminToggleFeedbackRead(password, id, admin_read) {
  return apiCall('admin-feedback', {
    method: 'PUT',
    headers: adminHeaders(password),
    body: JSON.stringify({ id, admin_read }),
  });
}

export function adminGetPurchases(password) {
  return apiCall('admin-purchases', { headers: adminHeaders(password) });
}

export function adminGetAlerts(password) {
  return apiCall('admin-alerts', { headers: adminHeaders(password) });
}

export function adminCreateAlert(password, alert) {
  return apiCall('admin-alerts', {
    method: 'POST',
    headers: adminHeaders(password),
    body: JSON.stringify(alert),
  });
}

export function adminUpdateAlert(password, id, updates) {
  return apiCall('admin-alerts', {
    method: 'PUT',
    headers: adminHeaders(password),
    body: JSON.stringify({ id, ...updates }),
  });
}
