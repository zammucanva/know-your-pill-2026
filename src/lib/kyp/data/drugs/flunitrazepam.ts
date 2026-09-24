import type { Drug } from "../types";

/**
 * Flunitrazepam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), flunitrazepam monograph (book p. 46)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const flunitrazepam: Drug = {
  /* ---- Identity ---- */
  slug: "flunitrazepam",
  genericName: "Flunitrazepam",
  brandNames: ["Rohypnol (where legally available)"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine Hypnotic",
  drugClassFullName: "Benzodiazepine Hypnotic (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Benzodiazepine Hypnotics", "Flunitrazepam"],
  /* ---- Hero / summary ---- */
  tagline: "The infamous one — Rohypnol: potent hypnotic benzo, strict controls, and a pharmacology lesson in misuse.",
  summary: "Flunitrazepam (Rohypnol) is an ultra-potent long-acting hypnotic benzodiazepine: 1–2 mg produces deep sleep with strong amnesia for 8+ hours. Its notoriety as a misuse and drug-facilitated-crime agent (the 'date-rape drug' legend) brought Schedule III/IV restrictions, formulation changes (blue dye, slower dissolution), and bans in many countries including the US. As medicine: potent, long-tailed, strictly controlled; as pharmacology: the class's potency ceiling.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Flunitrazepam — from its molecular target (GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting) to clinical effect.",
    "List the FDA-approved and off-label uses of Flunitrazepam.",
    "Predict the common and serious side effects of Flunitrazepam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Flunitrazepam.",
    "Compare Flunitrazepam with other benzodiazepine hypnotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Ultra-potent long-acting benzodiazepine GABA-A PAM — hypnotic power with deep amnesia and a long tail.",
    molecularTarget: "GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Flunitrazepam (Rohypnol) is an ultra-potent long-acting hypnotic benzodiazepine: 1–2 mg produces deep sleep with strong amnesia for 8+ hours — the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Parent 18–26 h; active metabolite (7-aminoflunitrazepam) 20–36 h. — see mechanism and prescriber sections.",
    halfLife: "Parent 18–26 h; active metabolite (7-aminoflunitrazepam) 20–36 h.",
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
        label: "Flunitrazepam",
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
    "GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Severe insomnia (where legally available)",
      status: "guideline",
      description: "1–2 mg at bedtime under strict control — rarely the practical choice anywhere.",
    },
    {
      name: "Pre-anaesthetic sedation (historic)",
      status: "guideline",
      description: "Superseded by midazolam.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Flunitrazepam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      text: "Class warning — potency amplifies it.",
    },
    {
      title: "Dependence, abuse, and misuse",
      text: "The defining regulatory story: strict schedules, blue-dye formulations, import bans; prescribed rarely, if at all, in most jurisdictions.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Deep sedation with hangover",
      frequency: "very-common",
      severity: "moderate",
      description: "1–2 mg for 8+ h with residual impairment.",
      management: "Counsel; lowest controlled dose.",
    },
    {
      name: "Anterograde amnesia",
      frequency: "very-common",
      severity: "severe",
      description: "Profound — the property exploited in drug-facilitated crime.",
      management: "Counsel explicitly; controlled setting.",
    },
    {
      name: "Muscle weakness, ataxia",
      frequency: "common",
      severity: "moderate",
      description: "Long-acting class effects.",
      management: "Fall precautions.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression (potentiated by opioids/alcohol)",
      frequency: "common",
      severity: "life-threatening",
      description: "Potency + misuse context = the class's deadliest member.",
      management: "Airway support; flumazenil caution.",
    },
    {
      name: "Dependence — rapid and severe",
      frequency: "common",
      severity: "severe",
      description: "High potency + fast onset of tolerance.",
      management: "Strict control; avoid initiation.",
    },
    {
      name: "Drug-facilitated crime misuse",
      frequency: "uncommon",
      severity: "severe",
      description: "Amnesia + odourless solubility = the criminal profile that brought global restrictions.",
      management: "Regulatory controls; awareness counselling.",
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
  patientExplanation: "Flunitrazepam is a medicine used to treat severe insomnia (where legally available). Ultra-potent long-acting benzodiazepine GABA-A PAM — hypnotic power with deep amnesia and a long tail. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Flunitrazepam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The regulatory arc: medical hypnotic → misuse notoriety → blue-dye reformulation → bans — pharmacology meeting society.",
    "Potency ceiling of the class: ~10× diazepam mg-for-mg with deep amnesia — powerful medicine and dangerous tool.",
    "Forensic awareness: amnesia + delayed detection drove formulation changes; detection windows matter in assault workups.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Flunitrazepam: Ultra-potent long-acting benzodiazepine GABA-A PAM — hypnotic power with deep amnesia and a long tail.",
        "Uses of Flunitrazepam: Severe insomnia (where legally available); Pre-anaesthetic sedation (historic)",
        "Ultra-potent long-acting benzodiazepine hypnotic (Rohypnol).",
        "1–2 mg = 8+ h deep sleep with profound amnesia.",
      ],
      practical: [
        "Prescribe Flunitrazepam for severe insomnia (where legally available) with dose, timing, and duration.",
        "Outline the monitoring plan: Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      ],
      longAnswer: [
        "Flunitrazepam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Ultra-potent long-acting benzodiazepine hypnotic (Rohypnol).",
        "1–2 mg = 8+ h deep sleep with profound amnesia.",
      ],
    },
    neetPg: {
      highYield: [
        "Ultra-potent long-acting benzodiazepine hypnotic (Rohypnol).",
        "1–2 mg = 8+ h deep sleep with profound amnesia.",
        "The misuse/date-rape notoriety → Schedule controls, blue-dye formulation, US ban.",
        "Rarely a therapeutic choice anywhere today.",
        "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
      ],
      pyqConcepts: [
        "Mechanism/target of Flunitrazepam",
        "Key adverse effect: Respiratory depression (potentiated by opioids/alcohol)",
        "Dosing and titration of Flunitrazepam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Flunitrazepam develops respiratory depression (potentiated by opioids/alcohol) — next best step?",
        "When to choose Flunitrazepam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting",
        "Most common side effects: Deep sedation with hangover, Anterograde amnesia, Muscle weakness, ataxia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The regulatory arc: medical hypnotic → misuse notoriety → blue-dye reformulation → bans — pharmacology meeting society.",
        "Potency ceiling of the class: ~10× diazepam mg-for-mg with deep amnesia — powerful medicine and dangerous tool.",
        "Forensic awareness: amnesia + delayed detection drove formulation changes; detection windows matter in assault workups.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Ultra-potent long-acting benzodiazepine hypnotic (Rohypnol).",
    "1–2 mg = 8+ h deep sleep with profound amnesia.",
    "The misuse/date-rape notoriety → Schedule controls, blue-dye formulation, US ban.",
    "Rarely a therapeutic choice anywhere today.",
    "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — severe insomnia (where legally available)",
      presentation: "A patient presenting with severe insomnia (where legally available), started on Flunitrazepam.",
      history: "A adult patient presents with a severe insomnia (where legally available) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with severe insomnia (where legally available); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Severe insomnia (where legally available). Differentials are considered and excluded clinically.",
      rationale: "Flunitrazepam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine Hypnotic) with strong evidence in this condition.",
      management: "Started at 1 mg at bedtime, titrated to 1–2 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Flunitrazepam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine Hypnotic comparison — choosing within the class",
      primaryDrug: "Flunitrazepam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting",
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
              drug: "Flurazepam",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Parent 18–26 h; active metabolite (7-aminoflunitrazepam) 20–36 h.",
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
              drug: "Estazolam",
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
              drug: "Estazolam",
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
          primaryValue: "The strictly-controlled potent hypnotic — pharmacology's misuse lesson",
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
      description: "Flunitrazepam reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (deep sedation with hangover, anterograde amnesia, muscle weakness, ataxia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (20–30 minutes.)",
      title: "Therapeutic effect builds",
      description: "20–30 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Flunitrazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Flunitrazepam take to work?",
      answer: "20–30 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Flunitrazepam?",
      answer: "The most frequently reported effects are: Deep sedation with hangover, Anterograde amnesia, Muscle weakness, ataxia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Flunitrazepam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Flunitrazepam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Flunitrazepam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Flunitrazepam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Flunitrazepam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), flunitrazepam monograph, p. 46",
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
        source: "FDA Prescribing Information for Rohypnol (where legally available) (Flunitrazepam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for flunitrazepam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Flunitrazepam",
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
      name: "Severe insomnia (where legally available)",
      relationship: "alternative",
    },
    {
      name: "Pre-anaesthetic sedation (historic)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Flunitrazepam",
      type: "drug",
      href: "/drugs/flunitrazepam",
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
      label: "GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Severe insomnia (where legally available)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Pre-anaesthetic sedation (historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Respiratory depression (potentiated by opioids/alcohol)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dependence — rapid and severe",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Deep sedation with hangover",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Flunitrazepam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The infamous one — Rohypnol: potent hypnotic benzo, strict controls, and a pharmacology lesson in misuse.",
    summary: "Flunitrazepam is a prescription medicine used to treat severe insomnia (where legally available). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Flunitrazepam is a medicine used to treat severe insomnia (where legally available). Ultra-potent long-acting benzodiazepine GABA-A PAM — hypnotic power with deep amnesia and a long tail. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
    sideEffects: "The most common side effects are: deep sedation with hangover, anterograde amnesia, muscle weakness, ataxia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression (potentiated by opioids/alcohol) and Dependence — rapid and severe. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: respiratory status and sedation (clinical review each visit); dependence review (every visit for long-term users); fall risk review (elderly) (every visit in older patients). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol and CNS depressants, Clozapine, Older antihistamines (sedating). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Rohypnol (heavily restricted)",
        manufacturer: "legacy",
        strengths: "1, 2 mg",
      },
    ],
    typicalDoses: "1–2 mg at bedtime (rarely appropriate).",
    prescribingScenarios: [
      "Essentially historical in Indian practice — restricted control.",
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
      "Strict controlled dispensing; amnesia counselling explicit.",
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
        name: "Flunitrazepam",
        slug: "flunitrazepam",
        relationship: "This guide",
        distinguishing: "The strictly-controlled potent hypnotic — pharmacology's misuse lesson",
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
      question: "Which molecular target does Flunitrazepam primarily act on?",
      options: [
        "GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Flunitrazepam acts primarily at GABA-A benzodiazepine site (ultra-high-potency PAM) — long-acting. Ultra-potent long-acting benzodiazepine GABA-A PAM — hypnotic power with deep amnesia and a long tail.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Flunitrazepam?",
      options: ["Deep sedation with hangover", "Anterograde amnesia", "Muscle weakness, ataxia", "Weight gain"],
      correctIndex: 0,
      explanation: "Deep sedation with hangover — 1–2 mg for 8+ h with residual impairment.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Flunitrazepam for severe insomnia (strict-control markets)?",
      options: ["1–2 mg", "2 mg", "1–2 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For severe insomnia (strict-control markets): start 1 mg at bedtime, target 1–2 mg, maximum 2 mg. Under regulation only",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Flunitrazepam in two sentences.",
      answer: "Ultra-potent long-acting benzodiazepine GABA-A PAM — hypnotic power with deep amnesia and a long tail. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Flunitrazepam.",
      answer: "Severe insomnia (where legally available), Pre-anaesthetic sedation (historic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Flunitrazepam and how you would manage it.",
      answer: "Respiratory depression (potentiated by opioids/alcohol): Potency + misuse context = the class's deadliest member. Management: Airway support; flumazenil caution.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Flunitrazepam require?",
      answer: "Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Flunitrazepam that separates safe prescribers from unsafe ones.",
      answer: "The regulatory arc: medical hypnotic → misuse notoriety → blue-dye reformulation → bans — pharmacology meeting society.",
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
      checkpoint: "You now know what Flunitrazepam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Flunitrazepam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Flunitrazepam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Flunitrazepam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Flunitrazepam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Flunitrazepam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["20–30 minutes."],
    ifItWorks: [
      "Continue Flunitrazepam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Flunitrazepam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Flunitrazepam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Severe insomnia (strict-control markets)",
        starting: "1 mg at bedtime",
        titration: "Under regulation only",
        target: "1–2 mg",
        max: "2 mg",
      },
    ],
    dosageForms: [
      "Tablets 1, 2 mg (blue-core formulations in some markets)",
    ],
    dosingTips: [
      "Know it for forensics and pharmacology; never initiate therapeutically where alternatives exist.",
    ],
    overdose: [
      "Overdose with Flunitrazepam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Flunitrazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Parent 18–26 h; active metabolite (7-aminoflunitrazepam) 20–36 h..",
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
      "Potent hypnotic effect where nothing else has worked (rare).",
    ],
    potentialDisadvantages: ["Notoriety + strict controls.", "Amnesia and misuse profile.", "Long metabolite tail.", "Banned/restricted in most countries."],
    primaryTargetSymptoms: ["Severe insomnia (strict control only)"],
    pearls: [
      "The regulatory arc: medical hypnotic → misuse notoriety → blue-dye reformulation → bans — pharmacology meeting society.",
      "Potency ceiling of the class: ~10× diazepam mg-for-mg with deep amnesia — powerful medicine and dangerous tool.",
      "Forensic awareness: amnesia + delayed detection drove formulation changes; detection windows matter in assault workups.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
