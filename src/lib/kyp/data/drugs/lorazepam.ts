import type { Drug } from "../types";

/**
 * Lorazepam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), lorazepam monograph (book p. 68)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const lorazepam: Drug = {
  /* ---- Identity ---- */
  slug: "lorazepam",
  genericName: "Lorazepam",
  brandNames: ["Ativan", "Larpose / Lorazepam (generic)"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine",
  drugClassFullName: "Benzodiazepine (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepines", "Lorazepam"],
  /* ---- Hero / summary ---- */
  tagline: "The no-metabolite benzodiazepine — the elder-safe, liver-safe, status-epilepticus first line.",
  summary: "Lorazepam is the medium-acting benzodiazepine (half-life 10–20 h) whose signature is metabolic simplicity: it is glucuronidated directly with NO active metabolites and no significant CYP involvement — making it the benzo of choice in liver disease, in the elderly, and with interacting drugs. Its IM absorption is reliable (the only benzo that absorbs well intramuscularly), and its combination of rapid onset + intermediate duration made it the first-line drug for status epilepticus and acute agitation. Dependence risk is the class standard; the propylene-glycol carrier of large IV doses causes its own toxicity.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Lorazepam — from its molecular target (GABA-A receptor benzodiazepine site (PAM)) to clinical effect.",
    "List the FDA-approved and off-label uses of Lorazepam.",
    "Predict the common and serious side effects of Lorazepam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Lorazepam.",
    "Compare Lorazepam with other benzodiazepines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Lorazepam is a GABA-A positive allosteric modulator — the class mechanism — with direct glucuronidation and no active metabolites: cleaner kinetics, identical pharmacodynamics.",
    molecularTarget: "GABA-A receptor benzodiazepine site (PAM)",
    effect: "Anxiolysis, sedation, anticonvulsant action, and amnesia with intermediate duration (10–20 h half-life).",
    steps: [
      "Binds the benzodiazepine site on GABA-A — increases chloride-channel opening frequency when GABA is present (amplified natural inhibition).",
      "Glucuronidation to inactive lorazepam glucuronide — no CYP enzymes, no active metabolites.",
      "Intermediate half-life (10–20 h) allows twice-daily dosing without the accumulation of diazepam.",
      "Reliable IM absorption (unique among benzos) — onset 15–30 min IM; the agitation-route advantage.",
    ],
    pharmacokinetics: "Oral peak ~2 h; IM 15–30 min (reliable); IV 1–5 min. No active metabolites.",
    halfLife: "10–20 hours.",
    activeMetabolite: "None — glucuronide is inactive.",
    metabolism: "Direct glucuronidation (UGT2B15) — the CYP-free benzodiazepine.",
    excretion: "Renal (glucuronide).",
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
        label: "Lorazepam",
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
      name: "Anxiety disorders / short-term anxiety",
      status: "fda-approved",
      description: "2–4 week courses; the elder-appropriate anxiolytic.",
    },
    {
      name: "Status epilepticus — first-line",
      status: "guideline",
      description: "IV lorazepam is the modern first line: rapid onset + long seizure-free interval vs diazepam's redistribution.",
    },
    {
      name: "Acute agitation (IM)",
      status: "off-label",
      description: "The best-absorbed IM benzo — 0.5–2 mg IM for rapid calming.",
    },
    {
      name: "Alcohol withdrawal",
      status: "guideline",
      description: "Preferred in liver disease and the elderly where diazepam accumulates.",
    },
    {
      name: "Pre-procedural sedation / amnesia",
      status: "off-label",
      description: "The anaesthesia favourite for its clean kinetics.",
    },
    {
      name: "Catatonia (with haloperidol or alone)",
      status: "guideline",
      description: "Lorazepam challenge (1–2 mg) is both diagnostic and therapeutic — the catatonia first move.",
    },
    {
      name: "Insomnia (short-term)",
      status: "off-label",
      description: "Effective but dependence-prone.",
    },
    {
      name: "Chemotherapy-induced nausea/vomitis (adjunct)",
      status: "fda-approved",
      description: "IV adjunct in emesis protocols.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Lorazepam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioids",
      severity: "absolute",
      rationale: "Respiratory depression and death.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Risks with opioids — sedation, respiratory depression, death",
      text: "Concurrent benzodiazepine and opioid use causes profound sedation, respiratory depression, coma, and death. Lowest doses, shortest duration, explicit patient warning.",
    },
    {
      title: "Dependence, abuse, and withdrawal",
      text: "Dependence develops within weeks even at therapeutic doses; abrupt withdrawal can cause seizures and be life-threatening. Taper on discontinuation.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "Dose-limiting; less hangover than diazepam thanks to the shorter half-life.",
      management: "Dose timing and reduction.",
    },
    {
      name: "Anterograde amnesia",
      frequency: "common",
      severity: "moderate",
      description: "Especially at 2 mg+ — used deliberately for procedures.",
      management: "Counsel on post-dose restrictions.",
    },
    {
      name: "Ataxia and weakness",
      frequency: "common",
      severity: "moderate",
      description: "Falls risk in the elderly.",
      management: "Fall precautions.",
    },
    {
      name: "Dependence and rebound anxiety",
      frequency: "common",
      severity: "severe",
      description: "Class-defining: withdrawal anxiety and insomnia between doses (intermittent withdrawal) due to the intermediate half-life.",
      management: "Tapering; dose consolidation.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression (opioids/overdose/IV)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The boxed-warning emergency.",
      management: "Airway support; flumazenil with caution.",
    },
    {
      name: "Withdrawal seizures",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Abrupt cessation after regular use.",
      management: "Slow taper.",
    },
    {
      name: "Propylene glycol toxicity (high-dose IV infusions)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Large IV doses/infusions deliver the carrier: metabolic acidosis, renal failure, haemolysis.",
      management: "Limit cumulative IV doses; monitor acid-base in infusions.",
    },
    {
      name: "Paradoxical reactions",
      frequency: "rare",
      severity: "severe",
      description: "Excitement/disinhibition — children, elderly, developmental disability.",
      management: "Stop.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Respiratory status (IV use)",
      frequency: "Continuous during IV dosing",
      rationale: "Respiratory depression surveillance.",
    },
    {
      parameter: "Dependence review",
      frequency: "Every visit for repeat prescriptions",
      rationale: "The 2–4 week course discipline.",
    },
    {
      parameter: "Acid-base and renal function (high-dose IV)",
      frequency: "With infusions/large repeated IV doses",
      rationale: "Propylene glycol carrier toxicity.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "contraindicated",
      mechanism: "Respiratory depression and death.",
      action: "Avoid; explicit counselling.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "major",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
    {
      drug: "Valproate",
      severity: "major",
      mechanism: "Inhibits lorazepam glucuronidation — levels rise.",
      action: "Reduce lorazepam dose ~50% with valproate.",
    },
    {
      drug: "Probenecid",
      severity: "moderate",
      mechanism: "Reduces lorazepam clearance.",
      action: "Reduce dose.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "Oral-cleft signal (small absolute excess) in first trimester and floppy infant syndrome near term as with the class; short courses at the lowest dose when unavoidable.",
    lactation: "Minimal metabolite burden but the drug passes into milk — infant sedation possible; usually considered acceptable at low doses with monitoring.",
  },
  renalAdjustment: "Glucuronide excreted renally; generally safe — standard caution in severe impairment.",
  hepaticAdjustment: "The liver-friendly benzo: glucuronidation preserved even in cirrhosis; dose reduction still prudent in severe disease.",
  /* ---- Education ---- */
  patientExplanation: "Lorazepam is a calming medicine that works on the brain's natural relaxing chemical (GABA). It is the preferred member of its family in older people and in liver disease because the body clears it simply and completely. It calms severe anxiety, agitation, and seizures, and it is used before procedures. Like all medicines in this family it is meant for short courses — regular use for more than a few weeks causes dependence.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Lorazepam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Glucuronidation-only metabolism: no active metabolites, no CYP interactions — the benzo for liver disease, the elderly, and complex medication lists (one exception: valproate inhibits glucuronidation — halve the dose).",
    "The only reliably IM-absorbed benzo — the agitation route advantage.",
    "Status epilepticus first line: diazepam enters faster but redistributes away; lorazepam STAYS — the longer seizure-free interval wins.",
    "Catatonia: 1–2 mg lorazepam challenge — diagnosis and treatment in one move.",
    "IM + haloperidol = the classic acute agitation pair (beware additive sedation; separate from IM olanzapine in time).",
    "Propylene glycol: the hidden dose-limit in high-dose IV use — acidosis, renal failure.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Lorazepam: Lorazepam is a GABA-A positive allosteric modulator — the class mechanism — with direct glucuronidation and no active metabolites: cleaner kinetics, identical pharmacodynamics.",
        "Uses of Lorazepam: Anxiety disorders / short-term anxiety; Status epilepticus — first-line; Acute agitation (IM); Alcohol withdrawal",
        "Mechanism: GABA-A PAM (class-standard).",
        "Metabolism: direct GLUCURONIDATION — no active metabolites, no CYP (the elder/liver-safe benzo).",
      ],
      practical: [
        "Prescribe Lorazepam for anxiety disorders / short-term anxiety with dose, timing, and duration.",
        "Outline the monitoring plan: Respiratory status (IV use) (Continuous during IV dosing); Dependence review (Every visit for repeat prescriptions); Acid-base and renal function (high-dose IV) (With infusions/large repeated IV doses)",
      ],
      longAnswer: [
        "Lorazepam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: GABA-A PAM (class-standard).",
        "Metabolism: direct GLUCURONIDATION — no active metabolites, no CYP (the elder/liver-safe benzo).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: GABA-A PAM (class-standard).",
        "Metabolism: direct GLUCURONIDATION — no active metabolites, no CYP (the elder/liver-safe benzo).",
        "Half-life 10–20 h; reliable IM absorption (unique in class).",
        "First-line: status epilepticus (IV), acute agitation (IM), catatonia (challenge).",
        "Interaction exception: valproate inhibits glucuronidation — halve lorazepam.",
        "Boxed warnings: opioid combination + dependence/withdrawal.",
      ],
      pyqConcepts: [
        "Mechanism/target of Lorazepam",
        "Key adverse effect: Respiratory depression (opioids/overdose/IV)",
        "Dosing and titration of Lorazepam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Lorazepam develops respiratory depression (opioids/overdose/iv) — next best step?",
        "When to choose Lorazepam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A receptor benzodiazepine site (PAM)",
        "Most common side effects: Sedation and drowsiness, Anterograde amnesia, Ataxia and weakness",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The simple-kinetics benzo: no metabolites, no CYP — the safe default in complex patients.",
        "Diazepam enters faster but lorazepam STAYS — the status-epilepticus logic.",
        "Catatonia responds to lorazepam — 1–2 mg is both test and treatment.",
        "Valproate doubles lorazepam: the one interaction it can't escape.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: GABA-A PAM (class-standard).",
    "Metabolism: direct GLUCURONIDATION — no active metabolites, no CYP (the elder/liver-safe benzo).",
    "Half-life 10–20 h; reliable IM absorption (unique in class).",
    "First-line: status epilepticus (IV), acute agitation (IM), catatonia (challenge).",
    "Interaction exception: valproate inhibits glucuronidation — halve lorazepam.",
    "Boxed warnings: opioid combination + dependence/withdrawal.",
    "High-dose IV: propylene glycol carrier toxicity (acidosis, renal failure).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — anxiety disorders / short-term anxiety",
      presentation: "A patient presenting with anxiety disorders / short-term anxiety, started on Lorazepam.",
      history: "A adult patient presents with a anxiety disorders / short-term anxiety picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with anxiety disorders / short-term anxiety; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Anxiety disorders / short-term anxiety. Differentials are considered and excluded clinically.",
      rationale: "Lorazepam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine) with strong evidence in this condition.",
      management: "Started at 0.5–1 mg twice daily, titrated to 1–4 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Lorazepam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine comparison — choosing within the class",
      primaryDrug: "Lorazepam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A receptor benzodiazepine site (PAM)",
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
              drug: "Chlordiazepoxide",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "10–20 hours.",
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
              drug: "Chlordiazepoxide",
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
              value: "See product information and class comparison.",
            },
            {
              drug: "Diazepam",
              value: "See product information and class comparison.",
            },
            {
              drug: "Chlordiazepoxide",
              value: "See product information and class comparison.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Moderate — intermediate duration limits hangover vs diazepam.",
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
              drug: "Chlordiazepoxide",
              value: "High — useful in withdrawal.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Glucuronidation-only metabolism — the liver/elderly/interactions-safe benzo",
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
              drug: "Chlordiazepoxide",
              value: "Alcohol withdrawal tablet — the founding benzo",
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
      description: "Lorazepam reaches peak plasma concentration and begins acting at its molecular target (GABA-A receptor benzodiazepine site (PAM)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, anterograde amnesia, ataxia and weakness). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (IV: 1–5 minutes. IM: 15–30 min. Oral: 30–60 min (peak ~2 h).)",
      title: "Therapeutic effect builds",
      description: "IV: 1–5 minutes. IM: 15–30 min. Oral: 30–60 min (peak ~2 h). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Lorazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Lorazepam take to work?",
      answer: "IV: 1–5 minutes. IM: 15–30 min. Oral: 30–60 min (peak ~2 h).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Lorazepam?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Anterograde amnesia, Ataxia and weakness, Dependence and rebound anxiety. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Lorazepam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Lorazepam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Lorazepam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Lorazepam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Lorazepam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), lorazepam monograph, p. 68",
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
        source: "FDA Prescribing Information for Ativan (Lorazepam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for lorazepam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Lorazepam",
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
      name: "Chlordiazepoxide",
      slug: "chlordiazepoxide",
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
      name: "Anxiety disorders / short-term anxiety",
      relationship: "primary",
    },
    {
      name: "Status epilepticus — first-line",
      relationship: "alternative",
    },
    {
      name: "Acute agitation (IM)",
      relationship: "off-label",
    },
    {
      name: "Alcohol withdrawal",
      relationship: "alternative",
    },
    {
      name: "Pre-procedural sedation / amnesia",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Lorazepam",
      type: "drug",
      href: "/drugs/lorazepam",
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
      label: "GABA-A receptor benzodiazepine site (PAM)",
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
      label: "Anxiety disorders / short-term anxiety",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Status epilepticus — first-line",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Acute agitation (IM)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Respiratory depression (opioids/overdose/IV)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Withdrawal seizures",
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
      label: "Patient Guide — Lorazepam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The no-metabolite benzodiazepine — the elder-safe, liver-safe, status-epilepticus first line.",
    summary: "Lorazepam is a prescription medicine used to treat anxiety disorders / short-term anxiety. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Lorazepam is a calming medicine that works on the brain's natural relaxing chemical (GABA). It is the preferred member of its family in older people and in liver disease because the body clears it simply and completely. It calms severe anxiety, agitation, and seizures, and it is used before procedures. Like all medicines in this family it is meant for short courses — regular use for more than a few weeks causes dependence.",
    sideEffects: "The most common side effects are: sedation and drowsiness, anterograde amnesia, ataxia and weakness, dependence and rebound anxiety. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression (opioids/overdose/IV) and Withdrawal seizures. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: respiratory status (iv use) (continuous during iv dosing); dependence review (every visit for repeat prescriptions); acid-base and renal function (high-dose iv) (with infusions/large repeated iv doses). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol and CNS depressants, Valproate, Probenecid. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Ativan / Larpose",
        manufacturer: "Wyeth/Cipla legacy",
        strengths: "1, 2 mg",
      },
      {
        name: "Lorazepam generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "0.5–2 mg tabs, injection",
      },
    ],
    typicalDoses: "Anxiety 1–4 mg/day; IM agitation 0.5–2 mg; IV status 4 mg.",
    prescribingScenarios: [
      "Status epilepticus in emergency departments.",
      "Acute agitation protocols (IM).",
      "Catatonia treatment in psychiatry units.",
      "Alcohol withdrawal in liver-disease patients.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Respiratory observation with IV use; dependence review at every repeat prescription.",
    patientCounselling: [
      "Short course only; never with opioid painkillers.",
      "Do not drive until you know its effect on you.",
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
    note: "Generic tablets and injection widely available.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Benzodiazepines",
    members: [
      {
        name: "Lorazepam",
        slug: "lorazepam",
        relationship: "This guide",
        distinguishing: "Glucuronidation-only metabolism — the liver/elderly/interactions-safe benzo",
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
        name: "Chlordiazepoxide",
        slug: "chlordiazepoxide",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Alcohol withdrawal tablet — the founding benzo",
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
    study: "40 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Lorazepam primarily act on?",
      options: [
        "GABA-A receptor benzodiazepine site (PAM)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Lorazepam acts primarily at GABA-A receptor benzodiazepine site (PAM). Lorazepam is a GABA-A positive allosteric modulator — the class mechanism — with direct glucuronidation and no active metabolites: cleaner kinetics, identical pharmacodynamics.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Lorazepam?",
      options: ["Sedation and drowsiness", "Anterograde amnesia", "Ataxia and weakness", "Dependence and rebound anxiety"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — Dose-limiting; less hangover than diazepam thanks to the shorter half-life.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Lorazepam for anxiety (short course)?",
      options: ["1–4 mg/day", "Up to 4 mg/day (outpatient)", "1–4 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For anxiety (short course): start 0.5–1 mg twice daily, target 1–4 mg/day, maximum Up to 4 mg/day (outpatient). Lowest effective dose; 2–4 week course",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Lorazepam in two sentences.",
      answer: "Lorazepam is a GABA-A positive allosteric modulator — the class mechanism — with direct glucuronidation and no active metabolites: cleaner kinetics, identical pharmacodynamics. Net effect: Anxiolysis, sedation, anticonvulsant action, and amnesia with intermediate duration (10–20 h half-life).",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Lorazepam.",
      answer: "Anxiety disorders / short-term anxiety, Status epilepticus — first-line, Acute agitation (IM), Alcohol withdrawal. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Lorazepam and how you would manage it.",
      answer: "Respiratory depression (opioids/overdose/IV): The boxed-warning emergency. Management: Airway support; flumazenil with caution.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Lorazepam require?",
      answer: "Respiratory status (IV use) (Continuous during IV dosing); Dependence review (Every visit for repeat prescriptions); Acid-base and renal function (high-dose IV) (With infusions/large repeated IV doses)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Lorazepam that separates safe prescribers from unsafe ones.",
      answer: "The simple-kinetics benzo: no metabolites, no CYP — the safe default in complex patients.",
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
      checkpoint: "You now know what Lorazepam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Lorazepam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Lorazepam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Lorazepam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Lorazepam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Lorazepam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "IV: 1–5 minutes. IM: 15–30 min. Oral: 30–60 min (peak ~2 h).",
    ],
    ifItWorks: [
      "Continue Lorazepam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Lorazepam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Lorazepam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Moderate — intermediate duration limits hangover vs diazepam.",
    dosing: [
      {
        indication: "Anxiety (short course)",
        starting: "0.5–1 mg twice daily",
        titration: "Lowest effective dose; 2–4 week course",
        target: "1–4 mg/day",
        max: "Up to 4 mg/day (outpatient)",
      },
      {
        indication: "Acute agitation (IM)",
        starting: "0.5–2 mg IM",
        titration: "Repeat after 30–60 min if needed",
        target: "0.5–2 mg per episode",
        max: "Protocol-limited",
      },
      {
        indication: "Status epilepticus (IV)",
        starting: "4 mg IV (0.1 mg/kg, max 4 mg)",
        titration: "Repeat once after 5–10 min; then transition to anticonvulsant",
        target: "4–8 mg IV per episode",
        max: "Protocol-limited",
      },
      {
        indication: "Catatonia",
        starting: "1–2 mg IM/IV challenge",
        titration: "Then 1–2 mg three times daily maintenance; taper over days",
        target: "3–6 mg/day (up to 20+ in severe)",
        max: "Tolerability-limited",
      },
      {
        indication: "Alcohol withdrawal",
        starting: "1–2 mg hourly by CIWA score",
        titration: "Symptom-triggered; taper over 2–4 days",
        target: "Regimen-driven",
        max: "Regimen-limited",
      },
      {
        indication: "Pre-procedural sedation",
        starting: "1–2 mg IV or 2–4 mg oral",
        titration: "Titrate to effect",
        target: "Individualised",
        max: "Procedure-limited",
      },
    ],
    dosageForms: [
      "Tablets 0.5, 1, 2 mg",
      "Sublingual tablets 1, 2 mg (speed advantage)",
      "Injection 2, 4 mg/mL",
    ],
    dosingTips: [
      "Sublingual for panic speed without injection.",
      "The valproate check: halve lorazepam when starting valproate.",
      "IV infusion limits: watch propylene glycol (acidosis) beyond ~8 mg/h for extended periods.",
      "Catatonia: the challenge that treats — 1–2 mg and watch for the awakening.",
    ],
    overdose: [
      "Overdose with Lorazepam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Lorazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 10–20 hours..",
      "Metabolism: Direct glucuronidation (UGT2B15) — the CYP-free benzodiazepine..",
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
      "Clean metabolism — elderly, liver disease, polypharmacy safe.",
      "Reliable IM route.",
      "Status-epilepticus first line.",
      "Sublingual speed. Catatonia indication.",
    ],
    potentialDisadvantages: [
      "Full class dependence risk.",
      "Intermittent-withdrawal anxiety between doses.",
      "Propylene glycol IV limit.",
      "Amnesia burden at higher doses.",
    ],
    primaryTargetSymptoms: ["Acute anxiety and agitation", "Seizures (status)", "Catatonia", "Alcohol withdrawal", "Pre-procedural sedation"],
    pearls: [
      "The simple-kinetics benzo: no metabolites, no CYP — the safe default in complex patients.",
      "Diazepam enters faster but lorazepam STAYS — the status-epilepticus logic.",
      "Catatonia responds to lorazepam — 1–2 mg is both test and treatment.",
      "Valproate doubles lorazepam: the one interaction it can't escape.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
