import type { Drug } from "../types";

/**
 * Iloperidone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), iloperidone monograph (book p. 57)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const iloperidone: Drug = {
  /* ---- Identity ---- */
  slug: "iloperidone",
  genericName: "Iloperidone",
  brandNames: ["Fanapt"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Iloperidone"],
  /* ---- Hero / summary ---- */
  tagline: "The orthostasis-first atypical — slow titration as the price of alpha-1 blockade.",
  summary: "Iloperidone is a piperidinyl-benzozazole atypical antipsychotic with D2/5-HT2A antagonism and pronounced alpha-1 blockade: its orthostatic hypotension demands slow titration from a low start — the defining practical feature — with QT caution and moderate metabolic risk completing the American-market profile.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Iloperidone — from its molecular target (D2 (antagonist) + 5-HT2A (antagonist) + alpha-1 (pronounced)) to clinical effect.",
    "List the FDA-approved and off-label uses of Iloperidone.",
    "Predict the common and serious side effects of Iloperidone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Iloperidone.",
    "Compare Iloperidone with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Iloperidone blocks D2 and 5-HT2A with marked alpha-1 antagonism — orthostasis-managed atypical pharmacology.",
    molecularTarget: "D2 (antagonist) + 5-HT2A (antagonist) + alpha-1 (pronounced)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Iloperidone blocks D2 and 5-HT2A with marked alpha-1 antagonism — orthostasis-managed atypical pharmacology.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 18-33 hours (BD dosing). — see mechanism and prescriber sections.",
    halfLife: "18-33 hours (BD dosing).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Iloperidone",
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
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)", "Norepinephrine (NE)"],
  receptors: ["D2 (antagonist)", "5-HT2A (antagonist)", "Alpha-1 (pronounced antagonism)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia (USA)",
      status: "fda-approved",
      description: "12-24 mg/day after the mandated slow titration.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Iloperidone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      name: "Orthostatic hypotension",
      frequency: "very-common",
      severity: "moderate",
      description: "The first-week defining effect — the reason titration is slow and standing is taught.",
      management: "Slow titration (the label IS the schedule); stand-slowly counselling.",
    },
    {
      name: "Dizziness and tachycardia",
      frequency: "common",
      severity: "moderate",
      description: "Alpha-1 reflex effects.",
      management: "Monitor; titration.",
    },
    {
      name: "Sedation and dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Timing.",
    },
    {
      name: "Weight gain (moderate)",
      frequency: "common",
      severity: "moderate",
      description: "Metabolic monitoring.",
      management: "Weight/lipids/glucose.",
    },
  ],
  seriousSideEffects: [
    {
      name: "QT prolongation (modest)",
      frequency: "uncommon",
      severity: "severe",
      description: "Dose-related; caution with QT drugs and CYP2D6/3A4 inhibitors.",
      management: "ECG in at-risk; avoid combinations.",
    },
    {
      name: "Syncope with injury (first weeks)",
      frequency: "uncommon",
      severity: "severe",
      description: "The orthostatic window of the titration phase.",
      management: "Slow titration; first-week standing care.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Orthostatic BP (titration weeks)",
      frequency: "Each titration visit",
      rationale: "The defining effect.",
    },
    {
      parameter: "Weight/metabolic panel",
      frequency: "Baseline and periodically",
      rationale: "Moderate metabolic risk.",
    },
  ],
  interactions: [
    {
      drug: "CYP2D6 + 3A4 combined inhibitors",
      severity: "major",
      mechanism: "Raise levels and QT.",
      action: "Halve dose; ECG.",
    },
    {
      drug: "QT-prolonging drugs",
      severity: "major",
      mechanism: "Additive.",
      action: "Avoid.",
    },
    {
      drug: "Antihypertensives",
      severity: "major",
      mechanism: "Additive hypotension — the alpha-1 interaction.",
      action: "Monitor standing BP.",
    },
  ],
  pregnancy: {
    summary: "Limited data; standard antipsychotic considerations.",
    lactation: "Limited data.",
  },
  renalAdjustment: "No adjustment.",
  hepaticAdjustment: "Reduce dose in hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Iloperidone is an American-market antipsychotic for schizophrenia. Because it can drop blood pressure on standing, it is started at a very small dose and doubled every two days — the slow build-up is a safety feature, and standing up slowly in the first weeks is the main instruction.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Iloperidone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The titration IS the drug: from 1 mg bd doubling every 2 days — the slowest mandated start among atypicals, all because of alpha-1 orthostasis.",
    "The alpha-1 explanation: iloperidone's hypotension exceeds its EPS — the mirror image of haloperidol.",
    "The 2D6/3A4 double metabolism: inhibitors raise levels (and QT) — the combination audit applies.",
    "Slow titration buys orthostatic safety at the price of a week before antipsychotic dose — plan the bridge.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Iloperidone: Iloperidone blocks D2 and 5-HT2A with marked alpha-1 antagonism — orthostasis-managed atypical pharmacology.",
        "Uses of Iloperidone: Schizophrenia (USA)",
        "Mechanism: D2/5-HT2A antagonist with PRONOUNCED alpha-1 blockade.",
        "The orthostasis-first profile — slow-doubling titration is the label.",
      ],
      practical: [
        "Prescribe Iloperidone for schizophrenia (usa) with dose, timing, and duration.",
        "Outline the monitoring plan: Orthostatic BP (titration weeks) (Each titration visit); Weight/metabolic panel (Baseline and periodically)",
      ],
      longAnswer: [
        "Iloperidone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D2/5-HT2A antagonist with PRONOUNCED alpha-1 blockade.",
        "The orthostasis-first profile — slow-doubling titration is the label.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D2/5-HT2A antagonist with PRONOUNCED alpha-1 blockade.",
        "The orthostasis-first profile — slow-doubling titration is the label.",
        "Dose 12-24 mg/day after titration; EPS modest.",
        "QT caution with 2D6/3A4 inhibitors.",
        "FDA-approved (USA); limited availability elsewhere.",
      ],
      pyqConcepts: [
        "Mechanism/target of Iloperidone",
        "Key adverse effect: QT prolongation (modest)",
        "Dosing and titration of Iloperidone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Iloperidone develops qt prolongation (modest) — next best step?",
        "When to choose Iloperidone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (antagonist) + 5-HT2A (antagonist) + alpha-1 (pronounced)",
        "Most common side effects: Orthostatic hypotension, Dizziness and tachycardia, Sedation and dry mouth",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The titration IS the drug: from 1 mg bd doubling every 2 days — the slowest mandated start among atypicals, all because of alpha-1 orthostasis.",
        "The alpha-1 explanation: iloperidone's hypotension exceeds its EPS — the mirror image of haloperidol.",
        "The 2D6/3A4 double metabolism: inhibitors raise levels (and QT) — the combination audit applies.",
        "Slow titration buys orthostatic safety at the price of a week before antipsychotic dose — plan the bridge.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: D2/5-HT2A antagonist with PRONOUNCED alpha-1 blockade.",
    "The orthostasis-first profile — slow-doubling titration is the label.",
    "Dose 12-24 mg/day after titration; EPS modest.",
    "QT caution with 2D6/3A4 inhibitors.",
    "FDA-approved (USA); limited availability elsewhere.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia (usa)",
      presentation: "A patient presenting with schizophrenia (usa), started on Iloperidone.",
      history: "A adult patient presents with a schizophrenia (usa) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia (usa); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia (USA). Differentials are considered and excluded clinically.",
      rationale: "Iloperidone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 1 mg twice daily × 3 days, titrated to 12-24 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Iloperidone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Iloperidone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (antagonist) + 5-HT2A (antagonist) + alpha-1 (pronounced)",
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
          primaryValue: "18-33 hours (BD dosing).",
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
          primaryValue: "The orthostasis-managed atypical — titration is the drug",
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
      description: "Iloperidone reaches peak plasma concentration and begins acting at its molecular target (D2 (antagonist) + 5-HT2A (antagonist) + alpha-1 (pronounced)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (orthostatic hypotension, dizziness and tachycardia, sedation and dry mouth). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Antipsychotic dose reached after the week-long titration; response 1-3 weeks after.)",
      title: "Therapeutic effect builds",
      description: "Antipsychotic dose reached after the week-long titration; response 1-3 weeks after. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Iloperidone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Iloperidone take to work?",
      answer: "Antipsychotic dose reached after the week-long titration; response 1-3 weeks after.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Iloperidone?",
      answer: "The most frequently reported effects are: Orthostatic hypotension, Dizziness and tachycardia, Sedation and dry mouth, Weight gain (moderate). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Iloperidone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Iloperidone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Iloperidone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Iloperidone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Iloperidone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), iloperidone monograph, p. 57",
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
        source: "FDA Prescribing Information for Fanapt (Iloperidone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for iloperidone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Iloperidone",
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
      name: "Schizophrenia (USA)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Iloperidone",
      type: "drug",
      href: "/drugs/iloperidone",
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
      label: "D2 (antagonist) + 5-HT2A (antagonist) + alpha-1 (pronounced)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Schizophrenia (USA)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "QT prolongation (modest)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Syncope with injury (first weeks)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Orthostatic hypotension",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Iloperidone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The orthostasis-first atypical — slow titration as the price of alpha-1 blockade.",
    summary: "Iloperidone is a prescription medicine used to treat schizophrenia (usa). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Iloperidone is an American-market antipsychotic for schizophrenia. Because it can drop blood pressure on standing, it is started at a very small dose and doubled every two days — the slow build-up is a safety feature, and standing up slowly in the first weeks is the main instruction.",
    sideEffects: "The most common side effects are: orthostatic hypotension, dizziness and tachycardia, sedation and dry mouth, weight gain (moderate). These usually appear early and many settle with time. Serious effects are uncommon but important to know: QT prolongation (modest) and Syncope with injury (first weeks). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: orthostatic bp (titration weeks) (each titration visit); weight/metabolic panel (baseline and periodically). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: CYP2D6 + 3A4 combined inhibitors, QT-prolonging drugs, Antihypertensives. Avoid alcohol unless your doctor says it is safe.",
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
    prescribingScenarios: ["US prescriptions continued rarely."],
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
        name: "Iloperidone",
        slug: "iloperidone",
        relationship: "This guide",
        distinguishing: "The orthostasis-managed atypical — titration is the drug",
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
      question: "Which molecular target does Iloperidone primarily act on?",
      options: [
        "D2 (antagonist) + 5-HT2A (antagonist) + alpha-1 (pronounced)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Iloperidone acts primarily at D2 (antagonist) + 5-HT2A (antagonist) + alpha-1 (pronounced). Iloperidone blocks D2 and 5-HT2A with marked alpha-1 antagonism — orthostasis-managed atypical pharmacology.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Iloperidone?",
      options: ["Orthostatic hypotension", "Dizziness and tachycardia", "Sedation and dry mouth", "Weight gain (moderate)"],
      correctIndex: 0,
      explanation: "Orthostatic hypotension — The first-week defining effect — the reason titration is slow and standing is taught.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Iloperidone for schizophrenia?",
      options: ["12-24 mg/day", "24 mg/day", "12-24 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia: start 1 mg twice daily × 3 days, target 12-24 mg/day, maximum 24 mg/day. Double the dose every 2 days to the target 6-12 mg bd (12-24 mg/day)",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Iloperidone in two sentences.",
      answer: "Iloperidone blocks D2 and 5-HT2A with marked alpha-1 antagonism — orthostasis-managed atypical pharmacology. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Iloperidone.",
      answer: "Schizophrenia (USA). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Iloperidone and how you would manage it.",
      answer: "QT prolongation (modest): Dose-related; caution with QT drugs and CYP2D6/3A4 inhibitors. Management: ECG in at-risk; avoid combinations.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Iloperidone require?",
      answer: "Orthostatic BP (titration weeks) (Each titration visit); Weight/metabolic panel (Baseline and periodically)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Iloperidone that separates safe prescribers from unsafe ones.",
      answer: "The titration IS the drug: from 1 mg bd doubling every 2 days — the slowest mandated start among atypicals, all because of alpha-1 orthostasis.",
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
      checkpoint: "You now know what Iloperidone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Iloperidone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Iloperidone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Iloperidone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Iloperidone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Iloperidone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Antipsychotic dose reached after the week-long titration; response 1-3 weeks after.",
    ],
    ifItWorks: [
      "Continue Iloperidone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Iloperidone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Iloperidone follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Schizophrenia",
        starting: "1 mg twice daily × 3 days",
        titration: "Double the dose every 2 days to the target 6-12 mg bd (12-24 mg/day)",
        target: "12-24 mg/day",
        max: "24 mg/day",
      },
    ],
    dosageForms: ["Tablets 1-12 mg"],
    dosingTips: [
      "The doubling schedule is non-negotiable.",
      "First-week standing counselling.",
      "2D6/3A4 audit before combining.",
    ],
    overdose: [
      "Overdose with Iloperidone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Iloperidone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 18-33 hours (BD dosing)..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["Modest EPS.", "Clean once-titrated BD dosing."],
    potentialDisadvantages: ["Orthostasis-driven slow titration.", "QT-combination cautions.", "Limited availability and experience."],
    primaryTargetSymptoms: ["Positive symptoms of schizophrenia"],
    pearls: [
      "The titration IS the drug: from 1 mg bd doubling every 2 days — the slowest mandated start among atypicals, all because of alpha-1 orthostasis.",
      "The alpha-1 explanation: iloperidone's hypotension exceeds its EPS — the mirror image of haloperidol.",
      "The 2D6/3A4 double metabolism: inhibitors raise levels (and QT) — the combination audit applies.",
      "Slow titration buys orthostatic safety at the price of a week before antipsychotic dose — plan the bridge.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
