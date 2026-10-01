import type { Drug } from "../types";

/**
 * Armodafinil — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), armodafinil monograph (book p. 10)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const armodafinil: Drug = {
  /* ---- Identity ---- */
  slug: "armodafinil",
  genericName: "Armodafinil",
  brandNames: ["Nuvigil"],
  drugClass: "wake-promoting-agent",
  drugClassLabel: "Wake-Promoting Agent",
  drugClassFullName: "Wake-Promoting Agent (Dopamine Transporter Inhibitor)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Wake-Promoting Agents", "Armodafinil"],
  /* ---- Hero / summary ---- */
  tagline: "Modafinil's R-enantiomer — the same wake chemistry with later-day coverage.",
  summary: "Armodafinil is the R-enantiomer of modafinil: identical wake-promoting mechanism and indications, but with higher later-day plasma levels — producing longer afternoon/evening alertness cover, suiting patients whose sleepiness crashes in the afternoon.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Armodafinil — from its molecular target (DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer) to clinical effect.",
    "List the FDA-approved and off-label uses of Armodafinil.",
    "Predict the common and serious side effects of Armodafinil from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Armodafinil.",
    "Compare Armodafinil with other wake-promoting agents and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "The R-enantiomer of modafinil — same wake-system pharmacology with longer-lasting plasma levels through the afternoon.",
    molecularTarget: "DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer",
    effect: "Catecholamine and wake-system enhancement with the agent's characteristic profile.",
    steps: [
      "The R-enantiomer of modafinil — same wake-system pharmacology with longer-lasting plasma levels through the afternoon.",
      "Prefrontal catecholamine enhancement sharpens attention and impulse control.",
      "The agent's formulation and half-life determine practical coverage.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life ~15 hours. — see mechanism and prescriber sections.",
    halfLife: "~15 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Armodafinil",
        sublabel: "CNS stimulant",
        variant: "process",
      },
      {
        id: "da",
        label: "Dopamine",
        sublabel: "Synaptic levels rise",
        variant: "output",
      },
      {
        id: "ne",
        label: "Norepinephrine",
        sublabel: "Synaptic levels rise",
        variant: "output",
      },
      {
        id: "pfc",
        label: "Prefrontal cortex",
        sublabel: "Attention & impulse control improve",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "da",
        label: "increases",
        type: "stimulate",
      },
      {
        from: "drug",
        to: "ne",
        label: "increases",
        type: "stimulate",
      },
      {
        from: "da",
        to: "pfc",
        label: "sharpens signal",
      },
      {
        from: "ne",
        to: "pfc",
        label: "boosts alertness",
      },
    ],
    caption: "Catecholamine enhancement in the prefrontal cortex — the brain's attention control centre — corrects the signal-to-noise deficit that defines ADHD.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: ["mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Narcolepsy — excessive daytime sleepiness",
      status: "fda-approved",
      description: "As modafinil.",
    },
    {
      name: "Shift-work sleep disorder",
      status: "fda-approved",
      description: "Pre-shift dosing.",
    },
    {
      name: "OSA residual sleepiness (adjunct to CPAP)",
      status: "fda-approved",
      description: "Not a CPAP substitute.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Armodafinil must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Class precaution.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Headache",
      frequency: "very-common",
      severity: "mild",
      description: "As modafinil.",
      management: "Dose split; hydration.",
    },
    {
      name: "Nausea and insomnia",
      frequency: "common",
      severity: "mild",
      description: "As modafinil.",
      management: "With food; morning dosing.",
    },
    {
      name: "Anxiety",
      frequency: "common",
      severity: "mild",
      description: "As modafinil.",
      management: "Dose review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Serious rash (SJS/TEN)",
      frequency: "rare",
      severity: "life-threatening",
      description: "As modafinil — the class-defining warning.",
      management: "Stop on any rash.",
    },
    {
      name: "Psychiatric symptoms",
      frequency: "uncommon",
      severity: "severe",
      description: "Activation in vulnerable patients.",
      management: "Stop; reassess.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Rash counselling",
      frequency: "At initiation",
      rationale: "The defining warning.",
    },
    {
      parameter: "HR/BP",
      frequency: "Every visit",
      rationale: "Class surveillance.",
    },
  ],
  interactions: [
    {
      drug: "Hormonal contraceptives and 3A4 substrates",
      severity: "major",
      mechanism: "Induction lowers levels.",
      action: "Alternative contraception.",
    },
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Class precaution.",
      action: "Washout.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "As modafinil: effective-contraception counselling embedded.",
    lactation: "Avoid pending data.",
  },
  renalAdjustment: "No major adjustment.",
  hepaticAdjustment: "Reduce dose in hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Armodafinil is a longer-lasting form of the wake-promoting medicine modafinil: same uses, with alertness that holds better through the afternoon. The same rule applies: any rash means stopping and contacting your doctor the same day.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Armodafinil builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The enantiomer story: modafinil is racemic; armodafinil is its R-half — the afternoon-covering version.",
    "150 mg armodafinil ≈ 200 mg modafinil in clinical coverage terms.",
    "Same rash warning, same interactions, same indications — the same drug wearing longer.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Armodafinil: The R-enantiomer of modafinil — same wake-system pharmacology with longer-lasting plasma levels through the afternoon.",
        "Uses of Armodafinil: Narcolepsy — excessive daytime sleepiness; Shift-work sleep disorder; OSA residual sleepiness (adjunct to CPAP)",
        "R-enantiomer of modafinil — longer later-day plasma levels.",
        "Same indications (narcolepsy, shift-work, OSA residual).",
      ],
      practical: [
        "Prescribe Armodafinil for narcolepsy — excessive daytime sleepiness with dose, timing, and duration.",
        "Outline the monitoring plan: Rash counselling (At initiation); HR/BP (Every visit)",
      ],
      longAnswer: [
        "Armodafinil: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "R-enantiomer of modafinil — longer later-day plasma levels.",
        "Same indications (narcolepsy, shift-work, OSA residual).",
      ],
    },
    neetPg: {
      highYield: [
        "R-enantiomer of modafinil — longer later-day plasma levels.",
        "Same indications (narcolepsy, shift-work, OSA residual).",
        "150-250 mg daily ≈ modafinil 200-400 mg.",
        "Same rash and interaction profile.",
        "Half-life ~15 h — afternoon cover.",
      ],
      pyqConcepts: [
        "Mechanism/target of Armodafinil",
        "Key adverse effect: Serious rash (SJS/TEN)",
        "Dosing and titration of Armodafinil",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Armodafinil develops serious rash (sjs/ten) — next best step?",
        "When to choose Armodafinil over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer",
        "Most common side effects: Headache, Nausea and insomnia, Anxiety",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The enantiomer story: modafinil is racemic; armodafinil is its R-half — the afternoon-covering version.",
        "150 mg armodafinil ≈ 200 mg modafinil in clinical coverage terms.",
        "Same rash warning, same interactions, same indications — the same drug wearing longer.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "R-enantiomer of modafinil — longer later-day plasma levels.",
    "Same indications (narcolepsy, shift-work, OSA residual).",
    "150-250 mg daily ≈ modafinil 200-400 mg.",
    "Same rash and interaction profile.",
    "Half-life ~15 h — afternoon cover.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — narcolepsy — excessive daytime sleepiness",
      presentation: "A patient presenting with narcolepsy — excessive daytime sleepiness, started on Armodafinil.",
      history: "A adult patient presents with a narcolepsy — excessive daytime sleepiness picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with narcolepsy — excessive daytime sleepiness; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Narcolepsy — excessive daytime sleepiness. Differentials are considered and excluded clinically.",
      rationale: "Armodafinil is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Wake-Promoting Agent) with strong evidence in this condition.",
      management: "Started at 150 mg every morning, titrated to 150-250 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Armodafinil takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Wake-Promoting Agent comparison — choosing within the class",
      primaryDrug: "Armodafinil",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer",
          comparisons: [
            {
              drug: "Modafinil",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "~15 hours.",
          comparisons: [
            {
              drug: "Modafinil",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to reducing — appetite effects common.",
          comparisons: [
            {
              drug: "Modafinil",
              value: "Weight neutral to reducing — appetite effects common.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Not sedating.",
          comparisons: [
            {
              drug: "Modafinil",
              value: "Not sedating.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The afternoon-cover enantiomer of modafinil",
          comparisons: [
            {
              drug: "Modafinil",
              value: "The narcolepsy wake agent with the cleanest stimulant profile",
            },
          ],
        },
      ],
      takeaway: "All wake-promoting agents share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Armodafinil reaches peak plasma concentration and begins acting at its molecular target (DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (headache, nausea and insomnia, anxiety). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (~45-60 minutes.)",
      title: "Therapeutic effect builds",
      description: "~45-60 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Armodafinil is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Armodafinil take to work?",
      answer: "~45-60 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Armodafinil?",
      answer: "The most frequently reported effects are: Headache, Nausea and insomnia, Anxiety. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Armodafinil suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Armodafinil habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Armodafinil exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Armodafinil during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Armodafinil may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "AASM Narcolepsy Clinical Practice Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), armodafinil monograph, p. 10",
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
        source: "FDA Prescribing Information for Nuvigil (Armodafinil)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for armodafinil — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Armodafinil",
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
      name: "Modafinil",
      slug: "modafinil",
      drugClass: "Wake-Promoting Agent",
      relationship: "Same class (Wake-Promoting Agent)",
    },
  ],
  relatedConditions: [
    {
      name: "Narcolepsy — excessive daytime sleepiness",
      relationship: "primary",
    },
    {
      name: "Shift-work sleep disorder",
      relationship: "primary",
    },
    {
      name: "OSA residual sleepiness (adjunct to CPAP)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Armodafinil",
      type: "drug",
      href: "/drugs/armodafinil",
      note: "The drug you're reading about",
    },
    {
      label: "Wake-Promoting Agent",
      type: "class",
      href: "#mechanism",
      note: "Wake-Promoting Agent (Dopamine Transporter Inhibitor)",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Narcolepsy — excessive daytime sleepiness",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Shift-work sleep disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "OSA residual sleepiness (adjunct to CPAP)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Serious rash (SJS/TEN)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Psychiatric symptoms",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Headache",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Armodafinil",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Modafinil's R-enantiomer — the same wake chemistry with later-day coverage.",
    summary: "Armodafinil is a prescription medicine used to treat narcolepsy — excessive daytime sleepiness. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Armodafinil is a longer-lasting form of the wake-promoting medicine modafinil: same uses, with alertness that holds better through the afternoon. The same rule applies: any rash means stopping and contacting your doctor the same day.",
    sideEffects: "The most common side effects are: headache, nausea and insomnia, anxiety. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Serious rash (SJS/TEN) and Psychiatric symptoms. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: rash counselling (at initiation); hr/bp (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Hormonal contraceptives and 3A4 substrates, MAOIs. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Armodafinil (limited)",
        manufacturer: "imported/special",
        strengths: "50-250 mg",
      },
    ],
    typicalDoses: "150-250 mg morning.",
    prescribingScenarios: [
      "Afternoon sleepiness in narcolepsy/shift-work.",
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
    familyName: "Wake-Promoting Agents",
    members: [
      {
        name: "Armodafinil",
        slug: "armodafinil",
        relationship: "This guide",
        distinguishing: "The afternoon-cover enantiomer of modafinil",
      },
      {
        name: "Modafinil",
        slug: "modafinil",
        relationship: "Same class (Wake-Promoting Agent)",
        distinguishing: "The narcolepsy wake agent with the cleanest stimulant profile",
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
      question: "Which molecular target does Armodafinil primarily act on?",
      options: [
        "DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Armodafinil acts primarily at DAT (weak inhibition) + orexin/histamine wake systems — R-enantiomer. The R-enantiomer of modafinil — same wake-system pharmacology with longer-lasting plasma levels through the afternoon.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Armodafinil?",
      options: ["Headache", "Nausea and insomnia", "Anxiety", "Weight gain"],
      correctIndex: 0,
      explanation: "Headache — As modafinil.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Armodafinil for narcolepsy/osa?",
      options: ["150-250 mg/day", "250 mg/day", "150-250 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For narcolepsy/osa: start 150 mg every morning, target 150-250 mg/day, maximum 250 mg/day. Increase to 250 mg if needed",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Armodafinil in two sentences.",
      answer: "The R-enantiomer of modafinil — same wake-system pharmacology with longer-lasting plasma levels through the afternoon. Net effect: Catecholamine and wake-system enhancement with the agent's characteristic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Armodafinil.",
      answer: "Narcolepsy — excessive daytime sleepiness, Shift-work sleep disorder, OSA residual sleepiness (adjunct to CPAP). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Armodafinil and how you would manage it.",
      answer: "Serious rash (SJS/TEN): As modafinil — the class-defining warning. Management: Stop on any rash.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Armodafinil require?",
      answer: "Rash counselling (At initiation); HR/BP (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Armodafinil that separates safe prescribers from unsafe ones.",
      answer: "The enantiomer story: modafinil is racemic; armodafinil is its R-half — the afternoon-covering version.",
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
      checkpoint: "You now know what Armodafinil is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Armodafinil works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Armodafinil safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Armodafinil.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Armodafinil with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Armodafinil.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["~45-60 minutes."],
    ifItWorks: [
      "Continue Armodafinil at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Armodafinil (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Armodafinil follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral to reducing — appetite effects common.",
    sedation: "Not sedating.",
    dosing: [
      {
        indication: "Narcolepsy/OSA",
        starting: "150 mg every morning",
        titration: "Increase to 250 mg if needed",
        target: "150-250 mg/day",
        max: "250 mg/day",
      },
      {
        indication: "Shift-work disorder",
        starting: "150 mg pre-shift",
        titration: "As needed",
        target: "150 mg",
        max: "250 mg",
      },
    ],
    dosageForms: ["Tablets 50, 100, 150, 200, 250 mg"],
    dosingTips: [
      "Choose for afternoon-crash sleepiness; modafinil for morning-dominant.",
      "150 mg ≈ 200 mg modafinil.",
    ],
    overdose: [
      "Overdose with Armodafinil is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Armodafinil is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: ~15 hours..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["Longer afternoon cover.", "Once daily."],
    potentialDisadvantages: ["Cost vs modafinil generics.", "Same rash warning and interactions."],
    primaryTargetSymptoms: ["Afternoon-dominant excessive sleepiness"],
    pearls: [
      "The enantiomer story: modafinil is racemic; armodafinil is its R-half — the afternoon-covering version.",
      "150 mg armodafinil ≈ 200 mg modafinil in clinical coverage terms.",
      "Same rash warning, same interactions, same indications — the same drug wearing longer.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
