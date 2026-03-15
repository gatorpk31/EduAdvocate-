/* ═══════════════════════════════════════════
   PlanVocate — IEP Goals Data
   Structured as: EduIEPGoals[disabilityId][subArea][gradeLevel]
   Each entry is an array of goal objects
   ═══════════════════════════════════════════ */

var EduIEPGoals = {

  /* ── Autism ─────────────────────────────── */
  'autism': {
    'Social communication and interaction': {
      'prek': [
        { area: 'Joint Attention', goal: 'Given a shared activity, the student will initiate joint attention by pointing, showing, or commenting to a communication partner in 4 out of 5 opportunities across 3 consecutive sessions.', measurement: 'Direct observation with data collection across structured and unstructured activities', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'National Professional Development Center on ASD, Evidence-Based Practices' },
        { area: 'Social Reciprocity', goal: 'During play-based activities, the student will engage in 2–3 turn exchanges with a peer, using verbal or nonverbal communication, in 4 out of 5 opportunities.', measurement: 'Structured observation during free play and small group activities', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Kasari et al. (2006), peer-mediated intervention research' }
      ],
      'K-2': [
        { area: 'Conversational Skills', goal: 'The student will initiate and maintain a conversation with a peer for at least 3 exchanges on a shared topic in 4 out of 5 opportunities across settings.', measurement: 'Data collection during structured social skills sessions and classroom observations', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.SL.1.1', researchCitation: 'Social Stories (Gray, 2010); peer-mediated instruction' },
        { area: 'Perspective Taking', goal: 'When presented with a social scenario, the student will correctly identify how another person might feel and suggest an appropriate response in 4 out of 5 trials.', measurement: 'Curriculum-based measurement using social scenario cards', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Theory of Mind intervention research (Baron-Cohen, 2001)' }
      ],
      '3-5': [
        { area: 'Conversational Skills', goal: 'The student will engage in a topic-maintenance conversation for at least 5 exchanges, including asking follow-up questions, in 4 out of 5 opportunities.', measurement: 'Structured observation and data tracking during social interactions', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.SL.3.1', researchCitation: 'Social skills group intervention research (Laugeson et al., 2012)' },
        { area: 'Nonverbal Communication', goal: 'The student will correctly interpret nonverbal cues (facial expressions, body language, tone of voice) and adjust behavior accordingly in 4 out of 5 social scenarios.', measurement: 'Role-play assessments and naturalistic observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'PEERS program (Laugeson & Frankel, 2010)' }
      ],
      '6-8': [
        { area: 'Social Problem-Solving', goal: 'When encountering a social conflict, the student will identify the problem, generate at least 2 solutions, evaluate consequences, and choose an appropriate response in 4 out of 5 opportunities.', measurement: 'Structured scenarios and teacher/counselor observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Social problem-solving frameworks (Crick & Dodge, 1994)' },
        { area: 'Group Participation', goal: 'During cooperative learning activities, the student will contribute ideas, take turns speaking, and respond to peers\' contributions in 4 out of 5 group sessions.', measurement: 'Teacher observation checklist and peer feedback', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.SL.6.1', researchCitation: 'Cooperative learning research (Johnson & Johnson, 2009)' }
      ],
      '9-12': [
        { area: 'Self-Advocacy', goal: 'The student will identify and communicate personal strengths, challenges, and needed accommodations to teachers or employers in 4 out of 5 opportunities.', measurement: 'Self-advocacy checklist and role-play assessments', standardsAlignment: 'IDEA 34 CFR §300.320; Transition planning requirements', researchCitation: 'Self-determination research (Wehmeyer et al., 2007)' },
        { area: 'Workplace Social Skills', goal: 'In a work-based learning setting, the student will demonstrate appropriate workplace social interactions (greetings, requesting help, accepting feedback) in 4 out of 5 observations.', measurement: 'Job coach observation and employer feedback', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Supported employment research (Wehman et al., 2014)' }
      ],
      'transition': [
        { area: 'Community Social Skills', goal: 'The student will independently navigate social interactions in community settings (stores, transportation, appointments) with appropriate communication in 4 out of 5 opportunities.', measurement: 'Community-based observation and self-monitoring checklist', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Community-based instruction research (Cimera, 2010)' }
      ]
    },
    'Executive function and self-regulation': {
      'prek': [
        { area: 'Following Routines', goal: 'Given a visual schedule, the student will independently follow a 3-step classroom routine (e.g., arrive, hang up coat, sit at table) in 4 out of 5 opportunities.', measurement: 'Direct observation with visual schedule data tracking', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Visual supports research (Hume et al., 2014)' }
      ],
      'K-2': [
        { area: 'Task Completion', goal: 'The student will independently complete a classroom task with 2 or fewer prompts within the allotted time in 4 out of 5 opportunities.', measurement: 'Teacher data collection on prompting level and task completion', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Systematic instruction research (Collins, 2012)' },
        { area: 'Emotional Regulation', goal: 'When experiencing frustration or anxiety, the student will use a taught coping strategy (e.g., deep breathing, requesting a break) instead of engaging in disruptive behavior in 4 out of 5 instances.', measurement: 'Behavior data tracking and frequency counts', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Zones of Regulation (Kuypers, 2011)' }
      ],
      '3-5': [
        { area: 'Organization', goal: 'The student will use an organizational system (checklist, planner, folder system) to track and submit assignments with 80% accuracy across a grading period.', measurement: 'Weekly assignment tracking and teacher verification', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Organizational skills training research (Langberg et al., 2012)' }
      ],
      '6-8': [
        { area: 'Planning and Prioritizing', goal: 'Given a multi-step assignment, the student will create a plan that includes breaking the task into steps, estimating time needed, and setting deadlines, completing the assignment on time in 4 out of 5 opportunities.', measurement: 'Assignment planning sheets and completion data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Executive function intervention research (Dawson & Guare, 2018)' }
      ],
      '9-12': [
        { area: 'Self-Monitoring', goal: 'The student will use a self-monitoring checklist to evaluate task progress and adjust strategies as needed, meeting deadlines for 80% of assignments.', measurement: 'Self-monitoring logs and grade tracking', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Self-monitoring research (Mooney et al., 2005)' }
      ],
      'transition': [
        { area: 'Independent Planning', goal: 'The student will independently plan and manage daily activities (appointments, work schedule, personal tasks) using a digital or paper planning system for 4 out of 5 weeks.', measurement: 'Planning system review and self-report', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Self-management research (Lee et al., 2007)' }
      ]
    },
    'Adaptive behavior and daily living skills': {
      'prek': [
        { area: 'Self-Care', goal: 'The student will independently complete age-appropriate self-care tasks (handwashing, toileting, putting on coat) with no more than 1 verbal prompt in 4 out of 5 opportunities.', measurement: 'Task analysis data collection', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Applied behavior analysis task analysis research' }
      ],
      'K-2': [
        { area: 'Classroom Independence', goal: 'The student will independently manage classroom materials (unpacking backpack, getting supplies, cleaning up workspace) in 4 out of 5 opportunities.', measurement: 'Teacher observation checklist', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Structured teaching (TEACCH) research' }
      ],
      '3-5': [
        { area: 'Daily Living', goal: 'The student will independently complete a multi-step daily living task (preparing a simple snack, organizing belongings) given a visual task analysis in 4 out of 5 opportunities.', measurement: 'Task analysis performance data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Video modeling research (Bellini & Akullian, 2007)' }
      ],
      '6-8': [
        { area: 'Community Skills', goal: 'The student will demonstrate functional community skills (making a purchase, using public transportation schedule, reading a menu) in 4 out of 5 natural opportunities.', measurement: 'Community-based assessment', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Community-based instruction research' }
      ],
      '9-12': [
        { area: 'Independent Living', goal: 'The student will perform household management tasks (laundry, meal preparation, budgeting) with 80% accuracy across 3 consecutive assessment periods.', measurement: 'Performance-based assessment with rubric', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Life skills curricula research (Bouck & Joshi, 2016)' }
      ],
      'transition': [
        { area: 'Community Independence', goal: 'The student will independently navigate community resources (banking, healthcare appointments, grocery shopping) with no more than 1 prompt in 4 out of 5 opportunities.', measurement: 'Community-based performance data', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Self-determination and community participation research' }
      ]
    },
    'Sensory processing and regulation': {
      'prek': [
        { area: 'Sensory Tolerance', goal: 'The student will tolerate typical classroom sensory experiences (noise level, lighting, textures during art) for at least 15 minutes using sensory supports, increasing to 30 minutes over the IEP period.', measurement: 'Duration data and sensory support usage tracking', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Sensory integration research (Schaaf et al., 2014)' }
      ],
      'K-2': [
        { area: 'Self-Regulation', goal: 'When experiencing sensory overload, the student will independently use a pre-taught calming strategy (sensory break, noise-canceling headphones, fidget tool) to return to a regulated state within 5 minutes in 4 out of 5 instances.', measurement: 'Behavior tracking and duration data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Zones of Regulation (Kuypers, 2011)' }
      ],
      '3-5': [
        { area: 'Sensory Self-Advocacy', goal: 'The student will identify personal sensory needs and request appropriate accommodations (seating change, break, headphones) before reaching a state of dysregulation in 4 out of 5 opportunities.', measurement: 'Self-advocacy tracking and teacher observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Self-advocacy and sensory processing research' }
      ],
      '6-8': [
        { area: 'Environmental Management', goal: 'The student will independently implement sensory strategies across classroom settings to maintain engagement for the duration of each class period in 4 out of 5 days.', measurement: 'Self-monitoring log and teacher verification', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Adolescent sensory processing research (Pfeiffer et al., 2011)' }
      ],
      '9-12': [
        { area: 'Sensory Self-Management', goal: 'The student will develop and follow a personal sensory diet plan, adjusting strategies as needed across school, work, and community environments in 4 out of 5 weeks.', measurement: 'Self-monitoring checklist and OT consultation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Sensory diet research (Wilbarger, 1995)' }
      ],
      'transition': [
        { area: 'Workplace Sensory Management', goal: 'The student will independently manage sensory needs in a workplace setting using pre-planned strategies, maintaining productivity for the duration of a work shift in 4 out of 5 shifts.', measurement: 'Job coach observation and self-report', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Workplace sensory accommodation research' }
      ]
    },
    'Academic skills (specify reading, writing, or math)': {
      'prek': [
        { area: 'Pre-Literacy', goal: 'The student will identify 20 out of 26 uppercase letters by name and demonstrate book-handling skills (front cover, turning pages, left-to-right directionality) in 4 out of 5 trials.', measurement: 'Letter identification probe and structured observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'National Early Literacy Panel (2008)' }
      ],
      'K-2': [
        { area: 'Reading Comprehension', goal: 'After reading or listening to a grade-level passage, the student will answer literal and inferential comprehension questions with 80% accuracy.', measurement: 'Curriculum-based measurement and reading comprehension probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RL.2.1', researchCitation: 'National Reading Panel (2000)' },
        { area: 'Written Expression', goal: 'The student will write 3 related sentences on a given topic with correct capitalization and ending punctuation in 4 out of 5 opportunities.', measurement: 'Writing samples with rubric scoring', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.2.3', researchCitation: 'Evidence-based writing instruction research' }
      ],
      '3-5': [
        { area: 'Reading Fluency', goal: 'The student will read grade-level text at a rate of at least 100 words per minute with 95% accuracy and appropriate prosody.', measurement: 'Oral reading fluency probes administered bi-weekly', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RF.4.4', researchCitation: 'Repeated reading fluency research (Therrien, 2004)' },
        { area: 'Math Problem-Solving', goal: 'The student will solve multi-step word problems involving addition and subtraction within 1,000 with 80% accuracy using a graphic organizer.', measurement: 'Curriculum-based measurement probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.3.OA.D.8', researchCitation: 'Schema-based instruction research (Jitendra et al., 2007)' }
      ],
      '6-8': [
        { area: 'Reading Comprehension', goal: 'The student will identify main ideas, supporting details, and author\'s purpose in grade-level informational text with 80% accuracy.', measurement: 'Reading comprehension assessments and classroom performance', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RI.7.2', researchCitation: 'Comprehension strategy instruction research' }
      ],
      '9-12': [
        { area: 'Written Expression', goal: 'The student will write a 5-paragraph essay with a clear thesis, supporting evidence, and conclusion, scoring at least 3 out of 4 on a writing rubric.', measurement: 'Writing portfolio assessment', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.9-10.1', researchCitation: 'Self-regulated strategy development (Harris & Graham, 2009)' }
      ],
      'transition': [
        { area: 'Functional Academics', goal: 'The student will apply reading, writing, and math skills to functional tasks (reading job applications, writing emails, computing budgets) with 80% accuracy.', measurement: 'Performance-based assessment in authentic contexts', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Functional academics research' }
      ]
    }
  },

  /* ── ADHD ──────────────────────────────── */
  'adhd': {
    'Attention and focus': {
      'prek': [
        { area: 'Sustained Attention', goal: 'The student will attend to a teacher-directed activity for at least 5 minutes with no more than 1 redirection in 4 out of 5 opportunities.', measurement: 'Duration recording and teacher observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'DuPaul & Stoner (2014), ADHD in Schools' }
      ],
      'K-2': [
        { area: 'On-Task Behavior', goal: 'The student will remain on-task during independent work for 10 consecutive minutes, as measured by momentary time sampling, in 4 out of 5 sessions.', measurement: 'Momentary time sampling at 1-minute intervals', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Self-monitoring interventions for ADHD (Reid et al., 2005)' },
        { area: 'Following Directions', goal: 'The student will follow 2-step oral directions within 10 seconds of the instruction without needing repetition in 4 out of 5 opportunities.', measurement: 'Teacher observation data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Behavioral classroom management research' }
      ],
      '3-5': [
        { area: 'Sustained Attention', goal: 'The student will sustain attention to classroom instruction for 15-minute intervals, using self-monitoring strategies, in 4 out of 5 class periods.', measurement: 'Self-monitoring checklist with teacher verification', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Self-monitoring research for students with ADHD (Harris et al., 2005)' }
      ],
      '6-8': [
        { area: 'Attention Management', goal: 'The student will use attention-management strategies (note-taking, active listening cues, self-checking) to stay engaged during 30-minute instructional periods in 4 out of 5 class sessions.', measurement: 'Self-monitoring log and teacher observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Cognitive-behavioral interventions for ADHD (Pfiffner & DuPaul, 2015)' }
      ],
      '9-12': [
        { area: 'Self-Regulated Attention', goal: 'The student will independently apply attention strategies across classes, maintaining engagement during instruction and completing in-class assignments with 80% accuracy.', measurement: 'Assignment completion rates and self-monitoring data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Self-regulation research for adolescents with ADHD' }
      ],
      'transition': [
        { area: 'Workplace Focus', goal: 'The student will sustain attention to workplace tasks for the required duration, using self-selected strategies, in 4 out of 5 work sessions.', measurement: 'Job coach observation and productivity data', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Workplace accommodation research for ADHD' }
      ]
    },
    'Organization and planning': {
      'K-2': [
        { area: 'Material Management', goal: 'The student will organize and locate classroom materials (books, papers, supplies) within 1 minute when needed in 4 out of 5 opportunities.', measurement: 'Teacher observation and desk/backpack checks', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Organizational skills training research' }
      ],
      '3-5': [
        { area: 'Assignment Tracking', goal: 'The student will accurately record all assignments in a planner and turn in completed homework on time for 80% of assignments.', measurement: 'Weekly planner checks and assignment completion records', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Homework intervention research (Langberg et al., 2012)' }
      ],
      '6-8': [
        { area: 'Long-Term Planning', goal: 'Given a project with a deadline of 2+ weeks, the student will break the project into steps, create a timeline, and complete each step on time in 4 out of 5 projects.', measurement: 'Project planning sheets and completion data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Executive function interventions (Dawson & Guare, 2018)' }
      ],
      '9-12': [
        { area: 'Self-Management Systems', goal: 'The student will independently maintain an organizational system (digital or paper) that tracks all assignments, tests, and deadlines with 85% accuracy.', measurement: 'Monthly organizational system audits', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Organizational skills training for adolescents (Langberg, 2011)' }
      ],
      'transition': [
        { area: 'Life Management', goal: 'The student will independently manage personal scheduling (work, appointments, tasks) and meet commitments on time in 4 out of 5 weeks.', measurement: 'Schedule review and self-report', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Self-determination research' }
      ]
    },
    'Impulse control and self-regulation': {
      'prek': [
        { area: 'Behavioral Regulation', goal: 'The student will wait for a turn during group activities using a visual timer or other cue in 4 out of 5 opportunities.', measurement: 'Teacher observation data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Behavioral interventions for young children with ADHD' }
      ],
      'K-2': [
        { area: 'Impulse Control', goal: 'The student will raise hand and wait to be called on before speaking during class discussions in 4 out of 5 opportunities.', measurement: 'Frequency data on calling out vs. hand-raising', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Positive behavioral interventions research' }
      ],
      '3-5': [
        { area: 'Self-Regulation', goal: 'The student will use a stop-and-think strategy before responding impulsively in academic and social situations in 4 out of 5 opportunities.', measurement: 'Teacher observation and student self-reflection', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Cognitive-behavioral intervention research' }
      ],
      '6-8': [
        { area: 'Emotional Regulation', goal: 'When experiencing strong emotions, the student will identify the emotion and use a pre-taught coping strategy before reacting in 4 out of 5 instances.', measurement: 'Behavior incident tracking and student self-monitoring', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Emotion regulation research (Rosen et al., 2019)' }
      ],
      '9-12': [
        { area: 'Decision-Making', goal: 'The student will demonstrate thoughtful decision-making by considering consequences before acting in social and academic situations in 4 out of 5 opportunities.', measurement: 'Self-monitoring log and counselor check-ins', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'CBT for adolescents with ADHD (Sprich et al., 2016)' }
      ],
      'transition': [
        { area: 'Workplace Self-Regulation', goal: 'The student will manage frustration and stress in workplace settings using self-regulation strategies in 4 out of 5 observed instances.', measurement: 'Job coach observation and employer feedback', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Workplace self-regulation research' }
      ]
    }
  },

  /* ── Dyslexia ──────────────────────────── */
  'dyslexia': {
    'Reading decoding and fluency': {
      'prek': [
        { area: 'Phonological Awareness', goal: 'The student will segment and blend phonemes in CVC words with 80% accuracy.', measurement: 'Phonological awareness assessment probes', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'National Reading Panel (2000)' }
      ],
      'K-2': [
        { area: 'Phonics', goal: 'The student will decode single-syllable words with short and long vowel patterns with 90% accuracy.', measurement: 'Nonsense word fluency probes administered bi-weekly', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RF.1.3', researchCitation: 'Orton-Gillingham-based instruction research' },
        { area: 'Oral Reading Fluency', goal: 'The student will read grade-level connected text at 60 words per minute with 95% accuracy.', measurement: 'Oral reading fluency progress monitoring probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RF.2.4', researchCitation: 'Repeated reading research (Therrien, 2004)' }
      ],
      '3-5': [
        { area: 'Multisyllabic Decoding', goal: 'The student will decode multisyllabic words using syllable division rules with 85% accuracy.', measurement: 'Multisyllabic word reading probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RF.4.3', researchCitation: 'Structured literacy research (Moats, 2020)' },
        { area: 'Reading Fluency', goal: 'The student will read grade-level text at 100 words per minute with 95% accuracy and appropriate expression.', measurement: 'Oral reading fluency probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RF.5.4', researchCitation: 'Fluency instruction research (Rasinski, 2010)' }
      ],
      '6-8': [
        { area: 'Advanced Decoding', goal: 'The student will accurately read words with Latin and Greek roots, prefixes, and suffixes with 85% accuracy in context.', measurement: 'Morphological awareness assessments', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.L.6.4', researchCitation: 'Morphological instruction research (Goodwin & Ahn, 2013)' }
      ],
      '9-12': [
        { area: 'Reading Fluency', goal: 'The student will read grade-level informational and literary text at a rate sufficient for comprehension (minimum 130 wpm) with 95% accuracy.', measurement: 'Oral reading fluency probes and silent reading rate measures', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RF.5.4', researchCitation: 'Adolescent literacy research (Torgesen et al., 2007)' }
      ],
      'transition': [
        { area: 'Functional Reading', goal: 'The student will read and comprehend real-world documents (job applications, lease agreements, instructions) with 85% comprehension accuracy.', measurement: 'Performance-based reading assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Functional literacy research' }
      ]
    },
    'Reading comprehension': {
      'K-2': [
        { area: 'Comprehension', goal: 'The student will retell key events from a story in correct sequence, including characters, setting, and main events, in 4 out of 5 trials.', measurement: 'Retelling rubric', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RL.2.2', researchCitation: 'Comprehension instruction research' }
      ],
      '3-5': [
        { area: 'Comprehension Strategies', goal: 'The student will use comprehension strategies (predicting, questioning, summarizing, visualizing) to answer text-dependent questions with 80% accuracy.', measurement: 'Comprehension assessments with strategy documentation', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RL.4.1', researchCitation: 'Reciprocal teaching research (Palincsar & Brown, 1984)' }
      ],
      '6-8': [
        { area: 'Inferential Comprehension', goal: 'The student will make inferences and draw conclusions from grade-level text, citing textual evidence, with 80% accuracy.', measurement: 'Text-dependent questioning assessments', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RL.7.1', researchCitation: 'Inference training research' }
      ],
      '9-12': [
        { area: 'Critical Analysis', goal: 'The student will analyze and evaluate arguments in informational text, identifying claims, evidence, and reasoning with 80% accuracy.', measurement: 'Analytical reading assessments and essays', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.RI.9-10.8', researchCitation: 'Critical reading instruction research' }
      ],
      'transition': [
        { area: 'Functional Comprehension', goal: 'The student will comprehend and follow written instructions in workplace and community documents with 90% accuracy.', measurement: 'Performance-based assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Functional literacy research' }
      ]
    },
    'Written expression': {
      'K-2': [
        { area: 'Spelling', goal: 'The student will correctly spell grade-level words with regular phonetic patterns with 80% accuracy on weekly assessments.', measurement: 'Spelling probes and dictation tasks', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.L.2.2', researchCitation: 'Spelling instruction research (Graham & Santangelo, 2014)' }
      ],
      '3-5': [
        { area: 'Written Expression', goal: 'The student will write a multi-paragraph composition with a clear topic sentence, supporting details, and conclusion with minimal spelling errors in grade-appropriate words.', measurement: 'Writing samples scored with a rubric', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.4.1', researchCitation: 'SRSD writing instruction research (Harris & Graham, 2009)' }
      ],
      '6-8': [
        { area: 'Written Expression', goal: 'The student will produce organized, multi-paragraph written responses that demonstrate command of grade-level conventions with no more than 5 spelling/grammar errors per page.', measurement: 'Writing portfolio assessment with rubric', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.7.4', researchCitation: 'Writing instruction research for students with dyslexia' }
      ],
      '9-12': [
        { area: 'Academic Writing', goal: 'The student will produce a research-based essay with proper citations, organization, and grade-level conventions, scoring 3+ on a 4-point rubric.', measurement: 'Writing rubric assessment', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.9-10.2', researchCitation: 'Writing intervention research for older students with dyslexia' }
      ],
      'transition': [
        { area: 'Functional Writing', goal: 'The student will compose professional communications (emails, cover letters, forms) with correct grammar and formatting in 4 out of 5 opportunities.', measurement: 'Writing sample assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Functional writing instruction research' }
      ]
    }
  },

  /* ── Dysgraphia ────────────────────────── */
  'dysgraphia': {
    'Handwriting and fine motor skills': {
      'prek': [
        { area: 'Pre-Writing', goal: 'The student will trace and copy basic shapes (circle, cross, square) and 10 uppercase letters with correct formation in 4 out of 5 trials.', measurement: 'Handwriting samples assessed with formation checklist', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Handwriting Without Tears research' }
      ],
      'K-2': [
        { area: 'Letter Formation', goal: 'The student will write all 26 uppercase and lowercase letters from memory with correct formation, size, and spacing in 4 out of 5 trials.', measurement: 'Handwriting assessment samples', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.L.1.1', researchCitation: 'Handwriting instruction research (Graham et al., 2000)' }
      ],
      '3-5': [
        { area: 'Handwriting Fluency', goal: 'The student will produce legible handwriting at a rate of at least 40 letters per minute while maintaining correct formation and spacing.', measurement: 'Timed handwriting samples', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Handwriting fluency research' }
      ],
      '6-8': [
        { area: 'Keyboarding', goal: 'The student will type at a rate of at least 25 words per minute with 90% accuracy as an alternative to handwriting for assignments.', measurement: 'Typing speed and accuracy assessments', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Assistive technology for written expression research' }
      ],
      '9-12': [
        { area: 'Technology for Writing', goal: 'The student will independently use assistive technology (speech-to-text, word prediction, spell-check) to produce written work meeting grade-level standards.', measurement: 'Written work quality assessment', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'AT for writing research (MacArthur, 2009)' }
      ],
      'transition': [
        { area: 'Functional Writing Tools', goal: 'The student will independently select and use appropriate writing tools (digital or handwritten) for various real-world writing tasks in 4 out of 5 opportunities.', measurement: 'Performance-based assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Assistive technology transition research' }
      ]
    },
    'Written expression and composition': {
      'K-2': [
        { area: 'Sentence Writing', goal: 'The student will compose complete sentences with correct capitalization and punctuation, generating at least 3 sentences on a given topic in 4 out of 5 trials.', measurement: 'Writing samples with rubric', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.2.3', researchCitation: 'Writing instruction research for students with writing difficulties' }
      ],
      '3-5': [
        { area: 'Paragraph Writing', goal: 'Using a graphic organizer, the student will write a paragraph with a topic sentence, 3 supporting details, and a concluding sentence in 4 out of 5 opportunities.', measurement: 'Writing samples scored with rubric', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.4.1', researchCitation: 'Graphic organizer research for writing (Troia, 2014)' }
      ],
      '6-8': [
        { area: 'Multi-Paragraph Writing', goal: 'The student will produce organized multi-paragraph essays using a planning template, including introduction, body paragraphs with evidence, and conclusion.', measurement: 'Essay rubric scoring', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.7.1', researchCitation: 'SRSD research (Harris & Graham, 2009)' }
      ],
      '9-12': [
        { area: 'Academic Writing', goal: 'The student will independently plan, draft, revise, and edit multi-page essays meeting grade-level content standards using appropriate writing tools.', measurement: 'Writing portfolio assessment', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.W.9-10.5', researchCitation: 'Process writing research for students with writing disabilities' }
      ],
      'transition': [
        { area: 'Professional Writing', goal: 'The student will produce professional documents (resume, cover letter, business correspondence) that meet workplace standards in 4 out of 5 opportunities.', measurement: 'Document quality assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Functional writing and transition research' }
      ]
    }
  },

  /* ── Dyscalculia ───────────────────────── */
  'dyscalculia': {
    'Number sense and operations': {
      'prek': [
        { area: 'Number Concepts', goal: 'The student will demonstrate one-to-one correspondence while counting objects to 20 and identify numerals 0–10 with 90% accuracy.', measurement: 'Curriculum-based math assessments', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Number sense intervention research (Gersten et al., 2009)' }
      ],
      'K-2': [
        { area: 'Basic Operations', goal: 'The student will solve addition and subtraction facts within 20 with 90% accuracy using strategies (counting on, making ten, decomposing) within grade-level expectations.', measurement: 'Math fact fluency probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.2.OA.B.2', researchCitation: 'Math fact fluency research (Fuchs et al., 2008)' }
      ],
      '3-5': [
        { area: 'Multiplication and Division', goal: 'The student will fluently multiply and divide within 100 using strategies and recall with 85% accuracy.', measurement: 'Timed math probes and curriculum-based assessments', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.3.OA.C.7', researchCitation: 'Math intervention research (Fuchs et al., 2010)' },
        { area: 'Fractions', goal: 'The student will compare and order fractions with like and unlike denominators using visual models with 80% accuracy.', measurement: 'Fraction assessment probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.4.NF.A.2', researchCitation: 'CRA (Concrete-Representational-Abstract) instruction research' }
      ],
      '6-8': [
        { area: 'Rational Numbers', goal: 'The student will perform operations with fractions, decimals, and percentages with 80% accuracy using visual models and calculator as needed.', measurement: 'Math assessment probes and classroom performance', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.6.NS.A.1', researchCitation: 'Explicit instruction for math difficulties (Gersten et al., 2009)' }
      ],
      '9-12': [
        { area: 'Algebra Foundations', goal: 'The student will solve one- and two-step equations with 80% accuracy using concrete and visual representations.', measurement: 'Math assessments and problem-solving tasks', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.HSA.REI.B.3', researchCitation: 'Algebra intervention research (Witzel et al., 2003)' }
      ],
      'transition': [
        { area: 'Functional Math', goal: 'The student will apply math skills to daily living tasks (budgeting, making change, measuring, telling time) with 85% accuracy.', measurement: 'Performance-based functional math assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Functional math instruction research' }
      ]
    },
    'Math problem-solving': {
      'K-2': [
        { area: 'Word Problems', goal: 'The student will solve one-step addition and subtraction word problems using a schema-based approach with 80% accuracy.', measurement: 'Word problem probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.2.OA.A.1', researchCitation: 'Schema-based instruction (Jitendra et al., 2007)' }
      ],
      '3-5': [
        { area: 'Multi-Step Problems', goal: 'The student will solve two-step word problems using multiple operations with 75% accuracy, using a problem-solving checklist.', measurement: 'Curriculum-based assessments', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.4.OA.A.3', researchCitation: 'Cognitive strategy instruction for math (Montague, 2008)' }
      ],
      '6-8': [
        { area: 'Proportional Reasoning', goal: 'The student will set up and solve proportion and percent problems with 75% accuracy using visual models and calculators as needed.', measurement: 'Math assessment probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.MATH.CONTENT.7.RP.A.3', researchCitation: 'Proportional reasoning research' }
      ],
      '9-12': [
        { area: 'Applied Math', goal: 'The student will apply mathematical reasoning to solve real-world problems involving financial literacy, measurement, and data interpretation with 75% accuracy.', measurement: 'Performance-based math assessments', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Applied math instruction research' }
      ],
      'transition': [
        { area: 'Financial Literacy', goal: 'The student will demonstrate financial skills (creating a budget, understanding pay stubs, calculating tips, comparing prices) with 80% accuracy.', measurement: 'Performance-based financial literacy assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Financial literacy instruction research' }
      ]
    }
  },

  /* ── Speech-Language ───────────────────── */
  'speech-language': {
    'Articulation and phonology': {
      'prek': [
        { area: 'Speech Sound Production', goal: 'The student will produce target speech sounds in the initial, medial, and final positions of words with 80% accuracy in structured activities.', measurement: 'Articulation probes administered by SLP', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Articulation intervention research (Williams et al., 2010)' }
      ],
      'K-2': [
        { area: 'Connected Speech', goal: 'The student will produce target speech sounds at the sentence level with 80% accuracy during structured speech therapy and classroom activities.', measurement: 'Connected speech samples analyzed by SLP', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Generalization of articulation gains research' }
      ],
      '3-5': [
        { area: 'Conversational Speech', goal: 'The student will produce all target speech sounds accurately in conversational speech with 90% accuracy across settings.', measurement: 'Conversational speech samples in therapy and classroom', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Articulation and phonological intervention research' }
      ]
    },
    'Receptive language': {
      'prek': [
        { area: 'Vocabulary Comprehension', goal: 'The student will demonstrate understanding of 50 new vocabulary words by pointing to or selecting the correct item/picture when named in 4 out of 5 trials.', measurement: 'Vocabulary comprehension probes', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Early vocabulary intervention research' }
      ],
      'K-2': [
        { area: 'Listening Comprehension', goal: 'The student will follow 2-3 step directions and answer WH-questions about grade-level stories with 80% accuracy.', measurement: 'Listening comprehension assessments', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.SL.2.2', researchCitation: 'Language comprehension intervention research' }
      ],
      '3-5': [
        { area: 'Complex Language', goal: 'The student will demonstrate understanding of figurative language (idioms, metaphors, similes) and multiple-meaning words with 80% accuracy.', measurement: 'Language comprehension probes', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.L.4.5', researchCitation: 'Figurative language intervention research' }
      ],
      '6-8': [
        { area: 'Academic Language', goal: 'The student will demonstrate comprehension of grade-level academic vocabulary and complex sentence structures across content areas with 80% accuracy.', measurement: 'Academic language assessments', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.L.6.6', researchCitation: 'Academic language intervention research' }
      ],
      '9-12': [
        { area: 'Advanced Comprehension', goal: 'The student will comprehend complex verbal information including lectures, multi-step directions, and abstract concepts with 80% accuracy using note-taking strategies.', measurement: 'Comprehension assessments and note quality', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Language intervention research for adolescents' }
      ]
    },
    'Expressive language': {
      'prek': [
        { area: 'Expressive Vocabulary', goal: 'The student will use age-appropriate vocabulary to label objects, actions, and attributes in 4 out of 5 opportunities.', measurement: 'Language sample analysis', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Expressive language intervention research' }
      ],
      'K-2': [
        { area: 'Sentence Formulation', goal: 'The student will produce grammatically correct sentences of 5+ words to describe events, express needs, and answer questions in 4 out of 5 opportunities.', measurement: 'Language sample analysis', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.SL.1.4', researchCitation: 'Sentence formulation intervention research' }
      ],
      '3-5': [
        { area: 'Narrative Skills', goal: 'The student will produce an organized narrative with characters, setting, problem, events, and resolution using appropriate grammar in 4 out of 5 opportunities.', measurement: 'Narrative scoring rubric', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.SL.3.4', researchCitation: 'Narrative intervention research (Gillam & Gillam, 2016)' }
      ],
      '6-8': [
        { area: 'Academic Discourse', goal: 'The student will participate in academic discussions using topic-relevant vocabulary, supporting claims with evidence, in 4 out of 5 opportunities.', measurement: 'Classroom observation and discussion rubric', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.SL.6.1', researchCitation: 'Academic discourse intervention research' }
      ],
      '9-12': [
        { area: 'Formal Communication', goal: 'The student will deliver organized oral presentations with appropriate vocabulary, grammar, and supporting details, scoring 3+ on a 4-point rubric.', measurement: 'Presentation rubric', standardsAlignment: 'IDEA 34 CFR §300.320; CCSS.ELA-LITERACY.SL.9-10.4', researchCitation: 'Oral language intervention research for adolescents' }
      ]
    }
  },

  /* ── Emotional-Behavioral ──────────────── */
  'emotional-behavioral': {
    'Behavioral regulation': {
      'prek': [
        { area: 'Behavioral Expectations', goal: 'The student will follow 3 basic classroom rules (safe hands, listening ears, walking feet) with no more than 2 reminders per activity period in 4 out of 5 days.', measurement: 'Behavior tracking chart', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Positive behavioral interventions and supports (PBIS) research' }
      ],
      'K-2': [
        { area: 'Behavioral Self-Management', goal: 'The student will demonstrate expected classroom behaviors (remaining seated, raising hand, using appropriate voice level) for 80% of observed intervals during a class period.', measurement: 'Interval recording and daily behavior reports', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Check-In/Check-Out research (Crone et al., 2010)' }
      ],
      '3-5': [
        { area: 'Conflict Resolution', goal: 'When involved in a peer conflict, the student will use a problem-solving strategy (identify the problem, brainstorm solutions, choose and try a solution) instead of physical or verbal aggression in 4 out of 5 incidents.', measurement: 'Behavior incident reports and counselor observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Social problem-solving interventions (Shure, 2001)' }
      ],
      '6-8': [
        { area: 'Self-Regulation', goal: 'The student will recognize escalating emotions and independently use a de-escalation strategy (taking a break, deep breathing, requesting help) before reaching crisis level in 4 out of 5 instances.', measurement: 'Behavior tracking and self-monitoring data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'CBT interventions for emotional-behavioral disorders' }
      ],
      '9-12': [
        { area: 'Behavioral Accountability', goal: 'The student will take responsibility for behavioral choices, participate in restorative conversations when needed, and follow behavioral expectations for 80% of the school day.', measurement: 'Daily behavior monitoring and restorative practice logs', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Restorative justice in schools research' }
      ],
      'transition': [
        { area: 'Workplace Behavior', goal: 'The student will demonstrate appropriate workplace behaviors (following supervisor directions, managing frustration, accepting feedback) in 4 out of 5 work sessions.', measurement: 'Employer feedback and job coach observation', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Workplace behavior intervention research' }
      ]
    },
    'Social-emotional skills': {
      'prek': [
        { area: 'Emotional Identification', goal: 'The student will identify and label basic emotions (happy, sad, angry, scared) in self and others with 80% accuracy using pictures and real-life scenarios.', measurement: 'Emotion identification probes', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Social-emotional learning research (CASEL)' }
      ],
      'K-2': [
        { area: 'Peer Relationships', goal: 'The student will engage in positive peer interactions (sharing, cooperating, taking turns) during structured and unstructured activities in 4 out of 5 observations.', measurement: 'Peer interaction observation data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Social skills training research' }
      ],
      '3-5': [
        { area: 'Empathy and Perspective-Taking', goal: 'The student will demonstrate empathy by identifying others\' feelings and offering supportive responses in 4 out of 5 social scenarios.', measurement: 'Social scenario assessment and teacher observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'SEL curriculum research (Durlak et al., 2011)' }
      ],
      '6-8': [
        { area: 'Healthy Relationships', goal: 'The student will demonstrate skills for building and maintaining healthy relationships (active listening, respect for boundaries, conflict resolution) in 4 out of 5 observed interactions.', measurement: 'Social skills assessment and counselor observation', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Relationship skills intervention research' }
      ],
      '9-12': [
        { area: 'Self-Awareness', goal: 'The student will identify personal emotional triggers, use coping strategies, and reflect on the connection between thoughts, feelings, and behaviors in 4 out of 5 counseling sessions.', measurement: 'Self-reflection journals and counselor assessment', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'CBT and mindfulness research for adolescents' }
      ],
      'transition': [
        { area: 'Community Relationships', goal: 'The student will build and maintain positive relationships with coworkers, supervisors, and community members in 4 out of 5 settings.', measurement: 'Self-report and support person observation', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Social integration and transition research' }
      ]
    },
    'Academic engagement': {
      'K-2': [
        { area: 'Task Engagement', goal: 'The student will engage in academic tasks for the expected duration with no more than 2 teacher prompts per activity in 4 out of 5 class periods.', measurement: 'Academic engagement tracking', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Academic engagement interventions (Kern & Clemens, 2007)' }
      ],
      '3-5': [
        { area: 'Work Completion', goal: 'The student will complete and submit classroom assignments with 75% accuracy and timeliness in 4 out of 5 school days.', measurement: 'Assignment completion tracking', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Academic engagement research' }
      ],
      '6-8': [
        { area: 'Academic Motivation', goal: 'The student will set weekly academic goals, track progress, and reflect on performance, meeting at least 3 out of 5 self-set goals each week.', measurement: 'Goal-setting worksheets and grade tracking', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Goal-setting and self-determination research' }
      ],
      '9-12': [
        { area: 'Academic Self-Efficacy', goal: 'The student will demonstrate academic engagement by attending all classes, participating in discussions, and completing assignments with 80% completion rate.', measurement: 'Attendance records, participation rubric, and assignment tracking', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Academic self-efficacy research (Bandura, 1997)' }
      ]
    }
  },

  /* ── Intellectual Disability ───────────── */
  'intellectual': {
    'Adaptive behavior and daily living skills': {
      'prek': [
        { area: 'Self-Help Skills', goal: 'The student will independently complete self-care routines (handwashing, toileting, eating with utensils) with no more than 1 verbal prompt in 4 out of 5 opportunities.', measurement: 'Task analysis data collection', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Systematic instruction research' }
      ],
      'K-2': [
        { area: 'Classroom Routines', goal: 'The student will independently follow classroom routines (arrival, lunch, dismissal) using a visual schedule in 4 out of 5 days.', measurement: 'Visual schedule compliance data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Visual supports research' }
      ],
      '3-5': [
        { area: 'Community Skills', goal: 'The student will demonstrate age-appropriate community skills (making a purchase, using a public restroom, crossing the street safely) in 4 out of 5 natural opportunities.', measurement: 'Community-based assessment', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Community-based instruction research' }
      ],
      '6-8': [
        { area: 'Personal Management', goal: 'The student will independently manage personal hygiene, meal preparation, and organizational tasks using checklists in 4 out of 5 days.', measurement: 'Self-care checklist data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Life skills instruction research' }
      ],
      '9-12': [
        { area: 'Independent Living', goal: 'The student will demonstrate skills for independent living (cooking, cleaning, laundry, budgeting, transportation) with 75% accuracy across 3 consecutive assessment periods.', measurement: 'Performance-based life skills assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Independent living skills research' }
      ],
      'transition': [
        { area: 'Community Independence', goal: 'The student will independently access and navigate community resources (banking, healthcare, transportation, shopping) in 4 out of 5 opportunities.', measurement: 'Community-based performance data', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Community participation research' }
      ]
    },
    'Functional academics': {
      'prek': [
        { area: 'Early Literacy', goal: 'The student will recognize own name in print and identify 10 environmental print words (EXIT, STOP, restroom symbols) in 4 out of 5 trials.', measurement: 'Identification probes', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Functional literacy research for students with intellectual disabilities' }
      ],
      'K-2': [
        { area: 'Functional Reading', goal: 'The student will read and respond to 25 functional sight words (safety words, common signs, daily schedule words) with 80% accuracy.', measurement: 'Sight word probes', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Sight word instruction research (Browder et al., 2006)' }
      ],
      '3-5': [
        { area: 'Functional Math', goal: 'The student will identify coins and bills, make purchases with the next-dollar strategy, and tell time to the quarter hour with 80% accuracy.', measurement: 'Performance-based math assessment', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Functional math instruction research' }
      ],
      '6-8': [
        { area: 'Applied Academics', goal: 'The student will apply reading and math skills to real-world tasks (reading schedules, calculating costs, following recipes) with 75% accuracy.', measurement: 'Performance-based assessment in natural contexts', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Applied academics research (Browder et al., 2008)' }
      ],
      '9-12': [
        { area: 'Vocational Academics', goal: 'The student will apply functional academic skills to vocational tasks (reading work instructions, completing time sheets, counting inventory) with 80% accuracy.', measurement: 'Vocational task performance data', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Vocational education research for students with ID' }
      ],
      'transition': [
        { area: 'Life Skills Academics', goal: 'The student will independently use reading, writing, and math skills for daily life tasks (bills, forms, shopping lists, emails) with 75% accuracy.', measurement: 'Performance-based life skills assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Functional academics and transition research' }
      ]
    },
    'Communication and social skills': {
      'prek': [
        { area: 'Functional Communication', goal: 'The student will communicate basic wants and needs using verbal language, signs, or an AAC device in 4 out of 5 opportunities with no more than 1 prompt.', measurement: 'Communication data tracking', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'AAC research (Beukelman & Light, 2020)' }
      ],
      'K-2': [
        { area: 'Social Interaction', goal: 'The student will initiate and respond to social interactions with peers (greetings, invitations to play, sharing) in 4 out of 5 opportunities.', measurement: 'Social interaction observation data', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Peer interaction research' }
      ],
      '3-5': [
        { area: 'Conversational Skills', goal: 'The student will engage in a conversation of at least 3 exchanges on a topic, taking turns and staying on topic, in 4 out of 5 opportunities.', measurement: 'Conversational sample analysis', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Conversational skills training research' }
      ],
      '6-8': [
        { area: 'Social Problem-Solving', goal: 'The student will identify social problems and generate appropriate solutions using a visual problem-solving framework in 4 out of 5 scenarios.', measurement: 'Social scenario assessment', standardsAlignment: 'IDEA 34 CFR §300.320', researchCitation: 'Social problem-solving research' }
      ],
      '9-12': [
        { area: 'Self-Advocacy', goal: 'The student will communicate personal strengths, needs, and preferences to teachers, employers, and service providers in 4 out of 5 opportunities.', measurement: 'Self-advocacy assessment', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Self-determination research (Wehmeyer et al., 2007)' }
      ],
      'transition': [
        { area: 'Workplace Communication', goal: 'The student will demonstrate appropriate workplace communication (following directions, asking questions, reporting problems) in 4 out of 5 work sessions.', measurement: 'Employer feedback and job coach observation', standardsAlignment: 'IDEA 34 CFR §300.320; Transition services', researchCitation: 'Supported employment communication research' }
      ]
    }
  }
};
