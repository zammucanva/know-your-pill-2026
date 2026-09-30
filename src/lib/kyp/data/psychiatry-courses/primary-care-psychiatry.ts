import type { PsychiatryCourse } from "./types";

/**
 * PSYCHIATRY IN PRIMARY CARE — canonical Psychiatry concept course
 * (migration batch 16, Group R — social psychiatry & services;
 * P1/Core priority — the batch's flagship lesson).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/primary-care-psychiatry.md — untouched
 * foundation), whose own source_map: NOTP 2e (2009) ch 7.8
 * (Part 8) — original rewrite, updated to NMHS 2015-16, the
 * DMHP/Tele-MANAS architecture (2026), WHO mhGAP and Indian
 * primary-care prescribing realities — re-researched against
 * the lineages the note itself cites (the NIMHANS National
 * Mental Health Survey; WHO's mhGAP Intervention Guide; the
 * Goa lay-counselling trials — MANAS, PREMIUM — and the
 * Karnataka and Assam clinic programmes; the collaborative-care
 * meta-analytic lineage of Kakuma, Woltmann and Gilbody on the
 * Katon-Unützer IMPACT foundation; Arroll's two-question screen,
 * BMJ 2003; the WHO PPC somatic-symptom studies of Gureje and
 * Simon; the Goa/Vellore reattribution-style literature; Kumar's
 * perinatal primary-care work) with per-claim provenance.
 *
 * Neuroscience honesty: the note teaches a service-delivery
 * engine — detection, prescribing, referral, programme
 * architecture — and grounds no brain region and no
 * neurotransmitter; brainRegions and neurotransmitters are
 * empty by design and the gap is recorded in contentGaps,
 * never papered over with decorative circuitry.
 *
 * Drug routes: only the drugs the note genuinely assigns a
 * frontline role AND that have existing KYP drug lessons are
 * linked (sertraline, escitalopram, fluoxetine, paroxetine as
 * the avoided one, mirtazapine, amitriptyline, bupropion);
 * the frontline's antipsychotic and cessation pharmacology
 * (risperidone, olanzapine, thiamine, varenicline,
 * buprenorphine, the depots) has no KYP drug page and is
 * recorded in contentGaps, never invented.
 */
