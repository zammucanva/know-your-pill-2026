import type { PsychiatryCourse } from "./types";

/**
 * GENERALIZED ANXIETY DISORDER (GAD) — canonical Psychiatry course
 * (migration batch 3, Group F — anxiety disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/gad.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR gates, ICD-11
 * anxiety-or-fear grouping, Dugas intolerance-of-uncertainty and
 * Borkovec cognitive-avoidance models, WCA/Baldwin pharmacotherapy
 * lineage, NMHS India) with per-claim provenance.
 *
 * Drug routes: sertraline, escitalopram and paroxetine (the SSRI
 * tier) and venlafaxine (the best-studied SNRI) link to existing
 * KYP drug lessons; pregabalin and buspirone have no KYP lessons
 * yet — recorded in contentGaps (never invented).
 */
export const gadCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "gad",
  title: "Generalized Anxiety Disorder (GAD)",
  shortName: "GAD",
  kind: "disorder",
  category: "Anxiety Disorder",
  groupLetter: "F",
  groupName: "Anxiety disorders",
  learningPath: ["Psychiatry", "Anxiety Disorders", "GAD"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "The worry engine with no off-switch: uncontrollable, all-domain worry running for months and years while the body pays the bill in tension, gut complaints and sleepless nights.",
  summary:
    "Ordinary worry targets a real problem, resolves, and releases the body. In GAD the worry is general (money, health, children, work, the future — one topic handed off to the next), uncontrollable (starting is easy; stopping is impossible) and chronic (six months or more by definition). The body pays the bill: muscle tension in the neck and jaw, a churning stomach, sleep that will not come, fatigue no weekend cures, irritability the family bears. GAD is one of the most common mental disorders in the world and, in India, a substantial share of what presents as 'tension', 'gas', headache and burning hands — most Indian GAD patients circulate through general medicine, cardiology and gastroenterology for the body's complaints, or receive months of benzodiazepines that manage the evenings while the engine keeps running. This course covers the DSM-5 architecture (excessive worry + uncontrollability + 6 months + 3 of 6 physical symptoms), the two psychological models that drive treatment (intolerance of uncertainty; worry as cognitive avoidance), the CBT package (worry time, uncertainty experiments, imaginal exposure, relaxation), SSRI/SNRI pharmacotherapy with honest durations — and the Indian practice layer: the somatic front door, the 'tension' label, the family reassurance economy and the benzodiazepine culture it feeds.",
  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the DSM-5 architecture: excessive worry + uncontrollability + 6 months + 3 of the 6 physical symptoms + impairment.",
    "Distinguish GAD from ordinary worry, depression's rumination, adjustment disorders and the other anxiety disorders.",
    "Explain the worry-function model (worry as cognitive avoidance of deeper emotional processing) to a patient in three sentences.",
    "Build the four-component CBT package: worry time, intolerance-of-uncertainty work, imaginal exposure, relaxation.",
    "Use SSRI/SNRI first-line pharmacotherapy with proper trial discipline (8–12 week trials, 12-month maintenance, slow taper).",
    "Explain why long-term benzodiazepines are a trap in this specific disorder — and name their one legitimate role.",
    "Recognise GAD's Indian presentations: the somatic front door and the 'tension' label.",
    "Screen the comorbidities that change the plan: depression, panic, alcohol, thyroid disease.",
  ],
  quickFacts: [
    { label: "The engine", value: "Uncontrollable worry", detail: "The diagnostic sentence worth eliciting verbatim: 'I can start, doctor; I cannot stop'" },
    { label: "Duration gate", value: "6 months", detail: "More days than not, across multiple domains, plus 3 of the 6 physical symptoms" },
    { label: "The six symptoms", value: "R-F-C-I-M-S", detail: "Restlessness, Fatigue, Concentration failure, Irritability, Muscle tension, Sleep disturbance — 3 or more required" },
    { label: "Best-studied drug", value: "Venlafaxine XR", detail: "The SNRI with the strongest GAD trial programme; SSRIs (sertraline, escitalopram, paroxetine) equally first-line in practice" },
    { label: "The trap", value: "Benzodiazepines", detail: "They calm the evening beautifully while the engine keeps running — tolerance builds, and the patient now has two problems" },
    { label: "Comorbidity rule", value: "Deppression", detail: "The majority of people presenting for treatment have or develop major depression — screen every visit" },
    { label: "Indian front door", value: "'Gas' and 'tension'", detail: "The patient's opening line is more often 'I have gas trouble' than 'I worry too much' — take both histories" },
    { label: "CBT's selling point", value: "Durability", detail: "Effects persist after therapy ends, unlike medicines — worry outcome diaries beat arguments" },
  ],
  knowledgeGraph: [
    { label: "Panic Disorder & Agoraphobia", type: "condition", href: "/psychiatry/panic-disorder/", note: "Sudden discrete surges out of the blue versus the continuous engine hum" },
    { label: "Social Anxiety Disorder & Specific Phobias", type: "condition", href: "/psychiatry/social-anxiety-phobias/", note: "Worry confined to scrutiny and judgment situations — the domain map separates them" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "Stereotyped intrusions with rituals versus free-range worry — 'they worry differently'" },
    { label: "Adjustment Disorders", type: "condition", href: "/psychiatry/adjustment-disorder/", note: "Worry anchored to one identifiable recent stressor with a sub-6-month clock" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The most common comorbidity — gloom-flavoured rumination versus threat-flavoured worry" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The evening-calmer audit belongs in every GAD assessment" },
    { label: "Benzodiazepine Misuse", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The long-benzo GAD patient is the Indian default presentation — the taper pathway" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "Sleep hygiene as a separate prescription, never as an alprazolam chit" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system the SSRI tier rides on — alarm recalibration over 8–12 weeks" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The threat screen with its threshold dropped to near-zero — every bag opened, all day" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the neuroscience. The alarm with no reset: the amygdala screens the world for 'could this go wrong?' and the prefrontal cortex normally answers 'checked; proceed' — in GAD the screening threshold drops to near-zero (everything registers as threat) while the braking cortex arrives late and weak, producing a mind in permanent airport-security state whose exhaustion is not a symptom added on but the inevitable payroll. The worry shield: worry feels like preparation, but in GAD it secretly functions as an anaesthetic — worrying in words about 'what if the biopsy is positive' keeps the mind at a safe, chattering distance from actually seeing the image and feeling the dread; that is why the worry cannot be argued away (it is load-bearing) and why reassurance buys minutes, not months. The body pays the bill: a mind that never lowers the alert keeps adrenaline and muscle tension on retainer — clenched jaws overnight, shoulders up, gut monitored, sleep architecture broken — sending patients around cardiologists, gastroenterologists and neurologists for years while each normal report produces one good evening before the engine re-runs.",
    steps: [
      "Start with normal screening: the amygdala flags potential threats and the prefrontal cortex answers 'checked; proceed' — the alarm arms and stands down as needed.",
      "In GAD the screening threshold drops toward zero (every outcome registers as danger) and the prefrontal brake arrives late and weak — a permanent airport-security state.",
      "Intolerance of uncertainty converts ambiguity into threat: 'a lump COULD be cancer' is processed as 'IS cancer, act now'.",
      "Worry in words becomes the shield: verbal chattering keeps the sharper IMAGES and emotions at a distance — cognitive avoidance that feels like preparation.",
      "Because the shield is load-bearing, reassurance cannot hold: the worry is reinstalls within days unless the processing beneath it is replaced (imaginal exposure).",
      "The body keeps the account: sustained adrenaline and muscle tension produce the six physical symptoms — restlessness, fatigue, concentration failure, irritability, muscle tension, broken sleep.",
      "Serotonin/noradrenaline pharmacotherapy recalibrates the set-point over weeks (hence 8–12 week trials); CBT trains the brake directly (uncertainty practice, exposure) — complementary mechanisms, which is why combined care works.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala", role: "The threat screen — hyper-reactive with its threshold dropped to near-zero in GAD; the structure that registers every bag as potentially dangerous.", grade: "supported" },
    { id: "pfc", name: "Prefrontal Cortex", role: "The braking system that normally answers the alarm with 'checked; proceed' — late and weak in GAD, which is what uncertainty-tolerance training rebuilds.", grade: "supported" },
    { id: "acc", name: "Anterior Cingulate Cortex", role: "The conflict monitor amplifying error-and-danger signalling — part of the worry circuit's engagement loop.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Alarm-setpoint modulation — the system the first-line SSRIs ride on over 8–12 week trials.", grade: "supported", drugConnection: "Sertraline, escitalopram and paroxetine lessons exist in the KYP Medication Library." },
    { name: "Noradrenaline", symbol: "NE", role: "The arousal currency of the braced body — venlafaxine's second target and the reason SNRIs carry the best-studied GAD trials.", grade: "supported", drugConnection: "The venlafaxine lesson exists in the KYP Medication Library." },
    { name: "GABA", symbol: "GABA", role: "The inhibitory system benzodiazepines borrow — minutes of relief that never recalibrates the engine and builds tolerance.", grade: "supported", drugConnection: "The benzodiazepine class has no KYP drug lesson (recorded gap); see the Benzodiazepine Misuse note." },
  ],
  pathways: [
    {
      id: "gad-alarm-loop",
      name: "The alarm with no reset",
      steps: [
        { label: "Screening threshold drops", detail: "Amygdala flags every ambiguity as potential danger" },
        { label: "Weak prefrontal brake", detail: "'Checked; proceed' arrives late — the all-clear never lands" },
        { label: "Permanent security state", detail: "Every bag opened, every passenger patted down, all day" },
        { label: "Exhaustion as payroll", detail: "Fatigue is not added to the state; it IS the state's running cost" },
      ],
      clinicalManifestation: "Restlessness, feeling keyed up or on edge, fatigue that rest does not clear, concentration failure.",
      grade: "supported",
    },
    {
      id: "gad-worry-shield",
      name: "The worry shield (cognitive avoidance)",
      steps: [
        { label: "Feared image exists beneath", detail: "The job-loss scene, the biopsy scene — sharp, visual, emotional" },
        { label: "Worry in words engages", detail: "Sentence-level chattering about 'what if' keeps the image at a safe distance" },
        { label: "Reassurance gives minutes", detail: "Answers argue with the words, never process the image — the shield re-forms" },
        { label: "Imaginal exposure replaces it", detail: "Deliberately facing the core image in session until its charge drops — the durable-gain component" },
      ],
      clinicalManifestation: "Worry that resists reassurance, recurring 2 a.m. queries, the family's futile answer economy.",
      grade: "supported",
    },
    {
      id: "gad-body-bill",
      name: "The body pays the bill",
      steps: [
        { label: "Alert never lowers", detail: "Adrenaline and muscle tension stay on retainer, day and night" },
        { label: "Somatic translation", detail: "Jaw and neck tension, churning gut, palpitations, 'burning hands'" },
        { label: "The specialist circuit", detail: "Cardiology, gastroenterology, neurology — each normal report buys one good evening" },
        { label: "The engine re-runs", detail: "'But what did they MISS?' — the worry finds the next domain" },
      ],
      clinicalManifestation: "Muscle tension, tension-type headaches, the irritable-gut alliance, unrefreshing sleep — the Indian somatic front door.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "gad-onset", time: "Teens–30s", title: "The worrier biography begins", description: "Onset is typically gradual — often a lifelong 'worrier' temperament rather than a new illness; childhood over-worrying is the early soil.", phase: "onset" },
    { id: "gad-somatic", time: "Years", title: "The specialist circuit", description: "Somatic front-door presentations circulate through general medicine, cardiology and gastroenterology; the two-question turnstile converts the circuit.", phase: "duration" },
    { id: "gad-diagnosis", time: "At assessment", title: "The 6-month gate", description: "More days than not for at least 6 months, 3 of the 6 physical symptoms, impairment — plus the comorbidity screen (depression, panic, alcohol, thyroid).", phase: "peak" },
    { id: "gad-treatment", time: "Weeks 1–12", title: "The trial season", description: "CBT package begun; SSRI/SNRI started with the jitter warning and an 8–12 week full-trial commitment; benzodiazepine bridge only in the first 1–3 weeks, if at all.", phase: "recovery" },
    { id: "gad-maintenance", time: "12 months+", title: "Maintenance and taper", description: "12 months minimum after response; slow taper; written early-warning list (sleep shrinking is the first); CBT skills are permanent.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Lifetime prevalence ~4–7% (annual ~2–3%); among the most common mental disorders worldwide and a top cause of work-day loss; heavily over-represented in primary care — most GAD patients never reach a psychiatrist.",
    indianPrevalence: "NMHS 2015–16 found neurotic/stress-related disorders (a pooled bucket containing GAD) affecting roughly 3.5% of adults, with treatment gaps in the 70–80% range; Indian OPD 'tension' presentations carry a substantial GAD share.",
    lifetimeRisk: "Chronic waxing-waning course without treatment; the comorbidity rule means depression eventually arrives in the majority of treated patients.",
    genderRatio: "Women roughly twice as often as men.",
    ageOfOnset: "Gradual, typically teens through thirties — a lifelong 'worrier' biography more often than a new illness; new late-life 'GAD' in the elderly is a geriatric trap (consider dementia).",
    indianNotes: "Two systematic distortions: somatic presentation (patients report the body's bill — 'gas', tremor, 'heat in the head', palpitations — rather than worry) and prescription-pattern distortion (readily dispensed benzodiazepines and 'nerve tonics' suppress recorded prevalence while the engine runs on).",
  },
  etiology: [
    { category: "biological", factor: "Heritability ~30%", details: "Moderate, real — family aggregation of 'worrier' temperaments; amygdala hyper-reactivity with weak prefrontal braking; serotonin and noradrenaline systems implicated (hence SSRI/SNRI response)." },
    { category: "biological", factor: "Medical mimics", details: "Thyroid overactivity, anaemia, arrhythmia, caffeine excess, salbutamol/steroid/theophylline effects, hypoglycaemia in diabetics — the exclusion set for the physical workup (TSH, CBC, fasting glucose, ECG where indicated)." },
    { category: "psychological", factor: "Intolerance of uncertainty", details: "The fuel identified by modern CBT models — the mind treats ambiguity as danger ('a lump COULD be cancer' = 'IS cancer, act now')." },
    { category: "psychological", factor: "Worry as cognitive avoidance", details: "Worry in WORDS dodges the sharper IMAGES and emotions beneath — which is precisely why reassurance gives minutes, not months." },
    { category: "psychological", factor: "Worry as superstition", details: "'If I worry about the flight, it will not crash' — worry gets the credit for survival, a self-reinforcing illusion." },
    { category: "social", factor: "Adversity and load", details: "Childhood adversity, overprotective or anxious parenting, financial precarity, caregiver roles; Indian multi-domain load (loans, eldercare, school-admissions machinery, job insecurity) — a genuinely high-uncertainty environment." },
  ],
  symptomClusters: [
    {
      category: "1. The core psychological picture",
      symptoms: ["Excessive worry about multiple domains: health, family safety, finances, work, small decisions", "Worry that is hard to control once started — the engine ignition is cheap, the brakes are broken", "Restlessness, feeling keyed up or on edge ('I cannot sit through a film')", "Fatigue: the tiredness rest does not clear (worry is shift-work without relief)", "Concentration failure: the mind fully staffed by the worry department", "Irritability: short fuse at home; the family walks carefully", "Sleep disturbance: difficulty falling asleep (the engine will not idle), unrefreshing sleep, worried early waking"],
    },
    {
      category: "2. The somatic translation (the Indian front door)",
      symptoms: ["Muscle tension: neck, jaw, shoulders; tension-type headaches", "Gastrointestinal: 'gas', bloating, acidity, loose stools alternating with constipation — the irritable-gut alliance", "Cardiovascular-flavoured: palpitations, 'my heart is sinking'", "Sensory: 'heat in the head', burning hands/feet, tingling, tremor-flavoured sensations", "The opening line is more often 'I have gas trouble' than 'I worry too much' — take BOTH histories"],
    },
    {
      category: "3. The worry timeline signature",
      symptoms: ["Present across contexts for years", "Worsens with transitions (transfers, results, illness in the family)", "Never fully absent even in objectively calm periods — 'worrying that I have nothing to worry about'"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "GAD (300.02 / F41.1)",
      criteria: [
        "Excessive anxiety and worry, more days than not for at least 6 months, about a number of events or activities.",
        "The worry is difficult to control (the core discriminator from ordinary worry).",
        "3 or more of 6 symptoms: restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance.",
        "Clinically significant distress or impairment; not attributable to a substance, medical condition or another mental disorder doing the worrying.",
      ],
      duration: "≥ 6 months, more days than not.",
      indianNote: "Mnemonic R-F-C-I-M-S: Restless, Fatigued, Can't-concentrate, Irritable, Muscle-bound, Sleepless. Use the control question rather than the volume question: 'when you start worrying, can you put it down and choose to think about something else?' — GAD's signature is the NO. Map domains on paper: four-plus active domains clinches the 'generalised' gate.",
    },
    {
      system: "ICD-11",
      code: "GAD (6B0A)",
      criteria: [
        "Generalised anxiety: pervasive, hard-to-control worry across several domains, with muscle tension, autonomic overactivity or subjective experience of nervousness.",
        "Housed in the anxiety-or-fear disorders grouping; duration typically at least several months.",
      ],
      duration: "Typically at least several months.",
      indianNote: "Instruments by name: GAD-7 (the seven-item public-domain screen and severity tracker), HAM-A for structured severity, PSWQ as the worry-specific research tool — named, not reproduced.",
    },
  ],
  severityScales: [
    {
      name: "GAD-7",
      fullName: "Generalized Anxiety Disorder-7",
      measures: "The seven-item self-report screen and severity tracker for GAD — the clinic workhorse (public domain).",
      ranges: [
        { min: 0, max: 4, severity: "Minimal anxiety", action: "If clinical suspicion persists, monitor and re-screen; never dismiss on score alone" },
        { min: 5, max: 9, severity: "Mild", action: "Watchful waiting with reassurance and psychoeducation; re-screen in weeks, not months" },
        { min: 10, max: 14, severity: "Moderate", action: "Active treatment indicated: CBT referral and/or SSRI after the medical-mimic workup" },
        { min: 15, max: 21, severity: "Severe", action: "Active treatment always; assess functional impairment and comorbid depression; combination care for severity" },
      ],
      indianNote: "Public domain — usable freely in Indian OPD settings; pair the score with the functioning question ('how is your sleep, really?') rather than treating the number as the patient.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Normal everyday worry", distinguishingFeatures: "Proportional, controllable, resolves with the problem; body recovers.", keyDifferentiator: "The control question — ordinary worry can be put down." },
    { condition: "Major depression", distinguishingFeatures: "Low mood and anhedonia lead; worry is gloom-flavoured ('everything is ruined') rather than threat-flavoured ('everything might go wrong').", keyDifferentiator: "Morning-worse pattern, anhedonia — check mood first, screen every GAD visit." },
    { condition: "Adjustment disorder", distinguishingFeatures: "Worry anchored to one identifiable recent stressor.", keyDifferentiator: "Sub-6-month clock and single-stressor lock." },
    { condition: "Panic disorder", distinguishingFeatures: "Sudden discrete surges out of the blue.", keyDifferentiator: "Continuous engine hum versus discrete attacks — ask 'surges out of the blue?'" },
    { condition: "Social anxiety disorder", distinguishingFeatures: "Worry confined to scrutiny/judgment situations.", keyDifferentiator: "The domain map: only social-performance domains active." },
    { condition: "OCD", distinguishingFeatures: "Intrusions are unwanted thoughts/images/urges with rituals; themes stereotyped (contamination, harm, doubt).", keyDifferentiator: "Stereotyped themes plus neutralising rituals versus free-range worry." },
    { condition: "Health anxiety", distinguishingFeatures: "Worry locked to disease themes with a reassurance-checking loop.", keyDifferentiator: "Single-domain lock and the checking cycle." },
    { condition: "Thyrotoxicosis / anaemia / caffeine excess", distinguishingFeatures: "Physical findings, temporal lock to the medical cause.", keyDifferentiator: "TSH, CBC, honest caffeine quantification (8 cups of chai is its own anxiety disorder)." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "The re-framing first session",
      description: "The most therapeutic first session in GAD explains the alarm-with-no-reset story: 'this is not weakness or madness; it is a nervous system stuck in surveillance mode, and that state is trainable and treatable.' Patients who understand the machinery stop half the self-blame that maintains the disorder.",
      whenToUse: "Every patient, session one.",
      indianContext: "Deliver in the patient's words — 'tension hai' is the folk-diagnosis; the counter-frame: 'everyone has tension; not everyone has tension THAT DOES NOT SWITCH OFF, that eats sleep and burns the body; that second kind is what we treat.'",
    },
    {
      category: "psychotherapy",
      name: "CBT — the four-component package (FIRST-LINE)",
      description: "Worry time (a scheduled 30-minute daily appointment with worry; the rest of the day's worries written down and deferred); intolerance-of-uncertainty work (behavioural experiments in tolerating 'maybe' — not calling to check, letting the son travel untracked); imaginal exposure (deliberately facing the feared core image in session until its charge drops — the durable-gain component that replaces the worry shield); relaxation training (progressive muscle relaxation, slow exhale-weighted breathing, applied relaxation) plus the worry outcome diary (most predicted catastrophes never occur — data beats argument). 10–14 sessions typical; effects persist after therapy ends.",
      whenToUse: "First-line for all severities; the honest selling point is durability.",
      indianContext: "The exposure ladder is FREE — the Indian street (shops, autos, chai stalls, bus queues) is a graded uncertainty gymnasium of unmatched density; district/college counsellors and Tele-MANAS 14416 provide the base tier.",
    },
    {
      category: "pharmacotherapy",
      name: "SSRIs / SNRI (FIRST-LINE)",
      description: "Sertraline 50–150 mg, escitalopram 10–20 mg, paroxetine 20–50 mg; venlafaxine XR 75–225 mg (the best-studied GAD antidepressant). Full trials 8–12 weeks — GAD responds slower than depression; early jitter handled with reassurance and dose-splitting, not abandonment. Maintenance 12 months minimum after response, then slow taper with a written early-warning list (sleep shrinking is the first).",
      whenToUse: "First-line alongside or instead of CBT; combined for severity.",
      indianContext: "Sertraline 100 mg ≈ ₹80–160/month; escitalopram 10 mg ≈ ₹70–150/month; venlafaxine XR 75 mg ≈ ₹200–400/month (approx 2026). Pregabalin 150–600 mg/day is an alternative with faster anxiolysis (and its own misuse considerations) — no KYP lesson yet; buspirone 15–60 mg the old honest second line where substance risk looms.",
    },
    {
      category: "pharmacotherapy",
      name: "Benzodiazepines — the trap clause",
      description: "Clonazepam/alprazolam calm the evening beautifully, which is exactly the problem: the drug 'works' while the engine keeps running, tolerance builds, and the patient now has two problems. Legitimate use: the first 1–3 weeks of SSRI initiation at falling doses, or strictly time-labeled bridges; detox/taper plans for the already-dependent.",
      whenToUse: "Short bridges only — never the destination.",
      indianContext: "The 'nerve tablet' is a household object in much of India — borrowed across neighbours, escalated by pharmacists, continued for decades. The GAD consult is the moment to name the trade (the evening for the decade) and route dependence to a dignified taper pathway (see the Benzodiazepine Misuse note).",
    },
    {
      category: "psychotherapy",
      name: "The comorbidity and parallel-care layer",
      description: "Depression (SSRI dose handled for both), panic (add the interoceptive module — see the Panic Disorder course), alcohol (the evening-quiet plan; audit before assuming 'just tension'), insomnia (sleep hygiene as a separate prescription, not as an alprazolam chit).",
      whenToUse: "Screened at every visit; treated in parallel, not sequentially.",
      indianContext: "The family module converts the household's reassurance economy into the recovery economy: answer fully ONCE, log the question, redirect repeats to tomorrow's worry time, hold the patient through the discomfort instead of rescuing them from it.",
    },
  ],
  safety: {
    redFlags: [
      "Emergent suicidal ideation — depression rides along in the majority; screen directly at every visit (Tele-MANAS 14416)",
      "Escalating benzodiazepine use or pharmacy-refill without review — dependence established, needs a structured taper plan",
      "Alcohol as the evening-calmer — the self-treatment tier that quietly becomes its own disorder",
      "New late-life 'GAD' — the geriatric trap: consider dementia and cognitive screening before the anxiety label",
      "Weight loss, heat intolerance, tachycardia — stop and exclude thyrotoxicosis before psychiatricising",
    ],
    urgentGuidance:
      "The order of operations when GAD presents with benzodiazepine dependence: name the trade honestly (the tablet was treating evenings, not the engine), stage the transition (SSRI built up during a slow 8-week diazepam-equivalent taper), and sequence the CBT uncertainty experiments to the taper — driving returned, phones untracked. Suicidal ideation gets same-day care, not a follow-up appointment.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "First-line SSRI", rationale: "The practical first choice in Indian cost reality (≈ ₹80–160/month at 100 mg) with a clean side-effect profile; 8–12 week trials with the early-jitter warning." },
    { name: "Escitalopram", slug: "escitalopram", role: "First-line SSRI", rationale: "Well-tolerated, dose-simple (10–20 mg), and among the most-prescribed SSRIs for GAD in Indian practice (≈ ₹70–150/month)." },
    { name: "Paroxetine", slug: "paroxetine", role: "First-line SSRI", rationale: "Approval status across markets for GAD; sedating and anticholinergic load plus worst-in-class discontinuation make it second choice in practice." },
    { name: "Venlafaxine", slug: "venlafaxine", role: "Best-studied SNRI", rationale: "The GAD antidepressant with the strongest trial programme (XR 75–225 mg) — the option when SSRIs fail or are not tolerated; BP monitoring applies." },
  ],
  contentGaps: [
    "Pregabalin — the faster-anxiolysis alternative with misuse considerations — has no KYP drug lesson yet.",
    "Buspirone — the dependence-free second line — has no KYP drug lesson yet.",
    "The benzodiazepine class (alprazolam/clonazepam and the taper architecture) has no KYP drug lesson; the Benzodiazepine Misuse note carries the clinical content meanwhile.",
  ],
  patientGuide: {
    whatIsIt:
      "A condition where the mind's threat-detection system is set too sensitively: worry spreads to every domain of life (money, health, children, work), cannot be put down even for a film, runs for months and years, and keeps the body braced — tense, restless, sleepless, exhausted, irritable. It is one of the most common mental disorders in the world, it is not weakness or madness, and it responds well to structured talking therapy and SSRIs.",
    whatCausesIt:
      "A combination of an inherited sensitive-alarm temperament (about a third of the tendency) and learned maintenance habits (checking, reassurance-seeking, avoidance). The worry itself secretly functions as an anaesthetic — worrying in words keeps you a safe distance from the sharper images beneath, which is why it cannot simply be argued away and why reassurance only lasts minutes.",
    symptoms:
      "Excessive, hard-to-control worry across many domains for 6 months or more, plus at least three of: restlessness, fatigue, difficulty concentrating, irritability, muscle tension (neck, jaw, shoulders), and disturbed sleep. The body often speaks first: 'gas', headache, palpitations, 'burning hands', 'heat in the head'.",
    treatment:
      "First-line is structured CBT — worry time (a daily appointment with worry), uncertainty-tolerance experiments, facing the core feared image until it loses charge, and relaxation — typically 10–14 sessions with effects that persist after therapy ends. Medicines help: SSRIs or the SNRI venlafaxine, at 8–12 week full trials and about a year of maintenance after response. Tranquillisers (benzodiazepines) have one honest role — a short bridge in the first weeks while the real treatment builds — and are a trap as the destination: they calm the evening while the engine keeps running.",
    selfHelp: [
      "Book worry time: 30 minutes daily, same slot; write the day's worries down and defer them to it — containment starves the engine of its all-day licence.",
      "Practise tolerating 'maybe': one small uncertainty experiment daily (order without researching, let the call go unanswered).",
      "Keep a worry outcome diary: most predicted catastrophes never occur — your own data beats any argument.",
      "Slow, exhale-weighted breathing and progressive muscle relaxation — prescribed with the same specificity as tablets ('15 minutes, this sequence, this time daily'), not as vague 'do yoga'.",
      "Give the family the counterintuitive brief: answer fully ONCE, then redirect repeats to worry time — rescuing soothes the minute and strengthens the machine.",
    ],
    whenToSeekHelp: [
      "Worry running your life for months — eating sleep, work or relationships",
      "The specialist circuit: multiple normal reports and still 'something is wrong'",
      "Needing a drink or a 'nerve tablet' to get through evenings",
      "Any thoughts of ending your life — same-day help (Tele-MANAS 14416)",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District hospital psychiatry OPD / DMHP psychologists — nominal or no charge",
      "EAP-style counselling through IT/PSU employers where available",
    ],
  },
  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian GAD guideline; management follows WHO mhGAP, NICE-tier anxiety guidance and WCA-lineage pharmacotherapy recommendations adapted to Indian cost and delivery reality.",
    systemContext: "The somatic front door protocol: every 'gas/headache/palpitations/burning' circuit through medicine OPDs should carry a two-question turnstile — 'how is your sleep?' and 'when you start worrying, can you stop at will?' Positive answers redirect the file toward the anxiety pathway before the tenth normal report.",
    programmeContext: "Tele-MANAS 14416 provides the counselling base tier; district-psychologist and medical-college psychology departments deliver structured CBT-capable care at nominal cost; IT/PSU EAPs are a delivery vehicle for the worry-time and uncertainty practices before high-stress seasons.",
    costConsiderations: "Sertraline 100 mg ≈ ₹80–160/month; escitalopram 10 mg ≈ ₹70–150/month; venlafaxine XR 75 mg ≈ ₹200–400/month; pregabalin ≈ ₹150–300/month; buspirone ≈ ₹100–200/month; CBT private ≈ ₹600–1,500/session (approx 2026). The Indian reality check: alprazolam and clonazepam cost less than a cup of tea and are dispensed like it — writing the SSRI + bridge + review plan (three minutes more than a benzo chit) is the single highest-yield GAD practice upgrade in Indian primary care.",
    culturalConsiderations: "'Tension hai' is the Indian folk-diagnosis of GAD — accurate in spirit, lethal for help-seeking, because 'everyone has tension' normalises a treatable engine disorder. Families organise around the patient's worry (sons calling twice daily, phones tracked, plans made around 'what she will think'); without briefing, the family becomes the reassurance-machine GAD requires and discards. Slow-exhale-weighted pranayama and yoga modules have supportive trial evidence in Indian anxiety populations as adjuncts — prescribe with tablet-specificity.",
    patientCounselling: [
      "The counter-frame sentence: 'everyone has tension; not everyone has tension that does not switch off, eats sleep and burns the body — that second kind is what we treat.'",
      "The family module: reassurance deliberately REDUCED ('we have answered this exact question; we will answer it again tomorrow in worry time'), worry-deflection to the written record, calm presence over information delivery.",
      "The benzodiazepine conversation: name the trade (the evening for the decade), offer the bridge plan, and route existing dependence to the taper pathway with dignity.",
      "Teach worry-time and uncertainty practice BEFORE the predictable seasons (transfers, results, appraisals) — vaccination precedes the epidemic.",
      "Quantify caffeine honestly: 8 cups of chai is its own anxiety disorder; the tea history is part of the medical workup.",
    ],
  },
  decisionPath: {
    title: "The all-domain worry assessment",
    nodes: [
      {
        id: "start",
        question: "A patient presents with chronic worry or its somatic costume. What is the volume, the control and the clock?",
        branches: [
          { label: "Worry across 4+ domains, cannot be put down, ≥ 6 months", next: "gad-gates" },
          { label: "Sudden surges out of the blue", next: "panic-path" },
          { label: "Worry locked to scrutiny/judgment situations", next: "social-path" },
          { label: "Single recent stressor, < 6 months", next: "adjustment-path" },
        ],
      },
      {
        id: "gad-gates",
        question: "3 of the 6 physical symptoms present (restlessness, fatigue, concentration, irritability, muscle tension, sleep) with impairment?",
        branches: [
          { label: "Yes — GAD", next: "mimic-screen" },
          { label: "No — re-examine the domain map and differentials", next: "not-trauma" },
        ],
      },
      {
        id: "mimic-screen",
        question: "Mimics and comorbidity cleared: thyroid, anaemia, caffeine, substances; depression, panic, alcohol audited?",
        branches: [
          { label: "All clear", next: "treat" },
          { label: "Medical mimic found", next: "medical-first" },
        ],
      },
      { id: "treat", question: "GAD confirmed.", recommendation: "Reframing first session; CBT package (worry time, uncertainty experiments, imaginal exposure, relaxation) first-line; SSRI (sertraline/escitalopram/paroxetine) or venlafaxine with 8–12 week trial discipline; benzodiazepines only as 1–3 week bridges; comorbidities in parallel; 12-month maintenance after response." },
      { id: "medical-first", question: "Medical mimic.", recommendation: "Treat the thyroid disease, anaemia or caffeine load first — then reassess; the anxiety label waits for the body's honesty." },
      { id: "panic-path", question: "Discrete surges.", recommendation: "Route to the Panic Disorder & Agoraphobia pathway: peak-within-minutes attacks, 1-month concern clause, interoceptive exposure + start-low SSRI." },
      { id: "social-path", question: "Scrutiny-locked.", recommendation: "Route to the Social Anxiety Disorder pathway: negative-evaluation core, performance-only versus generalised split, propranolol versus SSRI decision." },
      { id: "adjustment-path", question: "Stressor-locked.", recommendation: "Route to the Adjustment Disorders pathway: single identifiable stressor, sub-6-month clock, stressor-focused care." },
      { id: "not-trauma", question: "Architecture absent.", recommendation: "Re-map: depression's gloom-flavoured rumination, health anxiety's disease lock, OCD's stereotyped themes — or sub-threshold worry still deserving the CBT package by need, not label." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing GAD in depression whose rumination is gloom-flavoured",
      why: "'Everything is ruined' is depressive rumination; 'everything might go wrong' is anxiety — the flavour and the lead symptom differ.",
      correction: "Check mood, anhedonia and diurnal variation first; screen every GAD visit for the depression that eventually arrives.",
    },
    {
      mistake: "Missing the panic question",
      why: "'Surges out of the blue' flips the plan from the worry engine to the panic cycle.",
      correction: "Ask it verbatim in every anxiety assessment: 'sudden surges of fear out of the blue?'",
    },
    {
      mistake: "Accepting the somatic frame and repeating the specialist carousel",
      why: "Each normal gastroenterology or cardiology report produces one good evening; the engine re-runs and the years pass.",
      correction: "Deploy the two-question turnstile at every somatic door: 'how is your sleep?' and 'can you put the worry down at will?'",
    },
    {
      mistake: "Lifelong benzodiazepines as 'management'",
      why: "The highest-frequency Indian prescribing error: the drug 'works' nightly while tolerance builds, the engine runs, and dependence becomes a second illness.",
      correction: "The bridge plan: 1–3 weeks at falling doses during SSRI initiation, then off; existing dependence gets a structured taper with the SSRI built up alongside.",
    },
    {
      mistake: "Stopping the SSRI at week 4 because 'no effect'",
      why: "GAD responds slower than depression; declaring failure at a half-dose and a half-trial is the commonest pharmacological error.",
      correction: "Commit to 8–12 week trials at adequate dose with the early-jitter warning given in advance.",
    },
    {
      mistake: "Forgetting the alcohol audit in the evening-calmer",
      why: "The nightly drink that 'takes the edge off' is self-treatment that becomes its own disorder and blocks response.",
      correction: "Ask by name ('do you take a drink or a tablet to calm the evenings?') at every visit.",
    },
    {
      mistake: "Calling new late-life worry 'GAD' without a cognitive screen",
      why: "Dementia in the elderly can present as new late-life 'GAD' — the geriatric trap.",
      correction: "Add cognitive screening when the worry begins late and the biography lacks the lifelong worrier thread.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "GAD: diagnostic criteria and management (the evergreen long-answer skeleton).",
        "Differentiate GAD from panic disorder and adjustment disorder — the trio question.",
        "Pharmacotherapy of anxiety disorders: first line and why.",
        "Why are benzodiazepines not long-term treatment for GAD?",
      ],
      practical: [
        "Demonstrate the control question and the domain map in a GAD assessment.",
        "Explain the worry-as-cognitive-avoidance model to a patient in three sentences.",
      ],
      longAnswer: [
        "Generalized anxiety disorder: clinical features, diagnosis, management.",
        "A 49-year-old homemaker on alprazolam for eleven years: your assessment and plan.",
      ],
    },
    neetPg: {
      highYield: [
        "Gates: 6 months, more days than not; 3 of 6 physical symptoms — uncontrollability is the core discriminator from ordinary worry.",
        "Mnemonic R-F-C-I-M-S: Restlessness, Fatigue, Concentration, Irritability, Muscle tension, Sleep.",
        "Female:male ~2:1; onset typically before 30; chronic waxing-waning course.",
        "Comorbidity rule: depression eventually in the majority of treated patients — screen every visit.",
        "Venlafaxine XR = best-studied SNRI in GAD; pregabalin an alternative; buspirone for dependence-risk.",
        "CBT effects persist post-treatment; drug effects fade off-drug — the trial-comparison answer.",
        "Medical mimics: thyrotoxicosis, caffeine, anaemia, hypoglycaemia.",
        "GAD-7 = the public-domain screen; know its use, not its items.",
        "Dementia in the elderly can present as new late-life 'GAD' — the geriatric trap.",
      ],
      pyqConcepts: [
        "NMHS 2015–16 neurotic-disorders bucket (~3.5% of adults; 70–80% treatment gap) — quotable marks.",
        "Yoga as adjunct in anxiety: the Indian-context evidence question.",
        "The trial comparison: CBT durability versus pharmacotherapy relapse off-drug.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 34-year-old engineer with two years of normal endoscopies, ECGs and nerve studies for 'gas', palpitations and 'burning feet': the two-question turnstile, the domain map, and the plan (reframe + SSRI + CBT + wife brief) — not the eleventh specialist.",
        "A patient on standing benzodiazepine refills asks to 'just continue, it works': the honest conversation, the bridge plan, and what you offer instead.",
        "The request for 'immediate calming tablets' at the first SSRI visit: the jitter warning, dose-splitting, and the 8–12 week commitment as one prescription.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "GAD = excessive uncontrollable worry + 6 months + 3 of 6 symptoms (R-F-C-I-M-S).",
        "First-line: SSRIs/venlafaxine + CBT (worry time, uncertainty tolerance, exposure).",
        "Benzodiazepines: short bridges only — tolerance and dependence.",
        "GAD-7 as the screening tool.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The control question outperforms the volume question at the bedside: 'can you put it down?' is the diagnostic sentence worth eliciting verbatim.",
        "Families are the reassurance apparatus — the reduction module is evidence-based family work, not a courtesy.",
        "The Indian prescription-pattern distortion (benzo-and-tonic culture) suppresses recorded GAD prevalence; your three extra minutes of SSRI-plus-review planning is a systems intervention.",
        "Watch the elderly: new late-life 'GAD' with a clean worrier biography earns a cognitive screen before an SSRI.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The engineer who visited four specialists",
      presentation: "34-year-old IT engineer, Hyderabad — two years of 'gas and acidity', then palpitations, then 'burning feet', each through a different specialist door, every report normal.",
      initialPresentation: "A 34-year-old IT engineer from Hyderabad referred from neurology after two years of a symptom circuit: 'gas and acidity' first (two normal endoscopies), palpitations next (normal ECG and echo), then 'burning feet' (normal nerve studies). Each visit had bought a week of relief before the next symptom took over. At the fourth door the turnstile questions turned positive: sleep 4 hours ('the moment I lie down the thoughts start'), worry active across health-money-parents-appraisal domains, and uncontrollability in his own words: 'I can start, doctor; I cannot stop.'",
      history: "No prior psychiatric history; no substances beyond 5–6 cups of chai daily; no weight loss or heat intolerance; family history of 'tension' in the father.",
      examination: "Restless, jaw-clenching visible; muscle tension across neck and shoulders; no medical findings; GAD-7 in the severe band.",
      diagnosis: "Generalized anxiety disorder, somatic presentation, with reassurance-seeking economy.",
      management: "The physiology explanation first (his relief was visible: 'so my stomach is a victim, not the criminal'); sertraline 50→100 mg with a 10-day clonazepam bridge falling off as the SSRI engaged; the CBT package (worry time, the outcome diary, imaginal exposure to the appraisal scene he had never let himself picture); his wife briefed on the reduced-reassurance protocol.",
      outcome: "At 12 weeks: sleep 6.5 hours, no specialist retained, GAD-7 halved; the relapse drill written (sleep shrinking = first sign).",
      teachingPoints: [
        "The somatic circuit IS the GAD referral pathway — interrupt it with the two-question turnstile.",
        "'I can start but cannot stop' is the diagnostic sentence worth eliciting verbatim.",
        "The family's reassurance is a symptom-feeder; reducing it is a treatment.",
      ],
    },
    {
      title: "The mother of two on alprazolam for eleven years",
      presentation: "49-year-old Ludhiana homemaker — eleven years of alprazolam 0.5 mg three times daily, originally for worry after her husband's cardiac scare, refilled without review.",
      initialPresentation: "A 49-year-old Ludhiana homemaker brought by her daughter after a pharmacy refused an unaccompanied refill. Alprazolam 0.5 mg three times daily for eleven years — originally prescribed after her husband's cardiac scare, refilled by the family pharmacy without a fresh prescription. Evenings manageable; mornings dread; she had stopped driving ('what if I faint with the children in the car'), screened her daughters' phones, and described herself as 'a useless frightened woman'. Sleep unrefreshing despite sedation; the worry engine audibly still running.",
      history: "No depression screen positives beyond mild; no alcohol; the benzodiazepine the only psychotropic; driving and independence progressively surrendered to the alarm.",
      examination: "Calm-evening/wired-morning pattern; no withdrawal signs at current dosing; GAD-7 severe; AUDIT-C negative.",
      diagnosis: "Generalized anxiety disorder with benzodiazepine dependence.",
      management: "Staged: the honest conversation (the tablet was treating evenings, not the engine, and had quietly become a second illness); transfer to a slow diazepam-equivalent taper over 8 weeks; escitalopram 10 mg built up during the taper; CBT's uncertainty-exposure experiments sequenced to the taper (driving returned at week 6, daughters' phones untracked at week 10); husband taught the non-reassurance response.",
      outcome: "At 6 months: off benzodiazepines, one relapse-week managed without restarting, driving restored — her line at review: 'I have not been this person since my thirties.'",
      teachingPoints: [
        "Long-benzo GAD is the Indian default presentation, and the taper-plus-SSRI-plus-CBT sequence reverses a decade.",
        "Graded behavioural experiments (driving, phones) are the visible currency of recovery.",
        "Spouse-training converts the household's reassurance economy into the recovery economy.",
      ],
    },
  ],
  clinicalPearls: [
    "Six months, more days than not, 3 of the 6 physical symptoms — recite the gates cold; uncontrollability is the core discriminator.",
    "The control question beats the volume question: 'when you start worrying, can you put it down?'",
    "Worry is an anaesthetic in words — that is why reassurance gives minutes and only imaginal exposure gives months.",
    "GAD responds slower than depression: 8–12 week trials at full dose, judged only then.",
    "The comorbidity rule: depression eventually in the majority — screen every visit.",
    "Benzodiazepines are bridges, never destinations — the Indian default error.",
    "The somatic front door: 'gas', burning hands and 'heat in the head' are worry wearing the body's clothes.",
    "Slow-exhale pranayama and yoga modules as adjuncts — prescribed with tablet-specificity, not as vague advice.",
  ],
  highYieldSummary: [
    "GAD = excessive uncontrollable multi-domain worry ≥ 6 months + 3 of 6 symptoms (R-F-C-I-M-S) + impairment.",
    "Psychological engines: intolerance of uncertainty (the fuel) and worry as cognitive avoidance (the shield that reassurance cannot remove).",
    "CBT package: worry time + uncertainty experiments + imaginal exposure (the durable-gain piece) + relaxation; effects persist post-treatment.",
    "Pharmacotherapy: SSRIs (sertraline, escitalopram, paroxetine) or venlafaxine XR — 8–12 week trials, 12-month maintenance, slow taper.",
    "Benzodiazepines: 1–3 week bridges during SSRI initiation only; the Indian 'nerve tablet' economy is a GAD-maintenance machine.",
    "Comorbidity screen every visit: depression, panic, alcohol, thyroid.",
    "Indian layer: somatic front door, the 'tension' counter-frame, the family reassurance-reduction module, Tele-MANAS 14416 as the base tier.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "gad-quiz-1",
      question: "The single best discriminator of GAD worry from normal worry at the bedside:",
      options: ["Worry about health", "Difficulty stopping the worry once started", "Worry during the night", "Physical symptoms"],
      correctIndex: 1,
      explanation: "Uncontrollability is the core gate; domain and timing overlap with normal worry.",
      afterSectionId: "diagnosis",
    },
    {
      id: "gad-quiz-2",
      question: "Minimum duration and physical-symptom count (DSM-5):",
      options: ["1 month, 1 symptom", "3 months, 2 symptoms", "6 months, 3 symptoms", "12 months, 4 symptoms"],
      correctIndex: 2,
      explanation: "Six months, more days than not, plus 3 of the 6 physical symptoms (R-F-C-I-M-S).",
      afterSectionId: "diagnosis",
    },
    {
      id: "gad-quiz-3",
      question: "The CBT component that most directly produces durable gains in GAD:",
      options: ["Worry time alone", "Imaginal exposure to the feared core image", "Relaxation training", "Reassurance from family"],
      correctIndex: 1,
      explanation: "Exposure processes the emotional material the word-worry keeps at a distance — the piece that replaces the shield.",
      afterSectionId: "management",
    },
    {
      id: "gad-quiz-4",
      question: "A patient with heat intolerance, weight loss and anxiety. Before diagnosing GAD:",
      options: ["Start an SSRI", "Check thyroid function", "Begin CBT", "Add a benzodiazepine"],
      correctIndex: 1,
      explanation: "Thyrotoxicosis is the classic medical mimic; exclude before labelling.",
      afterSectionId: "differential",
    },
    {
      id: "gad-quiz-5",
      question: "The legitimate benzodiazepine role in GAD:",
      options: ["Lifelong monotherapy", "The first 1–3 weeks of SSRI initiation at falling doses", "Nightly maintenance", "As-needed forever"],
      correctIndex: 1,
      explanation: "Short bridges while the antidepressant takes hold — never the destination; tolerance and dependence follow.",
      afterSectionId: "management",
    },
    {
      id: "gad-quiz-6",
      question: "In CBT's worry-time prescription, worries arising outside the slot are:",
      options: ["Argued away immediately", "Written down and deferred to the next scheduled worry period", "Suppressed by relaxation", "Shared with family for reassurance"],
      correctIndex: 1,
      explanation: "Written and deferred — the containment that starves the engine of its all-day licence.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the DSM-5 GAD gates: duration, symptom count, the six physical symptoms.", answer: "Excessive uncontrollable worry across multiple domains, more days than not for ≥ 6 months, plus 3 of 6: Restlessness, Fatigue, Concentration difficulty, Irritability, Muscle tension, Sleep disturbance — with impairment and no better explanation.", topic: "Diagnosis" },
    { question: "Why is 'can you put the worry down?' a better screening question than 'do you worry a lot?'", answer: "Volume overlaps with ordinary worry and personality; control is the discriminator — GAD's signature is the NO. Follow with the domain map (health, money, children, work, future): four-plus active domains clinches the 'generalised' gate.", topic: "Diagnosis" },
    { question: "Explain the worry-as-cognitive-avoidance model to a patient in three sentences.", answer: "'Worrying in sentences keeps you a safe distance from the frightening pictures underneath — it works like an anaesthetic. That is why it cannot be argued away and why reassurance only lasts minutes: the shield rebuilds. Treatment faces the pictures directly, in graded, supported sessions, until they lose their charge.'", topic: "Counselling" },
    { question: "Construct the four-component CBT package and say which component produces the durable gains.", answer: "Worry time (containment), intolerance-of-uncertainty experiments (retraining the brake), imaginal exposure (processing the core image — the durable-gain piece), relaxation training (body down-regulation) — plus the worry outcome diary as the data layer.", topic: "Management" },
    { question: "What is the legitimate benzodiazepine role in GAD, and for how long?", answer: "A bridge in the first 1–3 weeks of SSRI initiation at falling doses, or strictly time-labeled crisis cover — the drug 'works' nightly while tolerance builds and the engine runs; as the destination it manufactures a second illness. Existing dependence: structured taper with the SSRI built up alongside.", topic: "Management" },
    { question: "List the medical mimics you exclude and the specific tests.", answer: "Thyrotoxicosis (TSH), anaemia (CBC), arrhythmia (ECG where new/older patient), hypoglycaemia in diabetics (fasting glucose), and the honest caffeine/tea quantification; review salbutamol/steroid/theophylline effects in the medication list.", topic: "Diagnosis" },
    { question: "Write the reduced-reassurance protocol you would give a GAD patient's spouse.", answer: "Answer fully ONCE; log the question; redirect repeats to the next day's worry time ('we will answer it again tomorrow in the slot'); hold the patient through the discomfort instead of rescuing her from it — rescuing soothes the minute and strengthens the machine.", topic: "Counselling" },
    { question: "What Indian prescriptions replace 'do yoga' with actual prescription specificity?", answer: "Named sequence, 15 minutes, this time daily — slow-exhale-weighted pranayama modules with supportive trial evidence in Indian anxiety populations, written like a tablet prescription; plus the pre-season rule: teach worry-time and uncertainty practice before transfers, results and appraisal seasons.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Everyone has tension. Why is mine an illness?", answer: "Everyone has tension; not everyone has an alarm system that never switches off. When worry spreads to every domain, cannot be put down even for a film, eats your sleep and runs your body hot for months — that is a distinct, named, treatable condition. Calling it 'just tension' is like calling a fever 'just warmth'." },
    { question: "Is this a mental illness — am I going mad?", answer: "No madness is involved. GAD is a calibration problem of the threat-detection system — closer to a smoke alarm set too sensitively than to any loss of mind. People with GAD are typically too sane: they see every possible danger, all day." },
    { question: "Why can't I just stop worrying? I try.", answer: "Because in this condition the STOP circuit is the part that is weak, not the START. Willpower applied to a broken brake fails predictably — which is why treatment trains the brake (structured uncertainty practice, exposure) rather than shouting at the engine." },
    { question: "All my reports are normal. So why do I still feel something is wrong?", answer: "The reports are normal because GAD is not a disease of the organs it alarms — it is the alarm itself. The symptoms you feel are real: the body pays the worry's bill in muscle tension, gut and sleep currency. Their SOURCE is the nervous system's set-point, and that is exactly what treatment adjusts." },
    { question: "The doctor gave an antidepressant. I am not depressed.", answer: "Antidepressant medicines work in anxiety disorders at their own doses — they quiet the over-set alarm. Being prescribed one in GAD does not mean you are depressed; it means the same chemistry that calms depression also calms the threat system. Expect 2–4 weeks, and tell us about early jitter." },
    { question: "The alprazolam worked immediately. Why not just continue it?", answer: "It works immediately because it sedates the alarm; it does not recalibrate it. Over months the body adjusts, the tablet wears off sooner, the dose creeps, and the engine still runs underneath. There is a proper role for it in the first weeks, as a bridge while the real treatment builds. As the destination, it is a trap with a soft carpet." },
    { question: "Will I need medicines lifelong?", answer: "Most people do not. A full treatment season — 12 months of medicine combined with the therapy — then a planned slow taper with a written early-warning list (sleep shrinking is the first), handles most cases. Some with strong family loading relapse and choose long-term maintenance; that is a decision, not a defeat." },
    { question: "My wife keeps asking the same worries and I keep answering. Is that right?", answer: "Natural, loving — and unfortunately feeding the loop. We will teach you the counterintuitive version: answer fully ONCE, log the question, redirect repeats to the next day's worry time, and hold her through the discomfort instead of rescuing her from it. Rescuing soothes the minute and strengthens the machine." },
    { question: "Can children get this?", answer: "Yes: over-worrying children (stomach-aches on school mornings, 'what if' marathons, sleep fears) are often little GAD engines, and early CBT-style work can re-set the trajectory before adulthood. It is temperament plus learning, and both are trainable." },
    { question: "Is it hereditary? My mother was the same.", answer: "Partly. About a third of the tendency is inherited — the sensitive alarm is a family trait. But the maintenance habits (checking, reassurance-seeking, avoidance) are learned in such households, and they are exactly what therapy unlearns." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — GAD architecture paraphrased; criteria not reproduced (2022)" },
      { source: "ICD-11 (WHO) — GAD construct within the anxiety-or-fear disorders grouping" },
      { source: "NICE — anxiety disorders guidance, stepped care (2011/2020 lineage)" },
      { source: "WHO mhGAP Intervention Guide — generalised anxiety module for non-specialist settings" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.7.1 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — anxiety disorders (2022)" },
    ],
    trials: [
      { source: "Rickels K et al. — venlafaxine XR and pregabalin GAD trial programmes" },
      { source: "Davidson JRT et al. — venlafaxine XR GAD trials (the best-studied SNRI lineage)" },
      { source: "Baldwin DS et al. / Bandelow B et al. — pharmacotherapy meta-analyses; WCA guideline lineage" },
    ],
    reviews: [
      { source: "Dugas MJ et al. — intolerance-of-uncertainty model and treatment (Behav Res Ther series)" },
      { source: "Borkovec TD — cognitive-avoidance model of worry; applied relaxation lineage" },
      { source: "Newman MG et al. — GAD psychological-treatment meta-analyses; CBT durability data" },
      { source: "Wells A — metacognitive therapy for GAD (the alternative formulation worth naming)" },
      { source: "Telles S et al. — yoga trials in Indian anxiety populations (adjunct evidence)" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "GAD-7 — the public-domain seven-item screen and severity tracker" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the alarm that never switches off, why treatment works, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The diagnostic gates, the two psychological models, the treatment package and the comorbidity screen.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — evidence grading, the benzodiazepine-taper craft, family-systems work, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The worry engine, the gates, the treatable headline.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the 6-month + 3-of-6 architecture and explain why uncontrollability is the discriminator." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The alarm with no reset, the worry shield, the body's bill.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why reassurance gives minutes and only exposure gives months." },
    { number: 3, title: "Clinical Practice", description: "Diagnose through the somatic door, run the mimic screen, deliver the package.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can build the plan for a benzo-dependent GAD patient and explain the 8–12 week trial discipline." },
    { number: 4, title: "Indian Context", description: "The 'tension' counter-frame, the family reassurance economy, the nerve-tablet culture.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the two-question turnstile, deliver the counter-frame, and convert a household from reassurance-machine to recovery-economy." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the gates and trial-duration questions cold and navigate to sertraline, escitalopram, paroxetine and venlafaxine lessons." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — GAD criteria logic (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — GAD construct, anxiety-or-fear disorders grouping", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.7.1 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Dugas MJ et al. — intolerance-of-uncertainty model and treatment (Behav Res Ther series)", sourceType: "primary", year: "1998–2010s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Borkovec TD — cognitive-avoidance model of worry; applied relaxation lineage", sourceType: "primary", year: "1980s–2000s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Wells A — metacognitive therapy for GAD", sourceType: "primary", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Bandelow B et al. / Baldwin DS et al. — pharmacotherapy meta-analyses; World Council of Anxiety guideline lineage", sourceType: "meta-analysis", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Rickels K et al. — venlafaxine and pregabalin GAD trial programmes; Davidson JRT — venlafaxine XR GAD trials", sourceType: "trial", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Newman MG et al. — GAD psychological-treatment meta-analyses; CBT durability data", sourceType: "meta-analysis", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Roffman & Newman / Newman — the worry-outcome literature (predicted catastrophes rarely occurring)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "National Mental Health Survey of India 2015–16 (NIMHANS) — neurotic-disorders bucket and treatment gap", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Telles S et al. — yoga trials in Indian anxiety populations (adjunct evidence); GAD-7 instrument literature (Spitzer RL et al.)", sourceType: "primary", year: "2000s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "DSM-5 GAD: excessive, hard-to-control, multi-domain worry more days than not for ≥ 6 months, plus 3 of 6 physical symptoms (restlessness, fatigue, concentration, irritability, muscle tension, sleep), with impairment.", grade: "established", sources: ["S1"] },
    { text: "Uncontrollability is the core discriminator of GAD worry from ordinary worry; the bedside control question operationalises it.", grade: "established", sources: ["S1", "S3"] },
    { text: "Intolerance of uncertainty is the maintaining fuel identified by modern CBT models, and uncertainty-tolerance experiments are part of the evidence-based package.", grade: "supported", sources: ["S4"] },
    { text: "Worry functions as cognitive avoidance — verbal worry blocks deeper image-level emotional processing, which explains reassurance's brief effect.", grade: "supported", sources: ["S5"] },
    { text: "Metacognitive therapy is an alternative GAD formulation with trial support, worth naming in answers.", grade: "supported", sources: ["S6"] },
    { text: "SSRIs (sertraline, escitalopram, paroxetine) and the SNRI venlafaxine XR are first-line pharmacotherapy; venlafaxine carries the best-studied GAD trial programme; pregabalin is an alternative and buspirone a second line for dependence-risk.", grade: "established", sources: ["S7", "S8"] },
    { text: "Full antidepressant trials in GAD require 8–12 weeks at adequate dose; maintenance 12 months after response with slow taper.", grade: "established", sources: ["S7"] },
    { text: "Long-term benzodiazepines in GAD produce tolerance and dependence while leaving the disorder untreated; their legitimate role is a 1–3 week bridge during SSRI initiation.", grade: "established", sources: ["S7", "S3"] },
    { text: "CBT effects persist after treatment ends, unlike pharmacotherapy off-drug — the durability contrast.", grade: "established", sources: ["S9"] },
    { text: "Worry outcome diaries show most predicted catastrophes never occur — the data layer that beats argument.", grade: "supported", sources: ["S10"] },
    { text: "NMHS 2015–16: neurotic/stress-related disorders ~3.5% of Indian adults with 70–80% treatment gaps; somatic presentation and benzo-prescription culture distort recorded prevalence.", grade: "supported", sources: ["S11"] },
    { text: "Slow-exhale-weighted pranayama and yoga modules have supportive small-trial evidence in Indian anxiety populations as adjuncts — not substitutes.", grade: "proposed", sources: ["S12"] },
  ],
};
