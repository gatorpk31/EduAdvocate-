import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import {
  adminLogin,
  adminGetDashboard,
  adminGetReviews,
  adminUpdateReview,
  adminGetFeedback,
  adminToggleFeedbackRead,
  adminGetPurchases,
  adminGetAlerts,
  adminCreateAlert,
  adminUpdateAlert,
} from '../utils/api';

const STATES_LIST = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC'];

function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await adminLogin(password);
      onLogin(password);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="page admin-page">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit} className="auth-form" aria-label="Admin login">
        <div className="form-group">
          <label htmlFor="admin-pw">Admin Password</label>
          <input
            id="admin-pw"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        {error && <p className="error-message" role="alert">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

function AdminDashboard({ password, onLogout }) {
  return (
    <div className="page admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button className="btn btn-secondary" onClick={onLogout}>Log Out</button>
      </div>
      <nav className="admin-nav" aria-label="Admin navigation">
        <NavLink to="/admin" end className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Overview
        </NavLink>
        <NavLink to="/admin/reviews" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Reviews
        </NavLink>
        <NavLink to="/admin/feedback" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Feedback
        </NavLink>
        <NavLink to="/admin/purchases" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Purchases
        </NavLink>
        <NavLink to="/admin/alerts" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Alerts
        </NavLink>
      </nav>

      <Routes>
        <Route index element={<AdminOverview password={password} />} />
        <Route path="reviews" element={<AdminReviews password={password} />} />
        <Route path="feedback" element={<AdminFeedback password={password} />} />
        <Route path="purchases" element={<AdminPurchases password={password} />} />
        <Route path="alerts" element={<AdminAlerts password={password} />} />
      </Routes>
    </div>
  );
}

function AdminOverview({ password }) {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    adminGetDashboard(password)
      .then(setStats)
      .catch((err) => setError(err.message));
  }, [password]);

  if (error) return <p className="error-message" role="alert">{error}</p>;
  if (!stats) return <p>Loading overview...</p>;

  return (
    <section aria-label="Admin overview">
      <h2>Overview</h2>
      <div className="admin-stats">
        <div className="stat-card">
          <span className="stat-number">{stats.pendingReviews}</span>
          <span className="stat-label">Pending Reviews</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{stats.approvedReviews}</span>
          <span className="stat-label">Approved Reviews</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{stats.unreadFeedback}</span>
          <span className="stat-label">Unread Feedback</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{stats.totalPurchases}</span>
          <span className="stat-label">Total Purchases</span>
        </div>
      </div>
    </section>
  );
}

