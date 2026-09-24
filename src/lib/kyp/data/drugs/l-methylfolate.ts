import type { Drug } from "../types";

/**
 * L-Methylfolate — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), l-methylfolate monograph (book p. 75)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const lMethylfolate: Drug = {
  /* ---- Identity ---- */
  slug: "l-methylfolate",
  genericName: "L-Methylfolate",
  brandNames: ["Deplin (medical food)"],
  drugClass: "medical-food",
  drugClassLabel: "Medical Food",
  drugClassFullName: "Medical Food (Folate Augmentation)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "Augmentation Agents", "L-Methylfolate"],
  /* ---- Hero / summary ---- */
  tagline: "The active folate augmentation — the B-vitamin that powers monoamine synthesis.",
  summary: "L-methylfolate is the active (5-methyl-THF) form of folate used as augmentation in depression: it supplies the methyl donor that powers the synthesis of serotonin, norepinephrine, and dopamine — particularly relevant in patients with folate-metabolism variants (MTHFR), low-folate states, and SSRI partial response. Marketed as a medical food in the USA; a pragmatic, gentle augmentation with few adverse effects.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of L-Methylfolate — from its molecular target (Folate cycle → BH4 (tetrahydrobiopterin) cofactor for monoamine synthesis) to clinical effect.",
    "List the FDA-approved and off-label uses of L-Methylfolate.",
    "Predict the common and serious side effects of L-Methylfolate from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting L-Methylfolate.",
    "Compare L-Methylfolate with other medical foods and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "L-methylfolate provides the activated folate that drives BH4-dependent tyrosine hydroxylase and tryptophan hydroxylase — the rate-limiting enzymes of dopamine/norepinephrine/serotonin synthesis.",
    molecularTarget: "Folate cycle → BH4 (tetrahydrobiopterin) cofactor for monoamine synthesis",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "L-methylfolate provides the activated folate that drives BH4-dependent tyrosine hydroxylase and tryptophan hydroxylase — the rate-limiting enzymes of dopamine/norepinephrine/serotonin synthesis.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Unknown (water-soluble vitamin kinetics). — see mechanism and prescriber sections.",
    halfLife: "Unknown (water-soluble vitamin kinetics).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "L-Methylfolate",
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
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine (NE)", "Dopamine (DA)"],
  receptors: [
    "BH4-dependent hydroxylases (cofactor support)",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Adjunctive treatment of major depression (especially with low folate / SSRI partial response)",
      status: "guideline",
      description: "7.5-15 mg/day as augmentation; the evidence base is modest but the mechanism and safety are clean.",
    },
    {
      name: "Folate deficiency states",
      status: "fda-approved",
      description: "The nutritional indication (as folate).",
    },
    {
      name: "MTHFR polymorphism-associated depression",
      status: "off-label",
      description: "Genotype-guided reasoning; evidence limited.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "L-Methylfolate must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Generally well tolerated",
      frequency: "unknown",
      severity: "mild",
      description: "Few adverse effects at augmentation doses — the safety attraction.",
      management: "—",
    },
  ],
  seriousSideEffects: [
    {
      name: "Masking of B12 deficiency (high-dose folate)",
      frequency: "rare",
      severity: "severe",
      description: "Classic folate pharmacology: high doses can mask the anaemia of B12 deficiency while neuropathy progresses.",
      management: "Check B12 before long-term high-dose folate.",
    },
    {
      name: "Possible seizure-threshold interaction (anticonvulsant co-therapy)",
      frequency: "rare",
      severity: "moderate",
      description: "Folate interacts with phenytoin levels.",
      management: "Level monitoring with anticonvulsants.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "B12 status",
      frequency: "Before long-term high-dose use",
      rationale: "The masking-classic precaution.",
    },
    {
      parameter: "Augmentation response",
      frequency: "At 4-8 weeks",
      rationale: "Adequate-trial discipline.",
    },
  ],
  interactions: [
    {
      drug: "Phenytoin, phenobarbital, primidone",
      severity: "moderate",
      mechanism: "Folate reduces anticonvulsant levels.",
      action: "Level monitoring.",
    },
    {
      drug: "Methotrexate",
      severity: "major",
      mechanism: "Pharmacological antagonism (folate bypasses DHFR blockade intent).",
      action: "Specialist coordination.",
    },
  ],
  pregnancy: {
    legacyCategory: "A",
    summary: "Folate is a pregnancy vitamin — l-methylfolate supplementation in pregnancy is standard (neural-tube prophylaxis); psychiatric augmentation is safe in pregnancy.",
    lactation: "Compatible.",
  },
  renalAdjustment: "No adjustment (water-soluble).",
  hepaticAdjustment: "No adjustment.",
  /* ---- Education ---- */
  patientExplanation: "L-methylfolate is the active form of the B-vitamin folate: it provides a building block the brain needs to manufacture its own mood chemicals (serotonin, noradrenaline, dopamine). Adding it to an antidepressant that has worked only partially can improve response, particularly in people with low folate levels. It is generally free of side effects.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from L-Methylfolate builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The enzymatic logic: folate → BH4 → tyrosine hydroxylase and tryptophan hydroxylase — the monoamine assembly line powered by a vitamin.",
    "The three-audience niche: the SSRI partial responder, the low-folate depressive, and the MTHFR-variant patient — mechanism-guided augmentation.",
    "Medical food status (USA): not a drug, prescribed like one — regulatory middle ground.",
    "Safety is the pitch: nearly no adverse-effect burden at augmentation doses — the gentlest augmentation in the cabinet.",
    "Check B12 first: the classic folate-teacher's warning — masking pernicious anaemia.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of L-Methylfolate: L-methylfolate provides the activated folate that drives BH4-dependent tyrosine hydroxylase and tryptophan hydroxylase — the rate-limiting enzymes of dopamine/norepinephrine/serotonin synthesis.",
        "Uses of L-Methylfolate: Adjunctive treatment of major depression (especially with low folate / SSRI partial response); Folate deficiency states; MTHFR polymorphism-associated depression",
        "Mechanism: active folate → BH4 cofactor → monoamine synthesis enzymes.",
        "Use: depression AUGMENTATION 7.5-15 mg (low folate, SSRI partial response, MTHFR variants).",
      ],
      practical: [
        "Prescribe L-Methylfolate for adjunctive treatment of major depression (especially with low folate / ssri partial response) with dose, timing, and duration.",
        "Outline the monitoring plan: B12 status (Before long-term high-dose use); Augmentation response (At 4-8 weeks)",
      ],
      longAnswer: [
        "L-Methylfolate: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: active folate → BH4 cofactor → monoamine synthesis enzymes.",
        "Use: depression AUGMENTATION 7.5-15 mg (low folate, SSRI partial response, MTHFR variants).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: active folate → BH4 cofactor → monoamine synthesis enzymes.",
        "Use: depression AUGMENTATION 7.5-15 mg (low folate, SSRI partial response, MTHFR variants).",
        "Medical food status (USA); supplement-grade availability elsewhere.",
        "Exceptionally well tolerated.",
        "Check B12 before long-term use (masking risk).",
        "Modest but positive RCT evidence (Trial 404-era literature).",
      ],
      pyqConcepts: [
        "Mechanism/target of L-Methylfolate",
        "Key adverse effect: Masking of B12 deficiency (high-dose folate)",
        "Dosing and titration of L-Methylfolate",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on L-Methylfolate develops masking of b12 deficiency (high-dose folate) — next best step?",
        "When to choose L-Methylfolate over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Folate cycle → BH4 (tetrahydrobiopterin) cofactor for monoamine synthesis",
        "Most common side effects: Generally well tolerated",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The enzymatic logic: folate → BH4 → tyrosine hydroxylase and tryptophan hydroxylase — the monoamine assembly line powered by a vitamin.",
        "The three-audience niche: the SSRI partial responder, the low-folate depressive, and the MTHFR-variant patient — mechanism-guided augmentation.",
        "Medical food status (USA): not a drug, prescribed like one — regulatory middle ground.",
        "Safety is the pitch: nearly no adverse-effect burden at augmentation doses — the gentlest augmentation in the cabinet.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: active folate → BH4 cofactor → monoamine synthesis enzymes.",
    "Use: depression AUGMENTATION 7.5-15 mg (low folate, SSRI partial response, MTHFR variants).",
    "Medical food status (USA); supplement-grade availability elsewhere.",
    "Exceptionally well tolerated.",
    "Check B12 before long-term use (masking risk).",
    "Modest but positive RCT evidence (Trial 404-era literature).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — adjunctive treatment of major depression (especially with low folate / ssri partial response)",
      presentation: "A patient presenting with adjunctive treatment of major depression (especially with low folate / ssri partial response), started on L-Methylfolate.",
      history: "A adult patient presents with a adjunctive treatment of major depression (especially with low folate / ssri partial response) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with adjunctive treatment of major depression (especially with low folate / ssri partial response); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Adjunctive treatment of major depression (especially with low folate / SSRI partial response). Differentials are considered and excluded clinically.",
      rationale: "L-Methylfolate is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Medical Food) with strong evidence in this condition.",
      management: "Started at 7.5 mg once daily, titrated to 7.5-15 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "L-Methylfolate takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Medical Food vs related agents — orientation table",
      primaryDrug: "L-Methylfolate",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Folate cycle → BH4 (tetrahydrobiopterin) cofactor for monoamine synthesis",
          comparisons: [
            {
              drug: "L-Methylfolate",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
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
          primaryValue: "The monoamine-synthesis augmentation — gentle and mechanism-sensible",
          comparisons: [
            {
              drug: "L-Methylfolate",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "L-Methylfolate is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "L-Methylfolate reaches peak plasma concentration and begins acting at its molecular target (Folate cycle → BH4 (tetrahydrobiopterin) cofactor for monoamine synthesis). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (generally well tolerated). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Augmentation benefit assessed over 4-8 weeks.)",
      title: "Therapeutic effect builds",
      description: "Augmentation benefit assessed over 4-8 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of L-Methylfolate is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does L-Methylfolate take to work?",
      answer: "Augmentation benefit assessed over 4-8 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of L-Methylfolate?",
      answer: "The most frequently reported effects are: Generally well tolerated. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop L-Methylfolate suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is L-Methylfolate habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take L-Methylfolate exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take L-Methylfolate during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — L-Methylfolate may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), l-methylfolate monograph, p. 75",
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
        source: "FDA Prescribing Information for Deplin (medical food) (L-Methylfolate)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for l-methylfolate — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — L-Methylfolate",
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
      name: "Adjunctive treatment of major depression (especially with low folate / SSRI partial response)",
      relationship: "alternative",
    },
    {
      name: "Folate deficiency states",
      relationship: "primary",
    },
    {
      name: "MTHFR polymorphism-associated depression",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "L-Methylfolate",
      type: "drug",
      href: "/drugs/l-methylfolate",
      note: "The drug you're reading about",
    },
    {
      label: "Medical Food",
      type: "class",
      href: "#mechanism",
      note: "Medical Food (Folate Augmentation)",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Folate cycle → BH4 (tetrahydrobiopterin) cofactor for monoamine synthesis",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Adjunctive treatment of major depression (especially with low folate / SSRI partial response)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Folate deficiency states",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "MTHFR polymorphism-associated depression",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Masking of B12 deficiency (high-dose folate)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Possible seizure-threshold interaction (anticonvulsant co-therapy)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Generally well tolerated",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — L-Methylfolate",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The active folate augmentation — the B-vitamin that powers monoamine synthesis.",
    summary: "L-Methylfolate is a prescription medicine used to treat adjunctive treatment of major depression (especially with low folate / ssri partial response). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "L-methylfolate is the active form of the B-vitamin folate: it provides a building block the brain needs to manufacture its own mood chemicals (serotonin, noradrenaline, dopamine). Adding it to an antidepressant that has worked only partially can improve response, particularly in people with low folate levels. It is generally free of side effects.",
    sideEffects: "The most common side effects are: generally well tolerated. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Masking of B12 deficiency (high-dose folate) and Possible seizure-threshold interaction (anticonvulsant co-therapy). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: b12 status (before long-term high-dose use); augmentation response (at 4-8 weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Phenytoin, phenobarbital, primidone, Methotrexate. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "L-methylfolate / Metfol-type supplements)",
        manufacturer: "various",
        strengths: "400 mcg-15 mg",
      },
      {
        name: "Deplin (imported)",
        manufacturer: "medical food",
        strengths: "7.5, 15 mg",
      },
    ],
    typicalDoses: "7.5-15 mg/day augmentation.",
    prescribingScenarios: [
      "Budget augmentation in Indian practice — supplement-grade access.",
      "Perinatal depression (folate-safe).",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "B12 baseline.",
    patientCounselling: ["A safe add-on — give it 4-8 weeks."],
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
        name: "L-Methylfolate",
        slug: "l-methylfolate",
        relationship: "This guide",
        distinguishing: "The monoamine-synthesis augmentation — gentle and mechanism-sensible",
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
      question: "Which molecular target does L-Methylfolate primarily act on?",
      options: [
        "Folate cycle → BH4 (tetrahydrobiopterin) cofactor for monoamine synthesis",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "L-Methylfolate acts primarily at Folate cycle → BH4 (tetrahydrobiopterin) cofactor for monoamine synthesis. L-methylfolate provides the activated folate that drives BH4-dependent tyrosine hydroxylase and tryptophan hydroxylase — the rate-limiting enzymes of dopamine/norepinephrine/serotonin synthesis.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of L-Methylfolate?",
      options: ["Generally well tolerated", "Weight gain", "Hair loss", "Photosensitivity"],
      correctIndex: 0,
      explanation: "Generally well tolerated — Few adverse effects at augmentation doses — the safety attraction.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of L-Methylfolate for depression augmentation?",
      options: ["7.5-15 mg/day", "15 mg/day", "7.5-15 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For depression augmentation: start 7.5 mg once daily, target 7.5-15 mg/day, maximum 15 mg/day. May increase to 15 mg",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of L-Methylfolate in two sentences.",
      answer: "L-methylfolate provides the activated folate that drives BH4-dependent tyrosine hydroxylase and tryptophan hydroxylase — the rate-limiting enzymes of dopamine/norepinephrine/serotonin synthesis. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of L-Methylfolate.",
      answer: "Adjunctive treatment of major depression (especially with low folate / SSRI partial response), Folate deficiency states, MTHFR polymorphism-associated depression. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of L-Methylfolate and how you would manage it.",
      answer: "Masking of B12 deficiency (high-dose folate): Classic folate pharmacology: high doses can mask the anaemia of B12 deficiency while neuropathy progresses. Management: Check B12 before long-term high-dose folate.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on L-Methylfolate require?",
      answer: "B12 status (Before long-term high-dose use); Augmentation response (At 4-8 weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about L-Methylfolate that separates safe prescribers from unsafe ones.",
      answer: "The enzymatic logic: folate → BH4 → tyrosine hydroxylase and tryptophan hydroxylase — the monoamine assembly line powered by a vitamin.",
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
      checkpoint: "You now know what L-Methylfolate is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how L-Methylfolate works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe L-Methylfolate safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for L-Methylfolate.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared L-Methylfolate with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of L-Methylfolate.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Augmentation benefit assessed over 4-8 weeks.",
    ],
    ifItWorks: [
      "Continue L-Methylfolate at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of L-Methylfolate (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of L-Methylfolate follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "7.5 mg once daily",
        titration: "May increase to 15 mg",
        target: "7.5-15 mg/day",
        max: "15 mg/day",
      },
    ],
    dosageForms: [
      "Tablets/capsules 7.5, 15 mg (medical food or supplement grades)",
    ],
    dosingTips: [
      "Check folate and B12 baseline.",
      "Give the augmentation 4-8 weeks.",
      "The MTHFR story: genotype-guided reasoning, limited evidence.",
    ],
    overdose: [
      "Overdose with L-Methylfolate is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of L-Methylfolate is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Unknown (water-soluble vitamin kinetics)..",
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
    potentialAdvantages: ["Exceptional safety.", "Mechanism-sensible augmentation.", "Pregnancy-compatible."],
    potentialDisadvantages: [
      "Modest effect size.",
      "Medical-food/supplement status (variable quality).",
      "B12-masking classic at high doses.",
    ],
    primaryTargetSymptoms: ["SSRI partial response (augmentation)", "Low-folate depression"],
    pearls: [
      "The enzymatic logic: folate → BH4 → tyrosine hydroxylase and tryptophan hydroxylase — the monoamine assembly line powered by a vitamin.",
      "The three-audience niche: the SSRI partial responder, the low-folate depressive, and the MTHFR-variant patient — mechanism-guided augmentation.",
      "Medical food status (USA): not a drug, prescribed like one — regulatory middle ground.",
      "Safety is the pitch: nearly no adverse-effect burden at augmentation doses — the gentlest augmentation in the cabinet.",
      "Check B12 first: the classic folate-teacher's warning — masking pernicious anaemia.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
