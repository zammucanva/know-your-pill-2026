import type { Drug } from "../types";

/**
 * Alprazolam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), alprazolam monograph (book p. 3)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const alprazolam: Drug = {
  /* ---- Identity ---- */
  slug: "alprazolam",
  genericName: "Alprazolam",
  brandNames: ["Xanax", "Xanax XR", "Alprax / Restyl (India)"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine",
  drugClassFullName: "Benzodiazepine (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepines", "Alprazolam"],
  /* ---- Hero / summary ---- */
  tagline: "The panic specialist with the hardest withdrawal — the most prescribed and most dependence-prone benzodiazepine.",
  summary: "Alprazolam is a high-potency, short-half-life benzodiazepine famous for rapid panic relief and infamous for the most severe dependence and discontinuation syndrome in the class: its 6–12 hour half-life produces inter-dose withdrawal that patients experience as returning anxiety, driving dose escalation. SSRIs are the long-term panic answer; alprazolam remains valuable as a 2–4 week bridge at the start of SSRI treatment or for rare PRN use. Schedule X in India reflects its abuse record.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Alprazolam — from its molecular target (GABA-A receptor benzodiazepine site (high-potency PAM)) to clinical effect.",
    "List the FDA-approved and off-label uses of Alprazolam.",
    "Predict the common and serious side effects of Alprazolam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Alprazolam.",
    "Compare Alprazolam with other benzodiazepines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Alprazolam is a high-potency (triazolo) benzodiazepine GABA-A PAM — the class mechanism at greater receptor potency with a short half-life.",
    molecularTarget: "GABA-A receptor benzodiazepine site (high-potency PAM)",
    effect: "Rapid, powerful anxiolysis with antidepressant-adjacent effects reported — and the sharpest inter-dose withdrawal of the class.",
    steps: [
      "High-affinity benzodiazepine-site binding — anxiolysis at lower doses than diazepam-equivalents.",
      "Short half-life (6–12 h) plus active metabolite (alpha-hydroxyalprazolam, ~as potent, short-acting).",
      "Inter-dose symptom return (intermittent withdrawal) drives the escalating-dose pattern.",
      "Some evidence for mild antidepressant effect (unique-ish among benzos).",
    ],
    pharmacokinetics: "Rapid complete absorption (peak 1–2 h); XR smooths the peaks.",
    halfLife: "6–12 hours (short); XR extends effective coverage but not the dependence story.",
    activeMetabolite: "Alpha-hydroxyalprazolam (similar potency, short half-life).",
    metabolism: "Hepatic CYP3A4.",
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
        label: "Alprazolam",
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
    "GABA-A receptor (benzodiazepine site — high-potency PAM)",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Generalised anxiety disorder (short-term)",
      status: "fda-approved",
      description: "2–4 week courses; the elderly need half doses.",
    },
    {
      name: "Panic disorder",
      status: "fda-approved",
      description: "Rapid relief — but the dependence/withdrawal severity makes SSRIs the long-term answer and alprazolam at most a bridge.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Alprazolam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      text: "As per class: concurrent opioid use causes profound sedation, respiratory depression, and death.",
    },
    {
      title: "Dependence, abuse, and withdrawal",
      text: "Alprazolam's short half-life produces inter-dose withdrawal and the most severe discontinuation syndrome of the benzodiazepines — taper with particular care; abuse liability is high (Schedule X in India).",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "Dose-related, particularly early.",
      management: "Dose timing.",
    },
    {
      name: "Inter-dose anxiety return",
      frequency: "common",
      severity: "moderate",
      description: "The short half-life signature — morning anxiety after an evening dose.",
      management: "Consolidate dosing; consider XR; convert to a longer-acting agent for tapering.",
    },
    {
      name: "Cognitive and memory impairment",
      frequency: "common",
      severity: "moderate",
      description: "Amnesia and blunted processing at higher doses.",
      management: "Dose review.",
    },
    {
      name: "Dependence and tolerance",
      frequency: "very-common",
      severity: "severe",
      description: "The class-worst: escalation and craving patterns resemble short-acting opioids in speed.",
      management: "Short courses; convert-to-diazepam tapering.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Severe withdrawal syndrome",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Alprazolam discontinuation is the class benchmark for severity: rebound panic, perceptual disturbance, seizures.",
      management: "Convert to diazepam equivalence and taper over weeks-months; never stop abruptly.",
    },
    {
      name: "Respiratory depression with opioids",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The boxed-warning combination.",
      management: "Avoid opioids.",
    },
    {
      name: "Misuse and diversion",
      frequency: "common",
      severity: "severe",
      description: "High street value and misuse potential — Schedule X in India.",
      management: "Small quantities; tablet-count reviews.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Dependence and dose-escalation review",
      frequency: "Every visit — no automatic repeats",
      rationale: "The escalation pattern is the failure mode.",
    },
    {
      parameter: "Prescription quantity limits",
      frequency: "Each prescription",
      rationale: "Small dispenses; Schedule X register in India.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "contraindicated",
      mechanism: "Respiratory depression and death.",
      action: "Avoid.",
    },
    {
      drug: "Alcohol",
      severity: "major",
      mechanism: "Additive sedation and misuse synergy.",
      action: "Counsel explicitly.",
    },
    {
      drug: "Strong CYP3A4 inhibitors (ketoconazole, clarithromycin, ritonavir)",
      severity: "major",
      mechanism: "Raise alprazolam levels — excessive sedation.",
      action: "Reduce dose or avoid; grapefruit juice caution.",
    },
    {
      drug: "Fluoxetine and fluvoxamine",
      severity: "moderate",
      mechanism: "3A4/1A2 effects modestly raise levels.",
      action: "Observe.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "Class pregnancy considerations: small oral-cleft first-trimester signal and floppy-infant/withdrawal near term. Prefer avoiding regular use in pregnancy.",
    lactation: "Passes into milk with infant sedation possible — prefer lorazepam if a benzodiazepine is essential while breastfeeding.",
  },
  renalAdjustment: "Standard caution; start lower in significant impairment.",
  hepaticAdjustment: "CYP3A4 metabolism — reduce dose in liver disease; the elderly start at 0.25 mg.",
  /* ---- Education ---- */
  patientExplanation: "Alprazolam is a strong, fast-acting anti-anxiety medicine — the most potent of its family in common use. Its strength is also its trap: taken regularly, the calm wears off between doses and the dose creeps up, and stopping it suddenly causes the worst withdrawal of its class. It is best used for short periods while a safer long-term medicine (an antidepressant) takes effect.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Alprazolam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The dependence mathematics: short half-life + high potency = fastest tolerance, hardest withdrawal — alprazolam is the class maximum on both axes.",
    "Bridge design: alprazolam 2–4 weeks while the SSRI builds — then taper the bridge off.",
    "The taper manoeuvre: convert to diazepam equivalent, then reduce 10–25% per step over weeks-months.",
    "XR smooths inter-dose troughs but does not change the dependence story — only the surface of it.",
    "Schedule X in India: register-maintained, small-quantity prescribing — treat repeats as a review trigger.",
    "Elderly: 0.25 mg is a real dose — falls at night are the harm pathway.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Alprazolam: Alprazolam is a high-potency (triazolo) benzodiazepine GABA-A PAM — the class mechanism at greater receptor potency with a short half-life.",
        "Uses of Alprazolam: Generalised anxiety disorder (short-term); Panic disorder",
        "Mechanism: high-potency triazolo-benzodiazepine GABA-A PAM.",
        "Half-life 6–12 h (shortest common clinical benzo with oxazepam-like brevity) — inter-dose withdrawal.",
      ],
      practical: [
        "Prescribe Alprazolam for generalised anxiety disorder (short-term) with dose, timing, and duration.",
        "Outline the monitoring plan: Dependence and dose-escalation review (Every visit — no automatic repeats); Prescription quantity limits (Each prescription)",
      ],
      longAnswer: [
        "Alprazolam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: high-potency triazolo-benzodiazepine GABA-A PAM.",
        "Half-life 6–12 h (shortest common clinical benzo with oxazepam-like brevity) — inter-dose withdrawal.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: high-potency triazolo-benzodiazepine GABA-A PAM.",
        "Half-life 6–12 h (shortest common clinical benzo with oxazepam-like brevity) — inter-dose withdrawal.",
        "Class-WORST discontinuation syndrome (rebound panic, seizures).",
        "CYP3A4 metabolism — inhibitors raise levels.",
        "Uses: GAD and panic (short-term); SSRIs are the long-term panic answer.",
        "Schedule X in India (highest control among benzos there).",
      ],
      pyqConcepts: [
        "Mechanism/target of Alprazolam",
        "Key adverse effect: Severe withdrawal syndrome",
        "Dosing and titration of Alprazolam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Alprazolam develops severe withdrawal syndrome — next best step?",
        "When to choose Alprazolam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A receptor benzodiazepine site (high-potency PAM)",
        "Most common side effects: Sedation and drowsiness, Inter-dose anxiety return, Cognitive and memory impairment",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The escalation trap: inter-dose withdrawal reads as 'my anxiety is worse' — the answer is a taper plan, not a dose increase.",
        "0.5 mg alprazolam ≈ 10 mg diazepam — the conversion that structures the taper.",
        "Bridge, don't build: 2–4 weeks alongside an SSRI, then come down.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: high-potency triazolo-benzodiazepine GABA-A PAM.",
    "Half-life 6–12 h (shortest common clinical benzo with oxazepam-like brevity) — inter-dose withdrawal.",
    "Class-WORST discontinuation syndrome (rebound panic, seizures).",
    "CYP3A4 metabolism — inhibitors raise levels.",
    "Uses: GAD and panic (short-term); SSRIs are the long-term panic answer.",
    "Schedule X in India (highest control among benzos there).",
    "Taper by conversion to diazepam.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — generalised anxiety disorder (short-term)",
      presentation: "A patient presenting with generalised anxiety disorder (short-term), started on Alprazolam.",
      history: "A adult patient presents with a generalised anxiety disorder (short-term) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with generalised anxiety disorder (short-term); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Generalised anxiety disorder (short-term). Differentials are considered and excluded clinically.",
      rationale: "Alprazolam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine) with strong evidence in this condition.",
      management: "Started at 0.25–0.5 mg three times daily, titrated to 1–4 mg/day (up to 6) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Alprazolam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine comparison — choosing within the class",
      primaryDrug: "Alprazolam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A receptor benzodiazepine site (high-potency PAM)",
          comparisons: [
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
            {
              drug: "Chlordiazepoxide",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "6–12 hours (short); XR extends effective coverage but not the dependence story.",
          comparisons: [
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
            {
              drug: "Chlordiazepoxide",
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High — potency-driven.",
          comparisons: [
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
            {
              drug: "Chlordiazepoxide",
              value: "High — useful in withdrawal.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The highest-potency anxiolytic with the class-worst withdrawal",
          comparisons: [
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
      description: "Alprazolam reaches peak plasma concentration and begins acting at its molecular target (GABA-A receptor benzodiazepine site (high-potency PAM)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, inter-dose anxiety return, cognitive and memory impairment). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Oral: 30–60 min (peak 1–2 h); XR slower and smoother.)",
      title: "Therapeutic effect builds",
      description: "Oral: 30–60 min (peak 1–2 h); XR slower and smoother. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Alprazolam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Alprazolam take to work?",
      answer: "Oral: 30–60 min (peak 1–2 h); XR slower and smoother.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Alprazolam?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Inter-dose anxiety return, Cognitive and memory impairment, Dependence and tolerance. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Alprazolam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Alprazolam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Alprazolam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Alprazolam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Alprazolam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), alprazolam monograph, p. 3",
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
        source: "FDA Prescribing Information for Xanax (Alprazolam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for alprazolam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Alprazolam",
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
    {
      name: "Oxazepam",
      slug: "oxazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
  ],
  relatedConditions: [
    {
      name: "Generalised anxiety disorder (short-term)",
      relationship: "primary",
    },
    {
      name: "Panic disorder",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Alprazolam",
      type: "drug",
      href: "/drugs/alprazolam",
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
      label: "GABA-A receptor benzodiazepine site (high-potency PAM)",
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
      label: "Generalised anxiety disorder (short-term)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Panic disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Severe withdrawal syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Respiratory depression with opioids",
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
      label: "Patient Guide — Alprazolam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The panic specialist with the hardest withdrawal — the most prescribed and most dependence-prone benzodiazepine.",
    summary: "Alprazolam is a prescription medicine used to treat generalised anxiety disorder (short-term). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Alprazolam is a strong, fast-acting anti-anxiety medicine — the most potent of its family in common use. Its strength is also its trap: taken regularly, the calm wears off between doses and the dose creeps up, and stopping it suddenly causes the worst withdrawal of its class. It is best used for short periods while a safer long-term medicine (an antidepressant) takes effect.",
    sideEffects: "The most common side effects are: sedation and drowsiness, inter-dose anxiety return, cognitive and memory impairment, dependence and tolerance. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Severe withdrawal syndrome and Respiratory depression with opioids. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: dependence and dose-escalation review (every visit — no automatic repeats); prescription quantity limits (each prescription). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol, Strong CYP3A4 inhibitors (ketoconazole, clarithromycin, ritonavir), Fluoxetine and fluvoxamine. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Restyl",
        manufacturer: "Alkem/legacy",
        strengths: "0.25–1 mg",
      },
      {
        name: "Alprax",
        manufacturer: "Ranbaxy legacy",
        strengths: "0.25–1 mg",
      },
      {
        name: "Alprazolam generic",
        manufacturer: "multiple",
        strengths: "0.25–1 mg",
      },
    ],
    typicalDoses: "Panic 1–4 mg/day divided; GAD 0.75–2 mg; elderly half.",
    prescribingScenarios: [
      "Panic-bridge prescriptions with written stop dates.",
      "The most commonly misused psychotropic in India's street market — prescribing discipline is the intervention.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Schedule X register; tablet counts; every repeat is a review.",
    patientCounselling: [
      "Written stop date with the first prescription.",
      "The between-dose anxiety is the medicine, not your illness returning.",
      "Never combine with alcohol or opioids.",
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
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Benzodiazepines",
    members: [
      {
        name: "Alprazolam",
        slug: "alprazolam",
        relationship: "This guide",
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
      question: "Which molecular target does Alprazolam primarily act on?",
      options: [
        "GABA-A receptor benzodiazepine site (high-potency PAM)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Alprazolam acts primarily at GABA-A receptor benzodiazepine site (high-potency PAM). Alprazolam is a high-potency (triazolo) benzodiazepine GABA-A PAM — the class mechanism at greater receptor potency with a short half-life.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Alprazolam?",
      options: ["Sedation and drowsiness", "Inter-dose anxiety return", "Cognitive and memory impairment", "Dependence and tolerance"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — Dose-related, particularly early.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Alprazolam for panic disorder (ir)?",
      options: [
        "1–4 mg/day (up to 6)",
        "4 mg/day (10 mg exceptional, short-term)",
        "1–4 mg/day (up to 6) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For panic disorder (ir): start 0.25–0.5 mg three times daily, target 1–4 mg/day (up to 6), maximum 4 mg/day (10 mg exceptional, short-term). Increase by ≤ 0.5 mg/day every 3–4 days",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Alprazolam in two sentences.",
      answer: "Alprazolam is a high-potency (triazolo) benzodiazepine GABA-A PAM — the class mechanism at greater receptor potency with a short half-life. Net effect: Rapid, powerful anxiolysis with antidepressant-adjacent effects reported — and the sharpest inter-dose withdrawal of the class.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Alprazolam.",
      answer: "Generalised anxiety disorder (short-term), Panic disorder. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Alprazolam and how you would manage it.",
      answer: "Severe withdrawal syndrome: Alprazolam discontinuation is the class benchmark for severity: rebound panic, perceptual disturbance, seizures. Management: Convert to diazepam equivalence and taper over weeks-months; never stop abruptly.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Alprazolam require?",
      answer: "Dependence and dose-escalation review (Every visit — no automatic repeats); Prescription quantity limits (Each prescription)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Alprazolam that separates safe prescribers from unsafe ones.",
      answer: "The escalation trap: inter-dose withdrawal reads as 'my anxiety is worse' — the answer is a taper plan, not a dose increase.",
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
      checkpoint: "You now know what Alprazolam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Alprazolam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Alprazolam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Alprazolam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Alprazolam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Alprazolam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Oral: 30–60 min (peak 1–2 h); XR slower and smoother.",
    ],
    ifItWorks: [
      "Continue Alprazolam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Alprazolam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Alprazolam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "High — potency-driven.",
    dosing: [
      {
        indication: "Panic disorder (IR)",
        starting: "0.25–0.5 mg three times daily",
        titration: "Increase by ≤ 0.5 mg/day every 3–4 days",
        target: "1–4 mg/day (up to 6)",
        max: "4 mg/day (10 mg exceptional, short-term)",
      },
      {
        indication: "GAD (short course)",
        starting: "0.25 mg three times daily",
        titration: "Lowest effective; 2–4 weeks",
        target: "0.75–2 mg/day",
        max: "4 mg/day",
      },
      {
        indication: "XR (panic/GAD)",
        starting: "0.5–1 mg once morning",
        titration: "Increase by ≤ 1 mg every 3–4 days",
        target: "3–6 mg XR once daily",
        max: "6 mg/day XR",
      },
      {
        indication: "Elderly",
        starting: "0.25 mg twice daily",
        titration: "Half all increments",
        target: "0.5–1 mg/day",
        max: "Reduced target",
      },
    ],
    dosageForms: ["Tablets 0.25, 0.5, 1, 2 mg", "XR tablets 0.5–3 mg", "Orally disintegrating (some markets)"],
    dosingTips: [
      "Plan the exit before the first dose: 2–4 week bridge, written taper date.",
      "Convert to diazepam (0.5 mg alprazolam ≈ 10 mg diazepam) for tapering.",
      "XR for trough smoothness; IR for the bridge only.",
      "Tablet counts and small dispenses for misuse surveillance.",
    ],
    overdose: [
      "Overdose with Alprazolam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Alprazolam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 6–12 hours (short); XR extends effective coverage but not the dependence story..",
      "Metabolism: Hepatic CYP3A4..",
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
      "Fastest powerful anxiolysis in the class.",
      "XR smoothness option.",
      "Genuine panic relief when used with discipline.",
    ],
    potentialDisadvantages: ["Class-worst dependence and withdrawal.", "Misuse/diversion record (Schedule X).", "Inter-dose anxiety escalates doses.", "Not a long-term answer for anything."],
    primaryTargetSymptoms: ["Panic attacks", "Acute generalised anxiety", "SSRI-bridge period"],
    pearls: [
      "The escalation trap: inter-dose withdrawal reads as 'my anxiety is worse' — the answer is a taper plan, not a dose increase.",
      "0.5 mg alprazolam ≈ 10 mg diazepam — the conversion that structures the taper.",
      "Bridge, don't build: 2–4 weeks alongside an SSRI, then come down.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
