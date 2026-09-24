import type { Drug } from "../types";

/**
 * Chlorpromazine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), chlorpromazine monograph (book p. 23)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const chlorpromazine: Drug = {
  /* ---- Identity ---- */
  slug: "chlorpromazine",
  genericName: "Chlorpromazine",
  brandNames: ["Largactil", "Thorazine"],
  drugClass: "typical-antipsychotic",
  drugClassLabel: "Typical Antipsychotic",
  drugClassFullName: "Typical (Conventional) Antipsychotic — Phenothiazine",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Typical Antipsychotics", "Chlorpromazine"],
  /* ---- Hero / summary ---- */
  tagline: "The original antipsychotic — a low-potency phenothiazine that started psychiatric pharmacotherapy in 1952.",
  summary: "Chlorpromazine is the first antipsychotic drug — the 1952 discovery that emptied asylum wards and won a Nobel prize connection. As a low-potency aliphatic phenothiazine it combines modest D2 blockade with strong H1, M1, and alpha-1 binding: heavy sedation, orthostasis, and anticholinergic effects at antipsychotic doses, with lower EPS per milligram than haloperidol. Today it survives as a sedation-heavy option for agitation, severe anxiety states, and intractable hiccups, and as the historical reference point for the entire class.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Chlorpromazine — from its molecular target (D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A) to clinical effect.",
    "List the FDA-approved and off-label uses of Chlorpromazine.",
    "Predict the common and serious side effects of Chlorpromazine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Chlorpromazine.",
    "Compare Chlorpromazine with other typical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Chlorpromazine blocks D2 receptors with low potency but binds strongly at histamine, muscarinic, and alpha-1 receptors — the 'dirty but gentle' pioneer profile.",
    molecularTarget: "D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A",
    effect: "D2 antagonism across mesolimbic (antipsychotic), nigrostriatal (EPS), and tuberoinfundibular (prolactin) pathways — low potency means very large doses are needed, and off-target binding (sedation, hypotension, anticholinergic) dominates the clinical texture.",
    steps: [
      "Blocks D2 receptors — therapeutic antipsychotic effect at 65–75% occupancy.",
      "EPS emerges as occupancy passes ~80% — low potency means very large doses are needed, and off-target binding (sedation, hypotension, anticholinergic) dominates the clinical texture.",
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
        label: "Chlorpromazine",
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
    "D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A",
  ],
  brainRegionIds: ["nucleus-accumbens", "substantia-nigra", "prefrontal-cortex"],
  pathwayIds: ["mesolimbic", "nigrostriatal", "tuberoinfundibular", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia — psychotic manifestations",
      status: "fda-approved",
      description: "Historical first-line; still effective at high doses, largely replaced by atypicals.",
    },
    {
      name: "Severe anxiety/tension (short-term)",
      status: "fda-approved",
      description: "Historic indication — heavy sedation used deliberately.",
    },
    {
      name: "Intractable hiccups",
      status: "fda-approved",
      description: "A unique niche — chlorpromazine is the only FDA-approved anti-hiccup drug.",
    },
    {
      name: "Acute agitation",
      status: "off-label",
      description: "Calmative in emergencies; IM use predates modern protocols.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Chlorpromazine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Class boxed warning applies.",
    },
    {
      title: "Tardive dyskinesia",
      text: "Class warning — risk with chronic use.",
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
      name: "Orthostatic hypotension",
      frequency: "very-common",
      severity: "severe",
      description: "Alpha-1 blockade — first-dose syncope is a real risk, especially in the elderly.",
      management: "Slow titration; rise slowly; review antihypertensives.",
    },
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "H1-mediated — the dominant clinical effect at low doses.",
      management: "Dose timing; tolerance.",
    },
    {
      name: "Anticholinergic effects (dry mouth, constipation, urinary retention)",
      frequency: "common",
      severity: "moderate",
      description: "M1 blockade — adds up in the elderly.",
      management: "Minimise total anticholinergic load.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "moderate",
      description: "H1/5-HT2C effects — notable for a typical.",
      management: "Monitor; lifestyle.",
    },
    {
      name: "Photosensitivity",
      frequency: "common",
      severity: "mild",
      description: "A classic phenothiazine quirk — sunburn-like reactions.",
      management: "Sun protection counselling.",
    },
    {
      name: "Jaundice (cholestatic, early treatment)",
      frequency: "uncommon",
      severity: "severe",
      description: "The historic chlorpromazine toxicity that launched LFT monitoring.",
      management: "Stop if jaundice; LFTs if symptomatic.",
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
      parameter: "Weight and BMI",
      frequency: "Baseline, then periodically",
      rationale: "Class metabolic risk (lower than atypicals for most).",
    },
    {
      parameter: "AIMS examination",
      frequency: "Baseline, then every 6 months",
      rationale: "Higher tardive dyskinesia risk than atypicals.",
    },
    {
      parameter: "EPS screen (parkinsonism, akathisia, dystonia)",
      frequency: "Every review in the first 2 months",
      rationale: "Typicals carry the highest EPS risk.",
    },
    {
      parameter: "Blood pressure (orthostatic)",
      frequency: "Baseline and during titration",
      rationale: "Alpha-1 blockade.",
    },
    {
      parameter: "ECG where indicated",
      frequency: "Baseline if cardiac risk factors or concurrent QT drugs",
      rationale: "Several typicals prolong QT.",
    },
  ],
  interactions: [
    {
      drug: "QT-prolonging drugs (including other antipsychotics)",
      severity: "major",
      mechanism: "Additive QT prolongation — torsades risk.",
      action: "Avoid combinations; ECG monitoring if unavoidable.",
    },
    {
      drug: "Anticholinergic drugs",
      severity: "moderate",
      mechanism: "Additive anticholinergic burden — cognition, ileus, tachycardia.",
      action: "Minimise total anticholinergic load.",
    },
    {
      drug: "CNS depressants and alcohol",
      severity: "moderate",
      mechanism: "Additive sedation.",
      action: "Counsel; adjust doses.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Available data have not shown a major malformation signal for low-potency phenothiazines or butyrophenones, but third-trimester exposure can cause neonatal EPS and withdrawal. Relapse prevention in serious psychosis usually outweighs fetal risk — continue at the lowest effective dose with obstetric co-management.",
    lactation: "Small amounts pass into milk; infant sedation and EPS-like effects are monitored. Generally considered acceptable with infant monitoring.",
  },
  renalAdjustment: "Standard caution in significant renal impairment.",
  hepaticAdjustment: "Hepatic metabolism — LFT vigilance (cholestatic jaundice is the historic toxicity); avoid in active liver disease.",
  /* ---- Education ---- */
  patientExplanation: "Chlorpromazine is the oldest antipsychotic, discovered in 1952. It is a strong sedative that also calms psychotic symptoms. Because it acts on many receptors at once, it lowers blood pressure on standing and causes dry mouth and constipation more than newer medicines — and it makes skin unusually sensitive to sunlight.",
  patientEducationPoints: [
    "Report stiffness, shakiness, restlessness, or unusual tongue/mouth movements early — these are treatable.",
    "Stand up slowly during the first week.",
    "Do not stop suddenly — discuss any change with your doctor.",
    "Benefit from Chlorpromazine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "1952: chlorpromazine + lithium + imipramine — the founding decade of psychopharmacology; chlorpromazine was its opening act.",
    "Low potency, high milligrams: 100 mg chlorpromazine ≈ 2 mg haloperidol ≈ 100 mg quetiapine (rough equivalences for orientation).",
    "Sedation + hypotension are dose-limiting; EPS appears only at the high end — the mirror image of haloperidol.",
    "The only approved anti-hiccup drug — remembered mainly by examiners and palliative physicians.",
    "Photosensitivity: warn every long-term patient about sun exposure.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Chlorpromazine: Chlorpromazine blocks D2 receptors with low potency but binds strongly at histamine, muscarinic, and alpha-1 receptors — the 'dirty but gentle' pioneer profile.",
        "Uses of Chlorpromazine: Schizophrenia — psychotic manifestations; Severe anxiety/tension (short-term); Intractable hiccups; Acute agitation",
        "First antipsychotic (1952) — aliphatic phenothiazine, low-potency.",
        "Receptor profile: weak D2 + strong H1/M1/alpha-1 → sedation, hypotension, anticholinergic >> EPS.",
      ],
      practical: [
        "Prescribe Chlorpromazine for schizophrenia — psychotic manifestations with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, then periodically); AIMS examination (Baseline, then every 6 months); EPS screen (parkinsonism, akathisia, dystonia) (Every review in the first 2 months)",
      ],
      longAnswer: [
        "Chlorpromazine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "First antipsychotic (1952) — aliphatic phenothiazine, low-potency.",
        "Receptor profile: weak D2 + strong H1/M1/alpha-1 → sedation, hypotension, anticholinergic >> EPS.",
      ],
    },
    neetPg: {
      highYield: [
        "First antipsychotic (1952) — aliphatic phenothiazine, low-potency.",
        "Receptor profile: weak D2 + strong H1/M1/alpha-1 → sedation, hypotension, anticholinergic >> EPS.",
        "Signature adverse effects: orthostatic hypotension, photosensitivity, cholestatic jaundice, neuroleptic malignant syndrome (first described with it).",
        "Unique FDA indication: intractable hiccups.",
        "Chlorpromazine 100 mg ≈ haloperidol 2 mg (approximate equivalence).",
        "Sedation used deliberately for acute agitation in historical practice.",
      ],
      pyqConcepts: [
        "Mechanism/target of Chlorpromazine",
        "Key adverse effect: Neuroleptic malignant syndrome",
        "Dosing and titration of Chlorpromazine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Chlorpromazine develops neuroleptic malignant syndrome — next best step?",
        "When to choose Chlorpromazine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A",
        "Most common side effects: Extrapyramidal symptoms (parkinsonism), Akathisia, Hyperprolactinaemia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "1952: chlorpromazine + lithium + imipramine — the founding decade of psychopharmacology; chlorpromazine was its opening act.",
        "Low potency, high milligrams: 100 mg chlorpromazine ≈ 2 mg haloperidol ≈ 100 mg quetiapine (rough equivalences for orientation).",
        "Sedation + hypotension are dose-limiting; EPS appears only at the high end — the mirror image of haloperidol.",
        "The only approved anti-hiccup drug — remembered mainly by examiners and palliative physicians.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "First antipsychotic (1952) — aliphatic phenothiazine, low-potency.",
    "Receptor profile: weak D2 + strong H1/M1/alpha-1 → sedation, hypotension, anticholinergic >> EPS.",
    "Signature adverse effects: orthostatic hypotension, photosensitivity, cholestatic jaundice, neuroleptic malignant syndrome (first described with it).",
    "Unique FDA indication: intractable hiccups.",
    "Chlorpromazine 100 mg ≈ haloperidol 2 mg (approximate equivalence).",
    "Sedation used deliberately for acute agitation in historical practice.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia — psychotic manifestations",
      presentation: "A patient presenting with schizophrenia — psychotic manifestations, started on Chlorpromazine.",
      history: "A adult patient presents with a schizophrenia — psychotic manifestations picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia — psychotic manifestations; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia — psychotic manifestations. Differentials are considered and excluded clinically.",
      rationale: "Chlorpromazine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Typical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 25–100 mg orally (divided), titrated to 200–800 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Chlorpromazine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Typical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Chlorpromazine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A",
          comparisons: [
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
            {
              drug: "Pimozide",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Approximately 10–30 hours (agent-specific).",
          comparisons: [
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
            {
              drug: "Pimozide",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Low — weight gain not expected.",
          comparisons: [
            {
              drug: "Haloperidol",
              value: "—",
            },
            {
              drug: "Fluphenazine",
              value: "Low — weight gain not expected.",
            },
            {
              drug: "Perphenazine",
              value: "Low — weight gain not expected.",
            },
            {
              drug: "Pimozide",
              value: "Low — weight gain not expected.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Mild.",
          comparisons: [
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
            {
              drug: "Pimozide",
              value: "Mild.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Historic prototype + heavy sedation for agitation; anti-hiccup oddity",
          comparisons: [
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
            {
              drug: "Pimozide",
              value: "Tourette's + delusional parasitosis specialist (ECG mandatory)",
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
      description: "Chlorpromazine reaches peak plasma concentration and begins acting at its molecular target (D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
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
      time: "Weeks 1–4 (Clinical effect of Chlorpromazine typically builds over 1–4 weeks at the target dose.)",
      title: "Therapeutic effect builds",
      description: "Clinical effect of Chlorpromazine typically builds over 1–4 weeks at the target dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Chlorpromazine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Chlorpromazine take to work?",
      answer: "Clinical effect of Chlorpromazine typically builds over 1–4 weeks at the target dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Chlorpromazine?",
      answer: "The most frequently reported effects are: Extrapyramidal symptoms (parkinsonism), Akathisia, Hyperprolactinaemia, Sedation, Orthostatic hypotension. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Chlorpromazine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Chlorpromazine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Chlorpromazine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Chlorpromazine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Chlorpromazine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), chlorpromazine monograph, p. 23",
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
        source: "FDA Prescribing Information for Largactil (Chlorpromazine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for chlorpromazine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Chlorpromazine",
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
      name: "Schizophrenia — psychotic manifestations",
      relationship: "primary",
    },
    {
      name: "Severe anxiety/tension (short-term)",
      relationship: "primary",
    },
    {
      name: "Intractable hiccups",
      relationship: "primary",
    },
    {
      name: "Acute agitation",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Chlorpromazine",
      type: "drug",
      href: "/drugs/chlorpromazine",
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
      label: "D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Schizophrenia — psychotic manifestations",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Severe anxiety/tension (short-term)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Intractable hiccups",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
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
      label: "Patient Guide — Chlorpromazine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The original antipsychotic — a low-potency phenothiazine that started psychiatric pharmacotherapy in 1952.",
    summary: "Chlorpromazine is a prescription medicine used to treat schizophrenia — psychotic manifestations. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Chlorpromazine is the oldest antipsychotic, discovered in 1952. It is a strong sedative that also calms psychotic symptoms. Because it acts on many receptors at once, it lowers blood pressure on standing and causes dry mouth and constipation more than newer medicines — and it makes skin unusually sensitive to sunlight.",
    sideEffects: "The most common side effects are: extrapyramidal symptoms (parkinsonism), akathisia, hyperprolactinaemia, sedation, orthostatic hypotension, sedation and drowsiness. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, then periodically); aims examination (baseline, then every 6 months); eps screen (parkinsonism, akathisia, dystonia) (every review in the first 2 months). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: QT-prolonging drugs (including other antipsychotics), Anticholinergic drugs, CNS depressants and alcohol. Avoid alcohol unless your doctor says it is safe.",
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
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Typical Antipsychotics",
    members: [
      {
        name: "Chlorpromazine",
        slug: "chlorpromazine",
        relationship: "This guide",
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
    study: "40 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Chlorpromazine primarily act on?",
      options: [
        "D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Chlorpromazine acts primarily at D2 (low-potency antagonist); H1 (potent); M1 (moderate); alpha-1 (moderate); 5-HT2A. Chlorpromazine blocks D2 receptors with low potency but binds strongly at histamine, muscarinic, and alpha-1 receptors — the 'dirty but gentle' pioneer profile.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Chlorpromazine?",
      options: ["Extrapyramidal symptoms (parkinsonism)", "Akathisia", "Hyperprolactinaemia", "Sedation"],
      correctIndex: 0,
      explanation: "Extrapyramidal symptoms (parkinsonism) — Rigidity, bradykinesia, tremor — dose-dependent D2 signature.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Chlorpromazine for psychosis (inpatient)?",
      options: ["200–800 mg/day", "1000+ mg/day (exceptional)", "200–800 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For psychosis (inpatient): start 25–100 mg orally (divided), target 200–800 mg/day, maximum 1000+ mg/day (exceptional). Increase gradually; severe cases need 400+ mg/day",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Chlorpromazine in two sentences.",
      answer: "Chlorpromazine blocks D2 receptors with low potency but binds strongly at histamine, muscarinic, and alpha-1 receptors — the 'dirty but gentle' pioneer profile. Net effect: D2 antagonism across mesolimbic (antipsychotic), nigrostriatal (EPS), and tuberoinfundibular (prolactin) pathways — low potency means very large doses are needed, and off-target binding (sedation, hypotension, anticholinergic) dominates the clinical texture.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Chlorpromazine.",
      answer: "Schizophrenia — psychotic manifestations, Severe anxiety/tension (short-term), Intractable hiccups, Acute agitation. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Chlorpromazine and how you would manage it.",
      answer: "Neuroleptic malignant syndrome: Rigidity, hyperthermia, autonomic instability, raised creatine kinase, altered consciousness — the class medical emergency. Management: Stop immediately; ICU supportive care; dantrolene or bromocriptine.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Chlorpromazine require?",
      answer: "Weight and BMI (Baseline, then periodically); AIMS examination (Baseline, then every 6 months); EPS screen (parkinsonism, akathisia, dystonia) (Every review in the first 2 months); Blood pressure (orthostatic) (Baseline and during titration)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Chlorpromazine that separates safe prescribers from unsafe ones.",
      answer: "1952: chlorpromazine + lithium + imipramine — the founding decade of psychopharmacology; chlorpromazine was its opening act.",
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
      checkpoint: "You now know what Chlorpromazine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Chlorpromazine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Chlorpromazine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Chlorpromazine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Chlorpromazine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Chlorpromazine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Clinical effect of Chlorpromazine typically builds over 1–4 weeks at the target dose.",
    ],
    ifItWorks: [
      "Continue Chlorpromazine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Chlorpromazine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Chlorpromazine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Psychosis (inpatient)",
        starting: "25–100 mg orally (divided)",
        titration: "Increase gradually; severe cases need 400+ mg/day",
        target: "200–800 mg/day",
        max: "1000+ mg/day (exceptional)",
      },
      {
        indication: "Agitation (IM)",
        starting: "25–50 mg IM",
        titration: "Repeat per protocol",
        target: "25–100 mg per episode",
        max: "Protocol-limited",
      },
      {
        indication: "Intractable hiccups",
        starting: "25 mg orally 3–4 times daily",
        titration: "Short course",
        target: "25–50 mg tds",
        max: "100–200 mg/day",
      },
    ],
    dosageForms: ["Tablets 10–200 mg", "Syrup/suspension", "Suppositories", "Injection 25 mg/mL"],
    dosingTips: [
      "Give most of the dose at night — convert sedation into sleep.",
      "Warn about sun exposure from day one.",
      "Check blood pressure standing in week one.",
    ],
    overdose: [
      "Overdose with Chlorpromazine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Chlorpromazine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
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
    potentialAdvantages: [
      "Deep sedation for severely agitated patients.",
      "Historical importance + lowest cost.",
      "The anti-hiccup niche.",
      "Multiple formulations including suppository.",
    ],
    potentialDisadvantages: [
      "Orthostatic hypotension — dose-limiting.",
      "Heavy anticholinergic burden.",
      "Photosensitivity.",
      "Cholestatic jaundice (early treatment).",
      "EPS at high doses.",
      "Largely superseded.",
    ],
    primaryTargetSymptoms: ["Positive psychotic symptoms", "Severe agitation and anxiety", "Intractable hiccups"],
    pearls: [
      "1952: chlorpromazine + lithium + imipramine — the founding decade of psychopharmacology; chlorpromazine was its opening act.",
      "Low potency, high milligrams: 100 mg chlorpromazine ≈ 2 mg haloperidol ≈ 100 mg quetiapine (rough equivalences for orientation).",
      "Sedation + hypotension are dose-limiting; EPS appears only at the high end — the mirror image of haloperidol.",
      "The only approved anti-hiccup drug — remembered mainly by examiners and palliative physicians.",
      "Photosensitivity: warn every long-term patient about sun exposure.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
