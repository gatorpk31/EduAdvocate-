import { useState, useEffect } from 'react';
import { getApprovedReviews, submitReview } from '../utils/api';

const STATES_LIST = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC'];

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    firstName: '', role: '', state: '', rating: 0, reviewText: '', confirmed: false,
  });

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    try {
      const data = await getApprovedReviews();
      setReviews(data || []);
    } catch {
      // silently fail — page still works with empty reviews
    }
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await submitReview({
        firstName: form.firstName,
        role: form.role,
        state: form.state || null,
        rating: form.rating,
        reviewText: form.reviewText,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  }

  const charCount = form.reviewText.length;

  return (
    <div className="page reviews-page">
      <h1>Reviews</h1>

      {loading ? (
        <p aria-live="polite">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p>Reviews coming soon — be the first to share your experience.</p>
      ) : (
        <div className="reviews-list">
          {reviews.map((r, i) => (
            <article key={i} className="review-card">
              <div className="review-rating" aria-label={`${r.rating} out of 5 stars`}>
                {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
              </div>
              <p className="review-text">{r.review_text}</p>
              <p className="review-meta">
                — {r.reviewer_first_name}, {r.reviewer_role}
                {r.reviewer_state ? `, ${r.reviewer_state}` : ''}
              </p>
            </article>
          ))}
        </div>
      )}

      {!showForm && !submitted && (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Write a Review
        </button>
      )}

      {submitted && (
        <div className="success-message" aria-live="polite">
          Thank you. Reviews are read by our team before posting, usually within 48 hours.
        </div>
      )}

      {showForm && !submitted && (
        <form onSubmit={handleSubmit} className="review-form" aria-label="Submit a review">
          <div className="form-group">
            <label htmlFor="rev-name">First Name <span aria-hidden="true">*</span></label>
            <input
              id="rev-name"
              type="text"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rev-role">Role <span aria-hidden="true">*</span></label>
            <select
              id="rev-role"
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
            <label htmlFor="rev-state">State (optional)</label>
            <select
              id="rev-state"
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
            >
              <option value="">Select state</option>
              {STATES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <fieldset className="form-group">
            <legend>Rating <span aria-hidden="true">*</span></legend>
            <div className="star-rating" role="radiogroup" aria-label="Rating">
              {[1, 2, 3, 4, 5].map((n) => (
                <label key={n} className="star-label">
                  <input
                    type="radio"
                    name="rating"
                    value={n}
                    checked={form.rating === n}
                    onChange={() => setForm({ ...form, rating: n })}
                    required
                    aria-label={`${n} star${n > 1 ? 's' : ''}`}
                  />
                  <span className={form.rating >= n ? 'star filled' : 'star'} aria-hidden="true">★</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="rev-text">Your Review <span aria-hidden="true">*</span></label>
            <textarea
              id="rev-text"
              value={form.reviewText}
              onChange={(e) => setForm({ ...form, reviewText: e.target.value.slice(0, 500) })}
              required
              aria-required="true"
              maxLength={500}
              rows={4}
              aria-describedby="rev-text-count"
            />
            <p id="rev-text-count" className="char-count">{charCount}/500 characters</p>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={form.confirmed}
                onChange={(e) => setForm({ ...form, confirmed: e.target.checked })}
                required
                aria-required="true"
              />
              I confirm this reflects my genuine experience with PlanVocate. <span aria-hidden="true">*</span>
            </label>
          </div>

          {error && <p className="error-message" role="alert">{error}</p>}

          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      )}
    </div>
  );
}
