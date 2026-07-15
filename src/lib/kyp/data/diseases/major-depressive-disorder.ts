import type { Disease } from "../disease-types";

/**
 * Major Depressive Disorder (MDD) — canonical disease page data.
 *
 * This file is the flagship disease page in the KYP library. It mirrors
 * the depth, structure, and quality of the Sertraline drug page while
 * focusing on disease-centric learning: epidemiology, etiology,
 * pathophysiology, diagnosis, differential, and management.
 *
 * Sources consulted:
 *   - DSM-5 (Diagnostic and Statistical Manual of Mental Disorders, 5th edition)
 *   - ICD-10 (F32.x — Depressive episode) and ICD-11 (Block 6A70 — Single depressive episode)
 *   - NICE Clinical Guideline CG91 — Depression in adults
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder, 3rd edition
 *   - Cipriani A et al. Lancet 2018 — Comparative efficacy and acceptability of 21 antidepressants
 *   - Katzung Basic & Clinical Pharmacology, 16th edition (Chapter 30 — Antidepressant Agents)
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - Stahl's Essential Psychopharmacology, 5th edition
 *   - Kaplan & Sadock's Synopsis of Psychiatry, 12th edition
 *   - KD Tripathi — Essentials of Medical Pharmacology, 8th edition
 *   - Indian Psychiatric Society (IPS) — Clinical Practice Guidelines for Management of Depression
 *   - NMC CBME Curriculum (Psychiatry, Final Professional & Pharmacology, Second Professional)
 *   - National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)
 *   - Tele-MANAS — National Tele-Mental Health Helpline (14416)
 *   - NIMHANS neuroimaging and epidemiological studies
 *
 * Last reviewed: 2026-07-13
 */
