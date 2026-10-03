import type { Drug } from "../types";

/**
 * Naltrexone-Bupropion — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), naltrexone-bupropion monograph (book p. 87)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const naltrexoneBupropion: Drug = {
  /* ---- Identity ---- */
  slug: "naltrexone-bupropion",
  genericName: "Naltrexone-Bupropion",
  brandNames: ["Contrave", "Mysimband"],
  drugClass: "substance-use-treatment",
  drugClassLabel: "SUD Treatment",
  drugClassFullName: "Opioid Antagonist + NDRI Combination",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Substance Use Treatments", "Weight & Addiction Combinations", "Naltrexone-Bupropion"],
  /* ---- Hero / summary ---- */
  tagline: "The reward-blocker + NDRI combination: appetite and addiction circuitry in two tablets.",
  summary: "Naltrexone-bupropion (Contrave/Mysimbrand) combines low-dose naltrexone (opioid reward blockade) with bupropion (NDRI appetite and reward modulation) for weight management: the combination reduces hunger and food reward. It carries bupropion's seizure and BP warnings plus naltrexone's opioid rules, and a small antidepressant-adjacent mood benefit from the bupropion half.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Naltrexone-Bupropion, from its molecular target (Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion)) to clinical effect.",
    "List the FDA-approved and off-label uses of Naltrexone-Bupropion.",
    "Predict the common and serious side effects of Naltrexone-Bupropion from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Naltrexone-Bupropion.",
    "Compare Naltrexone-Bupropion with other sud treatments and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Naltrexone blunts the food-reward opioid arc; bupropion (an NDRI) reduces appetite in the hypothalamus and lifts the reward-mood substrate: a hunger-and-reward combination.",
    molecularTarget: "Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Naltrexone blunts the food-reward opioid arc; bupropion (an NDRI) reduces appetite in the hypothalamus and lifts the reward-mood substrate: a hunger-and-reward combination.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Bupropion ~21 h; naltrexone shorter: combination dosing twice daily. See mechanism and prescriber sections.",
    halfLife: "Bupropion ~21 h; naltrexone shorter: combination dosing twice daily.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Naltrexone-Bupropion",
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
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion)",
  ],
  brainRegionIds: ["nucleus-accumbens", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Weight management (chronic weight management with diet + exercise)",
      status: "fda-approved",
      description: "For BMI ≥ 30, or ≥ 27 with comorbidity; mean placebo-subtracted loss ~4-5%.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Naltrexone-Bupropion must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioid analgesics",
      severity: "absolute",
      rationale: "Naltrexone blockade.",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Bupropion rule: hypertensive crisis.",
    },
    {
      name: "Other bupropion products",
      severity: "absolute",
      rationale: "Duplicate dosing: seizure risk.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Suicidal thinking (bupropion component) and opioid interaction rules (naltrexone component)",
      text: "Antidepressant-class suicidality warning applies. Opioid analgesia is blocked; precipitated withdrawal occurs in opioid users; post-treatment lost tolerance is dangerous.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea and constipation",
      frequency: "very-common",
      severity: "moderate",
      description: "The most common adverse effects: naltrexone's GI effects dominate.",
      management: "Titration week; take with food.",
    },
    {
      name: "Headache and dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Bupropion-side effects.",
      management: "Reassurance.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "mild",
      description: "Bupropion's activating effect.",
      management: "Morning dosing.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "moderate",
      description: "Opioid-blockade class effect.",
      management: "Bowel regimen.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Seizures (bupropion)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Bupropion dose-related threshold lowering: the combination carries bupropion's warning set.",
      management: "Avoid in seizure history/eating disorders; 450 mg ceiling discipline.",
    },
    {
      name: "Blood pressure and heart rate rise",
      frequency: "common",
      severity: "moderate",
      description: "Bupropion's noradrenergic effect: the paradox of a weight drug raising BP.",
      management: "Monitor BP; caution in uncontrolled hypertension.",
    },
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "severe",
      description: "The naltrexone component's warning (dose-related).",
      management: "LFTs if symptomatic.",
    },
    {
      name: "Precipitated opioid withdrawal",
      frequency: "common",
      severity: "severe",
      description: "The naltrexone rule: blocks and precipitates.",
      management: "Opioid-free verification; opioid analgesia planning.",
    },
    {
      name: "Suicidal thinking (bupropion component)",
      frequency: "uncommon",
      severity: "severe",
      description: "Antidepressant-class warning applies.",
      management: "Mood monitoring in early weeks.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Blood pressure and heart rate",
      frequency: "Baseline and regularly",
      rationale: "The paradoxical rise.",
    },
    {
      parameter: "Weight trajectory",
      frequency: "Monthly initially",
      rationale: "12-week non-response → stop.",
    },
    {
      parameter: "Mood review",
      frequency: "Early weeks",
      rationale: "Bupropion-class caution.",
    },
  ],
  interactions: [
    {
      drug: "Opioid analgesics",
      severity: "contraindicated",
      mechanism: "Naltrexone blockade.",
      action: "Planning; medical alert.",
    },
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Bupropion rule: hypertensive crisis.",
      action: "14-day washout.",
    },
    {
      drug: "Other bupropion products",
      severity: "contraindicated",
      mechanism: "Duplicate dosing: seizure risk.",
      action: "Never combine with Wellbutrin/Zyban.",
    },
    {
      drug: "CYP2D6 substrates",
      severity: "major",
      mechanism: "Bupropion inhibits 2D6.",
      action: "Review the whole list.",
    },
  ],
  pregnancy: {
    legacyCategory: "X for weight use",
    summary: "Contraindicated in pregnancy for weight indications: weight loss is not pursued in pregnancy; bupropion's separate pregnancy psychiatry use differs.",
    lactation: "Both components pass into milk: avoid.",
  },
  renalAdjustment: "Reduce dose in renal impairment; contraindicated in severe (bupropion accumulation).",
  hepaticAdjustment: "Reduce dose in hepatic impairment; contraindicated in severe.",
  /* ---- Education ---- */
  patientExplanation: "This combination tablet pairs a medicine that blocks food's reward signals (naltrexone) with one that reduces appetite and lifts mood slightly (bupropion). It is prescribed for longer-term weight management alongside diet and exercise. Its warnings come from both halves: it must not be taken with opioid painkillers, it can raise blood pressure, and it can rarely cause seizures.",
  patientEducationPoints: [
    "Take it exactly as prescribed, at the same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Naltrexone-Bupropion builds over weeks. Do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The logic of the pair: bupropion drives appetite down (NDRI in the hypothalamus) while naltrexone blunts the food-reward arc; hunger AND reward addressed.",
    "The titration week is a tolerability necessity: full-dose nausea is the dropout reason.",
    "BP paradox: a weight drug that raises blood pressure. Monitor and avoid in uncontrolled hypertension.",
    "Bupropion's full warning set travels with the combination: seizures, eating disorders, MAOI rules.",
    "Opioid rules: no opioid analgesia while aboard (naltrexone blocks it); post-course lost tolerance applies.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Naltrexone-Bupropion: Naltrexone blunts the food-reward opioid arc; bupropion (an NDRI) reduces appetite in the hypothalamus and lifts the reward-mood substrate: a hunger-and-reward combination.",
        "Uses of Naltrexone-Bupropion: Weight management (chronic weight management with diet + exercise)",
        "Mechanism: naltrexone (mu-blockade) + bupropion (NDRI); food reward and appetite.",
        "Indication: chronic weight management (BMI ≥ 30, or ≥ 27 + comorbidity).",
      ],
      practical: [
        "Prescribe Naltrexone-Bupropion for weight management (chronic weight management with diet + exercise) with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure and heart rate (Baseline and regularly); Weight trajectory (Monthly initially); Mood review (Early weeks)",
      ],
      longAnswer: [
        "Naltrexone-Bupropion: mechanism, indications, adverse effects, contraindications, and dosing; structured answer framework.",
        "Mechanism: naltrexone (mu-blockade) + bupropion (NDRI); food reward and appetite.",
        "Indication: chronic weight management (BMI ≥ 30, or ≥ 27 + comorbidity).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: naltrexone (mu-blockade) + bupropion (NDRI); food reward and appetite.",
        "Indication: chronic weight management (BMI ≥ 30, or ≥ 27 + comorbidity).",
        "Dose: weekly titration to 2 tablets twice daily (32/360 mg).",
        "Bupropion warnings aboard: seizures, BP, MAOI, eating disorders.",
        "Naltrexone rules aboard: opioid blockade, precipitated withdrawal, lost tolerance.",
        "Mean weight loss ~4-5% beyond placebo.",
      ],
      pyqConcepts: [
        "Mechanism/target of Naltrexone-Bupropion",
        "Key adverse effect: Seizures (bupropion)",
        "Dosing and titration of Naltrexone-Bupropion",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Naltrexone-Bupropion develops seizures (bupropion): next best step?",
        "When to choose Naltrexone-Bupropion over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion)",
        "Most common side effects: Nausea and constipation, Headache and dry mouth, Insomnia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The logic of the pair: bupropion drives appetite down (NDRI in the hypothalamus) while naltrexone blunts the food-reward arc; hunger AND reward addressed.",
        "The titration week is a tolerability necessity: full-dose nausea is the dropout reason.",
        "BP paradox: a weight drug that raises blood pressure. Monitor and avoid in uncontrolled hypertension.",
        "Bupropion's full warning set travels with the combination: seizures, eating disorders, MAOI rules.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: naltrexone (mu-blockade) + bupropion (NDRI); food reward and appetite.",
    "Indication: chronic weight management (BMI ≥ 30, or ≥ 27 + comorbidity).",
    "Dose: weekly titration to 2 tablets twice daily (32/360 mg).",
    "Bupropion warnings aboard: seizures, BP, MAOI, eating disorders.",
    "Naltrexone rules aboard: opioid blockade, precipitated withdrawal, lost tolerance.",
    "Mean weight loss ~4-5% beyond placebo.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation: weight management (chronic weight management with diet + exercise)",
      presentation: "A patient presenting with weight management (chronic weight management with diet + exercise), started on Naltrexone-Bupropion.",
      history: "A adult patient presents with a weight management (chronic weight management with diet + exercise) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with weight management (chronic weight management with diet + exercise); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Weight management (chronic weight management with diet + exercise). Differentials are considered and excluded clinically.",
      rationale: "Naltrexone-Bupropion is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SUD Treatment) with strong evidence in this condition.",
      management: "Started at One tablet (8/90 mg) daily × 1 week, titrated to 32/360 mg per day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Naltrexone-Bupropion takes weeks for full effect: early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SUD Treatment comparison: choosing within the class",
      primaryDrug: "Naltrexone-Bupropion",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion)",
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
          primaryValue: "Bupropion ~21 h; naltrexone shorter: combination dosing twice daily.",
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
          primaryValue: "The addiction-medicine approach to obesity",
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
              drug: "Naltrexone",
              value: "The pure antagonist: alcohol relapse and opioid blockade",
            },
          ],
        },
      ],
      takeaway: "All weight & addiction combinations share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile: comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Naltrexone-Bupropion reaches peak plasma concentration and begins acting at its molecular target (Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion)). Initial effects are on sleep, energy, or side effects, not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea and constipation, headache and dry mouth, insomnia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Appetite effect within weeks; weight trajectory over months.)",
      title: "Therapeutic effect builds",
      description: "Appetite effect within weeks; weight trajectory over months. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Naltrexone-Bupropion is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Naltrexone-Bupropion take to work?",
      answer: "Appetite effect within weeks; weight trajectory over months.. Like most psychotropic medications, the full benefit builds gradually, some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Naltrexone-Bupropion?",
      answer: "The most frequently reported effects are: Nausea and constipation, Headache and dry mouth, Insomnia, Constipation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Naltrexone-Bupropion suddenly?",
      answer: "No. Taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose. In that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Naltrexone-Bupropion habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Naltrexone-Bupropion exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Naltrexone-Bupropion during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure. Naltrexone-Bupropion may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), naltrexone-bupropion monograph, p. 87",
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
        source: "FDA Prescribing Information for Contrave (Naltrexone-Bupropion)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for naltrexone-bupropion — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Naltrexone-Bupropion",
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
      name: "Nalmefene",
      slug: "nalmefene",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
  ],
  relatedConditions: [
    {
      name: "Weight management (chronic weight management with diet + exercise)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Naltrexone-Bupropion",
      type: "drug",
      href: "/drugs/naltrexone-bupropion",
      note: "The drug you're reading about",
    },
    {
      label: "SUD Treatment",
      type: "class",
      href: "#mechanism",
      note: "Opioid Antagonist + NDRI Combination",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Weight management (chronic weight management with diet + exercise)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Seizures (bupropion)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Blood pressure and heart rate rise",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea and constipation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide. Naltrexone-Bupropion",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The reward-blocker + NDRI combination: appetite and addiction circuitry in two tablets.",
    summary: "Naltrexone-Bupropion is a prescription medicine used to treat weight management (chronic weight management with diet + exercise). It belongs to a well-studied class of medicines and works gradually, most people notice the benefit over weeks, not days.",
    mechanism: "This combination tablet pairs a medicine that blocks food's reward signals (naltrexone) with one that reduces appetite and lifts mood slightly (bupropion). It is prescribed for longer-term weight management alongside diet and exercise. Its warnings come from both halves: it must not be taken with opioid painkillers, it can raise blood pressure, and it can rarely cause seizures.",
    sideEffects: "The most common side effects are: nausea and constipation, headache and dry mouth, insomnia, constipation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Seizures (bupropion) and Blood pressure and heart rate rise. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you: there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure and heart rate (baseline and regularly); weight trajectory (monthly initially); mood review (early weeks). Keep every appointment: these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take, including over-the-counter and herbal products. Common interacting agents include: Opioid analgesics, MAOIs, Other bupropion products, CYP2D6 substrates. Avoid alcohol unless your doctor says it is safe.",
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
      "Imported prescriptions continued rarely.",
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
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Weight & Addiction Combinations",
    members: [
      {
        name: "Naltrexone-Bupropion",
        slug: "naltrexone-bupropion",
        relationship: "This guide",
        distinguishing: "The addiction-medicine approach to obesity",
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
        name: "Naltrexone",
        slug: "naltrexone",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The pure antagonist: alcohol relapse and opioid blockade",
      },
      {
        name: "Varenicline",
        slug: "varenicline",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The most effective smoking-cessation medicine",
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
    study: "30 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Naltrexone-Bupropion primarily act on?",
      options: [
        "Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Naltrexone-Bupropion acts primarily at Mu-opioid blockade (naltrexone) + dopamine-norepinephrine reuptake inhibition (bupropion). Naltrexone blunts the food-reward opioid arc; bupropion (an NDRI) reduces appetite in the hypothalamus and lifts the reward-mood substrate — a hunger-and-reward combination.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Naltrexone-Bupropion?",
      options: ["Nausea and constipation", "Headache and dry mouth", "Insomnia", "Constipation"],
      correctIndex: 0,
      explanation: "Nausea and constipation — The most common adverse effects — naltrexone's GI effects dominate.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Naltrexone-Bupropion for chronic weight management?",
      options: ["32/360 mg per day", "32/360 mg per day (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For chronic weight management: start One tablet (8/90 mg) daily × 1 week, target 32/360 mg per day, maximum 32/360 mg per day. Week 2: 1 bd; week 3+: 2 bd (32/360 mg)",
      afterSectionId: "prescriber-guide",
    },
    {
      id: "sud-ntb-01",
      question: "The pharmacological rationale for combining naltrexone with bupropion in weight management is:",
      options: [
        "Naltrexone blocks the beta-endorphin feedback loop on bupropion-activated hypothalamic POMC neurons, while bupropion's DA/NE reuptake inhibition curbs appetite and craving",
        "Naltrexone blocks intestinal mu receptors, cutting fat absorption from the gut",
        "Bupropion inhibits pancreatic lipase while naltrexone raises GLP-1 secretion",
        "Both drugs antagonise nicotinic taste receptors, blunting the reward of sweet foods"
      ],
      correctIndex: 0,
      explanation: "Katzung calls naltrexone plus bupropion a synergistic weight-loss strategy: bupropion (NDRI) supplies noradrenergic-dopaminergic appetite suppression, and naltrexone's mu-blockade removes the beta-endorphin brake on the activated POMC pathway (KYP anchor; Katzung ch.31 notes the pair for weight loss). Blocking fat absorption is orlistat's mechanism, lipase inhibition plus GLP-1 agonism misassembles orlistat and liraglutide, and nicotinic taste blockade belongs to no approved anti-obesity drug.",
      afterSectionId: "mechanism",
    },
    {
      id: "sud-ntb-02",
      question: "A 39-year-old woman with BMI 33, diet-controlled type 2 diabetes, controlled blood pressure and no seizure history asks about the 'combination slimming tablet'. The approved role of naltrexone-bupropion (Contrave-type) is:",
      options: [
        "A short 4-week appetite suppressant for event-driven weight loss",
        "An FDA-approved weight-loss medication used alongside diet and exercise for chronic weight management",
        "First-line monotherapy that can induce diabetes remission without any lifestyle change",
        "A drug approved in India only after bariatric surgery has failed"
      ],
      correctIndex: 1,
      explanation: "Katzung lists naltrexone plus extended-release bupropion among the approved weight-loss medications (with orlistat, phentermine/topiramate, lorcaserin and high-dose liraglutide), always as an adjunct to diet and exercise (ch.41). It is not a diabetes-remission monotherapy, there is no post-bariatric-failure-only approval in India, and chronic management - not a 4-week crash - is the design.",
      afterSectionId: "quick-facts",
    },
    {
      id: "sud-ntb-03",
      question: "A 45-year-old man with BMI 34 has untreated blood pressure of 158/100 mmHg and asks to start naltrexone-bupropion for weight loss. The correct decision is:",
      options: [
        "Start normally, since the pressor effect belongs to the naltrexone component, not bupropion",
        "Start it with an added thiazide and review the combination after 6 months",
        "Do not start it - uncontrolled hypertension is a contraindication because the bupropion component raises blood pressure and heart rate; treat the BP first",
        "Start at double dose, because obesity-related hypertension blunts the drug's effect"
      ],
      correctIndex: 2,
      explanation: "Bupropion raises blood pressure and heart rate, so uncontrolled hypertension is a hard contraindication for the combination (KYP anchor; the mandated exam vignette) - control the BP before considering it. Doubling a contraindicated drug compounds the hazard, the pressor effect is the bupropion component rather than naltrexone, and adding a thiazide does not convert a contraindication into a permission.",
      afterSectionId: "quick-facts",
    },
    {
      id: "sud-ntb-04",
      question: "A patient on phenelzine for atypical depression asks for naltrexone-bupropion to lose weight. The correct answer is:",
      options: [
        "Safe concurrently, since both drugs lower the seizure threshold and this combination is desirable",
        "Safe if the phenelzine dose is halved for the duration of the weight-loss course",
        "Contraindicated only when the patient also drinks alcohol at the same time",
        "Contraindicated - MAOIs must be stopped with a 14-day washout before any bupropion-containing product, because of hypertensive-crisis and seizure risk"
      ],
      correctIndex: 3,
      explanation: "Bupropion-containing products are contraindicated with MAOIs and require the standard 14-day washout (KYP anchor; the same MAOI rule that governs all antidepressant switching). Shared seizure-threshold lowering is a danger signal rather than a benefit, halving an MAOI dose does not remove a categorical interaction, and alcohol is a separate concern - the MAOI gate applies regardless.",
      afterSectionId: "timeline",
    },
    {
      id: "sud-ntb-05",
      question: "A woman on naltrexone-bupropion for weight loss needs an emergency dental extraction under opioid analgesia. The counselling point is:",
      options: [
        "The naltrexone component blocks the analgesic effect of usual opioid doses, so the product must be stopped well beforehand or non-opioid and regional analgesia planned",
        "Opioids work normally but will cause severe hypertension in combination with bupropion",
        "The bupropion component doubles opioid potency, so the opioid dose should be halved",
        "No interaction exists - the combination only interacts with weight, nothing else"
      ],
      correctIndex: 0,
      explanation: "The naltrexone component of the combination blocks therapeutic opioid analgesia exactly as standalone naltrexone does (Katzung ch.31; KYP anchor), so perioperative planning must account for it - the same trap as nal-05 applied to a fixed-dose combination. Opioids do not become pressor agents under bupropion, potentiation is pharmacologically backwards, and the opioid blockade is a real, examinable interaction.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "sud-ntb-06",
      question: "The most common adverse effect of naltrexone-bupropion combination therapy is:",
      options: [
        "Hyperprolactinaemia with galactorrhoea and amenorrhoea",
        "Nausea - the leading complaint, contributed to by both components",
        "Agranulocytosis - requiring weekly absolute-neutrophil counts",
        "Retinal pigmentary deposits - requiring annual fundoscopy"
      ],
      correctIndex: 1,
      explanation: "Nausea is the leading complaint with the combination, contributed to by both components (KYP anchor), with insomnia, dry mouth, constipation and a modest BP/HR rise behind it. Weekly neutrophil monitoring is clozapine's burden, retinal pigmentary deposits are thioridazine's signature toxicity, and hyperprolactinaemia with galactorrhoea belongs to risperidone and amisulpride - three monitoring rules that map onto the wrong drugs.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "sud-ntb-07",
      question: "Which of these patients is an APPROPRIATE candidate for naltrexone-bupropion?",
      options: [
        "A patient with bulimia nervosa in active binge-purge cycles",
        "A patient on methadone maintenance for opioid-use disorder",
        "A patient with BMI 31, diet-controlled diabetes, BP 128/80 on amlodipine, no seizure history and no opioid therapy",
        "A patient with a past seizure who stopped lamotrigine one month ago"
      ],
      correctIndex: 2,
      explanation: "This candidate clears every gate: controlled BP, no seizure history, no eating disorder, no opioid exposure (KYP anchor contraindication set). A recent seizure with an anticonvulsant just stopped is a bupropion contraindication, bulimia nervosa and other eating disorders are explicit contraindications (bupropion's seizure risk in a purging patient), and methadone maintenance guarantees both blocked analgesia and precipitated withdrawal from the naltrexone component.",
      afterSectionId: "top",
    },
    {
      id: "sud-ntb-08",
      question: "Why is bupropion the preferred pharmacological partner of naltrexone in this weight-loss combination (rather than an SSRI)?",
      options: [
        "Bupropion is a potent 5-HT2C antagonist that directly dissolves visceral fat",
        "Bupropion raises GLP-1 secretion from intestinal L-cells",
        "Bupropion irreversibly inhibits gastric and pancreatic lipase",
        "Bupropion's DA/NE reuptake inhibition drives appetite suppression and craving reduction while sparing the serotonergic sexual and weight-gain baggage"
      ],
      correctIndex: 3,
      explanation: "Bupropion is the established NDRI with virtually no direct serotonergic action - dopaminergic/noradrenergic appetite and craving control without SSRI-style weight gain or sexual dysfunction, which is what naltrexone's reward-blockade then complements (Katzung ch.30; KYP anchor). 5-HT2C agonism-selectivity was lorcaserin's mechanism, GLP-1 raising belongs to liraglutide's class, and lipase inhibition is orlistat - the distractor set is the rest of the approved weight-loss arsenal wearing bupropion's name.",
      afterSectionId: "mechanism",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Naltrexone-Bupropion in two sentences.",
      answer: "Naltrexone blunts the food-reward opioid arc; bupropion (an NDRI) reduces appetite in the hypothalamus and lifts the reward-mood substrate: a hunger-and-reward combination. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Naltrexone-Bupropion.",
      answer: "Weight management (chronic weight management with diet + exercise). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Naltrexone-Bupropion and how you would manage it.",
      answer: "Seizures (bupropion): Bupropion dose-related threshold lowering; the combination carries bupropion's warning set. Management: Avoid in seizure history/eating disorders; 450 mg ceiling discipline.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Naltrexone-Bupropion require?",
      answer: "Blood pressure and heart rate (Baseline and regularly); Weight trajectory (Monthly initially); Mood review (Early weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Naltrexone-Bupropion that separates safe prescribers from unsafe ones.",
      answer: "The logic of the pair: bupropion drives appetite down (NDRI in the hypothalamus) while naltrexone blunts the food-reward arc; hunger AND reward addressed.",
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
      checkpoint: "You now know what Naltrexone-Bupropion is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Naltrexone-Bupropion works, from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Naltrexone-Bupropion safely: indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Naltrexone-Bupropion.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Naltrexone-Bupropion with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Naltrexone-Bupropion.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Appetite effect within weeks; weight trajectory over months.",
    ],
    ifItWorks: [
      "Continue Naltrexone-Bupropion at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Naltrexone-Bupropion (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Naltrexone-Bupropion follow directly from its receptor and organ effects: predict them from the mechanism.",
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
        indication: "Chronic weight management",
        starting: "One tablet (8/90 mg) daily × 1 week",
        titration: "Week 2: 1 bd; week 3+: 2 bd (32/360 mg)",
        target: "32/360 mg per day",
        max: "32/360 mg per day",
      },
    ],
    dosageForms: [
      "Extended-release tablets: naltrexone 8 mg / bupropion 90 mg",
    ],
    dosingTips: [
      "Titration week is non-negotiable (nausea).",
      "BP at every review.",
      "Stop at 12 weeks if < 5% weight lost (value question).",
      "Review the opioid-alert card.",
    ],
    overdose: [
      "Overdose with Naltrexone-Bupropion is managed supportively: no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Naltrexone-Bupropion is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Bupropion ~21 h; naltrexone shorter: combination dosing twice daily..",
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
    potentialAdvantages: ["Hunger + reward dual mechanism.", "Mild mood benefit from bupropion.", "No abuse potential."],
    potentialDisadvantages: ["Modest weight loss.", "BP and seizure warnings.", "Opioid analgesia blocked.", "GI adverse effects common."],
    primaryTargetSymptoms: ["Appetite and food reward", "Chronic weight management"],
    pearls: [
      "The logic of the pair: bupropion drives appetite down (NDRI in the hypothalamus) while naltrexone blunts the food-reward arc; hunger AND reward addressed.",
      "The titration week is a tolerability necessity: full-dose nausea is the dropout reason.",
      "BP paradox: a weight drug that raises blood pressure. Monitor and avoid in uncontrolled hypertension.",
      "Bupropion's full warning set travels with the combination: seizures, eating disorders, MAOI rules.",
      "Opioid rules: no opioid analgesia while aboard (naltrexone blocks it); post-course lost tolerance applies.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017); facts are paraphrased, not reproduced.",
  ],
};