export const primaryCarePsychiatryCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "primary-care-psychiatry",
  title: "Psychiatry in Primary Care",
  shortName: "Primary Care",
  kind: "concept",
  category: "Social Psychiatry & Services",
  groupLetter: "R",
  groupName: "Social psychiatry & services",
  learningPath: ["Psychiatry", "Social Psychiatry & Services", "Psychiatry in Primary Care"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "34 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Closing India's treatment gap — detection, first-line care, the five-minute consultation",

  summary:
    "Most mental illness in India never meets a psychiatrist — it meets a primary-care clinician for five minutes, or nobody. This course teaches detection through the somatic front door, safe first-line treatment, the red-flag referral line and the DMHP–Tele-MANAS support architecture.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the treatment-gap arithmetic for India and its clinical consequence: the primary-care clinician is the mental-health system.",
    "Detect depression and anxiety through the somatic front door with brief screening — the two-question mood-and-interest screen and the named instruments — and avoid the two classic detection errors: missing masked depression and over-diagnosing 'stress'.",
    "Prescribe first-line antidepressant management safely: SSRI choice, dose, duration, review rhythm, and the specific cautions (adolescents, pregnancy, the elderly, interactions).",
    "Deliver the four brief interventions that fit a consultation: behavioural activation, the sleep instruction, worry-time, and the alcohol brief conversation.",
    "Apply the referral red-flag list — psychosis, mania, high suicide risk, complex withdrawal, perinatal, childhood, treatment resistance, diagnostic doubt — with the immediate action the suicide-risk one demands.",
    "Describe the Indian support architecture: the DMHP's district team and essential-drug list, Tele-MANAS 14416 and telepsychiatry (e-Sanjeevani), mhGAP-IG training, the ASHA/ANM roles, and the Mental Healthcare Act 2017 duties.",
    "Handle the somatic symptom presentation without endless investigation or dismissal — the five moves of the evidence-based middle path.",
    "Document and follow up with the rhythm that makes brief care effective: the 2–4 week review, the 6–9 month continuation rule, and the relapse-drill handover.",
  ],
  quickFacts: [
    { label: "The arithmetic", value: "One in seven; 80–95% untreated", detail: "The National Mental Health Survey found roughly one in seven adult Indians living with a diagnosable mental disorder, with the overwhelming majority of common depression and anxiety (80 to 95 per cent) receiving no care at all; India's psychiatrists number some 0.3–0.75 per 100,000 people" },
    { label: "The mission", value: "Make the five minutes count", detail: "Recognise the common disorders, treat them safely with first-line tools, hold the dangerous ones, and know the referral line — the discipline the primary-care clinician is the only one positioned to practise" },
    { label: "The front door", value: "Gas, burning, weakness, sleeplessness", detail: "The presenting sentences: 'gas problem, saab', 'burning all over', 'no strength', 'sleep is not coming', 'palpitations; get an ECG', 'my head becomes blank' — the Indian primary-care psychiatric patient rarely opens with mood" },
    { label: "The thirty seconds", value: "The two-question screen", detail: "'In the last two weeks, have you been feeling low, sad, or hopeless most days?' and 'Have you lost interest or pleasure in things you usually enjoy?' — two yeses is a depression signal meriting fuller check; the screen's main enemy is that nobody asks" },
    { label: "The two laws", value: "Adequate dose, adequate duration", detail: "Review at 2–4 weeks for early response, judge at 6–8 weeks, and continue at least 6–9 months after remission — sub-therapeutic dosing 'for mildness' and discontinuation at first improvement are the twin failures of primary-care prescribing" },
    { label: "The iatrogenic pathway", value: "The long-term benzodiazepine", detail: "Benzodiazepines only as a short bridge (1–2 weeks) while the SSRI builds; the long-term benzo prescription is the single commonest iatrogenic pathway running through Indian primary care" },
    { label: "The helpline", value: "Tele-MANAS 14416", detail: "Since 2022 the national tele-mental-health service: trained counsellors first, psychiatrist and clinical-psychology escalation tiers, in over twenty languages — the primary-care clinician's interim risk handling, advice line and the patient's own helpline to carry home" },
    { label: "The law at the casualty door", value: "Treatment, not police", detail: "The Mental Healthcare Act 2017 decriminalised attempt to suicide (Section 115): the casualty ward's duty after an attempt is treatment — the person is presumed to be under severe stress" },
  ],
  knowledgeGraph: [
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The detected majority's home — the SSRI laws, the maintenance arithmetic for second and third episodes, and the perinatal protocol this course screens for" },
    { label: "Generalized Anxiety Disorder (GAD)", type: "condition", href: "/psychiatry/gad/", note: "Persistent worry-plus-body-symptoms — the primary-care version is the GAD note's package compressed: worry-time and the uncertainty note" },
    { label: "Panic Disorder & Agoraphobia", type: "condition", href: "/psychiatry/panic-disorder/", note: "'Palpitations; get an ECG' — the panic fleet detected with the same history discipline; the full method lives in the panic course" },
    { label: "Insomnias — Chronic Insomnia Disorder", type: "condition", href: "/psychiatry/insomnia/", note: "The three-question sleep map (time to bed, time to sleep, time awake) and the three-sentence stimulus-control instruction; the full CBT-I belongs to the counsellor tier" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The red-flag list's first item — expressed intent, plan, means or attempt history get immediate assessment, safety-planning and means discussion, never a routine appointment" },
    { label: "Substance Use — The Reward Hijack", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The alcohol and tobacco package of the primary-care kit — the FRAMES brief intervention and the cessation pharmacology where available" },
    { label: "Benzodiazepine Misuse — The Borrowed Calm", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The principal iatrogenic risk of primary-care psychiatry — the long-term prescription and the pharmacist's over-the-counter habit this course teaches the clinician to deprescribe" },
    { label: "Delirium in the Elderly — The Quiet Emergency", type: "condition", href: "/psychiatry/elderly-delirium/", note: "The frontline elderly cautions — SSRI hyponatraemia and falls, TCA avoidance, anticholinergic load, delirium recognition before any new sedative" },
    { label: "Transcultural Psychiatry & Stigma", type: "condition", href: "/psychiatry/transcultural-stigma/", note: "The idiom discipline the front door runs on — saying the patient's own word ('tension', 'gas', 'mann nahi lagta') before translating it to the chart, and the anti-stigma work the PHC counter does at population scale" },
    { label: "Community Mental Health Services", type: "condition", href: "/psychiatry/mh-services/", note: "The specialist tier this course refers to and stands on — the DMHP district team, Tele-MANAS 14416, e-Sanjeevani and the collaborative architecture (in-batch lesson)" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Primary-care psychiatry runs on an arithmetic, a door, a kit and a rhythm. The arithmetic first: with roughly one in seven adult Indians carrying a diagnosable mental disorder, 80 to 95 per cent of the common ones untreated, and some 0.3–0.75 psychiatrists per 100,000 people, no realistic hiring plan touches the denominator this generation — the primary-care clinician IS the mental-health system, and every detected-and-treated case is the programme working. The door is somatic: the Indian patient opens with gas, burning, weakness or sleeplessness, not mood — so detection is engineered into the consultation itself. Any repeated, multiple or unexplained physical complaint with a normal examination, especially with sleep change, appetite change, fatigue or recent loss, triggers the two-question mood-and-interest screen asked in plain speech; two yeses merit the fuller check, with the PHQ family as the public-domain quantified tier — the screen's main enemy is that nobody asks. The kit is short but disciplined: an SSRI (sertraline or escitalopram as the standard Indian choices) at adequate dose and adequate duration; benzodiazepines only as a one-to-two-week bridge; the four brief interventions that fit minutes — behavioural activation, the sleep instruction, worry-time, the alcohol conversation; and psychoeducation to patient and one family member in the same consultation. The rhythm converts response into remission: review at 2–4 weeks, judge at 6–8 weeks, continue at least 6–9 months after remission, then the relapse-drill handover. The referral line protects the dangerous — psychosis, mania, suicide risk beyond brief, complex withdrawal, perinatal, childhood, treatment resistance, diagnostic doubt — while the collaborative back-up (a care manager who follows patients on a registry, a supervising psychiatrist who reviews the caseload, stepped escalation for non-responders) keeps the held caseload's outcomes near specialist level. The evidence from every continent, Indian trials included, is consistent: trained primary care with a supervising specialist and a short list of safe medicines approaches specialist outcomes at a fraction of the cost.",
    steps: [
      "The arithmetic premise: the specialist-to-population ratio cannot be fixed by hiring this generation, and the conditions that fill the gap — depression, the anxiety disorders, alcohol and tobacco problems, insomnia, somatic presentations, first-detected psychosis, dementia's behavioural crises — are exactly the ones a trained MBBS prescriber can treat well.",
      "The somatic front door: the patient presents 'gas problem, saab', 'burning all over', 'no strength', 'sleep is not coming' — detection therefore rides the history discipline of the consultation itself, not a separate psychiatric setting.",
      "The door-question: any repeated, multiple or unexplained physical complaint with a normal examination (especially with sleep change, appetite change, fatigue or recent loss) triggers the two-question mood-and-interest pair in plain speech; two yeses is a depression signal meriting fuller check, the PHQ-9 the quantified tier.",
      "The first-line kit: the SSRI at adequate dose and duration (sertraline or escitalopram the standard Indian choices); the benzodiazepine bridge of 1–2 weeks only; the four brief interventions delivered as instructions, not referrals; psychoeducation — the cheapest item on the list — to patient and one family member together.",
      "The review rhythm: 2–4 weeks for early response, 6–8 weeks for full judgment, 6–9 months minimum of continuation after remission, then a gradual taper and the relapse-drill handover to the family.",
      "The referral line: the red-flag list sends psychosis, mania, suicide risk beyond brief, psychotic depression, catatonia, refusal of food and drink, treatment non-response after two adequate trials, diagnostic doubt, perinatal presentations, children, complex withdrawal and complicated dementia to the specialist tier; everything else is held in primary care.",
      "The collaborative back-up: the care manager on a registry, the supervising psychiatrist reviewing the caseload without seeing every patient, and stepped escalation — translated in India as the DMHP district team, Tele-MANAS 14416, e-Sanjeevani and the ASHA/ANM tier.",
    ],
    grade: "supported",
  },
  brainRegions: [],
  neurotransmitters: [],
  pathways: [
    {
      id: "detection-remission-pathway",
      name: "The detection-to-remission pathway (queue to recovery)",
      steps: [
        { label: "The recurring somatic complaint", detail: "Gas, burning, weakness, palpitations — third visit, all reports normal; the treatment gap hides in this queue" },
        { label: "The door-question", detail: "The two-question mood-and-interest pair asked in plain speech, in the patient's own idiom — under a minute" },
        { label: "The fuller check", detail: "Two yeses: the PHQ-9 as the quantified tier; the company it keeps — early-morning waking, weight change, tearfulness, slowed answers" },
        { label: "The first-line kit", detail: "SSRI at adequate dose; the four brief interventions as instructions; psychoeducation to patient and one family member" },
        { label: "The review rhythm", detail: "2–4 week review for early response, 6–8 week full judgment, then continuation at least 6–9 months after remission" },
        { label: "The handover", detail: "Gradual taper, and the relapse-drill — the early-warning signs taught to the family before the last visit" },
      ],
      clinicalManifestation: "The gas-and-weakness patient of visit three becomes the recovered patient of month nine — the consultation years the queue would have burned, converted into detected and treated illness.",
      grade: "supported",
    },
    {
      id: "collaborative-care-pathway",
      name: "The collaborative-care chain (caseload to specialist-level outcomes)",
      steps: [
        { label: "The caseload on a registry", detail: "Detected patients followed by name — the Indian translation: the DMHP worker or counsellor as care manager" },
        { label: "The psychosocial work done", detail: "Follow-up, brief interventions, family sessions — the hands that do what the doctor's five minutes cannot" },
        { label: "The supervising specialist", detail: "Reviews the registry caseload and guides treatment changes without seeing every patient — the district psychiatrist or the tele-consult" },
        { label: "Stepped escalation", detail: "Non-responders moved up — Tele-MANAS escalation, the medical college, the visiting psychiatrist's clinic day" },
        { label: "Outcomes held near specialist level", detail: "The Cochrane-backed, decade-replicated finding: primary-care outcomes approach specialist outcomes at a fraction of the cost" },
      ],
      clinicalManifestation: "The district where the counsellor's registry, the psychiatrist's visiting day and the PHC counter work as one machine — the engine that makes brief primary care safe.",
      grade: "supported",
    },
    {
      id: "somatic-middle-path-pathway",
      name: "The somatic middle path (unexplained symptom to contained follow-up)",
      steps: [
        { label: "The symptom taken seriously", detail: "History and examination done properly, once — the negative findings established explicitly" },
        { label: "The functional naming", detail: "'The nerves' sensitivity has been turned up; the pain is real, the machine is sound' — connected openly to the tension-sleep-mood axis" },
        { label: "Scheduled brief reviews", detail: "Regular appointments rather than on-demand with new tests — containment of the testing loop is the treatment's spine" },
        { label: "The comorbid axis treated", detail: "The depression or anxiety riding with it if present — and the insomnia always" },
        { label: "The red flags screened", detail: "Weight loss, night symptoms, neurological signs, age-appropriate cancer screening — asked, then honestly said to be absent" },
      ],
      clinicalManifestation: "The migrating-pains patient leaves the investigation loop and keeps the appointment instead — symptom counts and consultation rates both fall (the Goa/Vellore demonstration).",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "dmhp-era", time: "1990s", title: "The District Mental Health Programme", description: "India's flagship district-tier programme is launched — the district team, clinic days and free medicines that remain the collaborative backbone wherever it functions; every subsequent expansion has faced the same treatment-gap denominator.", phase: "onset" },
    { id: "screen-era", time: "2003", title: "The two-question screen validated", description: "Arroll, Khin and Kerse's BMJ paper establishes the two-question screen's detection performance; the subsequent Indian-language validation lineage of the PHQ family and the Kessler scales follows in the Indian journal tier.", phase: "onset" },
    { id: "task-sharing-era", time: "2000s–2010s", title: "India's task-sharing trials", description: "The Goa lay-counselling lineage (the MANAS trials, PREMIUM and colleagues), depression care in Karnataka and Assam clinics, and the NMHS-linked programme evaluations demonstrate the same direction: brief training, a supervising specialist and safe drug supply produce measurable recovery at population scale.", phase: "peak" },
    { id: "nmhs-era", time: "2015–16 + 2016", title: "The gap quantified and the protocol written", description: "The National Mental Health Survey puts common mental disorders near 10% of adults with an 80–92% treatment gap; WHO publishes the mhGAP Intervention Guide 2.0 — the non-specialist decision aid whose priority conditions and do/do-not cards operationalise this entire discipline and form the DMHP training curriculum.", phase: "peak" },
    { id: "mhca-era", time: "2017", title: "The Mental Healthcare Act's frontline duties", description: "No discrimination in care provision; informed consent standards for admission and treatment; the prohibition on chaining and the duty to report inhumane treatment; attempt to suicide decriminalised (Section 115) — the casualty ward's duty becomes treatment, not police.", phase: "duration" },
    { id: "tele-era", time: "2022 onward", title: "The telepsychiatry layer", description: "Tele-MANAS launches as the national tele-mental-health service — trained counsellors first with psychiatrist and clinical-psychology escalation tiers, in over twenty languages — joined by e-Sanjeevani video consults from the PHC itself: specialist advice without travel.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the discipline as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "The evidence from every continent, including Indian trials, is consistent: when primary care is trained, supported by a supervising specialist, and equipped with a short list of safe medicines, outcomes for common mental disorders approach specialist outcomes at a fraction of the cost. The WHO's mhGAP programme exists precisely because the global answer to the specialist-shortage arithmetic is task-shared primary care.",
    indianPrevalence: "The National Mental Health Survey (2015–16) found roughly one in seven adult Indians living with a diagnosable mental disorder; common mental disorders sit near 10% of adults with an 80–92% treatment gap, alcohol use disorders and severe mental illness similarly vast in their gaps, and the overwhelming majority of common depression and anxiety (80 to 95 per cent) receives no care at all. India's psychiatrists number some 0.3–0.75 per 100,000 people (registered active practitioners at the lower end of that range), with clinical psychologists and psychiatric social workers scarcer still, concentrated in metros and medical colleges — a ratio arithmetic no realistic hiring plan can fix this generation.",
    lifetimeRisk: "Structural, not individual: the average Indian family's help-seeking chain passes the temple, the tantric or the faith-healer, the local RMP, the pharmacist (the country's true first prescriber, alprazolam over the counter where enforcement sleeps), the general physician, and only then, after months and expenditures, the mental-health system.",
    indianNotes: "Costs at the counter (approx 2026, generic, vary by state and scheme): sertraline 50–100 mg roughly ₹40–150 a month; escitalopram 10 mg ₹60–200; amitriptyline (the eternal PHC stock) ₹15–40 monthly; risperidone 2–4 mg ₹60–180; buprenorphine-naloxone through designated centres near-free to subsidised; counselling free at the government/DMHP tier, ₹300–800 per session in towns, more in metros. Under PM-JAY and state schemes the inpatient and some day-care tiers are covered; the outpatient drug cost remains the family's usual burden — one reason continuation rates follow the cheapest generic, and one reason prescribing the affordable brand in writing is itself a mental-health intervention.",
  },
  etiology: [
    { category: "social", factor: "The specialist arithmetic", details: "Some 0.3–0.75 psychiatrists per 100,000 people, with psychologists and psychiatric social workers even scarcer, concentrated in metros and medical colleges — the denominator cannot be met by hiring; the design conclusion is task-shared primary care, not despair." },
    { category: "social", factor: "The pathway that runs through everything else first", details: "Temple, tantric or faith-healer, the local RMP, the pharmacist dispensing alprazolam over the counter, the general physician — months and expenditures accrue before the mental-health system is ever reached, and the illness compounds along the way." },
    { category: "psychological", factor: "The somatic front door and the anaesthetising label", details: "Distress speaks the body's language first (gas, burning, weakness), and the 'tension/weakness' label applied to everything anaesthetises further inquiry — masked depression is treated as 'acidity' for a year while it compounds." },
    { category: "social", factor: "The programme reality gap", details: "The DMHP's honest weaknesses — post vacancies, drug stock-outs, supervision gaps — are the daily weather of district practice; the families who fall through them join the untreated majority." },
    { category: "environmental", factor: "Cost at the counter", details: "The outpatient drug cost remains the family's usual burden under a scheme architecture that covers inpatient tiers — continuation rates follow the cheapest generic, and the unaffordable prescription is a prescription for relapse." },
  ],
  symptomClusters: [
    {
      category: "1. The somatic front door",
      symptoms: [
        "'Gas problem, saab' — 'burning all over' — 'no strength' — 'sleep is not coming'",
        "'Palpitations; get an ECG' — 'my head becomes blank'",
        "Repeated, multiple or unexplained physical complaints with a normal examination — the queue where the treatment gap hides",
      ],
    },
    {
      category: "2. The company it keeps (the detection signals)",
      symptoms: [
        "Sleep change, appetite change, fatigue or a recent loss attached to the physical complaint",
        "Early-morning waking, weight change, 'everything feels like a burden'",
        "Tearfulness in the consultation itself; slowed answers — the examination of mood is the consultation's own behaviour",
      ],
    },
    {
      category: "3. The anxiety and insomnia fleet",
      symptoms: [
        "Persistent worry-plus-body-symptoms — the GAD presentation the primary-care history must catch",
        "The three-question sleep map abnormal: time to bed, time to sleep, time awake",
        "Episodic palpitations and the ECG request — the panic presentation behind the cardiac door",
      ],
    },
    {
      category: "4. The missed-signal presentations",
      symptoms: [
        "The irritable energetic patient who 'has stopped complaining and become confident' — the missed mania",
        "Alcohol read as habit, never illness — the dependence behind the 'social drinking' report",
        "The elderly patient falling, sodium-low or newly confused — SSRI hyponatraemia, TCA load and delirium before any new sedative",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The two-question mood-and-interest screen",
      code: "Case-finding, under a minute",
      criteria: [
        "The trigger: any repeated, multiple or unexplained physical complaint with a normal examination — especially with sleep change, appetite change, fatigue or recent loss.",
        "Question one, verbatim: 'In the last two weeks, have you been feeling low, sad, or hopeless most days?'",
        "Question two, verbatim: 'Have you lost interest or pleasure in things you usually enjoy?'",
        "Two yeses is a depression signal meriting fuller check — screening and severity instruments like the PHQ-9 are named and available; the PHQ family is public-domain, the quantified tier.",
        "Sensitivity in Indian validation studies is strong; the screen's main enemy is that nobody asks.",
      ],
      duration: "Under a minute inside the five-minute consultation — the highest-yield thirty seconds in Indian medicine.",
      indianNote: "Asked in plain speech and the patient's own idiom — 'tension', 'nervous weakness', 'gas', 'chakkar', 'mann nahi lagta' — the clinician who can say the idiom before translating it to the chart detects earlier and prescribes with more authority.",
    },
    {
      system: "The three-question sleep map",
      code: "The insomnia screen",
      criteria: [
        "Time to bed — the sleep schedule's anchor.",
        "Time to sleep — the latency that betrays the worried mind.",
        "Time awake — the terminal insomnia of depression and the broken night of the anxiety fleet.",
        "Followed by the stimulus-control instruction in three sentences: bed for sleep only; same rise-time daily; the 20-minute wake rule with a boring chair.",
      ],
      duration: "One minute; the full CBT-I belongs to the counsellor tier, not the consultation.",
      indianNote: "The night-time alprazolam bought over the counter is part of this history — ask what the pharmacist has been selling.",
    },
    {
      system: "mhGAP-IG priority conditions",
      code: "The non-specialist decision aid",
      criteria: [
        "WHO's Intervention Guide supplies the disorder flow-charts for the priority conditions — the detection-to-action algorithms a non-specialist can follow.",
        "The 'do/do not' cards discipline the frontline's prescriptions — what to start, what to avoid, when to refer.",
        "The mhGAP-IG is the training curriculum the DMHP uses — the single document that best operationalises this entire discipline.",
      ],
      duration: "A training package and a desk instrument, not a one-off — the skills package the frontline carries.",
      indianNote: "The Indian primary-care clinician's realistic algorithm tier: the flow-charts fit the PHC counter where nothing else does.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Masked depression behind the physical complaint", distinguishingFeatures: "A year of treated 'acidity' while the depression compounds — the complaint is real, the examination is normal, and the mood axis was never asked about; the error-pair the door-question exists to break.", keyDifferentiator: "The two-question screen on any repeated, multiple or unexplained presentation — the screening discipline, not the next investigation." },
    { condition: "The 'tension/stress/weakness' label", distinguishingFeatures: "The diagnosis of tension anaesthetises further inquiry — everything from adjustment states to psychosis hides behind it in Indian primary care.", keyDifferentiator: "The label is never a diagnosis: the mood-and-interest pair and the mental state behind it decide what the tension is made of." },
    { condition: "Missed mania", distinguishingFeatures: "The irritable energetic patient who 'has stopped complaining and become confident' — the elevated episode read as improvement.", keyDifferentiator: "Ask the family what changed: sleeplessness, energy, spending, confidence beyond the person's baseline — then refer; new-onset mania is specialist-tier." },
    { condition: "Alcohol use disorder read as habit, never illness", distinguishingFeatures: "The 'social drinking' report and the morning steadier hidden behind a somatic complaint — the dependence the family normalises.", keyDifferentiator: "The alcohol brief conversation — honest units-and-consequences feedback, one clear recommendation and a follow-up date; complex withdrawal is the red-flag line." },
    { condition: "Organic disease behind the somatic presentation", distinguishingFeatures: "The red flags that do warrant fresh workup: weight loss, night symptoms, neurological signs, age-appropriate cancer screening — absent, they must be honestly said to be absent.", keyDifferentiator: "Examine properly once, establish the negative findings explicitly, screen the red flags — then the middle path, not the endless loop." },
    { condition: "Delirium in the elderly", distinguishingFeatures: "The new confusion, the fall, the sodium — the quiet emergency arriving through a sedative prescription or the illness beneath it.", keyDifferentiator: "Delirium recognition before any new sedative: SSRI hyponatraemia, TCA avoidance and anticholinergic load are the frontline's elderly cautions." },
  ],
  management: [
    { category: "pharmacotherapy", name: "The SSRI discipline — adequate dose, adequate duration", description: "First-line antidepressant: an SSRI, sertraline or escitalopram as the standard Indian choices (fluoxetine for the lethargic; paroxetine generally avoided for its withdrawal and interaction profile). Start at a standard low dose, titrate to an adequate dose within a week or two if tolerated; review at 2–4 weeks for early response, judge at 6–8 weeks, continue at least 6–9 months after remission — for second and third episodes the maintenance arithmetic lengthens.", whenToUse: "Every detected depression and most anxiety presentations the primary-care clinician treats; never sub-therapeutic dosing 'for mildness', never discontinuation at first improvement.", indianContext: "Sertraline 50–100 mg roughly ₹40–150 a month, escitalopram 10 mg ₹60–200 (approx 2026, generic) — prescribing the affordable brand in writing is itself a mental-health intervention; the specific cautions: adolescents, pregnancy, the elderly (hyponatraemia, falls), interactions." },
    { category: "pharmacotherapy", name: "The benzodiazepine bridge and the non-addicting sleep tier", description: "Benzodiazepines only as a short bridge (1–2 weeks) in distressing anxiety or insomnia while the SSRI builds; the long-term benzo prescription is the single commonest iatrogenic pathway running through Indian primary care. Non-addicting alternatives for sleep: low-dose sedating antidepressants where suitable (trazodone, mirtazapine; amitriptyline in low dose with its TCA cautions); ramelteon/melatonin as the non-sedating chronobiotic tier (availability varies).", whenToUse: "Distressing insomnia or anxiety in the SSRI's build-up fortnight — then the bridge is taken back, stated in so many words.", indianContext: "The pharmacist's over-the-counter alprazolam is the habit to deprescribe: ask what is being bought, and give the two-week-then-we-take-it-back script in writing." },
    { category: "psychotherapy", name: "The four brief interventions that fit minutes", description: "Behavioural activation ('three small scheduled activities per week, two pleasant one necessary, written on the calendar, done badly rather than perfectly') — the best evidence-per-minute of any depression treatment in primary care; the sleep instruction (bed for sleep only; same rise-time daily; the 20-minute wake rule with a boring chair); worry-time (a daily 20-minute appointment with the worry itself, written, contained); the alcohol brief conversation (honest units-and-consequences feedback plus one clear recommendation and a follow-up date — the FRAMES logic in plain delivery).", whenToUse: "Delivered as instructions in the consultation itself, not as referrals — every detected case of depression, anxiety, insomnia or hazardous drinking.", indianContext: "These four are the consultation's own psychotherapy tier: no counsellor required, no travel, no cost — the reasons the five minutes can count." },
    { category: "psychotherapy", name: "Psychoeducation — the cheapest item on the list", description: "The illness-is-treatable, medication-needs-time-and-continuity, relapse-early-warning talk, given to patient and one family member in the same consultation — the Indian primary-care version of family intervention's first rung.", whenToUse: "Every detection and every prescription; repeated at every review; handed over as the relapse drill before the taper.", indianContext: "'This is an illness like blood pressure, treatable, not a weakness' — the sentence that does anti-stigma work at population scale from the PHC counter." },
    { category: "pharmacotherapy", name: "The alcohol and tobacco package", description: "Brief intervention for hazardous drinking — the five-minute structured conversation (feedback, responsibility, advice, menu, empathy, follow-up); nicotine patch, varenicline or bupropion where available; thiamine in the malnourished drinker.", whenToUse: "Every positive alcohol history at the front door; every tobacco user — the two habits the consultation can move in minutes.", indianContext: "Uncomplicated alcohol and nicotine problems are held in primary care; complex or polysubstance withdrawal, delirium tremens risk and opioid dependence needing agonist treatment go to the de-addiction centre." },
    { category: "pharmacotherapy", name: "First-contact psychosis and bipolar management", description: "The primary-care task is recognition, safe initiation or continuation of a single antipsychotic (risperidone up to 3–4 mg or olanzapine up to 10 mg as the classic frontline doses while awaiting specialist review), avoidance of multiple-agent cocktails, depot continuation logistics, and linkage — not long-distance complex polypharmacy.", whenToUse: "First-detected psychosis awaiting referral, and stable maintained psychosis and bipolar followed in primary care with specialist back-up and a supply line.", indianContext: "The DMHP psychiatrist's visiting day and the district hospital's clinic day are the district's mental-health calendar and belong on your wall; the essential-drug list at its best carries risperidone and sometimes the depots." },
    { category: "service-design", name: "The referral craft — one named route with a date", description: "Give the family one named route with a date, not a letter; 'Tele-MANAS now on speakerphone' beats an OPD slip that may never be redeemed; a bridge-supply of medication where supply is uncertain — the referral letter is a system, not a paper.", whenToUse: "Every red-flag referral, and every referral into a district where stock-outs are the daily weather.", indianContext: "The clinician's local network map of who actually answers is worth more than the scheme brochure: know the actual humans, use Tele-MANAS for the gaps, and document caseloads that make the vacancy visible." },
    { category: "service-design", name: "The somatic middle path — five moves", description: "Take the symptom seriously and examine properly, once; name the condition in functional, non-pejorative terms ('the nerves' sensitivity has been turned up; the pain is real, the machine is sound'); schedule regular brief reviews rather than on-demand with new tests; treat the depression or anxiety riding with it, and the insomnia always; screen for the red flags that warrant fresh workup — then honestly say they are not there.", whenToUse: "Every medically unexplained or partly explained presentation — the highest-volume, highest-art primary-care skill.", indianContext: "Neither endless investigation nor dismissal — both actively worsen outcomes in the somatic literature; the Goa/Vellore trials' reattribution-style brief interventions and antidepressant treatment of the somatic-plus-depression cohort reduce both symptom counts and consultation rates." },
  ],
  safety: {
    redFlags: [
      "Suicide risk beyond brief: expressed intent, plan, means, or a history of attempt — immediate assessment, safety-planning and means discussion, never a routine appointment (Tele-MANAS 14416 for the interim)",
      "First-episode or suspected psychosis; any new-onset mania — the specialist tier",
      "Depression with psychotic features, catatonia, refusal of food and drink — think ECT early, not late",
      "Treatment non-response after two adequate trials; diagnostic uncertainty",
      "Pregnancy, postpartum and perinatal psychiatric presentations — specialist-led balancing",
      "Children and adolescents — the assessment pathway via child services where they exist, the DMHP psychologist otherwise",
      "Complex or polysubstance withdrawal, delirium tremens risk, opioid dependence needing agonist treatment — the de-addiction centre",
      "Dementia with unexplained rapid decline (reversible-cause workup) or unmanageable BPSD",
      "Severe self-harm, eating disorder with physical compromise, severe OCD — the specialist-tier conditions detected in primary care",
      "The elderly red flags: SSRI hyponatraemia and falls, TCA avoidance, anticholinergic load — and delirium recognition before any new sedative",
    ],
    urgentGuidance:
      "Risk means now: the expressed-intent patient gets an emergency psychiatric assessment the same day, safety-planning and a means discussion (the pesticide, the rope, the stored medicine removed from the house), Tele-MANAS 14416 on speakerphone for interim handling and family guidance, and documentation. After any attempt, the casualty ward's duty is treatment, not police: the Mental Healthcare Act 2017 (Section 115) presumes severe stress and decriminalises the attempt — treat first, protect dignity, arrange the mental-health assessment.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "First-line SSRI (primary care)", rationale: "With escitalopram, the standard Indian primary-care choice — the note's default; roughly ₹40–150 a month at 50–100 mg (approx 2026), the affordable continuation." },
    { name: "Escitalopram", slug: "escitalopram", role: "First-line SSRI (primary care)", rationale: "The second standard Indian choice at the frontline; ₹60–200 at 10 mg (approx 2026) — the interaction-light member of the pair." },
    { name: "Fluoxetine", slug: "fluoxetine", role: "First-line alternative", rationale: "The note's choice for the lethargic depressed patient — fluoxetine for the fatigue-dominated presentation." },
    { name: "Paroxetine", slug: "paroxetine", role: "Generally avoided at the frontline", rationale: "The note's explicit caution: paroxetine is generally avoided in primary care for its withdrawal and interaction profile." },
    { name: "Mirtazapine", slug: "mirtazapine", role: "Non-addicting sleep alternative", rationale: "The low-dose sedating antidepressant tier for sleep where a benzo would become the habit — named with trazodone as the non-addicting alternatives." },
    { name: "Amitriptyline", slug: "amitriptyline", role: "Low-dose sleep alternative (caution)", rationale: "The eternal PHC stock (₹15–40 monthly, approx 2026) in low dose for sleep — with its TCA cautions: avoid in the elderly, cardiotoxicity in overdose, anticholinergic load." },
    { name: "Bupropion", slug: "bupropion", role: "Smoking cessation option", rationale: "Named with the nicotine patch and varenicline as the cessation pharmacology where available — the tobacco half of the alcohol-and-tobacco package." },
  ],
  contentGaps: [
    "The somatic symptom tier beyond the primary-care frame: the source book's Parts 6–7 are missing and the note writes the front-door approach from general evidence — no KYP somatic-symptom course exists, so the five-move middle path is taught here and nowhere else.",
    "Perinatal psychiatry as its own lesson: the note calls perinatal depression the highest-leverage detection in the system and routes the protocol to the Depressive Disorders and Paediatric Mood courses; a dedicated perinatal lesson (the ANM-contact screening evidence, the specialist-led balancing) does not exist — recorded honestly.",
    "The frontline's non-antidepressant pharmacology: risperidone (up to 3–4 mg), olanzapine (up to 10 mg), thiamine, varenicline, buprenorphine-naloxone and the depots all have genuine roles in the note but no KYP drug page — KYP's drug lessons carry the twelve antidepressants only; the antipsychotic and cessation pharmacology stays in its own disease courses, never invented here.",
    "The mhGAP-IG walkthrough: WHO's Intervention Guide is the single document that best operationalises this discipline, but it has no KYP lesson — the flow-charts and do/do-not cards are summarised here, the document itself cited.",
    "The ECT and liaison tier: the note's 'think ECT early, not late' instruction for psychotic depression, catatonia and refusal of food and drink has no KYP lesson — the referral discipline is taught here, the modality is not.",
  ],
  patientGuide: {
    whatIsIt:
      "Most mental illness in India is treated — or missed — at the ordinary clinic: the PHC, the family doctor, the district OPD. There are too few psychiatrists for the numbers, so the country's mental health depends on the ordinary five-minute consultation done well. Primary-care psychiatry is the discipline of making those five minutes count: recognising the common conditions (depression, anxiety, sleeplessness, alcohol and tobacco problems, the body-complaint presentations), treating them safely, and sending the dangerous ones quickly to the specialist.",
    whatCausesIt:
      "This is not an illness but a way of organising care. The gap it closes comes from arithmetic (too few specialists for one in seven adult Indians), the help-seeking pathway (families try the temple, the healer, the local RMP and the pharmacist before the clinic), the cost of private treatment, and the way distress speaks the body's language first — gas, burning, weakness — so the mood problem behind it is never asked about.",
    symptoms:
      "The complaints that should prompt the mood questions: repeated or multiple body complaints with normal reports — gas, burning, weakness, palpitations; sleep that has broken; appetite change; tiredness; a recent loss; tearfulness; everything feeling like a burden; interest gone — 'mann nahi lagta'. If these have lasted more than two weeks, ask the doctor for the two-question check.",
    treatment:
      "The doctor asks two questions about mood and interest, may score a short questionnaire (the PHQ-9), and if depression is found: an antidepressant (usually sertraline or escitalopram) at a proper dose, taken daily for at least 6–9 months after you feel well; simple scheduled activities; sleep instructions; a review in 2–4 weeks. Sleeping tablets, if used at all, are a short bridge of a week or two — never the long-term answer.",
    selfHelp: [
      "Three small scheduled activities a week — two pleasant, one necessary, written on the calendar, done badly rather than perfectly.",
      "Bed for sleep only; same rise-time every day; if awake twenty minutes, get up to a boring chair until sleepy.",
      "Give the worry a daily twenty-minute appointment, written and contained — the rest of the day is worry-free.",
      "Count the drinks honestly, and set yourself a follow-up date to look at the count again.",
      "Take the tablet daily: two to four weeks to work is normal, not failure; feeling better is not the signal to stop — the course runs months beyond that.",
    ],
    whenToSeekHelp: [
      "Any thought of harming yourself — the same day: Tele-MANAS 14416 (free, day and night) or the casualty; the law since 2017 says treatment, not police",
      "Hearing voices, or holding beliefs others cannot share — the specialist tier",
      "Confusion or a sudden change in an older person on new medicines — delirium before any new sedative",
      "Shakes, fits or drinking that cannot stop — the de-addiction centre; withdrawal can be dangerous",
      "A mother-to-be or a new mother with low mood — the specialist-led balance; every immunisation visit is a chance to ask",
    ],
    indianResources: [
      "Tele-MANAS 14416 — the national tele-mental-health helpline: free, 24×7, in over twenty Indian languages",
      "The DMHP district clinic day at the district hospital — the district's mental-health calendar; ask the treating clinician for the next date",
      "e-Sanjeevani video consults — specialist advice from the PHC itself, with prescription logistics through the PHC pharmacy",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific primary-care psychiatry guideline exists as a single document; practice follows WHO's mhGAP Intervention Guide 2.0 — the non-specialist decision aid whose priority conditions, flow-charts and do/do-not cards the DMHP's training curriculum uses — with the Mental Healthcare Act 2017 (and its 2022 rules) supplying the legal duties: non-discrimination in care provision, informed consent standards for admission and treatment, the prohibition on chaining and the duty to report inhumane treatment, and Section 115's decriminalisation of attempted suicide with the presumption of severe stress.",
    systemContext: "The pathway runs through everything else first: the average Indian family's help-seeking chain passes the temple, the tantric or the faith-healer, the local RMP, the pharmacist (the country's true first prescriber, alprazolam over the counter where enforcement sleeps), the general physician, and only then, after months and expenditures, the mental-health system. The primary-care clinician therefore carries three diplomatic tasks: respect the faith-healing stage without deferring diagnosis to it (the WHO's classic finding — Indian faith-healers refer psychosis eventually; your alliance determines when); deprescribe the pharmacist's benzo; and convert the RMP next door from competitor to referral ally. The conditions that fill the gap — depression, the anxiety disorders, alcohol and tobacco problems, insomnia, somatic presentations, first-detected psychosis awaiting referral, dementia's behavioural crises — are exactly the ones a trained MBBS prescriber can treat well.",
    programmeContext: "The District Mental Health Programme — India's flagship since the 1990s, now nominally covering 700-plus districts — delivers training days, a district team (psychologist, psychiatric social worker and visiting psychiatrist attached to the district hospital, extending clinic days to blocks) and free medicines where it functions; its honest weaknesses (post vacancies, drug stock-outs, supervision gaps) are the daily weather of district practice. Tele-MANAS (14416), since 2022 the national tele-mental-health service, runs trained counsellors first with psychiatrist and clinical-psychology escalation tiers in over twenty languages; e-Sanjeevani adds video consults, including specialist, from the PHC itself. The ASHA and ANM/MPW tier does the household identification of psychosis, disability and perinatal depression, and the medication accompany-and-observe work. The essential-drug list at its best carries sertraline (or escitalopram), amitriptyline, risperidone, buprenorphine (in designated centres), thiamine, and now sometimes the depots.",
    costConsiderations: "Costs at the counter (approx 2026, generic, vary by state and scheme): sertraline 50–100 mg roughly ₹40–150 a month; escitalopram 10 mg ₹60–200; amitriptyline (the eternal PHC stock) ₹15–40 monthly; risperidone 2–4 mg ₹60–180; buprenorphine-naloxone through designated centres near-free to subsidised; counselling free at the government/DMHP tier, ₹300–800 per session in towns, more in metros. Under PM-JAY and state schemes the inpatient and some day-care tiers are covered; the outpatient drug cost remains the family's usual burden — one reason continuation rates follow the cheapest generic, and one reason prescribing the affordable brand in writing is itself a mental-health intervention.",
    culturalConsiderations: "The frontal presentation is local — 'tension', 'nervous weakness', 'gas', 'chakkar', 'mann nahi lagta' — and the clinician who can say the patient's idiom before translating it to the chart detects earlier and prescribes with more authority. The Indian version includes the three diplomatic tasks (the faith-healing stage respected without deferred diagnosis; the pharmacist's benzo deprescribed; the RMP converted to referral ally), and the cadre question: the BSc/MSc community-psychology and counselling cadres, the Tele-MANAS counsellor workforce and the ASHA perinatal screening pilots mean India is mid-experiment in task-sharing at a scale no country has run — and the trials (Goa lay-counselling for depression; community workers for psychosis and dementia disability) have already settled the outcome question in the cadres' favour. The resistance to guard against is the reflex to treat psychological hands as lesser hands.",
    patientCounselling: [
      "The mood-tablet script: 'The body's reports show the machine is sound, and the wiring that carries the complaints has been sensitised — this tablet turns the sensitivity down; the gas is real, and it will go the same way it came, through the nerves.'",
      "The addiction script: 'This one is not habit-forming: it needs two to four weeks, and it needs to be continued months after you feel well, then stopped gradually — that is not addiction, that is completing the course, like a bone set and then exercised.'",
      "The neighbour script: 'She has the same chemistry — this medicine is for an illness, not an identity; so is blood-pressure medicine, and half the village is on it without a village whisper.'",
      "The sleeping-tablet script: 'For a night or two, in crisis, yes; the tablet that fixes sleep permanently teaches the body to sleep without any tablet — two weeks, then we take it back.'",
      "The three-roads script: 'We have three roads — the district team's clinic day, Tele-MANAS on your phone now, and me; for the common ones, this is enough; for the serious ones, these roads run.'",
      "The thread script: 'Keep the thread; it harms nothing and may hold you steady while we work — the thread and the tablet together, then we watch together which one the illness respects.'",
      "The risperidone script: 'Long enough that the illness learns it cannot return — the first episode needs at least a year of full recovery before any taper discussion, and that decision belongs with the specialist visit we have booked; missing doses between now and then is the one thing that resets the clock.'",
      "The police script: 'No — the law since 2017 says this is a health matter, not a crime; our job is treatment and keeping the means away, and the helpline number on this card, 14416, is staffed day and night for exactly this.'",
    ],
  },
  decisionPath: {
    title: "The five-minute consultation: treat, hold or refer",
    nodes: [
      {
        id: "start",
        question: "The recurring somatic complaint with normal reports — or any repeated, multiple or unexplained presentation with sleep, appetite, fatigue or loss signals. Run the door-question: the two-question mood-and-interest screen, in the patient's own idiom.",
        branches: [
          { label: "Two yeses on the mood-and-interest pair", next: "depression-gate" },
          { label: "No mood-anxiety signal; the symptoms persist unexplained", next: "somatic-gate" },
          { label: "Danger features already visible (expressed intent, psychosis, mania, withdrawal)", next: "risk-gate" },
          { label: "Stable maintained psychosis or bipolar, routine follow-up", next: "hold-path" },
        ],
      },
      {
        id: "depression-gate",
        question: "The fuller check is done — the PHQ-9 scored, the company-it-keeps examined. Which picture?",
        branches: [
          { label: "Mild-to-moderate depression or anxiety, no red flags", next: "treat-path" },
          { label: "Psychotic features, catatonia, refusal of food and drink", next: "refer-path" },
          { label: "Pregnant, postpartum, or a child or adolescent", next: "refer-path" },
          { label: "Non-response after two adequate trials, or diagnostic doubt", next: "refer-path" },
        ],
      },
      {
        id: "treat-path",
        question: "Hold and treat in primary care.",
        recommendation: "The SSRI discipline: sertraline or escitalopram at adequate dose, titrated within a week or two; benzodiazepines only as a 1–2 week bridge in distressing anxiety or insomnia; the four brief interventions delivered as instructions (behavioural activation, the sleep instruction, worry-time, the alcohol conversation); psychoeducation to patient and one family member in the same consultation. Review at 2–4 weeks, judge at 6–8 weeks, continue at least 6–9 months after remission, then a gradual taper with the relapse-drill handover. Trained primary care with specialist support approaches specialist outcomes at a fraction of the cost — this is the programme working.",
      },
      {
        id: "risk-gate",
        question: "Which danger?",
        branches: [
          { label: "Suicide risk beyond brief: expressed intent, plan, means, or attempt history", next: "suicide-path" },
          { label: "First-episode or suspected psychosis; new-onset mania", next: "psychosis-path" },
          { label: "Complex or polysubstance withdrawal, delirium tremens risk, opioid dependence needing agonist treatment", next: "withdrawal-path" },
        ],
      },
      {
        id: "suicide-path",
        question: "Risk means now, not a routine appointment.",
        recommendation: "Immediate assessment, safety-planning and means discussion: the means (pesticide, rope, stored medicine) removed from the house with the family in the room; Tele-MANAS 14416 called on speakerphone for interim risk handling and family guidance while it rings; the same-day emergency psychiatric assessment through the DMHP psychiatrist or medical college; one named route with a date, a bridge supply where stock is uncertain, and documentation. The family's police question answered with the law: Section 115 presumes severe stress — the duty is treatment.",
      },
      {
        id: "psychosis-path",
        question: "First-contact psychosis or new mania — recognise, bridge, refer.",
        recommendation: "Refer to the specialist tier (the DMHP district psychiatrist, Tele-MANAS escalation, the medical college) with one named route and a date; safe initiation or continuation of a single antipsychotic only while awaiting review — risperidone up to 3–4 mg or olanzapine up to 10 mg, never multiple-agent cocktails; depot continuation logistics for the maintained patient; linkage, not long-distance polypharmacy.",
      },
      {
        id: "withdrawal-path",
        question: "Complex withdrawal, DT risk or opioid agonist treatment.",
        recommendation: "Refer to the de-addiction centre: complex or polysubstance withdrawal and delirium tremens risk are inpatient-tier; opioid dependence needing agonist treatment goes to the designated buprenorphine centre; thiamine in the malnourished drinker now. Uncomplicated alcohol and nicotine problems return to primary care once the acute tier is done.",
      },
      {
        id: "somatic-gate",
        question: "The middle-path gate — the red flags screened (weight loss, night symptoms, neurological signs, age-appropriate cancer screening)?",
        branches: [
          { label: "No red flags; the examination has been done properly, once", next: "middle-path" },
          { label: "A red flag is present", next: "workup-path" },
        ],
      },
      {
        id: "middle-path",
        question: "The evidence-based middle path — neither endless investigation nor dismissal.",
        recommendation: "Take the symptom seriously and examine properly, once, with the negative findings established explicitly; name the condition functionally and non-pejoratively ('the nerves' sensitivity has been turned up; the pain is real, the machine is sound'), connected openly to the tension-sleep-mood axis; schedule regular brief reviews rather than on-demand with new tests — containment of the testing loop is the treatment's spine; treat the depression or anxiety riding with it, and the insomnia always; the Goa/Vellore demonstration: symptom counts and consultation rates both fall.",
      },
      {
        id: "workup-path",
        question: "A red flag warrants the fresh workup.",
        recommendation: "Investigate the specific red flag and no more; then say honestly what is and is not there — and return to the middle path with the negative findings in hand. The red flags are the somatic presentation's safety rail, not its default.",
      },
      {
        id: "hold-path",
        question: "Stable maintained psychosis or bipolar on routine follow-up.",
        recommendation: "Hold in primary care with specialist back-up and a supply line: the depot continuation logistics arranged, the DMHP psychiatrist's visiting day and the district hospital's clinic day on your wall, the Tele-MANAS number with the family, and deterioration as the referral trigger — the collaboration that keeps the chronic tier out of the travel economy.",
      },
      {
        id: "refer-path",
        question: "The specialist tier — psychotic depression, catatonia, perinatal, childhood, non-response, diagnostic doubt.",
        recommendation: "Send with the referral craft: one named route with a date (the DMHP psychiatrist, Tele-MANAS escalation or the medical college), Tele-MANAS on speakerphone where the interim is risky, a bridge supply of medication where the PHC stock is uncertain, and the reason for referral written in two lines. Think ECT early, not late, for the psychotic-depressed, catatonic or food-refusing patient. Dementia with unexplained rapid decline joins this tier for the reversible-cause workup; unmanageable BPSD likewise.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating the 'acidity' for a year — masked depression missed",
      why: "The somatic front door is taken at face value: antacids, investigations and injections while the depression compounds behind the complaint — the error-pair the detection discipline exists to break, and the commonest way the treatment gap is manufactured one consultation at a time.",
      correction: "The door-question on any repeated, multiple or unexplained physical complaint with a normal examination: the two-question mood-and-interest pair in plain speech, especially when sleep, appetite, fatigue or a recent loss ride with it.",
    },
    {
      mistake: "The 'tension/stress/weakness' label applied to everything",
      why: "The diagnosis of tension anaesthetises further inquiry — grief, depression, psychosis and mania all hide behind it, and the label closes the consultation the two questions would have opened.",
      correction: "The label is never a diagnosis: the mood-and-interest pair, the company-it-keeps examination, and the error-pairs recited — including the confident irritable patient whose mania is being praised as improvement, and the alcohol read as habit rather than illness.",
    },
    {
      mistake: "Sub-therapeutic SSRI dosing 'for mildness' and discontinuation at first improvement",
      why: "The twin failures of primary-care prescribing: the dose never reaches adequate, and the course stops at the first better week — both guarantee relapse, teach the family the medicine 'does not work', and waste the detection that preceded them.",
      correction: "The two laws: adequate dose and adequate duration — review at 2–4 weeks, judge at 6–8 weeks, continue at least 6–9 months after remission, taper slowly; never switch before the 6–8 week judgment.",
    },
    {
      mistake: "The long-term benzodiazepine prescription",
      why: "The single commonest iatrogenic pathway running through Indian primary care: the nightly tablet that quietly takes over the job of sleep, inherited from the pharmacist's counter or begun as a 'bridge' that never ended.",
      correction: "Benzodiazepines only as a 1–2 week bridge in distressing anxiety or insomnia while the SSRI builds — then taken back, stated in so many words; the non-addicting sleep tier (trazodone, mirtazapine, low-dose amitriptyline with its cautions) where a hypnotic is genuinely needed.",
    },
    {
      mistake: "The somatic twin errors — endless investigation or dismissal",
      why: "Both classic errors actively worsen outcomes in the somatic literature: the fear-driven investigation loop feeds the symptom, and 'nothing is wrong with you' feeds the alienation — the patient leaves either way, to the healer who listens.",
      correction: "The five moves of the middle path: examine properly once with the negatives stated; name functionally and non-pejoratively; schedule brief reviews (containment of the testing loop is the spine); treat the comorbid axis and the insomnia always; screen the red flags and honestly say they are not there.",
    },
    {
      mistake: "The referral letter without a route",
      why: "An OPD slip that may never be redeemed is the referral system failing quietly: no named person, no date, no bridge supply, no interim risk plan — and the family, having spent a day's travel to reach it, returns to the healer who at least gave them something.",
      correction: "One named route with a date; Tele-MANAS now on speakerphone where the interim is risky; a week's bridge supply with the district referral note (costing less than one abandoned round-trip); the DMHP psychiatrist's visiting day and the district clinic day on the wall as the district's mental-health calendar.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "State the treatment-gap arithmetic — roughly one in seven adult Indians with a diagnosable mental disorder, 80–95 per cent of common depression and anxiety untreated, psychiatrists at 0.3–0.75 per 100,000 — and its clinical consequence: the primary-care clinician is the mental-health system.",
        "Recite the two-question mood-and-interest screen verbatim, in the patient's own idiom, and name the error-pairs that defeat it: masked depression treated as acidity; 'tension' as the label that anaesthetises inquiry; missed mania in the confident irritable patient; alcohol read as habit, never illness.",
        "The SSRI discipline for a newly detected moderate depression: your drug choice, the starting dose, the 2–4 week review date, the 6–8 week judgment date, the 6–9 month continuation rule — and the two sentences of benzodiazepine discipline.",
        "List eight red flags from the referral list, with the immediate action the suicide-risk one demands.",
        "The viva favourite: sketch your district's mental-health plan with the available human resources — the DMHP district team, Tele-MANAS 14416, e-Sanjeevani, the ASHA/ANM tier and the essential-drug list.",
      ],
      practical: [
        "Demonstrate the five-minute consultation on a standardized 'gas and weakness' patient: the door-question in the local idiom, the fuller check, and the SSRI plan written with its review and continuation dates.",
        "Deliver the psychoeducation script to the patient and one family member in the same consultation — the illness-is-treatable, medication-needs-time-and-continuity, relapse-early-warning talk.",
      ],
      longAnswer: [
        "The detection and first-line management of common mental disorders in Indian primary care: the somatic front door, the two-question screen, the SSRI laws, the four brief interventions, and the review rhythm that converts response into remission.",
        "The collaborative-care model and its Indian translations: the care manager, the supervising specialist and stepped escalation — the DMHP district team, Tele-MANAS 14416, e-Sanjeevani and the ASHA/ANM tier — with the Mental Healthcare Act 2017's frontline duties.",
      ],
    },
    neetPg: {
      highYield: [
        "THE NMHS NUMBERS: roughly one in seven adult Indians with a diagnosable mental disorder; common mental disorders near 10% of adults with an 80–92% treatment gap; the untreated proportion of common depression and anxiety 80 to 95 per cent; psychiatrists 0.3–0.75 per 100,000 — the arithmetic every primary-care question is anchored on.",
        "THE TWO-QUESTION SCREEN: 'In the last two weeks, have you been feeling low, sad, or hopeless most days?' and 'Have you lost interest or pleasure in things you usually enjoy?' — two yeses merit the fuller check; the PHQ family public-domain and strong in Indian validation; the main enemy is that nobody asks.",
        "THE SSRI LAWS: adequate dose, adequate duration — sertraline or escitalopram the standard Indian choices; fluoxetine for the lethargic; paroxetine generally avoided (withdrawal and interaction profile); review 2–4 weeks, judge 6–8 weeks, continue at least 6–9 months after remission.",
        "THE BENZO DISCIPLINE: a 1–2 week bridge only, while the SSRI builds; the long-term prescription is the single commonest iatrogenic pathway in Indian primary care; non-addicting sleep tier: trazodone, mirtazapine, low-dose amitriptyline (TCA cautions), ramelteon/melatonin where available.",
        "THE FOUR BRIEF INTERVENTIONS: behavioural activation (three small scheduled activities per week, two pleasant one necessary, done badly rather than perfectly); the sleep instruction (bed for sleep only, same rise-time, the 20-minute wake rule with a boring chair); worry-time (a daily 20-minute appointment with the worry); the alcohol brief conversation (FRAMES logic in plain delivery).",
        "THE RED-FLAG LIST: suicide risk beyond brief, first-episode or suspected psychosis, new-onset mania, psychotic depression, catatonia, refusal of food and drink (think ECT early), non-response after two adequate trials, diagnostic doubt, perinatal presentations, children and adolescents, complex or polysubstance withdrawal, DT risk, opioid agonist treatment, rapid-decline dementia, unmanageable BPSD, severe self-harm, eating disorder with physical compromise, severe OCD.",
        "THE FIRST-CONTACT ANTIPSYCHOTIC DOSES: risperidone up to 3–4 mg or olanzapine up to 10 mg — a single agent while awaiting specialist review, never multiple-agent cocktails; depot continuation logistics; linkage.",
        "THE COLLABORATIVE-CARE ENGINE: care manager on a registry, supervising psychiatrist reviewing the caseload, stepped escalation — Cochrane-backed and decade-replicated; India's translations: the DMHP worker or counsellor, the district psychiatrist or tele-consult, Tele-MANAS/medical-college referral.",
        "THE INDIAN ARCHITECTURE: DMHP flagship since the 1990s, nominally 700-plus districts; Tele-MANAS 14416 since 2022, over twenty languages, counsellor-first with psychiatrist and clinical-psychology escalation; e-Sanjeevani video consults; mhGAP-IG as the DMHP training curriculum.",
        "THE ESSENTIAL-DRUG LIST: the PHC at its best carries sertraline (or escitalopram), amitriptyline, risperidone, buprenorphine (designated centres), thiamine, and now sometimes the depots.",
        "THE LAW: Mental Healthcare Act 2017, Section 115 — attempt to suicide decriminalised, severe stress presumed; the casualty duty is treatment, not police; plus non-discrimination in care provision, informed consent standards, and the prohibition on chaining with the duty to report inhumane treatment.",
      ],
      pyqConcepts: [
        "The NMHS treatment-gap numbers — the recurring anchor of every primary-care psychiatry MCQ.",
        "The two-question screen and its validation lineage (Arroll, BMJ 2003) — the detection question that recurs across formats.",
        "First-line antidepressant logic with safe-prescribing cautions — including the switch-at-week-three trap (never before the 6–8 week judgment).",
        "The collaborative-care three parts and India's translations — the systems question that pairs with the viva favourite.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 46-year-old farmer attends a PHC for the third time in four months with 'gas problem, saab' and 'burning all over'; two antacid courses, a double-dose PPI trial, a normal endoscopy and ultrasound; the pharmacist has been selling him alprazolam nightly for two months; his wife mentions he has not been sleeping, eating or smiling since his father died: the door-question is run in the idiom — two yeses — and the PHQ-9 confirms a moderate first-episode depression; the plan: sertraline started and titrated to the adequate dose, the alprazolam taken back on a one-week bridge then stopped, behavioural activation written on the calendar, the sleep instruction in three sentences, psychoeducation to patient and wife together, review booked at two weeks with a date, the continuation rule stated (6–9 months after remission minimum) and the relapse drill handed to the wife at the end; the teaching: the unexplained-repeat queue is where the treatment gap hides — thirty seconds of mood questions outperforms the next investigation on every measure, and the prescribing laws, not habits, are what make the five minutes count.",
        "A 24-year-old man is brought by his father after the family found a written note and noticed the pesticide tin moved to the bedroom; three months of withdrawn, slowed behaviour had been attributed to 'tension'; on direct questioning he confirms thoughts of ending his life, a plan and access to the means, present most days: the red-flag answer — immediate assessment, not a routine appointment; safety-planning and means discussion with the pesticide removed from the house with the father in the room; Tele-MANAS 14416 on speakerphone for interim risk handling and family guidance while the same-day emergency psychiatric assessment is arranged through the DMHP psychiatrist; the father's question — 'should we inform the police?' — answered with the law: Section 115 presumes severe stress, the attempt is decriminalised, the duty is treatment and dignity; the teaching: risk means now — the expressed-intent, plan-and-means patient changes the plan immediately, and the referral craft (one named route with a date, a bridge supply, documentation) is the system working.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Mental Healthcare Act 2017, Section 115: attempt to suicide decriminalised — presume severe stress; the casualty duty is treatment, never a police report.",
        "Tele-MANAS 14416: the national tele-mental-health helpline, since 2022, in over twenty Indian languages.",
        "The two-question screen: the highest-yield thirty seconds in Indian medicine — two yeses merit the fuller check.",
        "SSRI continuation: at least 6–9 months after remission, then a gradual taper; review at 2–4 weeks, judge at 6–8 weeks.",
        "First-contact antipsychotic: risperidone up to 3–4 mg or olanzapine up to 10 mg — a single agent while awaiting specialist review.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The referral craft is a system, not a paper: one named route with a date; Tele-MANAS now on speakerphone beats an OPD slip that may never be redeemed; the DMHP psychiatrist's visiting day and the district hospital's clinic day are the district's mental-health calendar and belong on your wall.",
        "The somatic presentation is the highest-volume, highest-art primary-care skill — and the Goa/Vellore trials' demonstration (reattribution-style brief interventions and antidepressant treatment of the somatic-plus-depression cohort reduce both symptom counts and consultation rates) is the proof the art is teachable and worth learning.",
        "The work-around discipline for the DMHP's honest weaknesses: know the actual humans (which psychiatrist answers, which counsellor is present), use Tele-MANAS for the gaps, and document caseloads that make the vacancy visible — the local network map is worth more than the scheme brochure.",
        "The idiom craft: the clinician who can say the patient's own word — 'tension', 'nervous weakness', 'gas', 'chakkar', 'mann nahi lagta' — before translating it to the chart detects earlier and prescribes with more authority; the same sentence at the counter ('an illness like blood pressure, treatable') does anti-stigma work at population scale.",
        "The three diplomatic tasks of the Indian pathway: respect the faith-healing stage without deferring diagnosis to it (the WHO's classic finding — Indian faith-healers refer psychosis eventually; your alliance determines when); deprescribe the pharmacist's benzo habitually; and convert the RMP next door from competitor to referral ally.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The five-minute consultation",
      presentation: "Third visit, all reports normal — thirty seconds of mood questions turned the queue around.",
      initialPresentation: "A 46-year-old farmer presented to a PHC OPD for the third time in four months with 'gas problem, saab' and 'burning all over'. Two courses of antacids, a double-dose proton-pump inhibitor trial, a normal endoscopy and a normal ultrasound lay behind him. The pharmacist across the road had been selling him alprazolam nightly for two months for the sleep 'that is not coming'. His wife, attending with him, added quietly that he had not smiled since his father died in the spring.",
      history: "Four months of epigastric burning and generalized weakness; sleep broken with early-morning waking; appetite reduced; weeping at odd moments; 'everything feels like a burden'; a temple visit and rituals already paid for before the first clinic attendance. No alcohol; no prior psychiatric contact. The presenting sentences were the somatic front door verbatim — mood never mentioned by the patient once.",
      examination: "Physical examination normal, the negative findings stated explicitly to the patient and his wife. In the consultation: slowed answers, tearfulness when the father's death was touched, the mood low and the interest gone — 'mann nahi lagta'. The two-question screen: two yeses. The PHQ-9 completed as the quantified tier, confirming the moderate band. No psychotic features; no suicidal intent, plan or means on direct questioning.",
      diagnosis: "Moderate depressive disorder, first episode, presenting through the somatic front door — with an iatrogenic benzodiazepine habit supplied over the counter.",
      management: "Sertraline started at a standard low dose with titration to the adequate dose within two weeks planned; the alprazolam taken back on a one-week bridge and then stopped — the benzo discipline stated to patient, wife and (by the patient's leave) the pharmacist; behavioural activation written on the calendar (three small activities a week, two pleasant, one necessary, done badly rather than perfectly); the sleep instruction in three sentences (bed for sleep only; same rise-time; the 20-minute wake rule with a boring chair); psychoeducation to patient and wife in the same consultation — the illness-is-treatable, medication-needs-time-and-continuity talk; review booked for two weeks with a date, and the 6–9 month continuation rule stated from the start.",
      outcome: "Reviewed at two weeks with early response and no side effects; judged at eight weeks — remitting, the gas and burning receding as the mood lifted; the temple visits continued alongside the appointments, neither endorsed nor forbidden. The continuation ran its full course with a gradual taper at its end, and the relapse-drill handover — the early-warning signs taught to the wife — preceded the last visit. The farmer returned once, a year later, with his brother; the door-question was asked before the brother sat down.",
      teachingPoints: [
        "The unexplained-repeat queue is where the treatment gap hides — the two-question screen outperforms the next investigation on every measure.",
        "The prescribing laws, not habits: adequate dose, adequate duration, a booked review date, and the benzo bridge taken back in writing.",
        "The idiom discipline: 'mann nahi lagta' carried more diagnostic weight than the endoscopy report.",
        "The psychoeducation went to patient and wife together — the Indian primary-care version of family intervention's first rung, and the relapse drill's insurance policy.",
        "The pharmacist's counter is part of the history: what is being bought over the counter belongs in the drug history and the deprescribing plan.",
      ],
    },
    {
      title: "The plan and the means",
      presentation: "The family asked for a tonic — the patient had already told his sister the where and the how.",
      initialPresentation: "A 24-year-old man was brought to the PHC by his father and sister after the family found a written note and noticed the pesticide tin moved into the bedroom. Three months of withdrawn, slowed behaviour had been attributed to 'tension' after he lost his job in the city; the note was found the night before, and the family's opening request was for 'a tonic and some rest tablets'.",
      history: "Three months of progressive withdrawal: stopped going out, stopped eating with the family, sleeplessness, and muttered self-reproach about the lost job. No prior episodes; no substances; the family had first consulted a faith-healer, then the local RMP — a 'weakness' injection and vitamins — before the note changed the arithmetic. On direct questioning, alone and then with the father present, he confirmed thoughts of ending his life most days, a plan, and access to the means in the bedroom.",
      examination: "Depressed and slowed, poor eye contact, answers short and delayed; confirms intent, plan and access to means without minimising; no psychotic features; no intoxication. The risk assessment: expressed intent, a plan, the means in the house, and a written note — beyond brief by any measure. The father's first question: 'Should we inform the police?'",
      diagnosis: "Severe depressive episode with suicide risk beyond brief — expressed intent, plan and means; the held-and-referred tier, not the tonic the family asked for.",
      management: "The plan changed immediately — no routine appointment: safety-planning and means discussion held with the family in the room (the pesticide removed from the house and the means conversation made explicit); Tele-MANAS 14416 called on speakerphone for interim risk handling and family guidance while the arrangements were made, and continued on the line while the family waited; the same-day emergency psychiatric assessment arranged through the DMHP psychiatrist's visiting day at the district hospital — one named route with a date, not an OPD slip; a bridge supply and a two-line referral reason written; the police question answered with the law — Section 115 presumes severe stress, the attempt is decriminalised, the duty is treatment and dignity; everything documented.",
      outcome: "Assessed the same day by the district psychiatrist and admitted with the family's consent; treated as an inpatient, and followed after discharge through the district clinic day with the PHC retained for continuation prescribing once the acute episode settled. The father became the appointment-keeper; the means stayed out of the house; the sister kept the Tele-MANAS card in her phone cover. At three months the patient attended the PHC review in partial remission — the held-and-referred discipline having done exactly what the five minutes demanded.",
      teachingPoints: [
        "Risk means now: expressed intent, plan and means get immediate assessment, safety-planning and a means discussion — never a routine appointment.",
        "The family's 'tonic' request is the somatic front door's most dangerous presentation — the direct risk questions are what convert it into a plan.",
        "The referral craft: Tele-MANAS on speakerphone for the interim, one named route with a date, a bridge supply, and a two-line reason.",
        "Section 115: the casualty and clinic duty after an attempt — or before one — is treatment, not police; the family needs to hear the law stated plainly.",
        "The held-and-referred tier is a system, not an event: the district clinic day, the PHC continuation and the family's card all belong to the same plan.",
      ],
    },
  ],
  clinicalPearls: [
    "The arithmetic: roughly one in seven adult Indians with a diagnosable mental disorder, 80–95 per cent of the common depression and anxiety untreated, psychiatrists at 0.3–0.75 per 100,000 — no realistic hiring plan touches the denominator; the primary-care clinician IS the mental-health system.",
    "The two-question screen is the highest-yield thirty seconds in Indian medicine — applied to the recurring gas-and-weakness queue, it converts consultation-years into detected depression.",
    "The SSRI two laws: adequate dose and adequate duration — review at 2–4 weeks, judge at 6–8 weeks, continue at least 6–9 months after remission; switching before the 6–8 week judgment wastes both drugs and confidence.",
    "Benzodiazepines are a 1–2 week bridge while the SSRI builds — the long-term benzo prescription is the single commonest iatrogenic pathway running through Indian primary care.",
    "Behavioural activation is the best evidence-per-minute of any depression treatment in primary care: three small scheduled activities per week, two pleasant and one necessary, written on the calendar, done badly rather than perfectly.",
    "The referral craft: one named route with a date — 'Tele-MANAS now on speakerphone' beats an OPD slip that may never be redeemed; the DMHP psychiatrist's visiting day and the district clinic day are the district's mental-health calendar and belong on your wall.",
    "Perinatal depression is the highest-leverage detection in the system: mother-and-child outcomes ride on it, and every ANM contact and immunisation clinic is a screen-and-treat opportunity.",
    "The somatic middle path: examine properly once, name the condition functionally, schedule brief reviews, treat the comorbid axis and the insomnia always — both endless investigation and dismissal actively worsen outcomes.",
    "The first-contact antipsychotic doses: risperidone up to 3–4 mg or olanzapine up to 10 mg, a single agent while awaiting specialist review — never multiple-agent cocktails.",
    "The mhGAP Intervention Guide is the single document that best operationalises the whole discipline — WHO's flow-charts and do/do-not cards, and the training curriculum the DMHP uses.",
    "The Mental Healthcare Act 2017, Section 115: attempt to suicide decriminalised, severe stress presumed — the casualty ward's duty is treatment, not police.",
    "Your prescribing sends public signals: the clinician who says 'this is an illness like blood pressure, treatable, not a weakness' at the PHC counter does anti-stigma work at population scale — the one who says 'stop thinking, take rest' legislates the opposite.",
  ],
  highYieldSummary: [
    "The arithmetic and the mission: the great majority of mental illness in India will never meet a psychiatrist — it will meet a primary-care clinician for five minutes with a complaint of gas, burning, weakness or sleeplessness, or it will meet nobody at all. The National Mental Health Survey (2015–16) found roughly one in seven adult Indians living with a diagnosable mental disorder, common mental disorders near 10% of adults with an 80–92% treatment gap, and 80 to 95 per cent of common depression and anxiety receiving no care; India's psychiatrists number some 0.3–0.75 per 100,000, with psychologists and psychiatric social workers scarcer still, concentrated in metros and medical colleges. The conclusion is design, not despair: WHO's mhGAP programme exists precisely because the global answer to this arithmetic is task-shared primary care, and the Indian trials — Goa's lay-counselling lineage (MANAS and colleagues), depression care in Karnataka and Assam clinics, the NMHS-linked programme evaluations — demonstrate the same direction: brief training, a supervising specialist and safe drug supply produce measurable recovery at population scale. Every clinician who treats one detected case well is the programme working.",
    "Detection — reading the somatic front door: the Indian primary-care psychiatric patient rarely opens with mood; the presenting sentences are 'gas problem, saab', 'burning all over', 'no strength', 'sleep is not coming', 'palpitations; get an ECG', 'my head becomes blank'. The detection discipline has three moves: the door-question (any repeated, multiple or unexplained physical complaint with a normal examination — especially with sleep change, appetite change, fatigue or recent loss — triggers the two-question mood-and-interest pair in plain speech); the company it keeps (early-morning waking, weight change, 'everything feels like a burden', tearfulness in the consultation itself, slowed answers — the examination of mood is the consultation's own behaviour); and the error-pairs to avoid (masked depression treated as 'acidity' for a year; the 'tension/weakness' label that anaesthetises inquiry; missed mania in the irritable energetic patient who 'has stopped complaining and become confident'; alcohol read as habit, never illness). Anxiety, insomnia and their somatic fleet are caught with the same discipline: persistent worry-plus-body-symptoms, and the three-question sleep map — time to bed, time to sleep, time awake.",
    "The treatment kit — pharmacology short list, long discipline: the first-line antidepressant is an SSRI, sertraline or escitalopram as the standard Indian choices (fluoxetine for the lethargic; paroxetine generally avoided for its withdrawal and interaction profile); the two laws are adequate dose and adequate duration — review at 2–4 weeks, judge at 6–8 weeks, continue at least 6–9 months after remission. Benzodiazepines only as a 1–2 week bridge while the SSRI builds; the non-addicting sleep tier is low-dose trazodone, mirtazapine or amitriptyline (with its TCA cautions), and ramelteon/melatonin where available. The alcohol and tobacco package: the five-minute FRAMES-logic brief conversation; patch, varenicline or bupropion where available; thiamine in the malnourished drinker. First-contact psychosis: recognition, safe initiation or continuation of a single antipsychotic (risperidone up to 3–4 mg or olanzapine up to 10 mg while awaiting specialist review), no cocktails, depot logistics, linkage. The elderly cautions: SSRI hyponatraemia and falls, TCA avoidance, anticholinergic load, and delirium recognition before any new sedative. The four brief interventions that fit minutes: behavioural activation, the sleep instruction, worry-time, the alcohol conversation — and psychoeducation, the cheapest item on the list, given to patient and one family member in the same consultation.",
    "The referral line — what to send, what to hold: hold in primary care the mild-to-moderate depression and anxiety, insomnia, adjustment states, stable maintained psychosis and bipolar (with specialist back-up and a supply line), dementia's routine follow-up, nicotine and uncomplicated alcohol problems, and the somatic presentations. Send to the specialist tier (the DMHP district psychiatrist, Tele-MANAS escalation, the medical college): suicide risk beyond brief (expressed intent, plan, means or attempt history — immediate assessment, safety-planning and means discussion, never a routine appointment); first-episode or suspected psychosis and any new-onset mania; depression with psychotic features, catatonia, refusal of food and drink (think ECT early, not late); treatment non-response after two adequate trials and diagnostic uncertainty; pregnancy, postpartum and perinatal presentations; children and adolescents; complex or polysubstance withdrawal, delirium tremens risk and opioid dependence needing agonist treatment; dementia with unexplained rapid decline or unmanageable BPSD; severe self-harm, eating disorder with physical compromise, severe OCD. The referral craft in India: one named route with a date, Tele-MANAS on speakerphone, and a bridge supply where the stock is uncertain.",
    "The collaborative architecture — nobody is expected to do this alone: the model that moves primary-care outcomes to specialist level is collaborative care (the Cochrane-backed, decade-replicated design) — a care manager who follows patients on a registry and does the psychosocial work, a supervising psychiatrist who reviews the caseload and guides treatment changes without seeing every patient, and stepped escalation for non-responders. India's translations: the DMHP district team (psychologist, psychiatric social worker and visiting psychiatrist attached to the district hospital, extending training and clinic days to blocks — the collaborative tier as infrastructure, programme quality varying by district); Tele-MANAS 14416 (since 2022: trained counsellors first, psychiatrist and clinical-psychology escalation, over twenty languages — interim risk handling, advice, family guidance, and the patient's own helpline); e-Sanjeevani and state tele-clinics (video consults from the PHC itself); mhGAP-IG (the WHO decision aid that best operationalises the entire discipline, and the DMHP's training curriculum); the ASHA and ANM/MPW tier (household identification of psychosis, disability and perinatal depression; medication accompany-and-observe); and the essential-drug supply (sertraline or escitalopram, amitriptyline, risperidone, buprenorphine in designated centres, thiamine, sometimes the depots). The Mental Healthcare Act 2017 duties that touch the frontline: no discrimination in care provision, informed consent standards, the prohibition on chaining with the duty to report inhumane treatment, and Section 115's decriminalisation of attempted suicide — the casualty ward's duty is treatment, not police.",
    "The somatic presentation — the highest-volume, highest-art primary-care skill: a large fraction of Indian primary-care consultations are medically unexplained or only partly explained symptoms — the gas, the burning, the multiple migrating pains with normal reports. The evidence-based middle path rejects both classic errors (the endless-testing reflex and the dismissal reflex — both actively worsen outcomes in the somatic literature) and runs five moves: take the symptom seriously and examine properly, once, with the negative findings established explicitly; name the condition in functional, non-pejorative terms ('the nerves' sensitivity has been turned up; the pain is real, the machine is sound'), connected openly to the tension-sleep-mood axis; schedule regular brief reviews rather than on-demand with new tests — containment of the testing loop is the treatment's spine; treat the depression or anxiety riding with it, and the insomnia always; screen for the red flags that do warrant fresh workup (weight loss, night symptoms, neurological signs, age-appropriate cancer screening) and then honestly say they are not there. The Goa/Vellore trials' demonstration — that reattribution-style brief interventions and antidepressant treatment of the somatic-plus-depression cohort reduce both symptom counts and consultation rates — is the proof that this art is teachable and worth learning.",
    "The India lens: the pathway runs through everything else first (temple, tantric or faith-healer, the local RMP, the pharmacist — the country's true first prescriber, alprazolam over the counter where enforcement sleeps — the general physician, and only then the mental-health system), so the Indian version carries three diplomatic tasks: respect the faith-healing stage without deferring diagnosis to it (the WHO's classic finding — Indian faith-healers refer psychosis eventually; your alliance determines when), deprescribe the pharmacist's benzo, and convert the RMP next door from competitor to referral ally. The programme reality: the DMHP's honest weaknesses (post vacancies, drug stock-outs, supervision gaps) are the daily weather of district practice — the work-around discipline is knowing the actual humans, using Tele-MANAS for the gaps, and documenting caseloads that make the vacancy visible. Costs at the counter (approx 2026): sertraline ₹40–150 a month, escitalopram ₹60–200, amitriptyline ₹15–40, risperidone ₹60–180; counselling free at the government/DMHP tier and ₹300–800 privately in towns; the outpatient drug cost remains the family's usual burden, so prescribing the affordable brand in writing is itself a mental-health intervention. The language and idioms ('tension', 'nervous weakness', 'gas', 'chakkar', 'mann nahi lagta') belong to the clinician who detects earlier. The cadre of the future is being trained now — the community-psychology and counselling cadres, the Tele-MANAS counsellor workforce, the ASHA perinatal screening pilots — India mid-experiment in task-sharing at a scale no country has run, with the trials already settled in the cadres' favour; the primary-care clinician who learns to supervise and deploy this tier multiplies several-fold.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pcp-quiz-1",
      question: "The recurring 'gas and burning' patient, third visit, all reports normal. The single highest-yield next step in an Indian PHC is:",
      options: [
        "Upper GI endoscopy — complete the set",
        "The two-question mood-and-interest screen, taken in the patient's own idiom",
        "A trial of a proton-pump inhibitor at double dose",
        "Referral to the medical college's gastroenterology OPD",
      ],
      correctIndex: 1,
      explanation: "The unexplained-repeat queue is where the treatment gap hides; thirty seconds of mood questions outperforms the next investigation on every measure — the screen's main enemy is that nobody asks.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pcp-quiz-2",
      question: "Correct SSRI discipline in primary care for a first-episode moderate depression, detected and started this week:",
      options: [
        "Half the standard dose 'for mildness', stop at first improvement",
        "Adequate dose, review at 2–4 weeks, judge at 6–8 weeks, continue at least 6–9 months after remission, taper slowly",
        "Add alprazolam nightly for the duration",
        "Switch SSRI at week 3 if not fully recovered",
      ],
      correctIndex: 1,
      explanation: "Under-dosing and early stopping are the twin failures; switching before the 6–8 week judgment wastes both drugs and confidence.",
      afterSectionId: "management",
    },
    {
      id: "pcp-quiz-3",
      question: "The red flag that changes the plan immediately rather than scheduling a routine referral:",
      options: [
        "First panic attack in a 30-year-old",
        "A stable maintained-psychosis patient for routine refill",
        "Expressed suicidal intent with a plan and access to means",
        "Mild OCD with washing rituals",
      ],
      correctIndex: 2,
      explanation: "Risk means now: safety-plan, means discussion, Tele-MANAS (14416) involvement and an emergency psychiatric assessment — the other three are routine-pathway conditions.",
      afterSectionId: "management",
    },
    {
      id: "pcp-quiz-4",
      question: "The collaborative-care engine's three moving parts, as India translates them:",
      options: [
        "Psychiatrist on-site daily; psychologist for all; free universal transport",
        "Care manager/registry (DMHP worker or counsellor), supervising specialist caseload review (district psychiatrist/tele-consult), stepped escalation (Tele-MANAS/medical-college referral)",
        "ASHAs prescribing antidepressants independently",
        "Pharmacists dispensing SSRIs without prescription nationwide",
      ],
      correctIndex: 1,
      explanation: "The Cochrane-backed architecture, translated: follow-up hands, supervising eyes, escalation routes.",
      afterSectionId: "mechanism",
    },
    {
      id: "pcp-quiz-5",
      question: "The somatic presentation's evidence-backed middle path rejects both:",
      options: [
        "Antidepressants and psychotherapy",
        "The endless-testing reflex (fear-driven investigation loops) and the dismissal reflex ('nothing is wrong with you')",
        "Specialist referral and primary care",
        "Sleep inquiry and family involvement",
      ],
      correctIndex: 1,
      explanation: "Both classic errors worsen outcomes in the somatic literature; the middle path is named-function explanation, scheduled brief reviews, red-flag screening, and treatment of the comorbid axis.",
      afterSectionId: "symptoms",
    },
    {
      id: "pcp-quiz-6",
      question: "The Mental Healthcare Act 2017's instruction to the casualty officer receiving a person after a suicide attempt:",
      options: [
        "File a police report before treatment",
        "Presume severe stress; the attempt is decriminalised (s.115); the duty is treatment, protection of dignity and mental-health assessment",
        "Refuse admission without a magistrate's order",
        "Treat only after the family signs a no-liability bond",
      ],
      correctIndex: 1,
      explanation: "The law changed the casualty ward's reflexes: the officer who knows it treats first and protects the person's rights in every step that follows.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State the NMHS common-disorder prevalence and the treatment-gap range; give the psychiatrist-per-100,000 arithmetic and its design consequence.", answer: "PREVALENCE: the National Mental Health Survey (2015–16) found roughly one in seven adult Indians living with a diagnosable mental disorder, with common mental disorders near 10% of adults. THE GAP: 80–92% for common mental disorders per the NMHS; for common depression and anxiety the untreated proportion runs 80 to 95 per cent; alcohol use disorders and severe mental illness similarly vast in their gaps. THE ARITHMETIC: India's psychiatrists number some 0.3–0.75 per 100,000 people (registered active practitioners at the lower end), with clinical psychologists and psychiatric social workers even scarcer, concentrated in metros and medical colleges. THE DESIGN CONSEQUENCE: no realistic hiring plan fixes the ratio this generation — the primary-care clinician IS the mental-health system, and the evidence-backed answer is task-shared primary care: brief training, a supervising specialist and safe drug supply, which the Indian trials show produce measurable recovery at population scale.", topic: "The arithmetic" },
    { question: "Recite the two-question screen verbatim — and name the three moves of the detection discipline with the error-pairs.", answer: "THE SCREEN, VERBATIM: 'In the last two weeks, have you been feeling low, sad, or hopeless most days?' and 'Have you lost interest or pleasure in things you usually enjoy?' — asked in plain speech, in the patient's own idiom; two yeses is a depression signal meriting fuller check, with the PHQ-9 (public-domain, strong in Indian validation studies) as the quantified tier. THE THREE MOVES: (1) the door-question — any repeated, multiple or unexplained physical complaint with a normal examination, especially with sleep change, appetite change, fatigue or recent loss, triggers the pair; (2) the company it keeps — early-morning waking, weight change, 'everything feels like a burden', tearfulness in the consultation itself, slowed answers (the examination of mood is the consultation's own behaviour); (3) the error-pairs avoided — masked depression treated as 'acidity' for a year; the 'tension/weakness' label that anaesthetises further inquiry; missed mania in the irritable energetic patient who 'has stopped complaining and become confident'; alcohol read as habit, never illness. The screen's main enemy is that nobody asks.", topic: "Detection" },
    { question: "A newly detected moderate depression: name your SSRI choice, starting dose, review date, judgment date, and continuation rule — plus the two sentences of benzo discipline.", answer: "SSRI CHOICE: sertraline or escitalopram (the standard Indian choices; fluoxetine if the picture is lethargic; paroxetine generally avoided — withdrawal and interaction profile). STARTING DOSE: a standard low dose, titrated to the adequate dose within a week or two if tolerated — never sub-therapeutic dosing 'for mildness'. REVIEW DATE: 2–4 weeks, for early response. JUDGMENT DATE: 6–8 weeks, for the full verdict — no switching before it. CONTINUATION RULE: at least 6–9 months after remission, then a gradual taper; longer for second and third episodes. THE BENZO SENTENCES: benzodiazepines only as a 1–2 week bridge in distressing anxiety or insomnia while the SSRI builds — then the bridge is taken back; the long-term benzo prescription is the single commonest iatrogenic pathway running through Indian primary care.", topic: "The SSRI discipline" },
    { question: "List eight red flags from the referral list, with the immediate action for the suicide-risk one.", answer: "EIGHT RED FLAGS: (1) suicide risk beyond brief — expressed intent, plan, means, or a history of attempt; (2) first-episode or suspected psychosis; (3) any new-onset mania; (4) depression with psychotic features, catatonia, or refusal of food and drink (think ECT early, not late); (5) treatment non-response after two adequate trials, or diagnostic uncertainty; (6) pregnancy, postpartum and perinatal psychiatric presentations; (7) children and adolescents; (8) complex or polysubstance withdrawal, delirium tremens risk, or opioid dependence needing agonist treatment (the de-addiction centre). Also on the list: dementia with unexplained rapid decline or unmanageable BPSD; severe self-harm, eating disorder with physical compromise, severe OCD. THE SUICIDE-RISK ACTION: immediate assessment, safety-planning and means discussion — never a routine appointment; Tele-MANAS 14416 on speakerphone for the interim; an emergency psychiatric assessment the same day; the means removed from the house; and documentation. After any attempt, the casualty duty is treatment, not police (Section 115).", topic: "The referral line" },
    { question: "Draw the collaborative-care engine, label its three parts — and name India's translations of each.", answer: "THE THREE PARTS: (1) a care manager who follows patients on a registry and does the psychosocial work; (2) a supervising psychiatrist who reviews the caseload and guides treatment changes without seeing every patient; (3) stepped escalation for non-responders. INDIA'S TRANSLATIONS: (1) the DMHP district worker or counsellor — the registry hands and the follow-up visits; (2) the district psychiatrist's caseload review or the tele-consult — the supervising eyes; (3) Tele-MANAS escalation and the medical-college referral — the escalation routes. The backing evidence: the Cochrane-era meta-analyses (Kakuma; Woltmann; Gilbody) and the US IMPACT lineage (Katon, Unützer) — the design that moves primary-care outcomes to specialist level, which the Indian task-sharing trials (Goa's MANAS lineage; Karnataka and Assam clinics) reproduce at population scale.", topic: "Collaborative care" },
    { question: "The somatic presentation: give the five moves of the middle path, and the twin errors on either side.", answer: "THE FIVE MOVES: (1) take the symptom seriously and examine properly, once — establish the negative findings explicitly; (2) name the condition in functional, non-pejorative terms — 'the nerves' sensitivity has been turned up; the pain is real, the machine is sound' — connected openly to the tension-sleep-mood axis; (3) schedule regular brief reviews rather than on-demand with new tests — containment of the testing loop is the treatment's spine; (4) treat the depression or anxiety riding with it, and the insomnia always; (5) screen for the red flags that do warrant fresh workup — weight loss, night symptoms, neurological signs, age-appropriate cancer screening — and then honestly say they are not there. THE TWIN ERRORS: the endless-testing reflex (fear-driven investigation loops) and the dismissal reflex ('nothing is wrong with you') — both actively worsen outcomes in the somatic literature. THE PROOF: the Goa/Vellore trials — reattribution-style brief interventions and antidepressant treatment of the somatic-plus-depression cohort reduce both symptom counts and consultation rates.", topic: "The somatic middle path" },
    { question: "What exactly do you say on speakerphone to Tele-MANAS, and what do you do while it rings?", answer: "WHILE IT RINGS: the patient stays in view, the family stays in the room, and the means conversation is already under way — the pesticide, rope or stored medicine removed from the house with a family member present; nothing is left to the hold music. ON THE LINE: identify yourself, the setting and the patient in two sentences; state the risk picture plainly (expressed intent, plan, means, attempt history — what was found and said); state what has already been done (safety measures, the means removed, the family's cooperation); and ask for the two things Tele-MANAS exists to give — interim risk handling and family guidance while the same-day emergency psychiatric assessment is arranged through the DMHP psychiatrist or the medical college. The card's number, 14416, goes home with the family — the patient's own helpline, staffed day and night in over twenty languages, counsellors first with psychiatrist and clinical-psychology escalation tiers.", topic: "The Tele-MANAS call" },
    { question: "Name the four brief interventions that fit a consultation, with their scripts.", answer: "(1) BEHAVIOURAL ACTIVATION: 'three small scheduled activities per week, two pleasant one necessary, written on the calendar, done badly rather than perfectly' — the best evidence-per-minute of any depression treatment in primary care. (2) THE SLEEP INSTRUCTION — stimulus control in three sentences: bed for sleep only; same rise-time daily; the 20-minute wake rule with a boring chair (the full CBT-I belongs to the counsellor tier). (3) WORRY-TIME AND THE UNCERTAINTY NOTE: a daily 20-minute appointment with the worry itself, written, contained — the GAD package compressed. (4) THE ALCOHOL BRIEF CONVERSATION: honest units-and-consequences feedback plus one clear recommendation and a follow-up date — the FRAMES logic (feedback, responsibility, advice, menu, empathy, follow-up) in plain delivery. All four are delivered as instructions, not referrals — and psychoeducation, the cheapest item on the list, goes to patient and one family member in the same consultation.", topic: "The brief interventions" },
  ],
  faqs: [
    { question: "Doctor, why are you giving a stomach-patient a mood tablet?", answer: "Because the body's reports show the machine is sound, and the wiring that carries the complaints has been sensitised — this tablet turns the sensitivity down. The gas is real, and it will go the same way it came, through the nerves." },
    { question: "Is this medicine addictive, saab?", answer: "This one, no: antidepressants are not habit-forming. They need time — two to four weeks — and they need to be continued months after you feel well, then stopped gradually. That is not addiction, that is completing the course, like a bone set and then exercised." },
    { question: "You gave the same tablet my neighbour takes — she is a mental case.", answer: "She has the same chemistry. This medicine is for an illness, not an identity — so is blood-pressure medicine, and half the village is on it without a village whisper." },
    { question: "Can I not just take the sleeping tablet? It works in one night.", answer: "For a night or two, in crisis, yes. The tablet that fixes sleep permanently teaches the body to sleep without any tablet — and the nightly one quietly takes over the job. Two weeks, then we take it back." },
    { question: "We have no psychiatrist within a hundred kilometres.", answer: "We have three roads: the district team's clinic day, Tele-MANAS on your phone now, and me. For the common ones, this is enough; for the serious ones, these roads run." },
    { question: "The temple healer said it is a spirit and gave this thread.", answer: "Keep the thread; it harms nothing and may hold you steady while we work. But the voice and the fears are an illness of the brain's chemistry — the thread and the tablet together, then we watch together which one the illness respects." },
    { question: "How long must he take this risperidone?", answer: "Long enough that the illness learns it cannot return. The first episode needs at least a year of full recovery before any taper discussion, and that decision belongs with the specialist visit we have booked — missing doses between now and then is the one thing that resets the clock." },
    { question: "He attempted once — should I inform the police?", answer: "No. The law since 2017 says this is a health matter, not a crime: our job is treatment and keeping the means away. The helpline number on this card, 14416, is staffed day and night for exactly this." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — mhGAP Intervention Guide 2.0: the priority conditions and non-specialist protocols that operationalise this entire note" },
      { source: "Government of India — DMHP and National Mental Health Programme materials; Tele-MANAS (14416) service documentation (2022 onward); e-Sanjeevani operational reports" },
      { source: "Mental Healthcare Act 2017 (with 2022 rules) — the sections on non-discrimination, consent, and Section 115's presumption of severe stress in attempted suicide" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 7.8 — the source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Gururaj G, Varghese M, Benegal V et al. — National Mental Health Survey of India 2015–16 (NIMHANS): the prevalence and treatment-gap figures" },
      { source: "Patel V, Chowdhary N, Rahman A, Verdeli H — the Goa lay-counselling trial lineage (MANAS, PREMIUM and colleagues): task-shared depression care in India" },
      { source: "Katon W, Unützer J — the US collaborative-care depression trials (the IMPACT lineage): the evidence the Indian translations stand on" },
      { source: "Arroll B, Khin N, Kerse N — the two-question screen's detection performance (BMJ 2003), with the Indian-language validation lineage of the PHQ family and Kessler scales" },
    ],
    reviews: [
      { source: "Kakuma R et al., with the Cochrane-era reviews of Woltmann, Gilbody and colleagues — the collaborative-care meta-analyses" },
      { source: "WHO AIMS and the WHO Mental Health Atlas — the workforce-ratio figures for India" },
      { source: "Lloyd K, Rathod P et al., with the Indian somatic-symptom primary-care literature (the Goa and Vellore reattribution-style studies) — the unexplained-symptom middle path" },
      { source: "Gureje O, Simon G et al. — the WHO multinational somatic-symptom primary-care (PPC) studies: prevalence and course of somatic presentations in primary care" },
      { source: "Kumar M et al. — perinatal depression in Indian primary and ANM-contact settings" },
      { source: "The Lancet Psychiatry India country series and the IIPS population-level analyses — the denominator reality the five-minute mission answers" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline: free, 24×7, in over twenty Indian languages" },
      { source: "The two-question screen and the psychoeducation script — the instruments this course hands to every clinician and family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: why the doctor asks about mood, what the medicine does, how long it runs, and where the roads to help are.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The gap, the two-question screen, the SSRI laws, the red flags, the Indian architecture.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the decision path, the India lens and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "37 min",
      description: "Everything — the five-minute craft, the referral discipline, the programme map, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The arithmetic, the mission, the knowledge map.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the treatment-gap numbers and their design consequence: the primary-care clinician is the mental-health system." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The five-minute engine and the pathway chains; the movement's own timeline.", sectionIds: ["mechanism", "pathways", "timeline"], checkpoint: "You can walk detection-to-remission and the collaborative-care chain, and date the programme landmarks from the DMHP to Tele-MANAS." },
    { number: 3, title: "Clinical Practice", description: "The front-door presentations, the detection instruments, the differentials, the treatment kit and the red flags.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the two-question screen, write the SSRI plan with its review and continuation dates, and recite eight red flags cold." },
    { number: 4, title: "Indian Context", description: "The India lens, the five-minute decision path, the classic mistakes.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can sketch your district's mental-health plan, deliver the counselling scripts, and say what you do while Tele-MANAS rings." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the NMHS-numbers question and the SSRI-discipline question cold, and run the five-minute consultation on paper." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 7.8 (Part 8) — the source chapter mapped; original rewrite, updated to the NMHS 2015-16, DMHP/Tele-MANAS architecture (2026), WHO mhGAP and Indian primary-care prescribing realities", sourceType: "textbook", year: "2009 / 2026 update", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Gururaj G, Varghese M, Benegal V et al. — National Mental Health Survey of India 2015–16 (NIMHANS): the prevalence and treatment-gap figures; NMHS-2 field reports where cited", sourceType: "primary", year: "2016", dateReviewed: "2026-09-30" },
    { id: "S3", source: "WHO — mhGAP Intervention Guide, 2.0 edition: the priority conditions and non-specialist protocols; the training curriculum the DMHP uses", sourceType: "who", year: "2016 and ongoing", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Patel V, Chowdhary N, Rahman A, Verdeli H — the Goa lay-counselling trial lineage (MANAS, PREMIUM and colleagues) in Lancet-tier journals: task-shared depression care in India, with the Karnataka and Assam clinic programmes", sourceType: "trial", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Kakuma R et al. and the Cochrane-era reviews by Woltmann, Gilbody and colleagues — the collaborative-care meta-analyses: the care-manager-and-supervising-specialist architecture", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Arroll B, Khin N, Kerse N — the two-question screen's detection performance (BMJ 2003 and the subsequent validation lineage); the Indian-language validation studies of the PHQ family and Kessler scales", sourceType: "primary", year: "2003", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Katon W, Unützer J — the US collaborative-care depression trials (the IMPACT lineage): the evidence the Indian translations stand on", sourceType: "trial", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Government of India — DMHP and National Mental Health Programme materials; Tele-MANAS (14416) service documentation (2022 onward); e-Sanjeevani operational reports", sourceType: "government", year: "2022 onward", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Mental Healthcare Act 2017 (with 2022 rules) — non-discrimination, consent standards, the chaining prohibition, and Section 115's presumption of severe stress in attempted suicide", sourceType: "government", year: "2017 / 2022 rules", dateReviewed: "2026-09-30" },
    { id: "S10", source: "WHO AIMS and the WHO Mental Health Atlas — the workforce-ratio figures for India (specialist-per-100,000 ranges)", sourceType: "who", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S11", source: "Lloyd K, Rathod P et al., with the Indian somatic-symptom primary-care literature (the Goa and Vellore reattribution-style studies) — the unexplained-symptom middle path", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Gureje O, Simon G et al. — the WHO multinational somatic-symptom primary-care (PPC) studies: prevalence and course of somatic presentations in primary care", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S13", source: "Kumar M et al. — perinatal depression in Indian primary and ANM-contact settings (the perinatal screening evidence tier); with the Lancet Psychiatry India country series and IIPS population-level analyses as the denominator frame", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The treatment-gap arithmetic: the National Mental Health Survey (2015–16) found roughly one in seven adult Indians living with a diagnosable mental disorder; common mental disorders sit near 10% of adults with an 80–92% treatment gap; the overwhelming majority of common depression and anxiety (80 to 95 per cent) receive no care at all; India's psychiatrists number some 0.3–0.75 per 100,000 (registered active practitioners at the lower end), with clinical psychologists and psychiatric social workers scarcer still, concentrated in metros and medical colleges.", grade: "established", sources: ["S2", "S10", "S1"] },
    { text: "The task-sharing verdict: the evidence from every continent, including Indian trials (Goa's lay-counselling lineage — MANAS, PREMIUM and colleagues; depression care in Karnataka and Assam clinics; the NMHS-linked programme evaluations), is consistent — when primary care is trained, supported by a supervising specialist, and equipped with a short list of safe medicines, outcomes for common mental disorders approach specialist outcomes at a fraction of the cost.", grade: "established", sources: ["S4", "S3", "S7", "S1"] },
    { text: "The somatic front door: the Indian primary-care psychiatric patient rarely opens with mood — the presenting sentences are 'gas problem, saab', 'burning all over', 'no strength', 'sleep is not coming', 'palpitations; get an ECG', 'my head becomes blank'; a large fraction of Indian primary-care consultations are medically unexplained or only partly explained symptoms.", grade: "established", sources: ["S1", "S11", "S12"] },
    { text: "The two-question screen: the mood-and-interest pair ('In the last two weeks, have you been feeling low, sad, or hopeless most days?' and 'Have you lost interest or pleasure in things you usually enjoy?') case-finds depression in under a minute; two yeses is a depression signal meriting fuller check; the PHQ family is public-domain, the quantified tier; sensitivity in Indian validation studies is strong — the screen's main enemy is that nobody asks.", grade: "established", sources: ["S6", "S1"] },
    { text: "The SSRI laws: an SSRI is the first-line antidepressant (sertraline or escitalopram the standard Indian choices; fluoxetine for the lethargic; paroxetine generally avoided for its withdrawal and interaction profile); adequate dose and adequate duration are the two laws — review at 2–4 weeks, judge at 6–8 weeks, continue at least 6–9 months after remission; sub-therapeutic dosing 'for mildness' and discontinuation at first improvement are the twin failures of primary-care prescribing.", grade: "established", sources: ["S3", "S1"] },
    { text: "The benzodiazepine discipline: benzodiazepines only as a short bridge (1–2 weeks) in distressing anxiety or insomnia while the SSRI builds; the long-term benzo prescription is the single commonest iatrogenic pathway running through Indian primary care; non-addicting alternatives for sleep are low-dose sedating antidepressants (trazodone, mirtazapine; amitriptyline in low dose with its TCA cautions) and ramelteon/melatonin where available.", grade: "supported", sources: ["S1"] },
    { text: "The four brief interventions: behavioural activation ('three small scheduled activities per week, two pleasant one necessary, written on the calendar, done badly rather than perfectly' — the best evidence-per-minute of any depression treatment in primary care); the sleep instruction (stimulus control in three sentences: bed for sleep only; same rise-time daily; the 20-minute wake rule with a boring chair); worry-time (a daily 20-minute appointment with the worry); the alcohol brief conversation (the FRAMES logic — feedback, responsibility, advice, menu, empathy, follow-up — in plain delivery).", grade: "established", sources: ["S3", "S4", "S1"] },
    { text: "The collaborative-care engine: a care manager who follows patients on a registry and does the psychosocial work, a supervising psychiatrist who reviews the caseload and guides treatment changes without seeing every patient, and stepped escalation for non-responders — the Cochrane-backed, decade-replicated design that moves primary-care outcomes to specialist level.", grade: "established", sources: ["S5", "S7", "S1"] },
    { text: "The Indian architecture: the DMHP (flagship since the 1990s, nominally 700-plus districts) delivers training days, a district team, clinic days and free medicines where it functions — with post vacancies, drug stock-outs and supervision gaps as its honest weaknesses; Tele-MANAS (14416, since 2022) runs trained counsellors first with psychiatrist and clinical-psychology escalation in over twenty languages; e-Sanjeevani provides video consults including specialist from the PHC; mhGAP-IG is the DMHP's training curriculum; the ASHA/ANM tier does household identification and medication accompany-and-observe; the essential-drug list at its best carries sertraline (or escitalopram), amitriptyline, risperidone, buprenorphine (designated centres), thiamine and sometimes the depots.", grade: "established", sources: ["S8", "S3"] },
    { text: "The Mental Healthcare Act 2017 duties that touch the frontline: no discrimination in care provision; informed consent standards for admission and treatment; the prohibition on chaining and the duty to report inhumane treatment; attempt to suicide decriminalised (Section 115) with the presumption of severe stress — the casualty ward's duty is treatment, not police.", grade: "established", sources: ["S9"] },
    { text: "The somatic middle path: neither endless undirected investigation nor dismissal — both classic errors actively worsen outcomes in the somatic literature; the five moves (examine properly once with the negatives stated; functional non-pejoritative naming connected to the tension-sleep-mood axis; scheduled brief reviews containing the testing loop; treatment of the comorbid depression or anxiety and the insomnia always; red-flag screening with honest reassurance) — with the Goa/Vellore demonstration that reattribution-style brief interventions and antidepressant treatment of the somatic-plus-depression cohort reduce both symptom counts and consultation rates.", grade: "established", sources: ["S11", "S12", "S1"] },
    { text: "The perinatal leverage point: perinatal depression is the highest-leverage detection in the system — mother-and-child outcomes ride on it, and every ANM contact and immunisation clinic is a screen-and-treat opportunity; the frontline cautions for the elderly are SSRI hyponatraemia and falls, TCA avoidance, anticholinergic load, and delirium recognition before any new sedative.", grade: "supported", sources: ["S13", "S1"] },
    { text: "The Indian pathway and costs: the average family's help-seeking chain passes the temple, the tantric or the faith-healer, the local RMP, the pharmacist (alprazolam over the counter where enforcement sleeps), the general physician, and only then the mental-health system; costs at the counter (approx 2026, generic, vary by state and scheme): sertraline ₹40–150 a month, escitalopram ₹60–200, amitriptyline ₹15–40, risperidone ₹60–180; counselling free at the government/DMHP tier, ₹300–800 per session privately in towns — the outpatient drug cost remains the family's usual burden, and prescribing the affordable brand in writing is itself a mental-health intervention.", grade: "supported", sources: ["S1", "S8"], note: "Cost figures are the note's own approx-2026 generic estimates, varying by state and scheme; practice-pattern description, context honestly labelled." },
  ],
};
