import type { Drug } from "../types";

/**
 * Estazolam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), estazolam monograph (book p. 42)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const estazolam: Drug = {
  /* ---- Identity ---- */
  slug: "estazolam",
  genericName: "Estazolam",
  brandNames: ["ProSom"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine Hypnotic",
  drugClassFullName: "Benzodiazepine Hypnotic (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Benzodiazepine Hypnotics", "Estazolam"],
  /* ---- Hero / summary ---- */
  tagline: "The intermediate hypnotic benzo — triazolam's longer-acting, quieter cousin.",
  summary: "Estazolam is an intermediate-acting triazolo-benzodiazepine hypnotic (half-life 10–24 h) covering onset and maintenance with less accumulation than flurazepam and less rebound than triazolam — a mid-position that never gathered fame but works. Class-standard boxed warnings and dependence discipline apply.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Estazolam — from its molecular target (GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine) to clinical effect.",
    "List the FDA-approved and off-label uses of Estazolam.",
    "Predict the common and serious side effects of Estazolam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Estazolam.",
    "Compare Estazolam with other benzodiazepine hypnotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Intermediate-acting benzodiazepine hypnotic — between triazolam's brevity and flurazepam's accumulation.",
    molecularTarget: "GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Estazolam is an intermediate-acting triazolo-benzodiazepine hypnotic (half-life 10–24 h) covering onset and maintenance with less accumulation than flurazepam and less rebound than triazolam — a mid-position that never gathered fame but works — the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 10–24 hours. — see mechanism and prescriber sections.",
    halfLife: "10–24 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "gaba",
        label: "GABA",
        sublabel: "Inhibitory neurotransmitter",
        variant: "input",
      },
      {
        id: "receptor",
        label: "GABA-A receptor",
        sublabel: "Chloride channel",
        variant: "target",
      },
      {
        id: "drug",
        label: "Estazolam",
        sublabel: "Positive allosteric modulator",
        variant: "process",
      },
      {
        id: "cl",
        label: "Cl⁻ influx",
        sublabel: "Neuron hyperpolarises",
        variant: "output",
      },
      {
        id: "effect",
        label: "Reduced neuronal firing",
        sublabel: "Anxiolysis, sedation, anticonvulsant effect",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "gaba",
        to: "receptor",
        label: "binds",
      },
      {
        from: "drug",
        to: "receptor",
        label: "enhances GABA action",
        type: "stimulate",
      },
      {
        from: "receptor",
        to: "cl",
        label: "opens channel",
      },
      {
        from: "cl",
        to: "effect",
        label: "inhibits firing",
      },
    ],
    caption: "Benzodiazepines amplify the brain's own inhibitory signal (GABA) rather than activating the receptor directly — which is why their effect is powerful but limited by dependence risk.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Insomnia — short-term (onset and maintenance)",
      status: "fda-approved",
      description: "0.5–2 mg at bedtime; 0.5 mg elderly.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Estazolam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioids",
      severity: "absolute",
      rationale: "Concurrent use causes profound sedation, respiratory depression, and death — the strongest boxed warning combination in medicine.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Risks with opioids",
      text: "Class warning.",
    },
    {
      title: "Dependence, abuse, and withdrawal",
      text: "Class warning.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Morning hangover",
      frequency: "common",
      severity: "moderate",
      description: "10–24 h half-life.",
      management: "0.5–1 mg; long night.",
    },
    {
      name: "Amnesia, dizziness",
      frequency: "common",
      severity: "moderate",
      description: "Class effects.",
      management: "Counsel.",
    },
    {
      name: "Rebound insomnia",
      frequency: "common",
      severity: "moderate",
      description: "On cessation.",
      management: "Taper.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression with opioids",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Class emergency.",
      management: "Airway.",
    },
    {
      name: "Withdrawal seizures",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Abrupt stop.",
      management: "Taper.",
    },
    {
      name: "Falls (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Class geriatric hazard.",
      management: "0.5 mg elderly.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Respiratory status and sedation",
      frequency: "Clinical review each visit",
      rationale: "Respiratory depression risk in overdose and with opioids.",
    },
    {
      parameter: "Dependence review",
      frequency: "Every visit for long-term users",
      rationale: "Tolerance and dependence develop within weeks.",
    },
    {
      parameter: "Fall risk review (elderly)",
      frequency: "Every visit in older patients",
      rationale: "Falls and fractures are the main harm in the elderly.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "contraindicated",
      mechanism: "Concurrent use causes profound sedation, respiratory depression, and death — the strongest boxed warning combination in medicine.",
      action: "Avoid; if unavoidable for taper protocols, use lowest doses with intensive monitoring.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "major",
      mechanism: "Additive sedation and respiratory depression.",
      action: "Counsel strongly against alcohol.",
    },
    {
      drug: "Clozapine",
      severity: "major",
      mechanism: "Rare but serious respiratory depression/death reported early in treatment.",
      action: "Minimise or avoid, especially in the first weeks.",
    },
    {
      drug: "Older antihistamines (sedating)",
      severity: "moderate",
      mechanism: "Additive sedation in the elderly — falls.",
      action: "Prefer non-sedating alternatives.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "First-trimester exposure is associated with a small absolute increase in oral clefts, and third-trimester use causes neonatal floppy infant syndrome (sedation, hypotonia, poor feeding) and withdrawal. Use short courses at the lowest dose when unavoidable; avoid near term.",
    lactation: "Infant sedation is the main concern with sedative doses; short-acting agents at low doses are preferred where breastfeeding continues. Monitor the infant for drowsiness and poor feeding.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Estazolam is a medicine used to treat insomnia — short-term (onset and maintenance). Intermediate-acting benzodiazepine hypnotic — between triazolam's brevity and flurazepam's accumulation. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Estazolam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The mid-position drug: less rebound than triazolam, less accumulation than flurazepam — the geometry explains its quiet usefulness.",
    "The triazolo-ring family: triazolam (short), estazolam (intermediate), alprazolam (anxiolytic) — chemistry organising kinetics.",
    "All benzodiazepines share the GABA-A amplification mechanism — the choice between them is pharmacokinetics: onset speed, duration, and metabolite burden.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Estazolam: Intermediate-acting benzodiazepine hypnotic — between triazolam's brevity and flurazepam's accumulation.",
        "Uses of Estazolam: Insomnia — short-term (onset and maintenance)",
        "Intermediate-acting triazolo-benzodiazepine hypnotic (half-life 10–24 h).",
        "Dose 0.5–2 mg (elderly 0.5 mg).",
      ],
      practical: [
        "Prescribe Estazolam for insomnia — short-term (onset and maintenance) with dose, timing, and duration.",
        "Outline the monitoring plan: Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      ],
      longAnswer: [
        "Estazolam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Intermediate-acting triazolo-benzodiazepine hypnotic (half-life 10–24 h).",
        "Dose 0.5–2 mg (elderly 0.5 mg).",
      ],
    },
    neetPg: {
      highYield: [
        "Intermediate-acting triazolo-benzodiazepine hypnotic (half-life 10–24 h).",
        "Dose 0.5–2 mg (elderly 0.5 mg).",
        "Mid-position between triazolam and flurazepam.",
        "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
        "The class boxed warning: opioids + benzodiazepines = respiratory depression and death.",
      ],
      pyqConcepts: [
        "Mechanism/target of Estazolam",
        "Key adverse effect: Respiratory depression with opioids",
        "Dosing and titration of Estazolam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Estazolam develops respiratory depression with opioids — next best step?",
        "When to choose Estazolam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine",
        "Most common side effects: Morning hangover, Amnesia, dizziness, Rebound insomnia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The mid-position drug: less rebound than triazolam, less accumulation than flurazepam — the geometry explains its quiet usefulness.",
        "The triazolo-ring family: triazolam (short), estazolam (intermediate), alprazolam (anxiolytic) — chemistry organising kinetics.",
        "All benzodiazepines share the GABA-A amplification mechanism — the choice between them is pharmacokinetics: onset speed, duration, and metabolite burden.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Intermediate-acting triazolo-benzodiazepine hypnotic (half-life 10–24 h).",
    "Dose 0.5–2 mg (elderly 0.5 mg).",
    "Mid-position between triazolam and flurazepam.",
    "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
    "The class boxed warning: opioids + benzodiazepines = respiratory depression and death.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — insomnia — short-term (onset and maintenance)",
      presentation: "A patient presenting with insomnia — short-term (onset and maintenance), started on Estazolam.",
      history: "A adult patient presents with a insomnia — short-term (onset and maintenance) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with insomnia — short-term (onset and maintenance); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Insomnia — short-term (onset and maintenance). Differentials are considered and excluded clinically.",
      rationale: "Estazolam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine Hypnotic) with strong evidence in this condition.",
      management: "Started at 0.5–1 mg at bedtime (elderly 0.5 mg), titrated to 1–2 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Estazolam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine Hypnotic comparison — choosing within the class",
      primaryDrug: "Estazolam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine",
          comparisons: [
            {
              drug: "Temazepam",
              value: "See full guide",
            },
            {
              drug: "Triazolam",
              value: "See full guide",
            },
            {
              drug: "Flunitrazepam",
              value: "See full guide",
            },
            {
              drug: "Flurazepam",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "10–24 hours.",
          comparisons: [
            {
              drug: "Temazepam",
              value: "—",
            },
            {
              drug: "Triazolam",
              value: "—",
            },
            {
              drug: "Flunitrazepam",
              value: "—",
            },
            {
              drug: "Flurazepam",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not associated with weight gain.",
          comparisons: [
            {
              drug: "Temazepam",
              value: "Not associated with weight gain.",
            },
            {
              drug: "Triazolam",
              value: "Not associated with weight gain.",
            },
            {
              drug: "Flunitrazepam",
              value: "Not associated with weight gain.",
            },
            {
              drug: "Flurazepam",
              value: "Not associated with weight gain.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High for the intended duration.",
          comparisons: [
            {
              drug: "Temazepam",
              value: "High for the intended duration.",
            },
            {
              drug: "Triazolam",
              value: "High for the intended duration.",
            },
            {
              drug: "Flunitrazepam",
              value: "High for the intended duration.",
            },
            {
              drug: "Flurazepam",
              value: "High for the intended duration.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The quiet intermediate hypnotic benzo",
          comparisons: [
            {
              drug: "Temazepam",
              value: "The classic benzodiazepine hypnotic — full power, full class risks",
            },
            {
              drug: "Triazolam",
              value: "The benzodiazepine zolpidem — onset-only, amnesia-prone",
            },
            {
              drug: "Flunitrazepam",
              value: "The strictly-controlled potent hypnotic — pharmacology's misuse lesson",
            },
            {
              drug: "Flurazepam",
              value: "The accumulation cautionary tale of hypnotic benzodiazepines",
            },
          ],
        },
      ],
      takeaway: "All benzodiazepine hypnotics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Estazolam reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (morning hangover, amnesia, dizziness, rebound insomnia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (15–45 minutes.)",
      title: "Therapeutic effect builds",
      description: "15–45 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Estazolam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Estazolam take to work?",
      answer: "15–45 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Estazolam?",
      answer: "The most frequently reported effects are: Morning hangover, Amnesia, dizziness, Rebound insomnia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Estazolam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Estazolam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Estazolam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Estazolam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Estazolam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG113 (Anxiety); NICE CG91",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), estazolam monograph, p. 42",
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
        source: "FDA Prescribing Information for ProSom (Estazolam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for estazolam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Estazolam",
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
      name: "Temazepam",
      slug: "temazepam",
      drugClass: "Benzodiazepine Hypnotic",
      relationship: "Same class (Benzodiazepine Hypnotic)",
    },
    {
      name: "Triazolam",
      slug: "triazolam",
      drugClass: "Benzodiazepine Hypnotic",
      relationship: "Same class (Benzodiazepine Hypnotic)",
    },
    {
      name: "Flunitrazepam",
      slug: "flunitrazepam",
      drugClass: "Benzodiazepine Hypnotic",
      relationship: "Same class (Benzodiazepine Hypnotic)",
    },
    {
      name: "Flurazepam",
      slug: "flurazepam",
      drugClass: "Benzodiazepine Hypnotic",
      relationship: "Same class (Benzodiazepine Hypnotic)",
    },
    {
      name: "Quazepam",
      slug: "quazepam",
      drugClass: "Benzodiazepine Hypnotic",
      relationship: "Same class (Benzodiazepine Hypnotic)",
    },
    {
      name: "Diazepam",
      slug: "diazepam",
      drugClass: "Benzodiazepine",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Insomnia — short-term (onset and maintenance)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Estazolam",
      type: "drug",
      href: "/drugs/estazolam",
      note: "The drug you're reading about",
    },
    {
      label: "Benzodiazepine Hypnotic",
      type: "class",
      href: "#mechanism",
      note: "Benzodiazepine Hypnotic (GABA-A PAM)",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Insomnia — short-term (onset and maintenance)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Respiratory depression with opioids",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Withdrawal seizures",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Morning hangover",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Estazolam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The intermediate hypnotic benzo — triazolam's longer-acting, quieter cousin.",
    summary: "Estazolam is a prescription medicine used to treat insomnia — short-term (onset and maintenance). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Estazolam is a medicine used to treat insomnia — short-term (onset and maintenance). Intermediate-acting benzodiazepine hypnotic — between triazolam's brevity and flurazepam's accumulation. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
    sideEffects: "The most common side effects are: morning hangover, amnesia, dizziness, rebound insomnia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression with opioids and Withdrawal seizures. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: respiratory status and sedation (clinical review each visit); dependence review (every visit for long-term users); fall risk review (elderly) (every visit in older patients). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol and CNS depressants, Clozapine, Older antihistamines (sedating). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Estazolam (rare availability)",
        manufacturer: "imported",
        strengths: "1, 2 mg",
      },
    ],
    typicalDoses: "0.5–2 mg at bedtime.",
    prescribingScenarios: ["Legacy/limited use."],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance — see Monitoring section.",
    patientCounselling: ["Class rules."],
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
    familyName: "Benzodiazepine Hypnotics",
    members: [
      {
        name: "Estazolam",
        slug: "estazolam",
        relationship: "This guide",
        distinguishing: "The quiet intermediate hypnotic benzo",
      },
      {
        name: "Temazepam",
        slug: "temazepam",
        relationship: "Same class (Benzodiazepine Hypnotic)",
        distinguishing: "The classic benzodiazepine hypnotic — full power, full class risks",
      },
      {
        name: "Triazolam",
        slug: "triazolam",
        relationship: "Same class (Benzodiazepine Hypnotic)",
        distinguishing: "The benzodiazepine zolpidem — onset-only, amnesia-prone",
      },
      {
        name: "Flunitrazepam",
        slug: "flunitrazepam",
        relationship: "Same class (Benzodiazepine Hypnotic)",
        distinguishing: "The strictly-controlled potent hypnotic — pharmacology's misuse lesson",
      },
      {
        name: "Flurazepam",
        slug: "flurazepam",
        relationship: "Same class (Benzodiazepine Hypnotic)",
        distinguishing: "The accumulation cautionary tale of hypnotic benzodiazepines",
      },
      {
        name: "Quazepam",
        slug: "quazepam",
        relationship: "Same class (Benzodiazepine Hypnotic)",
        distinguishing: "The alpha-1-selective benzodiazepine — a pharmacology bridge",
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
      question: "Which molecular target does Estazolam primarily act on?",
      options: [
        "GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Estazolam acts primarily at GABA-A benzodiazepine site (PAM) — intermediate-acting triazolobenzodiazepine. Intermediate-acting benzodiazepine hypnotic — between triazolam's brevity and flurazepam's accumulation.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Estazolam?",
      options: ["Morning hangover", "Amnesia, dizziness", "Rebound insomnia", "Weight gain"],
      correctIndex: 0,
      explanation: "Morning hangover — 10–24 h half-life.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Estazolam for insomnia?",
      options: ["1–2 mg", "2 mg", "1–2 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For insomnia: start 0.5–1 mg at bedtime (elderly 0.5 mg), target 1–2 mg, maximum 2 mg. Short courses",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Estazolam in two sentences.",
      answer: "Intermediate-acting benzodiazepine hypnotic — between triazolam's brevity and flurazepam's accumulation. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Estazolam.",
      answer: "Insomnia — short-term (onset and maintenance). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Estazolam and how you would manage it.",
      answer: "Respiratory depression with opioids: Class emergency. Management: Airway.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Estazolam require?",
      answer: "Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Estazolam that separates safe prescribers from unsafe ones.",
      answer: "The mid-position drug: less rebound than triazolam, less accumulation than flurazepam — the geometry explains its quiet usefulness.",
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
      checkpoint: "You now know what Estazolam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Estazolam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Estazolam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Estazolam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Estazolam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Estazolam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["15–45 minutes."],
    ifItWorks: [
      "Continue Estazolam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Estazolam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Estazolam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Insomnia",
        starting: "0.5–1 mg at bedtime (elderly 0.5 mg)",
        titration: "Short courses",
        target: "1–2 mg",
        max: "2 mg",
      },
    ],
    dosageForms: ["Tablets 0.5, 1, 2 mg"],
    dosingTips: ["0.5 mg elderly; 7–8+ h bed."],
    overdose: [
      "Overdose with Estazolam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Estazolam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 10–24 hours..", "Metabolism: Hepatic.."],
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
      "Onset + maintenance without flurazepam accumulation.",
    ],
    potentialDisadvantages: ["Full class dependence/fall profile.", "Limited availability."],
    primaryTargetSymptoms: ["Short-term insomnia"],
    pearls: [
      "The mid-position drug: less rebound than triazolam, less accumulation than flurazepam — the geometry explains its quiet usefulness.",
      "The triazolo-ring family: triazolam (short), estazolam (intermediate), alprazolam (anxiolytic) — chemistry organising kinetics.",
      "All benzodiazepines share the GABA-A amplification mechanism — the choice between them is pharmacokinetics: onset speed, duration, and metabolite burden.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
