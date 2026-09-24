import type { Drug } from "../types";

/**
 * Amisulpride — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), amisulpride monograph (book p. 4)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const amisulpride: Drug = {
  /* ---- Identity ---- */
  slug: "amisulpride",
  genericName: "Amisulpride",
  brandNames: ["Solian", "Sulpitac / Amisulpride (India)"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Dopamine Partial Agonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Amisulpride"],
  /* ---- Hero / summary ---- */
  tagline: "The dose-bands-in-one-drug benzamide — low-dose antidepressant, high-dose antipsychotic, and the sialorrhoea rescue.",
  summary: "Amisulpride is the substituted benzamide antipsychotic with a distinctive dose-band profile: low doses (50-300 mg) block presynaptic D2/D3 autoreceptors (increasing dopamine release — antidepressant/negative-symptom effect), while higher doses (400-1200 mg) block postsynaptic D2 (antipsychotic). A European/Indian formulary staple with prolactin elevation and QT cautions — and a rescue role for clozapine sialorrhoea.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Amisulpride — from its molecular target (D2/D3 receptors (low-dose presynaptic autoreceptor blockade; high-dose postsynaptic antagonism)) to clinical effect.",
    "List the FDA-approved and off-label uses of Amisulpride.",
    "Predict the common and serious side effects of Amisulpride from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Amisulpride.",
    "Compare Amisulpride with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Amisulpride shows dose-dependent dopaminergic action: low-dose presynaptic autoreceptor blockade disinhibits dopamine release; high-dose postsynaptic D2/D3 blockade is antipsychotic.",
    molecularTarget: "D2/D3 receptors (low-dose presynaptic autoreceptor blockade; high-dose postsynaptic antagonism)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Amisulpride shows dose-dependent dopaminergic action: low-dose presynaptic autoreceptor blockade disinhibits dopamine release; high-dose postsynaptic D2/D3 blockade is antipsychotic.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 12-17 hours. — see mechanism and prescriber sections.",
    halfLife: "12-17 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Amisulpride",
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
  neurotransmitters: ["Dopamine (DA)"],
  receptors: [
    "D2/D3 receptors (dose-dependent presynaptic/postsynaptic action)",
  ],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens", "substantia-nigra"],
  pathwayIds: ["mesolimbic", "nigrostriatal", "tuberoinfundibular", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia (positive symptoms — high dose)",
      status: "guideline",
      description: "400-800 mg/day postsynaptic antipsychotic dosing.",
    },
    {
      name: "Negative symptoms / deficit states (low dose)",
      status: "guideline",
      description: "50-300 mg/day presynaptic augmentation dosing — the dose-band signature.",
    },
    {
      name: "Dysthymia / depression (low dose, EU)",
      status: "guideline",
      description: "The antidepressant dose-band (50 mg) — France's dysthymia indication.",
    },
    {
      name: "Clozapine-induced sialorrhoea (rescue)",
      status: "off-label",
      description: "Low-dose amisulpride is an evidence-based antisialorrhoea add-on — the practical pearl.",
    },
    {
      name: "Acute mania (adjunct)",
      status: "off-label",
      description: "Selected use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Amisulpride must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Class atypical antipsychotic boxed warning applies.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Insomnia and agitation",
      frequency: "common",
      severity: "moderate",
      description: "The activating tilt (autoreceptor effect at low doses).",
      management: "Morning dosing.",
    },
    {
      name: "Extrapyramidal symptoms (high doses)",
      frequency: "common",
      severity: "moderate",
      description: "Postsynaptic D2 blockade dose-band.",
      management: "Dose review; anticholinergics.",
    },
    {
      name: "Hyperprolactinaemia",
      frequency: "very-common",
      severity: "moderate",
      description: "Amisulpride raises prolactin markedly (with risperidone at the class top).",
      management: "Ask; consider switch.",
    },
    {
      name: "Weight gain (modest)",
      frequency: "common",
      severity: "moderate",
      description: "Between aripiprazole and risperidone.",
      management: "Monitor.",
    },
    {
      name: "QT prolongation (dose-related)",
      frequency: "uncommon",
      severity: "severe",
      description: "The benzamide QT caution (droperidol class heritage).",
      management: "ECG at high dose; electrolytes.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Class risk.",
      management: "Stop; ICU.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "uncommon",
      severity: "severe",
      description: "Class risk.",
      management: "AIMS; reduce.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "ECG (high doses)",
      frequency: "Baseline at > 400 mg and with risk factors",
      rationale: "The QT benzamide caution.",
    },
    {
      parameter: "Prolactin symptoms",
      frequency: "At review",
      rationale: "Class-topping elevation.",
    },
  ],
  interactions: [
    {
      drug: "QT-prolonging drugs",
      severity: "major",
      mechanism: "Additive QT (benzamide caution).",
      action: "ECG; avoid.",
    },
    {
      drug: "Levodopa and dopamine agonists",
      severity: "moderate",
      mechanism: "Pharmacological antagonism.",
      action: "Avoid.",
    },
    {
      drug: "Levansulpride-class/sulpirade overlap products",
      severity: "moderate",
      mechanism: "Duplicate benzamide dosing.",
      action: "Avoid.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; standard antipsychotic pregnancy considerations with obstetric co-management.",
    lactation: "Excreted in milk; infant monitoring.",
  },
  renalAdjustment: "Halve dose in renal impairment (renal clearance dominant).",
  hepaticAdjustment: "Standard caution.",
  /* ---- Education ---- */
  patientExplanation: "Amisulpride is an antipsychotic used in Europe and India with a dose-dependent personality: small doses lift mood and motivation, while larger doses treat the positive symptoms of psychosis. It commonly raises prolactin (affecting periods, breast comfort, and sexual function), and higher doses require an occasional heart tracing.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Amisulpride builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The dose-band benzamide: 50-300 mg = presynaptic antidepressant/negative-symptom dosing; 400-1200 mg = postsynaptic antipsychotic — the autoreceptor concept in clinical form.",
    "The clozapine-drool rescue: low-dose amisulpride is among the best-evidenced treatments for clozapine sialorrhoea — the practical pearl that survives translation.",
    "The prolactin price: with risperidone at the top of the class — ask about menstrual/sexual effects.",
    "The QT heritage: benzamide chemistry (droperidol family) carries the ECG caution at higher doses.",
    "The augmentation evidence: amisulpride is the best-evidenced clozapine augmentation partner in TRS.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Amisulpride: Amisulpride shows dose-dependent dopaminergic action: low-dose presynaptic autoreceptor blockade disinhibits dopamine release; high-dose postsynaptic D2/D3 blockade is antipsychotic.",
        "Uses of Amisulpride: Schizophrenia (positive symptoms — high dose); Negative symptoms / deficit states (low dose); Dysthymia / depression (low dose, EU); Clozapine-induced sialorrhoea (rescue)",
        "Mechanism: substituted benzamide with DOSE-BANDS: low dose presynaptic autoreceptor (antidepressant), high dose postsynaptic D2 (antipsychotic).",
        "Approvals: schizophrenia (EU/India); dysthymia at 50 mg (France).",
      ],
      practical: [
        "Prescribe Amisulpride for schizophrenia (positive symptoms — high dose) with dose, timing, and duration.",
        "Outline the monitoring plan: ECG (high doses) (Baseline at > 400 mg and with risk factors); Prolactin symptoms (At review)",
      ],
      longAnswer: [
        "Amisulpride: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: substituted benzamide with DOSE-BANDS: low dose presynaptic autoreceptor (antidepressant), high dose postsynaptic D2 (antipsychotic).",
        "Approvals: schizophrenia (EU/India); dysthymia at 50 mg (France).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: substituted benzamide with DOSE-BANDS: low dose presynaptic autoreceptor (antidepressant), high dose postsynaptic D2 (antipsychotic).",
        "Approvals: schizophrenia (EU/India); dysthymia at 50 mg (France).",
        "Prolactin elevation among the class's highest (with risperidone).",
        "QT caution (benzamide heritage).",
        "Pearl: low-dose rescue for clozapine sialorrhoea; best-evidenced clozapine augmentation partner.",
        "Not FDA-approved.",
      ],
      pyqConcepts: [
        "Mechanism/target of Amisulpride",
        "Key adverse effect: Neuroleptic malignant syndrome",
        "Dosing and titration of Amisulpride",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Amisulpride develops neuroleptic malignant syndrome — next best step?",
        "When to choose Amisulpride over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2/D3 receptors (low-dose presynaptic autoreceptor blockade; high-dose postsynaptic antagonism)",
        "Most common side effects: Insomnia and agitation, Extrapyramidal symptoms (high doses), Hyperprolactinaemia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The dose-band benzamide: 50-300 mg = presynaptic antidepressant/negative-symptom dosing; 400-1200 mg = postsynaptic antipsychotic — the autoreceptor concept in clinical form.",
        "The clozapine-drool rescue: low-dose amisulpride is among the best-evidenced treatments for clozapine sialorrhoea — the practical pearl that survives translation.",
        "The prolactin price: with risperidone at the top of the class — ask about menstrual/sexual effects.",
        "The QT heritage: benzamide chemistry (droperidol family) carries the ECG caution at higher doses.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: substituted benzamide with DOSE-BANDS: low dose presynaptic autoreceptor (antidepressant), high dose postsynaptic D2 (antipsychotic).",
    "Approvals: schizophrenia (EU/India); dysthymia at 50 mg (France).",
    "Prolactin elevation among the class's highest (with risperidone).",
    "QT caution (benzamide heritage).",
    "Pearl: low-dose rescue for clozapine sialorrhoea; best-evidenced clozapine augmentation partner.",
    "Not FDA-approved.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia (positive symptoms — high dose)",
      presentation: "A patient presenting with schizophrenia (positive symptoms — high dose), started on Amisulpride.",
      history: "A adult patient presents with a schizophrenia (positive symptoms — high dose) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia (positive symptoms — high dose); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia (positive symptoms — high dose). Differentials are considered and excluded clinically.",
      rationale: "Amisulpride is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 400 mg once or twice daily, titrated to 400-800 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Amisulpride takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Amisulpride",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2/D3 receptors (low-dose presynaptic autoreceptor blockade; high-dose postsynaptic antagonism)",
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
          primaryValue: "12-17 hours.",
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
          primaryValue: "Agent-specific.",
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
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
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
          primaryValue: "The dose-band benzamide — European/Indian staple with the clozapine-drool rescue",
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
      description: "Amisulpride reaches peak plasma concentration and begins acting at its molecular target (D2/D3 receptors (low-dose presynaptic autoreceptor blockade; high-dose postsynaptic antagonism)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (insomnia and agitation, extrapyramidal symptoms (high doses), hyperprolactinaemia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Dose-band-dependent effects; antipsychotic response 1-3 weeks at high dose.)",
      title: "Therapeutic effect builds",
      description: "Dose-band-dependent effects; antipsychotic response 1-3 weeks at high dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Amisulpride is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Amisulpride take to work?",
      answer: "Dose-band-dependent effects; antipsychotic response 1-3 weeks at high dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Amisulpride?",
      answer: "The most frequently reported effects are: Insomnia and agitation, Extrapyramidal symptoms (high doses), Hyperprolactinaemia, Weight gain (modest), QT prolongation (dose-related). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Amisulpride suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Amisulpride habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Amisulpride exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Amisulpride during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Amisulpride may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), amisulpride monograph, p. 4",
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
        source: "FDA Prescribing Information for Solian (Amisulpride)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for amisulpride — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Amisulpride",
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
      name: "Schizophrenia (positive symptoms — high dose)",
      relationship: "alternative",
    },
    {
      name: "Negative symptoms / deficit states (low dose)",
      relationship: "alternative",
    },
    {
      name: "Dysthymia / depression (low dose, EU)",
      relationship: "alternative",
    },
    {
      name: "Clozapine-induced sialorrhoea (rescue)",
      relationship: "off-label",
    },
    {
      name: "Acute mania (adjunct)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Amisulpride",
      type: "drug",
      href: "/drugs/amisulpride",
      note: "The drug you're reading about",
    },
    {
      label: "Atypical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Atypical Antipsychotic (Dopamine Partial Agonist)",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "D2/D3 receptors (low-dose presynaptic autoreceptor blockade; high-dose postsynaptic antagonism)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Schizophrenia (positive symptoms — high dose)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Negative symptoms / deficit states (low dose)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Dysthymia / depression (low dose, EU)",
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
      label: "Insomnia and agitation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Amisulpride",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The dose-bands-in-one-drug benzamide — low-dose antidepressant, high-dose antipsychotic, and the sialorrhoea rescue.",
    summary: "Amisulpride is a prescription medicine used to treat schizophrenia (positive symptoms — high dose). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Amisulpride is an antipsychotic used in Europe and India with a dose-dependent personality: small doses lift mood and motivation, while larger doses treat the positive symptoms of psychosis. It commonly raises prolactin (affecting periods, breast comfort, and sexual function), and higher doses require an occasional heart tracing.",
    sideEffects: "The most common side effects are: insomnia and agitation, extrapyramidal symptoms (high doses), hyperprolactinaemia, weight gain (modest), qt prolongation (dose-related). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: ecg (high doses) (baseline at > 400 mg and with risk factors); prolactin symptoms (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: QT-prolonging drugs, Levodopa and dopamine agonists, Levansulpride-class/sulpirade overlap products. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Sulpitac",
        manufacturer: "Sun",
        strengths: "50-400 mg",
      },
      {
        name: "Amisulpride generic",
        manufacturer: "multiple",
        strengths: "50-400 mg",
      },
    ],
    typicalDoses: "Positives 400-800 mg; negative/dysthymia 50-300 mg.",
    prescribingScenarios: [
      "Indian formulary atypical alongside risperidone/olanzapine.",
      "Clozapine augmentation and sialorrhoea rescue in de-addiction-adjacent schizophrenia care.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "ECG at high dose; prolactin symptom review.",
    patientCounselling: [
      "Morning dose; report breast/menstrual/sexual changes.",
      "Higher doses may need a heart tracing.",
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
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Amisulpride",
        slug: "amisulpride",
        relationship: "This guide",
        distinguishing: "The dose-band benzamide — European/Indian staple with the clozapine-drool rescue",
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
      question: "Which molecular target does Amisulpride primarily act on?",
      options: [
        "D2/D3 receptors (low-dose presynaptic autoreceptor blockade; high-dose postsynaptic antagonism)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Amisulpride acts primarily at D2/D3 receptors (low-dose presynaptic autoreceptor blockade; high-dose postsynaptic antagonism). Amisulpride shows dose-dependent dopaminergic action: low-dose presynaptic autoreceptor blockade disinhibits dopamine release; high-dose postsynaptic D2/D3 blockade is antipsychotic.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Amisulpride?",
      options: ["Insomnia and agitation", "Extrapyramidal symptoms (high doses)", "Hyperprolactinaemia", "Weight gain (modest)"],
      correctIndex: 0,
      explanation: "Insomnia and agitation — The activating tilt (autoreceptor effect at low doses).",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Amisulpride for schizophrenia (positive symptoms)?",
      options: ["400-800 mg/day", "1200 mg/day", "400-800 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (positive symptoms): start 400 mg once or twice daily, target 400-800 mg/day, maximum 1200 mg/day. Increase to 400-800 mg/day",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Amisulpride in two sentences.",
      answer: "Amisulpride shows dose-dependent dopaminergic action: low-dose presynaptic autoreceptor blockade disinhibits dopamine release; high-dose postsynaptic D2/D3 blockade is antipsychotic. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Amisulpride.",
      answer: "Schizophrenia (positive symptoms — high dose), Negative symptoms / deficit states (low dose), Dysthymia / depression (low dose, EU), Clozapine-induced sialorrhoea (rescue). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Amisulpride and how you would manage it.",
      answer: "Neuroleptic malignant syndrome: Class risk. Management: Stop; ICU.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Amisulpride require?",
      answer: "ECG (high doses) (Baseline at > 400 mg and with risk factors); Prolactin symptoms (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Amisulpride that separates safe prescribers from unsafe ones.",
      answer: "The dose-band benzamide: 50-300 mg = presynaptic antidepressant/negative-symptom dosing; 400-1200 mg = postsynaptic antipsychotic — the autoreceptor concept in clinical form.",
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
      checkpoint: "You now know what Amisulpride is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Amisulpride works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Amisulpride safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Amisulpride.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Amisulpride with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Amisulpride.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Dose-band-dependent effects; antipsychotic response 1-3 weeks at high dose.",
    ],
    ifItWorks: [
      "Continue Amisulpride at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Amisulpride (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Amisulpride follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Agent-specific.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Schizophrenia (positive symptoms)",
        starting: "400 mg once or twice daily",
        titration: "Increase to 400-800 mg/day",
        target: "400-800 mg/day",
        max: "1200 mg/day",
      },
      {
        indication: "Negative symptoms / depression (low dose)",
        starting: "50-100 mg once daily",
        titration: "The low-dose band IS the indication",
        target: "50-300 mg/day",
        max: "300 mg/day",
      },
      {
        indication: "Clozapine sialorrhoea (rescue)",
        starting: "25-50 mg twice daily",
        titration: "Low-dose add-on",
        target: "50-100 mg/day",
        max: "100 mg/day",
      },
    ],
    dosageForms: ["Tablets 50, 100, 200, 400 mg"],
    dosingTips: [
      "Respect the dose-bands: 50-300 vs 400+ mg are different drugs clinically.",
      "Morning dosing for the activating tilt.",
      "The clozapine-drool rescue dose is 25-50 mg bd.",
    ],
    overdose: [
      "Overdose with Amisulpride is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Amisulpride is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 12-17 hours..", "Metabolism: Hepatic.."],
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
      "Dose-band flexibility (depression to psychosis).",
      "Negative-symptom and dysthymia evidence.",
      "Sialorrhoea rescue + clozapine-augmentation evidence.",
    ],
    potentialDisadvantages: ["Prolactin elevation (class-top).", "QT caution at high doses.", "EPS at antipsychotic doses.", "Not FDA-approved."],
    primaryTargetSymptoms: [
      "Positive symptoms (high dose)",
      "Negative symptoms and dysthymia (low dose)",
      "Clozapine sialorrhoea (rescue)",
    ],
    pearls: [
      "The dose-band benzamide: 50-300 mg = presynaptic antidepressant/negative-symptom dosing; 400-1200 mg = postsynaptic antipsychotic — the autoreceptor concept in clinical form.",
      "The clozapine-drool rescue: low-dose amisulpride is among the best-evidenced treatments for clozapine sialorrhoea — the practical pearl that survives translation.",
      "The prolactin price: with risperidone at the top of the class — ask about menstrual/sexual effects.",
      "The QT heritage: benzamide chemistry (droperidol family) carries the ECG caution at higher doses.",
      "The augmentation evidence: amisulpride is the best-evidenced clozapine augmentation partner in TRS.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
