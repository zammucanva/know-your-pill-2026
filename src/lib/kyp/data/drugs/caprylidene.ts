import type { Drug } from "../types";

/**
 * Caprylidene — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), caprylidene monograph (book p. 19)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const caprylidene: Drug = {
  /* ---- Identity ---- */
  slug: "caprylidene",
  genericName: "Caprylidene",
  brandNames: ["Axona"],
  drugClass: "medical-food",
  drugClassLabel: "Medical Food",
  drugClassFullName: "Medical Food (Dementia)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Cognitive Enhancers", "Medical Foods", "Caprylidene"],
  /* ---- Hero / summary ---- */
  tagline: "The medical-food oddity — ketogenic metabolism support for Alzheimer's.",
  summary: "Caprylidene is a medical food (a regulated nutritional product, not a drug) for the metabolic imbalances of Alzheimer's: caprylic triglycerides converted by the liver into ketone bodies — an alternative brain fuel when glucose metabolism fails. Modest evidence, gentle intent, and a place only in Stahl's specialist appendix.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Caprylidene — from its molecular target (Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel)) to clinical effect.",
    "List the FDA-approved and off-label uses of Caprylidene.",
    "Predict the common and serious side effects of Caprylidene from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Caprylidene.",
    "Compare Caprylidene with other medical foods and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Caprylidene supplies medium-chain triglycerides that the liver converts to ketones — bypassing the brain's failing glucose metabolism in Alzheimer's.",
    molecularTarget: "Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Caprylidene supplies medium-chain triglycerides that the liver converts to ketones — bypassing the brain's failing glucose metabolism in Alzheimer's.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Absorbed as MCTs; ketosis measurable within hours. — see mechanism and prescriber sections.",
    halfLife: "Absorbed as MCTs; ketosis measurable within hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Caprylidene",
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
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel)",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Metabolic imbalances associated with mild-to-moderate Alzheimer's (dietary management)",
      status: "guideline",
      description: "As a medical food adjunct — modest evidence, glucose-metabolism rationale.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Caprylidene must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "GI upset, diarrhoea, nausea",
      frequency: "common",
      severity: "mild",
      description: "MCT digestive effects — the commonest problems.",
      management: "Take gradually with food.",
    },
    {
      name: "Flatulence",
      frequency: "common",
      severity: "mild",
      description: "Digestive effect.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Ketoacidosis risk (insulin-dependent diabetics)",
      frequency: "rare",
      severity: "severe",
      description: "Ketone-body provision in ketosis-prone patients.",
      management: "Avoid in insulin-dependent diabetes; monitor ketones.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "GI tolerance",
      frequency: "First weeks",
      rationale: "The practical limit.",
    },
  ],
  interactions: [
    {
      drug: "Insulin-dependent diabetes regimens",
      severity: "major",
      mechanism: "Ketone provision can complicate ketosis-prone patients.",
      action: "Avoid; monitor.",
    },
  ],
  pregnancy: {
    summary: "Nutritional product; standard dietary caution.",
    lactation: "Standard caution.",
  },
  renalAdjustment: "No specific adjustment.",
  hepaticAdjustment: "Hepatic conversion to ketones — caution in significant liver disease.",
  /* ---- Education ---- */
  patientExplanation: "Caprylidene is a prescription-only nutritional product (not a medicine) for Alzheimer's: it provides a type of fat the liver converts into ketones — an alternative fuel for a brain that struggles to use glucose. It is taken daily with food and is not intended to replace standard dementia medicines.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Caprylidene builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The metabolic story: the Alzheimer's brain under-uses glucose — ketones are the alternative fuel; caprylidene is the packaged ketogenic intent.",
    "Medical food ≠ drug: regulated as nutrition, evidenced as nutrition — modest claims, modest trials.",
    "Ketoacidosis caution in insulin-dependent diabetics is the one serious rule.",
    "A book-appendix drug: completeness, not advocacy.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Caprylidene: Caprylidene supplies medium-chain triglycerides that the liver converts to ketones — bypassing the brain's failing glucose metabolism in Alzheimer's.",
        "Uses of Caprylidene: Metabolic imbalances associated with mild-to-moderate Alzheimer's (dietary management)",
        "Medical food — caprylic triglycerides → hepatic ketogenesis.",
        "Rationale: alternative brain fuel when glucose metabolism fails in Alzheimer's.",
      ],
      practical: [
        "Prescribe Caprylidene for metabolic imbalances associated with mild-to-moderate alzheimer's (dietary management) with dose, timing, and duration.",
        "Outline the monitoring plan: GI tolerance (First weeks)",
      ],
      longAnswer: [
        "Caprylidene: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Medical food — caprylic triglycerides → hepatic ketogenesis.",
        "Rationale: alternative brain fuel when glucose metabolism fails in Alzheimer's.",
      ],
    },
    neetPg: {
      highYield: [
        "Medical food — caprylic triglycerides → hepatic ketogenesis.",
        "Rationale: alternative brain fuel when glucose metabolism fails in Alzheimer's.",
        "Modest evidence; adjunct-only intent.",
        "Avoid in insulin-dependent diabetes (ketoacidosis).",
        "GI tolerance is the practical limit.",
      ],
      pyqConcepts: [
        "Mechanism/target of Caprylidene",
        "Key adverse effect: Ketoacidosis risk (insulin-dependent diabetics)",
        "Dosing and titration of Caprylidene",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Caprylidene develops ketoacidosis risk (insulin-dependent diabetics) — next best step?",
        "When to choose Caprylidene over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel)",
        "Most common side effects: GI upset, diarrhoea, nausea, Flatulence",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The metabolic story: the Alzheimer's brain under-uses glucose — ketones are the alternative fuel; caprylidene is the packaged ketogenic intent.",
        "Medical food ≠ drug: regulated as nutrition, evidenced as nutrition — modest claims, modest trials.",
        "Ketoacidosis caution in insulin-dependent diabetics is the one serious rule.",
        "A book-appendix drug: completeness, not advocacy.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Medical food — caprylic triglycerides → hepatic ketogenesis.",
    "Rationale: alternative brain fuel when glucose metabolism fails in Alzheimer's.",
    "Modest evidence; adjunct-only intent.",
    "Avoid in insulin-dependent diabetes (ketoacidosis).",
    "GI tolerance is the practical limit.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — metabolic imbalances associated with mild-to-moderate alzheimer's (dietary management)",
      presentation: "A patient presenting with metabolic imbalances associated with mild-to-moderate alzheimer's (dietary management), started on Caprylidene.",
      history: "A adult patient presents with a metabolic imbalances associated with mild-to-moderate alzheimer's (dietary management) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with metabolic imbalances associated with mild-to-moderate alzheimer's (dietary management); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Metabolic imbalances associated with mild-to-moderate Alzheimer's (dietary management). Differentials are considered and excluded clinically.",
      rationale: "Caprylidene is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Medical Food) with strong evidence in this condition.",
      management: "Started at One 40 g scoop daily with food, titrated to 40 g/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Caprylidene takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Medical Food vs related agents — orientation table",
      primaryDrug: "Caprylidene",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel)",
          comparisons: [
            {
              drug: "L-Methylfolate",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not typically associated with weight change.",
          comparisons: [
            {
              drug: "L-Methylfolate",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "L-Methylfolate",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The ketogenic medical food — metabolic support intent",
          comparisons: [
            {
              drug: "L-Methylfolate",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Caprylidene is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Caprylidene reaches peak plasma concentration and begins acting at its molecular target (Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (gi upset, diarrhoea, nausea, flatulence). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Ketone availability within hours; clinical claims over months.)",
      title: "Therapeutic effect builds",
      description: "Ketone availability within hours; clinical claims over months. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Caprylidene is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Caprylidene take to work?",
      answer: "Ketone availability within hours; clinical claims over months.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Caprylidene?",
      answer: "The most frequently reported effects are: GI upset, diarrhoea, nausea, Flatulence. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Caprylidene suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Caprylidene habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Caprylidene exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Caprylidene during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Caprylidene may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for MDD",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), caprylidene monograph, p. 19",
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
        source: "FDA Prescribing Information for Axona (Caprylidene)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for caprylidene — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Caprylidene",
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
      name: "L-Methylfolate",
      slug: "l-methylfolate",
      drugClass: "Medical Food",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Metabolic imbalances associated with mild-to-moderate Alzheimer's (dietary management)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Caprylidene",
      type: "drug",
      href: "/drugs/caprylidene",
      note: "The drug you're reading about",
    },
    {
      label: "Medical Food",
      type: "class",
      href: "#mechanism",
      note: "Medical Food (Dementia)",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Metabolic imbalances associated with mild-to-moderate Alzheimer's (dietary management)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Ketoacidosis risk (insulin-dependent diabetics)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "GI upset, diarrhoea, nausea",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Caprylidene",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The medical-food oddity — ketogenic metabolism support for Alzheimer's.",
    summary: "Caprylidene is a prescription medicine used to treat metabolic imbalances associated with mild-to-moderate alzheimer's (dietary management). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Caprylidene is a prescription-only nutritional product (not a medicine) for Alzheimer's: it provides a type of fat the liver converts into ketones — an alternative fuel for a brain that struggles to use glucose. It is taken daily with food and is not intended to replace standard dementia medicines.",
    sideEffects: "The most common side effects are: gi upset, diarrhoea, nausea, flatulence. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Ketoacidosis risk (insulin-dependent diabetics). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: gi tolerance (first weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Insulin-dependent diabetes regimens. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Prescription Only",
    brands: [
      {
        name: "Not marketed in India)",
        manufacturer: "—",
        strengths: "—",
      },
    ],
    typicalDoses: "—",
    prescribingScenarios: ["Completeness entry."],
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
    familyName: "Medical Foods",
    members: [
      {
        name: "Caprylidene",
        slug: "caprylidene",
        relationship: "This guide",
        distinguishing: "The ketogenic medical food — metabolic support intent",
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
      question: "Which molecular target does Caprylidene primarily act on?",
      options: [
        "Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Caprylidene acts primarily at Caprylic triglycerides → hepatic ketogenesis (alternative brain fuel). Caprylidene supplies medium-chain triglycerides that the liver converts to ketones — bypassing the brain's failing glucose metabolism in Alzheimer's.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Caprylidene?",
      options: ["GI upset, diarrhoea, nausea", "Flatulence", "Weight gain", "Hair loss"],
      correctIndex: 0,
      explanation: "GI upset, diarrhoea, nausea — MCT digestive effects — the commonest problems.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Caprylidene for medical food (dietary management)?",
      options: ["40 g/day", "40 g/day (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For medical food (dietary management): start One 40 g scoop daily with food, target 40 g/day, maximum 40 g/day. Titrate GI tolerance over a week",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Caprylidene in two sentences.",
      answer: "Caprylidene supplies medium-chain triglycerides that the liver converts to ketones — bypassing the brain's failing glucose metabolism in Alzheimer's. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Caprylidene.",
      answer: "Metabolic imbalances associated with mild-to-moderate Alzheimer's (dietary management). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Caprylidene and how you would manage it.",
      answer: "Ketoacidosis risk (insulin-dependent diabetics): Ketone-body provision in ketosis-prone patients. Management: Avoid in insulin-dependent diabetes; monitor ketones.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Caprylidene require?",
      answer: "GI tolerance (First weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Caprylidene that separates safe prescribers from unsafe ones.",
      answer: "The metabolic story: the Alzheimer's brain under-uses glucose — ketones are the alternative fuel; caprylidene is the packaged ketogenic intent.",
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
      checkpoint: "You now know what Caprylidene is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Caprylidene works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Caprylidene safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Caprylidene.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Caprylidene with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Caprylidene.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Ketone availability within hours; clinical claims over months.",
    ],
    ifItWorks: [
      "Continue Caprylidene at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Caprylidene (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Caprylidene follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Not typically associated with weight change.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Medical food (dietary management)",
        starting: "One 40 g scoop daily with food",
        titration: "Titrate GI tolerance over a week",
        target: "40 g/day",
        max: "40 g/day",
      },
    ],
    dosageForms: ["Powder (40 g sachets)"],
    dosingTips: [
      "Gradual introduction with food for GI tolerance.",
      "Keep in perspective: adjunct at most.",
    ],
    overdose: [
      "Overdose with Caprylidene is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Caprylidene is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Absorbed as MCTs; ketosis measurable within hours..",
      "Metabolism: Hepatic..",
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
    potentialAdvantages: ["Metabolic rationale; gentle profile.", "Ketone-based alternative fuel."],
    potentialDisadvantages: ["Modest evidence.", "Medical-food status (not drug).", "GI tolerance limits."],
    primaryTargetSymptoms: [
      "Brain metabolism support in mild-moderate Alzheimer's",
    ],
    pearls: [
      "The metabolic story: the Alzheimer's brain under-uses glucose — ketones are the alternative fuel; caprylidene is the packaged ketogenic intent.",
      "Medical food ≠ drug: regulated as nutrition, evidenced as nutrition — modest claims, modest trials.",
      "Ketoacidosis caution in insulin-dependent diabetics is the one serious rule.",
      "A book-appendix drug: completeness, not advocacy.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
