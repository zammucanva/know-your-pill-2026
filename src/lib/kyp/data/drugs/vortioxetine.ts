import type { Drug } from "../types";

/**
 * Vortioxetine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), vortioxetine monograph (book p. 136)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const vortioxetine: Drug = {
  /* ---- Identity ---- */
  slug: "vortioxetine",
  genericName: "Vortioxetine",
  brandNames: ["Trintellix", "Vortio (India)"],
  drugClass: "atypical-antidepressant",
  drugClassLabel: "Multimodal Antidepressant",
  drugClassFullName: "Multimodal Serotonergic Antidepressant",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "Atypical Antidepressants", "Vortioxetine"],
  /* ---- Hero / summary ---- */
  tagline: "The multimodal antidepressant — transporter blockade plus five receptor actions, with pro-cognitive evidence.",
  summary: "Vortioxetine is the multimodal serotonergic antidepressant: SERT inhibition PLUS direct agonism/antagonism at five serotonin receptor subtypes (5-HT1A agonist, 5-HT1B partial agonist, 5-HT1D/3/7 antagonist). The result is broad serotonergic modulation with low emotional-blunting, a modest pro-cognitive evidence base, and a remarkably clean adverse-effect profile (nausea dominating).",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Vortioxetine — from its molecular target (SERT (inhibition) + 5-HT1A (agonist), 5-HT1B (partial agonist), 5-HT1D/5-HT3/5-HT7 (antagonists)) to clinical effect.",
    "List the FDA-approved and off-label uses of Vortioxetine.",
    "Predict the common and serious side effects of Vortioxetine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Vortioxetine.",
    "Compare Vortioxetine with other multimodal antidepressants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Vortioxetine combines SERT inhibition with direct actions at five 5-HT receptor subtypes — multimodal modulation of serotonergic throughput and downstream glutamatergic/GABAergic balance.",
    molecularTarget: "SERT (inhibition) + 5-HT1A (agonist), 5-HT1B (partial agonist), 5-HT1D/5-HT3/5-HT7 (antagonists)",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Vortioxetine combines SERT inhibition with direct actions at five 5-HT receptor subtypes — multimodal modulation of serotonergic throughput and downstream glutamatergic/GABAergic balance.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 66 hours. — see mechanism and prescriber sections.",
    halfLife: "About 66 hours.",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Vortioxetine",
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
  neurotransmitters: ["Serotonin (5-HT)", "Acetylcholine (ACh)", "Glutamate"],
  receptors: ["SERT (inhibited)", "5-HT1A (agonist)", "5-HT1B (partial agonist)", "5-HT1D (antagonist)", "5-HT3 (antagonist)", "5-HT7 (antagonist)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder",
      status: "fda-approved",
      description: "5-20 mg once daily; broad efficacy including a distinct pro-cognitive evidence base (processing-speed data beyond mood).",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Vortioxetine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      frequency: "very-common",
      severity: "mild",
      description: "The dominant adverse effect — usually transient, worst in week 1.",
      management: "With food; slow start at 5 mg.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
    {
      name: "Dizziness and dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Mild class effects.",
      management: "Reassurance.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "uncommon",
      severity: "moderate",
      description: "LOWER rates than SSRIs in head-to-head analyses — the emotional/sexual blunting-sparing claim.",
      management: "Counsel positively; compare with class.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Serotonin syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "SERT blockade aboard.",
      management: "Washout rules.",
    },
    {
      name: "Hyponatraemia (elderly)",
      frequency: "uncommon",
      severity: "severe",
      description: "Class effect.",
      management: "Sodium if confused.",
    },
    {
      name: "Bleeding risk",
      frequency: "uncommon",
      severity: "moderate",
      description: "Class platelet effect.",
      management: "NSAID counselling.",
    },
    {
      name: "Angle-closure glaucoma (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Class report.",
      management: "Ocular history.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Nausea tolerance (week 1)",
      frequency: "At start",
      rationale: "The main tolerability gate.",
    },
    {
      parameter: "Mood and cognition response",
      frequency: "At 4-8 weeks",
      rationale: "The full assessment window (cognition trials 8 weeks).",
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
      drug: "Strong CYP2D6 inhibitors (bupropion, fluoxetine, paroxetine)",
      severity: "moderate",
      mechanism: "Raise vortioxetine modestly (2D6 is its main pathway).",
      action: "Dose awareness at 20 mg.",
    },
    {
      drug: "Other serotonergics and NSAIDs",
      severity: "major",
      mechanism: "Class risks.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited human data; class considerations — decisions individualised with obstetrics.",
    lactation: "Excreted in milk in small amounts; infant monitoring.",
  },
  renalAdjustment: "No adjustment for mild-moderate impairment.",
  hepaticAdjustment: "No adjustment for mild-moderate; caution in severe.",
  /* ---- Education ---- */
  patientExplanation: "Vortioxetine is a modern antidepressant that acts on the serotonin system through several different doorways at once rather than only one. In trials it also showed benefits for concentration and processing speed, with lower rates of the sexual side effects that trouble older antidepressants. Its main side effect is nausea in the first week.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Vortioxetine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The multimodal pitch: one drug, six serotonergic actions — receptor-level pharmacology aimed at blunting, cognition, and emotional range rather than raw potency.",
    "The pro-cognitive dividend: processing-speed and cognitive-symptom data beyond mood — the antidepressant with a cognition claim.",
    "The sexual/blunting-sparing profile: lower sexual dysfunction than SSRIs in pooled analyses — a differentiator worth quoting.",
    "Nausea is the whole adverse-effect story: transient, week-1, manageable with food and a 5 mg start.",
    "No weight signal and no meaningful CYP interactions (it barely touches them) — the cleanest interaction profile of the modern antidepressants.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Vortioxetine: Vortioxetine combines SERT inhibition with direct actions at five 5-HT receptor subtypes — multimodal modulation of serotonergic throughput and downstream glutamatergic/GABAergic balance.",
        "Uses of Vortioxetine: Major depressive disorder",
        "Mechanism: MULTIMODAL — SERT inhibition + 5-HT1A agonist + 5-HT1B partial agonist + 5-HT1D/3/7 antagonists.",
        "MDD 10-20 mg once daily.",
      ],
      practical: [
        "Prescribe Vortioxetine for major depressive disorder with dose, timing, and duration.",
        "Outline the monitoring plan: Nausea tolerance (week 1) (At start); Mood and cognition response (At 4-8 weeks)",
      ],
      longAnswer: [
        "Vortioxetine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: MULTIMODAL — SERT inhibition + 5-HT1A agonist + 5-HT1B partial agonist + 5-HT1D/3/7 antagonists.",
        "MDD 10-20 mg once daily.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: MULTIMODAL — SERT inhibition + 5-HT1A agonist + 5-HT1B partial agonist + 5-HT1D/3/7 antagonists.",
        "MDD 10-20 mg once daily.",
        "Pro-cognitive evidence (processing speed) beyond mood.",
        "Lower sexual dysfunction than SSRIs in pooled analyses.",
        "Nausea is the dominant adverse effect (transient).",
        "Minimal CYP interactions; weight neutral.",
      ],
      pyqConcepts: ["Mechanism/target of Vortioxetine", "Key adverse effect: Serotonin syndrome", "Dosing and titration of Vortioxetine"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Vortioxetine develops serotonin syndrome — next best step?",
        "When to choose Vortioxetine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: SERT (inhibition) + 5-HT1A (agonist), 5-HT1B (partial agonist), 5-HT1D/5-HT3/5-HT7 (antagonists)",
        "Most common side effects: Nausea, Headache, Dizziness and dry mouth",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The multimodal pitch: one drug, six serotonergic actions — receptor-level pharmacology aimed at blunting, cognition, and emotional range rather than raw potency.",
        "The pro-cognitive dividend: processing-speed and cognitive-symptom data beyond mood — the antidepressant with a cognition claim.",
        "The sexual/blunting-sparing profile: lower sexual dysfunction than SSRIs in pooled analyses — a differentiator worth quoting.",
        "Nausea is the whole adverse-effect story: transient, week-1, manageable with food and a 5 mg start.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: MULTIMODAL — SERT inhibition + 5-HT1A agonist + 5-HT1B partial agonist + 5-HT1D/3/7 antagonists.",
    "MDD 10-20 mg once daily.",
    "Pro-cognitive evidence (processing speed) beyond mood.",
    "Lower sexual dysfunction than SSRIs in pooled analyses.",
    "Nausea is the dominant adverse effect (transient).",
    "Minimal CYP interactions; weight neutral.",
    "Class suicidality warning.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder",
      presentation: "A patient presenting with major depressive disorder, started on Vortioxetine.",
      history: "A adult patient presents with a major depressive disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder. Differentials are considered and excluded clinically.",
      rationale: "Vortioxetine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Multimodal Antidepressant) with strong evidence in this condition.",
      management: "Started at 10 mg once daily, titrated to 10-20 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Vortioxetine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Multimodal Antidepressant comparison — choosing within the class",
      primaryDrug: "Vortioxetine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "SERT (inhibition) + 5-HT1A (agonist), 5-HT1B (partial agonist), 5-HT1D/5-HT3/5-HT7 (antagonists)",
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
          primaryValue: "About 66 hours.",
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
              drug: "Trazodone",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Vilazodone",
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
              drug: "Trazodone",
              value: "Agent-specific.",
            },
            {
              drug: "Vilazodone",
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
          primaryValue: "The multimodal pro-cognitive antidepressant",
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
      description: "Vortioxetine reaches peak plasma concentration and begins acting at its molecular target (SERT (inhibition) + 5-HT1A (agonist), 5-HT1B (partial agonist), 5-HT1D/5-HT3/5-HT7 (antagonists)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea, headache, dizziness and dry mouth). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Response 2-4 weeks (cognition effects measured over 8 weeks in trials).)",
      title: "Therapeutic effect builds",
      description: "Response 2-4 weeks (cognition effects measured over 8 weeks in trials). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Vortioxetine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Vortioxetine take to work?",
      answer: "Response 2-4 weeks (cognition effects measured over 8 weeks in trials).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Vortioxetine?",
      answer: "The most frequently reported effects are: Nausea, Headache, Dizziness and dry mouth, Sexual dysfunction. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Vortioxetine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Vortioxetine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Vortioxetine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Vortioxetine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Vortioxetine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), vortioxetine monograph, p. 136",
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
        source: "FDA Prescribing Information for Trintellix (Vortioxetine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for vortioxetine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Vortioxetine",
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
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Vortioxetine",
      type: "drug",
      href: "/drugs/vortioxetine",
      note: "The drug you're reading about",
    },
    {
      label: "Multimodal Antidepressant",
      type: "class",
      href: "#mechanism",
      note: "Multimodal Serotonergic Antidepressant",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Acetylcholine (ACh)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "SERT (inhibition) + 5-HT1A (agonist), 5-HT1B (partial agonist), 5-HT1D/5-HT3/5-HT7 (antagonists)",
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
      label: "Serotonin syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Hyponatraemia (elderly)",
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
      label: "Patient Guide — Vortioxetine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The multimodal antidepressant — transporter blockade plus five receptor actions, with pro-cognitive evidence.",
    summary: "Vortioxetine is a prescription medicine used to treat major depressive disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Vortioxetine is a modern antidepressant that acts on the serotonin system through several different doorways at once rather than only one. In trials it also showed benefits for concentration and processing speed, with lower rates of the sexual side effects that trouble older antidepressants. Its main side effect is nausea in the first week.",
    sideEffects: "The most common side effects are: nausea, headache, dizziness and dry mouth, sexual dysfunction. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Serotonin syndrome and Hyponatraemia (elderly). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: nausea tolerance (week 1) (at start); mood and cognition response (at 4-8 weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Strong CYP2D6 inhibitors (bupropion, fluoxetine, paroxetine), Other serotonergics and NSAIDs. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Vortio / Vortiox (generic)",
        manufacturer: "various",
        strengths: "5-20 mg",
      },
    ],
    typicalDoses: "10 mg OD → 20 mg.",
    prescribingScenarios: [
      "Depression with cognitive-complaint emphasis.",
      "Post-SSRI sexual dysfunction switching.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "high",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Nausea tolerance at start; response at 4-8 weeks.",
    patientCounselling: [
      "Nausea in week 1 is expected and passes.",
      "Give the cognition benefit 8 weeks.",
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
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Atypical Antidepressants",
    members: [
      {
        name: "Vortioxetine",
        slug: "vortioxetine",
        relationship: "This guide",
        distinguishing: "The multimodal pro-cognitive antidepressant",
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
    study: "30 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Vortioxetine primarily act on?",
      options: [
        "SERT (inhibition) + 5-HT1A (agonist), 5-HT1B (partial agonist), 5-HT1D/5-HT3/5-HT7 (antagonists)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Vortioxetine acts primarily at SERT (inhibition) + 5-HT1A (agonist), 5-HT1B (partial agonist), 5-HT1D/5-HT3/5-HT7 (antagonists). Vortioxetine combines SERT inhibition with direct actions at five 5-HT receptor subtypes — multimodal modulation of serotonergic throughput and downstream glutamatergic/GABAergic balance.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Vortioxetine?",
      options: ["Nausea", "Headache", "Dizziness and dry mouth", "Sexual dysfunction"],
      correctIndex: 0,
      explanation: "Nausea — The dominant adverse effect — usually transient, worst in week 1.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Vortioxetine for major depressive disorder?",
      options: ["10-20 mg/day", "20 mg/day", "10-20 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For major depressive disorder: start 10 mg once daily, target 10-20 mg/day, maximum 20 mg/day. May increase to 20 mg after ≥ 1 week; start 5 mg if tolerability-sensitive",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Vortioxetine in two sentences.",
      answer: "Vortioxetine combines SERT inhibition with direct actions at five 5-HT receptor subtypes — multimodal modulation of serotonergic throughput and downstream glutamatergic/GABAergic balance. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Vortioxetine.",
      answer: "Major depressive disorder. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Vortioxetine and how you would manage it.",
      answer: "Serotonin syndrome: SERT blockade aboard. Management: Washout rules.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Vortioxetine require?",
      answer: "Nausea tolerance (week 1) (At start); Mood and cognition response (At 4-8 weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Vortioxetine that separates safe prescribers from unsafe ones.",
      answer: "The multimodal pitch: one drug, six serotonergic actions — receptor-level pharmacology aimed at blunting, cognition, and emotional range rather than raw potency.",
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
      checkpoint: "You now know what Vortioxetine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Vortioxetine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Vortioxetine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Vortioxetine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Vortioxetine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Vortioxetine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Response 2-4 weeks (cognition effects measured over 8 weeks in trials).",
    ],
    ifItWorks: [
      "Continue Vortioxetine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Vortioxetine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Vortioxetine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "10 mg once daily",
        titration: "May increase to 20 mg after ≥ 1 week; start 5 mg if tolerability-sensitive",
        target: "10-20 mg/day",
        max: "20 mg/day",
      },
    ],
    dosageForms: ["Tablets 5, 10, 20 mg"],
    dosingTips: [
      "5 mg start in the nausea-sensitive.",
      "Frame the 8-week cognition window honestly.",
      "The sexual-sparing claim: quote it, counsel on it, and follow up on it.",
    ],
    overdose: [
      "Overdose with Vortioxetine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Vortioxetine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 66 hours..", "Metabolism: Hepatic CYP metabolism.."],
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
    potentialAdvantages: ["Multimodal serotonergic action.", "Pro-cognitive evidence.", "Sexual/blunting-sparing profile.", "Minimal interactions; weight neutral."],
    potentialDisadvantages: [
      "No demonstrated superiority over SSRIs in head-to-head efficacy.",
      "Nausea gate.",
      "Cost (originator pricing in most markets).",
    ],
    primaryTargetSymptoms: [
      "Major depression",
      "Cognitive symptoms of depression",
      "Depression with sexual-function concerns",
    ],
    pearls: [
      "The multimodal pitch: one drug, six serotonergic actions — receptor-level pharmacology aimed at blunting, cognition, and emotional range rather than raw potency.",
      "The pro-cognitive dividend: processing-speed and cognitive-symptom data beyond mood — the antidepressant with a cognition claim.",
      "The sexual/blunting-sparing profile: lower sexual dysfunction than SSRIs in pooled analyses — a differentiator worth quoting.",
      "Nausea is the whole adverse-effect story: transient, week-1, manageable with food and a 5 mg start.",
      "No weight signal and no meaningful CYP interactions (it barely touches them) — the cleanest interaction profile of the modern antidepressants.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
