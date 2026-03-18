import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DisclaimerBanner } from '../components/Disclaimer';
import { createCheckoutSession } from '../utils/api';
import stateRights from '../data/state-rights';

const STATES = Object.entries(stateRights).map(([code, s]) => ({ code, name: s.name }));
const PLAN_TYPES = [
  { value: 'iep', label: 'IEP (Individualized Education Program)' },
  { value: '504', label: '504 Plan (Section 504 Accommodations)' },
];
const GRADE_RANGES = ['K-2', '3-5', '6-8', '9-12'];
const CONCERN_AREAS = [
  'reading', 'written expression', 'math', 'behavior', 'communication',
  'social-emotional', 'motor skills', 'attention', 'executive functioning',
  'adaptive/daily living',
];

const SCHOOL_RELATIONSHIP = [
  { value: 'just-starting', label: 'Just starting — haven\'t had a formal meeting yet' },
  { value: 'cooperative', label: 'Generally cooperative — the school has been responsive' },
  { value: 'mixed', label: 'Mixed — some things are working, others are not' },
  { value: 'adversarial', label: 'Adversarial — the school has been resistant or dismissive' },
];

const EXPERIENCE_ISSUES = [
  { value: 'evaluation-denied', label: 'Evaluation request was delayed or denied' },
  { value: 'services-denied', label: 'Services or accommodations were denied' },
  { value: 'services-reduced', label: 'Services were reduced without my input' },
  { value: 'services-not-implemented', label: 'Services/accommodations aren\'t being followed' },
  { value: 'poor-communication', label: 'School doesn\'t communicate or respond to me' },
  { value: 'predetermination', label: 'Decisions feel made before the meeting starts' },
  { value: 'behavior-discipline', label: 'Child is being disciplined for disability-related behavior' },
  { value: 'disagreement', label: 'I disagree with the school\'s recommendations' },
];

const STEPS = ['State & Plan Type', 'Grade & Concerns', 'Your Experience', 'Review & Generate'];

