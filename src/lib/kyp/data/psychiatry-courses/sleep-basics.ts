import type { PsychiatryCourse } from "./types";

/**
 * SLEEP–WAKE PHYSIOLOGY & BASICS — canonical Psychiatry course
 * (migration batch 5, Group K — sleep-wake disorders, part 1 of 4).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/sleep-basics.md — untouched foundation),
 * re-researched against current sleep science (Borbély's two-process
 * model, the Aserinsky/Kleitman founding literature, Xie's glymphatic
 * work, the adolescent phase-delay evidence, the Harvard circadian
 * lineage, Indian shift-work/BPO workforce studies) with per-claim
 * provenance.
 *
 * Drug routes: NONE — no drug lesson applies to physiology itself;
 * the pharmacology lives in the Insomnia course; caffeine and the
 * wake-promoting tier have no KYP lessons and are recorded as
 * content pointers, never invented.
 */
export const sleepBasicsCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "sleep-basics",
  title: "Sleep–Wake Physiology — The Factory Night-Shift and Its Two Clocks",
  shortName: "Sleep Basics",
  kind: "concept",
  category: "Sleep-Wake Disorder",
  groupLetter: "K",
  groupName: "Sleep-wake disorders",
  learningPath: ["Psychiatry", "Sleep-Wake Disorders", "Physiology & Basics"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "28 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Sleep is not the absence of activity but an actively generated brain state with its own architecture — deep sleep, light sleep, dream sleep in ~90-minute cycles — run by two biological clocks, a sleep-pressure meter and a circadian timer, whose disruption underlies every sleep disorder psychiatry treats.",
  summary:
    "Most people think of sleep as a light-switch: on at night, off in the morning. It is closer to a factory night-shift with its own departments and schedules. In a normal night, the brain cycles through four to six ~90-minute loops, each containing lighter stages, deep slow-wave sleep (the physical-restoration department, front-loaded into the first third of the night) and REM sleep (the dream-and-emotional-filing department, back-loaded toward morning — which is why remembered dreams live at 5–6 a.m.). Two forces decide when sleep arrives: Process S, a homeostatic sleep-pressure meter that builds with every waking hour (adenosine, the same molecule caffeine blocks), and Process C, the circadian clock in the hypothalamus — 20,000 cells of suprachiasmatic nucleus trained by daylight — that sets the 24-hour schedule of sleepiness, alertness, hormones and body temperature, and even manufactures a 'forbidden zone' for sleep in the hours before habitual bedtime (why the insomniac's 9 p.m. attempt fails while midnight succeeds). Sleep medicine's core clinical insight: most common sleep complaints are not 'sleep problems' but CLOCK problems — pressure taken at the wrong time, or timing trained to the wrong schedule — which is why the effective treatments (sleep restriction, light timing, stimulus control) retrain the clocks rather than sedate the person. Every psychiatrist also needs the second insight: sleep is a vital sign of mental health — nearly every psychiatric disorder disturbs sleep, and disturbed sleep deepens nearly every psychiatric disorder.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Draw a night's sleep architecture: N1, N2, N3, REM; the 90-minute cycle; front-loaded deep sleep, back-loaded REM — and explain the clinical echoes of each asymmetry.",
    "Explain the two-process model (Process S homeostatic pressure, Process C circadian timing) and tie EACH to a named treatment.",
    "Describe the circadian system: SCN, light input, melatonin release, the wake-maintenance ('forbidden') zone for sleep.",
    "List sleep's functions — memory consolidation, glymphatic clearance, emotional processing, metabolic and immune work — and their clinical translations.",
    "Read a sleep diary and identify the common patterns (delayed phase, advanced phase, insufficient opportunity).",
    "Explain chronotypes, the adolescent phase delay, and the ageing advance — with the school-policy and elder-assessment implications.",
    "Apply the core sleep-hygiene and behavioural principles correctly — and know their limits (hygiene is the foundation tier, not the treatment).",
    "Place Indian realities in the frame: afternoon-nap culture, joint-family sleep environments, night-shift economies, faith-morning schedules.",
  ],
  quickFacts: [
    { label: "The architecture", value: "4–6 × 90-minute cycles", detail: "N1 the transition doze; N2 the majority workhorse (spindles + K-complexes); N3 the deep-restoration department (front-loaded, first third); REM the dream-filing department (back-loaded, last third) — why dreams are remembered at 5–6 a.m." },
    { label: "The two clocks", value: "Process S + Process C", detail: "S = the adenosine pressure meter, built by waking, paid by sleep; C = the SCN circadian timer, trained by light — sleep arrives when pressure is high AND the circadian gate opens; mistimed either one and quality collapses" },
    { label: "Caffeine's chemistry", value: "Blocks adenosine", detail: "The pressure-meter's blindfold, with a 5–6 hour half-life: the 4 p.m. chai is still present at 10 p.m. — every Indian sleep complaint begins with the caffeine timeline" },
    { label: "The forbidden zone", value: "Wake-maintenance zone", detail: "The 2–3 hours before habitual bedtime, when the clock actively opposes sleep — why the toddler's 'extra early' bedtime and the insomniac's 9 p.m. attempt both fail" },
    { label: "The wash cycle", value: "Glymphatic clearance", detail: "Deep sleep opens the brain's waste-removal system (amyloid-related burden included) — the honest motivation frame for chronic short sleep, stated as risk-association, not certainty" },
    { label: "Sedation ≠ restoration", value: "The pill-sleep paradox", detail: "Benzodiazepines and alcohol suppress slow-wave and REM sleep — the patient 'sleeps' without the night-shift departments running: the honest explanation for waking unrefreshed" },
    { label: "The adolescent clock", value: "1–2 hour phase delay", detail: "Biologically driven (later melatonin onset), clashing with 7 a.m. school — adolescent 'laziness at dawn' is chronobiology; later school starts show measurable learning and mental-health gains" },
    { label: "The psychiatric vital sign", value: "Every disorder has a sleep signature", detail: "Depression's early waking; mania's reduced need; PTSD's nightmares; dementia's sundowning; ADHD's delayed phase; psychosis's sleep-wake collapse — ask about sleep in EVERY review and chart it like temperature" },
  ],
  knowledgeGraph: [
    { label: "Insomnias", type: "condition", href: "/psychiatry/insomnia/", note: "The clock-and-habit mismanagement tier — this course's two-process logic becomes CBT-I there" },
    { label: "Excessive Sleepiness & Hypersomnias", type: "condition", href: "/psychiatry/hypersomnia/", note: "The four engines of daytime sleepiness — insufficient, broken, central or secondary" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "Behaviours erupting out of sleep's mixed states — NREM first-third, REM last-third" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The classic sleep signature (early waking) and the bidirectional risk road" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The nightmare tier — REM's emotional processing gone wrong" },
    { label: "Adenosine (the sleep-pressure molecule)", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The Process S currency caffeine blocks — the neurochemistry tier of this course's master model" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Sleep's mechanism story is the story of two clocks and a factory. The architecture: a normal adult night is 4–6 cycles of ~90 minutes descending through the stages and ascending to REM — N1 (minutes, the drifting doze), N2 (about half the night, the spindles-and-K-complexes workhorse), N3 slow-wave sleep (the deepest, front-loaded: growth-hormone release, physical restoration, immune work, and the glymphatic system's clearance of metabolic waste), and REM (back-loaded, dreaming with the body paralysed by REM-atonia so the dreams stay still, each cycle's REM period lengthening toward morning). The timing: Process S is a homeostat — adenosine accumulates for every hour awake and sleep, especially slow-wave, pays it off; napping pays it down partially, which is why the afternoon nap spends the pressure the night needs (India's nap habit interacts with insomnia complaints constantly). Process C is the circadian timer — the suprachiasmatic nucleus, ~20,000 hypothalamic cells running a near-24-hour clock entrained primarily by light; melatonin rises in dim evening light ('biological night begins') and falls with morning light; core body temperature bottoms ~2 hours before habitual wake, its rise acting as the body's alarm; and the clock manufactures the wake-maintenance zone, the forbidden zone for sleep in the 2–3 hours before habitual bedtime. The interplay is the entire logic of sleep medicine: sleep arrives when pressure is high AND the circadian gate opens; sleep quality suffers when either is mistimed — the shared mechanism of insomnia, jet lag, shift-work disorder and the delayed-phase teenager, and the reason the effective treatments (sleep restriction, light timing, stimulus control) retrain clocks rather than sedate people. The functions tier explains what the night-shift actually does: the hippocampus 'replays' the day's learning to cortex during N2 spindles and slow-wave sleep (the all-nighter stores less than the studied-then-slept night); REM re-processes the day's emotional charge; deep sleep opens the wash cycle; and metabolic-immune maintenance runs on schedule (a week of 5-hour nights measurably shifts glucose regulation, appetite hormones and cytokine balance).",
    steps: [
      "The architecture: 4–6 cycles of ~90 minutes, descending through N1–N2–N3 and ascending to REM, each cycle's dream period longer than the last.",
      "N3 front-loads into the first third (restoration, growth hormone, glymphatic clearance); REM back-loads into the last third (dreaming, emotional filing) — the two asymmetries with clinical echoes.",
      "Process S builds: adenosine accumulates each waking hour — the pressure meter caffeine blindfolds (5–6 hour half-life).",
      "Process C times: the SCN's ~20,000 cells run a near-24-hour clock entrained by light — melatonin marks biological night, temperature's pre-dawn trough and rise act as the body's alarm.",
      "The wake-maintenance zone: the clock's active opposition to sleep in the 2–3 pre-bedtime hours — the insomniac's 9 p.m. paradox.",
      "Sleep arrives when pressure is high AND the gate opens — mistime either (nap-spend, late light, early bed) and quality collapses: the shared mechanism of the common sleep complaints.",
      "The night-shift's work: memory consolidation (spindles, slow-wave replay), emotional processing (REM), glymphatic clearance (N3), metabolic-immune maintenance — the functions the pills cannot substitute.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "scn", name: "Suprachiasmatic nucleus (the master clock)", role: "~20,000 hypothalamic cells running the near-24-hour clock entrained primarily by light — the timer whose mistiming generates most common sleep complaints.", grade: "established" },
    { id: "hypothalamus-sleep-switch", name: "Ventrolateral preoptic nucleus (the sleep switch)", role: "The hypothalamic sleep-promoting tier whose flip-switch architecture (reciprocally inhibiting wake and sleep circuits) makes sleep an active, defended state — not a passive fade-out.", grade: "established" },
    { id: "hippocampus-replay", name: "Hippocampus–cortex dialogue", role: "The memory-consolidation tier: the day's learning replayed to cortex during N2 spindles and slow-wave sleep — why the studied-then-slept night beats the all-nighter.", grade: "established" },
    { id: "brainstem-atonia", name: "Brainstem REM-atonia circuitry", role: "The dream-safety paralysis of REM — the body's brake-by-design whose failure is REM behaviour disorder (the Parasomnias course's red flag).", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Adenosine", symbol: "Ade", role: "The Process S currency: accumulates with waking, dissipates in sleep (especially slow-wave) — the molecule caffeine blocks to manufacture alertness.", grade: "established" },
    { name: "Melatonin", symbol: "MLT", role: "The darkness signal: rises in dim evening light to open biological night, falls with morning light — a chronobiotic (timing medicine), never a knockout tablet.", grade: "established" },
    { name: "Orexin/hypocretin", symbol: "Orx", role: "The wake-hold switchboard (~70,000 neurons): stabilises wakefulness across the day — its autoimmune destruction is narcolepsy type 1 (the Hypersomnia course's biology).", grade: "established" },
    { name: "GABA", symbol: "GABA", role: "The sleep-promoting brake tier — the system the benzodiazepines (and alcohol) press to produce sedation that is NOT restoration (slow-wave and REM suppressed).", grade: "established" },
  ],
  pathways: [
    {
      id: "two-process-pathway",
      name: "The two-process gate (why sleep arrives when it does)",
      steps: [
        { label: "Pressure builds through the day", detail: "Adenosine accumulates with each waking hour — the meter the nap partially spends and caffeine blindfolds" },
        { label: "The circadian gate opens at biological night", detail: "Evening melatonin rise, temperature falling toward its trough — the SCN's light-trained schedule" },
        { label: "Sleep onset needs BOTH", detail: "High pressure AND open gate: the insomniac's early bed fails on the gate (wake-maintenance zone); the shift-worker's 8 a.m. attempt fails on both" },
        { label: "Mistiming degrades quality even when quantity survives", detail: "The shared mechanism of insomnia, jet lag, shift disorder and the delayed-phase teen — and the reason the treatments retrain clocks" },
      ],
      clinicalManifestation: "The 'exhausted at 8, wide awake at 10' pattern; the weekend catch-up that proves the system works when timing allows; the pill-sleep that never refreshes.",
      grade: "established",
    },
    {
      id: "glymphatic-pathway",
      name: "The wash cycle (deep sleep's maintenance shift)",
      steps: [
        { label: "N3 opens the clearance system", detail: "Slow-wave sleep opens the glymphatic channels — the brain's waste-removal shift" },
        { label: "Metabolic burden clears", detail: "Amyloid-related burden among the cleared load — the long-term brain-health motivation frame" },
        { label: "Chronic short sleep plausibly burdens the system", detail: "Stated honestly as risk-association, not certainty — the motivation tier, never a scare tactic" },
        { label: "Sedation does not substitute", detail: "Pills that suppress N3 close the very department the shift was for — the unrefreshed-morning explanation" },
      ],
      clinicalManifestation: "The 'slept 8 hours, woke wrecked' report after pill-or-alcohol nights; the elder's 'I don't sleep deep anymore' (architecture, not attitude).",
      grade: "supported",
    },
    {
      id: "rem-atonia-pathway",
      name: "The dream-safety brake (and its failure)",
      steps: [
        { label: "REM runs the body's brake by design", detail: "REM-atonia paralyses the dreamer so the night-flight simulator runs on paper" },
        { label: "The brake holds through the back-loaded dream hours", detail: "Why nightmares are remembered and enacted fights are not — in health" },
        { label: "Brake failure = REM behaviour disorder", detail: "The dream's fight-or-flight drives real limbs — injuries, and in over-50 men a prodromal synucleinopathy red flag" },
        { label: "Leakage at the boundaries = the other REM phenomena", detail: "Sleep paralysis and hypnagogic hallucinations: REM machinery leaking into wakefulness — the narcolepsy signature" },
      ],
      clinicalManifestation: "The bed partner's report ('he was fighting something'); the awake-but-paralysed terror at sleep boundaries; the morning-remembered dream matching enacted movements.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "sleep-onset-architecture", time: "Lights-out to ~90 minutes", title: "The descent", description: "N1's drifting minutes; the first N2 with spindles and K-complexes; the first and deepest N3 block of the night — the restoration department's opening shift, front-loaded by design.", phase: "onset" },
    { id: "sleep-cycles-peak", time: "Through the night", title: "The cycling", description: "Four to six 90-minute loops, each N3 block shallower and each REM period longer — the architecture tilting from physical restoration toward dream-and-emotional filing as morning approaches.", phase: "peak" },
    { id: "sleep-rem-morning", time: "Final third", title: "The dream hours", description: "The longest REM periods live at 5–6 a.m. — why remembered dreams cluster there, why early alarms and alcohol selectively amputate the dream department, and why nightmare disorder lives in this window.", phase: "duration" },
    { id: "sleep-life-arc", time: "The lifespan", title: "The ageing architecture", description: "Adolescence delays the clock 1–2 hours (the school-bell clash); adulthood holds; ageing advances phase (early-sleepy, early-waking), thins N3, fragments continuity and shrinks the clock's amplitude — 'sleeping like a baby' retires with the baby.", phase: "recovery" },
    { id: "sleep-shift-era", time: "The modern night", title: "The circadian assault", description: "Evening screens delay melatonin onset precisely where adolescent and young-adult insomnia lives; night-shift economies manufacture circadian disorder at industrial scale (IT/BPO/healthcare/gig) — the clock's modern occupational war.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Physiology rather than epidemiology anchors this course — but its clinical prevalence anchors matter: roughly a third of adults sleep under the 7-hour line on at least some nights (the insufficient-sleep epidemic), sleep complaints affect a similar tier, and shift-work disorder runs wherever 24-hour economies run. Sleep architecture's lifespan facts: N3 dissolves substantially with age (the elder's 'I don't sleep deep anymore' is architecture, not attitude); the adolescent phase delay is biological and near-universal; chronotype (lark/owl) is substantially genetic and society runs on lark-time, taxing owls chronically.",
    indianPrevalence: "India's sleep-specific epidemiology is thin (the NMHS 2015–16 severe-sleep-problem item ran in double digits for urban women — the Insomnia course's figure). The Indian realities are architectural and economic: the afternoon-nap culture (post-lunch doze sanctioned across age groups), the joint-family sleep environment (shared rooms, late-evening household noise, TV schedules, co-sleeping children), the IT/BPO night-shift workforce and gig-economy late deliveries (a growing circadian-disorder population), and the pre-dawn faith schedules that institutionalise the advanced phase for devout elders.",
    lifetimeRisk: "The physiology's honest risk tier: chronic short sleep associates with metabolic, cardiovascular and possibly long-term brain burden (stated as risk-association); sleep is a psychiatric vital sign — nearly every psychiatric disorder disturbs sleep and disturbed sleep deepens nearly every one.",
    genderRatio: "Sleep complaints overall run commoner in women (the insomnia tier's 1.5–2×), with the menopausal transition a specific architecture-disrupting window; the physiology itself is sex-neutral.",
    ageOfOnset: "The architecture ages: childhood's deep, front-loaded nights; adolescence's biologically delayed clock; adulthood's stable window; ageing's advanced, thinned, fragmented architecture — each stage carrying its own signature complaints.",
    indianNotes: "The Indian lens is environmental sleep medicine: fan failures, humidity and mosquito disturbance are the honest sleep enemies no Western protocol anticipates ('no CBT-I protocol survives a mosquito'); the practical tier (net, cross-ventilation, cooler timing) belongs in the prescription itself.",
  },
  etiology: [
    { category: "biological", factor: "The two-process architecture", details: "Process S (adenosine homeostat) and Process C (SCN circadian timer) — the interacting system whose mistiming generates most common sleep complaints." },
    { category: "biological", factor: "Chronotype genetics", details: "Larks and owls are substantially genetic; society's lark-time scheduling chronically taxes owls — a fairness fact as much as a biology fact." },
    { category: "biological", factor: "The lifespan arc", details: "Adolescent phase delay (later melatonin onset, biologically driven); ageing advance (early-sleepy, early-waking), N3 thinning, fragmentation, amplitude loss." },
    { category: "environmental", factor: "The light environment", details: "Evening screens and light delay melatonin onset precisely where young-adult insomnia lives; morning light entrains — the light-history is now a core clinical history." },
    { category: "environmental", factor: "The shift-work economy", details: "The clock shifts ~1 hour per day eastbound-ish; night shifts never fully adapt (morning commute light sabotages); the cardiometabolic toll is occupational-health psychiatry's daily bread." },
    { category: "social", factor: "The Indian sleep environment", details: "Joint-family noise and shared rooms; the sanctioned afternoon nap; wedding and festival seasons' multi-night late events (predictable post-season complaint waves); faith-morning schedules institutionalising the advanced phase." },
  ],
  symptomClusters: [
    {
      category: "1. The architecture's signatures (what normal sleep looks like)",
      symptoms: ["Sleep onset within ~10–20 minutes of lights-out (pressure high, gate open)", "4–6 cycles of ~90 minutes; deep sleep front-loaded; REM back-loaded and lengthening toward morning", "Continuity through the night with brief (forgotten) wakings; the morning report of refreshment", "The stable rise-time anchor: the whole architecture times itself off the morning wake, not the evening bed"],
    },
    {
      category: "2. The clock-problem signatures (what mistiming looks like)",
      symptoms: ["Exhausted at 8 p.m., wide awake at 10 p.m. — the wake-maintenance zone meeting an early bed", "Cannot sleep before 1 a.m., cannot wake at 6 a.m. — the delayed phase (teenager or owl)", "Sleeps soundly 8 p.m.–4:30 a.m., functions by day — the advanced phase (ageing or faith-scheduled)", "Sleeps at the wrong times by the sun's clock — shift-work and jet-lag patterns, never fully adapting"],
    },
    {
      category: "3. The psychiatric vital-sign signatures (what the disorders look like in sleep)",
      symptoms: ["Depression's early waking and altered REM architecture; mania's reduced need for sleep (the red-flag symptom that precedes and predicts)", "PTSD's nightmares and the insomnia-and-fear-of-sleep cascade; dementia's sundowning", "ADHD's delayed phase; psychosis's sleep-wake collapse — each diagnosis carries a sleep signature, and each sleep change precedes or deepens relapse", "Sleep and mood run bidirectionally: new insomnia roughly doubles later depression risk (the Insomnia course's figure)"],
    },
    {
      category: "4. The sedation-not-restoration signatures (what pill-sleep looks like)",
      symptoms: ["'Slept 8 hours, woke wrecked' — benzodiazepines and alcohol suppress slow-wave and REM; the departments never ran", "Early-morning rebound waking after evening alcohol (the 3 a.m. bill of the nightcap)", "Tolerance creep: more tablet for less sleep — the pharmacology the Insomnia course exits"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The measurement craft (this course's 'diagnosis')",
      code: "Reading the sleep diary",
      criteria: [
        "The two-week sleep diary is the examination of sleep medicine: bedtime, lights-out, latency, wakes and durations, out-of-bed time, naps (ALL of them), caffeine and alcohol times, perceived quality.",
        "The diary sorts the three common patterns: delayed phase (normal sleep at late times — weekends reveal it), advanced phase (early-sleepy, early-waking), and insufficient opportunity (the arithmetic gap between hours available and hours needed).",
        "The hypnogram is the physiology's readout: front-loaded N3, back-loaded REM — what polysomnography sees and what the diary infers.",
        "Actigraphy where diary integrity is doubtful; polysomnography is NOT a routine test — reserved for suspected apnoea, parasomnia and treatment-refractory cases (the courses that follow carry those indications).",
      ],
      duration: "Two weeks of diary before any treatment verdict — the discipline that catches naps, caffeine timing and phase patterns a single interview misses.",
      indianNote: "The Indian diary must ask for the afternoon nap by name ('the 3 p.m. chair-nap counts') and the household's evening schedule — the joint-family night and the nap economy reframe many 'insomnias' as sleep-misallocation before any disorder is diagnosed.",
    },
  ],
  severityScales: [
    {
      name: "The sleep-need staging",
      fullName: "The architecture's honest norms (what to tell patients)",
      measures: "Not a scored instrument but the staging of normal sleep every prescription and expectation runs against — the facts that prevent both pathologising normal variation and normalising deprivation.",
      ranges: [
        { min: 0, max: 0, severity: "The adult range", action: "~7–9 hours as the population anchor, with honest individual range (6–9 in adults): 'I need 5 only' is usually pressure-adaptation, not constitution — try two weeks of 7.5 before deciding" },
        { min: 1, max: 1, severity: "The adolescent tier", action: "8–10 hours against a biologically delayed clock — the school-start collision is chronobiology, not character; later starts show measurable learning and mental-health gains" },
        { min: 2, max: 2, severity: "The ageing tier", action: "Earlier phase, thinner N3, fragmented continuity: the elder's 'I don't sleep deep anymore' is architecture, not attitude — expectation-setting beats sedation" },
        { min: 3, max: 3, severity: "The deprivation line", action: "Below ~6 hours chronically: measurable metabolic, attention and mood costs accrue — a week of 5-hour nights measurably shifts glucose regulation, appetite hormones and cytokine balance" },
      ],
      indianNote: "The Indian staging includes the nap: a short pre-3 p.m. nap is fine for most (functional biphasic sleep for elders and farmers); for the insomniac office-worker it is pressure-spending the night bills for — the timing-and-length rule, not the ban.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Sleep misallocation (not a disorder)", distinguishingFeatures: "Nap economy, late caffeine, insufficient opportunity — the diary's arithmetic.", keyDifferentiator: "Normal sleep when timing and pressure are corrected: physiology working as designed; the 'insomnia' was the budget." },
    { condition: "Delayed sleep-phase pattern", distinguishingFeatures: "Cannot sleep before 1–2 a.m., cannot wake for morning demands; weekends reveal normal sleep at late times.", keyDifferentiator: "The clock shifted, not broken: morning light and melatonin timing (chronobiotics) shift it back — the Insomnia course's circadian tier." },
    { condition: "Advanced sleep-phase pattern (the elder)", distinguishingFeatures: "Sleeps soundly 8 p.m.–4:30 a.m., functional by day with an afternoon nap.", keyDifferentiator: "If the whole rhythm is shifted and functioning is intact, the treatment is expectation — not sedatives; the faith-morning variant is the same architecture with devotional timing." },
    { condition: "The psychiatric sleep signatures", distinguishingFeatures: "Depression's early waking, mania's reduced need, PTSD's nightmares, dementia's sundowning.", keyDifferentiator: "The sleep change tracks the mental state — and precedes relapse: chart sleep like temperature in every psychiatric review; the underlying disorder's treatment is the sleep treatment." },
    { condition: "The sedation trap", distinguishingFeatures: "'Slept' under benzodiazepines or alcohol, unrefreshed on waking.", keyDifferentiator: "Sedation is not restoration: the architecture was suppressed, not run — the honest explanation that opens the CBT-I conversation." },
  ],
  management: [
    {
      category: "lifestyle",
      name: "The circadian anchor (the one rule that times everything)",
      description: "Consistent rise-time — fixed BEFORE bedtime is negotiated — is the anchor the whole architecture times itself off. Morning light exposure entrains the clock (outdoor light beats indoor lux); evening light discipline (dimming, the last hour's light-diet) protects melatonin onset; the caffeine cut-off lands 8 hours before bed (the 5–6 hour half-life's arithmetic); alcohol's nightcap is retired with its REM bill explained.",
      whenToUse: "Every patient, every complaint, first — the foundation tier of sleep medicine.",
      indianContext: "The Indian version negotiates the household: the evening chai switched to milk/lemon-grass variants (the family's serving habit, not just the patient's), the morning outdoor light (the balcony, the walk) as the entrainment prescription, and the festival-season advisory (naps, light timing, caffeine cut-offs) as simple population-level prevention.",
    },
    {
      category: "lifestyle",
      name: "The environment tier (Indian environmental sleep medicine)",
      description: "The honest sleep enemies of much of India — fan failures, humidity, mosquito disturbance, shared-room noise, late-evening household life — belong inside the prescription: the net, the cross-ventilation, the cooler's timing, the earplugs-and-eye-mask tier, the household quiet-hour negotiation, the room-shuffle that gives the poor sleeper the quiet side.",
      whenToUse: "Every Indian sleep consultation — the protocol that ignores the mosquito fails.",
      indianContext: "The joint-family negotiation is the intervention: a household quiet-hour, the dinner-3-hours-before-bed rule where culturally feasible (the 10 p.m. dinner is its own insomnia engine), and the co-sleeping-children reality priced into the plan rather than lectured away.",
    },
    {
      category: "lifestyle",
      name: "The nap discipline (timing and length, not the ban)",
      description: "The afternoon nap is India's sanctioned institution — functional biphasic sleep for elders and farmers, pressure-spending for the insomniac office-worker. The clinical task is not banning naps but TIMING them: before 3 p.m., under 30 minutes (or deliberately prescribed longer for night-shift workers as part of their anchor-sleep protocol).",
      whenToUse: "Every insomnia-and-hypersomnia assessment includes the ALL-sleep diary question ('when do you sleep, ALL of it, including the 3 p.m. chair-nap?').",
      indianContext: "The reframe the diary delivers: many 'insomnias' are sleep-misallocation — the nap spent the pressure the night needs; the shift-worker's planned nap is a treatment, the insomniac's nap is a loan.",
    },
  ],
  safety: {
    redFlags: [
      "Sleep loss as mania's opening move — the reduced-need-for-sleep that precedes and predicts: in bipolar-spectrum patients, sleeping 4 hours and feeling fine is an emergency review trigger, not an achievement",
      "Sleepiness at the wheel — the public-health emergency the Hypersomnia course carries; drowsy driving kills on highways",
      "Chronic sleep restriction in safety-critical occupations (drivers, machine operators, night healthcare) — occupational-health psychiatry's daily tier",
      "The unrefreshed snorer — apnoea hiding behind 'insomnia' or 'tiredness' labels, needing the sleep study, not the third antidepressant",
    ],
    urgentGuidance:
      "The physiology's safety rules: (1) chart sleep like temperature in every psychiatric review — the vital sign that precedes relapse; (2) in bipolar-spectrum patients, sleep restriction protocols run only with mood-stabiliser cover and psychiatric review (the Insomnia course's mania-hazard caution — the same rule applies to exam-season all-nighters); (3) drowsy-driving gets the direct question and the direct advice — 'have you ever nodded off at the wheel, even for a second?' means stop-driving conversations, not encouragement; (4) the unrefreshed snorer gets the apnoea screen before any hypnotic.",
  },
  drugLinks: [],
  contentGaps: [
    "Caffeine — the adenosine-blocking molecule this course's Process S runs on — has no KYP drug lesson; the timeline arithmetic is taught here.",
    "The wake-promoting tier (modafinil, armodafinil, methylphenidate) and sodium oxybate have no KYP lessons; their evidence lives in the Hypersomnia course.",
    "Melatonin, the Z-drugs, the orexin antagonists and the benzodiazepine-exit architecture live in the Insomnia course — no routes duplicated here.",
  ],
  patientGuide: {
    whatIsIt:
      "Sleep is an active, organised brain state — a factory night-shift with departments: deep sleep repairs the body and washes the brain, dream sleep files the day's memories and emotions, and the whole shift runs in ~90-minute cycles four to six times a night. Two systems decide when sleep comes: a sleep-pressure meter that builds every hour you are awake, and a body clock in the brain that times everything to the day-night cycle. Understanding these two systems explains almost every common sleep complaint — and why the treatments that work best retrain the clocks rather than knock you out.",
    whatCausesIt:
      "Nothing is 'wrong' in most sleep complaints — the clocks are mistimed. Going to bed too early (before the clock opens its gate), napping away the pressure the night needs, late caffeine (present for hours after the cup), evening screens delaying the clock, or night-shift work fighting the sun itself: each mistimes one of the two systems. The sleep that results feels broken; the system that produced it is merely mis-scheduled.",
    symptoms:
      "The signs of mistimed clocks: exhausted early in the evening but wide awake at bedtime; sleeping fine but at the wrong hours (very late, or very early); waking unrefreshed after pill- or alcohol-assisted nights (sedation is not restoration); feeling 'wired and tired' at the wrong times. The signs of healthy sleep: falling asleep within about 20 minutes, sleeping through with brief forgotten wakings, waking refreshed at a stable hour, and functioning through the day without dozing when you sit still.",
    treatment:
      "The physiology-first approach: a fixed wake-up time (the anchor that times everything), morning light (the clock's breakfast), a caffeine cut-off 8 hours before bed, an evening light-discipline hour, and the environment fixed honestly (the mosquito net, the quiet hour, the room shuffle). Where a full disorder stands behind the complaint, the companion courses in this series carry the treatments — the structured insomnia programme, the sleepiness work-up, the parasomnia safety protocol.",
    selfHelp: [
      "Fix the wake-up time first — before negotiating bedtime; the whole system anchors to the morning.",
      "Take the caffeine timeline seriously: the 4 p.m. cup is still working at 10 p.m. (a 5–6 hour half-life, every cup).",
      "Time the nap honestly: before 3 p.m. and under 30 minutes, or it spends the pressure the night needs.",
      "Give the clock its morning light — the balcony, the walk, the window; indoor light barely registers.",
      "Do not treat sedation as sleep: alcohol and sleeping pills suppress the deep and dream departments and the morning presents the bill.",
      "Track your sleep for two weeks before any verdict — the diary's arithmetic (hours in bed vs hours asleep, naps included) tells more than any single night's experience.",
    ],
    whenToSeekHelp: [
      "Sleep problems running three nights a week for three months with daytime consequences — the disorder threshold (the Insomnia course)",
      "Sleepiness when you should be awake — at the wheel, at work, in conversation — the safety review (the Hypersomnia course)",
      "Behaviours erupting out of sleep — walking, screaming, fighting dreams — the safety-and-diagnosis tier (the Parasomnias course)",
      "Any psychiatric care: sleep is charted like temperature at every review — report the changes honestly; they precede and predict",
      "A bed partner reporting you stop breathing at night — the sleep study tier, sooner rather than later",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — the counselling tier for basic sleep-protocol guidance",
      "General psychiatry and medicine OPDs for the sleep diary work-up",
      "Metro sleep-medicine programmes and medical-college sleep labs for the study tier (apnoea, parasomnia, refractory complaints)",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific sleep-physiology guideline exists; the science follows the international architecture (Borbély's two-process model, the AASM/ICSD framework, the Harvard circadian lineage) with Indian adaptation craft: household-negotiated hygiene, the nap economy, the shift-work protocols.",
    systemContext: "The Indian sleep environment is its own clinical territory: shared rooms, late-evening household life (TV serials, late dinners, relatives' calls), co-sleeping children, fan failures, humidity, mosquitoes, and wedding/festival seasons producing predictable post-season complaint waves. Solo-bedroom Western hygiene advice ignores this architecture; the Indian prescription negotiates the household (quiet-hour, room-shuffle, earplugs-and-eye-mask tier) and fixes the environment honestly (net, cross-ventilation, cooler timing).",
    programmeContext: "The night-shift economy (IT/BPO, factory rotations, healthcare night duties, gig-economy late deliveries) manufactures circadian disorder at industrial scale — occupational frames ('the employer's light-management policy, forward-rotating shifts') beat individual advice at scale. Faith-morning schedules (pre-dawn prayers across traditions) institutionalise the advanced phase for devout elders — often healthy adaptation, occasionally misdiagnosed as terminal insomnia.",
    costConsiderations: "The physiology-first package is free: the fixed rise-time, morning light, caffeine arithmetic, nap timing, and the environment fixes. The paid tiers where needed: the two-week diary (a notebook), actigraphy and polysomnography at metro/medical-college labs (the courses that follow carry the indications and costs); Tele-MANAS 14416 delivers basic sleep-protocol counselling.",
    culturalConsiderations: "The afternoon nap is a sanctioned institution across age groups — the clinical task is timing discipline (before 3 p.m., under 30 minutes), not abolition; for elders and farmers it is functional biphasic sleep. The faith-morning question separates the healthy shifted rhythm from true insomnia: 'is the early waking followed by an afternoon crash, or is the whole rhythm simply shifted?'. The festival-and-wedding season's multi-night late events earn a pre-season advisory (naps, light timing, caffeine cut-offs) as simple population-level prevention.",
    patientCounselling: [
      "The diary question verbatim: 'when do you sleep, ALL of it, including the 3 p.m. chair-nap?' — the question that reframes misallocation as the diagnosis.",
      "The chai timeline conversation: the family's serving habit negotiated, not just the patient's cup — the 5–6 hour half-life arithmetic delivered respectfully.",
      "The elder expectation script: 'sleeping lightly and waking early is your architecture ageing, not your health failing' — expectation-setting beats sedation.",
      "The teenager script for parents: 'the late clock is biology, not defiance; the fix is timing (light, schedule), not character' — and the school-start conversation where influence exists.",
      "The festival-season advisory: the pre-season drill (planned naps, caffeine cut-offs, the recovery week) — the same meteorology the exam season gets.",
    ],
  },
  decisionPath: {
    title: "Sorting the sleep complaint",
    nodes: [
      {
        id: "start",
        question: "A sleep complaint arrives. What is the two-week diary's pattern?",
        branches: [
          { label: "Normal sleep at wrong times (late nights, late mornings on free days)", next: "delayed-path" },
          { label: "Normal sleep at wrong times (early nights, early mornings, functional by day)", next: "advanced-path" },
          { label: "Adequate sleep impossible in the life as scheduled", next: "insufficient-path" },
          { label: "Pressure and timing correct but sleep still broken", next: "disorder-tier" },
        ],
      },
      {
        id: "delayed-path",
        question: "Delayed phase: the clock, not the sleep.",
        recommendation: "Circadian-tier advice: the fixed rise-time anchor with MORNING light (the entrainment prescription — outdoor beats indoor); evening light discipline; melatonin timing as chronobiotic (hours before desired sleep, low dose — the Insomnia course's dosing science); the adolescent variant engaged through school timing where influence exists; shift-work variants routed to the occupational protocol (sunglasses commute, anchor sleep, forward rotations).",
      },
      {
        id: "advanced-path",
        question: "Advanced phase: check functioning before pathologising.",
        recommendation: "If the whole rhythm is shifted and daytime function holds (with a mapped afternoon nap): expectation-setting, not sedation — the ageing or faith-morning variant is architecture, not insomnia. If distress or daytime failure accompanies: the full sleep work-up before any hypnotic; evening light and activity scheduling as the phase-holding tier.",
      },
      {
        id: "insufficient-path",
        question: "Insufficient opportunity: the arithmetic, not the machine.",
        recommendation: "The structured schedule expansion: 30 minutes earlier per fortnight anchored to the fixed rise-time; the digital-evening curfew negotiated honestly; the bedroom-environment fixes (the Indian tier: net, ventilation, quiet-hour); occupational advocacy where the job itself forbids the hours — the deprivation is the diagnosis and the prescription is sleep.",
      },
      {
        id: "disorder-tier",
        question: "Physiology correct, timing correct, sleep still disordered.",
        recommendation: "Route to the specific courses: the Insomnia course for the 3×3 gates and CBT-I (check the maintaining behaviours first: early-to-bed, lie-ins, naps, caffeine stacking, nightcap alcohol); the Hypersomnia course for sleepiness with adequate opportunity (the four engines; the apnoea screen before any hypnotic); the Parasomnias course for events erupting from sleep. The psychiatric vital sign runs through all: chart sleep like temperature in every review.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating every sleep complaint with sedation",
      why: "Most common complaints are clock-and-habit mismanagement: the pills force unconsciousness without retraining pressure or timing, suppress the restorative departments, and manufacture tolerance — the classic trap.",
      correction: "Physiology first: the diary, the two-process sorting, the anchor-and-light package — sedation only where a disorder genuinely requires it, briefly, with the Insomnia course's discipline.",
    },
    {
      mistake: "Prescribing an early bedtime for insomnia",
      why: "The wake-maintenance zone actively opposes sleep in the 2–3 hours before habitual bedtime — the early bed adds empty wakeful hours and trains the bed into wakefulness.",
      correction: "The fixed rise-time anchors; bedtime follows sleepiness; the pressure budget gets rebuilt (the Insomnia course's restriction tier) rather than diluted further.",
    },
    {
      mistake: "Ignoring the afternoon nap in the history",
      why: "The nap spends the pressure the night needs — the single most common hidden perpetuator in Indian sleep complaints.",
      correction: "The ALL-sleep diary question; the timing discipline (before 3 p.m., under 30 minutes) for those who need daytime function, the honest reframe (misallocation, not insomnia) for the rest.",
    },
    {
      mistake: "Reading the elder's early waking as insomnia needing a hypnotic",
      why: "Ageing advances phase and thins architecture — the early waking is often the shifted rhythm of a functioning elder; hypnotics add falls and confusion (the elder's specific dangers).",
      correction: "The functioning check first (afternoon crash or intact rhythm?); expectation-setting and nap timing where the rhythm holds; the honest full work-up where distress is real — never long-term benzodiazepines either way.",
    },
    {
      mistake: "Dismissing the adolescent's late nights as character",
      why: "The 1–2 hour biologically driven phase delay is chronobiology against the school bell — 'laziness at dawn' misreads a clock as a character flaw.",
      correction: "The timing tier (morning light, the schedule as negotiable as school allows); the later-start evidence quoted where school policy conversations exist; the screen-and-light layer addressed without blaming.",
    },
    {
      mistake: "Forgetting the sleep is a psychiatric vital sign",
      why: "Every major psychiatric disorder carries a sleep signature, and sleep changes precede relapse — the unasked sleep question is the missed early warning.",
      correction: "Chart sleep like temperature at every review: quantity, quality, the changed pattern — with mania's reduced-need treated as the red flag it is.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Draw the hypnogram: stages, cycles, the front-loaded N3 and back-loaded REM asymmetries.",
        "The two-process model and its treatment implications.",
        "Sleep's functions with one clinical translation each.",
        "REM atonia and its failure state (the RBD pointer).",
        "The adolescent phase delay and the ageing advance.",
      ],
      practical: [
        "Read a two-week sleep diary aloud: pattern, misallocation, the nap economy.",
        "Take the caffeine-and-light history — and present the timeline arithmetic.",
      ],
      longAnswer: [
        "Physiology of sleep: architecture, regulation and functions — the evergreen.",
        "A 17-year-old who cannot sleep before 1 a.m. and cannot wake for school: the physiology-first approach.",
      ],
    },
    neetPg: {
      highYield: [
        "Slow-wave (N3) sleep concentrates in the FIRST third; REM in the LAST third — the architecture's cardinal asymmetry.",
        "Two-process model (Borbély): homeostatic pressure (adenosine-dependent) + circadian clock (SCN) — the logic of sleep-restriction and light-timing treatments.",
        "Caffeine promotes wakefulness by blocking adenosine receptors — with a 5–6 hour half-life that punishes evening tea.",
        "REM atonia: why the body stays still during dream-running; its failure is REM behaviour disorder (the over-50 synucleinopathy red flag).",
        "Sleep spindles + K-complexes define N2 (the majority stage).",
        "Glymphatic clearance runs mainly during slow-wave sleep (Xie et al., 2013).",
        "The adolescent shift: a 1–2 hour biologically driven phase DELAY — the later-start-time policy evidence base.",
        "Ageing: phase ADVANCE, N3 thinning, fragmentation, amplitude loss.",
        "Alcohol and benzodiazepines suppress slow-wave and REM sleep — sedation is not restoration (the 'slept 8, woke wrecked' explanation).",
        "Sleep and psychiatry run bidirectionally: depression's early waking, mania's reduced need (the relapse-preceding red flag), PTSD's nightmares, dementia's sundowning.",
      ],
      pyqConcepts: [
        "The wake-maintenance zone as the explanation for early-bedtime failures (and the toddler's impossible 'extra early' night).",
        "Orexin/hypocretin as the wake-hold switchboard — the narcolepsy pointer (full detail in the Hypersomnia course).",
        "Melatonin as chronobiotic, never hypnotic — the timing-and-dose science point.",
        "The all-nighter question: memory consolidation during spindles and slow-wave sleep means the studied-then-slept night stores more than the all-nighter.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 16-year-old board-year student who cannot sleep before 1:30 a.m., cannot wake at 6 for coaching, sleeps 9 hours on weekends, and is labelled 'lazy and undisciplined' at school: the physiology-first read (biologically delayed clock colliding with lark-timed demands), the two-week diary confirming the weekend pattern, the treatment as timing (fixed rise-time, morning outdoor light, evening light discipline, melatonin timing as chronobiotic in the correct window) rather than character correction — and the school conversation where influence exists.",
        "A 68-year-old devout man sleeping 8 p.m.–4:30 a.m., functional through the day with a post-lunch nap, brought by his son for 'insomnia treatment': the advanced-phase read (ageing clock plus faith-morning schedule), the functioning check that separates architecture from disorder, the expectation-setting consultation (and the explicit no-long-term-benzodiazepine position with the falls-and-confusion rationale).",
      ],
    },
    fmge: {
      frequentlyTested: [
        "N3 first-third, REM last-third; spindles and K-complexes define N2.",
        "The two-process model; caffeine's adenosine mechanism.",
        "REM atonia and its failure; the adolescent delay vs the ageing advance.",
        "Sedation is not restoration (the alcohol/benzodiazepine architecture suppression).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The sleep-history is now a light-history: the evening screen-and-light layer belongs in every adolescent and young-adult insomnia assessment.",
        "The shift-work prescription set (sunglasses commute, anchor sleep, forward rotations, the 2 a.m. caffeine ceiling) is occupational psychiatry delivered one worker at a time — and policy advocacy when the employer is reachable.",
        "The elder sleep consultation is mostly expectation management: the architecture thins and advances, and the greatest harm often arrives via the prescription pad (falls, confusion, tolerance).",
        "In every bipolar-spectrum patient, sleep is the relapse meter: teach the patient and family to chart it, and treat the 4-hour-feeling-fine night as the review trigger it is.",
        "The Indian environment tier (mosquito, fan, household noise, shared rooms) is not trivia: protocols that ignore it fail, and the household negotiation is genuinely therapeutic work.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The boy who could not sleep before the syllabus did",
      presentation: "They called it exam indiscipline; the diary called it a clock two hours late.",
      initialPresentation: "A 16-year-old board-year student was brought for 'sleep mismanagement': he could not fall asleep before 1:30 a.m., could not wake at 6 for coaching, dozed in the first two periods, and was labelled 'lazy and undisciplined' at school. On weekends and holidays he slept 2 a.m.–11 a.m. and woke refreshed — the pattern his school record had never noticed. Two weeks of diary confirmed it: normal-duration, normal-quality sleep at a delayed phase; a 5-hour school-night debt repaid every Saturday.",
      history: "No medical illness; evening screen-and-study schedule until 12:30 a.m. with the phone in bed; a morning routine of a dark car ride to coaching (no morning light); the father 'the same at his age — he outgrew it'; no mood episodes, no substances beyond chai (four cups, last at 8 p.m.).",
      examination: "Healthy adolescent; the mental state normal; the Epworth-concept dozing pattern confined to morning hours; the diary's arithmetic: 6.2 hours school nights, 9 on weekends — the diagnostic gap.",
      diagnosis: "Delayed sleep-phase pattern (the adolescent circadian delay) colliding with school timing — physiology, not indiscipline.",
      management: "The timing prescription: fixed rise-time at 6:30 including weekends (the anchor); 20 minutes of outdoor morning light on the way to coaching (the car window exchanged for the walk); evening light discipline after 10 p.m. (dim mode, the phone parked outside the bedroom); melatonin 0.5–1 mg at 7:30 p.m. as chronobiotic (hours before desired sleep — the timing science the family was taught); the caffeine ceiling moved to 4 p.m.; the school engaged for a 7:45 start discussion where the timetable allowed.",
      outcome: "Six weeks: sleep onset at 12:15, rise at 6:30 without crisis; morning dozing gone; first-period attendance restored; the school's 'lazy' label formally revised after the principal read the physiology letter; the father's line at review: 'he is the same boy with a different clock — thank you for proving it was not his character'.",
      teachingPoints: [
        "The weekend diary is the delayed phase's confession: normal sleep at late times — the single observation that separates clock from character.",
        "The adolescent 1–2 hour phase delay is biological; the treatment is timing engineering (light, anchor, chronobiotic timing), not discipline.",
        "Morning outdoor light is the entrainment prescription — the dark car ride to coaching was actively maintaining the delay.",
      ],
    },
    {
      title: "The grandfather's clock",
      presentation: "Asleep by eight, awake by four-thirty, and a son demanding 'treatment for his insomnia'.",
      initialPresentation: "A 68-year-old devout retired teacher was brought by his son for 'insomnia treatment': he fell asleep by 8:15 p.m., woke at 4:30 a.m. unable to return to sleep, and napped 40 minutes after lunch. The son's worry: 'he is not sleeping enough, doctor — give him something'. The functioning audit told a different story: alert through the morning, temple at 5:15, full daytime function, an afternoon nap by design, and no distress of his own — the complaint was the household's, carried to the clinic.",
      history: "Retired teacher; pre-dawn prayer practice for four decades (the faith-morning schedule institutionalising the advanced phase); no medical comorbidity on review (TSH, glucose normal); no hypnotic use yet — the son had purchased diphenhydramine and was awaiting permission; no depressive features on screen (mood, anhedonia, energy intact — the early-waking was not depression's signature here).",
      examination: "Healthy, alert elder; mental state normal; the sleep diary: 8:15 p.m.–4:30 a.m. consolidated, one brief waking, the 40-minute post-lunch nap; the 'unrefreshed' report absent — his own words: 'I sleep well, doctor; my son does not like the timing'.",
      diagnosis: "Advanced sleep-phase pattern (the ageing clock plus four decades of devotional scheduling) — architecture, not insomnia.",
      management: "The expectation-setting consultation: the ageing clock drawn for the family (phase advance, thinned N3 — the elder's morning-ness is biology, not disease); the functioning evidence cited (the audit that found no failure); the diphenhydramine returned unopened (the anticholinergic, fall-risk counsel at his age); the nap kept and timed (post-lunch, 40 minutes, by design); evening light and social activity scheduled to hold the phase where it served his temple mornings; the son counselled on what to watch for (true distress, daytime failure, mood change — the triggers for a real review).",
      outcome: "Three-month review: the household at peace with the clock; no hypnotic ever started; the elder's own line: 'my son sleeps now, knowing I am at the temple instead of struggling'; one interim call for a viral illness's transient insomnia managed by expectation alone.",
      teachingPoints: [
        "The functioning check separates the shifted rhythm from true insomnia: afternoon crash and daytime failure earn the work-up; intact rhythm earns expectation-setting.",
        "The faith-morning schedule is the advanced phase institutionalised — healthy adaptation, occasionally misdiagnosed as terminal insomnia.",
        "The elder's specific dangers are iatrogenic: the diphenhydramine already purchased is the exact trap the expectation consultation prevents (falls, confusion, tolerance).",
      ],
    },
  ],
  clinicalPearls: [
    "N3 front-loads into the first third; REM back-loads into the last — the architecture's cardinal asymmetry and the source of half its clinical questions.",
    "Two processes govern timing: adenosine pressure (S) and the SCN clock (C) — sleep needs both high pressure and an open gate.",
    "Caffeine blocks adenosine receptors with a 5–6 hour half-life — the 4 p.m. chai is present at 10 p.m.",
    "The wake-maintenance zone: the 2–3 pre-bedtime hours when the clock opposes sleep — why early beds fail and midnight succeeds.",
    "Glymphatic clearance runs in slow-wave sleep — the honest motivation frame for deep-sleep protection, stated as risk-association.",
    "REM atonia keeps dreams still; its failure is REM behaviour disorder (the over-50 synucleinopathy red flag — full story in the Parasomnias course).",
    "The adolescent clock delays 1–2 hours biologically; the ageing clock advances and thins — chronobiology, not character, at both ends of life.",
    "Sedation is not restoration: benzodiazepines and alcohol suppress slow-wave and REM — 'slept 8 hours, woke wrecked'.",
    "The all-nighter stores less than the studied-then-slept night: consolidation runs on spindles and slow-wave sleep.",
    "Sleep is a psychiatric vital sign: depression's early waking, mania's reduced need, PTSD's nightmares, dementia's sundowning — chart it like temperature.",
    "The Indian nap discipline: before 3 p.m., under 30 minutes — timing and length decide, not the nap itself.",
  ],
  highYieldSummary: [
    "Architecture: 4–6 cycles of ~90 minutes; N1 the transition; N2 the majority (spindles + K-complexes); N3 deep restorative sleep front-loaded (growth hormone, immune work, glymphatic clearance); REM dreaming back-loaded with lengthening periods toward morning; REM-atonia paralyses the dreamer.",
    "Two-process regulation (Borbély): Process S — the adenosine homeostat, built by waking, paid by sleep, partially spent by naps, blindfolded by caffeine (5–6 hour half-life); Process C — the SCN (~20,000 cells) entrained by light, timing melatonin (dim-light onset = biological night), temperature (pre-dawn trough, rise as the body's alarm) and the wake-maintenance zone (2–3 pre-bedtime hours of clock-opposed sleep).",
    "Functions: memory consolidation (hippocampal replay during spindles and slow-wave sleep — the all-nighter question's answer); emotional processing (REM — the trauma-therapy link); glymphatic clearance (N3 — amyloid-related burden, stated as risk-association); metabolic-immune maintenance (a week of 5-hour nights measurably shifts glucose, leptin/ghrelin, cytokines).",
    "Life stages: chronotypes substantially genetic, society on lark-time; adolescence delays 1–2 hours (the school-bell clash; later-start evidence); ageing advances, thins N3, fragments and reduces amplitude; shift work never fully adapts (morning commute light sabotages) — the shift-work disorder and cardiometabolic toll.",
    "Clinical translations: most common complaints are clock problems (sleep restriction, light timing, stimulus control retrain clocks rather than sedate); sleep is the psychiatric vital sign (every disorder's signature, every relapse's precursor — mania's reduced need the red flag); sedation is not restoration (benzodiazepine/alcohol architecture suppression).",
    "The assessment craft: the two-week ALL-sleep diary (naps by name, caffeine and alcohol times, perceived quality); the three patterns it sorts (delayed phase, advanced phase, insufficient opportunity); actigraphy where integrity is doubtful; polysomnography reserved for apnoea/parasomnia/refractory indications.",
    "The Indian tier: the nap economy (timing discipline, not abolition); joint-family environments (quiet-hour negotiation, room-shuffle, the net-and-ventilation prescription — no protocol survives a mosquito); night-shift economies (occupational light-management beats individual advice); faith-morning schedules (healthy advanced phase unless functioning fails); wedding/festival seasons (pre-season advisories as population prevention).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "sleep-basics-quiz-1",
      question: "Slow-wave (N3) sleep concentrates in:",
      options: ["The last third of the night", "The first third of the night", "Only REM", "Equally throughout"],
      correctIndex: 1,
      explanation: "Front-loaded deep sleep, back-loaded REM — the architecture's cardinal asymmetry.",
      afterSectionId: "mechanism",
    },
    {
      id: "sleep-basics-quiz-2",
      question: "The two processes governing sleep timing:",
      options: ["Melatonin and cortisol", "Homeostatic pressure (adenosine-dependent) and the circadian clock (SCN)", "Dopamine and serotonin", "Sleep spindles and K-complexes"],
      correctIndex: 1,
      explanation: "The Borbély two-process model — and the logic of sleep-restriction and light-timing treatments.",
      afterSectionId: "mechanism",
    },
    {
      id: "sleep-basics-quiz-3",
      question: "Caffeine promotes wakefulness mainly by:",
      options: ["Releasing adrenaline", "Blocking adenosine receptors", "Increasing melatonin", "Activating orexin"],
      correctIndex: 1,
      explanation: "The pressure-meter's blindfold — with a 5–6 hour half-life that punishes evening tea.",
      afterSectionId: "neurotransmitters",
    },
    {
      id: "sleep-basics-quiz-4",
      question: "REM atonia explains:",
      options: ["Sleep spindles", "Why the body stays still during dream-running", "Sleep-onset", "The afternoon nap"],
      correctIndex: 1,
      explanation: "The REM-safety paralysis; its failure is REM behaviour disorder (the Parasomnias course's red flag).",
      afterSectionId: "pathways",
    },
    {
      id: "sleep-basics-quiz-5",
      question: "The adolescent sleep shift is:",
      options: ["A 1–2 hour phase ADVANCE", "A 1–2 hour phase DELAY, biologically driven", "Pure rebellion", "Absent in girls"],
      correctIndex: 1,
      explanation: "Chronobiology against the school bell: the later-start-time policy evidence base.",
      afterSectionId: "timeline",
    },
    {
      id: "sleep-basics-quiz-6",
      question: "Alcohol's effect on sleep architecture:",
      options: ["Increases REM", "Sedates while suppressing slow-wave and REM sleep — sedation, not restoration", "Has no effect", "Lengthens N3"],
      correctIndex: 1,
      explanation: "The 'slept 8 hours, woke wrecked' explanation — plus the 3 a.m. rebound waking.",
      afterSectionId: "symptoms",
    },
  ],
  activeRecallQuestions: [
    { question: "Draw the hypnogram's front-loaded N3 and back-loaded REM from memory, with the 90-minute cycle.", answer: "Four to six ~90-minute cycles through the night: descent N1 → N2 → N3, ascent to REM; the first N3 block is the deepest and longest (front-loaded into the first third — restoration); each cycle's REM period lengthens toward morning (back-loaded into the last third — the remembered 5–6 a.m. dreams); N2 fills about half the night as the majority stage (spindles + K-complexes).", topic: "Architecture" },
    { question: "Explain the two-process model in four sentences and tie EACH to a named treatment.", answer: "(1) Adenosine-driven homeostatic pressure builds with every waking hour — sleep-restriction therapy rebuilds it when insomnia has spent it. (2) The SCN circadian clock times the sleep-wake gate by light — morning light and timed melatonin (chronobiotics) shift the gate. (3) Sleep arrives when pressure is high AND the gate is open — the fixed rise-time anchors the gate while restriction restores pressure. (4) Mistiming either degrades quality even when quantity survives — stimulus control and light discipline protect the pairing the pills cannot substitute.", topic: "Mechanism" },
    { question: "What is the wake-maintenance zone, and which two clinical errors does it explain?", answer: "The 2–3 hours before habitual bedtime, when the circadian clock actively opposes sleep (the 'forbidden zone'). It explains: (1) the insomniac's early bed failing — lying down at 9 p.m. against the gate adds empty wakeful hours and trains the bed into wakefulness, while midnight succeeds; and (2) the toddler's impossible 'extra early' bedtime — the child put down before the gate opens fights sleep biologically. The rule: bedtime follows sleepiness; the rise-time anchors the clock.", topic: "Mechanism" },
    { question: "What does the glymphatic system do, when, and how honestly should it be taught?", answer: "It is the brain's waste-clearance network, running mainly during slow-wave (N3) sleep — cerebrospinal fluid flushing metabolic waste including amyloid-related burden through the expanded interstitial space of deep sleep. The honest framing: chronic short sleep plausibly burdens long-term brain health as a risk-association (Xie et al., Science 2013, and the lineage since) — a motivation frame for protecting deep sleep, never a scare tactic of certainty, and never a claim that any specific disease follows any specific night.", topic: "Functions" },
    { question: "Which sleep stage does alcohol suppress, and what is the patient's morning report of that?", answer: "Alcohol sedates while suppressing both slow-wave and REM architecture (with REM rebound later in the night — the 3 a.m. waking). The patient's morning report: 'I slept 8 hours and woke wrecked' — sedation without restoration, the night-shift departments never having run. Benzodiazepines produce the same honest explanation for pill-sleep unrefreshment.", topic: "Clinical practice" },
    { question: "State the adolescent phase-delay and its school-policy implication.", answer: "Adolescents undergo a biologically driven 1–2 hour phase delay (later melatonin onset) — the clock itself shifts, not motivation. The clash is with the school's lark-timetable, not with character; the school-start-time literature shows measurable learning and mental-health gains from later starts. The clinical translation: timing engineering (fixed rise-time, morning outdoor light, evening light discipline, chronobiotic timing) plus advocacy where school policy conversations exist.", topic: "Life stages" },
    { question: "Give the caffeine half-life and the Indian tea-culture timeline implication.", answer: "A 5–6 hour half-life: the 4 p.m. cup is still pharmacologically present at 10 p.m. In much of India the 'bedtime chai' after dinner lands squarely in the sleep-onset window — the cut-off prescription (no caffeine after ~3 p.m., the evening chai switched to milk/lemon-grass variants) resolves a meaningful minority of 'insomnias' alone, and the family's serving habit must be negotiated, not just the patient's cup.", topic: "Indian practice" },
    { question: "Give the two-process logic for why the afternoon nap is the insomniac's enemy but the shift-worker's tool.", answer: "The nap spends the adenosine pressure the coming night needs: for the insomniac (whose problem is insufficient pressure at a mistimed gate), the nap deepens the deficit — hence the timing discipline (before 3 p.m., under 30 minutes) or abolition. For the shift-worker (whose problem is wake-hold across an unnatural night), a planned nap is a pressure deposit deliberately spent to anchor the shift — prescribed, scheduled, and part of the occupational protocol rather than a symptom.", topic: "Mechanism" },
  ],
  faqs: [
    { question: "Isn't sleep just rest — switching off?", answer: "Sleep is an active factory shift with departments: deep-sleep repair, dream-sleep filing, wash-cycles, hormonal maintenance. Sedation switches OFF; sleep switches ON — which is why the tablet that renders you unconscious can still leave you unrefreshed." },
    { question: "Why do I remember dreams only near morning?", answer: "REM concentrates in the last third of the night; your 5 a.m. dreams are the longest REM periods of the night. Early alarms — and alcohol — amputate exactly that department." },
    { question: "I need only 5 hours; my grandfather did too.", answer: "True short-sleepers exist but are rare; most self-declared 5-hour people are chronically pressure-adapted and measurably degraded (metabolic, attention). Try two weeks of 7.5 hours before deciding — the diary, not the identity, settles it." },
    { question: "Does the afternoon nap harm me?", answer: "A short pre-3 p.m. nap is fine for most — for elders and farmers it is functional biphasic sleep. In insomnia it spends the pressure the night needs. Timing and length decide, not the nap itself." },
    { question: "Why can't my teenager sleep before midnight?", answer: "Adolescent clocks run 1–2 hours late, biologically — the clash is with school's lark-timetable, not with character. The fix is timing (light, schedule, discipline of the morning anchor), and later school starts have real evidence behind them." },
    { question: "My old father wakes at 4:30 a.m. Is that insomnia?", answer: "If he sleeps in the evening chair, naps, and crashes mid-morning, it is an advanced-shifted rhythm; if he is awake through the night and distressed, that is insomnia. The pattern tells — not the clock-time alone." },
    { question: "Do screens really matter?", answer: "Evening light delays the melatonin signal, and the content's arousal (reels, matches, arguments) adds a second layer. Both are modifiable — the last hour's light-diet is a legitimate prescription." },
    { question: "Is 'sleeping like a log' deep sleep?", answer: "The idiom survives, but the amount of true deep (N3) sleep shrinks with age. The elder 'sleeping lightly' is usually architecture, not illness." },
    { question: "The wedding season destroys our household's sleep every year. Is that medical?", answer: "Multi-night late events produce predictable post-season complaint waves — the circadian system delayed by festival timing. A pre-season advisory (planned naps, caffeine cut-offs, light discipline, a recovery week) is simple prevention the family can run itself." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "AASM / ICSD-3 — the stage definitions and the sleep-disorders architecture (named framework)" },
      { source: "American Academy of Sleep Medicine — circadian-rhythm and sleep-timing guidance lineage" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.14.1 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Kryger/Principles and Practice of Sleep Medicine lineage — the physiology standard (representative tier)" },
    ],
    trials: [
      { source: "Aserinsky E & Kleitman N (1953) — REM discovery; Dement W & Kleitman — the cycle architecture (the founding literature)" },
      { source: "Xie L et al. (Science, 2013) — glymphatic clearance during sleep" },
      { source: "Crowley SJ et al. / Carskadon MA — adolescent phase delay and the school start-time evidence" },
    ],
    reviews: [
      { source: "Borbély AA — the two-process model of sleep regulation (the S/C framework)" },
      { source: "Czeisler CA et al. — circadian entrainment, light dosing and shift-work science (the Harvard lineage)" },
      { source: "Irwin MR — sleep and immune function; the metabolic-and-appetite literature (leptin/ghrelin tier)" },
      { source: "Walker M — the synthesis tier (memory, emotional processing, glymphatic framing), with its simplifications noted" },
      { source: "Indian context — shift-work/BPO workforce studies; NMHS 2015–16 framing; Tele-MANAS 14416" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The two-week sleep diary template — the one-page instrument this course hands to every complaint" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the factory night-shift, the two clocks, and the Indian sleep environment.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "20 min",
      description: "Architecture, regulation, functions — the physiology exam tier.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything — the light-history craft, the occupational tier, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The architecture, the two clocks, the vital-sign doctrine.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can draw the hypnogram and explain the two-process gate cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The factory's departments, the adenosine-SCN machinery, the atonia brake.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why mistiming degrades quality and why sedation is not restoration." },
    { number: 3, title: "Clinical Practice", description: "The diary craft, the patterns it sorts, the physiology-first package.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can read a diary, sort the three patterns, and deliver the anchor-and-light prescription." },
    { number: 4, title: "Indian Context", description: "The nap economy, the household negotiation, the shift-work tier, the faith-morning question.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the ALL-sleep diary question and separate the shifted rhythm from the disorder." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the architecture-and-regulation questions cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.14.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "Aserinsky E & Kleitman N (1953) — REM discovery; Dement W & Kleitman — the cycle architecture (the founding literature)", sourceType: "primary", year: "1953–1957", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Borbély AA — the two-process model of sleep regulation (Process S homeostat, Process C circadian)", sourceType: "primary", year: "1982 onward", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Czeisler CA et al. — circadian entrainment, light dosing and shift-work science (the Harvard sleep-medicine lineage)", sourceType: "review", year: "1980s onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Xie L et al. (Science, 2013) — glymphatic clearance during sleep; the waste-clearance lineage since", sourceType: "primary", year: "2013", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Crowley SJ et al. / Carskadon MA — the adolescent phase delay and the school start-time evidence base", sourceType: "primary", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Irwin MR — sleep and immune function; the metabolic-and-appetite literature (leptin/ghrelin, glucose regulation in restricted sleep)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S8", source: "AASM / ICSD-3 — the stage definitions and the sleep-disorders architecture (named framework)", sourceType: "guideline", year: "2014", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Walker M — the sleep-science synthesis tier (memory, emotional processing, glymphatic framing), simplifications noted", sourceType: "review", year: "2017", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Orexin/hypocretin biology (Scammell TE lineage) and the VLPO sleep-switch literature — the wake-hold and sleep-switch architecture", sourceType: "review", year: "1998 onward", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Indian context — shift-work/BPO workforce studies in India; NMHS 2015–16 framing (the sleep-problem item); Tele-MANAS 14416; the joint-family and nap-culture practice realities", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "Sleep architecture: 4–6 cycles of ~90 minutes; N2 the majority stage defined by spindles and K-complexes; N3 front-loaded into the first third (restoration, growth hormone); REM back-loaded with lengthening periods toward morning; REM-atonia paralyses the dreamer.", grade: "established", sources: ["S2", "S8"] },
    { text: "Two-process regulation: adenosine-dependent homeostatic pressure (built by waking, paid by sleep, partially spent by naps, blocked-antagonised by caffeine with a 5–6 hour half-life) interacting with the SCN circadian clock (~20,000 cells, light-entrained, timing melatonin and temperature) — sleep requires high pressure AND an open gate.", grade: "established", sources: ["S3", "S4"] },
    { text: "The wake-maintenance zone: the clock actively opposes sleep in the 2–3 hours before habitual bedtime — the explanation for early-bed failures in insomniacs and toddlers alike.", grade: "established", sources: ["S4"] },
    { text: "Functions: memory consolidation via hippocampal replay during N2 spindles and slow-wave sleep (the studied-then-slept night beats the all-nighter); REM's emotional processing; glymphatic clearance mainly during N3 (amyloid-related burden — taught as risk-association, not certainty); metabolic-immune maintenance measurably shifted by a week of 5-hour nights.", grade: "established", sources: ["S5", "S7", "S9"] },
    { text: "Life-stage architecture: chronotypes substantially genetic with society on lark-time; the adolescent 1–2 hour biologically driven phase delay (with the later-school-start evidence); ageing's phase advance, N3 thinning, fragmentation and amplitude loss.", grade: "established", sources: ["S6", "S1"] },
    { text: "Shift work never fully adapts (morning commute light sabotages adaptation; the clock shifts ~1 hour per day eastbound-ish) — the shift-work disorder population and its cardiometabolic toll as occupational-health psychiatry.", grade: "established", sources: ["S4"] },
    { text: "Benzodiazepines and alcohol sedate while suppressing slow-wave and REM sleep — sedation is not restoration; the unrefreshed-morning and 3 a.m. rebound reports follow the architecture suppression.", grade: "established", sources: ["S1", "S8"] },
    { text: "Sleep as the psychiatric vital sign: depression's early waking, mania's reduced need (the relapse-preceding red flag), PTSD's nightmares, dementia's sundowning, ADHD's delayed phase, psychosis's sleep-wake collapse — ask about sleep in every review.", grade: "established", sources: ["S1"] },
    { text: "Orexin/hypocretin as the ~70,000-neuron wake-hold switchboard (its destruction = narcolepsy type 1) and the VLPO sleep-switch architecture: sleep is an active, defended state, not a passive fade-out.", grade: "established", sources: ["S10"] },
    { text: "The Indian sleep environment tier: the sanctioned afternoon-nap culture (timing discipline over abolition — functional biphasic sleep for elders and farmers); joint-family noise and shared rooms as maintainers; faith-morning schedules institutionalising the advanced phase; wedding/festival seasons producing predictable complaint waves; mosquitoes, heat and power realities inside the prescription.", grade: "supported", sources: ["S11"] },
  ],
};
