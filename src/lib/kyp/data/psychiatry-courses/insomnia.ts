import type { PsychiatryCourse } from "./types";

/**
 * INSOMNIAS — CHRONIC INSOMNIA DISORDER — canonical Psychiatry
 * course (migration batch 5, Group K — sleep-wake disorders, part 2
 * of 4).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/insomnia.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR / ICSD-3, the
 * ACP 2016 CBT-I-first position, Spielman's 3P model, the Morin
 * trial programme, the DORA/d oxepin/ramelteon pharmacology, the
 * Indian pharmacy-dispensing literature) with per-claim provenance.
 *
 * Drug routes: mirtazapine (the comorbid-depression sleep gesture)
 * and amitriptyline (the tricyclic class lesson the low-dose doxepin
 * point rides on) — Z-drugs, ramelteon, doxepin itself, DORAs,
 * melatonin, trazodone and the benzodiazepines have no KYP lessons
 * and are recorded in contentGaps, never invented.
 */
export const insomniaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "insomnia",
  title: "Insomnia",
  shortName: "Insomnia",
  kind: "disorder",
  category: "Sleep-Wake Disorder",
  groupLetter: "K",
  groupName: "Sleep-wake disorders",
  learningPath: ["Psychiatry", "Sleep-Wake Disorders", "Insomnia"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Chronic insomnia disorder. CBT-I is the first line, not a sleeping tablet",
  summary:
    "Insomnia disorder is difficulty falling or staying asleep at least three nights a week for three months, with daytime impairment. Long-term insomnia is maintained by the behaviours around sleep, which is why CBT-I is the first-line treatment and hypnotics only a short-term adjunct.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Apply the DSM-5 gates: 3 nights/week × 3 months + daytime impairment, despite adequate opportunity, and the 'comorbid, not secondary' doctrine.",
    "Use the 3P model (predisposing → precipitating → perpetuating) to explain why the original cause matters less than the maintenance.",
    "Deliver the full CBT-I package: stimulus control, sleep restriction/consolidation, cognitive work, relaxation, sleep hygiene as the adjunct tier.",
    "Run sleep-restriction therapy safely, and know when NOT to (mania risk, seizure risk, driving safety).",
    "Choose medicines correctly when needed: Z-drugs short-term, ramelteon, low-dose doxepin, orexin antagonists, and the benzodiazepine caution tier.",
    "Screen the comorbidities every insomnia work-up owes: depression, anxiety, PTSD, pain, menopause, sleep apnoea, restless legs, thyroid, caffeine, alcohol.",
    "Work the Indian realities: the OTC sedating-antihistamine economy, pharmacy benzo culture, evening-noise homes, night-shift presentations, the tea timeline.",
    "Deliver the shift-worker's four-item light protocol, and recognise when 'insomnia' is a circadian disorder wearing its clothes.",
  ],
  quickFacts: [
    { label: "The gates", value: "3 × 3 + daytime", detail: "≥3 nights/week, ≥3 months, daytime consequences, despite adequate opportunity: the opportunity clause separates insomnia from sleep deprivation (a lifestyle, not a disorder)" },
    { label: "The maintenance engine", value: "The 3P model", detail: "Predisposing (the worrier's wiring) → Precipitating (the job loss, the exam) → PERPETUATING (the treatable layer): early-to-bed, lie-ins, naps, caffeine stacking, nightcap alcohol, the bedroom trained into a wakefulness arena" },
    { label: "The first line", value: "CBT-I, not a tablet", detail: "4–8 sessions; effects durable for years after treatment ends (the ACP 2016 position every major guideline inherits): hypnotics are the short-term adjunct, never the plan" },
    { label: "The conditioning core", value: "The Pavlovian bedroom", detail: "Pair bed with hours of frustrated wakefulness and the bed becomes a WAKEFULNESS trigger: falls asleep in the chair, snaps alert on the pillow; stimulus control (bed = sleep only) reverses it" },
    { label: "The counter-intuitive restore", value: "Sleep restriction", detail: "Compress the sleep window to the actual sleep time (floor 5–6 hours) so pressure runs high; expand by 15–20 minutes per week once efficiency passes ~85–90%: 'you want me to sleep LESS?' is the entry ritual" },
    { label: "The performance paradox", value: "Sleep fails when you TRY", detail: "Trying to sleep is arousal; after months of bad nights, sleep becomes a monitored, scored, feared performance: half of chronic insomnia is fear of insomnia" },
    { label: "The modern pharmacology", value: "Four-drug tier + two traps", detail: "Z-drugs (onset, short courses, complex-behaviour warnings) · ramelteon (onset, non-scheduled) · low-dose doxepin (maintenance) · DORAs (the orexin class, no dependence architecture): versus the OTC antihistamine trap and the benzodiazepine caution tier" },
    { label: "The Indian mismanagement", value: "The pharmacy-first pathway", detail: "Alprazolam, clonazepam and diphenhydramine dispensed without prescription for years: every insomnia consult is an exit-point opportunity: the inventory taken by name, the taper offered with dignity, the behavioural upgrade positioned as the win" },
  ],
  knowledgeGraph: [
    { label: "Sleep–Wake Physiology", type: "condition", href: "/psychiatry/sleep-basics/", note: "The two-process machinery CBT-I retrains: pressure, gate, and the departments" },
    { label: "Excessive Sleepiness & Hypersomnias", type: "condition", href: "/psychiatry/hypersomnia/", note: "The fatigue-vs-sleepiness fork and the apnoea masquerade: screen before hypnotics" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "The Z-drug complex-sleep-behaviour tier: night eating and walking with amnesia" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The classic co-passenger: insomnia doubles later depression risk and is treated WITH the mood disorder" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The nightmare tier and the insomnia-and-fear-of-sleep cascade" },
    { label: "Mirtazapine", type: "drug", href: "/drugs/mirtazapine/", note: "The sedating antidepressant for the comorbid-depression-with-insomnia tier" },
    { label: "Amitriptyline", type: "drug", href: "/drugs/amitriptyline/", note: "The tricyclic class lesson the low-dose doxepin point rides on: dosing honesty included" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the insomnia mechanism, all three are learning-and-machinery stories, which is why the treatment is retraining rather than sedation. The Pavlovian bedroom: the brain is an association machine; pair 'bed' with sleep and the bed itself becomes a sleep-trigger, but pair it with hours of frustrated wakefulness, worrying and clock-checking and it becomes a WAKEFULNESS trigger: the person falls asleep in the sofa-chair but snaps alert the moment the head touches the pillow. This conditioned arousal is the core perpetuator, and stimulus control's target. The pressure budget: sleep pressure (the adenosine meter of the Sleep Basics course) is a daily budget; spend it on the 3 p.m. nap and the 11 p.m. account is short. Chronic insomniacs respond to a bad night with 'bed earlier + morning lie-in + afternoon nap': a triple spending-cut of exactly the pressure the next night needs, guaranteeing a fresh bad night; sleep-restriction therapy is the counter-intuitive restore. The performance spiral: sleep is the one bodily function that fails when you TRY, trying is arousal, the paradox every patient knows at 2 a.m.; after months, sleep becomes a monitored, scored, feared performance ('I must get 8 hours or tomorrow is ruined'), and the sleeper wakes to check the clock and start worrying: cognitive restructuring's target, because half of chronic insomnia is fear of insomnia. The physiological substrate underneath: the hyperarousal model (elevated cognitive and somatic activation, the 'wired and tired' state), which links the three stories and explains why relaxation training floors the arousal without ever being a 'performance of relaxation'.",
    steps: [
      "The predisposed system loads: anxious, over-alert temperament ('my mind races'), the 'sleep-worrier' cognitive style; the hyperarousal tier.",
      "A precipitant ignites: job loss, exam year, pain, grief, depression onset, menopause, shift change, hospital admission; the ward insomnia that never self-corrects.",
      "The adaptations take over: early-to-bed to 'catch sleep', morning lie-ins, naps, caffeine escalation, the nightcap; each spend or drug the pressure system.",
      "Conditioned arousal trains the bedroom into a wakefulness arena: the chair sleeps, the pillow wakes.",
      "The performance spiral closes: sleep becomes monitored, scored, feared; half of chronic insomnia is fear of insomnia.",
      "Hyperarousal consolidates: the wired-and-tired state that survives the original stressor's retirement.",
      "The treatment answers on the same logic: retrain the cues (stimulus control), rebuild the pressure (restriction), dismantle the beliefs (cognitive work), floor the arousal (relaxation); sedation was never the mechanism.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "arousal-networks", name: "Ascending arousal + prefrontal worry circuitry", role: "The hyperarousal substrate: elevated cognitive-somatic activation with impaired sleep-drive circuitry; the wired-and-tired state (Riemann's hyperarousal model).", grade: "supported" },
    { id: "amygdala-threat", name: "Amygdala (the night-watch)", role: "The threat-detection tier that sleep-dread keeps online: the 2 a.m. wake-check-and-worry loop the cognitive module dismantles.", grade: "proposed" },
    { id: "conditioned-circuitry", name: "Conditioned cue-responsivity circuitry", role: "The Pavlovian tier: the bed-as-wakefulness-trigger learned through repeated pairing; stimulus control's extinction target.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Adenosine", symbol: "Ade", role: "The pressure currency: spent by naps and lie-ins, blindfolded by caffeine; the budget the restriction therapy rebuilds.", grade: "established" },
    { name: "Orexin", symbol: "Orx", role: "The wake-hold switchboard. The system the DORA class (suvorexant, lemborexant, daridorexant) blocks to manufacture sleep without dependence architecture.", grade: "established" },
    { name: "GABA", symbol: "GABA", role: "The brake the Z-drugs and benzodiazepines press: effective sedation, tolerance-and-dependence risks, and the architecture suppression that explains unrefreshed pill-sleep.", grade: "established" },
    { name: "Melatonin", symbol: "MLT", role: "The gate signal: a chronobiotic at 0.5–5 mg taken 2–5 hours before desired sleep for phase-shifting: 'pop a 10 mg at bedtime' is pharmacologically naive.", grade: "established" },
  ],
  pathways: [
    {
      id: "3p-pathway",
      name: "The 3P cascade (why the cause retires and the insomnia stays)",
      steps: [
        { label: "Predisposing", detail: "The anxious over-alert temperament, the sleep-worrier wiring, female sex, ageing architecture" },
        { label: "Precipitating", detail: "The igniting event: exam, grief, pain, depression onset, new baby, shift change, hospital admission" },
        { label: "Perpetuating (THE treatable layer)", detail: "Early-to-bed, lie-ins, naps, caffeine stacking, nightcap alcohol, clock-watching, the trained bedroom, sleep-dread: persisting long after the igniting event retires" },
        { label: "Treatment lands here", detail: "CBT-I's every module targets a perpetuator; the original fire is history the formulation uses, not the disease it treats" },
      ],
      clinicalManifestation: "The 3P drawing at the bedside: 'your stressor left months ago; these five habits are the squatters now'.",
      grade: "established",
    },
    {
      id: "conditioning-pathway",
      name: "The Pavlovian bedroom loop",
      steps: [
        { label: "The association machine runs both ways", detail: "Bed paired with sleep becomes a sleep-trigger; bed paired with hours of frustrated wakefulness becomes a wakefulness trigger" },
        { label: "The chair-pillow paradox appears", detail: "Falls asleep in the sofa-chair, snaps alert on the pillow: the conditioned arousal's signature" },
        { label: "Stimulus control reverses it", detail: "Bed = sleep (and intimacy) only; out of bed within ~20 minutes of wakefulness, dim activity, return only when sleepy; no clock, no phone" },
        { label: "The fixed rise-time anchors the circadian half", detail: "Regardless of the night's quality: the gate that makes the retrained pressure land" },
      ],
      clinicalManifestation: "The patient's own report: 'I fall asleep everywhere except the bed'; the diagnosis in one sentence.",
      grade: "established",
    },
    {
      id: "restriction-pathway",
      name: "The pressure rebuild (and its paradox)",
      steps: [
        { label: "The window is set to the actual sleep time", detail: "From the diary: hours slept, not hours desired, with a 5–6 hour floor" },
        { label: "Pressure runs high through the compressed window", detail: "Sleep consolidates; efficiency climbs week by week" },
        { label: "Expansion is earned", detail: "15–20 minutes per week once efficiency passes ~85–90%: the titration rule" },
        { label: "The safety gates hold", detail: "Mania history (sleep loss is the trigger, restrict with mood-stabiliser cover and review), epilepsy (thresholds), safety-critical occupations (driving, timing)" },
      ],
      clinicalManifestation: "Weeks 1–2 are harder (expected, told in advance); weeks 3–6 consolidate; month 4 typically restores 7 hours at 90% efficiency.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "insomnia-onset", time: "The igniting weeks", title: "The precipitant arrives", description: "Job loss, exam year, pain illness, new baby, grief, depression onset, menopause, shift change or hospital admission: normal bad nights that would self-correct if the adaptations did not take over.", phase: "onset" },
    { id: "insomnia-consolidation", time: "Weeks to months", title: "The squatters move in", description: "Early-to-bed, lie-ins, naps, caffeine escalation, the nightcap, the clock-facing bed, the phone: each adaptation solves tonight and bills the system for tomorrow; the bedroom trains into the arena.", phase: "peak" },
    { id: "insomnia-chronic", time: "3+ months", title: "The disorder threshold", description: "Three nights a week with a daytime bill: fatigue (not sleepiness, usually), irritability, concentration and memory complaints, tension headaches, low mood, and the anxiety about the coming night itself, the disorder's own engine.", phase: "duration" },
    { id: "insomnia-treatment", time: "4–8 sessions", title: "The retraining season", description: "The diary; the 3P drawing; stimulus control and restriction (the shock-and-consent conversation); cognitive work on the sleep beliefs; the relapse drill written before the exam and wedding seasons.", phase: "recovery" },
    { id: "insomnia-arc", time: "Years", title: "The durable arc", description: "CBT-I's gains persist for years after treatment ends; relapse windows (exam seasons, weddings, illness) are managed with the drill. The skills are like swimming: once trained, they stay.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Roughly a third of adults report insomnia symptoms in any year; the full chronic disorder runs at ~6–10%; women about 1.5–2× men; prevalence climbs with age and with lower socioeconomic status. Half to two-thirds of chronic insomnia cases travel with a comorbid psychiatric or medical condition: depression the classic co-passenger, and the road runs both directions: new insomnia roughly DOUBLES later depression risk. The treatment gap is inverted here: too much wrong treatment (chronic hypnotics), too little right treatment (CBT-I access is scarce everywhere).",
    indianPrevalence: "NMHS 2015–16 found severe sleep problems reported by a meaningful slice of adults (the insomnia item within its severity module ran in double digits for urban women). The Indian clinical reality has four signature distortions: (1) the pharmacy-first pathway; alprazolam, clonazepam and diphenhydramine dispensed over the counter for years; (2) the OTC 'sleep aid' market (sedating antihistamines, herbal blends) consumed nightly by a large unrecorded population; (3) the environmental insomnia layer: shared rooms, late-evening household life, traffic noise, heat and mosquitoes; (4) the night-shift workforce presenting with insomnia whose root is circadian but whose treatment-seeking is 'tablets for sleep'.",
    lifetimeRisk: "Chronic if the perpetuating layer runs unaddressed; the durable-remission finding is CBT-I's core claim (effects outlast treatment by years), and the relapse windows (exam seasons, weddings, illness) are the drill's territory.",
    genderRatio: "Women 1.5–2× men, climbing with the menopausal transition (flush-locked wakes): the cohort the Indian tier reaches through gynaecologists and faith-healers more than psychiatrists.",
    ageOfOnset: "Rises with age (architecture thinning, comorbidity accumulating, the lie-in-adaptation culture); the young-adult tier is exam-and-screen driven; the menopausal cohort is its own architecture.",
    indianNotes: "The highest-yield Indian practice upgrade: the pharmacy-insomnia pathway (years of prescription-less alprazolam/diphenhydramine dispensing) met by a 10-minute GP protocol (diary, caffeine timeline, stimulus-control leaflet, quantity-limited hypnotic with a written stop-date) converts a dependency mill into a referral funnel.",
  },
  etiology: [
    { category: "biological", factor: "The predisposed arousal system", details: "Anxious, over-alert temperament ('my mind races'); female sex; age-related architecture thinning: the hyperarousal tier the conditioning and cognition build on." },
    { category: "psychological", factor: "The 3P perpetuating engine", details: "Going to bed early and lying awake hours; rising late to 'recover'; naps; caffeine escalation; alcohol as nightcap (REM-suppression + 3 a.m. rebound); clock-watching and sleep-performance anxiety; the bedroom trained into a wakefulness arena, all persisting long after the igniting event retires." },
    { category: "psychological", factor: "Sleep-dread and the performance spiral", details: "'I must get 8 hours or tomorrow is ruined'; 'one bad night wrecks tomorrow'; 'lying quietly is useless': the belief set the cognitive module dismantles, because half of chronic insomnia is fear of insomnia." },
    { category: "social", factor: "The Indian delivery architecture", details: "Bedtime chai (caffeine in the onset window); the joint-family night (TV serials, late dinners, relatives' calls); the 10 p.m. dinner as its own engine; wedding/festival seasons; night-shift economies presenting with 'insomnia' whose root is circadian." },
    { category: "biological", factor: "The medical/psychiatric perpetuators (screen every case)", details: "Depression, anxiety disorders, PTSD, psychosis-spectrum; restless legs syndrome (the 9 p.m. crawl); obstructive sleep apnoea (the snoring, unrefreshing-sleep masquerade); chronic pain, acid reflux, nocturia/prostate, hyperthyroidism, menopausal hot flushes; steroids/SSRIs/bronchodilators; the 8-cups-of-chai load; alcohol as self-medication." },
  ],
  symptomClusters: [
    {
      category: "1. The night-time signature",
      symptoms: ["Onset insomnia: lying awake >20–30 minutes at sleep-start (the racing mind, the conditioned arousal)", "Maintenance insomnia: waking mid-night, returning slowly (pain, apnoea, alcohol rebound, menopausal flush, depression's early-morning variants)", "Terminal insomnia: waking too early, unable to return (the classic depressive signature, but also the phase-advanced elder)", "Non-restorative sleep: hours slept, waking unrefreshed (apnoea and substance-suppressed architecture flags)"],
    },
    {
      category: "2. The daytime bill",
      symptoms: ["Fatigue (NOT sleepiness, usually, the distinction from hypersomnias: 'exhausted but could not nap' vs 'could fall asleep now')", "Irritability, low mood; concentration and memory complaints", "Tension headaches; the anxiety about the coming night itself: the disorder's own engine", "Performance dread: the evening's anticipatory misery as bedtime approaches"],
    },
    {
      category: "3. The behavioural signature to elicit",
      symptoms: ["Early-to-bed to 'catch sleep'; morning lie-ins to 'recover'", "The afternoon nap (the 3 p.m. chair-nap the diary must catch by name)", "Caffeine timeline: the cups AND the clock-times (the 9 p.m. chai); alcohol quantified honestly ('for sleep' is the phrase to catch)", "The clock-facing bed, the phone in bed, the bed-wakefulness pattern (chair sleeps, pillow wakes)"],
    },
    {
      category: "4. The Indian camouflage cluster",
      symptoms: ["The pharmacy-first history: years of alprazolam or diphenhydramine without prescription; the inventory taken by name", "The 'nerve tonic' and herbal-blend tier consumed nightly, unrecorded", "The household night: late dinners (the 10 p.m. engine), TV schedules, shared rooms, relatives' calls", "The night-shift presentation: 'tablets for sleep' requested at 8 a.m. after a shift: a circadian disorder wearing insomnia's clothes"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Insomnia disorder (780.52-2 / G47.00)",
      criteria: [
        "A complaint of dissatisfaction with sleep quantity or quality: difficulty initiating, maintaining, or early waking with inability to return.",
        "Occurring DESPITE adequate opportunity and circumstances (the opportunity clause that separates the disorder from sleep deprivation, a lifestyle, not a diagnosis).",
        "With daytime consequences (fatigue, attention-mood impairment, interpersonal or occupational dysfunction).",
        "≥3 nights/week; ≥3 months.",
        "Not better explained by another sleep disorder (apnoea, restless legs, circadian misalignment), substance effects, or coexisting conditions doing the whole work: comorbid insomnia is diagnosed ALONGSIDE them, not 'secondary' (the modern doctrine).",
      ],
      duration: "The chronic threshold: 3×3; short-term insomnia (<3 months) is its own management tier (acute stress, shift, travel. Treat the driver, prevent the adaptations).",
      indianNote: "The interview owes three screening anamneses: snoring/witnessed pauses (apnoea), the 9 p.m. leg-crawl (restless legs), and the mood/PTSD screens: plus the OTC and pharmacy inventory by name. The two-week diary is the examination of this disorder: bedtime, lights-out, latency, wakes, out-of-bed, naps (all), caffeine/alcohol times, perceived quality; no other instrument localises the perpetuating pattern this well.",
    },
    {
      system: "ICSD-3 (AASM)",
      code: "Chronic insomnia disorder",
      criteria: [
        "The same frequency-duration-impairment architecture, emphasising the chronicity as a disorder in its own right with its own treatment (CBT-I), not merely a symptom of whatever travels with it.",
        "Paradoxical insomnia ('sleep-state misperception') sits within the family: the patient reports near-zero sleep; partners and actigraphy show hours of it: a real distress entity, treated with the same cognitive architecture.",
        "The instrument tier: insomnia severity index (ISI) as the tracking measure (named, not reproduced); actigraphy where diary integrity is doubtful; polysomnography NOT routine: reserved for suspected apnoea/parasomnia.",
      ],
      duration: "Same 3×3 gates.",
      indianNote: "The Indian version of the diary conversation: 'when do you sleep, ALL of it, including the 3 p.m. chair-nap?': the nap economy, the chai timeline, and the household schedule ride inside every Indian diary.",
    },
  ],
  severityScales: [
    {
      name: "ISI (named, not reproduced)",
      fullName: "Insomnia Severity Index: the tracking instrument",
      measures: "The seven-item self-rating that tracks severity and treatment response across the CBT-I arc: named here as the measure the literature runs on, with the diary (not the scale) doing the diagnostic work.",
      ranges: [
        { min: 0, max: 7, severity: "No clinically significant insomnia", action: "Sleep-hygiene and expectation tier; the diary keeps the pattern honest" },
        { min: 8, max: 14, severity: "Subthreshold", action: "The early CBT-I modules (stimulus control, caffeine arithmetic, the anchor); watch the perpetuators forming" },
        { min: 15, max: 21, severity: "Moderate", action: "The full CBT-I package indicated; medication only as short-term adjunct per the guidelines' tiering" },
        { min: 22, max: 28, severity: "Severe", action: "Full package plus the comorbidity screen the severity demands; specialist referral where CBT-I access requires it" },
      ],
      indianNote: "The ISI is the research tier's currency; the Indian clinical workhorse is the diary plus the ISI-concept: severity tracked at each review against the diary's arithmetic (in-bed vs asleep hours).",
    },
    {
      name: "The efficiency axis",
      fullName: "Sleep efficiency (the titration instrument)",
      measures: "Time-asleep ÷ time-in-bed × 100: the number the sleep-restriction protocol runs on, read from the diary every week.",
      ranges: [
        { min: 0, max: 65, severity: "Severe inefficiency", action: "The compressed window applies (floor 5–6 hours); expect weeks 1–2 harder: consent scripted in advance" },
        { min: 66, max: 84, severity: "Below the expansion gate", action: "Hold the window; troubleshoot the perpetuators the diary still shows (naps, caffeine timing, the lie-in)" },
        { min: 85, max: 100, severity: "Expansion gate passed", action: "Widen by 15–20 minutes per week; the titration continues until the target duration stabilises" },
      ],
      indianNote: "The arithmetic conversation converts the family: '9.5 hours in bed, 5.2 slept, 55% efficiency: the bed is spending 4 hours teaching itself wakefulness'; restriction is then an upgrade, not a punishment.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Sleep deprivation (lifestyle)", distinguishingFeatures: "Adequate sleep possible when opportunity exists: the new parent, the gaming nights, the two jobs.", keyDifferentiator: "The opportunity clause: deprivation is an arithmetic problem (opportunity), insomnia is a machinery problem (pressure-and-cues despite opportunity)." },
    { condition: "Delayed sleep-phase pattern (circadian)", distinguishingFeatures: "Normal sleep ONSET AND MAINTENANCE at late times; weekends reveal the pattern.", keyDifferentiator: "The circadian question: on free days does sleep arrive easily at 2 a.m. and run 9 hours? Then the treatment is timing (light, chronobiotics), not restriction." },
    { condition: "Obstructive sleep apnoea", distinguishingFeatures: "Snoring, witnessed pauses, unrefreshing sleep, weight; nocturia, morning headaches.", keyDifferentiator: "The partner's interview plus the screen (STOP-BANG-style questions) before any hypnotic: the classic masquerade in the overweight snorer with 'treatment-resistant' complaints." },
    { condition: "Restless legs syndrome", distinguishingFeatures: "The 9 p.m. crawl-urge relieved by movement; sleep-onset failure follows the legs.", keyDifferentiator: "The urge's timing and movement-relief: iron studies where indicated; the legs' own treatment tier rather than hypnotics." },
    { condition: "Depression (and the comorbid doctrine)", distinguishingFeatures: "Early waking, mood, anhedonia, diurnal variation.", keyDifferentiator: "Treated TOGETHER, not sequentially: the SSRI for the depression with the sleep plan riding along; the doctrine question examiners ask directly." },
    { condition: "Anxiety / PTSD", distinguishingFeatures: "The racing mind; the nightmare pattern respectively.", keyDifferentiator: "The trauma screen and the nightmare history route to the PTSD architecture (imagery rehearsal lives in the Parasomnias course)." },
    { condition: "Paradoxical insomnia", distinguishingFeatures: "Near-zero reported sleep; partners and actigraphy show hours.", keyDifferentiator: "The measurement mismatch is the diagnosis. The same cognitive-and-behavioural package treats the distress; the objective record usually surprises both patient and clinician." },
    { condition: "Substance/medication effect", distinguishingFeatures: "The tea, the steroid, the SSRI, the bronchodilator, the 8 p.m. whisky.", keyDifferentiator: "The timeline arithmetic: every insomnia work-up quantifies caffeine, alcohol and the medication list by name and clock-time." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "CBT-I — the first-line package (4–8 sessions)",
      description: "The modules in order of muscle: (1) Sleep hygiene as the FOUNDATION tier, not the treatment; consistent rise-time (the circadian anchor, fixed BEFORE bedtime), caffeine cut-off 8 hours before bed, no alcohol as nightcap, dim evening light, cool dark room, the Indian-environment tier (net, fan timing, the household quiet-hour). (2) Stimulus control, the conditioning reversal: bed only for sleep and intimacy; out of bed within ~20 minutes of wakefulness, to a dim chair, back only when sleepy; no phone or clock-watching in bed; fixed rise-time regardless of the night. (3) Sleep restriction/consolidation, the pressure rebuild: window set to actual average sleep time (floor 5–6 hours), anchored to the fixed rise-time; expand 15–20 minutes/week once efficiency passes ~85–90%. (4) Cognitive restructuring of the sleep beliefs (the 8-hours myth (adults range 6–9), 'lying awake is useless' (quiet rest is physiologically valuable) but relocated out of the bed), the one-bad-night catastrophe tested against the record, the performance paradox ('sleep arrives by invitation, not pursuit'). (5) Relaxation training: slow-exhale breathing, progressive muscle relaxation: arousal-flooring adjuncts, never a performance of relaxation. (6) The relapse-prevention module: the drill for the bad-night windows (exam seasons, weddings, illness): the rules that hold (rise-time, no early bed), the rules that may bend (one recovery lie-in capped at +1 hour).",
      whenToUse: "Every chronic case: first line across all major guidelines (the ACP 2016 position is the citable anchor); the durable superiority is the claim every other tier is measured against.",
      indianContext: "The Indian delivery: the modules fit the 10-minute GP protocol's extension (diary + stimulus-control leaflet + the tea timeline) at the low-intensity end; private CBT-I ≈ ₹600–1,500/session at the specialist end; the district/tele tier (Tele-MANAS 14416) delivers basic sleep-protocol counselling; the household negotiated wherever the environment maintains the problem.",
    },
    {
      category: "pharmacotherapy",
      name: "The honest tiered pharmacology",
      description: "Short-term/necessity use during CBT-I initiation, travel and acute stress windows: quantity-limited courses with the taper written from day one. The tier: Z-drugs (zolpidem 5–10 mg, zopiclone/eszopiclone) for onset-insomnia, short courses, the complex-sleep-behaviour warnings (sleepwalking/sleep-eating; contraindicated with evening alcohol: the Parasomnias connection). Ramelteon (melatonin-receptor agonist) for the onset tier: non-scheduled profile, useful in elders and dependence-risk groups. Low-dose doxepin 3–6 mg for maintenance-flavoured insomnia: histamine-blockade mechanism, no dependence signal. Orexin antagonists (DORAs: suvorexant, lemborexant, daridorexant); the modern class, hypnotic by wake-promotion blockade, no dependence architecture, next-day-load monitored. Benzodiazepines: the caution tier; effective acutely, tolerance/dependence/fragmentation/cognition risks, never initiated long-term in elders (falls, confusion absolutely). What NOT to prescribe as nightly treatment: sedating antihistamines (diphenhydramine, promethazine); anticholinergic load, tolerance, fall-risk, India's most-consumed OTC sleep trap. Melatonin (OTC): a chronobiotic, not a sedative; 0.5–5 mg taken 2–5 hours before desired sleep for phase-shifting (and jet-lag protocols); 'pop a 10 mg at bedtime' is pharmacologically naive. Trazodone 25–100 mg: the pragmatic Indian antidepressant-hypnotic for the comorbid-depression tier, morning-load monitored. Where psychiatric comorbidity IS the insomnia: treat the driver. SSRI for depression with the sleep plan riding along (the comorbid, treat-together doctrine).",
      whenToUse: "Adjunct to CBT-I, or bridge during its initiation; acute windows; never as the long-term plan itself.",
      indianContext: "The Indian pharmacy reality makes the written stop-date non-negotiable: zolpidem 10 mg ≈ ₹60–150/week of use; ramelteon scarce/imported; doxepin formulation-limited (the tricyclic micro-dose pragmatism where unavailable, with informed counsel); trazodone ≈ ₹100–200/month; melatonin 3 mg ≈ ₹150–400/month (unregulated quality variance, buy reputable); the OTC inventory (alprazolam, diphenhydramine, 'nerve tonics') taken BY NAME at every consult, with the taper-or-stop plan offered with dignity.",
    },
    {
      category: "lifestyle",
      name: "The comorbidity and driver screen (the standing orders)",
      description: "Every insomnia work-up owes: the apnoea screen (snoring/witnessed pauses, before any hypnotic), the restless-legs question (the 9 p.m. crawl), the mood/PTSD screens, the thyroid consideration, the medication list audit (steroids, SSRIs, bronchodilators, diuretics' nocturia), the caffeine-and-alcohol timeline, and the menopausal tier (flush-locked wakes: HRT counsel where appropriate, CBT-I for the perpetuating layer). The shift-worker's four-item light protocol where the root is circadian: black-out curtains and a fixed anchor-sleep window; sunglasses on the morning commute home; caffeine ceiling at ~1–2 a.m.; the weekend compromise (one capped transition day, not the full flip).",
      whenToUse: "Standing: the screens run at presentation and at every treatment-resistant review; 'treatment-resistant insomnia' is most often an unscreened driver.",
      indianContext: "The menopausal cohort reaches gynaecologists and faith-healers more than psychiatrists: the honest tier (HRT counsel individualised, CBT-I for the maintenance layer, the family briefed that the 2 a.m. wakeful mother is symptomatic, not 'difficult'). The night-shift presentation gets the light protocol, not the 8 a.m. hypnotic that deepens the derangement.",
    },
  ],
  safety: {
    redFlags: [
      "Sleep restriction in bipolar-spectrum patients: sleep loss is mania's trigger: restrict only with mood-stabiliser cover and psychiatric review during initiation",
      "Epilepsy: sleep deprivation lowers seizure thresholds: the protocol timed and supervised",
      "Safety-critical occupations (drivers, machine operators): restriction's first weeks degrade performance: timing matters (leave, weekends)",
      "The unrefreshed snorer on hypnotics: apnoea deepened by sedation: the screen precedes the prescription",
      "Z-drug complex sleep behaviours with evening alcohol: sleepwalking, sleep-driving, sleep-eating: contraindicated together",
      "The benzodiazepine tolerance creep in elders: falls, confusion, fractures: never initiate long-term in this cohort",
    ],
    urgentGuidance:
      "The order of operations: (1) the diary and the screens before any prescription (apnoea, legs, mood, thyroid, the medication-and-caffeine inventory); (2) the CBT-I offer made explicitly as the world-guideline first line: 'the first-line treatment is a therapy, not a tablet, 4–8 sessions, and the results outlast the treatment by years'; (3) any hypnotic quantity-limited with the stop-date written from day one; (4) the pharmacy inventory at every Indian consult (the years-long alprazolam/diphenhydramine history taken by name, the taper offered with dignity); (5) the mania/epilepsy/driving cautions priced into every restriction plan; (6) suicidal-ideation screening where the insomnia travels with depression: the doubled-risk road runs both directions.",
  },
  drugLinks: [
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      role: "The comorbid-depression-with-insomnia gesture",
      rationale: "The sedating antidepressant used at low dose for depression travelling with sleep loss: the pragmatic Indian tier where the comorbid doctrine ('treat the driver') meets the night; morning-load monitoring applies (and the RBD association taught in the Parasomnias course is the reverse-side caution in over-50 men).",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Antidepressant-hypnotic use for insomnia is off-label pragmatism; the first line for insomnia itself remains CBT-I, with medication as the short-term adjunct.",
    },
    {
      name: "Amitriptyline",
      slug: "amitriptyline",
      role: "The tricyclic class lesson the doxepin point rides on",
      rationale: "The low-dose tricyclic pharmacology (histamine blockade at doses far below antidepressant range) is the class mechanism doxepin 3–6 mg carries the specific evidence for: amitriptyline's lesson teaches the mechanism and the caution tier (anticholinergic load, elder fall-risk) the Indian OTC-market patient needs explained; doxepin itself has no KYP lesson (recorded in gaps).",
      evidenceLevel: "textbook",
      clinicalDisclaimer: "Sedating tricyclics as nightly insomnia treatment carry the anticholinergic burden and elder fall-risk: the class is taught here for mechanism and caution, with the specific maintenance evidence belonging to low-dose doxepin where available.",
    },
  ],
  contentGaps: [
    "Zolpidem and the Z-drug class, ramelteon, doxepin (the specific 3–6 mg formulation), the orexin antagonists (suvorexant, lemborexant, daridorexant), trazodone, melatonin, diphenhydramine and the benzodiazepines (alprazolam, clonazepam) have no KYP drug lessons. Their evidence is taught here, the routes never invented.",
    "The benzodiazepine-exit protocols (the taper architecture for India's pharmacy-acquired dependence) have no dedicated KYP lesson; this course carries the exit-framing, the Misuse-note tier carries the rest where it exists.",
    "CBT-I delivery itself (therapist training, digital CBT-I platforms) has no dedicated KYP lesson: the module architecture lives in this course.",
  ],
  patientGuide: {
    whatIsIt:
      "Insomnia becomes a disorder when poor sleep settles in (three or more nights a week for three or more months, leaving daytime fatigue, low mood, irritability or poor concentration) despite having enough time and a reasonable place to sleep. The counter-intuitive science: what keeps it going is rarely what started it. The illness, the stress or the exam that ignited it may be long gone, but the habits that formed around it (going to bed early to 'catch' sleep, lying awake for hours, recovering with lie-ins and naps, the evening drink, the dread of the bed itself) keep the machinery broken for years. The bed itself can even learn wakefulness: the brain pairs it with hours of frustrated lying-awake, until the sofa sleeps you and the pillow wakes you.",
    whatCausesIt:
      "A vulnerable system (an over-alert, worrying temperament), an igniting event (stress, illness, grief, shift change, menopause, a new baby), and then the adaptations: the treatable layer. Caffeine after mid-afternoon, alcohol as a nightcap (it sedates, then rebounds you awake at 3 a.m.), naps that spend the pressure the night needs, and the growing fear of sleep itself each add an engine. Medicines, thyroid trouble, pain, reflux, leg restlessness and undiagnosed breathing pauses in sleep deserve their own check.",
    symptoms:
      "Lying awake more than 20–30 minutes at the start of the night, waking repeatedly mid-night, or waking too early unable to return; waking unrefreshed; and the daytime bill: tiredness (usually without being able to nap), irritability, poor concentration, headaches, low mood, and dread as bedtime approaches. The pattern to report honestly: the after-lunch nap, every cup of tea or coffee with its clock-time, any evening alcohol ('for sleep' is the phrase to catch), the phone in bed, and whether the sofa sleeps you while the bed wakes you.",
    treatment:
      "The world-guideline first line is not a sleeping tablet: it is a structured 4–8 session programme (CBT-I) that retrains the sleep system, re-learning the bed as a sleep place, rebuilding the sleep pressure, dismantling the beliefs that make sleep a performance, and writing the relapse drill for the bad-night seasons. The results outlast the treatment by years. Tablets have an honest short-term role: quantity-limited, stop-date written from day one, chosen from the modern tiers, and the over-the-counter sedatives (antihistamines) and pharmacy-sleeping-pills culture are the trap this clinic helps you exit, with dignity and a plan.",
    selfHelp: [
      "Fix the wake-up time first: the whole system anchors to the morning, not the evening.",
      "Bed for sleep only: awake ~20 minutes means out of bed, dim chair, back only when sleepy; the bed must relearn sleep.",
      "Let the nap go (or take it before 3 p.m., under 30 minutes): it spends the pressure the night needs.",
      "Cut caffeine 8 hours before bed: the evening chai included; the family's serving habit is part of the prescription.",
      "Retire the nightcap: alcohol sedates and then rebounds you awake at 3 a.m., with interest.",
      "Turn the clock away: clock-watching is performance-monitoring, and sleep fails when watched.",
      "Write the worry list before bed, not in it; the day's concerns get their appointment outside the bedroom.",
      "Keep the relapse drill ready: exam seasons and weddings will come; the rules that hold (rise-time), the rules that may bend (one capped lie-in).",
    ],
    whenToSeekHelp: [
      "Three nights a week for three months with a daytime bill: the disorder threshold, and the CBT-I referral",
      "Loud snoring, witnessed breathing pauses, or waking gasping: the apnoea screen before any sleeping tablet",
      "Legs crawling restlessly in the evening, relieved only by moving: the restless-legs assessment",
      "Six years of pharmacy sleeping pills: the exit consultation (never stop abruptly on your own; the taper is structured and works)",
      "Insomnia travelling with low mood, hopelessness or suicidal thoughts: same-day help (Tele-MANAS 14416, free, 24×7, multiple Indian languages)",
      "Sleep-walking or sleep-eating after starting a sleeping tablet: stop the tablet, same-week review",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages): basic sleep-protocol counselling",
      "General psychiatry OPDs: the diary, the screens and the CBT-I referral tier",
      "Metro sleep-medicine programmes for the apnoea/parasomnia study tier and refractory cases",
      "The 10-minute GP protocol (diary, caffeine timeline, stimulus-control leaflet, quantity-limited prescription with a stop-date): ask your GP for it by name",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific insomnia guideline exists; management follows the international architecture (ACP 2016's CBT-I-first position, the AASM algorithm, the European guideline's cognitive-hyperarousal model) with Indian adaptation craft: the pharmacy-exit protocols, the household negotiation, the tea timeline, the shift-work light protocols.",
    systemContext: "The Indian presenting reality is the pharmacy-first pathway: alprazolam, clonazepam and diphenhydramine dispensed without prescription for years, the OTC 'sleep aid' market (sedating antihistamines, herbal blends, 'nerve tonics') consumed nightly by an unrecorded population, and the night-shift workforce asking for 'tablets for sleep' at 8 a.m. after a shift. Every insomnia consult is an exit-point opportunity: the inventory taken by name, the taper-or-stop plan offered with dignity, and the behavioural treatment positioned as the upgrade; the 10-minute GP protocol (diary, caffeine timeline, stimulus-control leaflet, quantity-limited hypnotic with a written stop-date) converts a dependency mill into a referral funnel.",
    programmeContext: "CBT-I access is scarce everywhere and India is no exception: private CBT-I ≈ ₹600–1,500/session in metros; the district/tele tier (Tele-MANAS 14416) delivers basic sleep-protocol counselling; the stimulus-control leaflet and the diary are the low-cost, high-yield instruments every OPD can run. The menopausal cohort reaches gynaecologists and faith-healers more than psychiatrists: the honest tier delivered wherever they arrive.",
    costConsiderations: "Zolpidem 10 mg ≈ ₹60–150/week of use; ramelteon scarce/imported; doxepin formulation-limited (tricyclic micro-dose pragmatism where unavailable, with informed counsel); trazodone ≈ ₹100–200/month; melatonin 3 mg ≈ ₹150–400/month (unregulated quality variance, buy reputable); the diary is a notebook; stimulus control is a leaflet; CBT-I private ≈ ₹600–1,500/session. The economic headline: the pharmacy pathway's true cost is the dependency it manufactures. The exit consultation is the highest-return intervention in Indian insomnia care.",
    culturalConsiderations: "The tea timeline is the first intervention: 'bedtime chai' after dinner places caffeine squarely in the onset window; the family's serving habit must be negotiated, not just the patient's cup. The joint-family night (late dinners, TV serials, relatives' calls, shared rooms, co-sleeping children) maintains insomnia environmentally: the household quiet-hour, the room-shuffle, the earplugs-and-eye-mask tier are legitimate prescriptions. The 10 p.m. dinner is its own insomnia engine (the 3-hours-before-bed rule where culturally feasible). Faith-morning schedules and Ramadan's month-shifted sleep are rhythm-facts, not disorders: assess the whole pattern before pathologising the clock-time.",
    patientCounselling: [
      "The pharmacy-exit script: 'the word is tolerance-and-dependence, the situation is extremely common in India, you are not alone and not at fault (the exit is structured and works') dignity first, taper plan second, upgrade framing third.",
      "The household negotiation: the quiet-hour, the dinner timing, the room-shuffle; prescribed as the environmental sleep medicine it is, with the family briefed that the 2 a.m. wakeful member is symptomatic, not difficult.",
      "The chai conversation: the cut-off prescription (no caffeine after ~3 p.m., the evening chai switched to milk/lemon-grass variants) delivered with the half-life arithmetic, and addressed to the household's serving culture.",
      "The night-shift script: 'the tablets are fighting the sun, literally'; the light protocol (sunglasses commute, black-out curtains, anchor sleep, caffeine ceiling) replacing the 8 a.m. hypnotic.",
      "The elder script: no long-term benzodiazepine, ever; falls and confusion are the specific dangers; the antihistamine purchased over the counter is the same trap in a gentler costume.",
    ],
  },
  decisionPath: {
    title: "The insomnia consultation",
    nodes: [
      {
        id: "start",
        question: "A sleep complaint arrives. What is the two-week diary's architecture?",
        branches: [
          { label: "Insufficient opportunity (the arithmetic)", next: "deprivation-path" },
          { label: "Normal sleep at late times; weekend reveal", next: "circadian-path" },
          { label: "Snoring, pauses, unrefreshed, weight", next: "apnoea-path" },
          { label: "The 3×3 gates met despite adequate opportunity", next: "chronic-gate" },
        ],
      },
      {
        id: "chronic-gate",
        question: "Chronic insomnia disorder: which tier drives it?",
        branches: [
          { label: "The perpetuating engine (habits, conditioning, beliefs)", next: "cbti-path" },
          { label: "The comorbid driver (depression, pain, menopause, PTSD)", next: "comorbid-path" },
          { label: "The pharmacy history (years of dispensed sedation)", next: "exit-path" },
        ],
      },
      {
        id: "cbti-path",
        question: "The CBT-I package.",
        recommendation: "The modules: stimulus control (bed = sleep only; out at ~20 minutes; no clock or phone in bed), sleep restriction (window to actual sleep time, floor 5–6 hours, expand at ~85–90% efficiency), cognitive restructuring (the 8-hours myth, the performance paradox), relaxation, sleep hygiene as adjunct, with the safety gates priced (mania, epilepsy, driving) and the relapse drill written before the exam and wedding seasons.",
      },
      {
        id: "comorbid-path",
        question: "The comorbid, treat-together doctrine.",
        recommendation: "The driver treated as its own disease (SSRI for depression with the sleep plan riding along; the PTSD nightmare tier with imagery rehearsal; the menopausal flush counsel with the perpetuating layer addressed); insomnia is diagnosed ALONGSIDE, never 'secondary', and both plans share the diary and the anchor.",
      },
      {
        id: "exit-path",
        question: "The pharmacy-exit consultation.",
        recommendation: "The inventory by name (alprazolam, clonazepam, diphenhydramine, the 'tonics'); the dignity script; the structured taper (never abrupt); the CBT-I upgrade positioned as the win, not the punishment; the quantity-limited hypnotic with the written stop-date where a bridge is needed; the follow-up rhythm that outlives the prescription.",
      },
      {
        id: "deprivation-path",
        question: "Insufficient opportunity: an arithmetic problem.",
        recommendation: "The prescription is sleep: the structured schedule expansion (30 minutes earlier per fortnight anchored to the fixed rise-time); the digital-evening curfew negotiated honestly; the occupational advocacy where the job forbids the hours; the deprivation was never a machinery problem, never medicate an arithmetic error.",
      },
      {
        id: "circadian-path",
        question: "A circadian disorder wearing insomnia's clothes.",
        recommendation: "The timing tier: the fixed rise-time with morning light; evening light discipline; melatonin as chronobiotic (0.5–5 mg, hours before desired sleep: the timing science taught explicitly); the shift-worker's protocol (sunglasses commute, black-out curtains, anchor sleep, the 2 a.m. caffeine ceiling, the capped weekend transition); hypnotics at 8 a.m. after a shift deepen the derangement: the sun, not the tablet, is the treatment variable.",
      },
      {
        id: "apnoea-path",
        question: "The masquerade that precedes every hypnotic decision.",
        recommendation: "The screen (snoring, witnessed pauses, unrefreshing sleep, weight, nocturia, morning headaches. STOP-BANG-style questions; the partner's interview); the sleep-study referral; CPAP's conversation where positive (the Hypersomnia course's programme); hypnotics withheld until the airway is answered: sedation deepens the undiagnosed apnoea's burden.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Prescribing long-term hypnotics as the 'management' of chronic insomnia",
      why: "The guidelines are unambiguous: CBT-I is first line with durable superiority; the tablets force sleep chemically without touching the maintaining machinery and produce tolerance and dependence instead of cure.",
      correction: "Any hypnotic is quantity-limited with the stop-date written from day one; the CBT-I offer made explicitly at the same consultation; the pharmacy inventory taken at every Indian visit.",
    },
    {
      mistake: "Missing sleep apnoea behind 'insomnia' in the overweight snorer",
      why: "The classic masquerade: hypnotics deepen the undiagnosed apnoea's oxygen burden and the 'treatment-resistant' label accumulates.",
      correction: "The screen runs before any prescription: snoring, witnessed pauses, unrefreshing sleep, the partner's interview; the study where the cluster is positive; the third antidepressant is never the answer to an airway problem.",
    },
    {
      mistake: "Forgetting the mania hazard of sleep-restriction initiation in bipolar patients",
      why: "Sleep loss is mania's most reliable trigger: restriction's first weeks are engineered sleep loss.",
      correction: "Bipolar-spectrum history asked before every restriction plan: restrict WITH mood-stabiliser cover and psychiatric review during initiation, or defer and use the gentler stimulus-control tier first.",
    },
    {
      mistake: "Melatonin 10 mg at bedtime as a nightly knockout",
      why: "The chronobiotic misuse: melatonin works on TIMING at 0.5–5 mg taken 2–5 hours before desired sleep (phase-shifting contexts, shift work, jet lag, delayed phase); as a sedative it mostly disappoints.",
      correction: "The dosing-and-timing science taught explicitly; the phase question asked first (is this a timing problem or a pressure problem?); the OTC quality variance addressed (reputable sources).",
    },
    {
      mistake: "Missing restless legs behind onset-insomnia",
      why: "The 9 p.m. crawl-urge relieved by movement is volunteered almost never, and treated with hypnotics that miss it entirely.",
      correction: "The direct question in every onset-tier work-up; the legs' own treatment tier (iron studies where indicated, the dopamine-agonist architecture) instead of the wrong prescription.",
    },
    {
      mistake: "The night-shift worker's circadian disorder treated with morning hypnotics",
      why: "Hypnotics at 8 a.m. after a shift fight the sun and deepen the derangement: the worker 'sleeps' badly at the wrong circadian phase and wakes unrefreshed.",
      correction: "The four-item light protocol: black-out curtains and anchor-sleep window; sunglasses on the morning commute; caffeine ceiling at ~1–2 a.m.; the capped weekend transition (one partial flip, not the full human-day collapse).",
    },
    {
      mistake: "Approving the early-to-bed strategy",
      why: "The most natural mistake in insomnia: the early bed adds empty wakeful hours in the wake-maintenance zone, trains the bed further, and spends nothing of the pressure the night needs.",
      correction: "The fixed rise-time anchors; bedtime follows sleepiness; the window is matched to what is actually slept: restriction, not dilution, is the restore.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The DSM-5 gates (3×3 + daytime + opportunity) and the 'comorbid, not secondary' doctrine.",
        "The 3P model with five perpetuators named.",
        "The CBT-I components and the sleep-restriction titration rule.",
        "The pharmacological tiers with the specific drugs and their cautions.",
        "The three screening anamneses every insomnia work-up owes.",
      ],
      practical: [
        "Read the two-week diary aloud: the in-bed/asleep arithmetic, the nap economy, the caffeine timeline, and present the 3P formulation.",
        "Deliver the stimulus-control rules as a patient handout.",
      ],
      longAnswer: [
        "Chronic insomnia disorder: diagnostic criteria and management (CBT-I first, the honest pharmacology).",
        "A 52-year-old homemaker with 18 months of poor sleep, five cups of tea and a nightly brandy: the assessment and plan.",
      ],
    },
    neetPg: {
      highYield: [
        "Gates: ≥3 nights/week, ≥3 months, daytime consequences, adequate opportunity; the deprivation discriminator; diagnosed WITH comorbidities ('comorbid', never 'secondary').",
        "3P model (Spielman): predisposing → precipitating → perpetuating; the PERPETUATING layer is the treatment target.",
        "CBT-I = first line (ACP 2016 the citable anchor); effects durable post-treatment; hypnotics only short-term and quantity-limited.",
        "Sleep-restriction safety: mania history, epilepsy, driving occupations; the three standard cautions.",
        "New insomnia roughly DOUBLES later-depression risk (the longitudinal marker).",
        "Stimulus control 'BOOT': Bed for sleep/intimacy only; Out of bed if awake ~20 min; Only sleep when sleepy; Time: fixed rise; plus no clock-watching.",
        "Z-drug complex sleep behaviours warning; no evening alcohol co-use (the forensic-adjacent tier).",
        "DORAs (orexin antagonists: suvorexant, lemborexant, daridorexant) = the modern no-dependence class; ramelteon = onset, non-scheduled; low-dose doxepin = maintenance.",
        "Melatonin = chronobiotic (0.5–5 mg, 2–5 hours before desired sleep): timing-medicine, not force-medicine.",
        "Diphenhydramine nightly = the OTC trap (elder anticholinergic load, tolerance).",
        "Paradoxical insomnia exists: the measurement-mismatch diagnosis (partner and actigraphy show the sleep the patient denies).",
        "Screen every insomnia for: apnoea, restless legs (the 9 p.m. crawl), depression, the caffeine-and-alcohol timeline.",
      ],
      pyqConcepts: [
        "The two-process logic applied: conditioned arousal (the Pavlovian bedroom), the pressure budget (the nap-and-lie-in spending), the performance paradox (the cognitive tier).",
        "The Indian exam corner: 'insomnia, diagnostic criteria and management', 'CBT-I components' (the evergreen), 'pharmacotherapy of insomnia, classes and cautions', '3P model', 'sleep hygiene principles'; plus the Indian-context marks: the pharmacy-first pathway, the OTC antihistamine trap, the joint-family adaptations, shift-work presentations.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 52-year-old Kochi homemaker: insomnia since her son's accident 18 months ago (he has fully recovered), in bed 9 p.m.–6:30 a.m. 'to make sure', waking at 2 and clock-watching, the 3 p.m. nap 'to survive', five cups of tea including the 9 p.m. cup, a nightly brandy 'the only thing that works', diphenhydramine most nights, diary showing 9.5 hours in bed and 5.2 slept (55% efficiency): the 3P formulation with the precipitant long gone and four separate maintenance engines named (the nap, the tea, the brandy, the antihistamine), the CBT-I sequence with restriction to a midnight–6 a.m. window consented and warned, the brandy retired with its REM bill explained, the month-4 outcome (7 hours asleep, 90% efficiency, one wedding-season relapse managed with the drill).",
        "A 27-year-old Bengaluru BPO team lead, four years of night shifts, zolpidem 10 mg stopped working and now taken with a beer at 8 a.m. to sleep in daylight: the circadian re-frame (the tablets fighting the sun), the shift-sleep protocol (black-out curtains, the 9 a.m.–5 p.m. anchor, sunglasses on the commute, the 1 a.m. caffeine ceiling, the capped weekend flip), the zolpidem tapered and reserved for protocol-break weeks, and the job-timing conversation: the 3-month outcome of 6.5 anchored hours, no hypnotic, performance restored.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The 3×3 gates and the opportunity clause.",
        "CBT-I first line; the BOOT stimulus-control rules.",
        "The drug classes with their one-line cautions (Z-drugs, benzos in elders, antihistamines as the trap).",
        "The apnoea and restless-legs screens before any hypnotic.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The pharmacy inventory is the Indian insomnia consultation's most productive question: 'what tablet do you take for sleep, and is it from the chemist without paper?': the answer rewrites the management in a third of cases.",
        "The restriction consent is a scripted conversation: the paradox named ('you want me to sleep LESS?'), the harder-first-fortnight warned, the efficiency arithmetic shared: the difference between dropout and adherence.",
        "The comorbid doctrine's operational test: if the insomnia persisting after the depression lifts still meets the 3×3 gates, it is a disorder in its own right and gets its own CBT-I; 'secondary' was a word that withheld treatment.",
        "The menopausal tier's honest architecture: HRT counsel individualised for the flush driver, CBT-I for the maintenance layer, and the family briefing that converts the 2 a.m. wakeful mother from 'difficult' to 'symptomatic'.",
        "Every 'treatment-resistant insomnia' file deserves a re-read for the three missed screens (apnoea, legs, the caffeine-alcohol timeline) before the second drug. The label is most often a screen that never ran.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The woman who went to bed at nine to catch sleep",
      presentation: "In bed nine and a half hours, asleep five, and the accident that started it all had healed eighteen months ago.",
      initialPresentation: "A 52-year-old Kochi homemaker developed insomnia after her son's accident; eighteen months later, despite his full recovery, she lay in bed from 9 p.m. 'to make sure', woke at 2 a.m. and clock-watched, napped at 3 p.m. 'to survive', and drank five cups of tea daily including a 9 p.m. cup plus a nightly brandy 'the only thing that works'. She took diphenhydramine most nights and woke groggy. The two-week diary showed 9.5 hours in bed, 5.2 hours slept: 55% efficiency: the diagnosis in numbers.",
      history: "The son's accident (the precipitant) fully resolved; no depression on screen (mood, energy and interest preserved once the sleep question is separated); menopausal transition underway without flush-locked timing; no snoring or witnessed pauses (the partner's interview negative); no leg-crawl symptoms; the tea-and-brandy pattern longstanding and escalating.",
      examination: "Tired-appearing but non-sleepy (the fatigue-not-sleepiness fork demonstrated: 'could you nap right now? No, just exhausted'); tension headaches; the mental state dominated by sleep-dread ('if I get less than six, the next day is ruined'); the diary's arithmetic the only positive finding: no medical signs, no apnoea phenotype.",
      diagnosis: "Chronic insomnia disorder with four named maintenance engines (the early-to-bed, the nap, the 9 p.m. caffeine, the alcohol nightcap) plus the diphenhydramine layer: a 3P formulation with the precipitant long retired.",
      management: "The 3P drawing at the bedside ('your son recovered; these five habits are the squatters now'); CBT-I: stimulus control (bed = sleep only, out of bed at 20 minutes of wake, the clock turned, the phone parked outside); restriction to a 12:00 midnight–6:00 a.m. window (the shock-and-consent conversation scripted: weeks 1–2 harder, told in advance); the tea timeline cut to a 3 p.m. ceiling with the household's serving habit negotiated; the brandy retired with its REM-rebound bill explained; diphenhydramine stopped with the anticholinergic counsel at her age; the cognitive module on the 'six hours will ruin me' belief tested against her own diary's functional days; the relapse drill written for the wedding season.",
      outcome: "Weeks 1–2: harder nights, exactly as forecast, tolerated because forecast. Weeks 3–6: sleep consolidated; the window titrated 12:00 → 11:15 → 10:45. Month 4: 7 hours asleep, 90% efficiency, diphenhydramine-free, one relapse-week after a wedding season managed with the drill; 'the rules that hold, the rules that bend'.",
      teachingPoints: [
        "The diary's in-bed/asleep arithmetic IS the diagnosis in numbers: 9.5 and 5.2 with 55% efficiency told the whole story before any examination.",
        "Restriction's paradox is the treatment's entry ritual: consent and warning both scripted, the harder-first-fortnight forecast in advance.",
        "The tea, the brandy, the nap and the diphenhydramine were four separate maintenance engines: each named, each retired: the 3P model's clinical payoff.",
      ],
    },
    {
      title: "The shift-leader with total insomnia",
      presentation: "Zolpidem stopped working, so he took it with a beer at 8 a.m. To sleep in daylight after fighting the sun all night.",
      initialPresentation: "A 27-year-old Bengaluru BPO team lead, four years of night shifts, requested 'stronger sleeping tablets': zolpidem 10 mg had stopped working and he was taking it with a beer at 8 a.m. to sleep in daylight. The diary showed sleep from 10 a.m. to 2 p.m., lying in bed 9 a.m.–4 p.m. 'trying', heavy caffeine until 3 a.m., and weekend attempts to 'sleep like a human' producing Sunday-night collapses.",
      history: "Four years of rotating night leadership; no medical comorbidity; no mood episodes (screened, the 2 p.m. wakefulness and 10 a.m. sleep were purely schedule-driven); the zolpidem acquired through the pharmacy pathway with escalating doses; alcohol now the co-sedation layer: the safety conversation owed.",
      examination: "Young, healthy-appearing, fatigued in the circadian sense (alertness inverted against the clock); the diary's architecture diagnostic: a sleep phase at 10 a.m.–2 p.m. with failed morning attempts against the circadian day; no apnoea phenotype; the mental state normal between the sleep windows.",
      diagnosis: "Circadian-rhythm sleep disorder, shift-work type, with hypnotic tolerance and alcohol co-sedation: insomnia's costume on a clock disorder's body.",
      management: "The reframe delivered as the treatment's first act ('the tablets are fighting the sun, literally'); the shift-sleep protocol: black-out curtains and a fixed 9 a.m.–5 p.m. anchor-sleep window; sunglasses on the 6:30 a.m. commute home (the morning-light sabotage ended); caffeine ceiling at 1 a.m.; the weekend compromise (one 'human day' with a capped 2-hour shift and a 2 a.m. re-entry, not the full flip that produced the collapses); the zolpidem tapered and reserved for protocol-break weeks only; a job-timing conversation (he moved to a rotation with a fixed day-shift month within the year).",
      outcome: "Three months: 6.5 anchored hours in the daylight window, no hypnotic, performance restored; six months: the day-shift rotation holding the gain; the beer-at-8 a.m. habit gone with the protocol that replaced it.",
      teachingPoints: [
        "Shift-insomnia is light-management, not sedation: the sunglasses, curtains and anchor are the prescription the tablet was impersonating.",
        "Hypnotic-plus-alcohol co-sedation in shift workers is the safety conversation: the complex-behaviour tier of the Z-drug warnings applied to a real household.",
        "The 'weekend flip' is the circadian saboteur: the capped-transition protocol (partial shift, early re-entry) replaces the full collapse.",
      ],
    },
  ],
  clinicalPearls: [
    "The gates: ≥3 nights/week, ≥3 months, daytime consequences, despite adequate opportunity, and diagnosed WITH comorbidities, never 'secondary'.",
    "The 3P model: the PERPETUATING layer (early-to-bed, lie-ins, naps, caffeine, nightcap, the trained bedroom) is the treatment target. The precipitant is history.",
    "CBT-I is first line everywhere that matters (ACP 2016 the citable anchor); effects durable for years after treatment ends.",
    "Stimulus control BOOT: Bed for sleep only; Out of bed at ~20 minutes; Only when sleepy; Time: fixed rise; plus the clock turned away.",
    "Sleep restriction: window to actual sleep time (floor 5–6 hours), expand at ~85–90% efficiency; cautions: mania, epilepsy, driving.",
    "New insomnia roughly doubles later-depression risk: the road runs both directions and the insomnia is treated WITH the mood disorder.",
    "Screen every case: apnoea (the snoring masquerade), restless legs (the 9 p.m. crawl), mood, the caffeine-alcohol timeline.",
    "Melatonin is a chronobiotic (0.5–5 mg, hours before desired sleep), never a 10 mg knockout.",
    "DORAs are the modern no-dependence class; ramelteon for onset; low-dose doxepin for maintenance; antihistamines are India's most-consumed OTC trap.",
    "The Indian exit-point: the pharmacy inventory by name at every consult; the years-long alprazolam history offered a structured, dignified exit.",
  ],
  highYieldSummary: [
    "Definition: dissatisfaction with sleep quantity/quality (onset, maintenance, or early waking) ≥3 nights/week for ≥3 months with daytime consequences despite adequate opportunity; not better explained by other sleep disorders, substances or comorbidities, which are diagnosed ALONGSIDE (the 'comorbid, not secondary' doctrine).",
    "Epidemiology: a third of adults symptomatic yearly; 6–10% the chronic disorder; women 1.5–2×; half-to-two-thirds travel with comorbid psychiatric/medical conditions; new insomnia doubles later depression risk; the treatment gap is inverted (too much wrong treatment, too little CBT-I access).",
    "Mechanism: the 3P model (predisposing over-alert temperament; the precipitating stressor; the PERPETUATING adaptations) over the hyperarousal substrate: conditioned arousal (the Pavlovian bedroom), the pressure budget spent by naps and lie-ins, the performance spiral (fear of insomnia as half the disorder).",
    "Diagnosis craft: the two-week ALL-sleep diary as the examination (bedtime, latency, wakes, naps by name, caffeine/alcohol clock-times, perceived quality); the three screening anamneses (snoring/pauses, the 9 p.m. leg-crawl, mood/PTSD); ISI as the named tracking instrument; polysomnography only for suspected apnoea/parasomnia; paradoxical insomnia as the measurement-mismatch entity.",
    "Differentials: sleep deprivation (the opportunity clause), delayed phase (the weekend reveal), OSA (the masquerade before every hypnotic), restless legs, depression (treated together), paradoxical insomnia, substance/medication effects.",
    "CBT-I modules: stimulus control (BOOT rules), sleep restriction/consolidation (85–90% titration gate; mania-epilepsy-driving cautions), cognitive restructuring (the 8-hours myth, the performance paradox), relaxation, sleep hygiene as adjunct, relapse prevention (the bad-night drill with the +1-hour-capped lie-in).",
    "Pharmacology: quantity-limited, stop-date-from-day-one. Z-drugs (onset; complex-behaviour warnings), ramelteon (onset, non-scheduled), low-dose doxepin 3–6 mg (maintenance), DORAs (the no-dependence modern class), benzodiazepines the caution tier (never long-term in elders), antihistamines the OTC trap, melatonin the chronobiotic, trazodone the comorbid-depression pragmatism; treat-the-driver where comorbidity rules.",
    "The Indian tier: the pharmacy-first pathway (alprazolam/clonazepam/diphenhydramine for years) met with the 10-minute GP protocol and the dignified exit; the tea timeline negotiated household-wide; the joint-family night (quiet-hour, room-shuffle, earplugs tier); the menopausal cohort reached through gynaecologists; the shift-worker's light protocol instead of the 8 a.m. hypnotic.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "insomnia-quiz-1",
      question: "The DSM-5 gates for chronic insomnia disorder:",
      options: ["1 night/week for 1 month", "3 nights/week for 3 months, with daytime consequences, despite adequate opportunity", "Nightly for 6 months", "Any dissatisfaction with sleep"],
      correctIndex: 1,
      explanation: "The frequency-duration-impairment-opportunity quartet — the opportunity clause separates the disorder from deprivation.",
      afterSectionId: "diagnosis",
    },
    {
      id: "insomnia-quiz-2",
      question: "The treatment layer that maintains chronic insomnia long after the original stressor retires:",
      options: ["Predisposing", "Precipitating", "Perpetuating", "Genetic"],
      correctIndex: 2,
      explanation: "The 3P model's third P — habits, conditioning, beliefs: the entire treatment target.",
      afterSectionId: "mechanism",
    },
    {
      id: "insomnia-quiz-3",
      question: "First-line treatment for chronic insomnia across major guidelines:",
      options: ["Long-term benzodiazepines", "CBT-I", "Nightly sedating antihistamines", "Alcohol at bedtime"],
      correctIndex: 1,
      explanation: "The ACP 2016 position and all successors: durable superiority over hypnotics, with effects outlasting treatment.",
      afterSectionId: "management",
    },
    {
      id: "insomnia-quiz-4",
      question: "In stimulus control, a person awake in bed for ~20 minutes should:",
      options: ["Try harder to sleep", "Take an extra half tablet", "Leave the bed, do something calm in dim light, return only when sleepy", "Watch the clock to time the insomnia"],
      correctIndex: 2,
      explanation: "Bed = sleep only; arousal out of the arena; sleepy return — the conditioning reversal's core rule.",
      afterSectionId: "management",
    },
    {
      id: "insomnia-quiz-5",
      question: "Sleep-restriction therapy requires caution in all EXCEPT:",
      options: ["History of mania", "Epilepsy", "Safety-critical driving occupation", "Simple tension-type headache"],
      correctIndex: 3,
      explanation: "Mania-triggering, seizure-threshold and driving-safety are the three standard cautions.",
      afterSectionId: "management",
    },
    {
      id: "insomnia-quiz-6",
      question: "The correct position of melatonin in insomnia treatment:",
      options: ["A powerful nightly hypnotic at 10 mg", "A chronobiotic acting on timing at 0.5–5 mg, hours before desired sleep in phase-shifting contexts", "A morning stimulant", "An antidepressant"],
      correctIndex: 1,
      explanation: "Timing-medicine, not force-medicine — the dosage-and-timing science point examiners reward.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the DSM-5 gates and the 'comorbid, not secondary' doctrine.", answer: "Dissatisfaction with sleep quantity/quality (initiation, maintenance or early waking) at ≥3 nights/week for ≥3 months, with daytime consequences, despite adequate opportunity and circumstances, not better explained by another sleep disorder, substance effects, or coexisting conditions doing the whole work. The doctrine: comorbid insomnia is diagnosed ALONGSIDE its companions (depression, pain, apnoea) and treated WITH them, never demoted to 'secondary'; the word historically withheld treatment.", topic: "Diagnosis" },
    { question: "Draw the 3P model and list five perpetuators by name.", answer: "Predisposing: the over-alert temperament ('my mind races'), female sex, ageing architecture, the sleep-worrier cognitive style. Precipitating: the igniting event (job loss, exam year, pain, grief, depression onset, menopause, shift change, hospital admission). Perpetuating: the treatable layer: (1) going to bed early to 'catch sleep'; (2) morning lie-ins to 'recover'; (3) the afternoon nap; (4) caffeine stacking (the 9 p.m. chai); (5) alcohol as nightcap (REM suppression + 3 a.m. rebound): plus clock-watching, sleep-performance anxiety and the bedroom trained into a wakefulness arena.", topic: "Mechanism" },
    { question: "Write the stimulus-control rules as you would hand them to a patient.", answer: "BOOT plus the clock: B. Bed is for sleep and intimacy only, nothing else (no phone, no worry-lists, no lying awake). O. Out of bed within about 20 minutes of waking, to a dim chair or sofa, doing something calm. O. Only return when genuinely sleepy (sleepiness, not 'it's time'). T (Time: the rise-time is fixed, regardless of the night's quality) the morning anchors everything. And the clock faces away: monitoring is the performance trap.", topic: "Management" },
    { question: "Explain sleep-restriction's mechanism, titration rule, and three contraindication cautions.", answer: "Mechanism: compressing the sleep window to the actual sleep time rebuilds the adenosine pressure the habits spent, forcing consolidation (and re-training the bed-sleep association). Titration: window set from the diary's average sleep time (floor 5–6 hours), anchored to the fixed rise-time; expand by 15–20 minutes per week once sleep efficiency passes ~85–90%. Cautions: history of mania (sleep loss is the trigger (restrict with mood-stabiliser cover and review), epilepsy (deprivation lowers thresholds), safety-critical occupations (driving) time the protocol to leave or weekends).", topic: "Management" },
    { question: "Which four medicines form the modern pharmacological tier, and which two OTC patterns are the Indian traps?", answer: "The tier: (1) Z-drugs (zolpidem 5–10 mg, zopiclone/eszopiclone); onset, short courses, complex-sleep-behaviour warnings; (2) ramelteon: onset, non-scheduled, useful in elders and dependence-risk; (3) low-dose doxepin 3–6 mg: maintenance, histamine-blockade, no dependence signal; (4) DORAs (suvorexant, lemborexant, daridorexant): the orexin-antagonist class, no dependence architecture, next-day-load monitored. The traps: the pharmacy benzo pathway (alprazolam/clonazepam dispensed for years without prescription) and the sedating-antihistamine economy (diphenhydramine, promethazine, anticholinergic load, tolerance, elder fall-risk) plus the 'nerve tonic' herbal tier.", topic: "Pharmacology" },
    { question: "What is paradoxical insomnia, and what does the partner's report add?", answer: "The patient reports near-zero sleep ('I didn't sleep at all') while the partner and actigraphy document hours of it: a real distress entity (sleep-state misperception) where the sleep meter itself misreads. The partner's report adds the objective anchor that (a) names the entity, (b) reframes the distress without dismissing it, and (c) directs treatment to the same cognitive-and-behavioural architecture: the measurement conversation ('the shallow sleep you call zero is real sleep, and the fear of it is the engine') is therapeutic in itself.", topic: "Diagnosis" },
    { question: "Name the three screening anamneses with their catch-phrases, and the shift-worker's four-item light protocol.", answer: "The screens: (1) apnoea; 'does he snore, and has anyone seen him stop breathing?' (the partner's interview, not the patient's); (2) restless legs: 'do your legs crawl restlessly around 9 p.m., better only when you move them?'; (3) mood/PTSD: the depression screen and the nightmare history. The shift protocol: (1) black-out curtains and a fixed anchor-sleep window; (2) sunglasses on the morning commute home (ending the light sabotage); (3) caffeine ceiling at ~1–2 a.m.; (4) the capped weekend transition (one partial flip with an early re-entry, not the full human-day collapse).", topic: "Clinical practice" },
    { question: "Give the Indian pharmacy-first pathway's exit protocol.", answer: "(1) The inventory taken by name at every consult: 'what tablet do you take for sleep, and is it from the chemist without paper?': alprazolam, clonazepam, diphenhydramine, the tonics; (2) the dignity script: tolerance-and-dependence is extremely common in India, not the patient's fault; (3) the structured taper, never abrupt, never punitive; (4) the CBT-I upgrade positioned as the win ('the first-line treatment is a therapy, not a tablet'); (5) any bridge hypnotic quantity-limited with the stop-date written from day one; (6) the follow-up rhythm that outlives the prescription: the 10-minute GP protocol (diary, caffeine timeline, stimulus-control leaflet, quantity-limited prescription) converting the dependency mill into a referral funnel.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Just give me a good sleeping tablet, doctor.", answer: "I will when we need one: short-term, quantity-limited, with a stop-date written from day one. But the honest medicine: the tablets force sleep chemically and stop working predictably, while the structured therapy retrains the sleep system and keeps working years after it ends. That therapy is the world-guideline first line, and we start it today." },
    { question: "Why can't I sleep even when I am exhausted?", answer: "Because exhaustion and sleep-pressure are different currencies, and because your bed has learned wakefulness: hours of lying awake have TRAINED it. We un-train it with rules that feel odd (out of bed when awake; a shorter sleep window at first) and that work." },
    { question: "I go to bed early to catch up. Isn't that sensible?", answer: "It is the most natural mistake in insomnia: the early bed adds empty wakeful hours (against the body's pre-sleep alert zone), trains the bed further, and spends nothing of the pressure the night needs. We reverse it: fixed rise-time, bed later, window matched to what you actually sleep." },
    { question: "I have taken alprazolam for six years and it barely works now. Am I addicted?", answer: "The word is tolerance-and-dependence, and the situation is extremely common in India. You are not alone and not at fault. The exit is structured and works: a planned taper, the behavioural treatment taking over the nights, and a review rhythm. People feel like themselves again on the other side of it." },
    { question: "My mother takes a cetirizine or diphenhydramine every night to sleep. Is that safe?", answer: "Sedating antihistamines are India's most common hidden sleep habit, and in elders they carry fall-risk, memory burden, dry-mouth and urinary effects, and lose power within weeks anyway. It is the wrong tool sold as the gentle one. We will show you the safer tiers." },
    { question: "Will I need therapy for sleep forever?", answer: "No. CBT-I is deliberately short: typically 4–8 sessions, ending with a relapse drill you own. The skills are like swimming: once trained, they stay." },
    { question: "Does melatonin work?", answer: "It works on TIMING, not on force: useful when the body clock is shifted (shift work, jet lag, the delayed-phase teen) and taken at the right hours in the right dose (a low dose, hours before the desired sleep). As a nightly knockout tablet it mostly disappoints: that is not its job." },
    { question: "Everyone says try a brandy or wine before bed.", answer: "Alcohol sedates you into lighter, broken sleep: it suppresses deep sleep and the dream department, then rebounds you awake at 3 a.m. The nightcap is renting the evening at morning-interest rates." },
    { question: "I barely slept at all last night: zero hours.", answer: "Genuine near-zero nights are rare; hours of shallow sleep usually feel like zero, and there is a well-described pattern where the sleep meter itself misreads. The distress is real; the treatment is the same package, and the measurement usually surprises us both." },
    { question: "If I can't sleep, should I at least rest quietly in bed?", answer: "Quiet rest is genuinely valuable for the body. That part of the belief is true. The part we change is the LOCATION: resting in bed trains the bed-wakefulness link. Rest on the sofa or chair; keep the bed for sleep alone." },
    { question: "My father wakes at 4:30 a.m. and is upset about it. Can he be treated?", answer: "If he sleeps soundly 8-to-4:30 and functions by day with an afternoon nap, his clock has simply shifted with age. The treatment is expectation and nap-timing, not sedatives. If he is awake through the night and distressed, that is true insomnia, and it gets the careful package, gentler titration, and NO long-term benzodiazepine (falls and confusion are the elder's specific dangers)." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — insomnia disorder architecture paraphrased; criteria not reproduced" },
      { source: "American College of Physicians (2016), Qaseem A et al. — the CBT-I-first guideline recommendation" },
      { source: "AASM / Sateia MJ et al. — the clinical practice guideline treatment algorithm; ICSD-3's chronic insomnia disorder construct" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.14.2 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Morin CM & Benca R — the Nature Reviews Disease Primers insomnia primer (the modern synthesis)" },
    ],
    trials: [
      { source: "Spielman AJ, Caruso LS & Glovinsky PB — the 3P model (the conceptual anchor)" },
      { source: "Morin CM et al. — the CBT-I trial programme and the insomnia-depression longitudinal work" },
      { source: "Krystal AD / Yeung WY et al. — the doxepin low-dose and DORA (suvorexant/daridorexant) trial programmes" },
    ],
    reviews: [
      { source: "Riemann D et al. — the European insomnia guideline (the cognitive model and the hyperarousal framework)" },
      { source: "Buscemi N et al. — benzodiazepine/hypnotic meta-analytic efficacy-and-harm reviews" },
      { source: "Indian context — NMHS 2015–16 (the sleep-problem item); Indian pharmacy-dispensing studies of benzodiazepines without prescription (the Chandigarh-series literature as representative); Tele-MANAS 14416" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The two-week sleep diary and the stimulus-control leaflet — the two-page instruments this course hands to every patient" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language: why the habits keep it burning, the therapy that retrains it, the tablet exit.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The gates, the 3P model, the CBT-I package, the honest pharmacology.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything: the restriction craft, the pharmacy-exit protocols, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The gates, the 3P model, the first-line doctrine.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the 3×3-plus-opportunity gates and name five perpetuators cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The Pavlovian bedroom, the pressure budget, the performance spiral.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why sedation was never the mechanism and restriction is." },
    { number: 3, title: "Clinical Practice", description: "The diary craft, the screens, the CBT-I modules, the honest pharmacology.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can write the CBT-I plan and the quantity-limited prescription with its stop-date." },
    { number: 4, title: "Indian Context", description: "The pharmacy exit, the tea timeline, the household night, the shift protocol.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the dignity script and the light protocol in one consultation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the criteria-and-management essay and the melatonin question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.14.2 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "DSM-5-TR (APA) — insomnia disorder architecture paraphrased; ICSD-3 (AASM) — the chronic insomnia disorder construct", sourceType: "classification", year: "2013/2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Spielman AJ, Caruso LS & Glovinsky PB — the 3P behavioural model of insomnia (the conceptual anchor)", sourceType: "primary", year: "1987", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Morin CM et al. — the CBT-I trial programme and the insomnia-depression longitudinal work; Morin CM & Benca R — the Nature Reviews Disease Primers primer", sourceType: "trial", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "American College of Physicians (2016), Qaseem A et al. — the CBT-I-first guideline; AASM / Sateia MJ et al. — the treatment algorithm", sourceType: "guideline", year: "2016–2017", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Riemann D et al. — the European insomnia guideline (cognitive model, hyperarousal framework)", sourceType: "guideline", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Krystal AD / Yeung WY et al. — low-dose doxepin and DORA (suvorexant, lemborexant, daridorexant) trial programmes; ramelteon trials", sourceType: "trial", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Buscemi N et al. — benzodiazepine/hypnotic meta-analytic efficacy-and-harm reviews; the Z-drug complex-sleep-behaviour warning literature (Dauvilliers Y et al.)", sourceType: "meta-analysis", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Borbély AA — the two-process model (the pressure-and-gate logic CBT-I runs on)", sourceType: "primary", year: "1982 onward", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Indian context — NMHS 2015–16 (the severe sleep-problem item); Indian pharmacy-dispensing studies of benzodiazepines without prescription (the Chandigarh-series literature as representative); Tele-MANAS 14416; the cost tier (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The diagnostic gates: dissatisfaction with sleep quantity/quality ≥3 nights/week for ≥3 months with daytime consequences despite adequate opportunity; comorbid insomnia diagnosed alongside (never 'secondary'): the DSM-5/ICSD-3 architecture.", grade: "established", sources: ["S2"] },
    { text: "Epidemiology: ~a third of adults symptomatic yearly; 6–10% the chronic disorder; women 1.5–2×; half-to-two-thirds comorbid; new insomnia roughly doubles later depression risk.", grade: "established", sources: ["S4", "S1"] },
    { text: "The 3P model: the perpetuating layer (early-to-bed, lie-ins, naps, caffeine stacking, the nightcap, conditioned arousal, sleep-dread) maintains the disorder long after the precipitant retires; the treatment target.", grade: "established", sources: ["S3"] },
    { text: "CBT-I is first line across major guidelines (ACP 2016 the citable anchor) with durable post-treatment superiority over hypnotics; hypnotics are the short-term adjunct tier, quantity-limited with stop-dates from day one.", grade: "established", sources: ["S5", "S4"] },
    { text: "Sleep restriction: window set to actual sleep time (5–6 hour floor) expanding at ~85–90% efficiency; cautions: mania history (sleep loss as trigger), epilepsy (thresholds), safety-critical occupations.", grade: "established", sources: ["S5", "S4"] },
    { text: "Stimulus control (bed = sleep only; out at ~20 minutes; sleepy return; fixed rise-time) reverses conditioned arousal: the chair-sleeps-pillow-wakes pattern.", grade: "established", sources: ["S4", "S9"] },
    { text: "The pharmacology tier: Z-drugs for onset (short courses; complex-sleep-behaviour warnings, contraindicated with evening alcohol); ramelteon onset-tier non-scheduled; low-dose doxepin 3–6 mg maintenance; DORAs the modern no-dependence class; benzodiazepines the caution tier (never long-term in elders); antihistamines the OTC trap.", grade: "established", sources: ["S7", "S8", "S5"] },
    { text: "Melatonin is a chronobiotic: 0.5–5 mg taken 2–5 hours before desired sleep in phase-shifting contexts: timing-medicine, not a nightly knockout.", grade: "established", sources: ["S5", "S9"] },
    { text: "Paradoxical insomnia (sleep-state misperception): near-zero reported sleep against partner/actigraphy evidence; a real distress entity treated with the same cognitive-and-behavioural architecture.", grade: "established", sources: ["S6", "S2"] },
    { text: "The screens every work-up owes: snoring/witnessed pauses (apnoea before any hypnotic), the 9 p.m. leg-crawl (restless legs), mood/PTSD: plus the medication, caffeine and alcohol timeline inventory.", grade: "established", sources: ["S5", "S1"] },
    { text: "The Indian tier: the pharmacy-first pathway (alprazolam/clonazepam/diphenhydramine dispensed without prescription for years) met with the 10-minute GP protocol and the dignified exit; the tea timeline negotiated household-wide; the joint-family environmental layer; the night-shift light protocol replacing the 8 a.m. hypnotic; NMHS 2015–16 as the prevalence framing.", grade: "supported", sources: ["S10"] },
  ],
};
