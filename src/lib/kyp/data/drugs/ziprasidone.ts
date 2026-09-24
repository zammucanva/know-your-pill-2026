import type { Drug } from "../types";

/**
 * Ziprasidone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), ziprasidone monograph (book p. 138)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const ziprasidone: Drug = {
  /* ---- Identity ---- */
  slug: "ziprasidone",
  genericName: "Ziprasidone",
  brandNames: ["Geodon", "Zeldox"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Ziprasidone"],
  /* ---- Hero / summary ---- */
  tagline: "The metabolically clean, QT-watched atypical — modest weight gain plus a signature ECG precaution.",
  summary: "Ziprasidone is a benzisothiazol atypical antipsychotic with D2/5-HT2A antagonism, 5-HT1A partial agonism, and serotonin-norepinephrine reuptake inhibition — an antidepressant-flavoured profile. Its clean metabolic record (with aripiprazole and lurasidone) made it a preferred weight-neutral option, at the price of a modest QT prolongation that demands ECG awareness and food-dependent absorption (500 kcal) for the oral form. An intramuscular form provides rapid tranquillisation without the hypotension of other IM agents.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Ziprasidone — from its molecular target (D2 (antagonist); 5-HT2A (potent antagonist); 5-HT1A (partial agonist); SERT/NET (weak inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Ziprasidone.",
    "Predict the common and serious side effects of Ziprasidone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Ziprasidone.",
    "Compare Ziprasidone with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Ziprasidone blocks D2 and 5-HT2A receptors, partially agonises 5-HT1A, and inhibits serotonin and norepinephrine reuptake — an antipsychotic with built-in antidepressant pharmacology.",
    molecularTarget: "D2 (antagonist); 5-HT2A (potent antagonist); 5-HT1A (partial agonist); SERT/NET (weak inhibition)",
    effect: "Antipsychotic efficacy with weight neutrality and possible antidepressant benefit; modest QT prolongation is the signature safety issue.",
    steps: [
      "D2 blockade plus strong 5-HT2A antagonism — the standard atypical antipsychotic base.",
      "5-HT1A partial agonism and weak serotonin/norepinephrine reuptake inhibition give an antidepressant flavour — plausibly relevant in schizoaffective and depressive contexts.",
      "Negligible H1/M1/5-HT2C binding — weight gain and sedation are minimal.",
      "Modest QT prolongation (~10–20 ms) — the class QT precaution concentrated in one drug.",
    ],
    pharmacokinetics: "Oral absorption roughly doubles with food — must be taken with a 500 kcal meal. IM form fully absorbed.",
    halfLife: "Oral: ~7 hours (twice-daily dosing); IM: 2–5 hours.",
    activeMetabolite: "No clinically important active metabolite.",
    metabolism: "Hepatic CYP3A4 (~one-third), plus aldehyde oxidase — fewer interactions than 3A4-only agents.",
    excretion: "Minimal renal excretion.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Ziprasidone",
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
  receptors: ["D2 (antagonist)", "5-HT2A (potent antagonist)", "5-HT1A (partial agonist)", "SERT/NET (weak inhibition)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal", "tuberoinfundibular"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "Effective atypical; oral twice daily with food, or IM for acute agitation.",
      ageGroup: "Adults",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      status: "fda-approved",
      description: "As monotherapy or adjunct to lithium/valproate.",
      ageGroup: "Adults",
    },
    {
      name: "Acute agitation in schizophrenia (IM)",
      status: "fda-approved",
      description: "10–20 mg IM — rapid calming with minimal hypotension.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Ziprasidone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Other QT-prolonging drugs",
      severity: "absolute",
      rationale: "Additive QT effect — the specific ziprasidone precaution.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Ziprasidone is not approved for dementia-related psychosis; pooled analyses show increased mortality versus placebo.",
    },
    {
      title: "QT prolongation (class-specific warning)",
      text: "Ziprasidone prolongs the QT interval more than some antipsychotics; avoid in patients with known QT prolongation, recent myocardial infarction, or uncompensated heart failure, and avoid combining with other QT-prolonging drugs or CYP3A4 inhibitors.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Somnolence and headache",
      frequency: "common",
      severity: "mild",
      description: "Usually transient at initiation.",
      management: "Reassurance; dose timing.",
    },
    {
      name: "Nausea and dyspepsia",
      frequency: "common",
      severity: "mild",
      description: "Often food-related; the mandatory 500 kcal meal usually helps.",
      management: "Take with a proper meal.",
    },
    {
      name: "Akathisia and EPS",
      frequency: "common",
      severity: "moderate",
      description: "Dose-dependent; comparable to risperidone at higher doses.",
      management: "Dose reduction; propranolol.",
    },
    {
      name: "Insomnia or activation",
      frequency: "common",
      severity: "mild",
      description: "Some patients activate rather than sedate.",
      management: "Morning dosing of one of the two daily doses.",
    },
    {
      name: "Injection-site pain (IM)",
      frequency: "common",
      severity: "mild",
      description: "Mild and transient.",
      management: "Rotate sites.",
    },
  ],
  seriousSideEffects: [
    {
      name: "QT prolongation and torsades de pointes",
      frequency: "rare",
      severity: "life-threatening",
      description: "Modest mean QT effect (~10–20 ms) with rare arrhythmia reports — the concentration of class QT risk in one agent.",
      management: "Baseline ECG where risk factors; avoid QT drug combinations; correct potassium/magnesium.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "uncommon",
      severity: "severe",
      description: "Class risk.",
      management: "Reduce/switch; VMAT2 inhibitors.",
    },
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Stop; ICU care.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "ECG",
      frequency: "Baseline if cardiac risk factors or planned QT-drug co-prescription",
      rationale: "The ziprasidone-specific precaution.",
    },
    {
      parameter: "Potassium and magnesium",
      frequency: "When ill, diuretic-treated, or in overdose",
      rationale: "Electrolyte depletion amplifies QT risk.",
    },
    {
      parameter: "Weight and metabolic panel",
      frequency: "Baseline, then annually (class standard)",
      rationale: "Ziprasidone is weight-neutral — light-touch monitoring.",
    },
    {
      parameter: "AIMS examination",
      frequency: "Baseline, then every 6–12 months",
      rationale: "Class surveillance.",
    },
  ],
  interactions: [
    {
      drug: "Other QT-prolonging drugs",
      severity: "contraindicated",
      mechanism: "Additive QT effect — the specific ziprasidone precaution.",
      action: "Avoid; ECG if unavoidable.",
    },
    {
      drug: "Ketoconazole and strong CYP3A4 inhibitors",
      severity: "major",
      mechanism: "Raise ziprasidone levels (QT risk amplifies).",
      action: "Avoid or reduce with ECG.",
    },
    {
      drug: "Erythromycin, moxifloxacin, and other QT antibiotics",
      severity: "major",
      mechanism: "Pharmacodynamic QT stacking.",
      action: "Choose alternatives.",
    },
  ],
  pregnancy: {
    summary: "Limited human data; no clear teratogenic signal. Standard antipsychotic pregnancy logic — continue if needed with obstetric co-management and third-trimester neonatal monitoring.",
    lactation: "Limited data; likely low milk transfer — monitor the infant for sedation if used.",
  },
  renalAdjustment: "No dose adjustment for oral or IM ziprasidone in renal impairment.",
  hepaticAdjustment: "No initial adjustment for mild-moderate; not recommended in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Ziprasidone treats psychosis and mania by adjusting dopamine and serotonin signalling, with a mild antidepressant-like action built in. It is famous for NOT causing weight gain — but the tablets only work properly if taken with a full meal, and it can slightly alter the heart's electrical rhythm, so your doctor may order a heart tracing (ECG).",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Ziprasidone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The 500 kcal meal rule: ziprasidone with a snack is half a drug — always anchor dosing to real meals.",
    "Weight-neutral trio: ziprasidone, aripiprazole, lurasidone — the metabolic-safe shelf.",
    "QT is the tax: one ECG at baseline in at-risk patients and vigilance with QT drug combinations keeps the risk theoretical.",
    "IM ziprasidone is the least hypotensive IM antipsychotic — valuable in the agitated patient with borderline blood pressure.",
    "Its SERT/NET inhibition is why schizoaffective patients sometimes report a mood lift.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Ziprasidone: Ziprasidone blocks D2 and 5-HT2A receptors, partially agonises 5-HT1A, and inhibits serotonin and norepinephrine reuptake — an antipsychotic with built-in antidepressant pharmacology.",
        "Uses of Ziprasidone: Schizophrenia; Acute manic / mixed episodes of bipolar I; Acute agitation in schizophrenia (IM)",
        "Mechanism: D2 + 5-HT2A antagonist + 5-HT1A partial agonist + weak SNRI activity.",
        "Signature safety issue: modest QT prolongation — ECG awareness and QT-drug avoidance.",
      ],
      practical: [
        "Prescribe Ziprasidone for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: ECG (Baseline if cardiac risk factors or planned QT-drug co-prescription); Potassium and magnesium (When ill, diuretic-treated, or in overdose); Weight and metabolic panel (Baseline, then annually (class standard))",
      ],
      longAnswer: [
        "Ziprasidone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D2 + 5-HT2A antagonist + 5-HT1A partial agonist + weak SNRI activity.",
        "Signature safety issue: modest QT prolongation — ECG awareness and QT-drug avoidance.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D2 + 5-HT2A antagonist + 5-HT1A partial agonist + weak SNRI activity.",
        "Signature safety issue: modest QT prolongation — ECG awareness and QT-drug avoidance.",
        "Signature benefit: weight neutrality (with aripiprazole and lurasidone).",
        "Oral absorption requires a ≥ 500 kcal meal — a compliance trap.",
        "Twice-daily oral dosing (half-life ~7 h).",
        "IM form: 10–20 mg for acute agitation, minimal hypotension.",
      ],
      pyqConcepts: [
        "Mechanism/target of Ziprasidone",
        "Key adverse effect: QT prolongation and torsades de pointes",
        "Dosing and titration of Ziprasidone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Ziprasidone develops qt prolongation and torsades de pointes — next best step?",
        "When to choose Ziprasidone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (antagonist); 5-HT2A (potent antagonist); 5-HT1A (partial agonist); SERT/NET (weak inhibition)",
        "Most common side effects: Somnolence and headache, Nausea and dyspepsia, Akathisia and EPS",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "500 kcal or nothing: food is the absorption switch.",
        "QT is manageable with one baseline ECG and QT-drug discipline.",
        "The weight-neutral shelf: ziprasidone, aripiprazole, lurasidone.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: D2 + 5-HT2A antagonist + 5-HT1A partial agonist + weak SNRI activity.",
    "Signature safety issue: modest QT prolongation — ECG awareness and QT-drug avoidance.",
    "Signature benefit: weight neutrality (with aripiprazole and lurasidone).",
    "Oral absorption requires a ≥ 500 kcal meal — a compliance trap.",
    "Twice-daily oral dosing (half-life ~7 h).",
    "IM form: 10–20 mg for acute agitation, minimal hypotension.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia",
      presentation: "A patient presenting with schizophrenia, started on Ziprasidone.",
      history: "A adult patient presents with a schizophrenia picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia. Differentials are considered and excluded clinically.",
      rationale: "Ziprasidone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 20 mg twice daily with food, titrated to 40–80 mg twice daily with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Ziprasidone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Ziprasidone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 (antagonist); 5-HT2A (potent antagonist); 5-HT1A (partial agonist); SERT/NET (weak inhibition)",
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
          primaryValue: "Oral: ~7 hours (twice-daily dosing); IM: 2–5 hours.",
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
          primaryValue: "Mild — some patients activate.",
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
          primaryValue: "Weight-neutral oral + the least hypotensive IM antipsychotic — with QT vigilance",
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
      description: "Ziprasidone reaches peak plasma concentration and begins acting at its molecular target (D2 (antagonist); 5-HT2A (potent antagonist); 5-HT1A (partial agonist); SERT/NET (weak inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (somnolence and headache, nausea and dyspepsia, akathisia and eps). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Acute agitation (IM): 15–30 minutes.)",
      title: "Therapeutic effect builds",
      description: "Acute agitation (IM): 15–30 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Ziprasidone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Ziprasidone take to work?",
      answer: "Acute agitation (IM): 15–30 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Ziprasidone?",
      answer: "The most frequently reported effects are: Somnolence and headache, Nausea and dyspepsia, Akathisia and EPS, Insomnia or activation, Injection-site pain (IM). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Ziprasidone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Ziprasidone habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Ziprasidone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Ziprasidone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Ziprasidone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), ziprasidone monograph, p. 138",
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
        source: "FDA Prescribing Information for Geodon (Ziprasidone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for ziprasidone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Ziprasidone",
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
      name: "Acute agitation in schizophrenia (IM)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Ziprasidone",
      type: "drug",
      href: "/drugs/ziprasidone",
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
      label: "D2 (antagonist); 5-HT2A (potent antagonist); 5-HT1A (partial agonist); SERT/NET (weak inhibition)",
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
      label: "Acute agitation in schizophrenia (IM)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "QT prolongation and torsades de pointes",
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
      label: "Somnolence and headache",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Ziprasidone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The metabolically clean, QT-watched atypical — modest weight gain plus a signature ECG precaution.",
    summary: "Ziprasidone is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Ziprasidone treats psychosis and mania by adjusting dopamine and serotonin signalling, with a mild antidepressant-like action built in. It is famous for NOT causing weight gain — but the tablets only work properly if taken with a full meal, and it can slightly alter the heart's electrical rhythm, so your doctor may order a heart tracing (ECG).",
    sideEffects: "The most common side effects are: somnolence and headache, nausea and dyspepsia, akathisia and eps, insomnia or activation, injection-site pain (im). These usually appear early and many settle with time. Serious effects are uncommon but important to know: QT prolongation and torsades de pointes and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: ecg (baseline if cardiac risk factors or planned qt-drug co-prescription); potassium and magnesium (when ill, diuretic-treated, or in overdose); weight and metabolic panel (baseline, then annually (class standard)). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other QT-prolonging drugs, Ketoconazole and strong CYP3A4 inhibitors, Erythromycin, moxifloxacin, and other QT antibiotics. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Zosert / Ziprasid (generic)",
        manufacturer: "various",
        strengths: "40, 60 mg caps",
      },
      {
        name: "Geodon/Zeldox",
        manufacturer: "originator where available",
        strengths: "caps + IM",
      },
    ],
    typicalDoses: "Schizophrenia 40–80 mg twice daily with food; mania 40–80 mg twice daily.",
    prescribingScenarios: [
      "Metabolically vulnerable schizophrenia patients.",
      "Bipolar mania where weight neutrality is required.",
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
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Ziprasidone",
        slug: "ziprasidone",
        relationship: "This guide",
        distinguishing: "Weight-neutral oral + the least hypotensive IM antipsychotic — with QT vigilance",
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
      question: "Which molecular target does Ziprasidone primarily act on?",
      options: [
        "D2 (antagonist); 5-HT2A (potent antagonist); 5-HT1A (partial agonist); SERT/NET (weak inhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Ziprasidone acts primarily at D2 (antagonist); 5-HT2A (potent antagonist); 5-HT1A (partial agonist); SERT/NET (weak inhibition). Ziprasidone blocks D2 and 5-HT2A receptors, partially agonises 5-HT1A, and inhibits serotonin and norepinephrine reuptake — an antipsychotic with built-in antidepressant pharmacology.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Ziprasidone?",
      options: ["Somnolence and headache", "Nausea and dyspepsia", "Akathisia and EPS", "Insomnia or activation"],
      correctIndex: 0,
      explanation: "Somnolence and headache — Usually transient at initiation.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Ziprasidone for schizophrenia (oral)?",
      options: ["40–80 mg twice daily", "160 mg/day", "40–80 mg twice daily (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (oral): start 20 mg twice daily with food, target 40–80 mg twice daily, maximum 160 mg/day. Increase by 20 mg bid at intervals of ≥ 2 days",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Ziprasidone in two sentences.",
      answer: "Ziprasidone blocks D2 and 5-HT2A receptors, partially agonises 5-HT1A, and inhibits serotonin and norepinephrine reuptake — an antipsychotic with built-in antidepressant pharmacology. Net effect: Antipsychotic efficacy with weight neutrality and possible antidepressant benefit; modest QT prolongation is the signature safety issue.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Ziprasidone.",
      answer: "Schizophrenia, Acute manic / mixed episodes of bipolar I, Acute agitation in schizophrenia (IM). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Ziprasidone and how you would manage it.",
      answer: "QT prolongation and torsades de pointes: Modest mean QT effect (~10–20 ms) with rare arrhythmia reports — the concentration of class QT risk in one agent. Management: Baseline ECG where risk factors; avoid QT drug combinations; correct potassium/magnesium.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Ziprasidone require?",
      answer: "ECG (Baseline if cardiac risk factors or planned QT-drug co-prescription); Potassium and magnesium (When ill, diuretic-treated, or in overdose); Weight and metabolic panel (Baseline, then annually (class standard)); AIMS examination (Baseline, then every 6–12 months)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Ziprasidone that separates safe prescribers from unsafe ones.",
      answer: "500 kcal or nothing: food is the absorption switch.",
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
      checkpoint: "You now know what Ziprasidone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Ziprasidone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Ziprasidone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Ziprasidone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Ziprasidone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Ziprasidone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Acute agitation (IM): 15–30 minutes.",
      "Schizophrenia/mania: 1–3 weeks as with other atypicals.",
    ],
    ifItWorks: [
      "Continue Ziprasidone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Ziprasidone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Ziprasidone follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Mild — some patients activate.",
    dosing: [
      {
        indication: "Schizophrenia (oral)",
        starting: "20 mg twice daily with food",
        titration: "Increase by 20 mg bid at intervals of ≥ 2 days",
        target: "40–80 mg twice daily",
        max: "160 mg/day",
      },
      {
        indication: "Acute mania (oral)",
        starting: "40 mg twice daily with food",
        titration: "Increase to 60–80 mg bid as needed",
        target: "60–80 mg twice daily",
        max: "160 mg/day",
      },
      {
        indication: "Acute agitation (IM)",
        starting: "10–20 mg IM",
        titration: "May repeat after 4 hours (max 40 mg/day)",
        target: "10–20 mg per episode",
        max: "40 mg/day IM",
      },
    ],
    dosageForms: ["Capsules 20, 40, 60, 80 mg", "IM vial 20 mg/mL"],
    dosingTips: [
      "Anchor both doses to meals ≥ 500 kcal — snack-dosing is the hidden non-responder.",
      "Baseline ECG when QT risk factors exist.",
      "Split the largest dose to bedtime if sedation desired; morning if activating.",
    ],
    overdose: [
      "Overdose with Ziprasidone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Ziprasidone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Oral: ~7 hours (twice-daily dosing); IM: 2–5 hours..",
      "Metabolism: Hepatic CYP3A4 (~one-third), plus aldehyde oxidase — fewer interactions than 3A4-only agents..",
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
    potentialAdvantages: ["Weight neutral.", "IM option with minimal hypotension.", "Built-in antidepressant pharmacology.", "No prolactin rise."],
    potentialDisadvantages: [
      "QT vigilance and drug-interaction caution.",
      "Food-dependent absorption.",
      "Twice-daily dosing.",
      "Akathisia/EPS at higher doses.",
    ],
    primaryTargetSymptoms: ["Positive symptoms of psychosis", "Manic symptoms", "Acute agitation (IM)"],
    pearls: [
      "500 kcal or nothing: food is the absorption switch.",
      "QT is manageable with one baseline ECG and QT-drug discipline.",
      "The weight-neutral shelf: ziprasidone, aripiprazole, lurasidone.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
