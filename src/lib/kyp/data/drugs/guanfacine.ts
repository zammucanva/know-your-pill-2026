import type { Drug } from "../types";

/**
 * Guanfacine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), guanfacine monograph (book p. 54)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const guanfacine: Drug = {
  /* ---- Identity ---- */
  slug: "guanfacine",
  genericName: "Guanfacine",
  brandNames: ["Intuniv (ER)", "Tenex (IR)"],
  drugClass: "alpha2-agonist",
  drugClassLabel: "Alpha-2 Agonist",
  drugClassFullName: "Alpha-2 Adrenergic Agonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Alpha-2 Agonists", "Guanfacine"],
  /* ---- Hero / summary ---- */
  tagline: "Clonidine's refined cousin — longer-acting alpha-2A selectivity with less sedation.",
  summary: "Guanfacine is the longer-acting, more alpha-2A-selective member of the alpha-2 pair: FDA-approved as ER monotherapy and adjunct for ADHD from age 6, with 24-hour cover, less sedation and hypotension than clonidine, and a tolerability profile that made it the preferred alpha-2 agent in modern child psychiatry. Rebound hypertension on abrupt withdrawal remains the class caution.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Guanfacine — from its molecular target (Central alpha-2A receptors (agonist — 15× more alpha-2A selective than clonidine)) to clinical effect.",
    "List the FDA-approved and off-label uses of Guanfacine.",
    "Predict the common and serious side effects of Guanfacine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Guanfacine.",
    "Compare Guanfacine with other alpha-2 agonists and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Guanfacine selectively agonises alpha-2A receptors, damping noradrenergic locus coeruleus firing — clonidine's mechanism with more selectivity and longer action.",
    molecularTarget: "Central alpha-2A receptors (agonist — 15× more alpha-2A selective than clonidine)",
    effect: "Catecholamine and wake-system enhancement with the agent's characteristic profile.",
    steps: [
      "Guanfacine selectively agonises alpha-2A receptors, damping noradrenergic locus coeruleus firing — clonidine's mechanism with more selectivity and longer action.",
      "Prefrontal catecholamine enhancement sharpens attention and impulse control.",
      "The agent's formulation and half-life determine practical coverage.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 17 hours. — see mechanism and prescriber sections.",
    halfLife: "About 17 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Guanfacine",
        sublabel: "Adrenergic agent",
        variant: "inhibit",
      },
      {
        id: "rec",
        label: "Adrenergic receptor",
        sublabel: "Postsynaptic target",
        variant: "target",
      },
      {
        id: "ne",
        label: "Norepinephrine signalling",
        sublabel: "Modulated",
        variant: "process",
      },
      {
        id: "effect",
        label: "Symptom relief",
        sublabel: "Clinical benefit",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "rec",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "rec",
        to: "ne",
        label: "modulates",
      },
      {
        from: "ne",
        to: "effect",
        label: "produces",
      },
    ],
    caption: "Modulating noradrenergic signalling at its receptor — a mechanism-driven route to symptom control.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Norepinephrine (NE)"],
  receptors: ["Alpha-2A adrenergic receptor (agonist)"],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "ADHD — ER monotherapy or adjunct (ages 6-17)",
      status: "fda-approved",
      description: "Once-daily ER: 24-h cover, less sedation than clonidine.",
    },
    {
      name: "Hypertension (IR)",
      status: "fda-approved",
      description: "The original indication.",
    },
    {
      name: "Tics (adjunct)",
      status: "off-label",
      description: "As for clonidine.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Guanfacine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and somnolence",
      frequency: "very-common",
      severity: "moderate",
      description: "Less than clonidine but still leading.",
      management: "Bedtime-first dosing; tolerance.",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Class effect.",
      management: "Sips; gum.",
    },
    {
      name: "Bradycardia and hypotension",
      frequency: "common",
      severity: "moderate",
      description: "Milder than clonidine.",
      management: "HR/BP monitoring.",
    },
    {
      name: "Abdominal pain, nausea",
      frequency: "common",
      severity: "mild",
      description: "Paediatric tolerability.",
      management: "With food.",
    },
    {
      name: "Rebound hypertension on abrupt withdrawal",
      frequency: "common",
      severity: "severe",
      description: "Class signature — taper always.",
      management: "Never stop abruptly.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Rebound hypertension on abrupt withdrawal",
      frequency: "common",
      severity: "severe",
      description: "Class signature.",
      management: "Taper always.",
    },
    {
      name: "Severe hypotension/bradycardia in combination",
      frequency: "uncommon",
      severity: "severe",
      description: "With antihypertensives/beta-blockers.",
      management: "Monitor; coordinate.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline, every visit",
      rationale: "Class surveillance.",
    },
    {
      parameter: "Sedation and function",
      frequency: "Every visit",
      rationale: "Tolerability balance.",
    },
  ],
  interactions: [
    {
      drug: "Beta-blockers and antihypertensives",
      severity: "major",
      mechanism: "Additive bradycardia/hypotension; co-taper rebound risk.",
      action: "Monitor; coordinate.",
    },
    {
      drug: "Strong CYP3A4 inhibitors/inducers",
      severity: "moderate",
      mechanism: "3A4-mediated levels shift.",
      action: "Monitor.",
    },
  ],
  pregnancy: {
    legacyCategory: "B",
    summary: "Limited human data; decisions individualised.",
    lactation: "Monitor infant sedation/BP if used.",
  },
  renalAdjustment: "Reduce in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Guanfacine is a refined version of a mild blood-pressure medicine that calms the brain's alarm system: approved as a once-daily non-stimulant for ADHD, giving round-the-clock help for overactivity and impulsivity with less sleepiness than its older cousin clonidine. As with that cousin, it must never be stopped suddenly.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Guanfacine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The refined cousin: alpha-2A selectivity (~15×) + longer half-life = less sedation/hypotension than clonidine with smoother 24-h cover.",
    "Stimulant + guanfacine ER is a guideline-recognised combination — each covers the other's blind spots.",
    "Taper rule identical to clonidine: rebound hypertension is a class property.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Guanfacine: Guanfacine selectively agonises alpha-2A receptors, damping noradrenergic locus coeruleus firing — clonidine's mechanism with more selectivity and longer action.",
        "Uses of Guanfacine: ADHD — ER monotherapy or adjunct (ages 6-17); Hypertension (IR); Tics (adjunct)",
        "Alpha-2A-SELECTIVE agonist — longer half-life (17 h).",
        "ER FDA-approved for ADHD 6-17 (mono + adjunct).",
      ],
      practical: [
        "Prescribe Guanfacine for adhd — er monotherapy or adjunct (ages 6-17) with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline, every visit); Sedation and function (Every visit)",
      ],
      longAnswer: [
        "Guanfacine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Alpha-2A-SELECTIVE agonist — longer half-life (17 h).",
        "ER FDA-approved for ADHD 6-17 (mono + adjunct).",
      ],
    },
    neetPg: {
      highYield: [
        "Alpha-2A-SELECTIVE agonist — longer half-life (17 h).",
        "ER FDA-approved for ADHD 6-17 (mono + adjunct).",
        "Less sedation/hypotension than clonidine.",
        "Same rebound-hypertension-on-withdrawal danger — taper.",
        "Weight-banded ER titration to 1-7 mg/day.",
      ],
      pyqConcepts: [
        "Mechanism/target of Guanfacine",
        "Key adverse effect: Rebound hypertension on abrupt withdrawal",
        "Dosing and titration of Guanfacine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Guanfacine develops rebound hypertension on abrupt withdrawal — next best step?",
        "When to choose Guanfacine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Central alpha-2A receptors (agonist — 15× more alpha-2A selective than clonidine)",
        "Most common side effects: Sedation and somnolence, Dry mouth, Bradycardia and hypotension",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The refined cousin: alpha-2A selectivity (~15×) + longer half-life = less sedation/hypotension than clonidine with smoother 24-h cover.",
        "Stimulant + guanfacine ER is a guideline-recognised combination — each covers the other's blind spots.",
        "Taper rule identical to clonidine: rebound hypertension is a class property.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Alpha-2A-SELECTIVE agonist — longer half-life (17 h).",
    "ER FDA-approved for ADHD 6-17 (mono + adjunct).",
    "Less sedation/hypotension than clonidine.",
    "Same rebound-hypertension-on-withdrawal danger — taper.",
    "Weight-banded ER titration to 1-7 mg/day.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — adhd — er monotherapy or adjunct (ages 6-17)",
      presentation: "A patient presenting with adhd — er monotherapy or adjunct (ages 6-17), started on Guanfacine.",
      history: "A adult patient presents with a adhd — er monotherapy or adjunct (ages 6-17) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with adhd — er monotherapy or adjunct (ages 6-17); physical examination and baseline investigations are unremarkable.",
      diagnosis: "ADHD — ER monotherapy or adjunct (ages 6-17). Differentials are considered and excluded clinically.",
      rationale: "Guanfacine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Alpha-2 Agonist) with strong evidence in this condition.",
      management: "Started at 1 mg every morning, titrated to 1-7 mg/day (weight-banded) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Guanfacine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Alpha-2 Agonist comparison — choosing within the class",
      primaryDrug: "Guanfacine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Central alpha-2A receptors (agonist — 15× more alpha-2A selective than clonidine)",
          comparisons: [
            {
              drug: "Clonidine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 17 hours.",
          comparisons: [
            {
              drug: "Clonidine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to reducing — appetite effects common.",
          comparisons: [
            {
              drug: "Clonidine",
              value: "Weight neutral to reducing — appetite effects common.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Not sedating.",
          comparisons: [
            {
              drug: "Clonidine",
              value: "Not sedating.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The refined alpha-2 agonist — ER-approved for ADHD",
          comparisons: [
            {
              drug: "Clonidine",
              value: "The 24-hour ADHD/tic adjunct — sedating but non-stimulant",
            },
          ],
        },
      ],
      takeaway: "All alpha-2 agonists share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Guanfacine reaches peak plasma concentration and begins acting at its molecular target (Central alpha-2A receptors (agonist — 15× more alpha-2A selective than clonidine)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and somnolence, dry mouth, bradycardia and hypotension). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Days to 2 weeks.)",
      title: "Therapeutic effect builds",
      description: "Days to 2 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Guanfacine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Guanfacine take to work?",
      answer: "Days to 2 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Guanfacine?",
      answer: "The most frequently reported effects are: Sedation and somnolence, Dry mouth, Bradycardia and hypotension, Abdominal pain, nausea, Rebound hypertension on abrupt withdrawal. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Guanfacine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Guanfacine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Guanfacine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Guanfacine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Guanfacine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE NG87 (ADHD); AAP ADHD Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), guanfacine monograph, p. 54",
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
        source: "FDA Prescribing Information for Intuniv (ER) (Guanfacine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for guanfacine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Guanfacine",
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
      name: "Clonidine",
      slug: "clonidine",
      drugClass: "Alpha-2 Agonist",
      relationship: "Same class (Alpha-2 Agonist)",
    },
  ],
  relatedConditions: [
    {
      name: "ADHD — ER monotherapy or adjunct (ages 6-17)",
      relationship: "primary",
    },
    {
      name: "Hypertension (IR)",
      relationship: "primary",
    },
    {
      name: "Tics (adjunct)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Guanfacine",
      type: "drug",
      href: "/drugs/guanfacine",
      note: "The drug you're reading about",
    },
    {
      label: "Alpha-2 Agonist",
      type: "class",
      href: "#mechanism",
      note: "Alpha-2 Adrenergic Agonist",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Central alpha-2A receptors (agonist — 15× more alpha-2A selective than clonidine)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "ADHD — ER monotherapy or adjunct (ages 6-17)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Hypertension (IR)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Tics (adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Rebound hypertension on abrupt withdrawal",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Severe hypotension/bradycardia in combination",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and somnolence",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Guanfacine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Clonidine's refined cousin — longer-acting alpha-2A selectivity with less sedation.",
    summary: "Guanfacine is a prescription medicine used to treat adhd — er monotherapy or adjunct (ages 6-17). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Guanfacine is a refined version of a mild blood-pressure medicine that calms the brain's alarm system: approved as a once-daily non-stimulant for ADHD, giving round-the-clock help for overactivity and impulsivity with less sleepiness than its older cousin clonidine. As with that cousin, it must never be stopped suddenly.",
    sideEffects: "The most common side effects are: sedation and somnolence, dry mouth, bradycardia and hypotension, abdominal pain, nausea, rebound hypertension on abrupt withdrawal. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Rebound hypertension on abrupt withdrawal and Severe hypotension/bradycardia in combination. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline, every visit); sedation and function (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Beta-blockers and antihypertensives, Strong CYP3A4 inhibitors/inducers. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Guanfacine ER (limited availability)",
        manufacturer: "imported/special",
        strengths: "1-4 mg",
      },
    ],
    typicalDoses: "ER 1 mg daily → weight-banded max.",
    prescribingScenarios: [
      "ADHD where clonidine sedation is excessive.",
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
    familyName: "Alpha-2 Agonists",
    members: [
      {
        name: "Guanfacine",
        slug: "guanfacine",
        relationship: "This guide",
        distinguishing: "The refined alpha-2 agonist — ER-approved for ADHD",
      },
      {
        name: "Clonidine",
        slug: "clonidine",
        relationship: "Same class (Alpha-2 Agonist)",
        distinguishing: "The 24-hour ADHD/tic adjunct — sedating but non-stimulant",
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
      question: "Which molecular target does Guanfacine primarily act on?",
      options: [
        "Central alpha-2A receptors (agonist — 15× more alpha-2A selective than clonidine)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Guanfacine acts primarily at Central alpha-2A receptors (agonist — 15× more alpha-2A selective than clonidine). Guanfacine selectively agonises alpha-2A receptors, damping noradrenergic locus coeruleus firing — clonidine's mechanism with more selectivity and longer action.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Guanfacine?",
      options: ["Sedation and somnolence", "Dry mouth", "Bradycardia and hypotension", "Abdominal pain, nausea"],
      correctIndex: 0,
      explanation: "Sedation and somnolence — Less than clonidine but still leading.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Guanfacine for adhd (er)?",
      options: ["1-7 mg/day (weight-banded)", "7 mg/day", "1-7 mg/day (weight-banded) (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For adhd (er): start 1 mg every morning, target 1-7 mg/day (weight-banded), maximum 7 mg/day. Increase by 1 mg weekly",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Guanfacine in two sentences.",
      answer: "Guanfacine selectively agonises alpha-2A receptors, damping noradrenergic locus coeruleus firing — clonidine's mechanism with more selectivity and longer action. Net effect: Catecholamine and wake-system enhancement with the agent's characteristic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Guanfacine.",
      answer: "ADHD — ER monotherapy or adjunct (ages 6-17), Hypertension (IR), Tics (adjunct). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Guanfacine and how you would manage it.",
      answer: "Rebound hypertension on abrupt withdrawal: Class signature. Management: Taper always.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Guanfacine require?",
      answer: "Heart rate and blood pressure (Baseline, every visit); Sedation and function (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Guanfacine that separates safe prescribers from unsafe ones.",
      answer: "The refined cousin: alpha-2A selectivity (~15×) + longer half-life = less sedation/hypotension than clonidine with smoother 24-h cover.",
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
      checkpoint: "You now know what Guanfacine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Guanfacine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Guanfacine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Guanfacine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Guanfacine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Guanfacine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Days to 2 weeks."],
    ifItWorks: [
      "Continue Guanfacine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Guanfacine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Guanfacine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "ADHD (ER)",
        starting: "1 mg every morning",
        titration: "Increase by 1 mg weekly",
        target: "1-7 mg/day (weight-banded)",
        max: "7 mg/day",
      },
    ],
    dosageForms: ["ER tablets 1-4 mg", "IR tablets 1, 2 mg"],
    dosingTips: ["Morning ER dosing.", "Weight-banded titration per label.", "Taper on stopping."],
    overdose: [
      "Overdose with Guanfacine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Guanfacine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 17 hours..", "Metabolism: Hepatic.."],
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
      "24-h ADHD cover with less sedation than clonidine.",
      "Approved mono + adjunct.",
    ],
    potentialDisadvantages: ["Class rebound danger.", "Cardiovascular monitoring.", "Weak for pure inattention."],
    primaryTargetSymptoms: [
      "Hyperactivity/impulsivity across the day",
      "Tics (adjunct)",
    ],
    pearls: [
      "The refined cousin: alpha-2A selectivity (~15×) + longer half-life = less sedation/hypotension than clonidine with smoother 24-h cover.",
      "Stimulant + guanfacine ER is a guideline-recognised combination — each covers the other's blind spots.",
      "Taper rule identical to clonidine: rebound hypertension is a class property.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
