import type { Drug } from "../types";

/**
 * Nalmefene — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), nalmefene monograph (book p. 85)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const nalmefene: Drug = {
  /* ---- Identity ---- */
  slug: "nalmefene",
  genericName: "Nalmefene",
  brandNames: ["Selincro"],
  drugClass: "substance-use-treatment",
  drugClassLabel: "SUD Treatment",
  drugClassFullName: "Opioid Antagonist (Alcohol Dependence)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Substance Use Treatments", "Opioid Antagonists", "Nalmefene"],
  /* ---- Hero / summary ---- */
  tagline: "Europe's as-needed antagonist — opioid blockade taken only on drinking days.",
  summary: "Nalmefene is a long-acting opioid antagonist (naltrexone's structural relative) approved in Europe for ALCOHOL DEPENDENCE with a distinctive as-needed model: one tablet 1-2 hours before an anticipated drinking episode, reducing consumption rather than enforcing abstinence. It targets the still-drinking patient who is not ready for abstinence — a harm-reduction pharmacology.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Nalmefene — from its molecular target (Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology) to clinical effect.",
    "List the FDA-approved and off-label uses of Nalmefene.",
    "Predict the common and serious side effects of Nalmefene from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Nalmefene.",
    "Compare Nalmefene with other sud treatments and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Nalmefene blocks mu-opioid receptors (blunting alcohol reward) with additional kappa-antagonist activity — taken as-needed before drinking.",
    molecularTarget: "Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Nalmefene blocks mu-opioid receptors (blunting alcohol reward) with additional kappa-antagonist activity — taken as-needed before drinking.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 26 hours. — see mechanism and prescriber sections.",
    halfLife: "About 26 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Nalmefene",
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
    "Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology",
  ],
  brainRegionIds: ["nucleus-accumbens", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alcohol dependence — reduction of consumption (as-needed)",
      status: "guideline",
      description: "For patients not ready for abstinence: one tablet 1-2 h before drinking; reduces per-session intake.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Nalmefene must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioid analgesics",
      severity: "absolute",
      rationale: "Blockade — no analgesia.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description: "The most common effect.",
      management: "Take with food.",
    },
    {
      name: "Dizziness, insomnia, headache",
      frequency: "common",
      severity: "mild",
      description: "Early effects.",
      management: "Reassurance.",
    },
    {
      name: "Fatigue",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Precipitated opioid withdrawal",
      frequency: "uncommon",
      severity: "severe",
      description: "As with naltrexone — opioid-free status required.",
      management: "Verify before use.",
    },
    {
      name: "Post-treatment overdose risk",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Lost tolerance after blockade ends.",
      management: "Overdose education.",
    },
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "severe",
      description: "Less than high-dose naltrexone but monitored.",
      management: "LFT baseline.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Drinking quantity review",
      frequency: "Every review",
      rationale: "The harm-reduction target is measured in units reduced.",
    },
    {
      parameter: "Overdose education",
      frequency: "Every prescription",
      rationale: "Lost-tolerance trap.",
    },
  ],
  interactions: [
    {
      drug: "Opioid analgesics",
      severity: "contraindicated",
      mechanism: "Blockade — no analgesia.",
      action: "Medical alert; planning.",
    },
  ],
  pregnancy: {
    summary: "Limited data; decisions individualised.",
    lactation: "Avoid pending data.",
  },
  renalAdjustment: "No major adjustment.",
  hepaticAdjustment: "Not recommended in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Nalmefene is a European medicine for people with alcohol problems who are not ready to stop completely: you take one tablet an hour or two before you expect to drink, and it reduces how much you drink in that session. It blocks the brain's reward response to alcohol. It has no abuse potential, and it must never be combined with opioid painkillers.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Nalmefene builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The as-needed revolution: pharmacotherapy for the patient who is NOT choosing abstinence — one tablet before drinking blunts the reward arc.",
    "Kappa-antagonism: the pharmacological difference from naltrexone, theoretically relevant to dysphoria-driven drinking.",
    "Harm-reduction philosophy in a tablet: reduce consumption now, abstinence later if chosen.",
    "Not FDA-approved — a European model encountering patients worldwide.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Nalmefene: Nalmefene blocks mu-opioid receptors (blunting alcohol reward) with additional kappa-antagonist activity — taken as-needed before drinking.",
        "Uses of Nalmefene: Alcohol dependence — reduction of consumption (as-needed)",
        "Mechanism: mu-opioid antagonist (+ kappa-antagonism) — as-needed model.",
        "Indication: alcohol dependence with REDUCTION (not abstinence) as the goal (EU).",
      ],
      practical: [
        "Prescribe Nalmefene for alcohol dependence — reduction of consumption (as-needed) with dose, timing, and duration.",
        "Outline the monitoring plan: Drinking quantity review (Every review); Overdose education (Every prescription)",
      ],
      longAnswer: [
        "Nalmefene: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: mu-opioid antagonist (+ kappa-antagonism) — as-needed model.",
        "Indication: alcohol dependence with REDUCTION (not abstinence) as the goal (EU).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: mu-opioid antagonist (+ kappa-antagonism) — as-needed model.",
        "Indication: alcohol dependence with REDUCTION (not abstinence) as the goal (EU).",
        "Dose: 18 mg 1-2 h before anticipated drinking.",
        "Same precipitated-withdrawal and post-treatment overdose cautions as naltrexone.",
        "Not available in the USA.",
      ],
      pyqConcepts: [
        "Mechanism/target of Nalmefene",
        "Key adverse effect: Precipitated opioid withdrawal",
        "Dosing and titration of Nalmefene",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Nalmefene develops precipitated opioid withdrawal — next best step?",
        "When to choose Nalmefene over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology",
        "Most common side effects: Nausea, Dizziness, insomnia, headache, Fatigue",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The as-needed revolution: pharmacotherapy for the patient who is NOT choosing abstinence — one tablet before drinking blunts the reward arc.",
        "Kappa-antagonism: the pharmacological difference from naltrexone, theoretically relevant to dysphoria-driven drinking.",
        "Harm-reduction philosophy in a tablet: reduce consumption now, abstinence later if chosen.",
        "Not FDA-approved — a European model encountering patients worldwide.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: mu-opioid antagonist (+ kappa-antagonism) — as-needed model.",
    "Indication: alcohol dependence with REDUCTION (not abstinence) as the goal (EU).",
    "Dose: 18 mg 1-2 h before anticipated drinking.",
    "Same precipitated-withdrawal and post-treatment overdose cautions as naltrexone.",
    "Not available in the USA.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — alcohol dependence — reduction of consumption (as-needed)",
      presentation: "A patient presenting with alcohol dependence — reduction of consumption (as-needed), started on Nalmefene.",
      history: "A adult patient presents with a alcohol dependence — reduction of consumption (as-needed) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with alcohol dependence — reduction of consumption (as-needed); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Alcohol dependence — reduction of consumption (as-needed). Differentials are considered and excluded clinically.",
      rationale: "Nalmefene is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SUD Treatment) with strong evidence in this condition.",
      management: "Started at 18 mg 1-2 h before anticipated drinking, titrated to 18 mg per drinking day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Nalmefene takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SUD Treatment comparison — choosing within the class",
      primaryDrug: "Nalmefene",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology",
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
              drug: "Naltrexone",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 26 hours.",
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
              drug: "Naltrexone",
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
              drug: "Naltrexone",
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
              drug: "Naltrexone",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The as-needed drinking-day antagonist (European harm reduction)",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "The abstinence-protector — for the already-abstinent patient",
            },
            {
              drug: "Buprenorphine",
              value: "The safety-ceiling maintenance agonist — office-based opioid treatment",
            },
            {
              drug: "Disulfiram",
              value: "The classical aversion deterrent — for the motivated, supervised patient",
            },
            {
              drug: "Naltrexone",
              value: "The pure antagonist — alcohol relapse and opioid blockade",
            },
          ],
        },
      ],
      takeaway: "All opioid antagonists share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Nalmefene reaches peak plasma concentration and begins acting at its molecular target (Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea, dizziness, insomnia, headache, fatigue). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Reward-blunting within 1-2 hours of the dose.)",
      title: "Therapeutic effect builds",
      description: "Reward-blunting within 1-2 hours of the dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Nalmefene is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Nalmefene take to work?",
      answer: "Reward-blunting within 1-2 hours of the dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Nalmefene?",
      answer: "The most frequently reported effects are: Nausea, Dizziness, insomnia, headache, Fatigue. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Nalmefene suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Nalmefene habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Nalmefene exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Nalmefene during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Nalmefene may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), nalmefene monograph, p. 85",
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
        source: "FDA Prescribing Information for Selincro (Nalmefene)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for nalmefene — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Nalmefene",
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
  ],
  relatedConditions: [
    {
      name: "Alcohol dependence — reduction of consumption (as-needed)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Nalmefene",
      type: "drug",
      href: "/drugs/nalmefene",
      note: "The drug you're reading about",
    },
    {
      label: "SUD Treatment",
      type: "class",
      href: "#mechanism",
      note: "Opioid Antagonist (Alcohol Dependence)",
    },
    {
      label: "Endogenous opioids",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Alcohol dependence — reduction of consumption (as-needed)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Precipitated opioid withdrawal",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Post-treatment overdose risk",
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
      label: "Patient Guide — Nalmefene",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Europe's as-needed antagonist — opioid blockade taken only on drinking days.",
    summary: "Nalmefene is a prescription medicine used to treat alcohol dependence — reduction of consumption (as-needed). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Nalmefene is a European medicine for people with alcohol problems who are not ready to stop completely: you take one tablet an hour or two before you expect to drink, and it reduces how much you drink in that session. It blocks the brain's reward response to alcohol. It has no abuse potential, and it must never be combined with opioid painkillers.",
    sideEffects: "The most common side effects are: nausea, dizziness, insomnia, headache, fatigue. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Precipitated opioid withdrawal and Post-treatment overdose risk. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: drinking quantity review (every review); overdose education (every prescription). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioid analgesics. Avoid alcohol unless your doctor says it is safe.",
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
    prescribingScenarios: [
      "European-origin prescriptions continued rarely.",
    ],
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Opioid Antagonists",
    members: [
      {
        name: "Nalmefene",
        slug: "nalmefene",
        relationship: "This guide",
        distinguishing: "The as-needed drinking-day antagonist (European harm reduction)",
      },
      {
        name: "Acamprosate",
        slug: "acamprosate",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The abstinence-protector — for the already-abstinent patient",
      },
      {
        name: "Buprenorphine",
        slug: "buprenorphine",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The safety-ceiling maintenance agonist — office-based opioid treatment",
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
      question: "Which molecular target does Nalmefene primarily act on?",
      options: [
        "Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Nalmefene acts primarily at Mu-opioid receptor (antagonist) — kappa-antagonist activity adds mood-relevant pharmacology. Nalmefene blocks mu-opioid receptors (blunting alcohol reward) with additional kappa-antagonist activity — taken as-needed before drinking.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Nalmefene?",
      options: ["Nausea", "Dizziness, insomnia, headache", "Fatigue", "Weight gain"],
      correctIndex: 0,
      explanation: "Nausea — The most common effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Nalmefene for alcohol dependence (as-needed)?",
      options: ["18 mg per drinking day", "18 mg/day", "18 mg per drinking day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For alcohol dependence (as-needed): start 18 mg 1-2 h before anticipated drinking, target 18 mg per drinking day, maximum 18 mg/day. One tablet per drinking day; continuous daily if drinking daily",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Nalmefene in two sentences.",
      answer: "Nalmefene blocks mu-opioid receptors (blunting alcohol reward) with additional kappa-antagonist activity — taken as-needed before drinking. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Nalmefene.",
      answer: "Alcohol dependence — reduction of consumption (as-needed). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Nalmefene and how you would manage it.",
      answer: "Precipitated opioid withdrawal: As with naltrexone — opioid-free status required. Management: Verify before use.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Nalmefene require?",
      answer: "Drinking quantity review (Every review); Overdose education (Every prescription)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Nalmefene that separates safe prescribers from unsafe ones.",
      answer: "The as-needed revolution: pharmacotherapy for the patient who is NOT choosing abstinence — one tablet before drinking blunts the reward arc.",
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
      checkpoint: "You now know what Nalmefene is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Nalmefene works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Nalmefene safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Nalmefene.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Nalmefene with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Nalmefene.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Reward-blunting within 1-2 hours of the dose.",
    ],
    ifItWorks: [
      "Continue Nalmefene at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Nalmefene (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Nalmefene follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Alcohol dependence (as-needed)",
        starting: "18 mg 1-2 h before anticipated drinking",
        titration: "One tablet per drinking day; continuous daily if drinking daily",
        target: "18 mg per drinking day",
        max: "18 mg/day",
      },
    ],
    dosageForms: ["Film-coated tablets 18 mg"],
    dosingTips: [
      "One tablet before drinking — the simplicity is the adherence.",
      "Track units: reduction is measured, not assumed.",
      "Opioid-free status before first use.",
    ],
    overdose: [
      "Overdose with Nalmefene is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Nalmefene is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 26 hours..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["As-needed — suits non-abstinence goals.", "Reduces consumption measurably.", "No abuse potential."],
    potentialDisadvantages: [
      "Not abstinence-focused (criticised by some).",
      "Not available in many countries (not US).",
      "Same opioid cautions as naltrexone.",
    ],
    primaryTargetSymptoms: [
      "Alcohol consumption per drinking session",
    ],
    pearls: [
      "The as-needed revolution: pharmacotherapy for the patient who is NOT choosing abstinence — one tablet before drinking blunts the reward arc.",
      "Kappa-antagonism: the pharmacological difference from naltrexone, theoretically relevant to dysphoria-driven drinking.",
      "Harm-reduction philosophy in a tablet: reduce consumption now, abstinence later if chosen.",
      "Not FDA-approved — a European model encountering patients worldwide.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
