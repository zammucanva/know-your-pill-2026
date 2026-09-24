import type { Drug } from "../types";

/**
 * Flibanserin — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), flibanserin monograph (book p. 44)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const flibanserin: Drug = {
  /* ---- Identity ---- */
  slug: "flibanserin",
  genericName: "Flibanserin",
  brandNames: ["Addyi"],
  drugClass: "libido-enhancer",
  drugClassLabel: "Libido Enhancer",
  drugClassFullName: "Serotonin-Dopamine Modulator (HSDD)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Specialised Agents", "Libido Enhancers", "Flibanserin"],
  /* ---- Hero / summary ---- */
  tagline: "The HSDD drug — serotonin-dopamine rebalancing for desire, at bedtime with alcohol rules.",
  summary: "Flibanserin is the first drug approved for female sexual interest/arousal disorder (HSDD): a 5-HT1A agonist + 5-HT2A antagonist that lowers serotonergic inhibition and raises dopaminergic drive — desire pharmacology at the CNS level. Bedtime dosing minimises hypotension/syncope; the boxed alcohol-interaction warning defines its governance.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Flibanserin — from its molecular target (5-HT1A (agonist) + 5-HT2A (antagonist) — serotonergic inhibition reduced, dopaminergic drive increased) to clinical effect.",
    "List the FDA-approved and off-label uses of Flibanserin.",
    "Predict the common and serious side effects of Flibanserin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Flibanserin.",
    "Compare Flibanserin with other libido enhancers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Flibanserin agonises 5-HT1A and antagonises 5-HT2A, reducing serotonergic inhibition of sexual desire while increasing dopaminergic and noradrenergic activity in desire circuits.",
    molecularTarget: "5-HT1A (agonist) + 5-HT2A (antagonist) — serotonergic inhibition reduced, dopaminergic drive increased",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Flibanserin agonises 5-HT1A and antagonises 5-HT2A, reducing serotonergic inhibition of sexual desire while increasing dopaminergic and noradrenergic activity in desire circuits.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 11 hours. — see mechanism and prescriber sections.",
    halfLife: "11 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Flibanserin",
        sublabel: "Antidepressant",
        variant: "inhibit",
      },
      {
        id: "trans",
        label: "Monoamine transporter",
        sublabel: "Presynaptic reuptake pump",
        variant: "target",
      },
      {
        id: "mono",
        label: "Monoamines",
        sublabel: "Synaptic availability increases",
        variant: "output",
      },
      {
        id: "adapt",
        label: "Neuroadaptive changes",
        sublabel: "Receptor desensitisation, BDNF rise",
        variant: "process",
      },
      {
        id: "effect",
        label: "Antidepressant response",
        sublabel: "Weeks 2–6",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "trans",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "trans",
        to: "mono",
        label: "raises",
        type: "stimulate",
      },
      {
        from: "mono",
        to: "adapt",
        label: "triggers",
      },
      {
        from: "adapt",
        to: "effect",
        label: "produces",
      },
    ],
    caption: "Acute reuptake blockade within hours; clinical response after weeks of downstream adaptation — the central paradox of antidepressant pharmacology.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Dopamine (DA)", "Norepinephrine (NE)"],
  receptors: ["5-HT1A (agonist)", "5-HT2A (antagonist)"],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Acquired, generalised hypoactive sexual desire disorder in premenopausal women",
      status: "fda-approved",
      description: "100 mg at bedtime after a structured diagnosis of HSDD — desire disorders with distress, not relationship or situational problems.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Flibanserin must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Alcohol",
      severity: "absolute",
      rationale: "Hypotension/syncope — the boxed rule (no alcohol within 2 h before dosing at minimum).",
    },
    {
      name: "Moderate-strong CYP3A4 inhibitors (fluconazole, diltiazem, grapefruit)",
      severity: "absolute",
      rationale: "Markedly raised levels.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Hypotension and syncope with alcohol and CYP3A4 inhibitors",
      text: "Alcohol use close to dosing, moderate/strong 3A4 inhibitors (including grapefruit juice), and hepatic impairment raise flibanserin levels causing hypotension and syncope. Bedtime-only dosing and the interaction rules are conditions of use.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Somnolence and dizziness",
      frequency: "very-common",
      severity: "mild",
      description: "The leading effects — bedtime dosing converts them into sleep.",
      management: "Strict bedtime dosing.",
    },
    {
      name: "Nausea and fatigue",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "With evening food.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hypotension and syncope (with alcohol, CYP3A4 inhibitors, or hepatic impairment)",
      frequency: "uncommon",
      severity: "severe",
      description: "The boxed-warning territory: co-administration with moderate-strong 3A4 inhibitors or alcohol causes hypotension/syncope.",
      management: "Alcohol abeyance 2 h before dose; absolute 3A4-inhibitor contraindication; morning-verification of alcohol abstinence per REMS-era practice.",
    },
    {
      name: "Severe CNS depression with alcohol",
      frequency: "uncommon",
      severity: "severe",
      description: "The alcohol-combination warning.",
      management: "Counselling; bedtime-only dosing.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Blood pressure and syncope symptoms",
      frequency: "Early reviews",
      rationale: "The boxed-warning territory.",
    },
    {
      parameter: "Benefit at 8 weeks",
      frequency: "Scheduled",
      rationale: "The stop-or-continue gate.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol",
      severity: "contraindicated",
      mechanism: "Hypotension/syncope — the boxed rule (no alcohol within 2 h before dosing at minimum).",
      action: "Counselling; bedtime abstinence strategy.",
    },
    {
      drug: "Moderate-strong CYP3A4 inhibitors (fluconazole, diltiazem, grapefruit)",
      severity: "contraindicated",
      mechanism: "Markedly raised levels.",
      action: "Absolute contraindication.",
    },
    {
      drug: "Hormonal contraceptives (weak 3A4 inhibitors)",
      severity: "moderate",
      mechanism: "Raise flibanserin modestly.",
      action: "Awareness.",
    },
  ],
  pregnancy: {
    summary: "Not applicable to the indication (premenopausal HSDD is non-pregnant by definition); avoid in pregnancy.",
    lactation: "Avoid.",
  },
  renalAdjustment: "No adjustment.",
  hepaticAdjustment: "Contraindicated in any hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Flibanserin is the first medicine for loss of sexual desire in premenopausal women (a specific diagnosed condition, not a passing phase or a relationship problem). It acts in the brain, balancing serotonin against dopamine — the chemicals that inhibit and drive desire. It is taken once daily at bedtime; alcohol must be avoided around the dose because the combination can drop blood pressure dangerously.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Flibanserin builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The diagnosis gate: HSDD is acquired-generalised loss of desire WITH distress — flibanserin treats the disorder, not the situation.",
    "The bedtime strategy: somnolence, dizziness, and hypotension risks are all tucked into sleep.",
    "The alcohol and 3A4 rules: boxed territory — the counselling that defines safe use.",
    "The 8-week verdict: stop if no benefit — an outcome-disciplined indication.",
    "The mechanism story: 5-HT1A agonism + 5-HT2A antagonism = disinhibited dopaminergic desire circuitry — CNS desire pharmacology.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Flibanserin: Flibanserin agonises 5-HT1A and antagonises 5-HT2A, reducing serotonergic inhibition of sexual desire while increasing dopaminergic and noradrenergic activity in desire circuits.",
        "Uses of Flibanserin: Acquired, generalised hypoactive sexual desire disorder in premenopausal women",
        "Mechanism: 5-HT1A AGONIST + 5-HT2A ANTAGONIST — central desire modulation (anti-serotonergic, pro-dopaminergic).",
        "Indication: acquired generalised HSDD in PREMENOPAUSAL women (the diagnosis gate).",
      ],
      practical: [
        "Prescribe Flibanserin for acquired, generalised hypoactive sexual desire disorder in premenopausal women with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure and syncope symptoms (Early reviews); Benefit at 8 weeks (Scheduled)",
      ],
      longAnswer: [
        "Flibanserin: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: 5-HT1A AGONIST + 5-HT2A ANTAGONIST — central desire modulation (anti-serotonergic, pro-dopaminergic).",
        "Indication: acquired generalised HSDD in PREMENOPAUSAL women (the diagnosis gate).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: 5-HT1A AGONIST + 5-HT2A ANTAGONIST — central desire modulation (anti-serotonergic, pro-dopaminergic).",
        "Indication: acquired generalised HSDD in PREMENOPAUSAL women (the diagnosis gate).",
        "Dose 100 mg BEDTIME only — somnolence/hypotension management.",
        "Boxed warnings: hypotension/syncope with alcohol and 3A4 inhibitors.",
        "Stop at 8 weeks without benefit.",
        "Not a hormone; not for situational desire problems.",
      ],
      pyqConcepts: [
        "Mechanism/target of Flibanserin",
        "Key adverse effect: Hypotension and syncope (with alcohol, CYP3A4 inhibitors, or hepatic impairment)",
        "Dosing and titration of Flibanserin",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Flibanserin develops hypotension and syncope (with alcohol, cyp3a4 inhibitors, or hepatic impairment) — next best step?",
        "When to choose Flibanserin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: 5-HT1A (agonist) + 5-HT2A (antagonist) — serotonergic inhibition reduced, dopaminergic drive increased",
        "Most common side effects: Somnolence and dizziness, Nausea and fatigue",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The diagnosis gate: HSDD is acquired-generalised loss of desire WITH distress — flibanserin treats the disorder, not the situation.",
        "The bedtime strategy: somnolence, dizziness, and hypotension risks are all tucked into sleep.",
        "The alcohol and 3A4 rules: boxed territory — the counselling that defines safe use.",
        "The 8-week verdict: stop if no benefit — an outcome-disciplined indication.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: 5-HT1A AGONIST + 5-HT2A ANTAGONIST — central desire modulation (anti-serotonergic, pro-dopaminergic).",
    "Indication: acquired generalised HSDD in PREMENOPAUSAL women (the diagnosis gate).",
    "Dose 100 mg BEDTIME only — somnolence/hypotension management.",
    "Boxed warnings: hypotension/syncope with alcohol and 3A4 inhibitors.",
    "Stop at 8 weeks without benefit.",
    "Not a hormone; not for situational desire problems.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — acquired, generalised hypoactive sexual desire disorder in premenopausal women",
      presentation: "A patient presenting with acquired, generalised hypoactive sexual desire disorder in premenopausal women, started on Flibanserin.",
      history: "A adult patient presents with a acquired, generalised hypoactive sexual desire disorder in premenopausal women picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with acquired, generalised hypoactive sexual desire disorder in premenopausal women; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Acquired, generalised hypoactive sexual desire disorder in premenopausal women. Differentials are considered and excluded clinically.",
      rationale: "Flibanserin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Libido Enhancer) with strong evidence in this condition.",
      management: "Started at 100 mg at bedtime, titrated to 100 mg nocte with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Flibanserin takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Libido Enhancer vs related agents — orientation table",
      primaryDrug: "Flibanserin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "5-HT1A (agonist) + 5-HT2A (antagonist) — serotonergic inhibition reduced, dopaminergic drive increased",
          comparisons: [
            {
              drug: "Flibanserin",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Flibanserin",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Flibanserin",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The HSDD pharmacotherapy — CNS desire modulation",
          comparisons: [
            {
              drug: "Flibanserin",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Flibanserin is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Flibanserin reaches peak plasma concentration and begins acting at its molecular target (5-HT1A (agonist) + 5-HT2A (antagonist) — serotonergic inhibition reduced, dopaminergic drive increased). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (somnolence and dizziness, nausea and fatigue). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Desire effects assessed at 4-8 weeks.)",
      title: "Therapeutic effect builds",
      description: "Desire effects assessed at 4-8 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Flibanserin is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Flibanserin take to work?",
      answer: "Desire effects assessed at 4-8 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Flibanserin?",
      answer: "The most frequently reported effects are: Somnolence and dizziness, Nausea and fatigue. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Flibanserin suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Flibanserin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Flibanserin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Flibanserin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Flibanserin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "FDA Guidance on HSDD",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), flibanserin monograph, p. 44",
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
        source: "FDA Prescribing Information for Addyi (Flibanserin)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for flibanserin — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Flibanserin",
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
      name: "Acquired, generalised hypoactive sexual desire disorder in premenopausal women",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Flibanserin",
      type: "drug",
      href: "/drugs/flibanserin",
      note: "The drug you're reading about",
    },
    {
      label: "Libido Enhancer",
      type: "class",
      href: "#mechanism",
      note: "Serotonin-Dopamine Modulator (HSDD)",
    },
    {
      label: "Serotonin (5-HT)",
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
      label: "5-HT1A (agonist) + 5-HT2A (antagonist) — serotonergic inhibition reduced, dopaminergic drive increased",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Acquired, generalised hypoactive sexual desire disorder in premenopausal women",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Hypotension and syncope (with alcohol, CYP3A4 inhibitors, or hepatic impairment)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Severe CNS depression with alcohol",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Somnolence and dizziness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Flibanserin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The HSDD drug — serotonin-dopamine rebalancing for desire, at bedtime with alcohol rules.",
    summary: "Flibanserin is a prescription medicine used to treat acquired, generalised hypoactive sexual desire disorder in premenopausal women. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Flibanserin is the first medicine for loss of sexual desire in premenopausal women (a specific diagnosed condition, not a passing phase or a relationship problem). It acts in the brain, balancing serotonin against dopamine — the chemicals that inhibit and drive desire. It is taken once daily at bedtime; alcohol must be avoided around the dose because the combination can drop blood pressure dangerously.",
    sideEffects: "The most common side effects are: somnolence and dizziness, nausea and fatigue. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hypotension and syncope (with alcohol, CYP3A4 inhibitors, or hepatic impairment) and Severe CNS depression with alcohol. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure and syncope symptoms (early reviews); benefit at 8 weeks (scheduled). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Alcohol, Moderate-strong CYP3A4 inhibitors (fluconazole, diltiazem, grapefruit), Hormonal contraceptives (weak 3A4 inhibitors). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Not marketed in India)",
        manufacturer: "—",
        strengths: "—",
      },
    ],
    typicalDoses: "—",
    prescribingScenarios: ["US prescriptions; rare tertiary import."],
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Libido Enhancers",
    members: [
      {
        name: "Flibanserin",
        slug: "flibanserin",
        relationship: "This guide",
        distinguishing: "The HSDD pharmacotherapy — CNS desire modulation",
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
      question: "Which molecular target does Flibanserin primarily act on?",
      options: [
        "5-HT1A (agonist) + 5-HT2A (antagonist) — serotonergic inhibition reduced, dopaminergic drive increased",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Flibanserin acts primarily at 5-HT1A (agonist) + 5-HT2A (antagonist) — serotonergic inhibition reduced, dopaminergic drive increased. Flibanserin agonises 5-HT1A and antagonises 5-HT2A, reducing serotonergic inhibition of sexual desire while increasing dopaminergic and noradrenergic activity in desire circuits.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Flibanserin?",
      options: ["Somnolence and dizziness", "Nausea and fatigue", "Weight gain", "Hair loss"],
      correctIndex: 0,
      explanation: "Somnolence and dizziness — The leading effects — bedtime dosing converts them into sleep.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Flibanserin for hsdd (premenopausal women)?",
      options: ["100 mg nocte", "100 mg/day", "100 mg nocte (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For hsdd (premenopausal women): start 100 mg at bedtime, target 100 mg nocte, maximum 100 mg/day. Once daily at bedtime only; discontinuation if no benefit by 8 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Flibanserin in two sentences.",
      answer: "Flibanserin agonises 5-HT1A and antagonises 5-HT2A, reducing serotonergic inhibition of sexual desire while increasing dopaminergic and noradrenergic activity in desire circuits. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Flibanserin.",
      answer: "Acquired, generalised hypoactive sexual desire disorder in premenopausal women. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Flibanserin and how you would manage it.",
      answer: "Hypotension and syncope (with alcohol, CYP3A4 inhibitors, or hepatic impairment): The boxed-warning territory: co-administration with moderate-strong 3A4 inhibitors or alcohol causes hypotension/syncope. Management: Alcohol abeyance 2 h before dose; absolute 3A4-inhibitor contraindication; morning-verification of alcohol abstinence per REMS-era practice.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Flibanserin require?",
      answer: "Blood pressure and syncope symptoms (Early reviews); Benefit at 8 weeks (Scheduled)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Flibanserin that separates safe prescribers from unsafe ones.",
      answer: "The diagnosis gate: HSDD is acquired-generalised loss of desire WITH distress — flibanserin treats the disorder, not the situation.",
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
      checkpoint: "You now know what Flibanserin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Flibanserin works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Flibanserin safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Flibanserin.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Flibanserin with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Flibanserin.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Desire effects assessed at 4-8 weeks."],
    ifItWorks: [
      "Continue Flibanserin at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Flibanserin (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Flibanserin follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Agent-specific.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "HSDD (premenopausal women)",
        starting: "100 mg at bedtime",
        titration: "Once daily at bedtime only; discontinuation if no benefit by 8 weeks",
        target: "100 mg nocte",
        max: "100 mg/day",
      },
    ],
    dosageForms: ["Tablets 100 mg"],
    dosingTips: [
      "Bedtime-only dosing.",
      "The diagnosis before the drug: HSDD is distress-linked and generalised.",
      "The 8-week stop rule.",
      "Alcohol and 3A4-inhibitor counselling is a prescribing condition.",
    ],
    overdose: [
      "Overdose with Flibanserin is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Flibanserin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 11 hours..", "Metabolism: Hepatic.."],
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
      "The first HSDD pharmacotherapy.",
      "CNS-mechanism (not hormonal).",
      "Bedtime strategy manages adverse effects.",
    ],
    potentialDisadvantages: ["Modest effect sizes.", "Alcohol/3A4 boxed warnings.", "8-week outcome discipline.", "Cost and availability."],
    primaryTargetSymptoms: [
      "Hypoactive sexual desire disorder (premenopausal)",
    ],
    pearls: [
      "The diagnosis gate: HSDD is acquired-generalised loss of desire WITH distress — flibanserin treats the disorder, not the situation.",
      "The bedtime strategy: somnolence, dizziness, and hypotension risks are all tucked into sleep.",
      "The alcohol and 3A4 rules: boxed territory — the counselling that defines safe use.",
      "The 8-week verdict: stop if no benefit — an outcome-disciplined indication.",
      "The mechanism story: 5-HT1A agonism + 5-HT2A antagonism = disinhibited dopaminergic desire circuitry — CNS desire pharmacology.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
