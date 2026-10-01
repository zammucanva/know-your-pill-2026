import type { Drug } from "../types";

/**
 * Tianeptine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), tianeptine monograph (book p. 123)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const tianeptine: Drug = {
  /* ---- Identity ---- */
  slug: "tianeptine",
  genericName: "Tianeptine",
  brandNames: ["Stablon", "Coaxil / Tianeptine (India)"],
  drugClass: "atypical-antidepressant",
  drugClassLabel: "Atypical Antidepressant",
  drugClassFullName: "Atypical (Modulating) Antidepressant",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "Atypical Antidepressants", "Tianeptine"],
  /* ---- Hero / summary ---- */
  tagline: "The atypical antidepressant that modulates glutamate — anxiolytic mood lift with an unusual abuse footnote.",
  summary: "Tianeptine is the atypical (tricyclic-structured) antidepressant whose mechanism has migrated in the literature from 'serotonin reuptake ENHANCER' to glutamate modulation (and weak mu-opioid agonism): anxiolytic-tilted antidepressant action popular in France, parts of Europe, Asia — and India. Its modern infamy is high-dose abuse (opioid-like) in some countries, prompting control measures.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Tianeptine — from its molecular target (Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism) to clinical effect.",
    "List the FDA-approved and off-label uses of Tianeptine.",
    "Predict the common and serious side effects of Tianeptine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Tianeptine.",
    "Compare Tianeptine with other atypical antidepressants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Tianeptine modulates glutamatergic neurotransmission (with weak mu-opioid receptor activity) — an anxiolytic-tilted antidepressant action distinct from SSRI pharmacology.",
    molecularTarget: "Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Tianeptine modulates glutamatergic neurotransmission (with weak mu-opioid receptor activity) — an anxiolytic-tilted antidepressant action distinct from SSRI pharmacology.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 2.5 hours (TID dosing). — see mechanism and prescriber sections.",
    halfLife: "2.5 hours (TID dosing).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Tianeptine",
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
    "Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism",
  ],
  brainRegionIds: ["prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder",
      status: "guideline",
      description: "An anxiolytic-tilted alternative in its markets.",
    },
    {
      name: "Depression with anxiety",
      status: "guideline",
      description: "The calming-antidepressant niche it occupied in French practice.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Tianeptine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Class rule.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea and GI upset",
      frequency: "common",
      severity: "mild",
      description: "The commonest effects.",
      management: "With food.",
    },
    {
      name: "Drowsiness or dizziness",
      frequency: "common",
      severity: "mild",
      description: "Mild.",
      management: "Dose timing.",
    },
    {
      name: "Dry mouth and headache",
      frequency: "common",
      severity: "mild",
      description: "Class-typical.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Abuse and dependence at high doses",
      frequency: "uncommon",
      severity: "severe",
      description: "Weak mu-opioid agonism → high-dose euphoria and dependence patterns reported (notably in the USA where unscheduled access enabled misuse); control measures followed.",
      management: "Prescription discipline; escalation awareness; avoid in substance-use history.",
    },
    {
      name: "Hepatotoxicity (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Liver injury reports.",
      management: "LFT vigilance.",
    },
    {
      name: "Respiratory depression (massive overdose)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Opioid-like at extreme doses.",
      management: "Emergency awareness.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Dose-escalation review",
      frequency: "Every prescription",
      rationale: "The abuse-awareness discipline.",
    },
    {
      parameter: "LFTs if symptomatic",
      frequency: "Symptom-driven",
      rationale: "Hepatic vigilance.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Class rule.",
      action: "Washout.",
    },
    {
      drug: "Opioids and CNS depressants",
      severity: "major",
      mechanism: "Additive respiratory risk at high doses.",
      action: "Avoid; counsel.",
    },
    {
      drug: "Alcohol",
      severity: "major",
      mechanism: "Hepatic and CNS additive burden.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    summary: "Limited data; decisions individualised in its markets.",
    lactation: "Excreted in milk; caution.",
  },
  renalAdjustment: "Standard caution in renal impairment.",
  hepaticAdjustment: "Caution — hepatotoxicity reports; reduce dose in impairment.",
  /* ---- Education ---- */
  patientExplanation: "Tianeptine is an older-style antidepressant used in parts of Europe and Asia for depression with anxiety — it works differently from SSRIs, on the brain's glutamate system. Taken three times daily, it is generally well tolerated. In very high doses it has been misused for opioid-like effects, which is why it is prescribed with care and never at more than the stated dose.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Tianeptine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The mechanism that changed labels: 'serotonin reuptake enhancer' (the anti-SSRI) → glutamate modulator → weak mu-opioid agonism — a pharmacology rewritten by research.",
    "The abuse footnote: unscheduled US access produced high-dose opioid-like misuse epidemics — a pharmacovigilance story that reached control schedules.",
    "France's anxiolytic antidepressant: the calm-depression niche, then and now in its origin markets.",
    "TID dosing is the adherence tax — three meals, three tablets.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Tianeptine: Tianeptine modulates glutamatergic neurotransmission (with weak mu-opioid receptor activity) — an anxiolytic-tilted antidepressant action distinct from SSRI pharmacology.",
        "Uses of Tianeptine: Major depressive disorder; Depression with anxiety",
        "Mechanism: glutamate modulation (historically 'serotonin reuptake ENHANCEMENT'); weak mu-opioid agonism.",
        "Anxiolytic-tilted antidepressant in EU/Asian markets.",
      ],
      practical: [
        "Prescribe Tianeptine for major depressive disorder with dose, timing, and duration.",
        "Outline the monitoring plan: Dose-escalation review (Every prescription); LFTs if symptomatic (Symptom-driven)",
      ],
      longAnswer: [
        "Tianeptine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: glutamate modulation (historically 'serotonin reuptake ENHANCEMENT'); weak mu-opioid agonism.",
        "Anxiolytic-tilted antidepressant in EU/Asian markets.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: glutamate modulation (historically 'serotonin reuptake ENHANCEMENT'); weak mu-opioid agonism.",
        "Anxiolytic-tilted antidepressant in EU/Asian markets.",
        "Signature risk: high-dose ABUSE and dependence (mu-opioid activity).",
        "Dose 12.5 mg TID (37.5 mg/day).",
        "Not FDA-approved; control measures in several countries.",
      ],
      pyqConcepts: [
        "Mechanism/target of Tianeptine",
        "Key adverse effect: Abuse and dependence at high doses",
        "Dosing and titration of Tianeptine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Tianeptine develops abuse and dependence at high doses — next best step?",
        "When to choose Tianeptine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism",
        "Most common side effects: Nausea and GI upset, Drowsiness or dizziness, Dry mouth and headache",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The mechanism that changed labels: 'serotonin reuptake enhancer' (the anti-SSRI) → glutamate modulator → weak mu-opioid agonism — a pharmacology rewritten by research.",
        "The abuse footnote: unscheduled US access produced high-dose opioid-like misuse epidemics — a pharmacovigilance story that reached control schedules.",
        "France's anxiolytic antidepressant: the calm-depression niche, then and now in its origin markets.",
        "TID dosing is the adherence tax — three meals, three tablets.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: glutamate modulation (historically 'serotonin reuptake ENHANCEMENT'); weak mu-opioid agonism.",
    "Anxiolytic-tilted antidepressant in EU/Asian markets.",
    "Signature risk: high-dose ABUSE and dependence (mu-opioid activity).",
    "Dose 12.5 mg TID (37.5 mg/day).",
    "Not FDA-approved; control measures in several countries.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder",
      presentation: "A patient presenting with major depressive disorder, started on Tianeptine.",
      history: "A adult patient presents with a major depressive disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder. Differentials are considered and excluded clinically.",
      rationale: "Tianeptine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antidepressant) with strong evidence in this condition.",
      management: "Started at 12.5 mg three times daily, titrated to 37.5 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Tianeptine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antidepressant comparison — choosing within the class",
      primaryDrug: "Tianeptine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism",
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
              drug: "Nefazodone",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "2.5 hours (TID dosing).",
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
              drug: "Nefazodone",
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
              drug: "Nefazodone",
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
              drug: "Nefazodone",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The glutamate modulator with the opioid footnote",
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
              drug: "Nefazodone",
              value: "The expert-only SARI — withdrawn for hepatotoxicity",
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
      description: "Tianeptine reaches peak plasma concentration and begins acting at its molecular target (Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea and gi upset, drowsiness or dizziness, dry mouth and headache). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Tianeptine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Tianeptine take to work?",
      answer: "Response 2-4 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Tianeptine?",
      answer: "The most frequently reported effects are: Nausea and GI upset, Drowsiness or dizziness, Dry mouth and headache. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Tianeptine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Tianeptine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Tianeptine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Tianeptine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Tianeptine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), tianeptine monograph, p. 123",
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
        source: "FDA Prescribing Information for Stablon (Tianeptine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for tianeptine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Tianeptine",
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
      name: "Nefazodone",
      slug: "nefazodone",
      drugClass: "SARI",
      relationship: "Same class (SARI)",
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
      relationship: "alternative",
    },
    {
      name: "Depression with anxiety",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Tianeptine",
      type: "drug",
      href: "/drugs/tianeptine",
      note: "The drug you're reading about",
    },
    {
      label: "Atypical Antidepressant",
      type: "class",
      href: "#mechanism",
      note: "Atypical (Modulating) Antidepressant",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism",
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
      label: "Depression with anxiety",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Abuse and dependence at high doses",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Hepatotoxicity (rare)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea and GI upset",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Tianeptine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The atypical antidepressant that modulates glutamate — anxiolytic mood lift with an unusual abuse footnote.",
    summary: "Tianeptine is a prescription medicine used to treat major depressive disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Tianeptine is an older-style antidepressant used in parts of Europe and Asia for depression with anxiety — it works differently from SSRIs, on the brain's glutamate system. Taken three times daily, it is generally well tolerated. In very high doses it has been misused for opioid-like effects, which is why it is prescribed with care and never at more than the stated dose.",
    sideEffects: "The most common side effects are: nausea and gi upset, drowsiness or dizziness, dry mouth and headache. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Abuse and dependence at high doses and Hepatotoxicity (rare). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: dose-escalation review (every prescription); lfts if symptomatic (symptom-driven). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Opioids and CNS depressants, Alcohol. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Tianeptine / Ternoshine-type",
        manufacturer: "various",
        strengths: "12.5 mg",
      },
    ],
    typicalDoses: "12.5 mg TID.",
    prescribingScenarios: [
      "Anxious depression in Indian practice — a mid-century French legacy in the Indian formulary.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Prescription discipline against escalation.",
    patientCounselling: [
      "Strictly the prescribed dose — higher doses cause dependence.",
      "Three-times-daily with meals.",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Atypical Antidepressants",
    members: [
      {
        name: "Tianeptine",
        slug: "tianeptine",
        relationship: "This guide",
        distinguishing: "The glutamate modulator with the opioid footnote",
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
        name: "Nefazodone",
        slug: "nefazodone",
        relationship: "Same class (SARI)",
        distinguishing: "The expert-only SARI — withdrawn for hepatotoxicity",
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
      question: "Which molecular target does Tianeptine primarily act on?",
      options: [
        "Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Tianeptine acts primarily at Glutamate modulation (described as serotonin reuptake enhancement historically); weak mu-opioid agonism. Tianeptine modulates glutamatergic neurotransmission (with weak mu-opioid receptor activity) — an anxiolytic-tilted antidepressant action distinct from SSRI pharmacology.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Tianeptine?",
      options: ["Nausea and GI upset", "Drowsiness or dizziness", "Dry mouth and headache", "Weight gain"],
      correctIndex: 0,
      explanation: "Nausea and GI upset — The commonest effects.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Tianeptine for major depressive disorder?",
      options: ["37.5 mg/day", "37.5 mg/day (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For major depressive disorder: start 12.5 mg three times daily, target 37.5 mg/day, maximum 37.5 mg/day. Fixed TID dosing per label",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Tianeptine in two sentences.",
      answer: "Tianeptine modulates glutamatergic neurotransmission (with weak mu-opioid receptor activity) — an anxiolytic-tilted antidepressant action distinct from SSRI pharmacology. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Tianeptine.",
      answer: "Major depressive disorder, Depression with anxiety. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Tianeptine and how you would manage it.",
      answer: "Abuse and dependence at high doses: Weak mu-opioid agonism → high-dose euphoria and dependence patterns reported (notably in the USA where unscheduled access enabled misuse); control measures followed. Management: Prescription discipline; escalation awareness; avoid in substance-use history.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Tianeptine require?",
      answer: "Dose-escalation review (Every prescription); LFTs if symptomatic (Symptom-driven)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Tianeptine that separates safe prescribers from unsafe ones.",
      answer: "The mechanism that changed labels: 'serotonin reuptake enhancer' (the anti-SSRI) → glutamate modulator → weak mu-opioid agonism — a pharmacology rewritten by research.",
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
      checkpoint: "You now know what Tianeptine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Tianeptine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Tianeptine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Tianeptine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Tianeptine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Tianeptine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Response 2-4 weeks."],
    ifItWorks: [
      "Continue Tianeptine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Tianeptine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Tianeptine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "12.5 mg three times daily",
        titration: "Fixed TID dosing per label",
        target: "37.5 mg/day",
        max: "37.5 mg/day",
      },
    ],
    dosageForms: ["Tablets 12.5 mg"],
    dosingTips: [
      "Fixed TID dosing with meals.",
      "Take a substance-use history before prescribing.",
      "Note the escalation pattern early.",
    ],
    overdose: [
      "Overdose with Tianeptine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Tianeptine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 2.5 hours (TID dosing)..", "Metabolism: Hepatic CYP metabolism.."],
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
      "Anxiolytic antidepressant profile.",
      "No sexual dysfunction or weight signal of SSRI type.",
      "Long market experience in its regions.",
    ],
    potentialDisadvantages: [
      "TID dosing.",
      "Abuse potential at high doses.",
      "Not available in the USA (and controlled in some places).",
      "Mechanism still debated.",
    ],
    primaryTargetSymptoms: ["Depression with anxiety", "Dysthymia (its markets)"],
    pearls: [
      "The mechanism that changed labels: 'serotonin reuptake enhancer' (the anti-SSRI) → glutamate modulator → weak mu-opioid agonism — a pharmacology rewritten by research.",
      "The abuse footnote: unscheduled US access produced high-dose opioid-like misuse epidemics — a pharmacovigilance story that reached control schedules.",
      "France's anxiolytic antidepressant: the calm-depression niche, then and now in its origin markets.",
      "TID dosing is the adherence tax — three meals, three tablets.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
