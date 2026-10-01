import type { Drug } from "../types";

/**
 * Pimozide — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), pimozide monograph (book p. 100)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const pimozide: Drug = {
  /* ---- Identity ---- */
  slug: "pimozide",
  genericName: "Pimozide",
  brandNames: ["Orap"],
  drugClass: "typical-antipsychotic",
  drugClassLabel: "Typical Antipsychotic",
  drugClassFullName: "Typical (Conventional) Antipsychotic — Diphenylbutylpiperidine",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Typical Antipsychotics", "Pimozide"],
  /* ---- Hero / summary ---- */
  tagline: "The diphenylbutylpiperidine built for Tourette's and monosymptomatic delusions — under permanent ECG watch.",
  summary: "Pimozide is a long-acting high-potency diphenylbutylpiperidine antipsychotic with two signature niches: Tourette's disorder (once the drug of choice) and monosymptomatic hypochondriacal/parasitosis delusions. It prolongs the QT interval (ECG mandatory), inhibits CYP2D6 strongly, and is contraindicated with most QT drugs — a specialist agent whose unique indications keep it in use despite its interaction burden.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Pimozide — from its molecular target (D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel) to clinical effect.",
    "List the FDA-approved and off-label uses of Pimozide.",
    "Predict the common and serious side effects of Pimozide from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Pimozide.",
    "Compare Pimozide with other typical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "High-potency, very long-acting D2 antagonist (diphenylbutylpiperidine) with strong CYP2D6 inhibition and clinically significant QT effect.",
    molecularTarget: "D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel",
    effect: "D2 antagonism across mesolimbic (antipsychotic), nigrostriatal (EPS), and tuberoinfundibular (prolactin) pathways — high potency with uniquely long receptor binding — weekly-dose pharmacokinetics at the receptor level.",
    steps: [
      "Blocks D2 receptors — therapeutic antipsychotic effect at 65–75% occupancy.",
      "EPS emerges as occupancy passes ~80% — high potency with uniquely long receptor binding — weekly-dose pharmacokinetics at the receptor level.",
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
        label: "Pimozide",
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
    "D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel",
  ],
  brainRegionIds: ["nucleus-accumbens", "substantia-nigra", "prefrontal-cortex"],
  pathwayIds: ["mesolimbic", "nigrostriatal", "tuberoinfundibular", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Tourette's disorder — suppresses tics and vocal utterances",
      status: "fda-approved",
      description: "Historically the drug of choice; now balanced against risperidone and aripiprazole for safety.",
      ageGroup: "Adults & ≥12 years",
    },
    {
      name: "Monosymptomatic hypochondriacal psychosis (delusional parasitosis)",
      status: "guideline",
      description: "The classic indication dermatologists consult for — fixed delusion of infestation.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Pimozide must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Strong CYP2D6 inhibitors and QT-prolonging drugs",
      severity: "absolute",
      rationale: "Both raise levels and QT effect.",
    },
    {
      name: "Macrolide antibiotics",
      severity: "absolute",
      rationale: "QT stacking.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "QT prolongation and sudden death",
      text: "Pimozide prolongs the QT interval and has been associated with sudden death. Baseline and follow-up ECGs are required; combination with other QT-prolonging drugs or strong CYP2D6 inhibitors is contraindicated.",
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
      name: "QT prolongation",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Clinically significant — baseline and follow-up ECG mandatory; the restricting toxicity.",
      management: "ECG before and during treatment; avoid all QT combinations.",
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
      frequency: "Baseline, after dose changes, and periodically",
      rationale: "The pimozide-specific mandatory surveillance.",
    },
  ],
  interactions: [
    {
      drug: "Strong CYP2D6 inhibitors and QT-prolonging drugs",
      severity: "contraindicated",
      mechanism: "Both raise levels and QT effect.",
      action: "Contraindicated.",
    },
    {
      drug: "Macrolide antibiotics",
      severity: "contraindicated",
      mechanism: "QT stacking.",
      action: "Choose alternatives.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Available data have not shown a major malformation signal for low-potency phenothiazines or butyrophenones, but third-trimester exposure can cause neonatal EPS and withdrawal. Relapse prevention in serious psychosis usually outweighs fetal risk — continue at the lowest effective dose with obstetric co-management.",
    lactation: "Small amounts pass into milk; infant sedation and EPS-like effects are monitored. Generally considered acceptable with infant monitoring.",
  },
  renalAdjustment: "Standard caution.",
  hepaticAdjustment: "Standard caution; hepatic 2D6/3A4 metabolism.",
  /* ---- Education ---- */
  patientExplanation: "Pimozide is a specialist medicine for Tourette's tics and for a rare condition where a person is convinced they are infested with parasites despite clear skin. It needs a heart tracing (ECG) before starting and during treatment because it can affect the heart's rhythm.",
  patientEducationPoints: [
    "Report stiffness, shakiness, restlessness, or unusual tongue/mouth movements early — these are treatable.",
    "Stand up slowly during the first week.",
    "Do not stop suddenly — discuss any change with your doctor.",
    "Benefit from Pimozide builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Two niches keep pimozide alive: Tourette's and delusional parasitosis — the dermatology-psychiatry handshake drug.",
    "ECG at baseline and after dose changes is part of the prescription.",
    "Strong 2D6 inhibition is easy to forget — pimozide is a perpetrator, not just a victim, of interactions.",
    "Long receptor residence means the pharmacodynamic tail outlasts the plasma half-life.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Pimozide: High-potency, very long-acting D2 antagonist (diphenylbutylpiperidine) with strong CYP2D6 inhibition and clinically significant QT effect.",
        "Uses of Pimozide: Tourette's disorder — suppresses tics and vocal utterances; Monosymptomatic hypochondriacal psychosis (delusional parasitosis)",
        "Diphenylbutylpiperidine — high-potency, long-acting D2 antagonist.",
        "Signature uses: Tourette's disorder + monosymptomatic delusional parasitosis.",
      ],
      practical: [
        "Prescribe Pimozide for tourette's disorder — suppresses tics and vocal utterances with dose, timing, and duration.",
        "Outline the monitoring plan: ECG (QTc) (Baseline, after dose changes, and periodically)",
      ],
      longAnswer: [
        "Pimozide: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Diphenylbutylpiperidine — high-potency, long-acting D2 antagonist.",
        "Signature uses: Tourette's disorder + monosymptomatic delusional parasitosis.",
      ],
    },
    neetPg: {
      highYield: [
        "Diphenylbutylpiperidine — high-potency, long-acting D2 antagonist.",
        "Signature uses: Tourette's disorder + monosymptomatic delusional parasitosis.",
        "QT prolongation (ECG mandatory) + strong CYP2D6 inhibition (a perpetrator of interactions).",
        "Dose: 1–4 mg/day (max 10 mg); slow titration with ECG.",
        "Class mechanism: D2 receptor blockade — efficacy equivalent across typicals; adverse effects differ by potency.",
      ],
      pyqConcepts: [
        "Mechanism/target of Pimozide",
        "Key adverse effect: Neuroleptic malignant syndrome",
        "Dosing and titration of Pimozide",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Pimozide develops neuroleptic malignant syndrome — next best step?",
        "When to choose Pimozide over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel",
        "Most common side effects: Extrapyramidal symptoms (parkinsonism), Akathisia, Hyperprolactinaemia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Two niches keep pimozide alive: Tourette's and delusional parasitosis — the dermatology-psychiatry handshake drug.",
        "ECG at baseline and after dose changes is part of the prescription.",
        "Strong 2D6 inhibition is easy to forget — pimozide is a perpetrator, not just a victim, of interactions.",
        "Long receptor residence means the pharmacodynamic tail outlasts the plasma half-life.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Diphenylbutylpiperidine — high-potency, long-acting D2 antagonist.",
    "Signature uses: Tourette's disorder + monosymptomatic delusional parasitosis.",
    "QT prolongation (ECG mandatory) + strong CYP2D6 inhibition (a perpetrator of interactions).",
    "Dose: 1–4 mg/day (max 10 mg); slow titration with ECG.",
    "Class mechanism: D2 receptor blockade — efficacy equivalent across typicals; adverse effects differ by potency.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — tourette's disorder — suppresses tics and vocal utterances",
      presentation: "A patient presenting with tourette's disorder — suppresses tics and vocal utterances, started on Pimozide.",
      history: "A adult patient presents with a tourette's disorder — suppresses tics and vocal utterances picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with tourette's disorder — suppresses tics and vocal utterances; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Tourette's disorder — suppresses tics and vocal utterances. Differentials are considered and excluded clinically.",
      rationale: "Pimozide is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Typical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 0.5–1 mg once daily, titrated to 1–4 mg/day (0.1 mg/kg in children) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Pimozide takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Typical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Pimozide",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel",
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
          primaryValue: "Tourette's + delusional parasitosis specialist (ECG mandatory)",
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
      description: "Pimozide reaches peak plasma concentration and begins acting at its molecular target (D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
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
      time: "Weeks 1–4 (Clinical effect of Pimozide typically builds over 1–4 weeks at the target dose.)",
      title: "Therapeutic effect builds",
      description: "Clinical effect of Pimozide typically builds over 1–4 weeks at the target dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Pimozide is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Pimozide take to work?",
      answer: "Clinical effect of Pimozide typically builds over 1–4 weeks at the target dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Pimozide?",
      answer: "The most frequently reported effects are: Extrapyramidal symptoms (parkinsonism), Akathisia, Hyperprolactinaemia, Sedation, QT prolongation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Pimozide suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Pimozide habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Pimozide exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Pimozide during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Pimozide may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), pimozide monograph, p. 100",
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
        source: "FDA Prescribing Information for Orap (Pimozide)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for pimozide — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Pimozide",
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
      name: "Thioridazine",
      slug: "thioridazine",
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
      name: "Tourette's disorder — suppresses tics and vocal utterances",
      relationship: "primary",
    },
    {
      name: "Monosymptomatic hypochondriacal psychosis (delusional parasitosis)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Pimozide",
      type: "drug",
      href: "/drugs/pimozide",
      note: "The drug you're reading about",
    },
    {
      label: "Typical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Typical (Conventional) Antipsychotic — Diphenylbutylpiperidine",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Tourette's disorder — suppresses tics and vocal utterances",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Monosymptomatic hypochondriacal psychosis (delusional parasitosis)",
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
      label: "Patient Guide — Pimozide",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The diphenylbutylpiperidine built for Tourette's and monosymptomatic delusions — under permanent ECG watch.",
    summary: "Pimozide is a prescription medicine used to treat tourette's disorder — suppresses tics and vocal utterances. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Pimozide is a specialist medicine for Tourette's tics and for a rare condition where a person is convinced they are infested with parasites despite clear skin. It needs a heart tracing (ECG) before starting and during treatment because it can affect the heart's rhythm.",
    sideEffects: "The most common side effects are: extrapyramidal symptoms (parkinsonism), akathisia, hyperprolactinaemia, sedation, qt prolongation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: ecg (qtc) (baseline, after dose changes, and periodically). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Strong CYP2D6 inhibitors and QT-prolonging drugs, Macrolide antibiotics. Avoid alcohol unless your doctor says it is safe.",
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
        name: "Pimozide",
        slug: "pimozide",
        relationship: "This guide",
        distinguishing: "Tourette's + delusional parasitosis specialist (ECG mandatory)",
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
        name: "Thioridazine",
        slug: "thioridazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "The restricted QT-retinopathy phenothiazine — last-line",
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
      question: "Which molecular target does Pimozide primarily act on?",
      options: [
        "D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Pimozide acts primarily at D2 (high-potency antagonist, long receptor residence); sigma receptor antagonism; cardiac potassium channel. High-potency, very long-acting D2 antagonist (diphenylbutylpiperidine) with strong CYP2D6 inhibition and clinically significant QT effect.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Pimozide?",
      options: ["Extrapyramidal symptoms (parkinsonism)", "Akathisia", "Hyperprolactinaemia", "Sedation"],
      correctIndex: 0,
      explanation: "Extrapyramidal symptoms (parkinsonism) — Rigidity, bradykinesia, tremor — dose-dependent D2 signature.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Pimozide for tourette's?",
      options: [
        "1–4 mg/day (0.1 mg/kg in children)",
        "10 mg/day",
        "1–4 mg/day (0.1 mg/kg in children) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For tourette's: start 0.5–1 mg once daily, target 1–4 mg/day (0.1 mg/kg in children), maximum 10 mg/day. Increase by 0.5–1 mg every few days (ECG-checked)",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Pimozide in two sentences.",
      answer: "High-potency, very long-acting D2 antagonist (diphenylbutylpiperidine) with strong CYP2D6 inhibition and clinically significant QT effect. Net effect: D2 antagonism across mesolimbic (antipsychotic), nigrostriatal (EPS), and tuberoinfundibular (prolactin) pathways — high potency with uniquely long receptor binding — weekly-dose pharmacokinetics at the receptor level.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Pimozide.",
      answer: "Tourette's disorder — suppresses tics and vocal utterances, Monosymptomatic hypochondriacal psychosis (delusional parasitosis). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Pimozide and how you would manage it.",
      answer: "Neuroleptic malignant syndrome: Rigidity, hyperthermia, autonomic instability, raised creatine kinase, altered consciousness — the class medical emergency. Management: Stop immediately; ICU supportive care; dantrolene or bromocriptine.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Pimozide require?",
      answer: "ECG (QTc) (Baseline, after dose changes, and periodically)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Pimozide that separates safe prescribers from unsafe ones.",
      answer: "Two niches keep pimozide alive: Tourette's and delusional parasitosis — the dermatology-psychiatry handshake drug.",
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
      checkpoint: "You now know what Pimozide is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Pimozide works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Pimozide safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Pimozide.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Pimozide with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Pimozide.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Clinical effect of Pimozide typically builds over 1–4 weeks at the target dose.",
    ],
    ifItWorks: [
      "Continue Pimozide at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Pimozide (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Pimozide follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Tourette's",
        starting: "0.5–1 mg once daily",
        titration: "Increase by 0.5–1 mg every few days (ECG-checked)",
        target: "1–4 mg/day (0.1 mg/kg in children)",
        max: "10 mg/day",
      },
    ],
    dosageForms: ["Tablets 1, 2, 4 mg"],
    dosingTips: [
      "ECG before the first dose and after each dose increment.",
      "In delusional parasitosis, ally with dermatology — treat the fixed belief, not the skin.",
    ],
    overdose: [
      "Overdose with Pimozide is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Pimozide is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
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
    potentialAdvantages: ["Tic suppression efficacy.", "Unique niche in delusional parasitosis.", "Once-daily dosing."],
    potentialDisadvantages: [
      "QT surveillance burden.",
      "Strong 2D6 inhibition.",
      "EPS typical of high potency.",
      "Largely replaced in Tourette's by safer agents.",
    ],
    primaryTargetSymptoms: ["Tics (Tourette's)", "Monosymptomatic delusional parasitosis"],
    pearls: [
      "Two niches keep pimozide alive: Tourette's and delusional parasitosis — the dermatology-psychiatry handshake drug.",
      "ECG at baseline and after dose changes is part of the prescription.",
      "Strong 2D6 inhibition is easy to forget — pimozide is a perpetrator, not just a victim, of interactions.",
      "Long receptor residence means the pharmacodynamic tail outlasts the plasma half-life.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
