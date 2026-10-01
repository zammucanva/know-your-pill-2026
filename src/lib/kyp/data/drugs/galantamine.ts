import type { Drug } from "../types";

/**
 * Galantamine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), galantamine monograph (book p. 53)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const galantamine: Drug = {
  /* ---- Identity ---- */
  slug: "galantamine",
  genericName: "Galantamine",
  brandNames: ["Razadyne", "Razadyne ER", "Galamer (India)"],
  drugClass: "cholinesterase-inhibitor",
  drugClassLabel: "AChE Inhibitor",
  drugClassFullName: "Acetylcholinesterase Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Cognitive Enhancers", "Cholinesterase Inhibitors", "Galantamine"],
  /* ---- Hero / summary ---- */
  tagline: "The cholinesterase inhibitor with nicotinic modulation — the allosteric third member.",
  summary: "Galantamine is the third cholinesterase inhibitor: a competitive, reversible AChE inhibitor that ALSO allosterically modulates nicotinic receptors — theoretically enhancing cholinergic signalling two ways. Approved in mild-to-moderate Alzheimer's, it is a twice-daily (or ER once-daily) alternative with the class cholinergic profile and the class cardiac cautions.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Galantamine — from its molecular target (Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation) to clinical effect.",
    "List the FDA-approved and off-label uses of Galantamine.",
    "Predict the common and serious side effects of Galantamine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Galantamine.",
    "Compare Galantamine with other ache inhibitors and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Galantamine inhibits acetylcholinesterase AND allosterically potentiates nicotinic receptors — dual cholinergic enhancement.",
    molecularTarget: "Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Galantamine inhibits acetylcholinesterase AND allosterically potentiates nicotinic receptors — dual cholinergic enhancement.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 7 hours (IR); ER smooths to once daily. — see mechanism and prescriber sections.",
    halfLife: "About 7 hours (IR); ER smooths to once daily.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Galantamine",
        sublabel: "Cholinesterase inhibitor",
        variant: "inhibit",
      },
      {
        id: "ache",
        label: "Acetylcholinesterase",
        sublabel: "Enzyme that degrades ACh",
        variant: "target",
      },
      {
        id: "ach",
        label: "Acetylcholine",
        sublabel: "Synaptic levels rise",
        variant: "output",
      },
      {
        id: "cortex",
        label: "Cerebral cortex",
        sublabel: "Cholinergic deficit partially corrected",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "ache",
        label: "inhibits",
        type: "inhibit",
      },
      {
        from: "ache",
        to: "ach",
        label: "preserves",
        type: "stimulate",
      },
      {
        from: "ach",
        to: "cortex",
        label: "supports cognition",
      },
    ],
    caption: "Cholinesterase inhibition cannot replace lost cholinergic neurons, but amplifying remaining acetylcholine reliably modestly improves cognition and function in dementia.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Acetylcholine (ACh)"],
  receptors: [
    "Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation",
  ],
  brainRegionIds: ["hippocampus", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alzheimer's disease — mild to moderate",
      status: "fda-approved",
      description: "IR twice daily or ER once daily.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Galantamine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea and vomiting",
      frequency: "common",
      severity: "moderate",
      description: "Cholinergic GI effects — class-typical.",
      management: "With food; ER form; slow titration.",
    },
    {
      name: "Diarrhoea and anorexia",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Weight monitoring.",
    },
    {
      name: "Dizziness and headache",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Bradycardia and syncope",
      frequency: "uncommon",
      severity: "severe",
      description: "Class cardiac caution.",
      management: "Pulse; ECG if conduction disease.",
    },
    {
      name: "Peptic ulcer risk",
      frequency: "uncommon",
      severity: "severe",
      description: "Cholinergic acid stimulation.",
      management: "Caution with NSAIDs.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Pulse",
      frequency: "Every review",
      rationale: "Class caution.",
    },
    {
      parameter: "Weight",
      frequency: "Periodically",
      rationale: "GI-driven loss.",
    },
  ],
  interactions: [
    {
      drug: "Beta-blockers and digoxin",
      severity: "major",
      mechanism: "Additive bradycardia.",
      action: "Pulse monitoring.",
    },
    {
      drug: "Anticholinergics",
      severity: "major",
      mechanism: "Antagonism.",
      action: "Avoid.",
    },
    {
      drug: "Strong CYP2D6/3A4 inhibitors (ketoconazole, paroxetine)",
      severity: "major",
      mechanism: "Raise galantamine levels markedly.",
      action: "Dose review.",
    },
  ],
  pregnancy: {
    legacyCategory: "B",
    summary: "Not applicable clinically; standard caution.",
    lactation: "Not applicable.",
  },
  renalAdjustment: "Moderate impairment: max 16 mg; avoid in severe (CrCl < 9).",
  hepaticAdjustment: "Moderate impairment: max 16 mg; avoid in severe.",
  /* ---- Education ---- */
  patientExplanation: "Galantamine is one of the three standard medicines for mild-to-moderate Alzheimer's: it raises a memory-related brain chemical by blocking its breakdown and also gently enhances the receptors that respond to it. Taken once daily with food, its commonest effects are stomach upset and dizziness.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Galantamine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The nicotinic story: allosteric potentiation of nicotinic receptors is galantamine's theoretical edge — preclinical elegance, modest clinical differentiation.",
    "Weight matters: the 16→24 mg step is weight-based (≥ 50 kg for 24 mg) — one of the few weight-gated dementia doses.",
    "ER once daily transformed its tolerability — the IR twice-daily era was nausea-dominated.",
    "Modest differentiation from donepezil in practice — often chosen on cost or availability.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Galantamine: Galantamine inhibits acetylcholinesterase AND allosterically potentiates nicotinic receptors — dual cholinergic enhancement.",
        "Uses of Galantamine: Alzheimer's disease — mild to moderate",
        "Mechanism: reversible AChE inhibition + nicotinic allosteric modulation (dual).",
        "Indication: mild-to-moderate Alzheimer's.",
      ],
      practical: [
        "Prescribe Galantamine for alzheimer's disease — mild to moderate with dose, timing, and duration.",
        "Outline the monitoring plan: Pulse (Every review); Weight (Periodically)",
      ],
      longAnswer: [
        "Galantamine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: reversible AChE inhibition + nicotinic allosteric modulation (dual).",
        "Indication: mild-to-moderate Alzheimer's.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: reversible AChE inhibition + nicotinic allosteric modulation (dual).",
        "Indication: mild-to-moderate Alzheimer's.",
        "ER 8 → 16 → 24 mg once daily (4-week steps; 24 mg if ≥ 50 kg).",
        "Class cholinergic GI effects and bradycardia caution.",
        "No severe-stage or DLB/PDD approvals (unlike donepezil/rivastigmine).",
      ],
      pyqConcepts: [
        "Mechanism/target of Galantamine",
        "Key adverse effect: Bradycardia and syncope",
        "Dosing and titration of Galantamine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Galantamine develops bradycardia and syncope — next best step?",
        "When to choose Galantamine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation",
        "Most common side effects: Nausea and vomiting, Diarrhoea and anorexia, Dizziness and headache",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The nicotinic story: allosteric potentiation of nicotinic receptors is galantamine's theoretical edge — preclinical elegance, modest clinical differentiation.",
        "Weight matters: the 16→24 mg step is weight-based (≥ 50 kg for 24 mg) — one of the few weight-gated dementia doses.",
        "ER once daily transformed its tolerability — the IR twice-daily era was nausea-dominated.",
        "Modest differentiation from donepezil in practice — often chosen on cost or availability.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: reversible AChE inhibition + nicotinic allosteric modulation (dual).",
    "Indication: mild-to-moderate Alzheimer's.",
    "ER 8 → 16 → 24 mg once daily (4-week steps; 24 mg if ≥ 50 kg).",
    "Class cholinergic GI effects and bradycardia caution.",
    "No severe-stage or DLB/PDD approvals (unlike donepezil/rivastigmine).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — alzheimer's disease — mild to moderate",
      presentation: "A patient presenting with alzheimer's disease — mild to moderate, started on Galantamine.",
      history: "A adult patient presents with a alzheimer's disease — mild to moderate picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with alzheimer's disease — mild to moderate; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Alzheimer's disease — mild to moderate. Differentials are considered and excluded clinically.",
      rationale: "Galantamine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (AChE Inhibitor) with strong evidence in this condition.",
      management: "Started at 8 mg once daily × 4 weeks, titrated to 16-24 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Galantamine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "AChE Inhibitor comparison — choosing within the class",
      primaryDrug: "Galantamine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation",
          comparisons: [
            {
              drug: "Donepezil",
              value: "See full guide",
            },
            {
              drug: "Rivastigmine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 7 hours (IR); ER smooths to once daily.",
          comparisons: [
            {
              drug: "Donepezil",
              value: "—",
            },
            {
              drug: "Rivastigmine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not typically associated with weight change.",
          comparisons: [
            {
              drug: "Donepezil",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Rivastigmine",
              value: "Not typically associated with weight change.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Donepezil",
              value: "Agent-specific.",
            },
            {
              drug: "Rivastigmine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The nicotinic-modulating AChE inhibitor",
          comparisons: [
            {
              drug: "Donepezil",
              value: "The once-daily AChE inhibitor — Alzheimer's first-line",
            },
            {
              drug: "Rivastigmine",
              value: "The dual-inhibitor with the patch — and the DLB/PDD approval",
            },
          ],
        },
      ],
      takeaway: "All cholinesterase inhibitors share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Galantamine reaches peak plasma concentration and begins acting at its molecular target (Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea and vomiting, diarrhoea and anorexia, dizziness and headache). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Cognitive benefit over weeks-months.)",
      title: "Therapeutic effect builds",
      description: "Cognitive benefit over weeks-months. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Galantamine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Galantamine take to work?",
      answer: "Cognitive benefit over weeks-months.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Galantamine?",
      answer: "The most frequently reported effects are: Nausea and vomiting, Diarrhoea and anorexia, Dizziness and headache. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Galantamine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Galantamine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Galantamine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Galantamine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Galantamine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE TA217 (Alzheimer's Disease); AA AD Diagnostic Guidelines",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), galantamine monograph, p. 53",
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
        source: "FDA Prescribing Information for Razadyne (Galantamine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for galantamine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Galantamine",
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
      name: "Donepezil",
      slug: "donepezil",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
    {
      name: "Rivastigmine",
      slug: "rivastigmine",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
    {
      name: "Tacrine",
      slug: "tacrine",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
  ],
  relatedConditions: [
    {
      name: "Alzheimer's disease — mild to moderate",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Galantamine",
      type: "drug",
      href: "/drugs/galantamine",
      note: "The drug you're reading about",
    },
    {
      label: "AChE Inhibitor",
      type: "class",
      href: "#mechanism",
      note: "Acetylcholinesterase Inhibitor",
    },
    {
      label: "Acetylcholine (ACh)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Alzheimer's disease — mild to moderate",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bradycardia and syncope",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Peptic ulcer risk",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea and vomiting",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Galantamine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The cholinesterase inhibitor with nicotinic modulation — the allosteric third member.",
    summary: "Galantamine is a prescription medicine used to treat alzheimer's disease — mild to moderate. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Galantamine is one of the three standard medicines for mild-to-moderate Alzheimer's: it raises a memory-related brain chemical by blocking its breakdown and also gently enhances the receptors that respond to it. Taken once daily with food, its commonest effects are stomach upset and dizziness.",
    sideEffects: "The most common side effects are: nausea and vomiting, diarrhoea and anorexia, dizziness and headache. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Bradycardia and syncope and Peptic ulcer risk. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: pulse (every review); weight (periodically). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Beta-blockers and digoxin, Anticholinergics, Strong CYP2D6/3A4 inhibitors (ketoconazole, paroxetine). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Galamer",
        manufacturer: "Sun",
        strengths: "4-12 mg",
      },
      {
        name: "Galantamine generic",
        manufacturer: "various",
        strengths: "4-24 mg",
      },
    ],
    typicalDoses: "ER 8 → 16 → 24 mg daily.",
    prescribingScenarios: [
      "Alternative AChE inhibitor in memory clinics.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Pulse; weight.",
    patientCounselling: ["Take with food.", "Report fainting or a slow pulse."],
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
    familyName: "Cholinesterase Inhibitors",
    members: [
      {
        name: "Galantamine",
        slug: "galantamine",
        relationship: "This guide",
        distinguishing: "The nicotinic-modulating AChE inhibitor",
      },
      {
        name: "Donepezil",
        slug: "donepezil",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The once-daily AChE inhibitor — Alzheimer's first-line",
      },
      {
        name: "Rivastigmine",
        slug: "rivastigmine",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The dual-inhibitor with the patch — and the DLB/PDD approval",
      },
      {
        name: "Tacrine",
        slug: "tacrine",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The hepatotoxic QID prototype — the first Alzheimer's ChEI",
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
      question: "Which molecular target does Galantamine primarily act on?",
      options: [
        "Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Galantamine acts primarily at Acetylcholinesterase (reversible inhibition) + nicotinic receptor allosteric modulation. Galantamine inhibits acetylcholinesterase AND allosterically potentiates nicotinic receptors — dual cholinergic enhancement.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Galantamine?",
      options: ["Nausea and vomiting", "Diarrhoea and anorexia", "Dizziness and headache", "Weight gain"],
      correctIndex: 0,
      explanation: "Nausea and vomiting — Cholinergic GI effects — class-typical.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Galantamine for mild-moderate alzheimer's (er)?",
      options: ["16-24 mg/day", "24 mg/day", "16-24 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For mild-moderate alzheimer's (er): start 8 mg once daily × 4 weeks, target 16-24 mg/day, maximum 24 mg/day. Increase to 16 mg; may reach 24 mg after ≥ 4 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Galantamine in two sentences.",
      answer: "Galantamine inhibits acetylcholinesterase AND allosterically potentiates nicotinic receptors — dual cholinergic enhancement. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Galantamine.",
      answer: "Alzheimer's disease — mild to moderate. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Galantamine and how you would manage it.",
      answer: "Bradycardia and syncope: Class cardiac caution. Management: Pulse; ECG if conduction disease.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Galantamine require?",
      answer: "Pulse (Every review); Weight (Periodically)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Galantamine that separates safe prescribers from unsafe ones.",
      answer: "The nicotinic story: allosteric potentiation of nicotinic receptors is galantamine's theoretical edge — preclinical elegance, modest clinical differentiation.",
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
      checkpoint: "You now know what Galantamine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Galantamine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Galantamine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Galantamine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Galantamine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Galantamine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Cognitive benefit over weeks-months."],
    ifItWorks: [
      "Continue Galantamine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Galantamine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Galantamine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Mild-moderate Alzheimer's (ER)",
        starting: "8 mg once daily × 4 weeks",
        titration: "Increase to 16 mg; may reach 24 mg after ≥ 4 weeks",
        target: "16-24 mg/day",
        max: "24 mg/day",
      },
    ],
    dosageForms: ["ER capsules 8, 16, 24 mg", "IR tablets 4, 8, 12 mg", "Oral solution"],
    dosingTips: [
      "With food; ER preferred.",
      "4-week titration steps.",
      "The 24 mg step is weight-gated (≥ 50 kg).",
    ],
    overdose: [
      "Overdose with Galantamine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Galantamine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 7 hours (IR); ER smooths to once daily..",
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
    potentialAdvantages: [
      "Nicotinic modulation (theoretical edge).",
      "Once-daily ER.",
      "Class-standard efficacy.",
    ],
    potentialDisadvantages: ["No severe-stage or DLB approvals.", "Class GI and cardiac cautions.", "2D6/3A4 interaction surface."],
    primaryTargetSymptoms: [
      "Cognition and function in mild-moderate Alzheimer's",
    ],
    pearls: [
      "The nicotinic story: allosteric potentiation of nicotinic receptors is galantamine's theoretical edge — preclinical elegance, modest clinical differentiation.",
      "Weight matters: the 16→24 mg step is weight-based (≥ 50 kg for 24 mg) — one of the few weight-gated dementia doses.",
      "ER once daily transformed its tolerability — the IR twice-daily era was nausea-dominated.",
      "Modest differentiation from donepezil in practice — often chosen on cost or availability.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
