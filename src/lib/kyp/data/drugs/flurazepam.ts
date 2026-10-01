import type { Drug } from "../types";

/**
 * Flurazepam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), flurazepam monograph (book p. 50)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const flurazepam: Drug = {
  /* ---- Identity ---- */
  slug: "flurazepam",
  genericName: "Flurazepam",
  brandNames: ["Dalmane"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine Hypnotic",
  drugClassFullName: "Benzodiazepine Hypnotic (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Benzodiazepine Hypnotics", "Flurazepam"],
  /* ---- Hero / summary ---- */
  tagline: "The longest-tail hypnotic benzo — active metabolites to 100+ hours make it the accumulation cautionary tale.",
  summary: "Flurazepam is a long-acting benzodiazepine hypnotic whose active metabolites (desalkylflurazepam, half-life 40–100+ h) accumulate nightly: sleep maintenance comes at the price of day-after-day sedation build-up — the textbook example of hypnotic accumulation. Largely retired behind shorter agents, it survives in legacy regimens and pharmacology teaching.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Flurazepam — from its molecular target (GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites) to clinical effect.",
    "List the FDA-approved and off-label uses of Flurazepam.",
    "Predict the common and serious side effects of Flurazepam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Flurazepam.",
    "Compare Flurazepam with other benzodiazepine hypnotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Long-acting benzodiazepine hypnotic with a 40–100+ hour active metabolite (desalkylflurazepam) — the accumulation case study.",
    molecularTarget: "GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Flurazepam is a long-acting benzodiazepine hypnotic whose active metabolites (desalkylflurazepam, half-life 40–100+ h) accumulate nightly: sleep maintenance comes at the price of day-after-day sedation build-up — the textbook example of hypnotic accumulation — the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Parent ~2–3 h; active metabolite 40–100+ hours. — see mechanism and prescriber sections.",
    halfLife: "Parent ~2–3 h; active metabolite 40–100+ hours.",
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
        label: "Flurazepam",
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
    "GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Insomnia — short-term (maintenance)",
      status: "fda-approved",
      description: "15–30 mg at bedtime; largely historic use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Flurazepam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      text: "Class warning — accumulation deepens dependence risk.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Daytime sedation accumulation",
      frequency: "very-common",
      severity: "severe",
      description: "Metabolite half-life 40–100+ h: each nightly dose stacks on the last — the 'day 5 hangover'.",
      management: "Discontinue; use shorter agents.",
    },
    {
      name: "Falls and confusion (elderly)",
      frequency: "common",
      severity: "severe",
      description: "The geriatric accumulation syndrome.",
      management: "Avoid in the elderly entirely.",
    },
    {
      name: "Amnesia and dizziness",
      frequency: "common",
      severity: "moderate",
      description: "Class effects amplified by accumulation.",
      management: "Dose review.",
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
      name: "Withdrawal on cessation",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Metabolite taper is self-provided but prolonged.",
      management: "Supervised taper.",
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
  patientExplanation: "Flurazepam is a medicine used to treat insomnia — short-term (maintenance). Long-acting benzodiazepine hypnotic with a 40–100+ hour active metabolite (desalkylflurazepam) — the accumulation case study. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Flurazepam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The accumulation lesson: flurazepam's metabolite outlives the week — daytime impairment is pharmacokinetics, not ageing.",
    "Fall-and-fracture data drove hypnotic prescribing away from long-acting benzodiazepines: flurazepam is the exhibit.",
    "If you meet a legacy user, the kind act is a structured switch to a shorter agent.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Flurazepam: Long-acting benzodiazepine hypnotic with a 40–100+ hour active metabolite (desalkylflurazepam) — the accumulation case study.",
        "Uses of Flurazepam: Insomnia — short-term (maintenance)",
        "Long-acting benzo hypnotic; active metabolite desalkylflurazepam 40–100+ h.",
        "The accumulation case study — daytime sedation stacking.",
      ],
      practical: [
        "Prescribe Flurazepam for insomnia — short-term (maintenance) with dose, timing, and duration.",
        "Outline the monitoring plan: Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      ],
      longAnswer: [
        "Flurazepam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Long-acting benzo hypnotic; active metabolite desalkylflurazepam 40–100+ h.",
        "The accumulation case study — daytime sedation stacking.",
      ],
    },
    neetPg: {
      highYield: [
        "Long-acting benzo hypnotic; active metabolite desalkylflurazepam 40–100+ h.",
        "The accumulation case study — daytime sedation stacking.",
        "Avoid in the elderly (falls, confusion).",
        "Largely retired; know it for pharmacology.",
        "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
      ],
      pyqConcepts: [
        "Mechanism/target of Flurazepam",
        "Key adverse effect: Respiratory depression with opioids",
        "Dosing and titration of Flurazepam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Flurazepam develops respiratory depression with opioids — next best step?",
        "When to choose Flurazepam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites",
        "Most common side effects: Daytime sedation accumulation, Falls and confusion (elderly), Amnesia and dizziness",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The accumulation lesson: flurazepam's metabolite outlives the week — daytime impairment is pharmacokinetics, not ageing.",
        "Fall-and-fracture data drove hypnotic prescribing away from long-acting benzodiazepines: flurazepam is the exhibit.",
        "If you meet a legacy user, the kind act is a structured switch to a shorter agent.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Long-acting benzo hypnotic; active metabolite desalkylflurazepam 40–100+ h.",
    "The accumulation case study — daytime sedation stacking.",
    "Avoid in the elderly (falls, confusion).",
    "Largely retired; know it for pharmacology.",
    "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — insomnia — short-term (maintenance)",
      presentation: "A patient presenting with insomnia — short-term (maintenance), started on Flurazepam.",
      history: "A adult patient presents with a insomnia — short-term (maintenance) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with insomnia — short-term (maintenance); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Insomnia — short-term (maintenance). Differentials are considered and excluded clinically.",
      rationale: "Flurazepam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine Hypnotic) with strong evidence in this condition.",
      management: "Started at 15 mg at bedtime, titrated to 15–30 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Flurazepam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine Hypnotic comparison — choosing within the class",
      primaryDrug: "Flurazepam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites",
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
              drug: "Estazolam",
              value: "See full guide",
            },
            {
              drug: "Flunitrazepam",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Parent ~2–3 h; active metabolite 40–100+ hours.",
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
              drug: "Estazolam",
              value: "—",
            },
            {
              drug: "Flunitrazepam",
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
              drug: "Estazolam",
              value: "Not associated with weight gain.",
            },
            {
              drug: "Flunitrazepam",
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
              drug: "Estazolam",
              value: "High for the intended duration.",
            },
            {
              drug: "Flunitrazepam",
              value: "High for the intended duration.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The accumulation cautionary tale of hypnotic benzodiazepines",
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
              drug: "Estazolam",
              value: "The quiet intermediate hypnotic benzo",
            },
            {
              drug: "Flunitrazepam",
              value: "The strictly-controlled potent hypnotic — pharmacology's misuse lesson",
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
      description: "Flurazepam reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (daytime sedation accumulation, falls and confusion (elderly), amnesia and dizziness). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Flurazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Flurazepam take to work?",
      answer: "15–45 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Flurazepam?",
      answer: "The most frequently reported effects are: Daytime sedation accumulation, Falls and confusion (elderly), Amnesia and dizziness. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Flurazepam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Flurazepam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Flurazepam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Flurazepam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Flurazepam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), flurazepam monograph, p. 50",
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
        source: "FDA Prescribing Information for Dalmane (Flurazepam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for flurazepam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Flurazepam",
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
      name: "Estazolam",
      slug: "estazolam",
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
      name: "Insomnia — short-term (maintenance)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Flurazepam",
      type: "drug",
      href: "/drugs/flurazepam",
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
      label: "GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Insomnia — short-term (maintenance)",
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
      label: "Withdrawal on cessation",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Daytime sedation accumulation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Flurazepam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The longest-tail hypnotic benzo — active metabolites to 100+ hours make it the accumulation cautionary tale.",
    summary: "Flurazepam is a prescription medicine used to treat insomnia — short-term (maintenance). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Flurazepam is a medicine used to treat insomnia — short-term (maintenance). Long-acting benzodiazepine hypnotic with a 40–100+ hour active metabolite (desalkylflurazepam) — the accumulation case study. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
    sideEffects: "The most common side effects are: daytime sedation accumulation, falls and confusion (elderly), amnesia and dizziness. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression with opioids and Withdrawal on cessation. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: respiratory status and sedation (clinical review each visit); dependence review (every visit for long-term users); fall risk review (elderly) (every visit in older patients). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol and CNS depressants, Clozapine, Older antihistamines (sedating). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Flurazepam (rare availability)",
        manufacturer: "imported",
        strengths: "15, 30 mg",
      },
    ],
    typicalDoses: "15–30 mg at bedtime (historic).",
    prescribingScenarios: ["Legacy patients only."],
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
      "Class rules; plan a switch to a shorter agent.",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Benzodiazepine Hypnotics",
    members: [
      {
        name: "Flurazepam",
        slug: "flurazepam",
        relationship: "This guide",
        distinguishing: "The accumulation cautionary tale of hypnotic benzodiazepines",
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
        name: "Estazolam",
        slug: "estazolam",
        relationship: "Same class (Benzodiazepine Hypnotic)",
        distinguishing: "The quiet intermediate hypnotic benzo",
      },
      {
        name: "Flunitrazepam",
        slug: "flunitrazepam",
        relationship: "Same class (Benzodiazepine Hypnotic)",
        distinguishing: "The strictly-controlled potent hypnotic — pharmacology's misuse lesson",
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
      question: "Which molecular target does Flurazepam primarily act on?",
      options: [
        "GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Flurazepam acts primarily at GABA-A benzodiazepine site (PAM) — long-acting with very long metabolites. Long-acting benzodiazepine hypnotic with a 40–100+ hour active metabolite (desalkylflurazepam) — the accumulation case study.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Flurazepam?",
      options: ["Daytime sedation accumulation", "Falls and confusion (elderly)", "Amnesia and dizziness", "Weight gain"],
      correctIndex: 0,
      explanation: "Daytime sedation accumulation — Metabolite half-life 40–100+ h: each nightly dose stacks on the last — the 'day 5 hangover'.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Flurazepam for insomnia (historic)?",
      options: ["15–30 mg", "30 mg", "15–30 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For insomnia (historic): start 15 mg at bedtime, target 15–30 mg, maximum 30 mg. Short courses only",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Flurazepam in two sentences.",
      answer: "Long-acting benzodiazepine hypnotic with a 40–100+ hour active metabolite (desalkylflurazepam) — the accumulation case study. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Flurazepam.",
      answer: "Insomnia — short-term (maintenance). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Flurazepam and how you would manage it.",
      answer: "Respiratory depression with opioids: Class emergency. Management: Airway.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Flurazepam require?",
      answer: "Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Flurazepam that separates safe prescribers from unsafe ones.",
      answer: "The accumulation lesson: flurazepam's metabolite outlives the week — daytime impairment is pharmacokinetics, not ageing.",
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
      checkpoint: "You now know what Flurazepam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Flurazepam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Flurazepam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Flurazepam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Flurazepam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Flurazepam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["15–45 minutes."],
    ifItWorks: [
      "Continue Flurazepam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Flurazepam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Flurazepam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Insomnia (historic)",
        starting: "15 mg at bedtime",
        titration: "Short courses only",
        target: "15–30 mg",
        max: "30 mg",
      },
    ],
    dosageForms: ["Capsules 15, 30 mg"],
    dosingTips: [
      "Don't start it — switch legacy users to shorter agents with taper planning.",
    ],
    overdose: [
      "Overdose with Flurazepam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Flurazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Parent ~2–3 h; active metabolite 40–100+ hours..",
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
      "Robust maintenance cover (when nothing else existed).",
    ],
    potentialDisadvantages: ["Cumulative daytime sedation.", "Falls in elderly.", "Full dependence profile.", "Retired from guidelines."],
    primaryTargetSymptoms: ["Insomnia maintenance (historic)"],
    pearls: [
      "The accumulation lesson: flurazepam's metabolite outlives the week — daytime impairment is pharmacokinetics, not ageing.",
      "Fall-and-fracture data drove hypnotic prescribing away from long-acting benzodiazepines: flurazepam is the exhibit.",
      "If you meet a legacy user, the kind act is a structured switch to a shorter agent.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
