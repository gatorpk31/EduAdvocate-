import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DisclaimerGuideHeader, DisclaimerGuideAdditional } from '../components/Disclaimer';
import { validateGuideToken, accessGuide } from '../utils/api';
import stateRights from '../data/state-rights';
import iepGoals from '../data/iep-goals';
import { accommodations504 } from '../data/accommodations-504';

const MAX_POLL_ATTEMPTS = 10;
const POLL_INTERVAL_MS = 2000;

export default function GuideResult() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const tokenParam = searchParams.get('token');

  const [guide, setGuide] = useState(null);
  const [guideToken, setGuideToken] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (sessionId) {
      // Fresh from Stripe checkout — exchange session_id for token + guide data
      let attempts = 0;
      let cancelled = false;

      async function poll() {
        while (attempts < MAX_POLL_ATTEMPTS && !cancelled) {
          attempts++;
          try {
            const res = await validateGuideToken(sessionId);
            if (res.status === 'pending') {
              // Webhook hasn't fired yet — wait and retry
              await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
              continue;
            }
            // Success
            setGuide(res.guide);
            setGuideToken(res.guideToken);
            localStorage.setItem('planvocate-guide-token', res.guideToken);
            setStatus('ready');
            return;
          } catch (err) {
            if (attempts >= MAX_POLL_ATTEMPTS) {
              setErrorMsg('We confirmed your payment but had trouble loading your guide. Please save this link and try refreshing in a moment.');
              setStatus('error');
              return;
            }
            await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
          }
        }
        if (!cancelled) {
          setErrorMsg('Your payment is being processed. Please refresh this page in a few seconds.');
          setStatus('error');
        }
      }

      poll();
      return () => { cancelled = true; };
    } else if (tokenParam) {
      // Re-access via token URL
      accessGuide(tokenParam)
        .then((res) => {
          setGuide(res.guide);
          setGuideToken(tokenParam);
          localStorage.setItem('planvocate-guide-token', tokenParam);
          setStatus('ready');
        })
        .catch(() => {
          setErrorMsg('This guide link is not valid. Please check the URL or purchase a new guide.');
          setStatus('error');
        });
    } else {
      // Check localStorage for a saved token
      const savedToken = localStorage.getItem('planvocate-guide-token');
      if (savedToken) {
        accessGuide(savedToken)
          .then((res) => {
            setGuide(res.guide);
            setGuideToken(savedToken);
            setStatus('ready');
          })
          .catch(() => {
            localStorage.removeItem('planvocate-guide-token');
            setStatus('error');
            setErrorMsg('Your saved guide link has expired. Please purchase a new guide.');
          });
      } else {
        setStatus('error');
        setErrorMsg('');
      }
    }
  }, [sessionId, tokenParam]);

  if (status === 'loading') {
    return (
      <div className="page guide-result-page">
        <h1>Preparing Your Guide…</h1>
        <p>We&apos;re confirming your payment and loading your personalized guide. This usually takes a few seconds.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="page guide-result-page">
        <h1>{errorMsg ? 'Something Went Wrong' : 'No Guide Found'}</h1>
        <p>{errorMsg || 'It looks like you haven\'t purchased a guide yet.'}</p>
        <Link to="/guide" className="btn btn-primary">
          {errorMsg ? 'Try Again' : 'Start Building Your Guide'}
        </Link>
      </div>
    );
  }

  const stateData = stateRights[guide.state];
  const isIEP = guide.planType === 'iep';

  const relevantGoals = isIEP
    ? iepGoals.filter(
        (g) => guide.concerns.includes(g.area) && g.grade === guide.grade
      )
    : [];

  const relevantAccommodations = !isIEP
    ? accommodations504.filter((a) => guide.concerns.includes(a.area))
    : [];

  const planInfo = isIEP ? stateData?.iep : stateData?.plan504;

  const guideUrl = guideToken
    ? `${window.location.origin}/guide/result?token=${guideToken}`
    : null;

  return (
    <div className="page guide-result-page">
      <DisclaimerGuideHeader />

      <h1>Your {isIEP ? 'IEP' : '504'} Meeting Prep Guide</h1>
      <p className="guide-meta">
        {stateData?.name} | Grade {guide.grade} | {isIEP ? 'IEP (IDEA)' : '504 Plan (Section 504)'}
      </p>

      {guideUrl && (
        <div className="guide-token-notice">
          <strong>Bookmark this link</strong> to access your guide anytime:
          <br />
          <a href={guideUrl}>{guideUrl}</a>
        </div>
      )}

      <section aria-labelledby="rights-heading">
        <h2 id="rights-heading">Your Rights in {stateData?.name}</h2>
        {planInfo && (
          <>
            <h3>Responsible Agency</h3>
            <p>{planInfo.agencyName}</p>

            <h3>Parent Rights</h3>
            <p>{planInfo.parentRights}</p>

            <h3>Dispute Resolution</h3>
            <p>{planInfo.disputeResolution}</p>

            {stateData.doeUrl && (
              <p>
                <strong>State Department of Education:</strong>{' '}
                <a href={stateData.doeUrl} target="_blank" rel="noopener noreferrer">
                  {stateData.doeUrl}
                </a>
              </p>
            )}
          </>
        )}
      </section>

      {isIEP && relevantGoals.length > 0 && (
        <section aria-labelledby="goals-heading">
          <h2 id="goals-heading">Suggested IEP Goal Frameworks</h2>
          <p>
            These are example goal frameworks based on your areas of concern. Discuss with the IEP
            team to customize goals for the student&apos;s specific needs.
          </p>
          {relevantGoals.map((g, i) => (
            <article key={i} className="goal-card">
              <h3>{g.area.charAt(0).toUpperCase() + g.area.slice(1)} — Grade {g.grade}</h3>
              <p><strong>Example Goal:</strong> {g.goal}</p>
              <p className="legal-note">{g.legal}</p>
            </article>
          ))}
        </section>
      )}

      {!isIEP && relevantAccommodations.length > 0 && (
        <section aria-labelledby="accommodations-heading">
          <h2 id="accommodations-heading">Suggested 504 Accommodations</h2>
          <p>
            These accommodations are based on your areas of concern. Discuss with the 504 team to
            determine which are appropriate for the student.
          </p>
          {relevantAccommodations.map((a) => (
            <article key={a.id} className="accommodation-card">
              <h3>{a.area.charAt(0).toUpperCase() + a.area.slice(1)}</h3>
              <p><strong>Accommodation:</strong> {a.accommodation}</p>
              <p><strong>Rationale:</strong> {a.rationale}</p>
              <p className="legal-note"><strong>Legal Basis:</strong> {a.legalBasis}</p>
            </article>
          ))}
        </section>
      )}

      <section aria-labelledby="prep-heading">
        <h2 id="prep-heading">Meeting Preparation Tips</h2>
        <ol>
          <li>Review your child&apos;s current {isIEP ? 'IEP' : '504 plan'} before the meeting</li>
          <li>Write down your top concerns and questions in advance</li>
          <li>Bring copies of any relevant evaluations, report cards, or work samples</li>
          <li>You have the right to bring someone with you for support</li>
          <li>Take notes during the meeting or ask to record it (check your state&apos;s rules)</li>
          <li>Request a copy of the final {isIEP ? 'IEP' : '504 plan'} before signing</li>
          <li>You do not have to sign the {isIEP ? 'IEP' : '504 plan'} at the meeting — you can take it home to review</li>
          {isIEP && (
            <li>Under IDEA (34 CFR §300.322), the school must ensure you can participate — request rescheduling if needed</li>
          )}
        </ol>
      </section>

      <DisclaimerGuideAdditional />

      <div className="guide-actions">
        <button className="btn btn-primary" onClick={() => window.print()}>
          Print This Guide
        </button>
        <Link to="/guide" className="btn btn-secondary">Build Another Guide</Link>
        <Link to="/feedback" className="btn btn-outline">Share Feedback</Link>
      </div>
    </div>
  );
}
