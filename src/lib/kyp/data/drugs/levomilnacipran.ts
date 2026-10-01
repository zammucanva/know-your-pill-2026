import type { Drug } from "../types";

/**
 * Levomilnacipran — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), levomilnacipran monograph (book p. 63)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const levomilnacipran: Drug = {
  /* ---- Identity ---- */
  slug: "levomilnacipran",
  genericName: "Levomilnacipran",
  brandNames: ["Fetzima"],
  drugClass: "snri",
  drugClassLabel: "SNRI",
  drugClassFullName: "Serotonin-Norepinephrine Reuptake Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SNRIs", "Levomilnacipran"],
  /* ---- Hero / summary ---- */
  tagline: "The norepinephrine-preferring SNRI — milnacipran's active enantiomer with noradrenergic tilt.",
  summary: "Levomilnacipran is the 1S,2R-enantiomer of milnacipran: an SNRI with NORA-drenaline preference (NET inhibition stronger than SERT) — theoretically energising for anergic, fatigued depression. Approved for MDD in the USA, it inherits the milnacipran class's noradrenergic adverse-effect texture: sweating, urinary hesitation, and cardiovascular monitoring.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Levomilnacipran — from its molecular target (SERT and NET (inhibition — NET-preferring)) to clinical effect.",
    "List the FDA-approved and off-label uses of Levomilnacipran.",
    "Predict the common and serious side effects of Levomilnacipran from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Levomilnacipran.",
    "Compare Levomilnacipran with other snris and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Levomilnacipran inhibits norepinephrine reuptake more potently than serotonin — the noradrenergic-tilted SNRI.",
    molecularTarget: "SERT and NET (inhibition — NET-preferring)",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Levomilnacipran inhibits norepinephrine reuptake more potently than serotonin — the noradrenergic-tilted SNRI.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 12 hours. — see mechanism and prescriber sections.",
    halfLife: "About 12 hours.",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Levomilnacipran",
        sublabel: "Antidepressant",
        variant: "inhibit",
      },
      {
        id: "trans",
        label: "SERT + NET",
        sublabel: "Dual reuptake pumps blocked",
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
  neurotransmitters: ["Norepinephrine (NE)", "Serotonin (5-HT)"],
  receptors: ["NET (preferentially inhibited)", "SERT (inhibited)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder",
      status: "fda-approved",
      description: "40-120 mg/day extended-release.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Levomilnacipran must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Serotonin syndrome.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Suicidal thoughts and behaviours in children, adolescents, and young adults",
      text: "Antidepressants increased the risk of suicidal thinking and behaviour in short-term studies in children, adolescents, and young adults with MDD and other psychiatric disorders. All patients should be monitored closely for clinical worsening, suicidality, and unusual behaviour changes, especially in the first 1-2 months.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description: "Class effect.",
      management: "With food.",
    },
    {
      name: "Sweating",
      frequency: "very-common",
      severity: "mild",
      description: "The noradrenergic signature — more than serotonin-tilted SNRIs.",
      management: "Reassurance; clothing strategy.",
    },
    {
      name: "Heart rate and blood pressure rise",
      frequency: "common",
      severity: "moderate",
      description: "Noradrenergic tilt = cardiovascular tilt.",
      management: "HR/BP monitoring.",
    },
    {
      name: "Urinary hesitation (men)",
      frequency: "common",
      severity: "moderate",
      description: "Noradrenergic sphincter effect — the milnacipran class signature.",
      management: "Counsel; tamsulosin rarely; dose review.",
    },
    {
      name: "Dry mouth and constipation",
      frequency: "common",
      severity: "mild",
      description: "Noradrenergic effects.",
      management: "Symptomatic care.",
    },
    {
      name: "Erectile dysfunction",
      frequency: "common",
      severity: "moderate",
      description: "Class effect.",
      management: "Counsel.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Sustained hypertension/tachycardia",
      frequency: "uncommon",
      severity: "severe",
      description: "The noradrenergic dose-limit.",
      management: "Monitor; reduce; treat if sustained.",
    },
    {
      name: "Serotonin syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "SERT activity aboard.",
      management: "Washout rules.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "common",
      severity: "moderate",
      description: "Short half-life class effect.",
      management: "Taper.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline and titration",
      rationale: "The noradrenergic tilt's toll.",
    },
    {
      parameter: "Urinary symptoms (men)",
      frequency: "At review",
      rationale: "The class tell.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Serotonin syndrome.",
      action: "14-day washout.",
    },
    {
      drug: "Serotonergics and NSAIDs",
      severity: "major",
      mechanism: "Class risks.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; class considerations apply.",
    lactation: "Limited data.",
  },
  renalAdjustment: "Halve dose at CrCl 30-59; avoid below 30.",
  hepaticAdjustment: "No adjustment for mild-moderate.",
  /* ---- Education ---- */
  patientExplanation: "Levomilnacipran is an antidepressant that works more strongly on noradrenaline — the brain chemical linked with energy and drive — than on serotonin, which suits depressions dominated by tiredness and slowing. Its characteristic effects are sweating, a faster pulse, and, in men, difficulty starting urination.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Levomilnacipran builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The noradrenergic thesis: if fatigue, anergy, and psychomotor slowing dominate, tilt the SNRI toward norepinephrine — levomilnacipran is that tilt.",
    "Urinary hesitation is the class tell: noradrenergic sphincter effects in men — ask, or patients quietly stop.",
    "Sweating beyond SSRI levels: the noradrenergic skin signature.",
    "The cardiovascular price of the tilt: HR/BP monitoring is not optional at 80-120 mg.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Levomilnacipran: Levomilnacipran inhibits norepinephrine reuptake more potently than serotonin — the noradrenergic-tilted SNRI.",
        "Uses of Levomilnacipran: Major depressive disorder",
        "Mechanism: SNRI with NET PREFERENCE (norepinephrine-tilted).",
        "MDD approved (USA); 40-120 mg ER once daily.",
      ],
      practical: [
        "Prescribe Levomilnacipran for major depressive disorder with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline and titration); Urinary symptoms (men) (At review)",
      ],
      longAnswer: [
        "Levomilnacipran: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SNRI with NET PREFERENCE (norepinephrine-tilted).",
        "MDD approved (USA); 40-120 mg ER once daily.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SNRI with NET PREFERENCE (norepinephrine-tilted).",
        "MDD approved (USA); 40-120 mg ER once daily.",
        "Signature effects: sweating, urinary hesitation, HR/BP rise (noradrenergic).",
        "The enantiomer of milnacipran (racemic parent).",
        "Class suicidality warning; MAOI rules; taper on stopping.",
      ],
      pyqConcepts: [
        "Mechanism/target of Levomilnacipran",
        "Key adverse effect: Sustained hypertension/tachycardia",
        "Dosing and titration of Levomilnacipran",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Levomilnacipran develops sustained hypertension/tachycardia — next best step?",
        "When to choose Levomilnacipran over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: SERT and NET (inhibition — NET-preferring)",
        "Most common side effects: Nausea, Sweating, Heart rate and blood pressure rise",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The noradrenergic thesis: if fatigue, anergy, and psychomotor slowing dominate, tilt the SNRI toward norepinephrine — levomilnacipran is that tilt.",
        "Urinary hesitation is the class tell: noradrenergic sphincter effects in men — ask, or patients quietly stop.",
        "Sweating beyond SSRI levels: the noradrenergic skin signature.",
        "The cardiovascular price of the tilt: HR/BP monitoring is not optional at 80-120 mg.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SNRI with NET PREFERENCE (norepinephrine-tilted).",
    "MDD approved (USA); 40-120 mg ER once daily.",
    "Signature effects: sweating, urinary hesitation, HR/BP rise (noradrenergic).",
    "The enantiomer of milnacipran (racemic parent).",
    "Class suicidality warning; MAOI rules; taper on stopping.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder",
      presentation: "A patient presenting with major depressive disorder, started on Levomilnacipran.",
      history: "A adult patient presents with a major depressive disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder. Differentials are considered and excluded clinically.",
      rationale: "Levomilnacipran is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SNRI) with strong evidence in this condition.",
      management: "Started at 20 mg once daily × 2 days, titrated to 40-120 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Levomilnacipran takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SNRI comparison — choosing within the class",
      primaryDrug: "Levomilnacipran",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "SERT and NET (inhibition — NET-preferring)",
          comparisons: [
            {
              drug: "Desvenlafaxine",
              value: "See full guide",
            },
            {
              drug: "Milnacipran",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 12 hours.",
          comparisons: [
            {
              drug: "Desvenlafaxine",
              value: "—",
            },
            {
              drug: "Milnacipran",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
          comparisons: [
            {
              drug: "Desvenlafaxine",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Milnacipran",
              value: "Weight neutral to mild gain (agent-specific).",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Desvenlafaxine",
              value: "Agent-specific.",
            },
            {
              drug: "Milnacipran",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The NE-tilted SNRI — for the anergic depression phenotype",
          comparisons: [
            {
              drug: "Desvenlafaxine",
              value: "The simplified SNRI — venlafaxine's metabolite packaged",
            },
            {
              drug: "Milnacipran",
              value: "The fibromyalgia SNRI — pain + fatigue coverage",
            },
          ],
        },
      ],
      takeaway: "All snris share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Levomilnacipran reaches peak plasma concentration and begins acting at its molecular target (SERT and NET (inhibition — NET-preferring)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea, sweating, heart rate and blood pressure rise). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Response 2-4 weeks.)",
      title: "Therapeutic effect builds",
      description: "Response 2-4 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Levomilnacipran is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Levomilnacipran take to work?",
      answer: "Response 2-4 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Levomilnacipran?",
      answer: "The most frequently reported effects are: Nausea, Sweating, Heart rate and blood pressure rise, Urinary hesitation (men), Dry mouth and constipation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Levomilnacipran suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Levomilnacipran habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Levomilnacipran exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Levomilnacipran during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Levomilnacipran may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE Clinical Guideline CG91 (Depression in adults); APA MDD Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), levomilnacipran monograph, p. 63",
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
        source: "FDA Prescribing Information for Fetzima (Levomilnacipran)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for levomilnacipran — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Levomilnacipran",
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
      name: "Desvenlafaxine",
      slug: "desvenlafaxine",
      drugClass: "SNRI",
      relationship: "Same class (SNRI)",
    },
    {
      name: "Milnacipran",
      slug: "milnacipran",
      drugClass: "SNRI",
      relationship: "Same class (SNRI)",
    },
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      drugClass: "Established agent",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Major depressive disorder",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Levomilnacipran",
      type: "drug",
      href: "/drugs/levomilnacipran",
      note: "The drug you're reading about",
    },
    {
      label: "SNRI",
      type: "class",
      href: "#mechanism",
      note: "Serotonin-Norepinephrine Reuptake Inhibitor",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "SERT and NET (inhibition — NET-preferring)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Major depressive disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Sustained hypertension/tachycardia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Serotonin syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Levomilnacipran",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The norepinephrine-preferring SNRI — milnacipran's active enantiomer with noradrenergic tilt.",
    summary: "Levomilnacipran is a prescription medicine used to treat major depressive disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Levomilnacipran is an antidepressant that works more strongly on noradrenaline — the brain chemical linked with energy and drive — than on serotonin, which suits depressions dominated by tiredness and slowing. Its characteristic effects are sweating, a faster pulse, and, in men, difficulty starting urination.",
    sideEffects: "The most common side effects are: nausea, sweating, heart rate and blood pressure rise, urinary hesitation (men), dry mouth and constipation, erectile dysfunction. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Sustained hypertension/tachycardia and Serotonin syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline and titration); urinary symptoms (men) (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Serotonergics and NSAIDs. Avoid alcohol unless your doctor says it is safe.",
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
    prescribingScenarios: ["US prescriptions continued rarely."],
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
    familyName: "SNRIs",
    members: [
      {
        name: "Levomilnacipran",
        slug: "levomilnacipran",
        relationship: "This guide",
        distinguishing: "The NE-tilted SNRI — for the anergic depression phenotype",
      },
      {
        name: "Desvenlafaxine",
        slug: "desvenlafaxine",
        relationship: "Same class (SNRI)",
        distinguishing: "The simplified SNRI — venlafaxine's metabolite packaged",
      },
      {
        name: "Milnacipran",
        slug: "milnacipran",
        relationship: "Same class (SNRI)",
        distinguishing: "The fibromyalgia SNRI — pain + fatigue coverage",
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
      question: "Which molecular target does Levomilnacipran primarily act on?",
      options: [
        "SERT and NET (inhibition — NET-preferring)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Levomilnacipran acts primarily at SERT and NET (inhibition — NET-preferring). Levomilnacipran inhibits norepinephrine reuptake more potently than serotonin — the noradrenergic-tilted SNRI.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Levomilnacipran?",
      options: ["Nausea", "Sweating", "Heart rate and blood pressure rise", "Urinary hesitation (men)"],
      correctIndex: 0,
      explanation: "Nausea — Class effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Levomilnacipran for major depressive disorder?",
      options: ["40-120 mg/day", "120 mg/day", "40-120 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For major depressive disorder: start 20 mg once daily × 2 days, target 40-120 mg/day, maximum 120 mg/day. Increase to 40 mg; titrate by 40 mg at ≥ 2-day intervals to 80-120",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Levomilnacipran in two sentences.",
      answer: "Levomilnacipran inhibits norepinephrine reuptake more potently than serotonin — the noradrenergic-tilted SNRI. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Levomilnacipran.",
      answer: "Major depressive disorder. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Levomilnacipran and how you would manage it.",
      answer: "Sustained hypertension/tachycardia: The noradrenergic dose-limit. Management: Monitor; reduce; treat if sustained.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Levomilnacipran require?",
      answer: "Heart rate and blood pressure (Baseline and titration); Urinary symptoms (men) (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Levomilnacipran that separates safe prescribers from unsafe ones.",
      answer: "The noradrenergic thesis: if fatigue, anergy, and psychomotor slowing dominate, tilt the SNRI toward norepinephrine — levomilnacipran is that tilt.",
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
      checkpoint: "You now know what Levomilnacipran is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Levomilnacipran works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Levomilnacipran safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Levomilnacipran.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Levomilnacipran with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Levomilnacipran.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Response 2-4 weeks."],
    ifItWorks: [
      "Continue Levomilnacipran at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Levomilnacipran (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Levomilnacipran follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral to mild gain (agent-specific).",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Major depressive disorder",
        starting: "20 mg once daily × 2 days",
        titration: "Increase to 40 mg; titrate by 40 mg at ≥ 2-day intervals to 80-120",
        target: "40-120 mg/day",
        max: "120 mg/day",
      },
    ],
    dosageForms: [
      "Extended-release capsules 20, 40, 80, 120 mg",
    ],
    dosingTips: [
      "Titrate by 40 mg steps.",
      "Ask men directly about urinary hesitation.",
      "HR/BP at each step.",
    ],
    overdose: [
      "Overdose with Levomilnacipran is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Levomilnacipran is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 12 hours..", "Metabolism: Hepatic CYP metabolism.."],
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
    potentialAdvantages: ["Energising noradrenergic profile.", "Once-daily ER."],
    potentialDisadvantages: [
      "Sweating and urinary effects.",
      "Cardiovascular monitoring.",
      "No clear efficacy edge over existing SNRIs.",
    ],
    primaryTargetSymptoms: ["Anergic, fatigued depression"],
    pearls: [
      "The noradrenergic thesis: if fatigue, anergy, and psychomotor slowing dominate, tilt the SNRI toward norepinephrine — levomilnacipran is that tilt.",
      "Urinary hesitation is the class tell: noradrenergic sphincter effects in men — ask, or patients quietly stop.",
      "Sweating beyond SSRI levels: the noradrenergic skin signature.",
      "The cardiovascular price of the tilt: HR/BP monitoring is not optional at 80-120 mg.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
