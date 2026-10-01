import type { Drug } from "../types";

/**
 * Flumazenil — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), flumazenil monograph (book p. 45)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const flumazenil: Drug = {
  /* ---- Identity ---- */
  slug: "flumazenil",
  genericName: "Flumazenil",
  brandNames: ["Anexate", "Romazicon"],
  drugClass: "benzodiazepine-antagonist",
  drugClassLabel: "Benzodiazepine Antidote",
  drugClassFullName: "Benzodiazepine Receptor Antagonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepine Antagonists", "Flumazenil"],
  /* ---- Hero / summary ---- */
  tagline: "The benzodiazepine antidote — pure antagonist with a seizure warning attached.",
  summary: "Flumazenil is the benzodiazepine receptor ANTAGONIST: it displaces benzodiazepines from the GABA-A receptor and reverses their sedation within 1–2 minutes IV. Its legitimate domain is the known-pure-benzo overdose and procedural over-sedation; its danger is in chronic benzo users, epileptics, and TCA co-ingestions, where reversal precipitates seizures. In real-world overdose practice, airway support has largely displaced pharmacological reversal.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Flumazenil — from its molecular target (GABA-A benzodiazepine site (competitive antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Flumazenil.",
    "Predict the common and serious side effects of Flumazenil from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Flumazenil.",
    "Compare Flumazenil with other benzodiazepine antidotes and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Flumazenil is a competitive benzodiazepine-site ANTAGONIST — the class's own antidote, displacing agonists from GABA-A.",
    molecularTarget: "GABA-A benzodiazepine site (competitive antagonist)",
    effect: "Reversal of benzodiazepine sedation, respiratory depression, and amnesia within 1–2 minutes (duration 30–60 min).",
    steps: [
      "Competitively occupies the benzodiazepine site without efficacy.",
      "Displaces diazepam/midazolam/etc. — their effect is reversed within 1–2 minutes.",
      "Short duration (30–60 min): shorter than most benzos — RESEDATION follows; repeat dosing and observation required.",
      "In dependent brains, sudden blockade unmasks withdrawal — seizures.",
    ],
    pharmacokinetics: "IV (well absorbed orally but heavily first-pass); onset 1–2 min.",
    halfLife: "About 1 hour.",
    activeMetabolite: "None significant.",
    metabolism: "Hepatic CYP3A4/1A2 (rapid).",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "gaba",
        label: "GABA",
        sublabel: "Inhibitory neurotransmitter",
        variant: "input",
      },
      {
        id: "receptor",
        label: "GABA-A receptor",
        sublabel: "Chloride channel",
        variant: "target",
      },
      {
        id: "drug",
        label: "Flumazenil",
        sublabel: "Positive allosteric modulator",
        variant: "process",
      },
      {
        id: "cl",
        label: "Cl⁻ influx",
        sublabel: "Neuron hyperpolarises",
        variant: "output",
      },
      {
        id: "effect",
        label: "Reduced neuronal firing",
        sublabel: "Anxiolysis, sedation, anticonvulsant effect",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "gaba",
        to: "receptor",
        label: "binds",
      },
      {
        from: "drug",
        to: "receptor",
        label: "enhances GABA action",
        type: "stimulate",
      },
      {
        from: "receptor",
        to: "cl",
        label: "opens channel",
      },
      {
        from: "cl",
        to: "effect",
        label: "inhibits firing",
      },
    ],
    caption: "Benzodiazepines amplify the brain's own inhibitory signal (GABA) rather than activating the receptor directly — which is why their effect is powerful but limited by dependence risk.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["GABA"],
  receptors: [
    "GABA-A receptor (benzodiazepine site — antagonist)",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Reversal of benzodiazepine sedation (procedural, known-agent)",
      status: "fda-approved",
      description: "Post-endoscopy/anaesthesia over-sedation reversal.",
    },
    {
      name: "Benzodiazepine overdose (pure, known)",
      status: "fda-approved",
      description: "The classic indication — airway support first, reversal only with certainty of the ingested agents.",
    },
    {
      name: "Diagnosis of benzodiazepine contribution to coma (controversial)",
      status: "off-label",
      description: "Coma-of-unknown-cause trials — risky; use rarely.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Flumazenil must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Tricyclic antidepressant co-ingestion",
      severity: "absolute",
      rationale: "Reversing benzo protection in a mixed TCA overdose precipitates seizures and arrhythmias.",
    },
    {
      name: "Chronic benzodiazepine use",
      severity: "absolute",
      rationale: "Sudden blockade = withdrawal seizure.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Seizures — contraindications dominate the label",
      text: "Flumazenil can precipitate seizures in benzodiazepine-dependent patients, epileptics, and mixed overdoses (especially with TCAs). Resuscitation capability is a condition of use. Do not use as a routine coma 'diagnostic test'.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Agitation, anxiety, sweating (withdrawal effects)",
      frequency: "common",
      severity: "moderate",
      description: "Reversal of sedation includes reversal of the comfortable part.",
      management: "Reassurance; usually brief.",
    },
    {
      name: "Nausea and dizziness",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Seizures",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The signature risk: chronic benzo users, epileptics, TCA co-ingestion.",
      management: "Stop flumazenil; benzodiazepine re-administration paradoxically treats it; resuscitation.",
    },
    {
      name: "Resedation (recurrence of overdose)",
      frequency: "common",
      severity: "life-threatening",
      description: "Flumazenil (1 h) is SHORTER than the benzos it reverses — the overdose returns.",
      management: "Prolonged observation; repeat doses; airway priority.",
    },
    {
      name: "Cardiac arrhythmias (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Reported with mixed overdoses.",
      management: "Cardiac monitoring.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Airway and ventilation",
      frequency: "Continuous through the resedation window",
      rationale: "Resedation is expected — observation continues for hours.",
    },
    {
      parameter: "Seizure readiness",
      frequency: "During and after administration",
      rationale: "Benzodiazepine + resuscitation available for paradoxical seizures.",
    },
  ],
  interactions: [
    {
      drug: "Tricyclic antidepressant co-ingestion",
      severity: "contraindicated",
      mechanism: "Reversing benzo protection in a mixed TCA overdose precipitates seizures and arrhythmias.",
      action: "Do not use in mixed or unknown overdoses.",
    },
    {
      drug: "Chronic benzodiazepine use",
      severity: "contraindicated",
      mechanism: "Sudden blockade = withdrawal seizure.",
      action: "Avoid in dependent patients.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Emergency use in overdose proceeds on maternal-priority grounds; brief exposure.",
    lactation: "Brief emergency use; resume feeding after clearance.",
  },
  renalAdjustment: "No adjustment (hepatic metabolism).",
  hepaticAdjustment: "Prolonged effect in cirrhosis.",
  /* ---- Education ---- */
  patientExplanation: "Flumazenil is the antidote to the benzodiazepine family of sedatives: given into a vein, it wakes a person from benzodiazepine sedation within about two minutes. It is shorter-acting than the medicines it reverses, so patients must be watched as its effect wears off. In people who take benzodiazepines regularly it can cause fits — it is reserved for specific, known overdoses and procedure rooms.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Flumazenil builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Shorter than everything it reverses: resedation is expected, not exceptional — the observation window is the treatment.",
    "The seizure paradox: in dependent brains the antidote CAUSES withdrawal — never give flumazenil to a chronic benzo user or an unknown overdose.",
    "TCA co-ingestion: reversing the benzo's anticonvulsant cover unmasks TCA seizures — the classic exam scenario.",
    "Modern overdose practice: airway first, antidote rarely — the deflation of pharmacological heroics.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Flumazenil: Flumazenil is a competitive benzodiazepine-site ANTAGONIST — the class's own antidote, displacing agonists from GABA-A.",
        "Uses of Flumazenil: Reversal of benzodiazepine sedation (procedural, known-agent); Benzodiazepine overdose (pure, known); Diagnosis of benzodiazepine contribution to coma (controversial)",
        "Mechanism: competitive ANTAGONIST at the benzodiazepine site.",
        "Onset 1–2 min IV; duration 30–60 min (SHORTER than the drugs it reverses → resedation).",
      ],
      practical: [
        "Prescribe Flumazenil for reversal of benzodiazepine sedation (procedural, known-agent) with dose, timing, and duration.",
        "Outline the monitoring plan: Airway and ventilation (Continuous through the resedation window); Seizure readiness (During and after administration)",
      ],
      longAnswer: [
        "Flumazenil: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: competitive ANTAGONIST at the benzodiazepine site.",
        "Onset 1–2 min IV; duration 30–60 min (SHORTER than the drugs it reverses → resedation).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: competitive ANTAGONIST at the benzodiazepine site.",
        "Onset 1–2 min IV; duration 30–60 min (SHORTER than the drugs it reverses → resedation).",
        "Indications: pure benzo overdose + procedural over-sedation reversal.",
        "Seizure risk: chronic users, epileptics, TCA mixed overdoses.",
        "The paradox: treating flumazenil seizures means re-giving a benzodiazepine.",
      ],
      pyqConcepts: ["Mechanism/target of Flumazenil", "Key adverse effect: Seizures", "Dosing and titration of Flumazenil"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Flumazenil develops seizures — next best step?",
        "When to choose Flumazenil over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (competitive antagonist)",
        "Most common side effects: Agitation, anxiety, sweating (withdrawal effects), Nausea and dizziness",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The antidote that outlived its own heroism — know the seizure rules.",
        "1–2 minutes to wake, 60 minutes of cover — plan the observation around that mismatch.",
        "Shorter than everything it reverses: resedation is expected, not exceptional — the observation window is the treatment.",
        "The seizure paradox: in dependent brains the antidote CAUSES withdrawal — never give flumazenil to a chronic benzo user or an unknown overdose.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: competitive ANTAGONIST at the benzodiazepine site.",
    "Onset 1–2 min IV; duration 30–60 min (SHORTER than the drugs it reverses → resedation).",
    "Indications: pure benzo overdose + procedural over-sedation reversal.",
    "Seizure risk: chronic users, epileptics, TCA mixed overdoses.",
    "The paradox: treating flumazenil seizures means re-giving a benzodiazepine.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — reversal of benzodiazepine sedation (procedural, known-agent)",
      presentation: "A patient presenting with reversal of benzodiazepine sedation (procedural, known-agent), started on Flumazenil.",
      history: "A adult patient presents with a reversal of benzodiazepine sedation (procedural, known-agent) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with reversal of benzodiazepine sedation (procedural, known-agent); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Reversal of benzodiazepine sedation (procedural, known-agent). Differentials are considered and excluded clinically.",
      rationale: "Flumazenil is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine Antidote) with strong evidence in this condition.",
      management: "Started at 0.2 mg IV over 15 s, titrated to 0.2–1 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Flumazenil takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine Antidote vs related agents — orientation table",
      primaryDrug: "Flumazenil",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A benzodiazepine site (competitive antagonist)",
          comparisons: [
            {
              drug: "Flumazenil",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Flumazenil",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "None — it is the anti-sedative.",
          comparisons: [
            {
              drug: "Flumazenil",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "Flumazenil — see pearls",
          comparisons: [
            {
              drug: "Flumazenil",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Flumazenil is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Flumazenil reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (competitive antagonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (agitation, anxiety, sweating (withdrawal effects), nausea and dizziness). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (IV: 1–2 minutes.)",
      title: "Therapeutic effect builds",
      description: "IV: 1–2 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Flumazenil is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Flumazenil take to work?",
      answer: "IV: 1–2 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Flumazenil?",
      answer: "The most frequently reported effects are: Agitation, anxiety, sweating (withdrawal effects), Nausea and dizziness. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Flumazenil suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Flumazenil habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Flumazenil exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Flumazenil during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Flumazenil may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG100 (Alcohol Use Disorders)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), flumazenil monograph, p. 45",
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
        source: "FDA Prescribing Information for Anexate (Flumazenil)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for flumazenil — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Flumazenil",
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
      name: "Reversal of benzodiazepine sedation (procedural, known-agent)",
      relationship: "primary",
    },
    {
      name: "Benzodiazepine overdose (pure, known)",
      relationship: "primary",
    },
    {
      name: "Diagnosis of benzodiazepine contribution to coma (controversial)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Flumazenil",
      type: "drug",
      href: "/drugs/flumazenil",
      note: "The drug you're reading about",
    },
    {
      label: "Benzodiazepine Antidote",
      type: "class",
      href: "#mechanism",
      note: "Benzodiazepine Receptor Antagonist",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-A benzodiazepine site (competitive antagonist)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Amygdala",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Prefrontal Cortex",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Reversal of benzodiazepine sedation (procedural, known-agent)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Benzodiazepine overdose (pure, known)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Diagnosis of benzodiazepine contribution to coma (controversial)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Seizures",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Resedation (recurrence of overdose)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Agitation, anxiety, sweating (withdrawal effects)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Flumazenil",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The benzodiazepine antidote — pure antagonist with a seizure warning attached.",
    summary: "Flumazenil is a prescription medicine used to treat reversal of benzodiazepine sedation (procedural, known-agent). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Flumazenil is the antidote to the benzodiazepine family of sedatives: given into a vein, it wakes a person from benzodiazepine sedation within about two minutes. It is shorter-acting than the medicines it reverses, so patients must be watched as its effect wears off. In people who take benzodiazepines regularly it can cause fits — it is reserved for specific, known overdoses and procedure rooms.",
    sideEffects: "The most common side effects are: agitation, anxiety, sweating (withdrawal effects), nausea and dizziness. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Seizures and Resedation (recurrence of overdose). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: airway and ventilation (continuous through the resedation window); seizure readiness (during and after administration). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Tricyclic antidepressant co-ingestion, Chronic benzodiazepine use. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Anexate / Flumazenil (generic)",
        manufacturer: "legacy + generics",
        strengths: "0.1 mg/mL vials",
      },
    ],
    typicalDoses: "IV 0.2 mg repeated to 1–3 mg.",
    prescribingScenarios: [
      "Anaesthesia recovery suites.",
      "Emergency departments for KNOWN pure overdoses.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Continuous airway observation through the resedation window.",
    patientCounselling: ["—"],
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
    familyName: "Benzodiazepine Antagonists",
    members: [
      {
        name: "Flumazenil",
        slug: "flumazenil",
        relationship: "This guide",
        distinguishing: "See pearls",
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
      question: "Which molecular target does Flumazenil primarily act on?",
      options: [
        "GABA-A benzodiazepine site (competitive antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Flumazenil acts primarily at GABA-A benzodiazepine site (competitive antagonist). Flumazenil is a competitive benzodiazepine-site ANTAGONIST — the class's own antidote, displacing agonists from GABA-A.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Flumazenil?",
      options: [
        "Agitation, anxiety, sweating (withdrawal effects)",
        "Nausea and dizziness",
        "Weight gain",
        "Hair loss",
      ],
      correctIndex: 0,
      explanation: "Agitation, anxiety, sweating (withdrawal effects) — Reversal of sedation includes reversal of the comfortable part.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Flumazenil for procedural reversal (iv)?",
      options: ["0.2–1 mg", "1 mg per episode (3 mg/h max)", "0.2–1 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For procedural reversal (iv): start 0.2 mg IV over 15 s, target 0.2–1 mg, maximum 1 mg per episode (3 mg/h max). Repeat 0.2 mg every 1 min to max 1 mg",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Flumazenil in two sentences.",
      answer: "Flumazenil is a competitive benzodiazepine-site ANTAGONIST — the class's own antidote, displacing agonists from GABA-A. Net effect: Reversal of benzodiazepine sedation, respiratory depression, and amnesia within 1–2 minutes (duration 30–60 min).",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Flumazenil.",
      answer: "Reversal of benzodiazepine sedation (procedural, known-agent), Benzodiazepine overdose (pure, known), Diagnosis of benzodiazepine contribution to coma (controversial). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Flumazenil and how you would manage it.",
      answer: "Seizures: The signature risk: chronic benzo users, epileptics, TCA co-ingestion. Management: Stop flumazenil; benzodiazepine re-administration paradoxically treats it; resuscitation.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Flumazenil require?",
      answer: "Airway and ventilation (Continuous through the resedation window); Seizure readiness (During and after administration)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Flumazenil that separates safe prescribers from unsafe ones.",
      answer: "The antidote that outlived its own heroism — know the seizure rules.",
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
      checkpoint: "You now know what Flumazenil is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Flumazenil works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Flumazenil safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Flumazenil.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Flumazenil with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Flumazenil.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["IV: 1–2 minutes."],
    ifItWorks: [
      "Continue Flumazenil at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Flumazenil (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Flumazenil follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "None — it is the anti-sedative.",
    dosing: [
      {
        indication: "Procedural reversal (IV)",
        starting: "0.2 mg IV over 15 s",
        titration: "Repeat 0.2 mg every 1 min to max 1 mg",
        target: "0.2–1 mg",
        max: "1 mg per episode (3 mg/h max)",
      },
      {
        indication: "Overdose (known pure benzo, IV)",
        starting: "0.2 mg IV",
        titration: "Repeat to 1–3 mg total",
        target: "0.2–3 mg",
        max: "3 mg (re-assess if no response — it is not a benzo)",
      },
    ],
    dosageForms: ["Injection 0.1 mg/mL"],
    dosingTips: [
      "Airway and ventilation first — antidote second.",
      "Prolonged observation for resedation (hours, not minutes).",
      "Never in unknown or mixed overdose; never in chronic users.",
      "If seizures occur: benzodiazepines re-administered + resuscitation.",
    ],
    overdose: [
      "Overdose with Flumazenil is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Flumazenil is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 1 hour..",
      "Metabolism: Hepatic CYP3A4/1A2 (rapid)..",
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
      "The only benzo antidote.",
      "Rapid diagnostic confirmation in the RIGHT setting.",
    ],
    potentialDisadvantages: [
      "Resedation window demands prolonged observation.",
      "Seizure paradox limits real-world use.",
      "Largely displaced by airway-first overdose care.",
    ],
    primaryTargetSymptoms: [
      "Benzodiazepine over-sedation (procedural and pure overdose)",
    ],
    pearls: [
      "The antidote that outlived its own heroism — know the seizure rules.",
      "1–2 minutes to wake, 60 minutes of cover — plan the observation around that mismatch.",
      "Shorter than everything it reverses: resedation is expected, not exceptional — the observation window is the treatment.",
      "The seizure paradox: in dependent brains the antidote CAUSES withdrawal — never give flumazenil to a chronic benzo user or an unknown overdose.",
      "TCA co-ingestion: reversing the benzo's anticonvulsant cover unmasks TCA seizures — the classic exam scenario.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
