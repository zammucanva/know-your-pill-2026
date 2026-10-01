import type { Drug } from "../types";

/**
 * Disulfiram — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), disulfiram monograph (book p. 36)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const disulfiram: Drug = {
  /* ---- Identity ---- */
  slug: "disulfiram",
  genericName: "Disulfiram",
  brandNames: ["Antabuse"],
  drugClass: "substance-use-treatment",
  drugClassLabel: "SUD Treatment",
  drugClassFullName: "Alcohol Dependence Treatment Agent",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Substance Use Treatments", "Alcohol Dependence Treatments", "Disulfiram"],
  /* ---- Hero / summary ---- */
  tagline: "The deterrence drug — drink and become violently ill: classical aversion pharmacology.",
  summary: "Disulfiram blocks aldehyde dehydrogenase (ALDH): any alcohol consumed accumulates as acetaldehyde, producing flushing, throbbing headache, nausea, vomiting, tachycardia, and hypotension within 10-30 minutes — the 'antabuse reaction'. Its value is psychological deterrence in motivated, supervised patients; its dangers are the reaction itself, psychosis at high dose, and hepatitis.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Disulfiram — from its molecular target (Aldehyde dehydrogenase (ALDH — irreversible inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Disulfiram.",
    "Predict the common and serious side effects of Disulfiram from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Disulfiram.",
    "Compare Disulfiram with other sud treatments and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Disulfiram irreversibly inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation whenever alcohol is consumed — a deterrent reaction rather than a craving treatment.",
    molecularTarget: "Aldehyde dehydrogenase (ALDH — irreversible inhibition)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Disulfiram irreversibly inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation whenever alcohol is consumed — a deterrent reaction rather than a craving treatment.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 60-120 hours (effect persists days after stopping — the ALDH inhibition outlasts the drug). — see mechanism and prescriber sections.",
    halfLife: "About 60-120 hours (effect persists days after stopping — the ALDH inhibition outlasts the drug).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Disulfiram",
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
  neurotransmitters: ["Glutamate", "Dopamine (DA)"],
  receptors: [
    "Aldehyde dehydrogenase (ALDH — irreversible inhibition)",
  ],
  brainRegionIds: ["nucleus-accumbens", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alcohol dependence — deterrence in selected patients",
      status: "fda-approved",
      description: "For patients who are motivated and ideally supervised (e.g., a family member dispenses); NOT for the ambivalent drinker.",
    },
    {
      name: "Supervised disulfiram programmes",
      status: "guideline",
      description: "Daily witnessed administration is the best-evidenced model.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Disulfiram must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Alcohol in ANY form (including mouthwash, cough syrup, vinegar-based foods)",
      severity: "absolute",
      rationale: "The deterrence reaction — potentially fatal.",
    },
    {
      name: "Metronidazole",
      severity: "absolute",
      rationale: "Combined ALDH-type reaction (psychotic reactions reported).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Disulfiram-alcohol reaction and hepatotoxicity",
      text: "Never give disulfiram to a patient in a state of alcohol intoxication or without their full understanding of the reaction. Severe reactions (arrhythmia, seizure, death) occur with alcohol. Fulminant hepatitis has occurred — monitor LFTs and educate patients on warning signs.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Metallic aftertaste",
      frequency: "common",
      severity: "mild",
      description: "The signature daily effect.",
      management: "Reassurance.",
    },
    {
      name: "Drowsiness and fatigue",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Night dosing.",
    },
    {
      name: "Headache and acneform eruptions",
      frequency: "uncommon",
      severity: "mild",
      description: "Skin effects with long use.",
      management: "Reassurance.",
    },
    {
      name: "Impotence (uncommon)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Reported with long use.",
      management: "Dose review; discuss openly.",
    },
  ],
  seriousSideEffects: [
    {
      name: "The disulfiram-alcohol reaction",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Flushing, throbbing headache, nausea/vomiting, tachycardia, hypotension, syncope — 10-30 min after any alcohol; severe reactions include arrhythmia, seizures, and death.",
      management: "Supportive care, IV fluids, monitoring; the reaction is the mechanism — prevention via absolute alcohol avoidance.",
    },
    {
      name: "Hepatotoxicity (fulminant hepatitis)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Idiosyncratic, sometimes fatal — the reason for LFT monitoring.",
      management: "Baseline and periodic LFTs; stop if transaminases rise substantially.",
    },
    {
      name: "Psychosis and confusion",
      frequency: "rare",
      severity: "severe",
      description: "At high doses — disulfiram inhibits dopamine beta-hydroxylase; psychotic states reported.",
      management: "Dose reduction; stop if psychosis emerges.",
    },
    {
      name: "Peripheral neuropathy",
      frequency: "rare",
      severity: "severe",
      description: "With long use.",
      management: "Stop; neurological review.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "LFTs",
      frequency: "Baseline, then 6-monthly",
      rationale: "Hepatotoxicity surveillance.",
    },
    {
      parameter: "Alcohol-avoidance education",
      frequency: "At initiation and every review",
      rationale: "The reaction is prevented, not treated.",
    },
    {
      parameter: "Mood and mental state",
      frequency: "Every review",
      rationale: "Psychosis/confusion at high dose.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol in ANY form (including mouthwash, cough syrup, vinegar-based foods)",
      severity: "contraindicated",
      mechanism: "The deterrence reaction — potentially fatal.",
      action: "Absolute avoidance education.",
    },
    {
      drug: "Metronidazole",
      severity: "contraindicated",
      mechanism: "Combined ALDH-type reaction (psychotic reactions reported).",
      action: "Never combine.",
    },
    {
      drug: "Warfarin and phenytoin",
      severity: "major",
      mechanism: "Disulfiram inhibits their metabolism — toxicity.",
      action: "Monitor INR/levels; dose adjust.",
    },
    {
      drug: "Isoniazid",
      severity: "major",
      mechanism: "Behavioural and coordination adverse effects reported.",
      action: "Avoid.",
    },
    {
      drug: "Benzodiazepines",
      severity: "moderate",
      mechanism: "Disulfiram may raise diazepam-type levels.",
      action: "Dose awareness.",
    },
  ],
  pregnancy: {
    legacyCategory: "C (D by some classifications)",
    summary: "Avoid in pregnancy — limited data and the reaction risk; plan alternatives.",
    lactation: "Avoid — excreted in milk; infant reaction risk.",
  },
  renalAdjustment: "Standard caution; some metabolites renally excreted.",
  hepaticAdjustment: "Hepatotoxicity is the organ-specific danger: contraindicated in significant liver disease; monitor LFTs.",
  /* ---- Education ---- */
  patientExplanation: "Disulfiram is a deterrent medicine for alcohol dependence: it blocks the enzyme that clears alcohol's breakdown products, so if you drink while taking it you become severely ill within minutes — flushing, pounding headache, vomiting. The medicine does not treat craving; it makes drinking impossible to ignore, and works best when a family member supervises the daily tablet. Hidden alcohol in mouthwash and cough syrup can also trigger the reaction.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Disulfiram builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The psychology IS the pharmacology: the threat of the reaction, not the reaction, is the treatment — education and dispensing agreements outperform the molecule.",
    "Supervised daily administration (a family member watching the tablet go down) is the best-evidenced model.",
    "The hidden-alcohol minefield: mouthwashes, cough syrups, vinegars, aftershaves — the counselling list that prevents accidental reactions.",
    "The paradox patient: the MOST motivated do best; prescribing it to the ambivalent is therapeutic theatre.",
    "Hepatitis baseline + 6-monthly LFTs; stop confusion or icterus immediately.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Disulfiram: Disulfiram irreversibly inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation whenever alcohol is consumed — a deterrent reaction rather than a craving treatment.",
        "Uses of Disulfiram: Alcohol dependence — deterrence in selected patients; Supervised disulfiram programmes",
        "Mechanism: irreversible ALDH inhibition → acetaldehyde accumulation on drinking (the deterrence reaction).",
        "Reaction: flushing, headache, vomiting, tachycardia, hypotension — 10-30 min after alcohol; can be fatal.",
      ],
      practical: [
        "Prescribe Disulfiram for alcohol dependence — deterrence in selected patients with dose, timing, and duration.",
        "Outline the monitoring plan: LFTs (Baseline, then 6-monthly); Alcohol-avoidance education (At initiation and every review); Mood and mental state (Every review)",
      ],
      longAnswer: [
        "Disulfiram: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: irreversible ALDH inhibition → acetaldehyde accumulation on drinking (the deterrence reaction).",
        "Reaction: flushing, headache, vomiting, tachycardia, hypotension — 10-30 min after alcohol; can be fatal.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: irreversible ALDH inhibition → acetaldehyde accumulation on drinking (the deterrence reaction).",
        "Reaction: flushing, headache, vomiting, tachycardia, hypotension — 10-30 min after alcohol; can be fatal.",
        "For MOTIVATED, ideally SUPERVISED patients — not ambivalent drinkers.",
        "Start ≥ 12 h after last drink; avoid all alcohol sources (mouthwash, cough syrup).",
        "High-dose risks: psychosis (dopamine beta-hydroxylase inhibition), peripheral neuropathy.",
        "Hepatotoxicity — baseline and periodic LFTs.",
      ],
      pyqConcepts: [
        "Mechanism/target of Disulfiram",
        "Key adverse effect: The disulfiram-alcohol reaction",
        "Dosing and titration of Disulfiram",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Disulfiram develops the disulfiram-alcohol reaction — next best step?",
        "When to choose Disulfiram over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Aldehyde dehydrogenase (ALDH — irreversible inhibition)",
        "Most common side effects: Metallic aftertaste, Drowsiness and fatigue, Headache and acneform eruptions",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The psychology IS the pharmacology: the threat of the reaction, not the reaction, is the treatment — education and dispensing agreements outperform the molecule.",
        "Supervised daily administration (a family member watching the tablet go down) is the best-evidenced model.",
        "The hidden-alcohol minefield: mouthwashes, cough syrups, vinegars, aftershaves — the counselling list that prevents accidental reactions.",
        "The paradox patient: the MOST motivated do best; prescribing it to the ambivalent is therapeutic theatre.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: irreversible ALDH inhibition → acetaldehyde accumulation on drinking (the deterrence reaction).",
    "Reaction: flushing, headache, vomiting, tachycardia, hypotension — 10-30 min after alcohol; can be fatal.",
    "For MOTIVATED, ideally SUPERVISED patients — not ambivalent drinkers.",
    "Start ≥ 12 h after last drink; avoid all alcohol sources (mouthwash, cough syrup).",
    "High-dose risks: psychosis (dopamine beta-hydroxylase inhibition), peripheral neuropathy.",
    "Hepatotoxicity — baseline and periodic LFTs.",
    "Metronidazole and alcohol-containing medicines contraindicated alongside.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — alcohol dependence — deterrence in selected patients",
      presentation: "A patient presenting with alcohol dependence — deterrence in selected patients, started on Disulfiram.",
      history: "A adult patient presents with a alcohol dependence — deterrence in selected patients picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with alcohol dependence — deterrence in selected patients; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Alcohol dependence — deterrence in selected patients. Differentials are considered and excluded clinically.",
      rationale: "Disulfiram is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SUD Treatment) with strong evidence in this condition.",
      management: "Started at 250 mg once daily (range 125-500), titrated to 250 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Disulfiram takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SUD Treatment comparison — choosing within the class",
      primaryDrug: "Disulfiram",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Aldehyde dehydrogenase (ALDH — irreversible inhibition)",
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
          primaryValue: "About 60-120 hours (effect persists days after stopping — the ALDH inhibition outlasts the drug).",
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
              drug: "Buprenorphine",
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
              drug: "Buprenorphine",
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
          primaryValue: "The classical aversion deterrent — for the motivated, supervised patient",
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
      description: "Disulfiram reaches peak plasma concentration and begins acting at its molecular target (Aldehyde dehydrogenase (ALDH — irreversible inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (metallic aftertaste, drowsiness and fatigue, headache and acneform eruptions). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Deterrence established within hours of the first dose.)",
      title: "Therapeutic effect builds",
      description: "Deterrence established within hours of the first dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Disulfiram is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Disulfiram take to work?",
      answer: "Deterrence established within hours of the first dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Disulfiram?",
      answer: "The most frequently reported effects are: Metallic aftertaste, Drowsiness and fatigue, Headache and acneform eruptions, Impotence (uncommon). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Disulfiram suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Disulfiram habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Disulfiram exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Disulfiram during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Disulfiram may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), disulfiram monograph, p. 36",
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
        source: "FDA Prescribing Information for Antabuse (Disulfiram)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for disulfiram — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Disulfiram",
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
      name: "Alcohol dependence — deterrence in selected patients",
      relationship: "primary",
    },
    {
      name: "Supervised disulfiram programmes",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Disulfiram",
      type: "drug",
      href: "/drugs/disulfiram",
      note: "The drug you're reading about",
    },
    {
      label: "SUD Treatment",
      type: "class",
      href: "#mechanism",
      note: "Alcohol Dependence Treatment Agent",
    },
    {
      label: "Glutamate",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Aldehyde dehydrogenase (ALDH — irreversible inhibition)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Alcohol dependence — deterrence in selected patients",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Supervised disulfiram programmes",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "The disulfiram-alcohol reaction",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Hepatotoxicity (fulminant hepatitis)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Metallic aftertaste",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Disulfiram",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The deterrence drug — drink and become violently ill: classical aversion pharmacology.",
    summary: "Disulfiram is a prescription medicine used to treat alcohol dependence — deterrence in selected patients. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Disulfiram is a deterrent medicine for alcohol dependence: it blocks the enzyme that clears alcohol's breakdown products, so if you drink while taking it you become severely ill within minutes — flushing, pounding headache, vomiting. The medicine does not treat craving; it makes drinking impossible to ignore, and works best when a family member supervises the daily tablet. Hidden alcohol in mouthwash and cough syrup can also trigger the reaction.",
    sideEffects: "The most common side effects are: metallic aftertaste, drowsiness and fatigue, headache and acneform eruptions, impotence (uncommon). These usually appear early and many settle with time. Serious effects are uncommon but important to know: The disulfiram-alcohol reaction and Hepatotoxicity (fulminant hepatitis). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: lfts (baseline, then 6-monthly); alcohol-avoidance education (at initiation and every review); mood and mental state (every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Alcohol in ANY form (including mouthwash, cough syrup, vinegar-based foods), Metronidazole, Warfarin and phenytoin, Isoniazid. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Disulfiram (generic)",
        manufacturer: "limited availability",
        strengths: "250 mg",
      },
    ],
    typicalDoses: "250 mg daily (125-500 range).",
    prescribingScenarios: [
      "Supervised programmes in de-addiction centres for selected motivated patients.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "LFTs baseline + 6-monthly; supervised administration agreements.",
    patientCounselling: [
      "The written hidden-alcohol list is part of the prescription.",
      "Carry a disulfiram card — emergency doctors need to know.",
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
    familyName: "Alcohol Dependence Treatments",
    members: [
      {
        name: "Disulfiram",
        slug: "disulfiram",
        relationship: "This guide",
        distinguishing: "The classical aversion deterrent — for the motivated, supervised patient",
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
      question: "Which molecular target does Disulfiram primarily act on?",
      options: [
        "Aldehyde dehydrogenase (ALDH — irreversible inhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Disulfiram acts primarily at Aldehyde dehydrogenase (ALDH — irreversible inhibition). Disulfiram irreversibly inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation whenever alcohol is consumed — a deterrent reaction rather than a craving treatment.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Disulfiram?",
      options: ["Metallic aftertaste", "Drowsiness and fatigue", "Headache and acneform eruptions", "Impotence (uncommon)"],
      correctIndex: 0,
      explanation: "Metallic aftertaste — The signature daily effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Disulfiram for alcohol dependence (deterrence)?",
      options: ["250 mg/day", "500 mg/day", "250 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For alcohol dependence (deterrence): start 250 mg once daily (range 125-500), target 250 mg/day, maximum 500 mg/day. Start ≥ 12 h after last alcohol; build deterrence education before the first dose",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Disulfiram in two sentences.",
      answer: "Disulfiram irreversibly inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation whenever alcohol is consumed — a deterrent reaction rather than a craving treatment. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Disulfiram.",
      answer: "Alcohol dependence — deterrence in selected patients, Supervised disulfiram programmes. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Disulfiram and how you would manage it.",
      answer: "The disulfiram-alcohol reaction: Flushing, throbbing headache, nausea/vomiting, tachycardia, hypotension, syncope — 10-30 min after any alcohol; severe reactions include arrhythmia, seizures, and death. Management: Supportive care, IV fluids, monitoring; the reaction is the mechanism — prevention via absolute alcohol avoidance.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Disulfiram require?",
      answer: "LFTs (Baseline, then 6-monthly); Alcohol-avoidance education (At initiation and every review); Mood and mental state (Every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Disulfiram that separates safe prescribers from unsafe ones.",
      answer: "The psychology IS the pharmacology: the threat of the reaction, not the reaction, is the treatment — education and dispensing agreements outperform the molecule.",
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
      checkpoint: "You now know what Disulfiram is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Disulfiram works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Disulfiram safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Disulfiram.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Disulfiram with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Disulfiram.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Deterrence established within hours of the first dose.",
    ],
    ifItWorks: [
      "Continue Disulfiram at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Disulfiram (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Disulfiram follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Alcohol dependence (deterrence)",
        starting: "250 mg once daily (range 125-500)",
        titration: "Start ≥ 12 h after last alcohol; build deterrence education before the first dose",
        target: "250 mg/day",
        max: "500 mg/day",
      },
    ],
    dosageForms: ["Tablets 250, 500 mg"],
    dosingTips: [
      "Educate with a written alcohol-source list (mouthwash, syrups, vinegars).",
      "A supervised dispensing agreement multiplies efficacy.",
      "Wait ≥ 12 h after the last drink before starting.",
      "LFTs at baseline and 6-monthly.",
    ],
    overdose: [
      "Overdose with Disulfiram is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Disulfiram is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 60-120 hours (effect persists days after stopping — the ALDH inhibition outlasts the drug)..",
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
      "Powerful psychological deterrence in the motivated.",
      "No abuse potential.",
      "Decades of experience; cheap.",
    ],
    potentialDisadvantages: [
      "Dangerous reaction if alcohol is consumed.",
      "Hepatotoxicity and high-dose psychosis.",
      "Poor fit for ambivalent patients.",
      "Interaction minefield (metronidazole, warfarin, phenytoin).",
    ],
    primaryTargetSymptoms: ["Alcohol abstinence via deterrence"],
    pearls: [
      "The psychology IS the pharmacology: the threat of the reaction, not the reaction, is the treatment — education and dispensing agreements outperform the molecule.",
      "Supervised daily administration (a family member watching the tablet go down) is the best-evidenced model.",
      "The hidden-alcohol minefield: mouthwashes, cough syrups, vinegars, aftershaves — the counselling list that prevents accidental reactions.",
      "The paradox patient: the MOST motivated do best; prescribing it to the ambivalent is therapeutic theatre.",
      "Hepatitis baseline + 6-monthly LFTs; stop confusion or icterus immediately.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
