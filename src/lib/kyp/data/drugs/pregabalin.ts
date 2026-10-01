import type { Drug } from "../types";

/**
 * Pregabalin — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), pregabalin monograph (book p. 103)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const pregabalin: Drug = {
  /* ---- Identity ---- */
  slug: "pregabalin",
  genericName: "Pregabalin",
  brandNames: ["Lyrica", "Pregeb / Nervup (India)"],
  drugClass: "anticonvulsant",
  drugClassLabel: "Anticonvulsant",
  drugClassFullName: "Anticonvulsant (Calcium Channel α2δ Ligand)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Anticonvulsants", "Pregabalin"],
  /* ---- Hero / summary ---- */
  tagline: "The alpha-2-delta ligand perfected — linear pharmacokinetics, GAD approval, and the fibromyalgia-pain-anxiety span.",
  summary: "Pregabalin is the alpha-2-delta calcium-channel ligand with linear (non-saturable) absorption and higher potency than gabapentin: approved for neuropathic pain, fibromyalgia, epilepsy — and uniquely for GENERALISED ANXIETY DISORDER in Europe, the only non-antidepressant GAD option. Same opioid-respiratory and misuse class warnings, Schedule V-controlled in the USA.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Pregabalin — from its molecular target (Voltage-gated calcium channels, alpha-2-delta subunit (higher-potency ligand than gabapentin)) to clinical effect.",
    "List the FDA-approved and off-label uses of Pregabalin.",
    "Predict the common and serious side effects of Pregabalin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Pregabalin.",
    "Compare Pregabalin with other anticonvulsants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Pregabalin binds the alpha-2-delta calcium-channel subunit with higher affinity and linear pharmacokinetics — gabapentin's mechanism engineered for predictability and potency.",
    molecularTarget: "Voltage-gated calcium channels, alpha-2-delta subunit (higher-potency ligand than gabapentin)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Pregabalin binds the alpha-2-delta calcium-channel subunit with higher affinity and linear pharmacokinetics — gabapentin's mechanism engineered for predictability and potency.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 6 hours (BD dosing). — see mechanism and prescriber sections.",
    halfLife: "6 hours (BD dosing).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Pregabalin",
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
      name: "Neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury)",
      status: "fda-approved",
      description: "150-600 mg/day.",
    },
    {
      name: "Fibromyalgia",
      status: "fda-approved",
      description: "The second FDA-approved fibromyalgia drug (after duloxetine).",
    },
    {
      name: "Epilepsy — adjunct (focal)",
      status: "fda-approved",
      description: "The anticonvulsant base.",
    },
    {
      name: "Generalised anxiety disorder (EU approval)",
      status: "guideline",
      description: "The only non-antidepressant with a GAD indication (EU) — fast anxiolysis (first week) is its differentiator.",
    },
    {
      name: "Neuropathic pain with anxiety",
      status: "guideline",
      description: "The dual-cover niche.",
    },
    {
      name: "Alcohol withdrawal/craving (off-label)",
      status: "off-label",
      description: "The gabapentinoid addiction role.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Pregabalin must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and dizziness",
      frequency: "very-common",
      severity: "moderate",
      description: "The commonest effects.",
      management: "Night-weighted dosing; slow titration.",
    },
    {
      name: "Weight gain and oedema",
      frequency: "common",
      severity: "moderate",
      description: "More prominent than gabapentin.",
      management: "Monitor; lifestyle.",
    },
    {
      name: "Blurred vision and dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Reassurance.",
    },
    {
      name: "Cognitive blunting",
      frequency: "common",
      severity: "mild",
      description: "Dose-related.",
      management: "Dose review.",
    },
    {
      name: "Euphoria (dose-related)",
      frequency: "uncommon",
      severity: "moderate",
      description: "The misuse substrate.",
      management: "Controlled-substance discipline.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression with opioids",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The gabapentinoid class warning.",
      management: "Counsel; monitor.",
    },
    {
      name: "Misuse and dependence",
      frequency: "uncommon",
      severity: "severe",
      description: "Euphoriant; diversion documented (Schedule V USA; abuse-observation in India).",
      management: "Prescription discipline; small quantities.",
    },
    {
      name: "Withdrawal syndrome on abrupt stop",
      frequency: "common",
      severity: "moderate",
      description: "Insomnia, nausea, anxiety, sweating — taper over 1 week+.",
      management: "Taper always.",
    },
    {
      name: "Angioedema (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Label warning.",
      management: "Stop on facial swelling.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Sedation, weight, oedema",
      frequency: "During titration and review",
      rationale: "The tolerability set.",
    },
    {
      parameter: "Misuse/diversion discipline",
      frequency: "At prescribing",
      rationale: "The controlled-substance era.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "major",
      mechanism: "Respiratory depression (class warning).",
      action: "Counsel; monitor.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "moderate",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
    {
      drug: "Thiazolidinediones",
      severity: "moderate",
      mechanism: "Additive oedema.",
      action: "Monitor.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Registry experience reassuring (as gabapentinoid class); preferred neuropathic option in pregnancy decisions with obstetrics.",
    lactation: "Excreted in milk; infant sedation monitoring.",
  },
  renalAdjustment: "Dose by CrCl (300 mg/day at 30-60; 150 mg/day at 15-30; 75 mg/day below 15) — renal dosing is the pharmacology.",
  hepaticAdjustment: "No hepatic metabolism.",
  /* ---- Education ---- */
  patientExplanation: "Pregabalin calms over-excited nerves by blocking their calcium channels: it treats nerve pain, fibromyalgia, and — in Europe — generalised anxiety, where its calming effect starts within the first week. It is built up slowly and must not be stopped suddenly. Some people notice swelling or weight gain, and it has a misuse potential, so it is prescribed with care.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Pregabalin builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The engineered successor: linear absorption and 3× potency fixed gabapentin's saturable-dose problem — pregabalin is the predictable version.",
    "The GAD trophy: the only non-antidepressant with an anxiety indication (EU) — anxiolysis within the FIRST WEEK, faster than SSRIs.",
    "The misuse turn: pregabalin's euphoriant ceiling made it the gabapentinoid of diversion — Schedule V and prescription-discipline era.",
    "Fibromyalgia's second act: pregabalin joined duloxetine as the only FDA-approved options — the pain-fatigue-sleep triad drug.",
    "Taper is non-negotiable: the withdrawal syndrome (insomnia-nausea-anxiety) is the class's quietest trap.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Pregabalin: Pregabalin binds the alpha-2-delta calcium-channel subunit with higher affinity and linear pharmacokinetics — gabapentin's mechanism engineered for predictability and potency.",
        "Uses of Pregabalin: Neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury); Fibromyalgia; Epilepsy — adjunct (focal); Generalised anxiety disorder (EU approval)",
        "Mechanism: alpha-2-delta calcium-channel ligand — LINEAR kinetics, 3× gabapentin potency.",
        "Approved: neuropathic pain, fibromyalgia, focal-epilepsy adjunct; GAD (EU).",
      ],
      practical: [
        "Prescribe Pregabalin for neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury) with dose, timing, and duration.",
        "Outline the monitoring plan: Sedation, weight, oedema (During titration and review); Misuse/diversion discipline (At prescribing)",
      ],
      longAnswer: [
        "Pregabalin: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: alpha-2-delta calcium-channel ligand — LINEAR kinetics, 3× gabapentin potency.",
        "Approved: neuropathic pain, fibromyalgia, focal-epilepsy adjunct; GAD (EU).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: alpha-2-delta calcium-channel ligand — LINEAR kinetics, 3× gabapentin potency.",
        "Approved: neuropathic pain, fibromyalgia, focal-epilepsy adjunct; GAD (EU).",
        "Fast anxiolysis (first week) — the SSRI contrast.",
        "Class warnings: opioid respiratory depression, misuse (Schedule V), withdrawal on abrupt stop.",
        "Dose 150-600 mg/day divided (BD).",
        "Renal dosing by CrCl.",
      ],
      pyqConcepts: [
        "Mechanism/target of Pregabalin",
        "Key adverse effect: Respiratory depression with opioids",
        "Dosing and titration of Pregabalin",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Pregabalin develops respiratory depression with opioids — next best step?",
        "When to choose Pregabalin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Voltage-gated calcium channels, alpha-2-delta subunit (higher-potency ligand than gabapentin)",
        "Most common side effects: Sedation and dizziness, Weight gain and oedema, Blurred vision and dry mouth",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The engineered successor: linear absorption and 3× potency fixed gabapentin's saturable-dose problem — pregabalin is the predictable version.",
        "The GAD trophy: the only non-antidepressant with an anxiety indication (EU) — anxiolysis within the FIRST WEEK, faster than SSRIs.",
        "The misuse turn: pregabalin's euphoriant ceiling made it the gabapentinoid of diversion — Schedule V and prescription-discipline era.",
        "Fibromyalgia's second act: pregabalin joined duloxetine as the only FDA-approved options — the pain-fatigue-sleep triad drug.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: alpha-2-delta calcium-channel ligand — LINEAR kinetics, 3× gabapentin potency.",
    "Approved: neuropathic pain, fibromyalgia, focal-epilepsy adjunct; GAD (EU).",
    "Fast anxiolysis (first week) — the SSRI contrast.",
    "Class warnings: opioid respiratory depression, misuse (Schedule V), withdrawal on abrupt stop.",
    "Dose 150-600 mg/day divided (BD).",
    "Renal dosing by CrCl.",
    "Weight gain and oedema more prominent than gabapentin.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury)",
      presentation: "A patient presenting with neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury), started on Pregabalin.",
      history: "A adult patient presents with a neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury). Differentials are considered and excluded clinically.",
      rationale: "Pregabalin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Anticonvulsant) with strong evidence in this condition.",
      management: "Started at 75 mg twice daily, titrated to 150-300 mg bd with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Pregabalin takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Anticonvulsant comparison — choosing within the class",
      primaryDrug: "Pregabalin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Voltage-gated calcium channels, alpha-2-delta subunit (higher-potency ligand than gabapentin)",
          comparisons: [
            {
              drug: "Gabapentin",
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
          primaryValue: "6 hours (BD dosing).",
          comparisons: [
            {
              drug: "Gabapentin",
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
              drug: "Gabapentin",
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
              drug: "Gabapentin",
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
          primaryValue: "The GAD-approved gabapentinoid — pain, fibromyalgia, anxiety",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "The interaction-clean pain-augmentation agent — anxiety and craving off-label",
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
      description: "Pregabalin reaches peak plasma concentration and begins acting at its molecular target (Voltage-gated calcium channels, alpha-2-delta subunit (higher-potency ligand than gabapentin)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and dizziness, weight gain and oedema, blurred vision and dry mouth). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Pain benefit 1-2 weeks; anxiolysis within days (GAD trials).)",
      title: "Therapeutic effect builds",
      description: "Pain benefit 1-2 weeks; anxiolysis within days (GAD trials). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Pregabalin is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Pregabalin take to work?",
      answer: "Pain benefit 1-2 weeks; anxiolysis within days (GAD trials).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Pregabalin?",
      answer: "The most frequently reported effects are: Sedation and dizziness, Weight gain and oedema, Blurred vision and dry mouth, Cognitive blunting, Euphoria (dose-related). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Pregabalin suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Pregabalin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Pregabalin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Pregabalin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Pregabalin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), pregabalin monograph, p. 103",
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
        source: "FDA Prescribing Information for Lyrica (Pregabalin)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for pregabalin — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Pregabalin",
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
      name: "Gabapentin",
      slug: "gabapentin",
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
      name: "Neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury)",
      relationship: "primary",
    },
    {
      name: "Fibromyalgia",
      relationship: "primary",
    },
    {
      name: "Epilepsy — adjunct (focal)",
      relationship: "primary",
    },
    {
      name: "Generalised anxiety disorder (EU approval)",
      relationship: "alternative",
    },
    {
      name: "Neuropathic pain with anxiety",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Pregabalin",
      type: "drug",
      href: "/drugs/pregabalin",
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
      label: "Voltage-gated calcium channels, alpha-2-delta subunit (higher-potency ligand than gabapentin)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Fibromyalgia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Epilepsy — adjunct (focal)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Respiratory depression with opioids",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Misuse and dependence",
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
      label: "Patient Guide — Pregabalin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The alpha-2-delta ligand perfected — linear pharmacokinetics, GAD approval, and the fibromyalgia-pain-anxiety span.",
    summary: "Pregabalin is a prescription medicine used to treat neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Pregabalin calms over-excited nerves by blocking their calcium channels: it treats nerve pain, fibromyalgia, and — in Europe — generalised anxiety, where its calming effect starts within the first week. It is built up slowly and must not be stopped suddenly. Some people notice swelling or weight gain, and it has a misuse potential, so it is prescribed with care.",
    sideEffects: "The most common side effects are: sedation and dizziness, weight gain and oedema, blurred vision and dry mouth, cognitive blunting, euphoria (dose-related). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression with opioids and Misuse and dependence. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: sedation, weight, oedema (during titration and review); misuse/diversion discipline (at prescribing). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol and CNS depressants, Thiazolidinediones. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Pregeb",
        manufacturer: "Intas",
        strengths: "75, 150 mg",
      },
      {
        name: "Nervup / Pregabalin generic",
        manufacturer: "various",
        strengths: "75-300 mg",
      },
    ],
    typicalDoses: "75 mg bd → 150-300 mg bd.",
    prescribingScenarios: [
      "Neuropathic pain clinics nationwide.",
      "Anxiety augmentation where SSRI onset or tolerance fails.",
      "Fibromyalgia co-management.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Weight, oedema, sedation; misuse discipline.",
    patientCounselling: [
      "Build up slowly; never stop suddenly.",
      "Report swelling.",
      "Misuse potential — take only as prescribed.",
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
    note: "Generic pregabalin in some kendras.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Anticonvulsants",
    members: [
      {
        name: "Pregabalin",
        slug: "pregabalin",
        relationship: "This guide",
        distinguishing: "The GAD-approved gabapentinoid — pain, fibromyalgia, anxiety",
      },
      {
        name: "Gabapentin",
        slug: "gabapentin",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The interaction-clean pain-augmentation agent — anxiety and craving off-label",
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
      question: "Which molecular target does Pregabalin primarily act on?",
      options: [
        "Voltage-gated calcium channels, alpha-2-delta subunit (higher-potency ligand than gabapentin)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Pregabalin acts primarily at Voltage-gated calcium channels, alpha-2-delta subunit (higher-potency ligand than gabapentin). Pregabalin binds the alpha-2-delta calcium-channel subunit with higher affinity and linear pharmacokinetics — gabapentin's mechanism engineered for predictability and potency.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Pregabalin?",
      options: ["Sedation and dizziness", "Weight gain and oedema", "Blurred vision and dry mouth", "Cognitive blunting"],
      correctIndex: 0,
      explanation: "Sedation and dizziness — The commonest effects.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Pregabalin for neuropathic pain / fibromyalgia?",
      options: ["150-300 mg bd", "600 mg/day", "150-300 mg bd (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For neuropathic pain / fibromyalgia: start 75 mg twice daily, target 150-300 mg bd, maximum 600 mg/day. Increase to 150 mg bd within a week; to 300 mg bd if needed",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Pregabalin in two sentences.",
      answer: "Pregabalin binds the alpha-2-delta calcium-channel subunit with higher affinity and linear pharmacokinetics — gabapentin's mechanism engineered for predictability and potency. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Pregabalin.",
      answer: "Neuropathic pain (diabetic neuropathy, postherpetic neuralgia, spinal-cord injury), Fibromyalgia, Epilepsy — adjunct (focal), Generalised anxiety disorder (EU approval). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Pregabalin and how you would manage it.",
      answer: "Respiratory depression with opioids: The gabapentinoid class warning. Management: Counsel; monitor.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Pregabalin require?",
      answer: "Sedation, weight, oedema (During titration and review); Misuse/diversion discipline (At prescribing)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Pregabalin that separates safe prescribers from unsafe ones.",
      answer: "The engineered successor: linear absorption and 3× potency fixed gabapentin's saturable-dose problem — pregabalin is the predictable version.",
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
      checkpoint: "You now know what Pregabalin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Pregabalin works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Pregabalin safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Pregabalin.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Pregabalin with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Pregabalin.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Pain benefit 1-2 weeks; anxiolysis within days (GAD trials).",
    ],
    ifItWorks: [
      "Continue Pregabalin at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Pregabalin (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Pregabalin follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Neuropathic pain / fibromyalgia",
        starting: "75 mg twice daily",
        titration: "Increase to 150 mg bd within a week; to 300 mg bd if needed",
        target: "150-300 mg bd",
        max: "600 mg/day",
      },
      {
        indication: "GAD (EU)",
        starting: "75 mg twice daily",
        titration: "Increase weekly",
        target: "150-300 mg/day",
        max: "600 mg/day",
      },
    ],
    dosageForms: ["Capsules 25-300 mg", "Oral solution"],
    dosingTips: [
      "Night-weighted BD dosing.",
      "Taper over 1+ week when stopping.",
      "Fast anxiolysis is the GAD selling point (EU).",
    ],
    overdose: [
      "Overdose with Pregabalin is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Pregabalin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 6 hours (BD dosing)..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["Linear, predictable pharmacokinetics.", "GAD indication (EU) with fast onset.", "Pain + anxiety dual cover."],
    potentialDisadvantages: ["Misuse era and Schedule V.", "Weight gain/oedema.", "Withdrawal syndrome.", "Opioid-combination warning."],
    primaryTargetSymptoms: ["Neuropathic pain", "Fibromyalgia", "Generalised anxiety (EU indication)", "Alcohol withdrawal (off-label)"],
    pearls: [
      "The engineered successor: linear absorption and 3× potency fixed gabapentin's saturable-dose problem — pregabalin is the predictable version.",
      "The GAD trophy: the only non-antidepressant with an anxiety indication (EU) — anxiolysis within the FIRST WEEK, faster than SSRIs.",
      "The misuse turn: pregabalin's euphoriant ceiling made it the gabapentinoid of diversion — Schedule V and prescription-discipline era.",
      "Fibromyalgia's second act: pregabalin joined duloxetine as the only FDA-approved options — the pain-fatigue-sleep triad drug.",
      "Taper is non-negotiable: the withdrawal syndrome (insomnia-nausea-anxiety) is the class's quietest trap.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
