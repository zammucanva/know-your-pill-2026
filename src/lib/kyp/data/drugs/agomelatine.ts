import type { Drug } from "../types";

/**
 * Agomelatine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), agomelatine monograph (book p. 2)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const agomelatine: Drug = {
  /* ---- Identity ---- */
  slug: "agomelatine",
  genericName: "Agomelatine",
  brandNames: ["Valdoxan"],
  drugClass: "melatonergic-agonist",
  drugClassLabel: "Melatonergic Antidepressant",
  drugClassFullName: "Melatonin Receptor Agonist and 5-HT2C Antagonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "Melatonergic Antidepressants", "Agomelatine"],
  /* ---- Hero / summary ---- */
  tagline: "The melatonergic antidepressant. MT1/MT2 agonism plus 5-HT2C blockade for sleep-friendly mood lift.",
  summary: "Agomelatine is the melatonergic antidepressant: an MT1/MT2 receptor agonist (resynchronising circadian rhythm) plus 5-HT2C antagonist (dopamine/noradrenaline disinhibition); an antidepressant that IMPROVES sleep onset rather than disrupting it. Valued in Europe for depression with sleep disturbance; governed by mandatory LFT monitoring for hepatotoxicity.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Agomelatine, from its molecular target (Melatonin MT1/MT2 receptors (agonist) + 5-HT2C receptor (antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Agomelatine.",
    "Predict the common and serious side effects of Agomelatine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Agomelatine.",
    "Compare Agomelatine with other melatonergic antidepressants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Agomelatine agonises melatonin receptors (circadian resynchronisation) and blocks 5-HT2C (monoamine disinhibition), sleep-facilitating antidepressant action.",
    molecularTarget: "Melatonin MT1/MT2 receptors (agonist) + 5-HT2C receptor (antagonist)",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Agomelatine agonises melatonin receptors (circadian resynchronisation) and blocks 5-HT2C (monoamine disinhibition), sleep-facilitating antidepressant action.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 1-2 hours (short; chronobiotic action outlasts plasma). See mechanism and prescriber sections.",
    halfLife: "1-2 hours (short; chronobiotic action outlasts plasma).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Agomelatine",
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
    caption: "Acute reuptake blockade within hours; clinical response after weeks of downstream adaptation: the central paradox of antidepressant pharmacology.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Melatonin", "Serotonin (5-HT)"],
  receptors: ["MT1/MT2 (agonist)", "5-HT2C (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder",
      status: "guideline",
      description: "25-50 mg at bedtime; sleep improves from the first nights.",
    },
    {
      name: "Depression with sleep disturbance / circadian disruption",
      status: "guideline",
      description: "The signature niche: the antidepressant that fixes rather than fragments sleep.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Agomelatine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Strong CYP1A2 inhibitors (fluvoxamine, ciprofloxacin)",
      severity: "absolute",
      rationale: "Agomelatine levels rise up to 60×: the label contraindication.",
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
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "The commonest effect.",
      management: "Reassurance.",
    },
    {
      name: "Nausea and diarrhoea",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "With food.",
    },
    {
      name: "Somnolence or fatigue",
      frequency: "common",
      severity: "mild",
      description: "Dose-related at 50 mg.",
      management: "Dose review.",
    },
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "Mild.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hepatotoxicity",
      frequency: "uncommon",
      severity: "severe",
      description: "Transaminase elevation in ~1-2%; rare severe injury: mandatory LFT monitoring at baseline, 3, 6, 12, 24 weeks.",
      management: "Scheduled LFTs; stop if ≥ 3× ULN.",
    },
    {
      name: "Suicidality warning (class)",
      frequency: "uncommon",
      severity: "severe",
      description: "Standard antidepressant-class caution.",
      management: "Early monitoring.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "LFTs",
      frequency: "Baseline, then weeks 3, 6, 12, and 24: mandatory",
      rationale: "The hepatotoxicity schedule.",
    },
    {
      parameter: "Sleep and mood response",
      frequency: "At 2-4 weeks",
      rationale: "The dual assessment.",
    },
  ],
  interactions: [
    {
      drug: "Strong CYP1A2 inhibitors (fluvoxamine, ciprofloxacin)",
      severity: "contraindicated",
      mechanism: "Agomelatine levels rise up to 60×: the label contraindication.",
      action: "Never combine.",
    },
    {
      drug: "Alcohol",
      severity: "major",
      mechanism: "Hepatic additive burden.",
      action: "Counsel; avoid.",
    },
    {
      drug: "Smoking (1A2 induction)",
      severity: "moderate",
      mechanism: "Lowers agomelatine levels.",
      action: "Dose awareness.",
    },
  ],
  pregnancy: {
    summary: "Limited data; decisions individualised in its markets.",
    lactation: "Excreted in milk in animals; avoid pending data.",
  },
  renalAdjustment: "No adjustment for mild-moderate impairment.",
  hepaticAdjustment: "CONTRAINDICATED in hepatic impairment: the hepatotoxicity rule.",
  /* ---- Education ---- */
  patientExplanation: "Agomelatine is an antidepressant that works on the body clock: it mimics the natural sleep hormone melatonin and blocks a serotonin receptor, lifting mood while helping you fall asleep from the very first night, without the sexual or weight side effects of older antidepressants. It is taken at bedtime, and regular blood tests of the liver are a required part of treatment.",
  patientEducationPoints: [
    "Take it exactly as prescribed, at the same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Agomelatine builds over weeks. Do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The circadian thesis: resynchronise MT1/MT2 rhythm + disinhibit dopamine/noradrenaline via 5-HT2C blockade; an antidepressant built for the depressed insomniac.",
    "Sleep improves NIGHT ONE: the fastest felt benefit of any antidepressant (not the mood, the sleep).",
    "The liver schedule is mandatory, not optional: baseline, 3, 6, 12, 24 weeks. The pharmacovigilance discipline that keeps the drug safe.",
    "No sexual dysfunction, no weight gain, no discontinuation syndrome: the tolerability trinity that differentiates it from SSRIs.",
    "Bedtime dosing only: it is a chronobiotic wearing an antidepressant coat.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Agomelatine: Agomelatine agonises melatonin receptors (circadian resynchronisation) and blocks 5-HT2C (monoamine disinhibition), sleep-facilitating antidepressant action.",
        "Uses of Agomelatine: Major depressive disorder; Depression with sleep disturbance / circadian disruption",
        "Mechanism: MT1/MT2 AGONIST + 5-HT2C ANTAGONIST; melatonergic antidepressant.",
        "25-50 mg AT BEDTIME; sleep improves from night one.",
      ],
      practical: [
        "Prescribe Agomelatine for major depressive disorder with dose, timing, and duration.",
        "Outline the monitoring plan: LFTs (Baseline, then weeks 3, 6, 12, and 24, mandatory); Sleep and mood response (At 2-4 weeks)",
      ],
      longAnswer: [
        "Agomelatine: mechanism, indications, adverse effects, contraindications, and dosing; structured answer framework.",
        "Mechanism: MT1/MT2 AGONIST + 5-HT2C ANTAGONIST; melatonergic antidepressant.",
        "25-50 mg AT BEDTIME; sleep improves from night one.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: MT1/MT2 AGONIST + 5-HT2C ANTAGONIST; melatonergic antidepressant.",
        "25-50 mg AT BEDTIME; sleep improves from night one.",
        "No sexual dysfunction, weight, or discontinuation-syndrome signals.",
        "Mandatory LFT schedule (baseline, 3, 6, 12, 24 weeks): hepatotoxicity.",
        "EU/UK/Australia approvals; not FDA-approved.",
        "Class suicidality caution.",
      ],
      pyqConcepts: ["Mechanism/target of Agomelatine", "Key adverse effect: Hepatotoxicity", "Dosing and titration of Agomelatine"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Agomelatine develops hepatotoxicity: next best step?",
        "When to choose Agomelatine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Melatonin MT1/MT2 receptors (agonist) + 5-HT2C receptor (antagonist)",
        "Most common side effects: Headache, Nausea and diarrhoea, Somnolence or fatigue",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The circadian thesis: resynchronise MT1/MT2 rhythm + disinhibit dopamine/noradrenaline via 5-HT2C blockade; an antidepressant built for the depressed insomniac.",
        "Sleep improves NIGHT ONE: the fastest felt benefit of any antidepressant (not the mood, the sleep).",
        "The liver schedule is mandatory, not optional: baseline, 3, 6, 12, 24 weeks. The pharmacovigilance discipline that keeps the drug safe.",
        "No sexual dysfunction, no weight gain, no discontinuation syndrome: the tolerability trinity that differentiates it from SSRIs.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: MT1/MT2 AGONIST + 5-HT2C ANTAGONIST; melatonergic antidepressant.",
    "25-50 mg AT BEDTIME; sleep improves from night one.",
    "No sexual dysfunction, weight, or discontinuation-syndrome signals.",
    "Mandatory LFT schedule (baseline, 3, 6, 12, 24 weeks): hepatotoxicity.",
    "EU/UK/Australia approvals; not FDA-approved.",
    "Class suicidality caution.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation: major depressive disorder",
      presentation: "A patient presenting with major depressive disorder, started on Agomelatine.",
      history: "A adult patient presents with a major depressive disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder. Differentials are considered and excluded clinically.",
      rationale: "Agomelatine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Melatonergic Antidepressant) with strong evidence in this condition.",
      management: "Started at 25 mg once daily at bedtime, titrated to 25-50 mg at night with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Agomelatine takes weeks for full effect: early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Melatonergic Antidepressant vs related agents: orientation table",
      primaryDrug: "Agomelatine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Melatonin MT1/MT2 receptors (agonist) + 5-HT2C receptor (antagonist)",
          comparisons: [
            {
              drug: "Mirtazapine",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
          comparisons: [
            {
              drug: "Mirtazapine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Mirtazapine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The circadian antidepressant: sleep-friendly by design",
          comparisons: [
            {
              drug: "Mirtazapine",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Agomelatine is compared here with related agents for orientation. Full comparison data lives in each drug's own guide: follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Agomelatine reaches peak plasma concentration and begins acting at its molecular target (Melatonin MT1/MT2 receptors (agonist) + 5-HT2C receptor (antagonist)). Initial effects are on sleep, energy, or side effects, not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (headache, nausea and diarrhoea, somnolence or fatigue). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Sleep benefit night one; mood benefit 2-4 weeks.)",
      title: "Therapeutic effect builds",
      description: "Sleep benefit night one; mood benefit 2-4 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Agomelatine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Agomelatine take to work?",
      answer: "Sleep benefit night one; mood benefit 2-4 weeks.. Like most psychotropic medications, the full benefit builds gradually, some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Agomelatine?",
      answer: "The most frequently reported effects are: Headache, Nausea and diarrhoea, Somnolence or fatigue, Dizziness. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Agomelatine suddenly?",
      answer: "No. Taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose. In that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Agomelatine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Agomelatine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Agomelatine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure. Agomelatine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), agomelatine monograph, p. 2",
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
        source: "FDA Prescribing Information for Valdoxan (Agomelatine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for agomelatine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Agomelatine",
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
      name: "Depression with sleep disturbance / circadian disruption",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Agomelatine",
      type: "drug",
      href: "/drugs/agomelatine",
      note: "The drug you're reading about",
    },
    {
      label: "Melatonergic Antidepressant",
      type: "class",
      href: "#mechanism",
      note: "Melatonin Receptor Agonist and 5-HT2C Antagonist",
    },
    {
      label: "Melatonin",
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
      label: "Melatonin MT1/MT2 receptors (agonist) + 5-HT2C receptor (antagonist)",
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
      label: "Depression with sleep disturbance / circadian disruption",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hepatotoxicity",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Suicidality warning (class)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Headache",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide. Agomelatine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The melatonergic antidepressant. MT1/MT2 agonism plus 5-HT2C blockade for sleep-friendly mood lift.",
    summary: "Agomelatine is a prescription medicine used to treat major depressive disorder. It belongs to a well-studied class of medicines and works gradually, most people notice the benefit over weeks, not days.",
    mechanism: "Agomelatine is an antidepressant that works on the body clock: it mimics the natural sleep hormone melatonin and blocks a serotonin receptor, lifting mood while helping you fall asleep from the very first night, without the sexual or weight side effects of older antidepressants. It is taken at bedtime, and regular blood tests of the liver are a required part of treatment.",
    sideEffects: "The most common side effects are: headache, nausea and diarrhoea, somnolence or fatigue, dizziness. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hepatotoxicity and Suicidality warning (class). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you: there is almost always a solution.",
    monitoring: "Your doctor will monitor: lfts (baseline, then weeks 3, 6, 12, and 24, mandatory); sleep and mood response (at 2-4 weeks). Keep every appointment: these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take, including over-the-counter and herbal products. Common interacting agents include: Strong CYP1A2 inhibitors (fluvoxamine, ciprofloxacin), Alcohol, Smoking (1A2 induction). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Not marketed in India (limited access)",
        manufacturer: "imported",
        strengths: "25 mg",
      },
    ],
    typicalDoses: "25-50 mg nocte.",
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
    monitoring: "As per international guidance; see the Monitoring section.",
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
    familyName: "Melatonergic Antidepressants",
    members: [
      {
        name: "Agomelatine",
        slug: "agomelatine",
        relationship: "This guide",
        distinguishing: "The circadian antidepressant: sleep-friendly by design",
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
      question: "Which molecular target does Agomelatine primarily act on?",
      options: [
        "Melatonin MT1/MT2 receptors (agonist) + 5-HT2C receptor (antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Agomelatine acts primarily at Melatonin MT1/MT2 receptors (agonist) + 5-HT2C receptor (antagonist). Agomelatine agonises melatonin receptors (circadian resynchronisation) and blocks 5-HT2C (monoamine disinhibition) — sleep-facilitating antidepressant action.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Agomelatine?",
      options: ["Headache", "Nausea and diarrhoea", "Somnolence or fatigue", "Dizziness"],
      correctIndex: 0,
      explanation: "Headache — The commonest effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Agomelatine for major depressive disorder?",
      options: ["25-50 mg at night", "50 mg/day", "25-50 mg at night (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For major depressive disorder: start 25 mg once daily at bedtime, target 25-50 mg at night, maximum 50 mg/day. Increase to 50 mg after 2 weeks if needed",
      afterSectionId: "prescriber-guide",
    },
    {
      id: "atd-ago-01",
      question: "Agomelatine's defining receptor pharmacology is:",
      options: [
        "Agonism at MT1 and MT2 melatonin receptors with antagonism at 5-HT2C receptors",
        "Blockade of melatonin receptors with direct 5-HT2C receptor agonism",
        "Selective inhibition of SERT with partial 5-HT1A agonism",
        "Reversible inhibition of monoamine oxidase-A"
      ],
      correctIndex: 0,
      explanation: "Agomelatine combines MT1/MT2 melatonergic agonism with 5-HT2C antagonism (Katzung) — the pairing that phase-advances circadian rhythms and disinhibits frontal catecholamines. The mirror option flips every receptor action (a favourite trap), SERT plus 5-HT1A partial agonism is vilazodone, and reversible MAO-A inhibition is moclobemide's RIMA definition.",
      afterSectionId: "mechanism",
    },
    {
      id: "atd-ago-02",
      question: "Blockade of 5-HT2C receptors by agomelatine produces which downstream effect relevant to its antidepressant action?",
      options: [
        "Suppression of REM sleep and motor restlessness",
        "Increased prolactin and cortisol secretion",
        "Disinhibition of dopamine and norepinephrine release in the frontal cortex",
        "Direct blockade of D2 receptors in the mesolimbic pathway"
      ],
      correctIndex: 2,
      explanation: "5-HT2C receptors tonically restrain frontal dopaminergic and noradrenergic pathways; agomelatine's 5-HT2C antagonism releases that brake, disinhibiting dopamine and norepinephrine release in the frontal cortex — a catecholaminergic limb that explains antidepressant efficacy without D2 blockade, hence no parkinsonism or hyperprolactinaemia. REM suppression and prolactin/cortisol rises are not its documented signature, and D2 blockade is amoxapine/antipsychotic territory.",
      afterSectionId: "neurotransmitters",
    },
    {
      id: "atd-ago-03",
      question: "A 38-year-old night-shift nurse has depression with severely delayed sleep onset, morning fatigue and a body clock that \"never resets\"; she fears morning sedation because she operates machinery. Which antidepressant best matches her profile?",
      options: [
        "Fluoxetine, because its long half-life guarantees overnight cover",
        "Agomelatine, because melatonergic phase-advancing improves sleep architecture without a daytime hangover",
        "Reboxetine, because noradrenergic arousal restores the circadian rhythm",
        "Mirtazapine, because H1 blockade guarantees dreamless sleep"
      ],
      correctIndex: 1,
      explanation: "Agomelatine was built for exactly this vignette: MT1/MT2 agonism entrains circadian phase and improves sleep continuity, while 5-HT2C antagonism adds antidepressant action — all without a next-morning hangover, which matters for her machinery work. Fluoxetine's long half-life more often fragments sleep, reboxetine causes insomnia, and mirtazapine's H1 sedation is precisely the daytime fog she fears.",
      afterSectionId: "quick-facts",
    },
    {
      id: "atd-ago-04",
      question: "The single most important laboratory safety duty when prescribing agomelatine is:",
      options: [
        "Monthly serum prolactin measurement",
        "Weekly full blood counts for the first 3 months",
        "Serial serum electrolytes and ECG every 6 weeks",
        "Liver function tests at baseline and periodically during the first months of treatment"
      ],
      correctIndex: 3,
      explanation: "Agomelatine can cause transaminase elevations and rare serious hepatotoxicity, so LFTs (ALT/AST) are checked at baseline and then at protocolised intervals during the early months of treatment — any rise above normal limits means stopping the drug. Prolactin surveillance is for D2-blocking drugs, CBC schedules belong to clozapine and mianserin, and electrolyte/ECG routines belong to other classes entirely.",
      afterSectionId: "quick-facts",
    },
    {
      id: "atd-ago-05",
      question: "A 45-year-old woman starts agomelatine 25 mg at bedtime for MDD with insomnia. What is the correct LFT monitoring schedule she should be booked into?",
      options: [
        "Baseline, then around weeks 3, 6, 12 and 24 of treatment",
        "Baseline only — no further testing unless jaundice appears",
        "Weekly LFTs for 1 year, then yearly thereafter",
        "LFTs only after 2 years of continuous therapy"
      ],
      correctIndex: 0,
      explanation: "The agomelatine monitoring contract is baseline LFTs repeated at approximately 3, 6, 12 and 24 weeks — the windows in which drug-induced transaminase rises declare themselves — with prompt withdrawal if ALT/AST exceed the normal limits. Testing once at baseline defeats the purpose (the injury develops on-drug), weekly-for-a-year is clozapine-grade overkill no label demands, and waiting years ignores that the risk front-loads in the first months.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "atd-ago-06",
      question: "A 31-year-old woman rejects sertraline (anorgasmia last time) and mirtazapine (7 kg weight gain) and asks for an antidepressant with \"no sexual problems, no weight gain, no withdrawal when I stop, and no morning fog.\" Which option's tolerability fingerprint fits her demands?",
      options: [
        "Reboxetine — a pure NRI guaranteed free of any sexual or weight effects",
        "Agomelatine — no sexual dysfunction, weight-neutral, no discontinuation syndrome, no daytime hangover",
        "Tianeptine — an opioid-agonist antidepressant with no misuse potential",
        "Nefazodone — hepatotoxicity is its only meaningful concern"
      ],
      correctIndex: 1,
      explanation: "Agomelatine's tolerability card is exactly her list: absent sexual dysfunction, weight neutrality, no discontinuation syndrome and no daytime hangover — the trade is vigilant LFT monitoring. Reboxetine is noradrenergic (insomnia, palpitations, urinary hesitancy) with no guarantee of a clean sexual profile, tianeptine's mu-opioid agonism is precisely why misuse potential exists, and nefazodone's sexual sparing came bundled with the black-box hepatotoxicity that pushed it out of routine use.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "atd-ago-07",
      question: "Which statement about agomelatine's availability and regulatory status is correct?",
      options: [
        "It has been FDA-approved since 2009 for MDD with insomnia",
        "It is available only in the United States",
        "It is a Schedule IV controlled substance in India",
        "It is approved in Europe and marketed in countries including India and Australia, but has never been FDA-approved"
      ],
      correctIndex: 3,
      explanation: "Agomelatine is the classic \"approved in Europe, never in the USA\" antidepressant — Katzung notes European approval for MDD, and the drug is marketed in India (and Australia/UK), so any FDA claim is the trap. It is not a controlled substance, and \"US-only\" inverts the true geography of its use.",
      afterSectionId: "top",
    },
    {
      id: "atd-ago-08",
      question: "A 52-year-old man on agomelatine for MDD develops obsessive-compulsive symptoms, and fluvoxamine 200 mg daily is added. The most important consequence is:",
      options: [
        "Additive melatonergic sedation requiring the agomelatine dose to be halved",
        "A beneficial rise in agomelatine levels improving both disorders",
        "A contraindicated combination — fluvoxamine, a potent CYP1A2 inhibitor, can multiply agomelatine exposure many-fold, raising hepatotoxicity risk",
        "Serotonin syndrome from the combined 5-HT2C antagonism"
      ],
      correctIndex: 2,
      explanation: "Agomelatine is cleared mainly by CYP1A2 (with minor 2C9/2C19 contribution), and potent 1A2 inhibitors such as fluvoxamine multiply its exposure many-fold — the combination is contraindicated on the European label, not least because higher levels raise the hepatotoxicity stakes of a drug already on LFT probation. Sedation is not the feared outcome, \"more drug means more benefit\" inverts the danger, and 5-HT2C antagonism is not a serotonin-syndrome mechanism.",
      afterSectionId: "knowledge-graph",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Agomelatine in two sentences.",
      answer: "Agomelatine agonises melatonin receptors (circadian resynchronisation) and blocks 5-HT2C (monoamine disinhibition), sleep-facilitating antidepressant action. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Agomelatine.",
      answer: "Major depressive disorder, Depression with sleep disturbance / circadian disruption. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Agomelatine and how you would manage it.",
      answer: "Hepatotoxicity: Transaminase elevation in ~1-2%; rare severe injury: mandatory LFT monitoring at baseline, 3, 6, 12, 24 weeks. Management: Scheduled LFTs; stop if ≥ 3× ULN.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Agomelatine require?",
      answer: "LFTs (Baseline, then weeks 3, 6, 12, and 24, mandatory); Sleep and mood response (At 2-4 weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Agomelatine that separates safe prescribers from unsafe ones.",
      answer: "The circadian thesis: resynchronise MT1/MT2 rhythm + disinhibit dopamine/noradrenaline via 5-HT2C blockade; an antidepressant built for the depressed insomniac.",
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
      description: "Everything: advanced reasoning, full prescriber guide, evidence, and references.",
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
      checkpoint: "You now know what Agomelatine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Agomelatine works, from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Agomelatine safely: indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Agomelatine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Agomelatine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Agomelatine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Sleep benefit night one; mood benefit 2-4 weeks.",
    ],
    ifItWorks: [
      "Continue Agomelatine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Agomelatine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Agomelatine follow directly from its receptor and organ effects: predict them from the mechanism.",
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
        starting: "25 mg once daily at bedtime",
        titration: "Increase to 50 mg after 2 weeks if needed",
        target: "25-50 mg at night",
        max: "50 mg/day",
      },
    ],
    dosageForms: ["Film-coated tablets 25 mg"],
    dosingTips: [
      "Bedtime dosing, never morning.",
      "The LFT schedule is a prescribing condition.",
      "Sell the sleep-first benefit; the mood follows in weeks.",
    ],
    overdose: [
      "Overdose with Agomelatine is managed supportively: no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Agomelatine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 1-2 hours (short; chronobiotic action outlasts plasma)..",
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
      "Sleep-facilitating (unique).",
      "No sexual/weight/discontinuation signals.",
      "Rapid sleep improvement.",
    ],
    potentialDisadvantages: [
      "Mandatory LFT monitoring.",
      "Fluvoxamine/ciprofloxacin contraindication.",
      "Modest efficacy vs SSRIs in some analyses.",
      "Not FDA-approved.",
    ],
    primaryTargetSymptoms: ["Depression with insomnia", "Circadian-disrupted depression"],
    pearls: [
      "The circadian thesis: resynchronise MT1/MT2 rhythm + disinhibit dopamine/noradrenaline via 5-HT2C blockade; an antidepressant built for the depressed insomniac.",
      "Sleep improves NIGHT ONE: the fastest felt benefit of any antidepressant (not the mood, the sleep).",
      "The liver schedule is mandatory, not optional: baseline, 3, 6, 12, 24 weeks. The pharmacovigilance discipline that keeps the drug safe.",
      "No sexual dysfunction, no weight gain, no discontinuation syndrome: the tolerability trinity that differentiates it from SSRIs.",
      "Bedtime dosing only: it is a chronobiotic wearing an antidepressant coat.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017); facts are paraphrased, not reproduced.",
  ],
};
