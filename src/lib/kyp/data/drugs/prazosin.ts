import type { Drug } from "../types";

/**
 * Prazosin — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), prazosin monograph (book p. 102)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const prazosin: Drug = {
  /* ---- Identity ---- */
  slug: "prazosin",
  genericName: "Prazosin",
  brandNames: ["Minipress", "Prazocin / Prazosin (India)"],
  drugClass: "alpha-blocker",
  drugClassLabel: "Alpha-1 Blocker",
  drugClassFullName: "Alpha-1 Adrenergic Blocker",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Alpha-1 Blockers", "Prazosin"],
  /* ---- Hero / summary ---- */
  tagline: "The alpha-1 blocker that quiets nightmares. PTSD's noradrenergic night-time drug.",
  summary: "Prazosin is a postsynaptic alpha-1 adrenergic antagonist that crosses into the brain and dampens the noradrenergic storm of PTSD: trauma nightmares, night terrors, and hyperarousal. Its psychiatric identity is entirely the PTSD nightmare niche: supported by the classic VA trials and complicated by the later PACT trial's negative result, with clinical practice retaining it as the nightmare specialist. First-dose orthostatic hypotension and the nightmare-hour timing of dosing define its practical use.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Prazosin (from its molecular target (Postsynaptic alpha-1 adrenergic receptors (antagonist) brain-penetrant)) to clinical effect.",
    "List the FDA-approved and off-label uses of Prazosin.",
    "Predict the common and serious side effects of Prazosin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Prazosin.",
    "Compare Prazosin with other alpha-1 blockers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal: the engine of trauma nightmares and hypervigilance.",
    molecularTarget: "Postsynaptic alpha-1 adrenergic receptors (antagonist, brain-penetrant)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal: the engine of trauma nightmares and hypervigilance.",
      "The target engagement translates into the clinical effect.",
      "Practical use follows the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 2-3 hours (short, hence the timing logic). See mechanism and prescriber sections.",
    halfLife: "2-3 hours (short, hence the timing logic).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Prazosin",
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
    caption: "Modulating noradrenergic signalling at its receptor: a mechanism-driven route to symptom control.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Norepinephrine (NE)"],
  receptors: [
    "Alpha-1 adrenergic receptor (antagonist)",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "PTSD-associated nightmares and sleep disturbance",
      status: "off-label",
      description: "The classic VA-trial indication: reduces trauma nightmare frequency and intensity in a majority of responders.",
    },
    {
      name: "PTSD daytime hyperarousal (adjunct)",
      status: "off-label",
      description: "Additional daytime dosing in selected patients.",
    },
    {
      name: "Hypertension",
      status: "fda-approved",
      description: "The original medical indication.",
    },
    {
      name: "Benign prostatic hyperplasia (symptomatic)",
      status: "off-label",
      description: "Alpha-1 blockade in urology.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Prazosin must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "First-dose orthostatic hypotension",
      frequency: "very-common",
      severity: "moderate",
      description: "The first-dose syncope phenomenon: dose at bedtime initially.",
      management: "Bedtime first dose; rise slowly; titrate slowly.",
    },
    {
      name: "Dizziness and palpitations",
      frequency: "common",
      severity: "mild",
      description: "Orthostatic class effects.",
      management: "Slow rises.",
    },
    {
      name: "Drowsiness and dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "Reassurance.",
    },
    {
      name: "Nasal congestion",
      frequency: "common",
      severity: "mild",
      description: "Alpha-1 blockade.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Syncope with injury (first-dose/titration)",
      frequency: "uncommon",
      severity: "severe",
      description: "The orthostatic window, especially in the elderly and on standing at night.",
      management: "Bedtime dosing; nocturnal toileting care.",
    },
    {
      name: "Priapism (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Alpha-1 blockade class effect.",
      management: "Urological emergency teaching.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Blood pressure (orthostatic)",
      frequency: "Baseline and during titration",
      rationale: "The orthostasis surveillance.",
    },
    {
      parameter: "Nightmare frequency (validated scale where possible)",
      frequency: "Every review",
      rationale: "The treatment target.",
    },
  ],
  interactions: [
    {
      drug: "Other antihypertensives and phosphodiesterase-5 inhibitors (sildenafil class)",
      severity: "major",
      mechanism: "Profound hypotension.",
      action: "Separate dosing; counselling.",
    },
    {
      drug: "Tricyclic antidepressants",
      severity: "moderate",
      mechanism: "Hypotension amplified.",
      action: "Monitor.",
    },
    {
      drug: "Beta-blockers",
      severity: "moderate",
      mechanism: "Severe first-dose hypotension risk.",
      action: "Coordinate initiation.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Alpha-1 blockers in pregnancy are used for hypertension under specialist care; psychiatric use deferred where possible.",
    lactation: "Excreted in milk in small amounts; monitor the infant for hypotension/lethargy.",
  },
  renalAdjustment: "Standard caution in renal impairment.",
  hepaticAdjustment: "Reduce dose in hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Prazosin is a blood-pressure medicine that also quiets the brain's alarm chemical, noradrenaline, which in post-traumatic stress drives nightmares and night waking. Taken at bedtime, it can dramatically reduce trauma dreams. The first doses can cause dizziness on standing, so it is started at night at a small dose and built up slowly.",
  patientEducationPoints: [
    "Take it exactly as prescribed, at the same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Prazosin builds over weeks. Do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The nightmare hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window; the pharmacokinetics IS the prescription.",
    "First-dose syncope is the initiation ritual: 1 mg at bedtime, slow steps, never a standing start.",
    "The VA trials built the indication; PACT complicated it: practice retains prazosin as the nightmare drug with individualised expectations.",
    "Doses for PTSD (to 10-20 mg) exceed hypertension doses: the surprise for physicians crossing over.",
    "Complementary to SSRI and trauma-focused therapy: the noradrenergic leg of the PTSD stool.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Prazosin: Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal; the engine of trauma nightmares and hypervigilance.",
        "Uses of Prazosin: PTSD-associated nightmares and sleep disturbance; PTSD daytime hyperarousal (adjunct); Hypertension; Benign prostatic hyperplasia (symptomatic)",
        "Mechanism: central postsynaptic ALPHA-1 antagonist; noradrenergic hyperarousal dampening.",
        "Signature indication: PTSD trauma nightmares and sleep disruption (off-label, guideline-supported).",
      ],
      practical: [
        "Prescribe Prazosin for ptsd-associated nightmares and sleep disturbance with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure (orthostatic) (Baseline and during titration); Nightmare frequency (validated scale where possible) (Every review)",
      ],
      longAnswer: [
        "Prazosin: mechanism, indications, adverse effects, contraindications, and dosing; structured answer framework.",
        "Mechanism: central postsynaptic ALPHA-1 antagonist; noradrenergic hyperarousal dampening.",
        "Signature indication: PTSD trauma nightmares and sleep disruption (off-label, guideline-supported).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: central postsynaptic ALPHA-1 antagonist; noradrenergic hyperarousal dampening.",
        "Signature indication: PTSD trauma nightmares and sleep disruption (off-label, guideline-supported).",
        "First-dose orthostatic hypotension: bedtime 1 mg start, slow titration.",
        "PTSD dosing 2-10+ mg (exceeds hypertension dosing).",
        "Short half-life: bedtime timing targets the nightmare window.",
        "Original indication: hypertension.",
      ],
      pyqConcepts: [
        "Mechanism/target of Prazosin",
        "Key adverse effect: Syncope with injury (first-dose/titration)",
        "Dosing and titration of Prazosin",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Prazosin develops syncope with injury (first-dose/titration): next best step?",
        "When to choose Prazosin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Postsynaptic alpha-1 adrenergic receptors (antagonist, brain-penetrant)",
        "Most common side effects: First-dose orthostatic hypotension, Dizziness and palpitations, Drowsiness and dry mouth",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The nightmare hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window; the pharmacokinetics IS the prescription.",
        "First-dose syncope is the initiation ritual: 1 mg at bedtime, slow steps, never a standing start.",
        "The VA trials built the indication; PACT complicated it: practice retains prazosin as the nightmare drug with individualised expectations.",
        "Doses for PTSD (to 10-20 mg) exceed hypertension doses: the surprise for physicians crossing over.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: central postsynaptic ALPHA-1 antagonist; noradrenergic hyperarousal dampening.",
    "Signature indication: PTSD trauma nightmares and sleep disruption (off-label, guideline-supported).",
    "First-dose orthostatic hypotension: bedtime 1 mg start, slow titration.",
    "PTSD dosing 2-10+ mg (exceeds hypertension dosing).",
    "Short half-life: bedtime timing targets the nightmare window.",
    "Original indication: hypertension.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation: ptsd-associated nightmares and sleep disturbance",
      presentation: "A patient presenting with ptsd-associated nightmares and sleep disturbance, started on Prazosin.",
      history: "A adult patient presents with a ptsd-associated nightmares and sleep disturbance picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with ptsd-associated nightmares and sleep disturbance; physical examination and baseline investigations are unremarkable.",
      diagnosis: "PTSD-associated nightmares and sleep disturbance. Differentials are considered and excluded clinically.",
      rationale: "Prazosin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Alpha-1 Blocker) with strong evidence in this condition.",
      management: "Started at 1 mg at bedtime, titrated to 2-10 mg at night (mean effective ~10 in trials) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Prazosin takes weeks for full effect: early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Alpha-1 Blocker vs related agents: orientation table",
      primaryDrug: "Prazosin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Postsynaptic alpha-1 adrenergic receptors (antagonist, brain-penetrant)",
          comparisons: [
            {
              drug: "Prazosin",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral.",
          comparisons: [
            {
              drug: "Prazosin",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Prazosin",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The PTSD nightmare specialist: noradrenergic night-time blockade",
          comparisons: [
            {
              drug: "Prazosin",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Prazosin is compared here with related agents for orientation. Full comparison data lives in each drug's own guide: follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Prazosin reaches peak plasma concentration and begins acting at its molecular target (Postsynaptic alpha-1 adrenergic receptors (antagonist, brain-penetrant)). Initial effects are on sleep, energy, or side effects, not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (first-dose orthostatic hypotension, dizziness and palpitations, drowsiness and dry mouth). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Nightmare reduction within days of an effective dose.)",
      title: "Therapeutic effect builds",
      description: "Nightmare reduction within days of an effective dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Prazosin is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Prazosin take to work?",
      answer: "Nightmare reduction within days of an effective dose.. Like most psychotropic medications, the full benefit builds gradually, some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Prazosin?",
      answer: "The most frequently reported effects are: First-dose orthostatic hypotension, Dizziness and palpitations, Drowsiness and dry mouth, Nasal congestion. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Prazosin suddenly?",
      answer: "No. Taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose. In that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Prazosin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Prazosin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Prazosin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure. Prazosin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA / VA-DoD PTSD Clinical Practice Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), prazosin monograph, p. 102",
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
        source: "FDA Prescribing Information for Minipress (Prazosin)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for prazosin — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Prazosin",
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
      name: "PTSD-associated nightmares and sleep disturbance",
      relationship: "off-label",
    },
    {
      name: "PTSD daytime hyperarousal (adjunct)",
      relationship: "off-label",
    },
    {
      name: "Hypertension",
      relationship: "primary",
    },
    {
      name: "Benign prostatic hyperplasia (symptomatic)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Prazosin",
      type: "drug",
      href: "/drugs/prazosin",
      note: "The drug you're reading about",
    },
    {
      label: "Alpha-1 Blocker",
      type: "class",
      href: "#mechanism",
      note: "Alpha-1 Adrenergic Blocker",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Postsynaptic alpha-1 adrenergic receptors (antagonist, brain-penetrant)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "PTSD-associated nightmares and sleep disturbance",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "PTSD daytime hyperarousal (adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hypertension",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Syncope with injury (first-dose/titration)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Priapism (rare)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "First-dose orthostatic hypotension",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide. Prazosin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The alpha-1 blocker that quiets nightmares. PTSD's noradrenergic night-time drug.",
    summary: "Prazosin is a prescription medicine used to treat ptsd-associated nightmares and sleep disturbance. It belongs to a well-studied class of medicines and works gradually, most people notice the benefit over weeks, not days.",
    mechanism: "Prazosin is a blood-pressure medicine that also quiets the brain's alarm chemical, noradrenaline, which in post-traumatic stress drives nightmares and night waking. Taken at bedtime, it can dramatically reduce trauma dreams. The first doses can cause dizziness on standing, so it is started at night at a small dose and built up slowly.",
    sideEffects: "The most common side effects are: first-dose orthostatic hypotension, dizziness and palpitations, drowsiness and dry mouth, nasal congestion. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Syncope with injury (first-dose/titration) and Priapism (rare). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you: there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure (orthostatic) (baseline and during titration); nightmare frequency (validated scale where possible) (every review). Keep every appointment: these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take, including over-the-counter and herbal products. Common interacting agents include: Other antihypertensives and phosphodiesterase-5 inhibitors (sildenafil class), Tricyclic antidepressants, Beta-blockers. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Prazocin",
        manufacturer: "Pfizer legacy/generic",
        strengths: "1, 2, 5 mg",
      },
      {
        name: "Prazosin generic",
        manufacturer: "multiple",
        strengths: "1-5 mg",
      },
    ],
    typicalDoses: "1 mg nocte → 2-10 mg (nightmares).",
    prescribingScenarios: [
      "PTSD clinics: the nightmare add-on to SSRI/trauma therapy.",
      "Armed-forces veteran care contexts.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Orthostatic BP during titration; nightmare frequency review.",
    patientCounselling: ["First dose at bedtime only.", "Rise slowly at night for the bathroom."],
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
    familyName: "Alpha-1 Blockers",
    members: [
      {
        name: "Prazosin",
        slug: "prazosin",
        relationship: "This guide",
        distinguishing: "The PTSD nightmare specialist: noradrenergic night-time blockade",
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
      question: "Which molecular target does Prazosin primarily act on?",
      options: [
        "Postsynaptic alpha-1 adrenergic receptors (antagonist — brain-penetrant)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Prazosin acts primarily at Postsynaptic alpha-1 adrenergic receptors (antagonist — brain-penetrant). Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal — the engine of trauma nightmares and hypervigilance.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Prazosin?",
      options: ["First-dose orthostatic hypotension", "Dizziness and palpitations", "Drowsiness and dry mouth", "Nasal congestion"],
      correctIndex: 0,
      explanation: "First-dose orthostatic hypotension — The first-dose syncope phenomenon — dose at bedtime initially.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Prazosin for ptsd nightmares?",
      options: [
        "2-10 mg at night (mean effective ~10 in trials)",
        "15-20 mg/day split",
        "2-10 mg at night (mean effective ~10 in trials) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For ptsd nightmares: start 1 mg at bedtime, target 2-10 mg at night (mean effective ~10 in trials), maximum 15-20 mg/day split. Increase by 1-2 mg every 3-7 days (bedtime ± daytime dosing)",
      afterSectionId: "prescriber-guide",
    },
    {
      id: "adj-prz-01",
      question: "Prazosin's antihypertensive action rests on which receptor action?",
      options: [
        "Highly selective alpha-1 adrenoceptor blockade (about 1000-fold selective over alpha-2), dilating arterioles more than veins without increasing noradrenaline release",
        "Non-selective alpha-1 and alpha-2 blockade that floods the synapse with noradrenaline and reflexly speeds the heart",
        "Central alpha-2A agonism that reduces sympathetic outflow from the vasomotor centre",
        "Beta-1 antagonism that lowers cardiac output and renin release"
      ],
      correctIndex: 0,
      explanation: "Tripathi and Katzung both emphasise prazosin's alpha-1 selectivity of roughly 1000:1; because prejunctional alpha-2 autoreceptors are untouched, noradrenaline release is not increased and reflex tachycardia is mild — the key contrast with phentolamine. The non-selective alpha-1-and-alpha-2 description is phentolamine's profile, the central alpha-2A agonist description is clonidine's mechanism, and the beta-1-antagonism description is beta-blocker pharmacology.",
      afterSectionId: "mechanism",
    },
    {
      id: "adj-prz-02",
      question: "A 34-year-old army veteran with PTSD on sertraline still wakes nightly from violent nightmares. Prazosin is being added. Which counselling is essential at initiation?",
      options: [
        "Use terazosin instead — its longer half-life makes first-dose syncope impossible",
        "Take the first dose at bedtime at a low starting dose — prazosin can cause first-dose hypotension with dizziness or syncope on standing",
        "Start with 4 mg in the morning so that maximum alpha-blockade is reached from day one",
        "Switch to clonidine, the established alpha-agonist choice for PTSD nightmares"
      ],
      correctIndex: 1,
      explanation: "Prazosin is the signature PTSD-nightmare agent, layered onto the SSRI backbone rather than replacing it, and Tripathi's first-dose effect — postural dizziness and fainting — is minimised by starting at 0.5-1 mg at bedtime, with tolerance to this effect developing later. Morning dosing and a 4 mg start maximise rather than avoid the hazard, clonidine is the sympatholytic of opioid withdrawal rather than the nightmare drug, and terazosin shares the class first-dose effect despite its longer half-life.",
      afterSectionId: "quick-facts",
    },
    {
      id: "adj-prz-03",
      question: "A 58-year-old man takes his first-ever 1 mg dose of prazosin at 8 am; thirty minutes later, standing at a bus stop, he collapses and faints. Which statement is correct?",
      options: [
        "This reflects prazosin-induced adrenal medullary discharge, so future doses require catecholamine-synthesis blockade",
        "This proves phaeochromocytoma, since alpha-blockade unmasks catecholamine storms in every older hypertensive",
        "This is the classic first-dose phenomenon of alpha-1 blockade — acute postural venous pooling, minimised by starting low at bedtime and waning with continued use",
        "This is an anaphylactoid reaction to the quinazoline structure, mandating permanent avoidance of all alpha-blockers"
      ],
      correctIndex: 2,
      explanation: "Tripathi describes the first-dose effect — postural hypotension with dizziness and fainting especially at initiation — minimised by a low starting dose taken at bedtime, with tolerance to this effect developing subsequently. It is a pharmacodynamic consequence of vasodilatation, not allergy, not adrenal discharge, and not proof of phaeochromocytoma (it is clonidine withdrawal that mimics one).",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "adj-prz-04",
      question: "Prazosin's pharmacokinetic profile is best summarised as:",
      options: [
        "Complete renal excretion of unchanged drug with a half-life of 24-30 hours",
        "Oral bioavailability near 90% with a half-life of 18-24 hours, allowing once-weekly dosing",
        "Hepatic elimination with a half-life of 10-12 minutes, requiring continuous infusion",
        "Oral bioavailability about 60%, extensive hepatic metabolism, plasma half-life 2-3 hours, single-dose effect lasting 6-8 hours"
      ],
      correctIndex: 3,
      explanation: "Tripathi lists prazosin as about 60% orally bioavailable, highly protein-bound, hepatically metabolised and excreted mainly in bile, with a plasma half-life of 2-3 hours and a single-dose effect of 6-8 hours — hence BD-TDS oral dosing. The renal-unchanged profile fits no alpha-blocker in the class, the near-90% bioavailability borrows terazosin's figure without its real 12-hour half-life, and no alpha-blocker needs an infusion.",
      afterSectionId: "timeline",
    },
    {
      id: "adj-prz-05",
      question: "A 62-year-old man with hypertension and bothersome prostatic obstructive symptoms (weak stream, residual urine) is considered for prazosin. What is the pharmacological rationale?",
      options: [
        "Prazosin blocks alpha-1 receptors in the bladder trigone and prostatic smooth muscle, improving urine flow, while its vascular alpha-1 blockade lowers the blood pressure",
        "Prazosin shrinks the hyperplastic gland by inhibiting 5-alpha-reductase, as finasteride does",
        "Prazosin relaxes prostatic smooth muscle by muscarinic blockade, as oxybutynin does",
        "Prazosin stimulates alpha-1 receptors in the prostate to raise bladder-neck tone"
      ],
      correctIndex: 0,
      explanation: "Tripathi notes prazosin blocks alpha-1 receptors in the bladder trigone and prostatic smooth muscle, improving flow and reducing residual urine, while the same vascular alpha-1 blockade treats the hypertension. The 5-alpha-reductase story is finasteride's androgen-synthesis mechanism, the muscarinic-blockade claim is antimuscarinic pharmacology that can actually worsen retention, and the alpha-1-stimulation claim reverses the direction of the drug's action.",
      afterSectionId: "quick-facts",
    },
    {
      id: "adj-prz-06",
      question: "Why does prazosin produce far less reflex tachycardia than phentolamine, although both lower blood pressure?",
      options: [
        "Phentolamine acts directly on vascular smooth muscle, which never recruits baroreflexes",
        "Prazosin's alpha-1 selectivity leaves prejunctional alpha-2 autoreceptors intact, so noradrenaline release is not increased; phentolamine also blocks alpha-2 and raises noradrenaline release",
        "Prazosin is a beta-agonist that deliberately accelerates the heart in a controlled way",
        "Prazosin stimulates vagal nuclei directly, more than doubling stroke volume"
      ],
      correctIndex: 1,
      explanation: "Prazosin's 1000:1 alpha-1 selectivity (Tripathi; Katzung calls it typically 1000-fold less potent at alpha-2) spares the prejunctional alpha-2 autoreceptors that normally restrain noradrenaline release, whereas phentolamine's alpha-2 blockade removes that brake and tachycardia follows. Phentolamine is a competitive alpha-antagonist rather than a direct vasodilator, and prazosin neither stimulates beta-receptors nor vagal nuclei.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "adj-prz-07",
      question: "An Indian hypertensive is prescribed MINIPRESS XL, one tablet at night. What is this formulation, and how is plain prazosin usually dosed?",
      options: [
        "MINIPRESS XL is clonidine 100 microgram in a weekly transdermal patch; oral clonidine runs 100-300 microgram three times daily",
        "MINIPRESS XL is an atenolol-plus-chlorthalidone fixed-dose combination taken each morning",
        "MINIPRESS XL is prazosin in a GITS (gastrointestinal therapeutic system) 2.5 and 5 mg once-daily tablet; plain prazosin (PRAZOPRES 0.5, 1, 2 mg) starts at 0.5-1 mg at bedtime, usual 1-4 mg BD-TDS",
        "MINIPRESS XL is a sustained-release terazosin 5 mg tablet; plain terazosin starts at 10 mg twice daily"
      ],
      correctIndex: 2,
      explanation: "Tripathi lists MINIPRESS XL as prazosin GITS 2.5 and 5 mg once daily, with conventional prazosin as PRAZOPRES 0.5, 1 and 2 mg — start 0.5-1 mg at bedtime, usual 1-4 mg BD or TDS. Terazosin is a separate molecule that is not marketed as MINIPRESS, the clonidine patch story is misplaced, and the atenolol combination is unrelated to this brand.",
      afterSectionId: "quick-facts",
    },
    {
      id: "adj-prz-08",
      question: "Beyond postural hypotension, which adverse effects are recognised with prazosin as an alpha-1 blocker?",
      options: [
        "Mydriasis, dry cough and hyperkalaemia",
        "Constipation, urinary retention and precipitation of angle-closure glaucoma",
        "Bronchospasm, bradycardia and cold peripheries from beta-2 blockade",
        "Miosis, nasal stuffiness and inhibition of ejaculation — milder than with non-selective alpha-blockers"
      ],
      correctIndex: 3,
      explanation: "Tripathi lists miosis, nasal stuffiness and inhibition of ejaculation among the milder alpha-blocking effects of prazosin. The bronchospasm-bradycardia cluster is propranolol's beta-blocker signature, the constipation-retention-glaucoma cluster is the anticholinergic toxidrome of benztropine-like drugs, and hyperkalaemia with dry cough maps to entirely different drug classes.",
      afterSectionId: "high-yield-summary",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Prazosin in two sentences.",
      answer: "Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal: the engine of trauma nightmares and hypervigilance. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Prazosin.",
      answer: "PTSD-associated nightmares and sleep disturbance, PTSD daytime hyperarousal (adjunct), Hypertension, Benign prostatic hyperplasia (symptomatic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Prazosin and how you would manage it.",
      answer: "Syncope with injury (first-dose/titration): The orthostatic window, especially in the elderly and on standing at night. Management: Bedtime dosing; nocturnal toileting care.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Prazosin require?",
      answer: "Blood pressure (orthostatic) (Baseline and during titration); Nightmare frequency (validated scale where possible) (Every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Prazosin that separates safe prescribers from unsafe ones.",
      answer: "The nightmare hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window; the pharmacokinetics IS the prescription.",
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
      description: "Everything: advanced reasoning, full prescriber guide, evidence, and references.",
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
      checkpoint: "You now know what Prazosin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Prazosin works, from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Prazosin safely: indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Prazosin.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Prazosin with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Prazosin.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Nightmare reduction within days of an effective dose.",
    ],
    ifItWorks: [
      "Continue Prazosin at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Prazosin (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Prazosin follow directly from its receptor and organ effects: predict them from the mechanism.",
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
        indication: "PTSD nightmares",
        starting: "1 mg at bedtime",
        titration: "Increase by 1-2 mg every 3-7 days (bedtime ± daytime dosing)",
        target: "2-10 mg at night (mean effective ~10 in trials)",
        max: "15-20 mg/day split",
      },
    ],
    dosageForms: ["Capsules/tablets 1, 2, 5 mg"],
    dosingTips: [
      "1 mg bedtime start, never a standing start.",
      "Titrate weekly toward the trial-proven range (up to 10 mg+).",
      "Bedtime timing is pharmacology.",
      "Pair with SSRI and trauma-focused therapy.",
    ],
    overdose: [
      "Overdose with Prazosin is managed supportively: no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Prazosin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 2-3 hours (short, hence the timing logic)..",
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
      "Targeted nightmare relief.",
      "Restores sleep architecture in responders.",
      "Cheap generics.",
    ],
    potentialDisadvantages: [
      "Orthostatic first-dose/titration window.",
      "Mixed RCT record (VA positive, PACT negative).",
      "Multiple daily dosing at higher doses.",
    ],
    primaryTargetSymptoms: ["PTSD trauma nightmares", "Night-time hyperarousal", "PTSD sleep disruption"],
    pearls: [
      "The nightmare hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window; the pharmacokinetics IS the prescription.",
      "First-dose syncope is the initiation ritual: 1 mg at bedtime, slow steps, never a standing start.",
      "The VA trials built the indication; PACT complicated it: practice retains prazosin as the nightmare drug with individualised expectations.",
      "Doses for PTSD (to 10-20 mg) exceed hypertension doses: the surprise for physicians crossing over.",
      "Complementary to SSRI and trauma-focused therapy: the noradrenergic leg of the PTSD stool.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017); facts are paraphrased, not reproduced.",
  ],
};
