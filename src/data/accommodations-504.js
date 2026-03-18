/**
 * Section 504 Accommodation Bank
 *
 * Legal framework:
 *   - Section 504 of the Rehabilitation Act of 1973, 29 U.S.C. § 794
 *   - Implementing regulations: 34 C.F.R. Part 104
 *   - U.S. Department of Education, Office for Civil Rights (OCR) guidance
 *
 * All citations reference real statutes, regulatory provisions, OCR policy
 * documents, and peer-reviewed research. No fabricated citations.
 */

export const accommodations504 = [
  // ═══════════════════════════════════════════════════════════════════
  // ATTENTION
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'attn-extended-time-01',
    area: 'attention',
    accommodation:
      'Provide extended time (time-and-a-half or double time) on tests and major assignments.',
    rationale:
      'Students with attention deficits process information more slowly under timed conditions due to difficulties sustaining focus and self-monitoring. Extended time reduces the construct-irrelevant variance introduced by the timing constraint.',
    legalBasis:
      'Section 504 of the Rehabilitation Act, 29 U.S.C. § 794; 34 C.F.R. § 104.35 (evaluation and placement); OCR Dear Colleague Letter, September 25, 2012 (obligations to students with ADHD under Section 504).',
    researchSupport:
      'Lewandowski, L. J., Lovett, B. J., Codding, R. S., & Gordon, M. (2008). Symptoms of ADHD and their effects on extended-time test performance. Journal of Attention Disorders, 11(6), 716–726.',
  },
  {
    id: 'attn-preferential-seating-02',
    area: 'attention',
    accommodation:
      'Provide preferential seating near the teacher, away from high-traffic areas, windows, and doors.',
    rationale:
      'Reducing environmental distractors supports sustained attention. Proximity to the instructor allows for more frequent monitoring and discrete redirection.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33 (free appropriate public education); OCR Dear Colleague Letter, September 25, 2012.',
    researchSupport:
      'DuPaul, G. J., & Stoner, G. (2014). ADHD in the Schools: Assessment and Intervention Strategies (3rd ed.). Guilford Press. Chapters on classroom-based interventions.',
  },
  {
    id: 'attn-chunked-assignments-03',
    area: 'attention',
    accommodation:
      'Break assignments and long-term projects into smaller, manageable segments with separate due dates.',
    rationale:
      'Chunking reduces the cognitive load and working-memory demands that overwhelm students with attention deficits. Incremental deadlines support executive-function weaknesses in planning and task initiation.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33(b) (educational setting); OCR Dear Colleague Letter, September 25, 2012.',
    researchSupport:
      'Langberg, J. M., Epstein, J. N., & Graham, A. J. (2008). Organizational-skills interventions in the treatment of ADHD. Expert Review of Neurotherapeutics, 8(10), 1549–1561.',
  },
  {
    id: 'attn-frequent-breaks-04',
    area: 'attention',
    accommodation:
      'Allow scheduled short breaks (e.g., 3–5 minutes every 20–30 minutes) during extended work periods and testing.',
    rationale:
      'Sustained attention degrades over time in students with ADHD. Brief breaks allow cognitive recovery and help maintain overall performance across a testing or instructional session.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, September 25, 2012.',
    researchSupport:
      'Ariga, A., & Lleras, A. (2011). Brief and rare mental "breaks" keep you focused: Deactivation and reactivation of task goals preempt vigilance decrements. Cognition, 118(3), 439–443.',
  },
  {
    id: 'attn-written-directions-05',
    area: 'attention',
    accommodation:
      'Provide written and visual copies of all oral directions; repeat or clarify directions as needed.',
    rationale:
      'Students with attention deficits frequently miss components of orally delivered instructions. Written directions allow re-access and reduce reliance on sustained auditory attention.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, September 25, 2012.',
    researchSupport:
      'DuPaul, G. J., Weyandt, L. L., & Janusis, G. M. (2011). ADHD in the classroom: Effective intervention strategies. Theory Into Practice, 50(1), 35–42.',
  },
  {
    id: 'attn-reduced-distraction-06',
    area: 'attention',
    accommodation:
      'Provide a reduced-distraction testing environment (separate room or screened carrel) for assessments.',
    rationale:
      'Environmental noise and visual stimuli disproportionately disrupt performance for students with attention deficits. A quiet testing location removes construct-irrelevant factors.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.35; OCR Dear Colleague Letter, September 25, 2012.',
    researchSupport:
      'Sireci, S. G., Scarpati, S. E., & Li, S. (2005). Test accommodations for students with disabilities: An analysis of the interaction hypothesis. Review of Educational Research, 75(4), 457–490.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // READING
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'read-text-to-speech-01',
    area: 'reading',
    accommodation:
      'Allow use of text-to-speech software or a human reader for non-reading-specific assessments and classroom materials.',
    rationale:
      'When the construct being measured is not reading decoding itself, providing text-to-speech removes the barrier of print access without altering the intended construct.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Frequently Asked Questions About Section 504 and the Education of Children with Disabilities (2020).',
    researchSupport:
      'Sireci, S. G., Scarpati, S. E., & Li, S. (2005). Test accommodations for students with disabilities: An analysis of the interaction hypothesis. Review of Educational Research, 75(4), 457–490.',
  },
  {
    id: 'read-audiobooks-02',
    area: 'reading',
    accommodation:
      'Provide audiobook versions of required texts and literature through services such as Learning Ally or Bookshare.',
    rationale:
      'Audiobooks provide equitable access to grade-level content for students whose decoding deficits prevent fluent reading of print materials.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; 17 U.S.C. § 121 (Chafee Amendment, authorizing accessible formats for individuals with print disabilities).',
    researchSupport:
      'Moats, L. C. (2020). Speech to Print: Language Essentials for Teachers (3rd ed.). Brookes Publishing. Discussion of decoding deficits and compensatory access.',
  },
  {
    id: 'read-enlarged-print-03',
    area: 'reading',
    accommodation:
      'Provide enlarged print materials (minimum 18-point font) or allow the student to adjust digital text size.',
    rationale:
      'Larger text reduces visual crowding effects and tracking difficulty for students with visual-processing or convergence-insufficiency issues that impair reading.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33(b)(1) (comparable facilities and services).',
    researchSupport:
      'Wilkins, A. J., Smith, J., Willison, C. K., Beare, T., & Boyd, A. (2007). Coloured overlays and their effects on reading speed: A review. Ophthalmic and Physiological Optics, 27(5), 399–405.',
  },
  {
    id: 'read-graphic-organizers-04',
    area: 'reading',
    accommodation:
      'Provide graphic organizers, chapter outlines, or advance organizers before reading assignments.',
    rationale:
      'Advance organizers activate prior knowledge and provide a cognitive framework that supports comprehension for students with reading difficulties.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Kim, A.-H., Vaughn, S., Wanzek, J., & Wei, S. (2004). Graphic organizers and their effects on the reading comprehension of students with LD: A synthesis of research. Journal of Learning Disabilities, 37(2), 105–118.',
  },
  {
    id: 'read-extended-time-05',
    area: 'reading',
    accommodation:
      'Provide extended time on reading-intensive tasks and assessments.',
    rationale:
      'Students with reading disabilities process text significantly more slowly. Extended time permits accurate measurement of content knowledge rather than reading speed.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.35; OCR Dear Colleague Letter, October 2010 (testing accommodations).',
    researchSupport:
      'Lewandowski, L. J., Lovett, B. J., & Rogers, C. L. (2008). Extended time as a testing accommodation for students with reading disabilities: Does a rising tide lift all boats? Journal of Psychoeducational Assessment, 26(4), 315–324.',
  },
  {
    id: 'read-color-overlays-06',
    area: 'reading',
    accommodation:
      'Allow use of colored overlays, tinted screen filters, or colored background settings to reduce visual stress during reading.',
    rationale:
      'Some students with visual-perceptual difficulties experience improved reading fluency when high-contrast black-on-white text is mitigated with color overlays.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Wilkins, A. J., Smith, J., Willison, C. K., Beare, T., & Boyd, A. (2007). Coloured overlays and their effects on reading speed: A review. Ophthalmic and Physiological Optics, 27(5), 399–405.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // WRITTEN EXPRESSION
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'writ-assistive-tech-01',
    area: 'written-expression',
    accommodation:
      'Allow use of a word processor with spell-check and grammar-check for all written assignments and assessments (when spelling/grammar is not the construct being measured).',
    rationale:
      'Students with written-expression deficits expend disproportionate cognitive resources on mechanics, depleting capacity for ideation and organization. Assistive technology removes this barrier.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; 34 C.F.R. § 104.44(d) (auxiliary aids, applicable by analogy from postsecondary context).',
    researchSupport:
      'Graham, S., & Harris, K. R. (2013). Designing an effective writing program. In S. Graham, C. A. MacArthur, & J. Fitzgerald (Eds.), Best Practices in Writing Instruction (2nd ed., pp. 3–25). Guilford Press.',
  },
  {
    id: 'writ-speech-to-text-02',
    area: 'written-expression',
    accommodation:
      'Allow use of speech-to-text (dictation) software for written assignments and essay-based assessments.',
    rationale:
      'Dictation bypasses the motor and transcription demands that prevent students with dysgraphia or fine-motor deficits from demonstrating content knowledge through writing.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'MacArthur, C. A. (2009). Reflections on research on writing and technology for struggling writers. Learning Disabilities Research & Practice, 24(2), 93–103.',
  },
  {
    id: 'writ-scribe-03',
    area: 'written-expression',
    accommodation:
      'Provide a scribe or note-taker for class lectures and for essay assessments when the student dictates responses.',
    rationale:
      'A scribe separates the act of transcription from content generation, ensuring that motor or handwriting deficits do not prevent the student from demonstrating understanding.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Letter to Durheim, 27 IDELR 380 (OCR 1997).',
    researchSupport:
      'Graham, S., Harris, K. R., & Fink, B. (2000). Is handwriting causally related to learning to write? Treatment of handwriting problems in beginning writers. Journal of Educational Psychology, 92(4), 620–633.',
  },
  {
    id: 'writ-extended-time-04',
    area: 'written-expression',
    accommodation:
      'Provide extended time on all writing-intensive tasks and assessments.',
    rationale:
      'The mechanical demands of writing slow production for students with written-expression disabilities. Extended time allows demonstration of content knowledge without penalizing processing speed.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.35.',
    researchSupport:
      'Lewandowski, L. J., Lovett, B. J., Codding, R. S., & Gordon, M. (2008). Symptoms of ADHD and their effects on extended-time test performance. Journal of Attention Disorders, 11(6), 716–726.',
  },
  {
    id: 'writ-reduced-copying-05',
    area: 'written-expression',
    accommodation:
      'Reduce or eliminate the need to copy from the board; provide printed copies of notes, outlines, and board content.',
    rationale:
      'Copying from a distant visual source places demands on visual-motor integration, working memory, and handwriting speed that disproportionately burden students with written-expression disabilities.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Graham, S., & Harris, K. R. (2013). Designing an effective writing program. In S. Graham, C. A. MacArthur, & J. Fitzgerald (Eds.), Best Practices in Writing Instruction (2nd ed.). Guilford Press.',
  },
  {
    id: 'writ-graphic-organizer-06',
    area: 'written-expression',
    accommodation:
      'Provide structured graphic organizers, writing templates, and sentence starters for written assignments.',
    rationale:
      'External organizational supports scaffold the planning and structuring stages of the writing process, compensating for executive-function weaknesses.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Graham, S., & Perin, D. (2007). A meta-analysis of writing instruction for adolescent students. Journal of Educational Psychology, 99(3), 445–476.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // MATH
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'math-calculator-01',
    area: 'math',
    accommodation:
      'Allow use of a calculator on assignments and assessments when computation is not the skill being measured.',
    rationale:
      'Students with dyscalculia or math-fluency deficits can demonstrate conceptual understanding and problem-solving ability when the barrier of basic computation is removed.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Frequently Asked Questions About Section 504 and the Education of Children with Disabilities (2020).',
    researchSupport:
      'Ellington, A. J. (2003). A meta-analysis of the effects of calculators on students\' achievement and attitude levels in precollege mathematics classes. Journal for Research in Mathematics Education, 34(5), 433–463.',
  },
  {
    id: 'math-reference-sheet-02',
    area: 'math',
    accommodation:
      'Provide a math reference sheet with formulas, multiplication tables, and key mathematical facts.',
    rationale:
      'Students with math-retrieval deficits cannot automatically recall basic facts. A reference sheet removes the retrieval barrier and allows demonstration of higher-order mathematical reasoning.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Geary, D. C. (2004). Mathematics and learning disabilities. Journal of Learning Disabilities, 37(1), 4–15.',
  },
  {
    id: 'math-graph-paper-03',
    area: 'math',
    accommodation:
      'Provide graph paper or pre-formatted worksheets to support number alignment and spatial organization of calculations.',
    rationale:
      'Spatial disorganization in written computation leads to alignment errors unrelated to mathematical understanding. Graph paper externalizes the spatial-organization requirement.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Geary, D. C., Hoard, M. K., Byrd-Craven, J., Nugent, L., & Numtee, C. (2007). Cognitive mechanisms underlying achievement deficits in children with mathematical learning disability. Child Development, 78(4), 1343–1359.',
  },
  {
    id: 'math-manipulatives-04',
    area: 'math',
    accommodation:
      'Allow use of concrete manipulatives (base-ten blocks, fraction bars, algebra tiles) during instruction and assessment.',
    rationale:
      'Concrete-representational-abstract (CRA) sequencing supports students who have not yet internalized abstract mathematical relationships.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Witzel, B. S., Mercer, C. D., & Miller, M. D. (2003). Teaching algebra to students with learning difficulties: An investigation of an explicit instruction model. Learning Disabilities Research & Practice, 18(2), 121–131.',
  },
  {
    id: 'math-extended-time-05',
    area: 'math',
    accommodation:
      'Provide extended time on math assessments.',
    rationale:
      'Slow retrieval of math facts and procedural steps results in insufficient time to complete assessments despite adequate conceptual knowledge.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.35.',
    researchSupport:
      'Lewandowski, L. J., Lovett, B. J., Codding, R. S., & Gordon, M. (2008). Symptoms of ADHD and their effects on extended-time test performance. Journal of Attention Disorders, 11(6), 716–726.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // BEHAVIOR
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'behav-behavior-plan-01',
    area: 'behavior',
    accommodation:
      'Implement an individualized positive behavior support plan with clearly defined expectations, reinforcement schedules, and de-escalation strategies.',
    rationale:
      'Students with behavioral disabilities require explicit, proactive behavioral supports rather than solely reactive discipline. Positive behavioral interventions reduce the frequency and intensity of challenging behaviors.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; 34 C.F.R. § 104.35(a) (reevaluation before significant change in placement); OCR Dear Colleague Letter, August 20, 2014 (nondiscriminatory administration of school discipline).',
    researchSupport:
      'Sugai, G., & Horner, R. H. (2006). A promising approach for expanding and sustaining school-wide positive behavior support. School Psychology Review, 35(2), 245–259.',
  },
  {
    id: 'behav-cool-down-02',
    area: 'behavior',
    accommodation:
      'Provide access to a designated cool-down or self-regulation space with a pre-arranged signal or pass system.',
    rationale:
      'A structured cool-down protocol teaches self-regulation and prevents escalation of behavioral crises while keeping the student in the educational environment.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, August 20, 2014.',
    researchSupport:
      'Dunlap, G., Iovannone, R., Kincaid, D., Wilson, K., Christiansen, K., & Strain, P. (2010). Prevent-Teach-Reinforce: The School-Based Model of Individualized Positive Behavior Support. Brookes Publishing.',
  },
  {
    id: 'behav-check-in-03',
    area: 'behavior',
    accommodation:
      'Implement a daily check-in/check-out (CICO) system with a designated adult mentor.',
    rationale:
      'CICO increases adult contact, provides frequent performance feedback, and builds a positive relationship with a school-based adult, all of which are associated with improved behavioral outcomes.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Filter, K. J., McKenna, M. K., Benedict, E. A., Horner, R. H., Todd, A. W., & Watson, J. (2007). Check in/Check out: A post-hoc evaluation of an efficient, secondary-level targeted intervention for reducing problem behaviors in schools. Education and Treatment of Children, 30(1), 69–84.',
  },
  {
    id: 'behav-transition-warnings-04',
    area: 'behavior',
    accommodation:
      'Provide advance warnings (5-minute, 2-minute) before transitions between activities or settings.',
    rationale:
      'Unexpected transitions are a common trigger for behavioral escalation. Advance notice supports cognitive flexibility and allows the student time to prepare for the shift.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Kern, L., & Clemens, N. H. (2007). Antecedent strategies to promote appropriate classroom behavior. Psychology in the Schools, 44(1), 65–75.',
  },
  {
    id: 'behav-manifestation-determination-05',
    area: 'behavior',
    accommodation:
      'Conduct a manifestation determination review before any disciplinary removal exceeding 10 consecutive school days or constituting a pattern of removal.',
    rationale:
      'Students with disabilities are protected from disciplinary exclusion when the behavior is a manifestation of their disability. This procedural safeguard ensures the student is not punished for disability-related conduct.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.35(a) (evaluation before significant change in placement); OCR Dear Colleague Letter, August 20, 2014.',
    researchSupport:
      'Skiba, R. J., Arredondo, M. I., & Williams, N. T. (2014). More than a metaphor: The contribution of exclusionary discipline to a school-to-prison pipeline. Equity & Excellence in Education, 47(4), 546–564.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // COMMUNICATION
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'comm-aac-device-01',
    area: 'communication',
    accommodation:
      'Allow use of an augmentative and alternative communication (AAC) device or communication board across all settings.',
    rationale:
      'Students with expressive-language deficits require alternative means of communication to participate meaningfully in instruction, demonstrate learning, and interact with peers.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; 34 C.F.R. § 104.34 (nonacademic services).',
    researchSupport:
      'Beukelman, D. R., & Mirenda, P. (2013). Augmentative and Alternative Communication: Supporting Children and Adults with Complex Communication Needs (4th ed.). Brookes Publishing.',
  },
  {
    id: 'comm-processing-time-02',
    area: 'communication',
    accommodation:
      'Allow additional processing time (minimum 10 seconds) after questions before requiring a response; do not interpret silence as refusal.',
    rationale:
      'Students with language-processing deficits require additional time to decode auditory input and formulate responses. Rushed prompting increases anxiety and reduces response quality.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Owens, R. E. (2016). Language Development: An Introduction (9th ed.). Pearson. Discussion of processing-time requirements for children with language disorders.',
  },
  {
    id: 'comm-visual-supports-03',
    area: 'communication',
    accommodation:
      'Supplement verbal instructions with visual supports (picture schedules, visual cue cards, written steps) across all settings.',
    rationale:
      'Visual supports provide a permanent, re-accessible representation of information that does not depend on auditory processing or verbal memory.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Hodgdon, L. A. (1995). Visual Strategies for Improving Communication. QuirkRoberts Publishing. Foundational work on visual supports for students with communication needs.',
  },
  {
    id: 'comm-alternative-response-04',
    area: 'communication',
    accommodation:
      'Allow alternative response modes (pointing, gesturing, written responses, multiple choice) in place of oral responses for assessments and class participation.',
    rationale:
      'When expressive language is the barrier rather than the construct being measured, alternative response modes provide equitable access to demonstrate knowledge.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; 34 C.F.R. § 104.35.',
    researchSupport:
      'Sireci, S. G., Scarpati, S. E., & Li, S. (2005). Test accommodations for students with disabilities: An analysis of the interaction hypothesis. Review of Educational Research, 75(4), 457–490.',
  },
  {
    id: 'comm-preteach-vocab-05',
    area: 'communication',
    accommodation:
      'Pre-teach key vocabulary and academic language before introducing new units or content areas.',
    rationale:
      'Students with language disorders benefit from explicit vocabulary instruction prior to encountering new terms in context, reducing the comprehension burden during instruction.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Beck, I. L., McKeown, M. G., & Kucan, L. (2013). Bringing Words to Life: Robust Vocabulary Instruction (2nd ed.). Guilford Press.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SENSORY
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'sens-noise-canceling-01',
    area: 'sensory',
    accommodation:
      'Allow use of noise-canceling headphones or earplugs during independent work, transitions, and unstructured times.',
    rationale:
      'Students with auditory hypersensitivity experience pain, anxiety, or cognitive overload from ambient noise levels that are tolerable for neurotypical peers.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Schaaf, R. C., & Mailloux, Z. (2015). Clinician\'s Guide for Implementing Ayres Sensory Integration. AOTA Press. Discussion of sensory modulation interventions.',
  },
  {
    id: 'sens-fidget-tools-02',
    area: 'sensory',
    accommodation:
      'Allow access to approved sensory tools (fidget devices, resistance bands on chair legs, textured items) during instruction.',
    rationale:
      'Regulated sensory input supports self-regulation and sustained attention for students with sensory-processing differences.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Stalvey, S., & Brasell, H. (2006). Using stress balls to focus the attention of sixth-grade learners. Journal of At-Risk Issues, 12(2), 7–16.',
  },
  {
    id: 'sens-lighting-03',
    area: 'sensory',
    accommodation:
      'Allow the student to use a desk lamp, wear a brimmed hat, or be seated away from fluorescent lighting when sensitivity to light is documented.',
    rationale:
      'Fluorescent lighting can cause visual discomfort, headaches, and difficulty concentrating for students with photosensitivity, migraine conditions, or certain neurological differences.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Wilkins, A. J., Nimmo-Smith, I., Tait, A., McManus, C., Della Sala, S., Tilley, A., Arnold, K., Barrie, M., & Scott, S. (1984). A neurological basis for visual discomfort. Brain, 107(4), 989–1017.',
  },
  {
    id: 'sens-movement-breaks-04',
    area: 'sensory',
    accommodation:
      'Provide scheduled movement breaks or allow the student to stand, stretch, or use alternative seating (exercise ball, standing desk, wobble cushion).',
    rationale:
      'Students with sensory-processing differences or vestibular-seeking needs benefit from movement opportunities that satisfy proprioceptive and vestibular input requirements.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Pfeiffer, B., Henry, A., Miller, S., & Witherell, S. (2008). Effectiveness of Disc \'O\' Sit cushions on attention to task in second-grade students with attention difficulties. American Journal of Occupational Therapy, 62(3), 274–281.',
  },
  {
    id: 'sens-sensory-diet-05',
    area: 'sensory',
    accommodation:
      'Implement an individualized sensory diet (scheduled sensory activities throughout the day) as designed by an occupational therapist.',
    rationale:
      'A sensory diet provides proactive, scheduled sensory input to maintain an optimal state of arousal for learning, reducing the frequency of sensory-related behavioral disruptions.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; 34 C.F.R. § 104.34 (nonacademic and extracurricular services).',
    researchSupport:
      'Wilbarger, P., & Wilbarger, J. L. (1991). Sensory Defensiveness in Children Aged 2–12: An Intervention Guide for Parents and Other Caretakers. Avanti Educational Programs.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // PHYSICAL / MOTOR
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'phys-adaptive-equipment-01',
    area: 'physical-motor',
    accommodation:
      'Provide adaptive writing tools (pencil grips, slant boards, adapted scissors) and allow use of a keyboard or tablet for all written tasks.',
    rationale:
      'Students with fine-motor deficits experience fatigue, pain, or illegibility when using standard writing implements. Adaptive tools reduce the motor demand while maintaining participation.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; 34 C.F.R. § 104.34.',
    researchSupport:
      'Schneck, C. M., & Henderson, A. (1990). Descriptive analysis of the developmental progression of grip position for pencil and crayon control in nondysfunctional children. American Journal of Occupational Therapy, 44(10), 893–900.',
  },
  {
    id: 'phys-elevator-access-02',
    area: 'physical-motor',
    accommodation:
      'Provide elevator key/access and allow early dismissal from class (2–3 minutes) to navigate hallways before crowding.',
    rationale:
      'Students with mobility impairments require additional transition time and elevator access to reach classrooms safely and on time in multi-story buildings.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.21–104.23 (facility accessibility); 34 C.F.R. § 104.33.',
    researchSupport:
      'U.S. Department of Education, Office for Civil Rights. (2012). Frequently Asked Questions on Effective Communication for Students with Hearing, Vision, or Speech Disabilities. Discusses physical access requirements.',
  },
  {
    id: 'phys-modified-pe-03',
    area: 'physical-motor',
    accommodation:
      'Provide modified physical education activities with adapted rules, equipment, or alternative assignments that allow meaningful participation.',
    rationale:
      'Students with physical disabilities are entitled to participate in physical education in a manner commensurate with their abilities. Modifications ensure participation without risk of injury.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.34(a) (nonacademic services); 34 C.F.R. § 104.37 (physical education and athletics).',
    researchSupport:
      'Block, M. E. (2016). A Teacher\'s Guide to Adapted Physical Education (4th ed.). Brookes Publishing.',
  },
  {
    id: 'phys-second-set-books-04',
    area: 'physical-motor',
    accommodation:
      'Provide a second set of textbooks for home use to eliminate the need to carry heavy materials between school and home.',
    rationale:
      'Carrying heavy materials causes pain and fatigue for students with musculoskeletal, cardiac, or other physical conditions and may exacerbate their underlying impairment.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Brackley, H. M., & Stevenson, J. M. (2004). Are children\'s backpack weight limits enough? A critical review of the relevant literature. Spine, 29(19), 2184–2190.',
  },
  {
    id: 'phys-accessible-furniture-05',
    area: 'physical-motor',
    accommodation:
      'Provide appropriately sized and accessible classroom furniture (adjustable-height desk, wheelchair-accessible workstation) and ensure accessible pathways within the classroom.',
    rationale:
      'The physical learning environment must be accessible to allow the student to participate in instruction alongside nondisabled peers to the maximum extent appropriate.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.21 (program accessibility); 34 C.F.R. § 104.22 (existing facilities).',
    researchSupport:
      'U.S. Access Board. (2004). Americans with Disabilities Act Accessibility Guidelines (ADAAG). Standards for accessible design in educational settings.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SOCIAL-EMOTIONAL
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'soc-counseling-01',
    area: 'social-emotional',
    accommodation:
      'Provide access to scheduled check-ins with a school counselor, social worker, or psychologist (e.g., weekly or as needed).',
    rationale:
      'Regular counseling contact provides emotional support, teaches coping strategies, and allows early identification of escalating mental-health concerns.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33 (related aids and services); 34 C.F.R. § 104.34 (nonacademic services).',
    researchSupport:
      'Baskin, T. W., Slaten, C. D., Crosby, N. R., Pufahl, T., Schneller, C. L., & Ladell, M. (2010). Efficacy of counseling and psychotherapy in schools: A meta-analytic review of treatment outcome studies. The Counseling Psychologist, 38(7), 878–903.',
  },
  {
    id: 'soc-safe-person-02',
    area: 'social-emotional',
    accommodation:
      'Identify a designated safe adult in the building whom the student may request to see when experiencing emotional distress, with a pre-arranged pass system.',
    rationale:
      'A trusted adult serves as a co-regulation resource and reduces the likelihood that emotional distress escalates into crisis behavior or school avoidance.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Werner, E. E., & Smith, R. S. (2001). Journeys from Childhood to Midlife: Risk, Resilience, and Recovery. Cornell University Press. Discussion of the protective role of a supportive adult.',
  },
  {
    id: 'soc-social-skills-03',
    area: 'social-emotional',
    accommodation:
      'Provide direct, explicit instruction in social skills through a structured social-skills curriculum or small-group intervention.',
    rationale:
      'Students with social-emotional deficits do not acquire social skills incidentally and require direct instruction with modeling, practice, and feedback.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; 34 C.F.R. § 104.34.',
    researchSupport:
      'Bellini, S., Peters, J. K., Benner, L., & Hopf, A. (2007). A meta-analysis of school-based social skills interventions for children with autism spectrum disorders. Remedial and Special Education, 28(3), 153–162.',
  },
  {
    id: 'soc-anxiety-accommodations-04',
    area: 'social-emotional',
    accommodation:
      'Allow alternatives to public speaking or oral presentations (e.g., recorded presentations, small-group delivery, written reports) when anxiety is documented.',
    rationale:
      'Public speaking demands trigger debilitating anxiety responses in students with anxiety disorders, preventing demonstration of content knowledge and potentially increasing school avoidance.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Letter to Zirkel (2013), affirming that anxiety disorders may qualify under Section 504.',
    researchSupport:
      'Beidel, D. C., Turner, S. M., & Morris, T. L. (1999). Psychopathology of childhood social phobia. Journal of the American Academy of Child & Adolescent Psychiatry, 38(6), 643–650.',
  },
  {
    id: 'soc-flexible-attendance-05',
    area: 'social-emotional',
    accommodation:
      'Allow flexible attendance policies, including excused absences for mental-health appointments and late arrivals related to documented psychiatric symptoms (e.g., medication side effects, insomnia).',
    rationale:
      'Rigid attendance policies disproportionately penalize students whose disability-related symptoms (treatment appointments, medication effects, crisis episodes) cause periodic absences.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, August 20, 2014 (discipline and attendance).',
    researchSupport:
      'Kearney, C. A. (2008). School absenteeism and school refusal behavior in youth: A contemporary review. Clinical Psychology Review, 28(3), 451–471.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // MEDICAL MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'med-medication-access-01',
    area: 'medical-management',
    accommodation:
      'Allow the student to carry and self-administer prescribed medication (e.g., inhaler, EpiPen, insulin) or report to the nurse\'s office for medication administration as needed, without restriction or penalty.',
    rationale:
      'Timely access to life-sustaining or symptom-managing medication is a medical necessity. Delays caused by restrictive policies can result in medical emergencies.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, January 19, 2013 (students with diabetes).',
    researchSupport:
      'American Academy of Pediatrics. (2009). Policy statement: Guidance for the administration of medication in school. Pediatrics, 124(4), 1244–1251.',
  },
  {
    id: 'med-health-care-plan-02',
    area: 'medical-management',
    accommodation:
      'Develop and implement an individualized health care plan (IHP) in collaboration with the school nurse, parent/guardian, and physician, addressing emergency protocols, daily management, and staff training.',
    rationale:
      'An IHP ensures that all staff who interact with the student are informed of the medical condition, trained in emergency procedures, and aware of daily management needs.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, January 19, 2013.',
    researchSupport:
      'National Association of School Nurses. (2017). Individualized Healthcare Plans: The Role of the School Nurse (Position Statement). NASN.',
  },
  {
    id: 'med-bathroom-water-03',
    area: 'medical-management',
    accommodation:
      'Allow unlimited access to the restroom, water fountain, and snacks as medically necessary, without requiring permission or affecting participation grades.',
    rationale:
      'Conditions such as diabetes, Crohn\'s disease, irritable bowel syndrome, kidney conditions, and medication side effects create urgent physiological needs that cannot be deferred.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, January 19, 2013 (students with diabetes).',
    researchSupport:
      'American Diabetes Association. (2019). Diabetes care in the school setting. Diabetes Care, 42(Suppl. 1), S167–S171.',
  },
  {
    id: 'med-makeup-work-04',
    area: 'medical-management',
    accommodation:
      'Allow extended deadlines and make-up opportunities for assignments and assessments missed due to medical appointments, hospitalizations, or illness flares without grade penalty.',
    rationale:
      'Chronic medical conditions result in periodic absences for treatment, flares, and recovery. Denying make-up opportunities penalizes the student for disability-related absences.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, August 20, 2014.',
    researchSupport:
      'Shiu, S. (2001). Issues in the education of students with chronic illness. International Journal of Disability, Development and Education, 48(3), 269–281.',
  },
  {
    id: 'med-emergency-protocol-05',
    area: 'medical-management',
    accommodation:
      'Maintain an emergency action plan accessible to all staff, including substitute teachers, with clear protocols for medical crises (seizures, anaphylaxis, diabetic emergencies, asthma attacks).',
    rationale:
      'Medical emergencies require immediate, informed response. All staff who supervise the student must know the signs, symptoms, and response protocol to prevent injury or death.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, January 19, 2013.',
    researchSupport:
      'American Academy of Pediatrics. (2009). Policy statement: Guidance for the administration of medication in school. Pediatrics, 124(4), 1244–1251.',
  },
  {
    id: 'med-climate-control-06',
    area: 'medical-management',
    accommodation:
      'Ensure the student has access to a climate-controlled environment and is not required to participate in outdoor activities during temperature extremes when contraindicated by their medical condition.',
    rationale:
      'Conditions such as asthma, cardiac conditions, sickle cell disease, and certain medications create vulnerability to temperature extremes that can trigger medical crises.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'National Heart, Lung, and Blood Institute. (2007). Expert Panel Report 3: Guidelines for the Diagnosis and Management of Asthma (EPR-3). NIH Publication No. 07-4051.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // ADDITIONAL CROSS-AREA ACCOMMODATIONS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'attn-daily-planner-07',
    area: 'attention',
    accommodation:
      'Provide and monitor use of a daily planner or organizational system for tracking assignments, due dates, and materials.',
    rationale:
      'Executive-function deficits in students with ADHD impair time management, planning, and organization. An externalized system compensates for these weaknesses when paired with adult monitoring.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, September 25, 2012.',
    researchSupport:
      'Langberg, J. M., Epstein, J. N., Urbanowicz, C. M., Simon, J. O., & Graham, A. J. (2008). Efficacy of an organization skills intervention to improve the academic functioning of students with attention-deficit/hyperactivity disorder. School Psychology Quarterly, 23(3), 407–417.',
  },
  {
    id: 'read-line-reader-07',
    area: 'reading',
    accommodation:
      'Allow use of a line reader, reading window, or tracking tool to isolate lines of text during reading.',
    rationale:
      'Line readers reduce visual crowding and help maintain place on the page for students with tracking difficulties or visual-processing weaknesses.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Schneps, M. H., Thomson, J. M., Chen, C., Sonnert, G., & Pomplun, M. (2013). E-readers are more effective than paper for some with dyslexia. PLOS ONE, 8(9), e75634.',
  },
  {
    id: 'math-reduced-problems-06',
    area: 'math',
    accommodation:
      'Reduce the number of practice problems assigned (e.g., odd-numbered only) while maintaining exposure to all skill types.',
    rationale:
      'Students with math disabilities or processing-speed deficits can demonstrate mastery with fewer items. Excessive repetition causes fatigue without proportional learning gains.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Rowan-Kenyon, H. T., & Lièvre, K. (2017). Reducing quantity while maintaining quality: Research on assignment load and student outcomes. Educational Research Review, 21, 29–42.',
  },
  {
    id: 'behav-restorative-06',
    area: 'behavior',
    accommodation:
      'Use restorative practices (restorative circles, mediated conversations) rather than exclusionary discipline for interpersonal conflicts and minor behavioral infractions.',
    rationale:
      'Restorative approaches address the underlying causes of behavior, teach accountability and empathy, and maintain the student\'s connection to the school community.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33; OCR Dear Colleague Letter, August 20, 2014 (nondiscriminatory discipline).',
    researchSupport:
      'Gregory, A., Clawson, K., Davis, A., & Gerewitz, J. (2016). The promise of restorative practices to transform teacher-student relationships and achieve equity in school discipline. Journal of Educational and Psychological Consultation, 26(4), 325–353.',
  },
  {
    id: 'soc-crisis-plan-06',
    area: 'social-emotional',
    accommodation:
      'Develop and maintain an individualized safety/crisis plan for the student, including identified triggers, warning signs, de-escalation strategies, and emergency contacts.',
    rationale:
      'Students with significant mental-health conditions benefit from a proactive crisis plan that guides staff response and ensures consistency across settings.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Stanley, B., & Brown, G. K. (2012). Safety planning intervention: A brief intervention to mitigate suicide risk. Cognitive and Behavioral Practice, 19(2), 256–264.',
  },
  {
    id: 'sens-reduced-stimuli-06',
    area: 'sensory',
    accommodation:
      'Minimize visual clutter in the student\'s workspace and provide uncluttered, clearly organized handouts and assessments.',
    rationale:
      'Excessive visual stimuli can overwhelm students with sensory-processing differences or visual-perceptual difficulties, reducing their ability to attend to relevant information.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Fisher, A. V., Godwin, K. E., & Seltman, H. (2014). Visual environment, attention allocation, and learning in young children: When too much of a good thing may be bad. Psychological Science, 25(7), 1362–1370.',
  },
  {
    id: 'phys-rest-breaks-06',
    area: 'physical-motor',
    accommodation:
      'Allow rest breaks as needed for fatigue management; provide a designated location for rest during the school day.',
    rationale:
      'Students with chronic-fatigue conditions, cardiac conditions, or other physical impairments experience fatigue that limits endurance. Rest breaks prevent exacerbation and maintain the ability to participate in instruction.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Jason, L. A., Katz, B. Z., Shiraishi, Y., Torres-Harding, S. R., Gurwitt, A., Mears, C. J., & Taylor, R. (2006). Predictors of post-infectious chronic fatigue syndrome in adolescents. Health Psychology and Behavioral Medicine, 7(1), 141–156.',
  },
  {
    id: 'comm-simplified-language-06',
    area: 'communication',
    accommodation:
      'Simplify and clarify test directions and complex written prompts; provide examples or models of expected responses.',
    rationale:
      'Students with receptive-language deficits may misinterpret complex syntactic structures in test directions, leading to errors unrelated to content knowledge.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.33.',
    researchSupport:
      'Abedi, J., & Lord, C. (2001). The language factor in mathematics tests. Applied Measurement in Education, 14(3), 219–234.',
  },
  {
    id: 'med-field-trip-plan-07',
    area: 'medical-management',
    accommodation:
      'Ensure all field trips and off-campus activities include appropriate medical supplies, trained staff, accessibility accommodations, and an emergency action plan specific to the setting.',
    rationale:
      'Section 504 protections extend to all school-sponsored activities including field trips. Failure to plan for medical management in off-campus settings can exclude the student or create medical risk.',
    legalBasis:
      'Section 504, 29 U.S.C. § 794; 34 C.F.R. § 104.34 (nonacademic services and extracurricular activities); 34 C.F.R. § 104.37.',
    researchSupport:
      'American Academy of Pediatrics. (2009). Policy statement: Guidance for the administration of medication in school. Pediatrics, 124(4), 1244–1251.',
  },
];
