import type { Drug } from "../types";

/**
 * Hydroxyzine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), hydroxyzine monograph (book p. 56)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const hydroxyzine: Drug = {
  /* ---- Identity ---- */
  slug: "hydroxyzine",
  genericName: "Hydroxyzine",
  brandNames: ["Atarax", "Vistaril", "Hydroxyzine (generic)"],
  drugClass: "antihistamine",
  drugClassLabel: "Antihistamine",
  drugClassFullName: "Sedating Antihistamine Anxiolytic",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Antihistamines", "Hydroxyzine"],
  /* ---- Hero / summary ---- */
  tagline: "The antihistamine anxiolytic — sedating calm without benzodiazepine dependence.",
  summary: "Hydroxyzine is a first-generation antihistamine (H1 blocker) used for anxiety and pruritus: it produces sedating anxiolysis without GABA-ergic dependence, making it a useful benzodiazepine-sparing option — including in pregnancy, where it has a long safety record. Its limitations are the antihistamine ceiling: sedation, dry mouth, and tolerance to the anxiolytic effect.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Hydroxyzine — from its molecular target (H1 histamine receptor (antagonist — first-generation, brain-penetrant)) to clinical effect.",
    "List the FDA-approved and off-label uses of Hydroxyzine.",
    "Predict the common and serious side effects of Hydroxyzine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Hydroxyzine.",
    "Compare Hydroxyzine with other antihistamines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Hydroxyzine blocks central H1 receptors, reducing histaminergic wake drive — sedation used deliberately as anxiolysis, without dependence.",
    molecularTarget: "H1 histamine receptor (antagonist — first-generation, brain-penetrant)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Hydroxyzine blocks central H1 receptors, reducing histaminergic wake drive — sedation used deliberately as anxiolysis, without dependence.",
      "The target engagement translates into the clinical effect.",
      "Practical use follows the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 20 hours. — see mechanism and prescriber sections.",
    halfLife: "About 20 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Hydroxyzine",
        sublabel: "H1 antihistamine",
        variant: "inhibit",
      },
      {
        id: "h1",
        label: "H1 receptor",
        sublabel: "Histamine receptor in cortex",
        variant: "target",
      },
      {
        id: "wake",
        label: "Histaminergic wake drive",
        sublabel: "Reduced",
        variant: "process",
      },
      {
        id: "effect",
        label: "Sedation + anxiolysis",
        sublabel: "Not an anxiolytic receptor target per se — sedation does the work",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "h1",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "h1",
        to: "wake",
        label: "dampens",
      },
      {
        from: "wake",
        to: "effect",
        label: "produces",
      },
    ],
    caption: "Antihistamine anxiolysis is really antihistamine sedation — effective short-term, but tolerance develops and next-day grogginess is common.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Histamine"],
  receptors: ["H1 receptor (antagonist)"],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Anxiety and tension (short-term)",
      status: "fda-approved",
      description: "Sedating anxiolysis for acute situational anxiety.",
    },
    {
      name: "Pruritus (itching) — urticaria and allergic conditions",
      status: "fda-approved",
      description: "The antihistamine indication: itching, hives, allergic reactions.",
    },
    {
      name: "Pre- and post-operative sedation",
      status: "off-label",
      description: "Sedative adjunct in procedural settings.",
    },
    {
      name: "Insomnia (short-term)",
      status: "off-label",
      description: "Sedation used deliberately.",
    },
    {
      name: "Alcohol withdrawal (adjunct)",
      status: "guideline",
      description: "Benzodiazepine-sparing sedative cover in selected protocols.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Hydroxyzine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "The therapeutic effect and the dose-limiting one.",
      management: "Night dosing; warn about driving.",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Anticholinergic-adjacent effect.",
      management: "Sips; gum.",
    },
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "Class effect.",
      management: "Rise slowly.",
    },
    {
      name: "Tolerance to anxiolysis (weeks)",
      frequency: "common",
      severity: "moderate",
      description: "The antihistamine ceiling — benefit fades with regular use.",
      management: "Intermittent use preferred; reassess at review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "QT prolongation (high doses)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Dose-related QT effect — the reason for dose ceilings and caution with other QT drugs.",
      management: "Dose ceiling; ECG if risk factors; avoid QT combinations.",
    },
    {
      name: "Anticholinergic toxicity (elderly, overdose)",
      frequency: "uncommon",
      severity: "severe",
      description: "Confusion, urinary retention, ileus in the elderly.",
      management: "Avoid in elderly cognitive impairment; lowest doses.",
    },
    {
      name: "Falls (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Sedation-driven.",
      management: "Night-light; hazard review.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Sedation and falls review (elderly)",
      frequency: "Every visit",
      rationale: "The harm pathway in older patients.",
    },
  ],
  interactions: [
    {
      drug: "QT-prolonging drugs",
      severity: "major",
      mechanism: "Additive QT effect.",
      action: "Avoid; ECG if unavoidable.",
    },
    {
      drug: "Other anticholinergics and sedating antihistamines",
      severity: "major",
      mechanism: "Additive anticholinergic and sedative burden.",
      action: "Avoid combinations.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "moderate",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    summary: "Decades of use without clear teratogenic signal; considered acceptable for short courses when needed in pregnancy (first-generation antihistamine class comfort) — with per-trimester obstetric awareness.",
    lactation: "Excreted in milk — infant sedation possible; caution or avoid.",
  },
  renalAdjustment: "Reduce dose in renal impairment.",
  hepaticAdjustment: "Reduce dose in hepatic impairment (daily ceiling often 50-100 mg).",
  /* ---- Education ---- */
  patientExplanation: "Hydroxyzine is a calming antihistamine: it reduces the brain's wake-up chemical histamine, producing relief of anxiety and itching together with drowsiness. It is not addictive like benzodiazepine tranquillisers and works within about half an hour, but its calming effect weakens if taken daily for many weeks.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Hydroxyzine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The benzo-sparing sedative: hydroxyzine delivers GABA-free calm — no dependence, no respiratory interaction with opioids (in the classic sense), no withdrawal.",
    "Pregnancy record: decades of use give it a comfort zone benzodiazepines lack (with standard caution).",
    "Tolerance is the ceiling: the anxiolytic effect fades over weeks — plan for intermittent use, not indefinite daily dosing.",
    "The QT footnote: high-dose hydroxyzine carries a dose-related QT warning — respect the ceilings.",
    "Pruritus is the second life: itch and anxiety in one drug — useful in dermatology liaison.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Hydroxyzine: Hydroxyzine blocks central H1 receptors, reducing histaminergic wake drive — sedation used deliberately as anxiolysis, without dependence.",
        "Uses of Hydroxyzine: Anxiety and tension (short-term); Pruritus (itching) — urticaria and allergic conditions; Pre- and post-operative sedation; Insomnia (short-term)",
        "Mechanism: first-generation H1 ANTAGONIST — central sedation as anxiolysis.",
        "Indications: anxiety (short-term), pruritus/urticaria, pre-op sedation.",
      ],
      practical: [
        "Prescribe Hydroxyzine for anxiety and tension (short-term) with dose, timing, and duration.",
        "Outline the monitoring plan: Sedation and falls review (elderly) (Every visit)",
      ],
      longAnswer: [
        "Hydroxyzine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: first-generation H1 ANTAGONIST — central sedation as anxiolysis.",
        "Indications: anxiety (short-term), pruritus/urticaria, pre-op sedation.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: first-generation H1 ANTAGONIST — central sedation as anxiolysis.",
        "Indications: anxiety (short-term), pruritus/urticaria, pre-op sedation.",
        "No dependence or abuse potential.",
        "Dose-related QT prolongation (respect ceilings).",
        "Tolerance develops over weeks — intermittent use preferred.",
        "Elderly: anticholinergic and falls cautions.",
      ],
      pyqConcepts: [
        "Mechanism/target of Hydroxyzine",
        "Key adverse effect: QT prolongation (high doses)",
        "Dosing and titration of Hydroxyzine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Hydroxyzine develops qt prolongation (high doses) — next best step?",
        "When to choose Hydroxyzine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: H1 histamine receptor (antagonist — first-generation, brain-penetrant)",
        "Most common side effects: Sedation and drowsiness, Dry mouth, Dizziness",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The benzo-sparing sedative: hydroxyzine delivers GABA-free calm — no dependence, no respiratory interaction with opioids (in the classic sense), no withdrawal.",
        "Pregnancy record: decades of use give it a comfort zone benzodiazepines lack (with standard caution).",
        "Tolerance is the ceiling: the anxiolytic effect fades over weeks — plan for intermittent use, not indefinite daily dosing.",
        "The QT footnote: high-dose hydroxyzine carries a dose-related QT warning — respect the ceilings.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: first-generation H1 ANTAGONIST — central sedation as anxiolysis.",
    "Indications: anxiety (short-term), pruritus/urticaria, pre-op sedation.",
    "No dependence or abuse potential.",
    "Dose-related QT prolongation (respect ceilings).",
    "Tolerance develops over weeks — intermittent use preferred.",
    "Elderly: anticholinergic and falls cautions.",
    "Pregnancy: long record of use with standard caution.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — anxiety and tension (short-term)",
      presentation: "A patient presenting with anxiety and tension (short-term), started on Hydroxyzine.",
      history: "A adult patient presents with a anxiety and tension (short-term) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with anxiety and tension (short-term); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Anxiety and tension (short-term). Differentials are considered and excluded clinically.",
      rationale: "Hydroxyzine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Antihistamine) with strong evidence in this condition.",
      management: "Started at 25-50 mg up to four times daily, titrated to 50-100 mg/day divided with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Hydroxyzine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Antihistamine comparison — choosing within the class",
      primaryDrug: "Hydroxyzine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "H1 histamine receptor (antagonist — first-generation, brain-penetrant)",
          comparisons: [
            {
              drug: "Diphenhydramine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 20 hours.",
          comparisons: [
            {
              drug: "Diphenhydramine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral.",
          comparisons: [
            {
              drug: "Diphenhydramine",
              value: "Weight neutral.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Diphenhydramine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The antihistamine anxiolytic — benzo-sparing sedation",
          comparisons: [
            {
              drug: "Diphenhydramine",
              value: "The OTC sedative + the EPS rescue — and the anticholinergic caution",
            },
          ],
        },
      ],
      takeaway: "All antihistamines share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Hydroxyzine reaches peak plasma concentration and begins acting at its molecular target (H1 histamine receptor (antagonist — first-generation, brain-penetrant)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, dry mouth, dizziness). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Sedation within 30-60 minutes.)",
      title: "Therapeutic effect builds",
      description: "Sedation within 30-60 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Hydroxyzine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Hydroxyzine take to work?",
      answer: "Sedation within 30-60 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Hydroxyzine?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Dry mouth, Dizziness, Tolerance to anxiolysis (weeks). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Hydroxyzine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Hydroxyzine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Hydroxyzine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Hydroxyzine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Hydroxyzine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG113 (Anxiety); BNF Guidance",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), hydroxyzine monograph, p. 56",
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
        source: "FDA Prescribing Information for Atarax (Hydroxyzine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for hydroxyzine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Hydroxyzine",
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
      name: "Diphenhydramine",
      slug: "diphenhydramine",
      drugClass: "Antihistamine",
      relationship: "Same class (Antihistamine)",
    },
  ],
  relatedConditions: [
    {
      name: "Anxiety and tension (short-term)",
      relationship: "primary",
    },
    {
      name: "Pruritus (itching) — urticaria and allergic conditions",
      relationship: "primary",
    },
    {
      name: "Pre- and post-operative sedation",
      relationship: "off-label",
    },
    {
      name: "Insomnia (short-term)",
      relationship: "off-label",
    },
    {
      name: "Alcohol withdrawal (adjunct)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Hydroxyzine",
      type: "drug",
      href: "/drugs/hydroxyzine",
      note: "The drug you're reading about",
    },
    {
      label: "Antihistamine",
      type: "class",
      href: "#mechanism",
      note: "Sedating Antihistamine Anxiolytic",
    },
    {
      label: "Histamine",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "H1 histamine receptor (antagonist — first-generation, brain-penetrant)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Anxiety and tension (short-term)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Pruritus (itching) — urticaria and allergic conditions",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Pre- and post-operative sedation",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "QT prolongation (high doses)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Anticholinergic toxicity (elderly, overdose)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and drowsiness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Hydroxyzine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The antihistamine anxiolytic — sedating calm without benzodiazepine dependence.",
    summary: "Hydroxyzine is a prescription medicine used to treat anxiety and tension (short-term). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Hydroxyzine is a calming antihistamine: it reduces the brain's wake-up chemical histamine, producing relief of anxiety and itching together with drowsiness. It is not addictive like benzodiazepine tranquillisers and works within about half an hour, but its calming effect weakens if taken daily for many weeks.",
    sideEffects: "The most common side effects are: sedation and drowsiness, dry mouth, dizziness, tolerance to anxiolysis (weeks). These usually appear early and many settle with time. Serious effects are uncommon but important to know: QT prolongation (high doses) and Anticholinergic toxicity (elderly, overdose). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: sedation and falls review (elderly) (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: QT-prolonging drugs, Other anticholinergics and sedating antihistamines, Alcohol and CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Atarax",
        manufacturer: "Pfizer legacy/generics",
        strengths: "10, 25 mg",
      },
      {
        name: "Hydroxyzine generic",
        manufacturer: "multiple",
        strengths: "10-50 mg",
      },
    ],
    typicalDoses: "25-50 mg bd-tds (anxiety); 25 mg nocte (itch/insomnia).",
    prescribingScenarios: [
      "OPD anxiety where benzodiazepines are to be avoided.",
      "Dermatology liaison: anxious itchers.",
      "Pregnancy anxiety short courses with obstetric awareness.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Sedation/falls review in elderly.",
    patientCounselling: [
      "Drowsiness expected — no driving at first.",
      "Not for continuous daily use over months.",
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
    available: true,
    note: "Generic hydroxyzine available in many kendras.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Antihistamines",
    members: [
      {
        name: "Hydroxyzine",
        slug: "hydroxyzine",
        relationship: "This guide",
        distinguishing: "The antihistamine anxiolytic — benzo-sparing sedation",
      },
      {
        name: "Diphenhydramine",
        slug: "diphenhydramine",
        relationship: "Same class (Antihistamine)",
        distinguishing: "The OTC sedative + the EPS rescue — and the anticholinergic caution",
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
      question: "Which molecular target does Hydroxyzine primarily act on?",
      options: [
        "H1 histamine receptor (antagonist — first-generation, brain-penetrant)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Hydroxyzine acts primarily at H1 histamine receptor (antagonist — first-generation, brain-penetrant). Hydroxyzine blocks central H1 receptors, reducing histaminergic wake drive — sedation used deliberately as anxiolysis, without dependence.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Hydroxyzine?",
      options: ["Sedation and drowsiness", "Dry mouth", "Dizziness", "Tolerance to anxiolysis (weeks)"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — The therapeutic effect and the dose-limiting one.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Hydroxyzine for anxiety (short-term)?",
      options: ["50-100 mg/day divided", "400 mg/day (short-term exceptional)", "50-100 mg/day divided (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For anxiety (short-term): start 25-50 mg up to four times daily, target 50-100 mg/day divided, maximum 400 mg/day (short-term exceptional). Lowest effective dose; intermittent use preferred",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Hydroxyzine in two sentences.",
      answer: "Hydroxyzine blocks central H1 receptors, reducing histaminergic wake drive — sedation used deliberately as anxiolysis, without dependence. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Hydroxyzine.",
      answer: "Anxiety and tension (short-term), Pruritus (itching) — urticaria and allergic conditions, Pre- and post-operative sedation, Insomnia (short-term). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Hydroxyzine and how you would manage it.",
      answer: "QT prolongation (high doses): Dose-related QT effect — the reason for dose ceilings and caution with other QT drugs. Management: Dose ceiling; ECG if risk factors; avoid QT combinations.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Hydroxyzine require?",
      answer: "Sedation and falls review (elderly) (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Hydroxyzine that separates safe prescribers from unsafe ones.",
      answer: "The benzo-sparing sedative: hydroxyzine delivers GABA-free calm — no dependence, no respiratory interaction with opioids (in the classic sense), no withdrawal.",
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
      checkpoint: "You now know what Hydroxyzine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Hydroxyzine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Hydroxyzine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Hydroxyzine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Hydroxyzine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Hydroxyzine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Sedation within 30-60 minutes."],
    ifItWorks: [
      "Continue Hydroxyzine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Hydroxyzine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Hydroxyzine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Anxiety (short-term)",
        starting: "25-50 mg up to four times daily",
        titration: "Lowest effective dose; intermittent use preferred",
        target: "50-100 mg/day divided",
        max: "400 mg/day (short-term exceptional)",
      },
    ],
    dosageForms: ["Tablets 10, 25, 50 mg", "Capsules (Vistaril)", "Syrup 10 mg/5 mL", "Injection (some markets)"],
    dosingTips: ["Night-weighted dosing.", "Intermittent use beats continuous.", "Respect dose ceilings (QT)."],
    overdose: [
      "Overdose with Hydroxyzine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Hydroxyzine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 20 hours..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["No dependence.", "Anxiolysis + antipruritic in one.", "Pregnancy comfort record.", "Fast onset (unlike buspirone)."],
    potentialDisadvantages: ["Sedation; driving impairment.", "Tolerance over weeks.", "QT ceiling.", "Anticholinergic burden in elderly."],
    primaryTargetSymptoms: ["Acute anxiety and tension", "Pruritus", "Short-term insomnia"],
    pearls: [
      "The benzo-sparing sedative: hydroxyzine delivers GABA-free calm — no dependence, no respiratory interaction with opioids (in the classic sense), no withdrawal.",
      "Pregnancy record: decades of use give it a comfort zone benzodiazepines lack (with standard caution).",
      "Tolerance is the ceiling: the anxiolytic effect fades over weeks — plan for intermittent use, not indefinite daily dosing.",
      "The QT footnote: high-dose hydroxyzine carries a dose-related QT warning — respect the ceilings.",
      "Pruritus is the second life: itch and anxiety in one drug — useful in dermatology liaison.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
