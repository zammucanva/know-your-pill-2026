import type { Drug } from "../types";

/**
 * Dothiepin — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), dothiepin monograph (book p. 38)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const dothiepin: Drug = {
  /* ---- Identity ---- */
  slug: "dothiepin",
  genericName: "Dothiepin",
  brandNames: ["Prothiaden", "Dosulepin (UK)"],
  drugClass: "tca",
  drugClassLabel: "TCA",
  drugClassFullName: "Tricyclic Antidepressant",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "TCAs", "Dothiepin"],
  /* ---- Hero / summary ---- */
  tagline: "The UK's dosulepin — the sedating TCA retired for overdose lethality.",
  summary: "Dothiepin (dosulepin) is the UK-market sedating tricyclic: balanced SERT/NET inhibition with a sedating-anxiolytic profile — retired from prescribing guidelines on overdose-toxicity grounds (cardiotoxic in overdose) despite continued availability in the Commonwealth. A Stahl-appendix entry for completeness.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Dothiepin — from its molecular target (SERT/NET (balanced inhibition); H1, M1, alpha-1 (classic TCA binding)) to clinical effect.",
    "List the FDA-approved and off-label uses of Dothiepin.",
    "Predict the common and serious side effects of Dothiepin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Dothiepin.",
    "Compare Dothiepin with other tcas and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Dothiepin inhibits serotonin and norepinephrine reuptake with the classic sedating tricyclic receptor profile.",
    molecularTarget: "SERT/NET (balanced inhibition); H1, M1, alpha-1 (classic TCA binding)",
    effect: "Monoamine reuptake inhibition plus receptor binding producing the classic tricyclic profile.",
    steps: [
      "Dothiepin inhibits serotonin and norepinephrine reuptake with the classic sedating tricyclic receptor profile.",
      "Receptor binding (H1, M1, alpha-1) produces the adverse-effect texture; reuptake inhibition produces the efficacy.",
      "Bedtime dosing converts sedation into therapeutic sleep.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 20-26 hours. — see mechanism and prescriber sections.",
    halfLife: "20-26 hours.",
    metabolism: "Hepatic CYP2D6 (and others).",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Dothiepin",
        sublabel: "Tricyclic antidepressant",
        variant: "inhibit",
      },
      {
        id: "sert",
        label: "SERT",
        sublabel: "Serotonin reuptake",
        variant: "target",
      },
      {
        id: "net",
        label: "NET",
        sublabel: "Norepinephrine reuptake",
        variant: "target",
      },
      {
        id: "m1",
        label: "Muscarinic / H1 / α1",
        sublabel: "Off-target receptor binding",
        variant: "process",
      },
      {
        id: "effect",
        label: "Monamine boost + side effects",
        sublabel: "Efficacy and toxicity from the same molecule",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "sert",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "drug",
        to: "net",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "drug",
        to: "m1",
        label: "also binds",
        type: "inhibit",
      },
      {
        from: "m1",
        to: "effect",
        label: "dry mouth, sedation, orthostasis",
      },
      {
        from: "sert",
        to: "effect",
        label: "antidepressant effect",
      },
      {
        from: "net",
        to: "effect",
        label: "antidepressant effect",
      },
    ],
    caption: "One molecule, two jobs: reuptake inhibition delivers the antidepressant effect, while off-target receptor binding produces the classic tricyclic side-effect profile.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine (NE)"],
  receptors: ["SERT (inhibited)", "NET (inhibited)", "H1 (antagonised)", "M1 (antagonised)", "Alpha-1 (antagonised)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Depression, including with anxiety/insomnia (historic)",
      status: "guideline",
      description: "Retired from guidelines on overdose-toxicity grounds; still prescribed rarely in Commonwealth practice.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Dothiepin must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Hypertensive crisis and serotonin syndrome — the classic combination prohibition.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Suicidal thoughts and behaviours in children, adolescents, and young adults",
      text: "Antidepressants increased the risk of suicidal thinking and behaviour in short-term studies in children, adolescents, and young adults. All patients should be monitored closely, especially early in treatment.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dry mouth",
      frequency: "very-common",
      severity: "moderate",
      description: "Muscarinic blockade — the classic tricyclic complaint.",
      management: "Sips; sugar-free gum; dose timing.",
    },
    {
      name: "Constipation",
      frequency: "very-common",
      severity: "moderate",
      description: "Anticholinergic bowel slowing.",
      management: "Bowel regimen; fluids; fibre.",
    },
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "H1 blockade — often therapeutic in depressed insomniacs.",
      management: "Bedtime-weighted dosing.",
    },
    {
      name: "Blurred vision and urinary hesitation",
      frequency: "common",
      severity: "moderate",
      description: "Anticholinergic ocular and bladder effects — urinary retention in older men.",
      management: "Ocular review; caution with prostatism.",
    },
    {
      name: "Orthostatic hypotension",
      frequency: "common",
      severity: "severe",
      description: "Alpha-1 blockade — falls in the elderly, the practical dose-limit.",
      management: "Rise slowly; BP checks; elderly caution.",
    },
    {
      name: "Weight gain and increased appetite",
      frequency: "common",
      severity: "moderate",
      description: "H1/5-HT2C-mediated — the tricyclic metabolic story.",
      management: "Lifestyle structure from the start.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "common",
      severity: "moderate",
      description: "Serotonergic and anticholinergic combined.",
      management: "Counsel; dose review.",
    },
    {
      name: "Cardiotoxic overdose profile",
      frequency: "rare",
      severity: "life-threatening",
      description: "The overdose-lethality profile that retired the drug from guideline use.",
      management: "Small quantities; safe storage.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Cardiotoxicity in overdose (the TCA catastrophe)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Wide QRS, arrhythmias, hypotension, seizures — the reason TCAs require safe dispensing; the deadliest of the classic antidepressants in overdose.",
      management: "Small quantities; sodium bicarbonate for QRS widening; ICU care.",
    },
    {
      name: "Lethal arrhythmia in cardiac disease",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Conduction slowing (quinidine-like) — TCAs are dangerous in ischaemic heart disease and conduction disease.",
      management: "ECG before starting in over-40s; avoid in post-MI and heart block.",
    },
    {
      name: "Seizures",
      frequency: "uncommon",
      severity: "severe",
      description: "Dose-related threshold lowering.",
      management: "Dose ceilings; caution in epilepsy.",
    },
    {
      name: "Anticholinergic delirium (elderly)",
      frequency: "uncommon",
      severity: "severe",
      description: "Confusion from antimuscarinic load.",
      management: "Avoid in the elderly cognitively impaired.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "ECG",
      frequency: "Baseline in over-40s and all with cardiac history",
      rationale: "Conduction-safety gate before starting.",
    },
    {
      parameter: "Blood pressure (orthostatic)",
      frequency: "Baseline and titration",
      rationale: "Alpha-1 falls.",
    },
    {
      parameter: "Tricyclic blood level where available",
      frequency: "When response is poor or adverse effects prominent",
      rationale: "Nortriptyline has the best-documented therapeutic window (50-150 ng/mL).",
    },
    {
      parameter: "Anticholinergic and falls review (elderly)",
      frequency: "Every visit",
      rationale: "The geriatric toll.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Hypertensive crisis and serotonin syndrome — the classic combination prohibition.",
      action: "14-day washout both directions.",
    },
    {
      drug: "Clonidine and guanethidine",
      severity: "major",
      mechanism: "TCAs block their antihypertensive effect.",
      action: "Avoid.",
    },
    {
      drug: "Antiarrhythmics and QT drugs",
      severity: "major",
      mechanism: "Additive conduction effects.",
      action: "ECG; avoid.",
    },
    {
      drug: "SSRIs (CYP2D6 inhibitors)",
      severity: "major",
      mechanism: "Raise TCA levels — the modern interaction minefield.",
      action: "Dose awareness; levels.",
    },
    {
      drug: "Adrenaline/epinephrine (local anaesthetic with vasoconstrictor)",
      severity: "major",
      mechanism: "TCA-potentiated pressor response — the dental warning.",
      action: "Warn dentists; plain local anaesthetic.",
    },
  ],
  pregnancy: {
    legacyCategory: "C (variable by drug)",
    summary: "Tricyclic human experience is long; no consistent major-malformation signal, but neonatal anticholinergic/withdrawal effects near term. Decisions individualised with obstetrics.",
    lactation: "Excreted in milk in small amounts — infant sedation/anticholinergic monitoring.",
  },
  renalAdjustment: "Standard caution in significant renal impairment.",
  hepaticAdjustment: "Hepatic 2D6 metabolism — reduce dose in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "This is a tricyclic antidepressant — one of the oldest and most studied families. It raises two brain chemicals (serotonin and noradrenaline) by slowing their recycling, and also acts on other receptors that cause its well-known effects: dry mouth, constipation, drowsiness, and dizziness on standing. The dose is built up slowly, taken mostly at bedtime, and these medicines must be kept safely away from children because an overdose is dangerous to the heart.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Dothiepin builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The retirement lesson: a perfectly effective sedating TCA withdrawn from guidelines purely on overdose lethality — pharmacovigilance over efficacy.",
    "Prothiaden survives in Indian and Commonwealth formularies — the geography of a drug's afterlife.",
    "For the legacy patient stable on dothiepin: documented review beats reflexive switching — continuity has its own safety value.",
    "The sedating-anxiolytic TCA texture made it the anxious-insomniac depression option of its era.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Dothiepin: Dothiepin inhibits serotonin and norepinephrine reuptake with the classic sedating tricyclic receptor profile.",
        "Uses of Dothiepin: Depression, including with anxiety/insomnia (historic)",
        "UK sedating TCA (dosulepin/dothiepin).",
        "Retired from guidelines on OVERDOSE CARDIOTOXICITY grounds.",
      ],
      practical: [
        "Prescribe Dothiepin for depression, including with anxiety/insomnia (historic) with dose, timing, and duration.",
        "Outline the monitoring plan: ECG (Baseline in over-40s and all with cardiac history); Blood pressure (orthostatic) (Baseline and titration); Tricyclic blood level where available (When response is poor or adverse effects prominent)",
      ],
      longAnswer: [
        "Dothiepin: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "UK sedating TCA (dosulepin/dothiepin).",
        "Retired from guidelines on OVERDOSE CARDIOTOXICITY grounds.",
      ],
    },
    neetPg: {
      highYield: [
        "UK sedating TCA (dosulepin/dothiepin).",
        "Retired from guidelines on OVERDOSE CARDIOTOXICITY grounds.",
        "Still encountered in Indian/Commonwealth legacy prescriptions.",
        "Classic TCA profile and monitoring rules.",
        "Prothiaden is the Indian brand name to recognise.",
        "Sedating-anxiolytic profile: the anxious-insomniac depression niche.",
      ],
      pyqConcepts: [
        "Mechanism/target of Dothiepin",
        "Key adverse effect: Cardiotoxicity in overdose (the TCA catastrophe)",
        "Dosing and titration of Dothiepin",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Dothiepin develops cardiotoxicity in overdose (the tca catastrophe) — next best step?",
        "When to choose Dothiepin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: SERT/NET (balanced inhibition); H1, M1, alpha-1 (classic TCA binding)",
        "Most common side effects: Dry mouth, Constipation, Sedation and drowsiness",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The retirement lesson: a perfectly effective sedating TCA withdrawn from guidelines purely on overdose lethality — pharmacovigilance over efficacy.",
        "Prothiaden survives in Indian and Commonwealth formularies — the geography of a drug's afterlife.",
        "For the legacy patient stable on dothiepin: documented review beats reflexive switching — continuity has its own safety value.",
        "The sedating-anxiolytic TCA texture made it the anxious-insomniac depression option of its era.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "UK sedating TCA (dosulepin/dothiepin).",
    "Retired from guidelines on OVERDOSE CARDIOTOXICITY grounds.",
    "Still encountered in Indian/Commonwealth legacy prescriptions.",
    "Classic TCA profile and monitoring rules.",
    "Prothiaden is the Indian brand name to recognise.",
    "Sedating-anxiolytic profile: the anxious-insomniac depression niche.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — depression, including with anxiety/insomnia (historic)",
      presentation: "A patient presenting with depression, including with anxiety/insomnia (historic), started on Dothiepin.",
      history: "A adult patient presents with a depression, including with anxiety/insomnia (historic) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with depression, including with anxiety/insomnia (historic); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Depression, including with anxiety/insomnia (historic). Differentials are considered and excluded clinically.",
      rationale: "Dothiepin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (TCA) with strong evidence in this condition.",
      management: "Started at 25-50 mg at bedtime, titrated to 75-150 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Dothiepin takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "TCA comparison — choosing within the class",
      primaryDrug: "Dothiepin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "SERT/NET (balanced inhibition); H1, M1, alpha-1 (classic TCA binding)",
          comparisons: [
            {
              drug: "Imipramine",
              value: "See full guide",
            },
            {
              drug: "Nortriptyline",
              value: "See full guide",
            },
            {
              drug: "Amoxapine",
              value: "See full guide",
            },
            {
              drug: "Desipramine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "20-26 hours.",
          comparisons: [
            {
              drug: "Imipramine",
              value: "—",
            },
            {
              drug: "Nortriptyline",
              value: "—",
            },
            {
              drug: "Amoxapine",
              value: "—",
            },
            {
              drug: "Desipramine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight gain common — the tricyclic story.",
          comparisons: [
            {
              drug: "Imipramine",
              value: "Weight gain common — the tricyclic story.",
            },
            {
              drug: "Nortriptyline",
              value: "Weight gain common — the tricyclic story.",
            },
            {
              drug: "Amoxapine",
              value: "Weight gain common — the tricyclic story.",
            },
            {
              drug: "Desipramine",
              value: "Weight gain common — the tricyclic story.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Common — exploited by bedtime dosing.",
          comparisons: [
            {
              drug: "Imipramine",
              value: "Common — exploited by bedtime dosing.",
            },
            {
              drug: "Nortriptyline",
              value: "Common — exploited by bedtime dosing.",
            },
            {
              drug: "Amoxapine",
              value: "Common — exploited by bedtime dosing.",
            },
            {
              drug: "Desipramine",
              value: "Common — exploited by bedtime dosing.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The retired UK sedative TCA — overdose-toxicity caution",
          comparisons: [
            {
              drug: "Imipramine",
              value: "The founding TCA — depression, enuresis, and panic history",
            },
            {
              drug: "Nortriptyline",
              value: "The TCA survivor — level-guided, post-MI-safe, pain-effective",
            },
            {
              drug: "Amoxapine",
              value: "The TCA-neuroleptic hybrid — EPS warnings included",
            },
            {
              drug: "Desipramine",
              value: "The NET-pure TCA — energising, and the paediatric-cardiac caution",
            },
          ],
        },
      ],
      takeaway: "All tcas share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Dothiepin reaches peak plasma concentration and begins acting at its molecular target (SERT/NET (balanced inhibition); H1, M1, alpha-1 (classic TCA binding)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (dry mouth, constipation, sedation and drowsiness). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Sedative effects night one; antidepressant response 2-4 weeks at therapeutic dose.)",
      title: "Therapeutic effect builds",
      description: "Sedative effects night one; antidepressant response 2-4 weeks at therapeutic dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Dothiepin is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Dothiepin take to work?",
      answer: "Sedative effects night one; antidepressant response 2-4 weeks at therapeutic dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Dothiepin?",
      answer: "The most frequently reported effects are: Dry mouth, Constipation, Sedation and drowsiness, Blurred vision and urinary hesitation, Orthostatic hypotension. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Dothiepin suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Dothiepin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Dothiepin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Dothiepin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Dothiepin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for MDD; NICE CG91",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), dothiepin monograph, p. 38",
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
        source: "FDA Prescribing Information for Prothiaden (Dothiepin)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for dothiepin — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Dothiepin",
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
      name: "Imipramine",
      slug: "imipramine",
      drugClass: "TCA",
      relationship: "Same class (TCA)",
    },
    {
      name: "Nortriptyline",
      slug: "nortriptyline",
      drugClass: "TCA",
      relationship: "Same class (TCA)",
    },
    {
      name: "Amoxapine",
      slug: "amoxapine",
      drugClass: "TCA",
      relationship: "Same class (TCA)",
    },
    {
      name: "Desipramine",
      slug: "desipramine",
      drugClass: "TCA",
      relationship: "Same class (TCA)",
    },
    {
      name: "Doxepin",
      slug: "doxepin",
      drugClass: "TCA",
      relationship: "Same class (TCA)",
    },
    {
      name: "Lofepramine",
      slug: "lofepramine",
      drugClass: "TCA",
      relationship: "Same class (TCA)",
    },
    {
      name: "Amitriptyline",
      slug: "amitriptyline",
      drugClass: "Established agent",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Depression, including with anxiety/insomnia (historic)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Dothiepin",
      type: "drug",
      href: "/drugs/dothiepin",
      note: "The drug you're reading about",
    },
    {
      label: "TCA",
      type: "class",
      href: "#mechanism",
      note: "Tricyclic Antidepressant",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "SERT/NET (balanced inhibition); H1, M1, alpha-1 (classic TCA binding)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Depression, including with anxiety/insomnia (historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Cardiotoxicity in overdose (the TCA catastrophe)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Lethal arrhythmia in cardiac disease",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dry mouth",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Dothiepin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The UK's dosulepin — the sedating TCA retired for overdose lethality.",
    summary: "Dothiepin is a prescription medicine used to treat depression, including with anxiety/insomnia (historic). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "This is a tricyclic antidepressant — one of the oldest and most studied families. It raises two brain chemicals (serotonin and noradrenaline) by slowing their recycling, and also acts on other receptors that cause its well-known effects: dry mouth, constipation, drowsiness, and dizziness on standing. The dose is built up slowly, taken mostly at bedtime, and these medicines must be kept safely away from children because an overdose is dangerous to the heart.",
    sideEffects: "The most common side effects are: dry mouth, constipation, sedation and drowsiness, blurred vision and urinary hesitation, orthostatic hypotension, weight gain and increased appetite. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Cardiotoxicity in overdose (the TCA catastrophe) and Lethal arrhythmia in cardiac disease. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: ecg (baseline in over-40s and all with cardiac history); blood pressure (orthostatic) (baseline and titration); tricyclic blood level where available (when response is poor or adverse effects prominent). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Clonidine and guanethidine, Antiarrhythmics and QT drugs, SSRIs (CYP2D6 inhibitors). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Prothiaden",
        manufacturer: "Abbott legacy/generics",
        strengths: "25, 75 mg",
      },
    ],
    typicalDoses: "25-50 mg nocte → 75-150 mg.",
    prescribingScenarios: [
      "Legacy prescriptions in Indian practice.",
      "Sedating TCA niche where cheap and available.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "ECG > 40s; small dispensing quantities.",
    patientCounselling: [
      "Keep safely away from children and overdose risk.",
      "Bedtime dosing.",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "TCAs",
    members: [
      {
        name: "Dothiepin",
        slug: "dothiepin",
        relationship: "This guide",
        distinguishing: "The retired UK sedative TCA — overdose-toxicity caution",
      },
      {
        name: "Imipramine",
        slug: "imipramine",
        relationship: "Same class (TCA)",
        distinguishing: "The founding TCA — depression, enuresis, and panic history",
      },
      {
        name: "Nortriptyline",
        slug: "nortriptyline",
        relationship: "Same class (TCA)",
        distinguishing: "The TCA survivor — level-guided, post-MI-safe, pain-effective",
      },
      {
        name: "Amoxapine",
        slug: "amoxapine",
        relationship: "Same class (TCA)",
        distinguishing: "The TCA-neuroleptic hybrid — EPS warnings included",
      },
      {
        name: "Desipramine",
        slug: "desipramine",
        relationship: "Same class (TCA)",
        distinguishing: "The NET-pure TCA — energising, and the paediatric-cardiac caution",
      },
      {
        name: "Doxepin",
        slug: "doxepin",
        relationship: "Same class (TCA)",
        distinguishing: "The H1-pure micro-dose to the full TCA — three drugs in one",
      },
      {
        name: "Lofepramine",
        slug: "lofepramine",
        relationship: "Same class (TCA)",
        distinguishing: "The UK kinder TCA — imipramine's safer cousin",
      },
      {
        name: "Maprotiline",
        slug: "maprotiline",
        relationship: "Same class (TCA)",
        distinguishing: "The tetracyclic — NET potency with the seizure ceiling",
      },
      {
        name: "Mianserin",
        slug: "mianserin",
        relationship: "Same class (TCA)",
        distinguishing: "Mirtazapine's precursor — with the FBC monitoring",
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
      question: "Which molecular target does Dothiepin primarily act on?",
      options: [
        "SERT/NET (balanced inhibition); H1, M1, alpha-1 (classic TCA binding)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Dothiepin acts primarily at SERT/NET (balanced inhibition); H1, M1, alpha-1 (classic TCA binding). Dothiepin inhibits serotonin and norepinephrine reuptake with the classic sedating tricyclic receptor profile.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Dothiepin?",
      options: ["Dry mouth", "Constipation", "Sedation and drowsiness", "Blurred vision and urinary hesitation"],
      correctIndex: 0,
      explanation: "Dry mouth — Muscarinic blockade — the classic tricyclic complaint.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Dothiepin for depression (historic)?",
      options: ["75-150 mg/day", "225 mg/day", "75-150 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For depression (historic): start 25-50 mg at bedtime, target 75-150 mg/day, maximum 225 mg/day. Increase to 75-150 mg",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Dothiepin in two sentences.",
      answer: "Dothiepin inhibits serotonin and norepinephrine reuptake with the classic sedating tricyclic receptor profile. Net effect: Monoamine reuptake inhibition plus receptor binding producing the classic tricyclic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Dothiepin.",
      answer: "Depression, including with anxiety/insomnia (historic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Dothiepin and how you would manage it.",
      answer: "Cardiotoxicity in overdose (the TCA catastrophe): Wide QRS, arrhythmias, hypotension, seizures — the reason TCAs require safe dispensing; the deadliest of the classic antidepressants in overdose. Management: Small quantities; sodium bicarbonate for QRS widening; ICU care.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Dothiepin require?",
      answer: "ECG (Baseline in over-40s and all with cardiac history); Blood pressure (orthostatic) (Baseline and titration); Tricyclic blood level where available (When response is poor or adverse effects prominent); Anticholinergic and falls review (elderly) (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Dothiepin that separates safe prescribers from unsafe ones.",
      answer: "The retirement lesson: a perfectly effective sedating TCA withdrawn from guidelines purely on overdose lethality — pharmacovigilance over efficacy.",
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
      checkpoint: "You now know what Dothiepin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Dothiepin works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Dothiepin safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Dothiepin.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Dothiepin with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Dothiepin.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Sedative effects night one; antidepressant response 2-4 weeks at therapeutic dose.",
    ],
    ifItWorks: [
      "Continue Dothiepin at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Dothiepin (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Dothiepin follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight gain common — the tricyclic story.",
    sedation: "Common — exploited by bedtime dosing.",
    dosing: [
      {
        indication: "Depression (historic)",
        starting: "25-50 mg at bedtime",
        titration: "Increase to 75-150 mg",
        target: "75-150 mg/day",
        max: "225 mg/day",
      },
    ],
    dosageForms: ["Capsules/tablets 25, 75 mg"],
    dosingTips: [
      "Bedtime-weighted dosing.",
      "ECG before starting in over-40s.",
      "Small safe quantities in suicidal patients.",
    ],
    overdose: [
      "Overdose with Dothiepin is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Dothiepin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 20-26 hours..",
      "Metabolism: Hepatic CYP2D6 (and others)..",
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
      "The retired UK sedative TCA — overdose-toxicity caution",
    ],
    potentialDisadvantages: [
      "See adverse effects section — the main disadvantages of Dothiepin are its key side effects.",
    ],
    primaryTargetSymptoms: ["Major depression", "Anxiety spectrum", "Neuropathic pain (agent-specific)", "Enuresis/ADHD (agent-specific)"],
    pearls: [
      "The retirement lesson: a perfectly effective sedating TCA withdrawn from guidelines purely on overdose lethality — pharmacovigilance over efficacy.",
      "Prothiaden survives in Indian and Commonwealth formularies — the geography of a drug's afterlife.",
      "For the legacy patient stable on dothiepin: documented review beats reflexive switching — continuity has its own safety value.",
      "The sedating-anxiolytic TCA texture made it the anxious-insomniac depression option of its era.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
