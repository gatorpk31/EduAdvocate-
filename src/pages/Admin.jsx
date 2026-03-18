import { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/.netlify/functions/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      onLogin(data.token);
    } catch (err) {
      setError(err.message);
    }
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
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
}

function AdminDashboard({ token }) {
  const [view, setView] = useState('dashboard');

  return (
    <div className="page admin-page">
      <h1>Admin Dashboard</h1>
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
      </nav>

      <Routes>
        <Route index element={<AdminOverview token={token} />} />
        <Route path="reviews" element={<AdminReviews token={token} />} />
        <Route path="feedback" element={<AdminFeedback token={token} />} />
      </Routes>
    </div>
  );
}

function AdminOverview({ token }) {
  return (
    <section aria-label="Admin overview">
      <h2>Overview</h2>
      <p>Welcome to the PlanVocate admin panel. Use the navigation above to manage reviews and feedback.</p>
    </section>
  );
}

function AdminReviews({ token }) {
  const [reviews, setReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  async function loadReviews() {
    try {
      const res = await fetch('/.netlify/functions/admin-reviews', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to load reviews');
      setReviews(data.reviews || []);
      setLoaded(true);
    } catch (err) {
      setError(err.message);
    }
  }

  if (!loaded && !error) {
    loadReviews();
    return <p>Loading reviews...</p>;
  }

  return (
    <section aria-label="Review moderation">
      <h2>Review Moderation</h2>
      {error && <p className="error-message" role="alert">{error}</p>}
      {reviews.length === 0 ? (
        <p>No reviews to moderate.</p>
      ) : (
        <ul className="admin-list">
          {reviews.map((r) => (
            <li key={r.id} className="admin-item">
              <p><strong>{r.display_name || 'Anonymous'}</strong> — {r.rating}/5</p>
              <p>{r.comment}</p>
              <p className="text-secondary">Status: {r.status}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function AdminFeedback({ token }) {
  const [feedback, setFeedback] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  async function loadFeedback() {
    try {
      const res = await fetch('/.netlify/functions/admin-feedback', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to load feedback');
      setFeedback(data.feedback || []);
      setLoaded(true);
    } catch (err) {
      setError(err.message);
    }
  }

  if (!loaded && !error) {
    loadFeedback();
    return <p>Loading feedback...</p>;
  }

  return (
    <section aria-label="Feedback management">
      <h2>Feedback</h2>
      {error && <p className="error-message" role="alert">{error}</p>}
      {feedback.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul className="admin-list">
          {feedback.map((f) => (
            <li key={f.id} className="admin-item">
              <p><strong>Rating:</strong> {f.rating}/5</p>
              {f.what_worked && <p><strong>What worked:</strong> {f.what_worked}</p>}
              {f.what_to_improve && <p><strong>To improve:</strong> {f.what_to_improve}</p>}
              {f.feature_requests && <p><strong>Features:</strong> {f.feature_requests}</p>}
              <p className="text-secondary">{new Date(f.created_at).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem('planvocate-admin-token'));

  function handleLogin(newToken) {
    sessionStorage.setItem('planvocate-admin-token', newToken);
    setToken(newToken);
  }

  if (!token) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard token={token} />;
}
