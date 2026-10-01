import type { Drug } from "../types";

/**
 * Atomoxetine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), atomoxetine monograph (book p. 12)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const atomoxetine: Drug = {
  /* ---- Identity ---- */
  slug: "atomoxetine",
  genericName: "Atomoxetine",
  brandNames: ["Strattera", "Tomoxetin (India)"],
  drugClass: "nri",
  drugClassLabel: "NRI",
  drugClassFullName: "Norepinephrine Reuptake Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "NRIs", "Atomoxetine"],
  /* ---- Hero / summary ---- */
  tagline: "The non-stimulant first-line — selective norepinephrine reuptake inhibition for 24-hour ADHD cover without abuse potential.",
  summary: "Atomoxetine is the selective norepinephrine reuptake inhibitor (NRI) approved for ADHD from age 6 through adulthood: a non-stimulant with zero abuse potential, full 24-hour coverage from once-daily dosing, and co-existing anxiety benefit — at the price of weeks-to-effect onset, milder overall efficacy than stimulants, the antidepressant-class suicidality warning, and rare hepatic injury.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Atomoxetine — from its molecular target (NET (norepinephrine transporter — selective blockade)) to clinical effect.",
    "List the FDA-approved and off-label uses of Atomoxetine.",
    "Predict the common and serious side effects of Atomoxetine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Atomoxetine.",
    "Compare Atomoxetine with other nris and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Atomoxetine selectively blocks the norepinephrine transporter, raising noradrenergic (and secondarily dopaminergic, in PFC) tone — a non-stimulant ADHD mechanism.",
    molecularTarget: "NET (norepinephrine transporter — selective blockade)",
    effect: "Catecholamine and wake-system enhancement with the agent's characteristic profile.",
    steps: [
      "Atomoxetine selectively blocks the norepinephrine transporter, raising noradrenergic (and secondarily dopaminergic, in PFC) tone — a non-stimulant ADHD mechanism.",
      "Prefrontal catecholamine enhancement sharpens attention and impulse control.",
      "The agent's formulation and half-life determine practical coverage.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 5 hours (extensive metabolisers); ~21 hours (poor metabolisers). — see mechanism and prescriber sections.",
    halfLife: "5 hours (extensive metabolisers); ~21 hours (poor metabolisers).",
    metabolism: "Hepatic.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Atomoxetine",
        sublabel: "Antidepressant",
        variant: "inhibit",
      },
      {
        id: "trans",
        label: "Monoamine transporter",
        sublabel: "Presynaptic reuptake pump",
        variant: "target",
      },
      {
        id: "mono",
        label: "Monoamines",
        sublabel: "Synaptic availability increases",
        variant: "output",
      },
      {
        id: "adapt",
        label: "Neuroadaptive changes",
        sublabel: "Receptor desensitisation, BDNF rise",
        variant: "process",
      },
      {
        id: "effect",
        label: "Antidepressant response",
        sublabel: "Weeks 2–6",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "trans",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "trans",
        to: "mono",
        label: "raises",
        type: "stimulate",
      },
      {
        from: "mono",
        to: "adapt",
        label: "triggers",
      },
      {
        from: "adapt",
        to: "effect",
        label: "produces",
      },
    ],
    caption: "Acute reuptake blockade within hours; clinical response after weeks of downstream adaptation — the central paradox of antidepressant pharmacology.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: [
    "Central monoaminergic systems (see mechanism)",
  ],
  receptors: [
    "NET (norepinephrine transporter — selective blockade)",
  ],
  brainRegionIds: ["prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "ADHD — ages 6 and above through adulthood",
      status: "fda-approved",
      description: "First-line non-stimulant: unscheduled, no abuse potential, full-day cover.",
    },
    {
      name: "ADHD with comorbid anxiety",
      status: "guideline",
      description: "Anxiolytic-neutral-to-positive profile suits anxious ADHD where stimulants worsen symptoms.",
    },
    {
      name: "ADHD in substance-use populations",
      status: "guideline",
      description: "No misuse potential — the stimulant alternative when diversion risk governs.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Atomoxetine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Noradrenergic crisis risk.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Suicidal thoughts and behaviours in children and adolescents",
      text: "Antidepressant-class warning: pooled paediatric trials showed emergent suicidality signals — monitor mood and ideation closely during early treatment and dose changes.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea and GI upset",
      frequency: "very-common",
      severity: "moderate",
      description: "Worst in week 1.",
      management: "Take with food; slow titration.",
    },
    {
      name: "Appetite suppression and weight loss",
      frequency: "common",
      severity: "moderate",
      description: "Nausea + noradrenergic anorexia.",
      management: "Growth monitoring.",
    },
    {
      name: "Fatigue or sedation",
      frequency: "common",
      severity: "moderate",
      description: "Not stimulating in the stimulant sense.",
      management: "Assess at 4 weeks.",
    },
    {
      name: "Blood pressure and heart rate rise",
      frequency: "common",
      severity: "moderate",
      description: "Noradrenergic cardiovascular effect.",
      management: "HR/BP every visit.",
    },
    {
      name: "Sexual dysfunction (adults)",
      frequency: "common",
      severity: "moderate",
      description: "The NRI-class effect.",
      management: "Counsel; dose review.",
    },
    {
      name: "Sleep disturbance",
      frequency: "uncommon",
      severity: "mild",
      description: "Less than stimulants.",
      management: "Dose timing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "severe",
      description: "Transaminitis to fulminant hepatic failure (label warning); timing unpredictable.",
      management: "LFT if symptoms (malaise, dark urine, jaundice); stop if significant.",
    },
    {
      name: "Suicidality (paediatric)",
      frequency: "uncommon",
      severity: "severe",
      description: "Emergent ideation in early weeks — the boxed warning.",
      management: "Weekly early mood review; warn families.",
    },
    {
      name: "Cardiovascular concerns in structural heart disease",
      frequency: "rare",
      severity: "severe",
      description: "Noradrenergic effects in vulnerable hearts.",
      management: "Cardiac screening.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Heart rate and blood pressure",
      frequency: "Baseline, then every visit",
      rationale: "Noradrenergic cardiovascular effects.",
    },
    {
      parameter: "Growth (children)",
      frequency: "Every 6 months",
      rationale: "Appetite/weight surveillance.",
    },
    {
      parameter: "Mood and suicidality (early weeks)",
      frequency: "Weekly for the first month (paediatric)",
      rationale: "Boxed warning surveillance.",
    },
  ],
  interactions: [
    {
      drug: "Fluoxetine and paroxetine (strong 2D6 inhibitors)",
      severity: "major",
      mechanism: "Double atomoxetine levels.",
      action: "Reduce dose; slow titration.",
    },
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Noradrenergic crisis risk.",
      action: "14-day washout.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Limited data; no teratogenic signal established. Stimulants often preferred in pregnancy (better data).",
    lactation: "Limited data; infant monitoring if used.",
  },
  renalAdjustment: "No major adjustment.",
  hepaticAdjustment: "Reduce dose in moderate impairment; avoid in severe (hepatotoxicity warning).",
  /* ---- Education ---- */
  patientExplanation: "Atomoxetine is the standard NON-stimulant medicine for ADHD: it raises noradrenaline — one of the brain's attention chemicals — giving round-the-clock cover from a single daily capsule. Unlike stimulants it is not a controlled drug and cannot be misused, but it takes several weeks to show its full effect. Stomach upset in the first week and mild rises in heart rate are its commonest effects.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Atomoxetine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The patience drug: 2-6 weeks to effect (pharmacologically an antidepressant) — sell the delay or lose the patient.",
    "24-hour cover from one dose — the morning-to-morning advantage over stimulants.",
    "Comorbid anxiety: atomoxetine neutral-to-helpful vs stimulant anxiogenic tendency — its strongest niche.",
    "2D6 metabolism: poor metabolisers get 5× levels; fluoxetine/paroxetine double everyone.",
    "Weight-based paediatric dosing (1.2 mg/kg) is the titration discipline.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Atomoxetine: Atomoxetine selectively blocks the norepinephrine transporter, raising noradrenergic (and secondarily dopaminergic, in PFC) tone — a non-stimulant ADHD mechanism.",
        "Uses of Atomoxetine: ADHD — ages 6 and above through adulthood; ADHD with comorbid anxiety; ADHD in substance-use populations",
        "Mechanism: SELECTIVE NET blockade — the only non-stimulant ADHD first-line.",
        "Onset 2-6 WEEKS; 24-h cover from once daily.",
      ],
      practical: [
        "Prescribe Atomoxetine for adhd — ages 6 and above through adulthood with dose, timing, and duration.",
        "Outline the monitoring plan: Heart rate and blood pressure (Baseline, then every visit); Growth (children) (Every 6 months); Mood and suicidality (early weeks) (Weekly for the first month (paediatric))",
      ],
      longAnswer: [
        "Atomoxetine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SELECTIVE NET blockade — the only non-stimulant ADHD first-line.",
        "Onset 2-6 WEEKS; 24-h cover from once daily.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SELECTIVE NET blockade — the only non-stimulant ADHD first-line.",
        "Onset 2-6 WEEKS; 24-h cover from once daily.",
        "No abuse potential — unscheduled; the stimulant alternative in substance-use contexts.",
        "Boxed warning: paediatric suicidality (antidepressant-class).",
        "CYP2D6 metabolism — inhibitors (fluoxetine) double levels.",
        "Rare hepatotoxicity (LFT warning).",
      ],
      pyqConcepts: ["Mechanism/target of Atomoxetine", "Key adverse effect: Hepatotoxicity", "Dosing and titration of Atomoxetine"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Atomoxetine develops hepatotoxicity — next best step?",
        "When to choose Atomoxetine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: NET (norepinephrine transporter — selective blockade)",
        "Most common side effects: Nausea and GI upset, Appetite suppression and weight loss, Fatigue or sedation",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The patience drug: 2-6 weeks to effect (pharmacologically an antidepressant) — sell the delay or lose the patient.",
        "24-hour cover from one dose — the morning-to-morning advantage over stimulants.",
        "Comorbid anxiety: atomoxetine neutral-to-helpful vs stimulant anxiogenic tendency — its strongest niche.",
        "2D6 metabolism: poor metabolisers get 5× levels; fluoxetine/paroxetine double everyone.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SELECTIVE NET blockade — the only non-stimulant ADHD first-line.",
    "Onset 2-6 WEEKS; 24-h cover from once daily.",
    "No abuse potential — unscheduled; the stimulant alternative in substance-use contexts.",
    "Boxed warning: paediatric suicidality (antidepressant-class).",
    "CYP2D6 metabolism — inhibitors (fluoxetine) double levels.",
    "Rare hepatotoxicity (LFT warning).",
    "Dose targets: 1.2 mg/kg (children) / 80 mg (adults).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — adhd — ages 6 and above through adulthood",
      presentation: "A patient presenting with adhd — ages 6 and above through adulthood, started on Atomoxetine.",
      history: "A adult patient presents with a adhd — ages 6 and above through adulthood picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with adhd — ages 6 and above through adulthood; physical examination and baseline investigations are unremarkable.",
      diagnosis: "ADHD — ages 6 and above through adulthood. Differentials are considered and excluded clinically.",
      rationale: "Atomoxetine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (NRI) with strong evidence in this condition.",
      management: "Started at 0.5 mg/kg/day for 7 days, titrated to 1.2 mg/kg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Atomoxetine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "NRI vs related agents — orientation table",
      primaryDrug: "Atomoxetine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "NET (norepinephrine transporter — selective blockade)",
          comparisons: [
            {
              drug: "Atomoxetine",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to reducing — appetite effects common.",
          comparisons: [
            {
              drug: "Atomoxetine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Not sedating.",
          comparisons: [
            {
              drug: "Atomoxetine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The 24-hour non-stimulant — anxiety-comorbid ADHD and substance-use safety",
          comparisons: [
            {
              drug: "Atomoxetine",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Atomoxetine is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Atomoxetine reaches peak plasma concentration and begins acting at its molecular target (NET (norepinephrine transporter — selective blockade)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea and gi upset, appetite suppression and weight loss, fatigue or sedation). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Therapeutic effect builds over 2-6 weeks — not a same-day drug.)",
      title: "Therapeutic effect builds",
      description: "Therapeutic effect builds over 2-6 weeks — not a same-day drug. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Atomoxetine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Atomoxetine take to work?",
      answer: "Therapeutic effect builds over 2-6 weeks — not a same-day drug.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Atomoxetine?",
      answer: "The most frequently reported effects are: Nausea and GI upset, Appetite suppression and weight loss, Fatigue or sedation, Blood pressure and heart rate rise, Sexual dysfunction (adults). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Atomoxetine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Atomoxetine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Atomoxetine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Atomoxetine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Atomoxetine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG91; APA MDD Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), atomoxetine monograph, p. 12",
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
        source: "FDA Prescribing Information for Strattera (Atomoxetine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for atomoxetine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Atomoxetine",
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
      name: "ADHD — ages 6 and above through adulthood",
      relationship: "primary",
    },
    {
      name: "ADHD with comorbid anxiety",
      relationship: "alternative",
    },
    {
      name: "ADHD in substance-use populations",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Atomoxetine",
      type: "drug",
      href: "/drugs/atomoxetine",
      note: "The drug you're reading about",
    },
    {
      label: "NRI",
      type: "class",
      href: "#mechanism",
      note: "Norepinephrine Reuptake Inhibitor",
    },
    {
      label: "Central monoaminergic systems (see mechanism)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "NET (norepinephrine transporter — selective blockade)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "ADHD — ages 6 and above through adulthood",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "ADHD with comorbid anxiety",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "ADHD in substance-use populations",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hepatotoxicity",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Suicidality (paediatric)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea and GI upset",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Atomoxetine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The non-stimulant first-line — selective norepinephrine reuptake inhibition for 24-hour ADHD cover without abuse potential.",
    summary: "Atomoxetine is a prescription medicine used to treat adhd — ages 6 and above through adulthood. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Atomoxetine is the standard NON-stimulant medicine for ADHD: it raises noradrenaline — one of the brain's attention chemicals — giving round-the-clock cover from a single daily capsule. Unlike stimulants it is not a controlled drug and cannot be misused, but it takes several weeks to show its full effect. Stomach upset in the first week and mild rises in heart rate are its commonest effects.",
    sideEffects: "The most common side effects are: nausea and gi upset, appetite suppression and weight loss, fatigue or sedation, blood pressure and heart rate rise, sexual dysfunction (adults), sleep disturbance. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hepatotoxicity and Suicidality (paediatric). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: heart rate and blood pressure (baseline, then every visit); growth (children) (every 6 months); mood and suicidality (early weeks) (weekly for the first month (paediatric)). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Fluoxetine and paroxetine (strong 2D6 inhibitors), MAOIs. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Tomoxetin",
        manufacturer: "Sun",
        strengths: "10-100 mg",
      },
      {
        name: "Attentin",
        manufacturer: "Intas",
        strengths: "10-60 mg",
      },
    ],
    typicalDoses: "Children 1.2 mg/kg; adults 40→80 mg daily.",
    prescribingScenarios: [
      "ADHD where stimulant diversion is a concern.",
      "Anxious-ADHD presentations.",
      "Adult ADHD.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "HR/BP every visit; growth 6-monthly; mood review in the first month.",
    patientCounselling: [
      "Give it 4-6 weeks before judging.",
      "Take with food.",
      "Report unusual tiredness, dark urine, or yellow eyes.",
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
    familyName: "NRIs",
    members: [
      {
        name: "Atomoxetine",
        slug: "atomoxetine",
        relationship: "This guide",
        distinguishing: "The 24-hour non-stimulant — anxiety-comorbid ADHD and substance-use safety",
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
      question: "Which molecular target does Atomoxetine primarily act on?",
      options: [
        "NET (norepinephrine transporter — selective blockade)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Atomoxetine acts primarily at NET (norepinephrine transporter — selective blockade). Atomoxetine selectively blocks the norepinephrine transporter, raising noradrenergic (and secondarily dopaminergic, in PFC) tone — a non-stimulant ADHD mechanism.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Atomoxetine?",
      options: ["Nausea and GI upset", "Appetite suppression and weight loss", "Fatigue or sedation", "Blood pressure and heart rate rise"],
      correctIndex: 0,
      explanation: "Nausea and GI upset — Worst in week 1.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Atomoxetine for adhd (children ≤70 kg)?",
      options: ["1.2 mg/kg/day", "1.4 mg/kg/day", "1.2 mg/kg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For adhd (children ≤70 kg): start 0.5 mg/kg/day for 7 days, target 1.2 mg/kg/day, maximum 1.4 mg/kg/day. Increase to 1.2 mg/kg/day",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Atomoxetine in two sentences.",
      answer: "Atomoxetine selectively blocks the norepinephrine transporter, raising noradrenergic (and secondarily dopaminergic, in PFC) tone — a non-stimulant ADHD mechanism. Net effect: Catecholamine and wake-system enhancement with the agent's characteristic profile.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Atomoxetine.",
      answer: "ADHD — ages 6 and above through adulthood, ADHD with comorbid anxiety, ADHD in substance-use populations. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Atomoxetine and how you would manage it.",
      answer: "Hepatotoxicity: Transaminitis to fulminant hepatic failure (label warning); timing unpredictable. Management: LFT if symptoms (malaise, dark urine, jaundice); stop if significant.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Atomoxetine require?",
      answer: "Heart rate and blood pressure (Baseline, then every visit); Growth (children) (Every 6 months); Mood and suicidality (early weeks) (Weekly for the first month (paediatric))",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Atomoxetine that separates safe prescribers from unsafe ones.",
      answer: "The patience drug: 2-6 weeks to effect (pharmacologically an antidepressant) — sell the delay or lose the patient.",
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
      checkpoint: "You now know what Atomoxetine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Atomoxetine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Atomoxetine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Atomoxetine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Atomoxetine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Atomoxetine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Therapeutic effect builds over 2-6 weeks — not a same-day drug.",
    ],
    ifItWorks: [
      "Continue Atomoxetine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Atomoxetine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Atomoxetine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "ADHD (children ≤70 kg)",
        starting: "0.5 mg/kg/day for 7 days",
        titration: "Increase to 1.2 mg/kg/day",
        target: "1.2 mg/kg/day",
        max: "1.4 mg/kg/day",
      },
      {
        indication: "ADHD (>70 kg / adults)",
        starting: "40 mg daily × 7 days",
        titration: "Increase to 80 mg; may reach 100 mg after 2-4 weeks",
        target: "80 mg/day",
        max: "100 mg/day",
      },
    ],
    dosageForms: ["Capsules 10-100 mg"],
    dosingTips: [
      "Sell the 2-6 week delay explicitly.",
      "Take with food against nausea.",
      "Check HR/BP and growth; ask about mood early.",
    ],
    overdose: [
      "Overdose with Atomoxetine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Atomoxetine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 5 hours (extensive metabolisers); ~21 hours (poor metabolisers)..",
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
    potentialAdvantages: ["No abuse potential (unscheduled).", "24-hour cover.", "Anxiety-comorbid ADHD niche."],
    potentialDisadvantages: ["Weeks-to-effect onset.", "Milder efficacy than stimulants.", "Paediatric suicidality boxed warning.", "Rare hepatotoxicity."],
    primaryTargetSymptoms: ["ADHD symptoms across the full day", "ADHD with anxiety comorbidity"],
    pearls: [
      "The patience drug: 2-6 weeks to effect (pharmacologically an antidepressant) — sell the delay or lose the patient.",
      "24-hour cover from one dose — the morning-to-morning advantage over stimulants.",
      "Comorbid anxiety: atomoxetine neutral-to-helpful vs stimulant anxiogenic tendency — its strongest niche.",
      "2D6 metabolism: poor metabolisers get 5× levels; fluoxetine/paroxetine double everyone.",
      "Weight-based paediatric dosing (1.2 mg/kg) is the titration discipline.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
