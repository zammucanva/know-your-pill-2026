import type { Drug } from "../types";

/**
 * Tasimelteon — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), tasimelteon monograph (book p. 118)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const tasimelteon: Drug = {
  /* ---- Identity ---- */
  slug: "tasimelteon",
  genericName: "Tasimelteon",
  brandNames: ["Hetlioz"],
  drugClass: "melatonergic-agonist",
  drugClassLabel: "Melatonin Agonist",
  drugClassFullName: "Melatonin MT1/MT2 Receptor Agonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Melatonin Agonists", "Tasimelteon"],
  /* ---- Hero / summary ---- */
  tagline: "The Non-24-Hour Sleep-Wake Disorder drug: circadian entrainment for the blind.",
  summary: "Tasimelteon is an MT1/MT2 melatonin agonist approved for Non-24-Hour Sleep-Wake Rhythm Disorder (Non-24) in blind individuals: the first drug ever approved for that orphan indication. Its entire identity is circadian: it entrains the free-running clock of patients without light input, restoring a 24-hour sleep-wake cycle.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Tasimelteon (from its molecular target (Melatonin MT1/MT2 receptors (agonist)) circadian entrainment) to clinical effect.",
    "List the FDA-approved and off-label uses of Tasimelteon.",
    "Predict the common and serious side effects of Tasimelteon from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Tasimelteon.",
    "Compare Tasimelteon with other melatonin agonists and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "MT1/MT2 agonist that entrains the free-running suprachiasmatic clock: the orphan-drug mechanism for Non-24.",
    molecularTarget: "Melatonin MT1/MT2 receptors (agonist): circadian entrainment",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Tasimelteon is an MT1/MT2 melatonin agonist approved for Non-24-Hour Sleep-Wake Rhythm Disorder (Non-24) in blind individuals (the first drug ever approved for that orphan indication) the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 1.3 hours (entrainment effects persist pharmacodynamically). See mechanism and prescriber sections.",
    halfLife: "About 1.3 hours (entrainment effects persist pharmacodynamically).",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Tasimelteon",
        sublabel: "Melatonin receptor agonist",
        variant: "process",
      },
      {
        id: "mt",
        label: "MT1 / MT2 receptors",
        sublabel: "Suprachiasmatic nucleus (body clock)",
        variant: "target",
      },
      {
        id: "clock",
        label: "Circadian rhythm",
        sublabel: "Sleep–wake timing reset",
        variant: "process",
      },
      {
        id: "sleep",
        label: "Sleep onset",
        sublabel: "Promoted without respiratory depression",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "mt",
        label: "activates",
        type: "stimulate",
      },
      {
        from: "mt",
        to: "clock",
        label: "entrains",
      },
      {
        from: "clock",
        to: "sleep",
        label: "times",
      },
    ],
    caption: "Targeting the body clock rather than sedating the cortex: melatonergic agents restore sleep timing without dependence or rebound insomnia.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "Melatonin MT1/MT2 receptors (agonist): circadian entrainment",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Non-24-Hour Sleep-Wake Rhythm Disorder (Non-24) in blind individuals",
      status: "fda-approved",
      description: "20 mg daily before bedtime: the first approved treatment.",
    },
    {
      name: "Smith-Magenis syndrome (circadian disruption)",
      status: "fda-approved",
      description: "Approved in the USA for SMS circadian disorder.",
    },
    {
      name: "Non-24 in sighted individuals",
      status: "off-label",
      description: "Investigational/individual use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Tasimelteon must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Complex sleep behaviours",
      text: "Class-of-hypnotics warning applies to the drug class; stop on any event.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "The most common effect.",
      management: "Reassurance.",
    },
    {
      name: "Somnolence and abnormal dreams/nightmares",
      frequency: "common",
      severity: "mild",
      description: "Circadian-phase effects.",
      management: "Dose timing counselling.",
    },
    {
      name: "Elevated liver enzymes",
      frequency: "common",
      severity: "moderate",
      description: "Transaminase rises reported.",
      management: "LFT monitoring.",
    },
    {
      name: "Nasopharyngitis and upper respiratory symptoms",
      frequency: "common",
      severity: "mild",
      description: "Reported in trials.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "severe",
      description: "Enzyme rises occasionally significant.",
      management: "LFT monitoring; stop if symptomatic elevation.",
    },
    {
      name: "Complex sleep behaviours",
      frequency: "rare",
      severity: "severe",
      description: "Class warning.",
      management: "Stop.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Liver function",
      frequency: "Baseline and periodically",
      rationale: "The label surveillance.",
    },
    {
      parameter: "Sleep-wake diary (entrainment confirmation)",
      frequency: "Ongoing",
      rationale: "The treatment target is the 24-h cycle, not just sleep depth.",
    },
  ],
  interactions: [
    {
      drug: "Strong CYP3A4 inhibitors and 1A2 inhibitors (fluvoxamine)",
      severity: "major",
      mechanism: "Raise tasimelteon levels.",
      action: "Avoid; fluvoxamine contraindicated.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; orphan-indication decisions are specialist and individualised.",
    lactation: "Unknown; avoid pending data.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Tasimelteon is a medicine for a specific rare condition called Non-24-Hour Sleep-Wake Disorder, most often in people who are blind, whose internal body clock drifts longer than 24 hours and free-runs out of sync with day and night. It mimics the body's clock-setting hormone and helps re-anchor the sleep-wake cycle to a 24-hour day.",
  patientEducationPoints: [
    "Take it exactly as prescribed, at the same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Tasimelteon builds over weeks. Do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The orphan-drug identity: the first and only approved treatment for Non-24 in the blind.",
    "Entrainment, not sedation: judge success by the 24-h cycle consolidating, not by sleep depth alone.",
    "Timing is the prescription: same clock-time daily, before target bedtime.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Tasimelteon: MT1/MT2 agonist that entrains the free-running suprachiasmatic clock; the orphan-drug mechanism for Non-24.",
        "Uses of Tasimelteon: Non-24-Hour Sleep-Wake Rhythm Disorder (Non-24) in blind individuals; Smith-Magenis syndrome (circadian disruption); Non-24 in sighted individuals",
        "MT1/MT2 agonist: the Non-24 orphan drug.",
        "The first drug approved for Non-24-Hour Sleep-Wake Rhythm Disorder (blind individuals).",
      ],
      practical: [
        "Prescribe Tasimelteon for non-24-hour sleep-wake rhythm disorder (non-24) in blind individuals with dose, timing, and duration.",
        "Outline the monitoring plan: Liver function (Baseline and periodically); Sleep-wake diary (entrainment confirmation) (Ongoing)",
      ],
      longAnswer: [
        "Tasimelteon: mechanism, indications, adverse effects, contraindications, and dosing; structured answer framework.",
        "MT1/MT2 agonist: the Non-24 orphan drug.",
        "The first drug approved for Non-24-Hour Sleep-Wake Rhythm Disorder (blind individuals).",
      ],
    },
    neetPg: {
      highYield: [
        "MT1/MT2 agonist: the Non-24 orphan drug.",
        "The first drug approved for Non-24-Hour Sleep-Wake Rhythm Disorder (blind individuals).",
        "Dose 20 mg daily before bedtime; timing is pharmacology.",
        "Also approved for Smith-Magenis syndrome circadian disorder.",
        "Hepatic metabolism (1A2/3A4): fluvoxamine and ketoconazole contraindicated; LFT monitoring per label.",
      ],
      pyqConcepts: ["Mechanism/target of Tasimelteon", "Key adverse effect: Hepatotoxicity", "Dosing and titration of Tasimelteon"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Tasimelteon develops hepatotoxicity: next best step?",
        "When to choose Tasimelteon over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Melatonin MT1/MT2 receptors (agonist); circadian entrainment",
        "Most common side effects: Headache, Somnolence and abnormal dreams/nightmares, Elevated liver enzymes",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The orphan-drug identity: the first and only approved treatment for Non-24 in the blind.",
        "Entrainment, not sedation: judge success by the 24-h cycle consolidating, not by sleep depth alone.",
        "Timing is the prescription: same clock-time daily, before target bedtime.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "MT1/MT2 agonist: the Non-24 orphan drug.",
    "The first drug approved for Non-24-Hour Sleep-Wake Rhythm Disorder (blind individuals).",
    "Dose 20 mg daily before bedtime; timing is pharmacology.",
    "Also approved for Smith-Magenis syndrome circadian disorder.",
    "Hepatic metabolism (1A2/3A4): fluvoxamine and ketoconazole contraindicated; LFT monitoring per label.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation: non-24-hour sleep-wake rhythm disorder (non-24) in blind individuals",
      presentation: "A patient presenting with non-24-hour sleep-wake rhythm disorder (non-24) in blind individuals, started on Tasimelteon.",
      history: "A adult patient presents with a non-24-hour sleep-wake rhythm disorder (non-24) in blind individuals picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with non-24-hour sleep-wake rhythm disorder (non-24) in blind individuals; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Non-24-Hour Sleep-Wake Rhythm Disorder (Non-24) in blind individuals. Differentials are considered and excluded clinically.",
      rationale: "Tasimelteon is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Melatonin Agonist) with strong evidence in this condition.",
      management: "Started at 20 mg daily before bedtime, titrated to 20 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Tasimelteon takes weeks for full effect: early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Melatonin Agonist comparison: choosing within the class",
      primaryDrug: "Tasimelteon",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Melatonin MT1/MT2 receptors (agonist): circadian entrainment",
          comparisons: [
            {
              drug: "Ramelteon",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 1.3 hours (entrainment effects persist pharmacodynamically).",
          comparisons: [
            {
              drug: "Ramelteon",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not associated with weight gain.",
          comparisons: [
            {
              drug: "Ramelteon",
              value: "Not associated with weight gain.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High for the intended duration.",
          comparisons: [
            {
              drug: "Ramelteon",
              value: "High for the intended duration.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Non-24-Hour disorder in the blind: the orphan clock drug",
          comparisons: [
            {
              drug: "Ramelteon",
              value: "The dependence-free sleep-onset option: body-clock pharmacology",
            },
          ],
        },
      ],
      takeaway: "All melatonin agonists share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile: comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Tasimelteon reaches peak plasma concentration and begins acting at its molecular target (Melatonin MT1/MT2 receptors (agonist), circadian entrainment). Initial effects are on sleep, energy, or side effects, not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (headache, somnolence and abnormal dreams/nightmares, elevated liver enzymes). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Entrainment builds over weeks to months of consistent timing.)",
      title: "Therapeutic effect builds",
      description: "Entrainment builds over weeks to months of consistent timing. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Tasimelteon is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Tasimelteon take to work?",
      answer: "Entrainment builds over weeks to months of consistent timing.. Like most psychotropic medications, the full benefit builds gradually, some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Tasimelteon?",
      answer: "The most frequently reported effects are: Headache, Somnolence and abnormal dreams/nightmares, Elevated liver enzymes, Nasopharyngitis and upper respiratory symptoms. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Tasimelteon suddenly?",
      answer: "No. Taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose. In that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Tasimelteon habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Tasimelteon exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Tasimelteon during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure. Tasimelteon may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG91; APA MDD Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), tasimelteon monograph, p. 118",
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
        source: "FDA Prescribing Information for Hetlioz (Tasimelteon)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for tasimelteon — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Tasimelteon",
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
      name: "Ramelteon",
      slug: "ramelteon",
      drugClass: "Melatonin Agonist",
      relationship: "Same class (Melatonin Agonist)",
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
      name: "Non-24-Hour Sleep-Wake Rhythm Disorder (Non-24) in blind individuals",
      relationship: "primary",
    },
    {
      name: "Smith-Magenis syndrome (circadian disruption)",
      relationship: "primary",
    },
    {
      name: "Non-24 in sighted individuals",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Tasimelteon",
      type: "drug",
      href: "/drugs/tasimelteon",
      note: "The drug you're reading about",
    },
    {
      label: "Melatonin Agonist",
      type: "class",
      href: "#mechanism",
      note: "Melatonin MT1/MT2 Receptor Agonist",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Melatonin MT1/MT2 receptors (agonist): circadian entrainment",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Non-24-Hour Sleep-Wake Rhythm Disorder (Non-24) in blind individuals",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Smith-Magenis syndrome (circadian disruption)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Non-24 in sighted individuals",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hepatotoxicity",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Complex sleep behaviours",
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
      label: "Patient Guide. Tasimelteon",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The Non-24-Hour Sleep-Wake Disorder drug: circadian entrainment for the blind.",
    summary: "Tasimelteon is a prescription medicine used to treat non-24-hour sleep-wake rhythm disorder (non-24) in blind individuals. It belongs to a well-studied class of medicines and works gradually, most people notice the benefit over weeks, not days.",
    mechanism: "Tasimelteon is a medicine for a specific rare condition called Non-24-Hour Sleep-Wake Disorder, most often in people who are blind, whose internal body clock drifts longer than 24 hours and free-runs out of sync with day and night. It mimics the body's clock-setting hormone and helps re-anchor the sleep-wake cycle to a 24-hour day.",
    sideEffects: "The most common side effects are: headache, somnolence and abnormal dreams/nightmares, elevated liver enzymes, nasopharyngitis and upper respiratory symptoms. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hepatotoxicity and Complex sleep behaviours. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you: there is almost always a solution.",
    monitoring: "Your doctor will monitor: liver function (baseline and periodically); sleep-wake diary (entrainment confirmation) (ongoing). Keep every appointment: these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take, including over-the-counter and herbal products. Common interacting agents include: Strong CYP3A4 inhibitors and 1A2 inhibitors (fluvoxamine). Avoid alcohol unless your doctor says it is safe.",
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
    typicalDoses: "20 mg daily before bedtime (orphan-access programmes).",
    prescribingScenarios: [
      "Blind patients with Non-24 via special access.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "high",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance; see the Monitoring section.",
    patientCounselling: [
      "Timing consistency is the whole treatment.",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Melatonin Agonists",
    members: [
      {
        name: "Tasimelteon",
        slug: "tasimelteon",
        relationship: "This guide",
        distinguishing: "Non-24-Hour disorder in the blind: the orphan clock drug",
      },
      {
        name: "Ramelteon",
        slug: "ramelteon",
        relationship: "Same class (Melatonin Agonist)",
        distinguishing: "The dependence-free sleep-onset option: body-clock pharmacology",
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
      question: "Which molecular target does Tasimelteon primarily act on?",
      options: [
        "Melatonin MT1/MT2 receptors (agonist) — circadian entrainment",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Tasimelteon acts primarily at Melatonin MT1/MT2 receptors (agonist) — circadian entrainment. MT1/MT2 agonist that entrains the free-running suprachiasmatic clock — the orphan-drug mechanism for Non-24.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Tasimelteon?",
      options: [
        "Headache",
        "Somnolence and abnormal dreams/nightmares",
        "Elevated liver enzymes",
        "Nasopharyngitis and upper respiratory symptoms",
      ],
      correctIndex: 0,
      explanation: "Headache — The most common effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Tasimelteon for non-24-hour sleep-wake disorder?",
      options: ["20 mg", "20 mg (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For non-24-hour sleep-wake disorder: start 20 mg daily before bedtime, target 20 mg, maximum 20 mg. Same clock time daily; entrainment needs consistency",
      afterSectionId: "prescriber-guide",
    },
    {
      id: "slp-tas-01",
      question: "A 32-year-old totally blind man has had months of drifting sleep: on some nights he sleeps well, on others he is wide awake until dawn, and his daytime sleepiness keeps shifting across the clock. Which drug was developed specifically for his condition?",
      options: [
        "Tasimelteon, approved for non-24-hour sleep-wake disorder in totally blind individuals",
        "Extended-release zolpidem, the Z-drug designed for circadian disorders",
        "Suvorexant, the orexin antagonist labelled for circadian rhythm rebuilding",
        "Diphenhydramine, because over-the-counter sedation resets the circadian pacemaker"
      ],
      correctIndex: 0,
      explanation: "Tasimelteon is an MT1/MT2 melatonin receptor agonist approved for non-24-hour sleep-wake disorder (Katzung), the free-running rhythm that develops when totally blind individuals lose the light entrainment of the suprachiasmatic nucleus. Zolpidem and suvorexant are hypnotics for insomnia, not circadian entrainers, and diphenhydramine neither resets nor stabilises the pacemaker. The blind-patient vignette with drifting sleep is the exam hook for this orphan drug.",
      afterSectionId: "quick-facts",
    },
    {
      id: "slp-tas-02",
      question: "Tasimelteon's pharmacology most closely resembles which agent, and through what target?",
      options: [
        "Hydroxyzine, through central H1 antagonism with anticholinergic sedation",
        "Ramelteon, through agonism at MT1 and MT2 melatonin receptors with no direct GABAergic action",
        "Zopiclone, through agonism at the benzodiazepine site of GABA-A receptors",
        "Suvorexant, through antagonism at OX1 and OX2 orexin receptors"
      ],
      correctIndex: 1,
      explanation: "Katzung describes tasimelteon as similar to ramelteon, an orally active MT1/MT2 agonist with no direct effects on GABAergic neurotransmission, approved for non-24-hour sleep-wake disorder. The GABAergic, orexin and histamine descriptions map onto the Z-drugs, suvorexant and hydroxyzine respectively and are wrong for tasimelteon. Its melatonergic profile also predicts the absence of abuse liability.",
      afterSectionId: "mechanism",
    },
    {
      id: "slp-tas-03",
      question: "Why does a totally blind patient develop non-24-hour sleep-wake disorder, and how does tasimelteon help?",
      options: [
        "Permanent darkness raises orexin tone, and tasimelteon blocks orexin receptors to restore the rhythm",
        "The disorder reflects loss of GABA-A receptors in the thalamus, and tasimelteon replaces the missing GABA input",
        "Light no longer entrains the suprachiasmatic nucleus, so the pacemaker free-runs; tasimelteon's MT1/MT2 agonism supplies entraining input that stabilises the rhythm",
        "The blind patient's pineal gland atrophies, and tasimelteon surgically restores melatonin output"
      ],
      correctIndex: 2,
      explanation: "In total blindness, retinal light input cannot reach the suprachiasmatic nuclei, so the endogenous circadian pacemaker drifts on its intrinsic cycle of just over 24 hours; melatonin receptor agonism at MT1/MT2, the pathway through which darkness signals reach the SCN, is the handle tasimelteon uses to re-entrain the rhythm. The pineal is not surgically restorable, orexin is a wake-promoting system unrelated to light entrainment, and no GABA replacement occurs. Entrainment, not sedation, is the therapeutic concept.",
      afterSectionId: "neural-pathways",
    },
    {
      id: "slp-tas-04",
      question: "Which statement about tasimelteon's regulatory niche is correct?",
      options: [
        "It is the first-line over-the-counter hypnotic for insomnia in India",
        "It carries a boxed warning for complex sleep behaviours identical to zolpidem's",
        "It is approved as an antipsychotic adjunct with a prolactin-lowering label",
        "It is an orphan-drug niche agent approved specifically for non-24-hour sleep-wake disorder, not a first-line hypnotic for ordinary insomnia"
      ],
      correctIndex: 3,
      explanation: "Tasimelteon occupies a narrow orphan niche, the treatment of non-24-hour sleep-wake disorder in the totally blind (Katzung: approved for non-24-hour sleep-wake disorder), rather than competing as a general insomnia hypnotic. It is not an over-the-counter product, has no zolpidem-style boxed warning for complex sleep behaviours, and has no antipsychotic or prolactin indication. The niche label is exactly what examiners test.",
      afterSectionId: "quick-facts",
    },
    {
      id: "slp-tas-05",
      question: "A junior resident plans to prescribe tasimelteon for a sighted office worker with simple sleep-onset insomnia. What is the strongest objection?",
      options: [
        "Tasimelteon's approved evidence lies in non-24-hour disorder of the blind; for ordinary insomnia the evidence-based routes are agents such as ramelteon for sleep-onset latency and CBT-I",
        "Tasimelteon is contraindicated in sighted people because light destroys the drug in the retina",
        "Tasimelteon is a strong orexin blocker and will cause narcolepsy in sighted users",
        "Tasimelteon requires daily ECGs because it prolongs the QT interval at therapeutic doses"
      ],
      correctIndex: 0,
      explanation: "The teaching point is indication discipline: tasimelteon was developed and approved for non-24-hour sleep-wake disorder in totally blind individuals, and using it for garden-variety insomnia ignores the evidence base that supports ramelteon for sleep-onset latency and CBT-I as first-line therapy. Photosensitivity, iatrogenic narcolepsy and routine QT prolongation are invented hazards. Orphan drugs are not interchangeable with conventional hypnotics.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "slp-tas-06",
      question: "Like ramelteon, tasimelteon's abuse and scheduling profile is best described as:",
      options: [
        "Scheduled as a Schedule X drug in India but unscheduled everywhere else",
        "No abuse potential and no controlled-substance scheduling, in contrast to scheduled Z-drugs and benzodiazepines",
        "Schedule II status requiring triplicate prescription because of euphoric effects",
        "High abuse liability mediated by dopamine reuptake inhibition in the nucleus accumbens"
      ],
      correctIndex: 1,
      explanation: "As a melatonergic agonist acting on circadian receptors rather than on reward or GABA pathways, tasimelteon shares ramelteon's absence of euphoria, dependence and scheduling, which is the class contrast examiners love against the scheduled Z-drugs and benzodiazepines. Dopamine-reuptake stimulant pharmacology describes amphetamine-like agents, not melatonergics, and there is no India-specific Schedule X status for it. The scheduled-versus-unscheduled ladder is a recurring KYP pearl.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "slp-tas-07",
      question: "Which contrast between the two melatonin receptor agonists is correct?",
      options: [
        "Both are approved only for narcolepsy with cataplexy",
        "Both are approved only as adjuncts to antipsychotics for drug-induced insomnia",
        "Ramelteon is indicated for sleep-onset insomnia; tasimelteon for non-24-hour sleep-wake disorder in the blind",
        "Tasimelteon is indicated for sleep-onset insomnia; ramelteon for non-24-hour disorder in the blind"
      ],
      correctIndex: 2,
      explanation: "The pairing is symmetrical and memorable: ramelteon carries the sleep-onset insomnia label (Katzung: prescribed for difficulty falling asleep), while tasimelteon carries the non-24-hour sleep-wake disorder label for the totally blind. Neither is a narcolepsy drug, since narcolepsy reflects orexin loss and would point toward orexin agonism rather than antagonism, and neither has an antipsychotic-adjunct label. Swapping the two indications is the classic mirror trap.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "slp-tas-08",
      question: "A blind patient starting tasimelteon asks how to take it. Which counselling is most appropriate?",
      options: [
        "Take it only on the nights when you cannot sleep, at whatever time suits, to preserve the drug effect",
        "Take it at breakfast with strong tea to counteract daytime sleepiness",
        "Take double the dose on weekends to reset the rhythm for the whole week",
        "Take it at a fixed time before the intended bedtime every night, keeping a consistent dark, quiet sleep window"
      ],
      correctIndex: 3,
      explanation: "Circadian entrainment therapy works only with a fixed nightly dosing time anchored to the intended sleep period; erratic, as-needed or weekend-doubling dosing defeats the very entrainment the drug is meant to provide. Morning dosing inverts the phase signal, and caffeine co-administration has no place. Consistency of the sleep-wake schedule is part of the treatment, not an optional extra.",
      afterSectionId: "quick-facts",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Tasimelteon in two sentences.",
      answer: "MT1/MT2 agonist that entrains the free-running suprachiasmatic clock: the orphan-drug mechanism for Non-24. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Tasimelteon.",
      answer: "Non-24-Hour Sleep-Wake Rhythm Disorder (Non-24) in blind individuals, Smith-Magenis syndrome (circadian disruption), Non-24 in sighted individuals. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Tasimelteon and how you would manage it.",
      answer: "Hepatotoxicity: Enzyme rises occasionally significant. Management: LFT monitoring; stop if symptomatic elevation.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Tasimelteon require?",
      answer: "Liver function (Baseline and periodically); Sleep-wake diary (entrainment confirmation) (Ongoing)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Tasimelteon that separates safe prescribers from unsafe ones.",
      answer: "The orphan-drug identity: the first and only approved treatment for Non-24 in the blind.",
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
      description: "Everything: advanced reasoning, full prescriber guide, evidence, and references.",
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
      checkpoint: "You now know what Tasimelteon is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Tasimelteon works, from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Tasimelteon safely: indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Tasimelteon.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Tasimelteon with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Tasimelteon.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Entrainment builds over weeks to months of consistent timing.",
    ],
    ifItWorks: [
      "Continue Tasimelteon at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Tasimelteon (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Tasimelteon follow directly from its receptor and organ effects: predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Not associated with weight gain.",
    sedation: "High for the intended duration.",
    dosing: [
      {
        indication: "Non-24-Hour Sleep-Wake Disorder",
        starting: "20 mg daily before bedtime",
        titration: "Same clock time daily; entrainment needs consistency",
        target: "20 mg",
        max: "20 mg",
      },
    ],
    dosageForms: ["Capsules 20 mg"],
    dosingTips: [
      "Same clock time daily: entrainment is a timing treatment.",
      "Expect months, not nights.",
      "Liver monitoring per label.",
    ],
    overdose: [
      "Overdose with Tasimelteon is managed supportively: no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Tasimelteon is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 1.3 hours (entrainment effects persist pharmacodynamically)..",
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
    potentialAdvantages: ["The only entrainment drug for Non-24.", "No dependence potential (melatonergic)."],
    potentialDisadvantages: ["Orphan pricing.", "Slow measurable benefit.", "Hepatic monitoring."],
    primaryTargetSymptoms: ["Non-24-Hour circadian entrainment", "Smith-Magenis circadian disruption"],
    pearls: [
      "The orphan-drug identity: the first and only approved treatment for Non-24 in the blind.",
      "Entrainment, not sedation: judge success by the 24-h cycle consolidating, not by sleep depth alone.",
      "Timing is the prescription: same clock-time daily, before target bedtime.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017); facts are paraphrased, not reproduced.",
  ],
};
