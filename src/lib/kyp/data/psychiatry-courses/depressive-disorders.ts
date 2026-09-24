import type { PsychiatryCourse } from "./types";

/**
 * DEPRESSIVE DISORDERS — canonical Psychiatry course (pilot 1: common disorder).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/depressive-disorders.md — untouched foundation),
 * re-researched against current guidance (WHO, ICD-11, DSM-5-TR, NICE
 * NG222 2022, IPS CPG 2017, NMHS India) with per-claim provenance.
 *
 * Evidence grades separate what is established from what is proposed —
 * the monoamine story is taught as the explanation of the drugs we have,
 * not as "low serotonin causes depression".
 */
export const depressiveDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "depressive-disorders",
  title: "Depressive Disorders",
  shortName: "Depression",
  kind: "disorder",
  category: "Mood Disorder",
  groupLetter: "D",
  groupName: "Mood disorders",
  learningPath: ["Psychiatry", "Mood Disorders", "Depressive Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-25",

  tagline:
    "The world's most burdensome psychiatric condition — and the most treatable one when recognised early.",
  summary:
    "Depressive disorders are persistent disorders of mood, energy, cognition and function — not sadness, and not a character flaw. Roughly 322 million people live with depression worldwide (WHO), and in India about 1 in 20 adults is affected at any given time. This course builds the full picture in six lessons: what depression is, what actually happens in the brain, how it is diagnosed and treated, how Indian practice shapes management, how exams test it, and how to make it stick through active recall.",
  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define a depressive episode by its core (mood, anhedonia, fatigue) and cognitive symptoms, and distinguish it from sadness, grief and adjustment reactions.",
    "State current global and Indian prevalence figures with their sources, and explain the 1.5:1 female-to-male ratio.",
    "Explain the biopsychosocial model of etiology — genetic loading, early adversity, chronic stress, medical illness — as converging pathways, not single causes.",
    "Grade the major neurobiological models honestly: neuroplasticity/network accounts are supported; the simple 'chemical imbalance' is not.",
    "Apply DSM-5-TR and ICD-11 diagnostic criteria, interpret PHQ-9 severity bands, and build a differential that always includes bipolarity, hypothyroidism, anaemia and substance use.",
    "Construct a stepped management plan aligned to NICE NG222 and IPS guidance: psychological therapy first for mild episodes, antidepressant plus therapy for moderate-severe, and escalation routes.",
    "Counsel a patient and family in plain language: what depression is, why medication takes weeks, how long to continue, and what the warning signs are.",
    "Identify Indian practice realities — NMHP/DMHP services, Tele-MANAS 14416, cost-driven drug choices, and the MHCA 2017 rights framework.",
  ],
  quickFacts: [
    { label: "Global burden", value: "≈ 322 million", detail: "People living with depression worldwide (WHO fact sheet; GBD 2021 estimates behind it)" },
    { label: "Sex ratio", value: "≈ 1.5 : 1", detail: "Female : male — about 50% higher prevalence in women (WHO)" },
    { label: "India (any time point)", value: "1 in 20", detail: "NMHS 2015–16: ~2.7% current prevalence of depression; ~10.6% of adults live with any mental disorder" },
    { label: "Core criteria window", value: "≥ 2 weeks", detail: "DSM-5-TR major depressive episode; ICD-11 depressive episode similarly requires most of the day, nearly every day" },
    { label: "First-line drug class", value: "SSRIs", detail: "NICE NG222 menu of options; IPS CPG — best tolerability-efficacy balance for most patients" },
    { label: "Antidepressant onset", value: "2–4 weeks", detail: "Symptomatic benefit typically begins; full effect often 6–8 weeks — a biology lesson, not treatment failure" },
    { label: "Continuation after recovery", value: "≥ 6 months", detail: "Post-episode continuation to prevent relapse (NICE NG222; APA)" },
    { label: "Treatment gap (India)", value: "≈ 70–85%", detail: "Most people with depression in India receive no care — the reason screening and primary-care skills matter" },
  ],
  knowledgeGraph: [
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "SSRI — KYP drug lesson" },
    { label: "Fluoxetine", type: "drug", href: "/drugs/fluoxetine/", note: "SSRI — longest half-life" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "SSRI — fewest interactions" },
    { label: "Bupropion", type: "drug", href: "/drugs/bupropion/", note: "NDRI — no sexual dysfunction" },
    { label: "Mirtazapine", type: "drug", href: "/drugs/mirtazapine/", note: "NaSSA — sleep and appetite" },
    { label: "Amitriptyline", type: "drug", href: "/drugs/amitriptyline/", note: "TCA — cheapest in India" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "5-HT — the system SSRIs act on" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "Executive control — hypoactive in depression" },
    { label: "Amygdala", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "Threat salience — hyperreactive in depression" },
    { label: "Hippocampus", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "Memory + stress regulation" },
    { label: "Major Depressive Disorder", type: "condition", href: "/diseases/major-depressive-disorder/", note: "KYP disease hub — deeper clinical page" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The critical differential — always screen for past mania" },
    { label: "Suicide & Self-harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Assess at every encounter" },
    { label: "Grief & Bereavement", type: "condition", href: "/psychiatry/bereavement/", note: "Differentiate from depression" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "No single lesion causes depression. The honest 2026 model is a stress-diathesis convergence: genetic loading and early adversity calibrate stress-response systems (HPP axis, immune, neurotrophic support), and chronic stress then degrades the synaptic machinery of emotion regulation — which is why the treatments that work (drugs, psychotherapy, exercise, sleep repair) all ultimately converge on restoring neuroplasticity rather than on 'topping up' one chemical.",
    grade: "supported",
    steps: [
      "Genetic architecture: depression is polygenic — hundreds of loci of small effect (heritability ~35–40%); no single 'depression gene'.",
      "Stress calibration: early adversity and chronic stress drive HPA-axis sensitisation — elevated cortisol, impaired glucocorticoid feedback — measurable in a subset of patients.",
      "Neurotrophic change: stress-driven cortisol and inflammatory signalling reduce BDNF support in hippocampus and prefrontal cortex, with synaptic loss and reduced neurogenesis (animal models; human evidence indirect).",
      "Circuit dysfunction: disconnection between prefrontal 'control' regions and limbic 'mood' regions (amygdala hyperreactivity with diminished top-down regulation; default-mode network rumination loops).",
      "Monoamine involvement: serotonin and noradrenaline systems modulate all of the above (mood, sleep, appetite, attention) — the drugs act here within hours, but symptom relief waits weeks, because the therapeutic step is downstream: receptor adaptation and plasticity gene expression (CREB → BDNF cascade).",
      "Inflammatory and metabolic contributions: a subset of patients show raised inflammatory markers (CRP, IL-6) and metabolic dysregulation — linked to fatigue, anhedonia and treatment resistance; a modern, actively researched layer.",
      "Recovery = plasticity restoration: effective treatments (SSRI + therapy + exercise + sleep repair) each promote BDNF-dependent synaptic remodelling — converging mechanisms, divergent entry points.",
    ],
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal Cortex", role: "Top-down regulation of emotion; hypoactive in depression → impaired concentration, decision-making and emotional control; key target of the neuroplasticity account.", grade: "supported" },
    { id: "amygdala", name: "Amygdala", role: "Threat/emotion salience; hyperreactive to negative stimuli in depression, with rumination-linked connectivity changes; normalises with effective treatment.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus", role: "Memory and stress-context processing; reduced volume in recurrent/chronic depression (stress-cortisol account); volume recovery observed with sustained remission in some studies.", grade: "supported" },
    { id: "raphe-nuclei", name: "Raphe Nuclei", role: "Origin of the serotonin system; where SSRIs act first — but the therapeutic delay reflects downstream receptor adaptation, not the acute 5-HT rise.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Modulates mood, sleep, appetite, impulsivity. The clearest fact: blocking SERT changes these systems within hours — but the simple 'low serotonin = depression' claim is not supported by umbrella-review evidence. Teache the drugs, honestly.", grade: "uncertain", drugConnection: "All SSRIs act on SERT — see Sertraline" },
    { name: "Noradrenaline", symbol: "NE", role: "Energy, drive, attention. Reduced noradrenergic tone maps onto fatigue and anhedonia; SNRIs and mirtazapine engage this system.", grade: "supported", drugConnection: "Venlafaxine/Duloxetine (SNRIs); Bupropion (indirectly via NDRI)" },
    { name: "Dopamine", symbol: "DA", role: "Reward and motivation — the neurochemistry of anhedonia. Bupropion's NDRI mechanism is the drug-side lesson.", grade: "supported", drugConnection: "Bupropion (NDRI)" },
    { name: "GABA / Glutamate", symbol: "GABA / Glu", role: "Excitatory-inhibitory balance and plasticity; the glutamate system is where rapid-acting agents (esketamine) act — proof that monoamines are not the whole story.", grade: "supported" },
  ],
  pathways: [
    {
      id: "stress-neurotrophic",
      name: "The stress → plasticity pathway",
      steps: [
        { label: "Chronic stress", detail: "HPA activation, cortisol excess" },
        { label: "Cellular stress response", detail: "↑ inflammatory cytokines, ↓ BDNF support" },
        { label: "Synaptic loss", detail: "Hippocampus + prefrontal dendritic atrophy" },
        { label: "Circuit dysfunction", detail: "Prefrontal–limbic disconnection; DMN rumination" },
        { label: "Syndrome", detail: "Low mood, anhedonia, cognitive symptoms" },
      ],
      clinicalManifestation: "Explains why episodes follow chronic stress, why they recur, and why treatments that restore plasticity work across modalities.",
      grade: "supported",
    },
    {
      id: "ssri-delay",
      name: "Why antidepressants take weeks",
      steps: [
        { label: "SERT blockade", detail: "Hours: synaptic 5-HT rises" },
        { label: "Autoreceptor desensitisation", detail: "Days–weeks: 5-HT1A autoreceptors release the brake" },
        { label: "Gene expression", detail: "CREB activation → BDNF transcription" },
        { label: "Synaptic remodelling", detail: "Weeks: dendritic growth, connectivity repair" },
        { label: "Clinical response", detail: "2–4 weeks onset; 6–8 weeks full effect" },
      ],
      clinicalManifestation: "Protects patients and prescribers from abandoning treatment at day 7 — the delay is the mechanism working, not failing.",
      grade: "supported",
    },
    {
      id: "inflammation-mood",
      name: "The inflammatory contributor",
      steps: [
        { label: "Peripheral inflammation", detail: "Raised CRP/IL-6 in a subset" },
        { label: "Microglial activation", detail: "Central inflammatory signalling" },
        { label: "Sickness behaviour", detail: "Fatigue, anhedonia, social withdrawal" },
        { label: "Treatment resistance", detail: "Associated with poorer SSRI response" },
      ],
      clinicalManifestation: "A 2020s research lens on why some 'treatment-resistant' fatigue-and-anhedonia profiles behave atypically — and why exercise and metabolic health matter.",
      grade: "proposed",
    },
  ],
  timeline: [
    { id: "epi-onset", time: "Onset", title: "Prodrome → episode", description: "Weeks of sleep change, fatigue and withdrawal before full syndromal criteria — the window where early intervention works best.", phase: "onset" },
    { id: "diagnosis-window", time: "≥ 2 weeks", title: "Diagnostic threshold", description: "Symptoms most of the day, nearly every day, with functional impairment — the DSM-5-TR/ICD-11 window.", phase: "peak" },
    { id: "treatment-start", time: "Week 0", title: "Treatment begins", description: "Therapy ± antidepressant; psychoeducation and safety planning at the same visit.", phase: "onset" },
    { id: "early-response", time: "Week 2–4", title: "First benefit", description: "Sleep and appetite often improve first; monitor for activation, especially in young adults.", phase: "peak" },
    { id: "full-response", time: "Week 6–8", title: "Response / remission", description: "Target is remission (PHQ-9 < 5), not just improvement; reassess dose and adherence if < 25% better.", phase: "recovery" },
    { id: "continuation", time: "Month 4–9", title: "Continuation phase", description: "Continue antidepressant ≥ 6 months after remission (longer after multiple episodes) — this is where most preventable relapses happen.", phase: "duration" },
    { id: "maintenance", time: "≥ 2 years", title: "Maintenance (if recurrent)", description: "Third episode or severe/chronic course → long-term maintenance per NICE/IPS; taper slowly when stopping.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence:
      "≈ 322 million people (4–5% of the world's adults) live with depression (WHO fact sheet, GBD 2021 estimates); among the leading causes of disability worldwide.",
    indianPrevalence:
      "NMHS 2015–16: ~2.7% of adults currently depressed (about 1 in 20); ~10.6% of Indian adults live with a diagnosable mental disorder. Common mental disorders cluster in low-income and urban-migrant groups.",
    lifetimeRisk: "Lifetime prevalence of major depression: roughly 10–20% in high-income cohorts; Indian data suggest lower treated prevalence but high true burden.",
    genderRatio: "≈ 1.5 : 1 (female : male) — consistent across countries and income settings (WHO).",
    ageOfOnset: "Peak onset in the 20s–40s — the productive years; mean age around the mid-20s to early 30s in most cohorts.",
    indianNotes:
      "The Indian treatment gap for depression is roughly 70–85% — most people with depression never reach care, making primary-care recognition and the DMHP/Tele-MANAS layer decisive.",
  },
  etiology: [
    { category: "genetic", factor: "Polygenic loading", details: "Heritability ~35–40%; no single gene; GWAS shows hundreds of small-effect loci — explains recurrence within families without 'determinism'." },
    { category: "biological", factor: "Neuroendocrine sensitivity", details: "HPA-axis sensitisation after early adversity or chronic stress; dexamethasone-suppression abnormalities in a subset of severe cases." },
    { category: "biological", factor: "Medical comorbidity", details: "Hypothyroidism, anaemia, vitamin B12/D deficiency, diabetes, stroke, Parkinson's, cancer — always screen; post-stroke and post-MI depression are common and treatable." },
    { category: "psychological", factor: "Cognitive vulnerability", details: "Negative self-schema, rumination and learned helplessness — the psychological layer that CBT directly targets." },
    { category: "psychological", factor: "Early adversity", details: "Childhood abuse/neglect roughly doubles adult depression risk; dose-response relationship across cohorts." },
    { category: "social", factor: "Chronic stressors", details: "Unemployment, caregiving burden, debt, intimate-partner violence, migration — the social gradient of depression is one of its most replicated findings." },
    { category: "social", factor: "Substance use", details: "Alcohol use disorder both mimics and maintains depression; screen every patient." },
  ],
  symptomClusters: [
    { category: "Emotional", symptoms: ["Persistent low mood (most of the day, nearly every day)", "Anhedonia — loss of interest/pleasure", "Hopelessness, worthlessness, excessive guilt", "Irritability (especially adolescents)"] },
    { category: "Cognitive", symptoms: ["Reduced concentration and decisiveness", "Psychomotor slowing or agitation", "Recurrent thoughts of death, suicidal ideation", "Self-critical rumination"] },
    { category: "Somatic", symptoms: ["Sleep disturbance (insomnia or hypersomnia)", "Fatigue or loss of energy", "Appetite/weight change", "Loss of libido", "Unexplained aches (common presenting feature in India)"] },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "296.x / F32",
      criteria: [
        "≥ 5 symptoms over ≥ 2 weeks, one of which must be depressed mood or anhedonia",
        "Symptoms: weight/appetite change, insomnia/hypersomnia, psychomotor change, fatigue, worthlessness/guilt, poor concentration, recurrent death thoughts",
        "Clinically significant distress or functional impairment",
        "Not attributable to substance or medical condition",
        "Never met criteria for a manic/hypomanic episode (that is bipolar disorder)",
      ],
      duration: "≥ 2 weeks",
      indianNote: "Somatic presentation (aches, fatigue, 'gas') often precedes mood complaints in Indian primary care — ask about mood directly.",
    },
    {
      system: "ICD-11",
      code: "6A70–6A7Z",
      criteria: [
        "Depressive episode: depressed mood or loss of interest most of the day, nearly every day, for at least 2 weeks",
        "Additional symptoms across affective, cognitive-behavioural and vegetative domains",
        "Severity graded by functional impact: mild / moderate / severe, with or without psychotic symptoms",
        "Separate specifiers for single vs recurrent episode and for current symptoms",
      ],
      duration: "≥ 2 weeks",
    },
  ],
  severityScales: [
    {
      name: "PHQ-9",
      fullName: "Patient Health Questionnaire-9",
      measures: "Nine DSM depression symptoms over the past 2 weeks; self-administered in < 3 minutes; Hindi and regional-language versions validated in India.",
      ranges: [
        { min: 0, max: 4, severity: "Minimal", action: "Rule out other causes; monitor" },
        { min: 5, max: 9, severity: "Mild", action: "Watchful waiting + guided self-help / psychoeducation; re-screen 2–4 weeks (NICE NG222)" },
        { min: 10, max: 14, severity: "Moderate", action: "Structured psychological therapy or antidepressant — patient-preference discussion" },
        { min: 15, max: 19, severity: "Moderately severe", action: "Antidepressant + psychological therapy" },
        { min: 20, max: 27, severity: "Severe", action: "Antidepressant + therapy; assess suicide risk urgently; consider referral" },
      ],
      indianNote: "Item 9 asks about self-harm thoughts — never skip reviewing it, and use it as the gateway to a fuller risk assessment, not a score.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Bipolar depression", distinguishingFeatures: "Past elevated-energy episodes, reduced-need-for-sleep, pressurised speech, episodic overspending; family history of mania; antidepressant-alone can trigger switching", keyDifferentiator: "Always ask: 'Have you ever had days of unusual energy, needing little sleep?' — a missed past mania is the classic exam trap" },
    { condition: "Adjustment disorder", distinguishingFeatures: "Identifiable stressor within 3 months, symptoms out of proportion but not meeting full episode criteria, begins to resolve when stressor clears", keyDifferentiator: "Stressor timing + sub-syndromal symptom count" },
    { condition: "Grief / bereavement", distinguishingFeatures: "Waves of longing with preserved self-esteem; moments of pleasure amid sadness; guilt about the deceased rather than the self", keyDifferentiator: "DSM-5-TR removed the bereavement exclusion — judge the syndrome, and remember the two often coexist" },
    { condition: "Hypothyroidism", distinguishingFeatures: "Cold intolerance, dry skin, bradycardia, weight gain; TSH settles it", keyDifferentiator: "Order TSH in every first-episode depression — cheap, treatable, and a favourite exam question" },
    { condition: "Anaemia / B12–D deficiency", distinguishingFeatures: "Fatigue-dominant picture, dietary or malabsorption history; common and correctable in Indian practice", keyDifferentiator: "CBC ± B12/D levels when fatigue dominates" },
    { condition: "Substance-induced", distinguishingFeatures: "Alcohol or cannabis dependence; mood tracks use/withdrawal", keyDifferentiator: "Timeline against substance use — screen every patient" },
    { condition: "Negative-symptom schizophrenia", distinguishingFeatures: "Primary avolition/flat affect without pervasive depressed mood; prodromal decline", keyDifferentiator: "Presence of positive-symptom history; affect vs mood distinction" },
    { condition: "Dysthymia (persistent depressive disorder)", distinguishingFeatures: "Chronic lower-grade mood ≥ 2 years; can double with a major episode ('double depression')", keyDifferentiator: "Duration ≥ 2 years vs ≥ 2 weeks" },
  ],
  management: [
    { category: "lifestyle", name: "Behavioural activation + guided self-help", description: "Structured activity scheduling that reverses withdrawal; the best-evidenced low-intensity first step.", whenToUse: "Mild episode (PHQ-9 5–9); NICE NG222 Step 2.", indianContext: "Deliverable by trained counsellors at district level; workbooks translatable." },
    { category: "psychotherapy", name: "CBT / IPT / behavioural couples therapy", description: "Structured psychological therapy targeting cognitive distortions (CBT) or interpersonal loss/transition (IPT) — comparable efficacy to antidepressants in mild-moderate episodes, with relapse-protection after termination.", whenToUse: "Mild to moderate (with or without drugs per preference); first choice where available.", indianContext: "IPS CPG endorses CBT/IPT; access concentrated in metros — digital + counsellor-delivered formats are scaling." },
    { category: "pharmacotherapy", name: "SSRI (first-line)", description: "Sertraline, escitalopram, fluoxetine among the best-tolerated; Cipriani 2018 network meta-analysis supports similar efficacy with tolerability differences driving choice.", whenToUse: "Moderate-severe episode, or mild with preference/history; combine with therapy for severe episodes.", indianContext: "Sertraline and fluoxetine widely available, low-cost generics + Jan Aushadhi — see KYP drug lessons." },
    { category: "pharmacotherapy", name: "Alternative / second-line agents", description: "Mirtazapine (insomnia, appetite loss, no sexual dysfunction), bupropion (fatigue/anhedonia, avoids sexual side-effects, avoid in seizures/eating disorder), SNRIs (pain comorbidity), TCAs (cheapest; cardiotoxic in overdose — never first choice where suicide risk is high).", whenToUse: "Non-response, intolerance or symptom-targeted selection.", indianContext: "Amitriptyline remains over-prescribed for its price — reserve when safer options fail." },
    { category: "brain-stimulation", name: "ECT", description: "The most effective acute treatment for severe depression — indicated for psychotic depression, refusal of food/Fluids, high suicide risk, and treatment resistance.", whenToUse: "Severe life-threatening depression; CATATONIA (with benzodiazepines).", indianContext: "Widely available in Indian medical colleges; MHCA 2017 requires consent and legal safeguards." },
    { category: "brain-stimulation", name: "rTMS / esketamine", description: "rTMS for non-response where available; intranasal esketamine for treatment-resistant depression under specialist supervision (dissociation/HTN monitoring).", whenToUse: "Treatment-resistant depression at specialist centres.", indianContext: "Limited availability, high cost — tertiary centres only." },
  ],
  safety: {
    redFlags: [
      "Active suicidal intent, plan or means",
      "Refusing food/fluids or not sleeping for days",
      "Psychotic features (nihilistic guilt, delusions)",
      "Postpartum onset with thoughts of harming the infant",
      "Sudden 'improvement' after a period of hopelessness (planning)",
      "Concomitant alcohol/benzodiazepine use with access to means",
    ],
    urgentGuidance:
      "Suicide risk is assessed at every encounter, never predicted from a score alone. Explore thoughts, plan, means and protective factors. WHO estimates 727,000 suicide deaths yearly (2021 estimates) — most people who die by suicide have seen a health worker in the preceding month. In India: iCall / Tele-MANAS 14416, and MHCA 2017 protects rights (no treatment without consent except the narrow statutory exceptions).",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "First-line SSRI", rationale: "Balanced efficacy-tolerability; cardiac-safe; best-studied in medical comorbidity — the default SSRI in Indian practice guidelines." },
    { name: "Escitalopram", slug: "escitalopram", role: "First-line SSRI", rationale: "Fewest interactions — the practical choice on polypharmacy (elderly, TB/HIV regimens)." },
    { name: "Fluoxetine", slug: "fluoxetine", role: "First-line SSRI", rationale: "Long half-life forgives missed doses; activating — useful in fatigue-dominant, cautious in agitation/anxiety insomnia." },
    { name: "Bupropion", slug: "bupropion", role: "Second-line NDRI", rationale: "For anhedonia/fatigue or SSRI sexual dysfunction; contraindicated in seizures and eating disorders." },
    { name: "Mirtazapine", slug: "mirtazapine", role: "Second-line NaSSA", rationale: "Wins where insomnia + appetite loss dominate; no sexual dysfunction." },
    { name: "Amitriptyline", slug: "amitriptyline", role: "Cheapest alternative (caution)", rationale: "Effective but cardiotoxic in overdose — avoid as first-line where suicide risk is present; the classic Indian cost-reality trade-off." },
  ],
  contentGaps: [],
  patientGuide: {
    whatIsIt:
      "Depression is a real medical condition of the brain and body — not weakness, laziness or a punishment. It affects how you feel, think, sleep, eat and handle daily life for weeks at a time, and it changes body chemistry in measurable ways.",
    whatCausesIt:
      "It usually takes several things together: your genes, long-standing stress or hurt, painful life events, some medical illnesses and some medicines. No single cause, and nothing you 'brought on yourself'.",
    symptoms:
      "Feeling low or empty most of the day, losing interest in things you enjoyed, tiredness, disturbed sleep, appetite change, poor concentration, feeling worthless, and sometimes thoughts that life is not worth living.",
    treatment:
      "For milder depression, talking therapy and lifestyle work well. For moderate or severe depression, a combination of therapy and medicine (an antidepressant, usually for at least 6–9 months after you feel better) works best. Medicines take 2–4 weeks to begin helping — that is normal, not failure.",
    selfHelp: [
      "Keep a daily rhythm: fixed wake time, sunlight in the morning, meals on time",
      "Behavioural activation: schedule small, doable activities even before motivation returns — action comes first, mood follows",
      "Walk 30 minutes most days — exercise has genuine antidepressant evidence",
      "Limit alcohol — it is a depressant that deepens the episode",
      "Tell one trusted person how you feel — isolation feeds depression",
    ],
    whenToSeekHelp: [
      "Low mood or loss of interest most days for more than two weeks",
      "Work, studies or home responsibilities slipping",
      "Sleep or appetite clearly disturbed",
      "Any thoughts of harming yourself — seek help the same day (Tele-MANAS 14416 is free, confidential, 24×7, in Indian languages)",
    ],
    indianResources: [
      "Tele-MANAS national tele-mental-health helpline: 14416 (toll-free, 24×7, multiple Indian languages)",
      "District hospital / DMHP psychiatric services — walk-in OPDs in most districts",
      "iCall (9152987821) — psychosocial helpline by TISS",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines:
      "Indian Psychiatric Society Clinical Practice Guidelines for the Management of Depression (Gautam et al., Indian J Psychiatry 2017) — Indian-adapted stepped care: identify early, treat adequately, combine modalities for moderate-severe disease, and mind the treatment gap.",
    systemContext:
      "Most depression in India presents in primary care and general OPDs, frequently as aches, fatigue or 'gas' — 2.7% current prevalence (NMHS 2015–16), ~10.6% of adults have any mental disorder (PIB 2025). The District Mental Health Programme (DMHP) places a psychiatrist/psychiatric social worker in most district hospitals; medical-college psychiatry departments handle severe and resistant cases.",
    programmeContext:
      "National Mental Health Programme (NMHP) since 1982; Tele-MANAS (14416) — 51+ cells across all states, >10 lakh calls handled by 2024 — free, 24×7, multilingual. Mental Healthcare Act 2017: rights-based care, decriminalised suicide attempt (Sec 115 presumes severe stress and mandates care, not prosecution), advance directives, and consent requirements for ECT.",
    costConsiderations:
      "Sertraline/fluoxetine/escitalopram generics and Jan Aushadhi outlets make SSRIs affordable; amitriptyline is cheaper still but overdose-toxic — a real-world tension when cost drives choice. Psychological therapy access is the bigger constraint: counsellor-delivered behavioural activation and digital CBT formats are the scalable answers.",
    culturalConsiderations:
      "Somatic idiom is the common presentation — ask mood questions directly rather than waiting for them. Stigma delays help-seeking, especially for men and for marriage-related decisions; family involvement is usually an asset if engaged early. Faith and religious healers are often first contact — engage respectfully, screen for harm, and route to care.",
    patientCounselling: [
      "Name the illness plainly: 'This is depression — a treatable medical condition, not weakness.'",
      "Set the 2–4 week expectation: medicine works gradually; stopping at day 10 is the commonest failure.",
      "Continue ≥ 6 months after feeling better — stopping early is the commonest cause of return.",
      "Explain alcohol and sleep as modifiers of recovery.",
      "Give Tele-MANAS 14416 and one emergency contact before the patient leaves.",
      "Involve one family member in the plan with the patient's consent.",
    ],
  },
  decisionPath: {
    title: "Assessing and treating a suspected depressive episode (educational)",
    startNodeId: "n1",
    nodes: [
      { id: "n1", question: "Low mood and/or anhedonia most of the day, nearly every day, for ≥ 2 weeks?", branches: [ { label: "Yes", next: "n2" }, { label: "No — sub-threshold", next: "n8" } ] },
      { id: "n2", question: "Immediate risk? (suicidal intent/plan/means, refusing food or fluids, psychosis, catatonia)", branches: [ { label: "YES — emergency", next: "n3" }, { label: "No", next: "n4" } ] },
      { id: "n3", question: "Emergency management", recommendation: "Do not leave alone; remove means; urgent psychiatric referral; consider admission. ECT if psychotic/catatonic/refusing food. Document risk assessment. In India, suicide attempt mandates care, not prosecution (MHCA 2017 Sec 115).", reasoning: "Severe depression with risk is a medical emergency with highly effective treatment (ECT has the fastest response)." },
      { id: "n4", question: "Screened for bipolarity, substances, medical mimics?", branches: [ { label: "Mania history present", next: "n9" }, { label: "TSH/CBC pending or clean", next: "n5" } ] },
      { id: "n5", question: "Severity by PHQ-9 + function?", branches: [ { label: "Mild (5–9)", next: "n6" }, { label: "Moderate (10–14)", next: "n7" }, { label: "Severe (≥ 15)", next: "n10" } ] },
      { id: "n6", question: "Mild episode", recommendation: "Watchful waiting + guided self-help/behavioural activation + psychoeducation; re-screen 2–4 weeks; escalate if deteriorating (NICE NG222).", reasoning: "Low-intensity first avoids exposing mild illness to drug side-effects; structured review is not 'doing nothing'." },
      { id: "n7", question: "Moderate episode", recommendation: "Patient-preference discussion: structured psychological therapy OR antidepressant (SSRI first-line). Combine if function is poor. Review 2–4 weeks.", reasoning: "NICE NG222 menu of options; combining helps where either alone is unlikely to reach remission." },
      { id: "n8", question: "Sub-threshold / adjustment", recommendation: "Psychoeducation + watchful waiting; address the stressor; re-screen. If ≥ 5 symptoms emerge, re-enter the pathway.", reasoning: "Adjustment reactions and brief mood responses resolve; over-treatment carries its own costs." },
      { id: "n9", question: "Past mania/hypomania", recommendation: "Treat as BIPOLAR depression — antidepressant monotherapy risks a switch. Mood stabiliser basis + specialist referral. See the Bipolar Disorders lesson.", reasoning: "The single costliest miss in depression management — always ask the two-question screen for past elevated episodes." },
      { id: "n10", question: "Moderately severe–severe", recommendation: "Antidepressant (SSRI) + psychological therapy; structured safety plan; review weekly; consider ECT if psychotic, catatonic or not eating; assess admission need.", reasoning: "Combination therapy outperforms either alone in severe episodes (NICE NG222; Cipriani 2018 for drug choice)." },
    ],
  },
  commonMistakes: [
    { mistake: "Prescribing an antidepressant without screening for past mania", why: "Unrecognised bipolar depression treated with an SSRI alone risks mood switching and cycle acceleration.", correction: "Two questions, every patient: 'Ever had days of unusual energy, racing thoughts, needing little sleep?'" },
    { mistake: "Stopping the antidepressant the day the patient feels better", why: "Early discontinuation after remission roughly doubles relapse risk.", correction: "Continue ≥ 6 months (≥ 2 years after a third episode); taper over weeks, never abruptly." },
    { mistake: "Calling day-7 no-improvement 'treatment failure'", why: "The mechanism needs 2–4 weeks for benefit; early abandonment is the commonest cause of apparent non-response.", correction: "Pre-frame the timeline at prescription; review at 2–4 weeks before judging response." },
    { mistake: "Missing hypothyroidism, anaemia or B12 deficiency", why: "Fatigue-dominant presentations overlap; the conditions are common, cheap to test and fully treatable.", correction: "TSH + CBC (± B12/D) at first-episode diagnosis." },
    { mistake: "Treating the symptom checklist but not the function", why: "Partial response (PHQ-9 10 → 7) still predicts relapse; remission is the target.", correction: "Measure with PHQ-9 each visit; aim < 5; if two adequate trials fail, reassess diagnosis, adherence, comorbidity (including alcohol) before 'treatment-resistant' labels." },
    { mistake: "Prescribing amitriptyline first because it is cheapest", why: "Cardiotoxicity in overdose makes TCAs hazardous exactly where the risk is highest.", correction: "Low-cost SSRIs (sertraline, fluoxetine) and Jan Aushadhi pricing close most of the cost gap safely." },
    { mistake: "Ignoring alcohol", why: "Alcohol use disorder maintains depression and defeats antidepressants; both directions of the trap are common.", correction: "Screen (CAGE/AUDIT-C) every depressive patient; treat or refer concurrently." },
    { mistake: "One-session 'cure' expectations", why: "Depression care is phased: acute → continuation → maintenance; dropping out mid-phase is the rule, not the exception.", correction: "Schedule follow-ups at the first visit (2, 4, 8 weeks...); use Tele-MANAS between visits." },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define a depressive episode (DSM-5-TR: ≥ 5 symptoms ≥ 2 weeks, mood/anhedonia mandatory) and grade severity.",
        "First-line antidepressants and the reasoning for SSRIs over TCAs.",
        "Indications for ECT.",
        "Two questions for screening bipolarity in a depressive presentation.",
        "PHQ-9 bands and clinical actions.",
      ],
      practical: [
        "Counsel a patient starting sertraline: timeline, continuation, red-flag symptoms.",
        "Take a history from a low-mood patient and present the formulation.",
        "Administer and interpret a PHQ-9; perform a suicide-risk assessment.",
      ],
      longAnswer: [
        "Aetiology and management of major depressive disorder (biopsychosocial structure).",
        "Differential diagnosis of a two-week low-mood presentation.",
        "Antidepressant classes: mechanisms, key adverse effects, first-line reasoning.",
      ],
    },
    neetPg: {
      highYield: [
        "≥ 2 weeks + ≥ 5 symptoms + mood/anhedonia — the two mandatory symptoms.",
        "1.5 : 1 female preponderance; peak onset 20s–40s.",
        "First-line: SSRIs; TCAs cardiotoxic in overdose (never first-line with suicide risk).",
        "ECT: psychotic depression, catatonia, refusal of food, high suicide risk.",
        "Continuation ≥ 6 months; maintenance ≥ 2 years after ≥ 3 episodes.",
        "Screen every first episode: TSH, CBC; ask about past mania.",
        "Post-stroke and post-MI depression — common, treatable, worsen outcomes.",
        "Somatic presentation is the Indian primary-care pattern.",
      ],
      pyqConcepts: [
        "Diagnostic criteria counting questions (how many symptoms, how many days) — recurring across years.",
        "Antidepressant mechanism matching (SSRI/SNRI/NDRI/NaSSA → drugs).",
        "TCA overdose triad (coma, seizures, arrhythmia) + sodium bicarbonate.",
        "Serotonin syndrome recognition (clonus, hyperthermia, agitation) after SSRI+tramadol/linezolid.",
        "Which antidepressant in which special situation (pregnancy → sertraline; insomnia+appetite loss → mirtazapine; sexual dysfunction → bupropion).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "The young adult on fluoxetine who becomes acutely agitated and talkative — antidepressant-induced switch: stop, reassess bipolarity.",
        "Treatment-resistant fatigue-dominant depression → check TSH, B12, alcohol before escalating.",
        "Peripartum depression with intrusive thoughts — safety of SSRIs in breastfeeding (sertraline preferred) vs risks of untreated depression.",
        "ECT decision-making in a patient refusing food with nihilistic delusions.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "PHQ-9 cut-offs and the item-9 risk question.",
        "Tele-MANAS 14416 and MHCA 2017 (decriminalisation of attempt).",
        "Serotonin syndrome vs neuroleptic malignant syndrome.",
        "First-line SSRI choice and 2–4 week onset.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Every 'treatment-resistant depression' label deserves three checks: adherence, bipolarity, and alcohol — in that order.",
        "Ask the two-question bipolarity screen before the first prescription, not after the switch.",
        "Remission (PHQ-9 < 5) is the target; partial response is a treatment decision point, not a resting place.",
        "Continuation-phase failures cause more relapses than drug failures — the prescription calendar matters as much as the prescription.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The exhausted shopkeeper",
      presentation: "A 34-year-old shopkeeper brought by his wife: 'he has no interest in anything, sleeps badly, lost weight, sits all day.'",
      history: "Six weeks of low mood, early-morning waking, appetite loss, selling stock below cost from loss of interest, guilt about 'failing the family'. No past elevated-energy episodes; father treated for depression; alcohol 1–2 units weekly. TSH and CBC normal.",
      examination: "Psychomotor slowing, downcast affect, thought content: worthlessness and hopelessness; no delusions; insight present; acknowledges passive death thoughts without plan or intent.",
      diagnosis: "Major depressive disorder, moderate (PHQ-9 = 17), melancholic features (early-morning waking, anhedonia, psychomotor change). Differential: hypothyroidism excluded, substance excluded by history.",
      management: "Sertraline 50 mg daily + psychoeducation + four structured counselling visits (behavioural activation principles); safety plan with wife informed; review 2 weeks.",
      outcome: "At week 3 sleep and appetite improved; PHQ-9 11 at week 4 (dose unchanged, education on the timeline); PHQ-9 4 at week 10. Continuation for 9 months agreed; family counselling on early warning signs.",
      teachingPoints: [
        "Ask the bipolarity screen before prescribing — negative here, positive in the post-partum case below.",
        "Pre-framing the 2–4 week timeline prevented early self-discontinuation.",
        "Somatic work-up (TSH/CBC) was cheap and settled the differential quickly.",
      ],
    },
    {
      title: "The 'agitated' new mother",
      presentation: "A 27-year-old, 8 weeks postpartum, sleepless for days, 'full of plans', spending, and has told her husband that God has fixed everything.",
      history: "Two weeks of escalating energy, reduced need for sleep, rapid pressurised speech and grandiose beliefs; before that a 3-week period of low mood, crying and inability to feed the baby, treated as 'postpartum blues' with reassurance.",
      examination: "Pressurised speech, flight of ideas, grandiose delusions, poor insight; baby safe with family.",
      diagnosis: "Bipolar I disorder, current episode mania with postpartum onset — the earlier 'blues' was likely the depressive dip before the switch.",
      management: "Urgent psychiatric referral; admission with the baby where possible (mother-and-baby units / family-ward models); antipsychotic initiation; antidepressant stopped.",
      outcome: "Symptoms settled over 3 weeks on quetiapine; diagnosis explained to the family; mood-stabiliser planning for future pregnancies.",
      teachingPoints: [
        "Peripartum 'depression' that suddenly brightens into energy is a switch until proven otherwise.",
        "This is the missed-mania scenario the two-question screen exists to catch.",
        "Postpartum psychosis/mania is a psychiatric emergency.",
      ],
    },
  ],
  clinicalPearls: [
    "Two questions save more lives than any antidepressant choice: past elevated energy + current death thoughts.",
    "The presenting complaint is often the body, not the mood — in Indian primary care, ask mood directly.",
    "Remission is the target (PHQ-9 < 5), not improvement.",
    "The best predictor of relapse is stopping treatment early; the second is unrecognised bipolarity.",
    "ECT is not a punishment — it is the fastest, most effective acute treatment for severe depression.",
    "Alcohol is the great deceiver: it self-medicates the evening and deepens the morning.",
  ],
  highYieldSummary: [
    "Depression = ≥ 2 weeks of mood/anhedonia + ≥ 3 more symptoms + functional impairment; female 1.5:1; peak 20s–40s.",
    "Differential spine: bipolarity (always), thyroid/anaemia/B12 (first episode), substances (always), grief/adjustment (timeline), negative-symptom schizophrenia (positive-symptom history).",
    "Neuroscience honestly graded: plasticity/network accounts supported; 'low serotonin' is a drug-mechanism shorthand, not the disease.",
    "Management ladder: mild → guided self-help + behavioural activation; moderate → therapy OR SSRI (preference); severe → SSRI + therapy ± ECT for psychotic/catatonic/food-refusing.",
    "Antidepressant rules: SSRI first; 2–4 week onset; ≥ 6 month continuation; taper never stop; amitriptyline cheap but overdose-lethal.",
    "India layer: NMHS 2.7%/10.6%; DMHP + Tele-MANAS 14416; MHCA 2017 (rights, consent, decriminalised attempt); IPS CPG stepped care.",
    "Safety: suicide risk assessed every encounter; warning signs = intent/plan/means, food refusal, psychosis, postpartum with intrusive thoughts.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    { id: "dep-mq1", question: "The two symptoms that MUST be present (at least one) for a DSM-5-TR major depressive episode are:", options: ["Insomnia and fatigue", "Depressed mood and anhedonia", "Guilt and suicidal thoughts", "Psychomotor slowing and weight loss"], correctIndex: 1, explanation: "Depressed mood OR anhedonia is mandatory; the remaining symptoms (≥ 5 total overall) can be any mix.", afterSectionId: "symptoms" },
    { id: "dep-mq2", question: "A first-episode depression work-up MOST cost-effectively excludes the two commonest medical mimics with:", options: ["MRI brain", "TSH + CBC", "Vitamin D alone", "24-hour urinary cortisol"], correctIndex: 1, explanation: "Hypothyroidism and anaemia are common, cheap to exclude and fully treatable — TSH and CBC at first diagnosis.", afterSectionId: "differential" },
    { id: "dep-mq3", question: "A patient on sertraline reports no benefit at day 10. The correct action is:", options: ["Switch to another SSRI", "Stop the drug", "Reassure and review at 2–4 weeks", "Double the dose immediately"], correctIndex: 2, explanation: "The therapeutic mechanism (receptor adaptation → plasticity) takes 2–4 weeks; day-10 non-response is expected, not failure.", afterSectionId: "management" },
    { id: "dep-mq4", question: "Absolute indications for ECT include all EXCEPT:", options: ["Psychotic depression", "Catatonia", "Mild depression responding to CBT", "Depression with refusal of food and fluids"], correctIndex: 2, explanation: "Mild CBT-responsive depression has no indication for ECT; the other three are classic absolute indications.", afterSectionId: "management" },
  ],
  activeRecallQuestions: [
    { question: "Recite the DSM-5-TR criteria for a major depressive episode — count, window, and the two mandatory symptoms.", answer: "≥ 5 symptoms for ≥ 2 weeks, most of the day, nearly every day, with distress/impairment; one symptom must be depressed mood or anhedonia; exclusions: substances, medical illness, and any past mania/hypomania.", topic: "Diagnosis" },
    { question: "Why is 'low serotonin causes depression' the wrong sentence to teach, and what is the better one?", answer: "The 2023 Moncrieff umbrella review found no consistent evidence that depression = low serotonin activity; serotonin manipulation explains how our drugs act (SERT blockade within hours) but not the disorder. Better: a stress-diathesis convergence on neuroplasticity and circuits, with monoamine drugs as one effective entry point whose benefits mature over weeks via downstream adaptation.", topic: "Mechanism" },
    { question: "Walk through the mechanism of the 2–4 week antidepressant delay.", answer: "SERT blockade raises synaptic 5-HT within hours → 5-HT1A autoreceptor desensitisation over days–weeks (removing the brake) → CREB-mediated gene expression → BDNF-driven synaptic remodelling → clinical benefit at 2–4 weeks, full effect 6–8 weeks.", topic: "Mechanism" },
    { question: "Give the bipolarity screen and why missing it matters.", answer: "Ask about past periods of elevated/irritable energy with reduced need for sleep, pressurised speech, or reckless spending. Missing past mania leads to SSRI monotherapy in bipolar depression, risking switching and cycle acceleration.", topic: "Differential" },
    { question: "Construct the stepped-care plan by PHQ-9 band.", answer: "5–9 mild: watchful waiting + guided self-help/behavioural activation, re-screen 2–4 weeks. 10–14 moderate: structured therapy OR SSRI (patient preference; combine if function poor). 15–19: SSRI + therapy. ≥ 20: SSRI + therapy, urgent risk assessment, consider referral; ECT for psychotic/catatonic/food-refusing.", topic: "Management" },
    { question: "How long do you continue an antidepressant after remission, and when do you extend it?", answer: "≥ 6 months after remission for a first episode; ≥ 2 years after a third episode, severe/chronic episodes, or strong risk factors; always taper gradually.", topic: "Management" },
    { question: "Name four red flags in depression that change management the same day.", answer: "Suicidal intent/plan/means; refusing food or fluids; psychotic features (nihilistic guilt); postpartum with intrusive thoughts of harm — plus the subtle one: sudden 'improvement' after hopelessness.", topic: "Safety" },
    { question: "What did NMHS 2015–16 find for depression in India, and what are the two programme responses an MBBS graduate should know?", answer: "~2.7% current prevalence (~1 in 20); ~10.6% of adults with any mental disorder. Programme responses: DMHP (district-level services) and Tele-MANAS 14416 (national 24×7 multilingual helpline, 51+ cells); plus the MHCA 2017 rights framework including decriminalisation of suicide attempt.", topic: "Indian Practice" },
  ],
  faqs: [
    { question: "Is depression just sadness?", answer: "No. Sadness is a normal emotion that comes in waves and preserves your sense of self. Depression is a persistent syndrome — mood plus sleep, appetite, energy, concentration and self-worth changes that last weeks and impair function. It also has measurable biology: stress-system, neurotrophic and circuit changes." },
    { question: "Is depression caused by a 'chemical imbalance'?", answer: "That slogan oversimplifies decades of work. The honest version: many systems interact — stress hormones, inflammation, neurotrophins (BDNF), brain circuits — and no single deficiency has been proven. Antidepressants work through one entry point into that biology (serotonin/noradrenaline transport), with the therapeutic effect maturing over weeks as the brain adapts." },
    { question: "Will I need antidepressants forever?", answer: "Usually not. Standard advice: continue 6–9 months after you feel better for a first episode. Long-term maintenance is reserved for recurrent (≥ 3 episodes), severe or chronic courses — a decision made with your doctor, not assumed." },
    { question: "Are antidepressants addictive?", answer: "No — they do not cause tolerance or craving. Stopping abruptly can cause discontinuation symptoms (dizziness, flu-like feelings, sensory 'zaps'), which is why they are tapered — that is a withdrawal effect of the drug leaving the body, not addiction." },
    { question: "What actually helps besides medicine?", answer: "Behavioural activation (scheduled activity), regular exercise (30 minutes most days), sleep regularity, limiting alcohol, and structured psychotherapy (CBT/IPT) all have real evidence. For mild depression these can be sufficient; for moderate-severe they combine with medicine." },
    { question: "Can I take antidepressants while pregnant or breastfeeding?", answer: "This is individualised — but untreated depression also harms mother and baby. Sertraline is among the best-studied and preferred in pregnancy/breastfeeding. Never stop abruptly on your own; discuss with your doctor (ideally before conception)." },
    { question: "When is hospital (or ECT) needed?", answer: "For severe depression with suicide risk, psychosis, catatonia, or refusing food and fluids. ECT today is done under anaesthesia with consent safeguards — it is the fastest effective treatment for severe depression, not a punishment." },
    { question: "My relative won't accept they are depressed. What do I do?", answer: "Lead with function, not labels: sleep, appetite, work, interest. Avoid blame, offer to come along to an appointment, and share Tele-MANAS 14416 (free, confidential, in Indian languages). Watch for withdrawal, hopelessness or giving-away possessions, and act immediately if death talk emerges." },
    { question: "How is this tested in NEET-PG?", answer: "Counting questions (5 symptoms / 2 weeks), mandatory-symptom questions, mechanism matching (SSRI/SNRI/NDRI/NaSSA), special-situation drug choice (pregnancy, post-MI, elderly), TCA overdose, serotonin syndrome, ECT indications and the 6-month continuation rule are the recurring patterns." },
  ],
  references: {
    guidelines: [
      { source: "NICE NG222 — Depression in adults: treatment and management (2022)", url: "https://www.nice.org.uk/guidance/ng222" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for the Management of Depression (Gautam S et al., Indian J Psychiatry 59(Suppl 4)) (2017)", url: "https://pmc.ncbi.nlm.nih.gov/" },
      { source: "WHO — Depressive disorder (depression) fact sheet (2025 (reviewed 2026-09))", url: "https://www.who.int/news-room/fact-sheets/detail/depression" },
    ],
    textbooks: [
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — Mood disorders (2022)" },
      { source: "Stahl's Essential Psychopharmacology, 5th ed. — Depression chapters (2021)" },
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th ed. — Antidepressants (2019)" },
    ],
    trials: [
      { source: "Cipriani A et al. Comparative efficacy and acceptability of 21 antidepressant drugs (network meta-analysis) (2018)", url: "https://doi.org/10.1016/S0140-6736(17)32802-7" },
      { source: "STAR*D — Sequenced Treatment Alternatives to Relieve Depression (outcome hierarchy; remission as target) (2006)" },
    ],
    reviews: [
      { source: "Moncrieff J et al. The serotonin theory of depression: a systematic umbrella review of the evidence. Mol Psychiatry (2023)", url: "https://doi.org/10.1038/s41380-022-01661-0" },
      { source: "Mistry S, Malhi G — Neuroplasticity and depression model summaries (current synthesis framing) (2022)" },
    ],
    patientResources: [
      { source: "Tele-MANAS national tele-mental-health helpline (14416), MoHFW India (2024–25)", url: "https://telemanas.mohfw.gov.in" },
      { source: "iCall psychosocial helpline, TISS (9152987821)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language: what depression is, what treatment involves, and where Indian help is.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "Foundations, mechanism, clinical picture, diagnosis and management at UG depth.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with exam lens, clinical cases, drug navigation and India layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — full evidence grading, decision path, cases, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "What depression is, how common it is, and how it connects to the rest of psychiatry.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define a depressive episode, quote global and Indian prevalence with sources, and place depression inside the biopsychosocial model." },
    { number: 2, title: "Mechanism & Neuroscience", description: "What actually happens in the brain — graded honestly.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the plasticity model, grade the serotonin story honestly, trace the 2–4 week delay mechanism, and name the key regions and systems." },
    { number: 3, title: "Clinical Practice", description: "Recognise it, grade it, differentiate it, treat it, counsel the patient.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can apply DSM-5-TR/ICD-11 criteria, interpret PHQ-9, build the differential (bipolarity first), and construct a stepped plan with safety assessment." },
    { number: 4, title: "Indian Context", description: "How depression presents and is managed in Indian practice.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You know the NMHS numbers, DMHP/Tele-MANAS/MHCA 2017 framework, the somatic presentation pattern, and the commonest Indian-practice errors." },
    { number: 5, title: "Exam Revision", description: "Exam lens, cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer criteria-counting, mechanism-matching and situation-based questions, and navigate from depression to every relevant KYP drug lesson." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and clean references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know exactly which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "WHO — Depressive disorder (depression) fact sheet", sourceType: "who", year: "2025", locator: "https://www.who.int/news-room/fact-sheets/detail/depression", dateReviewed: "2026-09-25" },
    { id: "S2", source: "ICD-11 — Depressive disorders (6A70–6A7Z)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-25" },
    { id: "S3", source: "DSM-5-TR — Major depressive episode criteria", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-25" },
    { id: "S4", source: "NICE NG222 — Depression in adults: treatment and management", sourceType: "guideline", year: "2022", locator: "https://www.nice.org.uk/guidance/ng222", dateReviewed: "2026-09-25" },
    { id: "S5", source: "Indian Psychiatric Society CPG — Management of Depression (Gautam S et al., Indian J Psychiatry 59 Suppl 4)", sourceType: "indian-guideline", year: "2017", locator: "https://pmc.ncbi.nlm.nih.gov/", dateReviewed: "2026-09-25" },
    { id: "S6", source: "National Mental Health Survey of India 2015–16 (Gururaj G et al., NIMHANS)", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-25" },
    { id: "S7", source: "Cipriani A et al. — 21 antidepressants network meta-analysis, The Lancet", sourceType: "meta-analysis", year: "2018", locator: "https://doi.org/10.1016/S0140-6736(17)32802-7", dateReviewed: "2026-09-25" },
    { id: "S8", source: "Moncrieff J et al. — Serotonin theory of depression: systematic umbrella review, Mol Psychiatry", sourceType: "systematic-review", year: "2023", locator: "https://doi.org/10.1038/s41380-022-01661-0", dateReviewed: "2026-09-25" },
    { id: "S9", source: "WHO — Suicide fact sheet (727,000 deaths; 2021 estimates)", sourceType: "who", year: "2026 (Aug)", locator: "https://www.who.int/news-room/fact-sheets/detail/suicide", dateReviewed: "2026-09-25" },
    { id: "S10", source: "PIB / MoHFW — Tele-MANAS programme status (51 cells; >10 lakh calls)", sourceType: "government", year: "2024", locator: "https://pib.gov.in/", dateReviewed: "2026-09-25" },
    { id: "S11", source: "Mental Healthcare Act, Government of India", sourceType: "government", year: "2017", dateReviewed: "2026-09-25" },
    { id: "S12", source: "Jayasankar P et al. — Epidemiology of common mental disorders in India (ICMR-supported)", sourceType: "primary", year: "2022", dateReviewed: "2026-09-25" },
    { id: "S13", source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed.", sourceType: "textbook", year: "2022", dateReviewed: "2026-09-25" },
    { id: "S14", source: "Stahl's Essential Psychopharmacology, 5th ed.", sourceType: "textbook", year: "2021", dateReviewed: "2026-09-25" },
    { id: "S15", source: "Howes OD, Kapur S — The dopamine hypothesis of schizophrenia: version III (analogy used for graded hypothesis teaching)", sourceType: "review", year: "2009", dateReviewed: "2026-09-25" },
  ],
  evidenceMap: [
    { text: "≈ 322 million people live with depression worldwide; ~1.5× more common in women.", grade: "established", sources: ["S1"] },
    { text: "Indian current prevalence of depression ≈ 2.7% (NMHS 2015–16); ~10.6% of adults have any mental disorder.", grade: "established", sources: ["S6", "S12"] },
    { text: "A major depressive episode requires ≥ 5 symptoms for ≥ 2 weeks with mood or anhedonia mandatory.", grade: "established", sources: ["S2", "S3"] },
    { text: "Stepped care: low-intensity interventions for mild episodes; therapy or antidepressant for moderate; combination and ECT consideration for severe (NICE NG222; IPS CPG).", grade: "established", sources: ["S4", "S5"] },
    { text: "Antidepressants have comparable efficacy with different acceptability profiles; SSRIs among the best-tolerated first-line agents.", grade: "established", sources: ["S7"] },
    { text: "The simple serotonin-deficiency model of depression is not supported by umbrella-review evidence; serotonin manipulation explains drug action, not the disorder.", grade: "established", sources: ["S8"] },
    { text: "The neuroplasticity account (BDNF loss with stress; restored connectivity with treatment) explains episode course and treatment convergence.", grade: "supported", sources: ["S14"], note: "Human evidence largely indirect (imaging, postmortem, treatment-response); animal models strong." },
    { text: "Antidepressant benefit begins at 2–4 weeks via downstream receptor adaptation and gene-expression change, not the acute amine rise.", grade: "supported", sources: ["S14", "S7"] },
    { text: "Continuation for ≥ 6 months post-remission; maintenance ≥ 2 years for recurrent illness.", grade: "established", sources: ["S4", "S5"] },
    { text: "WHO estimates 727,000 suicide deaths per year (2021 estimates).", grade: "established", sources: ["S9"] },
    { text: "Tele-MANAS: 51+ cells across states, >10 lakh calls by 2024; helpline 14416 free, 24×7, multilingual.", grade: "established", sources: ["S10"] },
    { text: "MHCA 2017 decriminalised suicide attempt (Sec 115: presumption of severe stress; duty to care) and mandates consent-based treatment.", grade: "established", sources: ["S11"] },
    { text: "Inflammatory-metabolic subtype contributes to fatigue/anhedonia and treatment resistance.", grade: "proposed", sources: ["S14", "S8"], note: "Active 2020s research; CRP-stratified trials ongoing." },
    { text: "ECT is the most effective acute treatment for severe depression; indicated for psychotic, catatonic, food-refusing and high-risk presentations.", grade: "established", sources: ["S4", "S5", "S13"] },
  ],
};
