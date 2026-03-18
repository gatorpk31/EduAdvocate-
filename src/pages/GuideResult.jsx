import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DisclaimerGuideHeader, DisclaimerGuideAdditional } from '../components/Disclaimer';
import { validateGuideToken, accessGuide } from '../utils/api';
import stateRights from '../data/state-rights';
import iepGoals from '../data/iep-goals';
import { accommodations504 } from '../data/accommodations-504';
import meetingQuestions from '../data/meeting-questions';
import schoolPushback from '../data/school-pushback';

const MAX_POLL_ATTEMPTS = 10;
const POLL_INTERVAL_MS = 2000;

const RELATIONSHIP_LABELS = {
  'just-starting': 'Just starting',
  cooperative: 'Generally cooperative',
  mixed: 'Mixed',
  adversarial: 'Adversarial',
};

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function GuideResult() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const tokenParam = searchParams.get('token');

  const [guide, setGuide] = useState(null);
  const [guideToken, setGuideToken] = useState(null);
  const [status, setStatus] = useState('loading');
  const [errorMsg, setErrorMsg] = useState('');

  // Situation notes are stored only in the browser
  const situationNotes = (() => {
    try {
      const form = JSON.parse(sessionStorage.getItem('planvocate-guide-form'));
      return form?.situationNotes || '';
    } catch { return ''; }
  })();

  useEffect(() => {
    if (sessionId) {
      let attempts = 0;
      let cancelled = false;

      async function poll() {
        while (attempts < MAX_POLL_ATTEMPTS && !cancelled) {
          attempts++;
          try {
            const res = await validateGuideToken(sessionId);
            if (res.status === 'pending') {
              await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
              continue;
            }
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
  const relationship = guide.relationship || 'just-starting';
  const issues = guide.issues || [];

  const relevantGoals = isIEP
    ? iepGoals.filter(
        (g) => guide.concerns.includes(g.area) && g.grade === guide.grade
      )
    : [];

  const relevantAccommodations = !isIEP
    ? accommodations504.filter((a) => guide.concerns.includes(a.area))
    : [];

  const planInfo = isIEP ? stateData?.iep : stateData?.plan504;

  // Build questions list: general + concern-specific
  const planKey = isIEP ? 'iep' : '504';
  const generalQuestions = meetingQuestions.general[planKey] || [];
  const concernQuestions = guide.concerns.flatMap(
    (area) => (meetingQuestions[area] || []).map((q) => ({ ...q, area }))
  );

  // Build pushback responses relevant to the user's situation
  const allPushback = Object.values(schoolPushback).flat();
  const relevantPushback = allPushback.filter((pb) => {
    // Show items that match user's reported issues or relationship
    if (pb.applies.includes(relationship)) return true;
    return pb.applies.some((tag) => issues.includes(tag));
  });
  // If nothing specific matched (e.g., no issues selected), show the most common ones
  const pushbackToShow = relevantPushback.length > 0
    ? relevantPushback
    : allPushback.filter((pb) =>
        pb.applies.includes('just-starting') ||
        pb.applies.includes('disagreement')
      ).slice(0, 6);

  const guideUrl = guideToken
    ? `${window.location.origin}/guide/result?token=${guideToken}`
    : null;

  return (
    <div className="page guide-result-page">
      <DisclaimerGuideHeader />

      <h1>Your {isIEP ? 'IEP' : '504'} Meeting Prep Guide</h1>
      <p className="guide-meta">
        {stateData?.name} | Grade {guide.grade} | {isIEP ? 'IEP (IDEA)' : '504 Plan (Section 504)'}
        {relationship && <> | Relationship: {RELATIONSHIP_LABELS[relationship] || relationship}</>}
      </p>

      {guideUrl && (
        <div className="guide-token-notice">
          <strong>Bookmark this link</strong> to access your guide anytime:
          <br />
          <a href={guideUrl}>{guideUrl}</a>
        </div>
      )}

      {/* ── YOUR SITUATION ── */}
      {(situationNotes || issues.length > 0) && (
        <section aria-labelledby="situation-heading" className="guide-section">
          <h2 id="situation-heading">Your Situation Summary</h2>
          {issues.length > 0 && (
            <>
              <h3>Issues You&apos;ve Experienced</h3>
              <ul className="situation-issues">
                {issues.map((issue) => (
                  <li key={issue}>{cap(issue.replace(/-/g, ' '))}</li>
                ))}
              </ul>
            </>
          )}
          {situationNotes && (
            <>
              <h3>Your Notes</h3>
              <div className="situation-notes-display">{situationNotes}</div>
            </>
          )}
          <p className="form-hint">
            This section is for your reference only. It was not sent to our servers.
          </p>
        </section>
      )}

      {/* ── STATE RIGHTS ── */}
      <section aria-labelledby="rights-heading" className="guide-section">
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

      {/* ── QUESTIONS TO ASK ── */}
      <section aria-labelledby="questions-heading" className="guide-section">
        <h2 id="questions-heading">Questions to Ask During the Meeting</h2>
        <p>
          These questions are tailored to your {isIEP ? 'IEP' : '504'} meeting and areas of concern.
          You don&apos;t need to ask all of them — pick the ones most relevant to your situation
          and check them off as you go.
        </p>

        <h3>General {isIEP ? 'IEP' : '504'} Questions</h3>
        <div className="questions-list">
          {generalQuestions.map((q, i) => (
            <article key={i} className="question-card">
              <div className="question-text">
                <input type="checkbox" className="question-checkbox" aria-label={`Mark question as asked: ${q.question}`} />
                <strong>{q.question}</strong>
              </div>
              <p className="question-why"><em>Why this matters:</em> {q.why}</p>
            </article>
          ))}
        </div>

        {concernQuestions.length > 0 && (
          <>
            <h3>Questions Based on Your Areas of Concern</h3>
            <div className="questions-list">
              {concernQuestions.map((q, i) => (
                <article key={i} className="question-card">
                  <span className="question-area-badge">{cap(q.area)}</span>
                  <div className="question-text">
                    <input type="checkbox" className="question-checkbox" aria-label={`Mark question as asked: ${q.question}`} />
                    <strong>{q.question}</strong>
                  </div>
                  <p className="question-why"><em>Why this matters:</em> {q.why}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </section>

      {/* ── SCHOOL PUSHBACK RESPONSES ── */}
      <section aria-labelledby="pushback-heading" className="guide-section">
        <h2 id="pushback-heading">How to Respond to Common School Pushback</h2>
        <p>
          Schools don&apos;t always push back out of bad intent — but knowing your rights and
          having a prepared response ensures your child gets what they need.
          {issues.length > 0 && ' These responses are selected based on the issues you reported.'}
        </p>

        <div className="pushback-list">
          {pushbackToShow.map((pb, i) => (
            <article key={i} className="pushback-card">
              <div className="pushback-school">
                <span className="pushback-label">The school says:</span>
                <p>{pb.schoolSays}</p>
              </div>
              <div className="pushback-respond">
                <span className="pushback-label">You can respond:</span>
                <p>{pb.respond}</p>
              </div>
              <p className="legal-note">{pb.legal}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── IEP GOALS ── */}
      {isIEP && relevantGoals.length > 0 && (
        <section aria-labelledby="goals-heading" className="guide-section">
          <h2 id="goals-heading">Suggested IEP Goal Frameworks</h2>
          <p>
            These are example goal frameworks based on your areas of concern. Discuss with the IEP
            team to customize goals for the student&apos;s specific needs.
          </p>
          {relevantGoals.map((g, i) => (
            <article key={i} className="goal-card">
              <h3>{cap(g.area)} — Grade {g.grade}</h3>
              <p><strong>Example Goal:</strong> {g.goal}</p>
              <p className="legal-note">{g.legal}</p>
            </article>
          ))}
        </section>
      )}

      {/* ── 504 ACCOMMODATIONS ── */}
      {!isIEP && relevantAccommodations.length > 0 && (
        <section aria-labelledby="accommodations-heading" className="guide-section">
          <h2 id="accommodations-heading">Suggested 504 Accommodations</h2>
          <p>
            These accommodations are based on your areas of concern. Discuss with the 504 team to
            determine which are appropriate for the student.
          </p>
          {relevantAccommodations.map((a) => (
            <article key={a.id} className="accommodation-card">
              <h3>{cap(a.area)}</h3>
              <p><strong>Accommodation:</strong> {a.accommodation}</p>
              <p><strong>Rationale:</strong> {a.rationale}</p>
              <p className="legal-note"><strong>Legal Basis:</strong> {a.legalBasis}</p>
            </article>
          ))}
        </section>
      )}

      {/* ── MEETING PREPARATION TIPS ── */}
      <section aria-labelledby="prep-heading" className="guide-section">
        <h2 id="prep-heading">Meeting Preparation Checklist</h2>

        <h3>Before the Meeting</h3>
        <ol>
          <li>Review your child&apos;s current {isIEP ? 'IEP' : '504 plan'} before the meeting</li>
          <li>Write down your top concerns and questions in advance (use the list above)</li>
          <li>Bring copies of any relevant evaluations, report cards, or work samples</li>
          <li>You have the right to bring someone with you for support — an advocate, family member, or friend</li>
          {relationship === 'adversarial' && (
            <li><strong>Consider bringing an educational advocate or attorney</strong> given your experience with the school</li>
          )}
          <li>Request the meeting agenda and any draft documents in advance so you can review them</li>
          {issues.includes('predetermination') && (
            <li><strong>Send a written request</strong> to receive any draft {isIEP ? 'IEP' : '504 plan'} at least 3 days before the meeting so you can prepare your input</li>
          )}
        </ol>

        <h3>During the Meeting</h3>
        <ol>
          <li>Take notes during the meeting or ask to record it (check your state&apos;s rules on recording)</li>
          <li>Ask for clarification on anything you don&apos;t understand — there&apos;s no such thing as a dumb question</li>
          <li>If something doesn&apos;t sound right, say: &quot;I&apos;d like to table this point and come back to it&quot;</li>
          <li>Make sure the team discusses <em>your</em> concerns, not just theirs</li>
          {issues.includes('poor-communication') && (
            <li><strong>Request that the team designate a single point of contact</strong> for ongoing communication about your child&apos;s plan</li>
          )}
          {(relationship === 'adversarial' || relationship === 'mixed') && (
            <li><strong>Document who attended</strong> the meeting and any commitments made — ask for these in writing</li>
          )}
        </ol>

        <h3>After the Meeting</h3>
        <ol>
          <li>Request a copy of the final {isIEP ? 'IEP' : '504 plan'} before signing</li>
          <li>You do not have to sign the {isIEP ? 'IEP' : '504 plan'} at the meeting — you can take it home to review</li>
          <li>Send a follow-up email summarizing what was discussed and agreed upon</li>
          {isIEP && (
            <li>Under IDEA (34 CFR §300.322), the school must ensure you can participate — request rescheduling if needed</li>
          )}
          {issues.includes('services-not-implemented') && (
            <li><strong>Follow up in writing within 2 weeks</strong> to confirm the agreed-upon services are being implemented</li>
          )}
          <li>If you disagree with the outcome, you have the right to request another meeting, mediation, or file for due process</li>
        </ol>
      </section>

      {/* ── NOTES SECTION ── */}
      <section className="guide-section">
        <h2>Your Meeting Notes</h2>
        <div className="guide-notes" aria-label="Space for handwritten notes">
          <p className="form-hint">Use this space to write notes during the meeting (visible when printed).</p>
        </div>
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
