import type { Drug } from "../types";

/**
 * Reboxetine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), reboxetine monograph (book p. 109)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const reboxetine: Drug = {
  /* ---- Identity ---- */
  slug: "reboxetine",
  genericName: "Reboxetine",
  brandNames: ["Edronax", "Vestra"],
  drugClass: "nri",
  drugClassLabel: "NRI",
  drugClassFullName: "Norepinephrine Reuptake Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "NRIs", "Reboxetine"],
  /* ---- Hero / summary ---- */
  tagline: "The pure NRI — noradrenergic energy for the tired, apathetic depression.",
  summary: "Reboxetine is the selective norepinephrine reuptake inhibitor (NRI) antidepressant: pure NET blockade for the anergic, fatigued, apathetic depression phenotype. Approved in Europe (not the USA), with atomoxetine as its class cousin — cardiovascular effects and urinary hesitation the noradrenergic tax.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Reboxetine — from its molecular target (NET (selective inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Reboxetine.",
    "Predict the common and serious side effects of Reboxetine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Reboxetine.",
    "Compare Reboxetine with other nris and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Reboxetine selectively inhibits the norepinephrine transporter — pure noradrenergic antidepressant action.",
    molecularTarget: "NET (selective inhibition)",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Reboxetine selectively inhibits the norepinephrine transporter — pure noradrenergic antidepressant action.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 12-14 hours (divided dosing). — see mechanism and prescriber sections.",
    halfLife: "12-14 hours (divided dosing).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Reboxetine",
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
  neurotransmitters: ["Norepinephrine (NE)"],
  receptors: ["NET (selectively inhibited)"],
  brainRegionIds: ["prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder",
      status: "guideline",
      description: "8-10 mg/day divided; the noradrenergic-tilted antidepressant option in its markets.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Reboxetine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Class rule.",
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
      name: "Insomnia and sweating",
      frequency: "common",
      severity: "moderate",
      description: "Noradrenergic signature effects.",
      management: "Morning dosing; reassurance.",
    },
    {
      name: "Dry mouth and constipation",
      frequency: "common",
      severity: "mild",
      description: "Noradrenergic effects.",
      management: "Symptomatic care.",
    },
    {
      name: "Urinary hesitation (men)",
      frequency: "common",
      severity: "moderate",
      description: "The NRI class tell.",
      management: "Ask; manage.",
    },
    {
      name: "Tachycardia and BP rise",
      frequency: "common",
      severity: "moderate",
      description: "Noradrenergic cardiovascular tilt.",
      management: "HR/BP monitoring.",
    },
    {
      name: "Nausea and dizziness",
      frequency: "common",
      severity: "mild",
      description: "Early effects.",
      management: "With food.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Sustained hypertension",
      frequency: "uncommon",
      severity: "severe",
      description: "Noradrenergic dose-limit.",
      management: "Monitor; reduce.",
    },
    {
      name: "Urinary retention (prostatic men)",
      frequency: "uncommon",
      severity: "severe",
      description: "NET sphincter effect.",
      management: "Caution; urology review.",
    },
    {
      name: "Serotonin-syndrome-like interactions (weak)",
      frequency: "rare",
      severity: "moderate",
      description: "Minimal serotonergic activity — fewer SSRI interactions than most antidepressants.",
      management: "Standard MAOI caution stands.",
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
      mechanism: "Class rule.",
      action: "14-day washout.",
    },
    {
      drug: "Erythromycin and CYP3A4 inhibitors",
      severity: "major",
      mechanism: "Raise reboxetine levels.",
      action: "Dose reduction.",
    },
    {
      drug: "Fluvoxamine and fluoxetine",
      severity: "major",
      mechanism: "Combined inhibition raises levels markedly.",
      action: "Avoid or reduce.",
    },
  ],
  pregnancy: {
    summary: "Limited data; class considerations in its markets.",
    lactation: "Limited data; caution.",
  },
  renalAdjustment: "Halve dose in renal impairment.",
  hepaticAdjustment: "Reduce dose in hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Reboxetine is a European antidepressant that acts only on noradrenaline — the brain chemical linked to energy and drive — making it suited to depressions dominated by tiredness and loss of motivation. Its characteristic effects are sweating, poor sleep, and, in men, difficulty starting urination.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Reboxetine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The phenotype logic: apathetic, anergic, fatigued depression → norepinephrine — reboxetine is the purest noradrenergic lever in the cabinet.",
    "Atomoxetine's cousin: same NET selectivity, different indication (depression vs ADHD).",
    "Not FDA-approved (failed US trials on dose-finding grounds) — a European resident.",
    "The noradrenergic tax: sweating, insomnia, urinary hesitation, HR/BP — the profile to counsel.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Reboxetine: Reboxetine selectively inhibits the norepinephrine transporter — pure noradrenergic antidepressant action.",
        "Uses of Reboxetine: Major depressive disorder",
        "Mechanism: selective NRI (pure NET blockade).",
        "MDD (EU/UK); 8-10 mg/day divided.",
      ],
      practical: [
        "Prescribe Reboxetine for major depressive disorder with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline and titration); Urinary symptoms (men) (At review)",
      ],
      longAnswer: [
        "Reboxetine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: selective NRI (pure NET blockade).",
        "MDD (EU/UK); 8-10 mg/day divided.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: selective NRI (pure NET blockade).",
        "MDD (EU/UK); 8-10 mg/day divided.",
        "Signature: insomnia, sweating, urinary hesitation, HR/BP rise.",
        "Not FDA-approved.",
        "Atomoxetine's class cousin (ADHD vs depression indications).",
        "The apathetic-depression niche.",
      ],
      pyqConcepts: [
        "Mechanism/target of Reboxetine",
        "Key adverse effect: Sustained hypertension",
        "Dosing and titration of Reboxetine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Reboxetine develops sustained hypertension — next best step?",
        "When to choose Reboxetine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: NET (selective inhibition)",
        "Most common side effects: Insomnia and sweating, Dry mouth and constipation, Urinary hesitation (men)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The phenotype logic: apathetic, anergic, fatigued depression → norepinephrine — reboxetine is the purest noradrenergic lever in the cabinet.",
        "Atomoxetine's cousin: same NET selectivity, different indication (depression vs ADHD).",
        "Not FDA-approved (failed US trials on dose-finding grounds) — a European resident.",
        "The noradrenergic tax: sweating, insomnia, urinary hesitation, HR/BP — the profile to counsel.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: selective NRI (pure NET blockade).",
    "MDD (EU/UK); 8-10 mg/day divided.",
    "Signature: insomnia, sweating, urinary hesitation, HR/BP rise.",
    "Not FDA-approved.",
    "Atomoxetine's class cousin (ADHD vs depression indications).",
    "The apathetic-depression niche.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder",
      presentation: "A patient presenting with major depressive disorder, started on Reboxetine.",
      history: "A adult patient presents with a major depressive disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder. Differentials are considered and excluded clinically.",
      rationale: "Reboxetine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (NRI) with strong evidence in this condition.",
      management: "Started at 4 mg twice daily, titrated to 8-10 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Reboxetine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "NRI vs related agents — orientation table",
      primaryDrug: "Reboxetine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "NET (selective inhibition)",
          comparisons: [
            {
              drug: "Atomoxetine",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
          comparisons: [
            {
              drug: "Atomoxetine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Atomoxetine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The European NRI — energy for apathetic depression",
          comparisons: [
            {
              drug: "Atomoxetine",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Reboxetine is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Reboxetine reaches peak plasma concentration and begins acting at its molecular target (NET (selective inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (insomnia and sweating, dry mouth and constipation, urinary hesitation (men)). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Reboxetine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Reboxetine take to work?",
      answer: "Response 2-4 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Reboxetine?",
      answer: "The most frequently reported effects are: Insomnia and sweating, Dry mouth and constipation, Urinary hesitation (men), Tachycardia and BP rise, Nausea and dizziness. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Reboxetine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Reboxetine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Reboxetine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Reboxetine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Reboxetine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), reboxetine monograph, p. 109",
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
        source: "FDA Prescribing Information for Edronax (Reboxetine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for reboxetine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Reboxetine",
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
      name: "Atomoxetine",
      slug: "atomoxetine",
      drugClass: "NRI",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Major depressive disorder",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Reboxetine",
      type: "drug",
      href: "/drugs/reboxetine",
      note: "The drug you're reading about",
    },
    {
      label: "NRI",
      type: "class",
      href: "#mechanism",
      note: "Norepinephrine Reuptake Inhibitor",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "NET (selective inhibition)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Major depressive disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Sustained hypertension",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Urinary retention (prostatic men)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Insomnia and sweating",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Reboxetine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The pure NRI — noradrenergic energy for the tired, apathetic depression.",
    summary: "Reboxetine is a prescription medicine used to treat major depressive disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Reboxetine is a European antidepressant that acts only on noradrenaline — the brain chemical linked to energy and drive — making it suited to depressions dominated by tiredness and loss of motivation. Its characteristic effects are sweating, poor sleep, and, in men, difficulty starting urination.",
    sideEffects: "The most common side effects are: insomnia and sweating, dry mouth and constipation, urinary hesitation (men), tachycardia and bp rise, nausea and dizziness. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Sustained hypertension and Urinary retention (prostatic men). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline and titration); urinary symptoms (men) (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Erythromycin and CYP3A4 inhibitors, Fluvoxamine and fluoxetine. Avoid alcohol unless your doctor says it is safe.",
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
    prescribingScenarios: [
      "European prescriptions continued rarely.",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "NRIs",
    members: [
      {
        name: "Reboxetine",
        slug: "reboxetine",
        relationship: "This guide",
        distinguishing: "The European NRI — energy for apathetic depression",
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
      question: "Which molecular target does Reboxetine primarily act on?",
      options: ["NET (selective inhibition)", "SERT (serotonin transporter)", "NET (norepinephrine transporter)", "D2 receptor"],
      correctIndex: 0,
      explanation: "Reboxetine acts primarily at NET (selective inhibition). Reboxetine selectively inhibits the norepinephrine transporter — pure noradrenergic antidepressant action.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Reboxetine?",
      options: ["Insomnia and sweating", "Dry mouth and constipation", "Urinary hesitation (men)", "Tachycardia and BP rise"],
      correctIndex: 0,
      explanation: "Insomnia and sweating — Noradrenergic signature effects.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Reboxetine for major depressive disorder?",
      options: ["8-10 mg/day", "12 mg/day", "8-10 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For major depressive disorder: start 4 mg twice daily, target 8-10 mg/day, maximum 12 mg/day. Increase to 6 mg bd after 3-4 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Reboxetine in two sentences.",
      answer: "Reboxetine selectively inhibits the norepinephrine transporter — pure noradrenergic antidepressant action. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Reboxetine.",
      answer: "Major depressive disorder. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Reboxetine and how you would manage it.",
      answer: "Sustained hypertension: Noradrenergic dose-limit. Management: Monitor; reduce.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Reboxetine require?",
      answer: "Heart rate and blood pressure (Baseline and titration); Urinary symptoms (men) (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Reboxetine that separates safe prescribers from unsafe ones.",
      answer: "The phenotype logic: apathetic, anergic, fatigued depression → norepinephrine — reboxetine is the purest noradrenergic lever in the cabinet.",
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
      checkpoint: "You now know what Reboxetine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Reboxetine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Reboxetine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Reboxetine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Reboxetine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Reboxetine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Response 2-4 weeks."],
    ifItWorks: [
      "Continue Reboxetine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Reboxetine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Reboxetine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "4 mg twice daily",
        titration: "Increase to 6 mg bd after 3-4 weeks",
        target: "8-10 mg/day",
        max: "12 mg/day",
      },
    ],
    dosageForms: ["Tablets 4 mg"],
    dosingTips: ["Morning-weighted divided dosing.", "Ask men about urinary hesitation.", "HR/BP at review."],
    overdose: [
      "Overdose with Reboxetine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Reboxetine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 12-14 hours (divided dosing)..",
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
    potentialAdvantages: [
      "Pure noradrenergic action (phenotype-matched).",
      "Minimal serotonergic interaction surface.",
    ],
    potentialDisadvantages: ["Not US-approved.", "Noradrenergic adverse-effect set.", "Divided dosing."],
    primaryTargetSymptoms: ["Anergic, apathetic depression"],
    pearls: [
      "The phenotype logic: apathetic, anergic, fatigued depression → norepinephrine — reboxetine is the purest noradrenergic lever in the cabinet.",
      "Atomoxetine's cousin: same NET selectivity, different indication (depression vs ADHD).",
      "Not FDA-approved (failed US trials on dose-finding grounds) — a European resident.",
      "The noradrenergic tax: sweating, insomnia, urinary hesitation, HR/BP — the profile to counsel.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
