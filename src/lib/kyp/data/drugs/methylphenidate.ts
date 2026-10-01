import type { Drug } from "../types";

/**
 * Methylphenidate (d,l) — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), methylphenidate (d,l) monograph (book p. 77)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const methylphenidate: Drug = {
  /* ---- Identity ---- */
  slug: "methylphenidate",
  genericName: "Methylphenidate (d,l)",
  brandNames: ["Ritalin", "Concerta", "Ritalin LA", "Addwize / Inspiral (India)"],
  drugClass: "stimulant",
  drugClassLabel: "Stimulant",
  drugClassFullName: "CNS Stimulant (Dopamine-Norepinephrine Reuptake Inhibitor)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Stimulants", "Methylphenidate (d,l)"],
  /* ---- Hero / summary ---- */
  tagline: "The first-line stimulant — dopamine-norepinephrine reuptake inhibition that sharpens the prefrontal signal-to-noise ratio.",
  summary: "Methylphenidate is the most-prescribed ADHD medication worldwide: a piperazine stimulant that blocks the dopamine and norepinephrine transporters (DAT/NET) in the prefrontal cortex and striatum, raising catecholamine signal clarity. Approved from age 6 in ADHD, its clinical effects appear within 30-60 minutes. A galaxy of formulations maps duration to the school day. Controlled-substance discipline, cardiovascular and growth monitoring, and rebound management frame its use.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Methylphenidate (d,l) — from its molecular target (DAT and NET (blockade)) to clinical effect.",
    "List the FDA-approved and off-label uses of Methylphenidate (d,l).",
    "Predict the common and serious side effects of Methylphenidate (d,l) from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Methylphenidate (d,l).",
    "Compare Methylphenidate (d,l) with other stimulants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Methylphenidate blocks the dopamine transporter (DAT) and norepinephrine transporter (NET), raising synaptic catecholamines predominantly in the prefrontal cortex and striatum.",
    molecularTarget: "DAT and NET (blockade)",
    effect: "Enhanced prefrontal signal-to-noise: improved attention, reduced impulsivity, moderated activity — hyperactivity improves because cortical self-regulation is restored.",
    steps: [
      "Blocks DAT and NET at therapeutic doses, preventing reuptake of dopamine and norepinephrine.",
      "Cortical (prefrontal) effects dominate at clinical doses — executive attention and impulse control improve.",
      "The stimulant paradox — hyperactivity improving on a stimulant — is prefrontal regulation restored, not sedation.",
      "Onset 30-60 min (immediate release); duration 3-5 h (IR) up to 10-12 h (long-acting forms).",
      "Racemic (d,l) methylphenidate; the d-isomer carries most activity (marketed as dexmethylphenidate).",
    ],
    pharmacokinetics: "IR peak 1-2 h; long-acting forms use osmotic or bead-release mechanics for school-day coverage. Esterase (CES1A1) metabolism with negligible CYP involvement.",
    halfLife: "2-3 hours.",
    activeMetabolite: "d-threo-methylphenidate (the active isomer).",
    metabolism: "Hepatic carboxylesterase CES1A1 — negligible CYP involvement, few interactions.",
    excretion: "Renal ritalinic acid metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Methylphenidate (d,l)",
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
  neurotransmitters: ["Dopamine (DA)", "Norepinephrine (NE)"],
  receptors: [
    "DAT (dopamine transporter — blocked)",
    "NET (norepinephrine transporter — blocked)",
  ],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: ["mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "ADHD — ages 6 and above",
      status: "fda-approved",
      description: "First-line pharmacotherapy; multimodal with behavioural therapy.",
      ageGroup: "≥6 years",
    },
    {
      name: "Narcolepsy (adjunct/historic)",
      status: "off-label",
      description: "Largely replaced by modafinil/sodium oxybate but effective.",
    },
    {
      name: "Apathy and cognitive symptoms in neurological disorders",
      status: "off-label",
      description: "Stroke, traumatic brain injury — selected use.",
    },
    {
      name: "Treatment-resistant depression (augmentation)",
      status: "off-label",
      description: "Occasional short-term augmentation under specialist care.",
    },
  ],
  contraindications: [
    {
      name: "Concurrent MAOI use or within 14 days",
      severity: "absolute",
      rationale: "Hypertensive crisis risk.",
    },
    {
      name: "Structural cardiac disease / severe arrhythmia",
      severity: "relative",
      rationale: "Stimulant contraindication domain — cardiology evaluation first.",
    },
    {
      name: "Active psychosis or mania",
      severity: "relative",
      rationale: "Stimulants can exacerbate both.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Abuse, dependence, and serious cardiovascular events",
      text: "High potential for abuse and dependence (controlled substance). Assess abuse risk and monitor for misuse. Serious cardiovascular events reported — screen cardiac and family sudden-death history before starting.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Appetite suppression and weight loss",
      frequency: "very-common",
      severity: "moderate",
      description: "The most common adverse effect — lunch-skipping in children is the practical form.",
      management: "Breakfast before the dose; evening nutrition; growth charts every visit.",
    },
    {
      name: "Insomnia (if dosed late)",
      frequency: "common",
      severity: "moderate",
      description: "Duration outlasting the day disturbs sleep onset.",
      management: "No IR dosing after mid-afternoon.",
    },
    {
      name: "Headache and stomach ache",
      frequency: "common",
      severity: "mild",
      description: "The classic first-week paediatric complaints.",
      management: "Take with food; transient.",
    },
    {
      name: "Rebound (wear-off) phenomena",
      frequency: "common",
      severity: "moderate",
      description: "As levels fall: irritability, tearfulness, hyperactivity rebound.",
      management: "Long-acting forms smooth the fall.",
    },
    {
      name: "Tachycardia and blood pressure rise",
      frequency: "common",
      severity: "moderate",
      description: "Sympathomimetic effect — usually mild.",
      management: "Monitor HR/BP every visit.",
    },
    {
      name: "Emotional blunting / over-focusing",
      frequency: "uncommon",
      severity: "moderate",
      description: "Over-titration sign — the 'robot' child.",
      management: "Dose reduction.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Serious cardiovascular events",
      frequency: "rare",
      severity: "life-threatening",
      description: "Sudden death in structural heart disease; stroke/MI reported.",
      management: "Cardiac history screen; cardiology referral if positive.",
    },
    {
      name: "Psychosis or mania induction",
      frequency: "rare",
      severity: "severe",
      description: "Hallucinations or mania — usually dose-related or in vulnerable patients.",
      management: "Stop; reassess diagnosis.",
    },
    {
      name: "Growth suppression (long-term)",
      frequency: "uncommon",
      severity: "moderate",
      description: "1-2 cm average over years of continuous use — contested but monitored.",
      management: "Height every 6 months.",
    },
    {
      name: "Seizure threshold lowering",
      frequency: "uncommon",
      severity: "severe",
      description: "Caution in epilepsy.",
      management: "Neurology input if seizures emerge.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline, then every visit",
      rationale: "Sympathomimetic cardiovascular effects.",
    },
    {
      parameter: "Height, weight, appetite",
      frequency: "Baseline, then every 6 months (children)",
      rationale: "Growth and appetite surveillance.",
    },
    {
      parameter: "Sleep review",
      frequency: "Every visit",
      rationale: "Late-dose insomnia.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Hypertensive crisis.",
      action: "14-day washout.",
    },
    {
      drug: "OTC decongestants and sympathomimetics",
      severity: "major",
      mechanism: "Additive cardiovascular stimulation.",
      action: "Counsel; check combination products.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited human data; no clear teratogenic signal. Many women with severe ADHD continue at the lowest effective dose after counselling; non-stimulants preferred in pregnancy.",
    lactation: "Small amounts in milk; feed before the morning dose; infant monitoring.",
  },
  renalAdjustment: "No dose adjustment; metabolites renally cleared without accumulation.",
  hepaticAdjustment: "No significant concern (esterase-based metabolism).",
  /* ---- Education ---- */
  patientExplanation: "Methylphenidate is the standard medicine for ADHD: it raises the brain chemicals (dopamine and noradrenaline) that the attention system uses, sharpening focus and self-control. It works within about half an hour and wears off in a few hours (long forms cover a school day). Commonest effects are reduced appetite and, if taken too late, trouble sleeping — and it is a controlled medicine, prescribed with care.",
  patientEducationPoints: [
    "Take it in the morning — later doses disrupt sleep.",
    "Appetite can fall: eat breakfast before the dose, and track weight.",
    "Tell your doctor about any chest pain, fainting, or palpitations.",
    "This is a controlled medicine — store it safely and never share it.",
    "Benefit from Methylphenidate (d,l) builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The stimulant paradox explained: raising cortical catecholamines RESTORES regulation — a calmer child on a stimulant is neuroscience, not paradox.",
    "Formulation is the prescribing: IR (3-4 h), LA (8 h), OROS once-daily (10-12 h) — match duration to the day's demands.",
    "Rebound is a pharmacokinetic cliff: treat it by smoothing (long-acting), not escalating.",
    "Esterase metabolism = almost no CYP interactions — one of the cleanest profiles in psychopharmacology.",
    "Screen for bipolar disorder before starting: an unrecognised bipolar patient on a stimulant is a switch waiting to happen.",
    "Teacher ratings beat clinic impressions for titration — the classroom is the laboratory.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Methylphenidate (d,l): Methylphenidate blocks the dopamine transporter (DAT) and norepinephrine transporter (NET), raising synaptic catecholamines predominantly in the prefrontal cortex and striatum.",
        "Uses of Methylphenidate (d,l): ADHD — ages 6 and above; Narcolepsy (adjunct/historic); Apathy and cognitive symptoms in neurological disorders; Treatment-resistant depression (augmentation)",
        "Mechanism: DAT + NET blockade — prefrontal dominant.",
        "Onset 30-60 min; IR 3-5 h; long-acting 8-12 h — formulation is the prescription.",
      ],
      practical: [
        "Prescribe Methylphenidate (d,l) for adhd — ages 6 and above with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline, then every visit); Height, weight, appetite (Baseline, then every 6 months (children)); Sleep review (Every visit)",
      ],
      longAnswer: [
        "Methylphenidate (d,l): mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: DAT + NET blockade — prefrontal dominant.",
        "Onset 30-60 min; IR 3-5 h; long-acting 8-12 h — formulation is the prescription.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: DAT + NET blockade — prefrontal dominant.",
        "Onset 30-60 min; IR 3-5 h; long-acting 8-12 h — formulation is the prescription.",
        "First-line ADHD from age 6.",
        "Commonest adverse effects: appetite suppression, insomnia, headache, rebound.",
        "Class black box: abuse/dependence + serious cardiovascular events.",
        "CES1A1 esterase metabolism — negligible CYP interactions.",
      ],
      pyqConcepts: [
        "Mechanism/target of Methylphenidate (d,l)",
        "Key adverse effect: Serious cardiovascular events",
        "Dosing and titration of Methylphenidate (d,l)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Methylphenidate (d,l) develops serious cardiovascular events — next best step?",
        "When to choose Methylphenidate (d,l) over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: DAT and NET (blockade)",
        "Most common side effects: Appetite suppression and weight loss, Insomnia (if dosed late), Headache and stomach ache",
        "Key contraindication: Concurrent MAOI use or within 14 days",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Match formulation to the day — homework-time coverage is a legitimate long-acting indication.",
        "The 'quiet child with no personality' is over-dosed: reduce, don't abandon.",
        "The stimulant paradox explained: raising cortical catecholamines RESTORES regulation — a calmer child on a stimulant is neuroscience, not paradox.",
        "Formulation is the prescribing: IR (3-4 h), LA (8 h), OROS once-daily (10-12 h) — match duration to the day's demands.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: DAT + NET blockade — prefrontal dominant.",
    "Onset 30-60 min; IR 3-5 h; long-acting 8-12 h — formulation is the prescription.",
    "First-line ADHD from age 6.",
    "Commonest adverse effects: appetite suppression, insomnia, headache, rebound.",
    "Class black box: abuse/dependence + serious cardiovascular events.",
    "CES1A1 esterase metabolism — negligible CYP interactions.",
    "Growth surveillance (height 6-monthly); HR/BP every visit.",
    "MAOI contraindication; avoid OTC decongestants.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — adhd — ages 6 and above",
      presentation: "A patient presenting with adhd — ages 6 and above, started on Methylphenidate (d,l).",
      history: "A adult patient presents with a adhd — ages 6 and above picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with adhd — ages 6 and above; physical examination and baseline investigations are unremarkable.",
      diagnosis: "ADHD — ages 6 and above. Differentials are considered and excluded clinically.",
      rationale: "Methylphenidate (d,l) is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Stimulant) with strong evidence in this condition.",
      management: "Started at 5 mg twice daily (morning + midday), titrated to 20-30 mg/day divided with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Methylphenidate (d,l) takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Stimulant comparison — choosing within the class",
      primaryDrug: "Methylphenidate (d,l)",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "DAT and NET (blockade)",
          comparisons: [
            {
              drug: "Lisdexamfetamine",
              value: "See full guide",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "See full guide",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "See full guide",
            },
            {
              drug: "Dexmethylphenidate",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "2-3 hours.",
          comparisons: [
            {
              drug: "Lisdexamfetamine",
              value: "—",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "—",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "—",
            },
            {
              drug: "Dexmethylphenidate",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Lisdexamfetamine",
              value: "Weight neutral to reducing — appetite effects common.",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "Weight neutral to reducing — appetite effects common.",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "Weight neutral to reducing — appetite effects common.",
            },
            {
              drug: "Dexmethylphenidate",
              value: "Weight neutral to reducing — appetite effects common.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Not sedating — the opposite; rebound fatigue occurs at wear-off.",
          comparisons: [
            {
              drug: "Lisdexamfetamine",
              value: "Not sedating.",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "Not sedating.",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "Not sedating.",
            },
            {
              drug: "Dexmethylphenidate",
              value: "Not sedating.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The default stimulant — 60 years of ADHD first-line",
          comparisons: [
            {
              drug: "Lisdexamfetamine",
              value: "The misuse-resistant long-acting prodrug stimulant",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "The pure d-isomer — stronger central, softer peripheral",
            },
            {
              drug: "Amphetamine (d,l)",
              value: "The Adderall mixture — d for focus, l for wake",
            },
            {
              drug: "Dexmethylphenidate",
              value: "The active isomer — methylphenidate distilled",
            },
          ],
        },
      ],
      takeaway: "All stimulants share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Methylphenidate (d,l) reaches peak plasma concentration and begins acting at its molecular target (DAT and NET (blockade)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (appetite suppression and weight loss, insomnia (if dosed late), headache and stomach ache). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Attention effect within 30-60 minutes of IR dosing.)",
      title: "Therapeutic effect builds",
      description: "Attention effect within 30-60 minutes of IR dosing. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Methylphenidate (d,l) is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Methylphenidate (d,l) take to work?",
      answer: "Attention effect within 30-60 minutes of IR dosing.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Methylphenidate (d,l)?",
      answer: "The most frequently reported effects are: Appetite suppression and weight loss, Insomnia (if dosed late), Headache and stomach ache, Rebound (wear-off) phenomena, Tachycardia and blood pressure rise. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Methylphenidate (d,l) suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Methylphenidate (d,l) habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Methylphenidate (d,l) exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Methylphenidate (d,l) during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Methylphenidate (d,l) may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE NG87 (ADHD); AAP ADHD Clinical Practice Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), methylphenidate (d,l) monograph, p. 77",
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
        source: "FDA Prescribing Information for Ritalin (Methylphenidate (d,l))",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for methylphenidate (d,l) — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Methylphenidate (d,l)",
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
      name: "Lisdexamfetamine",
      slug: "lisdexamfetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Dextroamphetamine (d-Amphetamine)",
      slug: "dexamphetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Amphetamine (d,l)",
      slug: "amphetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Dexmethylphenidate",
      slug: "dexmethylphenidate",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Pemoline",
      slug: "pemoline",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
  ],
  relatedConditions: [
    {
      name: "ADHD — ages 6 and above",
      relationship: "primary",
    },
    {
      name: "Narcolepsy (adjunct/historic)",
      relationship: "off-label",
    },
    {
      name: "Apathy and cognitive symptoms in neurological disorders",
      relationship: "off-label",
    },
    {
      name: "Treatment-resistant depression (augmentation)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Methylphenidate (d,l)",
      type: "drug",
      href: "/drugs/methylphenidate",
      note: "The drug you're reading about",
    },
    {
      label: "Stimulant",
      type: "class",
      href: "#mechanism",
      note: "CNS Stimulant (Dopamine-Norepinephrine Reuptake Inhibitor)",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Norepinephrine (NE)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "DAT and NET (blockade)",
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
      label: "Nucleus Accumbens",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "ADHD — ages 6 and above",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Narcolepsy (adjunct/historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Apathy and cognitive symptoms in neurological disorders",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Serious cardiovascular events",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Psychosis or mania induction",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Appetite suppression and weight loss",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Methylphenidate (d,l)",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The first-line stimulant — dopamine-norepinephrine reuptake inhibition that sharpens the prefrontal signal-to-noise ratio.",
    summary: "Methylphenidate (d,l) is a prescription medicine used to treat adhd — ages 6 and above. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Methylphenidate is the standard medicine for ADHD: it raises the brain chemicals (dopamine and noradrenaline) that the attention system uses, sharpening focus and self-control. It works within about half an hour and wears off in a few hours (long forms cover a school day). Commonest effects are reduced appetite and, if taken too late, trouble sleeping — and it is a controlled medicine, prescribed with care.",
    sideEffects: "The most common side effects are: appetite suppression and weight loss, insomnia (if dosed late), headache and stomach ache, rebound (wear-off) phenomena, tachycardia and blood pressure rise, emotional blunting / over-focusing. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Serious cardiovascular events and Psychosis or mania induction. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline, then every visit); height, weight, appetite (baseline, then every 6 months (children)); sleep review (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Concurrent MAOI use or within 14 days, Structural cardiac disease / severe arrhythmia, Active psychosis or mania. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, OTC decongestants and sympathomimetics. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Addwize",
        manufacturer: "Sun",
        strengths: "10, 20 mg",
      },
      {
        name: "Inspiral",
        manufacturer: "Intas",
        strengths: "10-40 mg LA",
      },
      {
        name: "Ritalin/Concerta (imported where available)",
        manufacturer: "Novartis/Janssen network",
        strengths: "variable",
      },
    ],
    typicalDoses: "IR 5-20 mg bd; LA 10-40 mg morning.",
    prescribingScenarios: [
      "School-age ADHD in child guidance clinics.",
      "Adult ADHD — increasingly recognised in Indian practice.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "HR/BP + height/weight 6-monthly; Schedule X register and tablet counts.",
    patientCounselling: [
      "Breakfast before the dose; lunch is the meal at risk.",
      "No afternoon IR doses.",
      "Growth and heart checks are routine, not optional.",
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
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Stimulants",
    members: [
      {
        name: "Methylphenidate (d,l)",
        slug: "methylphenidate",
        relationship: "This guide",
        distinguishing: "The default stimulant — 60 years of ADHD first-line",
      },
      {
        name: "Lisdexamfetamine",
        slug: "lisdexamfetamine",
        relationship: "Same class (Stimulant)",
        distinguishing: "The misuse-resistant long-acting prodrug stimulant",
      },
      {
        name: "Dextroamphetamine (d-Amphetamine)",
        slug: "dexamphetamine",
        relationship: "Same class (Stimulant)",
        distinguishing: "The pure d-isomer — stronger central, softer peripheral",
      },
      {
        name: "Amphetamine (d,l)",
        slug: "amphetamine",
        relationship: "Same class (Stimulant)",
        distinguishing: "The Adderall mixture — d for focus, l for wake",
      },
      {
        name: "Dexmethylphenidate",
        slug: "dexmethylphenidate",
        relationship: "Same class (Stimulant)",
        distinguishing: "The active isomer — methylphenidate distilled",
      },
      {
        name: "Pemoline",
        slug: "pemoline",
        relationship: "Same class (Stimulant)",
        distinguishing: "The hepatotoxic last-resort — withdrawn from major markets",
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
      question: "Which molecular target does Methylphenidate (d,l) primarily act on?",
      options: ["DAT and NET (blockade)", "SERT (serotonin transporter)", "NET (norepinephrine transporter)", "D2 receptor"],
      correctIndex: 0,
      explanation: "Methylphenidate (d,l) acts primarily at DAT and NET (blockade). Methylphenidate blocks the dopamine transporter (DAT) and norepinephrine transporter (NET), raising synaptic catecholamines predominantly in the prefrontal cortex and striatum.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Methylphenidate (d,l)?",
      options: ["Appetite suppression and weight loss", "Insomnia (if dosed late)", "Headache and stomach ache", "Rebound (wear-off) phenomena"],
      correctIndex: 0,
      explanation: "Appetite suppression and weight loss — The most common adverse effect — lunch-skipping in children is the practical form.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Methylphenidate (d,l) for adhd (ir)?",
      options: ["20-30 mg/day divided", "60 mg/day", "20-30 mg/day divided (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For adhd (ir): start 5 mg twice daily (morning + midday), target 20-30 mg/day divided, maximum 60 mg/day. Increase by 5-10 mg/day weekly",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Methylphenidate (d,l) in two sentences.",
      answer: "Methylphenidate blocks the dopamine transporter (DAT) and norepinephrine transporter (NET), raising synaptic catecholamines predominantly in the prefrontal cortex and striatum. Net effect: Enhanced prefrontal signal-to-noise: improved attention, reduced impulsivity, moderated activity — hyperactivity improves because cortical self-regulation is restored.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Methylphenidate (d,l).",
      answer: "ADHD — ages 6 and above, Narcolepsy (adjunct/historic), Apathy and cognitive symptoms in neurological disorders, Treatment-resistant depression (augmentation). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Methylphenidate (d,l) and how you would manage it.",
      answer: "Serious cardiovascular events: Sudden death in structural heart disease; stroke/MI reported. Management: Cardiac history screen; cardiology referral if positive.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Methylphenidate (d,l) require?",
      answer: "Heart rate and blood pressure (Baseline, then every visit); Height, weight, appetite (Baseline, then every 6 months (children)); Sleep review (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Methylphenidate (d,l) that separates safe prescribers from unsafe ones.",
      answer: "Match formulation to the day — homework-time coverage is a legitimate long-acting indication.",
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
      checkpoint: "You now know what Methylphenidate (d,l) is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Methylphenidate (d,l) works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Methylphenidate (d,l) safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Methylphenidate (d,l).",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Methylphenidate (d,l) with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Methylphenidate (d,l).",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Attention effect within 30-60 minutes of IR dosing.",
      "Dose optimisation takes 1-2 weeks of titration against teacher/parent ratings.",
    ],
    ifItWorks: [
      "Continue Methylphenidate (d,l) at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Methylphenidate (d,l) (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Methylphenidate (d,l) follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Not sedating — the opposite; rebound fatigue occurs at wear-off.",
    dosing: [
      {
        indication: "ADHD (IR)",
        starting: "5 mg twice daily (morning + midday)",
        titration: "Increase by 5-10 mg/day weekly",
        target: "20-30 mg/day divided",
        max: "60 mg/day",
      },
      {
        indication: "ADHD (long-acting OROS)",
        starting: "18 mg every morning",
        titration: "Increase by 18 mg weekly",
        target: "18-54 mg/day (up to 72 adult)",
        max: "72 mg/day",
      },
    ],
    dosageForms: ["IR tablets 5, 10, 20 mg", "LA/ER capsules 10-60 mg", "OROS 18-72 mg", "Patch and suspension (some markets)"],
    dosingTips: [
      "Breakfast before the morning dose protects lunch appetite.",
      "No IR dosing after ~3 pm.",
      "Rebound at 4 pm is a formulation problem, not a dose problem.",
      "Controlled-substance discipline throughout.",
    ],
    overdose: [
      "Overdose with Methylphenidate (d,l) is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Methylphenidate (d,l) is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 2-3 hours..",
      "Metabolism: Hepatic carboxylesterase CES1A1 — negligible CYP involvement, few interactions..",
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
      "Fastest, most reliable ADHD effect in pharmacology.",
      "Duration-matched formulations.",
      "Sixty years of paediatric safety data.",
    ],
    potentialDisadvantages: [
      "Controlled-substance burden and misuse potential.",
      "Appetite/growth surveillance.",
      "Rebound cliffs with short-acting forms.",
    ],
    primaryTargetSymptoms: ["Inattention", "Hyperactivity and impulsivity", "Executive function"],
    pearls: [
      "Match formulation to the day — homework-time coverage is a legitimate long-acting indication.",
      "The 'quiet child with no personality' is over-dosed: reduce, don't abandon.",
      "The stimulant paradox explained: raising cortical catecholamines RESTORES regulation — a calmer child on a stimulant is neuroscience, not paradox.",
      "Formulation is the prescribing: IR (3-4 h), LA (8 h), OROS once-daily (10-12 h) — match duration to the day's demands.",
      "Rebound is a pharmacokinetic cliff: treat it by smoothing (long-acting), not escalating.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
