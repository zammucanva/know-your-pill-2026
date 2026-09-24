import type { Drug } from "../types";

/**
 * Amphetamine (d,l) — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), amphetamine (d,l) monograph (book p. 8)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const amphetamine: Drug = {
  /* ---- Identity ---- */
  slug: "amphetamine",
  genericName: "Amphetamine (d,l)",
  brandNames: ["Adderall", "Adderall XR", "Mydayis"],
  drugClass: "stimulant",
  drugClassLabel: "Stimulant",
  drugClassFullName: "CNS Stimulant (Dopamine-Norepinephrine Releasing Agent)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Stimulants", "Amphetamine (d,l)"],
  /* ---- Hero / summary ---- */
  tagline: "The racemic mixed amphetamine salts — Adderall chemistry.",
  summary: "Amphetamine (d,l) here is the mixed amphetamine salts combination (3:1 d:l): the d-isomer's central potency plus the l-isomer's noradrenergic wakefulness, in IR and XR forms — the classic releasing-agent stimulant for ADHD and narcolepsy.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Amphetamine (d,l) — from its molecular target (DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix) to clinical effect.",
    "List the FDA-approved and off-label uses of Amphetamine (d,l).",
    "Predict the common and serious side effects of Amphetamine (d,l) from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Amphetamine (d,l).",
    "Compare Amphetamine (d,l) with other stimulants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Mixed amphetamine salts (75% d, 25% l): the d-isomer drives central dopaminergic ADHD effect; the l-isomer adds noradrenergic wakefulness — combined releasing-agent pharmacology.",
    molecularTarget: "DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix",
    effect: "Catecholamine and wake-system enhancement with the agent's characteristic profile.",
    steps: [
      "Mixed amphetamine salts (75% d, 25% l): the d-isomer drives central dopaminergic ADHD effect; the l-isomer adds noradrenergic wakefulness — combined releasing-agent pharmacology.",
      "Prefrontal catecholamine enhancement sharpens attention and impulse control.",
      "The agent's formulation and half-life determine practical coverage.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 9-14 hours. — see mechanism and prescriber sections.",
    halfLife: "9-14 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Amphetamine (d,l)",
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
    "DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix",
  ],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "ADHD — ages 3 and above (USA label)",
      status: "fda-approved",
      description: "IR and XR forms.",
    },
    {
      name: "Narcolepsy",
      status: "fda-approved",
      description: "Classic indication.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Amphetamine (d,l) must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      description: "Class effect.",
      management: "Breakfast plan.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "moderate",
      description: "Class effect.",
      management: "Morning dosing.",
    },
    {
      name: "Tachycardia and dry mouth",
      frequency: "common",
      severity: "moderate",
      description: "l-isomer noradrenergic contribution.",
      management: "Monitor HR/BP.",
    },
    {
      name: "Emotional lability at wear-off",
      frequency: "common",
      severity: "moderate",
      description: "The mixed-salt rebound pattern.",
      management: "XR smoothing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Cardiovascular events",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Screening.",
    },
    {
      name: "Psychosis/mania",
      frequency: "rare",
      severity: "severe",
      description: "Amphetamine-class risk.",
      management: "Stop.",
    },
    {
      name: "Growth suppression",
      frequency: "uncommon",
      severity: "moderate",
      description: "Class risk.",
      management: "6-monthly height.",
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
  patientExplanation: "Mixed amphetamine salts combine the two mirror-image forms of the classic ADHD stimulant: one mainly sharpens attention, the other mainly promotes wakefulness. It is a controlled medicine with the standard safeguards.",
  patientEducationPoints: [
    "Take it in the morning — later doses disrupt sleep.",
    "Appetite can fall: eat breakfast before the dose, and track weight.",
    "Tell your doctor about any chest pain, fainting, or palpitations.",
    "This is a controlled medicine — store it safely and never share it.",
    "Benefit from Amphetamine (d,l) builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The 3:1 story: d-amphetamine (focus) + l-amphetamine (wakefulness, more peripheral) — the mixture's identity.",
    "XR = two-bead release; Mydayis = triple-bead (longer still) — release architecture as product line.",
    "Amphetamine psychosis (1930s observation) founded the dopamine hypothesis of schizophrenia — history in a salt mixture.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Amphetamine (d,l): Mixed amphetamine salts (75% d, 25% l): the d-isomer drives central dopaminergic ADHD effect; the l-isomer adds noradrenergic wakefulness — combined releasing-agent pharmacology.",
        "Uses of Amphetamine (d,l): ADHD — ages 3 and above (USA label); Narcolepsy",
        "Mixed amphetamine SALTS 3:1 d:l — Adderall chemistry.",
        "Releasing agent: DAT/NET substrate + VMAT2 release — stronger than methylphenidate.",
      ],
      practical: [
        "Prescribe Amphetamine (d,l) for adhd — ages 3 and above (usa label) with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline, then every visit); Height, weight, appetite (Baseline, then every 6 months (children)); Sleep review (Every visit)",
      ],
      longAnswer: [
        "Amphetamine (d,l): mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mixed amphetamine SALTS 3:1 d:l — Adderall chemistry.",
        "Releasing agent: DAT/NET substrate + VMAT2 release — stronger than methylphenidate.",
      ],
    },
    neetPg: {
      highYield: [
        "Mixed amphetamine SALTS 3:1 d:l — Adderall chemistry.",
        "Releasing agent: DAT/NET substrate + VMAT2 release — stronger than methylphenidate.",
        "IR + XR (two-bead) + triple-bead formulations.",
        "ADHD ≥3 and narcolepsy; full stimulant black box.",
        "Mechanism: catecholamine (dopamine/norepinephrine) enhancement in prefrontal circuits.",
      ],
      pyqConcepts: [
        "Mechanism/target of Amphetamine (d,l)",
        "Key adverse effect: Cardiovascular events",
        "Dosing and titration of Amphetamine (d,l)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Amphetamine (d,l) develops cardiovascular events — next best step?",
        "When to choose Amphetamine (d,l) over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix",
        "Most common side effects: Appetite suppression, Insomnia, Tachycardia and dry mouth",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The 3:1 story: d-amphetamine (focus) + l-amphetamine (wakefulness, more peripheral) — the mixture's identity.",
        "XR = two-bead release; Mydayis = triple-bead (longer still) — release architecture as product line.",
        "Amphetamine psychosis (1930s observation) founded the dopamine hypothesis of schizophrenia — history in a salt mixture.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mixed amphetamine SALTS 3:1 d:l — Adderall chemistry.",
    "Releasing agent: DAT/NET substrate + VMAT2 release — stronger than methylphenidate.",
    "IR + XR (two-bead) + triple-bead formulations.",
    "ADHD ≥3 and narcolepsy; full stimulant black box.",
    "Mechanism: catecholamine (dopamine/norepinephrine) enhancement in prefrontal circuits.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — adhd — ages 3 and above (usa label)",
      presentation: "A patient presenting with adhd — ages 3 and above (usa label), started on Amphetamine (d,l).",
      history: "A adult patient presents with a adhd — ages 3 and above (usa label) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with adhd — ages 3 and above (usa label); physical examination and baseline investigations are unremarkable.",
      diagnosis: "ADHD — ages 3 and above (USA label). Differentials are considered and excluded clinically.",
      rationale: "Amphetamine (d,l) is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Stimulant) with strong evidence in this condition.",
      management: "Started at 5 mg once or twice daily, titrated to 10-30 mg/day divided with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Amphetamine (d,l) takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Stimulant comparison — choosing within the class",
      primaryDrug: "Amphetamine (d,l)",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix",
          comparisons: [
            {
              drug: "Lisdexamfetamine",
              value: "See full guide",
            },
            {
              drug: "Methylphenidate (d,l)",
              value: "See full guide",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
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
          primaryValue: "9-14 hours.",
          comparisons: [
            {
              drug: "Lisdexamfetamine",
              value: "—",
            },
            {
              drug: "Methylphenidate (d,l)",
              value: "—",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
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
              drug: "Lisdexamfetamine",
              value: "Weight neutral to reducing — appetite effects common.",
            },
            {
              drug: "Methylphenidate (d,l)",
              value: "—",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
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
              drug: "Lisdexamfetamine",
              value: "Not sedating.",
            },
            {
              drug: "Methylphenidate (d,l)",
              value: "Not sedating — the opposite; rebound fatigue occurs at wear-off.",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
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
          primaryValue: "The Adderall mixture — d for focus, l for wake",
          comparisons: [
            {
              drug: "Lisdexamfetamine",
              value: "The misuse-resistant long-acting prodrug stimulant",
            },
            {
              drug: "Methylphenidate (d,l)",
              value: "The default stimulant — 60 years of ADHD first-line",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "The pure d-isomer — stronger central, softer peripheral",
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
      description: "Amphetamine (d,l) reaches peak plasma concentration and begins acting at its molecular target (DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (appetite suppression, insomnia, tachycardia and dry mouth). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (IR 20-30 min; XR ~1 h, 10-12 h cover.)",
      title: "Therapeutic effect builds",
      description: "IR 20-30 min; XR ~1 h, 10-12 h cover. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Amphetamine (d,l) is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Amphetamine (d,l) take to work?",
      answer: "IR 20-30 min; XR ~1 h, 10-12 h cover.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Amphetamine (d,l)?",
      answer: "The most frequently reported effects are: Appetite suppression, Insomnia, Tachycardia and dry mouth, Emotional lability at wear-off. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Amphetamine (d,l) suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Amphetamine (d,l) habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Amphetamine (d,l) exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Amphetamine (d,l) during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Amphetamine (d,l) may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), amphetamine (d,l) monograph, p. 8",
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
        source: "FDA Prescribing Information for Adderall (Amphetamine (d,l))",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for amphetamine (d,l) — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Amphetamine (d,l)",
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
      name: "Lisdexamfetamine",
      slug: "lisdexamfetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
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
  ],
  relatedConditions: [
    {
      name: "ADHD — ages 3 and above (USA label)",
      relationship: "primary",
    },
    {
      name: "Narcolepsy",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Amphetamine (d,l)",
      type: "drug",
      href: "/drugs/amphetamine",
      note: "The drug you're reading about",
    },
    {
      label: "Stimulant",
      type: "class",
      href: "#mechanism",
      note: "CNS Stimulant (Dopamine-Norepinephrine Releasing Agent)",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "ADHD — ages 3 and above (USA label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Narcolepsy",
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
      label: "Patient Guide — Amphetamine (d,l)",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The racemic mixed amphetamine salts — Adderall chemistry.",
    summary: "Amphetamine (d,l) is a prescription medicine used to treat adhd — ages 3 and above (usa label). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Mixed amphetamine salts combine the two mirror-image forms of the classic ADHD stimulant: one mainly sharpens attention, the other mainly promotes wakefulness. It is a controlled medicine with the standard safeguards.",
    sideEffects: "The most common side effects are: appetite suppression, insomnia, tachycardia and dry mouth, emotional lability at wear-off. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Cardiovascular events and Psychosis/mania. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline, then every visit); height, weight, appetite (baseline, then every 6 months (children)); sleep review (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, OTC decongestants and sympathomimetics. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Not marketed in India",
        manufacturer: "—",
        strengths: "—",
      },
    ],
    typicalDoses: "—",
    prescribingScenarios: [
      "US-origin prescriptions continued rarely.",
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
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Stimulants",
    members: [
      {
        name: "Amphetamine (d,l)",
        slug: "amphetamine",
        relationship: "This guide",
        distinguishing: "The Adderall mixture — d for focus, l for wake",
      },
      {
        name: "Lisdexamfetamine",
        slug: "lisdexamfetamine",
        relationship: "Same class (Stimulant)",
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
        name: "Dexmethylphenidate",
        slug: "dexmethylphenidate",
        relationship: "Same class (Stimulant)",
        distinguishing: "The active isomer — methylphenidate distilled",
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
      question: "Which molecular target does Amphetamine (d,l) primarily act on?",
      options: [
        "DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Amphetamine (d,l) acts primarily at DAT/NET substrate (release) + VMAT2; 3:1 d:l isomer mix. Mixed amphetamine salts (75% d, 25% l): the d-isomer drives central dopaminergic ADHD effect; the l-isomer adds noradrenergic wakefulness — combined releasing-agent pharmacology.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Amphetamine (d,l)?",
      options: ["Appetite suppression", "Insomnia", "Tachycardia and dry mouth", "Emotional lability at wear-off"],
      correctIndex: 0,
      explanation: "Appetite suppression — Class effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Amphetamine (d,l) for adhd (ir)?",
      options: ["10-30 mg/day divided", "40 mg/day", "10-30 mg/day divided (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For adhd (ir): start 5 mg once or twice daily, target 10-30 mg/day divided, maximum 40 mg/day. Increase by 5 mg weekly",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Amphetamine (d,l) in two sentences.",
      answer: "Mixed amphetamine salts (75% d, 25% l): the d-isomer drives central dopaminergic ADHD effect; the l-isomer adds noradrenergic wakefulness — combined releasing-agent pharmacology. Net effect: Catecholamine and wake-system enhancement with the agent's characteristic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Amphetamine (d,l).",
      answer: "ADHD — ages 3 and above (USA label), Narcolepsy. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Amphetamine (d,l) and how you would manage it.",
      answer: "Cardiovascular events: Class risk. Management: Screening.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Amphetamine (d,l) require?",
      answer: "Heart rate and blood pressure (Baseline, then every visit); Height, weight, appetite (Baseline, then every 6 months (children)); Sleep review (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Amphetamine (d,l) that separates safe prescribers from unsafe ones.",
      answer: "The 3:1 story: d-amphetamine (focus) + l-amphetamine (wakefulness, more peripheral) — the mixture's identity.",
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
      checkpoint: "You now know what Amphetamine (d,l) is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Amphetamine (d,l) works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Amphetamine (d,l) safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Amphetamine (d,l).",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Amphetamine (d,l) with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Amphetamine (d,l).",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["IR 20-30 min; XR ~1 h, 10-12 h cover."],
    ifItWorks: [
      "Continue Amphetamine (d,l) at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Amphetamine (d,l) (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Amphetamine (d,l) follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "ADHD (IR)",
        starting: "5 mg once or twice daily",
        titration: "Increase by 5 mg weekly",
        target: "10-30 mg/day divided",
        max: "40 mg/day",
      },
      {
        indication: "ADHD (XR)",
        starting: "10 mg morning",
        titration: "Increase by 10 mg weekly",
        target: "20-30 mg/day",
        max: "30-40 mg/day",
      },
    ],
    dosageForms: ["IR tablets 5-30 mg", "XR capsules 5-30 mg", "Triple-bead 12.5-25 mg (Mydayis)"],
    dosingTips: [
      "XR for school-day; IR for flexible short cover.",
    ],
    overdose: [
      "Overdose with Amphetamine (d,l) is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Amphetamine (d,l) is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 9-14 hours..", "Metabolism: Hepatic.."],
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
      "Strong, well-characterised stimulant efficacy.",
      "Multiple duration architectures.",
    ],
    potentialDisadvantages: [
      "Full warning set + misuse record.",
      "Availability limited outside North America.",
    ],
    primaryTargetSymptoms: ["Inattention/hyperactivity", "Narcolepsy"],
    pearls: [
      "The 3:1 story: d-amphetamine (focus) + l-amphetamine (wakefulness, more peripheral) — the mixture's identity.",
      "XR = two-bead release; Mydayis = triple-bead (longer still) — release architecture as product line.",
      "Amphetamine psychosis (1930s observation) founded the dopamine hypothesis of schizophrenia — history in a salt mixture.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
