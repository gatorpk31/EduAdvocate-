/* ═══════════════════════════════════════════
   PlanVocate — Disability & Condition Data
   Plain-language descriptions for parent-facing display
   ═══════════════════════════════════════════ */

var EduDisabilities = [
  {
    id: 'autism',
    name: 'Autism Spectrum Disorder',
    shortName: 'Autism / ASD',
    ideaCategory: 'Autism',
    legalFramework: 'both',
    description: 'Autism Spectrum Disorder (ASD) is a developmental condition that affects how a person communicates, interacts with others, and experiences the world. It is called a "spectrum" because it affects each person differently and to varying degrees.',
    schoolImpact: 'Children with autism may struggle with social communication, understanding nonverbal cues, adjusting to changes in routine, processing sensory input in busy classrooms, and managing transitions between activities. Some children may have difficulty with abstract or inferential thinking in academic subjects. Others may excel academically but need support with social interactions and self-regulation.',
    parentNotices: 'At home, you may notice your child has intense interests in specific topics, prefers predictable routines, becomes upset by unexpected changes, has difficulty with back-and-forth conversation, interprets language very literally, or is sensitive to sounds, textures, or lights.',
    subAreas: [
      'Social communication and interaction',
      'Executive function and self-regulation',
      'Adaptive behavior and daily living skills',
      'Sensory processing and regulation',
      'Academic skills (specify reading, writing, or math)'
    ]
  },
  {
    id: 'adhd',
    name: 'ADHD / Attention Difficulties',
    shortName: 'ADHD',
    ideaCategory: 'Other Health Impairment',
    legalFramework: 'both',
    description: 'Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects a person\'s ability to sustain attention, control impulses, and regulate activity level. ADHD has three presentations: predominantly inattentive, predominantly hyperactive-impulsive, and combined.',
    schoolImpact: 'Children with ADHD may have difficulty staying focused during lessons, following multi-step directions, completing assignments on time, staying organized, sitting still, waiting their turn, and controlling blurting or impulsive behavior. Their academic performance may not reflect their actual ability because attention and executive function challenges interfere with demonstrating what they know.',
    parentNotices: 'At home, you may notice your child loses things frequently, has trouble starting or finishing homework, seems to daydream or zone out, is easily distracted, has difficulty following through on chores, fidgets constantly, or acts without thinking about consequences.',
    subAreas: [
      'Sustained attention and task completion',
      'Organization and planning',
      'Impulse control and self-regulation',
      'Working memory',
      'Homework and independent work completion'
    ]
  },
  {
    id: 'dyslexia',
    name: 'Dyslexia / Reading Disability',
    shortName: 'Dyslexia',
    ideaCategory: 'Specific Learning Disability',
    legalFramework: 'both',
    description: 'Dyslexia is a specific learning disability that primarily affects reading. It involves difficulty with accurate and fluent word recognition, poor spelling, and poor decoding ability. Dyslexia is neurological in origin and is not related to intelligence — many people with dyslexia have average or above-average intellectual ability.',
    schoolImpact: 'Children with dyslexia may read slowly and inaccurately, struggle to sound out unfamiliar words, have difficulty with spelling, avoid reading aloud, and fall behind in any subject that relies heavily on reading. Comprehension may be affected not because the child cannot understand the material, but because the effort of decoding takes all their cognitive energy.',
    parentNotices: 'At home, you may notice your child avoids reading, guesses at words instead of sounding them out, confuses similar-looking words, has trouble rhyming, spells the same word differently each time, or takes a long time to complete reading homework compared to peers.',
    subAreas: [
      'Phonological awareness',
      'Phonics and decoding',
      'Reading fluency',
      'Reading comprehension',
      'Vocabulary development'
    ]
  },
  {
    id: 'dysgraphia',
    name: 'Dysgraphia / Writing Difficulties',
    shortName: 'Dysgraphia',
    ideaCategory: 'Specific Learning Disability',
    legalFramework: 'both',
    description: 'Dysgraphia is a specific learning disability that affects writing ability. It can involve difficulty with handwriting, spelling, organizing thoughts on paper, and the physical act of writing. Like dyslexia, dysgraphia is neurological and unrelated to intelligence.',
    schoolImpact: 'Children with dysgraphia may produce illegible handwriting, write very slowly, struggle to organize essays or paragraphs, have inconsistent spacing and letter sizing, grip the pencil awkwardly, experience hand pain or fatigue when writing, and avoid or resist writing tasks.',
    parentNotices: 'At home, you may notice your child avoids writing tasks, has messy or hard-to-read handwriting, complains that their hand hurts when writing, can tell you a story orally but cannot put it on paper, or has trouble taking notes.',
    subAreas: [
      'Handwriting legibility and formation',
      'Written expression and organization',
      'Spelling',
      'Writing fluency and stamina'
    ]
  },
  {
    id: 'dyscalculia',
    name: 'Dyscalculia / Math Difficulties',
    shortName: 'Dyscalculia',
    ideaCategory: 'Specific Learning Disability',
    legalFramework: 'both',
    description: 'Dyscalculia is a specific learning disability that affects a person\'s ability to understand and work with numbers and mathematical concepts. It is sometimes called "math dyslexia" and is neurological in origin.',
    schoolImpact: 'Children with dyscalculia may struggle with basic number sense, memorizing math facts, understanding place value, telling time, counting money, performing calculations, solving word problems, and understanding mathematical symbols and concepts.',
    parentNotices: 'At home, you may notice your child has trouble with basic counting, cannot memorize multiplication tables despite practice, has difficulty estimating quantities, struggles with time and money concepts, avoids games involving numbers, or counts on their fingers well past the age when peers have stopped.',
    subAreas: [
      'Number sense and computation',
      'Math fact fluency',
      'Problem solving',
      'Math reasoning and application'
    ]
  },
  {
    id: 'speech-language',
    name: 'Speech or Language Impairment',
    shortName: 'Speech / Language',
    ideaCategory: 'Speech or Language Impairment',
    legalFramework: 'both',
    description: 'Speech and language impairments encompass a range of communication disorders, including difficulties with articulation (producing speech sounds), expressive language (putting words and ideas together), receptive language (understanding spoken language), pragmatic language (social use of language), fluency (stuttering), and voice.',
    schoolImpact: 'Children with speech or language impairments may have difficulty being understood by peers and teachers, following classroom directions, participating in discussions, understanding what they read, expressing their ideas in writing, and navigating social conversations.',
    parentNotices: 'At home, you may notice your child is hard to understand when speaking, uses short or simple sentences compared to peers, has trouble following directions, struggles to tell stories or explain events in order, has difficulty with reading and vocabulary, or becomes frustrated when trying to communicate.',
    subAreas: [
      'Articulation and phonology',
      'Expressive language',
      'Receptive language',
      'Pragmatic and social language',
      'Fluency (stuttering)',
      'Voice'
    ]
  },
  {
    id: 'emotional-behavioral',
    name: 'Emotional or Behavioral Disability',
    shortName: 'Emotional / Behavioral',
    ideaCategory: 'Emotional Disturbance',
    legalFramework: 'both',
    description: 'Emotional or behavioral disabilities (referred to as "Emotional Disturbance" under IDEA) include conditions that significantly affect a child\'s ability to learn, build relationships, or regulate emotions and behavior over an extended period of time. This category encompasses anxiety disorders, depression, bipolar disorder, conduct disorders, and other conditions affecting emotional or behavioral functioning.',
    schoolImpact: 'Children with emotional or behavioral disabilities may have difficulty managing frustration, interacting appropriately with peers and adults, following rules, staying engaged in academics, attending school regularly, and handling conflict. Their behavior may be misunderstood as defiance when it is actually a symptom of their condition.',
    parentNotices: 'At home, you may notice your child has frequent emotional outbursts, persistent sadness or worry, difficulty maintaining friendships, resistance to going to school, physical complaints related to stress, or reactions that seem disproportionate to the situation.',
    subAreas: [
      'Emotional regulation',
      'Social skills and peer interaction',
      'Conflict resolution',
      'Self-advocacy',
      'School attendance and engagement'
    ]
  },
  {
    id: 'intellectual',
    name: 'Intellectual Disability',
    shortName: 'Intellectual Disability',
    ideaCategory: 'Intellectual Disability',
    legalFramework: 'both',
    description: 'Intellectual disability involves significant limitations in both intellectual functioning (reasoning, learning, problem-solving) and adaptive behavior (everyday social and practical skills). It originates before age 22 and ranges from mild to profound.',
    schoolImpact: 'Children with intellectual disabilities typically learn at a slower pace than peers, need more repetition and practice to master new skills, may require modified academic content, and benefit from instruction focused on functional and life skills alongside academic goals.',
    parentNotices: 'At home, you may notice your child learns new things more slowly, has difficulty with abstract concepts, needs more help with daily routines than same-age peers, has trouble with self-care tasks, or struggles with problem-solving in everyday situations.',
    subAreas: [
      'Functional academic skills (reading, math, writing)',
      'Functional communication',
      'Adaptive behavior and self-care',
      'Vocational and transition skills',
      'Self-determination'
    ]
  },
  {
    id: 'other-health',
    name: 'Other Health Impairment / Chronic Illness',
    shortName: 'Other Health Impairment',
    ideaCategory: 'Other Health Impairment',
    legalFramework: 'both',
    description: 'Other Health Impairment (OHI) is an IDEA category that covers conditions resulting in limited strength, vitality, or alertness — including heightened alertness to environmental stimuli — that adversely affects educational performance. This includes chronic or acute health conditions such as ADHD, epilepsy, heart conditions, sickle cell anemia, diabetes, cancer, Tourette syndrome, and others.',
    schoolImpact: 'Children with other health impairments may miss school frequently due to medical appointments or illness, fatigue easily, have difficulty sustaining attention or energy throughout the day, need medication management during school hours, or require emergency health plans.',
    parentNotices: 'At home, you may notice your child tires more easily than peers, has frequent medical appointments, needs ongoing medication or treatment, has variable energy levels that affect homework completion, or has anxiety about health-related situations at school.',
    subAreas: [
      'Fatigue management and stamina',
      'Attendance and make-up systems',
      'Medical access and self-management',
      'Academic continuity during health episodes'
    ]
  },
  {
    id: 'hearing',
    name: 'Hearing Impairment or Deafness',
    shortName: 'Hearing Impairment',
    ideaCategory: 'Deafness / Hearing Impairment',
    legalFramework: 'both',
    description: 'Hearing impairment encompasses a range of hearing loss from mild to profound. "Deafness" under IDEA refers to hearing loss so severe that the child cannot process language through hearing, with or without amplification. "Hearing impairment" refers to a hearing loss that adversely affects educational performance but is not as severe as deafness.',
    schoolImpact: 'Children with hearing impairments may struggle to follow spoken instruction, participate in group discussions, hear in noisy environments, develop spoken language skills, and access auditory information. They may need sign language, FM systems, captioning, or other assistive technology.',
    parentNotices: 'At home, you may notice your child asks "what?" frequently, turns up the volume on devices, does not respond when called from another room, has difficulty following conversations in noisy settings, or has delayed speech development.',
    subAreas: [
      'Listening and comprehension with amplification',
      'Speech and oral language development',
      'Self-advocacy for hearing access',
      'Auditory skill building'
    ]
  },
  {
    id: 'visual',
    name: 'Visual Impairment or Blindness',
    shortName: 'Visual Impairment',
    ideaCategory: 'Visual Impairment Including Blindness',
    legalFramework: 'both',
    description: 'Visual impairment includes a wide range of conditions from partial sight to total blindness. Under IDEA, a visual impairment is one that, even with correction, adversely affects educational performance. This includes both partial sight and blindness.',
    schoolImpact: 'Children with visual impairments may have difficulty reading standard print materials, navigating the school building safely, participating in activities that rely on vision, seeing the board or projected material, and using standard computers or devices without adaptive technology.',
    parentNotices: 'At home, you may notice your child holds books very close to their face, squints or tilts their head to see, has difficulty recognizing people at a distance, bumps into objects, or avoids activities that require detailed visual work.',
    subAreas: [
      'Orientation and mobility',
      'Braille literacy',
      'Access technology use',
      'Visual efficiency skills'
    ]
  },
  {
    id: 'tbi',
    name: 'Traumatic Brain Injury',
    shortName: 'TBI',
    ideaCategory: 'Traumatic Brain Injury',
    legalFramework: 'both',
    description: 'Traumatic Brain Injury (TBI) is an acquired injury to the brain caused by external physical force (such as a car accident, fall, or sports injury) that results in total or partial functional disability or psychosocial impairment. The effects of TBI vary greatly depending on the location and severity of the injury.',
    schoolImpact: 'Children with TBI may experience difficulties with memory, attention, concentration, processing speed, reasoning, planning, organization, communication, emotional regulation, and social behavior. These challenges may fluctuate and can change over time as the brain heals.',
    parentNotices: 'At home, you may notice your child has trouble remembering things they used to know, gets frustrated more easily than before the injury, has difficulty concentrating, seems different in personality, tires quickly from mental effort, or has headaches.',
    subAreas: [
      'Memory and recall strategies',
      'Attention and cognitive stamina',
      'Communication and language',
      'Behavioral and emotional regulation'
    ]
  },
  {
    id: 'physical',
    name: 'Physical or Orthopedic Impairment',
    shortName: 'Physical / Orthopedic',
    ideaCategory: 'Orthopedic Impairment',
    legalFramework: 'both',
    description: 'Orthopedic impairments include conditions that affect a child\'s body — bones, joints, muscles, or limbs — to the degree that educational performance is adversely affected. This includes conditions caused by congenital anomalies (such as clubfoot or missing limbs), disease (such as muscular dystrophy or bone tuberculosis), and other causes (such as cerebral palsy, amputations, or fractures).',
    schoolImpact: 'Children with physical impairments may need accessible facilities, adaptive equipment, assistance with mobility, modified physical education, help with fine motor tasks like writing, and accommodations for fatigue or pain management.',
    parentNotices: 'At home, you may notice your child has difficulty with physical tasks peers handle easily, tires from physical activity, needs adaptive equipment, has trouble with handwriting or using utensils, or requires extra time for self-care activities.',
    subAreas: [
      'Fine motor and written output',
      'Assistive technology use',
      'Independent mobility and access',
      'Self-care and independence'
    ]
  },
  {
    id: 'developmental-delay',
    name: 'Developmental Delay (Ages 3-9)',
    shortName: 'Developmental Delay',
    ideaCategory: 'Developmental Delay',
    legalFramework: 'idea',
    description: 'Developmental delay is a category available under IDEA for children ages 3 through 9 (or a subset of that age range, depending on the state). It applies when a child is experiencing delays in one or more of these areas: physical development, cognitive development, communication, social or emotional development, or adaptive behavior. This category allows young children to receive special education services without requiring a specific disability diagnosis.',
    schoolImpact: 'Children with developmental delays may not be meeting age-appropriate milestones in learning, communication, motor skills, social interaction, or self-help skills. They may need early intervention services and specially designed instruction to close developmental gaps.',
    parentNotices: 'At home, you may notice your child is not reaching milestones at the same time as peers — such as speaking, walking, playing cooperatively, following directions, or learning pre-academic skills like letters and numbers.',
    subAreas: [
      'Early literacy skills',
      'Early numeracy skills',
      'Communication development',
      'Social-emotional development',
      'Fine and gross motor skills'
    ]
  },

  /* ── 504-Only Conditions ──────────────── */
  {
    id: 'anxiety',
    name: 'Anxiety Disorder',
    shortName: 'Anxiety',
    ideaCategory: null,
    legalFramework: '504',
    description: 'Anxiety disorders include generalized anxiety, social anxiety, separation anxiety, panic disorder, and specific phobias. These conditions involve persistent, excessive worry or fear that is disproportionate to the actual situation and interferes with daily functioning.',
    schoolImpact: 'Children with anxiety disorders may have difficulty attending school, participating in class, taking tests, working in groups, separating from caregivers, transitioning between activities, or performing in front of others. Physical symptoms like stomachaches and headaches are common.',
    parentNotices: 'At home, you may notice your child worries excessively about school performance, avoids social situations, has trouble sleeping, complains of physical symptoms before school, seeks constant reassurance, or resists new situations.',
    subAreas: ['Emotional regulation', 'School attendance and engagement', 'Social skills and peer interaction']
  },
  {
    id: 'depression',
    name: 'Depression',
    shortName: 'Depression',
    ideaCategory: null,
    legalFramework: '504',
    description: 'Depression in children and adolescents is characterized by persistent sadness, loss of interest in activities, changes in sleep and appetite, difficulty concentrating, feelings of worthlessness, and in some cases, thoughts of self-harm.',
    schoolImpact: 'Children with depression may have difficulty concentrating, completing assignments, maintaining motivation, attending school, interacting with peers, and participating in activities they used to enjoy. Academic performance often declines.',
    parentNotices: 'At home, you may notice your child seems persistently sad or irritable, withdraws from friends and activities, has changes in sleep or eating patterns, expresses hopelessness, or loses interest in things they used to enjoy.',
    subAreas: ['Emotional regulation', 'School attendance and engagement']
  },
  {
    id: 'diabetes',
    name: 'Type 1 or Type 2 Diabetes',
    shortName: 'Diabetes',
    ideaCategory: null,
    legalFramework: '504',
    description: 'Diabetes is a chronic health condition that affects how the body processes blood sugar (glucose). Type 1 diabetes requires insulin therapy. Type 2 diabetes may be managed with medication, diet, and exercise. Both types require ongoing monitoring and management throughout the school day.',
    schoolImpact: 'Children with diabetes may need to check blood sugar during class, take insulin, eat snacks at specific times, have unrestricted access to water and the restroom, leave class for medical needs, and have accommodations during testing when blood sugar is high or low.',
    parentNotices: 'At home, you may notice your child needs regular blood sugar monitoring, has mood or energy changes related to blood sugar levels, and requires careful meal and activity planning.',
    subAreas: ['Medical access and self-management', 'Fatigue management and stamina', 'Attendance and make-up systems']
  },
  {
    id: 'epilepsy',
    name: 'Epilepsy / Seizure Disorder',
    shortName: 'Epilepsy',
    ideaCategory: null,
    legalFramework: '504',
    description: 'Epilepsy is a neurological condition characterized by recurrent seizures. Seizures can range from brief staring spells (absence seizures) to full-body convulsions. Medication can control seizures in many cases but may have side effects that affect learning.',
    schoolImpact: 'Children with epilepsy may miss class time due to seizures or recovery periods, have difficulty concentrating due to medication side effects, experience memory problems, need emergency seizure plans at school, and may have restrictions on certain physical activities.',
    parentNotices: 'At home, you may notice your child has episodes of staring blankly, brief periods of unresponsiveness, fatigue after seizures, or side effects from seizure medication such as drowsiness or difficulty focusing.',
    subAreas: ['Medical access and self-management', 'Fatigue management and stamina', 'Academic continuity during health episodes']
  },
  {
    id: 'asthma',
    name: 'Asthma',
    shortName: 'Asthma',
    ideaCategory: null,
    legalFramework: '504',
    description: 'Asthma is a chronic respiratory condition that causes inflammation and narrowing of the airways, resulting in difficulty breathing. Triggers can include exercise, allergens, weather changes, and respiratory infections.',
    schoolImpact: 'Children with asthma may need access to an inhaler at all times, modifications to physical education, accommodations for environmental triggers, permission to leave class when symptomatic, and make-up work policies for absences related to asthma episodes.',
    parentNotices: 'At home, you may notice your child coughs frequently, has difficulty breathing during physical activity, wheezes, or has episodes triggered by weather, allergies, or illness.',
    subAreas: ['Medical access and self-management', 'Fatigue management and stamina']
  },
  {
    id: 'cancer',
    name: 'Cancer (In Treatment or Recovery)',
    shortName: 'Cancer',
    ideaCategory: null,
    legalFramework: '504',
    description: 'Children undergoing cancer treatment or in recovery may experience significant physical, cognitive, and emotional effects that impact their ability to participate fully in school. Treatment can include surgery, chemotherapy, radiation, and extended hospital stays.',
    schoolImpact: 'Children with cancer may miss extended periods of school, have immune system vulnerabilities requiring modified attendance, experience cognitive changes from treatment (sometimes called "chemo brain"), fatigue easily, and need emotional support for the stress of their diagnosis.',
    parentNotices: 'At home, you may notice your child has significant fatigue, memory or concentration changes during or after treatment, anxiety about school return, immune system concerns, and physical limitations.',
    subAreas: ['Academic continuity during health episodes', 'Attendance and make-up systems', 'Fatigue management and stamina']
  },
  {
    id: 'tourette',
    name: 'Tourette Syndrome',
    shortName: 'Tourette Syndrome',
    ideaCategory: null,
    legalFramework: '504',
    description: 'Tourette syndrome is a neurological condition characterized by repetitive, involuntary movements and vocalizations called tics. Tics can be simple (eye blinking, throat clearing) or complex (repeating words, touching objects). Many people with Tourette syndrome also have co-occurring ADHD or OCD.',
    schoolImpact: 'Children with Tourette syndrome may be distracted by their own tics, need breaks when tics are severe, face social challenges due to peer reactions, have difficulty with timed tests, and need understanding that tics are involuntary and not behavioral choices.',
    parentNotices: 'At home, you may notice your child has involuntary movements or sounds that wax and wane in intensity, increase with stress or excitement, and may be suppressed temporarily but eventually come out.',
    subAreas: ['Emotional regulation', 'Social skills and peer interaction', 'Medical access and self-management']
  },
  {
    id: 'celiac',
    name: 'Celiac Disease',
    shortName: 'Celiac Disease',
    ideaCategory: null,
    legalFramework: '504',
    description: 'Celiac disease is an autoimmune condition where ingesting gluten damages the small intestine. It requires strict lifelong avoidance of gluten-containing foods. Even small amounts of gluten can cause significant symptoms.',
    schoolImpact: 'Children with celiac disease need accommodations for meals and snacks at school, classroom food activities, field trips involving food, and protection from accidental gluten exposure. They may also experience fatigue, brain fog, and abdominal symptoms if exposed.',
    parentNotices: 'At home, you may notice your child has digestive symptoms, fatigue, or mood changes when accidentally exposed to gluten, and requires careful attention to all food at school.',
    subAreas: ['Medical access and self-management']
  },
  {
    id: 'concussion',
    name: 'Concussion / Post-Concussion Syndrome',
    shortName: 'Concussion',
    ideaCategory: null,
    legalFramework: '504',
    description: 'A concussion is a mild traumatic brain injury caused by a bump, blow, or jolt to the head. Post-concussion syndrome occurs when symptoms persist for weeks, months, or longer after the initial injury. Recovery timelines vary significantly.',
    schoolImpact: 'Children recovering from concussion may need reduced screen time, limited reading, shortened school days, rest breaks, reduced homework, quiet testing environments, extended deadlines, and gradual return to physical activity and full academic load.',
    parentNotices: 'At home, you may notice your child has headaches, sensitivity to light or noise, difficulty concentrating, memory problems, fatigue, irritability, or sleep changes following a head injury.',
    subAreas: ['Fatigue management and stamina', 'Academic continuity during health episodes', 'Attendance and make-up systems']
  }
];
