import type { Drug } from "../types";

/**
 * Eszopiclone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), eszopiclone monograph (book p. 43)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const eszopiclone: Drug = {
  /* ---- Identity ---- */
  slug: "eszopiclone",
  genericName: "Eszopiclone",
  brandNames: ["Lunesta"],
  drugClass: "non-benzodiazepine-hypnotic",
  drugClassLabel: "Z-Drug",
  drugClassFullName: "Non-Benzodiazepine Hypnotic (Z-Drug)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Non-Benzodiazepine Hypnotics", "Eszopiclone"],
  /* ---- Hero / summary ---- */
  tagline: "The Z-drug licensed for long-term use — sleep onset AND maintenance with a 6-hour half-life.",
  summary: "Eszopiclone is the cyclopyrrolone Z-drug with a 6-hour half-life — longer than zolpidem and zaleplon — giving it both onset and maintenance cover, and it uniquely carried long-term (6-month) trial data to approval. Same alpha-1-selective GABA-A pharmacology as the Z-class, with a dysgeusia (bitter taste) signature and class-standard boxed warnings.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Eszopiclone — from its molecular target (GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class) to clinical effect.",
    "List the FDA-approved and off-label uses of Eszopiclone.",
    "Predict the common and serious side effects of Eszopiclone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Eszopiclone.",
    "Compare Eszopiclone with other z-drugs and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Non-benzodiazepine cyclopyrrolone with alpha-1-selective GABA-A positive allosteric modulation — the Z-class mechanism at eszopiclone's duration.",
    molecularTarget: "GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class",
    effect: "Sleep promotion via the described target.",
    steps: [
      "Eszopiclone is the cyclopyrrolone Z-drug with a 6-hour half-life — longer than zolpidem and zaleplon — giving it both onset and maintenance cover, and it uniquely carried long-term (6-month) trial data to approval — the mechanism in one line.",
      "Binding at the described target produces the sleep-promoting effect.",
      "Duration of action follows the half-life: onset agents clear before morning; longer agents add maintenance cover.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 6 hours. — see mechanism and prescriber sections.",
    halfLife: "About 6 hours.",
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
        label: "Eszopiclone",
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
    "GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Insomnia — sleep onset and maintenance",
      status: "fda-approved",
      description: "1–3 mg nightly; the only Z-drug with 6-month randomised trial data behind continuous use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Eszopiclone must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Complex sleep behaviours",
      text: "As per zolpidem class warning: sleep-walking/driving/eating with amnesia — stop immediately if any occur.",
    },
    {
      title: "CNS depressant co-administration",
      text: "Additive sedation with alcohol, opioids, other CNS depressants.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dysgeusia (unpleasant bitter taste)",
      frequency: "common",
      severity: "mild",
      description: "The signature adverse effect — metallic/bitter taste through the next day.",
      management: "Reassurance; usually tolerable.",
    },
    {
      name: "Morning drowsiness",
      frequency: "common",
      severity: "moderate",
      description: "The 6-hour half-life leaves more residue than zolpidem.",
      management: "Dose reduction; 7–8 h in bed.",
    },
    {
      name: "Dizziness, dry mouth, headache",
      frequency: "common",
      severity: "mild",
      description: "Class-typical.",
      management: "Reassurance.",
    },
    {
      name: "Rebound insomnia",
      frequency: "common",
      severity: "moderate",
      description: "On cessation after regular use.",
      management: "Taper; warn.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Complex sleep behaviours",
      frequency: "uncommon",
      severity: "severe",
      description: "Class boxed warning.",
      management: "Stop permanently on any event.",
    },
    {
      name: "Next-day driving impairment",
      frequency: "common",
      severity: "severe",
      description: "Dose-related; 3 mg impairs next-morning performance.",
      management: "Prefer 1–2 mg; 7–8 h rule.",
    },
    {
      name: "Dependence/misuse",
      frequency: "uncommon",
      severity: "severe",
      description: "Lower than benzodiazepines but real.",
      management: "Short courses despite the long-term data; review.",
    },
    {
      name: "Falls (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Night-fall risk with any hypnotic.",
      management: "2 mg elderly ceiling; hazards review.",
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
      drug: "Alcohol and CNS depressants (opioids, benzodiazepines, sedating antihistamines)",
      severity: "contraindicated",
      mechanism: "Additive sedation and impaired next-morning function; complex sleep behaviours reported with z-drugs.",
      action: "Avoid the combination; counsel strongly about taking on an empty stomach and a full night in bed.",
    },
    {
      drug: "Ketoconazole, clarithromycin and strong CYP3A4 inhibitors",
      severity: "major",
      mechanism: "Raise eszopiclone levels — next-day hangover amplifies.",
      action: "Reduce the dose or choose a hypnotic not dependent on 3A4.",
    },
    {
      drug: "Rifampicin and CYP3A4 inducers",
      severity: "moderate",
      mechanism: "Lower eszopiclone levels — loss of hypnotic efficacy.",
      action: "Review response; consider an alternative agent.",
    },
  ],
  pregnancy: {
    summary: "Data in human pregnancy are limited. The decision to continue or stop balances the risk of untreated illness against possible drug exposure — for serious psychiatric illness, relapse prevention usually outweighs fetal risk. Involve obstetrics early and never stop abruptly without a plan.",
    lactation: "Small amounts may pass into breast milk. Decisions are individualised — monitor the infant for sedation and poor feeding, and discuss with your doctor.",
  },
  renalAdjustment: "No specific renal dose adjustment established for this agent; use standard caution in significant renal impairment.",
  hepaticAdjustment: "Use cautiously in hepatic impairment given hepatic metabolism; standard monitoring applies.",
  /* ---- Education ---- */
  patientExplanation: "Eszopiclone is a modern sleeping tablet that covers both falling asleep and staying asleep. Its most distinctive side effect is a bitter or metallic taste the next day. The same safety rules as its class apply: never with alcohol, only when 7–8 hours in bed are guaranteed, and stop and call your doctor for any sleep-walking.",
  patientEducationPoints: [
    "Take it only when you can spend a full 7–8 hours in bed.",
    "Do not drive the next morning if you still feel drowsy.",
    "Stop and call your doctor if you sleep-walk, sleep-drive, or eat while asleep.",
    "Keep the course short — these medicines are for intermittent or short-term use.",
    "Benefit from Eszopiclone builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The 6-month randomised data: eszopiclone is the Z-drug with the longest continuous-use evidence — though clinical discipline still favours intermittent dosing.",
    "Dysgeusia is its fingerprint: a bitter taste patients rarely connect to a sleeping pill — ask.",
    "6-hour half-life: covers the 3 am waking that zolpidem misses, at the cost of more morning residue.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Eszopiclone: Non-benzodiazepine cyclopyrrolone with alpha-1-selective GABA-A positive allosteric modulation — the Z-class mechanism at eszopiclone's duration.",
        "Uses of Eszopiclone: Insomnia — sleep onset and maintenance",
        "Cyclopyrrolone Z-drug; alpha-1-selective GABA-A PAM.",
        "Half-life ~6 h — onset AND maintenance cover.",
      ],
      practical: [
        "Prescribe Eszopiclone for insomnia — sleep onset and maintenance with dose, timing, and duration.",
        "Outline the monitoring plan: Morning impairment / hangover (Every review); Complex sleep behaviours (Ask at every review)",
      ],
      longAnswer: [
        "Eszopiclone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Cyclopyrrolone Z-drug; alpha-1-selective GABA-A PAM.",
        "Half-life ~6 h — onset AND maintenance cover.",
      ],
    },
    neetPg: {
      highYield: [
        "Cyclopyrrolone Z-drug; alpha-1-selective GABA-A PAM.",
        "Half-life ~6 h — onset AND maintenance cover.",
        "Signature adverse effect: dysgeusia (bitter taste).",
        "The only Z-drug with 6-month continuous-use RCT data.",
        "Dose 1–3 mg (elderly max 2 mg).",
      ],
      pyqConcepts: [
        "Mechanism/target of Eszopiclone",
        "Key adverse effect: Complex sleep behaviours",
        "Dosing and titration of Eszopiclone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Eszopiclone develops complex sleep behaviours — next best step?",
        "When to choose Eszopiclone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class",
        "Most common side effects: Dysgeusia (unpleasant bitter taste), Morning drowsiness, Dizziness, dry mouth, headache",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The 6-month randomised data: eszopiclone is the Z-drug with the longest continuous-use evidence — though clinical discipline still favours intermittent dosing.",
        "Dysgeusia is its fingerprint: a bitter taste patients rarely connect to a sleeping pill — ask.",
        "6-hour half-life: covers the 3 am waking that zolpidem misses, at the cost of more morning residue.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Cyclopyrrolone Z-drug; alpha-1-selective GABA-A PAM.",
    "Half-life ~6 h — onset AND maintenance cover.",
    "Signature adverse effect: dysgeusia (bitter taste).",
    "The only Z-drug with 6-month continuous-use RCT data.",
    "Dose 1–3 mg (elderly max 2 mg).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — insomnia — sleep onset and maintenance",
      presentation: "A patient presenting with insomnia — sleep onset and maintenance, started on Eszopiclone.",
      history: "A adult patient presents with a insomnia — sleep onset and maintenance picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with insomnia — sleep onset and maintenance; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Insomnia — sleep onset and maintenance. Differentials are considered and excluded clinically.",
      rationale: "Eszopiclone is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Z-Drug) with strong evidence in this condition.",
      management: "Started at 1 mg at bedtime, titrated to 2–3 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Eszopiclone takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Z-Drug comparison — choosing within the class",
      primaryDrug: "Eszopiclone",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "See full guide",
            },
            {
              drug: "Zaleplon",
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
          primaryValue: "About 6 hours.",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "—",
            },
            {
              drug: "Zaleplon",
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
              drug: "Zaleplon",
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
              drug: "Zaleplon",
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
          primaryValue: "The 6-month-trial Z-drug with maintenance cover",
          comparisons: [
            {
              drug: "Zolpidem",
              value: "Sleep onset in a non-benzodiazepine molecule — the default Z-drug",
            },
            {
              drug: "Zaleplon",
              value: "Middle-of-the-night dosing — cleared before morning",
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
      description: "Eszopiclone reaches peak plasma concentration and begins acting at its molecular target (GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (dysgeusia (unpleasant bitter taste), morning drowsiness, dizziness, dry mouth, headache). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Eszopiclone is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Eszopiclone take to work?",
      answer: "15–30 minutes.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Eszopiclone?",
      answer: "The most frequently reported effects are: Dysgeusia (unpleasant bitter taste), Morning drowsiness, Dizziness, dry mouth, headache, Rebound insomnia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Eszopiclone suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Eszopiclone habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Eszopiclone exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Eszopiclone during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Eszopiclone may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), eszopiclone monograph, p. 43",
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
        source: "FDA Prescribing Information for Lunesta (Eszopiclone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for eszopiclone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Eszopiclone",
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
      name: "Zaleplon",
      slug: "zaleplon",
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
      name: "Insomnia — sleep onset and maintenance",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Eszopiclone",
      type: "drug",
      href: "/drugs/eszopiclone",
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
      label: "GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class",
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
      label: "Complex sleep behaviours",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Next-day driving impairment",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dysgeusia (unpleasant bitter taste)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Eszopiclone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The Z-drug licensed for long-term use — sleep onset AND maintenance with a 6-hour half-life.",
    summary: "Eszopiclone is a prescription medicine used to treat insomnia — sleep onset and maintenance. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Eszopiclone is a modern sleeping tablet that covers both falling asleep and staying asleep. Its most distinctive side effect is a bitter or metallic taste the next day. The same safety rules as its class apply: never with alcohol, only when 7–8 hours in bed are guaranteed, and stop and call your doctor for any sleep-walking.",
    sideEffects: "The most common side effects are: dysgeusia (unpleasant bitter taste), morning drowsiness, dizziness, dry mouth, headache, rebound insomnia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Complex sleep behaviours and Next-day driving impairment. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: morning impairment / hangover (every review); complex sleep behaviours (ask at every review). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: other medicines that act on the brain. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Zopifresh / Eszopiclone (generic)",
        manufacturer: "various",
        strengths: "1–3 mg",
      },
    ],
    typicalDoses: "1–3 mg nightly.",
    prescribingScenarios: ["Insomnia with middle-of-night waking."],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "As per international guidance — see Monitoring section.",
    patientCounselling: [
      "Class rules: no alcohol, 7–8 h in bed, report sleep-walking.",
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
    familyName: "Non-Benzodiazepine Hypnotics",
    members: [
      {
        name: "Eszopiclone",
        slug: "eszopiclone",
        relationship: "This guide",
        distinguishing: "The 6-month-trial Z-drug with maintenance cover",
      },
      {
        name: "Zolpidem",
        slug: "zolpidem",
        relationship: "Same class (Z-Drug)",
        distinguishing: "Sleep onset in a non-benzodiazepine molecule — the default Z-drug",
      },
      {
        name: "Zaleplon",
        slug: "zaleplon",
        relationship: "Same class (Z-Drug)",
        distinguishing: "Middle-of-the-night dosing — cleared before morning",
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
      question: "Which molecular target does Eszopiclone primarily act on?",
      options: [
        "GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Eszopiclone acts primarily at GABA-A alpha-1-containing receptors (selective PAM) — cyclopyrrolone class. Non-benzodiazepine cyclopyrrolone with alpha-1-selective GABA-A positive allosteric modulation — the Z-class mechanism at eszopiclone's duration.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Eszopiclone?",
      options: ["Dysgeusia (unpleasant bitter taste)", "Morning drowsiness", "Dizziness, dry mouth, headache", "Rebound insomnia"],
      correctIndex: 0,
      explanation: "Dysgeusia (unpleasant bitter taste) — The signature adverse effect — metallic/bitter taste through the next day.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Eszopiclone for insomnia (onset + maintenance)?",
      options: ["2–3 mg", "3 mg", "2–3 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For insomnia (onset + maintenance): start 1 mg at bedtime, target 2–3 mg, maximum 3 mg. Increase to 2–3 mg as needed (elderly max 2 mg)",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Eszopiclone in two sentences.",
      answer: "Non-benzodiazepine cyclopyrrolone with alpha-1-selective GABA-A positive allosteric modulation — the Z-class mechanism at eszopiclone's duration. Net effect: Sleep promotion via the described target.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Eszopiclone.",
      answer: "Insomnia — sleep onset and maintenance. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Eszopiclone and how you would manage it.",
      answer: "Complex sleep behaviours: Class boxed warning. Management: Stop permanently on any event.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Eszopiclone require?",
      answer: "Morning impairment / hangover (Every review); Complex sleep behaviours (Ask at every review)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Eszopiclone that separates safe prescribers from unsafe ones.",
      answer: "The 6-month randomised data: eszopiclone is the Z-drug with the longest continuous-use evidence — though clinical discipline still favours intermittent dosing.",
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
      checkpoint: "You now know what Eszopiclone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Eszopiclone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Eszopiclone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Eszopiclone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Eszopiclone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Eszopiclone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: ["15–30 minutes."],
    ifItWorks: [
      "Continue Eszopiclone at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Eszopiclone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Eszopiclone follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "1 mg at bedtime",
        titration: "Increase to 2–3 mg as needed (elderly max 2 mg)",
        target: "2–3 mg",
        max: "3 mg",
      },
    ],
    dosageForms: ["Tablets 1, 2, 3 mg"],
    dosingTips: [
      "2 mg is the sweet spot for most — 3 mg buys duration at the price of morning residue.",
      "Ask about taste at review — patients rarely volunteer it.",
    ],
    overdose: [
      "Overdose with Eszopiclone is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Eszopiclone is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 6 hours..", "Metabolism: Hepatic.."],
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
      "Onset + maintenance cover.",
      "6-month continuous-use data.",
      "Less strictly short-course than siblings (though discipline still applies).",
    ],
    potentialDisadvantages: ["Dysgeusia.", "More morning residue than zolpidem.", "Class boxed warnings."],
    primaryTargetSymptoms: ["Sleep-onset and maintenance insomnia"],
    pearls: [
      "The 6-month randomised data: eszopiclone is the Z-drug with the longest continuous-use evidence — though clinical discipline still favours intermittent dosing.",
      "Dysgeusia is its fingerprint: a bitter taste patients rarely connect to a sleeping pill — ask.",
      "6-hour half-life: covers the 3 am waking that zolpidem misses, at the cost of more morning residue.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
