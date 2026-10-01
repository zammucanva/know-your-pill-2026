import type { Drug } from "../types";

/**
 * Triiodothyronine (T3) — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), triiodothyronine (t3) monograph (book p. 130)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const triiodothyronine: Drug = {
  /* ---- Identity ---- */
  slug: "triiodothyronine",
  genericName: "Triiodothyronine (T3)",
  brandNames: ["Cytomel", "Thyronine (India)"],
  drugClass: "thyroid-agent",
  drugClassLabel: "T3 Augmentation",
  drugClassFullName: "Thyroid Hormone Augmentation Agent",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "Augmentation Agents", "Triiodothyronine (T3)"],
  /* ---- Hero / summary ---- */
  tagline: "The T3 augmentation trick — thyroid hormone that boosts antidepressant response.",
  summary: "Triiodothyronine (T3, liothyronine) is thyroid hormone used in psychiatry as antidepressant AUGMENTATION: adding 25-50 mcg T3 to a partially-responding antidepressant accelerates and increases response (the classic Harvard double-switch literature position), and converts non-responders to responders in a meaningful minority. Cheap, rapid, and carried by the thyrotoxicosis cautions.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Triiodothyronine (T3) — from its molecular target (Thyroid hormone receptors (T3 nuclear receptors — gene expression modulation)) to clinical effect.",
    "List the FDA-approved and off-label uses of Triiodothyronine (T3).",
    "Predict the common and serious side effects of Triiodothyronine (T3) from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Triiodothyronine (T3).",
    "Compare Triiodothyronine (T3) with other t3 augmentations and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "T3 binds nuclear thyroid receptors, modulating gene expression that enhances monoaminergic signalling and receptor sensitivity — the thyroid-brain axis used deliberately for antidepressant augmentation.",
    molecularTarget: "Thyroid hormone receptors (T3 nuclear receptors — gene expression modulation)",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "T3 binds nuclear thyroid receptors, modulating gene expression that enhances monoaminergic signalling and receptor sensitivity — the thyroid-brain axis used deliberately for antidepressant augmentation.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 1-2 days. — see mechanism and prescriber sections.",
    halfLife: "About 1-2 days.",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Triiodothyronine (T3)",
        sublabel: "Antidepressant",
        variant: "inhibit",
      },
      {
        id: "trans",
        label: "Monoamine transporter",
        sublabel: "Presynaptic reuptake pump",
        variant: "target",
      },
      {
        id: "mono",
        label: "Monoamines",
        sublabel: "Synaptic availability increases",
        variant: "output",
      },
      {
        id: "adapt",
        label: "Neuroadaptive changes",
        sublabel: "Receptor desensitisation, BDNF rise",
        variant: "process",
      },
      {
        id: "effect",
        label: "Antidepressant response",
        sublabel: "Weeks 2–6",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "trans",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "trans",
        to: "mono",
        label: "raises",
        type: "stimulate",
      },
      {
        from: "mono",
        to: "adapt",
        label: "triggers",
      },
      {
        from: "adapt",
        to: "effect",
        label: "produces",
      },
    ],
    caption: "Acute reuptake blockade within hours; clinical response after weeks of downstream adaptation — the central paradox of antidepressant pharmacology.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Thyroid axis"],
  receptors: ["T3 nuclear receptors (agonist)"],
  brainRegionIds: ["prefrontal-cortex", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Antidepressant augmentation (partial response / non-response)",
      status: "guideline",
      description: "25-50 mcg/day T3 added to an SSRI/TCA — one of the classic augmentation steps (alongside lithium).",
    },
    {
      name: "Hypothyroidism",
      status: "fda-approved",
      description: "The medical indication (usually T4 preferred).",
    },
    {
      name: "Accelerating antidepressant response",
      status: "guideline",
      description: "T3 from the start of antidepressant treatment accelerates response (the classic finding).",
    },
    {
      name: "Rapid cycling bipolar disorder (thyroid augmentation)",
      status: "off-label",
      description: "High-dose thyroid augmentation in refractory rapid cycling.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Triiodothyronine (T3) must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Palpitations and tachycardia",
      frequency: "common",
      severity: "moderate",
      description: "Mild thyrotoxic signs at augmentation doses.",
      management: "Pulse check; dose review.",
    },
    {
      name: "Tremor and nervousness",
      frequency: "common",
      severity: "mild",
      description: "Thyrotoxic texture.",
      management: "Dose reduction.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "mild",
      description: "Class effect.",
      management: "Morning dosing.",
    },
    {
      name: "Weight loss",
      frequency: "uncommon",
      severity: "mild",
      description: "Metabolic effect.",
      management: "Monitor.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Atrial fibrillation (elderly, excessive dose)",
      frequency: "rare",
      severity: "severe",
      description: "The thyrotoxic cardiac emergency.",
      management: "ECG if palpitations; dose discipline in elderly.",
    },
    {
      name: "Osteoporosis (long-term supraphysiological dosing)",
      frequency: "uncommon",
      severity: "severe",
      description: "Chronic over-replacement erodes bone.",
      management: "Keep TSH-suppression justified and reviewed.",
    },
    {
      name: "Angina exacerbation in cardiac disease",
      frequency: "rare",
      severity: "severe",
      description: "Thyroid hormone increases cardiac demand.",
      management: "Cardiac caution.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "TSH and free T3/T4",
      frequency: "Baseline, then 4-8 weekly",
      rationale: "The augmentation discipline — keep dosing lean.",
    },
    {
      parameter: "Heart rate and rhythm (elderly)",
      frequency: "At review",
      rationale: "The thyrotoxic cardiac caution.",
    },
  ],
  interactions: [
    {
      drug: "Warfarin",
      severity: "major",
      mechanism: "Thyroid hormone potentiates anticoagulation.",
      action: "INR monitoring.",
    },
    {
      drug: "Digoxin",
      severity: "moderate",
      mechanism: "Thyroid state reduces digoxin effect — levels shift.",
      action: "Monitor.",
    },
    {
      drug: "Cholestyramine and iron/calcium supplements",
      severity: "moderate",
      mechanism: "Bind thyroid hormone in the gut — separate by hours.",
      action: "Timing counselling.",
    },
  ],
  pregnancy: {
    legacyCategory: "A",
    summary: "Thyroid hormone in pregnancy is standard endocrine care (T4 preferred); psychiatric augmentation deferred to specialist-perinatal decisions.",
    lactation: "Minimal milk concern at physiological dosing.",
  },
  renalAdjustment: "No adjustment.",
  hepaticAdjustment: "Hepatic metabolism — standard caution.",
  /* ---- Education ---- */
  patientExplanation: "Liothyronine is thyroid hormone — the body's metabolic accelerator — used in psychiatry as a well-known add-on that strengthens and speeds up antidepressant response. It is given as a small daily tablet, with pulse and thyroid blood tests during treatment; too much causes palpitations, tremor, and poor sleep.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Triiodothyronine (T3) builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The classic pairing: lithium and T3 as the two old-school augmentations — T3 is cheaper, faster, and organ-toxicity-friendlier.",
    "The acceleration finding: T3 + antidepressant from day one speeds response — the Harvard augmentation literature's second act.",
    "The TSH discipline: augmentation aims at subtle low-normal/suppressed TSH — monitor TSH and symptoms, keep doses lean.",
    "The rapid-cycling niche: high-dose thyroid in refractory rapid cycling — the endocrine lever for the hardest bipolar pattern.",
    "25 mcg is a psychiatric dose — endocrine replacement thinks in different T4-equivalents; don't confuse the dosing worlds.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Triiodothyronine (T3): T3 binds nuclear thyroid receptors, modulating gene expression that enhances monoaminergic signalling and receptor sensitivity — the thyroid-brain axis used deliberately for antidepressant augmentation.",
        "Uses of Triiodothyronine (T3): Antidepressant augmentation (partial response / non-response); Hypothyroidism; Accelerating antidepressant response; Rapid cycling bipolar disorder (thyroid augmentation)",
        "Mechanism: T3 → nuclear thyroid receptors → gene expression enhancing monoaminergic signalling.",
        "Use: antidepressant AUGMENTATION 25-50 mcg (classic step alongside lithium).",
      ],
      practical: [
        "Prescribe Triiodothyronine (T3) for antidepressant augmentation (partial response / non-response) with dose, timing, and duration.",
        "Outline the monitoring plan: TSH and free T3/T4 (Baseline, then 4-8 weekly); Heart rate and rhythm (elderly) (At review)",
      ],
      longAnswer: [
        "Triiodothyronine (T3): mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: T3 → nuclear thyroid receptors → gene expression enhancing monoaminergic signalling.",
        "Use: antidepressant AUGMENTATION 25-50 mcg (classic step alongside lithium).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: T3 → nuclear thyroid receptors → gene expression enhancing monoaminergic signalling.",
        "Use: antidepressant AUGMENTATION 25-50 mcg (classic step alongside lithium).",
        "Accelerates antidepressant response from treatment start.",
        "Signature adverse effects: palpitations, tremor, insomnia (thyrotoxic texture).",
        "Caution: AF and bone loss in the elderly at excessive doses.",
        "TSH monitoring discipline.",
      ],
      pyqConcepts: [
        "Mechanism/target of Triiodothyronine (T3)",
        "Key adverse effect: Atrial fibrillation (elderly, excessive dose)",
        "Dosing and titration of Triiodothyronine (T3)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Triiodothyronine (T3) develops atrial fibrillation (elderly, excessive dose) — next best step?",
        "When to choose Triiodothyronine (T3) over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Thyroid hormone receptors (T3 nuclear receptors — gene expression modulation)",
        "Most common side effects: Palpitations and tachycardia, Tremor and nervousness, Insomnia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The classic pairing: lithium and T3 as the two old-school augmentations — T3 is cheaper, faster, and organ-toxicity-friendlier.",
        "The acceleration finding: T3 + antidepressant from day one speeds response — the Harvard augmentation literature's second act.",
        "The TSH discipline: augmentation aims at subtle low-normal/suppressed TSH — monitor TSH and symptoms, keep doses lean.",
        "The rapid-cycling niche: high-dose thyroid in refractory rapid cycling — the endocrine lever for the hardest bipolar pattern.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: T3 → nuclear thyroid receptors → gene expression enhancing monoaminergic signalling.",
    "Use: antidepressant AUGMENTATION 25-50 mcg (classic step alongside lithium).",
    "Accelerates antidepressant response from treatment start.",
    "Signature adverse effects: palpitations, tremor, insomnia (thyrotoxic texture).",
    "Caution: AF and bone loss in the elderly at excessive doses.",
    "TSH monitoring discipline.",
    "The rapid-cycling bipolar augmentation niche.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — antidepressant augmentation (partial response / non-response)",
      presentation: "A patient presenting with antidepressant augmentation (partial response / non-response), started on Triiodothyronine (T3).",
      history: "A adult patient presents with a antidepressant augmentation (partial response / non-response) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with antidepressant augmentation (partial response / non-response); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Antidepressant augmentation (partial response / non-response). Differentials are considered and excluded clinically.",
      rationale: "Triiodothyronine (T3) is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (T3 Augmentation) with strong evidence in this condition.",
      management: "Started at 25 mcg once daily, titrated to 25-50 mcg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Triiodothyronine (T3) takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "T3 Augmentation vs related agents — orientation table",
      primaryDrug: "Triiodothyronine (T3)",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Thyroid hormone receptors (T3 nuclear receptors — gene expression modulation)",
          comparisons: [
            {
              drug: "Triiodothyronine (T3)",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
          comparisons: [
            {
              drug: "Triiodothyronine (T3)",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Triiodothyronine (T3)",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The cheap rapid augmentation — T3's second career",
          comparisons: [
            {
              drug: "Triiodothyronine (T3)",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Triiodothyronine (T3) is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Triiodothyronine (T3) reaches peak plasma concentration and begins acting at its molecular target (Thyroid hormone receptors (T3 nuclear receptors — gene expression modulation)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (palpitations and tachycardia, tremor and nervousness, insomnia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Augmentation benefit over 1-2 weeks.)",
      title: "Therapeutic effect builds",
      description: "Augmentation benefit over 1-2 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Triiodothyronine (T3) is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Triiodothyronine (T3) take to work?",
      answer: "Augmentation benefit over 1-2 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Triiodothyronine (T3)?",
      answer: "The most frequently reported effects are: Palpitations and tachycardia, Tremor and nervousness, Insomnia, Weight loss. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Triiodothyronine (T3) suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Triiodothyronine (T3) habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Triiodothyronine (T3) exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Triiodothyronine (T3) during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Triiodothyronine (T3) may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for MDD (Augmentation)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), triiodothyronine (t3) monograph, p. 130",
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
        source: "FDA Prescribing Information for Cytomel (Triiodothyronine (T3))",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for triiodothyronine (t3) — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Triiodothyronine (T3)",
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/medication-guides",
      },
      {
        source: "NIMH — Mental Health Medications",
        url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
      },
    ],
  },
  relatedDrugs: [],
  relatedConditions: [
    {
      name: "Antidepressant augmentation (partial response / non-response)",
      relationship: "alternative",
    },
    {
      name: "Hypothyroidism",
      relationship: "primary",
    },
    {
      name: "Accelerating antidepressant response",
      relationship: "alternative",
    },
    {
      name: "Rapid cycling bipolar disorder (thyroid augmentation)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Triiodothyronine (T3)",
      type: "drug",
      href: "/drugs/triiodothyronine",
      note: "The drug you're reading about",
    },
    {
      label: "T3 Augmentation",
      type: "class",
      href: "#mechanism",
      note: "Thyroid Hormone Augmentation Agent",
    },
    {
      label: "Thyroid axis",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Thyroid hormone receptors (T3 nuclear receptors — gene expression modulation)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Antidepressant augmentation (partial response / non-response)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hypothyroidism",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Accelerating antidepressant response",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Atrial fibrillation (elderly, excessive dose)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Osteoporosis (long-term supraphysiological dosing)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Palpitations and tachycardia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Triiodothyronine (T3)",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The T3 augmentation trick — thyroid hormone that boosts antidepressant response.",
    summary: "Triiodothyronine (T3) is a prescription medicine used to treat antidepressant augmentation (partial response / non-response). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Liothyronine is thyroid hormone — the body's metabolic accelerator — used in psychiatry as a well-known add-on that strengthens and speeds up antidepressant response. It is given as a small daily tablet, with pulse and thyroid blood tests during treatment; too much causes palpitations, tremor, and poor sleep.",
    sideEffects: "The most common side effects are: palpitations and tachycardia, tremor and nervousness, insomnia, weight loss. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Atrial fibrillation (elderly, excessive dose) and Osteoporosis (long-term supraphysiological dosing). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: tsh and free t3/t4 (baseline, then 4-8 weekly); heart rate and rhythm (elderly) (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Warfarin, Digoxin, Cholestyramine and iron/calcium supplements. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Thyronine / Thyronorm-25/50 (T3/T4 preparations)",
        manufacturer: "Abbott/generics",
        strengths: "25, 50 mcg (T3 content varies by product)",
      },
      {
        name: "Cytomel-liothyronine (imported)",
        manufacturer: "limited",
        strengths: "5-50 mcg",
      },
    ],
    typicalDoses: "Augmentation 25-50 mcg T3 daily.",
    prescribingScenarios: [
      "The budget augmentation in Indian practice.",
      "Rapid-cycling thyroid protocols in tertiary care.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "TSH 4-8 weekly; HR at review.",
    patientCounselling: ["Morning dose; report palpitations.", "Blood tests are part of the treatment."],
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
    familyName: "Augmentation Agents",
    members: [
      {
        name: "Triiodothyronine (T3)",
        slug: "triiodothyronine",
        relationship: "This guide",
        distinguishing: "The cheap rapid augmentation — T3's second career",
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
      question: "Which molecular target does Triiodothyronine (T3) primarily act on?",
      options: [
        "Thyroid hormone receptors (T3 nuclear receptors — gene expression modulation)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Triiodothyronine (T3) acts primarily at Thyroid hormone receptors (T3 nuclear receptors — gene expression modulation). T3 binds nuclear thyroid receptors, modulating gene expression that enhances monoaminergic signalling and receptor sensitivity — the thyroid-brain axis used deliberately for antidepressant augmentation.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Triiodothyronine (T3)?",
      options: ["Palpitations and tachycardia", "Tremor and nervousness", "Insomnia", "Weight loss"],
      correctIndex: 0,
      explanation: "Palpitations and tachycardia — Mild thyrotoxic signs at augmentation doses.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Triiodothyronine (T3) for depression augmentation?",
      options: ["25-50 mcg/day", "50 mcg/day (augmentation)", "25-50 mcg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For depression augmentation: start 25 mcg once daily, target 25-50 mcg/day, maximum 50 mcg/day (augmentation). May increase to 50 mcg after 2-4 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Triiodothyronine (T3) in two sentences.",
      answer: "T3 binds nuclear thyroid receptors, modulating gene expression that enhances monoaminergic signalling and receptor sensitivity — the thyroid-brain axis used deliberately for antidepressant augmentation. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Triiodothyronine (T3).",
      answer: "Antidepressant augmentation (partial response / non-response), Hypothyroidism, Accelerating antidepressant response, Rapid cycling bipolar disorder (thyroid augmentation). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Triiodothyronine (T3) and how you would manage it.",
      answer: "Atrial fibrillation (elderly, excessive dose): The thyrotoxic cardiac emergency. Management: ECG if palpitations; dose discipline in elderly.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Triiodothyronine (T3) require?",
      answer: "TSH and free T3/T4 (Baseline, then 4-8 weekly); Heart rate and rhythm (elderly) (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Triiodothyronine (T3) that separates safe prescribers from unsafe ones.",
      answer: "The classic pairing: lithium and T3 as the two old-school augmentations — T3 is cheaper, faster, and organ-toxicity-friendlier.",
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
      checkpoint: "You now know what Triiodothyronine (T3) is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Triiodothyronine (T3) works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Triiodothyronine (T3) safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Triiodothyronine (T3).",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Triiodothyronine (T3) with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Triiodothyronine (T3).",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Augmentation benefit over 1-2 weeks."],
    ifItWorks: [
      "Continue Triiodothyronine (T3) at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Triiodothyronine (T3) (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Triiodothyronine (T3) follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral to mild gain (agent-specific).",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Depression augmentation",
        starting: "25 mcg once daily",
        titration: "May increase to 50 mcg after 2-4 weeks",
        target: "25-50 mcg/day",
        max: "50 mcg/day (augmentation)",
      },
    ],
    dosageForms: ["Tablets 5, 25, 50 mcg"],
    dosingTips: [
      "25 mcg start; 50 mcg rarely needed.",
      "TSH discipline — augmentation, not thyrotoxicosis.",
      "Morning dosing for sleep protection.",
    ],
    overdose: [
      "Overdose with Triiodothyronine (T3) is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Triiodothyronine (T3) is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 1-2 days..", "Metabolism: Hepatic CYP metabolism.."],
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
      "Cheap, rapid, effective augmentation.",
      "The lithium-alternative augmentation step.",
      "Pregnancy-compatible at endocrine logic.",
    ],
    potentialDisadvantages: ["Thyrotoxic adverse-effect texture.", "AF/osteoporosis at excess in elderly.", "TSH monitoring duty."],
    primaryTargetSymptoms: ["Antidepressant partial response", "Rapid-cycling bipolar (adjunct)"],
    pearls: [
      "The classic pairing: lithium and T3 as the two old-school augmentations — T3 is cheaper, faster, and organ-toxicity-friendlier.",
      "The acceleration finding: T3 + antidepressant from day one speeds response — the Harvard augmentation literature's second act.",
      "The TSH discipline: augmentation aims at subtle low-normal/suppressed TSH — monitor TSH and symptoms, keep doses lean.",
      "The rapid-cycling niche: high-dose thyroid in refractory rapid cycling — the endocrine lever for the hardest bipolar pattern.",
      "25 mcg is a psychiatric dose — endocrine replacement thinks in different T4-equivalents; don't confuse the dosing worlds.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
