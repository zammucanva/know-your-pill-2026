import type { PsychiatryCourse } from "./types";

/**
 * BENZODIAZEPINE MISUSE — canonical Psychiatry course
 * (migration batch 8, Group B — substance use disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/benzodiazepine-misuse.md — untouched
 * foundation), re-researched against current guidance (the
 * Ashton withdrawal-and-conversion lineage, the Lader
 * long-term-use and deprescribing evidence, the NICE-lineage
 * hypnotic-prescribing discipline, the AGS Beers-criteria
 * older-adult avoid-list, the FDA/EMA complex-sleep-behaviour
 * warnings, the Bélanger CBT-I trials, the Magnitude of
 * Substance Use in India 2019 survey) with per-claim provenance.
 *
 * Drug routes: sertraline alone (the SSRI tier of the exit
 * prescription — treating the disorder the tablets were
 * borrowed for, never the taper) has a KYP lesson and is
 * linked; diazepam, the carbamazepine/propranolol cover tier
 * and the Z-drugs have no KYP lessons and are recorded in
 * contentGaps, never invented.
 */
export const benzodiazepineMisuseCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "benzodiazepine-misuse",
  title: "Benzodiazepine Misuse",
  shortName: "Benzo Misuse",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Benzodiazepine Misuse"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The borrowed calm: a withdrawal that can seize and kill, and the taper that exits it",

  summary:
    "Benzodiazepine misuse grows from tolerance and rebound behind honest prescriptions and chemist counters alike. Because withdrawal seizures can kill, the exit is a slow written diazepam-equivalent taper, with the borrowed sleep and anxiety properly rebuilt.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Explain the borrowed-brake logic: GABA-A enhancement, receptor down-regulation, tolerance and rebound anxiety/insomnia; why 'just stop' advice fails by design.",
    "Name the three Indian user groups (long-term therapeutic, polysubstance, recreational/counter-coping) and their different management frames.",
    "Recognise the withdrawal severity ladder and its danger window: early days 1–3, peak days 2–7 (short-acting) or up to 2 weeks+ (long-acting), seizures the medical emergency, withdrawal delirium and psychosis the extreme, the weeks-to-months rebound tail.",
    "Convert short-acting dependence to diazepam equivalents and write a stepwise taper schedule: 0.5 mg alprazolam ≈ 10 mg diazepam, 10–25% steps, the 6–12-week architecture.",
    "Manage the polysubstance combinations where overdose risk multiplies: the alcohol and opioid stacks, and how the tapers coordinate.",
    "Rebuild sleep and anxiety management without sedatives: the CBT-I package and the underlying disorder's proper treatment as the exit prescription.",
    "Run prescribing discipline: 2–4-week ceilings with stop-dates, one pharmacy, never phone repeats, H1-schedule recording, the elderly stop-list.",
    "Counsel the elderly-specific dangers: the falls-fracture-confusion cascade and the geriatric slow-taper frame.",
  ],
  quickFacts: [
    { label: "The lethal withdrawal", value: "Alcohol's twin", detail: "Sedative withdrawal can seizure and kill: early days 1–3, peak days 2–7 short-acting (up to 2 weeks+ long-acting), withdrawal delirium and psychosis at the extreme, never abrupt cessation at high dose" },
    { label: "The exam arithmetic", value: "0.5 mg alprazolam ≈ 10 mg diazepam", detail: "The conversion table's headline pair: approximate, individualised; transfer the total daily load to diazepam equivalents, then walk it down" },
    { label: "The half-life trap", value: "Short-acting = harder", detail: "Alprazolam, lorazepam and zolpidem leave in hours: morning anxiety, 4 a.m. waking, the clock-driven next dose; diazepam and clonazepam self-taper a little every day" },
    { label: "The exit architecture", value: "Convert–Chart–Cover–Rebuild–Supervise", detail: "Convert to diazepam equivalents; chart the written taper (10–25% every 1–2 weeks, 6–12 weeks); cover the danger window; rebuild sleep and anxiety without sedatives; supervise with the family-held box" },
    { label: "The dangers mnemonic", value: "Seizure-Stack-Seniors", detail: "Withdrawal seizures; the alcohol/opioid overdose stack (respiratory depression); the elderly falls-fracture-confusion cascade" },
    { label: "The prescribing ceiling", value: "2–4 weeks", detail: "Short courses with stop-dates written on the prescription itself; never phone repeats; one pharmacy; H1-schedule recording for monitored agents" },
    { label: "The Indian figure", value: "Around 1% of adults", detail: "Sedative/hypnotic misuse in the 2019 national survey lineage, higher among urban males: undercounting the unreviewed-therapeutic users behind lakhs of OPD 'insomnia' and 'tension' complaints" },
    { label: "The stop signal", value: "Sleep-driving", detail: "Z-drug complex sleep behaviours (sleepwalking, sleep-eating, sleep-driving with amnesia) mean stop the medicine immediately, not a taper" },
  ],
  knowledgeGraph: [
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The parent frame: the severity-graded single-disorder logic, the lethal-withdrawal triage sentence, the six-step skeleton this taper hangs from" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The twin lethal withdrawal and the commonest co-dependence: the two tapers coordinating, often one benzodiazepine schedule serving both, led by the alcohol programme" },
    { label: "Opioid Use Disorders", type: "condition", href: "/psychiatry/opioid-use-disorders/", note: "The overdose-stack partner: respiratory depression when the two are layered; buprenorphine-maintained patients still need the benzo-taper architecture" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "What the tablets were borrowed for, and the CBT-I package that replaces them, first-line" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "The differential for the Z-drug complex sleep behaviours: the amnesia blank-spots the family reports" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "Withdrawal delirium's differential home, and the elderly sedative-burden stop-list this course's prevention tier enforces" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "The archetype start. The grief prescription that becomes the twelve-year tablet" },
    { label: "GABA", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The borrowed brake itself: the receptor system the tablets press, then unlearn" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The alarm circuit the tablet silences, and whose rebound is withdrawal's anxiety" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI tier of the exit prescription: treating the panic or GAD the tablets were borrowed for, never the taper" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the whole illness. The borrowed brake: GABA is the brain's own inhibitory currency, and the benzodiazepine's binding site on the GABA-A receptor makes each GABA molecule open its chloride channel wider and longer; calm, sleep, muscle relaxation, the anxiolysis that earns the prescription. A brain braked externally for weeks stops pressing its own pedal: receptor down-regulation, the adaptation that IS tolerance. Stop the tablets and the brake is gone with the pedal weak: the rebound storm of racing arousal: anxiety, insomnia, tremor, sweat, perceptual distortion and, dangerously, seizures. The cruel arithmetic: the withdrawal reproduces the original complaint, amplified; the patient who started for insomnia cannot sleep at all without the tablet; the one who started for panic feels panic worse than ever; this is why 'just stop' advice fails and self-treatment relapses. The half-life trap: alprazolam and the Z-drugs leave the body in hours, so the dependent brain runs a mini-withdrawal between doses; morning anxiety, 4 a.m. waking, the clock-driven next dose, which cements dependence faster and harder; diazepam and clonazepam self-taper a little every day, smoothing the curve, which is the entire logic of the conversion step: transfer the short-acting dependence to a long-acting equivalent, then walk the dose down slowly so the receptor system re-learns to press its own pedal over weeks, not overnight. The amnesia lane: benzodiazepines and Z-drugs interfere with the brain's filing of new memories (anterograde amnesia, the blank-spots the long-term user calls 'my mind has become weak') and the Z-drugs add the paradoxical half-awake states, the complex sleep behaviours: sleepwalking, sleep-eating, sleep-driving, with no memory afterwards. In the elderly, the same mechanisms plus slowed clearance equal falls, fractures, confusion: the cascade that makes benzodiazepines among the most dangerous regular medicines of old age.",
    steps: [
      "The borrowed brake: benzodiazepines enhance GABA-A signalling (the brain's own inhibitory chloride channel opened wider and longer by the tablet's binding) calm, sleep, muscle relaxation on credit.",
      "The brake that forgets: weeks of externally pressed braking drive receptor down-regulation; the brain stops pressing its own pedal; the same dose no longer holds: tolerance.",
      "The rebound storm: stop the tablets and the brake is gone with the pedal weak; anxiety, insomnia, tremor, sweating, perceptual distortion and, dangerously, seizures; the withdrawal reproduces the original complaint, amplified.",
      "The half-life trap: short-acting agents (alprazolam, lorazepam, zolpidem) leave in hours, creating a mini-withdrawal between doses; morning anxiety, 4 a.m. waking, the clock-driven next dose; long-acting agents (diazepam, clonazepam) self-taper a little every day.",
      "The amnesia lane: interference with the filing of new memories; anterograde amnesia; the Z-drugs' complex sleep behaviours (sleepwalking, sleep-eating, sleep-driving) with no memory afterwards.",
      "The elderly arithmetic: the same mechanisms plus slowed clearance; falls, fractures, confusion; the cascade that puts benzodiazepines on the geriatric stop-list.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala (the alarm the tablet silences)", role: "The threat circuit whose GABA-ergic dampening is the anxiolysis, and whose unbraked rebound is withdrawal's anxiety, perceptual distortion and insomnia.", grade: "established" },
    { id: "hippocampus", name: "Hippocampus (the filing room)", role: "The new-memory consolidation machinery the sedatives interrupt: the anterograde amnesia lane, the blank-spots the family notices first.", grade: "established" },
    { id: "thalamus", name: "Thalamus (the sensory relay)", role: "The gating station behind withdrawal's sensory hypersensitivity: lights too bright, sounds too loud, the perceptual distortions of the peak window.", grade: "supported" },
    { id: "frontal-networks", name: "Frontal networks (the performance budget)", role: "The morning grogginess, the slowed processing and the performance decline of long-term use: the daytime cost of the borrowed night.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "GABA", symbol: "GABA", role: "The borrowed brake itself. GABA-A enhancement producing the calm, and receptor down-regulation producing tolerance and the rebound when it stops; the whole illness in one transmitter.", grade: "established", drugConnection: "The benzodiazepine and Z-drug class that modulates it has no KYP drug lessons; the discipline is taught in this course." },
    { name: "Glutamate", symbol: "Glu", role: "The unbraked accelerator of withdrawal: the excitatory rebound that storms when the borrowed brake is removed, seizures at its extreme.", grade: "established" },
    { name: "Noradrenaline", symbol: "NE", role: "The hyperarousal storm of the withdrawal window: sweating, tremor, insomnia, the racing arousal that reads as anxiety worse than the original.", grade: "supported", drugConnection: "Propranolol-class adjuncts for symptom cover: no KYP lesson; taught in the Cover step, route never invented." },
    { name: "Dopamine", symbol: "DA", role: "The learning currency of the borrowed-calm cycle: the cue-driven next dose, the clock-driven dosing that short half-lives teach the brain.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The chemistry of the disorders underneath: the panic and GAD the tablets were borrowed for, and the SSRI tier of the exit prescription.", grade: "supported", drugConnection: "Sertraline as the linked KYP lesson: the long-term anxiety tool, never the taper." },
  ],
  pathways: [
    {
      id: "borrowed-brake-pathway",
      name: "The borrowed brake (enhancement to rebound)",
      steps: [
        { label: "The brake pressed from outside", detail: "GABA-A enhancement: each inhibitory message amplified into calm, sleep, muscle relaxation" },
        { label: "The brain stops pressing", detail: "Receptor down-regulation: weeks of external braking make the endogenous pedal weak; tolerance declared" },
        { label: "The tablets withdrawn", detail: "The brake gone with the pedal weak: racing arousal unopposed" },
        { label: "The rebound declares", detail: "Anxiety worse than the original, insomnia worse than the original, tremor, sweat, perceptual distortion: seizures at the extreme" },
      ],
      clinicalManifestation: "The patient who cannot sleep at all without the tablet, whose missed dose feels like the original illness returning at double strength: rebound, the relapse engine.",
      grade: "established",
    },
    {
      id: "half-life-trap-pathway",
      name: "The half-life trap (inter-dose withdrawal to the conversion logic)",
      steps: [
        { label: "The short-acting exit", detail: "Alprazolam, lorazepam, zolpidem leave the body in hours: the level falls below therapeutic between doses" },
        { label: "The mini-withdrawal cycles", detail: "Morning anxiety, 4 a.m. waking, the clock-driven next dose: a daily negative-reinforcement loop" },
        { label: "Dependence hardens", detail: "Faster, deeper dependence on short-acting agents; the dose creeps up for the same effect" },
        { label: "The conversion answer", detail: "Transfer to a long-acting equivalent (diazepam) that self-tapers a little every day, then walk the dose down over weeks" },
      ],
      clinicalManifestation: "The alprazolam user dosing by the clock, and the taper that begins, always, with the conversion arithmetic.",
      grade: "established",
    },
    {
      id: "amnesia-lane-pathway",
      name: "The amnesia lane (filing failure to the Z-drug stop-signal)",
      steps: [
        { label: "The filing interrupted", detail: "New-memory consolidation impaired: anterograde amnesia, the blank-spots the user calls 'my mind has become weak'" },
        { label: "The Z-drug paradox", detail: "Half-awake states on zolpidem-class agents: complex sleep behaviours with no memory afterwards" },
        { label: "The family reports", detail: "Sleepwalking, sleep-eating, sleep-driving: dismissed as 'stress' until a car or a kitchen fire tells the truth" },
        { label: "The stop-signal rule", detail: "A complex sleep behaviour means stop the agent immediately, not a taper, not a dose debate" },
      ],
      clinicalManifestation: "The student found in the hostel kitchen at 3 a.m. with a cut foot and no memory of any of it: the Z-drug signature night.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "early-withdrawal", time: "Days 1–3", title: "The early window", description: "Anxiety, insomnia, restlessness, sweating, tremor, perceptual distortion, muscle cramps: the short-acting agents declaring first, the calm running out between doses.", phase: "onset" },
    { id: "peak-short-acting", time: "Days 2–7", title: "The peak window, short-acting agents", description: "The danger days: seizures; the medical emergency; severe insomnia, depersonalisation, lights too bright and sounds too loud, paranoia in severe cases.", phase: "peak" },
    { id: "peak-long-acting", time: "Up to 2 weeks+", title: "The peak window, long-acting agents", description: "Diazepam- and clonazepam-shaped curves run longer and flatter: the same emergency territory stretched over weeks; withdrawal delirium and psychosis the extreme rung.", phase: "peak" },
    { id: "rebound-tail", time: "Weeks to months", title: "The rebound tail", description: "Rebound anxiety and insomnia waves, sensory hypersensitivity: the PAWS analogue; the subjective engine of relapse-by-self-treatment, and the reason the rebuild step exists.", phase: "duration" },
    { id: "recovery-window", time: "The tapering months", title: "The brake returning", description: "The written taper walking the dose down 10–25% every 1–2 weeks while the receptor system re-learns to press its own pedal: recovery measured in weeks to months, never overnight.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Benzodiazepines and Z-drugs rank among the most prescribed psychotropics worldwide, and long-term use (beyond the recommended 2–4 weeks for insomnia) is the rule rather than the exception in real-world prescribing data. Combined with opioids they drive a large share of overdose deaths; combined with alcohol they deepen the relapse and withdrawal cycle. The misuse statistics tell only half the story: the dependence mostly hides behind legitimate prescriptions.",
    indianPrevalence: "The Indian survey lineage (Magnitude of Substance Use in India, 2019) reports sedative and hypnotic misuse around 1% of adults, with higher rates among urban males: a figure that undercounts the unreviewed-therapeutic users, the group that never enters addiction statistics. Alprazolam (high-potency, short-acting) dominates misuse presentations; the Z-drug wave is growing with private-prescription culture.",
    lifetimeRisk: "Dependence risk rises steeply with continuous exposure beyond weeks: the short-acting high-potency agents, dose escalation for the same effect, and years of unbroken use the steepest parts of the curve.",
    genderRatio: "Male predominance in the survey statistics (higher among urban males); the unreviewed-therapeutic group largely invisible to those statistics altogether.",
    ageOfOnset: "Spans adult life: the exam-sleep student and the night-shift executive at one end, the decades-long elderly user at the other, with older adults facing the compounded falls-memory-delirium risks.",
    indianNotes: "Prescription oversight is thin and chemist supply is real: an enormous population uses benzodiazepines without documented indication or review; the hidden epidemic behind lakhs of OPD 'insomnia' and 'tension' complaints.",
  },
  etiology: [
    { category: "biological", factor: "The pharmacological engine", details: "Short-acting high-potency agents (alprazolam above all, lorazepam, the Z-drugs); dose escalation for the same effect; years of continuous exposure with dependence risk rising steeply beyond weeks." },
    { category: "psychological", factor: "The borrowed-calm learning cycle", details: "The drug teaches the brain that calm is exogenous: each tablet a lesson that the brain's own resources are second-best; panic disorder and PTSD patients the high-risk groups (the underlying disorder is real; the indefinite prescription is the mistake)." },
    { category: "social", factor: "The prescription-origin causes", details: "Insomnia and anxiety treated indefinitely without review; absence of stop-date planning; repeats by chemists; multiple uncoordinated prescribers: the iatrogenic channel that produces the unreviewed-therapeutic majority." },
    { category: "social", factor: "The Indian structural drivers", details: "Chemist dispensing without prescriptions; the 'nerve tonic + tablet' culture; night-shift economies; the absence of insomnia-specific non-drug services. CBT-I trained providers scarce, so the tablet becomes the only sleep clinic in the district." },
    { category: "biological", factor: "Comorbid substance use", details: "Alcohol and opioid users escalating benzodiazepine effect deliberately: the combination-dependent profile whose overdose risk is the multiplied kind." },
  ],
  symptomClusters: [
    {
      category: "1. The long-term use pattern (the unreviewed-therapeutic group)",
      symptoms: ["Years of nightly use; morning grogginess; creeping dose escalation", "Memory complaints ('my mind has become weak') the anterograde amnesia lane", "Irritability and morning anxiety (inter-dose withdrawal with short-acting agents)", "Falls or near-falls in the elderly; performance decline", "The daytime cost of the borrowed night: slowed processing, the flat afternoon"],
    },
    {
      category: "2. The dependence markers",
      symptoms: ["Stockpiling from multiple sources; the chemist relationship as the true prescriber", "Morning-first dosing: the day not begun until the tablet is taken", "Failed self-tapers: the 'just stop' attempts that failed by design", "Morning tremor and sweating relieved by the dose: the inter-dose withdrawal visible at examination"],
    },
    {
      category: "3. The withdrawal syndrome (severity by dose, duration, half-life)",
      symptoms: ["Early (days 1–3, short-acting first): anxiety, insomnia, restlessness, sweating, tremor, perceptual distortion, muscle cramps", "Peak (short-acting days 2–7; long-acting up to 2 weeks+): SEIZURES the medical emergency, severe insomnia, depersonalisation, perceptual distortions (lights too bright, sounds too loud), paranoia in severe cases", "The extreme rungs: withdrawal delirium and withdrawal psychosis", "Long tail (weeks–months): rebound anxiety and insomnia waves, sensory hypersensitivity; the PAWS analogue"],
    },
    {
      category: "4. The Z-drug signature",
      symptoms: ["Amnesia blank-spots the user cannot account for", "Sleepwalking, sleep-eating, sleep-driving reported by the family, denied or dismissed by the user", "Often labelled 'stress' until a car or a kitchen fire tells the truth"],
    },
    {
      category: "5. The polysubstance presentations",
      symptoms: ["Alcohol users 'balancing' with alprazolam: the stacked-sedation profile", "Opioid users deepening the nod: the overdose profile", "Both the reason a poly-substance history is mandatory, not optional: the mortality question is combination"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The quantified history",
      code: "Which agent, what strength, how many, since when",
      criteria: [
        "The agent and the load: which benzodiazepine or Z-drug, what strength, how many per day, years of use, the last prescription, and the chemist relationships (stockpiling from multiple sources the dependence marker).",
        "The co-sedation question, always: alcohol and opioids on board; the mortality question is combination; the poly-substance history is mandatory at every assessment.",
        "The morning exam: tremor, sweating, pupils, cognition, falls history and gait in the elderly; the inter-dose withdrawal visible before the first word.",
        "The underlying-disorder interview: what was it originally for; insomnia, panic, grief, trauma, night-shift sleep? The exit prescription targets this.",
        "Investigations as indicated: electrolytes, liver and renal function (affecting metabolism choices), thyroid and B12 in new insomnia presentations, pregnancy screen where relevant.",
      ],
      duration: "One consultation's honest work: the history the whole taper hangs on.",
      indianNote: "The screen that finds them: 'Do you take any sleeping or nerve tablets; how many, since when?': non-judgmental, specific, fruitful, asked behind every 'weakness', 'gas', 'tension' and 'sleep not coming'.",
    },
    {
      system: "The severity triage",
      code: "Setting the taper's stage",
      criteria: [
        "Dose and duration: the total daily load in diazepam equivalents, years of continuous exposure.",
        "Half-life: short-acting (alprazolam, lorazepam, Z-drugs) versus long-acting (diazepam, clonazepam); the withdrawal timing and the seizure risk's shape.",
        "Past withdrawal seizures or delirium: an inpatient criterion forever; comorbid alcohol or opioid dependence; no home support.",
        "The frame decision: the unreviewed-therapeutic user needs the deprescribing frame rather than an addiction label; different words, same taper architecture.",
      ],
      duration: "The triage happens before the first milligram is charted.",
      indianNote: "The elderly triage adds falls history, cognition and gait: the deprescribing conversation with the falls package, not just the taper.",
    },
  ],
  severityScales: [
    {
      name: "The withdrawal ladder",
      fullName: "Sedative withdrawal severity staging",
      measures: "Where the patient sits on the time-course, and which danger rung the plan must cover.",
      ranges: [
        { min: 0, max: 0, severity: "The early window (days 1–3)", action: "Anxiety, insomnia, restlessness, sweating, tremor, perceptual distortion, muscle cramps: the short-acting agents declaring first; the written chart in the family's hands and the cover tier considered" },
        { min: 1, max: 1, severity: "The peak window (short-acting days 2–7; long-acting up to 2 weeks+)", action: "Seizures the medical emergency; severe insomnia, depersonalisation, lights too bright, sounds too loud, paranoia in severe cases; withdrawal delirium and psychosis at the extreme: the rung where inpatient criteria decide" },
        { min: 2, max: 2, severity: "The long tail (weeks–months)", action: "Rebound anxiety and insomnia waves, sensory hypersensitivity: the PAWS analogue; the rebuild step (CBT-I, the underlying disorder treated) and the relapse plan carrying this stretch" },
      ],
      indianNote: "The peak window's timing is the exam favourite and the family's arithmetic: short-acting days 2–7, long-acting up to 2 weeks+; the danger days known by date, not by hope.",
    },
    {
      name: "The taper-setting triage",
      fullName: "Inpatient-candidacy screen for sedative withdrawal",
      measures: "The factors that decide home, day-supervision or ward.",
      ranges: [
        { min: 0, max: 0, severity: "Standard-dose, dependent, no red flags", action: "Outpatient written taper with family-held medicines, weekly-to-fortnightly reviews and the bad-week plan (hold the dose, do not escalate, call)" },
        { min: 1, max: 1, severity: "Higher-risk: high dose, short-acting agent, thin support", action: "Intensive day-supervision taper with the cover tier (carbamazepine-type, propranolol-class adjuncts) considered" },
        { min: 2, max: 2, severity: "Inpatient criteria met", action: "High-dose alprazolam, past withdrawal seizures or delirium, comorbid alcohol or opioid withdrawal, complicated pregnancy: conversion first, then the ward-based taper" },
      ],
      indianNote: "The inpatient bed is the scarce commodity. The family-held box and the written chart are the resource-poor arrangements that make the outpatient tier safe.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Alcohol withdrawal (the twin)", distinguishingFeatures: "The other withdrawal that kills: tremor, sweating, seizures, the delirium rung; the two co-exist more often than either is admitted.", keyDifferentiator: "The quantified alcohol history taken at every sedative assessment: the mortality question is combination, and the two tapers often run as one coordinated schedule led by the alcohol programme." },
    { condition: "Opioid withdrawal", distinguishingFeatures: "The flu-like misery (aches, gooseflesh, gut) with the pupil and overdose-history signatures; miserable, not lethal.", keyDifferentiator: "The lethality contrast orders the emergency tier; the co-use discovered before the taper is planned, not after." },
    { condition: "The underlying anxiety disorder returning", distinguishingFeatures: "Panic or GAD symptoms persisting into abstinence: the original borrower at the door again.", keyDifferentiator: "Rebound is withdrawal's amplified echo that fades over weeks; the disorder proper has its pre-tablet biography. The underlying-disorder interview tells them apart, and both may need treating." },
    { condition: "Chronic insomnia disorder proper", distinguishingFeatures: "Months of poor sleep with daytime consequences: the complaint the tablet was borrowed for.", keyDifferentiator: "The rebound insomnia of withdrawal (worse-than-original, first days off) against the chronic pattern: the sleep diary and the CBT-I assessment sorting them; the treatment for both is the rebuild, not the tablet." },
    { condition: "Primary NREM parasomnias", distinguishingFeatures: "Childhood-onset sleepwalking and night terrors, usually without a tablet on board.", keyDifferentiator: "The Z-drug complex behaviour arrives with the prescription and resolves on withdrawal: the amnesia blank-spots and the timing pointing at the tablet, not the parasomnia." },
    { condition: "Elderly delirium from other loads", distinguishingFeatures: "Infection, metabolic derangement, anticholinergic burden: the fluctuating attention of old age.", keyDifferentiator: "The sedative history and the timeline since the last dose; the withdrawal delirium climbing the ladder's timing while the other loads declare their own causes, both treated, the tablet either way." },
  ],
  management: [
    { category: "pharmacotherapy", name: "Step 1 — Convert: transfer to a long-acting agent", description: "Convert the total daily load to diazepam equivalents (standard conversion tables exist in formularies; the principle matters: ~0.5 mg alprazolam ≈ 10 mg diazepam, approximate and individualised). The long-acting agent self-tapers a little every day, smoothing the curve the short-acting agent made jagged.", whenToUse: "Every dependent patient before the first reduction: the exception is the Z-drug complex-sleep-behaviour stop signal, which is a stop, not a conversion.", indianContext: "Diazepam is cheap and universally available; the conversion arithmetic done in the consultation and written down, because the chemist must not be the taper's author." },
    { category: "pharmacotherapy", name: "Step 2 — Chart: write the taper schedule", description: "Commonly reduce ~10–25% of the starting dose every 1–2 weeks, slower near the end. The last milligrams carry the most fear. In dependent long-term users a 6–12-week schedule is typical. Write it down with dates and hold doses: the patient's anxiety meets the arithmetic of the chart.", whenToUse: "From the conversion day; reviewed weekly to fortnightly; the hold-rule for bad weeks. Hold the dose, do not escalate, call.", indianContext: "The written chart is the resource-poor centre of the whole treatment: dates, doses, hold-rules, one page; the family holds it with the medicines." },
    { category: "pharmacotherapy", name: "Step 3 — Cover: medical cover for the danger window", description: "Carbamazepine-type anticonvulsants or propranolol-class adjuncts in selected cases for seizure cover and symptom relief; treat comorbid alcohol dependence with its own protocol: the two tapers coordinate, often one benzodiazepine schedule serving both, led by the alcohol programme.", whenToUse: "Selected cases: high seizure risk, intolerable symptom load, comorbid alcohol dependence; never a substitute for the written taper.", indianContext: "The cover tier is generic and cheap: part of the under-a-few-hundred-rupees taper kit (approx 2026); no KYP drug lessons exist for these agents, the discipline taught here, the route never invented." },
    { category: "psychotherapy", name: "Step 4 — Rebuild: sleep and anxiety without sedatives", description: "The CBT-I package (stimulus control, sleep-window compression, caffeine discipline, fixed wake time) plus relaxation training, and anxiety-disorder treatment proper: SSRIs for panic and GAD, with the honest warning that SSRIs take weeks, so bridge only as planned; trauma treatment where PTSD drove the original prescription.", whenToUse: "Begun during the taper, not after it: the rebound tail is where the rebuild earns its keep.", indianContext: "CBT-I trained providers are scarce: district-level group classes and night-shift employer sleep programmes the system fixes worth teaching; the SSRI tier is where KYP's drug lessons meet this course (sertraline linked below)." },
    { category: "lifestyle", name: "Step 5 — Supervise: the written chart and the family-held box", description: "Weekly-to-fortnightly reviews with the written chart; the family holds the medicines during the taper; one named pharmacy; a pre-written plan for bad weeks (hold the dose, do not escalate, call); the relapse plan written before it is needed.", whenToUse: "The whole taper and the months after: supervision is the difference between a chart and a cure.", indianContext: "The family-held medicine box is the Indian delivery channel. The same arrangement that closes the chemist's tap; tele-follow-up extends the review where distance bites." },
    { category: "pharmacotherapy", name: "The special frames: elderly, high-dose, polysubstance, Z-drug, pregnancy", description: "The unreviewed-therapeutic elderly user: deprescribing with geriatric caution; an even slower taper, falls vigilance, the alternative sleep programme, and the explicit conversation converting 'you are an addict' to 'this medicine has been quietly working against you at your age'. Alprazolam-at-high-dose: conversion first, then inpatient or intensive day-supervision; short-acting high-dose withdrawal carries the highest seizure risk; never an abrupt stop. Polysubstance: stabilise the most dangerous axis first (usually alcohol or opioid); the benzodiazepine taper coordinates with, not against, those programmes: buprenorphine-maintained opioid patients still need the benzo-taper architecture. Z-drug complex behaviours: stop the agent immediately (no gradual debate; sleep-driving is a fire hazard); substitute the CBT-I package; treat the underlying insomnia. Pregnancy: never abrupt withdrawal; specialist-coordinated slow taper with obstetric linkage; neonatal monitoring planned.", whenToUse: "The frame chosen before the first prescription of the taper: the elderly, the high-dose, the polysubstance, the pregnant and the sleep-driving all need their own version of the same architecture.", indianContext: "The elderly frame is the commonest Indian version: the widow's twelve-year tablet; the deprescribing conversation delivered kindly, with the family, converts a moral argument into a medical plan." },
    { category: "lifestyle", name: "The prevention prescription: prescribing discipline", description: "Short courses with stop-dates written on the prescription itself (2–4 weeks for insomnia); non-drug insomnia care first-line; SSRIs for anxiety disorders as the long-term tool; one pharmacy, one prescriber, documented quantities; never repeat sedatives on phone requests; the elderly prescription rule: benzodiazepines on the anticholinergic-plus-sedative burden stop-list; H1-schedule recording where the agent is monitored (alprazolam among them).", whenToUse: "Every new sedative prescription, from day one: the discipline that prevents the next twelve-year tablet.", indianContext: "Enforcement of the schedules is thin; prescription discipline by the profession is the real regulation: the chemist-facing written schedule, a taper chart a chemist can respect." },
  ],
  safety: {
    redFlags: [
      "Abrupt cessation of a high-dose short-acting agent (alprazolam above all), never: the highest seizure risk; conversion first, then inpatient or intensive day-supervision taper",
      "Withdrawal seizures: the medical emergency of the peak window: hospital, now",
      "Withdrawal delirium or psychosis at the extreme: the inpatient rung, mortality like alcohol's, never a home gamble",
      "Alcohol or opioid co-use discovered late: the stacked-sedation overdose profile; the poly-substance history is mandatory at every assessment",
      "A Z-drug complex sleep behaviour reported: sleepwalking, sleep-eating, sleep-driving: stop the agent immediately, no gradual debate",
      "Pregnancy in the dependent user, never abrupt withdrawal; specialist-coordinated slow taper with obstetric linkage, neonatal monitoring planned",
    ],
    urgentGuidance:
      "The order of operations: (1) never stop abruptly at high dose; the seizure risk assessed first, the conversion second; (2) a withdrawal seizure or a fluctuating withdrawal delirium means hospital: inpatient management, never a home gamble; (3) the high-dose short-acting presentation gets conversion first, then an inpatient or intensive day-supervision taper; (4) alcohol or opioids on board re-order everything: stabilise the most dangerous axis first, the tapers coordinated; (5) a reported complex sleep behaviour stops the Z-drug immediately: sleep-driving is a fire hazard, and the next event may be the fatal one; (6) the pregnant dependent user is referred for a specialist-coordinated slow taper: obstetric linkage, neonatal monitoring planned; (7) the elderly fall or fracture on a standing sedative is the cascade speaking: the deprescribing conversation that week, gently, with the family.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The SSRI tier of the exit prescription: treating the disorder the tablets were borrowed for",
      rationale: "Where the benzodiazepine was borrowed for panic disorder or GAD, the long-term tool is the SSRI: started early enough for its weeks of latency, so the bridge is planned rather than improvised; the honest warning given at initiation: SSRIs take weeks, so bridge only as planned. It treats the underlying disorder; it is never the taper.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Comorbidity care, not withdrawal care: the taper is the diazepam conversion chart with its written steps; the SSRI runs alongside, treating the panic or GAD the tablets were substituting for.",
    },
  ],
  contentGaps: [
    "Diazepam (the conversion agent and the taper's backbone) has no KYP drug lesson; the equivalence arithmetic and the written chart are taught in this course, the route never invented.",
    "The adjunct cover tier (carbamazepine, propranolol) has no KYP lessons; the seizure-cover and symptom-relief discipline is taught here in the Cover step.",
    "The Z-drugs (zolpidem-class) (the dependence-with-amnesia signature and the stop-signal rule) have no KYP lessons; taught here in full.",
    "The benzodiazepine class itself (alprazolam, lorazepam, clonazepam) has no KYP drug lessons: the class is the subject of this course, not a linked route; recorded so no gap is mistaken for silence.",
  ],
  patientGuide: {
    whatIsIt:
      "These are the 'sleeping and nerve tablets': alprazolam, diazepam, clonazepam, lorazepam, and the newer zolpidem-type 'Z-drugs'. Prescribed honestly for sleeplessness, anxiety and grief, they calm by pressing the brain's own brake. The problem is that the brain adapts: within weeks the same dose stops working (tolerance), and stopping brings the rebound; anxiety worse than the original, sleeplessness worse than the original, sweating, tremor and, dangerously, fits. The dependence is not a character fault: it is the medicine's nature, whether a doctor started it or a chemist sold it. The exit exists, and it is slow, planned and written: a conversion to a long-acting equivalent, a taper chart with dates, the family holding the medicine box, and a proper rebuild of the sleep and the anxiety without sedatives.",
    whatCausesIt:
      "Every tablet presses the brain's own brake: a chemical called GABA. After weeks of borrowed braking, the brain presses its own brake less (the receptors wind down), so the same dose no longer holds. Stopping then leaves the brain without any brake at all: the returning anxiety and sleeplessness are the withdrawal, not your original illness coming back at full strength. Short-acting tablets (alprazolam and the Z-drugs) do this fastest, because they leave the body in hours and the brain runs a small withdrawal between every dose. In old age the same tablets add an extra danger: the body clears them slowly, and the sedation makes falls, fractures and confusion more likely.",
    symptoms:
      "Long-term use: morning grogginess, a mind that feels weak (blank-spots in memory), creeping dose increases, morning anxiety and irritability, falls or near-falls in the elderly, declining performance. Dependence: buying from more than one chemist, the first dose before the first task of the day, failed attempts to stop, morning shakes and sweating that the tablet relieves. Withdrawal: anxiety, sleeplessness, restlessness, sweating, tremor, cramps in the first days; at its worst: fits, confusion and hallucinations (a hospital emergency); and for weeks to months after, waves of returning anxiety and sleeplessness that slowly shrink. Z-drug warning signs: sleepwalking, sleep-eating or sleep-driving with no memory afterwards. Same-day care for: any fit, any confusion episode, any fall, any sleep-driving event.",
    treatment:
      "The treatment is a plan, not a push. The tablets are never stopped suddenly at high dose. Instead: the dose is converted to a long-acting equivalent (usually diazepam); a written taper chart is made with dates and amounts, reducing about 10–25% every 1–2 weeks over roughly 6–12 weeks, slower at the end; medicines that cover the danger (seizure protection, symptom relief) are prescribed where needed; the sleep and anxiety are rebuilt without sedatives: fixed wake time, bed only for sleep, no caffeine after noon, an evening walk, a relaxation routine, and proper treatment of the panic, grief or anxiety underneath; and the family holds the medicine box, one pharmacy knows the plan, and bad weeks mean calling the doctor, not taking more.",
    selfHelp: [
      "Never stop abruptly on your own: the written taper is the safe road; ask for it by name.",
      "The family-held box: a named family member keeps and gives the medicines during the taper; it closes the chemist's tap and the self-escalation route.",
      "Fixed wake time every day, bed only for sleep, no caffeine after noon: the sleep programme that replaces the tablet.",
      "The bad-week rule in writing: hold the dose, do not escalate, call.",
      "One named pharmacy, one prescriber, never a phone repeat; prescription-only means exactly that.",
      "Never combine the tablet with alcohol or opioid painkillers: sedation stacks on sedation and breathing can fail.",
      "Any sleepwalking, sleep-eating or sleep-driving event: the medicine stops immediately and the doctor is told the same week.",
    ],
    whenToSeekHelp: [
      "A fit, or severe shakes and sweating when doses are missed: hospital now, never a home gamble",
      "Confusion, hallucinations or paranoia during dose reduction: the emergency rung",
      "Any fall in an older user on these tablets: the cascade's first word",
      "A sleepwalking, sleep-eating or sleep-driving event on a Z-drug: stop the medicine and same-week review",
      "Pregnancy while dependent, never stop abruptly; ask for the specialist-coordinated slow taper",
      "The dose creeping up again, or craving between doses: an early review, not a failure",
    ],
    indianResources: [
      "The district de-addiction centre and the DMHP psychiatric tier: the complicated-taper channel",
      "Tele-MANAS 14416 (24×7, free): the distress and craving line, and the family's own exhaustion channel",
      "The written taper chart and the family-held medicine box: ask the treating team for both at the next visit",
      "Generics through Jan Aushadhi and primary-health channels: the whole taper kit (diazepam, carbamazepine, propranolol, an SSRI) costs under a few hundred rupees a month (approx 2026)",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific benzodiazepine-taper pathway exists as a standalone document; practice follows the international conversion-and-taper architecture (equivalence switching, written schedules, adjunct cover) delivered through the district de-addiction centres and the DMHP psychiatric tier. The legality frame: most benzodiazepines fall under Schedule H/H1 discipline. H1 carrying recording requirements, with alprazolam among the monitored agents; enforcement is thin, which makes professional prescription discipline the real regulation.",
    systemContext: "The chemist is the prescriber: half the long-term users have never had a documented review. The presentation wears disguises ('weakness', 'gas', 'tension', 'sleep not coming') and the screen is one non-judgmental, specific question: 'Do you take any sleeping or nerve tablets; how many, since when?' Treatment begins by replacing the chemist relationship with a written doctor schedule and a family-held medicine box.",
    programmeContext: "The de-addiction tier (district centres, DMHP psychiatry) carries the complicated tapers and the inpatient rungs; the system fixes worth teaching are chemist-facing communication (written taper schedules that chemists can respect), district-level CBT-I group classes, night-shift employer sleep programmes (the structural prevention layer) and tele-follow-up of written tapers where distance bites.",
    costConsiderations: "The entire taper kit (diazepam, carbamazepine, propranolol, an SSRI) costs under a few hundred rupees a month in generics (approx 2026). The scarce commodities are the review visits and the written schedule; the chemist must not be the taper's author.",
    culturalConsiderations: "The 'nerve tonic + tablet' culture; the night-shift economies; the family role: medicine-holding during the taper, sleep-hygiene co-enforcement, the bad-week protocol (call, don't escalate), and their own relief care, because the sleepless patient keeps the house awake. The bereavement-start archetype (the grief prescription repeated by the chemist for a decade) is the Indian clinical reality behind most 'memory weakness' presentations in older women.",
    patientCounselling: [
      "The one-line philosophy: 'The prescription pad can be the pusher; the exit is arithmetic: convert, chart, cover, rebuild, supervise; the brain gets its own brake back over weeks, not overnight.'",
      "The alliance script: 'This medicine has been quietly working against you (not 'you are an addict') the words that keep the alliance and the taper alive, especially in the elderly and the unreviewed users.",
      "The rebound script: 'The anxiety that comes back worse when you miss a dose is the medicine's withdrawal, not your original illness returning at full strength; the taper rebuilds your own braking as the dose comes down.'",
      "The chemist script: 'One family pharmacy with the doctor's written schedule; the chemist's convenience is how a two-week treatment becomes a twelve-year habit.'",
      "The alcohol script: 'The nerve tablet plus drinking is one of the most dangerous combinations in medicine; sedation stacks on sedation and breathing can fail; the two problems are treated together, deliberately.'",
      "The elderly script: 'Her age makes these tablets genuinely dangerous; falls, memory, confusion; the answer is a geriatric slow taper with a falls-protection plan, not a sudden stop and not the status quo.'",
    ],
  },
  decisionPath: {
    title: "The 'sleep and nerve tablets' consultation",
    nodes: [
      {
        id: "start",
        question: "The 'sleep and nerve tablets' consultation. First, which of the three users is in front of you?",
        branches: [
          { label: "Long-term therapeutic user: a doctor started it years ago, nobody reviewed", next: "quantify-gate" },
          { label: "Polysubstance user: alcohol or opioids on board", next: "poly-gate" },
          { label: "Recreational or counter-coping user: student, executive, nightlife", next: "counter-gate" },
          { label: "Z-drug reports of sleepwalking, sleep-eating, sleep-driving", next: "zdrug-stop" },
        ],
      },
      {
        id: "zdrug-stop",
        question: "The Z-drug stop-signal: complex sleep behaviour with amnesia.",
        recommendation: "STOP the agent immediately: no gradual debate, no dose arithmetic: sleep-driving is a fire hazard and the next event may be the fatal one. Substitute the CBT-I package, treat the underlying insomnia, and address the comorbid alcohol (the student pattern: over-the-counter zolpidem plus weekend alcohol).",
        reasoning: "The Z-drug signature is a stop-signal, not a taper problem: the one place in this illness where immediate cessation is the correct answer.",
      },
      {
        id: "quantify-gate",
        question: "The quantified history: agent, strength, daily count, years, chemist relationships; alcohol and opioids always.",
        branches: [
          { label: "Elderly, with falls or memory complaints", next: "elderly-path" },
          { label: "High-dose short-acting, past withdrawal seizure or delirium", next: "inpatient-gate" },
          { label: "Standard-dose, dependent, no red flags", next: "taper-gate" },
        ],
      },
      {
        id: "elderly-path",
        question: "The unreviewed-therapeutic elderly user: the deprescribing frame.",
        recommendation: "Geriatric caution: an even slower taper than usual, falls vigilance (the rails-lighting-footwear package), the alternative sleep programme, and the explicit conversation converting 'you are an addict' to 'this medicine has been quietly working against you at your age'. The family engaged as medicine-holders and fall-spotters from the first visit.",
        reasoning: "The elderly cascade (falls, fractures, confusion via slowed clearance) makes this the highest-harm per tablet population; the alliance-preserving words are what make the slow taper survivable.",
      },
      {
        id: "inpatient-gate",
        question: "The withdrawal-risk triage: high-dose short-acting, past seizure, past delirium.",
        recommendation: "Conversion first, then inpatient or intensive day-supervision taper: short-acting high-dose withdrawal carries the highest seizure risk, and a past withdrawal seizure or delirium is an inpatient criterion forever. Never an abrupt stop; never a home gamble through the peak window.",
        reasoning: "The peak window (days 2–7 short-acting, up to 2 weeks+ long-acting) is where sedative withdrawal kills like alcohol's. The ward exists for exactly this rung.",
      },
      {
        id: "poly-gate",
        question: "The polysubstance user: the lethal combinations.",
        branches: [
          { label: "Alcohol the dominant axis", next: "alcohol-led" },
          { label: "Opioid the dominant axis", next: "opioid-led" },
        ],
      },
      {
        id: "alcohol-led",
        question: "Alcohol-plus-benzo: stacked sedation, twin lethal withdrawals.",
        recommendation: "Stabilise the alcohol axis first with its own protocol: the two tapers coordinate, often one benzodiazepine schedule serving both, led by the alcohol programme; the overdose risk of the combination named to the family in one sentence: sedation stacks on sedation and breathing can fail.",
        reasoning: "The mortality question is combination; the alcohol-led taper also covers the benzodiazepine withdrawal because both run on the same receptor logic.",
      },
      {
        id: "opioid-led",
        question: "Opioid-plus-benzo: the overdose-multiplication profile.",
        recommendation: "The opioid programme holds (buprenorphine-maintained patients still need the benzo-taper architecture); the benzodiazepine taper coordinates with, never competes against, the maintenance, and the never-mix rule is taught as a survival instruction, not a preference.",
        reasoning: "The combination multiplies respiratory-depression risk; the coordinated taper removes the multiplier while each programme does its own work.",
      },
      {
        id: "counter-gate",
        question: "The recreational/counter-coping user: the exam-sleep student, the executive, the nightlife.",
        branches: [
          { label: "Daily use with withdrawal between doses", next: "taper-gate" },
          { label: "Occasional use, no dependence yet", next: "exit-script" },
        ],
      },
      {
        id: "taper-gate",
        question: "The conversion-and-taper gate: the five-step exit architecture.",
        recommendation: "CONVERT: the total daily load to diazepam equivalents (~0.5 mg alprazolam ≈ 10 mg diazepam, approximate and individualised). CHART: the written taper; ~10–25% of the starting dose every 1–2 weeks, a 6–12-week schedule in dependent long-term users, slower near the end, with dates and hold-rules on one page. COVER: carbamazepine-type or propranolol-class adjuncts in selected cases; comorbid alcohol treated with its own protocol, the tapers coordinated. REBUILD: the CBT-I package plus the underlying disorder treated properly (SSRIs for panic and GAD with the honest weeks-warning; trauma treatment where PTSD drove the prescription). SUPERVISE: weekly-to-fortnightly reviews, family-held medicines, one named pharmacy, the bad-week plan; hold the dose, do not escalate, call.",
        reasoning: "The five steps exist because each failure mode has its own guard: the wrong arithmetic (conversion), the patient's anxiety (the chart), the danger window (cover), the relapse engine (rebuild), and the chemist (supervision).",
      },
      {
        id: "exit-script",
        question: "The prescribing discipline going forward: the prevention prescription.",
        recommendation: "Short courses with stop-dates written on the prescription itself (2–4 weeks for insomnia); non-drug insomnia care first-line; SSRIs for anxiety disorders as the long-term tool; one pharmacy, one prescriber, documented quantities; never repeat sedatives on phone requests; H1-schedule recording for monitored agents; the elderly stop-list enforced: benzodiazepines on the anticholinergic-plus-sedative burden list.",
        reasoning: "Enforcement is thin; prescription discipline by the profession is the real regulation, and the chemist-facing written schedule is the system fix that closes the tap.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Advising abrupt cessation of a long-term benzodiazepine",
      why: "Sedative withdrawal carries alcohol-like medical danger: seizures and delirium; and 'just stop' fails by design, because the rebound reproduces the original complaint amplified.",
      correction: "Never abrupt at high dose: conversion to diazepam equivalents first, then the written taper; the cardinal difference from most drugs of misuse.",
    },
    {
      mistake: "Planning the taper before taking the alcohol and opioid history",
      why: "The mortality question is combination: stacked sedation is the dominant overdose mechanism, and the missed co-use re-orders the entire plan.",
      correction: "The poly-substance history is mandatory at every assessment: alcohol always, opioids always, other sedatives always; then the tapers coordinate, the most dangerous axis stabilised first.",
    },
    {
      mistake: "Prescribing a second benzodiazepine to taper the first, without conversion arithmetic",
      why: "Two agents on board without equivalence arithmetic means the true dose is unknown and the taper is fiction: the commonest prescription-pad error in this illness.",
      correction: "One conversion, one agent: the total daily load to diazepam equivalents (~0.5 mg alprazolam ≈ 10 mg diazepam), then the single written chart.",
    },
    {
      mistake: "Labelling the unreviewed-therapeutic user an 'addict'",
      why: "The patient who took exactly what was prescribed loses the alliance at the first word of blame, and without the alliance there is no taper.",
      correction: "The deprescribing frame: 'this medicine has been quietly working against you'; different words, same taper architecture; the elderly version with falls vigilance and the even slower schedule.",
    },
    {
      mistake: "Continuing night sedatives in the elderly because 'she sleeps well on them'",
      why: "The sleep is borrowed against the falls-fracture-confusion cascade: slowed clearance turning a sleeping aid into one of the most dangerous regular medicines of old age.",
      correction: "The geriatric stop-list answer: an even slower taper, the falls package, the alternative sleep programme; the deprescribing conversation held kindly, with the family.",
    },
    {
      mistake: "Tapering the Z-drug after a complex sleep behaviour",
      why: "Sleepwalking, sleep-eating and sleep-driving with amnesia are a stop signal: the gradual-debate habit wastes the window before the next event, and the next event may be a car.",
      correction: "Stop the agent immediately; substitute the CBT-I package; treat the underlying insomnia; address the comorbid alcohol.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The borrowed-brake mechanism: GABA-A enhancement, receptor down-regulation, tolerance, rebound; why withdrawal reproduces the original complaint amplified.",
        "The kindling concept applied to sedatives: why every previous withdrawal episode worsens the next, and why past withdrawal seizures make every future taper an inpatient conversation.",
        "Inpatient criteria for sedative withdrawal: high dose, short-acting agent, past seizures or delirium, comorbid alcohol or opioid use, no home support.",
        "CBT-I as the first-line insomnia treatment: the sleep programme the tablets were substituting for.",
        "Benzodiazepines on the elderly deprescribing stop-list: the falls-fracture-confusion cascade; and the H1-schedule recording requirement for monitored agents.",
      ],
      practical: [
        "Take the quantified sedative history: which agent, what strength, how many per day, years of use, chemist relationships; plus alcohol and opioids, always.",
        "The morning exam in the suspected dependent user: tremor, sweating, pupils, cognition, gait and falls history in the elderly.",
      ],
      longAnswer: [
        "A 58-year-old widow on alprazolam 0.5 mg nightly for twelve years presents with 'memory weakness and falls': assessment and management; the evergreen Indian essay.",
        "Benzodiazepine dependence: mechanisms, withdrawal management and the prescribing-discipline package for insomnia and anxiety.",
      ],
    },
    neetPg: {
      highYield: [
        "THE LETHAL WITHDRAWAL: benzodiazepine withdrawal can kill like alcohol's; seizures and delirium the medical emergencies; never abrupt cessation at high dose.",
        "THE EQUIVALENCE: 0.5 mg alprazolam ≈ 10 mg diazepam: approximate, individualised, and the conversion question's favourite arithmetic.",
        "THE HALF-LIFE TRAP: short-acting agents (alprazolam, lorazepam, zolpidem) = inter-dose withdrawal and harder dependence; long-acting (diazepam, clonazepam) self-taper: the conversion logic.",
        "THE TAPER NUMBERS: ~10–25% of the starting dose every 1–2 weeks; a 6–12-week schedule typical in dependent long-term users; slower near the end.",
        "THE MNEMONIC: Convert–Chart–Cover–Rebuild–Supervise; the five-step exit architecture.",
        "THE DANGERS: Seizure-Stack-Seniors; withdrawal seizures, the alcohol/opioid overdose stack, the elderly cascade.",
        "THE Z-DRUG RULE: complex sleep behaviours (sleepwalking, sleep-eating, sleep-driving with amnesia) mean stop the drug immediately, not a taper.",
        "THE ELDERLY CASCADE: sedation → fall → fracture → confusion; benzodiazepines on the older-adult avoid-list (Beers-lineage).",
        "THE PRESCRIBING CEILING: 2–4 weeks for insomnia, stop-dates on the prescription itself; one pharmacy; never phone repeats; H1-schedule recording.",
        "THE INDIAN FIGURE: sedative/hypnotic misuse around 1% of adults (2019 national survey lineage), higher among urban males; undercounting the unreviewed-therapeutic users.",
        "THE FIRST LINE: CBT-I for insomnia before any hypnotic; SSRIs for panic and GAD as the long-term anxiety tool.",
        "THE OVERDOSE MECHANISM: stacked sedation with alcohol or opioids = respiratory depression; the dominant lethal combination.",
      ],
      pyqConcepts: [
        "The conversion-to-diazepam logic: why the long-acting agent's self-tapering pharmacokinetics enables the stepwise reduction.",
        "Rebound insomnia and anxiety versus the underlying disorder's recurrence: the exam's favourite distinction.",
        "Anterograde amnesia from benzodiazepines and Z-drugs: the filing failure and the complex sleep behaviours.",
        "Chemist-driven dependence as the Indian structural-driver short note.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 58-year-old widow presents with 'memory weakness and falls': twelve years of alprazolam 0.5 mg nightly, started after her husband's death, repeated by the neighbourhood chemist for a decade, doubled by herself over the last year 'because it stopped working': morning tremor and near-falls on examination, the daughter confirming the chemist relationship. The expected answer: sedative dependence of the unreviewed-therapeutic type with tolerance-driven escalation; conversion to diazepam 10 mg equivalents, a written 10-week taper chart with dates and hold-rules, the daughter holding the medicines, the geriatric falls package, the sleep-hygiene rebuild (fixed wake time, evening walk, caffeine discipline), and the honest expectation that the memory complaints and the falls are treatment targets, not ageing. The trap answers: the abrupt stop ('she only takes one'); the addict label; continuing 'because she sleeps well on them'.",
        "A 21-year-old engineering student is brought from the hostel after being found in the kitchen at 3 a.m. Raw food eaten, a lacerated foot, total amnesia for the event; the roommate reports nightly over-the-counter zolpidem for exam sleep plus weekend alcohol. The expected answer: a Z-drug complex sleep behaviour; the stop-signal presentation: zolpidem stopped immediately (not tapered, not halved, not switched), the alcohol addressed with brief intervention, sleep rebuilt with CBT-I habits and exam-period scheduling changes. The trap answers: 'sleepwalking, observe and review'; a switch to another Z-drug or a benzodiazepine; a new hypnotic prescription without the sleep programme.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Benzodiazepine withdrawal can kill: seizures and delirium, like alcohol's.",
        "0.5 mg alprazolam ≈ 10 mg diazepam: the conversion arithmetic.",
        "Short-acting agents (alprazolam, lorazepam, zolpidem) = harder dependence; convert to long-acting before tapering.",
        "Complex sleep behaviours (sleep-driving) = stop the Z-drug immediately.",
        "CBT-I first-line for insomnia; benzodiazepines on the elderly stop-list.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The deprescribing frame for the unreviewed-therapeutic user: different words, same taper architecture; 'you are an addict' loses the alliance and with it the taper.",
        "The written chart converts anxiety into arithmetic: dates, doses and hold-rules on one page, held by the family with the medicines; the hold-rule for bad weeks (hold the dose, do not escalate, call) is the taper's shock absorber.",
        "The last milligrams carry the most fear: slow the tail of the taper; the schedule serves the receptor system's re-learning, not the calendar's vanity.",
        "The two tapers coordinate: comorbid alcohol dependence is often served by one benzodiazepine schedule led by the alcohol programme; buprenorphine-maintained patients still need the benzo-taper architecture.",
        "The prescription pad is the pusher, prescribing discipline as the real regulation in a thin-enforcement system: stop-dates on the prescription itself, one pharmacy, no phone repeats, H1 recording.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The twelve-year sleeper",
      presentation: "A widow's nightly tablet (started for grief, repeated by the chemist for a decade, doubled by herself) arriving as 'memory weakness and falls'.",
      initialPresentation: "A 58-year-old widow was brought to the OPD by her daughter with one year of 'memory weakness' and two recent falls. She had taken alprazolam 0.5 mg nightly for twelve years: first prescribed after her husband's death, repeated by the neighbourhood chemist for a decade without any review, and doubled by herself over the last year 'because it stopped working'.",
      history: "The bereavement-start: the original prescription followed her husband's death and was never formally reviewed; the daughter confirming the chemist relationship and the dose-creep; no alcohol, no opioids, no other sedatives; the morning anxiety and irritability attributed by the family to 'nerves'.",
      examination: "Morning tremor with mild sweating; unsteady gait with near-falls on the turns; the cognitive screen showing the memory complaints short of a dementia; the inter-dose withdrawal picture visible before the first question was answered.",
      diagnosis: "Sedative dependence (alprazolam), the unreviewed-therapeutic type, with tolerance-driven dose escalation: the memory complaints and the falls being the long-term sedative user's treatment targets, not ageing.",
      management: "Conversion to diazepam 10 mg equivalents; a written 10-week taper chart with dates and hold-rules; the family-held medicines (the daughter holding the box); the geriatric falls package; the sleep-hygiene rebuild: fixed wake time, evening walk, caffeine discipline.",
      outcome: "By week 8 she slept five uninterrupted hours drug-free; at 6 months, no falls; the memory complaints partially resolved: the 'weak mind' recovering as the tablet left.",
      teachingPoints: [
        "Bereavement-start, chemist-continued dependence is the Indian archetype: the honest prescription that nobody reviewed for a decade.",
        "'It stopped working' is tolerance's voice, and the self-doubling that follows is the dose-creep the taper must convert.",
        "The taper is written, slow and family-supervised. The chart and the held box are the resource-poor treatment's centre of gravity.",
        "The memory and falls of the elderly sedative user are treatment targets, not ageing. The deprescribing conversation ('this medicine has been quietly working against you') keeps the alliance.",
      ],
    },
    {
      title: "The blank night",
      presentation: "Found in the hostel kitchen at 3 a.m. eating raw food, a cut foot, and no memory of any of it: the Z-drug's signature night.",
      initialPresentation: "A 21-year-old engineering student was brought to casualty after being found 'sleepwalking' into the hostel kitchen, having eaten raw food and cut his foot, with total amnesia for the event. His roommate revealed nightly zolpidem (bought over the counter for exam-sleep) plus weekend alcohol.",
      history: "Two semesters of exam-period sleep onset trouble; zolpidem obtained directly from the medical store without a prescription; weekend alcohol; no other substances; no prior psychiatric history.",
      examination: "Alert and oriented between the amnesia blank-spots; the lacerated foot dressed; no withdrawal signs; the roommate's account the only honest history in the room.",
      diagnosis: "Z-drug (zolpidem) complex sleep behaviour with anterograde amnesia: a stop-signal presentation, with the weekend alcohol as the multiplier.",
      management: "Zolpidem stopped immediately: a complex sleep behaviour is a stop, not a taper; the alcohol addressed with brief intervention; sleep rebuilt with CBT-I habits and exam-period scheduling changes.",
      outcome: "No recurrence at 4-month follow-up: the amnesia blank-spots gone with the tablet, the sleep held by the programme.",
      teachingPoints: [
        "Complex sleep behaviours are the Z-drug signature and a stop signal: stop-now, not taper, not dose-debate.",
        "Over-the-counter access plus weekend alcohol is the student pattern: the counter-coping user group.",
        "The prescription was sleep architecture, not a sedative substitute. CBT-I habits and exam-period scheduling.",
        "The amnesia blank-spots are often dismissed as 'stress' until a car or a kitchen fire tells the truth: the family's report outranks the user's memory of the event.",
      ],
    },
  ],
  clinicalPearls: [
    "Benzodiazepine withdrawal can kill like alcohol's: seizures and delirium: the cardinal difference from most drugs of misuse, and the reason 'just stop' is never the advice.",
    "The borrowed brake: GABA-A enhancement, receptor down-regulation, tolerance, and a withdrawal that reproduces the original complaint, amplified.",
    "0.5 mg alprazolam ≈ 10 mg diazepam: the exam equivalence and the conversion's first arithmetic.",
    "Short-acting means harder: alprazolam, lorazepam and zolpidem create inter-dose withdrawal; morning anxiety, 4 a.m. waking, the clock-driven next dose; diazepam and clonazepam self-taper.",
    "Convert–Chart–Cover–Rebuild–Supervise: the five-step exit architecture.",
    "Seizure-Stack-Seniors: withdrawal seizures, the alcohol/opioid overdose stack, the elderly cascade.",
    "10–25% of the starting dose every 1–2 weeks, a 6–12-week schedule, slower at the end. The taper's honest arithmetic, written with dates and hold-rules.",
    "Complex sleep behaviours (sleepwalking, sleep-eating, sleep-driving with amnesia) are a stop signal, not a taper.",
    "The elderly cascade: falls → fracture → confusion; benzodiazepines among the most dangerous regular medicines of old age, and on the stop-list.",
    "2–4 weeks for insomnia, the stop-date written on the prescription itself; never repeat sedatives on phone requests; H1-schedule recording where the agent is monitored.",
    "Around 1% of Indian adults: sedative/hypnotic misuse in the 2019 national survey lineage, undercounting the unreviewed-therapeutic users who never enter addiction statistics.",
    "CBT-I first for insomnia, SSRIs for panic and GAD: treating the disorder the tablets were borrowed for is the exit prescription.",
    "The chemist must not be the taper's author, one named pharmacy, the family-held box, the written schedule the chemist can respect.",
  ],
  highYieldSummary: [
    "Definition: benzodiazepine misuse and dependence is the dependence-forming, withdrawal-dangerous end of the 'sleeping and nerve tablet' story; alprazolam, diazepam, clonazepam, lorazepam and the zolpidem-type Z-drugs, prescribed honestly for anxiety and insomnia, then sold without prescription, then taken for years at doses their prescribers never knew about. The withdrawal can seizure and kill like alcohol's; the misuse hides behind legitimate prescriptions; and the treatment is a slow, planned, written taper plus treating the sleep, anxiety or grief the tablets were borrowed for.",
    "Epidemiology: among the most prescribed psychotropics worldwide, with long-term use beyond the recommended 2–4 weeks the rule rather than the exception in real-world data; with opioids driving a large share of overdose deaths, with alcohol deepening the relapse cycle. India: sedative/hypnotic misuse around 1% of adults (2019 national survey lineage), higher among urban males, undercounting the unreviewed-therapeutic users behind lakhs of OPD 'insomnia' and 'tension' complaints; alprazolam dominating misuse presentations; the Z-drug wave growing with private-prescription culture.",
    "Mechanism: the borrowed brake (GABA-A enhancement → receptor down-regulation → tolerance → the rebound that reproduces the original complaint amplified); the half-life trap (short-acting agents leave in hours, inter-dose withdrawal, clock-driven dosing, harder dependence; long-acting agents self-taper: the conversion logic); the amnesia lane (anterograde amnesia, the filing failure; the Z-drugs' complex sleep behaviours: sleepwalking, sleep-eating, sleep-driving; a stop signal, not a taper).",
    "Clinical: three Indian user groups (long-term therapeutic users (started by a doctor, never reviewed) the deprescribing frame, not the addiction label), polysubstance users (alcohol-plus-benzo, opioid-plus-benzo, the lethal combinations; the poly-substance history mandatory), recreational/counter-coping users (students, executives, nightlife). Withdrawal ladder: early days 1–3 (anxiety, insomnia, restlessness, sweating, tremor, perceptual distortion, muscle cramps); peak days 2–7 short-acting / up to 2 weeks+ long-acting (seizures the medical emergency, severe insomnia, depersonalisation, paranoia; withdrawal delirium and psychosis at the extreme); the weeks-to-months rebound tail (the PAWS analogue, the subjective engine of relapse).",
    "Diagnosis: the quantified history (agent, strength, daily count, years, chemist relationships, alcohol and opioids always); the morning exam (tremor, sweating, pupils, cognition, gait and falls in the elderly); the underlying-disorder interview (insomnia, panic, grief, trauma, night-shift sleep, the exit prescription's target); the severity triage (dose, duration, half-life, comorbidity, past withdrawal seizures or delirium, the inpatient candidacy).",
    "Management, Convert–Chart–Cover–Rebuild–Supervise: convert the total daily load to diazepam equivalents (~0.5 mg alprazolam ≈ 10 mg diazepam, approximate, individualised); chart the written taper (~10–25% of the starting dose every 1–2 weeks, 6–12-week typical schedule, slower near the end, with dates and hold-rules); cover the danger window (carbamazepine-type anticonvulsants, propranolol-class adjuncts in selected cases; the comorbid alcohol protocol coordinated); rebuild sleep and anxiety without sedatives (the CBT-I package, relaxation training, SSRIs for panic/GAD with the honest weeks-warning, trauma treatment where PTSD drove the prescription); supervise (weekly-to-fortnightly reviews, family-held medicines, one pharmacy, the bad-week plan). Special frames: elderly deprescribing with falls vigilance; alprazolam-high-dose = conversion then inpatient; polysubstance stabilising the most dangerous axis first; Z-drug complex behaviour = stop immediately; pregnancy never-abrupt with specialist coordination.",
    "Prevention and the Indian tier: the prescribing-discipline package; 2–4-week ceilings with stop-dates on the prescription itself, non-drug insomnia care first-line, one pharmacy and one prescriber, never phone repeats, H1-schedule recording, the elderly stop-list; the chemist replaced by the written doctor schedule and the family-held box; the taper kit (diazepam, carbamazepine, propranolol, an SSRI) costing under a few hundred rupees a month in generics (approx 2026), the scarce commodities being the review visits and the written schedule; the sentence to carry into every exam: benzodiazepine dependence is the diagnosis where the prescription pad is the pusher. Treat by converting, charting, and slowly giving the brain its own brake back.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "benzo-quiz-1",
      question: "Within weeks of nightly alprazolam, the same dose stops working. The mechanism:",
      options: ["The tablet weakens on the shelf", "GABA-A receptor down-regulation — the brain stops pressing its own brake", "Liver enzyme induction destroying the drug", "Dopamine receptor up-regulation"],
      correctIndex: 1,
      explanation: "The borrowed brake: weeks of external GABA-A enhancement drive receptor down-regulation — tolerance; stopping then leaves the brake gone with the pedal weak: rebound.",
      afterSectionId: "mechanism",
    },
    {
      id: "benzo-quiz-2",
      question: "The danger window for withdrawal from a short-acting benzodiazepine, and its emergency:",
      options: ["Days 2–7; seizures", "Hours 0–6; serotonin syndrome", "Weeks 6–8; weight gain", "Months 3–6; neuroleptic malignant syndrome"],
      correctIndex: 0,
      explanation: "Early signs days 1–3; the short-acting peak days 2–7 (long-acting up to 2 weeks+) — seizures the medical emergency, withdrawal delirium and psychosis the extreme rung.",
      afterSectionId: "timeline",
    },
    {
      id: "benzo-quiz-3",
      question: "The conversion arithmetic every exam expects, for a patient on alprazolam 0.5 mg:",
      options: ["≈ 5 mg diazepam", "≈ 10 mg diazepam", "≈ 20 mg diazepam", "≈ 100 mg diazepam"],
      correctIndex: 1,
      explanation: "0.5 mg alprazolam ≈ 10 mg diazepam — approximate and individualised; transfer the total daily load, then walk it down on the written chart.",
      afterSectionId: "management",
    },
    {
      id: "benzo-quiz-4",
      question: "A zolpidem user's family reports sleepwalking into the kitchen with total amnesia. The correct action:",
      options: ["Halve the dose and review in a month", "Stop the Z-drug — complex sleep behaviours are a stop signal", "Switch the night dose to alprazolam", "Add a second hypnotic for deeper sleep"],
      correctIndex: 1,
      explanation: "Sleep-driving, sleep-eating and sleepwalking with amnesia mean discontinuation, not titration — stop immediately, substitute the CBT-I package, treat the underlying insomnia.",
      afterSectionId: "differential",
    },
    {
      id: "benzo-quiz-5",
      question: "In the elderly long-term benzodiazepine user, the cascade to prevent is:",
      options: ["Insomnia → psychosis → hospitalisation", "Sedation → fall → fracture → confusion", "Weight loss → hyperthyroidism", "Tremor → Parkinson's disease"],
      correctIndex: 1,
      explanation: "Slowed clearance plus sedation equals the geriatric fracture-and-delirium cascade — the reason benzodiazepines sit on the deprescribing stop-list; the elderly taper is slower still, never abrupt.",
      afterSectionId: "symptoms",
    },
    {
      id: "benzo-quiz-6",
      question: "The evidence-based first-line treatment for chronic insomnia:",
      options: ["Lifelong nightly zolpidem", "Cognitive behavioural therapy for insomnia (CBT-I) with the sleep-hygiene architecture", "Long-acting diazepam nightly", "Over-the-counter antihistamines long-term"],
      correctIndex: 1,
      explanation: "Non-drug treatment first — short courses with stop-dates only if drugs are needed at all; the rebuild step of the exit architecture.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Why does short-acting alprazolam produce harder dependence than diazepam?", answer: "THE HALF-LIFE TRAP: alprazolam leaves the body in hours, so the dependent brain runs a mini-withdrawal between doses; morning anxiety, 4 a.m. waking, and the clock-driven next dose: a daily negative-reinforcement cycle that cements dependence faster and deeper. Diazepam's long half-life self-tapers a little every day, smoothing the curve, which is also why it is the conversion target: transfer the total daily load to diazepam equivalents (~0.5 mg alprazolam ≈ 10 mg diazepam), then walk the dose down slowly so the receptor system re-learns its own braking over weeks, not overnight. THE CLINICAL FOOTPRINT: alprazolam dominates Indian misuse presentations, and high-dose short-acting withdrawal carries the highest seizure risk; conversion first, then inpatient or intensive day-supervision where the load is high.", topic: "Mechanism" },
    { question: "The withdrawal danger signs that change a taper to an inpatient programme.", answer: "THE TRIAGE LIST: (1) a past withdrawal seizure or withdrawal delirium; an inpatient criterion forever; (2) high-dose short-acting dependence, alprazolam above all: the highest seizure-risk profile; (3) comorbid alcohol or opioid dependence: the mortality question is combination, and the axes must coordinate; (4) no home support. The family-held box has no family to hold it; (5) the extreme rungs themselves: seizures (the medical emergency), withdrawal delirium, paranoia, psychosis. THE TIMING: short-acting agents peak days 2–7, long-acting up to 2 weeks+; the window the ward must cover. Never an abrupt stop; always conversion first, then the setting decision.", topic: "Clinical practice" },
    { question: "Recite the conversion-and-taper architecture in five steps.", answer: "CONVERT–CHART–COVER–REBUILD–SUPERVISE. CONVERT: transfer the total daily load to diazepam equivalents (~0.5 mg alprazolam ≈ 10 mg diazepam, approximate and individualised): the long-acting agent's self-tapering pharmacokinetics is the whole point. CHART: write the taper; ~10–25% of the starting dose every 1–2 weeks, slower near the end (the last milligrams carry the most fear), a 6–12-week schedule typical in dependent long-term users, with dates and hold-rules on one page. COVER: carbamazepine-type anticonvulsants or propranolol-class adjuncts in selected cases; comorbid alcohol dependence treated with its own protocol, the tapers coordinated: often one benzodiazepine schedule serving both. REBUILD: the CBT-I package (stimulus control, sleep-window compression, caffeine discipline, fixed wake time), relaxation training, SSRIs for panic and GAD with the honest warning that they take weeks; bridge only as planned; trauma treatment where PTSD drove the original prescription. SUPERVISE: weekly-to-fortnightly reviews with the written chart, the family holding the medicines, one named pharmacy, and the pre-written bad-week plan: hold the dose, do not escalate, call.", topic: "Management" },
    { question: "The rebound principle: why does withdrawal reproduce the original complaint amplified?", answer: "THE ARITHMETIC OF THE BORROWED BRAKE: weeks of externally pressed GABA-A braking make the brain down-regulate its own receptor machinery; tolerance; stop the tablets and the brake is gone with the pedal weak, so the arousal system runs unbraked: anxiety worse than the original, sleeplessness worse than the original, plus the physical storm of sweating, tremor, perceptual distortion and, at the extreme, seizures. THE CLINICAL CONSEQUENCES: (1) 'just stop' advice fails by design; the patient who started for insomnia cannot sleep at all without the tablet, so self-treatment relapses; (2) the weeks-to-months rebound waves are the relapse engine (the PAWS analogue); (3) the honest reassurance that carries the taper: the returning anxiety is the medicine's withdrawal, not the original illness at full strength; the taper rebuilds the brain's own braking as the dose comes down.", topic: "Mechanism" },
    { question: "The three Indian user groups and each one's treatment frame.", answer: "(1) THE LONG-TERM THERAPEUTIC USER: started by a doctor years ago and never reviewed, the chemist continuing what the prescription began: the DEPRESCRIBING frame, not the addiction label ('this medicine has been quietly working against you', the alliance-preserving words), the same taper architecture underneath; the elderly version with falls vigilance and an even slower taper. (2) THE POLYSUBSTANCE USER: alcohol-plus-benzo or opioid-plus-benzo, the lethal combinations: stabilise the most dangerous axis first (usually the alcohol or the opioid), the benzodiazepine taper coordinating with, not competing against, those programmes; buprenorphine-maintained patients still need the benzo-taper architecture. (3) THE RECREATIONAL/COUNTER-COPING USER: students, executives, nightlife: the exam-sleep zolpidem, the weekend alcohol; engage without moralising, screen for the disorder being self-treated, brief intervention where the use is not yet dependent, the full architecture where it is.", topic: "Indian practice" },
    { question: "The Z-drug stop-sign and why it means stop-now, not taper.", answer: "THE SIGNATURE: complex sleep behaviours (sleepwalking, sleep-eating, sleep-driving, with total amnesia afterwards) the Z-drugs' paradoxical half-awake states, often dismissed as 'stress' until a car or a kitchen fire tells the truth. THE RULE: stop the agent immediately (no gradual debate, no taper arithmetic) because sleep-driving is a fire hazard and the next event may be the fatal one; the regulatory lineage (FDA/EMA) raised it to boxed-warning level. WHAT HAPPENS INSTEAD: substitute the CBT-I package and treat the underlying insomnia. The prescription is sleep architecture, not a sedative substitute; the comorbid alcohol addressed (the student pattern: over-the-counter zolpidem plus weekend alcohol multiplying the risk).", topic: "Clinical practice" },
    { question: "The elderly benzodiazepine cascade: falls → fracture → confusion; mechanism in one sentence.", answer: "ONE SENTENCE: slowed clearance plus sedation plus the amnesia lane means the sleeping tablet makes the old person fall in the night, the fall breaks the hip (or the head), and the fracture's surgery-and-pain season arrives as delirium; sedation → fall → fracture → confusion, the cascade that puts benzodiazepines on the geriatric stop-list (the Beers lineage). THE MANAGEMENT FOOTNOTE: none of this means abrupt cessation. The elderly taper is even slower, with the falls package (rails, lighting, footwear), the alternative sleep programme, and the deprescribing conversation that keeps the alliance: 'this medicine has been quietly working against you at your age'.", topic: "Clinical practice" },
    { question: "Write the prescribing-discipline package for insomnia and anxiety.", answer: "FOR INSOMNIA: non-drug care first-line (the CBT-I package); where a hypnotic is truly needed, a short course with the stop-date written on the prescription itself: 2–4 weeks the ceiling; no automatic repeats. FOR ANXIETY: SSRIs as the long-term tool, the weeks-latency warning given at initiation so the bridge is planned, not improvised. THE SUPPLY DISCIPLINE: one pharmacy, one prescriber, documented quantities; never repeat sedatives on phone requests; the H1-schedule recording discipline for monitored agents (alprazolam among them); the elderly prescription rule: benzodiazepines on the anticholinergic-plus-sedative burden stop-list. THE INDIAN FOOTNOTE: enforcement of the schedules is thin; prescription discipline by the profession is the real regulation, and the chemist-facing written schedule (a taper chart a chemist can respect) is the system fix that closes the tap.", topic: "Management" },
  ],
  faqs: [
    { question: "Are these tablets addictive even if a doctor started them?", answer: "Yes: the brain adapts to them the same way whether the start was honest or not. That is not your fault; it is the medicine's nature. The treatment is a slow, planned, written taper, not a sudden stop." },
    { question: "Can I just stop, since I only take one a day?", answer: "Not abruptly, and not without a plan: stopping cold after long use can cause seizures in some people. One tablet a day for years is still dependence. A written taper over weeks is the safe road." },
    { question: "Why does my anxiety come back worse when I miss a dose?", answer: "That is rebound: the brain's own braking is temporarily weak. It is the medicine's withdrawal, not your original illness returning at full strength: the taper rebuilds your own braking as the dose comes down." },
    { question: "The chemist gives them without asking. Is that legal?", answer: "No: they are prescription-only medicines. The chemist's convenience is how a two-week treatment becomes a twelve-year habit; one family pharmacy with your doctor's written schedule closes that door." },
    { question: "My mother is 80 and has taken them for years. Should we stop them now?", answer: "Not suddenly, but her age makes the tablets genuinely dangerous: falls, memory, confusion. A geriatric slow taper with a falls-protection plan is usually right, done with her doctor." },
    { question: "Are the Z-drugs safer than the old tablets?", answer: "They are different, not safer for dependence, and they carry the strange risk of sleepwalking with no memory, including sleep-driving. Any such event means stopping the medicine immediately." },
    { question: "I need something for sleep: what is the safe answer?", answer: "The sleep programme itself is the treatment: fixed wake time, bed only for sleep, no caffeine after noon, an evening walk, a relaxation routine. Medicines, if needed at all, are short courses with a stop-date written from day one." },
    { question: "Can he take his 'nerve tablet' along with his drinking?", answer: "That combination is one of the most dangerous in medicine: sedation stacks on sedation and breathing can fail. The two problems are treated together, deliberately, never layered at home." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the sedative/hypnotic use disorder framing, updated beyond the source chapter" },
      { source: "NICE-lineage guidance on hypnotic prescribing and benzodiazepine withdrawal schedules — paraphrased principles" },
      { source: "FDA/EMA regulatory warnings on Z-drug complex sleep behaviours — the stop-immediately rule (boxed-warning lineage)" },
      { source: "American Geriatrics Society Beers Criteria lineage — benzodiazepines on the older-adult avoid-list (falls, cognition)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.4 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Bélanger L, Morin CM et al. and the CBT-I trial literature — non-drug insomnia treatment as first line" },
      { source: "Murphy SM et al. and the adjunct-medication trials — carbamazepine and propranolol for benzodiazepine taper support" },
    ],
    reviews: [
      { source: "Ashton H — the classic benzodiazepine withdrawal monograph and equivalent-dose conversion tables (the taper architecture's ancestor)" },
      { source: "Lader M et al. — long-term use, dependence risk and the deprescribing evidence" },
      { source: "Sedative withdrawal inpatient-criteria literature — seizure and delirium risk predictors" },
      { source: "Prescribing-discipline literature — stop-dates, single-pharmacy arrangements; the Indian structural argument" },
      { source: "Magnitude of Substance Use in India (2019) — sedative misuse prevalence; pharmacy-access dispensing audits" },
    ],
    patientResources: [
      { source: "The written taper chart and the family-held medicine box — the two instruments this course hands to every Indian benzo family" },
      { source: "Tele-MANAS 14416 (24×7, free) — the distress and craving channel; the district de-addiction centre as the complicated-taper channel" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: why the tablets stop working, why stopping suddenly is dangerous, the written-taper exit, the family's role.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The borrowed brake, the half-life trap, the withdrawal ladder, the conversion arithmetic, the prescribing ceiling.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything: the five-step exit architecture, the special frames, the prevention prescription, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The borrowed calm, the three user groups, the withdrawal that kills.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state why this withdrawal is alcohol's twin and name the three Indian user groups cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The borrowed brake, the half-life trap, the amnesia lane.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain tolerance, rebound and why the conversion to a long-acting agent works." },
    { number: 3, title: "Clinical Practice", description: "The quantified history, the withdrawal ladder, the five-step exit architecture.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can convert a patient to diazepam equivalents and write the chart with dates and hold-rules." },
    { number: 4, title: "Indian Context", description: "The chemist as prescriber, the disguises, the family-held box, the prescribing discipline.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the 'sleep and nerve tablets' consultation from screen to exit script." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the twelve-year-tablet essay cold and recite the equivalence without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.4 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Ashton H — the classic benzodiazepine withdrawal monograph and equivalent-dose conversion tables (the taper architecture's ancestor; paraphrased)", sourceType: "review", year: "1994 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Lader M et al. — long-term use, dependence risk and the deprescribing evidence", sourceType: "review", year: "1970s–2010s", dateReviewed: "2026-09-29" },
    { id: "S4", source: "NICE-lineage guidance on hypnotic prescribing and benzodiazepine withdrawal schedules — the prescribing-discipline and taper principles (paraphrased)", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "BMJ / American Geriatrics Society Beers Criteria lineage — benzodiazepines on the older-adult avoid-list (falls, cognition, delirium)", sourceType: "guideline", year: "1991 onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "FDA/EMA regulatory warnings on Z-drug complex sleep behaviours — the stop-immediately rule (boxed-warning lineage)", sourceType: "government", year: "2014–2019", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Bélanger L, Morin CM et al. and the CBT-I trial literature — non-drug insomnia treatment as first line", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Sedative withdrawal inpatient-criteria literature — seizure and delirium risk predictors", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Magnitude of Substance Use in India (2019) — sedative misuse prevalence figures; pharmacy-access dispensing audits", sourceType: "government", year: "2019", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Murphy SM et al. and the adjunct-medication trials — carbamazepine and propranolol for benzodiazepine taper support", sourceType: "trial", year: "1980s–1990s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Prescribing-discipline literature — stop-dates, single-pharmacy arrangements; the prevention framing for the Indian structural argument", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The borrowed-brake mechanism: GABA-A enhancement (the tablet-amplified inhibitory signal), receptor down-regulation with weeks of exposure, tolerance, and a withdrawal rebound that reproduces the original complaint amplified; anxiety worse than the original, insomnia worse than the original.", grade: "established", sources: ["S1", "S2"] },
    { text: "The half-life trap: short-acting agents (alprazolam, lorazepam, zolpidem) leave the body in hours, producing inter-dose withdrawal; morning anxiety, 4 a.m. waking, clock-driven dosing, and faster, harder dependence; long-acting agents (diazepam, clonazepam) self-taper a little every day, the logic of the conversion step.", grade: "established", sources: ["S1", "S2"] },
    { text: "The withdrawal severity ladder: early days 1–3 (anxiety, insomnia, restlessness, sweating, tremor, perceptual distortion, muscle cramps); peak days 2–7 short-acting / up to 2 weeks+ long-acting: seizures the medical emergency, withdrawal delirium and psychosis at the extreme; the weeks-to-months rebound tail (the PAWS analogue).", grade: "established", sources: ["S1", "S2", "S8"] },
    { text: "The amnesia lane: anterograde amnesia from interference with new-memory filing; the Z-drug complex sleep behaviours (sleepwalking, sleep-eating, sleep-driving with amnesia) carrying the stop-immediately rule (regulatory boxed-warning lineage).", grade: "established", sources: ["S1", "S6"] },
    { text: "The conversion-and-taper architecture: transfer the total daily load to diazepam equivalents (~0.5 mg alprazolam ≈ 10 mg diazepam, approximate and individualised); reduce ~10–25% of the starting dose every 1–2 weeks, slower near the end; a 6–12-week schedule typical in dependent long-term users; written with dates and hold-rules, the family holding the medicines.", grade: "established", sources: ["S2", "S4"] },
    { text: "The adjunct cover tier: carbamazepine-type anticonvulsants or propranolol-class adjuncts in selected cases for seizure cover and symptom relief; comorbid alcohol dependence treated with its own protocol, the tapers coordinated: often one benzodiazepine schedule serving both, led by the alcohol programme.", grade: "supported", sources: ["S10"] },
    { text: "The rebuild step: CBT-I (stimulus control, sleep-window compression, caffeine discipline, fixed wake time) as the first-line non-drug insomnia treatment; SSRIs for panic and GAD with the honest weeks-latency warning: bridge only as planned; trauma treatment where PTSD drove the original prescription.", grade: "established", sources: ["S7", "S4"] },
    { text: "The elderly frame: benzodiazepines on the older-adult avoid-list (Beers lineage); falls, fractures, cognitive decline and delirium through slowed clearance; deprescribing with an even slower taper, falls vigilance and the alternative sleep programme, never abrupt cessation.", grade: "established", sources: ["S5"] },
    { text: "The prescribing-discipline package: 2–4-week ceilings with stop-dates written on the prescription itself for insomnia; one pharmacy, one prescriber, documented quantities; never repeat sedatives on phone requests; Schedule H1 recording requirements for monitored agents (alprazolam among them); the elderly stop-list.", grade: "established", sources: ["S4", "S11"] },
    { text: "The Indian tier: sedative and hypnotic misuse around 1% of adults in the 2019 national survey lineage, higher among urban males, undercounting the unreviewed-therapeutic users; alprazolam dominating misuse presentations; chemist dispensing without prescriptions the structural driver; the three user groups (long-term therapeutic, polysubstance, recreational/counter-coping) each with its own frame.", grade: "supported", sources: ["S9", "S1"] },
    { text: "The polysubstance lethality: benzodiazepine combined with alcohol or opioids multiplies overdose risk through stacked respiratory depression; the poly-substance history mandatory at every assessment, and the taper coordinated with the alcohol or opioid programme (buprenorphine-maintained patients still needing the benzo-taper architecture).", grade: "established", sources: ["S1", "S8"] },
    { text: "The deprescribing frame versus the addiction label for the unreviewed-therapeutic user: different words, same taper architecture; the alliance-preserving conversation ('this medicine has been quietly working against you') that long-term-use and deprescribing evidence supports.", grade: "supported", sources: ["S3", "S1"] },
  ],
};