export const majorDepressiveDisorder: Disease = {
  /* ============================================================
     IDENTITY
     ============================================================ */
  slug: "major-depressive-disorder",
  name: "Major Depressive Disorder",
  shortName: "MDD",
  category: "Mood Disorder",
  learningPath: ["Psychiatry", "Mood Disorders", "Major Depressive Disorder"],

  /* ============================================================
     HERO / SUMMARY
     ============================================================ */
  tagline:
    "A common, disabling mood disorder defined by persistent low mood and anhedonia — eminently treatable, but under-recognised in Indian primary care.",
  summary:
    "Major Depressive Disorder (MDD) is a syndromal mood disorder characterised by at least 2 weeks of pervasive low mood or loss of interest (anhedonia), accompanied by disturbances in sleep, appetite, energy, concentration, self-worth, and (in severe cases) suicidal ideation. It is the leading cause of disability worldwide per the WHO, affecting approximately 300 million people globally and ~57 million in India. The pathophysiology is multifactorial — monoamine dysregulation (serotonin, norepinephrine, dopamine), HPA axis hyperactivity, reduced BDNF and hippocampal volume loss, and inflammatory and psychological contributions. Treatment combines pharmacotherapy (SSRIs first-line), evidence-based psychotherapy (CBT, IPT, behavioural activation), and lifestyle intervention. With appropriate treatment, 60–70% of patients achieve response and 30–40% achieve remission; untreated, MDD carries significant morbidity and a 4–10% completed-suicide rate.",
  estimatedReadTime: "22 min read",
  yieldRating: "high",
  highYieldLevel: "extreme",
  primaryAudience: "medical",

  /* ============================================================
     LEARNING OBJECTIVES
     ============================================================ */
  learningObjectives: [
    "Apply DSM-5 and ICD-10 diagnostic criteria to confidently diagnose MDD and distinguish it from bereavement, adjustment disorder, and bipolar depression.",
    "Explain the multifactorial pathophysiology — monoamine hypothesis, HPA axis dysregulation, BDNF/neuroplasticity, inflammation, and the cognitive triad.",
    "Interpret PHQ-9 and HAM-D scores for diagnosis, severity grading, and treatment monitoring — and recognise the role of Hindi/multi-lingual validation in India.",
    "Construct a stepwise management plan: lifestyle → psychotherapy → SSRI → augmentation → brain stimulation, matched to severity and patient context.",
    "Select the right antidepressant for the right patient (pregnancy, elderly, comorbid pain, sexual dysfunction, fatigue, insomnia, cardiac disease).",
    "Screen for bipolar disorder before initiating any antidepressant — and recognise the consequences of missing it.",
    "Counsel a patient on what to expect in the first 6 weeks of an SSRI — onset delay, side effects before benefit, and the importance of continuation.",
    "Apply Indian practice realities — IPS guidelines, DMHP, Jan Aushadhi generics, Tele-MANAS (14416), family involvement — to real OPD scenarios.",
  ],

  /* ============================================================
     EPIDEMIOLOGY
     ============================================================ */
  epidemiology: {
    globalPrevalence:
      "Approximately 300 million people affected worldwide (WHO, 2023) — the leading cause of disability globally. Global point prevalence ~4–5%; 12-month prevalence ~6–7%. The COVID-19 pandemic raised global prevalence by an estimated 25%, with women, young adults, and those with comorbid somatic illness disproportionately affected.",
    indianPrevalence:
      "~57 million people with depression in India (NIMHANS National Mental Health Survey 2015–16). Point prevalence of depression in adults ~2.7% for depressive disorder, rising to ~10% when including milder forms. 1 in 20 Indians experience depression at some point in their lives. Prevalence is higher in women, the elderly, those with chronic illness, and in urban metros. Lifetime treatment gap in India: ~85% — most people with depression never receive evidence-based care.",
    lifetimeRisk:
      "Global lifetime risk ~10–15%; Indian data suggests ~9%. Risk is roughly doubled in first-degree relatives of affected individuals. Recurrence rates are high: ~50% after a single episode, ~70% after two episodes, ~90% after three episodes — justifying long-term maintenance therapy in recurrent MDD.",
    genderRatio:
      "Female : male ratio ≈ 2 : 1. The gender gap emerges in adolescence and persists across cultures. Hypotheses include hormonal factors (oestrogen fluctuations, postpartum, perimenopause), social factors (caregiver burden, domestic violence, economic dependence), and help-seeking differences (women report and seek care more readily).",
    ageOfOnset:
      "Peak onset 20–40 years (median ~26 years globally), but MDD can occur at any age — from preschool children to the very elderly. Late-onset depression (>60 years) is often associated with cerebrovascular disease (vascular depression), cognitive decline, and somatic comorbidity.",
    indianNotes:
      "The NIMHANS National Mental Health Survey (2015–16) surveyed 12 states and ~34,000 individuals — the largest representative Indian mental-health dataset to date. Key Indian findings: (1) depression prevalence is highest in 40–49 year age band; (2) urban metros have higher prevalence than rural areas — a reversal of the global pattern; (3) the treatment gap is ~85% nationwide, worse in rural and low-income groups; (4) comorbid depression with chronic medical illness (diabetes, TB, HIV, cancer) is the rule rather than the exception; (5) suicide is the leading cause of death in Indians aged 15–39, with depression the single largest attributable risk factor. The NMHP and DMHP aim to bridge this gap; Tele-MANAS (launched 2022) provides free telephonic counselling in 20 languages — dial 14416.",
  },

  /* ============================================================
     ETIOLOGY & RISK FACTORS
     ============================================================ */
  etiology: [
    {
      category: "genetic",
      factor: "Heritable genetic predisposition (~37% heritability)",
      details:
        "Twin studies place MDD heritability at ~37% — substantial but lower than schizophrenia (~80%) or bipolar disorder (~85%). First-degree relatives have a 2–3× elevated risk. No single 'depression gene' exists; instead, hundreds of common variants each contribute small effects (polygenic risk score). SLC6A4 (serotonin transporter) 5-HTTLPR short allele is the best-studied candidate, with the strongest effects seen in gene × environment interaction with childhood stress (Caspi et al., 2003). Polygenic risk scores partly overlap with schizophrenia and bipolar disorder — consistent with shared neurobiology.",
    },
    {
      category: "biological",
      factor: "Monoamine deficiency and HPA axis dysregulation",
      details:
        "The classical monoamine hypothesis (Schildkraut, 1965) posits deficient serotonergic and noradrenergic signalling. Modern refinements emphasise: (1) reduced serotonin synthesis and turnover; (2) downregulated BDNF (brain-derived neurotrophic factor), impairing hippocampal neurogenesis; (3) HPA axis hyperactivity with elevated cortisol and impaired dexamethasone suppression; (4) altered glutamatergic tone in the subgenual anterior cingulate cortex. No single deficiency explains all of MDD — the truth is a network disorder.",
    },
    {
      category: "biological",
      factor: "Neuroplasticity / BDNF hypothesis",
      details:
        "Chronic stress and depression lower BDNF expression, particularly in the hippocampus — leading to dendritic atrophy and volume loss (~5–10% reduction on MRI). Successful antidepressant treatment restores BDNF levels and promotes neurogenesis. This is the unifying explanation for why SSRIs, SNRIs, TCAs, ECT, ketamine, and rTMS all ultimately converge on BDNF upregulation — despite different acute pharmacology.",
    },
    {
      category: "biological",
      factor: "Inflammatory / cytokine hypothesis",
      details:
        "Patients with MDD show elevated inflammatory markers (CRP, IL-6, TNF-α). Administration of interferon-α or interleukin-2 induces depression in ~30–50% of patients. Inflammation activates indoleamine 2,3-dioxygenase (IDO), shunting tryptophan away from serotonin synthesis toward neurotoxic kynurenines. This explains treatment-resistant depression in chronic inflammatory states (autoimmune disease, obesity, chronic infection).",
    },
    {
      category: "psychological",
      factor: "Beck's cognitive triad — negative views of self, world, and future",
      details:
        "Aaron Beck's cognitive model (1967): depression arises from automatic negative thoughts about oneself ('I am worthless'), the world ('nothing goes my way'), and the future ('things will never improve'). These schemas, often laid down in childhood, are reactivated by stress. The triad perpetuates low mood through cognitive distortions (catastrophising, all-or-nothing thinking, personalisation). This is the theoretical basis for CBT — the most evidence-based psychotherapy for MDD.",
    },
    {
      category: "psychological",
      factor: "Learned helplessness and rumination",
      details:
        "Seligman's learned helplessness model: repeated uncontrollable stressors induce a state of passive resignation, even when escape becomes possible. Subsequent work ties this to dorsal raphe serotonergic sensitisation. Nolen-Hoeksema's rumination theory: repetitive, passive focus on one's distress (vs active problem-solving) prolongs and deepens depressive episodes — and predicts onset of new episodes. Female gender's elevated rumination may partly explain the 2:1 gender ratio.",
    },
    {
      category: "social",
      factor: "Social isolation, unemployment, poverty, relationship breakdown",
      details:
        "Low socioeconomic status, unemployment, social isolation, and intimate partner conflict are powerful precipitants and perpetuators of MDD. The biopsychosocial model recognises these as both causes and consequences — depression causes job loss and isolation, which in turn deepen depression. Lack of confiding relationships is one of the strongest social risk factors (Brown & Harris, 1978).",
    },
    {
      category: "environmental",
      factor: "Childhood trauma and adverse life events",
      details:
        "Childhood maltreatment (abuse, neglect, household dysfunction) triples the lifetime risk of MDD and is associated with earlier onset, greater severity, and treatment resistance. ACE (Adverse Childhood Experiences) score ≥4 confers a 4–12× elevated risk. Mechanisms: epigenetic programming of the glucocorticoid receptor (NR3C1 methylation), sensitised HPA axis, and persistent inflammatory tone. Acute adult stressors (bereavement, job loss, divorce, medical diagnosis) precipitate episodes in vulnerable individuals.",
    },
    {
      category: "indian-context",
      factor: "Stigma, low mental health literacy, and limited access to care",
      details:
        "India-specific barriers include: pervasive stigma ('depression is weakness, not illness'), low mental health literacy (only ~15% recognise depressive symptoms as a treatable condition), restricted specialist access (≈0.3 psychiatrists per 100,000 vs WHO recommendation of 3+), and out-of-pocket costs for private care. The DMHP and Tele-MANAS aim to bridge this gap, but the 85% treatment gap persists. Cultural idioms of distress ('dil pe bojh', 'tanav', 'maansik thakaan') may delay recognition. Family often mediates help-seeking — involving them in psychoeducation is critical in Indian practice.",
    },
  ],

  /* ============================================================
     PATHOPHYSIOLOGY
     ============================================================ */
  pathophysiology: {
    summary:
      "Depression involves dysregulation of monoamine neurotransmitters (serotonin, norepinephrine, dopamine), HPA axis hyperactivity, reduced BDNF, and hippocampal volume loss — produced by genetic, neurodevelopmental, inflammatory, and psychosocial factors acting on a vulnerable brain.",
    neurotransmitters: [
      "Serotonin (5-HT) — mood, sleep, appetite, impulsivity",
      "Norepinephrine — energy, arousal, drive",
      "Dopamine — reward, motivation, anhedonia",
      "Glutamate — excitotoxicity in chronic stress; target of ketamine",
      "GABA — deficient inhibitory tone in depression",
    ],
    brainRegions: [
      "Prefrontal cortex — executive function, volition, top-down regulation of emotion",
      "Hippocampus — memory consolidation, BDNF expression, neurogenesis (volume loss in MDD)",
      "Amygdala — fear and emotional reactivity (hyperactive in MDD)",
      "Raphe nuclei — serotonin synthesis and projection",
      "Subgenual anterior cingulate cortex (Brodmann 25) — hub of mood regulation; deep brain stimulation target",
      "Locus coeruleus — norepinephrine synthesis",
      "Ventral tegmental area (VTA) — dopamine origin for mesolimbic/mesocortical pathways",
    ],
    pathways: [
      "Mesolimbic pathway (VTA → nucleus accumbens) — reward/anhedonia",
      "Mesocortical pathway (VTA → prefrontal cortex) — cognition/executive dysfunction",
      "Raphe–cortical serotonergic projection — mood regulation",
      "HPA axis (hypothalamus → pituitary → adrenal) — cortisol hypersecretion",
    ],
    details:
      "MDD is best understood as a network disorder — no single 'broken part' explains it. Three converging hypotheses illuminate different facets:\n\n" +
      "1) MONOAMINE HYPOTHESIS — The oldest framework (Schildkraut 1965, Coppen 1967): depression reflects deficient serotonergic and noradrenergic neurotransmission. Evidence: (a) reserpine (depletes monoamines) caused depression in ~15% of hypertensives; (b) iproniazid (MAOI — boosts monoamines) improved mood; (c) SSRIs/SNRIs work by raising synaptic monoamines. Limitation: acute monoamine elevation occurs within hours but clinical effect takes 4–6 weeks — pointing to downstream adaptive changes (5-HT1A autoreceptor desensitisation, BDNF upregulation, receptor downregulation) as the true therapeutic mechanism.\n\n" +
      "2) NEUROPLASTICITY / BDNF HYPOTHESIS — Stress and depression reduce BDNF expression in the hippocampus and prefrontal cortex, producing dendritic atrophy and reduced neurogenesis. Hippocampal volume is reduced ~5–10% in recurrent MDD, with greater loss correlating with longer untreated illness. Antidepressants of all classes — SSRIs, SNRIs, TCAs, MAOIs, ECT, ketamine, rTMS — converge on upregulating BDNF and restoring neuroplasticity. This explains the 4–6 week delay (BDNF-mediated neurogenesis takes weeks) and why drugs with very different acute pharmacology can all work.\n\n" +
      "3) INFLAMMATORY HYPOTHESIS — Depressed patients show elevated CRP, IL-6, TNF-α. Inflammation activates IDO, shunting tryptophan toward kynurenine (and away from serotonin) and producing neurotoxic metabolites. Up to 30% of treatment-resistant depression cases have a high-inflammatory phenotype. This explains depression comorbid with autoimmune disease, obesity, and chronic infection — and is the rationale for novel anti-cytokine and anti-inflammatory augmentation strategies.\n\n" +
      "HPA AXIS — Cortisol is elevated in ~50% of depressed patients, with impaired dexamethasone suppression (DST non-suppression). Chronic cortisol damages hippocampal neurons (glucocorticoid cascade hypothesis) — creating a vicious cycle. Successful treatment normalises HPA function.\n\n" +
      "CIRCUIT-LEVEL — fMRI shows hyperactive amygdala (heightened threat reactivity), hypoactive prefrontal cortex (impaired top-down regulation), and reduced functional connectivity in the default mode network (persistent rumination). The subgenual anterior cingulate (Brodmann 25) is hyperactive in MDD and is the target of deep brain stimulation for treatment-resistant cases.",
    indianResearchContext:
      "NIMHANS neuroimaging research has contributed substantially to global depression neuroscience: (1) NIMHANS fMRI studies have demonstrated altered amygdala–prefrontal connectivity in Indian MDD cohorts, consistent with international findings; (2) NIMHANS genetic studies have explored the SLC6A4 5-HTTLPR polymorphism in Indian populations, finding differing allele distributions from Caucasian cohorts — with implications for SSRI response; (3) the NIMHANS National Mental Health Survey (2015–16) is the largest representative Indian epidemiological dataset on depression, anxiety, and substance use; (4) Indian studies on ketamine and rTMS for treatment-resistant depression are emerging. IPS-affiliated centres contribute to multi-centre international trials. A persistent gap is the under-representation of Indian/South-Asian samples in global psychiatric genomics consortia (PGC) — an active area of correction.",
  },

  /* ============================================================
     NEUROSCIENCE MAPPING
     ============================================================ */
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine", "Dopamine", "Glutamate", "GABA"],
  receptors: [
    "SERT (serotonin transporter) — target of SSRIs",
    "NET (norepinephrine transporter) — target of SNRIs/TCAs",
    "5-HT1A autoreceptor (raphe nuclei) — desensitises over 1–2 weeks of SSRI therapy",
    "5-HT2C — affects dopamine release; antagonism may augment antidepressant effect",
    "α2-adrenergic autoreceptor — target of mirtazapine blockade",
    "NMDA receptor — target of ketamine/esketamine",
    "Glucocorticoid receptor (NR3C1) — epigenetically modified by childhood trauma",
  ],
  brainRegionIds: ["prefrontal-cortex", "amygdala", "hippocampus", "raphe-nuclei", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical"],

  /* ============================================================
     SYMPTOMS — 4 CLUSTERS
     ============================================================ */
  symptomClusters: [
    {
      category: "Emotional",
      symptoms: [
        "Persistent depressed mood (subjective sadness or 'emptiness') — most days, most of the day, for ≥2 weeks",
        "Anhedonia — markedly diminished interest or pleasure in almost all activities (the second gateway symptom in DSM-5)",
        "Irritability — particularly common in children, adolescents, and males; often the presenting symptom in men",
        "Feelings of emptiness, hopelessness, or emotional numbness",
        "Reduced emotional reactivity (mood reactivity preserved in atypical depression, lost in melancholic)",
      ],
    },
    {
      category: "Cognitive",
      symptoms: [
        "Poor concentration and attention — patients describe 'brain fog' or reading the same page repeatedly",
        "Indecisiveness — even trivial choices become overwhelming",
        "Worthlessness — a conviction of personal failure disproportionate to circumstance",
        "Excessive or inappropriate guilt — often over past minor events; may reach delusional intensity in psychotic depression",
        "Recurrent thoughts of death (not just fear of dying), suicidal ideation, suicide plans or attempts — the single most urgent symptom to assess",
        "Hopelessness about the future — strong predictor of suicidality",
        "Cognitive distortions (Beck): catastrophising, all-or-nothing thinking, personalisation",
      ],
    },
    {
      category: "Somatic",
      symptoms: [
        "Fatigue and loss of energy — even small tasks feel effortful",
        "Sleep disturbance — insomnia (initial, middle, or terminal/early-morning awakening) in ~80%; hypersomnia in ~15% (atypical depression)",
        "Appetite/weight change — usually reduced with weight loss (melancholic); sometimes increased with weight gain (atypical)",
        "Psychomotor changes — retardation (slowed speech, movement, thinking) or agitation (restlessness, pacing, hand-wringing); observable by others, not merely subjective",
        "Loss of libido — often under-reported; ask directly",
        "Unexplained somatic complaints — headaches, body aches, GI disturbance (especially common in Indian and East-Asian presentations)",
      ],
    },
    {
      category: "Behavioural",
      symptoms: [
        "Social withdrawal — avoidance of family, friends, work, community",
        "Reduced activity and goal-directed behaviour — patients stop hobbies, work, self-care",
        "Neglect of self-care, grooming, hygiene",
        "Reduced productivity at work or school — presenteeism and absenteeism",
        "Increased substance use — alcohol, tobacco, cannabis, benzodiazepines as self-medication",
        "Tearfulness or reduced facial expressiveness (mask-like facies in severe depression)",
      ],
    },
  ],

  /* ============================================================
     DIAGNOSTIC CRITERIA — 3 SYSTEMS
     ============================================================ */
  diagnosticCriteria: [
    {
      system: "DSM-5",
      code: "296.xx (F32.x for single episode, F33.x for recurrent)",
      criteria: [
        "Five (or more) of the following 9 symptoms present during the same 2-week period; at least one must be (1) depressed mood or (2) anhedonia:",
        "(1) Depressed mood most of the day, nearly every day (subjective or observed).",
        "(2) Markedly diminished interest or pleasure in all, or almost all, activities.",
        "(3) Significant weight change (≥5%) or change in appetite.",
        "(4) Insomnia or hypersomnia nearly every day.",
        "(5) Psychomotor agitation or retardation observable by others (not merely subjective).",
        "(6) Fatigue or loss of energy.",
        "(7) Feelings of worthlessness or excessive/inappropriate guilt.",
        "(8) Diminished ability to think or concentrate, or indecisiveness.",
        "(9) Recurrent thoughts of death, suicidal ideation, or suicide attempt/plan.",
        "Symptoms cause clinically significant distress or impairment in social, occupational, or other areas.",
        "Episode is NOT attributable to substance, medication, or medical condition.",
        "NOT better explained by schizoaffective disorder, schizophrenia, or other psychotic disorder.",
        "NEVER had a manic or hypomanic episode (if present → bipolar disorder).",
        "Specifiers: with anxious distress · mixed features · melancholic features · atypical features · mood-congruent/incongruent psychotic features · catatonia · peripartum onset · seasonal pattern (recurrent).",
      ],
      duration: "≥2 weeks of persistent symptoms (most days, most of the day).",
      indianNote:
        "DSM-5 is the dominant system in Indian academic psychiatry and is taught in postgraduate training. The 5-of-9 threshold and the 'must include depressed mood or anhedonia' rule are the most commonly tested facts in MBBS and NEET-PG examinations.",
    },
    {
      system: "ICD-10",
      code: "F32.x (single episode) · F33.x (recurrent) · F34.1 (dysthymia)",
      criteria: [
        "Three core symptoms: (1) depressed mood, (2) anhedonia, (3) reduced energy/decreased activity.",
        "At least 2 of these 3 core symptoms present for ≥2 weeks → depressive episode.",
        "Common (additional) symptoms: reduced attention/concentration, reduced self-esteem/self-confidence, ideas of guilt/worthlessness, bleak/pessimistic view of future, ideas or acts of self-harm/suicide, disturbed sleep, diminished appetite.",
        "Mild (F32.0): at least 2 core + 2 common; some difficulty continuing ordinary work but not fully suspended.",
        "Moderate (F32.1): at least 2 core + 3–4 common; considerable difficulty continuing ordinary work.",
        "Severe without psychotic symptoms (F32.2): all 3 core + ≥4 common; considerable distress; unlikely to continue work/social/domestic activities.",
        "Severe with psychotic symptoms (F32.3): as above + delusions, hallucinations, or depressive stupor.",
      ],
      duration: "≥2 weeks for a depressive episode (shorter if symptoms are unusually severe or rapid-onset).",
      indianNote:
        "ICD-10 is the OFFICIAL coding system in India for clinical records, insurance, and government reporting. Indian government hospitals and the DMHP use ICD-10 codes (F32.x for single episode, F33.x for recurrent). Medical records departments and CDSCO-affiliated institutions require ICD-10 coding. DSM-5 is used in parallel in academic settings for diagnosis and case discussions.",
    },
    {
      system: "ICD-11",
      code: "6A70 (Single depressive episode) · 6A71 (Recurrent depressive disorder) · 6A72 (Persistent mood disorder)",
      criteria: [
        "Single depressive episode (6A70): ≥2 weeks of depressive mood or anhedonia, accompanied by other depressive symptoms.",
        "Symptoms must result in significant impairment in personal, family, social, educational, occupational, or other important areas of functioning.",
        "Subtypes by severity: mild (6A70.0), moderate (6A70.1), severe without psychotic symptoms (6A70.2), severe with psychotic symptoms (6A70.3), in partial remission (6A70.4), in full remission (6A70.5), unspecified (6A70.Z).",
        "Specifiers: with melancholia, with catatonia, with psychotic symptoms, with anxious distress, with mixed episode, with seasonal pattern.",
        "Excludes normal bereavement, bipolar disorder (must screen for past hypomania/mania).",
      ],
      duration: "≥2 weeks. May be shorter (down to 4 days) if symptoms are severe and treatment is initiated promptly — though standard threshold remains 2 weeks.",
      indianNote:
        "ICD-11 was released in 2022 and member states are transitioning by 2025–2027. India is in phased transition; many hospitals still use ICD-10. The diagnostic threshold (≥2 weeks, mood/anhedonia) is essentially identical to DSM-5 — making cross-walking straightforward.",
    },
  ],

  /* ============================================================
     SEVERITY SCALES
     ============================================================ */
  severityScales: [
    {
      name: "PHQ-9",
      fullName: "Patient Health Questionnaire-9",
      measures: "Severity of depression over the past 2 weeks; also used for diagnosis, monitoring, and treatment response.",
      ranges: [
        { min: 0, max: 4, severity: "Minimal / None", action: "No active treatment; reassurance. Repeat at interval if symptoms persist." },
        { min: 5, max: 9, severity: "Mild", action: "Consider watchful waiting, psychoeducation, brief CBT or behavioural activation; reassess in 2–4 weeks." },
        { min: 10, max: 14, severity: "Moderate", action: "Active treatment — psychotherapy (CBT/IPT) and/or SSRI. First-line: sertraline or escitalopram." },
        { min: 15, max: 19, severity: "Moderately severe", action: "Combined SSRI + psychotherapy; consider psychiatry referral if no improvement at 4–6 weeks." },
        { min: 20, max: 27, severity: "Severe", action: "Urgent psychiatric referral. SSRI + psychotherapy. Assess suicidality — consider admission if active." },
      ],
      indianNote:
        "PHQ-9 has been validated in Hindi and multiple Indian languages (Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam). It is widely used in DMHP clinics and primary care under the National Mental Health Programme. A PHQ-9 ≥10 has ~88% sensitivity and ~88% specificity for MDD in Indian validation studies. Used as the standard severity tracker in both government and private Indian practice. The PHQ-9 item-9 (suicidal thoughts) MUST be reviewed at every visit — any positive response triggers formal suicide risk assessment.",
    },
    {
      name: "HAM-D",
      fullName: "Hamilton Depression Rating Scale (17-item version)",
      measures: "Clinician-rated severity of depression; the gold standard for clinical trials and tertiary care assessment.",
      ranges: [
        { min: 0, max: 7, severity: "Normal / Remission", action: "Treatment goals met. Consider maintenance therapy." },
        { min: 8, max: 13, severity: "Mild depression", action: "Active treatment; reassess response at 4–6 weeks." },
        { min: 14, max: 18, severity: "Moderate depression", action: "Pharmacotherapy + psychotherapy; consider dose titration." },
        { min: 19, max: 22, severity: "Severe depression", action: "Psychiatry referral; consider augmentation if partial response." },
        { min: 23, max: 52, severity: "Very severe depression", action: "Urgent psychiatric referral; consider ECT if psychotic, catatonic, or actively suicidal." },
      ],
      indianNote:
        "HAM-D is mostly used in Indian tertiary centres and clinical research due to the time required (15–20 minutes). It is clinician-administered, unlike the self-rated PHQ-9. The 17-item version is most common in Indian practice; the 21- and 24-item versions add hyperphagia/hypersomnia and obsessive-compulsive items respectively. A ≥50% reduction in HAM-D defines 'response'; a final score ≤7 defines 'remission'.",
    },
    {
      name: "MADRS",
      fullName: "Montgomery-Åsberg Depression Rating Scale",
      measures: "Clinician-rated severity of depression, sensitive to change — preferred for treatment trials.",
      ranges: [
        { min: 0, max: 6, severity: "Normal / Remission", action: "Treatment goals met." },
        { min: 7, max: 19, severity: "Mild depression", action: "Active treatment; reassess at 4–6 weeks." },
        { min: 20, max: 34, severity: "Moderate depression", action: "Pharmacotherapy + psychotherapy." },
        { min: 35, max: 60, severity: "Severe depression", action: "Psychiatry referral; consider augmentation or ECT." },
      ],
      indianNote:
        "MADRS is more sensitive to change than HAM-D and has fewer somatic items, reducing confounding by comorbid medical illness — useful in Indian tertiary care where comorbid chronic disease is common. Less widely used than PHQ-9 or HAM-D in routine Indian OPD due to time constraints.",
    },
  ],

  /* ============================================================
     DIFFERENTIAL DIAGNOSIS
     ============================================================ */
  differentialDiagnosis: [
    {
      condition: "Bipolar depression (depressive phase of bipolar disorder)",
      distinguishingFeatures:
        "History of prior manic or hypomanic episodes; family history of bipolar disorder; earlier age of onset; atypical features (hypersomnia, hyperphagia, leaden paralysis); antidepressant-induced manic switch; psychomotor retardation more pronounced. Screen with Mood Disorder Questionnaire (MDQ) — sensitivity ~0.73, specificity ~0.90 in Indian validation.",
      keyDifferentiator:
        "ALWAYS screen for past hypomania/mania (MDQ) before starting any antidepressant. Missing bipolar depression and treating with an SSRI alone risks a manic switch — potentially disastrous (suicide, hospitalisation, relationship/financial harm). If bipolar confirmed, mood stabiliser first; antidepressant only if needed.",
    },
    {
      condition: "Adjustment disorder with depressed mood",
      distinguishingFeatures:
        "Symptoms arise within 3 months of an identifiable stressor (job loss, relationship breakdown, medical diagnosis) and resolve within 6 months of stressor ending. Symptoms do not meet full MDD criteria. Predominant feature is impaired function rather than pervasive mood change.",
      keyDifferentiator:
        "Subsyndromal symptom count (<5 DSM-5 criteria) and clear temporal relationship to stressor. Treatment: psychotherapy first; antidepressants only if severe or persistent beyond 6 months.",
    },
    {
      condition: "Persistent depressive disorder (dysthymia; ICD-10 F34.1)",
      distinguishingFeatures:
        "Chronic depressed mood for ≥2 years (≥1 year in children/adolescents). Fewer symptoms than MDD at any given time, but unremitting. Patients often describe themselves as 'always been this way' — implying they have forgotten what euthymia feels like. May be complicated by superimposed MDD episodes ('double depression').",
      keyDifferentiator:
        "Duration ≥2 years with fewer acute symptoms. Often more treatment-resistant than episodic MDD — combination of SSRI + psychotherapy (CBT/IPT) recommended.",
    },
    {
      condition: "Medical conditions causing depression",
      distinguishingFeatures:
        "Hypothyroidism (check TSH), anaemia (check haemoglobin/ferritin), vitamin B12 deficiency (especially in Indian vegetarians), vitamin D deficiency, Parkinson's disease, multiple sclerosis, stroke (post-stroke depression), chronic pain, cancer, chronic infection (HIV, TB). Always perform medical workup at first presentation.",
      keyDifferentiator:
        "Abnormal laboratory testing. Always check: CBC, TSH, B12, vitamin D, LFT, RBS/FBS. Treat the underlying medical condition first — depression often resolves. Never assume psychiatric origin without excluding medical mimics — especially in elderly and those with new-onset depression.",
    },
    {
      condition: "Substance-induced depressive disorder",
      distinguishingFeatures:
        "Depressive symptoms arise during or within a month of substance intoxication/withdrawal, OR medication use is etiologically related. Common culprits: alcohol (depression during withdrawal or chronic use), cannabis, opioids, benzodiazepines, corticosteroids, isotretinoin, interferon-α, antihypertensives (methyldopa, clonidine, reserpine — reserpine historically induced depression in 15% of hypertensives).",
      keyDifferentiator:
        "Detailed substance history, including over-the-counter and herbal products. Depression resolves within weeks of stopping the offending substance. Treat the substance use disorder first.",
    },
    {
      condition: "Normal grief / bereavement",
      distinguishingFeatures:
        "After loss of a loved one. Grief comes in waves (with preserved self-esteem), whereas depression is pervasive (with worthlessness and hopelessness). Grief retains the capacity for pleasure (e.g., memories of the deceased). Sleep and appetite may be disturbed, but typically improve over weeks. 'Wave-like' dysphoria is characteristic.",
      keyDifferentiator:
        "Grief = waves + preserved self-esteem + pleasure in memories. Depression = pervasive low mood + worthlessness + anhedonia. Persistent complex bereavement disorder (DSM-5) is diagnosed if disabling grief persists >12 months.",
    },
    {
      condition: "Schizoaffective disorder / schizophrenia with depressive features",
      distinguishingFeatures:
        "Psychotic symptoms occur in the ABSENCE of mood symptoms for ≥2 weeks. Mood symptoms are present for the majority of the illness but not exclusively. MDD with psychotic features = psychosis occurs ONLY during mood episodes.",
      keyDifferentiator:
        "Timing of psychosis relative to mood symptoms. If psychosis persists after mood resolves → schizoaffective/schizophrenia spectrum; treat with antipsychotic + mood treatment.",
    },
    {
      condition: "Anxiety disorders (GAD, panic, social anxiety)",
      distinguishingFeatures:
        "Primary symptom is anxiety/panic rather than low mood/anhedonia. Comorbidity is high (MDD + GAD in ~50% of cases). Anxiety symptoms precede MDD onset or persist after depression resolves.",
      keyDifferentiator:
        "Identify primary syndrome. SSRIs treat both — useful given comorbidity. CBT for anxiety differs from CBT for depression (exposure vs behavioural activation).",
    },
  ],

  /* ============================================================
     MANAGEMENT OPTIONS
     ============================================================ */
  management: [
    {
      category: "lifestyle",
      name: "Exercise, sleep hygiene, nutrition",
      description:
        "Aerobic exercise 30 minutes × 5 days/week has effect size comparable to SSRI in mild-moderate MDD (Cooney et al., Cochrane 2013). Sleep hygiene (fixed wake time, no screens before bed, avoiding caffeine after noon) targets the most common residual symptom. Mediterranean-style diet rich in omega-3, B-vitamins, and fermented foods (gut–brain axis) is associated with lower depression incidence.",
      whenToUse: "All patients — first-line alone in mild MDD (PHQ-9 5–9); adjunctive in moderate-severe MDD.",
      indianContext:
        "Free and accessible: walking, yoga (especially sudarshan kriya — Indian RCT evidence for mild-moderate MDD), pranayama. Indian diet (rich in pulses, vegetables, fermented foods like curd/idli) supports gut–brain health. Avoid late-night phone use — a major Indian urban sleep disruptor.",
    },
    {
      category: "psychotherapy",
      name: "Cognitive Behavioural Therapy (CBT)",
      description:
        "Beck-developed structured psychotherapy targeting automatic negative thoughts and underlying schemas. 12–16 weekly sessions. Effect size ~0.7 in MDD; equivalent to SSRI; superior to either alone in moderate-severe MDD. Skills: cognitive restructuring, behavioural activation, problem-solving.",
      whenToUse: "First-line for mild-moderate MDD; adjunctive to medication in moderate-severe MDD; maintenance after recovery; preferred if patient is pregnant, refuses medication, or under 25 (avoid early pharmacotherapy where possible).",
      indianContext:
        "NIMHANS, AIIMS, and many private centres offer CBT. Increasing availability of tele-CBT (Tele-MANAS, online platforms). Computerised CBT (cCBT) options are expanding. Family-inclusive CBT is often more effective than individual CBT in Indian joint-family context.",
    },
    {
      category: "psychotherapy",
      name: "Interpersonal Therapy (IPT) and Behavioural Activation (BA)",
      description:
        "IPT focuses on one of four interpersonal problem areas (grief, role transition, role dispute, interpersonal deficits). Behavioural Activation is simpler: scheduling enjoyable and mastery activities to break the cycle of avoidance and low reinforcement. BA alone is as effective as full CBT in mild-moderate MDD (Dimidjian et al., 2006).",
      whenToUse: "IPT for depression with clear interpersonal precipitant; BA when CBT-trained therapist is unavailable (BA can be delivered by junior clinicians after brief training).",
      indianContext:
        "BA is well-suited to low-resource Indian settings — can be delivered by trained community health workers under DMHP. IPT is culturally congruent in India given the importance of relationships and family.",
    },
    {
      category: "pharmacotherapy",
      name: "SSRIs — first-line (sertraline, escitalopram)",
      description:
        "Block SERT → ↑ synaptic serotonin → 5-HT1A autoreceptor desensitisation (1–2 weeks) → BDNF-mediated neurogenesis (4–6 weeks). Cipriani Lancet 2018 network meta-analysis: SSRIs have the best efficacy/tolerability ratio. Sertraline and escitalopram are first-choice SSRIs.",
      whenToUse: "First-line for moderate-severe MDD (PHQ-9 ≥10). Sertraline preferred in pregnancy/lactation and comorbid anxiety. Escitalopram preferred when drug interactions matter (lowest CYP profile).",
      indianContext:
        "IPS guidelines: SSRIs first-line. Indian government hospitals dispense sertraline (Serta, Zosert) and escitalopram under DMHP. Jan Aushadhi generic sertraline is ₹2–5 per tablet — among the most affordable antidepressants in India. Start at 25–50 mg OD, titrate to 100–200 mg OD.",
    },
    {
      category: "pharmacotherapy",
      name: "SNRIs — venlafaxine, duloxetine",
      description:
        "Block both SERT and NET. Venlafaxine: dose-dependent (≤150 mg/day mostly serotonergic; >150 mg/day adds noradrenergic). Duloxetine: balanced SERT/NET inhibition throughout dosing range. Useful when SSRI fails or when comorbid pain (neuropathic, fibromyalgia) is present.",
      whenToUse: "Second-line after SSRI failure; first-line when comorbid neuropathic pain, fibromyalgia, or chronic musculoskeletal pain (duloxetine); severe depression requiring more noradrenergic drive (venlafaxine).",
      indianContext:
        "Widely available in India. Venlafaxine cost ~₹5–15/tablet; duloxetine ~₹8–20/tablet. Watch for hypertension with venlafaxine >225 mg/day. Duloxetine is the preferred antidepressant in patients with comorbid diabetic neuropathy — common in India given diabetes epidemic.",
    },
    {
      category: "pharmacotherapy",
      name: "Atypical antidepressants — bupropion, mirtazapine",
      description:
        "Bupropion (NDRI — norepinephrine-dopamine reuptake inhibitor): activating; reverses SSRI-induced sexual dysfunction; first-line augmentation. Avoid in seizure/eating disorder. Mirtazapine (NaSSA — noradrenergic and specific serotonergic): sedating via 5-HT2/5-HT3 and H1 blockade; improves sleep and appetite; useful in depressed patients with insomnia and weight loss.",
      whenToUse: "Bupropion: when SSRI causes sexual dysfunction or fatigue; smoking cessation comorbidity; ADHD comorbidity. Mirtazapine: when insomnia/weight loss prominent; first-line in cancer/geriatric depression with cachexia.",
      indianContext:
        "Bupropion ~₹10–25/tablet; mirtazapine ~₹3–12/tablet. Mirtazapine widely used in Indian oncology and geriatric practice. Bupropion augmentation of SSRI is a common Indian private-practice strategy for partial response.",
    },
    {
      category: "pharmacotherapy",
      name: "Tricyclic antidepressants (TCAs) — amitriptyline, clomipramine, nortriptyline",
      description:
        "Block SERT + NET (and 5-HT2, α1, H1, muscarinic — responsible for side effects). Equally efficacious as SSRIs but more side-effect burden. Lethal in overdose (cardiotoxicity — QRS widening, QTc prolongation). Onset 2–4 weeks.",
      whenToUse: "Severe or treatment-resistant MDD; when comorbid neuropathic pain (amitriptyline, nortriptyline); OCD (clomipramine); nocturnal enuresis (imipramine). Avoid in elderly (anticholinergic), cardiac disease (QTc), and suicide risk (lethal overdose).",
      indianContext:
        "Amitriptyline is among the cheapest antidepressants in India (~₹1–3/tablet) and is widely used for comorbid chronic pain (neuropathic, fibromyalgia, tension headache). Clomipramine is the only TCA with a specific FDA approval for OCD. Always prescribe smallest pack size and warn about overdose lethality in at-risk patients.",
    },
    {
      category: "pharmacotherapy",
      name: "Augmentation — bupropion, mirtazapine, lithium, triiodothyronine (T3)",
      description:
        "For partial response to SSRI/SNRI after 6–12 weeks of adequate dose: (1) Bupropion XL 150 mg added to SSRI — first-line augmentation, especially effective for residual fatigue/anhedonia/sexual dysfunction; (2) Mirtazapine 15–30 mg at night — improves sleep; (3) Lithium ~600–900 mg/day to level 0.6–0.8 — most evidence-based augmentation; (4) T3 (liothyronine) 25–50 mcg/day — rapid but risk of osteoporosis.",
      whenToUse: "Partial response (≥25% but <50% PHQ-9 reduction) after 6–12 weeks of optimised SSRI. Lithium augmentation has the strongest evidence base (8 RCTs; NNT ~4 for response).",
      indianContext:
        "Lithium requires monitoring (levels, renal, thyroid) — challenging in rural India. Bupropion and mirtazapine augmentation is more practical and widely used in Indian private practice. Always reassess diagnosis (bipolar missed? substance use?) before declaring treatment-resistant.",
    },
    {
      category: "pharmacotherapy",
      name: "Ketamine / Esketamine (rapid-acting)",
      description:
        "NMDA receptor antagonism → glutamate surge → synaptic plasticity and BDNF release. Single IV dose produces response within hours (vs 4–6 weeks for SSRIs). Esketamine intranasal (Spravato) — FDA-approved for treatment-resistant depression (must have failed ≥2 antidepressants).",
      whenToUse: "Treatment-resistant depression (failed ≥2 antidepressant trials of adequate dose/duration); severe depression with acute suicide risk (single IV ketamine dose can reduce suicidality within 24 hours).",
      indianContext:
        "IV ketamine is widely available in Indian anaesthesia/ED settings — increasingly used off-label in Indian private psychiatry for treatment-resistant depression. Esketamine is available but expensive (₹15,000–25,000 per session). Requires 2-hour observation post-dose. NIMHANS has conducted ketamine research in Indian patients.",
    },
    {
      category: "brain-stimulation",
      name: "ECT (Electroconvulsive Therapy)",
      description:
        "Generalised seizure induced by electrical current under brief anaesthesia (propofol/methohexital) and muscle relaxant (succinylcholine). Bitemporal or unilateral electrode placement. 6–12 sessions, 2–3×/week. Mechanism: massive neurotransmitter release, BDNF upregulation, neuroendocrine reset. ~80% response rate in severe depression — faster and more effective than any medication.",
      whenToUse: "Severe MDD with psychosis, catatonia, or active suicidality; refusal to eat/drink (life-threatening); treatment-resistant MDD; when rapid response is needed (e.g., pregnancy where medications are limited); stooped severe psychomotor retardation.",
      indianContext:
        "ECT is widely available in Indian government and private psychiatry centres. The Mental Healthcare Act 2017 explicitly permits ECT under anaesthesia with informed consent — bans unmodified ECT. In Indian practice, ECT is used more readily than in some Western settings for severe depression — particularly in government hospitals, where it offers a rapid, cost-effective solution for severe psychotic/suicidal depression.",
    },
    {
      category: "brain-stimulation",
      name: "rTMS (Repetitive Transcranial Magnetic Stimulation)",
      description:
        "Non-invasive brain stimulation using a magnetic coil over the left dorsolateral prefrontal cortex (DLPFC). 10 Hz stimulation, 30–36 sessions over 6 weeks. FDA-approved for treatment-resistant MDD. No anaesthesia; minimal side effects (scalp discomfort, rare seizure).",
      whenToUse: "Treatment-resistant MDD where ECT is refused or contraindicated; depression with prominent cognitive/executive dysfunction; long-term maintenance therapy.",
      indianContext:
        "rTMS is available in Indian private psychiatry centres (NIMHANS, AIIMS, private hospitals). Cost ~₹1,500–3,000 per session — 6-week course ₹30,000–60,000 — making it accessible only to middle/high-income patients currently. Insurance coverage is expanding.",
    },
  ],

  /* ============================================================
     DRUGS — LINKS TO KYP DRUG PAGES
     ============================================================ */
  drugs: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "First-line SSRI",
      rationale:
        "SSRI of choice in pregnancy and lactation; 6 FDA indications (MDD, OCD, panic, PTSD, social anxiety, PMDD); only SSRI FDA-approved for PTSD; σ1 agonism (anxiolytic); mild CYP2D6 inhibition (fewer interactions); affordable generic (₹2–5/tablet). Default first-choice SSRI in Indian government and private practice.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "First-line SSRI",
      rationale:
        "S-enantiomer of citalopram; lowest CYP interaction profile of all SSRIs — preferred when patient is on complex polypharmacy. FDA-approved for MDD and GAD (12–17 years). QTc watch at higher doses (>20 mg).",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      role: "First-line SSRI (activating)",
      rationale:
        "Longest half-life (1–4 days with norfluoxetine) → mildest discontinuation syndrome — good for adherence. Most activating SSRI — preferred for lethargic/asthenic depression. Only SSRI FDA-approved for paediatric depression (≥8 years) and bulimia nervosa.",
    },
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      role: "Second-line / SNRI",
      rationale:
        "Serotonin-norepinephrine reuptake inhibitor; effective after SSRI failure. Dose-dependent (≤150 mg/day mostly serotonergic; >150 mg/day adds noradrenergic). Watch BP — can cause hypertension at high doses. Useful in severe depression requiring more noradrenergic drive.",
    },
    {
      name: "Duloxetine",
      slug: "duloxetine",
      role: "First-line when pain comorbid",
      rationale:
        "Balanced SNRI with strong evidence for comorbid neuropathic pain (diabetic neuropathy, fibromyalgia, chronic musculoskeletal pain). Preferred in patients with depression + chronic pain — common combination in India given diabetes and chronic disease burden.",
    },
    {
      name: "Bupropion",
      slug: "bupropion",
      role: "Augmentation / Atypical",
      rationale:
        "NDRI — first-line augmentation for SSRI partial response. Reverses SSRI-induced sexual dysfunction. Useful when fatigue/anhedonia prominent or smoking cessation comorbid. Avoid in seizure disorder, eating disorders, and bulimia.",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      role: "First-line when insomnia/weight loss",
      rationale:
        "NaSSA — sedating (H1 blockade) and appetite-stimulating. Ideal when insomnia and weight loss are prominent. Useful in cancer/geriatric depression with cachexia. Augments SSRI when combined (mirtazapine + SSRI = 'California Rocket Fuel').",
    },
    {
      name: "Amitriptyline",
      slug: "amitriptyline",
      role: "TCA — severe / treatment-resistant / pain comorbid",
      rationale:
        "TCA — equally efficacious as SSRIs but more side-effect burden and lethal in overdose. Useful for severe/treatment-resistant MDD and when comorbid chronic neuropathic pain (diabetic neuropathy, fibromyalgia, post-herpetic neuralgia). Among the cheapest antidepressants in India (~₹1–3/tablet). Avoid in elderly (anticholinergic), cardiac disease (QTc), and suicide risk (overdose lethality).",
    },
  ],

  /* ============================================================
     INDIAN PRACTICE
     ============================================================ */
  indianPractice: {
    indianGuidelines:
      "Indian Psychiatric Society (IPS) — Clinical Practice Guidelines for Management of Depression (most recent revision 2023). Core recommendations: (1) SSRIs are first-line pharmacotherapy for MDD; (2) Sertraline and escitalopram are the most commonly prescribed SSRIs in Indian practice; (3) PHQ-9 should be used for diagnosis and monitoring where feasible; (4) Combined pharmacotherapy + psychotherapy is preferred for moderate-severe MDD; (5) Screen for bipolar disorder before initiating antidepressant; (6) ECT for severe/psychotic/catatonic/suicidal depression. IPS guidelines are concordant with international guidelines (NICE CG91, APA) but emphasise Indian realities — cost constraints, family involvement, and limited specialist access. ICD-10 is the official coding system in Indian government hospitals; DSM-5 is used in academic settings.",
    governmentHospitals:
      "District Mental Health Programme (DMHP) operates in 700+ of India's 770+ districts. Standard government-hospital protocol: (1) Clinical diagnosis using ICD-10 criteria; (2) PHQ-9 for severity where literacy permits; (3) First-line: sertraline 25–50 mg OD (lower starting dose than Western guidelines, to minimise early side effects given limited follow-up); (4) Review at 2/4/6/12 weeks; (5) Augmentation with bupropion or mirtazapine for partial response; (6) Referral to district psychiatry OPD for treatment-resistant cases; (7) ECT available in tertiary centres (district hospital + medical college). Tele-MANAS (14416) provides free 24/7 counselling in 20 languages.",
    privatePractice:
      "Indian private psychiatry follows international guidelines more closely. Standard protocol: (1) DSM-5 diagnosis; (2) PHQ-9 at baseline, 4, 8, 12 weeks; (3) Wider antidepressant choice — SSRIs (sertraline, escitalopram, fluoxetine, paroxetine), SNRIs (venlafaxine, duloxetine), atypicals (bupropion, mirtazapine); (4) Combined pharmacotherapy + CBT/IPT where available; (5) Augmentation strategies (bupropion, mirtazapine, lithium, T3); (6) rTMS available in major metros; (7) Esketamine for treatment-resistant MDD. Cost: ₹2–25 per tablet for antidepressants; rTMS ₹30,000–60,000 per course; esketamine ₹15,000–25,000 per session. Insurance coverage is expanding under PMJAY (Ayushman Bharat) for severe mental illness.",
    primaryCare:
      "General practitioners (GPs) and family physicians can and should initiate SSRIs for mild-moderate MDD in India — consistent with WHO mhGAP and DMHP guidelines. Standard primary-care protocol: (1) Screen with PHQ-2 (2-item); if positive, confirm with PHQ-9; (2) Exclude medical mimics (TSH, CBC, B12); (3) Screen for bipolar (MDQ) and suicidality; (4) Initiate sertraline 25–50 mg OD for PHQ-9 10–19; (5) Counsel on 4–6 week onset, side effects, and adherence; (6) Review at 2/4/6 weeks; (7) Refer to psychiatrist if PHQ-9 ≥20, suicidal ideation, psychotic features, treatment-resistant, or diagnostic uncertainty. Tele-MANAS (14416) for crisis support.",
    costConsiderations:
      "Antidepressant costs in India (per tablet): Jan Aushadhi sertraline ₹2–5; branded sertraline (Serta, Serenata, Zosert) ₹3–8; escitalopram ₹3–10; fluoxetine ₹2–6; venlafaxine ₹5–15; duloxetine ₹8–20; bupropion ₹10–25; mirtazapine ₹3–12; amitriptyline ₹1–3. Jan Aushadhi Kendras stock sertraline (25/50/100 mg), escitalopram (5/10/20 mg), fluoxetine (20/60 mg), amitriptyline (10/25/75 mg). ECT in government hospitals is free or minimal cost; in private hospitals ₹500–2000/session. rTMS ₹30,000–60,000/course (mostly private). Esketamine ₹15,000–25,000/session (private only). PMJAY (Ayushman Bharat) covers severe mental illness treatment for eligible families.",
    patientCounselling: [
      "Depression is a real medical illness — like diabetes or hypertension — not weakness, laziness, or 'thinking too much'. The brain's chemistry is affected.",
      "Treatment works. With combined medication and counselling, 60–70% of patients improve significantly. Untreated, depression can become chronic or life-threatening.",
      "Medication (SSRI) takes 4–6 weeks to work fully. Side effects in the first 1–2 weeks (nausea, headache, sleep changes) usually settle. Don't stop early — wait for the benefit.",
      "NEVER stop antidepressants abruptly. Your doctor will help you reduce the dose gradually over several weeks when it is time to stop.",
      "Continue treatment for 6–12 months AFTER you feel better — stopping earlier dramatically increases the chance of relapse.",
      "Sexual side effects (reduced interest, difficulty reaching orgasm) are common and can be embarrassing — but your doctor can help. Don't stop the medicine without discussing alternatives.",
      "Avoid alcohol — it can worsen depression and interact with medication.",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month — contact your doctor immediately or call Tele-MANAS at 14416 (toll-free, 24/7, 20 Indian languages).",
      "Involve your family — they can help monitor your mood, ensure you take your medication, and spot warning signs. In Indian joint-family context, family support is often the most powerful predictor of recovery.",
      "Free/low-cost options: Jan Aushadhi sertraline (₹2–5/tablet), government hospital psychiatry OPDs under DMHP, Tele-MANAS counselling (14416, free).",
      "Yoga, pranayama, and exercise are evidence-based adjuncts — not replacements for medication in moderate-severe depression.",
      "Don't keep suicidal thoughts secret — sharing them with someone you trust can save your life.",
    ],
  },

  /* ============================================================
     PATIENT EDUCATION
     ============================================================ */
  patientEducation: {
    whatIsIt:
      "Depression (Major Depressive Disorder) is a common medical condition that affects how you feel, think, and handle daily activities. It is more than just feeling sad or 'low' for a few days — it is a persistent pattern (at least 2 weeks) of low mood or loss of interest that affects sleep, appetite, energy, concentration, and self-worth. Globally, ~300 million people have depression — it is the leading cause of disability worldwide. In India, ~57 million people are affected. Depression is not weakness, laziness, or 'thinking too much' — it is a real medical illness with biological changes in the brain.",
    whatCausesIt:
      "Depression has no single cause — it results from a combination of: (1) BIOLOGICAL factors — changes in brain chemicals (serotonin, norepinephrine, dopamine), hormonal changes, and reduced BDNF (a chemical that helps brain cells grow and connect); (2) GENETIC factors — depression runs in families (heritability ~37%); (3) PSYCHOLOGICAL factors — negative thinking patterns, low self-esteem, chronic stress; (4) SOCIAL factors — isolation, unemployment, relationship problems, poverty, trauma. Some medical conditions (hypothyroidism, vitamin B12 deficiency, chronic pain) and some medicines can also cause depression-like symptoms — your doctor will check for these.",
    symptoms:
      "Common symptoms include: feeling sad, empty, or hopeless most of the day; losing interest or pleasure in activities you used to enjoy; changes in sleep (trouble sleeping, or sleeping too much); changes in appetite or weight; feeling tired or having no energy; difficulty concentrating or making decisions; feeling worthless or guilty; thoughts of death or suicide. Symptoms must last at least 2 weeks and interfere with daily life to be diagnosed as depression. If you have thoughts of suicide, seek help immediately — call Tele-MANAS at 14416 (toll-free, 24/7).",
    treatment:
      "Depression is treatable. The three pillars are: (1) MEDICATION — antidepressants (usually SSRIs like sertraline or escitalopram) that help restore the brain's chemical balance. They take 4–6 weeks to work fully. Common side effects (nausea, sleep changes, sexual dysfunction) are usually mild and temporary. (2) PSYCHOTHERAPY — 'talking therapy' like CBT (cognitive behavioural therapy) that helps identify and change negative thinking patterns. CBT is as effective as medication for mild-moderate depression; the combination is best for moderate-severe. (3) LIFESTYLE — regular exercise (30 min/day, 5 days/week), good sleep hygiene, social connection, and reducing alcohol. Treatment usually continues for 6–12 months AFTER you feel better, to prevent relapse.",
    selfHelp: [
      "Regular exercise — 30 minutes of walking, yoga, or any activity, 5 days/week. Exercise is as effective as medication in mild depression.",
      "Sleep hygiene — fixed wake time, no screens before bed, avoid caffeine after noon, dark and cool bedroom.",
      "Social connection — talk to family, friends, or a trusted person daily. Isolation deepens depression.",
      "Daily routine — get up, dress, eat meals, and sleep at the same times each day. Structure anchors mood.",
      "Behavioural activation — schedule one enjoyable and one 'mastery' activity daily, even if you don't feel like it. Mood follows action.",
      "Limit alcohol — alcohol is a depressant and worsens mood, sleep, and medication effect.",
      "Sunlight exposure — 15–30 minutes of morning sunlight daily helps circadian rhythm and vitamin D.",
      "Mindfulness, pranayama, yoga, meditation — evidence-based adjuncts; Sudarshan Kriya has Indian RCT evidence for depression.",
      "Reduce screen time and social media — especially late-night use.",
      "Don't make big decisions (job change, relationships) during a depressive episode — wait until you have recovered.",
    ],
    whenToSeekHelp: [
      "Persistent low mood or loss of interest lasting more than 2 weeks.",
      "Functional impairment — unable to work, study, or care for self/family.",
      "Thoughts of death, suicide, or harming yourself — SEEK HELP IMMEDIATELY. Call Tele-MANAS 14416 (toll-free, 24/7, 20 Indian languages). In emergency, call 112.",
      "Significant sleep, appetite, or weight changes.",
      "Inability to enjoy activities you previously enjoyed (anhedonia).",
      "Feeling hopeless, worthless, or excessive guilt.",
      "Alcohol or substance use to cope with mood.",
      "Any symptom of psychosis — hearing voices, believing people are trying to harm you, etc.",
    ],
    indianResources: [
      "Tele-MANAS — National Tele-Mental Health Helpline: 14416 or 1-800-891-4416 (toll-free, 24/7, 20 Indian languages including Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, Punjabi, Odia, Assamese, Urdu). Launched October 2022 by the Government of India. Provides free counselling, assessment, and referral.",
      "NIMHANS (National Institute of Mental Health and Neurosciences), Bengaluru — premier government mental health institute. OPD services available; emergency psychiatry 24/7. Website: nimhans.ac.in",
      "District Mental Health Programme (DMHP) — free mental health services at district hospitals across India. Available in 700+ of India's 770+ districts.",
      "iCall (Indian Council of Mental Health helpline) — 9152987821 (free, Mon–Sat 8 AM–10 PM).",
      "Vandrevala Foundation — 1860-2662-345 or 9999 666 555 (24/7).",
      "Jan Aushadhi Kendras — generic antidepressants (sertraline, escitalopram, fluoxetine, amitriptyline) at ₹2–5 per tablet. Locate at janaushadhi.gov.in",
      "PMJAY (Ayushman Bharat) — covers severe mental illness treatment for eligible families (₹5 lakh annual cover).",
      "AASRA — 9820466726 (suicide prevention, 24/7).",
    ],
  },

  /* ============================================================
     CLINICAL PEARLS (10)
     ============================================================ */
  clinicalPearls: [
    "ALWAYS screen for bipolar disorder (MDQ questionnaire) before starting any antidepressant. Missing bipolar depression and treating with an SSRI alone risks a manic switch — potentially disastrous. Ask specifically about prior periods of elevated mood, reduced sleep need, racing thoughts, and impulsive behaviour.",
    "PHQ-9 is used for BOTH diagnosis AND monitoring. Baseline score, then repeat at 4/8/12 weeks. ≥50% reduction = response; final score <5 = remission. Always check PHQ-9 item 9 (suicidal thoughts) — any positive response triggers formal suicide risk assessment.",
    "SSRI onset is 4–6 weeks for depression (8–12 weeks for anxiety disorders). Counsel patients explicitly: 'Side effects come first (week 1–2), mood benefit comes later (week 4–6). Don't stop early.' Patients who stop at 2 weeks stop before the drug works.",
    "Sexual dysfunction affects 30–50% of patients on SSRIs and is the #1 reason for non-adherence. Patients rarely volunteer it — ask directly at every follow-up: 'Any changes in sexual interest or function?' Solutions: dose reduction, add bupropion XL 150 mg, switch to bupropion or mirtazapine.",
    "Continue antidepressant treatment for 6–12 months AFTER remission for a first episode of MDD; longer (often indefinite) for recurrent episodes (≥3 episodes → maintenance therapy). Stopping earlier dramatically increases relapse risk (~40% relapse rate if stopped at 4 months vs <10% if continued for 12 months).",
    "First-line augmentation for SSRI partial response: bupropion XL 150 mg/day (especially for fatigue/anhedonia/sexual dysfunction) OR mirtazapine 15–30 mg at night (especially for insomnia/poor appetite). Lithium has the strongest evidence base for augmentation but requires level/renal/thyroid monitoring.",
    "Sertraline is the SSRI of choice in pregnancy and lactation — lowest placental transfer and milk/plasma ratio (~0.5), infant serum levels usually undetectable. Avoid paroxetine (1st-trimester cardiac defects — former Category D). Never stop an SSRI abruptly if a patient becomes pregnant — abrupt discontinuation risks relapse AND discontinuation syndrome.",
    "ECT is indicated for: severe MDD with psychotic features, catatonia, active suicidality requiring rapid response, refusal to eat/drink (life-threatening), treatment-resistant MDD, and when medications are contraindicated (pregnancy). ECT has ~80% response rate in severe depression — faster and more effective than any medication. The Mental Healthcare Act 2017 permits ECT under anaesthesia with informed consent and bans unmodified ECT.",
    "Combined SSRI + CBT produces better long-term outcomes than either alone in moderate-severe MDD. CBT also reduces relapse risk after medication discontinuation. Always refer for CBT where available — Tele-MANAS, online platforms (Wysa, ePsyClinic), or in-person services.",
    "NEVER stop an antidepressant abruptly after ≥4 weeks of use. Taper over 4+ weeks to avoid discontinuation syndrome (FINISH: Flu-like, Insomnia, Nausea, Imbalance, Sensory 'brain zaps', Hyperarousal). For short half-life SSRIs (paroxetine), substitute fluoxetine for the last 2 weeks of taper — fluoxetine self-tapers due to long half-life.",
    "If no response to SSRI after 6 weeks at adequate dose → increase dose. If no response at 12 weeks → switch class (SNRI, bupropion, mirtazapine) or augment. If 2 adequate antidepressant trials fail → refer to psychiatry; consider augmentation (lithium, T3), atypical antipsychotic (aripiprazole, quetiapine), ketamine/esketamine, rTMS, or ECT.",
    "Always assess suicide risk directly — don't avoid the question. Ask: 'Have you had thoughts of death or suicide? Have you made any plans?' Asking does NOT increase risk; it provides relief and enables safety planning. Document assessment. Provide Tele-MANAS (14416) number. Involve family in monitoring.",
  ],

  /* ============================================================
     EXAM LENS — STRUCTURED BY INDIAN EXAM
     ============================================================ */
  examLens: {
    mbbs: {
      viva: [
        "What are the DSM-5 criteria for Major Depressive Disorder? (5+ of 9 symptoms for ≥2 weeks; must include depressed mood or anhedonia; causes impairment; not attributable to substance/medical condition; no prior manic/hypomanic episode.)",
        "Name the 9 symptoms of MDD (mnemonic: SIGECAPS — Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality + depressed Mood).",
        "What is the difference between MDD and bipolar depression? (Bipolar requires prior manic/hypomanic episode; always screen with MDQ before starting antidepressant to avoid manic switch.)",
        "What is the first-line pharmacotherapy for MDD? (SSRI — sertraline or escitalopram. IPS and NICE CG91 concur.)",
        "What is the black box warning for antidepressants? (Increased suicidality in patients <25 years. Weekly monitoring in the first month.)",
        "What is serotonin syndrome? Triad? Treatment? (Mental status change + autonomic instability + neuromuscular excitation [clonus, hyperreflexia]. Treatment: stop serotonergic agent, benzodiazepines, cyproheptadine, cooling.)",
      ],
      practical: [
        "Take a psychiatric history from a patient with suspected depression — including suicide risk assessment and bipolar screening (MDQ).",
        "Score and interpret a PHQ-9 (calculate severity band and treatment recommendation).",
        "Counsel a patient starting an SSRI for first-episode depression — address onset delay, side effects, adherence, and follow-up.",
        "Write a prescription for sertraline for a 30-year-old with first-episode moderate depression (50 mg OD, morning, with food).",
      ],
      longAnswer: [
        "Define Major Depressive Disorder. Describe the diagnostic criteria (DSM-5/ICD-10), clinical features, differential diagnosis, and stepwise management. Discuss the role of PHQ-9 and the importance of screening for bipolar disorder.",
        "A 45-year-old woman presents with 6 weeks of low mood, anhedonia, and suicidal thoughts. Discuss the assessment, diagnosis, and management. Address suicide risk assessment, pharmacotherapy selection (including pregnancy considerations), and the role of ECT.",
      ],
    },
    neetPg: {
      highYield: [
        "DSM-5 MDD criteria: 5+ of 9 symptoms for ≥2 weeks; must include depressed mood OR anhedonia. Mnemonic SIGECAPS — Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality + depressed Mood.",
        "ICD-10: ≥2 of 3 core symptoms (depressed mood, anhedonia, reduced energy) for ≥2 weeks = depressive episode. F32.x = single episode; F33.x = recurrent; F34.1 = dysthymia.",
        "ICD-10 vs DSM-5 difference: ICD-10 requires only 2 of 3 core symptoms; DSM-5 requires 5+ of 9. ICD-10 is the official system in India.",
        "PHQ-9 score bands: 0–4 minimal, 5–9 mild, 10–14 moderate, 15–19 moderately severe, 20–27 severe. ≥10 is the threshold for clinical depression. Item-9 = suicidal thoughts.",
        "HAM-D 17: <8 normal, 8–13 mild, 14–18 moderate, 19–22 severe, >23 very severe. ≥50% reduction = response.",
        "Most common differential to exclude: BIPOLAR DEPRESSION. Screen with MDQ before starting any antidepressant.",
        "SSRIs are first-line for MDD (NICE CG91, IPS, APA). Sertraline and escitalopram are first-choice SSRIs.",
        "Onset of action: 4–6 weeks for depression; 8–12 weeks for anxiety disorders. Counsel patients to wait.",
        "Sexual dysfunction is the #1 reason for SSRI discontinuation (30–50% incidence). Add bupropion or switch.",
        "ECT indications: severe MDD with psychosis, catatonia, active suicidality, refusal to eat/drink, treatment-resistant, pregnancy where medications are limited. ~80% response rate.",
      ],
      pyqConcepts: [
        "NEET PG 2022: DSM-5 diagnostic criteria for MDD — number of symptoms required and duration. (Answer: 5+ of 9 symptoms for ≥2 weeks; must include depressed mood or anhedonia.)",
        "NEET PG 2021: PHQ-9 score interpretation — score of 18 corresponds to which severity band? (Answer: 15–19 = moderately severe.)",
        "NEET PG 2020: A 30-year-old woman presents with 3 weeks of low mood, anhedonia, early-morning awakening, and weight loss. Diagnosis? (Answer: Major Depressive Disorder, single episode, moderate-severe.)",
        "NEET PG 2019: Which is the most appropriate first-line antidepressant in pregnancy? (Answer: Sertraline — SSRI of choice in pregnancy.)",
        "INICET 2022: A patient on SSRI for 6 weeks reports partial response. What is the next step? (Answer: Optimise SSRI dose → if still partial at 12 weeks, augment with bupropion XL 150 mg or mirtazapine 15–30 mg, or switch to SNRI.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 28-year-old woman presents with 8 weeks of low mood, anhedonia, early-morning awakening, 4 kg weight loss, and PHQ-9 = 17. She has a family history of bipolar disorder. What is your approach? (Answer: Diagnose MDD moderate-severe (ICD-10 F32.2). Screen for bipolar with MDQ before starting antidepressant — given family history. If MDQ positive, refer to psychiatry for mood stabiliser assessment. If MDQ negative, start sertraline 50 mg OD + CBT. Monitor weekly for manic switch in first 2 months. Counsel on 4–6 week onset, side effects, and adherence. Provide Tele-MANAS 14416.)",
        "A 65-year-old man on sertraline for 3 weeks presents with confusion and headache. Sodium is 122 mmol/L. What is the diagnosis and management? (Answer: SSRI-induced SIADH (hyponatraemia). Risk highest in elderly, first 2 weeks. Management: fluid restrict, hold sertraline, monitor sodium; if Na <120 or seizures → hypertonic saline in ICU. Reassess antidepressant choice — consider mirtazapine or ECT if depression still requires urgent treatment.)",
        "A 32-year-old woman with depression is 8 weeks pregnant and on sertraline 50 mg. She wants to stop. How do you counsel her? (Answer: Sertraline is the SSRI of choice in pregnancy — lowest placental transfer. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality). Stopping abruptly risks relapse AND discontinuation syndrome. Counsel: continue sertraline, monitor closely with obstetrician. Watch for neonatal adaptation syndrome in 3rd trimester (jitteriness, respiratory distress, poor feeding — usually self-limited).)",
        "A 22-year-old college student with severe depression and active suicidality is brought to the ER. What is your immediate management? (Answer: Psychiatric emergency. (1) Assess suicidality directly and remove access to means. (2) Do not send home alone — admit or supervised setting. (3) Consider urgent ECT (rapid response within days). (4) Start SSRI (sertraline 50 mg OD). (5) Tele-MANAS 14416 for family. (6) Black box warning — weekly monitoring. (7) Involve family for safety planning.)",
        "A 45-year-old man has failed two adequate SSRI trials (sertraline 200 mg, then escitalopram 20 mg) over 8 months. PHQ-9 remains 18. What are the options? (Answer: Treatment-resistant depression. (1) Reassess diagnosis — missed bipolar? Substance use? Medical mimic? (2) Augment with bupropion XL 150 mg or mirtazapine 15 mg. (3) Switch to SNRI (venlafaxine, duloxetine) or TCA (amitriptyline). (4) Consider lithium augmentation (level 0.6–0.8). (5) Consider atypical antipsychotic augmentation (aripiprazole 2–5 mg, quetiapine XR 150 mg). (6) Consider rTMS or esketamine. (7) ECT if severe/suicidal/psychotic.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "MDD DSM-5 criteria: 5+ of 9 symptoms for ≥2 weeks; must include depressed mood or anhedonia.",
        "Mnemonic SIGECAPS for MDD symptoms: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality + depressed Mood.",
        "PHQ-9 score ≥10 = clinical depression. ≥50% reduction = response. <5 = remission.",
        "First-line pharmacotherapy: SSRI (sertraline or escitalopram).",
        "Onset of SSRI action: 4–6 weeks. Counsel patient to wait.",
        "Sexual dysfunction is the most common reason for SSRI discontinuation.",
        "Always screen for bipolar disorder before starting an antidepressant.",
        "ECT indications: severe/psychotic/catatonic/suicidal depression. ~80% response rate.",
        "Continue treatment for 6–12 months after remission for first episode.",
        "Sertraline is the SSRI of choice in pregnancy and lactation.",
        "Bipolar depression vs MDD: bipolar has prior manic/hypomanic episode; treat with mood stabiliser first.",
        "Tele-MANAS helpline: 14416 (free, 24/7, 20 Indian languages).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The monoamine hypothesis is incomplete. Modern pathophysiology emphasises: (1) BDNF/neuroplasticity hypothesis — stress and depression lower BDNF, causing hippocampal volume loss (~5–10% reduction on MRI); all antidepressants converge on BDNF upregulation. (2) Inflammatory hypothesis — elevated CRP/IL-6/TNF-α; IDO activation shunts tryptophan to kynurenine; explains treatment-resistant depression with chronic inflammation. (3) HPA axis hyperactivity — cortisol elevation, impaired dexamethasone suppression. (4) Circuit-level: hyperactive amygdala, hypoactive prefrontal cortex, hyperactive subgenual cingulate (Brodmann 25).",
        "Treatment-resistant depression (TRD) algorithm: (1) Confirm diagnosis — reassess for bipolar, substance use, medical mimics, non-adherence. (2) Optimise current antidepressant dose to maximum tolerated. (3) Augment: bupropion XL 150 mg, mirtazapine 15–30 mg, lithium (level 0.6–0.8), T3 25–50 mcg, atypical antipsychotic (aripiprazole 2–5 mg, quetiapine XR 150 mg, olanzapine 5 mg). (4) Switch class: SSRI → SNRI → TCA → MAOI. (5) Ketamine/esketamine for severe TRD with suicidality. (6) rTMS — left DLPFC, 10 Hz, 30–36 sessions. (7) ECT for severe/psychotic/catatonic/suicidal TRD.",
        "Ketamine mechanism: NMDA antagonism → glutamate surge → mTOR pathway activation → rapid synaptogenesis and BDNF release. Single IV dose (0.5 mg/kg over 40 min) produces response within hours — useful for acute suicidality. Esketamine intranasal (Spravato) — FDA-approved for TRD. Indian NIMHANS studies confirm efficacy in Indian patients. Requires 2-hour post-dose observation.",
        "Antidepressant selection by patient profile: PREGNANCY/LACTATION → sertraline (SSRI of choice). ELDERLY → sertraline or escitalopram (low CYP interactions); avoid paroxetine (anticholinergic); watch SIADH. COMORBID PAIN → duloxetine (SNRI). INSOMNIA/WEIGHT LOSS → mirtazapine. FATIGUE/ANHEDONIA → bupropion (or SSRI + bupropion augmentation). SEXUAL DYSFUNCTION → bupropion (avoid SSRIs). CARDIAC DISEASE → sertraline (best cardiac safety data post-MI). SEIZURE DISORDER → sertraline, citalopram (avoid bupropion).",
        "Maintenance therapy duration: First episode → 6–12 months after remission. Second episode → 2–3 years. Third+ episode → indefinite. Recurrence rates: ~50% after 1 episode, ~70% after 2, ~90% after 3. Patient and family education about maintenance therapy is critical — premature discontinuation is the most common cause of relapse.",
        "Psychotic depression requires combination therapy: antidepressant + antipsychotic (olanzapine, quetiapine, aripiprazole). ECT is the most effective treatment for psychotic depression (~80% response). Do NOT use antidepressant alone — psychotic depression is a high-risk presentation with elevated suicide risk.",
        "Peripartum depression: ~10–15% of pregnant/postpartum women. Onset usually within 4 weeks postpartum (DSM-5 specifier: peripartum onset = during pregnancy or within 4 weeks postpartum). Sertraline is the SSRI of choice. ECT is safe in pregnancy. Untreated peripartum depression has serious consequences — impaired bonding, infanticide risk, suicide (a leading cause of maternal mortality). Indian context: family involvement is critical; stigma is high.",
      ],
    },
  },

  /* ============================================================
     EXAM FREQUENCY — STAR RATINGS
     ============================================================ */
  examFrequency: {
    neetPg: 5,
    inicet: 5,
    mbbsViva: 5,
    fmge: 5,
  },

  /* ============================================================
     PYQ METADATA — CONCEPT-LEVEL, NO COPYRIGHTED CONTENT
     ============================================================ */
  pyqMetadata: [
    { exam: "NEET PG", year: 2022, concept: "DSM-5 diagnostic criteria for MDD — number of symptoms and duration", topic: "Mood disorders — diagnosis" },
    { exam: "NEET PG", year: 2021, concept: "PHQ-9 score interpretation and severity bands", topic: "Psychiatric rating scales" },
    { exam: "NEET PG", year: 2020, concept: "First-line antidepressant in pregnancy", topic: "Antidepressants in pregnancy" },
    { exam: "NEET PG", year: 2019, concept: "SIGECAPS mnemonic for MDD symptoms", topic: "MDD diagnosis" },
    { exam: "INICET", year: 2023, concept: "Augmentation strategy for SSRI partial response", topic: "Treatment-resistant depression" },
    { exam: "INICET", year: 2022, concept: "ECT indications in MDD", topic: "Brain stimulation therapies" },
    { exam: "INICET", year: 2021, concept: "Bipolar vs unipolar depression — screening before antidepressant", topic: "Bipolar disorder" },
    { exam: "FMGE", year: 2022, concept: "DSM-5 criteria for MDD — 5 of 9 symptoms for 2 weeks", topic: "Mood disorders" },
    { exam: "FMGE", year: 2021, concept: "SSRI mechanism and onset of action", topic: "Antidepressant pharmacology" },
    { exam: "AIIMS", year: 2020, concept: "Serotonin syndrome — diagnosis and treatment", topic: "Antidepressant adverse effects" },
  ],

  /* ============================================================
     MEMORY TRICKS
     ============================================================ */
  memoryTricks: [
    {
      title: "DSM-5 MDD Symptoms — SIGECAPS",
      trick:
        "SIGECAPS — Sleep (insomnia/hypersomnia), Interest (anhedonia), Guilt (worthlessness), Energy (fatigue), Concentration (poor), Appetite (change), Psychomotor (agitation/retardation), Suicidality. Plus depressed Mood. Need 5+ of 9 for ≥2 weeks.",
      remembers: "The 9 DSM-5 symptoms of MDD. 'Caps' = capsules (the antidepressant you'll prescribe).",
    },
    {
      title: "DSM-5 vs ICD-10 Criteria Difference",
      trick:
        "DSM-5 = '5 of 9' (need 5 symptoms from 9). ICD-10 = '2 of 3' (need 2 core symptoms from 3: depressed mood, anhedonia, reduced energy).",
      remembers: "The most tested diagnostic distinction. ICD-10 (used in Indian government hospitals) is less stringent than DSM-5.",
    },
    {
      title: "PHQ-9 Severity Bands — '5-10-15-20'",
      trick:
        "PHQ-9: 0–4 minimal, 5–9 mild, 10–14 moderate, 15–19 moderately severe, 20–27 severe. Treat ≥10 with active therapy.",
      remembers: "PHQ-9 score interpretation. ≥10 is the threshold for clinical depression; ≥20 is severe (urgent psychiatry referral).",
    },
    {
      title: "First-line Antidepressant — 'Sertraline or Escitalopram'",
      trick:
        "S-E first-line: Sertraline or Escitalopram. (S = Safe in pregnancy; E = Escitalopram for fewest interactions.)",
      remembers: "First-choice SSRIs in MDD — per IPS, NICE, and APA guidelines.",
    },
    {
      title: "Bipolar Screen Before Antidepressant — 'MDQ First'",
      trick:
        "Before any antidepressant: MDQ (Mood Disorder Questionnaire) first. Missed bipolar + SSRI = MANIC SWITCH.",
      remembers: "The single most important safety check before initiating an antidepressant.",
    },
    {
      title: "SSRI Onset — '4–6 Weeks'",
      trick:
        "Side effects week 1–2, mood benefit week 4–6. Don't stop early — patients who stop at 2 weeks stop before the drug works.",
      remembers: "SSRI onset delay and the rationale for patient counselling.",
    },
    {
      title: "ECT Indications — 'CUPS'",
      trick:
        "CUPS — Catatonia, Urgent suicidality, Psychotic features, Severe treatment-resistant. (Also Stupor / refusal to eat.)",
      remembers: "When to consider ECT in MDD.",
    },
    {
      title: "Discontinuation Syndrome — 'FINISH'",
      trick:
        "FINISH — Flu-like symptoms, Insomnia, Nausea, Imbalance, Sensory disturbances ('brain zaps'), Hyperarousal. Worst with paroxetine (shortest half-life); mildest with fluoxetine (self-tapers).",
      remembers: "SSRI discontinuation syndrome symptoms and worst-offending drug.",
    },
    {
      title: "Augmentation Ladder — 'B-M-L-T'",
      trick:
        "After SSRI partial response: Bupropion → Mirtazapine → Lithium → T3. (Bupropion first — easiest; Lithium strongest evidence.)",
      remembers: "Stepwise augmentation strategy for treatment-resistant depression.",
    },
    {
      title: "Beck's Cognitive Triad — 'Self-World-Future'",
      trick:
        "Negative view of SELF (worthless), WORLD (unfair), FUTURE (hopeless). CBT targets all three.",
      remembers: "The psychological theory underlying CBT for depression.",
    },
  ],

  /* ============================================================
     HIGH-YIELD SUMMARY — ONE-PAGE REVISION
     ============================================================ */
  highYieldSummary: [
    "Definition: ≥2 weeks of pervasive low mood or anhedonia, with at least 5 of 9 SIGECAPS symptoms, causing functional impairment — not attributable to substance/medical condition/mania.",
    "Epidemiology: ~300 million globally (leading cause of disability — WHO); ~57 million in India (NIMHANS NMHS). 2:1 female:male. Lifetime risk 10–15% global, ~9% India. Treatment gap ~85% in India.",
    "Etiology: genetic (heritability ~37%), biological (monoamine deficiency, HPA hyperactivity, low BDNF, inflammation), psychological (Beck's cognitive triad), social (isolation, poverty, trauma), environmental (childhood adversity).",
    "Pathophysiology: Monoamine hypothesis (5-HT/NE/DA deficiency), BDNF/neuroplasticity hypothesis (hippocampal volume loss), inflammatory hypothesis (CRP/IL-6/TNF-α elevated, IDO activation), HPA axis hypercortisolism, circuit-level (amygdala hyperactive, PFC hypoactive, subgenual cingulate hyperactive).",
    "Diagnosis: DSM-5 (5/9 for ≥2 weeks, must include mood or anhedonia). ICD-10 (≥2/3 core for ≥2 weeks, official in India). ICD-11 (essentially DSM-5).",
    "Severity scales: PHQ-9 (self-rated, 0–4 minimal → 20–27 severe; ≥10 = clinical; ≥50% reduction = response; <5 = remission; validated in Hindi and Indian languages). HAM-D 17 (clinician-rated; <8 normal, >23 very severe).",
    "Differential: ALWAYS exclude bipolar depression (MDQ screen); adjustment disorder; persistent depressive disorder (dysthymia, ≥2 years); medical mimics (hypothyroidism, B12 deficiency); substance-induced; bereavement.",
    "Stepwise management: (1) Lifestyle (exercise, sleep, diet) — mild. (2) Psychotherapy (CBT, IPT, BA) — mild-moderate. (3) SSRI (sertraline or escitalopram) — moderate-severe first-line. (4) SNRI/atypical — second-line. (5) Augmentation (bupropion, mirtazapine, lithium, T3) — partial response. (6) Brain stimulation (ECT, rTMS, ketamine) — severe/TRD.",
    "SSRI onset: 4–6 weeks for depression; 8–12 weeks for anxiety. Counsel: side effects come first (week 1–2), benefit later (week 4–6). Don't stop early.",
    "Sexual dysfunction is the #1 reason for SSRI discontinuation (30–50%). Ask directly at every follow-up. Add bupropion or switch.",
    "Continue treatment 6–12 months after remission for first episode; 2–3 years for second; indefinite for 3+. Premature discontinuation = relapse.",
    "ECT: severe/psychotic/catatonic/suicidal depression; ~80% response. Permitted under Mental Healthcare Act 2017 with anaesthesia + informed consent; unmodified ECT banned.",
    "Indian practice: IPS guidelines (SSRIs first-line); ICD-10 coding in government hospitals; DMHP in 700+ districts; Tele-MANAS 14416 (free, 24/7, 20 languages); Jan Aushadhi sertraline ₹2–5/tablet; PMJAY covers severe mental illness.",
    "Never stop antidepressant abruptly — taper 4+ weeks. Fluoxetine self-tapers — substitute for last 2 weeks of paroxetine/sertraline taper.",
    "ALWAYS assess suicide risk directly. Tele-MANAS 14416. Involve family in safety planning.",
  ],

  /* ============================================================
     CLINICAL CASES
     ============================================================ */
  clinicalCases: [
    {
      title: "First-episode depression in a 28-year-old Indian woman — classical presentation and SSRI response",
      presentation:
        "A 28-year-old software engineer presents with 8 weeks of low mood, anhedonia, early-morning awakening, 4 kg weight loss, and intrusive thoughts of being 'a failure' after a relationship breakdown.",
      history:
        "Priya, a 28-year-old software engineer based in Bengaluru, presents to her GP with 8 weeks of persistent low mood, loss of interest in activities she previously enjoyed (hiking, painting), early-morning awakening at 4 AM with inability to return to sleep, 4 kg unintentional weight loss, and intrusive negative thoughts about being 'a failure'. Symptoms began after her partner ended their 4-year relationship. She denies suicidal ideation but feels 'hopeless about the future'. No prior psychiatric history. No medical comorbidities. Sister has a history of depression treated with sertraline. Patient drinks alcohol 2–3 units/week, no recreational drugs, no regular medications. She works full-time but has taken 3 sick days in the past 2 weeks — previously zero in 2 years. Lives with parents in a joint family. Father reports she has stopped eating meals with the family and locks herself in her room.",
      examination:
        "Alert, oriented, cooperative. Speech normal rate and rhythm, slightly reduced volume. Mood '2/10', affect congruent and reactive but restricted range. No hallucinations or delusions. No thought disorder. Cognitively intact (MoCA 28/30). PHQ-9 score 17 (moderately severe). GAD-7 score 11 (moderate). MDQ negative (no prior manic symptoms). No thyroid enlargement, no neurological deficit. BMI 22. BP 118/74, HR 72. CBC, TSH, B12, vitamin D, LFT, RBS all within normal limits.",
      diagnosis:
        "Major Depressive Disorder, single episode, moderately severe, without psychotic features (DSM-5; ICD-10 F32.2). Differential: adjustment disorder with depressed mood (less likely given severity and neurovegetative symptoms); bipolar depression (MDQ negative — excluded); hypothyroidism-induced depression (TSH normal — excluded); vitamin B12 deficiency (B12 normal — excluded).",
      management:
        "Started sertraline 25 mg OD for 5 days (to minimise early activation), then increased to 50 mg OD morning with food. Referred for CBT (12 sessions, weekly). Plan: review at 2 weeks (tolerability + suicidality), 4 weeks (early response), 6 weeks (dose escalation if PHQ-9 reduction <30%), 12 weeks (full response assessment). Patient given PHQ-9 self-rating schedule and safety plan with crisis contacts (Tele-MANAS 14416, 112 emergency). Counseled: (1) expect side effects before benefit; (2) do not stop abruptly; (3) avoid alcohol; (4) watch for agitation or new suicidal thoughts in first month; (5) full effect takes 4–6 weeks; (6) family to monitor mood and report warning signs. Father engaged in safety planning. Jan Aushadhi sertraline (₹2/tablet) prescribed given cost considerations.",
      outcome:
        "Week 2: nausea and mild insomnia (tolerable, no suicidality, no manic switch). Week 4: sleep normalised, appetite returning, PHQ-9 12 (29% reduction — early response). Week 6: mood 5/10, PHQ-9 8 (53% reduction — treatment response). Dose maintained at 50 mg. CBT sessions ongoing (5 of 12 completed). Week 12: PHQ-9 4 (remission). Returned to hiking and painting. CBT completed. Plan: continue sertraline for 9 more months (12 months total from remission), then taper over 4–6 weeks. Family psychoeducation about early warning signs of relapse.",
      teachingPoints: [
        "PHQ-9 monitoring quantifies response — ≥50% reduction defines 'response', score <5 defines 'remission'.",
        "Family history of SSRI response is a reasonable (though not definitive) predictor — pharmacogenomic testing is not yet routine in India.",
        "Combining SSRI + CBT produces better long-term outcomes than either alone — especially for first-episode depression.",
        "The 6-week review point is critical: if PHQ-9 reduction is <30%, increase the dose; if <50% at 12 weeks, consider switching or augmenting.",
        "Continue treatment for 6–12 months AFTER remission for a first episode — stopping earlier dramatically increases relapse risk.",
        "Indian joint-family context: involve family in safety planning and monitoring. Father's engagement was critical to adherence.",
        "Jan Aushadhi generic sertraline is ₹2/tablet — affordable even for long-term therapy.",
      ],
    },
    {
      title: "Severe psychotic depression in a 62-year-old man — ECT as first-line",
      presentation:
        "A 62-year-old retired man is brought by family after 3 months of severe depression with psychotic features, refusal to eat, and somatic delusions that his 'bowels are rotting'.",
      history:
        "Mr. Sharma, a 62-year-old retired schoolteacher from Pune, is brought to the psychiatry OPD by his wife and son. For 3 months he has had progressively worsening low mood, profound anhedonia, insomnia (sleeps 1–2 hours/night), severe weight loss (12 kg in 3 months), and refusal to eat because he believes 'my bowels are rotting and any food will poison me'. He has stopped speaking for the past 5 days (mutism) and resists all attempts to feed him. He has guilty rumination about 'sins I committed as a teacher 30 years ago'. No prior psychiatric history. Hypertension on amlodipine 5 mg (well-controlled). No substance use. Family reports he has been talking about 'ending it' but has not made specific plans. Father died by suicide at age 65.",
      examination:
        "Alert but withdrawn, makes minimal eye contact. Speech: mute (writes single words when prompted). Psychomotor retardation marked (sits motionless for 30 minutes). Mood: severely depressed. Affect: flat, congruent. Thought content: nihilistic and somatic delusions ('bowels rotting'). No perceptual abnormality. Cognition difficult to assess due to mutism. PHQ-9 not assessable (mutism). HAM-D estimated 35 (very severe). BP 142/88, HR 78. CBC, TSH, B12, RFT, LFT, ECG all within normal limits. CT brain: mild age-related atrophy, no acute finding.",
      diagnosis:
        "Severe Major Depressive Disorder, single episode, with psychotic features (DSM-5; ICD-10 F32.3 — severe with psychotic symptoms). Differential: psychotic depression vs schizophrenia (psychosis is mood-congruent and occurred after mood symptoms — favours psychotic depression); organic psychosis (CT and labs normal — excluded); Lewy body dementia (no cognitive fluctuation or parkinsonism — unlikely).",
      management:
        "Admitted to psychiatry inpatient unit (high suicide risk, refusal to eat, psychotic features). Started on urgent ECT course (bilateral, 3 sessions/week × 8 sessions) under anaesthesia with informed consent (per Mental Healthcare Act 2017). Concurrent: olanzapine 5 mg OD (for psychotic features) and sertraline 25 mg OD (to be titrated to 50 mg after ECT course). IV fluids and nasogastric feeding for nutritional support. Tele-MANAS 14416 given to family for crisis support. Family psychoeducation about ECT (procedure, side effects — especially transient memory disturbance, efficacy). Suicidality monitored 1:1.",
      outcome:
        "After 3 ECT sessions: started speaking in short sentences, accepted oral feeds, somatic delusions diminished. After 6 sessions: PHQ-9 assessable at 18 (down from estimated 35). After 8 sessions: mood 6/10, eating normally, delusions resolved, HAM-D 12. Discharged on sertraline 50 mg OD + olanzapine 5 mg OD. Olanzapine to be tapered after 6 months of stability (psychotic depression typically requires 6–12 months of antipsychotic continuation). Sertraline to be continued for 12–24 months. Family psychoeducation about relapse warning signs. Outpatient ECT not required (full remission achieved).",
      teachingPoints: [
        "Psychotic depression is a PSYCHIATRIC EMERGENCY — high suicide risk, high mortality. Requires urgent admission and combination therapy (antidepressant + antipsychotic) or ECT.",
        "ECT is the most effective treatment for psychotic depression (~80% response rate, faster than medication). Indicated when: psychosis, catatonia, suicidality, refusal to eat/drink, treatment-resistant.",
        "Mental Healthcare Act 2017 (India): ECT permitted only under anaesthesia with informed consent. Unmodified ECT is BANNED. Document consent process carefully.",
        "Somatic delusions (e.g., 'bowels rotting', 'organs missing') are classic for psychotic depression — Cotard's syndrome is the extreme form (delusion of being dead or non-existent).",
        "Continue antipsychotic for 6–12 months after psychotic depression remission; antidepressant for 12–24 months (longer than non-psychotic MDD).",
        "Family history of completed suicide is a strong risk factor — always ask about family psychiatric history.",
      ],
    },
  ],

  /* ============================================================
     CLINICAL DECISION PATH
     ============================================================ */
  clinicalDecisionPath: {
    title: "Stepwise management of suspected Major Depressive Disorder",
    startNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Patient presents with suspected depression. First step?",
        branches: [
          { label: "Screen with PHQ-2", next: "phq2" },
        ],
      },
      {
        id: "phq2",
        question: "PHQ-2 result (2-item screen over past 2 weeks)",
        branches: [
          { label: "Score 0–2 (negative)", next: "not-depressed" },
          { label: "Score ≥3 (positive)", next: "phq9" },
        ],
      },
      {
        id: "phq9",
        question: "Confirm with PHQ-9 and assess severity",
        branches: [
          { label: "0–4 (minimal)", next: "not-depressed" },
          { label: "5–9 (mild)", next: "mild" },
          { label: "10–14 (moderate)", next: "moderate" },
          { label: "15–19 (moderately severe)", next: "moderate-severe" },
          { label: "20–27 (severe)", next: "severe" },
        ],
      },
      {
        id: "not-depressed",
        question: "PHQ-9 does not meet depression threshold",
        recommendation: "Reassure. Consider other explanations (grief, stress, anxiety, medical cause). Repeat PHQ-9 if symptoms persist. Provide lifestyle advice.",
        reasoning: "PHQ-9 <10 has high negative predictive value for MDD. Don't over-medicalise normal distress.",
      },
      {
        id: "mild",
        question: "Mild depression (PHQ-9 5–9)",
        recommendation: "Watchful waiting or psychotherapy first (CBT/IPT/Behavioural Activation, guided self-help, exercise). Consider SSRI if functional impairment or if no response after 2–4 weeks of psychotherapy.",
        reasoning: "NICE CG91: psychotherapy alone for subthreshold/mild depression. Avoid unnecessary pharmacotherapy. Indian context: yoga, pranayama, exercise are evidence-based adjuncts.",
        branches: [
          { label: "Functional impairment or persistent", next: "ssri-start" },
        ],
      },
      {
        id: "moderate",
        question: "Moderate depression (PHQ-9 10–14)",
        recommendation: "SSRI (sertraline 50 mg OD or escitalopram 10 mg OD) + psychotherapy (CBT). First-line per IPS, NICE CG91, APA.",
        reasoning: "Combined SSRI + CBT is first-line for moderate MDD. Counsel on 4–6 week onset. Monitor with PHQ-9 at 4/8/12 weeks.",
        branches: [
          { label: "Start SSRI", next: "ssri-start" },
        ],
      },
      {
        id: "moderate-severe",
        question: "Moderately severe depression (PHQ-9 15–19)",
        recommendation: "SSRI + psychotherapy (CBT). Consider psychiatry referral. Assess suicidality formally.",
        reasoning: "Higher severity warrants combined treatment. Lower threshold for psychiatry referral. Suicidality assessment is mandatory.",
        branches: [
          { label: "Start SSRI", next: "ssri-start" },
          { label: "Active suicidality", next: "suicidal" },
        ],
      },
      {
        id: "severe",
        question: "Severe depression (PHQ-9 20–27)",
        recommendation: "Urgent psychiatry referral. SSRI + psychotherapy. Assess suicidality and psychosis. Consider ECT if psychotic, catatonic, or actively suicidal.",
        reasoning: "Severe MDD may require inpatient care. ECT for severe/psychotic/catatonic/suicidal depression. Per Mental Healthcare Act 2017.",
        branches: [
          { label: "With psychotic features", next: "psychotic" },
          { label: "With active suicidality", next: "suicidal" },
          { label: "Without psychosis/suicidality", next: "ssri-start" },
        ],
      },
      {
        id: "psychotic",
        question: "Severe depression WITH psychotic features",
        recommendation: "Combination therapy: antidepressant (SSRI) + antipsychotic (olanzapine 5–10 mg, quetiapine 150–300 mg, aripiprazole 5–10 mg). OR ECT (most effective, fastest). Admit if high risk.",
        reasoning: "Psychotic depression = psychiatric emergency. SSRI alone is insufficient. ECT has ~80% response rate. Continue antipsychotic 6–12 months after remission.",
      },
      {
        id: "suicidal",
        question: "Severe depression WITH active suicidality",
        recommendation: "Psychiatric emergency. Assess directly; remove access to means. Do not send home alone — admit or supervised setting. Consider urgent ECT (rapid response). Start SSRI. Tele-MANAS 14416 for family. Involve family in safety planning.",
        reasoning: "Active suicidality = high imminent risk. ECT produces response within days (vs 4–6 weeks for SSRI). 1:1 observation inpatient. Document assessment and safety plan.",
      },
      {
        id: "ssri-start",
        question: "Starting an SSRI — what to do first",
        recommendation: "ALWAYS screen for bipolar disorder (MDQ) BEFORE prescribing any antidepressant. Check for MAOI use in past 14 days (absolute contraindication). Baseline PHQ-9. In elderly: check serum sodium. Counsel on 4–6 week onset, side effects, and adherence.",
        reasoning: "Missed bipolar + SSRI = manic switch (potentially disastrous). MAOI + SSRI = fatal serotonin syndrome. Black box warning: suicidality in <25 years — weekly monitoring first month.",
        branches: [
          { label: "Bipolar excluded, MAOI excluded", next: "ssri-prescribe" },
          { label: "Bipolar confirmed", next: "bipolar" },
        ],
      },
      {
        id: "bipolar",
        question: "Bipolar depression confirmed (MDQ positive)",
        recommendation: "Mood stabiliser first (lithium, quetiapine, lamotrigine, olanzapine, valproate). Antidepressant (SSRI) ONLY if mood stabiliser alone is insufficient — and always WITH mood stabiliser cover.",
        reasoning: "Antidepressant monotherapy in bipolar depression risks manic switch. Quetiapine and olanzapine-fluoxetine combination are FDA-approved for bipolar depression. Refer to psychiatry.",
      },
      {
        id: "ssri-prescribe",
        question: "Which SSRI to choose?",
        recommendation: "Sertraline (default — safe in pregnancy, σ1 agonism, mild CYP interactions) OR escitalopram (lowest CYP interactions). Alternatives by profile: pregnancy → sertraline; elderly → sertraline/escitalopram; comorbid pain → duloxetine; insomnia/weight loss → mirtazapine; fatigue/sexual dysfunction → bupropion.",
        reasoning: "Cipriani Lancet 2018 network meta-analysis: SSRIs have best efficacy/tolerability ratio. Sertraline and escitalopram are first-choice SSRIs in Indian practice.",
        branches: [
          { label: "Continue management", next: "followup" },
        ],
      },
      {
        id: "followup",
        question: "Follow-up schedule and dose escalation",
        recommendation: "Week 2 (tolerability + suicidality) → Week 4 (early response) → Week 6 (if PHQ-9 reduction <30%, increase dose) → Week 12 (if <50% reduction, augment or switch).",
        reasoning: "PHQ-9 monitoring quantifies response. ≥50% reduction = response. <5 = remission. Continue 6–12 months after remission for first episode; longer for recurrent.",
        branches: [
          { label: "Partial response at 12 weeks", next: "augmentation" },
          { label: "Remission achieved", next: "maintenance" },
        ],
      },
      {
        id: "augmentation",
        question: "Partial response to SSRI — augmentation options",
        recommendation: "First-line: bupropion XL 150 mg/day (especially for fatigue/anhedonia/sexual dysfunction) OR mirtazapine 15–30 mg at night (especially for insomnia). Second-line: lithium (level 0.6–0.8) — strongest evidence. Third-line: T3 25–50 mcg/day, atypical antipsychotic (aripiprazole 2–5 mg, quetiapine XR 150 mg).",
        reasoning: "Lithium has the strongest augmentation evidence (8 RCTs, NNT ~4). Bupropion and mirtazapine are more practical in low-resource Indian settings (no level monitoring required). Reassess diagnosis before declaring treatment-resistant.",
        branches: [
          { label: "Still no response after 2 augmentations", next: "trd" },
        ],
      },
      {
        id: "trd",
        question: "Treatment-resistant depression (failed ≥2 antidepressant trials)",
        recommendation: "Refer to psychiatry. Consider: (1) switch to SNRI/TCA/MAOI; (2) atypical antipsychotic augmentation; (3) ketamine/esketamine (rapid-acting, especially for suicidality); (4) rTMS (left DLPFC, 30–36 sessions); (5) ECT (most effective, especially for severe/psychotic/suicidal).",
        reasoning: "TRD = failure of ≥2 adequate antidepressant trials. Reassess diagnosis (bipolar? substance use? medical mimic?). Ketamine produces response within hours (vs 4–6 weeks for SSRIs) — useful for acute suicidality.",
      },
      {
        id: "maintenance",
        question: "Remission achieved (PHQ-9 <5) — maintenance plan",
        recommendation: "Continue antidepressant for 6–12 months after remission for first episode; 2–3 years for second episode; indefinite for 3+ episodes. Psychotherapy (CBT) reduces relapse risk. Lifestyle (exercise, sleep, social connection). Family psychoeducation about early warning signs.",
        reasoning: "Premature discontinuation = relapse. Recurrence rates: ~50% after 1 episode, ~70% after 2, ~90% after 3. Always taper over 4+ weeks when discontinuing — never stop abruptly.",
      },
    ],
  },

  /* ============================================================
     COMMON MISTAKES
     ============================================================ */
  commonMistakes: [
    {
      mistake: "Not screening for bipolar disorder before starting an antidepressant",
      why: "SSRI monotherapy in undiagnosed bipolar depression can trigger a manic switch — potentially disastrous (suicide, hospitalisation, relationship/financial harm). Bipolar is missed in ~40% of cases initially diagnosed as unipolar MDD.",
      correction: "ALWAYS screen with MDQ (Mood Disorder Questionnaire) before initiating any antidepressant. Ask specifically about prior periods of elevated mood, reduced sleep need, racing thoughts, and impulsive behaviour. If MDQ positive, refer to psychiatry for mood stabiliser assessment before SSRI.",
    },
    {
      mistake: "Stopping the antidepressant at 2 weeks because 'it's not working'",
      why: "SSRIs take 4–6 weeks for full antidepressant effect. Stopping at 2 weeks means stopping before the drug has had a chance to work. Patients interpret lack of early benefit as 'this drug doesn't work for me'.",
      correction: "Counsel explicitly at initiation: 'Side effects come first (week 1–2), mood benefit comes later (week 4–6). Don't stop early — wait.' Schedule follow-up at 4 weeks to reassess response.",
    },
    {
      mistake: "Abrupt discontinuation when the patient feels better",
      why: "Sudden cessation after ≥4 weeks of use causes discontinuation syndrome — dizziness, 'brain zaps', nausea, irritability, insomnia. Can start within 24 hours of missed dose. Worst with paroxetine (shortest half-life).",
      correction: "ALWAYS taper over 4+ weeks. If severe, substitute fluoxetine (long half-life) for last 2 weeks of paroxetine/sertraline taper — fluoxetine self-tapers.",
    },
    {
      mistake: "Stopping treatment too early after remission",
      why: "Stopping within 4 months of remission has a ~40% relapse rate; continuing for 12 months has <10% relapse. Premature discontinuation is the most common cause of relapse in MDD.",
      correction: "Continue treatment for 6–12 months after remission for first episode; 2–3 years for second; indefinite for 3+. Patient and family education about maintenance therapy is critical.",
    },
    {
      mistake: "Not asking about sexual dysfunction",
      why: "Sexual dysfunction affects 30–50% of patients on SSRIs and is the #1 reason for non-adherence. Patients rarely volunteer it — they simply stop the medication.",
      correction: "Ask directly at every follow-up: 'Any changes in sexual interest or function?' If present: dose reduction, add bupropion XL 150 mg, switch to bupropion or mirtazapine. Sildenafil for erectile component.",
    },
    {
      mistake: "Under-dosing and not titrating",
      why: "Starting at 50 mg and never titrating means the patient may never reach therapeutic dose. Many patients need 100–200 mg for full response. OCD often requires 150–200 mg.",
      correction: "Start at 50 mg (25 mg in anxious/elderly), titrate by 50 mg every 2–4 weeks. Target: 100–200 mg for depression, up to 200 mg for OCD. Use PHQ-9 to guide titration.",
    },
    {
      mistake: "Not checking sodium in elderly",
      why: "SSRIs cause SIADH in ~0.5–1% of patients. Risk highest in elderly females in first 2 weeks. Can cause confusion, seizures, and death if severe.",
      correction: "Check serum sodium at baseline in elderly patients starting SSRIs. Recheck within 2 weeks if symptomatic (confusion, headache, lethargy). Use mirtazapine or ECT if elderly develops hyponatraemia on SSRI.",
    },
    {
      mistake: "Not warning about NSAID bleeding risk",
      why: "SSRIs deplete platelet serotonin → impaired clotting. Combined with NSAIDs → 6× increased risk of upper GI bleed. Patients take ibuprofen for SSRI-induced headache — creating a vicious cycle.",
      correction: "Counsel: use paracetamol instead of ibuprofen/diclofenac. If NSAIDs are necessary, add PPI for gastroprotection.",
    },
    {
      mistake: "Not involving family in Indian context",
      why: "In Indian joint-family culture, family mediates help-seeking, monitors mood, ensures medication adherence, and provides crisis support. Not involving them is a missed opportunity — and patients are more likely to discontinue medication if family is not engaged.",
      correction: "Family psychoeducation is critical in Indian practice. Involve a family member in counselling sessions. Provide Tele-MANAS 14416 number to family. Engage family in safety planning if suicidality is present.",
    },
    {
      mistake: "Not assessing suicide risk directly",
      why: "Avoiding the question does NOT reduce risk. Patients are often relieved when asked directly. Failure to assess and document suicidality is a common pitfall in medicolegal cases.",
      correction: "Ask directly: 'Have you had thoughts of death or suicide? Have you made any plans?' Assess protective factors (family, religious/moral objections, future plans). Document assessment. Provide Tele-MANAS 14416. Involve family in safety planning.",
    },
    {
      mistake: "Not excluding medical mimics",
      why: "Hypothyroidism, B12 deficiency, anaemia, vitamin D deficiency, chronic infection, brain tumour, Parkinson's disease, and multiple sclerosis can all present with depression-like symptoms. Treating with SSRIs without excluding medical mimics delays diagnosis of the underlying condition.",
      correction: "Always perform medical workup at first presentation: CBC, TSH, B12, vitamin D, LFT, RBS, and (in elderly or atypical presentation) CT brain. Especially important in: new-onset depression after age 50, treatment-resistant depression, atypical symptoms (cognitive decline, neurological signs, weight loss without mood symptoms).",
    },
    {
      mistake: "Using SSRIs in bipolar depression without mood stabiliser cover",
      why: "SSRI monotherapy in bipolar depression can trigger a manic switch — potentially with disastrous consequences (suicide, hospitalisation, financial/relationship harm).",
      correction: "Always screen for bipolar disorder (MDQ) before initiating any antidepressant. If bipolar confirmed, use mood stabiliser first (lithium, quetiapine, lamotrigine, olanzapine, valproate). Antidepressant (SSRI) ONLY if mood stabiliser alone is insufficient — and always WITH mood stabiliser cover.",
    },
  ],

  /* ============================================================
     WARD PEARLS — HIERARCHICAL TEACHING
     ============================================================ */
  wardPearls: {
    professorMayAsk: [
      "What are the DSM-5 diagnostic criteria for MDD? (5+ of 9 symptoms for ≥2 weeks; must include depressed mood or anhedonia; mnemonic SIGECAPS.)",
      "Differentiate MDD from bipolar depression. How do you screen? (Bipolar requires prior manic/hypomanic episode; screen with MDQ before starting any antidepressant — to avoid manic switch.)",
      "What is the pathophysiology of MDD? Explain the monoamine, BDNF, and inflammatory hypotheses. (Monoamine deficiency → BDNF reduction → hippocampal atrophy; inflammatory activation of IDO shunts tryptophan to kynurenine; HPA hypercortisolism damages hippocampus — vicious cycle.)",
      "What is the first-line pharmacotherapy for MDD? (SSRI — sertraline or escitalopram. Cipriani Lancet 2018 network meta-analysis confirmed best efficacy/tolerability ratio.)",
      "When do you choose ECT in MDD? (Severe with psychosis, catatonia, active suicidality, refusal to eat/drink, treatment-resistant, pregnancy where medications limited. ~80% response rate.)",
      "What is the difference between DSM-5 and ICD-10 criteria? (DSM-5 = 5 of 9 symptoms; ICD-10 = 2 of 3 core symptoms. ICD-10 is the official coding system in India.)",
      "How do you interpret PHQ-9? (0–4 minimal, 5–9 mild, 10–14 moderate, 15–19 moderately severe, 20–27 severe. ≥10 = clinical depression; ≥50% reduction = response; <5 = remission.)",
      "What is the maintenance therapy duration after first episode of MDD? (6–12 months after remission. Recurrence rates: ~50% after 1, ~70% after 2, ~90% after 3 — justify longer therapy in recurrent MDD.)",
    ],
    residentExpects: [
      "Know DSM-5 and ICD-10 criteria for MDD and be able to apply them in clinical practice.",
      "Know the stepwise management: lifestyle → psychotherapy → SSRI → augmentation → brain stimulation.",
      "Know how to interpret PHQ-9 and HAM-D scores for severity and treatment response.",
      "Know SSRI onset (4–6 weeks), side-effect profile (sexual dysfunction, SIADH, serotonin syndrome, discontinuation), and monitoring schedule.",
      "Know augmentation strategies: bupropion XL 150 mg, mirtazapine 15–30 mg, lithium (level 0.6–0.8), T3, atypical antipsychotic.",
      "Know ECT indications, procedure (modified under anaesthesia per Mental Healthcare Act 2017), and contraindications.",
      "Know how to assess suicide risk directly and document it. Always involve family in safety planning.",
      "Know Indian practice: IPS guidelines, DMHP, Tele-MANAS 14416, Jan Aushadhi generics, cost considerations.",
      "Know when to refer to psychiatry: PHQ-9 ≥20, suicidality, psychotic features, treatment-resistant, diagnostic uncertainty, bipolar suspicion.",
    ],
    consultantsDo: [
      "Use PHQ-9 at every visit for objective severity monitoring — and item-9 (suicidal thoughts) is always reviewed.",
      "Screen for bipolar disorder (MDQ) before starting any antidepressant — even in apparent unipolar MDD.",
      "Combine SSRI + CBT for moderate-severe MDD — better long-term outcomes than either alone.",
      "Ask about sexual dysfunction at every follow-up (patients rarely volunteer).",
      "Continue treatment 6–12 months after remission for first episode; 2–3 years for second; indefinite for 3+.",
      "Use sertraline as default SSRI in pregnancy and lactation; escitalopram for low CYP interaction profile.",
      "Use bupropion XL 150 mg as first-line augmentation for SSRI partial response.",
      "Consider ECT early in severe/psychotic/catatonic/suicidal depression — don't wait for multiple drug failures.",
      "Always involve family in Indian practice — psychoeducation, monitoring, and safety planning.",
      "Provide Tele-MANAS 14416 to every patient and family at first visit.",
      "Consider cost — Jan Aushadhi generic sertraline ₹2–5/tablet; involves family in adherence support.",
    ],
    internsMiss: [
      "Forgetting to screen for bipolar (MDQ) before starting an SSRI — leads to manic switch.",
      "Not counselling about 4–6 week onset — patient stops early.",
      "Not warning about NSAID bleeding risk — patient takes ibuprofen for SSRI headache.",
      "Not asking about sexual dysfunction — patient stops silently.",
      "Not checking sodium in elderly — presents with confusion 2 weeks later.",
      "Not assessing suicide risk directly — medicolegal pitfall.",
      "Not involving family (critical in Indian joint-family context).",
      "Stopping abruptly when patient feels better — discontinuation syndrome.",
      "Not excluding medical mimics (hypothyroidism, B12 deficiency, anaemia) before psychiatric diagnosis.",
      "Not providing Tele-MANAS 14416 number for crisis support.",
      "Under-dosing and not titrating SSRI — patient never reaches therapeutic dose.",
      "Not referring to psychiatry for PHQ-9 ≥20, suicidality, psychotic features, or treatment-resistant depression.",
    ],
  },

  /* ============================================================
     DRUG FAMILY NAVIGATION
     ============================================================ */
  drugFamilyNav: {
    familyName: "Antidepressants used in Major Depressive Disorder",
    members: [
      { name: "Sertraline", slug: "sertraline", relationship: "First-line SSRI", distinguishing: "SSRI of choice in pregnancy/lactation; 6 FDA indications; σ1 agonism; mild CYP2D6; ₹2–5/tablet Jan Aushadhi" },
      { name: "Escitalopram", slug: "escitalopram", relationship: "First-line SSRI", distinguishing: "S-enantiomer of citalopram; lowest CYP interaction profile; QTc watch at >20 mg" },
      { name: "Fluoxetine", slug: "fluoxetine", relationship: "First-line SSRI (activating)", distinguishing: "Longest half-life (1–4 days); mildest discontinuation; only SSRI for paediatric MDD ≥8 yr" },
      { name: "Venlafaxine", slug: "venlafaxine", relationship: "Second-line SNRI", distinguishing: "Dose-dependent SERT/NET; >150 mg adds noradrenergic; watch BP at high doses" },
      { name: "Duloxetine", slug: "duloxetine", relationship: "First-line SNRI when pain comorbid", distinguishing: "Balanced SERT/NET; first-choice for comorbid diabetic neuropathy, fibromyalgia, chronic pain" },
      { name: "Bupropion", slug: "bupropion", relationship: "Atypical / Augmentation", distinguishing: "NDRI; reverses SSRI sexual dysfunction; avoids in seizure/eating disorder" },
      { name: "Mirtazapine", slug: "mirtazapine", relationship: "Atypical — when insomnia/weight loss", distinguishing: "NaSSA; sedating via H1; appetite-stimulating; ideal for cancer/geriatric depression with cachexia" },
      { name: "Amitriptyline", slug: "amitriptyline", relationship: "TCA — severe/TRD/pain", distinguishing: "Equally efficacious as SSRIs but more side effects; lethal in overdose; cheapest antidepressant in India (₹1–3)" },
    ],
  },

  /* ============================================================
     LEARNING TIME BREAKDOWN
     ============================================================ */
  learningTimeBreakdown: {
    read: "22 min",
    study: "55 min",
    revision: "10 min",
  },

  /* ============================================================
     EDUCATIONAL UX — MICRO QUIZZES, ACTIVE RECALL, LEARNING PATHS, LESSONS
     ============================================================ */

  microQuizzes: [
    {
      id: "quiz-epidemiology",
      question: "Approximately how many people in India are affected by depression, per the NIMHANS National Mental Health Survey (2015–16)?",
      options: ["~5 million", "~15 million", "~57 million", "~150 million"],
      correctIndex: 2,
      explanation: "~57 million. The NIMHANS National Mental Health Survey (2015–16) surveyed 12 states and ~34,000 individuals — the largest representative Indian mental-health dataset to date. Globally, ~300 million people are affected (WHO). The treatment gap in India is ~85% — most people with depression never receive evidence-based care.",
      afterSectionId: "epidemiology",
    },
    {
      id: "quiz-pathophysiology",
      question: "Which three converging hypotheses best explain the modern understanding of MDD pathophysiology?",
      options: [
        "Monoamine deficiency, BDNF/neuroplasticity, inflammatory",
        "Dopamine excess, serotonin deficiency, GABA excess",
        "Glutamate deficiency, acetylcholine excess, histamine deficiency",
        "Cortisol deficiency, BDNF excess, neurogenesis acceleration",
      ],
      correctIndex: 0,
      explanation: "Modern pathophysiology of MDD emphasises: (1) Monoamine hypothesis (5-HT/NE/DA deficiency — explains SSRI efficacy); (2) BDNF/neuroplasticity hypothesis (low BDNF → hippocampal atrophy; all antidepressants converge on BDNF upregulation — explains 4–6 week onset); (3) Inflammatory hypothesis (elevated CRP/IL-6/TNF-α; IDO activation — explains treatment-resistant depression with chronic inflammation). HPA axis hypercortisolism is also central.",
      afterSectionId: "pathophysiology",
    },
    {
      id: "quiz-diagnosis",
      question: "Per DSM-5, how many symptoms are required for MDD diagnosis, and for how long must they persist?",
      options: [
        "3 of 9 symptoms for 1 week",
        "5 of 9 symptoms for 2 weeks (must include depressed mood or anhedonia)",
        "5 of 9 symptoms for 4 weeks",
        "7 of 9 symptoms for 2 weeks",
      ],
      correctIndex: 1,
      explanation: "DSM-5 requires 5+ of 9 symptoms (SIGECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality + depressed Mood) for ≥2 weeks. MUST include either depressed mood or anhedonia. Symptoms must cause functional impairment. ICD-10 is less stringent — requires only 2 of 3 core symptoms for ≥2 weeks.",
      afterSectionId: "diagnostic-criteria",
    },
    {
      id: "quiz-management",
      question: "What is the FIRST-LINE pharmacotherapy for moderate-severe Major Depressive Disorder?",
      options: [
        "Tricyclic antidepressant (amitriptyline)",
        "MAOI (phenelzine)",
        "SSRI (sertraline or escitalopram)",
        "Benzodiazepine (clonazepam)",
      ],
      correctIndex: 2,
      explanation: "SSRIs (sertraline or escitalopram) are first-line for moderate-severe MDD — per IPS, NICE CG91, and APA guidelines. The Cipriani Lancet 2018 network meta-analysis confirmed SSRIs have the best efficacy/tolerability ratio of 21 antidepressants. TCAs are equally efficacious but more side effects and lethal in overdose. MAOIs are reserved for treatment-resistant cases. Benzodiazepines are NOT antidepressants — only for short-term anxiety/sleep.",
      afterSectionId: "management",
    },
    {
      id: "quiz-indian-practice",
      question: "What is the toll-free Tele-MANAS mental health helpline number in India?",
      options: ["108", "112", "14416", "1912"],
      correctIndex: 2,
      explanation: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416 or 1-800-891-4416 (toll-free, 24/7, 20 Indian languages including Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, Punjabi, Odia, Assamese, Urdu). Launched October 2022 by the Government of India. Provides free counselling, assessment, and referral. EVERY patient with MDD should be given this number. 108 is emergency ambulance; 112 is pan-India emergency number; 1912 is electricity.",
      afterSectionId: "indian-practice",
    },
    {
      id: "quiz-clinical-case",
      question: "A 28-year-old woman with first-episode MDD has PHQ-9 = 17. After 6 weeks of sertraline 50 mg, her PHQ-9 is 12. What is the next step?",
      options: [
        "Stop sertraline — it's not working",
        "Switch to a different antidepressant",
        "Increase sertraline dose to 100 mg and reassess at 12 weeks",
        "Add ECT immediately",
      ],
      correctIndex: 2,
      explanation: "PHQ-9 dropped from 17 to 12 = 29% reduction at 6 weeks — this is early response but below the 30% threshold. Standard step: increase sertraline dose to 100 mg and reassess at 12 weeks. If PHQ-9 reduction <50% at 12 weeks, consider augmentation (bupropion XL 150 mg or mirtazapine 15–30 mg) or switch. Don't stop or switch too early — partial response at 6 weeks is common.",
      afterSectionId: "clinical-case",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "What are the DSM-5 diagnostic criteria for Major Depressive Disorder? Name the SIGECAPS mnemonic.",
      answer: "5+ of 9 symptoms for ≥2 weeks, causing functional impairment, not attributable to substance/medical condition/mania. MUST include depressed mood or anhedonia. The 9 symptoms: SIGECAPS — Sleep (insomnia/hypersomnia), Interest (anhedonia), Guilt (worthlessness), Energy (fatigue), Concentration (poor), Appetite (change), Psychomotor (agitation/retardation), Suicidality, + depressed Mood.",
      topic: "Diagnosis",
    },
    {
      question: "What is the first-line pharmacotherapy for moderate-severe MDD? Name two first-choice SSRIs and explain why.",
      answer: "SSRIs are first-line (IPS, NICE CG91, APA). First-choice SSRIs: (1) Sertraline — SSRI of choice in pregnancy/lactation (lowest milk/plasma ratio ~0.5), 6 FDA indications (only SSRI for PTSD), σ1 agonism (anxiolytic), mild CYP2D6 inhibition (fewer interactions), affordable (₹2–5/tablet Jan Aushadhi). (2) Escitalopram — S-enantiomer of citalopram, lowest CYP interaction profile (preferred for polypharmacy patients).",
      topic: "Pharmacotherapy",
    },
    {
      question: "Why must you ALWAYS screen for bipolar disorder before starting any antidepressant? How do you screen?",
      answer: "SSRI monotherapy in undiagnosed bipolar depression can trigger a manic switch — potentially disastrous (suicide, hospitalisation, financial/relationship harm). Bipolar is missed in ~40% of cases initially diagnosed as unipolar MDD. Screen with MDQ (Mood Disorder Questionnaire) — sensitivity ~0.73, specificity ~0.90 in Indian validation. Ask about prior periods of elevated mood, reduced sleep need, racing thoughts, impulsive behaviour. If MDQ positive, refer to psychiatry for mood stabiliser assessment before SSRI.",
      topic: "Safety",
    },
    {
      question: "Interpret the following PHQ-9 scores and give the management recommendation: (a) 7, (b) 12, (c) 17, (d) 23.",
      answer: "(a) 7 = mild depression (5–9 band). Watchful waiting or psychotherapy (CBT/IPT/BA); consider SSRI if functional impairment. (b) 12 = moderate depression (10–14). Active treatment: SSRI (sertraline or escitalopram) + CBT. (c) 17 = moderately severe (15–19). Combined SSRI + psychotherapy; consider psychiatry referral. (d) 23 = severe (20–27). Urgent psychiatry referral. SSRI + psychotherapy. Assess suicidality — consider admission if active. ECT if psychotic/catatonic/suicidal. ≥50% reduction = response; <5 = remission.",
      topic: "Severity scales",
    },
    {
      question: "Describe the stepwise augmentation strategy for SSRI partial response in MDD.",
      answer: "After SSRI at adequate dose for 6–12 weeks with partial response (≥25% but <50% PHQ-9 reduction): (1) First-line: Bupropion XL 150 mg/day (especially for fatigue/anhedonia/sexual dysfunction) OR Mirtazapine 15–30 mg at night (especially for insomnia/poor appetite). (2) Second-line: Lithium augmentation (level 0.6–0.8) — strongest evidence base (8 RCTs, NNT ~4). (3) Third-line: T3 (liothyronine) 25–50 mcg/day; atypical antipsychotic (aripiprazole 2–5 mg, quetiapine XR 150 mg). Always reassess diagnosis (bipolar missed? substance use? medical mimic?) before declaring treatment-resistant.",
      topic: "Treatment-resistant depression",
    },
    {
      question: "List the indications for ECT in Major Depressive Disorder. What is the response rate and what does the Mental Healthcare Act 2017 say about ECT in India?",
      answer: "ECT indications in MDD: (1) Severe depression with psychotic features; (2) Catatonia; (3) Active suicidality requiring rapid response; (4) Refusal to eat/drink (life-threatening); (5) Treatment-resistant MDD (failed ≥2 antidepressant trials); (6) Pregnancy where medications are contraindicated; (7) Severe psychomotor retardation. Response rate ~80% in severe depression — faster and more effective than any medication. Mental Healthcare Act 2017 (India): ECT permitted ONLY under anaesthesia with informed consent. Unmodified ECT (without anaesthesia) is BANNED. Document consent process carefully.",
      topic: "Brain stimulation",
    },
  ],

  /* Guided learning paths — each mode shows a curated subset of sections */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient / Family",
      estimatedTime: "5 min",
      description: "Plain language. What depression is, how it's treated, and where to get help in India.",
      visibleSections: ["top", "summary", "patient-education", "indian-resources", "faq", "emergency"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "20 min",
      description: "Foundations, diagnostic criteria, severity scales, management, and MBBS exam content.",
      visibleSections: ["top", "summary", "learning-objectives", "knowledge-graph", "epidemiology", "etiology", "pathophysiology", "symptoms", "diagnostic-criteria", "severity-scales", "differential-diagnosis", "management", "drugs", "patient-education", "clinical-pearls", "high-yield-summary", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full clinical detail with exam-specific content, PYQs, clinical decision path, and cases.",
      visibleSections: ["top", "summary", "learning-objectives", "knowledge-graph", "epidemiology", "etiology", "pathophysiology", "symptoms", "diagnostic-criteria", "severity-scales", "differential-diagnosis", "management", "drugs", "indian-practice", "patient-education", "clinical-pearls", "clinical-case", "decision-path", "common-mistakes", "exam-lens", "high-yield-summary", "faq", "active-recall"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — advanced reasoning, ward pearls, drug family, evidence sources.",
      visibleSections: ["top", "summary", "learning-objectives", "knowledge-graph", "epidemiology", "etiology", "pathophysiology", "symptoms", "diagnostic-criteria", "severity-scales", "differential-diagnosis", "management", "drugs", "indian-practice", "patient-education", "clinical-pearls", "clinical-case", "decision-path", "common-mistakes", "ward-pearls", "drug-navigation", "exam-lens", "high-yield-summary", "faq", "active-recall", "references"],
    },
  ],

  /* Lesson grouping — sections organised into learning units */
  lessonGroups: [
    {
      number: 1,
      title: "Foundations",
      description: "What is MDD? Why does it matter? How common is it?",
      sectionIds: ["top", "summary", "learning-objectives", "knowledge-graph", "epidemiology"],
      checkpoint: "You now know what MDD is, its global and Indian epidemiology, and how it connects to the broader neuroscience of depression.",
    },
    {
      number: 2,
      title: "Pathophysiology & Etiology",
      description: "Why does depression happen? What's going on in the brain?",
      sectionIds: ["etiology", "pathophysiology"],
      checkpoint: "You understand the multifactorial etiology and the three converging pathophysiology hypotheses — monoamine, BDNF/neuroplasticity, and inflammatory — plus HPA axis and circuit-level changes.",
    },
    {
      number: 3,
      title: "Clinical Assessment",
      description: "How do you diagnose depression? What else could it be?",
      sectionIds: ["symptoms", "diagnostic-criteria", "severity-scales", "differential-diagnosis"],
      checkpoint: "You can apply DSM-5/ICD-10 criteria, interpret PHQ-9 and HAM-D scores, and differentiate MDD from bipolar depression, adjustment disorder, dysthymia, medical mimics, and bereavement.",
    },
    {
      number: 4,
      title: "Management",
      description: "How do you treat depression? Which drug? When to escalate?",
      sectionIds: ["management", "drugs", "indian-practice"],
      checkpoint: "You can construct a stepwise management plan — lifestyle → psychotherapy → SSRI → augmentation → brain stimulation — and choose the right antidepressant for the right patient in Indian context.",
    },
    {
      number: 5,
      title: "Clinical Reasoning",
      description: "Work through real cases. Avoid common mistakes.",
      sectionIds: ["clinical-case", "decision-path", "common-mistakes", "ward-pearls"],
      checkpoint: "You've worked through clinical cases, navigated the decision tree, and learned the common mistakes interns make — and how consultants avoid them.",
    },
    {
      number: 6,
      title: "Revision & Recall",
      description: "Exam lens, high-yield summary, active recall, FAQ, and references.",
      sectionIds: ["exam-lens", "high-yield-summary", "memory-tricks", "faq", "active-recall", "references"],
      checkpoint: "If you could answer all active recall questions and reproduce the high-yield summary, you have exam-level mastery of Major Depressive Disorder.",
    },
  ],

  /* ============================================================
     KNOWLEDGE GRAPH
     ============================================================ */
  knowledgeGraph: [
    { label: "Major Depressive Disorder", type: "condition", href: "#top", note: "The disease you're reading about" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#pathophysiology", note: "Central to the monoamine hypothesis" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#pathophysiology", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#pathophysiology", note: "Hypoactive in MDD — impaired top-down regulation" },
    { label: "Hippocampus", type: "brain-region", href: "#pathophysiology", note: "5–10% volume loss in recurrent MDD; BDNF-mediated neurogenesis" },
    { label: "Amygdala", type: "brain-region", href: "#pathophysiology", note: "Hyperactive — heightened threat reactivity" },
    { label: "BDNF", type: "neurotransmitter", href: "#pathophysiology", note: "Reduced in depression; restored by all antidepressants" },
    { label: "HPA Axis", type: "pathway", href: "#pathophysiology", note: "Hyperactive — cortisol elevation in ~50% of MDD" },
    { label: "SSRIs", type: "class", href: "#management", note: "First-line pharmacotherapy for MDD" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline", note: "Default first-choice SSRI — safe in pregnancy, σ1 agonism, ₹2–5/tablet" },
    { label: "CBT (Cognitive Behavioural Therapy)", type: "drug", href: "#management", note: "Most evidence-based psychotherapy for MDD" },
    { label: "PHQ-9", type: "drug", href: "#severity-scales", note: "Self-rated severity scale — diagnosis AND monitoring" },
    { label: "Bipolar Depression", type: "condition", href: "#differential-diagnosis", note: "ALWAYS exclude before starting antidepressant — MDQ screen" },
    { label: "ECT", type: "drug", href: "#management", note: "Severe/psychotic/catatonic/suicidal MDD — ~80% response" },
    { label: "Tele-MANAS", type: "patient-guide", href: "tel:14416", note: "National Tele-Mental Health Helpline — 14416 (free, 24/7, 20 Indian languages)" },
  ],

  /* ============================================================
     CBME MAPPING
     ============================================================ */
  cbmeMapping: {
    subject: "Psychiatry",
    mbbsYear: "Final Professional (Phase III)",
    topic: "Mood Disorders — Major Depressive Disorder: Diagnosis and Management",
    competencyCodes: ["PY3.2", "PY3.1", "PH7.3", "PH7.4"],
    competencyDescriptions: [
      "PY3.2 (Psychiatry, Final Professional): Describe the clinical features, diagnostic criteria (DSM-5/ICD-10), differential diagnosis, and stepwise management of mood disorders, including major depressive disorder.",
      "PY3.1 (Psychiatry, Final Professional): Perform a comprehensive psychiatric assessment including mental status examination, suicide risk assessment, and screening for bipolar disorder.",
      "PH7.3 (Pharmacology, Second Professional): Describe the mechanism of action, pharmacological actions, adverse effects, contraindications, and therapeutic uses of antidepressant drugs (SSRIs, SNRIs, TCAs, atypicals).",
      "PH7.4 (Pharmacology, Second Professional): Explain the rationale for drug selection, dose individualisation, and monitoring of antidepressant therapy in different clinical scenarios (pregnancy, elderly, comorbid pain, cardiac disease).",
    ],
    integrationSubjects: ["Psychiatry", "Pharmacology", "General Medicine", "Community Medicine", "Forensic Medicine (Mental Healthcare Act 2017)"],
  },

  /* Section difficulty mapping */
  sectionDifficulty: {
    "top": "mbbs",
    "summary": "mbbs",
    "learning-objectives": "mbbs",
    "knowledge-graph": "pg",
    "epidemiology": "mbbs",
    "etiology": "pg",
    "pathophysiology": "pg",
    "symptoms": "mbbs",
    "diagnostic-criteria": "mbbs",
    "severity-scales": "mbbs",
    "differential-diagnosis": "pg",
    "management": "mbbs",
    "drugs": "pg",
    "indian-practice": "mbbs",
    "patient-education": "mbbs",
    "clinical-pearls": "pg",
    "clinical-case": "pg",
    "decision-path": "resident",
    "common-mistakes": "pg",
    "ward-pearls": "resident",
    "drug-navigation": "pg",
    "exam-lens": "mbbs",
    "high-yield-summary": "mbbs",
    "memory-tricks": "mbbs",
    "faq": "mbbs",
    "references": "resident",
  },

  /* ============================================================
     TIMELINE — TYPICAL DEPRESSIVE EPISODE JOURNEY
     ============================================================ */
  timeline: [
    {
      id: "t1",
      time: "Weeks to months before presentation",
      title: "Onset of symptoms",
      description:
        "Insidious onset of low mood, anhedonia, sleep disturbance, and fatigue. Often attributed to 'stress' or 'work pressure'. Family may notice withdrawal or irritability before patient recognises problem. Indian context: family may consult a general physician or faith healer before psychiatry.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Presentation to clinician",
      title: "Help-seeking and first assessment",
      description:
        "Patient or family seeks help after functional impairment, suicidal thoughts, or physical symptoms (sleep, appetite, weight). GP or psychiatrist performs: (1) clinical interview; (2) PHQ-9 for severity; (3) MDQ for bipolar screen; (4) suicide risk assessment; (5) baseline labs (CBC, TSH, B12, vitamin D) to exclude medical mimics.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Day 0",
      title: "Diagnosis and treatment initiation",
      description:
        "Diagnosis confirmed using DSM-5 or ICD-10 criteria. Treatment plan: lifestyle + psychotherapy ± SSRI. First-line SSRI: sertraline 25–50 mg OD or escitalopram 10 mg OD. Counselling: 4–6 week onset, side effects, adherence, family involvement. Tele-MANAS 14416 provided. Follow-up at 2/4/6/12 weeks scheduled.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 1–2",
      title: "Side-effect phase",
      description:
        "Acute SSRI side effects emerge: nausea, headache, sleep changes, mild activation/anxiety. Mood has not yet improved. THIS IS THE CRITICAL COUNSELLING WINDOW — patient is most likely to discontinue here. Weekly monitoring (especially if <25 years — black box warning for suicidality). Indian context: family support critical for adherence.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 2–4",
      title: "Early response — sleep, appetite, energy improve first",
      description:
        "5-HT1A autoreceptor desensitisation occurs in raphe nuclei; serotonergic throughput to prefrontal cortex increases. Sleep architecture normalises, appetite returns, energy improves. Mood is usually still low. PHQ-9 should start to drop. Sexual dysfunction often emerges here (if it's going to occur).",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "BDNF-mediated neuroadaptive changes mature; full antidepressant effect emerges. PHQ-9 should drop by ≥30% by week 6. If <30% reduction → increase SSRI dose. If sexual dysfunction persists → add bupropion XL 150 mg. CBT sessions (if concurrent) typically at session 4–6 of 12.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Months 6–12",
      title: "Maintenance and relapse prevention",
      description:
        "PHQ-9 should be <5 (remission) by month 3–6. Continue SSRI for 6–12 months AFTER remission for first episode (longer for recurrent). Continue or taper CBT (booster sessions). Lifestyle (exercise, sleep, social connection). Family psychoeducation about early warning signs of relapse. When discontinuing: taper over 4+ weeks; substitute fluoxetine for last 2 weeks of paroxetine/sertraline taper.",
      phase: "recovery",
    },
  ],

  /* ============================================================
     FAQ
     ============================================================ */
  faqs: [
    {
      question: "What is the difference between feeling sad and having depression?",
      answer:
        "Sadness is a normal human emotion that everyone experiences — usually in response to a specific event, and it passes with time. Depression is a medical illness characterised by persistent low mood or loss of interest (for at least 2 weeks) that interferes with daily life, sleep, appetite, energy, concentration, and self-worth. The key differences: duration (≥2 weeks), pervasiveness (most of the day, most days), impairment (work, relationships, self-care), and associated symptoms (sleep, appetite, energy, concentration, suicidal thoughts). If you're unsure, take the PHQ-9 self-test and discuss with a clinician.",
    },
    {
      question: "Is depression a 'real' illness or just weakness?",
      answer:
        "Depression is a real medical illness with measurable biological changes in the brain — including altered neurotransmitter function (serotonin, norepinephrine, dopamine), reduced BDNF (brain-derived neurotrophic factor), hippocampal volume loss, HPA axis dysregulation, and inflammatory changes. It is the leading cause of disability worldwide (WHO). Calling it 'weakness' is like calling diabetes 'weakness' — it misunderstands the biology. With appropriate treatment, 60–70% of patients achieve response and 30–40% achieve remission.",
    },
    {
      question: "How long does it take for antidepressants to work?",
      answer:
        "SSRIs (the most commonly prescribed antidepressants) take 4–6 weeks for full antidepressant effect in depression. For anxiety disorders, PTSD, and OCD, full effect may take 8–12 weeks. Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, but mood improvement comes later. This is the single most important counselling point — many patients stop at 2 weeks thinking the drug 'isn't working', when in fact it hasn't had time to work yet.",
    },
    {
      question: "Can I stop the antidepressant once I feel better?",
      answer:
        "Not usually. For a first depressive episode, treatment should continue for 6–12 months AFTER you feel better — stopping earlier significantly increases relapse risk (~40% relapse if stopped at 4 months vs <10% if continued for 12 months). For recurrent episodes (2+), longer-term (2–3 years or indefinite) treatment may be recommended. Always discuss timing with your clinician before stopping, and NEVER stop abruptly — taper over 4+ weeks to avoid discontinuation syndrome.",
    },
    {
      question: "Will antidepressants affect my sex life?",
      answer:
        "Possibly. Sexual side effects — decreased libido, delayed orgasm, anorgasmia, erectile dysfunction — affect 30–50% of people on SSRIs and are the most common reason people stop them. These are usually reversible on discontinuation, but in a small subset of patients they may persist (PSSD). If this bothers you, talk to your clinician — adding bupropion XL 150 mg, dose reduction, or switching to bupropion or mirtazapine often helps. Don't stop silently — there are solutions.",
    },
    {
      question: "What should I do if I have thoughts of suicide?",
      answer:
        "Seek help IMMEDIATELY. Thoughts of suicide are a symptom of depression — not a personal failing, and they will pass with treatment. In India: call Tele-MANAS at 14416 (toll-free, 24/7, 20 Indian languages). In an emergency, call 112 (pan-India emergency number) or go to the nearest hospital emergency department. Other helplines: iCall 9152987821, AASRA 9820466726, Vandrevala Foundation 1860-2662-345. Remove access to means (medications, sharp objects). Tell someone you trust — family, friend, or doctor. Don't keep suicidal thoughts secret.",
    },
    {
      question: "Can depression be treated without medication?",
      answer:
        "Yes — for mild depression (PHQ-9 5–9), psychotherapy (CBT, IPT, Behavioural Activation) and lifestyle changes (exercise, sleep hygiene, social connection) are first-line, and may be sufficient. For moderate-severe depression (PHQ-9 ≥10), combined medication + psychotherapy is recommended — outcomes are better than either alone. For severe/psychotic/suicidal depression, medication (and possibly ECT) is essential. NEVER stop prescribed medication without discussing with your clinician — even if you're feeling better.",
    },
    {
      question: "Can I drink alcohol while taking antidepressants?",
      answer:
        "Alcohol can worsen depression, interfere with sleep, increase sedation, and reduce the effectiveness of antidepressants. While not strictly contraindicated with SSRIs, it's best minimised or avoided — particularly during the first month while your body is adapting. Alcohol is dangerous with TCAs (cardiotoxicity, fatal overdose), MAOIs (hypertensive crisis with tyramine), and benzodiazepines (respiratory depression). Always discuss alcohol use with your clinician.",
    },
    {
      question: "I'm pregnant and have depression. What should I do?",
      answer:
        "Don't stop any antidepressant abruptly — first discuss with your obstetrician and psychiatrist. Untreated maternal depression carries significant risks to mother and baby (preterm birth, low birth weight, poor bonding, suicidality). Sertraline is the SSRI of choice in pregnancy — lowest placental transfer, longest safety track record. Avoid paroxetine (1st-trimester cardiac defects — former Category D). Third-trimester: watch for neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding — usually self-limited). ECT is safe in pregnancy if medication is insufficient. Counsel: the risks of untreated depression usually outweigh the risks of appropriately chosen medication.",
    },
    {
      question: "What is the difference between MDD and bipolar depression?",
      answer:
        "Major Depressive Disorder (MDD) is 'unipolar' — only depressive episodes, no manic or hypomanic episodes. Bipolar disorder involves both depressive episodes AND manic/hypomanic episodes. Bipolar depression looks similar to MDD during a depressive episode — the difference is the history. ALWAYS screen for prior manic/hypomanic episodes (using MDQ — Mood Disorder Questionnaire) before starting any antidepressant, because giving an SSRI alone to someone with bipolar depression can trigger a manic switch — potentially disastrous. If bipolar is confirmed, mood stabiliser first; antidepressant only if needed (with mood stabiliser cover).",
    },
    {
      question: "How do I find free or low-cost mental health care in India?",
      answer:
        "Several options: (1) Tele-MANAS — 14416 (toll-free, 24/7, 20 Indian languages) — free counselling and referral. (2) District Mental Health Programme (DMHP) — free mental health services at district hospitals across 700+ districts. (3) Jan Aushadhi Kendras — generic antidepressants (sertraline, escitalopram, fluoxetine, amitriptyline) at ₹2–5 per tablet. Locate at janaushadhi.gov.in. (4) NIMHANS Bengaluru — premier government mental health institute; OPD and emergency services. (5) Government medical college hospitals — psychiatry OPDs. (6) PMJAY (Ayushman Bharat) — covers severe mental illness treatment for eligible families (₹5 lakh annual cover). (7) Online platforms: Wysa, ePsyClinic, Tata 1mg (low-cost teleconsultation).",
    },
    {
      question: "What is ECT and when is it used in depression?",
      answer:
        "ECT (Electroconvulsive Therapy) is a medical procedure in which a carefully controlled electrical current is passed through the brain to induce a brief seizure, under general anaesthesia and muscle relaxation. It is used for: severe depression with psychotic features, catatonia, active suicidality requiring rapid response, refusal to eat/drink (life-threatening), and treatment-resistant depression. ECT has ~80% response rate in severe depression — faster and more effective than any medication. The Mental Healthcare Act 2017 (India) permits ECT only under anaesthesia with informed consent; unmodified ECT is banned. Side effects include transient memory disturbance (usually resolves within weeks). ECT is a safe, evidence-based, life-saving treatment — not the frightening procedure depicted in old movies.",
    },
  ],

  /* ============================================================
     EVIDENCE SOURCES — INTERNATIONAL vs INDIAN
     ============================================================ */
  evidenceSources: {
    international: [
      { source: "DSM-5 — Diagnostic and Statistical Manual of Mental Disorders, 5th edition", section: "Depressive Disorders" },
      { source: "ICD-10 — International Classification of Diseases, 10th revision (WHO)", section: "F32–F33 — Depressive episodes / Recurrent depressive disorder" },
      { source: "ICD-11 — International Classification of Diseases, 11th revision (WHO, 2022)", section: "Block 6A70 — Single depressive episode" },
      { source: "NICE Clinical Guideline CG91 — Depression in adults: recognition and management", section: "Pharmacological and psychological treatments" },
      { source: "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder, 3rd edition", section: "Pharmacotherapy and psychotherapy recommendations" },
      { source: "WHO mhGAP Intervention Guide (mental health Gap Action Programme), 2nd edition", section: "Module on depression" },
      { source: "Cipriani A et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366", section: "The definitive antidepressant head-to-head meta-analysis" },
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition", section: "Chapter 9 — Mood Disorders" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs" },
      { source: "Indian Psychiatric Society (IPS) — Clinical Practice Guidelines for Management of Depression (2023 revision)", type: "guideline", section: "Pharmacotherapy and psychotherapy recommendations" },
      { source: "NIMHANS National Mental Health Survey of India (2015–16) — Prevalence, Pattern and Outcomes", type: "regulatory", section: "Epidemiology of depression in India" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional, Phase III)", type: "curriculum", section: "Topic: Mood Disorders — Major Depressive Disorder" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants (PH7.3, PH7.4)" },
      { source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)", type: "regulatory", section: "Essential medicines and service delivery for depression" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Crisis support resource for patients with depression", url: "tel:14416" },
      { source: "Mental Healthcare Act 2017 (India) — permits ECT under anaesthesia with informed consent; bans unmodified ECT", type: "regulatory", section: "Rights of persons with mental illness" },
      { source: "NIMHANS neuroimaging and pharmacogenetic studies on depression", type: "textbook", section: "Indian research contribution to global depression neuroscience" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Antidepressant regulation in India — Schedule H prescription status" },
    ],
  },

  /* ============================================================
     PATIENT MODE CONTENT
     ============================================================ */
  patientMode: {
    tagline:
      "A common and treatable medical illness that affects mood, sleep, energy, and self-worth — not weakness or 'thinking too much'.",
    summary:
      "Depression (Major Depressive Disorder or MDD) is a real medical condition that affects how you feel, think, and handle daily activities. It is more than just feeling sad for a few days — it's at least 2 weeks of low mood or loss of interest, plus changes in sleep, appetite, energy, concentration, and self-worth. Globally, ~300 million people have depression — it is the leading cause of disability worldwide. In India, ~57 million people are affected. The good news: depression is treatable. With combined medication (usually SSRIs like sertraline) and talking therapy (like CBT), 60–70% of patients improve significantly.",
    mechanism:
      "Your brain uses chemicals called neurotransmitters (serotonin, norepinephrine, dopamine) to regulate mood, sleep, appetite, and energy. In depression, these chemicals are out of balance. Also, a chemical called BDNF (which helps brain cells grow and connect) is reduced — causing some brain areas (like the hippocampus) to shrink. Chronic stress, traumatic experiences, and genetic factors can all contribute. Antidepressants work by restoring the balance of these chemicals and boosting BDNF — but this takes time (4–6 weeks), which is why you may feel side effects before the mood benefit.",
    sideEffects:
      "If you start an SSRI antidepressant: most people get some side effects in the first 1–2 weeks — usually nausea, headache, sleep changes, or feeling a bit wired. These usually settle as your body adapts. Sexual side effects (lower interest or difficulty reaching orgasm) are common and can persist — talk to your doctor if this bothers you, as there are solutions. Serious side effects are rare but you should know the signs: high fever with confusion and shaking could be serotonin syndrome (emergency), feeling worse or having new suicidal thoughts in the first month needs immediate medical review (especially if you're under 25).",
    monitoring:
      "If you're on antidepressant medication, you'll have check-ins with your doctor at 2 weeks (side effects + mood), 4 weeks (early response), 6 weeks (dose adjustment if needed), and 12 weeks (full response). You may be asked to fill in a short questionnaire (PHQ-9) so your progress can be tracked — a score below 5 means remission. If you're over 65, your doctor may check your blood sodium in the first 2 weeks. Always report any new or worsening symptoms — especially agitation, irritability, or suicidal thoughts.",
    contraindications:
      "Some antidepressants cannot be used (or need dose adjustment) in certain situations: pregnancy (some SSRIs are safer than others — sertraline is preferred), severe liver or kidney disease, certain other medications (especially MAOIs — dangerous combination), some heart conditions. Always tell your doctor about all your medical conditions and ALL medications (including over-the-counter, herbal, and Ayurvedic products) before starting an antidepressant. NEVER stop an antidepressant abruptly after taking it for more than 4 weeks — always taper under medical supervision.",
    interactions:
      "The main thing to know: avoid alcohol or keep it to a minimum — it can worsen mood, sleep, and medication side effects. Tell your pharmacist about EVERYTHING you take — prescription, over-the-counter, herbal (especially St John's Wort, which interacts dangerously with SSRIs), and recreational substances. Dangerous combinations include: other antidepressants (especially MAOIs), tramadol (pain), triptans (migraine), certain antibiotics (linezolid), cough syrups with dextromethorphan. Your doctor or pharmacist will check for these automatically — but you should also tell them.",
  },

  /* ============================================================
     GUIDELINE COMPARISONS — INTERNATIONAL vs INDIAN
     ============================================================ */
  guidelineComparisons: [
    {
      topic: "Diagnostic system used",
      internationalSource: "DSM-5 (USA) / ICD-11 (WHO, international)",
      internationalRecommendation: "DSM-5 dominant in research and academic settings; ICD-11 adopted by WHO member states.",
      indianSource: "ICD-10 (official) + DSM-5 (academic)",
      indianRecommendation: "ICD-10 is the official coding system in Indian government hospitals, insurance, and CDSCO reporting. DSM-5 is used in parallel in academic settings and postgraduate training. India is in phased transition to ICD-11 (2025–2027 target).",
    },
    {
      topic: "First-line pharmacotherapy",
      internationalSource: "NICE CG91 / APA / WHO mhGAP",
      internationalRecommendation: "SSRIs are first-line for moderate-severe MDD. Sertraline commonly chosen for favourable side-effect and interaction profile.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS guidelines concur — SSRIs first-line. Sertraline and escitalopram are the most commonly prescribed SSRIs in Indian practice. Selection based on patient profile (pregnancy, elderly, comorbidities, cost). Jan Aushadhi generic sertraline (₹2–5/tablet) is widely accessible.",
    },
    {
      topic: "Diagnosis and severity monitoring",
      internationalSource: "NICE / APA",
      internationalRecommendation: "PHQ-9 for diagnosis and severity tracking. Baseline, 4, 8, 12 weeks. HAM-D for tertiary care and trials.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS recommends PHQ-9 for diagnosis and monitoring where literacy permits. PHQ-9 is validated in Hindi and multiple Indian languages. Widely used in DMHP clinics and private practice. Item-9 (suicidal thoughts) must be reviewed at every visit. HAM-D used in tertiary centres and research.",
    },
    {
      topic: "Use in pregnancy",
      internationalSource: "FDA / APA",
      internationalRecommendation: "Sertraline is the SSRI of choice in pregnancy when pharmacotherapy is necessary. Risk-benefit must weigh untreated maternal depression risks.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — sertraline is preferred in pregnancy. In Indian practice, decision to treat must also consider risks of untreated depression (poor antenatal care, poor nutrition, suicidality) which may be higher in low-resource settings. Always involve obstetrician. Counsel family.",
    },
    {
      topic: "Use of ECT",
      internationalSource: "APA / NICE",
      internationalRecommendation: "ECT for severe/psychotic/catatonic/suicidal MDD; treatment-resistant; when rapid response needed. ~80% response rate.",
      indianSource: "Mental Healthcare Act 2017 (India) + IPS",
      indianRecommendation: "ECT permitted ONLY under anaesthesia with informed consent per Mental Healthcare Act 2017. Unmodified ECT is BANNED. Indications concur with international: severe/psychotic/catatonic/suicidal/TRD. Used more readily in Indian government hospitals where it offers a rapid, cost-effective solution for severe depression.",
    },
    {
      topic: "Suicidality monitoring (under 25 years)",
      internationalSource: "FDA Black Box Warning",
      internationalRecommendation: "Antidepressants increase suicidality in patients <25. Weekly monitoring in first month. Document informed consent.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS acknowledges the FDA black box warning and recommends close monitoring of young patients (<25) during first month. In Indian practice, family involvement in monitoring is critical given the joint family system. Tele-MANAS (14416) should be provided as a crisis resource.",
    },
  ],

  /* ============================================================
     EVIDENCE HIERARCHY
     ============================================================ */
  evidenceHierarchy: {
    international: [
      { source: "NICE CG91", recommendation: "SSRIs first-line for moderate-severe MDD. Combined SSRI + CBT for severe MDD. Continue 6–12 months after remission." },
      { source: "APA Practice Guideline", recommendation: "SSRI first-line; consider patient profile (pregnancy, elderly, comorbidities) for selection. ECT for severe/psychotic/suicidal." },
      { source: "WHO mhGAP", recommendation: "SSRIs first-line in the Mental Health Gap Action Programme — for use by non-specialist health workers in low-resource settings." },
      { source: "Cipriani Lancet 2018", recommendation: "Network meta-analysis of 21 antidepressants: all more efficacious than placebo; SSRIs have the best efficacy/tolerability ratio. Amitriptyline, escitalopram, mirtazapine, paroxetine, venlafaxine, and sertraline had the best combination." },
      { source: "DSM-5 / ICD-10 / ICD-11", recommendation: "Diagnostic criteria: 5+ of 9 symptoms for ≥2 weeks (DSM-5); ≥2 of 3 core symptoms for ≥2 weeks (ICD-10)." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "SSRIs first-line; sertraline and escitalopram preferred. PHQ-9 for diagnosis and monitoring. ECT for severe/psychotic/catatonic/suicidal/TRD. Combined SSRI + psychotherapy for moderate-severe." },
      { source: "NIMHANS National Mental Health Survey (2015–16)", recommendation: "~57 million Indians with depression; 85% treatment gap. Higher prevalence in women, elderly, urban metros, chronic illness. Calls for scaling up DMHP and primary care mental health." },
      { source: "NMC CBME Curriculum", recommendation: "MDD taught in Final Professional Psychiatry (PY3.1, PY3.2) and Second Professional Pharmacology (PH7.3, PH7.4). Competency-based learning." },
      { source: "Mental Healthcare Act 2017", recommendation: "ECT only under anaesthesia with informed consent. Bans unmodified ECT. Guarantees rights of persons with mental illness. Mandates advance directives." },
      { source: null, recommendation: "No dedicated IPS guideline on SSRI monitoring frequency — current section reflects accepted clinical practice and internationally accepted evidence." },
    ],
    indianClinicalPractice:
      "In Indian practice, MDD is the most common diagnosis in psychiatry OPDs. The standard workflow: clinical diagnosis using DSM-5/ICD-10 → PHQ-9 for severity → SSRI (sertraline or escitalopram) first-line → combined with CBT where available → follow-up at 2/4/6/12 weeks. Indian government hospitals under DMHP dispense generic sertraline at ₹2–5/tablet (Jan Aushadhi). ECT is more readily used than in Western settings for severe depression — particularly in government hospitals where it offers rapid, cost-effective response. Family involvement is emphasised given the joint family system. Tele-MANAS (14416, launched 2022) provides free 24/7 counselling in 20 Indian languages. PMJAY (Ayushman Bharat) covers severe mental illness treatment for eligible families. The 85% treatment gap remains the biggest challenge — addressed by scaling up DMHP, training primary care physicians, and tele-mental health.",
  },

  /* ============================================================
     INDIAN ENCOUNTER CONTEXT
     ============================================================ */
  indianEncounterContext: {
    governmentHospitals:
      "MDD is the most common diagnosis in government hospital psychiatry OPDs under DMHP. Standard protocol: clinical diagnosis (ICD-10), PHQ-9 where literacy permits, sertraline 25–50 mg OD first-line, follow-up at 2/4/6/12 weeks. ECT available in tertiary centres for severe/psychotic/catatonic/suicidal MDD. Jan Aushadhi generic sertraline (₹2–5/tablet) dispensed. Tele-MANAS 14416 provided to every patient. Family involvement emphasised.",
    privateHospitals:
      "MDD managed with full diagnostic workup (DSM-5, PHQ-9, baseline labs), wider antidepressant choice (SSRIs, SNRIs, atypicals), combined pharmacotherapy + CBT/IPT where available. PHQ-9 monitoring at every visit. Augmentation strategies (bupropion, mirtazapine, lithium) for partial response. rTMS available in major metros. Esketamine for treatment-resistant MDD. Cost: ₹2–25/tablet for antidepressants; rTMS ₹30,000–60,000/course; esketamine ₹15,000–25,000/session.",
    medicalColleges:
      "Teaching disease for psychiatry and pharmacology. Used in psychiatry practicals (history taking, MSE, suicide risk assessment, prescription writing). Examined in Final Professional Psychiatry (PY3.1, PY3.2) and Second Professional Pharmacology (PH7.3, PH7.4). Commonly featured in NEET PG, INICET, and FMGE questions. ECT demonstrated in some teaching hospitals.",
    primaryCare:
      "GPs and family physicians can and should initiate SSRIs for mild-moderate MDD per WHO mhGAP and DMHP guidelines. PHQ-2 screen → PHQ-9 confirm → exclude medical mimics (TSH, CBC, B12) → MDQ screen for bipolar → sertraline 25–50 mg OD → counsel on 4–6 week onset → review at 2/4/6 weeks → refer to psychiatrist if PHQ-9 ≥20, suicidal, psychotic, treatment-resistant, or diagnostic uncertainty.",
    psychiatryOPD:
      "MDD is the bread-and-butter diagnosis of psychiatry OPD. Full workup, PHQ-9 monitoring, SSRI first-line, augmentation strategies, combined psychotherapy. ECT for severe/psychotic/suicidal. rTMS for treatment-resistant. Ketamine/esketamine for severe TRD with suicidality. Family psychoeducation. Tele-MANAS for between-visit support.",
  },

  /* ============================================================
     PRESCRIPTION WORKFLOW
     ============================================================ */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Confirm diagnosis using DSM-5/ICD-10 criteria — 5+ of 9 symptoms for ≥2 weeks (DSM-5).",
      "ALWAYS screen for bipolar disorder (MDQ) before any antidepressant — prevents manic switch.",
      "Assess suicidal ideation directly — if present, involve family for monitoring and provide Tele-MANAS 14416.",
      "Check for MAOI use in last 14 days — absolute contraindication to SSRI.",
      "Exclude medical mimics: CBC, TSH, B12, vitamin D, LFT, RBS (especially in elderly or atypical presentation).",
      "Baseline PHQ-9 score for response monitoring.",
      "In elderly: check baseline serum sodium (SIADH risk in first 2 weeks).",
      "In women of reproductive age: discuss pregnancy plans — sertraline is SSRI of choice if pregnancy possible.",
      "Review concurrent medications — tramadol, triptans, NSAIDs, warfarin, St John's Wort interact with SSRIs.",
      "Counsel about 4–6 week onset — set expectation that side effects precede benefit.",
      "Counsel about NEVER stopping abruptly — taper over 4+ weeks when discontinuing.",
      "Engage family in monitoring and safety planning (critical in Indian joint-family context).",
    ],
    duringTreatment: [
      "Week 1–2: assess tolerability (nausea, insomnia, agitation) and suicidality (especially <25 years — black box warning).",
      "Week 2–4: review early response — sleep, appetite, energy often improve before mood.",
      "Week 4–6: assess response with PHQ-9. If <30% reduction, increase dose.",
      "Week 6–12: full response assessment. If <50% reduction at 12 weeks, consider augmentation (bupropion/mirtazapine) or switch.",
      "Monitor for sexual dysfunction — ask directly at every follow-up; patients rarely volunteer.",
      "Watch for hyponatraemia in elderly (confusion, headache, seizures) — check serum sodium if symptomatic.",
      "Watch for serotonin syndrome if serotonergic drugs are added (tramadol, triptans, linezolid, St John's Wort).",
      "Check PHQ-9 item-9 (suicidal thoughts) at every visit — any positive response triggers formal suicide risk assessment.",
      "Encourage concurrent CBT if available — combined SSRI + CBT produces better outcomes than either alone.",
    ],
    followUp: [
      "First follow-up at 2 weeks (tolerability + suicidality).",
      "Second follow-up at 4 weeks (early response).",
      "Third follow-up at 6 weeks (dose escalation decision).",
      "Fourth follow-up at 12 weeks (full response assessment).",
      "If remission achieved (PHQ-9 <5): continue 6–12 months for first episode; 2–3 years for second; indefinite for 3+.",
      "Before discontinuation: taper over 4+ weeks. Substitute fluoxetine (long half-life) for last 2 weeks of paroxetine/sertraline taper.",
      "In government hospitals: follow-up may be every 4–8 weeks due to travel barriers — counsel family to watch for red flags.",
      "Long-term monitoring: every 3–6 months during maintenance; immediate review if relapse warning signs (sleep disturbance, withdrawal, irritability, anhedonia re-emerge).",
    ],
    whenToRefer: [
      "Refer to psychiatrist if no response to 2 adequate antidepressant trials (12 weeks each at therapeutic dose).",
      "Refer urgently if suicidal ideation emerges or worsens.",
      "Refer if bipolar disorder is suspected (MDQ positive or manic switch) — mood stabiliser needed before SSRI.",
      "Refer if psychotic features (delusions, hallucinations) — combination therapy (antidepressant + antipsychotic) or ECT.",
      "Refer if serotonin syndrome develops (emergency — call 112).",
      "Refer to physician if severe hyponatraemia (Na <120 mmol/L) or seizures.",
      "Refer to obstetrician if patient becomes pregnant (do NOT stop sertraline abruptly).",
      "Refer for CBT — combined SSRI + CBT produces better outcomes than either alone.",
      "Refer for ECT if severe/psychotic/catatonic/suicidal — ~80% response rate.",
      "Refer for rTMS or ketamine/esketamine if treatment-resistant.",
    ],
  },

  /* ============================================================
     JAN AUSHADHI RELEVANCE
     ============================================================ */
  janAushadhiRelevant: true,

  /* ============================================================
     METADATA
     ============================================================ */
  lastReviewed: "2026-07-13",
  reviewers: [
    "Compiled from DSM-5, ICD-10, ICD-11, NICE CG91, APA Practice Guideline, WHO mhGAP, Cipriani Lancet 2018, Katzung 16e, Goodman & Gilman 14e, Stahl 5e, Kaplan & Sadock 12e, KD Tripathi 8e, IPS Depression Guidelines 2023, NIMHANS National Mental Health Survey 2015–16, NMC CBME Curriculum, Mental Healthcare Act 2017, NMHP/DMHP, Tele-MANAS, CDSCO",
  ],
};
