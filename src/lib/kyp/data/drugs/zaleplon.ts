import type { Drug } from "../types";

/**
 * Zaleplon — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), zaleplon monograph (book p. 137)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const zaleplon: Drug = {
  /* ---- Identity ---- */
  slug: "zaleplon",
  genericName: "Zaleplon",
  brandNames: ["Sonata", "Starnoc"],
  drugClass: "non-benzodiazepine-hypnotic",
  drugClassLabel: "Z-Drug",
  drugClassFullName: "Non-Benzodiazepine Hypnotic (Z-Drug)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Non-Benzodiazepine Hypnotics", "Zaleplon"],
  /* ---- Hero / summary ---- */
  tagline: "The ultrashort Z-drug — a middle-of-the-night option that clears before morning.",
  summary: "Zaleplon is the shortest-acting Z-drug (half-life ~1 hour): a pyrazolopyrimidine used for sleep onset and — its unique niche — middle-of-the-night dosing, because levels are near-zero 4–5 hours later. No active metabolite, minimal morning residue, and the class-standard boxed warnings complete the profile.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Zaleplon — from its molecular target (GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class) to clinical effect.",
    "List the FDA-approved and off-label uses of Zaleplon.",
    "Predict the common and serious side effects of Zaleplon from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Zaleplon.",
    "Compare Zaleplon with other z-drugs and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Non-benzodiazepine pyrazolopyrimidine alpha-1-selective GABA-A PAM — the Z-class mechanism at the shortest duration.",
    molecularTarget: "GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Zaleplon is the shortest-acting Z-drug (half-life ~1 hour): a pyrazolopyrimidine used for sleep onset and — its unique niche — middle-of-the-night dosing, because levels are near-zero 4–5 hours later — the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 1 hour. — see mechanism and prescriber sections.",
    halfLife: "About 1 hour.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "gaba",
        label: "GABA",
        sublabel: "Inhibitory neurotransmitter",
        variant: "input",
      },
      {
        id: "a1",
        label: "GABA-A α1 receptor",
        sublabel: "Sleep-promoting subtype",
        variant: "target",
      },
      {
        id: "drug",
        label: "Zaleplon",
        sublabel: "α1-selective modulator",
        variant: "process",
      },
      {
        id: "sleep",
        label: "Sleep onset",
        sublabel: "Faster sleep initiation",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "gaba",
        to: "a1",
        label: "binds",
      },
      {
        from: "drug",
        to: "a1",
        label: "selectively enhances",
        type: "stimulate",
      },
      {
        from: "a1",
        to: "sleep",
        label: "promotes",
      },
    ],
    caption: "Z-drugs aim GABA where sleep is generated (the α1 subtype), retaining hypnotic efficacy with less anxiolysis, amnesia, and dependence than full benzodiazepines.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Insomnia — sleep onset",
      status: "fda-approved",
      description: "5–20 mg at bedtime.",
    },
    {
      name: "Middle-of-the-night awakening (4+ h before wake time)",
      status: "off-label",
      description: "The unique niche: dosing at 3 am is defensible with zaleplon because clearance beats morning.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Zaleplon must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Complex sleep behaviours",
      text: "Class warning — stop on any event.",
    },
    {
      title: "CNS depressant co-administration",
      text: "Additive sedation.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Somnolence and dizziness",
      frequency: "common",
      severity: "mild",
      description: "Brief — matching the 1-hour half-life.",
      management: "Reassurance.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Class-typical.",
    },
    {
      name: "Rebound insomnia",
      frequency: "uncommon",
      severity: "moderate",
      description: "Less than longer Z-drugs given the ultrashort action.",
      management: "Warn; taper if regular.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Complex sleep behaviours",
      frequency: "rare",
      severity: "severe",
      description: "Class boxed warning.",
      management: "Stop.",
    },
    {
      name: "Driving impairment after middle-of-night dosing",
      frequency: "uncommon",
      severity: "severe",
      description: "The 4-hour rule: dose only if ≥ 4 h before driving.",
      management: "Counsel on the rule.",
    },
    {
      name: "Dependence",
      frequency: "uncommon",
      severity: "severe",
      description: "Class risk.",
      management: "Short courses.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Morning impairment / hangover",
      frequency: "Every review",
      rationale: "Next-day driving and safety impairment.",
    },
    {
      parameter: "Complex sleep behaviours",
      frequency: "Ask at every review",
      rationale: "Sleep-walking/driving/eating — stop the drug if reported.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol and CNS depressants",
      severity: "contraindicated",
      mechanism: "Additive sedation; complex sleep behaviours reported with z-drugs.",
      action: "Avoid the combination.",
    },
    {
      drug: "Ketoconazole and erythromycin (strong CYP3A4 inhibitors)",
      severity: "major",
      mechanism: "Raise zaleplon levels well beyond the intended ultra-short profile.",
      action: "Dose reduction; prefer an alternative hypnotic.",
    },
    {
      drug: "Cimetidine",
      severity: "moderate",
      mechanism: "Inhibits zaleplon metabolism (aldehyde oxidase and 3A4) and roughly doubles exposure.",
      action: "Use a lower dose or switch acid suppression to a PPI.",
    },
  ],
  pregnancy: {
    summary: "Data in human pregnancy are limited. The decision to continue or stop balances the risk of untreated illness against possible drug exposure — for serious psychiatric illness, relapse prevention usually outweighs fetal risk. Involve obstetrics early and never stop abruptly without a plan.",
    lactation: "Small amounts may pass into breast milk. Decisions are individualised — monitor the infant for sedation and poor feeding, and discuss with your doctor.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Zaleplon is an ultra-short sleeping tablet: it helps you fall asleep again and is essentially gone from the body within about four hours — which makes it the one medicine of its kind that can occasionally be taken in the middle of the night without morning grogginess, provided at least four hours remain before you must drive.",
  patientEducationPoints: [
    "Take it only when you can spend a full 7–8 hours in bed.",
    "Do not drive the next morning if you still feel drowsy.",
    "Stop and call your doctor if you sleep-walk, sleep-drive, or eat while asleep.",
    "Keep the course short — these medicines are for intermittent or short-term use.",
    "Benefit from Zaleplon builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The 4-hour rule: zaleplon at 3 am is cleared by 7 — the only hypnotic with a defensible middle-of-the-night label-adjacent niche.",
    "Ultrashort = no maintenance cover: pure onset drug (or MOTN drug).",
    "No active metabolite — the cleanest morning of the class.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Zaleplon: Non-benzodiazepine pyrazolopyrimidine alpha-1-selective GABA-A PAM — the Z-class mechanism at the shortest duration.",
        "Uses of Zaleplon: Insomnia — sleep onset; Middle-of-the-night awakening (4+ h before wake time)",
        "Pyrazolopyrimidine Z-drug; half-life ~1 HOUR — the shortest.",
        "Niche: middle-of-the-night dosing (≥ 4 h before wake/drive).",
      ],
      practical: [
        "Prescribe Zaleplon for insomnia — sleep onset with dose, timing, and duration.",
        "Outline the monitoring plan: Morning impairment / hangover (Every review); Complex sleep behaviours (Ask at every review)",
      ],
      longAnswer: [
        "Zaleplon: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Pyrazolopyrimidine Z-drug; half-life ~1 HOUR — the shortest.",
        "Niche: middle-of-the-night dosing (≥ 4 h before wake/drive).",
      ],
    },
    neetPg: {
      highYield: [
        "Pyrazolopyrimidine Z-drug; half-life ~1 HOUR — the shortest.",
        "Niche: middle-of-the-night dosing (≥ 4 h before wake/drive).",
        "No active metabolite; minimal morning residue.",
        "Dose 5–20 mg (5 mg elderly).",
        "Z-drugs: GABA-A alpha-1-selective PAMs — hypnotic without full benzodiazepine breadth.",
      ],
      pyqConcepts: [
        "Mechanism/target of Zaleplon",
        "Key adverse effect: Complex sleep behaviours",
        "Dosing and titration of Zaleplon",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Zaleplon develops complex sleep behaviours — next best step?",
        "When to choose Zaleplon over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class",
        "Most common side effects: Somnolence and dizziness, Headache, Rebound insomnia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The 4-hour rule: zaleplon at 3 am is cleared by 7 — the only hypnotic with a defensible middle-of-the-night label-adjacent niche.",
        "Ultrashort = no maintenance cover: pure onset drug (or MOTN drug).",
        "No active metabolite — the cleanest morning of the class.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Pyrazolopyrimidine Z-drug; half-life ~1 HOUR — the shortest.",
    "Niche: middle-of-the-night dosing (≥ 4 h before wake/drive).",
    "No active metabolite; minimal morning residue.",
    "Dose 5–20 mg (5 mg elderly).",
    "Z-drugs: GABA-A alpha-1-selective PAMs — hypnotic without full benzodiazepine breadth.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — insomnia — sleep onset",
      presentation: "A patient presenting with insomnia — sleep onset, started on Zaleplon.",
      history: "A adult patient presents with a insomnia — sleep onset picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with insomnia — sleep onset; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Insomnia — sleep onset. Differentials are considered and excluded clinically.",
      rationale: "Zaleplon is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Z-Drug) with strong evidence in this condition.",
      management: "Started at 5–10 mg at bedtime (5 mg elderly/hepatic), titrated to 5–20 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Zaleplon takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Z-Drug comparison — choosing within the class",
      primaryDrug: "Zaleplon",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "See full guide",
            },
            {
              drug: "Eszopiclone",
              value: "See full guide",
            },
            {
              drug: "Zopiclone",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 1 hour.",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "—",
            },
            {
              drug: "Eszopiclone",
              value: "—",
            },
            {
              drug: "Zopiclone",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not associated with weight gain.",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "—",
            },
            {
              drug: "Eszopiclone",
              value: "Not associated with weight gain.",
            },
            {
              drug: "Zopiclone",
              value: "Not associated with weight gain.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High for the intended duration.",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "High for 2–3 hours — the intended effect; morning residue is the adverse effect.",
            },
            {
              drug: "Eszopiclone",
              value: "High for the intended duration.",
            },
            {
              drug: "Zopiclone",
              value: "High for the intended duration.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Middle-of-the-night dosing — cleared before morning",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "Sleep onset in a non-benzodiazepine molecule — the default Z-drug",
            },
            {
              drug: "Eszopiclone",
              value: "The 6-month-trial Z-drug with maintenance cover",
            },
            {
              drug: "Zopiclone",
              value: "The Commonwealth Z-drug — 5-hour cover with taste signature",
            },
          ],
        },
      ],
      takeaway: "All non-benzodiazepine hypnotics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Zaleplon reaches peak plasma concentration and begins acting at its molecular target (GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (somnolence and dizziness, headache, rebound insomnia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (15–30 minutes.)",
      title: "Therapeutic effect builds",
      description: "15–30 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Zaleplon is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Zaleplon take to work?",
      answer: "15–30 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Zaleplon?",
      answer: "The most frequently reported effects are: Somnolence and dizziness, Headache, Rebound insomnia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Zaleplon suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Zaleplon habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Zaleplon exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Zaleplon during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Zaleplon may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), zaleplon monograph, p. 137",
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
        source: "FDA Prescribing Information for Sonata (Zaleplon)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for zaleplon — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Zaleplon",
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
      name: "Zolpidem",
      slug: "zolpidem",
      drugClass: "Z-Drug",
      relationship: "Same class (Z-Drug)",
    },
    {
      name: "Eszopiclone",
      slug: "eszopiclone",
      drugClass: "Z-Drug",
      relationship: "Same class (Z-Drug)",
    },
    {
      name: "Zopiclone",
      slug: "zopiclone",
      drugClass: "Z-Drug",
      relationship: "Same class (Z-Drug)",
    },
  ],
  relatedConditions: [
    {
      name: "Insomnia — sleep onset",
      relationship: "primary",
    },
    {
      name: "Middle-of-the-night awakening (4+ h before wake time)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Zaleplon",
      type: "drug",
      href: "/drugs/zaleplon",
      note: "The drug you're reading about",
    },
    {
      label: "Z-Drug",
      type: "class",
      href: "#mechanism",
      note: "Non-Benzodiazepine Hypnotic (Z-Drug)",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Insomnia — sleep onset",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Middle-of-the-night awakening (4+ h before wake time)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Complex sleep behaviours",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Driving impairment after middle-of-night dosing",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Somnolence and dizziness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Zaleplon",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The ultrashort Z-drug — a middle-of-the-night option that clears before morning.",
    summary: "Zaleplon is a prescription medicine used to treat insomnia — sleep onset. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Zaleplon is an ultra-short sleeping tablet: it helps you fall asleep again and is essentially gone from the body within about four hours — which makes it the one medicine of its kind that can occasionally be taken in the middle of the night without morning grogginess, provided at least four hours remain before you must drive.",
    sideEffects: "The most common side effects are: somnolence and dizziness, headache, rebound insomnia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Complex sleep behaviours and Driving impairment after middle-of-night dosing. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: morning impairment / hangover (every review); complex sleep behaviours (ask at every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: other medicines that act on the brain. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Zaleplon (limited availability)",
        manufacturer: "various",
        strengths: "5, 10 mg",
      },
    ],
    typicalDoses: "5–10 mg at bedtime or MOTN (4-h rule).",
    prescribingScenarios: ["Middle-of-night insomnia niche."],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance — see Monitoring section.",
    patientCounselling: ["The 4-hour rule before driving."],
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
    familyName: "Non-Benzodiazepine Hypnotics",
    members: [
      {
        name: "Zaleplon",
        slug: "zaleplon",
        relationship: "This guide",
        distinguishing: "Middle-of-the-night dosing — cleared before morning",
      },
      {
        name: "Zolpidem",
        slug: "zolpidem",
        relationship: "Same class (Z-Drug)",
        distinguishing: "Sleep onset in a non-benzodiazepine molecule — the default Z-drug",
      },
      {
        name: "Eszopiclone",
        slug: "eszopiclone",
        relationship: "Same class (Z-Drug)",
        distinguishing: "The 6-month-trial Z-drug with maintenance cover",
      },
      {
        name: "Zopiclone",
        slug: "zopiclone",
        relationship: "Same class (Z-Drug)",
        distinguishing: "The Commonwealth Z-drug — 5-hour cover with taste signature",
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
      question: "Which molecular target does Zaleplon primarily act on?",
      options: [
        "GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Zaleplon acts primarily at GABA-A alpha-1 receptors (selective PAM) — pyrazolopyrimidine class. Non-benzodiazepine pyrazolopyrimidine alpha-1-selective GABA-A PAM — the Z-class mechanism at the shortest duration.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Zaleplon?",
      options: ["Somnolence and dizziness", "Headache", "Rebound insomnia", "Weight gain"],
      correctIndex: 0,
      explanation: "Somnolence and dizziness — Brief — matching the 1-hour half-life.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Zaleplon for sleep onset?",
      options: ["5–20 mg", "20 mg", "5–20 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For sleep onset: start 5–10 mg at bedtime (5 mg elderly/hepatic), target 5–20 mg, maximum 20 mg. Only as needed",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Zaleplon in two sentences.",
      answer: "Non-benzodiazepine pyrazolopyrimidine alpha-1-selective GABA-A PAM — the Z-class mechanism at the shortest duration. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Zaleplon.",
      answer: "Insomnia — sleep onset, Middle-of-the-night awakening (4+ h before wake time). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Zaleplon and how you would manage it.",
      answer: "Complex sleep behaviours: Class boxed warning. Management: Stop.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Zaleplon require?",
      answer: "Morning impairment / hangover (Every review); Complex sleep behaviours (Ask at every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Zaleplon that separates safe prescribers from unsafe ones.",
      answer: "The 4-hour rule: zaleplon at 3 am is cleared by 7 — the only hypnotic with a defensible middle-of-the-night label-adjacent niche.",
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
      checkpoint: "You now know what Zaleplon is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Zaleplon works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Zaleplon safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Zaleplon.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Zaleplon with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Zaleplon.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["15–30 minutes."],
    ifItWorks: [
      "Continue Zaleplon at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Zaleplon (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Zaleplon follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Sleep onset",
        starting: "5–10 mg at bedtime (5 mg elderly/hepatic)",
        titration: "Only as needed",
        target: "5–20 mg",
        max: "20 mg",
      },
    ],
    dosageForms: ["Capsules 5, 10 mg"],
    dosingTips: [
      "Reserve for onset-only insomnia or MOTN awakening with the 4-hour rule.",
      "No maintenance cover — pair with sleep-hygiene work.",
    ],
    overdose: [
      "Overdose with Zaleplon is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Zaleplon is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 1 hour..", "Metabolism: Hepatic.."],
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
    potentialAdvantages: ["Cleanest morning of the class.", "The MOTN niche.", "Lowest rebound risk among Z-drugs."],
    potentialDisadvantages: ["No sleep-maintenance benefit.", "Availability shrinking in many markets.", "Class boxed warnings."],
    primaryTargetSymptoms: ["Sleep-onset insomnia", "Middle-of-the-night awakening"],
    pearls: [
      "The 4-hour rule: zaleplon at 3 am is cleared by 7 — the only hypnotic with a defensible middle-of-the-night label-adjacent niche.",
      "Ultrashort = no maintenance cover: pure onset drug (or MOTN drug).",
      "No active metabolite — the cleanest morning of the class.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
