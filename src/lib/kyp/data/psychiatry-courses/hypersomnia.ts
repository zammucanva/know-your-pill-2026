import type { PsychiatryCourse } from "./types";

/**
 * EXCESSIVE SLEEPINESS & HYPERSOMNIAS — canonical Psychiatry course
 * (migration batch 5, Group K — sleep-wake disorders, part 3 of 4).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/hypersomnia.md — untouched foundation),
 * re-researched against current guidance (ICSD-3/DSM-5, Scammell's
 * orexin biology, Mignot's genetics including the Pandemrix chapter,
 * the CPAP adherence literature, Indian truck-driver and OSA-phenotype
 * studies) with per-claim provenance.
 *
 * Drug routes: venlafaxine, clomipramine and fluoxetine (the
 * REM-suppressing cataplexy tier — all with KYP lessons); modafinil,
 * armodafinil, methylphenidate, sodium oxybate and CPAP hardware
 * have no KYP lessons and are recorded in contentGaps, never
 * invented.
 */
export const hypersomniaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "hypersomnia",
  title: "Excessive Sleepiness & Hypersomnias",
  shortName: "Hypersomnia",
  kind: "disorder",
  category: "Sleep-Wake Disorder",
  groupLetter: "K",
  groupName: "Sleep-wake disorders",
  learningPath: ["Psychiatry", "Sleep-Wake Disorders", "Excessive Sleepiness & Hypersomnias"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The four engines behind the sleepy patient — each demands a different treatment",
  summary:
    "Excessive daytime sleepiness has four engines: insufficient sleep, obstructive sleep apnoea, the central hypersomnias and secondary causes. Engine identification through the sleep history matters because the treatments diverge completely.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Distinguish sleepiness from fatigue (the examiner's first fork) and use the Epworth concept.",
    "Run the four-engine differential of excessive daytime sleepiness with one tell-tale each.",
    "Diagnose insufficient sleep syndrome — the epidemiological giant hiding in plain sight.",
    "Screen and diagnose obstructive sleep apnoea (STOP-BANG-style questions; the partner interview; the CPAP conversation and its adherence programme).",
    "Recognise narcolepsy's tetrad (cataplexy, sleep paralysis, hypnagogic hallucinations, fragmented night sleep) and its orexin biology.",
    "Explain the MSLT's logic (mean latency ≤ 8 minutes + ≥ 2 REM-onset naps) and what CSF orexin adds.",
    "Prescribe the wake-promoting tier (modafinil, armodafinil, methylphenidate) and treat cataplexy correctly (the REM-suppressing antidepressants; sodium oxybate's role).",
    "Work the Indian sleepiness front: driver safety, night-shift workers, the desk-sleeping adolescent, and apnoea's lower-BMI phenotype reality.",
  ],
  quickFacts: [
    { label: "The first fork", value: "Sleepiness vs fatigue", detail: "'I could fall asleep now' (sleepiness → sleep medicine) vs 'I am exhausted but could not nap' (fatigue → medical/psychiatric work-up) — the ten-second test that routes the entire assessment" },
    { label: "Engine 1 (the giant)", value: "Insufficient sleep", detail: "A quarter or more of working adults sleep under the 7-hour line; weekend catch-up RESTORES (the tell-tale that separates it from the central hypersomnias, where long sleep wakes UNrefreshed)" },
    { label: "Engine 2 (the masquerade)", value: "Obstructive sleep apnoea", detail: "Loud snoring + witnessed pauses + unrefreshing sleep + nocturia/morning headaches; Indian apnoea presents at LOWER BMI than Western cohorts (the craniofacial phenotype — the thin woman with apnoea is a real entity); the partner's interview is the diagnostic instrument" },
    { label: "Engine 3 (the brain disorder)", value: "Narcolepsy", detail: "The tetrad — Cataplexy (emotion-triggered collapse, PATHOGNOMONIC), Hypnagogic hallucinations, Sleep paralysis, Fragmented night sleep — on a floor of daytime sleepiness with REFRESHING naps; type 1 = orexin-deficient (~70,000 neurons destroyed autoimmune, HLA-DQB1*06:02)" },
    { label: "The cataplexy question", value: "Ask it in every sleepy person", detail: "'When you laugh hard or get angry suddenly, does anything happen to your muscles?' — patients hide cataplexy for years out of fear of appearing dramatic or 'mad'; it is volunteered almost never" },
    { label: "The objective test", value: "MSLT", detail: "Mean sleep latency ≤ 8 minutes with ≥ 2 REM-onset naps (SOREMPs) defines narcolepsy's objective signature; CSF orexin in the deficient range confirms type 1 in complex cases" },
    { label: "The treatment fork", value: "By engine", detail: "Insufficient sleep → prescribe the hours; OSA → CPAP (the air-splint) with a first-month adherence programme; narcolepsy → wake-promoters + scheduled naps + the cataplexy tier; secondary → treat the driver" },
    { label: "The Indian safety front", value: "The steering wheel", detail: "Driver sleepiness implicated in a meaningful share of Indian highway crashes (truck-driver studies: high rates of sleep-disordered breathing and deprivation); the commercial-licence sleep screen is a policy worth having and mostly absent" },
  ],
  knowledgeGraph: [
    { label: "Sleep–Wake Physiology", type: "condition", href: "/psychiatry/sleep-basics/", note: "The orexin switchboard and the architecture whose fragmentation produces the sleepy day" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "The other half of the sleep clinic — and the fatigue-vs-sleepiness fork's partner" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "Narcolepsy's REM-boundary phenomena neighbour the parasomnia families; apnoea fragments nights into parasomnia triggers" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Engine 4's commonest: the atypical, oversleeping depression — screened alongside every sleepy presentation" },
    { label: "Venlafaxine", type: "drug", href: "/drugs/venlafaxine/", note: "The first-line cataplexy tier in Indian practice (37.5–75 mg, REM-suppression)" },
    { label: "Clomipramine", type: "drug", href: "/drugs/clomipramine/", note: "The classic REM-suppressing tricyclic for cataplexy" },
    { label: "Fluoxetine", type: "drug", href: "/drugs/fluoxetine/", note: "The SSRI cataplexy option of the REM-suppressing tier" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the sleepiness differential — one per dominant engine. The orexin switchboard: deep in the hypothalamus, ~70,000 orexin neurons act as the brain's wakefulness switchboard, the 'ON and HOLD IT' circuit that keeps a person stably awake through a whole day. In narcolepsy type 1, an autoimmune attack (in genetically susceptible people — HLA-DQB1*06:02; post-infectious triggers including influenza, the post-H1N1-era data and the Pandemrix-vaccine signal as the famous epidemiological chapter) destroys the switchboard. The wake-hold fails (sleep invades the day in irresistible naps), sleep's architecture loses its gating (REM leaks into wakefulness: the dream-imagery of sleep onset — hypnagogic hallucinations — and REM's muscle-paralysis arriving awake — sleep paralysis), and, in the disorder's signature, STRONG EMOTION trips the REM-atonia circuit: laughter or sudden surprise switches the body's muscles OFF for seconds — cataplexy, the knees buckle, the jaw drops, the person crumples fully CONSCIOUS. The treatments mirror the biology: wake-promoting agents for the day's hold, and REM-suppressing/sodium-oxybate strategies for the leaks. The airway and the night's demolition: in deep sleep the airway's muscle tone falls; in the apnoea-prone throat (narrowed, padded, or structurally crowded — the Indian craniofacial contribution), it collapses. Blood oxygen dips, carbon dioxide rises, and the brain — a suffocating sentinel — rouses just enough to re-open the throat: a micro-arousal, tens to hundreds of times nightly. The sleeper 'slept' 8 hours and got perhaps half the architecture, which is why the morning report is 'unrefreshed', the day is sleepy, and decades of this hammer the heart (hypertension, stroke, arrhythmia risk). The CPAP machine is an air-splint holding the airway open — ungainly, effective, and in India needing a dedicated selling conversation. The debt collector: insufficient-sleep syndrome is not a disorder in the disease sense at all — it is arithmetic. A person who needs 8 hours, sleeps 5.5, accumulates a weekly debt of 17 hours, and the debt collector calls at the seminar desk, the steering wheel, the afternoon chair. The tell-tale that separates it from the central hypersomnias: on holidays and weekends the person sleeps long and wakes RESTORED (the central-hypersomnia patient sleeps long and wakes unrefreshed; the apnoea patient's long sleep never refreshes).",
    steps: [
      "The orexin switchboard (~70,000 hypothalamic neurons) holds wakefulness stable across the day — the 'ON and HOLD IT' circuit.",
      "Autoimmune destruction (genetically susceptible: HLA-DQB1*06:02; post-infectious and vaccine-era triggers) = narcolepsy type 1: the wake-hold fails, REM leaks into wakefulness, emotion trips the atonia circuit (cataplexy).",
      "The airway's deep-sleep collapse: narrowed or crowded throat → oxygen dips, CO2 rises, the brain rouses (micro-arousal) tens-to-hundreds of times nightly → unrefreshing sleep, sleepy days, cardiovascular decades.",
      "The Indian craniofacial contribution: apnoea at LOWER BMI than Western cohorts — the thin-patient phenotype the BMI gate misses.",
      "The debt collector: insufficient sleep is arithmetic (needs 8, sleeps 5.5, a 17-hour weekly debt) — weekend catch-up RESTORES, the separating tell-tale.",
      "The secondary engines ride on the drivers: depression's oversleeping, hypothyroidism's slowness, the sedating-medicine inventory.",
      "The treatments mirror the engines: more sleep, an air-splint, wake-promoters plus the cataplexy tier, or the driver's own treatment — engine-identification first, always.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "orexin-neurons", name: "Lateral hypothalamus (the orexin switchboard)", role: "~70,000 neurons holding stable wakefulness — their autoimmune destruction is narcolepsy type 1; CSF orexin measurement confirms the loss.", grade: "established" },
    { id: "airway-collapsibility", name: "Upper-airway dilator control (the collapsible throat)", role: "The apnoea engine's seat: deep-sleep tone loss in a structurally crowded airway; the Indian craniofacial phenotype contributes at lower BMI.", grade: "established" },
    { id: "rem-boundary-circuitry", name: "Brainstem REM-boundary circuitry", role: "The machinery whose boundary failure produces sleep paralysis and hypnagogic hallucinations (REM leaking into wakefulness) — and whose atonia arm emotion trips in cataplexy.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Orexin/hypocretin", symbol: "Orx", role: "The wake-hold signal: stabilises the sleep-wake switch; deficient in type 1 narcolepsy (CSF-measurable) — the biology that turned a psychiatric label into a neurotransmitter disease.", grade: "established" },
    { name: "Serotonin (REM-suppression tier)", symbol: "5-HT", role: "The cataplexy treatment's mechanism: venlafaxine, clomipramine, fluoxetine suppress REM phenomena at low doses — the leaks sealed pharmacologically.", grade: "established", drugConnection: "Venlafaxine, clomipramine and fluoxetine (all with KYP lessons) are the Indian-practice cataplexy tier." },
    { name: "Dopamine", symbol: "DA", role: "The wake-promotion tier's substrate: modafinil/armodafinil (indirect, gentle) and methylphenidate/amphetamines (stronger, monitored) act here for the day's hold.", grade: "established" },
    { name: "GABA-B (sodium oxybate's target)", symbol: "GABA-B", role: "The night-architecture medicine's mechanism: consolidates night sleep AND treats cataplexy — highly regulated, specialist-only, the referral-tier answer.", grade: "supported" },
  ],
  pathways: [
    {
      id: "narcolepsy-pathway",
      name: "The orexin-loss cascade (narcolepsy type 1)",
      steps: [
        { label: "The autoimmune attack", detail: "In HLA-susceptible people (DQB1*06:02), post-infectious triggers (influenza; the Pandemrix-era signal) target the orexin neurons" },
        { label: "The wake-hold fails", detail: "Sleep invades the day in irresistible, REFRESHING naps; fragmented nights paradoxically complete the picture" },
        { label: "REM gating leaks", detail: "Dream-imagery at sleep onset (hypnagogic hallucinations); the awake-but-paralysed terror at boundaries (sleep paralysis)" },
        { label: "Emotion trips the atonia circuit", detail: "Laughter or sudden surprise switches muscles OFF for seconds — cataplexy, fully conscious, pathognomonic" },
      ],
      clinicalManifestation: "The 'sleepy lazy boy' who buckles at family jokes — six years of labels before one question ('what happens to your muscles when you laugh?') names the disease.",
      grade: "established",
    },
    {
      id: "osa-pathway",
      name: "The night's demolition (obstructive sleep apnoea)",
      steps: [
        { label: "Deep sleep drops the airway's tone", detail: "In the narrowed or crowded throat, the airway collapses" },
        { label: "The sentinel rouses", detail: "Oxygen dips, CO2 rises — the brain rouses just enough to re-open: a micro-arousal, tens-to-hundreds per night" },
        { label: "The architecture is amputated", detail: "'Slept' 8 hours, got perhaps half the departments — unrefreshed mornings, sleepy days, nocturia, morning headaches" },
        { label: "The cardiovascular decades compound", detail: "Hypertension, stroke, arrhythmia risk — apnoea treatment IS cardiovascular medicine" },
      ],
      clinicalManifestation: "The thin Ludhiana schoolteacher with refractory hypertension, morning headaches and a husband who watches her stop breathing.",
      grade: "established",
    },
    {
      id: "insufficient-pathway",
      name: "The debt collector (insufficient-sleep syndrome)",
      steps: [
        { label: "The arithmetic opens", detail: "Needs 8, sleeps 5.5 — a 17-hour weekly debt accruing" },
        { label: "The collector calls where sitting allows", detail: "The seminar desk, the passenger seat, the afternoon chair — the 2 p.m. slump is the invoice" },
        { label: "Weekend catch-up RESTORES", detail: "The separating tell-tale: long holiday sleep that wakes refreshed — the central hypersomnia patient's long sleep never does" },
        { label: "The prescription is famously hard to write", detail: "Actually sleeping the required hours: the digital curfew, the two-job economy, the board-year fear — the treatment is social as much as medical" },
      ],
      clinicalManifestation: "The dozing commuter who 'sleeps whenever I sit' — and comes back from every holiday a different person.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "insufficient-onset", time: "Weeks to years", title: "The debt accumulates", description: "Digital-evening displacement, two-job economies, board-year study patterns, newborns, the 'I sleep 5 and function' self-narrative — the arithmetic grinding until the collector calls daily.", phase: "onset" },
    { id: "osa-decades", time: "Years to decades", title: "The quiet demolition", description: "Weight gain, the ageing airway, the nightly micro-arousals: unrefreshed mornings normalised ('I have always slept badly'), hypertension treated symptomatically for years before anyone watches the night.", phase: "duration" },
    { id: "narcolepsy-onset", time: "Bimodal: ~15 and ~35", title: "The switchboard fails", description: "Type 1's onset peaks around 15 and again around 35; the child with cataplexy is misread as lazy, clumsy or psychiatric for years (mean diagnostic delay measured in years-to-decade) — school failure accumulating before the first MSLT.", phase: "onset" },
    { id: "treatment-era", time: "Weeks to months", title: "The engine-matched season", description: "The diary and the history identify the engine; the MSLT or the sleep study confirms; the treatment lands — the schedule expansion, the CPAP first-month programme, the wake-promoter plus nap architecture, the driver's own therapy.", phase: "recovery" },
    { id: "long-arc", time: "Lifelong (the central engines)", title: "The managed long arc", description: "Narcolepsy is lifelong and manageable: scheduled naps and medication hold careers and marriages; the school accommodations (the nurse's-room nap) change report cards; the driving conversation held honestly at every stability review.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Insufficient sleep syndrome: enormous — a quarter or more of working adults sleep under the 7-hour line (an occupational and digital-era epidemic). OSA: high and climbing with obesity — roughly 1 in 6–10 adults in modern surveys meets at least moderate apnoea criteria, with most UNDIAGNOSED (the treatment gap is the story). Narcolepsy: rare and real, roughly 25–50 per 100,000; type 1 (with cataplexy, orexin-deficient) peaks bimodally around ages 15 and 35; mean delay to diagnosis measured in years — the child with cataplexy misread as lazy, clumsy, or psychiatric. Idiopathic hypersomnia: a fraction of narcolepsy's prevalence. Kleine-Levin: an orphan — roughly 1 per million, adolescent-male-heavy, episodes of days-to-weeks sleeping 15+ hours with behavioural changes.",
    indianPrevalence: "The sleepiness burden is massive and almost unmapped at the epidemiological level. What is known and quotable: road-traffic injury is among India's largest causes of premature death, with driver sleepiness implicated in a meaningful share of highway crashes (Indian truck-driver studies document high rates of sleep-disordered breathing and sleep-deprivation patterns — the public-health framing this course owes); OSA in India presents at LOWER average BMI than Western cohorts (the craniofacial phenotype contributes; the thin Indian woman with apnoea is a real entity, and the Western BMI gate misleads); narcolepsy clinics at major centres report long diagnostic delays with school-failure histories; and the night-shift economy (IT/BPO/healthcare/gig) manufactures circadian sleepiness at industrial scale.",
    lifetimeRisk: "Insufficient sleep: fully reversible by arithmetic. OSA: the decades' cardiovascular risk (hypertension, stroke, arrhythmia) — treatment IS cardiovascular medicine. Narcolepsy: lifelong, manageable, the stability reviews deciding driving and occupation. Kleine-Levin: episodes recur for years then typically burn out.",
    genderRatio: "OSA male-predominant but heavily under-diagnosed in women (post-menopausal rise; the thin-woman phenotype especially missed); narcolepsy type 1 roughly equal by sex; Kleine-Levin adolescent-male-heavy.",
    ageOfOnset: "The engines differ: insufficient sleep — any adult age, tracking work-and-device economics; OSA — 40s onward with weight and age (children via tonsils: the chubby snoring child with ADHD-lookalike behaviour); narcolepsy — bimodal ~15 and ~35; Kleine-Levin — adolescence.",
    indianNotes: "The public-health lever: driver-sleepiness screening for commercial licences (the snoring-BMI-BP triad at transport-office medicals) is a policy worth having and mostly absent; the desk-sleeping adolescent needs the cataplexy question and the hours-arithmetic, not the 'lazy' label; the school-nurse nap-room prescription changes report cards.",
  },
  etiology: [
    { category: "biological", factor: "Engine 3's biology (the central hypersomnias)", details: "Narcolepsy type 1: autoimmune destruction of orexin neurons in genetically susceptible people (HLA-DQB1*06:02); post-infectious triggers including influenza (post-H1N1-era data; the Pandemrix-vaccine signal as the famous chapter). Type 2 and idiopathic hypersomnia: mechanisms incompletely understood. Kleine-Levin: post-infectious/autoimmune hypotheses; adolescent males." },
    { category: "biological", factor: "Engine 2's anatomy (the collapsible airway)", details: "Obesity, male sex, age 40+, post-menopausal women, craniofacial narrowing, enlarged tonsils/adenoids (children — the chubby snoring child with ADHD-lookalike behaviour), nasal obstruction, hypothyroidism, acromegaly; Indian reality: lower-BMI phenotypes with dense body-fat patterning — the under-recognised thin-patient apnoea." },
    { category: "psychological", factor: "Engine 4's drivers (the secondary tier)", details: "Depression (atypical, bipolar-depression oversleeping); the sedating-medicine inventory (antihistamines, benzodiazepines, opioids, gabapentinoids, some antidepressants); hypothyroidism, anaemia, poorly controlled diabetes; chronic liver/kidney disease; post-TBI sleepiness; epilepsy/anti-epileptics; Parkinson's disease." },
    { category: "social", factor: "Engine 1's economics (the arithmetic)", details: "Digital-evening displacement (reels, gaming, match nights), two-job economies, board-year study patterns, newborns, the 'I sleep 5 and function' narrative; the night-shift economy manufacturing circadian sleepiness at scale." },
    { category: "social", factor: "The Indian delivery architecture", details: "The lorry-driver corridor culture (long-haul routes, night driving, amphetamine-and-chai self-medication in some corridors); the desk-sleeping adolescent read as lazy, anaemic or depressed; the school-failure accumulation before narcolepsy diagnosis." },
  ],
  symptomClusters: [
    {
      category: "1. The symptom itself (graded)",
      symptoms: ["Mild: dozes in passive situations (bus, afternoon lecture, TV)", "Moderate: dozes in active-but-seated situations (meetings, cinema, as a passenger)", "Severe: dozes in active situations (mid-conversation, mid-meal, while driving) — the seizure-level red flag", "The fatigue fork: sleepiness = 'I could fall asleep now'; fatigue = 'exhausted but could not nap' — the differential's first line"],
    },
    {
      category: "2. Engine-specific signatures",
      symptoms: ["Insufficient sleep: the weekend-catch-up pattern (restored), caffeine escalation, 'fine once I actually sleep'", "OSA: loud snoring, witnessed pauses/gasps, unrefreshing sleep, nocturia, morning dry-mouth/throat, night sweats, morning headaches, the hypertensive-obese OR deceptively thin frame; in CHILDREN: snoring, enlarged tonsils, hyperactive-ADHD-lookalike behaviour, poor school performance, bedwetting", "Narcolepsy: REFRESHING daytime naps (the distinctive feature), cataplexy (knees/jaw/face with laughter), sleep paralysis, hypnagogic/hypnopompic hallucinations, fragmented night sleep (the paradox: sleepy by day, broken by night), automatic behaviours, weight gain at onset, late-onset psychosis-mimic when hallucinations are misreported", "Idiopathic hypersomnia: long UNrefreshing sleep, sleep drunkenness (slow, confused, irritable waking — 'the alarm is a violence'), hard naps that do not refresh", "Depression's hypersomnia: morning-anchored oversleeping, anhedonia-flavoured energy absence, the mood architecture", "Kleine-Levin: episodic days-to-weeks of 15–20-hour sleep, dreamy derealisation, megaphagia, hypersexuality/disinhibition, then weeks-to-months of normalcy"],
    },
    {
      category: "3. The assessment must-asks",
      symptoms: ["The cataplexy question verbatim: 'when you laugh hard or get angry suddenly, does anything happen to your muscles?' — asked in EVERY sleepy person", "The driving question directly: 'have you ever nodded off at the wheel, even for a second?'", "The partner interview for the pauses: the patient has never witnessed their own apnoea — the spouse is the instrument", "The two-week EXTENDED diary: all sleep, all naps, weekends — the fork between engines; the hypothyroid/depression/medicine inventory alongside"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "ICSD-3 / DSM-5 logic",
      code: "The hypersomnolence family",
      criteria: [
        "The fork first: excessive sleepiness + adequate documented opportunity = the central/medical engines; sleepiness + 5–6-hour nights = insufficient-sleep syndrome (the extended diary and the catch-up question prove it).",
        "OSA: the clinical cluster (snoring, pauses, unrefreshing sleep, risk factors) confirmed by polysomnography — the apnoea-hypopnea index (home sleep-apnoea testing where appropriate).",
        "Narcolepsy type 1: EDS + cataplexy (or CSF orexin deficiency) + MSLT confirmation (mean latency ≤ 8 minutes with ≥ 2 REM-onset naps); type 2: EDS + MSLT positivity without cataplexy/orexin deficiency.",
        "Idiopathic hypersomnia: long unrefreshing sleep + MSLT without the REM-intrusion criteria (the sleep drunkenness signature).",
        "Kleine-Levin: the episodic pattern itself — recurrent days-to-weeks of hypersomnia with derealisation and behavioural change, normalcy between.",
      ],
      duration: "The engines set it: insufficient sleep responds to arithmetic within weeks; narcolepsy declares across months; Kleine-Levin's episodes recur for years.",
      indianNote: "The Indian narcolepsy reality: diagnostic delay averages years; the school desk-sleeping child collects punishments before diagnosis; the first cataplexy question often happens a decade into 'laziness' labels. The MSLT is metro/medical-college tier — the clinical cataplexy question costs nothing and names the disease at the OPD.",
    },
    {
      system: "The instrument tier (named, not reproduced)",
      code: "Epworth, STOP-BANG, MSLT, PSG, CSF orexin",
      criteria: [
        "Epworth Sleepiness Scale: the eight-scenario self-rating (named) — the sleepiness tracker the clinic runs on.",
        "STOP-BANG-style OSA screen: the snoring-tiredness-apnoea-pressure-BMI-age-neck-gender cluster (named) — the door to the sleep study.",
        "MSLT (multiple sleep latency test): mean latency ≤ 8 minutes with ≥ 2 SOREMPs — narcolepsy's objective signature (preceded by adequate prior-night sleep, confirmed on PSG).",
        "Polysomnography: apnoea-hypopnea index, architecture, REM-atonia loss (RBD's definitive test); home sleep-apnoea testing as the emerging Indian tier (₹3,000–8,000; full PSG ₹5,000–15,000 private metro, medical colleges lower).",
        "CSF orexin: type-1 confirmation in complex cases — the reference-centre tier.",
      ],
      duration: "N/A — the instrument tier's reference card.",
      indianNote: "The two GP-level tools that route correctly before any lab: the two-week diary and the Epworth concept — plus the partner's pauses-report and the cataplexy question; everything expensive follows from those four free instruments.",
    },
  ],
  severityScales: [
    {
      name: "The sleepiness ladder",
      fullName: "The clinical grading of excessive daytime sleepiness",
      measures: "The severity axis every sleepy patient is staged on — from passive-situation dozing to the mid-activity red flag.",
      ranges: [
        { min: 0, max: 0, severity: "Mild", action: "Dozes in passive situations (bus, afternoon lecture, TV) — the diary and hours-arithmetic first; the fork question asked" },
        { min: 1, max: 1, severity: "Moderate", action: "Dozes in active-but-seated situations (meetings, cinema, passenger seat) — the full four-engine history; the Epworth concept; the screens" },
        { min: 2, max: 2, severity: "Severe", action: "Dozes in active situations (mid-conversation, mid-meal, WHILE DRIVING) — the red flag: same-day safety counselling (stop driving now), urgent engine-identification, the MSLT/study tier" },
      ],
      indianNote: "The driving row is the Indian public-health front: the sleepy commercial driver gets the licence-relevant conversation and the transport-company medical review written into the form even where the form does not ask.",
    },
    {
      name: "The OSA screen (STOP-BANG-style, named)",
      fullName: "The snoring-tiredness-apnoea-pressure-BMI-age-neck-gender cluster",
      measures: "The screening instrument that opens the sleep-study door — run on every snoring, unrefreshed, hypertensive presentation (and every refractory-depression file).",
      ranges: [
        { min: 0, max: 2, severity: "Low-risk screen", action: "The diary, the weight conversation, the follow-up tier; re-screen with any new symptom" },
        { min: 3, max: 3, severity: "Intermediate-risk", action: "The partner's pauses-interview; home sleep-apnoea testing or PSG referral per access; the cardiovascular risk conversation started" },
        { min: 4, max: 8, severity: "High-risk screen", action: "The sleep study (the AHI decides); CPAP's conversation prepared for a positive result; the comorbidity screen (BP, glucose, lipids) at the same visit" },
      ],
      indianNote: "The Indian correction to the screen's BMI row: the thin-patient phenotype — when the snore-and-pause cluster exists, test REGARDLESS of the mirror; the craniofacial contribution makes Indian apnoea a lower-BMI disease than the Western screen assumes.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Insufficient sleep syndrome", distinguishingFeatures: "Weekend-catch-up restores; caffeine escalation; 'fine once I sleep'.", keyDifferentiator: "The arithmetic: hours needed vs hours slept, proven by the extended diary — the treatment is sleep itself." },
    { condition: "Obstructive sleep apnoea", distinguishingFeatures: "Snoring, witnessed pauses, unrefreshing sleep, nocturia, morning headaches; weight (or the Indian thin phenotype).", keyDifferentiator: "The partner's interview plus the study (AHI) — before any wake-promoter, which would mask the undiagnosed demolition." },
    { condition: "Narcolepsy type 1", distinguishingFeatures: "Refreshing naps + laughter-collapse + sleep paralysis + hypnagogic imagery + broken nights.", keyDifferentiator: "Cataplexy is pathognomonic — the laughter-muscle question asked in every sleepy person; MSLT latency ≤ 8 min with ≥ 2 SOREMPs; CSF orexin where complex." },
    { condition: "Idiopathic hypersomnia", distinguishingFeatures: "Long unrefreshing sleep, sleep drunkenness, hard non-refreshing naps.", keyDifferentiator: "The MSLT WITHOUT REM-intrusion criteria — and the waking, not the sleeping, that disables." },
    { condition: "Depression's oversleeping", distinguishingFeatures: "Morning-anchored, anhedonia-flavoured, mood architecture.", keyDifferentiator: "The mood screen runs alongside every sleepy assessment — the atypical and bipolar-depression tiers oversleep; treat the mood, re-assess the sleepiness." },
    { condition: "Hypothyroidism / anaemia / medical sleepiness", distinguishingFeatures: "Cold intolerance, weight gain, fatigue-without-nap-ability (the TSH, the counts).", keyDifferentiator: "The secondary-engine inventory: TSH, CBC, glucose, the medicine list — cheap tests before expensive ones." },
    { condition: "Medication effect", distinguishingFeatures: "Sleepiness tracking the antihistamine/benzo/opioid/gabapentinoid/antidepressant list.", keyDifferentiator: "The inventory with substitutions: morning-ify the sedatives, swap the antihistamine, review the load — the de-prescribing trial as diagnostic." },
    { condition: "Kleine-Levin syndrome", distinguishingFeatures: "Episodic days-to-weeks of 15–20-hour sleep, derealisation, megaphagia, hypersexuality; adolescent males.", keyDifferentiator: "The EPISODIC pattern with normalcy between — the orphan diagnosis the episodic history alone makes." },
    { condition: "Paediatric OSA (the child-trap)", distinguishingFeatures: "Snoring, big tonsils, hyperactive-ADHD-lookalike behaviour, bedwetting, poor school performance.", keyDifferentiator: "Treat the airway (adenotonsillectomy where indicated), reconsider the label — NOT ADHD-lookalike only; the paediatric trap examiners love." },
    { condition: "Post-TBI / neurological sleepiness", distinguishingFeatures: "Sleepiness following head injury or alongside neurological disease.", keyDifferentiator: "The temporal link and the neurological examination — the tier where sleep medicine meets neurology's referral pathways." },
  ],
  management: [
    {
      category: "lifestyle",
      name: "By engine — the divergent treatments (1 and 2)",
      description: "Insufficient sleep syndrome: prescribe the sleep — a structured schedule expansion (30 minutes earlier per fortnight), the digital-evening curfew, the bedroom-environment fixes (the Insomnia course's India tier), caffeine timing, and occupational advocacy where the job forbids the hours. OSA: weight management where weight contributes (5–10% loss moves indices meaningfully); CPAP (continuous positive airway pressure) — the splint-machine, the gold standard, whose Indian conversation is about the FIRST MONTH (mask-fitting, humidity for Indian summers, the claustrophobic week, the partner's role, cost and power realities; adherence support determines everything — the week-1 technician call, the mask-trial menu); alternatives: mandibular-advancement devices for mild-moderate/CPAP-refusers, positional therapy for position-dependent apnoea, surgery (adenotonsillectomy in children; selected adult procedures); and the comorbidity management — hypertension, glucose, lipids: apnoea treatment IS cardiovascular medicine.",
      whenToUse: "Engine-matched, always after the four-engine history has named the engine.",
      indianContext: "The CPAP adherence programme is the Indian adaptation that decides the decade: the technician call in week 1, three mask options trialled, humidity set for the summer, the family's morning report ('did he snore with it on?'); a CPAP on the shelf is a cardiovascular risk factor of its own kind — schedule the adherence review like an insulin review. Machines ₹25,000–60,000 one-time (auto-titrating with humidifier higher), masks ₹2,000–5,000/year; home sleep-apnoea testing emerging at ₹3,000–8,000.",
    },
    {
      category: "pharmacotherapy",
      name: "By engine — the central tier (3): wake-promoters and cataplexy",
      description: "Scheduled naps first (two 15–20-minute planned naps anchor many patients' days — free, underused, as therapeutic as modafinil in the architecture of the day). The wake-promoting tier: modafinil/armodafinil 100–400 mg, the first line with a favourable safety profile (early headache and nausea, blood-pressure checks, the rare rash warning, interaction counsel); methylphenidate and the amphetamine class as the second tier (tachycardia, BP, appetite, dependence monitoring). Sodium oxybate: the night-architecture medicine — consolidates night sleep AND treats cataplexy; highly regulated (misuse potential), expensive, specialist-only: the referral-tier answer. Cataplexy treatment: the REM-suppressing antidepressants at low doses — venlafaxine, clomipramine, or fluoxetine — effective for cataplexy specifically; sodium oxybate for severe cases. Safety counselling: driving rules (treated-and-stable = the goal; untreated cataplexy-plus-sleepiness = the hazard), occupation choices, school accommodations (the scheduled nap in the nurse's room changes school trajectories).",
      whenToUse: "The central engines (narcolepsy, idiopathic hypersomnia); never as masking for undiagnosed insufficient sleep or apnoea.",
      indianContext: "Modafinil 200 mg ≈ ₹8–20/tablet (₹400–1,000/month; armodafinil similar, both under varied regulatory enforcement); the methylphenidate route runs the Narcotics pipeline and is harder; venlafaxine 37.5–75 mg ≈ ₹100–200/month for cataplexy (the Indian mainstay); sodium oxybate via specialist programmes only — the honest answer to families asking for 'the best treatment abroad'.",
    },
    {
      category: "lifestyle",
      name: "By engine — the secondary tier (4) and the public-health wrap",
      description: "Treat the driver: thyroid replacement, the depression's treatment, the medicine-substitution audit (morning-ify the sedatives, swap the antihistamine, review the opioid/gabapentinoid load). Kleine-Levin: watchful waiting with episode care (safety, hydration, school/work coverage), the specialist tier (lithium case-series for frequent relapsers). The public-health levers: driver-sleepiness screening for commercial licences (the snoring-BMI-BP triad at transport medicals — the policy worth having); the school-nap accommodations; the CPAP adherence programmes as service design.",
      whenToUse: "Standing — every secondary engine found by the inventory gets its driver treated before any wake-promoter is considered.",
      indianContext: "The lorry-driver consultation is a life-or-death clinic: the sleep history (apnoea risk, hours actually slept), the honest crash-risk discussion, the apnoea referral where indicated, the de-escalation of the 'chewing-tobacco-to-stay-awake' corridor culture — and the sleepiness written into the form even where the form does not ask.",
    },
  ],
  safety: {
    redFlags: [
      "Any sleepiness at the wheel — 'have you ever nodded off, even for a second?' — the same-day stop-driving conversation and urgent work-up",
      "Untreated narcolepsy with cataplexy driving — the hazard tier held until treated-and-stable with documented review",
      "The paediatric trap: the snoring, hyperactive, bedwetting child — the airway assessment before the ADHD label hardens",
      "Witnessed apnoea with cardiovascular disease — decades of nightly hypoxia hammering the heart; the study is urgent, not elective",
      "Kleine-Levin episodes with disinhibition — safety and supervision during the sleeping marathons; the differential from substance intoxication held honestly",
      "Late-onset 'psychosis' with hypnagogic imagery — narcolepsy misdiagnosed: the MSLT before the antipsychotic escalates",
    ],
    urgentGuidance:
      "The order of operations: (1) the driving question asked directly at every sleepy presentation — a positive answer triggers same-day safety counselling (stop driving now) before anything else; (2) the fork (sleepiness vs fatigue) and the four-engine history — the free instruments (diary, Epworth concept, partner interview, cataplexy question) route before any lab; (3) the screens (STOP-BANG-style, TSH, the medicine inventory) — cheap before expensive; (4) the MSLT/study tier where the central or apnoea engines are suspected; (5) engine-matched treatment with the adherence programmes (CPAP's first month; the narcolepsy stability reviews); (6) the public-health tier — the transport-company and school conversations written where the forms do not ask.",
  },
  drugLinks: [
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      role: "The first-line cataplexy tier in Indian practice",
      rationale: "The REM-suppressing SNRI at 37.5–75 mg is the Indian mainstay for cataplexy (attacks reduced from daily to rare in the representative course) — effective for cataplexy specifically while the wake-promoters handle the sleepiness; the two-drug architecture of treated narcolepsy.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Venlafaxine for cataplexy is symptom-targeted specialist practice; the wake-promoting tier and sodium oxybate complete the programme, and driving safety rules the calendar.",
    },
    {
      name: "Clomipramine",
      slug: "clomipramine",
      role: "The classic REM-suppressing tricyclic for cataplexy",
      rationale: "The traditional cataplexy agent of the REM-suppressing antidepressant class — effective at low doses with the anticholinergic load acknowledged; the class's original member and still the exam answer's second name.",
      evidenceLevel: "textbook",
      clinicalDisclaimer: "Dose-targeted specialist use for cataplexy; anticholinergic burden and the tricyclic caution tier apply.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      role: "The SSRI cataplexy option of the REM-suppressing tier",
      rationale: "The SSRI member of the cataplexy class (venlafaxine, clomipramine, or fluoxetine — the tier's three options) — the choice running on tolerability and comorbidity; the same REM-suppression mechanism at the atonia leak.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-targeted specialist practice; antidepressant-associated REM-atonia effects cut both ways (the RBD association taught in the Parasomnias course).",
    },
  ],
  contentGaps: [
    "Modafinil, armodafinil and the methylphenidate/amphetamine wake-promoting tier have no KYP drug lessons — their evidence is taught here, the routes never invented.",
    "Sodium oxybate — the night-architecture medicine for narcolepsy (highly regulated, specialist-only) — has no KYP lesson.",
    "CPAP hardware, mandibular-advancement devices and the adenotonsillectomy tier have no KYP lessons; the adherence-programme architecture lives in this course.",
    "Lithium (the Kleine-Levin case-series tier) has no KYP lesson — recorded, never invented.",
  ],
  patientGuide: {
    whatIsIt:
      "Excessive sleepiness is not laziness — it is a symptom with four possible engines behind it: not enough sleep (the commonest, an arithmetic problem), broken sleep (most often the breathing-pauses disorder called sleep apnoea), a genuine brain sleepiness-disorder (narcolepsy and its cousins — rare, real, and treatable), or another medical/psychiatric condition (an underactive thyroid, depression, or sedating medicines). The four engines need completely different treatments — sleep itself, a breathing machine at night, wake-promoting medicines with planned naps, or treatment of the underlying condition — which is why the assessment's whole job is naming the engine.",
    whatCausesIt:
      "By engine: insufficient sleep is arithmetic (needing 8 hours, getting 5.5 — a debt that collects daily); sleep apnoea is the airway collapsing in deep sleep, shattering the night into hundreds of unnoticed wake-ups (the Indian version often lives in the throat's structure, not weight — thin people get it too); narcolepsy is an autoimmune loss of the brain's ~70,000 wake-holding cells (the 'ON and HOLD IT' switchboard), sometimes with the emotion-triggered muscle collapse called cataplexy; the secondary tier rides on thyroid, mood and medicine lists.",
    symptoms:
      "Sleepiness means 'I could fall asleep now' — different from exhaustion that cannot nap (that is fatigue, a different work-up). The engine signatures to report honestly: snoring and breathing pauses your partner has seen; morning headaches and an unrefreshed feeling despite hours in bed; naps that actually refresh (the narcolepsy signature); muscle weakness when you laugh hard or get suddenly angry (cataplexy — the specific sign most patients hide for years); waking confused and irritable ('sleep drunkenness'); and sleeping marathons in episodes weeks apart (the rare adolescent pattern).",
    treatment:
      "Matched to the engine: more sleep (the schedule itself is the prescription, with the digital curfew negotiated honestly); the CPAP machine for apnoea — ungainly, effective, and all about the first month (the mask menu, the humidity, the family's morning report); for narcolepsy — planned naps (genuinely therapeutic, free) plus wake-promoting medicines, with specific medicines for the laughter-collapse; and the driver's own treatment for the secondary tier. Driving safety rules the calendar: not while untreated and unstable, yes once treated and stable with review.",
    selfHelp: [
      "Track ALL sleep for two weeks — hours, naps, weekends — the diary names the engine before any test does.",
      "Bring the partner to the consultation: the breathing pauses you have never witnessed are your best diagnostic instrument.",
      "Ask for the laughter question if nobody has asked you: 'what happens to your muscles when you laugh hard?' — the answer changes lives.",
      "Plan the naps if narcolepsy is the engine: two brief scheduled naps are treatment, not indulgence.",
      "Take the CPAP first month seriously — the adaptation week decides the decade; ask for the technician's call and the mask menu.",
      "The driving rule held honestly: sleepy-and-cataplectic driving is a hazard to you and the road; treated-and-stable returns it — with the review documented.",
    ],
    whenToSeekHelp: [
      "Any nodding-off at the wheel, even for a second — stop driving and seek same-day assessment",
      "Sleepiness lasting months despite adequate hours — the four-engine work-up",
      "A partner reporting you stop breathing at night — the sleep study tier",
      "Muscle weakness with laughter or sudden emotion — the cataplexy question named and answered",
      "A snoring, hyperactive, bedwetting child — the airway assessment before the ADHD label",
      "Sleepiness arriving with low mood — the screens run together",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — the first-line counselling and routing tier",
      "General psychiatry/medicine OPDs — the diary, the screens, the referral pathways",
      "Metro sleep-medicine programmes and medical-college sleep labs — the MSLT, PSG and CPAP-initiation tier",
      "Transport-company medical reviews and school-nurse offices — the systematic entry-points this course arms",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific hypersomnia guideline exists; management follows the international architecture (ICSD-3/AASM statements, the Scammell/Mignot orexin literature, the CPAP adherence programmes) with Indian adaptation craft: the lower-BMI phenotype correction, the driver-safety frames, the school-nap accommodations, the cost-tier honesty.",
    systemContext: "The Indian sleepiness front runs through three doors: the lorry-driver consultation (a life-or-death clinic — long-haul routes, night driving, the amphetamine-and-chai corridor culture in places, sleep-disordered breathing documented at high rates in truck-driver studies); the desk-sleeping adolescent (read as lazy by school, anaemic by parents, depressed by clinics — while the real engines are 5–6-hour nights, the delayed phase, or hidden cataplexy); and the thin-patient apnoea (the slim woman with refractory hypertension and unrefreshing sleep the Western BMI gate dismisses).",
    programmeContext: "The diagnostic tier concentrates in metros (MSLT, PSG, the reference centres); home sleep-apnoea testing is emerging (₹3,000–8,000); full PSG ₹5,000–15,000 private metro, medical colleges lower. The narcolepsy pathway is the long-delay story: the first cataplexy question often a decade into 'laziness' labels; the school-nurse nap-room prescription changing report cards where it happens. The public-health levers — driver screening at commercial-licence medicals, school accommodations — are policies worth having and mostly absent.",
    costConsiderations: "Modafinil 200 mg ≈ ₹8–20/tablet (₹400–1,000/month; varied regulatory enforcement); the methylphenidate route runs the Narcotics pipeline (harder); venlafaxine for cataplexy ≈ ₹100–200/month (the Indian mainstay); CPAP ₹25,000–60,000 one-time with masks ₹2,000–5,000/year (PM-JAY coverage for OSA hardware limited); the scheduled nap, the diary, the partner's interview and the cataplexy question — the highest-yield instruments — cost nothing.",
    culturalConsiderations: "The sleepiness-is-laziness frame is the Indian tier's cultural load: the dozing commuter as joke, the desk-sleeping teen as shame, the cataplexy hidden for years as 'drama' — the destigmatising formulation ('this has a name, a biology and a treatment; you were never lazy') is the consultation's first act. The thin-body assumption blocks apnoea diagnosis twice over (patient and clinician both); the corridor culture's stimulant self-medication needs de-escalation, not moralising.",
    patientCounselling: [
      "The diagnosis-delivery script for narcolepsy: 'this has a name, a biology and a treatment; you were never lazy' — the sentence the decade-labelled patient has waited for, and the family needs with it.",
      "The cataplexy question taught forward to every GP and paediatrician: 'when you laugh hard or get angry suddenly, does anything happen to your muscles?' — the one question that names the disease at the OPD.",
      "The thin-patient apnoea script: 'the Western picture of the overweight snorer misleads here — Indian apnoea often lives in the throat's structure; the test follows the snore-and-pause cluster, not the mirror'.",
      "The CPAP adherence briefing as family work: the week-1 technician call, the mask menu, the humidity setting, and the morning report ('did he snore with it on?') — the programme, not the purchase.",
      "The driver-safety conversation held with the licence in view: sleepy driving is the hazard, treated-and-stable the goal, the review documented — safety rules, not punishment.",
      "The school accommodation letter: the nurse's-room nap as prescribed therapy — the report-card-changing intervention nobody knows is free.",
    ],
  },
  decisionPath: {
    title: "The sleepy patient",
    nodes: [
      {
        id: "start",
        question: "A sleepy patient arrives. The fork first: sleepiness or fatigue?",
        branches: [
          { label: "Fatigue (exhausted, cannot nap)", next: "fatigue-path" },
          { label: "Sleepiness (could sleep now)", next: "driving-gate" },
        ],
      },
      {
        id: "driving-gate",
        question: "SAFETY FIRST: any nodding-off at the wheel, even for a second?",
        branches: [
          { label: "Yes", next: "stop-driving" },
          { label: "No", next: "engine-sort" },
        ],
      },
      {
        id: "stop-driving",
        question: "The same-day stop-driving conversation.",
        recommendation: "Driving suspended pending assessment and treatment initiation (documented, with the family briefed); the urgent engine-identification proceeds in parallel — the hazard is the untreated sleepiness whatever the engine turns out to be; the treated-and-stable review returns the wheel.",
      },
      {
        id: "engine-sort",
        question: "The four-engine history: what does the extended diary plus partner interview show?",
        branches: [
          { label: "5–6-hour nights; weekend catch-up restores", next: "insufficient-path" },
          { label: "Snoring, witnessed pauses, unrefreshed", next: "osa-path" },
          { label: "Refreshing naps; laughter-collapse; broken nights", next: "narcolepsy-path" },
          { label: "Long unrefreshing sleep; drunken waking", next: "ih-path" },
          { label: "Oversleeping with low mood; or the medicine inventory speaks", next: "secondary-path" },
        ],
      },
      {
        id: "insufficient-path",
        question: "Engine 1: the arithmetic.",
        recommendation: "Prescribe the sleep: the structured schedule expansion (30 minutes earlier per fortnight, anchored to a fixed rise-time); the digital-evening curfew negotiated; the bedroom-environment fixes; caffeine timing; occupational advocacy where the job forbids the hours — the deprivation was never a machinery problem.",
      },
      {
        id: "osa-path",
        question: "Engine 2: the demolition (screen before the mirror).",
        recommendation: "The STOP-BANG-style screen and the partner's interview; the sleep study (home testing or PSG — the AHI decides) regardless of the BMI when the cluster is positive (the Indian thin phenotype); on confirmation: weight counselling where weight contributes, the CPAP first-month programme (technician call, mask menu, humidity, the family's morning report), the alternatives tier (mandibular advancement, positional therapy, the paediatric adenotonsillectomy), and the comorbidity management — apnoea treatment IS cardiovascular medicine.",
      },
      {
        id: "narcolepsy-path",
        question: "Engine 3a: the orexin loss.",
        recommendation: "The cataplexy question asked verbatim (if not already); MSLT (latency ≤ 8 min + ≥ 2 SOREMPs) with CSF orexin where complex; the treatment architecture: two scheduled naps built into the day (school/college accommodations arranged by letter), modafinil/armodafinil first-line wake-promotion (BP checks, the rash warning), the cataplexy tier (venlafaxine 37.5–75 mg, clomipramine, or fluoxetine — sodium oxybate for severe cases via the specialist tier); driving counsel deferred until the treated-and-stable mark; the diagnosis delivered with the destigmatising script.",
      },
      {
        id: "ih-path",
        question: "Engine 3b: idiopathic hypersomnia.",
        recommendation: "The MSLT without REM-intrusion confirms; modafinil/armodafinil for the day; the scheduling adaptations; the honest counsel that the waking is the hard part — the alarm-protocol planning (the household recruited into the morning architecture).",
      },
      {
        id: "secondary-path",
        question: "Engine 4: the driver treated.",
        recommendation: "The inventory and the labs: TSH, counts, glucose, the medicine list (morning-ify the sedatives, swap the antihistamine, review the opioid/gabapentinoid load); the depression treated as its own disease with the sleepiness re-assessed after; the episodic adolescent pattern (Kleine-Levin) watched with episode care and the specialist tier for frequent relapsers.",
      },
      {
        id: "fatigue-path",
        question: "The other fork: fatigue.",
        recommendation: "The medical/psychiatric work-up the fork routes to: thyroid, anaemia, glucose, the mood screen, the chronic-disease review — fatigue is the symptom that sleeps badly and cannot nap; treat what it finds and re-examine the fork after.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Labelling the desk-sleeping teenager (or the sleepy adult) 'lazy' for years",
      why: "The narcoleptic child collects punishments and school-failure labels for a decade before the first cataplexy question — the Indian tier's most expensive habit.",
      correction: "The hours-arithmetic (school nights vs weekends) for the deprivation engine; the cataplexy question for the central engine; the snore-and-pause cluster for the demolition — three questions before any character judgement.",
    },
    {
      mistake: "Missing cataplexy because the question was never asked in laughter-terms",
      why: "Patients hide the laughter-collapse for years out of fear of appearing dramatic or 'mad' — it is volunteered almost never.",
      correction: "The verbatim question: 'when you laugh hard or get angry suddenly, does anything happen to your muscles?' — asked in EVERY sleepy person, and thanked when answered.",
    },
    {
      mistake: "Gate-keeping apnoea testing behind the BMI mirror",
      why: "Indian apnoea includes the low-BMI craniofacial phenotype — the thin woman with refractory hypertension is a real, missed entity.",
      correction: "The snore-and-pause cluster orders the study, not the mirror; the screen's BMI row corrected by the phenotype knowledge.",
    },
    {
      mistake: "Prescribing wake-promoters for undiagnosed insufficient sleep or apnoea",
      why: "The stimulant masks the arithmetic or the demolition while the debt (or the hypoxia) compounds underneath.",
      correction: "The four-engine history and the diary first; the wake-promoter only after the engine is named — and the apnoea study before any prescription in the snoring patient.",
    },
    {
      mistake: "Confusing depression's fatigue with sleepiness (or missing the oversleeping depression)",
      why: "The fork's downstream error: fatigue routed to sleep medicine, or the atypical depression's hypersomnia read as a sleep disorder alone.",
      correction: "The nap test plus the mood screen at every assessment — the two instruments together, both re-run after any single-tier treatment.",
    },
    {
      mistake: "Treating shift-workers' circadian sleepiness with hypnotics-at-8 a.m. logic",
      why: "The tablet fights the sun; the worker 'sleeps' badly at the wrong circadian phase and wakes unrefreshed — the derangement deepens.",
      correction: "The light protocol (the Insomnia course's four-item architecture): black-out curtains, the anchor sleep, sunglasses commute, the caffeine ceiling — the sun is the treatment variable.",
    },
    {
      mistake: "Letting the CPAP gather dust after the purchase",
      why: "The machine's failure mode is the first month — without the adherence programme, the mask intolerance wins and the cardiovascular demolition resumes.",
      correction: "The programme tier: week-1 technician call, the mask-trial menu, humidity for Indian summers, the family's morning report, the adherence review scheduled like an insulin review.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Sleepiness vs fatigue — the fork question and its routing.",
        "The four engines with one tell-tale each.",
        "Narcolepsy's tetrad and the orexin biology; the MSLT criteria.",
        "The STOP-BANG concept and the partner-interview principle.",
        "CPAP as gold standard; the adherence tier's importance.",
      ],
      practical: [
        "Take a sleepy patient's history: the diary, the partner, the cataplexy question verbatim — and present the engine differential.",
        "Demonstrate the Epworth concept and the driving question in role-play.",
      ],
      longAnswer: [
        "A young man with daytime sleep episodes and laughter-triggered weakness: differential diagnosis and management (the evergreen narcolepsy essay).",
        "Excessive daytime sleepiness: causes and evaluation — the four-engine structure as the answer skeleton.",
      ],
    },
    neetPg: {
      highYield: [
        "The four-engine differential is the answer skeleton for any EDS question: insufficient sleep / broken sleep (OSA) / central hypersomnias / secondary — say the engines before the names.",
        "Narcolepsy tetrad (CHSF): Cataplexy, Hypnagogic hallucinations, Sleep paralysis, Fragmented night sleep — plus EDS as the floor; cataplexy is PATHOGNOMONIC.",
        "MSLT: mean latency ≤ 8 minutes with ≥ 2 REM-onset naps (SOREMPs) = the objective signature; CSF orexin confirms type 1.",
        "Narcolepsy type 1 biology: autoimmune destruction of hypothalamic orexin/hypocretin neurons; HLA-DQB1*06:02; the post-H1N1/Pandemrix chapter.",
        "Refreshing naps in narcolepsy vs non-refreshing in idiopathic hypersomnia (with sleep drunkenness) vs never-refreshing in OSA.",
        "Cataplexy treated by REM-suppressing antidepressants (venlafaxine, clomipramine, fluoxetine) + sodium oxybate; modafinil = first-line wake-promoter.",
        "Scheduled naps are TREATMENT in narcolepsy (contrast: debt-spending in insomnia).",
        "Insufficient-sleep syndrome = the commonest EDS cause (the weekend-catch-up tell).",
        "OSA in India: the lower-BMI craniofacial phenotype — the BMI gate misleads; STOP-BANG-style screening; the partner interview for witnessed apnoea.",
        "Paediatric OSA mimics ADHD (tonsils, snoring, hyperactivity, bedwetting) — the child-trap.",
        "Kleine-Levin: episodic, adolescent males, sleep + derealisation + megaphagia/hypersexuality.",
        "EDS at the wheel = the public-health answer for Indian-context marks (the truck-driver studies).",
      ],
      pyqConcepts: [
        "The Epworth Sleepiness Scale (named only) and STOP-BANG (named only) — what they are, not their items.",
        "CPAP as cardiovascular medicine: the hypertension/stroke/arrhythmia comorbidity base.",
        "The late-onset narcolepsy-mimics-psychosis trap (hypnagogic hallucinations misreported).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 22-year-old M.Com student: six years of 'sleepy lazy boy' labels, school punishments, naps that refresh, broken nights with vivid dream-onset images never reported (fear of being thought mad), and laughter-triggered head-nod and knee-dip episodes video-documented at a wedding — once sliding fully conscious against a wall: the cataplexy question asked and answered, MSLT mean latency 4 minutes with REM-onset in 3 of 4 naps, CSF orexin deficient: narcolepsy type 1 confirmed; the treatment architecture (scheduled naps with the college's nurse-room letter, modafinil 200 mg mornings, venlafaxine 37.5 mg for cataplexy, driving deferred to the six-month treated mark) and the one-year outcome (course completion, cataplexy rare after one fever-triggered flare month, 'a different human' per the brother).",
        "A 46-year-old Ludhiana schoolteacher, BMI 26, referred from the hypertension clinic for 'tiredness and morning headaches': years of snoring with witnessed pauses per the husband, nocturia, moderate dozing at staff meetings, depression screen negative, TSH normal; home sleep-apnoea testing moderate AHI — OSA confirmed in the thin-for-the-stereotype frame: the CPAP first-month programme (week-1 technician home visit, three masks trialled, summer humidity set, husband assigned the 'does she snore with it on?' morning report), the 5-kg weight target, the physician flagged for co-management; the 3-month outcome (nightly 6.5-hour use, headaches gone, sleepiness scores halved, antihypertensive load under review).",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The tetrad and cataplexy's pathognomonic status; the orexin biology one-liner.",
        "MSLT criteria; the four-engine differential structure.",
        "STOP-BANG concept; the partner interview; CPAP as gold standard.",
        "Paediatric OSA as the ADHD mimic; Kleine-Levin's episodic signature.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The cataplexy question is the highest-yield single question in sleep medicine: ask it verbatim, thank the patient for answering it, and teach it forward to every GP and paediatrician you meet.",
        "The Indian apnoea phenotype correction (test the snore-and-pause cluster regardless of BMI) reframes a whole referral population — the slim hypertensive woman with morning headaches.",
        "The narcolepsy diagnosis-delivery is a therapeutic act in itself: 'this has a name, a biology and a treatment; you were never lazy' — the decade-labelled patient's turning point, delivered with the family present.",
        "The CPAP programme is service design, not a purchase: the week-1 call, the mask menu, the humidity, the morning report — adherence engineering is the treatment's active ingredient.",
        "The school and workplace accommodation letters (the nurse's-room nap, the scheduled break) are free prescriptions that change trajectories — write them.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The laughter that dropped him",
      presentation: "Six years of 'sleepy lazy boy' — and the family finally filmed what a joke did to him.",
      initialPresentation: "A 22-year-old M.Com student in Indore was brought by his brother for 'weakness attacks': at family jokes his head would nod and knees would dip for a few seconds, fully awake, and once he slid against a wall laughing at a wedding video. For six years he had been the family's 'sleepy lazy boy' — sleeping in classes, napping after school 'for hours', collecting school punishments — while his nights were broken with vivid dream-onset images he never reported, fearing he would be thought mad. The laughter-collapse stayed hidden until the family suspected a 'nerve disease' after he fell at a function.",
      history: "Onset in mid-adolescence (the bimodal first peak); refreshing naps through school years (he 'felt new after twenty minutes of sleep' — the detail never asked); fragmented nights with hypnagogic imagery (shadow-figures at sleep onset) he attributed to 'thinking too much'; no catamenial or precipitating medical events; no substance use; the school file documents the punishments, not the naps.",
      examination: "Excessive daytime sleepiness demonstrated (dozing twice in the consultation's passive stretches); the video of a laughter-triggered atonia episode reviewed (head-nod, knee-dip, fully conscious, seconds-long); sleep paralysis elicited on direct question; no neurological deficits; the mental state dominated by the relief of being believed.",
      diagnosis: "Narcolepsy type 1 (with cataplexy) — confirmed by MSLT mean latency 4 minutes with REM-onset in 3 of 4 naps, and CSF orexin in the deficient range at the reference centre.",
      management: "The diagnosis-delivery session as the first act ('this has a name, a biology and a treatment; you were never lazy' — with the brother present, the decade of labels formally retired); two scheduled naps built into his day (the college's first-ever nurse-room nap permission, arranged by letter); modafinil 200 mg each morning (BP checks, the rash warning counselled); venlafaxine 37.5 mg for cataplexy (attacks reduced from daily to rare); driving counsel deferred until the six-month treated-and-stable mark; the febrile-illness flare plan written (infectious-trigger cataplexy flares expected, managed with the same architecture).",
      outcome: "One year: completing his M.Com; one cataplexy relapse-month after a fever (managed as planned); the brother's report: 'he is a different human'; the school-nap letter now laminated in the family's file as the document that changed the trajectory.",
      teachingPoints: [
        "Cataplexy is pathognomonic and almost never volunteered — the laughter-muscle question belongs in every sleepy person's history.",
        "The 'lazy child' history is narcolepsy's camouflage until the day it isn't: refreshing naps plus broken nights is the diary's signature.",
        "School and college accommodations (the nap permission) are as therapeutic as modafinil — and cost nothing but a letter.",
      ],
    },
    {
      title: "The well-slept woman who never woke refreshed",
      presentation: "Eight hours nightly, a husband who watched her stop breathing, and a blood pressure that would not behave.",
      initialPresentation: "A 46-year-old Ludhiana schoolteacher, BMI 26 (deceptive for the apnoea stereotype), presented via the hypertension clinic for 'tiredness and morning headaches'. She had snored 'for years' per her husband, with witnessed pauses and a nocturia pattern; her sleepiness was moderate (dozing at staff meetings). Depression screens were negative and TSH normal. Home sleep-apnoea testing: AHI in the moderate range — OSA confirmed, with the thin-phenotype point made explicit in the file.",
      history: "Snoring escalating over a decade with weight creep; the husband's pauses-report never sought by any prior clinician; hypertension managed with escalating pharmacotherapy (the cardiovascular signal hiding in plain sight); no mood disorder; no sedatives; morning headaches and unrefreshing sleep normalised by the patient ('I have always slept badly, that is all').",
      examination: "BMI 26; oropharynx crowded (Mallampati-tier assessment); BP 148/94 on two agents; no pedal oedema; the sleepiness moderate by the clinical ladder (seated-situation dozing); the husband interviewed separately — the pauses and the gasp-resume cycle described in detail the patient had never witnessed herself.",
      diagnosis: "Obstructive sleep apnoea, moderate, with resistant hypertension — the Indian lower-BMI phenotype in the file by name.",
      management: "The CPAP conversation with the first-month programme as the treatment core: technician home visit in week 1, three mask options trialled, humidity set for the summer, the husband assigned the morning report ('does she snore with it on?'); weight counselling modest (a 5-kg target); the hypertension co-management flagged to the physician (the apnoea treatment IS the cardiovascular medicine — antihypertensive review anticipated); the adherence review scheduled like an insulin review at 1 and 3 months.",
      outcome: "Three months: nightly 6.5-hour CPAP use by the machine's own data; morning headaches gone; sleepiness scores halved; the antihypertensive load under formal review for de-escalation; the couple's line at review: 'the machine is ugly, but the mornings are new'.",
      teachingPoints: [
        "The partner's interview is the diagnostic instrument in apnoea — the patient has never seen herself pause; ask for the observer by name.",
        "Indian apnoea lives at lower BMIs: the snore-and-pause cluster orders the study regardless of the mirror.",
        "CPAP is a programme, not a purchase — the first month's engineering decides the decade.",
      ],
    },
  ],
  clinicalPearls: [
    "The fork first: sleepiness ('could sleep now') vs fatigue ('exhausted, cannot nap') — ten seconds that route the whole assessment.",
    "Four engines, four treatments: insufficient sleep (arithmetic), OSA (the air-splint), the central hypersomnias (wake-promoters plus naps plus the cataplexy tier), secondary (treat the driver).",
    "Cataplexy is pathognomonic: 'when you laugh hard, does anything happen to your muscles?' — asked in every sleepy person, thanked when answered.",
    "MSLT: mean latency ≤ 8 minutes with ≥ 2 SOREMPs; CSF orexin confirms type 1 (the HLA-DQB1*06:02 autoimmune biology; the Pandemrix chapter).",
    "Refreshing naps = narcolepsy's paradoxical signature; non-refreshing long sleep with drunken waking = idiopathic hypersomnia; never-refreshing with pauses = OSA.",
    "The commonest cause of EDS is insufficient sleep — the weekend catch-up that restores is the tell.",
    "Indian apnoea lives at lower BMIs: the craniofacial phenotype — test the snore-and-pause cluster, not the mirror.",
    "Paediatric OSA mimics ADHD: snoring, big tonsils, hyperactivity, bedwetting — treat the airway, reconsider the label.",
    "Scheduled naps are treatment in narcolepsy (contrast insomnia, where they spend the pressure).",
    "Cataplexy tier: venlafaxine, clomipramine, fluoxetine (REM-suppressors) + sodium oxybate for severe cases; modafinil the first-line wake-promoter.",
    "Sleepiness at the wheel is the Indian public-health emergency: ask the question directly, stop the drive, document the review.",
  ],
  highYieldSummary: [
    "Structure: excessive daytime sleepiness = four engines — insufficient sleep (commonest; the weekend-catch-up tell), broken sleep (OSA: snoring, pauses, unrefreshing sleep, the partner's interview, the AHI), central hypersomnias (narcolepsy types 1/2, idiopathic hypersomnia), secondary (depression, hypothyroid, medicines, post-TBI; Kleine-Levin's episodic orphan tier).",
    "Narcolepsy type 1: autoimmune orexin-neuron loss (~70,000 cells; HLA-DQB1*06:02; post-infectious triggers, the Pandemrix signal) → the wake-hold fails (irresistible REFRESHING naps, fragmented nights), REM leaks (hypnagogic hallucinations, sleep paralysis), and emotion trips the atonia circuit (cataplexy — knees/jaw/face, fully conscious, pathognomonic); MSLT latency ≤ 8 min with ≥ 2 SOREMPs; CSF orexin the deficient-range confirmation.",
    "OSA: the airway collapses in deep sleep → oxygen dips, micro-arousals tens-to-hundreds nightly → unrefreshing sleep, daytime sleepiness, cardiovascular decades (hypertension, stroke, arrhythmia); STOP-BANG-style screening with the partner's witnessed-pauses interview; CPAP gold standard with the adherence programme deciding outcomes; the Indian lower-BMI craniofacial phenotype and the paediatric tonsillar ADHD-mimic.",
    "The assessment craft: the sleepiness-vs-fatigue fork; the clinical ladder (passive → seated → active dozing; the wheel = the red flag); the two-week extended diary; the Epworth concept (named); the cataplexy question verbatim; the driving question directly; TSH/counts/medicine inventory before expensive tests.",
    "Treatments by engine: schedule expansion + digital curfew for the arithmetic; weight + CPAP first-month programme + alternatives (mandibular advancement, positional therapy, paediatric adenotonsillectomy) + comorbidity management for the demolition; scheduled naps + modafinil/armodafinil (first-line; methylphenidate second) + the cataplexy tier (venlafaxine/clomipramine/fluoxetine; sodium oxybate specialist-tier) + school/occupational accommodations for the central engines; driver-treatment for the secondary tier.",
    "Driving safety rules the calendar: untreated sleepiness-and-cataplexy is the hazard; treated-and-stable with documented review returns the wheel — a safety rule, not a punishment.",
    "The Indian tier: the lorry-driver consultation as life-or-death clinic (truck-driver sleep studies; the corridor stimulant culture); the desk-sleeping adolescent triage (hours-arithmetic, delayed phase, the cataplexy question); the thin-patient apnoea correction; the narcolepsy decade-delay reality; the school-nap letter as free therapy; CPAP cost-and-power honesty (₹25,000–60,000; inverter backup); the diagnostic tier's metro concentration.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "hypersomnia-quiz-1",
      question: "The commonest cause of excessive daytime sleepiness:",
      options: ["Narcolepsy", "Behaviourally induced insufficient sleep", "Kleine-Levin syndrome", "Idiopathic hypersomnia"],
      correctIndex: 1,
      explanation: "The arithmetic giant: the two-week diary with the weekend catch-up is the proof.",
      afterSectionId: "diagnosis",
    },
    {
      id: "hypersomnia-quiz-2",
      question: "The symptom pathognomonic of narcolepsy type 1:",
      options: ["Morning headache", "Cataplexy (emotion-triggered muscle atonia with preserved consciousness)", "Snoring", "Bedwetting"],
      correctIndex: 1,
      explanation: "Ask the laughter-muscle question in every sleepy person; cataplexy is volunteered almost never.",
      afterSectionId: "symptoms",
    },
    {
      id: "hypersomnia-quiz-3",
      question: "The MSLT findings defining narcolepsy:",
      options: ["Latency > 20 minutes with no REM", "Mean latency ≤ 8 minutes with ≥ 2 REM-onset naps", "Only leg movements counted", "Night-time apnoea count"],
      correctIndex: 1,
      explanation: "Short latency plus REM-intrusion into the naps — the objective signature (CSF orexin confirms type 1 where complex).",
      afterSectionId: "diagnosis",
    },
    {
      id: "hypersomnia-quiz-4",
      question: "A thin 44-year-old woman with snoring, witnessed pauses and refractory hypertension:",
      options: ["Cannot have OSA (low BMI)", "Should be tested: Indian apnoea includes low-BMI craniofacial phenotypes", "Needs an SSRI", "Needs modafinil first"],
      correctIndex: 1,
      explanation: "The BMI gate misleads in India: the snore-pause cluster orders the study.",
      afterSectionId: "differential",
    },
    {
      id: "hypersomnia-quiz-5",
      question: "Cataplexy is specifically treated with:",
      options: ["Modafinil", "REM-suppressing antidepressants (venlafaxine, clomipramine, fluoxetine) and sodium oxybate for severe cases", "CPAP", "Melatonin"],
      correctIndex: 1,
      explanation: "The wake-promoters treat the sleepiness; the cataplexy tier is its own pharmacology.",
      afterSectionId: "management",
    },
    {
      id: "hypersomnia-quiz-6",
      question: "In narcolepsy management, scheduled daytime naps:",
      options: ["Worsen the disorder", "Are a legitimate treatment component (refreshing brief naps)", "Are forbidden", "Replace medicines entirely"],
      correctIndex: 1,
      explanation: "Contrast insomnia (naps spend the pressure): in narcolepsy the brief planned nap anchors the day — free and therapeutic.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Distinguish sleepiness from fatigue at the bedside, and state why the fork routes to different work-ups.", answer: "The nap test: sleepiness = 'I could fall asleep now' (dozing in passive-to-active situations, the micro-sleeps of the debt); fatigue = 'I am exhausted but could not nap'. The routing: sleepiness → sleep medicine (the four engines: hours, airway, brain-sleepiness, drivers); fatigue → the medical/psychiatric work-up (thyroid, anaemia, depression, chronic disease). The ten-second fork prevents the entire wrong-specialty cascade.", topic: "Diagnosis" },
    { question: "Recite the four engines of EDS with one tell-tale each.", answer: "(1) Insufficient sleep — the weekend catch-up that RESTORES (needs 8, sleeps 5.5; the diary proves); (2) Broken sleep/OSA — the partner's witnessed pauses with never-refreshing mornings; (3) Central hypersomnias — refreshing naps plus (narcolepsy type 1) the laughter-collapse, or (idiopathic hypersomnia) long unrefreshing sleep with drunken waking; (4) Secondary — the driver's own signature (depression's morning-anchored oversleeping, the hypothyroid slowness, the sedating-medicine inventory, the episodic Kleine-Levin marathons).", topic: "Diagnosis" },
    { question: "Ask the cataplexy question verbatim as you would in clinic.", answer: "'When you laugh hard, or get angry suddenly, does anything happen to your muscles — your knees, your face, your head?' — asked in EVERY sleepy person, because patients hide cataplexy for years out of fear of appearing dramatic or 'mad', and it is volunteered almost never. When the answer is yes: the head-nod, the knee-dip, the seconds-long crumple with consciousness fully preserved — thank the patient for telling you; it is often the sentence they have waited a decade to say.", topic: "Clinical practice" },
    { question: "What three findings on MSLT define narcolepsy, and what does CSF orexin add?", answer: "MSLT: mean sleep latency ≤ 8 minutes (the pathologically fast fall) with ≥ 2 sleep-onset REM periods (SOREMPs — REM intruding into the naps it should not touch), after documented adequate prior-night sleep on PSG. CSF orexin adds the type-1 confirmation: the deficient range proves the orexin-neuron loss where the case is complex (ambiguous cataplexy, medicated REM, the medicolegal tier) — the neurotransmitter disease named in the spinal fluid.", topic: "Diagnosis" },
    { question: "Write the STOP-BANG-style screening cluster and the partner-interview principle.", answer: "The named cluster: Snoring, Tiredness, witnessed Apnoea (the pauses), Pressure (hypertension), BMI, Age, Neck circumference, Gender — the score gates the study's urgency (named, not reproduced). The partner-interview principle: the patient has never witnessed their own pauses — the observer's report IS the instrument ('has anyone seen you stop breathing?' asked of the spouse, in the room, by name); the Indian correction: the BMI row under-weights — the craniofacial phenotype means the snore-and-pause cluster orders the study regardless of the mirror.", topic: "Clinical practice" },
    { question: "Explain why scheduled naps are treatment in narcolepsy and debt-spending in insomnia.", answer: "In narcolepsy the problem is the wake-HOLD: brief planned naps (15–20 minutes, scheduled into the day) genuinely refresh and reduce the sleep-pressure load the failing switchboard must bridge — two naps anchor many patients' days, free, underused, as therapeutic as medication in the day's architecture. In insomnia the problem is insufficient pressure at the night's gate: a nap SPENDS the adenosine the coming night needs — pressure-debt, not pressure-relief. Same behaviour, opposite mechanism, opposite prescription.", topic: "Management" },
    { question: "List the wake-promoting tier with monitoring points, and the cataplexy-specific pharmacology.", answer: "Wake-promoting: modafinil/armodafinil 100–400 mg first-line (favourable safety profile; early headache/nausea; blood-pressure checks; the rare serious-rash warning; interaction counsel) — methylphenidate/amphetamines second tier (tachycardia, BP, appetite, dependence monitoring; the Indian Narcotics-pipeline access reality). Cataplexy: the REM-suppressing antidepressants at low doses — venlafaxine 37.5–75 mg (the Indian mainstay), clomipramine (the classic), fluoxetine (the SSRI option) — plus sodium oxybate for severe cases: the night-architecture medicine, consolidating sleep AND treating cataplexy, highly regulated, expensive, specialist-only.", topic: "Pharmacology" },
    { question: "Give the Indian public-health sleepiness levers.", answer: "(1) Driver-sleepiness screening at commercial-licence medicals (the snoring-BMI-BP triad at the transport office — a policy worth having, mostly absent); (2) the transport-company medical review with sleepiness written into the form even where the form does not ask; (3) school-nap accommodations (the nurse's-room prescription changing report cards); (4) the CPAP adherence programmes as service design (week-1 calls, mask menus, the family morning report); (5) the desk-sleeping adolescent triage protocol (hours-arithmetic, the phase question, the cataplexy question) in school-health training.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "He sleeps anywhere — bus, chair, function. Lucky fellow, no?", answer: "Sleeping the moment you sit is not luck; it is a symptom. If the nights are short, the fix is hours; if the nights are long and he still dozes, we look for the broken-sleep and brain-sleepiness causes — and if it is happening while driving, it is an emergency, not a joke." },
    { question: "I feel tired all the time but I cannot nap. Is that the same thing?", answer: "No — that is fatigue rather than sleepiness, and it points us toward different doors: thyroid, anaemia, depression, medicines. The nap test ('if you lay down right now, could you sleep?') separates the two in ten seconds." },
    { question: "My son is 16 and sleeps at every opportunity. Teenagers are like this, no?", answer: "Partly biology (the teenage clock shifts late), but check the arithmetic: how many hours on school nights versus weekends? If school nights run 5–6 hours, the treatment is sleep, not scolding. And if he sleeps enough and STILL dozes — especially if his muscles dip when he laughs hard — bring him in: that specific sign has a name and a treatment." },
    { question: "The doctor says my husband stops breathing at night. Is that dangerous?", answer: "Yes: that is sleep apnoea, and it matters beyond the snoring — hundreds of nightly dips in oxygen strain the heart and brain over years, feeding blood pressure and stroke risk. The treatment (a small machine that holds his airway open with air pressure) is ungainly and works. Our job is to make the first month of it succeed." },
    { question: "She is thin. How can she have sleep apnoea?", answer: "The Western picture of the overweight snorer misleads here: Indian apnoea often lives in the throat's structure, not just in weight. Thin patients snore, pause, and carry the same heart risks. The test follows the snore-and-pause cluster, not the mirror." },
    { question: "Is narcolepsy a mental illness?", answer: "It is a brain-sleepiness disorder with an identified chemistry — the loss of a wake-keeping signal — not a mental illness, not laziness, and not dangerous to others once treated. It is lifelong, manageable with medicine and nap-scheduling, and people have carried it through full careers." },
    { question: "When he laughs hard, he goes weak and slides down. That is a 'nervous' problem, they said.", answer: "That weakness-with-laughter has a specific name — cataplexy — and it is the signature of narcolepsy. It is fully conscious, seconds-long, and treatable; it is not epilepsy, not fainting, and not drama. It is also the answer most patients have been hiding for years, so thank him for telling you." },
    { question: "Will the wake-promoting medicines make him dependent or jittery?", answer: "The first line (modafinil/armodafinil) is comparatively gentle — headache and nausea in the early days, blood-pressure checks, a rare rash warning. The stronger stimulants exist as backup with more monitoring. Dependence is far less the story than with older stimulants; the goal is a person awake, not a person wound." },
    { question: "Can he drive with this condition?", answer: "The honest answer: not while untreated and unstable — sleepy-and-cataplectic driving is a genuine hazard. Yes, once treated and stable, with the doctor's documented review. This is a safety rule, not a punishment, and we will take it seriously with you." },
    { question: "The CPAP machine is ugly, costly, and the power fails. What then?", answer: "All three are real Indian objections. The machine's benefits justify the ugliness (marriages survive masks better than snoring); inverter/UPS backup is a one-time cost many households already own; and the auto-titrating travel tier exists. What does not survive is untreated decades of nightly suffocation — the machine is the cheaper of the two roads." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "ICSD-3 (AASM) — the hypersomnolence-disorder architecture (narcolepsy types 1/2, idiopathic hypersomnia, insufficient-sleep syndrome)" },
      { source: "American Academy of Sleep Medicine — narcolepsy, OSA and hypersomnolence management statements" },
      { source: "DSM-5-TR (APA) — hypersomnolence disorder construct paraphrased" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.14.3 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Kryger/Principles and Practice of Sleep Medicine lineage — the sleepiness differential standard (representative tier)" },
    ],
    trials: [
      { source: "Scammell TE — the orexin/hypocretin biology of narcolepsy (the review lineage); Mignot E — the genetics (HLA-DQB1*06:02) and the Pandemrix epidemiological chapter" },
      { source: "Sullivan CE et al. — the original CPAP trial; Weaver TE et al. — the adherence meta-analytic literature" },
      { source: "Dauvilliers Y et al. — sodium oxybate and cataplexy treatment programmes" },
    ],
    reviews: [
      { source: "Johns MW — the Epworth Sleepiness Scale (named; not reproduced); Chung F et al. — the STOP-BANG screening literature (named)" },
      { source: "Gottlieb DJ et al. — OSA and cardiovascular outcomes (the comorbidity base)" },
      { source: "Wise MS et al. / Maski K — paediatric narcolepsy and school accommodations; Billiard M / Arnulf I — Kleine-Levin reviews and the lithium series" },
      { source: "Indian context — Indian truck-driver sleep studies (the road-safety literature); Indian OSA phenotype publications (the low-BMI craniofacial contribution); NMHS 2015–16 framing; CPAP access and cost realities" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The sleepiness diary and the partner's interview — the two free instruments this course hands to every household" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language: the four engines, the laughter question, the machine that works, the driving rule.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The fork, the four engines, the narcolepsy biology, the OSA programme.",
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
      estimatedTime: "46 min",
      description: "Everything — the CPAP programme craft, the narcolepsy architecture, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The fork, the four engines, the safety gate.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can run the fork and name the four engines with their tell-tales cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The orexin switchboard, the airway demolition, the debt collector.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain cataplexy's circuit and why the apnoea patient wakes unrefreshed." },
    { number: 3, title: "Clinical Practice", description: "The ladder, the screens, the MSLT, the engine-matched treatments.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can ask the cataplexy and driving questions verbatim and write the engine-matched plan." },
    { number: 4, title: "Indian Context", description: "The driver clinic, the desk-sleeper, the thin phenotype, the accommodation letters.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can correct the BMI gate, deliver the destigmatising script, and write the school-nap letter." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the narcolepsy essay and the four-engine skeleton cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.14.3 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICSD-3 (AASM) — the hypersomnolence-disorder architecture; DSM-5-TR (APA) — hypersomnolence disorder paraphrased", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Scammell TE — the orexin/hypocretin biology of narcolepsy (the review lineage); Mignot E — the genetics (HLA-DQB1*06:02) and the Pandemrix epidemiological chapter", sourceType: "review", year: "1998 onward", dateReviewed: "2026-09-28" },
    { id: "S4", source: "American Academy of Sleep Medicine — narcolepsy, OSA and hypersomnolence management statements", sourceType: "guideline", year: "2010s–2020s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Johns MW — the Epworth Sleepiness Scale (named; not reproduced); Chung F et al. — the STOP-BANG screening literature (named)", sourceType: "primary", year: "1991 / 2000s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Sullivan CE et al. — the original CPAP trial; Weaver TE et al. — the adherence meta-analytic literature; Gottlieb DJ et al. — OSA and cardiovascular outcomes", sourceType: "trial", year: "1981 onward", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Dauvilliers Y et al. — sodium oxybate and cataplexy treatment programmes; the wake-promoting (modafinil/armodafinil) trial tier", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Wise MS et al. / Maski K — paediatric narcolepsy and school accommodations; Billiard M / Arnulf I — Kleine-Levin reviews and the lithium series", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Indian context — Indian truck-driver sleep studies (the road-safety literature); Indian OSA phenotype publications (the low-BMI craniofacial contribution); NMHS 2015–16 framing; CPAP access and cost realities (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Littner MR et al. / AASM practice parameters — the Multiple Sleep Latency Test's standards and interpretation (the objective test's foundation)", sourceType: "guideline", year: "2005 onward", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The four-engine differential: insufficient sleep (the commonest cause of EDS; the weekend-catch-up-restores tell), broken sleep (OSA), central hypersomnias (narcolepsy types 1/2, idiopathic hypersomnia), and secondary hypersomnia — with completely divergent treatments.", grade: "established", sources: ["S1", "S2"] },
    { text: "Narcolepsy type 1 biology: autoimmune destruction of ~70,000 hypothalamic orexin/hypocretin neurons in HLA-DQB1*06:02-susceptible people, with post-infectious (influenza, post-H1N1-era) and vaccine-signal (Pandemrix) triggers; CSF orexin deficiency confirms.", grade: "established", sources: ["S3"] },
    { text: "The narcolepsy tetrad — cataplexy (pathognomonic, emotion-triggered atonia with preserved consciousness), hypnagogic/hypnopompic hallucinations, sleep paralysis, fragmented night sleep — on a floor of EDS with REFRESHING naps; MSLT mean latency ≤ 8 minutes with ≥ 2 SOREMPs the objective signature.", grade: "established", sources: ["S2", "S3"] },
    { text: "OSA: deep-sleep airway collapse with oxygen dips and micro-arousals tens-to-hundreds nightly → unrefreshing sleep, daytime sleepiness and cardiovascular decades (hypertension, stroke, arrhythmia); CPAP is the gold standard with adherence support determining outcomes; the Indian lower-BMI craniofacial phenotype means the snore-and-pause cluster orders the study regardless of BMI.", grade: "established", sources: ["S6", "S9"] },
    { text: "Paediatric OSA presents as snoring, enlarged tonsils, hyperactive-ADHD-lookalike behaviour, poor school performance and bedwetting — treat the airway (adenotonsillectomy where indicated), reconsider the label.", grade: "established", sources: ["S1", "S8"] },
    { text: "Treatment by engine: scheduled naps (legitimate therapy in narcolepsy — refreshing brief naps) plus modafinil/armodafinil first-line wake-promotion (methylphenidate second tier); cataplexy treated by REM-suppressing antidepressants (venlafaxine, clomipramine, fluoxetine) with sodium oxybate for severe cases (night-architecture plus cataplexy, highly regulated, specialist-only).", grade: "established", sources: ["S4", "S7"] },
    { text: "Kleine-Levin: episodic days-to-weeks of 15–20-hour sleep with derealisation, megaphagia and hypersexuality/disinhibition in adolescent males, normalcy between; watchful waiting with episode care, lithium case-series for frequent relapsers.", grade: "established", sources: ["S8"] },
    { text: "Driving safety: untreated sleepiness-with-cataplexy is a documented hazard; treated-and-stable with documented review is the goal — the rule that governs the calendar.", grade: "established", sources: ["S4"] },
    { text: "The Indian tier: driver sleepiness implicated in a meaningful share of highway crashes (truck-driver studies: high sleep-disordered breathing and deprivation rates); the commercial-licence sleep screen as an absent-but-worthwhile policy; the desk-sleeping adolescent triage; the narcolepsy diagnostic delay measured in years-to-decade; school-nap accommodations changing trajectories; the diagnostic and CPAP cost tiers (approx 2026).", grade: "supported", sources: ["S9"] },
    { text: "The sleepiness-vs-fatigue fork as the assessment's first line: sleepiness ('could fall asleep now') routes to the four-engine sleep work-up; fatigue ('exhausted but could not nap') routes to the medical/psychiatric tier — the nap test that prevents the wrong-specialty cascade.", grade: "established", sources: ["S1", "S2"] },
    { text: "The objective-test standards: the MSLT's mean-latency-and-SOREMP criteria with documented adequate prior-night sleep (the AASM practice parameters) — the foundation the central-hypersomnia diagnoses are confirmed on; CSF orexin the type-1 confirmation where the case is complex.", grade: "established", sources: ["S10", "S4"] },
  ],
};
