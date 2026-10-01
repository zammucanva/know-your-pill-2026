import type { Drug } from "../types";

/**
 * Benztropine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), benztropine monograph (book p. 13)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const benztropine: Drug = {
  /* ---- Identity ---- */
  slug: "benztropine",
  genericName: "Benztropine",
  brandNames: ["Cogentin", "Benztrop (India)"],
  drugClass: "anticholinergic",
  drugClassLabel: "Anticholinergic",
  drugClassFullName: "Anticholinergic Antiparkinsonian Agent",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Specialised Agents", "Anticholinergics", "Benztropine"],
  /* ---- Hero / summary ---- */
  tagline: "The EPS antidote — anticholinergic blockade of the striatum to undo dopamine-blockade side effects.",
  summary: "Benztropine is the anticholinergic (antimuscarinic) antiparkinsonian agent that treats antipsychotic-induced extrapyramidal symptoms: it restores the striatal dopamine-acetylcholine balance that D2 blockade disturbs, relieving dystonia, parkinsonism, and (partially) akathisia. Its own adverse-effect currency is the anticholinergic burden — dry mouth, blurred vision, constipation, urinary retention, memory effects — which is why it is dosed low, tapered early, and avoided in the elderly.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Benztropine — from its molecular target (Striatal muscarinic (M1) receptors (antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Benztropine.",
    "Predict the common and serious side effects of Benztropine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Benztropine.",
    "Compare Benztropine with other anticholinergics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Benztropine blocks striatal muscarinic receptors, releasing the cholinergic overdrive that D2 blockade creates — restoring the dopamine-acetylcholine equilibrium of the basal ganglia.",
    molecularTarget: "Striatal muscarinic (M1) receptors (antagonist)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Benztropine blocks striatal muscarinic receptors, releasing the cholinergic overdrive that D2 blockade creates — restoring the dopamine-acetylcholine equilibrium of the basal ganglia.",
      "The target engagement translates into the clinical effect.",
      "Practical use follows the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 4-8 hours (sometimes dosed bd). — see mechanism and prescriber sections.",
    halfLife: "About 4-8 hours (sometimes dosed bd).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Benztropine",
        sublabel: "Anticholinergic",
        variant: "inhibit",
      },
      {
        id: "m1",
        label: "Muscarinic (M1) receptors",
        sublabel: "Striatal ACh–DA balance",
        variant: "target",
      },
      {
        id: "balance",
        label: "ACh–DA balance restored",
        sublabel: "Dopamine inhibition of striatum released",
        variant: "process",
      },
      {
        id: "effect",
        label: "EPS / dystonia relieved",
        sublabel: "Motor control restored",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "m1",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "m1",
        to: "balance",
        label: "rebalances",
      },
      {
        from: "balance",
        to: "effect",
        label: "relieves",
      },
    ],
    caption: "Antipsychotics block dopamine; anticholinergics block the cholinergic counterbalance — restoring the striatal equilibrium that drug-induced parkinsonism disturbs.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Acetylcholine (ACh)", "Dopamine (DA)"],
  receptors: [
    "Striatal muscarinic M1 receptors (antagonist)",
  ],
  brainRegionIds: ["substantia-nigra", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Drug-induced extrapyramidal symptoms (parkinsonism, dystonia)",
      status: "fda-approved",
      description: "The classic indication: acute and subacute EPS from antipsychotics.",
    },
    {
      name: "Acute dystonic reactions (adjunct to/alternative to diphenhydramine)",
      status: "guideline",
      description: "IM/IV benztropine reverses dystonia in minutes.",
    },
    {
      name: "Parkinson's disease (adjunct, historic)",
      status: "fda-approved",
      description: "Superseded by modern antiparkinsonian therapy.",
    },
    {
      name: "Akathisia (partial benefit)",
      status: "off-label",
      description: "Less effective than for parkinsonism/dystonia; beta-blockers preferred.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Benztropine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dry mouth and blurred vision",
      frequency: "very-common",
      severity: "mild",
      description: "Anticholinergic effects.",
      management: "Sips; ocular review in glaucoma-susceptible.",
    },
    {
      name: "Constipation",
      frequency: "very-common",
      severity: "moderate",
      description: "Anticholinergic bowel slowing — additive with antipsychotics.",
      management: "Bowel regimen; hydration.",
    },
    {
      name: "Urinary retention (men with prostatism)",
      frequency: "common",
      severity: "moderate",
      description: "Anticholinergic bladder effect.",
      management: "Caution in prostatic hypertrophy.",
    },
    {
      name: "Sedation and memory difficulty",
      frequency: "common",
      severity: "moderate",
      description: "Central anticholinergic effects.",
      management: "Dose minimisation; avoid in elderly.",
    },
    {
      name: "Tachycardia",
      frequency: "common",
      severity: "mild",
      description: "Anticholinergic cardiac effect.",
      management: "Pulse awareness.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Anticholinergic delirium (elderly, high dose)",
      frequency: "uncommon",
      severity: "severe",
      description: "Confusion, agitation — the classic antipsychotic-plus-anticholinergic geriatric trap.",
      management: "Avoid in elderly; taper early.",
    },
    {
      name: "Ileus (with other anticholinergics)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Cumulative anticholinergic bowel paralysis.",
      management: "Bowel monitoring; minimise total burden.",
    },
    {
      name: "Angle-closure glaucoma precipitation",
      frequency: "rare",
      severity: "severe",
      description: "Pupil dilation closes narrow angles.",
      management: "Avoid in narrow-angle glaucoma; ophthalmic history.",
    },
    {
      name: "Tardive dyskinesia masking",
      frequency: "uncommon",
      severity: "moderate",
      description: "Anticholinergics can mask emerging TD — the AIMS argument for early taper.",
      management: "AIMS before and during; taper when EPS settles.",
    },
    {
      name: "Worsening of psychosis (high dose)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Anticholinergic dopaminergic compensation can aggravate psychosis.",
      management: "Dose review.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "AIMS before and during",
      frequency: "Baseline and periodically",
      rationale: "The TD-masking argument for taper windows.",
    },
    {
      parameter: "Bowel and bladder function",
      frequency: "At review",
      rationale: "Anticholinergic surveillance.",
    },
    {
      parameter: "Cognition (elderly)",
      frequency: "At review",
      rationale: "The delirium trade-off.",
    },
  ],
  interactions: [
    {
      drug: "Other anticholinergics (bladder drugs, TCAs, diphenhydramine, some antihistamines)",
      severity: "major",
      mechanism: "Cumulative anticholinergic burden — delirium, ileus.",
      action: "Audit; minimise total.",
    },
    {
      drug: "Haloperidol and high-potency antipsychotics",
      severity: "moderate",
      mechanism: "The therapeutic pairing — but additive memory/bowel burden.",
      action: "Lowest effective dose; taper plan.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "moderate",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; use only for clear EPS need at the lowest dose.",
    lactation: "Excreted in milk — infant anticholinergic effects possible; caution.",
  },
  renalAdjustment: "Standard caution; some retention of metabolites in renal impairment.",
  hepaticAdjustment: "Standard caution.",
  /* ---- Education ---- */
  patientExplanation: "Benztropine treats the stiffness, tremor, and muscle spasms that antipsychotic medicines can cause: it rebalances two brain chemicals (dopamine and acetylcholine) whose equilibrium those medicines disturb. Its own effects are dry mouth, constipation, and blurred vision, so it is used at the lowest effective dose and tapered once the stiffness settles.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Benztropine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The balance logic: antipsychotics block dopamine; benztropine blocks acetylcholine — restoring the seesaw the basal ganglia sit on.",
    "Prescribe with an exit plan: EPS usually settles as tolerance develops — taper benztropine within weeks-months, not never.",
    "The reflexive pairing mistake: routine benztropine with every antipsychotic prescription adds anticholinergic burden without benefit for patients without EPS.",
    "The TD masking argument: chronic anticholinergics can hide emerging tardive dyskinesia — taper to see the true motor picture.",
    "The elderly receive the worst trade: EPS relief at the price of delirium and urinary retention — avoid where possible.",
    "IV/IM benztropine (with diphenhydramine as the alternative) ends an acute dystonia in minutes — the emergency pairing of record.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Benztropine: Benztropine blocks striatal muscarinic receptors, releasing the cholinergic overdrive that D2 blockade creates — restoring the dopamine-acetylcholine equilibrium of the basal ganglia.",
        "Uses of Benztropine: Drug-induced extrapyramidal symptoms (parkinsonism, dystonia); Acute dystonic reactions (adjunct to/alternative to diphenhydramine); Parkinson's disease (adjunct, historic); Akathisia (partial benefit)",
        "Mechanism: striatal MUSCARINIC antagonist — restores the dopamine-acetylcholine balance D2 blockade disturbs.",
        "Indication: antipsychotic-induced EPS (parkinsonism, dystonia); IV/IM for acute dystonia.",
      ],
      practical: [
        "Prescribe Benztropine for drug-induced extrapyramidal symptoms (parkinsonism, dystonia) with dose, timing, and duration.",
        "Outline the monitoring plan: AIMS before and during (Baseline and periodically); Bowel and bladder function (At review); Cognition (elderly) (At review)",
      ],
      longAnswer: [
        "Benztropine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: striatal MUSCARINIC antagonist — restores the dopamine-acetylcholine balance D2 blockade disturbs.",
        "Indication: antipsychotic-induced EPS (parkinsonism, dystonia); IV/IM for acute dystonia.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: striatal MUSCARINIC antagonist — restores the dopamine-acetylcholine balance D2 blockade disturbs.",
        "Indication: antipsychotic-induced EPS (parkinsonism, dystonia); IV/IM for acute dystonia.",
        "Anticholinergic burden: dry mouth, constipation, urinary retention, memory effects, delirium in elderly.",
        "Taper early — chronic use masks tardive dyskinesia and adds burden.",
        "Contraindicated in narrow-angle glaucoma; caution with prostatism.",
        "The classic Indian pairing: trifluoperazine/trihexyphenidyl — benztropine's cousin as the routine partner.",
      ],
      pyqConcepts: [
        "Mechanism/target of Benztropine",
        "Key adverse effect: Anticholinergic delirium (elderly, high dose)",
        "Dosing and titration of Benztropine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Benztropine develops anticholinergic delirium (elderly, high dose) — next best step?",
        "When to choose Benztropine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Striatal muscarinic (M1) receptors (antagonist)",
        "Most common side effects: Dry mouth and blurred vision, Constipation, Urinary retention (men with prostatism)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The balance logic: antipsychotics block dopamine; benztropine blocks acetylcholine — restoring the seesaw the basal ganglia sit on.",
        "Prescribe with an exit plan: EPS usually settles as tolerance develops — taper benztropine within weeks-months, not never.",
        "The reflexive pairing mistake: routine benztropine with every antipsychotic prescription adds anticholinergic burden without benefit for patients without EPS.",
        "The TD masking argument: chronic anticholinergics can hide emerging tardive dyskinesia — taper to see the true motor picture.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: striatal MUSCARINIC antagonist — restores the dopamine-acetylcholine balance D2 blockade disturbs.",
    "Indication: antipsychotic-induced EPS (parkinsonism, dystonia); IV/IM for acute dystonia.",
    "Anticholinergic burden: dry mouth, constipation, urinary retention, memory effects, delirium in elderly.",
    "Taper early — chronic use masks tardive dyskinesia and adds burden.",
    "Contraindicated in narrow-angle glaucoma; caution with prostatism.",
    "The classic Indian pairing: trifluoperazine/trihexyphenidyl — benztropine's cousin as the routine partner.",
    "Akathisia responds less well — propranolol preferred.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — drug-induced extrapyramidal symptoms (parkinsonism, dystonia)",
      presentation: "A patient presenting with drug-induced extrapyramidal symptoms (parkinsonism, dystonia), started on Benztropine.",
      history: "A adult patient presents with a drug-induced extrapyramidal symptoms (parkinsonism, dystonia) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with drug-induced extrapyramidal symptoms (parkinsonism, dystonia); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Drug-induced extrapyramidal symptoms (parkinsonism, dystonia). Differentials are considered and excluded clinically.",
      rationale: "Benztropine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Anticholinergic) with strong evidence in this condition.",
      management: "Started at 0.5-1 mg twice daily, titrated to 1-2 mg bd (2-4 mg/day) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Benztropine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Anticholinergic comparison — choosing within the class",
      primaryDrug: "Benztropine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Striatal muscarinic (M1) receptors (antagonist)",
          comparisons: [
            {
              drug: "Trihexyphenidyl",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 4-8 hours (sometimes dosed bd).",
          comparisons: [
            {
              drug: "Trihexyphenidyl",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral.",
          comparisons: [
            {
              drug: "Trihexyphenidyl",
              value: "Weight neutral.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Trihexyphenidyl",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The EPS antidote — anticholinergic striatal rebalancing",
          comparisons: [
            {
              drug: "Trihexyphenidyl",
              value: "The Indian classic — anticholinergic EPS cover for typical antipsychotics",
            },
          ],
        },
      ],
      takeaway: "All anticholinergics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Benztropine reaches peak plasma concentration and begins acting at its molecular target (Striatal muscarinic (M1) receptors (antagonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (dry mouth and blurred vision, constipation, urinary retention (men with prostatism)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (EPS relief within hours (oral); minutes (IV/IM dystonia).)",
      title: "Therapeutic effect builds",
      description: "EPS relief within hours (oral); minutes (IV/IM dystonia). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Benztropine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Benztropine take to work?",
      answer: "EPS relief within hours (oral); minutes (IV/IM dystonia).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Benztropine?",
      answer: "The most frequently reported effects are: Dry mouth and blurred vision, Constipation, Urinary retention (men with prostatism), Sedation and memory difficulty, Tachycardia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Benztropine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Benztropine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Benztropine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Benztropine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Benztropine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "AAN Antipsychotic-Induced EPS Guidance",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), benztropine monograph, p. 13",
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
        source: "FDA Prescribing Information for Cogentin (Benztropine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for benztropine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Benztropine",
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
      name: "Trihexyphenidyl",
      slug: "trihexyphenidyl",
      drugClass: "Anticholinergic",
      relationship: "Same class (Anticholinergic)",
    },
  ],
  relatedConditions: [
    {
      name: "Drug-induced extrapyramidal symptoms (parkinsonism, dystonia)",
      relationship: "primary",
    },
    {
      name: "Acute dystonic reactions (adjunct to/alternative to diphenhydramine)",
      relationship: "alternative",
    },
    {
      name: "Parkinson's disease (adjunct, historic)",
      relationship: "primary",
    },
    {
      name: "Akathisia (partial benefit)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Benztropine",
      type: "drug",
      href: "/drugs/benztropine",
      note: "The drug you're reading about",
    },
    {
      label: "Anticholinergic",
      type: "class",
      href: "#mechanism",
      note: "Anticholinergic Antiparkinsonian Agent",
    },
    {
      label: "Acetylcholine (ACh)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Striatal muscarinic (M1) receptors (antagonist)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Drug-induced extrapyramidal symptoms (parkinsonism, dystonia)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Acute dystonic reactions (adjunct to/alternative to diphenhydramine)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Parkinson's disease (adjunct, historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Anticholinergic delirium (elderly, high dose)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Ileus (with other anticholinergics)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dry mouth and blurred vision",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Benztropine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The EPS antidote — anticholinergic blockade of the striatum to undo dopamine-blockade side effects.",
    summary: "Benztropine is a prescription medicine used to treat drug-induced extrapyramidal symptoms (parkinsonism, dystonia). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Benztropine treats the stiffness, tremor, and muscle spasms that antipsychotic medicines can cause: it rebalances two brain chemicals (dopamine and acetylcholine) whose equilibrium those medicines disturb. Its own effects are dry mouth, constipation, and blurred vision, so it is used at the lowest effective dose and tapered once the stiffness settles.",
    sideEffects: "The most common side effects are: dry mouth and blurred vision, constipation, urinary retention (men with prostatism), sedation and memory difficulty, tachycardia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Anticholinergic delirium (elderly, high dose) and Ileus (with other anticholinergics). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: aims before and during (baseline and periodically); bowel and bladder function (at review); cognition (elderly) (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other anticholinergics (bladder drugs, TCAs, diphenhydramine, some antihistamines), Haloperidol and high-potency antipsychotics, Alcohol and CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Benztrop / Pacitane-adjacent",
        manufacturer: "various",
        strengths: "1, 2 mg",
      },
      {
        name: "Benztropine generic",
        manufacturer: "limited",
        strengths: "1, 2 mg",
      },
    ],
    typicalDoses: "1 mg bd (EPS); 1-2 mg IM/IV (dystonia).",
    prescribingScenarios: [
      "Emergency dystonia reversal nationwide.",
      "EPS management with high-potency typicals — the classic pairing.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "AIMS baseline; bowel/bladder review.",
    patientCounselling: [
      "Dry mouth and constipation expected — manage, don't endure.",
      "The dose comes down once stiffness settles.",
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
    familyName: "Anticholinergics",
    members: [
      {
        name: "Benztropine",
        slug: "benztropine",
        relationship: "This guide",
        distinguishing: "The EPS antidote — anticholinergic striatal rebalancing",
      },
      {
        name: "Trihexyphenidyl",
        slug: "trihexyphenidyl",
        relationship: "Same class (Anticholinergic)",
        distinguishing: "The Indian classic — anticholinergic EPS cover for typical antipsychotics",
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
      question: "Which molecular target does Benztropine primarily act on?",
      options: [
        "Striatal muscarinic (M1) receptors (antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Benztropine acts primarily at Striatal muscarinic (M1) receptors (antagonist). Benztropine blocks striatal muscarinic receptors, releasing the cholinergic overdrive that D2 blockade creates — restoring the dopamine-acetylcholine equilibrium of the basal ganglia.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Benztropine?",
      options: ["Dry mouth and blurred vision", "Constipation", "Urinary retention (men with prostatism)", "Sedation and memory difficulty"],
      correctIndex: 0,
      explanation: "Dry mouth and blurred vision — Anticholinergic effects.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Benztropine for drug-induced parkinsonism?",
      options: ["1-2 mg bd (2-4 mg/day)", "6 mg/day", "1-2 mg bd (2-4 mg/day) (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For drug-induced parkinsonism: start 0.5-1 mg twice daily, target 1-2 mg bd (2-4 mg/day), maximum 6 mg/day. Titrate to effect; taper and attempt withdrawal once EPS settles",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Benztropine in two sentences.",
      answer: "Benztropine blocks striatal muscarinic receptors, releasing the cholinergic overdrive that D2 blockade creates — restoring the dopamine-acetylcholine equilibrium of the basal ganglia. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Benztropine.",
      answer: "Drug-induced extrapyramidal symptoms (parkinsonism, dystonia), Acute dystonic reactions (adjunct to/alternative to diphenhydramine), Parkinson's disease (adjunct, historic), Akathisia (partial benefit). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Benztropine and how you would manage it.",
      answer: "Anticholinergic delirium (elderly, high dose): Confusion, agitation — the classic antipsychotic-plus-anticholinergic geriatric trap. Management: Avoid in elderly; taper early.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Benztropine require?",
      answer: "AIMS before and during (Baseline and periodically); Bowel and bladder function (At review); Cognition (elderly) (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Benztropine that separates safe prescribers from unsafe ones.",
      answer: "The balance logic: antipsychotics block dopamine; benztropine blocks acetylcholine — restoring the seesaw the basal ganglia sit on.",
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
      checkpoint: "You now know what Benztropine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Benztropine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Benztropine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Benztropine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Benztropine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Benztropine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "EPS relief within hours (oral); minutes (IV/IM dystonia).",
    ],
    ifItWorks: [
      "Continue Benztropine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Benztropine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Benztropine follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Drug-induced parkinsonism",
        starting: "0.5-1 mg twice daily",
        titration: "Titrate to effect; taper and attempt withdrawal once EPS settles",
        target: "1-2 mg bd (2-4 mg/day)",
        max: "6 mg/day",
      },
      {
        indication: "Acute dystonia (IM/IV)",
        starting: "1-2 mg IM/IV",
        titration: "Repeat after 15-30 min if needed",
        target: "1-2 mg per episode",
        max: "4-6 mg/day injectable",
      },
    ],
    dosageForms: ["Tablets 0.5, 1, 2 mg", "Injection 1 mg/mL"],
    dosingTips: [
      "Pair with an exit plan — taper once EPS settles.",
      "Avoid routine prophylactic pairing with every antipsychotic.",
      "AIMS baseline — don't let it mask TD.",
      "Elderly: avoid where possible.",
    ],
    overdose: [
      "Overdose with Benztropine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Benztropine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 4-8 hours (sometimes dosed bd)..",
      "Metabolism: Hepatic..",
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
      "The EPS antidote of record for 50 years.",
      "IV/IM acute-dystonia rescue.",
      "Cheap generics.",
    ],
    potentialDisadvantages: ["Full anticholinergic burden.", "TD masking with chronic use.", "Elderly delirium risk.", "Poor for akathisia."],
    primaryTargetSymptoms: ["Antipsychotic-induced parkinsonism", "Acute dystonia", "Drug-induced tremor"],
    pearls: [
      "The balance logic: antipsychotics block dopamine; benztropine blocks acetylcholine — restoring the seesaw the basal ganglia sit on.",
      "Prescribe with an exit plan: EPS usually settles as tolerance develops — taper benztropine within weeks-months, not never.",
      "The reflexive pairing mistake: routine benztropine with every antipsychotic prescription adds anticholinergic burden without benefit for patients without EPS.",
      "The TD masking argument: chronic anticholinergics can hide emerging tardive dyskinesia — taper to see the true motor picture.",
      "The elderly receive the worst trade: EPS relief at the price of delirium and urinary retention — avoid where possible.",
      "IV/IM benztropine (with diphenhydramine as the alternative) ends an acute dystonia in minutes — the emergency pairing of record.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
