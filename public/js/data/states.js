/* ═══════════════════════════════════════════
   PlanVocate — US State Data
   Recording consent, evaluation timelines,
   parent training centers, and complaint contacts
   ═══════════════════════════════════════════ */

var EduStates = [
  {
    abbreviation: 'AL',
    name: 'Alabama',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording a conversation.', statute: 'Ala. Code § 13A-11-31' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Special Education Action Committee (SEAC)', phone: '800-222-7322' },
    stateDOE: { name: 'Alabama State Department of Education, Special Education Services', phone: '334-694-4782' },
    complaintContact: { description: 'File a complaint with Alabama State Department of Education within one year of the alleged violation.' }
  },
  {
    abbreviation: 'AK',
    name: 'Alaska',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Alaska Stat. § 42.20.310' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'PAVE (Parents as Allies and Voices for Education)', phone: '907-272-7678' },
    stateDOE: { name: 'Alaska Department of Education, Special Education', phone: '907-465-2972' },
    complaintContact: { description: 'File a complaint with Alaska Dept. of Education & Early Development within one year.' }
  },
  {
    abbreviation: 'AZ',
    name: 'Arizona',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Ariz. Rev. Stat. § 13-3005' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Raising Special Kids', phone: '800-237-3007' },
    stateDOE: { name: 'Arizona Department of Education, Exceptional Student Services', phone: '602-542-4013' },
    complaintContact: { description: 'File a complaint with Arizona Department of Education within one year.' }
  },
  {
    abbreviation: 'AR',
    name: 'Arkansas',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Ark. Code § 5-60-120' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'FOCUS', phone: '501-975-2224' },
    stateDOE: { name: 'Arkansas Department of Education, Special Education', phone: '501-682-4225' },
    complaintContact: { description: 'File a complaint with Arkansas Department of Education within one year.' }
  },
  {
    abbreviation: 'CA',
    name: 'California',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording a conversation.', statute: 'Cal. Penal Code § 632' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: ['Extended school year services broadly available', 'State-funded dispute resolution options', 'Independent educational evaluation rights expanded'],
    pti: { name: 'Matrix Parent Network and Resource Center', phone: '800-578-2592' },
    stateDOE: { name: 'California Department of Education, Special Education Division', phone: '916-445-4613' },
    complaintContact: { description: 'File a complaint with California Department of Education within one year.' }
  },
  {
    abbreviation: 'CO',
    name: 'Colorado',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Colo. Rev. Stat. § 18-9-303' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'PEAK Parent Center', phone: '800-284-0251' },
    stateDOE: { name: 'Colorado Department of Education, Special Education', phone: '303-866-6694' },
    complaintContact: { description: 'File a complaint with Colorado Department of Education within one year.' }
  },
  {
    abbreviation: 'CT',
    name: 'Connecticut',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: 'Conn. Gen. Stat. § 52-570d' },
    evaluationTimeline: '45 school days from referral',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (45 school days)', 'State advisory council on special education'],
    pti: { name: 'CT Parent Advocacy Center (CPAC)', phone: '800-445-2722' },
    stateDOE: { name: 'Connecticut State Department of Education, Bureau of Special Education', phone: '860-713-6912' },
    complaintContact: { description: 'File a complaint with Connecticut State Department of Education within one year.' }
  },
  {
    abbreviation: 'DE',
    name: 'Delaware',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: 'Del. Code tit. 11, § 2402' },
    evaluationTimeline: '45 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (45 school days)'],
    pti: { name: 'Parent Information Center of Delaware (PIC)', phone: '302-999-7394' },
    stateDOE: { name: 'Delaware Department of Education, Exceptional Children and Early Childhood', phone: '302-735-4210' },
    complaintContact: { description: 'File a complaint with Delaware Department of Education within one year.' }
  },
  {
    abbreviation: 'DC',
    name: 'District of Columbia',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'D.C. Code § 23-542' },
    evaluationTimeline: '120 calendar days from referral (60 days for consent + 60 days for evaluation)',
    stateLawsExceedingFederal: ['Attorney fee provisions for parents who prevail'],
    pti: { name: 'Advocates for Justice and Education (AJE)', phone: '202-678-8060' },
    stateDOE: { name: 'DC Office of the State Superintendent of Education (OSSE)', phone: '202-727-6436' },
    complaintContact: { description: 'File a complaint with OSSE within one year.' }
  },
  {
    abbreviation: 'FL',
    name: 'Florida',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: 'Fla. Stat. § 934.03' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: ['Matrix of services for exceptional students', 'State-mandated progress monitoring'],
    pti: { name: 'Family Network on Disabilities', phone: '800-825-5736' },
    stateDOE: { name: 'Florida Department of Education, Bureau of Exceptional Education', phone: '850-245-0475' },
    complaintContact: { description: 'File a complaint with Florida Department of Education within one year.' }
  },
  {
    abbreviation: 'GA',
    name: 'Georgia',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Ga. Code § 16-11-66' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Parent to Parent of Georgia', phone: '800-229-2038' },
    stateDOE: { name: 'Georgia Department of Education, Division for Special Education', phone: '404-656-3963' },
    complaintContact: { description: 'File a complaint with Georgia Department of Education within one year.' }
  },
  {
    abbreviation: 'HI',
    name: 'Hawaii',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Haw. Rev. Stat. § 803-42' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'AWARE (Assistance with Accessing Resources in Education)', phone: '808-536-9684' },
    stateDOE: { name: 'Hawaii Department of Education, Special Education Section', phone: '808-307-3600' },
    complaintContact: { description: 'File a complaint with Hawaii Department of Education within one year.' }
  },
  {
    abbreviation: 'ID',
    name: 'Idaho',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Idaho Code § 18-6702' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Idaho Parents Unlimited (IPUL)', phone: '800-242-4785' },
    stateDOE: { name: 'Idaho State Department of Education, Special Education', phone: '208-332-6910' },
    complaintContact: { description: 'File a complaint with Idaho State Department of Education within one year.' }
  },
  {
    abbreviation: 'IL',
    name: 'Illinois',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: '720 ILCS 5/14-2' },
    evaluationTimeline: '60 school days from consent',
    stateLawsExceedingFederal: ['Extended timeline uses school days rather than calendar days', 'State-funded parent training'],
    pti: { name: 'Family Matters', phone: '866-436-7842' },
    stateDOE: { name: 'Illinois State Board of Education, Special Education Services', phone: '217-782-5589' },
    complaintContact: { description: 'File a complaint with Illinois State Board of Education within one year.' }
  },
  {
    abbreviation: 'IN',
    name: 'Indiana',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Ind. Code § 35-33.5-5-5' },
    evaluationTimeline: '50 instructional days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (50 instructional days)'],
    pti: { name: 'IN*SOURCE (Indiana Resource Center for Families with Special Needs)', phone: '800-332-4433' },
    stateDOE: { name: 'Indiana Department of Education, Office of Special Education', phone: '317-232-0570' },
    complaintContact: { description: 'File a complaint with Indiana Department of Education within one year.' }
  },
  {
    abbreviation: 'IA',
    name: 'Iowa',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Iowa Code § 808B.2' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'ASK Resource Center', phone: '800-450-8667' },
    stateDOE: { name: 'Iowa Department of Education, Bureau of Learner Strategies and Supports', phone: '515-281-5294' },
    complaintContact: { description: 'File a complaint with Iowa Department of Education within one year.' }
  },
  {
    abbreviation: 'KS',
    name: 'Kansas',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Kan. Stat. § 21-6101' },
    evaluationTimeline: '60 school days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Families Together, Inc.', phone: '888-815-6364' },
    stateDOE: { name: 'Kansas State Department of Education, Early Childhood, Special Education', phone: '785-296-3201' },
    complaintContact: { description: 'File a complaint with Kansas State Department of Education within one year.' }
  },
  {
    abbreviation: 'KY',
    name: 'Kentucky',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Ky. Rev. Stat. § 526.010' },
    evaluationTimeline: '60 school days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Kentucky SPIN (Special Parent Involvement Network)', phone: '800-525-7746' },
    stateDOE: { name: 'Kentucky Department of Education, Division of Learning Services', phone: '502-564-4970' },
    complaintContact: { description: 'File a complaint with Kentucky Department of Education within one year.' }
  },
  {
    abbreviation: 'LA',
    name: 'Louisiana',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'La. Rev. Stat. § 15:1303' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'FHF of Louisiana (Families Helping Families)', phone: '225-216-7474' },
    stateDOE: { name: 'Louisiana Department of Education, Division of Special Populations', phone: '225-342-3633' },
    complaintContact: { description: 'File a complaint with Louisiana Department of Education within one year.' }
  },
  {
    abbreviation: 'ME',
    name: 'Maine',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Me. Rev. Stat. tit. 15, § 709' },
    evaluationTimeline: '45 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (45 school days)'],
    pti: { name: 'Maine Parent Federation', phone: '800-870-7746' },
    stateDOE: { name: 'Maine Department of Education, Office of Special Services', phone: '207-624-6650' },
    complaintContact: { description: 'File a complaint with Maine Department of Education within one year.' }
  },
  {
    abbreviation: 'MD',
    name: 'Maryland',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: 'Md. Code, Cts. & Jud. Proc. § 10-402' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: ['State-funded special education mediation'],
    pti: { name: 'Parents\' Place of Maryland (PPMD)', phone: '410-768-9100' },
    stateDOE: { name: 'Maryland State Department of Education, Division of Special Education', phone: '410-767-0238' },
    complaintContact: { description: 'File a complaint with Maryland State Department of Education within one year.' }
  },
  {
    abbreviation: 'MA',
    name: 'Massachusetts',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: 'Mass. Gen. Laws ch. 272, § 99' },
    evaluationTimeline: '30 school days for evaluation; 45 school days for IEP development after consent',
    stateLawsExceedingFederal: ['Shortened evaluation timelines', 'State advisory commission on special education', 'Additional procedural safeguards'],
    pti: { name: 'Federation for Children with Special Needs', phone: '800-331-0688' },
    stateDOE: { name: 'Massachusetts Department of Elementary and Secondary Education, Special Education', phone: '781-338-3375' },
    complaintContact: { description: 'File a complaint with Massachusetts DESE within one year.' }
  },
  {
    abbreviation: 'MI',
    name: 'Michigan',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Mich. Comp. Laws § 750.539c' },
    evaluationTimeline: '30 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (30 school days)', 'Michigan Administrative Rules for Special Education (MARSE) provide additional protections'],
    pti: { name: 'Michigan Alliance for Families', phone: '800-552-4821' },
    stateDOE: { name: 'Michigan Department of Education, Office of Special Education', phone: '517-373-0923' },
    complaintContact: { description: 'File a complaint with Michigan Department of Education within one year.' }
  },
  {
    abbreviation: 'MN',
    name: 'Minnesota',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Minn. Stat. § 626A.02' },
    evaluationTimeline: '30 school days for evaluation team report',
    stateLawsExceedingFederal: ['Shortened evaluation timeline', 'Total Special Education System (TSES)'],
    pti: { name: 'PACER Center', phone: '800-537-2237' },
    stateDOE: { name: 'Minnesota Department of Education, Division of Special Education', phone: '651-582-8200' },
    complaintContact: { description: 'File a complaint with Minnesota Department of Education within one year.' }
  },
  {
    abbreviation: 'MS',
    name: 'Mississippi',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Miss. Code § 41-29-531' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'EMPOWER Community Resource Center', phone: '800-898-0712' },
    stateDOE: { name: 'Mississippi Department of Education, Office of Special Education', phone: '601-359-3498' },
    complaintContact: { description: 'File a complaint with Mississippi Department of Education within one year.' }
  },
  {
    abbreviation: 'MO',
    name: 'Missouri',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Mo. Rev. Stat. § 542.402' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Missouri Parents Act (MPACT)', phone: '800-743-7634' },
    stateDOE: { name: 'Missouri Department of Elementary and Secondary Education, Special Education', phone: '573-751-5739' },
    complaintContact: { description: 'File a complaint with Missouri DESE within one year.' }
  },
  {
    abbreviation: 'MT',
    name: 'Montana',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: 'Mont. Code § 45-8-213' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Parents Let\'s Unite for Kids (PLUK)', phone: '800-222-7585' },
    stateDOE: { name: 'Montana Office of Public Instruction, Special Education', phone: '406-444-5661' },
    complaintContact: { description: 'File a complaint with Montana Office of Public Instruction within one year.' }
  },
  {
    abbreviation: 'NE',
    name: 'Nebraska',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Neb. Rev. Stat. § 86-290' },
    evaluationTimeline: '45 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (45 school days)'],
    pti: { name: 'PTI Nebraska', phone: '800-284-8520' },
    stateDOE: { name: 'Nebraska Department of Education, Special Education Office', phone: '402-471-2471' },
    complaintContact: { description: 'File a complaint with Nebraska Department of Education within one year.' }
  },
  {
    abbreviation: 'NV',
    name: 'Nevada',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Nev. Rev. Stat. § 200.620' },
    evaluationTimeline: '45 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (45 school days)'],
    pti: { name: 'Nevada PEP (Parents Encouraging Parents)', phone: '800-216-5188' },
    stateDOE: { name: 'Nevada Department of Education, Office of Inclusive Education', phone: '775-687-9171' },
    complaintContact: { description: 'File a complaint with Nevada Department of Education within one year.' }
  },
  {
    abbreviation: 'NH',
    name: 'New Hampshire',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: 'N.H. Rev. Stat. § 570-A:2' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Parent Information Center (PIC)', phone: '800-947-7005' },
    stateDOE: { name: 'New Hampshire Department of Education, Bureau of Special Education', phone: '603-271-3741' },
    complaintContact: { description: 'File a complaint with New Hampshire Department of Education within one year.' }
  },
  {
    abbreviation: 'NJ',
    name: 'New Jersey',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'N.J. Stat. § 2A:156A-4' },
    evaluationTimeline: '90 calendar days from referral',
    stateLawsExceedingFederal: ['90-day timeline from referral', 'Mandatory structured learning experiences'],
    pti: { name: 'Statewide Parent Advocacy Network (SPAN)', phone: '800-654-7726' },
    stateDOE: { name: 'New Jersey Department of Education, Office of Special Education', phone: '609-292-0147' },
    complaintContact: { description: 'File a complaint with New Jersey Department of Education within one year.' }
  },
  {
    abbreviation: 'NM',
    name: 'New Mexico',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'N.M. Stat. § 30-12-1' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Parents Reaching Out (PRO)', phone: '800-524-5176' },
    stateDOE: { name: 'New Mexico Public Education Department, Special Education Bureau', phone: '505-827-1457' },
    complaintContact: { description: 'File a complaint with New Mexico Public Education Department within one year.' }
  },
  {
    abbreviation: 'NY',
    name: 'New York',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'N.Y. Penal Law § 250.00' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: ['Impartial hearing officer system', 'State-funded mediation services'],
    pti: { name: 'Sinergia/Metropolitan Parent Center', phone: '866-867-9665' },
    stateDOE: { name: 'New York State Education Department, Office of Special Education', phone: '518-473-2878' },
    complaintContact: { description: 'File a complaint with New York State Education Department within one year.' }
  },
  {
    abbreviation: 'NC',
    name: 'North Carolina',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'N.C. Gen. Stat. § 15A-287' },
    evaluationTimeline: '90 calendar days from referral',
    stateLawsExceedingFederal: ['90-day timeline from referral'],
    pti: { name: 'Exceptional Children\'s Assistance Center (ECAC)', phone: '800-962-6817' },
    stateDOE: { name: 'North Carolina Department of Public Instruction, Exceptional Children Division', phone: '919-807-3969' },
    complaintContact: { description: 'File a complaint with NC Department of Public Instruction within one year.' }
  },
  {
    abbreviation: 'ND',
    name: 'North Dakota',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'N.D. Cent. Code § 12.1-15-02' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Pathfinder Family Center', phone: '800-245-5840' },
    stateDOE: { name: 'North Dakota Department of Public Instruction, Special Education', phone: '701-328-2277' },
    complaintContact: { description: 'File a complaint with North Dakota Department of Public Instruction within one year.' }
  },
  {
    abbreviation: 'OH',
    name: 'Ohio',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Ohio Rev. Code § 2933.52' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: ['Operating Standards for Ohio Educational Agencies provide additional protections'],
    pti: { name: 'OCECD (Ohio Coalition for the Education of Children with Disabilities)', phone: '844-382-5452' },
    stateDOE: { name: 'Ohio Department of Education, Office for Exceptional Children', phone: '614-466-2650' },
    complaintContact: { description: 'File a complaint with Ohio Department of Education within one year.' }
  },
  {
    abbreviation: 'OK',
    name: 'Oklahoma',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Okla. Stat. tit. 13, § 176.4' },
    evaluationTimeline: '45 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (45 school days)'],
    pti: { name: 'Oklahoma Parents Center', phone: '877-553-4332' },
    stateDOE: { name: 'Oklahoma State Department of Education, Special Education Services', phone: '405-521-3351' },
    complaintContact: { description: 'File a complaint with Oklahoma State Department of Education within one year.' }
  },
  {
    abbreviation: 'OR',
    name: 'Oregon',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Or. Rev. Stat. § 165.540' },
    evaluationTimeline: '60 school days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Oregon Family to Family Health Information Center', phone: '855-323-6744' },
    stateDOE: { name: 'Oregon Department of Education, Office of Enhancing Student Opportunities', phone: '503-947-5600' },
    complaintContact: { description: 'File a complaint with Oregon Department of Education within one year.' }
  },
  {
    abbreviation: 'PA',
    name: 'Pennsylvania',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: '18 Pa. Cons. Stat. § 5703' },
    evaluationTimeline: '60 calendar days from consent (exclusive of summer)',
    stateLawsExceedingFederal: ['Summer exclusion for evaluation timeline', 'State-specific IEP content requirements'],
    pti: { name: 'Mentor Parent Program (Center for Disability Information)', phone: '800-palegal' },
    stateDOE: { name: 'Pennsylvania Department of Education, Bureau of Special Education', phone: '717-783-6913' },
    complaintContact: { description: 'File a complaint with Pennsylvania Department of Education within one year.' }
  },
  {
    abbreviation: 'RI',
    name: 'Rhode Island',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'R.I. Gen. Laws § 11-35-21' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Rhode Island Parent Information Network (RIPIN)', phone: '800-464-3399' },
    stateDOE: { name: 'Rhode Island Department of Education, Office of Student, Community, & Academic Supports', phone: '401-222-4600' },
    complaintContact: { description: 'File a complaint with Rhode Island Department of Education within one year.' }
  },
  {
    abbreviation: 'SC',
    name: 'South Carolina',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'S.C. Code § 17-30-30' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Family Connection of South Carolina', phone: '800-578-8750' },
    stateDOE: { name: 'South Carolina Department of Education, Office of Special Education Services', phone: '803-734-8806' },
    complaintContact: { description: 'File a complaint with South Carolina Department of Education within one year.' }
  },
  {
    abbreviation: 'SD',
    name: 'South Dakota',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'S.D. Codified Laws § 23A-35A-20' },
    evaluationTimeline: '25 business days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (25 business days)'],
    pti: { name: 'South Dakota Parent Connection', phone: '800-640-4553' },
    stateDOE: { name: 'South Dakota Department of Education, Special Education Programs', phone: '605-773-3678' },
    complaintContact: { description: 'File a complaint with South Dakota Department of Education within one year.' }
  },
  {
    abbreviation: 'TN',
    name: 'Tennessee',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Tenn. Code § 39-13-601' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Support & Training for Exceptional Parents (STEP)', phone: '800-280-7837' },
    stateDOE: { name: 'Tennessee Department of Education, Division of Special Populations', phone: '615-741-2851' },
    complaintContact: { description: 'File a complaint with Tennessee Department of Education within one year.' }
  },
  {
    abbreviation: 'TX',
    name: 'Texas',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Tex. Penal Code § 16.02' },
    evaluationTimeline: '45 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (45 school days)', 'Audio recording rights for IEP meetings (24-hour notice required)', 'Supplemental special education services (Senate Bill 2102)'],
    pti: { name: 'Partners Resource Network', phone: '800-866-4726' },
    stateDOE: { name: 'Texas Education Agency, Special Education Division', phone: '512-463-9414' },
    complaintContact: { description: 'File a complaint with Texas Education Agency within one year.' }
  },
  {
    abbreviation: 'UT',
    name: 'Utah',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Utah Code § 77-23a-4' },
    evaluationTimeline: '45 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (45 school days)'],
    pti: { name: 'Utah Parent Center', phone: '800-468-1160' },
    stateDOE: { name: 'Utah State Board of Education, Special Education', phone: '801-538-7587' },
    complaintContact: { description: 'File a complaint with Utah State Board of Education within one year.' }
  },
  {
    abbreviation: 'VT',
    name: 'Vermont',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Vt. Stat. tit. 13, § 1051' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: ['Vermont Special Education Rules provide additional protections'],
    pti: { name: 'Vermont Family Network', phone: '800-800-4005' },
    stateDOE: { name: 'Vermont Agency of Education, Special Education', phone: '802-828-1256' },
    complaintContact: { description: 'File a complaint with Vermont Agency of Education within one year.' }
  },
  {
    abbreviation: 'VA',
    name: 'Virginia',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Va. Code § 19.2-62' },
    evaluationTimeline: '65 business days from referral',
    stateLawsExceedingFederal: ['65 business day timeline from referral'],
    pti: { name: 'Parent Educational Advocacy Training Center (PEATC)', phone: '800-869-6782' },
    stateDOE: { name: 'Virginia Department of Education, Office of Special Education', phone: '804-225-2075' },
    complaintContact: { description: 'File a complaint with Virginia Department of Education within one year.' }
  },
  {
    abbreviation: 'WA',
    name: 'Washington',
    recordingConsent: { type: 'Two-party', description: 'All parties must consent to recording.', statute: 'Wash. Rev. Code § 9.73.030' },
    evaluationTimeline: '35 school days from consent',
    stateLawsExceedingFederal: ['Shortened evaluation timeline (35 school days)', 'Safety net funding for high-cost special education'],
    pti: { name: 'PAVE (Partnerships for Action, Voices for Empowerment)', phone: '800-572-7368' },
    stateDOE: { name: 'Washington Office of Superintendent of Public Instruction, Special Education', phone: '360-725-6075' },
    complaintContact: { description: 'File a complaint with Washington OSPI within one year.' }
  },
  {
    abbreviation: 'WV',
    name: 'West Virginia',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'W. Va. Code § 62-1D-3' },
    evaluationTimeline: '80 calendar days from referral',
    stateLawsExceedingFederal: [],
    pti: { name: 'West Virginia Parent Training and Information (WVPTI)', phone: '800-281-1436' },
    stateDOE: { name: 'West Virginia Department of Education, Office of Special Education', phone: '304-558-2696' },
    complaintContact: { description: 'File a complaint with West Virginia Department of Education within one year.' }
  },
  {
    abbreviation: 'WI',
    name: 'Wisconsin',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Wis. Stat. § 968.31' },
    evaluationTimeline: '60 calendar days from consent (IEP within 30 days of eligibility)',
    stateLawsExceedingFederal: ['IEP development within 30 days of eligibility determination'],
    pti: { name: 'Wisconsin FACETS', phone: '877-374-0511' },
    stateDOE: { name: 'Wisconsin Department of Public Instruction, Special Education', phone: '608-266-1781' },
    complaintContact: { description: 'File a complaint with Wisconsin Department of Public Instruction within one year.' }
  },
  {
    abbreviation: 'WY',
    name: 'Wyoming',
    recordingConsent: { type: 'One-party', description: 'Only one party must consent to recording.', statute: 'Wyo. Stat. § 7-3-702' },
    evaluationTimeline: '60 calendar days from consent',
    stateLawsExceedingFederal: [],
    pti: { name: 'Wyoming Parent Information Center', phone: '307-684-2277' },
    stateDOE: { name: 'Wyoming Department of Education, Special Programs', phone: '307-777-7417' },
    complaintContact: { description: 'File a complaint with Wyoming Department of Education within one year.' }
  }
];
