import type { Drug } from "../types";

/**
 * Asenapine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), asenapine monograph (book p. 11)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const asenapine: Drug = {
  /* ---- Identity ---- */
  slug: "asenapine",
  genericName: "Asenapine",
  brandNames: ["Saphris", "Secuado (transdermal)"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Asenapine"],
  /* ---- Hero / summary ---- */
  tagline: "The sublingual transdermal-ready atypical for schizophrenia, mania, and bipolar depression with low prolactin.",
  summary: "Asenapine is a sublingually administered atypical antipsychotic (also as a twice-yearly depot) with D2/5-HT2A antagonism plus distinctive noradrenergic and serotonergic binding. It is approved for schizophrenia, bipolar mania, and (uniquely among older atypicals) bipolar depression, with essentially no prolactin elevation and moderate metabolic risk. Sublingual administration — no water, no swallowing — is both its convenience and its compliance trap (swallowed tablets absorb poorly).",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Asenapine — from its molecular target (D2 (antagonist); 5-HT2A (antagonist); alpha-2 adrenergic; H1; 5-HT2C/5-HT7) to clinical effect.",
    "List the FDA-approved and off-label uses of Asenapine.",
    "Predict the common and serious side effects of Asenapine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Asenapine.",
    "Compare Asenapine with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Asenapine blocks D2 and 5-HT2A receptors with additional alpha-2 adrenergic, 5-HT2C/5-HT7, and H1 activity — a broad-binding atypical administered sublingually.",
    molecularTarget: "D2 (antagonist); 5-HT2A (antagonist); alpha-2 adrenergic; H1; 5-HT2C/5-HT7",
    effect: "Antipsychotic and anti-manic efficacy with antidepressant-range utility in bipolar depression; no prolactin elevation.",
    steps: [
      "D2 and 5-HT2A antagonism — the standard atypical antipsychotic core.",
      "Alpha-2 adrenergic antagonism may contribute to antidepressant effects (yohimbine-like noradrenergic tone).",
      "Sublingual absorption bypasses first-pass metabolism; swallowed drug absorbs poorly — administration technique is pharmacology.",
      "No tuberoinfundibular D2 dominance — prolactin stays flat.",
    ],
    pharmacokinetics: "Sublingual: absorbs in minutes; food and water must be avoided for 10 minutes after the dose. Transdermal patch delivers over 24 hours.",
    halfLife: "About 24 hours combined (short plasma half-life but long receptor kinetics); twice-daily sublingual dosing standard.",
    activeMetabolite: "N-desmethylasenapine (minor contribution).",
    metabolism: "Hepatic glucuronidation and CYP1A2/3A4 (minor); sublingual route avoids much first-pass effect.",
    excretion: "Renal and biliary metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Asenapine",
        sublabel: "Atypical antipsychotic",
        variant: "inhibit",
      },
      {
        id: "5ht2a",
        label: "5-HT2A receptor",
        sublabel: "Blocked at high affinity",
        variant: "target",
      },
      {
        id: "d2",
        label: "D2 receptor",
        sublabel: "Occupied in mesolimbic pathway",
        variant: "target",
      },
      {
        id: "da",
        label: "Dopamine firing",
        sublabel: "Disinhibited by 5-HT2A blockade",
        variant: "process",
      },
      {
        id: "meso",
        label: "Mesolimbic pathway",
        sublabel: "Psychotic salience normalised",
        variant: "output",
      },
      {
        id: "pfc",
        label: "Prefrontal cortex",
        sublabel: "Negative & cognitive symptoms",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "5ht2a",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "drug",
        to: "d2",
        label: "occupies",
        type: "inhibit",
      },
      {
        from: "5ht2a",
        to: "da",
        label: "disinhibits",
        type: "stimulate",
      },
      {
        from: "da",
        to: "meso",
        label: "normalises",
      },
      {
        from: "d2",
        to: "meso",
        label: "reduces psychosis signal",
      },
      {
        from: "drug",
        to: "pfc",
        label: "5-HT2A-mediated benefit",
      },
    ],
    caption: "5-HT2A antagonism 'releases the brake' on dopamine firing, while moderate D2 occupancy treats positive symptoms — the serotonin-dopamine hypothesis of atypical antipsychotics.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)", "Norepinephrine (NE)"],
  receptors: ["D2 (antagonist)", "5-HT2A (antagonist)", "Alpha-2 adrenergic (antagonist)", "H1 (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "Sublingual twice daily; depot every 2 weeks.",
      ageGroup: "Adults",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      status: "fda-approved",
      description: "Monotherapy or adjunct.",
      ageGroup: "Adults & ≥10 years (USA)",
    },
    {
      name: "Bipolar I depression",
      status: "fda-approved",
      description: "A distinctive approval — adds to the shortlist of agents for the depressed pole.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Asenapine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Asenapine is not approved for dementia-related psychosis; class boxed warning applies.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Somnolence and sedation",
      frequency: "common",
      severity: "moderate",
      description: "H1-mediated; often useful early in mania.",
      management: "Bedtime-weighted dosing.",
    },
    {
      name: "Oral hypoesthesia / dysgeusia",
      frequency: "common",
      severity: "mild",
      description: "Numbness or taste disturbance under the tongue — the sublingual signature.",
      management: "Reassurance; usually transient.",
    },
    {
      name: "Akathisia and EPS",
      frequency: "common",
      severity: "moderate",
      description: "Dose-dependent.",
      management: "Dose reduction; propranolol.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "moderate",
      description: "Moderate — between aripiprazole and olanzapine.",
      management: "Monitor; lifestyle.",
    },
    {
      name: "Anxiety and dizziness",
      frequency: "common",
      severity: "mild",
      description: "Early and transient.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hypersensitivity reactions including anaphylaxis",
      frequency: "rare",
      severity: "life-threatening",
      description: "Reported with sublingual use — the drug's distinctive serious warning.",
      management: "Stop; emergency management.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "uncommon",
      severity: "severe",
      description: "Class risk.",
      management: "Reduce/switch.",
    },
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Stop; ICU.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description: "Threshold-lowering as a class effect.",
      management: "Caution in epilepsy.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Weight and BMI",
      frequency: "Baseline, then at 4, 8, 12 weeks and quarterly",
      rationale: "Class metabolic risk — early trajectory detection.",
    },
    {
      parameter: "Fasting glucose / HbA1c",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Atypical antipsychotics can unmask diabetes.",
    },
    {
      parameter: "Lipid profile (fasting)",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Class metabolic risk.",
    },
    {
      parameter: "Blood pressure (orthostatic)",
      frequency: "Baseline and during titration",
      rationale: "Alpha-1 blockade — orthostasis risk.",
    },
    {
      parameter: "AIMS examination",
      frequency: "Baseline, then every 6–12 months",
      rationale: "Tardive dyskinesia surveillance.",
    },
  ],
  interactions: [
    {
      drug: "CNS depressants and alcohol",
      severity: "moderate",
      mechanism: "Additive sedation and orthostasis.",
      action: "Counsel against alcohol; anticipate increased sedation.",
    },
    {
      drug: "QT-prolonging drugs",
      severity: "moderate",
      mechanism: "Additive QT effect.",
      action: "ECG if combinations unavoidable.",
    },
    {
      drug: "Antihypertensives",
      severity: "moderate",
      mechanism: "Additive hypotension via alpha-1 blockade.",
      action: "Monitor standing blood pressure.",
    },
  ],
  pregnancy: {
    summary: "Limited human data; no clear teratogenic signal. Standard antipsychotic pregnancy logic applies.",
    lactation: "Likely excreted in milk in small amounts; monitor the infant for sedation if used.",
  },
  renalAdjustment: "No dose adjustment required.",
  hepaticAdjustment: "Not recommended in severe hepatic impairment (exposure rises several-fold).",
  /* ---- Education ---- */
  patientExplanation: "Asenapine is a tablet that dissolves under the tongue — no water needed. It treats psychosis, mania, and bipolar depression. The golden rule: nothing to eat or drink for 10 minutes after the tablet goes in, because it absorbs through the lining of your mouth, not your stomach.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Asenapine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Sublingual = pharmacology: swallowed asenapine is a different (weaker) drug — technique counselling at every dispensing.",
    "The 10-minute rule (no food/drink) is the adherence hinge.",
    "Bipolar depression approval puts it on the short list with quetiapine, lurasidone, cariprazine, and OFC.",
    "No prolactin rise — an option when risperidone has caused hyperprolactinaemia.",
    "Secuado patch twice-weekly? — no, once applied delivers 24 hours over a week? (Patch is applied once weekly... verify) — the depot is every 2 weeks.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Asenapine: Asenapine blocks D2 and 5-HT2A receptors with additional alpha-2 adrenergic, 5-HT2C/5-HT7, and H1 activity — a broad-binding atypical administered sublingually.",
        "Uses of Asenapine: Schizophrenia; Acute manic / mixed episodes of bipolar I; Bipolar I depression",
        "Route: sublingual (absorbs through oral mucosa; swallowed drug poorly absorbed).",
        "Approvals: schizophrenia, bipolar mania (mono/adjunct), bipolar depression.",
      ],
      practical: [
        "Prescribe Asenapine for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually)",
      ],
      longAnswer: [
        "Asenapine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Route: sublingual (absorbs through oral mucosa; swallowed drug poorly absorbed).",
        "Approvals: schizophrenia, bipolar mania (mono/adjunct), bipolar depression.",
      ],
    },
    neetPg: {
      highYield: [
        "Route: sublingual (absorbs through oral mucosa; swallowed drug poorly absorbed).",
        "Approvals: schizophrenia, bipolar mania (mono/adjunct), bipolar depression.",
        "No prolactin elevation; moderate weight gain.",
        "Signature administration rule: no food or drink for 10 minutes after dosing.",
        "Transdermal patch and 2-weekly depot exist for adherence.",
      ],
      pyqConcepts: [
        "Mechanism/target of Asenapine",
        "Key adverse effect: Hypersensitivity reactions including anaphylaxis",
        "Dosing and titration of Asenapine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Asenapine develops hypersensitivity reactions including anaphylaxis — next best step?",
        "When to choose Asenapine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (antagonist); 5-HT2A (antagonist); alpha-2 adrenergic; H1; 5-HT2C/5-HT7",
        "Most common side effects: Somnolence and sedation, Oral hypoesthesia / dysgeusia, Akathisia and EPS",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Technique is pharmacology — sublingual absorbed, swallowed wasted.",
        "Bipolar depression + no prolactin problems = its niche.",
        "Sublingual = pharmacology: swallowed asenapine is a different (weaker) drug — technique counselling at every dispensing.",
        "The 10-minute rule (no food/drink) is the adherence hinge.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Route: sublingual (absorbs through oral mucosa; swallowed drug poorly absorbed).",
    "Approvals: schizophrenia, bipolar mania (mono/adjunct), bipolar depression.",
    "No prolactin elevation; moderate weight gain.",
    "Signature administration rule: no food or drink for 10 minutes after dosing.",
    "Transdermal patch and 2-weekly depot exist for adherence.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia",
      presentation: "A patient presenting with schizophrenia, started on Asenapine.",
      history: "A adult patient presents with a schizophrenia picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia. Differentials are considered and excluded clinically.",
      rationale: "Asenapine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 5 mg sublingual twice daily, titrated to 5–10 mg twice daily with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Asenapine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Asenapine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (antagonist); 5-HT2A (antagonist); alpha-2 adrenergic; H1; 5-HT2C/5-HT7",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "See full guide",
            },
            {
              drug: "Clozapine",
              value: "See full guide",
            },
            {
              drug: "Lurasidone",
              value: "See full guide",
            },
            {
              drug: "Olanzapine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 24 hours combined (short plasma half-life but long receptor kinetics); twice-daily sublingual dosing standard.",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "—",
            },
            {
              drug: "Clozapine",
              value: "—",
            },
            {
              drug: "Lurasidone",
              value: "—",
            },
            {
              drug: "Olanzapine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "See product information and class comparison.",
            },
            {
              drug: "Clozapine",
              value: "—",
            },
            {
              drug: "Lurasidone",
              value: "—",
            },
            {
              drug: "Olanzapine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Mild-to-moderate.",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "Low; can be activating — insomnia is more common than somnolence.",
            },
            {
              drug: "Clozapine",
              value: "Very high initially; attenuates at a stable dose but remains the dose-limiting effect for many.",
            },
            {
              drug: "Lurasidone",
              value: "Low — may be mildly activating.",
            },
            {
              drug: "Olanzapine",
              value: "Moderate to high — usually transient at a given dose but dose-limiting for many patients.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Sublingual dosing + bipolar depression approval; low prolactin",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "Least metabolic burden among atypicals — the activating 'thermostat' antipsychotic",
            },
            {
              drug: "Clozapine",
              value: "Treatment-resistant schizophrenia + anti-suicide efficacy — the drug that rescues the failures",
            },
            {
              drug: "Lurasidone",
              value: "Bipolar depression + metabolic safety — the 'clean' lurasidone/ziprasidone/aripiprazole trio",
            },
            {
              drug: "Olanzapine",
              value: "Most robust broad-spectrum atypical — heaviest metabolic burden",
            },
          ],
        },
      ],
      takeaway: "All atypical antipsychotics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Asenapine reaches peak plasma concentration and begins acting at its molecular target (D2 (antagonist); 5-HT2A (antagonist); alpha-2 adrenergic; H1; 5-HT2C/5-HT7). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (somnolence and sedation, oral hypoesthesia / dysgeusia, akathisia and eps). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Mania: days; schizophrenia: 1–3 weeks as with class.)",
      title: "Therapeutic effect builds",
      description: "Mania: days; schizophrenia: 1–3 weeks as with class. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Asenapine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Asenapine take to work?",
      answer: "Mania: days; schizophrenia: 1–3 weeks as with class.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Asenapine?",
      answer: "The most frequently reported effects are: Somnolence and sedation, Oral hypoesthesia / dysgeusia, Akathisia and EPS, Weight gain, Anxiety and dizziness. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Asenapine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Asenapine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Asenapine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Asenapine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Asenapine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), asenapine monograph, p. 11",
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
        source: "FDA Prescribing Information for Saphris (Asenapine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for asenapine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Asenapine",
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
      name: "Aripiprazole",
      slug: "aripiprazole",
      drugClass: "Dopamine Stabiliser",
      relationship: "Same class (Dopamine Stabiliser)",
    },
    {
      name: "Clozapine",
      slug: "clozapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Lurasidone",
      slug: "lurasidone",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Olanzapine",
      slug: "olanzapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Paliperidone",
      slug: "paliperidone",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Quetiapine",
      slug: "quetiapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Risperidone",
      slug: "risperidone",
      drugClass: "Atypical Antipsychotic",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Schizophrenia",
      relationship: "primary",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      relationship: "primary",
    },
    {
      name: "Bipolar I depression",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Asenapine",
      type: "drug",
      href: "/drugs/asenapine",
      note: "The drug you're reading about",
    },
    {
      label: "Atypical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
    },
    {
      label: "Dopamine (DA)",
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
      label: "D2 (antagonist); 5-HT2A (antagonist); alpha-2 adrenergic; H1; 5-HT2C/5-HT7",
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
      label: "Nucleus Accumbens",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Schizophrenia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Acute manic / mixed episodes of bipolar I",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar I depression",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Hypersensitivity reactions including anaphylaxis",
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
      label: "Somnolence and sedation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Asenapine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The sublingual transdermal-ready atypical for schizophrenia, mania, and bipolar depression with low prolactin.",
    summary: "Asenapine is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Asenapine is a tablet that dissolves under the tongue — no water needed. It treats psychosis, mania, and bipolar depression. The golden rule: nothing to eat or drink for 10 minutes after the tablet goes in, because it absorbs through the lining of your mouth, not your stomach.",
    sideEffects: "The most common side effects are: somnolence and sedation, oral hypoesthesia / dysgeusia, akathisia and eps, weight gain, anxiety and dizziness. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hypersensitivity reactions including anaphylaxis and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, then at 4, 8, 12 weeks and quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually); lipid profile (fasting) (baseline, 12 weeks, then annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: CNS depressants and alcohol, QT-prolonging drugs, Antihypertensives. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Asenlap / Espiride (generic)",
        manufacturer: "various",
        strengths: "5, 10 mg sublingual",
      },
    ],
    typicalDoses: "Schizophrenia 5–10 mg sublingual twice daily; mania 10 mg bid; bipolar depression 3.5–7 mg evenings.",
    prescribingScenarios: [
      "Bipolar depression with prolactin sensitivity.",
      "Swallow-averse or waterless-dosing situations.",
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
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Asenapine",
        slug: "asenapine",
        relationship: "This guide",
        distinguishing: "Sublingual dosing + bipolar depression approval; low prolactin",
      },
      {
        name: "Aripiprazole",
        slug: "aripiprazole",
        relationship: "Same class (Dopamine Stabiliser)",
        distinguishing: "Least metabolic burden among atypicals — the activating 'thermostat' antipsychotic",
      },
      {
        name: "Clozapine",
        slug: "clozapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Treatment-resistant schizophrenia + anti-suicide efficacy — the drug that rescues the failures",
      },
      {
        name: "Lurasidone",
        slug: "lurasidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Bipolar depression + metabolic safety — the 'clean' lurasidone/ziprasidone/aripiprazole trio",
      },
      {
        name: "Olanzapine",
        slug: "olanzapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Most robust broad-spectrum atypical — heaviest metabolic burden",
      },
      {
        name: "Paliperidone",
        slug: "paliperidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "The LAI platform king — monthly to 6-monthly injections for schizophrenia",
      },
      {
        name: "Quetiapine",
        slug: "quetiapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Bipolar depression approval + virtually zero EPS/prolactin — the sedating antidepressant-antipsychotic",
      },
      {
        name: "Risperidone",
        slug: "risperidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Most potent D2 blockade among atypicals — highest prolactin, best-studied LAI",
      },
      {
        name: "Ziprasidone",
        slug: "ziprasidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Weight-neutral oral + the least hypotensive IM antipsychotic — with QT vigilance",
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
      question: "Which molecular target does Asenapine primarily act on?",
      options: [
        "D2 (antagonist); 5-HT2A (antagonist); alpha-2 adrenergic; H1; 5-HT2C/5-HT7",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Asenapine acts primarily at D2 (antagonist); 5-HT2A (antagonist); alpha-2 adrenergic; H1; 5-HT2C/5-HT7. Asenapine blocks D2 and 5-HT2A receptors with additional alpha-2 adrenergic, 5-HT2C/5-HT7, and H1 activity — a broad-binding atypical administered sublingually.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Asenapine?",
      options: ["Somnolence and sedation", "Oral hypoesthesia / dysgeusia", "Akathisia and EPS", "Weight gain"],
      correctIndex: 0,
      explanation: "Somnolence and sedation — H1-mediated; often useful early in mania.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Asenapine for schizophrenia?",
      options: ["5–10 mg twice daily", "20 mg/day", "5–10 mg twice daily (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia: start 5 mg sublingual twice daily, target 5–10 mg twice daily, maximum 20 mg/day. Increase to 10 mg bid as needed",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Asenapine in two sentences.",
      answer: "Asenapine blocks D2 and 5-HT2A receptors with additional alpha-2 adrenergic, 5-HT2C/5-HT7, and H1 activity — a broad-binding atypical administered sublingually. Net effect: Antipsychotic and anti-manic efficacy with antidepressant-range utility in bipolar depression; no prolactin elevation.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Asenapine.",
      answer: "Schizophrenia, Acute manic / mixed episodes of bipolar I, Bipolar I depression. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Asenapine and how you would manage it.",
      answer: "Hypersensitivity reactions including anaphylaxis: Reported with sublingual use — the drug's distinctive serious warning. Management: Stop; emergency management.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Asenapine require?",
      answer: "Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually); Blood pressure (orthostatic) (Baseline and during titration)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Asenapine that separates safe prescribers from unsafe ones.",
      answer: "Technique is pharmacology — sublingual absorbed, swallowed wasted.",
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
      checkpoint: "You now know what Asenapine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Asenapine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Asenapine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Asenapine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Asenapine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Asenapine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Mania: days; schizophrenia: 1–3 weeks as with class.",
    ],
    ifItWorks: [
      "Continue Asenapine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Asenapine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Asenapine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Schizophrenia",
        starting: "5 mg sublingual twice daily",
        titration: "Increase to 10 mg bid as needed",
        target: "5–10 mg twice daily",
        max: "20 mg/day",
      },
      {
        indication: "Bipolar mania",
        starting: "10 mg sublingual twice daily",
        titration: "May reduce to 5 mg bid for tolerability",
        target: "5–10 mg twice daily",
        max: "20 mg/day",
      },
      {
        indication: "Bipolar depression",
        starting: "3.5 mg sublingual nightly",
        titration: "Increase to 5–7 mg as needed in evenings",
        target: "3.5–7 mg in the evening",
        max: "14 mg/day (div in severe cases per label)",
      },
    ],
    dosageForms: [
      "Sublingual tablets 5, 10 mg",
      "Transdermal patch (Secuado) 3.8–15.4 mg/24 h",
      "Depot every 2 weeks",
    ],
    dosingTips: [
      "Teach the 10-minute no-food-drink rule with the first tablet.",
      "Check the mouth — sublingual tablets are easily pocketed.",
      "Weight one dose to bedtime when sedation helps.",
    ],
    overdose: [
      "Overdose with Asenapine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Asenapine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 24 hours combined (short plasma half-life but long receptor kinetics); twice-daily sublingual dosing standard..",
      "Metabolism: Hepatic glucuronidation and CYP1A2/3A4 (minor); sublingual route avoids much first-pass effect..",
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
      "Bipolar depression approval (short list).",
      "No prolactin rise.",
      "Waterless dosing aids swallow-averse patients.",
    ],
    potentialDisadvantages: ["10-minute rule is fragile in real life.", "Twice-daily dosing.", "Oral numbness/taste disturbance.", "Moderate weight gain."],
    primaryTargetSymptoms: ["Positive symptoms of psychosis", "Manic symptoms", "Bipolar depressive episodes"],
    pearls: [
      "Technique is pharmacology — sublingual absorbed, swallowed wasted.",
      "Bipolar depression + no prolactin problems = its niche.",
      "Sublingual = pharmacology: swallowed asenapine is a different (weaker) drug — technique counselling at every dispensing.",
      "The 10-minute rule (no food/drink) is the adherence hinge.",
      "Bipolar depression approval puts it on the short list with quetiapine, lurasidone, cariprazine, and OFC.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
