import type { Drug } from "../types";

/**
 * Rivastigmine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), rivastigmine monograph (book p. 111)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const rivastigmine: Drug = {
  /* ---- Identity ---- */
  slug: "rivastigmine",
  genericName: "Rivastigmine",
  brandNames: ["Exelon", "Exelon Patch"],
  drugClass: "cholinesterase-inhibitor",
  drugClassLabel: "AChE Inhibitor",
  drugClassFullName: "Acetylcholinesterase Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Cognitive Enhancers", "Cholinesterase Inhibitors", "Rivastigmine"],
  /* ---- Hero / summary ---- */
  tagline: "The dual-cholinesterase inhibitor with a patch — stronger inhibition, GI warnings, DLB approval.",
  summary: "Rivastigmine inhibits BOTH acetyl- and butyrylcholinesterase (the latter rising as Alzheimer's progresses), approved in Alzheimer's and — uniquely — dementia with Lewy bodies and Parkinson's disease dementia. Its GI adverse-effect ceiling is higher than donepezil's; the transdermal patch solves the tolerability problem while delivering steady drug.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Rivastigmine — from its molecular target (Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Rivastigmine.",
    "Predict the common and serious side effects of Rivastigmine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Rivastigmine.",
    "Compare Rivastigmine with other ache inhibitors and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Rivastigmine inhibits both cholinesterases centrally — the butyryl component matters as the disease advances — with patch delivery bypassing the GI adverse-effect ceiling.",
    molecularTarget: "Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Rivastigmine inhibits both cholinesterases centrally — the butyryl component matters as the disease advances — with patch delivery bypassing the GI adverse-effect ceiling.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Oral ~2 h (brain-penetrant pseudo-irreversible action lasts longer); patch steady 24 h. — see mechanism and prescriber sections.",
    halfLife: "Oral ~2 h (brain-penetrant pseudo-irreversible action lasts longer); patch steady 24 h.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Rivastigmine",
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
    "Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition)",
  ],
  brainRegionIds: ["hippocampus", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alzheimer's disease — mild to moderate",
      status: "fda-approved",
      description: "Oral or patch.",
    },
    {
      name: "Dementia with Lewy bodies",
      status: "fda-approved",
      description: "The only cholinesterase inhibitor with an explicit DLB indication.",
    },
    {
      name: "Parkinson's disease dementia",
      status: "fda-approved",
      description: "The explicit PDD indication.",
    },
    {
      name: "Severe Alzheimer's (patch, some regions)",
      status: "guideline",
      description: "Regional approvals vary.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Rivastigmine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea and vomiting (oral)",
      frequency: "very-common",
      severity: "moderate",
      description: "The higher cholinergic GI burden is rivastigmine's signature.",
      management: "Patch formulation; slow titration; with food.",
    },
    {
      name: "Diarrhoea and anorexia",
      frequency: "common",
      severity: "mild",
      description: "Cholinergic effects.",
      management: "Weight monitoring.",
    },
    {
      name: "Application-site reactions (patch)",
      frequency: "common",
      severity: "mild",
      description: "Erythema at the patch site.",
      management: "Rotation; skin inspection.",
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
      name: "Significant bradycardia/syncope",
      frequency: "uncommon",
      severity: "severe",
      description: "Cholinergic cardiac effect — class caution.",
      management: "Pulse; ECG if conduction disease.",
    },
    {
      name: "Severe vomiting and dehydration (oral)",
      frequency: "uncommon",
      severity: "severe",
      description: "The GI ceiling at mis-titrated doses.",
      management: "Patch conversion; slow titration.",
    },
    {
      name: "Peptic ulcer risk (cholinergic acid)",
      frequency: "uncommon",
      severity: "severe",
      description: "Caution with NSAIDs/history of ulcer.",
      management: "PPI if needed.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Pulse",
      frequency: "Every review",
      rationale: "Bradycardia caution.",
    },
    {
      parameter: "Weight",
      frequency: "Periodically",
      rationale: "GI-driven loss.",
    },
    {
      parameter: "Patch-site skin",
      frequency: "At review",
      rationale: "Reactions.",
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
      mechanism: "Pharmacodynamic antagonism.",
      action: "Avoid.",
    },
    {
      drug: "Metoclopramide",
      severity: "major",
      mechanism: "Additive extrapyramidal effects.",
      action: "Avoid.",
    },
  ],
  pregnancy: {
    legacyCategory: "B",
    summary: "Not applicable clinically; standard caution.",
    lactation: "Not applicable.",
  },
  renalAdjustment: "No adjustment required (renal clearance limited role).",
  hepaticAdjustment: "Reduce dose in hepatic impairment (titrate slowly).",
  /* ---- Education ---- */
  patientExplanation: "Rivastigmine boosts the brain chemicals that dementia depletes by blocking TWO recycling enzymes instead of one. It comes as a daily skin patch, which avoids most of the stomach upset the tablets cause. It is used in Alzheimer's and, uniquely, in the dementias of Lewy body and Parkinson's disease.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Rivastigmine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The patch is the product: steady delivery solved rivastigmine's oral GI ceiling — tolerance improved and adherence simplified.",
    "Dual inhibition logic: butyrylcholinesterase rises as cholinergic neurons die — rivastigmine inhibits both, the theoretical advantage in later disease.",
    "DLB and PDD: the only cholinesterase inhibitor with explicit approvals — hallucinating parkinsonian dementia is its home turf.",
    "Missed patch > 3 days: restart at the lowest patch dose — the re-titration rule.",
    "With metoclopramide: additive EPS — avoid.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Rivastigmine: Rivastigmine inhibits both cholinesterases centrally — the butyryl component matters as the disease advances — with patch delivery bypassing the GI adverse-effect ceiling.",
        "Uses of Rivastigmine: Alzheimer's disease — mild to moderate; Dementia with Lewy bodies; Parkinson's disease dementia; Severe Alzheimer's (patch, some regions)",
        "Mechanism: CENTRAL acetyl- AND butyrylcholinesterase inhibition (dual).",
        "Approvals: Alzheimer's + DLB + Parkinson's disease dementia (unique).",
      ],
      practical: [
        "Prescribe Rivastigmine for alzheimer's disease — mild to moderate with dose, timing, and duration.",
        "Outline the monitoring plan: Pulse (Every review); Weight (Periodically); Patch-site skin (At review)",
      ],
      longAnswer: [
        "Rivastigmine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: CENTRAL acetyl- AND butyrylcholinesterase inhibition (dual).",
        "Approvals: Alzheimer's + DLB + Parkinson's disease dementia (unique).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: CENTRAL acetyl- AND butyrylcholinesterase inhibition (dual).",
        "Approvals: Alzheimer's + DLB + Parkinson's disease dementia (unique).",
        "Patch 4.6 → 9.5 → 13.3 mg/24 h; oral limited by GI ceiling.",
        "Higher GI adverse-effect burden than donepezil orally.",
        "Patch-site rotation and the 3-day missed-patch rule.",
        "Bradycardia class caution.",
      ],
      pyqConcepts: [
        "Mechanism/target of Rivastigmine",
        "Key adverse effect: Significant bradycardia/syncope",
        "Dosing and titration of Rivastigmine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Rivastigmine develops significant bradycardia/syncope — next best step?",
        "When to choose Rivastigmine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition)",
        "Most common side effects: Nausea and vomiting (oral), Diarrhoea and anorexia, Application-site reactions (patch)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The patch is the product: steady delivery solved rivastigmine's oral GI ceiling — tolerance improved and adherence simplified.",
        "Dual inhibition logic: butyrylcholinesterase rises as cholinergic neurons die — rivastigmine inhibits both, the theoretical advantage in later disease.",
        "DLB and PDD: the only cholinesterase inhibitor with explicit approvals — hallucinating parkinsonian dementia is its home turf.",
        "Missed patch > 3 days: restart at the lowest patch dose — the re-titration rule.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: CENTRAL acetyl- AND butyrylcholinesterase inhibition (dual).",
    "Approvals: Alzheimer's + DLB + Parkinson's disease dementia (unique).",
    "Patch 4.6 → 9.5 → 13.3 mg/24 h; oral limited by GI ceiling.",
    "Higher GI adverse-effect burden than donepezil orally.",
    "Patch-site rotation and the 3-day missed-patch rule.",
    "Bradycardia class caution.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — alzheimer's disease — mild to moderate",
      presentation: "A patient presenting with alzheimer's disease — mild to moderate, started on Rivastigmine.",
      history: "A adult patient presents with a alzheimer's disease — mild to moderate picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with alzheimer's disease — mild to moderate; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Alzheimer's disease — mild to moderate. Differentials are considered and excluded clinically.",
      rationale: "Rivastigmine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (AChE Inhibitor) with strong evidence in this condition.",
      management: "Started at 4.6 mg/24 h patch daily, titrated to 9.5 mg/24 h patch with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Rivastigmine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "AChE Inhibitor comparison — choosing within the class",
      primaryDrug: "Rivastigmine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition)",
          comparisons: [
            {
              drug: "Donepezil",
              value: "See full guide",
            },
            {
              drug: "Galantamine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Oral ~2 h (brain-penetrant pseudo-irreversible action lasts longer); patch steady 24 h.",
          comparisons: [
            {
              drug: "Donepezil",
              value: "—",
            },
            {
              drug: "Galantamine",
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
              drug: "Galantamine",
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
              drug: "Galantamine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The dual-inhibitor with the patch — and the DLB/PDD approval",
          comparisons: [
            {
              drug: "Donepezil",
              value: "The once-daily AChE inhibitor — Alzheimer's first-line",
            },
            {
              drug: "Galantamine",
              value: "The nicotinic-modulating AChE inhibitor",
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
      description: "Rivastigmine reaches peak plasma concentration and begins acting at its molecular target (Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea and vomiting (oral), diarrhoea and anorexia, application-site reactions (patch)). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Rivastigmine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Rivastigmine take to work?",
      answer: "Cognitive benefit over weeks-months.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Rivastigmine?",
      answer: "The most frequently reported effects are: Nausea and vomiting (oral), Diarrhoea and anorexia, Application-site reactions (patch), Dizziness and headache. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Rivastigmine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Rivastigmine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Rivastigmine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Rivastigmine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Rivastigmine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), rivastigmine monograph, p. 111",
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
        source: "FDA Prescribing Information for Exelon (Rivastigmine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for rivastigmine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Rivastigmine",
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
      name: "Galantamine",
      slug: "galantamine",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
  ],
  relatedConditions: [
    {
      name: "Alzheimer's disease — mild to moderate",
      relationship: "primary",
    },
    {
      name: "Dementia with Lewy bodies",
      relationship: "primary",
    },
    {
      name: "Parkinson's disease dementia",
      relationship: "primary",
    },
    {
      name: "Severe Alzheimer's (patch, some regions)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Rivastigmine",
      type: "drug",
      href: "/drugs/rivastigmine",
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
      label: "Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition)",
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
      label: "Dementia with Lewy bodies",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Parkinson's disease dementia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Significant bradycardia/syncope",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Severe vomiting and dehydration (oral)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea and vomiting (oral)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Rivastigmine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The dual-cholinesterase inhibitor with a patch — stronger inhibition, GI warnings, DLB approval.",
    summary: "Rivastigmine is a prescription medicine used to treat alzheimer's disease — mild to moderate. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Rivastigmine boosts the brain chemicals that dementia depletes by blocking TWO recycling enzymes instead of one. It comes as a daily skin patch, which avoids most of the stomach upset the tablets cause. It is used in Alzheimer's and, uniquely, in the dementias of Lewy body and Parkinson's disease.",
    sideEffects: "The most common side effects are: nausea and vomiting (oral), diarrhoea and anorexia, application-site reactions (patch), dizziness and headache. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Significant bradycardia/syncope and Severe vomiting and dehydration (oral). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: pulse (every review); weight (periodically); patch-site skin (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Beta-blockers and digoxin, Anticholinergics, Metoclopramide. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Rivamer / Rivastig (generic)",
        manufacturer: "various",
        strengths: "capsules; patch limited",
      },
    ],
    typicalDoses: "Patch 9.5 mg/24 h target; oral 6 mg bd.",
    prescribingScenarios: [
      "DLB and Parkinson's dementia co-management with neurology.",
      "Patch preferred where available.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Pulse; weight; patch-site skin.",
    patientCounselling: [
      "Daily patch at the same time; rotate sites.",
      "Missed > 3 days — restart low.",
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
    available: false,
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Cholinesterase Inhibitors",
    members: [
      {
        name: "Rivastigmine",
        slug: "rivastigmine",
        relationship: "This guide",
        distinguishing: "The dual-inhibitor with the patch — and the DLB/PDD approval",
      },
      {
        name: "Donepezil",
        slug: "donepezil",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The once-daily AChE inhibitor — Alzheimer's first-line",
      },
      {
        name: "Galantamine",
        slug: "galantamine",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The nicotinic-modulating AChE inhibitor",
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
      question: "Which molecular target does Rivastigmine primarily act on?",
      options: [
        "Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Rivastigmine acts primarily at Acetylcholinesterase AND butyrylcholinesterase (central dual inhibition). Rivastigmine inhibits both cholinesterases centrally — the butyryl component matters as the disease advances — with patch delivery bypassing the GI adverse-effect ceiling.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Rivastigmine?",
      options: ["Nausea and vomiting (oral)", "Diarrhoea and anorexia", "Application-site reactions (patch)", "Dizziness and headache"],
      correctIndex: 0,
      explanation: "Nausea and vomiting (oral) — The higher cholinergic GI burden is rivastigmine's signature.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Rivastigmine for alzheimer's (patch)?",
      options: ["9.5 mg/24 h patch", "13.3 mg/24 h patch", "9.5 mg/24 h patch (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For alzheimer's (patch): start 4.6 mg/24 h patch daily, target 9.5 mg/24 h patch, maximum 13.3 mg/24 h patch. After ≥ 1 month may increase to 9.5 mg/24 h; 13.3 for severe (regions)",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Rivastigmine in two sentences.",
      answer: "Rivastigmine inhibits both cholinesterases centrally — the butyryl component matters as the disease advances — with patch delivery bypassing the GI adverse-effect ceiling. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Rivastigmine.",
      answer: "Alzheimer's disease — mild to moderate, Dementia with Lewy bodies, Parkinson's disease dementia, Severe Alzheimer's (patch, some regions). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Rivastigmine and how you would manage it.",
      answer: "Significant bradycardia/syncope: Cholinergic cardiac effect — class caution. Management: Pulse; ECG if conduction disease.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Rivastigmine require?",
      answer: "Pulse (Every review); Weight (Periodically); Patch-site skin (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Rivastigmine that separates safe prescribers from unsafe ones.",
      answer: "The patch is the product: steady delivery solved rivastigmine's oral GI ceiling — tolerance improved and adherence simplified.",
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
      checkpoint: "You now know what Rivastigmine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Rivastigmine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Rivastigmine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Rivastigmine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Rivastigmine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Rivastigmine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Cognitive benefit over weeks-months."],
    ifItWorks: [
      "Continue Rivastigmine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Rivastigmine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Rivastigmine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Alzheimer's (patch)",
        starting: "4.6 mg/24 h patch daily",
        titration: "After ≥ 1 month may increase to 9.5 mg/24 h; 13.3 for severe (regions)",
        target: "9.5 mg/24 h patch",
        max: "13.3 mg/24 h patch",
      },
      {
        indication: "Alzheimer's (oral, where used)",
        starting: "1.5 mg bd",
        titration: "Titrate in 3 mg/day steps ≥ 2-weekly",
        target: "6 mg bd",
        max: "6 mg bd",
      },
    ],
    dosageForms: [
      "Capsules 1.5-6 mg",
      "Oral solution",
      "Transdermal patches 4.6, 9.5, 13.3 mg/24 h",
    ],
    dosingTips: [
      "Patch: rotate sites, apply to clean dry skin, same time daily.",
      "Missed > 3 days: restart at the lowest patch.",
      "Pulse at every review.",
    ],
    overdose: [
      "Overdose with Rivastigmine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Rivastigmine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Oral ~2 h (brain-penetrant pseudo-irreversible action lasts longer); patch steady 24 h..",
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
    potentialAdvantages: ["Dual cholinesterase inhibition.", "DLB + PDD explicit approvals.", "The patch — tolerability solved."],
    potentialDisadvantages: ["Oral GI ceiling.", "Patch-site reactions.", "Bradycardia caution."],
    primaryTargetSymptoms: [
      "Alzheimer's cognition and function",
      "DLB/PDD symptoms (hallucinations, cognition, fluctuations)",
    ],
    pearls: [
      "The patch is the product: steady delivery solved rivastigmine's oral GI ceiling — tolerance improved and adherence simplified.",
      "Dual inhibition logic: butyrylcholinesterase rises as cholinergic neurons die — rivastigmine inhibits both, the theoretical advantage in later disease.",
      "DLB and PDD: the only cholinesterase inhibitor with explicit approvals — hallucinating parkinsonian dementia is its home turf.",
      "Missed patch > 3 days: restart at the lowest patch dose — the re-titration rule.",
      "With metoclopramide: additive EPS — avoid.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
