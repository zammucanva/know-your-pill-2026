import type { Drug } from "../types";

/**
 * Acamprosate — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), acamprosate monograph (book p. 1)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const acamprosate: Drug = {
  /* ---- Identity ---- */
  slug: "acamprosate",
  genericName: "Acamprosate",
  brandNames: ["Campral"],
  drugClass: "substance-use-treatment",
  drugClassLabel: "SUD Treatment",
  drugClassFullName: "Alcohol Dependence Treatment Agent",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Substance Use Treatments", "Alcohol Dependence Treatments", "Acamprosate"],
  /* ---- Hero / summary ---- */
  tagline: "The abstinence-protecting alcohol medicine — glutamate-GABA rebalancing without dependence.",
  summary: "Acamprosate is an alcohol-dependence treatment that restores the glutamate-GABA imbalance of chronic alcohol exposure: it reduces excitatory glutamate tone and enhances inhibitory GABA tone, reducing relapse risk in patients who have already achieved abstinence. It is not intoxicating, not dependent-forming, and combines safely with alcohol (unlike disulfiram) and with naltrexone.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Acamprosate — from its molecular target (Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation)) to clinical effect.",
    "List the FDA-approved and off-label uses of Acamprosate.",
    "Predict the common and serious side effects of Acamprosate from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Acamprosate.",
    "Compare Acamprosate with other sud treatments and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Acamprosate theoretically reduces excitatory glutamate neurotransmission and increases inhibitory GABA neurotransmission — acting as 'artificial alcohol' to quiet the hyperexcitable brain of early abstinence.",
    molecularTarget: "Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Acamprosate theoretically reduces excitatory glutamate neurotransmission and increases inhibitory GABA neurotransmission — acting as 'artificial alcohol' to quiet the hyperexcitable brain of early abstinence.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 20-33 hours. — see mechanism and prescriber sections.",
    halfLife: "20-33 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Acamprosate",
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
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation)",
  ],
  brainRegionIds: ["nucleus-accumbens", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Maintenance of alcohol abstinence",
      status: "fda-approved",
      description: "For patients abstinent at treatment start; reduces relapse drinking; works best with psychosocial support.",
    },
    {
      name: "Early-abstinence craving and withdrawal-prolonged symptoms",
      status: "guideline",
      description: "Reduces the subacute withdrawal discomfort that drives early relapse.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Acamprosate must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Diarrhoea and GI upset",
      frequency: "common",
      severity: "mild",
      description: "The most common adverse effect — osmotic GI effects of an amino-acid derivative.",
      management: "Take with meals; usually tolerable.",
    },
    {
      name: "Anxiety and insomnia",
      frequency: "uncommon",
      severity: "mild",
      description: "Usually mild and transient.",
      management: "Reassurance.",
    },
    {
      name: "Flatus and itching",
      frequency: "uncommon",
      severity: "mild",
      description: "Minor effects.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Suicidal ideation (rare signal)",
      frequency: "rare",
      severity: "severe",
      description: "Depression and suicidality reported in trials — monitor mood.",
      management: "Mood review; stop if depression emerges.",
    },
    {
      name: "Renal impairment accumulation",
      frequency: "uncommon",
      severity: "severe",
      description: "Renally excreted unchanged — contraindicated in severe renal impairment.",
      management: "Check creatinine before starting.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Renal function",
      frequency: "Baseline",
      rationale: "Contraindication check.",
    },
    {
      parameter: "Mood and suicidality",
      frequency: "At reviews",
      rationale: "The rare adverse-effect signal.",
    },
    {
      parameter: "Abstinence status and craving",
      frequency: "Every review",
      rationale: "Treatment target tracking.",
    },
  ],
  interactions: [
    {
      drug: "Naltrexone",
      severity: "moderate",
      mechanism: "Plasma levels may rise — clinically insignificant; the combination is used therapeutically.",
      action: "No dose change needed.",
    },
    {
      drug: "Antibiotics (e.g., tetracyclines class)",
      severity: "minor",
      mechanism: "Acamprosate may increase their levels (old data).",
      action: "Awareness only.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Animal teratogenicity data exist; human data lacking. Decisions individualised — abstinence itself is the goal of pregnancy care.",
    lactation: "Excreted in milk in animals; human data lacking — weigh carefully.",
  },
  renalAdjustment: "Contraindicated in severe renal impairment (CrCl < 30); halve dose in moderate impairment.",
  hepaticAdjustment: "Not hepatically metabolised — dose adjustment not required.",
  /* ---- Education ---- */
  patientExplanation: "Acamprosate helps you stay off alcohol once you have stopped: it quietly rebalances brain chemicals that alcohol has disturbed, reducing the discomfort and craving that lead back to drinking. It is not addictive, does not make you sick if you drink, and works best alongside counselling or support groups. It must be taken three times a day with meals.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Acamprosate builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The 'already abstinent' drug: acamprosate protects abstinence; naltrexone reduces heavy drinking — matching drug to drinking pattern is the prescribing skill.",
    "TID dosing is the adherence tax — anchoring to three meals turns it into a habit.",
    "Combines safely with alcohol AND naltrexone — the most forgiving agent in the alcohol toolkit.",
    "Unchanged renal excretion: no interactions, no CYP, no overdose danger — the cleanest pharmacokinetic profile in the class.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Acamprosate: Acamprosate theoretically reduces excitatory glutamate neurotransmission and increases inhibitory GABA neurotransmission — acting as 'artificial alcohol' to quiet the hyperexcitable brain of early abstinence.",
        "Uses of Acamprosate: Maintenance of alcohol abstinence; Early-abstinence craving and withdrawal-prolonged symptoms",
        "Mechanism: glutamate reduction + GABA enhancement (multi-modal, mGluR-linked).",
        "Indication: maintenance of ABSTINENCE (patient abstinent at start).",
      ],
      practical: [
        "Prescribe Acamprosate for maintenance of alcohol abstinence with dose, timing, and duration.",
        "Outline the monitoring plan: Renal function (Baseline); Mood and suicidality (At reviews); Abstinence status and craving (Every review)",
      ],
      longAnswer: [
        "Acamprosate: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: glutamate reduction + GABA enhancement (multi-modal, mGluR-linked).",
        "Indication: maintenance of ABSTINENCE (patient abstinent at start).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: glutamate reduction + GABA enhancement (multi-modal, mGluR-linked).",
        "Indication: maintenance of ABSTINENCE (patient abstinent at start).",
        "Dose 666 mg TID (> 60 kg); 666 mg BD (< 60 kg).",
        "Renally excreted unchanged — contraindicated in severe renal impairment.",
        "Not habit-forming; no interaction with alcohol or naltrexone.",
        "Works over weeks; combine with psychosocial treatment.",
      ],
      pyqConcepts: [
        "Mechanism/target of Acamprosate",
        "Key adverse effect: Suicidal ideation (rare signal)",
        "Dosing and titration of Acamprosate",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Acamprosate develops suicidal ideation (rare signal) — next best step?",
        "When to choose Acamprosate over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation)",
        "Most common side effects: Diarrhoea and GI upset, Anxiety and insomnia, Flatus and itching",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The 'already abstinent' drug: acamprosate protects abstinence; naltrexone reduces heavy drinking — matching drug to drinking pattern is the prescribing skill.",
        "TID dosing is the adherence tax — anchoring to three meals turns it into a habit.",
        "Combines safely with alcohol AND naltrexone — the most forgiving agent in the alcohol toolkit.",
        "Unchanged renal excretion: no interactions, no CYP, no overdose danger — the cleanest pharmacokinetic profile in the class.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: glutamate reduction + GABA enhancement (multi-modal, mGluR-linked).",
    "Indication: maintenance of ABSTINENCE (patient abstinent at start).",
    "Dose 666 mg TID (> 60 kg); 666 mg BD (< 60 kg).",
    "Renally excreted unchanged — contraindicated in severe renal impairment.",
    "Not habit-forming; no interaction with alcohol or naltrexone.",
    "Works over weeks; combine with psychosocial treatment.",
    "Efficacy in trials modest but real (COMBINE study).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — maintenance of alcohol abstinence",
      presentation: "A patient presenting with maintenance of alcohol abstinence, started on Acamprosate.",
      history: "A adult patient presents with a maintenance of alcohol abstinence picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with maintenance of alcohol abstinence; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Maintenance of alcohol abstinence. Differentials are considered and excluded clinically.",
      rationale: "Acamprosate is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SUD Treatment) with strong evidence in this condition.",
      management: "Started at 666 mg three times daily (> 60 kg), titrated to 1998 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Acamprosate takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SUD Treatment comparison — choosing within the class",
      primaryDrug: "Acamprosate",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation)",
          comparisons: [
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
            {
              drug: "Varenicline",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "20-33 hours.",
          comparisons: [
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
            {
              drug: "Varenicline",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The abstinence-protector — for the already-abstinent patient",
          comparisons: [
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
            {
              drug: "Varenicline",
              value: "The most effective smoking-cessation medicine",
            },
          ],
        },
      ],
      takeaway: "All alcohol dependence treatments share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Acamprosate reaches peak plasma concentration and begins acting at its molecular target (Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (diarrhoea and gi upset, anxiety and insomnia, flatus and itching). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Weeks of treatment before full benefit; efficacy trials 3-12 months.)",
      title: "Therapeutic effect builds",
      description: "Weeks of treatment before full benefit; efficacy trials 3-12 months. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Acamprosate is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Acamprosate take to work?",
      answer: "Weeks of treatment before full benefit; efficacy trials 3-12 months.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Acamprosate?",
      answer: "The most frequently reported effects are: Diarrhoea and GI upset, Anxiety and insomnia, Flatus and itching. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Acamprosate suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Acamprosate habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Acamprosate exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Acamprosate during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Acamprosate may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), acamprosate monograph, p. 1",
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
        source: "FDA Prescribing Information for Campral (Acamprosate)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for acamprosate — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Acamprosate",
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
    {
      name: "Nalmefene",
      slug: "nalmefene",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
  ],
  relatedConditions: [
    {
      name: "Maintenance of alcohol abstinence",
      relationship: "primary",
    },
    {
      name: "Early-abstinence craving and withdrawal-prolonged symptoms",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Acamprosate",
      type: "drug",
      href: "/drugs/acamprosate",
      note: "The drug you're reading about",
    },
    {
      label: "SUD Treatment",
      type: "class",
      href: "#mechanism",
      note: "Alcohol Dependence Treatment Agent",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Maintenance of alcohol abstinence",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Early-abstinence craving and withdrawal-prolonged symptoms",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Suicidal ideation (rare signal)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Renal impairment accumulation",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Diarrhoea and GI upset",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Acamprosate",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The abstinence-protecting alcohol medicine — glutamate-GABA rebalancing without dependence.",
    summary: "Acamprosate is a prescription medicine used to treat maintenance of alcohol abstinence. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Acamprosate helps you stay off alcohol once you have stopped: it quietly rebalances brain chemicals that alcohol has disturbed, reducing the discomfort and craving that lead back to drinking. It is not addictive, does not make you sick if you drink, and works best alongside counselling or support groups. It must be taken three times a day with meals.",
    sideEffects: "The most common side effects are: diarrhoea and gi upset, anxiety and insomnia, flatus and itching. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Suicidal ideation (rare signal) and Renal impairment accumulation. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: renal function (baseline); mood and suicidality (at reviews); abstinence status and craving (every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Naltrexone, Antibiotics (e.g., tetracyclines class). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Acamprosat (limited availability)",
        manufacturer: "imported/special",
        strengths: "333 mg",
      },
    ],
    typicalDoses: "666 mg TID.",
    prescribingScenarios: [
      "De-addiction centre programmes for abstinent patients.",
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
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Alcohol Dependence Treatments",
    members: [
      {
        name: "Acamprosate",
        slug: "acamprosate",
        relationship: "This guide",
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
      question: "Which molecular target does Acamprosate primarily act on?",
      options: [
        "Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Acamprosate acts primarily at Glutamate and GABA systems (multi-modal: mGluR binding, glutamate normalisation). Acamprosate theoretically reduces excitatory glutamate neurotransmission and increases inhibitory GABA neurotransmission — acting as 'artificial alcohol' to quiet the hyperexcitable brain of early abstinence.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Acamprosate?",
      options: ["Diarrhoea and GI upset", "Anxiety and insomnia", "Flatus and itching", "Weight gain"],
      correctIndex: 0,
      explanation: "Diarrhoea and GI upset — The most common adverse effect — osmotic GI effects of an amino-acid derivative.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Acamprosate for alcohol abstinence maintenance?",
      options: ["1998 mg/day", "1998 mg/day (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For alcohol abstinence maintenance: start 666 mg three times daily (> 60 kg), target 1998 mg/day, maximum 1998 mg/day. No titration needed; start at full dose",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Acamprosate in two sentences.",
      answer: "Acamprosate theoretically reduces excitatory glutamate neurotransmission and increases inhibitory GABA neurotransmission — acting as 'artificial alcohol' to quiet the hyperexcitable brain of early abstinence. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Acamprosate.",
      answer: "Maintenance of alcohol abstinence, Early-abstinence craving and withdrawal-prolonged symptoms. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Acamprosate and how you would manage it.",
      answer: "Suicidal ideation (rare signal): Depression and suicidality reported in trials — monitor mood. Management: Mood review; stop if depression emerges.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Acamprosate require?",
      answer: "Renal function (Baseline); Mood and suicidality (At reviews); Abstinence status and craving (Every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Acamprosate that separates safe prescribers from unsafe ones.",
      answer: "The 'already abstinent' drug: acamprosate protects abstinence; naltrexone reduces heavy drinking — matching drug to drinking pattern is the prescribing skill.",
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
      checkpoint: "You now know what Acamprosate is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Acamprosate works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Acamprosate safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Acamprosate.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Acamprosate with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Acamprosate.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Weeks of treatment before full benefit; efficacy trials 3-12 months.",
    ],
    ifItWorks: [
      "Continue Acamprosate at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Acamprosate (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Acamprosate follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Alcohol abstinence maintenance",
        starting: "666 mg three times daily (> 60 kg)",
        titration: "No titration needed; start at full dose",
        target: "1998 mg/day",
        max: "1998 mg/day",
      },
    ],
    dosageForms: ["Tablets (enteric-coated) 333 mg"],
    dosingTips: [
      "Anchor the three doses to three meals.",
      "Set expectations: it protects abstinence over months, not days.",
      "Safe with alcohol — no reaction — but the goal remains abstinence.",
    ],
    overdose: [
      "Overdose with Acamprosate is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Acamprosate is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 20-33 hours..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["Not intoxicating or dependence-forming.", "No alcohol reaction.", "Combines with naltrexone.", "Clean renal-only pharmacokinetics."],
    potentialDisadvantages: [
      "TID dosing burden.",
      "Modest effect sizes.",
      "For the already-abstinent — the wrong drug for the still-drinking patient.",
    ],
    primaryTargetSymptoms: ["Maintenance of alcohol abstinence", "Early-abstinence craving"],
    pearls: [
      "The 'already abstinent' drug: acamprosate protects abstinence; naltrexone reduces heavy drinking — matching drug to drinking pattern is the prescribing skill.",
      "TID dosing is the adherence tax — anchoring to three meals turns it into a habit.",
      "Combines safely with alcohol AND naltrexone — the most forgiving agent in the alcohol toolkit.",
      "Unchanged renal excretion: no interactions, no CYP, no overdose danger — the cleanest pharmacokinetic profile in the class.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
