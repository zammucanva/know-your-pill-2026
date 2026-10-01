import type { Drug } from "../types";

/**
 * Clonidine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), clonidine monograph (book p. 27)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const clonidine: Drug = {
  /* ---- Identity ---- */
  slug: "clonidine",
  genericName: "Clonidine",
  brandNames: ["Catapres", "Kapvay (ER)", "Arkamin (India)"],
  drugClass: "alpha2-agonist",
  drugClassLabel: "Alpha-2 Agonist",
  drugClassFullName: "Alpha-2 Adrenergic Agonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Alpha-2 Agonists", "Clonidine"],
  /* ---- Hero / summary ---- */
  tagline: "The alpha-2 agonist — blood-pressure medicine turned 24-hour ADHD and tic helper.",
  summary: "Clonidine is a central alpha-2 adrenergic agonist (presynaptic inhibition of norepinephrine release) used in psychiatry for ADHD (especially hyperactive/impulsive and sleep-disrupting symptoms), tics, and stimulant-emergent aggression/insomnia — and in medicine for hypertension. Sedation is its daily texture; REBOUND HYPERTENSION on abrupt withdrawal is its signature danger.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Clonidine — from its molecular target (Central alpha-2A adrenergic receptors (agonist — presynaptic autoinhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Clonidine.",
    "Predict the common and serious side effects of Clonidine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Clonidine.",
    "Compare Clonidine with other alpha-2 agonists and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Clonidine agonises central alpha-2A receptors, damping locus coeruleus noradrenergic firing — sedation, anxiolysis, and ADHD hyperactivity reduction.",
    molecularTarget: "Central alpha-2A adrenergic receptors (agonist — presynaptic autoinhibition)",
    effect: "Catecholamine and wake-system enhancement with the agent's characteristic profile.",
    steps: [
      "Clonidine agonises central alpha-2A receptors, damping locus coeruleus noradrenergic firing — sedation, anxiolysis, and ADHD hyperactivity reduction.",
      "Prefrontal catecholamine enhancement sharpens attention and impulse control.",
      "The agent's formulation and half-life determine practical coverage.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 12-16 hours (IR); patch ~weekly. — see mechanism and prescriber sections.",
    halfLife: "12-16 hours (IR); patch ~weekly.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Clonidine",
        sublabel: "Adrenergic agent",
        variant: "inhibit",
      },
      {
        id: "rec",
        label: "Adrenergic receptor",
        sublabel: "Postsynaptic target",
        variant: "target",
      },
      {
        id: "ne",
        label: "Norepinephrine signalling",
        sublabel: "Modulated",
        variant: "process",
      },
      {
        id: "effect",
        label: "Symptom relief",
        sublabel: "Clinical benefit",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "rec",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "rec",
        to: "ne",
        label: "modulates",
      },
      {
        from: "ne",
        to: "effect",
        label: "produces",
      },
    ],
    caption: "Modulating noradrenergic signalling at its receptor — a mechanism-driven route to symptom control.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Norepinephrine (NE)"],
  receptors: ["Alpha-2A adrenergic receptor (agonist)"],
  brainRegionIds: ["prefrontal-cortex", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "ADHD (ER monotherapy or adjunct)",
      status: "fda-approved",
      description: "Especially the hyperactive/impulsive and sleep-disrupted end of ADHD.",
    },
    {
      name: "Hypertension",
      status: "fda-approved",
      description: "The original indication (IR).",
    },
    {
      name: "Tics / Tourette's (adjunct)",
      status: "off-label",
      description: "Long-standing clinical use.",
    },
    {
      name: "Stimulant-emergent insomnia and aggression",
      status: "guideline",
      description: "Night-time clonidine is the classic stimulant-smoothing adjunct.",
    },
    {
      name: "Opioid and alcohol withdrawal states",
      status: "off-label",
      description: "Autonomic damping in withdrawal care.",
    },
    {
      name: "PTSD nightmares (adjunct)",
      status: "off-label",
      description: "Noradrenergic quieting.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Clonidine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "The daily texture.",
      management: "Bedtime-first dosing; tolerance improves it.",
    },
    {
      name: "Dry mouth",
      frequency: "very-common",
      severity: "mild",
      description: "Classic alpha-2 effect.",
      management: "Sips; sugar-free gum.",
    },
    {
      name: "Dizziness and orthostatic symptoms",
      frequency: "common",
      severity: "moderate",
      description: "Blood-pressure lowering.",
      management: "Rise slowly; HR/BP checks.",
    },
    {
      name: "Bradycardia",
      frequency: "common",
      severity: "moderate",
      description: "The predictable cardiovascular effect.",
      management: "Monitor HR.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "mild",
      description: "Class effect.",
      management: "Fluids/fibre.",
    },
    {
      name: "Rebound hypertension on abrupt withdrawal",
      frequency: "common",
      severity: "severe",
      description: "THE signature danger — sympathetic overshoot: tachycardia, hypertension, headache, anxiety.",
      management: "Taper over days-weeks ALWAYS.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Rebound hypertension / withdrawal syndrome",
      frequency: "common",
      severity: "severe",
      description: "Abrupt cessation causes noradrenergic rebound — hypertensive urgency reported.",
      management: "Never stop abruptly; taper over 2-4 days minimum.",
    },
    {
      name: "Severe bradycardia/hypotension in combination",
      frequency: "uncommon",
      severity: "severe",
      description: "With beta-blockers and antihypertensives.",
      management: "Monitor; coordinate tapers.",
    },
    {
      name: "Hypotensive falls (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Orthostasis in fall-prone patients.",
      management: "Slow rises; review timing.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline, then every visit",
      rationale: "Bradycardia/hypotension surveillance.",
    },
    {
      parameter: "Sedation and school-day function",
      frequency: "Every visit",
      rationale: "The tolerability balance.",
    },
  ],
  interactions: [
    {
      drug: "Beta-blockers",
      severity: "major",
      mechanism: "Additive bradycardia/hypotension; co-withdrawal doubles rebound risk.",
      action: "Coordinate tapers; monitor.",
    },
    {
      drug: "Tricyclic antidepressants",
      severity: "moderate",
      mechanism: "Reduce clonidine effect; may worsen rebound.",
      action: "Monitor BP.",
    },
    {
      drug: "Antihypertensives",
      severity: "major",
      mechanism: "Additive hypotension/bradycardia.",
      action: "Monitor standing BP and HR.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Long hypertension-use history without teratogenic signal; obstetric co-management.",
    lactation: "Small amounts in milk; monitor infant sedation and BP.",
  },
  renalAdjustment: "Reduce dose in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Clonidine is a mild blood-pressure medicine that calms the brain's alarm system (noradrenaline). In ADHD it helps the overactive, impulsive end of the condition and improves sleep — often added to a morning stimulant. Its main effects are sleepiness, dry mouth, and a slower pulse — and it must NEVER be stopped suddenly, because blood pressure can rebound dangerously.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Clonidine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The taper rule is absolute: abrupt clonidine stop causes noradrenergic rebound — the class's signature emergency.",
    "Bedtime-first dosing converts sedation into sleep benefit — the classic pairing with morning stimulant.",
    "Not a first-line inattention monotherapy — its ADHD strength is hyperactivity/impulsivity and sleep disruption.",
    "A missed patch is an abrupt withdrawal (fold and dispose safely — used patches still contain drug).",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Clonidine: Clonidine agonises central alpha-2A receptors, damping locus coeruleus noradrenergic firing — sedation, anxiolysis, and ADHD hyperactivity reduction.",
        "Uses of Clonidine: ADHD (ER monotherapy or adjunct); Hypertension; Tics / Tourette's (adjunct); Stimulant-emergent insomnia and aggression",
        "Mechanism: central alpha-2A AGONIST — presynaptic NE autoinhibition (locus coeruleus damping).",
        "Uses: ADHD (ER approved), tics, stimulant-emergent insomnia, withdrawal states, hypertension.",
      ],
      practical: [
        "Prescribe Clonidine for adhd (er monotherapy or adjunct) with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline, then every visit); Sedation and school-day function (Every visit)",
      ],
      longAnswer: [
        "Clonidine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: central alpha-2A AGONIST — presynaptic NE autoinhibition (locus coeruleus damping).",
        "Uses: ADHD (ER approved), tics, stimulant-emergent insomnia, withdrawal states, hypertension.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: central alpha-2A AGONIST — presynaptic NE autoinhibition (locus coeruleus damping).",
        "Uses: ADHD (ER approved), tics, stimulant-emergent insomnia, withdrawal states, hypertension.",
        "Signature danger: REBOUND HYPERTENSION on abrupt withdrawal — always taper.",
        "Signature daily effects: sedation, dry mouth, bradycardia.",
        "ER dose 0.1-0.4 mg/day; IR 0.05-0.3 mg (paediatric).",
        "Patches deliver weekly — a detached patch is a withdrawal event.",
      ],
      pyqConcepts: [
        "Mechanism/target of Clonidine",
        "Key adverse effect: Rebound hypertension / withdrawal syndrome",
        "Dosing and titration of Clonidine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Clonidine develops rebound hypertension / withdrawal syndrome — next best step?",
        "When to choose Clonidine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Central alpha-2A adrenergic receptors (agonist — presynaptic autoinhibition)",
        "Most common side effects: Sedation and drowsiness, Dry mouth, Dizziness and orthostatic symptoms",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The taper rule is absolute: abrupt clonidine stop causes noradrenergic rebound — the class's signature emergency.",
        "Bedtime-first dosing converts sedation into sleep benefit — the classic pairing with morning stimulant.",
        "Not a first-line inattention monotherapy — its ADHD strength is hyperactivity/impulsivity and sleep disruption.",
        "A missed patch is an abrupt withdrawal (fold and dispose safely — used patches still contain drug).",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: central alpha-2A AGONIST — presynaptic NE autoinhibition (locus coeruleus damping).",
    "Uses: ADHD (ER approved), tics, stimulant-emergent insomnia, withdrawal states, hypertension.",
    "Signature danger: REBOUND HYPERTENSION on abrupt withdrawal — always taper.",
    "Signature daily effects: sedation, dry mouth, bradycardia.",
    "ER dose 0.1-0.4 mg/day; IR 0.05-0.3 mg (paediatric).",
    "Patches deliver weekly — a detached patch is a withdrawal event.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — adhd (er monotherapy or adjunct)",
      presentation: "A patient presenting with adhd (er monotherapy or adjunct), started on Clonidine.",
      history: "A adult patient presents with a adhd (er monotherapy or adjunct) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with adhd (er monotherapy or adjunct); physical examination and baseline investigations are unremarkable.",
      diagnosis: "ADHD (ER monotherapy or adjunct). Differentials are considered and excluded clinically.",
      rationale: "Clonidine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Alpha-2 Agonist) with strong evidence in this condition.",
      management: "Started at 0.1 mg at bedtime, titrated to 0.1-0.2 mg twice daily with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Clonidine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Alpha-2 Agonist comparison — choosing within the class",
      primaryDrug: "Clonidine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Central alpha-2A adrenergic receptors (agonist — presynaptic autoinhibition)",
          comparisons: [
            {
              drug: "Guanfacine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "12-16 hours (IR); patch ~weekly.",
          comparisons: [
            {
              drug: "Guanfacine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to reducing — appetite effects common.",
          comparisons: [
            {
              drug: "Guanfacine",
              value: "Weight neutral to reducing — appetite effects common.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Not sedating.",
          comparisons: [
            {
              drug: "Guanfacine",
              value: "Not sedating.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The 24-hour ADHD/tic adjunct — sedating but non-stimulant",
          comparisons: [
            {
              drug: "Guanfacine",
              value: "The refined alpha-2 agonist — ER-approved for ADHD",
            },
          ],
        },
      ],
      takeaway: "All alpha-2 agonists share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Clonidine reaches peak plasma concentration and begins acting at its molecular target (Central alpha-2A adrenergic receptors (agonist — presynaptic autoinhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, dry mouth, dizziness and orthostatic symptoms). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Sedation within the hour (IR); ADHD effects over 1-2 weeks.)",
      title: "Therapeutic effect builds",
      description: "Sedation within the hour (IR); ADHD effects over 1-2 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Clonidine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Clonidine take to work?",
      answer: "Sedation within the hour (IR); ADHD effects over 1-2 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Clonidine?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Dry mouth, Dizziness and orthostatic symptoms, Bradycardia, Constipation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Clonidine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Clonidine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Clonidine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Clonidine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Clonidine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE NG87 (ADHD); AAP ADHD Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), clonidine monograph, p. 27",
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
        source: "FDA Prescribing Information for Catapres (Clonidine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for clonidine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Clonidine",
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
      name: "Guanfacine",
      slug: "guanfacine",
      drugClass: "Alpha-2 Agonist",
      relationship: "Same class (Alpha-2 Agonist)",
    },
  ],
  relatedConditions: [
    {
      name: "ADHD (ER monotherapy or adjunct)",
      relationship: "primary",
    },
    {
      name: "Hypertension",
      relationship: "primary",
    },
    {
      name: "Tics / Tourette's (adjunct)",
      relationship: "off-label",
    },
    {
      name: "Stimulant-emergent insomnia and aggression",
      relationship: "alternative",
    },
    {
      name: "Opioid and alcohol withdrawal states",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Clonidine",
      type: "drug",
      href: "/drugs/clonidine",
      note: "The drug you're reading about",
    },
    {
      label: "Alpha-2 Agonist",
      type: "class",
      href: "#mechanism",
      note: "Alpha-2 Adrenergic Agonist",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Central alpha-2A adrenergic receptors (agonist — presynaptic autoinhibition)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "ADHD (ER monotherapy or adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Hypertension",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Tics / Tourette's (adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Rebound hypertension / withdrawal syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Severe bradycardia/hypotension in combination",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and drowsiness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Clonidine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The alpha-2 agonist — blood-pressure medicine turned 24-hour ADHD and tic helper.",
    summary: "Clonidine is a prescription medicine used to treat adhd (er monotherapy or adjunct). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Clonidine is a mild blood-pressure medicine that calms the brain's alarm system (noradrenaline). In ADHD it helps the overactive, impulsive end of the condition and improves sleep — often added to a morning stimulant. Its main effects are sleepiness, dry mouth, and a slower pulse — and it must NEVER be stopped suddenly, because blood pressure can rebound dangerously.",
    sideEffects: "The most common side effects are: sedation and drowsiness, dry mouth, dizziness and orthostatic symptoms, bradycardia, constipation, rebound hypertension on abrupt withdrawal. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Rebound hypertension / withdrawal syndrome and Severe bradycardia/hypotension in combination. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline, then every visit); sedation and school-day function (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Beta-blockers, Tricyclic antidepressants, Antihypertensives. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Arkamin",
        manufacturer: "Torrent/Unichem legacy",
        strengths: "100 mcg",
      },
      {
        name: "Clonidine generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "100 mcg",
      },
    ],
    typicalDoses: "ADHD 0.05-0.1 mg night → 0.2-0.3 mg/day divided.",
    prescribingScenarios: ["Paediatric ADHD + sleep disruption.", "Tics, stimulant smoothing.", "Withdrawal states."],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "HR/BP every visit.",
    patientCounselling: ["NEVER stop suddenly.", "Bedtime dosing first."],
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
    available: true,
    note: "Generic clonidine stocked in Jan Aushadhi.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Alpha-2 Agonists",
    members: [
      {
        name: "Clonidine",
        slug: "clonidine",
        relationship: "This guide",
        distinguishing: "The 24-hour ADHD/tic adjunct — sedating but non-stimulant",
      },
      {
        name: "Guanfacine",
        slug: "guanfacine",
        relationship: "Same class (Alpha-2 Agonist)",
        distinguishing: "The refined alpha-2 agonist — ER-approved for ADHD",
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
      question: "Which molecular target does Clonidine primarily act on?",
      options: [
        "Central alpha-2A adrenergic receptors (agonist — presynaptic autoinhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Clonidine acts primarily at Central alpha-2A adrenergic receptors (agonist — presynaptic autoinhibition). Clonidine agonises central alpha-2A receptors, damping locus coeruleus noradrenergic firing — sedation, anxiolysis, and ADHD hyperactivity reduction.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Clonidine?",
      options: ["Sedation and drowsiness", "Dry mouth", "Dizziness and orthostatic symptoms", "Bradycardia"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — The daily texture.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Clonidine for adhd (er)?",
      options: ["0.1-0.2 mg twice daily", "0.4 mg/day", "0.1-0.2 mg twice daily (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For adhd (er): start 0.1 mg at bedtime, target 0.1-0.2 mg twice daily, maximum 0.4 mg/day. Increase by 0.1 mg weekly",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Clonidine in two sentences.",
      answer: "Clonidine agonises central alpha-2A receptors, damping locus coeruleus noradrenergic firing — sedation, anxiolysis, and ADHD hyperactivity reduction. Net effect: Catecholamine and wake-system enhancement with the agent's characteristic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Clonidine.",
      answer: "ADHD (ER monotherapy or adjunct), Hypertension, Tics / Tourette's (adjunct), Stimulant-emergent insomnia and aggression. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Clonidine and how you would manage it.",
      answer: "Rebound hypertension / withdrawal syndrome: Abrupt cessation causes noradrenergic rebound — hypertensive urgency reported. Management: Never stop abruptly; taper over 2-4 days minimum.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Clonidine require?",
      answer: "Heart rate and blood pressure (Baseline, then every visit); Sedation and school-day function (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Clonidine that separates safe prescribers from unsafe ones.",
      answer: "The taper rule is absolute: abrupt clonidine stop causes noradrenergic rebound — the class's signature emergency.",
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
      checkpoint: "You now know what Clonidine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Clonidine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Clonidine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Clonidine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Clonidine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Clonidine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Sedation within the hour (IR); ADHD effects over 1-2 weeks.",
    ],
    ifItWorks: [
      "Continue Clonidine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Clonidine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Clonidine follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral to reducing — appetite effects common.",
    sedation: "Not sedating.",
    dosing: [
      {
        indication: "ADHD (ER)",
        starting: "0.1 mg at bedtime",
        titration: "Increase by 0.1 mg weekly",
        target: "0.1-0.2 mg twice daily",
        max: "0.4 mg/day",
      },
      {
        indication: "ADHD/tics adjunct (IR)",
        starting: "0.05 mg at bedtime",
        titration: "Increase slowly, divided dosing",
        target: "0.1-0.3 mg/day divided",
        max: "Tolerability-limited",
      },
    ],
    dosageForms: ["IR tablets 0.1, 0.2 mg", "ER tablets 0.1 mg", "Transdermal patch (weekly)"],
    dosingTips: [
      "Bedtime dose first.",
      "Taper over 2-4 days (or longer) whenever stopping.",
      "Morning stimulant + night clonidine is a classic pairing.",
    ],
    overdose: [
      "Overdose with Clonidine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Clonidine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 12-16 hours (IR); patch ~weekly..",
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
    potentialAdvantages: ["Non-stimulant, no abuse potential.", "Sleep benefit.", "Cheap and globally available.", "Tic benefit."],
    potentialDisadvantages: ["Sedation.", "Rebound hypertension danger.", "Weak for pure inattention."],
    primaryTargetSymptoms: ["Hyperactivity/impulsivity", "ADHD-related sleep disruption", "Tics"],
    pearls: [
      "The taper rule is absolute: abrupt clonidine stop causes noradrenergic rebound — the class's signature emergency.",
      "Bedtime-first dosing converts sedation into sleep benefit — the classic pairing with morning stimulant.",
      "Not a first-line inattention monotherapy — its ADHD strength is hyperactivity/impulsivity and sleep disruption.",
      "A missed patch is an abrupt withdrawal (fold and dispose safely — used patches still contain drug).",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
