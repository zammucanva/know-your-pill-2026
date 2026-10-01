import type { Drug } from "../types";

/**
 * Vilazodone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), vilazodone monograph (book p. 135)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const vilazodone: Drug = {
  /* ---- Identity ---- */
  slug: "vilazodone",
  genericName: "Vilazodone",
  brandNames: ["Viibryd"],
  drugClass: "atypical-antidepressant",
  drugClassLabel: "SPARI",
  drugClassFullName: "Serotonin Partial Agonist and Reuptake Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "Atypical Antidepressants", "Vilazodone"],
  /* ---- Hero / summary ---- */
  tagline: "The SPARI — SSRI reuptake blockade plus 5-HT1A partial agonism in one molecule.",
  summary: "Vilazodone is the serotonin partial agonist and reuptake inhibitor (SPARI): SERT blockade comparable to an SSRI plus 5-HT1A partial agonism (buspirone's mechanism built in). The design aims at faster onset and lower sexual dysfunction than SSRIs; the clinical record shows solid antidepressant efficacy, a food-requirement quirk, and the class serotonergic warnings.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Vilazodone — from its molecular target (SERT (inhibition) + 5-HT1A (partial agonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Vilazodone.",
    "Predict the common and serious side effects of Vilazodone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Vilazodone.",
    "Compare Vilazodone with other sparis and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Vilazodone combines serotonin reuptake inhibition with 5-HT1A partial agonism — an SSRI with buspirone's receptor action built in.",
    molecularTarget: "SERT (inhibition) + 5-HT1A (partial agonist)",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Vilazodone combines serotonin reuptake inhibition with 5-HT1A partial agonism — an SSRI with buspirone's receptor action built in.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 25 hours (parent; 40+ with metabolite). — see mechanism and prescriber sections.",
    halfLife: "About 25 hours (parent; 40+ with metabolite).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Vilazodone",
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
  receptors: ["SERT (inhibited)", "5-HT1A (partial agonist)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder",
      status: "fda-approved",
      description: "10-40 mg once daily with food.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Vilazodone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Serotonin syndrome.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Suicidal thoughts and behaviours in children, adolescents, and young adults",
      text: "Antidepressants increased the risk of suicidal thinking and behaviour in short-term studies in children, adolescents, and young adults with MDD and other psychiatric disorders. All patients should be monitored closely for clinical worsening, suicidality, and unusual behaviour changes, especially in the first 1-2 months.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Diarrhoea",
      frequency: "very-common",
      severity: "mild",
      description: "The signature GI effect (more than SSRI-nausea).",
      management: "With food; transient.",
    },
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description: "Class effect.",
      management: "With food.",
    },
    {
      name: "Headache and insomnia",
      frequency: "common",
      severity: "mild",
      description: "Early effects.",
      management: "Reassurance.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "uncommon",
      severity: "moderate",
      description: "Lower rates than SSRIs in trial analyses — the design goal.",
      management: "Counsel; compare.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Serotonin syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Washout rules.",
    },
    {
      name: "Angle-closure glaucoma",
      frequency: "rare",
      severity: "severe",
      description: "Class report.",
      management: "Ocular history.",
    },
    {
      name: "Hyponatraemia",
      frequency: "uncommon",
      severity: "severe",
      description: "Class effect.",
      management: "Elderly sodium checks.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "GI tolerance (week 1-2)",
      frequency: "At start",
      rationale: "The diarrhoea gate.",
    },
    {
      parameter: "Mood response",
      frequency: "At 4 weeks",
      rationale: "Adequate-trial discipline.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Serotonin syndrome.",
      action: "14-day washout.",
    },
    {
      drug: "Food requirement",
      severity: "major",
      mechanism: "Absorption halves without food — a non-compliance trap.",
      action: "Counsel explicitly.",
    },
    {
      drug: "Other serotonergics and NSAIDs",
      severity: "major",
      mechanism: "Class risks.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; class considerations.",
    lactation: "Limited data.",
  },
  renalAdjustment: "No adjustment for mild-moderate impairment.",
  hepaticAdjustment: "No adjustment for mild-moderate; caution in severe.",
  /* ---- Education ---- */
  patientExplanation: "Vilazodone is a modern antidepressant that combines the action of the SSRI family with a second serotonin action borrowed from an anti-anxiety medicine — designed to improve tolerability, including sexual side effects. It must be taken with a proper meal to be absorbed, and its most common effect is diarrhoea in the early weeks.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Vilazodone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The SPARI concept: SSRI + 5-HT1A partial agonism — buspirone's mechanism inside an SSRI skeleton, aimed at onset speed and sexual tolerability.",
    "Food is pharmacology: absorption roughly doubles with food — 'take with a meal' is part of the prescription.",
    "Diarrhoea is the GI signature (vs the SSRI-nausea pattern).",
    "Sexual-sparing data are encouraging but the class warnings still apply — counsel honestly.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Vilazodone: Vilazodone combines serotonin reuptake inhibition with 5-HT1A partial agonism — an SSRI with buspirone's receptor action built in.",
        "Uses of Vilazodone: Major depressive disorder",
        "Mechanism: SPARI — SERT inhibition + 5-HT1A partial agonism.",
        "MDD 10-40 mg once daily WITH FOOD (absorption doubles with food).",
      ],
      practical: [
        "Prescribe Vilazodone for major depressive disorder with dose, timing, and duration.",
        "Outline the monitoring plan: GI tolerance (week 1-2) (At start); Mood response (At 4 weeks)",
      ],
      longAnswer: [
        "Vilazodone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SPARI — SERT inhibition + 5-HT1A partial agonism.",
        "MDD 10-40 mg once daily WITH FOOD (absorption doubles with food).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SPARI — SERT inhibition + 5-HT1A partial agonism.",
        "MDD 10-40 mg once daily WITH FOOD (absorption doubles with food).",
        "Signature adverse effect: diarrhoea.",
        "Lower sexual dysfunction than SSRIs in analyses.",
        "Class serotonergic warnings apply.",
        "Titration: 10 mg weekly steps.",
      ],
      pyqConcepts: ["Mechanism/target of Vilazodone", "Key adverse effect: Serotonin syndrome", "Dosing and titration of Vilazodone"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Vilazodone develops serotonin syndrome — next best step?",
        "When to choose Vilazodone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: SERT (inhibition) + 5-HT1A (partial agonist)",
        "Most common side effects: Diarrhoea, Nausea, Headache and insomnia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The SPARI concept: SSRI + 5-HT1A partial agonism — buspirone's mechanism inside an SSRI skeleton, aimed at onset speed and sexual tolerability.",
        "Food is pharmacology: absorption roughly doubles with food — 'take with a meal' is part of the prescription.",
        "Diarrhoea is the GI signature (vs the SSRI-nausea pattern).",
        "Sexual-sparing data are encouraging but the class warnings still apply — counsel honestly.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SPARI — SERT inhibition + 5-HT1A partial agonism.",
    "MDD 10-40 mg once daily WITH FOOD (absorption doubles with food).",
    "Signature adverse effect: diarrhoea.",
    "Lower sexual dysfunction than SSRIs in analyses.",
    "Class serotonergic warnings apply.",
    "Titration: 10 mg weekly steps.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder",
      presentation: "A patient presenting with major depressive disorder, started on Vilazodone.",
      history: "A adult patient presents with a major depressive disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder. Differentials are considered and excluded clinically.",
      rationale: "Vilazodone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SPARI) with strong evidence in this condition.",
      management: "Started at 10 mg once daily × 7 days with food, titrated to 20-40 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Vilazodone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SPARI comparison — choosing within the class",
      primaryDrug: "Vilazodone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "SERT (inhibition) + 5-HT1A (partial agonist)",
          comparisons: [
            {
              drug: "Trazodone",
              value: "See full guide",
            },
            {
              drug: "Vortioxetine",
              value: "See full guide",
            },
            {
              drug: "Nefazodone",
              value: "See full guide",
            },
            {
              drug: "Tianeptine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 25 hours (parent; 40+ with metabolite).",
          comparisons: [
            {
              drug: "Trazodone",
              value: "—",
            },
            {
              drug: "Vortioxetine",
              value: "—",
            },
            {
              drug: "Nefazodone",
              value: "—",
            },
            {
              drug: "Tianeptine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
          comparisons: [
            {
              drug: "Trazodone",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Vortioxetine",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Nefazodone",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Tianeptine",
              value: "Weight neutral to mild gain (agent-specific).",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Trazodone",
              value: "Agent-specific.",
            },
            {
              drug: "Vortioxetine",
              value: "Agent-specific.",
            },
            {
              drug: "Nefazodone",
              value: "Agent-specific.",
            },
            {
              drug: "Tianeptine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The SSRI + buspirone hybrid (SPARI)",
          comparisons: [
            {
              drug: "Trazodone",
              value: "The antidepressant sleeping pill — insomnia at 50 mg, depression at 300 mg",
            },
            {
              drug: "Vortioxetine",
              value: "The multimodal pro-cognitive antidepressant",
            },
            {
              drug: "Nefazodone",
              value: "The expert-only SARI — withdrawn for hepatotoxicity",
            },
            {
              drug: "Tianeptine",
              value: "The glutamate modulator with the opioid footnote",
            },
          ],
        },
      ],
      takeaway: "All atypical antidepressants share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Vilazodone reaches peak plasma concentration and begins acting at its molecular target (SERT (inhibition) + 5-HT1A (partial agonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (diarrhoea, nausea, headache and insomnia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Response 2-4 weeks (1-week claimed edge is unproven).)",
      title: "Therapeutic effect builds",
      description: "Response 2-4 weeks (1-week claimed edge is unproven). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Vilazodone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Vilazodone take to work?",
      answer: "Response 2-4 weeks (1-week claimed edge is unproven).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Vilazodone?",
      answer: "The most frequently reported effects are: Diarrhoea, Nausea, Headache and insomnia, Sexual dysfunction. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Vilazodone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Vilazodone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Vilazodone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Vilazodone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Vilazodone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for MDD; NICE CG91",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), vilazodone monograph, p. 135",
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
        source: "FDA Prescribing Information for Viibryd (Vilazodone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for vilazodone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Vilazodone",
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
      name: "Trazodone",
      slug: "trazodone",
      drugClass: "SARI",
      relationship: "Same class (SARI)",
    },
    {
      name: "Vortioxetine",
      slug: "vortioxetine",
      drugClass: "Multimodal Antidepressant",
      relationship: "Same class (Multimodal Antidepressant)",
    },
    {
      name: "Nefazodone",
      slug: "nefazodone",
      drugClass: "SARI",
      relationship: "Same class (SARI)",
    },
    {
      name: "Tianeptine",
      slug: "tianeptine",
      drugClass: "Atypical Antidepressant",
      relationship: "Same class (Atypical Antidepressant)",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      drugClass: "Established agent",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Major depressive disorder",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Vilazodone",
      type: "drug",
      href: "/drugs/vilazodone",
      note: "The drug you're reading about",
    },
    {
      label: "SPARI",
      type: "class",
      href: "#mechanism",
      note: "Serotonin Partial Agonist and Reuptake Inhibitor",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "SERT (inhibition) + 5-HT1A (partial agonist)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Major depressive disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Serotonin syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Angle-closure glaucoma",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Diarrhoea",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Vilazodone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The SPARI — SSRI reuptake blockade plus 5-HT1A partial agonism in one molecule.",
    summary: "Vilazodone is a prescription medicine used to treat major depressive disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Vilazodone is a modern antidepressant that combines the action of the SSRI family with a second serotonin action borrowed from an anti-anxiety medicine — designed to improve tolerability, including sexual side effects. It must be taken with a proper meal to be absorbed, and its most common effect is diarrhoea in the early weeks.",
    sideEffects: "The most common side effects are: diarrhoea, nausea, headache and insomnia, sexual dysfunction. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Serotonin syndrome and Angle-closure glaucoma. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: gi tolerance (week 1-2) (at start); mood response (at 4 weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Food requirement, Other serotonergics and NSAIDs. Avoid alcohol unless your doctor says it is safe.",
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
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Atypical Antidepressants",
    members: [
      {
        name: "Vilazodone",
        slug: "vilazodone",
        relationship: "This guide",
        distinguishing: "The SSRI + buspirone hybrid (SPARI)",
      },
      {
        name: "Trazodone",
        slug: "trazodone",
        relationship: "Same class (SARI)",
        distinguishing: "The antidepressant sleeping pill — insomnia at 50 mg, depression at 300 mg",
      },
      {
        name: "Vortioxetine",
        slug: "vortioxetine",
        relationship: "Same class (Multimodal Antidepressant)",
        distinguishing: "The multimodal pro-cognitive antidepressant",
      },
      {
        name: "Nefazodone",
        slug: "nefazodone",
        relationship: "Same class (SARI)",
        distinguishing: "The expert-only SARI — withdrawn for hepatotoxicity",
      },
      {
        name: "Tianeptine",
        slug: "tianeptine",
        relationship: "Same class (Atypical Antidepressant)",
        distinguishing: "The glutamate modulator with the opioid footnote",
      },
    ],
  },
  learningTimeBreakdown: {
    read: "14 min",
    study: "30 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Vilazodone primarily act on?",
      options: [
        "SERT (inhibition) + 5-HT1A (partial agonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Vilazodone acts primarily at SERT (inhibition) + 5-HT1A (partial agonist). Vilazodone combines serotonin reuptake inhibition with 5-HT1A partial agonism — an SSRI with buspirone's receptor action built in.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Vilazodone?",
      options: ["Diarrhoea", "Nausea", "Headache and insomnia", "Sexual dysfunction"],
      correctIndex: 0,
      explanation: "Diarrhoea — The signature GI effect (more than SSRI-nausea).",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Vilazodone for major depressive disorder?",
      options: ["20-40 mg/day", "40 mg/day", "20-40 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For major depressive disorder: start 10 mg once daily × 7 days with food, target 20-40 mg/day, maximum 40 mg/day. Increase by 10 mg weekly to 40 mg",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Vilazodone in two sentences.",
      answer: "Vilazodone combines serotonin reuptake inhibition with 5-HT1A partial agonism — an SSRI with buspirone's receptor action built in. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Vilazodone.",
      answer: "Major depressive disorder. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Vilazodone and how you would manage it.",
      answer: "Serotonin syndrome: Class risk. Management: Washout rules.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Vilazodone require?",
      answer: "GI tolerance (week 1-2) (At start); Mood response (At 4 weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Vilazodone that separates safe prescribers from unsafe ones.",
      answer: "The SPARI concept: SSRI + 5-HT1A partial agonism — buspirone's mechanism inside an SSRI skeleton, aimed at onset speed and sexual tolerability.",
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
      checkpoint: "You now know what Vilazodone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Vilazodone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Vilazodone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Vilazodone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Vilazodone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Vilazodone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Response 2-4 weeks (1-week claimed edge is unproven).",
    ],
    ifItWorks: [
      "Continue Vilazodone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Vilazodone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Vilazodone follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Major depressive disorder",
        starting: "10 mg once daily × 7 days with food",
        titration: "Increase by 10 mg weekly to 40 mg",
        target: "20-40 mg/day",
        max: "40 mg/day",
      },
    ],
    dosageForms: ["Tablets 10, 20, 40 mg"],
    dosingTips: [
      "With a real meal — not a snack.",
      "Weekly 10 mg titration steps.",
      "Frame the sexual-tolerability data honestly.",
    ],
    overdose: [
      "Overdose with Vilazodone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Vilazodone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 25 hours (parent; 40+ with metabolite)..",
      "Metabolism: Hepatic CYP metabolism..",
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
    potentialAdvantages: ["SPARI dual mechanism.", "Sexual-sparing signal.", "Once daily."],
    potentialDisadvantages: ["Food requirement.", "Diarrhoea gate.", "No proven onset advantage over SSRIs.", "Cost."],
    primaryTargetSymptoms: ["Major depression"],
    pearls: [
      "The SPARI concept: SSRI + 5-HT1A partial agonism — buspirone's mechanism inside an SSRI skeleton, aimed at onset speed and sexual tolerability.",
      "Food is pharmacology: absorption roughly doubles with food — 'take with a meal' is part of the prescription.",
      "Diarrhoea is the GI signature (vs the SSRI-nausea pattern).",
      "Sexual-sparing data are encouraging but the class warnings still apply — counsel honestly.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
