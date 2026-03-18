import { useState } from 'react';
import { submitFeedback } from '../utils/api';

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    email: '', role: '', whatWorked: '', whatToImprove: '', featureRequests: '', rating: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await submitFeedback(form);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  }

  if (submitted) {
    return (
      <div className="page feedback-page">
        <h1>Feedback</h1>
        <div className="success-message" aria-live="polite">
          Thank you. Your feedback goes directly to our team.
        </div>
      </div>
    );
  }

  return (
    <div className="page feedback-page">
      <h1>Share Your Feedback</h1>
      <p>Help us improve PlanVocate. Your feedback is private and never displayed publicly.</p>

      <form onSubmit={handleSubmit} className="feedback-form" aria-label="Product feedback">
        <div className="form-group">
          <label htmlFor="fb-email">Email (optional)</label>
          <input
            id="fb-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fb-role">Role <span aria-hidden="true">*</span></label>
          <select
            id="fb-role"
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

        <fieldset className="form-group">
          <legend>Rating (optional)</legend>
          <div className="star-rating" role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className="star-label">
                <input
                  type="radio"
                  name="fb-rating"
                  value={n}
                  checked={form.rating === n}
                  onChange={() => setForm({ ...form, rating: n })}
                  aria-label={`${n} star${n > 1 ? 's' : ''}`}
                />
                <span className={form.rating >= n ? 'star filled' : 'star'} aria-hidden="true">★</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="fb-worked">What worked well?</label>
          <textarea
            id="fb-worked"
            value={form.whatWorked}
            onChange={(e) => setForm({ ...form, whatWorked: e.target.value })}
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fb-improve">What could be improved?</label>
          <textarea
            id="fb-improve"
            value={form.whatToImprove}
            onChange={(e) => setForm({ ...form, whatToImprove: e.target.value })}
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fb-features">Feature requests</label>
          <textarea
            id="fb-features"
            value={form.featureRequests}
            onChange={(e) => setForm({ ...form, featureRequests: e.target.value })}
            rows={3}
          />
        </div>

        {error && <p className="error-message" role="alert">{error}</p>}

        <button type="submit" className="btn btn-primary">Send Feedback</button>
      </form>
    </div>
  );
}
