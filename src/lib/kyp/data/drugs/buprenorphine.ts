import type { Drug } from "../types";

/**
 * Buprenorphine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), buprenorphine monograph (book p. 16)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const buprenorphine: Drug = {
  /* ---- Identity ---- */
  slug: "buprenorphine",
  genericName: "Buprenorphine",
  brandNames: ["Subutex", "Suboxone (with naloxone)", "Bunavail / Zubsolv"],
  drugClass: "substance-use-treatment",
  drugClassLabel: "SUD Treatment",
  drugClassFullName: "Opioid Partial Agonist (Opioid Dependence)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Substance Use Treatments", "Opioid Agonist Therapies", "Buprenorphine"],
  /* ---- Hero / summary ---- */
  tagline: "The ceiling-protected partial agonist — opioid substitution that cannot easily kill.",
  summary: "Buprenorphine is a high-affinity partial mu-opioid agonist (and kappa antagonist) used for opioid use disorder: it suppresses withdrawal and craving like a full agonist but has a CEILING on respiratory depression — making overdose far less lethal than methadone. Its high receptor affinity displaces full agonists (precipitated withdrawal if mis-timed), it can be co-formulated with naloxone to deter injection, and it is the safer office-based maintenance standard.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Buprenorphine — from its molecular target (Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Buprenorphine.",
    "Predict the common and serious side effects of Buprenorphine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Buprenorphine.",
    "Compare Buprenorphine with other sud treatments and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Buprenorphine partially agonises mu-opioid receptors with very high affinity — full maintenance effect with a ceiling on respiratory depression.",
    molecularTarget: "Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Buprenorphine partially agonises mu-opioid receptors with very high affinity — full maintenance effect with a ceiling on respiratory depression.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 28-44 hours (long — once-daily dosing; depot forms longer). — see mechanism and prescriber sections.",
    halfLife: "28-44 hours (long — once-daily dosing; depot forms longer).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Buprenorphine",
        sublabel: "Substance use treatment agent",
        variant: "process",
      },
      {
        id: "target",
        label: "Reward pathway",
        sublabel: "Mesolimbic reinforcement system",
        variant: "target",
      },
      {
        id: "craving",
        label: "Craving / reinforcement",
        sublabel: "Reduced",
        variant: "process",
      },
      {
        id: "effect",
        label: "Relapse prevention",
        sublabel: "Abstinence maintained with psychosocial support",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "target",
        label: "acts on",
      },
      {
        from: "target",
        to: "craving",
        label: "dampens",
        type: "inhibit",
      },
      {
        from: "craving",
        to: "effect",
        label: "supports",
      },
    ],
    caption: "Pharmacotherapy for substance use disorders blunts the reinforcement cycle — medication opens a window; psychosocial treatment walks the patient through it.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Endogenous opioids"],
  receptors: [
    "Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist)",
  ],
  brainRegionIds: ["nucleus-accumbens", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Opioid use disorder — maintenance and medically supervised withdrawal",
      status: "fda-approved",
      description: "First-line maintenance in most settings: reduces illicit opioid use, retains patients in treatment, and is far safer in overdose than methadone.",
    },
    {
      name: "Chronic pain (analgesic use)",
      status: "fda-approved",
      description: "Analgesic formulations exist (butrans patch, etc.) — a separate product line.",
    },
    {
      name: "Neonatal opioid withdrawal syndrome (maternal treatment)",
      status: "guideline",
      description: "Preferred over methadone in many pregnancy programmes (lower neonatal withdrawal severity).",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Buprenorphine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Benzodiazepines and CNS depressants",
      severity: "absolute",
      rationale: "The ceiling does not protect — respiratory deaths occur.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Respiratory depression with benzodiazepines; abuse potential; precipitated withdrawal",
      text: "Concurrent benzodiazepine use risks fatal respiratory depression — the ceiling does not protect combinations. Buprenorphine itself has abuse potential. In opioid-dependent patients, administration before withdrawal is established causes precipitated withdrawal.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Precipitated withdrawal (mis-timed induction)",
      frequency: "common",
      severity: "severe",
      description: "Starting too early (before moderate withdrawal) displaces full agonists — abrupt withdrawal.",
      management: "Wait for objective withdrawal (COWS ≥ 8-12) before first dose.",
    },
    {
      name: "Nausea and vomiting",
      frequency: "common",
      severity: "mild",
      description: "Opioid-class effect.",
      management: "Take after food.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "moderate",
      description: "Opioid-class effect (milder than full agonists).",
      management: "Bowel regimen.",
    },
    {
      name: "Headache, sweating, insomnia",
      frequency: "common",
      severity: "mild",
      description: "Early-treatment effects.",
      management: "Reassurance; review timing of doses.",
    },
    {
      name: "Sedation",
      frequency: "common",
      severity: "mild",
      description: "Usually improves in the first weeks.",
      management: "Dose review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression (with benzodiazepines especially)",
      frequency: "rare",
      severity: "life-threatening",
      description: "The ceiling protects alone — NOT with benzodiazepines, alcohol, or sedatives: deaths occur in the combination.",
      management: "Avoid co-prescription of sedatives; counsel on the combination danger.",
    },
    {
      name: "Overdose in opioid-naive individuals",
      frequency: "rare",
      severity: "life-threatening",
      description: "Diverted buprenorphine in non-tolerant users causes respiratory depression.",
      management: "Safe storage counselling.",
    },
    {
      name: "Hepatitis (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Transaminase elevation reported.",
      management: "LFTs at baseline and if symptomatic.",
    },
    {
      name: "Adrenal insufficiency (rare, long-term)",
      frequency: "rare",
      severity: "severe",
      description: "Opioid-class effect with chronic use.",
      management: "Consider if fatigue/nausea unexplained.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "COWS (withdrawal score) at induction",
      frequency: "At induction day",
      rationale: "The precipitated-withdrawal prevention tool.",
    },
    {
      parameter: "LFTs",
      frequency: "Baseline and if symptomatic",
      rationale: "Hepatitis surveillance.",
    },
    {
      parameter: "Benzodiazepine co-prescription audit",
      frequency: "Every review",
      rationale: "The combination-death prevention.",
    },
    {
      parameter: "Craving and illicit-use review",
      frequency: "Every review",
      rationale: "Treatment targets.",
    },
  ],
  interactions: [
    {
      drug: "Benzodiazepines and CNS depressants",
      severity: "contraindicated",
      mechanism: "The ceiling does not protect — respiratory deaths occur.",
      action: "Avoid; if unavoidable, minimum doses with intensive monitoring.",
    },
    {
      drug: "Full opioid agonists",
      severity: "major",
      mechanism: "Buprenorphine blocks them (high affinity) — poor analgesia; or is displaced (precipitated withdrawal) by high-dose agonists.",
      action: "Pain plans need non-opioid strategies; surgical planning documented.",
    },
    {
      drug: "CYP3A4 inhibitors/inducers",
      severity: "moderate",
      mechanism: "3A4 metabolism shifts levels.",
      action: "Monitor.",
    },
    {
      drug: "HIV protease inhibitors",
      severity: "moderate",
      mechanism: "Levels of both shift.",
      action: "Specialist co-management.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Widely used in pregnancy; often preferred over methadone (lower neonatal abstinence syndrome severity) — decisions with obstetrics and addiction specialists, monotherapy traditionally chosen.",
    lactation: "Compatible with breastfeeding — minimal infant levels; monitor the infant for sedation.",
  },
  renalAdjustment: "No significant renal adjustment.",
  hepaticAdjustment: "Hepatic metabolism — reduce dose in significant impairment; LFT surveillance (hepatitis signal).",
  /* ---- Education ---- */
  patientExplanation: "Buprenorphine is a medicine for opioid addiction: it sits on the brain's opioid receptors just enough to stop withdrawal and craving without producing a dangerous high, and it has a built-in safety limit on breathing that pure opioids do not. It is taken once daily under the tongue, and comes combined with a second medicine that stops it being misused by injection. The first dose must wait until you are already in mild withdrawal — taking it too early causes sudden, severe withdrawal.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Buprenorphine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The ceiling effect: respiratory depression plateaus — the property that makes buprenorphine-overdose far more survivable than methadone-overdose.",
    "The induction clock: dosing BEFORE moderate withdrawal (COWS < 8) causes precipitated withdrawal — 'wait for the sick' is the art.",
    "The naloxone trick: combination products inject badly (precipitated withdrawal deters IV misuse) but absorb sublingually intact.",
    "Office-based treatment: buprenorphine's safety enables general-practice prescribing — de-medicalising addiction care.",
    "The benzodiazepine asterisk: the ceiling does not protect against the combination — most buprenorphine deaths involve sedatives.",
    "Pregnancy: preferred over methadone in many programmes (less neonatal withdrawal) — monotherapy (without naloxone) traditionally.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Buprenorphine: Buprenorphine partially agonises mu-opioid receptors with very high affinity — full maintenance effect with a ceiling on respiratory depression.",
        "Uses of Buprenorphine: Opioid use disorder — maintenance and medically supervised withdrawal; Chronic pain (analgesic use); Neonatal opioid withdrawal syndrome (maternal treatment)",
        "Mechanism: high-affinity PARTIAL mu-agonist + kappa-antagonist — full maintenance effect, ceiling on respiratory depression.",
        "Maintenance standard: reduces illicit use, retains in treatment, overdose-far-safer than methadone.",
      ],
      practical: [
        "Prescribe Buprenorphine for opioid use disorder — maintenance and medically supervised withdrawal with dose, timing, and duration.",
        "Outline the monitoring plan: COWS (withdrawal score) at induction (At induction day); LFTs (Baseline and if symptomatic); Benzodiazepine co-prescription audit (Every review)",
      ],
      longAnswer: [
        "Buprenorphine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: high-affinity PARTIAL mu-agonist + kappa-antagonist — full maintenance effect, ceiling on respiratory depression.",
        "Maintenance standard: reduces illicit use, retains in treatment, overdose-far-safer than methadone.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: high-affinity PARTIAL mu-agonist + kappa-antagonist — full maintenance effect, ceiling on respiratory depression.",
        "Maintenance standard: reduces illicit use, retains in treatment, overdose-far-safer than methadone.",
        "Induction rule: wait for moderate withdrawal (COWS ≥ 8-12) — precipitated withdrawal otherwise.",
        "Combination with naloxone (Suboxone) deters injection.",
        "Deaths occur with benzodiazepines/alcohol — the ceiling does not protect combinations.",
        "Doses 12-24 mg maintenance; 32 mg ceiling.",
      ],
      pyqConcepts: [
        "Mechanism/target of Buprenorphine",
        "Key adverse effect: Respiratory depression (with benzodiazepines especially)",
        "Dosing and titration of Buprenorphine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Buprenorphine develops respiratory depression (with benzodiazepines especially) — next best step?",
        "When to choose Buprenorphine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist)",
        "Most common side effects: Precipitated withdrawal (mis-timed induction), Nausea and vomiting, Constipation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The ceiling effect: respiratory depression plateaus — the property that makes buprenorphine-overdose far more survivable than methadone-overdose.",
        "The induction clock: dosing BEFORE moderate withdrawal (COWS < 8) causes precipitated withdrawal — 'wait for the sick' is the art.",
        "The naloxone trick: combination products inject badly (precipitated withdrawal deters IV misuse) but absorb sublingually intact.",
        "Office-based treatment: buprenorphine's safety enables general-practice prescribing — de-medicalising addiction care.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: high-affinity PARTIAL mu-agonist + kappa-antagonist — full maintenance effect, ceiling on respiratory depression.",
    "Maintenance standard: reduces illicit use, retains in treatment, overdose-far-safer than methadone.",
    "Induction rule: wait for moderate withdrawal (COWS ≥ 8-12) — precipitated withdrawal otherwise.",
    "Combination with naloxone (Suboxone) deters injection.",
    "Deaths occur with benzodiazepines/alcohol — the ceiling does not protect combinations.",
    "Doses 12-24 mg maintenance; 32 mg ceiling.",
    "Monthly SC and 6-monthly implant long-acting forms exist.",
    "Pregnancy: often preferred over methadone (milder neonatal withdrawal).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — opioid use disorder — maintenance and medically supervised withdrawal",
      presentation: "A patient presenting with opioid use disorder — maintenance and medically supervised withdrawal, started on Buprenorphine.",
      history: "A adult patient presents with a opioid use disorder — maintenance and medically supervised withdrawal picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with opioid use disorder — maintenance and medically supervised withdrawal; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Opioid use disorder — maintenance and medically supervised withdrawal. Differentials are considered and excluded clinically.",
      rationale: "Buprenorphine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SUD Treatment) with strong evidence in this condition.",
      management: "Started at 2-4 mg sublingual when in mild-moderate withdrawal (COWS ≥ 8-12), titrated to — with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Buprenorphine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SUD Treatment comparison — choosing within the class",
      primaryDrug: "Buprenorphine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist)",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "See full guide",
            },
            {
              drug: "Disulfiram",
              value: "See full guide",
            },
            {
              drug: "Naltrexone",
              value: "See full guide",
            },
            {
              drug: "Varenicline",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "28-44 hours (long — once-daily dosing; depot forms longer).",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "—",
            },
            {
              drug: "Disulfiram",
              value: "—",
            },
            {
              drug: "Naltrexone",
              value: "—",
            },
            {
              drug: "Varenicline",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not typically associated with weight change.",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Disulfiram",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Naltrexone",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Varenicline",
              value: "Not typically associated with weight change.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "Agent-specific.",
            },
            {
              drug: "Disulfiram",
              value: "Agent-specific.",
            },
            {
              drug: "Naltrexone",
              value: "Agent-specific.",
            },
            {
              drug: "Varenicline",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The safety-ceiling maintenance agonist — office-based opioid treatment",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "The abstinence-protector — for the already-abstinent patient",
            },
            {
              drug: "Disulfiram",
              value: "The classical aversion deterrent — for the motivated, supervised patient",
            },
            {
              drug: "Naltrexone",
              value: "The pure antagonist — alcohol relapse and opioid blockade",
            },
            {
              drug: "Varenicline",
              value: "The most effective smoking-cessation medicine",
            },
          ],
        },
      ],
      takeaway: "All opioid agonist therapies share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Buprenorphine reaches peak plasma concentration and begins acting at its molecular target (Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (precipitated withdrawal (mis-timed induction), nausea and vomiting, constipation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Withdrawal relief within 30-60 minutes of first sublingual dose (if timed correctly).)",
      title: "Therapeutic effect builds",
      description: "Withdrawal relief within 30-60 minutes of first sublingual dose (if timed correctly). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Buprenorphine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Buprenorphine take to work?",
      answer: "Withdrawal relief within 30-60 minutes of first sublingual dose (if timed correctly).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Buprenorphine?",
      answer: "The most frequently reported effects are: Precipitated withdrawal (mis-timed induction), Nausea and vomiting, Constipation, Headache, sweating, insomnia, Sedation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Buprenorphine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Buprenorphine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Buprenorphine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Buprenorphine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Buprenorphine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG115 (Alcohol Use Disorders); NICE NG209 (Tobacco Dependence)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), buprenorphine monograph, p. 16",
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
        source: "FDA Prescribing Information for Subutex (Buprenorphine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for buprenorphine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Buprenorphine",
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
      name: "Acamprosate",
      slug: "acamprosate",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Disulfiram",
      slug: "disulfiram",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Naltrexone",
      slug: "naltrexone",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Varenicline",
      slug: "varenicline",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Naltrexone-Bupropion",
      slug: "naltrexone-bupropion",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Nalmefene",
      slug: "nalmefene",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
  ],
  relatedConditions: [
    {
      name: "Opioid use disorder — maintenance and medically supervised withdrawal",
      relationship: "primary",
    },
    {
      name: "Chronic pain (analgesic use)",
      relationship: "primary",
    },
    {
      name: "Neonatal opioid withdrawal syndrome (maternal treatment)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Buprenorphine",
      type: "drug",
      href: "/drugs/buprenorphine",
      note: "The drug you're reading about",
    },
    {
      label: "SUD Treatment",
      type: "class",
      href: "#mechanism",
      note: "Opioid Partial Agonist (Opioid Dependence)",
    },
    {
      label: "Endogenous opioids",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Opioid use disorder — maintenance and medically supervised withdrawal",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Chronic pain (analgesic use)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Neonatal opioid withdrawal syndrome (maternal treatment)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Respiratory depression (with benzodiazepines especially)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Overdose in opioid-naive individuals",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Precipitated withdrawal (mis-timed induction)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Buprenorphine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The ceiling-protected partial agonist — opioid substitution that cannot easily kill.",
    summary: "Buprenorphine is a prescription medicine used to treat opioid use disorder — maintenance and medically supervised withdrawal. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Buprenorphine is a medicine for opioid addiction: it sits on the brain's opioid receptors just enough to stop withdrawal and craving without producing a dangerous high, and it has a built-in safety limit on breathing that pure opioids do not. It is taken once daily under the tongue, and comes combined with a second medicine that stops it being misused by injection. The first dose must wait until you are already in mild withdrawal — taking it too early causes sudden, severe withdrawal.",
    sideEffects: "The most common side effects are: precipitated withdrawal (mis-timed induction), nausea and vomiting, constipation, headache, sweating, insomnia, sedation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression (with benzodiazepines especially) and Overdose in opioid-naive individuals. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: cows (withdrawal score) at induction (at induction day); lfts (baseline and if symptomatic); benzodiazepine co-prescription audit (every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Benzodiazepines and CNS depressants, Full opioid agonists, CYP3A4 inhibitors/inducers, HIV protease inhibitors. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Buprigesic / Buprenorphine sublingual",
        manufacturer: "various",
        strengths: "2, 8 mg",
      },
      {
        name: "Combination with naloxone (limited)",
        manufacturer: "imported",
        strengths: "2/0.5, 8/2 mg",
      },
    ],
    typicalDoses: "Induction 2-4 mg hourly to comfort; maintenance 8-16 mg daily.",
    prescribingScenarios: [
      "De-addiction programmes nationwide — the mainstay of Indian opioid agonist treatment.",
      "Emerging depot options in private practice.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "COWS-scored induction; LFTs baseline; benzodiazepine audit.",
    patientCounselling: [
      "First dose only when in mild withdrawal — waiting is the treatment.",
      "Sublingual for 5-10 minutes, without swallowing.",
      "Never with benzodiazepines or alcohol.",
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
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Opioid Agonist Therapies",
    members: [
      {
        name: "Buprenorphine",
        slug: "buprenorphine",
        relationship: "This guide",
        distinguishing: "The safety-ceiling maintenance agonist — office-based opioid treatment",
      },
      {
        name: "Acamprosate",
        slug: "acamprosate",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The abstinence-protector — for the already-abstinent patient",
      },
      {
        name: "Disulfiram",
        slug: "disulfiram",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The classical aversion deterrent — for the motivated, supervised patient",
      },
      {
        name: "Naltrexone",
        slug: "naltrexone",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The pure antagonist — alcohol relapse and opioid blockade",
      },
      {
        name: "Varenicline",
        slug: "varenicline",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The most effective smoking-cessation medicine",
      },
      {
        name: "Naltrexone-Bupropion",
        slug: "naltrexone-bupropion",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The addiction-medicine approach to obesity",
      },
      {
        name: "Nalmefene",
        slug: "nalmefene",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The as-needed drinking-day antagonist (European harm reduction)",
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
      question: "Which molecular target does Buprenorphine primarily act on?",
      options: [
        "Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Buprenorphine acts primarily at Mu-opioid receptor (PARTIAL agonist — high affinity); kappa receptor (antagonist). Buprenorphine partially agonises mu-opioid receptors with very high affinity — full maintenance effect with a ceiling on respiratory depression.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Buprenorphine?",
      options: [
        "Precipitated withdrawal (mis-timed induction)",
        "Nausea and vomiting",
        "Constipation",
        "Headache, sweating, insomnia",
      ],
      correctIndex: 0,
      explanation: "Precipitated withdrawal (mis-timed induction) — Starting too early (before moderate withdrawal) displaces full agonists — abrupt withdrawal.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Buprenorphine for opioid use disorder — induction?",
      options: ["—", "32 mg/day day 1 typical", "— (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For opioid use disorder — induction: start 2-4 mg sublingual when in mild-moderate withdrawal (COWS ≥ 8-12), target —, maximum 32 mg/day day 1 typical. Repeat 2-4 mg hourly to comfort; total day 1 typically 8-16 mg",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Buprenorphine in two sentences.",
      answer: "Buprenorphine partially agonises mu-opioid receptors with very high affinity — full maintenance effect with a ceiling on respiratory depression. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Buprenorphine.",
      answer: "Opioid use disorder — maintenance and medically supervised withdrawal, Chronic pain (analgesic use), Neonatal opioid withdrawal syndrome (maternal treatment). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Buprenorphine and how you would manage it.",
      answer: "Respiratory depression (with benzodiazepines especially): The ceiling protects alone — NOT with benzodiazepines, alcohol, or sedatives: deaths occur in the combination. Management: Avoid co-prescription of sedatives; counsel on the combination danger.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Buprenorphine require?",
      answer: "COWS (withdrawal score) at induction (At induction day); LFTs (Baseline and if symptomatic); Benzodiazepine co-prescription audit (Every review); Craving and illicit-use review (Every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Buprenorphine that separates safe prescribers from unsafe ones.",
      answer: "The ceiling effect: respiratory depression plateaus — the property that makes buprenorphine-overdose far more survivable than methadone-overdose.",
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
      checkpoint: "You now know what Buprenorphine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Buprenorphine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Buprenorphine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Buprenorphine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Buprenorphine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Buprenorphine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Withdrawal relief within 30-60 minutes of first sublingual dose (if timed correctly).",
    ],
    ifItWorks: [
      "Continue Buprenorphine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Buprenorphine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Buprenorphine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Opioid use disorder — induction",
        starting: "2-4 mg sublingual when in mild-moderate withdrawal (COWS ≥ 8-12)",
        titration: "Repeat 2-4 mg hourly to comfort; total day 1 typically 8-16 mg",
        target: "—",
        max: "32 mg/day day 1 typical",
      },
      {
        indication: "Maintenance",
        starting: "8-16 mg once daily (start after induction)",
        titration: "Titrate by craving/withdrawal control",
        target: "12-24 mg/day",
        max: "32 mg/day (rarely needed)",
      },
      {
        indication: "Medically supervised withdrawal",
        starting: "Standard induction then taper by ~2 mg every 1-2 weeks",
        titration: "Slow tapers succeed more often",
        target: "—",
        max: "—",
      },
    ],
    dosageForms: [
      "Sublingual tablets and films 2, 8 mg",
      "Combination buprenorphine/naloxone films and tablets",
      "Subcutaneous monthly injection (Sublocade)",
      "6-monthly implant (Probuphine)",
      "Analgesic patch (separate line)",
    ],
    dosingTips: [
      "Induction timing is everything: COWS ≥ 8-12, no shortcuts.",
      "Sublingual technique: no talking, chewing, or swallowing for 5-10 minutes.",
      "Depot forms for the stable patient who wants freedom from daily decisions.",
      "Document the benzodiazepine conversation at every review.",
    ],
    overdose: [
      "Overdose with Buprenorphine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Buprenorphine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 28-44 hours (long — once-daily dosing; depot forms longer)..",
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
    potentialAdvantages: ["Ceiling-protected overdose safety.", "Office-based prescribing.", "Retention and real-world effectiveness.", "Pregnancy-preferred option.", "Depot options."],
    potentialDisadvantages: [
      "Precipitated withdrawal at mis-timed induction.",
      "Benzodiazepine combination deaths.",
      "Blockade complicates pain management.",
      "Diversion of tablets persists.",
    ],
    primaryTargetSymptoms: ["Opioid withdrawal and craving", "Illicit opioid use", "Treatment retention"],
    pearls: [
      "The ceiling effect: respiratory depression plateaus — the property that makes buprenorphine-overdose far more survivable than methadone-overdose.",
      "The induction clock: dosing BEFORE moderate withdrawal (COWS < 8) causes precipitated withdrawal — 'wait for the sick' is the art.",
      "The naloxone trick: combination products inject badly (precipitated withdrawal deters IV misuse) but absorb sublingually intact.",
      "Office-based treatment: buprenorphine's safety enables general-practice prescribing — de-medicalising addiction care.",
      "The benzodiazepine asterisk: the ceiling does not protect against the combination — most buprenorphine deaths involve sedatives.",
      "Pregnancy: preferred over methadone in many programmes (less neonatal withdrawal) — monotherapy (without naloxone) traditionally.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
