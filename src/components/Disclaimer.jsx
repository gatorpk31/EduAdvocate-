export function DisclaimerFooter() {
  return (
    <p className="disclaimer-footer">
      PlanVocate is an educational tool. Content does not constitute legal advice and does not
      create an attorney-client relationship. Consult a licensed attorney for advice specific to
      your situation. | <a href="mailto:support@planvocate.com">support@planvocate.com</a>
    </p>
  );
}

export function DisclaimerGuideHeader() {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="disclaimer-guide" role="alert">
      <strong>IMPORTANT NOTICE:</strong> This guide was generated for educational purposes based on
      general federal and state law as of {date}. It is not legal advice. It does not account for
      your specific circumstances, recent legal changes, or local school district policies. Laws and
      regulations are subject to change. Verify requirements with your state&apos;s Department of
      Education and consult a licensed attorney before taking legal action or making decisions based
      on this guide.
      <br /><br />
      PlanVocate | Axiom 38 LLC | Michigan<br />
      <a href="mailto:support@planvocate.com">support@planvocate.com</a>
    </div>
  );
}

export function DisclaimerGuideAdditional() {
  return (
    <div className="disclaimer-additional">
      This guide was generated based on general federal and state law as of the date of generation.
      It is intended to help you prepare for your meeting, not to substitute for professional legal
      counsel. School policies, individual circumstances, and recent legal developments may affect
      your rights. Verify current requirements with your state&apos;s Department of Education and
      consult an attorney if you have specific legal concerns.
    </div>
  );
}

export function DisclaimerStateRights({ stateName, lastReviewed }) {
  return (
    <div className="disclaimer-state">
      State education laws and regulations are updated regularly. The information below reflects
      general requirements and is not legal advice. Confirm current rules with your state&apos;s
      Department of Education. Last reviewed: {lastReviewed}.
    </div>
  );
}

export function DisclaimerBanner() {
  return (
    <div className="disclaimer-banner" role="note">
      PlanVocate is an educational tool. The information provided does not constitute legal advice
      and does not create an attorney-client relationship. Laws and regulations change and may vary
      in application. Always consult a licensed attorney for advice specific to your situation.
    </div>
  );
}
