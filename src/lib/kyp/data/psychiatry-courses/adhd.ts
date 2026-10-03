import type { PsychiatryCourse } from "./types";

/**
 * ADHD — THE BRAKES AND THE ENGINE — canonical Psychiatry course
 * (migration batch 12, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/adhd.md — untouched foundation),
 * re-researched against current guidance (the Shaw cortical-maturation
 * imaging lineage, the Sonuga-Barke dual-pathway models, the MTA
 * cooperative study, the Faraone prevalence meta-analyses, NICE NG87
 * and AAP guidance, the Biederman/Wilens substance-outcomes paradox,
 * DSM-5-TR) with per-claim provenance.
 *
 * Drug routes: the stimulant/atomoxetine tier (methylphenidate,
 * lisdexamfetamine, atomoxetine — some of the largest short-term
 * effect sizes in child mental health) has NO KYP drug lessons;
 * drugLinks is empty by design, the whole tier is taught here, and
 * the absence is recorded in contentGaps, never invented.
 */
export const adhdCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "adhd",
  title: "ADHD",
  shortName: "ADHD",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "ADHD"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "38 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The brakes and the engine: a treatable condition of attention, impulse and activity",

  summary:
    "ADHD is a disorder of attention, impulse and activity regulation whose braking system matures late, producing bright children punished daily for a brain state rather than a character flaw. It is among psychiatry's most treatable conditions, with behavioural structure and effective medication.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define ADHD's three presentations and the two-settings, before-12, impairment logic that separates a disorder from a style.",
    "Explain the brakes-and-engine story, the interest-dial story and the maturation-lag story in plain words, to a parent, a teacher and an examiner.",
    "Run the diagnostic workup: multi-source history (parent AND teacher), the named rating scales, the mimics audit (sleep, hearing, absence seizures, anxiety, depression, trauma, chaos) and the baseline measures before any medication.",
    "Prescribe the pharmacological tier the way prescribers need it: methylphenidate's mechanism, dosing, monitoring and contraindication care; atomoxetine's and lisdexamfetamine's distinct logic.",
    "Deliver the behavioural half concretely: parent training, the 5:1 praise ratio, the homework architecture and the school accommodation kit including the daily report card.",
    "Manage adult ADHD: the childhood-evidence retrofit, vocational and living structure, medication continuation rules and the explicit diversion counselling.",
    "Handle the Indian realities: Schedule X prescription discipline, hostel diversion, coaching-city misuse, the punishment-first culture, the missed inattentive girl and the costs.",
    "Separate evidence from myth (sugar, screens, parenting) and give the honest answers on growth, cardiovascular risk and addiction.",
  ],
  quickFacts: [
    { label: "The three domains", value: "Inattention, hyperactivity, impulsivity", detail: "One dysregulated system, three outputs: the quiet inattentive half (the girls' half), the loud hyperactive half (the boys' referral reason) and the cost-driving impulsive half" },
    { label: "The diagnostic gate", value: "Two settings, before 12, impairment", detail: "Several symptoms before age 12, in TWO OR MORE settings, with clear functional interference: the gate that separates disorder from style; DSM-5-TR's 'several' tightening blocks the late-onset mimics" },
    { label: "The prevalence", value: "~5% of children, ~2.5% of adults", detail: "Meta-analytic childhood prevalence around 5%; boys diagnosed 2–3:1 in childhood while adult identification approaches parity; the inattentive girl is the missed epidemic" },
    { label: "The heritability", value: "~70–80% — among psychiatry's highest", detail: "Children resemble their biological, not adoptive, parents; the child's diagnosis is often the parent's first clue about their own forty years, always screen the parents" },
    { label: "The maturation lag", value: "2–3 years in the braking regions", detail: "Group imaging shows prefrontal cortical thickness peaking some 2–3 years later: the engine full-size, the brakes late; 'symptoms usually soften; consequences can harden'" },
    { label: "The first-line under 6", value: "Parent training, alone", detail: "The guideline constant and the ethics favourite; medication joins only for insufficient response at school age" },
    { label: "The molecules", value: "Day-one stimulant vs weeks-long atomoxetine", detail: "Methylphenidate: dopamine/noradrenaline reuptake inhibition, effect visible day one, titration in days; atomoxetine: NET-selective, 2–6 weeks to effect, no abuse potential" },
    { label: "The Indian signature", value: "2–3 per class of 50, Schedule X", detail: "School-based prevalence 1–8% by instrument and cutoff; the punishment-first presentation filter; Schedule X prescription discipline for stimulants; the coaching-city diversion problem" },
  ],
  knowledgeGraph: [
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The social-reciprocity and sensory history that separates the two, and the fact that ADHD comorbids with autism rather than mimicking it" },
    { label: "Conduct Disorders", type: "condition", href: "/psychiatry/conduct-disorder/", note: "The ODD/CD rider that changes the plan: deliberate, aimed refusal against fast, unaimed, regretted impulsivity; comorbidity the norm" },
    { label: "Developmental Disorders", type: "condition", href: "/psychiatry/developmental-disorders/", note: "The learning-disorder comorbidity riding in a third of cases: oral bright, written collapsing; remediation is its own treatment" },
    { label: "Child Anxiety", type: "condition", href: "/psychiatry/child-anxiety/", note: "The stolen-attention mimic: worry-content history, somatic complaints, exam-month clustering; attention STOLEN, not unfixed" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "The sleep audit that precedes every diagnosis: the sleep-starved child is the ADHD impersonator; treat sleep, re-look in four weeks" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The 'this is worth it' signal. The interest dial's chemistry and the methylphenidate target (no KYP drug lesson; taught in this course, never invented)" },
    { label: "Noradrenaline", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Prefrontal signal-to-noise: the NET tier; atomoxetine's target and the co-signalling the stimulants ride" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The brakes: the region running 2–3 years late on maturation; knowledge intact, the rule not arriving at the moment of impulse" },
    { label: "Basal ganglia", type: "brain-region", href: "#brain", note: "The striatal half of the prefrontal–striatal–cerebellar delay triad: the inhibition machinery and its dopamine signalling" },
    { label: "Cerebellum", type: "brain-region", href: "#brain", note: "The third member of the maturation-delay triad: timing and motor smoothness; the restless body's contribution" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Four stories carry ADHD, and the first two are the ones that change how teachers and parents see the child. The brakes and the engine: the prefrontal cortex is the braking-and-steering system over the engine of drives; in ADHD the engine is full-size and the brakes arrive late (maturation some 2–3 years behind in prefrontal–striatal–cerebellar circuits) and work inconsistently. The child KNOWS the rule (knowledge is intact) but the rule does not arrive at the moment of impulse, which is why punishment after the fact teaches nothing: the system being punished was not the one that failed. The interest dial: attention is not a quantity you have more or less of, it is a LOCK-ON mechanism with a dial; in ADHD the dial rotates to NOVEL, IMMEDIATE and REWARDING and resists BORING-BUT-IMPORTANT: the same child plays three hours of cricket highlights but cannot copy ten lines, not laziness but dial mechanics. Dopamine and noradrenaline are the chemicals carrying the 'this is worth it' signal; atypical signalling reduces the amplification of boring-but-important inputs, and stimulants work by amplifying the boring-signal until it competes. The maturation timeline: group imaging shows prefrontal cortical thickness peaking some 2–3 years later; many children genuinely grow out of visible hyperactivity (the bouncing becomes tapping, the running becomes restlessness) while the inattention and time-organisation problems persist in adult costume. The honest longitudinal sentence is 'symptoms usually soften; consequences can harden'. The overloaded classroom: take a regulation-challenged child, seat them in a 50-student room with 45-minute stationary stretches, add five subjects of nightly homework, subtract movement and add tuition hours at both ends. The Indian school system is an ADHD amplification machine; the environment does not create the wiring, it decides how much of it becomes pathology.",
    steps: [
      "The brakes and the engine: full-size engine, late brakes (prefrontal maturation ~2–3 years behind, working inconsistently); the child KNOWS the rule, but the rule does not arrive at the moment of impulse; punishment after the fact punishes the wrong system.",
      "The interest dial: attention as a LOCK-ON mechanism; the dial rotates to NOVEL, IMMEDIATE and REWARDING, and resists BORING-BUT-IMPORTANT; cricket for hours, ten lines of copying impossible: dial mechanics, not laziness.",
      "The chemistry: dopamine and noradrenaline carry the 'this is worth it' signal; atypical signalling in prefrontal circuits reduces boring-signal amplification: stimulants amplify the boring-signal until it competes.",
      "The maturation timeline: prefrontal cortical thickness peaking ~2–3 years later on group imaging; hyperactivity softening (bouncing to tapping, running to restlessness) while inattention and time-organisation persist in adult costume.",
      "The overloaded classroom: 50-student rooms, stationary stretches, tuition hours at both ends. The amplification machine; the environment does not create the wiring, it decides how much of it becomes pathology.",
      "The consequence design: consequences work best immediate, predictable and small; the design logic of every behavioural programme for ADHD; knowledge is intact, the failure is in delivery at the moment of impulse.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the brakes)", role: "The braking-and-steering system over the engine of drives, planning, inhibition and rule-delivery at the moment of impulse; the region whose cortical thickness peaks ~2–3 years late on group imaging.", grade: "established" },
    { id: "basal-ganglia", name: "Basal ganglia / striatum (the gearbox)", role: "The striatal half of the prefrontal–striatal–cerebellar maturation-delay triad: response inhibition and the dopamine signalling the stimulants amplify.", grade: "supported" },
    { id: "cerebellum", name: "Cerebellum (the timing machinery)", role: "The third member of the maturation-delay triad: timing and motor smoothness; its contribution to the restless, fidgeting body.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The 'this is worth it' signal: the interest dial's chemistry; the dopamine-pathway gene variants (DRD4, DAT1 lineages) are the classic association candidates, small effects each, no clinical testing value.", grade: "established", drugConnection: "Methylphenidate: dopamine/noradrenaline reuptake inhibition sharpening boring-signal amplification; no KYP drug lesson; taught in this course, never invented." },
    { name: "Noradrenaline", symbol: "NA", role: "Prefrontal signal-to-noise: the NET tier carrying the boring-but-important signal; atomoxetine's selective target and the co-signalling the stimulants ride.", grade: "established", drugConnection: "Atomoxetine: NET-selective non-stimulant; no KYP drug lesson; the diversion-shaped alternative taught here." },
    { name: "Serotonin", symbol: "5-HT", role: "The comorbidity tier's chemistry only: the SSRI tools treat the anxiety and mood riders that change the ADHD plan; the note assigns serotonin no role in the core dial, and neither does good practice.", grade: "supported", drugConnection: "Fluoxetine and the SSRI family have KYP lessons for their own indications; the ADHD core has no serotonergic route: the honest refusal, not a link." },
  ],
  pathways: [
    {
      id: "interest-dial-pathway",
      name: "The interest dial (cricket yes, copybook no)",
      steps: [
        { label: "The demand arrives", detail: "Novel, immediate, rewarding, or boring-but-important" },
        { label: "The dial rotates", detail: "Lock-on to the interesting (three hours of cricket highlights); resistance to the boring (ten lines of copying)" },
        { label: "The signal fails to amplify", detail: "Atypical dopamine/noradrenaline signalling in prefrontal circuits: the boring-signal does not compete" },
        { label: "Attention slides off", detail: "Careless mistakes, lost notebooks, 'I forgot' as the family's most-heard word, time blindness (two days until a test is not actionable)" },
        { label: "The stimulant enters", detail: "Boring-signal amplified until it competes: effect visible day one" },
      ],
      clinicalManifestation: "The parental paradox ('he plays for hours, so his attention is fine') answered: interest-locked attention, task-drifting attention.",
      grade: "established",
    },
    {
      id: "brakes-pathway",
      name: "The late brakes (impulse before consequence)",
      steps: [
        { label: "The engine is full-size", detail: "Drives, energy and reward-seeking intact: often wonderfully energetic" },
        { label: "The brakes arrive late", detail: "Prefrontal maturation ~2–3 years behind, working inconsistently" },
        { label: "The impulse fires first", detail: "Answers blurted before questions end; the exhibit touched; the friend's pen taken; the adolescent riding stunt" },
        { label: "Punishment teaches nothing", detail: "The child KNOWS the rule: the system being punished was not the one that failed" },
        { label: "The redesign", detail: "Consequences immediate, predictable and small: the design logic of every behavioural programme" },
      ],
      clinicalManifestation: "The child who recites the rule perfectly and breaks it anyway: the gap between knowing and doing at the moment of impulse.",
      grade: "established",
    },
    {
      id: "maturation-pathway",
      name: "The maturation timeline (bouncing to deadline chaos)",
      steps: [
        { label: "Preschool", detail: "Predominantly hyperactive-impulsive presentation: climbing, 'on the go', powered by a motor" },
        { label: "School entry", detail: "The two-setting collision: the classroom exposes the brakes; combined presentation dominates referrals" },
        { label: "Adolescence", detail: "The bouncing becomes tapping, the running becomes internal restlessness ('I need to move'); driving and diversion risks arrive" },
        { label: "Adulthood", detail: "Inattention and time-organisation persist in adult costume: deadline chaos, careless errors, impulsive spending, fatigue from masking" },
      ],
      clinicalManifestation: "The adult ADHD picture: 'symptoms mature, consequences adultify'; roughly a third to half of diagnosed children meet full criteria as adults.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "preschool-engine", time: "The preschool years", title: "The engine at full throttle", description: "Predominantly hyperactive-impulsive presentation: cannot play quietly, runs and climbs inappropriately, 'on the go' as if powered by a motor; the family's first complaints, rarely the diagnosis.", phase: "onset" },
    { id: "school-entry", time: "Ages 6–7, school entry", title: "The two-setting collision", description: "The 45-minute periods and nightly homework expose the brakes; combined presentation dominates; the referral peak, in India usually after a school ultimatum; the punishment layer begins.", phase: "peak" },
    { id: "self-image-era", time: "Around age nine", title: "The self-image settles", description: "'Bad at studies', 'the trouble child': the settled self-image; the secondary ODD and anxiety layer often grows bigger than the core; the inattentive girl still invisible, 'can do better if she tried'.", phase: "peak" },
    { id: "adolescence", time: "Adolescence", title: "The restlessness goes internal", description: "Bouncing becomes tapping, running becomes restlessness; driving scrapes, impulsive spending and posting; the coaching-city pressure era; roughly two-thirds retain some impairing symptoms into late adolescence.", phase: "duration" },
    { id: "adulthood", time: "Adulthood", title: "The adult costume", description: "About one-third to half meet full criteria; ~2.5% adult prevalence: deadline and paperwork chaos, jobs lost for disorganisation not incompetence, serial abandoned projects, exhaustion from compensating; often diagnosed through their own child's assessment.", phase: "duration" },
    { id: "treatment-era", time: "The treatment era", title: "The treatable condition", description: "Behavioural structure plus, where appropriate, stimulant medication, some of the largest short-term effect sizes in child mental health; treated ADHD carries LOWER later substance misuse than untreated; the untreated picture quietly costs years of education, self-esteem and accident risk.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Meta-analytic childhood prevalence around 5% (DSM-5 estimates ~5% of children, ~2.5% of adults), with a substantial pool of sub-threshold impairment sitting below the line. Boys are diagnosed 2–3:1 in childhood (combined presentation dominating) while adult identification approaches parity; girls' quieter inattentive presentations (dreamy, disorganised, 'slow worker') are chronically missed at school age. Course: roughly two-thirds of children retain some impairing symptoms into late adolescence; about one-third to half meet full criteria as adults: the modern framing is 'symptoms mature, consequences adultify'. Untreated ADHD raises accident rates, school dropout, substance-use initiation, teenage pregnancy and employment instability: the epidemiological case for treating it.",
    indianPrevalence: "School-based studies report ADHD around 1–8% depending on instrument and cutoff, with the same detection gap for girls and inattentive presentations. The Indian classroom arithmetic: 2–3 children with ADHD per class of 50, almost all managed as discipline problems. The 2020s Indian signature is the stimulant-seeking problem. NEET/JEE coaching students and young professionals in Kota and the metros, both diversion (sharing of prescribed tablets) and symptom-feigning for prescriptions ('I can't focus' as the entry ticket), which makes diagnostic rigour a public-health duty. Methylphenidate and atomoxetine are well-established; lisdexamfetamine has recently entered the Indian market.",
    lifetimeRisk: "A majority of diagnosed children still meet criteria or carry meaningful symptoms into adulthood: roughly two-thirds with some impairing symptoms into late adolescence, one-third to half with full criteria as adults.",
    genderRatio: "Boys diagnosed 2–3:1 in childhood (combined presentation dominating); adult identification approaches parity: the dreamy, quiet, disorganised girl the missed epidemic.",
    ageOfOnset: "Onset criteria require symptoms before age 12 (DSM-5-TR's 'several' gate); the hyperactive face is visible from preschool, the inattentive face often surviving till the year homework exceeds the attention span. The 'he was fine till Std 4' phenomenon.",
    indianNotes: "Classrooms of 50 with zero tolerance for movement; tuition culture multiplying homework and stationary time (a mismatch engine for hyperactive children); corporal punishment shifting the narrative from brain state to character defect; parents presenting only after school ultimatums.",
  },
  etiology: [
    { category: "genetic", factor: "The strongest single layer", details: "Heritability ~70–80%, among the most heritable psychiatric conditions; adoptee studies converge: children resemble their biological, not adoptive, parents; sibling risk several-fold elevated; a parent with ADHD is the most useful clinical risk marker, always screen the parents. Dopamine-pathway gene variants (DRD4, DAT1 lineages) are the classic association candidates, small effects each, no clinical testing value." },
    { category: "biological", factor: "The neurodevelopmental risks", details: "Prematurity, low birth weight, prenatal alcohol/tobacco exposure and lead exposure are reliable moderate risks. The brain story: prefrontal–striatal–cerebellar maturation delay (~2–3 years on average in imaging studies) with atypical dopamine/noradrenaline signalling reducing boring-signal amplification. Executive functions (working memory, inhibition, planning) are the measured casualties; overall IQ is normal-distributed. ADHD exists at every IQ level." },
    { category: "psychological", factor: "The modulators and the mimics", details: "Chaotic households, inconsistent discipline and high screen diets do not CAUSE ADHD but make the same wiring look catastrophically worse, and treating structure improves function without touching the wiring. Sleep loss (including sleep apnoea, late mobile gaming) manufactures an ADHD-identical state. Severe early adversity can produce dysregulation that mimics (and sometimes meets criteria for) ADHD: the trauma-ADHD overlap." },
    { category: "environmental", factor: "The amplification machine", details: "The Indian school system as an ADHD amplification engine: 50-student rooms, 45-minute stationary stretches, five subjects of nightly homework, movement subtracted, tuition added at both ends. The same child in a farm household with physical work often looks half-diagnosed. The environment decides how much of the wiring becomes pathology." },
    { category: "social", factor: "The presentation filter", details: "The punishment-first response: teachers and parents treat the symptom set as disrespect, so by presentation time the secondary anxiety/ODD layer is often bigger than the core. Coaching-pressured adolescents (sleep-starved, caffeine-loaded, performance-anxious) present with attention complaints that are mostly NOT ADHD." },
  ],
  symptomClusters: [
    {
      category: "1. Inattention (the quiet half, the girls' half)",
      symptoms: ["Careless mistakes in schoolwork: signs reversed in sums, whole questions missed; work done but not submitted", "Cannot hold attention on tasks not self-chosen; the standard parental paradox: 'he plays for hours, so his attention is fine'", "Does not seem to listen when spoken to directly; instructions lost mid-route; 'I forgot' as the family's most-heard word", "Cannot finish chapter-wise homework without supervision; avoids sustained mental effort like the plague", "Loses things as a profession: pencils, water bottles, notebooks, the fee receipt; objects that must travel through the day intact", "Forgets the tuition bag, the exam date, the promised errand, and is punished for it as defiance", "Time blindness: two days until a test is not an actionable quantity"],
    },
    {
      category: "2. Hyperactivity (the loud half, the boys' referral reason)",
      symptoms: ["Fidgets, taps, shifts seat; cannot stay seated where expected: assembly lines, classrooms, dinner tables", "Runs and climbs where inappropriate in the school years; internal restlessness as 'I need to move' in adolescents and adults", "Cannot play quietly; excessive talking; motor-driven play", "Often 'on the go' as if powered by a motor, and shutdowns, irritable evenings from masking all day"],
    },
    {
      category: "3. Impulsivity (the cost-driving half)",
      symptoms: ["Answers blurted before questions end; cannot await turn in queues and games", "Interrupts and intrudes: conversations, games, queues", "Impulsive decisions without preview: touching the exhibit, taking the friend's pen, spending, posting; the adolescent version: risky driving and riding stunts", "Emotional impulsivity: quick flare-ups that resolve fast; distinguished from ODD's deliberate refusal pattern and from mood disorder's sustained states"],
    },
    {
      category: "4. The adult costume (what the child becomes)",
      symptoms: ["Deadline and paperwork chaos; jobs lost for disorganisation, not incompetence", "Restlessness as boredom intolerance; serial projects, abandoned hobbies", "Relationship friction from interrupting, forgetting, impulse-spending, hot tempers", "Exhaustion from compensating (lists, alarms, over-apologising) and self-medication patterns (caffeine chains, nicotine early)", "Presentations: predominantly inattentive (the missed girl), predominantly hyperactive-impulsive (mostly preschoolers), combined (the classic); DSM-5 severity mild/moderate/severe by symptom count and impairment"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The DSM-5-TR gates (paraphrased)",
      code: "6/9 + 6/9, before 12, 2+ settings",
      criteria: [
        "At least 6 of 9 inattention and/or 6 of 9 hyperactivity-impulsivity items, present at least 6 months, to a degree inconsistent with developmental level.",
        "SEVERAL symptoms present before age 12: the DSM-5-TR tightening that blocks late-onset mimics (sleep deprivation, substance, depression).",
        "In TWO OR MORE settings: the gate: school-only symptoms raise the school-problem flag, home-only symptoms raise the home-problem flag.",
        "Clear functional interference: the difference between a disorder and a style.",
        "Not better explained by another condition: the mimics audit is part of the criteria, not an optional extra.",
        "Presentations: predominantly inattentive, predominantly hyperactive-impulsive, combined; severity mild/moderate/severe by symptom count and impairment.",
      ],
      duration: "At least 6 months of symptoms, with childhood onset (several before 12) and cross-setting persistence.",
      indianNote: "Rating-scale use is uneven in Indian practice: insist on the two-setting rule regardless; teacher letters carry disproportionate weight in Indian schools; Indian-adapted versions of the parent/teacher scales exist.",
    },
    {
      system: "The assessment sequence",
      code: "The discipline that earns the label",
      criteria: [
        "Multi-source history: parent AND teacher accounts, with rating scales named (the Conners and Vanderbilt lineages, SNAP-IV, named, never reproduced item-by-item).",
        "Developmental and family history: birth risk factors, milestones, the learning screen (a third have learning disorders); the parent ADHD screen (the ASRS for adults): the family's undiagnosed cases surface here.",
        "The mimics audit: sleep (duration, timing, snoring/apnoea), hearing (any 'not listening' child gets the ears checked, always), absence seizures (stereotyped vacant spells need EEG thinking, not scolding), anxiety, depression, trauma, substance in adolescents, iron deficiency in severe picky eaters, environmental chaos; risk-anchored thyroid/lead testing, never blanket screening.",
        "Mental state and classroom observation where feasible: the observation hour outperforms all recollection.",
        "Testing tiers: IQ/learning assessment where the school picture demands; continuous performance tests are adjuncts, not diagnoses (they measure a moment, not a life).",
        "Baseline before any medication: height, weight, BP, pulse; the cardiac history screen (family sudden death under 40, exertional syncope, structural disease): enough to decide ECG/referral for the few who need it.",
        "Adults: the developmental retrofit; school report cards and the parent interview about the child-you-were (the single most decisive document in adult ADHD assessment), the current functional map (deadlines, driving, money, relationships), collateral from a partner.",
      ],
      duration: "A diagnostic process measured in weeks: the multi-source history and the mimic audits cannot be shortcut into a single OPD encounter without cost.",
      indianNote: "The 2-question screen for the missed girl: 'does homework take four times the promised time?' and 'is her bag a permanent archaeological site?': positive answers earn the full assessment.",
    },
  ],
  severityScales: [
    {
      name: "Conners-type rating scales",
      fullName: "The Conners and Vanderbilt lineages, SNAP-IV",
      measures: "Parent and teacher symptom ratings across settings: instruments named only, items never reproduced; two-setting confirmation is the gate, and the scales serve it, never substitute for it.",
      ranges: [],
      indianNote: "Indian-adapted versions exist; rating-scale use is uneven in Indian practice: the two-setting rule insisted upon regardless, with the teacher's letter carrying disproportionate weight.",
    },
    {
      name: "ASRS",
      fullName: "The Adult ADHD Self-Report Scale lineage",
      measures: "The adult screen: used at the child's assessment too, where the family's undiagnosed cases surface; strongly positive screens earn the full documentary retrofit.",
      ranges: [],
      indianNote: "The free family screen: the father with the lifelong 'list of unfinished businesses' and the mother with anxiety-driven over-compensation structure both need naming at the child's consultation.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Insufficient sleep / late-night mobiles", distinguishingFeatures: "Symptoms weekend-structured; the sleep history (duration, timing, snoring, apnoea) exposes it.", keyDifferentiator: "Treat the sleep, re-look in four weeks. The sleep-starved child is the ADHD impersonator." },
    { condition: "Hearing loss", distinguishingFeatures: "Universal in 'not listening' children; the 'does not seem to listen when spoken to directly' item doubles as the audiometry flag.", keyDifferentiator: "Test the ears before the label, always, in every 'not listening' child." },
    { condition: "Absence epilepsy", distinguishingFeatures: "Stereotyped vacant spells, seconds long, interrupting activity mid-gesture; the teacher's 'staring blankly, unresponsive for seconds'.", keyDifferentiator: "EEG thinking, not a scolding: the daydreaming girl behind the EEG request." },
    { condition: "Anxiety disorders", distinguishingFeatures: "Worry-content history, somatic complaints, symptoms situation-linked (exam months).", keyDifferentiator: "Attention is STOLEN by worry, not unfixed. Treat the anxiety and re-look." },
    { condition: "Depression", distinguishingFeatures: "Concentration loss WITH mood change, sleep/appetite shift, anhedonia; onset datable.", keyDifferentiator: "The mood architecture asked for directly: concentration loss alone is not depression either." },
    { condition: "Learning disorder", distinguishingFeatures: "Attention intact for non-academic demands; oral bright, written collapsing.", keyDifferentiator: "The learning screen in every case: a third ride together, and remediation is its own treatment (the ADHD tablet does not treat handwriting)." },
    { condition: "Trauma / adversity dysregulation", distinguishingFeatures: "Adversity history, hypervigilance, startle; symptoms clustering around triggers.", keyDifferentiator: "The punish-first household hides it: the adversity history asked for privately." },
    { condition: "Autism spectrum", distinguishingFeatures: "Social-reciprocity history and sensory profile.", keyDifferentiator: "ADHD comorbids with autism rather than mimicking it: screen for both, treat both." },
    { condition: "Oppositional defiant disorder", distinguishingFeatures: "Deliberate refusal and defiance (calm, aimed) against impulsive acts that are fast, unaimed, regretted.", keyDifferentiator: "The tempo and the target: ODD plans its no; ADHD regrets its yes. Comorbidity is the norm though." },
    { condition: "Thyroid, iron and lead states", distinguishingFeatures: "The targeted laboratories where clinical clues point.", keyDifferentiator: "Risk-anchored testing, never blanket screening: the iron screen for the severe picky eater, lead where exposure plausibly exists." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Parent training and behaviour structure (first-line always; sole first-line under ~6 years)",
      description: "The programme logic of the New Forest / Incredible Years / PCIT lineages: attention-first (praise the desired 5:1, 'catch him being good', because attention itself is the currency the child works for and scolding is still attention), commands short-positive-one-at-a-time, routines with visual timetables, star charts with immediate small rewards, planned ignoring for whining, consistent consequences within seconds, time-out done technically. Homework architecture: 20-minute blocks with movement breaks, supervising ADJACENT not hovering, the written planner as an external prefrontal lobe.",
      whenToUse: "From diagnosis, in every case; as the sole first-line under about 6 years: the guideline constant and the ethics favourite.",
      indianContext: "Structured programmes are metro-concentrated (psychologists, child-guidance clinics); the workable rural/semi-urban route is 3–4 clinic-based coaching sessions on the core rules with WhatsApp follow-up: evidence-adjacent and hugely better than nothing; behavioural paediatric guidance under NIMHANS-model district centres where available.",
    },
    {
      category: "lifestyle",
      name: "School accommodations (the environmental half)",
      description: "Seating front-and-centre away from window and door; permitted movement channels: errand jobs ('send him with the register' turns the engine into employment); shortened written workload and homework batching; breaks between tests; oral testing where writing masks knowledge; and the daily report card between teacher and parent: the 3-target card (seat-work done, hands-up not blurting, submitted homework), the highest-yield school tool ever designed.",
      whenToUse: "Negotiated from the first school term after diagnosis, reviewed each academic year.",
      indianContext: "RPwD 2016 covers ADHD under the benchmark-disability category 'specific learning disability AND others' only in severe cases with impairment certification; most Indian accommodation is negotiated school-by-school with a doctor's letter (extra time; scribe only where a specific learning disorder coexists); parent-teacher meetings with the child's therapist as bridge.",
    },
    {
      category: "pharmacotherapy",
      name: "Methylphenidate (the workhorse)",
      description: "Dopamine/noradrenaline reuptake inhibition in prefrontal cortex: sharpens boring-signal amplification. Short-acting (3–4 hours, twice/thrice daily, useful for titration and cost) and long-acting (8–12 hours, the adherence choice). Start low (5 mg base dose), titrate weekly to effect; effects visible day one: dose-finding is days, not weeks. Side-effects: appetite fall (give breakfast before the dose; weight and height charted 6-monthly: the growth effect averages small and mostly catch-up-guardable), sleep delay (last-dose timing), headache and stomach-ache in the initial days, small BP/pulse rises. Contraindication care: structural cardiac disease, active psychosis/mania; the family-sudden-death screen before starting.",
      whenToUse: "School age and beyond, where symptoms cause impairment despite (or alongside) the behavioural architecture.",
      indianContext: "Schedule X: the prescription rules of rigour: specific dispensing documentation, no refills without review, new prescriptions roughly monthly by state practice. Methylphenidate ₹200–800/month by brand, long-acting costlier (₹1,000–2,500) (approx 2026).",
    },
    {
      category: "pharmacotherapy",
      name: "Atomoxetine and lisdexamfetamine (the alternative logics)",
      description: "Atomoxetine: the non-stimulant: noradrenaline reuptake inhibition (non-dopaminergic, non-controlled, Schedule H); the choice where abuse potential matters (hostel/boarded risk, diversion history, personal or substance misuse), comorbid anxiety (often dual-beneficial), or family refusal of 'the stimulant label'. SLOW: 2–6 weeks to effect, longer titration; warn at the start or the family abandons it in week 2; appetite/weight and BP monitoring; rare liver-warning and suicidality-class warning awareness. Lisdexamfetamine: the new Indian arrival: prodrug of dexamphetamine, long-acting, smoother; useful where methylphenidate response is partial or rebound prominent; same monitoring; Schedule X; higher cost; doses in the 20–70 mg/day lineage, titrated.",
      whenToUse: "Atomoxetine: the diversion-shaped choice, the comorbid-anxiety choice, the stimulant-refusing family. Lisdexamfetamine: partial methylphenidate response or prominent rebound.",
      indianContext: "Atomoxetine ₹800–2,500/month by brand (approx 2026); second-line/adjuncts: clonidine (useful for sleep and tics comorbidity, sedation watch), guanfacine (limited Indian availability); bupropion and the SSRIs are comorbidity tools, not ADHD core tools. Foods, fish-oil, 'brain tonics' and elimination diets are not treatments: 'the evidence is thin-to-none; spend the money on the tutor with the patience instead'.",
    },
    {
      category: "psychotherapy",
      name: "Comorbidity treatment (the plan-changers)",
      description: "Learning disorder remediation: else 'treatment failure' is actually teaching mismatch; ODD/CD behavioural escalation protocols; anxiety and mood treatment; tics treated on their own evidence; sleep treatment as its own target.",
      whenToUse: "Detected at the assessment or surfacing during treatment: the plan is rebuilt around each rider.",
      indianContext: "The writing-slow child needs writing-fluency drills with the resource teacher; the ADHD tablet does not treat handwriting: the sentence that saves years of 'poor response' misreads.",
    },
    {
      category: "lifestyle",
      name: "Adolescents and adults (the continuity era)",
      description: "Medication continuation with patient-controlled dosing days (exam months intensified, holidays lighter, the planned-break protocol some families choose); diversion counselling explicit: the hostel roommate asking to 'borrow one tablet' for an all-nighter is Schedule-X sharing, and both parties are at risk. Vocational and living structure: external prefrontal prostheses; alarms, a single notebook, calendar blocking, an accountability partner; ADHD coaching where available. Driving counselled specifically (the accident-risk data); substance screening honest. Adults: same molecule logic, long-acting formulations preferred; the 'finally organised' functional gains often transformative.",
      whenToUse: "From adolescence onward, with the transition planned before the child outgrows the child-guidance clinic.",
      indianContext: "The exam-month selective-dosing requests from IT and medical professionals are best handled with a plan, not a standoff; no legal disclosure duty exists for ordinary Indian employment: 'this is a treatment decision, not an identity announcement; who you tell is your choice'.",
    },
  ],
  safety: {
    redFlags: [
      "Family history of unexplained sudden death under 40, exertional syncope or known structural cardiac disease: the cardiac evaluation before any stimulant; structural cardiac disease and active psychosis/mania are the contraindication tier",
      "Stereotyped vacant spells, seconds long, interrupting activity mid-gesture: absence epilepsy thinking (EEG), not a scolding and not an ADHD label",
      "The sleep-starved child: nightly screens to 11:30, 6.5 hours of sleep: treat the sleep for four weeks and re-assess before any prescription",
      "Weight tracking down consistently or height faltering on the 6-monthly chart: dose, timing or molecule adjusted, not silently ignored and not just stopped",
      "The coaching-city adolescent requesting stimulants without childhood evidence: hold the diagnostic bar; feigned presentation pressure is a public-health reality in Kota and the metros",
      "A quick flare-up pattern turning into sustained aggression or a mood picture on treatment: the comorbidity audit reopened, not dose-escalated past it",
    ],
    urgentGuidance:
      "The order of operations: (1) the sleep audit and the hearing test before the label; the cheapest mimics removed first; (2) the EEG when the vacant spells are stereotyped seconds; (3) before any stimulant, the baseline set (height, weight, BP, pulse) and the cardiac history screen (family sudden death under 40, exertional syncope), with ECG/cardiology reserved for the few red-flagged; (4) structural cardiac disease or active psychosis/mania means the stimulant tier is off the table and the non-stimulant route reconsidered with the same honesty; (5) on treatment, the monitoring set (height, weight, BP, pulse, sleep, appetite) at every review, with the growth effect averaging small and mostly catch-up-guardable: adjust rather than abandon; (6) any diversion event (shared tablets, a roommate 'borrowing one') gets explicit counselling: Schedule-X sharing puts both parties at risk.",
  },
  drugLinks: [],
  contentGaps: [
    "The stimulant tier (methylphenidate and lisdexamfetamine, some of the largest short-term effect sizes in child mental health and the workhorse of school-age treatment) has no KYP drug lessons; the mechanism, dosing, monitoring and Schedule X discipline are taught here, the route never invented.",
    "Atomoxetine (the non-stimulant tier whose whole logic (slower onset, no abuse potential, the diversion-shaped choice) is exam-critical) has no KYP lesson; taught here in full.",
    "The alpha-2-agonist adjuncts (clonidine for the sleep and tics riders; guanfacine, limited Indian availability) have no KYP lessons; the adjunct tier is documented here as absence, not as a link.",
    "Bupropion and the SSRIs exist as KYP lessons, but the note assigns them comorbidity-tool status only, never an ADHD core role: no link is made rather than a misleading one; the comorbidity riders are taught inside this course's management tier.",
  ],
  patientGuide: {
    whatIsIt:
      "ADHD is a condition of brain development, not of character: the brain's system for steering attention, holding back impulses and sitting the body still matures late and works inconsistently, like a powerful engine with late-developing brakes. The child (or adult) is typically bright and energetic, and yet loses notebooks, blurts answers, cannot sit through a period, and makes careless mistakes, collecting daily scolding for a brain state. It shows in at least two settings (school AND home), was present before age 12, and it runs far beyond childhood: many adults carry it as deadline chaos, careless errors and exhaustion from masking. It is one of psychiatry's most treatable conditions.",
    whatCausesIt:
      "It is one of the most inherited brain conditions we know: roughly three-quarters of the difference is genetic, which is why a child's diagnosis is often the parent's first clue. The braking regions of the brain mature some 2–3 years late. It is NOT caused by bad parenting, sugar, or screens: parenting and screens can make the same wiring look better or worse, but they did not create it, and neither beatings nor 'being strict' will remove it; the punishments only add a second layer of anger and anxiety.",
    symptoms:
      "Inattention: careless mistakes, work done but not submitted, not seeming to listen, homework needing supervision, lost pencils and notebooks, forgotten errands, time blindness. Hyperactivity: fidgeting, cannot stay seated, cannot play quietly, driven by a motor, irritable evenings from masking all day. Impulsivity: answers blurted, turn-taking impossible, interrupting, spending and posting without preview; quick flare-ups that resolve fast. Adults: deadline and paperwork chaos, restlessness as boredom intolerance, relationship friction, exhaustion from compensating. Warnings needing review: vacant spells lasting seconds, weight tracking down, chest pain or fainting on exertion while on medication, mood change or sustained aggression.",
    treatment:
      "Two rails, both real. Structure first: parent training (the 5:1 praise ratio ('catch him being good') short commands, visual timetables, star charts, consequences within seconds), homework in 20-minute blocks with movement breaks, and the school kit (front seating, errand jobs, the daily report card between teacher and parent). Medicine where age and impairment justify it: methylphenidate works from day one (appetite and sleep watched, height and weight charted every six months, breakfast before the morning dose); atomoxetine takes weeks and suits the diversion-risk and anxious child; the choice is clinical, not a ranking. Under age 6, parent training alone is the first-line. Treated ADHD carries LOWER later substance misuse than untreated: the opposite of the common fear.",
    selfHelp: [
      "Breakfast before the morning dose: the appetite effect peaks mid-day; the solid breakfast is the protection.",
      "Sleep timing is treatment, not discipline: the last-dose timing, the screen curfew and the 21:30-type bedtime audited like a prescription.",
      "One place for one thing: the pencil, water bottle, notebook and fee receipt each with a station; the objects that must travel through the day intact.",
      "Homework by time, not by volume: 'forty minutes, then done'; restores the child's morale and the parent's sanity alike.",
      "The daily report card: three targets (seat-work done, hands-up not blurting, homework submitted) between teacher and parent; the highest-yield school tool ever designed.",
      "Catch him being good, 5:1; attention is the currency the child works for, and scolding is still attention.",
      "Movement as medicine: errand jobs, sports, the exercise that measurably helps symptom control; the engine given employment, not punishment.",
    ],
    whenToSeekHelp: [
      "Vacant spells, seconds long, interrupting activity mid-gesture: same-week review for EEG thinking (absence epilepsy), not a scolding",
      "Weight consistently tracking down or the height curve faltering on the 6-monthly chart: dose, timing or molecule review; do not just stop",
      "Chest pain, fainting on exertion, or any family story of sudden unexplained death under 40: cardiac evaluation before or during stimulant treatment",
      "Mood change, sustained sadness, new aggression or the self-talk of being 'bad' or 'useless': the comorbidity and self-esteem audit reopened",
      "Any request to share or borrow the tablets: the diversion conversation held explicitly: sharing a prescribed stimulant is a legal and medical event",
      "The school issuing ultimatums: the negotiation kit (doctor's letter, accommodations, the report card) deployed before the child's self-image settles at 'bad at studies'",
    ],
    indianResources: [
      "The child-guidance clinic routes: government medical colleges (low-cost, real waiting lists); NIMHANS and state institutes (excellence with travel); private developmental paediatricians and psychiatrists (₹800–2,500 per consult in metros, approx 2026)",
      "The school negotiation kit: the doctor's letter specifying seating, movement breaks, homework caps and the report-card system; the RPwD 2016 severe-case impairment certification where applicable",
      "Tele-MANAS 14416 (24×7, free), for the family's distress, the parenting-strategy support and the teacher-negotiation coaching",
      "The parent-training coaching route: 3–4 clinic-based sessions with WhatsApp follow-up where structured programmes are out of reach",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific ADHD pathway exists; practice follows the DSM-5-TR criteria with the NICE NG87 and AAP architecture (parent training first under 6; medication rules; monitoring), delivered through child-guidance clinics and the IAP ADHD awareness layer, with Schedule X governing every stimulant prescription.",
    systemContext: "Indian ADHD patients arrive pre-roughened: years of beatings, seat-benches, humiliations and 'useless/lazy' labels; by consult time the child carries secondary ODD behaviour and low academic self-image, and the parents oscillate between guilt and defensiveness. Presentation is usually triggered by a school ultimatum; the first clinical act is often reframing the child to the parents ('punish the brakes you didn't build' is the sentence families report remembering years later), before any prescription. Routes: government medical colleges (low-cost, real waiting lists), NIMHANS and state institutes (excellence with travel), private developmental paediatricians and psychiatrists (₹800–2,500 per consult in metros, approx 2026).",
    programmeContext: "RPwD 2016 covers ADHD under the benchmark-disability category 'specific learning disability AND others' only in severe cases with impairment certification; most accommodation is negotiated school-by-school with a doctor's letter. Behavioural paediatric guidance under NIMHANS-model district centres where available; the doctor's letter specifying seating, movement breaks, homework caps and the report-card system works in most CBSE/ICSE/State schools.",
    costConsiderations: "Methylphenidate ₹200–800/month by brand, long-acting costlier (₹1,000–2,500); atomoxetine ₹800–2,500/month (approx 2026). The effective programme is nearly free at the government tier; the expensive items are the private consults and the long-acting brands; the scarcest commodity is the follow-up structure. The biggest unmeasured cost is the treatment gap: an Indian classroom of 50 has, on average, 2–3 children with ADHD, almost all being managed as discipline problems.",
    culturalConsiderations: "The punishment-first culture is the presentation filter: the symptom set treated as disrespect until the ultimatum. The tuition paradox: the standard Indian response adds tuition hours, increasing stationary seat-time for the child whose deficit is stationary seat-time, with a tutor who reads fidgeting as disrespect; the ADHD-correct architecture is shorter blocks, movement breaks, homework by time not by volume. Marriage-market and diagnosis-shyness keeps adults away: no legal disclosure duty exists for ordinary employment; 'this is a treatment decision, not an identity announcement; who you tell is your choice'. The missed girl is India's biggest ADHD gap: dreamy, quiet, disorganised girls daydreaming through Indian classrooms, reported as 'can do better if she tried'. The family screen is free and enormous: heritability ~75% means the child's assessment is the family's screening event, treating the parent's ADHD often improves the child's environment more than another therapy hour.",
    patientCounselling: [
      "The brakes sentence: 'The engine is full-size and the brakes arrived late. You are punishing the brakes you didn't build; the punishment will not install them, the treatment will.'",
      "The cricket script: 'The hours of cricket prove the engine; the fault is in the gearbox: the shifting to boring-but-important demands. We treat the gearbox; the cricket focus is his strength, not his defence.'",
      "The addiction-fear answer: 'Follow-up studies show treated ADHD has LOWER later substance misuse than untreated. The real risks are in NOT treating: school failure and early substance initiation are the classic gateways.'",
      "The Schedule X script: 'The prescription discipline (the documentation, the dispensing records, the review-linked repeats) is protection, not bureaucracy; it is what keeps the treatment climate from going the way of some prescribing cultures.'",
      "The diversion script: 'The hostel roommate asking to borrow one tablet for an all-nighter is Schedule-X sharing, both parties are at risk; the tablet is a treatment decision, not a study aid to lend.'",
      "The school-negotiation script: 'Two to three children with ADHD per class of 50; this is a normal brain you will meet every year of your career; the letter asks for seating, movement breaks, homework caps and the report card, not for favours.'",
    ],
  },
  decisionPath: {
    title: "The child (or adult) who cannot sit, listen or hold a deadline",
    nodes: [
      {
        id: "start",
        question: "A child (or adult) presents with attention, impulse or activity complaints. First: the gate audit; the cheap mimics before the label.",
        branches: [
          { label: "Sleep-starved, late-night screens, symptoms weekend-structured", next: "sleep-path" },
          { label: "'Not listening': the ears never checked", next: "hearing-path" },
          { label: "Vacant stereotyped spells, seconds long", next: "absence-path" },
          { label: "Two-setting impairment, several symptoms before 12", next: "gate-passed" },
        ],
      },
      {
        id: "sleep-path",
        question: "The sleep-starved impersonator.",
        recommendation: "Correct sleep for four weeks and re-assess: duration, timing, snoring/apnoea and the late mobile gaming audited; treat the mimic, then re-look. The diagnosis made on a sleep-deprived child is a misdiagnosis with a prescription attached.",
      },
      {
        id: "hearing-path",
        question: "The never-checked ears.",
        recommendation: "Test the hearing before the label: universal in 'not listening' children; the audiogram costs less than the harm of treating deafness as dysregulation.",
      },
      {
        id: "absence-path",
        question: "The vacant spells that are not daydreams.",
        recommendation: "EEG thinking: stereotyped spells, seconds long, interrupting activity mid-gesture; absence epilepsy referred, not scolded and not diagnosed as inattention.",
      },
      {
        id: "gate-passed",
        question: "Two settings, onset before 12, real impairment. Next: the age, comorbidity and risk audit that routes the treatment.",
        branches: [
          { label: "Under 6 years", next: "under6-path" },
          { label: "Learning collapse, writing-slow, oral-bright-written-collapsing", next: "learning-path" },
          { label: "Diversion risk, hostel, substance history, or comorbid anxiety", next: "atomoxetine-path" },
          { label: "School-age, no contraindication", next: "stimulant-gate" },
        ],
      },
      {
        id: "under6-path",
        question: "The preschooler.",
        recommendation: "Parent training alone: the guideline constant and the ethics favourite: the 5:1 praise ratio, short commands, visual timetables, star charts with immediate small rewards, consistent consequences within seconds; medication joins only for insufficient response at school age.",
      },
      {
        id: "learning-path",
        question: "The learning-disorder rider.",
        recommendation: "IQ/learning assessment and remediation: a third ride together, and 'poor response to ADHD medication' is usually teaching mismatch; the writing-slow child needs writing-fluency drills with the resource teacher: the ADHD tablet does not treat handwriting.",
      },
      {
        id: "stimulant-gate",
        question: "The stimulant tier considered: the cardiac gate first.",
        branches: [
          { label: "Family sudden death under 40, exertional syncope, structural disease", next: "cardiac-path" },
          { label: "Baseline clear", next: "stimulant-path" },
        ],
      },
      {
        id: "cardiac-path",
        question: "The red-flagged heart.",
        recommendation: "Cardiology evaluation and ECG before any stimulant: structural cardiac disease and active psychosis/mania are the contraindication tier; the non-stimulant route reconsidered with the same cardiac honesty, not as a quiet workaround.",
      },
      {
        id: "stimulant-path",
        question: "Methylphenidate: the workhorse.",
        recommendation: "Baseline height, weight, BP, pulse and sleep/appetite documented; start low (5 mg base dose), titrate weekly: effects visible day one, dose-finding in days; breakfast before the morning dose, last-dose timing for sleep; long-acting (8–12 hours) the adherence choice; Schedule X documentation discipline throughout; then the monitoring node.",
      },
      {
        id: "atomoxetine-path",
        question: "The non-stimulant logic.",
        recommendation: "Atomoxetine: NET-selective, non-controlled (Schedule H), the diversion-shaped choice, and the 2–6-week clock warned at the start, or the family abandons it in week 2; appetite/weight and BP monitoring; liver-warning and suicidality-class awareness; comorbid anxiety often dual-beneficial.",
      },
      {
        id: "monitoring-path",
        question: "On treatment: the monitoring and continuity set.",
        recommendation: "Height, weight, BP, pulse, sleep and appetite at every review, growth charted 6-monthly (the effect averages small, mostly catch-up-guardable); the behavioural architecture continued alongside: structure plus medication outperforms either alone; adolescence brings the explicit diversion counselling and the driving conversation; adults bring the vocational prostheses (alarms, single notebook, calendar blocking, accountability partner).",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing ADHD in the sleep-deprived, late-night-gaming child",
      why: "Sleep loss manufactures an ADHD-identical state: the nightly screens to 11:30 and 6.5 hours of sleep are the differential, not the background.",
      correction: "Correct sleep for four weeks and re-assess: the cheapest mimic removed before the prescription is written.",
    },
    {
      mistake: "Skipping the hearing test in the 'not listening' child",
      why: "'Does not seem to listen when spoken to directly' doubles as the audiometry flag. The sentence is read as behaviour when it is often ears.",
      correction: "Test the ears before the label, always: the universal rule in every 'not listening' presentation.",
    },
    {
      mistake: "Missing absence epilepsy behind the 'daydreaming' girl",
      why: "The inattentive girl's vacant spells get read as the core symptom: the stereotyped, seconds-long, mid-gesture interruptions go unrecognised.",
      correction: "EEG when the spells are stereotyped seconds: the daydreaming girl behind the EEG request, not behind the rating scale.",
    },
    {
      mistake: "Treating a comorbid learning disorder as 'poor response to ADHD medication'",
      why: "The medication is escalated for the wrong target. The writing-slow, oral-bright child's collapse is a teaching mismatch, not a dose failure.",
      correction: "The learning screen in every case (a third ride together) and remediation as its own treatment: the ADHD tablet does not treat handwriting.",
    },
    {
      mistake: "Atomoxetine abandoned at week 2 for 'no effect'",
      why: "The molecule's clock runs 2–6 weeks: the family judges a non-stimulant by stimulant timescales and stops it at its start.",
      correction: "Warn at the prescription, in words, with the number: the abandonment is the prescriber's fault, not the molecule's.",
    },
    {
      mistake: "Prescribing stimulants to the coaching-city adolescent on 'I can't focus' alone",
      why: "Feigned presentation pressure exists, symptom-feigning for prescriptions is the Kota-era reality; the late-onset complaint without childhood evidence is exactly what the DSM-5-TR gate exists to block.",
      correction: "Hold the diagnostic bar: childhood evidence (report cards, parent interview), multi-source history, impairment mapping; document, and reserve the stimulants for the diagnosed.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The criteria skeleton: 6 of 9 inattention and/or 6 of 9 hyperactivity-impulsivity, at least 6 months, SEVERAL symptoms before age 12, TWO OR MORE settings, clear impairment, mimic exclusion, and which DSM-5-TR tightening matters and why.",
        "The three presentations (predominantly inattentive (the missed girl), predominantly hyperactive-impulsive (mostly preschoolers), combined (the classic)) and the referral route each takes.",
        "Tell the brakes story and the interest-dial story in four sentences each: the two explanations that change how a teacher sees the child.",
        "Methylphenidate: mechanism (dopamine/noradrenaline reuptake inhibition), day-one effect, weekly titration from 5 mg, and the monitoring set (height, weight, BP, pulse, sleep, appetite).",
        "The under-6 answer: parent training alone; the ethics favourite and the guideline constant.",
        "The mnemonics: B-I-T-E (Blurts, Interrupts, Turn-lost, Excess movement) paired with F-A-I-L-S (Forgets, Avoids sustained effort, Ignores direct speech, Loses things, Sloppy mistakes); learn by the letters, answer by the domains.",
      ],
      practical: [
        "Take the multi-source history: parent AND teacher accounts with a named rating scale each; demonstrate the two-setting gate in action.",
        "The baseline examination before any stimulant: height, weight, BP, pulse, and the cardiac history screen (family sudden death under 40, exertional syncope).",
        "Explain Schedule X to a family in two sentences: protection, not bureaucracy; and demonstrate the 2-question screen for the missed inattentive girl.",
      ],
      longAnswer: [
        "A 7-year-old with symptoms in two settings and impaired school performance: the diagnostic approach to ADHD.",
        "Treatment of ADHD in a 5-year-old: parent training first, the ethics favourite.",
        "Methylphenidate: pharmacology, monitoring, and the Indian prescription discipline (Schedule X).",
        "Adult ADHD: how to diagnose it without living parents; the documentary retrofit.",
      ],
    },
    neetPg: {
      highYield: [
        "THE GATE: 6/9 + 6/9 domains, at least 6 months, SEVERAL symptoms before 12, TWO-OR-MORE settings, impairment, mimic exclusion.",
        "HERITABILITY ~75%: screen the parents at the child's diagnosis; screen the childhood at the adult's.",
        "METHYLPHENIDATE: DAT/NET inhibition, day-one effect, days-scale titration; short-acting 3–4 hours, long-acting 8–12 hours; start at 5 mg base dose.",
        "ATOMOXETINE: NET-selective, 2–6 weeks to effect, non-controlled (Schedule H), anti-anxiety bonus; the diversion-risk choice.",
        "FIRST-LINE UNDER 6: parent training alone; the guideline constant.",
        "THE PARADOX: stimulant-treated ADHD carries LOWER later substance misuse than untreated ADHD.",
        "THE MONITORING SET: height, weight, BP, pulse, sleep, appetite.",
        "THE COMMONEST INDIAN PRESENTATION BIAS: combined-presentation boys by school ultimatum; the inattentive girl is the missed epidemic.",
        "TWO-SETTING RULE: school-only or home-only symptoms; look for the SETTING's problem first.",
        "SCHEDULE X (India) for stimulants: prescription documentation, dispensing records, review-linked repeats.",
      ],
      pyqConcepts: [
        "The sleep-deprived, late-night-gaming child: treat sleep, re-look in four weeks: the recurring single-best-answer stem.",
        "The cricket paradox: the interest-dial mechanism as the answer to 'he can focus, so he chooses not to'.",
        "The school report card as the most useful document in adult ADHD assessment: the 'how to diagnose without childhood records' question.",
        "The coaching-city adolescent and the study pill: childhood evidence and collateral decide.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 9-year-old Lucknow boy arrives after a school ultimatum, his father carrying a punishment log kept since Std I: out of seat constantly, 'does not listen', work never finished, sharp in quizzes, brilliant at cricket, homework three hours for thirty minutes of work, bedtime 11 pm after mobile gaming until 10.30: the management that puts the sleep audit before the prescription, converts the father from punisher to scorekeeper, gives the engine an errand job, and adds methylphenidate long-acting at the lowest paediatric dose with weekly titration: the six-week outcome (homework 45 minutes unaided, the report card green four weeks of six, 'my brain works now') as the argument that environment-structure plus medication outperforms either alone.",
        "A 21-year-old third-year MBBS student self-refers anxious and apologising: 47 missed assignment deadlines in two years, Std 1 report cards with verbatim ADHD teacher remarks, a diagnostic-prototype father, ASRS strongly positive, roommates already 'joking' about methylphenidate: the atomoxetine choice made on diversion risk, the 2–6-week clock warned up front, the scaffolding-first trial that established need, and the twelve-week outcome, all assignments current, the anxiety unwound by itself as the deadline record cleaned.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Parent training alone before age 6: first-line, the ethics favourite.",
        "Several symptoms before age 12, two or more settings: the DSM-5-TR gate.",
        "Methylphenidate works from day one; atomoxetine takes 2–6 weeks.",
        "Treated ADHD: lower, not higher, later substance misuse.",
        "The sleep-and-hearing-first rule in every 'not listening' child.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The child's assessment is the family's screening event: the ASRS-positive parent treated improves the child's environment more than another therapy hour; the heritability (~75%) makes the family screen free and enormous.",
        "Hold the diagnostic bar in coaching cities: childhood evidence, multi-source history, impairment mapping; document, and reserve stimulants for the diagnosed; 'I can't focus' is an entry ticket, not a diagnosis.",
        "The diversion conversation is clinical work at every adolescent prescription: 'borrow one tablet' is Schedule-X sharing, both parties at risk. Counsel explicitly, and expect the request to come through the warden rather than the patient.",
        "Atomoxetine's 2–6-week clock must be warned at the start in words, or the family abandons it in week two. The abandonment is the prescriber's fault, not the molecule's.",
        "The classroom-average statistic (2–3 per class of 50) is the school-negotiation leverage line: 'this is a normal brain you will meet every year of your career' converts a moral argument into an accommodation plan.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The class donkey",
      presentation: "A punishment log the father kept since Std I (canings at school, slaps at home, 'nothing changes') and a nine-year-old who, six weeks into treatment, tells the psychologist his brain works now.",
      initialPresentation:
        "A 9-year-old boy from Lucknow was brought to the child-guidance clinic after a school ultimatum, his father carrying a punishment log maintained since Std I. The teacher reported constant out-of-seat behaviour, 'does not listen', work never finished and books lost weekly: alongside a sharp quiz mind and brilliance at cricket; the mother described the identical picture at home: three hours of homework for thirty minutes of work, daily whining, quick flare-ups, and a bedtime of 11 pm after mobile gaming until 10.30.",
      history: "Called 'the class donkey' at school with emerging 'I am bad at studying' self-statements; no mood or anxiety architecture; sleep chronically trimmed by late gaming; no prior assessment; the father's log documenting years of escalating corporal punishment with no behavioural change.",
      examination: "Symptom counts exceeded thresholds in BOTH settings with onset before 7; hearing normal; the sleep audit moved bedtime to 21:30 (the mild deprivation layer removed); the learning screen identified writing-slow, not dyslexia; the teacher's Conners-type ratings and the mother's agreed; the cardiac screen was clear.",
      diagnosis: "ADHD, combined presentation, mild-to-moderate, with a learning-disorder-in-writing overlap.",
      management: "Three parent-coaching sessions (catch-him-being-good, 20-minute homework blocks, the 5:1 praise ratio with a star chart the father (retrained from punisher to scorekeeper) ran with visible relish); the teacher letter (front seat, errand jobs, he became the register boy, a daily status event; homework by time; the daily report card on three targets); methylphenidate long-acting started at the lowest paediatric dose with weekly titration to an effective dose, breakfast before dose, weight/height/BP monitoring; writing-fluency drills with the resource teacher for the handwriting channel.",
      outcome: "At six weeks: homework 45 minutes unaided, the report card green four weeks of six, 'the donkey' title retired; his own words to the psychologist: 'my brain works now'; growth and appetite stable with the breakfast strategy; the sleep boundary held.",
      teachingPoints: [
        "The father's punishment log was diagnosis data, not child management. The years of escalating punishment with no change is itself the regulatory story.",
        "The sleep audit came before the prescription: the cheapest mimic removed first.",
        "Environment-structure plus medication outperformed either alone: the two-rail evidence in one child.",
        "The errand job converted the engine's power to social standing: the register boy is a daily status event, not a punishment.",
        "The writing channel needed its own treatment: the ADHD tablet does not treat handwriting.",
      ],
    },
    {
      title: "The medical student who finally opened her books",
      presentation: "Forty-seven missed deadlines, three all-nighters a cycle and an internet self-diagnosis: until the Std 1 report card settled the argument her friends were having about the exam pill.",
      initialPresentation:
        "A 21-year-old third-year MBBS student in a Bengaluru medical college self-referred, anxious and apologising: she believed she had the symptoms, had diagnosed herself on the internet, and her friends thought she 'just wanted the exam pill'. Her Std 1 report cards (retrieved from home and photographed) contained teacher remarks that were verbatim ADHD ('very bright but careless and restless; work incomplete'); her father, a paediatrician confirmed from history, was a diagnostic prototype (lost keys, unfinished projects, library-fines legend).",
      history: "School career on 3–4-hour homework nights with a supervising mother; a brilliant Std 10 board exam (feared into focus), then college-level collapse: 47 missed assignment deadlines in the first two years, supplementary exams, notes borrowed from friends, chronic lateness to wards, the constant 'lazy-fraud' self-label, three all-nighters per cycle, two coffees minimum, weekend crash-sleeps.",
      examination: "Structured assessment: childhood-onset evidence from documents and parent interview; two-setting impairment (college and home) across multiple domains; ASRS strongly positive; screens negative for mood and anxiety disorders apart from secondary worry.",
      diagnosis: "Adult ADHD: the childhood-onset gate passed on documents, the inattentive lineage in adult costume.",
      management: "Sleep restructured first (the 2 a.m. phone issue); a four-week trial of external scaffolding (calendar blocking, a body-doubling study partner): partial gains, insufficient for professional stakes; after ECG/baseline checks, atomoxetine chosen because the hostel-diversion issue was real (roommates had already 'joked' about methylphenidate), titrated over five weeks; cognitive restructuring for the 'fraud' narrative; a structured study-skills rebuild (Pomodoro-typed blocks, active recall, ward-log discipline).",
      outcome: "At twelve weeks: all assignments current, no supplementary exams, the study partner converted to a permanent system; the anxiety unwound by itself as the deadline record cleaned. Her one-line verdict: 'I did not get smarter: I finally stopped paying interest on a debt.'",
      teachingPoints: [
        "The school report card is the adult ADHD diagnosis's strongest document: retrieve it, photograph it, read the teacher's remarks verbatim.",
        "The scaffolding-first trial established need and reduced the anxiety before any medicine.",
        "Atomoxetine's slower onset requires warning at the start, or the student abandons it in week 2.",
        "Diversion risk is a campus reality that shapes molecule choice. The roommates' 'joke' was the clinical fact.",
        "'Exam-pill seeker' prejudice nearly cost this student three more years: the childhood evidence settles it.",
      ],
    },
  ],
  clinicalPearls: [
    "The engine is full-size and the brakes arrive late: punish the character and you punish the wrong system; the child KNOWS the rule, the rule just does not arrive at the moment of impulse.",
    "Two settings, several symptoms before 12, clear impairment: the gate that separates a brain state from a style; school-only or home-only symptoms mean: look for the SETTING's problem first.",
    "Heritability ~75%: the child's diagnosis is the family's screening event; screen the parents at the child's assessment and the childhood at the adult's.",
    "Sleep first, hearing second, then the label: the cheapest mimics removed before the prescription; the sleep-starved child is the ADHD impersonator.",
    "The interest dial: lock-on to novel, immediate, rewarding; drift on boring-but-important: the cricket paradox answered, and the misunderstanding that most hurts these children.",
    "Under 6: parent training alone; the guideline constant and the ethics favourite.",
    "Methylphenidate works on day one (titration in days); atomoxetine takes 2–6 weeks. Warn at the start or the family abandons it in week 2.",
    "Treated ADHD carries LOWER later substance misuse than untreated: the paradox that answers the addiction-fearing parent.",
    "2–3 per class of 50: the classroom-average statistic that obligates every school; almost all are being managed as discipline problems.",
    "Schedule X is protection, not bureaucracy: prescription documentation, dispensing records, review-linked repeats. The discipline that keeps the treatment climate honest.",
    "The hostel roommate asking to 'borrow one tablet' for an all-nighter is Schedule-X sharing, both parties are at risk; diversion counselling is explicit, every time.",
    "Consequences work best immediate, predictable and small: the design logic of every behavioural programme for ADHD.",
    "The honest longitudinal sentence: 'symptoms usually soften; consequences can harden': hyperactivity becomes restlessness while the consequences adultify.",
  ],
  highYieldSummary: [
    "Definition: ADHD is a neurodevelopmental regulation condition; the prefrontal braking-and-steering system over attention, impulse and activity maturing late and noisily while the engine of drives runs full-size; bright, energetic children who lose notebooks, blurt answers, cannot sit through a period and make careless mistakes: punished daily for a brain state rather than a character flaw.",
    "Epidemiology: ~5% of children, ~2.5% of adults; boys 2–3:1 in childhood with adult identification approaching parity (the inattentive girl the missed epidemic); roughly two-thirds retain some impairing symptoms into late adolescence, one-third to half meet full criteria as adults; untreated ADHD raises accidents, school dropout, substance initiation, teenage pregnancy and employment instability: the epidemiological case for treating. India: 1–8% by instrument and cutoff; 2–3 per class of 50.",
    "Mechanism: the brakes and the engine (prefrontal maturation ~2–3 years behind, punishment after the fact teaches nothing, the wrong system punished); the interest dial (attention as a lock-on mechanism rotating to novel-immediate-rewarding and resisting boring-but-important, the cricket-hours vs ten-lines paradox); the chemistry (dopamine and noradrenaline carrying the 'this is worth it' signal, stimulants amplifying the boring-signal until it competes); the overloaded classroom (the Indian school as an amplification machine, the environment decides how much wiring becomes pathology).",
    "Diagnosis: the DSM-5-TR gates; 6 of 9 and/or 6 of 9, at least 6 months, SEVERAL symptoms before 12, TWO OR MORE settings, impairment, mimic exclusion; the assessment discipline: multi-source history (parent AND teacher with named rating scales. Conners, Vanderbilt, SNAP-IV), the mimics audit (sleep, hearing, absence seizures, anxiety, depression, trauma, substance, iron; risk-anchored thyroid/lead), the baseline before medication (height, weight, BP, pulse, cardiac screen); in adults the documentary retrofit: school report cards the single most decisive document.",
    "Treatment: two rails. Structure first (parent training with the 5:1 praise ratio and catch-him-being-good; homework in 20-minute blocks; the school kit with front seating, errand jobs and the 3-target daily report card: the highest-yield school tool ever designed); first-line alone under 6. Pharmacotherapy: methylphenidate (DAT/NET inhibition, day-one effect, 5 mg start, weekly titration, short-acting 3–4 hours vs long-acting 8–12 hours; appetite-sleep-growth monitoring with breakfast before dose and 6-monthly charting); atomoxetine (NET-selective, 2–6 weeks, non-controlled, the diversion-shaped and anxious-comorbidity choice); lisdexamfetamine (the prodrug arrival, 20–70 mg/day lineage); clonidine for the sleep/tics riders.",
    "Comorbidity and the adult era: learning disorders ride in a third and need their own remediation (the ADHD tablet does not treat handwriting); ODD/CD, anxiety, mood and tics each change the plan; adult ADHD is the continuity era: medication continuation with patient-controlled dosing days, vocational prostheses (alarms, single notebook, calendar blocking, accountability partner), driving counsel, and the counter-intuitive headline that treated ADHD carries LOWER later substance misuse.",
    "The Indian tier: the punishment-first presentation filter (the child arrives pre-roughened with secondary ODD and self-image damage); the tuition paradox (more stationary seat-time for the child whose deficit is stationary seat-time, homework by time, not volume); Schedule X prescription discipline for stimulants (documentation, dispensing records, review-linked repeats, protection, not bureaucracy); the coaching-city diversion and feigning problem (childhood evidence and collateral decide); the missed inattentive girl ('does homework take four times the promised time?', 'is her bag a permanent archaeological site?'); the family screen free and enormous at ~75% heritability; costs: methylphenidate ₹200–800, long-acting ₹1,000–2,500, atomoxetine ₹800–2,500 monthly (approx 2026).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "adhd-quiz-1",
      question: "Before age 6, the guideline first-line treatment for ADHD is:",
      options: ["Methylphenidate", "Parent behavioural training", "Atomoxetine", "Dietary elimination"],
      correctIndex: 1,
      explanation: "The ethics-favourite constant; medication joins only for insufficient response at school age.",
      afterSectionId: "management",
    },
    {
      id: "adhd-quiz-2",
      question: "The parental paradox — 'he plays cricket for hours, so he can focus' — is answered by:",
      options: ["He cannot have ADHD", "The interest dial: lock-on to novel/rewarding demands, drift on boring-but-important ones", "Cricket is therapeutic", "His teacher is lying"],
      correctIndex: 1,
      explanation: "Attention as a lock-on mechanism with a motivational gearbox — the engine works; the shifting is the deficit. The cricket focus is his strength, not his defence.",
      afterSectionId: "mechanism",
    },
    {
      id: "adhd-quiz-3",
      question: "Atomoxetine differs from methylphenidate in:",
      options: ["Being a controlled Schedule X drug in India", "Slower onset (2–6 weeks), no abuse liability, anxiety-comorbidity benefit", "Working only for hyperactivity", "Requiring dietary restrictions"],
      correctIndex: 1,
      explanation: "The NET-selective non-stimulant trade: the diversion-risk choice, with the clock warned at the start.",
      afterSectionId: "management",
    },
    {
      id: "adhd-quiz-4",
      question: "A 9-year-old 'does not listen' at school and home, with nightly mobile use till 11:30 and 6.5 hours of sleep. First step:",
      options: ["Start methylphenidate", "Correct sleep for four weeks and re-assess", "EEG", "Intelligence testing"],
      correctIndex: 1,
      explanation: "The sleep-starved child is an ADHD impersonator; treat the mimic, then re-look.",
      afterSectionId: "diagnosis",
    },
    {
      id: "adhd-quiz-5",
      question: "The most useful diagnostic document in an adult ADHD assessment:",
      options: ["Last year's blood reports", "School report cards and teacher remarks from Std 1–8 plus a parent interview", "A continuous performance test", "A sleep diary alone"],
      correctIndex: 1,
      explanation: "Childhood evidence retrofitted — the onset gate lives in documents and the parents' memory.",
      afterSectionId: "diagnosis",
    },
    {
      id: "adhd-quiz-6",
      question: "The hostel roommate asking to 'borrow one tablet' for an all-nighter:",
      options: ["A harmless favour between friends", "Schedule-X sharing — a legal and medical event with both parties at risk", "Fine if the dose is halved", "A matter for the student counsellor only"],
      correctIndex: 1,
      explanation: "Diversion of a prescribed stimulant is Schedule-X sharing — the counselling is explicit, and it is part of every adolescent prescription.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State the DSM-5-TR gates for ADHD and the tightening that matters.", answer: "THE GATES: at least 6 of 9 inattention and/or 6 of 9 hyperactivity-impulsivity items, present at least 6 months, to a degree inconsistent with developmental level; SEVERAL symptoms present before age 12; in TWO OR MORE settings; clear functional interference; not better explained by another condition. THE TIGHTENING: DSM-5-TR's requirement of 'several' (rather than 'one') symptoms before 12 blocks the late-onset mimics; sleep deprivation, substance use and depression presenting with adult-onset inattention that would otherwise pass the gate. THE PRESENTATIONS: predominantly inattentive (the missed girl), predominantly hyperactive-impulsive (mostly preschoolers), combined (the classic), with severity mild/moderate/severe by symptom count and impairment. The two-setting logic deserves its own sentence: school-only symptoms raise the school-problem flag, home-only symptoms raise the home-problem flag. The SETTING's problem is investigated before the child's label.", topic: "Diagnosis" },
    { question: "Write the sleep-and-hearing-first rule for every 'not listening, can't sit' child.", answer: "THE RULE: before the ADHD label is earned in any such child, remove the two cheapest mimics. SLEEP: audit duration, timing, snoring and apnoea, and the late mobile gaming; the sleep-starved child is an ADHD impersonator, and the test is therapeutic: correct sleep for four weeks and re-assess; symptoms that are weekend-structured (better on structure, worse on school nights) point to sleep, not to brakes. HEARING: any child presenting as 'not listening' gets the ears checked, always; 'does not seem to listen when spoken to directly' doubles as the audiometry flag, and deafness treated as dysregulation is the error the rule exists to prevent. Only then the deeper audit: absence epilepsy behind the stereotyped vacant spells (EEG thinking, not scolding), anxiety stealing the attention, depression, trauma, substance in adolescents, iron in the severe picky eater; risk-anchored labs, never blanket screening.", topic: "Diagnosis" },
    { question: "Tell the brakes story and the interest-dial story to a parent, four sentences each, ending each with the intervention it implies.", answer: "THE BRAKES: 'Your son's engine is full-size. The energy, the drive, the brilliance at cricket are real. The brakes (the brain's steering system over all that power) arrive late, about two to three years behind, and work inconsistently. He KNOWS the rule; the rule just does not arrive at the moment of impulse. Which is why scolding after the fact teaches nothing (the system being punished was not the one that failed) and why consequences work best immediate, predictable and small.' THE INTERVENTION IT IMPLIES: the behavioural architecture; the 5:1 praise ratio, commands one at a time, star charts with immediate small rewards, consequences within seconds. THE INTEREST DIAL: 'Attention is not a quantity he has more or less of. It is a lock-on mechanism with a dial. In his brain the dial rotates to novel, immediate and rewarding, and resists boring-but-important. That is why three hours of cricket highlights are effortless and ten lines of copying are impossible, not laziness, dial mechanics. The tablet does not create attention; it amplifies the boring-but-important signal until it can compete.' THE INTERVENTION IT IMPLIES: medication where justified, and homework designed for the dial: 20-minute blocks, movement breaks, work by time not volume.", topic: "Mechanism" },
    { question: "Before starting methylphenidate: list the baseline measures and the cardiac screen questions.", answer: "THE BASELINE SET: height, weight, blood pressure and pulse; documented before the first dose; sleep and appetite baselines documented too, because the follow-up comparisons (the growth chart every six months, the appetite report, the last-dose timing against sleep onset) are the monitoring system. THE CARDIAC SCREEN QUESTIONS: any family history of unexplained sudden death under 40; any fainting on exertion; any known structural cardiac disease: the three questions that decide who gets the ECG and the cardiology referral (the few) before the prescription (the many). THE CONTRAINDICATION TIER: structural cardiac disease and active psychosis or mania; the stimulant route off the table, honestly stated. THE COUNSELLING THAT RIDES ALONG: routine cardiac disease is NOT a complication of these medicines in healthy hearts; the scare stories concern pre-existing structural disease; the breakfast-before-dose instruction (the appetite effect peaks mid-day) and the expectation-setting (effects visible day one, titration in days) delivered the same visit.", topic: "Pharmacology" },
    { question: "Methylphenidate vs atomoxetine: three contrast points each on speed, abuse/diversion profile, and monitoring.", answer: "SPEED: methylphenidate blocks dopamine and noradrenaline reuptake in prefrontal cortex with effect visible on day one, dose-finding is days, not weeks; atomoxetine is NET-selective with a 2–6-week clock to effect and a longer titration, which must be warned at the start or the family abandons it in week 2. ABUSE/DIVERSION PROFILE: methylphenidate is Schedule X in India (prescription documentation, dispensing records, review-linked repeats) because it is a genuinely divertible stimulant (the hostel 'borrow one tablet' problem); atomoxetine is non-controlled (Schedule H), non-dopaminergic, with no abuse potential: the choice where hostel/boarded risk, a diversion history, or personal/substance misuse shapes the prescription, and often where comorbid anxiety rides along (dual-benefit). MONITORING: methylphenidate; appetite fall (breakfast before the dose; weight and height charted 6-monthly, the growth effect averaging small and mostly catch-up-guardable), sleep delay (last-dose timing), headache and stomach-ache in the initial days, small BP/pulse rises; atomoxetine: appetite/weight and BP monitoring plus the rare liver-warning and the suicidality-class warning awareness. The molecule choices are completed by lisdexamfetamine (the prodrug arrival, smoother, for partial response or rebound) and clonidine (the sleep/tics rider adjunct).", topic: "Pharmacology" },
    { question: "Name three comorbidities that change management and the mechanism of the change in each.", answer: "LEARNING DISORDER (riding in a third of cases): the change mechanism is target-mismatch. The ADHD medication is escalated for 'poor response' when the failure is teaching mismatch; remediation and writing-fluency drills are their own treatment. The ADHD tablet does not treat handwriting. ANXIETY (the stolen-attention mimic and rider): the change mechanism is dual-benefit molecule choice; atomoxetine's anti-anxiety bonus and the priority of treating the worry that is stealing the attention, with stimulant rebound sometimes read as anxiety and mistitrated. ODD/CONDUCT DISORDER (the comorbidity norm in the punished child): the change mechanism is the behavioural escalation protocol plus the distinction that disciplines it (ODD's deliberate, aimed, calm refusal against ADHD's fast, unaimed, regretted impulsivity) because the two need different consequences architectures, and the punitive household has usually been treating the second as the first for years. (Honourable mentions that also change plans: tics, clonidine's rider role; sleep: its own target before anything else.)", topic: "Clinical practice" },
    { question: "Give the 2–3 per class-of-50 statistic and explain what it obligates a school to do.", answer: "THE STATISTIC: an Indian classroom of 50 has, on average, 2–3 children with ADHD. The treatment-gap arithmetic that means almost all of them are currently being managed as discipline problems. WHAT IT OBLIGATES: (1) the recognition that 'this is a normal brain you will meet every year of your career'; the leverage sentence that converts a moral argument into an accommodation plan; (2) the accommodation kit negotiated with the doctor's letter: seating front-and-centre away from window and door, permitted movement channels (the errand jobs that turn the engine into employment), shortened written workload and homework batching, breaks between tests, oral testing where writing masks knowledge; (3) the daily report card: the 3-target card (seat-work done, hands-up not blurting, submitted homework) between teacher and parent, the highest-yield school tool ever designed; (4) the referral duty: the teacher who recognises the pattern sends for assessment rather than for punishment. The Indian legal layer: RPwD 2016 covers ADHD under the benchmark-disability category only in severe cases with impairment certification; most accommodation is negotiated school-by-school, and the letter works in most CBSE/ICSE/State schools.", topic: "Indian practice" },
    { question: "Explain to a hostel warden why sharing an ADHD tablet is a legal and medical event, not a favour.", answer: "THE LEGAL LAYER: methylphenidate and the amphetamine-based formulations are Schedule X controlled medicines in India; prescriptions need specific documentation formats, pharmacies log dispensing, and repeats need reviews; a tablet handed from one student's bottle to another is diversion of a controlled drug, and both parties are at risk (the sharer's prescription record and the taker's unmonitored exposure). THE MEDICAL LAYER: the tablet is a dose-calibrated treatment for a diagnosed brain state, not a general study aid. The taker gets the sympathomimetic effects (the appetite fall, the sleep delay, the BP and pulse rises, the anxiety) without the diagnosis, the baseline measurements, the titration or the monitoring that make it safe; and in the undiagnosed taker with an unheard cardiac history, the exposure is exactly the uncontrolled experiment the Schedule X rules exist to prevent. THE COUNSELLING FRAME: 'protection, not bureaucracy'; the same conversation the adolescent patient gets at every prescription, because the roommate's request arrives as a joke and leaves as a refusal only if the warden and the patient both know it is a legal and medical event.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is it bad parenting? Did we spoil him?", answer: "No. This is one of the most heritable brain conditions we know: roughly three-quarters of the variance is genetic. Parenting style can make it worse or better, but it did not create it, and neither beatings nor 'being strict' will remove it; the punishments will, however, add a second layer of anger and anxiety on top of the first problem." },
    { question: "Sugar, chocolate, chips: should we cut these out?", answer: "The sugar effect is essentially myth; blinded trials have repeatedly failed to find it. Some parents genuinely report behaviour differences with specific colouring agents or preservatives in individual children (remove these for a structured month if you suspect them) but do not build your whole plan on the diet aisle." },
    { question: "It's the mobile and the TV, isn't it?", answer: "Screens do not cause ADHD. What they do: eat sleep hours (which mimics it), displace homework practice, and drill the brain on instant rewards (which makes the boring tasks feel more boring). So we limit screens for the same reason we limit them for every child, but removing the screen will not remove the condition." },
    { question: "Will he grow out of it?", answer: "Partially, honestly. Hyperactivity visibly softens into restlessness in most; attention and organisation problems persist into adulthood in roughly half to two-thirds at some level. 'Growing out' is really 'growing in': the brain matures, the systems improve, and with treatment the whole road is smoother." },
    { question: "Will the medicine make him addicted? It's a stimulant.", answer: "The paradox is the opposite: treated ADHD shows LOWER rates of substance misuse than untreated ADHD in follow-up studies. The medication is not a high at proper doses; it is signal amplification. The real addiction risks are in NOT treating: school failure and early substance initiation are the classic gateways." },
    { question: "His appetite fell after starting the tablet. Growth? Weight?", answer: "Common and manageable: give a solid breakfast before the morning dose (the effect on appetite peaks mid-day), chart height and weight six-monthly, and expect the average growth effect to be small; millimetres in a year on group data, mostly recoverable. If weight tracks down consistently, we adjust dose, timing or molecule; we do not just stop." },
    { question: "Does he have heart risk? We heard a sudden-death story.", answer: "Routine cardiac disease is NOT a complication of ADHD medicines in healthy hearts: the scare stories concern children with pre-existing structural disease. Our job: ask the family history (sudden unexplained death under 40, fainting with exercise) and examine properly before starting; only the few with red flags get the ECG and cardiology referral. Your child's heart being normal, the tablet is not a cardiac event." },
    { question: "Should we tell the school he is on medication?", answer: "Tell the school the ACCOMMODATIONS (the seat, the breaks, the report card) and that he has an attention condition; the medicine details are optional disclosure. The teacher needs the how-to-teach information more than the pharmacology." },
    { question: "He can focus for three hours of cricket, then he can focus, he just doesn't want to study?", answer: "That is the interest dial, and it is the misunderstanding that most hurts these children. The ability to lock on to exciting things proves the engine; the fault is in the GEARBOX: the shifting to boring-but-important demands. We treat the gearbox; the cricket focus is his strength, not his defence." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — the ADHD criteria logic (paraphrased; items not reproduced)" },
      { source: "NICE NG87 (2018, updated) — the ADHD guideline architecture: parent training first under 6, medication rules, monitoring" },
      { source: "American Academy of Pediatrics — ADHD clinical guidance (the under-6 first-line constant; monitoring baselines)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.4 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "The MTA Cooperative Group — the multimodal treatment study (medication plus behavioural structure, the long-run evidence)" },
    ],
    reviews: [
      { source: "Faraone SV et al. — the worldwide-pooled prevalence meta-analyses (~5% children) and the age-of-onset work behind DSM-5" },
      { source: "Shaw P et al. — cortical maturation delay in ADHD (the 2–3-year lag imaging lineage; the 'growing in' trajectory)" },
      { source: "Sonuga-Barke EJ — the dual-pathway (delay-aversion/executive) models; the interest-dial framing" },
      { source: "Storebø OJ et al. (Cochrane) and Cortese S et al. — the methylphenidate evidence-quality lineages; the adult comparative-effectiveness network" },
      { source: "Biederman J et al. and Wilens TE et al. — treated ADHD and reduced substance outcomes (the paradox evidence)" },
      { source: "The Indian layer — classroom/school prevalence studies (the 1–8% instrument-dependent band); IAP ADHD awareness guidance; Schedule X dispensing rules; lisdexamfetamine's Indian market entry; metro pharmacy price points (approx 2026)" },
    ],
    patientResources: [
      { source: "The school negotiation kit — the doctor's letter specifying seating, movement breaks, homework caps and the daily report card" },
      { source: "The parent-training coaching route (3–4 clinic-based sessions with WhatsApp follow-up) and the child-guidance clinic tier; Tele-MANAS 14416 for family support" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: the brakes and the engine, the interest dial, the treatment's two rails, the honest answers on growth and addiction.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The diagnostic gates, the two mechanism stories, the mimics audit, the molecules and their monitoring.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything: the Schedule X discipline, the diversion counselling, the coaching-city diagnostic bar, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The regulation definition, the diagnostic gate, the prevalence arithmetic and the heritability.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the gates (two settings, before 12, impairment) and the heritability screen cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The brakes and the engine, the interest dial, the maturation lag, the overloaded classroom.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can tell the brakes story and the interest-dial story to a parent, each ending in its intervention." },
    { number: 3, title: "Clinical Practice", description: "The symptoms, the assessment discipline, the mimics, the two-rail treatment.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the mimics audit and the baseline-before-medication set without notes." },
    { number: 4, title: "Indian Context", description: "The punishment-first filter, Schedule X, the tuition paradox, the missed girl.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the Schedule X script and the diversion counselling, and hold the coaching-city diagnostic bar." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield summary.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the 7-year-old diagnostic-approach essay and the 5-year-old treatment ethics question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.4 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "DSM-5-TR (APA) — the ADHD criteria logic (paraphrased; items not reproduced); the 'several symptoms before 12' tightening", sourceType: "classification", year: "2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Faraone SV et al. — the worldwide-pooled prevalence meta-analyses (~5% children) and the age-of-onset work behind DSM-5", sourceType: "meta-analysis", year: "2003 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Posner K et al. / the MTA Cooperative Group — the multimodal treatment study (medication plus behavioural structure, the long-run evidence)", sourceType: "trial", year: "1999 onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Shaw P et al. — cortical maturation delay in ADHD (the 2–3-year lag imaging lineage; the 'growing in' trajectory)", sourceType: "primary", year: "2007 onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Sonuga-Barke EJ — the dual-pathway (delay-aversion/executive) models; the interest-dial framing", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "NICE NG87 — the ADHD guideline architecture (parent training first under 6; medication rules; monitoring)", sourceType: "guideline", year: "2018 (updated)", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Storebø OJ et al. (Cochrane) and Cortese S et al. — the methylphenidate evidence-quality lineages; the adult ADHD comparative-effectiveness network", sourceType: "systematic-review", year: "2015 onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Biederman J et al. and Wilens TE et al. — treated ADHD and reduced substance outcomes (the paradox evidence)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "American Academy of Pediatrics — ADHD clinical guidance (the under-6 first-line constant; the monitoring baselines)", sourceType: "guideline", year: "2019 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "The Indian epidemiology and awareness layer — classroom/school prevalence studies (the 1–8% instrument-dependent band); IAP ADHD awareness guidance", sourceType: "indian-guideline", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S12", source: "The Indian regulatory and market layer — Schedule X dispensing documentation rules for stimulants; lisdexamfetamine's Indian market entry; metro pharmacy price points (approx 2026)", sourceType: "government", year: "2026 (approx)", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The diagnostic gates: at least 6 of 9 inattention and/or 6 of 9 hyperactivity-impulsivity items for at least 6 months, inconsistent with developmental level; SEVERAL symptoms before age 12; TWO OR MORE settings; clear functional interference; not better explained by another condition, with DSM-5-TR's 'several' tightening blocking the late-onset mimics (sleep deprivation, substance, depression).", grade: "established", sources: ["S1", "S2"] },
    { text: "Epidemiology: meta-analytic childhood prevalence around 5% (~2.5% adults); boys diagnosed 2–3:1 in childhood with adult identification approaching parity; roughly two-thirds retaining some impairing symptoms into late adolescence and one-third to half meeting full criteria as adults; untreated ADHD raising accidents, school dropout, substance initiation, teenage pregnancy and employment instability.", grade: "established", sources: ["S1", "S3"] },
    { text: "Heritability ~70–80%, among the most heritable psychiatric conditions; adoptee studies showing children resemble their biological, not adoptive, parents; a parent with ADHD the most useful clinical risk marker, making the child's assessment the family's screening event.", grade: "established", sources: ["S1", "S3"] },
    { text: "The maturation mechanism: prefrontal–striatal–cerebellar maturation delay (~2–3 years on average in imaging studies), prefrontal cortical thickness peaking later; the engine full-size, the brakes late; hyperactivity softening into restlessness while inattention and time-organisation persist in adult costume ('symptoms usually soften; consequences can harden').", grade: "established", sources: ["S1", "S5"] },
    { text: "The interest dial: attention as a lock-on mechanism rotating to novel, immediate, rewarding demands and resisting boring-but-important ones; the dual-pathway (delay-aversion/executive) framing; dopamine and noradrenaline carrying the 'this is worth it' signal, stimulants amplifying the boring-signal until it competes.", grade: "supported", sources: ["S1", "S6", "S8"] },
    { text: "The treatment architecture: parent behavioural training first-line always and sole first-line under ~6 years (the guideline constant); medication joined at school age where impairment justifies, with the multimodal evidence that medication plus behavioural structure outperforms either alone.", grade: "established", sources: ["S4", "S7", "S10"] },
    { text: "Methylphenidate: dopamine/noradrenaline reuptake inhibition in prefrontal cortex, effect visible day one with days-scale titration from a 5 mg base dose; short-acting 3–4 hours, long-acting 8–12 hours; the monitoring set (height, weight, BP, pulse, sleep, appetite) with breakfast-before-dose and 6-monthly growth charting; structural cardiac disease and active psychosis/mania the contraindications.", grade: "established", sources: ["S7", "S8", "S10"] },
    { text: "Atomoxetine: NET-selective non-stimulant, 2–6 weeks to effect, non-controlled with no abuse potential; the choice where diversion risk, substance history or comorbid anxiety shapes the prescription; lisdexamfetamine (the prodrug, 20–70 mg/day lineage) for partial methylphenidate response or prominent rebound.", grade: "established", sources: ["S7", "S8"] },
    { text: "The substance paradox: treated ADHD shows LOWER rates of later substance misuse than untreated ADHD in follow-up studies. The medication is signal amplification, not a high at proper doses; the real risks sitting in NOT treating (school failure and early substance initiation the classic gateways).", grade: "established", sources: ["S9"] },
    { text: "The mimics audit as part of the diagnosis: sleep loss (including apnoea and late gaming), hearing loss, absence epilepsy (stereotyped vacant spells needing EEG), anxiety, depression, trauma/adversity dysregulation, learning disorders (riding in a third), substance in adolescents, iron deficiency in severe picky eaters, with thyroid/lead testing risk-anchored, never blanket.", grade: "established", sources: ["S1", "S2", "S7"] },
    { text: "Adult ADHD: the diagnosis inherited from the child literature; the developmental retrofit with school report cards and parent interview as the decisive documents, the ASRS screen, the current functional map, collateral from partners; treatment the same molecule logic with long-acting formulations preferred and vocational/living structure (the external prefrontal prostheses).", grade: "established", sources: ["S2", "S7", "S8"] },
    { text: "The Indian tier: school-based prevalence 1–8% by instrument and cutoff; 2–3 children with ADHD per class of 50, almost all managed as discipline problems; the punishment-first presentation filter and the tuition paradox; Schedule X prescription discipline (documentation, dispensing records, review-linked repeats); the coaching-city diversion and feigning pressure (childhood evidence, multi-source history and impairment mapping holding the bar); methylphenidate ₹200–800, long-acting ₹1,000–2,500, atomoxetine ₹800–2,500 monthly (approx 2026).", grade: "supported", sources: ["S11", "S12"] },
  ],
};
