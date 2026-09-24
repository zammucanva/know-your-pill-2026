import type { Drug } from "../types";

/**
 * Clonazepam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), clonazepam monograph (book p. 26)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const clonazepam: Drug = {
  /* ---- Identity ---- */
  slug: "clonazepam",
  genericName: "Clonazepam",
  brandNames: ["Klonopin", "Rivotril / Clonotril (India)"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine",
  drugClassFullName: "Benzodiazepine (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepines", "Clonazepam"],
  /* ---- Hero / summary ---- */
  tagline: "The anticonvulsant benzodiazepine — long-acting, high-potency, and the chronic-benzo trap in psychiatric clothing.",
  summary: "Clonazepam is a high-potency, long-acting benzodiazepine (half-life 30–40 h) that straddles neurology and psychiatry: FDA-approved for seizure disorders and panic disorder. Its long half-life smooths inter-dose anxiety better than alprazolam, but its high potency and long duration make withdrawal prolonged and its chronic-psychiatric use (anxiety, augmentation) a dependence trap that inpatients and outpatient services alike must actively unwind.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Clonazepam — from its molecular target (GABA-A benzodiazepine site (high-potency PAM); weak serotonin effects) to clinical effect.",
    "List the FDA-approved and off-label uses of Clonazepam.",
    "Predict the common and serious side effects of Clonazepam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Clonazepam.",
    "Compare Clonazepam with other benzodiazepines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Clonazepam is a high-potency long-acting benzodiazepine GABA-A PAM with serotonergic interactions — the anticonvulsant member of the psychiatric benzo shelf.",
    molecularTarget: "GABA-A benzodiazepine site (high-potency PAM); weak serotonin effects",
    effect: "Anxiolysis, anticonvulsant action, and long-duration coverage (30–40 h half-life).",
    steps: [
      "High-affinity GABA-A benzodiazepine-site binding (class mechanism at high potency).",
      "Long half-life (30–40 h) — once or twice daily dosing with smoother troughs than alprazolam.",
      "Anticonvulsant efficacy across seizure types — the neurology credential.",
      "Chronic use carries the full dependence profile — long-acting means long withdrawal.",
    ],
    pharmacokinetics: "Complete absorption; peak 1–4 h.",
    halfLife: "30–40 hours (long-acting).",
    activeMetabolite: "None clinically significant.",
    metabolism: "Hepatic CYP3A4 (and acetylation).",
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
        label: "Clonazepam",
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
  neurotransmitters: ["GABA", "Serotonin (5-HT)"],
  receptors: [
    "GABA-A receptor (benzodiazepine site — PAM)",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Seizure disorders — akinetic, myoclonic, absence seizures; Lennox-Gastaut",
      status: "fda-approved",
      description: "An anticonvulsant benzodiazepine (below).",
    },
    {
      name: "Panic disorder",
      status: "fda-approved",
      description: "Effective long-term-appearing option — but dependence discipline applies.",
    },
    {
      name: "Acute mania / agitation (adjunct, historic)",
      status: "off-label",
      description: "Classical Indian practice used IM clonazepam in mania; now largely replaced.",
    },
    {
      name: "Restless legs syndrome (severe)",
      status: "off-label",
      description: "Second-line behind dopamine agonists/alpha-2-delta agents.",
    },
    {
      name: "Social anxiety disorder",
      status: "off-label",
      description: "Evidence exists; dependence considerations dominate.",
    },
    {
      name: "Acute seizures (IV/IM acute contexts)",
      status: "guideline",
      description: "Acute interruption of seizure clusters.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Clonazepam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioids",
      severity: "absolute",
      rationale: "Respiratory depression.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Risks with opioids",
      text: "Class warning: sedation, respiratory depression, death with concurrent opioids.",
    },
    {
      title: "Dependence, abuse, withdrawal",
      text: "Long-acting high-potency profile: prolonged withdrawal syndrome; taper slowly over months.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "Dose-limiting, particularly with morning dosing.",
      management: "Bedtime-weighted dosing.",
    },
    {
      name: "Ataxia and incoordination",
      frequency: "common",
      severity: "moderate",
      description: "Motor effects at higher doses.",
      management: "Dose review.",
    },
    {
      name: "Behavioural changes (children)",
      frequency: "common",
      severity: "moderate",
      description: "Irritability and hyperactivity reported in paediatric epilepsy.",
      management: "Dose review; monitor.",
    },
    {
      name: "Cognitive blunting",
      frequency: "common",
      severity: "moderate",
      description: "Chronic-use effect.",
      management: "Regular justification review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Prolonged withdrawal syndrome",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Long half-life = slow-onset but PROLONGED withdrawal (weeks-months) with rebound anxiety, insomnia, perceptual changes, seizures.",
      management: "Very slow taper over months; conversion strategies as per benzo class.",
    },
    {
      name: "Respiratory depression with opioids",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Class boxed warning.",
      management: "Avoid opioids.",
    },
    {
      name: "Status epilepticus on abrupt withdrawal",
      frequency: "rare",
      severity: "life-threatening",
      description: "Both psychiatric and epilepsy patients.",
      management: "Never stop abruptly.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Dependence review",
      frequency: "Every visit for chronic users",
      rationale: "The long-acting trap: easy to start, slow to leave.",
    },
    {
      parameter: "Seizure frequency (epilepsy use)",
      frequency: "Ongoing",
      rationale: "Balancing benzo benefit against anticonvulsant polypharmacy.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "contraindicated",
      mechanism: "Respiratory depression.",
      action: "Avoid.",
    },
    {
      drug: "Alcohol/CNS depressants",
      severity: "major",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
    {
      drug: "CYP3A4 inhibitors",
      severity: "moderate",
      mechanism: "Raise levels.",
      action: "Observe.",
    },
    {
      drug: "Other anticonvulsants",
      severity: "moderate",
      mechanism: "Additive neurotoxicity (nystagmus, ataxia).",
      action: "Level/clinical monitoring.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "Class considerations: small oral-cleft signal and neonatal sedation/withdrawal; epilepsy decisions weigh untreated seizures against exposure — specialist neurology-obstetric planning.",
    lactation: "Passes into milk — infant sedation possible; usually compatible at low doses with monitoring.",
  },
  renalAdjustment: "Standard caution.",
  hepaticAdjustment: "Reduce dose in liver disease (3A4 metabolism).",
  /* ---- Education ---- */
  patientExplanation: "Clonazepam is a long-acting calming medicine used both for seizures and for panic disorder. Because it lasts a full day it avoids the between-dose dips of shorter medicines — but that same long action means that if it is stopped suddenly after regular use, withdrawal comes on slowly and lasts for weeks. Any stopping must be gradual and supervised.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Clonazepam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The neurology-psychiatry bridge drug: same molecule treats absence seizures and panic — understand it in both worlds.",
    "Long half-life cuts inter-dose rebound but extends withdrawal for weeks — the taper is months, not days.",
    "Historic Indian inpatient practice: IM clonazepam for mania — now a pharmacological footnote.",
    "RLS second-line behind gabapentinoids/dopamine agonists — augmentation, not monotherapy.",
    "Chronic clonazepam for 'anxiety' is the commonest inappropriate long-term benzo in Indian psychiatry — tapering programmes are the answer.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Clonazepam: Clonazepam is a high-potency long-acting benzodiazepine GABA-A PAM with serotonergic interactions — the anticonvulsant member of the psychiatric benzo shelf.",
        "Uses of Clonazepam: Seizure disorders — akinetic, myoclonic, absence seizures; Lennox-Gastaut; Panic disorder; Acute mania / agitation (adjunct, historic); Restless legs syndrome (severe)",
        "Mechanism: high-potency long-acting GABA-A PAM with anticonvulsant action.",
        "Half-life 30–40 h — the longest clinical psychiatric benzo (with diazepam metabolites).",
      ],
      practical: [
        "Prescribe Clonazepam for seizure disorders — akinetic, myoclonic, absence seizures; lennox-gastaut with dose, timing, and duration.",
        "Outline the monitoring plan: Dependence review (Every visit for chronic users); Seizure frequency (epilepsy use) (Ongoing)",
      ],
      longAnswer: [
        "Clonazepam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: high-potency long-acting GABA-A PAM with anticonvulsant action.",
        "Half-life 30–40 h — the longest clinical psychiatric benzo (with diazepam metabolites).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: high-potency long-acting GABA-A PAM with anticonvulsant action.",
        "Half-life 30–40 h — the longest clinical psychiatric benzo (with diazepam metabolites).",
        "Approved: seizures (akinetic, myoclonic, absence, Lennox-Gastaut) + panic disorder.",
        "Withdrawal is PROLONGED (weeks-months) — slow tapers.",
        "Off-label: RLS, social anxiety, mania adjunct (historic).",
      ],
      pyqConcepts: [
        "Mechanism/target of Clonazepam",
        "Key adverse effect: Prolonged withdrawal syndrome",
        "Dosing and titration of Clonazepam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Clonazepam develops prolonged withdrawal syndrome — next best step?",
        "When to choose Clonazepam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (high-potency PAM); weak serotonin effects",
        "Most common side effects: Sedation and drowsiness, Ataxia and incoordination, Behavioural changes (children)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Smoothest coverage, longest goodbye — the clonazepam trade.",
        "0.5 mg clonazepam ≈ 10 mg diazepam — the conversion for taper design.",
        "The neurology-psychiatry bridge drug: same molecule treats absence seizures and panic — understand it in both worlds.",
        "Long half-life cuts inter-dose rebound but extends withdrawal for weeks — the taper is months, not days.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: high-potency long-acting GABA-A PAM with anticonvulsant action.",
    "Half-life 30–40 h — the longest clinical psychiatric benzo (with diazepam metabolites).",
    "Approved: seizures (akinetic, myoclonic, absence, Lennox-Gastaut) + panic disorder.",
    "Withdrawal is PROLONGED (weeks-months) — slow tapers.",
    "Off-label: RLS, social anxiety, mania adjunct (historic).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — seizure disorders — akinetic, myoclonic, absence seizures; lennox-gastaut",
      presentation: "A patient presenting with seizure disorders — akinetic, myoclonic, absence seizures; lennox-gastaut, started on Clonazepam.",
      history: "A adult patient presents with a seizure disorders — akinetic, myoclonic, absence seizures; lennox-gastaut picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with seizure disorders — akinetic, myoclonic, absence seizures; lennox-gastaut; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Seizure disorders — akinetic, myoclonic, absence seizures; Lennox-Gastaut. Differentials are considered and excluded clinically.",
      rationale: "Clonazepam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine) with strong evidence in this condition.",
      management: "Started at 0.25 mg twice daily, titrated to 0.5–2 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Clonazepam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine comparison — choosing within the class",
      primaryDrug: "Clonazepam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A benzodiazepine site (high-potency PAM); weak serotonin effects",
          comparisons: [
            {
              drug: "Alprazolam",
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
          primaryValue: "30–40 hours (long-acting).",
          comparisons: [
            {
              drug: "Alprazolam",
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
              drug: "Alprazolam",
              value: "See product information and class comparison.",
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
              value: "See product information and class comparison.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High — the dose-limiting effect.",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "High — potency-driven.",
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
          primaryValue: "The long-acting anticonvulsant benzo — seizures and panic",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "The highest-potency anxiolytic with the class-worst withdrawal",
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
      description: "Clonazepam reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (high-potency PAM); weak serotonin effects). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, ataxia and incoordination, behavioural changes (children)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Oral: 30–60 min; anticonvulsant effect within an hour.)",
      title: "Therapeutic effect builds",
      description: "Oral: 30–60 min; anticonvulsant effect within an hour. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Clonazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Clonazepam take to work?",
      answer: "Oral: 30–60 min; anticonvulsant effect within an hour.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Clonazepam?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Ataxia and incoordination, Behavioural changes (children), Cognitive blunting. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Clonazepam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Clonazepam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Clonazepam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Clonazepam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Clonazepam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), clonazepam monograph, p. 26",
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
        source: "FDA Prescribing Information for Klonopin (Clonazepam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for clonazepam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Clonazepam",
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
      name: "Seizure disorders — akinetic, myoclonic, absence seizures; Lennox-Gastaut",
      relationship: "primary",
    },
    {
      name: "Panic disorder",
      relationship: "primary",
    },
    {
      name: "Acute mania / agitation (adjunct, historic)",
      relationship: "off-label",
    },
    {
      name: "Restless legs syndrome (severe)",
      relationship: "off-label",
    },
    {
      name: "Social anxiety disorder",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Clonazepam",
      type: "drug",
      href: "/drugs/clonazepam",
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
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-A benzodiazepine site (high-potency PAM); weak serotonin effects",
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
      label: "Seizure disorders — akinetic, myoclonic, absence seizures; Lennox-Gastaut",
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
      label: "Acute mania / agitation (adjunct, historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Prolonged withdrawal syndrome",
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
      label: "Patient Guide — Clonazepam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The anticonvulsant benzodiazepine — long-acting, high-potency, and the chronic-benzo trap in psychiatric clothing.",
    summary: "Clonazepam is a prescription medicine used to treat seizure disorders — akinetic, myoclonic, absence seizures; lennox-gastaut. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Clonazepam is a long-acting calming medicine used both for seizures and for panic disorder. Because it lasts a full day it avoids the between-dose dips of shorter medicines — but that same long action means that if it is stopped suddenly after regular use, withdrawal comes on slowly and lasts for weeks. Any stopping must be gradual and supervised.",
    sideEffects: "The most common side effects are: sedation and drowsiness, ataxia and incoordination, behavioural changes (children), cognitive blunting. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Prolonged withdrawal syndrome and Respiratory depression with opioids. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: dependence review (every visit for chronic users); seizure frequency (epilepsy use) (ongoing). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol/CNS depressants, CYP3A4 inhibitors, Other anticonvulsants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Rivotril / Clonotril",
        manufacturer: "Roche legacy/Intas-Torrent network",
        strengths: "0.25–2 mg",
      },
      {
        name: "Clonazepam generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "0.5–2 mg",
      },
    ],
    typicalDoses: "Panic 0.5–2 mg/day; seizures 1.5–6 mg/day.",
    prescribingScenarios: [
      "Panic disorder maintenance (with discipline).",
      "Epilepsy co-management with neurology.",
      "The classic long-term benzo found in psychiatric case sheets — tapering programmes.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Every repeat = dependence review; document taper plans at each visit.",
    patientCounselling: [
      "Long-acting means long withdrawal — any stopping is gradual over months.",
      "Bedtime dosing for sedation.",
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
    note: "Generic tablets widely available.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Benzodiazepines",
    members: [
      {
        name: "Clonazepam",
        slug: "clonazepam",
        relationship: "This guide",
        distinguishing: "The long-acting anticonvulsant benzo — seizures and panic",
      },
      {
        name: "Alprazolam",
        slug: "alprazolam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "The highest-potency anxiolytic with the class-worst withdrawal",
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
      question: "Which molecular target does Clonazepam primarily act on?",
      options: [
        "GABA-A benzodiazepine site (high-potency PAM); weak serotonin effects",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Clonazepam acts primarily at GABA-A benzodiazepine site (high-potency PAM); weak serotonin effects. Clonazepam is a high-potency long-acting benzodiazepine GABA-A PAM with serotonergic interactions — the anticonvulsant member of the psychiatric benzo shelf.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Clonazepam?",
      options: ["Sedation and drowsiness", "Ataxia and incoordination", "Behavioural changes (children)", "Cognitive blunting"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — Dose-limiting, particularly with morning dosing.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Clonazepam for panic disorder?",
      options: ["0.5–2 mg/day", "4 mg/day (maximum, exceptional)", "0.5–2 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For panic disorder: start 0.25 mg twice daily, target 0.5–2 mg/day, maximum 4 mg/day (maximum, exceptional). Increase by 0.125–0.25 mg every 3 days",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Clonazepam in two sentences.",
      answer: "Clonazepam is a high-potency long-acting benzodiazepine GABA-A PAM with serotonergic interactions — the anticonvulsant member of the psychiatric benzo shelf. Net effect: Anxiolysis, anticonvulsant action, and long-duration coverage (30–40 h half-life).",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Clonazepam.",
      answer: "Seizure disorders — akinetic, myoclonic, absence seizures; Lennox-Gastaut, Panic disorder, Acute mania / agitation (adjunct, historic), Restless legs syndrome (severe). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Clonazepam and how you would manage it.",
      answer: "Prolonged withdrawal syndrome: Long half-life = slow-onset but PROLONGED withdrawal (weeks-months) with rebound anxiety, insomnia, perceptual changes, seizures. Management: Very slow taper over months; conversion strategies as per benzo class.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Clonazepam require?",
      answer: "Dependence review (Every visit for chronic users); Seizure frequency (epilepsy use) (Ongoing)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Clonazepam that separates safe prescribers from unsafe ones.",
      answer: "Smoothest coverage, longest goodbye — the clonazepam trade.",
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
      checkpoint: "You now know what Clonazepam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Clonazepam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Clonazepam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Clonazepam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Clonazepam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Clonazepam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Oral: 30–60 min; anticonvulsant effect within an hour.",
    ],
    ifItWorks: [
      "Continue Clonazepam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Clonazepam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Clonazepam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "High — the dose-limiting effect.",
    dosing: [
      {
        indication: "Panic disorder",
        starting: "0.25 mg twice daily",
        titration: "Increase by 0.125–0.25 mg every 3 days",
        target: "0.5–2 mg/day",
        max: "4 mg/day (maximum, exceptional)",
      },
      {
        indication: "Seizures (adjunct)",
        starting: "0.5 mg three times daily",
        titration: "Increase by 0.5–1 mg every 3 days (adults)",
        target: "1.5–6 mg/day",
        max: "20 mg/day (epilepsy, specialist)",
      },
      {
        indication: "RLS (off-label)",
        starting: "0.25–0.5 mg at night",
        titration: "Slow increases",
        target: "0.5–2 mg",
        max: "Low-dose ceiling",
      },
    ],
    dosageForms: ["Tablets 0.25, 0.5, 1, 2 mg", "Orally disintegrating (some markets)", "Injection (some markets)"],
    dosingTips: [
      "Bedtime-weighted dosing converts sedation into sleep.",
      "Tapers run months: reduce by ≤ 0.25 mg steps at 1–2 week intervals.",
      "Elderly: half doses; falls surveillance.",
    ],
    overdose: [
      "Overdose with Clonazepam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Clonazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 30–40 hours (long-acting)..",
      "Metabolism: Hepatic CYP3A4 (and acetylation)..",
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
      "Long smooth coverage (no inter-dose rebound).",
      "Anticonvulsant dual action.",
      "Once-twice daily dosing.",
    ],
    potentialDisadvantages: ["Prolonged withdrawal.", "Full dependence profile.", "Cognitive blunting with chronic use.", "Behavioural effects in children."],
    primaryTargetSymptoms: ["Panic disorder", "Seizure control", "Restless legs (off-label)"],
    pearls: [
      "Smoothest coverage, longest goodbye — the clonazepam trade.",
      "0.5 mg clonazepam ≈ 10 mg diazepam — the conversion for taper design.",
      "The neurology-psychiatry bridge drug: same molecule treats absence seizures and panic — understand it in both worlds.",
      "Long half-life cuts inter-dose rebound but extends withdrawal for weeks — the taper is months, not days.",
      "Historic Indian inpatient practice: IM clonazepam for mania — now a pharmacological footnote.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
