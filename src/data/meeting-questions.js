/**
 * Questions Parents Should Ask During IEP and 504 Meetings
 *
 * Organized by area of concern and plan type.
 * Legal citations reference real federal regulations.
 */

const meetingQuestions = {
  // ═══════════════════════════════════════════════════════════════
  // GENERAL QUESTIONS — always included
  // ═══════════════════════════════════════════════════════════════
  general: {
    iep: [
      {
        question: 'What data are you using to measure my child\'s progress on current IEP goals?',
        why: 'Under IDEA (34 CFR §300.320(a)(3)), the IEP must describe how progress toward annual goals will be measured. You have a right to understand the data behind reported progress.',
      },
      {
        question: 'Can you explain each proposed goal and how it connects to my child\'s present levels of performance?',
        why: 'Goals must be based on the child\'s present levels (34 CFR §300.320(a)(1)). This ensures goals are individualized, not generic.',
      },
      {
        question: 'What is the least restrictive environment for my child, and how did the team determine the current placement?',
        why: 'IDEA requires children be educated with non-disabled peers to the maximum extent appropriate (34 CFR §300.114). The team must justify any removal from general education.',
      },
      {
        question: 'What related services is my child currently receiving, and are any changes being proposed?',
        why: 'Related services (speech, OT, counseling, etc.) must be provided if necessary for the child to benefit from special education (34 CFR §300.34).',
      },
      {
        question: 'How will the school communicate progress to me, and how often?',
        why: 'Parents must receive periodic progress reports at least as often as non-disabled peers receive report cards (34 CFR §300.320(a)(3)(ii)).',
      },
      {
        question: 'If I disagree with any part of this IEP, what are my options?',
        why: 'You have the right to prior written notice, mediation, and due process hearings under IDEA (34 CFR §§300.503-300.516).',
      },
    ],
    '504': [
      {
        question: 'What evaluations or data did the team use to determine my child\'s eligibility for a 504 plan?',
        why: 'Under Section 504 (34 CFR §104.35), the school must draw on multiple sources of information before making placement decisions.',
      },
      {
        question: 'How were these specific accommodations selected, and how do they address my child\'s functional limitations?',
        why: 'Accommodations must be individually determined based on the student\'s disability-related needs, not a one-size-fits-all checklist.',
      },
      {
        question: 'How will the school ensure that all of my child\'s teachers are aware of and implementing these accommodations?',
        why: 'Section 504 compliance requires that accommodations are actually delivered across all settings. A plan on paper is insufficient.',
      },
      {
        question: 'How and when will the 504 plan be reviewed or updated?',
        why: 'Section 504 requires periodic reevaluation (34 CFR §104.35(d)). Best practice is an annual review, though law requires review before any significant change in placement.',
      },
      {
        question: 'What happens if I believe the accommodations aren\'t working or aren\'t being followed?',
        why: 'You can request a 504 meeting at any time, and you have the right to file a complaint with the Office for Civil Rights (OCR) if the school fails to implement the plan.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CONCERN-SPECIFIC QUESTIONS
  // ═══════════════════════════════════════════════════════════════
  reading: [
    {
      question: 'What specific reading intervention program is being used, and what is the evidence base for it?',
      why: 'Schools should use evidence-based reading instruction. Under IDEA, services must be based on peer-reviewed research to the extent practicable (34 CFR §300.320(a)(4)).',
    },
    {
      question: 'How far below grade level is my child reading, and what is the rate of progress with current interventions?',
      why: 'Understanding the gap and trajectory helps you evaluate whether the current plan is working or needs adjustment.',
    },
    {
      question: 'Has my child been screened for dyslexia or other specific learning disabilities in reading?',
      why: 'Many reading difficulties have underlying causes that require targeted instruction. You can request a comprehensive evaluation at any time.',
    },
  ],
  'written expression': [
    {
      question: 'Is the difficulty with the physical act of writing, organizing thoughts, or both?',
      why: 'Written expression challenges can stem from fine motor issues (dysgraphia), language processing, or executive functioning — each requiring different interventions.',
    },
    {
      question: 'What assistive technology options are available for writing (speech-to-text, word prediction)?',
      why: 'IDEA requires the IEP team to consider assistive technology for every child (34 CFR §300.324(a)(2)(v)).',
    },
    {
      question: 'How are writing assignments being modified or scaffolded for my child right now?',
      why: 'Ensures your child is receiving appropriate support rather than simply being excused from writing tasks.',
    },
  ],
  math: [
    {
      question: 'Which specific math skills is my child struggling with — computation, concepts, word problems, or all three?',
      why: 'Targeted intervention requires identifying the specific deficit, not just a general "math difficulty."',
    },
    {
      question: 'What manipulatives, visual supports, or calculators are being used as part of instruction?',
      why: 'Multi-sensory and concrete-representational-abstract approaches are evidence-based for math difficulties.',
    },
    {
      question: 'Is my child receiving explicit, systematic math instruction in a small group or individual setting?',
      why: 'Research consistently shows that students with math disabilities benefit from explicit instruction with immediate corrective feedback.',
    },
  ],
  behavior: [
    {
      question: 'Has a Functional Behavior Assessment (FBA) been conducted to identify the function of the behavior?',
      why: 'Under IDEA (34 CFR §300.324(a)(2)(i)), the team must address behavior that impedes learning. An FBA is the foundation for an effective Behavior Intervention Plan (BIP).',
    },
    {
      question: 'What positive behavioral supports are in place, and what data is being collected on their effectiveness?',
      why: 'IDEA emphasizes positive behavioral interventions and supports. Punitive-only approaches are insufficient.',
    },
    {
      question: 'How is the school distinguishing between behavior caused by the disability and willful misbehavior?',
      why: 'Manifestation determination is required before any disciplinary removal beyond 10 days (34 CFR §300.530(e)).',
    },
    {
      question: 'What de-escalation strategies are staff trained to use, and is my child ever being physically restrained or secluded?',
      why: 'Restraint and seclusion should only be used in emergencies. Many states have specific laws limiting their use. You have a right to be notified.',
    },
  ],
  communication: [
    {
      question: 'How many minutes per week of speech-language services is my child receiving, and in what setting?',
      why: 'The IEP must specify the frequency, location, and duration of related services (34 CFR §300.320(a)(7)).',
    },
    {
      question: 'Is the speech-language pathologist collaborating with classroom teachers to support communication throughout the day?',
      why: 'Isolated therapy without classroom carryover limits generalization of skills.',
    },
    {
      question: 'Has an augmentative and alternative communication (AAC) evaluation been considered?',
      why: 'For students with significant communication needs, AAC must be considered as part of assistive technology (34 CFR §300.324(a)(2)(v)).',
    },
  ],
  'social-emotional': [
    {
      question: 'What social skills instruction or counseling is my child receiving as part of the plan?',
      why: 'Social-emotional needs that impact educational performance must be addressed through the IEP or 504 plan.',
    },
    {
      question: 'How is the school measuring my child\'s social-emotional progress, and what data can you share?',
      why: 'Like academic goals, social-emotional goals must be measurable and tracked with data.',
    },
    {
      question: 'Is there a plan for supporting my child during unstructured times like recess, lunch, and transitions?',
      why: 'Social-emotional difficulties often manifest most during unstructured periods when adult support is limited.',
    },
  ],
  'motor skills': [
    {
      question: 'How many minutes per week of occupational therapy is my child receiving?',
      why: 'The IEP must specify OT service frequency and duration (34 CFR §300.320(a)(7)).',
    },
    {
      question: 'What accommodations are in place for written assignments while motor skills are being developed?',
      why: 'Students shouldn\'t be penalized academically for motor difficulties while working on those skills in therapy.',
    },
    {
      question: 'Are there sensory needs contributing to the motor difficulties that should also be addressed?',
      why: 'Motor and sensory processing are often interconnected, and a comprehensive OT evaluation should assess both.',
    },
  ],
  attention: [
    {
      question: 'What environmental modifications are in place to minimize distractions for my child?',
      why: 'Classroom environment adjustments (seating, noise reduction, visual schedules) are often the most effective first-line supports.',
    },
    {
      question: 'How are assignments being broken down or modified to account for attention difficulties?',
      why: 'Chunking tasks, providing frequent breaks, and reducing non-essential workload are evidence-based accommodations for attention difficulties.',
    },
    {
      question: 'Is the school tracking on-task behavior data, and can I see it?',
      why: 'Objective data on attention and task completion helps the team adjust strategies and measure progress.',
    },
  ],
  'executive functioning': [
    {
      question: 'What organizational systems or tools is the school teaching my child to use?',
      why: 'Executive functioning difficulties require explicit instruction in organizational strategies, not just consequences for disorganization.',
    },
    {
      question: 'How is homework being managed — is there a system for getting assignments home and back?',
      why: 'The homework cycle is one of the biggest pain points for students with executive functioning challenges and their families.',
    },
    {
      question: 'Is there a check-in/check-out system or adult mentor helping my child manage the school day?',
      why: 'Daily monitoring with a trusted adult is one of the most effective supports for executive functioning deficits.',
    },
  ],
  'adaptive/daily living': [
    {
      question: 'What independent living skills are being targeted, and how are they being taught?',
      why: 'Adaptive skills instruction should be systematic and functional, embedded in real-life routines.',
    },
    {
      question: 'Is my child receiving community-based instruction opportunities?',
      why: 'For students working on daily living skills, practice in real community settings (grocery stores, restaurants, public transit) is critical for generalization.',
    },
    {
      question: 'How is transition planning addressing independent living goals?',
      why: 'IDEA requires transition planning to include independent living skills when appropriate (34 CFR §300.320(b)).',
    },
  ],
};

export default meetingQuestions;
