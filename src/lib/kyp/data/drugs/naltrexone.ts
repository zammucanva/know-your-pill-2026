import type { Drug } from "../types";

/**
 * Naltrexone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), naltrexone monograph (book p. 86)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const naltrexone: Drug = {
  /* ---- Identity ---- */
  slug: "naltrexone",
  genericName: "Naltrexone",
  brandNames: ["Revia", "Vivitrol (monthly injection)", "Naltima (India)"],
  drugClass: "substance-use-treatment",
  drugClassLabel: "SUD Treatment",
  drugClassFullName: "Opioid Antagonist (Alcohol & Opioid Dependence)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Substance Use Treatments", "Opioid Antagonists", "Naltrexone"],
  /* ---- Hero / summary ---- */
  tagline: "The opioid-blocker that treats addiction, blunting alcohol's reward and opioid relapse.",
  summary: "Naltrexone is a long-acting opioid receptor ANTAGONIST (no agonist activity, no abuse potential) that treats two addictions: it reduces alcohol craving and heavy-drinking relapse by blocking endogenous opioid reward, and it prevents relapse in detoxified opioid-dependent patients by blocking opioid effects entirely. The oral and monthly-injectable forms anchor modern addiction pharmacotherapy. It cannot be started until opioid detoxification is complete: precipitated withdrawal is the governing caution.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Naltrexone (from its molecular target (Mu-opioid receptor (antagonist) long-acting blockade)) to clinical effect.",
    "List the FDA-approved and off-label uses of Naltrexone.",
    "Predict the common and serious side effects of Naltrexone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Naltrexone.",
    "Compare Naltrexone with other sud treatments and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Naltrexone competitively and durably blocks mu-opioid receptors, abolishing opioid reward and the endogenous-opioid component of alcohol reward.",
    molecularTarget: "Mu-opioid receptor (antagonist, long-acting blockade)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Naltrexone competitively and durably blocks mu-opioid receptors, abolishing opioid reward and the endogenous-opioid component of alcohol reward.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 4 hours (oral) BUT receptor blockade lasts 24-72 h; Vivitrol 30 days. See mechanism and prescriber sections.",
    halfLife: "4 hours (oral) BUT receptor blockade lasts 24-72 h; Vivitrol 30 days.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Naltrexone",
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
    caption: "Pharmacotherapy for substance use disorders blunts the reinforcement cycle: medication opens a window; psychosocial treatment walks the patient through it.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Endogenous opioids"],
  receptors: [
    "Mu-opioid receptor (antagonist, long-acting blockade)",
  ],
  brainRegionIds: ["nucleus-accumbens", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alcohol use disorder — reduction of relapse to heavy drinking",
      status: "fda-approved",
      description: "Reduces craving and heavy-drinking days; the first-line pharmacotherapy with acamprosate.",
    },
    {
      name: "Opioid use disorder — relapse prevention after detoxification",
      status: "fda-approved",
      description: "Blocks opioid effects completely (including overdose risk from re-initiation); requires full detoxification first.",
    },
    {
      name: "Monthly injectable (both indications)",
      status: "fda-approved",
      description: "Vivitrol 380 mg IM monthly: adherence by design.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Naltrexone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioid analgesics",
      severity: "absolute",
      rationale: "Complete blockade: no analgesia; urgent surgery needs planning.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Hepatotoxicity and precipitated withdrawal",
      text: "Naltrexone at high doses is hepatotoxic (monitor at > 50 mg/day). In opioid-dependent patients, initiation causes precipitated withdrawal. Verify opioid-free status first. After naltrexone ends, lost opioid tolerance makes previous doses potentially fatal.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea and GI upset",
      frequency: "common",
      severity: "mild",
      description: "The most common effect: usually first-week.",
      management: "Take with food; transient.",
    },
    {
      name: "Headache and dizziness",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
    {
      name: "Insomnia and anxiety",
      frequency: "common",
      severity: "mild",
      description: "Early-treatment effects.",
      management: "Reassurance.",
    },
    {
      name: "Fatigue and somnolence",
      frequency: "uncommon",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
    {
      name: "Injection-site reactions (Vivitrol)",
      frequency: "common",
      severity: "mild",
      description: "Local pain, induration.",
      management: "Rotation technique.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Precipitated opioid withdrawal",
      frequency: "common",
      severity: "severe",
      description: "If started in a non-detoxified opioid user: abrupt, severe withdrawal (the governing danger).",
      management: "Negative naloxone challenge or documented 7-10 day abstinence before starting.",
    },
    {
      name: "Hepatotoxicity",
      frequency: "uncommon",
      severity: "severe",
      description: "Dose-related at supratherapeutic doses; the historic 300 mg+ warning.",
      management: "LFTs at baseline; standard 50 mg dosing is safe.",
    },
    {
      name: "Vulnerability to opioid overdose after stopping",
      frequency: "common",
      severity: "life-threatening",
      description: "Post-naltrexone opioid use at previous doses kills: tolerance is gone but memory of the dose remains.",
      management: "Overdose education and naloxone kit provision.",
    },
    {
      name: "Depression and suicidality (uncommon signal)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Reported in trials.",
      management: "Mood review.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "LFTs",
      frequency: "Baseline, periodically on higher doses",
      rationale: "Hepatotoxicity surveillance.",
    },
    {
      parameter: "Opioid-free verification before starting",
      frequency: "Before first dose (naloxone challenge or documented abstinence)",
      rationale: "The precipitated-withdrawal rule.",
    },
    {
      parameter: "Overdose education",
      frequency: "At every prescription",
      rationale: "The post-treatment lost-tolerance trap.",
    },
    {
      parameter: "Craving and drinking/relapse review",
      frequency: "Every review",
      rationale: "Treatment targets.",
    },
  ],
  interactions: [
    {
      drug: "Opioid analgesics",
      severity: "contraindicated",
      mechanism: "Complete blockade: no analgesia; urgent surgery needs planning.",
      action: "Medical-alert documentation; epidural/regional alternatives; if urgent opioids needed, short-acting titration with full monitoring.",
    },
    {
      drug: "Hepatotoxic drugs",
      severity: "moderate",
      mechanism: "Additive hepatic burden.",
      action: "LFT awareness.",
    },
  ],
  pregnancy: {
    legacyCategory: "C (historically D by some)",
    summary: "Limited human data; decisions individualised: generally avoided in favour of approved alternatives (methadone/buprenorphine for opioid use disorder in pregnancy).",
    lactation: "Excreted in milk in small amounts; decisions individualised.",
  },
  renalAdjustment: "No major adjustment; standard caution in severe impairment.",
  hepaticAdjustment: "Contraindicated in acute hepatitis/liver failure; LFT baseline; dose-related toxicity above 50 mg.",
  /* ---- Education ---- */
  patientExplanation: "Naltrexone blocks the brain's opioid receptors. The system that makes alcohol and opioid drugs feel rewarding. In alcohol dependence it reduces the urge to drink and the chance of heavy relapse; in opioid dependence (after full detoxification) it blocks opioid effects completely. It has no abuse potential. Two critical rules: it must never be started while opioids are still in the body, and after stopping it your old opioid dose could kill you; tolerance is lost.",
  patientEducationPoints: [
    "Take it exactly as prescribed, at the same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Naltrexone builds over weeks. Do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The drug-abuse paradox: an opioid-blocker treating addiction; no euphoria, no dependence, no diversion value.",
    "The precipitated-withdrawal rule: opioid-free verification (naloxone challenge or 7-10 day documented abstinence) BEFORE the first dose; the error that defines medico-legal risk.",
    "Alcohol mechanism: blocking endogenous opioid release blunts alcohol's rewarding arc; best for the 'drinking for reward' phenotype.",
    "Vivitrol's genius: adherence by depot, one monthly decision replaces 30 daily ones.",
    "The post-treatment trap: patients off naltrexone who return to their old opioid dose die at their pre-tolerance dose; overdose education is part of every prescription.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Naltrexone: Naltrexone competitively and durably blocks mu-opioid receptors, abolishing opioid reward and the endogenous-opioid component of alcohol reward.",
        "Uses of Naltrexone: Alcohol use disorder; reduction of relapse to heavy drinking; Opioid use disorder: relapse prevention after detoxification; Monthly injectable (both indications)",
        "Mechanism: long-acting mu-opioid ANTAGONIST; no agonist activity, no abuse potential.",
        "Indication 1: alcohol use disorder (reduces heavy-drinking relapse).",
      ],
      practical: [
        "Prescribe Naltrexone for alcohol use disorder: reduction of relapse to heavy drinking with dose, timing, and duration.",
        "Outline the monitoring plan: LFTs (Baseline, periodically on higher doses); Opioid-free verification before starting (Before first dose (naloxone challenge or documented abstinence)); Overdose education (At every prescription)",
      ],
      longAnswer: [
        "Naltrexone: mechanism, indications, adverse effects, contraindications, and dosing; structured answer framework.",
        "Mechanism: long-acting mu-opioid ANTAGONIST; no agonist activity, no abuse potential.",
        "Indication 1: alcohol use disorder (reduces heavy-drinking relapse).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: long-acting mu-opioid ANTAGONIST; no agonist activity, no abuse potential.",
        "Indication 1: alcohol use disorder (reduces heavy-drinking relapse).",
        "Indication 2: opioid relapse prevention AFTER full detoxification.",
        "The governing rule: never start without opioid-free verification; precipitated withdrawal.",
        "Dose 50 mg daily oral; 380 mg IM monthly (Vivitrol).",
        "Overdose risk after stopping: lost tolerance + old dose = fatal.",
      ],
      pyqConcepts: [
        "Mechanism/target of Naltrexone",
        "Key adverse effect: Precipitated opioid withdrawal",
        "Dosing and titration of Naltrexone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Naltrexone develops precipitated opioid withdrawal: next best step?",
        "When to choose Naltrexone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Mu-opioid receptor (antagonist, long-acting blockade)",
        "Most common side effects: Nausea and GI upset, Headache and dizziness, Insomnia and anxiety",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The drug-abuse paradox: an opioid-blocker treating addiction; no euphoria, no dependence, no diversion value.",
        "The precipitated-withdrawal rule: opioid-free verification (naloxone challenge or 7-10 day documented abstinence) BEFORE the first dose; the error that defines medico-legal risk.",
        "Alcohol mechanism: blocking endogenous opioid release blunts alcohol's rewarding arc; best for the 'drinking for reward' phenotype.",
        "Vivitrol's genius: adherence by depot, one monthly decision replaces 30 daily ones.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: long-acting mu-opioid ANTAGONIST; no agonist activity, no abuse potential.",
    "Indication 1: alcohol use disorder (reduces heavy-drinking relapse).",
    "Indication 2: opioid relapse prevention AFTER full detoxification.",
    "The governing rule: never start without opioid-free verification; precipitated withdrawal.",
    "Dose 50 mg daily oral; 380 mg IM monthly (Vivitrol).",
    "Overdose risk after stopping: lost tolerance + old dose = fatal.",
    "Hepatotoxicity is dose-related; 50 mg is safe.",
    "Cannot be used with opioid analgesics: pain management needs alternatives.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation: alcohol use disorder; reduction of relapse to heavy drinking",
      presentation: "A patient presenting with alcohol use disorder: reduction of relapse to heavy drinking, started on Naltrexone.",
      history: "A adult patient presents with a alcohol use disorder: reduction of relapse to heavy drinking picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with alcohol use disorder: reduction of relapse to heavy drinking; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Alcohol use disorder: reduction of relapse to heavy drinking. Differentials are considered and excluded clinically.",
      rationale: "Naltrexone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SUD Treatment) with strong evidence in this condition.",
      management: "Started at 50 mg once daily, titrated to 50 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Naltrexone takes weeks for full effect: early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SUD Treatment comparison: choosing within the class",
      primaryDrug: "Naltrexone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Mu-opioid receptor (antagonist, long-acting blockade)",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "See full guide",
            },
            {
              drug: "Buprenorphine",
              value: "See full guide",
            },
            {
              drug: "Disulfiram",
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
          primaryValue: "4 hours (oral) BUT receptor blockade lasts 24-72 h; Vivitrol 30 days.",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "—",
            },
            {
              drug: "Buprenorphine",
              value: "—",
            },
            {
              drug: "Disulfiram",
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
              drug: "Buprenorphine",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Disulfiram",
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
              drug: "Buprenorphine",
              value: "Agent-specific.",
            },
            {
              drug: "Disulfiram",
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
          primaryValue: "The pure antagonist: alcohol relapse and opioid blockade",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "The abstinence-protector, for the already-abstinent patient",
            },
            {
              drug: "Buprenorphine",
              value: "The safety-ceiling maintenance agonist: office-based opioid treatment",
            },
            {
              drug: "Disulfiram",
              value: "The classical aversion deterrent, for the motivated, supervised patient",
            },
            {
              drug: "Varenicline",
              value: "The most effective smoking-cessation medicine",
            },
          ],
        },
      ],
      takeaway: "All opioid antagonists share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile: comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Naltrexone reaches peak plasma concentration and begins acting at its molecular target (Mu-opioid receptor (antagonist, long-acting blockade)). Initial effects are on sleep, energy, or side effects, not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea and gi upset, headache and dizziness, insomnia and anxiety). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Alcohol craving reduction within days; opioid blockade immediate once started.)",
      title: "Therapeutic effect builds",
      description: "Alcohol craving reduction within days; opioid blockade immediate once started. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Naltrexone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Naltrexone take to work?",
      answer: "Alcohol craving reduction within days; opioid blockade immediate once started.. Like most psychotropic medications, the full benefit builds gradually, some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Naltrexone?",
      answer: "The most frequently reported effects are: Nausea and GI upset, Headache and dizziness, Insomnia and anxiety, Fatigue and somnolence, Injection-site reactions (Vivitrol). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Naltrexone suddenly?",
      answer: "No. Taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose. In that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Naltrexone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Naltrexone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Naltrexone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure. Naltrexone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), naltrexone monograph, p. 86",
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
        source: "FDA Prescribing Information for Revia (Naltrexone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for naltrexone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Naltrexone",
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
      name: "Buprenorphine",
      slug: "buprenorphine",
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
      name: "Alcohol use disorder — reduction of relapse to heavy drinking",
      relationship: "primary",
    },
    {
      name: "Opioid use disorder — relapse prevention after detoxification",
      relationship: "primary",
    },
    {
      name: "Monthly injectable (both indications)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Naltrexone",
      type: "drug",
      href: "/drugs/naltrexone",
      note: "The drug you're reading about",
    },
    {
      label: "SUD Treatment",
      type: "class",
      href: "#mechanism",
      note: "Opioid Antagonist (Alcohol & Opioid Dependence)",
    },
    {
      label: "Endogenous opioids",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Mu-opioid receptor (antagonist, long-acting blockade)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Alcohol use disorder: reduction of relapse to heavy drinking",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Opioid use disorder: relapse prevention after detoxification",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Monthly injectable (both indications)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Precipitated opioid withdrawal",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Hepatotoxicity",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea and GI upset",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide. Naltrexone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The opioid-blocker that treats addiction, blunting alcohol's reward and opioid relapse.",
    summary: "Naltrexone is a prescription medicine used to treat alcohol use disorder: reduction of relapse to heavy drinking. It belongs to a well-studied class of medicines and works gradually, most people notice the benefit over weeks, not days.",
    mechanism: "Naltrexone blocks the brain's opioid receptors. The system that makes alcohol and opioid drugs feel rewarding. In alcohol dependence it reduces the urge to drink and the chance of heavy relapse; in opioid dependence (after full detoxification) it blocks opioid effects completely. It has no abuse potential. Two critical rules: it must never be started while opioids are still in the body, and after stopping it your old opioid dose could kill you; tolerance is lost.",
    sideEffects: "The most common side effects are: nausea and gi upset, headache and dizziness, insomnia and anxiety, fatigue and somnolence, injection-site reactions (vivitrol). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Precipitated opioid withdrawal and Hepatotoxicity. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you: there is almost always a solution.",
    monitoring: "Your doctor will monitor: lfts (baseline, periodically on higher doses); opioid-free verification before starting (before first dose (naloxone challenge or documented abstinence)); overdose education (at every prescription). Keep every appointment: these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take, including over-the-counter and herbal products. Common interacting agents include: Opioid analgesics, Hepatotoxic drugs. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Naltima",
        manufacturer: "Intas",
        strengths: "50 mg",
      },
      {
        name: "Naltrexone generic",
        manufacturer: "multiple",
        strengths: "50 mg",
      },
    ],
    typicalDoses: "50 mg daily (alcohol); post-detox opioid relapse.",
    prescribingScenarios: [
      "De-addiction centre alcohol programmes.",
      "Opioid-free relapse prevention with supervised daily dispensing.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "LFTs baseline; opioid-free verification; overdose education documented.",
    patientCounselling: [
      "The written warning: after stopping, your old opioid dose can be fatal.",
      "Carry a naltrexone card for emergencies.",
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
    familyName: "Opioid Antagonists",
    members: [
      {
        name: "Naltrexone",
        slug: "naltrexone",
        relationship: "This guide",
        distinguishing: "The pure antagonist: alcohol relapse and opioid blockade",
      },
      {
        name: "Acamprosate",
        slug: "acamprosate",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The abstinence-protector, for the already-abstinent patient",
      },
      {
        name: "Buprenorphine",
        slug: "buprenorphine",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The safety-ceiling maintenance agonist: office-based opioid treatment",
      },
      {
        name: "Disulfiram",
        slug: "disulfiram",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The classical aversion deterrent, for the motivated, supervised patient",
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
      question: "Which molecular target does Naltrexone primarily act on?",
      options: [
        "Mu-opioid receptor (antagonist — long-acting blockade)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Naltrexone acts primarily at Mu-opioid receptor (antagonist — long-acting blockade). Naltrexone competitively and durably blocks mu-opioid receptors — abolishing opioid reward and the endogenous-opioid component of alcohol reward.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Naltrexone?",
      options: ["Nausea and GI upset", "Headache and dizziness", "Insomnia and anxiety", "Fatigue and somnolence"],
      correctIndex: 0,
      explanation: "Nausea and GI upset — The most common effect — usually first-week.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Naltrexone for alcohol use disorder (oral)?",
      options: ["50 mg/day", "100 mg/day (uncommon)", "50 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For alcohol use disorder (oral): start 50 mg once daily, target 50 mg/day, maximum 100 mg/day (uncommon). May start 25 mg for tolerability; no titration required pharmacologically",
      afterSectionId: "prescriber-guide",
    },
    {
      id: "sud-nal-01",
      question: "Naltrexone's core receptor pharmacology - the property that lets it cut alcohol craving and heavy drinking - is best described as:",
      options: [
        "Nonselective mu-opioid receptor antagonism that blocks endorphin-mediated reinforcement of drinking",
        "Partial mu-opioid agonism that substitutes for endogenous opioids the way methadone does",
        "D2 dopamine receptor antagonism that blunts mesolimbic reward signalling",
        "Inhibition of aldehyde dehydrogenase, raising aversive acetaldehyde after each drink"
      ],
      correctIndex: 0,
      explanation: "Naltrexone is a relatively long-acting, nonselective opioid antagonist; by blocking mu-opioid receptors it weakens the endorphin-to-dopamine reinforcement that alcohol and opioids share, which is why craving and drinking days fall (Katzung ch.23; Tripathi ch.28). The partial-agonist profile belongs to buprenorphine, D2 blockade is typical-antipsychotic logic, and aldehyde dehydrogenase inhibition is disulfiram's aversion mechanism - none of these is naltrexone's antagonist action.",
      afterSectionId: "mechanism",
    },
    {
      id: "sud-nal-02",
      question: "A 44-year-old man who has been taking tramadol 100 mg three times daily for chronic back pain enters an alcohol deaddiction programme and is started on oral naltrexone 50 mg the same morning. Ninety minutes later he has severe myalgia, abdominal cramps, diarrhoea, piloerection, yawning and lacrimation. The most likely explanation is:",
      options: [
        "Acute naltrexone hepatotoxicity presenting within hours of the first dose",
        "Precipitated opioid withdrawal - naltrexone's mu-antagonism met a patient who was still opioid-dependent on tramadol",
        "Serotonin syndrome from tramadol's serotonergic activity triggered by naltrexone co-administration",
        "A disulfiram-ethanol reaction from hidden alcohol in his lunch"
      ],
      correctIndex: 1,
      explanation: "Administering an opioid antagonist to an opioid-dependent patient almost instantaneously precipitates an abstinence syndrome, so patients must be opioid-free (classically 7-10 days for naltrexone) before the first dose - tramadol's opioid agonism counts (Katzung ch.31). Serotonin syndrome would show hyperreflexia, clonus and autonomic storm rather than the miosis-piloerection-yawning pattern, and naltrexone hepatotoxicity is a subacute, dose-dependent problem, not a 90-minute syndrome.",
      afterSectionId: "quick-facts",
    },
    {
      id: "sud-nal-03",
      question: "The standard adult dosing of naltrexone in alcohol-use-disorder maintenance is:",
      options: [
        "666 mg (two 333 mg enteric-coated tablets) three times daily",
        "0.5 mg daily titrated to 1 mg twice daily for up to 12 weeks",
        "Oral 50 mg once daily, with an extended-release intramuscular injection every 4 weeks for adherence problems",
        "Sublingual 2-16 mg daily, with a subcutaneous implant lasting 6 months"
      ],
      correctIndex: 2,
      explanation: "Katzung gives oral naltrexone 50 mg once daily for alcoholism, with an extended-release IM formulation given every 4 weeks - the depot is the adherence answer (Tripathi lists NALTIMA 50 mg tablets used in Indian deaddiction centres). Sublingual dosing with a 6-month implant is buprenorphine's Probuphine concept, the 666 mg three-times-daily regimen is acamprosate, and 0.5-1 mg twice-daily titration is varenicline's smoking-cessation schedule.",
      afterSectionId: "quick-facts",
    },
    {
      id: "sud-nal-04",
      question: "Baseline liver-function testing before naltrexone is standard practice because:",
      options: [
        "Standard 50 mg dosing predictably causes fulminant hepatic failure within weeks",
        "The drug is cleared entirely by the liver with no renal route at all",
        "It chelates hepatic copper, causing cumulative copper-toxic liver injury",
        "Naltrexone can cause dose-dependent hepatotoxicity, and the naltrexone-disulfiram combination is specifically avoided as both drugs are potential hepatotoxins"
      ],
      correctIndex: 3,
      explanation: "Katzung notes dose-dependent hepatotoxicity with abnormalities in serum aminotransferases and advises caution plus the explicit avoidance of combining naltrexone with disulfiram, since both are potential hepatotoxins. Fulminant failure at standard doses is not the teaching point, acamprosate - not naltrexone - is the renally-cleared member of this class, and copper chelation is disulfiram's Wilson-disease adjunct role, not a naltrexone toxicity.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "sud-nal-05",
      question: "A 38-year-old woman three months into naltrexone maintenance for alcohol-use disorder is listed for laparoscopic cholecystectomy. The surgeon proposes standard postoperative opioid analgesia. The pharmacological concern is:",
      options: [
        "Naltrexone blocks the analgesic effect of usual opioid doses, so perioperative planning needs regional or non-opioid analgesia, or the antagonist must be held well in advance",
        "Naltrexone potentiates opioid respiratory depression, so all opioid doses must be halved",
        "Naltrexone must be stopped and replaced with methadone before any operation",
        "Opioids remain fully effective under naltrexone but predictably cause histamine-driven hypotension"
      ],
      correctIndex: 0,
      explanation: "Naltrexone blocks the therapeutic analgesic effects of usual doses of opioids - a classic exam trap in any surgical patient on opioid-antagonist therapy (Katzung ch.31). Antagonism does not potentiate respiratory depression, methadone substitution is unnecessary for a naltrexone patient, and histamine-mediated hypotension is morphine's own adverse effect, which is moot while the mu receptors are blocked.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "sud-nal-06",
      question: "Which pharmacokinetic profile makes oral 'opioid blockade' maintenance with naltrexone practical?",
      options: [
        "A terminal half-life near 40 hours from tight receptor binding with biliary-faecal excretion",
        "A half-life of about 10 hours, with 100 mg orally blocking the effects of injected heroin for up to 48 hours",
        "A half-life of about 1 hour, so blockade requires a continuous intravenous infusion",
        "A half-life of 8-10 hours that is only achievable intravenously, with no useful oral activity"
      ],
      correctIndex: 1,
      explanation: "Naltrexone is well absorbed orally (unlike naloxone), has a half-life of about 10 hours, and a single 100 mg oral dose blocks injected heroin for up to 48 hours - the numbers that make maintenance feasible (Katzung ch.31). The 1-2 hour intravenous action describes naloxone, the 8-10 hour IV-only profile describes nalmefene in US practice, and the 40-hour terminal half-life with biliary excretion is buprenorphine's fingerprint.",
      afterSectionId: "timeline",
    },
    {
      id: "sud-nal-07",
      question: "At an Indian deaddiction centre, a motivated patient has just completed supervised alcohol withdrawal and asks when naltrexone (NALTIMA 50 mg) should begin and why adherence is stressed. The correct teaching is:",
      options: [
        "Start only if the patient accepts daily breath-alcohol testing for the next 6 months",
        "Start at 250 mg daily for one week, then reduce to a 50 mg maintenance dose",
        "Start only after the withdrawal phase in a motivated patient; good adherence is what delivers reduced craving and fewer drinking days, and the monthly depot can cover forgetfulness",
        "Start during active withdrawal so the drug smooths the tremor and autonomic symptoms"
      ],
      correctIndex: 2,
      explanation: "Tripathi describes naltrexone as approved for relapse prevention in alcohol-dependent subjects and used at most Indian deaddiction centres after withdrawal, in motivated patients; Katzung adds that benefit tracks adherence and that the IM depot is an accepted alternative. Naltrexone is not a withdrawal-suppressing drug (benzodiazepines are), breath-testing is not a licensing condition, and the 500 mg to 250 mg step-down is disulfiram's aversion regimen, not naltrexone's.",
      afterSectionId: "top",
    },
    {
      id: "sud-nal-08",
      question: "A heavy drinker tells you his brother had a dramatic reduction in craving on naltrexone while a cousin on the same dose felt nothing. The pharmacogenomic concept this illustrates is:",
      options: [
        "CYP2D6 poor-metaboliser status predicts naltrexone toxicity and mandates halving the dose",
        "Inactive ALDH2 enzyme genotype predicts strong naltrexone benefit rather than aversion benefit",
        "A GABAA-receptor polymorphism exclusively determines acamprosate response and predicts naltrexone failure",
        "A polymorphism in the mu-opioid receptor gene has been linked to a blunted naltrexone response, raising the possibility of genotype-guided alcohol-dependence pharmacotherapy"
      ],
      correctIndex: 3,
      explanation: "Katzung ch.23 highlights the link between a polymorphism in an opioid receptor gene and a blunted naltrexone response, explicitly raising genotype-guided pharmacotherapy as a possibility - the exam-friendly pharmacogenomics hook of this class. Naltrexone response is not taught as CYP2D6-dependent, ALDH2 loss-of-function is the protective/aversion-sensitivity genotype, and no exclusive GABAA-acamprosate genotype rule exists.",
      afterSectionId: "quick-facts",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Naltrexone in two sentences.",
      answer: "Naltrexone competitively and durably blocks mu-opioid receptors, abolishing opioid reward and the endogenous-opioid component of alcohol reward. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Naltrexone.",
      answer: "Alcohol use disorder (reduction of relapse to heavy drinking, Opioid use disorder) relapse prevention after detoxification, Monthly injectable (both indications). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Naltrexone and how you would manage it.",
      answer: "Precipitated opioid withdrawal: If started in a non-detoxified opioid user: abrupt, severe withdrawal (the governing danger). Management: Negative naloxone challenge or documented 7-10 day abstinence before starting.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Naltrexone require?",
      answer: "LFTs (Baseline, periodically on higher doses); Opioid-free verification before starting (Before first dose (naloxone challenge or documented abstinence)); Overdose education (At every prescription); Craving and drinking/relapse review (Every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Naltrexone that separates safe prescribers from unsafe ones.",
      answer: "The drug-abuse paradox: an opioid-blocker treating addiction; no euphoria, no dependence, no diversion value.",
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
      checkpoint: "You now know what Naltrexone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Naltrexone works, from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Naltrexone safely: indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Naltrexone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Naltrexone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Naltrexone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Alcohol craving reduction within days; opioid blockade immediate once started.",
    ],
    ifItWorks: [
      "Continue Naltrexone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Naltrexone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Naltrexone follow directly from its receptor and organ effects: predict them from the mechanism.",
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
        indication: "Alcohol use disorder (oral)",
        starting: "50 mg once daily",
        titration: "May start 25 mg for tolerability; no titration required pharmacologically",
        target: "50 mg/day",
        max: "100 mg/day (uncommon)",
      },
      {
        indication: "Opioid use disorder (oral, post-detox)",
        starting: "25 mg first day",
        titration: "Increase to 50 mg daily after tolerability confirmed",
        target: "50 mg/day",
        max: "100 mg/day",
      },
      {
        indication: "Monthly injectable (either indication)",
        starting: "380 mg IM every 4 weeks",
        titration: "Alternate buttock injections; must be opioid-free at first dose",
        target: "380 mg/month",
        max: "380 mg/month",
      },
    ],
    dosageForms: [
      "Tablets 25, 50 mg",
      "Extended-release microsphere injection 380 mg vial",
    ],
    dosingTips: [
      "Naloxone challenge before first dose in opioid users.",
      "Give the overdose warning in writing at every prescription.",
      "Vivitrol needs opioid-free status at injection 1.",
      "Alcohol patients: best for reward-driven drinking patterns.",
    ],
    overdose: [
      "Overdose with Naltrexone is managed supportively: no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Naltrexone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 4 hours (oral) BUT receptor blockade lasts 24-72 h; Vivitrol 30 days..",
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
      "No abuse or dependence potential.",
      "Two addiction indications.",
      "Monthly injectable option.",
      "Reduces heavy-drinking relapse in alcohol.",
    ],
    potentialDisadvantages: ["Precipitated withdrawal if mis-started.", "Blocks needed opioid analgesia.", "Post-treatment overdose trap.", "Hepatotoxicity at high dose."],
    primaryTargetSymptoms: [
      "Alcohol craving and heavy-drinking relapse",
      "Opioid relapse (post-detox)",
      "Reward-driven drinking",
    ],
    pearls: [
      "The drug-abuse paradox: an opioid-blocker treating addiction; no euphoria, no dependence, no diversion value.",
      "The precipitated-withdrawal rule: opioid-free verification (naloxone challenge or 7-10 day documented abstinence) BEFORE the first dose; the error that defines medico-legal risk.",
      "Alcohol mechanism: blocking endogenous opioid release blunts alcohol's rewarding arc; best for the 'drinking for reward' phenotype.",
      "Vivitrol's genius: adherence by depot, one monthly decision replaces 30 daily ones.",
      "The post-treatment trap: patients off naltrexone who return to their old opioid dose die at their pre-tolerance dose; overdose education is part of every prescription.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017); facts are paraphrased, not reproduced.",
  ],
};
