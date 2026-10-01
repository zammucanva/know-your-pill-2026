import type { Drug } from "../types";

/**
 * Phentermine-Topiramate — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), phentermine-topiramate monograph (book p. 98)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const phentermineTopiramate: Drug = {
  /* ---- Identity ---- */
  slug: "phentermine-topiramate",
  genericName: "Phentermine-Topiramate",
  brandNames: ["Qsymia"],
  drugClass: "weight-management",
  drugClassLabel: "Weight Management",
  drugClassFullName: "Stimulant + Anticonvulsant Combination",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Specialised Agents", "Weight Management Agents", "Phentermine-Topiramate"],
  /* ---- Hero / summary ---- */
  tagline: "The stimulant-anticonvulsant weight combination — appetite from two directions.",
  summary: "Phentermine-topiramate (Qsymia) is the combination weight-management product: phentermine (sympathomimetic appetite suppression) plus topiramate (multi-mechanism appetite/craving reduction) at low doses — the highest placebo-subtracted weight loss of the modern anti-obesity drugs, governed by teratogenicity (topiramate's cleft risk), stimulant cautions, and strict pregnancy-prevention rules.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Phentermine-Topiramate — from its molecular target (Phentermine (sympathomimetic NA/DA releaser) + topiramate (multi-mechanism appetite suppression)) to clinical effect.",
    "List the FDA-approved and off-label uses of Phentermine-Topiramate.",
    "Predict the common and serious side effects of Phentermine-Topiramate from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Phentermine-Topiramate.",
    "Compare Phentermine-Topiramate with other weight managements and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Phentermine suppresses appetite via sympathomimetic catecholamine release; low-dose topiramate adds a second appetite-craving mechanism — dual-pathway weight pharmacology.",
    molecularTarget: "Phentermine (sympathomimetic NA/DA releaser) + topiramate (multi-mechanism appetite suppression)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Phentermine suppresses appetite via sympathomimetic catecholamine release; low-dose topiramate adds a second appetite-craving mechanism — dual-pathway weight pharmacology.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Phentermine ~20 h; topiramate ~21 h (the pair is once-daily). — see mechanism and prescriber sections.",
    halfLife: "Phentermine ~20 h; topiramate ~21 h (the pair is once-daily).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Phentermine-Topiramate",
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
  neurotransmitters: ["Norepinephrine (NE)", "Dopamine (DA)", "Glutamate"],
  receptors: [
    "Catecholamine release (phentermine) + multi-channel actions (topiramate)",
  ],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Chronic weight management (BMI ≥ 30, or ≥ 27 with a comorbidity)",
      status: "fda-approved",
      description: "Phased dose escalation; the best placebo-subtracted weight loss (~9-10%) among the pre-GLP-1 generation.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Phentermine-Topiramate must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs (phentermine)",
      severity: "absolute",
      rationale: "Hypertensive crisis.",
    },
    {
      name: "Other topiramate products",
      severity: "absolute",
      rationale: "Duplicate dosing.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Teratogenicity (topiramate component)",
      text: "Phentermine-topiramate can cause fetal harm (oral clefts) — pregnancy testing before initiation and monthly during use; discontinue if pregnancy occurs.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Paraesthesia and taste change (topiramate)",
      frequency: "common",
      severity: "mild",
      description: "The topiramate signature.",
      management: "Reassurance.",
    },
    {
      name: "Dry mouth and constipation (phentermine)",
      frequency: "common",
      severity: "mild",
      description: "Sympathomimetic effects.",
      management: "Hydration.",
    },
    {
      name: "Insomnia (phentermine)",
      frequency: "common",
      severity: "moderate",
      description: "Morning dosing.",
      management: "Morning dosing.",
    },
    {
      name: "Cognitive blunting (topiramate)",
      frequency: "common",
      severity: "moderate",
      description: "The Dopamax texture.",
      management: "Dose review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Teratogenicity (topiramate component — oral clefts)",
      frequency: "uncommon",
      severity: "severe",
      description: "Pregnancy testing before and monthly during treatment is a prescribing condition (US REMS-era practice).",
      management: "Pregnancy prevention programme; stop if pregnant.",
    },
    {
      name: "Cardiovascular sympathomimetic effects",
      frequency: "uncommon",
      severity: "moderate",
      description: "HR/BP rise (phentermine).",
      management: "Monitor; caution in cardiac disease.",
    },
    {
      name: "Metabolic acidosis and nephrolithiasis (topiramate)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Class effects.",
      management: "Hydration; bicarbonate watch.",
    },
    {
      name: "Mood changes and suicidality signal",
      frequency: "uncommon",
      severity: "moderate",
      description: "Topiramate-class mood caution.",
      management: "Mood monitoring.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Pregnancy testing",
      frequency: "Baseline and monthly — a prescribing condition",
      rationale: "The topiramate teratogenicity programme.",
    },
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline and regularly",
      rationale: "Phentermine sympathomimetic effects.",
    },
    {
      parameter: "Weight trajectory",
      frequency: "Monthly; 12-week gate",
      rationale: "The outcome discipline.",
    },
    {
      parameter: "Cognition and mood",
      frequency: "At review",
      rationale: "Topiramate-class cautions.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs (phentermine)",
      severity: "contraindicated",
      mechanism: "Hypertensive crisis.",
      action: "14-day washout.",
    },
    {
      drug: "Other sympathomimetics and decongestants",
      severity: "major",
      mechanism: "Cardiovascular stacking.",
      action: "Avoid.",
    },
    {
      drug: "Other topiramate products",
      severity: "contraindicated",
      mechanism: "Duplicate dosing.",
      action: "Never combine with Topamax.",
    },
    {
      drug: "Carbonic-anhydrase inhibitors",
      severity: "moderate",
      mechanism: "Additive acidosis.",
      action: "Avoid.",
    },
  ],
  pregnancy: {
    legacyCategory: "X for weight use",
    summary: "Absolutely contraindicated in pregnancy for weight indications — the pregnancy-testing programme is a condition of prescribing.",
    lactation: "Avoid — both components pass into milk.",
  },
  renalAdjustment: "Avoid in severe renal impairment; dose limits at moderate.",
  hepaticAdjustment: "Not recommended in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "This combination capsule treats obesity with two medicines at once: one suppresses appetite through the body's alerting chemicals, and the second (an epilepsy-class drug) reduces cravings. Because one component can harm an unborn baby, pregnancy tests before starting and monthly during treatment are required. Tingling fingers and word-finding difficulty are its best-known effects.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Phentermine-Topiramate builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The dual-pathway logic: phentermine hits appetite sympathetically while topiramate hits cravings multi-mechanistically — two half-drugs at tolerable doses.",
    "The 12-week gate: escalate only after ≥ 3% loss at the standard dose — outcome-disciplined prescribing.",
    "The pregnancy programme: monthly testing while on the drug is a US prescribing condition — topiramate's cleft risk is the reason.",
    "The GLP-1 era context: ~9-10% placebo-subtracted loss led its generation — the comparator baseline semaglutide has now redefined.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Phentermine-Topiramate: Phentermine suppresses appetite via sympathomimetic catecholamine release; low-dose topiramate adds a second appetite-craving mechanism — dual-pathway weight pharmacology.",
        "Uses of Phentermine-Topiramate: Chronic weight management (BMI ≥ 30, or ≥ 27 with a comorbidity)",
        "Mechanism: phentermine (sympathomimetic releaser) + topiramate (multi-mechanism appetite) — dual pathway.",
        "Indication: chronic weight management — highest pre-GLP-1 efficacy (~9-10%).",
      ],
      practical: [
        "Prescribe Phentermine-Topiramate for chronic weight management (bmi ≥ 30, or ≥ 27 with a comorbidity) with dose, timing, and duration.",
        "Outline the monitoring plan: Pregnancy testing (Baseline and monthly — a prescribing condition); Heart rate and blood pressure (Baseline and regularly); Weight trajectory (Monthly; 12-week gate)",
      ],
      longAnswer: [
        "Phentermine-Topiramate: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: phentermine (sympathomimetic releaser) + topiramate (multi-mechanism appetite) — dual pathway.",
        "Indication: chronic weight management — highest pre-GLP-1 efficacy (~9-10%).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: phentermine (sympathomimetic releaser) + topiramate (multi-mechanism appetite) — dual pathway.",
        "Indication: chronic weight management — highest pre-GLP-1 efficacy (~9-10%).",
        "Teratogenicity (topiramate component): pregnancy testing is a prescribing condition.",
        "Phased escalation; 12-week 3%-loss gate for higher doses.",
        "Phentermine cautions: HR/BP, insomnia; topiramate cautions: cognition, stones, acidosis.",
        "Doses: 3.75/23 → 15/92 mg.",
      ],
      pyqConcepts: [
        "Mechanism/target of Phentermine-Topiramate",
        "Key adverse effect: Teratogenicity (topiramate component — oral clefts)",
        "Dosing and titration of Phentermine-Topiramate",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Phentermine-Topiramate develops teratogenicity (topiramate component — oral clefts) — next best step?",
        "When to choose Phentermine-Topiramate over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Phentermine (sympathomimetic NA/DA releaser) + topiramate (multi-mechanism appetite suppression)",
        "Most common side effects: Paraesthesia and taste change (topiramate), Dry mouth and constipation (phentermine), Insomnia (phentermine)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The dual-pathway logic: phentermine hits appetite sympathetically while topiramate hits cravings multi-mechanistically — two half-drugs at tolerable doses.",
        "The 12-week gate: escalate only after ≥ 3% loss at the standard dose — outcome-disciplined prescribing.",
        "The pregnancy programme: monthly testing while on the drug is a US prescribing condition — topiramate's cleft risk is the reason.",
        "The GLP-1 era context: ~9-10% placebo-subtracted loss led its generation — the comparator baseline semaglutide has now redefined.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: phentermine (sympathomimetic releaser) + topiramate (multi-mechanism appetite) — dual pathway.",
    "Indication: chronic weight management — highest pre-GLP-1 efficacy (~9-10%).",
    "Teratogenicity (topiramate component): pregnancy testing is a prescribing condition.",
    "Phased escalation; 12-week 3%-loss gate for higher doses.",
    "Phentermine cautions: HR/BP, insomnia; topiramate cautions: cognition, stones, acidosis.",
    "Doses: 3.75/23 → 15/92 mg.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — chronic weight management (bmi ≥ 30, or ≥ 27 with a comorbidity)",
      presentation: "A patient presenting with chronic weight management (bmi ≥ 30, or ≥ 27 with a comorbidity), started on Phentermine-Topiramate.",
      history: "A adult patient presents with a chronic weight management (bmi ≥ 30, or ≥ 27 with a comorbidity) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with chronic weight management (bmi ≥ 30, or ≥ 27 with a comorbidity); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Chronic weight management (BMI ≥ 30, or ≥ 27 with a comorbidity). Differentials are considered and excluded clinically.",
      rationale: "Phentermine-Topiramate is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Weight Management) with strong evidence in this condition.",
      management: "Started at 3.75/23 mg daily × 14 days, titrated to 7.5/46 mg daily with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Phentermine-Topiramate takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Weight Management comparison — choosing within the class",
      primaryDrug: "Phentermine-Topiramate",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Phentermine (sympathomimetic NA/DA releaser) + topiramate (multi-mechanism appetite suppression)",
          comparisons: [
            {
              drug: "Lorcaserin",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Phentermine ~20 h; topiramate ~21 h (the pair is once-daily).",
          comparisons: [
            {
              drug: "Lorcaserin",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Lorcaserin",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Lorcaserin",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The highest-efficacy older weight combination — pregnancy-governed",
          comparisons: [
            {
              drug: "Lorcaserin",
              value: "The withdrawn serotonergic weight drug — a pharmacology chapter",
            },
          ],
        },
      ],
      takeaway: "All weight management agents share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Phentermine-Topiramate reaches peak plasma concentration and begins acting at its molecular target (Phentermine (sympathomimetic NA/DA releaser) + topiramate (multi-mechanism appetite suppression)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (paraesthesia and taste change (topiramate), dry mouth and constipation (phentermine), insomnia (phentermine)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Appetite effects within weeks; weight trajectory monthly.)",
      title: "Therapeutic effect builds",
      description: "Appetite effects within weeks; weight trajectory monthly. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Phentermine-Topiramate is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Phentermine-Topiramate take to work?",
      answer: "Appetite effects within weeks; weight trajectory monthly.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Phentermine-Topiramate?",
      answer: "The most frequently reported effects are: Paraesthesia and taste change (topiramate), Dry mouth and constipation (phentermine), Insomnia (phentermine), Cognitive blunting (topiramate). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Phentermine-Topiramate suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Phentermine-Topiramate habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Phentermine-Topiramate exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Phentermine-Topiramate during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Phentermine-Topiramate may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE NG246 (Obesity Management)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), phentermine-topiramate monograph, p. 98",
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
        source: "FDA Prescribing Information for Qsymia (Phentermine-Topiramate)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for phentermine-topiramate — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Phentermine-Topiramate",
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
      name: "Lorcaserin",
      slug: "lorcaserin",
      drugClass: "Weight Management",
      relationship: "Same class (Weight Management)",
    },
  ],
  relatedConditions: [
    {
      name: "Chronic weight management (BMI ≥ 30, or ≥ 27 with a comorbidity)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Phentermine-Topiramate",
      type: "drug",
      href: "/drugs/phentermine-topiramate",
      note: "The drug you're reading about",
    },
    {
      label: "Weight Management",
      type: "class",
      href: "#mechanism",
      note: "Stimulant + Anticonvulsant Combination",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Phentermine (sympathomimetic NA/DA releaser) + topiramate (multi-mechanism appetite suppression)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Chronic weight management (BMI ≥ 30, or ≥ 27 with a comorbidity)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Teratogenicity (topiramate component — oral clefts)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Cardiovascular sympathomimetic effects",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Paraesthesia and taste change (topiramate)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Phentermine-Topiramate",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The stimulant-anticonvulsant weight combination — appetite from two directions.",
    summary: "Phentermine-Topiramate is a prescription medicine used to treat chronic weight management (bmi ≥ 30, or ≥ 27 with a comorbidity). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "This combination capsule treats obesity with two medicines at once: one suppresses appetite through the body's alerting chemicals, and the second (an epilepsy-class drug) reduces cravings. Because one component can harm an unborn baby, pregnancy tests before starting and monthly during treatment are required. Tingling fingers and word-finding difficulty are its best-known effects.",
    sideEffects: "The most common side effects are: paraesthesia and taste change (topiramate), dry mouth and constipation (phentermine), insomnia (phentermine), cognitive blunting (topiramate). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Teratogenicity (topiramate component — oral clefts) and Cardiovascular sympathomimetic effects. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: pregnancy testing (baseline and monthly — a prescribing condition); heart rate and blood pressure (baseline and regularly); weight trajectory (monthly; 12-week gate). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs (phentermine), Other sympathomimetics and decongestants, Other topiramate products, Carbonic-anhydrase inhibitors. Avoid alcohol unless your doctor says it is safe.",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Weight Management Agents",
    members: [
      {
        name: "Phentermine-Topiramate",
        slug: "phentermine-topiramate",
        relationship: "This guide",
        distinguishing: "The highest-efficacy older weight combination — pregnancy-governed",
      },
      {
        name: "Lorcaserin",
        slug: "lorcaserin",
        relationship: "Same class (Weight Management)",
        distinguishing: "The withdrawn serotonergic weight drug — a pharmacology chapter",
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
      question: "Which molecular target does Phentermine-Topiramate primarily act on?",
      options: [
        "Phentermine (sympathomimetic NA/DA releaser) + topiramate (multi-mechanism appetite suppression)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Phentermine-Topiramate acts primarily at Phentermine (sympathomimetic NA/DA releaser) + topiramate (multi-mechanism appetite suppression). Phentermine suppresses appetite via sympathomimetic catecholamine release; low-dose topiramate adds a second appetite-craving mechanism — dual-pathway weight pharmacology.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Phentermine-Topiramate?",
      options: [
        "Paraesthesia and taste change (topiramate)",
        "Dry mouth and constipation (phentermine)",
        "Insomnia (phentermine)",
        "Cognitive blunting (topiramate)",
      ],
      correctIndex: 0,
      explanation: "Paraesthesia and taste change (topiramate) — The topiramate signature.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Phentermine-Topiramate for chronic weight management?",
      options: ["7.5/46 mg daily", "15/92 mg daily", "7.5/46 mg daily (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For chronic weight management: start 3.75/23 mg daily × 14 days, target 7.5/46 mg daily, maximum 15/92 mg daily. Increase to 7.5/46 mg; escalate to 11.25/69 → 15/92 mg only if ≥ 3% loss at 12 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Phentermine-Topiramate in two sentences.",
      answer: "Phentermine suppresses appetite via sympathomimetic catecholamine release; low-dose topiramate adds a second appetite-craving mechanism — dual-pathway weight pharmacology. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Phentermine-Topiramate.",
      answer: "Chronic weight management (BMI ≥ 30, or ≥ 27 with a comorbidity). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Phentermine-Topiramate and how you would manage it.",
      answer: "Teratogenicity (topiramate component — oral clefts): Pregnancy testing before and monthly during treatment is a prescribing condition (US REMS-era practice). Management: Pregnancy prevention programme; stop if pregnant.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Phentermine-Topiramate require?",
      answer: "Pregnancy testing (Baseline and monthly — a prescribing condition); Heart rate and blood pressure (Baseline and regularly); Weight trajectory (Monthly; 12-week gate); Cognition and mood (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Phentermine-Topiramate that separates safe prescribers from unsafe ones.",
      answer: "The dual-pathway logic: phentermine hits appetite sympathetically while topiramate hits cravings multi-mechanistically — two half-drugs at tolerable doses.",
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
      checkpoint: "You now know what Phentermine-Topiramate is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Phentermine-Topiramate works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Phentermine-Topiramate safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Phentermine-Topiramate.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Phentermine-Topiramate with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Phentermine-Topiramate.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Appetite effects within weeks; weight trajectory monthly.",
    ],
    ifItWorks: [
      "Continue Phentermine-Topiramate at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Phentermine-Topiramate (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Phentermine-Topiramate follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Agent-specific.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Chronic weight management",
        starting: "3.75/23 mg daily × 14 days",
        titration: "Increase to 7.5/46 mg; escalate to 11.25/69 → 15/92 mg only if ≥ 3% loss at 12 weeks",
        target: "7.5/46 mg daily",
        max: "15/92 mg daily",
      },
    ],
    dosageForms: [
      "Capsules 3.75/23, 7.5/46, 11.25/69, 15/92 mg",
    ],
    dosingTips: [
      "Morning dosing (phentermine insomnia).",
      "The monthly pregnancy test is part of the prescription.",
      "The 12-week 3%-loss gate before escalating.",
    ],
    overdose: [
      "Overdose with Phentermine-Topiramate is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Phentermine-Topiramate is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Phentermine ~20 h; topiramate ~21 h (the pair is once-daily)..",
      "Metabolism: Hepatic..",
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
      "Highest of the pre-GLP-1 generation efficacy.",
      "Dual-pathway appetite attack.",
      "Phased, outcome-disciplined dosing.",
    ],
    potentialDisadvantages: ["Pregnancy-testing programme burden.", "Stimulant + topiramate caution stack.", "Cognitive adverse effects.", "Superseded by GLP-1 era pharmacology."],
    primaryTargetSymptoms: ["Chronic weight management"],
    pearls: [
      "The dual-pathway logic: phentermine hits appetite sympathetically while topiramate hits cravings multi-mechanistically — two half-drugs at tolerable doses.",
      "The 12-week gate: escalate only after ≥ 3% loss at the standard dose — outcome-disciplined prescribing.",
      "The pregnancy programme: monthly testing while on the drug is a US prescribing condition — topiramate's cleft risk is the reason.",
      "The GLP-1 era context: ~9-10% placebo-subtracted loss led its generation — the comparator baseline semaglutide has now redefined.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
