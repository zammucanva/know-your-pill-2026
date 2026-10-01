import type { Drug } from "../types";

/**
 * Oxazepam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), oxazepam monograph (book p. 91)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const oxazepam: Drug = {
  /* ---- Identity ---- */
  slug: "oxazepam",
  genericName: "Oxazepam",
  brandNames: ["Serax", "Seresta"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine",
  drugClassFullName: "Benzodiazepine (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepines", "Oxazepam"],
  /* ---- Hero / summary ---- */
  tagline: "The final common metabolite — glucuronidated, mild, and the elder-and-liver-friendly anxiolytic.",
  summary: "Oxazepam is the short-acting (6–20 h) benzodiazepine that is the FINAL metabolite of diazepam's chain: it is glucuronidated directly with no active metabolites and no CYP involvement — the lorazepam-style safety in a gentler, weaker package. Its slow oral absorption makes it less attractive for abuse, and its simple kinetics make it the alcohol-withdrawal and anxiety choice in the elderly and in liver disease.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Oxazepam — from its molecular target (GABA-A benzodiazepine site (PAM)) to clinical effect.",
    "List the FDA-approved and off-label uses of Oxazepam.",
    "Predict the common and serious side effects of Oxazepam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Oxazepam.",
    "Compare Oxazepam with other benzodiazepines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Short-acting GABA-A PAM with direct glucuronidation — no active metabolites, no CYP metabolism.",
    molecularTarget: "GABA-A benzodiazepine site (PAM)",
    effect: "Mild-to-moderate anxiolysis and withdrawal coverage with simple, safe kinetics.",
    steps: [
      "Class mechanism: benzodiazepine-site positive allosteric modulation.",
      "Direct glucuronidation to inactive metabolite — no CYP, no accumulation.",
      "Slow absorption and moderate potency reduce euphoria/misuse appeal.",
      "10–15 mg oxazepam ≈ 5 mg diazepam.",
    ],
    pharmacokinetics: "Slow oral absorption (peak ~2–4 h) — onset gentler than siblings.",
    halfLife: "6–20 hours.",
    metabolism: "Direct glucuronidation only.",
    excretion: "Renal.",
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
        label: "Oxazepam",
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
  receptors: ["GABA-A receptor (PAM)"],
  brainRegionIds: ["amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Anxiety disorders / alcohol withdrawal (mild)",
      status: "fda-approved",
      description: "The elder-and-liver-friendly option: 10–30 mg dosing.",
    },
    {
      name: "Anxiety in the elderly",
      status: "guideline",
      description: "Simple kinetics + no accumulation = the safest anxiolytic benzo for older patients.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Oxazepam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioids",
      severity: "absolute",
      rationale: "Concurrent use causes profound sedation, respiratory depression, and death — the strongest boxed warning combination in medicine.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Risks with opioids",
      text: "Class warning.",
    },
    {
      title: "Dependence and withdrawal",
      text: "Class warning — short courses, taper.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation",
      frequency: "common",
      severity: "mild",
      description: "Gentler than high-potency siblings.",
      management: "Dose timing.",
    },
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression with opioids",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class emergency.",
      management: "Airway support.",
    },
    {
      name: "Withdrawal seizures on abrupt stop",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Taper.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Respiratory status and sedation",
      frequency: "Clinical review each visit",
      rationale: "Respiratory depression risk in overdose and with opioids.",
    },
    {
      parameter: "Dependence review",
      frequency: "Every visit for long-term users",
      rationale: "Tolerance and dependence develop within weeks.",
    },
    {
      parameter: "Fall risk review (elderly)",
      frequency: "Every visit in older patients",
      rationale: "Falls and fractures are the main harm in the elderly.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "contraindicated",
      mechanism: "Concurrent use causes profound sedation, respiratory depression, and death — the strongest boxed warning combination in medicine.",
      action: "Avoid; if unavoidable for taper protocols, use lowest doses with intensive monitoring.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "major",
      mechanism: "Additive sedation and respiratory depression.",
      action: "Counsel strongly against alcohol.",
    },
    {
      drug: "Clozapine",
      severity: "major",
      mechanism: "Rare but serious respiratory depression/death reported early in treatment.",
      action: "Minimise or avoid, especially in the first weeks.",
    },
    {
      drug: "Older antihistamines (sedating)",
      severity: "moderate",
      mechanism: "Additive sedation in the elderly — falls.",
      action: "Prefer non-sedating alternatives.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "First-trimester exposure is associated with a small absolute increase in oral clefts, and third-trimester use causes neonatal floppy infant syndrome (sedation, hypotonia, poor feeding) and withdrawal. Use short courses at the lowest dose when unavoidable; avoid near term.",
    lactation: "Infant sedation is the main concern with sedative doses; short-acting agents at low doses are preferred where breastfeeding continues. Monitor the infant for drowsiness and poor feeding.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Oxazepam is a medicine used to treat anxiety disorders / alcohol withdrawal (mild). Short-acting GABA-A PAM with direct glucuronidation — no active metabolites, no CYP metabolism. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Oxazepam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The end of the metabolic road: diazepam → nordiazepam → temazepam → OXAZEPAM — the final common metabolite marketed as its own drug.",
    "Elder + liver = oxazepam or lorazepam: the glucuronidation pair that bypasses CYP entirely.",
    "Slow absorption = lower misuse appeal — a pharmacokinetic anti-abuse feature.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Oxazepam: Short-acting GABA-A PAM with direct glucuronidation — no active metabolites, no CYP metabolism.",
        "Uses of Oxazepam: Anxiety disorders / alcohol withdrawal (mild); Anxiety in the elderly",
        "Final inactive-pathway metabolite of diazepam — glucuronidation only.",
        "Half-life 6–20 h; no active metabolites; no CYP.",
      ],
      practical: [
        "Prescribe Oxazepam for anxiety disorders / alcohol withdrawal (mild) with dose, timing, and duration.",
        "Outline the monitoring plan: Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      ],
      longAnswer: [
        "Oxazepam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Final inactive-pathway metabolite of diazepam — glucuronidation only.",
        "Half-life 6–20 h; no active metabolites; no CYP.",
      ],
    },
    neetPg: {
      highYield: [
        "Final inactive-pathway metabolite of diazepam — glucuronidation only.",
        "Half-life 6–20 h; no active metabolites; no CYP.",
        "Preferred with lorazepam in elderly/liver disease.",
        "10–15 mg ≈ 5 mg diazepam equivalence.",
        "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
      ],
      pyqConcepts: [
        "Mechanism/target of Oxazepam",
        "Key adverse effect: Respiratory depression with opioids",
        "Dosing and titration of Oxazepam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Oxazepam develops respiratory depression with opioids — next best step?",
        "When to choose Oxazepam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (PAM)",
        "Most common side effects: Sedation, Dizziness",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The diazepam family tree ends here — oxazepam is the metabolite that became a medicine.",
        "Simple, weak, safe: exactly what the elderly anxiolytic prescription wants.",
        "The end of the metabolic road: diazepam → nordiazepam → temazepam → OXAZEPAM — the final common metabolite marketed as its own drug.",
        "Elder + liver = oxazepam or lorazepam: the glucuronidation pair that bypasses CYP entirely.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Final inactive-pathway metabolite of diazepam — glucuronidation only.",
    "Half-life 6–20 h; no active metabolites; no CYP.",
    "Preferred with lorazepam in elderly/liver disease.",
    "10–15 mg ≈ 5 mg diazepam equivalence.",
    "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — anxiety disorders / alcohol withdrawal (mild)",
      presentation: "A patient presenting with anxiety disorders / alcohol withdrawal (mild), started on Oxazepam.",
      history: "A adult patient presents with a anxiety disorders / alcohol withdrawal (mild) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with anxiety disorders / alcohol withdrawal (mild); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Anxiety disorders / alcohol withdrawal (mild). Differentials are considered and excluded clinically.",
      rationale: "Oxazepam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine) with strong evidence in this condition.",
      management: "Started at 10–20 mg three times daily, titrated to 30–90 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Oxazepam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine comparison — choosing within the class",
      primaryDrug: "Oxazepam",
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
          primaryValue: "6–20 hours.",
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
              value: "See product information and class comparison.",
            },
            {
              drug: "Diazepam",
              value: "See product information and class comparison.",
            },
            {
              drug: "Lorazepam",
              value: "See product information and class comparison.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Mild-to-moderate.",
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
          primaryValue: "Oxazepam — see clinical pearls",
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
      description: "Oxazepam reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (PAM)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation, dizziness). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Oral: 45–90 min (slower than siblings — gentle onset).)",
      title: "Therapeutic effect builds",
      description: "Oral: 45–90 min (slower than siblings — gentle onset). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Oxazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Oxazepam take to work?",
      answer: "Oral: 45–90 min (slower than siblings — gentle onset).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Oxazepam?",
      answer: "The most frequently reported effects are: Sedation, Dizziness. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Oxazepam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Oxazepam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Oxazepam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Oxazepam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Oxazepam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), oxazepam monograph, p. 91",
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
        source: "FDA Prescribing Information for Serax (Oxazepam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for oxazepam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Oxazepam",
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
  ],
  relatedConditions: [
    {
      name: "Anxiety disorders / alcohol withdrawal (mild)",
      relationship: "primary",
    },
    {
      name: "Anxiety in the elderly",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Oxazepam",
      type: "drug",
      href: "/drugs/oxazepam",
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
      label: "Anxiety disorders / alcohol withdrawal (mild)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Anxiety in the elderly",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Respiratory depression with opioids",
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
      label: "Sedation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Oxazepam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The final common metabolite — glucuronidated, mild, and the elder-and-liver-friendly anxiolytic.",
    summary: "Oxazepam is a prescription medicine used to treat anxiety disorders / alcohol withdrawal (mild). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Oxazepam is a medicine used to treat anxiety disorders / alcohol withdrawal (mild). Short-acting GABA-A PAM with direct glucuronidation — no active metabolites, no CYP metabolism. Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
    sideEffects: "The most common side effects are: sedation, dizziness. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression with opioids and Withdrawal seizures on abrupt stop. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: respiratory status and sedation (clinical review each visit); dependence review (every visit for long-term users); fall risk review (elderly) (every visit in older patients). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol and CNS depressants, Clozapine, Older antihistamines (sedating). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Seresta/Serepax where available)",
        manufacturer: "legacy/imported",
        strengths: "10–30 mg",
      },
    ],
    typicalDoses: "10–30 mg three times daily.",
    prescribingScenarios: [
      "Elderly anxiety where a benzo is unavoidable.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance — see Monitoring section.",
    patientCounselling: [
      "Same class rules: short course, no alcohol.",
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
    familyName: "Benzodiazepines",
    members: [
      {
        name: "Oxazepam",
        slug: "oxazepam",
        relationship: "This guide",
        distinguishing: "See pearls",
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
      question: "Which molecular target does Oxazepam primarily act on?",
      options: ["GABA-A benzodiazepine site (PAM)", "SERT (serotonin transporter)", "NET (norepinephrine transporter)", "D2 receptor"],
      correctIndex: 0,
      explanation: "Oxazepam acts primarily at GABA-A benzodiazepine site (PAM). Short-acting GABA-A PAM with direct glucuronidation — no active metabolites, no CYP metabolism.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Oxazepam?",
      options: ["Sedation", "Dizziness", "Weight gain", "Hair loss"],
      correctIndex: 0,
      explanation: "Sedation — Gentler than high-potency siblings.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Oxazepam for anxiety / withdrawal (elder-friendly)?",
      options: ["30–90 mg/day", "120 mg/day", "30–90 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For anxiety / withdrawal (elder-friendly): start 10–20 mg three times daily, target 30–90 mg/day, maximum 120 mg/day. Adjust by response",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Oxazepam in two sentences.",
      answer: "Short-acting GABA-A PAM with direct glucuronidation — no active metabolites, no CYP metabolism. Net effect: Mild-to-moderate anxiolysis and withdrawal coverage with simple, safe kinetics.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Oxazepam.",
      answer: "Anxiety disorders / alcohol withdrawal (mild), Anxiety in the elderly. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Oxazepam and how you would manage it.",
      answer: "Respiratory depression with opioids: Class emergency. Management: Airway support.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Oxazepam require?",
      answer: "Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Oxazepam that separates safe prescribers from unsafe ones.",
      answer: "The diazepam family tree ends here — oxazepam is the metabolite that became a medicine.",
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
      checkpoint: "You now know what Oxazepam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Oxazepam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Oxazepam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Oxazepam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Oxazepam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Oxazepam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Oral: 45–90 min (slower than siblings — gentle onset).",
    ],
    ifItWorks: [
      "Continue Oxazepam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Oxazepam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Oxazepam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Mild-to-moderate.",
    dosing: [
      {
        indication: "Anxiety / withdrawal (elder-friendly)",
        starting: "10–20 mg three times daily",
        titration: "Adjust by response",
        target: "30–90 mg/day",
        max: "120 mg/day",
      },
    ],
    dosageForms: ["Tablets/capsules 10, 15, 30 mg"],
    dosingTips: [
      "Preferred where accumulation is the enemy: elderly, liver disease, renal cautious.",
      "Slower onset makes PRN panic use impractical — choose alprazolam/lorazepam for that.",
    ],
    overdose: [
      "Overdose with Oxazepam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Oxazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 6–20 hours..",
      "Metabolism: Direct glucuronidation only..",
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
    potentialAdvantages: ["Cleanest kinetics with lorazepam.", "Lowest misuse appeal in class.", "Gentle onset."],
    potentialDisadvantages: ["Weak for severe anxiety.", "Slow onset limits PRN use.", "Scarce in many markets."],
    primaryTargetSymptoms: [
      "Anxiety in the elderly and liver-impaired",
      "Mild alcohol withdrawal",
    ],
    pearls: [
      "The diazepam family tree ends here — oxazepam is the metabolite that became a medicine.",
      "Simple, weak, safe: exactly what the elderly anxiolytic prescription wants.",
      "The end of the metabolic road: diazepam → nordiazepam → temazepam → OXAZEPAM — the final common metabolite marketed as its own drug.",
      "Elder + liver = oxazepam or lorazepam: the glucuronidation pair that bypasses CYP entirely.",
      "Slow absorption = lower misuse appeal — a pharmacokinetic anti-abuse feature.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
