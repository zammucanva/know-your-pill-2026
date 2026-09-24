import type { Drug } from "../types";

/**
 * Buspirone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), buspirone monograph (book p. 18)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const buspirone: Drug = {
  /* ---- Identity ---- */
  slug: "buspirone",
  genericName: "Buspirone",
  brandNames: ["Buspar", "Buspin / Anxipar (India)"],
  drugClass: "azapirone",
  drugClassLabel: "Azapirone",
  drugClassFullName: "5-HT1A Partial Agonist Anxiolytic",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Azapirones", "Buspirone"],
  /* ---- Hero / summary ---- */
  tagline: "The non-sedating anxiolytic — 5-HT1A partial agonism that takes weeks but spares dependence.",
  summary: "Buspirone is the azapirone anxiolytic: a 5-HT1A receptor partial agonist that gradually rebalances serotonergic tone over 2-4 weeks. It is neither sedating nor dependence-forming, does not interact with alcohol or augment respiratory depression, and does not impair driving — the properties that give it a niche despite anxiolytic potency below benzodiazepines. It cannot be used PRN and will not substitute for benzodiazepines acutely.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Buspirone — from its molecular target (5-HT1A receptor (partial agonist — pre- and post-synaptic)) to clinical effect.",
    "List the FDA-approved and off-label uses of Buspirone.",
    "Predict the common and serious side effects of Buspirone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Buspirone.",
    "Compare Buspirone with other azapirones and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Buspirone partially agonises 5-HT1A receptors, gradually adjusting serotonergic firing — anxiolysis that builds over weeks like an antidepressant.",
    molecularTarget: "5-HT1A receptor (partial agonist — pre- and post-synaptic)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Buspirone partially agonises 5-HT1A receptors, gradually adjusting serotonergic firing — anxiolysis that builds over weeks like an antidepressant.",
      "The target engagement translates into the clinical effect.",
      "Practical use follows the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 2-3 hours (short — divided daily dosing). — see mechanism and prescriber sections.",
    halfLife: "2-3 hours (short — divided daily dosing).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Buspirone",
        sublabel: "5-HT1A partial agonist",
        variant: "process",
      },
      {
        id: "5ht1a",
        label: "5-HT1A receptors",
        sublabel: "Presynaptic + postsynaptic",
        variant: "target",
      },
      {
        id: "ser",
        label: "Serotonergic tone",
        sublabel: "Gradually rebalanced",
        variant: "process",
      },
      {
        id: "effect",
        label: "Reduced anxiety",
        sublabel: "Without sedation or dependence",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "5ht1a",
        label: "partially activates",
        type: "stimulate",
      },
      {
        from: "5ht1a",
        to: "ser",
        label: "modulates",
      },
      {
        from: "ser",
        to: "effect",
        label: "over 2–4 weeks",
      },
    ],
    caption: "Partial agonism at 5-HT1A receptors gently rebalances serotonergic tone — anxiolysis that takes weeks but carries no dependence, sedation, or interaction with alcohol.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: ["5-HT1A receptor (partial agonist)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Generalised anxiety disorder",
      status: "fda-approved",
      description: "Second-line to SSRIs; 2-4 weeks to effect — not for acute anxiety.",
    },
    {
      name: "Antidepressant augmentation (partial response)",
      status: "off-label",
      description: "Reasonable evidence as an SSRI add-on for incomplete response.",
    },
    {
      name: "SSRI-emergent sexual dysfunction",
      status: "off-label",
      description: "The best-evidenced add-on for SSRI sexual adverse effects.",
    },
    {
      name: "Akathisia",
      status: "off-label",
      description: "The 5-HT1A mechanism can calm antipsychotic-induced restlessness.",
    },
    {
      name: "Smoking cessation / irritability (adjunct)",
      status: "off-label",
      description: "Selected use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Buspirone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Serotonin syndrome risk.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "The most common adverse effect.",
      management: "Dose with food; reassurance.",
    },
    {
      name: "Nausea and headache",
      frequency: "common",
      severity: "mild",
      description: "Usually early and transient.",
      management: "Reassurance.",
    },
    {
      name: "Nervousness or activation",
      frequency: "uncommon",
      severity: "mild",
      description: "Early activation in some.",
      management: "Dose review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Serotonin syndrome (with MAOIs/strong serotonergics)",
      frequency: "rare",
      severity: "life-threatening",
      description: "MAOI combination contraindicated.",
      management: "14-day washout rules.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Effect review at 2-4 weeks",
      frequency: "Once at steady therapeutic dose",
      rationale: "The patience-rule checkpoint.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Serotonin syndrome risk.",
      action: "14-day washout.",
    },
    {
      drug: "Strong CYP3A4 inhibitors (ketoconazole, clarithromycin)",
      severity: "major",
      mechanism: "Raise buspirone levels markedly (nausea, dizziness).",
      action: "Dose reduction.",
    },
    {
      drug: "Grapefruit juice",
      severity: "moderate",
      mechanism: "3A4 inhibition raises levels.",
      action: "Counsel.",
    },
    {
      drug: "Rifampicin and inducers",
      severity: "major",
      mechanism: "Eliminate buspirone effect (levels collapse).",
      action: "Avoid combination.",
    },
    {
      drug: "Haloperidol and digoxin (old data)",
      severity: "minor",
      mechanism: "Level changes reported.",
      action: "Awareness.",
    },
  ],
  pregnancy: {
    legacyCategory: "B",
    summary: "No teratogenic signal in available data — among the better-studied anxiolytics in pregnancy; still reserve for clear need.",
    lactation: "Excreted in milk in small amounts; monitor the infant.",
  },
  renalAdjustment: "Avoid in severe renal impairment.",
  hepaticAdjustment: "Avoid in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Buspirone is a non-sedating anti-anxiety medicine that works on the brain's serotonin system: it builds its effect over two to four weeks, like an antidepressant, and cannot be used 'as needed'. Its great advantages are that it is not addictive, does not cause drowsiness, does not interact with alcohol, and does not affect driving.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Buspirone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The expectations drug: buspirone's failure mode is patient expectation — it is an anxiolytic on antidepressant timescales, not a benzodiazepine on minutes.",
    "No dependence, no sedation, no alcohol interaction, no driving impairment — the safety profile benzodiazepines can never have.",
    "The sexual-dysfunction niche: buspirone + SSRI is the best-evidenced rescue for SSRI sexual adverse effects.",
    "PRN buspirone does nothing — prescribing it 'as needed' wastes everyone's time.",
    "2-week patience rule: judge at 2-4 weeks full dose, not on day 3.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Buspirone: Buspirone partially agonises 5-HT1A receptors, gradually adjusting serotonergic firing — anxiolysis that builds over weeks like an antidepressant.",
        "Uses of Buspirone: Generalised anxiety disorder; Antidepressant augmentation (partial response); SSRI-emergent sexual dysfunction; Akathisia",
        "Mechanism: 5-HT1A PARTIAL AGONIST — serotonergic tone rebalancing over weeks.",
        "Indication: GAD (2-4 week onset); NOT for acute/PRN anxiety.",
      ],
      practical: [
        "Prescribe Buspirone for generalised anxiety disorder with dose, timing, and duration.",
        "Outline the monitoring plan: Effect review at 2-4 weeks (Once at steady therapeutic dose)",
      ],
      longAnswer: [
        "Buspirone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: 5-HT1A PARTIAL AGONIST — serotonergic tone rebalancing over weeks.",
        "Indication: GAD (2-4 week onset); NOT for acute/PRN anxiety.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: 5-HT1A PARTIAL AGONIST — serotonergic tone rebalancing over weeks.",
        "Indication: GAD (2-4 week onset); NOT for acute/PRN anxiety.",
        "No dependence, no sedation, no respiratory interaction.",
        "Off-label stars: SSRI augmentation and SSRI sexual-dysfunction rescue.",
        "Dose 20-30 mg/day (to 60); divided dosing.",
        "MAOI contraindication.",
      ],
      pyqConcepts: [
        "Mechanism/target of Buspirone",
        "Key adverse effect: Serotonin syndrome (with MAOIs/strong serotonergics)",
        "Dosing and titration of Buspirone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Buspirone develops serotonin syndrome (with maois/strong serotonergics) — next best step?",
        "When to choose Buspirone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: 5-HT1A receptor (partial agonist — pre- and post-synaptic)",
        "Most common side effects: Dizziness, Nausea and headache, Nervousness or activation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The expectations drug: buspirone's failure mode is patient expectation — it is an anxiolytic on antidepressant timescales, not a benzodiazepine on minutes.",
        "No dependence, no sedation, no alcohol interaction, no driving impairment — the safety profile benzodiazepines can never have.",
        "The sexual-dysfunction niche: buspirone + SSRI is the best-evidenced rescue for SSRI sexual adverse effects.",
        "PRN buspirone does nothing — prescribing it 'as needed' wastes everyone's time.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: 5-HT1A PARTIAL AGONIST — serotonergic tone rebalancing over weeks.",
    "Indication: GAD (2-4 week onset); NOT for acute/PRN anxiety.",
    "No dependence, no sedation, no respiratory interaction.",
    "Off-label stars: SSRI augmentation and SSRI sexual-dysfunction rescue.",
    "Dose 20-30 mg/day (to 60); divided dosing.",
    "MAOI contraindication.",
    "Cannot replace benzodiazepines acutely or treat withdrawal.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — generalised anxiety disorder",
      presentation: "A patient presenting with generalised anxiety disorder, started on Buspirone.",
      history: "A adult patient presents with a generalised anxiety disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with generalised anxiety disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Generalised anxiety disorder. Differentials are considered and excluded clinically.",
      rationale: "Buspirone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Azapirone) with strong evidence in this condition.",
      management: "Started at 5 mg two to three times daily, titrated to 20-30 mg/day divided with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Buspirone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Azapirone vs related agents — orientation table",
      primaryDrug: "Buspirone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "5-HT1A receptor (partial agonist — pre- and post-synaptic)",
          comparisons: [
            {
              drug: "Buspirone",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral.",
          comparisons: [
            {
              drug: "Buspirone",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Buspirone",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The dependence-free anxiolytic — weeks not minutes",
          comparisons: [
            {
              drug: "Buspirone",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Buspirone is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Buspirone reaches peak plasma concentration and begins acting at its molecular target (5-HT1A receptor (partial agonist — pre- and post-synaptic)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (dizziness, nausea and headache, nervousness or activation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Anxiolysis builds over 2-4 weeks at therapeutic dose.)",
      title: "Therapeutic effect builds",
      description: "Anxiolysis builds over 2-4 weeks at therapeutic dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Buspirone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Buspirone take to work?",
      answer: "Anxiolysis builds over 2-4 weeks at therapeutic dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Buspirone?",
      answer: "The most frequently reported effects are: Dizziness, Nausea and headache, Nervousness or activation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Buspirone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Buspirone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Buspirone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Buspirone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Buspirone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG113 (Generalised Anxiety Disorder)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), buspirone monograph, p. 18",
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
        source: "FDA Prescribing Information for Buspar (Buspirone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for buspirone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Buspirone",
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/medication-guides",
      },
      {
        source: "NIMH — Mental Health Medications",
        url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
      },
    ],
  },
  relatedDrugs: [],
  relatedConditions: [
    {
      name: "Generalised anxiety disorder",
      relationship: "primary",
    },
    {
      name: "Antidepressant augmentation (partial response)",
      relationship: "off-label",
    },
    {
      name: "SSRI-emergent sexual dysfunction",
      relationship: "off-label",
    },
    {
      name: "Akathisia",
      relationship: "off-label",
    },
    {
      name: "Smoking cessation / irritability (adjunct)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Buspirone",
      type: "drug",
      href: "/drugs/buspirone",
      note: "The drug you're reading about",
    },
    {
      label: "Azapirone",
      type: "class",
      href: "#mechanism",
      note: "5-HT1A Partial Agonist Anxiolytic",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "5-HT1A receptor (partial agonist — pre- and post-synaptic)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Generalised anxiety disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Antidepressant augmentation (partial response)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "SSRI-emergent sexual dysfunction",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Serotonin syndrome (with MAOIs/strong serotonergics)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dizziness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Buspirone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The non-sedating anxiolytic — 5-HT1A partial agonism that takes weeks but spares dependence.",
    summary: "Buspirone is a prescription medicine used to treat generalised anxiety disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Buspirone is a non-sedating anti-anxiety medicine that works on the brain's serotonin system: it builds its effect over two to four weeks, like an antidepressant, and cannot be used 'as needed'. Its great advantages are that it is not addictive, does not cause drowsiness, does not interact with alcohol, and does not affect driving.",
    sideEffects: "The most common side effects are: dizziness, nausea and headache, nervousness or activation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Serotonin syndrome (with MAOIs/strong serotonergics). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: effect review at 2-4 weeks (once at steady therapeutic dose). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Strong CYP3A4 inhibitors (ketoconazole, clarithromycin), Grapefruit juice, Rifampicin and inducers. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Buspin",
        manufacturer: "Intas/others",
        strengths: "5, 10 mg",
      },
      {
        name: "Buspirone generic",
        manufacturer: "multiple",
        strengths: "5, 10 mg",
      },
    ],
    typicalDoses: "5 mg tds → 20-30 mg/day.",
    prescribingScenarios: [
      "GAD in patients refusing or unsuited to benzodiazepines.",
      "SSRI sexual-dysfunction add-on in private practice.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Effect review at 2-4 weeks.",
    patientCounselling: [
      "Give it 2-4 weeks — it is not a same-day medicine.",
      "Take with food, divided doses.",
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
    familyName: "Azapirones",
    members: [
      {
        name: "Buspirone",
        slug: "buspirone",
        relationship: "This guide",
        distinguishing: "The dependence-free anxiolytic — weeks not minutes",
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
      question: "Which molecular target does Buspirone primarily act on?",
      options: [
        "5-HT1A receptor (partial agonist — pre- and post-synaptic)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Buspirone acts primarily at 5-HT1A receptor (partial agonist — pre- and post-synaptic). Buspirone partially agonises 5-HT1A receptors, gradually adjusting serotonergic firing — anxiolysis that builds over weeks like an antidepressant.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Buspirone?",
      options: ["Dizziness", "Nausea and headache", "Nervousness or activation", "Weight gain"],
      correctIndex: 0,
      explanation: "Dizziness — The most common adverse effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Buspirone for generalised anxiety?",
      options: ["20-30 mg/day divided", "60 mg/day", "20-30 mg/day divided (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For generalised anxiety: start 5 mg two to three times daily, target 20-30 mg/day divided, maximum 60 mg/day. Increase by 5 mg/day every 2-3 days; effect assessed at 2-4 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Buspirone in two sentences.",
      answer: "Buspirone partially agonises 5-HT1A receptors, gradually adjusting serotonergic firing — anxiolysis that builds over weeks like an antidepressant. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Buspirone.",
      answer: "Generalised anxiety disorder, Antidepressant augmentation (partial response), SSRI-emergent sexual dysfunction, Akathisia. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Buspirone and how you would manage it.",
      answer: "Serotonin syndrome (with MAOIs/strong serotonergics): MAOI combination contraindicated. Management: 14-day washout rules.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Buspirone require?",
      answer: "Effect review at 2-4 weeks (Once at steady therapeutic dose)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Buspirone that separates safe prescribers from unsafe ones.",
      answer: "The expectations drug: buspirone's failure mode is patient expectation — it is an anxiolytic on antidepressant timescales, not a benzodiazepine on minutes.",
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
      checkpoint: "You now know what Buspirone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Buspirone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Buspirone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Buspirone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Buspirone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Buspirone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Anxiolysis builds over 2-4 weeks at therapeutic dose.",
    ],
    ifItWorks: [
      "Continue Buspirone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Buspirone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Buspirone follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Generalised anxiety",
        starting: "5 mg two to three times daily",
        titration: "Increase by 5 mg/day every 2-3 days; effect assessed at 2-4 weeks",
        target: "20-30 mg/day divided",
        max: "60 mg/day",
      },
    ],
    dosageForms: ["Tablets 5, 7.5, 10 mg", "Dividose scored tablets"],
    dosingTips: [
      "Set the 2-4 week expectation in writing.",
      "Divided dosing with food.",
      "The SSRI sexual-dysfunction add-on role is worth remembering.",
    ],
    overdose: [
      "Overdose with Buspirone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Buspirone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 2-3 hours (short — divided daily dosing)..",
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
    potentialAdvantages: ["No dependence or abuse potential.", "No sedation or alcohol interaction.", "Pregnancy-friendlier profile.", "Sexual-dysfunction rescue role."],
    potentialDisadvantages: [
      "Weeks to effect; useless PRN.",
      "Anxiolytic potency below benzodiazepines.",
      "3A4 interaction surface.",
      "Divided dosing.",
    ],
    primaryTargetSymptoms: ["Generalised anxiety (chronic)", "SSRI partial response (augmentation)", "SSRI sexual dysfunction"],
    pearls: [
      "The expectations drug: buspirone's failure mode is patient expectation — it is an anxiolytic on antidepressant timescales, not a benzodiazepine on minutes.",
      "No dependence, no sedation, no alcohol interaction, no driving impairment — the safety profile benzodiazepines can never have.",
      "The sexual-dysfunction niche: buspirone + SSRI is the best-evidenced rescue for SSRI sexual adverse effects.",
      "PRN buspirone does nothing — prescribing it 'as needed' wastes everyone's time.",
      "2-week patience rule: judge at 2-4 weeks full dose, not on day 3.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
