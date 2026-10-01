import type { Drug } from "../types";

/**
 * Trihexyphenidyl — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), trihexyphenidyl monograph (book p. 129)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const trihexyphenidyl: Drug = {
  /* ---- Identity ---- */
  slug: "trihexyphenidyl",
  genericName: "Trihexyphenidyl",
  brandNames: ["Artane / Pacitane", "Trihexyphenidyl (generic)"],
  drugClass: "anticholinergic",
  drugClassLabel: "Anticholinergic",
  drugClassFullName: "Anticholinergic Antiparkinsonian Agent",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Specialised Agents", "Anticholinergics", "Trihexyphenidyl"],
  /* ---- Hero / summary ---- */
  tagline: "India's classic anticholinergic — the trihexyphenidyl half of the trifluoperazine pairing.",
  summary: "Trihexyphenidyl is the anticholinergic antiparkinsonian agent best known in Indian psychiatry as the reflexive partner of trifluoperazine and other high-potency typicals: the same striatal muscarinic blockade as benztropine in the subcontinent's classic fixed-combination culture. Same EPS indications, same anticholinergic burden, same taper-early discipline.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Trihexyphenidyl — from its molecular target (Striatal muscarinic (M1) receptors (antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Trihexyphenidyl.",
    "Predict the common and serious side effects of Trihexyphenidyl from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Trihexyphenidyl.",
    "Compare Trihexyphenidyl with other anticholinergics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Trihexyphenidyl blocks striatal muscarinic receptors, restoring the dopamine-acetylcholine balance disturbed by D2 blockade — benztropine's pharmacology in India's classic package.",
    molecularTarget: "Striatal muscarinic (M1) receptors (antagonist)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Trihexyphenidyl blocks striatal muscarinic receptors, restoring the dopamine-acetylcholine balance disturbed by D2 blockade — benztropine's pharmacology in India's classic package.",
      "The target engagement translates into the clinical effect.",
      "Practical use follows the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 3-10 hours. — see mechanism and prescriber sections.",
    halfLife: "About 3-10 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Trihexyphenidyl",
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
      name: "Drug-induced extrapyramidal symptoms",
      status: "fda-approved",
      description: "Parkinsonism and dystonia from antipsychotics.",
    },
    {
      name: "Parkinson's disease (adjunct, historic)",
      status: "fda-approved",
      description: "Superseded by modern therapy.",
    },
    {
      name: "Dystonia (including drug-induced)",
      status: "guideline",
      description: "Oral cover and prevention of recurrence after acute treatment.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Trihexyphenidyl must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dry mouth, blurred vision, constipation",
      frequency: "very-common",
      severity: "moderate",
      description: "The anticholinergic triad.",
      management: "Manage; minimise dose.",
    },
    {
      name: "Urinary retention (prostatic men)",
      frequency: "common",
      severity: "moderate",
      description: "Anticholinergic bladder effect.",
      management: "Caution in prostatism.",
    },
    {
      name: "Sedation and memory difficulty",
      frequency: "common",
      severity: "moderate",
      description: "Central anticholinergic effects.",
      management: "Avoid in elderly.",
    },
    {
      name: "Euphoria (noted at higher doses)",
      frequency: "uncommon",
      severity: "moderate",
      description: "A recognised, occasionally misused effect (misuse recorded in some settings).",
      management: "Dose ceilings; dispensing review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Anticholinergic delirium (elderly)",
      frequency: "uncommon",
      severity: "severe",
      description: "Confusion/agitation in the over-65s.",
      management: "Avoid in elderly.",
    },
    {
      name: "Ileus with cumulative anticholinergics",
      frequency: "rare",
      severity: "life-threatening",
      description: "Bowel paralysis.",
      management: "Minimise total burden.",
    },
    {
      name: "Narrow-angle glaucoma precipitation",
      frequency: "rare",
      severity: "severe",
      description: "Pupillary dilation.",
      management: "Avoid; ocular history.",
    },
    {
      name: "TD masking with chronic use",
      frequency: "uncommon",
      severity: "moderate",
      description: "Hidden tardive dyskinesia under anticholinergic cover.",
      management: "AIMS; taper windows.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Bowel, bladder, cognition",
      frequency: "At review",
      rationale: "Anticholinergic surveillance.",
    },
    {
      parameter: "AIMS and taper windows",
      frequency: "Periodically",
      rationale: "The TD-masking discipline.",
    },
  ],
  interactions: [
    {
      drug: "Other anticholinergics",
      severity: "major",
      mechanism: "Cumulative burden — delirium, ileus.",
      action: "Audit; minimise.",
    },
    {
      drug: "High-potency typicals",
      severity: "moderate",
      mechanism: "The therapeutic pairing — with additive burden.",
      action: "Lowest dose; taper plan.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; lowest effective dose for clear EPS need only.",
    lactation: "Excreted in milk; infant anticholinergic effects possible.",
  },
  renalAdjustment: "Standard caution.",
  hepaticAdjustment: "Standard caution.",
  /* ---- Education ---- */
  patientExplanation: "Trihexyphenidyl prevents the stiffness, tremor, and spasm that antipsychotic medicines can cause, by restoring the balance between two brain chemicals they disturb. It is often prescribed alongside those medicines in India. Its own effects — dry mouth, constipation, blurred vision — are why the dose stays low and comes down once the stiffness settles.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Trihexyphenidyl builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The Indian institution: trifluoperazine + trihexyphenidyl on one prescription is the budget-psychiatry pairing of the subcontinent — the pharmacology of the reflex.",
    "Same drug, different geography: benztropine in the Americas, trihexyphenidyl in India — an anticholinergic duet worth knowing as one.",
    "Misuse footnote: the euphoria-at-high-dose record (misuse documented among some institutionalised patients) is a genuine, if rare, monitoring point.",
    "The taper discipline travels: EPS settles, trihexyphenidyl comes down — or the anticholinergic burden silently accumulates.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Trihexyphenidyl: Trihexyphenidyl blocks striatal muscarinic receptors, restoring the dopamine-acetylcholine balance disturbed by D2 blockade — benztropine's pharmacology in India's classic package.",
        "Uses of Trihexyphenidyl: Drug-induced extrapyramidal symptoms; Parkinson's disease (adjunct, historic); Dystonia (including drug-induced)",
        "Mechanism: striatal muscarinic antagonist — the dopamine-acetylcholine seesaw restored.",
        "Uses: antipsychotic-induced EPS; the classic Indian pairing with high-potency typicals.",
      ],
      practical: [
        "Prescribe Trihexyphenidyl for drug-induced extrapyramidal symptoms with dose, timing, and duration.",
        "Outline the monitoring plan: Bowel, bladder, cognition (At review); AIMS and taper windows (Periodically)",
      ],
      longAnswer: [
        "Trihexyphenidyl: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: striatal muscarinic antagonist — the dopamine-acetylcholine seesaw restored.",
        "Uses: antipsychotic-induced EPS; the classic Indian pairing with high-potency typicals.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: striatal muscarinic antagonist — the dopamine-acetylcholine seesaw restored.",
        "Uses: antipsychotic-induced EPS; the classic Indian pairing with high-potency typicals.",
        "Full anticholinergic burden: dry mouth, constipation, retention, delirium risk in elderly.",
        "Taper once EPS settles — chronic use masks TD.",
        "Euphoria/misuse potential at higher doses.",
        "Contraindicated in narrow-angle glaucoma.",
      ],
      pyqConcepts: [
        "Mechanism/target of Trihexyphenidyl",
        "Key adverse effect: Anticholinergic delirium (elderly)",
        "Dosing and titration of Trihexyphenidyl",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Trihexyphenidyl develops anticholinergic delirium (elderly) — next best step?",
        "When to choose Trihexyphenidyl over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Striatal muscarinic (M1) receptors (antagonist)",
        "Most common side effects: Dry mouth, blurred vision, constipation, Urinary retention (prostatic men), Sedation and memory difficulty",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The Indian institution: trifluoperazine + trihexyphenidyl on one prescription is the budget-psychiatry pairing of the subcontinent — the pharmacology of the reflex.",
        "Same drug, different geography: benztropine in the Americas, trihexyphenidyl in India — an anticholinergic duet worth knowing as one.",
        "Misuse footnote: the euphoria-at-high-dose record (misuse documented among some institutionalised patients) is a genuine, if rare, monitoring point.",
        "The taper discipline travels: EPS settles, trihexyphenidyl comes down — or the anticholinergic burden silently accumulates.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: striatal muscarinic antagonist — the dopamine-acetylcholine seesaw restored.",
    "Uses: antipsychotic-induced EPS; the classic Indian pairing with high-potency typicals.",
    "Full anticholinergic burden: dry mouth, constipation, retention, delirium risk in elderly.",
    "Taper once EPS settles — chronic use masks TD.",
    "Euphoria/misuse potential at higher doses.",
    "Contraindicated in narrow-angle glaucoma.",
    "Benztropine's pharmacological twin.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — drug-induced extrapyramidal symptoms",
      presentation: "A patient presenting with drug-induced extrapyramidal symptoms, started on Trihexyphenidyl.",
      history: "A adult patient presents with a drug-induced extrapyramidal symptoms picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with drug-induced extrapyramidal symptoms; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Drug-induced extrapyramidal symptoms. Differentials are considered and excluded clinically.",
      rationale: "Trihexyphenidyl is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Anticholinergic) with strong evidence in this condition.",
      management: "Started at 1 mg once or twice daily, titrated to 5-15 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Trihexyphenidyl takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Anticholinergic comparison — choosing within the class",
      primaryDrug: "Trihexyphenidyl",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Striatal muscarinic (M1) receptors (antagonist)",
          comparisons: [
            {
              drug: "Benztropine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 3-10 hours.",
          comparisons: [
            {
              drug: "Benztropine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral.",
          comparisons: [
            {
              drug: "Benztropine",
              value: "Weight neutral.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Benztropine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The Indian classic — anticholinergic EPS cover for typical antipsychotics",
          comparisons: [
            {
              drug: "Benztropine",
              value: "The EPS antidote — anticholinergic striatal rebalancing",
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
      description: "Trihexyphenidyl reaches peak plasma concentration and begins acting at its molecular target (Striatal muscarinic (M1) receptors (antagonist)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (dry mouth, blurred vision, constipation, urinary retention (prostatic men), sedation and memory difficulty). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (EPS relief within hours (oral).)",
      title: "Therapeutic effect builds",
      description: "EPS relief within hours (oral). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Trihexyphenidyl is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Trihexyphenidyl take to work?",
      answer: "EPS relief within hours (oral).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Trihexyphenidyl?",
      answer: "The most frequently reported effects are: Dry mouth, blurred vision, constipation, Urinary retention (prostatic men), Sedation and memory difficulty, Euphoria (noted at higher doses). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Trihexyphenidyl suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Trihexyphenidyl habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Trihexyphenidyl exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Trihexyphenidyl during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Trihexyphenidyl may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), trihexyphenidyl monograph, p. 129",
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
        source: "FDA Prescribing Information for Artane / Pacitane (Trihexyphenidyl)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for trihexyphenidyl — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Trihexyphenidyl",
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
      name: "Benztropine",
      slug: "benztropine",
      drugClass: "Anticholinergic",
      relationship: "Same class (Anticholinergic)",
    },
  ],
  relatedConditions: [
    {
      name: "Drug-induced extrapyramidal symptoms",
      relationship: "primary",
    },
    {
      name: "Parkinson's disease (adjunct, historic)",
      relationship: "primary",
    },
    {
      name: "Dystonia (including drug-induced)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Trihexyphenidyl",
      type: "drug",
      href: "/drugs/trihexyphenidyl",
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
      label: "Drug-induced extrapyramidal symptoms",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Parkinson's disease (adjunct, historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Dystonia (including drug-induced)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Anticholinergic delirium (elderly)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Ileus with cumulative anticholinergics",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dry mouth, blurred vision, constipation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Trihexyphenidyl",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "India's classic anticholinergic — the trihexyphenidyl half of the trifluoperazine pairing.",
    summary: "Trihexyphenidyl is a prescription medicine used to treat drug-induced extrapyramidal symptoms. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Trihexyphenidyl prevents the stiffness, tremor, and spasm that antipsychotic medicines can cause, by restoring the balance between two brain chemicals they disturb. It is often prescribed alongside those medicines in India. Its own effects — dry mouth, constipation, blurred vision — are why the dose stays low and comes down once the stiffness settles.",
    sideEffects: "The most common side effects are: dry mouth, blurred vision, constipation, urinary retention (prostatic men), sedation and memory difficulty, euphoria (noted at higher doses). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Anticholinergic delirium (elderly) and Ileus with cumulative anticholinergics. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: bowel, bladder, cognition (at review); aims and taper windows (periodically). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other anticholinergics, High-potency typicals. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Pacitane",
        manufacturer: "legacy/generic",
        strengths: "2, 5 mg",
      },
      {
        name: "Trihexyphenidyl generic",
        manufacturer: "multiple",
        strengths: "2, 5 mg",
      },
    ],
    typicalDoses: "1-2 mg bd → 5-15 mg/day.",
    prescribingScenarios: [
      "The classic companion to high-potency typicals nationwide.",
      "Paediatric dystonia prevention protocols.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Bowel/bladder; AIMS with taper windows.",
    patientCounselling: [
      "Dry mouth and constipation are expected.",
      "The dose comes down once the stiffness settles.",
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
    familyName: "Anticholinergics",
    members: [
      {
        name: "Trihexyphenidyl",
        slug: "trihexyphenidyl",
        relationship: "This guide",
        distinguishing: "The Indian classic — anticholinergic EPS cover for typical antipsychotics",
      },
      {
        name: "Benztropine",
        slug: "benztropine",
        relationship: "Same class (Anticholinergic)",
        distinguishing: "The EPS antidote — anticholinergic striatal rebalancing",
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
      question: "Which molecular target does Trihexyphenidyl primarily act on?",
      options: [
        "Striatal muscarinic (M1) receptors (antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Trihexyphenidyl acts primarily at Striatal muscarinic (M1) receptors (antagonist). Trihexyphenidyl blocks striatal muscarinic receptors, restoring the dopamine-acetylcholine balance disturbed by D2 blockade — benztropine's pharmacology in India's classic package.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Trihexyphenidyl?",
      options: ["Dry mouth, blurred vision, constipation", "Urinary retention (prostatic men)", "Sedation and memory difficulty", "Euphoria (noted at higher doses)"],
      correctIndex: 0,
      explanation: "Dry mouth, blurred vision, constipation — The anticholinergic triad.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Trihexyphenidyl for drug-induced parkinsonism?",
      options: ["5-15 mg/day", "15 mg/day (exceptional)", "5-15 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For drug-induced parkinsonism: start 1 mg once or twice daily, target 5-15 mg/day, maximum 15 mg/day (exceptional). Increase by 1 mg every 1-2 days to 5-15 mg/day divided",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Trihexyphenidyl in two sentences.",
      answer: "Trihexyphenidyl blocks striatal muscarinic receptors, restoring the dopamine-acetylcholine balance disturbed by D2 blockade — benztropine's pharmacology in India's classic package. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Trihexyphenidyl.",
      answer: "Drug-induced extrapyramidal symptoms, Parkinson's disease (adjunct, historic), Dystonia (including drug-induced). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Trihexyphenidyl and how you would manage it.",
      answer: "Anticholinergic delirium (elderly): Confusion/agitation in the over-65s. Management: Avoid in elderly.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Trihexyphenidyl require?",
      answer: "Bowel, bladder, cognition (At review); AIMS and taper windows (Periodically)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Trihexyphenidyl that separates safe prescribers from unsafe ones.",
      answer: "The Indian institution: trifluoperazine + trihexyphenidyl on one prescription is the budget-psychiatry pairing of the subcontinent — the pharmacology of the reflex.",
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
      checkpoint: "You now know what Trihexyphenidyl is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Trihexyphenidyl works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Trihexyphenidyl safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Trihexyphenidyl.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Trihexyphenidyl with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Trihexyphenidyl.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["EPS relief within hours (oral)."],
    ifItWorks: [
      "Continue Trihexyphenidyl at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Trihexyphenidyl (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Trihexyphenidyl follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "1 mg once or twice daily",
        titration: "Increase by 1 mg every 1-2 days to 5-15 mg/day divided",
        target: "5-15 mg/day",
        max: "15 mg/day (exceptional)",
      },
    ],
    dosageForms: ["Tablets 2, 5 mg", "Elixir 5 mg/5 mL"],
    dosingTips: [
      "Taper once EPS settles — the standing order.",
      "Avoid in elderly and glaucoma.",
      "Watch for misuse patterns at higher doses.",
    ],
    overdose: [
      "Overdose with Trihexyphenidyl is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Trihexyphenidyl is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 3-10 hours..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["The subcontinent's EPS staple.", "Cheap, widely available.", "Oral prevention after dystonia rescue."],
    potentialDisadvantages: ["Full anticholinergic burden.", "TD masking.", "Euphoria/misuse record.", "Elderly delirium."],
    primaryTargetSymptoms: ["Antipsychotic-induced parkinsonism", "Dystonia prevention"],
    pearls: [
      "The Indian institution: trifluoperazine + trihexyphenidyl on one prescription is the budget-psychiatry pairing of the subcontinent — the pharmacology of the reflex.",
      "Same drug, different geography: benztropine in the Americas, trihexyphenidyl in India — an anticholinergic duet worth knowing as one.",
      "Misuse footnote: the euphoria-at-high-dose record (misuse documented among some institutionalised patients) is a genuine, if rare, monitoring point.",
      "The taper discipline travels: EPS settles, trihexyphenidyl comes down — or the anticholinergic burden silently accumulates.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
