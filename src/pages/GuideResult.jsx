import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DisclaimerGuideHeader, DisclaimerGuideAdditional } from '../components/Disclaimer';
import stateRights from '../data/state-rights';
import iepGoals from '../data/iep-goals';
import { accommodations504 } from '../data/accommodations-504';

export default function GuideResult() {
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('planvocate-guide');
    if (stored) {
      setGuide(JSON.parse(stored));
    }
  }, []);

  if (!guide) {
    return (
      <div className="page guide-result-page">
        <h1>No Guide Found</h1>
        <p>It looks like you haven&apos;t built a guide yet.</p>
        <Link to="/guide" className="btn btn-primary">Start Building Your Guide</Link>
      </div>
    );
  }

  const stateData = stateRights[guide.state];
  const isIEP = guide.planType === 'iep';

  // Get relevant goals or accommodations based on selections
  const relevantGoals = isIEP
    ? iepGoals.filter(
        (g) => guide.concerns.includes(g.area) && g.grade === guide.grade
      )
    : [];

  const relevantAccommodations = !isIEP
    ? accommodations504.filter((a) => guide.concerns.includes(a.area))
    : [];

  const planInfo = isIEP ? stateData?.iep : stateData?.plan504;

  return (
    <div className="page guide-result-page">
      <DisclaimerGuideHeader />

      <h1>Your {isIEP ? 'IEP' : '504'} Meeting Prep Guide</h1>
      <p className="guide-meta">
        {stateData?.name} | Grade {guide.grade} | {isIEP ? 'IEP (IDEA)' : '504 Plan (Section 504)'}
      </p>

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
