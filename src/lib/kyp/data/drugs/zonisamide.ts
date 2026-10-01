import type { Drug } from "../types";

/**
 * Zonisamide — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), zonisamide monograph (book p. 140)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const zonisamide: Drug = {
  /* ---- Identity ---- */
  slug: "zonisamide",
  genericName: "Zonisamide",
  brandNames: ["Zonegran"],
  drugClass: "anticonvulsant",
  drugClassLabel: "Anticonvulsant",
  drugClassFullName: "Anticonvulsant (Multimodal)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Anticonvulsants", "Zonisamide"],
  /* ---- Hero / summary ---- */
  tagline: "The second weight-losing anticonvulsant — topiramate's cousin with the same stone-and-sweat cautions.",
  summary: "Zonisamide is the sulfonamide-structured multi-mechanism anticonvulsant: sodium/calcium channel blockade plus weak carbonic-anhydrase inhibition — topiramate's pharmacological cousin with weight loss, paraesthesia, and cognitive cautions, used in epilepsy and off-label psychiatry (binge, craving, weight-protective augmentation).",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Zonisamide — from its molecular target (Voltage-gated Na+ channels; T-type Ca2+ channels; weak carbonic anhydrase) to clinical effect.",
    "List the FDA-approved and off-label uses of Zonisamide.",
    "Predict the common and serious side effects of Zonisamide from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Zonisamide.",
    "Compare Zonisamide with other anticonvulsants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Zonisamide blocks sodium and T-type calcium channels with weak carbonic-anhydrase inhibition — topiramate-like multi-mechanism pharmacology in a sulfonamide structure.",
    molecularTarget: "Voltage-gated Na+ channels; T-type Ca2+ channels; weak carbonic anhydrase",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Zonisamide blocks sodium and T-type calcium channels with weak carbonic-anhydrase inhibition — topiramate-like multi-mechanism pharmacology in a sulfonamide structure.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 50-70 hours (once-daily capable). — see mechanism and prescriber sections.",
    halfLife: "50-70 hours (once-daily capable).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Zonisamide",
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
  neurotransmitters: ["GABA", "Glutamate"],
  receptors: ["Voltage-gated Na+ channels", "T-type Ca2+ channels", "Carbonic anhydrase (weak)"],
  brainRegionIds: ["prefrontal-cortex", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Epilepsy — adjunct for focal seizures",
      status: "fda-approved",
      description: "The base indication.",
    },
    {
      name: "Binge eating / craving (off-label)",
      status: "off-label",
      description: "The topiramate-adjacent psychiatric role.",
    },
    {
      name: "Weight-protective mood augmentation (off-label)",
      status: "off-label",
      description: "Selected use.",
    },
    {
      name: "Migraine prophylaxis (off-label)",
      status: "off-label",
      description: "The class role.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Zonisamide must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation, dizziness, cognitive blunting",
      frequency: "common",
      severity: "moderate",
      description: "The class texture (milder than topiramate in some).",
      management: "Slow titration.",
    },
    {
      name: "Appetite suppression and weight loss",
      frequency: "common",
      severity: "moderate",
      description: "The therapeutic signature.",
      management: "Monitor.",
    },
    {
      name: "Paraesthesia",
      frequency: "common",
      severity: "mild",
      description: "Carbonic-anhydrase effect.",
      management: "Reassurance.",
    },
    {
      name: "Irritability and mood effects",
      frequency: "uncommon",
      severity: "moderate",
      description: "Reported.",
      management: "Review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Sulfonamide hypersensitivity and SJS/TEN",
      frequency: "rare",
      severity: "life-threatening",
      description: "The sulfonamide structure carries the rash risk.",
      management: "Stop on rash; avoid in sulfonamide allergy.",
    },
    {
      name: "Nephrolithiasis",
      frequency: "uncommon",
      severity: "severe",
      description: "As topiramate.",
      management: "Hydration.",
    },
    {
      name: "Oligohidrosis/hyperthermia (children)",
      frequency: "uncommon",
      severity: "severe",
      description: "As topiramate.",
      management: "Heat counselling.",
    },
    {
      name: "Metabolic acidosis",
      frequency: "uncommon",
      severity: "moderate",
      description: "Carbonic-anhydrase effect.",
      management: "Bicarbonate periodically.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Weight and cognition",
      frequency: "At review",
      rationale: "The class set.",
    },
    {
      parameter: "Bicarbonate (long use)",
      frequency: "Periodically",
      rationale: "Acidosis.",
    },
  ],
  interactions: [
    {
      drug: "Other carbonic-anhydrase inhibitors",
      severity: "major",
      mechanism: "Additive acidosis/stones.",
      action: "Avoid.",
    },
    {
      drug: "CNS depressants",
      severity: "moderate",
      mechanism: "Additive blunting.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited human data; class anticonvulsant pregnancy caution applies — alternatives preferred.",
    lactation: "Excreted in milk; caution.",
  },
  renalAdjustment: "Avoid in severe renal impairment; stone-risk hydration.",
  hepaticAdjustment: "Standard caution.",
  /* ---- Education ---- */
  patientExplanation: "Zonisamide is an epilepsy medicine related to topiramate: it steadies overactive nerves through several mechanisms and tends to reduce appetite. Its effects and cautions are similar — tingling, word-finding trouble, kidney-stone risk (drink water), and it belongs to the sulfa family, so any rash should be reported immediately.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Zonisamide builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The topiramate cousin: same channels, same carbonic-anhydrase, same weight loss — with a sulfonamide allergy twist.",
    "The stone-sweat-acidosis set travels with the whole carbonic-anhydrase family — hydration and heat counselling are the package.",
    "The second weight-loser: when topiramate's cognitive toll exceeds benefit, zonisamide is the alternative branch.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Zonisamide: Zonisamide blocks sodium and T-type calcium channels with weak carbonic-anhydrase inhibition — topiramate-like multi-mechanism pharmacology in a sulfonamide structure.",
        "Uses of Zonisamide: Epilepsy — adjunct for focal seizures; Binge eating / craving (off-label); Weight-protective mood augmentation (off-label); Migraine prophylaxis (off-label)",
        "Mechanism: Na+/T-type Ca2+ channels + weak carbonic anhydrase — topiramate's cousin.",
        "Epilepsy adjunct approved; psychiatric roles off-label.",
      ],
      practical: [
        "Prescribe Zonisamide for epilepsy — adjunct for focal seizures with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and cognition (At review); Bicarbonate (long use) (Periodically)",
      ],
      longAnswer: [
        "Zonisamide: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: Na+/T-type Ca2+ channels + weak carbonic anhydrase — topiramate's cousin.",
        "Epilepsy adjunct approved; psychiatric roles off-label.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: Na+/T-type Ca2+ channels + weak carbonic anhydrase — topiramate's cousin.",
        "Epilepsy adjunct approved; psychiatric roles off-label.",
        "Weight loss signature; paraesthesia; cognitive cautions.",
        "Sulfonamide hypersensitivity warning (rash risk).",
        "Same stone/oligohidrosis/acidosis cautions as topiramate.",
        "Dose 100-400 mg/day; slow titration.",
      ],
      pyqConcepts: [
        "Mechanism/target of Zonisamide",
        "Key adverse effect: Sulfonamide hypersensitivity and SJS/TEN",
        "Dosing and titration of Zonisamide",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Zonisamide develops sulfonamide hypersensitivity and sjs/ten — next best step?",
        "When to choose Zonisamide over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Voltage-gated Na+ channels; T-type Ca2+ channels; weak carbonic anhydrase",
        "Most common side effects: Sedation, dizziness, cognitive blunting, Appetite suppression and weight loss, Paraesthesia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The topiramate cousin: same channels, same carbonic-anhydrase, same weight loss — with a sulfonamide allergy twist.",
        "The stone-sweat-acidosis set travels with the whole carbonic-anhydrase family — hydration and heat counselling are the package.",
        "The second weight-loser: when topiramate's cognitive toll exceeds benefit, zonisamide is the alternative branch.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: Na+/T-type Ca2+ channels + weak carbonic anhydrase — topiramate's cousin.",
    "Epilepsy adjunct approved; psychiatric roles off-label.",
    "Weight loss signature; paraesthesia; cognitive cautions.",
    "Sulfonamide hypersensitivity warning (rash risk).",
    "Same stone/oligohidrosis/acidosis cautions as topiramate.",
    "Dose 100-400 mg/day; slow titration.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — epilepsy — adjunct for focal seizures",
      presentation: "A patient presenting with epilepsy — adjunct for focal seizures, started on Zonisamide.",
      history: "A adult patient presents with a epilepsy — adjunct for focal seizures picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with epilepsy — adjunct for focal seizures; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Epilepsy — adjunct for focal seizures. Differentials are considered and excluded clinically.",
      rationale: "Zonisamide is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Anticonvulsant) with strong evidence in this condition.",
      management: "Started at 50 mg daily × 2 weeks, titrated to 300-500 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Zonisamide takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Anticonvulsant comparison — choosing within the class",
      primaryDrug: "Zonisamide",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Voltage-gated Na+ channels; T-type Ca2+ channels; weak carbonic anhydrase",
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
          primaryValue: "50-70 hours (once-daily capable).",
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
          primaryValue: "The second weight-loser — topiramate's sibling",
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
      description: "Zonisamide reaches peak plasma concentration and begins acting at its molecular target (Voltage-gated Na+ channels; T-type Ca2+ channels; weak carbonic anhydrase). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation, dizziness, cognitive blunting, appetite suppression and weight loss, paraesthesia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Weeks of titration to effect.)",
      title: "Therapeutic effect builds",
      description: "Weeks of titration to effect. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Zonisamide is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Zonisamide take to work?",
      answer: "Weeks of titration to effect.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Zonisamide?",
      answer: "The most frequently reported effects are: Sedation, dizziness, cognitive blunting, Appetite suppression and weight loss, Paraesthesia, Irritability and mood effects. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Zonisamide suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Zonisamide habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Zonisamide exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Zonisamide during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Zonisamide may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), zonisamide monograph, p. 140",
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
        source: "FDA Prescribing Information for Zonegran (Zonisamide)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for zonisamide — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Zonisamide",
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
      name: "Tiagabine",
      slug: "tiagabine",
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
      name: "Binge eating / craving (off-label)",
      relationship: "off-label",
    },
    {
      name: "Weight-protective mood augmentation (off-label)",
      relationship: "off-label",
    },
    {
      name: "Migraine prophylaxis (off-label)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Zonisamide",
      type: "drug",
      href: "/drugs/zonisamide",
      note: "The drug you're reading about",
    },
    {
      label: "Anticonvulsant",
      type: "class",
      href: "#mechanism",
      note: "Anticonvulsant (Multimodal)",
    },
    {
      label: "GABA",
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
      label: "Voltage-gated Na+ channels; T-type Ca2+ channels; weak carbonic anhydrase",
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
      label: "Binge eating / craving (off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Weight-protective mood augmentation (off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Sulfonamide hypersensitivity and SJS/TEN",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nephrolithiasis",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation, dizziness, cognitive blunting",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Zonisamide",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The second weight-losing anticonvulsant — topiramate's cousin with the same stone-and-sweat cautions.",
    summary: "Zonisamide is a prescription medicine used to treat epilepsy — adjunct for focal seizures. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Zonisamide is an epilepsy medicine related to topiramate: it steadies overactive nerves through several mechanisms and tends to reduce appetite. Its effects and cautions are similar — tingling, word-finding trouble, kidney-stone risk (drink water), and it belongs to the sulfa family, so any rash should be reported immediately.",
    sideEffects: "The most common side effects are: sedation, dizziness, cognitive blunting, appetite suppression and weight loss, paraesthesia, irritability and mood effects. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Sulfonamide hypersensitivity and SJS/TEN and Nephrolithiasis. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and cognition (at review); bicarbonate (long use) (periodically). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other carbonic-anhydrase inhibitors, CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Zonisamide (limited availability)",
        manufacturer: "various",
        strengths: "25-100 mg",
      },
    ],
    typicalDoses: "50 → 300-400 mg/day.",
    prescribingScenarios: [
      "Topiramate-intolerant weight-loss contexts.",
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
        name: "Zonisamide",
        slug: "zonisamide",
        relationship: "This guide",
        distinguishing: "The second weight-loser — topiramate's sibling",
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
        name: "Tiagabine",
        slug: "tiagabine",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The GABA-reuptake blocker — mechanism elegance, clinical footnote",
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
      question: "Which molecular target does Zonisamide primarily act on?",
      options: [
        "Voltage-gated Na+ channels; T-type Ca2+ channels; weak carbonic anhydrase",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Zonisamide acts primarily at Voltage-gated Na+ channels; T-type Ca2+ channels; weak carbonic anhydrase. Zonisamide blocks sodium and T-type calcium channels with weak carbonic-anhydrase inhibition — topiramate-like multi-mechanism pharmacology in a sulfonamide structure.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Zonisamide?",
      options: ["Sedation, dizziness, cognitive blunting", "Appetite suppression and weight loss", "Paraesthesia", "Irritability and mood effects"],
      correctIndex: 0,
      explanation: "Sedation, dizziness, cognitive blunting — The class texture (milder than topiramate in some).",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Zonisamide for epilepsy adjunct?",
      options: ["300-500 mg/day", "600 mg/day", "300-500 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For epilepsy adjunct: start 50 mg daily × 2 weeks, target 300-500 mg/day, maximum 600 mg/day. Increase by 50 mg at ≥ 2-week intervals to 300-500",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Zonisamide in two sentences.",
      answer: "Zonisamide blocks sodium and T-type calcium channels with weak carbonic-anhydrase inhibition — topiramate-like multi-mechanism pharmacology in a sulfonamide structure. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Zonisamide.",
      answer: "Epilepsy — adjunct for focal seizures, Binge eating / craving (off-label), Weight-protective mood augmentation (off-label), Migraine prophylaxis (off-label). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Zonisamide and how you would manage it.",
      answer: "Sulfonamide hypersensitivity and SJS/TEN: The sulfonamide structure carries the rash risk. Management: Stop on rash; avoid in sulfonamide allergy.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Zonisamide require?",
      answer: "Weight and cognition (At review); Bicarbonate (long use) (Periodically)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Zonisamide that separates safe prescribers from unsafe ones.",
      answer: "The topiramate cousin: same channels, same carbonic-anhydrase, same weight loss — with a sulfonamide allergy twist.",
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
      checkpoint: "You now know what Zonisamide is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Zonisamide works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Zonisamide safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Zonisamide.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Zonisamide with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Zonisamide.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["Weeks of titration to effect."],
    ifItWorks: [
      "Continue Zonisamide at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Zonisamide (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Zonisamide follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "50 mg daily × 2 weeks",
        titration: "Increase by 50 mg at ≥ 2-week intervals to 300-500",
        target: "300-500 mg/day",
        max: "600 mg/day",
      },
    ],
    dosageForms: ["Capsules 25, 50, 100 mg"],
    dosingTips: [
      "Slow titration; hydration; sulfa-allergy check.",
    ],
    overdose: [
      "Overdose with Zonisamide is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Zonisamide is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 50-70 hours (once-daily capable)..",
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
    potentialAdvantages: ["Weight-losing (the second option).", "Once-daily capable (long half-life)."],
    potentialDisadvantages: [
      "Sulfonamide rash risk.",
      "Same stone/acidosis set.",
      "Scarcer psychiatric evidence than topiramate.",
    ],
    primaryTargetSymptoms: ["Focal epilepsy", "Binge/craving augmentation (off-label)"],
    pearls: [
      "The topiramate cousin: same channels, same carbonic-anhydrase, same weight loss — with a sulfonamide allergy twist.",
      "The stone-sweat-acidosis set travels with the whole carbonic-anhydrase family — hydration and heat counselling are the package.",
      "The second weight-loser: when topiramate's cognitive toll exceeds benefit, zonisamide is the alternative branch.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
