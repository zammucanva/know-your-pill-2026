import type { PsychiatryCourse } from "./types";

/**
 * MILD COGNITIVE IMPAIRMENT — canonical Psychiatry course
 * (migration batch 10, Group M — psychiatry of old age).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/mci.md — untouched foundation),
 * re-researched against current guidance (the Petersen Mayo
 * lineage and the Winblad harmonisation statement, the
 * Mitchell–Shiri-Feshki conversion/reversion meta-analyses,
 * the DSM-5-TR mild-neurocognitive-disorder construct, the
 * Lancet Commission risk hierarchy, the Lautenschlager and
 * FINGER trials, the ACHIEVE hearing line, the 10/66
 * Indian-site epidemiology) with per-claim provenance.
 * Drug routes: none — no drug treats MCI (the trials'
 * verdict on the donepezil tier, and the note's own
 * position); drugLinks is empty by design, the honest
 * refusals taught in management and recorded in
 * contentGaps — never invented as routes.
 */
export const mciCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "mci",
  title: "Mild Cognitive Impairment",
  shortName: "MCI",
  kind: "disorder",
  category: "Psychiatry of Old Age",
  groupLetter: "M",
  groupName: "Psychiatry of old age",
  learningPath: ["Psychiatry", "Psychiatry of Old Age", "Mild Cognitive Impairment"],

  /* ---- Lifecycle + review ---- */
  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  /* ---- Hero / summary ---- */
  estimatedReadTime: "34 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The crossroads between normal ageing and dementia — objective decline, function preserved",

  summary:
    "Mild cognitive impairment means a measurable decline beyond age norms with daily function preserved. The amnestic form carries a raised yearly risk of dementia, so management is hunting reversible causes, controlling vascular risk, and re-testing on a dated schedule.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Apply the three MCI gates — concern, objective decline, preserved function — and state the one functional clause that separates MCI from dementia.",
    "Classify by domain (amnestic versus non-amnestic, single versus multiple) and map each subtype to the dementia pathway it shadows.",
    "Quote the honest numbers — 10–15% yearly conversion in amnestic MCI against 1–2% background, 10–20% reversion — and say what the reversion figure obligates you to hunt.",
    "Run the fog audit (medications, mood, sleep, thyroid, B12, hearing — M-M-S-T-B-H) as the fifteen-minute first pass, and deprescribe the sedative-anticholinergic load gradually on a written schedule.",
    "Use the testing tier correctly: the MoCA-level screen over the MMSE ceiling, informant AD8-style tools, and literacy-adjusted instruments for the Indian strata.",
    "Deliver the risk package with specifics (exercise ~150 min a week, BP in the 130s, hearing aids, engagement, mood and sleep) beside the honest refusals (no cholinesterase inhibitor, no tonics).",
    "Run the trajectory as the diagnosis: 6–12-month re-testing with the same instruments, the three-signs notebook, the conversion watch-list — and the Indian family conversation (calibration, scaffolding, driving, property).",
  ],
  quickFacts: [
    { label: "The three gates", value: "Concern + objective slip + function standing", detail: "A worry raised by the person or family, a deficit measurable on age-education-normed testing (1–2 SD below), and daily function preserved with at most slower pace and more lists — the three-clause answer to every MCI viva" },
    { label: "The conversion figure", value: "10–15% per year", detail: "Amnestic MCI's progression to dementia against 1–2% a year in the general elderly — the risk-state framing; multi-domain and biomarker-positive groups run higher" },
    { label: "The reversion figure", value: "10–20% improve", detail: "Higher in population-based than clinic-based samples — the number that obligates the fog audit: depression, apnoea, thyroid, B12, medication fog, hearing" },
    { label: "The prevalence", value: "15–20% of 65+", detail: "Higher in older bands and in clinics; each individual's road — stable, reverting or converting — declares itself over 2–3 years of follow-up" },
    { label: "The mnemonic", value: "M-M-S-T-B-H", detail: "The fog audit: Medications (anticholinergic/benzo burden), Mood, Sleep (apnoea), Thyroid, B12, Hearing — the highest-yield first pass because it is the layer that fully reverses" },
    { label: "The exam classic", value: "No cholinesterase inhibitors", detail: "The trials do not support routine use in MCI — diagnose, audit and monitor instead; the tier is reserved for diagnosed dementia, and the refusal is what the family demanding 'memory tablets' must hear" },
    { label: "The best-evidenced lever", value: "~150 min a week", detail: "Aerobic exercise — the strongest single trial-level signal for trajectory; the Indian adaptation: the morning-walk group, the temple-stairs protocol, the garden club" },
    { label: "The largest modifiable factor", value: "Hearing loss", detail: "The Lancet-commission framing's headline — hearing correction is cognitive medicine; untreated loss is both a fog layer and a conversion-risk factor" },
  ],
  knowledgeGraph: [
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The amnestic pathway's destination — the memory-led subtype's shadow and the conversion watch's named endpoint" },
    { label: "Vascular Dementia", type: "condition", href: "/psychiatry/vascular-dementia/", note: "The executive/attention face's shadow and the shared treatable rails — the Indian picture's most modifiable engine" },
    { label: "Dementia with Lewy Bodies", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The visuospatial-and-fluctuation shadow the non-amnestic subtypes watch for — and the orthostatic-BP reason it gets queried" },
    { label: "Frontotemporal Dementia", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The language-led and behavioural shadows at the non-amnestic edge — a differentiation the trajectory settles" },
    { label: "Delirium in the Elderly", type: "condition", href: "/psychiatry/elderly-delirium/", note: "The fluctuating impostor after illness or drug change — treated as its own emergency before any MCI reading" },
    { label: "Mood Disorders in the Elderly", type: "condition", href: "/psychiatry/elderly-mood/", note: "The fog audit's mood layer — the retrieval-freeze that lifts when the depression is treated, and can coexist with true MCI" },
    { label: "Managing Dementia", type: "condition", href: "/psychiatry/dementia-management/", note: "Where the converted patient goes — and the advance-planning floors best seeded at the MCI stage, while capacity stands" },
    { label: "Benzodiazepine Misuse", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The taper logic for the decade-long 'sleep tablet' — the single deprescribing act that often buys back a cognitive year" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The double story: the anticholinergic fog the audit hunts, and the cholinesterase tier that failed to earn routine use in MCI" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The filing room — the amnestic pathway's earliest casualty and the structure the nightly apnoea starves" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the MCI consultation, and none of them is a plaque count. The reserve bank: the brain runs on an account stocked across decades — education, lifetime intellectual and social activity, bilingualism, occupational complexity — and pathology writes withdrawals against it: amyloid, small-vessel disease, atrophy. Symptoms appear when the withdrawals exceed the balance, which is why two people with identical amyloid loads can sit on opposite sides of the MCI line: the reserve, not the plaque, decides — the Indian 10/66 insight operationalised, the deprivation rails of low education and untreated vascular burden being, in bank terms, thin accounts under heavy withdrawals. The clinical consequence: after the diagnosis the family controls exactly two levers — slowing the withdrawals (vascular control, exercise) and raising the reserve's current yield (engagement, new learning, hearing, mood). The fog audit: a substantial share of what presents as 'MCI' is not the brain's structure failing but its operating conditions — the anticholinergic bladder tablet, the nightly benzodiazepine 'for sleep', uncontrolled apnoea starving the hippocampus of oxygen night after night, depression's retrieval-freeze (the person knows the name but cannot open the drawer), hypothyroid metabolism slowing every engine. The audit — medications, mood, sleep, thyroid, B12, hearing — is the highest-yield first pass precisely because it is the layer that fully reverses. The trajectory as diagnosis: a single cognitive score is a photograph; MCI is a film. The amnestic single-domain picture that is stable at 6, 12 and 18 months is one story; the one drifting across visits — word-finding thinning, route-fumbles, repetition shortening its intervals — is another. This is why the MCI consultation ends with a dated follow-up appointment rather than a verdict, and why the family's three-signs notebook (the specific slips, dated) turns the next visit's comparison from memory into measurement.",
    steps: [
      "The reserve bank: deposits of education, activity, bilingualism and occupational complexity made across decades; pathology's withdrawals of amyloid, vascular damage and atrophy; symptoms when withdrawals exceed the balance.",
      "The MCI line is where the balance runs thin: two people with identical amyloid loads on opposite sides — the reserve, not the plaque count, decides (the 10/66 insight operationalised).",
      "The fog audit: operating conditions, not structure — the anticholinergic tablet, the nightly benzodiazepine, apnoea's nightly hippocampal starvation, depression's retrieval-freeze, hypothyroid metabolism.",
      "The two family levers after diagnosis: slow the withdrawals (vascular control, exercise) and raise the reserve's current yield (engagement, new learning, hearing, mood).",
      "The trajectory as diagnosis: a single score is a photograph, MCI is a film — the stable single-domain picture against the one drifting across serial visits.",
      "The conversion mechanics: the amnestic picture drifts through domain-spread to the functional gate — accounts mismanaged, medicines missed, stove incidents, route-lost driving — where dementia, not MCI, is declared.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "hippocampus", name: "Hippocampus (the filing room)", role: "The memory-filing structure — the amnestic pathway's earliest casualty (mild hippocampal thinning on the archetypal MRI) and the structure nightly apnoea starves of oxygen.", grade: "established" },
    { id: "entorhinal-cortex", name: "Entorhinal cortex and medial temporal lobe (the gateway)", role: "The Alzheimer pathway's first atrophy territory, upstream of the hippocampus — the earliest changes the amnestic prototype rides on.", grade: "established" },
    { id: "frontal-executive", name: "Frontal-executive network (the manager's office)", role: "Planning, task-switching and attention — the attention/executive-led subtype's seat, the vascular, Lewy-body and frontotemporal shadows' territory.", grade: "established" },
    { id: "white-matter", name: "Deep white matter (the cabling)", role: "The small-vessel engine's target — the moderate white-matter burden of the Indian 10/66 archetype, writing slowed processing and executive slips.", grade: "established" },
    { id: "posterior-cortices", name: "Posterior cortices (the visuospatial desk)", role: "Navigation and face-finding — the visuospatial-led subtype's territory and the Lewy body shadow's address.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "The double story: the anticholinergic fog the audit hunts (the bladder tablet, the cold remedies) — and the system whose augmentation was trialled in MCI and failed to earn routine use; the honest no-tier.", grade: "established" },
    { name: "Serotonin", symbol: "5-HT", role: "The depression layer's chemistry — the retrieval-freeze that lifts when the mood is treated; the SSRI rider tier's target, always treating the comorbidity and never the MCI itself.", grade: "supported" },
    { name: "GABA", symbol: "GABA", role: "The nightly benzodiazepine's receptor — the borrowed calm that fogs memory in elders; the taper logic is the deprescribing act's backbone.", grade: "established", drugConnection: "The Benzodiazepine Misuse course's gradual-taper architecture — no KYP drug lesson for the benzodiazepines themselves; the discipline is taught, the route never invented." },
  ],
  pathways: [
    {
      id: "reserve-pathway",
      name: "The reserve bank (deposits to the MCI line)",
      steps: [
        { label: "The deposits", detail: "Education, lifetime intellectual and social activity, bilingualism, occupational complexity — the account stocked across decades" },
        { label: "The withdrawals", detail: "Amyloid, small-vessel disease, atrophy — pathology writing against the balance year after year" },
        { label: "The line crossed", detail: "Symptoms appear when withdrawals exceed the balance — the MCI gate, a reserve threshold rather than a pathology threshold" },
        { label: "The two levers", detail: "After diagnosis: slow the withdrawals (vascular control, exercise) and raise the current yield (engagement, new learning, hearing, mood)" },
      ],
      clinicalManifestation: "The retired professor who writes everything in three diaries and the farmer who never kept books sit on opposite sides of the same pathology load — the reserve, not the plaque count, decides.",
      grade: "supported",
    },
    {
      id: "fog-pathway",
      name: "The fog audit (operating conditions to reversible impairment)",
      steps: [
        { label: "The fog load", detail: "The anticholinergic tablet, the nightly benzodiazepine, untreated apnoea, depression's retrieval-freeze, hypothyroid metabolism, unaided hearing" },
        { label: "Performance falls below the line", detail: "The operating conditions drop test performance without structural failure — the picture that imitates MCI" },
        { label: "The audit and the treatment", detail: "Meds, mood, sleep, thyroid, B12, hearing — the taper, the CPAP, the replacement, the hearing aids, the depression treated" },
        { label: "The reversion", detail: "The 10–20% that improves: removing the fog is adding memory — the layer that fully reverses" },
      ],
      clinicalManifestation: "The elder whose 'MCI' improves a point and a half on MoCA after the alprazolam taper and the CPAP — the reversible layer's dividend.",
      grade: "established",
    },
    {
      id: "trajectory-pathway",
      name: "The trajectory as diagnosis (photograph to film)",
      steps: [
        { label: "The photograph", detail: "The first consultation's single score — necessary, insufficient, and unable to distinguish the three roads" },
        { label: "The frames", detail: "Re-testing at 6–12 months with the SAME instruments — comparability is the method" },
        { label: "The map", detail: "Stable versus drifting: word-finding thinning, route-fumbles, repetition shortening its intervals across visits" },
        { label: "The gate", detail: "Function crossing — accounts mismanaged, medicines missed, stove incidents, route-lost driving — declares the conversion" },
      ],
      clinicalManifestation: "The stable 18-month map against the drift that crosses the functional gate — the verdict that belongs to the follow-up, never to the first visit.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "slips-surface", time: "The quiet years", title: "The slips surface", description: "Names walking away, mid-sentence word-hunting, misplacements beyond the old pattern, questions repeated within the hour — the compensations (lists, diaries, reminders) growing quietly; the family's notebook beginning.", phase: "onset" },
    { id: "first-consult", time: "Month 0", title: "The first consultation", description: "The three gates applied (concern, objective deficit, function standing); the fog audit run (medications, mood, sleep, thyroid, B12, hearing); the honest numbers delivered — neither dismissal nor doom; the risk package prescribed with specifics.", phase: "onset" },
    { id: "reversible-layer", time: "Months 1–6", title: "The reversible layer treated", description: "The benzodiazepine tapered gradually on a written schedule, the CPAP begun, the thyroid and B12 replaced, the hearing aided, the depression treated — the fully-reversible layer cleared before any 'memory medicine' conversation.", phase: "duration" },
    { id: "first-retest", time: "Months 6–12", title: "The first re-test", description: "The same instruments, the informant's notebook reviewed, the map's first true frame: improvement (the reversible layer's dividend), stability, or the drift that changes the story — the photograph becoming a film.", phase: "peak" },
    { id: "road-declares", time: "Years 1–3", title: "The road declares itself", description: "Stable single-domain pictures holding for years; the 10–20% reverting; the 10–15%-a-year conversion watch catching the minority as function crosses the gate — accounts mismanaged, medicines missed, stove incidents, route-lost driving.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Prevalence of MCI in 65+ populations runs ~15–20%, higher in older bands and in clinic samples; conversion pools around 10–15% per year for amnestic MCI to dementia (versus 1–2% background in the general elderly), with multi-domain and biomarker-positive groups running higher; reversion 10–20%+ at follow-up — consistently higher in population-based than clinic-based cohorts, the referral filter selecting the more truly degenerative. The framing that survives every exam: MCI is a risk state, not a diagnosis of early Alzheimer's — each individual's map declares itself over 2–3 years of follow-up.",
    indianPrevalence: "The 10/66 dementia research programme's Indian sites documented high cognitive-impairment burdens in rural and urban south India, with the load riding on VASCULAR and DEPRIVATION rails — hypertension, diabetes, stroke, hearing loss, low education-as-reserve — the very rails treatment can still influence. Presentation runs delayed through the 'senior moments' family norm; the co-resident informant (usually a child) is the record-keeper; and follow-up, the diagnosis's engine, is fragile (distance, cost, the 'what will medicines do anyway' fatalism).",
    lifetimeRisk: "For the individual, three roads: stable for years, the 10–20% that reverts, or conversion at the amnestic 10–15%-a-year rate — the follow-up map, not the first visit, assigns the road.",
    ageOfOnset: "A late-life state of the 65+ bands, prevalence climbing with age; the early-onset (under 65) presentation belongs to the atypical, imaging-mandated tier.",
    indianNotes: "The constructive frame for Indian families: MCI is the window where the family's actions — BP control, walk schedules, hearing aids, engagement, safety audits — genuinely bend the road; the highest-yield interventions cost nothing.",
  },
  etiology: [
    { category: "biological", factor: "The four layers of the hunt", details: "(1) Degenerative — early Alzheimer's (the amnestic pathway), Lewy body and frontotemporal prodromes (the non-amnestic pathways); (2) vascular — small-vessel disease, strategic infarcts, post-stroke slowing, the Indian-weighted engine; (3) reversible/functional — depression (the pseudodementia layer), hypothyroidism, B12/folate deficiency, sleep apnoea's chronic hypoxia, medication fog (anticholinergics, benzodiazepines, opioids, gabapentinoids, polypharmacy), normal-pressure hydrocephalus (the triad), hearing/vision deprivation, chronic pain and isolation; (4) mixed — most real cases: amyloid plus vessels plus depression plus pills." },
    { category: "biological", factor: "The conversion-risk modifiers", details: "Amnestic or multi-domain subtype; APOE e4 carriage; biomarker positivity; vascular burden uncontrolled; diabetes; low reserve (education, activity); depression; sedentary life; hearing loss untreated; social retreat — the list the risk package is built to reverse." },
    { category: "genetic", factor: "APOE e4 — a modifier, never a test", details: "A conversion-risk modifier and a research stratifier, NOT a test to order clinically; no gene decides the individual's road." },
    { category: "psychological", factor: "The loop maintainers", details: "Depression (the retrieval-freeze layer — both mimic and modifier), chronic insomnia and untreated sleep disorders, social retreat — each amplifying the measurable deficit and each treatable." },
    { category: "social", factor: "The deprivation rails", details: "Low reserve (education, lifetime activity), sedentary life, untreated hearing loss, isolation — the 10/66 framing's population-level rails, and in the Indian picture the very rails the clinic can still influence." },
  ],
  symptomClusters: [
    {
      category: "1. The presenting complaints (the patient's words)",
      symptoms: [
        "Names of people and films walking away",
        "Mid-sentence word-hunting — the word arriving late or never",
        "Keys, phone and glasses misplaced beyond the old pattern",
        "Questions or stories repeated within the hour",
        "Appointments missed despite reminders",
        "New places navigated with a fumble",
        "Calculation slips in the shop ledger",
      ],
    },
    {
      category: "2. The preserved layer (the MCI gate)",
      symptoms: [
        "Basic and instrumental function standing: cooking, accounts, medications, shopping",
        "Driving sustained on locally familiar routes",
        "Slower pace and more lists and reminders — the compensation layer",
        "The compensations themselves are clinical data: the person who quietly shifted to writing everything has told you something",
      ],
    },
    {
      category: "3. The subtype faces",
      symptoms: [
        "Amnestic single-domain: pure memory slippage — the Alzheimer-pathway prototype",
        "Amnestic multi-domain: memory plus another domain — the higher-conversion-risk tier",
        "Language-led (non-amnestic): word-retrieval dominant — the logopenic shadow",
        "Attention/executive-led: planning and task-switching — the vascular/LBD/FTD shadow",
        "Visuospatial-led: navigation and face-finding — the Lewy body shadow",
        "The family's observation channel: the co-resident informant's structured report (AD8-style, named not reproduced) often outperforms the clinic test as the change-detector",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The Mayo/DSM-5 convergence",
      code: "DSM-5 cousin: mild neurocognitive disorder",
      criteria: [
        "A concern about a change in cognition — raised by the person or an informant (the wife's notebook, the son's phone call after the festival visit).",
        "Objective impairment on testing — 1–2 SD below age-education norms, or a clear decline from the person's own baseline.",
        "Independence in functional abilities PRESERVED — with possibly greater effort, slower pace or compensatory strategies: the clause that separates MCI from dementia.",
        "Not delirium — and not better explained by another mental disorder (depression above all), a medical cause or a substance, after the full audit has run.",
      ],
      duration: "Months-to-years — the gates open at the first visit, but the verdict belongs to the 2–3-year follow-up map.",
      indianNote: "The education clause is load-bearing in India: the retired professor and the non-literate farmer need different instruments; the clinic's default battery manufactures or misses MCI — the 10/66 lesson.",
    },
    {
      system: "The work-up",
      code: "The full audit",
      criteria: [
        "Cognitive testing: a MoCA-tier brief screen (the MMSE's ceiling is too low for MCI) plus domain-specific testing where available — memory lists, fluency, trail-drawing, clock.",
        "The informant interview: the AD8-style report and the three-signs notebook — the co-resident's dated observations.",
        "The fog audit: TSH, B12 (and folate), CBC, glucose/HbA1c, renal and liver panels, lipids; the medication review with the anticholinergic burden counted (the ACB concept); sleep-apnoea screening where the phenotype fits (snoring, BMI, unrefreshing sleep, the nocturia-hypertension cluster); the depression screen (GDS or PHQ-9) with the pseudodementia question — is retrieval frozen while recognition is intact?",
        "Vascular assessment: the BP profile (orthostics where Lewy body is queried), HbA1c, stroke review, ECG.",
        "Imaging: MRI where affordable or indicated — atrophy pattern, vascular burden, structural mimics, the NPH screen; not mandatory for every MCI, but wise for atypical, early-onset or fast-declining cases.",
        "The biomarker tier, honestly: CSF amyloid/tau and amyloid-PET reclassify risk precisely but remain a research-and-expensive tier in India and rarely change management today (the risk package is the same); plasma p-tau assays are arriving — know their direction, never order reflexively; functional imaging (FDG-PET/SPECT) for the atypical shadows where structure is unrevealing.",
      ],
      duration: "The first pass fits one consultation — the fog audit's bloods, the screens, the notebook; the confirmation belongs to the 6–12-month re-test.",
      indianNote: "MoCA-equivalent brief testing is free at medical colleges; TSH/B12/HbA1c ≈ ₹500–1,000 total at district labs; MRI ≈ ₹3,000–6,000 where indicated (approx 2026) — the work-up's cost is tests and follow-up, not drugs, of which there are none.",
    },
  ],
  severityScales: [
    {
      name: "MoCA",
      fullName: "Montreal Cognitive Assessment (named only, never reproduced)",
      measures: "The brief cognitive screen with the sensitivity the MMSE lacks at the MCI tier — education-matched interpretation; the SAME instrument repeated at 6–12 months for comparability, because the map is the diagnosis.",
      ranges: [],
      indianNote: "Language- and literacy-adjusted versions for the person's stratum — the score means different things in the retired professor and the non-literate farmer.",
    },
    {
      name: "AD8",
      fullName: "The informant report (named only)",
      measures: "The co-resident's structured change-report — often the better change-detector than the clinic test itself; the three-signs notebook is its homemade cousin, dated and specific.",
      ranges: [],
    },
    {
      name: "GDS / PHQ-9",
      fullName: "The depression screens (named only)",
      measures: "The mood layer of the fog audit — administered with the pseudodementia question attached: retrieval frozen while recognition stays intact.",
      ranges: [],
    },
  ],
  differentialDiagnosis: [
    { condition: "Normal ageing's slower recall", distinguishingFeatures: "Concern-testing at norms for age and education; recognition cues work; no functional drift.", keyDifferentiator: "The stable map — normal ageing does not drift across serial visits." },
    { condition: "Depression's 'pseudodementia'", distinguishingFeatures: "Don't-know answers versus don't-care; recognition intact; the mood architecture; improves with treatment — and it can coexist with true MCI (treat, then re-test).", keyDifferentiator: "The retrieval-freeze pattern: the person knows the name but cannot open the drawer; the mood tier clarifies the residual." },
    { condition: "Medication fog", distinguishingFeatures: "The anticholinergic/benzodiazepine load; the temporal lock to prescriptions; clears with gradual deprescribing.", keyDifferentiator: "The decade-long 'sleep tablet' the family forgot to list — the fog audit's first catch." },
    { condition: "Sleep apnoea's chronic fog", distinguishingFeatures: "Snore-pause cluster, unrefreshing sleep, morning headaches; the sleep study; improves with CPAP.", keyDifferentiator: "The nightly hippocampal starvation — CPAP as memory medicine, not a snore-cure." },
    { condition: "Delirium's low gear (the missed mild cases)", distinguishingFeatures: "Fluctuation, inattention as the core, recent illness or drug change.", keyDifferentiator: "Treated as its own emergency first (the elderly-delirium course); the MCI baseline re-assessed only after the episode clears." },
    { condition: "Hypothyroid / B12 states", distinguishingFeatures: "The labs; the pace of onset; reverses with replacement.", keyDifferentiator: "The cheapest cures in the differential — never the label before the bloods." },
    { condition: "Early dementia (the actual boundary)", distinguishingFeatures: "Function no longer independently maintained — the gate crossed; often only the follow-up map decides.", keyDifferentiator: "Accounts mismanaged, medicines missed, stove incidents, route-lost driving: the functional clause, not the score." },
    { condition: "Subjective cognitive decline without objective change", distinguishingFeatures: "Concerns with normal testing; counsel, monitor, treat risk factors; lower conversion risk.", keyDifferentiator: "The worry is real, the deficit is not (yet) — the label that must not be handed out as reassurance-only." },
  ],
  management: [
    { category: "pharmacotherapy", name: "The hunt first: the reversible layer treated", description: "Depression treated; apnoea tested and CPAP'd; thyroid and B12 replaced; the anticholinergic-benzodiazepine-gabapentinoid fog DEPRESCRIBED — gradually, on a written schedule (in elders this single act often buys back a cognitive year); hearing tested and aided; pain and isolation addressed.", whenToUse: "Before any 'memory medicine' conversation, at the first consultation — the layer that fully reverses is the layer treated first.", indianContext: "The commonest iatrogenic contributors: the decade-long benzodiazepine 'sleep' tablet, the OTC anticholinergic cocktail (cold remedies, bladder tonics), the pain-clinic gabapentinoid, and the 'brain tonics' themselves — the MCI consult is the deprescribing event, explained as memory-medicine: removing the fog is adding memory." },
    { category: "lifestyle", name: "The exercise prescription", description: "The strongest single trial-level signal: aerobic exercise, target ~150 min a week of brisk walking — written as a prescription with specifics, never as advice.", whenToUse: "From the first consultation, for every MCI patient without a contraindication.", indianContext: "The morning-walk group, the temple-stairs protocol, the garden club — the adaptations that deliver exercise, engagement and mood in one stroke." },
    { category: "pharmacotherapy", name: "Vascular control: the most modifiable rail", description: "BP targeted to the 130s systolic where tolerated; HbA1c individualised; lipids managed; smoking stopped; stroke prevention with the AF pulse check at every visit.", whenToUse: "From diagnosis, reviewed at every follow-up — the rail the Indian picture puts first because it is the treatable one.", indianContext: "The existing government hypertension clinic and the DMHP/PHC follow-up carry this tier at no cost — the MCI prescription rides infrastructure that already exists." },
    { category: "lifestyle", name: "Hearing aids, engagement and the plate", description: "Hearing aids where loss exists (the Lancet-commission's largest modifiable factor); cognitive and social engagement as structured activity — puzzles, discussion clubs, temple-committee roles, the grandchildren's tuition; the honest evidence is for ENGAGEMENT, not commercial 'brain games' as magic; the Mediterranean/DASH-style diet frame.", whenToUse: "From diagnosis — the reserve's current yield raised while the withdrawals are slowed.", indianContext: "The traditional dal-vegetable-oil-balanced plate over the modern fried-white-flour shift; the hearing test free at district rehabilitation centres, aids ₹2,000–25,000 by tier with some state schemes subsidising (approx 2026)." },
    { category: "psychotherapy", name: "Sleep and mood: the behavioural tier", description: "Insomnia managed the structured way — the behavioural package, never the sedative tier; depression treated properly; the sleep protocol and the mood tier running underneath the cognitive plan.", whenToUse: "Whenever the fog audit finds the mood or sleep layer — which is often.", indianContext: "The family's instinct is a tablet for sleep; the counter-instinct is the sleep-protocol referral — and the deprescribing conversation that removes the tablet that fogs." },
    { category: "pharmacotherapy", name: "The honest refusals: what NOT to prescribe", description: "No cholinesterase inhibitor as standard MCI treatment — the trials do not support routine use; the tier is reserved for diagnosed dementia (the classic exam point, and the answer to the family demanding 'memory tablets'). No Ginkgo or vitamin stacks on hope; no statin-for-memory stories beyond the vascular indication; HRT is not a memory-preserving prescription (the WHI memory lesson).", whenToUse: "Every time the family asks for the tablet that does not exist — the refusal delivered with the risk package in the same breath.", indianContext: "No approved MCI drug exists — a money-saved truth to tell families before the 'memory power' clinics and the unlabelled-powder trade take the same money." },
    { category: "lifestyle", name: "The follow-up architecture: the map is the diagnosis", description: "Re-test at 6–12 months with the same instruments for comparability; the family's three-signs notebook reviewed; the conversion watch-list taught explicitly (accounts mismanaged, medicines missed, stove incidents, route-lost driving — the moment the gate is crossed); driving counsel structured (daylight, familiar routes, no highway); advance planning seeded early while capacity stands — finance POAs, wills, care wishes.", whenToUse: "The DATED follow-up appointment written at the first visit — the counter to the follow-up fragility that would otherwise lose the map.", indianContext: "The local PHC or family physician as the between-checks anchor; the tele-review including the co-resident informant by phone; Tele-MANAS and the family-physician checkpoints holding the thread between visits." },
  ],
  safety: {
    redFlags: [
      "Function slipping — the MCI gate crossed: accounts mismanaged, medicines missed, stove incidents, route-lost driving — the conversion declared and the dementia tier entered; re-counsel and re-plan the same week",
      "Traffic-confusion events on the two-wheeler — scrapes without memory of them, route-mistakes in known places: the driving conversation re-opened the same week, not the next visit",
      "Fluctuating attention after a recent illness or drug change — delirium's low gear masquerading as 'the MCI worsening'; treat as its own emergency",
      "Fast-declining, atypical or early-onset presentations — the MRI tier moves from optional to wise: structural mimics, the NPH triad, strategic infarcts",
      "The family that stops the decade-long benzodiazepine abruptly in alarm — withdrawal seizures; the taper is always scheduled, gradual and supervised",
    ],
    urgentGuidance:
      "The escalation architecture: (1) the conversion watch-list given in writing at the first visit — the moment function slips, the same-week re-counsel and the dementia-tier plan; (2) driving events re-counselled immediately (daylight-only, familiar routes, the pillion-seat rule for the highway); (3) fluctuation after illness or drug change treated as delirium first, MCI second; (4) fast or atypical decline sent for imaging; (5) every deprescribing act scheduled and supervised — never abrupt; (6) the dated follow-up appointment given at the first visit — the map that is the diagnosis depends on the family returning before 'when worse'.",
  },
  drugLinks: [],
  contentGaps: [
    "The cholinesterase-inhibitor tier (donepezil and cousins) has no KYP drug lessons — and the honest position is firmer still: the MCI trials do not support routine use; taught here as the exam-classic refusal, never a route.",
    "Memantine shares the tier and the verdict — no KYP lesson, no MCI indication; documented so no route implies otherwise.",
    "The comorbid-depression SSRI rider (sertraline in Case 1) has a KYP lesson but is deliberately not linked: no drug treats MCI itself, and a drug link on this page would read as a memory indication — the SSRI treats the depression layer, and its story stays in the case.",
    "The Ginkgo/vitamin-stack/'brain tonic' market has neither evidence nor KYP lessons — the refusal and the unlabelled-powder warning are taught in the management section instead.",
  ],
  patientGuide: {
    whatIsIt:
      "MCI is the stage between normal ageing and dementia: memory or another mental function has slipped clearly beyond what age alone explains, but daily life still runs independently — meals cooked, accounts managed, medicines taken, perhaps slower and with more lists. It is not early dementia: the difference is exactly the independence. The label matters because it is a crossroads, not a verdict: roughly one in ten people with the memory-type MCI develops dementia each year (against about one to two in a hundred of others the same age), while a meaningful group — one to two in ten — actually improves, usually because part of the picture was depression, poor sleep from snoring and apnoea, certain tablets, or untreated hearing loss. Which road you are on is shown by follow-up over time, not by the first visit.",
    whatCausesIt:
      "Four layers, usually mixed: a degenerative layer (the earliest footprints of Alzheimer's or other dementias); a vascular layer (small-vessel disease from blood pressure, sugar and strokes — the layer treatment moves most); a reversible layer (depression, an underactive thyroid, B12 lack, sleep apnoea, tablets that fog memory — the 'sleep tablet', bladder and cold remedies — and hearing loss); and the reserve you built across life — education, work, activity, languages — which decides how much slip shows for a given amount of wear. Two people with the same wear can sit on opposite sides of this line, because their reserves differ.",
    symptoms:
      "The complaints people actually voice: names of people and films walking away, hunting for words mid-sentence, keys and glasses misplaced beyond the old pattern, the same question repeated within the hour, appointments missed despite reminders, fumbling in new places, slips in the shop arithmetic. What stays standing — the MCI gate: cooking, accounts, medicines, local driving, shopping, with more lists and reminders. Warning signs that the stage may be changing: accounts mismanaged, medicines missed, stove incidents, getting lost on known routes.",
    treatment:
      "There is no tablet for MCI itself — the memory medicines used in dementia did not prove out at this earlier stage, and money spent on 'memory powders' is hope in a bottle. The prescription is a programme: find and treat the reversible layer (mood, sleep, thyroid, B12, hearing, and fogging tablets removed slowly on a plan); walk briskly about 150 minutes a week; keep blood pressure around the 130s; wear the hearing aids; keep roles and engagement — the family's job is scaffolding, not take-over; and re-test every 6–12 months with the same tests, because the road shows itself on the map, not at the first visit.",
    selfHelp: [
      "The three-signs notebook: the co-resident family member writes the specific slips, dated — it turns the next visit's comparison from memory into measurement",
      "The dated follow-up: the appointment written at the first visit, with the local PHC or family doctor as the between-checks anchor",
      "The walk group: 30 minutes, 5 mornings — the exercise, the engagement and the mood prescription in one stroke",
      "The hearing aids worn, not owned: batteries checked, wearing hours tracked, a family member trained",
      "The scaffolding rule: he keeps the accounts with a weekly joint review, keeps the kitchen with company — unused functions fade faster",
      "The driving structure: daylight, familiar routes, no highway — and the notebook watches for confusion at signals or scrapes without memory of them",
      "The early paperwork: wills, nominations and care wishes structured now, while judgement is clear — the stage where it is least contested",
    ],
    whenToSeekHelp: [
      "Function slipping — accounts mismanaged, medicines missed, a stove incident, getting lost on a known route: contact the treating team the same week (the stage may have changed)",
      "Confusion that fluctuates, especially after an illness or any new medicine: same-day assessment — delirium, not 'the MCI worsening'",
      "Rapid decline over weeks, or new walking and bladder changes together: imaging review needed",
      "Any traffic-confusion event or an unremembered scrape: the driving conversation that week",
      "The 'sleep tablet' running out, and the family tempted to stop or double it on their own: the taper is a planned, supervised act",
    ],
    indianResources: [
      "MoCA-equivalent brief testing free at medical college OPDs; TSH/B12/HbA1c ≈ ₹500–1,000 total at district labs (approx 2026)",
      "Hearing tests free at district rehabilitation centres; hearing aids ₹2,000–25,000 by tier, some state schemes subsidising",
      "The government hypertension clinic and the DMHP/PHC tier for the blood-pressure and diabetes rails — free",
      "Tele-MANAS 14416 (24×7, free) — the between-visit anchor for the family's distress and the caregiver's own exhaustion",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific MCI pathway exists; practice follows the international convergence — the Mayo/Petersen criteria, the Winblad harmonisation statement, DSM-5's mild neurocognitive disorder — with the DMHP psychiatric tier and the district infrastructure as the delivery spine, and the 10/66 Indian-site evidence supplying the vascular-and-deprivation framing Indian practice needs.",
    systemContext: "Presentation is delayed through the 'senior moments' family norm ('he is 70, this is natural'); the co-resident informant — usually a child — is the record-keeper and the diagnosis's anchor; the NRI children often call the clinic after festival visits ('we noticed changes'). The consult's first act is calibration: the MCI label WITH the honest numbers (conversion, stability, reversion), neither the dismissal that misses the window nor the catastrophising that feeds the quack 'memory power' clinics and the unlabelled-powder trade.",
    programmeContext: "MoCA-equivalent testing free at medical colleges; the district lab (TSH/B12/HbA1c ≈ ₹500–1,000) and the district rehabilitation centre (hearing) as the work-up channels; MRI ≈ ₹3,000–6,000 where indicated; the government hypertension clinic carrying the vascular rail; Tele-MANAS 14416 and the family physician as the between-checks anchors (all approx 2026).",
    costConsiderations: "The MCI consultation's real cost is tests-and-follow-up, not drugs — there are no approved MCI drugs, a money-saved truth to tell families. The highest-yield Indian interventions cost nothing: the fog-deprescribing audit, the walk-group prescription, BP control at the existing government hypertension clinic, and the three-signs notebook. The fragile follow-up (families returning only 'when worse') is countered by the DATED follow-up appointment at the first visit plus the tele-checkpoints between.",
    culturalConsiderations: "Two Indian errors flank the diagnosis: the normalising family ('he is 70, this is natural') and the catastrophising family ('memory loss = Alzheimer's = the end') — the first misses the window, the second feeds the tonic market. The joint family is protective machinery when used right: the grandchildren's homework, the kitchen's supervision role, the temple duties — prescribe the RETENTION of roles; the worst Indian pattern is the loving take-over ('we will do it, you rest') that converts reserve into decline. The two-wheeler is the elder's independence organ — the MCI stage usually sustains familiar-route riding with structure (daylight, familiar routes, the pillion seat for highways). Literacy- and language-adjusted testing is non-negotiable: the 10/66 cross-cultural battery was built for exactly this; the retired professor and the non-literate farmer need different instruments.",
    patientCounselling: [
      "The calibration script: 'The slips are real and measurable, but daily life is still running on its own — and this stage is the window where blood pressure, walking, hearing, sleep, mood and some tablets genuinely influence which way it goes.'",
      "The numbers script: 'Roughly one in ten with this memory pattern progresses each year — a real elevation, not a certainty; many stay stable for years, and one or two in ten improve, usually because part of the picture was depression, sleep, tablets or hearing.'",
      "The tablet script: 'There is no tablet for this stage — the dementia medicines did not prove out here, and the memory powders are hope in a bottle. The prescription is the programme: the walk, the pressure, the hearing, the mood, the follow-up.'",
      "The sleep-tablet script: 'That tablet is from the family of medicines that fog memory in elders; removing it slowly, on a plan, often returns a visible slice of sharpness — removing the fog is adding memory.'",
      "The roles script: 'Keep him in the accounts and the kitchen with company — scaffolding, not substitution; unused functions fade faster.'",
      "The property script: 'Settling affairs early, while judgement is clear, is good practice at exactly this stage — calmly now prevents contested later.'",
    ],
  },
  decisionPath: {
    title: "The elder whose memory is slipping",
    nodes: [
      {
        id: "start",
        question: "An elder with cognitive complaints — the person's, the family's, or the notebook's. First: the gates and the fog.",
        branches: [
          { label: "Concern + objective slip + function standing", next: "audit-gate" },
          { label: "Concern only, testing at norms", next: "scd-path" },
          { label: "Function no longer independent", next: "conversion-path" },
          { label: "Fluctuating, after illness or drug change", next: "delirium-path" },
        ],
      },
      {
        id: "scd-path",
        question: "Subjective cognitive decline without objective change.",
        recommendation: "Counsel honestly, treat the risk factors, monitor — lower conversion risk; the notebook begun anyway. The mistake to avoid is the reassurance-only discharge: the worry is real even where the deficit is not.",
      },
      {
        id: "conversion-path",
        question: "The functional gate already crossed.",
        recommendation: "This is dementia's tier, not MCI's — re-counsel, re-plan, the Managing Dementia floors; the advance planning that should have been seeded at MCI becomes urgent now if it was not.",
      },
      {
        id: "delirium-path",
        question: "Fluctuation with recent illness or drug change.",
        recommendation: "Delirium first, MCI second — its own emergency (the elderly-delirium course); the cognitive baseline re-assessed only after the episode clears.",
      },
      {
        id: "audit-gate",
        question: "The three gates passed. Now the full audit — before the label sticks.",
        branches: [
          { label: "The fog audit positive (tablets, mood, sleep, thyroid, B12, hearing)", next: "fog-path" },
          { label: "The audit substantially clear", next: "subtype-gate" },
        ],
      },
      {
        id: "fog-path",
        question: "The reversible layer found.",
        recommendation: "Treat it FIRST: the benzodiazepine tapered on a written schedule (8 weeks in the archetype), the CPAP begun, the thyroid and B12 replaced, the hearing aided, the depression treated — then re-test. The improvement that follows reclassifies the case before any 'memory medicine' is discussed.",
      },
      {
        id: "subtype-gate",
        question: "Characterise the domain and the tempo.",
        branches: [
          { label: "Amnestic single-domain", next: "amnestic-path" },
          { label: "Multi-domain or non-amnestic", next: "vascular-path" },
          { label: "Fast-declining, atypical or early-onset", next: "imaging-path" },
        ],
      },
      {
        id: "amnestic-path",
        question: "The Alzheimer-pathway prototype — the honest numbers attached.",
        branches: [
          { label: "The programme begins", next: "package-path" },
        ],
      },
      {
        id: "vascular-path",
        question: "Multi-domain, or the executive/language/visuospatial faces — the vascular, Lewy and frontotemporal shadows.",
        branches: [
          { label: "The programme begins", next: "package-path" },
        ],
      },
      {
        id: "imaging-path",
        question: "Atypical, early-onset or fast-declining.",
        recommendation: "MRI moves from optional to wise — atrophy pattern, vascular burden, structural mimics, the NPH screen; functional imaging where structure is unrevealing; the biomarker tier known in direction but never ordered reflexively (it rarely changes management today).",
      },
      {
        id: "package-path",
        question: "The risk package and the follow-up — the programme every confirmed MCI diagnosis ends with.",
        recommendation: "Exercise ~150 min a week, written as a prescription; BP in the 130s; hearing aids worn; engagement as scaffolding, not substitution; sleep and mood the behavioural way; the honest refusals (no cholinesterase inhibitor, no tonics); the DATED 6–12-month re-test with the same instruments, the three-signs notebook, and the conversion watch-list in writing to the family that manages the medicines and the accounts.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating MCI with donepezil 'early'",
      why: "The trials do not support routine cholinesterase inhibition at the MCI stage — the label is not a licence for the dementia prescription, and the family's demand for 'memory tablets' is not an indication.",
      correction: "Diagnose, audit and monitor: the fog audit, the risk package, the dated re-test — the refusal delivered with the programme in the same breath.",
    },
    {
      mistake: "Missing depression and medicating memory instead of mood",
      why: "The pseudodementia layer reproduces half the MCI picture — the retrieval-freeze with recognition intact — and untreated depression is itself a conversion-risk factor.",
      correction: "The mood screen at every MCI assessment (GDS or PHQ-9); treat, then re-test — the impairment that remains is the true residual.",
    },
    {
      mistake: "Missing sleep apnoea behind the 'ageing' fog",
      why: "The snoring elder's nightly hypoxia starves the hippocampus silently; the family normalises the snore and the clinic normalises the fatigue.",
      correction: "Screen where the phenotype fits — snoring, BMI, unrefreshing sleep, the nocturia-hypertension cluster — and treat with CPAP: a memory-protecting treatment, not a snore-cure.",
    },
    {
      mistake: "Missing the benzodiazepine the family 'forgot' to list",
      why: "The decade-long 'sleep tablet' is invisible on the medication list the family recites — among the commonest iatrogenic contributors in Indian geriatrics.",
      correction: "The deliberate tablet audit: ask by class (sleep tablets, nerve tablets, bladder tonics, cold remedies, pain-clinic medicines), count the anticholinergic burden, and taper on a written schedule.",
    },
    {
      mistake: "Using non-literacy-adjusted instruments in Indian elders",
      why: "The default literacy-dependent battery manufactures false impairment in the non-literate and misses real decline in the high-reserve — the wrong instrument errs in both directions.",
      correction: "Instruments validated for the person's literacy and language stratum — the 10/66 lesson; the retired professor and the farmer need different tests.",
    },
    {
      mistake: "Declaring conversion without the functional clause",
      why: "A worse score is not dementia — slips with preserved independence is still MCI; the gate is function, not the number.",
      correction: "Conversion is declared on function: accounts mismanaged, medicines missed, stove incidents, route-lost driving — the clause checked before the label changes.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The three MCI gates and the one functional clause separating MCI from dementia — the three-clause answer.",
        "The fog audit mnemonic M-M-S-T-B-H: Medications, Mood, Sleep (apnoea), Thyroid, B12, Hearing — the highest-yield first pass.",
        "The conversion and reversion numbers with their obligation: 10–15% a year (amnestic) against 1–2% background, 10–20% reverting — the reversible layer hunted because of the reversion figure.",
        "The subtype-pathway shadows: amnestic → Alzheimer's; executive/vascular → vascular dementia; visuospatial with attention-fluctuation → Lewy body; language-led → the FTD/logopenic shadows.",
        "The honest positions: no cholinesterase inhibitor in routine MCI; biomarkers reclassify but rarely change management today; APOE e4 is a risk modifier, not a test to order.",
      ],
      practical: [
        "Demonstrate the MCI assessment: the concern taken from patient and informant separately, the MoCA-tier screen administered with the education adjustment, the functional gate probed through activities (cooking, accounts, medicines, driving).",
        "Take the medication history by class, not by list — sleep tablets, bladder tonics, cold remedies, pain-clinic medicines — and count the anticholinergic burden aloud.",
      ],
      longAnswer: [
        "A 68-year-old with two years of memory complaints and preserved daily function: assessment and management (the evergreen MCI essay — the gates, the audit, the numbers, the risk package, the follow-up).",
        "Differentiate MCI from normal ageing and from dementia, with the reversible causes of cognitive impairment (the evergreen list the fog audit operationalises).",
      ],
    },
    neetPg: {
      highYield: [
        "THE GATES: concern (subjective) + objective decline (1–2 SD below age-education norms) + function preserved — the three-clause answer; DSM-5's 'mild neurocognitive disorder' is the classification cousin.",
        "THE NUMBERS: conversion ~10–15% per year in amnestic MCI versus 1–2% background; reversion 10–20%+ (higher in population-based than clinic samples); prevalence 15–20% of 65+.",
        "THE MNEMONIC: M-M-S-T-B-H — Medications, Mood, Sleep, Thyroid, B12, Hearing — the reversible layer.",
        "THE SUBTYPE SHADOWS: amnestic → AD; executive/vascular → VaD; visuospatial with attention-fluctuation → LBD; language-led → FTD/logopenic.",
        "THE EXAM CLASSIC: cholinesterase inhibitors NOT indicated for routine MCI — the negative-trial position; diagnose and monitor instead.",
        "THE HIERARCHY TOP: exercise and vascular control — the best-evidenced interventions; hearing loss the largest modifiable population-attributable factor (the Lancet-commission framing).",
        "THE TESTING TIER: MoCA over MMSE (the ceiling problem); the AD8 informant report often outperforms the clinic test; literacy-adjusted instruments in India (the 10/66 lesson).",
        "THE TRAJECTORY: the map over 6–12-monthly re-testing is the diagnosis — the film, not the photograph.",
        "THE BIOMARKER LINE: CSF/amyloid-PET reclassify but rarely change management today; APOE e4 a modifier, never a clinical test.",
      ],
      pyqConcepts: [
        "The functional clause separating MCI from dementia — the recurring one-mark answer.",
        "The reversible causes of cognitive impairment — the evergreen list the fog audit operationalises.",
        "The modifiable risk factors for dementia — the Lancet-commission hierarchy, hearing the headline.",
        "The donepezil-in-MCI trial position — the negative-evidence discussion question.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 68-year-old retired professor in Pune with two years of word-hunting and repeat-questions, still running the household accounts flawlessly on three diaries: MoCA 24/30 education-matched, amnestic pattern with preserved recognition cueing, AD8 positive — and the fog audit finding alprazolam 0.5 mg nightly for four years, witnessed-pause snoring, and a PHQ-9 of 12: the gates passed, the fog layer treated first (the 8-week taper, the CPAP, the sertraline with behavioural activation, the morning-walk group), BP 138/84 brought to 132/78 — and at six months MoCA 27 with rare repeat-questions, at eighteen months stable on one diary: the fog audit earning a point and a half of MoCA before any 'memory medicine' conversation, the compensations read as clinical data, and the stability verdict deferred to the map and then earned.",
        "A 72-year-old semi-literate farmer from rural Maharashtra whose ledger slipped twice and whose borewell story repeated at one sitting: literacy-adjusted testing showing multi-domain (memory + executive) impairment, AD8 strongly positive, the audit finding bilateral unaided hearing loss, BP 150/92 untreated and HbA1c 7.8, the district MRI showing moderate white-matter burden with mild hippocampal thinning — the 10/66 archetype: the vascular levers first (the government hypertension clinic, the tightened diabetes), the bilateral hearing aids with the son trained on batteries and wearing hours, the accounts retained under weekly joint review (scaffolding, not substitution) — and at twelve months no route-confusion, the ledger accurate, one stable year in the son's notebook.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Function is the gate: preserved independence defines MCI; lost independence defines dementia.",
        "Amnestic MCI converts at 10–15% per year (background 1–2%).",
        "No cholinesterase inhibitors for routine MCI.",
        "Hearing loss: the largest modifiable population-level dementia risk factor.",
        "The MoCA over the MMSE — the ceiling problem at the MCI tier.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The compensations are clinical data: the person who quietly shifted to writing everything in three diaries has told you the trajectory's direction before any score has.",
        "The informant is the instrument: the co-resident's dated three-signs notebook outperforms recall at the next visit — institutionalise the channel, including the distance children by phone.",
        "The deprescribing consultation is the memory medicine: in elders, removing the decade-long benzodiazepine often buys back a cognitive year — scheduled, gradual, and explained as 'removing the fog is adding memory'.",
        "Calibrate before you counsel: the Indian family arrives at one of two errors (dismissal or catastrophe); the label delivered WITH the numbers — 10–15% conversion, stability, 10–20% reversion — is the treatment's first act.",
        "The follow-up is the diagnosis: the dated appointment given at the first visit, the same instruments at 6–12 months, and the conversion watch-list in writing to the family that manages the medicines and the accounts.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The professor whose lists grew",
      presentation: "Three diaries, a flawless WhatsApp admin, and a four-year 'sleep tablet' — the fog audit earning a point and a half of MoCA before any memory-medicine conversation.",
      initialPresentation: "A 68-year-old retired professor in Pune attended with his wife's notebook: two years of growing word-hunting, questions repeated within the hour, and a quiet shift to writing everything in three diaries — while still managing the household accounts, his own medicines and the family WhatsApp admin flawlessly.",
      history: "Alprazolam 0.5 mg nightly for four years ('for sleep', never reviewed); heavy snoring with witnessed pauses reported by the wife; low mood and lost interest for a year; no prior psychiatric history; hypertension on irregular treatment.",
      examination: "MoCA 24/30 (education-matched); domain testing: an amnestic pattern with preserved recognition cueing; AD8 informant report positive; PHQ-9 at 12; BP 138/84; TSH and B12 normal; the functional gate intact on activities (cooking, accounts, medicines, local driving).",
      diagnosis: "Amnestic MCI — with a treatable fog load riding on it (medication, sleep apnoea, depression).",
      management: "The alprazolam tapered over 8 weeks on a written schedule; home sleep-apnoea testing followed by CPAP; depression treated with sertraline plus behavioural activation — the morning-walk group joined, the exercise prescription and the engagement prescription in one; BP brought to 132/78; the three-signs notebook formalised with the wife.",
      outcome: "At 6 months: re-testing improved — MoCA 27, repeat-questions rare. At 18 months: stable, the diaries down to one, the walk-group daily at 6 a.m.",
      teachingPoints: [
        "The fog audit earned a point-and-a-half of MoCA before any 'memory medicine' conversation — the reversible layer is treated first, always.",
        "The compensations are clinical data: the three diaries were the trajectory's confession before any score was taken.",
        "Stability on the map: the diagnosis's verdict, deferred at the first visit and then earned at 6 and 18 months.",
        "The walk-group delivered three prescriptions at once — exercise, engagement and mood.",
      ],
    },
    {
      title: "The farmer's ledger slipped",
      presentation: "A lifetime of precise mental arithmetic gone wrong twice in one season — and the borewell story told repeatedly at a single sitting.",
      initialPresentation: "A 72-year-old semi-literate farmer from rural Maharashtra was brought by his son after the season's accounts went wrong twice and he told the same story about the new borewell repeatedly at one sitting — still farming, still cooking when alone, but slower with planning, and once lost returning from the market town by a new route.",
      history: "No sedatives and no 'tonics'; bilateral hearing loss unaided for years; hypertension never treated; type 2 diabetes known but uncontrolled; the son the co-resident informant and record-keeper.",
      examination: "Testing on literacy-adjusted instruments: multi-domain impairment (memory + executive); informant AD8 strongly positive; BP 150/92; HbA1c 7.8; the functional gate intact (farming, cooking, slower planning); MRI at the district hospital: moderate white-matter burden plus mild hippocampal thinning.",
      diagnosis: "Multi-domain MCI — a mixed vascular-degenerative picture, the Indian 10/66 archetype.",
      management: "BP controlled at the government hypertension clinic with DMHT/PHC follow-up; diabetes tightened with the family's concurrence; hearing tested at the district rehabilitation centre and bilateral aids fitted — the son trained on the batteries and wearing hours; the engagement brief assigned in writing: the farmer retained the accounts with weekly joint review, scaffolding not substitution; re-test scheduled at 6 months with the same literacy-matched tools.",
      outcome: "At 12 months: route-confusion absent, the accounts jointly kept and accurate, repetition rarer — the son's notebook documenting one stable year.",
      teachingPoints: [
        "Literacy-adjusted testing is non-negotiable in India — the wrong instrument manufactures or misses MCI.",
        "The mixed Indian picture puts the VASCULAR levers first, because they are the treatable rails.",
        "Hearing aids in the elderly are cognitive medicine.",
        "Scaffolding-roles beats loving-substitution — the accounts kept, jointly reviewed, in writing.",
      ],
    },
  ],
  clinicalPearls: [
    "Function is the gate: slips with preserved independence is MCI; slips taking over function is dementia — the one clause the whole subject turns on.",
    "10–15% a year (amnestic MCI to dementia) against a 1–2% background — the risk-state arithmetic every family should hear.",
    "10–20% reverts — the number that obligates the fog audit before the label sticks.",
    "The fog audit M-M-S-T-B-H: Medications, Mood, Sleep, Thyroid, B12, Hearing — the fully-reversible layer, the highest-yield first pass.",
    "A single cognitive score is a photograph; MCI is a film — the diagnosis declares itself on the 6–12-month re-testing map.",
    "No cholinesterase inhibitor as routine MCI treatment — the trials are negative; the exam classic and the family conversation.",
    "Exercise is the best-evidenced single intervention: ~150 minutes a week, written as a prescription with specifics.",
    "Hearing loss is the largest modifiable population-attributable dementia risk factor — the hearing aid is cognitive medicine.",
    "The compensations are clinical data: the quiet shift to lists and diaries is the trajectory confessing itself.",
    "Removing the fog is adding memory: in elders, deprescribing the decade-long benzodiazepine often buys back a cognitive year.",
    "Scaffolding, not substitution: the family's loving take-over converts reserve into decline — keep the roles, add the support.",
    "Two Indian errors flank the diagnosis: the 'senior moments' dismissal and the catastrophe that feeds the memory-tonic market — the label delivered with the numbers corrects both.",
  ],
  highYieldSummary: [
    "Definition: MCI = a concern about cognitive change (person or informant) + objective impairment (1–2 SD below age-education norms, or a clear fall from baseline) + independence in daily function preserved (greater effort and strategies allowed) — not delirium, not better explained by another disorder; DSM-5's 'mild neurocognitive disorder' is the classification cousin.",
    "Epidemiology: 15–20% of 65+; conversion ~10–15% per year in amnestic MCI versus 1–2% background; reversion 10–20%+ (higher in population-based than clinic samples); the individual's road declares itself over 2–3 years of follow-up — a risk state, not a disease label.",
    "Mechanism: the reserve bank (deposits of education, activity, bilingualism; withdrawals of amyloid, vessels, atrophy — identical loads on opposite sides of the line); the fog audit (operating conditions, not structure: tablets, mood, apnoea, thyroid, B12, hearing); the trajectory (the film, not the photograph).",
    "Clinical: the presenting complaints (names walking away, mid-sentence word-hunting, misplacements, within-the-hour repetition, missed appointments, new-place fumbles, ledger slips) against the preserved layer; the subtype faces — amnestic single-domain (the Alzheimer prototype), amnestic multi-domain (higher risk), language-led (the logopenic shadow), attention/executive-led (the vascular/LBD/FTD shadow), visuospatial-led (the Lewy shadow).",
    "Diagnosis: the MoCA-tier screen (over the MMSE ceiling), the informant's AD8-style report, the fog audit (TSH, B12/folate, CBC, glucose/HbA1c, renal/liver, lipids, the ACB-counted medication review, the apnoea screen, the GDS/PHQ-9), the vascular profile — MRI for the atypical, early-onset or fast-declining; biomarkers known in direction, ordered by no one reflexively.",
    "Management: the hunt first (the reversible layer treated — taper, CPAP, replace, aid, treat mood), then the risk package (exercise ~150 min a week, BP in the 130s, HbA1c individualised, lipids, smoking, the AF pulse check, hearing aids, engagement, the Mediterranean-style plate, sleep and mood the behavioural way), the honest refusals (no cholinesterase inhibitor, no Ginkgo, no HRT-for-memory), and the follow-up architecture (6–12-month re-testing, the notebook, the conversion watch-list, advance planning seeded early).",
    "The Indian tier: the 10/66 vascular-and-deprivation rails; literacy-adjusted testing without exception; the calibration script against the two family errors; the deprescribing consultation as the memory medicine; the joint family's scaffolding retained; the two-wheeler structured (daylight, familiar routes, the pillion seat); the property question answered honestly (early structuring, least contested now); and the programme's cost in tests-and-follow-up, not drugs — of which there are none.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "mci-quiz-1",
      question: "The clause that separates MCI from dementia:",
      options: ["Age of onset", "Independence in daily activities is preserved (with greater effort or strategies)", "The presence of memory complaints", "MRI findings"],
      correctIndex: 1,
      explanation: "Function is the gate — slips with preserved independence is MCI; slips taking over function is dementia.",
      afterSectionId: "symptoms",
    },
    {
      id: "mci-quiz-2",
      question: "The approximate annual conversion of amnestic MCI to dementia:",
      options: ["1–2%", "10–15%", "50%", "0%"],
      correctIndex: 1,
      explanation: "Against a 1–2% background in the general elderly — the risk-state arithmetic, with 10–20% reverting alongside.",
      afterSectionId: "diagnosis",
    },
    {
      id: "mci-quiz-3",
      question: "Cholinesterase inhibitors in MCI:",
      options: ["Are first-line", "Are not supported for routine use — trials negative; reserved for diagnosed dementia", "Cure the impairment", "Are cheaper than exercise"],
      correctIndex: 1,
      explanation: "The exam classic: diagnose, audit and monitor — the risk package is the prescription.",
      afterSectionId: "management",
    },
    {
      id: "mci-quiz-4",
      question: "The largest modifiable population-level risk factor for late-life cognitive decline:",
      options: ["Coffee", "Hearing loss", "Moderate alcohol", "Vitamin stacks"],
      correctIndex: 1,
      explanation: "The Lancet-commission framing's headline — hearing correction is cognitive medicine.",
      afterSectionId: "differential",
    },
    {
      id: "mci-quiz-5",
      question: "In a semi-literate Indian farmer with cognitive complaints, testing should use:",
      options: ["The default English literacy-dependent battery", "Literacy- and education-adjusted instruments validated for the population", "No testing possible", "Family report only"],
      correctIndex: 1,
      explanation: "The 10/66 lesson — wrong instruments manufacture false impairment or miss real decline.",
      afterSectionId: "indian-practice",
    },
    {
      id: "mci-quiz-6",
      question: "The MCI diagnosis is ultimately declared by:",
      options: ["A single low MoCA score", "Amyloid PET positivity", "The trajectory map over serial follow-ups (6–12-monthly re-testing)", "APOE genotyping"],
      correctIndex: 2,
      explanation: "The film, not the photograph — follow-up is part of the diagnosis, not a formality after it.",
      afterSectionId: "mechanism",
    },
  ],
  activeRecallQuestions: [
    { question: "State the three MCI gates and the one functional clause that separates MCI from dementia.", answer: "THE GATES: (1) a concern about a change in cognition, raised by the person or an informant — the wife's notebook, the son's festival-visit phone call; (2) objective impairment on testing — 1–2 SD below age-education norms, or a clear decline from the person's own baseline; (3) NOT delirium, and not better explained by another mental disorder (depression above all), a medical cause or a substance. THE FUNCTIONAL CLAUSE: independence in daily activities is PRESERVED — cooking, accounts, medicines, shopping, local driving — with at most greater effort, slower pace and more compensatory strategies. Slips plus preserved function is MCI; slips taking over function is dementia. The clause is the boundary the entire subject turns on, and it is the answer to the recurring one-mark question.", topic: "Diagnosis" },
    { question: "Quote the conversion and reversion numbers — and say what the reversion number obligates you to hunt.", answer: "CONVERSION: the amnestic (memory-led) form progresses to Alzheimer-type dementia at roughly 10–15% per year, against a 1–2% yearly rate in the general elderly — a real elevation, never a certainty; multi-domain and biomarker-positive groups run higher. REVERSION: 10–20% of MCI improves at follow-up — consistently higher in population-based than clinic-based samples, because the clinic's referral filter selects the more truly degenerative. THE OBLIGATION: the reversion figure is not a comfort statistic — it is a work order. A substantial share of 'MCI' is not structure failing but operating conditions: depression's retrieval-freeze, sleep apnoea's nightly hippocampal starvation, hypothyroid metabolism, B12 lack, the anticholinergic-benzodiazepine fog, hearing-loss isolation. Every MCI diagnosis therefore earns the full fog audit — medications, mood, sleep, thyroid, B12, hearing (M-M-S-T-B-H) — before the label is allowed to stick, because this is the layer that fully reverses.", topic: "Epidemiology" },
    { question: "Write the fog-audit checklist as you would run it in a fifteen-minute first consultation.", answer: "MEDICATIONS: the history taken by class, not by list — sleep tablets, nerve tablets, bladder tonics, cold remedies, the pain-clinic gabapentinoid — with the anticholinergic burden counted (the ACB concept); the decade-long benzodiazepine the family 'forgot' to list is the commonest Indian catch. MOOD: the GDS or PHQ-9, with the pseudodementia question attached — is retrieval frozen while recognition is intact? (don't-know answers, not don't-care). SLEEP: the apnoea screen where the phenotype fits — snoring, witnessed pauses, BMI, unrefreshing sleep, morning headaches, the nocturia-hypertension cluster. THYROID and B12 (with folate): the bloods — with CBC, glucose/HbA1c, renal and liver panels and lipids riding the same venepuncture. HEARING: the whispered-voice question to the informant at minimum, formal audiometry at the district rehabilitation centre where suspicion holds. The bloods cost ≈ ₹500–1,000 at district labs (approx 2026); the tablet review costs nothing; and the audit is the highest-yield first pass because it is the layer that fully reverses.", topic: "Clinical practice" },
    { question: "Why is the follow-up map part of the diagnosis rather than good practice alone?", answer: "Because a single cognitive score is a photograph and MCI is a film. The amnestic single-domain picture that is stable at 6, 12 and 18 months is one story (many such patients hold for years); the one drifting across visits — word-finding thinning, route-fumbles, repetition shortening its intervals — is another. The label 'MCI' is a risk state whose individual road (stable, reverting, converting) declares itself over 2–3 years of serial observation; the first visit's score cannot distinguish the roads, but the slope can. Operationally: the MCI consultation ENDS with a dated follow-up appointment, not a verdict; the re-testing uses the SAME instruments for comparability; the family's three-signs notebook (specific slips, dated) turns the next visit's comparison from memory into measurement; and the conversion watch-list (accounts, medicines, stove, routes) is taught explicitly so the functional gate's crossing is caught between visits. In India this is doubly true: the follow-up is fragile (distance, cost, the 'what will medicines do anyway' fatalism), so the dated appointment plus the PHC/tele anchors between are the diagnosis's engineering, not its decoration.", topic: "Diagnosis" },
    { question: "Which MCI subtypes shadow which dementia pathways?", answer: "AMNESTIC SINGLE-DOMAIN — pure memory slippage: the Alzheimer-pathway prototype. AMNESTIC MULTI-DOMAIN — memory plus another domain: the higher-conversion-risk tier. NON-AMNESTIC, LANGUAGE-LED — word-retrieval dominant: the logopenic shadow. ATTENTION/EXECUTIVE-LED — planning and task-switching failure: the vascular and Lewy-body/frontotemporal shadows, the small-vessel engine's face. VISUOSPATIAL-LED — navigation and face-finding trouble: the Lewy body shadow (with its fluctuating-attention signature). The conversion logic is the exam's and the clinic's shared instrument: the domain tells you which dementia to watch for, the tempo tells you how fast to watch, and the multi-domain and biomarker-positive pictures run the higher rates. The Indian corollary: the executive/vascular face is disproportionately common here — the 10/66 rails — which is good news disguised as bad, because the vascular levers are the treatable ones.", topic: "Diagnosis" },
    { question: "What is the honest position on cholinesterase inhibitors and biomarkers in MCI?", answer: "CHOLINESTERASE INHIBITORS: not supported for routine use — the trials (the donepezil/vitamin-E MCI trial lineage) did not demonstrate the benefit that would justify routine prescription; the tier is reserved for diagnosed dementia. This is the classic exam point AND the family conversation: when the family demands 'memory tablets', the refusal is delivered with the risk package in the same breath — the honest alternative being the fog audit, the exercise prescription, the vascular control, the hearing aids and the follow-up. No Ginkgo or vitamin stacks on hope; no statin-for-memory stories beyond the vascular indication; HRT is not a memory-preserving prescription (the WHI memory lesson). BIOMARKERS: CSF amyloid/tau and amyloid-PET reclassify research-grade MCI as 'Alzheimer biologicals present' with real precision — but they remain a research-and-expensive tier in India and rarely change MANAGEMENT today, because the risk package is the same whatever the amyloid says; plasma p-tau assays are arriving and worth knowing the direction of; APOE e4 is a risk modifier and a research stratifier, never a test to order clinically. The discipline: know the tier's direction, order nothing reflexively.", topic: "Management" },
    { question: "List the risk-package interventions by evidence strength, with the Indian delivery channel for each.", answer: "1. AEROBIC EXERCISE — the strongest single trial-level signal, ~150 min a week of brisk walking written as a prescription with specifics; the Indian channel: the morning-walk group, the temple-stairs protocol, the garden club. 2. VASCULAR CONTROL — BP to the 130s systolic where tolerated, HbA1c individualised, lipids managed, smoking stopped, the AF pulse check every visit; the channel: the existing government hypertension clinic with DMHP/PHC follow-up — free. 3. HEARING CORRECTION — the Lancet-commission's largest modifiable factor; the channel: the free district rehabilitation-centre test, aids ₹2,000–25,000 by tier with some state schemes subsidising (approx 2026). 4. THE REVERSIBLE LAYER'S TREATMENT — depression treated, apnoea CPAP'd, thyroid/B12 replaced, the fog deprescribed: the audit's own tier. 5. COGNITIVE AND SOCIAL ENGAGEMENT — structured activity, roles retained, the grandchildren's tuition, the temple committee; the honest evidence is for ENGAGEMENT, not commercial 'brain games' — and the joint family is the delivery channel that already exists (scaffolding, not substitution). 6. SLEEP AND MOOD the behavioural way — the insomnia protocol, not the sedative tier. 7. THE DIET FRAME — the Mediterranean/DASH pattern, Indian-adapted as the traditional dal-vegetable-oil-balanced plate against the modern fried-white-flour shift. The tier-zero interventions cost nothing: the deprescribing audit, the walk prescription, the BP clinic, the notebook.", topic: "Management" },
    { question: "Name the two Indian family errors and give your calibration script.", answer: "ERROR ONE — THE DISMISSAL: 'he is 70, this is natural' — the senior-moments norm that presents the MCI patient years late and misses the window entirely. ERROR TWO — THE CATASTROPHE: 'memory loss = Alzheimer's = the end' — the panic that feeds the quack 'memory power' clinics, the unlabelled powders and the tonic market. THE CALIBRATION SCRIPT (the consult's first act): 'The slips are real and measurable, but daily life is still running on its own — this is not dementia today. The honest numbers: roughly one in ten with this memory pattern progresses each year, which is a real elevation but not a certainty; many stay stable for years, and one or two in ten improve — usually because part of the picture was depression, sleep, tablets or hearing, which is exactly what we will now hunt. What we control — blood pressure, walking, hearing, sleep, mood, and certain tablets — genuinely influences which way this goes.' The label delivered WITH the numbers corrects both errors in one consultation; the catastrophe's leftover money is better spent on the hearing aids than on the powders.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "The doctor says it is MCI, not dementia. What is the difference?", answer: "In dementia, the slips have started taking over daily function — the accounts, the medicines, the cooking. In MCI the slips are real and measurable, but the person still runs their own life independently. The difference matters because the MCI stage is the window where the things we control — blood pressure, exercise, sleep, hearing, mood, and certain tablets — genuinely influence which way it goes." },
    { question: "Does this mean I will get Alzheimer's?", answer: "The honest numbers: among people with the memory-type MCI, roughly one in ten converts each year — a real elevation over others your age, but not a certainty; many stay stable for years, and a meaningful group improves, usually because part of the picture was depression, sleep, medicines or hearing. The plan is built precisely for those three roads, and the follow-up tells us which road you are on." },
    { question: "Are there tablets to stop the progression?", answer: "Not yet for MCI itself: the memory medicines used in dementia did not prove out at this earlier stage, and buying unlabelled 'memory powders' is money spent on hope. What measurably helps is less glamorous and more real — the blood-pressure-and-sugar control, daily brisk walking, hearing aids if needed, sleep fixed properly, mood treated, and certain fog-causing tablets removed. That package is the prescription." },
    { question: "Why did the doctor reduce the sleep tablet — and is the heavy snoring connected?", answer: "Both belong to the same hunt. That tablet is from the family of medicines that fog memory in elders — it can imitate half of what we are watching for; removing it slowly, on a proper written plan, often returns a visible slice of sharpness. And the snoring matters too: nightly oxygen dips from apnoea quietly strain the memory centres — if the screening fits, we test, and the air-pressure machine if needed is genuinely a memory-protecting treatment, not just a snore-cure." },
    { question: "Should we take over the accounts and cooking to reduce the burden?", answer: "The instinct is loving and the effect is backwards: unused functions fade faster. The right structure is scaffolding — he keeps the accounts with a weekly joint review, keeps the kitchen with company. The family's job is to back him up, not replace him." },
    { question: "Can she keep driving the scooter?", answer: "At this stage, usually yes, with structure: daylight, familiar routes, no highway. What we watch for — and you write in the notebook — is confusion at signals, route-mistakes in known places, and scrapes without any memory of them. At any of those, we re-counsel the same week." },
    { question: "What do we tell relatives and neighbours?", answer: "Whatever preserves his dignity and your support network; many families share 'memory is a bit weak with age, under doctor's care', which is true. The people who NEED the full picture are the ones managing the medicines, the accounts and the follow-up notebook — give them everything." },
    { question: "Should the property and the will be sorted now?", answer: "As a legal matter, this is a reasonable stage to structure affairs while judgement is clear — with the family doctor's documentation of current capacity, a lawyer's formalities, and no one's arm twisted. Decisions made calmly now prevent contested ones later." },
    { question: "How often must we come back? The city hospital is far.", answer: "Every 6–12 months for re-testing, with the local PHC or family doctor as the between-checks anchor, and the notebook reviewed by phone if needed. The distance problem is real — but the map over time is the diagnosis, so the follow-up is part of the treatment, not a formality." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) — the mild-neurocognitive-disorder construct, MCI's classification cousin" },
      { source: "Winblad B et al. — the international MCI harmonisation statement (the criteria's convergence frame)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.1.1 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Petersen RC et al. — the donepezil/vitamin-E MCI trial (the negative-evidence position for routine cholinesterase use)" },
      { source: "Lautenschlager NT et al. — the exercise RCT in MCI; Ngandu T et al. — the FINGER multidomain trial" },
      { source: "Lin FR et al. — hearing loss and cognitive decline, the ACHIEVE trial lineage (hearing correction as cognitive medicine)" },
    ],
    reviews: [
      { source: "Petersen RC et al. — the MCI construct's original and successive Mayo formulations (the criteria paraphrased)" },
      { source: "Mitchell AJ, Shiri-Feshki M — the conversion and reversion meta-analyses (the honest numbers)" },
      { source: "Livingston G et al. — the Lancet Commission on dementia prevention (the modifiable-factor hierarchy: hearing, education, vascular)" },
      { source: "Prince M & the 10/66 Dementia Research Group — Indian-site cognitive-impairment epidemiology and the vascular/deprivation framing" },
      { source: "Galvin JE et al. — the AD8 informant tool; Nasreddine ZS et al. — the MoCA (both named only, never reproduced)" },
      { source: "NMHS 2015–16 elderly mental-morbidity framing; ARDSI dementia reports; the district-lab and rehabilitation-centre cost realities (approx 2026)" },
    ],
    patientResources: [
      { source: "The three-signs notebook and the conversion watch-list — the two written instruments every MCI family leaves the consultation with" },
      { source: "Tele-MANAS 14416 and the district rehabilitation centres — the follow-up and hearing channels" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the crossroads framing, the no-tablet honesty, the scaffolding rule, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The three gates, the honest numbers, the fog audit, the subtype shadows, the follow-up logic.",
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
      description: "Everything — the fog-audit craft, the deprescribing consultation, the calibration scripts, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three gates, the honest numbers, the risk-state framing.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the three gates and quote the conversion and reversion figures cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The reserve bank, the fog audit, the trajectory as film.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why two identical amyloid loads sit on opposite sides of the MCI line." },
    { number: 3, title: "Clinical Practice", description: "The work-up audit, the differential table, the risk-management programme.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the fog audit in fifteen minutes and deliver the no-tablet honesty with the risk package." },
    { number: 4, title: "Indian Context", description: "The calibration script, the informant's notebook, the scaffolding principle.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the label-with-numbers script and structure the family's roles, driving and follow-up." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the MCI essay cold — gates, numbers, audit, package, follow-up." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.1.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Petersen RC et al. — the MCI construct's original and successive Mayo formulations (the criteria paraphrased)", sourceType: "primary", year: "1999 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "DSM-5 / DSM-5-TR (APA) — the mild-neurocognitive-disorder construct", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Winblad B et al. — the international MCI harmonisation statement (the convergence frame)", sourceType: "guideline", year: "2004", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Mitchell AJ, Shiri-Feshki M — the conversion and reversion meta-analyses (the honest numbers)", sourceType: "meta-analysis", year: "2008–2009", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Petersen RC et al. — the donepezil/vitamin-E MCI trial (the negative-evidence position for routine cholinesterase use)", sourceType: "trial", year: "2005", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Livingston G et al. — the Lancet Commission on dementia prevention (the modifiable-factor hierarchy: hearing, education, vascular)", sourceType: "review", year: "2017–2024", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Lautenschlager NT et al. — the exercise RCT in MCI (the physical-activity signal); Ngandu T et al. — the FINGER multidomain trial", sourceType: "trial", year: "2008 and 2015", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Prince M & the 10/66 Dementia Research Group — Indian-site cognitive-impairment epidemiology and the vascular/deprivation framing", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Galvin JE et al. — the AD8 informant-report tool; Nasreddine ZS et al. — the MoCA (both named only, never reproduced)", sourceType: "primary", year: "2005 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Lin FR et al. — hearing loss and cognitive decline (the ACHIEVE trial lineage as the modern anchor)", sourceType: "trial", year: "2013–2023", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Indian context — ARDSI dementia reports; NMHS 2015–16 elderly mental-morbidity framing; the district-lab and rehabilitation-centre cost realities (approx 2026)", sourceType: "government", year: "2010s onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The three-gate definition: a concern about cognitive change (person or informant) + objective impairment (1–2 SD below age-education norms or clear decline from baseline) + independence in daily function preserved (with greater effort/strategies) — not delirium, not better explained by another disorder; the functional clause separating MCI from dementia.", grade: "established", sources: ["S1", "S2", "S3", "S4"] },
    { text: "The conversion arithmetic: roughly 10–15% per year for amnestic MCI to dementia, against 1–2% per year in the general elderly; multi-domain and biomarker-positive groups run higher; prevalence 15–20% of 65+ populations.", grade: "established", sources: ["S2", "S5"] },
    { text: "The reversion figure: 10–20%+ of MCI improves at follow-up, higher in population-based than clinic-based samples — obligating the hunt for the reversible layer before the label sticks.", grade: "established", sources: ["S5"] },
    { text: "The four differential layers: degenerative (Alzheimer, Lewy body, frontotemporal prodromes); vascular (small-vessel disease, strategic infarcts, post-stroke slowing — the Indian-weighted engine); reversible/functional (depression, hypothyroidism, B12/folate, sleep apnoea, medication fog, NPH, sensory deprivation, pain and isolation); mixed — most real cases.", grade: "established", sources: ["S1"] },
    { text: "The fog audit as the highest-yield first pass — medications (anticholinergic/benzodiazepine burden), mood, sleep (apnoea), thyroid, B12, hearing (the M-M-S-T-B-H mnemonic) — because it is the layer that fully reverses; in elders the deprescribing act alone often buys back a cognitive year.", grade: "supported", sources: ["S1", "S4"] },
    { text: "The honest pharmacotherapy position: cholinesterase inhibitors not supported for routine MCI treatment (the donepezil/vitamin-E trial lineage), reserved for diagnosed dementia; no Ginkgo or vitamin stacks on hope; HRT not a memory-preserving prescription (the WHI memory lesson).", grade: "established", sources: ["S6", "S3"] },
    { text: "The risk package: aerobic exercise the strongest single signal (~150 min a week); vascular control (BP to the 130s where tolerated, HbA1c individualised, lipids, smoking, the AF pulse check); hearing correction the largest modifiable population-attributable factor; cognitive and social engagement (scaffolding, not commercial 'brain games'); sleep and mood the behavioural way; the Mediterranean/DASH-style plate.", grade: "established", sources: ["S7", "S8", "S11"] },
    { text: "The subtype-conversion logic: amnestic → the Alzheimer pathway; executive/vascular → the vascular-dementia pathway; visuospatial with attention-fluctuation → the Lewy body shadow; language-led → the frontotemporal/logopenic shadows; amnestic multi-domain the higher-conversion tier.", grade: "established", sources: ["S1", "S2", "S4"] },
    { text: "The testing tier: the MoCA over the MMSE (the ceiling problem); the AD8-style informant report often the better change-detector; literacy- and education-adjusted instruments mandatory in Indian strata (the 10/66 lesson) — the wrong instrument manufactures or misses impairment.", grade: "established", sources: ["S9", "S10"] },
    { text: "The biomarker and genetic honesty: CSF amyloid/tau and amyloid-PET reclassify research-grade MCI precisely but remain a research-and-expensive tier in India and rarely change management today; plasma p-tau arriving, direction known, nothing ordered reflexively; APOE e4 a risk modifier, never a clinical test.", grade: "supported", sources: ["S2", "S3"] },
    { text: "The trajectory as diagnosis: a single score is a photograph, MCI a film — 6–12-monthly re-testing with the same instruments, the three-signs notebook, and the individual's road declaring itself over 2–3 years of follow-up; the consultation ends with a dated appointment, not a verdict.", grade: "established", sources: ["S4", "S5"] },
    { text: "The Indian tier: the 10/66 vascular-and-deprivation rails; the two family errors (dismissal and catastrophe) and the calibration script; the informant-son/daughter as the diagnosis's anchor; the joint family's scaffolding-not-substitution principle; the cost architecture (MoCA-equivalent testing free at medical colleges, TSH/B12/HbA1c ≈ ₹500–1,000, MRI ≈ ₹3,000–6,000, hearing aids ₹2,000–25,000 — approx 2026).", grade: "supported", sources: ["S9", "S12"] },
    { text: "The reserve model: symptoms appear when pathology's withdrawals exceed the reserve balance — two people with identical amyloid loads on opposite sides of the MCI line; the family's two levers after diagnosis being slowing the withdrawals (vascular, exercise) and raising the current yield (engagement, new learning, hearing, mood).", grade: "supported", sources: ["S7", "S9"] },
  ],
};
