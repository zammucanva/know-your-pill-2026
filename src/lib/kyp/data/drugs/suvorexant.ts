import type { Drug } from "../types";

/**
 * Suvorexant — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), suvorexant monograph (book p. 117)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const suvorexant: Drug = {
  /* ---- Identity ---- */
  slug: "suvorexant",
  genericName: "Suvorexant",
  brandNames: ["Belsomra"],
  drugClass: "orexin-antagonist",
  drugClassLabel: "DORA",
  drugClassFullName: "Dual Orexin Receptor Antagonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Orexin Antagonists", "Suvorexant"],
  /* ---- Hero / summary ---- */
  tagline: "The orexin-blocker — sleep by turning down the brain's wake switch rather than forcing sedation.",
  summary: "Suvorexant is the first dual orexin receptor antagonist (DORA): it blocks the orexin/hypocretin system — the neuropeptidergic 'wake switch' — producing sleep onset and maintenance by reducing wake drive physiologically. GABA-free pharmacology means no dependence signal, REM-related adverse effects (sleep paralysis, hypnagogic hallucinations, cataplexy-like weakness) are its signature, and next-day somnolence is its dose-limitation. A modern alternative for both onset and maintenance insomnia.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Suvorexant — from its molecular target (Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system) to clinical effect.",
    "List the FDA-approved and off-label uses of Suvorexant.",
    "Predict the common and serious side effects of Suvorexant from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Suvorexant.",
    "Compare Suvorexant with other doras and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Dual orexin receptor antagonist: blocks the orexin/hypocretin wake-promoting system — reducing wake drive instead of enhancing GABA sedation.",
    molecularTarget: "Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Suvorexant is the first dual orexin receptor antagonist (DORA): it blocks the orexin/hypocretin system — the neuropeptidergic 'wake switch' — producing sleep onset and maintenance by reducing wake drive physiologically — the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 12 hours (long — drives next-day somnolence). — see mechanism and prescriber sections.",
    halfLife: "About 12 hours (long — drives next-day somnolence).",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Suvorexant",
        sublabel: "Orexin receptor antagonist",
        variant: "inhibit",
      },
      {
        id: "orx",
        label: "Orexin (hypocretin)",
        sublabel: "Wake-promoting neuropeptide",
        variant: "target",
      },
      {
        id: "wake",
        label: "Wake drive",
        sublabel: "Reduced at night",
        variant: "process",
      },
      {
        id: "sleep",
        label: "Sleep onset & maintenance",
        sublabel: "Improved",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "orx",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "orx",
        to: "wake",
        label: "dampens",
      },
      {
        from: "wake",
        to: "sleep",
        label: "permits",
      },
    ],
    caption: "Instead of forcing sleep with GABA, orexin antagonists turn down the brain's wake switch — a physiologically targeted route into sleep.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Insomnia — sleep onset and maintenance",
      status: "fda-approved",
      description: "10–20 mg nightly; GABA-free alternative for continuous use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Suvorexant must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Strong CYP3A4 inhibitors",
      severity: "absolute",
      rationale: "Raise levels markedly — the label contraindication.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Complex sleep behaviours",
      text: "Class-of-hypnotics warning: sleep-walking/driving/eating reported — stop on any event.",
    },
    {
      title: "CNS depressant co-administration",
      text: "Additive next-day somnolence with alcohol and other depressants.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Next-day somnolence",
      frequency: "common",
      severity: "moderate",
      description: "The dose-limiting effect — worse at 20 mg and in the elderly.",
      management: "Start 10 mg; 7–8 h in bed.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Class-typical.",
      management: "Reassurance.",
    },
    {
      name: "Abnormal dreams",
      frequency: "common",
      severity: "mild",
      description: "REM-modulating pharmacology.",
      management: "Reassurance; review if distressing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Sleep paralysis / hypnagogic hallucinations",
      frequency: "uncommon",
      severity: "moderate",
      description: "REM-signature effects — frightening but benign; the DORA fingerprint.",
      management: "Counsel in advance; usually diminish.",
    },
    {
      name: "Cataplexy-like weakness",
      frequency: "rare",
      severity: "moderate",
      description: "Orexin is the narcolepsy system — blocking it can blur into narcolepsy-like phenomena in predisposed patients.",
      management: "Stop if cataplexy-like events occur.",
    },
    {
      name: "Complex sleep behaviours",
      frequency: "uncommon",
      severity: "severe",
      description: "Class boxed warning.",
      management: "Stop permanently.",
    },
    {
      name: "Worsening depression/suicidal ideation",
      frequency: "uncommon",
      severity: "severe",
      description: "Reported in depression trials — monitor mood.",
      management: "Review; stop if worsening.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Next-day somnolence",
      frequency: "Every early review",
      rationale: "The dose-limiting adverse effect.",
    },
    {
      parameter: "REM-signature phenomena review",
      frequency: "Every review",
      rationale: "Sleep paralysis/hallucinations — counsel in advance.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol and CNS depressants",
      severity: "major",
      mechanism: "Additive next-day somnolence.",
      action: "Counsel.",
    },
    {
      drug: "Strong CYP3A4 inhibitors",
      severity: "contraindicated",
      mechanism: "Raise levels markedly — the label contraindication.",
      action: "Avoid.",
    },
    {
      drug: "CYP3A4 inducers",
      severity: "major",
      mechanism: "Lose efficacy.",
      action: "Avoid combination.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; non-pharmacological care first in pregnancy.",
    lactation: "Unknown — avoid while breastfeeding pending data.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Suvorexant helps you sleep by turning down the brain's own 'wake switch' — a natural chemical system called orexin — rather than by force-sedating the brain like older sleeping pills. Some people experience brief sleep paralysis or vivid dream-like images while falling asleep: these are known, harmless effects of this medicine class.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Suvorexant builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Anti-wake, not pro-sedation: the DORA concept — turning the orexin switch down instead of pushing GABA.",
    "The REM signatures (sleep paralysis, hypnagogic hallucinations) map onto orexin's role in narcolepsy — pre-counselling turns fright into trivia.",
    "No dependence signal in trials to date — a candidate for longer-term use alongside ramelteon.",
    "10 mg start is near-mandatory: next-day somnolence is the dose-limiting effect at 20 mg.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Suvorexant: Dual orexin receptor antagonist: blocks the orexin/hypocretin wake-promoting system — reducing wake drive instead of enhancing GABA sedation.",
        "Uses of Suvorexant: Insomnia — sleep onset and maintenance",
        "Mechanism: dual OREXIN receptor antagonist (OX1/OX2) — the first DORA.",
        "GABA-free — no dependence signal; REM-signature effects (sleep paralysis, hypnagogic hallucinations).",
      ],
      practical: [
        "Prescribe Suvorexant for insomnia — sleep onset and maintenance with dose, timing, and duration.",
        "Outline the monitoring plan: Next-day somnolence (Every early review); REM-signature phenomena review (Every review)",
      ],
      longAnswer: [
        "Suvorexant: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: dual OREXIN receptor antagonist (OX1/OX2) — the first DORA.",
        "GABA-free — no dependence signal; REM-signature effects (sleep paralysis, hypnagogic hallucinations).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: dual OREXIN receptor antagonist (OX1/OX2) — the first DORA.",
        "GABA-free — no dependence signal; REM-signature effects (sleep paralysis, hypnagogic hallucinations).",
        "Onset AND maintenance insomnia; 10–20 mg (start 10).",
        "3A4 metabolism — inhibitors contraindicated, inducers lose efficacy.",
        "Next-day somnolence is dose-limiting.",
      ],
      pyqConcepts: [
        "Mechanism/target of Suvorexant",
        "Key adverse effect: Sleep paralysis / hypnagogic hallucinations",
        "Dosing and titration of Suvorexant",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Suvorexant develops sleep paralysis / hypnagogic hallucinations — next best step?",
        "When to choose Suvorexant over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system",
        "Most common side effects: Next-day somnolence, Headache, Abnormal dreams",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Anti-wake, not pro-sedation: the DORA concept — turning the orexin switch down instead of pushing GABA.",
        "The REM signatures (sleep paralysis, hypnagogic hallucinations) map onto orexin's role in narcolepsy — pre-counselling turns fright into trivia.",
        "No dependence signal in trials to date — a candidate for longer-term use alongside ramelteon.",
        "10 mg start is near-mandatory: next-day somnolence is the dose-limiting effect at 20 mg.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: dual OREXIN receptor antagonist (OX1/OX2) — the first DORA.",
    "GABA-free — no dependence signal; REM-signature effects (sleep paralysis, hypnagogic hallucinations).",
    "Onset AND maintenance insomnia; 10–20 mg (start 10).",
    "3A4 metabolism — inhibitors contraindicated, inducers lose efficacy.",
    "Next-day somnolence is dose-limiting.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — insomnia — sleep onset and maintenance",
      presentation: "A patient presenting with insomnia — sleep onset and maintenance, started on Suvorexant.",
      history: "A adult patient presents with a insomnia — sleep onset and maintenance picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with insomnia — sleep onset and maintenance; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Insomnia — sleep onset and maintenance. Differentials are considered and excluded clinically.",
      rationale: "Suvorexant is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (DORA) with strong evidence in this condition.",
      management: "Started at 10 mg within 30 min of bedtime, titrated to 10–20 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Suvorexant takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "DORA vs related agents — orientation table",
      primaryDrug: "Suvorexant",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system",
          comparisons: [
            {
              drug: "Suvorexant",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not associated with weight gain.",
          comparisons: [
            {
              drug: "Suvorexant",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High for the intended duration.",
          comparisons: [
            {
              drug: "Suvorexant",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The anti-wake hypnotic — GABA-free sleep with REM signatures",
          comparisons: [
            {
              drug: "Suvorexant",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Suvorexant is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Suvorexant reaches peak plasma concentration and begins acting at its molecular target (Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (next-day somnolence, headache, abnormal dreams). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Within 30 minutes; steady state ~1 week.)",
      title: "Therapeutic effect builds",
      description: "Within 30 minutes; steady state ~1 week. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Suvorexant is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Suvorexant take to work?",
      answer: "Within 30 minutes; steady state ~1 week.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Suvorexant?",
      answer: "The most frequently reported effects are: Next-day somnolence, Headache, Abnormal dreams. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Suvorexant suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Suvorexant habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Suvorexant exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Suvorexant during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Suvorexant may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "AASM Clinical Practice Guideline (Chronic Insomnia)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), suvorexant monograph, p. 117",
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
        source: "FDA Prescribing Information for Belsomra (Suvorexant)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for suvorexant — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Suvorexant",
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
      name: "Insomnia — sleep onset and maintenance",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Suvorexant",
      type: "drug",
      href: "/drugs/suvorexant",
      note: "The drug you're reading about",
    },
    {
      label: "DORA",
      type: "class",
      href: "#mechanism",
      note: "Dual Orexin Receptor Antagonist",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Insomnia — sleep onset and maintenance",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Sleep paralysis / hypnagogic hallucinations",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Cataplexy-like weakness",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Next-day somnolence",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Suvorexant",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The orexin-blocker — sleep by turning down the brain's wake switch rather than forcing sedation.",
    summary: "Suvorexant is a prescription medicine used to treat insomnia — sleep onset and maintenance. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Suvorexant helps you sleep by turning down the brain's own 'wake switch' — a natural chemical system called orexin — rather than by force-sedating the brain like older sleeping pills. Some people experience brief sleep paralysis or vivid dream-like images while falling asleep: these are known, harmless effects of this medicine class.",
    sideEffects: "The most common side effects are: next-day somnolence, headache, abnormal dreams. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Sleep paralysis / hypnagogic hallucinations and Cataplexy-like weakness. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: next-day somnolence (every early review); rem-signature phenomena review (every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Alcohol and CNS depressants, Strong CYP3A4 inhibitors, CYP3A4 inducers. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Suvorexant (limited availability)",
        manufacturer: "imported/special",
        strengths: "10, 20 mg",
      },
    ],
    typicalDoses: "10–20 mg nightly.",
    prescribingScenarios: [
      "Insomnia where dependence risk rules out Z-drugs/benzos.",
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
    patientCounselling: [
      "Report any brief paralysis or dream-images at sleep onset — expected and harmless.",
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
    familyName: "Orexin Antagonists",
    members: [
      {
        name: "Suvorexant",
        slug: "suvorexant",
        relationship: "This guide",
        distinguishing: "The anti-wake hypnotic — GABA-free sleep with REM signatures",
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
      question: "Which molecular target does Suvorexant primarily act on?",
      options: [
        "Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Suvorexant acts primarily at Orexin OX1 and OX2 receptors (dual antagonist) — the wake-promoting neuropeptide system. Dual orexin receptor antagonist: blocks the orexin/hypocretin wake-promoting system — reducing wake drive instead of enhancing GABA sedation.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Suvorexant?",
      options: ["Next-day somnolence", "Headache", "Abnormal dreams", "Weight gain"],
      correctIndex: 0,
      explanation: "Next-day somnolence — The dose-limiting effect — worse at 20 mg and in the elderly.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Suvorexant for insomnia (onset + maintenance)?",
      options: ["10–20 mg", "20 mg", "10–20 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For insomnia (onset + maintenance): start 10 mg within 30 min of bedtime, target 10–20 mg, maximum 20 mg. Increase to 20 mg only if 10 mg inadequate and tolerated",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Suvorexant in two sentences.",
      answer: "Dual orexin receptor antagonist: blocks the orexin/hypocretin wake-promoting system — reducing wake drive instead of enhancing GABA sedation. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Suvorexant.",
      answer: "Insomnia — sleep onset and maintenance. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Suvorexant and how you would manage it.",
      answer: "Sleep paralysis / hypnagogic hallucinations: REM-signature effects — frightening but benign; the DORA fingerprint. Management: Counsel in advance; usually diminish.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Suvorexant require?",
      answer: "Next-day somnolence (Every early review); REM-signature phenomena review (Every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Suvorexant that separates safe prescribers from unsafe ones.",
      answer: "Anti-wake, not pro-sedation: the DORA concept — turning the orexin switch down instead of pushing GABA.",
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
      checkpoint: "You now know what Suvorexant is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Suvorexant works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Suvorexant safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Suvorexant.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Suvorexant with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Suvorexant.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Within 30 minutes; steady state ~1 week.",
    ],
    ifItWorks: [
      "Continue Suvorexant at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Suvorexant (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Suvorexant follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Not associated with weight gain.",
    sedation: "High for the intended duration.",
    dosing: [
      {
        indication: "Insomnia (onset + maintenance)",
        starting: "10 mg within 30 min of bedtime",
        titration: "Increase to 20 mg only if 10 mg inadequate and tolerated",
        target: "10–20 mg",
        max: "20 mg",
      },
    ],
    dosageForms: ["Tablets 5, 10, 15, 20 mg"],
    dosingTips: [
      "10 mg start; escalate only if needed.",
      "Pre-counsel on sleep paralysis/hallucinations.",
      "7–8 h in bed — the 12-h half-life demands it.",
    ],
    overdose: [
      "Overdose with Suvorexant is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Suvorexant is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 12 hours (long — drives next-day somnolence)..",
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
    potentialAdvantages: ["GABA-free; no dependence signal.", "Onset + maintenance cover.", "Physiological sleep architecture."],
    potentialDisadvantages: ["Next-day somnolence (12-h half-life).", "REM-signature effects.", "3A4 interaction walls.", "Cost."],
    primaryTargetSymptoms: [
      "Sleep-onset and maintenance insomnia (GABA-free option)",
    ],
    pearls: [
      "Anti-wake, not pro-sedation: the DORA concept — turning the orexin switch down instead of pushing GABA.",
      "The REM signatures (sleep paralysis, hypnagogic hallucinations) map onto orexin's role in narcolepsy — pre-counselling turns fright into trivia.",
      "No dependence signal in trials to date — a candidate for longer-term use alongside ramelteon.",
      "10 mg start is near-mandatory: next-day somnolence is the dose-limiting effect at 20 mg.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
