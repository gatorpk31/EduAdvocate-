import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DisclaimerBanner } from '../components/Disclaimer';

const QUESTIONS = [
  {
    id: 'disability',
    text: 'Does the student have a diagnosed disability or suspected condition that affects learning?',
    options: ['Yes', 'No', 'Not sure'],
  },
  {
    id: 'academic-impact',
    text: 'Is the student struggling academically, behaviorally, or socially in school?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    id: 'services-needed',
    text: 'Does the student need specialized instruction or accommodations to access education?',
    options: ['Specialized instruction (e.g., modified curriculum, pull-out services)', 'Accommodations only (e.g., extra time, preferential seating)', 'Not sure'],
  },
  {
    id: 'current-support',
    text: 'Is the student currently receiving any school-based support?',
    options: ['Yes, an IEP', 'Yes, a 504 plan', 'Yes, informal supports', 'No'],
  },
  {
    id: 'evaluation',
    text: 'Has the student been evaluated by the school for special education eligibility?',
    options: ['Yes', 'No', 'Evaluation requested but not yet completed'],
  },
];

export default function Screener() {
  const [answers, setAnswers] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('planvocate-screener-answers')) || {}; } catch { return {}; }
  });
  const [showResult, setShowResult] = useState(() => sessionStorage.getItem('planvocate-screener-done') === 'true');

  const allAnswered = QUESTIONS.every((q) => answers[q.id]);

  function getResult() {
    const needsSpecialized = answers['services-needed']?.startsWith('Specialized');
    const hasDiagnosis = answers['disability'] === 'Yes';
    const hasImpact = answers['academic-impact'] === 'Yes' || answers['academic-impact'] === 'Sometimes';

    if (needsSpecialized && hasDiagnosis && hasImpact) {
      return {
        recommendation: 'IEP',
        explanation: 'Based on your responses, the student may benefit from an Individualized Education Program (IEP) under IDEA. An IEP provides specialized instruction and related services. Under 34 CFR §300.301, parents have the right to request an initial evaluation at any time.',
      };
    }
    if (hasDiagnosis && hasImpact) {
      return {
        recommendation: '504',
        explanation: 'Based on your responses, the student may benefit from a 504 plan under Section 504 of the Rehabilitation Act. A 504 plan provides accommodations to ensure equal access to education. Under 34 CFR §104.35, the school must evaluate the student before making a placement decision.',
      };
    }
    if (hasImpact) {
      return {
        recommendation: 'Evaluation',
        explanation: 'Based on your responses, the student may benefit from a formal evaluation to determine eligibility for an IEP or 504 plan. Under IDEA (34 CFR §300.301), parents have the right to request an evaluation in writing at any time. The school must respond to this request.',
      };
    }
    return {
      recommendation: 'Learn More',
      explanation: 'Based on your responses, the student may not currently meet eligibility criteria for an IEP or 504 plan. However, circumstances change. Visit our Learning Center to understand your rights and options.',
    };
  }

  return (
    <div className="page screener-page">
      <DisclaimerBanner />
      <h1>Free Eligibility Screener</h1>
      <p>
        This 2-minute screener helps you understand whether an IEP or 504 plan may be
        appropriate. No account required. No information is stored.
      </p>

      {!showResult ? (
        <form
          onSubmit={(e) => { e.preventDefault(); sessionStorage.setItem('planvocate-screener-answers', JSON.stringify(answers)); sessionStorage.setItem('planvocate-screener-done', 'true'); setShowResult(true); }}
          aria-label="Eligibility screener"
        >
          {QUESTIONS.map((q, qi) => (
            <fieldset key={q.id} className="screener-question">
              <legend>{qi + 1}. {q.text}</legend>
              {q.options.map((opt) => (
                <label key={opt} className="radio-label">
                  <input
                    type="radio"
                    name={q.id}
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={() => setAnswers({ ...answers, [q.id]: opt })}
                    required
                  />
                  {opt}
                </label>
              ))}
            </fieldset>
          ))}
          <button type="submit" className="btn btn-primary" disabled={!allAnswered}>
            See Results
          </button>
        </form>
      ) : (
        <div className="screener-result" aria-live="polite">
          <h2>Screener Result: {getResult().recommendation}</h2>
          <p>{getResult().explanation}</p>
          <div className="screener-actions">
            <Link to="/guide" className="btn btn-primary">Build Your Meeting Guide — $5</Link>
            <Link to="/learn" className="btn btn-secondary">Visit Learning Center</Link>
            <button className="btn btn-outline" onClick={() => { sessionStorage.removeItem('planvocate-screener-answers'); sessionStorage.removeItem('planvocate-screener-done'); setShowResult(false); setAnswers({}); }}>
              Retake Screener
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
