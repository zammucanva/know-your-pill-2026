import type { Drug } from "../types";

/**
 * Lorcaserin — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), lorcaserin monograph (book p. 69)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const lorcaserin: Drug = {
  /* ---- Identity ---- */
  slug: "lorcaserin",
  genericName: "Lorcaserin",
  brandNames: ["Belviq (withdrawn)"],
  drugClass: "weight-management",
  drugClassLabel: "Weight Management",
  drugClassFullName: "5-HT2C Agonist (Weight Management)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Specialised Agents", "Weight Management Agents", "Lorcaserin"],
  /* ---- Hero / summary ---- */
  tagline: "The withdrawn 5-HT2C agonist — weight pharmacology's serotonergic chapter, closed by cancer-signal analysis.",
  summary: "Lorcaserin was the selective 5-HT2C agonist for chronic weight management — pro-satiety serotonergic pharmacology without the valvular (5-HT2B) risk of fenfluramine-era drugs — withdrawn in 2020 after long-term-trial analysis suggested a small cancer-signal excess. A withdrawn-drug entry for pharmacology completeness.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Lorcaserin — from its molecular target (5-HT2C receptors (selective agonist — pro-satiety POMC-melanocortin pathway)) to clinical effect.",
    "List the FDA-approved and off-label uses of Lorcaserin.",
    "Predict the common and serious side effects of Lorcaserin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Lorcaserin.",
    "Compare Lorcaserin with other weight managements and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Lorcaserin selectively agonised 5-HT2C receptors — activating pro-satiety melanocortin pathway neurons — while avoiding 5-HT2B (the valvulopathy receptor).",
    molecularTarget: "5-HT2C receptors (selective agonist — pro-satiety POMC-melanocortin pathway)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Lorcaserin selectively agonised 5-HT2C receptors — activating pro-satiety melanocortin pathway neurons — while avoiding 5-HT2B (the valvulopathy receptor).",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 11 hours. — see mechanism and prescriber sections.",
    halfLife: "11 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Lorcaserin",
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
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: ["5-HT2C receptor (selective agonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Chronic weight management (withdrawn)",
      status: "fda-approved",
      description: "For BMI ≥ 30 or ≥ 27 with comorbidity — withdrawn after cancer-signal analysis of long-term data.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Lorcaserin must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Headache (historic)",
      frequency: "common",
      severity: "mild",
      description: "The commonest trial effect.",
      management: "—",
    },
    {
      name: "Dizziness, fatigue, nausea (historic)",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "—",
    },
  ],
  seriousSideEffects: [
    {
      name: "Cancer-signal excess in long-term follow-up",
      frequency: "uncommon",
      severity: "severe",
      description: "The withdrawal cause: pooled long-term trial analysis suggested increased cancer diagnoses — the 2020 withdrawal.",
      management: "Drug withdrawn — no management to document.",
    },
    {
      name: "Valvulopathy screening era (5-HT2B selectivity design)",
      frequency: "rare",
      severity: "severe",
      description: "Designed to AVOID fenfluramine valvulopathy — echocardiographic monitoring was the era's caution.",
      management: "—",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Clinical response and adverse effects",
      frequency: "Every review",
      rationale: "Standard psychotropic surveillance.",
    },
  ],
  interactions: [
    {
      drug: "Serotonergic drugs (SSRIs, SNRIs, MAOIs, triptans, tramadol, linezolid, methylene blue)",
      severity: "major",
      mechanism: "Additive serotonergic burden — serotonin syndrome risk.",
      action: "Educate the patient on the symptom triad (agitation, hyperreflexia, fever) and review the combination's necessity.",
    },
    {
      drug: "Strong CYP2D6 inhibitors (bupropion, fluoxetine, paroxetine)",
      severity: "moderate",
      mechanism: "Raise lorcaserin exposure by about half.",
      action: "Standard dosing usually tolerated; monitor for headache and hypoglycaemia.",
    },
    {
      drug: "Other weight-loss agents (phentermine, phentermine-topiramate)",
      severity: "moderate",
      mechanism: "Combinations not studied — additive cardiovascular and CNS effects possible.",
      action: "Avoid combining; choose one strategy at a time.",
    },
  ],
  pregnancy: {
    legacyCategory: "X (for weight use)",
    summary: "Contraindicated in pregnancy (weight indications); withdrawn entirely.",
    lactation: "Withdrawn.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Lorcaserin is a medicine used to treat chronic weight management (withdrawn). Lorcaserin selectively agonised 5-HT2C receptors — activating pro-satiety melanocortin pathway neurons — while avoiding 5-HT2B (the valvulopathy receptor). Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Lorcaserin builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The selective-agonist design: 5-HT2C for satiety while sparing 5-HT2B (the valvular receptor) — pharmacology's answer to the fenfluramine catastrophe.",
    "The withdrawal lesson: post-marketing long-term analysis found a cancer-signal excess — seven years of safe use undone by follow-up.",
    "The pharmacology exam survives: 5-HT2C → POMC → melanocortin satiety — the pathway outlives the drug.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Lorcaserin: Lorcaserin selectively agonised 5-HT2C receptors — activating pro-satiety melanocortin pathway neurons — while avoiding 5-HT2B (the valvulopathy receptor).",
        "Uses of Lorcaserin: Chronic weight management (withdrawn)",
        "Mechanism: SELECTIVE 5-HT2C agonist (POMC-melanocortin satiety pathway) — designed to spare 5-HT2B.",
        "Withdrawn 2020 after long-term cancer-signal analysis.",
      ],
      practical: [
        "Prescribe Lorcaserin for chronic weight management (withdrawn) with dose, timing, and duration.",
        "Outline the monitoring plan: Clinical response and adverse effects (Every review)",
      ],
      longAnswer: [
        "Lorcaserin: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SELECTIVE 5-HT2C agonist (POMC-melanocortin satiety pathway) — designed to spare 5-HT2B.",
        "Withdrawn 2020 after long-term cancer-signal analysis.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SELECTIVE 5-HT2C agonist (POMC-melanocortin satiety pathway) — designed to spare 5-HT2B.",
        "Withdrawn 2020 after long-term cancer-signal analysis.",
        "Historic indication: chronic weight management.",
        "The fenfluramine-era design lesson: valvulopathy avoidance by receptor selectivity.",
        "The 5-HT2C satiety pathway is the teaching that remains.",
      ],
      pyqConcepts: [
        "Mechanism/target of Lorcaserin",
        "Key adverse effect: Cancer-signal excess in long-term follow-up",
        "Dosing and titration of Lorcaserin",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Lorcaserin develops cancer-signal excess in long-term follow-up — next best step?",
        "When to choose Lorcaserin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: 5-HT2C receptors (selective agonist — pro-satiety POMC-melanocortin pathway)",
        "Most common side effects: Headache (historic), Dizziness, fatigue, nausea (historic)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The selective-agonist design: 5-HT2C for satiety while sparing 5-HT2B (the valvular receptor) — pharmacology's answer to the fenfluramine catastrophe.",
        "The withdrawal lesson: post-marketing long-term analysis found a cancer-signal excess — seven years of safe use undone by follow-up.",
        "The pharmacology exam survives: 5-HT2C → POMC → melanocortin satiety — the pathway outlives the drug.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SELECTIVE 5-HT2C agonist (POMC-melanocortin satiety pathway) — designed to spare 5-HT2B.",
    "Withdrawn 2020 after long-term cancer-signal analysis.",
    "Historic indication: chronic weight management.",
    "The fenfluramine-era design lesson: valvulopathy avoidance by receptor selectivity.",
    "The 5-HT2C satiety pathway is the teaching that remains.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — chronic weight management (withdrawn)",
      presentation: "A patient presenting with chronic weight management (withdrawn), started on Lorcaserin.",
      history: "A adult patient presents with a chronic weight management (withdrawn) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with chronic weight management (withdrawn); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Chronic weight management (withdrawn). Differentials are considered and excluded clinically.",
      rationale: "Lorcaserin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Weight Management) with strong evidence in this condition.",
      management: "Started at 10 mg twice daily, titrated to 20 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Lorcaserin takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Weight Management comparison — choosing within the class",
      primaryDrug: "Lorcaserin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "5-HT2C receptors (selective agonist — pro-satiety POMC-melanocortin pathway)",
          comparisons: [
            {
              drug: "Phentermine-Topiramate",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "11 hours.",
          comparisons: [
            {
              drug: "Phentermine-Topiramate",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Phentermine-Topiramate",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Phentermine-Topiramate",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The withdrawn serotonergic weight drug — a pharmacology chapter",
          comparisons: [
            {
              drug: "Phentermine-Topiramate",
              value: "The highest-efficacy older weight combination — pregnancy-governed",
            },
          ],
        },
      ],
      takeaway: "All weight management agents share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Lorcaserin reaches peak plasma concentration and begins acting at its molecular target (5-HT2C receptors (selective agonist — pro-satiety POMC-melanocortin pathway)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (headache (historic), dizziness, fatigue, nausea (historic)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Historic.)",
      title: "Therapeutic effect builds",
      description: "Historic. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Lorcaserin is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Lorcaserin take to work?",
      answer: "Historic.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Lorcaserin?",
      answer: "The most frequently reported effects are: Headache (historic), Dizziness, fatigue, nausea (historic). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Lorcaserin suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Lorcaserin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Lorcaserin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Lorcaserin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Lorcaserin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE NG246 (Obesity Management)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), lorcaserin monograph, p. 69",
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
        source: "FDA Prescribing Information for Belviq (withdrawn) (Lorcaserin)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for lorcaserin — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Lorcaserin",
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
      name: "Phentermine-Topiramate",
      slug: "phentermine-topiramate",
      drugClass: "Weight Management",
      relationship: "Same class (Weight Management)",
    },
  ],
  relatedConditions: [
    {
      name: "Chronic weight management (withdrawn)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Lorcaserin",
      type: "drug",
      href: "/drugs/lorcaserin",
      note: "The drug you're reading about",
    },
    {
      label: "Weight Management",
      type: "class",
      href: "#mechanism",
      note: "5-HT2C Agonist (Weight Management)",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "5-HT2C receptors (selective agonist — pro-satiety POMC-melanocortin pathway)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Chronic weight management (withdrawn)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Cancer-signal excess in long-term follow-up",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Valvulopathy screening era (5-HT2B selectivity design)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Headache (historic)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Lorcaserin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The withdrawn 5-HT2C agonist — weight pharmacology's serotonergic chapter, closed by cancer-signal analysis.",
    summary: "Lorcaserin is a prescription medicine used to treat chronic weight management (withdrawn). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Lorcaserin is a medicine used to treat chronic weight management (withdrawn). Lorcaserin selectively agonised 5-HT2C receptors — activating pro-satiety melanocortin pathway neurons — while avoiding 5-HT2B (the valvulopathy receptor). Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
    sideEffects: "The most common side effects are: headache (historic), dizziness, fatigue, nausea (historic). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Cancer-signal excess in long-term follow-up and Valvulopathy screening era (5-HT2B selectivity design). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: clinical response and adverse effects (every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: other medicines that act on the brain. Avoid alcohol unless your doctor says it is safe.",
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
    prescribingScenarios: ["Pharmacology teaching only."],
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
    familyName: "Weight Management Agents",
    members: [
      {
        name: "Lorcaserin",
        slug: "lorcaserin",
        relationship: "This guide",
        distinguishing: "The withdrawn serotonergic weight drug — a pharmacology chapter",
      },
      {
        name: "Phentermine-Topiramate",
        slug: "phentermine-topiramate",
        relationship: "Same class (Weight Management)",
        distinguishing: "The highest-efficacy older weight combination — pregnancy-governed",
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
      question: "Which molecular target does Lorcaserin primarily act on?",
      options: [
        "5-HT2C receptors (selective agonist — pro-satiety POMC-melanocortin pathway)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Lorcaserin acts primarily at 5-HT2C receptors (selective agonist — pro-satiety POMC-melanocortin pathway). Lorcaserin selectively agonised 5-HT2C receptors — activating pro-satiety melanocortin pathway neurons — while avoiding 5-HT2B (the valvulopathy receptor).",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Lorcaserin?",
      options: ["Headache (historic)", "Dizziness, fatigue, nausea (historic)", "Weight gain", "Hair loss"],
      correctIndex: 0,
      explanation: "Headache (historic) — The commonest trial effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Lorcaserin for chronic weight management (withdrawn)?",
      options: ["20 mg/day", "—", "20 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For chronic weight management (withdrawn): start 10 mg twice daily, target 20 mg/day, maximum —. —",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Lorcaserin in two sentences.",
      answer: "Lorcaserin selectively agonised 5-HT2C receptors — activating pro-satiety melanocortin pathway neurons — while avoiding 5-HT2B (the valvulopathy receptor). Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Lorcaserin.",
      answer: "Chronic weight management (withdrawn). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Lorcaserin and how you would manage it.",
      answer: "Cancer-signal excess in long-term follow-up: The withdrawal cause: pooled long-term trial analysis suggested increased cancer diagnoses — the 2020 withdrawal. Management: Drug withdrawn — no management to document.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Lorcaserin require?",
      answer: "Clinical response and adverse effects (Every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Lorcaserin that separates safe prescribers from unsafe ones.",
      answer: "The selective-agonist design: 5-HT2C for satiety while sparing 5-HT2B (the valvular receptor) — pharmacology's answer to the fenfluramine catastrophe.",
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
      checkpoint: "You now know what Lorcaserin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Lorcaserin works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Lorcaserin safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Lorcaserin.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Lorcaserin with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Lorcaserin.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Historic."],
    ifItWorks: [
      "Continue Lorcaserin at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Lorcaserin (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Lorcaserin follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Chronic weight management (withdrawn)",
        starting: "10 mg twice daily",
        titration: "—",
        target: "20 mg/day",
        max: "—",
      },
    ],
    dosageForms: ["Tablets 10 mg (withdrawn)"],
    dosingTips: [
      "Follow the dosing table and titration guidance for Lorcaserin.",
      "Review at 2 and 4 weeks after any dose change.",
    ],
    overdose: [
      "Overdose with Lorcaserin is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Lorcaserin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 11 hours..", "Metabolism: Hepatic.."],
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
      "The withdrawn serotonergic weight drug — a pharmacology chapter",
    ],
    potentialDisadvantages: [
      "See adverse effects section — the main disadvantages of Lorcaserin are its key side effects.",
    ],
    primaryTargetSymptoms: ["Chronic weight management (withdrawn)"],
    pearls: [
      "The selective-agonist design: 5-HT2C for satiety while sparing 5-HT2B (the valvular receptor) — pharmacology's answer to the fenfluramine catastrophe.",
      "The withdrawal lesson: post-marketing long-term analysis found a cancer-signal excess — seven years of safe use undone by follow-up.",
      "The pharmacology exam survives: 5-HT2C → POMC → melanocortin satiety — the pathway outlives the drug.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
