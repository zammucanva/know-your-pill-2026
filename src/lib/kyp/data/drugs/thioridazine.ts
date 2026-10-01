import type { Drug } from "../types";

/**
 * Thioridazine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), thioridazine monograph (book p. 120)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const thioridazine: Drug = {
  /* ---- Identity ---- */
  slug: "thioridazine",
  genericName: "Thioridazine",
  brandNames: ["Melleril", "Mellerette"],
  drugClass: "typical-antipsychotic",
  drugClassLabel: "Typical Antipsychotic",
  drugClassFullName: "Typical (Conventional) Antipsychotic — Phenothiazine",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Typical Antipsychotics", "Thioridazine"],
  /* ---- Hero / summary ---- */
  tagline: "The pigment-retinopathy, QT-restricted last-line phenothiazine — reserved when others fail.",
  summary: "Thioridazine is a low-potency piperidine phenothiazine once favoured for its tolerability (little EPS) but now restricted: it prolongs the QT interval dose-dependently (retrograde ejaculation and pigmentary retinopathy are its classic signatures) and is reserved for patients who cannot take other antipsychotics. Baseline and follow-up ECGs are mandatory, and doses above 800 mg/day are prohibited.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Thioridazine — from its molecular target (D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects) to clinical effect.",
    "List the FDA-approved and off-label uses of Thioridazine.",
    "Predict the common and serious side effects of Thioridazine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Thioridazine.",
    "Compare Thioridazine with other typical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Low-potency piperidine phenothiazine with anticholinergic/alpha-1 binding and clinically important cardiac potassium-channel blockade (QT).",
    molecularTarget: "D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects",
    effect: "D2 antagonism across mesolimbic (antipsychotic), nigrostriatal (EPS), and tuberoinfundibular (prolactin) pathways — low potency with anticholinergic dominance — and a unique dose-dependent QT and retinal toxicity.",
    steps: [
      "Blocks D2 receptors — therapeutic antipsychotic effect at 65–75% occupancy.",
      "EPS emerges as occupancy passes ~80% — low potency with anticholinergic dominance — and a unique dose-dependent QT and retinal toxicity.",
      "Tuberoinfundibular blockade raises prolactin; nigrostriatal blockade produces parkinsonism and dystonia.",
      "Class-typical receptor binding determines the drug's adverse-effect texture.",
    ],
    pharmacokinetics: "See dosing and half-life; hepatic metabolism with renal excretion of metabolites.",
    halfLife: "Approximately 10–30 hours (agent-specific).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal and biliary metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Thioridazine",
        sublabel: "Typical antipsychotic",
        variant: "inhibit",
      },
      {
        id: "d2",
        label: "D2 receptor",
        sublabel: "Strongly blocked (65–80% occupancy)",
        variant: "target",
      },
      {
        id: "meso",
        label: "Mesolimbic pathway",
        sublabel: "Positive symptoms improve",
        variant: "output",
      },
      {
        id: "nigro",
        label: "Nigrostriatal pathway",
        sublabel: "EPS emerges",
        variant: "process",
      },
      {
        id: "tuber",
        label: "Tuberoinfundibular pathway",
        sublabel: "Prolactin rises",
        variant: "process",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "d2",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "d2",
        to: "meso",
        label: "treats psychosis",
      },
      {
        from: "d2",
        to: "nigro",
        label: "EPS / dystonia",
      },
      {
        from: "d2",
        to: "tuber",
        label: "hyperprolactinaemia",
      },
    ],
    caption: "Potent D2 blockade treats positive symptoms but the same mechanism in motor and pituitary pathways drives EPS and hyperprolactinaemia — efficacy and motor risk are two sides of one coin.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects",
  ],
  brainRegionIds: ["nucleus-accumbens", "substantia-nigra", "prefrontal-cortex"],
  pathwayIds: ["mesolimbic", "nigrostriatal", "tuberoinfundibular", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia — second-line (when other antipsychotics fail or are intolerable)",
      status: "fda-approved",
      description: "Restricted use: 'second-line because of... toxicity' — ECG monitoring mandatory.",
      ageGroup: "Adults",
    },
    {
      name: "Severe anxiety/behavioural disturbance (historic)",
      status: "guideline",
      description: "Historic low-dose use now discouraged.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Thioridazine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Fluoxetine, paroxetine, and other strong CYP2D6 inhibitors",
      severity: "absolute",
      rationale: "Raise thioridazine levels — amplifying QT risk.",
    },
    {
      name: "Other QT-prolonging drugs",
      severity: "absolute",
      rationale: "Additive QT effect.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "QT prolongation, torsades de pointes, and sudden death",
      text: "Thioridazine produces dose-dependent QT prolongation with a known risk of fatal arrhythmias. Use is restricted to second-line treatment of schizophrenia; ECG monitoring is required, and combination with QT-prolonging drugs or CYP2D6 inhibitors is contraindicated.",
    },
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Class boxed warning applies.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Extrapyramidal symptoms (parkinsonism)",
      frequency: "very-common",
      severity: "moderate",
      description: "Rigidity, bradykinesia, tremor — dose-dependent D2 signature.",
      management: "Reduce dose; anticholinergic.",
    },
    {
      name: "Akathisia",
      frequency: "common",
      severity: "moderate",
      description: "Restlessness — frequently mistaken for worsening psychosis.",
      management: "Reduce dose; propranolol.",
    },
    {
      name: "Hyperprolactinaemia",
      frequency: "common",
      severity: "moderate",
      description: "Amenorrhoea, galactorrhoea, sexual dysfunction.",
      management: "Ask directly; consider switch.",
    },
    {
      name: "Sedation",
      frequency: "common",
      severity: "mild",
      description: "Dose-related; more prominent with low-potency agents.",
      management: "Dose timing.",
    },
    {
      name: "QT prolongation and torsades",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Dose-dependent — the restricting toxicity; max 800 mg/day absolute.",
      management: "Baseline + follow-up ECG; stop if QTc > 500 ms; avoid QT drug combinations.",
    },
    {
      name: "Pigmentary retinopathy",
      frequency: "rare",
      severity: "severe",
      description: "Dose-related retinal pigment deposition — the classic thioridazine toxicity; irreversible.",
      management: "Dose ceiling; visual symptoms → ophthalmology; stop.",
    },
    {
      name: "Retrograde ejaculation",
      frequency: "common",
      severity: "mild",
      description: "The pharmacology-exam classic — alpha-1 blockade at ejaculation.",
      management: "Counsel; dose reduction; usually acceptable.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Rigidity, hyperthermia, autonomic instability, raised creatine kinase, altered consciousness — the class medical emergency.",
      management: "Stop immediately; ICU supportive care; dantrolene or bromocriptine.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "uncommon",
      severity: "severe",
      description: "Potentially irreversible involuntary movements; risk rises with age, duration, and female sex — a defining risk of chronic typical antipsychotics.",
      management: "Lowest effective dose; AIMS surveillance; reduce or switch on detection; VMAT2 inhibitors for severe cases.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "ECG (QTc)",
      frequency: "Baseline, at steady state, and after dose changes",
      rationale: "The mandatory thioridazine-specific surveillance.",
    },
    {
      parameter: "Ophthalmological review",
      frequency: "Baseline and with any visual symptoms",
      rationale: "Pigmentary retinopathy surveillance.",
    },
  ],
  interactions: [
    {
      drug: "Fluoxetine, paroxetine, and other strong CYP2D6 inhibitors",
      severity: "contraindicated",
      mechanism: "Raise thioridazine levels — amplifying QT risk.",
      action: "Contraindicated per label.",
    },
    {
      drug: "Other QT-prolonging drugs",
      severity: "contraindicated",
      mechanism: "Additive QT effect.",
      action: "Avoid.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Available data have not shown a major malformation signal for low-potency phenothiazines or butyrophenones, but third-trimester exposure can cause neonatal EPS and withdrawal. Relapse prevention in serious psychosis usually outweighs fetal risk — continue at the lowest effective dose with obstetric co-management.",
    lactation: "Small amounts pass into milk; infant sedation and EPS-like effects are monitored. Generally considered acceptable with infant monitoring.",
  },
  renalAdjustment: "Standard caution.",
  hepaticAdjustment: "Standard caution; hepatic metabolism (2D6).",
  /* ---- Education ---- */
  patientExplanation: "Thioridazine is an older antipsychotic kept in reserve for people who cannot take other medicines. It has two important safety checks: regular heart-tracing tests (ECG) because it can affect heart rhythm, and eye checks because long-term high doses can affect vision.",
  patientEducationPoints: [
    "Report stiffness, shakiness, restlessness, or unusual tongue/mouth movements early — these are treatable.",
    "Stand up slowly during the first week.",
    "Do not stop suddenly — discuss any change with your doctor.",
    "Benefit from Thioridazine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Three signature toxicities: QT (dose-dependent, ECG-mandatory), pigmentary retinopathy (dose-related, irreversible), retrograde ejaculation (the exam classic).",
    "Reserved status: only when other antipsychotics fail — the label itself says so.",
    "The 800 mg absolute ceiling exists because of dose-dependent toxicity, not efficacy.",
    "Low EPS was its selling point; cardiac and retinal toxicity are its reckoning.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Thioridazine: Low-potency piperidine phenothiazine with anticholinergic/alpha-1 binding and clinically important cardiac potassium-channel blockade (QT).",
        "Uses of Thioridazine: Schizophrenia — second-line (when other antipsychotics fail or are intolerable); Severe anxiety/behavioural disturbance (historic)",
        "Low-potency piperidine phenothiazine — restricted second-line.",
        "Signature: dose-dependent QT prolongation (max 800 mg) + pigmentary retinopathy + retrograde ejaculation.",
      ],
      practical: [
        "Prescribe Thioridazine for schizophrenia — second-line (when other antipsychotics fail or are intolerable) with dose, timing, and duration.",
        "Outline the monitoring plan: ECG (QTc) (Baseline, at steady state, and after dose changes); Ophthalmological review (Baseline and with any visual symptoms)",
      ],
      longAnswer: [
        "Thioridazine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Low-potency piperidine phenothiazine — restricted second-line.",
        "Signature: dose-dependent QT prolongation (max 800 mg) + pigmentary retinopathy + retrograde ejaculation.",
      ],
    },
    neetPg: {
      highYield: [
        "Low-potency piperidine phenothiazine — restricted second-line.",
        "Signature: dose-dependent QT prolongation (max 800 mg) + pigmentary retinopathy + retrograde ejaculation.",
        "ECG at baseline and steady state is mandatory.",
        "Little EPS — the original reason for its popularity.",
        "Class mechanism: D2 receptor blockade — efficacy equivalent across typicals; adverse effects differ by potency.",
      ],
      pyqConcepts: [
        "Mechanism/target of Thioridazine",
        "Key adverse effect: Neuroleptic malignant syndrome",
        "Dosing and titration of Thioridazine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Thioridazine develops neuroleptic malignant syndrome — next best step?",
        "When to choose Thioridazine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects",
        "Most common side effects: Extrapyramidal symptoms (parkinsonism), Akathisia, Hyperprolactinaemia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Three signature toxicities: QT (dose-dependent, ECG-mandatory), pigmentary retinopathy (dose-related, irreversible), retrograde ejaculation (the exam classic).",
        "Reserved status: only when other antipsychotics fail — the label itself says so.",
        "The 800 mg absolute ceiling exists because of dose-dependent toxicity, not efficacy.",
        "Low EPS was its selling point; cardiac and retinal toxicity are its reckoning.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Low-potency piperidine phenothiazine — restricted second-line.",
    "Signature: dose-dependent QT prolongation (max 800 mg) + pigmentary retinopathy + retrograde ejaculation.",
    "ECG at baseline and steady state is mandatory.",
    "Little EPS — the original reason for its popularity.",
    "Class mechanism: D2 receptor blockade — efficacy equivalent across typicals; adverse effects differ by potency.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia — second-line (when other antipsychotics fail or are intolerable)",
      presentation: "A patient presenting with schizophrenia — second-line (when other antipsychotics fail or are intolerable), started on Thioridazine.",
      history: "A adult patient presents with a schizophrenia — second-line (when other antipsychotics fail or are intolerable) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia — second-line (when other antipsychotics fail or are intolerable); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia — second-line (when other antipsychotics fail or are intolerable). Differentials are considered and excluded clinically.",
      rationale: "Thioridazine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Typical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 50–100 mg orally 3 times daily, titrated to 200–600 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Thioridazine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Typical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Thioridazine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "See full guide",
            },
            {
              drug: "Haloperidol",
              value: "See full guide",
            },
            {
              drug: "Fluphenazine",
              value: "See full guide",
            },
            {
              drug: "Perphenazine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Approximately 10–30 hours (agent-specific).",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "—",
            },
            {
              drug: "Haloperidol",
              value: "—",
            },
            {
              drug: "Fluphenazine",
              value: "—",
            },
            {
              drug: "Perphenazine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Low — weight gain not expected.",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "Low — weight gain not expected.",
            },
            {
              drug: "Haloperidol",
              value: "See product information and class comparison.",
            },
            {
              drug: "Fluphenazine",
              value: "Low — weight gain not expected.",
            },
            {
              drug: "Perphenazine",
              value: "Low — weight gain not expected.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Mild.",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "Mild.",
            },
            {
              drug: "Haloperidol",
              value: "Mild — among the least sedating antipsychotics; alerting more than calming at low doses.",
            },
            {
              drug: "Fluphenazine",
              value: "Mild.",
            },
            {
              drug: "Perphenazine",
              value: "Mild.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The restricted QT-retinopathy phenothiazine — last-line",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "Historic prototype + heavy sedation for agitation; anti-hiccup oddity",
            },
            {
              drug: "Haloperidol",
              value: "Highest-potency D2 blockade with minimal sedation/hypotension — the agitation and delirium tool",
            },
            {
              drug: "Fluphenazine",
              value: "The historic 2–5-weekly decanoate depot for maintenance",
            },
            {
              drug: "Perphenazine",
              value: "The CATIE-proven mid-potency typical",
            },
          ],
        },
      ],
      takeaway: "All typical antipsychotics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Thioridazine reaches peak plasma concentration and begins acting at its molecular target (D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (extrapyramidal symptoms (parkinsonism), akathisia, hyperprolactinaemia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Clinical effect of Thioridazine typically builds over 1–4 weeks at the target dose.)",
      title: "Therapeutic effect builds",
      description: "Clinical effect of Thioridazine typically builds over 1–4 weeks at the target dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Thioridazine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Thioridazine take to work?",
      answer: "Clinical effect of Thioridazine typically builds over 1–4 weeks at the target dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Thioridazine?",
      answer: "The most frequently reported effects are: Extrapyramidal symptoms (parkinsonism), Akathisia, Hyperprolactinaemia, Sedation, QT prolongation and torsades. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Thioridazine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Thioridazine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Thioridazine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Thioridazine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Thioridazine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for Schizophrenia (2020)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), thioridazine monograph, p. 120",
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
        source: "FDA Prescribing Information for Melleril (Thioridazine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for thioridazine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Thioridazine",
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
      name: "Chlorpromazine",
      slug: "chlorpromazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Haloperidol",
      slug: "haloperidol",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Fluphenazine",
      slug: "fluphenazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Perphenazine",
      slug: "perphenazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Pimozide",
      slug: "pimozide",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Trifluoperazine",
      slug: "trifluoperazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
  ],
  relatedConditions: [
    {
      name: "Schizophrenia — second-line (when other antipsychotics fail or are intolerable)",
      relationship: "primary",
    },
    {
      name: "Severe anxiety/behavioural disturbance (historic)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Thioridazine",
      type: "drug",
      href: "/drugs/thioridazine",
      note: "The drug you're reading about",
    },
    {
      label: "Typical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Typical (Conventional) Antipsychotic — Phenothiazine",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Schizophrenia — second-line (when other antipsychotics fail or are intolerable)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Severe anxiety/behavioural disturbance (historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Neuroleptic malignant syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Tardive dyskinesia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Extrapyramidal symptoms (parkinsonism)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Thioridazine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The pigment-retinopathy, QT-restricted last-line phenothiazine — reserved when others fail.",
    summary: "Thioridazine is a prescription medicine used to treat schizophrenia — second-line (when other antipsychotics fail or are intolerable). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Thioridazine is an older antipsychotic kept in reserve for people who cannot take other medicines. It has two important safety checks: regular heart-tracing tests (ECG) because it can affect heart rhythm, and eye checks because long-term high doses can affect vision.",
    sideEffects: "The most common side effects are: extrapyramidal symptoms (parkinsonism), akathisia, hyperprolactinaemia, sedation, qt prolongation and torsades, pigmentary retinopathy. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: ecg (qtc) (baseline, at steady state, and after dose changes); ophthalmological review (baseline and with any visual symptoms). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Fluoxetine, paroxetine, and other strong CYP2D6 inhibitors, Other QT-prolonging drugs. Avoid alcohol unless your doctor says it is safe.",
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
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Typical Antipsychotics",
    members: [
      {
        name: "Thioridazine",
        slug: "thioridazine",
        relationship: "This guide",
        distinguishing: "The restricted QT-retinopathy phenothiazine — last-line",
      },
      {
        name: "Chlorpromazine",
        slug: "chlorpromazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "Historic prototype + heavy sedation for agitation; anti-hiccup oddity",
      },
      {
        name: "Haloperidol",
        slug: "haloperidol",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "Highest-potency D2 blockade with minimal sedation/hypotension — the agitation and delirium tool",
      },
      {
        name: "Fluphenazine",
        slug: "fluphenazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "The historic 2–5-weekly decanoate depot for maintenance",
      },
      {
        name: "Perphenazine",
        slug: "perphenazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "The CATIE-proven mid-potency typical",
      },
      {
        name: "Pimozide",
        slug: "pimozide",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "Tourette's + delusional parasitosis specialist (ECG mandatory)",
      },
      {
        name: "Trifluoperazine",
        slug: "trifluoperazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "Indian formulary staple high-potency typical",
      },
      {
        name: "Cyamemazine",
        slug: "cyamemazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "French-market anxiolytic phenothiazine curiosity",
      },
      {
        name: "Flupenthixol",
        slug: "flupenthixol",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "The activating thioxanthene with 2–4-weekly depot (Europe/India)",
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
      question: "Which molecular target does Thioridazine primarily act on?",
      options: [
        "D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Thioridazine acts primarily at D2 (low-potency antagonist); M1 (moderate); alpha-1 (moderate); H1; potent cardiac ion-channel effects. Low-potency piperidine phenothiazine with anticholinergic/alpha-1 binding and clinically important cardiac potassium-channel blockade (QT).",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Thioridazine?",
      options: ["Extrapyramidal symptoms (parkinsonism)", "Akathisia", "Hyperprolactinaemia", "Sedation"],
      correctIndex: 0,
      explanation: "Extrapyramidal symptoms (parkinsonism) — Rigidity, bradykinesia, tremor — dose-dependent D2 signature.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Thioridazine for schizophrenia (second-line)?",
      options: ["200–600 mg/day", "800 mg/day (absolute ceiling)", "200–600 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (second-line): start 50–100 mg orally 3 times daily, target 200–600 mg/day, maximum 800 mg/day (absolute ceiling). Increase slowly; ECG at steady state",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Thioridazine in two sentences.",
      answer: "Low-potency piperidine phenothiazine with anticholinergic/alpha-1 binding and clinically important cardiac potassium-channel blockade (QT). Net effect: D2 antagonism across mesolimbic (antipsychotic), nigrostriatal (EPS), and tuberoinfundibular (prolactin) pathways — low potency with anticholinergic dominance — and a unique dose-dependent QT and retinal toxicity.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Thioridazine.",
      answer: "Schizophrenia — second-line (when other antipsychotics fail or are intolerable), Severe anxiety/behavioural disturbance (historic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Thioridazine and how you would manage it.",
      answer: "Neuroleptic malignant syndrome: Rigidity, hyperthermia, autonomic instability, raised creatine kinase, altered consciousness — the class medical emergency. Management: Stop immediately; ICU supportive care; dantrolene or bromocriptine.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Thioridazine require?",
      answer: "ECG (QTc) (Baseline, at steady state, and after dose changes); Ophthalmological review (Baseline and with any visual symptoms)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Thioridazine that separates safe prescribers from unsafe ones.",
      answer: "Three signature toxicities: QT (dose-dependent, ECG-mandatory), pigmentary retinopathy (dose-related, irreversible), retrograde ejaculation (the exam classic).",
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
      checkpoint: "You now know what Thioridazine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Thioridazine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Thioridazine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Thioridazine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Thioridazine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Thioridazine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Clinical effect of Thioridazine typically builds over 1–4 weeks at the target dose.",
    ],
    ifItWorks: [
      "Continue Thioridazine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Thioridazine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Thioridazine follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Low — weight gain not expected.",
    sedation: "Mild.",
    dosing: [
      {
        indication: "Schizophrenia (second-line)",
        starting: "50–100 mg orally 3 times daily",
        titration: "Increase slowly; ECG at steady state",
        target: "200–600 mg/day",
        max: "800 mg/day (absolute ceiling)",
      },
    ],
    dosageForms: ["Tablets 10–200 mg", "Suspension"],
    dosingTips: [
      "ECG before, during, and after titration — non-negotiable.",
      "Never exceed 800 mg/day.",
      "Visual symptoms = same-week ophthalmology.",
    ],
    overdose: [
      "Overdose with Thioridazine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Thioridazine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Approximately 10–30 hours (agent-specific)..",
      "Metabolism: Hepatic CYP metabolism..",
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
    potentialAdvantages: ["Minimal EPS.", "Sedation useful in agitated patients.", "Effective when truly needed."],
    potentialDisadvantages: ["QT restriction (ECG mandatory).", "Pigmentary retinopathy.", "Retrograde ejaculation.", "Second-line-only status."],
    primaryTargetSymptoms: [
      "Positive psychotic symptoms (second-line)",
    ],
    pearls: [
      "Three signature toxicities: QT (dose-dependent, ECG-mandatory), pigmentary retinopathy (dose-related, irreversible), retrograde ejaculation (the exam classic).",
      "Reserved status: only when other antipsychotics fail — the label itself says so.",
      "The 800 mg absolute ceiling exists because of dose-dependent toxicity, not efficacy.",
      "Low EPS was its selling point; cardiac and retinal toxicity are its reckoning.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
