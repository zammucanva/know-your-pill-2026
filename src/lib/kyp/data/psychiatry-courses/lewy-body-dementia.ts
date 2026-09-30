import type { PsychiatryCourse } from "./types";

/**
 * DEMENTIA WITH LEWY BODIES — canonical Psychiatry course
 * (migration batch 6, Group A — neurocognitive disorders, part 1 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/lewy-body-dementia.md — untouched foundation),
 * re-researched against current guidance (the 2017 DLB Consortium
 * fourth-report criteria, the Aarsland rivastigmine evidence, the
 * Postuma RBD-prodrome literature, the antipsychotic-sensitivity
 * safety syntheses) with per-claim provenance.
 *
 * Drug routes: rivastigmine, donepezil, galantamine, memantine,
 * quetiapine, clozapine, melatonin and clonazepam have no KYP drug
 * lessons — the full pharmacology is taught here and recorded in
 * contentGaps, never invented. The drug this course is MOST about is
 * the one it must refuse (haloperidol) — also not in the KYP library.
 */
export const lewyBodyDementiaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "lewy-body-dementia",
  title: "Dementia with Lewy Bodies",
  shortName: "DLB",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Dementia with Lewy Bodies"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The fluctuating dementia — hallucinations, parkinsonism and dream-acting sleep",
  summary:
    "Dementia with Lewy bodies combines fluctuating alertness, recurrent visual hallucinations, parkinsonism and REM sleep behaviour disorder, with dementia preceding or accompanying motor signs. Its severe antipsychotic sensitivity makes avoiding older antipsychotics a safety rule.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Name the four core clinical features of DLB and the supporting features.",
    "Apply the one-year rule that separates DLB from Parkinson's disease dementia.",
    "Explain alpha-synuclein and why DLB, Parkinson's and multiple system atrophy form one family.",
    "Distinguish DLB visual hallucinations from delirium, from late-onset psychotic disorder, and from Alzheimer's late hallucinations.",
    "Recognise REM sleep behaviour disorder as a prodrome that can precede dementia by years.",
    "Manage DLB: acetylcholinesterase inhibitors (the strongest responders of any dementia), cautious movement treatment, sleep treatment, and the antipsychotic rules.",
    "Counsel the family on falls, faints, swallowing, driving and the sensitivity card.",
    "Explain why this diagnosis is so often missed in Indian practice, and how to catch it.",
  ],
  quickFacts: [
    { label: "The four core features", value: "Flips, films, freeze, fights-in-sleep", detail: "Fluctuating cognition with attention swings; recurrent well-formed VISUAL hallucinations; spontaneous parkinsonism; REM sleep behaviour disorder — the checklist to recite cold" },
    { label: "The one-year rule", value: "Dementia before/within 1 year of parkinsonism = DLB", detail: "Dementia arising more than a year into established Parkinson's is labelled PDD instead — the arbitrary-but-operational hinge examiners love" },
    { label: "The frequency", value: "Third commonest dementia", detail: "4–8% of clinic cases, up to 10–30% in autopsy series — the discrepancy itself tells us we miss it in life" },
    { label: "The chemistry", value: "Deepest cholinergic deficit of any common dementia", detail: "Deeper than Alzheimer's — which is why rivastigmine produces its most visible responses here: hallucinations soften, attention steadies, some patients look 'switched back on'" },
    { label: "The catastrophe", value: "Severe antipsychotic sensitivity", detail: "Haloperidol and risperidone can trigger rigidity, hyperthermia and malignant-syndrome-like collapse — up to half show some degree of it; the wallet card IS a prescription" },
    { label: "The prodrome", value: "Dream-acting precedes dementia by 5–15 years", detail: "REM sleep behaviour disorder is one of the most valuable early-warning signs in all of neurodegeneration — and the spouse can tell you for free" },
    { label: "The hallucination tone", value: "Calm, detailed, well-formed, early", detail: "'Two small boys in the kitchen, they don't bother me' — vs Alzheimer's late and rare; insight often preserved at first, distress arrives with the delusions later" },
    { label: "The autonomic tier", value: "Faints, falls, constipation, blackouts", detail: "Postural BP drops plus impaired balance; transient unexplained losses of consciousness mislabelled as seizures — falls, not hallucinations, send this disease to hospital" },
  ],
  knowledgeGraph: [
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The classic DLB trap: hour-to-hour fluctuation mimics delirium — but no trigger, no resolution, plus parkinsonism and dream-acting" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The memory-first contrast: DLB's hallucinations early and fluctuations marked vs Alzheimer's smooth decline with late rare visions" },
    { label: "Dementia in Parkinson's Disease", type: "condition", href: "/psychiatry/parkinsons-dementia/", note: "The same protein, the other door — the one-year rule's twin across the boundary" },
    { label: "Frontotemporal Dementia", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The conduct-first contrast: FTD takes behaviour while memory holds; DLB takes perception while storage relatively holds" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "The RBD differential and bed-partner protection tier — the shared night-craft" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "DLB's depression-apathy comorbidity and the shared widow's-loneliness terrain" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The deepest deficit of any common dementia — the therapeutic target and the anticholinergic danger's reason" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The nigral system's fall — and the reason dopamine-blockers are the catastrophe" },
    { label: "Cortex", type: "brain-region", href: "#brain", note: "The association cortices where fluctuations and hallucinations are written" },
    { label: "Substantia nigra", type: "brain-region", href: "#brain", note: "The movement centre whose Lewy bodies write the parkinsonism" },
    { label: "Brainstem sleep centres", type: "brain-region", href: "#brain", note: "The dream-paralysis lock that RBD corrodes years before dementia" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry DLB. The protein that lights up the wrong rooms: alpha-synuclein is a normal protein at the tips of neurons, involved in how nerve endings release their chemical messages. In DLB it misfolds and clumps into Lewy bodies, spreading through connected networks — and where it lands decides the symptom: in the cortex (attention and perception hubs) it produces the fluctuations and hallucinations; in the substantia nigra, parkinsonism; in the brainstem sleep centres, it unbolts the paralysis that normally locks our bodies during dreams; in the autonomic nuclei, it unsteadies blood pressure, gut and bladder. The dream paralysis that fails: healthy sleepers are internally LOCKED during dreaming sleep — the brain paralyses the body so dreams stay inside the head. Lewy body disease corrodes that lock years before any dementia: the sleeper begins to live out the dream — muttering, shouting, punching the pillow-mate, leaping out of bed to escape a thief. This is REM sleep behaviour disorder, and remarkably it can precede DLB or Parkinson's by 5–15 years — one of the most valuable early-warning signs in all of neurodegeneration. In sleep-lab language the muscle-atonia is lost; the spouse can tell you the same thing for free. The empty acetylcholine tank: DLB produces the deepest cholinergic loss of any common dementia, deeper than Alzheimer's. Two consequences follow. Clinically: attention, perception and arousal wobble alarmingly. Therapeutically: acetylcholinesterase inhibitors (especially rivastigmine) produce their most visible responses here — hallucinations soften, attention steadies, some patients look 'switched back on'. That also means anticholinergic drugs (bladder tablets, old antispasmodics, sedating antihistamines) hit DLB patients doubly hard: they can CREATE the hallucinations they were meant to sedate away.",
    steps: [
      "Alpha-synuclein misfolds and clumps into Lewy bodies, spreading through connected networks.",
      "Where it lands decides the symptom: cortex (fluctuations, hallucinations), substantia nigra (parkinsonism), brainstem sleep centres (the dream-lock unbolted), autonomic nuclei (pressure, gut, bladder unsteadied).",
      "The dream paralysis fails: REM-atonia corrodes years before dementia — dream-enactment as the 5–15-year prodrome the spouse can report free.",
      "The cholinergic tank is the emptiest of any common dementia — attention, perception and arousal wobble on the deficit.",
      "The therapeutic mirror: cholinesterase inhibitors produce their best-dementia responses here (hallucination chemistry treated, not sedated).",
      "The iatrogenic mirror: dopamine-blockers hit the nigral-wiring fault (the malignant-syndrome-like collapse) — the catastrophe rule.",
      "The anticholinergic double-harm: bladder drugs and sedating antihistamines can create the very psychosis they were meant to sedate away.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "cortex", name: "Association cortices", role: "The attention-and-perception hubs where Lewy bodies write the fluctuations and the well-formed hallucinations — with memory storage relatively spared.", grade: "established" },
    { id: "substantia-nigra", name: "Substantia nigra", role: "The movement centre's Lewy bodies — the slowness, small handwriting, shuffle; and the wiring fault behind the antipsychotic catastrophe.", grade: "established" },
    { id: "brainstem-sleep", name: "Brainstem REM centres", role: "The dream-paralysis lock that RBD corrodes — the 5–15-year prodrome written in the night.", grade: "established" },
    { id: "autonomic-nuclei", name: "Autonomic nuclei", role: "Blood pressure, gut and bladder unsteadied — the faints, falls, constipation and blackouts that hospitalise more than the visions do.", grade: "established" },
    { id: "medial-temporal", name: "Medial temporal lobe (relatively spared)", role: "The relative-sparing sign on MRI: less atrophy than expected for the dementia's severity — a diagnostic clue against Alzheimer's.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "The deepest deficit of any common dementia — the attention-arousal wobble, the therapeutic target, and the reason anticholinergics are doubly dangerous here.", grade: "established", drugConnection: "Why rivastigmine has its best evidence of any dementia — and why amitriptyline-type drugs create the psychosis they were meant to sedate away." },
    { name: "Dopamine", symbol: "DA", role: "The nigral fall producing parkinsonism — and the wiring fault that dopamine-blockers (haloperidol, risperidone) trigger into the catastrophic reaction.", grade: "established", drugConnection: "The antipsychotic warning's mechanism: blocking an already-failing system tips it into rigidity and collapse." },
    { name: "Serotonin", symbol: "5-HT", role: "Secondarily disturbed — contributes to depression, sleep disruption and the visual-perceptual misfiring.", grade: "proposed" },
    { name: "Melatonin", symbol: "—", role: "The circadian hormone whose pathway is disturbed in RBD — the gentlest medical option for the dream-acting (3–12 mg at bedtime).", grade: "supported" },
  ],
  pathways: [
    {
      id: "synuclein-spread-pathway",
      name: "The protein that lights up the wrong rooms",
      steps: [
        { label: "Alpha-synuclein misfolds", detail: "The normal tip-of-neuron protein clumps into Lewy bodies" },
        { label: "Cortical spread", detail: "Attention and perception hubs — the fluctuations and the well-formed hallucinations" },
        { label: "Nigral spread", detail: "Parkinsonism: slowness, small handwriting, shuffle, softer voice" },
        { label: "Brainstem and autonomic spread", detail: "The dream-lock unbolted; pressure, gut and bladder unsteadied" },
      ],
      clinicalManifestation: "One disease, four doors: the drowsy-afternoon man who sees two small boys, shuffles, and fights his dreams at 3 a.m.",
      grade: "established",
    },
    {
      id: "rbd-prodrome-pathway",
      name: "The dream paralysis that fails (the years-early warning)",
      steps: [
        { label: "The lock corrodes", detail: "REM-atonia is lost years before any cognitive symptom" },
        { label: "The sleeper lives the dream", detail: "Muttering, shouting, punching the pillow-mate, leaping out of bed — sometimes injuring the spouse" },
        { label: "The prodrome window", detail: "5–15 years before DLB or Parkinson's declares — the most valuable early-warning sign in neurodegeneration" },
        { label: "The free diagnostic instrument", detail: "Three questions to the spouse beat the absent sleep lab: Does he act out dreams? Talk or shout in sleep? Fallen out of bed?" },
      ],
      clinicalManifestation: "The wife's bruises at the 3 a.m. elbow — the physical exam of the synuclein process, five years before the first hallucination.",
      grade: "established",
    },
    {
      id: "cholinergic-pathway",
      name: "The empty tank and its two mirrors",
      steps: [
        { label: "The deepest cholinergic loss", detail: "Deeper than Alzheimer's — attention, perception and arousal wobble on the deficit" },
        { label: "The therapeutic mirror", detail: "Cholinesterase inhibitors (rivastigmine best-evidenced) fill what remains: hallucinations soften, attention steadies, some patients 'switch back on'" },
        { label: "The anticholinergic mirror", detail: "Bladder drugs and sedating antihistamines drain the same tank — creating the psychosis they were meant to sedate away" },
        { label: "The prescription discipline", detail: "Strip every anticholinergic from the chart; treat the chemistry, not the symptom" },
      ],
      clinicalManifestation: "The 'memory tablet for the visions' that worked — and the bladder tablet that undid it.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "rbd-prodrome", time: "5–15 years before", title: "The dream-acting years", description: "REM sleep behaviour disorder declares the synuclein process long before thinking fails — the spouse's bruises as the first medical record; the window nobody is taught to read.", phase: "onset" },
    { id: "early-cognitive", time: "Years 0–2 of symptoms", title: "Drift, visions, shuffle", description: "Fluctuating attention with 'good days and bad hours'; the calm detailed hallucinations with preserved insight; the soft parkinsonism appearing — the four-door presentation that medicine keeps misreading as delirium, psychosis or Alzheimer's.", phase: "onset" },
    { id: "diagnosis-window", time: "Late — the Indian reality", title: "The recognition that changes everything", description: "Often only after a first antipsychotic reaction (sometimes the catastrophic event itself); the collateral four-door history, the pattern over any single score, and the wallet card issued the day the label lands.", phase: "peak" },
    { id: "established-course", time: "Years, typically 6–12 post-diagnosis", title: "Fluctuations all the way", description: "Progressive with the swings always present; falls and faints hospitalise more than hallucinations; superimposed illness swings into full delirium — the work-up still owed, not 'DLB progressing'.", phase: "duration" },
    { id: "late-stage", time: "Final years", title: "Swallow and steadiness", description: "Aspiration pneumonia as a leading cause of death; the falls-audited home, the swallowing review, the hand-feeding craft — comfort and the family's education carrying the last miles.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "DLB accounts for roughly 4–8% of dementia in clinic series and up to 10–30% in autopsy series — the discrepancy itself telling us we miss it in life. Onset typically 50–90, most after 60; men affected somewhat more than women (the reverse of Alzheimer's). It is the dementia with the HIGHEST psychiatric presentation rate: hallucinations, delusions, depression and REM sleep behaviour disorder bring many patients to psychiatrists first, then neurologists — a shared patient by nature. Course is progressive; average survival post-diagnosis broadly similar to Alzheimer's, but hospital admissions are more frequent — driven by falls, faints, aspiration and adverse drug reactions.",
    indianPrevalence: "No national figures; memory-clinic and neuropsychiatry series from Indian centres repeatedly report LATE recognition, most often after the patient has already received a typical antipsychotic — sometimes with the catastrophic reaction being the event that led to the diagnosis. The high prevalence of Parkinson's disease in Indian clinics guarantees a parallel, under-detected DLB population: every Parkinson's OPD will contain some patients whose dementia actually preceded or matched their motor symptoms. Sleep clinics are scarce, so REM sleep behaviour disorder — the easiest early clue, elicitable by three questions to the spouse — is almost never asked about. Teaching those three questions to PGs would transform Indian DLB detection.",
    lifetimeRisk: "Mostly sporadic; a small familial fraction exists (alpha-synuclein gene and GBA pathway variants raise risk; a family history of Parkinson's modestly raises DLB risk) — but routine genetic testing is not part of care.",
    genderRatio: "Men somewhat more affected than women — the reverse of Alzheimer's.",
    ageOfOnset: "Typically 50–90, most cases starting after 60.",
    indianNotes: "The practical 'risk factor' for a bad outcome in India is not biological: it is the unlabelled patient receiving haloperidol or risperidone in a casualty or small nursing home for 'agitation' or 'hallucinations'. Whatever raises that risk — the missing diagnosis, the missing card, the missing history — is the risk worth fighting.",
  },
  etiology: [
    { category: "biological", factor: "The alpha-synuclein process", details: "Misfolding and clumping inside neurons, with MORE cortical spread than in Parkinson's disease — which is why thinking fails early: the cortex (attention and perception) before the storage systems, the substantia nigra, the brainstem sleep centres and the autonomic nuclei all seeded by the same Lewy body pathology." },
    { category: "genetic", factor: "The mostly-sporadic genetics", details: "A small familial fraction: variants in the alpha-synuclein gene and GBA pathway genes raise risk; a family history of Parkinson's modestly raises DLB risk; routine genetic testing is not part of care." },
    { category: "biological", factor: "The shared family with Parkinson's", details: "One disease process, two presenting doors: door one, the movement centres first (Parkinson's, dementia later — PDD); door two, the cortex first (DLB, movement problems within a year at most). The one-year rule is the convention separating the two labels; multiple system atrophy (MSA) completes the synucleinopathy family." },
    { category: "environmental", factor: "The suggested-but-unproven tier", details: "Head injury and pesticide-type exposures suggested from the Parkinson's literature, unproven for DLB." },
    { category: "social", factor: "The Indian iatrogenic risk (the real exposure)", details: "The unlabelled patient in casualty receiving haloperidol or risperidone for 'agitation' or 'hallucinations' — the catastrophic reaction as the undiagnosed disease's introduction. The missing wallet card, the missing sleep questions, the missing reaction history: the risks worth fighting." },
  ],
  symptomClusters: [
    {
      category: "1. The four core features (know these cold)",
      symptoms: ["Fluctuating cognition with pronounced attention swings: lucid in the morning, dazed by afternoon, almost delirious-looking by evening, and back again — 'good days and bad hours'; drowsiness, staring spells and disorganised speech in waves", "Recurrent, well-formed visual hallucinations: typically people or animals — small children in the kitchen, a stranger in the corner, cattle crossing the room; insight often preserved early with a calm or curious tone ('there are two boys again, they don't bother me'); later turning threatening as delusions arrive", "Spontaneous parkinsonism: slowness, small handwriting, reduced arm swing, stooped shuffling gait, softer voice — a prominent early tremor is LESS typical (points back toward Parkinson's)", "REM sleep behaviour disorder: dream-enactment, shouting, thrashing, falling out of bed, sometimes injuring the partner — often the FIRST symptom, years ahead of the rest"],
    },
    {
      category: "2. The supportive features",
      symptoms: ["Severe sensitivity to antipsychotics — the management rule as well as a feature (treated as the course headline)", "Repeated falls and faints: postural hypotension plus impaired balance — falls, not hallucinations, send this disease to hospital", "Transient, unexplained losses of consciousness — brief blackouts mislabelled as seizures", "Misidentification delusions (Capgras-type: 'this woman is not my wife, she is an impostor') — systematised, fixed, much more common than in Alzheimer's", "Depression, anxiety, apathy; severe anticholinergic sensitivity (bladder drugs making them psychotic)", "Visuospatial failure out of proportion: lost in familiar rooms, misjudged steps, drawing tasks collapsing early — often before memory formally fails"],
    },
    {
      category: "3. The memory paradox and the course",
      symptoms: ["Memory storage relatively better preserved early than in Alzheimer's — retrieval slow but the storage cupboard exists; patients pass casual memory tests while clearly unable to manage themselves", "Progressive over years, typically 6–12 from diagnosis, with fluctuations always present", "Any superimposed illness (infection, dehydration) swings into full delirium — sudden deterioration still deserves the delirium work-up, not just 'DLB progressing'"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The consensus criteria (2017 fourth report, paraphrased; DSM-5/ICD-11 on the same ideas)",
      code: "Dementia plus core features",
      criteria: [
        "There is dementia: a decline from baseline in thinking bad enough to affect independence.",
        "PROBABLE DLB when two or more core features are present (or one core feature plus a biomarker — reduced dopamine transporter uptake on DAT imaging, or an abnormal sleep study confirming dream-enactment).",
        "POSSIBLE DLB with one core feature alone.",
        "The timing rule: the dementia must come BEFORE or CONCURRENTLY with parkinsonism; dementia arising more than a year after established Parkinson's is labelled Parkinson's disease dementia (PDD) instead.",
        "Supporting features (falls, faints, misidentification delusions, autonomic failure, antipsychotic-sensitivity history) raise the index of suspicion but are not counted as core.",
      ],
      duration: "Progressive over years with the fluctuations always present — the pattern, not any single score, carries the diagnosis.",
      indianNote: "The Indian habit to install: any elderly patient with detailed visual hallucinations gets asked about sleep-acting, gets examined for parkinsonism, and gets the drug-sensitivity history — before a single prescription is written.",
    },
    {
      system: "The work-up",
      code: "Four doors + pattern over score",
      criteria: [
        "Collateral history across four doors: the fluctuations timeline, exactly what the hallucinations look like, the sleep behaviour questions to the spouse, and any past reaction to antipsychotics (a previous 'collapse after haloperidol' entry is a diagnostic gift).",
        "Cognitive testing: clock-drawing and figure-copying collapse early (visuospatial), attention tests swing, memory relatively held — the PATTERN matters more than the total score.",
        "Imaging: MRI mostly to exclude other causes; the DLB clue is LESS medial temporal atrophy than expected for the severity (the relative-sparing sign); DAT scan shows reduced basal-ganglia uptake — a genuine discriminator from Alzheimer's where available (limited availability and cost in India; largely tertiary/private).",
        "Polysomnography to confirm REM without atonia where available; in practice the spousal history of dream-acting is accepted clinically.",
        "Bloods as in any dementia (the Alzheimer's course's one-time list — one fact, one home).",
        "Autonomic bedside tests: lying and standing blood pressure — a drop of 20/10 or more supports autonomic failure (and explains the falls).",
      ],
      duration: "A clinic-day diagnosis with the right collateral history; the DAT-sleep-lab tier only where the case is unusual.",
      indianNote: "Do not make a family chase a scan to believe you: the clinical picture (the sleep questions, the visions, the fluctuations, any past reaction) usually carries the diagnosis.",
    },
  ],
  severityScales: [
    {
      name: "The four-door burden ladder",
      fullName: "Core-feature staging of DLB",
      measures: "How many of the four doors are open, and how much the day fluctuates.",
      ranges: [
        { min: 0, max: 0, severity: "Prodromal (RBD only)", action: "The dream-acting years: protect the bed partner, teach the three questions, watch for the first cognitive drift — the window where prevention conversations happen" },
        { min: 1, max: 1, severity: "Early (hallucinations ± fluctuations, insight preserved)", action: "Diagnose by the four-door history; start rivastigmine early; strip anticholinergics; issue the wallet card the same day" },
        { min: 2, max: 2, severity: "Established (all four doors open)", action: "The full package: cholinesterase inhibitor maintained, falls-audit home, sleep protection, faints management, swallowing surveillance, carer education with the fluctuation script" },
      ],
      indianNote: "The Indian stage-marker is often the casualty visit (the fall, the faint, the antipsychotic reaction) — each one a missed earlier stage presenting as an emergency.",
    },
    {
      name: "The fluctuation ladder",
      fullName: "The 'good days and bad hours' grading",
      measures: "The amplitude of the attention swings — and the delirium question inside them.",
      ranges: [
        { min: 0, max: 0, severity: "Mild swings (afternoon dips)", action: "Structure the day around the good hours; evening lighting even (shadows worsen visions); the family taught to use the golden mornings deliberately" },
        { min: 1, max: 1, severity: "Marked swings (evening near-delirium)", action: "The collateral timeline documented; the delirium work-up run for any WORSE-than-usual week — infection and dehydration hide inside the disease's own noise" },
        { min: 2, max: 2, severity: "Sustained deterioration", action: "The delirium rule first (always), then honest re-baselining — the family conference on the new floor the illness has reached" },
      ],
      indianNote: "The teaching sentence: 'You will have golden mornings and lost evenings; that is the illness, not a new stroke or new madness' — and a bad week still gets the urine checked.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Delirium (DLB looks like it!)", distinguishingFeatures: "DLB's weeks-months pattern with parkinsonism and dream-acting history and known sensitivity — vs delirium's hours-days trigger, infection or drug cause, and resolution with treatment.", keyDifferentiator: "The delirium that never resolves is DLB until proven otherwise — and any worse-than-usual week still gets the delirium work-up inside the disease." },
    { condition: "Late-onset psychotic disorder", distinguishingFeatures: "Well-formed visual hallucinations + cognitive fluctuation + motor signs + sleep history — vs pure auditory hallucinations and stable ideas, stable attention, no parkinsonism, normal cognition.", keyDifferentiator: "Age + visual modality + any parkinsonism = organic: the 70-year-old with detailed visions is not a new schizophrenia." },
    { condition: "Alzheimer's disease", distinguishingFeatures: "Hallucinations EARLY and marked fluctuations and parkinsonism and early falls — vs Alzheimer's hallucinations late and rare, smooth decline, memory-first.", keyDifferentiator: "What arrives first: DLB takes perception while memory storage relatively holds; Alzheimer's takes memory first." },
    { condition: "Parkinson's disease dementia", distinguishingFeatures: "The one-year rule: dementia present before or within one year of motor signs = DLB; motor disease for years first, tremor-predominant = PDD.", keyDifferentiator: "The timing of the dementia against the parkinsonism — the arbitrary-but-operational hinge." },
    { condition: "Vascular dementia", distinguishingFeatures: "No stepwise infarct history and imaging clean of strategic infarcts — vs the stepwise course, infarct burden and executive-first profile.", keyDifferentiator: "The smooth-but-fluctuating course vs the stair-step one; the imaging that shows infarcts or does not." },
    { condition: "Charles Bonnet syndrome", distinguishingFeatures: "Visual hallucinations from vision loss in the cognitively intact — insight preserved, no fluctuations, no parkinsonism, no dream-acting.", keyDifferentiator: "The eyes are the cause, not the synuclein — the ophthalmology referral settles it." },
  ],
  management: [
    { category: "lifestyle", name: "The non-negotiable safety rule (the headline)", description: "AVOID dopamine-blocking antipsychotics: haloperidol and risperidone (and other high-potency agents) can trigger severe rigidity, hyperthermia, confusion and a malignant-syndrome-like collapse — the classic DLB catastrophe; up to half of patients show some degree of this sensitivity. The caution extends, more mildly, to ALL antipsychotics including atypicals — DLB is the disease where 'give something for the hallucinations' is the most dangerous reflex in medicine. Give the family a medical-alert card in local language: 'Diagnosed Lewy body dementia, severe sensitivity to antipsychotic drugs. For agitation: contact treating doctor. Avoid haloperidol/risperidone.'", whenToUse: "From the day of suspicion, not just diagnosis — the wallet card IS a prescription.", indianContext: "The unlabelled patient in casualty receiving haloperidol for 'agitation' is the Indian failure mode this rule exists for; the card in the wallet works like an allergy bracelet." },
    { category: "pharmacotherapy", name: "Cognition and hallucinations: the chemical that works", description: "Rivastigmine (oral, or patch where affordable) has the best evidence of ANY dementia drug for DLB: hallucinations, anxiety, attention and daily function measurably improve in a good fraction. Donepezil and galantamine are reasonable alternatives with similar logic. Memantine: modest benefit, useful add-on, well tolerated. If hallucinations are non-frightening and insight preserved: DO NOT TREAT THEM AT ALL — reorient gently, keep evening lighting even (shadows worsen them), treat hearing and vision. When distress or dangerous behaviour demands a drug: quetiapine in tiny doses (12.5–25 mg, cautiously titrated) is the pragmatic default (weak evidence, best risk-benefit available in India); clozapine has the best efficacy evidence but needs blood monitoring (agranulocytosis) that makes it tertiary-centre-only — watch its sedation and orthostasis, which DLB tolerates poorly. Strip every anticholinergic from the chart.", whenToUse: "Rivastigmine from diagnosis; the quetiapine tier only when the hallucinations turn dangerous or distressing.", indianContext: "Rivastigmine capsules inexpensive as generics (roughly ₹200–450/month at maintenance, approx 2026; the patch far costlier); quetiapine 25 mg tablets cost a few rupees — the expensive thing is again not the drug; it is the unmade diagnosis." },
    { category: "lifestyle", name: "Movement symptoms: gentle ambition", description: "Levodopa can be tried for parkinsonism, started low and slow — but the response is often disappointing in DLB and it can worsen hallucinations; aim to improve walking safely, not to normalise the exam. Physiotherapy for gait and balance; home falls-audit (rails, night lighting, floor mattress); footwear review.", whenToUse: "When the gait endangers — with the hallucination-worsening risk explained to the family beforehand.", indianContext: "The home falls-audit is the Indian family's craft: the bathroom rail, the night bulb, the floor mattress — inexpensive and decisive." },
    { category: "lifestyle", name: "Sleep, faints and gut (the autonomic tier)", description: "REM sleep behaviour disorder: protect the bed partner and the sleeper — separate beds or a padded barrier, remove sharp furniture, mattress on the floor; melatonin (3–12 mg at bedtime) is the best-tolerated medical option; clonazepam (0.25–0.5 mg) effective but watch sedation, falls and breathing (avoid in snorers/possible apnoea). Postural faints: stand-up training, compression stockings, salt review, medicines review (cut anything that drops pressure — including antihypertensives prescribed when autonomic failure changed the rules); teach the sit-before-you-stand drill. Constipation: fibre, fluids, routine aperients — impacted bowel is a top hidden cause of sudden agitation. Swallowing review when speech and drooling change: aspiration pneumonia is a leading cause of death.", whenToUse: "From diagnosis, reviewed at every visit — the autonomic tier hospitalises more than the visions do.", indianContext: "The sit-before-you-stand drill and the salt-and-stockings advice are the district tier's most effective prescriptions — free, and worth more than any scan." },
    { category: "psychotherapy", name: "Family education: the centrepiece", description: "Explain the four features as ONE illness — especially that hallucinations are a brain-symptom, not a mind-symptom. Give the sensitivity card; give the fluctuation explanation ('you will have golden mornings and lost evenings; that is the illness, not a new stroke or new madness'); schedule driving and finance conversations early; connect to dementia caregiver support where it exists.", whenToUse: "The diagnosis consultation and every visit after — the education IS the treatment's spine.", indianContext: "The misidentification belief ('who is this woman?') is often interpreted spiritually or as rejection in India — naming it as symptom, not sentiment, relieves families greatly; the spouse with RBD bruises needs the injuries named as a medical problem too." },
  ],
  safety: {
    redFlags: [
      "An agitated elderly patient with visual hallucinations in casualty — CHECK for DLB before any dopamine-blocker is written; someone may have already written haloperidol",
      "A past 'collapse after haloperidol' in any dementia chart — a diagnostic gift; the sensitivity card issued the same visit",
      "The first fall or unexplained blackout — the autonomic tier declaring; lying/standing BP and the medicines review now",
      "A worse-than-usual fluctuation week — delirium hides inside the disease's own noise: urine, salts, infection checked",
      "Bed-partner injury from dream-acting — the sleep protection tier installed that week (padding, separate mattresses, melatonin)",
      "New bladder antispasmodic or sedating antihistamine on the chart — the anticholinergic double-harm; strip it",
    ],
    urgentGuidance:
      "The order of operations: (1) the sixty-second casualty rule — agitated elderly with visions: ask the four-door history (fluctuations, visions, gait, sleep-acting) and any past antipsychotic reaction BEFORE the syringe; (2) if DLB is on the table: quetiapine-only caution at tiny doses, or no sedative at all — the environment and a familiar face first; (3) the wallet card written, printed in the local language, in the family's hands before they leave; (4) rivastigmine started early (the hallucination chemistry treated, not sedated); (5) every anticholinergic stripped from the chart; (6) the falls-and-faints work-up (lying/standing BP, medicines audit, home rails) — because falls, not hallucinations, are what send this disease to hospital; (7) the sleep protection installed for the spouse's safety as much as the patient's.",
  },
  drugLinks: [],
  contentGaps: [
    "Rivastigmine, donepezil and galantamine — the cholinesterase-inhibitor tier with its BEST evidence in this specific dementia — have no KYP drug lessons; the dosing and monitoring are taught here, the routes never invented.",
    "Memantine (the modest add-on) has no KYP lesson.",
    "Quetiapine (the pragmatic tiny-dose default for dangerous hallucinations) and clozapine (the best-evidence, blood-monitoring, tertiary-only option) have no KYP lessons.",
    "Melatonin and clonazepam (the REM sleep behaviour disorder tier) have no KYP lessons — the bed-protection architecture lives in this course.",
    "Pimavanserin (the US-approved Parkinson's-psychosis alternative, currently unavailable in Indian practice) — know the name, not the prescription.",
    "The refusal teaching: haloperidol and risperidone are the drugs this course exists to refuse — documented as contraindicated territory, not as linked lessons.",
  ],
  patientGuide: {
    whatIsIt:
      "Dementia with Lewy bodies is a specific dementia in which a protein called alpha-synuclein clumps inside brain cells, producing a four-part signature: attention that fluctuates through the day (lucid mornings, drowsy evenings), vivid well-formed visual hallucinations (people or animals, often calm and detailed at first), Parkinson-like slowness and shuffle, and dream-acting sleep (shouting, thrashing, falling out of bed). These are ONE illness, not four. It is the third commonest dementia, sits midway between Alzheimer's and Parkinson's — and it carries one special danger: severe, sometimes life-threatening reactions to the older antipsychotic drugs, which is why a card in the wallet matters as much as any prescription.",
    whatCausesIt:
      "A normal protein at the tips of nerve cells misfolds and clumps (into Lewy bodies), spreading through connected brain networks. Where it lands writes the symptom: in the thinking cortex it produces the fluctuations and visions; in the movement centre, the slowness and shuffle; in the sleep centres, it unbolted the paralysis that normally locks the body during dreams (so dreams get acted out — sometimes for years before anything else appears); and in the blood-pressure centres, the faints and falls. It is not caused by stress, by anything the family did, or by 'thinking about the visions'.",
    symptoms:
      "The four parts to watch: (1) 'Good days and bad hours' — attention and alertness swinging through the day, drowsiness and staring spells, almost delirious-looking evenings then recovery; (2) Recurrent, detailed visual hallucinations — small children in the kitchen, a stranger in the corner, animals crossing the room — often calm and accepted early ('they don't bother me'), later turning distressing when beliefs about them arrive; (3) Slowness, smaller handwriting, stooped shuffling gait, softer voice; (4) Dream-enacting nights — shouting, punching, falling out of bed. Plus: repeated falls and faints, brief blackouts mislabelled as seizures, the impostor belief ('this woman is not my wife'), and constipation.",
    treatment:
      "The plan: (1) The safety card — everyone must know: no haloperidol, no risperidone, no old antipsychotics; he can have a catastrophic reaction. (2) The medicine that works on the chemistry: rivastigmine (a 'memory tablet' that treats the visions too — steadier chemistry means fewer visions) — this is the correct paradox: the memory tablet for the visions, not a sedative. (3) The hallucinations: if calm and non-frightening, often best NOT treated at all — gentle reorientation, even evening lighting (shadows worsen them), hearing and vision treated. (4) The nights: melatonin is the gentlest option, plus the bed protection — separate mattresses, padding, sharp furniture removed. (5) The faints and falls: medicine review, salt and stockings, the sit-before-you-stand drill, the home rails. (6) The gut: fibre, fluids, routine — an impacted bowel is a top hidden cause of sudden agitation.",
    selfHelp: [
      "Carry the wallet card everywhere — casualty, the nursing home, the family wedding: 'severe sensitivity to antipsychotic drugs' in the local language.",
      "Use the golden mornings deliberately — conversations, walks, small enjoyments scheduled into the good hours; the lost evenings are the illness, not a new disease.",
      "Keep evening lighting even throughout the rooms — shadows and dusk feed the visions; night lights prevent both falls and fears.",
      "Install the bed protection: separate mattresses or a padded barrier, sharp furniture removed, the floor mattress — the spouse's safety is a medical matter too.",
      "Teach the sit-before-you-stand drill and review every blood-pressure medicine with the doctor — the faints are treatable.",
      "Keep the bowels running (fibre, fluids, routine) — the hidden agitation cause nobody checks.",
      "Do not argue with the impostor belief — stay calm, use your name, keep the routines; the recognition wiring is ill, not the bond.",
      "Ask the doctor to check urine and salts in any worse-than-usual week — infection hides inside the fluctuation noise.",
    ],
    whenToSeekHelp: [
      "Any elderly person with detailed visual hallucinations — the four-door history before any prescription",
      "Dream-acting sleep with injuries (to the patient or the partner) — the sleep protection and melatonin conversation",
      "The first fall or blackout — same-day lying/standing blood pressure and medicines review",
      "A catastrophic reaction to any antipsychotic given anywhere — the card and the diagnosis conversation the same week",
      "A worse-than-usual fluctuation week — the delirium check (urine, salts, infection)",
      "Swallowing changes, drooling, or weight loss — the aspiration-prevention review",
    ],
    indianResources: [
      "The treating psychiatrist or neurologist — the shared patient by nature; the wallet card written in the local language before the first casualty visit",
      "Dementia caregiver support where it exists (ARDSI chapters in some cities) — the fluctuation and misidentification scripts rehearsed with other families",
      "The family physician as the card-carrier — the doctor who knows not to reach for haloperidol in a confused elderly patient prevents the worst outcome alone",
      "Tele-MANAS 14416 (24×7, free) — for the carer's distress and the family's routing questions",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "International consensus criteria (the 2017 DLB Consortium fourth report) and general dementia/NICE-style frameworks guide practice; Indian Psychiatric Society dementia guidance generalises. No India-specific DLB pathway exists — which makes the wallet card and family education even more central.",
    systemContext: "Where patients surface: psychiatry OPDs with 'visual hallucinations' or 'acting mad in the evening'; neurology with a Parkinson's-plus picture; general medicine after a collapse from an antipsychotic given in casualty; and sleep-clinic referrals rare to nonexistent outside metros. The high prevalence of Parkinson's in Indian clinics guarantees a parallel under-detected DLB population — every Parkinson's OPD will contain some patients whose dementia actually preceded or matched their motor symptoms.",
    programmeContext: "DAT scan reality: very limited availability and cost; the practical diagnosis is clinical (four features + collateral history + the relative-sparing MRI pattern) — do not make a family chase a scan to believe you. Sleep clinics are scarce; the three sleep questions to the spouse are the substitute instrument that costs nothing.",
    costConsiderations: "Rivastigmine capsules inexpensive as generics (roughly ₹200–450/month at maintenance, approx 2026; the patch far costlier); quetiapine 25 mg tablets a few rupees each; melatonin affordable where sourced. The expensive thing is again not the drug — it is the unmade diagnosis: the casualty admission, the catastrophic reaction's hospital week, the fall that needed surgery.",
    culturalConsiderations: "The misidentification belief ('who is this woman?') is often interpreted spiritually or as rejection in India — naming it as symptom, not sentiment, relieves families greatly. The spouse with dream-acting bruises is a neglected problem: her injuries are a medical record of the disease, and the bed protection tier treats her as a patient too. The most common private-practice request is 'give him something so he does not see things' — the correct answer is often rivastigmine (treating the cause of the hallucination chemistry), not a sedative; explaining that paradox in one minute is the single most useful consultation skill in Indian DLB care.",
    patientCounselling: [
      "The one-minute paradox script: 'The chemical most depleted in this disease is the one the memory tablet preserves — steadier chemistry means fewer visions. Sedatives are the riskier path here.' — the consultation skill that changes Indian DLB care.",
      "The hallucination script for the family: 'The perception centres themselves are misfiring, producing pictures as real to him as you are. Most patients are calm about them early. It is a symptom, like a limp — not madness.'",
      "The sensitivity card script, written in the local language and rehearsed: 'Diagnosed Lewy body dementia, severe sensitivity to antipsychotic drugs. For agitation: contact treating doctor. Avoid haloperidol/risperidone.' — the wallet card that works like an allergy bracelet.",
      "The fluctuation script: 'You will have golden mornings and lost evenings; that is the illness, not a new stroke or new madness' — plus the caveat that a worse-than-usual week still gets the urine and salts checked.",
      "The impostor script for the misidentified spouse: 'The bond is not gone; the recognition wiring is. Stay calm, use your name, keep the routines — the belief fluctuates with the rest of the illness.'",
      "The bed-partner script: 'His elbows at 3 a.m. are the disease, not hostility — separate mattresses and padding are medical treatment, not rejection.'",
      "The driving and finances conversation held EARLY, in the good hours — the fluctuating competence makes it urgent, not optional.",
    ],
  },
  decisionPath: {
    title: "The elderly patient with visual hallucinations",
    nodes: [
      {
        id: "start",
        question: "An elderly patient sees detailed visions. The one habit: sleep-acting asked, gait examined, drug-sensitivity history taken — before any prescription.",
        branches: [
          { label: "Fluctuating + visions + parkinsonism ± dream-acting", next: "dlb-gate" },
          { label: "Vision loss with intact cognition, insight preserved", next: "charles-bonnet-path" },
          { label: "Sudden onset with infection/drug trigger", next: "delirium-path" },
          { label: "Smooth memory-first decline, visions late", next: "alzheimers-path" },
        ],
      },
      {
        id: "dlb-gate",
        question: "Apply the consensus logic: dementia plus how many core features?",
        branches: [
          { label: "Two or more core features (fluctuation, visions, parkinsonism, RBD)", next: "probable-dlb" },
          { label: "One core feature + DAT/sleep-study biomarker", next: "probable-dlb" },
          { label: "One core feature alone", next: "possible-dlb" },
        ],
      },
      {
        id: "probable-dlb",
        question: "PROBABLE DLB. Check the timing rule and the work-up.",
        recommendation: "The one-year rule: dementia before or concurrent with parkinsonism = DLB (more than a year into established Parkinson's = PDD — see its own course); the four-door collateral history; clock-and-figure testing (the pattern over the score); MRI (relative medial-temporal sparing as the clue); lying/standing BP; DAT scan only where the case is unusual; the wallet card written TODAY.",
      },
      {
        id: "possible-dlb",
        question: "POSSIBLE DLB: the disciplined follow-up.",
        recommendation: "Document the single door; re-examine at 3–6 months for the second; the sleep questions repeated (the spouse knows more each visit); the antipsychotic caution applies ALREADY — the card issued at suspicion, not at certainty.",
      },
      {
        id: "delirium-path",
        question: "Sudden + trigger: the delirium work-up runs first.",
        recommendation: "The Delirium-course cascade (urine, sodium, infection, drug chart) — BUT the four-door history taken in the same hour: the delirium that never fully resolves is DLB until proven otherwise, and the resolution pattern teaches which.",
      },
      {
        id: "charles-bonnet-path",
        question: "The eyes as the cause: Charles Bonnet.",
        recommendation: "Vision loss with preserved cognition and insight, no fluctuations, no parkinsonism, no dream-acting — the ophthalmology referral settles it; the reassurance script ('the visions are the brain filling the silence the eyes left') treats more than any tablet.",
      },
      {
        id: "alzheimers-path",
        question: "Memory-first: the Alzheimer's route.",
        recommendation: "See the Alzheimer's course: the smooth decline, the late rare visions, the posterior-parietal pattern — with the DLB door re-checked at every review (the fluctuations that appear later re-route the case).",
      },
      {
        id: "management-gate",
        question: "Confirmed DLB. The package:",
        branches: [
          { label: "Hallucinations calm, insight preserved", next: "no-treatment-path" },
          { label: "Hallucinations distressing or dangerous", next: "drug-tier-path" },
          { label: "Parkinsonism limiting walking", next: "levodopa-path" },
          { label: "Nights dangerous (RBD injuries)", next: "sleep-path" },
        ],
      },
      {
        id: "no-treatment-path",
        question: "The counterintuitive first prescription: nothing.",
        recommendation: "Reorient gently; evening lighting even throughout; hearing and vision treated; the family taught the symptom-not-madness script — rivastigmine started for the chemistry (its benefits arrive on their own schedule), and the visions watched, not drugged.",
      },
      {
        id: "drug-tier-path",
        question: "When distress or danger demands a drug.",
        recommendation: "First: rivastigmine optimised (the chemistry tier); THEN, if still needed: quetiapine 12.5–25 mg cautiously titrated — the pragmatic default (weak evidence, best risk-benefit in India); clozapine reserved to tertiary centres (the best efficacy evidence, but the agranulocytosis monitoring and the sedation-orthostasis DLB tolerates poorly); NEVER haloperidol or risperidone — the catastrophe tier; every anticholinergic stripped from the chart alongside.",
      },
      {
        id: "levodopa-path",
        question: "Movement treatment: gentle ambition.",
        recommendation: "Levodopa low and slow — the response often disappointing and hallucinations can worsen; aim for safe walking, not a normal exam; physiotherapy, the home falls-audit (rails, night lighting, floor mattress), footwear review.",
      },
      {
        id: "sleep-path",
        question: "The dream-acting nights.",
        recommendation: "Bed protection FIRST (separate mattresses or padded barrier, sharp furniture removed, mattress on the floor); melatonin 3–12 mg at bedtime the best-tolerated medicine; clonazepam 0.25–0.5 mg effective but watched for sedation, falls and breathing (avoid in snorers); the spouse's injuries named and treated as the medical record they are.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Writing haloperidol (or risperidone) for 'agitation with hallucinations' in an unlabelled elderly patient",
      why: "The classic DLB catastrophe: severe rigidity, hyperthermia and malignant-syndrome-like collapse in up to half of patients — and in India the reaction is often the event that finally leads to the diagnosis.",
      correction: "The sixty-second rule before any syringe: the four-door history (fluctuations, visions, gait, sleep-acting) plus any past reaction — and when DLB is on the table: quetiapine-only caution at tiny doses, or no sedative at all.",
    },
    {
      mistake: "Diagnosing delirium repeatedly for fluctuating confusion in an outpatient",
      why: "The hour-to-hour swings genuinely mimic delirium — but there is no trigger, no resolution, and the other doors (visions, gait, dream-acting) are standing open beside it.",
      correction: "The pattern question across visits: does it resolve with treatment or persist for weeks-months? The unresolving 'delirium' is DLB until proven otherwise — and any worse-than-usual week still gets the urine checked (the delirium hiding inside).",
    },
    {
      mistake: "Diagnosing late-onset schizophrenia in a 70-year-old with detailed visual hallucinations",
      why: "Age + visual modality + any parkinsonism = organic — the psychiatric label delays the work-up, invites the antipsychotic catastrophe, and abandons the family to 'madness'.",
      correction: "The modality rule: schizophrenia's hallucinations are auditory and its onset young; the elderly patient's detailed VISIONS with any motor sign get the four-door history, not the psychiatric label.",
    },
    {
      mistake: "Never asking the spouse the three sleep questions",
      why: "The RBD history is the single cheapest DLB instrument — and in India almost never elicited because nobody is taught to ask; sleep clinics are scarce, so the spouse is the sleep lab.",
      correction: "The three questions taught forward to every PG: Does he act out dreams? Does he talk or shout in sleep? Has he fallen out of bed? — teaching these would transform Indian DLB detection.",
    },
    {
      mistake: "Prescribing a bladder antispasmodic (or sedating antihistamine) and creating florid psychosis",
      why: "The anticholinergic double-harm: drugs that drain the already-emptiest cholinergic tank CREATE the very hallucinations they were meant to sedate away.",
      correction: "The anticholinergic audit at every visit: bladder drugs, old antispasmodics, sedating antihistamines, tricyclics — each one stripped, each replacement chosen cholinergically clean.",
    },
    {
      mistake: "Treating calm hallucinations that need no treatment",
      why: "The visions with preserved insight and no distress are a symptom to explain, not a disease to sedate — the reflex prescription exposes the patient to the antipsychotic risk with nothing to gain.",
      correction: "The counterintuitive first prescription: nothing — reorient gently, light the evenings evenly, treat hearing and vision, and let rivastigmine work on the chemistry while the family learns the symptom-not-madness script.",
    },
    {
      mistake: "Blaming a failed levodopa trial on 'non-compliance'",
      why: "DLB's levodopa response is often disappointing by nature — the nigral wiring is not Parkinson's wiring; escalating doses chasing a normal exam only feeds the hallucinations.",
      correction: "Gentle ambition: low and slow, aimed at safe walking rather than a normal exam — with the hallucination-worsening risk explained to the family before the first tablet.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The four core features as a checklist — with the hook: 'Flips, films, freeze, fights-in-sleep.'",
        "The one-year rule and what it separates (DLB vs PDD) — arbitrary but operational, and examiners love it.",
        "Why cholinesterase inhibitors work best here: the deepest cholinergic deficit of the common dementias.",
        "The antipsychotic warning: which dementia carries it, what the reaction looks like, and what to reach for instead.",
        "Alpha-synuclein family tree: DLB–PDD–MSA — one protein, three doors.",
      ],
      practical: [
        "Elicit the RBD history from a spouse with the three questions, and demonstrate the lying/standing blood pressure.",
        "Present the four-door formulation from a collateral history and write the wallet-card text.",
      ],
      longAnswer: [
        "Elderly visual hallucinations: differential diagnosis (DLB, delirium, Alzheimer's late stage, Charles Bonnet, occipital stroke, late-onset psychosis) — the evergreen essay.",
        "Dementia with Lewy bodies: clinical features, diagnosis and the management principles including the antipsychotic rule.",
      ],
    },
    neetPg: {
      highYield: [
        "The four core features: fluctuating cognition, recurrent well-formed VISUAL hallucinations, spontaneous parkinsonism, REM sleep behaviour disorder — 'flips, films, freeze, fights-in-sleep'.",
        "ONE-YEAR RULE: dementia before/within 1 year of parkinsonism = DLB; dementia after 1+ years of established Parkinson's = PDD.",
        "Hallucinations: well-formed, visual, EARLY and common in DLB — vs late and rare in Alzheimer's; Capgras-type misidentification more common than in Alzheimer's.",
        "RBD precedes DLB/Parkinson's by 5–15 years — the prodrome; confirmed by polysomnographic REM-without-atonia.",
        "Antipsychotic sensitivity: haloperidol/risperidone can trigger severe rigidity, hyperthermia and malignant-syndrome-like collapse — up to half show some degree; the single most important management fact.",
        "Cholinesterase inhibitors have their BEST evidence in DLB (rivastigmine: hallucinations, attention, function) — the deepest cholinergic deficit of the common dementias.",
        "MRI: relative sparing of medial temporal atrophy (vs Alzheimer's) — the clue within a non-specific scan.",
        "DAT scan: reduced basal-ganglia uptake in DLB, preserved in Alzheimer's — the biomarker that upgrades one core feature to probable.",
        "DLB frequency: 4–8% of clinic series, 10–30% of autopsy series — the discrepancy means we miss it in life; men more than women.",
        "RBD treatment: melatonin (best-tolerated) vs clonazepam (effective but sedation/falls/breathing caution).",
        "Quetiapine tiny-dose for dangerous hallucinations (pragmatic default); clozapine best-evidence but blood-monitoring tertiary-only; pimavanserin — know the name, unavailable in India.",
        "Falls and syncope hospitalise more than the visions: autonomic failure, postural BP drop 20/10+; transient unexplained losses of consciousness mislabelled as seizures.",
      ],
      pyqConcepts: [
        "The unresolving 'delirium' as the DLB presentation.",
        "Levodopa response disappointing in DLB, and can worsen hallucinations.",
        "Clock-drawing and figure-copying collapse early (visuospatial) while memory storage relatively holds — the pattern over the score.",
        "Anticholinergic drugs creating the psychosis they were meant to sedate away — the double-harm.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 71-year-old retired railway clerk: a year of calmly describing 'two small boys' playing in the kitchen each evening; six months of slowing, smaller handwriting and two falls; a wife elbowed hard at 3 a.m. by the dream-fighter; memory imperfect but usable and clock-drawing poor; a previous clinic's low-dose risperidone followed within days by rigidity, muteness and feverishness — the triad plus the reaction history giving probable DLB; rivastigmine titrated (hallucinations reduced to brief non-distressing appearances), melatonin and bed-padding for the nights, the sensitivity card carried; two years later still at home, walking with a stick — 'the boys still visit, but they are quiet.'",
        "A 68-year-old widow referred as 'schizophrenia': a year of seeing and hearing intruders at night, the fixed belief her daughter-in-law had been replaced by a look-alike, twice-daily drowsiness and rambling; the referrer's antipsychotic making her gait alarmingly worse; collateral history revealing lucid mornings, evening drift, dream-shouting two years prior, and repeated standing faints; mild bilateral bradykinesia without tremor, postural BP drop 25 mmHg — the antipsychotic stopped as the treatment itself, rivastigmine established, the Capgras belief softened, salt and stockings reducing the faints.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The four core features of DLB (fluctuation, visual hallucinations, parkinsonism, RBD).",
        "The one-year rule (DLB vs PDD).",
        "The antipsychotic sensitivity warning — haloperidol contraindicated.",
        "Rivastigmine: the best-evidenced dementia drug in DLB.",
        "RBD as the years-early prodrome.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The casualty discipline: before any syringe in an agitated elderly patient with visions, the four-door history takes sixty seconds — and the wallet card is written at suspicion, not at certainty.",
        "The consultation skill that changes Indian DLB care: the one-minute paradox ('the memory tablet treats the visions; the sedative endangers them') — rehearse it until it is reflexive.",
        "The spouse is a patient too: RBD injuries are a medical record of the disease, and the bed-protection tier treats her; the misidentified spouse needs the bond-not-gone script as much as any tablet.",
        "The pattern over the score: clock-drawing collapse with preserved memory storage, attention tests that swing between visits, the relative-sparing MRI — DLB is diagnosed by gestalt assembled from four doors, not by any single instrument.",
        "The staging honesty: fluctuations all the way to the end — teach families to use the golden mornings deliberately and to bring any worse-than-usual week for the urine-and-salts check, because delirium hides inside the disease's own noise.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The boys in the kitchen",
      presentation: "A year of calm evening visions, a shrinking handwriting, two falls — and a wife elbowed at 3 a.m. by the dream-fighter.",
      initialPresentation: "A 71-year-old retired railway clerk was brought by his wife to a psychiatry OPD. For a year he had calmly described 'two small boys' who played in the kitchen each evening; six months of slowing had brought smaller handwriting and two falls; and, in her phrase, 'he fights in his sleep — he once elbowed me hard at 3 a.m.' His memory was imperfect but usable; clock-drawing was poor. A previous casual clinic had prescribed low-dose risperidone for the 'visions': within days he had become rigid, mute and feverish, recovering slowly in hospital.",
      history: "Onset with the evening visions a year ago (insight preserved, tone calm — 'they don't bother me'); the slowing and handwriting change over the last six months; the dream-enactment predating everything by the wife's retrospective count; the risperidone reaction documented in the hospital discharge papers — the diagnostic gift nobody had read.",
      examination: "Attention fluctuating through the consultation itself (dazed stretches recovering to full sharpness); mild bilateral bradykinesia, reduced arm swing, no prominent tremor; postural BP drop present; clock-drawing and figure-copying collapsed; memory recall relatively preserved.",
      diagnosis: "Probable dementia with Lewy bodies (three core features — fluctuation, well-formed visual hallucinations, parkinsonism — plus RBD history and a severe antipsychotic-sensitivity reaction).",
      management: "Rivastigmine titrated to maintenance; the sensitivity card written and carried; melatonin at bedtime with the bed-protection package (padded barrier, sharp furniture removed); home falls-audit (rails, night lighting, floor mattress); the family taught the four-features-one-illness script and the fluctuation explanation.",
      outcome: "Hallucinations reduced to brief, non-distressing appearances; two years later he remained at home, walking with a stick — 'the boys still visit, but they are quiet.'",
      teachingPoints: [
        "Early detailed visual hallucinations are organic until proven otherwise in the elderly — and the calm tone with preserved insight is the DLB signature.",
        "The risperidone reaction was the loudest diagnostic clue in the chart — a past 'collapse after haloperidol' entry is a diagnostic gift.",
        "Rivastigmine treats the hallucination chemistry — the paradox that is the single most useful Indian consultation skill.",
      ],
    },
    {
      title: "The night caller misdiagnosed as schizophrenia",
      presentation: "A widow seeing intruders at night, believing her daughter-in-law replaced by a look-alike — and worsening on the antipsychotic that was meant to help.",
      initialPresentation: "A 68-year-old widow was referred to psychiatry with a one-year history of 'hearing and seeing intruders at night', a fixed belief that her daughter-in-law had been replaced by a look-alike, and twice-daily episodes of drowsiness and rambling. The referrer had started an antipsychotic; her gait had worsened alarmingly on it. Collateral history from the son revealed lucid mornings, evening drift, detailed intruders, dream-shouting for two years before everything, and repeated faints on standing.",
      history: "Widowed, living with the son's family; one year of nocturnal intruders with the Capgras belief about the daughter-in-law developing over months; the fluctuating drowsiness documented by the family but not by the referrer; the antipsychotic trial producing gait worsening; the dream-shouting history elicited only when the son was asked directly.",
      examination: "Mild bilateral bradykinesia without tremor; postural BP drop of 25 mmHg; attention fluctuating across the interview; the misidentification belief held with quiet conviction; no marked memory-storage failure on testing.",
      diagnosis: "Probable dementia with Lewy bodies — fluctuating cognition, well-formed visual hallucinations, RBD history and autonomic failure, with a Capgras-type misidentification delusion and antipsychotic sensitivity declared by the gait worsening.",
      management: "The antipsychotic stopped — itself the treatment; rivastigmine established (no quetiapine needed at all once the chemistry tier worked); the Capgras belief softened on follow-up; salt and stocking advice with the sit-before-you-stand drill reducing the faints; the son taught the three sleep questions and the wallet card.",
      outcome: "Visions quieter, gait partially recovered off the offending drug, faints fewer — and the daughter-in-law restored to recognition on most days, with the family taught that the belief fluctuates with the illness.",
      teachingPoints: [
        "Late-onset 'psychosis' with cognitive fluctuation is DLB until excluded — age + visual modality + motor signs = organic.",
        "The impostor belief is a DLB signature (misidentification delusion) — more common than in Alzheimer's, and treatable by education more than by drugs.",
        "Stopping the offending antipsychotic was itself the treatment — and the autonomic symptoms (faints, constipation) are part of the disease whose management prevents the falls that end the story.",
      ],
    },
  ],
  clinicalPearls: [
    "In an elderly patient with visual hallucinations, ask about sleep-fighting and look at the gait before you write any prescription — the one-line discipline.",
    "The four core features: 'Flips, films, freeze, fights-in-sleep' — fluctuating cognition, well-formed visual hallucinations, parkinsonism, REM behaviour disorder.",
    "The one-year rule: dementia before/within one year of parkinsonism = DLB; after a year of established Parkinson's = PDD — the arbitrary-but-operational hinge.",
    "If Alzheimer's forgets, DLB drifts and sees — with memory storage relatively preserved early (the retrieval slow, the cupboard existing).",
    "RBD precedes the dementia by 5–15 years: the spouse's three-question history is the cheapest early-warning instrument in neurodegeneration.",
    "The deepest cholinergic deficit of any common dementia — which is why rivastigmine (not a sedative) treats the hallucinations: steadier chemistry means fewer visions.",
    "The antipsychotic catastrophe: haloperidol and risperidone trigger rigidity, hyperthermia and malignant-syndrome-like collapse in up to half — the wallet card IS a prescription.",
    "Quetiapine 12.5–25 mg the pragmatic tiny-dose default when danger demands; clozapine the best-evidence tertiary tier; pimavanserin a name to know, unavailable in India.",
    "Anticholinergics double-harm: bladder drugs and sedating antihistamines create the psychosis they were meant to sedate away — strip them all.",
    "Falls and faints, not hallucinations, hospitalise: autonomic failure with postural drops; the sit-before-you-stand drill, stockings, salt, and the medicines review.",
    "The hallucination tone is the discriminator: calm, detailed, well-formed, early — vs schizophrenia's auditory young-onset and Alzheimer's late rare visions.",
    "Capgras-type misidentification ('this woman is not my wife') is a DLB signature — name it symptom-not-sentiment and spare the family's bond.",
    "Melatonin 3–12 mg is the best-tolerated RBD medicine; clonazepam effective but watched for sedation, falls and breathing.",
    "MRI's clue is relative: LESS medial temporal atrophy than expected — and the DAT scan's reduced uptake is the biomarker that upgrades one core feature to probable.",
    "The Indian tier: recognition late (often after the antipsychotic reaction); the three sleep questions taught to every PG would transform detection; the paradox script ('the memory tablet treats the visions') is the consultation skill.",
  ],
  highYieldSummary: [
    "Definition: DLB = a synucleinopathy dementia with four core features — fluctuating cognition with attention swings, recurrent well-formed visual hallucinations, spontaneous parkinsonism, REM sleep behaviour disorder — with dementia preceding or concurrent with parkinsonism (the one-year rule vs PDD).",
    "Epidemiology: third commonest dementia (4–8% clinic, 10–30% autopsy — missed in life); onset 50–90 mostly after 60; men more than women; the highest psychiatric presentation rate of any dementia (shared patient by nature).",
    "Mechanism: alpha-synuclein Lewy bodies spreading by region (cortex = fluctuations and visions; nigra = parkinsonism; brainstem REM centres = the dream-lock unbolted; autonomic nuclei = faints, falls, gut, bladder); the deepest cholinergic deficit of any common dementia (rivastigmine's best evidence; the anticholinergic double-harm).",
    "Clinical picture: 'good days and bad hours'; calm detailed visions with preserved insight turning distressing with delusions; slowness/small handwriting/shuffle without prominent tremor; dream-acting often first by years; falls, faints, blackouts, Capgras, constipation; memory storage relatively held with visuospatial collapse early (clock and figure tasks).",
    "Diagnosis: consensus logic — dementia + 2 or more core features (or 1 + biomarker) = probable; the four-door collateral history; the pattern over any score; MRI relative medial-temporal sparing; DAT scan reduced uptake where available; polysomnography where the case is unusual; the spousal RBD questions as the free instrument.",
    "The differentials: delirium (no trigger, no resolution, the other doors), late-onset psychosis (age + visual + motor = organic), Alzheimer's (memory-first, visions late), PDD (the timing rule), vascular (stepwise vs smooth-fluctuating), Charles Bonnet (vision loss with intact cognition).",
    "Management: the non-negotiable rule (no haloperidol/risperidone — the wallet card in the local language); rivastigmine as the best-evidenced dementia drug here (donepezil, galantamine alternatives; memantine add-on); the calm visions left un-drugged (reorientation, even lighting, senses treated); quetiapine tiny-dose only when danger demands; levodopa gentle ambition; melatonin-plus-bed-protection for RBD; the faints-falls-constipation tier; family education as the centrepiece.",
    "The Indian tier: recognition late (casualty antipsychotic reactions as the diagnostic event); the three sleep questions as the PG-teaching intervention; DAT/sleep labs scarce — the clinical picture carries the diagnosis; the paradox script as the consultation skill; the spouse with RBD bruises and the misidentified daughter-in-law as the neglected patients; rivastigmine ₹200–450/month generic with the patch far costlier (approx 2026).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "dlb-quiz-1",
      question: "A patient develops dementia, and two years later a shuffling gait. The correct diagnostic label by the one-year rule is:",
      options: ["Dementia with Lewy bodies", "Parkinson's disease dementia", "Alzheimer's with extrapyramidal side effects", "Vascular dementia"],
      correctIndex: 1,
      explanation: "Dementia arising well after (more than a year into) established parkinsonism is PDD; DLB requires dementia before or within a year of motor signs.",
      afterSectionId: "diagnosis",
    },
    {
      id: "dlb-quiz-2",
      question: "The most dangerous reflex in suspected DLB is:",
      options: ["Starting rivastigmine", "Giving haloperidol for hallucinations", "Prescribing physiotherapy", "Giving melatonin at bedtime"],
      correctIndex: 1,
      explanation: "Dopamine blockers can trigger severe, even life-threatening rigidity and collapse; rivastigmine is the evidence-based path, and haloperidol the iatrogenic catastrophe.",
      afterSectionId: "management",
    },
    {
      id: "dlb-quiz-3",
      question: "Hallucinations in DLB, compared with Alzheimer's disease, are:",
      options: ["Rarer and mainly auditory", "More common, well-formed, visual, and earlier", "Only nocturnal", "Always frightening"],
      correctIndex: 1,
      explanation: "Recurrent, detailed visual hallucinations early in the course are the DLB signature; in Alzheimer's they are late and uncommon.",
      afterSectionId: "symptoms",
    },
    {
      id: "dlb-quiz-4",
      question: "Which feature can precede DLB by many years?",
      options: ["Memory loss", "REM sleep behaviour disorder", "Capgras delusion", "Urinary incontinence"],
      correctIndex: 1,
      explanation: "Dream-enactment is one of the earliest manifestations of the synuclein process — often years before cognitive decline; the spouse reports it free.",
      afterSectionId: "mechanism",
    },
    {
      id: "dlb-quiz-5",
      question: "The dementia drug with its strongest evidence in DLB is:",
      options: ["Memantine only", "Rivastigmine (a cholinesterase inhibitor)", "Amitriptyline", "Haloperidol in low dose"],
      correctIndex: 1,
      explanation: "DLB has the deepest cholinergic deficit of the common dementias — and rivastigmine's trials showed improvement in hallucinations, attention and function.",
      afterSectionId: "management",
    },
    {
      id: "dlb-quiz-6",
      question: "A DLB patient's spouse has bruises from the nights. The first-line best-tolerated medication is:",
      options: ["Clonazepam 2 mg", "Melatonin at bedtime", "Quetiapine 100 mg", "Zolpidem"],
      correctIndex: 1,
      explanation: "Melatonin has the gentlest risk profile for dream-enacting sleep; clonazepam helps but risks falls, sedation and breathing problems.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Say the four core clinical features of DLB in order, with one patient-phrase for each.", answer: "(1) Fluctuating cognition with pronounced attention swings — 'good days and bad hours', lucid morning, dazed afternoon, near-delirious evening, back again; (2) Recurrent well-formed visual hallucinations — 'there are two boys again, they don't bother me' (small children in the kitchen, a stranger in the corner, cattle crossing the room); (3) Spontaneous parkinsonism — the shrinking handwriting, the stooped shuffle, the softer voice (prominent early tremor pointing back toward Parkinson's); (4) REM sleep behaviour disorder — 'he fights in his sleep, he once elbowed me hard at 3 a.m.', the dream-enactment that often came first by years. The hook to carry: 'Flips, films, freeze, fights-in-sleep.'", topic: "Diagnosis" },
    { question: "State the one-year rule and what it separates.", answer: "The dementia must come BEFORE or CONCURRENTLY with the parkinsonism for the DLB label: dementia present before or within one year of the motor signs = DLB. Dementia arising more than a year into established Parkinson's disease = Parkinson's disease dementia (PDD) — its own course and label, taught in its own course here. The rule is arbitrary but operational, which is exactly why examiners love it: the same alpha-synuclein process presenting through two doors, and the timing of the dementia against the motor signs decides the name the chart carries.", topic: "Diagnosis" },
    { question: "An elderly patient in casualty is agitated with visual hallucinations, and someone has already written haloperidol. What do you do in the next sixty seconds?", answer: "Stop the syringe and take the four-door history: (1) the fluctuations timeline ('good days and bad hours' for weeks-months, not hours); (2) what the visions look like (well-formed, people or animals, detailed); (3) the gait (slowness, small handwriting, shuffle — and the examination takes ten seconds of walking); (4) the sleep questions to whoever came along ('does he act out dreams? shout in sleep? fallen out of bed?'). Plus the drug-sensitivity history — any past 'collapse after haloperidol' in the chart is a diagnostic gift. If two or more doors are open: DLB is on the table — NO dopamine-blocker; the environment, a familiar face, and if a drug is truly needed, quetiapine at tiny dose with the caution extended. Then write the wallet card before the family leaves.", topic: "Clinical practice" },
    { question: "Which dementia drug class has its best evidence IN DLB specifically, and what does it improve?", answer: "The acetylcholinesterase inhibitors — rivastigmine above all (oral, or patch where affordable): the trials showed measurable improvement in hallucinations, anxiety, attention and daily function in a good fraction of patients. The mechanism is the reason: DLB produces the deepest cholinergic loss of any common dementia (deeper than Alzheimer's), so preserving the remaining acetylcholine fills the emptiest tank — some patients look 'switched back on'. Donepezil and galantamine are reasonable alternatives with similar logic; memantine a modest well-tolerated add-on. And the mirror: anticholinergic drugs (bladder tablets, sedating antihistamines, tricyclics) hit DLB patients doubly hard — they can CREATE the hallucinations they were meant to sedate away.", topic: "Pharmacology" },
    { question: "Name the three sleep questions to the spouse that could transform DLB detection in India.", answer: "'Does he act out his dreams? Does he talk or shout in his sleep? Has he fallen out of bed?' — three questions, thirty seconds, free. They elicit REM sleep behaviour disorder, the synuclein process's earliest visible sign, which can precede DLB or Parkinson's by 5–15 years. In India, sleep clinics are scarce to nonexistent outside metros, so the spouse IS the sleep lab; teaching these three questions to every postgraduate would transform Indian DLB detection — because the answer is almost never volunteered (the bruises are hidden as private matters), but it is almost always answered once asked.", topic: "Indian practice" },
    { question: "What is the safest drug option if a DLB patient's hallucinations are truly dangerous, and what is the gold-standard-evidence option — and why is it rarely used here?", answer: "Safest pragmatic option: quetiapine in tiny doses (12.5–25 mg, cautiously titrated) — weak evidence but the best risk-benefit available in India, with the caution extending (more mildly) to all antipsychotics in this disease. The gold-standard-evidence option: clozapine — the best efficacy data for the hallucinations of Lewy body disease — but it needs the agranulocytosis blood monitoring that makes it tertiary-centre-only, and its sedation and orthostasis hit DLB patients exactly where they are weakest (the faints, the falls). Pimavanserin is the US-approved alternative for Parkinson's psychosis — currently unavailable in Indian practice: know the name, not the prescription. And the first-line answer is often no drug at all: rivastigmine optimised first (the chemistry tier), the calm non-distressing visions left un-drugged.", topic: "Pharmacology" },
    { question: "Give two explanations for 'good days and bad hours' — the disease itself, and the mimic you must always exclude.", answer: "Explanation one — the disease: DLB's core feature IS fluctuating cognition, the cholinergic-deficit attention swinging through the day (lucid mornings, dazed afternoons, near-delirious evenings, and back again); the pattern persists for weeks and months and is the illness's fingerprint, not a new event. The mimic to always exclude — delirium: a worse-than-usual week, a sustained deterioration, or an abrupt change still gets the delirium work-up (urine, sodium, infection, dehydration, drug chart), because superimposed illness swings DLB patients into full delirium and hides inside the disease's own noise. The teaching sentence for families: 'You will have golden mornings and lost evenings; that is the illness, not a new stroke or new madness — AND a bad week still gets the doctor's check.'", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "He sees people who are not there. Is he going mad?", answer: "No. This is a specific brain disease: the perception centres themselves are misfiring, producing pictures as real to him as you are. Most patients are calm about them early. It is a symptom, like a limp." },
    { question: "The doctor started a memory tablet for the visions. Is that a mistake?", answer: "No — that is precisely the logic. The chemical most depleted in this disease is the one those tablets preserve; steadier chemistry means fewer visions. Sedatives are the riskier path here." },
    { question: "Why must everyone know he cannot have haloperidol?", answer: "Because in this disease the older antipsychotics can switch the body into a severe rigid, feverish, collapse-like state. It is not an allergy in the usual sense — it is the disease's wiring — but it behaves like one. A card in the wallet works like an allergy bracelet." },
    { question: "She calls me an impostor. Does she no longer love me?", answer: "The bond is not gone; the recognition wiring is. This misidentification is one of the most typical symptoms of this disease. Stay calm, use your name, keep the routines — the belief fluctuates with the rest of the illness." },
    { question: "He falls for no reason. What can we do?", answer: "Three things together: review every medicine that drops blood pressure, teach slow sitting-to-standing, and make the home fall-proof (rails, lighting, floor mattress). Falls, not the hallucinations, are what send this disease to hospital." },
    { question: "He thrashes at night and I am frightened of being hurt.", answer: "Tell the doctor the exact words 'he acts out his dreams' — that is a core symptom. Practical shields: separate mattresses, padding, removing hard furniture, and medicine options (melatonin is the gentlest; clonazepam helps but watch falls and breathing)." },
    { question: "Some days he is almost his old self. Are we mistaken about the diagnosis?", answer: "No — fluctuation is this disease's fingerprint. Use the good hours deliberately: conversations, walks, small enjoyments. And if a bad week is worse than usual, still ask the doctor to check for infection or dehydration; this illness hides delirium inside its own noise." },
    { question: "Is it Alzheimer's, Parkinson's, or both?", answer: "It is its own disease — a cousin of both. Same protein family as Parkinson's, but arriving through the thinking brain first. That is why movement problems, sleep-acting and faints travel with the memory and perception problems." },
    { question: "Should I get the special scan to be sure?", answer: "The clinical picture — your descriptions of the sleep, the visions, the fluctuations, and any past drug reaction — usually carries the diagnosis. Scans help in unusual cases, but chasing expensive imaging rarely changes the care plan; the care plan is medicine review, blood-pressure management, safety and one prescription." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "McKeith IG et al., DLB Consortium — consensus criteria, especially the 2017 fourth report (core features, biomarkers, the one-year rule; paraphrased)" },
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased diagnostic logic" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.5 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Aarsland D et al. — systematic reviews of cholinesterase inhibitors in DLB, especially the rivastigmine trial evidence for hallucinations and function" },
      { source: "Clozapine in Parkinson's disease psychosis — the efficacy evidence and monitoring requirements that shape its DLB use; pimavanserin trials (US-approved, unavailable in India)" },
    ],
    reviews: [
      { source: "Postuma RB et al. — REM sleep behaviour disorder as prodrome of the synucleinopathies (the years-before literature)" },
      { source: "Antipsychotic sensitivity in DLB — the McKeith-era cohort observation and later safety syntheses (the up-to-half figure, quoted as a range across studies)" },
      { source: "Boeve BF et al. — the clinical phenotyping of fluctuations and sleep in Lewy body disorders" },
      { source: "Melatonin and clonazepam for REM sleep behaviour disorder — treatment reviews" },
      { source: "The Parkinson's-DLB comparative literature — the one-year rule and the alpha-synuclein family concept" },
      { source: "Indian memory-clinic and neuropsychiatric series — late recognition and adverse antipsychotic events in DLB (2010s–2020s)" },
    ],
    patientResources: [
      { source: "The wallet card (in the local language) and the four-scripts package — the instruments this course hands to every family" },
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416), for carer distress and family routing" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the four features as one illness, the wallet card, the visions that need no medicine, the nights and the falls.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The four core features, the one-year rule, the mimic traps and the antipsychotic rule.",
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
      description: "Everything — the casualty discipline, the paradox script, the autonomic craft, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The four doors, the one-year rule, the frequency truth.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite 'flips, films, freeze, fights-in-sleep' and state the one-year rule cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The synuclein spread, the dream-lock, the empty cholinergic tank.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why rivastigmine treats the visions and why haloperidol is the catastrophe." },
    { number: 3, title: "Clinical Practice", description: "The four-door work-up, the mimic traps, the antipsychotic rule, the autonomic tier.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the sixty-second casualty rule, write the wallet card, and manage the falls-and-nights package." },
    { number: 4, title: "Indian Context", description: "The late-recognition tier, the three sleep questions, the paradox script, the neglected spouses.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the paradox script in one minute and teach the three sleep questions forward." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the elderly-visual-hallucinations essay cold and spot every trap in the set." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.5 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "McKeith IG et al., DLB Consortium — consensus criteria, especially the 2017 fourth report (core features, biomarkers, the one-year rule; paraphrased)", sourceType: "guideline", year: "1996–2017", dateReviewed: "2026-09-28" },
    { id: "S3", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased diagnostic logic", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Aarsland D et al. — systematic reviews of cholinesterase inhibitors in DLB, especially the rivastigmine trial evidence for hallucinations and function", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Postuma RB et al. — REM sleep behaviour disorder as prodrome of the synucleinopathies (the years-before-prodrome literature)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Antipsychotic sensitivity in DLB — the McKeith-era cohort observation and later safety syntheses (the up-to-half figure, quoted as a range)", sourceType: "review", year: "1992 onward", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Boeve BF et al. — the clinical phenotyping of fluctuations and sleep in Lewy body disorders", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Melatonin and clonazepam for REM sleep behaviour disorder — treatment reviews", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Clozapine in Parkinson's disease psychosis — efficacy evidence and monitoring requirements shaping DLB use; pimavanserin trials (US-approved, unavailable in India)", sourceType: "trial", year: "1990s–2020s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Indian memory-clinic and neuropsychiatric series — late recognition and adverse antipsychotic events in DLB (2010s–2020s); cost and availability realities (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The four core features: fluctuating cognition with pronounced attention swings ('good days and bad hours'), recurrent well-formed visual hallucinations (typically people or animals, calm and detailed early with insight preserved), spontaneous parkinsonism (prominent early tremor less typical), and REM sleep behaviour disorder — with probable DLB at two or more core features (or one plus biomarker).", grade: "established", sources: ["S2", "S3"] },
    { text: "The one-year rule: dementia before or concurrent with parkinsonism = DLB; dementia more than a year into established Parkinson's = PDD — the operational convention separating the two labels of one alpha-synuclein process.", grade: "established", sources: ["S2"] },
    { text: "Epidemiology: DLB is roughly 4–8% of clinic dementia and up to 10–30% of autopsy series — the discrepancy indicating underdiagnosis in life; onset typically 50–90 mostly after 60; men somewhat more than women; the highest psychiatric presentation rate of any dementia.", grade: "established", sources: ["S1", "S2"] },
    { text: "REM sleep behaviour disorder as prodrome: the loss of REM-atonia (dream-enactment, shouting, thrashing, injuries) can precede DLB or Parkinson's by 5–15 years — among the most valuable early-warning signs in neurodegeneration, elicitable by three spousal questions.", grade: "established", sources: ["S5", "S7"] },
    { text: "The cholinergic architecture: DLB produces the deepest cholinergic deficit of the common dementias — the basis both for the attention-perception-arousal fluctuations and for rivastigmine's best-in-class evidence (hallucinations, anxiety, attention and function measurably improving in a good fraction; donepezil and galantamine reasonable alternatives; memantine a modest add-on).", grade: "established", sources: ["S4"] },
    { text: "The antipsychotic catastrophe: dopamine-blocking agents (haloperidol, risperidone and other high-potency drugs) can trigger severe rigidity, hyperthermia, confusion and malignant-syndrome-like collapse — with up to half of DLB patients showing some degree of sensitivity; the caution extends more mildly to all antipsychotics; the wallet card is the standard countermeasure.", grade: "established", sources: ["S6"] },
    { text: "The symptomatic tier for dangerous hallucinations: quetiapine 12.5–25 mg cautiously titrated as the pragmatic best-risk-benefit default in India (weak evidence); clozapine the best-efficacy but blood-monitoring, tertiary-centre-only tier; pimavanserin the US-approved name to know; the first-line answer for calm visions being rivastigmine optimised and no sedative at all.", grade: "supported", sources: ["S9", "S6"] },
    { text: "The supportive-tier management: RBD (bed protection plus melatonin 3–12 mg best-tolerated; clonazepam effective with sedation-falls-breathing cautions); autonomic faints (medicine review, stockings, salt, sit-before-standing); constipation (impaction as hidden agitation cause); swallowing surveillance (aspiration a leading cause of death); levodopa tried gently with disappointing response and hallucination-worsening risk.", grade: "established", sources: ["S8", "S7"] },
    { text: "The diagnostic instruments: the four-door collateral history (fluctuations, visions, sleep, drug-reactions); pattern-over-score cognitive testing (clock and figure collapse, swinging attention, memory relatively held); MRI relative medial-temporal sparing; DAT scan reduced uptake as the biomarker; polysomnography where available with the spousal history accepted clinically.", grade: "established", sources: ["S2", "S7"] },
    { text: "The Indian tier: late recognition dominates (often after an antipsychotic reaction — sometimes the catastrophic event itself leading to diagnosis); the parallel under-detected DLB population inside Parkinson's OPDs; scarce sleep clinics making the three spousal questions the detection instrument; the paradox script ('the memory tablet treats the visions') as the consultation skill; rivastigmine generic affordable (₹200–450/month, approx 2026).", grade: "supported", sources: ["S10"] },
    { text: "The differentials owned: the unresolving 'delirium' (no trigger, no resolution, the other doors open); late-onset 'psychosis' (age + visual modality + motor signs = organic); Alzheimer's (memory-first, visions late rare); vascular (stepwise); Charles Bonnet (vision loss with intact cognition) — with any worse-than-usual week still getting the delirium work-up inside the disease's own noise.", grade: "established", sources: ["S1", "S2"] },
  ],
};
