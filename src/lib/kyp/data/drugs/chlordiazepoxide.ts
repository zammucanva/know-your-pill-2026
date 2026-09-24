import type { Drug } from "../types";

/**
 * Chlordiazepoxide — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), chlordiazepoxide monograph (book p. 22)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const chlordiazepoxide: Drug = {
  /* ---- Identity ---- */
  slug: "chlordiazepoxide",
  genericName: "Chlordiazepoxide",
  brandNames: ["Librium", "Chlordiazepoxide (generic)"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine",
  drugClassFullName: "Benzodiazepine (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepines", "Chlordiazepoxide"],
  /* ---- Hero / summary ---- */
  tagline: "The first benzodiazepine ever — now the alcohol-withdrawal tablet of record.",
  summary: "Chlordiazepoxide (Librium, 1960) opened the benzodiazepine era. Today its identity is singular: it is the standard ORAL benzodiazepine for uncomplicated alcohol withdrawal — long-acting, smoothly tapering, available as a cheap generic — while its original anxiolytic role has passed to successors. Its long-acting metabolites (including desmethylchlordiazepoxide and nordiazepam) provide the built-in taper that withdrawal management wants.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Chlordiazepoxide — from its molecular target (GABA-A benzodiazepine site (PAM)) to clinical effect.",
    "List the FDA-approved and off-label uses of Chlordiazepoxide.",
    "Predict the common and serious side effects of Chlordiazepoxide from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Chlordiazepoxide.",
    "Compare Chlordiazepoxide with other benzodiazepines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "The original benzodiazepine GABA-A PAM — long-acting with a cascade of active metabolites including diazepam's own nordiazepam.",
    molecularTarget: "GABA-A benzodiazepine site (PAM)",
    effect: "Anxiolysis, sedation, anticonvulsant and alcohol-withdrawal coverage via long-acting metabolites.",
    steps: [
      "Class mechanism: benzodiazepine-site PAM amplifying GABA inhibition.",
      "Metabolised through a chain of active metabolites (desmethyl-, demoxepam, nordiazepam) — each long-acting.",
      "The metabolite cascade = built-in self-taper, the property that made it the alcohol-withdrawal tablet standard.",
    ],
    pharmacokinetics: "Oral absorption slower than diazepam; IM absorption unreliable — oral use preferred.",
    halfLife: "Parent 5–30 h; metabolites extend to 100+ h.",
    activeMetabolite: "Multiple: desmethylchlordiazepoxide, demoxepam, nordiazepam (diazepam's metabolite!).",
    metabolism: "Hepatic CYP3A4 chain.",
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
        id: "receptor",
        label: "GABA-A receptor",
        sublabel: "Chloride channel",
        variant: "target",
      },
      {
        id: "drug",
        label: "Chlordiazepoxide",
        sublabel: "Positive allosteric modulator",
        variant: "process",
      },
      {
        id: "cl",
        label: "Cl⁻ influx",
        sublabel: "Neuron hyperpolarises",
        variant: "output",
      },
      {
        id: "effect",
        label: "Reduced neuronal firing",
        sublabel: "Anxiolysis, sedation, anticonvulsant effect",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "gaba",
        to: "receptor",
        label: "binds",
      },
      {
        from: "drug",
        to: "receptor",
        label: "enhances GABA action",
        type: "stimulate",
      },
      {
        from: "receptor",
        to: "cl",
        label: "opens channel",
      },
      {
        from: "cl",
        to: "effect",
        label: "inhibits firing",
      },
    ],
    caption: "Benzodiazepines amplify the brain's own inhibitory signal (GABA) rather than activating the receptor directly — which is why their effect is powerful but limited by dependence risk.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["GABA"],
  receptors: [
    "GABA-A receptor (benzodiazepine site — PAM)",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alcohol withdrawal — mild to moderate, uncomplicated",
      status: "guideline",
      description: "The standard oral agent (often with thiamine): fixed or symptom-triggered regimens followed by structured taper.",
    },
    {
      name: "Anxiety (short-term, historic)",
      status: "fda-approved",
      description: "The original 1960 indication — successors preferred now.",
    },
    {
      name: "Preoperative anxiety (historic)",
      status: "fda-approved",
      description: "Superseded by lorazepam/midazolam.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Chlordiazepoxide must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioids",
      severity: "absolute",
      rationale: "Respiratory depression.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Risks with opioids",
      text: "Class warning: profound sedation, respiratory depression, death.",
    },
    {
      title: "Dependence and withdrawal",
      text: "Class warning — courses kept short and tapered.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "Class standard.",
      management: "Dose timing.",
    },
    {
      name: "Ataxia",
      frequency: "common",
      severity: "moderate",
      description: "Falls in the elderly.",
      management: "Fall precautions.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "mild",
      description: "More with co-medications.",
      management: "Bowels routine.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression with opioids/overdose",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Class emergency.",
      management: "Airway; flumazenil caution.",
    },
    {
      name: "Withdrawal seizures on abrupt stop",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Taper.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "CIWA-scored withdrawal reviews",
      frequency: "During withdrawal regimens",
      rationale: "Symptom-triggered dosing discipline.",
    },
    {
      parameter: "Dependence review",
      frequency: "Every repeat",
      rationale: "Class discipline.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "contraindicated",
      mechanism: "Respiratory depression.",
      action: "Avoid.",
    },
    {
      drug: "Disulfiram",
      severity: "moderate",
      mechanism: "Inhibits chlordiazepoxide metabolism — increased sedation.",
      action: "Dose reduction; prefer alternatives.",
    },
    {
      drug: "Alcohol/CNS depressants",
      severity: "major",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "Class considerations — avoid regular use; the alcohol-withdrawal context itself demands specialist decisions.",
    lactation: "Passes into milk; infant sedation possible.",
  },
  renalAdjustment: "Standard caution.",
  hepaticAdjustment: "Active metabolites accumulate in liver disease — reduce dose; lorazepam preferred in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Chlordiazepoxide is the oldest member of its family — used today mainly to make alcohol withdrawal safe and comfortable: it settles the shakes, racing heart, and anxiety of stopping drinking, then is tapered down over a week or so. It works with thiamine (vitamin B1) which protects the brain during withdrawal.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Chlordiazepoxide builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The founding drug of the class (Librium, 1960) — its metabolite chain includes nordiazepam, diazepam's own descendant: the benzo family tree in one molecule.",
    "Chlordiazepoxide + thiamine = the classic Indian alcohol-withdral prescription pair (thiamine FIRST, before any glucose).",
    "The metabolite cascade is a built-in taper — the property that made it the withdrawal tablet standard.",
    "IM absorption is unreliable — oral only (lorazepam owns the IM/IV route).",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Chlordiazepoxide: The original benzodiazepine GABA-A PAM — long-acting with a cascade of active metabolites including diazepam's own nordiazepam.",
        "Uses of Chlordiazepoxide: Alcohol withdrawal — mild to moderate, uncomplicated; Anxiety (short-term, historic); Preoperative anxiety (historic)",
        "FIRST benzodiazepine (1960, Librium).",
        "Modern identity: oral alcohol withdrawal standard (with thiamine).",
      ],
      practical: [
        "Prescribe Chlordiazepoxide for alcohol withdrawal — mild to moderate, uncomplicated with dose, timing, and duration.",
        "Outline the monitoring plan: CIWA-scored withdrawal reviews (During withdrawal regimens); Dependence review (Every repeat)",
      ],
      longAnswer: [
        "Chlordiazepoxide: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "FIRST benzodiazepine (1960, Librium).",
        "Modern identity: oral alcohol withdrawal standard (with thiamine).",
      ],
    },
    neetPg: {
      highYield: [
        "FIRST benzodiazepine (1960, Librium).",
        "Modern identity: oral alcohol withdrawal standard (with thiamine).",
        "Long-acting with metabolite cascade (nordiazepam among them) = self-tapering kinetics.",
        "Unreliable IM absorption — oral only.",
        "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
      ],
      pyqConcepts: [
        "Mechanism/target of Chlordiazepoxide",
        "Key adverse effect: Respiratory depression with opioids/overdose",
        "Dosing and titration of Chlordiazepoxide",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Chlordiazepoxide develops respiratory depression with opioids/overdose — next best step?",
        "When to choose Chlordiazepoxide over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (PAM)",
        "Most common side effects: Sedation and drowsiness, Ataxia, Constipation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Chlordiazepoxide + thiamine: the withdrawal prescription that launched a thousand Indian discharge summaries.",
        "Its own metabolite chain IS the taper — pharmacokinetics as therapy.",
        "The founding drug of the class (Librium, 1960) — its metabolite chain includes nordiazepam, diazepam's own descendant: the benzo family tree in one molecule.",
        "Chlordiazepoxide + thiamine = the classic Indian alcohol-withdral prescription pair (thiamine FIRST, before any glucose).",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "FIRST benzodiazepine (1960, Librium).",
    "Modern identity: oral alcohol withdrawal standard (with thiamine).",
    "Long-acting with metabolite cascade (nordiazepam among them) = self-tapering kinetics.",
    "Unreliable IM absorption — oral only.",
    "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — alcohol withdrawal — mild to moderate, uncomplicated",
      presentation: "A patient presenting with alcohol withdrawal — mild to moderate, uncomplicated, started on Chlordiazepoxide.",
      history: "A adult patient presents with a alcohol withdrawal — mild to moderate, uncomplicated picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with alcohol withdrawal — mild to moderate, uncomplicated; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Alcohol withdrawal — mild to moderate, uncomplicated. Differentials are considered and excluded clinically.",
      rationale: "Chlordiazepoxide is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine) with strong evidence in this condition.",
      management: "Started at 10–25 mg three to four times daily (or 50 mg TDS day 1), titrated to 50–100 mg day 1 tapering with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Chlordiazepoxide takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine comparison — choosing within the class",
      primaryDrug: "Chlordiazepoxide",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A benzodiazepine site (PAM)",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "See full guide",
            },
            {
              drug: "Clonazepam",
              value: "See full guide",
            },
            {
              drug: "Diazepam",
              value: "See full guide",
            },
            {
              drug: "Lorazepam",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Parent 5–30 h; metabolites extend to 100+ h.",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "—",
            },
            {
              drug: "Clonazepam",
              value: "—",
            },
            {
              drug: "Diazepam",
              value: "—",
            },
            {
              drug: "Lorazepam",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "See product information and class comparison.",
            },
            {
              drug: "Clonazepam",
              value: "—",
            },
            {
              drug: "Diazepam",
              value: "—",
            },
            {
              drug: "Lorazepam",
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High — useful in withdrawal.",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "High — potency-driven.",
            },
            {
              drug: "Clonazepam",
              value: "High — the dose-limiting effect.",
            },
            {
              drug: "Diazepam",
              value: "High — the dose-limiting effect; tolerance develops to sedation faster than to anxiolysis.",
            },
            {
              drug: "Lorazepam",
              value: "Moderate — intermediate duration limits hangover vs diazepam.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Alcohol withdrawal tablet — the founding benzo",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "The highest-potency anxiolytic with the class-worst withdrawal",
            },
            {
              drug: "Clonazepam",
              value: "The long-acting anticonvulsant benzo — seizures and panic",
            },
            {
              drug: "Diazepam",
              value: "The fast-into-brain, long-in-body benzo — withdrawal and spasm workhorse",
            },
            {
              drug: "Lorazepam",
              value: "Glucuronidation-only metabolism — the liver/elderly/interactions-safe benzo",
            },
          ],
        },
      ],
      takeaway: "All benzodiazepines share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Chlordiazepoxide reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (PAM)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, ataxia, constipation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Oral: 30–60 min; withdrawal stabilisation within hours of loading.)",
      title: "Therapeutic effect builds",
      description: "Oral: 30–60 min; withdrawal stabilisation within hours of loading. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Chlordiazepoxide is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Chlordiazepoxide take to work?",
      answer: "Oral: 30–60 min; withdrawal stabilisation within hours of loading.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Chlordiazepoxide?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Ataxia, Constipation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Chlordiazepoxide suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Chlordiazepoxide habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Chlordiazepoxide exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Chlordiazepoxide during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Chlordiazepoxide may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG113 (Anxiety); NICE CG91",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), chlordiazepoxide monograph, p. 22",
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
        source: "FDA Prescribing Information for Librium (Chlordiazepoxide)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for chlordiazepoxide — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Chlordiazepoxide",
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
      name: "Alprazolam",
      slug: "alprazolam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Clonazepam",
      slug: "clonazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Diazepam",
      slug: "diazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Lorazepam",
      slug: "lorazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Midazolam",
      slug: "midazolam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Oxazepam",
      slug: "oxazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
  ],
  relatedConditions: [
    {
      name: "Alcohol withdrawal — mild to moderate, uncomplicated",
      relationship: "alternative",
    },
    {
      name: "Anxiety (short-term, historic)",
      relationship: "primary",
    },
    {
      name: "Preoperative anxiety (historic)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Chlordiazepoxide",
      type: "drug",
      href: "/drugs/chlordiazepoxide",
      note: "The drug you're reading about",
    },
    {
      label: "Benzodiazepine",
      type: "class",
      href: "#mechanism",
      note: "Benzodiazepine (GABA-A PAM)",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-A benzodiazepine site (PAM)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Amygdala",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Prefrontal Cortex",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Alcohol withdrawal — mild to moderate, uncomplicated",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Anxiety (short-term, historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Preoperative anxiety (historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Respiratory depression with opioids/overdose",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Withdrawal seizures on abrupt stop",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and drowsiness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Chlordiazepoxide",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The first benzodiazepine ever — now the alcohol-withdrawal tablet of record.",
    summary: "Chlordiazepoxide is a prescription medicine used to treat alcohol withdrawal — mild to moderate, uncomplicated. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Chlordiazepoxide is the oldest member of its family — used today mainly to make alcohol withdrawal safe and comfortable: it settles the shakes, racing heart, and anxiety of stopping drinking, then is tapered down over a week or so. It works with thiamine (vitamin B1) which protects the brain during withdrawal.",
    sideEffects: "The most common side effects are: sedation and drowsiness, ataxia, constipation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression with opioids/overdose and Withdrawal seizures on abrupt stop. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: ciwa-scored withdrawal reviews (during withdrawal regimens); dependence review (every repeat). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Disulfiram, Alcohol/CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Librium",
        manufacturer: "Abbott legacy",
        strengths: "10, 25 mg",
      },
      {
        name: "Chlordiazepoxide generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "10, 25 mg",
      },
    ],
    typicalDoses: "Withdrawal: 50 mg TDS day 1 tapering over 5–7 days; mild cases 10–25 mg TDS.",
    prescribingScenarios: [
      "The standard district-hospital alcohol-withdrawal protocol.",
      "De-addiction centre stabilisation phase.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "CIWA or clinical scoring during taper; watch for delirium tremens escalation (refer if hallucinations/confusion).",
    patientCounselling: [
      "The written step-down calendar is the treatment — follow it exactly.",
      "Thiamine tablets daily during and after.",
      "This medicine is a bridge to abstinence treatment, not the treatment itself.",
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
    available: true,
    note: "Generic chlordiazepoxide widely available.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Benzodiazepines",
    members: [
      {
        name: "Chlordiazepoxide",
        slug: "chlordiazepoxide",
        relationship: "This guide",
        distinguishing: "Alcohol withdrawal tablet — the founding benzo",
      },
      {
        name: "Alprazolam",
        slug: "alprazolam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "The highest-potency anxiolytic with the class-worst withdrawal",
      },
      {
        name: "Clonazepam",
        slug: "clonazepam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "The long-acting anticonvulsant benzo — seizures and panic",
      },
      {
        name: "Diazepam",
        slug: "diazepam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "The fast-into-brain, long-in-body benzo — withdrawal and spasm workhorse",
      },
      {
        name: "Lorazepam",
        slug: "lorazepam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Glucuronidation-only metabolism — the liver/elderly/interactions-safe benzo",
      },
      {
        name: "Midazolam",
        slug: "midazolam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Benzodiazepine — see full guide",
      },
      {
        name: "Oxazepam",
        slug: "oxazepam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Benzodiazepine — see full guide",
      },
      {
        name: "Clorazepate",
        slug: "clorazepate",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Benzodiazepine — see full guide",
      },
      {
        name: "Loflazepate",
        slug: "loflazepate",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Benzodiazepine — see full guide",
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
      question: "Which molecular target does Chlordiazepoxide primarily act on?",
      options: ["GABA-A benzodiazepine site (PAM)", "SERT (serotonin transporter)", "NET (norepinephrine transporter)", "D2 receptor"],
      correctIndex: 0,
      explanation: "Chlordiazepoxide acts primarily at GABA-A benzodiazepine site (PAM). The original benzodiazepine GABA-A PAM — long-acting with a cascade of active metabolites including diazepam's own nordiazepam.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Chlordiazepoxide?",
      options: ["Sedation and drowsiness", "Ataxia", "Constipation", "Weight gain"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — Class standard.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Chlordiazepoxide for alcohol withdrawal (outpatient mild)?",
      options: [
        "50–100 mg day 1 tapering",
        "Regimen-limited (inpatient 400 mg/day max typical)",
        "50–100 mg day 1 tapering (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For alcohol withdrawal (outpatient mild): start 10–25 mg three to four times daily (or 50 mg TDS day 1), target 50–100 mg day 1 tapering, maximum Regimen-limited (inpatient 400 mg/day max typical). Fixed or CIWA-triggered regimens, tapering over 5–7 days (e.g., 50/25/10 mg step-down)",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Chlordiazepoxide in two sentences.",
      answer: "The original benzodiazepine GABA-A PAM — long-acting with a cascade of active metabolites including diazepam's own nordiazepam. Net effect: Anxiolysis, sedation, anticonvulsant and alcohol-withdrawal coverage via long-acting metabolites.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Chlordiazepoxide.",
      answer: "Alcohol withdrawal — mild to moderate, uncomplicated, Anxiety (short-term, historic), Preoperative anxiety (historic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Chlordiazepoxide and how you would manage it.",
      answer: "Respiratory depression with opioids/overdose: Class emergency. Management: Airway; flumazenil caution.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Chlordiazepoxide require?",
      answer: "CIWA-scored withdrawal reviews (During withdrawal regimens); Dependence review (Every repeat)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Chlordiazepoxide that separates safe prescribers from unsafe ones.",
      answer: "Chlordiazepoxide + thiamine: the withdrawal prescription that launched a thousand Indian discharge summaries.",
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
      checkpoint: "You now know what Chlordiazepoxide is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Chlordiazepoxide works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Chlordiazepoxide safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Chlordiazepoxide.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Chlordiazepoxide with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Chlordiazepoxide.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Oral: 30–60 min; withdrawal stabilisation within hours of loading.",
    ],
    ifItWorks: [
      "Continue Chlordiazepoxide at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Chlordiazepoxide (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Chlordiazepoxide follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "High — useful in withdrawal.",
    dosing: [
      {
        indication: "Alcohol withdrawal (outpatient mild)",
        starting: "10–25 mg three to four times daily (or 50 mg TDS day 1)",
        titration: "Fixed or CIWA-triggered regimens, tapering over 5–7 days (e.g., 50/25/10 mg step-down)",
        target: "50–100 mg day 1 tapering",
        max: "Regimen-limited (inpatient 400 mg/day max typical)",
      },
      {
        indication: "Anxiety (historic)",
        starting: "5–10 mg 3–4 times daily",
        titration: "Short courses only",
        target: "15–40 mg/day",
        max: "Short-term",
      },
    ],
    dosageForms: ["Capsules 5, 10, 25 mg", "Tablets 5, 10, 25 mg"],
    dosingTips: [
      "Fixed-dose taper schedule written as a calendar (e.g., 25/15/10/5 over days) — the Indian practice standard.",
      "Thiamine before glucose, always.",
      "Clumsy IM route — if injections needed, switch to lorazepam.",
    ],
    overdose: [
      "Overdose with Chlordiazepoxide is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Chlordiazepoxide is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Parent 5–30 h; metabolites extend to 100+ h..",
      "Metabolism: Hepatic CYP3A4 chain..",
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
      "The withdrawal tablet of record — smooth metabolite-built taper.",
      "Cheap and globally available.",
    ],
    potentialDisadvantages: [
      "Not for chronic anxiolysis — successors preferred.",
      "Accumulating metabolites in liver disease and elderly.",
      "Class dependence risk.",
    ],
    primaryTargetSymptoms: [
      "Alcohol withdrawal (autonomic symptoms, seizure prophylaxis)",
      "Short-term anxiety",
    ],
    pearls: [
      "Chlordiazepoxide + thiamine: the withdrawal prescription that launched a thousand Indian discharge summaries.",
      "Its own metabolite chain IS the taper — pharmacokinetics as therapy.",
      "The founding drug of the class (Librium, 1960) — its metabolite chain includes nordiazepam, diazepam's own descendant: the benzo family tree in one molecule.",
      "Chlordiazepoxide + thiamine = the classic Indian alcohol-withdral prescription pair (thiamine FIRST, before any glucose).",
      "The metabolite cascade is a built-in taper — the property that made it the withdrawal tablet standard.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