function AdminReviews({ password }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('pending');

  useEffect(() => {
    loadReviews();
  }, [password]);

  async function loadReviews() {
    try {
      const data = await adminGetReviews(password);
      setReviews(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  async function handleStatusChange(id, status) {
    try {
      await adminUpdateReview(password, id, status);
      setReviews(reviews.map((r) => r.id === id ? { ...r, status } : r));
    } catch (err) {
      setError(err.message);
    }
  }

  const filtered = reviews.filter((r) => filter === 'all' || r.status === filter);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <section aria-label="Review moderation">
      <h2>Review Moderation</h2>
      {error && <p className="error-message" role="alert">{error}</p>}

      <div className="admin-filters">
        {['pending', 'approved', 'rejected', 'all'].map((f) => (
          <button
            key={f}
            className={`btn btn-small ${filter === f ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f !== 'all' && ` (${reviews.filter((r) => r.status === f).length})`}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p>No {filter === 'all' ? '' : filter} reviews.</p>
      ) : (
        <ul className="admin-list">
          {filtered.map((r) => (
            <li key={r.id} className="admin-item">
              <div className="admin-item-header">
                <strong>{r.reviewer_first_name || 'Anonymous'}</strong>
                <span> — {r.reviewer_role}{r.reviewer_state ? `, ${r.reviewer_state}` : ''}</span>
                <span className="review-rating" aria-label={`${r.rating} out of 5`}>
                  {' '}{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                </span>
              </div>
              <p>{r.review_text}</p>
              <p className="text-secondary">
                Submitted: {new Date(r.submitted_at).toLocaleDateString()}
                {' | Status: '}<strong>{r.status}</strong>
              </p>
              {r.status === 'pending' && (
                <div className="admin-actions">
                  <button className="btn btn-small btn-primary" onClick={() => handleStatusChange(r.id, 'approved')}>
                    Approve
                  </button>
                  <button className="btn btn-small btn-danger" onClick={() => handleStatusChange(r.id, 'rejected')}>
                    Reject
                  </button>
                </div>
              )}
              {r.status === 'approved' && (
                <div className="admin-actions">
                  <button className="btn btn-small btn-danger" onClick={() => handleStatusChange(r.id, 'rejected')}>
                    Reject
                  </button>
                </div>
              )}
              {r.status === 'rejected' && (
                <div className="admin-actions">
                  <button className="btn btn-small btn-primary" onClick={() => handleStatusChange(r.id, 'approved')}>
                    Approve
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function AdminFeedback({ password }) {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadFeedback();
  }, [password]);

  async function loadFeedback() {
    try {
      const data = await adminGetFeedback(password);
      setFeedback(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  async function toggleRead(id, currentRead) {
    try {
      await adminToggleFeedbackRead(password, id, !currentRead);
      setFeedback(feedback.map((f) => f.id === id ? { ...f, admin_read: !currentRead } : f));
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p>Loading feedback...</p>;

  return (
    <section aria-label="Feedback management">
      <h2>Feedback</h2>
      {error && <p className="error-message" role="alert">{error}</p>}
      {feedback.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul className="admin-list">
          {feedback.map((f) => (
            <li key={f.id} className={`admin-item ${f.admin_read ? '' : 'unread'}`}>
              <div className="admin-item-header">
                <strong>{f.submitter_role}</strong>
                {f.submitter_email && <span> — {f.submitter_email}</span>}
                {f.rating && <span> | Rating: {f.rating}/5</span>}
              </div>
              {f.what_worked && <p><strong>What worked:</strong> {f.what_worked}</p>}
              {f.what_to_improve && <p><strong>To improve:</strong> {f.what_to_improve}</p>}
              {f.feature_requests && <p><strong>Feature requests:</strong> {f.feature_requests}</p>}
              <p className="text-secondary">
                Submitted: {new Date(f.submitted_at).toLocaleDateString()}
              </p>
              <div className="admin-actions">
                <button
                  className={`btn btn-small ${f.admin_read ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => toggleRead(f.id, f.admin_read)}
                >
                  {f.admin_read ? 'Mark Unread' : 'Mark Read'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function AdminPurchases({ password }) {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    adminGetPurchases(password)
      .then(setPurchases)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [password]);

  if (loading) return <p>Loading purchases...</p>;

  return (
    <section aria-label="Purchase history">
      <h2>Guide Purchases</h2>
      {error && <p className="error-message" role="alert">{error}</p>}
      {purchases.length === 0 ? (
        <p>No purchases yet.</p>
      ) : (
        <ul className="admin-list">
          {purchases.map((p) => (
            <li key={p.id} className="admin-item">
              <div className="admin-item-header">
                <strong>{p.customer_email}</strong>
              </div>
              <p className="text-secondary">
                Purchased: {new Date(p.purchased_at).toLocaleDateString()}
                {' | Token used: '}{p.token_used ? 'Yes' : 'No'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function AdminAlerts({ password }) {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ state: '', alert_text: '', effective_date: '', active: true });

  useEffect(() => {
    loadAlerts();
  }, [password]);

  async function loadAlerts() {
    try {
      const data = await adminGetAlerts(password);
      setAlerts(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  async function handleCreate(e) {
    e.preventDefault();
    try {
      const newAlert = await adminCreateAlert(password, form);
      setAlerts([newAlert, ...alerts]);
      setForm({ state: '', alert_text: '', effective_date: '', active: true });
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  }

  async function toggleActive(id, currentActive) {
    try {
      await adminUpdateAlert(password, id, { active: !currentActive });
      setAlerts(alerts.map((a) => a.id === id ? { ...a, active: !currentActive } : a));
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p>Loading alerts...</p>;

  return (
    <section aria-label="Alerts management">
      <h2>Legislative Alerts</h2>
      {error && <p className="error-message" role="alert">{error}</p>}

      {!showForm ? (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Create Alert
        </button>
      ) : (
        <form onSubmit={handleCreate} className="admin-form" aria-label="Create alert">
          <div className="form-group">
            <label htmlFor="alert-state">State (optional)</label>
            <select id="alert-state" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })}>
              <option value="">All states</option>
              {STATES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="alert-text">Alert Text</label>
            <textarea
              id="alert-text"
              value={form.alert_text}
              onChange={(e) => setForm({ ...form, alert_text: e.target.value })}
              required
              rows={3}
            />
          </div>
          <div className="form-group">
            <label htmlFor="alert-date">Effective Date (optional)</label>
            <input
              id="alert-date"
              type="date"
              value={form.effective_date}
              onChange={(e) => setForm({ ...form, effective_date: e.target.value })}
            />
          </div>
          <div className="admin-actions">
            <button type="submit" className="btn btn-primary">Save Alert</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}

      {alerts.length === 0 ? (
        <p>No alerts created yet.</p>
      ) : (
        <ul className="admin-list">
          {alerts.map((a) => (
            <li key={a.id} className={`admin-item ${a.active ? '' : 'inactive'}`}>
              <div className="admin-item-header">
                <strong>{a.state || 'All States'}</strong>
                <span className={`badge ${a.active ? 'badge-active' : 'badge-inactive'}`}>
                  {a.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <p>{a.alert_text}</p>
              {a.effective_date && (
                <p className="text-secondary">Effective: {new Date(a.effective_date).toLocaleDateString()}</p>
              )}
              <div className="admin-actions">
                <button
                  className={`btn btn-small ${a.active ? 'btn-danger' : 'btn-primary'}`}
                  onClick={() => toggleActive(a.id, a.active)}
                >
                  {a.active ? 'Deactivate' : 'Activate'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function Admin() {
  const [password, setPassword] = useState(() => sessionStorage.getItem('planvocate-admin-pw'));

  function handleLogin(pw) {
    sessionStorage.setItem('planvocate-admin-pw', pw);
    setPassword(pw);
  }

  function handleLogout() {
    sessionStorage.removeItem('planvocate-admin-pw');
    setPassword(null);
  }

  if (!password) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard password={password} onLogout={handleLogout} />;
}
