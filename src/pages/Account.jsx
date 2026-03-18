import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Account() {
  const { user, profile, signOut, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div className="page"><p>Loading...</p></div>;

  if (!user) {
    navigate('/login');
    return null;
  }

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  return (
    <div className="page account-page">
      <h1>Your Account</h1>
      <p className="auth-note">
        We store only your email address and role preference. We never store any information
        about your child. Your guide is created in your browser and never sent to our servers.
      </p>

      <div className="account-info">
        <dl>
          <dt>Email</dt>
          <dd>{user.email}</dd>
          <dt>Role</dt>
          <dd>{profile?.role || 'Not set'}</dd>
          <dt>State Preference</dt>
          <dd>{profile?.state_preference || 'Not set'}</dd>
          <dt>Account Created</dt>
          <dd>{new Date(user.created_at).toLocaleDateString()}</dd>
        </dl>
      </div>

      <button className="btn btn-secondary" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
