import type { Drug } from "../types";

/**
 * Lurasidone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), lurasidone monograph (book p. 71)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const lurasidone: Drug = {
  /* ---- Identity ---- */
  slug: "lurasidone",
  genericName: "Lurasidone",
  brandNames: ["Latuda"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Lurasidone"],
  /* ---- Hero / summary ---- */
  tagline: "The metabolically clean bipolar-depression antipsychotic — 5-HT7-powered efficacy without the weight bill.",
  summary: "Lurasidone is a benzisothiazol atypical antipsychotic with strong D2 and 5-HT2A binding plus distinctive 5-HT7 and 5-HT1A activity. It is FDA-approved for schizophrenia and — its signature niche — bipolar depression as monotherapy and adjunct, with the cleanest metabolic profile in the class alongside aripiprazole and ziprasidone. It must be taken with food (≥ 350 kcal) for adequate absorption, and dose-related akathisia is its main burden.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Lurasidone — from its molecular target (D2 (antagonist); 5-HT2A (antagonist); 5-HT7 (antagonist); 5-HT1A (partial agonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Lurasidone.",
    "Predict the common and serious side effects of Lurasidone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Lurasidone.",
    "Compare Lurasidone with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Lurasidone blocks D2 and 5-HT2A receptors and antagonises 5-HT7 receptors (a mechanism linked to antidepressant and cognitive effects), with 5-HT1A partial agonism.",
    molecularTarget: "D2 (antagonist); 5-HT2A (antagonist); 5-HT7 (antagonist); 5-HT1A (partial agonist)",
    effect: "Antipsychotic and antidepressant efficacy with minimal histaminic and muscarinic binding — little weight gain or sedation.",
    steps: [
      "D2 blockade treats positive symptoms; 5-HT2A antagonism protects the motor system as in other atypicals.",
      "5-HT7 antagonism is distinctive — linked in preclinical work to antidepressant and pro-cognitive effects, plausibly underpinning its bipolar-depression efficacy.",
      "5-HT1A partial agonism adds serotonergic modulation.",
      "Negligible H1, M1, and 5-HT2C binding explains the near-absent weight gain and sedation.",
    ],
    pharmacokinetics: "Absorption rises ~2-fold with food — must be taken with an evening meal of at least 350 kcal; without food, levels are inadequate.",
    halfLife: "18 hours.",
    metabolism: "Hepatic CYP3A4 exclusively — strong inhibitors and inducers are contraindicated.",
    excretion: "Predominantly hepatic elimination of metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Lurasidone",
        sublabel: "Atypical antipsychotic",
        variant: "inhibit",
      },
      {
        id: "5ht2a",
        label: "5-HT2A receptor",
        sublabel: "Blocked at high affinity",
        variant: "target",
      },
      {
        id: "d2",
        label: "D2 receptor",
        sublabel: "Occupied in mesolimbic pathway",
        variant: "target",
      },
      {
        id: "da",
        label: "Dopamine firing",
        sublabel: "Disinhibited by 5-HT2A blockade",
        variant: "process",
      },
      {
        id: "meso",
        label: "Mesolimbic pathway",
        sublabel: "Psychotic salience normalised",
        variant: "output",
      },
      {
        id: "pfc",
        label: "Prefrontal cortex",
        sublabel: "Negative & cognitive symptoms",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "5ht2a",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "drug",
        to: "d2",
        label: "occupies",
        type: "inhibit",
      },
      {
        from: "5ht2a",
        to: "da",
        label: "disinhibits",
        type: "stimulate",
      },
      {
        from: "da",
        to: "meso",
        label: "normalises",
      },
      {
        from: "d2",
        to: "meso",
        label: "reduces psychosis signal",
      },
      {
        from: "drug",
        to: "pfc",
        label: "5-HT2A-mediated benefit",
      },
    ],
    caption: "5-HT2A antagonism 'releases the brake' on dopamine firing, while moderate D2 occupancy treats positive symptoms — the serotonin-dopamine hypothesis of atypical antipsychotics.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)"],
  receptors: ["D2 (antagonist)", "5-HT2A (antagonist)", "5-HT7 (antagonist)", "5-HT1A (partial agonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "Effective first-line atypical with clean metabolic profile.",
      ageGroup: "Adults & ≥13 years (USA)",
    },
    {
      name: "Bipolar I depression",
      status: "fda-approved",
      description: "Monotherapy (20–120 mg) and adjunct to lithium/valproate — a signature indication alongside quetiapine.",
      ageGroup: "Adults",
    },
    {
      name: "Bipolar maintenance (adjunct)",
      status: "guideline",
      description: "Used with lithium or valproate in maintenance.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Lurasidone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Lurasidone is not approved for dementia-related psychosis. Pooled atypical antipsychotic analyses show increased mortality versus placebo, mainly cardiovascular and infectious.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Akathisia",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related restlessness — the most common reason for discontinuation, especially at higher doses.",
      management: "Dose reduction; propranolol; timing change.",
    },
    {
      name: "Nausea and somnolence",
      frequency: "common",
      severity: "mild",
      description: "Usually early and transient.",
      management: "Take with the evening meal; reassurance.",
    },
    {
      name: "Insomnia or agitation",
      frequency: "common",
      severity: "mild",
      description: "Activating profile for some patients.",
      management: "Dose timing; assess for akathisia.",
    },
    {
      name: "Parkinsonism",
      frequency: "uncommon",
      severity: "moderate",
      description: "Dose-dependent EPS at higher doses.",
      management: "Reduce dose; anticholinergic if needed.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Tardive dyskinesia",
      frequency: "rare",
      severity: "severe",
      description: "Class risk, lower with metabolic-clean agents but non-zero.",
      management: "Reduce or switch; VMAT2 inhibitors for severe cases.",
    },
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk — rigidity, fever, autonomic instability.",
      management: "Stop; ICU care.",
    },
    {
      name: "Angioedema",
      frequency: "rare",
      severity: "severe",
      description: "Reported in post-marketing.",
      management: "Stop the drug; urgent evaluation.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Weight and BMI",
      frequency: "Baseline, then at 4, 8, 12 weeks and quarterly",
      rationale: "Class metabolic risk — early trajectory detection.",
    },
    {
      parameter: "Fasting glucose / HbA1c",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Atypical antipsychotics can unmask diabetes.",
    },
    {
      parameter: "Lipid profile (fasting)",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Class metabolic risk.",
    },
    {
      parameter: "Blood pressure (orthostatic)",
      frequency: "Baseline and during titration",
      rationale: "Alpha-1 blockade — orthostasis risk.",
    },
    {
      parameter: "AIMS examination",
      frequency: "Baseline, then every 6–12 months",
      rationale: "Tardive dyskinesia surveillance.",
    },
  ],
  interactions: [
    {
      drug: "CNS depressants and alcohol",
      severity: "moderate",
      mechanism: "Additive sedation and orthostasis.",
      action: "Counsel against alcohol; anticipate increased sedation.",
    },
    {
      drug: "QT-prolonging drugs",
      severity: "moderate",
      mechanism: "Additive QT effect.",
      action: "ECG if combinations unavoidable.",
    },
    {
      drug: "Antihypertensives",
      severity: "moderate",
      mechanism: "Additive hypotension via alpha-1 blockade.",
      action: "Monitor standing blood pressure.",
    },
  ],
  pregnancy: {
    summary: "Limited human data; no teratogenic signal established. Standard antipsychotic pregnancy logic applies — continue if needed for illness control, with obstetric co-management and third-trimester neonatal monitoring.",
    lactation: "Unknown milk transfer (limited data) — most guidelines advise caution; monitor the infant if used.",
  },
  renalAdjustment: "Reduce dose for CrCl 10–50 mL/min (do not exceed 40 mg/day); not studied below CrCl 10.",
  hepaticAdjustment: "Reduce dose in moderate impairment (max 40 mg/day); contraindicated in severe hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Lurasidone works on dopamine and serotonin systems to treat psychosis and, uniquely among many antipsychotics, the depressed phase of bipolar disorder — without the weight gain that similar medicines cause. It must be taken with your evening meal (a proper meal, not a snack) for the body to absorb it properly.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Lurasidone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Food is pharmacology: lurasidone without a ≥ 350 kcal meal can be half-absorbed — 'take with dinner' is part of the prescription.",
    "Best-in-class metabolic profile with aripiprazole and ziprasidone — the go-to when weight or diabetes dominates drug choice.",
    "Bipolar depression: lurasidone and quetiapine are the leading monotherapies — lurasidone when metabolic risk excludes quetiapine.",
    "Akathisia is the main tolerability tax — warn, watch, and treat early.",
    "3A4-only metabolism: ketoconazole and rifampicin combinations are contraindicated, not just cautioned.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Lurasidone: Lurasidone blocks D2 and 5-HT2A receptors and antagonises 5-HT7 receptors (a mechanism linked to antidepressant and cognitive effects), with 5-HT1A partial agonism.",
        "Uses of Lurasidone: Schizophrenia; Bipolar I depression; Bipolar maintenance (adjunct)",
        "Mechanism: D2 + 5-HT2A antagonist with distinctive 5-HT7 antagonism (antidepressant/pro-cognitive).",
        "Signature: bipolar depression (mono + adjunct) with the cleanest metabolic profile in class.",
      ],
      practical: [
        "Prescribe Lurasidone for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually)",
      ],
      longAnswer: [
        "Lurasidone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D2 + 5-HT2A antagonist with distinctive 5-HT7 antagonism (antidepressant/pro-cognitive).",
        "Signature: bipolar depression (mono + adjunct) with the cleanest metabolic profile in class.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D2 + 5-HT2A antagonist with distinctive 5-HT7 antagonism (antidepressant/pro-cognitive).",
        "Signature: bipolar depression (mono + adjunct) with the cleanest metabolic profile in class.",
        "Food effect: take with ≥ 350 kcal meal — without food, absorption is roughly halved.",
        "CYP3A4 exclusively — strong inhibitors/inducers contraindicated.",
        "Main adverse effect: dose-related akathisia.",
        "Dose: schizophrenia 40–160 mg; bipolar depression 20–120 mg once daily with evening meal.",
      ],
      pyqConcepts: ["Mechanism/target of Lurasidone", "Key adverse effect: Tardive dyskinesia", "Dosing and titration of Lurasidone"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Lurasidone develops tardive dyskinesia — next best step?",
        "When to choose Lurasidone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (antagonist); 5-HT2A (antagonist); 5-HT7 (antagonist); 5-HT1A (partial agonist)",
        "Most common side effects: Akathisia, Nausea and somnolence, Insomnia or agitation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Food is pharmacology: a ≥ 350 kcal evening meal is part of the prescription.",
        "Bipolar depression with metabolic risk — the single clearest indication for lurasidone.",
        "Akathisia is the tolerability tax — warn at initiation.",
        "3A4-only metabolism: ketoconazole and rifampicin are contraindicated.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: D2 + 5-HT2A antagonist with distinctive 5-HT7 antagonism (antidepressant/pro-cognitive).",
    "Signature: bipolar depression (mono + adjunct) with the cleanest metabolic profile in class.",
    "Food effect: take with ≥ 350 kcal meal — without food, absorption is roughly halved.",
    "CYP3A4 exclusively — strong inhibitors/inducers contraindicated.",
    "Main adverse effect: dose-related akathisia.",
    "Dose: schizophrenia 40–160 mg; bipolar depression 20–120 mg once daily with evening meal.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia",
      presentation: "A patient presenting with schizophrenia, started on Lurasidone.",
      history: "A adult patient presents with a schizophrenia picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia. Differentials are considered and excluded clinically.",
      rationale: "Lurasidone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 40 mg once daily with evening meal, titrated to 40–160 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Lurasidone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Lurasidone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (antagonist); 5-HT2A (antagonist); 5-HT7 (antagonist); 5-HT1A (partial agonist)",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "See full guide",
            },
            {
              drug: "Clozapine",
              value: "See full guide",
            },
            {
              drug: "Olanzapine",
              value: "See full guide",
            },
            {
              drug: "Paliperidone",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "18 hours.",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "—",
            },
            {
              drug: "Clozapine",
              value: "—",
            },
            {
              drug: "Olanzapine",
              value: "—",
            },
            {
              drug: "Paliperidone",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "See product information and class comparison.",
            },
            {
              drug: "Clozapine",
              value: "See product information and class comparison.",
            },
            {
              drug: "Olanzapine",
              value: "—",
            },
            {
              drug: "Paliperidone",
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Low — may be mildly activating.",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "Low; can be activating — insomnia is more common than somnolence.",
            },
            {
              drug: "Clozapine",
              value: "Very high initially; attenuates at a stable dose but remains the dose-limiting effect for many.",
            },
            {
              drug: "Olanzapine",
              value: "Moderate to high — usually transient at a given dose but dose-limiting for many patients.",
            },
            {
              drug: "Paliperidone",
              value: "Low-to-moderate; flatter levels reduce peak sedation versus IR risperidone.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Bipolar depression + metabolic safety — the 'clean' lurasidone/ziprasidone/aripiprazole trio",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "Least metabolic burden among atypicals — the activating 'thermostat' antipsychotic",
            },
            {
              drug: "Clozapine",
              value: "Treatment-resistant schizophrenia + anti-suicide efficacy — the drug that rescues the failures",
            },
            {
              drug: "Olanzapine",
              value: "Most robust broad-spectrum atypical — heaviest metabolic burden",
            },
            {
              drug: "Paliperidone",
              value: "The LAI platform king — monthly to 6-monthly injections for schizophrenia",
            },
          ],
        },
      ],
      takeaway: "All atypical antipsychotics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Lurasidone reaches peak plasma concentration and begins acting at its molecular target (D2 (antagonist); 5-HT2A (antagonist); 5-HT7 (antagonist); 5-HT1A (partial agonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (akathisia, nausea and somnolence, insomnia or agitation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Schizophrenia: 1–3 weeks for measurable improvement.)",
      title: "Therapeutic effect builds",
      description: "Schizophrenia: 1–3 weeks for measurable improvement. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–12",
      title: "Full response",
      description: "Continue at the effective dose. Response should be judged on symptom scores and function, not just impression. Non-response at adequate dose and duration prompts a treatment decision.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Maintenance",
      title: "Continuation",
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Lurasidone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Lurasidone take to work?",
      answer: "Schizophrenia: 1–3 weeks for measurable improvement.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Lurasidone?",
      answer: "The most frequently reported effects are: Akathisia, Nausea and somnolence, Insomnia or agitation, Parkinsonism. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Lurasidone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Lurasidone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Lurasidone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Lurasidone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Lurasidone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for Schizophrenia (2020)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), lurasidone monograph, p. 71",
      },
      {
        source: "Katzung Basic & Clinical Pharmacology",
        section: "16th ed. — autonomic, CNS, and psychiatric drug chapters",
      },
      {
        source: "KD Tripathi Essentials of Medical Pharmacology",
        section: "8th ed. — drugs acting on CNS",
      },
    ],
    trials: [
      {
        source: "FDA Prescribing Information for Latuda (Lurasidone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for lurasidone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Lurasidone",
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/medication-guides",
      },
      {
        source: "NIMH — Mental Health Medications",
        url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
      },
    ],
  },
  relatedDrugs: [
    {
      name: "Aripiprazole",
      slug: "aripiprazole",
      drugClass: "Dopamine Stabiliser",
      relationship: "Same class (Dopamine Stabiliser)",
    },
    {
      name: "Clozapine",
      slug: "clozapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Olanzapine",
      slug: "olanzapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Paliperidone",
      slug: "paliperidone",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Quetiapine",
      slug: "quetiapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Risperidone",
      slug: "risperidone",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
  ],
  relatedConditions: [
    {
      name: "Schizophrenia",
      relationship: "primary",
    },
    {
      name: "Bipolar I depression",
      relationship: "primary",
    },
    {
      name: "Bipolar maintenance (adjunct)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Lurasidone",
      type: "drug",
      href: "/drugs/lurasidone",
      note: "The drug you're reading about",
    },
    {
      label: "Atypical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "D2 (antagonist); 5-HT2A (antagonist); 5-HT7 (antagonist); 5-HT1A (partial agonist)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Prefrontal Cortex",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Nucleus Accumbens",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Schizophrenia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar I depression",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar maintenance (adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Tardive dyskinesia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Neuroleptic malignant syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Akathisia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Lurasidone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The metabolically clean bipolar-depression antipsychotic — 5-HT7-powered efficacy without the weight bill.",
    summary: "Lurasidone is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Lurasidone works on dopamine and serotonin systems to treat psychosis and, uniquely among many antipsychotics, the depressed phase of bipolar disorder — without the weight gain that similar medicines cause. It must be taken with your evening meal (a proper meal, not a snack) for the body to absorb it properly.",
    sideEffects: "The most common side effects are: akathisia, nausea and somnolence, insomnia or agitation, parkinsonism. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Tardive dyskinesia and Neuroleptic malignant syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, then at 4, 8, 12 weeks and quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually); lipid profile (fasting) (baseline, 12 weeks, then annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: CNS depressants and alcohol, QT-prolonging drugs, Antihypertensives. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Luraford / Lurasid (generic)",
        manufacturer: "Micro Labs/others",
        strengths: "40, 80 mg",
      },
      {
        name: "Latuda",
        manufacturer: "originator where available",
        strengths: "40 mg",
      },
    ],
    typicalDoses: "Schizophrenia 40–160 mg; bipolar depression 20–120 mg, once daily with evening meal.",
    prescribingScenarios: [
      "Bipolar depression where metabolic risk rules out quetiapine/olanzapine.",
      "Schizophrenia in metabolically vulnerable patients.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance — see Monitoring section.",
    patientCounselling: ["Take exactly as prescribed.", "Do not stop suddenly.", "Report persistent side effects."],
  },
  sectionDifficulty: {
    mechanism: "mbbs",
    timeline: "mbbs",
    "clinical-uses": "mbbs",
    "side-effects": "mbbs",
    monitoring: "mbbs",
    faq: "mbbs",
    "neural-pathways": "pg",
    "prescriber-guide": "pg",
    interactions: "pg",
    "clinical-case": "pg",
    "learning-module": "pg",
    "high-yield-summary": "pg",
    contraindications: "mbbs",
    "patient-education": "mbbs",
    "indian-clinical": "pg",
    "decision-path": "resident",
    references: "resident",
  },
  janAushadhi: {
    available: false,
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Lurasidone",
        slug: "lurasidone",
        relationship: "This guide",
        distinguishing: "Bipolar depression + metabolic safety — the 'clean' lurasidone/ziprasidone/aripiprazole trio",
      },
      {
        name: "Aripiprazole",
        slug: "aripiprazole",
        relationship: "Same class (Dopamine Stabiliser)",
        distinguishing: "Least metabolic burden among atypicals — the activating 'thermostat' antipsychotic",
      },
      {
        name: "Clozapine",
        slug: "clozapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Treatment-resistant schizophrenia + anti-suicide efficacy — the drug that rescues the failures",
      },
      {
        name: "Olanzapine",
        slug: "olanzapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Most robust broad-spectrum atypical — heaviest metabolic burden",
      },
      {
        name: "Paliperidone",
        slug: "paliperidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "The LAI platform king — monthly to 6-monthly injections for schizophrenia",
      },
      {
        name: "Quetiapine",
        slug: "quetiapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Bipolar depression approval + virtually zero EPS/prolactin — the sedating antidepressant-antipsychotic",
      },
      {
        name: "Risperidone",
        slug: "risperidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Most potent D2 blockade among atypicals — highest prolactin, best-studied LAI",
      },
      {
        name: "Ziprasidone",
        slug: "ziprasidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Weight-neutral oral + the least hypotensive IM antipsychotic — with QT vigilance",
      },
      {
        name: "Amisulpride",
        slug: "amisulpride",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "The dose-band benzamide — European/Indian staple with the clozapine-drool rescue",
      },
    ],
  },
  learningTimeBreakdown: {
    read: "14 min",
    study: "40 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Lurasidone primarily act on?",
      options: [
        "D2 (antagonist); 5-HT2A (antagonist); 5-HT7 (antagonist); 5-HT1A (partial agonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Lurasidone acts primarily at D2 (antagonist); 5-HT2A (antagonist); 5-HT7 (antagonist); 5-HT1A (partial agonist). Lurasidone blocks D2 and 5-HT2A receptors and antagonises 5-HT7 receptors (a mechanism linked to antidepressant and cognitive effects), with 5-HT1A partial agonism.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Lurasidone?",
      options: ["Akathisia", "Nausea and somnolence", "Insomnia or agitation", "Parkinsonism"],
      correctIndex: 0,
      explanation: "Akathisia — Dose-related restlessness — the most common reason for discontinuation, especially at higher doses.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Lurasidone for schizophrenia?",
      options: ["40–160 mg/day", "160 mg/day", "40–160 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia: start 40 mg once daily with evening meal, target 40–160 mg/day, maximum 160 mg/day. Increase to 80–120 mg as needed",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Lurasidone in two sentences.",
      answer: "Lurasidone blocks D2 and 5-HT2A receptors and antagonises 5-HT7 receptors (a mechanism linked to antidepressant and cognitive effects), with 5-HT1A partial agonism. Net effect: Antipsychotic and antidepressant efficacy with minimal histaminic and muscarinic binding — little weight gain or sedation.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Lurasidone.",
      answer: "Schizophrenia, Bipolar I depression, Bipolar maintenance (adjunct). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Lurasidone and how you would manage it.",
      answer: "Tardive dyskinesia: Class risk, lower with metabolic-clean agents but non-zero. Management: Reduce or switch; VMAT2 inhibitors for severe cases.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Lurasidone require?",
      answer: "Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually); Blood pressure (orthostatic) (Baseline and during titration)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Lurasidone that separates safe prescribers from unsafe ones.",
      answer: "Food is pharmacology: a ≥ 350 kcal evening meal is part of the prescription.",
      topic: "Clinical Pearls",
    },
  ],
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language. What you need to know to take your medicine safely.",
      visibleSections: ["top", "quick-facts", "patient-education", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "20 min",
      description: "Foundations, mechanism, clinical uses, side effects, and MBBS exam content.",
      visibleSections: [
        "top",
        "quick-facts",
        "learning-objectives",
        "knowledge-graph",
        "mechanism",
        "brain-regions",
        "neurotransmitters",
        "timeline",
        "clinical-uses",
        "side-effects",
        "monitoring",
        "contraindications",
        "prescriber-guide",
        "interactions",
        "patient-education",
        "learning-module",
        "high-yield-summary",
        "faq",
      ],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full clinical detail with exam-specific content, comparisons, and the Stahl prescriber layer.",
      visibleSections: [
        "top",
        "quick-facts",
        "learning-objectives",
        "knowledge-graph",
        "mechanism",
        "brain-regions",
        "neurotransmitters",
        "neural-pathways",
        "timeline",
        "clinical-uses",
        "side-effects",
        "monitoring",
        "contraindications",
        "prescriber-guide",
        "evidence-practice",
        "interactions",
        "patient-education",
        "indian-clinical",
        "decision-path",
        "common-mistakes",
        "learning-module",
        "clinical-case",
        "drug-navigation",
        "high-yield-summary",
        "faq",
        "active-recall",
      ],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — advanced reasoning, full prescriber guide, evidence, and references.",
      visibleSections: [
        "top",
        "quick-facts",
        "learning-objectives",
        "knowledge-graph",
        "mechanism",
        "brain-regions",
        "neurotransmitters",
        "neural-pathways",
        "timeline",
        "clinical-uses",
        "side-effects",
        "monitoring",
        "contraindications",
        "prescriber-guide",
        "evidence-practice",
        "interactions",
        "patient-education",
        "indian-clinical",
        "decision-path",
        "common-mistakes",
        "learning-module",
        "clinical-case",
        "drug-navigation",
        "high-yield-summary",
        "faq",
        "active-recall",
        "references",
      ],
    },
  ],
  lessonGroups: [
    {
      number: 1,
      title: "Foundations",
      description: "What is this drug? Why does it matter?",
      sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"],
      checkpoint: "You now know what Lurasidone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Lurasidone works — from molecular target to clinical effect timeline.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When do you use it? What goes wrong?",
      sectionIds: [
        "clinical-uses",
        "side-effects",
        "monitoring",
        "contraindications",
        "prescriber-guide",
        "evidence-practice",
        "interactions",
        "patient-education",
      ],
      checkpoint: "You can prescribe Lurasidone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Lurasidone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Lurasidone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Lurasidone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Schizophrenia: 1–3 weeks for measurable improvement.",
      "Bipolar depression: 1–3 weeks for early response.",
    ],
    ifItWorks: [
      "Continue Lurasidone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Lurasidone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Lurasidone follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "Low — may be mildly activating.",
    dosing: [
      {
        indication: "Schizophrenia",
        starting: "40 mg once daily with evening meal",
        titration: "Increase to 80–120 mg as needed",
        target: "40–160 mg/day",
        max: "160 mg/day",
      },
      {
        indication: "Bipolar depression",
        starting: "20 mg once daily with evening meal",
        titration: "Increase by 20–40 mg at intervals of a few days",
        target: "20–120 mg/day",
        max: "120 mg/day",
      },
    ],
    dosageForms: ["Tablets 20, 40, 60, 80, 120 mg"],
    dosingTips: [
      "Evening meal of ≥ 350 kcal — non-negotiable for absorption.",
      "Start low in bipolar depression (20 mg) — akathisia risk rises with dose.",
      "Avoid strong 3A4 inhibitors/inducers entirely.",
    ],
    overdose: [
      "Overdose with Lurasidone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Lurasidone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 18 hours..",
      "Metabolism: Hepatic CYP3A4 exclusively — strong inhibitors and inducers are contraindicated..",
    ],
    doNotUse: ["Known hypersensitivity to this agent."],
    specialPopulations: [
      {
        population: "Elderly",
        guidance: [
          "Start at the lower end of the dosing range; review falls, sedation, and anticholinergic burden.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Use only where established for this agent; paediatric dosing differs from adult dosing.",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "Individualised risk-benefit discussion; involve obstetrics early; never stop abruptly without a plan.",
        ],
      },
    ],
    potentialAdvantages: [
      "Cleanest metabolic profile in class (with aripiprazole/ziprasidone).",
      "Bipolar depression monotherapy and adjunct approval.",
      "Once-daily evening dosing.",
    ],
    potentialDisadvantages: [
      "Akathisia dose-limiting for some.",
      "Food requirement is a real-world adherence trap.",
      "3A4-only metabolism limits combination options.",
    ],
    primaryTargetSymptoms: ["Positive symptoms of psychosis", "Bipolar depressive episodes"],
    pearls: [
      "Food is pharmacology: a ≥ 350 kcal evening meal is part of the prescription.",
      "Bipolar depression with metabolic risk — the single clearest indication for lurasidone.",
      "Akathisia is the tolerability tax — warn at initiation.",
      "3A4-only metabolism: ketoconazole and rifampicin are contraindicated.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
