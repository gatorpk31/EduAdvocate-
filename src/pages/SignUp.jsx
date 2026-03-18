import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '', password: '', role: '', state: '', ageConfirmed: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.ageConfirmed) {
      setError('You must confirm that you are 18 years of age or older.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await signUp(form.email, form.password, form.role, form.state || null);
      navigate('/account');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="page auth-page">
      <h1>Create Account</h1>
      <p className="auth-note">
        Accounts are optional. The screener, payment, and guide all work without one. An account
        saves only your email, role, and state preference.
      </p>
      <p className="auth-note">
        We store only your email address and role preference. We never store any information
        about your child. Your guide is created in your browser and never sent to our servers.
      </p>

      <form onSubmit={handleSubmit} className="auth-form" aria-label="Create account">
        <div className="form-group">
          <label htmlFor="signup-email">Email <span aria-hidden="true">*</span></label>
          <input
            id="signup-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-password">Password <span aria-hidden="true">*</span></label>
          <input
            id="signup-password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            aria-required="true"
            minLength={8}
            autoComplete="new-password"
          />
          <p className="form-hint" id="password-hint">Minimum 8 characters</p>
        </div>

        <div className="form-group">
          <label htmlFor="signup-role">Role <span aria-hidden="true">*</span></label>
          <select
            id="signup-role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            required
            aria-required="true"
          >
            <option value="">Select role</option>
            <option value="parent">Parent</option>
            <option value="educator">Educator</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="signup-state">State (optional)</label>
          <input
            id="signup-state"
            type="text"
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value.toUpperCase().slice(0, 2) })}
            maxLength={2}
            placeholder="e.g., MI"
          />
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.ageConfirmed}
              onChange={(e) => setForm({ ...form, ageConfirmed: e.target.checked })}
              required
              aria-required="true"
            />
            I confirm that I am 18 years of age or older. <span aria-hidden="true">*</span>
          </label>
          <p className="form-hint">PlanVocate is for adults only. Do not create an account if you are under 18.</p>
        </div>

        {error && <p className="error-message" role="alert">{error}</p>}

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      <p className="auth-links">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
