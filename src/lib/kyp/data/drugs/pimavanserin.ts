import type { Drug } from "../types";

/**
 * Pimavanserin — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), pimavanserin monograph (book p. 99)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const pimavanserin: Drug = {
  /* ---- Identity ---- */
  slug: "pimavanserin",
  genericName: "Pimavanserin",
  brandNames: ["Nuplazid"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (5-HT2A Inverse Agonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Pimavanserin"],
  /* ---- Hero / summary ---- */
  tagline: "The non-dopaminergic antipsychotic — 5-HT2A inverse agonism for Parkinson's psychosis without motor cost.",
  summary: "Pimavanserin is the first antipsychotic with NO dopamine blockade: a selective 5-HT2A inverse agonist approved for hallucinations and delusions in Parkinson's disease psychosis — antipsychotic effect without worsening the motor parkinsonism that every D2-blocking agent causes. QT prolongation is its main caution; the drug represents a mechanism-class of its own.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Pimavanserin — from its molecular target (5-HT2A receptors (selective inverse agonist — zero D2 occupancy)) to clinical effect.",
    "List the FDA-approved and off-label uses of Pimavanserin.",
    "Predict the common and serious side effects of Pimavanserin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Pimavanserin.",
    "Compare Pimavanserin with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Pimavanserin selectively acts as a 5-HT2A inverse agonist — treating psychosis through serotonergic modulation while leaving dopamine receptors untouched.",
    molecularTarget: "5-HT2A receptors (selective inverse agonist — zero D2 occupancy)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Pimavanserin selectively acts as a 5-HT2A inverse agonist — treating psychosis through serotonergic modulation while leaving dopamine receptors untouched.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 57 hours. — see mechanism and prescriber sections.",
    halfLife: "57 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Pimavanserin",
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
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: [
    "5-HT2A receptor (selective inverse agonist)",
  ],
  brainRegionIds: ["prefrontal-cortex", "substantia-nigra"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Hallucinations and delusions associated with Parkinson's disease psychosis",
      status: "fda-approved",
      description: "The first drug approved for this indication — psychosis control with zero motor worsening.",
    },
    {
      name: "Dementia-related psychosis (adjunct/studied)",
      status: "off-label",
      description: "Studied extensively; the dementia-psychosis field remains caution-governed.",
    },
    {
      name: "Schizophrenia (adjunct, studied)",
      status: "off-label",
      description: "Augmentation trials mixed.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Pimavanserin must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis (class framing)",
      text: "As a class caution for antipsychotics in dementia — pimavanserin's specific approval is for Parkinson's disease psychosis; use within the indication with review discipline.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Peripheral oedema",
      frequency: "common",
      severity: "mild",
      description: "The commonest reported effect.",
      management: "Reassurance; review.",
    },
    {
      name: "Confusion and delirium",
      frequency: "common",
      severity: "moderate",
      description: "Reported — the elderly PDP population is frail.",
      management: "Monitor cognition; dose review.",
    },
    {
      name: "Nausea and constipation",
      frequency: "common",
      severity: "mild",
      description: "Usually mild.",
      management: "Symptomatic care.",
    },
  ],
  seriousSideEffects: [
    {
      name: "QT prolongation",
      frequency: "uncommon",
      severity: "severe",
      description: "The label caution — modest mean effect; avoid QT-drug combinations.",
      management: "ECG in at-risk; electrolytes; avoid combinations.",
    },
    {
      name: "Mortality signal in broader dementia populations (label discussion)",
      frequency: "uncommon",
      severity: "severe",
      description: "The class-of-antipsychotics caution hangs over all antipsychotics in dementia — pimavanserin's specific approval is Parkinson's psychosis.",
      management: "Use within the approved indication; review discipline.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "QT and electrolytes in at-risk",
      frequency: "Baseline when indicated",
      rationale: "The label caution.",
    },
    {
      parameter: "Motor function (unchanged by design)",
      frequency: "At review",
      rationale: "The dopamine-sparing confirmation.",
    },
    {
      parameter: "Cognition and oedema (elderly)",
      frequency: "At review",
      rationale: "The population's frailty set.",
    },
  ],
  interactions: [
    {
      drug: "Strong CYP3A4 inhibitors/inducers",
      severity: "major",
      mechanism: "3A4 metabolism — levels shift.",
      action: "Dose awareness; avoid strong inducers.",
    },
    {
      drug: "QT-prolonging drugs",
      severity: "major",
      mechanism: "Additive QT.",
      action: "ECG; avoid.",
    },
    {
      drug: "Serotonergic drugs",
      severity: "moderate",
      mechanism: "5-HT2A action — serotonin-syndrome caution with SSRIs (label warning).",
      action: "Counsel; monitor.",
    },
  ],
  pregnancy: {
    summary: "Not applicable clinically (population); standard caution.",
    lactation: "Not applicable.",
  },
  renalAdjustment: "No adjustment for mild-moderate impairment.",
  hepaticAdjustment: "Not recommended in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Pimavanserin is the first antipsychotic that works without touching the dopamine system — it acts on serotonin receptors instead. This makes it uniquely suited to hallucinations and delusions in Parkinson's disease, because it does not interfere with Parkinson's medicines or worsen movement. It is taken as two capsules once daily; swelling of the legs and confusion are its main side effects, and it can slightly affect the heart's rhythm.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Pimavanserin builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The mechanism class of one: zero D2 occupancy — psychosis treated through 5-HT2A alone; the proof that dopamine is not the only road.",
    "The Parkinson's-psychosis prize: every other antipsychotic worsens motor parkinsonism (D2 blockade vs dopaminergic therapy) — pimavanserin leaves the motor system alone.",
    "The quetiapine-clozapine era ends: the field's Parkinson's-psychosis hierarchy (quetiapine → clozapine → pimavanserin where available) now has a licensed first choice.",
    "The oedema-confusion texture: mild but real in the frail elderly population — monitor what you treat.",
    "QT caution: modest but the combination audit applies as with any QT agent.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Pimavanserin: Pimavanserin selectively acts as a 5-HT2A inverse agonist — treating psychosis through serotonergic modulation while leaving dopamine receptors untouched.",
        "Uses of Pimavanserin: Hallucinations and delusions associated with Parkinson's disease psychosis; Dementia-related psychosis (adjunct/studied); Schizophrenia (adjunct, studied)",
        "Mechanism: SELECTIVE 5-HT2A INVERSE AGONIST — zero D2 blockade (unique class).",
        "Indication: hallucinations/delusions in PARKINSON'S DISEASE PSYCHOSIS (first approved drug).",
      ],
      practical: [
        "Prescribe Pimavanserin for hallucinations and delusions associated with parkinson's disease psychosis with dose, timing, and duration.",
        "Outline the monitoring plan: QT and electrolytes in at-risk (Baseline when indicated); Motor function (unchanged by design) (At review); Cognition and oedema (elderly) (At review)",
      ],
      longAnswer: [
        "Pimavanserin: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SELECTIVE 5-HT2A INVERSE AGONIST — zero D2 blockade (unique class).",
        "Indication: hallucinations/delusions in PARKINSON'S DISEASE PSYCHOSIS (first approved drug).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SELECTIVE 5-HT2A INVERSE AGONIST — zero D2 blockade (unique class).",
        "Indication: hallucinations/delusions in PARKINSON'S DISEASE PSYCHOSIS (first approved drug).",
        "Motor-neutral: does not worsen parkinsonism (the dopamine-sparing property).",
        "Main caution: QT prolongation (combination audit).",
        "Common effects: oedema, confusion, nausea.",
        "Dose 34 mg once daily, no titration.",
      ],
      pyqConcepts: ["Mechanism/target of Pimavanserin", "Key adverse effect: QT prolongation", "Dosing and titration of Pimavanserin"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Pimavanserin develops qt prolongation — next best step?",
        "When to choose Pimavanserin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: 5-HT2A receptors (selective inverse agonist — zero D2 occupancy)",
        "Most common side effects: Peripheral oedema, Confusion and delirium, Nausea and constipation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The mechanism class of one: zero D2 occupancy — psychosis treated through 5-HT2A alone; the proof that dopamine is not the only road.",
        "The Parkinson's-psychosis prize: every other antipsychotic worsens motor parkinsonism (D2 blockade vs dopaminergic therapy) — pimavanserin leaves the motor system alone.",
        "The quetiapine-clozapine era ends: the field's Parkinson's-psychosis hierarchy (quetiapine → clozapine → pimavanserin where available) now has a licensed first choice.",
        "The oedema-confusion texture: mild but real in the frail elderly population — monitor what you treat.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SELECTIVE 5-HT2A INVERSE AGONIST — zero D2 blockade (unique class).",
    "Indication: hallucinations/delusions in PARKINSON'S DISEASE PSYCHOSIS (first approved drug).",
    "Motor-neutral: does not worsen parkinsonism (the dopamine-sparing property).",
    "Main caution: QT prolongation (combination audit).",
    "Common effects: oedema, confusion, nausea.",
    "Dose 34 mg once daily, no titration.",
    "Serotonin-syndrome caution with serotonergics (5-HT2A action).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — hallucinations and delusions associated with parkinson's disease psychosis",
      presentation: "A patient presenting with hallucinations and delusions associated with parkinson's disease psychosis, started on Pimavanserin.",
      history: "A adult patient presents with a hallucinations and delusions associated with parkinson's disease psychosis picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with hallucinations and delusions associated with parkinson's disease psychosis; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Hallucinations and delusions associated with Parkinson's disease psychosis. Differentials are considered and excluded clinically.",
      rationale: "Pimavanserin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 34 mg once daily (two 17 mg capsules), titrated to 34 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Pimavanserin takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Pimavanserin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "5-HT2A receptors (selective inverse agonist — zero D2 occupancy)",
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
          primaryValue: "57 hours.",
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
          primaryValue: "The dopamine-sparing antipsychotic — Parkinson's psychosis specialist",
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
      description: "Pimavanserin reaches peak plasma concentration and begins acting at its molecular target (5-HT2A receptors (selective inverse agonist — zero D2 occupancy)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (peripheral oedema, confusion and delirium, nausea and constipation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Psychosis benefit over 1-2 weeks at steady state.)",
      title: "Therapeutic effect builds",
      description: "Psychosis benefit over 1-2 weeks at steady state. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Pimavanserin is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Pimavanserin take to work?",
      answer: "Psychosis benefit over 1-2 weeks at steady state.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Pimavanserin?",
      answer: "The most frequently reported effects are: Peripheral oedema, Confusion and delirium, Nausea and constipation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Pimavanserin suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Pimavanserin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Pimavanserin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Pimavanserin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Pimavanserin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), pimavanserin monograph, p. 99",
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
        source: "FDA Prescribing Information for Nuplazid (Pimavanserin)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for pimavanserin — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Pimavanserin",
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
      name: "Hallucinations and delusions associated with Parkinson's disease psychosis",
      relationship: "primary",
    },
    {
      name: "Dementia-related psychosis (adjunct/studied)",
      relationship: "off-label",
    },
    {
      name: "Schizophrenia (adjunct, studied)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Pimavanserin",
      type: "drug",
      href: "/drugs/pimavanserin",
      note: "The drug you're reading about",
    },
    {
      label: "Atypical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Atypical Antipsychotic (5-HT2A Inverse Agonist)",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "5-HT2A receptors (selective inverse agonist — zero D2 occupancy)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Hallucinations and delusions associated with Parkinson's disease psychosis",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Dementia-related psychosis (adjunct/studied)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Schizophrenia (adjunct, studied)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "QT prolongation",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Mortality signal in broader dementia populations (label discussion)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Peripheral oedema",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Pimavanserin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The non-dopaminergic antipsychotic — 5-HT2A inverse agonism for Parkinson's psychosis without motor cost.",
    summary: "Pimavanserin is a prescription medicine used to treat hallucinations and delusions associated with parkinson's disease psychosis. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Pimavanserin is the first antipsychotic that works without touching the dopamine system — it acts on serotonin receptors instead. This makes it uniquely suited to hallucinations and delusions in Parkinson's disease, because it does not interfere with Parkinson's medicines or worsen movement. It is taken as two capsules once daily; swelling of the legs and confusion are its main side effects, and it can slightly affect the heart's rhythm.",
    sideEffects: "The most common side effects are: peripheral oedema, confusion and delirium, nausea and constipation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: QT prolongation and Mortality signal in broader dementia populations (label discussion). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: qt and electrolytes in at-risk (baseline when indicated); motor function (unchanged by design) (at review); cognition and oedema (elderly) (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Strong CYP3A4 inhibitors/inducers, QT-prolonging drugs, Serotonergic drugs. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Not marketed in India)",
        manufacturer: "—",
        strengths: "—",
      },
    ],
    typicalDoses: "—",
    prescribingScenarios: [
      "US prescriptions; tertiary-centre import in selected Parkinson's cases.",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Pimavanserin",
        slug: "pimavanserin",
        relationship: "This guide",
        distinguishing: "The dopamine-sparing antipsychotic — Parkinson's psychosis specialist",
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
    study: "20 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Pimavanserin primarily act on?",
      options: [
        "5-HT2A receptors (selective inverse agonist — zero D2 occupancy)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Pimavanserin acts primarily at 5-HT2A receptors (selective inverse agonist — zero D2 occupancy). Pimavanserin selectively acts as a 5-HT2A inverse agonist — treating psychosis through serotonergic modulation while leaving dopamine receptors untouched.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Pimavanserin?",
      options: ["Peripheral oedema", "Confusion and delirium", "Nausea and constipation", "Weight gain"],
      correctIndex: 0,
      explanation: "Peripheral oedema — The commonest reported effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Pimavanserin for parkinson's disease psychosis?",
      options: ["34 mg/day", "34 mg/day (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For parkinson's disease psychosis: start 34 mg once daily (two 17 mg capsules), target 34 mg/day, maximum 34 mg/day. No titration required",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Pimavanserin in two sentences.",
      answer: "Pimavanserin selectively acts as a 5-HT2A inverse agonist — treating psychosis through serotonergic modulation while leaving dopamine receptors untouched. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Pimavanserin.",
      answer: "Hallucinations and delusions associated with Parkinson's disease psychosis, Dementia-related psychosis (adjunct/studied), Schizophrenia (adjunct, studied). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Pimavanserin and how you would manage it.",
      answer: "QT prolongation: The label caution — modest mean effect; avoid QT-drug combinations. Management: ECG in at-risk; electrolytes; avoid combinations.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Pimavanserin require?",
      answer: "QT and electrolytes in at-risk (Baseline when indicated); Motor function (unchanged by design) (At review); Cognition and oedema (elderly) (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Pimavanserin that separates safe prescribers from unsafe ones.",
      answer: "The mechanism class of one: zero D2 occupancy — psychosis treated through 5-HT2A alone; the proof that dopamine is not the only road.",
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
      checkpoint: "You now know what Pimavanserin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Pimavanserin works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Pimavanserin safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Pimavanserin.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Pimavanserin with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Pimavanserin.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Psychosis benefit over 1-2 weeks at steady state.",
    ],
    ifItWorks: [
      "Continue Pimavanserin at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Pimavanserin (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Pimavanserin follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Parkinson's disease psychosis",
        starting: "34 mg once daily (two 17 mg capsules)",
        titration: "No titration required",
        target: "34 mg/day",
        max: "34 mg/day",
      },
    ],
    dosageForms: ["Capsules 17 mg (dose = 2 capsules)"],
    dosingTips: [
      "The motor-neutrality is the prescribing point.",
      "QT combination audit as with any QT agent.",
      "No titration — 34 mg from the start.",
    ],
    overdose: [
      "Overdose with Pimavanserin is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Pimavanserin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 57 hours..", "Metabolism: Hepatic.."],
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
      "Zero motor worsening in parkinsonism.",
      "First approved Parkinson's-psychosis drug.",
      "Once daily, no titration.",
    ],
    potentialDisadvantages: ["QT caution.", "Oedema/confusion in the frail elderly.", "Cost and availability.", "Not a general schizophrenia drug."],
    primaryTargetSymptoms: [
      "Hallucinations and delusions in Parkinson's disease psychosis",
    ],
    pearls: [
      "The mechanism class of one: zero D2 occupancy — psychosis treated through 5-HT2A alone; the proof that dopamine is not the only road.",
      "The Parkinson's-psychosis prize: every other antipsychotic worsens motor parkinsonism (D2 blockade vs dopaminergic therapy) — pimavanserin leaves the motor system alone.",
      "The quetiapine-clozapine era ends: the field's Parkinson's-psychosis hierarchy (quetiapine → clozapine → pimavanserin where available) now has a licensed first choice.",
      "The oedema-confusion texture: mild but real in the frail elderly population — monitor what you treat.",
      "QT caution: modest but the combination audit applies as with any QT agent.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
