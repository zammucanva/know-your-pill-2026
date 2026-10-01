import type { Drug } from "../types";

/**
 * Milnacipran — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), milnacipran monograph (book p. 80)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const milnacipran: Drug = {
  /* ---- Identity ---- */
  slug: "milnacipran",
  genericName: "Milnacipran",
  brandNames: ["Savella", "Ixel (Europe)"],
  drugClass: "snri",
  drugClassLabel: "SNRI",
  drugClassFullName: "Serotonin-Norepinephrine Reuptake Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SNRIs", "Milnacipran"],
  /* ---- Hero / summary ---- */
  tagline: "The fibromyalgia SNRI — pain and fatigue in one noradrenergic tilt.",
  summary: "Milnacipran is the racemic SNRI with norepinephrine preference approved for FIBROMYALGIA in the USA (and used for depression in Europe/Asia): its noradrenergic tilt addresses pain, fatigue, and the physical-burden dimension of fibromyalgia better than its serotonin-tilted cousins.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Milnacipran — from its molecular target (SERT and NET (inhibition — NET-preferring)) to clinical effect.",
    "List the FDA-approved and off-label uses of Milnacipran.",
    "Predict the common and serious side effects of Milnacipran from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Milnacipran.",
    "Compare Milnacipran with other snris and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Milnacipran inhibits norepinephrine reuptake preferentially over serotonin — the SNRI shaped for pain and fatigue syndromes.",
    molecularTarget: "SERT and NET (inhibition — NET-preferring)",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Milnacipran inhibits norepinephrine reuptake preferentially over serotonin — the SNRI shaped for pain and fatigue syndromes.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 6-8 hours (twice-daily dosing). — see mechanism and prescriber sections.",
    halfLife: "6-8 hours (twice-daily dosing).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Milnacipran",
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
      name: "Fibromyalgia",
      status: "fda-approved",
      description: "The USA indication: pain, fatigue, and global improvement in fibromyalgia.",
    },
    {
      name: "Major depressive disorder (Europe/Asia)",
      status: "guideline",
      description: "The original indication in its origin markets.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Milnacipran must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      description: "Noradrenergic signature.",
      management: "Reassurance.",
    },
    {
      name: "Urinary hesitation (men)",
      frequency: "common",
      severity: "moderate",
      description: "The class tell.",
      management: "Ask; manage.",
    },
    {
      name: "Palpitations and BP rise",
      frequency: "common",
      severity: "moderate",
      description: "Noradrenergic tilt.",
      management: "HR/BP monitoring.",
    },
    {
      name: "Constipation and dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Noradrenergic effects.",
      management: "Symptomatic care.",
    },
    {
      name: "Hot flushes",
      frequency: "common",
      severity: "mild",
      description: "Reported effect.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hypertension and tachycardia",
      frequency: "uncommon",
      severity: "severe",
      description: "Dose-related noradrenergic cardiovascular effect.",
      management: "Monitor; reduce; treat.",
    },
    {
      name: "Serotonin syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Washout rules.",
    },
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "severe",
      description: "Rare liver injury reports — avoid in significant liver disease and alcohol misuse.",
      management: "LFT vigilance.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline and titration",
      rationale: "Noradrenergic tilt.",
    },
    {
      parameter: "Urinary symptoms (men)",
      frequency: "At review",
      rationale: "Class tell.",
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
      drug: "Other serotonergics",
      severity: "major",
      mechanism: "Class risk.",
      action: "Counsel.",
    },
    {
      drug: "Alcohol",
      severity: "moderate",
      mechanism: "Hepatic burden.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; class considerations.",
    lactation: "Limited data.",
  },
  renalAdjustment: "Halve dose at CrCl 30-80; avoid below 30.",
  hepaticAdjustment: "Avoid in significant hepatic impairment (hepatotoxicity reports).",
  /* ---- Education ---- */
  patientExplanation: "Milnacipran is an antidepressant-class medicine approved for fibromyalgia: it raises noradrenaline (energy and pain-pathway chemical) more than serotonin, helping the widespread pain and tiredness of fibromyalgia. Its characteristic effects are heavy sweating, a faster pulse, and — in men — trouble starting urination.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Milnacipran builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The fibromyalgia niche: dual pain + fatigue coverage in one noradrenergic-tilted SNRI — duloxetine is the serotonin-tilted competitor.",
    "Twice-daily dosing with a stepped titration — the fibromyalgia protocol is the product.",
    "Urinary hesitation and sweating are the class tells (noradrenergic tilt made visible).",
    "Depression approval in Europe/Asia, fibromyalgia in the USA — the geography of indications.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Milnacipran: Milnacipran inhibits norepinephrine reuptake preferentially over serotonin — the SNRI shaped for pain and fatigue syndromes.",
        "Uses of Milnacipran: Fibromyalgia; Major depressive disorder (Europe/Asia)",
        "Mechanism: SNRI with NET preference.",
        "USA indication: FIBROMYALGIA (pain + fatigue).",
      ],
      practical: [
        "Prescribe Milnacipran for fibromyalgia with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline and titration); Urinary symptoms (men) (At review)",
      ],
      longAnswer: [
        "Milnacipran: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SNRI with NET preference.",
        "USA indication: FIBROMYALGIA (pain + fatigue).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SNRI with NET preference.",
        "USA indication: FIBROMYALGIA (pain + fatigue).",
        "Depression approved in European/Asian markets.",
        "Signature: sweating, urinary hesitation, HR/BP rise.",
        "Dose 50-100 mg bd after stepped titration.",
        "Rare hepatotoxicity — caution in liver disease/alcohol.",
      ],
      pyqConcepts: [
        "Mechanism/target of Milnacipran",
        "Key adverse effect: Hypertension and tachycardia",
        "Dosing and titration of Milnacipran",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Milnacipran develops hypertension and tachycardia — next best step?",
        "When to choose Milnacipran over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: SERT and NET (inhibition — NET-preferring)",
        "Most common side effects: Nausea, Sweating, Urinary hesitation (men)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The fibromyalgia niche: dual pain + fatigue coverage in one noradrenergic-tilted SNRI — duloxetine is the serotonin-tilted competitor.",
        "Twice-daily dosing with a stepped titration — the fibromyalgia protocol is the product.",
        "Urinary hesitation and sweating are the class tells (noradrenergic tilt made visible).",
        "Depression approval in Europe/Asia, fibromyalgia in the USA — the geography of indications.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SNRI with NET preference.",
    "USA indication: FIBROMYALGIA (pain + fatigue).",
    "Depression approved in European/Asian markets.",
    "Signature: sweating, urinary hesitation, HR/BP rise.",
    "Dose 50-100 mg bd after stepped titration.",
    "Rare hepatotoxicity — caution in liver disease/alcohol.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — fibromyalgia",
      presentation: "A patient presenting with fibromyalgia, started on Milnacipran.",
      history: "A adult patient presents with a fibromyalgia picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with fibromyalgia; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Fibromyalgia. Differentials are considered and excluded clinically.",
      rationale: "Milnacipran is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SNRI) with strong evidence in this condition.",
      management: "Started at 12.5 mg once daily × 1 day, titrated to 50-100 mg twice daily with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Milnacipran takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SNRI comparison — choosing within the class",
      primaryDrug: "Milnacipran",
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
              drug: "Levomilnacipran",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "6-8 hours (twice-daily dosing).",
          comparisons: [
            {
              drug: "Desvenlafaxine",
              value: "—",
            },
            {
              drug: "Levomilnacipran",
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
              drug: "Levomilnacipran",
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
              drug: "Levomilnacipran",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The fibromyalgia SNRI — pain + fatigue coverage",
          comparisons: [
            {
              drug: "Desvenlafaxine",
              value: "The simplified SNRI — venlafaxine's metabolite packaged",
            },
            {
              drug: "Levomilnacipran",
              value: "The NE-tilted SNRI — for the anergic depression phenotype",
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
      description: "Milnacipran reaches peak plasma concentration and begins acting at its molecular target (SERT and NET (inhibition — NET-preferring)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea, sweating, urinary hesitation (men)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Fibromyalgia response over 2-4 weeks.)",
      title: "Therapeutic effect builds",
      description: "Fibromyalgia response over 2-4 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Milnacipran is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Milnacipran take to work?",
      answer: "Fibromyalgia response over 2-4 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Milnacipran?",
      answer: "The most frequently reported effects are: Nausea, Sweating, Urinary hesitation (men), Palpitations and BP rise, Constipation and dry mouth. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Milnacipran suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Milnacipran habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Milnacipran exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Milnacipran during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Milnacipran may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), milnacipran monograph, p. 80",
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
        source: "FDA Prescribing Information for Savella (Milnacipran)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for milnacipran — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Milnacipran",
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
      name: "Levomilnacipran",
      slug: "levomilnacipran",
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
      name: "Fibromyalgia",
      relationship: "primary",
    },
    {
      name: "Major depressive disorder (Europe/Asia)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Milnacipran",
      type: "drug",
      href: "/drugs/milnacipran",
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
      label: "Fibromyalgia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Major depressive disorder (Europe/Asia)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hypertension and tachycardia",
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
      label: "Patient Guide — Milnacipran",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The fibromyalgia SNRI — pain and fatigue in one noradrenergic tilt.",
    summary: "Milnacipran is a prescription medicine used to treat fibromyalgia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Milnacipran is an antidepressant-class medicine approved for fibromyalgia: it raises noradrenaline (energy and pain-pathway chemical) more than serotonin, helping the widespread pain and tiredness of fibromyalgia. Its characteristic effects are heavy sweating, a faster pulse, and — in men — trouble starting urination.",
    sideEffects: "The most common side effects are: nausea, sweating, urinary hesitation (men), palpitations and bp rise, constipation and dry mouth, hot flushes. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hypertension and tachycardia and Serotonin syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline and titration); urinary symptoms (men) (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Other serotonergics, Alcohol. Avoid alcohol unless your doctor says it is safe.",
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
    prescribingScenarios: ["Rare imported use."],
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
        name: "Milnacipran",
        slug: "milnacipran",
        relationship: "This guide",
        distinguishing: "The fibromyalgia SNRI — pain + fatigue coverage",
      },
      {
        name: "Desvenlafaxine",
        slug: "desvenlafaxine",
        relationship: "Same class (SNRI)",
        distinguishing: "The simplified SNRI — venlafaxine's metabolite packaged",
      },
      {
        name: "Levomilnacipran",
        slug: "levomilnacipran",
        relationship: "Same class (SNRI)",
        distinguishing: "The NE-tilted SNRI — for the anergic depression phenotype",
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
      question: "Which molecular target does Milnacipran primarily act on?",
      options: [
        "SERT and NET (inhibition — NET-preferring)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Milnacipran acts primarily at SERT and NET (inhibition — NET-preferring). Milnacipran inhibits norepinephrine reuptake preferentially over serotonin — the SNRI shaped for pain and fatigue syndromes.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Milnacipran?",
      options: ["Nausea", "Sweating", "Urinary hesitation (men)", "Palpitations and BP rise"],
      correctIndex: 0,
      explanation: "Nausea — Class effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Milnacipran for fibromyalgia (titration)?",
      options: ["50-100 mg twice daily", "200 mg/day", "50-100 mg twice daily (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For fibromyalgia (titration): start 12.5 mg once daily × 1 day, target 50-100 mg twice daily, maximum 200 mg/day. 12.5 bd × 2 days → 25 bd → 50 bd → 100 bd as tolerated",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Milnacipran in two sentences.",
      answer: "Milnacipran inhibits norepinephrine reuptake preferentially over serotonin — the SNRI shaped for pain and fatigue syndromes. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Milnacipran.",
      answer: "Fibromyalgia, Major depressive disorder (Europe/Asia). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Milnacipran and how you would manage it.",
      answer: "Hypertension and tachycardia: Dose-related noradrenergic cardiovascular effect. Management: Monitor; reduce; treat.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Milnacipran require?",
      answer: "Heart rate and blood pressure (Baseline and titration); Urinary symptoms (men) (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Milnacipran that separates safe prescribers from unsafe ones.",
      answer: "The fibromyalgia niche: dual pain + fatigue coverage in one noradrenergic-tilted SNRI — duloxetine is the serotonin-tilted competitor.",
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
      checkpoint: "You now know what Milnacipran is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Milnacipran works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Milnacipran safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Milnacipran.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Milnacipran with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Milnacipran.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Fibromyalgia response over 2-4 weeks."],
    ifItWorks: [
      "Continue Milnacipran at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Milnacipran (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Milnacipran follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Fibromyalgia (titration)",
        starting: "12.5 mg once daily × 1 day",
        titration: "12.5 bd × 2 days → 25 bd → 50 bd → 100 bd as tolerated",
        target: "50-100 mg twice daily",
        max: "200 mg/day",
      },
    ],
    dosageForms: ["Tablets 12.5, 25, 50, 100 mg"],
    dosingTips: [
      "Follow the stepped titration.",
      "Ask about urinary hesitation and sweating.",
      "HR/BP at each visit.",
    ],
    overdose: [
      "Overdose with Milnacipran is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Milnacipran is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 6-8 hours (twice-daily dosing)..",
      "Metabolism: Hepatic CYP metabolism..",
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
    potentialAdvantages: ["Pain + fatigue dual coverage.", "Fibromyalgia-specific approval (USA)."],
    potentialDisadvantages: ["Twice-daily stepped dosing.", "Noradrenergic adverse-effect set.", "Hepatotoxicity caution."],
    primaryTargetSymptoms: ["Fibromyalgia pain and fatigue", "Depression (origin markets)"],
    pearls: [
      "The fibromyalgia niche: dual pain + fatigue coverage in one noradrenergic-tilted SNRI — duloxetine is the serotonin-tilted competitor.",
      "Twice-daily dosing with a stepped titration — the fibromyalgia protocol is the product.",
      "Urinary hesitation and sweating are the class tells (noradrenergic tilt made visible).",
      "Depression approval in Europe/Asia, fibromyalgia in the USA — the geography of indications.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
