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
  tagline: "The alpha-1 blocker that quiets nightmares — PTSD's noradrenergic night-time drug.",
  summary: "Prazosin is a postsynaptic alpha-1 adrenergic antagonist that crosses into the brain and dampens the noradrenergic storm of PTSD: trauma nightmares, night terrors, and hyperarousal. Its psychiatric identity is entirely the PTSD nightmare niche — supported by the classic VA trials and complicated by the later PACT trial's negative result, with clinical practice retaining it as the nightmare specialist. First-dose orthostatic hypotension and the nightmare-hour timing of dosing define its practical use.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Prazosin — from its molecular target (Postsynaptic alpha-1 adrenergic receptors (antagonist — brain-penetrant)) to clinical effect.",
    "List the FDA-approved and off-label uses of Prazosin.",
    "Predict the common and serious side effects of Prazosin from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Prazosin.",
    "Compare Prazosin with other alpha-1 blockers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal — the engine of trauma nightmares and hypervigilance.",
    molecularTarget: "Postsynaptic alpha-1 adrenergic receptors (antagonist — brain-penetrant)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal — the engine of trauma nightmares and hypervigilance.",
      "The target engagement translates into the clinical effect.",
      "Practical use follows the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 2-3 hours (short — hence the timing logic). — see mechanism and prescriber sections.",
    halfLife: "2-3 hours (short — hence the timing logic).",
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
    caption: "Modulating noradrenergic signalling at its receptor — a mechanism-driven route to symptom control.",
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
      description: "The first-dose syncope phenomenon — dose at bedtime initially.",
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
      description: "The orthostatic window — especially in the elderly and on standing at night.",
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
  patientExplanation: "Prazosin is a blood-pressure medicine that also quiets the brain's alarm chemical, noradrenaline — which in post-traumatic stress drives nightmares and night waking. Taken at bedtime, it can dramatically reduce trauma dreams. The first doses can cause dizziness on standing, so it is started at night at a small dose and built up slowly.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Prazosin builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The nightmare hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window — the pharmacokinetics IS the prescription.",
    "First-dose syncope is the initiation ritual: 1 mg at bedtime, slow steps, never a standing start.",
    "The VA trials built the indication; PACT complicated it — practice retains prazosin as the nightmare drug with individualised expectations.",
    "Doses for PTSD (to 10-20 mg) exceed hypertension doses — the surprise for physicians crossing over.",
    "Complementary to SSRI and trauma-focused therapy — the noradrenergic leg of the PTSD stool.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Prazosin: Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal — the engine of trauma nightmares and hypervigilance.",
        "Uses of Prazosin: PTSD-associated nightmares and sleep disturbance; PTSD daytime hyperarousal (adjunct); Hypertension; Benign prostatic hyperplasia (symptomatic)",
        "Mechanism: central postsynaptic ALPHA-1 antagonist — noradrenergic hyperarousal dampening.",
        "Signature indication: PTSD trauma nightmares and sleep disruption (off-label, guideline-supported).",
      ],
      practical: [
        "Prescribe Prazosin for ptsd-associated nightmares and sleep disturbance with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure (orthostatic) (Baseline and during titration); Nightmare frequency (validated scale where possible) (Every review)",
      ],
      longAnswer: [
        "Prazosin: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: central postsynaptic ALPHA-1 antagonist — noradrenergic hyperarousal dampening.",
        "Signature indication: PTSD trauma nightmares and sleep disruption (off-label, guideline-supported).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: central postsynaptic ALPHA-1 antagonist — noradrenergic hyperarousal dampening.",
        "Signature indication: PTSD trauma nightmares and sleep disruption (off-label, guideline-supported).",
        "First-dose orthostatic hypotension — bedtime 1 mg start, slow titration.",
        "PTSD dosing 2-10+ mg (exceeds hypertension dosing).",
        "Short half-life — bedtime timing targets the nightmare window.",
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
        "A patient on Prazosin develops syncope with injury (first-dose/titration) — next best step?",
        "When to choose Prazosin over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Postsynaptic alpha-1 adrenergic receptors (antagonist — brain-penetrant)",
        "Most common side effects: First-dose orthostatic hypotension, Dizziness and palpitations, Drowsiness and dry mouth",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The nightmare hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window — the pharmacokinetics IS the prescription.",
        "First-dose syncope is the initiation ritual: 1 mg at bedtime, slow steps, never a standing start.",
        "The VA trials built the indication; PACT complicated it — practice retains prazosin as the nightmare drug with individualised expectations.",
        "Doses for PTSD (to 10-20 mg) exceed hypertension doses — the surprise for physicians crossing over.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: central postsynaptic ALPHA-1 antagonist — noradrenergic hyperarousal dampening.",
    "Signature indication: PTSD trauma nightmares and sleep disruption (off-label, guideline-supported).",
    "First-dose orthostatic hypotension — bedtime 1 mg start, slow titration.",
    "PTSD dosing 2-10+ mg (exceeds hypertension dosing).",
    "Short half-life — bedtime timing targets the nightmare window.",
    "Original indication: hypertension.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — ptsd-associated nightmares and sleep disturbance",
      presentation: "A patient presenting with ptsd-associated nightmares and sleep disturbance, started on Prazosin.",
      history: "A adult patient presents with a ptsd-associated nightmares and sleep disturbance picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with ptsd-associated nightmares and sleep disturbance; physical examination and baseline investigations are unremarkable.",
      diagnosis: "PTSD-associated nightmares and sleep disturbance. Differentials are considered and excluded clinically.",
      rationale: "Prazosin is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Alpha-1 Blocker) with strong evidence in this condition.",
      management: "Started at 1 mg at bedtime, titrated to 2-10 mg at night (mean effective ~10 in trials) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Prazosin takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Alpha-1 Blocker vs related agents — orientation table",
      primaryDrug: "Prazosin",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Postsynaptic alpha-1 adrenergic receptors (antagonist — brain-penetrant)",
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
          primaryValue: "The PTSD nightmare specialist — noradrenergic night-time blockade",
          comparisons: [
            {
              drug: "Prazosin",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Prazosin is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Prazosin reaches peak plasma concentration and begins acting at its molecular target (Postsynaptic alpha-1 adrenergic receptors (antagonist — brain-penetrant)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
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
      answer: "Nightmare reduction within days of an effective dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Prazosin?",
      answer: "The most frequently reported effects are: First-dose orthostatic hypotension, Dizziness and palpitations, Drowsiness and dry mouth, Nasal congestion. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Prazosin suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Prazosin habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Prazosin exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Prazosin during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Prazosin may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
      label: "Postsynaptic alpha-1 adrenergic receptors (antagonist — brain-penetrant)",
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
      label: "Patient Guide — Prazosin",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The alpha-1 blocker that quiets nightmares — PTSD's noradrenergic night-time drug.",
    summary: "Prazosin is a prescription medicine used to treat ptsd-associated nightmares and sleep disturbance. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Prazosin is a blood-pressure medicine that also quiets the brain's alarm chemical, noradrenaline — which in post-traumatic stress drives nightmares and night waking. Taken at bedtime, it can dramatically reduce trauma dreams. The first doses can cause dizziness on standing, so it is started at night at a small dose and built up slowly.",
    sideEffects: "The most common side effects are: first-dose orthostatic hypotension, dizziness and palpitations, drowsiness and dry mouth, nasal congestion. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Syncope with injury (first-dose/titration) and Priapism (rare). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure (orthostatic) (baseline and during titration); nightmare frequency (validated scale where possible) (every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other antihypertensives and phosphodiesterase-5 inhibitors (sildenafil class), Tricyclic antidepressants, Beta-blockers. Avoid alcohol unless your doctor says it is safe.",
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
      "PTSD clinics — the nightmare add-on to SSRI/trauma therapy.",
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
        distinguishing: "The PTSD nightmare specialist — noradrenergic night-time blockade",
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
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Prazosin in two sentences.",
      answer: "Prazosin blocks central alpha-1 receptors, reducing noradrenergic hyperarousal — the engine of trauma nightmares and hypervigilance. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Prazosin.",
      answer: "PTSD-associated nightmares and sleep disturbance, PTSD daytime hyperarousal (adjunct), Hypertension, Benign prostatic hyperplasia (symptomatic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Prazosin and how you would manage it.",
      answer: "Syncope with injury (first-dose/titration): The orthostatic window — especially in the elderly and on standing at night. Management: Bedtime dosing; nocturnal toileting care.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Prazosin require?",
      answer: "Blood pressure (orthostatic) (Baseline and during titration); Nightmare frequency (validated scale where possible) (Every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Prazosin that separates safe prescribers from unsafe ones.",
      answer: "The nightmare hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window — the pharmacokinetics IS the prescription.",
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
      checkpoint: "You now know what Prazosin is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Prazosin works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Prazosin safely — indications, side effects, contraindications, and monitoring are mapped.",
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
      "Adverse effects of Prazosin follow directly from its receptor and organ effects — predict them from the mechanism.",
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
      "1 mg bedtime start — never a standing start.",
      "Titrate weekly toward the trial-proven range (up to 10 mg+).",
      "Bedtime timing is pharmacology.",
      "Pair with SSRI and trauma-focused therapy.",
    ],
    overdose: [
      "Overdose with Prazosin is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Prazosin is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 2-3 hours (short — hence the timing logic)..",
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
      "The nightmare hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window — the pharmacokinetics IS the prescription.",
      "First-dose syncope is the initiation ritual: 1 mg at bedtime, slow steps, never a standing start.",
      "The VA trials built the indication; PACT complicated it — practice retains prazosin as the nightmare drug with individualised expectations.",
      "Doses for PTSD (to 10-20 mg) exceed hypertension doses — the surprise for physicians crossing over.",
      "Complementary to SSRI and trauma-focused therapy — the noradrenergic leg of the PTSD stool.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
