import type { Drug } from "../types";

/**
 * Sulpiride — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), sulpiride monograph (book p. 116)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const sulpiride: Drug = {
  /* ---- Identity ---- */
  slug: "sulpiride",
  genericName: "Sulpiride",
  brandNames: ["Dogmatil", "Sulpitil / Sulpiride (India-legacy)"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Substituted Benzamide)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Sulpiride"],
  /* ---- Hero / summary ---- */
  tagline: "The parent benzamide — amisulpride's ancestor with the same dose-band logic.",
  summary: "Sulpiride is the original substituted benzamide antipsychotic: amisulpride's chemical parent, sharing the dose-band logic (low-dose antidepressant/negative-symptom; high-dose antipsychotic) with weaker potency and the same prolactin-QT profile. A European-Japanese-Indian legacy agent surviving in formularies and teaching.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Sulpiride — from its molecular target (D2/D3 receptors (dose-dependent presynaptic/postsynaptic action)) to clinical effect.",
    "List the FDA-approved and off-label uses of Sulpiride.",
    "Predict the common and serious side effects of Sulpiride from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Sulpiride.",
    "Compare Sulpiride with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Sulpiride shows the benzamide dose-band: low-dose presynaptic autoreceptor blockade, high-dose postsynaptic D2 antagonism.",
    molecularTarget: "D2/D3 receptors (dose-dependent presynaptic/postsynaptic action)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Sulpiride shows the benzamide dose-band: low-dose presynaptic autoreceptor blockade, high-dose postsynaptic D2 antagonism.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 6-8 hours (divided dosing). — see mechanism and prescriber sections.",
    halfLife: "6-8 hours (divided dosing).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Sulpiride",
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
  receptors: ["D2/D3 receptors"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens", "substantia-nigra"],
  pathwayIds: ["mesolimbic", "nigrostriatal", "tuberoinfundibular", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia (positive symptoms)",
      status: "guideline",
      description: "High-dose antipsychotic use (legacy).",
    },
    {
      name: "Negative symptoms / dysthymia (low dose)",
      status: "guideline",
      description: "The low-dose benzamide band (legacy French/Japanese practice).",
    },
    {
      name: "Vertigo and tinnitus (Meniere-type)",
      status: "off-label",
      description: "A historic otologic niche.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Sulpiride must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      name: "Insomnia and activation (low dose)",
      frequency: "common",
      severity: "mild",
      description: "The autoreceptor tilt.",
      management: "Morning dosing.",
    },
    {
      name: "EPS (high doses)",
      frequency: "common",
      severity: "moderate",
      description: "Postsynaptic band.",
      management: "Dose review.",
    },
    {
      name: "Hyperprolactinaemia",
      frequency: "very-common",
      severity: "moderate",
      description: "Class-topping prolactin (with amisulpride/risperidone).",
      management: "Ask; consider switch.",
    },
    {
      name: "Sedation and orthostasis",
      frequency: "uncommon",
      severity: "mild",
      description: "Lesser than phenothiazines.",
      management: "Reassurance.",
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
      name: "QT prolongation",
      frequency: "uncommon",
      severity: "severe",
      description: "Benzamide caution.",
      management: "ECG at high dose.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Prolactin symptoms",
      frequency: "At review",
      rationale: "Class-top elevation.",
    },
  ],
  interactions: [
    {
      drug: "QT-prolonging drugs",
      severity: "major",
      mechanism: "Additive benzamide QT.",
      action: "ECG; avoid.",
    },
    {
      drug: "Levodopa/dopamine agonists",
      severity: "moderate",
      mechanism: "Antagonism.",
      action: "Avoid.",
    },
  ],
  pregnancy: {
    summary: "Limited data; standard antipsychotic caution.",
    lactation: "Excreted in milk; monitoring.",
  },
  renalAdjustment: "Renal clearance dominant — reduce in impairment.",
  hepaticAdjustment: "Standard caution.",
  /* ---- Education ---- */
  patientExplanation: "Sulpiride is an older European and Indian antipsychotic from the same family as amisulpride: small doses were used for low mood and motivation, larger doses for the symptoms of psychosis. It commonly raises prolactin — affecting periods, breast comfort, and sexual function.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Sulpiride builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The family tree: sulpiride → amisulpride (the refined successor) — dose-band pharmacology inherited intact.",
    "The otology oddity: sulpiride's historic vertigo-tinnitus niche — a benzamide side-door.",
    "Prolactin at the top: the benzamide price — menstrual and sexual effects to ask about.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Sulpiride: Sulpiride shows the benzamide dose-band: low-dose presynaptic autoreceptor blockade, high-dose postsynaptic D2 antagonism.",
        "Uses of Sulpiride: Schizophrenia (positive symptoms); Negative symptoms / dysthymia (low dose); Vertigo and tinnitus (Meniere-type)",
        "Mechanism: parent SUBSTITUTED BENZAMIDE — dose-band presynaptic/postsynaptic D2 action.",
        "Legacy approvals: schizophrenia (EU/Asia); low-dose dysthymia tradition.",
      ],
      practical: [
        "Prescribe Sulpiride for schizophrenia (positive symptoms) with dose, timing, and duration.",
        "Outline the monitoring plan: Prolactin symptoms (At review)",
      ],
      longAnswer: [
        "Sulpiride: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: parent SUBSTITUTED BENZAMIDE — dose-band presynaptic/postsynaptic D2 action.",
        "Legacy approvals: schizophrenia (EU/Asia); low-dose dysthymia tradition.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: parent SUBSTITUTED BENZAMIDE — dose-band presynaptic/postsynaptic D2 action.",
        "Legacy approvals: schizophrenia (EU/Asia); low-dose dysthymia tradition.",
        "Prolactin elevation class-top; QT benzamide caution.",
        "Amisulpride's ancestor — same pharmacology, weaker potency.",
        "Historic vertigo/tinnitus niche.",
      ],
      pyqConcepts: [
        "Mechanism/target of Sulpiride",
        "Key adverse effect: Neuroleptic malignant syndrome",
        "Dosing and titration of Sulpiride",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Sulpiride develops neuroleptic malignant syndrome — next best step?",
        "When to choose Sulpiride over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2/D3 receptors (dose-dependent presynaptic/postsynaptic action)",
        "Most common side effects: Insomnia and activation (low dose), EPS (high doses), Hyperprolactinaemia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The family tree: sulpiride → amisulpride (the refined successor) — dose-band pharmacology inherited intact.",
        "The otology oddity: sulpiride's historic vertigo-tinnitus niche — a benzamide side-door.",
        "Prolactin at the top: the benzamide price — menstrual and sexual effects to ask about.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: parent SUBSTITUTED BENZAMIDE — dose-band presynaptic/postsynaptic D2 action.",
    "Legacy approvals: schizophrenia (EU/Asia); low-dose dysthymia tradition.",
    "Prolactin elevation class-top; QT benzamide caution.",
    "Amisulpride's ancestor — same pharmacology, weaker potency.",
    "Historic vertigo/tinnitus niche.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — schizophrenia (positive symptoms)",
      presentation: "A patient presenting with schizophrenia (positive symptoms), started on Sulpiride.",
      history: "A adult patient presents with a schizophrenia (positive symptoms) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with schizophrenia (positive symptoms); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Schizophrenia (positive symptoms). Differentials are considered and excluded clinically.",
      rationale: "Sulpiride is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Atypical Antipsychotic) with strong evidence in this condition.",
      management: "Started at 200 mg twice daily, titrated to 600-1200 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Sulpiride takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Sulpiride",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2/D3 receptors (dose-dependent presynaptic/postsynaptic action)",
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
          primaryValue: "6-8 hours (divided dosing).",
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
          primaryValue: "The parent benzamide — legacy dose-band pharmacology",
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
      description: "Sulpiride reaches peak plasma concentration and begins acting at its molecular target (D2/D3 receptors (dose-dependent presynaptic/postsynaptic action)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (insomnia and activation (low dose), eps (high doses), hyperprolactinaemia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (As with the class: dose-band-dependent onset.)",
      title: "Therapeutic effect builds",
      description: "As with the class: dose-band-dependent onset. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Sulpiride is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Sulpiride take to work?",
      answer: "As with the class: dose-band-dependent onset.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Sulpiride?",
      answer: "The most frequently reported effects are: Insomnia and activation (low dose), EPS (high doses), Hyperprolactinaemia, Sedation and orthostasis. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Sulpiride suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Sulpiride habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Sulpiride exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Sulpiride during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Sulpiride may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), sulpiride monograph, p. 116",
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
        source: "FDA Prescribing Information for Dogmatil (Sulpiride)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for sulpiride — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Sulpiride",
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
      name: "Schizophrenia (positive symptoms)",
      relationship: "alternative",
    },
    {
      name: "Negative symptoms / dysthymia (low dose)",
      relationship: "alternative",
    },
    {
      name: "Vertigo and tinnitus (Meniere-type)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Sulpiride",
      type: "drug",
      href: "/drugs/sulpiride",
      note: "The drug you're reading about",
    },
    {
      label: "Atypical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Atypical Antipsychotic (Substituted Benzamide)",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "D2/D3 receptors (dose-dependent presynaptic/postsynaptic action)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Schizophrenia (positive symptoms)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Negative symptoms / dysthymia (low dose)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Vertigo and tinnitus (Meniere-type)",
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
      label: "QT prolongation",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Insomnia and activation (low dose)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Sulpiride",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The parent benzamide — amisulpride's ancestor with the same dose-band logic.",
    summary: "Sulpiride is a prescription medicine used to treat schizophrenia (positive symptoms). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Sulpiride is an older European and Indian antipsychotic from the same family as amisulpride: small doses were used for low mood and motivation, larger doses for the symptoms of psychosis. It commonly raises prolactin — affecting periods, breast comfort, and sexual function.",
    sideEffects: "The most common side effects are: insomnia and activation (low dose), eps (high doses), hyperprolactinaemia, sedation and orthostasis. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome and QT prolongation. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: prolactin symptoms (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: QT-prolonging drugs, Levodopa/dopamine agonists. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Sulpitil / Sulpiride (legacy availability)",
        manufacturer: "various",
        strengths: "50-200 mg",
      },
    ],
    typicalDoses: "Positives 600-1200 mg; low-dose band 100-300 mg.",
    prescribingScenarios: ["Legacy Indian formulary presence.", "Amisulpride's cheaper ancestor."],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Prolactin symptom review.",
    patientCounselling: ["Report menstrual/breast/sexual changes."],
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
        name: "Sulpiride",
        slug: "sulpiride",
        relationship: "This guide",
        distinguishing: "The parent benzamide — legacy dose-band pharmacology",
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
      question: "Which molecular target does Sulpiride primarily act on?",
      options: [
        "D2/D3 receptors (dose-dependent presynaptic/postsynaptic action)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Sulpiride acts primarily at D2/D3 receptors (dose-dependent presynaptic/postsynaptic action). Sulpiride shows the benzamide dose-band: low-dose presynaptic autoreceptor blockade, high-dose postsynaptic D2 antagonism.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Sulpiride?",
      options: ["Insomnia and activation (low dose)", "EPS (high doses)", "Hyperprolactinaemia", "Sedation and orthostasis"],
      correctIndex: 0,
      explanation: "Insomnia and activation (low dose) — The autoreceptor tilt.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Sulpiride for schizophrenia?",
      options: ["600-1200 mg/day", "1600 mg/day (exceptional)", "600-1200 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia: start 200 mg twice daily, target 600-1200 mg/day, maximum 1600 mg/day (exceptional). Increase to 600-1200 mg/day",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Sulpiride in two sentences.",
      answer: "Sulpiride shows the benzamide dose-band: low-dose presynaptic autoreceptor blockade, high-dose postsynaptic D2 antagonism. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Sulpiride.",
      answer: "Schizophrenia (positive symptoms), Negative symptoms / dysthymia (low dose), Vertigo and tinnitus (Meniere-type). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Sulpiride and how you would manage it.",
      answer: "Neuroleptic malignant syndrome: Class risk. Management: Stop; ICU.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Sulpiride require?",
      answer: "Prolactin symptoms (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Sulpiride that separates safe prescribers from unsafe ones.",
      answer: "The family tree: sulpiride → amisulpride (the refined successor) — dose-band pharmacology inherited intact.",
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
      checkpoint: "You now know what Sulpiride is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Sulpiride works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Sulpiride safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Sulpiride.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Sulpiride with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Sulpiride.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "As with the class: dose-band-dependent onset.",
    ],
    ifItWorks: [
      "Continue Sulpiride at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Sulpiride (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Sulpiride follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Schizophrenia",
        starting: "200 mg twice daily",
        titration: "Increase to 600-1200 mg/day",
        target: "600-1200 mg/day",
        max: "1600 mg/day (exceptional)",
      },
      {
        indication: "Negative/dysthymia (low dose)",
        starting: "50-150 mg twice daily",
        titration: "The low-dose band",
        target: "100-300 mg/day",
        max: "300 mg/day",
      },
    ],
    dosageForms: ["Tablets 50-200 mg", "Capsules", "Solution"],
    dosingTips: ["Respect the dose-bands.", "Ask about prolactin effects."],
    overdose: [
      "Overdose with Sulpiride is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Sulpiride is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 6-8 hours (divided dosing)..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["Legacy dose-band flexibility.", "Low cost in its markets."],
    potentialDisadvantages: ["Weak evidence vs modern agents.", "Prolactin and QT cautions.", "Largely superseded."],
    primaryTargetSymptoms: ["Positive symptoms (legacy)", "Negative symptoms (low dose, legacy)"],
    pearls: [
      "The family tree: sulpiride → amisulpride (the refined successor) — dose-band pharmacology inherited intact.",
      "The otology oddity: sulpiride's historic vertigo-tinnitus niche — a benzamide side-door.",
      "Prolactin at the top: the benzamide price — menstrual and sexual effects to ask about.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
