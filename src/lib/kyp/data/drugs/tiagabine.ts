import type { Drug } from "../types";

/**
 * Tiagabine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), tiagabine monograph (book p. 122)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const tiagabine: Drug = {
  /* ---- Identity ---- */
  slug: "tiagabine",
  genericName: "Tiagabine",
  brandNames: ["Gabitril"],
  drugClass: "anticonvulsant",
  drugClassLabel: "Anticonvulsant",
  drugClassFullName: "Anticonvulsant (GAT-1 Inhibitor)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Anticonvulsants", "Tiagabine"],
  /* ---- Hero / summary ---- */
  tagline: "The GAT-1 reuptake blocker — GABA-ergic precision that never found its psychiatric niche.",
  summary: "Tiagabine is the selective GAT-1 (GABA transporter) inhibitor: it raises synaptic GABA by blocking reuptake — an elegant mechanism that earned epilepsy approval as adjunct therapy but failed psychiatric trials (anxiety, insomnia) and carries seizure-alert cautions. A Stahl-appendix completeness drug whose mechanism teaching outlives its prescribing.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Tiagabine — from its molecular target (GAT-1 GABA transporter (selective inhibition — blocks GABA reuptake)) to clinical effect.",
    "List the FDA-approved and off-label uses of Tiagabine.",
    "Predict the common and serious side effects of Tiagabine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Tiagabine.",
    "Compare Tiagabine with other anticonvulsants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Tiagabine selectively blocks the GAT-1 GABA transporter, raising synaptic GABA concentration — the GABA-ergic reuptake-blocker concept.",
    molecularTarget: "GAT-1 GABA transporter (selective inhibition — blocks GABA reuptake)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Tiagabine selectively blocks the GAT-1 GABA transporter, raising synaptic GABA concentration — the GABA-ergic reuptake-blocker concept.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 7-9 hours (with enzyme-inducer co-therapy shorter). — see mechanism and prescriber sections.",
    halfLife: "7-9 hours (with enzyme-inducer co-therapy shorter).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Tiagabine",
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
  neurotransmitters: ["GABA"],
  receptors: ["GAT-1 GABA transporter (inhibited)"],
  brainRegionIds: ["prefrontal-cortex", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Epilepsy — adjunct for focal seizures",
      status: "fda-approved",
      description: "The approved base.",
    },
    {
      name: "Anxiety and insomnia (failed/unapproved)",
      status: "off-label",
      description: "Psychiatric trials failed — the off-label uses are historic.",
    },
    {
      name: "Bipolar/catalepsy (no evidence)",
      status: "off-label",
      description: "No evidence niche.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Tiagabine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dizziness and sedation",
      frequency: "common",
      severity: "moderate",
      description: "The GABA-ergic texture.",
      management: "Dose with food; titration.",
    },
    {
      name: "Tremor and concentration difficulty",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Reassurance.",
    },
    {
      name: "Nausea and abdominal pain",
      frequency: "common",
      severity: "mild",
      description: "Take with food.",
      management: "With food.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Seizures (including in non-epileptics — the label warning)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Paradoxical seizure induction, including status epilepticus reports in non-epileptic psychiatric use — the FDA alert that ended psychiatric exploration.",
      management: "Dose ceilings; avoid in non-epilepsy off-label use.",
    },
    {
      name: "Cognitive blunting",
      frequency: "uncommon",
      severity: "moderate",
      description: "Dose-related.",
      management: "Dose review.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Seizure-alert counselling",
      frequency: "At initiation",
      rationale: "The label warning discipline.",
    },
  ],
  interactions: [
    {
      drug: "Enzyme inducers (carbamazepine, phenytoin)",
      severity: "major",
      mechanism: "Halve tiagabine levels.",
      action: "Dose adjustment.",
    },
    {
      drug: "Other sedatives",
      severity: "moderate",
      mechanism: "Additive GABA-ergic load.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; standard anticonvulsant pregnancy caution.",
    lactation: "Excreted in milk in small amounts; caution.",
  },
  renalAdjustment: "No adjustment.",
  hepaticAdjustment: "3A4 metabolism; reduce dose in hepatic impairment and with inducers co-prescribed.",
  /* ---- Education ---- */
  patientExplanation: "Tiagabine is an anti-seizure medicine that works by blocking the recycling of GABA, the brain's main calming chemical. It is used only as an add-on for focal epilepsy: trials in anxiety and sleep problems did not succeed, and it can paradoxically cause seizures in people without epilepsy if misused — so it is prescribed strictly for its approved purpose.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Tiagabine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The mechanism lesson: blocking GABA reuptake should calm the brain — psychiatric trials said no, and the seizure alert ended the conversation.",
    "The paradox: an anticonvulsant that causes seizures in non-epileptics at psychiatric doses — the FDA alert that confined it to epilepsy.",
    "The completeness entry: know tiagabine for GAT-1 pharmacology, not for prescribing.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Tiagabine: Tiagabine selectively blocks the GAT-1 GABA transporter, raising synaptic GABA concentration — the GABA-ergic reuptake-blocker concept.",
        "Uses of Tiagabine: Epilepsy — adjunct for focal seizures; Anxiety and insomnia (failed/unapproved); Bipolar/catalepsy (no evidence)",
        "Mechanism: GAT-1 GABA-TRANSPORTER inhibition (selective) — the GABA-reuptake blocker.",
        "Approved: focal-epilepsy adjunct only.",
      ],
      practical: [
        "Prescribe Tiagabine for epilepsy — adjunct for focal seizures with dose, timing, and duration.",
        "Outline the monitoring plan: Seizure-alert counselling (At initiation)",
      ],
      longAnswer: [
        "Tiagabine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: GAT-1 GABA-TRANSPORTER inhibition (selective) — the GABA-reuptake blocker.",
        "Approved: focal-epilepsy adjunct only.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: GAT-1 GABA-TRANSPORTER inhibition (selective) — the GABA-reuptake blocker.",
        "Approved: focal-epilepsy adjunct only.",
        "Psychiatric trials failed (anxiety, insomnia) — off-label use historic.",
        "FDA seizure alert: seizures/status in non-epileptics at psychiatric doses.",
        "Dose 32-56 mg/day with food; slow titration.",
        "Teaching value > prescribing value.",
      ],
      pyqConcepts: [
        "Mechanism/target of Tiagabine",
        "Key adverse effect: Seizures (including in non-epileptics — the label warning)",
        "Dosing and titration of Tiagabine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Tiagabine develops seizures (including in non-epileptics — the label warning) — next best step?",
        "When to choose Tiagabine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GAT-1 GABA transporter (selective inhibition — blocks GABA reuptake)",
        "Most common side effects: Dizziness and sedation, Tremor and concentration difficulty, Nausea and abdominal pain",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The mechanism lesson: blocking GABA reuptake should calm the brain — psychiatric trials said no, and the seizure alert ended the conversation.",
        "The paradox: an anticonvulsant that causes seizures in non-epileptics at psychiatric doses — the FDA alert that confined it to epilepsy.",
        "The completeness entry: know tiagabine for GAT-1 pharmacology, not for prescribing.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: GAT-1 GABA-TRANSPORTER inhibition (selective) — the GABA-reuptake blocker.",
    "Approved: focal-epilepsy adjunct only.",
    "Psychiatric trials failed (anxiety, insomnia) — off-label use historic.",
    "FDA seizure alert: seizures/status in non-epileptics at psychiatric doses.",
    "Dose 32-56 mg/day with food; slow titration.",
    "Teaching value > prescribing value.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — epilepsy — adjunct for focal seizures",
      presentation: "A patient presenting with epilepsy — adjunct for focal seizures, started on Tiagabine.",
      history: "A adult patient presents with a epilepsy — adjunct for focal seizures picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with epilepsy — adjunct for focal seizures; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Epilepsy — adjunct for focal seizures. Differentials are considered and excluded clinically.",
      rationale: "Tiagabine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Anticonvulsant) with strong evidence in this condition.",
      management: "Started at 4 mg once daily × 1 week, titrated to 32-56 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Tiagabine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Anticonvulsant comparison — choosing within the class",
      primaryDrug: "Tiagabine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GAT-1 GABA transporter (selective inhibition — blocks GABA reuptake)",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "See full guide",
            },
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
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "7-9 hours (with enzyme-inducer co-therapy shorter).",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "—",
            },
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
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The GABA-reuptake blocker — mechanism elegance, clinical footnote",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "The interaction-clean pain-augmentation agent — anxiety and craving off-label",
            },
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
      description: "Tiagabine reaches peak plasma concentration and begins acting at its molecular target (GAT-1 GABA transporter (selective inhibition — blocks GABA reuptake)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (dizziness and sedation, tremor and concentration difficulty, nausea and abdominal pain). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Seizure adjunct effects within titration.)",
      title: "Therapeutic effect builds",
      description: "Seizure adjunct effects within titration. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Tiagabine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Tiagabine take to work?",
      answer: "Seizure adjunct effects within titration.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Tiagabine?",
      answer: "The most frequently reported effects are: Dizziness and sedation, Tremor and concentration difficulty, Nausea and abdominal pain. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Tiagabine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Tiagabine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Tiagabine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Tiagabine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Tiagabine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), tiagabine monograph, p. 122",
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
        source: "FDA Prescribing Information for Gabitril (Tiagabine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for tiagabine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Tiagabine",
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
      name: "Epilepsy — adjunct for focal seizures",
      relationship: "primary",
    },
    {
      name: "Anxiety and insomnia (failed/unapproved)",
      relationship: "off-label",
    },
    {
      name: "Bipolar/catalepsy (no evidence)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Tiagabine",
      type: "drug",
      href: "/drugs/tiagabine",
      note: "The drug you're reading about",
    },
    {
      label: "Anticonvulsant",
      type: "class",
      href: "#mechanism",
      note: "Anticonvulsant (GAT-1 Inhibitor)",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GAT-1 GABA transporter (selective inhibition — blocks GABA reuptake)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Epilepsy — adjunct for focal seizures",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Anxiety and insomnia (failed/unapproved)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Bipolar/catalepsy (no evidence)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Seizures (including in non-epileptics — the label warning)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Cognitive blunting",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dizziness and sedation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Tiagabine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The GAT-1 reuptake blocker — GABA-ergic precision that never found its psychiatric niche.",
    summary: "Tiagabine is a prescription medicine used to treat epilepsy — adjunct for focal seizures. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Tiagabine is an anti-seizure medicine that works by blocking the recycling of GABA, the brain's main calming chemical. It is used only as an add-on for focal epilepsy: trials in anxiety and sleep problems did not succeed, and it can paradoxically cause seizures in people without epilepsy if misused — so it is prescribed strictly for its approved purpose.",
    sideEffects: "The most common side effects are: dizziness and sedation, tremor and concentration difficulty, nausea and abdominal pain. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Seizures (including in non-epileptics — the label warning) and Cognitive blunting. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: seizure-alert counselling (at initiation). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Enzyme inducers (carbamazepine, phenytoin), Other sedatives. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Tiagabine (very rare availability)",
        manufacturer: "imported",
        strengths: "2-16 mg",
      },
    ],
    typicalDoses: "Adjunct 32-56 mg/day.",
    prescribingScenarios: [
      "Pharmacology-teaching interest; rare imported use.",
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
    familyName: "Anticonvulsants",
    members: [
      {
        name: "Tiagabine",
        slug: "tiagabine",
        relationship: "This guide",
        distinguishing: "The GABA-reuptake blocker — mechanism elegance, clinical footnote",
      },
      {
        name: "Gabapentin",
        slug: "gabapentin",
        relationship: "Same class (Anticonvulsant)",
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
        name: "Zonisamide",
        slug: "zonisamide",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The second weight-loser — topiramate's sibling",
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
      question: "Which molecular target does Tiagabine primarily act on?",
      options: [
        "GAT-1 GABA transporter (selective inhibition — blocks GABA reuptake)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Tiagabine acts primarily at GAT-1 GABA transporter (selective inhibition — blocks GABA reuptake). Tiagabine selectively blocks the GAT-1 GABA transporter, raising synaptic GABA concentration — the GABA-ergic reuptake-blocker concept.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Tiagabine?",
      options: ["Dizziness and sedation", "Tremor and concentration difficulty", "Nausea and abdominal pain", "Weight gain"],
      correctIndex: 0,
      explanation: "Dizziness and sedation — The GABA-ergic texture.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Tiagabine for epilepsy adjunct?",
      options: ["32-56 mg/day", "56 mg/day (adults, divided)", "32-56 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For epilepsy adjunct: start 4 mg once daily × 1 week, target 32-56 mg/day, maximum 56 mg/day (adults, divided). Increase by 4-8 mg/week to 32-56 mg/day divided with food",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Tiagabine in two sentences.",
      answer: "Tiagabine selectively blocks the GAT-1 GABA transporter, raising synaptic GABA concentration — the GABA-ergic reuptake-blocker concept. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Tiagabine.",
      answer: "Epilepsy — adjunct for focal seizures, Anxiety and insomnia (failed/unapproved), Bipolar/catalepsy (no evidence). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Tiagabine and how you would manage it.",
      answer: "Seizures (including in non-epileptics — the label warning): Paradoxical seizure induction, including status epilepticus reports in non-epileptic psychiatric use — the FDA alert that ended psychiatric exploration. Management: Dose ceilings; avoid in non-epilepsy off-label use.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Tiagabine require?",
      answer: "Seizure-alert counselling (At initiation)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Tiagabine that separates safe prescribers from unsafe ones.",
      answer: "The mechanism lesson: blocking GABA reuptake should calm the brain — psychiatric trials said no, and the seizure alert ended the conversation.",
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
      checkpoint: "You now know what Tiagabine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Tiagabine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Tiagabine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Tiagabine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Tiagabine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Tiagabine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Seizure adjunct effects within titration.",
    ],
    ifItWorks: [
      "Continue Tiagabine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Tiagabine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Tiagabine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Epilepsy adjunct",
        starting: "4 mg once daily × 1 week",
        titration: "Increase by 4-8 mg/week to 32-56 mg/day divided with food",
        target: "32-56 mg/day",
        max: "56 mg/day (adults, divided)",
      },
    ],
    dosageForms: ["Tablets 2, 4, 12, 16, 20 mg"],
    dosingTips: [
      "With food; slow titration.",
      "Do not use off-label in non-epilepsy patients (seizure alert).",
    ],
    overdose: [
      "Overdose with Tiagabine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Tiagabine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 7-9 hours (with enzyme-inducer co-therapy shorter)..",
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
    potentialAdvantages: ["Elegant selective GABA-ergic mechanism.", "Adjunct epilepsy efficacy."],
    potentialDisadvantages: ["Failed psychiatric indications.", "Seizure alert in non-epileptics.", "Inducer-dependent dosing."],
    primaryTargetSymptoms: ["Focal seizures (adjunct)"],
    pearls: [
      "The mechanism lesson: blocking GABA reuptake should calm the brain — psychiatric trials said no, and the seizure alert ended the conversation.",
      "The paradox: an anticonvulsant that causes seizures in non-epileptics at psychiatric doses — the FDA alert that confined it to epilepsy.",
      "The completeness entry: know tiagabine for GAT-1 pharmacology, not for prescribing.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
