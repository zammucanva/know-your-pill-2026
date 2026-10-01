import type { Drug } from "../types";

/**
 * Memantine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), memantine monograph (book p. 73)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const memantine: Drug = {
  /* ---- Identity ---- */
  slug: "memantine",
  genericName: "Memantine",
  brandNames: ["Namenda", "Namenda XR", "Almenta / Admenta (India)"],
  drugClass: "nmda-antagonist",
  drugClassLabel: "NMDA Antagonist",
  drugClassFullName: "NMDA Receptor Antagonist (Dementia)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Cognitive Enhancers", "NMDA Antagonists", "Memantine"],
  /* ---- Hero / summary ---- */
  tagline: "The NMDA modulator — glutamate noise-reduction for moderate-to-severe Alzheimer's.",
  summary: "Memantine is a low-affinity use-dependent NMDA receptor antagonist that reduces pathological glutamate noise (excitotoxicity) without blocking normal transmission: approved for moderate-to-severe Alzheimer's, where it slows functional decline, combines with donepezil for added benefit, and is famously well tolerated — dizziness and confusion the main limits.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Memantine — from its molecular target (NMDA receptor (low-affinity use-dependent antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Memantine.",
    "Predict the common and serious side effects of Memantine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Memantine.",
    "Compare Memantine with other nmda antagonists and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Memantine blocks NMDA receptors only under pathological tonic glutamate exposure — reducing excitotoxic noise while sparing normal synaptic signalling.",
    molecularTarget: "NMDA receptor (low-affinity use-dependent antagonist)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Memantine blocks NMDA receptors only under pathological tonic glutamate exposure — reducing excitotoxic noise while sparing normal synaptic signalling.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 60-100 hours. — see mechanism and prescriber sections.",
    halfLife: "60-100 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Memantine",
        sublabel: "NMDA receptor antagonist",
        variant: "inhibit",
      },
      {
        id: "nmda",
        label: "NMDA receptor",
        sublabel: "Glutamate-gated Ca²⁺ channel",
        variant: "target",
      },
      {
        id: "glu",
        label: "Glutamate",
        sublabel: "Excitatory tone rebalanced",
        variant: "process",
      },
      {
        id: "syn",
        label: "Synaptic plasticity",
        sublabel: "Rapid antidepressant / neuroprotective effect",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "nmda",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "nmda",
        to: "glu",
        label: "modulates",
      },
      {
        from: "glu",
        to: "syn",
        label: "restores plasticity",
        type: "stimulate",
      },
    ],
    caption: "NMDA antagonism rebalances glutamate signalling — the pathway that can produce antidepressant effects within hours rather than weeks.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Glutamate"],
  receptors: [
    "NMDA receptor (low-affinity use-dependent antagonist)",
  ],
  brainRegionIds: ["hippocampus", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alzheimer's disease — moderate to severe",
      status: "fda-approved",
      description: "Monotherapy or added to cholinesterase inhibitors; slows functional decline.",
    },
    {
      name: "Alzheimer's — mild (off-label/debated)",
      status: "off-label",
      description: "Evidence weaker at mild stage; several guidelines discourage routine use.",
    },
    {
      name: "Vascular dementia and other dementias",
      status: "off-label",
      description: "Selected use.",
    },
    {
      name: "Reduction of opioid-induced tolerance/hyperalgesia (adjunct)",
      status: "off-label",
      description: "NMDA-based analgesic augmentation.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Memantine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "The most common adverse effect.",
      management: "Dose review; reassurance.",
    },
    {
      name: "Headache and confusion",
      frequency: "common",
      severity: "mild",
      description: "Usually mild; confusion deserves dose review.",
      management: "Slow titration.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "mild",
      description: "Class effect.",
      management: "Bowel routine.",
    },
    {
      name: "Hypertension (small rise)",
      frequency: "uncommon",
      severity: "moderate",
      description: "BP monitoring worthwhile.",
      management: "Check BP periodically.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Renal accumulation delirium (severe impairment)",
      frequency: "uncommon",
      severity: "severe",
      description: "Renally cleared — severe impairment raises levels causing confusion.",
      management: "Halve dose in severe impairment; confusion review.",
    },
    {
      name: "Seizures (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Reported in predisposed patients.",
      management: "Caution in epilepsy.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Renal function",
      frequency: "Baseline and periodically",
      rationale: "Dosing determinant.",
    },
    {
      parameter: "Blood pressure",
      frequency: "Periodically",
      rationale: "Small mean rise.",
    },
    {
      parameter: "Cognition and function scores",
      frequency: "Every 6 months",
      rationale: "Response tracking.",
    },
  ],
  interactions: [
    {
      drug: "Other NMDA antagonists (ketamine, dextromethorphan)",
      severity: "major",
      mechanism: "Additive NMDA blockade — delirium risk.",
      action: "Avoid combinations.",
    },
    {
      drug: "Metformin and drugs raising memantine (cimetidine, ranitidine class)",
      severity: "minor",
      mechanism: "Raise memantine levels.",
      action: "Awareness.",
    },
    {
      drug: "Urine-alkalinising drugs (carbonic anhydrase inhibitors, sodium bicarbonate)",
      severity: "major",
      mechanism: "Alkaline urine reduces renal clearance — levels rise.",
      action: "Monitor for confusion.",
    },
  ],
  pregnancy: {
    legacyCategory: "B",
    summary: "Not applicable clinically; standard caution.",
    lactation: "Excreted in milk in animals; not applicable clinically.",
  },
  renalAdjustment: "Halve dose in severe renal impairment (CrCl < 30).",
  hepaticAdjustment: "No specific adjustment.",
  /* ---- Education ---- */
  patientExplanation: "Memantine protects brain cells from overstimulation by a chemical called glutamate, which in excess acts like static that drowns out signals. It is used in moderate-to-severe Alzheimer's, usually alongside donepezil, and can keep daily function steadier for longer. The dose is built up slowly over several weeks; dizziness is its commonest effect.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Memantine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The noise-reduction metaphor: memantine turns down the pathological glutamate static without silencing the signal — the cleanest explanation of use-dependent blockade.",
    "The ADD combination: memantine + donepezil outperforms donepezil alone in moderate-severe disease — the standard duo.",
    "Weeks-long titration is tolerability, not kinetics — rushing produces dizziness and confusion.",
    "Mild-stage use is contested: the trials were negative-to-weak; several guidelines now discourage it.",
    "Renal dosing: severe impairment halves the dose — confusion on memantine is usually accumulation.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Memantine: Memantine blocks NMDA receptors only under pathological tonic glutamate exposure — reducing excitotoxic noise while sparing normal synaptic signalling.",
        "Uses of Memantine: Alzheimer's disease — moderate to severe; Alzheimer's — mild (off-label/debated); Vascular dementia and other dementias; Reduction of opioid-induced tolerance/hyperalgesia (adjunct)",
        "Mechanism: low-affinity USE-DEPENDENT NMDA antagonist — pathological-glutamate noise reduction.",
        "Indication: MODERATE-TO-SEVERE Alzheimer's (mono or added to AChE inhibitors).",
      ],
      practical: [
        "Prescribe Memantine for alzheimer's disease — moderate to severe with dose, timing, and duration.",
        "Outline the monitoring plan: Renal function (Baseline and periodically); Blood pressure (Periodically); Cognition and function scores (Every 6 months)",
      ],
      longAnswer: [
        "Memantine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: low-affinity USE-DEPENDENT NMDA antagonist — pathological-glutamate noise reduction.",
        "Indication: MODERATE-TO-SEVERE Alzheimer's (mono or added to AChE inhibitors).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: low-affinity USE-DEPENDENT NMDA antagonist — pathological-glutamate noise reduction.",
        "Indication: MODERATE-TO-SEVERE Alzheimer's (mono or added to AChE inhibitors).",
        "The standard duo: memantine + donepezil in moderate-severe disease.",
        "Titration: 5 mg steps weekly to 10 mg bd (20 mg XR).",
        "Renal clearance — halve dose in severe impairment (confusion = accumulation).",
        "Well tolerated: dizziness and confusion the main limits.",
      ],
      pyqConcepts: [
        "Mechanism/target of Memantine",
        "Key adverse effect: Renal accumulation delirium (severe impairment)",
        "Dosing and titration of Memantine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Memantine develops renal accumulation delirium (severe impairment) — next best step?",
        "When to choose Memantine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: NMDA receptor (low-affinity use-dependent antagonist)",
        "Most common side effects: Dizziness, Headache and confusion, Constipation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The noise-reduction metaphor: memantine turns down the pathological glutamate static without silencing the signal — the cleanest explanation of use-dependent blockade.",
        "The ADD combination: memantine + donepezil outperforms donepezil alone in moderate-severe disease — the standard duo.",
        "Weeks-long titration is tolerability, not kinetics — rushing produces dizziness and confusion.",
        "Mild-stage use is contested: the trials were negative-to-weak; several guidelines now discourage it.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: low-affinity USE-DEPENDENT NMDA antagonist — pathological-glutamate noise reduction.",
    "Indication: MODERATE-TO-SEVERE Alzheimer's (mono or added to AChE inhibitors).",
    "The standard duo: memantine + donepezil in moderate-severe disease.",
    "Titration: 5 mg steps weekly to 10 mg bd (20 mg XR).",
    "Renal clearance — halve dose in severe impairment (confusion = accumulation).",
    "Well tolerated: dizziness and confusion the main limits.",
    "Mild-stage use discouraged by evidence.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — alzheimer's disease — moderate to severe",
      presentation: "A patient presenting with alzheimer's disease — moderate to severe, started on Memantine.",
      history: "A adult patient presents with a alzheimer's disease — moderate to severe picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with alzheimer's disease — moderate to severe; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Alzheimer's disease — moderate to severe. Differentials are considered and excluded clinically.",
      rationale: "Memantine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (NMDA Antagonist) with strong evidence in this condition.",
      management: "Started at 5 mg once daily week 1, titrated to 10 mg bd / 20 mg XR daily with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Memantine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "NMDA Antagonist vs related agents — orientation table",
      primaryDrug: "Memantine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "NMDA receptor (low-affinity use-dependent antagonist)",
          comparisons: [
            {
              drug: "Ketamine",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not typically associated with weight change.",
          comparisons: [
            {
              drug: "Ketamine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Ketamine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The glutamate-side dementia drug — moderate-severe stage",
          comparisons: [
            {
              drug: "Ketamine",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Memantine is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Memantine reaches peak plasma concentration and begins acting at its molecular target (NMDA receptor (low-affinity use-dependent antagonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (dizziness, headache and confusion, constipation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Benefit over weeks-months; titration 4 weeks to target.)",
      title: "Therapeutic effect builds",
      description: "Benefit over weeks-months; titration 4 weeks to target. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Memantine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Memantine take to work?",
      answer: "Benefit over weeks-months; titration 4 weeks to target.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Memantine?",
      answer: "The most frequently reported effects are: Dizziness, Headache and confusion, Constipation, Hypertension (small rise). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Memantine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Memantine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Memantine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Memantine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Memantine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for MDD; APA Ketamine Task Force Consensus",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), memantine monograph, p. 73",
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
        source: "FDA Prescribing Information for Namenda (Memantine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for memantine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Memantine",
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
      name: "Ketamine",
      slug: "ketamine",
      drugClass: "NMDA Antidepressant",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Alzheimer's disease — moderate to severe",
      relationship: "primary",
    },
    {
      name: "Alzheimer's — mild (off-label/debated)",
      relationship: "off-label",
    },
    {
      name: "Vascular dementia and other dementias",
      relationship: "off-label",
    },
    {
      name: "Reduction of opioid-induced tolerance/hyperalgesia (adjunct)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Memantine",
      type: "drug",
      href: "/drugs/memantine",
      note: "The drug you're reading about",
    },
    {
      label: "NMDA Antagonist",
      type: "class",
      href: "#mechanism",
      note: "NMDA Receptor Antagonist (Dementia)",
    },
    {
      label: "Glutamate",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "NMDA receptor (low-affinity use-dependent antagonist)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Alzheimer's disease — moderate to severe",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Alzheimer's — mild (off-label/debated)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Vascular dementia and other dementias",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Renal accumulation delirium (severe impairment)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Seizures (rare)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dizziness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Memantine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The NMDA modulator — glutamate noise-reduction for moderate-to-severe Alzheimer's.",
    summary: "Memantine is a prescription medicine used to treat alzheimer's disease — moderate to severe. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Memantine protects brain cells from overstimulation by a chemical called glutamate, which in excess acts like static that drowns out signals. It is used in moderate-to-severe Alzheimer's, usually alongside donepezil, and can keep daily function steadier for longer. The dose is built up slowly over several weeks; dizziness is its commonest effect.",
    sideEffects: "The most common side effects are: dizziness, headache and confusion, constipation, hypertension (small rise). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Renal accumulation delirium (severe impairment) and Seizures (rare). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: renal function (baseline and periodically); blood pressure (periodically); cognition and function scores (every 6 months). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other NMDA antagonists (ketamine, dextromethorphan), Metformin and drugs raising memantine (cimetidine, ranitidine class), Urine-alkalinising drugs (carbonic anhydrase inhibitors, sodium bicarbonate). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Admenta",
        manufacturer: "Sun",
        strengths: "5, 10 mg",
      },
      {
        name: "Almenta / Memantine generic",
        manufacturer: "various",
        strengths: "5, 10 mg",
      },
    ],
    typicalDoses: "Titrate to 10 mg bd (or 20 mg XR).",
    prescribingScenarios: [
      "Memory clinics — the add-on to donepezil in moderate-severe disease.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Renal function at baseline; BP periodically.",
    patientCounselling: [
      "Weekly dose steps.",
      "Report new confusion — the kidney check comes first.",
    ],
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
    available: true,
    note: "Generic memantine stocked in many kendras.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "NMDA Antagonists",
    members: [
      {
        name: "Memantine",
        slug: "memantine",
        relationship: "This guide",
        distinguishing: "The glutamate-side dementia drug — moderate-severe stage",
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
      question: "Which molecular target does Memantine primarily act on?",
      options: [
        "NMDA receptor (low-affinity use-dependent antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Memantine acts primarily at NMDA receptor (low-affinity use-dependent antagonist). Memantine blocks NMDA receptors only under pathological tonic glutamate exposure — reducing excitotoxic noise while sparing normal synaptic signalling.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Memantine?",
      options: ["Dizziness", "Headache and confusion", "Constipation", "Hypertension (small rise)"],
      correctIndex: 0,
      explanation: "Dizziness — The most common adverse effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Memantine for moderate-severe alzheimer's (titration)?",
      options: ["10 mg bd / 20 mg XR daily", "10 mg bd / 20 mg XR", "10 mg bd / 20 mg XR daily (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For moderate-severe alzheimer's (titration): start 5 mg once daily week 1, target 10 mg bd / 20 mg XR daily, maximum 10 mg bd / 20 mg XR. 5 mg bd week 2; then 10 mg bd (or XR 20 mg daily)",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Memantine in two sentences.",
      answer: "Memantine blocks NMDA receptors only under pathological tonic glutamate exposure — reducing excitotoxic noise while sparing normal synaptic signalling. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Memantine.",
      answer: "Alzheimer's disease — moderate to severe, Alzheimer's — mild (off-label/debated), Vascular dementia and other dementias, Reduction of opioid-induced tolerance/hyperalgesia (adjunct). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Memantine and how you would manage it.",
      answer: "Renal accumulation delirium (severe impairment): Renally cleared — severe impairment raises levels causing confusion. Management: Halve dose in severe impairment; confusion review.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Memantine require?",
      answer: "Renal function (Baseline and periodically); Blood pressure (Periodically); Cognition and function scores (Every 6 months)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Memantine that separates safe prescribers from unsafe ones.",
      answer: "The noise-reduction metaphor: memantine turns down the pathological glutamate static without silencing the signal — the cleanest explanation of use-dependent blockade.",
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
      checkpoint: "You now know what Memantine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Memantine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Memantine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Memantine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Memantine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Memantine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Benefit over weeks-months; titration 4 weeks to target.",
    ],
    ifItWorks: [
      "Continue Memantine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Memantine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Memantine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Moderate-severe Alzheimer's (titration)",
        starting: "5 mg once daily week 1",
        titration: "5 mg bd week 2; then 10 mg bd (or XR 20 mg daily)",
        target: "10 mg bd / 20 mg XR daily",
        max: "10 mg bd / 20 mg XR",
      },
    ],
    dosageForms: ["Tablets 5, 10 mg", "XR capsules 7, 14, 21, 28 mg", "Oral solution"],
    dosingTips: [
      "Weekly 5-mg titration steps.",
      "Confusion on memantine: check renal function first.",
      "Combine with donepezil in moderate-severe disease — the standard duo.",
    ],
    overdose: [
      "Overdose with Memantine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Memantine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 60-100 hours..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["Well tolerated.", "Added benefit with donepezil.", "Distinct mechanism (glutamate side)."],
    potentialDisadvantages: ["Moderate-severe stage only (evidence).", "Slow titration.", "Renal dosing discipline."],
    primaryTargetSymptoms: [
      "Cognition and function in moderate-severe Alzheimer's",
      "Functional decline slowing",
    ],
    pearls: [
      "The noise-reduction metaphor: memantine turns down the pathological glutamate static without silencing the signal — the cleanest explanation of use-dependent blockade.",
      "The ADD combination: memantine + donepezil outperforms donepezil alone in moderate-severe disease — the standard duo.",
      "Weeks-long titration is tolerability, not kinetics — rushing produces dizziness and confusion.",
      "Mild-stage use is contested: the trials were negative-to-weak; several guidelines now discourage it.",
      "Renal dosing: severe impairment halves the dose — confusion on memantine is usually accumulation.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
