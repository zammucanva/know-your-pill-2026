import type { Drug } from "../types";

/**
 * Gabapentin — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), gabapentin monograph (book p. 52)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const gabapentin: Drug = {
  /* ---- Identity ---- */
  slug: "gabapentin",
  genericName: "Gabapentin",
  brandNames: ["Neurontin", "Gabapin (India)"],
  drugClass: "anticonvulsant",
  drugClassLabel: "Anticonvulsant",
  drugClassFullName: "Anticonvulsant (Calcium Channel α2δ Ligand)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Anticonvulsants", "Gabapentin"],
  /* ---- Hero / summary ---- */
  tagline: "The alpha-2-delta calcium-channel ligand — pain, anxiety-augmentation, and alcohol-craving off-label life.",
  summary: "Gabapentin is a GABA-structural analogue that binds the alpha-2-delta subunit of voltage-gated calcium channels, dampening excitatory neurotransmitter release: approved for epilepsy and neuropathic pain (postherpetic neuralgia), with psychiatric augmentation roles in anxiety, alcohol withdrawal/craving, and insomnia. Renal-only excretion and negligible interactions define its pharmacology.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Gabapentin — from its molecular target (Voltage-gated calcium channels, alpha-2-delta subunit (ligand — reduces calcium influx and transmitter release)) to clinical effect.",
    "List the FDA-approved and off-label uses of Gabapentin.",
    "Predict the common and serious side effects of Gabapentin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Gabapentin.",
    "Compare Gabapentin with other anticonvulsants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Gabapentin binds the alpha-2-delta calcium-channel subunit, reducing preterminal calcium influx and excitatory transmitter release — despite its GABA-mimicking name.",
    molecularTarget: "Voltage-gated calcium channels, alpha-2-delta subunit (ligand — reduces calcium influx and transmitter release)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Gabapentin binds the alpha-2-delta calcium-channel subunit, reducing preterminal calcium influx and excitatory transmitter release — despite its GABA-mimicking name.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 5-7 hours (TID dosing). — see mechanism and prescriber sections.",
    halfLife: "5-7 hours (TID dosing).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Gabapentin",
        sublabel: "Anticonvulsant",
        variant: "inhibit",
      },
      {
        id: "na",
        label: "Voltage-gated Na⁺ / Ca²⁺ channels",
        sublabel: "Neuronal firing",
        variant: "target",
      },
      {
        id: "neuron",
        label: "Hyperexcitable neurons",
        sublabel: "Pathological firing",
        variant: "input",
      },
      {
        id: "effect",
        label: "Stabilised firing",
        sublabel: "Seizure / pain / mood instability reduced",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "na",
        label: "modulates",
        type: "inhibit",
      },
      {
        from: "neuron",
        to: "na",
        label: "fires through",
      },
      {
        from: "na",
        to: "effect",
        label: "stabilised",
      },
    ],
    caption: "Reducing pathological neuronal firing — the shared mechanistic logic of anticonvulsants across epilepsy, neuropathic pain, and mood destabilisation.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["GABA (nominal)", "Glutamate"],
  receptors: [
    "Alpha-2-delta calcium-channel subunit (ligand)",
  ],
  brainRegionIds: ["prefrontal-cortex", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Postherpetic neuralgia",
      status: "fda-approved",
      description: "The signature neuropathic pain indication.",
    },
    {
      name: "Epilepsy — adjunct for focal seizures",
      status: "fda-approved",
      description: "The anticonvulsant base indication.",
    },
    {
      name: "Anxiety disorders (adjunct, off-label)",
      status: "off-label",
      description: "Widely used augmentation for social and generalised anxiety.",
    },
    {
      name: "Alcohol withdrawal and craving (off-label)",
      status: "off-label",
      description: "The withdrawal-craving niche in addiction programmes.",
    },
    {
      name: "Insomnia (off-label)",
      status: "off-label",
      description: "Sedating augmentation.",
    },
    {
      name: "Bipolar disorder (adjunct, weak evidence)",
      status: "off-label",
      description: "Historic augmentation with limited evidence.",
    },
    {
      name: "Restless legs syndrome",
      status: "guideline",
      description: "The alpha-2-delta class role.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Gabapentin must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and dizziness",
      frequency: "very-common",
      severity: "mild",
      description: "The commonest effects — dose-titration dependent.",
      management: "Slow titration; night-weighted dosing.",
    },
    {
      name: "Ataxia and unsteadiness",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related.",
      management: "Dose review.",
    },
    {
      name: "Fatigue and nystagmus",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Reassurance.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "moderate",
      description: "Appetite effect in a minority.",
      management: "Monitor.",
    },
    {
      name: "Peripheral oedema",
      frequency: "uncommon",
      severity: "mild",
      description: "Dose-related.",
      management: "Reassure; review dose.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression with opioids (FDA warning)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Gabapentinoids + opioids: respiratory-depression deaths — the 2019 class warning.",
      management: "Counsel; avoid combinations where possible.",
    },
    {
      name: "Misuse potential (gabapentinoid class)",
      frequency: "uncommon",
      severity: "severe",
      description: "Euphoriant at high doses; diversion documented — controlled in some jurisdictions.",
      management: "Prescription discipline.",
    },
    {
      name: "Withdrawal seizures on abrupt stop",
      frequency: "rare",
      severity: "severe",
      description: "Despite not being a classic anticonvulsant, abrupt cessation risks seizures.",
      management: "Taper over a week+.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Sedation and ataxia review",
      frequency: "During titration",
      rationale: "The dose-limiting effects.",
    },
    {
      parameter: "Opioid co-prescription audit",
      frequency: "At prescribing",
      rationale: "The class warning discipline.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "major",
      mechanism: "Respiratory depression (class warning).",
      action: "Counsel; monitor; avoid if possible.",
    },
    {
      drug: "Antacids (aluminium/magnesium)",
      severity: "minor",
      mechanism: "Halve gabapentin absorption — separate by 2 h.",
      action: "Timing counselling.",
    },
    {
      drug: "Cimetidine",
      severity: "minor",
      mechanism: "Old-data minor interaction.",
      action: "—",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Gabapentin is among the preferred anticonvulsants/neuropathic agents in pregnancy (registry experience, no malformation signal) — decisions with obstetrics.",
    lactation: "Excreted in milk; usually compatible with infant monitoring (sedation).",
  },
  renalAdjustment: "Dose by CrCl: 400-700 mg/day at CrCl 30-60; 200-700 mg every other day below 15 — renal dosing IS the pharmacology.",
  hepaticAdjustment: "No hepatic metabolism — irrelevant.",
  /* ---- Education ---- */
  patientExplanation: "Gabapentin is a medicine for nerve pain and seizures that also calms over-excited nerves in anxiety and alcohol withdrawal. Despite its name it does not act on GABA — it steadies overactive nerve endings by blocking their calcium channels. It is built up slowly, often causes drowsiness at first, and leaves the body entirely through the kidneys.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Gabapentin builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The name lies: gabapentin neither binds GABA receptors nor blocks GABA uptake — alpha-2-delta calcium channels are the whole story.",
    "The saturable-absorption quirk: higher doses absorb proportionally LESS (saturable transport) — spread dosing rather than mega-dosing.",
    "The opioid warning era: gabapentinoids + opioids = respiratory deaths — the 2019 class warning changed co-prescribing culture.",
    "Renal-only dosing: no hepatic metabolism, no interactions — the dose follows the creatinine clearance.",
    "The Indian formulary pair: gabapentin and pregabalin cover neuropathic pain clinics nationwide.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Gabapentin: Gabapentin binds the alpha-2-delta calcium-channel subunit, reducing preterminal calcium influx and excitatory transmitter release — despite its GABA-mimicking name.",
        "Uses of Gabapentin: Postherpetic neuralgia; Epilepsy — adjunct for focal seizures; Anxiety disorders (adjunct, off-label); Alcohol withdrawal and craving (off-label)",
        "Mechanism: alpha-2-delta CALCIUM-CHANNEL ligand (not GABA-ergic despite the name).",
        "Approved: postherpetic neuralgia + focal-epilepsy adjunct.",
      ],
      practical: [
        "Prescribe Gabapentin for postherpetic neuralgia with dose, timing, and duration.",
        "Outline the monitoring plan: Sedation and ataxia review (During titration); Opioid co-prescription audit (At prescribing)",
      ],
      longAnswer: [
        "Gabapentin: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: alpha-2-delta CALCIUM-CHANNEL ligand (not GABA-ergic despite the name).",
        "Approved: postherpetic neuralgia + focal-epilepsy adjunct.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: alpha-2-delta CALCIUM-CHANNEL ligand (not GABA-ergic despite the name).",
        "Approved: postherpetic neuralgia + focal-epilepsy adjunct.",
        "Psychiatric off-label: anxiety augmentation, alcohol withdrawal/craving, insomnia.",
        "Renal excretion only — no interactions; dose by CrCl.",
        "Saturable absorption — TID dosing beats mega-doses.",
        "Class warnings: opioid respiratory depression; misuse potential.",
      ],
      pyqConcepts: [
        "Mechanism/target of Gabapentin",
        "Key adverse effect: Respiratory depression with opioids (FDA warning)",
        "Dosing and titration of Gabapentin",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Gabapentin develops respiratory depression with opioids (fda warning) — next best step?",
        "When to choose Gabapentin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Voltage-gated calcium channels, alpha-2-delta subunit (ligand — reduces calcium influx and transmitter release)",
        "Most common side effects: Sedation and dizziness, Ataxia and unsteadiness, Fatigue and nystagmus",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The name lies: gabapentin neither binds GABA receptors nor blocks GABA uptake — alpha-2-delta calcium channels are the whole story.",
        "The saturable-absorption quirk: higher doses absorb proportionally LESS (saturable transport) — spread dosing rather than mega-dosing.",
        "The opioid warning era: gabapentinoids + opioids = respiratory deaths — the 2019 class warning changed co-prescribing culture.",
        "Renal-only dosing: no hepatic metabolism, no interactions — the dose follows the creatinine clearance.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: alpha-2-delta CALCIUM-CHANNEL ligand (not GABA-ergic despite the name).",
    "Approved: postherpetic neuralgia + focal-epilepsy adjunct.",
    "Psychiatric off-label: anxiety augmentation, alcohol withdrawal/craving, insomnia.",
    "Renal excretion only — no interactions; dose by CrCl.",
    "Saturable absorption — TID dosing beats mega-doses.",
    "Class warnings: opioid respiratory depression; misuse potential.",
    "Dose 1800-3600 mg/day (pain).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — postherpetic neuralgia",
      presentation: "A patient presenting with postherpetic neuralgia, started on Gabapentin.",
      history: "A adult patient presents with a postherpetic neuralgia picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with postherpetic neuralgia; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Postherpetic neuralgia. Differentials are considered and excluded clinically.",
      rationale: "Gabapentin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Anticonvulsant) with strong evidence in this condition.",
      management: "Started at 300 mg at bedtime day 1; 300 mg bd day 2; 300 mg tds day 3, titrated to 1800-3600 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Gabapentin takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Anticonvulsant comparison — choosing within the class",
      primaryDrug: "Gabapentin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Voltage-gated calcium channels, alpha-2-delta subunit (ligand — reduces calcium influx and transmitter release)",
          comparisons: [
            {
              drug: "Pregabalin",
              value: "See full guide",
            },
            {
              drug: "Topiramate",
              value: "See full guide",
            },
            {
              drug: "Levetiracetam",
              value: "See full guide",
            },
            {
              drug: "Tiagabine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "5-7 hours (TID dosing).",
          comparisons: [
            {
              drug: "Pregabalin",
              value: "—",
            },
            {
              drug: "Topiramate",
              value: "—",
            },
            {
              drug: "Levetiracetam",
              value: "—",
            },
            {
              drug: "Tiagabine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Pregabalin",
              value: "Agent-specific.",
            },
            {
              drug: "Topiramate",
              value: "Agent-specific.",
            },
            {
              drug: "Levetiracetam",
              value: "Agent-specific.",
            },
            {
              drug: "Tiagabine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Pregabalin",
              value: "Agent-specific.",
            },
            {
              drug: "Topiramate",
              value: "Agent-specific.",
            },
            {
              drug: "Levetiracetam",
              value: "Agent-specific.",
            },
            {
              drug: "Tiagabine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The interaction-clean pain-augmentation agent — anxiety and craving off-label",
          comparisons: [
            {
              drug: "Pregabalin",
              value: "The GAD-approved gabapentinoid — pain, fibromyalgia, anxiety",
            },
            {
              drug: "Topiramate",
              value: "The weight-losing multi-mechanism stabiliser — craving and appetite",
            },
            {
              drug: "Levetiracetam",
              value: "The behaviourally-noisy SV2A anticonvulsant",
            },
            {
              drug: "Tiagabine",
              value: "The GABA-reuptake blocker — mechanism elegance, clinical footnote",
            },
          ],
        },
      ],
      takeaway: "All anticonvulsants share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Gabapentin reaches peak plasma concentration and begins acting at its molecular target (Voltage-gated calcium channels, alpha-2-delta subunit (ligand — reduces calcium influx and transmitter release)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and dizziness, ataxia and unsteadiness, fatigue and nystagmus). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Pain/anxiety benefit over 1-2 weeks of titration.)",
      title: "Therapeutic effect builds",
      description: "Pain/anxiety benefit over 1-2 weeks of titration. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Gabapentin is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Gabapentin take to work?",
      answer: "Pain/anxiety benefit over 1-2 weeks of titration.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Gabapentin?",
      answer: "The most frequently reported effects are: Sedation and dizziness, Ataxia and unsteadiness, Fatigue and nystagmus, Weight gain, Peripheral oedema. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Gabapentin suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Gabapentin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Gabapentin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Gabapentin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Gabapentin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG185 (Bipolar Disorder); NICE CG173 (Neuropathic Pain)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), gabapentin monograph, p. 52",
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
        source: "FDA Prescribing Information for Neurontin (Gabapentin)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for gabapentin — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Gabapentin",
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
      name: "Pregabalin",
      slug: "pregabalin",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Topiramate",
      slug: "topiramate",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Levetiracetam",
      slug: "levetiracetam",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Tiagabine",
      slug: "tiagabine",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Zonisamide",
      slug: "zonisamide",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Valproate",
      slug: "valproate",
      drugClass: "Mood Stabiliser",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Postherpetic neuralgia",
      relationship: "primary",
    },
    {
      name: "Epilepsy — adjunct for focal seizures",
      relationship: "primary",
    },
    {
      name: "Anxiety disorders (adjunct, off-label)",
      relationship: "off-label",
    },
    {
      name: "Alcohol withdrawal and craving (off-label)",
      relationship: "off-label",
    },
    {
      name: "Insomnia (off-label)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Gabapentin",
      type: "drug",
      href: "/drugs/gabapentin",
      note: "The drug you're reading about",
    },
    {
      label: "Anticonvulsant",
      type: "class",
      href: "#mechanism",
      note: "Anticonvulsant (Calcium Channel α2δ Ligand)",
    },
    {
      label: "GABA (nominal)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Glutamate",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Voltage-gated calcium channels, alpha-2-delta subunit (ligand — reduces calcium influx and transmitter release)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Postherpetic neuralgia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Epilepsy — adjunct for focal seizures",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Anxiety disorders (adjunct, off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Respiratory depression with opioids (FDA warning)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Misuse potential (gabapentinoid class)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and dizziness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Gabapentin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The alpha-2-delta calcium-channel ligand — pain, anxiety-augmentation, and alcohol-craving off-label life.",
    summary: "Gabapentin is a prescription medicine used to treat postherpetic neuralgia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Gabapentin is a medicine for nerve pain and seizures that also calms over-excited nerves in anxiety and alcohol withdrawal. Despite its name it does not act on GABA — it steadies overactive nerve endings by blocking their calcium channels. It is built up slowly, often causes drowsiness at first, and leaves the body entirely through the kidneys.",
    sideEffects: "The most common side effects are: sedation and dizziness, ataxia and unsteadiness, fatigue and nystagmus, weight gain, peripheral oedema. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression with opioids (FDA warning) and Misuse potential (gabapentinoid class). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: sedation and ataxia review (during titration); opioid co-prescription audit (at prescribing). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Antacids (aluminium/magnesium), Cimetidine. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Gabapin",
        manufacturer: "Intas",
        strengths: "100-800 mg",
      },
      {
        name: "Gabapin NT (combinations)",
        manufacturer: "Intas",
        strengths: "gabapentin+nortriptyline",
      },
      {
        name: "Gabantin",
        manufacturer: "Sun",
        strengths: "100-800 mg",
      },
    ],
    typicalDoses: "300 mg tds → 1800-3600 mg.",
    prescribingScenarios: [
      "Neuropathic pain clinics.",
      "Alcohol-withdrawal augmentation.",
      "Anxiety augmentation in private practice.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Sedation review; renal function for dosing.",
    patientCounselling: ["Build up slowly; drowsiness first.", "Separate antacids.", "Never stop suddenly."],
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
    familyName: "Anticonvulsants",
    members: [
      {
        name: "Gabapentin",
        slug: "gabapentin",
        relationship: "This guide",
        distinguishing: "The interaction-clean pain-augmentation agent — anxiety and craving off-label",
      },
      {
        name: "Pregabalin",
        slug: "pregabalin",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The GAD-approved gabapentinoid — pain, fibromyalgia, anxiety",
      },
      {
        name: "Topiramate",
        slug: "topiramate",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The weight-losing multi-mechanism stabiliser — craving and appetite",
      },
      {
        name: "Levetiracetam",
        slug: "levetiracetam",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The behaviourally-noisy SV2A anticonvulsant",
      },
      {
        name: "Tiagabine",
        slug: "tiagabine",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The GABA-reuptake blocker — mechanism elegance, clinical footnote",
      },
      {
        name: "Zonisamide",
        slug: "zonisamide",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The second weight-loser — topiramate's sibling",
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
      question: "Which molecular target does Gabapentin primarily act on?",
      options: [
        "Voltage-gated calcium channels, alpha-2-delta subunit (ligand — reduces calcium influx and transmitter release)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Gabapentin acts primarily at Voltage-gated calcium channels, alpha-2-delta subunit (ligand — reduces calcium influx and transmitter release). Gabapentin binds the alpha-2-delta calcium-channel subunit, reducing preterminal calcium influx and excitatory transmitter release — despite its GABA-mimicking name.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Gabapentin?",
      options: ["Sedation and dizziness", "Ataxia and unsteadiness", "Fatigue and nystagmus", "Weight gain"],
      correctIndex: 0,
      explanation: "Sedation and dizziness — The commonest effects — dose-titration dependent.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Gabapentin for postherpetic neuralgia?",
      options: ["1800-3600 mg/day", "3600 mg/day", "1800-3600 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For postherpetic neuralgia: start 300 mg at bedtime day 1; 300 mg bd day 2; 300 mg tds day 3, target 1800-3600 mg/day, maximum 3600 mg/day. Increase to 1800-3600 mg/day as tolerated",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Gabapentin in two sentences.",
      answer: "Gabapentin binds the alpha-2-delta calcium-channel subunit, reducing preterminal calcium influx and excitatory transmitter release — despite its GABA-mimicking name. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Gabapentin.",
      answer: "Postherpetic neuralgia, Epilepsy — adjunct for focal seizures, Anxiety disorders (adjunct, off-label), Alcohol withdrawal and craving (off-label). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Gabapentin and how you would manage it.",
      answer: "Respiratory depression with opioids (FDA warning): Gabapentinoids + opioids: respiratory-depression deaths — the 2019 class warning. Management: Counsel; avoid combinations where possible.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Gabapentin require?",
      answer: "Sedation and ataxia review (During titration); Opioid co-prescription audit (At prescribing)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Gabapentin that separates safe prescribers from unsafe ones.",
      answer: "The name lies: gabapentin neither binds GABA receptors nor blocks GABA uptake — alpha-2-delta calcium channels are the whole story.",
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
      checkpoint: "You now know what Gabapentin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Gabapentin works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Gabapentin safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Gabapentin.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Gabapentin with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Gabapentin.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Pain/anxiety benefit over 1-2 weeks of titration.",
    ],
    ifItWorks: [
      "Continue Gabapentin at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Gabapentin (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Gabapentin follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Postherpetic neuralgia",
        starting: "300 mg at bedtime day 1; 300 mg bd day 2; 300 mg tds day 3",
        titration: "Increase to 1800-3600 mg/day as tolerated",
        target: "1800-3600 mg/day",
        max: "3600 mg/day",
      },
      {
        indication: "Anxiety/withdrawal augmentation",
        starting: "100-300 mg at night",
        titration: "Increase by 100-300 mg every few days",
        target: "600-1800 mg/day divided",
        max: "2400 mg/day",
      },
    ],
    dosageForms: ["Capsules 100, 300, 400 mg", "Tablets 600, 800 mg", "Solution"],
    dosingTips: ["TID anchoring to meals.", "Separate from antacids by 2 hours.", "Taper — never stop abruptly."],
    overdose: [
      "Overdose with Gabapentin is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Gabapentin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 5-7 hours (TID dosing)..", "Metabolism: Hepatic.."],
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
      "No interactions; renal-only pharmacology.",
      "Pain + anxiety + craving coverage.",
      "Pregnancy-friendlier neuropathic option.",
    ],
    potentialDisadvantages: [
      "Saturable absorption complicates dosing.",
      "Sedation/ataxia burden.",
      "Misuse era + opioid warning.",
      "Modest psychiatric evidence.",
    ],
    primaryTargetSymptoms: ["Neuropathic pain", "Anxiety augmentation", "Alcohol withdrawal/craving (off-label)"],
    pearls: [
      "The name lies: gabapentin neither binds GABA receptors nor blocks GABA uptake — alpha-2-delta calcium channels are the whole story.",
      "The saturable-absorption quirk: higher doses absorb proportionally LESS (saturable transport) — spread dosing rather than mega-dosing.",
      "The opioid warning era: gabapentinoids + opioids = respiratory deaths — the 2019 class warning changed co-prescribing culture.",
      "Renal-only dosing: no hepatic metabolism, no interactions — the dose follows the creatinine clearance.",
      "The Indian formulary pair: gabapentin and pregabalin cover neuropathic pain clinics nationwide.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
