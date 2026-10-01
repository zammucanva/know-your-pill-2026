import type { Drug } from "../types";

/**
 * Ramelteon — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), ramelteon monograph (book p. 108)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const ramelteon: Drug = {
  /* ---- Identity ---- */
  slug: "ramelteon",
  genericName: "Ramelteon",
  brandNames: ["Rozerem"],
  drugClass: "melatonergic-agonist",
  drugClassLabel: "Melatonin Agonist",
  drugClassFullName: "Melatonin MT1/MT2 Receptor Agonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Melatonin Agonists", "Ramelteon"],
  /* ---- Hero / summary ---- */
  tagline: "The melatonin MT1/MT2 agonist — sleep-onset targeting with zero dependence potential.",
  summary: "Ramelteon is a selective melatonin MT1/MT2 receptor agonist that targets the suprachiasmatic (body clock) system rather than sedating the cortex: it advances sleep onset modestly with no GABA-ergic action, no dependence, no abuse potential (unscheduled in the US), and no respiratory depression. Its niche is sleep-onset insomnia where dependence concerns rule out Z-drugs and benzos — including in substance-use populations.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Ramelteon — from its molecular target (Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus) to clinical effect.",
    "List the FDA-approved and off-label uses of Ramelteon.",
    "Predict the common and serious side effects of Ramelteon from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Ramelteon.",
    "Compare Ramelteon with other melatonin agonists and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Selective melatonin MT1/MT2 agonist acting on the circadian pacemaker — sleep timing, not cortical sedation.",
    molecularTarget: "Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Ramelteon is a selective melatonin MT1/MT2 receptor agonist that targets the suprachiasmatic (body clock) system rather than sedating the cortex: it advances sleep onset modestly with no GABA-ergic action, no dependence, no abuse potential (unscheduled in the US), and no respiratory depression — the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 1–2.6 hours (short plasma; chronobiotic effects outlast). — see mechanism and prescriber sections.",
    halfLife: "1–2.6 hours (short plasma; chronobiotic effects outlast).",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Ramelteon",
        sublabel: "Melatonin receptor agonist",
        variant: "process",
      },
      {
        id: "mt",
        label: "MT1 / MT2 receptors",
        sublabel: "Suprachiasmatic nucleus (body clock)",
        variant: "target",
      },
      {
        id: "clock",
        label: "Circadian rhythm",
        sublabel: "Sleep–wake timing reset",
        variant: "process",
      },
      {
        id: "sleep",
        label: "Sleep onset",
        sublabel: "Promoted without respiratory depression",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "mt",
        label: "activates",
        type: "stimulate",
      },
      {
        from: "mt",
        to: "clock",
        label: "entrains",
      },
      {
        from: "clock",
        to: "sleep",
        label: "times",
      },
    ],
    caption: "Targeting the body clock rather than sedating the cortex — melatonergic agents restore sleep timing without dependence or rebound insomnia.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Insomnia — sleep-onset difficulty (chronic use permitted)",
      status: "fda-approved",
      description: "8 mg nightly; the no-dependence option for continuous treatment.",
    },
    {
      name: "Circadian rhythm disorders (delayed sleep phase)",
      status: "off-label",
      description: "Body-clock targeting makes it a natural DSPS candidate.",
    },
    {
      name: "Insomnia in substance-use populations",
      status: "guideline",
      description: "Zero abuse potential — the hypnotic of choice when addiction history is present.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Ramelteon must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Fluvoxamine",
      severity: "absolute",
      rationale: "Strong 1A2 inhibition raises ramelteon levels several-fold (the label contraindication).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Somnolence and fatigue",
      frequency: "common",
      severity: "mild",
      description: "Usually mild — and partly intended.",
      management: "Dose timing at bedtime.",
    },
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "Transient.",
      management: "Reassurance.",
    },
    {
      name: "Nausea and decreased appetite",
      frequency: "uncommon",
      severity: "mild",
      description: "Mild GI effects.",
      management: "Take with or after food is acceptable.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hepatotoxicity (rare, dose-related)",
      frequency: "rare",
      severity: "severe",
      description: "Transaminase elevations at supratherapeutic doses — the label's cautions.",
      management: "LFT vigilance if symptoms; avoid in significant hepatic impairment.",
    },
    {
      name: "Complex sleep behaviours",
      frequency: "rare",
      severity: "moderate",
      description: "Reported with the class of hypnotics despite the different mechanism.",
      management: "Stop on any event.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Course and effect review",
      frequency: "At 2–4 weeks",
      rationale: "Modest effect sizes — confirm benefit before continuing indefinitely.",
    },
  ],
  interactions: [
    {
      drug: "Fluvoxamine",
      severity: "contraindicated",
      mechanism: "Strong 1A2 inhibition raises ramelteon levels several-fold (the label contraindication).",
      action: "Avoid.",
    },
    {
      drug: "Ketoconazole and other 1A2/3A4 inhibitors",
      severity: "major",
      mechanism: "Raise levels.",
      action: "Caution; dose awareness.",
    },
    {
      drug: "Alcohol",
      severity: "moderate",
      mechanism: "Additive next-day impairment despite different mechanism.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; no established signal. Non-pharmacological insomnia care first in pregnancy.",
    lactation: "Limited data; low-dose use with infant monitoring if needed.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Ramelteon works completely differently from traditional sleeping pills: it mimics the body's own natural sleep hormone (melatonin) to shift your body clock toward sleep. Because it does not act on the brain's calming chemical (GABA), it has no addiction potential and does not disturb breathing — making it the safest choice for longer use, though its sleep-promoting power is gentler.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Ramelteon builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The no-dependence hypnotic: unscheduled, no abuse potential — the answer for substance-use populations and long-term use.",
    "Melatonin-receptor pharmacology: effect sizes are modest; sell it as gentle, not weak — and pair with sleep-hygiene work.",
    "Fluvoxamine contraindication: the 1A2 interaction is the label's headline caution.",
    "MT1/MT2 selectivity over melatonin's broad binding — targeting the clock without the hangover of supra-physiological melatonin dosing.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Ramelteon: Selective melatonin MT1/MT2 agonist acting on the circadian pacemaker — sleep timing, not cortical sedation.",
        "Uses of Ramelteon: Insomnia — sleep-onset difficulty (chronic use permitted); Circadian rhythm disorders (delayed sleep phase); Insomnia in substance-use populations",
        "Mechanism: selective MT1/MT2 melatonin-receptor AGONIST (not GABA).",
        "Zero dependence/abuse potential — unscheduled; chronic use permitted.",
      ],
      practical: [
        "Prescribe Ramelteon for insomnia — sleep-onset difficulty (chronic use permitted) with dose, timing, and duration.",
        "Outline the monitoring plan: Course and effect review (At 2–4 weeks)",
      ],
      longAnswer: [
        "Ramelteon: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: selective MT1/MT2 melatonin-receptor AGONIST (not GABA).",
        "Zero dependence/abuse potential — unscheduled; chronic use permitted.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: selective MT1/MT2 melatonin-receptor AGONIST (not GABA).",
        "Zero dependence/abuse potential — unscheduled; chronic use permitted.",
        "Half-life ~1–2.6 h; takes weeks of consistent timing for full effect.",
        "Contraindicated with fluvoxamine (1A2).",
        "Niche: onset insomnia + substance-use populations.",
      ],
      pyqConcepts: [
        "Mechanism/target of Ramelteon",
        "Key adverse effect: Hepatotoxicity (rare, dose-related)",
        "Dosing and titration of Ramelteon",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Ramelteon develops hepatotoxicity (rare, dose-related) — next best step?",
        "When to choose Ramelteon over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus",
        "Most common side effects: Somnolence and fatigue, Dizziness, Nausea and decreased appetite",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The no-dependence hypnotic: unscheduled, no abuse potential — the answer for substance-use populations and long-term use.",
        "Melatonin-receptor pharmacology: effect sizes are modest; sell it as gentle, not weak — and pair with sleep-hygiene work.",
        "Fluvoxamine contraindication: the 1A2 interaction is the label's headline caution.",
        "MT1/MT2 selectivity over melatonin's broad binding — targeting the clock without the hangover of supra-physiological melatonin dosing.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: selective MT1/MT2 melatonin-receptor AGONIST (not GABA).",
    "Zero dependence/abuse potential — unscheduled; chronic use permitted.",
    "Half-life ~1–2.6 h; takes weeks of consistent timing for full effect.",
    "Contraindicated with fluvoxamine (1A2).",
    "Niche: onset insomnia + substance-use populations.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — insomnia — sleep-onset difficulty (chronic use permitted)",
      presentation: "A patient presenting with insomnia — sleep-onset difficulty (chronic use permitted), started on Ramelteon.",
      history: "A adult patient presents with a insomnia — sleep-onset difficulty (chronic use permitted) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with insomnia — sleep-onset difficulty (chronic use permitted); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Insomnia — sleep-onset difficulty (chronic use permitted). Differentials are considered and excluded clinically.",
      rationale: "Ramelteon is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Melatonin Agonist) with strong evidence in this condition.",
      management: "Started at 8 mg within 30 min of bedtime, titrated to 8 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Ramelteon takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Melatonin Agonist comparison — choosing within the class",
      primaryDrug: "Ramelteon",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus",
          comparisons: [
            {
              drug: "Tasimelteon",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "1–2.6 hours (short plasma; chronobiotic effects outlast).",
          comparisons: [
            {
              drug: "Tasimelteon",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not associated with weight gain.",
          comparisons: [
            {
              drug: "Tasimelteon",
              value: "Not associated with weight gain.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High for the intended duration.",
          comparisons: [
            {
              drug: "Tasimelteon",
              value: "High for the intended duration.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The dependence-free sleep-onset option — body-clock pharmacology",
          comparisons: [
            {
              drug: "Tasimelteon",
              value: "Non-24-Hour disorder in the blind — the orphan clock drug",
            },
          ],
        },
      ],
      takeaway: "All melatonin agonists share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Ramelteon reaches peak plasma concentration and begins acting at its molecular target (Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (somnolence and fatigue, dizziness, nausea and decreased appetite). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (30 minutes; full chronobiotic effect builds over 1–2 weeks of consistent timing.)",
      title: "Therapeutic effect builds",
      description: "30 minutes; full chronobiotic effect builds over 1–2 weeks of consistent timing. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Ramelteon is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Ramelteon take to work?",
      answer: "30 minutes; full chronobiotic effect builds over 1–2 weeks of consistent timing.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Ramelteon?",
      answer: "The most frequently reported effects are: Somnolence and fatigue, Dizziness, Nausea and decreased appetite. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Ramelteon suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Ramelteon habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Ramelteon exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Ramelteon during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Ramelteon may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG91; APA MDD Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), ramelteon monograph, p. 108",
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
        source: "FDA Prescribing Information for Rozerem (Ramelteon)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for ramelteon — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Ramelteon",
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
      name: "Tasimelteon",
      slug: "tasimelteon",
      drugClass: "Melatonin Agonist",
      relationship: "Same class (Melatonin Agonist)",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      drugClass: "Established agent",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Insomnia — sleep-onset difficulty (chronic use permitted)",
      relationship: "primary",
    },
    {
      name: "Circadian rhythm disorders (delayed sleep phase)",
      relationship: "off-label",
    },
    {
      name: "Insomnia in substance-use populations",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Ramelteon",
      type: "drug",
      href: "/drugs/ramelteon",
      note: "The drug you're reading about",
    },
    {
      label: "Melatonin Agonist",
      type: "class",
      href: "#mechanism",
      note: "Melatonin MT1/MT2 Receptor Agonist",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Insomnia — sleep-onset difficulty (chronic use permitted)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Circadian rhythm disorders (delayed sleep phase)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Insomnia in substance-use populations",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hepatotoxicity (rare, dose-related)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Complex sleep behaviours",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Somnolence and fatigue",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Ramelteon",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The melatonin MT1/MT2 agonist — sleep-onset targeting with zero dependence potential.",
    summary: "Ramelteon is a prescription medicine used to treat insomnia — sleep-onset difficulty (chronic use permitted). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Ramelteon works completely differently from traditional sleeping pills: it mimics the body's own natural sleep hormone (melatonin) to shift your body clock toward sleep. Because it does not act on the brain's calming chemical (GABA), it has no addiction potential and does not disturb breathing — making it the safest choice for longer use, though its sleep-promoting power is gentler.",
    sideEffects: "The most common side effects are: somnolence and fatigue, dizziness, nausea and decreased appetite. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hepatotoxicity (rare, dose-related) and Complex sleep behaviours. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: course and effect review (at 2–4 weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Fluvoxamine, Ketoconazole and other 1A2/3A4 inhibitors, Alcohol. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Rameltee / Ramitax",
        manufacturer: "various",
        strengths: "8 mg",
      },
    ],
    typicalDoses: "8 mg nightly, same time each night.",
    prescribingScenarios: [
      "Long-term onset insomnia where dependence must be avoided.",
      "Substance-use recovery populations.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance — see Monitoring section.",
    patientCounselling: [
      "Same time every night; give it 1–2 weeks before judging.",
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
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Melatonin Agonists",
    members: [
      {
        name: "Ramelteon",
        slug: "ramelteon",
        relationship: "This guide",
        distinguishing: "The dependence-free sleep-onset option — body-clock pharmacology",
      },
      {
        name: "Tasimelteon",
        slug: "tasimelteon",
        relationship: "Same class (Melatonin Agonist)",
        distinguishing: "Non-24-Hour disorder in the blind — the orphan clock drug",
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
      question: "Which molecular target does Ramelteon primarily act on?",
      options: [
        "Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Ramelteon acts primarily at Melatonin MT1 and MT2 receptors (agonist) — suprachiasmatic nucleus. Selective melatonin MT1/MT2 agonist acting on the circadian pacemaker — sleep timing, not cortical sedation.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Ramelteon?",
      options: ["Somnolence and fatigue", "Dizziness", "Nausea and decreased appetite", "Weight gain"],
      correctIndex: 0,
      explanation: "Somnolence and fatigue — Usually mild — and partly intended.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Ramelteon for sleep-onset insomnia?",
      options: ["8 mg", "8 mg (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For sleep-onset insomnia: start 8 mg within 30 min of bedtime, target 8 mg, maximum 8 mg. Same clock time nightly — the clock needs consistency",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Ramelteon in two sentences.",
      answer: "Selective melatonin MT1/MT2 agonist acting on the circadian pacemaker — sleep timing, not cortical sedation. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Ramelteon.",
      answer: "Insomnia — sleep-onset difficulty (chronic use permitted), Circadian rhythm disorders (delayed sleep phase), Insomnia in substance-use populations. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Ramelteon and how you would manage it.",
      answer: "Hepatotoxicity (rare, dose-related): Transaminase elevations at supratherapeutic doses — the label's cautions. Management: LFT vigilance if symptoms; avoid in significant hepatic impairment.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Ramelteon require?",
      answer: "Course and effect review (At 2–4 weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Ramelteon that separates safe prescribers from unsafe ones.",
      answer: "The no-dependence hypnotic: unscheduled, no abuse potential — the answer for substance-use populations and long-term use.",
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
      checkpoint: "You now know what Ramelteon is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Ramelteon works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Ramelteon safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Ramelteon.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Ramelteon with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Ramelteon.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "30 minutes; full chronobiotic effect builds over 1–2 weeks of consistent timing.",
    ],
    ifItWorks: [
      "Continue Ramelteon at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Ramelteon (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Ramelteon follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Not associated with weight gain.",
    sedation: "High for the intended duration.",
    dosing: [
      {
        indication: "Sleep-onset insomnia",
        starting: "8 mg within 30 min of bedtime",
        titration: "Same clock time nightly — the clock needs consistency",
        target: "8 mg",
        max: "8 mg",
      },
    ],
    dosageForms: ["Tablets 8 mg"],
    dosingTips: [
      "Same time nightly — the clock needs consistency.",
      "Weeks of trial, not nights — set expectations.",
      "The substance-use population's hypnotic.",
    ],
    overdose: [
      "Overdose with Ramelteon is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Ramelteon is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 1–2.6 hours (short plasma; chronobiotic effects outlast)..",
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
    potentialAdvantages: ["No dependence or abuse potential.", "No respiratory depression.", "Chronic-use approval.", "No rebound insomnia."],
    potentialDisadvantages: ["Modest efficacy (onset latency only).", "Slower to show benefit.", "Fluvoxamine contraindication.", "Cost in some markets."],
    primaryTargetSymptoms: [
      "Sleep-onset insomnia (gentle, long-term option)",
      "Circadian phase delay",
    ],
    pearls: [
      "The no-dependence hypnotic: unscheduled, no abuse potential — the answer for substance-use populations and long-term use.",
      "Melatonin-receptor pharmacology: effect sizes are modest; sell it as gentle, not weak — and pair with sleep-hygiene work.",
      "Fluvoxamine contraindication: the 1A2 interaction is the label's headline caution.",
      "MT1/MT2 selectivity over melatonin's broad binding — targeting the clock without the hangover of supra-physiological melatonin dosing.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
