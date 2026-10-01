import type { PsychiatryCourse } from "./types";

/**
 * SCHIZOAFFECTIVE & SCHIZOTYPAL DISORDERS — canonical Psychiatry course
 * (migration batch 1, Group C).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/schizoaffective-schizotypal.md — untouched
 * foundation), re-researched against current guidance (DSM-5-TR, ICD-11,
 * family-genetic literature, NMHS India) with per-claim provenance.
 *
 * KYP currently has NO antipsychotic or mood-stabiliser drug lessons —
 * every medication route that does not exist is recorded in contentGaps
 * (never invented). Antidepressant drug lessons exist and are linked
 * where they genuinely serve this course's teaching.
 */
export const schizoaffectiveSchizotypalCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "schizoaffective-schizotypal",
  title: "Schizoaffective & Schizotypal Disorders",
  shortName: "Schizoaffective",
  kind: "disorder",
  category: "Psychotic Disorder",
  groupLetter: "C",
  groupName: "Psychotic disorders",
  learningPath: ["Psychiatry", "Psychosis", "Schizoaffective & Schizotypal Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-27",

  tagline:
    "Two borderlands: psychosis with mood episodes, and a schizophrenia-flavoured temperament",
  summary:
    "Schizoaffective disorder combines genuine psychosis with genuine mood episodes. Schizotypal disorder is a lifelong personality organisation stopping short of true delusions, and the two need genuinely different treatments.",
  estimatedReadTime: "30 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the one rule that separates schizoaffective disorder from schizophrenia with depression: psychosis persisting alone for two weeks or more.",
    "Distinguish the bipolar and depressive subtypes of schizoaffective disorder and explain why any lifetime manic or mixed episode flips the subtype.",
    "Explain why schizotypal disorder is a lifelong personality organisation, not an episode illness, and why the majority never convert to schizophrenia.",
    "Recognise when a 'schizophrenia' or 'bipolar' diagnosis should be revised to schizoaffective on longitudinal follow-up.",
    "List what schizotypal disorder does NOT include: no true delusions, no clear hallucinations, no formal thought disorder.",
    "Describe the treatment skeleton for each condition and why they genuinely differ.",
    "Counsel an Indian family about marriage, disclosure and heritability questions honestly.",
    "Avoid the two classic exam traps: 'mood symptoms during psychosis make it schizoaffective' and 'schizotypal is early schizophrenia'.",
  ],
  quickFacts: [
    { label: "Schizoaffective prevalence", value: "≈ 0.3–0.7%", detail: "Of the population; about 1 in 4–5 first-episode psychosis admissions gets reclassified to it over follow-up as the mood component declares itself" },
    { label: "The swing-gate", value: "≥ 2 weeks", detail: "Delusions or hallucinations with NO prominent mood symptoms — the defining feature separating schizoaffective disorder from mood disorder with psychotic features" },
    { label: "Subtype rule", value: "Mania ever = bipolar type", detail: "Any lifetime manic or mixed episode makes it bipolar type, regardless of which pole dominates the course" },
    { label: "Schizotypal prevalence", value: "≈ 3–4%", detail: "In Western surveys — several-fold commoner than schizophrenia itself; the most common schizophrenia-spectrum presentation in genetic terms" },
    { label: "Suicide risk", value: "Attempts ≈ 30%", detail: "In some series of schizoaffective disorder — completed suicide exceeds schizophrenia; ask at every visit" },
    { label: "Schizotypal conversion", value: "Minority convert", detail: "Most people with schizotypal disorder never develop schizophrenia; the base pattern is stability, not progression" },
    { label: "ICD-11 vs DSM-5", value: "Different homes", detail: "Schizotypal sits in the schizophrenia spectrum in ICD-11 but in Cluster A personality disorders in DSM-5 — a favourite viva contrast" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The psychotic anchor of the differential — duration and negative symptoms separate them" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The mood anchor — psychosis only inside mood episodes argues for bipolar, not schizoaffective" },
    { label: "Acute & Transient Psychotic Disorders", type: "condition", href: "/psychiatry/acute-transient-psychosis/", note: "The Indian OPD psychosis — full recovery changes the map" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Depressive-type schizoaffective carries its treatment logic" },
    { label: "Persistent Delusional Disorder", type: "condition", href: "/psychiatry/delusional-disorder/", note: "Encapsulated delusion with preserved function — the narrow cousin" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "D2 signalling — the system antipsychotics act on" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "5-HT — the system SSRIs act on for the depressive pole" },
    { label: "Striatum", type: "brain-region", href: "#brain", note: "Salience circuitry — hyperdopaminergic in psychosis" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "SSRI added on top of the antipsychotic when depression persists after psychosis control" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "Fewest interactions — practical on polypharmacy" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Risk exceeds schizophrenia — assess at every review" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Schizoaffective disorder behaves neurobiologically like a collision of two climates: the dopaminergic dysregulation of schizophrenia plus the circadian-mood instability of bipolar disorder, in one brain. Schizotypal disorder is best understood as that same schizophrenia-spectrum diathesis running lifelong at 15–25% amplitude — the volume knob set low, pushed briefly higher only by stress.",
    steps: [
      "Start from the shared spectrum: schizophrenia, schizoaffective disorder and bipolar disorder share polygenic risk; schizoaffective loads in the families of BOTH schizophrenia and bipolar probands — it behaves genetically like a bridge.",
      "The psychotic engine: the same aberrant-salience circuitry as schizophrenia — presynaptic striatal dopamine dysregulation flags neutral events as significant, generating delusions and hallucinations.",
      "The mood engine: circadian-clock fragility and reward-circuit instability of the bipolar type — sleep loss and goal-attainment events can ignite manic or depressive storms that amplify the psychosis riding on them.",
      "The two-week window made biological: after the mood storm clears, the dopamine dysregulation persists alone — psychosis without mood — which is what separates schizoaffective disorder from mood disorder with psychotic features.",
      "Schizotypal at low volume: the same spectrum biology expressing as temperament — ideas of reference, odd speech, social discomfort — held lifelong below the delusion threshold because the dopaminergic dysregulation never reaches full amplitude.",
      "Stress as the hand on the knob: acute stressors transiently push schizotypal quasi-psychotic experiences toward the surface for minutes to hours, then settle back to baseline — which is why management is stress-and-skills, not lifelong antipsychotics.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "striatum", name: "Striatum", role: "Salience attribution — hyperactive dopaminergic signalling here flags neutral events as meaningful, the substrate of delusions in both conditions' psychotic poles.", grade: "supported" },
    { id: "pfc", name: "Prefrontal Cortex", role: "Cognitive control and negative-symptom territory — hypofunction contributes to the attention and apathy layer that is often the most disabling part of schizoaffective disorder.", grade: "supported" },
    { id: "amygdala", name: "Amygdala", role: "Threat and emotion processing — shares the mood-engine instability with bipolar disorder; suspiciousness rides on it.", grade: "proposed" },
    { id: "scna", name: "Suprachiasmatic Nucleus (circadian clock)", role: "Master circadian pacemaker — its fragility is the proposed reason sleep loss both triggers and signals mood episodes in the bipolar-type course.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The psychosis currency — striatal excess generates the positive symptoms; the shared target of every antipsychotic that treats this course's psychotic floor.", grade: "supported", drugConnection: "All antipsychotics act on D2 signalling — KYP antipsychotic drug lessons are a recorded content gap." },
    { name: "Serotonin", symbol: "5-HT", role: "The depressive-pole currency — SSRI augmentation of the antipsychotic addresses the mood half of the depressive type.", grade: "supported", drugConnection: "Sertraline and escitalopram lessons cover the SSRI pharmacology." },
    { name: "Norepinephrine", symbol: "NE", role: "Arousal and energy tone — implicated in the manic pole by proxy of the bipolar literature.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "sa-two-engine",
      name: "The two-engine cascade",
      steps: [
        { label: "Shared polygenic loading", detail: "Schizophrenia × bipolar risk variants in one person" },
        { label: "Two dysregulated systems", detail: "Striatal dopamine (psychosis) + circadian-reward instability (mood)" },
        { label: "Mood episode ignites", detail: "Mania or depression rides concurrent with psychosis" },
        { label: "Mood clears; dopamine stays hot", detail: "Psychosis alone ≥ 2 weeks — the diagnostic window" },
      ],
      clinicalManifestation: "The two-phase course: psychotic-depressive (or psychotic-manic) episodes followed by psychosis-only stretches that earn the schizoaffective label.",
      grade: "supported",
    },
    {
      id: "st-volume-knob",
      name: "The schizotypal volume knob",
      steps: [
        { label: "Spectrum diathesis at low amplitude", detail: "Lifelong 15–25% of full-spectrum 'volume'" },
        { label: "Odd beliefs, peculiar speech, social unease", detail: "Below delusion and hallucination thresholds" },
        { label: "Acute stress pushes the knob up", detail: "Quasi-psychotic episodes lasting minutes to hours" },
        { label: "Stress settles; baseline returns", detail: "No progression in the majority" },
      ],
      clinicalManifestation: "Stable lifelong eccentricity with transient, stress-linked quasi-psychotic flare-ups — managed with skills and stress reduction, not lifelong antipsychotics.",
      grade: "proposed",
    },
  ],
  timeline: [
    { id: "sa-early", time: "Early adulthood", title: "First episode", description: "Typical onset in the twenties; the first presentation is usually a mood episode with psychosis riding on it — everyone looks 'psychotic-depressive' or 'psychotic-manic'.", phase: "onset" },
    { id: "sa-mood-clears", time: "Weeks–months", title: "The mood clears", description: "The mood episode resolves with treatment — the phase where schizophrenia-with-depression and bipolar-with-psychotic-features are expected to lose their psychosis too.", phase: "peak" },
    { id: "sa-window", time: "≥ 2 weeks later", title: "Psychosis alone persists", description: "Delusions or hallucinations continue with NO prominent mood symptoms — the swing-gate that revises the diagnosis to schizoaffective disorder, usually retrospectively.", phase: "duration" },
    { id: "sa-maintenance", time: "Years", title: "Two-engine maintenance", description: "Antipsychotic floor + mood-side cover (mood stabiliser for bipolar type, cautious SSRI for depressive type); relapse prevention on both engines.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Schizoaffective disorder ≈ 0.3–0.7% of the population; schizotypal disorder ≈ 3–4% in Western surveys — several-fold commoner than schizophrenia (~0.5–1%).",
    indianPrevalence: "No dedicated Indian prevalence studies; NMHS 2015–16 pooled psychotic disorders (~1.4%) without separating these categories.",
    lifetimeRisk: "About 1 in 4–5 people admitted with a first psychotic episode gets reclassified as schizoaffective over follow-up, because the mood component declares itself only with time.",
    genderRatio: "Women slightly outnumber men in the depressive subtype; the bipolar subtype is more even. Schizotypal shows no strong sex skew.",
    ageOfOnset: "Schizoaffective: young adulthood. Schizotypal: traits visible by early adulthood, often traceable to childhood.",
    indianNotes: "High rates of fully-remitting acute psychoses and a strong cultural tolerance for odd or religious ideation both distort recognition — collateral history from a sibling usually resolves whether the family's 'normal odd' has become illness.",
  },
  etiology: [
    { category: "genetic", factor: "A bridge between two disorders", details: "Schizoaffective disorder loads in families of BOTH schizophrenia and bipolar probands; polygenic risk overlaps both. Schizotypal traits are the single best-studied endophenotype of schizophrenia, appearing several-fold more often in first-degree relatives." },
    { category: "biological", factor: "Dopaminergic dysregulation plus mood-circuit involvement", details: "Same striatal-salience story as schizophrenia plus the circadian-reward fragility of bipolar disorder; cannabis and stimulant exposure can precipitate earlier episodes." },
    { category: "psychological", factor: "Trauma and high expressed emotion", details: "Early adversity raises risk for earlier, more mixed presentations; high expressed emotion in the household predicts relapse exactly as in schizophrenia." },
    { category: "social", factor: "Isolation maintains schizotypal eccentricity", details: "The person without corrective social feedback never gets reality-tested; migration and urban effects are weaker than for schizophrenia." },
    { category: "environmental", factor: "Indian recognition delays", details: "Reluctance to bring 'odd but functioning' relatives to psychiatry means many schizotypal persons reach care only after decompensation — marriage breakdown, job loss, or a brief psychotic episode during exam stress or bereavement." },
  ],
  symptomClusters: [
    {
      category: "Schizoaffective — psychotic",
      symptoms: ["Delusions (often paranoid; occasionally grandiose during mania)", "Hallucinations (voices typical)", "Disorganised speech", "Rare catatonic features"],
    },
    {
      category: "Schizoaffective — mood",
      symptoms: ["Depressive type: low mood, anhedonia, guilt, suicidal thinking, insomnia, retardation", "Bipolar type: expansive mood, decreased need for sleep, overspending, hyperreligious or sexual disinhibition, reckless driving"],
    },
    {
      category: "Schizoaffective — cognitive & negative",
      symptoms: ["Attention and memory problems", "Apathy and social withdrawal — often the most disabling and most neglected layer"],
    },
    {
      category: "Schizotypal — cognitive-perceptual",
      symptoms: ["Ideas of reference held loosely, not with delusional conviction", "Odd beliefs / magical thinking (sixth sense, telepathy, horoscopes steering decisions)", "Unusual perceptual experiences — sensing a presence, illusions — NOT clear hallucinations", "Suspiciousness / paranoid ideation"],
    },
    {
      category: "Schizotypal — interpersonal & eccentric",
      symptoms: ["Odd speech: vague, over-elaborate, circumstantial, stilted — never truly incoherent", "Inappropriate or constricted affect", "Odd behaviour and appearance (unusual clothing, grooming drift, idiosyncratic habits)", "No close friends beyond first-degree relatives", "Marked social anxiety that does NOT shrink with familiarity (unlike social anxiety disorder)"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR / ICD-11",
      code: "Schizoaffective disorder",
      criteria: [
        "An uninterrupted illness period with a major mood episode (depressive or manic) concurrent with psychotic symptoms.",
        "Delusions or hallucinations for at least 2 weeks with NO prominent mood symptoms — the swing-gate of the whole diagnosis.",
        "Mood episodes present for a substantial portion of the illness's total duration.",
        "Subtype: bipolar type if any manic or mixed episode has ever occurred; depressive type otherwise.",
      ],
      duration: "The 2-week psychosis-only window; the diagnosis is usually made retrospectively on longitudinal follow-up.",
      indianNote: "In busy Indian OPDs the diagnosis is usually schizophrenia or bipolar on first contact; the 10-minute question — 'when your mood was normal, did the voices continue?' — retrieves it.",
    },
    {
      system: "ICD-11 / DSM-5",
      code: "Schizotypal disorder",
      criteria: [
        "A stable, pervasive pattern from early adulthood across situations.",
        "Social/interpersonal deficits: few close friends; social anxiety that does not fade with familiarity.",
        "Cognitive-perceptual distortions: ideas of reference, odd beliefs, unusual perceptions.",
        "Eccentricity: odd speech, behaviour, appearance.",
        "NOT better explained by schizophrenia itself, a mood disorder, autism spectrum, or a substance.",
        "ICD-11 classifies it within the schizophrenia spectrum; DSM-5 retains a Cluster A personality-disorder slot.",
      ],
      duration: "Lifelong pattern; traits traceable to early adulthood.",
      indianNote: "The cultural boundary matters in India: ordinary piety must not be pathologised, and family 'oddness' must not be dismissed — test by challenge (schizotypal ideas yield; delusions do not).",
    },
  ],
  severityScales: [
    {
      name: "PANSS",
      fullName: "Positive and Negative Syndrome Scale",
      measures: "Psychotic symptom severity — document at intake and serially; the trajectory is the teaching.",
      ranges: [
        { min: 58, max: 75, severity: "Mild", action: "Outpatient management; focus on function" },
        { min: 76, max: 95, severity: "Moderate", action: "Active symptom management; review medication adherence" },
        { min: 96, max: 210, severity: "Severe", action: "Urgent review; assess safety and admission need" },
      ],
      indianNote: "Named for exams and clinical documentation; items not reproduced (copyright).",
    },
    {
      name: "YMRS",
      fullName: "Young Mania Rating Scale",
      measures: "Manic symptom severity — documents the mood pole and its response.",
      ranges: [
        { min: 0, max: 11, severity: "Remission / euthymia", action: "Maintenance continues; track both poles" },
        { min: 12, max: 19, severity: "Mild manic symptoms", action: "Review sleep and adherence; outpatient dose review" },
        { min: 20, max: 25, severity: "Moderate mania", action: "Urgent medication review; assess admission need" },
        { min: 26, max: 60, severity: "Severe mania", action: "Usually inpatient management" },
      ],
    },
    {
      name: "PHQ-9",
      fullName: "Patient Health Questionnaire-9",
      measures: "Depressive pole severity in the depressive type.",
      ranges: [
        { min: 0, max: 4, severity: "Minimal", action: "Monitor; antipsychotic maintenance continues" },
        { min: 5, max: 9, severity: "Mild", action: "Psychoeducation + monitoring; no antidepressant monotherapy" },
        { min: 10, max: 14, severity: "Moderate", action: "Structured mood treatment; re-verify the psychosis-only intervals" },
        { min: 15, max: 19, severity: "Moderately severe", action: "Definite mood treatment; assess suicide risk" },
        { min: 20, max: 27, severity: "Severe", action: "Consider ECT for psychotic or life-threatening depression" },
      ],
      indianNote: "The bipolar-depression PHQ-9 must be read alongside the switch-risk watch.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Schizophrenia", distinguishingFeatures: "Mood episodes dominate substantial chunks of the course; psychosis-only stretches never exceed 2 weeks in pure mood-with-psychosis presentations.", keyDifferentiator: "Prominent mood episodes concurrent with psychosis." },
    { condition: "Bipolar disorder with psychotic features", distinguishingFeatures: "Psychosis appears ONLY within mood episodes; clear psychosis-only periods of ≥ 2 weeks never occur.", keyDifferentiator: "Psychosis confined to mood episodes." },
    { condition: "Psychotic depression", distinguishingFeatures: "In psychotic depression the psychosis lifts fully when the mood recovers; in schizoaffective disorder psychosis outlives the depression.", keyDifferentiator: "Psychosis outliving the mood episode." },
    { condition: "Substance-induced psychosis", distinguishingFeatures: "Temporal lock to intoxication or withdrawal; symptoms persist clean only transiently.", keyDifferentiator: "Clean urine with persisting symptoms argues for schizoaffective." },
    { condition: "Schizotypal disorder with stress reaction", distinguishingFeatures: "Lifelong oddness with only fleeting quasi-psychosis under load — never frank, sustained psychosis.", keyDifferentiator: "Conviction level and duration of the psychotic phenomena." },
    { condition: "Autism spectrum conditions", distinguishingFeatures: "Lifelong from early childhood with no episodic course; adult onset of episodic illness argues for the schizoaffective side.", keyDifferentiator: "Onset pattern and episodicity." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Psychoeducation + family intervention",
      description: "Relapse-prevention architecture shared with schizophrenia and bipolar disorder: regular sleep, substance elimination (especially cannabis), crisis plan with early-warning signs.",
      whenToUse: "From diagnosis, all patients and families.",
      indianContext: "Family psychoeducation is the single highest-yield intervention in Indian practice — explaining the illness as treatable, like thyroid disease or epilepsy, prevents more crises than any prescription.",
    },
    {
      category: "pharmacotherapy",
      name: "Antipsychotic for the psychotic floor",
      description: "Olanzapine, risperidone, aripiprazole or amisulpride at standard doses; for bipolar type, prefer agents with proven antimanic cover (olanzapine, quetiapine, risperidone). Long-acting injectables suit adherence-fragile courses and are a good early option.",
      whenToUse: "All schizoaffective disorder — the psychosis engine needs cover whether or not mood symptoms are active.",
      indianContext: "Olanzapine 10 mg ≈ ₹120–250/month; risperidone ≈ ₹80–200/month (approx 2026, generic). KYP antipsychotic drug lessons do not exist yet — recorded in content gaps.",
    },
    {
      category: "pharmacotherapy",
      name: "Antidepressant for the depressive pole (depressive type)",
      description: "SSRI added ON TOP of the antipsychotic when depression persists after psychosis is controlled — watched for any flip into hypomania.",
      whenToUse: "Depressive type with persistent depression after psychotic control.",
      indianContext: "Sertraline 50–150 mg/day is the standard Indian first choice; the SSRI lessons cover the pharmacology in full.",
    },
    {
      category: "pharmacotherapy",
      name: "Mood stabiliser for the bipolar pole",
      description: "Lithium (levels 0.6–1.0 mmol/L) or valproate; lamotrigine useful for the depressive pole; quetiapine monotherapy has trial support for both poles in this group.",
      whenToUse: "Bipolar type — any lifetime manic or mixed episode.",
      indianContext: "Lithium ≈ ₹60–150/month but needs reliable lab access for levels; in smaller towns valproate is often chosen first for exactly this reason (≈ ₹150–350/month).",
    },
    {
      category: "brain-stimulation",
      name: "ECT",
      description: "For severe depressive-type episodes with psychotic features — especially with food refusal or suicide risk; works well and rapidly.",
      whenToUse: "Severe, treatment-resistant or life-threatening depressive-type episodes; catatonia.",
      indianContext: "Available in medical-college hospitals; modern practice under anaesthesia bears no resemblance to its cinematic reputation.",
    },
    {
      category: "psychotherapy",
      name: "CBT + social skills training (schizotypal)",
      description: "CBT targeting the suspicious interpretations; graded social exposure; vocational support — the first-line package for schizotypal disorder. Low-dose antipsychotic only for transient quasi-psychotic flare-ups, time-limited around the stressor.",
      whenToUse: "Most schizotypal patients need no medication at all.",
      indianContext: "Realistic Indian pathway: college counselling cell, district-hospital clinical psychologist, or private CBT (₹500–1,500/session, approx 2026).",
    },
  ],
  safety: {
    redFlags: [
      "Emerging suicidal intent, plan or means — schizoaffective suicide risk exceeds schizophrenia",
      "Manic escalation with dangerous behaviour or exhaustion",
      "Psychotic depression with food refusal",
      "Catatonia",
      "Antidepressant-induced flip into hypomania or mania",
      "Cannabis or stimulant use restarting — relapse driver",
    ],
    urgentGuidance:
      "Manic storms with dangerous behaviour, psychotic depression with suicide risk, and catatonia need hospital-level care. Any specific suicide statements, means access or post-discharge weeks treat as emergency — see the Suicide & Self-harm course.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "Depressive-pole SSRI (add-on)", rationale: "Added on top of the antipsychotic when depression persists after psychosis control in the depressive type; watched for any flip into hypomania — the standard Indian first choice.", evidenceLevel: "guideline", clinicalDisclaimer: "SSRI in schizoaffective disorder is always an add-on to antipsychotic cover, never monotherapy." },
    { name: "Escitalopram", slug: "escitalopram", role: "Depressive-pole SSRI (add-on)", rationale: "Fewest interactions — the practical choice on polypharmacy (elderly, TB/HIV regimens).", evidenceLevel: "guideline", clinicalDisclaimer: "Same add-only rule as all SSRIs in this population." },
  ],
  contentGaps: [
    "Antipsychotics (olanzapine, risperidone, aripiprazole, amisulpride, quetiapine) — the psychotic-floor medicines of this course — have no KYP drug lessons yet.",
    "Lithium — the bipolar-type mood stabiliser with anti-suicide evidence — has no KYP drug lesson yet (monitoring, toxicity ladder and all).",
    "Valproate and lamotrigine — the other mood-stabiliser tier — have no KYP drug lessons yet.",
    "ECT as a treatment modality has no KYP lesson yet.",
  ],
  patientGuide: {
    whatIsIt:
      "Schizoaffective disorder is two illnesses running in the same person at the same time: a psychotic illness (hearing voices, holding beliefs others do not share) AND a mood illness (severe depression or mania), overlapping. Schizotypal disorder is different: a lifelong pattern of unusual beliefs, odd speech and social discomfort that never fully becomes schizophrenia — a milder cousin that most people manage without ever needing admission.",
    whatCausesIt:
      "Both conditions run in families that also carry schizophrenia and bipolar disorder — they sit on the genetic bridge between them. Stress, cannabis and sleep loss can ignite or worsen episodes in the schizoaffective form; in schizotypal disorder, stress briefly pushes the odd experiences closer to the surface, then they settle back.",
    symptoms:
      "Schizoaffective: voices and beliefs PLUS mood episodes — either depression (low mood, guilt, suicidal thoughts) or mania (boundless energy, little sleep, overspending, disinhibition) — and, tellingly, stretches where the voices and beliefs continue alone after the mood has cleared. Schizotypal: lifelong odd beliefs held loosely, peculiar speech, discomfort with closeness, unusual perceptions — but no true delusions and no clear hallucinations.",
    treatment:
      "Schizoaffective disorder needs both engines treated: an antipsychotic for the psychosis, plus a mood stabiliser (bipolar type) or a carefully-watched antidepressant (depressive type). Schizotypal disorder usually needs NO medication — social skills work, understanding and CBT carry it, with low-dose medication only briefly during stress-related flare-ups.",
    selfHelp: [
      "Protect sleep like medicine — it is the mood engine's stabiliser.",
      "Keep one written early-warning list (sleep falling, voices returning, mood climbing or sinking) and one contact number beside it.",
      "Avoid cannabis and stimulants completely — they relight both engines.",
      "Let the family carry the early-warning system; brief them properly.",
    ],
    whenToSeekHelp: [
      "Voices or beliefs returning or intensifying",
      "Sleep falling below 5–6 hours with rising energy (mania alert)",
      "Depression deepening with thoughts of death or self-harm",
      "Medicines finished or stopped — do not wait for relapse to refill",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) for any crisis or relapse worry",
      "District hospital psychiatry OPD under DMHP for low-cost follow-up",
      "iCall and city helplines for counselling access",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows IPS practice norms built on international guidance (APA, NICE) with Indian cost-and-access adaptations.",
    systemContext: "Busy government OPDs label schizoaffective patients 'schizophrenia' (if psychosis dominates the file) or 'bipolar' (if mood dominates), with prescriptions that miss one half of the illness; the reclassifying question — 'when your mood was normal, did the voices continue?' — takes ten minutes and corrects both errors.",
    programmeContext: "NMHS 2015–16 pooled psychotic disorders without separating these conditions; RPwD Act 2016's mental-illness category allows the 40% benchmark disability certification for severe, persistent cases; PM-JAY covers inpatient care.",
    costConsiderations: "Maintenance is mostly out-of-pocket: olanzapine ≈ ₹120–250/month, quetiapine 200–400 mg ≈ ₹250–600/month, valproate ≈ ₹150–350/month, lithium ≈ ₹60–150/month (approx 2026; generic brands vary). Lithium's hidden cost is the lab: it needs reliable level-checking, which smaller towns lack — valproate gets chosen first for exactly this reason.",
    culturalConsiderations: "Families attribute lifelong schizotypal oddness to 'nature', horoscope doshas or planetary influence, delaying recognition by decades. A strong cultural tolerance for religious and magical ideation cuts both ways: normalising ordinary piety, or pathologising it. Schizotypal persons with spiritual ideation are frequently routed to temples, dargahs and faith healers — sometimes with relief, sometimes with harmful restraint; collaborative relationships with local healers bring people into medical care sooner than fighting them.",
    patientCounselling: [
      "Marriage and disclosure: concealing active illness into an arranged marriage courts catastrophic decompensation with a spouse who was never briefed; stabilise first, disclose to at least one senior member of the prospective family, frame it as a treatable condition like thyroid or epilepsy.",
      "Heritability questions: risk to children is elevated above the general population but stays in single-digit percentages for most family configurations — a planning conversation, not a prohibition.",
      "For schizotypal families: 'he is not mad, he is different; do not force marriage arrangements he cannot sustain' — this one sentence prevents more crises than any prescription.",
      "Diagnosis-change conversations: labels here are longitudinal maps, not verdicts; when the label updates, the treatment now covers both engines of the illness.",
    ],
  },
  decisionPath: {
    title: "When psychosis and mood coexist — the diagnostic gate",
    nodes: [
      {
        id: "start",
        question: "A patient has psychotic symptoms AND a major mood episode overlapping in time.",
        branches: [
          { label: "Mood episode concurrent with psychosis", next: "window" },
          { label: "Mood episodes only past, psychosis now alone", next: "window" },
        ],
      },
      {
        id: "window",
        question: "Have delusions or hallucinations persisted for ≥ 2 weeks with NO prominent mood symptoms at any point in the illness?",
        branches: [
          { label: "Yes — psychosis-only window exists", next: "subtype" },
          { label: "No — psychosis only ever inside mood episodes", next: "mood-disorder" },
        ],
      },
      {
        id: "subtype",
        question: "Has any manic or mixed episode ever occurred?",
        branches: [
          { label: "Yes — even once", next: "bipolar-type" },
          { label: "No — depressions only", next: "depressive-type" },
        ],
      },
      { id: "bipolar-type", question: "Schizoaffective disorder, bipolar type.", recommendation: "Antipsychotic + mood stabiliser (lithium or valproate; quetiapine monotherapy has support); avoid antidepressant monotherapy; assess suicide risk every visit." },
      { id: "depressive-type", question: "Schizoaffective disorder, depressive type.", recommendation: "Antipsychotic floor + cautious SSRI add-on for persisting depression, watched for a flip into hypomania; ECT for severe psychotic depression." },
      { id: "mood-disorder", question: "Mood disorder with psychotic features — not schizoaffective.", recommendation: "Treat the mood disorder (see Bipolar Disorders course); psychosis cover follows the mood treatment; re-review the diagnosis if psychosis ever outlives a mood episode by 2 weeks." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing schizoaffective disorder at first contact",
      why: "The diagnosis is longitudinal — a clinician who applies it cross-sectionally is often wrong, and the label churns.",
      correction: "Diagnose what you can see (first-episode psychosis or mood disorder with psychotic features), and let follow-up earn the schizoaffective label via the 2-week psychosis-only window.",
    },
    {
      mistake: "'Mood symptoms during psychosis make it schizoaffective'",
      why: "Mood symptoms must be full episodes, and the 2-week psychosis-only window is the gate — this is the classic exam trap.",
      correction: "Ask specifically: was there ever a stretch of two weeks or more with psychosis and NO mood symptoms?",
    },
    {
      mistake: "Treating schizotypal disorder as early schizophrenia — lifelong antipsychotics from day one",
      why: "The majority of schizotypal patients never convert; lifelong medication converts a stable temperament into a chronic patient identity with side effects.",
      correction: "Psychotherapeutic first-line: social skills training and CBT; low-dose antipsychotic only for transient quasi-psychotic flare-ups, time-limited around the stressor.",
    },
    {
      mistake: "Missing past hypomania in a 'depressive-type' patient",
      why: "Wrong subtype means a missed mood stabiliser and antidepressant-induced mania later.",
      correction: "Always ask about the best period, not only the worst: 'his most energetic stretch — how much sleep did he need?'",
    },
    {
      mistake: "Confusing ideas of reference with delusions",
      why: "Schizotypal ideas are held loosely and can be half-persuaded away; delusions do not yield — the treatments and prognoses differ completely.",
      correction: "Test by gentle challenge: schizotypal ideas soften; delusions harden under challenge.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define schizoaffective disorder and state the 2-week rule that separates it from mood disorder with psychotic features.",
        "Distinguish schizotypal disorder from schizophrenia (conviction level of beliefs, hallucinations, chronicity vs episodicity, functioning, family loading).",
        "Name the schizoaffective subtypes and the feature that decides between them.",
        "Why is schizoaffective disorder usually diagnosed retrospectively?",
      ],
      practical: [
        "Take a collateral history from a family member of a patient with psychosis and mood symptoms; present the diagnostic reasoning.",
        "Counsel a family about a diagnosis change from bipolar disorder to schizoaffective disorder.",
      ],
      longAnswer: [
        "Schizoaffective disorder: diagnosis, subtypes, management principles.",
        "Schizotypal disorder: clinical picture, differentiation from schizophrenia, management.",
      ],
    },
    neetPg: {
      highYield: [
        "The 2-week psychosis-only window — the single most tested feature.",
        "Any lifetime manic/mixed episode → bipolar type, regardless of the predominant pole.",
        "Diagnosis is usually retrospective; first-episode labels are unstable.",
        "Suicide risk exceeds schizophrenia — attempts ≈ 30% in some series.",
        "Schizotypal: Cluster A in DSM-5, schizophrenia spectrum in ICD-11.",
        "Schizotypal among first-degree relatives of schizophrenia patients: several-fold above general population.",
        "Social anxiety that does not reduce with familiarity = schizotypal pointer (vs social anxiety disorder).",
        "Schizotypal first-line = social skills training + CBT, not antipsychotics.",
      ],
      pyqConcepts: [
        "Differentiate schizotypal personality from schizophrenia — recurring long question.",
        "Why schizoaffective disorder is diagnosed less at first contact — the longitudinal requirement.",
        "Ideas of reference vs delusions of reference — the challenge test.",
        "ECT indications in psychotic depression.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A first-admission psychotic man whose voices persist a month after mania resolves — diagnosis and the two-engine prescription.",
        "A 'schizophrenia' label revised after a documented hypomanic stretch — what changes in the prescription and why.",
        "The odd young relative at a family wedding — schizotypal pattern recognition and the no-medication default.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Schizoaffective disorder: psychosis ≥ 2 weeks without mood symptoms; subtypes by lifetime mania.",
        "Schizotypal: odd beliefs + social anxiety without true delusions/hallucinations; Cluster A.",
        "First-line for schizotypal = psychotherapy, not medication.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The family-genetic bridge: schizoaffective loads in both schizophrenia and bipolar families — polygenic overlap is the teaching point for the viva.",
        "Quetiapine monotherapy has trial support for both poles in schizoaffective populations — a pragmatic single-agent option where polypharmacy fails.",
        "Long-acting injectables early: adherence in this population is poor, and patient-chosen LAIs outperform family-imposed tablets.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The man whose voices stayed after the mood left",
      presentation: "34-year-old software engineer, Pune — grandiose mania: bought three laptops on EMI, sleeping two hours, 'chosen architect of smart cities'.",
      initialPresentation: "A 34-year-old male software engineer presenting in a first episode of grandiose mania: two-hour sleep, EMI-financed laptop buying and the mission of the 'chosen architect of smart cities'. No prior psychiatric contact at intake; initial working diagnosis was bipolar mania with psychotic features. What would settle the final diagnosis — the symptom that persists after the mood clears — could only be answered at later review.",
      history: "Risperidone plus valproate settled the mania over three weeks; mood normalised at week four. At month-two review his wife reported he still heard a commentary voice and believed his manager was 'planting listeners' in the office.",
      examination: "Euthymic on mental state examination, functioning at work, quietly psychotic — hallucinosis and persecutory ideas persisting outside any mood episode.",
      diagnosis: "Schizoaffective disorder, bipolar type (diagnosis revised from bipolar mania).",
      management: "Risperidone continued and optimised; valproate maintained; a long-acting injectable added at his own request after a job transfer made daily tablets chaotic.",
      outcome: "Stable maintenance; no further admission at one-year follow-up.",
      teachingPoints: [
        "Always ask what remains after the mood clears — that is the diagnostic window.",
        "Bipolar-type schizoaffective still needs antipsychotic cover after mania resolves.",
        "Patient-chosen LAIs outperform family-imposed ones.",
      ],
    },
    {
      title: "The 'weird uncle' who was never ill",
      presentation: "22-year-old B.Com student, Kochi — stopped attending college after telling classmates he could 'read the campus through its magnetic field'.",
      initialPresentation: "A 22-year-old male commerce student at his first-ever psychiatric referral, after college attendance stopped and classmates were told he could 'read the campus through its magnetic field'. Background at presentation: lifelong absence of close friendships, private number theories and loosely held ideas of reference — never previously help-seeking. The referral was triggered by decompensation after his father's sudden death.",
      history: "Lifelong pattern: no close friends since school, elaborate private theories about numbers, loose beliefs that famous people signalled to him through interview phrases — but he could laugh at these ideas when gently challenged. No hallucinations. Decompensated after his father's sudden death.",
      examination: "Ideas of reference held loosely; odd, circumstantial speech; constricted affect; no formal thought disorder, no hallucinations, no delusional conviction.",
      diagnosis: "Schizotypal disorder with a stress-related quasi-psychotic reaction — not schizophrenia.",
      management: "Bereavement support; low-dose aripiprazole for four weeks during the flare; social skills group; family education on the lifelong-but-stable nature of the pattern.",
      outcome: "Returned to college with support; no antipsychotic beyond the time-limited bridge.",
      teachingPoints: [
        "Schizotypal ideas are held loosely and are challengeable; delusions are not.",
        "Stress unmasks but does not transform the condition.",
        "Medications are a bridge over the stressor, not the destination.",
      ],
    },
  ],
  clinicalPearls: [
    "The two-week psychosis-only window is the swing-gate — everything diagnostic flows through it.",
    "Diagnose retrospectively, treat both engines, and tell the family why the label may update.",
    "Suicide risk in schizoaffective disorder exceeds schizophrenia — ask every visit.",
    "Schizotypal beliefs yield to gentle challenge; delusions harden — the bedside test costs nothing.",
    "In Indian OPDs the single corrective question is: 'when your mood was normal, did the voices continue?'",
    "Schizotypal first-line is skills and understanding, not medication.",
  ],
  highYieldSummary: [
    "Schizoaffective = psychosis + full mood episodes concurrently, WITH a ≥ 2-week psychosis-only window.",
    "Subtype: mania ever → bipolar type; otherwise depressive type.",
    "Treatment: antipsychotic floor + mood-side cover; LAIs early where adherence wobbles.",
    "Schizotypal = lifelong Cluster A (DSM-5) / spectrum (ICD-11) pattern below the delusion threshold.",
    "Schizotypal management: psychotherapy first; low-dose antipsychotic only for stress-linked flare-ups.",
    "Family loading: schizotypal traits several-fold commoner in first-degree relatives of schizophrenia patients.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "sa-quiz-1",
      question: "The essential gate separating schizoaffective disorder from a mood disorder with psychotic features is:",
      options: ["Mood-congruent delusions", "Delusions or hallucinations persisting ≥ 2 weeks without prominent mood symptoms", "Presence of negative symptoms", "Family history of schizophrenia"],
      correctIndex: 1,
      explanation: "The psychosis-only window is the defining and most-tested feature — it is what the diagnosis is built on.",
      afterSectionId: "diagnosis",
    },
    {
      id: "sa-quiz-2",
      question: "A 40-year-old woman has had depressive episodes with paranoid delusions, one hospitalised manic episode, and documented psychotic symptoms during euthymic periods for three months. Diagnosis:",
      options: ["Schizoaffective disorder, depressive type", "Schizoaffective disorder, bipolar type", "Bipolar I disorder with psychotic features", "Schizophrenia"],
      correctIndex: 1,
      explanation: "Any lifetime manic/mixed episode makes the bipolar subtype, regardless of the predominant pole.",
      afterSectionId: "diagnosis",
    },
    {
      id: "sa-quiz-3",
      question: "Which is most characteristic of schizotypal disorder rather than schizophrenia?",
      options: ["Clear second-person auditory hallucinations for years", "Firm systematised persecutory delusions", "Ideas of reference that soften when challenged", "Formal thought disorder with derailment"],
      correctIndex: 2,
      explanation: "Schizotypal beliefs are held loosely; challengeability separates them from delusions.",
      afterSectionId: "symptoms",
    },
    {
      id: "sa-quiz-4",
      question: "First-line management for an adult with schizotypal disorder, mild social impairment, no psychosis:",
      options: ["Lifelong antipsychotic", "Social skills training and CBT", "Lithium", "ECT"],
      correctIndex: 1,
      explanation: "Psychotherapeutic approaches first; medication is reserved for quasi-psychotic or sustained-delusional states.",
      afterSectionId: "management",
    },
    {
      id: "sa-quiz-5",
      question: "The most common real-world diagnostic error in Indian OPDs for schizoaffective disorder is:",
      options: ["Overdiagnosis relative to Western settings", "Labelling as schizophrenia or bipolar while missing the other component", "Confusion with OCD", "Confusion with dementia"],
      correctIndex: 1,
      explanation: "Cross-sectional snapshots miss either the mood or the psychosis-only phase; the 'voices when mood normal' question corrects it.",
      afterSectionId: "indian-practice",
    },
    {
      id: "sa-quiz-6",
      question: "Among first-degree relatives of patients with schizophrenia, schizotypal traits compared with the general population are:",
      options: ["Rarer", "Equally common", "Several-fold more common", "Commoner only in siblings, not parents"],
      correctIndex: 2,
      explanation: "Schizotypal disorder is the best-replicated schizophrenia-spectrum phenotype in family studies.",
      afterSectionId: "mechanism",
    },
  ],
  activeRecallQuestions: [
    { question: "State the two-week rule and explain which differential it separates in each direction.", answer: "Psychosis persisting ≥ 2 weeks without prominent mood symptoms separates schizoaffective disorder FROM mood disorder with psychotic features (which never has such a window) and TOWARD the schizoaffective side of schizophrenia when mood episodes dominate chunks of the course.", topic: "Diagnosis" },
    { question: "A patient has had mania with paranoia twice, and a six-month psychosis-only stretch two years ago — subtype and drug plan?", answer: "Bipolar type (any lifetime mania). Plan: antipsychotic with antimanic cover (olanzapine, risperidone or quetiapine) PLUS a mood stabiliser (lithium or valproate); suicide-risk assessment every visit; avoid antidepressant monotherapy.", topic: "Management" },
    { question: "List three features of schizotypal speech and distinguish each from formal thought disorder.", answer: "Vague (lacks specificity, not goal-derailment), over-elaborate/circumstantial (reaches the destination eventually, not derailment), stilted (oddly formal word choice, not incoherence) — the listener can always follow the thread; in formal thought disorder the thread itself breaks.", topic: "Symptoms" },
    { question: "How do ideas of reference differ from delusions of reference in daily clinical conversation?", answer: "Ideas of reference are held loosely: the person can be half-persuaded out of them, laughs when challenged, and does not reorganise life around them. Delusions are held with total conviction, defended with elaborate logic, and reorganise behaviour completely.", topic: "Symptoms" },
    { question: "Which schizoaffective subtype gets lamotrigine considered, and why?", answer: "The bipolar type with heavy depressive poles (and the depressive type's depressive stretches when antipsychotic cover is stable) — lamotrigine's evidence covers the depressive pole of bipolar-spectrum illness, with slow titration to protect against rash.", topic: "Management" },
    { question: "What are the two most common Indian misdiagnoses of schizoaffective disorder, and what one question corrects them?", answer: "Labelling it 'schizophrenia' (psychosis dominates the file) or 'bipolar' (mood dominates) while missing the other half. The corrective question: 'when your mood was normal, did the voices continue?'", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is schizoaffective disorder schizophrenia?", answer: "No, though they overlap. It is a separate condition where a mood disorder and psychosis coexist. The treatments overlap heavily, and both are long-term conditions, but the mood component changes the medication plan and, for many patients, the outcome is better than in schizophrenia." },
    { question: "My son had mania and voices. Now his mood is fine. He still hears things. Which illness is it?", answer: "That exact pattern — voices persisting after the mood fully settles for two weeks or more — points to schizoaffective disorder, bipolar type. The treating team will usually confirm this after watching the course for a while." },
    { question: "Will I need medicines lifelong?", answer: "Usually for several years at minimum, and many people stay on maintenance long-term, especially after two or more relapses. Some who remain well for years with full recovery can attempt carefully supervised dose reduction. Decisions are made with your psychiatrist, never alone." },
    { question: "Is my family member with schizotypal disorder going to become schizophrenic?", answer: "Most people with schizotypal disorder never develop schizophrenia. The risk is higher than in the general population — a minority do convert, particularly with cannabis use or heavy stress — but the base pattern is stability, not progression." },
    { question: "Can a person with schizotypal disorder marry?", answer: "Many do. Honest disclosure and realistic expectations matter more than diagnosis. A partner who understands the social awkwardness and private beliefs — and a family that does not interpret them as disrespect — makes the arrangement workable." },
    { question: "Why did the diagnosis change from bipolar to schizoaffective?", answer: "Because diagnoses here are longitudinal, made from the map of months and years, not a single visit. When new information — psychosis persisting after mood recovery — appears, the label updates. The change means your treatment now covers both engines of the illness." },
    { question: "Do medicines for psychosis harm the mood side?", answer: "They can flatten or sedate, which can be mistaken for depression. That is why mood symptoms are tracked separately in reviews, and why antidepressants or mood stabilisers are added rather than just raising the antipsychotic." },
    { question: "Is ECT a punishment or a failure of treatment?", answer: "Neither. For severe depressive-type episodes with psychotic features, especially with food refusal or suicide risk, ECT is among the fastest and safest tools, and modern practice under anaesthesia bears no resemblance to its cinematic reputation." },
    { question: "Can faith healing replace medicines in schizotypal disorder?", answer: "Faith and meaning help many people cope. What they cannot do is treat sustained psychosis or mania. The families who do best use both: prayer for peace, medicine for chemistry, and a doctor who respects the first while delivering the second." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "APA — DSM-5-TR schizoaffective and schizotypal disorder criteria architecture (paraphrased; criteria not reproduced) (2022)" },
      { source: "ICD-11 (WHO) — schizotypal and schizoaffective constructs (2022 release)", url: "https://icd.who.int/" },
    ],
    textbooks: [
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — schizophrenia spectrum and other psychotic disorders (2022)" },
    ],
    trials: [
      { source: "Kendler KS et al. — family-genetic studies of schizoaffective disorder and the schizophrenia–bipolar boundary (Am J Psychiatry, 1990s series)" },
      { source: "Quetiapine monotherapy trials in schizoaffective populations (bipolar-depression programme extension)" },
    ],
    reviews: [
      { source: "Polygenic overlap of bipolar disorder and schizophrenia — large-cohort GWAS literature (SWAN and related consortia, 2010s)" },
      { source: "Rector NA et al. — CBT for schizotypal traits and personality-spectrum presentations (J Nerv Ment Dis / J Behav Ther Exp Psychiatry)" },
      { source: "National Mental Health Survey of India 2015–16 (NIMHANS) — pooled psychotic-disorder prevalence (2016)", url: "https://indianmhs.nimhans.ac.in/" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "Mental Healthcare Act 2017 + RPwD Act 2016 — rights and disability-benchmark framework (India)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: what these two conditions are, treatment basics, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "Foundations, neuroscience, clinical picture, diagnosis and management at UG depth.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "32 min",
      description: "Full course with spectrum differentials, exam lens, cases and India layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "40 min",
      description: "Everything — full evidence grading, decision path, cases, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "Two borderland conditions, the numbers, and the spectrum map.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define both conditions, quote the prevalence and family-loading facts, and place them between schizophrenia and bipolar disorder on the spectrum." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Two engines in one brain; the volume-knob model of schizotypy.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why schizoaffective behaves like a bridge between schizophrenia and bipolar biology, and why schizotypy stays below the delusion threshold." },
    { number: 3, title: "Clinical Practice", description: "Recognise the two-phase course, apply the gates, treat both engines.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can apply the 2-week window, subtype by lifetime mania, build the two-engine prescription, and default to psychotherapy for schizotypal disorder." },
    { number: 4, title: "Indian Context", description: "Diagnostic drift, marriage and disclosure, healer collaboration.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You know the two Indian misdiagnoses and the one question that corrects them, and you can counsel a family on heritability without alarm." },
    { number: 5, title: "Exam Revision", description: "Exam lens, cases, drug navigation and high-yield.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the two-week-window and subtype questions cold, and you know which drug lessons are still missing." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — Schizoaffective and schizotypal disorder criteria architecture (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-27" },
    { id: "S2", source: "ICD-11 — Schizotypal and schizoaffective constructs", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-27" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.3.9 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-27" },
    { id: "S4", source: "Kendler KS et al. — family-genetic studies of schizoaffective disorder (Am J Psychiatry series)", sourceType: "primary", year: "1990s series", dateReviewed: "2026-09-27" },
    { id: "S5", source: "Large-cohort GWAS — polygenic overlap of bipolar disorder and schizophrenia", sourceType: "review", year: "2010s", dateReviewed: "2026-09-27" },
    { id: "S6", source: "Kasanin L — original 1933 description of schizoaffective disorder (historical framing)", sourceType: "primary", year: "1933", dateReviewed: "2026-09-27" },
    { id: "S7", source: "Kapur S — Psychosis as a state of aberrant salience, Am J Psychiatry", sourceType: "primary", year: "2003", dateReviewed: "2026-09-27" },
    { id: "S8", source: "Rector NA et al. — CBT for schizotypal traits and personality-spectrum presentations", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S9", source: "National Mental Health Survey of India 2015–16 (Gururaj G et al., NIMHANS) — pooled psychotic-disorder prevalence ~1.4%", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-27" },
    { id: "S10", source: "Mental Healthcare Act 2017 + RPwD Act 2016 — Indian rights and disability framework", sourceType: "government", year: "2017/2016", dateReviewed: "2026-09-27" },
    { id: "S11", source: "NICE / APA family-intervention relapse-prevention evidence generalised from schizophrenia populations", sourceType: "guideline", year: "2014/2020", dateReviewed: "2026-09-27" },
    { id: "S12", source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — Cluster A and spectrum chapters", sourceType: "textbook", year: "2022", dateReviewed: "2026-09-27" },
  ],
  evidenceMap: [
    { text: "Schizoaffective disorder prevalence ≈ 0.3–0.7%; about 1 in 4–5 first psychotic admissions is reclassified to it over follow-up.", grade: "supported", sources: ["S3", "S12"] },
    { text: "Schizotypal traits are several-fold commoner among first-degree relatives of schizophrenia patients — the best-replicated spectrum endophenotype.", grade: "established", sources: ["S4"] },
    { text: "Schizoaffective disorder loads in families of BOTH schizophrenia and bipolar probands — polygenic overlap.", grade: "established", sources: ["S4", "S5"] },
    { text: "The 2-week psychosis-only window separates schizoaffective disorder from mood disorder with psychotic features in both DSM-5-TR and ICD-11 logic.", grade: "established", sources: ["S1", "S2"] },
    { text: "Any lifetime manic or mixed episode defines the bipolar subtype.", grade: "established", sources: ["S1"] },
    { text: "Suicide risk in schizoaffective disorder exceeds that of schizophrenia.", grade: "supported", sources: ["S3", "S12"] },
    { text: "Family intervention reduces relapse in schizophrenia-spectrum illness including schizoaffective populations.", grade: "established", sources: ["S11"] },
    { text: "CBT and social skills training are first-line for schizotypal disorder; antipsychotics are reserved for quasi-psychotic or sustained-delusional states.", grade: "supported", sources: ["S8", "S12"] },
    { text: "Schizotypal disorder sits in Cluster A (DSM-5) but within the schizophrenia spectrum (ICD-11) — the classification split.", grade: "established", sources: ["S1", "S2"] },
    { text: "Most people with schizotypal disorder never develop schizophrenia; conversion is a minority outcome concentrated with cannabis use and heavy stress.", grade: "supported", sources: ["S3", "S12"] },
    { text: "Aberrant salience — dopaminergic dysregulation flagging neutral events as significant — is the psychological readout of the psychotic engine shared across the spectrum.", grade: "supported", sources: ["S7"] },
    { text: "Indian OPD diagnostic drift labels schizoaffective patients as schizophrenia or bipolar, missing one engine; the mood-normal-psychosis question corrects it.", grade: "supported", sources: ["S9", "S3"], note: "Clinical-practice observation layered on NMHS pooled data; no dedicated Indian prevalence study exists." },
    { text: "MHCA 2017 rights-based care and RPwD 2016's 40% benchmark apply to severe persistent cases.", grade: "established", sources: ["S10"] },
  ],
};
