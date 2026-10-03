import type { Drug } from "../types";

/**
 * Zolpidem — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), zolpidem monograph (book p. 139)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const zolpidem: Drug = {
  /* ---- Identity ---- */
  slug: "zolpidem",
  genericName: "Zolpidem",
  brandNames: ["Ambien", "Ambien CR", "Zolfresh / Stilnoct (India/EU)"],
  drugClass: "non-benzodiazepine-hypnotic",
  drugClassLabel: "Z-Drug",
  drugClassFullName: "Non-Benzodiazepine Hypnotic (Z-Drug)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Sleep Medicines", "Non-Benzodiazepine Hypnotics", "Zolpidem"],
  /* ---- Hero / summary ---- */
  tagline: "The world's default sleeping pill: alpha-1-selective GABA modulation for sleep onset without full benzodiazepine breadth.",
  summary: "Zolpidem is the most-prescribed hypnotic worldwide: a non-benzodiazepine Z-drug that binds the alpha-1 subunit-rich GABA-A receptors mediating sleep, preserving hypnotic efficacy while theoretically sparing anxiolysis, amnesia, and dependence, though real-world misuse, next-morning driving impairment (especially with the CR form in women), and complex sleep behaviours (sleep-walking, sleep-eating, sleep-driving) have earned it boxed warnings. Short half-life (2.5 h) suits sleep-onset insomnia; the CR form adds 2–3 hours of maintenance cover.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Zolpidem, from its molecular target (GABA-A receptors containing alpha-1 subunits (selective PAM)) to clinical effect.",
    "List the FDA-approved and off-label uses of Zolpidem.",
    "Predict the common and serious side effects of Zolpidem from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Zolpidem.",
    "Compare Zolpidem with other z-drugs and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Zolpidem is a non-benzodiazepine selective GABA-A positive allosteric modulator with preferential alpha-1 subunit binding: the subunit pattern most associated with sedation/sleep.",
    molecularTarget: "GABA-A receptors containing alpha-1 subunits (selective PAM)",
    effect: "Hypnotic effect (sleep onset; CR adds maintenance) with less anxiolysis, muscle relaxation, and anticonvulsant action than benzodiazepines.",
    steps: [
      "Binds the benzodiazepine site but with alpha-1 subunit selectivity: the imidazopyridine chemical class (not a benzodiazepine ring).",
      "Alpha-1-rich receptors dominate sedation pathways: selective targeting preserves hypnotic effect.",
      "Rapid absorption (peak ~1.5 h) and short half-life (2.5 h) = sleep-onset cover with limited morning residue.",
      "CR formulation: dual-layer release; immediate layer for onset + slow layer for ~3 h maintenance cover.",
    ],
    pharmacokinetics: "Rapid oral absorption; C-max higher in women (the basis for the sex-specific dosing in several labels).",
    halfLife: "About 2.5 hours.",
    activeMetabolite: "None clinically significant.",
    metabolism: "Hepatic CYP3A4 (and 1A2 minor).",
    excretion: "Renal inactive metabolites.",
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
        label: "Zolpidem",
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
  neurotransmitters: ["GABA"],
  receptors: [
    "GABA-A alpha-1 receptors (selective PAM)",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Insomnia — sleep-onset difficulty (short-term)",
      status: "fda-approved",
      description: "The flagship indication: 5–10 mg at bedtime for 2–4 week courses.",
    },
    {
      name: "Insomnia — onset AND maintenance (CR form)",
      status: "fda-approved",
      description: "Ambien CR 6.25–12.5 mg: immediate + extended release layers.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Zolpidem must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Alcohol and CNS depressants",
      severity: "absolute",
      rationale: "Additive sedation and impaired next-morning function.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Complex sleep behaviours",
      text: "Zolpidem can cause sleep-walking, sleep-driving, sleep-eating, and other behaviours performed while not fully awake, sometimes with amnesia for the event, occasionally fatal (accidents during sleep-driving). Discontinue immediately if any complex sleep behaviour occurs.",
    },
    {
      title: "CNS depressant co-administration and respiratory impairment",
      text: "Additive sedation with alcohol, opioids, and other CNS depressants; additive respiratory depression concerns in compromised patients.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Morning drowsiness / hangover",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related; women clear zolpidem slower (half the standard female dose in several countries).",
      management: "Dose reduction; ensure 7–8 h in bed.",
    },
    {
      name: "Dizziness and headache",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Reassurance.",
    },
    {
      name: "Bitter/metallic taste",
      frequency: "common",
      severity: "mild",
      description: "A distinctive zolpidem side effect.",
      management: "Reassurance.",
    },
    {
      name: "Rebound insomnia on stopping",
      frequency: "common",
      severity: "moderate",
      description: "1–2 nights of worse sleep after cessation, especially after longer courses.",
      management: "Taper; warn patients in advance.",
    },
    {
      name: "Gastrointestinal upset",
      frequency: "uncommon",
      severity: "mild",
      description: "Nausea, diarrhoea.",
      management: "Take on retiring rather than with dinner.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Complex sleep behaviours (sleep-walking/driving/eating)",
      frequency: "uncommon",
      severity: "severe",
      description: "The boxed-warning signature: automatic behaviours with partial or full amnesia; accidents and injuries reported.",
      management: "Stop immediately on any such event; contraindicated thereafter.",
    },
    {
      name: "Next-morning driving impairment",
      frequency: "common",
      severity: "severe",
      description: "Blood levels at 8 hours can still impair driving: the reason for the FDA sex-specific dosing cut and the 'minimum 7–8 hours in bed' rule.",
      management: "Counsel explicitly; 5 mg in women (per most labels).",
    },
    {
      name: "Falls and fractures (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Even short-acting hypnotics raise night-fall risk in the elderly.",
      management: "Lowest dose; bedroom hazard review; prefer non-drug insomnia care.",
    },
    {
      name: "Dependence and misuse",
      frequency: "uncommon",
      severity: "severe",
      description: "Lower than benzodiazepines but real: euphoriant at higher doses; misuse documented.",
      management: "Short courses; small quantities.",
    },
    {
      name: "Paradoxical reactions",
      frequency: "rare",
      severity: "severe",
      description: "Agitation, hallucinations: more in the elderly.",
      management: "Stop.",
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
      rationale: "Sleep-walking/driving/eating: stop the drug if reported.",
    },
    {
      parameter: "Course duration",
      frequency: "Every prescription",
      rationale: "2–4 week courses; review justification.",
    },
  ],
  interactions: [
    {
      drug: "Alcohol and CNS depressants",
      severity: "contraindicated",
      mechanism: "Additive sedation and impaired next-morning function.",
      action: "Counsel strongly.",
    },
    {
      drug: "Ketoconazole and strong 3A4 inhibitors",
      severity: "major",
      mechanism: "Raise zolpidem levels: morning hangover amplifies.",
      action: "Dose reduction.",
    },
    {
      drug: "Rifampicin (inducer)",
      severity: "moderate",
      mechanism: "Lowers zolpidem: loss of efficacy.",
      action: "Review.",
    },
    {
      drug: "SSRIs",
      severity: "moderate",
      mechanism: "Occasional additive cognitive/psychomotor impairment.",
      action: "Observe.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited human data; no clear teratogenic signal. Third-trimester use risks neonatal sedation. Insomnia in pregnancy is treated non-pharmacologically first; any drug use is short, low-dose, and obstetrically informed.",
    lactation: "Minimal milk transfer at low doses: usually considered acceptable with infant sedation monitoring; feed before the nightly dose.",
  },
  renalAdjustment: "No major adjustment; standard caution in severe impairment.",
  hepaticAdjustment: "Halve the dose in hepatic impairment (slower clearance).",
  /* ---- Education ---- */
  patientExplanation: "Zolpidem is the most-used modern sleeping tablet: it works on the brain's sleep chemical (GABA) selectively, helping you fall asleep with fewer of the daytime-sedation effects of older sleeping pills. Take it only when you can spend 7–8 hours in bed, never with alcohol, and stop and call your doctor immediately if you ever sleep-walk or do anything while not fully awake.",
  patientEducationPoints: [
    "Take it only when you can spend a full 7–8 hours in bed.",
    "Do not drive the next morning if you still feel drowsy.",
    "Stop and call your doctor if you sleep-walk, sleep-drive, or eat while asleep.",
    "Keep the course short: these medicines are for intermittent or short-term use.",
    "Benefit from Zolpidem builds over weeks. Do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Alpha-1 selectivity is the design logic: hypnotic effect with less of the benzodiazepine's anxiolytic/amnestic breadth (though the boxed warnings note the overlap is still real).",
    "The female-dose story: women clear zolpidem ~45% slower; 5 mg default for women is now standard labelling in many countries after driving-impairment data.",
    "Sleep-driving is the boxed-warning legend: complex behaviours with amnesia, one event means the drug is finished.",
    "CR's two layers: immediate onset + 3-hour maintenance tail; choose by insomnia pattern, not habit.",
    "The 7–8 hour rule: leaving bed before levels fall is how morning impairment happens.",
    "Cognitive behavioural therapy for insomnia (CBT-I) outperforms zolpidem at 6 months in head-to-head trials: every prescription deserves a CBT-I referral alongside.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Zolpidem: Zolpidem is a non-benzodiazepine selective GABA-A positive allosteric modulator with preferential alpha-1 subunit binding; the subunit pattern most associated with sedation/sleep.",
        "Uses of Zolpidem: Insomnia; sleep-onset difficulty (short-term); Insomnia: onset AND maintenance (CR form)",
        "Mechanism: non-benzodiazepine (imidazopyridine) SELECTIVE alpha-1 GABA-A PAM.",
        "Half-life ~2.5 h: sleep-onset drug (CR adds ~3 h maintenance).",
      ],
      practical: [
        "Prescribe Zolpidem for insomnia: sleep-onset difficulty (short-term) with dose, timing, and duration.",
        "Outline the monitoring plan: Morning impairment / hangover (Every review); Complex sleep behaviours (Ask at every review); Course duration (Every prescription)",
      ],
      longAnswer: [
        "Zolpidem: mechanism, indications, adverse effects, contraindications, and dosing; structured answer framework.",
        "Mechanism: non-benzodiazepine (imidazopyridine) SELECTIVE alpha-1 GABA-A PAM.",
        "Half-life ~2.5 h: sleep-onset drug (CR adds ~3 h maintenance).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: non-benzodiazepine (imidazopyridine) SELECTIVE alpha-1 GABA-A PAM.",
        "Half-life ~2.5 h: sleep-onset drug (CR adds ~3 h maintenance).",
        "Boxed warnings: complex sleep behaviours + next-morning driving impairment.",
        "Sex-specific dosing: 5 mg default in women (slower clearance).",
        "CYP3A4 metabolism; inhibitors raise hangover risk.",
        "Rebound insomnia on stopping; CBT-I is the long-term answer.",
      ],
      pyqConcepts: [
        "Mechanism/target of Zolpidem",
        "Key adverse effect: Complex sleep behaviours (sleep-walking/driving/eating)",
        "Dosing and titration of Zolpidem",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Zolpidem develops complex sleep behaviours (sleep-walking/driving/eating): next best step?",
        "When to choose Zolpidem over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A receptors containing alpha-1 subunits (selective PAM)",
        "Most common side effects: Morning drowsiness / hangover, Dizziness and headache, Bitter/metallic taste",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "In bed, lights out, within 15 minutes of the dose: the ritual that prevents sleep-walking.",
        "Women get 5 mg: the pharmacokinetic fact that changed labelling.",
        "CR for the 3 am waker, IR for the 11 pm non-sleeper.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: non-benzodiazepine (imidazopyridine) SELECTIVE alpha-1 GABA-A PAM.",
    "Half-life ~2.5 h: sleep-onset drug (CR adds ~3 h maintenance).",
    "Boxed warnings: complex sleep behaviours + next-morning driving impairment.",
    "Sex-specific dosing: 5 mg default in women (slower clearance).",
    "CYP3A4 metabolism; inhibitors raise hangover risk.",
    "Rebound insomnia on stopping; CBT-I is the long-term answer.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation: insomnia; sleep-onset difficulty (short-term)",
      presentation: "A patient presenting with insomnia: sleep-onset difficulty (short-term), started on Zolpidem.",
      history: "A adult patient presents with a insomnia: sleep-onset difficulty (short-term) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with insomnia: sleep-onset difficulty (short-term); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Insomnia: sleep-onset difficulty (short-term). Differentials are considered and excluded clinically.",
      rationale: "Zolpidem is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Z-Drug) with strong evidence in this condition.",
      management: "Started at 5 mg at bedtime, titrated to 5 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Zolpidem takes weeks for full effect: early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Z-Drug comparison: choosing within the class",
      primaryDrug: "Zolpidem",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A receptors containing alpha-1 subunits (selective PAM)",
          comparisons: [
            {
              drug: "Eszopiclone",
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
          primaryValue: "About 2.5 hours.",
          comparisons: [
            {
              drug: "Eszopiclone",
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
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Eszopiclone",
              value: "Not associated with weight gain.",
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
          primaryValue: "High for 2–3 hours: the intended effect; morning residue is the adverse effect.",
          comparisons: [
            {
              drug: "Eszopiclone",
              value: "High for the intended duration.",
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
          primaryValue: "Sleep onset in a non-benzodiazepine molecule: the default Z-drug",
          comparisons: [
            {
              drug: "Eszopiclone",
              value: "The 6-month-trial Z-drug with maintenance cover",
            },
            {
              drug: "Zaleplon",
              value: "Middle-of-the-night dosing: cleared before morning",
            },
            {
              drug: "Zopiclone",
              value: "The Commonwealth Z-drug: 5-hour cover with taste signature",
            },
          ],
        },
      ],
      takeaway: "All non-benzodiazepine hypnotics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile: comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Zolpidem reaches peak plasma concentration and begins acting at its molecular target (GABA-A receptors containing alpha-1 subunits (selective PAM)). Initial effects are on sleep, energy, or side effects, not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (morning drowsiness / hangover, dizziness and headache, bitter/metallic taste). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (15–30 minutes, take it IN BED, not on the sofa.)",
      title: "Therapeutic effect builds",
      description: "15–30 minutes: take it IN BED, not on the sofa. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Zolpidem is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Zolpidem take to work?",
      answer: "15–30 minutes: take it IN BED, not on the sofa.. Like most psychotropic medications, the full benefit builds gradually, some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Zolpidem?",
      answer: "The most frequently reported effects are: Morning drowsiness / hangover, Dizziness and headache, Bitter/metallic taste, Rebound insomnia on stopping, Gastrointestinal upset. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Zolpidem suddenly?",
      answer: "No. Taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose. In that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Zolpidem habit-forming?",
      answer: "Dependence or misuse potential exists; see the warnings in this guide.. However, every patient should take Zolpidem exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Zolpidem during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure. Zolpidem may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), zolpidem monograph, p. 139",
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
        source: "FDA Prescribing Information for Ambien (Zolpidem)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for zolpidem — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Zolpidem",
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
      name: "Eszopiclone",
      slug: "eszopiclone",
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
      name: "Insomnia — sleep-onset difficulty (short-term)",
      relationship: "primary",
    },
    {
      name: "Insomnia — onset AND maintenance (CR form)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Zolpidem",
      type: "drug",
      href: "/drugs/zolpidem",
      note: "The drug you're reading about",
    },
    {
      label: "Z-Drug",
      type: "class",
      href: "#mechanism",
      note: "Non-Benzodiazepine Hypnotic (Z-Drug)",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-A receptors containing alpha-1 subunits (selective PAM)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Prefrontal Cortex",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Insomnia: sleep-onset difficulty (short-term)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Insomnia: onset AND maintenance (CR form)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Complex sleep behaviours (sleep-walking/driving/eating)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Next-morning driving impairment",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Morning drowsiness / hangover",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide. Zolpidem",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The world's default sleeping pill: alpha-1-selective GABA modulation for sleep onset without full benzodiazepine breadth.",
    summary: "Zolpidem is a prescription medicine used to treat insomnia: sleep-onset difficulty (short-term). It belongs to a well-studied class of medicines and works gradually, most people notice the benefit over weeks, not days.",
    mechanism: "Zolpidem is the most-used modern sleeping tablet: it works on the brain's sleep chemical (GABA) selectively, helping you fall asleep with fewer of the daytime-sedation effects of older sleeping pills. Take it only when you can spend 7–8 hours in bed, never with alcohol, and stop and call your doctor immediately if you ever sleep-walk or do anything while not fully awake.",
    sideEffects: "The most common side effects are: morning drowsiness / hangover, dizziness and headache, bitter/metallic taste, rebound insomnia on stopping, gastrointestinal upset. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Complex sleep behaviours (sleep-walking/driving/eating) and Next-morning driving impairment. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you: there is almost always a solution.",
    monitoring: "Your doctor will monitor: morning impairment / hangover (every review); complex sleep behaviours (ask at every review); course duration (every prescription). Keep every appointment: these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take, including over-the-counter and herbal products. Common interacting agents include: Alcohol and CNS depressants, Ketoconazole and strong 3A4 inhibitors, Rifampicin (inducer), SSRIs. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Zolfresh",
        manufacturer: "Abbott",
        strengths: "5, 10 mg",
      },
      {
        name: "Nitrest",
        manufacturer: "Sun",
        strengths: "5, 10 mg",
      },
      {
        name: "Zolpidem generic",
        manufacturer: "multiple",
        strengths: "5, 10 mg",
      },
    ],
    typicalDoses: "5–10 mg at bedtime (5 mg in women); CR 6.25–12.5 mg.",
    prescribingScenarios: [
      "Short-course insomnia in general practice: often over-continued; review discipline is the intervention.",
      "Hospital inpatient sleep protocols.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Course length review; morning-impairment and sleep-behaviour questions at every repeat.",
    patientCounselling: [
      "Take only when already in bed with lights out.",
      "Never with alcohol; no driving before 7–8 hours have passed.",
      "Report any sleep-walking or odd night behaviours immediately.",
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
    available: true,
    note: "Generic zolpidem widely available.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Non-Benzodiazepine Hypnotics",
    members: [
      {
        name: "Zolpidem",
        slug: "zolpidem",
        relationship: "This guide",
        distinguishing: "Sleep onset in a non-benzodiazepine molecule: the default Z-drug",
      },
      {
        name: "Eszopiclone",
        slug: "eszopiclone",
        relationship: "Same class (Z-Drug)",
        distinguishing: "The 6-month-trial Z-drug with maintenance cover",
      },
      {
        name: "Zaleplon",
        slug: "zaleplon",
        relationship: "Same class (Z-Drug)",
        distinguishing: "Middle-of-the-night dosing: cleared before morning",
      },
      {
        name: "Zopiclone",
        slug: "zopiclone",
        relationship: "Same class (Z-Drug)",
        distinguishing: "The Commonwealth Z-drug: 5-hour cover with taste signature",
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
      question: "Which molecular target does Zolpidem primarily act on?",
      options: [
        "GABA-A receptors containing alpha-1 subunits (selective PAM)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Zolpidem acts primarily at GABA-A receptors containing alpha-1 subunits (selective PAM). Zolpidem is a non-benzodiazepine selective GABA-A positive allosteric modulator with preferential alpha-1 subunit binding — the subunit pattern most associated with sedation/sleep.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Zolpidem?",
      options: ["Morning drowsiness / hangover", "Dizziness and headache", "Bitter/metallic taste", "Rebound insomnia on stopping"],
      correctIndex: 0,
      explanation: "Morning drowsiness / hangover — Dose-related; women clear zolpidem slower (half the standard female dose in several countries).",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Zolpidem for sleep-onset insomnia (women)?",
      options: ["5 mg", "5 mg (twice that)", "There is no established dosing", "Individualised — no typical range"],
      correctIndex: 0,
      explanation: "For sleep-onset insomnia (women): start 5 mg at bedtime, target 5 mg, maximum 5 mg. Only as needed; 5 mg ceiling",
      afterSectionId: "prescriber-guide",
    },
    {
      id: "slp-zol-01",
      question: "A 34-year-old woman on zolpidem 10 mg at bedtime for 3 weeks is brought in by her family after being found at 2 am preparing food in the kitchen, and on another night driving the car. She has no memory of either episode. What is the correct interpretation and action?",
      options: [
        "Complex sleep behaviour with amnesia, the boxed-warning adverse effect of zolpidem; stop the drug immediately",
        "A normal parasomnia merely aggravated by coffee; continue the same dose with a caffeine restriction",
        "Nocturnal seizure activity; add carbamazepine and continue zolpidem unchanged",
        "Deliberate drug-seeking behaviour; switch her to a benzodiazepine such as diazepam"
      ],
      correctIndex: 0,
      explanation: "Sleep-driving and sleep-eating with no memory of the event are the signature complex sleep behaviours that carry a boxed warning for zolpidem, so the correct action is immediate withdrawal of the drug. These are not benign dose-normal parasomnias and not a reason to switch to a benzodiazepine, which would add its own hangover and dependence burden. Katzung records FDA warnings for sleep-driving and somnambulistic behaviour with the sedative-hypnotics, and any patient describing night-time activity without recall on a Z-drug must have the hypnotic stopped at once.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "slp-zol-02",
      question: "A 52-year-old woman has been taking immediate-release zolpidem 10 mg at bedtime. She reports daytime sleepiness and failed an early-morning driving simulation assessment. Which adjustment reflects the 2013 FDA labelling change?",
      options: [
        "Split the 10 mg tablet into two halves taken 6 hours apart",
        "Halve the dose to 5 mg, because women clear zolpidem more slowly and are more susceptible to next-morning impairment",
        "Double the dose to 20 mg so that tolerance to the sedative effect develops faster",
        "Switch to triple the bedtime dose of eszopiclone for smoother coverage"
      ],
      correctIndex: 1,
      explanation: "In 2013 the FDA required the recommended immediate-release zolpidem dose for women to be cut in half to 5 mg, because female patients clear the drug more slowly and showed next-morning driving impairment on the higher dose. Raising the dose, splitting it through the night, or moving to a longer half-life agent would all worsen residual sedation. Zolpidem is metabolised by CYP3A4 and its elimination half-life is greater in women and increased in the elderly, which is the pharmacokinetic basis of the label change.",
      afterSectionId: "quick-facts",
    },
    {
      id: "slp-zol-03",
      question: "Zolpidem's receptor pharmacology is best described as:",
      options: [
        "A competitive antagonist at melatonin MT1 and MT2 receptors in the suprachiasmatic nucleus",
        "An inverse agonist at the benzodiazepine site that raises arousal by reducing GABA tone",
        "A positive allosteric modulator of the GABA-A receptor that binds selectively at the alpha-1 (BZ1)-containing subtype",
        "A direct agonist at the GABA binding site itself, mimicking GABA at all subunit combinations"
      ],
      correctIndex: 2,
      explanation: "Zolpidem is a non-benzodiazepine (imidazopyridine) hypnotic that potentiates GABA at GABA-A receptors containing the alpha-1 subunit, producing strong hypnotic-amnesic action with little anticonvulsant or muscle-relaxant effect. It does not open the chloride channel directly like barbiturates, and it has no action at melatonin receptors, which are the targets of ramelteon and tasimelteon. Because it binds at the benzodiazepine site, flumazenil can displace it.",
      afterSectionId: "mechanism",
    },
    {
      id: "slp-zol-04",
      question: "A 40-year-old man on rifampicin for spinal tuberculosis says his nightly zolpidem no longer puts him to sleep. What is the pharmacokinetic explanation?",
      options: [
        "Rifampicin inhibits CYP3A4, causing toxic zolpidem accumulation and rebound insomnia",
        "Rifampicin induces renal clearance of unchanged zolpidem, which is the drug's main elimination route",
        "Rifampicin down-regulates GABA-A alpha-1 subunit expression, so the receptor no longer responds to zolpidem",
        "Rifampicin induces CYP3A4, accelerating zolpidem's hepatic metabolism and lowering its hypnotic levels"
      ],
      correctIndex: 3,
      explanation: "Zolpidem is rapidly metabolised to inactive products by hepatic CYP3A4, so potent inducers such as rifampicin reduce exposure and the hypnotic effect appears to fade. Inhibition is the opposite of what is happening here, and zolpidem is cleared by hepatic metabolism rather than by renal excretion of unchanged drug. Receptor down-regulation is not the mechanism of this interaction.",
      afterSectionId: "timeline",
    },
    {
      id: "slp-zol-05",
      question: "Which pattern of actions distinguishes zolpidem from classical benzodiazepines such as temazepam?",
      options: [
        "Pronounced hypnotic effect with negligible anticonvulsant and muscle-relaxant actions",
        "Equally strong anticonvulsant, anxiolytic and muscle-relaxant actions alongside hypnosis",
        "Marked suppression of REM sleep with reversal of the normal stage distribution",
        "Potent anxiolytic action that makes it a first-line drug for panic disorder"
      ],
      correctIndex: 0,
      explanation: "Because zolpidem acts selectively at the alpha-1-containing GABA-A subtype that mediates hypnosis, it shortens sleep latency with minimal residual sedation, but the anticonvulsant and muscle-relaxant actions that come from other alpha subtypes are not evident, and Tripathi explicitly notes its anticonvulsant and antianxiety effects are absent. It therefore cannot replace benzodiazepines in panic disorder or seizures. Its effect on sleep stages, including REM, is slight rather than marked.",
      afterSectionId: "neurotransmitters",
    },
    {
      id: "slp-zol-06",
      question: "A young woman is brought to the emergency department drowsy after ingesting her flatmate's zolpidem tablets. Which intervention is expected to reverse the hypnotic effect?",
      options: [
        "Physostigmine, to reverse the central anticholinergic syndrome produced by zolpidem",
        "Flumazenil, which competes at the benzodiazepine site on the GABA-A receptor where zolpidem binds",
        "Naloxone, because Z-drugs act at mu-opioid receptors in overdose",
        "N-acetylcysteine, to replenish glutathione stores consumed by zolpidem metabolism"
      ],
      correctIndex: 1,
      explanation: "Zolpidem binds at the benzodiazepine site of the GABA-A receptor, so the competitive antagonist flumazenil can reverse its sedation, a favourite exam link between the benzodiazepine site and the Z-drugs. Naloxone targets opioid receptors and N-acetylcysteine is the paracetamol antidote, and neither has any role here. Zolpidem is not a significant anticholinergic, so physostigmine would not help.",
      afterSectionId: "high-yield-summary",
    },
    {
      id: "slp-zol-07",
      question: "A pharmacist in Pune dispenses NITREST (zolpidem) 10 mg to a 46-year-old teacher for short-term insomnia. Which counselling point is the most important?",
      options: [
        "Continue the tablet nightly for at least six months to build tolerance to the sedation",
        "If one tablet fails, take a second at 3 am and still drive to work at 7 am",
        "Take a single dose immediately at bedtime, never with alcohol, and do not drive if you wake before the effect has fully worn off",
        "Take the tablet with a bedtime snack and antacid to prolong its absorption through the night"
      ],
      correctIndex: 2,
      explanation: "Zolpidem acts within about 30 to 60 minutes and its short half-life (about 2 hours per Tripathi) means a single bedtime dose only, no alcohol, and no driving after early-morning waking; complex sleep behaviours such as sleep-driving carry the boxed warning. A six-month nightly course contradicts all short-course hypnotic guidance, and redosing at night before an early drive is exactly the pattern that produces next-morning impairment. Antacids do not convert zolpidem into a sustained-release product.",
      afterSectionId: "quick-facts",
    },
    {
      id: "slp-zol-08",
      question: "Regarding regulatory scheduling of hypnotics, which contrast is correct?",
      options: [
        "Ramelteon is Schedule IV, whereas zolpidem is freely sold over the counter worldwide",
        "Both zolpidem and ramelteon are Schedule II drugs comparable to amphetamine",
        "Neither zolpidem nor ramelteon carries any controlled-substance status anywhere",
        "Zolpidem is a controlled substance (Schedule IV in the USA), whereas ramelteon has no abuse potential and is not scheduled"
      ],
      correctIndex: 3,
      explanation: "Z-drugs such as zolpidem retain benzodiazepine-like dependence potential and are scheduled (C-IV in the USA), while ramelteon's melatonergic mechanism produces no euphoria or dependence and the drug is unscheduled, which is why it is the textbook choice for the insomniac with a substance-use history. Amphetamine-level Schedule II status is wrong for both, and zolpidem is prescription-only rather than an over-the-counter sale. Keeping the scheduled-versus-unscheduled contrast in mind is a recurring exam theme.",
      afterSectionId: "high-yield-summary",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Zolpidem in two sentences.",
      answer: "Zolpidem is a non-benzodiazepine selective GABA-A positive allosteric modulator with preferential alpha-1 subunit binding: the subunit pattern most associated with sedation/sleep. Net effect: Hypnotic effect (sleep onset; CR adds maintenance) with less anxiolysis, muscle relaxation, and anticonvulsant action than benzodiazepines.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Zolpidem.",
      answer: "Insomnia (sleep-onset difficulty (short-term), Insomnia) onset AND maintenance (CR form). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Zolpidem and how you would manage it.",
      answer: "Complex sleep behaviours (sleep-walking/driving/eating): The boxed-warning signature: automatic behaviours with partial or full amnesia; accidents and injuries reported. Management: Stop immediately on any such event; contraindicated thereafter.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Zolpidem require?",
      answer: "Morning impairment / hangover (Every review); Complex sleep behaviours (Ask at every review); Course duration (Every prescription)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Zolpidem that separates safe prescribers from unsafe ones.",
      answer: "In bed, lights out, within 15 minutes of the dose: the ritual that prevents sleep-walking.",
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
      checkpoint: "You now know what Zolpidem is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Zolpidem works, from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Zolpidem safely: indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Zolpidem.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Zolpidem with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Zolpidem.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "15–30 minutes: take it IN BED, not on the sofa.",
    ],
    ifItWorks: [
      "Continue Zolpidem at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Zolpidem (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Zolpidem follow directly from its receptor and organ effects: predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "High for 2–3 hours: the intended effect; morning residue is the adverse effect.",
    dosing: [
      {
        indication: "Sleep-onset insomnia (women)",
        starting: "5 mg at bedtime",
        titration: "Only as needed; 5 mg ceiling",
        target: "5 mg",
        max: "5 mg",
      },
      {
        indication: "Sleep-onset insomnia (men)",
        starting: "5–10 mg at bedtime",
        titration: "Only as needed",
        target: "5–10 mg",
        max: "10 mg",
      },
      {
        indication: "Onset + maintenance (CR)",
        starting: "6.25 mg (women) / 12.5 mg (men) at bedtime",
        titration: "Swallow whole: do not crush the dual-layer",
        target: "6.25–12.5 mg",
        max: "12.5 mg",
      },
      {
        indication: "Elderly/hepatic impairment",
        starting: "5 mg (2.5 mg where frail)",
        titration: "Half-speed titration; falls surveillance",
        target: "5 mg",
        max: "5 mg",
      },
    ],
    dosageForms: [
      "Tablets 5, 10 mg",
      "CR tablets 6.25, 12.5 mg",
      "Sublingual (2.8/5.4 mg middle-of-night niche)",
      "Oral spray/spray (historic)",
    ],
    dosingTips: [
      "Take IN bed, lights out, not 30 minutes before bed on the couch.",
      "7–8 hours in bed guaranteed before driving.",
      "One event of sleep-walking/eating/driving = stop permanently.",
      "Pair every course with CBT-I referral: the drug buys time for the therapy to work.",
    ],
    overdose: [
      "Overdose with Zolpidem is managed supportively: no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Zolpidem is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists; see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 2.5 hours..",
      "Metabolism: Hepatic CYP3A4 (and 1A2 minor)..",
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
      "Rapid sleep onset with limited half-life.",
      "Lower dependence than benzodiazepine hypnotics.",
      "Sex-specific dosing improves safety.",
    ],
    potentialDisadvantages: [
      "Complex-sleep-behaviour boxed warning.",
      "Morning driving impairment (esp. CR/high dose).",
      "Rebound insomnia.",
      "Not a maintenance treatment. CBT-I is.",
    ],
    primaryTargetSymptoms: ["Sleep-onset insomnia", "Onset + maintenance (CR)"],
    pearls: [
      "In bed, lights out, within 15 minutes of the dose: the ritual that prevents sleep-walking.",
      "Women get 5 mg: the pharmacokinetic fact that changed labelling.",
      "CR for the 3 am waker, IR for the 11 pm non-sleeper.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017); facts are paraphrased, not reproduced.",
  ],
};
