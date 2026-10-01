import type { Drug } from "../types";

/**
 * Brexpiprazole — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), brexpiprazole monograph (book p. 15)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const brexpiprazole: Drug = {
  /* ---- Identity ---- */
  slug: "brexpiprazole",
  genericName: "Brexpiprazole",
  brandNames: ["Rexulti"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Dopamine Stabiliser",
  drugClassFullName: "Dopamine-Serotonin Stabiliser (Atypical Antipsychotic)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Brexpiprazole"],
  /* ---- Hero / summary ---- */
  tagline: "Aripiprazole's gentler sibling — the same dopamine-stabiliser mechanism with less akathisia.",
  summary: "Brexpiprazole is a second-generation dopamine system stabiliser: a D2 partial agonist (with lower intrinsic activity than aripiprazole) plus 5-HT1A partial agonism and 5-HT2A antagonism. The gentler partial agonism translates into less akathisia and activation than aripiprazole while retaining the metabolic-friendly profile. It is approved for schizophrenia and as adjunctive treatment for major depression.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Brexpiprazole — from its molecular target (D2/D3 (partial agonist, ~45% intrinsic activity vs aripiprazole's ~70%); 5-HT1A (partial agonist); 5-HT2A (antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Brexpiprazole.",
    "Predict the common and serious side effects of Brexpiprazole from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Brexpiprazole.",
    "Compare Brexpiprazole with other dopamine stabilisers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Brexpiprazole is a D2/D3 partial agonist with lower intrinsic activity than aripiprazole, plus 5-HT1A partial agonism and 5-HT2A/5-HT2B/5-HT7 antagonism.",
    molecularTarget: "D2/D3 (partial agonist, ~45% intrinsic activity vs aripiprazole's ~70%); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
    effect: "Dopamine stabilisation — antipsychotic and antidepressant-augmentation efficacy with less activating adverse effects than aripiprazole.",
    steps: [
      "D2 partial agonism with lower intrinsic activity — still out-competes dopamine in hyperdopaminergic regions but activates less in normo-tonic circuits.",
      "Net effect: antipsychotic efficacy with markedly less akathisia and insomnia than aripiprazole.",
      "5-HT1A partial agonism and 5-HT2A antagonism support the antidepressant augmentation effect.",
      "Serotonergic profile contributes to antidepressant augmentation efficacy.",
    ],
    pharmacokinetics: "Peak 4 hours; steady state in 2 weeks.",
    halfLife: "91 hours (parent) — among the longest of oral antipsychotics; enables once-daily dosing and delays washout.",
    activeMetabolite: "No major active metabolite (hydroxymethyl metabolite minor).",
    metabolism: "Hepatic CYP2D6 and CYP3A4.",
    excretion: "Renal and faecal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Brexpiprazole",
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
  receptors: ["D2/D3 (partial agonist)", "5-HT1A (partial agonist)", "5-HT2A (antagonist)", "5-HT7 (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical", "tuberoinfundibular"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "Effective at 2–4 mg/day with the stabiliser mechanism.",
      ageGroup: "Adults",
    },
    {
      name: "Major depressive disorder — adjunctive",
      status: "fda-approved",
      description: "1–3 mg/day added to antidepressants — the aripiprazole-alternative augmentation.",
      ageGroup: "Adults",
    },
    {
      name: "Alzheimer's disease agitation",
      status: "fda-approved",
      description: "Approved in several jurisdictions for agitation in dementia (0.5–2 mg) — the first agent with this specific approval.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Brexpiprazole must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Class boxed warning; brexpiprazole's dementia agitation approval carries specific dosing and monitoring requirements — distinguish agitation treatment (approved) from psychosis of dementia (warned against).",
    },
    {
      title: "Suicidal thinking in adjunctive depression use",
      text: "Antidepressant-class warning applies when used with antidepressants in patients under 25.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Akathisia",
      frequency: "common",
      severity: "moderate",
      description: "Present but substantially less than aripiprazole — the design goal achieved.",
      management: "Dose reduction; propranolol.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "moderate",
      description: "Modest — intermediate between aripiprazole and quetiapine.",
      management: "Monitor; lifestyle.",
    },
    {
      name: "Headache and insomnia",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
    {
      name: "Somnolence",
      frequency: "uncommon",
      severity: "mild",
      description: "Less than sedating atypicals.",
      management: "Dose timing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Impulse control disorders",
      frequency: "uncommon",
      severity: "severe",
      description: "Shared with aripiprazole — partial agonism class effect; gambling, shopping, hypersexuality.",
      management: "Stop; counsel at initiation.",
    },
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
      drug: "Strong CYP2D6 or 3A4 inhibitors",
      severity: "major",
      mechanism: "Raise brexpiprazole levels.",
      action: "Halve dose with both inhibited; monitor with single-pathway inhibition.",
    },
    {
      drug: "Strong 3A4 inducers (carbamazepine)",
      severity: "major",
      mechanism: "Lower levels.",
      action: "Dose increase per label; monitor response.",
    },
  ],
  pregnancy: {
    summary: "Limited human data; no teratogenic signal established. Standard antipsychotic pregnancy logic.",
    lactation: "Limited data; monitor the infant if used while breastfeeding.",
  },
  renalAdjustment: "No adjustment for mild-moderate impairment; use cautiously in severe impairment.",
  hepaticAdjustment: "No adjustment for mild-moderate; caution in severe.",
  /* ---- Education ---- */
  patientExplanation: "Brexpiprazole works like a dopamine thermostat, similar to aripiprazole, but is engineered to cause less of the restless feeling that troubles some patients. It treats schizophrenia and, at low dose, is added to antidepressants when they haven't worked fully on their own.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Brexpiprazole builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Think 'aripiprazole with the edges sanded': lower intrinsic activity = less akathisia and activation.",
    "Adjunctive depression dosing is 1–3 mg — tiny doses, big trials.",
    "The 91-hour half-life means changes take days to manifest — patience at every dose move.",
    "Dementia agitation approval (where granted) is separate from the dementia-psychosis boxed warning — know which you are treating.",
    "Impulse-control warning inherited from the class — one sentence of counselling at initiation.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Brexpiprazole: Brexpiprazole is a D2/D3 partial agonist with lower intrinsic activity than aripiprazole, plus 5-HT1A partial agonism and 5-HT2A/5-HT2B/5-HT7 antagonism.",
        "Uses of Brexpiprazole: Schizophrenia; Major depressive disorder — adjunctive; Alzheimer's disease agitation",
        "Mechanism: D2/D3 partial agonist with LOWER intrinsic activity than aripiprazole + 5-HT1A partial agonist + 5-HT2A antagonist.",
        "Signature: less akathisia than aripiprazole at comparable efficacy.",
      ],
      practical: [
        "Prescribe Brexpiprazole for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually)",
      ],
      longAnswer: [
        "Brexpiprazole: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D2/D3 partial agonist with LOWER intrinsic activity than aripiprazole + 5-HT1A partial agonist + 5-HT2A antagonist.",
        "Signature: less akathisia than aripiprazole at comparable efficacy.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D2/D3 partial agonist with LOWER intrinsic activity than aripiprazole + 5-HT1A partial agonist + 5-HT2A antagonist.",
        "Signature: less akathisia than aripiprazole at comparable efficacy.",
        "Approvals: schizophrenia (2–4 mg), MDD adjunct (1–3 mg), Alzheimer's agitation (0.5–2 mg in approving regions).",
        "Half-life 91 hours — longest common oral antipsychotic.",
        "CYP2D6 + 3A4 metabolism; halve dose when both inhibited.",
      ],
      pyqConcepts: [
        "Mechanism/target of Brexpiprazole",
        "Key adverse effect: Impulse control disorders",
        "Dosing and titration of Brexpiprazole",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Brexpiprazole develops impulse control disorders — next best step?",
        "When to choose Brexpiprazole over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2/D3 (partial agonist, ~45% intrinsic activity vs aripiprazole's ~70%); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
        "Most common side effects: Akathisia, Weight gain, Headache and insomnia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Aripiprazole's mechanism with a gentler profile — the upgrade path for akathisia-intolerant patients.",
        "Tiny doses for augmentation; patience for the 91-hour half-life.",
        "Think 'aripiprazole with the edges sanded': lower intrinsic activity = less akathisia and activation.",
        "Adjunctive depression dosing is 1–3 mg — tiny doses, big trials.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: D2/D3 partial agonist with LOWER intrinsic activity than aripiprazole + 5-HT1A partial agonist + 5-HT2A antagonist.",
    "Signature: less akathisia than aripiprazole at comparable efficacy.",
    "Approvals: schizophrenia (2–4 mg), MDD adjunct (1–3 mg), Alzheimer's agitation (0.5–2 mg in approving regions).",
    "Half-life 91 hours — longest common oral antipsychotic.",
    "CYP2D6 + 3A4 metabolism; halve dose when both inhibited.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia",
      presentation: "A patient presenting with schizophrenia, started on Brexpiprazole.",
      history: "A adult patient presents with a schizophrenia picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia. Differentials are considered and excluded clinically.",
      rationale: "Brexpiprazole is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Dopamine Stabiliser) with strong evidence in this condition.",
      management: "Started at 1 mg once daily, titrated to 2–4 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Brexpiprazole takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Dopamine Stabiliser comparison — choosing within the class",
      primaryDrug: "Brexpiprazole",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2/D3 (partial agonist, ~45% intrinsic activity vs aripiprazole's ~70%); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
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
          primaryValue: "91 hours (parent) — among the longest of oral antipsychotics; enables once-daily dosing and delays washout.",
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
          primaryValue: "Low — closer to aripiprazole than sedating agents.",
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
          primaryValue: "Aripiprazole-class action with less akathisia; adjunct for depression",
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
      description: "Brexpiprazole reaches peak plasma concentration and begins acting at its molecular target (D2/D3 (partial agonist, ~45% intrinsic activity vs aripiprazole's ~70%); 5-HT1A (partial agonist); 5-HT2A (antagonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (akathisia, weight gain, headache and insomnia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Schizophrenia: 1–3 weeks; depression augmentation: 1–2 weeks for early benefit.)",
      title: "Therapeutic effect builds",
      description: "Schizophrenia: 1–3 weeks; depression augmentation: 1–2 weeks for early benefit. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Brexpiprazole is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Brexpiprazole take to work?",
      answer: "Schizophrenia: 1–3 weeks; depression augmentation: 1–2 weeks for early benefit.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Brexpiprazole?",
      answer: "The most frequently reported effects are: Akathisia, Weight gain, Headache and insomnia, Somnolence. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Brexpiprazole suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Brexpiprazole habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Brexpiprazole exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Brexpiprazole during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Brexpiprazole may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), brexpiprazole monograph, p. 15",
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
        source: "FDA Prescribing Information for Rexulti (Brexpiprazole)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for brexpiprazole — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Brexpiprazole",
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
      name: "Major depressive disorder — adjunctive",
      relationship: "primary",
    },
    {
      name: "Alzheimer's disease agitation",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Brexpiprazole",
      type: "drug",
      href: "/drugs/brexpiprazole",
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
      label: "D2/D3 (partial agonist, ~45% intrinsic activity vs aripiprazole's ~70%); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
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
      label: "Major depressive disorder — adjunctive",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Alzheimer's disease agitation",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Impulse control disorders",
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
      label: "Akathisia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Brexpiprazole",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Aripiprazole's gentler sibling — the same dopamine-stabiliser mechanism with less akathisia.",
    summary: "Brexpiprazole is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Brexpiprazole works like a dopamine thermostat, similar to aripiprazole, but is engineered to cause less of the restless feeling that troubles some patients. It treats schizophrenia and, at low dose, is added to antidepressants when they haven't worked fully on their own.",
    sideEffects: "The most common side effects are: akathisia, weight gain, headache and insomnia, somnolence. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Impulse control disorders and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, then at 4, 8, 12 weeks and quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually); lipid profile (fasting) (baseline, 12 weeks, then annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Strong CYP2D6 or 3A4 inhibitors, Strong 3A4 inducers (carbamazepine). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Brexpiprazole (limited availability)",
        manufacturer: "imported/special",
        strengths: "0.5–4 mg",
      },
    ],
    typicalDoses: "Schizophrenia 2–4 mg; MDD adjunct 1–3 mg once daily.",
    prescribingScenarios: [
      "Aripiprazole-intolerant augmentation (akathisia).",
      "Schizophrenia with metabolic constraints.",
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
        name: "Brexpiprazole",
        slug: "brexpiprazole",
        relationship: "This guide",
        distinguishing: "Aripiprazole-class action with less akathisia; adjunct for depression",
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
      question: "Which molecular target does Brexpiprazole primarily act on?",
      options: [
        "D2/D3 (partial agonist, ~45% intrinsic activity vs aripiprazole's ~70%); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Brexpiprazole acts primarily at D2/D3 (partial agonist, ~45% intrinsic activity vs aripiprazole's ~70%); 5-HT1A (partial agonist); 5-HT2A (antagonist). Brexpiprazole is a D2/D3 partial agonist with lower intrinsic activity than aripiprazole, plus 5-HT1A partial agonism and 5-HT2A/5-HT2B/5-HT7 antagonism.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Brexpiprazole?",
      options: ["Akathisia", "Weight gain", "Headache and insomnia", "Somnolence"],
      correctIndex: 0,
      explanation: "Akathisia — Present but substantially less than aripiprazole — the design goal achieved.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Brexpiprazole for schizophrenia?",
      options: ["2–4 mg/day", "4 mg/day", "2–4 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia: start 1 mg once daily, target 2–4 mg/day, maximum 4 mg/day. Increase to 2–4 mg over 1–2 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Brexpiprazole in two sentences.",
      answer: "Brexpiprazole is a D2/D3 partial agonist with lower intrinsic activity than aripiprazole, plus 5-HT1A partial agonism and 5-HT2A/5-HT2B/5-HT7 antagonism. Net effect: Dopamine stabilisation — antipsychotic and antidepressant-augmentation efficacy with less activating adverse effects than aripiprazole.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Brexpiprazole.",
      answer: "Schizophrenia, Major depressive disorder — adjunctive, Alzheimer's disease agitation. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Brexpiprazole and how you would manage it.",
      answer: "Impulse control disorders: Shared with aripiprazole — partial agonism class effect; gambling, shopping, hypersexuality. Management: Stop; counsel at initiation.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Brexpiprazole require?",
      answer: "Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually); Blood pressure (orthostatic) (Baseline and during titration)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Brexpiprazole that separates safe prescribers from unsafe ones.",
      answer: "Aripiprazole's mechanism with a gentler profile — the upgrade path for akathisia-intolerant patients.",
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
      checkpoint: "You now know what Brexpiprazole is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Brexpiprazole works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Brexpiprazole safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Brexpiprazole.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Brexpiprazole with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Brexpiprazole.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Schizophrenia: 1–3 weeks; depression augmentation: 1–2 weeks for early benefit.",
    ],
    ifItWorks: [
      "Continue Brexpiprazole at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Brexpiprazole (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Brexpiprazole follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Low — closer to aripiprazole than sedating agents.",
    dosing: [
      {
        indication: "Schizophrenia",
        starting: "1 mg once daily",
        titration: "Increase to 2–4 mg over 1–2 weeks",
        target: "2–4 mg/day",
        max: "4 mg/day",
      },
      {
        indication: "MDD adjunct",
        starting: "0.5 mg once daily",
        titration: "Increase to 1 mg (week 1–2), then 2 mg if needed",
        target: "1–3 mg/day",
        max: "3 mg/day",
      },
      {
        indication: "Alzheimer's agitation",
        starting: "0.5 mg once daily",
        titration: "Increase at ≥ 7-day intervals",
        target: "1–2 mg/day",
        max: "3 mg/day (per label)",
      },
    ],
    dosageForms: ["Tablets 0.25, 0.5, 1, 2, 3, 4 mg"],
    dosingTips: [
      "Start low in augmentation — 0.5 mg is a real dose, not a token.",
      "Wait a week between increments — the 91-hour half-life makes faster moves stack up.",
      "Counsel on impulse-control signs at initiation.",
    ],
    overdose: [
      "Overdose with Brexpiprazole is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Brexpiprazole is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 91 hours (parent) — among the longest of oral antipsychotics; enables once-daily dosing and delays washout..",
      "Metabolism: Hepatic CYP2D6 and CYP3A4..",
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
      "Less akathisia than aripiprazole.",
      "Metabolic-friendly.",
      "Once daily; long half-life smooths missed doses.",
    ],
    potentialDisadvantages: ["Cost (newer agent).", "Impulse-control class warning.", "Long washout if adverse effects emerge."],
    primaryTargetSymptoms: [
      "Positive symptoms of psychosis",
      "Incomplete antidepressant response (augmentation)",
      "Agitation in Alzheimer's disease (where approved)",
    ],
    pearls: [
      "Aripiprazole's mechanism with a gentler profile — the upgrade path for akathisia-intolerant patients.",
      "Tiny doses for augmentation; patience for the 91-hour half-life.",
      "Think 'aripiprazole with the edges sanded': lower intrinsic activity = less akathisia and activation.",
      "Adjunctive depression dosing is 1–3 mg — tiny doses, big trials.",
      "The 91-hour half-life means changes take days to manifest — patience at every dose move.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
