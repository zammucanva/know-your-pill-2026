import type { Drug } from "../types";

/**
 * Zopiclone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), zopiclone monograph (book p. 141)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const zopiclone: Drug = {
  /* ---- Identity ---- */
  slug: "zopiclone",
  genericName: "Zopiclone",
  brandNames: ["Imovane", "Zopicon / Zopi (India)"],
  drugClass: "non-benzodiazepine-hypnotic",
  drugClassLabel: "Z-Drug",
  drugClassFullName: "Non-Benzodiazepine Hypnotic (Z-Drug)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Non-Benzodiazepine Hypnotics", "Zopiclone"],
  /* ---- Hero / summary ---- */
  tagline: "The cyclopyrrolone with the metallic-taste signature — the Commonwealth world's Z-drug.",
  summary: "Zopiclone is the cyclopyrrolone hypnotic (half-life ~5 h) widely used across the Commonwealth, India, and Europe — pharmacologically the sibling of eszopiclone (its S-enantiomer). Its signature is a metallic/bitter taste and dry mouth; its niche is onset-plus-maintenance cover with slightly longer action than zolpidem. Class-standard boxed warnings apply.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Zopiclone — from its molecular target (GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic)) to clinical effect.",
    "List the FDA-approved and off-label uses of Zopiclone.",
    "Predict the common and serious side effects of Zopiclone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Zopiclone.",
    "Compare Zopiclone with other z-drugs and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Racemic cyclopyrrolone alpha-1-selective GABA-A PAM — eszopiclone's racemic parent.",
    molecularTarget: "GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic)",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Zopiclone is the cyclopyrrolone hypnotic (half-life ~5 h) widely used across the Commonwealth, India, and Europe — pharmacologically the sibling of eszopiclone (its S-enantiomer) — the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 5 hours. — see mechanism and prescriber sections.",
    halfLife: "About 5 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "gaba",
        label: "GABA",
        sublabel: "Inhibitory neurotransmitter",
        variant: "input",
      },
      {
        id: "a1",
        label: "GABA-A α1 receptor",
        sublabel: "Sleep-promoting subtype",
        variant: "target",
      },
      {
        id: "drug",
        label: "Zopiclone",
        sublabel: "α1-selective modulator",
        variant: "process",
      },
      {
        id: "sleep",
        label: "Sleep onset",
        sublabel: "Faster sleep initiation",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "gaba",
        to: "a1",
        label: "binds",
      },
      {
        from: "drug",
        to: "a1",
        label: "selectively enhances",
        type: "stimulate",
      },
      {
        from: "a1",
        to: "sleep",
        label: "promotes",
      },
    ],
    caption: "Z-drugs aim GABA where sleep is generated (the α1 subtype), retaining hypnotic efficacy with less anxiolysis, amnesia, and dependence than full benzodiazepines.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic)",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Insomnia — short-term (onset and maintenance)",
      status: "guideline",
      description: "3.75–7.5 mg nightly; 2–4 week courses.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Zopiclone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Complex sleep behaviours",
      text: "Class warning — stop on any event.",
    },
    {
      title: "CNS depressant co-administration",
      text: "Additive sedation.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Metallic/bitter taste and dry mouth",
      frequency: "very-common",
      severity: "mild",
      description: "The signature — most patients notice it.",
      management: "Reassurance.",
    },
    {
      name: "Morning drowsiness",
      frequency: "common",
      severity: "moderate",
      description: "Half-life ~5 h leaves residue at 7–8 h.",
      management: "7–8 h rule; 3.75 mg elderly.",
    },
    {
      name: "Bitter aftertaste nausea",
      frequency: "common",
      severity: "mild",
      description: "Related to the dysgeusia.",
      management: "Reassurance.",
    },
    {
      name: "Rebound insomnia",
      frequency: "common",
      severity: "moderate",
      description: "On cessation.",
      management: "Taper; warn.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Complex sleep behaviours",
      frequency: "uncommon",
      severity: "severe",
      description: "Class boxed warning.",
      management: "Stop.",
    },
    {
      name: "Next-day driving impairment",
      frequency: "common",
      severity: "severe",
      description: "7.5 mg impairs next-morning performance.",
      management: "Lower dose; 7–8 h rule.",
    },
    {
      name: "Dependence/misuse",
      frequency: "uncommon",
      severity: "severe",
      description: "Class risk — documented misuse patterns.",
      management: "Short courses; review.",
    },
    {
      name: "Falls (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Night-fall risk.",
      management: "3.75 mg elderly ceiling; hazards review.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Morning impairment / hangover",
      frequency: "Every review",
      rationale: "Next-day driving and safety impairment.",
    },
    {
      parameter: "Complex sleep behaviours",
      frequency: "Ask at every review",
      rationale: "Sleep-walking/driving/eating — stop the drug if reported.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol and CNS depressants",
      severity: "contraindicated",
      mechanism: "Additive sedation and marked next-morning impairment.",
      action: "Avoid the combination; counsel strongly.",
    },
    {
      drug: "Erythromycin and ketoconazole (CYP3A4 inhibitors)",
      severity: "major",
      mechanism: "Raise zopiclone levels — residual morning sedation and bitter-taste amplification.",
      action: "Dose reduction; consider an alternative.",
    },
    {
      drug: "Rifampicin (CYP3A4 inducer)",
      severity: "moderate",
      mechanism: "Accelerates clearance — sleep benefit lost.",
      action: "Review efficacy; consider switching agent.",
    },
  ],
  pregnancy: {
    summary: "Data in human pregnancy are limited. The decision to continue or stop balances the risk of untreated illness against possible drug exposure — for serious psychiatric illness, relapse prevention usually outweighs fetal risk. Involve obstetrics early and never stop abruptly without a plan.",
    lactation: "Small amounts may pass into breast milk. Decisions are individualised — monitor the infant for sedation and poor feeding, and discuss with your doctor.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Zopiclone is a widely used sleeping tablet in India and the Commonwealth: it helps you fall asleep and stay asleep for about 5–6 hours. Its most noticeable side effect is a metallic taste and dry mouth. Never mix it with alcohol, ensure 7–8 hours in bed, and report any sleep-walking immediately.",
  patientEducationPoints: [
    "Take it only when you can spend a full 7–8 hours in bed.",
    "Do not drive the next morning if you still feel drowsy.",
    "Stop and call your doctor if you sleep-walk, sleep-drive, or eat while asleep.",
    "Keep the course short — these medicines are for intermittent or short-term use.",
    "Benefit from Zopiclone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Zopiclone is the racemate; eszopiclone is its S-enantiomer — one pharmacology, two products, two markets.",
    "Metallic taste: ask, or patients quietly stop the drug without knowing why it tastes wrong.",
    "India's formulary staple among Z-drugs (with zolpidem) — same discipline, same boxed warnings.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Zopiclone: Racemic cyclopyrrolone alpha-1-selective GABA-A PAM — eszopiclone's racemic parent.",
        "Uses of Zopiclone: Insomnia — short-term (onset and maintenance)",
        "Cyclopyrrolone racemate; eszopiclone = S-enantiomer.",
        "Half-life ~5 h — onset + maintenance.",
      ],
      practical: [
        "Prescribe Zopiclone for insomnia — short-term (onset and maintenance) with dose, timing, and duration.",
        "Outline the monitoring plan: Morning impairment / hangover (Every review); Complex sleep behaviours (Ask at every review)",
      ],
      longAnswer: [
        "Zopiclone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Cyclopyrrolone racemate; eszopiclone = S-enantiomer.",
        "Half-life ~5 h — onset + maintenance.",
      ],
    },
    neetPg: {
      highYield: [
        "Cyclopyrrolone racemate; eszopiclone = S-enantiomer.",
        "Half-life ~5 h — onset + maintenance.",
        "Signature: metallic taste, dry mouth.",
        "Dose 3.75–7.5 mg (elderly 3.75 mg).",
        "Z-drugs: GABA-A alpha-1-selective PAMs — hypnotic without full benzodiazepine breadth.",
      ],
      pyqConcepts: [
        "Mechanism/target of Zopiclone",
        "Key adverse effect: Complex sleep behaviours",
        "Dosing and titration of Zopiclone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Zopiclone develops complex sleep behaviours — next best step?",
        "When to choose Zopiclone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic)",
        "Most common side effects: Metallic/bitter taste and dry mouth, Morning drowsiness, Bitter aftertaste nausea",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Zopiclone is the racemate; eszopiclone is its S-enantiomer — one pharmacology, two products, two markets.",
        "Metallic taste: ask, or patients quietly stop the drug without knowing why it tastes wrong.",
        "India's formulary staple among Z-drugs (with zolpidem) — same discipline, same boxed warnings.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Cyclopyrrolone racemate; eszopiclone = S-enantiomer.",
    "Half-life ~5 h — onset + maintenance.",
    "Signature: metallic taste, dry mouth.",
    "Dose 3.75–7.5 mg (elderly 3.75 mg).",
    "Z-drugs: GABA-A alpha-1-selective PAMs — hypnotic without full benzodiazepine breadth.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — insomnia — short-term (onset and maintenance)",
      presentation: "A patient presenting with insomnia — short-term (onset and maintenance), started on Zopiclone.",
      history: "A adult patient presents with a insomnia — short-term (onset and maintenance) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with insomnia — short-term (onset and maintenance); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Insomnia — short-term (onset and maintenance). Differentials are considered and excluded clinically.",
      rationale: "Zopiclone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Z-Drug) with strong evidence in this condition.",
      management: "Started at 3.75–7.5 mg at bedtime (3.75 mg elderly), titrated to 7.5 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Zopiclone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Z-Drug comparison — choosing within the class",
      primaryDrug: "Zopiclone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic)",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "See full guide",
            },
            {
              drug: "Eszopiclone",
              value: "See full guide",
            },
            {
              drug: "Zaleplon",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 5 hours.",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "—",
            },
            {
              drug: "Eszopiclone",
              value: "—",
            },
            {
              drug: "Zaleplon",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not associated with weight gain.",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "See product information and class comparison.",
            },
            {
              drug: "Eszopiclone",
              value: "Not associated with weight gain.",
            },
            {
              drug: "Zaleplon",
              value: "Not associated with weight gain.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High for the intended duration.",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "High for 2–3 hours — the intended effect; morning residue is the adverse effect.",
            },
            {
              drug: "Eszopiclone",
              value: "High for the intended duration.",
            },
            {
              drug: "Zaleplon",
              value: "High for the intended duration.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The Commonwealth Z-drug — 5-hour cover with taste signature",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "Sleep onset in a non-benzodiazepine molecule — the default Z-drug",
            },
            {
              drug: "Eszopiclone",
              value: "The 6-month-trial Z-drug with maintenance cover",
            },
            {
              drug: "Zaleplon",
              value: "Middle-of-the-night dosing — cleared before morning",
            },
          ],
        },
      ],
      takeaway: "All non-benzodiazepine hypnotics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Zopiclone reaches peak plasma concentration and begins acting at its molecular target (GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (metallic/bitter taste and dry mouth, morning drowsiness, bitter aftertaste nausea). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (15–30 minutes.)",
      title: "Therapeutic effect builds",
      description: "15–30 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Zopiclone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Zopiclone take to work?",
      answer: "15–30 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Zopiclone?",
      answer: "The most frequently reported effects are: Metallic/bitter taste and dry mouth, Morning drowsiness, Bitter aftertaste nausea, Rebound insomnia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Zopiclone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Zopiclone habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Zopiclone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Zopiclone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Zopiclone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "AASM Clinical Practice Guideline (Chronic Insomnia)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), zopiclone monograph, p. 141",
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
        source: "FDA Prescribing Information for Imovane (Zopiclone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for zopiclone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Zopiclone",
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
      name: "Zolpidem",
      slug: "zolpidem",
      drugClass: "Z-Drug",
      relationship: "Same class (Z-Drug)",
    },
    {
      name: "Eszopiclone",
      slug: "eszopiclone",
      drugClass: "Z-Drug",
      relationship: "Same class (Z-Drug)",
    },
    {
      name: "Zaleplon",
      slug: "zaleplon",
      drugClass: "Z-Drug",
      relationship: "Same class (Z-Drug)",
    },
  ],
  relatedConditions: [
    {
      name: "Insomnia — short-term (onset and maintenance)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Zopiclone",
      type: "drug",
      href: "/drugs/zopiclone",
      note: "The drug you're reading about",
    },
    {
      label: "Z-Drug",
      type: "class",
      href: "#mechanism",
      note: "Non-Benzodiazepine Hypnotic (Z-Drug)",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Insomnia — short-term (onset and maintenance)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Complex sleep behaviours",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Next-day driving impairment",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Metallic/bitter taste and dry mouth",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Zopiclone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The cyclopyrrolone with the metallic-taste signature — the Commonwealth world's Z-drug.",
    summary: "Zopiclone is a prescription medicine used to treat insomnia — short-term (onset and maintenance). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Zopiclone is a widely used sleeping tablet in India and the Commonwealth: it helps you fall asleep and stay asleep for about 5–6 hours. Its most noticeable side effect is a metallic taste and dry mouth. Never mix it with alcohol, ensure 7–8 hours in bed, and report any sleep-walking immediately.",
    sideEffects: "The most common side effects are: metallic/bitter taste and dry mouth, morning drowsiness, bitter aftertaste nausea, rebound insomnia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Complex sleep behaviours and Next-day driving impairment. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: morning impairment / hangover (every review); complex sleep behaviours (ask at every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: other medicines that act on the brain. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Zopicon / Zopiclone generic",
        manufacturer: "various",
        strengths: "5, 7.5 mg",
      },
    ],
    typicalDoses: "3.75–7.5 mg at bedtime.",
    prescribingScenarios: [
      "The formulary Z-drug alongside zolpidem in Indian practice.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance — see Monitoring section.",
    patientCounselling: [
      "Metallic taste is expected and harmless.",
      "Class rules: no alcohol, 7–8 h in bed.",
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
    familyName: "Non-Benzodiazepine Hypnotics",
    members: [
      {
        name: "Zopiclone",
        slug: "zopiclone",
        relationship: "This guide",
        distinguishing: "The Commonwealth Z-drug — 5-hour cover with taste signature",
      },
      {
        name: "Zolpidem",
        slug: "zolpidem",
        relationship: "Same class (Z-Drug)",
        distinguishing: "Sleep onset in a non-benzodiazepine molecule — the default Z-drug",
      },
      {
        name: "Eszopiclone",
        slug: "eszopiclone",
        relationship: "Same class (Z-Drug)",
        distinguishing: "The 6-month-trial Z-drug with maintenance cover",
      },
      {
        name: "Zaleplon",
        slug: "zaleplon",
        relationship: "Same class (Z-Drug)",
        distinguishing: "Middle-of-the-night dosing — cleared before morning",
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
      question: "Which molecular target does Zopiclone primarily act on?",
      options: [
        "GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Zopiclone acts primarily at GABA-A alpha-1 receptors (selective PAM) — cyclopyrrolone (racemic). Racemic cyclopyrrolone alpha-1-selective GABA-A PAM — eszopiclone's racemic parent.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Zopiclone?",
      options: ["Metallic/bitter taste and dry mouth", "Morning drowsiness", "Bitter aftertaste nausea", "Rebound insomnia"],
      correctIndex: 0,
      explanation: "Metallic/bitter taste and dry mouth — The signature — most patients notice it.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Zopiclone for insomnia?",
      options: ["7.5 mg", "7.5 mg (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For insomnia: start 3.75–7.5 mg at bedtime (3.75 mg elderly), target 7.5 mg, maximum 7.5 mg. Only as needed; courses 2–4 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Zopiclone in two sentences.",
      answer: "Racemic cyclopyrrolone alpha-1-selective GABA-A PAM — eszopiclone's racemic parent. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Zopiclone.",
      answer: "Insomnia — short-term (onset and maintenance). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Zopiclone and how you would manage it.",
      answer: "Complex sleep behaviours: Class boxed warning. Management: Stop.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Zopiclone require?",
      answer: "Morning impairment / hangover (Every review); Complex sleep behaviours (Ask at every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Zopiclone that separates safe prescribers from unsafe ones.",
      answer: "Zopiclone is the racemate; eszopiclone is its S-enantiomer — one pharmacology, two products, two markets.",
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
      checkpoint: "You now know what Zopiclone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Zopiclone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Zopiclone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Zopiclone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Zopiclone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Zopiclone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["15–30 minutes."],
    ifItWorks: [
      "Continue Zopiclone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Zopiclone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Zopiclone follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Not associated with weight gain.",
    sedation: "High for the intended duration.",
    dosing: [
      {
        indication: "Insomnia",
        starting: "3.75–7.5 mg at bedtime (3.75 mg elderly)",
        titration: "Only as needed; courses 2–4 weeks",
        target: "7.5 mg",
        max: "7.5 mg",
      },
    ],
    dosageForms: ["Tablets 3.75, 7.5 mg"],
    dosingTips: [
      "Ask about taste — it drives silent discontinuation.",
      "3.75 mg for everyone over 65.",
    ],
    overdose: [
      "Overdose with Zopiclone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Zopiclone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 5 hours..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["Onset + maintenance cover.", "Long Commonwealth safety record.", "Cheap generics in India."],
    potentialDisadvantages: ["Taste signature.", "Morning residue.", "Class boxed warnings."],
    primaryTargetSymptoms: [
      "Short-term insomnia (onset and maintenance)",
    ],
    pearls: [
      "Zopiclone is the racemate; eszopiclone is its S-enantiomer — one pharmacology, two products, two markets.",
      "Metallic taste: ask, or patients quietly stop the drug without knowing why it tastes wrong.",
      "India's formulary staple among Z-drugs (with zolpidem) — same discipline, same boxed warnings.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
