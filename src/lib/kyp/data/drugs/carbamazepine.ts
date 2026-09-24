import type { Drug } from "../types";

/**
 * Carbamazepine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), carbamazepine monograph (book p. 20)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const carbamazepine: Drug = {
  /* ---- Identity ---- */
  slug: "carbamazepine",
  genericName: "Carbamazepine",
  brandNames: ["Tegretol", "Tegretol Retard", "Mazetol (India)"],
  drugClass: "mood-stabiliser",
  drugClassLabel: "Mood Stabiliser",
  drugClassFullName: "Mood Stabiliser — Anticonvulsant",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Mood Stabilisers", "Carbamazepine"],
  /* ---- Hero / summary ---- */
  tagline: "The auto-inducing anticonvulsant — potent, interacting, and still indispensable for mania and trigeminal neuralgia.",
  summary: "Carbamazepine is the classic tricyclic anticonvulsant: a potent sodium-channel blocker effective for acute mania (including lithium-refractory), bipolar maintenance, trigeminal neuralgia, and epilepsy. It is psychiatry's great interactor — inducing its own metabolism (auto-induction over 2–4 weeks) and accelerating the clearance of oral contraceptives, antipsychotics, and lamotrigine — while accumulating when inhibited (verapamil, erythromycin). Hyponatraemia, agranulocytosis/aplastic anaemia, SJS/TEN (strongly HLA-B*15:02-associated in Asian populations), and diplopia/ataxia complete its demanding safety profile.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Carbamazepine — from its molecular target (Voltage-gated Na+ channels (use-dependent blockade)) to clinical effect.",
    "List the FDA-approved and off-label uses of Carbamazepine.",
    "Predict the common and serious side effects of Carbamazepine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Carbamazepine.",
    "Compare Carbamazepine with other mood stabilisers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Carbamazepine blocks voltage-gated sodium channels (use-dependent), stabilising hyperexcitable neurons — the prototype anticonvulsant mechanism later inherited by oxcarbazepine and lamotrigine.",
    molecularTarget: "Voltage-gated Na+ channels (use-dependent blockade)",
    effect: "Anti-manic and anticonvulsant effect; the sodium-channel backbone of the anticonvulsant-mood-stabiliser bridge.",
    steps: [
      "Use-dependent sodium-channel blockade limits high-frequency repetitive firing — the shared anticonvulsant core.",
      "Anti-manic effect established in RCTs including lithium-refractory mania.",
      "Auto-induction: carbamazepine powerfully induces CYP3A4 (including its OWN metabolism) over 2–4 weeks — levels fall on a stable dose.",
      "The induction footprint hits oral contraceptives, antipsychotics, lamotrigine, and more — the great prescriber of interactions.",
    ],
    pharmacokinetics: "Erratic absorption; auto-induction drops levels 2–4 weeks into therapy; levels needed (4–12 µg/mL).",
    halfLife: "Initially 25–65 h, falling to 12–15 h after auto-induction.",
    activeMetabolite: "Carbamazepine-10,11-epoxide — contributes to efficacy and toxicity.",
    metabolism: "Hepatic CYP3A4 (substrate AND potent inducer — the self-accelerating profile).",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Carbamazepine",
        sublabel: "Mood stabiliser",
        variant: "process",
      },
      {
        id: "targets",
        label: "Multiple targets",
        sublabel: "Ion channels, second messengers, neuroprotection",
        variant: "target",
      },
      {
        id: "exc",
        label: "Neuronal hyperexcitability",
        sublabel: "Kindled mood episodes",
        variant: "input",
      },
      {
        id: "effect",
        label: "Mood stabilised",
        sublabel: "Relapse prevention",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "targets",
        label: "acts on",
      },
      {
        from: "exc",
        to: "targets",
        label: "calmed by",
        type: "inhibit",
      },
      {
        from: "targets",
        to: "effect",
        label: "prevents extremes",
      },
    ],
    caption: "Mood stabilisation is multi-mechanism: damping neuronal hyperexcitability, protecting neurons, and re-tuning intracellular signalling together prevent both poles of bipolar illness.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Glutamate", "GABA"],
  receptors: [
    "Voltage-gated Na+ channels (use-dependent blockade)",
  ],
  brainRegionIds: ["prefrontal-cortex", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Acute manic / mixed episodes of bipolar disorder",
      status: "fda-approved",
      description: "Effective including lithium-unresponsive mania.",
      ageGroup: "Adults",
    },
    {
      name: "Bipolar maintenance",
      status: "guideline",
      description: "Second-line prophylaxis, often where lithium/valproate fail or are unsuitable.",
    },
    {
      name: "Trigeminal neuralgia",
      status: "fda-approved",
      description: "The classical indication — often the first drug tried.",
    },
    {
      name: "Epilepsy — focal seizures",
      status: "fda-approved",
      description: "First-line anticonvulsant (the origin).",
    },
    {
      name: "Aggression / impulsivity (adjunct)",
      status: "off-label",
      description: "Historic and pragmatic use.",
    },
  ],
  contraindications: [
    {
      name: "HLA-B*15:02 positive (in screened populations)",
      severity: "absolute",
      rationale: "SJS/TEN risk is concentrated in this allele — screening is standard in Chinese/Southeast Asian ancestry.",
    },
    {
      name: "Bone marrow suppression history",
      severity: "absolute",
      rationale: "Aplastic anaemia risk.",
    },
    {
      name: "AV block / SA node dysfunction",
      severity: "absolute",
      rationale: "Conduction-slowing effect.",
    },
    {
      name: "MAOI coadministration within 14 days",
      severity: "absolute",
      rationale: "Class pharmacology precaution.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Serious dermatologic reactions and HLA-B*15:02 screening",
      text: "Carbamazepine causes SJS/TEN, overwhelmingly in patients carrying the HLA-B*15:02 allele — common in Han Chinese, Southeast Asian, and (by ancestry) South Asian populations. HLA screening before starting is recommended in these groups; a positive screen is an absolute contraindication.",
    },
    {
      title: "Aplastic anaemia and agranulocytosis",
      text: "Carbamazepine has caused fatal aplastic anaemia and agranulocytosis — monitor CBC and educate patients on fever/sore throat/bruising/bleeding (the classic warning triad).",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Diplopia, dizziness, ataxia",
      frequency: "common",
      severity: "moderate",
      description: "The classic carbamazepine neurotoxicity triad — dose-related, worse at peak.",
      management: "Divided doses; extended-release formulation; level check.",
    },
    {
      name: "Hyponatraemia",
      frequency: "common",
      severity: "moderate",
      description: "SIADH-like effect — often asymptomatic but potentially symptomatic; commoner than with most psychotropics.",
      management: "Check sodium at baseline and if confused/lethargic; reduce dose or switch if significant.",
    },
    {
      name: "Sedation and cognitive blunting",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related.",
      management: "Timing; lowest effective dose.",
    },
    {
      name: "Nausea and GI upset",
      frequency: "common",
      severity: "mild",
      description: "Usually transient.",
      management: "Take with food; ER formulation.",
    },
    {
      name: "Leukopenia (mild, transient)",
      frequency: "common",
      severity: "moderate",
      description: "Benign drops in the first weeks are common; distinguish from the rare catastrophic marrow failure.",
      management: "Repeat FBC; watch the trend, not one number.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Aplastic anaemia / agranulocytosis",
      frequency: "rare",
      severity: "life-threatening",
      description: "The classic haematological disaster: estimated 2–5 per 100,000 treatment-years.",
      management: "Stop; haematology; educate on fever/sore throat/bruising/bleeding.",
    },
    {
      name: "SJS/TEN (HLA-B*15:02-linked)",
      frequency: "rare",
      severity: "life-threatening",
      description: "The dermatological disaster — concentrated in Asian ancestry allele carriers.",
      management: "Pre-start HLA screening in relevant populations; stop on rash.",
    },
    {
      name: "Severe hyponatraemia",
      frequency: "uncommon",
      severity: "severe",
      description: "Sodium can fall to symptomatic ranges in older patients.",
      management: "Electrolyte check when unwell/confused.",
    },
    {
      name: "Hepatitis / cholestatic jaundice",
      frequency: "rare",
      severity: "severe",
      description: "Hepatic reactions warrant LFT surveillance.",
      management: "Stop if symptomatic jaundice.",
    },
    {
      name: "Cardiac conduction effects (AV block)",
      frequency: "rare",
      severity: "severe",
      description: "SA/AV node slowing — the ECG contraindication basis.",
      management: "Avoid in conduction disease.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "CBC (FBC)",
      frequency: "Baseline, then periodically during first 3 months",
      rationale: "Aplastic anaemia/agranulocytosis surveillance.",
    },
    {
      parameter: "LFTs",
      frequency: "Baseline and periodically",
      rationale: "Hepatic reactions.",
    },
    {
      parameter: "Serum sodium",
      frequency: "Baseline, then periodically (especially in the elderly)",
      rationale: "Hyponatraemia is common and often silent.",
    },
    {
      parameter: "Carbamazepine level",
      frequency: "Steady state, after 2–4 weeks (post-auto-induction), and with clinical change (4–12 µg/mL)",
      rationale: "Auto-induction makes levels a moving target.",
    },
    {
      parameter: "ECG in cardiac history",
      frequency: "Baseline if conduction disease suspected",
      rationale: "AV block precaution.",
    },
  ],
  interactions: [
    {
      drug: "Oral contraceptives",
      severity: "contraindicated",
      mechanism: "3A4 induction causes contraceptive FAILURE — unplanned pregnancy risk.",
      action: "Counsel; alternative contraception.",
    },
    {
      drug: "Lamotrigine, antipsychotics, and other 3A4 substrates",
      severity: "major",
      mechanism: "Induction halves their levels — breakthrough symptoms and unintended pregnancy.",
      action: "Double lamotrigine; monitor antipsychotic response.",
    },
    {
      drug: "Verapamil, diltiazem, erythromycin, clarithromycin, grapefruit",
      severity: "major",
      mechanism: "3A4 inhibition causes sharp carbamazepine accumulation — the classic toxicity interaction.",
      action: "Avoid or reduce carbamazepine with level monitoring.",
    },
    {
      drug: "Valproate",
      severity: "major",
      mechanism: "Complex bidirectional interaction (valproate raises carbamazepine epoxide).",
      action: "Monitor levels and neurotoxicity.",
    },
    {
      drug: "Warfarin",
      severity: "major",
      mechanism: "Induction reduces anticoagulation — INR instability.",
      action: "Monitor INR closely.",
    },
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "14-day washout rule.",
      action: "Avoid.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "Carbamazepine is teratogenic (neural tube defects, craniofacial anomalies ~5–7% malformation rate) — pregnancy requires folate prophylaxis (5 mg), counselling, and consideration of alternatives; it also induces the metabolism of many co-drugs.",
    lactation: "Passes into milk; infant sedation and transient hepatic monitoring advised — usually compatible with paediatric monitoring.",
  },
  renalAdjustment: "No major adjustment; standard caution in severe impairment.",
  hepaticAdjustment: "Hepatic metabolism and induction — LFT surveillance; avoid in significant liver disease.",
  /* ---- Education ---- */
  patientExplanation: "Carbamazepine is an old, strong anti-seizure medicine also used for mania and for the facial-nerve pain of trigeminal neuralgia. It interacts with a very long list of medicines (including the contraceptive pill, which it can render ineffective), it makes its own level fall over the first month as the body learns to clear it faster, and it requires blood-count checks because of rare effects on the bone marrow.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Carbamazepine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Auto-induction: the same dose gives falling levels over the first month — schedule the level check after week 3, not week 1.",
    "The contraceptive pill fails on carbamazepine — unplanned pregnancy is a pharmacokinetic consequence, not an accident.",
    "Erythromycin/verapamil/grapefruit are the classic accumulation triggers — the 'can't take with' list patients should carry.",
    "Diplopia + ataxia + dizziness = the carbamazepine triad; in Asian-ancestry patients with a new rash, SJS is the emergency.",
    "HLA-B*15:02 screening before carbamazepine in Chinese/Southeast Asian ancestry patients is now the standard of care.",
    "Second-line mania agent — after lithium and valproate — but first-line for trigeminal neuralgia (its dual citizenship).",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Carbamazepine: Carbamazepine blocks voltage-gated sodium channels (use-dependent), stabilising hyperexcitable neurons — the prototype anticonvulsant mechanism later inherited by oxcarbazepine and lamotrigine.",
        "Uses of Carbamazepine: Acute manic / mixed episodes of bipolar disorder; Bipolar maintenance; Trigeminal neuralgia; Epilepsy — focal seizures",
        "Mechanism: use-dependent Na+ channel blockade — the tricyclic anticonvulsant prototype.",
        "Auto-induction of CYP3A4 (including its own metabolism) over 2–4 weeks — falling levels on a fixed dose.",
      ],
      practical: [
        "Prescribe Carbamazepine for acute manic / mixed episodes of bipolar disorder with dose, timing, and duration.",
        "Outline the monitoring plan: CBC (FBC) (Baseline, then periodically during first 3 months); LFTs (Baseline and periodically); Serum sodium (Baseline, then periodically (especially in the elderly))",
      ],
      longAnswer: [
        "Carbamazepine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: use-dependent Na+ channel blockade — the tricyclic anticonvulsant prototype.",
        "Auto-induction of CYP3A4 (including its own metabolism) over 2–4 weeks — falling levels on a fixed dose.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: use-dependent Na+ channel blockade — the tricyclic anticonvulsant prototype.",
        "Auto-induction of CYP3A4 (including its own metabolism) over 2–4 weeks — falling levels on a fixed dose.",
        "Black boxes: SJS/TEN (HLA-B*15:02 screening in Asian ancestry) + aplastic anaemia/agranulocytosis.",
        "The great inducer: OCs fail; lamotrigine and antipsychotic levels halve; warfarin destabilises.",
        "Classic neurotoxicity: diplopia, ataxia, dizziness.",
        "Hyponatraemia is common — check sodium when confused.",
      ],
      pyqConcepts: [
        "Mechanism/target of Carbamazepine",
        "Key adverse effect: Aplastic anaemia / agranulocytosis",
        "Dosing and titration of Carbamazepine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Carbamazepine develops aplastic anaemia / agranulocytosis — next best step?",
        "When to choose Carbamazepine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Voltage-gated Na+ channels (use-dependent blockade)",
        "Most common side effects: Diplopia, dizziness, ataxia, Hyponatraemia, Sedation and cognitive blunting",
        "Key contraindication: HLA-B*15:02 positive (in screened populations)",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Auto-induction: falling levels on a fixed dose — re-check after 3 weeks.",
        "The OC failure and erythromycin toxicity interactions are the prescribing legends.",
        "Diplopia-ataxia is dose-peak neurotoxicity; ER fixes it.",
        "HLA-B*15:02 → SJS: the pharmacogenomic lesson of psychiatry.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: use-dependent Na+ channel blockade — the tricyclic anticonvulsant prototype.",
    "Auto-induction of CYP3A4 (including its own metabolism) over 2–4 weeks — falling levels on a fixed dose.",
    "Black boxes: SJS/TEN (HLA-B*15:02 screening in Asian ancestry) + aplastic anaemia/agranulocytosis.",
    "The great inducer: OCs fail; lamotrigine and antipsychotic levels halve; warfarin destabilises.",
    "Classic neurotoxicity: diplopia, ataxia, dizziness.",
    "Hyponatraemia is common — check sodium when confused.",
    "Level target 4–12 µg/mL; check AFTER auto-induction (week 3+).",
    "Also treats trigeminal neuralgia — the exam favourite dual indication.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — acute manic / mixed episodes of bipolar disorder",
      presentation: "A patient presenting with acute manic / mixed episodes of bipolar disorder, started on Carbamazepine.",
      history: "A adult patient presents with a acute manic / mixed episodes of bipolar disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with acute manic / mixed episodes of bipolar disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Acute manic / mixed episodes of bipolar disorder. Differentials are considered and excluded clinically.",
      rationale: "Carbamazepine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Mood Stabiliser) with strong evidence in this condition.",
      management: "Started at 200 mg twice daily, titrated to 600–1600 mg/day (level 4–12) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Carbamazepine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Mood Stabiliser comparison — choosing within the class",
      primaryDrug: "Carbamazepine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Voltage-gated Na+ channels (use-dependent blockade)",
          comparisons: [
            {
              drug: "Lamotrigine",
              value: "See full guide",
            },
            {
              drug: "Lithium",
              value: "See full guide",
            },
            {
              drug: "Valproate",
              value: "See full guide",
            },
            {
              drug: "Oxcarbazepine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Initially 25–65 h, falling to 12–15 h after auto-induction.",
          comparisons: [
            {
              drug: "Lamotrigine",
              value: "—",
            },
            {
              drug: "Lithium",
              value: "—",
            },
            {
              drug: "Valproate",
              value: "—",
            },
            {
              drug: "Oxcarbazepine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Lamotrigine",
              value: "—",
            },
            {
              drug: "Lithium",
              value: "—",
            },
            {
              drug: "Valproate",
              value: "—",
            },
            {
              drug: "Oxcarbazepine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Moderate, dose-related — partly tolerance-developing.",
          comparisons: [
            {
              drug: "Lamotrigine",
              value: "Not sedating — mildly activating (morning dosing suits most).",
            },
            {
              drug: "Lithium",
              value: "Not typically sedating — neutral; occasionally described as 'slowing'.",
            },
            {
              drug: "Valproate",
              value: "Common, dose-related — often useful in acute mania.",
            },
            {
              drug: "Oxcarbazepine",
              value: "Mild-to-moderate.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Mania + trigeminal neuralgia + the great CYP450 inducer",
          comparisons: [
            {
              drug: "Lamotrigine",
              value: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
            },
            {
              drug: "Lithium",
              value: "Anti-suicide + both-pole prophylaxis — the irreplaceable classic",
            },
            {
              drug: "Valproate",
              value: "Mania workhorse — especially mixed states and rapid cycling; now pregnancy-governed",
            },
            {
              drug: "Oxcarbazepine",
              value: "The cleaner carbamazepine — off-label mood use with fewer interactions",
            },
          ],
        },
      ],
      takeaway: "All mood stabilisers share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Carbamazepine reaches peak plasma concentration and begins acting at its molecular target (Voltage-gated Na+ channels (use-dependent blockade)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (diplopia, dizziness, ataxia, hyponatraemia, sedation and cognitive blunting). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Mania: 5–7 days for early effect; trigeminal neuralgia: days.)",
      title: "Therapeutic effect builds",
      description: "Mania: 5–7 days for early effect; trigeminal neuralgia: days. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Carbamazepine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Carbamazepine take to work?",
      answer: "Mania: 5–7 days for early effect; trigeminal neuralgia: days.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Carbamazepine?",
      answer: "The most frequently reported effects are: Diplopia, dizziness, ataxia, Hyponatraemia, Sedation and cognitive blunting, Nausea and GI upset, Leukopenia (mild, transient). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Carbamazepine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Carbamazepine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Carbamazepine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Carbamazepine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Carbamazepine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG185 (Bipolar Disorder); CANMAT/ISBD Guidelines",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), carbamazepine monograph, p. 20",
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
        source: "FDA Prescribing Information for Tegretol (Carbamazepine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for carbamazepine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Carbamazepine",
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
      name: "Lamotrigine",
      slug: "lamotrigine",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Lithium",
      slug: "lithium",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Valproate",
      slug: "valproate",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Oxcarbazepine",
      slug: "oxcarbazepine",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
  ],
  relatedConditions: [
    {
      name: "Acute manic / mixed episodes of bipolar disorder",
      relationship: "primary",
    },
    {
      name: "Bipolar maintenance",
      relationship: "alternative",
    },
    {
      name: "Trigeminal neuralgia",
      relationship: "primary",
    },
    {
      name: "Epilepsy — focal seizures",
      relationship: "primary",
    },
    {
      name: "Aggression / impulsivity (adjunct)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Carbamazepine",
      type: "drug",
      href: "/drugs/carbamazepine",
      note: "The drug you're reading about",
    },
    {
      label: "Mood Stabiliser",
      type: "class",
      href: "#mechanism",
      note: "Mood Stabiliser — Anticonvulsant",
    },
    {
      label: "Glutamate",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Voltage-gated Na+ channels (use-dependent blockade)",
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
      label: "Amygdala",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Acute manic / mixed episodes of bipolar disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar maintenance",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Trigeminal neuralgia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Aplastic anaemia / agranulocytosis",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "SJS/TEN (HLA-B*15:02-linked)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Diplopia, dizziness, ataxia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Carbamazepine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The auto-inducing anticonvulsant — potent, interacting, and still indispensable for mania and trigeminal neuralgia.",
    summary: "Carbamazepine is a prescription medicine used to treat acute manic / mixed episodes of bipolar disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Carbamazepine is an old, strong anti-seizure medicine also used for mania and for the facial-nerve pain of trigeminal neuralgia. It interacts with a very long list of medicines (including the contraceptive pill, which it can render ineffective), it makes its own level fall over the first month as the body learns to clear it faster, and it requires blood-count checks because of rare effects on the bone marrow.",
    sideEffects: "The most common side effects are: diplopia, dizziness, ataxia, hyponatraemia, sedation and cognitive blunting, nausea and gi upset, leukopenia (mild, transient). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Aplastic anaemia / agranulocytosis and SJS/TEN (HLA-B*15:02-linked). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: cbc (fbc) (baseline, then periodically during first 3 months); lfts (baseline and periodically); serum sodium (baseline, then periodically (especially in the elderly)). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: HLA-B*15:02 positive (in screened populations), Bone marrow suppression history, AV block / SA node dysfunction, MAOI coadministration within 14 days. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Oral contraceptives, Lamotrigine, antipsychotics, and other 3A4 substrates, Verapamil, diltiazem, erythromycin, clarithromycin, grapefruit, Valproate. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Mazetol",
        manufacturer: "Wockhardt",
        strengths: "200–400 mg",
      },
      {
        name: "Tegrital",
        manufacturer: "Novartis",
        strengths: "100–400 mg",
      },
      {
        name: "Carbamazepine generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "100–400 mg",
      },
    ],
    typicalDoses: "Mania 600–1600 mg/day divided; neuralgia 400–800 mg.",
    prescribingScenarios: [
      "Lithium-refractory mania.",
      "Trigeminal neuralgia referrals from neurology.",
      "Second-line bipolar maintenance where cost matters.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "FBC, LFT, sodium at baseline and during titration; level after auto-induction; HLA-B*15:02 screening offered in Indian practice given South Asian ancestry considerations.",
    patientCounselling: [
      "Alternative contraception is essential — the pill fails on this medicine.",
      "Report fever, sore throat, bruising, or a rash the same day.",
      "Blurry double vision and unsteadiness mean the dose needs review.",
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
    note: "Generic carbamazepine widely available in Jan Aushadhi.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Mood Stabilisers",
    members: [
      {
        name: "Carbamazepine",
        slug: "carbamazepine",
        relationship: "This guide",
        distinguishing: "Mania + trigeminal neuralgia + the great CYP450 inducer",
      },
      {
        name: "Lamotrigine",
        slug: "lamotrigine",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
      },
      {
        name: "Lithium",
        slug: "lithium",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Anti-suicide + both-pole prophylaxis — the irreplaceable classic",
      },
      {
        name: "Valproate",
        slug: "valproate",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Mania workhorse — especially mixed states and rapid cycling; now pregnancy-governed",
      },
      {
        name: "Oxcarbazepine",
        slug: "oxcarbazepine",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "The cleaner carbamazepine — off-label mood use with fewer interactions",
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
      question: "Which molecular target does Carbamazepine primarily act on?",
      options: [
        "Voltage-gated Na+ channels (use-dependent blockade)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Carbamazepine acts primarily at Voltage-gated Na+ channels (use-dependent blockade). Carbamazepine blocks voltage-gated sodium channels (use-dependent), stabilising hyperexcitable neurons — the prototype anticonvulsant mechanism later inherited by oxcarbazepine and lamotrigine.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Carbamazepine?",
      options: ["Diplopia, dizziness, ataxia", "Hyponatraemia", "Sedation and cognitive blunting", "Nausea and GI upset"],
      correctIndex: 0,
      explanation: "Diplopia, dizziness, ataxia — The classic carbamazepine neurotoxicity triad — dose-related, worse at peak.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Carbamazepine for acute mania?",
      options: [
        "600–1600 mg/day (level 4–12)",
        "Level/counts-limited",
        "600–1600 mg/day (level 4–12) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For acute mania: start 200 mg twice daily, target 600–1600 mg/day (level 4–12), maximum Level/counts-limited. Increase by 200 mg/day every few days (divided)",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Carbamazepine in two sentences.",
      answer: "Carbamazepine blocks voltage-gated sodium channels (use-dependent), stabilising hyperexcitable neurons — the prototype anticonvulsant mechanism later inherited by oxcarbazepine and lamotrigine. Net effect: Anti-manic and anticonvulsant effect; the sodium-channel backbone of the anticonvulsant-mood-stabiliser bridge.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Carbamazepine.",
      answer: "Acute manic / mixed episodes of bipolar disorder, Bipolar maintenance, Trigeminal neuralgia, Epilepsy — focal seizures. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Carbamazepine and how you would manage it.",
      answer: "Aplastic anaemia / agranulocytosis: The classic haematological disaster: estimated 2–5 per 100,000 treatment-years. Management: Stop; haematology; educate on fever/sore throat/bruising/bleeding.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Carbamazepine require?",
      answer: "CBC (FBC) (Baseline, then periodically during first 3 months); LFTs (Baseline and periodically); Serum sodium (Baseline, then periodically (especially in the elderly)); Carbamazepine level (Steady state, after 2–4 weeks (post-auto-induction), and with clinical change (4–12 µg/mL))",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Carbamazepine that separates safe prescribers from unsafe ones.",
      answer: "Auto-induction: falling levels on a fixed dose — re-check after 3 weeks.",
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
      checkpoint: "You now know what Carbamazepine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Carbamazepine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Carbamazepine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Carbamazepine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Carbamazepine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Carbamazepine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Mania: 5–7 days for early effect; trigeminal neuralgia: days.",
      "Auto-induction adjusts levels over the first month — review at 3–4 weeks.",
    ],
    ifItWorks: [
      "Continue Carbamazepine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Carbamazepine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Carbamazepine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Moderate, dose-related — partly tolerance-developing.",
    dosing: [
      {
        indication: "Acute mania",
        starting: "200 mg twice daily",
        titration: "Increase by 200 mg/day every few days (divided)",
        target: "600–1600 mg/day (level 4–12)",
        max: "Level/counts-limited",
      },
      {
        indication: "Trigeminal neuralgia",
        starting: "100 mg twice daily",
        titration: "Increase by 100 mg every few days until pain control",
        target: "400–800 mg/day (often lower than psychiatric doses)",
        max: "Level-limited",
      },
      {
        indication: "Epilepsy",
        starting: "200 mg daily (divided)",
        titration: "Slow up-titration",
        target: "600–1200 mg/day",
        max: "Level-limited",
      },
    ],
    dosageForms: ["Tablets 100–400 mg", "Chewable 100/200 mg", "Extended-release (Retard) 200–400 mg", "Suspension"],
    dosingTips: [
      "Extended-release twice daily smooths the diplopia-ataxia peaks.",
      "Check the level after auto-induction (3–4 weeks), not at week 1.",
      "HLA screen first in Asian ancestry; FBC/LFT/Na at baseline.",
      "Name the OC failure — alternative contraception is mandatory.",
    ],
    overdose: [
      "Overdose with Carbamazepine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Carbamazepine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Initially 25–65 h, falling to 12–15 h after auto-induction..",
      "Metabolism: Hepatic CYP3A4 (substrate AND potent inducer — the self-accelerating profile)..",
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
    potentialAdvantages: ["Effective in lithium-refractory mania.", "Trigeminal neuralgia first-line.", "Cheap and widely available."],
    potentialDisadvantages: [
      "Auto-induction makes levels a moving target.",
      "The great inducer — interactions everywhere.",
      "Black-box marrow and skin risks.",
      "Hyponatraemia.",
    ],
    primaryTargetSymptoms: ["Manic and mixed episodes", "Bipolar maintenance (second-line)", "Trigeminal neuralgia", "Focal epilepsy"],
    pearls: [
      "Auto-induction: falling levels on a fixed dose — re-check after 3 weeks.",
      "The OC failure and erythromycin toxicity interactions are the prescribing legends.",
      "Diplopia-ataxia is dose-peak neurotoxicity; ER fixes it.",
      "HLA-B*15:02 → SJS: the pharmacogenomic lesson of psychiatry.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
