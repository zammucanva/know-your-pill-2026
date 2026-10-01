import type { Drug } from "../types";

/**
 * Loflazepate — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), loflazepate monograph (book p. 67)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const loflazepate: Drug = {
  /* ---- Identity ---- */
  slug: "loflazepate",
  genericName: "Loflazepate",
  brandNames: ["Meilax"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine",
  drugClassFullName: "Benzodiazepine (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepines", "Loflazepate"],
  /* ---- Hero / summary ---- */
  tagline: "Japan's long-acting anxiolytic benzo — a regional monograph for completeness.",
  summary: "Loflazepate is a long-acting benzodiazepine marketed primarily in Japan for anxiety and anxiety-with-depression states, with psychosomatic symptom coverage. Its metabolism leads to active metabolites including desmethyl- and dibenzyl-derivatives, and its clinical profile is class-standard: anxiolysis with sedation and the full dependence framework of the benzodiazepines.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Loflazepate — from its molecular target (GABA-A benzodiazepine site (PAM)) to clinical effect.",
    "List the FDA-approved and off-label uses of Loflazepate.",
    "Predict the common and serious side effects of Loflazepate from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Loflazepate.",
    "Compare Loflazepate with other benzodiazepines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Long-acting benzodiazepine GABA-A PAM with active metabolites (desmethyloflazepate and others).",
    molecularTarget: "GABA-A benzodiazepine site (PAM)",
    effect: "Anxiolysis with long-acting coverage.",
    steps: ["Class mechanism.", "Active metabolites extend duration.", "Once or twice daily dosing."],
    pharmacokinetics: "Oral; metabolite-mediated long action.",
    halfLife: "Long (metabolites extend to ~60+ h).",
    metabolism: "Hepatic to active metabolites.",
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
        label: "Loflazepate",
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
      name: "Anxiety and anxiety-depression states (Japan)",
      status: "guideline",
      description: "The Japanese-market anxiolytic niche.",
    },
    {
      name: "Psychosomatic symptoms (anxiety-driven)",
      status: "guideline",
      description: "Somatic anxiety presentations in Japanese practice.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Loflazepate must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      text: "Class warning.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "common",
      severity: "moderate",
      description: "Class standard.",
      management: "Dose timing.",
    },
    {
      name: "Dizziness / ataxia",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Dose review.",
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
      name: "Withdrawal phenomena",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Long-acting = prolonged withdrawal.",
      management: "Slow taper.",
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
  patientExplanation: "Loflazepate is a medicine used to treat anxiety and anxiety-depression states (japan). Long-acting benzodiazepine GABA-A PAM with active metabolites (desmethyloflazepate and others). Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Loflazepate builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Geography matters: a Japanese-market benzo — encountered mainly in continuity-of-care when patients relocate.",
    "Nothing pharmacologically distinguishes it from the class long-actors; its identity is national.",
    "All benzodiazepines share the GABA-A amplification mechanism — the choice between them is pharmacokinetics: onset speed, duration, and metabolite burden.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Loflazepate: Long-acting benzodiazepine GABA-A PAM with active metabolites (desmethyloflazepate and others).",
        "Uses of Loflazepate: Anxiety and anxiety-depression states (Japan); Psychosomatic symptoms (anxiety-driven)",
        "Japanese long-acting benzodiazepine (Meilax).",
        "Class-standard GABA-A PAM profile with active metabolites.",
      ],
      practical: [
        "Prescribe Loflazepate for anxiety and anxiety-depression states (japan) with dose, timing, and duration.",
        "Outline the monitoring plan: Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      ],
      longAnswer: [
        "Loflazepate: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Japanese long-acting benzodiazepine (Meilax).",
        "Class-standard GABA-A PAM profile with active metabolites.",
      ],
    },
    neetPg: {
      highYield: [
        "Japanese long-acting benzodiazepine (Meilax).",
        "Class-standard GABA-A PAM profile with active metabolites.",
        "Anxiety and psychosomatic indications in Japanese practice.",
        "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
        "The class boxed warning: opioids + benzodiazepines = respiratory depression and death.",
      ],
      pyqConcepts: [
        "Mechanism/target of Loflazepate",
        "Key adverse effect: Respiratory depression with opioids",
        "Dosing and titration of Loflazepate",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Loflazepate develops respiratory depression with opioids — next best step?",
        "When to choose Loflazepate over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (PAM)",
        "Most common side effects: Sedation and drowsiness, Dizziness / ataxia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The travelling-patient benzo: know it exists for continuity, not for starting.",
        "Geography matters: a Japanese-market benzo — encountered mainly in continuity-of-care when patients relocate.",
        "Nothing pharmacologically distinguishes it from the class long-actors; its identity is national.",
        "All benzodiazepines share the GABA-A amplification mechanism — the choice between them is pharmacokinetics: onset speed, duration, and metabolite burden.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Japanese long-acting benzodiazepine (Meilax).",
    "Class-standard GABA-A PAM profile with active metabolites.",
    "Anxiety and psychosomatic indications in Japanese practice.",
    "Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
    "The class boxed warning: opioids + benzodiazepines = respiratory depression and death.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — anxiety and anxiety-depression states (japan)",
      presentation: "A patient presenting with anxiety and anxiety-depression states (japan), started on Loflazepate.",
      history: "A adult patient presents with a anxiety and anxiety-depression states (japan) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with anxiety and anxiety-depression states (japan); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Anxiety and anxiety-depression states (Japan). Differentials are considered and excluded clinically.",
      rationale: "Loflazepate is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine) with strong evidence in this condition.",
      management: "Started at 1 mg twice daily, titrated to 1–3 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Loflazepate takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine comparison — choosing within the class",
      primaryDrug: "Loflazepate",
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
          primaryValue: "Long (metabolites extend to ~60+ h).",
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
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Moderate.",
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
          primaryValue: "Loflazepate — see clinical pearls",
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
      description: "Loflazepate reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (PAM)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, dizziness / ataxia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Oral: within an hour; long metabolite tail.)",
      title: "Therapeutic effect builds",
      description: "Oral: within an hour; long metabolite tail. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Loflazepate is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Loflazepate take to work?",
      answer: "Oral: within an hour; long metabolite tail.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Loflazepate?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Dizziness / ataxia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Loflazepate suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Loflazepate habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Loflazepate exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Loflazepate during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Loflazepate may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), loflazepate monograph, p. 67",
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
        source: "FDA Prescribing Information for Meilax (Loflazepate)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for loflazepate — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Loflazepate",
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
      name: "Anxiety and anxiety-depression states (Japan)",
      relationship: "alternative",
    },
    {
      name: "Psychosomatic symptoms (anxiety-driven)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Loflazepate",
      type: "drug",
      href: "/drugs/loflazepate",
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
      label: "Anxiety and anxiety-depression states (Japan)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Psychosomatic symptoms (anxiety-driven)",
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
      label: "Withdrawal phenomena",
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
      label: "Patient Guide — Loflazepate",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Japan's long-acting anxiolytic benzo — a regional monograph for completeness.",
    summary: "Loflazepate is a prescription medicine used to treat anxiety and anxiety-depression states (japan). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Loflazepate is a medicine used to treat anxiety and anxiety-depression states (japan). Long-acting benzodiazepine GABA-A PAM with active metabolites (desmethyloflazepate and others). Like every medicine in its class it works gradually where noted, must be taken exactly as prescribed, and should never be stopped suddenly without speaking to your doctor.",
    sideEffects: "The most common side effects are: sedation and drowsiness, dizziness / ataxia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression with opioids and Withdrawal phenomena. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: respiratory status and sedation (clinical review each visit); dependence review (every visit for long-term users); fall risk review (elderly) (every visit in older patients). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol and CNS depressants, Clozapine, Older antihistamines (sedating). Avoid alcohol unless your doctor says it is safe.",
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
    prescribingScenarios: [
      "Continuity for patients relocating from Japan.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "high",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance — see Monitoring section.",
    patientCounselling: [
      "Class rules apply; plan an equivalent switch locally.",
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
    familyName: "Benzodiazepines",
    members: [
      {
        name: "Loflazepate",
        slug: "loflazepate",
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
      question: "Which molecular target does Loflazepate primarily act on?",
      options: ["GABA-A benzodiazepine site (PAM)", "SERT (serotonin transporter)", "NET (norepinephrine transporter)", "D2 receptor"],
      correctIndex: 0,
      explanation: "Loflazepate acts primarily at GABA-A benzodiazepine site (PAM). Long-acting benzodiazepine GABA-A PAM with active metabolites (desmethyloflazepate and others).",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Loflazepate?",
      options: ["Sedation and drowsiness", "Dizziness / ataxia", "Weight gain", "Hair loss"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — Class standard.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Loflazepate for anxiety (japan)?",
      options: ["1–3 mg/day", "3 mg/day", "1–3 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For anxiety (japan): start 1 mg twice daily, target 1–3 mg/day, maximum 3 mg/day. Adjust to 2–3 mg/day",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Loflazepate in two sentences.",
      answer: "Long-acting benzodiazepine GABA-A PAM with active metabolites (desmethyloflazepate and others). Net effect: Anxiolysis with long-acting coverage.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Loflazepate.",
      answer: "Anxiety and anxiety-depression states (Japan), Psychosomatic symptoms (anxiety-driven). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Loflazepate and how you would manage it.",
      answer: "Respiratory depression with opioids: Class emergency. Management: Airway support.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Loflazepate require?",
      answer: "Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Loflazepate that separates safe prescribers from unsafe ones.",
      answer: "The travelling-patient benzo: know it exists for continuity, not for starting.",
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
      checkpoint: "You now know what Loflazepate is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Loflazepate works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Loflazepate safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Loflazepate.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Loflazepate with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Loflazepate.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Oral: within an hour; long metabolite tail.",
    ],
    ifItWorks: [
      "Continue Loflazepate at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Loflazepate (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Loflazepate follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Moderate.",
    dosing: [
      {
        indication: "Anxiety (Japan)",
        starting: "1 mg twice daily",
        titration: "Adjust to 2–3 mg/day",
        target: "1–3 mg/day",
        max: "3 mg/day",
      },
    ],
    dosageForms: ["Tablets 0.5, 1, 2 mg"],
    dosingTips: ["Class discipline: short courses, taper."],
    overdose: [
      "Overdose with Loflazepate is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Loflazepate is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Long (metabolites extend to ~60+ h)..",
      "Metabolism: Hepatic to active metabolites..",
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
      "Long-acting once-twice daily coverage in its market.",
    ],
    potentialDisadvantages: ["Class dependence risks.", "Japan-only availability."],
    primaryTargetSymptoms: ["Anxiety states", "Somatic anxiety symptoms"],
    pearls: [
      "The travelling-patient benzo: know it exists for continuity, not for starting.",
      "Geography matters: a Japanese-market benzo — encountered mainly in continuity-of-care when patients relocate.",
      "Nothing pharmacologically distinguishes it from the class long-actors; its identity is national.",
      "All benzodiazepines share the GABA-A amplification mechanism — the choice between them is pharmacokinetics: onset speed, duration, and metabolite burden.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
