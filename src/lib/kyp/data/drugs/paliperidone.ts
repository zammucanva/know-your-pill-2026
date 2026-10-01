import type { Drug } from "../types";

/**
 * Paliperidone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), paliperidone monograph (book p. 93)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const paliperidone: Drug = {
  /* ---- Identity ---- */
  slug: "paliperidone",
  genericName: "Paliperidone",
  brandNames: ["Invega", "Invega Sustenna", "Invega Trinza", "Invega Hafyera", "Xepitan"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Paliperidone"],
  /* ---- Hero / summary ---- */
  tagline: "Risperidone's active metabolite, engineered for once-daily delivery — including the once-monthly and 3-monthly injections.",
  summary: "Paliperidone (9-hydroxyrisperidone) is the active metabolite of risperidone, delivered as an osmotic-release tablet that smooths plasma peaks, and as the leading long-acting injectable platform (monthly, 3-monthly, and 6-monthly options). It shares risperidone's serotonin-dopamine antagonism, efficacy, and adverse-effect profile — including the class-leading hyperprolactinaemia — while renal clearance and the OROS delivery system give flatter levels and fewer titration steps.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Paliperidone — from its molecular target (D2 (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1; H1) to clinical effect.",
    "List the FDA-approved and off-label uses of Paliperidone.",
    "Predict the common and serious side effects of Paliperidone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Paliperidone.",
    "Compare Paliperidone with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Paliperidone is 9-hydroxyrisperidone — a potent D2 and 5-HT2A antagonist (risperidone's active metabolite) delivered via osmotic-release oral technology or long-acting injectables.",
    molecularTarget: "D2 (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1; H1",
    effect: "Same clinical profile as risperidone — robust antipsychotic efficacy with dose-dependent EPS and marked hyperprolactinaemia — with flatter plasma levels from OROS/LAI delivery.",
    steps: [
      "Potent D2 blockade (as with risperidone) treats positive symptoms; 5-HT2A antagonism preserves atypicality at moderate doses.",
      "OROS tablet releases drug steadily over 24 hours — flatter peaks mean less sedation and orthostasis than immediate-release risperidone.",
      "Paliperidone is barely metabolised by CYP enzymes (renal clearance dominates) — fewer pharmacokinetic interactions than risperidone.",
      "LAI forms (pamoate/palmitate) extend delivery from monthly to 6-monthly — the longest-acting antipsychotic options available.",
    ],
    pharmacokinetics: "OROS tablet: steady 24-hour release, peak ~24 hours. LAI: initiation requires deltoid loading doses before monthly maintenance.",
    halfLife: "23 hours (oral); palmitate LAI: dose-proportional, roughly 25–49 days (monthly), ~84–118 days (3-monthly).",
    metabolism: "Minimal hepatic CYP metabolism — mostly renal excretion unchanged.",
    excretion: "Renal (predominant) — dose adjust in renal impairment.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Paliperidone",
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
  receptors: ["D2 (potent antagonist)", "5-HT2A (antagonist)", "Alpha-1 (antagonist)", "H1 (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal", "tuberoinfundibular"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "Oral and LAI; one of the most widely used maintenance platforms worldwide.",
      ageGroup: "Adults & ≥12 years (USA, oral/LAI monthly)",
    },
    {
      name: "Schizoaffective disorder",
      status: "fda-approved",
      description: "As monotherapy or adjunct to antidepressants/mood stabilisers.",
    },
    {
      name: "Bipolar I disorder (maintenance, adjunct)",
      status: "fda-approved",
      description: "Adjunctive maintenance in some regions.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Paliperidone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Paliperidone is not approved for dementia-related psychosis; pooled analyses show increased mortality and cerebrovascular events in this population.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Hyperprolactinaemia",
      frequency: "very-common",
      severity: "moderate",
      description: "Same as risperidone — the highest in class; galactorrhoea, amenorrhoea, sexual dysfunction.",
      management: "Ask directly; switch to aripiprazole if symptomatic.",
    },
    {
      name: "EPS and akathisia",
      frequency: "common",
      severity: "moderate",
      description: "Dose-dependent, as with risperidone.",
      management: "Dose reduction; propranolol for akathisia; anticholinergics for parkinsonism.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "moderate",
      description: "Moderate — similar to risperidone.",
      management: "Monitor; lifestyle intervention.",
    },
    {
      name: "Somnolence and headache",
      frequency: "common",
      severity: "mild",
      description: "Usually early and transient.",
      management: "Reassurance; dose timing.",
    },
    {
      name: "Injection-site reactions (LAI)",
      frequency: "common",
      severity: "mild",
      description: "Local pain, induration, nodule.",
      management: "Rotation technique; warm compress.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Cerebrovascular events in dementia patients",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Class boxed warning population.",
      management: "Avoid in dementia-related psychosis.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "uncommon",
      severity: "severe",
      description: "Class risk.",
      management: "Reduce/switch; VMAT2 inhibitors if severe.",
    },
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Stop; ICU care.",
    },
    {
      name: "Post-injection delirium/coronary steal (rare with high-dose deltoid)",
      frequency: "rare",
      severity: "severe",
      description: "Rare events reported with LAI — observe after loading doses.",
      management: "Observe post-injection per protocol.",
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
    summary: "Limited data; as risperidone's metabolite, similar pregnancy considerations apply — no clear teratogenic signal, third-trimester neonatal EPS/withdrawal monitoring recommended. Continue if needed for psychosis control.",
    lactation: "Paliperidone passes into milk; infant monitoring for sedation; usually considered acceptable with monitoring.",
  },
  renalAdjustment: "Reduce dose at CrCl 50–79 (max 6 mg oral); CrCl 10–49: max 3 mg oral; LAI dose adjustments per label — renal clearance is dominant.",
  hepaticAdjustment: "No adjustment (minimal hepatic metabolism).",
  /* ---- Education ---- */
  patientExplanation: "Paliperidone is the active form of risperidone, packaged for slow, steady release — as a once-daily tablet that works around the clock, or as an injection lasting from a month to six months. The steady levels mean fewer ups and downs than regular tablets.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Paliperidone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Paliperidone = risperidone's active metabolite with an engineering upgrade: OROS oral delivery or LAI depots from 1 to 6 months.",
    "Renal clearance dominates — CYP interactions largely disappear, but renal impairment dosing becomes critical.",
    "Hyperprolactinaemia is inherited from risperidone — the class-leading prolactin problem persists.",
    "Sustenna needs TWO loading injections (deltoid days 1 and 8) before monthly maintenance — getting this wrong is the classic initiation error.",
    "Trinza (3-monthly) and Hafyera (6-monthly) are the longest-acting antipsychotics in existence — for the most stable patients who want maximum freedom.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Paliperidone: Paliperidone is 9-hydroxyrisperidone — a potent D2 and 5-HT2A antagonist (risperidone's active metabolite) delivered via osmotic-release oral technology or long-acting injectables.",
        "Uses of Paliperidone: Schizophrenia; Schizoaffective disorder; Bipolar I disorder (maintenance, adjunct)",
        "Identity: 9-hydroxyrisperidone — risperidone's active metabolite, marketed separately.",
        "Delivery platforms: OROS oral (24-hour release) + LAI monthly/3-monthly/6-monthly.",
      ],
      practical: [
        "Prescribe Paliperidone for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually)",
      ],
      longAnswer: [
        "Paliperidone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Identity: 9-hydroxyrisperidone — risperidone's active metabolite, marketed separately.",
        "Delivery platforms: OROS oral (24-hour release) + LAI monthly/3-monthly/6-monthly.",
      ],
    },
    neetPg: {
      highYield: [
        "Identity: 9-hydroxyrisperidone — risperidone's active metabolite, marketed separately.",
        "Delivery platforms: OROS oral (24-hour release) + LAI monthly/3-monthly/6-monthly.",
        "Renal clearance — minimal CYP interactions; adjust dose in renal impairment.",
        "Same prolactin story as risperidone — highest in class.",
        "Sustenna initiation: two deltoid loading doses (day 1 and day 8).",
        "Oral dose: 3–12 mg once daily (schizophrenia).",
      ],
      pyqConcepts: [
        "Mechanism/target of Paliperidone",
        "Key adverse effect: Cerebrovascular events in dementia patients",
        "Dosing and titration of Paliperidone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Paliperidone develops cerebrovascular events in dementia patients — next best step?",
        "When to choose Paliperidone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1; H1",
        "Most common side effects: Hyperprolactinaemia, EPS and akathisia, Weight gain",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Risperidone's metabolite, engineered: steady levels, renal clearance, LAI shelf from 1 to 6 months.",
        "Two-dose Sustenna loading is the classic exam initiation fact.",
        "6-monthly Hafyera means two injections a year — the ultimate adherence solution for stable patients.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Identity: 9-hydroxyrisperidone — risperidone's active metabolite, marketed separately.",
    "Delivery platforms: OROS oral (24-hour release) + LAI monthly/3-monthly/6-monthly.",
    "Renal clearance — minimal CYP interactions; adjust dose in renal impairment.",
    "Same prolactin story as risperidone — highest in class.",
    "Sustenna initiation: two deltoid loading doses (day 1 and day 8).",
    "Oral dose: 3–12 mg once daily (schizophrenia).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia",
      presentation: "A patient presenting with schizophrenia, started on Paliperidone.",
      history: "A adult patient presents with a schizophrenia picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia. Differentials are considered and excluded clinically.",
      rationale: "Paliperidone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 6 mg once daily, titrated to 3–12 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Paliperidone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Paliperidone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1; H1",
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
          primaryValue: "23 hours (oral); palmitate LAI: dose-proportional, roughly 25–49 days (monthly), ~84–118 days (3-monthly).",
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
              value: "See product information and class comparison.",
            },
            {
              drug: "Lurasidone",
              value: "See product information and class comparison.",
            },
            {
              drug: "Olanzapine",
              value: "See product information and class comparison.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Low-to-moderate; flatter levels reduce peak sedation versus IR risperidone.",
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
          primaryValue: "The LAI platform king — monthly to 6-monthly injections for schizophrenia",
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
      description: "Paliperidone reaches peak plasma concentration and begins acting at its molecular target (D2 (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1; H1). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (hyperprolactinaemia, eps and akathisia, weight gain). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Schizophrenia: days to weeks as with risperidone.)",
      title: "Therapeutic effect builds",
      description: "Schizophrenia: days to weeks as with risperidone. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Paliperidone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Paliperidone take to work?",
      answer: "Schizophrenia: days to weeks as with risperidone.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Paliperidone?",
      answer: "The most frequently reported effects are: Hyperprolactinaemia, EPS and akathisia, Weight gain, Somnolence and headache, Injection-site reactions (LAI). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Paliperidone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Paliperidone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Paliperidone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Paliperidone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Paliperidone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), paliperidone monograph, p. 93",
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
        source: "FDA Prescribing Information for Invega (Paliperidone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for paliperidone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Paliperidone",
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
      name: "Quetiapine",
      slug: "quetiapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Risperidone",
      slug: "risperidone",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
  ],
  relatedConditions: [
    {
      name: "Schizophrenia",
      relationship: "primary",
    },
    {
      name: "Schizoaffective disorder",
      relationship: "primary",
    },
    {
      name: "Bipolar I disorder (maintenance, adjunct)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Paliperidone",
      type: "drug",
      href: "/drugs/paliperidone",
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
      label: "D2 (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1; H1",
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
      label: "Schizoaffective disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar I disorder (maintenance, adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Cerebrovascular events in dementia patients",
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
      label: "Hyperprolactinaemia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Paliperidone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Risperidone's active metabolite, engineered for once-daily delivery — including the once-monthly and 3-monthly injections.",
    summary: "Paliperidone is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Paliperidone is the active form of risperidone, packaged for slow, steady release — as a once-daily tablet that works around the clock, or as an injection lasting from a month to six months. The steady levels mean fewer ups and downs than regular tablets.",
    sideEffects: "The most common side effects are: hyperprolactinaemia, eps and akathisia, weight gain, somnolence and headache, injection-site reactions (lai). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Cerebrovascular events in dementia patients and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, then at 4, 8, 12 weeks and quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually); lipid profile (fasting) (baseline, 12 weeks, then annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: CNS depressants and alcohol, QT-prolonging drugs, Antihypertensives. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Invega / Invega Sustenna",
        manufacturer: "Janssen",
        strengths: "tablets + LAI",
      },
      {
        name: "Paliris / Palmotiv (generic)",
        manufacturer: "Intas/others",
        strengths: "3–12 mg tablets; LAI generic entry",
      },
    ],
    typicalDoses: "Oral 3–12 mg once daily; Sustenna 233 mg + 156 mg loading then 117 mg monthly.",
    prescribingScenarios: [
      "Schizophrenia maintenance programs built around monthly LAI in institute practice.",
      "Non-adherent first-episode relapse prevention.",
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
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Paliperidone",
        slug: "paliperidone",
        relationship: "This guide",
        distinguishing: "The LAI platform king — monthly to 6-monthly injections for schizophrenia",
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
      {
        name: "Amisulpride",
        slug: "amisulpride",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "The dose-band benzamide — European/Indian staple with the clozapine-drool rescue",
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
      question: "Which molecular target does Paliperidone primarily act on?",
      options: [
        "D2 (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1; H1",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Paliperidone acts primarily at D2 (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1; H1. Paliperidone is 9-hydroxyrisperidone — a potent D2 and 5-HT2A antagonist (risperidone's active metabolite) delivered via osmotic-release oral technology or long-acting injectables.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Paliperidone?",
      options: ["Hyperprolactinaemia", "EPS and akathisia", "Weight gain", "Somnolence and headache"],
      correctIndex: 0,
      explanation: "Hyperprolactinaemia — Same as risperidone — the highest in class; galactorrhoea, amenorrhoea, sexual dysfunction.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Paliperidone for schizophrenia (oral oros)?",
      options: ["3–12 mg/day", "12 mg/day", "3–12 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (oral oros): start 6 mg once daily, target 3–12 mg/day, maximum 12 mg/day. Adjust ±3 mg at intervals of ≥ 5 days",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Paliperidone in two sentences.",
      answer: "Paliperidone is 9-hydroxyrisperidone — a potent D2 and 5-HT2A antagonist (risperidone's active metabolite) delivered via osmotic-release oral technology or long-acting injectables. Net effect: Same clinical profile as risperidone — robust antipsychotic efficacy with dose-dependent EPS and marked hyperprolactinaemia — with flatter plasma levels from OROS/LAI delivery.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Paliperidone.",
      answer: "Schizophrenia, Schizoaffective disorder, Bipolar I disorder (maintenance, adjunct). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Paliperidone and how you would manage it.",
      answer: "Cerebrovascular events in dementia patients: Class boxed warning population. Management: Avoid in dementia-related psychosis.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Paliperidone require?",
      answer: "Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (fasting) (Baseline, 12 weeks, then annually); Blood pressure (orthostatic) (Baseline and during titration)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Paliperidone that separates safe prescribers from unsafe ones.",
      answer: "Risperidone's metabolite, engineered: steady levels, renal clearance, LAI shelf from 1 to 6 months.",
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
      checkpoint: "You now know what Paliperidone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Paliperidone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Paliperidone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Paliperidone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Paliperidone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Paliperidone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Schizophrenia: days to weeks as with risperidone.",
      "LAI: therapeutic levels after the 2-dose loading regimen.",
    ],
    ifItWorks: [
      "Continue Paliperidone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Paliperidone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Paliperidone follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Low-to-moderate; flatter levels reduce peak sedation versus IR risperidone.",
    dosing: [
      {
        indication: "Schizophrenia (oral OROS)",
        starting: "6 mg once daily",
        titration: "Adjust ±3 mg at intervals of ≥ 5 days",
        target: "3–12 mg/day",
        max: "12 mg/day",
      },
      {
        indication: "Schizoaffective disorder",
        starting: "6 mg once daily",
        titration: "As above",
        target: "3–12 mg/day",
        max: "12 mg/day",
      },
      {
        indication: "LAI — Sustenna (monthly)",
        starting: "233 mg deltoid day 1 + 156 mg day 8 (loading)",
        titration: "Then 117 mg monthly (range 39–234)",
        target: "117 mg/month",
        max: "234 mg/month",
        notes: [
          "The day-1 and day-8 loading doses are mandatory",
          "No oral overlap required",
        ],
      },
      {
        indication: "LAI — Trinza (3-monthly)",
        starting: "Only after ≥ 4 months of tolerating Sustenna",
        titration: "Converts from the monthly dose per table",
        target: "273–819 mg q3mo",
        max: "819 mg q3mo",
      },
      {
        indication: "LAI — Hafyera (6-monthly)",
        starting: "Only after ≥ 1 year of stable monthly or 3-monthly treatment",
        titration: "Per conversion table",
        target: "874–1365 mg q6mo (USA)",
        max: "Per label",
      },
    ],
    dosageForms: [
      "OROS tablets 1.5, 3, 6, 9 mg",
      "Sustenna 39, 78, 117, 156, 234 mg prefilled syringes",
      "Trinza 273–819 mg",
      "Xepitan (4-weekly)",
    ],
    dosingTips: [
      "Loading regimen (233/156) is the make-or-break of Sustenna initiation.",
      "Step up through LAI generations only after documented tolerance of the shorter one.",
      "Renal impairment: reduce oral dose; LAI use with caution.",
    ],
    overdose: [
      "Overdose with Paliperidone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Paliperidone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 23 hours (oral); palmitate LAI: dose-proportional, roughly 25–49 days (monthly), ~84–118 days (3-monthly)..",
      "Metabolism: Minimal hepatic CYP metabolism — mostly renal excretion unchanged..",
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
      "The deepest LAI shelf in psychiatry (1, 3, 6 months).",
      "Minimal CYP interactions.",
      "Flatter levels than IR risperidone.",
      "No oral overlap needed for LAI initiation.",
    ],
    potentialDisadvantages: [
      "Risperidone's prolactin burden inherited.",
      "Renal dosing discipline required.",
      "Loading-regimen complexity (Sustenna).",
      "Weight and metabolic risk moderate.",
    ],
    primaryTargetSymptoms: [
      "Positive symptoms of psychosis",
      "Relapse prevention via long-acting delivery",
    ],
    pearls: [
      "Risperidone's metabolite, engineered: steady levels, renal clearance, LAI shelf from 1 to 6 months.",
      "Two-dose Sustenna loading is the classic exam initiation fact.",
      "6-monthly Hafyera means two injections a year — the ultimate adherence solution for stable patients.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
