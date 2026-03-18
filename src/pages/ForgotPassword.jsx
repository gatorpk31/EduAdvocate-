import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await resetPassword(email);
      setSent(true);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page auth-page">
      <h1>Reset Password</h1>

      {sent ? (
        <div className="success-message" aria-live="polite">
          If an account exists with that email, you will receive a password reset link shortly.
          <br /><br />
          <Link to="/login">Back to Sign In</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="auth-form" aria-label="Reset password">
          <div className="form-group">
            <label htmlFor="reset-email">Email <span aria-hidden="true">*</span></label>
            <input
              id="reset-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              autoComplete="email"
            />
          </div>

          {error && <p className="error-message" role="alert">{error}</p>}

          <button type="submit" className="btn btn-primary">Send Reset Link</button>
        </form>
      )}

      <p className="auth-links">
        <Link to="/login">Back to Sign In</Link>
      </p>
    </div>
  );
}
