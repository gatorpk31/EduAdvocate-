/**
 * Common School Pushback Statements & How to Respond
 *
 * Organized by category. Each entry includes the school's likely statement,
 * the parent's recommended response, and the legal basis.
 *
 * All legal citations reference real federal statutes and regulations.
 */

const schoolPushback = {
  // ═══════════════════════════════════════════════════════════════
  // EVALUATION & ELIGIBILITY
  // ═══════════════════════════════════════════════════════════════
  evaluation: [
    {
      schoolSays: '"We want to try interventions first before evaluating."',
      respond: 'I appreciate the school\'s use of interventions, but I am formally requesting an evaluation under IDEA. Response to Intervention (RTI) cannot be used to delay or deny a parent-requested evaluation. Please provide me with prior written notice of your decision within a reasonable timeframe.',
      legal: 'Under 34 CFR §300.301(b), a parent may request an initial evaluation at any time. OSEP has clarified that RTI cannot be used to delay or deny an evaluation requested by a parent (OSEP Memo 11-07, January 2011).',
      applies: ['evaluation-denied', 'just-starting'],
    },
    {
      schoolSays: '"Your child doesn\'t qualify because they\'re not far enough behind."',
      respond: 'IDEA does not require a specific achievement gap or "discrepancy" for eligibility. I\'d like to understand what evaluation data was used and request a copy of the evaluation report. If I disagree, I have the right to an Independent Educational Evaluation (IEE) at public expense.',
      legal: 'Under 34 CFR §300.8, eligibility is based on having a qualifying disability that requires special education. Under 34 CFR §300.502, parents have the right to an IEE at public expense if they disagree with the school\'s evaluation.',
      applies: ['evaluation-denied', 'services-denied'],
    },
    {
      schoolSays: '"Your child is getting good grades, so they don\'t need an IEP/504."',
      respond: 'Grades alone are not a sufficient basis for denying eligibility or services. A student can be passing while still not receiving FAPE. Please look at the full picture: Is my child performing commensurate with their ability? Are they experiencing undue stress or anxiety to maintain those grades?',
      legal: 'OCR has consistently ruled that passing grades do not preclude 504 eligibility. Under IDEA, the standard is whether the child needs special education, not whether they are failing (Letter to Delisle, 62 IDELR 68, 2013).',
      applies: ['evaluation-denied', 'services-denied', 'services-reduced'],
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // SERVICES & PLACEMENT
  // ═══════════════════════════════════════════════════════════════
  services: [
    {
      schoolSays: '"We don\'t have the resources/staff to provide that service."',
      respond: 'I understand budget constraints are real, but IDEA requires that placement and service decisions be based on the child\'s individual needs, not on administrative convenience or resource availability. What is my child\'s need, and how can the team meet it?',
      legal: 'Under 34 CFR §300.116, placement decisions must be based on the child\'s IEP. Schools cannot use lack of resources as a reason to deny FAPE (Burlington School Committee v. Department of Education, 471 U.S. 359, 1985).',
      applies: ['services-denied', 'services-reduced', 'poor-communication'],
    },
    {
      schoolSays: '"We\'re going to reduce services because your child is making progress."',
      respond: 'I\'m glad my child is making progress, but I want to be sure we\'re not removing the supports that are causing that progress. Can we see the data showing my child can maintain this level of performance with reduced services? I\'d like this discussed and decided by the full team.',
      legal: 'Under 34 CFR §300.324(b)(1), the IEP team must review the IEP periodically to address any lack of expected progress. Removing supports that are working can constitute a denial of FAPE.',
      applies: ['services-reduced'],
    },
    {
      schoolSays: '"We think your child should be in a more restrictive setting."',
      respond: 'I want to understand the data supporting this recommendation. What supplementary aids and services have been tried in the current setting? IDEA requires the team to consider what supports would allow my child to remain in the least restrictive environment before moving to a more restrictive placement.',
      legal: 'Under 34 CFR §300.114 (Least Restrictive Environment), removal from the regular educational environment occurs only when the nature or severity of the disability is such that education in regular classes with the use of supplementary aids and services cannot be achieved satisfactorily.',
      applies: ['services-reduced', 'disagreement'],
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // MEETINGS & PROCESS
  // ═══════════════════════════════════════════════════════════════
  process: [
    {
      schoolSays: '"We\'ve already decided what the IEP/504 will say before the meeting."',
      respond: 'I appreciate the team preparing a draft, but decisions about my child\'s IEP must be made at the IEP meeting with parent participation. I\'d like to discuss each section and have the opportunity to provide input before anything is finalized.',
      legal: 'Under 34 CFR §300.322, schools must ensure parent participation in IEP meetings. Predetermination — making decisions before the meeting — is a procedural violation of IDEA (Deal v. Hamilton County Board of Education, 392 F.3d 840, 6th Cir. 2004).',
      applies: ['predetermination', 'poor-communication', 'disagreement'],
    },
    {
      schoolSays: '"You need to sign the IEP today."',
      respond: 'I appreciate the team\'s work, but I\'d like to take the IEP home to review before signing. I\'m not required to sign at the meeting, and my signature indicates I attended, not necessarily that I agree.',
      legal: 'There is no federal requirement for parents to sign an IEP at the meeting. Under 34 CFR §300.322, the school must give parents a copy of the IEP. Many state regulations explicitly allow parents time to review before signing.',
      applies: ['predetermination', 'disagreement', 'just-starting'],
    },
    {
      schoolSays: '"You can\'t bring an advocate/attorney to the meeting."',
      respond: 'Under IDEA, I have the right to bring anyone with knowledge or special expertise about my child to the IEP meeting. This includes advocates, attorneys, or other support persons. I\'d appreciate the school welcoming everyone who can contribute to my child\'s plan.',
      legal: 'Under 34 CFR §300.321(a)(6), parents may bring individuals with knowledge or special expertise regarding the child. The parent determines whether the individual has such knowledge or expertise.',
      applies: ['adversarial', 'disagreement'],
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // IMPLEMENTATION & ACCOUNTABILITY
  // ═══════════════════════════════════════════════════════════════
  implementation: [
    {
      schoolSays: '"The teacher didn\'t know about the IEP/504 accommodations."',
      respond: 'I understand things can be missed, but the school is responsible for ensuring all staff who work with my child are informed of and implementing the IEP/504. Can we put a system in place to make sure this doesn\'t happen again? I\'d also like to discuss compensatory services for the time accommodations were not provided.',
      legal: 'Under 34 CFR §300.323(d), each regular education teacher, special education teacher, and related service provider must be informed of their specific responsibilities under the child\'s IEP. Failure to implement is a denial of FAPE.',
      applies: ['services-not-implemented', 'poor-communication'],
    },
    {
      schoolSays: '"We\'ll start the services when we find a provider."',
      respond: 'I understand staffing challenges, but the IEP requires these services to begin by the start date listed. If the school cannot provide the services, it must find an alternative — including contracting with outside providers at no cost to the family.',
      legal: 'Under 34 CFR §300.323(c)(2), services must be provided as soon as possible following the IEP meeting. Staffing shortages do not excuse a failure to implement (Letter to Helmuth, 16 IDELR 503, OSEP 1990).',
      applies: ['services-not-implemented', 'services-denied'],
    },
    {
      schoolSays: '"We tried the accommodation and it didn\'t work, so we stopped."',
      respond: 'The team should reconvene to discuss what happened and determine an alternative rather than unilaterally removing a support. I\'d like to request an IEP/504 meeting to address this and explore other options.',
      legal: 'Changes to a child\'s IEP require a team meeting (34 CFR §300.324(b)). A school cannot unilaterally remove or change accommodations without going through the IEP/504 process.',
      applies: ['services-not-implemented', 'services-reduced', 'disagreement'],
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // DISCIPLINE & BEHAVIOR
  // ═══════════════════════════════════════════════════════════════
  discipline: [
    {
      schoolSays: '"Your child is being suspended for their behavior."',
      respond: 'Before any suspension beyond 10 cumulative days in a school year, the school must hold a manifestation determination to decide if the behavior is related to my child\'s disability. Has this been done? If not, I\'m requesting one immediately.',
      legal: 'Under 34 CFR §300.530(e), within 10 school days of any decision to change a child\'s placement due to discipline, the school must hold a manifestation determination review.',
      applies: ['behavior-discipline', 'adversarial'],
    },
    {
      schoolSays: '"We\'re calling the police because of your child\'s behavior at school."',
      respond: 'I want to understand what de-escalation was attempted first. For a child with a disability whose behavior is related to their disability, involving law enforcement should be a last resort. I\'d like to schedule an emergency IEP meeting to review the Behavior Intervention Plan.',
      legal: 'While schools can involve law enforcement, repeated criminalization of disability-related behavior may constitute discrimination under IDEA and Section 504. The DOJ/ED joint guidance (2014) addresses the school-to-prison pipeline for students with disabilities.',
      applies: ['behavior-discipline', 'adversarial'],
    },
  ],
};

export default schoolPushback;
