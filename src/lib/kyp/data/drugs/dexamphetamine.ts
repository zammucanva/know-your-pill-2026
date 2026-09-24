import type { Drug } from "../types";

/**
 * Dextroamphetamine (d-Amphetamine) — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), dextroamphetamine (d-amphetamine) monograph (book p. 7)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const dexamphetamine: Drug = {
  /* ---- Identity ---- */
  slug: "dexamphetamine",
  genericName: "Dextroamphetamine (d-Amphetamine)",
  brandNames: ["Dexedrine", "Dexedrine Spansule"],
  drugClass: "stimulant",
  drugClassLabel: "Stimulant",
  drugClassFullName: "CNS Stimulant (Dopamine-Norepinephrine Releasing Agent)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Stimulants", "Dextroamphetamine (d-Amphetamine)"],
  /* ---- Hero / summary ---- */
  tagline: "Pure dextroamphetamine — the classic d-isomer stimulant with less peripheral load than the racemate.",
  summary: "Dextroamphetamine is the pure d-isomer of amphetamine: a catecholamine releasing agent (DAT/NET substrate plus VMAT2-mediated release) that is 2-3× more centrally potent than the l-isomer while producing less peripheral noradrenergic effect. Used for ADHD (from age 3 in the USA label) and narcolepsy.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Dextroamphetamine (d-Amphetamine) — from its molecular target (DAT/NET substrate (release) + VMAT2 — d-isomer) to clinical effect.",
    "List the FDA-approved and off-label uses of Dextroamphetamine (d-Amphetamine).",
    "Predict the common and serious side effects of Dextroamphetamine (d-Amphetamine) from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Dextroamphetamine (d-Amphetamine).",
    "Compare Dextroamphetamine (d-Amphetamine) with other stimulants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Dextroamphetamine enters the catecholamine neuron via DAT/NET and triggers dopamine and norepinephrine RELEASE via VMAT2 — a releasing agent, not merely a reuptake blocker.",
    molecularTarget: "DAT/NET substrate (release) + VMAT2 — d-isomer",
    effect: "Catecholamine and wake-system enhancement with the agent's characteristic profile.",
    steps: [
      "Dextroamphetamine enters the catecholamine neuron via DAT/NET and triggers dopamine and norepinephrine RELEASE via VMAT2 — a releasing agent, not merely a reuptake blocker.",
      "Prefrontal catecholamine enhancement sharpens attention and impulse control.",
      "The agent's formulation and half-life determine practical coverage.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 10-12 hours. — see mechanism and prescriber sections.",
    halfLife: "10-12 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Dextroamphetamine (d-Amphetamine)",
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
    "DAT/NET substrate (release) + VMAT2 — d-isomer",
  ],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "ADHD — ages 3 and above (USA label)",
      status: "fda-approved",
      description: "Second-line to methylphenidate in most guidelines.",
    },
    {
      name: "Narcolepsy",
      status: "fda-approved",
      description: "Classic wake-promoting use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Dextroamphetamine (d-Amphetamine) must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      management: "Breakfast first.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "moderate",
      description: "Class effect.",
      management: "Morning dosing.",
    },
    {
      name: "Tachycardia/BP rise (milder than racemate)",
      frequency: "common",
      severity: "moderate",
      description: "The d-isomer advantage.",
      management: "Monitor; dose review.",
    },
    {
      name: "Dry mouth, headache",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Reassurance.",
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
      description: "The original 'amphetamine psychosis'.",
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
  patientExplanation: "Dextroamphetamine is the purified active form of amphetamine — the classical stimulant for ADHD and narcolepsy. Compared with the mixed form it works more on attention and less on heart rate. It is a controlled medicine with the usual safeguards.",
  patientEducationPoints: [
    "Take it in the morning — later doses disrupt sleep.",
    "Appetite can fall: eat breakfast before the dose, and track weight.",
    "Tell your doctor about any chest pain, fainting, or palpitations.",
    "This is a controlled medicine — store it safely and never share it.",
    "Benefit from Dextroamphetamine (d-Amphetamine) builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The isomer lesson: d-amphetamine = more central (ADHD) effect, less peripheral (cardiovascular) effect than the l-isomer.",
    "Releasing agent vs reuptake blocker: amphetamines PUSH catecholamines out (VMAT2) — stronger, longer than methylphenidate's blockade.",
    "Spansule SR: the original long-acting stimulant (1950s bead-release design).",
    "Australia and UK practice retain dexamphetamine as a first-line stimulant — geography again.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Dextroamphetamine (d-Amphetamine): Dextroamphetamine enters the catecholamine neuron via DAT/NET and triggers dopamine and norepinephrine RELEASE via VMAT2 — a releasing agent, not merely a reuptake blocker.",
        "Uses of Dextroamphetamine (d-Amphetamine): ADHD — ages 3 and above (USA label); Narcolepsy",
        "d-isomer of amphetamine — 2-3× central potency of l; LESS peripheral effect.",
        "Mechanism: reuptake blockade + VMAT2-mediated RELEASE (a catecholamine releasing agent).",
      ],
      practical: [
        "Prescribe Dextroamphetamine (d-Amphetamine) for adhd — ages 3 and above (usa label) with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline, then every visit); Height, weight, appetite (Baseline, then every 6 months (children)); Sleep review (Every visit)",
      ],
      longAnswer: [
        "Dextroamphetamine (d-Amphetamine): mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "d-isomer of amphetamine — 2-3× central potency of l; LESS peripheral effect.",
        "Mechanism: reuptake blockade + VMAT2-mediated RELEASE (a catecholamine releasing agent).",
      ],
    },
    neetPg: {
      highYield: [
        "d-isomer of amphetamine — 2-3× central potency of l; LESS peripheral effect.",
        "Mechanism: reuptake blockade + VMAT2-mediated RELEASE (a catecholamine releasing agent).",
        "Uses: ADHD (from age 3, USA) + narcolepsy.",
        "Spansule SR — the original long-acting stimulant.",
        "Full stimulant black box.",
      ],
      pyqConcepts: [
        "Mechanism/target of Dextroamphetamine (d-Amphetamine)",
        "Key adverse effect: Cardiovascular events",
        "Dosing and titration of Dextroamphetamine (d-Amphetamine)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Dextroamphetamine (d-Amphetamine) develops cardiovascular events — next best step?",
        "When to choose Dextroamphetamine (d-Amphetamine) over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: DAT/NET substrate (release) + VMAT2 — d-isomer",
        "Most common side effects: Appetite suppression, Insomnia, Tachycardia/BP rise (milder than racemate)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The isomer lesson: d-amphetamine = more central (ADHD) effect, less peripheral (cardiovascular) effect than the l-isomer.",
        "Releasing agent vs reuptake blocker: amphetamines PUSH catecholamines out (VMAT2) — stronger, longer than methylphenidate's blockade.",
        "Spansule SR: the original long-acting stimulant (1950s bead-release design).",
        "Australia and UK practice retain dexamphetamine as a first-line stimulant — geography again.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "d-isomer of amphetamine — 2-3× central potency of l; LESS peripheral effect.",
    "Mechanism: reuptake blockade + VMAT2-mediated RELEASE (a catecholamine releasing agent).",
    "Uses: ADHD (from age 3, USA) + narcolepsy.",
    "Spansule SR — the original long-acting stimulant.",
    "Full stimulant black box.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — adhd — ages 3 and above (usa label)",
      presentation: "A patient presenting with adhd — ages 3 and above (usa label), started on Dextroamphetamine (d-Amphetamine).",
      history: "A adult patient presents with a adhd — ages 3 and above (usa label) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with adhd — ages 3 and above (usa label); physical examination and baseline investigations are unremarkable.",
      diagnosis: "ADHD — ages 3 and above (USA label). Differentials are considered and excluded clinically.",
      rationale: "Dextroamphetamine (d-Amphetamine) is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Stimulant) with strong evidence in this condition.",
      management: "Started at 2.5 mg twice daily (children), titrated to 5-30 mg/day divided with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Dextroamphetamine (d-Amphetamine) takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Stimulant comparison — choosing within the class",
      primaryDrug: "Dextroamphetamine (d-Amphetamine)",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "DAT/NET substrate (release) + VMAT2 — d-isomer",
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
          primaryValue: "10-12 hours.",
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
              drug: "Lisdexamfetamine",
              value: "Weight neutral to reducing — appetite effects common.",
            },
            {
              drug: "Methylphenidate (d,l)",
              value: "—",
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
              drug: "Lisdexamfetamine",
              value: "Not sedating.",
            },
            {
              drug: "Methylphenidate (d,l)",
              value: "Not sedating — the opposite; rebound fatigue occurs at wear-off.",
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
          primaryValue: "The pure d-isomer — stronger central, softer peripheral",
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
      description: "Dextroamphetamine (d-Amphetamine) reaches peak plasma concentration and begins acting at its molecular target (DAT/NET substrate (release) + VMAT2 — d-isomer). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (appetite suppression, insomnia, tachycardia/bp rise (milder than racemate)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (IR 20-30 min; Spansule ~1 h with 6-8 h cover.)",
      title: "Therapeutic effect builds",
      description: "IR 20-30 min; Spansule ~1 h with 6-8 h cover. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Dextroamphetamine (d-Amphetamine) is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Dextroamphetamine (d-Amphetamine) take to work?",
      answer: "IR 20-30 min; Spansule ~1 h with 6-8 h cover.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Dextroamphetamine (d-Amphetamine)?",
      answer: "The most frequently reported effects are: Appetite suppression, Insomnia, Tachycardia/BP rise (milder than racemate), Dry mouth, headache. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Dextroamphetamine (d-Amphetamine) suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Dextroamphetamine (d-Amphetamine) habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Dextroamphetamine (d-Amphetamine) exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Dextroamphetamine (d-Amphetamine) during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Dextroamphetamine (d-Amphetamine) may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), dextroamphetamine (d-amphetamine) monograph, p. 7",
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
        source: "FDA Prescribing Information for Dexedrine (Dextroamphetamine (d-Amphetamine))",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for dextroamphetamine (d-amphetamine) — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Dextroamphetamine (d-Amphetamine)",
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
      label: "Dextroamphetamine (d-Amphetamine)",
      type: "drug",
      href: "/drugs/dexamphetamine",
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
      label: "DAT/NET substrate (release) + VMAT2 — d-isomer",
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
      label: "Patient Guide — Dextroamphetamine (d-Amphetamine)",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Pure dextroamphetamine — the classic d-isomer stimulant with less peripheral load than the racemate.",
    summary: "Dextroamphetamine (d-Amphetamine) is a prescription medicine used to treat adhd — ages 3 and above (usa label). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Dextroamphetamine is the purified active form of amphetamine — the classical stimulant for ADHD and narcolepsy. Compared with the mixed form it works more on attention and less on heart rate. It is a controlled medicine with the usual safeguards.",
    sideEffects: "The most common side effects are: appetite suppression, insomnia, tachycardia/bp rise (milder than racemate), dry mouth, headache. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Cardiovascular events and Psychosis/mania. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline, then every visit); height, weight, appetite (baseline, then every 6 months (children)); sleep review (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, OTC decongestants and sympathomimetics. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Dexamphetamine (rare in India)",
        manufacturer: "imported",
        strengths: "5 mg",
      },
    ],
    typicalDoses: "5-40 mg/day.",
    prescribingScenarios: ["Rarely available in Indian practice."],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
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
        name: "Dextroamphetamine (d-Amphetamine)",
        slug: "dexamphetamine",
        relationship: "This guide",
        distinguishing: "The pure d-isomer — stronger central, softer peripheral",
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
      question: "Which molecular target does Dextroamphetamine (d-Amphetamine) primarily act on?",
      options: [
        "DAT/NET substrate (release) + VMAT2 — d-isomer",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Dextroamphetamine (d-Amphetamine) acts primarily at DAT/NET substrate (release) + VMAT2 — d-isomer. Dextroamphetamine enters the catecholamine neuron via DAT/NET and triggers dopamine and norepinephrine RELEASE via VMAT2 — a releasing agent, not merely a reuptake blocker.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Dextroamphetamine (d-Amphetamine)?",
      options: [
        "Appetite suppression",
        "Insomnia",
        "Tachycardia/BP rise (milder than racemate)",
        "Dry mouth, headache",
      ],
      correctIndex: 0,
      explanation: "Appetite suppression — Class effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Dextroamphetamine (d-Amphetamine) for adhd (ir)?",
      options: ["5-30 mg/day divided", "40 mg/day", "5-30 mg/day divided (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For adhd (ir): start 2.5 mg twice daily (children), target 5-30 mg/day divided, maximum 40 mg/day. Increase weekly",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Dextroamphetamine (d-Amphetamine) in two sentences.",
      answer: "Dextroamphetamine enters the catecholamine neuron via DAT/NET and triggers dopamine and norepinephrine RELEASE via VMAT2 — a releasing agent, not merely a reuptake blocker. Net effect: Catecholamine and wake-system enhancement with the agent's characteristic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Dextroamphetamine (d-Amphetamine).",
      answer: "ADHD — ages 3 and above (USA label), Narcolepsy. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Dextroamphetamine (d-Amphetamine) and how you would manage it.",
      answer: "Cardiovascular events: Class risk. Management: Screening.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Dextroamphetamine (d-Amphetamine) require?",
      answer: "Heart rate and blood pressure (Baseline, then every visit); Height, weight, appetite (Baseline, then every 6 months (children)); Sleep review (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Dextroamphetamine (d-Amphetamine) that separates safe prescribers from unsafe ones.",
      answer: "The isomer lesson: d-amphetamine = more central (ADHD) effect, less peripheral (cardiovascular) effect than the l-isomer.",
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
      checkpoint: "You now know what Dextroamphetamine (d-Amphetamine) is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Dextroamphetamine (d-Amphetamine) works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Dextroamphetamine (d-Amphetamine) safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Dextroamphetamine (d-Amphetamine).",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Dextroamphetamine (d-Amphetamine) with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Dextroamphetamine (d-Amphetamine).",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "IR 20-30 min; Spansule ~1 h with 6-8 h cover.",
    ],
    ifItWorks: [
      "Continue Dextroamphetamine (d-Amphetamine) at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Dextroamphetamine (d-Amphetamine) (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Dextroamphetamine (d-Amphetamine) follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "2.5 mg twice daily (children)",
        titration: "Increase weekly",
        target: "5-30 mg/day divided",
        max: "40 mg/day",
      },
      {
        indication: "ADHD (Spansule SR)",
        starting: "5-10 mg morning",
        titration: "Increase weekly",
        target: "10-30 mg/day",
        max: "40 mg/day",
      },
      {
        indication: "Narcolepsy",
        starting: "5-10 mg morning",
        titration: "Divided day dosing",
        target: "10-60 mg/day",
        max: "60 mg/day",
      },
    ],
    dosageForms: ["IR tablets 5, 10 mg", "Spansule SR capsules 5-15 mg", "Elixir (some markets)"],
    dosingTips: [
      "d-isomer dosing ≈ half the racemate dose.",
      "Spansule for school-day smoothness.",
    ],
    overdose: [
      "Overdose with Dextroamphetamine (d-Amphetamine) is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Dextroamphetamine (d-Amphetamine) is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 10-12 hours..", "Metabolism: Hepatic.."],
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
      "Strong central effect with less peripheral load.",
      "The youngest ADHD label (3+, USA).",
    ],
    potentialDisadvantages: ["Full amphetamine warning set.", "Misuse record.", "Availability varies sharply by country."],
    primaryTargetSymptoms: ["Inattention/hyperactivity", "Narcolepsy sleepiness"],
    pearls: [
      "The isomer lesson: d-amphetamine = more central (ADHD) effect, less peripheral (cardiovascular) effect than the l-isomer.",
      "Releasing agent vs reuptake blocker: amphetamines PUSH catecholamines out (VMAT2) — stronger, longer than methylphenidate's blockade.",
      "Spansule SR: the original long-acting stimulant (1950s bead-release design).",
      "Australia and UK practice retain dexamphetamine as a first-line stimulant — geography again.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
