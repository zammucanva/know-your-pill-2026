import type { Drug } from "../types";

/**
 * Valproate — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), valproate monograph (book p. 132)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const valproate: Drug = {
  /* ---- Identity ---- */
  slug: "valproate",
  genericName: "Valproate",
  brandNames: ["Depakote (divalproex)", "Depakene (valproic acid)", "Valparin (India)"],
  drugClass: "mood-stabiliser",
  drugClassLabel: "Mood Stabiliser",
  drugClassFullName: "Mood Stabiliser — Anticonvulsant",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Mood Stabilisers", "Valproate"],
  /* ---- Hero / summary ---- */
  tagline: "The broad-spectrum anticonvulsant mood stabiliser — the mania workhorse, now pregnancy-governed.",
  summary: "Valproate (divalproex/valproic acid) is a broad-spectrum anticonvulsant used as a first-line mood stabiliser for acute mania — particularly mixed and rapid-cycling presentations where lithium underperforms — and for bipolar maintenance, aggression, and adjunctive schizophrenia care. Its mechanism spans increased GABA, sodium-channel blockade, and HDAC inhibition. Hepatotoxicity, thrombocytopenia, PCOS, and above all teratogenicity (neural tube defects, ~10% malformation rate, neurodevelopmental sequelae) now strictly govern its use in women of childbearing potential under modern pregnancy-prevention programmes.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Valproate — from its molecular target (GABA transaminase (inhibition → ↑GABA); voltage-gated Na+ channels; HDAC (inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Valproate.",
    "Predict the common and serious side effects of Valproate from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Valproate.",
    "Compare Valproate with other mood stabilisers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Valproate increases GABA availability (inhibits GABA transaminase), blocks voltage-gated sodium channels, and inhibits histone deacetylase (HDAC) — a multi-mechanism profile spanning inhibition and gene expression.",
    molecularTarget: "GABA transaminase (inhibition → ↑GABA); voltage-gated Na+ channels; HDAC (inhibition)",
    effect: "Anti-manic, mood-stabilising, anti-aggressive, and anticonvulsant — one of the fastest and broadest mood stabilisers available.",
    steps: [
      "Increased brain GABA (transaminase inhibition plus synthesis stimulation) enhances inhibitory tone — the classic explanation for sedation and seizure protection.",
      "Use-dependent sodium-channel blockade limits repetitive neuronal firing — the anticonvulsant backbone.",
      "HDAC inhibition changes gene expression — a modern mechanistic addition possibly relevant to neuroprotection and mood stability.",
      "The clinical signature: rapid anti-manic effect with broad coverage of mixed, dysphoric, and rapid-cycling states.",
    ],
    pharmacokinetics: "Well absorbed; extended-release divalproex smooths peaks. Level monitoring useful (50–125 µg/mL) though efficacy correlates loosely.",
    halfLife: "9–16 hours (dose-dependent kinetics); ER allows twice-daily.",
    activeMetabolite: "Metabolites contribute modestly.",
    metabolism: "Hepatic (mitochondrial beta-oxidation + CYP2C9/2C19 minor); inhibits its own metabolism at higher levels (dose-dependent).",
    excretion: "Glucuronide metabolites in urine.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Valproate",
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
  neurotransmitters: ["GABA", "Glutamate"],
  receptors: ["GABA-A (indirect enhancement)", "Voltage-gated Na+ channels", "HDAC (inhibition)"],
  brainRegionIds: ["prefrontal-cortex", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Acute manic / mixed episodes of bipolar disorder",
      status: "fda-approved",
      description: "First-line — including lithium-unresponsive mania; THE agent for mixed states and rapid cycling.",
      ageGroup: "Adults",
    },
    {
      name: "Bipolar maintenance",
      status: "fda-approved",
      description: "Effective relapse prevention, often combined with lithium or an antipsychotic.",
    },
    {
      name: "Epilepsy — multiple seizure types",
      status: "fda-approved",
      description: "Broad-spectrum anticonvulsant (the origin of its psychiatric use).",
    },
    {
      name: "Migraine prophylaxis",
      status: "fda-approved",
      description: "A standard preventive option.",
    },
    {
      name: "Aggression / impulsivity (adjunct)",
      status: "off-label",
      description: "Widely used for aggression in dementia, personality disorder, and intellectual disability.",
    },
    {
      name: "Schizophrenia (adjunct)",
      status: "off-label",
      description: "Modest evidence for augmenting antipsychotics, especially with excitability/aggression.",
    },
  ],
  contraindications: [
    {
      name: "Pregnancy — for bipolar indications (modern regulation)",
      severity: "absolute",
      rationale: "Valproate is now contraindicated in pregnancy for bipolar treatment (and in women able to become pregnant without a pregnancy-prevention programme) after the MHRA/EMA restrictions: ~10% major malformation rate plus neurodevelopmental impairment. Epilepsy use is permitted only when no alternative exists.",
    },
    {
      name: "Active liver disease / significant hepatic dysfunction",
      severity: "absolute",
      rationale: "Hepatotoxicity risk — LFTs before and during therapy.",
    },
    {
      name: "Urea cycle disorders",
      severity: "absolute",
      rationale: "Risk of hyperammonaemic encephalopathy.",
    },
    {
      name: "Mitochondrial disease (POLG mutations)",
      severity: "absolute",
      rationale: "Risk of fatal hepatotoxicity — a modern absolute contraindication.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Hepatotoxicity",
      text: "Valproate has caused fatal hepatotoxicity, usually in the first 6 months and in children under 2 (especially on polytherapy) or with metabolic disease. Monitor LFTs; check ammonia if confusion or lethargy appears.",
    },
    {
      title: "Teratogenicity and pregnancy prevention",
      text: "Valproate exposure in pregnancy causes neural tube defects (~1–2%), a ~10% overall malformation rate, and neurodevelopmental delay/autism-spectrum outcomes. In most jurisdictions its use in women of childbearing potential requires a pregnancy-prevention programme with documented counselling and negative pregnancy testing. For bipolar disorder, alternatives should be used.",
    },
    {
      title: "Pancreatitis",
      text: "Rare, occasionally fatal haemorrhagic pancreatitis — check lipase and stop if pancreatic illness suspected.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and tremor",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related — the daily texture of valproate.",
      management: "Dose timing/reduction; as with lithium, tremor prompts a level check.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "severe",
      description: "Significant appetite stimulation — second only to olanzapine/clozapine among mood drugs.",
      management: "Early lifestyle intervention; metformin if climbing.",
    },
    {
      name: "Gastrointestinal upset and nausea",
      frequency: "common",
      severity: "mild",
      description: "Less with divalproex ER than plain valproate.",
      management: "Take with food; use ER.",
    },
    {
      name: "Hair loss (thinning)",
      frequency: "common",
      severity: "mild",
      description: "Telogen effluvium — distressing; reversible.",
      management: "Selenium/zinc supplementation is traditional advice; reassurance.",
    },
    {
      name: "Thrombocytopenia",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related platelet suppression — bruising is the clue.",
      management: "Check FBC if bruising; reduce dose.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "life-threatening",
      description: "The classic serious risk: monitor LFTs; highest risk in the young and polytherapied.",
      management: "Stop if transaminases rise substantially with symptoms; check ammonia if encephalopathic.",
    },
    {
      name: "Hyperammonaemic encephalopathy",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Confusion/lethargy with normal LFTs — ammonia is the test.",
      management: "Stop; L-carnitine is used in treatment.",
    },
    {
      name: "Pancreatitis",
      frequency: "rare",
      severity: "life-threatening",
      description: "Severe abdominal pain radiating to the back with vomiting — the presentation.",
      management: "Stop; urgent lipase and hospital care.",
    },
    {
      name: "PCOS and menstrual irregularity",
      frequency: "uncommon",
      severity: "severe",
      description: "Valproate-associated PCOS in women with epilepsy/bipolar — weight-linked and drug-linked.",
      management: "Monitor cycles; consider alternatives in young women.",
    },
    {
      name: "Neural tube defects and neurodevelopmental harm",
      frequency: "uncommon",
      severity: "severe",
      description: "The teratogenicity governing modern prescribing (see boxed warning).",
      management: "Pregnancy prevention programmes; alternatives in women who may conceive.",
    },
    {
      name: "Aplastic anaemia / agranulocytosis",
      frequency: "rare",
      severity: "life-threatening",
      description: "Rare haematological toxicity.",
      management: "FBC if unexplained fever/infection.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "LFTs",
      frequency: "Baseline, then periodically during first 6 months",
      rationale: "Hepatotoxicity surveillance.",
    },
    {
      parameter: "FBC (including platelets)",
      frequency: "Baseline, then periodically",
      rationale: "Thrombocytopenia and rare marrow toxicity.",
    },
    {
      parameter: "Valproate level",
      frequency: "Steady state and if toxicity/non-response suspected (target 50–125 µg/mL)",
      rationale: "Level-guided but loosely correlated with response.",
    },
    {
      parameter: "Weight",
      frequency: "Baseline and every visit",
      rationale: "Common, significant weight gain.",
    },
    {
      parameter: "Pregnancy testing and prevention programme",
      frequency: "Before initiation and per local regulation in women of childbearing potential",
      rationale: "A regulatory condition of prescribing.",
    },
    {
      parameter: "Ammonia if encephalopathic",
      frequency: "When confusion/lethargy appears",
      rationale: "Hyperammonaemia can occur with normal LFTs.",
    },
  ],
  interactions: [
    {
      drug: "Lamotrigine",
      severity: "major",
      mechanism: "Valproate more than doubles lamotrigine levels (inhibits glucuronidation) — the classic interaction.",
      action: "Halve the lamotrigine dose and titrate even slower when starting together.",
    },
    {
      drug: "Aspirin and antiplatelets",
      severity: "moderate",
      mechanism: "Additive bleeding risk (platelet effects plus displacement).",
      action: "Counsel on bruising/bleeding.",
    },
    {
      drug: "Carbapenem antibiotics",
      severity: "contraindicated",
      mechanism: "Can precipitously lower valproate levels — seizures/breakthrough mania follow.",
      action: "Avoid the combination.",
    },
    {
      drug: "Other hepatotoxins and alcohol",
      severity: "major",
      mechanism: "Additive hepatic burden.",
      action: "Counsel; monitor LFTs.",
    },
    {
      drug: "Topiramate",
      severity: "moderate",
      mechanism: "Additive cognitive effects, weight interaction, and ammonia/encephalopathy reports.",
      action: "Monitor cognition.",
    },
  ],
  pregnancy: {
    legacyCategory: "D (now effectively X for bipolar use in many jurisdictions)",
    summary: "Valproate is the most teratogenic commonly used psychotropic: neural tube defects (~1–2%), a ~10% overall malformation rate, and dose-dependent neurodevelopmental impairment (lower IQ, autism traits). Regulatory programmes (MHRA/EMA) now effectively contraindicate valproate for bipolar disorder in women who can become pregnant, except where no alternative exists AND a pregnancy-prevention programme operates. For epilepsy, use is permitted under strict control.",
    lactation: "Valproate is relatively compatible with breastfeeding compared with alternatives, but thrombocytopenia and hepatic effects in the infant warrant paediatric monitoring (platelets if bruising).",
  },
  renalAdjustment: "No dose adjustment generally required (metabolites renal); monitor clinically in severe impairment.",
  hepaticAdjustment: "Contraindicated in significant active liver disease; LFT surveillance during therapy.",
  /* ---- Education ---- */
  patientExplanation: "Valproate is a strong mood stabiliser used for mania and for preventing mood swings — especially the mixed, irritable kind that lithium handles poorly. It was first an epilepsy medicine. It needs blood tests (liver and blood counts), it commonly causes weight gain and tremor, and — critically for women — it can seriously harm an unborn baby, which is why strict pregnancy rules now surround it.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Valproate builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Valproate owns mixed states and rapid cycling — the presentations lithium fails; the two drugs are complementary, not rivals.",
    "Valproate + lamotrigine = the classic interaction: lamotrigine levels double — halve the dose, halve the titration speed.",
    "The teratogenicity rules are now regulatory, not advisory — pregnancy-prevention programmes with documented counselling govern female patients.",
    "Confusion with normal LFTs: think ammonia — hyperammonaemia is valproate's stealth encephalopathy.",
    "Polycystic ovary changes and menstrual irregularity in young women — the under-counselled long-term risk.",
    "For aggression (dementia, personality disorder, intellectual disability), valproate has among the best evidence of any mood stabiliser.",
    "Divalproex ER at night converts GI upset and peak sedation into tolerability.",
    "Hair loss is real and distressing — selenium/zinc advice plus reassurance of reversibility keeps patients on board.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Valproate: Valproate increases GABA availability (inhibits GABA transaminase), blocks voltage-gated sodium channels, and inhibits histone deacetylase (HDAC) — a multi-mechanism profile spanning inhibition and gene expression.",
        "Uses of Valproate: Acute manic / mixed episodes of bipolar disorder; Bipolar maintenance; Epilepsy — multiple seizure types; Migraine prophylaxis",
        "Mechanism: ↑GABA (transaminase inhibition) + Na+ channel blockade + HDAC inhibition — a triple-action anticonvulsant.",
        "First-line for acute mania, including mixed states and rapid cycling (lithium's blind spots).",
      ],
      practical: [
        "Prescribe Valproate for acute manic / mixed episodes of bipolar disorder with dose, timing, and duration.",
        "Outline the monitoring plan: LFTs (Baseline, then periodically during first 6 months); FBC (including platelets) (Baseline, then periodically); Valproate level (Steady state and if toxicity/non-response suspected (target 50–125 µg/mL))",
      ],
      longAnswer: [
        "Valproate: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: ↑GABA (transaminase inhibition) + Na+ channel blockade + HDAC inhibition — a triple-action anticonvulsant.",
        "First-line for acute mania, including mixed states and rapid cycling (lithium's blind spots).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: ↑GABA (transaminase inhibition) + Na+ channel blockade + HDAC inhibition — a triple-action anticonvulsant.",
        "First-line for acute mania, including mixed states and rapid cycling (lithium's blind spots).",
        "Black box: hepatotoxicity, pancreatitis, and teratogenicity (neural tube defects ~1–2%, ~10% malformations, neurodevelopmental harm) — pregnancy-prevention programmes mandatory.",
        "Valproate doubles lamotrigine levels (glucuronidation inhibition) — halve lamotrigine.",
        "Hyperammonaemic encephalopathy with normal LFTs — check ammonia when confused.",
        "Thrombocytopenia (bruising), weight gain, PCOS, hair loss — the daily profile.",
      ],
      pyqConcepts: ["Mechanism/target of Valproate", "Key adverse effect: Hepatotoxicity", "Dosing and titration of Valproate"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Valproate develops hepatotoxicity — next best step?",
        "When to choose Valproate over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA transaminase (inhibition → ↑GABA); voltage-gated Na+ channels; HDAC (inhibition)",
        "Most common side effects: Sedation and tremor, Weight gain, Gastrointestinal upset and nausea",
        "Key contraindication: Pregnancy — for bipolar indications (modern regulation)",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Mixed state or rapid cycling: valproate first.",
        "Valproate doubles lamotrigine — the reflex check every prescriber must own.",
        "Confused on valproate with clean LFTs: ammonia.",
        "The pregnancy rules are regulations now — not optional counselling.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: ↑GABA (transaminase inhibition) + Na+ channel blockade + HDAC inhibition — a triple-action anticonvulsant.",
    "First-line for acute mania, including mixed states and rapid cycling (lithium's blind spots).",
    "Black box: hepatotoxicity, pancreatitis, and teratogenicity (neural tube defects ~1–2%, ~10% malformations, neurodevelopmental harm) — pregnancy-prevention programmes mandatory.",
    "Valproate doubles lamotrigine levels (glucuronidation inhibition) — halve lamotrigine.",
    "Hyperammonaemic encephalopathy with normal LFTs — check ammonia when confused.",
    "Thrombocytopenia (bruising), weight gain, PCOS, hair loss — the daily profile.",
    "Level 50–125 µg/mL (loose correlation); dose-dependent kinetics.",
    "Urea cycle disorders and POLG mitochondrial disease: absolute contraindications.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — acute manic / mixed episodes of bipolar disorder",
      presentation: "A patient presenting with acute manic / mixed episodes of bipolar disorder, started on Valproate.",
      history: "A adult patient presents with a acute manic / mixed episodes of bipolar disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with acute manic / mixed episodes of bipolar disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Acute manic / mixed episodes of bipolar disorder. Differentials are considered and excluded clinically.",
      rationale: "Valproate is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Mood Stabiliser) with strong evidence in this condition.",
      management: "Started at 25 mg/kg/day once daily (loading-style), titrated to Level 50–125 µg/mL (typically 1000–2500 mg/day) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Valproate takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Mood Stabiliser comparison — choosing within the class",
      primaryDrug: "Valproate",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA transaminase (inhibition → ↑GABA); voltage-gated Na+ channels; HDAC (inhibition)",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "See full guide",
            },
            {
              drug: "Lamotrigine",
              value: "See full guide",
            },
            {
              drug: "Lithium",
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
          primaryValue: "9–16 hours (dose-dependent kinetics); ER allows twice-daily.",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "—",
            },
            {
              drug: "Lamotrigine",
              value: "—",
            },
            {
              drug: "Lithium",
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
              drug: "Lamotrigine",
              value: "See product information and class comparison.",
            },
            {
              drug: "Lithium",
              value: "See product information and class comparison.",
            },
            {
              drug: "Oxcarbazepine",
              value: "See product information and class comparison.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Common, dose-related — often useful in acute mania.",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "Moderate, dose-related — partly tolerance-developing.",
            },
            {
              drug: "Lamotrigine",
              value: "Not sedating — mildly activating (morning dosing suits most).",
            },
            {
              drug: "Lithium",
              value: "Not typically sedating — neutral; occasionally described as 'slowing'.",
            },
            {
              drug: "Oxcarbazepine",
              value: "Mild-to-moderate.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Mania workhorse — especially mixed states and rapid cycling; now pregnancy-governed",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "Mania + trigeminal neuralgia + the great CYP450 inducer",
            },
            {
              drug: "Lamotrigine",
              value: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
            },
            {
              drug: "Lithium",
              value: "Anti-suicide + both-pole prophylaxis — the irreplaceable classic",
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
      description: "Valproate reaches peak plasma concentration and begins acting at its molecular target (GABA transaminase (inhibition → ↑GABA); voltage-gated Na+ channels; HDAC (inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and tremor, weight gain, gastrointestinal upset and nausea). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Mania: 3–7 days for early anti-manic effect (faster than lithium).)",
      title: "Therapeutic effect builds",
      description: "Mania: 3–7 days for early anti-manic effect (faster than lithium). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Valproate is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Valproate take to work?",
      answer: "Mania: 3–7 days for early anti-manic effect (faster than lithium).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Valproate?",
      answer: "The most frequently reported effects are: Sedation and tremor, Weight gain, Gastrointestinal upset and nausea, Hair loss (thinning), Thrombocytopenia. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Valproate suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Valproate habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Valproate exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Valproate during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Valproate may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), valproate monograph, p. 132",
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
        source: "FDA Prescribing Information for Depakote (divalproex) (Valproate)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for valproate — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Valproate",
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
      relationship: "primary",
    },
    {
      name: "Epilepsy — multiple seizure types",
      relationship: "primary",
    },
    {
      name: "Migraine prophylaxis",
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
      label: "Valproate",
      type: "drug",
      href: "/drugs/valproate",
      note: "The drug you're reading about",
    },
    {
      label: "Mood Stabiliser",
      type: "class",
      href: "#mechanism",
      note: "Mood Stabiliser — Anticonvulsant",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Glutamate",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA transaminase (inhibition → ↑GABA); voltage-gated Na+ channels; HDAC (inhibition)",
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
      note: "Key indication",
    },
    {
      label: "Epilepsy — multiple seizure types",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Hepatotoxicity",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Hyperammonaemic encephalopathy",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and tremor",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Valproate",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The broad-spectrum anticonvulsant mood stabiliser — the mania workhorse, now pregnancy-governed.",
    summary: "Valproate is a prescription medicine used to treat acute manic / mixed episodes of bipolar disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Valproate is a strong mood stabiliser used for mania and for preventing mood swings — especially the mixed, irritable kind that lithium handles poorly. It was first an epilepsy medicine. It needs blood tests (liver and blood counts), it commonly causes weight gain and tremor, and — critically for women — it can seriously harm an unborn baby, which is why strict pregnancy rules now surround it.",
    sideEffects: "The most common side effects are: sedation and tremor, weight gain, gastrointestinal upset and nausea, hair loss (thinning), thrombocytopenia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hepatotoxicity and Hyperammonaemic encephalopathy. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: lfts (baseline, then periodically during first 6 months); fbc (including platelets) (baseline, then periodically); valproate level (steady state and if toxicity/non-response suspected (target 50–125 µg/ml)). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Pregnancy — for bipolar indications (modern regulation), Active liver disease / significant hepatic dysfunction, Urea cycle disorders, Mitochondrial disease (POLG mutations). Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Lamotrigine, Aspirin and antiplatelets, Carbapenem antibiotics, Other hepatotoxins and alcohol. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Valparin Chrono",
        manufacturer: "Intas",
        strengths: "200, 300, 500 mg CR",
      },
      {
        name: "Encorate Chrono",
        manufacturer: "Sun",
        strengths: "200–500 mg",
      },
      {
        name: "Valproate generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "200–500 mg",
      },
    ],
    typicalDoses: "Mania 1000–2500 mg/day (oral load 25 mg/kg); maintenance 500–2000 mg.",
    prescribingScenarios: [
      "Acute mania admissions — the standard first-line.",
      "Rapid-cycling and mixed bipolar maintenance.",
      "Aggression in intellectual disability and dementia settings.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "LFTs, FBC, weight at baseline then periodically; pregnancy prevention counselling documented at every visit for women of childbearing age.",
    patientCounselling: [
      "Name the pregnancy risk explicitly and record the conversation.",
      "Report abdominal pain radiating to the back urgently (pancreatitis).",
      "Bruising easily deserves a blood count.",
      "Weight plan from day one.",
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
    note: "Generic sodium valproate widely available in Jan Aushadhi.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Mood Stabilisers",
    members: [
      {
        name: "Valproate",
        slug: "valproate",
        relationship: "This guide",
        distinguishing: "Mania workhorse — especially mixed states and rapid cycling; now pregnancy-governed",
      },
      {
        name: "Carbamazepine",
        slug: "carbamazepine",
        relationship: "Same class (Mood Stabiliser)",
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
      question: "Which molecular target does Valproate primarily act on?",
      options: [
        "GABA transaminase (inhibition → ↑GABA); voltage-gated Na+ channels; HDAC (inhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Valproate acts primarily at GABA transaminase (inhibition → ↑GABA); voltage-gated Na+ channels; HDAC (inhibition). Valproate increases GABA availability (inhibits GABA transaminase), blocks voltage-gated sodium channels, and inhibits histone deacetylase (HDAC) — a multi-mechanism profile spanning inhibition and gene expression.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Valproate?",
      options: ["Sedation and tremor", "Weight gain", "Gastrointestinal upset and nausea", "Hair loss (thinning)"],
      correctIndex: 0,
      explanation: "Sedation and tremor — Dose-related — the daily texture of valproate.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Valproate for acute mania (divalproex er)?",
      options: [
        "Level 50–125 µg/mL (typically 1000–2500 mg/day)",
        "Level/counts-limited",
        "Level 50–125 µg/mL (typically 1000–2500 mg/day) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For acute mania (divalproex er): start 25 mg/kg/day once daily (loading-style), target Level 50–125 µg/mL (typically 1000–2500 mg/day), maximum Level/counts-limited. Can start at full therapeutic dose — a major practical advantage",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Valproate in two sentences.",
      answer: "Valproate increases GABA availability (inhibits GABA transaminase), blocks voltage-gated sodium channels, and inhibits histone deacetylase (HDAC) — a multi-mechanism profile spanning inhibition and gene expression. Net effect: Anti-manic, mood-stabilising, anti-aggressive, and anticonvulsant — one of the fastest and broadest mood stabilisers available.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Valproate.",
      answer: "Acute manic / mixed episodes of bipolar disorder, Bipolar maintenance, Epilepsy — multiple seizure types, Migraine prophylaxis. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Valproate and how you would manage it.",
      answer: "Hepatotoxicity: The classic serious risk: monitor LFTs; highest risk in the young and polytherapied. Management: Stop if transaminases rise substantially with symptoms; check ammonia if encephalopathic.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Valproate require?",
      answer: "LFTs (Baseline, then periodically during first 6 months); FBC (including platelets) (Baseline, then periodically); Valproate level (Steady state and if toxicity/non-response suspected (target 50–125 µg/mL)); Weight (Baseline and every visit)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Valproate that separates safe prescribers from unsafe ones.",
      answer: "Mixed state or rapid cycling: valproate first.",
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
      checkpoint: "You now know what Valproate is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Valproate works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Valproate safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Valproate.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Valproate with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Valproate.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Mania: 3–7 days for early anti-manic effect (faster than lithium).",
      "Maintenance protection builds over weeks-months.",
    ],
    ifItWorks: [
      "Continue Valproate at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Valproate (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Valproate follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Common, dose-related — often useful in acute mania.",
    dosing: [
      {
        indication: "Acute mania (divalproex ER)",
        starting: "25 mg/kg/day once daily (loading-style)",
        titration: "Can start at full therapeutic dose — a major practical advantage",
        target: "Level 50–125 µg/mL (typically 1000–2500 mg/day)",
        max: "Level/counts-limited",
      },
      {
        indication: "Maintenance",
        starting: "500–1000 mg ER nightly",
        titration: "Adjust to response and tolerability",
        target: "500–2000 mg/day",
        max: "Level-limited",
      },
      {
        indication: "Aggression (adjunct)",
        starting: "250–500 mg twice daily",
        titration: "Titrate to effect",
        target: "500–1500 mg/day",
        max: "Tolerability-limited",
      },
    ],
    dosageForms: ["Divalproex ER tablets 250–500 mg", "DR capsules/sprinkles 125 mg", "Valproic acid syrup; IV formulation"],
    dosingTips: [
      "Oral loading (25 mg/kg) achieves rapid control in mania — the practical speed trick.",
      "Sprinkle formulation for swallowing problems and covert cheeking.",
      "Check the lamotrigine dose when starting valproate — always.",
      "Bedtime ER dosing for sedation and GI benefit.",
    ],
    overdose: [
      "Overdose with Valproate is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Valproate is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 9–16 hours (dose-dependent kinetics); ER allows twice-daily..",
      "Metabolism: Hepatic (mitochondrial beta-oxidation + CYP2C9/2C19 minor); inhibits its own metabolism at higher levels (dose-dependent)..",
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
      "Fast anti-manic onset; oral loading possible.",
      "Best agent for mixed states and rapid cycling.",
      "Aggression evidence.",
      "Not nephrotoxic (vs lithium) — the renal-impaired alternative.",
    ],
    potentialDisadvantages: ["Teratogenicity programme burden.", "Weight, PCOS, hair loss.", "Hepatic/haematological surveillance.", "Cognitive blunting at higher levels."],
    primaryTargetSymptoms: ["Manic and mixed episodes", "Rapid-cycling prophylaxis", "Aggression and impulsivity", "Epilepsy (original)"],
    pearls: [
      "Mixed state or rapid cycling: valproate first.",
      "Valproate doubles lamotrigine — the reflex check every prescriber must own.",
      "Confused on valproate with clean LFTs: ammonia.",
      "The pregnancy rules are regulations now — not optional counselling.",
      "Oral loading at 25 mg/kg is the fastest anti-manic door in the mood-stabiliser ward.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
