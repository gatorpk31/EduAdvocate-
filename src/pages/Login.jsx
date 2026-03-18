import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="page auth-page">
      <h1>Sign In</h1>
      <p className="auth-note">
        We store only your email address and role preference. We never store any information
        about your child. Your guide is created in your browser and never sent to our servers.
      </p>

      <form onSubmit={handleSubmit} className="auth-form" aria-label="Sign in">
        <div className="form-group">
          <label htmlFor="login-email">Email <span aria-hidden="true">*</span></label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="login-password">Password <span aria-hidden="true">*</span></label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            autoComplete="current-password"
          />
        </div>

        {error && <p className="error-message" role="alert">{error}</p>}

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <p className="auth-links">
        <Link to="/forgot-password">Forgot password?</Link>
        {' | '}
        <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}
