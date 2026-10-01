import type { Drug } from "../types";

/**
 * Modafinil — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), modafinil monograph (book p. 83)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const modafinil: Drug = {
  /* ---- Identity ---- */
  slug: "modafinil",
  genericName: "Modafinil",
  brandNames: ["Provigil", "Modalert (India)"],
  drugClass: "wake-promoting-agent",
  drugClassLabel: "Wake-Promoting Agent",
  drugClassFullName: "Wake-Promoting Agent (Dopamine Transporter Inhibitor)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Wake-Promoting Agents", "Modafinil"],
  /* ---- Hero / summary ---- */
  tagline: "The wake-promoting agent — DAT-inhibiting alertness for narcolepsy without classic stimulant pharmacology.",
  summary: "Modafinil is a wake-promoting agent whose DAT-inhibiting pharmacology produces alertness for narcolepsy, shift-work disorder, and OSA residual sleepiness — with less classic-stimulant adverse-effect and misuse baggage than amphetamines, though it retains controlled status in the USA.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Modafinil — from its molecular target (DAT (weak inhibition) + orexin/hypocretin and histamine wake systems) to clinical effect.",
    "List the FDA-approved and off-label uses of Modafinil.",
    "Predict the common and serious side effects of Modafinil from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Modafinil.",
    "Compare Modafinil with other wake-promoting agents and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Modafinil promotes wakefulness primarily via weak DAT inhibition (raising dopaminergic tone) plus activation of the orexin and histamine wake systems.",
    molecularTarget: "DAT (weak inhibition) + orexin/hypocretin and histamine wake systems",
    effect: "Catecholamine and wake-system enhancement with the agent's characteristic profile.",
    steps: [
      "Modafinil promotes wakefulness primarily via weak DAT inhibition (raising dopaminergic tone) plus activation of the orexin and histamine wake systems.",
      "Prefrontal catecholamine enhancement sharpens attention and impulse control.",
      "The agent's formulation and half-life determine practical coverage.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 12-15 hours. — see mechanism and prescriber sections.",
    halfLife: "12-15 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Modafinil",
        sublabel: "CNS stimulant",
        variant: "process",
      },
      {
        id: "da",
        label: "Dopamine",
        sublabel: "Synaptic levels rise",
        variant: "output",
      },
      {
        id: "ne",
        label: "Norepinephrine",
        sublabel: "Synaptic levels rise",
        variant: "output",
      },
      {
        id: "pfc",
        label: "Prefrontal cortex",
        sublabel: "Attention & impulse control improve",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "da",
        label: "increases",
        type: "stimulate",
      },
      {
        from: "drug",
        to: "ne",
        label: "increases",
        type: "stimulate",
      },
      {
        from: "da",
        to: "pfc",
        label: "sharpens signal",
      },
      {
        from: "ne",
        to: "pfc",
        label: "boosts alertness",
      },
    ],
    caption: "Catecholamine enhancement in the prefrontal cortex — the brain's attention control centre — corrects the signal-to-noise deficit that defines ADHD.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "DAT (weak inhibition) + orexin/hypocretin and histamine wake systems",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: ["mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Narcolepsy — excessive daytime sleepiness",
      status: "fda-approved",
      description: "First-line wake-promoting therapy.",
    },
    {
      name: "Shift-work sleep disorder",
      status: "fda-approved",
      description: "Dosing before the night shift.",
    },
    {
      name: "OSA residual sleepiness (adjunct to CPAP)",
      status: "fda-approved",
      description: "NOT a substitute for CPAP.",
    },
    {
      name: "ADHD",
      status: "off-label",
      description: "Effective in trials but approval refused over rash risk.",
    },
    {
      name: "Fatigue augmentation (depression/medical)",
      status: "off-label",
      description: "Occasional specialist use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Modafinil must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Class sympathomimetic precaution.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Headache",
      frequency: "very-common",
      severity: "mild",
      description: "The most common adverse effect — dose-related.",
      management: "Dose split; hydration.",
    },
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "With food.",
    },
    {
      name: "Insomnia (if afternoon-dosed)",
      frequency: "common",
      severity: "moderate",
      description: "Long half-life.",
      management: "Morning-only dosing.",
    },
    {
      name: "Anxiety and jitteriness",
      frequency: "common",
      severity: "mild",
      description: "Dopaminergic activation.",
      management: "Dose reduction.",
    },
    {
      name: "Dry mouth, appetite reduction",
      frequency: "common",
      severity: "mild",
      description: "Mild stimulant-like effects.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Serious rash (SJS/TEN)",
      frequency: "rare",
      severity: "life-threatening",
      description: "The label-defining risk (paediatric rates ~1% any rash) — the reason ADHD approval was refused.",
      management: "Stop on any rash; same-day assessment.",
    },
    {
      name: "Multi-organ hypersensitivity / DRESS",
      frequency: "rare",
      severity: "severe",
      description: "Fever + rash + organ involvement.",
      management: "Stop; systemic evaluation.",
    },
    {
      name: "Psychiatric symptoms",
      frequency: "uncommon",
      severity: "severe",
      description: "Activation in vulnerable patients.",
      management: "Stop; reassess.",
    },
    {
      name: "Cardiovascular events",
      frequency: "rare",
      severity: "severe",
      description: "Reported — screen as per stimulants.",
      management: "Monitor HR/BP.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "HR/BP",
      frequency: "Baseline and every visit",
      rationale: "Cardiovascular surveillance.",
    },
    {
      parameter: "Rash counselling",
      frequency: "At initiation",
      rationale: "The defining serious risk.",
    },
  ],
  interactions: [
    {
      drug: "Cyclosporine, hormonal contraceptives",
      severity: "major",
      mechanism: "3A4 induction lowers their levels — contraceptive failure.",
      action: "Alternative contraception counselling.",
    },
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Class sympathomimetic precaution.",
      action: "Washout.",
    },
    {
      drug: "CYP3A4 substrates generally",
      severity: "major",
      mechanism: "Modafinil induces 3A4 — many drugs drop.",
      action: "Review the whole list.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; effective-contraception counselling embedded in several labels.",
    lactation: "Unknown; avoid pending data.",
  },
  renalAdjustment: "No major adjustment.",
  hepaticAdjustment: "Halve dose in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Modafinil is a wake-promoting medicine for conditions of excessive sleepiness — narcolepsy, shift-work disorder, and remaining sleepiness in treated sleep apnoea. It produces alertness more gently than classic stimulants, though it can still disturb night sleep and cause headache. Any rash while taking it means stopping and contacting your doctor the same day.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Modafinil builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The wake-systems drug: DAT inhibition + orexin + histamine — alertness without full sympathomimetic texture.",
    "The rash that blocked ADHD: ~1% paediatric rash rates refused it an ADHD indication.",
    "India's Modalert: the most-copied generic, also the most-diverted 'study drug'.",
    "Doping-banned in sport without TUE.",
    "CPAP first: modafinil treats RESIDUAL sleepiness in OSA, never replaces the machine.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Modafinil: Modafinil promotes wakefulness primarily via weak DAT inhibition (raising dopaminergic tone) plus activation of the orexin and histamine wake systems.",
        "Uses of Modafinil: Narcolepsy — excessive daytime sleepiness; Shift-work sleep disorder; OSA residual sleepiness (adjunct to CPAP); ADHD",
        "Mechanism: weak DAT inhibition (dopamine reuptake) + orexin/histamine wake-system activation.",
        "Approved: narcolepsy, shift-work disorder, OSA residual sleepiness (adjunct to CPAP).",
      ],
      practical: [
        "Prescribe Modafinil for narcolepsy — excessive daytime sleepiness with dose, timing, and duration.",
        "Outline the monitoring plan: HR/BP (Baseline and every visit); Rash counselling (At initiation)",
      ],
      longAnswer: [
        "Modafinil: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: weak DAT inhibition (dopamine reuptake) + orexin/histamine wake-system activation.",
        "Approved: narcolepsy, shift-work disorder, OSA residual sleepiness (adjunct to CPAP).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: weak DAT inhibition (dopamine reuptake) + orexin/histamine wake-system activation.",
        "Approved: narcolepsy, shift-work disorder, OSA residual sleepiness (adjunct to CPAP).",
        "Half-life 12-15 h — morning dosing only.",
        "Signature serious risk: SJS/TEN rash (blocked ADHD approval).",
        "Controlled (US Schedule IV); doping-banned in sport.",
        "Dose 200-400 mg/day.",
      ],
      pyqConcepts: [
        "Mechanism/target of Modafinil",
        "Key adverse effect: Serious rash (SJS/TEN)",
        "Dosing and titration of Modafinil",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Modafinil develops serious rash (sjs/ten) — next best step?",
        "When to choose Modafinil over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: DAT (weak inhibition) + orexin/hypocretin and histamine wake systems",
        "Most common side effects: Headache, Nausea, Insomnia (if afternoon-dosed)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The wake-systems drug: DAT inhibition + orexin + histamine — alertness without full sympathomimetic texture.",
        "The rash that blocked ADHD: ~1% paediatric rash rates refused it an ADHD indication.",
        "India's Modalert: the most-copied generic, also the most-diverted 'study drug'.",
        "Doping-banned in sport without TUE.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: weak DAT inhibition (dopamine reuptake) + orexin/histamine wake-system activation.",
    "Approved: narcolepsy, shift-work disorder, OSA residual sleepiness (adjunct to CPAP).",
    "Half-life 12-15 h — morning dosing only.",
    "Signature serious risk: SJS/TEN rash (blocked ADHD approval).",
    "Controlled (US Schedule IV); doping-banned in sport.",
    "Dose 200-400 mg/day.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — narcolepsy — excessive daytime sleepiness",
      presentation: "A patient presenting with narcolepsy — excessive daytime sleepiness, started on Modafinil.",
      history: "A adult patient presents with a narcolepsy — excessive daytime sleepiness picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with narcolepsy — excessive daytime sleepiness; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Narcolepsy — excessive daytime sleepiness. Differentials are considered and excluded clinically.",
      rationale: "Modafinil is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Wake-Promoting Agent) with strong evidence in this condition.",
      management: "Started at 100-200 mg every morning, titrated to 200-400 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Modafinil takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Wake-Promoting Agent comparison — choosing within the class",
      primaryDrug: "Modafinil",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "DAT (weak inhibition) + orexin/hypocretin and histamine wake systems",
          comparisons: [
            {
              drug: "Armodafinil",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "12-15 hours.",
          comparisons: [
            {
              drug: "Armodafinil",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to reducing — appetite effects common.",
          comparisons: [
            {
              drug: "Armodafinil",
              value: "Weight neutral to reducing — appetite effects common.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Not sedating.",
          comparisons: [
            {
              drug: "Armodafinil",
              value: "Not sedating.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The narcolepsy wake agent with the cleanest stimulant profile",
          comparisons: [
            {
              drug: "Armodafinil",
              value: "The afternoon-cover enantiomer of modafinil",
            },
          ],
        },
      ],
      takeaway: "All wake-promoting agents share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Modafinil reaches peak plasma concentration and begins acting at its molecular target (DAT (weak inhibition) + orexin/hypocretin and histamine wake systems). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (headache, nausea, insomnia (if afternoon-dosed)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (45-60 minutes.)",
      title: "Therapeutic effect builds",
      description: "45-60 minutes. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Modafinil is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Modafinil take to work?",
      answer: "45-60 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Modafinil?",
      answer: "The most frequently reported effects are: Headache, Nausea, Insomnia (if afternoon-dosed), Anxiety and jitteriness, Dry mouth, appetite reduction. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Modafinil suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Modafinil habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Modafinil exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Modafinil during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Modafinil may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "AASM Narcolepsy Clinical Practice Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), modafinil monograph, p. 83",
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
        source: "FDA Prescribing Information for Provigil (Modafinil)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for modafinil — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Modafinil",
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
      name: "Armodafinil",
      slug: "armodafinil",
      drugClass: "Wake-Promoting Agent",
      relationship: "Same class (Wake-Promoting Agent)",
    },
  ],
  relatedConditions: [
    {
      name: "Narcolepsy — excessive daytime sleepiness",
      relationship: "primary",
    },
    {
      name: "Shift-work sleep disorder",
      relationship: "primary",
    },
    {
      name: "OSA residual sleepiness (adjunct to CPAP)",
      relationship: "primary",
    },
    {
      name: "ADHD",
      relationship: "off-label",
    },
    {
      name: "Fatigue augmentation (depression/medical)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Modafinil",
      type: "drug",
      href: "/drugs/modafinil",
      note: "The drug you're reading about",
    },
    {
      label: "Wake-Promoting Agent",
      type: "class",
      href: "#mechanism",
      note: "Wake-Promoting Agent (Dopamine Transporter Inhibitor)",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "DAT (weak inhibition) + orexin/hypocretin and histamine wake systems",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Narcolepsy — excessive daytime sleepiness",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Shift-work sleep disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "OSA residual sleepiness (adjunct to CPAP)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Serious rash (SJS/TEN)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Multi-organ hypersensitivity / DRESS",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Headache",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Modafinil",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The wake-promoting agent — DAT-inhibiting alertness for narcolepsy without classic stimulant pharmacology.",
    summary: "Modafinil is a prescription medicine used to treat narcolepsy — excessive daytime sleepiness. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Modafinil is a wake-promoting medicine for conditions of excessive sleepiness — narcolepsy, shift-work disorder, and remaining sleepiness in treated sleep apnoea. It produces alertness more gently than classic stimulants, though it can still disturb night sleep and cause headache. Any rash while taking it means stopping and contacting your doctor the same day.",
    sideEffects: "The most common side effects are: headache, nausea, insomnia (if afternoon-dosed), anxiety and jitteriness, dry mouth, appetite reduction. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Serious rash (SJS/TEN) and Multi-organ hypersensitivity / DRESS. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: hr/bp (baseline and every visit); rash counselling (at initiation). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Cyclosporine, hormonal contraceptives, MAOIs, CYP3A4 substrates generally. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Modalert",
        manufacturer: "Sun/HAB legacy",
        strengths: "100, 200 mg",
      },
      {
        name: "Modvigil",
        manufacturer: "HAB",
        strengths: "100, 200 mg",
      },
    ],
    typicalDoses: "200 mg morning; shift-work 200 pre-shift.",
    prescribingScenarios: [
      "Narcolepsy and shift-work sleepiness in sleep clinics.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Rash counselling at initiation; HR/BP review.",
    patientCounselling: [
      "Morning dosing only.",
      "Rash = stop and same-day contact.",
      "If on hormonal contraception, discuss alternatives.",
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
    familyName: "Wake-Promoting Agents",
    members: [
      {
        name: "Modafinil",
        slug: "modafinil",
        relationship: "This guide",
        distinguishing: "The narcolepsy wake agent with the cleanest stimulant profile",
      },
      {
        name: "Armodafinil",
        slug: "armodafinil",
        relationship: "Same class (Wake-Promoting Agent)",
        distinguishing: "The afternoon-cover enantiomer of modafinil",
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
      question: "Which molecular target does Modafinil primarily act on?",
      options: [
        "DAT (weak inhibition) + orexin/hypocretin and histamine wake systems",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Modafinil acts primarily at DAT (weak inhibition) + orexin/hypocretin and histamine wake systems. Modafinil promotes wakefulness primarily via weak DAT inhibition (raising dopaminergic tone) plus activation of the orexin and histamine wake systems.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Modafinil?",
      options: ["Headache", "Nausea", "Insomnia (if afternoon-dosed)", "Anxiety and jitteriness"],
      correctIndex: 0,
      explanation: "Headache — The most common adverse effect — dose-related.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Modafinil for narcolepsy / osa sleepiness?",
      options: ["200-400 mg/day", "400 mg/day", "200-400 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For narcolepsy / osa sleepiness: start 100-200 mg every morning, target 200-400 mg/day, maximum 400 mg/day. May split morning + midday",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Modafinil in two sentences.",
      answer: "Modafinil promotes wakefulness primarily via weak DAT inhibition (raising dopaminergic tone) plus activation of the orexin and histamine wake systems. Net effect: Catecholamine and wake-system enhancement with the agent's characteristic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Modafinil.",
      answer: "Narcolepsy — excessive daytime sleepiness, Shift-work sleep disorder, OSA residual sleepiness (adjunct to CPAP), ADHD. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Modafinil and how you would manage it.",
      answer: "Serious rash (SJS/TEN): The label-defining risk (paediatric rates ~1% any rash) — the reason ADHD approval was refused. Management: Stop on any rash; same-day assessment.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Modafinil require?",
      answer: "HR/BP (Baseline and every visit); Rash counselling (At initiation)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Modafinil that separates safe prescribers from unsafe ones.",
      answer: "The wake-systems drug: DAT inhibition + orexin + histamine — alertness without full sympathomimetic texture.",
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
      checkpoint: "You now know what Modafinil is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Modafinil works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Modafinil safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Modafinil.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Modafinil with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Modafinil.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["45-60 minutes."],
    ifItWorks: [
      "Continue Modafinil at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Modafinil (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Modafinil follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Narcolepsy / OSA sleepiness",
        starting: "100-200 mg every morning",
        titration: "May split morning + midday",
        target: "200-400 mg/day",
        max: "400 mg/day",
      },
      {
        indication: "Shift-work disorder",
        starting: "200 mg ~1 h before shift",
        titration: "Adjust to shift pattern",
        target: "200 mg",
        max: "400 mg",
      },
    ],
    dosageForms: ["Tablets 100, 200 mg"],
    dosingTips: [
      "Morning-only dosing; shift-work doses 1 h pre-shift.",
      "Confirm CPAP adherence before treating OSA residual sleepiness.",
      "Contraceptive counselling is mandatory.",
    ],
    overdose: [
      "Overdose with Modafinil is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Modafinil is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 12-15 hours..", "Metabolism: Hepatic.."],
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
      "Alertness with less classic-stimulant texture.",
      "No appetite/growth burden.",
      "Once-daily dosing.",
    ],
    potentialDisadvantages: ["Rash warning.", "Controlled status + diversion culture.", "3A4 induction interactions."],
    primaryTargetSymptoms: ["Excessive daytime sleepiness", "Shift-work wakefulness"],
    pearls: [
      "The wake-systems drug: DAT inhibition + orexin + histamine — alertness without full sympathomimetic texture.",
      "The rash that blocked ADHD: ~1% paediatric rash rates refused it an ADHD indication.",
      "India's Modalert: the most-copied generic, also the most-diverted 'study drug'.",
      "Doping-banned in sport without TUE.",
      "CPAP first: modafinil treats RESIDUAL sleepiness in OSA, never replaces the machine.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
