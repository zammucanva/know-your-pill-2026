import type { Drug } from "../types";

/**
 * Propranolol — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), propranolol monograph (book p. 104)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const propranolol: Drug = {
  /* ---- Identity ---- */
  slug: "propranolol",
  genericName: "Propranolol",
  brandNames: ["Inderal", "Ciplar / Propranolol (India)"],
  drugClass: "beta-blocker",
  drugClassLabel: "Beta-Blocker",
  drugClassFullName: "Non-Selective Beta-Adrenergic Blocker",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Beta-Blockers", "Propranolol"],
  /* ---- Hero / summary ---- */
  tagline: "The beta-blocker for the body's anxiety — tremor, pounding heart, and stage fright, without touching the worry.",
  summary: "Propranolol is the non-selective beta-blocker used in psychiatry for the PERIPHERAL symptoms of anxiety — tremor, tachycardia, sweating, flushing — by blocking peripheral adrenergic receptors. It is the standard treatment for essential tremor, performance anxiety, antipsychotic-induced akathisia, and propranolol-class uses from migraine prophylaxis to thyrotoxicosis control. It does not touch the cognitive worry of anxiety — only its bodily theatre.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Propranolol — from its molecular target (Beta-1 and beta-2 adrenergic receptors (non-selective antagonist, peripherally and centrally acting)) to clinical effect.",
    "List the FDA-approved and off-label uses of Propranolol.",
    "Predict the common and serious side effects of Propranolol from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Propranolol.",
    "Compare Propranolol with other beta-blockers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Propranolol blocks beta-adrenergic receptors — damping the peripheral sympathetic theatre of anxiety (tremor, tachycardia) plus central anxiolytic and antitremor effects.",
    molecularTarget: "Beta-1 and beta-2 adrenergic receptors (non-selective antagonist, peripherally and centrally acting)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Propranolol blocks beta-adrenergic receptors — damping the peripheral sympathetic theatre of anxiety (tremor, tachycardia) plus central anxiolytic and antitremor effects.",
      "The target engagement translates into the clinical effect.",
      "Practical use follows the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 4-6 hours (IR); LA once daily. — see mechanism and prescriber sections.",
    halfLife: "4-6 hours (IR); LA once daily.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Propranolol",
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
  receptors: [
    "Beta-1 and beta-2 adrenergic receptors (antagonist)",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Performance / situational anxiety (peripheral symptoms)",
      status: "off-label",
      description: "The stage-fright drug: PRN 30-60 min before performance — tremor and pounding heart damped.",
    },
    {
      name: "Essential tremor",
      status: "fda-approved",
      description: "The first-line pharmacotherapy.",
    },
    {
      name: "Antipsychotic-induced akathisia",
      status: "guideline",
      description: "First-line akathisia treatment (30-90 mg/day).",
    },
    {
      name: "Antipsychotic/Lithium tremor",
      status: "guideline",
      description: "The classic tremor rescue in psychopharmacology.",
    },
    {
      name: "Migraine prophylaxis",
      status: "fda-approved",
      description: "The medical indication.",
    },
    {
      name: "Thyrotoxicosis (adjunct, symptom control)",
      status: "fda-approved",
      description: "Sympathetic blockade in thyroid storm.",
    },
    {
      name: "Hypertension and arrhythmias",
      status: "fda-approved",
      description: "The original cardiovascular indications.",
    },
    {
      name: "PTSD re-experiencing/nightmares (adjunct)",
      status: "off-label",
      description: "Noradrenergic dampening — mixed evidence.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Propranolol must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Asthma inhalers (beta-agonists)",
      severity: "absolute",
      rationale: "Pharmacological antagonism — both drugs defeated.",
    },
    {
      name: "Verapamil and diltiazem",
      severity: "absolute",
      rationale: "Additive negative chronotropy and inotropy — severe bradycardia/heart block.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Bradycardia",
      frequency: "common",
      severity: "moderate",
      description: "The predictable cardiac effect.",
      management: "Pulse checks; dose reduction if < 55-60.",
    },
    {
      name: "Fatigue and reduced exercise tolerance",
      frequency: "common",
      severity: "moderate",
      description: "Beta-blockade of exercise response.",
      management: "Counsel; dose review.",
    },
    {
      name: "Cold extremities",
      frequency: "common",
      severity: "mild",
      description: "Peripheral beta-2 blockade.",
      management: "Reassurance.",
    },
    {
      name: "Hypotension and dizziness",
      frequency: "common",
      severity: "moderate",
      description: "Class effect.",
      management: "Rise slowly; BP checks.",
    },
    {
      name: "Sleep disturbance and vivid dreams",
      frequency: "uncommon",
      severity: "mild",
      description: "Lipophilic central effect.",
      management: "Dose timing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Severe bradycardia / heart block",
      frequency: "uncommon",
      severity: "severe",
      description: "Conduction-dependent patients.",
      management: "ECG; avoid in conduction disease.",
    },
    {
      name: "Bronchospasm in asthma/COPD",
      frequency: "common",
      severity: "life-threatening",
      description: "Non-selective beta-2 blockade — the absolute respiratory contraindication.",
      management: "Never in asthma; cardioselective alternatives if a beta-blocker is essential.",
    },
    {
      name: "Masked hypoglycaemia in diabetics",
      frequency: "uncommon",
      severity: "severe",
      description: "Beta-blockade hides the adrenergic warning signs.",
      management: "Capillary glucose awareness; caution in insulin users.",
    },
    {
      name: "Rebound tachycardia/angina on abrupt withdrawal",
      frequency: "uncommon",
      severity: "severe",
      description: "Upregulated receptors protest withdrawal — the beta-blocker taper rule.",
      management: "Taper over 1-2 weeks always.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline and every visit",
      rationale: "Bradycardia/hypotension surveillance.",
    },
    {
      parameter: "Excerpt from exercise tolerance",
      frequency: "At review",
      rationale: "Fatigue limit.",
    },
  ],
  interactions: [
    {
      drug: "Asthma inhalers (beta-agonists)",
      severity: "contraindicated",
      mechanism: "Pharmacological antagonism — both drugs defeated.",
      action: "Never combine propranolol with asthma therapy.",
    },
    {
      drug: "Verapamil and diltiazem",
      severity: "contraindicated",
      mechanism: "Additive negative chronotropy and inotropy — severe bradycardia/heart block.",
      action: "Avoid.",
    },
    {
      drug: "Insulin and sulfonylureas",
      severity: "major",
      mechanism: "Masked hypoglycaemia plus blunted recovery.",
      action: "Glucose awareness counselling.",
    },
    {
      drug: "Clonidine",
      severity: "major",
      mechanism: "Combined withdrawal causes severe rebound hypertension.",
      action: "Coordinate tapers.",
    },
    {
      drug: "Rizatriptan and ergots",
      severity: "major",
      mechanism: "Propranolol raises triptan levels.",
      action: "Dose reduction of rizatriptan.",
    },
  ],
  pregnancy: {
    legacyCategory: "C (historically; beta-blockers used in pregnancy for cardiac indications under supervision)",
    summary: "Beta-blocker use in pregnancy follows cardiac-indication logic (e.g., thyrotoxicosis) with obstetric co-management; for psychiatric PRN use, alternatives preferred.",
    lactation: "Excreted in milk in small amounts — infant bradycardia monitoring if used.",
  },
  renalAdjustment: "No major adjustment.",
  hepaticAdjustment: "Extensive first-pass — hepatic impairment raises bioavailability (reduce dose).",
  /* ---- Education ---- */
  patientExplanation: "Propranolol is a blood-pressure-class medicine that blocks adrenaline's effects on the body: it steadies a shaking voice, slows a pounding heart, and cools sweaty palms — the physical symptoms of anxiety and nervousness. It does not change anxious thoughts themselves. It must never be taken by people with asthma, and it should never be stopped suddenly.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Propranolol builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The body-not-mind drug: propranolol does nothing for worried thoughts — it removes the tremor, the pounding heart, and the flush that anxiety feeds on.",
    "The stage-fright ritual: 10-40 mg, 45 minutes before — rehearsed in advance so the dose is known, not guessed.",
    "The akathisia first-line: 30-90 mg/day rescues aripiprazole-class and antipsychotic restlessness — the psychopharmacology workhorse.",
    "Never in asthma — the non-selective beta-2 blockade is an absolute respiratory contraindication.",
    "Taper always: abrupt withdrawal causes rebound tachycardia and angina — the unlearned lesson of beta-blocker pharmacology.",
    "Masks hypoglycaemia: insulin users lose their adrenergic warning — counsel explicitly.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Propranolol: Propranolol blocks beta-adrenergic receptors — damping the peripheral sympathetic theatre of anxiety (tremor, tachycardia) plus central anxiolytic and antitremor effects.",
        "Uses of Propranolol: Performance / situational anxiety (peripheral symptoms); Essential tremor; Antipsychotic-induced akathisia; Antipsychotic/Lithium tremor",
        "Mechanism: NON-SELECTIVE beta-1/2 antagonist — peripheral sympathetic damping plus central effects.",
        "Psychiatric uses: performance anxiety (PRN), akathisia (first-line), lithium/antipsychotic tremor, essential tremor.",
      ],
      practical: [
        "Prescribe Propranolol for performance / situational anxiety (peripheral symptoms) with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline and every visit); Excerpt from exercise tolerance (At review)",
      ],
      longAnswer: [
        "Propranolol: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: NON-SELECTIVE beta-1/2 antagonist — peripheral sympathetic damping plus central effects.",
        "Psychiatric uses: performance anxiety (PRN), akathisia (first-line), lithium/antipsychotic tremor, essential tremor.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: NON-SELECTIVE beta-1/2 antagonist — peripheral sympathetic damping plus central effects.",
        "Psychiatric uses: performance anxiety (PRN), akathisia (first-line), lithium/antipsychotic tremor, essential tremor.",
        "Does NOT treat the cognitive component of anxiety.",
        "Absolute contraindication: asthma/COPD (beta-2 blockade).",
        "Taper on withdrawal (rebound tachycardia/angina).",
        "Masks hypoglycaemia in diabetics.",
      ],
      pyqConcepts: [
        "Mechanism/target of Propranolol",
        "Key adverse effect: Severe bradycardia / heart block",
        "Dosing and titration of Propranolol",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Propranolol develops severe bradycardia / heart block — next best step?",
        "When to choose Propranolol over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Beta-1 and beta-2 adrenergic receptors (non-selective antagonist, peripherally and centrally acting)",
        "Most common side effects: Bradycardia, Fatigue and reduced exercise tolerance, Cold extremities",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The body-not-mind drug: propranolol does nothing for worried thoughts — it removes the tremor, the pounding heart, and the flush that anxiety feeds on.",
        "The stage-fright ritual: 10-40 mg, 45 minutes before — rehearsed in advance so the dose is known, not guessed.",
        "The akathisia first-line: 30-90 mg/day rescues aripiprazole-class and antipsychotic restlessness — the psychopharmacology workhorse.",
        "Never in asthma — the non-selective beta-2 blockade is an absolute respiratory contraindication.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: NON-SELECTIVE beta-1/2 antagonist — peripheral sympathetic damping plus central effects.",
    "Psychiatric uses: performance anxiety (PRN), akathisia (first-line), lithium/antipsychotic tremor, essential tremor.",
    "Does NOT treat the cognitive component of anxiety.",
    "Absolute contraindication: asthma/COPD (beta-2 blockade).",
    "Taper on withdrawal (rebound tachycardia/angina).",
    "Masks hypoglycaemia in diabetics.",
    "PRN dose 10-40 mg 45 min pre-event; akathisia 30-90 mg/day.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — performance / situational anxiety (peripheral symptoms)",
      presentation: "A patient presenting with performance / situational anxiety (peripheral symptoms), started on Propranolol.",
      history: "A adult patient presents with a performance / situational anxiety (peripheral symptoms) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with performance / situational anxiety (peripheral symptoms); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Performance / situational anxiety (peripheral symptoms). Differentials are considered and excluded clinically.",
      rationale: "Propranolol is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Beta-Blocker) with strong evidence in this condition.",
      management: "Started at 10-40 mg 30-60 min before the event, titrated to 10-40 mg PRN with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Propranolol takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Beta-Blocker vs related agents — orientation table",
      primaryDrug: "Propranolol",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Beta-1 and beta-2 adrenergic receptors (non-selective antagonist, peripherally and centrally acting)",
          comparisons: [
            {
              drug: "Propranolol",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral.",
          comparisons: [
            {
              drug: "Propranolol",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Propranolol",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The peripheral anxiety answer — tremor, stage fright, akathisia",
          comparisons: [
            {
              drug: "Propranolol",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Propranolol is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Propranolol reaches peak plasma concentration and begins acting at its molecular target (Beta-1 and beta-2 adrenergic receptors (non-selective antagonist, peripherally and centrally acting)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (bradycardia, fatigue and reduced exercise tolerance, cold extremities). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (PRN effect 30-60 minutes; tremor control within days.)",
      title: "Therapeutic effect builds",
      description: "PRN effect 30-60 minutes; tremor control within days. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Propranolol is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Propranolol take to work?",
      answer: "PRN effect 30-60 minutes; tremor control within days.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Propranolol?",
      answer: "The most frequently reported effects are: Bradycardia, Fatigue and reduced exercise tolerance, Cold extremities, Hypotension and dizziness, Sleep disturbance and vivid dreams. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Propranolol suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Propranolol habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Propranolol exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Propranolol during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Propranolol may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG113 (Anxiety); BNF Guidance",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), propranolol monograph, p. 104",
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
        source: "FDA Prescribing Information for Inderal (Propranolol)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for propranolol — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Propranolol",
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/medication-guides",
      },
      {
        source: "NIMH — Mental Health Medications",
        url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
      },
    ],
  },
  relatedDrugs: [],
  relatedConditions: [
    {
      name: "Performance / situational anxiety (peripheral symptoms)",
      relationship: "off-label",
    },
    {
      name: "Essential tremor",
      relationship: "primary",
    },
    {
      name: "Antipsychotic-induced akathisia",
      relationship: "alternative",
    },
    {
      name: "Antipsychotic/Lithium tremor",
      relationship: "alternative",
    },
    {
      name: "Migraine prophylaxis",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Propranolol",
      type: "drug",
      href: "/drugs/propranolol",
      note: "The drug you're reading about",
    },
    {
      label: "Beta-Blocker",
      type: "class",
      href: "#mechanism",
      note: "Non-Selective Beta-Adrenergic Blocker",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Beta-1 and beta-2 adrenergic receptors (non-selective antagonist, peripherally and centrally acting)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Performance / situational anxiety (peripheral symptoms)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Essential tremor",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Antipsychotic-induced akathisia",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Severe bradycardia / heart block",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Bronchospasm in asthma/COPD",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Bradycardia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Propranolol",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The beta-blocker for the body's anxiety — tremor, pounding heart, and stage fright, without touching the worry.",
    summary: "Propranolol is a prescription medicine used to treat performance / situational anxiety (peripheral symptoms). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Propranolol is a blood-pressure-class medicine that blocks adrenaline's effects on the body: it steadies a shaking voice, slows a pounding heart, and cools sweaty palms — the physical symptoms of anxiety and nervousness. It does not change anxious thoughts themselves. It must never be taken by people with asthma, and it should never be stopped suddenly.",
    sideEffects: "The most common side effects are: bradycardia, fatigue and reduced exercise tolerance, cold extremities, hypotension and dizziness, sleep disturbance and vivid dreams. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Severe bradycardia / heart block and Bronchospasm in asthma/COPD. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline and every visit); excerpt from exercise tolerance (at review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Asthma inhalers (beta-agonists), Verapamil and diltiazem, Insulin and sulfonylureas, Clonidine. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Ciplar",
        manufacturer: "Cipla",
        strengths: "10-80 mg + LA",
      },
      {
        name: "Propal / Propranolol generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "10-80 mg",
      },
    ],
    typicalDoses: "PRN 10-40 mg; akathisia 30-90 mg/day; tremor 120-240 mg/day.",
    prescribingScenarios: [
      "The OPD tremor/akathisia rescue nationwide.",
      "Performance anxiety PRN in students and professionals.",
      "Lithium tremor management.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Pulse and BP at every visit.",
    patientCounselling: ["Not for people with asthma.", "Never stop suddenly.", "Rehearse the pre-event dose."],
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
    note: "Generic propranolol widely stocked.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Beta-Blockers",
    members: [
      {
        name: "Propranolol",
        slug: "propranolol",
        relationship: "This guide",
        distinguishing: "The peripheral anxiety answer — tremor, stage fright, akathisia",
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
      question: "Which molecular target does Propranolol primarily act on?",
      options: [
        "Beta-1 and beta-2 adrenergic receptors (non-selective antagonist, peripherally and centrally acting)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Propranolol acts primarily at Beta-1 and beta-2 adrenergic receptors (non-selective antagonist, peripherally and centrally acting). Propranolol blocks beta-adrenergic receptors — damping the peripheral sympathetic theatre of anxiety (tremor, tachycardia) plus central anxiolytic and antitremor effects.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Propranolol?",
      options: ["Bradycardia", "Fatigue and reduced exercise tolerance", "Cold extremities", "Hypotension and dizziness"],
      correctIndex: 0,
      explanation: "Bradycardia — The predictable cardiac effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Propranolol for performance anxiety (prn)?",
      options: ["10-40 mg PRN", "80 mg PRN (exceptional)", "10-40 mg PRN (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For performance anxiety (prn): start 10-40 mg 30-60 min before the event, target 10-40 mg PRN, maximum 80 mg PRN (exceptional). Single pre-event dose; titrate by experience",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Propranolol in two sentences.",
      answer: "Propranolol blocks beta-adrenergic receptors — damping the peripheral sympathetic theatre of anxiety (tremor, tachycardia) plus central anxiolytic and antitremor effects. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Propranolol.",
      answer: "Performance / situational anxiety (peripheral symptoms), Essential tremor, Antipsychotic-induced akathisia, Antipsychotic/Lithium tremor. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Propranolol and how you would manage it.",
      answer: "Severe bradycardia / heart block: Conduction-dependent patients. Management: ECG; avoid in conduction disease.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Propranolol require?",
      answer: "Heart rate and blood pressure (Baseline and every visit); Excerpt from exercise tolerance (At review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Propranolol that separates safe prescribers from unsafe ones.",
      answer: "The body-not-mind drug: propranolol does nothing for worried thoughts — it removes the tremor, the pounding heart, and the flush that anxiety feeds on.",
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
      checkpoint: "You now know what Propranolol is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Propranolol works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Propranolol safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Propranolol.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Propranolol with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Propranolol.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "PRN effect 30-60 minutes; tremor control within days.",
    ],
    ifItWorks: [
      "Continue Propranolol at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Propranolol (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Propranolol follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Performance anxiety (PRN)",
        starting: "10-40 mg 30-60 min before the event",
        titration: "Single pre-event dose; titrate by experience",
        target: "10-40 mg PRN",
        max: "80 mg PRN (exceptional)",
      },
      {
        indication: "Essential tremor",
        starting: "40 mg twice daily",
        titration: "Increase by 40 mg every few days",
        target: "120-240 mg/day divided",
        max: "320 mg/day",
      },
      {
        indication: "Akathisia",
        starting: "10 mg three times daily",
        titration: "Increase to 30 mg tds as needed",
        target: "30-90 mg/day",
        max: "120 mg/day",
      },
    ],
    dosageForms: ["Tablets 10-80 mg", "LA capsules 60-160 mg", "Oral solution"],
    dosingTips: [
      "Rehearse the PRN dose before the real event.",
      "Pulse at every review.",
      "Bedtime-weighted dosing for night tremor.",
      "Taper — never abrupt.",
    ],
    overdose: [
      "Overdose with Propranolol is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Propranolol is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 4-6 hours (IR); LA once daily..",
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
    potentialAdvantages: ["PRN and scheduled flexibility.", "No dependence.", "Akathisia and tremor workhorse.", "Cheap and universally available."],
    potentialDisadvantages: ["Asthma contraindication.", "Fatigue and exercise blunting.", "Bradycardia monitoring.", "Not an anxiolytic for worry itself."],
    primaryTargetSymptoms: [
      "Peripheral anxiety symptoms (tremor, tachycardia, sweating)",
      "Akathisia",
      "Essential and drug-induced tremor",
      "Performance anxiety",
    ],
    pearls: [
      "The body-not-mind drug: propranolol does nothing for worried thoughts — it removes the tremor, the pounding heart, and the flush that anxiety feeds on.",
      "The stage-fright ritual: 10-40 mg, 45 minutes before — rehearsed in advance so the dose is known, not guessed.",
      "The akathisia first-line: 30-90 mg/day rescues aripiprazole-class and antipsychotic restlessness — the psychopharmacology workhorse.",
      "Never in asthma — the non-selective beta-2 blockade is an absolute respiratory contraindication.",
      "Taper always: abrupt withdrawal causes rebound tachycardia and angina — the unlearned lesson of beta-blocker pharmacology.",
      "Masks hypoglycaemia: insulin users lose their adrenergic warning — counsel explicitly.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
