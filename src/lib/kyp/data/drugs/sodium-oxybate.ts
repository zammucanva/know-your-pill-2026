import type { Drug } from "../types";

/**
 * Sodium Oxybate — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), sodium oxybate monograph (book p. 115)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const sodiumOxybate: Drug = {
  /* ---- Identity ---- */
  slug: "sodium-oxybate",
  genericName: "Sodium Oxybate",
  brandNames: ["Xyrem", "Xywav (low-sodium)"],
  drugClass: "narcolepsy-treatment",
  drugClassLabel: "Sodium Oxybate",
  drugClassFullName: "GHB (Cataplexy & Excessive Daytime Sleepiness)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Specialised Agents", "Narcolepsy Agents", "Sodium Oxybate"],
  /* ---- Hero / summary ---- */
  tagline: "The narcolepsy wonder and the controlled-substance paradox — GHB medicine for cataplexy.",
  summary: "Sodium oxybate (gamma-hydroxybutyrate, GHB) is the sodium salt of the endogenous GABA-B agonist: the most effective treatment for cataplexy, excessive daytime sleepiness, and disrupted night-time sleep in narcolepsy — taken as two nightly liquid doses (its 30-minute half-life). Its recreation-drug history (GHB) makes it the most strictly controlled substance in medicine (Schedule X-class everywhere), dispensed only through restricted programmes.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Sodium Oxybate — from its molecular target (GABA-B receptors (agonist) + GHB receptors; night-time sodium oxybate consolidates sleep architecture) to clinical effect.",
    "List the FDA-approved and off-label uses of Sodium Oxybate.",
    "Predict the common and serious side effects of Sodium Oxybate from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Sodium Oxybate.",
    "Compare Sodium Oxybate with other sodium oxybates and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Sodium oxybate is exogenous GHB — agonising GABA-B (and GHB) receptors to consolidate fragmented narcoleptic night sleep, which secondarily reduces cataplexy and daytime sleepiness.",
    molecularTarget: "GABA-B receptors (agonist) + GHB receptors; night-time sodium oxybate consolidates sleep architecture",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Sodium oxybate is exogenous GHB — agonising GABA-B (and GHB) receptors to consolidate fragmented narcoleptic night sleep, which secondarily reduces cataplexy and daytime sleepiness.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 30-60 minutes. — see mechanism and prescriber sections.",
    halfLife: "30-60 minutes.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
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
        label: "Sodium Oxybate",
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
  receptors: ["GABA-B receptor (agonist)", "GHB receptor"],
  brainRegionIds: ["prefrontal-cortex", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Narcolepsy with cataplexy",
      status: "fda-approved",
      description: "The most effective cataplexy therapy — often transforming the lives of heavily cataplectic patients.",
    },
    {
      name: "Excessive daytime sleepiness in narcolepsy",
      status: "fda-approved",
      description: "Reduces sleepiness through night-sleep consolidation.",
    },
    {
      name: "Idiopathic hypersomnia (some regions)",
      status: "guideline",
      description: "Approved in some jurisdictions.",
    },
    {
      name: "Alcohol-withdrawal syndrome (historic)",
      status: "off-label",
      description: "Its Italian historic use.",
    },
    {
      name: "Fibromyalgia (studied)",
      status: "off-label",
      description: "Mixed evidence.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Sodium Oxybate must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Alcohol, benzodiazepines, opioids, and all CNS depressants",
      severity: "absolute",
      rationale: "Respiratory depression — the catastrophic combination.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "CNS depressant combinations and misuse potential",
      text: "Sodium oxybate causes respiratory depression when combined with alcohol, benzodiazepines, or opioids — potentially fatal. Misuse and diversion risks require restricted-programme dispensing.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description: "The commonest effect — often transient.",
      management: "Take with food interval separation; antiemetic.",
    },
    {
      name: "Dizziness and headache",
      frequency: "common",
      severity: "mild",
      description: "Usually mild.",
      management: "Reassurance.",
    },
    {
      name: "Night-time confusion/wandering",
      frequency: "uncommon",
      severity: "moderate",
      description: "Bed-bound discipline reduces risk.",
      management: "Bathroom before dosing; safe bedroom.",
    },
    {
      name: "Enuresis",
      frequency: "uncommon",
      severity: "moderate",
      description: "Deep-sleep effect.",
      management: "Practical management.",
    },
    {
      name: "Sodium load (Xyrem)",
      frequency: "common",
      severity: "moderate",
      description: "Significant nightly sodium — Xywav reduced-sodium alternative.",
      management: "BP review; heart-failure caution.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression (with alcohol, benzodiazepines, opioids)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The controlled-substance core danger — CNS-depressant combinations.",
      management: "Absolute contraindication counselling; medical-alert documentation.",
    },
    {
      name: "Misuse, dependence, and diversion",
      frequency: "uncommon",
      severity: "severe",
      description: "GHB's recreation history — the restricted-programme rationale.",
      management: "Programme dispensing only; secure storage.",
    },
    {
      name: "Sleepwalking and falls",
      frequency: "uncommon",
      severity: "moderate",
      description: "Post-dose ambulation risk.",
      management: "Bed-bound protocol.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Cataplexy frequency and sleepiness scores",
      frequency: "Every review",
      rationale: "The treatment targets.",
    },
    {
      parameter: "Sodium load and blood pressure (Xyrem)",
      frequency: "At review",
      rationale: "The nightly sodium arithmetic.",
    },
    {
      parameter: "Programme compliance and storage",
      frequency: "Every dispensing cycle",
      rationale: "The controlled-substance discipline.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol, benzodiazepines, opioids, and all CNS depressants",
      severity: "contraindicated",
      mechanism: "Respiratory depression — the catastrophic combination.",
      action: "Absolute prohibition counselling.",
    },
    {
      drug: "Other sleep-promoting agents",
      severity: "major",
      mechanism: "Additive night sedation.",
      action: "Separate; caution.",
    },
  ],
  pregnancy: {
    summary: "Limited data; decisions individualised in narcolepsy programmes with obstetric co-management.",
    lactation: "Excreted in milk likely; decisions individualised.",
  },
  renalAdjustment: "Standard caution in significant impairment.",
  hepaticAdjustment: "Reduce dose (major hepatic metabolism and first-pass).",
  /* ---- Education ---- */
  patientExplanation: "Sodium oxybate is the most effective medicine for narcolepsy with cataplexy — taken as a liquid in two doses during the night (one at bedtime, one when an alarm wakes you 2-4 hours later). It consolidates the broken night sleep of narcolepsy, which powerfully reduces collapse attacks and daytime sleepiness. It is very strictly controlled (it is related to a misused street drug), so it comes only through special programmes — and it must NEVER be combined with alcohol, sleeping tablets, or opioid painkillers, because the combination can stop breathing.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Sodium Oxybate builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The two-alarm ritual: dose one in bed, set an alarm for 2.5-4 hours later, dose two in bed — the dosing architecture IS the safety system.",
    "The night-to-day paradox: a night-sleep sedative that reduces DAYTIME sleepiness and cataplexy — consolidating narcoleptic sleep architecture transforms the disease.",
    "The controlled-substance summit: heroin-class scheduling with medical-programme access — the tightest distribution in pharmacotherapy (REMS-era pipeline).",
    "The sodium arithmetic: Xyrem carries a real nightly sodium load — heart-failure and hypertension patients need the Xywav low-sodium version.",
    "The alcohol/benzo absolute: the respiratory-depression combinations are the catastrophic scenario — counselling and alert documentation.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Sodium Oxybate: Sodium oxybate is exogenous GHB — agonising GABA-B (and GHB) receptors to consolidate fragmented narcoleptic night sleep, which secondarily reduces cataplexy and daytime sleepiness.",
        "Uses of Sodium Oxybate: Narcolepsy with cataplexy; Excessive daytime sleepiness in narcolepsy; Idiopathic hypersomnia (some regions); Alcohol-withdrawal syndrome (historic)",
        "Identity: sodium oxybate = medical GHB — GABA-B agonist.",
        "Indications: cataplexy + EDS in narcolepsy (the most effective cataplexy therapy).",
      ],
      practical: [
        "Prescribe Sodium Oxybate for narcolepsy with cataplexy with dose, timing, and duration.",
        "Outline the monitoring plan: Cataplexy frequency and sleepiness scores (Every review); Sodium load and blood pressure (Xyrem) (At review); Programme compliance and storage (Every dispensing cycle)",
      ],
      longAnswer: [
        "Sodium Oxybate: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Identity: sodium oxybate = medical GHB — GABA-B agonist.",
        "Indications: cataplexy + EDS in narcolepsy (the most effective cataplexy therapy).",
      ],
    },
    neetPg: {
      highYield: [
        "Identity: sodium oxybate = medical GHB — GABA-B agonist.",
        "Indications: cataplexy + EDS in narcolepsy (the most effective cataplexy therapy).",
        "Dosing: TWO nightly doses 2.5-4 h apart (short half-life, in-bed administration).",
        "Controls: maximum-schedule (X-class/REMS programmes) — misuse history.",
        "Absolute contraindications: alcohol, benzodiazepines, opioids (respiratory depression).",
        "Sodium load consideration (Xywav low-sodium alternative).",
      ],
      pyqConcepts: [
        "Mechanism/target of Sodium Oxybate",
        "Key adverse effect: Respiratory depression (with alcohol, benzodiazepines, opioids)",
        "Dosing and titration of Sodium Oxybate",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Sodium Oxybate develops respiratory depression (with alcohol, benzodiazepines, opioids) — next best step?",
        "When to choose Sodium Oxybate over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-B receptors (agonist) + GHB receptors; night-time sodium oxybate consolidates sleep architecture",
        "Most common side effects: Nausea, Dizziness and headache, Night-time confusion/wandering",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The two-alarm ritual: dose one in bed, set an alarm for 2.5-4 hours later, dose two in bed — the dosing architecture IS the safety system.",
        "The night-to-day paradox: a night-sleep sedative that reduces DAYTIME sleepiness and cataplexy — consolidating narcoleptic sleep architecture transforms the disease.",
        "The controlled-substance summit: heroin-class scheduling with medical-programme access — the tightest distribution in pharmacotherapy (REMS-era pipeline).",
        "The sodium arithmetic: Xyrem carries a real nightly sodium load — heart-failure and hypertension patients need the Xywav low-sodium version.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Identity: sodium oxybate = medical GHB — GABA-B agonist.",
    "Indications: cataplexy + EDS in narcolepsy (the most effective cataplexy therapy).",
    "Dosing: TWO nightly doses 2.5-4 h apart (short half-life, in-bed administration).",
    "Controls: maximum-schedule (X-class/REMS programmes) — misuse history.",
    "Absolute contraindications: alcohol, benzodiazepines, opioids (respiratory depression).",
    "Sodium load consideration (Xywav low-sodium alternative).",
    "Mechanistic paradox: night sedation that improves daytime sleepiness.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — narcolepsy with cataplexy",
      presentation: "A patient presenting with narcolepsy with cataplexy, started on Sodium Oxybate.",
      history: "A adult patient presents with a narcolepsy with cataplexy picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with narcolepsy with cataplexy; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Narcolepsy with cataplexy. Differentials are considered and excluded clinically.",
      rationale: "Sodium Oxybate is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Sodium Oxybate) with strong evidence in this condition.",
      management: "Started at 2.25 g at bedtime (in bed), titrated to 4.5-6 g/night (split) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Sodium Oxybate takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Sodium Oxybate vs related agents — orientation table",
      primaryDrug: "Sodium Oxybate",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-B receptors (agonist) + GHB receptors; night-time sodium oxybate consolidates sleep architecture",
          comparisons: [
            {
              drug: "Sodium Oxybate",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Sodium Oxybate",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Sodium Oxybate",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The cataplexy gold standard — GHB as medicine under maximum control",
          comparisons: [
            {
              drug: "Sodium Oxybate",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Sodium Oxybate is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Sodium Oxybate reaches peak plasma concentration and begins acting at its molecular target (GABA-B receptors (agonist) + GHB receptors; night-time sodium oxybate consolidates sleep architecture). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea, dizziness and headache, night-time confusion/wandering). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Night-sleep effects immediately; cataplexy reduction over weeks.)",
      title: "Therapeutic effect builds",
      description: "Night-sleep effects immediately; cataplexy reduction over weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Sodium Oxybate is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Sodium Oxybate take to work?",
      answer: "Night-sleep effects immediately; cataplexy reduction over weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Sodium Oxybate?",
      answer: "The most frequently reported effects are: Nausea, Dizziness and headache, Night-time confusion/wandering, Enuresis, Sodium load (Xyrem). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Sodium Oxybate suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Sodium Oxybate habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Sodium Oxybate exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Sodium Oxybate during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Sodium Oxybate may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), sodium oxybate monograph, p. 115",
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
        source: "FDA Prescribing Information for Xyrem (Sodium Oxybate)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for sodium oxybate — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Sodium Oxybate",
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
      name: "Narcolepsy with cataplexy",
      relationship: "primary",
    },
    {
      name: "Excessive daytime sleepiness in narcolepsy",
      relationship: "primary",
    },
    {
      name: "Idiopathic hypersomnia (some regions)",
      relationship: "alternative",
    },
    {
      name: "Alcohol-withdrawal syndrome (historic)",
      relationship: "off-label",
    },
    {
      name: "Fibromyalgia (studied)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Sodium Oxybate",
      type: "drug",
      href: "/drugs/sodium-oxybate",
      note: "The drug you're reading about",
    },
    {
      label: "Sodium Oxybate",
      type: "class",
      href: "#mechanism",
      note: "GHB (Cataplexy & Excessive Daytime Sleepiness)",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-B receptors (agonist) + GHB receptors; night-time sodium oxybate consolidates sleep architecture",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Narcolepsy with cataplexy",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Excessive daytime sleepiness in narcolepsy",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Idiopathic hypersomnia (some regions)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Respiratory depression (with alcohol, benzodiazepines, opioids)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Misuse, dependence, and diversion",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Sodium Oxybate",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The narcolepsy wonder and the controlled-substance paradox — GHB medicine for cataplexy.",
    summary: "Sodium Oxybate is a prescription medicine used to treat narcolepsy with cataplexy. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Sodium oxybate is the most effective medicine for narcolepsy with cataplexy — taken as a liquid in two doses during the night (one at bedtime, one when an alarm wakes you 2-4 hours later). It consolidates the broken night sleep of narcolepsy, which powerfully reduces collapse attacks and daytime sleepiness. It is very strictly controlled (it is related to a misused street drug), so it comes only through special programmes — and it must NEVER be combined with alcohol, sleeping tablets, or opioid painkillers, because the combination can stop breathing.",
    sideEffects: "The most common side effects are: nausea, dizziness and headache, night-time confusion/wandering, enuresis, sodium load (xyrem). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression (with alcohol, benzodiazepines, opioids) and Misuse, dependence, and diversion. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: cataplexy frequency and sleepiness scores (every review); sodium load and blood pressure (xyrem) (at review); programme compliance and storage (every dispensing cycle). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Alcohol, benzodiazepines, opioids, and all CNS depressants, Other sleep-promoting agents. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Xyrem (restricted import, not marketed)",
        manufacturer: "Jazz network",
        strengths: "programme only",
      },
    ],
    typicalDoses: "2.25 g × 2 nightly doses (in-bed).",
    prescribingScenarios: [
      "Narcolepsy programmes at tertiary sleep centres — access through exception/programme routes only.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "high",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Programme-based dispensing; cataplexy diaries.",
    patientCounselling: [
      "Two alarms, two in-bed doses.",
      "NEVER with alcohol, benzodiazepines, or opioids.",
      "Programme dispensing only.",
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
    familyName: "Narcolepsy Agents",
    members: [
      {
        name: "Sodium Oxybate",
        slug: "sodium-oxybate",
        relationship: "This guide",
        distinguishing: "The cataplexy gold standard — GHB as medicine under maximum control",
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
      question: "Which molecular target does Sodium Oxybate primarily act on?",
      options: [
        "GABA-B receptors (agonist) + GHB receptors; night-time sodium oxybate consolidates sleep architecture",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Sodium Oxybate acts primarily at GABA-B receptors (agonist) + GHB receptors; night-time sodium oxybate consolidates sleep architecture. Sodium oxybate is exogenous GHB — agonising GABA-B (and GHB) receptors to consolidate fragmented narcoleptic night sleep, which secondarily reduces cataplexy and daytime sleepiness.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Sodium Oxybate?",
      options: ["Nausea", "Dizziness and headache", "Night-time confusion/wandering", "Enuresis"],
      correctIndex: 0,
      explanation: "Nausea — The commonest effect — often transient.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Sodium Oxybate for narcolepsy (adults)?",
      options: ["4.5-6 g/night (split)", "9 g/night", "4.5-6 g/night (split) (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For narcolepsy (adults): start 2.25 g at bedtime (in bed), target 4.5-6 g/night (split), maximum 9 g/night. Second equal dose 2.5-4 h later (alarm); titrate to 3-7.5 g/night total",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Sodium Oxybate in two sentences.",
      answer: "Sodium oxybate is exogenous GHB — agonising GABA-B (and GHB) receptors to consolidate fragmented narcoleptic night sleep, which secondarily reduces cataplexy and daytime sleepiness. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Sodium Oxybate.",
      answer: "Narcolepsy with cataplexy, Excessive daytime sleepiness in narcolepsy, Idiopathic hypersomnia (some regions), Alcohol-withdrawal syndrome (historic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Sodium Oxybate and how you would manage it.",
      answer: "Respiratory depression (with alcohol, benzodiazepines, opioids): The controlled-substance core danger — CNS-depressant combinations. Management: Absolute contraindication counselling; medical-alert documentation.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Sodium Oxybate require?",
      answer: "Cataplexy frequency and sleepiness scores (Every review); Sodium load and blood pressure (Xyrem) (At review); Programme compliance and storage (Every dispensing cycle)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Sodium Oxybate that separates safe prescribers from unsafe ones.",
      answer: "The two-alarm ritual: dose one in bed, set an alarm for 2.5-4 hours later, dose two in bed — the dosing architecture IS the safety system.",
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
      checkpoint: "You now know what Sodium Oxybate is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Sodium Oxybate works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Sodium Oxybate safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Sodium Oxybate.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Sodium Oxybate with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Sodium Oxybate.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Night-sleep effects immediately; cataplexy reduction over weeks.",
    ],
    ifItWorks: [
      "Continue Sodium Oxybate at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Sodium Oxybate (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Sodium Oxybate follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Narcolepsy (adults)",
        starting: "2.25 g at bedtime (in bed)",
        titration: "Second equal dose 2.5-4 h later (alarm); titrate to 3-7.5 g/night total",
        target: "4.5-6 g/night (split)",
        max: "9 g/night",
      },
    ],
    dosageForms: [
      "Oral solution 500 mg/mL (patient-restricted programmes)",
      "Xywav low-sodium alternative",
    ],
    dosingTips: [
      "The two-alarm architecture is non-negotiable.",
      "Bathroom before the first dose; in-bed administration only.",
      "The sodium discussion for heart/BP patients.",
      "Alert documentation for every emergency presentation.",
    ],
    overdose: [
      "Overdose with Sodium Oxybate is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Sodium Oxybate is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 30-60 minutes..", "Metabolism: Hepatic.."],
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
      "The most effective cataplexy and EDS therapy.",
      "Transforms night-sleep architecture.",
      "Low-sodium formulation available.",
    ],
    potentialDisadvantages: [
      "Maximum controlled-substance infrastructure.",
      "Two-dose nightly ritual.",
      "Respiratory-depression combination danger.",
      "Sodium load (original form).",
    ],
    primaryTargetSymptoms: [
      "Cataplexy",
      "Excessive daytime sleepiness in narcolepsy",
      "Fragmented narcoleptic night sleep",
    ],
    pearls: [
      "The two-alarm ritual: dose one in bed, set an alarm for 2.5-4 hours later, dose two in bed — the dosing architecture IS the safety system.",
      "The night-to-day paradox: a night-sleep sedative that reduces DAYTIME sleepiness and cataplexy — consolidating narcoleptic sleep architecture transforms the disease.",
      "The controlled-substance summit: heroin-class scheduling with medical-programme access — the tightest distribution in pharmacotherapy (REMS-era pipeline).",
      "The sodium arithmetic: Xyrem carries a real nightly sodium load — heart-failure and hypertension patients need the Xywav low-sodium version.",
      "The alcohol/benzo absolute: the respiratory-depression combinations are the catastrophic scenario — counselling and alert documentation.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
