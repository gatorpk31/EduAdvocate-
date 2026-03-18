import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DisclaimerBanner } from '../components/Disclaimer';
import stateRights from '../data/state-rights';
import iepGoals from '../data/iep-goals';
import { accommodations504 } from '../data/accommodations-504';

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

const STEPS = ['State & Plan Type', 'Grade & Concerns', 'Review & Generate'];

export default function Guide() {
  const navigate = useNavigate();
  const [step, setStep] = useState(() => {
    const saved = sessionStorage.getItem('planvocate-guide-step');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [form, setForm] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('planvocate-guide-form')) || { state: '', planType: '', grade: '', concerns: [] }; } catch { return { state: '', planType: '', grade: '', concerns: [] }; }
  });

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

  function canAdvance() {
    if (step === 0) return form.state && form.planType;
    if (step === 1) return form.grade && form.concerns.length > 0;
    return true;
  }

  function handleGenerate() {
    // Store selections in sessionStorage for the result page
    sessionStorage.setItem('planvocate-guide', JSON.stringify(form));
    navigate('/guide/result');
  }

  const selectedState = stateRights[form.state];

  return (
    <div className="page guide-page">
      <DisclaimerBanner />
      <h1>Build Your Meeting Prep Guide</h1>
      <p>
        Answer a few questions to generate a personalized, printable guide for your IEP or 504
        meeting. All processing happens in your browser — no child data is ever sent to our servers.
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
        <section aria-label="Step 3: Review your selections">
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
          </dl>

          <p>
            Your guide will include state-specific rights, suggested{' '}
            {form.planType === 'iep' ? 'IEP goals' : 'accommodations'}, and meeting preparation
            tips tailored to your selections.
          </p>

          <p className="auth-note">
            Generating a guide costs $10 (one-time, no subscription). After payment, your guide
            will be created entirely in your browser.
          </p>
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
          <button className="btn btn-primary" onClick={handleGenerate}>
            Generate Guide — $10
          </button>
        )}
      </div>
    </div>
  );
}
