import type { Drug } from "../types";

/**
 * Oxcarbazepine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), oxcarbazepine monograph (book p. 92)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const oxcarbazepine: Drug = {
  /* ---- Identity ---- */
  slug: "oxcarbazepine",
  genericName: "Oxcarbazepine",
  brandNames: ["Trileptal", "Oxcarb (India)"],
  drugClass: "mood-stabiliser",
  drugClassLabel: "Mood Stabiliser",
  drugClassFullName: "Mood Stabiliser — Anticonvulsant",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Mood Stabilisers", "Oxcarbazepine"],
  /* ---- Hero / summary ---- */
  tagline: "Carbamazepine's kinder descendant — less interaction, less marrow risk, more hyponatraemia.",
  summary: "Oxcarbazepine is the 10-keto analogue of carbamazepine: same sodium-channel mechanism, but its metabolism to the active monohydroxy derivative (MHD) skips the epoxide and largely sidesteps the auto-induction, marrow, and interaction minefield of its parent — at the price of MORE hyponatraemia. Its psychiatric use (bipolar maintenance, aggression) is off-label but common where carbamazepine's interaction profile is untenable.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Oxcarbazepine — from its molecular target (Voltage-gated Na+ channels via MHD (active metabolite)) to clinical effect.",
    "List the FDA-approved and off-label uses of Oxcarbazepine.",
    "Predict the common and serious side effects of Oxcarbazepine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Oxcarbazepine.",
    "Compare Oxcarbazepine with other mood stabilisers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Oxcarbazepine is reduced to its active monohydroxy derivative (MHD), which blocks voltage-gated sodium channels use-dependently — carbamazepine's mechanism without the epoxide and auto-induction.",
    molecularTarget: "Voltage-gated Na+ channels via MHD (active metabolite)",
    effect: "Anticonvulsant and (off-label) mood-stabilising action with a cleaner interaction profile than carbamazepine.",
    steps: [
      "Rapid reduction to MHD — the active species — without the reactive epoxide of carbamazepine.",
      "MHD blocks sodium channels use-dependently; additionally modulates potassium channels.",
      "No meaningful CYP3A4 auto-induction — drug levels stay predictable.",
      "Mild 3A4 induction and 2C19 inhibition give a small interaction footprint.",
    ],
    pharmacokinetics: "Well absorbed; MHD is the measured species (target 12–35 µg/mL).",
    halfLife: "MHD ~9 hours (predictable, no auto-induction).",
    activeMetabolite: "Monohydroxy derivative (MHD) — the true active drug.",
    metabolism: "Cytosolic reduction to MHD (no CYP for activation); mild hepatic interactions.",
    excretion: "Renal (MHD).",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Oxcarbazepine",
        sublabel: "Mood stabiliser",
        variant: "process",
      },
      {
        id: "targets",
        label: "Multiple targets",
        sublabel: "Ion channels, second messengers, neuroprotection",
        variant: "target",
      },
      {
        id: "exc",
        label: "Neuronal hyperexcitability",
        sublabel: "Kindled mood episodes",
        variant: "input",
      },
      {
        id: "effect",
        label: "Mood stabilised",
        sublabel: "Relapse prevention",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "targets",
        label: "acts on",
      },
      {
        from: "exc",
        to: "targets",
        label: "calmed by",
        type: "inhibit",
      },
      {
        from: "targets",
        to: "effect",
        label: "prevents extremes",
      },
    ],
    caption: "Mood stabilisation is multi-mechanism: damping neuronal hyperexcitability, protecting neurons, and re-tuning intracellular signalling together prevent both poles of bipolar illness.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Glutamate", "GABA"],
  receptors: ["Voltage-gated Na+ channels (via MHD)"],
  brainRegionIds: ["prefrontal-cortex", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Epilepsy — focal seizures",
      status: "fda-approved",
      description: "First-line anticonvulsant (the approved base).",
    },
    {
      name: "Bipolar maintenance (off-label)",
      status: "off-label",
      description: "Used where carbamazepine interactions preclude the parent drug; evidence weaker than for other mood stabilisers.",
    },
    {
      name: "Aggression / impulsivity (off-label)",
      status: "off-label",
      description: "Common child-adolescent psychiatry practice.",
    },
    {
      name: "Trigeminal neuralgia (alternative)",
      status: "off-label",
      description: "When carbamazepine is not tolerated.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Oxcarbazepine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Hyponatraemia",
      frequency: "very-common",
      severity: "moderate",
      description: "MORE than carbamazepine — up to 25–30% drop > 5 mmol/L; mostly asymptomatic but symptomatic cases occur.",
      management: "Sodium at baseline and within the first months; reduce or switch if significant.",
    },
    {
      name: "Somnolence, dizziness, diplopia",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related neurotoxicity as with the parent, often milder.",
      management: "Dose reduction; divided dosing.",
    },
    {
      name: "Nausea and vomiting",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Take with food.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Severe symptomatic hyponatraemia",
      frequency: "uncommon",
      severity: "severe",
      description: "Confusion, seizures, and falls in the elderly with sodium < 125.",
      management: "Stop; sodium correction; avoid rechallenge in severe cases.",
    },
    {
      name: "Serious dermatologic reactions (SJS/TEN)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Possible cross-reactivity (~25–30%) with carbamazepine sensitivity — HLA-B*15:02 carriers remain at risk.",
      management: "Avoid after carbamazepine-associated SJS; caution in allele carriers.",
    },
    {
      name: "Agranulocytosis (very rare)",
      frequency: "rare",
      severity: "severe",
      description: "Far rarer than with carbamazepine.",
      management: "FBC if unexplained fever.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Serum sodium",
      frequency: "Baseline, then within 3 months and periodically (especially in elderly)",
      rationale: "The oxcarbazepine-specific surveillance — hyponatraemia is its signature.",
    },
    {
      parameter: "MHD level (optional)",
      frequency: "When response is inadequate",
      rationale: "Level-guided option.",
    },
  ],
  interactions: [
    {
      drug: "Oral contraceptives",
      severity: "major",
      mechanism: "Mild 3A4 induction can lower OC efficacy — less potent than carbamazepine but real.",
      action: "Additional/alternative contraception advised.",
    },
    {
      drug: "Carbamazepine (cross-sensitivity)",
      severity: "major",
      mechanism: "~25–30% cross-reactivity for serious rashes.",
      action: "Avoid after carbamazepine-associated serious rash.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Oxcarbazepine is considered somewhat safer than carbamazepine in pregnancy (less teratogenic signal for oxcarbazepine in registries), but data are limited and folate prophylaxis is standard practice for anticonvulsants in women of childbearing age.",
    lactation: "MHD passes into milk; usually compatible with infant monitoring for sedation and feeding.",
  },
  renalAdjustment: "Dose reduction needed in significant renal impairment (MHD renally cleared) — start at half dose.",
  hepaticAdjustment: "No major adjustment (no CYP-dependent activation).",
  /* ---- Education ---- */
  patientExplanation: "Oxcarbazepine is a newer relative of carbamazepine with a cleaner safety story — fewer medicine interactions and much lower risk to the bone marrow. Its one signature issue is lowering blood sodium, so a sodium blood test is routine during the first months.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Oxcarbazepine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Hyponatraemia is MORE common with oxcarbazepine than carbamazepine — the one adverse effect that got worse in the redesign.",
    "No auto-induction, no epoxide, minimal CYP footprint — the reason it exists.",
    "Cross-rash risk ~25–30% with carbamazepine — do not treat a carbamazepine-SJS survivor with oxcarbazepine.",
    "Psychiatric use is off-label: weaker mood evidence than lithium/valproate/lamotrigine but a real niche when interactions rule the parent out.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Oxcarbazepine: Oxcarbazepine is reduced to its active monohydroxy derivative (MHD), which blocks voltage-gated sodium channels use-dependently — carbamazepine's mechanism without the epoxide and auto-induction.",
        "Uses of Oxcarbazepine: Epilepsy — focal seizures; Bipolar maintenance (off-label); Aggression / impulsivity (off-label); Trigeminal neuralgia (alternative)",
        "10-keto analogue of carbamazepine; active via MHD (monohydroxy derivative).",
        "Same Na+ channel mechanism; NO auto-induction and minimal CYP interactions.",
      ],
      practical: [
        "Prescribe Oxcarbazepine for epilepsy — focal seizures with dose, timing, and duration.",
        "Outline the monitoring plan: Serum sodium (Baseline, then within 3 months and periodically (especially in elderly)); MHD level (optional) (When response is inadequate)",
      ],
      longAnswer: [
        "Oxcarbazepine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "10-keto analogue of carbamazepine; active via MHD (monohydroxy derivative).",
        "Same Na+ channel mechanism; NO auto-induction and minimal CYP interactions.",
      ],
    },
    neetPg: {
      highYield: [
        "10-keto analogue of carbamazepine; active via MHD (monohydroxy derivative).",
        "Same Na+ channel mechanism; NO auto-induction and minimal CYP interactions.",
        "Signature adverse effect: hyponatraemia (MORE common than with carbamazepine).",
        "Cross-SJS reactivity ~25–30% with carbamazepine (HLA-B*15:02 caution persists).",
        "Dose: 600–1200 mg/day start 300 mg; halve in renal impairment.",
        "Psychiatric use (bipolar maintenance) is off-label.",
      ],
      pyqConcepts: [
        "Mechanism/target of Oxcarbazepine",
        "Key adverse effect: Severe symptomatic hyponatraemia",
        "Dosing and titration of Oxcarbazepine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Oxcarbazepine develops severe symptomatic hyponatraemia — next best step?",
        "When to choose Oxcarbazepine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Voltage-gated Na+ channels via MHD (active metabolite)",
        "Most common side effects: Hyponatraemia, Somnolence, dizziness, diplopia, Nausea and vomiting",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The cleaner carbamazepine — except for sodium.",
        "Check sodium in month 1–3, especially in the elderly.",
        "Off-label in psychiatry: know the evidence hierarchy before reaching for it.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "10-keto analogue of carbamazepine; active via MHD (monohydroxy derivative).",
    "Same Na+ channel mechanism; NO auto-induction and minimal CYP interactions.",
    "Signature adverse effect: hyponatraemia (MORE common than with carbamazepine).",
    "Cross-SJS reactivity ~25–30% with carbamazepine (HLA-B*15:02 caution persists).",
    "Dose: 600–1200 mg/day start 300 mg; halve in renal impairment.",
    "Psychiatric use (bipolar maintenance) is off-label.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — epilepsy — focal seizures",
      presentation: "A patient presenting with epilepsy — focal seizures, started on Oxcarbazepine.",
      history: "A adult patient presents with a epilepsy — focal seizures picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with epilepsy — focal seizures; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Epilepsy — focal seizures. Differentials are considered and excluded clinically.",
      rationale: "Oxcarbazepine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Mood Stabiliser) with strong evidence in this condition.",
      management: "Started at 300 mg twice daily, titrated to 1200–2400 mg/day (mood uses often 900–1800) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Oxcarbazepine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Mood Stabiliser comparison — choosing within the class",
      primaryDrug: "Oxcarbazepine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Voltage-gated Na+ channels via MHD (active metabolite)",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "See full guide",
            },
            {
              drug: "Lamotrigine",
              value: "See full guide",
            },
            {
              drug: "Lithium",
              value: "See full guide",
            },
            {
              drug: "Valproate",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "MHD ~9 hours (predictable, no auto-induction).",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "—",
            },
            {
              drug: "Lamotrigine",
              value: "—",
            },
            {
              drug: "Lithium",
              value: "—",
            },
            {
              drug: "Valproate",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "See product information and class comparison.",
            },
            {
              drug: "Lamotrigine",
              value: "See product information and class comparison.",
            },
            {
              drug: "Lithium",
              value: "See product information and class comparison.",
            },
            {
              drug: "Valproate",
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Mild-to-moderate.",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "Moderate, dose-related — partly tolerance-developing.",
            },
            {
              drug: "Lamotrigine",
              value: "Not sedating — mildly activating (morning dosing suits most).",
            },
            {
              drug: "Lithium",
              value: "Not typically sedating — neutral; occasionally described as 'slowing'.",
            },
            {
              drug: "Valproate",
              value: "Common, dose-related — often useful in acute mania.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The cleaner carbamazepine — off-label mood use with fewer interactions",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "Mania + trigeminal neuralgia + the great CYP450 inducer",
            },
            {
              drug: "Lamotrigine",
              value: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
            },
            {
              drug: "Lithium",
              value: "Anti-suicide + both-pole prophylaxis — the irreplaceable classic",
            },
            {
              drug: "Valproate",
              value: "Mania workhorse — especially mixed states and rapid cycling; now pregnancy-governed",
            },
          ],
        },
      ],
      takeaway: "All mood stabilisers share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Oxcarbazepine reaches peak plasma concentration and begins acting at its molecular target (Voltage-gated Na+ channels via MHD (active metabolite)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (hyponatraemia, somnolence, dizziness, diplopia, nausea and vomiting). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Anticonvulsant effect days; off-label mood effects build over weeks.)",
      title: "Therapeutic effect builds",
      description: "Anticonvulsant effect days; off-label mood effects build over weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Oxcarbazepine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Oxcarbazepine take to work?",
      answer: "Anticonvulsant effect days; off-label mood effects build over weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Oxcarbazepine?",
      answer: "The most frequently reported effects are: Hyponatraemia, Somnolence, dizziness, diplopia, Nausea and vomiting, Headache. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Oxcarbazepine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Oxcarbazepine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Oxcarbazepine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Oxcarbazepine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Oxcarbazepine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG185 (Bipolar Disorder); CANMAT/ISBD Guidelines",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), oxcarbazepine monograph, p. 92",
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
        source: "FDA Prescribing Information for Trileptal (Oxcarbazepine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for oxcarbazepine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Oxcarbazepine",
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
      name: "Carbamazepine",
      slug: "carbamazepine",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Lamotrigine",
      slug: "lamotrigine",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Lithium",
      slug: "lithium",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Valproate",
      slug: "valproate",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
  ],
  relatedConditions: [
    {
      name: "Epilepsy — focal seizures",
      relationship: "primary",
    },
    {
      name: "Bipolar maintenance (off-label)",
      relationship: "off-label",
    },
    {
      name: "Aggression / impulsivity (off-label)",
      relationship: "off-label",
    },
    {
      name: "Trigeminal neuralgia (alternative)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Oxcarbazepine",
      type: "drug",
      href: "/drugs/oxcarbazepine",
      note: "The drug you're reading about",
    },
    {
      label: "Mood Stabiliser",
      type: "class",
      href: "#mechanism",
      note: "Mood Stabiliser — Anticonvulsant",
    },
    {
      label: "Glutamate",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Voltage-gated Na+ channels via MHD (active metabolite)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Prefrontal Cortex",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Amygdala",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Epilepsy — focal seizures",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar maintenance (off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Aggression / impulsivity (off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Severe symptomatic hyponatraemia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Serious dermatologic reactions (SJS/TEN)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Hyponatraemia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Oxcarbazepine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Carbamazepine's kinder descendant — less interaction, less marrow risk, more hyponatraemia.",
    summary: "Oxcarbazepine is a prescription medicine used to treat epilepsy — focal seizures. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Oxcarbazepine is a newer relative of carbamazepine with a cleaner safety story — fewer medicine interactions and much lower risk to the bone marrow. Its one signature issue is lowering blood sodium, so a sodium blood test is routine during the first months.",
    sideEffects: "The most common side effects are: hyponatraemia, somnolence, dizziness, diplopia, nausea and vomiting, headache. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Severe symptomatic hyponatraemia and Serious dermatologic reactions (SJS/TEN). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: serum sodium (baseline, then within 3 months and periodically (especially in elderly)); mhd level (optional) (when response is inadequate). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Oral contraceptives, Carbamazepine (cross-sensitivity). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Oxcarb / Oxetol",
        manufacturer: "Sun/Novartis network",
        strengths: "150–600 mg",
      },
      {
        name: "Oxcarbazepine generic",
        manufacturer: "multiple",
        strengths: "150–600 mg",
      },
    ],
    typicalDoses: "Start 300 mg bid; mood uses typically 900–1800 mg/day.",
    prescribingScenarios: [
      "Interaction-laden patients needing carbamazepine-type action.",
      "Paediatric aggression and mood instability (off-label).",
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
      "Sodium checks in the first months.",
      "Report confusion, headache, or new falls — sodium symptoms.",
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
    familyName: "Mood Stabilisers",
    members: [
      {
        name: "Oxcarbazepine",
        slug: "oxcarbazepine",
        relationship: "This guide",
        distinguishing: "The cleaner carbamazepine — off-label mood use with fewer interactions",
      },
      {
        name: "Carbamazepine",
        slug: "carbamazepine",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Mania + trigeminal neuralgia + the great CYP450 inducer",
      },
      {
        name: "Lamotrigine",
        slug: "lamotrigine",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
      },
      {
        name: "Lithium",
        slug: "lithium",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Anti-suicide + both-pole prophylaxis — the irreplaceable classic",
      },
      {
        name: "Valproate",
        slug: "valproate",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Mania workhorse — especially mixed states and rapid cycling; now pregnancy-governed",
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
      question: "Which molecular target does Oxcarbazepine primarily act on?",
      options: [
        "Voltage-gated Na+ channels via MHD (active metabolite)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Oxcarbazepine acts primarily at Voltage-gated Na+ channels via MHD (active metabolite). Oxcarbazepine is reduced to its active monohydroxy derivative (MHD), which blocks voltage-gated sodium channels use-dependently — carbamazepine's mechanism without the epoxide and auto-induction.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Oxcarbazepine?",
      options: ["Hyponatraemia", "Somnolence, dizziness, diplopia", "Nausea and vomiting", "Headache"],
      correctIndex: 0,
      explanation: "Hyponatraemia — MORE than carbamazepine — up to 25–30% drop > 5 mmol/L; mostly asymptomatic but symptomatic cases occur.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Oxcarbazepine for epilepsy / off-label mood use?",
      options: [
        "1200–2400 mg/day (mood uses often 900–1800)",
        "2400 mg/day",
        "1200–2400 mg/day (mood uses often 900–1800) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For epilepsy / off-label mood use: start 300 mg twice daily, target 1200–2400 mg/day (mood uses often 900–1800), maximum 2400 mg/day. Increase by 600 mg/day weekly",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Oxcarbazepine in two sentences.",
      answer: "Oxcarbazepine is reduced to its active monohydroxy derivative (MHD), which blocks voltage-gated sodium channels use-dependently — carbamazepine's mechanism without the epoxide and auto-induction. Net effect: Anticonvulsant and (off-label) mood-stabilising action with a cleaner interaction profile than carbamazepine.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Oxcarbazepine.",
      answer: "Epilepsy — focal seizures, Bipolar maintenance (off-label), Aggression / impulsivity (off-label), Trigeminal neuralgia (alternative). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Oxcarbazepine and how you would manage it.",
      answer: "Severe symptomatic hyponatraemia: Confusion, seizures, and falls in the elderly with sodium < 125. Management: Stop; sodium correction; avoid rechallenge in severe cases.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Oxcarbazepine require?",
      answer: "Serum sodium (Baseline, then within 3 months and periodically (especially in elderly)); MHD level (optional) (When response is inadequate)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Oxcarbazepine that separates safe prescribers from unsafe ones.",
      answer: "The cleaner carbamazepine — except for sodium.",
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
      checkpoint: "You now know what Oxcarbazepine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Oxcarbazepine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Oxcarbazepine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Oxcarbazepine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Oxcarbazepine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Oxcarbazepine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Anticonvulsant effect days; off-label mood effects build over weeks.",
    ],
    ifItWorks: [
      "Continue Oxcarbazepine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Oxcarbazepine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Oxcarbazepine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Epilepsy / off-label mood use",
        starting: "300 mg twice daily",
        titration: "Increase by 600 mg/day weekly",
        target: "1200–2400 mg/day (mood uses often 900–1800)",
        max: "2400 mg/day",
      },
    ],
    dosageForms: ["Tablets 150–600 mg", "Suspension 300 mg/5 mL"],
    dosingTips: [
      "Sodium at baseline and month 1–3 — the surveillance that matters.",
      "Half the starting dose in renal impairment.",
      "Real but weaker OC interaction — backup contraception.",
    ],
    overdose: [
      "Overdose with Oxcarbazepine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Oxcarbazepine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: MHD ~9 hours (predictable, no auto-induction)..",
      "Metabolism: Cytosolic reduction to MHD (no CYP for activation); mild hepatic interactions..",
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
      "Carbamazepine mechanism without the interaction minefield.",
      "No auto-induction — predictable levels.",
      "Lower marrow risk.",
    ],
    potentialDisadvantages: [
      "Hyponatraemia MORE common.",
      "Weaker psychiatric evidence base (off-label).",
      "Cross-rash with carbamazepine.",
      "Costs more than generic carbamazepine.",
    ],
    primaryTargetSymptoms: ["Focal seizures (approved)", "Mood instability (off-label)", "Aggression (off-label)"],
    pearls: [
      "The cleaner carbamazepine — except for sodium.",
      "Check sodium in month 1–3, especially in the elderly.",
      "Off-label in psychiatry: know the evidence hierarchy before reaching for it.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
