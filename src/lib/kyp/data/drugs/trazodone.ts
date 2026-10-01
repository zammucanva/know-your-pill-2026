import type { Drug } from "../types";

/**
 * Trazodone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), trazodone monograph (book p. 126)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const trazodone: Drug = {
  /* ---- Identity ---- */
  slug: "trazodone",
  genericName: "Trazodone",
  brandNames: ["Desyrel", "Trazon / Trazone (India)"],
  drugClass: "atypical-antidepressant",
  drugClassLabel: "SARI",
  drugClassFullName: "Serotonin Antagonist and Reuptake Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "Atypical Antidepressants", "Trazodone"],
  /* ---- Hero / summary ---- */
  tagline: "The antidepressant that became a sleeping pill — SERT blockade by day, alpha-1 and 5-HT2A sedation by night.",
  summary: "Trazodone is a serotonin antagonist and reuptake inhibitor (SARI) whose low-dose sedating profile made it one of the most-prescribed sleep aids in the world: at 25-100 mg it is an antidepressant-class drug used for insomnia (no dependence, no benzodiazepine warnings), while full antidepressant doses (150-400 mg) treat major depression. Alpha-1 blockade produces orthostasis and the rare priapism warning.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Trazodone — from its molecular target (SERT (inhibition) + 5-HT2A/5-HT2C/alpha-1/H1 (antagonism) — SARI class) to clinical effect.",
    "List the FDA-approved and off-label uses of Trazodone.",
    "Predict the common and serious side effects of Trazodone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Trazodone.",
    "Compare Trazodone with other saris and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Trazodone blocks SERT (serotonin reuptake) while antagonising 5-HT2A, alpha-1, and H1 receptors — the sedation-antagonism profile that defines the SARI class.",
    molecularTarget: "SERT (inhibition) + 5-HT2A/5-HT2C/alpha-1/H1 (antagonism) — SARI class",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Trazodone blocks SERT (serotonin reuptake) while antagonising 5-HT2A, alpha-1, and H1 receptors — the sedation-antagonism profile that defines the SARI class.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 5-9 hours (parent); active metabolite mCPP longer. — see mechanism and prescriber sections.",
    halfLife: "5-9 hours (parent); active metabolite mCPP longer.",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Trazodone",
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
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: ["SERT (inhibition)", "5-HT2A (antagonism)", "Alpha-1 (antagonism)", "H1 (antagonism)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder",
      status: "fda-approved",
      description: "Full antidepressant doses 150-400 mg/day.",
    },
    {
      name: "Insomnia (low dose, off-label)",
      status: "off-label",
      description: "25-100 mg at night — the most common real-world use: non-benzodiazepine, non-Z-drug hypnotic with no boxed warnings.",
    },
    {
      name: "Depression with insomnia / anxiety",
      status: "guideline",
      description: "The dual-action niche: mood + sleep in one tablet.",
    },
    {
      name: "Agitation in dementia (selected cases)",
      status: "off-label",
      description: "Low-dose sedation — a considered alternative in fall-averse elderly.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Trazodone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      name: "Sedation",
      frequency: "very-common",
      severity: "moderate",
      description: "At low dose it IS the therapeutic effect; at antidepressant dose it is the main adverse effect.",
      management: "Night dosing; dose timing.",
    },
    {
      name: "Orthostatic hypotension",
      frequency: "common",
      severity: "moderate",
      description: "Alpha-1 blockade — the practical limit in the elderly.",
      management: "Rise slowly; dose review.",
    },
    {
      name: "Dizziness and dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Reassurance.",
    },
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "With food.",
    },
    {
      name: "Next-morning grogginess",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related hangover at higher hypnotic doses.",
      management: "Dose reduction; timing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Priapism (rare, medical emergency)",
      frequency: "rare",
      severity: "severe",
      description: "Prolonged painful erection from alpha-1 blockade — the exam-classic warning; urological emergency.",
      management: "Immediate urology; stop the drug.",
    },
    {
      name: "QT prolongation (modest)",
      frequency: "rare",
      severity: "severe",
      description: "Dose-related — caution with other QT drugs.",
      management: "ECG awareness.",
    },
    {
      name: "Serotonin syndrome (with MAOIs/serotonergics)",
      frequency: "rare",
      severity: "life-threatening",
      description: "SERT blockade aboard.",
      management: "MAOI washout rules.",
    },
    {
      name: "Orthostatic falls (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Alpha-1 blockade in fall-prone patients.",
      management: "Night dosing; hazard review.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Morning sedation and falls (elderly)",
      frequency: "Every review",
      rationale: "The practical limiter.",
    },
    {
      parameter: "Response at 2-4 weeks (depression dosing)",
      frequency: "Scheduled review",
      rationale: "Adequate-trial discipline.",
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
      drug: "SSRIs/SNRIs and triptans",
      severity: "major",
      mechanism: "Additive serotonergic load — serotonin syndrome risk.",
      action: "Counsel; lowest combinations.",
    },
    {
      drug: "Ketoconazole/ritonavir (3A4 inhibitors)",
      severity: "major",
      mechanism: "Raise trazodone levels markedly.",
      action: "Dose reduction.",
    },
    {
      drug: "Carbamazepine (inducer)",
      severity: "moderate",
      mechanism: "Lower levels.",
      action: "Monitor.",
    },
    {
      drug: "Other QT drugs",
      severity: "moderate",
      mechanism: "Additive QT.",
      action: "ECG awareness.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited human data; no clear teratogenic signal. Low-dose insomnia use in pregnancy is a common specialist compromise when non-drug measures fail; obstetric awareness.",
    lactation: "Excreted in milk in small amounts; infant sedation monitoring if used.",
  },
  renalAdjustment: "No major adjustment; standard caution in severe impairment.",
  hepaticAdjustment: "Reduce dose in hepatic impairment (prefer non-CYP2D6... trazodone is metabolised by 2D6/3A4 — reduce and monitor).",
  /* ---- Education ---- */
  patientExplanation: "Trazodone is an older antidepressant that at low dose is widely used as a sleeping tablet: it is not addictive and does not carry the strict warnings of traditional sleeping pills. At higher doses it treats depression itself. Its main side effects are dizziness on standing and morning drowsiness, and — rarely but importantly — men should know to seek emergency help for any persistent painful erection.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Trazodone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The dose-band drug again: 50 mg = sedative, 300 mg = antidepressant — like quetiapine's bands, the pharmacology shifts with dose (5-HT2A/alpha-1 sedation at low dose; SERT blockade dominating at high).",
    "The safest-seeming hypnotic: no benzodiazepine dependence warnings, no Z-drug boxed warnings — hence its ubiquity as an off-label sleep aid.",
    "Priapism is the exam classic: alpha-1 blockade in the corpus cavernosum — hours matter for the organ.",
    "Orthostasis is the real-world limiter in the elderly — falls outweigh its benzo-sparing advantages if unmonitored.",
    "In depression with insomnia, it is one drug doing two jobs — an elegant single-agent strategy.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Trazodone: Trazodone blocks SERT (serotonin reuptake) while antagonising 5-HT2A, alpha-1, and H1 receptors — the sedation-antagonism profile that defines the SARI class.",
        "Uses of Trazodone: Major depressive disorder; Insomnia (low dose, off-label); Depression with insomnia / anxiety; Agitation in dementia (selected cases)",
        "Mechanism: SARI — SERT inhibition + 5-HT2A/alpha-1/H1 antagonism.",
        "Two dose identities: 25-100 mg for insomnia (off-label); 150-400 mg for depression.",
      ],
      practical: [
        "Prescribe Trazodone for major depressive disorder with dose, timing, and duration.",
        "Outline the monitoring plan: Morning sedation and falls (elderly) (Every review); Response at 2-4 weeks (depression dosing) (Scheduled review)",
      ],
      longAnswer: [
        "Trazodone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SARI — SERT inhibition + 5-HT2A/alpha-1/H1 antagonism.",
        "Two dose identities: 25-100 mg for insomnia (off-label); 150-400 mg for depression.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SARI — SERT inhibition + 5-HT2A/alpha-1/H1 antagonism.",
        "Two dose identities: 25-100 mg for insomnia (off-label); 150-400 mg for depression.",
        "The most-prescribed non-benzodiazepine hypnotic (off-label).",
        "Signature warnings: priapism (emergency) and orthostatic hypotension (falls).",
        "No dependence or complex-sleep-behaviour boxed warnings (unlike benzos/Z-drugs).",
        "Half-life ~7-10 h (parent); mCPP metabolite complicates.",
      ],
      pyqConcepts: [
        "Mechanism/target of Trazodone",
        "Key adverse effect: Priapism (rare, medical emergency)",
        "Dosing and titration of Trazodone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Trazodone develops priapism (rare, medical emergency) — next best step?",
        "When to choose Trazodone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: SERT (inhibition) + 5-HT2A/5-HT2C/alpha-1/H1 (antagonism) — SARI class",
        "Most common side effects: Sedation, Orthostatic hypotension, Dizziness and dry mouth",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The dose-band drug again: 50 mg = sedative, 300 mg = antidepressant — like quetiapine's bands, the pharmacology shifts with dose (5-HT2A/alpha-1 sedation at low dose; SERT blockade dominating at high).",
        "The safest-seeming hypnotic: no benzodiazepine dependence warnings, no Z-drug boxed warnings — hence its ubiquity as an off-label sleep aid.",
        "Priapism is the exam classic: alpha-1 blockade in the corpus cavernosum — hours matter for the organ.",
        "Orthostasis is the real-world limiter in the elderly — falls outweigh its benzo-sparing advantages if unmonitored.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SARI — SERT inhibition + 5-HT2A/alpha-1/H1 antagonism.",
    "Two dose identities: 25-100 mg for insomnia (off-label); 150-400 mg for depression.",
    "The most-prescribed non-benzodiazepine hypnotic (off-label).",
    "Signature warnings: priapism (emergency) and orthostatic hypotension (falls).",
    "No dependence or complex-sleep-behaviour boxed warnings (unlike benzos/Z-drugs).",
    "Half-life ~7-10 h (parent); mCPP metabolite complicates.",
    "Serotonin syndrome rules apply (SERT blockade).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder",
      presentation: "A patient presenting with major depressive disorder, started on Trazodone.",
      history: "A adult patient presents with a major depressive disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder. Differentials are considered and excluded clinically.",
      rationale: "Trazodone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SARI) with strong evidence in this condition.",
      management: "Started at 25-50 mg at bedtime, titrated to 25-100 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Trazodone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SARI comparison — choosing within the class",
      primaryDrug: "Trazodone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "SERT (inhibition) + 5-HT2A/5-HT2C/alpha-1/H1 (antagonism) — SARI class",
          comparisons: [
            {
              drug: "Vilazodone",
              value: "See full guide",
            },
            {
              drug: "Vortioxetine",
              value: "See full guide",
            },
            {
              drug: "Nefazodone",
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
          primaryValue: "5-9 hours (parent); active metabolite mCPP longer.",
          comparisons: [
            {
              drug: "Vilazodone",
              value: "—",
            },
            {
              drug: "Vortioxetine",
              value: "—",
            },
            {
              drug: "Nefazodone",
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
              drug: "Vilazodone",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Vortioxetine",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Nefazodone",
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
              drug: "Vilazodone",
              value: "Agent-specific.",
            },
            {
              drug: "Vortioxetine",
              value: "Agent-specific.",
            },
            {
              drug: "Nefazodone",
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
          primaryValue: "The antidepressant sleeping pill — insomnia at 50 mg, depression at 300 mg",
          comparisons: [
            {
              drug: "Vilazodone",
              value: "The SSRI + buspirone hybrid (SPARI)",
            },
            {
              drug: "Vortioxetine",
              value: "The multimodal pro-cognitive antidepressant",
            },
            {
              drug: "Nefazodone",
              value: "The expert-only SARI — withdrawn for hepatotoxicity",
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
      description: "Trazodone reaches peak plasma concentration and begins acting at its molecular target (SERT (inhibition) + 5-HT2A/5-HT2C/alpha-1/H1 (antagonism) — SARI class). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation, orthostatic hypotension, dizziness and dry mouth). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Sedation within the hour (low dose); antidepressant effect 2-4 weeks at full dose.)",
      title: "Therapeutic effect builds",
      description: "Sedation within the hour (low dose); antidepressant effect 2-4 weeks at full dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Trazodone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Trazodone take to work?",
      answer: "Sedation within the hour (low dose); antidepressant effect 2-4 weeks at full dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Trazodone?",
      answer: "The most frequently reported effects are: Sedation, Orthostatic hypotension, Dizziness and dry mouth, Nausea, Next-morning grogginess. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Trazodone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Trazodone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Trazodone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Trazodone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Trazodone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), trazodone monograph, p. 126",
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
        source: "FDA Prescribing Information for Desyrel (Trazodone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for trazodone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Trazodone",
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
      name: "Nefazodone",
      slug: "nefazodone",
      drugClass: "SARI",
      relationship: "Same class (SARI)",
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
      name: "Major depressive disorder",
      relationship: "primary",
    },
    {
      name: "Insomnia (low dose, off-label)",
      relationship: "off-label",
    },
    {
      name: "Depression with insomnia / anxiety",
      relationship: "alternative",
    },
    {
      name: "Agitation in dementia (selected cases)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Trazodone",
      type: "drug",
      href: "/drugs/trazodone",
      note: "The drug you're reading about",
    },
    {
      label: "SARI",
      type: "class",
      href: "#mechanism",
      note: "Serotonin Antagonist and Reuptake Inhibitor",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "SERT (inhibition) + 5-HT2A/5-HT2C/alpha-1/H1 (antagonism) — SARI class",
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
      label: "Insomnia (low dose, off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Depression with insomnia / anxiety",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Priapism (rare, medical emergency)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "QT prolongation (modest)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Trazodone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The antidepressant that became a sleeping pill — SERT blockade by day, alpha-1 and 5-HT2A sedation by night.",
    summary: "Trazodone is a prescription medicine used to treat major depressive disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Trazodone is an older antidepressant that at low dose is widely used as a sleeping tablet: it is not addictive and does not carry the strict warnings of traditional sleeping pills. At higher doses it treats depression itself. Its main side effects are dizziness on standing and morning drowsiness, and — rarely but importantly — men should know to seek emergency help for any persistent painful erection.",
    sideEffects: "The most common side effects are: sedation, orthostatic hypotension, dizziness and dry mouth, nausea, next-morning grogginess. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Priapism (rare, medical emergency) and QT prolongation (modest). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: morning sedation and falls (elderly) (every review); response at 2-4 weeks (depression dosing) (scheduled review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, SSRIs/SNRIs and triptans, Ketoconazole/ritonavir (3A4 inhibitors), Carbamazepine (inducer). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Trazon / Trazone",
        manufacturer: "various",
        strengths: "25, 50, 100 mg",
      },
      {
        name: "Trazodone generic",
        manufacturer: "multiple",
        strengths: "50, 100 mg",
      },
    ],
    typicalDoses: "Insomnia 25-50 mg nocte; depression 150-400 mg.",
    prescribingScenarios: [
      "The default non-benzo hypnotic in Indian practice.",
      "Depression with insomnia — single-agent cover.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Falls review in elderly.",
    patientCounselling: [
      "Take at bedtime only.",
      "Rise slowly at night.",
      "Men: persistent painful erection = emergency.",
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
    familyName: "Atypical Antidepressants",
    members: [
      {
        name: "Trazodone",
        slug: "trazodone",
        relationship: "This guide",
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
        name: "Nefazodone",
        slug: "nefazodone",
        relationship: "Same class (SARI)",
        distinguishing: "The expert-only SARI — withdrawn for hepatotoxicity",
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
    study: "40 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Trazodone primarily act on?",
      options: [
        "SERT (inhibition) + 5-HT2A/5-HT2C/alpha-1/H1 (antagonism) — SARI class",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Trazodone acts primarily at SERT (inhibition) + 5-HT2A/5-HT2C/alpha-1/H1 (antagonism) — SARI class. Trazodone blocks SERT (serotonin reuptake) while antagonising 5-HT2A, alpha-1, and H1 receptors — the sedation-antagonism profile that defines the SARI class.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Trazodone?",
      options: ["Sedation", "Orthostatic hypotension", "Dizziness and dry mouth", "Nausea"],
      correctIndex: 0,
      explanation: "Sedation — At low dose it IS the therapeutic effect; at antidepressant dose it is the main adverse effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Trazodone for insomnia (low dose)?",
      options: ["25-100 mg", "100 mg (hypnotic use)", "25-100 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For insomnia (low dose): start 25-50 mg at bedtime, target 25-100 mg, maximum 100 mg (hypnotic use). May increase to 100 mg",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Trazodone in two sentences.",
      answer: "Trazodone blocks SERT (serotonin reuptake) while antagonising 5-HT2A, alpha-1, and H1 receptors — the sedation-antagonism profile that defines the SARI class. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Trazodone.",
      answer: "Major depressive disorder, Insomnia (low dose, off-label), Depression with insomnia / anxiety, Agitation in dementia (selected cases). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Trazodone and how you would manage it.",
      answer: "Priapism (rare, medical emergency): Prolonged painful erection from alpha-1 blockade — the exam-classic warning; urological emergency. Management: Immediate urology; stop the drug.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Trazodone require?",
      answer: "Morning sedation and falls (elderly) (Every review); Response at 2-4 weeks (depression dosing) (Scheduled review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Trazodone that separates safe prescribers from unsafe ones.",
      answer: "The dose-band drug again: 50 mg = sedative, 300 mg = antidepressant — like quetiapine's bands, the pharmacology shifts with dose (5-HT2A/alpha-1 sedation at low dose; SERT blockade dominating at high).",
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
      checkpoint: "You now know what Trazodone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Trazodone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Trazodone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Trazodone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Trazodone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Trazodone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Sedation within the hour (low dose); antidepressant effect 2-4 weeks at full dose.",
    ],
    ifItWorks: [
      "Continue Trazodone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Trazodone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Trazodone follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Insomnia (low dose)",
        starting: "25-50 mg at bedtime",
        titration: "May increase to 100 mg",
        target: "25-100 mg",
        max: "100 mg (hypnotic use)",
      },
      {
        indication: "Major depression",
        starting: "150 mg/day divided",
        titration: "Increase by 50 mg every 3-4 days toward 300-400 mg",
        target: "300-400 mg/day",
        max: "600 mg/day (inpatient, exceptional)",
      },
    ],
    dosageForms: [
      "Tablets 50, 100 mg (scored)",
      "Extended-release (Oleptro, some markets)",
    ],
    dosingTips: [
      "Night dosing only for hypnotic use.",
      "Orthostasis teaching in the elderly.",
      "Titrate depression dosing to 300+ mg — subtherapeutic dosing is the common failure.",
      "One drug for depression + insomnia when both are present.",
    ],
    overdose: [
      "Overdose with Trazodone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Trazodone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 5-9 hours (parent); active metabolite mCPP longer..",
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
    potentialAdvantages: ["Non-dependence hypnotic alternative.", "Dual depression + insomnia action.", "Cheap generics; decades of use."],
    potentialDisadvantages: [
      "Orthostasis and falls.",
      "Priapism (rare, emergency).",
      "Antidepressant efficacy at full dose requires 300+ mg.",
      "Next-day grogginess.",
    ],
    primaryTargetSymptoms: ["Insomnia (low dose)", "Major depression with insomnia", "Anxiety within depression"],
    pearls: [
      "The dose-band drug again: 50 mg = sedative, 300 mg = antidepressant — like quetiapine's bands, the pharmacology shifts with dose (5-HT2A/alpha-1 sedation at low dose; SERT blockade dominating at high).",
      "The safest-seeming hypnotic: no benzodiazepine dependence warnings, no Z-drug boxed warnings — hence its ubiquity as an off-label sleep aid.",
      "Priapism is the exam classic: alpha-1 blockade in the corpus cavernosum — hours matter for the organ.",
      "Orthostasis is the real-world limiter in the elderly — falls outweigh its benzo-sparing advantages if unmonitored.",
      "In depression with insomnia, it is one drug doing two jobs — an elegant single-agent strategy.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
