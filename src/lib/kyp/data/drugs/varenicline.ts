import type { Drug } from "../types";

/**
 * Varenicline — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), varenicline monograph (book p. 133)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const varenicline: Drug = {
  /* ---- Identity ---- */
  slug: "varenicline",
  genericName: "Varenicline",
  brandNames: ["Chantix", "Champix"],
  drugClass: "substance-use-treatment",
  drugClassLabel: "SUD Treatment",
  drugClassFullName: "Nicotinic Partial Agonist (Smoking Cessation)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Substance Use Treatments", "Smoking Cessation Aids", "Varenicline"],
  /* ---- Hero / summary ---- */
  tagline: "The partial agonist that doubled quit rates — alpha-4 beta-2 nicotinic partial agonism.",
  summary: "Varenicline is the alpha-4 beta-2 nicotinic acetylcholine receptor PARTIAL agonist: it stimulates the receptor enough to blunt craving and withdrawal, while blocking nicotine from binding — smoking delivers no reward. In head-to-head trials it outperformed bupropion and nicotine replacement, roughly doubling quit rates. Post-hoc concerns about neuropsychiatric adverse effects were largely laid to rest by the EAGLES trial, though vivid dreams remain its famous signature.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Varenicline — from its molecular target (Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Varenicline.",
    "Predict the common and serious side effects of Varenicline from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Varenicline.",
    "Compare Varenicline with other sud treatments and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Varenicline partially agonises the alpha-4 beta-2 nicotinic receptor — occupying it with moderate stimulation (craving relief) while blocking nicotine's full agonist action (no reward from smoking).",
    molecularTarget: "Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Varenicline partially agonises the alpha-4 beta-2 nicotinic receptor — occupying it with moderate stimulation (craving relief) while blocking nicotine's full agonist action (no reward from smoking).",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 24 hours (steady state ~1 week). — see mechanism and prescriber sections.",
    halfLife: "About 24 hours (steady state ~1 week).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Varenicline",
        sublabel: "Substance use treatment agent",
        variant: "process",
      },
      {
        id: "target",
        label: "Reward pathway",
        sublabel: "Mesolimbic reinforcement system",
        variant: "target",
      },
      {
        id: "craving",
        label: "Craving / reinforcement",
        sublabel: "Reduced",
        variant: "process",
      },
      {
        id: "effect",
        label: "Relapse prevention",
        sublabel: "Abstinence maintained with psychosocial support",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "target",
        label: "acts on",
      },
      {
        from: "target",
        to: "craving",
        label: "dampens",
        type: "inhibit",
      },
      {
        from: "craving",
        to: "effect",
        label: "supports",
      },
    ],
    caption: "Pharmacotherapy for substance use disorders blunts the reinforcement cycle — medication opens a window; psychosocial treatment walks the patient through it.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Acetylcholine (ACh)"],
  receptors: [
    "Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist)",
  ],
  brainRegionIds: ["nucleus-accumbens", "prefrontal-cortex"],
  pathwayIds: ["mesolimbic"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Smoking cessation",
      status: "fda-approved",
      description: "12-week course (24 in relapsers), started one week BEFORE the quit date.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Varenicline must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Neuropsychiatric events (historical, revised)",
      text: "Post-marketing reports of depressed mood, agitation, and suicidality led to warnings largely revised after the EAGLES randomised trial showed no significant excess versus placebo. Monitor mood, stop if significant changes occur, and counsel patients and families.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea",
      frequency: "very-common",
      severity: "mild",
      description: "The most common effect — dose-related.",
      management: "Take after food; titration week softens it.",
    },
    {
      name: "Vivid, unusual dreams",
      frequency: "very-common",
      severity: "mild",
      description: "The famous signature — memorable, usually benign.",
      management: "Counsel in advance — it becomes a compliance badge rather than a complaint.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "mild",
      description: "Class-typical.",
      management: "Dose timing (evening dose after food).",
    },
    {
      name: "Headache and abnormal dreams",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
    {
      name: "Flatulence and taste change",
      frequency: "common",
      severity: "mild",
      description: "Minor effects.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Neuropsychiatric events (historic warning, now largely resolved)",
      frequency: "rare",
      severity: "severe",
      description: "Depression, agitation, suicidality in post-marketing reports; the EAGLES RCT found no significant increase vs placebo in psychiatric or non-psychiatric cohorts.",
      management: "Mood review at every visit; stop if significant mood change occurs.",
    },
    {
      name: "Cardiovascular events (small signal)",
      frequency: "rare",
      severity: "severe",
      description: "Small meta-analytic increases in cardiovascular events; the quitting benefit usually dominates.",
      management: "Assess in context — smoking is the greater cardiovascular threat.",
    },
    {
      name: "Seizure threshold (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Seizures reported.",
      management: "Caution in epilepsy.",
    },
    {
      name: "Angioedema and skin reactions (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Hypersensitivity reports.",
      management: "Stop on any facial swelling or rash.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Mood review",
      frequency: "Every visit during the course",
      rationale: "The (largely revised) neuropsychiatric caution.",
    },
    {
      parameter: "Nausea and adherence",
      frequency: "Weeks 1-4",
      rationale: "The commonest tolerability issue.",
    },
    {
      parameter: "Quit status and craving",
      frequency: "Weekly early, then monthly",
      rationale: "Treatment targets.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol (tolerance changes)",
      severity: "moderate",
      mechanism: "Alcohol tolerance reduced in some patients — intoxication at usual amounts.",
      action: "Counsel; monitor.",
    },
    {
      drug: "Nicotine replacement therapy",
      severity: "moderate",
      mechanism: "Combined use is safe and supported by evidence.",
      action: "Combination improves quit rates.",
    },
    {
      drug: "Cimetidine",
      severity: "minor",
      mechanism: "Raises varenicline levels (renal tubular competition).",
      action: "Awareness.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited human data; behavioural cessation first in pregnancy; varenicline considered when pharmacotherapy is clearly needed (shared decision).",
    lactation: "Excreted in milk in animals — weigh carefully; behavioural support preferred.",
  },
  renalAdjustment: "No adjustment for mild-moderate impairment; reduce dose in severe renal impairment.",
  hepaticAdjustment: "No significant hepatic metabolism concerns.",
  /* ---- Education ---- */
  patientExplanation: "Varenicline is the most effective tablet for stopping smoking: it partly stimulates the brain's nicotine receptor — calming craving — while blocking real nicotine from working, so cigarettes stop giving anything back. You start it one week BEFORE your quit date. Its famous effects are nausea (taking it after food helps) and unusually vivid dreams, which are harmless and sometimes even enjoyable.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Varenicline builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The mechanism is elegant: partial agonism relieves craving while receptor occupancy blocks nicotine — the cigarette goes silent.",
    "One week BEFORE the quit date: the run-up design lets steady state arrive before the last cigarette.",
    "Vivid dreams: the adverse effect patients brag about — pre-counselling converts it from complaint to proof of action.",
    "EAGLES (2016): the psychiatric-safety RCT that retired most of the black box — the caution remains but the panic is gone.",
    "Head-to-head: varenicline > bupropion > patch in most meta-analyses — the strongest single-agent quit medicine.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Varenicline: Varenicline partially agonises the alpha-4 beta-2 nicotinic receptor — occupying it with moderate stimulation (craving relief) while blocking nicotine's full agonist action (no reward from smoking).",
        "Uses of Varenicline: Smoking cessation",
        "Mechanism: alpha-4 beta-2 nicotinic receptor PARTIAL AGONIST — craving relief + nicotine blockade.",
        "The most effective single-agent smoking-cessation drug (outperforms bupropion and NRT).",
      ],
      practical: [
        "Prescribe Varenicline for smoking cessation with dose, timing, and duration.",
        "Outline the monitoring plan: Mood review (Every visit during the course); Nausea and adherence (Weeks 1-4); Quit status and craving (Weekly early, then monthly)",
      ],
      longAnswer: [
        "Varenicline: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: alpha-4 beta-2 nicotinic receptor PARTIAL AGONIST — craving relief + nicotine blockade.",
        "The most effective single-agent smoking-cessation drug (outperforms bupropion and NRT).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: alpha-4 beta-2 nicotinic receptor PARTIAL AGONIST — craving relief + nicotine blockade.",
        "The most effective single-agent smoking-cessation drug (outperforms bupropion and NRT).",
        "Start 1 week BEFORE the quit date; 12-week course.",
        "Signature adverse effect: vivid dreams; nausea the commonest.",
        "EAGLES trial largely resolved the neuropsychiatric warning.",
        "Dose: 0.5 mg titration week → 1 mg bd.",
      ],
      pyqConcepts: [
        "Mechanism/target of Varenicline",
        "Key adverse effect: Neuropsychiatric events (historic warning, now largely resolved)",
        "Dosing and titration of Varenicline",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Varenicline develops neuropsychiatric events (historic warning, now largely resolved) — next best step?",
        "When to choose Varenicline over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist)",
        "Most common side effects: Nausea, Vivid, unusual dreams, Insomnia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The mechanism is elegant: partial agonism relieves craving while receptor occupancy blocks nicotine — the cigarette goes silent.",
        "One week BEFORE the quit date: the run-up design lets steady state arrive before the last cigarette.",
        "Vivid dreams: the adverse effect patients brag about — pre-counselling converts it from complaint to proof of action.",
        "EAGLES (2016): the psychiatric-safety RCT that retired most of the black box — the caution remains but the panic is gone.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: alpha-4 beta-2 nicotinic receptor PARTIAL AGONIST — craving relief + nicotine blockade.",
    "The most effective single-agent smoking-cessation drug (outperforms bupropion and NRT).",
    "Start 1 week BEFORE the quit date; 12-week course.",
    "Signature adverse effect: vivid dreams; nausea the commonest.",
    "EAGLES trial largely resolved the neuropsychiatric warning.",
    "Dose: 0.5 mg titration week → 1 mg bd.",
    "Combines safely with NRT (evidence supports combination).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — smoking cessation",
      presentation: "A patient presenting with smoking cessation, started on Varenicline.",
      history: "A adult patient presents with a smoking cessation picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with smoking cessation; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Smoking cessation. Differentials are considered and excluded clinically.",
      rationale: "Varenicline is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SUD Treatment) with strong evidence in this condition.",
      management: "Started at 0.5 mg once daily × 3 days, then 0.5 mg twice daily × 4 days, titrated to 1 mg twice daily with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Varenicline takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SUD Treatment comparison — choosing within the class",
      primaryDrug: "Varenicline",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist)",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "See full guide",
            },
            {
              drug: "Buprenorphine",
              value: "See full guide",
            },
            {
              drug: "Disulfiram",
              value: "See full guide",
            },
            {
              drug: "Naltrexone",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 24 hours (steady state ~1 week).",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "—",
            },
            {
              drug: "Buprenorphine",
              value: "—",
            },
            {
              drug: "Disulfiram",
              value: "—",
            },
            {
              drug: "Naltrexone",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not typically associated with weight change.",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Buprenorphine",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Disulfiram",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Naltrexone",
              value: "Not typically associated with weight change.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "Agent-specific.",
            },
            {
              drug: "Buprenorphine",
              value: "Agent-specific.",
            },
            {
              drug: "Disulfiram",
              value: "Agent-specific.",
            },
            {
              drug: "Naltrexone",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The most effective smoking-cessation medicine",
          comparisons: [
            {
              drug: "Acamprosate",
              value: "The abstinence-protector — for the already-abstinent patient",
            },
            {
              drug: "Buprenorphine",
              value: "The safety-ceiling maintenance agonist — office-based opioid treatment",
            },
            {
              drug: "Disulfiram",
              value: "The classical aversion deterrent — for the motivated, supervised patient",
            },
            {
              drug: "Naltrexone",
              value: "The pure antagonist — alcohol relapse and opioid blockade",
            },
          ],
        },
      ],
      takeaway: "All smoking cessation aids share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Varenicline reaches peak plasma concentration and begins acting at its molecular target (Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea, vivid, unusual dreams, insomnia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Craving relief within days; quit date set at day 8.)",
      title: "Therapeutic effect builds",
      description: "Craving relief within days; quit date set at day 8. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Varenicline is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Varenicline take to work?",
      answer: "Craving relief within days; quit date set at day 8.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Varenicline?",
      answer: "The most frequently reported effects are: Nausea, Vivid, unusual dreams, Insomnia, Headache and abnormal dreams, Flatulence and taste change. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Varenicline suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Varenicline habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Varenicline exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Varenicline during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Varenicline may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG115 (Alcohol Use Disorders); NICE NG209 (Tobacco Dependence)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), varenicline monograph, p. 133",
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
        source: "FDA Prescribing Information for Chantix (Varenicline)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for varenicline — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Varenicline",
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
      name: "Acamprosate",
      slug: "acamprosate",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Buprenorphine",
      slug: "buprenorphine",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Disulfiram",
      slug: "disulfiram",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Naltrexone",
      slug: "naltrexone",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Naltrexone-Bupropion",
      slug: "naltrexone-bupropion",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
    {
      name: "Nalmefene",
      slug: "nalmefene",
      drugClass: "SUD Treatment",
      relationship: "Same class (SUD Treatment)",
    },
  ],
  relatedConditions: [
    {
      name: "Smoking cessation",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Varenicline",
      type: "drug",
      href: "/drugs/varenicline",
      note: "The drug you're reading about",
    },
    {
      label: "SUD Treatment",
      type: "class",
      href: "#mechanism",
      note: "Nicotinic Partial Agonist (Smoking Cessation)",
    },
    {
      label: "Acetylcholine (ACh)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Smoking cessation",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Neuropsychiatric events (historic warning, now largely resolved)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Cardiovascular events (small signal)",
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
      label: "Patient Guide — Varenicline",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The partial agonist that doubled quit rates — alpha-4 beta-2 nicotinic partial agonism.",
    summary: "Varenicline is a prescription medicine used to treat smoking cessation. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Varenicline is the most effective tablet for stopping smoking: it partly stimulates the brain's nicotine receptor — calming craving — while blocking real nicotine from working, so cigarettes stop giving anything back. You start it one week BEFORE your quit date. Its famous effects are nausea (taking it after food helps) and unusually vivid dreams, which are harmless and sometimes even enjoyable.",
    sideEffects: "The most common side effects are: nausea, vivid, unusual dreams, insomnia, headache and abnormal dreams, flatulence and taste change. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuropsychiatric events (historic warning, now largely resolved) and Cardiovascular events (small signal). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: mood review (every visit during the course); nausea and adherence (weeks 1-4); quit status and craving (weekly early, then monthly). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Alcohol (tolerance changes), Nicotine replacement therapy, Cimetidine. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Champix (imported/limited)",
        manufacturer: "Pfizer network",
        strengths: "0.5, 1 mg",
      },
      {
        name: "Varenicline (generic, emerging)",
        manufacturer: "various",
        strengths: "0.5, 1 mg",
      },
    ],
    typicalDoses: "Titration week then 1 mg bd × 12 weeks.",
    prescribingScenarios: [
      "Tobacco cessation clinics — the strongest single agent.",
      "Smokeless tobacco (gutka/khaini) cessation — off-label but used.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "high",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Mood review each visit; nausea management.",
    patientCounselling: ["Start one week before the quit date.", "After-food dosing.", "Vivid dreams are expected and harmless."],
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
    familyName: "Smoking Cessation Aids",
    members: [
      {
        name: "Varenicline",
        slug: "varenicline",
        relationship: "This guide",
        distinguishing: "The most effective smoking-cessation medicine",
      },
      {
        name: "Acamprosate",
        slug: "acamprosate",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The abstinence-protector — for the already-abstinent patient",
      },
      {
        name: "Buprenorphine",
        slug: "buprenorphine",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The safety-ceiling maintenance agonist — office-based opioid treatment",
      },
      {
        name: "Disulfiram",
        slug: "disulfiram",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The classical aversion deterrent — for the motivated, supervised patient",
      },
      {
        name: "Naltrexone",
        slug: "naltrexone",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The pure antagonist — alcohol relapse and opioid blockade",
      },
      {
        name: "Naltrexone-Bupropion",
        slug: "naltrexone-bupropion",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The addiction-medicine approach to obesity",
      },
      {
        name: "Nalmefene",
        slug: "nalmefene",
        relationship: "Same class (SUD Treatment)",
        distinguishing: "The as-needed drinking-day antagonist (European harm reduction)",
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
      question: "Which molecular target does Varenicline primarily act on?",
      options: [
        "Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Varenicline acts primarily at Alpha-4 beta-2 nicotinic acetylcholine receptor (partial agonist). Varenicline partially agonises the alpha-4 beta-2 nicotinic receptor — occupying it with moderate stimulation (craving relief) while blocking nicotine's full agonist action (no reward from smoking).",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Varenicline?",
      options: ["Nausea", "Vivid, unusual dreams", "Insomnia", "Headache and abnormal dreams"],
      correctIndex: 0,
      explanation: "Nausea — The most common effect — dose-related.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Varenicline for smoking cessation (standard)?",
      options: ["1 mg twice daily", "1 mg twice daily (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For smoking cessation (standard): start 0.5 mg once daily × 3 days, then 0.5 mg twice daily × 4 days, target 1 mg twice daily, maximum 1 mg twice daily. Quit smoking on day 8; then 1 mg twice daily for 12 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Varenicline in two sentences.",
      answer: "Varenicline partially agonises the alpha-4 beta-2 nicotinic receptor — occupying it with moderate stimulation (craving relief) while blocking nicotine's full agonist action (no reward from smoking). Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Varenicline.",
      answer: "Smoking cessation. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Varenicline and how you would manage it.",
      answer: "Neuropsychiatric events (historic warning, now largely resolved): Depression, agitation, suicidality in post-marketing reports; the EAGLES RCT found no significant increase vs placebo in psychiatric or non-psychiatric cohorts. Management: Mood review at every visit; stop if significant mood change occurs.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Varenicline require?",
      answer: "Mood review (Every visit during the course); Nausea and adherence (Weeks 1-4); Quit status and craving (Weekly early, then monthly)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Varenicline that separates safe prescribers from unsafe ones.",
      answer: "The mechanism is elegant: partial agonism relieves craving while receptor occupancy blocks nicotine — the cigarette goes silent.",
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
      checkpoint: "You now know what Varenicline is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Varenicline works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Varenicline safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Varenicline.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Varenicline with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Varenicline.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Craving relief within days; quit date set at day 8.",
    ],
    ifItWorks: [
      "Continue Varenicline at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Varenicline (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Varenicline follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Not typically associated with weight change.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Smoking cessation (standard)",
        starting: "0.5 mg once daily × 3 days, then 0.5 mg twice daily × 4 days",
        titration: "Quit smoking on day 8; then 1 mg twice daily for 12 weeks",
        target: "1 mg twice daily",
        max: "1 mg twice daily",
      },
    ],
    dosageForms: ["Tablets 0.5, 1 mg", "Starting pack (titration week)"],
    dosingTips: [
      "Set the quit date at day 8 — the run-up is part of the design.",
      "After-food dosing against nausea.",
      "Pre-counsel on vivid dreams.",
      "Extend to 24 weeks for the relapse-prone.",
    ],
    overdose: [
      "Overdose with Varenicline is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Varenicline is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 24 hours (steady state ~1 week)..",
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
      "Highest single-agent quit rates.",
      "Craving relief + reward blockade in one mechanism.",
      "EAGLES-resolved safety concerns.",
      "No nicotine itself.",
    ],
    potentialDisadvantages: ["Nausea and vivid dreams.", "The residual psychiatric caution.", "12+ week course discipline.", "Renal dosing in severe impairment."],
    primaryTargetSymptoms: ["Nicotine craving and withdrawal", "Smoking-cessation reward extinction"],
    pearls: [
      "The mechanism is elegant: partial agonism relieves craving while receptor occupancy blocks nicotine — the cigarette goes silent.",
      "One week BEFORE the quit date: the run-up design lets steady state arrive before the last cigarette.",
      "Vivid dreams: the adverse effect patients brag about — pre-counselling converts it from complaint to proof of action.",
      "EAGLES (2016): the psychiatric-safety RCT that retired most of the black box — the caution remains but the panic is gone.",
      "Head-to-head: varenicline > bupropion > patch in most meta-analyses — the strongest single-agent quit medicine.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
