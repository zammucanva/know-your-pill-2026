import type { PsychiatryCourse } from "./types";

/**
 * HUNTINGTON'S DISEASE NEUROPSYCHIATRY — canonical Psychiatry course
 * (migration batch 6, Group A — neurocognitive disorders, part 1 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/huntingtons-neuropsychiatry.md — untouched
 * foundation), re-researched against current guidance (the
 * Enroll-HD/COHORT natural-history programmes, the PREDICT-HD
 * prodrome literature, the predictive-testing counselling consensus,
 * the tetrabenazine depression caution) with per-claim provenance.
 *
 * Drug routes: sertraline and escitalopram (the motor-neutral
 * SSRI-first tier for irritability, depression and obsessive
 * features) have KYP lessons and are linked; tetrabenazine, the
 * antipsychotic trade, valproate and the PGT-M/genetic tier have no
 * KYP lessons and are recorded in contentGaps, never invented.
 */
export const huntingtonsNeuropsychiatryCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "huntingtons-neuropsychiatry",
  title: "Huntington's Disease Psychiatry",
  shortName: "Huntington's",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Huntington's Disease Psychiatry"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The family disease: chorea, mood change and dementia on one autosomal dominant gene",
  summary:
    "Huntington's disease is an autosomal dominant neurodegenerative illness in which chorea, psychiatric disturbance and subcortical dementia travel together over 15–20 years. Psychiatry comes first: mood and behaviour changes often arrive a decade before the movement disorder.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Explain autosomal dominant inheritance and anticipation in one minute each.",
    "Recite the triad (motor / psychiatric / cognitive) and give the typical onset-to-death timeline.",
    "Describe the psychiatric sequence: irritability, depression, apathy, impulse loss, obsessive features, psychosis (uncommon).",
    "Explain the subcortical dementia profile (processing speed, executive, memory-to-cue) and why bedside memory screens mislead.",
    "Outline the predictive-testing counselling protocol and its ethical anchors (adult autonomy, no testing minors, confidentiality within families).",
    "Manage the behavioural and motor interface: SSRI-first prescribing, tetrabenazine's depression trap, cautious antipsychotics.",
    "Set up the Indian family plan: caregiving rosters, marriage-genetic questions, disability certification, genetic referral for loaded trees.",
  ],
  quickFacts: [
    { label: "The genetics", value: "CAG repeat, chromosome 4, autosomal dominant", detail: "One spelling error in huntingtin: expanded repeats (≥36–40, diagnostic thresholds around 40); one affected parent → 50% risk per child" },
    { label: "The anticipation", value: "Longer repeat, earlier onset — especially paternal", detail: "The repeat lengthens when passed father-to-child: children can fall ill earlier than the parent; juvenile disease (before 20) is usually paternal with very long repeats" },
    { label: "The triad", value: "Moves, Moods, Mind", detail: "Chorea → psychiatric prodrome → subcortical dementia; risk figures as '50-50, 36-and-up, 15-to-20'" },
    { label: "The prodrome", value: "Psychiatry first, a decade before chorea", detail: "Irritability with low frustration tolerance, depression, obsessive features: the missed-diagnosis window that arrives at the psychiatric OPD" },
    { label: "The bedrock sign", value: "Striatal (caudate) atrophy — 'boxcar ventricles'", detail: "The deep gatehouse dies: chorea is movement RELEASED (like FTD's disinhibition), impulsivity the same failing for behaviour" },
    { label: "The suicide truth", value: "Elevated at EVERY stage", detail: "Prodrome, diagnosis disclosure, early symptomatic years: ask directly, every visit; the thought can be a symptom" },
    { label: "The prescribing trap", value: "Tetrabenazine flags depression and suicidality", detail: "The chorea-suppressor depletes dopamine: screen and stabilise mood first, re-ask about despair at every visit" },
    { label: "The test rule", value: "Counselling before, support during and after", detail: "The choice to know is the patient's alone: never test minors, never test for third parties (employer, prospective spouse's family), never disclose without consent" },
  ],
  knowledgeGraph: [
    { label: "Frontotemporal Dementia", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The midlife 'personality change' cousin and the shared early-legal-planning urgency: plus the release logic (behaviour there, movement here)" },
    { label: "Dementia in Parkinson's Disease", type: "condition", href: "/psychiatry/parkinsons-dementia/", note: "The other subcortical-frontal dementia, and the antipsychotic trade taught from the other side" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The cortical amnestic contrast: storage fails there, retrieval cues work here" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The sudden-worsening work-up on any dementing brain, and the tardive-dyskinesia confounder's home discipline" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The obsessive-like subgroup of the prodrome, and the SSRI tier shared by both" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The prodrome's commonest treatable member, with the suicidality screen attached" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The mood-instability differential of the midlife presentation" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The striatal chemistry: its depletion treats chorea and darkens mood; the tetrabenazine trade" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The early depletion behind irritability and depression: the SSRI-first tier's reason" },
    { label: "Striatum", type: "brain-region", href: "#brain", note: "The deep gatehouse whose dying cells release movement and impulse alike" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI-first, motor-neutral tier for irritability, depression and obsessive features" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The alternative SSRI of the same first-line tier" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry Huntington's. The deep gate that fails: deep in the brain sits the striatum; the gatehouse that selects which movements, thoughts and impulses get through and which are quietly suppressed. In Huntington's, that gatehouse's cells die. What we call chorea, the dance of the limbs, is NOT movement being created; it is movement being RELEASED, in the same way disinhibition in FTD releases behaviour. When the gate also fails for behaviour: impulses surface unfiltered (sudden anger, blurted remarks), routines disintegrate (cannot sequence a recipe), and eventually both movement and mind stream unchecked. The slow executive starvation: the striatum is the frontal lobes' executive assistant; the part that actually runs a plan step-by-step while the frontal cortex sets the goal. As the assistant dies, goals remain but execution collapses: the patient KNOWS he should take his medicines, INTENDS to, and cannot run the sequence. Memory storage (hippocampal) is spared until late, which is why memory screens look reassuringly normal while the household is falling apart: subcortical dementia in one image: the filing system works; the office manager is starving. The test that changes families before it changes patients: unlike any other common neuropsychiatric disease, the diagnosis can precede symptoms by decades; a blood test can tell a 28-year-old at-risk person 'you carry the expansion'. That knowledge cannot currently change the disease's course; it changes careers, marriages, childbearing and self-image. Hence the internationally agreed scaffolding: counselling before, support during, support after, and the absolute rule that the choice to know is the patient's alone.",
    steps: [
      "The expanded CAG repeat in huntingtin (chromosome 4) misfolds and accumulates; the mutant protein is toxic to the cells that hold it.",
      "The striatal gatehouse (caudate and putamen) dies first: movement released (chorea), impulse released (disinhibition), habit disintegrated (sequencing failure).",
      "The frontal-striatal executive assistant starves: goals remain, execution collapses. The subcortical dementia where memory storage holds while management fails.",
      "Serotonergic depletion arrives early (depression, irritability): the SSRI-first tier's reason and the tetrabenazine trap's mirror.",
      "The repeat lengthens across generations (anticipation, especially paternal): earlier onset, harder course; juvenile disease when very long repeats arrive before 20.",
      "The test that precedes symptoms by decades: counselling before, support during and after; the choice to know belongs to the patient alone.",
      "The late-stage conversion: chorea may give way to rigidity and bradykinesia; the swallowing failure and weight loss of the movement burning calories while intake falls.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "striatum", name: "Striatum (caudate and putamen — the gatehouse)", role: "The deep selector of movement, habit and impulse whose dying cells release chorea and disinhibition alike; its atrophy ('boxcar ventricles') the imaging signature.", grade: "established" },
    { id: "frontal-striatal", name: "Fronto-striatal circuits", role: "The executive assistant to the frontal lobes: its disconnection underlies apathy, impulsivity, irritability and the executive dementia.", grade: "established" },
    { id: "hypothalamus-weight", name: "Hypothalamic and weight circuits", role: "The late-stage weight loss and sleep disruption beyond the pure mechanics of movement and swallow.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Depleted EARLY: the depression, irritability and obsessive features of the prodrome; the SSRI-first, motor-neutral tier's target.", grade: "established", drugConnection: "Sertraline and escitalopram carry KYP lessons: the first-line psychiatric prescription in this disease." },
    { name: "Dopamine", symbol: "DA", role: "The striatal movement chemistry: depleting it suppresses chorea and darkens mood (the tetrabenazine trade); blocking it converts movement chaos toward parkinsonian collapse (the antipsychotic trade).", grade: "established" },
    { name: "GABA", symbol: "GABA", role: "The striatal medium-spiny neurons' own transmitter: the population that dies; the system whose loss unbalances the direct and indirect pathways into chorea.", grade: "established" },
    { name: "Acetylcholine", symbol: "ACh", role: "Secondarily involved in the cognitive slowing; anticholinergic load worsens it (the shared dementia caution).", grade: "proposed" },
  ],
  pathways: [
    {
      id: "gate-failure-pathway",
      name: "The deep gate that fails (release, not creation)",
      steps: [
        { label: "The gatehouse cells die", detail: "Striatal neurons (caudate and putamen) degenerate under the mutant huntingtin load" },
        { label: "Movement is released", detail: "Chorea: the dance of the limbs is movement unfiltered; worse with stress, absent in sleep" },
        { label: "Impulse is released", detail: "Sudden anger, blurted remarks, disinhibition: the same failing gate for behaviour" },
        { label: "Habit disintegrates", detail: "Sequencing collapses: cannot run a recipe, a medicine schedule, a morning routine" },
      ],
      clinicalManifestation: "The gentle man whose rages shocked the family years before any dance appeared: released, not chosen.",
      grade: "established",
    },
    {
      id: "executive-starvation-pathway",
      name: "The slow executive starvation (subcortical dementia)",
      steps: [
        { label: "The assistant dies", detail: "Fronto-striatal circuits disconnect: the executive assistant that ran plans step-by-step" },
        { label: "Goals remain, execution collapses", detail: "Knows he should take his medicines, intends to, cannot run the sequence" },
        { label: "The filing system works", detail: "Hippocampal storage spared until late: memory screens reassure falsely while the household falls apart" },
        { label: "Retrieval is slow but cueable", detail: "The signature at the bedside: prompt with a cue and the answer arrives; the office manager starving, not the archive burning" },
      ],
      clinicalManifestation: "The 'normal memory test' in a patient who can no longer sequence a recipe: the exam that missed the disease.",
      grade: "established",
    },
    {
      id: "anticipation-pathway",
      name: "The lengthening repeat (anticipation)",
      steps: [
        { label: "The repeat expands", detail: "The CAG stretch lengthens when transmitted, most often through the paternal line" },
        { label: "Onset arrives earlier", detail: "Children fall ill before the parent's age at onset: sometimes decades before" },
        { label: "The juvenile form", detail: "Very long repeats before 20: parkinsonian stiffness and seizures instead of chorea, school decline; usually paternal" },
        { label: "The family map redraws", detail: "Three generations of 'the curse' explained by one mechanism: a fact of the gene, not of anything the family did" },
      ],
      clinicalManifestation: "'Why does my son seem worse than my brother was at that age?': the anticipation question every counsellor must answer plainly.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "prodrome", time: "Up to a decade before chorea", title: "The psychiatric prodrome", description: "Irritability with low frustration tolerance, depression, obsessive features: the family-damaging years blamed on 'work stress' or the spouse; suicidality already elevated; the missed-diagnosis window psychiatry owns.", phase: "onset" },
    { id: "motor-onset", time: "Typically 35–45", title: "The dance declares", description: "Restlessness, piano-playing fingers, facial grimacing, dropped objects, clumsy gait; the slow sticky saccades; dysarthria, with the psychiatric tier continuing underneath.", phase: "onset" },
    { id: "established-disease", time: "Years 5–15", title: "The triad at full pitch", description: "Chorea worsens with stress and vanishes in sleep; apathy replaces the storms (misread as 'finally calm'); the subcortical dementia deepens; insight persists painfully into mid-disease.", phase: "peak" },
    { id: "late-stage", time: "Years 15–20", title: "The quiet conversion", description: "Chorea gives way to rigidity and bradykinesia; swallowing fails; weight loss becomes severe (movement burning calories while dysphagia limits intake); psychiatric loads deliberately reduced: palliative comfort over completeness.", phase: "duration" },
    { id: "the-end", time: "Typically 15–20 years from onset", title: "The enders", description: "Aspiration pneumonia, cachexia, restraint-free comfort: the palliative sentence that lands: 'we are not abandoning you; we are protecting his comfort now.'", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Prevalence roughly 5–10 per 100,000 in Western European populations; lower in East Asia and, as far as regional data go, in India. Onset typically 35–45 (the years of jobs, marriages and school-going children); juvenile onset (before 20, with very long repeats) in a small subgroup: bradykinesia and rigidity instead of chorea, school failure, seizures. Mean survival 15–20 years from first symptoms; suicide and aspiration pneumonia are landmark causes of death; suicidal ideation elevated several-fold over general population rates.",
    indianPrevalence: "Numbers are small but real: clusters reported from Kerala, Maharashtra, Bengal and Tamil Nadu in older series; under-detection is the rule, with families carrying the 'family curse' label across generations without a name for it. The predictive test is available through a handful of centres; the counselling protocol around it is frequently skipped in practice: the exact failure this course argues against.",
    lifetimeRisk: "Each child of an affected parent: 50-50, a coin flip decided at conception; the repeat lengthening on transmission (especially paternal) making children's onset earlier: the anticipation the family map must include.",
    genderRatio: "Equally inherited by sons and daughters (autosomal dominant); anticipation's paternal bias makes the father-to-son and father-to-daughter lines the earlier-onset trees.",
    ageOfOnset: "Typically 35–45; juvenile before 20 (usually paternal, very long repeats, parkinsonian not choreic); the midlife window that makes every case a family and financial emergency.",
    indianNotes: "Marriage-discrimination reality: unaffected descendants of affected parents face marriage-market obstacles once family history is known; families therefore actively hide the diagnosis, one more reason genetic counselling must address confidentiality in Indian terms, not just Western ones.",
  },
  etiology: [
    { category: "genetic", factor: "The whole story of cause", details: "An expanded CAG repeat (≥36–40, diagnostic thresholds around 40) in the huntingtin gene on chromosome 4; one affected parent → 50% risk per child; anticipation = longer repeats transmitted → earlier onset, especially through the paternal line; juvenile disease usually from paternal transmission of very long repeats." },
    { category: "biological", factor: "The cascade", details: "Mutant huntingtin protein misfolds and accumulates; striatal neurons die first; fronto-striatal circuits disconnect: the 'habit and gate' system fails (chorea = the gate failing to filter movement; impulsivity = the same failing for behaviour)." },
    { category: "biological", factor: "The neurochemical sequence", details: "Serotonin depletion early (depression, irritability, the SSRI tier's reason); later widespread involvement; dopamine's striatal chemistry making its depletion a trade (chorea down, mood down): the tetrabenazine trap." },
    { category: "social", factor: "The Indian social risks (the preventable harms)", details: "Concealment, delay of first consultation until chorea is obvious, and children of affected parents reaching marriageable age without any counselling: the preventable harms live in these gaps; no environmental modifiers of onset are proven (physical activity and engaged routine help function, not fate)." },
  ],
  symptomClusters: [
    {
      category: "1. Psychiatric (often first, and first missed)",
      symptoms: ["Irritability and low frustration tolerance: disproportionate anger at minor domestic triggers, slamming, shouting; the earliest and most family-damaging symptom, often blamed on 'work stress' or the spouse", "Depression: common, genuine, treatable, with suicidal ideation ELEVATED at every stage (before diagnosis, at disclosure, in early symptomatic years): ask directly, every time", "Apathy: as the disease advances, flat initiative replaces storms; families often misread this as 'finally calm'", "Impulse-control and behavioural disintegration: sexual disinhibition, spending, reckless driving, aggressiveness out of character; obsessive-compulsive-like rituals in a subgroup", "Psychosis: genuinely UNCOMMON (unlike its exam folklore prominence), when present, treat carefully (antipsychotics may help symptoms but worsen motor function)", "Anxiety, insomnia, and later emotional lability"],
    },
    {
      category: "2. Motor",
      symptoms: ["Early: restlessness, fidgeting, piano-playing fingers, facial grimacing, clumsy gait, dropped objects", "Established: chorea worsens with stress, disappears in sleep; abnormal eye movements (slow, 'sticky' saccades, a clinical signature); dysarthria (speech loses clarity and rhythm)", "Late: chorea may give way to rigidity and bradykinesia; swallowing fails; weight loss severe (movement burning calories while dysphagia limits intake)", "Juvenile form: parkinsonian stiffness, seizures, school decline, before 20; usually paternal transmission of long repeats"],
    },
    {
      category: "3. Cognitive (subcortical)",
      symptoms: ["Slowing, sequencing failure, poor planning and abstraction; visuospatial difficulty", "Memory retrieval impaired but CUEABLE: storage intact until late, the reason bedside memory screens mislead", "Insight often persists painfully into mid-disease: the patient watching himself fail; the suicidality's companion"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "Clinical + genetic (the one-settler test)",
      code: "Triad + family history → CAG confirmation",
      criteria: [
        "The clinical triad (motor / psychiatric / cognitive) plus family history → genetic confirmation: CAG repeat length on blood; the one neuropsychiatric disease where a single test settles the diagnosis.",
        "Borderline and intermediate repeat ranges (36–39) exist, one reason testing belongs in counselled settings.",
        "Presentations to psychiatry FIRST: irritability, depression, obsessive features or a midlife 'personality change' with a positive family tree, before any visible chorea.",
        "The high-yield family-history question: 'anyone who wasted away or went strange and died before sixty?'",
      ],
      duration: "The prodrome can precede chorea by a decade: the timeline's shape is the diagnostic story itself.",
      indianNote: "Families often know it only as the inherited 'wasting-and-madness' running in the line: naming the disease, drawing the 50-50 coin-flip diagram, and explaining anticipation converts three generations of superstition into an actionable map.",
    },
    {
      system: "Examination and the rule-outs",
      code: "The fingerprints and the mimics",
      criteria: [
        "Examination pearls: observe the hands through the whole interview (piano-playing); ask him to hold the tongue protruded (cannot sustain); slow and impersistent saccades on eye-movement testing; tandem gait difficulty; serial handwriting samples (deteriorating).",
        "Imaging: caudate atrophy ('boxcar ventricles') on CT/MRI supports but never replaces the test.",
        "Rule-outs in midlife chorea BEFORE blaming Huntington's: thyrotoxicosis, systemic lupus, neuroacanthocytosis (blood smear), tardive dyskinesia from psychiatric prescriptions (the classic iatrogenic confounder in a psychiatric cohort), and Wilson's disease in the young (under 40: always check, treatable).",
        "The predictive-testing protocol for asymptomatic at-risk adults: dedicated counselling sessions, neurological and psychological assessment, discussion of motives (childbearing? career? marriage pressure?), a cooling-off period, results in person with support arranged; the partner included where the patient wishes.",
        "The three hard rules: NEVER test minors; NEVER test for third parties (employer, prospective spouse's family); NEVER disclose one person's result to relatives without consent: the family-confidentiality trap unique to dominant diseases.",
      ],
      duration: "The protocol's cooling-off period and staged sessions are the diagnosis's ethical timing, never a same-day result.",
      indianNote: "The marriage-alliance request ('just check the boy before the alliance') is precisely where the third-party rule bends if nobody guards it: refuse, meet both families, counsel, document.",
    },
  ],
  severityScales: [
    {
      name: "The triad ladder",
      fullName: "Motor-psychiatric-cognitive staging",
      measures: "Which of the three streams is carrying the disease's current weight.",
      ranges: [
        { min: 0, max: 0, severity: "Prodromal (Moods only)", action: "Irritability, depression, obsessive features with the motor fingerprints hiding at the bedside; the family tree question and the naming consultation; SSRI-first treatment begun" },
        { min: 1, max: 1, severity: "Early (Moves + Moods)", action: "Chorea visible, psychiatric tier continuing; the legal-financial package NOW (property, POA, insurance, disability certification while executive function is intact); the caregiving roster built" },
        { min: 2, max: 2, severity: "Advanced (all three + the conversion)", action: "Chorea toward rigidity, swallow failing, apathy dominant; psychiatric loads deliberately reduced; palliative referral early: the comfort sentence that lands" },
      ],
      indianNote: "The Indian stage-marks are legal and social: the property transferred while planning still works, the disability certificate obtained, the marriage questions counselled. Each stage has its family engineering.",
    },
    {
      name: "The suicidality ladder",
      fullName: "The every-visit risk staging",
      measures: "The question asked directly at every single contact: the disease's landmark risk.",
      ranges: [
        { min: 0, max: 0, severity: "No ideation (this visit)", action: "Documented and re-asked next visit: the prodrome, the disclosure and the early years are the elevated windows" },
        { min: 1, max: 1, severity: "Passive thoughts ('better off dead')", action: "Same-day safety planning, treatment adjustment, the family briefed; the thought treated as a symptom, not a statement" },
        { min: 2, max: 2, severity: "Active ideation or plan", action: "The full suicide-risk protocol: means restriction (weapons and vehicle keys already relocated at first impulsivity), intensive follow-up, the treating team informed across neurology and psychiatry" },
      ],
      indianNote: "The Indian family's instinct is to manage despair privately. The every-visit question and the same-day response are the counter-architecture this course installs.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Tardive dyskinesia", distinguishingFeatures: "The psychiatric-cohort's own iatrogenic chorea: the prescription history decides; antipsychotic exposure preceding the movements, orofacial predominance, the chart review before the family tree.", keyDifferentiator: "The iatrogenic confounder: in a psychiatric patient with chorea, OUR prescriptions are the first suspect before the gene." },
    { condition: "Wilson's disease (the young, the treatable)", distinguishingFeatures: "Under 40 with movement disorder: copper studies mandatory; treatable; the Kayser-Fleischer ring and the liver tier.", keyDifferentiator: "Always check in young chorea: the treatable mimic whose miss is the unforgivable one." },
    { condition: "Thyrotoxicosis", distinguishingFeatures: "The tremor-plus-chorea of the overactive thyroid: systemic signs, the TSH that settles it.", keyDifferentiator: "The blood test that costs nothing and excludes the gland before the gene is blamed." },
    { condition: "Neuroacanthocytosis and SLE-chorea", distinguishingFeatures: "The blood smear and the autoimmune panel: the rarer mimics of midlife movement.", keyDifferentiator: "The smear and the serology: the systematic rule-out list before genetic attribution." },
    { condition: "Frontotemporal dementia (the midlife personality change)", distinguishingFeatures: "Conduct and language first with memory preserved and NO chorea: the frontal atrophy pattern; Huntington's carries the motor fingerprints and the family tree.", keyDifferentiator: "The bedside motor signs (tongue, saccades, fingers) plus the psychiatric-motor CO-OCCURRENCE separate the two midlife decliners." },
    { condition: "Schizophrenia / personality disorder (the mislabel)", distinguishingFeatures: "The 38-year-old with 'unmanageable temper' and a bad family tree labelled psychiatric: the exam's favourite trap.", keyDifferentiator: "The family-history question ('wasted away or went strange before sixty?') plus the motor mini-signs hiding in the interview." },
  ],
  management: [
    { category: "lifestyle", name: "The multidisciplinary spine", description: "Neurology (motor, genetic), psychiatry (mood, behaviour, suicidality), genetic counselling, speech and swallow therapy, physiotherapy, dietitian (high-calorie, texture-modified feeding), social work, and, from the start, family planning for the caregiving decade ahead.", whenToUse: "From diagnosis: the combined-clinic model where it exists, or one named coordinating doctor per family.", indianContext: "Care fragments in India (neurologists treat chorea, psychiatrists treat depression, genetic centres test, nobody owns the family). The single best service innovation is the combined Huntington's clinic (a handful in metros); short of that, the named coordinating doctor." },
    { category: "pharmacotherapy", name: "Psychiatric prescribing with the movement disorder in mind", description: "FIRST-LINE: SSRIs (sertraline, escitalopram) for irritability, depression, obsessive-type symptoms and mild impulsivity; genuinely effective and motor-neutral; titrate properly, partial response common and worth pursuing. Mood instability persisting: careful addition of an anticonvulsant mood stabiliser (valproate-type, with pregnancy counselling) or low-dose antipsychotic where danger overrides. Antipsychotics (olanzapine/risperidone low-dose, quetiapine): ONLY for psychosis, dangerous impulsivity or severe chorea; they blunt chorea slightly while risking parkinsonism, swallowing deterioration and sedation: a trade, not a treatment. Tetrabenazine for disabling chorea: effective, but depression and suicidality are FLAGGED side effects. Screen and stabilise mood first, re-ask about despair at every visit. Benzodiazepines sparingly, short courses (imbalance, cognitive dulling). Late-stage: antidepressant and antipsychotic loads often deliberately REDUCED as swallowing and consciousness decline; palliative comfort over psychiatric completeness.", whenToUse: "Symptom-directed, movement-aware, from prodrome to late stage.", indianContext: "Sertraline under ₹100–150/month generic (approx 2026); tetrabenazine costlier and variable in availability; the real costs are the caregiver decade and the genetic test." },
    { category: "lifestyle", name: "Behavioural management: the household engineering", description: "Written routines, one instruction at a time, calm low-stimulation environments (chorea and irritability both worsen with crowds and confrontation); do NOT argue with impulse-driven outbursts: step away, return calm: what is released by a failing gate cannot be lectured back. Safety: cooking and driving decisions made early and kindly; weapons and vehicle keys relocated at the first signs of impulsivity. Weight and swallow: texture-modified high-calorie diet, supervised meals, upright posture, hand-feeding techniques over early tube decisions, with honest late-stage conversations. Caregiver architecture: the spouse is usually similar age; the caregiving decade belongs to the children: build the roster early; respite the scarcest and most necessary prescription.", whenToUse: "From diagnosis, reviewed at every visit: the household engineering carries more function than the prescription pad in this disease.", indianContext: "The Indian joint family is the roster if it is organised: the named-children schedule, the respite rotation, the meal supervision tier; engineered before the crises, not during them." },
    { category: "psychotherapy", name: "Genetic and family work", description: "Counselling for at-risk adults (the full protocol) plus practical Indian additions: whom in the extended family to tell, how to answer marriage-related enquiries honestly without injustice, and how to prevent covert testing pressure. Referral for PGT-M (preimplantation genetic testing) exists in a few Indian private fertility centres for gene-positive couples: expensive, but a real option to mention without overselling. Juvenile-form families need school liaison and seizure management with paediatric neurology.", whenToUse: "From diagnosis, and for every at-risk adult relative who asks. The counselling is the treatment for the family half of this disease.", indianContext: "The marriage-discrimination reality means confidentiality must be addressed in Indian terms; the at-risk adult who does NOT want to know, whose alliance is being screened by the other family, is the recurring dilemma: protect the right not to know, refuse third-party testing, counsel both families, document." },
  ],
  safety: {
    redFlags: [
      "Any suicidal statement ('I'd be better off dead'): same-day response: the risk is elevated at every stage and the thought can be a symptom",
      "A 38-year-old 'temper problem' with a 'wasted away before sixty' family tree: the motor fingerprints checked at the next interview",
      "New impulsivity (reckless driving, spending, aggression out of character): weapons and vehicle keys relocated that week, kindly and early",
      "Marriage-alliance testing pressure on an at-risk adult: the third-party request refused, both families counselled, documented",
      "Weight loss accelerating with swallow changes: the texture-modified, high-calorie, supervised-meal tier now; aspiration the endgame to out-engineer",
      "Juvenile decline (school failure, stiffness, seizures before 20): paediatric neurology co-management with the family tree drawn",
    ],
    urgentGuidance:
      "The order of operations: (1) the suicide question asked directly at EVERY visit, with same-day safety planning for any positive; (2) the family-history question at every midlife psychiatric presentation ('anyone who wasted away or went strange before sixty?'); (3) the bedside motor fingerprints hunted in the interview (tongue protrusion, saccades, piano-playing fingers, serial handwriting); (4) the rule-outs before genetic attribution (tardive dyskinesia, Wilson's under 40, thyrotoxicosis); (5) the legal-financial package while executive function is intact (property, POA, insurance before formalisation wherever legally possible, disability certification); (6) the counselling protocol for every at-risk adult, never minors, never third parties, never disclosure without consent; (7) palliative referral early, with the sentence that lands: 'we are not abandoning you; we are protecting his comfort now.'",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The SSRI-first, motor-neutral first line",
      rationale: "For irritability, depression, obsessive-type symptoms and mild impulsivity: genuinely effective and motor-neutral; the psychiatric prescription that treats the prodrome without touching the movement disorder. The early serotonergic depletion is its mechanism; proper titration with partial response pursued is its craft.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-directed: the SSRI treats the mood-irritability tier, not the underlying disease; the movement and genetic tiers follow their own management.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The alternative SSRI of the same first-line tier",
      rationale: "The second member of the motor-neutral SSRI pair: chosen on tolerability and comorbidity, with the same first-line position ahead of the anticonvulsant and antipsychotic tiers.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Same tier and framing as sertraline: the first prescription in a disease where most other psychiatric drugs trade movement for mind.",
    },
  ],
  contentGaps: [
    "Tetrabenazine (the chorea-suppressor with its flagged depression and suicidality cautions) has no KYP drug lesson. Its trade-offs are taught here, the route never invented.",
    "The antipsychotic tier (olanzapine, risperidone low-dose, quetiapine) (the trade-not-treatment option for psychosis, dangerous impulsivity or severe chorea) has no KYP lessons.",
    "Valproate-type anticonvulsant mood stabilisers (the persisting-instability tier, with pregnancy counselling) have no KYP lessons.",
    "PGT-M (preimplantation genetic testing, available in a few Indian private fertility centres) and the genetic test itself: the counselling architecture lives in this course, the routes never invented.",
  ],
  patientGuide: {
    whatIsIt:
      "Huntington's disease is an inherited brain illness caused by a single spelling error in one gene: a repeated stretch of DNA that slowly destroys a deep part of the brain (the striatum) that selects which movements, impulses and habits get through. Over 15–20 years it brings together a movement disorder (chorea, the dance-like involuntary movements), psychiatric disturbance (irritability, depression, apathy) and a slowing of thinking. Because the gene is dominant, each child of an affected parent has a 50-50 chance of carrying it: a coin flip decided at conception. The psychiatric symptoms often arrive YEARS before the movements; the two are one disease.",
    whatCausesIt:
      "One gene, on chromosome 4, with a repeated DNA stretch (CAG repeats) that is too long. The repeated stretch can lengthen further when passed from father to child, so children can fall ill EARLIER than the parent did (anticipation). Nothing the family did, ate or failed to do caused it, and no environmental change has been proven to alter the age it starts. The disease is not contagious and being gene-positive is nobody's fault.",
    symptoms:
      "The mind and mood first, often for years: disproportionate temper at small triggers, genuine depression (with a real risk of suicide that must be asked about every visit), anxiety and poor sleep, obsessions in some, and (as the disease advances) a flattening of initiative that families misread as 'finally calm'. The movements: restlessness, drumming fingers, facial grimacing, clumsiness, dropped objects, then the chorea (worse with stress, gone in sleep), speech losing clarity, and the eyes moving slowly and stickily. The thinking: plans dissolve and sequencing fails while memory storage holds. The person knows what he should do and cannot run the sequence. Later: stiffness replacing the dance, swallowing trouble and weight loss.",
    treatment:
      "Nothing yet cures the underlying disease, and nearly everything that hurts the family can be eased. The temper, depression and obsessive symptoms genuinely respond to SSRI medicines that do not worsen the movements. Chorea medicines exist but carry a mood cost: a trade weighed carefully with the doctor. The household plan matters as much as the prescription: written routines, one instruction at a time, calm environments, safety decisions (cooking, driving, keys) made early and kindly, texture-modified high-calorie meals with supervision, and the caregiving roster built BEFORE the crisis. The family's future is protectable: counselling, the predictive test for adults who choose it, and legal-financial planning while planning still works.",
    selfHelp: [
      "The every-visit rule: any talk of being 'better off dead' is reported the same day. This illness carries a high suicide risk and the thought can be a symptom, not a statement.",
      "Build the written routine: same wake, meals, medicines and rest times; the failing gate runs on rails the household lays.",
      "One instruction at a time, calmly; never argue with a released impulse: step away, return calm; what the disease releases cannot be lectured back.",
      "The safety tier early and kindly: cooking supervision, the driving conversation, weapons and vehicle keys relocated at the first sign of impulsivity.",
      "High-calorie, texture-modified meals, upright posture, unhurried supervision: the movement burns calories while the swallow limits intake; the weight chart matters.",
      "Ask for the caregiving roster meeting NOW: the spouse is ageing too; the decade belongs to the children: named schedules, respite built in, written down.",
      "The legal package while planning still works: property, power of attorney, insurance arranged before formalisation wherever legally possible, disability certification initiated.",
      "For the at-risk adult: the choice to know is yours alone; counselling first, always; never a test for a third party, never for a minor.",
    ],
    whenToSeekHelp: [
      "Any suicidal statement: same-day contact; the risk is elevated at every stage of this illness",
      "A midlife 'temper problem' or personality change with any family history of 'wasting away before sixty': the movement check with the psychiatric review",
      "New clumsiness, dropped objects, fidgeting or facial grimacing under a psychiatric picture: the examination that looks for the fingerprints",
      "Marriage-alliance pressure for a 'blood test': the treating doctor's counselling room, not the local laboratory",
      "Swallowing difficulty, choking, accelerating weight loss: the texture and supervision review now",
      "The caregiver's own collapse: the roster's respite is a prescription, not an indulgence",
    ],
    indianResources: [
      "The combined Huntington's clinic where one exists (metros), or one named coordinating doctor per family: the fragmentation's fix",
      "Genetic counselling centres (a handful nationally): the protocol before and after the test, never skipped",
      "Disability certification through the government pathway: initiated early because processing takes months",
      "Tele-MANAS 14416 (24×7, free), for the caregiver's distress, the at-risk relative's deliberations, the family's routing",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific Huntington's pathway exists; practice follows the international architecture (the predictive-testing counselling consensus, the Enroll-HD-era natural history, the movement-disorder prescribing discipline) with Indian additions: the marriage-confidentiality counselling, the PGT-M referral option, and the named-coordinating-doctor model for fragmented care.",
    systemContext: "Numbers are small but real (clusters from Kerala, Maharashtra, Bengal and Tamil Nadu in older series); under-detection the rule, with families carrying the 'family curse' label across generations without a name for it. Care fragments: neurologists treat the chorea, psychiatrists the depression, genetic centres test; nobody owns the family. The combined Huntington's clinic (a handful in metros) is the best service innovation; short of that, one named coordinating doctor per family.",
    programmeContext: "The predictive test is available through a handful of centres; the counselling protocol around it is frequently skipped in practice: the exact failure this course argues against. Disability certification for the combined motor-cognitive decline exists through the government pathway (initiate early, processing takes months); PGT-M exists in a few Indian private fertility centres for gene-positive couples, expensive but a real option to mention without overselling.",
    costConsiderations: "Sertraline under ₹100–150/month generic (approx 2026); tetrabenazine costlier and variable in availability; the real costs are the caregiver decade and the genetic test (offered in few centres, priced accordingly). The household engineering (written routines, texture-modified meals, the roster) costs time, not money, and carries more function than the prescription pad.",
    culturalConsiderations: "The label before diagnosis: families know it only as the inherited 'wasting-and-madness' running in the line; naming the disease, drawing the 50-50 coin-flip diagram and explaining anticipation converts three generations of superstition into an actionable map. The marriage-discrimination reality: unaffected descendants face marriage-market obstacles once family history is known; families actively hide the diagnosis: confidentiality must be addressed in Indian terms. The recurring dilemma: the at-risk adult who does NOT want to know, whose marriage alliance is being screened by the other family; protect the right not to know, refuse third-party testing, counsel both families, document.",
    patientCounselling: [
      "The naming consultation: draw the 50-50 coin-flip diagram, explain anticipation plainly ('a fact of the gene, not of anything your family did'); three generations of superstition converted into an actionable map.",
      "The rages script: 'The deep brain gate that filters impulses is damaged. The rages are released, not chosen. We treat them with medicines (SSRIs first) and by lowering household triggers, not by confrontation.'",
      "The suicide script, every visit: 'This illness carries a high risk of suicide, and the thought can be a symptom. Tell us the same day it appears: safety planning and treatment adjustments genuinely help.'",
      "The marriage-alliance script for both families: answer honestly with facts, one affected person in a line, a 50% risk for that person's children, a test that exists for adults who choose it; 'concealment risks both health and justice; counselling both families is better than covert testing.'",
      "The testing-rights script: 'No one can or should force the test, and not knowing is a respected choice, never a test for a minor, never for a third party, never without counselling.'",
      "The apathy script for the 'finally calm' misread: 'The storms flattening into stillness is the disease advancing, not settling; the roster and the routines carry what the initiative no longer can.'",
      "The palliative sentence that lands: 'We are not abandoning you; we are protecting his comfort now': said early, not in the last week.",
    ],
  },
  decisionPath: {
    title: "The midlife temper, the family tree, and the test",
    nodes: [
      {
        id: "start",
        question: "A midlife patient presents with irritability, depression, 'personality change', or chorea. What is the family tree?",
        branches: [
          { label: "'Wasted away or went strange before sixty' in the line", next: "huntington-suspect" },
          { label: "No such history, chorea present", next: "mimic-gate" },
          { label: "Psychiatric symptoms only, no motor signs, no tree", next: "psychiatric-path" },
        ],
      },
      {
        id: "huntington-suspect",
        question: "Hunt the motor fingerprints inside the interview.",
        recommendation: "Observe the hands throughout (piano-playing); the protruded tongue that cannot stay still; slow, impersistant saccades; tandem gait; serial handwriting samples deteriorating: plus the depression screen and the suicide question; the caudate-atrophy ('boxcar') imaging support; the rule-outs (tardive dyskinesia, Wilson's under 40, thyrotoxicosis) before genetic attribution.",
      },
      {
        id: "mimic-gate",
        question: "Midlife chorea: the rule-out list BEFORE the gene is blamed.",
        branches: [
          { label: "Antipsychotic exposure preceding the movements", next: "tardive-path" },
          { label: "Under 40: copper studies", next: "wilson-path" },
          { label: "Systemic signs, tremor, weight loss with eye signs", next: "thyroid-path" },
          { label: "None found, family tree loads", next: "genetic-confirm-path" },
        ],
      },
      {
        id: "tardive-path",
        question: "The psychiatric cohort's own chorea: tardive dyskinesia.",
        recommendation: "The chart review before the family tree: exposure history, orofacial predominance, the dose-and-drug review with the psychiatrist; the iatrogenic confounder treated by subtraction, exactly as the PDD course teaches its drug-list surgery.",
      },
      {
        id: "wilson-path",
        question: "The young chorea: the treatable one always checked.",
        recommendation: "Under 40 with a movement disorder: copper studies, the Kayser-Fleischer ring, the liver tier; the treatable mimic whose miss is the unforgivable one; treat before the gene is blamed.",
      },
      {
        id: "thyroid-path",
        question: "The overactive gland as chorea's cheap exclusion.",
        recommendation: "The TSH that settles it: tremor-plus-chorea with systemic signs, weight loss, heat intolerance; treated endocrinologically, not genetically.",
      },
      {
        id: "genetic-confirm-path",
        question: "The one-settler test, in a counselled setting.",
        recommendation: "CAG repeat length on blood, with the borderline range (36–39) explained and the counselling architecture around it: the diagnosis that can precede symptoms by decades deserves the protocol that respects it.",
      },
      {
        id: "psychiatric-path",
        question: "No motor signs, no tree: the standard psychiatric pathway, with the door left open.",
        recommendation: "Treat the presentation (the Depression and OCD courses' own logic); document the family history honestly at every visit (the tree can grow); re-examine for the fingerprints at every follow-up: the prodrome converts on its own schedule.",
      },
      {
        id: "management-gate",
        question: "Huntington's confirmed. The package:",
        branches: [
          { label: "Irritability, depression, obsessive features", next: "ssri-path" },
          { label: "Disabling chorea", next: "tetrabenazine-path" },
          { label: "Psychosis or dangerous impulsivity", next: "antipsychotic-path" },
          { label: "At-risk relatives asking questions", next: "counselling-path" },
        ],
      },
      {
        id: "ssri-path",
        question: "The motor-neutral first line.",
        recommendation: "Sertraline or escitalopram properly titrated, partial response pursued: genuinely effective for the mood-irritability tier and touching the movement not at all; the household engineering (routines, low stimulation, no arguing with released impulses) running alongside.",
      },
      {
        id: "tetrabenazine-path",
        question: "The trade weighed: chorea down, mood down.",
        recommendation: "Screen and stabilise mood FIRST (the flagged depression and suicidality cautions); re-ask about despair at every visit; the antipsychotic alternative (blunting chorea slightly while risking parkinsonism and swallowing deterioration) held as the same trade's other face: comfort and function the goal, never a normal exam.",
      },
      {
        id: "antipsychotic-path",
        question: "Only for psychosis, dangerous impulsivity or severe chorea: the trade, not the treatment.",
        recommendation: "Low-dose olanzapine or risperidone, or quetiapine, with the motor worsening risks explained to the family beforehand; benzodiazepines sparingly (imbalance, cognitive dulling); late-stage loads deliberately reduced: palliative comfort over psychiatric completeness.",
      },
      {
        id: "counselling-path",
        question: "The family's test: counselling before, support during and after.",
        recommendation: "Dedicated sessions, neurological and psychological assessment, motives discussed (childbearing, career, marriage pressure), a cooling-off period, results in person with support arranged; NEVER minors, NEVER third parties, NEVER disclosure without consent; the Indian additions: the marriage questions answered honestly with facts, both families counselled, the right not to know protected and documented.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Labelling the 38-year-old 'unmanageable temper' as personality disorder or 'work stress'",
      why: "The psychiatric prodrome outpaces chorea by a decade: the family-damaging years get psychiatric labels while the family tree's question ('wasted away before sixty?') goes unasked and the fingerprints go unexamined.",
      correction: "Every midlife irritability or personality change gets the family-history question and the motor mini-signs (tongue, saccades, fingers, serial handwriting): the two-minute screen that catches the prodrome.",
    },
    {
      mistake: "Missing tardive dyskinesia as the chorea mimic in a psychiatric patient",
      why: "In a psychiatric cohort, our own prescriptions are the commonest chorea source. The gene gets blamed for the iatrogenic, and the withdrawal that would treat it never happens.",
      correction: "The chart before the family tree: antipsychotic exposure history, orofacial predominance, the dose-and-drug review; the subtraction discipline before genetic attribution.",
    },
    {
      mistake: "Forgetting Wilson's disease in young chorea",
      why: "The treatable mimic: under 40 with movement disorder, the copper studies are mandatory, missing it converts a treatable disease into an unforgivable one.",
      correction: "The young-chorea rule: always check copper (with the smear, the thyroid, the autoimmune tier) before genetic attribution in anyone under 40.",
    },
    {
      mistake: "Prescribing antipsychotics for chorea reflexively",
      why: "Converting movement chaos into parkinsonian collapse: the drugs blunt chorea slightly while risking rigidity, swallowing deterioration and sedation; a trade taken silently instead of weighed.",
      correction: "The trade, not the treatment: antipsychotics only for psychosis, dangerous impulsivity or SEVERE chorea, with the motor risks explained to the family first, and the SSRI-first, motor-neutral tier holding the psychiatric load.",
    },
    {
      mistake: "Starting tetrabenazine on an unScreened mood",
      why: "The drug's defining trap: depression and suicidality are flagged side effects of the dopamine depletion that suppresses chorea; the untreated depressive tipped over by the chorea medicine.",
      correction: "Screen and stabilise mood first; re-ask about despair at every visit after; the trade weighed with the family in words: chorea down, mood down, and the suicide question attached to the prescription.",
    },
    {
      mistake: "Genetic testing without counselling, or of a minor, or for a third party",
      why: "The test transforms an at-risk person into gene-positive or gene-negative for life: knowledge that cannot change the course but changes careers, marriages, childbearing and self-image; done casually, it is a wound administered as medicine.",
      correction: "The three hard rules: never test minors; never test for third parties (the marriage alliance's 'just check the boy'); never disclose without consent: the counselling protocol is the test's ethical container.",
    },
    {
      mistake: "Reading the reassuring memory screen as reassurance",
      why: "Subcortical dementia: storage holds while execution collapses; the MMSE-style 'normal' beside a household falling apart, the office manager starving behind an intact filing system.",
      correction: "The weighted exam: sequencing, trails, timed fluency, the cueable-retrieval signature, and the collateral history of plans dissolving that the memory screen cannot see.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Autosomal dominant inheritance and anticipation, one minute each; the paternal line's earlier onsets.",
        "The triad: 'Moves, Moods, Mind'; chorea, psychiatric prodrome, subcortical dementia; risk figures '50-50, 36-and-up, 15-to-20'.",
        "The bedside motor fingerprints: tongue protrusion, sticky saccades, piano-playing fingers, serial handwriting.",
        "Why memory screens reassure falsely: subcortical profile with cueable retrieval.",
        "The ethics of predictive testing: autonomy, no minors, no third parties, family confidentiality.",
      ],
      practical: [
        "Examine a psychiatric interview for the hidden motor signs (hands throughout, tongue, saccades) and present the formulation with the family tree.",
        "Counsel an at-risk adult through the predictive-testing decision: the protocol's steps in order.",
      ],
      longAnswer: [
        "A 38-year-old bank officer with two years of unmanageable temper and a father who 'wasted away' before sixty: differential diagnosis and management (the evergreen prodrome essay).",
        "Huntington's disease: genetics, clinical features, and the psychiatric management principles.",
      ],
    },
    neetPg: {
      highYield: [
        "Chromosome 4, CAG repeat expansion, AUTOSOMAL DOMINANT: each child 50-50; ANTICIPATION (repeat lengthens, especially paternal) = earlier onset; juvenile form (before 20, usually paternal): rigidity and seizures instead of chorea.",
        "The triad: chorea (worse with stress, ABSENT in sleep) + psychiatric prodrome (irritability, depression, often preceding chorea by a decade) + subcortical dementia.",
        "Striatal (caudate) atrophy = 'boxcar ventricles'; slow, sticky saccades the clinical eye sign; dysarthria; serial handwriting deterioration.",
        "Memory profile: retrieval failure that IMPROVES WITH CUEING (storage intact); the subcortical signature; screens that ignore executive function mislead.",
        "Psychosis genuinely UNCOMMON (exam-folklore trap); suicidality elevated at every stage: ask directly, every visit.",
        "SSRI-first psychopharmacology (sertraline, escitalopram): motor-neutral, effective for irritability, depression, obsessive features.",
        "Tetrabenazine: effective for chorea BUT flags depression and suicidality; screen and stabilise mood first; antipsychotics are a trade (blunting chorea while risking parkinsonism, swallowing worsening).",
        "Rule-outs in midlife chorea: tardive dyskinesia (the psychiatric cohort's own), thyrotoxicosis, SLE, neuroacanthocytosis (smear), Wilson's under 40 (treatable, always check).",
        "The predictive test: CAG length on blood; the one-settler test; borderline range 36–39 exists; never minors, never third parties, never disclosure without consent.",
        "Death at 15–20 years from onset: aspiration pneumonia and suicide the landmark causes; late-stage chorea gives way to rigidity-bradykinesia.",
        "Juvenile Huntington's: paternal transmission of very long repeats; parkinsonian phenotype, seizures, school decline before 20.",
        "Insight persists painfully into mid-disease: the suicidality's companion and the counselling's reason.",
      ],
      pyqConcepts: [
        "Anticipation mechanism as the genetics viva favourite.",
        "Subcortical vs cortical dementia: the Huntington's-vs-Alzheimer's contrast in one line.",
        "The marriage-alliance ethics case as the Indian exam corner.",
        "Boxcar ventricles on imaging; the one-settler test concept.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 38-year-old bank officer referred for 'unmanageable temper' of two years: shouting at clerks, throwing files, a near-suspension; a father who 'wasted away' and died at 51 of 'some nerve disease'; depression screen positive, memory testing near-normal, but the protruded tongue would not stay still, the fingers drummed, rapid alternating movements were clumsy and eye movements slow and impersistent; genetic testing confirming the expansion. SSRI treatment, household engineering and early legal planning begun, chorea becoming visible 18 months later into an already-organised family.",
        "A 26-year-old woman, grandfather dead of Huntington's, to be married: the groom's family quietly requesting 'a blood test for that brain disease' from a local laboratory; the treating psychiatrist declining third-party testing, meeting both families, explaining the 50% odds, the right not to know and the option of her own counselled testing; her choice not to know; the alliance proceeding with documentation protecting everyone.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Autosomal dominant, chromosome 4, CAG repeats; anticipation especially paternal.",
        "The triad and the psychiatric prodrome preceding chorea.",
        "Caudate atrophy (boxcar ventricles); sticky saccades.",
        "SSRI-first psychiatric prescribing; tetrabenazine's depression trap.",
        "The treatable young-chorea mimic: Wilson's disease.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The two-minute prodrome screen every psychiatrist can run: the family-history question ('wasted away or went strange before sixty?') plus the motor fingerprints hidden in the interview: hands throughout, the tongue, the saccades.",
        "The every-visit suicide question is the disease's landmark discipline: the risk is elevated at prodrome, at disclosure, through the early symptomatic years. The thought is a symptom, and it is treatable.",
        "The counselling protocol is a clinical skill, not a formality: motives explored, cooling-off honoured, results given in person with support arranged, and the Indian marriage dynamics are exactly where the third-party rule bends if nobody guards it.",
        "The legal-financial package belongs to the FIRST month: property, POA, insurance before formalisation wherever legally possible, disability certification initiated early; the same early-urgent tier as young-onset FTD, because midlife is the disease's window.",
        "The palliative sentence that lands: 'We are not abandoning you; we are protecting his comfort now': said months early, not in the last week; the late-stage load reductions are therapeutic acts, not surrenders.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The 'temper problem' that preceded the dance",
      presentation: "Two years of unmanageable temper in a bank officer, with a father who 'wasted away' before sixty.",
      initialPresentation: "A 38-year-old bank officer was referred to psychiatry for an 'unmanageable temper' of two years: shouting at clerks, throwing files, a near-suspension. His father had 'wasted away' and died at 51, 'some nerve disease', per the family. Depression screening was positive; memory testing was near-normal. The referral diagnosis read 'personality change, ? work stress'.",
      history: "Irritability preceding any movement sign by at least two years; no prior psychiatric history before 36; the father's illness unnamed across the family's three generations ('the wasting-and-madness'); no substance use; sleep disturbed; the marriage strained by the temper the family blamed on the spouse.",
      examination: "On examination the protruded tongue would not stay still; the fingers drummed on the chair arm through the interview; rapid alternating movements were clumsy; eye movements were slow and impersistent on saccade testing; tandem gait difficult; serial handwriting samples deteriorating; cognition: sequencing and timed fluency impaired with cueable retrieval preserved.",
      diagnosis: "Huntington's disease, psychiatric prodrome with early motor signs: genetic testing (CAG expansion) confirming; the borderline questions pre-answered by the counselled setting.",
      management: "SSRI treatment for the irritability and depression with the suicide question asked and documented; household engineering (written routines, one instruction, low stimulation, no arguing with released impulses); the legal package started the same month (property planning, POA discussion, disability certification initiated); the family tree drawn and the counselling offered to the at-risk relatives.",
      outcome: "Chorea became visible 18 months later: by which time the family was already organised: the roster built, the routines running, the legal work done while executive function was intact.",
      teachingPoints: [
        "Midlife irritability with a 'wasted away before sixty' family tree is Huntington's until excluded.",
        "The psychiatric prodrome outpaces chorea, and the bedside motor mini-signs are the diagnosis's fingerprints.",
        "Early legal work while executive function is intact is as important as any prescription.",
      ],
    },
    {
      title: "The family that wanted the girl tested before the wedding",
      presentation: "A marriage alliance, a quiet request for 'a blood test for that brain disease', and the right not to know.",
      initialPresentation: "A 26-year-old woman, whose grandfather had died of Huntington's disease, was to be married. The groom's family, having learned of the family history through relatives, quietly requested 'a blood test for that brain disease' from a local laboratory: the request arriving through the woman's parents rather than from her. The treating psychiatrist was consulted by the family about 'how to arrange it'.",
      history: "The woman herself asymptomatic, at 25% residual risk (affected grandfather, unaffected father untested, or 50% if the father carried it untested in the family's partial knowledge); her own wishes never directly asked by anyone; the marriage negotiation under way; the groom's family's request framed as routine 'health checking'.",
      examination: "No motor signs on examination; no psychiatric syndrome; the consultation shifting from 'arranging a test' to the ethics and options it actually contained.",
      diagnosis: "Not a diagnostic case but an ethical one: the third-party-motivated predictive-testing request on an asymptomatic at-risk adult.",
      management: "The treating psychiatrist declined third-party testing: the hard rule stated plainly; met BOTH families; explained the 50% odds with the coin-flip diagram, the right not to know, and the option of the woman's own counselled predictive testing should she wish it; the woman, asked directly at last, chose not to know; documentation made of the refusal, the counselling and her choice.",
      outcome: "The alliance proceeded; the documentation protected everyone; the family left with the tree drawn honestly and the door open for her own choice at any time: counselled, never coerced.",
      teachingPoints: [
        "Predictive testing is the patient's decision alone, refusing covert third-party testing is a hard ethical rule, not a formality.",
        "Indian marriage dynamics are precisely where this rule bends if nobody guards it. The counsellor is the guard.",
        "Counselling both families converts suspicion into information: the alliance survived the truth, as most do when it is carried well.",
      ],
    },
  ],
  clinicalPearls: [
    "In midlife irritability with a suspicious family tree, watch the tongue and the eyes before you write a prescription: the one-line discipline.",
    "Chromosome 4, CAG repeats, autosomal dominant: each child 50-50; anticipation (especially paternal) makes children earlier than parents; juvenile (before 20) usually paternal with very long repeats.",
    "The triad: 'Moves, Moods, Mind', and the risk figures as '50-50, 36-and-up, 15-to-20'.",
    "The psychiatric prodrome outpaces chorea by a decade: irritability, depression, obsessive features; psychiatry's window and psychiatry's miss.",
    "Chorea is movement RELEASED, not created: worse with stress, ABSENT in sleep; the same release as FTD's disinhibition, in the motor register.",
    "The bedside fingerprints: the tongue that cannot stay protruded, the slow sticky saccades, the piano-playing fingers, the deteriorating serial handwriting.",
    "Subcortical dementia: retrieval slow but cueable, storage intact; the memory screen reassures falsely while the household falls apart.",
    "Suicidality elevated at EVERY stage: prodrome, disclosure, early disease: ask directly, every visit; the thought can be a symptom.",
    "SSRI-first, motor-neutral: sertraline, escitalopram; genuinely effective for irritability, depression, obsessive features.",
    "Tetrabenazine's trade: chorea down, mood down; screen and stabilise depression first, re-ask about despair always.",
    "Antipsychotics are a trade, not a treatment: blunting chorea while risking parkinsonism and swallowing deterioration.",
    "Rule-outs before genetic attribution: tardive dyskinesia (the psychiatric cohort's own), thyrotoxicosis, SLE, neuroacanthocytosis, Wilson's under 40 (always check, treatable).",
    "The test's three hard rules: never minors, never third parties, never disclosure without consent; the marriage alliance is where the middle rule bends.",
    "Insight persists painfully into mid-disease: the patient watching himself fail; the counselling and the suicide question are the companions owed.",
    "The Indian tier: the family-curse relabelling (the coin-flip diagram), the marriage-discrimination concealment, the fragmented care (the named coordinating doctor the fix), the legal package's first month.",
  ],
  highYieldSummary: [
    "Definition: Huntington's = an autosomal dominant (chromosome 4, CAG expansion ≥36–40 in huntingtin) neurodegenerative disease of the striatum presenting as the triad (chorea (released, not created), psychiatric prodrome (irritability, depression, obsessive features) often a decade before the movements), and subcortical dementia (sequencing and speed failing, retrieval cueable, storage holding).",
    "Epidemiology: 5–10 per 100,000 (Western European rates; lower in India where under-detection rules); onset typically 35–45; survival 15–20 years; suicide and aspiration pneumonia the landmark enders; juvenile form (before 20) usually paternal with very long repeats: parkinsonian and seizure-led.",
    "Mechanism: the striatal gatehouse dies (chorea = movement released, impulsivity = behaviour released, habit disintegration = sequencing gone); the fronto-striatal executive assistant starves (goals remain, execution collapses, the filing system working behind a starving office manager); the lengthening repeat (anticipation, especially paternal); the test that precedes symptoms by decades and changes families before patients.",
    "Diagnosis: the triad + the family tree ('wasted away or went strange before sixty?') + the bedside fingerprints (tongue, saccades, fingers, handwriting) → the one-settler genetic test in a counselled setting (borderline 36–39 range the reason); rule-outs first (tardive dyskinesia, thyrotoxicosis, SLE, neuroacanthocytosis, Wilson's under 40).",
    "Management: the multidisciplinary spine (neurology, psychiatry, genetics, speech-swallow, physio, dietitian, social work. The caregiving decade planned from the start); SSRI-first motor-neutral psychiatry (sertraline, escitalopram; anticonvulsant tier for persisting instability); antipsychotics only for psychosis, dangerous impulsivity or severe chorea: a trade, not a treatment; tetrabenazine with mood screened and stabilised first; benzodiazepines sparingly; late-stage loads deliberately reduced.",
    "The household engineering: written routines, one instruction, low stimulation, no arguing with released impulses; safety early and kindly (cooking, driving, keys relocated); texture-modified high-calorie supervised meals; the caregiving roster built before the crisis; respite the scarcest prescription.",
    "The genetic family work: the counselling protocol (sessions, motives, cooling-off, results in person with support; partner included where wished); the three hard rules (never minors, never third parties, never disclosure without consent); PGT-M the real-but-expensive option; the Indian marriage-confidentiality counselling as its own skill.",
    "The Indian tier: the family-curse relabelling consultation (naming, the coin-flip diagram, anticipation explained); marriage-discrimination concealment addressed in Indian terms; fragmented care fixed by the named coordinating doctor or the combined clinic; disability certification early; the legal-financial package in the first month (property, POA, insurance before formalisation wherever legally possible); palliative referral with the sentence that lands: 'we are not abandoning you; we are protecting his comfort now.'",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "huntingtons-quiz-1",
      question: "A 28-year-old wants predictive testing for Huntington's, requested on the marriage form by the other family. The correct action is:",
      options: ["Send the test as requested", "Refuse third-party-motivated testing; offer the individual her own counselled testing choice", "Test her youngest sibling instead", "Declare her 'probably negative' clinically"],
      correctIndex: 1,
      explanation: "Predictive testing belongs to the autonomous adult alone, with counselling; third-party pressure is a hard exclusion; minors are never tested.",
      afterSectionId: "management",
    },
    {
      id: "huntingtons-quiz-2",
      question: "Earlier onset in the child than the affected parent is due to:",
      options: ["Mitochondrial inheritance", "CAG repeat expansion lengthening on transmission (anticipation), especially paternal", "Better medical care", "Recessive gene interaction"],
      correctIndex: 1,
      explanation: "Anticipation: the repeat lengthens across generations, most often through the paternal line.",
      afterSectionId: "mechanism",
    },
    {
      id: "huntingtons-quiz-3",
      question: "The usual psychiatric harbinger, years before chorea, is:",
      options: ["Grandiose delusions", "Irritability with low frustration tolerance, depression", "Catatonia", "Panic attacks"],
      correctIndex: 1,
      explanation: "Irritability and depression lead the prodrome; psychosis is genuinely uncommon — the exam-folklove trap.",
      afterSectionId: "symptoms",
    },
    {
      id: "huntingtons-quiz-4",
      question: "The memory profile in Huntington's dementia is:",
      options: ["Rapid forgetting with no cue benefit", "Retrieval failure that improves with cueing", "Pure retrograde amnesia", "Confabulatory amnesia"],
      correctIndex: 1,
      explanation: "Subcortical dementia: storage intact, retrieval slow, cueable — screens that ignore executive function mislead.",
      afterSectionId: "diagnosis",
    },
    {
      id: "huntingtons-quiz-5",
      question: "Tetrabenazine is prescribed for chorea. Before starting, the essential step is:",
      options: ["Start an antipsychotic together", "Screen and treat depression — tetrabenazine can worsen mood and suicidality", "Confirm with PET", "Start levodopa"],
      correctIndex: 1,
      explanation: "The depression/suicidality caution is the drug's defining prescribing trap.",
      afterSectionId: "management",
    },
    {
      id: "huntingtons-quiz-6",
      question: "A treatable chorea mimic that must be excluded in a young patient is:",
      options: ["Alzheimer's disease", "Wilson's disease", "Pick's disease", "Normal pressure hydrocephalus"],
      correctIndex: 1,
      explanation: "Wilson's (copper) is treatable and presents young with movement disorder — always in the young-chorea rule-out list with thyrotoxicosis and tardive dyskinesia.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "Explain the inheritance pattern, the transmission risk per child, and anticipation, one minute, your own words.", answer: "Autosomal dominant: one expanded CAG repeat region in the huntingtin gene on chromosome 4 is enough; no carrier state, no skipping. Each child of an affected parent faces a 50-50 coin flip decided at conception, sons and daughters equally. Anticipation: the repeated stretch can LENGTHEN when transmitted, most often through the father's line, and longer repeats mean earlier onset, so children can fall ill before the parent's age at onset, sometimes decades before; juvenile disease (before 20, parkinsonian and seizure-led rather than choreic) usually arrives from paternal transmission of very long repeats. The counselling sentence that must follow: it is a fact of the gene, not of anything the family did.", topic: "Genetics" },
    { question: "Which psychiatric symptoms come before chorea in Huntington's?", answer: "The prodrome's order of appearance: irritability with low frustration tolerance first (disproportionate anger at minor domestic triggers, the earliest and most family-damaging symptom, blamed on 'work stress' or the spouse); genuine depression alongside (treatable, with suicidal ideation elevated at every stage, the question that must be asked every visit); anxiety and insomnia; obsessive-compulsive-like rituals in a subgroup; and behavioural disintegration (impulse loss, spending, recklessness) as the gate fails further. Psychosis is genuinely UNCOMMON: its exam-folklore prominence notwithstanding. Apathy arrives later, replacing the storms as the disease advances (misread by families as 'finally calm'). The chorea that eventually declares can trail this psychiatric tier by a decade.", topic: "Diagnosis" },
    { question: "Why do memory screens reassure falsely in subcortical dementia, and what should you test instead?", answer: "Because the pathology is fronto-striatal, not hippocampal: the executive assistant dies while the filing system works; memory STORAGE is spared until late, so the MMSE-style screen returns reassuring numbers while the household falls apart. The cueing test exposes it: retrieval is slow but IMPROVES with a prompt (unlike Alzheimer's rapid forgetting without cue benefit). What to test instead: sequencing and execution (the medicine schedule, the recipe), timed fluency, trail-type tasks, clock-drawing, abstraction, and the dual-task observation; plus the collateral history of plans dissolving. One image to keep: the office manager is starving behind an intact archive.", topic: "Diagnosis" },
    { question: "List four bedside motor signs of early Huntington's that hide in a psychiatric interview.", answer: "(1) The hands throughout the interview: piano-playing fingers, fidgeting, the restlessness that never fully stops while you talk; (2) the protruded tongue that cannot stay still when asked to hold it out; (3) the eye movements: slow, 'sticky', impersistent saccades that cannot hold the gaze or move it cleanly between targets; (4) the serial handwriting samples (deteriorating across dates), with rapid alternating movements clumsy and tandem gait difficult as the fifth and sixth. None of these announces itself; all of them hide in plain sight through a psychiatric interview that never looks, which is why the two-minute screen (the tree question plus these signs) belongs in every midlife irritability and personality-change consultation.", topic: "Clinical practice" },
    { question: "Before starting tetrabenazine, what must be asked and treated?", answer: "Depression: screened, asked about directly (including suicidal ideation, with the same-day response for any positive), and treated to stability BEFORE the first tablet: tetrabenazine depletes dopamine to suppress chorea, and depression and suicidality are its FLAGGED side effects; the chorea medicine that tips the untreated depressive over. The discipline continues: re-ask about despair at every visit after initiation, coordinate the mood treatment with the SSRI already running, and never combine carelessly with other serotonergic or MAOI-tier drugs. The trade weighed with the family in words: chorea down, mood down, and the suicide question attached to the prescription permanently.", topic: "Pharmacology" },
    { question: "Name the three ethical hard rules of predictive testing.", answer: "(1) NEVER test minors: the choice to know belongs to the adult they will become; what can be done now is keep the family tree honest so they can choose at 18 with full information. (2) NEVER test for third parties, not for an employer, not for an insurance company, not for a prospective spouse's family ('just check the boy before the alliance'): the request arrives through the parents, framed as routine 'health checking', and it is the counsellor's job to refuse it and counsel both families instead. (3) NEVER disclose one person's result to relatives without consent: the family-confidentiality trap unique to dominant diseases, where one person's answer is information about many. And the rule that contains them all: the choice to know (or not to know) is the patient's alone, with counselling before, support during, and support after.", topic: "Indian practice" },
    { question: "Which treatable mimics of midlife chorea must be excluded first in India?", answer: "Tardive dyskinesia first in any psychiatric cohort: the movements OUR prescriptions caused (chart review before family tree, orofacial predominance, subtraction as treatment); thyrotoxicosis (the TSH that costs nothing: tremor-plus-chorea with systemic signs); systemic lupus and neuroacanthocytosis (the autoimmune panel and the blood smear); and Wilson's disease in anyone under 40: mandatory, treatable, the unforgivable miss. The sequence's logic: before the gene is blamed, everything treatable and testable goes first. A CAG confirmation on an unexamined mimic is a diagnosis made too early and a treatment possibly missed forever.", topic: "Differential" },
    { question: "What legal and financial steps belong in the first month after diagnosis in a midlife patient?", answer: "The early-urgent package (the same tier as young-onset FTD, because midlife is the window): property and nomination planning while executive function is intact; power-of-attorney and guardianship-preparedness discussions under the Mental Healthcare Act framework; insurance arranged BEFORE the diagnosis is formalised wherever legally possible (the post-diagnosis exclusion reality); disability certification initiated early through the government pathway (processing takes months, and the combined motor-cognitive decline qualifies); employment conversations held with the treating doctor's letter while workplace dignity is still in the office's hands; and the caregiving roster named: the spouse is similar age; the decade belongs to the children, and the written schedule built now is the family's most durable prescription.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is it curable?", answer: "Not yet: the underlying gene's damage cannot currently be reversed. But almost every symptom that hurts the family (the temper, the depression, the sleep, the swallowing safety) can be eased, and the family's future can be protected with planning and counselling." },
    { question: "My father has it. What are my chances?", answer: "Fifty-fifty: a coin flip decided at your conception. A counselling-based blood test can tell you whether you carry the gene; no one can or should force that test, and not knowing is a respected choice." },
    { question: "Why does my son seem worse than my brother was at that age?", answer: "This is anticipation: the repeated DNA stretch can lengthen as it passes to the next generation, especially through the father's line, so onset can come earlier and harder. It is a fact of the gene, not of anything your family did." },
    { question: "He was such a gentle man. Why the rages?", answer: "The deep brain gate that filters impulses is damaged. The rages are released, not chosen. We treat them with medicines (SSRIs first) and by lowering household triggers, not by confrontation." },
    { question: "He keeps saying he'd be better off dead.", answer: "Take it seriously every time; this illness carries a high risk of suicide, and the thought can be a symptom. Tell the doctor the same day: safety planning and treatment adjustments genuinely help." },
    { question: "Should our children be tested early, so we can plan their lives?", answer: "No: testing minors is prohibited worldwide: the choice to know belongs to the adult they become. What you can do now: keep the family tree honest, so at 18 they can choose with full information." },
    { question: "The marriage proposal is asking whether the disease is in the family.", answer: "Answer honestly with facts: one affected person in a line, a 50% risk for that person's children, and a test that exists for adults who choose it. Concealment risks both health and justice; counselling both families is better than covert testing." },
    { question: "Is the test available and affordable in India?", answer: "It exists through a small number of centres; the price varies. The counselling around it costs time but is not optional. It is what separates an informed choice from a wound." },
    { question: "What actually happens at the end?", answer: "Gradual weakness, swallowing difficulty and chest infections, usually 15–20 years in. Palliative care focuses on comfort, dignity at meals, and keeping the person at home with the family that knows him." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "International Huntington Association / EHDN + WHO joint guidelines — the predictive-testing consensus whose ethical rules are paraphrased here" },
      { source: "Nance MA et al. — genetic counselling practice guidelines for predictive testing (the counselling-protocol architecture)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.7 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Huntington Study Group — tetrabenazine trials and the depression/suicidality caution" },
      { source: "The Huntington's Disease Collaborative Research Group (1993) — the discovery of the IT15/huntingtin CAG expansion" },
    ],
    reviews: [
      { source: "Roos RAC et al. and the REGISTRY/COHORT/Enroll-HD observational programmes — natural history, psychiatric prodrome, survival" },
      { source: "Paulsen JS et al., PREDICT-HD — psychiatric and cognitive markers in gene carriers before motor onset" },
      { source: "SSRI and symptom-directed psychopharmacology literature for irritability and depression in Huntington's" },
      { source: "Novak MJU, Tabrizi SJ — imaging and biomarker reviews updating the bedside caudate-atrophy sign" },
      { source: "Wexler NS — anthropological-social studies of Huntington's, framing stigma and concealment" },
      { source: "Juvenile Huntington's literature — paternal transmission and the parkinsonian phenotype" },
      { source: "Indian Huntington's series (regional clinic reports, 1990s–2010s) — small numbers, late diagnosis, family-concealment patterns" },
    ],
    patientResources: [
      { source: "The coin-flip diagram and the three hard rules — the two instruments this course hands to every family" },
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416), for caregiver distress and at-risk-relative deliberations" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the coin flip, the prodrome explained, the test's rules, the household craft, the right not to know.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The triad, the genetics with anticipation, the bedside fingerprints and the prescribing traps.",
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
      description: "Everything: the counselling craft, the marriage-alliance ethics, the palliative sentences, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The coin flip, the anticipation, the triad.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can explain the inheritance and anticipation in one minute and recite '50-50, 36-and-up, 15-to-20'." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The failing gate, the starving executive, the lengthening repeat.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why chorea is release not creation, and why memory screens mislead." },
    { number: 3, title: "Clinical Practice", description: "The prodrome, the fingerprints, the rule-outs, the movement-aware prescribing.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the two-minute screen, the rule-out list and the SSRI-first plan with the tetrabenazine gate." },
    { number: 4, title: "Indian Context", description: "The family-curse relabelling, the marriage ethics, the named coordinating doctor.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can draw the coin-flip diagram, refuse third-party testing and counsel both families." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the prodrome essay cold and recite the three hard rules without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.7 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "The Huntington's Disease Collaborative Research Group (1993) — the discovery of the IT15/huntingtin CAG expansion", sourceType: "primary", year: "1993", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Roos RAC et al. and the REGISTRY/COHORT/Enroll-HD observational programmes — natural history, psychiatric prodrome, survival", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Nance MA et al. — genetic counselling practice guidelines for predictive testing; the International Huntington Association / EHDN + WHO joint predictive-testing consensus (the ethical rules paraphrased)", sourceType: "guideline", year: "1990s onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Paulsen JS et al., PREDICT-HD — psychiatric and cognitive markers in gene carriers before motor onset", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Huntington Study Group — tetrabenazine trials and the depression/suicidality caution", sourceType: "trial", year: "2000s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "SSRI and symptom-directed psychopharmacology literature for irritability and depression in Huntington's disease", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Novak MJU, Tabrizi SJ — imaging and biomarker reviews updating the bedside caudate-atrophy ('boxcar ventricles') sign", sourceType: "review", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Wexler NS — anthropological-social studies of Huntington's (stigma and concealment framing); juvenile Huntington's literature (paternal transmission, parkinsonian phenotype)", sourceType: "review", year: "1970s–2010s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Indian Huntington's series (regional clinic reports, 1990s–2010s) — small numbers, late diagnosis, family-concealment patterns; marriage-discrimination and counselling-availability realities", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "Genetics: an expanded CAG repeat (≥36–40, diagnostic thresholds around 40) in the huntingtin gene on chromosome 4; autosomal dominant with each child of an affected parent at 50% risk; anticipation via repeat lengthening on transmission (especially paternal) producing earlier onset; juvenile disease (before 20, parkinsonian and seizure-led) usually from paternal transmission of very long repeats.", grade: "established", sources: ["S2", "S4"] },
    { text: "Epidemiology: prevalence roughly 5–10 per 100,000 in Western European populations (lower in East Asia and India where under-detection rules); onset typically 35–45; mean survival 15–20 years; suicide and aspiration pneumonia the landmark causes of death; suicidal ideation elevated several-fold over general population rates.", grade: "established", sources: ["S3", "S9"] },
    { text: "The psychiatric prodrome: irritability with low frustration tolerance, depression, anxiety, insomnia and obsessive-compulsive-like features often preceding chorea by years (PREDICT-HD's pre-motor markers); psychosis genuinely uncommon; apathy replacing the storms as the disease advances; suicidality elevated at every stage: prodrome, disclosure and early symptomatic years.", grade: "established", sources: ["S5", "S3"] },
    { text: "The subcortical cognitive profile: fronto-striatal disconnection producing slowed processing, sequencing and executive failure with visuospatial difficulty, while memory storage is spared until late and retrieval is cueable; bedside memory screens mislead by design; insight persists painfully into mid-disease.", grade: "established", sources: ["S1", "S5"] },
    { text: "The motor signatures: chorea worse with stress and ABSENT in sleep; slow, sticky, impersistent saccades as the clinical eye sign; dysarthria; the bedside fingerprints (tongue protrusion unsustained, piano-playing fingers, deteriorating serial handwriting); caudate atrophy ('boxcar ventricles') supporting but never replacing the genetic test; the late conversion to rigidity-bradykinesia.", grade: "established", sources: ["S1", "S8"] },
    { text: "The psychiatric pharmacology: SSRIs (sertraline, escitalopram) as the motor-neutral first line for irritability, depression and obsessive features; anticonvulsant mood stabilisers for persisting instability; antipsychotics only for psychosis, dangerous impulsivity or severe chorea: a trade blunting chorea while risking parkinsonism and swallowing deterioration; benzodiazepines sparingly; late-stage loads deliberately reduced for palliative comfort.", grade: "established", sources: ["S7"] },
    { text: "Tetrabenazine: effective for disabling chorea with depression and suicidality as FLAGGED side effects; screen and stabilise mood first, re-ask about despair at every visit; the prescribing trap taught as the drug's defining feature.", grade: "established", sources: ["S6"] },
    { text: "The predictive-testing protocol and its ethics: dedicated counselling sessions, neurological and psychological assessment, motive discussion, cooling-off period, results in person with support, with the three hard rules (never minors, never third parties, never disclosure without consent); PGT-M as the real-but-expensive option for gene-positive couples.", grade: "established", sources: ["S4"] },
    { text: "The rule-outs before genetic attribution: tardive dyskinesia (the psychiatric cohort's iatrogenic chorea), thyrotoxicosis, systemic lupus, neuroacanthocytosis (blood smear) and Wilson's disease in the young (under 40, always check, treatable).", grade: "established", sources: ["S1"] },
    { text: "The Indian tier: small-but-real clusters (Kerala, Maharashtra, Bengal, Tamil Nadu) with under-detection and the 'family curse' label; marriage-discrimination reality driving concealment (confidentiality counselled in Indian terms); care fragmentation (the combined clinic or named coordinating doctor the fix); counselling protocols frequently skipped; disability certification and early legal planning as the first-month package; palliative referral with the sentence that lands.", grade: "supported", sources: ["S10", "S9"] },
  ],
};
