/* ═══════════════════════════════════════════
   PlanVocate — Guide Generation Module
   100% Client-Side — NO child data sent to server
   ═══════════════════════════════════════════ */

var EduGuide = (function () {

  function getStateData(abbr) {
    if (typeof EduStates === 'undefined') return null;
    return EduStates.find(function (s) { return s.abbreviation === abbr; }) || null;
  }

  function getDisabilityData(id) {
    if (typeof EduDisabilities === 'undefined') return null;
    return EduDisabilities.find(function (d) { return d.id === id; }) || null;
  }

  function formatDate() {
    var d = new Date();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  function getPlanLabel(planType) {
    return planType === '504' ? '504 Plan' : 'IEP';
  }

  function getLawLabel(planType) {
    return planType === '504' ? 'Section 504 of the Rehabilitation Act' : 'the Individuals with Disabilities Education Act (IDEA)';
  }

  function getMeetingLabel(meetingType) {
    var labels = {
      'initial-iep': 'Initial Eligibility Determination / First IEP',
      'annual-iep': 'Annual IEP Review',
      'triennial': 'Triennial Re-Evaluation',
      'amendment': 'IEP Amendment Meeting',
      'transition': 'Transition Planning Meeting',
      'dispute-iep': 'Dispute / Disagreement Meeting',
      'initial-504': 'Initial 504 Plan Development',
      'annual-504': 'Annual 504 Review',
      'modification-504': 'Modification of Existing Accommodations',
      'dispute-504': 'Dispute / Disagreement Meeting'
    };
    return labels[meetingType] || meetingType;
  }

  function getGradeLabel(grade) {
    var labels = {
      'prek': 'Pre-K / Preschool',
      'K-2': 'Kindergarten \u2013 2nd Grade',
      '3-5': '3rd \u2013 5th Grade',
      '6-8': '6th \u2013 8th Grade',
      '9-12': '9th \u2013 12th Grade',
      'transition': 'Transition Program (ages 18\u201321)'
    };
    return labels[grade] || grade;
  }

  /* ════════════════════════════════════════
     MAIN GUIDE GENERATION FUNCTION
     ════════════════════════════════════════ */
  function generateGuide(state) {
    var stateData = getStateData(state.state);
    var stateName = stateData ? stateData.name : state.state;
    var isIEP = state.planType === 'iep';
    var is504 = state.planType === '504';

    var html = '';

    /* Guide Actions */
    html += '<div class="guide-actions" id="guide-actions">' +
      '<button class="btn btn-primary" id="guide-print-btn">Print Guide</button>' +
      '<button class="btn btn-outline" id="guide-email-btn">Email Guide to Me</button>' +
      '<div id="guide-email-form" style="display:none;margin-top:12px;">' +
        '<div class="form-group" style="display:flex;gap:8px;align-items:flex-end;">' +
          '<div style="flex:1;">' +
            '<label for="guide-email-input">Email address</label>' +
            '<input type="email" id="guide-email-input" class="form-input" placeholder="your@email.com">' +
          '</div>' +
          '<button class="btn btn-primary btn-sm" id="guide-send-email-btn">Send</button>' +
        '</div>' +
        '<div id="guide-email-message"></div>' +
      '</div>' +
    '</div>';

    /* Guide Output Container */
    html += '<div class="guide-output" id="guide-printable">';

    /* 1. HEADER */
    html += '<div class="guide-header">' +
      '<h1>PlanVocate Meeting Guide</h1>' +
      '<p><strong>State:</strong> ' + escapeHtml(stateName) + ' | ' +
        '<strong>Plan Type:</strong> ' + getPlanLabel(state.planType) + ' | ' +
        '<strong>Meeting:</strong> ' + getMeetingLabel(state.meetingType) + '</p>' +
      '<p><strong>Grade Level:</strong> ' + getGradeLabel(state.grade) + ' | ' +
        '<strong>Generated:</strong> ' + formatDate() + '</p>' +
    '</div>';

    /* Disclaimer */
    html += '<div class="guide-disclaimer">' +
      '<strong>Disclaimer:</strong> This guide is an educational tool only. It is not legal advice. Verify current law with your state\'s Department of Education and consult a licensed professional. ' +
      'Axiom 38 LLC DBA PlanVocate.' +
    '</div>';

    /* 2. YOUR RIGHTS IN [STATE] */
    html += generateRightsSection(state, stateData, isIEP, is504);

    /* 3. WHAT TO BRING */
    html += generateWhatToBring(state, isIEP, is504);

    /* 4. WHAT TO EXPECT */
    html += generateWhatToExpect(state, isIEP, is504);

    /* 5. QUESTIONS TO ASK */
    html += generateQuestionsToAsk(state, isIEP, is504);

    /* 6. RED FLAGS */
    html += generateRedFlags(state, stateData, isIEP, is504);

    /* 7. AFTER THE MEETING */
    html += generateAfterMeeting(state, isIEP, is504);

    /* 8. DISPUTE RESOLUTION */
    html += generateDisputeResolution(state, stateData, isIEP, is504);

    /* 9. KEY RESOURCES */
    html += generateResources(state, stateData);

    html += '</div>'; /* close guide-output */
    return html;
  }

  /* ── Section 2: Rights ───────────────── */
  function generateRightsSection(state, stateData, isIEP, is504) {
    var stateName = stateData ? stateData.name : state.state;
    var html = '<div class="guide-section"><h2>Your Rights in ' + escapeHtml(stateName) + '</h2>';

    if (isIEP) {
      html += '<p>Under the Individuals with Disabilities Education Act (IDEA, 20 U.S.C. &sect;1400 et seq.) and 34 CFR Part 300, you have the following rights as a parent:</p>' +
        '<ul class="guide-checklist">' +
          '<li><strong>Prior Written Notice (34 CFR &sect;300.503):</strong> The school must give you written notice before proposing or refusing any change to your child\'s identification, evaluation, educational placement, or the provision of FAPE.</li>' +
          '<li><strong>Informed Consent:</strong> The school needs your written consent before conducting an evaluation or initiating special education services.</li>' +
          '<li><strong>Access to Records:</strong> You have the right to inspect and review all educational records related to your child.</li>' +
          '<li><strong>Independent Educational Evaluation (IEE):</strong> If you disagree with the school\'s evaluation, you may request an IEE at public expense (34 CFR &sect;300.502).</li>' +
          '<li><strong>Parent as Equal Team Member:</strong> You are an equal member of the IEP team. Your input must be considered.</li>' +
          '<li><strong>Dispute Resolution:</strong> You have the right to mediation, state complaint, and due process hearing.</li>' +
          '<li><strong>Stay-Put (Pendency):</strong> During dispute proceedings, your child remains in their current placement (34 CFR &sect;300.518).</li>' +
        '</ul>';
    }

    if (is504) {
      html += '<p>Under Section 504 of the Rehabilitation Act (29 U.S.C. &sect;794) and 34 CFR Part 104, you have the following rights as a parent:</p>' +
        '<ul class="guide-checklist">' +
          '<li><strong>Notice:</strong> The school must notify you before making any significant change to your child\'s identification, evaluation, or educational placement.</li>' +
          '<li><strong>Evaluation:</strong> Your child has the right to an evaluation before initial placement in a 504 plan and before any significant change in placement.</li>' +
          '<li><strong>Participation:</strong> You have the right to participate in meetings about your child\'s 504 plan.</li>' +
          '<li><strong>Access to Records:</strong> You have the right to review all records related to your child.</li>' +
          '<li><strong>Impartial Hearing:</strong> If you disagree with the school\'s decisions, you have the right to an impartial hearing.</li>' +
          '<li><strong>OCR Complaint:</strong> You may file a complaint with the Office for Civil Rights (OCR) if you believe the school has violated Section 504.</li>' +
        '</ul>';
    }

    if (stateData) {
      if (stateData.recordingConsent) {
        html += '<p><strong>Meeting Recording:</strong> ' + escapeHtml(stateName) + ' is a <strong>' + stateData.recordingConsent.type + ' consent</strong> state (' + escapeHtml(stateData.recordingConsent.statute) + '). ' + escapeHtml(stateData.recordingConsent.description) + '</p>';
      }

      if (stateData.stateLawsExceedingFederal && stateData.stateLawsExceedingFederal.length > 0) {
        html += '<p><strong>' + escapeHtml(stateName) + ' Laws Exceeding Federal Minimums:</strong></p><ul style="list-style:disc;margin-left:24px;">';
        stateData.stateLawsExceedingFederal.forEach(function (law) {
          html += '<li>' + escapeHtml(law) + '</li>';
        });
        html += '</ul>';
      }

      if (stateData.evaluationTimeline) {
        html += '<p><strong>Evaluation Timeline:</strong> ' + escapeHtml(stateData.evaluationTimeline) + '</p>';
      }
    }

    html += '</div>';
    return html;
  }

  /* ── Section 3: What to Bring ────────── */
  function generateWhatToBring(state, isIEP, is504) {
    var html = '<div class="guide-section"><h2>What to Bring</h2><ul class="guide-checklist">';

    /* Common items */
    html += '<li>A copy of this guide</li>' +
      '<li>A notebook and pen for notes</li>' +
      '<li>Any written communication between you and the school</li>' +
      '<li>A list of questions and concerns (included below)</li>';

    if (isIEP) {
      html += '<li>A copy of your child\'s current IEP (if one exists)</li>' +
        '<li>Any recent evaluation reports or progress reports</li>' +
        '<li>Report cards and teacher comments</li>' +
        '<li>Any private evaluations you have obtained</li>' +
        '<li>Work samples that show your child\'s current ability level</li>' +
        '<li>Your Procedural Safeguards Notice (the school should have provided this)</li>';

      if (state.meetingType === 'triennial' || state.meetingType === 'initial-iep') {
        html += '<li>Medical or psychological evaluation reports</li>' +
          '<li>Developmental or educational history documents</li>';
      }
      if (state.meetingType === 'transition') {
        html += '<li>Any vocational assessments or interest inventories</li>' +
          '<li>Information about your child\'s post-secondary goals</li>';
      }
    }

    if (is504) {
      html += '<li>A copy of your child\'s current 504 plan (if one exists)</li>' +
        '<li>Medical documentation from your child\'s doctor</li>' +
        '<li>Any notes about how accommodations have been working</li>' +
        '<li>Report cards and teacher feedback</li>';
    }

    html += '</ul></div>';
    return html;
  }

  /* ── Section 4: What to Expect ───────── */
  function generateWhatToExpect(state, isIEP, is504) {
    var html = '<div class="guide-section"><h2>What to Expect at This Meeting</h2>';
    var mt = state.meetingType;

    if (isIEP) {
      if (mt === 'initial-iep') {
        html += '<p>This is the initial eligibility determination meeting. The IEP team will review evaluation data to determine whether your child qualifies for special education under IDEA. If your child is found eligible, the team will develop the first IEP.</p>' +
          '<p><strong>What typically happens:</strong></p>' +
          '<ul style="list-style:disc;margin-left:24px;">' +
            '<li>The school psychologist or evaluator presents evaluation results</li>' +
            '<li>The team discusses whether your child meets eligibility criteria under one of the 13 IDEA disability categories</li>' +
            '<li>The team determines if your child needs specially designed instruction</li>' +
            '<li>If eligible, the team develops present levels, goals, services, and placement</li>' +
            '<li>You will be asked to sign consent for initial placement and services</li>' +
          '</ul>' +
          '<p><strong>You do not have to sign anything at the meeting.</strong> You may take documents home to review. Ask for Prior Written Notice (34 CFR &sect;300.503) for any proposal or refusal by the school.</p>';
      } else if (mt === 'annual-iep') {
        html += '<p>The annual IEP review meeting is held at least once per year to review your child\'s progress on current goals, update present levels, write new annual goals, and determine services for the coming year.</p>' +
          '<p><strong>What typically happens:</strong></p>' +
          '<ul style="list-style:disc;margin-left:24px;">' +
            '<li>The team reviews progress on current IEP goals</li>' +
            '<li>Present levels of academic achievement and functional performance (PLAAFP) are updated</li>' +
            '<li>New measurable annual goals are written</li>' +
            '<li>Services, accommodations, and placement are reviewed and updated</li>' +
            '<li>For students 16+, transition goals and services are addressed</li>' +
          '</ul>';
      } else if (mt === 'triennial') {
        html += '<p>The triennial re-evaluation occurs every three years (or sooner if requested). The team reviews existing data and determines whether additional evaluations are needed to determine continued eligibility and current needs.</p>';
      } else if (mt === 'amendment') {
        html += '<p>An IEP amendment meeting is called to make changes to the current IEP between annual reviews. Both you and the school can request an amendment meeting at any time.</p>';
      } else if (mt === 'transition') {
        html += '<p>The transition planning meeting focuses on preparing your child for life after high school. Under IDEA, transition services must be addressed beginning no later than the first IEP that will be in effect when the student turns 16 (or younger if required by state law).</p>' +
          '<p>The meeting will address post-secondary goals in education/training, employment, and independent living, along with transition services needed to reach those goals.</p>';
      } else if (mt === 'dispute-iep') {
        html += '<p>A dispute or disagreement meeting is called when you and the school cannot agree on identification, evaluation, educational placement, or FAPE. This may happen before, during, or after formal dispute resolution.</p>' +
          '<p><strong>Remember:</strong> You are an equal member of the IEP team. Your input and concerns must be considered. You have the right to disagree and to pursue dispute resolution options.</p>';
      }
    }

    if (is504) {
      if (mt === 'initial-504') {
        html += '<p>This meeting is to develop your child\'s initial 504 plan. The team will review evaluation information to determine whether your child has a physical or mental impairment that substantially limits one or more major life activities. If eligible, the team will identify accommodations and modifications for equal access.</p>';
      } else if (mt === 'annual-504') {
        html += '<p>The annual 504 review meeting assesses whether your child\'s current accommodations are effective and whether any changes are needed. The team reviews how the student is performing with current accommodations in place.</p>';
      } else if (mt === 'modification-504') {
        html += '<p>This meeting is to modify or add accommodations to your child\'s existing 504 plan. This may be requested by you or the school when current accommodations are insufficient or the student\'s needs have changed.</p>';
      } else if (mt === 'dispute-504') {
        html += '<p>A dispute meeting is called when you and the school disagree about eligibility, accommodations, or implementation of the 504 plan. You have the right to participate, to an impartial hearing, and to file an OCR complaint.</p>';
      }
    }

    html += '</div>';
    return html;
  }

  /* ── Section 5: Questions to Ask ─────── */
  function generateQuestionsToAsk(state, isIEP, is504) {
    var html = '<div class="guide-section"><h2>Questions to Ask</h2><ul class="guide-question-list">';

    if (isIEP) {
      html += '<li>What data is being used to determine present levels of academic achievement and functional performance (PLAAFP)?</li>' +
        '<li>Are the proposed goals measurable? How specifically will progress be measured and how often will I receive progress reports?</li>' +
        '<li>What specially designed instruction will be provided, and for how many minutes per week?</li>' +
        '<li>What related services (speech, OT, PT, counseling) are being recommended, and what is the frequency and duration?</li>' +
        '<li>How does this placement meet the requirement for the least restrictive environment (LRE)?</li>' +
        '<li>What supplementary aids and services will be provided in the general education setting?</li>' +
        '<li>Will I receive Prior Written Notice for every proposal or refusal discussed today (34 CFR &sect;300.503)?</li>' +
        '<li>What accommodations will my child receive on state and district assessments?</li>';

      if (state.meetingType === 'initial-iep') {
        html += '<li>Under which IDEA disability category is my child being found eligible?</li>' +
          '<li>What evaluation instruments were used, and who administered them?</li>' +
          '<li>If my child is not found eligible, what is the basis for that determination?</li>';
      }
      if (state.meetingType === 'transition') {
        html += '<li>What are the measurable post-secondary goals for education/training, employment, and independent living?</li>' +
          '<li>What transition assessments were used to develop these goals?</li>' +
          '<li>What agencies or organizations have been invited to participate in transition planning?</li>';
      }
    }

    if (is504) {
      html += '<li>What evaluation data was used to determine eligibility under Section 504?</li>' +
        '<li>What major life activity is substantially limited by my child\'s condition?</li>' +
        '<li>How will each accommodation be implemented in the classroom?</li>' +
        '<li>Who is responsible for ensuring each accommodation is consistently provided?</li>' +
        '<li>How will we know if the accommodations are working?</li>' +
        '<li>When will this plan be reviewed?</li>' +
        '<li>What is the process if I disagree with the team\'s decisions?</li>' +
        '<li>Can I receive a copy of the written 504 plan before I leave today?</li>';
    }

    /* Situation-specific questions */
    var experiences = state.pastExperiences || [];

    if (experiences.indexOf('rushed-signing') !== -1) {
      html += '<li><strong>Because you felt rushed to sign:</strong> Am I required to sign anything today? I would like to take all documents home to review before signing.</li>';
    }
    if (experiences.indexOf('budget-cited') !== -1) {
      html += '<li><strong>Because budget was cited:</strong> Can you confirm that the determination of services is based on my child\'s individual needs, not on available resources or budget? ' +
        (isIEP ? '(Under IDEA, cost cannot be the basis for denying FAPE.)' : '(Under Section 504, a school cannot deny equal access based on cost.)') + '</li>';
    }
    if (experiences.indexOf('vague-goals') !== -1 && isIEP) {
      html += '<li><strong>Because goals seemed vague:</strong> Can we review each goal to ensure it includes the specific behavior, conditions, criteria, and measurement method required under 34 CFR &sect;300.320?</li>';
    }
    if (experiences.indexOf('dismissed') !== -1) {
      html += '<li><strong>Because your input was dismissed:</strong> I want to make sure my concerns are documented in the meeting notes. ' +
        (isIEP ? 'As an equal member of the IEP team, my input must be considered.' : 'As a member of the 504 team, I have the right to participate in decisions about my child.') + '</li>';
    }
    if (experiences.indexOf('pre-written') !== -1) {
      html += '<li><strong>Because the plan appeared pre-written:</strong> Was this ' + getPlanLabel(state.planType) + ' drafted before today\'s meeting? ' +
        (isIEP ? 'Under IDEA, the IEP must be developed collaboratively with parent input. A pre-written IEP denies meaningful parent participation.' : 'The 504 plan should be developed collaboratively with input from the group, including parents.') + '</li>';
    }
    if (experiences.indexOf('eval-delayed') !== -1) {
      html += '<li><strong>Because evaluation was delayed:</strong> Can you provide documentation of when the evaluation was requested and when it was completed? What is the evaluation timeline required by our state?</li>';
    }
    if (experiences.indexOf('verbal-promises') !== -1) {
      html += '<li><strong>Because promises were not written in:</strong> Can we ensure that everything discussed and agreed upon today is documented in writing in the ' + getPlanLabel(state.planType) + '? If it is not in the written plan, it is not legally enforceable.</li>';
    }
    if (experiences.indexOf('recording-denied') !== -1) {
      html += '<li><strong>Because recording was denied:</strong> What is the school\'s policy on recording meetings? What is our state\'s recording consent law?</li>';
    }

    html += '</ul></div>';
    return html;
  }

  /* ── Section 6: Red Flags ────────────── */
  function generateRedFlags(state, stateData, isIEP, is504) {
    var html = '<div class="guide-section"><h2>Red Flags to Watch For</h2>';
    var experiences = state.pastExperiences || [];
    var hasSpecific = experiences.length > 0 && experiences.indexOf('first-meeting') === -1;

    if (hasSpecific) {
      if (experiences.indexOf('rushed-signing') !== -1) {
        html += '<div class="guide-red-flag">' +
          '<h4>Being Pressured to Sign</h4>' +
          '<p>You are never required to sign anything at the meeting. You have the right to take all documents home, review them, and return your consent later.</p>' +
          '<div class="guide-script"><strong>You can say:</strong> "I appreciate the team\'s work today. I would like to take these documents home to review carefully before I sign anything. When is the deadline for me to return my signed consent?"</div>' +
        '</div>';
      }
      if (experiences.indexOf('budget-cited') !== -1) {
        html += '<div class="guide-red-flag">' +
          '<h4>Budget Cited as a Reason to Limit Services</h4>' +
          '<p>' + (isIEP ? 'Under IDEA, a school district cannot deny FAPE based on cost or available resources. Services must be determined by the child\'s individual needs.' : 'Under Section 504, a school cannot deny equal access or necessary accommodations based on cost.') + '</p>' +
          '<div class="guide-script"><strong>You can say:</strong> "I understand there are resource considerations, but I need to be sure that the services being offered are based on my child\'s individual needs, not on budget limitations. Can we focus on what my child needs?"</div>' +
        '</div>';
      }
      if (experiences.indexOf('vague-goals') !== -1 && isIEP) {
        html += '<div class="guide-red-flag">' +
          '<h4>Goals That Are Not Measurable</h4>' +
          '<p>Under IDEA (34 CFR &sect;300.320), every IEP goal must be measurable. A goal like "Student will improve reading" is not measurable. A measurable goal specifies what the student will do, under what conditions, to what level of performance, measured how.</p>' +
          '<div class="guide-script"><strong>You can say:</strong> "Can we make this goal more specific? I want to understand exactly what my child will be working toward, how we will measure progress, and what success looks like."</div>' +
        '</div>';
      }
      if (experiences.indexOf('dismissed') !== -1) {
        html += '<div class="guide-red-flag">' +
          '<h4>Parent Concerns Being Dismissed</h4>' +
          '<p>' + (isIEP ? 'Under IDEA, you are an equal member of the IEP team. Your concerns, observations, and input about your child must be considered by the team.' : 'Under Section 504, parents have the right to participate in placement decisions and meetings about their child.') + '</p>' +
          '<div class="guide-script"><strong>You can say:</strong> "I want to make sure my concern about [specific issue] is documented in the meeting notes and addressed. As a member of this team, my input is important."</div>' +
        '</div>';
      }
      if (experiences.indexOf('pre-written') !== -1) {
        html += '<div class="guide-red-flag">' +
          '<h4>Pre-Written Plan</h4>' +
          '<p>' + (isIEP ? 'Under IDEA, an IEP must be developed collaboratively at the IEP meeting with parent input. A draft is acceptable as a starting point for discussion, but presenting a finalized IEP denies meaningful parent participation.' : 'A 504 plan should be developed with input from all team members, including parents. Presenting a completed plan without discussion undermines the collaborative process.') + '</p>' +
          '<div class="guide-script"><strong>You can say:</strong> "I notice this plan appears to be fully written already. I want to make sure this is a draft and that my input today will be incorporated. Can we go through each section together?"</div>' +
        '</div>';
      }
      if (experiences.indexOf('verbal-promises') !== -1) {
        html += '<div class="guide-red-flag">' +
          '<h4>Verbal Promises Not in Writing</h4>' +
          '<p>If a commitment is not written in the ' + getPlanLabel(state.planType) + ', it is not legally enforceable. Everything the team agrees to must be documented in the written plan.</p>' +
          '<div class="guide-script"><strong>You can say:</strong> "Thank you for that commitment. Can we make sure it is included in the written ' + getPlanLabel(state.planType) + ' before we conclude?"</div>' +
        '</div>';
      }
      if (experiences.indexOf('recording-denied') !== -1) {
        html += '<div class="guide-red-flag">' +
          '<h4>Told You Cannot Record the Meeting</h4>';
        if (stateData && stateData.recordingConsent) {
          html += '<p>Your state (' + escapeHtml(stateData.name) + ') is a <strong>' + stateData.recordingConsent.type + ' consent</strong> state for recording. ' + escapeHtml(stateData.recordingConsent.description) + '</p>';
        }
        html += '<div class="guide-script"><strong>You can say:</strong> "I would like to record this meeting to make sure I understand everything discussed. Can we clarify the school\'s policy and our state\'s law on recording?"</div>' +
        '</div>';
      }
      if (experiences.indexOf('eval-delayed') !== -1) {
        html += '<div class="guide-red-flag">' +
          '<h4>Evaluation Delayed Beyond Legal Timeline</h4>' +
          '<p>' + (isIEP ? 'Under IDEA, the school has a specific timeline to complete an evaluation after receiving parent consent. The federal standard is 60 days, but some states have different timelines.' : 'Under Section 504, evaluations should be completed within a reasonable time frame.') + '</p>' +
          '<div class="guide-script"><strong>You can say:</strong> "I requested this evaluation on [date]. Can you confirm that the evaluation was completed within the required timeline? If not, I would like to understand why there was a delay."</div>' +
        '</div>';
      }
    } else {
      /* General red flags for first-time attendees */
      html += '<div class="guide-red-flag">' +
        '<h4>Pressure to Sign Immediately</h4>' +
        '<p>You are never required to sign at the meeting. Take documents home to review.</p>' +
        '<div class="guide-script"><strong>You can say:</strong> "I\'d like to take this home and review it before signing."</div>' +
      '</div>';

      if (isIEP) {
        html += '<div class="guide-red-flag">' +
          '<h4>No Prior Written Notice</h4>' +
          '<p>The school must provide Prior Written Notice (34 CFR &sect;300.503) for any proposal or refusal regarding identification, evaluation, placement, or FAPE.</p>' +
          '<div class="guide-script"><strong>You can say:</strong> "I would like to receive Prior Written Notice for this proposal/refusal as required by IDEA."</div>' +
        '</div>';
      }

      html += '<div class="guide-red-flag">' +
        '<h4>Verbal Agreements Without Documentation</h4>' +
        '<p>Ensure everything discussed is written in the plan. Verbal promises are not enforceable.</p>' +
        '<div class="guide-script"><strong>You can say:</strong> "Can we add that to the written plan?"</div>' +
      '</div>';
    }

    html += '</div>';
    return html;
  }

  /* ── Section 7: After the Meeting ────── */
  function generateAfterMeeting(state, isIEP, is504) {
    var html = '<div class="guide-section"><h2>After the Meeting — Action Steps</h2><ol style="list-style:decimal;margin-left:24px;">';

    html += '<li>Review all documents you received at the meeting carefully.</li>';

    if (isIEP) {
      html += '<li>Confirm you received Prior Written Notice for every proposal or refusal discussed (34 CFR &sect;300.503).</li>' +
        '<li>Review each goal to ensure it is measurable and reflects what was discussed at the meeting.</li>' +
        '<li>Verify that all services, including frequency, duration, and location, are accurately documented.</li>' +
        '<li>If you signed consent, check that your signature is only on documents you intentionally signed.</li>' +
        '<li>If you did not sign, return your signed consent or written disagreement within the timeline discussed.</li>' +
        '<li>Create a filing system for all IEP documents, evaluations, and correspondence.</li>' +
        '<li>Mark your calendar for the next progress report date and the annual review date.</li>' +
        '<li>If you disagree with any part of the IEP, put your disagreement in writing to the school.</li>';
    }

    if (is504) {
      html += '<li>Get a copy of the final written 504 plan if you did not receive one at the meeting.</li>' +
        '<li>Review each accommodation to ensure it matches what was discussed.</li>' +
        '<li>If you agreed to the plan, ensure all teachers receive a copy and understand their responsibilities.</li>' +
        '<li>If you disagree, put your concerns in writing to the 504 coordinator.</li>' +
        '<li>Monitor whether accommodations are being consistently implemented.</li>' +
        '<li>Document any instances where accommodations are not provided.</li>' +
        '<li>Mark your calendar for the next review date.</li>';
    }

    html += '<li>Keep a communication log of all contacts with the school about your child\'s plan.</li>' +
      '<li>If you have unresolved concerns, review the dispute resolution section below.</li>';

    html += '</ol></div>';
    return html;
  }

  /* ── Section 8: Dispute Resolution ───── */
  function generateDisputeResolution(state, stateData, isIEP, is504) {
    var html = '<div class="guide-section"><h2>Dispute Resolution</h2>';

    if (isIEP) {
      html += '<p>Under IDEA, you have several dispute resolution options:</p>' +
        '<h3>Mediation (34 CFR &sect;300.506)</h3>' +
        '<p>Voluntary process where a neutral mediator helps you and the school reach agreement. Both parties must agree to mediation. It is free to parents. Agreements are legally binding.</p>' +

        '<h3>State Complaint (34 CFR &sect;300.151\u2013300.153)</h3>' +
        '<p>You may file a written complaint with your state Department of Education alleging that the school violated IDEA. The state must investigate and issue findings within 60 days. The complaint can address violations that occurred within the past year.</p>' +

        '<h3>Due Process Hearing (34 CFR &sect;300.507\u2013300.516)</h3>' +
        '<p>A formal legal proceeding before an impartial hearing officer. Either party can file. There is a two-year statute of limitations in most states. You have the right to an attorney, to present evidence, and to cross-examine witnesses.</p>' +

        '<h3>Stay-Put / Pendency (34 CFR &sect;300.518)</h3>' +
        '<p>During due process proceedings, your child remains in their current educational placement until the dispute is resolved, unless you and the school agree otherwise.</p>';
    }

    if (is504) {
      html += '<p>Under Section 504 and ADA Title II, you have the following dispute resolution options:</p>' +

        '<h3>School-Level Grievance</h3>' +
        '<p>Most school districts have an internal grievance procedure for Section 504 complaints. Contact your school\'s 504 coordinator to learn the process.</p>' +

        '<h3>OCR Complaint (Primary Remedy)</h3>' +
        '<p>You may file a complaint with the U.S. Department of Education\'s Office for Civil Rights (OCR). OCR investigates complaints of disability discrimination under Section 504 and ADA Title II. File within 180 days of the alleged discrimination at <strong>ocrcomplaint.ed.gov</strong>.</p>' +

        '<h3>ADA Title II Complaint</h3>' +
        '<p>You may file an ADA Title II complaint with the U.S. Department of Justice if you believe the school has discriminated against your child based on disability.</p>' +

        '<h3>Impartial Hearing</h3>' +
        '<p>Section 504 regulations (34 CFR &sect;104.36) require schools to provide an impartial hearing procedure for parents who disagree with identification, evaluation, or placement decisions.</p>';

      if (stateData && stateData.complaintContact) {
        html += '<h3>Mediation</h3>' +
          '<p>Some states offer mediation for Section 504 disputes. Check with your state Department of Education.</p>';
      }
    }

    if (stateData) {
      html += '<h3>State Contacts for Filing</h3><ul style="list-style:disc;margin-left:24px;">';
      if (stateData.stateDOE) {
        html += '<li><strong>' + escapeHtml(stateData.stateDOE.name) + ':</strong> ' + (stateData.stateDOE.phone || '') + (stateData.stateDOE.website ? ' — <a href="' + stateData.stateDOE.website + '" target="_blank" rel="noopener noreferrer">' + stateData.stateDOE.website + '</a>' : '') + '</li>';
      }
      if (stateData.complaintContact) {
        html += '<li><strong>Complaint Filing:</strong> ' + escapeHtml(stateData.complaintContact.description) + (stateData.complaintContact.website ? ' — <a href="' + stateData.complaintContact.website + '" target="_blank" rel="noopener noreferrer">' + stateData.complaintContact.website + '</a>' : '') + '</li>';
      }
      if (stateData.ocrRegionalOffice) {
        html += '<li><strong>OCR Regional Office (' + escapeHtml(stateData.ocrRegionalOffice.region) + '):</strong> ' + (stateData.ocrRegionalOffice.phone || '') + '</li>';
      }
      html += '</ul>';
    }

    html += '</div>';
    return html;
  }

  /* ── Section 9: Key Resources ────────── */
  function generateResources(state, stateData) {
    var html = '<div class="guide-section"><h2>Key Resources</h2><ul style="list-style:disc;margin-left:24px;">';

    if (stateData) {
      if (stateData.pti) {
        html += '<li><strong>Parent Training Center:</strong> ' + escapeHtml(stateData.pti.name) +
          (stateData.pti.phone ? ' — ' + escapeHtml(stateData.pti.phone) : '') +
          (stateData.pti.website ? ' — <a href="' + stateData.pti.website + '" target="_blank" rel="noopener noreferrer">' + stateData.pti.website + '</a>' : '') + '</li>';
      }
      if (stateData.stateDOE) {
        html += '<li><strong>State DOE Special Education:</strong> ' + escapeHtml(stateData.stateDOE.name) +
          (stateData.stateDOE.phone ? ' — ' + escapeHtml(stateData.stateDOE.phone) : '') +
          (stateData.stateDOE.website ? ' — <a href="' + stateData.stateDOE.website + '" target="_blank" rel="noopener noreferrer">' + stateData.stateDOE.website + '</a>' : '') + '</li>';
      }
      if (stateData.ocrRegionalOffice) {
        html += '<li><strong>OCR Regional Office:</strong> ' + escapeHtml(stateData.ocrRegionalOffice.region) +
          (stateData.ocrRegionalOffice.phone ? ' — ' + escapeHtml(stateData.ocrRegionalOffice.phone) : '') + '</li>';
      }
    }

    html += '<li><strong>National Disability Rights Network:</strong> <a href="https://www.ndrn.org/" target="_blank" rel="noopener noreferrer">ndrn.org</a></li>' +
      '<li><strong>Wrightslaw:</strong> <a href="https://www.wrightslaw.com/" target="_blank" rel="noopener noreferrer">wrightslaw.com</a></li>' +
      '<li><strong>Understood.org:</strong> <a href="https://www.understood.org/" target="_blank" rel="noopener noreferrer">understood.org</a></li>' +
    '</ul></div>';
    return html;
  }

  /* ── Guide Actions ───────────────────── */
  function bindGuideActions(guideState) {
    var printBtn = document.getElementById('guide-print-btn');
    var emailBtn = document.getElementById('guide-email-btn');
    var emailForm = document.getElementById('guide-email-form');
    var sendBtn = document.getElementById('guide-send-email-btn');
    var emailMsg = document.getElementById('guide-email-message');

    if (printBtn) {
      printBtn.addEventListener('click', function () { window.print(); });
    }

    if (emailBtn && emailForm) {
      emailBtn.addEventListener('click', function () {
        emailForm.style.display = emailForm.style.display === 'none' ? 'block' : 'none';
      });
    }

    if (sendBtn) {
      sendBtn.addEventListener('click', async function () {
        var emailInput = document.getElementById('guide-email-input');
        var email = emailInput ? emailInput.value : '';
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          emailMsg.innerHTML = '<div class="message message-error">Please enter a valid email address.</div>';
          return;
        }

        var guideEl = document.getElementById('guide-printable');
        if (!guideEl) return;
        var guideHtml = guideEl.innerHTML;

        sendBtn.disabled = true;
        sendBtn.innerHTML = '<span class="spinner"></span>';

        try {
          var res = await fetch('/api/email/send-guide', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, guideHtml: guideHtml })
          });
          var data = await res.json();
          if (!res.ok) throw new Error(data.error);
          emailMsg.innerHTML = '<div class="message message-success">' + data.message + '</div>';
        } catch (err) {
          emailMsg.innerHTML = '<div class="message message-error">' + err.message + '</div>';
        }

        sendBtn.disabled = false;
        sendBtn.textContent = 'Send';
      });
    }
  }

  function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  return {
    generateGuide: generateGuide,
    bindGuideActions: bindGuideActions
  };
})();
