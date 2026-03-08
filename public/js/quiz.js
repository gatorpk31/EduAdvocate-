/* ═══════════════════════════════════════════
   EduAdvocate — Quiz / Screener / Guide Builder
   Question flow logic and branching
   ═══════════════════════════════════════════ */

var EduQuiz = (function () {

  /* ── Education Hub: IEP & 504 Tabs ───── */
  function renderEducationHub() {
    return '<div class="container section">' +
      '<h1 class="text-center">Understanding IEP and 504 Plans</h1>' +
      '<p class="text-center" style="max-width:640px;margin:0 auto 32px;">Learn about the two main plans that help children with disabilities succeed in school. These are separate legal frameworks — understanding the difference matters.</p>' +

      '<div class="tabs" role="tablist">' +
        '<button class="tab-btn active" role="tab" aria-selected="true" data-tab="tab-504">What Is a 504 Plan?</button>' +
        '<button class="tab-btn" role="tab" aria-selected="false" data-tab="tab-iep">What Is an IEP?</button>' +
        '<button class="tab-btn" role="tab" aria-selected="false" data-tab="tab-compare">Side-by-Side Comparison</button>' +
      '</div>' +

      '<div id="tab-504" class="tab-content active">' +
        render504Education() +
      '</div>' +

      '<div id="tab-iep" class="tab-content">' +
        renderIEPEducation() +
      '</div>' +

      '<div id="tab-compare" class="tab-content">' +
        renderComparisonTable() +
      '</div>' +

      '<div class="card card-accent text-center" style="max-width:640px;margin:32px auto 0;">' +
        '<h3>Not sure which applies to your child?</h3>' +
        '<p>Take the eligibility screener below — it takes less than 2 minutes.</p>' +
        '<a href="#/screener" class="btn btn-primary">Start Screener</a>' +
      '</div>' +
    '</div>';
  }

  function render504Education() {
    return '<div class="card" style="max-width:800px;margin:0 auto;">' +
      '<h2>What Is a 504 Plan?</h2>' +

      '<h3>Section 504 of the Rehabilitation Act</h3>' +
      '<p>Section 504 of the Rehabilitation Act of 1973 (29 U.S.C. &sect;794) is a federal civil rights law that prohibits discrimination against individuals with disabilities in any program that receives federal funding. Because public schools receive federal funds, they are required to provide accommodations and modifications that ensure students with disabilities have equal access to education.</p>' +

      '<h3>Who Is Eligible?</h3>' +
      '<p>A student is eligible for a 504 plan if they have any physical or mental impairment that substantially limits one or more major life activities. This is a broader standard than IEP eligibility. The disability does not need to specifically affect educational performance — it only needs to substantially limit a major life activity.</p>' +
      '<p><strong>Major life activities include:</strong> learning, reading, concentrating, thinking, communicating, caring for oneself, walking, seeing, hearing, sleeping, breathing, eating, standing, lifting, bending, speaking, working, and performing manual tasks.</p>' +

      '<h3>What Does a 504 Plan Do?</h3>' +
      '<p>A 504 plan provides accommodations and modifications that ensure a student with a disability has equal access to education. It does not provide specialized instruction — that is the purpose of an IEP under a different law. A 504 plan levels the playing field so the student can access the same curriculum and environment as their peers.</p>' +

      '<h3>What a 504 Plan Does NOT Include</h3>' +
      '<ul style="list-style:disc;margin-left:24px;margin-bottom:16px;">' +
        '<li>Specially designed instruction</li>' +
        '<li>Related services under IDEA (such as speech therapy or occupational therapy provided as special education)</li>' +
        '<li>The same level of procedural protections as an IEP</li>' +
      '</ul>' +

      '<h3>Who Develops the Plan?</h3>' +
      '<p>A 504 plan is developed by a group of people knowledgeable about the student, the meaning of the evaluation data, and the placement options. Parents are part of this group. The group reviews available information and determines what accommodations the student needs for equal access.</p>' +

      '<h3>Parent Rights Under Section 504</h3>' +
      '<ul style="list-style:disc;margin-left:24px;margin-bottom:16px;">' +
        '<li>Notice before any significant change in placement</li>' +
        '<li>Right to participate in meetings about your child</li>' +
        '<li>Periodic review of the 504 plan</li>' +
        '<li>Right to an impartial hearing if you disagree with the school\'s decisions</li>' +
        '<li>Right to file a complaint with the Office for Civil Rights (OCR)</li>' +
      '</ul>' +

      '<h3>Common 504 Accommodations</h3>' +
      '<ul style="list-style:disc;margin-left:24px;margin-bottom:16px;">' +
        '<li>Extended time on tests and assignments</li>' +
        '<li>Preferential seating</li>' +
        '<li>Frequent breaks</li>' +
        '<li>Reduced assignment length</li>' +
        '<li>Text-to-speech technology</li>' +
        '<li>Speech-to-text technology</li>' +
        '<li>Behavior support plan</li>' +
        '<li>Access to school nurse</li>' +
        '<li>Modified physical education</li>' +
      '</ul>' +

      '<h3>Legal Sources</h3>' +
      '<p class="text-small text-muted">Section 504 of the Rehabilitation Act (29 U.S.C. &sect;794) &bull; ADA Title II (42 U.S.C. &sect;12132) &bull; OCR Dear Colleague Letters &bull; 34 CFR Part 104</p>' +
    '</div>';
  }

  function renderIEPEducation() {
    return '<div class="card" style="max-width:800px;margin:0 auto;">' +
      '<h2>What Is an IEP?</h2>' +

      '<h3>The Individuals with Disabilities Education Act (IDEA)</h3>' +
      '<p>The Individuals with Disabilities Education Act (20 U.S.C. &sect;1400 et seq.) is a federal special education law that requires public schools to provide a Free Appropriate Public Education (FAPE) to children with qualifying disabilities. FAPE means specially designed instruction and related services at no cost to the family, designed to meet the child\'s unique needs.</p>' +

      '<h3>The 13 Federal Disability Categories Under IDEA</h3>' +
      '<ol style="list-style:decimal;margin-left:24px;margin-bottom:16px;">' +
        '<li>Autism</li>' +
        '<li>Deaf-Blindness</li>' +
        '<li>Deafness</li>' +
        '<li>Emotional Disturbance</li>' +
        '<li>Hearing Impairment</li>' +
        '<li>Intellectual Disability</li>' +
        '<li>Multiple Disabilities</li>' +
        '<li>Orthopedic Impairment</li>' +
        '<li>Other Health Impairment</li>' +
        '<li>Specific Learning Disability</li>' +
        '<li>Speech or Language Impairment</li>' +
        '<li>Traumatic Brain Injury</li>' +
        '<li>Visual Impairment Including Blindness</li>' +
      '</ol>' +

      '<h3>Eligibility: Two Prongs Required</h3>' +
      '<p>A child must meet <strong>both</strong> requirements to qualify for an IEP:</p>' +
      '<ol style="list-style:decimal;margin-left:24px;margin-bottom:16px;">' +
        '<li>The child has a qualifying disability under one of the 13 IDEA categories.</li>' +
        '<li>The child needs specially designed instruction as a result of that disability.</li>' +
      '</ol>' +
      '<p>Both prongs must be met. A child can have a disability and not qualify for an IEP if they do not require specially designed instruction.</p>' +

      '<h3>What an IEP Provides</h3>' +
      '<ul style="list-style:disc;margin-left:24px;margin-bottom:16px;">' +
        '<li>Specially designed instruction tailored to the child\'s needs</li>' +
        '<li>Related services: speech therapy, occupational therapy, physical therapy, counseling, transportation</li>' +
        '<li>Supplementary aids and services</li>' +
        '<li>Accommodations and modifications</li>' +
        '<li>Measurable annual goals</li>' +
        '<li>Progress monitoring and reporting</li>' +
      '</ul>' +

      '<h3>The 8 Required IEP Components (34 CFR &sect;300.320)</h3>' +
      '<ol style="list-style:decimal;margin-left:24px;margin-bottom:16px;">' +
        '<li><strong>Present levels of academic achievement and functional performance (PLAAFP)</strong> — where the child is now</li>' +
        '<li><strong>Measurable annual goals</strong> — what the child will work toward this year</li>' +
        '<li><strong>Special education and related services</strong> — what instruction and services will be provided</li>' +
        '<li><strong>Participation with nondisabled peers</strong> — explanation of any time the child will not be with general education peers</li>' +
        '<li><strong>Accommodations for state and district assessments</strong></li>' +
        '<li><strong>Service dates and frequency</strong> — when services start, how often, how long</li>' +
        '<li><strong>Transition services</strong> (age 16 or earlier per state law) — planning for life after high school</li>' +
        '<li><strong>Measurement and reporting of progress</strong> — how progress will be tracked and reported to parents</li>' +
      '</ol>' +

      '<h3>FAPE: Free Appropriate Public Education</h3>' +
      '<p>FAPE means the school must provide education and related services at no cost to the family that are designed to meet the child\'s unique needs and provide educational benefit. The Supreme Court in <em>Endrew F. v. Douglas County School District</em> (2017) held that an IEP must be reasonably calculated to enable a child to make progress appropriate in light of the child\'s circumstances. Budget is never a lawful reason to deny FAPE.</p>' +

      '<h3>LRE: Least Restrictive Environment</h3>' +
      '<p>The law requires that children with disabilities be educated with their nondisabled peers to the maximum extent appropriate. Removal from the general education classroom should only occur when the nature or severity of the disability is such that education in general education classes, with supplementary aids and services, cannot be achieved satisfactorily. There is a continuum of placement options, and there is a legal presumption toward general education.</p>' +

      '<h3>The IEP Team</h3>' +
      '<p>The IEP team must include:</p>' +
      '<ul style="list-style:disc;margin-left:24px;margin-bottom:16px;">' +
        '<li>The child\'s parent(s) — as equal members</li>' +
        '<li>At least one general education teacher</li>' +
        '<li>At least one special education teacher</li>' +
        '<li>A school district representative</li>' +
        '<li>Someone who can interpret evaluation results</li>' +
        '<li>Others with knowledge or special expertise (at parent or school discretion)</li>' +
        '<li>The child, when appropriate</li>' +
      '</ul>' +

      '<h3>Parent Rights Under IDEA</h3>' +
      '<ul style="list-style:disc;margin-left:24px;margin-bottom:16px;">' +
        '<li><strong>Prior Written Notice</strong> (34 CFR &sect;300.503) — the school must give you written notice before proposing or refusing to change identification, evaluation, placement, or FAPE</li>' +
        '<li><strong>Informed consent</strong> — the school needs your consent before evaluating or starting services</li>' +
        '<li><strong>Independent Educational Evaluation (IEE)</strong> — you can request an outside evaluation at public expense if you disagree with the school\'s evaluation</li>' +
        '<li><strong>Mediation</strong> — voluntary dispute resolution</li>' +
        '<li><strong>State complaint</strong> — file a complaint with the state DOE alleging IDEA violations</li>' +
        '<li><strong>Due process hearing</strong> — a formal legal proceeding before an impartial hearing officer</li>' +
        '<li><strong>Stay-put / pendency</strong> — your child stays in their current placement during dispute proceedings</li>' +
      '</ul>' +

      '<h3>Legal Sources</h3>' +
      '<p class="text-small text-muted">Individuals with Disabilities Education Act (20 U.S.C. &sect;1400 et seq.) &bull; 34 CFR Part 300</p>' +
    '</div>';
  }

  function renderComparisonTable() {
    return '<div style="max-width:800px;margin:0 auto;">' +
      '<h2 class="text-center">504 Plan vs. IEP: Side-by-Side Comparison</h2>' +
      '<p class="text-center text-muted text-small" style="margin-bottom:24px;">This table is for educational purposes. Your child\'s situation is unique — consult your school district and a licensed professional.</p>' +
      '<div style="overflow-x:auto;">' +
        '<table class="comparison-table">' +
          '<thead><tr><th>Feature</th><th>504 Plan</th><th>IEP</th></tr></thead>' +
          '<tbody>' +
            '<tr><td>Governing Law</td><td>Section 504 of the Rehabilitation Act (29 U.S.C. &sect;794) and ADA Title II</td><td>Individuals with Disabilities Education Act (20 U.S.C. &sect;1400)</td></tr>' +
            '<tr><td>Eligibility Standard</td><td>Physical or mental impairment that substantially limits one or more major life activities</td><td>Child has a qualifying disability under one of 13 categories AND needs specially designed instruction</td></tr>' +
            '<tr><td>What It Provides</td><td>Accommodations and modifications for equal access</td><td>Specially designed instruction, related services, accommodations, goals, and progress monitoring</td></tr>' +
            '<tr><td>Who Qualifies</td><td>Broader — any student with a qualifying impairment affecting a major life activity</td><td>Narrower — must meet both the disability and need-for-special-education prongs</td></tr>' +
            '<tr><td>Procedural Protections</td><td>Notice, impartial hearing, OCR complaint</td><td>Prior Written Notice, consent, IEE, mediation, state complaint, due process hearing, stay-put</td></tr>' +
            '<tr><td>Who Develops It</td><td>Group of knowledgeable persons including parents</td><td>IEP team with required members including parents as equal members</td></tr>' +
            '<tr><td>How Often Reviewed</td><td>Periodically (typically annually, but law says periodic reevaluation)</td><td>At least annually (annual IEP review), full reevaluation every 3 years</td></tr>' +
            '<tr><td>What Happens If You Disagree</td><td>Impartial hearing, OCR complaint, ADA Title II complaint</td><td>Mediation, state complaint, due process hearing, civil action</td></tr>' +
            '<tr><td>Cost to Family</td><td>No cost</td><td>No cost (FAPE)</td></tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>';
  }

  /* ── Eligibility Screener ────────────── */
  var screenerAnswers = {};

  function renderScreener() {
    return '<div class="content-container section">' +
      '<h1 class="text-center">Eligibility Screener</h1>' +
      '<div class="banner banner-warning" style="max-width:640px;margin:0 auto 24px;">This screener is an educational tool only. It is not a diagnosis, a legal determination, or a school evaluation. Contact your school district and consult a licensed professional.</div>' +
      '<div id="screener-questions" style="max-width:640px;margin:0 auto;">' +
        renderScreenerQuestion(1) +
      '</div>' +
      '<div id="screener-result" style="max-width:640px;margin:0 auto;"></div>' +
    '</div>';
  }

  var screenerQuestions = [
    { id: 1, text: 'Has your child been diagnosed with a physical, mental health, or developmental condition by a licensed professional?' },
    { id: 2, text: 'Does that condition substantially affect their ability to learn, concentrate, read, communicate, or participate in school activities?' },
    { id: 3, text: 'Has your school district conducted a formal evaluation of your child?' },
    { id: 4, text: 'Is your child currently receiving any services, accommodations, or a current IEP or 504 plan?' },
    { id: 5, text: 'Does your child need a fundamentally different way of being taught — not just extra time or accommodations, but specialized instruction?' },
    { id: 6, text: 'Has the school told you your child does not qualify for special education services?' }
  ];

  function renderScreenerQuestion(qNum) {
    if (qNum > 6) return '';
    var q = screenerQuestions[qNum - 1];
    return '<div class="screener-question" id="screener-q-' + qNum + '">' +
      '<p><strong>Question ' + qNum + ' of 6:</strong> ' + q.text + '</p>' +
      '<div class="screener-options">' +
        '<button class="screener-btn" data-q="' + qNum + '" data-answer="yes">Yes</button>' +
        '<button class="screener-btn" data-q="' + qNum + '" data-answer="no">No</button>' +
        '<button class="screener-btn" data-q="' + qNum + '" data-answer="unsure">Not Sure</button>' +
      '</div>' +
    '</div>';
  }

  function handleScreenerAnswer(qNum, answer) {
    screenerAnswers[qNum] = answer;

    var btns = document.querySelectorAll('#screener-q-' + qNum + ' .screener-btn');
    btns.forEach(function (b) {
      b.classList.toggle('selected', b.getAttribute('data-answer') === answer);
    });

    var container = document.getElementById('screener-questions');
    if (qNum < 6) {
      var existing = document.getElementById('screener-q-' + (qNum + 1));
      if (!existing) {
        container.insertAdjacentHTML('beforeend', renderScreenerQuestion(qNum + 1));
      }
    }

    if (qNum === 6) {
      showScreenerResult();
    }
  }

  function showScreenerResult() {
    var a = screenerAnswers;
    var resultEl = document.getElementById('screener-result');
    var heading, explanation;

    if (a[1] === 'yes' && a[2] === 'yes' && a[5] === 'no') {
      heading = 'Your child may qualify for a 504 plan.';
      explanation = 'Based on your answers, your child has a diagnosed condition that substantially affects a major life activity, but may not require fundamentally different instruction. A 504 plan under Section 504 of the Rehabilitation Act provides accommodations and modifications to ensure equal access to education. Contact your school to request a Section 504 evaluation.';
    } else if (a[1] === 'yes' && a[2] === 'yes' && a[5] === 'yes') {
      if (a[4] === 'yes') {
        heading = 'Your child may qualify to move from a 504 plan to an IEP.';
        explanation = 'Based on your answers, your child has a diagnosed condition that substantially affects their school participation and may need specially designed instruction. If your child currently has a 504 plan, they may be eligible for an IEP under IDEA, which provides a higher level of support. Request a special education evaluation from your school district in writing.';
      } else {
        heading = 'Your child may qualify for an IEP.';
        explanation = 'Based on your answers, your child has a diagnosed condition that substantially affects their school participation and needs specially designed instruction. An IEP under the Individuals with Disabilities Education Act (IDEA) provides specialized instruction, related services, and measurable goals. Request a special education evaluation from your school district in writing.';
      }
    } else if (a[1] === 'yes' && a[2] === 'yes' && a[5] === 'no' && a[4] === 'yes') {
      heading = 'Your child already has the higher-level plan.';
      explanation = 'Based on your answers, your child already receives services under an IEP. If you have concerns about whether the IEP is meeting your child\'s needs, request an IEP meeting to discuss changes. Review the IEP education section above for your rights.';
    } else {
      heading = 'The picture is not clear from these answers alone.';
      explanation = 'Based on your answers, we cannot determine eligibility with confidence. This is common — many families are in this situation. We recommend requesting a meeting with your school to discuss evaluation. You have the right to request an evaluation in writing at any time.';
    }

    resultEl.innerHTML = '<div class="screener-result">' +
      '<h3>' + heading + '</h3>' +
      '<p>' + explanation + '</p>' +
      '<p class="text-small text-muted" style="margin-top:16px;">This screener is an educational tool only. It is not a diagnosis, a legal determination, or a school evaluation. Contact your school district and consult a licensed professional.</p>' +
      '<div style="margin-top:20px;">' +
        '<a href="#/guide-builder" class="btn btn-primary">Build Your Meeting Guide</a>' +
      '</div>' +
    '</div>';
  }

  function bindScreener() {
    screenerAnswers = {};
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.screener-btn');
      if (!btn) return;
      var q = parseInt(btn.getAttribute('data-q'));
      var answer = btn.getAttribute('data-answer');
      if (q && answer) handleScreenerAnswer(q, answer);
    });
  }

  /* ── Guide Builder Question Flow ─────── */
  var guideState = {
    step: 1,
    totalSteps: 7,
    state: null,
    planType: null,
    meetingType: null,
    grade: null,
    disabilities: [],
    pastExperiences: [],
    concerns: ''
  };

  function resetGuideState() {
    guideState = {
      step: 1,
      totalSteps: 7,
      state: null,
      planType: null,
      meetingType: null,
      grade: null,
      disabilities: [],
      pastExperiences: [],
      concerns: ''
    };
  }

  function getGuideState() {
    return guideState;
  }

  function renderGuideBuilder() {
    resetGuideState();
    return '<div class="content-container section">' +
      '<div class="banner banner-privacy">' +
        'EduAdvocate does not store any information about your child. Your answers are used only to generate your guide in this browser and are never sent to our servers.' +
      '</div>' +
      '<h1 class="text-center">Build Your Meeting Guide</h1>' +
      '<div id="guide-progress"></div>' +
      '<div id="guide-step-container"></div>' +
    '</div>';
  }

  function renderGuideStep() {
    updateProgress();
    var container = document.getElementById('guide-step-container');
    if (!container) return;

    switch (guideState.step) {
      case 1: container.innerHTML = renderStep1(); break;
      case 2: container.innerHTML = renderStep2(); break;
      case 3: container.innerHTML = renderStep3(); break;
      case 4: container.innerHTML = renderStep4(); break;
      case 5: container.innerHTML = renderStep5(); break;
      case 6: container.innerHTML = renderStep6(); break;
      case 7: container.innerHTML = renderStep7(); break;
      default: break;
    }
  }

  function updateProgress() {
    var el = document.getElementById('guide-progress');
    if (!el) return;
    var html = '<div class="progress-bar">';
    for (var i = 1; i <= guideState.totalSteps; i++) {
      var cls = i < guideState.step ? 'completed' : (i === guideState.step ? 'active' : '');
      html += '<div class="progress-step ' + cls + '">' + i + '</div>';
      if (i < guideState.totalSteps) {
        html += '<div class="progress-connector ' + (i < guideState.step ? 'completed' : '') + '"></div>';
      }
    }
    html += '</div>';
    el.innerHTML = html;
  }

  /* Step 1: State selection */
  function renderStep1() {
    var options = '<option value="">Select your state</option>';
    if (typeof EduStates !== 'undefined') {
      EduStates.forEach(function (s) {
        var sel = guideState.state === s.abbreviation ? ' selected' : '';
        options += '<option value="' + s.abbreviation + '"' + sel + '>' + s.name + '</option>';
      });
    }

    return '<div class="card" style="max-width:640px;margin:0 auto;">' +
      '<h2>Step 1: Select Your State</h2>' +
      '<p>Your guide will include rights and resources specific to your state only.</p>' +
      '<div class="form-group">' +
        '<label for="guide-state">State</label>' +
        '<select id="guide-state" class="form-select">' + options + '</select>' +
      '</div>' +
      '<div id="state-info-display"></div>' +
      '<div style="margin-top:24px;">' +
        '<button class="btn btn-primary" id="step1-next" disabled>Next</button>' +
      '</div>' +
    '</div>';
  }

  function bindStep1() {
    var select = document.getElementById('guide-state');
    var nextBtn = document.getElementById('step1-next');
    if (!select || !nextBtn) return;

    select.addEventListener('change', function () {
      guideState.state = select.value;
      nextBtn.disabled = !select.value;
      showStateInfo(select.value);
    });

    if (guideState.state) {
      nextBtn.disabled = false;
      showStateInfo(guideState.state);
    }

    nextBtn.addEventListener('click', function () {
      if (guideState.state) {
        guideState.step = 2;
        renderGuideStep();
      }
    });
  }

  function showStateInfo(abbr) {
    var container = document.getElementById('state-info-display');
    if (!container || !abbr) { if (container) container.innerHTML = ''; return; }
    if (typeof EduStates === 'undefined') return;

    var stateData = EduStates.find(function (s) { return s.abbreviation === abbr; });
    if (!stateData) { container.innerHTML = ''; return; }

    var html = '<div class="state-info-card">' +
      '<h3>' + stateData.name + ' — Special Education Information</h3>' +
      '<dl>';

    if (stateData.recordingConsent) {
      html += '<dt>Recording Consent</dt><dd>' + stateData.recordingConsent.type + ' consent state — ' + stateData.recordingConsent.description + ' (' + stateData.recordingConsent.statute + ')</dd>';
    }
    if (stateData.evaluationTimeline) {
      html += '<dt>Evaluation Timeline</dt><dd>' + stateData.evaluationTimeline + '</dd>';
    }
    if (stateData.stateLawsExceedingFederal && stateData.stateLawsExceedingFederal.length > 0) {
      html += '<dt>State Laws Exceeding Federal</dt><dd>' + stateData.stateLawsExceedingFederal.join('; ') + '</dd>';
    }
    if (stateData.pti) {
      html += '<dt>Parent Training Center</dt><dd>' + stateData.pti.name + (stateData.pti.phone ? ' — ' + stateData.pti.phone : '') + '</dd>';
    }
    if (stateData.stateDOE) {
      html += '<dt>State DOE Special Ed</dt><dd>' + stateData.stateDOE.name + (stateData.stateDOE.phone ? ' — ' + stateData.stateDOE.phone : '') + '</dd>';
    }
    if (stateData.complaintContact) {
      html += '<dt>Complaint Filing</dt><dd>' + stateData.complaintContact.description + '</dd>';
    }

    html += '</dl></div>';
    container.innerHTML = html;
  }

  /* Step 2: Plan type */
  function renderStep2() {
    return '<div class="card" style="max-width:640px;margin:0 auto;">' +
      '<h2>Step 2: What type of plan is this meeting about?</h2>' +
      '<div class="checkbox-group">' +
        '<label class="checkbox-item" style="cursor:pointer;">' +
          '<input type="radio" name="plan-type" value="iep" ' + (guideState.planType === 'iep' ? 'checked' : '') + ' style="width:18px;height:18px;">' +
          '<span><strong>IEP</strong> (Individualized Education Program under IDEA)</span>' +
        '</label>' +
        '<label class="checkbox-item" style="cursor:pointer;">' +
          '<input type="radio" name="plan-type" value="504" ' + (guideState.planType === '504' ? 'checked' : '') + ' style="width:18px;height:18px;">' +
          '<span><strong>504 Plan</strong> (Section 504 of the Rehabilitation Act)</span>' +
        '</label>' +
        '<label class="checkbox-item" style="cursor:pointer;">' +
          '<input type="radio" name="plan-type" value="unsure" ' + (guideState.planType === 'unsure' ? 'checked' : '') + ' style="width:18px;height:18px;">' +
          '<span><strong>I am not sure yet</strong></span>' +
        '</label>' +
      '</div>' +
      '<div id="plan-type-note" style="margin-top:16px;"></div>' +
      '<div style="margin-top:24px;display:flex;gap:12px;">' +
        '<button class="btn btn-ghost" id="step2-back">Back</button>' +
        '<button class="btn btn-primary" id="step2-next" disabled>Next</button>' +
      '</div>' +
    '</div>';
  }

  function bindStep2() {
    var radios = document.querySelectorAll('input[name="plan-type"]');
    var nextBtn = document.getElementById('step2-next');
    var backBtn = document.getElementById('step2-back');
    var noteEl = document.getElementById('plan-type-note');

    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        guideState.planType = r.value;
        nextBtn.disabled = false;

        if (r.value === 'unsure') {
          noteEl.innerHTML = '<div class="banner banner-info">Not sure? <a href="#/screener">Take the eligibility screener</a> — it takes less than 2 minutes and will help you determine which plan may apply.</div>';
        } else {
          noteEl.innerHTML = '';
        }
      });
    });

    if (guideState.planType) nextBtn.disabled = false;

    backBtn.addEventListener('click', function () { guideState.step = 1; renderGuideStep(); });
    nextBtn.addEventListener('click', function () {
      if (guideState.planType === 'unsure') guideState.planType = 'iep';
      guideState.step = 3;
      renderGuideStep();
    });
  }

  /* Step 3: Meeting type */
  function renderStep3() {
    var meetingOptions;
    if (guideState.planType === '504') {
      meetingOptions = [
        { value: 'initial-504', label: 'Initial 504 plan development' },
        { value: 'annual-504', label: 'Annual 504 review' },
        { value: 'modification-504', label: 'Modification of existing accommodations' },
        { value: 'dispute-504', label: 'Dispute or disagreement meeting' }
      ];
    } else {
      meetingOptions = [
        { value: 'initial-iep', label: 'Initial eligibility determination / first IEP' },
        { value: 'annual-iep', label: 'Annual IEP review' },
        { value: 'triennial', label: 'Triennial re-evaluation' },
        { value: 'amendment', label: 'IEP amendment meeting' },
        { value: 'transition', label: 'Transition planning meeting (student age 14 or older)' },
        { value: 'dispute-iep', label: 'Dispute or disagreement meeting' }
      ];
    }

    var html = '<div class="card" style="max-width:640px;margin:0 auto;">' +
      '<h2>Step 3: What kind of meeting is this?</h2>' +
      '<div class="checkbox-group">';

    meetingOptions.forEach(function (opt) {
      html += '<label class="checkbox-item" style="cursor:pointer;">' +
        '<input type="radio" name="meeting-type" value="' + opt.value + '" ' + (guideState.meetingType === opt.value ? 'checked' : '') + ' style="width:18px;height:18px;">' +
        '<span>' + opt.label + '</span>' +
      '</label>';
    });

    html += '</div>' +
      '<div style="margin-top:24px;display:flex;gap:12px;">' +
        '<button class="btn btn-ghost" id="step3-back">Back</button>' +
        '<button class="btn btn-primary" id="step3-next" disabled>Next</button>' +
      '</div>' +
    '</div>';

    return html;
  }

  function bindStep3() {
    var radios = document.querySelectorAll('input[name="meeting-type"]');
    var nextBtn = document.getElementById('step3-next');
    var backBtn = document.getElementById('step3-back');

    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        guideState.meetingType = r.value;
        nextBtn.disabled = false;
      });
    });

    if (guideState.meetingType) nextBtn.disabled = false;
    backBtn.addEventListener('click', function () { guideState.step = 2; renderGuideStep(); });
    nextBtn.addEventListener('click', function () { guideState.step = 4; renderGuideStep(); });
  }

  /* Step 4: Grade level */
  function renderStep4() {
    var grades = [
      { value: 'prek', label: 'Pre-K / Preschool (ages 3\u20135)' },
      { value: 'K-2', label: 'Kindergarten through 2nd Grade' },
      { value: '3-5', label: '3rd through 5th Grade' },
      { value: '6-8', label: '6th through 8th Grade' },
      { value: '9-12', label: '9th through 12th Grade' },
      { value: 'transition', label: 'Transition Program (ages 18\u201321)' }
    ];

    var html = '<div class="card" style="max-width:640px;margin:0 auto;">' +
      '<h2>Step 4: What grade is your child in?</h2>' +
      '<div class="checkbox-group">';

    grades.forEach(function (g) {
      html += '<label class="checkbox-item" style="cursor:pointer;">' +
        '<input type="radio" name="grade-level" value="' + g.value + '" ' + (guideState.grade === g.value ? 'checked' : '') + ' style="width:18px;height:18px;">' +
        '<span>' + g.label + '</span>' +
      '</label>';
    });

    html += '</div>' +
      '<div style="margin-top:24px;display:flex;gap:12px;">' +
        '<button class="btn btn-ghost" id="step4-back">Back</button>' +
        '<button class="btn btn-primary" id="step4-next" disabled>Next</button>' +
      '</div>' +
    '</div>';

    return html;
  }

  function bindStep4() {
    var radios = document.querySelectorAll('input[name="grade-level"]');
    var nextBtn = document.getElementById('step4-next');
    var backBtn = document.getElementById('step4-back');

    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        guideState.grade = r.value;
        nextBtn.disabled = false;
      });
    });

    if (guideState.grade) nextBtn.disabled = false;
    backBtn.addEventListener('click', function () { guideState.step = 3; renderGuideStep(); });
    nextBtn.addEventListener('click', function () { guideState.step = 5; renderGuideStep(); });
  }

  /* Step 5: Disabilities (multi-select) */
  function renderStep5() {
    var disabilities = [
      { value: 'autism', label: 'Autism Spectrum Disorder' },
      { value: 'adhd', label: 'ADHD / Attention difficulties' },
      { value: 'dyslexia', label: 'Dyslexia / Reading disability' },
      { value: 'dysgraphia', label: 'Dysgraphia / Writing difficulties' },
      { value: 'dyscalculia', label: 'Dyscalculia / Math difficulties' },
      { value: 'speech-language', label: 'Speech or Language impairment' },
      { value: 'emotional-behavioral', label: 'Emotional or Behavioral disability' },
      { value: 'intellectual', label: 'Intellectual disability' },
      { value: 'other-health', label: 'Other health impairment / chronic illness' },
      { value: 'hearing', label: 'Hearing impairment or deafness' },
      { value: 'visual', label: 'Visual impairment or blindness' },
      { value: 'tbi', label: 'Traumatic brain injury' },
      { value: 'physical', label: 'Physical or orthopedic impairment' },
      { value: 'developmental-delay', label: 'Developmental delay (ages 3\u20139 only)' }
    ];

    var html = '<div class="card" style="max-width:640px;margin:0 auto;">' +
      '<h2>Step 5: What are your child\'s primary areas of need?</h2>' +
      '<p class="text-small text-muted">Select all that apply.</p>' +
      '<div class="checkbox-group">';

    disabilities.forEach(function (d) {
      var checked = guideState.disabilities.indexOf(d.value) !== -1 ? ' checked' : '';
      html += '<label class="checkbox-item">' +
        '<input type="checkbox" name="disability" value="' + d.value + '"' + checked + '>' +
        '<span>' + d.label + '</span>' +
      '</label>';
    });

    html += '</div>' +
      '<div style="margin-top:24px;display:flex;gap:12px;">' +
        '<button class="btn btn-ghost" id="step5-back">Back</button>' +
        '<button class="btn btn-primary" id="step5-next" disabled>Next</button>' +
      '</div>' +
    '</div>';

    return html;
  }

  function bindStep5() {
    var checkboxes = document.querySelectorAll('input[name="disability"]');
    var nextBtn = document.getElementById('step5-next');
    var backBtn = document.getElementById('step5-back');

    function updateDisabilities() {
      guideState.disabilities = [];
      checkboxes.forEach(function (cb) {
        if (cb.checked) guideState.disabilities.push(cb.value);
      });
      nextBtn.disabled = guideState.disabilities.length === 0;
    }

    checkboxes.forEach(function (cb) {
      cb.addEventListener('change', updateDisabilities);
    });

    updateDisabilities();
    backBtn.addEventListener('click', function () { guideState.step = 4; renderGuideStep(); });
    nextBtn.addEventListener('click', function () { guideState.step = 6; renderGuideStep(); });
  }

  /* Step 6: Past experiences (multi-select) */
  function renderStep6() {
    var experiences = [
      { value: 'rushed-signing', label: 'I felt rushed to sign documents' },
      { value: 'budget-cited', label: 'Budget was cited as a reason to deny services' },
      { value: 'vague-goals', label: 'Goals seemed too vague or easy to meet' },
      { value: 'dismissed', label: 'My concerns or input were dismissed' },
      { value: 'pre-written', label: 'The IEP or 504 appeared pre-written before I arrived' },
      { value: 'eval-delayed', label: 'Evaluation was delayed past the legal timeline' },
      { value: 'verbal-promises', label: 'Promises were made verbally but not written into the plan' },
      { value: 'recording-denied', label: 'I was told I could not record the meeting' },
      { value: 'first-meeting', label: 'This is my first meeting — none of the above apply' }
    ];

    var html = '<div class="card" style="max-width:640px;margin:0 auto;">' +
      '<h2>Step 6: Have you experienced any of these in past meetings?</h2>' +
      '<p class="text-small text-muted">Select all that apply.</p>' +
      '<div class="checkbox-group">';

    experiences.forEach(function (ex) {
      var checked = guideState.pastExperiences.indexOf(ex.value) !== -1 ? ' checked' : '';
      html += '<label class="checkbox-item">' +
        '<input type="checkbox" name="experience" value="' + ex.value + '"' + checked + '>' +
        '<span>' + ex.label + '</span>' +
      '</label>';
    });

    html += '</div>' +
      '<div style="margin-top:24px;display:flex;gap:12px;">' +
        '<button class="btn btn-ghost" id="step6-back">Back</button>' +
        '<button class="btn btn-primary" id="step6-next">Next</button>' +
      '</div>' +
    '</div>';

    return html;
  }

  function bindStep6() {
    var checkboxes = document.querySelectorAll('input[name="experience"]');
    var nextBtn = document.getElementById('step6-next');
    var backBtn = document.getElementById('step6-back');

    function updateExperiences() {
      guideState.pastExperiences = [];
      checkboxes.forEach(function (cb) {
        if (cb.checked) guideState.pastExperiences.push(cb.value);
      });
    }

    checkboxes.forEach(function (cb) {
      cb.addEventListener('change', updateExperiences);
    });

    backBtn.addEventListener('click', function () { guideState.step = 5; renderGuideStep(); });
    nextBtn.addEventListener('click', function () {
      updateExperiences();
      guideState.step = 7;
      renderGuideStep();
    });
  }

  /* Step 7: Specific concerns (optional) */
  function renderStep7() {
    return '<div class="card" style="max-width:640px;margin:0 auto;">' +
      '<h2>Step 7: Any specific concerns?</h2>' +
      '<p class="text-small text-muted">This information is used only in your browser to personalize your guide. It is not stored or transmitted.</p>' +
      '<div class="form-group">' +
        '<label for="guide-concerns">Your concerns (optional)</label>' +
        '<textarea id="guide-concerns" class="form-textarea" placeholder="Describe any specific concerns you want your guide to address...">' + (guideState.concerns || '') + '</textarea>' +
      '</div>' +
      '<div style="margin-top:24px;display:flex;gap:12px;">' +
        '<button class="btn btn-ghost" id="step7-back">Back</button>' +
        '<button class="btn btn-primary btn-lg" id="step7-generate">Generate My Guide</button>' +
      '</div>' +
    '</div>';
  }

  function bindStep7() {
    var textarea = document.getElementById('guide-concerns');
    var generateBtn = document.getElementById('step7-generate');
    var backBtn = document.getElementById('step7-back');

    backBtn.addEventListener('click', function () { guideState.step = 6; renderGuideStep(); });
    generateBtn.addEventListener('click', function () {
      if (textarea) guideState.concerns = textarea.value;
      if (typeof EduGuide !== 'undefined') {
        var guideHtml = EduGuide.generateGuide(guideState);
        document.getElementById('guide-step-container').innerHTML = '';
        document.getElementById('guide-progress').innerHTML = '';
        var appEl = document.getElementById('app');
        appEl.innerHTML = '<div class="content-container section">' + guideHtml + '</div>';
        EduGuide.bindGuideActions(guideState);
        window.scrollTo(0, 0);
      }
    });
  }

  function bindCurrentStep() {
    switch (guideState.step) {
      case 1: bindStep1(); break;
      case 2: bindStep2(); break;
      case 3: bindStep3(); break;
      case 4: bindStep4(); break;
      case 5: bindStep5(); break;
      case 6: bindStep6(); break;
      case 7: bindStep7(); break;
    }
  }

  /* ── Educator Flow ───────────────────── */
  var educatorState = {
    state: null,
    tool: null,
    gradeLevel: null,
    disability: null,
    subArea: null,
    performanceLevel: null,
    measurementSetting: null,
    schoolImpacts: []
  };

  function resetEducatorState() {
    educatorState = {
      state: null,
      tool: null,
      gradeLevel: null,
      disability: null,
      subArea: null,
      performanceLevel: null,
      measurementSetting: null,
      schoolImpacts: []
    };
  }

  function getEducatorState() {
    return educatorState;
  }

  function renderEducatorHome() {
    return '<div class="container section">' +
      '<h1 class="text-center">Educator Tools</h1>' +
      '<p class="text-center" style="max-width:640px;margin:0 auto 40px;">Professional recommendation tools for IEP goal writing and 504 accommodation planning. All features are free during our launch period.</p>' +

      '<div class="card" style="max-width:500px;margin:0 auto 32px;">' +
        '<h3>Step 1: Select Your State</h3>' +
        '<div class="form-group">' +
          '<label for="edu-state">State</label>' +
          '<select id="edu-state" class="form-select"><option value="">Select state</option></select>' +
        '</div>' +
      '</div>' +

      '<div id="edu-tool-select" style="display:none;">' +
        '<h2 class="text-center" style="margin-bottom:24px;">Select Your Tool</h2>' +
        '<div class="role-cards">' +
          '<div class="role-card" id="edu-tool-iep">' +
            '<h3>IEP Goal Recommendations</h3>' +
            '<p>Generate SMART goal recommendations aligned to disability category, grade level, and specific area of need.</p>' +
          '</div>' +
          '<div class="role-card" id="edu-tool-504">' +
            '<h3>504 Accommodation Recommendations</h3>' +
            '<p>Generate accommodation plans with implementation guidance, monitoring methods, and legal basis.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div id="edu-tool-flow" style="margin-top:32px;"></div>' +

      '<div style="margin-top:48px;">' +
        '<h2 class="text-center" style="margin-bottom:24px;">Educator Resources</h2>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;max-width:900px;margin:0 auto;">' +
          renderEducatorResources() +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderEducatorResources() {
    return '<div class="resource-card">' +
        '<h3>504 vs IEP Comparison</h3>' +
        '<p class="text-small">Professional comparison with detailed legal framework differences, procedural protections, and eligibility standards.</p>' +
        '<a href="#/parent" class="btn btn-sm btn-outline" style="margin-top:8px;">View Comparison</a>' +
      '</div>' +

      '<div class="resource-card">' +
        '<h3>Child Find Obligations</h3>' +
        '<p class="text-small">Under IDEA (34 CFR &sect;300.111), school districts have an affirmative obligation to identify, locate, and evaluate all children with disabilities within their jurisdiction who need special education and related services. This applies to children who are enrolled in public school, private school, home school, and those who are homeless or wards of the state. If you suspect a student may have a disability, you have a legal obligation to refer them for evaluation.</p>' +
      '</div>' +

      '<div class="resource-card">' +
        '<h3>Communicating Concerns to Parents</h3>' +
        '<p class="text-small"><strong>Do say:</strong> "I\'ve noticed [Student] is having difficulty with [specific observable behavior]. I\'d like to discuss strategies that might help."</p>' +
        '<p class="text-small"><strong>Do not say:</strong> "I think your child has [diagnosis]." Educators should describe behaviors, not diagnose conditions.</p>' +
        '<p class="text-small">Focus on observable, documented behaviors. Reference data and work samples. Express concern and collaboration, not judgment. Never suggest parents seek medication.</p>' +
      '</div>' +

      '<div class="resource-card">' +
        '<h3>Referral Process Guide</h3>' +
        '<p class="text-small">Steps to initiate a special education evaluation referral:</p>' +
        '<ol style="list-style:decimal;margin-left:18px;font-size:0.85rem;">' +
          '<li>Document specific academic and behavioral concerns with data</li>' +
          '<li>Implement and document pre-referral interventions (RTI/MTSS)</li>' +
          '<li>Consult with your building\'s Student Support Team</li>' +
          '<li>Submit a formal written referral to the special education coordinator</li>' +
          '<li>The district must respond within a reasonable time and provide Prior Written Notice</li>' +
          '<li>If the district agrees to evaluate, parents must provide informed consent</li>' +
          '<li>Evaluation must be completed within the state-mandated timeline</li>' +
        '</ol>' +
      '</div>';
  }

  function bindEducatorHome() {
    resetEducatorState();

    var stateSelect = document.getElementById('edu-state');
    var toolSelect = document.getElementById('edu-tool-select');
    if (!stateSelect) return;

    if (typeof EduStates !== 'undefined') {
      EduStates.forEach(function (s) {
        var opt = document.createElement('option');
        opt.value = s.abbreviation;
        opt.textContent = s.name;
        stateSelect.appendChild(opt);
      });
    }

    stateSelect.addEventListener('change', function () {
      educatorState.state = stateSelect.value;
      if (toolSelect) toolSelect.style.display = stateSelect.value ? 'block' : 'none';
    });

    var iepTool = document.getElementById('edu-tool-iep');
    var tool504 = document.getElementById('edu-tool-504');

    if (iepTool) {
      iepTool.addEventListener('click', function () {
        educatorState.tool = 'iep';
        renderEducatorToolFlow();
      });
    }

    if (tool504) {
      tool504.addEventListener('click', function () {
        educatorState.tool = '504';
        renderEducatorToolFlow();
      });
    }
  }

  function renderEducatorToolFlow() {
    var container = document.getElementById('edu-tool-flow');
    if (!container) return;

    if (educatorState.tool === 'iep') {
      container.innerHTML = renderIEPToolFlow();
      bindIEPToolFlow();
    } else if (educatorState.tool === '504') {
      container.innerHTML = render504ToolFlow();
      bind504ToolFlow();
    }
  }

  /* ── IEP Goal Tool (Educator) ────────── */
  function renderIEPToolFlow() {
    var disabilityOptions = '';
    if (typeof EduDisabilities !== 'undefined') {
      EduDisabilities.filter(function (d) { return d.legalFramework !== '504'; }).forEach(function (d) {
        disabilityOptions += '<option value="' + d.id + '">' + d.name + '</option>';
      });
    }

    var gradeOptions = '<option value="">Select grade level</option>' +
      '<option value="K-2">Kindergarten through 2nd Grade</option>' +
      '<option value="3-5">3rd through 5th Grade</option>' +
      '<option value="6-8">6th through 8th Grade</option>' +
      '<option value="9-12">9th through 12th Grade</option>' +
      '<option value="transition">Transition Program (ages 18-21)</option>';

    return '<div class="card card-accent" style="max-width:700px;margin:0 auto;">' +
      '<h2>IEP Goal Recommendations</h2>' +
      '<p class="text-small text-muted">Generate SMART goal recommendations. All output uses IDEA language exclusively.</p>' +

      '<div class="form-group">' +
        '<label for="iep-grade">Grade Level</label>' +
        '<select id="iep-grade" class="form-select">' + gradeOptions + '</select>' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="iep-disability">Disability Category</label>' +
        '<select id="iep-disability" class="form-select"><option value="">Select disability</option>' + disabilityOptions + '</select>' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="iep-subarea">Specific Area of Need</label>' +
        '<select id="iep-subarea" class="form-select"><option value="">Select area of need</option></select>' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="iep-performance">Current Performance Level</label>' +
        '<select id="iep-performance" class="form-select">' +
          '<option value="">Select</option>' +
          '<option value="significantly-below">Significantly below grade level expectations</option>' +
          '<option value="somewhat-below">Somewhat below grade level expectations</option>' +
          '<option value="approaching">Approaching grade level expectations</option>' +
          '<option value="at-grade">At grade level (goal addresses behavioral, social, or functional area)</option>' +
        '</select>' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="iep-setting">Measurement Setting</label>' +
        '<select id="iep-setting" class="form-select">' +
          '<option value="">Select</option>' +
          '<option value="general-ed">General education classroom</option>' +
          '<option value="special-ed">Special education or resource room setting</option>' +
          '<option value="both">Both general and special education settings</option>' +
          '<option value="community">Community or vocational setting (transition students)</option>' +
        '</select>' +
      '</div>' +

      '<button class="btn btn-primary" id="iep-generate">Generate Goals</button>' +
      '<div id="iep-results" style="margin-top:24px;"></div>' +
    '</div>';
  }

  function bindIEPToolFlow() {
    var disabilitySelect = document.getElementById('iep-disability');
    var subAreaSelect = document.getElementById('iep-subarea');
    var generateBtn = document.getElementById('iep-generate');

    if (disabilitySelect) {
      disabilitySelect.addEventListener('change', function () {
        educatorState.disability = disabilitySelect.value;
        updateSubAreas(disabilitySelect.value, subAreaSelect);
      });
    }

    if (subAreaSelect) {
      subAreaSelect.addEventListener('change', function () {
        educatorState.subArea = subAreaSelect.value;
      });
    }

    if (generateBtn) {
      generateBtn.addEventListener('click', function () {
        educatorState.gradeLevel = document.getElementById('iep-grade').value;
        educatorState.performanceLevel = document.getElementById('iep-performance').value;
        educatorState.measurementSetting = document.getElementById('iep-setting').value;

        if (!educatorState.gradeLevel || !educatorState.disability || !educatorState.subArea) {
          document.getElementById('iep-results').innerHTML = '<div class="message message-error">Please complete all fields.</div>';
          return;
        }

        var goals = getIEPGoals(educatorState);
        displayIEPGoals(goals);
      });
    }
  }

  function updateSubAreas(disabilityId, selectEl) {
    if (!selectEl) return;
    selectEl.innerHTML = '<option value="">Select area of need</option>';

    if (typeof EduDisabilities === 'undefined') return;
    var disability = EduDisabilities.find(function (d) { return d.id === disabilityId; });
    if (!disability || !disability.subAreas) return;

    disability.subAreas.forEach(function (area) {
      var opt = document.createElement('option');
      opt.value = area;
      opt.textContent = area;
      selectEl.appendChild(opt);
    });
  }

  function getIEPGoals(state) {
    if (typeof EduIEPGoals === 'undefined') return [];
    var categoryGoals = EduIEPGoals[state.disability];
    if (!categoryGoals) return [];
    var areaGoals = categoryGoals[state.subArea];
    if (!areaGoals) return [];
    var gradeGoals = areaGoals[state.gradeLevel];
    if (!gradeGoals) {
      var fallbackKey = Object.keys(areaGoals)[0];
      gradeGoals = areaGoals[fallbackKey] || [];
    }
    return gradeGoals;
  }

  function displayIEPGoals(goals) {
    var container = document.getElementById('iep-results');
    if (!container) return;

    if (!goals || goals.length === 0) {
      container.innerHTML = '<div class="banner banner-warning">No goals found for this combination. Try a different grade level or sub-area.</div>';
      return;
    }

    var html = '<h3 style="margin-bottom:16px;">Recommended IEP Goals</h3>';
    goals.forEach(function (g, i) {
      html += '<div class="goal-card">' +
        '<div class="goal-card-label">' + (g.area || 'Goal ' + (i + 1)) + '</div>' +
        '<div class="goal-card-statement">' + g.goal + '</div>' +
        '<div class="goal-card-meta">' +
          '<dt>Progress Monitoring</dt><dd>' + (g.measurement || 'Per IEP team determination') + '</dd>' +
          '<dt>Standards Alignment</dt><dd>' + (g.standardsAlignment || 'IDEA 34 CFR §300.320') + '</dd>' +
          (g.michiganStandard ? '<dt>Michigan Standard</dt><dd>' + g.michiganStandard + '</dd>' : '') +
          '<dt>Research Base</dt><dd>' + (g.researchCitation || 'Evidence-based practice') + '</dd>' +
        '</div>' +
      '</div>';
    });

    html += '<button class="btn btn-outline" onclick="window.print()" style="margin-top:16px;">Print Goals</button>';
    container.innerHTML = html;
  }

  /* ── 504 Accommodation Tool (Educator) ── */
  function render504ToolFlow() {
    var conditionOptions = '';
    if (typeof EduDisabilities !== 'undefined') {
      EduDisabilities.forEach(function (d) {
        conditionOptions += '<option value="' + d.id + '">' + d.name + '</option>';
      });
    }

    var gradeOptions = '<option value="">Select grade level</option>' +
      '<option value="K-2">Kindergarten through 2nd Grade</option>' +
      '<option value="3-5">3rd through 5th Grade</option>' +
      '<option value="6-8">6th through 8th Grade</option>' +
      '<option value="9-12">9th through 12th Grade</option>' +
      '<option value="transition">Transition Program (ages 18-21)</option>';

    var impactOptions = [
      'Ability to concentrate or sustain attention',
      'Ability to read or process written information',
      'Ability to produce written work',
      'Ability to demonstrate knowledge on tests',
      'Physical access or mobility in the building',
      'Medical needs during the school day',
      'Emotional regulation or behavior',
      'Social interaction and communication',
      'Attendance or stamina throughout the day',
      'Sleep, fatigue, or energy management'
    ];

    var html = '<div class="card card-primary" style="max-width:700px;margin:0 auto;">' +
      '<h2>504 Accommodation Recommendations</h2>' +
      '<p class="text-small text-muted">Generate accommodation plans with implementation guidance. All output uses Section 504 and ADA language exclusively.</p>' +

      '<div class="form-group">' +
        '<label for="five04-grade">Grade Level</label>' +
        '<select id="five04-grade" class="form-select">' + gradeOptions + '</select>' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="five04-condition">Disability or Condition</label>' +
        '<select id="five04-condition" class="form-select"><option value="">Select condition</option>' + conditionOptions + '</select>' +
      '</div>' +

      '<div class="form-group">' +
        '<label>How does the condition primarily affect the student at school?</label>' +
        '<p class="form-hint">Select all that apply.</p>' +
        '<div class="checkbox-group">';

    impactOptions.forEach(function (impact) {
      html += '<label class="checkbox-item">' +
        '<input type="checkbox" name="school-impact" value="' + impact + '">' +
        '<span>' + impact + '</span>' +
      '</label>';
    });

    html += '</div></div>' +
      '<button class="btn btn-secondary" id="five04-generate">Generate Accommodations</button>' +
      '<div id="five04-results" style="margin-top:24px;"></div>' +
    '</div>';

    return html;
  }

  function bind504ToolFlow() {
    var generateBtn = document.getElementById('five04-generate');

    if (generateBtn) {
      generateBtn.addEventListener('click', function () {
        educatorState.gradeLevel = document.getElementById('five04-grade').value;
        educatorState.disability = document.getElementById('five04-condition').value;
        educatorState.schoolImpacts = [];
        document.querySelectorAll('input[name="school-impact"]:checked').forEach(function (cb) {
          educatorState.schoolImpacts.push(cb.value);
        });

        if (!educatorState.gradeLevel || !educatorState.disability) {
          document.getElementById('five04-results').innerHTML = '<div class="message message-error">Please select grade level and condition.</div>';
          return;
        }

        var accommodations = get504Accommodations(educatorState);
        display504Accommodations(accommodations);
      });
    }
  }

  function get504Accommodations(state) {
    if (typeof Edu504Accommodations === 'undefined') return [];
    var conditionData = Edu504Accommodations[state.disability];
    if (!conditionData || !conditionData.accommodations) return [];
    return conditionData.accommodations;
  }

  function display504Accommodations(accommodations) {
    var container = document.getElementById('five04-results');
    if (!container) return;

    if (!accommodations || accommodations.length === 0) {
      container.innerHTML = '<div class="banner banner-warning">No accommodations found for this condition.</div>';
      return;
    }

    var html = '<h3 style="margin-bottom:16px;">Recommended 504 Accommodations</h3>';
    accommodations.forEach(function (a) {
      html += '<div class="accommodation-card">' +
        '<h4>' + a.name + '</h4>' +
        '<p>' + a.description + '</p>' +
        '<div class="detail-row"><span class="detail-label">Implementation:</span> ' + a.implementation + '</div>' +
        '<div class="detail-row"><span class="detail-label">Responsible Party:</span> ' + a.responsibleParty + '</div>' +
        '<div class="detail-row"><span class="detail-label">Monitoring:</span> ' + a.monitoring + '</div>' +
        '<div class="detail-row"><span class="detail-label">Legal Basis:</span> ' + a.legalBasis + '</div>' +
        (a.researchSupport ? '<div class="detail-row"><span class="detail-label">Research:</span> ' + a.researchSupport + '</div>' : '') +
      '</div>';
    });

    html += '<button class="btn btn-outline" onclick="window.print()" style="margin-top:16px;">Print Accommodations</button>';
    container.innerHTML = html;
  }

  /* ── Tab functionality ───────────────── */
  function bindTabs() {
    document.addEventListener('click', function (e) {
      var tabBtn = e.target.closest('.tab-btn');
      if (!tabBtn) return;
      var tabId = tabBtn.getAttribute('data-tab');
      if (!tabId) return;

      document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabBtn.classList.add('active');
      tabBtn.setAttribute('aria-selected', 'true');

      document.querySelectorAll('.tab-content').forEach(function (c) {
        c.classList.remove('active');
      });
      var target = document.getElementById(tabId);
      if (target) target.classList.add('active');
    });
  }

  return {
    renderEducationHub: renderEducationHub,
    renderScreener: renderScreener,
    bindScreener: bindScreener,
    renderGuideBuilder: renderGuideBuilder,
    renderGuideStep: renderGuideStep,
    bindCurrentStep: bindCurrentStep,
    getGuideState: getGuideState,
    renderEducatorHome: renderEducatorHome,
    bindEducatorHome: bindEducatorHome,
    getEducatorState: getEducatorState,
    bindTabs: bindTabs
  };
})();
