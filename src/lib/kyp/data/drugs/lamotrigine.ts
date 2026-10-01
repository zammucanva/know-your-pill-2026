import type { Drug } from "../types";

/**
 * Lamotrigine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), lamotrigine monograph (book p. 61)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const lamotrigine: Drug = {
  /* ---- Identity ---- */
  slug: "lamotrigine",
  genericName: "Lamotrigine",
  brandNames: ["Lamictal", "Lametec (India)"],
  drugClass: "mood-stabiliser",
  drugClassLabel: "Mood Stabiliser",
  drugClassFullName: "Mood Stabiliser — Anticonvulsant",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Mood Stabilisers", "Lamotrigine"],
  /* ---- Hero / summary ---- */
  tagline: "The depression-side mood stabiliser — the one that prevents the bottom of bipolar without triggering the top.",
  summary: "Lamotrigine is an anticonvulsant mood stabiliser whose psychiatric signature is the mirror image of lithium and valproate: it is strongest for bipolar DEPRESSION and depressive relapse prevention, with genuine antidepressant effect and no switch risk — while its anti-manic power is weak. Its phenyltriazine chemistry blocks sodium channels and reduces glutamate release. The famous dosing rule — halve and slow when combined with valproate, double with enzyme inducers — and the life-threatening rash risk (SJS/TEN) that mandates slow titration are its defining prescribing disciplines.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Lamotrigine — from its molecular target (Voltage-gated Na+ channels (use-dependent blockade); reduced glutamate and aspartate release) to clinical effect.",
    "List the FDA-approved and off-label uses of Lamotrigine.",
    "Predict the common and serious side effects of Lamotrigine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Lamotrigine.",
    "Compare Lamotrigine with other mood stabilisers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Lamotrigine blocks voltage-gated sodium channels, reducing presynaptic glutamate release — an anti-excitotoxic action that stabilises mood from below without serotonergic switch risk.",
    molecularTarget: "Voltage-gated Na+ channels (use-dependent blockade); reduced glutamate and aspartate release",
    effect: "Antidepressant and anti-depressant-relapse effect in bipolar disorder with minimal anti-manic action — the drug for the bottom half of the illness.",
    steps: [
      "Use-dependent sodium-channel blockade stabilises hyperexcitable neuronal membranes.",
      "Reduced presynaptic glutamate release dampens excitotoxic cascades implicated in depression and kindling.",
      "The net effect is antidepressant without manic switch — unique among agents active on the depressed pole.",
      "Anti-manic efficacy is weak — lamotrigine is not monotherapy for acute mania.",
    ],
    pharmacokinetics: "Complete absorption; the classic pharmacokinetic chameleon — its clearance doubles with enzyme inducers (carbamazepine, OCs) and halves with valproate.",
    halfLife: "25–33 hours alone; ~14 hours with inducers; ~70 hours with valproate — hence the three dosing schedules.",
    activeMetabolite: "The parent drug is active; N-glucuronide is the metabolite.",
    metabolism: "Hepatic glucuronidation (UGT1A4) — the pathway valproate inhibits and inducers accelerate.",
    excretion: "Renal glucuronide excretion.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Lamotrigine",
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
  neurotransmitters: ["Glutamate"],
  receptors: [
    "Voltage-gated Na+ channels (use-dependent blockade)",
  ],
  brainRegionIds: ["prefrontal-cortex", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Bipolar I maintenance — depressive-pole protection",
      status: "fda-approved",
      description: "The signature indication: delays depressive relapse (the 2003-pivital finding that shaped its identity).",
    },
    {
      name: "Bipolar depression (acute, off-label mono/adjunct)",
      status: "off-label",
      description: "Widely used; evidence positive in some trials — the practical backbone of depressed-pole treatment with quetiapine/lurasidone.",
    },
    {
      name: "Epilepsy — focal and generalised seizures",
      status: "fda-approved",
      description: "Broad-spectrum anticonvulsant origin.",
    },
    {
      name: "Unipolar depression (adjunct, treatment-resistant)",
      status: "off-label",
      description: "Modest evidence; occasionally useful in partial response.",
    },
    {
      name: "PTSD, borderline personality dysregulation (adjunct)",
      status: "off-label",
      description: "Affective instability and impulsivity — modest evidence, common practice.",
    },
    {
      name: "Cyclothymia / soft bipolar spectrum",
      status: "guideline",
      description: "The natural fit for soft-spectrum depressed-pole illness.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to lamotrigine",
      severity: "absolute",
      rationale: "SJS/TEN risk with rechallenge — never re-expose after a lamotrigine-caused serious rash.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Serious skin rash including Stevens-Johnson syndrome and toxic epidermal necrolysis",
      text: "Lamotrigine causes serious, potentially life-threatening rashes. Risk is highest: in the first 8 weeks of treatment; with rapid titration; with valproate co-prescription; and in children. Use the approved titration schedules exactly; if valproate is co-prescribed, halve the lamotrigine dose and halve the titration speed. Any rash during the titration phase warrants stopping the drug. The rash risk drops to near-background after the first months.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "The most common effect in trials.",
      management: "Usually transient.",
    },
    {
      name: "Nausea and dizziness",
      frequency: "common",
      severity: "mild",
      description: "Early titration effects.",
      management: "Slower titration; take with food.",
    },
    {
      name: "Insomnia or vivid dreams",
      frequency: "common",
      severity: "mild",
      description: "Mildly activating profile — generally wakeful rather than sedating.",
      management: "Morning dosing.",
    },
    {
      name: "Rash (benign)",
      frequency: "common",
      severity: "moderate",
      description: "Most rashes are benign — but every rash in the titration phase is evaluated, not assumed.",
      management: "Stop and reassess; never continue titrating through a rash.",
    },
    {
      name: "Ataxia and diplopia (higher doses, with other anticonvulsants)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Classic anticonvulsant neurotoxicity.",
      management: "Dose review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Stevens-Johnson syndrome / TEN",
      frequency: "rare",
      severity: "life-threatening",
      description: "The defining serious risk: 0.8–1/1000 in adults on the slow schedule; 10× higher in children; highest with valproate co-therapy and fast titration.",
      management: "Immediate discontinuation on any rash + mucosal involvement/blistering; dermatology; supportive care.",
    },
    {
      name: "Hypersensitivity syndrome / DRESS",
      frequency: "rare",
      severity: "life-threatening",
      description: "Multi-organ involvement with fever and rash — may evolve over weeks.",
      management: "Stop; systemic evaluation; corticosteroids per severity.",
    },
    {
      name: "Aseptic meningitis",
      frequency: "rare",
      severity: "severe",
      description: "Headache, neck stiffness, fever — a recognised idiosyncratic reaction.",
      management: "Stop; CSF evaluation if suspected.",
    },
    {
      name: "Blood dyscrasias",
      frequency: "rare",
      severity: "severe",
      description: "Rare reports.",
      management: "FBC if unexplained infection/bruising.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Rash counselling and vigilance",
      frequency: "Every visit during titration (first 8 weeks)",
      rationale: "The monitoring is the history: every rash is evaluated immediately.",
    },
    {
      parameter: "No routine levels required",
      frequency: "—",
      rationale: "Level monitoring is optional; the titration schedule is the safety system.",
    },
    {
      parameter: "Mood polarity review",
      frequency: "Every visit",
      rationale: "Confirm the patient is not relying on lamotrigine for mania protection.",
    },
  ],
  interactions: [
    {
      drug: "Valproate",
      severity: "major",
      mechanism: "Doubles lamotrigine levels by inhibiting glucuronidation — the classic interaction.",
      action: "Halve the lamotrigine dose AND halve the titration speed (the 'green schedule').",
    },
    {
      drug: "Carbamazepine and other enzyme inducers",
      severity: "major",
      mechanism: "Halve lamotrigine levels.",
      action: "Double the lamotrigine dose gradually (the 'red schedule').",
    },
    {
      drug: "Combined oral contraceptives",
      severity: "major",
      mechanism: "Oestrogen induces lamotrigine glucuronidation — levels drop ~50% on active pills and rebound in pill-free weeks (toxicity risk).",
      action: "Monitor clinically; adjust dose; watch the pill-free week for rash/headache clusters.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Lamotrigine is among the SAFER anticonvulsants/mood stabilisers in pregnancy — the pregnancy-preferred mood stabiliser alongside careful use of others. Registry data show malformation rates close to background, and the neurodevelopment data are comparatively reassuring. Levels fall substantially during pregnancy and rebound postpartum — dose adjustment is expected.",
    lactation: "Lamotrigine passes into milk in meaningful amounts and can reach neonatal levels that cause apnoea/rash — infant monitoring (or avoiding breastfeeding at higher doses) is advised.",
  },
  renalAdjustment: "No significant adjustment; standard caution in severe impairment.",
  hepaticAdjustment: "No adjustment for mild-moderate; glucuronidation is hepatic.",
  /* ---- Education ---- */
  patientExplanation: "Lamotrigine is a mood stabiliser that works on the depressed side of bipolar illness — it lifts and protects against depression without the risk of flipping you into mania. Its one famous rule: the dose must be built up very slowly over weeks, because a fast rise can cause a serious skin rash. Any rash in the first months means stopping and calling your doctor the same day.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Lamotrigine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The mirror-image drug: lithium and valproate work from above (mania); lamotrigine works from below (depression).",
    "Three titration speeds: standard alone, half-speed with valproate, double-speed with carbamazepine — the three-schedule system IS the prescribing skill.",
    "Every rash in titration is a stop-and-evaluate event; benign rash can only be called benign in retrospect.",
    "The Pill interaction is bidirectional: levels halve on active pills and rebound in the pill-free week — the week-off headache/rash cluster is pharmacokinetics.",
    "Lamotrigine + valproate is the classic synergistic bipolar pair (complementary poles + interaction managed by the green schedule).",
    "After the first 8 weeks, rash risk drops to near-background and the drug is among the best tolerated long-term mood agents.",
    "Pregnancy: the preferred mood stabiliser — but levels fall through pregnancy and rebound postpartum (titrate and watch).",
    "Not a mania drug — pairing with an anti-manic agent is the standard architecture of full bipolar cover.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Lamotrigine: Lamotrigine blocks voltage-gated sodium channels, reducing presynaptic glutamate release — an anti-excitotoxic action that stabilises mood from below without serotonergic switch risk.",
        "Uses of Lamotrigine: Bipolar I maintenance — depressive-pole protection; Bipolar depression (acute, off-label mono/adjunct); Epilepsy — focal and generalised seizures; Unipolar depression (adjunct, treatment-resistant)",
        "Mechanism: use-dependent Na+ channel blockade → ↓glutamate release.",
        "Psychiatric signature: bipolar DEPRESSION and depressive-relapse prevention; NOT anti-manic.",
      ],
      practical: [
        "Prescribe Lamotrigine for bipolar i maintenance — depressive-pole protection with dose, timing, and duration.",
        "Outline the monitoring plan: Rash counselling and vigilance (Every visit during titration (first 8 weeks)); No routine levels required (—); Mood polarity review (Every visit)",
      ],
      longAnswer: [
        "Lamotrigine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: use-dependent Na+ channel blockade → ↓glutamate release.",
        "Psychiatric signature: bipolar DEPRESSION and depressive-relapse prevention; NOT anti-manic.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: use-dependent Na+ channel blockade → ↓glutamate release.",
        "Psychiatric signature: bipolar DEPRESSION and depressive-relapse prevention; NOT anti-manic.",
        "The three-schedule system: standard; +valproate → halve dose AND half-speed; +inducers → double dose.",
        "SJS/TEN black box: slow titration is the safety mechanism; highest risk in the first 8 weeks and with valproate.",
        "25 mg × 2 weeks → 50 mg × 2 weeks → 100 → target 200 mg/day (standard adult schedule).",
        "Oral contraceptives halve levels (pill-free week rebound toxicity).",
      ],
      pyqConcepts: [
        "Mechanism/target of Lamotrigine",
        "Key adverse effect: Stevens-Johnson syndrome / TEN",
        "Dosing and titration of Lamotrigine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Lamotrigine develops stevens-johnson syndrome / ten — next best step?",
        "When to choose Lamotrigine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Voltage-gated Na+ channels (use-dependent blockade); reduced glutamate and aspartate release",
        "Most common side effects: Headache, Nausea and dizziness, Insomnia or vivid dreams",
        "Key contraindication: Known hypersensitivity to lamotrigine",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Depression-pole protection without switch risk — the lamotrigine identity.",
        "The three-schedule system is the exam and the practice.",
        "Every rash stops the drug until proven benign.",
        "Lamotrigine + valproate: complementary poles, managed interaction.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: use-dependent Na+ channel blockade → ↓glutamate release.",
    "Psychiatric signature: bipolar DEPRESSION and depressive-relapse prevention; NOT anti-manic.",
    "The three-schedule system: standard; +valproate → halve dose AND half-speed; +inducers → double dose.",
    "SJS/TEN black box: slow titration is the safety mechanism; highest risk in the first 8 weeks and with valproate.",
    "25 mg × 2 weeks → 50 mg × 2 weeks → 100 → target 200 mg/day (standard adult schedule).",
    "Oral contraceptives halve levels (pill-free week rebound toxicity).",
    "Pregnancy-preferred mood stabiliser with reassuring registry data.",
    "Well tolerated long-term; cognitive profile clean.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — bipolar i maintenance — depressive-pole protection",
      presentation: "A patient presenting with bipolar i maintenance — depressive-pole protection, started on Lamotrigine.",
      history: "A adult patient presents with a bipolar i maintenance — depressive-pole protection picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with bipolar i maintenance — depressive-pole protection; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Bipolar I maintenance — depressive-pole protection. Differentials are considered and excluded clinically.",
      rationale: "Lamotrigine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Mood Stabiliser) with strong evidence in this condition.",
      management: "Started at 25 mg once daily × 2 weeks, titrated to 100–200 mg/day (up to 400 in some) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Lamotrigine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Mood Stabiliser comparison — choosing within the class",
      primaryDrug: "Lamotrigine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Voltage-gated Na+ channels (use-dependent blockade); reduced glutamate and aspartate release",
          comparisons: [
            {
              drug: "Carbamazepine",
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
          primaryValue: "25–33 hours alone; ~14 hours with inducers; ~70 hours with valproate — hence the three dosing schedules.",
          comparisons: [
            {
              drug: "Carbamazepine",
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
              drug: "Carbamazepine",
              value: "See product information and class comparison.",
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
          primaryValue: "Not sedating — mildly activating (morning dosing suits most).",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "Moderate, dose-related — partly tolerance-developing.",
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
          primaryValue: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "Mania + trigeminal neuralgia + the great CYP450 inducer",
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
      description: "Lamotrigine reaches peak plasma concentration and begins acting at its molecular target (Voltage-gated Na+ channels (use-dependent blockade); reduced glutamate and aspartate release). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (headache, nausea and dizziness, insomnia or vivid dreams). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Antidepressant/destabilisation benefit builds over 4–8 weeks.)",
      title: "Therapeutic effect builds",
      description: "Antidepressant/destabilisation benefit builds over 4–8 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Lamotrigine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Lamotrigine take to work?",
      answer: "Antidepressant/destabilisation benefit builds over 4–8 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Lamotrigine?",
      answer: "The most frequently reported effects are: Headache, Nausea and dizziness, Insomnia or vivid dreams, Rash (benign), Ataxia and diplopia (higher doses, with other anticonvulsants). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Lamotrigine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Lamotrigine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Lamotrigine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Lamotrigine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Lamotrigine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), lamotrigine monograph, p. 61",
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
        source: "FDA Prescribing Information for Lamictal (Lamotrigine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for lamotrigine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Lamotrigine",
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
      name: "Carbamazepine",
      slug: "carbamazepine",
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
      name: "Bipolar I maintenance — depressive-pole protection",
      relationship: "primary",
    },
    {
      name: "Bipolar depression (acute, off-label mono/adjunct)",
      relationship: "off-label",
    },
    {
      name: "Epilepsy — focal and generalised seizures",
      relationship: "primary",
    },
    {
      name: "Unipolar depression (adjunct, treatment-resistant)",
      relationship: "off-label",
    },
    {
      name: "PTSD, borderline personality dysregulation (adjunct)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Lamotrigine",
      type: "drug",
      href: "/drugs/lamotrigine",
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
      label: "Voltage-gated Na+ channels (use-dependent blockade); reduced glutamate and aspartate release",
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
      label: "Hippocampus",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Bipolar I maintenance — depressive-pole protection",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar depression (acute, off-label mono/adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Epilepsy — focal and generalised seizures",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Stevens-Johnson syndrome / TEN",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Hypersensitivity syndrome / DRESS",
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
      label: "Patient Guide — Lamotrigine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The depression-side mood stabiliser — the one that prevents the bottom of bipolar without triggering the top.",
    summary: "Lamotrigine is a prescription medicine used to treat bipolar i maintenance — depressive-pole protection. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Lamotrigine is a mood stabiliser that works on the depressed side of bipolar illness — it lifts and protects against depression without the risk of flipping you into mania. Its one famous rule: the dose must be built up very slowly over weeks, because a fast rise can cause a serious skin rash. Any rash in the first months means stopping and calling your doctor the same day.",
    sideEffects: "The most common side effects are: headache, nausea and dizziness, insomnia or vivid dreams, rash (benign), ataxia and diplopia (higher doses, with other anticonvulsants). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Stevens-Johnson syndrome / TEN and Hypersensitivity syndrome / DRESS. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: rash counselling and vigilance (every visit during titration (first 8 weeks)); no routine levels required (—); mood polarity review (every visit). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Known hypersensitivity to lamotrigine. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Valproate, Carbamazepine and other enzyme inducers, Combined oral contraceptives. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Lametec",
        manufacturer: "Cipla",
        strengths: "25–200 mg",
      },
      {
        name: "Lamitor",
        manufacturer: "Torrent",
        strengths: "25–200 mg",
      },
      {
        name: "Lamotrigine generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "25–200 mg",
      },
    ],
    typicalDoses: "Standard titration to 200 mg/day; half-schedule with valproate.",
    prescribingScenarios: [
      "Bipolar depression first-line (with quetiapine/lurasidone).",
      "Bipolar II maintenance backbone.",
      "Pregnancy-related bipolar continuation.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Rash vigilance through titration (8 weeks); document the schedule in the prescription.",
    patientCounselling: [
      "Any rash = stop the medicine and contact us the same day — no exceptions.",
      "The build-up over weeks is a safety feature, not slowness.",
      "If you take the contraceptive pill, tell us — the dose may need adjusting.",
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
    note: "Generic lamotrigine widely stocked in Jan Aushadhi kendras.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Mood Stabilisers",
    members: [
      {
        name: "Lamotrigine",
        slug: "lamotrigine",
        relationship: "This guide",
        distinguishing: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
      },
      {
        name: "Carbamazepine",
        slug: "carbamazepine",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Mania + trigeminal neuralgia + the great CYP450 inducer",
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
      question: "Which molecular target does Lamotrigine primarily act on?",
      options: [
        "Voltage-gated Na+ channels (use-dependent blockade); reduced glutamate and aspartate release",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Lamotrigine acts primarily at Voltage-gated Na+ channels (use-dependent blockade); reduced glutamate and aspartate release. Lamotrigine blocks voltage-gated sodium channels, reducing presynaptic glutamate release — an anti-excitotoxic action that stabilises mood from below without serotonergic switch risk.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Lamotrigine?",
      options: ["Headache", "Nausea and dizziness", "Insomnia or vivid dreams", "Rash (benign)"],
      correctIndex: 0,
      explanation: "Headache — The most common effect in trials.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Lamotrigine for standard schedule (adults, no interacting drugs)?",
      options: [
        "100–200 mg/day (up to 400 in some)",
        "400 mg/day (mood indications rarely need it)",
        "100–200 mg/day (up to 400 in some) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For standard schedule (adults, no interacting drugs): start 25 mg once daily × 2 weeks, target 100–200 mg/day (up to 400 in some), maximum 400 mg/day (mood indications rarely need it). Then 50 mg × 2 weeks → 100 mg × 1 week → 200 mg/day target",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Lamotrigine in two sentences.",
      answer: "Lamotrigine blocks voltage-gated sodium channels, reducing presynaptic glutamate release — an anti-excitotoxic action that stabilises mood from below without serotonergic switch risk. Net effect: Antidepressant and anti-depressant-relapse effect in bipolar disorder with minimal anti-manic action — the drug for the bottom half of the illness.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Lamotrigine.",
      answer: "Bipolar I maintenance — depressive-pole protection, Bipolar depression (acute, off-label mono/adjunct), Epilepsy — focal and generalised seizures, Unipolar depression (adjunct, treatment-resistant). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Lamotrigine and how you would manage it.",
      answer: "Stevens-Johnson syndrome / TEN: The defining serious risk: 0.8–1/1000 in adults on the slow schedule; 10× higher in children; highest with valproate co-therapy and fast titration. Management: Immediate discontinuation on any rash + mucosal involvement/blistering; dermatology; supportive care.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Lamotrigine require?",
      answer: "Rash counselling and vigilance (Every visit during titration (first 8 weeks)); No routine levels required (—); Mood polarity review (Every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Lamotrigine that separates safe prescribers from unsafe ones.",
      answer: "Depression-pole protection without switch risk — the lamotrigine identity.",
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
      checkpoint: "You now know what Lamotrigine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Lamotrigine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Lamotrigine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Lamotrigine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Lamotrigine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Lamotrigine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Antidepressant/destabilisation benefit builds over 4–8 weeks.",
      "Titration to 200 mg takes ~5–6 weeks on the standard schedule — patience is built into the drug.",
    ],
    ifItWorks: [
      "Continue Lamotrigine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Lamotrigine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Lamotrigine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Not sedating — mildly activating (morning dosing suits most).",
    dosing: [
      {
        indication: "Standard schedule (adults, no interacting drugs)",
        starting: "25 mg once daily × 2 weeks",
        titration: "Then 50 mg × 2 weeks → 100 mg × 1 week → 200 mg/day target",
        target: "100–200 mg/day (up to 400 in some)",
        max: "400 mg/day (mood indications rarely need it)",
      },
      {
        indication: "With valproate (half schedule)",
        starting: "25 mg ALTERNATE days × 2 weeks",
        titration: "Then 25 mg daily × 2 weeks → 50 mg → 100 mg target",
        target: "100 mg/day",
        max: "200 mg/day",
      },
      {
        indication: "With enzyme inducers (double schedule)",
        starting: "50 mg daily × 2 weeks",
        titration: "Then 100 → 200 → 300–400 mg",
        target: "300–400 mg/day",
        max: "600 mg/day (epilepsy range)",
      },
      {
        indication: "Withdrawal/restart after a break > 5 days)",
        starting: "Restart the schedule — do not resume at the old dose",
        titration: "Taper ~2 weeks when stopping",
        target: "—",
        max: "—",
      },
    ],
    dosageForms: ["Tablets 25–200 mg", "Chewable/dispersible tablets", "Orally disintegrating forms"],
    dosingTips: [
      "The starter packs encode the schedules — use them.",
      "Photograph the titration calendar into the patient's phone.",
      "Restart the schedule after any break > 5 days.",
      "Pair with an anti-manic for full-polarity cover — lamotrigine alone is half a regimen in bipolar I.",
      "The pill-free week: watch for rash/headache clusters (rebound levels).",
    ],
    overdose: [
      "Overdose with Lamotrigine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Lamotrigine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 25–33 hours alone; ~14 hours with inducers; ~70 hours with valproate — hence the three dosing schedules..",
      "Metabolism: Hepatic glucuronidation (UGT1A4) — the pathway valproate inhibits and inducers accelerate..",
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
      "The depression-pole specialist with no switch risk.",
      "Weight-neutral, cognitively clean.",
      "Best pregnancy profile among mood stabilisers.",
      "Excellent long-term tolerability.",
    ],
    potentialDisadvantages: [
      "Weak anti-manic action — never monotherapy for acute mania.",
      "Slow titration = slow onset of benefit (weeks).",
      "Rash-driven black box demands discipline.",
      "OC interaction complicates half the patient population.",
    ],
    primaryTargetSymptoms: [
      "Bipolar depressive episodes and depressive relapse",
      "Soft bipolar spectrum and cyclothymia",
      "Affective instability (adjunct)",
    ],
    pearls: [
      "Depression-pole protection without switch risk — the lamotrigine identity.",
      "The three-schedule system is the exam and the practice.",
      "Every rash stops the drug until proven benign.",
      "Lamotrigine + valproate: complementary poles, managed interaction.",
      "Weight-neutral and pregnancy-friendly — the tolerability champion of mood stabilisers.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
