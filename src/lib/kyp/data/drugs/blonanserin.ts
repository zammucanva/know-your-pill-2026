import type { Drug } from "../types";

/**
 * Blonanserin — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), blonanserin monograph (book p. 14)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const blonanserin: Drug = {
  /* ---- Identity ---- */
  slug: "blonanserin",
  genericName: "Blonanserin",
  brandNames: ["Lonasen"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Blonanserin"],
  /* ---- Hero / summary ---- */
  tagline: "Japan's dopamine-serotonin stabiliser — a regional atypical for completeness.",
  summary: "Blonanserin is the Japanese-market D2/D3-partial-agonist-family atypical antipsychotic (with 5-HT2A antagonism): schizophrenia treatment in Japan and parts of Asia, with EPS and prolactin cautions of the high-D2 class. An international-continuity entry.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Blonanserin — from its molecular target (D2/D3 (antagonism) + 5-HT2A (antagonism)) to clinical effect.",
    "List the FDA-approved and off-label uses of Blonanserin.",
    "Predict the common and serious side effects of Blonanserin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Blonanserin.",
    "Compare Blonanserin with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Blonanserin blocks D2/D3 and 5-HT2A receptors — a Japan-developed atypical with a high-D2 profile.",
    molecularTarget: "D2/D3 (antagonism) + 5-HT2A (antagonism)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Blonanserin blocks D2/D3 and 5-HT2A receptors — a Japan-developed atypical with a high-D2 profile.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 10-12 hours. — see mechanism and prescriber sections.",
    halfLife: "10-12 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Blonanserin",
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
  receptors: ["D2/D3 (antagonist)", "5-HT2A (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia (Japan)",
      status: "guideline",
      description: "4-24 mg/day in Japanese practice.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Blonanserin must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Class atypical antipsychotic boxed warning applies.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "EPS and akathisia",
      frequency: "common",
      severity: "moderate",
      description: "High-D2 profile.",
      management: "Dose reduction; propranolol.",
    },
    {
      name: "Hyperprolactinaemia",
      frequency: "common",
      severity: "moderate",
      description: "D2-family prolactin effect.",
      management: "Ask.",
    },
    {
      name: "Insomnia and agitation",
      frequency: "common",
      severity: "mild",
      description: "Activating tilt.",
      management: "Morning dosing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Stop; ICU.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "uncommon",
      severity: "severe",
      description: "Class risk.",
      management: "AIMS.",
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
    summary: "Data in human pregnancy are limited. The decision to continue or stop balances the risk of untreated illness against possible drug exposure — for serious psychiatric illness, relapse prevention usually outweighs fetal risk. Involve obstetrics early and never stop abruptly without a plan.",
    lactation: "Small amounts may pass into breast milk. Decisions are individualised — monitor the infant for sedation and poor feeding, and discuss with your doctor.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Blonanserin is a medicine used to treat schizophrenia (japan). Blonanserin blocks D2/D3 and 5-HT2A receptors — a Japan-developed atypical with a high-D2 profile. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Blonanserin builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Geography again: a Japan-developed atypical encountered in continuity of care — know it exists rather than reach for it.",
    "The high-D2 identity: EPS and prolactin cautions predict the profile from the receptor map.",
    "Atypicals add 5-HT2A antagonism to D2 blockade — better motor and prolactin tolerability than typicals, at the price of metabolic risk.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Blonanserin: Blonanserin blocks D2/D3 and 5-HT2A receptors — a Japan-developed atypical with a high-D2 profile.",
        "Uses of Blonanserin: Schizophrenia (Japan)",
        "Mechanism: D2/D3 + 5-HT2A antagonist — Japan-developed atypical.",
        "Market: Japan (and parts of Asia); not FDA/India-approved.",
      ],
      practical: [
        "Prescribe Blonanserin for schizophrenia (japan) with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually)",
      ],
      longAnswer: [
        "Blonanserin: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D2/D3 + 5-HT2A antagonist — Japan-developed atypical.",
        "Market: Japan (and parts of Asia); not FDA/India-approved.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D2/D3 + 5-HT2A antagonist — Japan-developed atypical.",
        "Market: Japan (and parts of Asia); not FDA/India-approved.",
        "High-D2 profile: EPS, prolactin elevation.",
        "Dose 8-16 mg/day.",
        "Class mechanism: D2 blockade + 5-HT2A antagonism — the atypical signature.",
      ],
      pyqConcepts: [
        "Mechanism/target of Blonanserin",
        "Key adverse effect: Neuroleptic malignant syndrome",
        "Dosing and titration of Blonanserin",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Blonanserin develops neuroleptic malignant syndrome — next best step?",
        "When to choose Blonanserin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2/D3 (antagonism) + 5-HT2A (antagonism)",
        "Most common side effects: EPS and akathisia, Hyperprolactinaemia, Insomnia and agitation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Geography again: a Japan-developed atypical encountered in continuity of care — know it exists rather than reach for it.",
        "The high-D2 identity: EPS and prolactin cautions predict the profile from the receptor map.",
        "Atypicals add 5-HT2A antagonism to D2 blockade — better motor and prolactin tolerability than typicals, at the price of metabolic risk.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: D2/D3 + 5-HT2A antagonist — Japan-developed atypical.",
    "Market: Japan (and parts of Asia); not FDA/India-approved.",
    "High-D2 profile: EPS, prolactin elevation.",
    "Dose 8-16 mg/day.",
    "Class mechanism: D2 blockade + 5-HT2A antagonism — the atypical signature.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia (japan)",
      presentation: "A patient presenting with schizophrenia (japan), started on Blonanserin.",
      history: "A adult patient presents with a schizophrenia (japan) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia (japan); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia (Japan). Differentials are considered and excluded clinically.",
      rationale: "Blonanserin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 4 mg twice daily, titrated to 8-16 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Blonanserin takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Blonanserin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2/D3 (antagonism) + 5-HT2A (antagonism)",
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
              drug: "Lurasidone",
              value: "See full guide",
            },
            {
              drug: "Olanzapine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "10-12 hours.",
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
              drug: "Lurasidone",
              value: "—",
            },
            {
              drug: "Olanzapine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "See product information and class comparison.",
            },
            {
              drug: "Clozapine",
              value: "—",
            },
            {
              drug: "Lurasidone",
              value: "—",
            },
            {
              drug: "Olanzapine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
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
              drug: "Lurasidone",
              value: "Low — may be mildly activating.",
            },
            {
              drug: "Olanzapine",
              value: "Moderate to high — usually transient at a given dose but dose-limiting for many patients.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Japanese atypical — continuity of care entry",
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
              drug: "Lurasidone",
              value: "Bipolar depression + metabolic safety — the 'clean' lurasidone/ziprasidone/aripiprazole trio",
            },
            {
              drug: "Olanzapine",
              value: "Most robust broad-spectrum atypical — heaviest metabolic burden",
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
      description: "Blonanserin reaches peak plasma concentration and begins acting at its molecular target (D2/D3 (antagonism) + 5-HT2A (antagonism)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (eps and akathisia, hyperprolactinaemia, insomnia and agitation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (As with the class: 1-3 weeks at antipsychotic dose.)",
      title: "Therapeutic effect builds",
      description: "As with the class: 1-3 weeks at antipsychotic dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Blonanserin is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Blonanserin take to work?",
      answer: "As with the class: 1-3 weeks at antipsychotic dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Blonanserin?",
      answer: "The most frequently reported effects are: EPS and akathisia, Hyperprolactinaemia, Insomnia and agitation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Blonanserin suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Blonanserin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Blonanserin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Blonanserin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Blonanserin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), blonanserin monograph, p. 14",
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
        source: "FDA Prescribing Information for Lonasen (Blonanserin)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for blonanserin — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Blonanserin",
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
      name: "Lurasidone",
      slug: "lurasidone",
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
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Schizophrenia (Japan)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Blonanserin",
      type: "drug",
      href: "/drugs/blonanserin",
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
      label: "D2/D3 (antagonism) + 5-HT2A (antagonism)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Schizophrenia (Japan)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Neuroleptic malignant syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Tardive dyskinesia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "EPS and akathisia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Blonanserin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Japan's dopamine-serotonin stabiliser — a regional atypical for completeness.",
    summary: "Blonanserin is a prescription medicine used to treat schizophrenia (japan). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Blonanserin is a medicine used to treat schizophrenia (japan). Blonanserin blocks D2/D3 and 5-HT2A receptors — a Japan-developed atypical with a high-D2 profile. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
    sideEffects: "The most common side effects are: eps and akathisia, hyperprolactinaemia, insomnia and agitation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, then at 4, 8, 12 weeks and quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually); lipid profile (fasting) (baseline, 12 weeks, then annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: CNS depressants and alcohol, QT-prolonging drugs, Antihypertensives. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Not marketed in India)",
        manufacturer: "—",
        strengths: "—",
      },
    ],
    typicalDoses: "—",
    prescribingScenarios: [
      "Japanese prescriptions continued rarely.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "high",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Blonanserin",
        slug: "blonanserin",
        relationship: "This guide",
        distinguishing: "Japanese atypical — continuity of care entry",
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
        name: "Lurasidone",
        slug: "lurasidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Bipolar depression + metabolic safety — the 'clean' lurasidone/ziprasidone/aripiprazole trio",
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
    ],
  },
  learningTimeBreakdown: {
    read: "14 min",
    study: "20 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Blonanserin primarily act on?",
      options: [
        "D2/D3 (antagonism) + 5-HT2A (antagonism)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Blonanserin acts primarily at D2/D3 (antagonism) + 5-HT2A (antagonism). Blonanserin blocks D2/D3 and 5-HT2A receptors — a Japan-developed atypical with a high-D2 profile.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Blonanserin?",
      options: ["EPS and akathisia", "Hyperprolactinaemia", "Insomnia and agitation", "Weight gain"],
      correctIndex: 0,
      explanation: "EPS and akathisia — High-D2 profile.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Blonanserin for schizophrenia (japan)?",
      options: ["8-16 mg/day", "24 mg/day", "8-16 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (japan): start 4 mg twice daily, target 8-16 mg/day, maximum 24 mg/day. Increase gradually to 8-16 mg/day",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Blonanserin in two sentences.",
      answer: "Blonanserin blocks D2/D3 and 5-HT2A receptors — a Japan-developed atypical with a high-D2 profile. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Blonanserin.",
      answer: "Schizophrenia (Japan). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Blonanserin and how you would manage it.",
      answer: "Neuroleptic malignant syndrome: Class risk. Management: Stop; ICU.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Blonanserin require?",
      answer: "Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually); Blood pressure (orthostatic) (Baseline and during titration)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Blonanserin that separates safe prescribers from unsafe ones.",
      answer: "Geography again: a Japan-developed atypical encountered in continuity of care — know it exists rather than reach for it.",
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
      checkpoint: "You now know what Blonanserin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Blonanserin works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Blonanserin safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Blonanserin.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Blonanserin with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Blonanserin.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "As with the class: 1-3 weeks at antipsychotic dose.",
    ],
    ifItWorks: [
      "Continue Blonanserin at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Blonanserin (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Blonanserin follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Agent-specific.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Schizophrenia (Japan)",
        starting: "4 mg twice daily",
        titration: "Increase gradually to 8-16 mg/day",
        target: "8-16 mg/day",
        max: "24 mg/day",
      },
    ],
    dosageForms: ["Tablets 2, 4 mg; powder/dispersible", "Orally disintegrating sheet"],
    dosingTips: [
      "Follow the dosing table and titration guidance for Blonanserin.",
      "Review at 2 and 4 weeks after any dose change.",
    ],
    overdose: [
      "Overdose with Blonanserin is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Blonanserin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 10-12 hours..", "Metabolism: Hepatic.."],
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
      "Japanese atypical — continuity of care entry",
    ],
    potentialDisadvantages: [
      "See adverse effects section — the main disadvantages of Blonanserin are its key side effects.",
    ],
    primaryTargetSymptoms: ["Schizophrenia (Japan)"],
    pearls: [
      "Geography again: a Japan-developed atypical encountered in continuity of care — know it exists rather than reach for it.",
      "The high-D2 identity: EPS and prolactin cautions predict the profile from the receptor map.",
      "Atypicals add 5-HT2A antagonism to D2 blockade — better motor and prolactin tolerability than typicals, at the price of metabolic risk.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
