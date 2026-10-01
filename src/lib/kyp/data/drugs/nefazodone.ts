import type { Drug } from "../types";

/**
 * Nefazodone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), nefazodone monograph (book p. 88)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const nefazodone: Drug = {
  /* ---- Identity ---- */
  slug: "nefazodone",
  genericName: "Nefazodone",
  brandNames: ["Serzone (withdrawn in most markets)"],
  drugClass: "atypical-antidepressant",
  drugClassLabel: "SARI",
  drugClassFullName: "Serotonin Antagonist and Reuptake Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "Atypical Antidepressants", "Nefazodone"],
  /* ---- Hero / summary ---- */
  tagline: "The hepatotoxic SARI — 5-HT2A blockade for anxiety-insomnia depression, withdrawn for the liver.",
  summary: "Nefazodone is a phenylpiperazine antidepressant (5-HT2A antagonism + weak SERT/NET inhibition) valued for anxiolysis and sleep-friendly depression treatment — but withdrawn in most countries after rare fulminant hepatic failure. Stahl's expert-only appendix: a drug whose receptor elegance is remembered alongside its liver warning.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Nefazodone — from its molecular target (5-HT2A (potent antagonist) + SERT/NET (weak inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Nefazodone.",
    "Predict the common and serious side effects of Nefazodone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Nefazodone.",
    "Compare Nefazodone with other saris and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Nefazodone blocks 5-HT2A receptors potently with weak monoamine reuptake inhibition — an anxiolytic, sleep-preserving antidepressant profile.",
    molecularTarget: "5-HT2A (potent antagonist) + SERT/NET (weak inhibition)",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Nefazodone blocks 5-HT2A receptors potently with weak monoamine reuptake inhibition — an anxiolytic, sleep-preserving antidepressant profile.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 2-5 hours (short; divided dosing). — see mechanism and prescriber sections.",
    halfLife: "2-5 hours (short; divided dosing).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Nefazodone",
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
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "5-HT2A (potent antagonist) + SERT/NET (weak inhibition)",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder (historic)",
      status: "fda-approved",
      description: "The approved indication; withdrawn for hepatotoxicity after licensing.",
    },
    {
      name: "Depression with anxiety and insomnia (historic)",
      status: "guideline",
      description: "The niche it was valued for.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Nefazodone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Alprazolam and triazolam",
      severity: "absolute",
      rationale: "3A4 inhibition triples their levels — the classic interaction.",
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
      name: "Sedation and dizziness",
      frequency: "common",
      severity: "moderate",
      description: "The 5-HT2A profile's texture.",
      management: "Bedtime-weighted dosing.",
    },
    {
      name: "Nausea and dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "With food.",
    },
    {
      name: "Asthenia",
      frequency: "common",
      severity: "mild",
      description: "Reported in trials.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hepatotoxicity (fulminant hepatic failure)",
      frequency: "rare",
      severity: "life-threatening",
      description: "The withdrawal cause: rare irreversible liver failure — the label-defining catastrophe.",
      management: "Avoid where alternatives exist; LFT vigilance in unavoidable use; stop on any hepatitis signs.",
    },
    {
      name: "Serotonin syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Weak SERT aboard.",
      management: "Washout rules.",
    },
    {
      name: "Priapism (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Alpha-1-adjacent effect.",
      management: "Emergency teaching.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "LFTs (historic)",
      frequency: "Baseline and periodic",
      rationale: "The vigilance that failed to save the drug.",
    },
  ],
  interactions: [
    {
      drug: "Alprazolam and triazolam",
      severity: "contraindicated",
      mechanism: "3A4 inhibition triples their levels — the classic interaction.",
      action: "Avoid.",
    },
    {
      drug: "Simvastatin and 3A4 substrates",
      severity: "major",
      mechanism: "Levels rise markedly.",
      action: "Avoid.",
    },
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Class rule.",
      action: "Washout.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Historic use; hepatotoxicity dominates any consideration.",
    lactation: "Historic caution.",
  },
  renalAdjustment: "Standard caution.",
  hepaticAdjustment: "Contraindicated in liver disease — the defining contraindication.",
  /* ---- Education ---- */
  patientExplanation: "Nefazodone is a withdrawn antidepressant remembered for two things: a gentling profile valued in anxious depression, and rare catastrophic liver injury that removed it from most markets. It appears here for completeness and pharmacology teaching.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Nefazodone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The pharmacology was loved: 5-HT2A blockade without the sedative hangover of trazodone or the sexual blunting of SSRIs.",
    "The liver ended the story: rare fulminant failure (1/250,000-1/300,000 treatment-years) — withdrawn in most markets.",
    "The teaching point: post-marketing pharmacovigilance discipline — receptor elegance does not excuse organ toxicity.",
    "Historic combo fame: nefazodone + CBST in the CBASP trial — the psychotherapy-pharmacology study of its era.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Nefazodone: Nefazodone blocks 5-HT2A receptors potently with weak monoamine reuptake inhibition — an anxiolytic, sleep-preserving antidepressant profile.",
        "Uses of Nefazodone: Major depressive disorder (historic); Depression with anxiety and insomnia (historic)",
        "Mechanism: 5-HT2A antagonist + weak SERT/NET inhibition — the SARI profile.",
        "Withdrawn for rare FULMINANT HEPATIC FAILURE — the drug's defining fact.",
      ],
      practical: [
        "Prescribe Nefazodone for major depressive disorder (historic) with dose, timing, and duration.",
        "Outline the monitoring plan: LFTs (historic) (Baseline and periodic)",
      ],
      longAnswer: [
        "Nefazodone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: 5-HT2A antagonist + weak SERT/NET inhibition — the SARI profile.",
        "Withdrawn for rare FULMINANT HEPATIC FAILURE — the drug's defining fact.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: 5-HT2A antagonist + weak SERT/NET inhibition — the SARI profile.",
        "Withdrawn for rare FULMINANT HEPATIC FAILURE — the drug's defining fact.",
        "Valued for anxious, insomniac depression.",
        "Strong 3A4 inhibition: triazolobenzodiazepine and other interactions.",
        "The expert-only appendix of Stahl's guide.",
      ],
      pyqConcepts: [
        "Mechanism/target of Nefazodone",
        "Key adverse effect: Hepatotoxicity (fulminant hepatic failure)",
        "Dosing and titration of Nefazodone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Nefazodone develops hepatotoxicity (fulminant hepatic failure) — next best step?",
        "When to choose Nefazodone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: 5-HT2A (potent antagonist) + SERT/NET (weak inhibition)",
        "Most common side effects: Sedation and dizziness, Nausea and dry mouth, Asthenia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The pharmacology was loved: 5-HT2A blockade without the sedative hangover of trazodone or the sexual blunting of SSRIs.",
        "The liver ended the story: rare fulminant failure (1/250,000-1/300,000 treatment-years) — withdrawn in most markets.",
        "The teaching point: post-marketing pharmacovigilance discipline — receptor elegance does not excuse organ toxicity.",
        "Historic combo fame: nefazodone + CBST in the CBASP trial — the psychotherapy-pharmacology study of its era.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: 5-HT2A antagonist + weak SERT/NET inhibition — the SARI profile.",
    "Withdrawn for rare FULMINANT HEPATIC FAILURE — the drug's defining fact.",
    "Valued for anxious, insomniac depression.",
    "Strong 3A4 inhibition: triazolobenzodiazepine and other interactions.",
    "The expert-only appendix of Stahl's guide.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder (historic)",
      presentation: "A patient presenting with major depressive disorder (historic), started on Nefazodone.",
      history: "A adult patient presents with a major depressive disorder (historic) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder (historic); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder (historic). Differentials are considered and excluded clinically.",
      rationale: "Nefazodone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SARI) with strong evidence in this condition.",
      management: "Started at 100 mg twice daily, titrated to 300-600 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Nefazodone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SARI comparison — choosing within the class",
      primaryDrug: "Nefazodone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "5-HT2A (potent antagonist) + SERT/NET (weak inhibition)",
          comparisons: [
            {
              drug: "Trazodone",
              value: "See full guide",
            },
            {
              drug: "Vilazodone",
              value: "See full guide",
            },
            {
              drug: "Vortioxetine",
              value: "See full guide",
            },
            {
              drug: "Tianeptine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "2-5 hours (short; divided dosing).",
          comparisons: [
            {
              drug: "Trazodone",
              value: "—",
            },
            {
              drug: "Vilazodone",
              value: "—",
            },
            {
              drug: "Vortioxetine",
              value: "—",
            },
            {
              drug: "Tianeptine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
          comparisons: [
            {
              drug: "Trazodone",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Vilazodone",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Vortioxetine",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Tianeptine",
              value: "Weight neutral to mild gain (agent-specific).",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Trazodone",
              value: "Agent-specific.",
            },
            {
              drug: "Vilazodone",
              value: "Agent-specific.",
            },
            {
              drug: "Vortioxetine",
              value: "Agent-specific.",
            },
            {
              drug: "Tianeptine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The expert-only SARI — withdrawn for hepatotoxicity",
          comparisons: [
            {
              drug: "Trazodone",
              value: "The antidepressant sleeping pill — insomnia at 50 mg, depression at 300 mg",
            },
            {
              drug: "Vilazodone",
              value: "The SSRI + buspirone hybrid (SPARI)",
            },
            {
              drug: "Vortioxetine",
              value: "The multimodal pro-cognitive antidepressant",
            },
            {
              drug: "Tianeptine",
              value: "The glutamate modulator with the opioid footnote",
            },
          ],
        },
      ],
      takeaway: "All atypical antidepressants share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Nefazodone reaches peak plasma concentration and begins acting at its molecular target (5-HT2A (potent antagonist) + SERT/NET (weak inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and dizziness, nausea and dry mouth, asthenia). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Nefazodone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Nefazodone take to work?",
      answer: "Response 2-4 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Nefazodone?",
      answer: "The most frequently reported effects are: Sedation and dizziness, Nausea and dry mouth, Asthenia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Nefazodone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Nefazodone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Nefazodone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Nefazodone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Nefazodone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for MDD; NICE CG91",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), nefazodone monograph, p. 88",
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
        source: "FDA Prescribing Information for Serzone (withdrawn in most markets) (Nefazodone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for nefazodone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Nefazodone",
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
      name: "Trazodone",
      slug: "trazodone",
      drugClass: "SARI",
      relationship: "Same class (SARI)",
    },
    {
      name: "Vilazodone",
      slug: "vilazodone",
      drugClass: "SPARI",
      relationship: "Same class (SPARI)",
    },
    {
      name: "Vortioxetine",
      slug: "vortioxetine",
      drugClass: "Multimodal Antidepressant",
      relationship: "Same class (Multimodal Antidepressant)",
    },
    {
      name: "Tianeptine",
      slug: "tianeptine",
      drugClass: "Atypical Antidepressant",
      relationship: "Same class (Atypical Antidepressant)",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      drugClass: "Established agent",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Major depressive disorder (historic)",
      relationship: "primary",
    },
    {
      name: "Depression with anxiety and insomnia (historic)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Nefazodone",
      type: "drug",
      href: "/drugs/nefazodone",
      note: "The drug you're reading about",
    },
    {
      label: "SARI",
      type: "class",
      href: "#mechanism",
      note: "Serotonin Antagonist and Reuptake Inhibitor",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "5-HT2A (potent antagonist) + SERT/NET (weak inhibition)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Major depressive disorder (historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Depression with anxiety and insomnia (historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hepatotoxicity (fulminant hepatic failure)",
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
      label: "Sedation and dizziness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Nefazodone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The hepatotoxic SARI — 5-HT2A blockade for anxiety-insomnia depression, withdrawn for the liver.",
    summary: "Nefazodone is a prescription medicine used to treat major depressive disorder (historic). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Nefazodone is a withdrawn antidepressant remembered for two things: a gentling profile valued in anxious depression, and rare catastrophic liver injury that removed it from most markets. It appears here for completeness and pharmacology teaching.",
    sideEffects: "The most common side effects are: sedation and dizziness, nausea and dry mouth, asthenia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hepatotoxicity (fulminant hepatic failure) and Serotonin syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: lfts (historic) (baseline and periodic). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Alprazolam and triazolam, Simvastatin and 3A4 substrates, MAOIs. Avoid alcohol unless your doctor says it is safe.",
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
    prescribingScenarios: ["Historical/pharmacology teaching."],
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
    familyName: "Atypical Antidepressants",
    members: [
      {
        name: "Nefazodone",
        slug: "nefazodone",
        relationship: "This guide",
        distinguishing: "The expert-only SARI — withdrawn for hepatotoxicity",
      },
      {
        name: "Trazodone",
        slug: "trazodone",
        relationship: "Same class (SARI)",
        distinguishing: "The antidepressant sleeping pill — insomnia at 50 mg, depression at 300 mg",
      },
      {
        name: "Vilazodone",
        slug: "vilazodone",
        relationship: "Same class (SPARI)",
        distinguishing: "The SSRI + buspirone hybrid (SPARI)",
      },
      {
        name: "Vortioxetine",
        slug: "vortioxetine",
        relationship: "Same class (Multimodal Antidepressant)",
        distinguishing: "The multimodal pro-cognitive antidepressant",
      },
      {
        name: "Tianeptine",
        slug: "tianeptine",
        relationship: "Same class (Atypical Antidepressant)",
        distinguishing: "The glutamate modulator with the opioid footnote",
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
      question: "Which molecular target does Nefazodone primarily act on?",
      options: [
        "5-HT2A (potent antagonist) + SERT/NET (weak inhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Nefazodone acts primarily at 5-HT2A (potent antagonist) + SERT/NET (weak inhibition). Nefazodone blocks 5-HT2A receptors potently with weak monoamine reuptake inhibition — an anxiolytic, sleep-preserving antidepressant profile.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Nefazodone?",
      options: ["Sedation and dizziness", "Nausea and dry mouth", "Asthenia", "Weight gain"],
      correctIndex: 0,
      explanation: "Sedation and dizziness — The 5-HT2A profile's texture.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Nefazodone for major depressive disorder (historic)?",
      options: ["300-600 mg/day", "600 mg/day", "300-600 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For major depressive disorder (historic): start 100 mg twice daily, target 300-600 mg/day, maximum 600 mg/day. Titrate to 300-600 mg/day divided",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Nefazodone in two sentences.",
      answer: "Nefazodone blocks 5-HT2A receptors potently with weak monoamine reuptake inhibition — an anxiolytic, sleep-preserving antidepressant profile. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Nefazodone.",
      answer: "Major depressive disorder (historic), Depression with anxiety and insomnia (historic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Nefazodone and how you would manage it.",
      answer: "Hepatotoxicity (fulminant hepatic failure): The withdrawal cause: rare irreversible liver failure — the label-defining catastrophe. Management: Avoid where alternatives exist; LFT vigilance in unavoidable use; stop on any hepatitis signs.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Nefazodone require?",
      answer: "LFTs (historic) (Baseline and periodic)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Nefazodone that separates safe prescribers from unsafe ones.",
      answer: "The pharmacology was loved: 5-HT2A blockade without the sedative hangover of trazodone or the sexual blunting of SSRIs.",
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
      checkpoint: "You now know what Nefazodone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Nefazodone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Nefazodone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Nefazodone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Nefazodone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Nefazodone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Response 2-4 weeks."],
    ifItWorks: [
      "Continue Nefazodone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Nefazodone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Nefazodone follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Major depressive disorder (historic)",
        starting: "100 mg twice daily",
        titration: "Titrate to 300-600 mg/day divided",
        target: "300-600 mg/day",
        max: "600 mg/day",
      },
    ],
    dosageForms: ["Tablets 50-250 mg (historic)"],
    dosingTips: [
      "Do not initiate where any alternative exists.",
      "The pharmacology exam, not the pharmacy shelf.",
    ],
    overdose: [
      "Overdose with Nefazodone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Nefazodone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 2-5 hours (short; divided dosing)..",
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
      "Anxiolytic, sleep-preserving antidepressant profile (historic).",
    ],
    potentialDisadvantages: ["Fulminant hepatic failure.", "Withdrawn in most countries.", "Strong 3A4 interactions."],
    primaryTargetSymptoms: [
      "Depression with anxiety/insomnia (historic)",
    ],
    pearls: [
      "The pharmacology was loved: 5-HT2A blockade without the sedative hangover of trazodone or the sexual blunting of SSRIs.",
      "The liver ended the story: rare fulminant failure (1/250,000-1/300,000 treatment-years) — withdrawn in most markets.",
      "The teaching point: post-marketing pharmacovigilance discipline — receptor elegance does not excuse organ toxicity.",
      "Historic combo fame: nefazodone + CBST in the CBASP trial — the psychotherapy-pharmacology study of its era.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
