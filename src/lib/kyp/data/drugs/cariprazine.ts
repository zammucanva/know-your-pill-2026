import type { Drug } from "../types";

/**
 * Cariprazine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), cariprazine monograph (book p. 21)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const cariprazine: Drug = {
  /* ---- Identity ---- */
  slug: "cariprazine",
  genericName: "Cariprazine",
  brandNames: ["Vraylar", "Reagila"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Dopamine Stabiliser",
  drugClassFullName: "Dopamine-Serotonin Stabiliser (Atypical Antipsychotic)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Cariprazine"],
  /* ---- Hero / summary ---- */
  tagline: "The D3-preferring stabiliser — the bipolar-depression and negative-symptom specialist.",
  summary: "Cariprazine is a dopamine D3/D2 partial agonist with the highest D3 affinity in clinical use, plus 5-HT1A partial agonism and 5-HT2B antagonism. Its D3 emphasis is linked to effects on motivation, reward, and negative symptoms — setting it apart from other agents. It is approved for schizophrenia, bipolar mania, and — its signature — bipolar depression, with a metabolically clean profile and very long effective half-life via active metabolites.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Cariprazine — from its molecular target (D3 (highest affinity in clinical use); D2 (partial agonist); 5-HT1A (partial agonist); 5-HT2B (antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Cariprazine.",
    "Predict the common and serious side effects of Cariprazine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Cariprazine.",
    "Compare Cariprazine with other dopamine stabilisers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Cariprazine is a D3-preferring D3/D2 partial agonist (10-fold D3 selectivity) with 5-HT1A partial agonism — a stabiliser tuned toward the dopamine receptor that governs motivation and reward.",
    molecularTarget: "D3 (highest affinity in clinical use); D2 (partial agonist); 5-HT1A (partial agonist); 5-HT2B (antagonist)",
    effect: "Antipsychotic, anti-manic, and antidepressant-range efficacy with D3-linked benefits on motivation and negative symptoms.",
    steps: [
      "Partial agonism at D2 — the aripiprazole-class stabiliser mechanism for positive symptoms.",
      "D3 selectivity engages mesolimbic reward and motivation circuitry — the theoretical basis for its negative-symptom and pro-motivational profile.",
      "5-HT1A partial agonism contributes serotonergic modulation relevant to mood.",
      "Long-acting active metabolites (didemethylcariprazine) extend effective coverage to weeks.",
    ],
    pharmacokinetics: "Peak 3–6 hours; steady state takes 1–2 weeks (metabolites accumulate longer).",
    halfLife: "Cariprazine 1–3 h BUT active metabolites 21–77 h — effective coverage 1–4 weeks; dose changes take weeks to fully manifest.",
    activeMetabolite: "Desmethyl- and didesmethylcariprazine — potent D3/D2 partial agonists with long half-lives.",
    metabolism: "Hepatic CYP3A4 (major) and 2D6 (minor).",
    excretion: "Renal and faecal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Cariprazine",
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
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)"],
  receptors: ["D3 (partial agonist, highest affinity)", "D2 (partial agonist)", "5-HT1A (partial agonist)", "5-HT2B (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "Effective 1.5–6 mg/day; negative-symptom benefits suggested.",
      ageGroup: "Adults",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      status: "fda-approved",
      description: "Effective anti-manic stabiliser.",
      ageGroup: "Adults",
    },
    {
      name: "Bipolar I depression",
      status: "fda-approved",
      description: "A signature indication — joins quetiapine, lurasidone, asenapine, and OFC on the short list.",
      ageGroup: "Adults",
    },
    {
      name: "Major depressive disorder — adjunctive",
      status: "fda-approved",
      description: "1.5–3 mg/day as add-on to antidepressants.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Cariprazine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Strong CYP3A4 inducers (carbamazepine, rifampicin)",
      severity: "absolute",
      rationale: "Can eliminate cariprazine exposure.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Cariprazine is not approved for dementia-related psychosis; class boxed warning applies.",
    },
    {
      title: "Suicidal thinking in adjunctive depression use",
      text: "Antidepressant-class warning applies for the MDD adjunct indication.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Akathisia and restlessness",
      frequency: "common",
      severity: "moderate",
      description: "Less than aripiprazole on average but still the main adverse effect, especially in depression dosing.",
      management: "Dose reduction; propranolol; slower titration.",
    },
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description: "Usually early and transient.",
      management: "Take with food.",
    },
    {
      name: "Insomnia or agitation",
      frequency: "common",
      severity: "mild",
      description: "Activating tendency.",
      management: "Morning dosing.",
    },
    {
      name: "Restless legs / extrapyramidal symptoms",
      frequency: "uncommon",
      severity: "moderate",
      description: "Dose-dependent.",
      management: "Dose reduction.",
    },
    {
      name: "Headache and fatigue",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Tardive dyskinesia",
      frequency: "rare",
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
      name: "Impulse control disorders",
      frequency: "rare",
      severity: "severe",
      description: "Partial-agonist class effect (gambling, hypersexuality).",
      management: "Stop; counsel at initiation.",
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
      drug: "Strong CYP3A4 inhibitors (ketoconazole, clarithromycin)",
      severity: "major",
      mechanism: "Raise cariprazine and metabolite levels.",
      action: "Reduce dose ~50%; monitor.",
    },
    {
      drug: "Strong CYP3A4 inducers (carbamazepine, rifampicin)",
      severity: "contraindicated",
      mechanism: "Can eliminate cariprazine exposure.",
      action: "Contraindicated combination.",
    },
  ],
  pregnancy: {
    summary: "Limited human data; no teratogenic signal established. Note the long effective half-life — planning ahead matters if switching is desired around conception. Standard antipsychotic pregnancy logic otherwise.",
    lactation: "Limited data; long-half-life metabolites make infant monitoring essential if used.",
  },
  renalAdjustment: "No adjustment for mild-moderate impairment; not studied in severe impairment.",
  hepaticAdjustment: "No adjustment for mild; not recommended in moderate-severe impairment.",
  /* ---- Education ---- */
  patientExplanation: "Cariprazine is a dopamine-tuning medicine that leans toward the part of the dopamine system responsible for drive and motivation. It treats schizophrenia, mania, and the depressed phase of bipolar disorder. It stays in the body a long time, so its effects build and fade over weeks — dose changes are slow and deliberate.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Cariprazine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "D3 is the differentiator: motivation, reward, negative symptoms — the cariprazine hypothesis.",
    "Bipolar depression + metabolic safety: the indication pairing it shares with lurasidone.",
    "The metabolite tail is weeks long — patience is dosing pharmacology: changes take weeks to fully show.",
    "Akathisia remains the main tolerability issue in depression dosing — titrate slowly through 1.5 mg.",
    "Contraindicated with strong 3A4 inducers — unlike aripiprazole where dose-doubling is possible.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Cariprazine: Cariprazine is a D3-preferring D3/D2 partial agonist (10-fold D3 selectivity) with 5-HT1A partial agonism — a stabiliser tuned toward the dopamine receptor that governs motivation and reward.",
        "Uses of Cariprazine: Schizophrenia; Acute manic / mixed episodes of bipolar I; Bipolar I depression; Major depressive disorder — adjunctive",
        "Mechanism: D3-PREFERRING D3/D2 partial agonist (unique in class) + 5-HT1A partial agonist.",
        "Signature: bipolar depression approval + suggested negative-symptom benefit.",
      ],
      practical: [
        "Prescribe Cariprazine for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually)",
      ],
      longAnswer: [
        "Cariprazine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D3-PREFERRING D3/D2 partial agonist (unique in class) + 5-HT1A partial agonist.",
        "Signature: bipolar depression approval + suggested negative-symptom benefit.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D3-PREFERRING D3/D2 partial agonist (unique in class) + 5-HT1A partial agonist.",
        "Signature: bipolar depression approval + suggested negative-symptom benefit.",
        "Approvals: schizophrenia, bipolar mania, bipolar depression, MDD adjunct.",
        "Effective half-life 1–4 weeks via long-lived active metabolites.",
        "CYP3A4 metabolism — inducers contraindicated, inhibitors halve dose.",
        "Doses: schizophrenia 1.5–6 mg; bipolar depression 1.5–3 mg.",
      ],
      pyqConcepts: ["Mechanism/target of Cariprazine", "Key adverse effect: Tardive dyskinesia", "Dosing and titration of Cariprazine"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Cariprazine develops tardive dyskinesia — next best step?",
        "When to choose Cariprazine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D3 (highest affinity in clinical use); D2 (partial agonist); 5-HT1A (partial agonist); 5-HT2B (antagonist)",
        "Most common side effects: Akathisia and restlessness, Nausea, Insomnia or agitation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "D3 selectivity = the motivational antipsychotic — the cariprazine hypothesis.",
        "Weeks-long metabolite tail: patience is the dosing discipline.",
        "D3 is the differentiator: motivation, reward, negative symptoms — the cariprazine hypothesis.",
        "Bipolar depression + metabolic safety: the indication pairing it shares with lurasidone.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: D3-PREFERRING D3/D2 partial agonist (unique in class) + 5-HT1A partial agonist.",
    "Signature: bipolar depression approval + suggested negative-symptom benefit.",
    "Approvals: schizophrenia, bipolar mania, bipolar depression, MDD adjunct.",
    "Effective half-life 1–4 weeks via long-lived active metabolites.",
    "CYP3A4 metabolism — inducers contraindicated, inhibitors halve dose.",
    "Doses: schizophrenia 1.5–6 mg; bipolar depression 1.5–3 mg.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia",
      presentation: "A patient presenting with schizophrenia, started on Cariprazine.",
      history: "A adult patient presents with a schizophrenia picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia. Differentials are considered and excluded clinically.",
      rationale: "Cariprazine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Dopamine Stabiliser) with strong evidence in this condition.",
      management: "Started at 1.5 mg once daily, titrated to 1.5–6 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Cariprazine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Dopamine Stabiliser comparison — choosing within the class",
      primaryDrug: "Cariprazine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D3 (highest affinity in clinical use); D2 (partial agonist); 5-HT1A (partial agonist); 5-HT2B (antagonist)",
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
          primaryValue: "Cariprazine 1–3 h BUT active metabolites 21–77 h — effective coverage 1–4 weeks; dose changes take weeks to fully manifest.",
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
          primaryValue: "Low — mildly activating tendency.",
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
          primaryValue: "D3-preferring partial agonist; bipolar depression + negative symptoms",
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
      description: "Cariprazine reaches peak plasma concentration and begins acting at its molecular target (D3 (highest affinity in clinical use); D2 (partial agonist); 5-HT1A (partial agonist); 5-HT2B (antagonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (akathisia and restlessness, nausea, insomnia or agitation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Mania: days to 1 week; schizophrenia: 1–3 weeks; bipolar depression: 1–3 weeks.)",
      title: "Therapeutic effect builds",
      description: "Mania: days to 1 week; schizophrenia: 1–3 weeks; bipolar depression: 1–3 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Cariprazine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Cariprazine take to work?",
      answer: "Mania: days to 1 week; schizophrenia: 1–3 weeks; bipolar depression: 1–3 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Cariprazine?",
      answer: "The most frequently reported effects are: Akathisia and restlessness, Nausea, Insomnia or agitation, Restless legs / extrapyramidal symptoms, Headache and fatigue. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Cariprazine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Cariprazine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Cariprazine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Cariprazine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Cariprazine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), cariprazine monograph, p. 21",
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
        source: "FDA Prescribing Information for Vraylar (Cariprazine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for cariprazine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Cariprazine",
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
    {
      name: "Major depressive disorder — adjunctive",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Cariprazine",
      type: "drug",
      href: "/drugs/cariprazine",
      note: "The drug you're reading about",
    },
    {
      label: "Dopamine Stabiliser",
      type: "class",
      href: "#mechanism",
      note: "Dopamine-Serotonin Stabiliser (Atypical Antipsychotic)",
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
      label: "D3 (highest affinity in clinical use); D2 (partial agonist); 5-HT1A (partial agonist); 5-HT2B (antagonist)",
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
      label: "Tardive dyskinesia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Neuroleptic malignant syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Akathisia and restlessness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Cariprazine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The D3-preferring stabiliser — the bipolar-depression and negative-symptom specialist.",
    summary: "Cariprazine is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Cariprazine is a dopamine-tuning medicine that leans toward the part of the dopamine system responsible for drive and motivation. It treats schizophrenia, mania, and the depressed phase of bipolar disorder. It stays in the body a long time, so its effects build and fade over weeks — dose changes are slow and deliberate.",
    sideEffects: "The most common side effects are: akathisia and restlessness, nausea, insomnia or agitation, restless legs / extrapyramidal symptoms, headache and fatigue. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Tardive dyskinesia and Neuroleptic malignant syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, then at 4, 8, 12 weeks and quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually); lipid profile (fasting) (baseline, 12 weeks, then annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Strong CYP3A4 inhibitors (ketoconazole, clarithromycin), Strong CYP3A4 inducers (carbamazepine, rifampicin). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Cariprazine (limited/special availability)",
        manufacturer: "imported",
        strengths: "1.5–6 mg",
      },
    ],
    typicalDoses: "Schizophrenia 1.5–6 mg; bipolar depression 1.5–3 mg once daily.",
    prescribingScenarios: [
      "Bipolar depression with metabolic contraindications to quetiapine.",
      "Negative-symptom-predominant schizophrenia.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "high",
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
        name: "Cariprazine",
        slug: "cariprazine",
        relationship: "This guide",
        distinguishing: "D3-preferring partial agonist; bipolar depression + negative symptoms",
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
      question: "Which molecular target does Cariprazine primarily act on?",
      options: [
        "D3 (highest affinity in clinical use); D2 (partial agonist); 5-HT1A (partial agonist); 5-HT2B (antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Cariprazine acts primarily at D3 (highest affinity in clinical use); D2 (partial agonist); 5-HT1A (partial agonist); 5-HT2B (antagonist). Cariprazine is a D3-preferring D3/D2 partial agonist (10-fold D3 selectivity) with 5-HT1A partial agonism — a stabiliser tuned toward the dopamine receptor that governs motivation and reward.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Cariprazine?",
      options: ["Akathisia and restlessness", "Nausea", "Insomnia or agitation", "Restless legs / extrapyramidal symptoms"],
      correctIndex: 0,
      explanation: "Akathisia and restlessness — Less than aripiprazole on average but still the main adverse effect, especially in depression dosing.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Cariprazine for schizophrenia?",
      options: ["1.5–6 mg/day", "6 mg/day", "1.5–6 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia: start 1.5 mg once daily, target 1.5–6 mg/day, maximum 6 mg/day. Increase to 3 mg on day 2; up to 6 mg as needed",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Cariprazine in two sentences.",
      answer: "Cariprazine is a D3-preferring D3/D2 partial agonist (10-fold D3 selectivity) with 5-HT1A partial agonism — a stabiliser tuned toward the dopamine receptor that governs motivation and reward. Net effect: Antipsychotic, anti-manic, and antidepressant-range efficacy with D3-linked benefits on motivation and negative symptoms.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Cariprazine.",
      answer: "Schizophrenia, Acute manic / mixed episodes of bipolar I, Bipolar I depression, Major depressive disorder — adjunctive. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Cariprazine and how you would manage it.",
      answer: "Tardive dyskinesia: Class risk. Management: Reduce/switch.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Cariprazine require?",
      answer: "Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually); Blood pressure (orthostatic) (Baseline and during titration)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Cariprazine that separates safe prescribers from unsafe ones.",
      answer: "D3 selectivity = the motivational antipsychotic — the cariprazine hypothesis.",
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
      checkpoint: "You now know what Cariprazine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Cariprazine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Cariprazine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Cariprazine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Cariprazine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Cariprazine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Mania: days to 1 week; schizophrenia: 1–3 weeks; bipolar depression: 1–3 weeks.",
    ],
    ifItWorks: [
      "Continue Cariprazine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Cariprazine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Cariprazine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Low — mildly activating tendency.",
    dosing: [
      {
        indication: "Schizophrenia",
        starting: "1.5 mg once daily",
        titration: "Increase to 3 mg on day 2; up to 6 mg as needed",
        target: "1.5–6 mg/day",
        max: "6 mg/day",
      },
      {
        indication: "Bipolar mania",
        starting: "1.5 mg once daily",
        titration: "Increase by 1.5 mg at intervals of ≥ 1 day",
        target: "3–6 mg/day",
        max: "6 mg/day",
      },
      {
        indication: "Bipolar depression",
        starting: "1.5 mg once daily",
        titration: "Increase by 1.5 mg at ≥ 7-day intervals (the slow road)",
        target: "1.5–3 mg/day",
        max: "3 mg/day",
        notes: [
          "Slow titration minimises akathisia — the main tolerability issue in depression",
        ],
      },
      {
        indication: "MDD adjunct",
        starting: "1.5 mg once daily",
        titration: "Increase after 14 days as needed",
        target: "1.5–3 mg/day",
        max: "3 mg/day",
      },
    ],
    dosageForms: ["Capsules 1.5, 3, 4.5, 6 mg"],
    dosingTips: [
      "Slow titration in depression — akathisia is dose- and speed-related.",
      "Dose changes take weeks to fully manifest (metabolite tail) — resist rapid escalation.",
      "Morning dosing suits the activating tendency.",
    ],
    overdose: [
      "Overdose with Cariprazine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Cariprazine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Cariprazine 1–3 h BUT active metabolites 21–77 h — effective coverage 1–4 weeks; dose changes take weeks to fully manifest..",
      "Metabolism: Hepatic CYP3A4 (major) and 2D6 (minor)..",
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
      "Bipolar depression with metabolic safety.",
      "D3-linked motivational/negative-symptom profile.",
      "No prolactin rise.",
    ],
    potentialDisadvantages: [
      "Akathisia still common.",
      "Very long half-life complicates stopping and switching.",
      "3A4 inducers contraindicated.",
    ],
    primaryTargetSymptoms: [
      "Positive symptoms of psychosis",
      "Manic symptoms",
      "Bipolar depressive episodes",
      "Motivation and negative symptoms (emerging evidence)",
    ],
    pearls: [
      "D3 selectivity = the motivational antipsychotic — the cariprazine hypothesis.",
      "Weeks-long metabolite tail: patience is the dosing discipline.",
      "D3 is the differentiator: motivation, reward, negative symptoms — the cariprazine hypothesis.",
      "Bipolar depression + metabolic safety: the indication pairing it shares with lurasidone.",
      "The metabolite tail is weeks long — patience is dosing pharmacology: changes take weeks to fully show.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
