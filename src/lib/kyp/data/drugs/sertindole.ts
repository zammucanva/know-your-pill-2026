import type { Drug } from "../types";

/**
 * Sertindole — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), sertindole monograph (book p. 113)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const sertindole: Drug = {
  /* ---- Identity ---- */
  slug: "sertindole",
  genericName: "Sertindole",
  brandNames: ["Serdolect"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Sertindole"],
  /* ---- Hero / summary ---- */
  tagline: "The QT-restricted atypical — suspended, reinstated with ECG monitoring, and forever an exam name.",
  summary: "Sertindole is the 5-HT2A-antagonist-heavy atypical antipsychotic with a clean EPS profile and dose-dependent QT prolongation: suspended in 1998 after arrhythmia deaths, reinstated across Europe with mandatory ECG monitoring — the atypical whose regulatory arc is the QT teaching story.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Sertindole — from its molecular target (D2 (antagonist) + 5-HT2A (potent antagonist); alpha-1; cardiac potassium channels (dose-related)) to clinical effect.",
    "List the FDA-approved and off-label uses of Sertindole.",
    "Predict the common and serious side effects of Sertindole from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Sertindole.",
    "Compare Sertindole with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Sertindole blocks D2 with strong 5-HT2A antagonism and alpha-1 binding — with dose-related cardiac potassium-channel effect (QT) that defines its regulation.",
    molecularTarget: "D2 (antagonist) + 5-HT2A (potent antagonist); alpha-1; cardiac potassium channels (dose-related)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Sertindole blocks D2 with strong 5-HT2A antagonism and alpha-1 binding — with dose-related cardiac potassium-channel effect (QT) that defines its regulation.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 3 days (long). — see mechanism and prescriber sections.",
    halfLife: "About 3 days (long).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Sertindole",
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
  receptors: ["D2 (antagonist)", "5-HT2A (potent antagonist)", "Alpha-1 (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia (second-line, ECG-governed, Europe)",
      status: "guideline",
      description: "For patients intolerant of other atypicals — with mandatory ECG monitoring.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Sertindole must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "All QT-prolonging drugs",
      severity: "absolute",
      rationale: "The sertindole absolute rule.",
    },
    {
      name: "CYP2D6/3A4 inhibitors (paroxetine, ketoconazole)",
      severity: "absolute",
      rationale: "Raise sertindole + QT.",
    },
    {
      name: "Haloperidol co-prescription (historic)",
      severity: "absolute",
      rationale: "QT stacking.",
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
      name: "Nasal congestion",
      frequency: "very-common",
      severity: "mild",
      description: "The signature adverse effect — alpha-1-mediated rhinitis.",
      management: "Reassurance; saline.",
    },
    {
      name: "Weight gain (modest)",
      frequency: "common",
      severity: "moderate",
      description: "Moderate metabolic profile.",
      management: "Monitor.",
    },
    {
      name: "Sedation and dizziness",
      frequency: "common",
      severity: "mild",
      description: "Alpha-1 effects.",
      management: "Reassurance.",
    },
    {
      name: "QT prolongation",
      frequency: "common",
      severity: "severe",
      description: "Dose-related — THE sertindole issue; 20-40 ms typical at clinical doses.",
      management: "Baseline ECG + steady-state + dose-change ECGs; electrolytes; QT-drug avoidance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Torsades de pointes and sudden death",
      frequency: "rare",
      severity: "life-threatening",
      description: "The reason for suspension (1998) and the monitoring-governed reinstatement.",
      management: "ECG programme; stop if QTc > 500; correct electrolytes.",
    },
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Stop; ICU.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "ECG (QTc)",
      frequency: "Baseline, steady state, and after each dose change — mandatory",
      rationale: "The reinstatement condition.",
    },
    {
      parameter: "Potassium and magnesium",
      frequency: "Baseline and when ill",
      rationale: "Electrolyte QT-amplification.",
    },
  ],
  interactions: [
    {
      drug: "All QT-prolonging drugs",
      severity: "contraindicated",
      mechanism: "The sertindole absolute rule.",
      action: "Avoid.",
    },
    {
      drug: "CYP2D6/3A4 inhibitors (paroxetine, ketoconazole)",
      severity: "contraindicated",
      mechanism: "Raise sertindole + QT.",
      action: "Avoid.",
    },
    {
      drug: "Haloperidol co-prescription (historic)",
      severity: "contraindicated",
      mechanism: "QT stacking.",
      action: "Avoid.",
    },
  ],
  pregnancy: {
    summary: "Limited data; standard antipsychotic caution plus QT considerations.",
    lactation: "Limited data.",
  },
  renalAdjustment: "No major adjustment.",
  hepaticAdjustment: "Reduce dose in hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Sertindole is a European antipsychotic reserved for people who cannot take other newer agents: it is gentle on movement but lengthens the heart's electrical reset, so regular heart tracings (ECGs) are a required part of treatment. A constantly blocked or runny nose is its most common everyday effect.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Sertindole builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The regulatory arc: launched → suspended after arrhythmia deaths (1998) → reinstated with mandatory ECGs — pharmacovigilance as a drug's biography.",
    "The nasal-congestion signature: alpha-1 rhinitis is the everyday tell that patients report.",
    "The EPS-clean QT-dirty trade: motor-sparing at the price of cardiac monitoring — the opposite of haloperidol's trade.",
    "Exam fame: sertindole = QT in the same breath — the association that outlives prescribing.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Sertindole: Sertindole blocks D2 with strong 5-HT2A antagonism and alpha-1 binding — with dose-related cardiac potassium-channel effect (QT) that defines its regulation.",
        "Uses of Sertindole: Schizophrenia (second-line, ECG-governed, Europe)",
        "Mechanism: D2 + POTENT 5-HT2A antagonist with alpha-1 and cardiac K-channel effects.",
        "Signature: dose-related QT prolongation (suspended 1998, reinstated with ECG programme).",
      ],
      practical: [
        "Prescribe Sertindole for schizophrenia (second-line, ecg-governed, europe) with dose, timing, and duration.",
        "Outline the monitoring plan: ECG (QTc) (Baseline, steady state, and after each dose change — mandatory); Potassium and magnesium (Baseline and when ill)",
      ],
      longAnswer: [
        "Sertindole: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D2 + POTENT 5-HT2A antagonist with alpha-1 and cardiac K-channel effects.",
        "Signature: dose-related QT prolongation (suspended 1998, reinstated with ECG programme).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D2 + POTENT 5-HT2A antagonist with alpha-1 and cardiac K-channel effects.",
        "Signature: dose-related QT prolongation (suspended 1998, reinstated with ECG programme).",
        "Signature everyday effect: NASAL CONGESTION (alpha-1).",
        "Second-line European schizophrenia use only — ECG-governed.",
        "EPS-sparing; modest weight gain.",
        "Dose 12-20 mg/day.",
      ],
      pyqConcepts: [
        "Mechanism/target of Sertindole",
        "Key adverse effect: Torsades de pointes and sudden death",
        "Dosing and titration of Sertindole",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Sertindole develops torsades de pointes and sudden death — next best step?",
        "When to choose Sertindole over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (antagonist) + 5-HT2A (potent antagonist); alpha-1; cardiac potassium channels (dose-related)",
        "Most common side effects: Nasal congestion, Weight gain (modest), Sedation and dizziness",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The regulatory arc: launched → suspended after arrhythmia deaths (1998) → reinstated with mandatory ECGs — pharmacovigilance as a drug's biography.",
        "The nasal-congestion signature: alpha-1 rhinitis is the everyday tell that patients report.",
        "The EPS-clean QT-dirty trade: motor-sparing at the price of cardiac monitoring — the opposite of haloperidol's trade.",
        "Exam fame: sertindole = QT in the same breath — the association that outlives prescribing.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: D2 + POTENT 5-HT2A antagonist with alpha-1 and cardiac K-channel effects.",
    "Signature: dose-related QT prolongation (suspended 1998, reinstated with ECG programme).",
    "Signature everyday effect: NASAL CONGESTION (alpha-1).",
    "Second-line European schizophrenia use only — ECG-governed.",
    "EPS-sparing; modest weight gain.",
    "Dose 12-20 mg/day.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia (second-line, ecg-governed, europe)",
      presentation: "A patient presenting with schizophrenia (second-line, ecg-governed, europe), started on Sertindole.",
      history: "A adult patient presents with a schizophrenia (second-line, ecg-governed, europe) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia (second-line, ecg-governed, europe); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia (second-line, ECG-governed, Europe). Differentials are considered and excluded clinically.",
      rationale: "Sertindole is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 4 mg once daily, titrated to 12-20 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Sertindole takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Sertindole",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (antagonist) + 5-HT2A (potent antagonist); alpha-1; cardiac potassium channels (dose-related)",
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
          primaryValue: "About 3 days (long).",
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
              value: "See product information and class comparison.",
            },
            {
              drug: "Lurasidone",
              value: "See product information and class comparison.",
            },
            {
              drug: "Olanzapine",
              value: "See product information and class comparison.",
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
          primaryValue: "The QT-teaching atypical — suspended and reinstated with ECG strings",
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
      description: "Sertindole reaches peak plasma concentration and begins acting at its molecular target (D2 (antagonist) + 5-HT2A (potent antagonist); alpha-1; cardiac potassium channels (dose-related)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nasal congestion, weight gain (modest), sedation and dizziness). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Sertindole is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Sertindole take to work?",
      answer: "As with the class: 1-3 weeks at antipsychotic dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Sertindole?",
      answer: "The most frequently reported effects are: Nasal congestion, Weight gain (modest), Sedation and dizziness, QT prolongation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Sertindole suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Sertindole habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Sertindole exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Sertindole during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Sertindole may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), sertindole monograph, p. 113",
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
        source: "FDA Prescribing Information for Serdolect (Sertindole)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for sertindole — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Sertindole",
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
      name: "Schizophrenia (second-line, ECG-governed, Europe)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Sertindole",
      type: "drug",
      href: "/drugs/sertindole",
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
      label: "D2 (antagonist) + 5-HT2A (potent antagonist); alpha-1; cardiac potassium channels (dose-related)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Schizophrenia (second-line, ECG-governed, Europe)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Torsades de pointes and sudden death",
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
      label: "Nasal congestion",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Sertindole",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The QT-restricted atypical — suspended, reinstated with ECG monitoring, and forever an exam name.",
    summary: "Sertindole is a prescription medicine used to treat schizophrenia (second-line, ecg-governed, europe). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Sertindole is a European antipsychotic reserved for people who cannot take other newer agents: it is gentle on movement but lengthens the heart's electrical reset, so regular heart tracings (ECGs) are a required part of treatment. A constantly blocked or runny nose is its most common everyday effect.",
    sideEffects: "The most common side effects are: nasal congestion, weight gain (modest), sedation and dizziness, qt prolongation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Torsades de pointes and sudden death and Neuroleptic malignant syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: ecg (qtc) (baseline, steady state, and after each dose change — mandatory); potassium and magnesium (baseline and when ill). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: All QT-prolonging drugs, CYP2D6/3A4 inhibitors (paroxetine, ketoconazole), Haloperidol co-prescription (historic). Avoid alcohol unless your doctor says it is safe.",
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
      "European prescriptions continued rarely.",
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
        name: "Sertindole",
        slug: "sertindole",
        relationship: "This guide",
        distinguishing: "The QT-teaching atypical — suspended and reinstated with ECG strings",
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
      question: "Which molecular target does Sertindole primarily act on?",
      options: [
        "D2 (antagonist) + 5-HT2A (potent antagonist); alpha-1; cardiac potassium channels (dose-related)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Sertindole acts primarily at D2 (antagonist) + 5-HT2A (potent antagonist); alpha-1; cardiac potassium channels (dose-related). Sertindole blocks D2 with strong 5-HT2A antagonism and alpha-1 binding — with dose-related cardiac potassium-channel effect (QT) that defines its regulation.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Sertindole?",
      options: ["Nasal congestion", "Weight gain (modest)", "Sedation and dizziness", "QT prolongation"],
      correctIndex: 0,
      explanation: "Nasal congestion — The signature adverse effect — alpha-1-mediated rhinitis.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Sertindole for schizophrenia (ecg-governed)?",
      options: ["12-20 mg/day", "24 mg/day", "12-20 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (ecg-governed): start 4 mg once daily, target 12-20 mg/day, maximum 24 mg/day. Increase by 4 mg at 2-3 day intervals to 12-20 mg",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Sertindole in two sentences.",
      answer: "Sertindole blocks D2 with strong 5-HT2A antagonism and alpha-1 binding — with dose-related cardiac potassium-channel effect (QT) that defines its regulation. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Sertindole.",
      answer: "Schizophrenia (second-line, ECG-governed, Europe). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Sertindole and how you would manage it.",
      answer: "Torsades de pointes and sudden death: The reason for suspension (1998) and the monitoring-governed reinstatement. Management: ECG programme; stop if QTc > 500; correct electrolytes.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Sertindole require?",
      answer: "ECG (QTc) (Baseline, steady state, and after each dose change — mandatory); Potassium and magnesium (Baseline and when ill)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Sertindole that separates safe prescribers from unsafe ones.",
      answer: "The regulatory arc: launched → suspended after arrhythmia deaths (1998) → reinstated with mandatory ECGs — pharmacovigilance as a drug's biography.",
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
      checkpoint: "You now know what Sertindole is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Sertindole works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Sertindole safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Sertindole.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Sertindole with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Sertindole.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "As with the class: 1-3 weeks at antipsychotic dose.",
    ],
    ifItWorks: [
      "Continue Sertindole at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Sertindole (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Sertindole follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Schizophrenia (ECG-governed)",
        starting: "4 mg once daily",
        titration: "Increase by 4 mg at 2-3 day intervals to 12-20 mg",
        target: "12-20 mg/day",
        max: "24 mg/day",
      },
    ],
    dosageForms: ["Tablets 4, 12, 16, 20 mg"],
    dosingTips: ["The ECG programme is the prescription.", "Nasal congestion is expected.", "Electrolytes when intercurrently ill."],
    overdose: [
      "Overdose with Sertindole is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Sertindole is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 3 days (long)..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["EPS-sparing.", "Modest weight gain.", "For the intolerant-of-others niche."],
    potentialDisadvantages: [
      "QT-governed prescribing (ECG programme).",
      "Nasal congestion.",
      "The suspended-resurrected regulatory history.",
    ],
    primaryTargetSymptoms: [
      "Schizophrenia (second-line, ECG-governed)",
    ],
    pearls: [
      "The regulatory arc: launched → suspended after arrhythmia deaths (1998) → reinstated with mandatory ECGs — pharmacovigilance as a drug's biography.",
      "The nasal-congestion signature: alpha-1 rhinitis is the everyday tell that patients report.",
      "The EPS-clean QT-dirty trade: motor-sparing at the price of cardiac monitoring — the opposite of haloperidol's trade.",
      "Exam fame: sertindole = QT in the same breath — the association that outlives prescribing.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
