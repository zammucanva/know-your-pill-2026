import type { Drug } from "../types";

/**
 * Lisdexamfetamine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), lisdexamfetamine monograph (book p. 64)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const lisdexamfetamine: Drug = {
  /* ---- Identity ---- */
  slug: "lisdexamfetamine",
  genericName: "Lisdexamfetamine",
  brandNames: ["Vyvanse"],
  drugClass: "stimulant",
  drugClassLabel: "Stimulant",
  drugClassFullName: "CNS Stimulant (Prodrug of Dextroamphetamine)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Stimulants", "Lisdexamfetamine"],
  /* ---- Hero / summary ---- */
  tagline: "The prodrug stimulant — amphetamine in a slow-release chemical disguise that resists misuse.",
  summary: "Lisdexamfetamine is a prodrug: dextroamphetamine bonded to lysine, enzymatically cleaved in the blood over hours — converting a fast stimulant into a smooth 12-14 hour agent with markedly reduced misuse potential. Its duration and misuse resistance made it the most-prescribed branded stimulant in the USA, with an approved binge-eating indication alongside ADHD.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Lisdexamfetamine — from its molecular target (Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2) to clinical effect.",
    "List the FDA-approved and off-label uses of Lisdexamfetamine.",
    "Predict the common and serious side effects of Lisdexamfetamine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Lisdexamfetamine.",
    "Compare Lisdexamfetamine with other stimulants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Lisdexamfetamine is a lysine-bound prodrug of dextroamphetamine — red-cell hydrolysis releases the active stimulant gradually over hours.",
    molecularTarget: "Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2",
    effect: "Catecholamine and wake-system enhancement with the agent's characteristic profile.",
    steps: [
      "Lisdexamfetamine is a lysine-bound prodrug of dextroamphetamine — red-cell hydrolysis releases the active stimulant gradually over hours.",
      "Prefrontal catecholamine enhancement sharpens attention and impulse control.",
      "The agent's formulation and half-life determine practical coverage.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Prodrug <1 h; released dextroamphetamine ~10-12 h. — see mechanism and prescriber sections.",
    halfLife: "Prodrug <1 h; released dextroamphetamine ~10-12 h.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Lisdexamfetamine",
        sublabel: "CNS stimulant",
        variant: "process",
      },
      {
        id: "da",
        label: "Dopamine",
        sublabel: "Synaptic levels rise",
        variant: "output",
      },
      {
        id: "ne",
        label: "Norepinephrine",
        sublabel: "Synaptic levels rise",
        variant: "output",
      },
      {
        id: "pfc",
        label: "Prefrontal cortex",
        sublabel: "Attention & impulse control improve",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "da",
        label: "increases",
        type: "stimulate",
      },
      {
        from: "drug",
        to: "ne",
        label: "increases",
        type: "stimulate",
      },
      {
        from: "da",
        to: "pfc",
        label: "sharpens signal",
      },
      {
        from: "ne",
        to: "pfc",
        label: "boosts alertness",
      },
    ],
    caption: "Catecholamine enhancement in the prefrontal cortex — the brain's attention control centre — corrects the signal-to-noise deficit that defines ADHD.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2",
  ],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "ADHD — ages 6 and above",
      status: "fda-approved",
      description: "Once-daily 12-14 h coverage — the longest single-dose stimulant cover.",
    },
    {
      name: "Moderate-to-severe binge eating disorder",
      status: "fda-approved",
      description: "The only approved drug for BED: 50-70 mg reduced binge days in trials.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Lisdexamfetamine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Hypertensive crisis.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Abuse, dependence, and serious cardiovascular events",
      text: "High potential for abuse and dependence (controlled substance). Assess abuse risk and monitor for misuse. Serious cardiovascular events reported — screen cardiac and family sudden-death history before starting.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Appetite suppression",
      frequency: "very-common",
      severity: "moderate",
      description: "Class effect — 12+ h of it.",
      management: "Breakfast before dosing; evening plan.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "moderate",
      description: "Long duration — timing matters.",
      management: "Strict single morning dose.",
    },
    {
      name: "Dry mouth, weight loss",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Dental care counselling.",
    },
    {
      name: "End-of-day wear-off irritability",
      frequency: "common",
      severity: "moderate",
      description: "Even the 12-14 h curve ends.",
      management: "Predictable evening routine.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Cardiovascular events",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Cardiac screening.",
    },
    {
      name: "Psychosis/mania",
      frequency: "rare",
      severity: "severe",
      description: "Amphetamine-class risk.",
      management: "Stop; reassess.",
    },
    {
      name: "Growth suppression",
      frequency: "uncommon",
      severity: "moderate",
      description: "Class risk.",
      management: "6-monthly height.",
    },
    {
      name: "Serotonin syndrome (with serotonergic drugs)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Amphetamine serotonin release + SSRI/MAOI.",
      management: "Avoid MAOIs; counsel.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline, then every visit",
      rationale: "Sympathomimetic cardiovascular effects.",
    },
    {
      parameter: "Height, weight, appetite",
      frequency: "Baseline, then every 6 months (children)",
      rationale: "Growth and appetite surveillance.",
    },
    {
      parameter: "Sleep review",
      frequency: "Every visit",
      rationale: "Late-dose insomnia.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Hypertensive crisis.",
      action: "14-day washout.",
    },
    {
      drug: "OTC decongestants and sympathomimetics",
      severity: "major",
      mechanism: "Additive cardiovascular stimulation.",
      action: "Counsel; check combination products.",
    },
  ],
  pregnancy: {
    summary: "Data in human pregnancy are limited. The decision to continue or stop balances the risk of untreated illness against possible drug exposure — for serious psychiatric illness, relapse prevention usually outweighs fetal risk. Involve obstetrics early and never stop abruptly without a plan.",
    lactation: "Small amounts may pass into breast milk. Decisions are individualised — monitor the infant for sedation and poor feeding, and discuss with your doctor.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Lisdexamfetamine is a long-acting ADHD medicine: the capsule contains a modified form of a stimulant that the body slowly unlocks during the day — smooth 12-hour cover from one morning dose that is much harder to misuse. It is also the only approved medicine for moderate-to-severe binge eating disorder.",
  patientEducationPoints: [
    "Take it in the morning — later doses disrupt sleep.",
    "Appetite can fall: eat breakfast before the dose, and track weight.",
    "Tell your doctor about any chest pain, fainting, or palpitations.",
    "This is a controlled medicine — store it safely and never share it.",
    "Benefit from Lisdexamfetamine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The prodrug trick: red-cell hydrolysis converts a misusable stimulant into a smooth 12-14 h pump — pharmacokinetics as abuse deterrence.",
    "Duration is the differentiation: one morning dose covers school AND homework.",
    "Binge-eating approval: the only drug with that indication.",
    "Sprinkle the capsule on cold yoghurt for children; dissolves in water for tube needs (label method).",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Lisdexamfetamine: Lisdexamfetamine is a lysine-bound prodrug of dextroamphetamine — red-cell hydrolysis releases the active stimulant gradually over hours.",
        "Uses of Lisdexamfetamine: ADHD — ages 6 and above; Moderate-to-severe binge eating disorder",
        "Prodrug: dextroamphetamine + lysine — enzymatic (red-cell) hydrolysis releases active drug over hours.",
        "12-14 hour duration — the longest single-dose stimulant cover.",
      ],
      practical: [
        "Prescribe Lisdexamfetamine for adhd — ages 6 and above with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline, then every visit); Height, weight, appetite (Baseline, then every 6 months (children)); Sleep review (Every visit)",
      ],
      longAnswer: [
        "Lisdexamfetamine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Prodrug: dextroamphetamine + lysine — enzymatic (red-cell) hydrolysis releases active drug over hours.",
        "12-14 hour duration — the longest single-dose stimulant cover.",
      ],
    },
    neetPg: {
      highYield: [
        "Prodrug: dextroamphetamine + lysine — enzymatic (red-cell) hydrolysis releases active drug over hours.",
        "12-14 hour duration — the longest single-dose stimulant cover.",
        "Abuse-deterrent by chemistry: snorting/injecting the prodrug does not accelerate onset.",
        "Approved for ADHD ≥6 AND binge eating disorder (the only drug for BED).",
        "Dose 20-70 mg once morning.",
        "Amphetamine pharmacology: reuptake inhibition + release + VMAT2 — stronger than methylphenidate.",
      ],
      pyqConcepts: [
        "Mechanism/target of Lisdexamfetamine",
        "Key adverse effect: Cardiovascular events",
        "Dosing and titration of Lisdexamfetamine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Lisdexamfetamine develops cardiovascular events — next best step?",
        "When to choose Lisdexamfetamine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2",
        "Most common side effects: Appetite suppression, Insomnia, Dry mouth, weight loss",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The prodrug trick: red-cell hydrolysis converts a misusable stimulant into a smooth 12-14 h pump — pharmacokinetics as abuse deterrence.",
        "Duration is the differentiation: one morning dose covers school AND homework.",
        "Binge-eating approval: the only drug with that indication.",
        "Sprinkle the capsule on cold yoghurt for children; dissolves in water for tube needs (label method).",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Prodrug: dextroamphetamine + lysine — enzymatic (red-cell) hydrolysis releases active drug over hours.",
    "12-14 hour duration — the longest single-dose stimulant cover.",
    "Abuse-deterrent by chemistry: snorting/injecting the prodrug does not accelerate onset.",
    "Approved for ADHD ≥6 AND binge eating disorder (the only drug for BED).",
    "Dose 20-70 mg once morning.",
    "Amphetamine pharmacology: reuptake inhibition + release + VMAT2 — stronger than methylphenidate.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — adhd — ages 6 and above",
      presentation: "A patient presenting with adhd — ages 6 and above, started on Lisdexamfetamine.",
      history: "A adult patient presents with a adhd — ages 6 and above picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with adhd — ages 6 and above; physical examination and baseline investigations are unremarkable.",
      diagnosis: "ADHD — ages 6 and above. Differentials are considered and excluded clinically.",
      rationale: "Lisdexamfetamine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Stimulant) with strong evidence in this condition.",
      management: "Started at 20 mg every morning, titrated to 30-70 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Lisdexamfetamine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Stimulant comparison — choosing within the class",
      primaryDrug: "Lisdexamfetamine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "See full guide",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "See full guide",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "See full guide",
            },
            {
              drug: "Dexmethylphenidate",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Prodrug <1 h; released dextroamphetamine ~10-12 h.",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "—",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "—",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "—",
            },
            {
              drug: "Dexmethylphenidate",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to reducing — appetite effects common.",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "—",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "Weight neutral to reducing — appetite effects common.",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "Weight neutral to reducing — appetite effects common.",
            },
            {
              drug: "Dexmethylphenidate",
              value: "Weight neutral to reducing — appetite effects common.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Not sedating.",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "Not sedating — the opposite; rebound fatigue occurs at wear-off.",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "Not sedating.",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "Not sedating.",
            },
            {
              drug: "Dexmethylphenidate",
              value: "Not sedating.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The misuse-resistant long-acting prodrug stimulant",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "The default stimulant — 60 years of ADHD first-line",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "The pure d-isomer — stronger central, softer peripheral",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "The Adderall mixture — d for focus, l for wake",
            },
            {
              drug: "Dexmethylphenidate",
              value: "The active isomer — methylphenidate distilled",
            },
          ],
        },
      ],
      takeaway: "All stimulants share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Lisdexamfetamine reaches peak plasma concentration and begins acting at its molecular target (Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (appetite suppression, insomnia, dry mouth, weight loss). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (~1.5-2 h to peak effect.)",
      title: "Therapeutic effect builds",
      description: "~1.5-2 h to peak effect. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Lisdexamfetamine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Lisdexamfetamine take to work?",
      answer: "~1.5-2 h to peak effect.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Lisdexamfetamine?",
      answer: "The most frequently reported effects are: Appetite suppression, Insomnia, Dry mouth, weight loss, End-of-day wear-off irritability. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Lisdexamfetamine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Lisdexamfetamine habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Lisdexamfetamine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Lisdexamfetamine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Lisdexamfetamine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE NG87 (ADHD); AAP ADHD Clinical Practice Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), lisdexamfetamine monograph, p. 64",
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
        source: "FDA Prescribing Information for Vyvanse (Lisdexamfetamine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for lisdexamfetamine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Lisdexamfetamine",
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
      name: "Methylphenidate (d,l)",
      slug: "methylphenidate",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Dextroamphetamine (d-Amphetamine)",
      slug: "dexamphetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Amphetamine (d,l)",
      slug: "amphetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Dexmethylphenidate",
      slug: "dexmethylphenidate",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Methylphenidate (d,l)",
      slug: "methylphenidate",
      drugClass: "Stimulant",
      relationship: "Class reference compound",
    },
    {
      name: "Pemoline",
      slug: "pemoline",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
  ],
  relatedConditions: [
    {
      name: "ADHD — ages 6 and above",
      relationship: "primary",
    },
    {
      name: "Moderate-to-severe binge eating disorder",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Lisdexamfetamine",
      type: "drug",
      href: "/drugs/lisdexamfetamine",
      note: "The drug you're reading about",
    },
    {
      label: "Stimulant",
      type: "class",
      href: "#mechanism",
      note: "CNS Stimulant (Prodrug of Dextroamphetamine)",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "ADHD — ages 6 and above",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Moderate-to-severe binge eating disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Cardiovascular events",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Psychosis/mania",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Appetite suppression",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Lisdexamfetamine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The prodrug stimulant — amphetamine in a slow-release chemical disguise that resists misuse.",
    summary: "Lisdexamfetamine is a prescription medicine used to treat adhd — ages 6 and above. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Lisdexamfetamine is a long-acting ADHD medicine: the capsule contains a modified form of a stimulant that the body slowly unlocks during the day — smooth 12-hour cover from one morning dose that is much harder to misuse. It is also the only approved medicine for moderate-to-severe binge eating disorder.",
    sideEffects: "The most common side effects are: appetite suppression, insomnia, dry mouth, weight loss, end-of-day wear-off irritability. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Cardiovascular events and Psychosis/mania. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline, then every visit); height, weight, appetite (baseline, then every 6 months (children)); sleep review (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, OTC decongestants and sympathomimetics. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Vyvanse (imported/limited)",
        manufacturer: "Takeda network",
        strengths: "20-70 mg",
      },
    ],
    typicalDoses: "20-70 mg once morning.",
    prescribingScenarios: ["Full-day adult ADHD cover.", "Binge eating disorder (specialist)."],
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
    familyName: "Stimulants",
    members: [
      {
        name: "Lisdexamfetamine",
        slug: "lisdexamfetamine",
        relationship: "This guide",
        distinguishing: "The misuse-resistant long-acting prodrug stimulant",
      },
      {
        name: "Methylphenidate (d,l)",
        slug: "methylphenidate",
        relationship: "Same class (Stimulant)",
        distinguishing: "The default stimulant — 60 years of ADHD first-line",
      },
      {
        name: "Dextroamphetamine (d-Amphetamine)",
        slug: "dexamphetamine",
        relationship: "Same class (Stimulant)",
        distinguishing: "The pure d-isomer — stronger central, softer peripheral",
      },
      {
        name: "Amphetamine (d,l)",
        slug: "amphetamine",
        relationship: "Same class (Stimulant)",
        distinguishing: "The Adderall mixture — d for focus, l for wake",
      },
      {
        name: "Dexmethylphenidate",
        slug: "dexmethylphenidate",
        relationship: "Same class (Stimulant)",
        distinguishing: "The active isomer — methylphenidate distilled",
      },
      {
        name: "Pemoline",
        slug: "pemoline",
        relationship: "Same class (Stimulant)",
        distinguishing: "The hepatotoxic last-resort — withdrawn from major markets",
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
      question: "Which molecular target does Lisdexamfetamine primarily act on?",
      options: [
        "Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Lisdexamfetamine acts primarily at Prodrug of dextroamphetamine → DAT/NET substrate (release) + VMAT2. Lisdexamfetamine is a lysine-bound prodrug of dextroamphetamine — red-cell hydrolysis releases the active stimulant gradually over hours.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Lisdexamfetamine?",
      options: ["Appetite suppression", "Insomnia", "Dry mouth, weight loss", "End-of-day wear-off irritability"],
      correctIndex: 0,
      explanation: "Appetite suppression — Class effect — 12+ h of it.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Lisdexamfetamine for adhd?",
      options: ["30-70 mg/day", "70 mg/day", "30-70 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For adhd: start 20 mg every morning, target 30-70 mg/day, maximum 70 mg/day. Increase by 10-20 mg weekly",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Lisdexamfetamine in two sentences.",
      answer: "Lisdexamfetamine is a lysine-bound prodrug of dextroamphetamine — red-cell hydrolysis releases the active stimulant gradually over hours. Net effect: Catecholamine and wake-system enhancement with the agent's characteristic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Lisdexamfetamine.",
      answer: "ADHD — ages 6 and above, Moderate-to-severe binge eating disorder. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Lisdexamfetamine and how you would manage it.",
      answer: "Cardiovascular events: Class risk. Management: Cardiac screening.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Lisdexamfetamine require?",
      answer: "Heart rate and blood pressure (Baseline, then every visit); Height, weight, appetite (Baseline, then every 6 months (children)); Sleep review (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Lisdexamfetamine that separates safe prescribers from unsafe ones.",
      answer: "The prodrug trick: red-cell hydrolysis converts a misusable stimulant into a smooth 12-14 h pump — pharmacokinetics as abuse deterrence.",
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
      checkpoint: "You now know what Lisdexamfetamine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Lisdexamfetamine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Lisdexamfetamine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Lisdexamfetamine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Lisdexamfetamine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Lisdexamfetamine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["~1.5-2 h to peak effect."],
    ifItWorks: [
      "Continue Lisdexamfetamine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Lisdexamfetamine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Lisdexamfetamine follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral to reducing — appetite effects common.",
    sedation: "Not sedating.",
    dosing: [
      {
        indication: "ADHD",
        starting: "20 mg every morning",
        titration: "Increase by 10-20 mg weekly",
        target: "30-70 mg/day",
        max: "70 mg/day",
      },
      {
        indication: "Binge eating disorder",
        starting: "30 mg morning",
        titration: "Increase to 50-70 mg",
        target: "50-70 mg/day",
        max: "70 mg/day",
      },
    ],
    dosageForms: ["Capsules 10-70 mg (sprinklable)", "Chewable tablets (some markets)"],
    dosingTips: [
      "Strictly single morning dose.",
      "Sprinkle on cold yoghurt/applesauce for children.",
    ],
    overdose: [
      "Overdose with Lisdexamfetamine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Lisdexamfetamine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Prodrug <1 h; released dextroamphetamine ~10-12 h..",
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
    potentialAdvantages: ["Longest smooth cover from one dose.", "Misuse-resistant chemistry.", "BED indication."],
    potentialDisadvantages: ["Cannot titrate within a day.", "Full stimulant warning profile.", "Cost where generics unavailable."],
    primaryTargetSymptoms: ["ADHD across the full day", "Binge eating disorder"],
    pearls: [
      "The prodrug trick: red-cell hydrolysis converts a misusable stimulant into a smooth 12-14 h pump — pharmacokinetics as abuse deterrence.",
      "Duration is the differentiation: one morning dose covers school AND homework.",
      "Binge-eating approval: the only drug with that indication.",
      "Sprinkle the capsule on cold yoghurt for children; dissolves in water for tube needs (label method).",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
