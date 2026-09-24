import type { Drug } from "../types";

/**
 * Levetiracetam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), levetiracetam monograph (book p. 62)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const levetiracetam: Drug = {
  /* ---- Identity ---- */
  slug: "levetiracetam",
  genericName: "Levetiracetam",
  brandNames: ["Keppra", "Levera / Levipil (India)"],
  drugClass: "anticonvulsant",
  drugClassLabel: "Anticonvulsant",
  drugClassFullName: "Anticonvulsant (SV2A Ligand)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Anticonvulsants", "Levetiracetam"],
  /* ---- Hero / summary ---- */
  tagline: "The SV2A-ligand oddity — clean anticonvulsant pharmacology with a psychiatric behavioural footnote.",
  summary: "Levetiracetam is the synaptic-vesicle SV2A-protein ligand anticonvulsant: remarkably clean pharmacokinetics (renal excretion, no interactions) with broad-spectrum antiepileptic efficacy — and a psychiatric identity built on its BEHAVIOURAL adverse effects (irritability, agitation, psychosis-like reactions) that demand caution in psychiatric patients, alongside off-label aggression and mood-instability uses.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Levetiracetam — from its molecular target (SV2A synaptic-vesicle protein (ligand — reduces transmitter release)) to clinical effect.",
    "List the FDA-approved and off-label uses of Levetiracetam.",
    "Predict the common and serious side effects of Levetiracetam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Levetiracetam.",
    "Compare Levetiracetam with other anticonvulsants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Levetiracetam binds the SV2A synaptic-vesicle protein, reducing preterminal transmitter release — an anticonvulsant mechanism with no ion-channel or GABA involvement.",
    molecularTarget: "SV2A synaptic-vesicle protein (ligand — reduces transmitter release)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Levetiracetam binds the SV2A synaptic-vesicle protein, reducing preterminal transmitter release — an anticonvulsant mechanism with no ion-channel or GABA involvement.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 7 hours (BD dosing; XR daily). — see mechanism and prescriber sections.",
    halfLife: "7 hours (BD dosing; XR daily).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Levetiracetam",
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
  neurotransmitters: ["Glutamate", "GABA"],
  receptors: ["SV2A synaptic-vesicle protein (ligand)"],
  brainRegionIds: ["prefrontal-cortex", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Epilepsy — focal and generalised (broad spectrum)",
      status: "fda-approved",
      description: "The clean-pharmacology broad-spectrum anticonvulsant.",
    },
    {
      name: "Myoclonic and absence seizures",
      status: "fda-approved",
      description: "Broad-spectrum coverage.",
    },
    {
      name: "Aggression and impulsivity (off-label)",
      status: "off-label",
      description: "Paradoxical selected use despite its behavioural effects.",
    },
    {
      name: "Anxiety (adjunct, selected)",
      status: "off-label",
      description: "Limited evidence.",
    },
    {
      name: "Mania/bipolar (adjunct, weak)",
      status: "off-label",
      description: "Historic augmentation with limited evidence.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Levetiracetam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and fatigue",
      frequency: "common",
      severity: "moderate",
      description: "The commonest effects.",
      management: "Dose timing; review.",
    },
    {
      name: "Irritability, agitation, and behavioural change",
      frequency: "common",
      severity: "moderate",
      description: "The signature psychiatric adverse effect — irritability to psychosis-like reactions; children and psychiatric patients most affected.",
      management: "Dose reduction; stop if severe; counsel families at initiation.",
    },
    {
      name: "Dizziness and asthenia",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Psychosis-like reactions",
      frequency: "rare",
      severity: "severe",
      description: "Hallucinations and paranoia reported.",
      management: "Stop; reassess.",
    },
    {
      name: "Suicidality signal (antiepileptic class)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Class warning across anticonvulsants.",
      management: "Mood monitoring.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Behavioural/irritability review",
      frequency: "Early weeks and every visit",
      rationale: "The signature adverse effect.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol and CNS depressants",
      severity: "moderate",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
    {
      drug: "Essentially no pharmacokinetic interactions",
      severity: "minor",
      mechanism: "The clean-pharmacology prize.",
      action: "—",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Among the better-studied anticonvulsants in pregnancy (large registry experience, no major signal) — often the anticonvulsant of choice in pregnancy.",
    lactation: "Excreted in milk; usually compatible with infant monitoring (sedation, feeding).",
  },
  renalAdjustment: "Dose by CrCl (renal excretion is the entire elimination).",
  hepaticAdjustment: "No hepatic metabolism.",
  /* ---- Education ---- */
  patientExplanation: "Levetiracetam is a modern anti-seizure medicine with an unusually clean profile — few interactions and simple kidney-only clearance. Its one well-known quirk is behavioural: some people (especially children) become irritable or agitated on it, so families are warned in advance, and the dose is adjusted or stopped if this happens.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Levetiracetam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The SV2A story: a completely non-classical anticonvulsant mechanism — vesicle-protein binding — with renal-only clearance and zero interaction profile.",
    "The behavioural tax: irritability and agitation are the signature adverse effect — the anticonvulsant psychiatric patients' families need warned about.",
    "The paradox use: despite (or reflecting) the behavioural profile, low-dose levetiracetam has selected aggression-augmentation use.",
    "The clean-pharmacology prize: no interactions, no enzyme induction — the anticonvulsant for the complex-medication patient.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Levetiracetam: Levetiracetam binds the SV2A synaptic-vesicle protein, reducing preterminal transmitter release — an anticonvulsant mechanism with no ion-channel or GABA involvement.",
        "Uses of Levetiracetam: Epilepsy — focal and generalised (broad spectrum); Myoclonic and absence seizures; Aggression and impulsivity (off-label); Anxiety (adjunct, selected)",
        "Mechanism: SV2A synaptic-VESICLE protein ligand (non-classical).",
        "Broad-spectrum epilepsy efficacy; renal-only clearance; zero interactions.",
      ],
      practical: [
        "Prescribe Levetiracetam for epilepsy — focal and generalised (broad spectrum) with dose, timing, and duration.",
        "Outline the monitoring plan: Behavioural/irritability review (Early weeks and every visit)",
      ],
      longAnswer: [
        "Levetiracetam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SV2A synaptic-VESICLE protein ligand (non-classical).",
        "Broad-spectrum epilepsy efficacy; renal-only clearance; zero interactions.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SV2A synaptic-VESICLE protein ligand (non-classical).",
        "Broad-spectrum epilepsy efficacy; renal-only clearance; zero interactions.",
        "Signature adverse effect: IRRITABILITY/behavioural changes (to psychosis-like reactions).",
        "Class suicidality warning.",
        "Dose 1000-3000 mg/day BD.",
        "Off-label aggression/anxiety roles.",
      ],
      pyqConcepts: [
        "Mechanism/target of Levetiracetam",
        "Key adverse effect: Psychosis-like reactions",
        "Dosing and titration of Levetiracetam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Levetiracetam develops psychosis-like reactions — next best step?",
        "When to choose Levetiracetam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: SV2A synaptic-vesicle protein (ligand — reduces transmitter release)",
        "Most common side effects: Sedation and fatigue, Irritability, agitation, and behavioural change, Dizziness and asthenia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The SV2A story: a completely non-classical anticonvulsant mechanism — vesicle-protein binding — with renal-only clearance and zero interaction profile.",
        "The behavioural tax: irritability and agitation are the signature adverse effect — the anticonvulsant psychiatric patients' families need warned about.",
        "The paradox use: despite (or reflecting) the behavioural profile, low-dose levetiracetam has selected aggression-augmentation use.",
        "The clean-pharmacology prize: no interactions, no enzyme induction — the anticonvulsant for the complex-medication patient.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SV2A synaptic-VESICLE protein ligand (non-classical).",
    "Broad-spectrum epilepsy efficacy; renal-only clearance; zero interactions.",
    "Signature adverse effect: IRRITABILITY/behavioural changes (to psychosis-like reactions).",
    "Class suicidality warning.",
    "Dose 1000-3000 mg/day BD.",
    "Off-label aggression/anxiety roles.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — epilepsy — focal and generalised (broad spectrum)",
      presentation: "A patient presenting with epilepsy — focal and generalised (broad spectrum), started on Levetiracetam.",
      history: "A adult patient presents with a epilepsy — focal and generalised (broad spectrum) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with epilepsy — focal and generalised (broad spectrum); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Epilepsy — focal and generalised (broad spectrum). Differentials are considered and excluded clinically.",
      rationale: "Levetiracetam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Anticonvulsant) with strong evidence in this condition.",
      management: "Started at 250-500 mg twice daily, titrated to 1000-3000 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Levetiracetam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Anticonvulsant comparison — choosing within the class",
      primaryDrug: "Levetiracetam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "SV2A synaptic-vesicle protein (ligand — reduces transmitter release)",
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
              drug: "Tiagabine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "7 hours (BD dosing; XR daily).",
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
              drug: "Pregabalin",
              value: "Agent-specific.",
            },
            {
              drug: "Topiramate",
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
              drug: "Pregabalin",
              value: "Agent-specific.",
            },
            {
              drug: "Topiramate",
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
          primaryValue: "The behaviourally-noisy SV2A anticonvulsant",
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
      description: "Levetiracetam reaches peak plasma concentration and begins acting at its molecular target (SV2A synaptic-vesicle protein (ligand — reduces transmitter release)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and fatigue, irritability, agitation, and behavioural change, dizziness and asthenia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Seizure control within titration; behavioural effects early.)",
      title: "Therapeutic effect builds",
      description: "Seizure control within titration; behavioural effects early. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Levetiracetam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Levetiracetam take to work?",
      answer: "Seizure control within titration; behavioural effects early.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Levetiracetam?",
      answer: "The most frequently reported effects are: Sedation and fatigue, Irritability, agitation, and behavioural change, Dizziness and asthenia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Levetiracetam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Levetiracetam habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Levetiracetam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Levetiracetam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Levetiracetam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), levetiracetam monograph, p. 62",
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
        source: "FDA Prescribing Information for Keppra (Levetiracetam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for levetiracetam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Levetiracetam",
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
      name: "Epilepsy — focal and generalised (broad spectrum)",
      relationship: "primary",
    },
    {
      name: "Myoclonic and absence seizures",
      relationship: "primary",
    },
    {
      name: "Aggression and impulsivity (off-label)",
      relationship: "off-label",
    },
    {
      name: "Anxiety (adjunct, selected)",
      relationship: "off-label",
    },
    {
      name: "Mania/bipolar (adjunct, weak)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Levetiracetam",
      type: "drug",
      href: "/drugs/levetiracetam",
      note: "The drug you're reading about",
    },
    {
      label: "Anticonvulsant",
      type: "class",
      href: "#mechanism",
      note: "Anticonvulsant (SV2A Ligand)",
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
      label: "SV2A synaptic-vesicle protein (ligand — reduces transmitter release)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Epilepsy — focal and generalised (broad spectrum)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Myoclonic and absence seizures",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Aggression and impulsivity (off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Psychosis-like reactions",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Suicidality signal (antiepileptic class)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and fatigue",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Levetiracetam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The SV2A-ligand oddity — clean anticonvulsant pharmacology with a psychiatric behavioural footnote.",
    summary: "Levetiracetam is a prescription medicine used to treat epilepsy — focal and generalised (broad spectrum). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Levetiracetam is a modern anti-seizure medicine with an unusually clean profile — few interactions and simple kidney-only clearance. Its one well-known quirk is behavioural: some people (especially children) become irritable or agitated on it, so families are warned in advance, and the dose is adjusted or stopped if this happens.",
    sideEffects: "The most common side effects are: sedation and fatigue, irritability, agitation, and behavioural change, dizziness and asthenia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Psychosis-like reactions and Suicidality signal (antiepileptic class). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: behavioural/irritability review (early weeks and every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Alcohol and CNS depressants, Essentially no pharmacokinetic interactions. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Levipil",
        manufacturer: "Intas",
        strengths: "250-1000 mg",
      },
      {
        name: "Levera",
        manufacturer: "Sun",
        strengths: "250-1000 mg",
      },
      {
        name: "Levetiracetam generic + Jan Aushadhi",
        manufacturer: "multiple",
        strengths: "250-1000 mg",
      },
    ],
    typicalDoses: "500 mg bd → 1000-1500 mg bd.",
    prescribingScenarios: [
      "Epilepsy co-management with neurology.",
      "The interaction-clean anticonvulsant for complex patients.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Behavioural review at every visit.",
    patientCounselling: [
      "Report irritability or mood change early.",
      "No food or interaction restrictions.",
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
    note: "Generic levetiracetam widely stocked.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Anticonvulsants",
    members: [
      {
        name: "Levetiracetam",
        slug: "levetiracetam",
        relationship: "This guide",
        distinguishing: "The behaviourally-noisy SV2A anticonvulsant",
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
    study: "20 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Levetiracetam primarily act on?",
      options: [
        "SV2A synaptic-vesicle protein (ligand — reduces transmitter release)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Levetiracetam acts primarily at SV2A synaptic-vesicle protein (ligand — reduces transmitter release). Levetiracetam binds the SV2A synaptic-vesicle protein, reducing preterminal transmitter release — an anticonvulsant mechanism with no ion-channel or GABA involvement.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Levetiracetam?",
      options: [
        "Sedation and fatigue",
        "Irritability, agitation, and behavioural change",
        "Dizziness and asthenia",
        "Weight gain",
      ],
      correctIndex: 0,
      explanation: "Sedation and fatigue — The commonest effects.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Levetiracetam for epilepsy?",
      options: ["1000-3000 mg/day", "3000 mg/day (to 4000 specialist)", "1000-3000 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For epilepsy: start 250-500 mg twice daily, target 1000-3000 mg/day, maximum 3000 mg/day (to 4000 specialist). Increase by 500 mg/week to 1000-1500 mg bd",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Levetiracetam in two sentences.",
      answer: "Levetiracetam binds the SV2A synaptic-vesicle protein, reducing preterminal transmitter release — an anticonvulsant mechanism with no ion-channel or GABA involvement. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Levetiracetam.",
      answer: "Epilepsy — focal and generalised (broad spectrum), Myoclonic and absence seizures, Aggression and impulsivity (off-label), Anxiety (adjunct, selected). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Levetiracetam and how you would manage it.",
      answer: "Psychosis-like reactions: Hallucinations and paranoia reported. Management: Stop; reassess.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Levetiracetam require?",
      answer: "Behavioural/irritability review (Early weeks and every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Levetiracetam that separates safe prescribers from unsafe ones.",
      answer: "The SV2A story: a completely non-classical anticonvulsant mechanism — vesicle-protein binding — with renal-only clearance and zero interaction profile.",
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
      checkpoint: "You now know what Levetiracetam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Levetiracetam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Levetiracetam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Levetiracetam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Levetiracetam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Levetiracetam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Seizure control within titration; behavioural effects early.",
    ],
    ifItWorks: [
      "Continue Levetiracetam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Levetiracetam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Levetiracetam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Epilepsy",
        starting: "250-500 mg twice daily",
        titration: "Increase by 500 mg/week to 1000-1500 mg bd",
        target: "1000-3000 mg/day",
        max: "3000 mg/day (to 4000 specialist)",
      },
    ],
    dosageForms: ["Tablets 250-1000 mg", "XR once-daily forms", "Solution"],
    dosingTips: [
      "Warn families about irritability at initiation.",
      "BD dosing (XR for once-daily).",
      "Renal dosing by CrCl.",
    ],
    overdose: [
      "Overdose with Levetiracetam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Levetiracetam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 7 hours (BD dosing; XR daily)..",
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
    potentialAdvantages: ["Zero interactions; renal-only.", "Broad-spectrum efficacy.", "Pregnancy-preferred anticonvulsant."],
    potentialDisadvantages: [
      "Behavioural adverse-effect signature.",
      "Irritability limit in psychiatric patients.",
      "Class suicidality warning.",
    ],
    primaryTargetSymptoms: ["Focal and generalised seizures", "Aggression (off-label)"],
    pearls: [
      "The SV2A story: a completely non-classical anticonvulsant mechanism — vesicle-protein binding — with renal-only clearance and zero interaction profile.",
      "The behavioural tax: irritability and agitation are the signature adverse effect — the anticonvulsant psychiatric patients' families need warned about.",
      "The paradox use: despite (or reflecting) the behavioural profile, low-dose levetiracetam has selected aggression-augmentation use.",
      "The clean-pharmacology prize: no interactions, no enzyme induction — the anticonvulsant for the complex-medication patient.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