export default function Guide() {
  const [searchParams] = useSearchParams();
  const canceled = searchParams.get('canceled') === 'true';
  const [step, setStep] = useState(() => {
    const saved = sessionStorage.getItem('planvocate-guide-step');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [form, setForm] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('planvocate-guide-form')) || {
        state: '', planType: '', grade: '', concerns: [],
        relationship: '', issues: [], situationNotes: '',
      };
    } catch {
      return { state: '', planType: '', grade: '', concerns: [], relationship: '', issues: [], situationNotes: '' };
    }
  });
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    sessionStorage.setItem('planvocate-guide-form', JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    sessionStorage.setItem('planvocate-guide-step', String(step));
  }, [step]);

  function toggleConcern(area) {
    setForm((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(area)
        ? prev.concerns.filter((c) => c !== area)
        : [...prev.concerns, area],
    }));
  }

  function toggleIssue(issue) {
    setForm((prev) => ({
      ...prev,
      issues: prev.issues.includes(issue)
        ? prev.issues.filter((i) => i !== issue)
        : [...prev.issues, issue],
    }));
  }

  function canAdvance() {
    if (step === 0) return form.state && form.planType;
    if (step === 1) return form.grade && form.concerns.length > 0;
    if (step === 2) return form.relationship; // at least select relationship
    return true;
  }

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const { url } = await createCheckoutSession({
        customerEmail: email || undefined,
        guideState: form.state,
        planType: form.planType,
        grade: form.grade,
        concerns: form.concerns,
        relationship: form.relationship,
        issues: form.issues,
        situationNotes: form.situationNotes,
      });
      window.location.href = url;
    } catch (err) {
      setError(err.message || 'Failed to start checkout. Please try again.');
      setLoading(false);
    }
  }

  const selectedState = stateRights[form.state];

  return (
    <div className="page guide-page">
      <DisclaimerBanner />
      <h1>Build Your Meeting Prep Guide</h1>
      <p>
        Answer a few questions to generate a personalized, printable guide for your IEP or 504
        meeting — including questions to ask, how to respond to common school pushback, and
        advice tailored to your specific situation.
      </p>

      <div className="guide-progress" role="group" aria-label="Guide builder steps">
        {STEPS.map((label, i) => (
          <span
            key={label}
            className={`step-indicator${i === step ? ' active' : ''}${i < step ? ' completed' : ''}`}
            aria-current={i === step ? 'step' : undefined}
          >
            {i + 1}. {label}
          </span>
        ))}
      </div>

      {step === 0 && (
        <section aria-label="Step 1: Select state and plan type">
          <div className="form-group">
            <label htmlFor="guide-state">
              State <span aria-hidden="true">*</span>
            </label>
            <select
              id="guide-state"
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              required
              aria-required="true"
            >
              <option value="">Select your state</option>
              {STATES.map((s) => (
                <option key={s.code} value={s.code}>{s.name}</option>
              ))}
            </select>
          </div>

          <fieldset className="form-group">
            <legend>Plan Type <span aria-hidden="true">*</span></legend>
            {PLAN_TYPES.map((pt) => (
              <label key={pt.value} className="radio-label">
                <input
                  type="radio"
                  name="planType"
                  value={pt.value}
                  checked={form.planType === pt.value}
                  onChange={() => setForm({ ...form, planType: pt.value })}
                  required
                />
                {pt.label}
              </label>
            ))}
          </fieldset>
        </section>
      )}

      {step === 1 && (
        <section aria-label="Step 2: Grade range and areas of concern">
          <fieldset className="form-group">
            <legend>Grade Range <span aria-hidden="true">*</span></legend>
            {GRADE_RANGES.map((g) => (
              <label key={g} className="radio-label">
                <input
                  type="radio"
                  name="grade"
                  value={g}
                  checked={form.grade === g}
                  onChange={() => setForm({ ...form, grade: g })}
                  required
                />
                {g}
              </label>
            ))}
          </fieldset>

          <fieldset className="form-group">
            <legend>Areas of Concern <span aria-hidden="true">*</span> (select all that apply)</legend>
            {CONCERN_AREAS.map((area) => (
              <label key={area} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={form.concerns.includes(area)}
                  onChange={() => toggleConcern(area)}
                />
                {area.charAt(0).toUpperCase() + area.slice(1)}
              </label>
            ))}
          </fieldset>
        </section>
      )}

      {step === 2 && (
        <section aria-label="Step 3: Your experience with the school">
          <h2>Tell Us About Your Experience</h2>
          <p>
            This helps us tailor your guide with the right questions to ask and prepare you
            for common responses from the school. No identifying information is stored.
          </p>

          <fieldset className="form-group">
            <legend>How would you describe your relationship with the school so far? <span aria-hidden="true">*</span></legend>
            {SCHOOL_RELATIONSHIP.map((r) => (
              <label key={r.value} className="radio-label">
                <input
                  type="radio"
                  name="relationship"
                  value={r.value}
                  checked={form.relationship === r.value}
                  onChange={() => setForm({ ...form, relationship: r.value })}
                  required
                />
                {r.label}
              </label>
            ))}
          </fieldset>

          <fieldset className="form-group">
            <legend>Have you experienced any of the following? (select all that apply)</legend>
            {EXPERIENCE_ISSUES.map((issue) => (
              <label key={issue.value} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={form.issues.includes(issue.value)}
                  onChange={() => toggleIssue(issue.value)}
                />
                {issue.label}
              </label>
            ))}
          </fieldset>

          <div className="form-group">
            <label htmlFor="situation-notes">
              Briefly describe your situation (optional — this stays in your browser only)
            </label>
            <textarea
              id="situation-notes"
              value={form.situationNotes}
              onChange={(e) => setForm({ ...form, situationNotes: e.target.value })}
              placeholder="E.g., We asked for an evaluation in September but the school said to wait and try RTI first. My child is struggling with reading and getting more frustrated..."
              rows={4}
              maxLength={1000}
            />
            <p className="form-hint">
              This text stays in your browser and is included in your printed guide for your reference. It is not sent to our servers.
            </p>
          </div>
        </section>
      )}

      {step === 3 && (
        <section aria-label="Step 4: Review your selections">
          {canceled && (
            <p className="error-message" role="alert">
              Payment was canceled. Your selections are still here — try again when you&apos;re ready.
            </p>
          )}
          <h2>Review Your Selections</h2>
          <dl className="guide-review">
            <dt>State</dt>
            <dd>{selectedState?.name || form.state}</dd>
            <dt>Plan Type</dt>
            <dd>{form.planType === 'iep' ? 'IEP' : '504 Plan'}</dd>
            <dt>Grade Range</dt>
            <dd>{form.grade}</dd>
            <dt>Areas of Concern</dt>
            <dd>{form.concerns.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}</dd>
            <dt>School Relationship</dt>
            <dd>{SCHOOL_RELATIONSHIP.find((r) => r.value === form.relationship)?.label || form.relationship}</dd>
            {form.issues.length > 0 && (
              <>
                <dt>Issues Experienced</dt>
                <dd>{form.issues.map((i) => EXPERIENCE_ISSUES.find((e) => e.value === i)?.label || i).join('; ')}</dd>
              </>
            )}
          </dl>

          <p>
            Your guide will include state-specific rights, suggested{' '}
            {form.planType === 'iep' ? 'IEP goals' : 'accommodations'}, questions to ask during
            the meeting, how to respond to common school pushback, and preparation tips tailored
            to your specific situation.
          </p>

          <div className="form-group">
            <label htmlFor="guide-email">
              Email (optional — for your payment receipt)
            </label>
            <input
              id="guide-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <p className="auth-note">
            Generating a guide costs $5 (one-time, no subscription). After payment, you&apos;ll
            receive a permanent link to access your guide anytime.
          </p>

          {error && <p className="error-message" role="alert">{error}</p>}
        </section>
      )}

      <div className="guide-nav">
        {step > 0 && (
          <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button
            className="btn btn-primary"
            onClick={() => setStep(step + 1)}
            disabled={!canAdvance()}
          >
            Next
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleCheckout} disabled={loading}>
            {loading ? 'Redirecting to checkout…' : 'Generate Guide — $5'}
          </button>
        )}
      </div>
    </div>
  );
}
