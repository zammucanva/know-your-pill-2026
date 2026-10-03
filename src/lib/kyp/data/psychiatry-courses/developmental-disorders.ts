import type { PsychiatryCourse } from "./types";

/**
 * DEVELOPMENTAL DISORDERS — THE LEARNING CHANNELS — canonical
 * Psychiatry course (migration batch 8, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/developmental-disorders.md — untouched
 * foundation), re-researched against current guidance (the DSM-5-TR
 * construct and ICD-11's retirement of the IQ-discrepancy formula, the
 * Snowling–Hulme phonological consensus, the Shaywitz Yale cohort, the
 * Orton–Gillingham standard, the Butterworth number-sense line, the
 * Blank/EACD coordination framework and the RPwD 2016 legal layer.
 *
 * Drug routes: NONE linked — no medicine treats a learning disorder
 * and this note assigns none of the twelve KYP drug lessons a role
 * (its only drug sentence is the "brain tonic" refusal). The one real
 * fact — methylphenidate for the comorbid ADHD that gates remediation
 * — has no KYP lesson and is recorded in contentGaps, taught here, route never invented.
 */
export const developmentalDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "developmental-disorders",
  title: "Developmental Disorders",
  shortName: "SLD",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Developmental Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "A bright child, one narrow gate: reading, writing or arithmetic far below expectation",

  summary:
    "Learning disorders present as unexpected underachievement in reading, writing, arithmetic or coordination, often misread as laziness. Remediation, school accommodations and treatment of comorbid ADHD change the trajectory.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define the learning disorders through the unexpected-underachievement frame (ability intact, one channel failing) and list the exclusions that must be cleared before any label is written.",
    "Distinguish dyslexia, dysgraphia, dyscalculia and developmental coordination disorder by their classroom signatures, channel by channel.",
    "Explain the phonological-core story of dyslexia and the magnitude-core story of dyscalculia in plain words a parent can repeat at home.",
    "Separate learning disorders from the four great mimics (poor schooling, intellectual disability, sensory problems and language exposure) including the English-medium first-generation trap.",
    "Run the assessment logic: screening trigger, mimic clearance, intelligence and achievement testing with fluency measured, process testing, and functional classroom evidence.",
    "Deliver the treatment triad (remediation, accommodations and comorbidity treatment) and know why the method and the dose of remediation matter more than the tuition bill.",
    "Counsel the Indian family: not laziness, not upbringing; the tuition treadmill will not fix it; the RPwD certificate route and what it unlocks; the Std-8 board-planning clock.",
    "Recognise the emotional career of an unidentified learning disorder, and interrupt it before the 'stupid' verdict is internalised.",
  ],
  quickFacts: [
    { label: "The signature", value: "Unexpected underachievement", detail: "Ability intact, one channel failing: bright in conversation, solving puzzles, remembering stories, and reading like a child three classes younger; the gap between the oral mind and the printed page is the whole diagnosis's spine" },
    { label: "The channels", value: "Reading, writing, arithmetic (+ coordination)", detail: "Dyslexia the phonological core; dysgraphia the graphomotor-and-spelling circuit; dyscalculia the number-sense core, with developmental coordination disorder the co-traveller that shows on the playground and the page" },
    { label: "The prevalence", value: "5–15% of school-age children", detail: "Depending on definitions and cutoffs; reading disorder the commonest at ~5–10% by strict criteria; mathematics difficulties ~3–7%; writing difficulties frequent and often co-occurring" },
    { label: "The inheritance", value: "40–70% heritability", detail: "Reading-disorder estimates: the parent who 'hated reading' and survived by memorising is the single most useful family-history question in the whole assessment" },
    { label: "The comorbidity that gates", value: "ADHD in roughly a third", detail: "Untreated, an inattentive child cannot use remediation: treating the attention roughly doubles the value of every remediation rupee; screened for in every child" },
    { label: "The Indian triage question", value: "'Does he understand when you read it aloud?'", detail: "A yes with poor independent reading is the two-minute screen: comprehension intact when read aloud is the diagnostic tell that the mind, not the channel, is intact" },
    { label: "The both-language rule", value: "Test the vernacular too", detail: "Behind only in English but at level in Marathi is bilingual acquisition load; behind in BOTH languages is the true signal. The single discipline that prevents false certificates and false reassurance alike" },
    { label: "The legal anchor", value: "RPwD Act 2016", detail: "Specific learning disability a recognised benchmark category: the certificate unlocking extra time (commonly 20%), a scribe, the third-language exemption and the NIOS open-schooling route" },
    { label: "The medicine answer", value: "None, and that is the answer", detail: "No pharmacotherapy for the learning disorder itself; 'memory syrups' are commerce. The one real drug fact is methylphenidate for the comorbid ADHD, never for reading" },
  ],
  knowledgeGraph: [
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The comorbidity riding underneath roughly a third of cases, and the gate that decides whether remediation money teaches or evaporates" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The co-occurring neurodevelopmental neighbour: the social-communication channel against the academic ones, with frequent co-travel" },
    { label: "Intellectual Disability", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The great differential: two dials both low against one narrow gate; global versus channel-specific" },
    { label: "Child Assessment & Epidemiology", type: "condition", href: "/psychiatry/child-assessment-epidemiology/", note: "The developmental history, informant craft and prevalence lens this assessment sequence runs on" },
    { label: "Child Neuropsychiatry", type: "condition", href: "/psychiatry/child-neuropsychiatry/", note: "The soft-sign territory DCD belongs to: the clumsy-athlete end of the neurodevelopmental cluster" },
    { label: "Child Anxiety", type: "condition", href: "/psychiatry/child-anxiety/", note: "The secondary anxiety and school-refusal cascade the unidentified learning disorder feeds" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The adolescent endpoint of the unrecognised case: the second disease that arrives if nobody interrupts the emotional career" },
    { label: "Left temporo-parietal reading areas", type: "brain-region", href: "#brain", note: "The letter-sound mapping table: reduced grey matter and activation here the research signature (never a diagnostic test)" },
    { label: "Intraparietal number circuit", type: "brain-region", href: "#brain", note: "The approximate number system's home: the number-line that never calibrated in dyscalculia" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The fronto-striatal attention machinery of the ADHD overlap: the comorbidity channel, not the reading channel" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Four stories carry the neuroscience, and the first is the one that ends the eye debate. Reading an alphabetic script is a technological trick the brain was never built for: it must map printed symbols onto sounds and blend them (ka + aa = caa), and the child with dyslexia runs a sound-processing machine that is grainy; rhymes arrive late, 'bat' and 'pat' blur together at speed, breaking 'elephant' into e-le-phant is genuinely effortful. If the sounds blur, the print stays blurred: the problem sits upstream of the eye, which is why vision is normal and why the method that re-trains the letter-sound mapping (not more tuition) changes the trajectory. The second story is the number-line that never calibrated: dyscalculia's core is a magnitude glitch; the approximate number system, the mental number-line that lets any toddler judge nine dots more than five, developed poorly, so numbers become memorised words without felt quantity behind them and arithmetic facts are learned like a poem in an unknown language. The third is the slow scribe: writing recruits a whole motor-program cascade (form the letter, size it, space it, spell the word, hold the sentence in memory) a juggling act in which one or two balls keep dropping, so handwriting is slow, painful and illegible and the writing load eats the ideas (the child who tells a brilliant story and writes three dull lines). The fourth story is the scar: the academic skill can be fixed by remediation, but the identity injury from years of 'stupid' and 'lazy' labels can outlast it (a Standard 5 child has already banked thousands of small humiliations) which is why every management plan must carry an emotional component. Underneath all four sits the wiring layer: atypical left-hemisphere language-network organisation with reduced grey matter and activation in temporo-parietal reading areas (research findings that explain the channel, never tests that diagnose it) and the heritability engine (40–70% for reading) that makes the father's school history part of the child's.",
    steps: [
      "Reading is a technological trick the brain never evolved: print must be mapped onto sounds and blended; the dyslexic child's sound machine runs grainy (rhymes late, bat/pat blur at speed, elephant hard to segment), so print stays blurred with normal eyes. The problem is upstream of the eye.",
      "Dyscalculia's core is a magnitude glitch: the approximate number system (the mental number-line any toddler uses to judge nine dots more than five) calibrated poorly; numbers become words without felt quantity, and arithmetic facts are memorised like a poem in an unknown language.",
      "Writing is a motor-program juggling act: form, size, space, spell, hold the sentence; in dysgraphia and DCD one or two balls keep dropping, so handwriting is slow, painful and illegible, and the writing load eats the ideas.",
      "The wiring layer: atypical left-hemisphere language-network organisation, reduced grey matter and activation in temporo-parietal reading areas, and gene lineages (DYX1C1, DCDC2, KIAA0319) affecting neuronal migration; research findings, not diagnostic tests.",
      "Plasticity is the treatment's ally: the letter-sound mapping is retrainable; systematic, multisensory phonics re-trains the route, which is why the right METHOD (not more tuition) changes the trajectory.",
      "The fourth story is the scar: the academic channel is fixed by remediation, but the identity injury from years of 'stupid/lazy' can outlast it. Every management plan carries an emotional component, because the brain that learns is also the brain that hurts.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "temporo-parietal-reading", name: "Left temporo-parietal reading areas (the mapping table)", role: "Where printed symbols are matched to sounds: reduced grey matter and activation here is the research signature of dyslexia; it explains the channel and never diagnoses it.", grade: "supported" },
    { id: "language-network", name: "Left-hemisphere language network (the sound-splitting machine's wiring)", role: "The phonological channel's infrastructure: atypical organisation means rhymes arrive late, segmentation is effortful, rapid naming runs slow; the grain is coarse upstream of print.", grade: "supported" },
    { id: "intraparietal-number", name: "Intraparietal number circuit (the mental number-line)", role: "The approximate number system's seat: magnitude comparison, subitising (seeing 'four' without counting), quantity feel; its calibration failure is the dyscalculia core.", grade: "supported" },
    { id: "motor-program-cascade", name: "The motor-program cascade (the writing hand's circuit)", role: "The form-size-spell-hold juggling act. Its dropped balls are dysgraphia's slow, painful, illegible handwriting and DCD's clumsy playground; the same motor fog shows in cycling and buttons.", grade: "proposed" },
    { id: "fronto-striatal-attention", name: "Fronto-striatal attention machinery (the comorbidity gate)", role: "The ADHD overlap's seat: attention lapses across ALL channels (unlike the channel-specific pattern), and its treatment decides whether remediation attaches to the child at all.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The fronto-striatal attention-and-reward machinery of the ADHD overlap: the honest frame: no disease-specific chemistry exists for the learning disorder itself; this is the comorbidity channel.", grade: "proposed", drugConnection: "Stimulants (methylphenidate) for the comorbid ADHD: no KYP drug lesson; recorded in contentGaps, taught in the ADHD course's tier." },
    { name: "Glutamate", symbol: "Glu", role: "The plasticity currency: learning is synaptic strengthening, and the re-training of the letter-sound mapping runs on it. The molecular engine of the remediation window that makes the method work.", grade: "proposed" },
    { name: "GABA", symbol: "GABA", role: "The excitation–inhibition balance of cortical development: the critical-period wiring layer the reading circuit matures through; named as honest developmental framing, not a drug target.", grade: "uncertain" },
  ],
  pathways: [
    {
      id: "sound-splitting-pathway",
      name: "The sound-splitting machine (why print blurs with normal eyes)",
      steps: [
        { label: "Print arrives", detail: "The alphabetic trick: symbols must be mapped onto sounds and blended" },
        { label: "The phonological channel runs grainy", detail: "Segmentation effortful (e-le-phant), rhymes late, rapid naming slow: the temporo-parietal mapping table under-activated" },
        { label: "Blending becomes effortful", detail: "Letter-sound links never automatise; guessing from first letters and context takes over: 'was' read as 'saw'" },
        { label: "Fluency never arrives", detail: "Slow, word-by-word reading; spelling stays bizarre despite dictation, but listening comprehension stays intact" },
      ],
      clinicalManifestation: "The child who answers every question when the parent reads the chapter, and reads like a child three classes younger when alone with the page.",
      grade: "established",
    },
    {
      id: "number-line-pathway",
      name: "The number-line that never calibrated",
      steps: [
        { label: "The approximate number system calibrates poorly", detail: "The mental number-line that lets a toddler judge nine dots more than five develops weakly" },
        { label: "Quantity feel is absent", detail: "Numbers become memorised words without felt magnitude: arithmetic facts learned like a poem in an unknown language" },
        { label: "Compensation fails visibly", detail: "Finger-counting persists into higher classes, place-value columns misalign, '6 × 7' is recalculated each time" },
        { label: "Everyday number collapses", detail: "Estimation, money change and time-telling struggle: word-problems collapse further when reading rides along" },
      ],
      clinicalManifestation: "The child who cannot see 'four' without counting and recalculates the same table fact every single time.",
      grade: "supported",
    },
    {
      id: "emotional-career-pathway",
      name: "The emotional career (the second disease)",
      steps: [
        { label: "The gap widens", detail: "Falling behind in the early school years while the oral mind keeps shining" },
        { label: "The humiliation layer builds", detail: "Private scolding, public read-aloud failures, red-ink workbooks, relative comparisons" },
        { label: "Avoidance and somatics", detail: "Sunday-evening dread, stomach-ache and headache on school mornings, library-day ailments" },
        { label: "The verdict is internalised", detail: "'I am dumb', 'I hate school': installed by 9–10 years of age" },
        { label: "The adolescent endpoint", detail: "Secondary anxiety, then depression or acting-out in the Std 8–10 danger zone, unless identification, the right method, accommodations and the strengths channel interrupt the chain" },
      ],
      clinicalManifestation: "The school-morning stomach-ache of Standard 5, and the adolescent mood dip of the board years if nobody interrupted the chain.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "silent-years", time: "Std 1–2", title: "The silent years", description: "Letter reversals within norm for the class, oral memory passes Std 1–3 work, the 'slow start' is tolerated. The difficulty is already developmental and already at work, just not yet expensive.", phase: "onset" },
    { id: "canyon-opens", time: "Std 3–4", title: "The canyon opens", description: "The textbook gap widens into a canyon; the two-minute triage question turns positive; this is the detection bottleneck in India, not the clinic, the classroom.", phase: "peak" },
    { id: "emotional-career", time: "Std 4–8", title: "The emotional career", description: "Avoidance, somatic school-morning complaints, the 'dumb' self-talk internalised by 9–10; compensatory brilliance (oral skills, memory, drawing) misleads teachers: 'he can't be dyslexic, he talks so well'.", phase: "duration" },
    { id: "danger-zone", time: "Std 8–10, board year", title: "The danger zone", description: "The adolescent mood dip; the board plan's true deadline: certificate in place by Std 9 registration, scribe training begun, typing as the parallel skill, third-language exemption applied for.", phase: "peak" },
    { id: "remediation-window", time: "1–2 school years", title: "The remediation window", description: "Structured multisensory phonics at 2–4 sessions weekly by a trained educator: the dose is the treatment; fluency climbs, the self-concept repairs, accommodations carry the load the channel cannot.", phase: "recovery" },
    { id: "adulthood", time: "Lifelong", title: "The long adulthood", description: "The brain difference is lifelong (fluency under pressure and spelling remain the tell) but the prognosis of the well-supported disorder is genuinely good: medicine, engineering, literature; adult certification exists for professional-course accommodations.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Among the commonest neurodevelopmental conditions: broadly 5–15% of school-age children depending on definitions and cutoffs. Reading disorder (dyslexia) is the most frequent at ~5–10% by strict criteria; mathematics difficulties ~3–7%; writing difficulties frequent and often co-occurring. Boys are identified more often than girls: roughly 1.5–3:1 for reading; partly reflecting referral bias, with quietly struggling girls under-detected. A substantial share persists into adolescence and adulthood: dyslexia is lifelong even when reading becomes adequate, with fluency and spelling giving it away.",
    indianPrevalence: "Systematic prevalence data are thin; school- and clinic-based studies suggest roughly 3–10% of Indian school children have significant learning difficulties: likely under-detected rather than absent. The Indian twist is the language gap: many children are taught to read in English while their home language is Hindi, Marathi, Tamil, Bengali or another tongue. A first-generation English-medium cohort whose 'reading delay' reflects bilingual acquisition load, not dyslexia, in a large share of cases. Detection typically happens late (Standard 4 or beyond, when the textbook gap has widened into a canyon); board-exam accommodation requests and RPwD certifications have risen sharply since 2016, growing awareness and growing pressure together.",
    lifetimeRisk: "Onset by definition in the early school years; the reading difference is lifelong even as reading becomes adequate: fluency and spelling remain the tell into adulthood.",
    genderRatio: "Roughly 1.5–3:1 male-identified for reading; substantially referral bias rather than true prevalence; the quietly struggling girl is the system's blind spot.",
    ageOfOnset: "Early school years by definition, but the visible failure point in India is typically Standard 4 or later, because early-primary 'slow starts' are tolerated and Std 1–3 work can be passed on oral memory.",
    indianNotes: "One parent with a school history of 'hating reading' is a standard finding (heritability 40–70%); the RPwD certification rise since 2016 is the epidemiology of awareness, not only of disability.",
  },
  etiology: [
    { category: "genetic", factor: "The inherited wiring", details: "Strong heritability: reading-disorder estimates around 40–70%; family history in a parent or sibling the single most useful risk factor to ask about. Associated with variation in genes affecting neuronal migration and reading-circuit development (the DYX1C1/DCDC2/KIAA0319 lineages, names for the exam-oriented, not for clinical use)." },
    { category: "biological", factor: "The brain-and-biology tier", details: "Atypical left-hemisphere language-network organisation with reduced grey matter/activation in temporo-parietal reading areas (research findings, not diagnostic tests); prematurity, low birth weight, and prenatal alcohol or tobacco exposure raising risk. The core cognitive deficits: phonological processing, rapid naming speed, working memory, and for dyscalculia the approximate number system. DCD co-travels with dyslexia and ADHD (the soft-sign cluster)." },
    { category: "psychological", factor: "The theories that must be killed", details: "No causal role for parenting style or 'not trying': worth stating explicitly because it is the commonest home theory. Environmental deprivation (severe under-stimulation) can MIMIC the picture, and typical Indian middle-class screen time does not cause dyslexia. The drowning child who escapes into screens loses practice time, structure without moralising." },
    { category: "social", factor: "The amplifier", details: "The high-stakes, writing-heavy examination culture makes the disability VISIBLE and expensive, one bad board exam is a life event in India; the emotional career (humiliation → avoidance → internalised 'stupid' → adolescent depression or conduct problems) multiplies the academic damage." },
    { category: "environmental", factor: "The Indian trade-offs", details: "The language gap: English-medium instruction for children without English at home; the commonest false-positive source for a 'reading disorder' label (and, when reading fails in BOTH languages, a true signal). Large classrooms and late detection; remedial-educator scarcity outside metros. Protective: the rich oral storytelling culture (many dyslexic Indian children carry strong oral memory and narration), grandparents' vernacular literacy, and now legal accommodations." },
  ],
  symptomClusters: [
    {
      category: "1. The reading channel (dyslexia)",
      symptoms: ["Slow, effortful, word-by-word reading; guessing from first letters or context: 'was' read as 'saw'", "Letter/sound confusion (b–d, p–q) and letter-order reversions persisting beyond Std 1–2 norms", "Poor spelling that does not improve with repeated dictation: bizarre, non-phonetic spellings", "Reading-avoidance behaviour: 'hates' reading aloud, volunteers last, sudden stomach-aches on library day", "Comprehension intact when material is READ ALOUD. The diagnostic tell: the parent reads the chapter, the child answers everything"],
    },
    {
      category: "2. The writing channel (dysgraphia)",
      symptoms: ["Illegible, slow, cramped or sprawling handwriting; inconsistent letter sizes; hand pain", "Cannot copy from the board in time: finishes last, weeps over homework hours", "Spelling errors, missing words, fused sentences; oral answers dramatically better than written", "Avoids writing tasks, 'forgets' notebooks, prefers objective-type exams"],
    },
    {
      category: "3. The arithmetic channel (dyscalculia)",
      symptoms: ["Finger-counting in higher classes; addition/subtraction column errors from misaligned place value", "Multiplication tables refuse to stick despite drilling: '6 × 7' recalculated each time", "Poor number sense: quantity comparisons, estimation, money change, time-telling struggles", "Word-problems collapse (often compounded by the reading difficulty riding along)"],
    },
    {
      category: "4. The coordination co-traveller (DCD)",
      symptoms: ["Clumsiness: cycling learned late, ball games avoided, shoelaces and buttons difficult", "Handwriting affected (overlapping dysgraphia); cutlery and art/craft-class struggles", "Being picked last, being teased: the social layer that arrives before any clinical name"],
    },
    {
      category: "5. The emotional career (the symptom set clinicians miss)",
      symptoms: ["School avoidance, Sunday-evening dread, somatic complaints (stomach-ache, headache) on school mornings", "Self-statements ('I am dumb', 'I hate school') internalised by 9–10 years of age", "Secondary anxiety (especially exam-specific), then adolescent depression or acting-out", "Compensatory brilliance: exceptional oral skills, memory, drawing, verbal wit; the strengths that MISLEAD teachers ('he can't be dyslexic, he talks so well')"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The convergence logic",
      code: "No formula: persistence, gap and impairment",
      criteria: [
        "Difficulties learning and using academic skills, persisting for at least 6 months despite targeted intervention (DSM-5/ICD-11 logic, paraphrased).",
        "Skills substantially below age expectation AND out of proportion to overall ability: the unexpected-underachievement frame.",
        "Functional impairment in the classroom's currency: notebooks, homework hours, marks, board-copy speed.",
        "Exclusions cleared: intellectual disability, uncorrected vision or hearing, other neurological conditions, inadequate instruction, and language-of-instruction mismatch; the exclusion that does the most work in India.",
        "DSM-5 names the impairment domains (reading (accuracy, fluency, comprehension), written expression (spelling), number sense and mathematical reasoning) with severity specifiers; ICD-11 classifies developmental learning disorders similarly. Both systems have retired the rigid IQ-achievement discrepancy formula.",
      ],
      duration: "At least 6 months despite targeted intervention: persistence is the criterion, not the point spread.",
      indianNote: "The both-language rule lives inside the exclusion list: reading is tested in the vernacular too, not only English. A first-generation English-medium learner behind only in English does not meet the frame.",
    },
    {
      system: "The Indian assessment sequence",
      code: "Screen → clear → test → function → certify",
      criteria: [
        "Screening trigger: the teacher/parent observation of the gap; bright child, poor written output; do not wait for Std 6.",
        "Mimic clearance first: vision and hearing testing; school-attendance and instruction-quality history; language-of-instruction mapping (which languages at home, which script taught when, and reading tested in the vernacular too); careful developmental history (speech delay is frequent).",
        "Intelligence testing: an individually administered IQ battery (WISC-lineage and Indian adaptations exist for Indian children in multiple languages) to establish general ability at least average, and to map the child's STRENGTH profile for teaching.",
        "Achievement testing: standardised reading/spelling/arithmetic batteries normed for the child's language and class; fluency (speed) measured, not just accuracy: fluency is the sensitive marker.",
        "Process testing: the WHY behind the WHAT: phonological awareness, rapid naming, working memory, copying speed.",
        "Functional evidence: notebooks, exam papers, homework hours, teacher reports; the cheapest and most honest data in India: look at the actual written output and the board-copy speed.",
        "Comorbidity screen: ADHD symptoms (present in roughly a third), anxiety, depression, DCD items, with a home-behaviour questionnaire.",
      ],
      duration: "The sequence runs across one-to-two visits once triggered: waiting for Std 6 is the failure mode, not the standard.",
      indianNote: "The formal certificate: assessment by a multidisciplinary team as per the RPwD Act 2016 framework (typically a clinical/educational psychologist plus medical input) issued by the designated district/medical authority; schools use it to register the child, and boards use it to grant accommodations.",
    },
  ],
  severityScales: [
    {
      name: "DSM-5 severity specifiers",
      fullName: "Specific learning disorder severity (mild/moderate/severe)",
      measures: "Where the skill gap sits relative to age expectation and how much support the channel needs across school, home and examinations: named, not scored here.",
      ranges: [],
      indianNote: "For board purposes the specifier that decides is functional: the notebook, the homework hours, the copying speed; the evidence the designated authority actually reads.",
    },
    {
      name: "The fluency marker",
      fullName: "Reading fluency (speed) with the process panel",
      measures: "Fluency measured on achievement testing, not just accuracy: the sensitive marker; the process panel (phonological awareness, rapid naming, working memory, copying speed) supplies the WHY behind the WHAT.",
      ranges: [],
      indianNote: "Batteries normed for the child's language and class, and run in both languages where the instruction and home languages differ.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Poor schooling / attendance gaps", distinguishingFeatures: "History of missed instruction; the child catches up rapidly when instruction is restored.", keyDifferentiator: "The course: SLD persists despite instruction; the schooling gap closes with it." },
    { condition: "Language-of-instruction mismatch (English-medium, first-generation learner)", distinguishingFeatures: "Reading behind in English but at level in the home language.", keyDifferentiator: "Vernacular reading tested: age-appropriate Marathi (or the home tongue) with lagging English is acquisition load, not dyslexia; behind in BOTH is the signal." },
    { condition: "Intellectual disability", distinguishingFeatures: "Global, not channel-specific; adaptive functioning also below; full-scale IQ below ~70 with pervasive delays.", keyDifferentiator: "The profile: everything low together versus one narrow gate with the oral mind intact." },
    { condition: "ADHD (inattention)", distinguishingFeatures: "Attention lapses across ALL channels; performance improves with interest and stimulation.", keyDifferentiator: "A stimulant trial improves attention, not reading mechanics, and the two often coexist (roughly a third), so both get screened." },
    { condition: "Vision or hearing impairment", distinguishingFeatures: "The screening tests: corrected by glasses or ENT management.", keyDifferentiator: "Tested and cleared BEFORE any psychological label is written." },
    { condition: "Anxiety or depression in school", distinguishingFeatures: "Recent onset, situation-linked; earlier school years were normal.", keyDifferentiator: "The timeline: the learning disorder is developmental, never newly lost." },
    { condition: "Borderline intellectual functioning", distinguishingFeatures: "The near-miss: slightly below-average IQ with commensurate achievement.", keyDifferentiator: "The profile is consistent, not gapped: a different label, different counselling, the same kindness." },
  ],
  management: [
    { category: "psychotherapy", name: "Remediation — the direct skill work", description: "For reading: structured, systematic, multisensory phonics (the Orton–Gillingham lineage and its derivatives); letter-sound links taught incrementally with simultaneous seeing, saying and tracing; repeated oral reading with feedback for fluency; syllable patterns and morphology (affix families) later. For writing: handwriting fluency drills (never punishment copying, that worsens the relationship with the pencil), dictation with phonetic spelling instruction, typing introduced early as the parallel track (typing is often the liberation skill for Indian board exams and college). For arithmetic: number-sense work (concrete materials, number-line games, dot patterns), overlearned facts in small sets with retrieval practice, errorless money and time practice in daily life. For DCD: occupational therapy and task-specific practice (posture, grip, buttons, cycling), which beats generic 'motor drills'.", whenToUse: "From identification, one-to-one or small-group with a trained remedial educator.", indianContext: "The dose is the treatment: typically 2–4 sessions weekly for 1–2 school years; casual 'extra classes' are not remediation. Remedial educators concentrate in metros (₹500–1,500 per session approx 2026, often more; district towns may have none): legitimate alternatives: trained special educators at registered centres, school-based resource rooms where they exist, and structured parent-delivered remediation with a proper programme and periodic professional review: parent-mediated practice with correct materials beats an untrained tutor's well-meaning dictation." },
    { category: "lifestyle", name: "Accommodations — remove the penalty, not the standard", description: "Extra time in examinations (commonly 20% extra, board-sanctioned under the RPwD framework); a scribe/amanuensis where writing is the impaired channel, with the child trained to work WITH a scribe beforehand, a live skill, not a last-day arrangement; reduced writing load day-to-day (photocopied notes where copying is the bottleneck, homework capped by TIME not completeness, oral testing permitted in primary); exemption or substitution of the third language where boards allow (the classic Indian accommodation); seating, larger print and word-problems read aloud in lower classes where comprehension is intact but decoding is not; and the National Institute of Open Schooling (NIOS) route for Std 10/12: flexible subjects and pace, a genuine Indian solution for the child crushed by board rigidity.", whenToUse: "From identification, adjusted at every stage: the Std 4 problem is reading, the Std 10 problem is exam logistics, the college problem is note-taking and typing.", indianContext: "Accommodations require the RPwD certificate route via the designated authority; CBSE/ICSE/State boards all have standing circulars; the school's special-educator or counsellor files them. If the school 'does not believe in it', show the circular, not the argument." },
    { category: "pharmacotherapy", name: "Comorbidity treatment — the gating tier", description: "ADHD first among equals: behavioural parent training and medication where indicated (the ADHD course's tier); treating it often doubles the value of every remediation rupee, because an inattentive child cannot use remediation. Anxiety and depression: brief CBT, school liaison, family work, treating mood is treating learning. Speech-language therapy where comorbid language impairment rides along.", whenToUse: "At every review: the comorbidity screen runs with the assessment, not after it (ADHD present in roughly a third).", indianContext: "No medicine treats the learning disorder itself: any 'memory syrup/brain tonic' prescription is placebo commerce; a sentence worth saying verbatim to Indian parents." },
    { category: "psychotherapy", name: "The family and child conversations — medicine in words", description: "Name it to the child: 'your reading circuit is wired differently; smart brain, one narrow gate; we teach it differently, not louder.' Kill the three home theories explicitly: laziness, bad upbringing, and 'father was also weak in studies so fate' (the last contains a truth, heredity, wrapped in fatalism). Stop the counterproductive: public read-aloud shaming, extra nightly dictation, tuition multiplication. Feed the strengths deliberately (narration, art, sport, debate, practical intelligence): the child's identity needs a place of competence EVERY week. Homework hygiene: fixed short duration, parent as helper not examiner, teacher coordination to cap volume. Screen time is not the cause, but a drowning child who escapes into screens loses practice time: structure without moralising.", whenToUse: "The first consultation, and every one after it.", indianContext: "The grandfather who asks 'in our time everyone read fine' needs one sentence: in his time, the ones who couldn't read left school at Std 5 and farmed. They are not in the memory because the school threw them out, not because they didn't exist. The anxious mother doing nightly dictation needs the homework-cap conversation; siblings are briefed to stop the 'stupid' label at home." },
    { category: "lifestyle", name: "Follow-up across the school career", description: "Re-assess the gap annually; adjust the accommodations as demands change. Watch for the adolescent mood dip: the transition years (Std 8–10, the board year) are the danger zones.", whenToUse: "Annual review, with the transition years watched hardest.", indianContext: "Adulthood: Indian adults with unrecognised SLD land in careers selected by survival, not aptitude; a 25-year-old with exam-related panic and a childhood story of shame notebooks is worth screening; adult certification exists for professional-course accommodations too." },
  ],
  safety: {
    redFlags: [
      "Newly LOST skills: a child who read and wrote and then deteriorates: a learning disorder is developmental, never a loss of skills; new regression means a different, medical explanation and a different hunt",
      "The adolescent mood dip in Std 8–10 and the board year: the danger zones: screen for depression rather than filing it under exam stress",
      "Self-statements arriving on schedule: 'I am dumb', 'I hate school' internalised by 9–10 years: the identity injury is the second disease and it compounds monthly",
      "School avoidance with somatic complaints: stomach-ache and headache on school mornings, Sunday-evening dread: the emotional career in full flight",
      "The school ultimatum ('remove him or hold him back') and public read-aloud shaming: the iatrogenic tier converting a channel deficit into a clinic-referred disorder",
      "Any talk of self-harm or hopelessness: assessed the same week, not at the next review",
    ],
    urgentGuidance:
      "The order of operations: (1) vision and hearing tested before any psychological label is written; the cheapest cures first; (2) the both-language reading check before any dyslexia conclusion in an English-medium child; (3) the comorbidity screen (ADHD in roughly a third, anxiety, depression, DCD) run at the same visit, not deferred: it is the gate that decides whether remediation attaches; (4) the adolescent danger zone (Std 8–10) monitored for the mood dip with the same seriousness as the academic gap; (5) the RPwD certificate clock for the board years started by Std 8: the application precedes Std 9 registration, and the scribe is trained with the child for months, not days; (6) the family told in words at the first visit: not laziness, not upbringing, nobody's fault, and the tuition treadmill stopped before it multiplies the written work that is itself the problem.",
  },
  drugLinks: [],
  contentGaps: [
    "Methylphenidate: the comorbid-ADHD tier that gates remediation (this note's one real drug fact, from its case 1); has no KYP drug lesson; the comorbidity pharmacology is referenced to the ADHD course and taught here, route never invented.",
    "No medicine treats the learning disorder itself, and none of the twelve KYP drug lessons (the antidepressant set) is assigned a role by this note. The mood riders are treated with brief CBT, school liaison and family work, so drugLinks stays deliberately empty; the comorbid-depression pharmacology lives in the live Depressive Disorders course as a cross-reference.",
    "The 'brain tonic / memory syrup' commerce is documented as a refusal, not a route: the consultation that leaves it unchallenged fails the family's money and the child's years.",
    "Speech-language therapy for comorbid language impairment and occupational therapy for the DCD co-traveller have no KYP lessons. The disciplines are named here and their dose-and-method logic taught in the management section.",
  ],
  patientGuide: {
    whatIsIt:
      "Your child's mind is intact, and one academic channel (reading, writing or arithmetic) is running years behind what the mind, the effort and the schooling would predict. This is a specific learning disorder: a narrow, brain-based difficulty present from the early school years. It is nobody's fault, not laziness, not upbringing, not the school's failure. The child is bright in conversation, solves puzzles, remembers stories, and yet reads like a child three classes younger, or writes with aching slowness, or cannot hold the multiplication table despite months of tutoring. In India this label is legally actionable: the Rights of Persons with Disabilities Act 2016 recognises specific learning disabilities, which unlocks scribes, extra time and curriculum exemptions in school and board examinations.",
    whatCausesIt:
      "Inherited wiring, mostly: the condition runs strongly in families (reading-difficulty heritability around 40–70%); a parent with a school history of 'hating reading' is a standard finding. The genes involved affect how the reading circuit built itself. The brain's language machinery organised differently on the left side, where print is matched to sounds. Prematurity, low birth weight and prenatal alcohol or tobacco exposure raise the risk somewhat. What does NOT cause it: parenting style, 'not trying', or screen time, and it is not the eye: the problem sits upstream of the eye, in the sound-processing machinery.",
    symptoms:
      "Reading: slow, effortful, word-by-word reading; guessing from first letters ('was' as 'saw'); b–d and p–q confusion beyond Std 1–2; poor spelling that repeated dictation does not fix; 'hating' reading aloud, but understanding everything when read to. Writing: illegible or cramped handwriting, hand pain, cannot copy the board in time, oral answers far better than written. Arithmetic: finger-counting in higher classes, tables refusing to stick, struggles with money change and time. Coordination (the frequent companion): late cycling, avoided ball games, difficult buttons and shoelaces. The emotional layer: school-morning stomach-aches, 'I am dumb' self-talk by age 9–10, exam anxiety, and a mood dip in the adolescent years that needs watching, not dismissing.",
    treatment:
      "Three things, together. Remediation: a DIFFERENT method, not more tuition; structured multisensory phonics, taught step by step at the child's level, usually 2–4 sessions weekly for one to two school years; typing taught early as the parallel track. Accommodations: extra time (commonly 20%), a scribe where writing is the problem, reduced writing load, third-language exemption and the NIOS open-schooling option; the RPwD certificate unlocks these, and they remove the penalty, not the standard. Comorbidity treatment: ADHD above all (present in roughly a third), plus anxiety or mood if riding along. And the emotional plan: name the condition to the child in non-shaming words, stop public read-aloud shaming, feed the strengths weekly. There are NO medicines for the learning disorder itself. The 'brain tonic' shelf is commerce.",
    selfHelp: [
      "The read-aloud proof, weekly: you read the chapter, the child answers everything; repeat it so the family never forgets the mind is intact.",
      "Private reading practice with material the child can mostly already read; public read-aloud declined with the teacher, and the replacement job offered (the comprehension questions the child can win).",
      "Homework capped by time, not completeness; parent as helper, not examiner.",
      "One place of competence every week: narration, art, sport, debate: the identity's engine room. The rich Indian oral-storytelling culture is an asset here.",
      "Typing taught early: often the liberation skill for boards and college.",
      "The school file built: notebooks, exam papers, the homework-hours log; the cheapest and most honest evidence in the country.",
      "The strengths fed deliberately: exceptional oral skills, memory, drawing and verbal wit are common in these children; feed them, don't just admire them.",
    ],
    whenToSeekHelp: [
      "Any skill the child HAD and has LOST: words, reading, self-care: a learning disorder never loses skills; new regression needs medical assessment now",
      "School-morning somatic complaints becoming daily, or outright school refusal: the emotional career needs interrupting",
      "Any talk of self-harm or hopelessness: the same week, not the next review",
      "The school ultimatum (remove him or hold him back) needs the assessment and the school conference now",
      "Board years approaching with no certificate in place: the Std-8 clock: the application should precede Std 9 registration",
      "The adolescent who has stopped trying at everything, not just schoolwork: depression screening",
    ],
    indianResources: [
      "The government hospital psychology department or district diagnostic centre: assessment far cheaper than the metro private tier, sometimes free",
      "The RPwD certificate route: the designated district/medical authority (usually a medical board with a clinical/educational psychologist); the school's special educator or counsellor files the board paperwork",
      "The National Institute of Open Schooling (NIOS): the flexible Std 10/12 route with subjects and pace matched to the child",
      "The board circulars themselves (CBSE/ICSE/State): the documents that end the 'we don't believe in it' argument",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "Clinical classification follows the DSM-5/ICD-11 construct (persistence despite intervention, functional impairment, severity specifiers. The IQ-discrepancy formula retired); the legal-and-delivery layer is Indian: the Rights of Persons with Disabilities Act 2016 recognises specific learning disability as a benchmark disability category, with certification via the designated authority (usually a medical board including a clinical/educational psychologist), CBSE/ICSE/State-board accommodation circulars standing alongside, and the NIOS open-schooling route as the flexibility valve.",
    systemContext: "The detection bottleneck is Std 3–4, not the clinic: the child who will be your SLD patient is sitting in a classroom being called lazy right now. The highest-yield Indian intervention is teacher sensitisation (the 'bright child, bad notebook' pattern) and one screening question to parents: 'does he understand the chapter when YOU read it aloud?' A yes with poor independent reading is the two-minute triage. Detection typically happens at Standard 4 or beyond because early-primary 'slow starts' are tolerated and Std 1–3 work can be passed on oral memory; board-exam accommodation requests and RPwD certifications have risen sharply since 2016: awareness and pressure together.",
    programmeContext: "The RPwD 2016 legal channel: specific learning disability a recognised benchmark disability category; certification via the designated authority; the certificate unlocks board accommodations, NIOS flexibility and anti-discrimination protection. Schools increasingly have a process. The gap is uniform enforcement and teacher attitude; the special educator or counsellor who knows the law changes a school's whole decade.",
    costConsiderations: "India, approx 2026: full psycho-educational assessment ₹3,000–15,000 in metros (government hospital psychology departments and district diagnostic centres far cheaper, sometimes free); remedial sessions ₹500–1,500 each; occupational therapy ₹400–1,000 per session; the RPwD certificate route itself costs little but needs persistence. The tuition economy works against these children: redirect that budget toward remediation and accommodations.",
    culturalConsiderations: "The English-medium trap: assess in the home language; the single discipline that prevents both false certificates and false reassurance (behind only in English but at level in Marathi is acquisition load; behind in BOTH is the true signal). The tuition economy multiplies written work for a child whose problem IS written work, and hands them to teachers who read slowness as disrespect. Family systems: the grandfather's 'in our time everyone read fine' answered with one sentence (the ones who couldn't read left at Std 5 and farmed, the school threw them out, they didn't not exist); the anxious mother's nightly dictation capped; siblings briefed to stop the 'stupid' label at home. Adulthood: careers selected by survival rather than aptitude; a 25-year-old with exam-related panic and a childhood of shame notebooks is worth screening: adult certification exists for professional-course accommodations too.",
    patientCounselling: [
      "The laziness script: 'Effort that pays instantly is easy; effort that produces humiliation is avoided by every human, including you and me. His avoidance is the injury showing, not the cause of the problem.'",
      "The tuition truth: 'Tuition gives MORE of the teaching that already failed him; remediation gives a DIFFERENT method: phonics step by step, multisensory, at his level, with the writing load capped. That is why the results differ.'",
      "The naming script for the child: 'Your reading circuit is wired differently; smart brain, one narrow gate; we teach it differently, not louder.'",
      "The certificate script: 'The RPwD route unlocks extra time, a scribe and the third-language exemption; the law owes your child a measurement, not a punishment; the school files the paperwork and we walk it together.'",
      "The teacher script: 'Public read-aloud builds the opposite of confidence; the single most reliably humiliating practice in his week; let him answer the comprehension questions instead, the job he can win.'",
      "The heredity script: 'It runs in families; inherited wiring, not inherited fault. The useful part: it lets the father finally understand his own school years, and that changes how he speaks to his son.'",
    ],
  },
  decisionPath: {
    title: "The bright child with the bad notebook",
    nodes: [
      {
        id: "start",
        question: "A school-age child, bright in conversation, failing on paper. Where do you enter?",
        branches: [
          { label: "No assessment yet: the two-minute triage first", next: "triage-gate" },
          { label: "Basics noted, formal work-up due", next: "mimic-gate" },
          { label: "The school has issued an ultimatum", next: "crisis-path" },
          { label: "Std 10 or the board year is looming", next: "board-path" },
        ],
      },
      {
        id: "triage-gate",
        question: "Ask the parent the one screening question: 'Does he understand the chapter when you read it aloud?'",
        branches: [
          { label: "Yes, and independent reading is poor", next: "mimic-gate" },
          { label: "Behind ONLY in English", next: "language-gate" },
          { label: "Poor even when read aloud", next: "other-gate" },
        ],
      },
      {
        id: "language-gate",
        question: "The English-medium first-generation learner.",
        recommendation: "Test reading in the vernacular too: the both-language rule. At level in Marathi with English a year behind is bilingual acquisition load, not dyslexia: support and time, no label, no certificate. Behind in BOTH languages is the true signal. Proceed to the full work-up with the reading disorder genuinely on the table.",
      },
      {
        id: "other-gate",
        question: "Comprehension poor even when read aloud.",
        recommendation: "The channel-specific frame does not apply: hunt the global explanations with the same energy: intellectual disability, language disorder, deprivation, anxiety or depression. Certifying an SLD here would document the wrong thing; redirect the assessment.",
      },
      {
        id: "mimic-gate",
        question: "The exclusions before the label, then the formal tier.",
        recommendation: "Vision and hearing tested; attendance and instruction-quality history taken; language-of-instruction mapped (which languages at home, which script taught when); developmental history (speech delay frequent). Then: an individually administered IQ battery (the ability floor AND the strengths profile for teaching); achievement batteries normed for language and class with FLUENCY measured: the sensitive marker; process testing (phonological awareness, rapid naming, working memory, copying speed); and the functional evidence: notebooks, exam papers, homework hours, board-copy speed: the cheapest and most honest data in India.",
      },
      {
        id: "comorbidity-gate",
        question: "The comorbidity screen runs at the same visit: ADHD (roughly a third), anxiety, depression, DCD items, with a home-behaviour questionnaire.",
        branches: [
          { label: "ADHD riding underneath", next: "comorbidity-path" },
          { label: "Channels alone", next: "plan-gate" },
        ],
      },
      {
        id: "plan-gate",
        question: "Specific learning disorder confirmed. The triad:",
        branches: [
          { label: "Remediation: the direct skill work", next: "remediation-path" },
          { label: "Accommodations and the certificate clock", next: "rpwd-path" },
        ],
      },
      {
        id: "remediation-path",
        question: "The direct skill work.",
        recommendation: "Structured, systematic, multisensory phonics (Orton–Gillingham lineage), one-to-one or small-group, 2–4 sessions weekly for 1–2 school years by a trained educator: the dose is the treatment; casual extra classes are not remediation. Writing: fluency drills (never punishment copying), dictation with phonetic spelling instruction, typing early as the parallel track. Arithmetic: number-sense work with concrete materials, overlearned facts in small sets. DCD: occupational therapy, task-specific practice. Where metro educators are scarce: registered special-education centres, school resource rooms, structured parent-delivered programmes with periodic professional review.",
      },
      {
        id: "rpwd-path",
        question: "The certificate and the accommodations clock.",
        recommendation: "Certification via the designated authority (usually a medical board with a clinical/educational psychologist) under the RPwD Act 2016; the school's special educator or counsellor files the board paperwork. Unlocks: extra time (commonly 20%), a scribe where writing is the impaired channel (trained WITH the child, a skill pair rehearsed for months, because the accommodation works when the child has practised the format as much as the content) plus third-language exemption where boards allow and the NIOS route. Plan by Std 8; the certificate precedes Std 9 registration. If the school 'does not believe in it', show the circular, not the argument.",
      },
      {
        id: "comorbidity-path",
        question: "The gate that decides whether remediation attaches.",
        recommendation: "ADHD treated first among equals: behavioural parent training, medication where indicated (the ADHD course's tier): an inattentive child cannot use remediation, so this is not optional sequencing. Anxiety and depression: brief CBT, school liaison, family work, treating mood is treating learning. Speech-language therapy where language impairment rides along. And the emotional plan from the first visit: name the condition to the child in non-shaming words, kill the three home theories, feed the strengths weekly; the self-concept is the second disease.",
      },
      {
        id: "crisis-path",
        question: "The school ultimatum: remove him or hold him back.",
        recommendation: "The school shown the bright-in-oral/poor-in-print map: the ultimatum converted into an assessment appointment. Public read-aloud shaming stopped and replaced with the comprehension questions he can win; homework capped by time; the certificate route started; the counsellor or special educator enrolled as the school's ally. Punitive escalation is iatrogenic here. It manufactures the emotional career the treatment exists to interrupt.",
      },
      {
        id: "board-path",
        question: "The late-identified child facing boards in months.",
        recommendation: "Crisis triage, the Std 10 rescue: the RPwD certification expedited through the district medical board with the school's documentation; scribe permission per board circular with the computer-typing scribe option explored; scribe TRAINING sessions organised: practice exams dictating to the actual scribe format, answer-structure commands, time discipline; typing classes in parallel; writing load reduced through photocopied notes and note-sharing; exam-focused CBT for the anxiety; the study timetable honouring the oral-learning style (self-recorded revision audio). And the honest sentence to the school: five months is triage, not care. Std 8 is when the board plan should have started.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Labelling the first-generation English-medium learner dyslexic without vernacular reading testing",
      why: "The English-medium trap is the commonest Indian false-positive source. The reading delay reflects bilingual acquisition load, and the certificate documents a disability the child does not have.",
      correction: "The both-language rule: test reading in the home language too, at level in Marathi with English behind is acquisition load; behind in BOTH is the true signal.",
    },
    {
      mistake: "Missing the ADHD riding underneath",
      why: "Treating the reading while ignoring the attention spends every remediation rupee on a child who cannot attend to it: the comorbidity is present in roughly a third and gates the response.",
      correction: "The comorbidity screen runs WITH the assessment, not after it; the ADHD is treated (parent training, medication where indicated) alongside the triad.",
    },
    {
      mistake: "Skipping the vision and hearing basics before psychological testing",
      why: "The uncorrected refractive error or the glue ear explains the whole gap, and the expensive psycho-educational battery then measures the wrong organ.",
      correction: "The cheapest cures first: vision and hearing tested before any label is written.",
    },
    {
      mistake: "Mistaking borderline intellectual functioning for a learning disorder",
      why: "The near-miss: slightly below-average IQ with commensurate achievement looks like 'underachievement' until the profile is inspected; consistent, not gapped.",
      correction: "Read the profile, not the impression: the learning disorder is a GAP between intact ability and one failing channel; borderline functioning is everything evenly a little low: a different label, different counselling, the same kindness.",
    },
    {
      mistake: "Recommending 'more writing practice' for dysgraphia",
      why: "Punishment copying and nightly dictation compound the disability with the punishment: worsening the child's relationship with the pencil and the household's evening.",
      correction: "Fluency drills with a trained hand, homework capped by time, typing as the parallel track, and the load removed (photocopied notes, scribe logistics) rather than multiplied.",
    },
    {
      mistake: "Certifying at Std 10 board-eve with an untrained scribe",
      why: "The scribe introduced one month before boards is a half-measure. The child loses the examination to the unfamiliar format the accommodation was meant to remove.",
      correction: "The accommodation works when the child has practised the format as much as the content: the scribe pair trains together for months, the plan starts by Std 8, and the certificate precedes Std 9 registration.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define specific learning disorder in one sentence: persistent difficulty acquiring accurate or fluent reading, writing or arithmetic skills, at least 6 months despite intervention, below age expectation, out of proportion to overall ability, with the exclusions named.",
        "The three channels and their cores: phonological (dyslexia), graphomotor-and-spelling (dysgraphia), magnitude/number-sense (dyscalculia), with developmental coordination disorder the co-traveller.",
        "Why 'the eye problem' is the classic error: vision is normal; the deficit is upstream: the phonological channel; glasses fix the eye, phonics fixes the mapping.",
        "The both-language rule: what must be tested before dyslexia is concluded in an English-medium first-generation learner, and what each result pattern means.",
        "What the RPwD Act 2016 certificate unlocks in Indian boards, and which authority issues it.",
      ],
      practical: [
        "Demonstrate the two-minute triage question ('does he understand when you read it aloud?') and the notebook examination: the functional evidence: board-copy speed, homework hours, the gap between oral and written answers.",
        "Take the three-generation family history: the father who 'hated reading and managed by memorising' is the single most useful risk factor.",
      ],
      longAnswer: [
        "A 9-year-old with average intelligence and reading two years below class level: diagnosis, aetiology and management; the vignette that writes itself.",
        "Specific learning disabilities under the Rights of Persons with Disabilities Act 2016: recognition, certification and accommodations.",
        "Learning disorder versus intellectual disability: the differentiation essay (channel-specific gap versus global consistency; the borderline near-miss).",
      ],
    },
    neetPg: {
      highYield: [
        "THE CORE DEFICIT: dyslexia = phonological processing (sound segmentation and letter-sound mapping), NOT visual/eye disease; the classic exam trap.",
        "THE PREVALENCE: 5–15% of school-age children broadly; reading ~5–10% by strict criteria; mathematics ~3–7%; boys identified 1.5–3:1, partly referral bias with girls under-detected.",
        "THE INHERITANCE: reading-disorder heritability 40–70%; family history the most useful risk factor; the DYX1C1/DCDC2/KIAA0319 lineages for the exam-oriented.",
        "THE COMORBIDITY: ADHD in roughly one-third, and it gates remediation response (an inattentive child cannot use remediation).",
        "THE CLASSIFICATION MOVE: DSM-5 and ICD-11 have both retired the IQ-achievement discrepancy formula; persistence despite intervention plus functional impairment is the modern logic.",
        "THE REMEDIATION STANDARD: structured, systematic, multisensory phonics (Orton–Gillingham lineage); a different method, not a bigger dose; 2–4 sessions weekly, 1–2 school years.",
        "THE EMOTIONAL CASCADE of unidentified SLD: anxiety → avoidance → internalised 'stupid' by 9–10 → adolescent depression/conduct problems.",
        "THE INDIAN LEGAL ANCHOR: RPwD Act 2016 → certificate → board accommodations (extra time commonly 20%, scribe, third-language exemption; the NIOS route).",
        "THE PHARMACOTHERAPY ANSWER: none for SLD itself; 'brain tonics' are not medicine; methylphenidate treats the comorbid ADHD, never the reading.",
        "THE TESTING TELL: fluency (speed) is the sensitive marker on achievement testing; accuracy alone under-detects.",
      ],
      pyqConcepts: [
        "The core-deficit MCQ with the visual-acuity distractor: the perennial.",
        "The vernacular-testing stem (Std 3 English-medium first-generation learner): the Indian assessment discipline as a single-best-answer.",
        "The comorbidity stem: the damage-multiplier MCQ (ADHD, roughly a third).",
        "The RPwD accommodation stem: extra time, scribe, third-language exemption versus the 'automatic promotion' distractors.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "An 8-year-old in an English-medium school, the school threatening removal or detention: bright in discussion, three weeping hours of homework nightly, word-by-word guessing reading, 'I am the dumb one of the class', and a father who admits he hated reading and survives by memorising; the work-up that tests BOTH languages (English fluency 2.5 standards below, Hindi 2 below), the phonological profile (cannot segment 'elephant', slow rapid naming), the ADHD screen positive but the academic pattern predating it, and the one-year outcome of phonics three times weekly plus accommodations plus treated ADHD: reading one standard below, the 'dumb' self-talk gone; the both-language rule, the comorbidity gate and the emotional plan as the three marks-earning moves.",
        "A 15-year-old Std 10 student referred 'as late as possible': brilliant oral answers crashing in written exams, writing speed one-third of class average, three-hour board papers five months away, dysgraphia flagged informally in Std 6 but never certified, a DCD history (late cycling, poor craft-class cutting); the expedited RPwD certification through the district medical board, the scribe permission per board circular with the typing-scribe option, the scribe-training sessions in the real format, three sessions of exam-focused CBT, the oral-learning timetable with self-recorded revision audio, and the outcome 20 percentage points above the mock trajectory: the triage-not-care honesty, the scribe-as-skill-pair, and the accommodations-finally-measured-knowledge reasoning.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Dyslexia's core is phonological, not ocular. The eye is normal.",
        "ADHD co-occurs in roughly one-third and gates remediation.",
        "Persistence at least 6 months despite intervention is the diagnostic anchor.",
        "Structured multisensory phonics (Orton–Gillingham lineage) is the remediation standard.",
        "RPwD Act 2016: SLD recognised; extra time, scribe, third-language exemption in boards.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The detection bottleneck is Std 3–4, not the clinic: teacher sensitisation (the bright-child-bad-notebook pattern) and the one parent question are the highest-yield interventions you own.",
        "The tuition-economy redirect is clinical work: the budget moves from multiplying written work to remediating the channel; the family hears it as money advice and experiences it as treatment.",
        "The adult presentation exists: exam panic plus a shame-notebook childhood in a 25-year-old is worth screening; adult certification exists for professional-course accommodations.",
        "The scribe is a skill pair trained together for months. The board-eve introduction is a half-measure that loses the exam the accommodation was meant to save.",
        "The emotional plan is not decoration: the self-concept is the second disease, and the plan that omits it treats half the child. The prognosis predictor is self-esteem and skills intact at adulthood, not the size of the reading gap.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The 'lazy' boy of Standard Four",
      presentation: "An eight-year-old carrying his school's ultimatum (bright in every discussion, drowning in every notebook) and a father who finally admitted he had never really read either.",
      initialPresentation: "An 8-year-old boy in an English-medium Nagpur school, brought by his parents after the school threatened to remove him or hold him back. Teachers described a child bright in discussion but 'lazy in written work'; homework took three weeping hours each evening; he read the textbook word-by-word with guessing, the notebooks were cramped and incomplete, and he had begun saying 'I am the dumb one of the class.'",
      history: "Father an engineer who admitted, unprompted, that he too had hated reading and managed only because he memorised: the family-history flag in a single sentence. Developmental history explored with speech milestones (speech delay is frequent in this population); no seizures, no regression, no lost skills; the academic trouble visible from early primary years and widening as print demand rose.",
      examination: "Vision and hearing normal. Verbal comprehension above average; reading fluency in English 2.5 standards below; reading fluency in Hindi (his home language) 2 standards below: behind in BOTH languages; phonological awareness weak (could not segment 'elephant'); rapid naming slow. ADHD screen positive (teacher-rated inattention high), though the academic pattern predated and exceeded the attention story.",
      diagnosis: "Specific learning disorder with impairment in reading and written expression (moderate), with comorbid ADHD (inattentive presentation) and secondary school-related anxiety.",
      management: "The school shown the bright-in-oral/poor-in-print map; the read-aloud punishment replaced with private reading practice. Structured phonics remediation three times weekly with a trained remedial educator. Accommodations: photocopied notes, homework capped at 40 minutes by teacher agreement, oral testing permitted. ADHD treated with parent training plus morning methylphenidate on school days with weight and blood-pressure monitoring; the mother coached on the aloud-comprehension test so she could prove to herself the mind was intact.",
      outcome: "One year later: reading at one standard below (from 2.5), notebooks legible, the 'dumb' self-talk gone, and the best subject declared 'maths, when the teacher reads out the problems'.",
      teachingPoints: [
        "The two-minute parent triage question: 'does he understand when you read it aloud?': reframed the family's theory in one evening.",
        "Both-language testing prevented the pure-English misdiagnosis: behind in English AND Hindi was the true signal, not the English-medium excuse.",
        "Treating the ADHD was not optional sequencing: remediation does not attach to an inattentive child.",
        "The emotional plan is not decoration: the self-concept was the second disease, and it was treated by name.",
      ],
    },
    {
      title: "The girl who needed the scribe",
      presentation: "A Std 10 student, five months from boards: brilliant oral answers, one-third of her class's writing speed, no certificate, no scribe, and three-hour papers waiting.",
      initialPresentation: "A 15-year-old Std 10 student in Kochi, referred by her school counsellor for assessment 'as late as possible': severe dysgraphia (brilliant oral answers, marks crashing in written exams) first flagged informally in Std 6, never certified, and now facing the board examination in five months with a writing speed one-third of her class average against papers demanding three hours of continuous writing.",
      history: "Oral brilliance with written collapse: the graphomotor channel identified late and managed by endurance. Developmental history positive for DCD markers: cycling learned late, poor cutting in craft class. No reading-comprehension complaints; the anxiety arriving with the board deadline.",
      examination: "Above-average intelligence; reading comprehension intact; spelling impaired; graphomotor speed and processing speed markedly below norms: the writing channel isolated and measured.",
      diagnosis: "Specific learning disorder with impairment in written expression (severe dysgraphia), with comorbid developmental coordination disorder and secondary examination anxiety.",
      management: "Crisis triage: the RPwD certification route expedited through the district medical board with the school's documentation; scribe permission obtained per board circular with the computer-typing scribe option explored; scribe TRAINING sessions organised: practice exams dictating to the actual scribe format, answer-structure commands, time discipline; typing classes begun in parallel; the writing load reduced through photocopied notes and a note-sharing classmate arrangement; the anxiety treated with three sessions of exam-focused CBT and a study timetable honouring her oral-learning style (self-recorded revision audio).",
      outcome: "Boards written with the scribe and extra time: scoring 20 percentage points above her mock-exam trajectory and securing her stream of choice.",
      teachingPoints: [
        "Late identification happens; the rescue still works, but five months is triage, not care. Std 8 is when the board plan should have started.",
        "The scribe is a SKILL pair: the child and the scribe train together, in the exam's format, for months.",
        "The accommodations did not lower her standard; they finally measured her knowledge instead of her hand.",
        "The school counsellor who pushed the late referral deserved the credit, one staff member who knows the law changes a school's whole decade.",
      ],
    },
  ],
  clinicalPearls: [
    "Unexpected underachievement is the signature: the gap between the intact oral mind and the failing printed page defines the disorder.",
    "Phonological, not visual: reading fails upstream of the eye; glasses fix nothing here; phonics teaching fixes the mapping.",
    "Test reading in BOTH languages: behind only in English is bilingual acquisition load; behind in both is the true signal. The discipline that prevents false certificates and false reassurance alike.",
    "'Does he understand when you read it aloud?': the two-minute triage question of Indian practice.",
    "ADHD rides underneath roughly a third of cases, and an inattentive child cannot use remediation; treat the gate first.",
    "The triad: remediation, accommodations, comorbidity treatment; nothing else has evidence, everything else is sold.",
    "The dose is the treatment: 2–4 sessions weekly for 1–2 school years of structured phonics; casual extra classes are not remediation.",
    "Accommodations remove the penalty, not the standard, and they work when rehearsed: the scribe pair trains together for months.",
    "RPwD Act 2016: the certificate unlocks extra time (commonly 20%), the scribe, the third-language exemption and the NIOS route; the Indian board exam's legal answer.",
    "No medicine treats a learning disorder: 'brain tonics' are commerce; methylphenidate treats the comorbid ADHD, never the reading.",
    "The emotional career is the second disease: 'I am stupid' internalised by 9–10, adolescent depression in the Std 8–10 danger zone.",
    "The prognosis of a well-supported learning disorder is genuinely good: medicine, engineering, literature; the predictor is self-esteem and skills intact at adulthood.",
    "DSM-5 and ICD-11 have both retired the IQ-achievement discrepancy formula: persistence despite intervention plus functional impairment is the modern logic.",
  ],
  highYieldSummary: [
    "Definition: specific learning disorder = persistent difficulty acquiring accurate or fluent reading, writing or arithmetic skills, at least 6 months despite intervention, below age-normative expectation, out of proportion to overall ability (unexpected underachievement: the IQ intact, one channel failing), with intellectual disability, sensory problems, neurological conditions, inadequate instruction and language-of-instruction mismatch excluded. Onset in the early school years; never a newly lost skill.",
    "Epidemiology and genetics: 5–15% of school-age children broadly; reading disorder ~5–10% by strict criteria; mathematics ~3–7%; writing difficulties frequent and co-occurring; boys identified 1.5–3:1 (referral bias, girls under-detected); heritability 40–70% with the parental 'hated reading' history the most useful risk factor; dyslexia lifelong with fluency and spelling the tell; Indian school-based estimates 3–10%, under-detected, with detection typically at Standard 4 or beyond.",
    "Mechanism: the sound-splitting machine (the phonological channel runs grainy (segmentation effortful, rhymes late, rapid naming slow) so print blurs with normal eyes); the number-line that never calibrated (the approximate number system failing, arithmetic as a memorised poem in an unknown language); the slow scribe (the motor-program juggling act dropping balls, the writing load eating the ideas); and the scar (the identity injury that outlasts the academic deficit). Wiring: atypical left-hemisphere language-network organisation, reduced temporo-parietal grey matter/activation, the DYX1C1/DCDC2/KIAA0319 migration lineages; research findings, never diagnostic tests.",
    "Clinical: the reading channel (slow word-by-word reading, first-letter guessing, 'was' as 'saw', b–d/p–q confusion beyond Std 1–2, bizarre spelling, library-day stomach-aches, comprehension intact when read aloud, the diagnostic tell); the writing channel (illegible, slow, painful handwriting, board-copy failure, oral answers dramatically better than written); the arithmetic channel (finger-counting in higher classes, tables that refuse to stick, place-value misalignment, money and time struggles); DCD the co-traveller; and the emotional career: school avoidance, somatic mornings, 'I am dumb' by 9–10, adolescent depression or conduct problems in the Std 8–10 danger zone.",
    "Diagnosis: clear the four great mimics (poor schooling, intellectual disability, sensory problems, language exposure, in India the English-medium first-generation trap, answered by the both-language rule); then individually administered IQ, achievement batteries normed for language and class with FLUENCY measured (the sensitive marker), process testing (phonological awareness, rapid naming, working memory, copying speed), functional evidence (notebooks, exam papers, homework hours), and the comorbidity screen (ADHD in roughly a third, anxiety, depression, DCD). Certification for boards: multidisciplinary assessment per the RPwD Act 2016 framework, issued by the designated district/medical authority. The discrepancy formula is retired in both DSM-5 and ICD-11.",
    "Management, the triad: (1) remediation: structured, systematic, multisensory phonics (Orton–Gillingham lineage), 2–4 sessions weekly for 1–2 school years, one-to-one or small-group) a different method, not a bigger dose; handwriting fluency drills (never punishment copying), typing early; number-sense work for arithmetic; occupational therapy for DCD; (2) accommodations: extra time (commonly 20%), a trained scribe, homework capped by time, photocopied notes, third-language exemption, the NIOS route; remove the penalty, not the standard; (3) comorbidity treatment: ADHD first among equals (parent training, medication where indicated), brief CBT for the mood riders, speech-language therapy where indicated. No pharmacotherapy exists for the disorder itself: the brain-tonic commerce refused by name.",
    "The Indian tier: the detection bottleneck is Std 3–4, not the clinic; teacher sensitisation and the two-minute triage question the highest-yield interventions; the both-language discipline as the false-positive firewall; the tuition economy redirected toward remediation; costs approx 2026: assessment ₹3,000–15,000 in metros (government and district tiers far cheaper, sometimes free), remediation ₹500–1,500 per session, occupational therapy ₹400–1,000; the RPwD 2016 certificate route costing little but needing persistence, with the board plan starting at Std 8 and the certificate preceding Std 9 registration; NIOS as the flexibility valve; adulthood: careers selected by survival screened for in the exam-panic clinic, with adult certification available for professional courses. The prognosis of the well-supported disorder is genuinely good: the child who reaches adulthood with self-esteem and skills intact.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "sld-quiz-1",
      question: "The core cognitive deficit in developmental dyslexia:",
      options: ["Defective visual acuity", "Phonological processing — sound segmentation and letter-sound mapping", "Reduced overall intelligence", "Poor motivation"],
      correctIndex: 1,
      explanation: "The phonological channel, upstream of the eye: vision is normal, and the 'eye problem' is the classic distractor.",
      afterSectionId: "symptoms",
    },
    {
      id: "sld-quiz-2",
      question: "A Std 3 first-generation English-medium child reads a year below level in English. Before diagnosing dyslexia you must:",
      options: ["Start phonics immediately", "Test reading in the home/vernacular language as well", "Prescribe glasses", "Repeat the same test after 6 months"],
      correctIndex: 1,
      explanation: "The both-language rule: vernacular testing separates bilingual acquisition load from dyslexia — the Indian assessment discipline.",
      afterSectionId: "diagnosis",
    },
    {
      id: "sld-quiz-3",
      question: "The comorbidity that most commonly multiplies academic damage in learning disorders:",
      options: ["Epilepsy", "ADHD", "Asthma", "Enuresis"],
      correctIndex: 1,
      explanation: "Present in roughly a third; untreated, it gates remediation response — an inattentive child cannot use remediation.",
      afterSectionId: "differential",
    },
    {
      id: "sld-quiz-4",
      question: "The best-evidenced remediation approach for reading disorder:",
      options: ["More after-school tuition in the same method", "Structured, systematic, multisensory phonics", "Vision exercises", "Repeated public reading-aloud"],
      correctIndex: 1,
      explanation: "The Orton–Gillingham lineage: a different method, not a bigger dose — and the dose (2–4 sessions weekly, 1–2 school years) is part of the prescription.",
      afterSectionId: "management",
    },
    {
      id: "sld-quiz-5",
      question: "Under RPwD Act 2016 certification, an Indian board may grant:",
      options: ["Nothing — SLD is not recognised", "Extra time, a scribe and third-language exemption (per board circulars)", "Automatic promotion without exams", "Only NIOS admission"],
      correctIndex: 1,
      explanation: "SLD is a recognised benchmark disability category; the accommodations are examination-logistics changes, not standard reductions — plus the NIOS route and anti-discrimination protection.",
      afterSectionId: "indian-practice",
    },
    {
      id: "sld-quiz-6",
      question: "An 11-year-old with dysgraphia, identified late, faces boards next year. The correct pair of actions:",
      options: ["Certificate route + a trained scribe with practice exams", "Nightly extra writing practice + no certificate", "Withdrawal from school + no exams", "A brain-tonic course + dictation tutoring"],
      correctIndex: 0,
      explanation: "Accommodations work when rehearsed: the scribe pair trains together, and the certificate precedes the Std 9 registration deadline.",
      afterSectionId: "exam-lens",
    },
  ],
  activeRecallQuestions: [
    { question: "Define specific learning disorder using the unexpected-underachievement frame, and list the exclusions that must be cleared first.", answer: "THE DEFINITION: persistent difficulty acquiring accurate or fluent academic skills in one channel (reading (accuracy, fluency, comprehension), written expression (spelling) or number sense/mathematical reasoning) running far below what the child's overall intelligence, effort and schooling would predict, present from the early school years, causing functional impairment (notebooks, homework hours, marks), and persisting at least 6 months despite targeted intervention. THE EXCLUSIONS, in order: intellectual disability (global, not channel-specific; adaptive functioning also below; full-scale IQ below ~70 with pervasive delays); uncorrected vision or hearing impairment (the screening tests, before any psychological label); other neurological conditions; inadequate instruction (attendance and teaching-quality history); and language-of-instruction mismatch, in India, the English-medium first-generation trap, answered by the both-language rule: reading tested in the vernacular too, because behind-only-in-English with age-appropriate Marathi is acquisition load, and behind in BOTH languages is the true signal. The diagnostic spine: the gap between the intact oral mind and the failing printed page; the parent reads the chapter, the child answers everything.", topic: "Foundations" },
    { question: "Write the signature of dyslexia, dysgraphia and dyscalculia as they appear in an Indian notebook, one line each.", answer: "DYSLEXIA: the reader who cannot read the text; slow, effortful, word-by-word reading with first-letter guessing ('was' as 'saw'), b–d/p–q confusion persisting beyond Std 1–2, bizarre non-phonetic spelling that repeated dictation never fixes, with comprehension intact when the material is read aloud (the diagnostic tell). DYSGRAPHIA: the writer who cannot fill the page; illegible, cramped or sprawling handwriting with inconsistent letter sizes, hand pain, board-copying that finishes last, missing words and fused sentences, oral answers dramatically better than written. DYSCALCULIA: the counter who cannot keep the columns, finger-counting in higher classes, place-value misalignment in addition/subtraction, multiplication tables recalculated each time ('6 × 7' anew every week), money-change, time-telling and estimation struggles, word-problems collapsing further when reading rides along. The Indian classroom mnemonic: the three notebooks; the reader who can't read the text, the writer who can't fill the page, the counter who can't keep the columns; with DCD the fourth co-traveller (the clumsy athlete) showing in cycling, buttons and craft class.", topic: "Clinical practice" },
    { question: "Why is 'does the child understand the chapter when read aloud?' the highest-yield screening question in Indian practice?", answer: "Because it isolates the exact function the diagnosis turns on, in under two minutes, at zero cost, in any language. A YES with poor independent reading means the comprehension machinery (vocabulary, reasoning, inference, the oral mind) is intact while the print-decoding channel is failing: that is the unexpected-underachievement signature, and it converts the family's dominant theory (laziness) into the correct one (a channel deficit) in a single evening; it also identifies the child who needs the full assessment sequence rather than reassurance. A NO (comprehension poor even when read aloud) rules the channel-specific frame OUT and redirects the hunt to the global explanations (intellectual disability, language disorder, deprivation, anxiety or depression). And in the English-medium first-generation child it sets up the both-language discipline: the same question and passage run in the vernacular, separating bilingual acquisition load from dyslexia. One question, three triage directions, which is why teacher sensitisation around it (the 'bright child, bad notebook' pattern) is the highest-yield intervention in a country where the detection bottleneck is Standard 3–4, not the clinic.", topic: "Indian practice" },
    { question: "What must be tested before concluding dyslexia in an English-medium first-generation learner, and what does each result pattern mean?", answer: "Reading in the home/vernacular language, not only English: plus the basics that precede any label: vision, hearing, attendance and instruction quality. THE PATTERNS: (1) behind ONLY in English but at level in the home language (say Marathi); bilingual acquisition load, not dyslexia: the reading delay reflects the double load of acquiring literacy in a second language without home support; support and time, no label, no certificate. (2) Behind in BOTH languages: the true signal: a channel deficit that crosses scripts, and the reading disorder is genuinely on the table for the full work-up. (3) At level in English but behind in the vernacular (the rarer mirror), still a language-exposure pattern, usually the tongue the child reads least. The rule's value is symmetrical: it prevents false certificates (the first-generation learner mislabelled dyslexic and certificated for a difference that closes with support) and false reassurance (the true dyslexic excused as 'English-medium problem' and left to the emotional career). The discipline costs one extra passage and decides the child's legal and educational decade.", topic: "Diagnosis" },
    { question: "List the triad of management and name the evidence-backed remediation method for reading, with its dose.", answer: "THE TRIAD: remediation + accommodations + comorbidity treatment; nothing else has evidence; everything else is sold. (1) REMEDIATION: structured, systematic, multisensory phonics in the Orton–Gillingham lineage and its derivatives; letter-sound links taught incrementally with simultaneous seeing, saying and tracing; repeated oral reading with feedback for fluency; syllable patterns and morphology later; for writing, fluency drills (never punishment copying), dictation with phonetic spelling instruction, typing introduced early; for arithmetic, number-sense work with concrete materials and overlearned facts in small sets. THE DOSE (part of the prescription, not a detail): one-to-one or small-group, typically 2–4 sessions weekly for 1–2 school years by a trained remedial educator; casual 'extra classes' are not remediation. (2) ACCOMMODATIONS: extra time (commonly 20%), a scribe where writing is the impaired channel (trained with the child (a skill pair, not a last-day arrangement), homework capped by time, photocopied notes, the third-language exemption and the NIOS route) remove the penalty, not the standard. (3) COMORBIDITY TREATMENT: ADHD above all (roughly a third; behavioural parent training, medication where indicated), brief CBT for anxiety and depression, speech-language therapy where language impairment rides along. No medicine treats the disorder itself. The brain-tonic commerce is refused by name.", topic: "Management" },
    { question: "What does the RPwD Act 2016 certificate unlock in Indian boards, and when should the application clock start?", answer: "THE UNLOCKS: specific learning disability is a recognised benchmark disability category under the Rights of Persons with Disabilities Act 2016; certification is via the designated authority (usually a medical board with a clinical/educational psychologist), and the certificate unlocks: extra time in board examinations (commonly 20%, board-sanctioned), a scribe/amanuensis where writing is the impaired channel (per board circulars, with the typing-scribe option increasingly explored), exemption or substitution of the third language where the boards allow (the classic Indian accommodation), the National Institute of Open Schooling (NIOS) route for Std 10/12 with flexible subjects and pace, registration of the child as 'child with disability' at school (benchmark-level decisions mattering mainly for severe cases), and legal protection against discrimination. CBSE/ICSE/State boards all run standing circulars; the school's special educator or counsellor files the paperwork, if the school 'does not believe in it', the family shows the circular, not the argument. THE CLOCK: the board plan starts at Std 8; certificate in place by Std 9 registration, scribe training begun early, typing running as the parallel skill, third-language exemption applied for, the school's written file built. A scribe introduced one month before boards is a half-measure: the accommodation works when the child has practised the format as much as the content.", topic: "Indian law" },
    { question: "Recite the emotional career of an unidentified learning disorder and name the interruption points.", answer: "THE CAREER: the gap widens in the early primary years while the oral mind keeps shining (the compensatory brilliance that misleads teachers, 'he can't be dyslexic, he talks so well'); the humiliation layer builds: private scolding, public read-aloud failures, red-ink workbooks, relative comparisons; avoidance and somatics arrive. Sunday-evening dread, stomach-ache and headache on school mornings, library-day ailments, notebook 'forgetting'; the verdict is internalised: 'I am dumb', 'I hate school', installed by 9–10 years of age; and the adolescent endpoint lands in the Std 8–10 danger zone: secondary anxiety (especially exam-specific), then depression or acting-out/conduct problems. THE INTERRUPTION POINTS: (1) early identification; the Std 3–4 detection the teacher sensitisation exists to trigger; (2) the right method: structured multisensory phonics that actually moves the channel, so effort finally pays; (3) the accommodations: extra time, scribe, reduced load: the penalty removed so the child competes on knowledge, not handwriting speed; (4) the strengths channel: narration, art, sport, debate: a place of competence every week, because the identity needs somewhere to win; and (5) the naming conversation: 'your brain is built differently, like left-handedness; reading needs a different route, not more scolding', which converts the child's theory of self from 'stupid' to 'wired differently'. The plan that omits the emotional component treats half the child: the academic skill is fixed by remediation, but the identity injury outlasts it unless interrupted.", topic: "Clinical practice" },
    { question: "Which comorbidity most commonly multiplies the damage in learning disorders, and why does its treatment gate the remediation response?", answer: "ADHD: present in roughly one-third of learning-disorder cases. WHY IT MULTIPLIES: attention lapses degrade every channel at once (not the channel-specific pattern), so the inattentive child misses the very instruction the remediation delivers; homework hours lengthen further; the impulsivity feeds the classroom behaviour labels that hide the learning problem; and the failure loop compounds: each remediation session that cannot be attended to produces another experience of failure, deepening the avoidance. WHY ITS TREATMENT GATES: remediation is a learning process. It requires the child to be present, engaged and repeating; treating the ADHD (behavioural parent training plus medication where indicated, the ADHD course's tier) roughly doubles the value of every remediation rupee, because an attentive child finally absorbs the phonics the educator is teaching. The clinical sequencing law: screen for ADHD in every learning-disordered child (a home-behaviour questionnaire at the assessment visit, not deferred), and treat it alongside (never after) the triad. The corollary the examiners love: a stimulant trial improves attention, not reading mechanics, which is both the differential point (against calling an attention problem dyslexia) and the reason both get treated when both are present.", topic: "Comorbidity" },
  ],
  faqs: [
    { question: "His eyes were tested and they are fine, so why can't he read?", answer: "Because reading happens in the language-sound machinery of the brain, not the eye. His difficulty is in splitting words into sounds and mapping letters onto them: an upstream wiring difference. Glasses fix the eye; phonics teaching fixes the mapping." },
    { question: "Is he lazy? He finishes his video games fast enough.", answer: "No. Effort on games with instant reward and no writing is easy for him; effort that produces humiliation is avoided by every human, including you and me. His avoidance is the injury showing, not the cause of the problem." },
    { question: "Will he grow out of it?", answer: "The reading becomes manageable with the right teaching (many dyslexic adults read well) but the brain difference is lifelong, which is why fluency under pressure and spelling remain the tell. What he can absolutely outgrow is the 'stupid' label. What he should never have to outgrow is the accommodations he needs." },
    { question: "We tried tuition for two years: why didn't it help?", answer: "Tuition gives MORE of the same instruction that already failed him. Remediation gives a DIFFERENT instruction: phonics taught step by step, multisensory, at his level, and it caps the writing load instead of multiplying it. That is why the results differ." },
    { question: "Did we cause it by putting him in English-medium too early?", answer: "If he is behind ONLY in English but reads his mother tongue at level, then the school route created a language-exposure gap that closes with support. If he is behind in both languages, the school did not cause it. The wiring did. We test both languages before answering this question, not after assuming it." },
    { question: "The teacher makes him read aloud to 'build confidence': is that right?", answer: "Public read-aloud for a dyslexic child builds the opposite of confidence; it is the single most reliably humiliating practice in his week. Reading practice belongs private, with a parent or educator, with material he can mostly already read. Give the teacher the replacement job: let him answer the comprehension questions, which he can win." },
    { question: "What exactly does the disability certificate get us?", answer: "Three things in boards: extra time (commonly one-fifth more), a scribe where writing is the problem, and exemption or substitution of the third language where allowed; plus the NIOS open-schooling option and legal protection against discrimination. The route runs through the designated medical/assessment authority, and the school files the board paperwork." },
    { question: "Are there any medicines or brain tonics?", answer: "No. There are none, and the syrups sold for this are commerce. The only medicines that ever help are for OTHER conditions riding along, like ADHD, which we screen for in every child." },
    { question: "Will she manage college and a job?", answer: "With typing, accommodations and a self-aware choice of stream: yes, and often brilliantly. Courts, engineering, medicine, design, business: dyslexic graduates populate all of them. The predictor of adult outcome is not the severity of the reading gap; it is whether the child reached adulthood with self-esteem and skills intact." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "American Psychiatric Association — DSM-5/DSM-5-TR specific learning disorder construct (logic paraphrased; criteria not reproduced)" },
      { source: "WHO — ICD-11 developmental learning disorder framing" },
      { source: "Rights of Persons with Disabilities Act 2016 (India) — benchmark disability recognition, certification and education provisions, with CBSE/ICSE/State-board accommodation circulars" },
      { source: "Blank R et al. (European Academy of Childhood Disability) — developmental coordination disorder: definition, diagnosis and management" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.2 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Shaywitz SE et al. — the neurobiology of dyslexia and the Yale long-term cohort studies (persistence, compensation, adult outcomes)" },
    ],
    reviews: [
      { source: "Snowling MJ & Hulme C — the science of reading and dyslexia; the phonological-deficit consensus" },
      { source: "National Mathematics Advisory Panel & Butterworth B — the number-sense/magnitude foundations of dyscalculia" },
      { source: "International Dyslexia Association / Orton–Gillingham-derived programme literature — structured multisensory language teaching as the remediation standard" },
      { source: "Indian school- and clinic-based SLD prevalence studies (the 3–10% range); Sinha and colleagues' Indian reading-assessment lineages; NIOS documentation; metro remedial-education cost realities (approx 2026)" },
    ],
    patientResources: [
      { source: "The two-minute triage question card — 'does he understand the chapter when you read it aloud?' — the instrument this course hands to every Indian teacher and parent" },
      { source: "The RPwD certificate route and the board circulars — the documents the family shows when a school 'does not believe in it'; the National Institute of Open Schooling (NIOS) as the flexibility valve" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the channel that fails while the mind stays intact, the read-aloud proof, the triad, the certificate route, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The channels and their cores, the mimic ladder, the both-language rule, the triad, the RPwD provisions.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "32 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything: the assessment sequence, the board engineering clock, the family scripts, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The signature, the channels, the prevalence and inheritance arithmetic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define the disorder through the unexpected-underachievement frame and name all four channels cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The sound-splitting machine, the uncalibrated number-line, the slow scribe, the scar.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain in plain words why the eyes are normal and the reading still fails, and why the method, not the tuition, changes the trajectory." },
    { number: 3, title: "Clinical Practice", description: "The channel signatures, the mimic ladder, the assessment sequence, the triad.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the both-language rule, the notebook evidence and the triad without looking." },
    { number: 4, title: "Indian Context", description: "The detection bottleneck, the English-medium trap, the certificate route, the board engineering.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the two-minute triage question and the Std-8 board-planning clock to a family in one consultation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the 9-year-old vignette essay and the RPwD short note cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.2 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "American Psychiatric Association — DSM-5/DSM-5-TR specific learning disorder construct (persistence despite intervention, domain naming, severity specifiers; the retired IQ-discrepancy formula)", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "WHO — ICD-11 developmental learning disorder framing (classification parallel to DSM-5)", sourceType: "classification", year: "2019–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Snowling MJ & Hulme C — the science of reading and dyslexia; the phonological-deficit consensus behind the sound-splitting story", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Shaywitz SE et al. — the neurobiology of dyslexia and the Yale long-term cohort studies (persistence, compensation, adult outcomes)", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "International Dyslexia Association / Orton–Gillingham-derived programme literature — structured multisensory language teaching as the remediation standard", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "National Mathematics Advisory Panel & Butterworth B — the number-sense/magnitude foundations of dyscalculia (the approximate number system line)", sourceType: "review", year: "1999–2008", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Blank R et al. (European Academy of Childhood Disability) — developmental coordination disorder: definition, diagnosis and management", sourceType: "guideline", year: "2012 onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "The Rights of Persons with Disabilities Act 2016 (India) + CBSE/State-board accommodation circulars — the legal layer", sourceType: "government", year: "2016 onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Indian school- and clinic-based SLD prevalence studies (the 3–10% range) — under-detection and the English-medium cohort literature", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Sinha and colleagues' Indian reading-assessment lineages; NIOS documentation (the open-schooling route)", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Metro remedial-education cost realities and access geography (approx 2026) — the assessment, remediation and OT session-cost tier", sourceType: "review", year: "2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The definition: persistent difficulties learning and using academic skills, at least 6 months despite targeted intervention, substantially below age expectation and out of proportion to overall ability (unexpected underachievement), with functional impairment; excluding intellectual disability, uncorrected sensory problems, neurological conditions, inadequate instruction and language-of-instruction mismatch; DSM-5 and ICD-11 have both retired the rigid IQ-achievement discrepancy formula.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "Epidemiology: 5–15% of school-age children broadly; reading disorder ~5–10% by strict criteria; mathematics difficulties ~3–7%; writing difficulties frequent and co-occurring; boys identified 1.5–3:1 (partly referral bias, girls under-detected); reading-disorder heritability 40–70% with family history the single most useful risk factor.", grade: "established", sources: ["S1", "S4"] },
    { text: "The phonological core of dyslexia: a sound-processing deficit upstream of the eye (segmentation effortful, rhymes late, rapid naming slow) so print stays blurred while vision is normal; the classic 'eye problem' attribution is the error the science corrects.", grade: "established", sources: ["S1", "S4", "S5"] },
    { text: "The neurobiology: atypical left-hemisphere language-network organisation with reduced grey matter and activation in temporo-parietal reading areas; gene lineages (DYX1C1/DCDC2/KIAA0319) affecting neuronal migration and reading-circuit development: research findings, not diagnostic tests.", grade: "supported", sources: ["S5"] },
    { text: "The dyscalculia core: a magnitude glitch in the approximate number system; the mental number-line that lets a toddler judge nine dots more than five calibrates poorly, leaving arithmetic facts learned like a poem in an unknown language; subitising, magnitude comparison and number bonds the training targets.", grade: "supported", sources: ["S7"] },
    { text: "The remediation standard: structured, systematic, multisensory phonics (Orton–Gillingham lineage and derivatives); letter-sound links taught incrementally with simultaneous seeing/saying/tracing; one-to-one or small-group at 2–4 sessions weekly for 1–2 school years, because the dose is part of the treatment; fluency (speed) the sensitive marker on achievement testing.", grade: "established", sources: ["S6"] },
    { text: "The comorbidity gate: ADHD present in roughly one-third of learning-disorder cases and worsening them; an inattentive child cannot use remediation, so its treatment (behavioural parent training, medication where indicated) gates the remediation response.", grade: "established", sources: ["S1"] },
    { text: "The emotional career: falling behind → scolding and public embarrassment → anxiety and school avoidance (somatic school-morning complaints) → 'I am stupid' internalised by 9–10 years → adolescent depression or conduct problems in the Std 8–10 danger zone; interrupted by identification, the right method, accommodations and the strengths channel.", grade: "established", sources: ["S1", "S5"] },
    { text: "The both-language discipline: reading tested in the vernacular too; a first-generation English-medium learner behind only in English but at level in the home language carries bilingual acquisition load, not dyslexia; behind in BOTH languages is the true signal; the rule prevents false certificates and false reassurance alike.", grade: "supported", sources: ["S10", "S11"] },
    { text: "The legal layer: the Rights of Persons with Disabilities Act 2016 recognises specific learning disability as a benchmark category; certification via the designated authority (usually a medical board with a clinical/educational psychologist) unlocks extra time (commonly 20%), a scribe, third-language exemption, the NIOS route and anti-discrimination protection, with CBSE/ICSE/State boards running standing circulars.", grade: "established", sources: ["S9"] },
    { text: "The Indian tier: school-based prevalence 3–10% (under-detected rather than absent); detection typically Standard 4 or beyond; costs approx 2026: full psycho-educational assessment ₹3,000–15,000 in metros with government and district tiers far cheaper (sometimes free), remedial sessions ₹500–1,500, occupational therapy ₹400–1,000 per session; the certificate route itself costing little but needing persistence.", grade: "supported", sources: ["S10", "S12"] },
    { text: "No pharmacotherapy exists for the learning disorders themselves. The 'memory syrup/brain tonic' commerce is placebo; the one real medication role is for comorbid conditions riding along (methylphenidate for ADHD, prescribed with the ADHD tier's monitoring).", grade: "established", sources: ["S1"] },
  ],
};
