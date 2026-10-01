import type { Drug } from "../types";

/**
 * Topiramate — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), topiramate monograph (book p. 124)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const topiramate: Drug = {
  /* ---- Identity ---- */
  slug: "topiramate",
  genericName: "Topiramate",
  brandNames: ["Topamax", "Topamac / Topiramate (India)"],
  drugClass: "anticonvulsant",
  drugClassLabel: "Anticonvulsant",
  drugClassFullName: "Anticonvulsant (Multimodal)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Anticonvulsants", "Topiramate"],
  /* ---- Hero / summary ---- */
  tagline: "The multi-mechanism weight-losing anticonvulsant — appetite suppression as a mood-stabiliser side-effect.",
  summary: "Topiramate is the multi-mechanism anticonvulsant (sodium + calcium channels, AMPA/kainate antagonism, GABA potentiation) used in psychiatry as migraine prophylaxis, binge-eating/bulimia adjunct (its appetite-suppressing signature), alcohol craving, and weight-protective mood augmentation. Cognitive blunting ('dopamax') and word-finding difficulty are its texture; weight LOSS and paraesthesia are its signatures; renal stones, oligohidrosis, and teratogenicity are its cautions.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Topiramate — from its molecular target (Voltage-gated Na+ channels; high-voltage Ca2+ channels; AMPA/kainate (antagonism); GABA-A (potentiation); carbonic anhydrase (weak inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Topiramate.",
    "Predict the common and serious side effects of Topiramate from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Topiramate.",
    "Compare Topiramate with other anticonvulsants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Topiramate acts at multiple targets — sodium and calcium channels, AMPA/kainate glutamate receptors, and GABA potentiation — the anticonvulsant with weight-losing pharmacology.",
    molecularTarget: "Voltage-gated Na+ channels; high-voltage Ca2+ channels; AMPA/kainate (antagonism); GABA-A (potentiation); carbonic anhydrase (weak inhibition)",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Topiramate acts at multiple targets — sodium and calcium channels, AMPA/kainate glutamate receptors, and GABA potentiation — the anticonvulsant with weight-losing pharmacology.",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 21-23 hours. — see mechanism and prescriber sections.",
    halfLife: "21-23 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Topiramate",
        sublabel: "Anticonvulsant",
        variant: "inhibit",
      },
      {
        id: "na",
        label: "Voltage-gated Na⁺ / Ca²⁺ channels",
        sublabel: "Neuronal firing",
        variant: "target",
      },
      {
        id: "neuron",
        label: "Hyperexcitable neurons",
        sublabel: "Pathological firing",
        variant: "input",
      },
      {
        id: "effect",
        label: "Stabilised firing",
        sublabel: "Seizure / pain / mood instability reduced",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "na",
        label: "modulates",
        type: "inhibit",
      },
      {
        from: "neuron",
        to: "na",
        label: "fires through",
      },
      {
        from: "na",
        to: "effect",
        label: "stabilised",
      },
    ],
    caption: "Reducing pathological neuronal firing — the shared mechanistic logic of anticonvulsants across epilepsy, neuropathic pain, and mood destabilisation.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["GABA", "Glutamate"],
  receptors: ["Voltage-gated Na+ channels", "AMPA/kainate receptors", "GABA-A (potentiation)", "Carbonic anhydrase (weak)"],
  brainRegionIds: ["prefrontal-cortex", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Migraine prophylaxis",
      status: "fda-approved",
      description: "The psychiatric-adjacent flagship indication.",
    },
    {
      name: "Epilepsy (focal and generalised)",
      status: "fda-approved",
      description: "The anticonvulsant base.",
    },
    {
      name: "Binge eating disorder / bulimia (adjunct)",
      status: "off-label",
      description: "The appetite-craving signature use.",
    },
    {
      name: "Alcohol dependence (craving adjunct)",
      status: "off-label",
      description: "The craving-reduction evidence base.",
    },
    {
      name: "Bipolar disorder (adjunct, weight-protective)",
      status: "off-label",
      description: "Augmentation where weight gain from other agents must be offset.",
    },
    {
      name: "Weight-loss augmentation (with phentermine — Qsymia)",
      status: "guideline",
      description: "The combination-product role.",
    },
    {
      name: "Essential tremor (adjunct)",
      status: "off-label",
      description: "Selected use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Topiramate must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Cognitive blunting and word-finding difficulty",
      frequency: "very-common",
      severity: "moderate",
      description: "The 'Dopamax' signature — slowed thinking, word-loss, mental fog; dose- and titration-speed-dependent.",
      management: "Slow titration; dose reduction; counsel explicitly.",
    },
    {
      name: "Paraesthesia (tingling fingers/toes)",
      frequency: "very-common",
      severity: "mild",
      description: "Carbonic-anhydrase inhibition — the signature sensory effect, usually benign.",
      management: "Reassurance; potassium check if severe.",
    },
    {
      name: "Appetite suppression and weight loss",
      frequency: "common",
      severity: "moderate",
      description: "The therapeutic-adjacent signature — often the reason it is chosen.",
      management: "Monitor weight; therapeutic in binge/craving contexts.",
    },
    {
      name: "Sedation and fatigue",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related.",
      management: "Night dosing.",
    },
    {
      name: "Taste disturbance and nausea",
      frequency: "common",
      severity: "mild",
      description: "Class effects.",
      management: "With food.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Nephrolithiasis (kidney stones)",
      frequency: "uncommon",
      severity: "severe",
      description: "Carbonic-anhydrase-related stone risk (~1-1.5%).",
      management: "Hydration counselling; avoid with other stone-risk drugs.",
    },
    {
      name: "Oligohidrosis and hyperthermia (children)",
      frequency: "uncommon",
      severity: "severe",
      description: "Sweating reduction — heat-illness risk in children.",
      management: "Heat counselling in paediatric use.",
    },
    {
      name: "Acute myopia and angle-closure glaucoma",
      frequency: "rare",
      severity: "severe",
      description: "The ocular emergency — eye pain/blurred vision warrants urgent review.",
      management: "Stop; urgent ophthalmology.",
    },
    {
      name: "Metabolic acidosis",
      frequency: "uncommon",
      severity: "moderate",
      description: "Carbonic anhydrase effect — check bicarbonate in long use.",
      management: "Periodic electrolytes.",
    },
    {
      name: "Teratogenicity (oral clefts)",
      frequency: "uncommon",
      severity: "severe",
      description: "Topiramate raises oral-cleft risk ~3× — pregnancy planning and folate 5 mg discussions are mandatory.",
      management: "Contraception counselling; alternatives in pregnancy planning.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Weight",
      frequency: "Every visit",
      rationale: "The signature effect (loss) tracked as much for harm as benefit.",
    },
    {
      parameter: "Cognitive function review",
      frequency: "Every visit",
      rationale: "The Dopamax dose-limit.",
    },
    {
      parameter: "Bicarbonate (long use)",
      frequency: "Periodically",
      rationale: "Metabolic acidosis.",
    },
    {
      parameter: "Pregnancy planning/folate counselling",
      frequency: "At every review of women of childbearing age",
      rationale: "The teratogenicity discipline.",
    },
  ],
  interactions: [
    {
      drug: "Other carbonic-anhydrase inhibitors (zonisamide, acetazolamide)",
      severity: "major",
      mechanism: "Additive acidosis/stone risk.",
      action: "Avoid.",
    },
    {
      drug: "Topiramate raises phenytoin/valproate levels; OCs may drop",
      severity: "major",
      mechanism: "Enzyme effects both ways; contraceptive efficacy reduction reported.",
      action: "Monitor levels; alternative contraception.",
    },
    {
      drug: "CNS depressants and alcohol",
      severity: "moderate",
      mechanism: "Additive cognitive/sedative blunting.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "Topiramate raises oral-cleft risk (~3× background) — avoid in pregnancy and pregnancy-planning contexts where alternatives exist; high-dose folate and specialist decisions if unavoidable.",
    lactation: "Excreted in milk — infant sedation/weight effects; caution.",
  },
  renalAdjustment: "Halve dose in significant renal impairment; stone-risk hydration.",
  hepaticAdjustment: "No significant hepatic metabolism concerns.",
  /* ---- Education ---- */
  patientExplanation: "Topiramate is an epilepsy-and-migraine medicine with several actions on nerve signalling. In psychiatry it is valued for reducing appetite, binge urges, and cravings while stabilising nerves — and its best-known effects are tingling fingers and word-finding difficulty ('the words go missing'), which usually improve with a lower dose or slower build-up. It can cause kidney stones, so drink plenty of water, and it can harm an unborn baby, so contraception matters while taking it.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Topiramate builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Dopamax: the cognitive tax is the dose-limit — word-finding loss in conversation is the patient's report to ask for at every review.",
    "The weight-losers club: topiramate and zonisamide — the anticonvulsants that reverse the metabolic tide; the reason they anchor binge/craving prescriptions.",
    "The tingling is harmless: carbonic-anhydrase paraesthesia alarms patients more than it harms them — pre-counselling saves calls.",
    "The stone and sweat cautions: hydration counselling and paediatric heat awareness are the practical safety layer.",
    "The pregnancy paragraph: oral-cleft risk makes contraception-and-folate planning a prescribing condition for women of childbearing age.",
    "Slow titration is pharmacology: the cognitive window narrows with every rushed week.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Topiramate: Topiramate acts at multiple targets — sodium and calcium channels, AMPA/kainate glutamate receptors, and GABA potentiation — the anticonvulsant with weight-losing pharmacology.",
        "Uses of Topiramate: Migraine prophylaxis; Epilepsy (focal and generalised); Binge eating disorder / bulimia (adjunct); Alcohol dependence (craving adjunct)",
        "Mechanism: MULTIPLE — Na+/Ca2+ channels, AMPA/kainate antagonism, GABA potentiation, weak carbonic anhydrase.",
        "Approved: migraine prophylaxis + epilepsy.",
      ],
      practical: [
        "Prescribe Topiramate for migraine prophylaxis with dose, timing, and duration.",
        "Outline the monitoring plan: Weight (Every visit); Cognitive function review (Every visit); Bicarbonate (long use) (Periodically)",
      ],
      longAnswer: [
        "Topiramate: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: MULTIPLE — Na+/Ca2+ channels, AMPA/kainate antagonism, GABA potentiation, weak carbonic anhydrase.",
        "Approved: migraine prophylaxis + epilepsy.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: MULTIPLE — Na+/Ca2+ channels, AMPA/kainate antagonism, GABA potentiation, weak carbonic anhydrase.",
        "Approved: migraine prophylaxis + epilepsy.",
        "Psychiatric signatures: weight LOSS, binge/craving reduction, cognitive blunting (Dopamax).",
        "Caution set: kidney stones, oligohidrosis (children), acute myopia, metabolic acidosis, oral-cleft teratogenicity.",
        "Slow titration 25 mg/week; 50-200 mg psychiatric ranges.",
        "The phentermine+topiramate weight product is the legal descendant of its appetite effect.",
      ],
      pyqConcepts: [
        "Mechanism/target of Topiramate",
        "Key adverse effect: Nephrolithiasis (kidney stones)",
        "Dosing and titration of Topiramate",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Topiramate develops nephrolithiasis (kidney stones) — next best step?",
        "When to choose Topiramate over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Voltage-gated Na+ channels; high-voltage Ca2+ channels; AMPA/kainate (antagonism); GABA-A (potentiation); carbonic anhydrase (weak inhibition)",
        "Most common side effects: Cognitive blunting and word-finding difficulty, Paraesthesia (tingling fingers/toes), Appetite suppression and weight loss",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Dopamax: the cognitive tax is the dose-limit — word-finding loss in conversation is the patient's report to ask for at every review.",
        "The weight-losers club: topiramate and zonisamide — the anticonvulsants that reverse the metabolic tide; the reason they anchor binge/craving prescriptions.",
        "The tingling is harmless: carbonic-anhydrase paraesthesia alarms patients more than it harms them — pre-counselling saves calls.",
        "The stone and sweat cautions: hydration counselling and paediatric heat awareness are the practical safety layer.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: MULTIPLE — Na+/Ca2+ channels, AMPA/kainate antagonism, GABA potentiation, weak carbonic anhydrase.",
    "Approved: migraine prophylaxis + epilepsy.",
    "Psychiatric signatures: weight LOSS, binge/craving reduction, cognitive blunting (Dopamax).",
    "Caution set: kidney stones, oligohidrosis (children), acute myopia, metabolic acidosis, oral-cleft teratogenicity.",
    "Slow titration 25 mg/week; 50-200 mg psychiatric ranges.",
    "The phentermine+topiramate weight product is the legal descendant of its appetite effect.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — migraine prophylaxis",
      presentation: "A patient presenting with migraine prophylaxis, started on Topiramate.",
      history: "A adult patient presents with a migraine prophylaxis picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with migraine prophylaxis; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Migraine prophylaxis. Differentials are considered and excluded clinically.",
      rationale: "Topiramate is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Anticonvulsant) with strong evidence in this condition.",
      management: "Started at 25 mg at night, titrated to 50-100 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Topiramate takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Anticonvulsant comparison — choosing within the class",
      primaryDrug: "Topiramate",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Voltage-gated Na+ channels; high-voltage Ca2+ channels; AMPA/kainate (antagonism); GABA-A (potentiation); carbonic anhydrase (weak inhibition)",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "See full guide",
            },
            {
              drug: "Pregabalin",
              value: "See full guide",
            },
            {
              drug: "Levetiracetam",
              value: "See full guide",
            },
            {
              drug: "Tiagabine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "21-23 hours.",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "—",
            },
            {
              drug: "Pregabalin",
              value: "—",
            },
            {
              drug: "Levetiracetam",
              value: "—",
            },
            {
              drug: "Tiagabine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "Agent-specific.",
            },
            {
              drug: "Pregabalin",
              value: "Agent-specific.",
            },
            {
              drug: "Levetiracetam",
              value: "Agent-specific.",
            },
            {
              drug: "Tiagabine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "Agent-specific.",
            },
            {
              drug: "Pregabalin",
              value: "Agent-specific.",
            },
            {
              drug: "Levetiracetam",
              value: "Agent-specific.",
            },
            {
              drug: "Tiagabine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The weight-losing multi-mechanism stabiliser — craving and appetite",
          comparisons: [
            {
              drug: "Gabapentin",
              value: "The interaction-clean pain-augmentation agent — anxiety and craving off-label",
            },
            {
              drug: "Pregabalin",
              value: "The GAD-approved gabapentinoid — pain, fibromyalgia, anxiety",
            },
            {
              drug: "Levetiracetam",
              value: "The behaviourally-noisy SV2A anticonvulsant",
            },
            {
              drug: "Tiagabine",
              value: "The GABA-reuptake blocker — mechanism elegance, clinical footnote",
            },
          ],
        },
      ],
      takeaway: "All anticonvulsants share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Topiramate reaches peak plasma concentration and begins acting at its molecular target (Voltage-gated Na+ channels; high-voltage Ca2+ channels; AMPA/kainate (antagonism); GABA-A (potentiation); carbonic anhydrase (weak inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (cognitive blunting and word-finding difficulty, paraesthesia (tingling fingers/toes), appetite suppression and weight loss). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Migraine benefit 4-8 weeks; craving effects over weeks of titration.)",
      title: "Therapeutic effect builds",
      description: "Migraine benefit 4-8 weeks; craving effects over weeks of titration. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Topiramate is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Topiramate take to work?",
      answer: "Migraine benefit 4-8 weeks; craving effects over weeks of titration.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Topiramate?",
      answer: "The most frequently reported effects are: Cognitive blunting and word-finding difficulty, Paraesthesia (tingling fingers/toes), Appetite suppression and weight loss, Sedation and fatigue, Taste disturbance and nausea. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Topiramate suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Topiramate habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Topiramate exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Topiramate during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Topiramate may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG185 (Bipolar Disorder); NICE CG173 (Neuropathic Pain)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), topiramate monograph, p. 124",
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
        source: "FDA Prescribing Information for Topamax (Topiramate)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for topiramate — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Topiramate",
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
      name: "Gabapentin",
      slug: "gabapentin",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Pregabalin",
      slug: "pregabalin",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Levetiracetam",
      slug: "levetiracetam",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Tiagabine",
      slug: "tiagabine",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Zonisamide",
      slug: "zonisamide",
      drugClass: "Anticonvulsant",
      relationship: "Same class (Anticonvulsant)",
    },
    {
      name: "Valproate",
      slug: "valproate",
      drugClass: "Mood Stabiliser",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Migraine prophylaxis",
      relationship: "primary",
    },
    {
      name: "Epilepsy (focal and generalised)",
      relationship: "primary",
    },
    {
      name: "Binge eating disorder / bulimia (adjunct)",
      relationship: "off-label",
    },
    {
      name: "Alcohol dependence (craving adjunct)",
      relationship: "off-label",
    },
    {
      name: "Bipolar disorder (adjunct, weight-protective)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Topiramate",
      type: "drug",
      href: "/drugs/topiramate",
      note: "The drug you're reading about",
    },
    {
      label: "Anticonvulsant",
      type: "class",
      href: "#mechanism",
      note: "Anticonvulsant (Multimodal)",
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
      label: "Voltage-gated Na+ channels; high-voltage Ca2+ channels; AMPA/kainate (antagonism); GABA-A (potentiation); carbonic anhydrase (weak inhibition)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Migraine prophylaxis",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Epilepsy (focal and generalised)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Binge eating disorder / bulimia (adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Nephrolithiasis (kidney stones)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Oligohidrosis and hyperthermia (children)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Cognitive blunting and word-finding difficulty",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Topiramate",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The multi-mechanism weight-losing anticonvulsant — appetite suppression as a mood-stabiliser side-effect.",
    summary: "Topiramate is a prescription medicine used to treat migraine prophylaxis. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Topiramate is an epilepsy-and-migraine medicine with several actions on nerve signalling. In psychiatry it is valued for reducing appetite, binge urges, and cravings while stabilising nerves — and its best-known effects are tingling fingers and word-finding difficulty ('the words go missing'), which usually improve with a lower dose or slower build-up. It can cause kidney stones, so drink plenty of water, and it can harm an unborn baby, so contraception matters while taking it.",
    sideEffects: "The most common side effects are: cognitive blunting and word-finding difficulty, paraesthesia (tingling fingers/toes), appetite suppression and weight loss, sedation and fatigue, taste disturbance and nausea. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Nephrolithiasis (kidney stones) and Oligohidrosis and hyperthermia (children). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight (every visit); cognitive function review (every visit); bicarbonate (long use) (periodically). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other carbonic-anhydrase inhibitors (zonisamide, acetazolamide), Topiramate raises phenytoin/valproate levels; OCs may drop, CNS depressants and alcohol. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Topamac",
        manufacturer: "Johnson&Johnson/Cipla network",
        strengths: "25-200 mg",
      },
      {
        name: "Topiramate generic",
        manufacturer: "multiple",
        strengths: "25-200 mg",
      },
    ],
    typicalDoses: "25 mg nocte → 50-200 mg/day.",
    prescribingScenarios: [
      "Binge-eating and alcohol-craving augmentation.",
      "Migraine with psychiatric comorbidity.",
      "Weight-protective augmentation in bipolar care.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Weight; word-finding review; bicarbonate 6-12 monthly.",
    patientCounselling: [
      "Slow build-up; report word-finding trouble.",
      "Drink plenty of water.",
      "Effective contraception while taking it.",
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
    familyName: "Anticonvulsants",
    members: [
      {
        name: "Topiramate",
        slug: "topiramate",
        relationship: "This guide",
        distinguishing: "The weight-losing multi-mechanism stabiliser — craving and appetite",
      },
      {
        name: "Gabapentin",
        slug: "gabapentin",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The interaction-clean pain-augmentation agent — anxiety and craving off-label",
      },
      {
        name: "Pregabalin",
        slug: "pregabalin",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The GAD-approved gabapentinoid — pain, fibromyalgia, anxiety",
      },
      {
        name: "Levetiracetam",
        slug: "levetiracetam",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The behaviourally-noisy SV2A anticonvulsant",
      },
      {
        name: "Tiagabine",
        slug: "tiagabine",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The GABA-reuptake blocker — mechanism elegance, clinical footnote",
      },
      {
        name: "Zonisamide",
        slug: "zonisamide",
        relationship: "Same class (Anticonvulsant)",
        distinguishing: "The second weight-loser — topiramate's sibling",
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
      question: "Which molecular target does Topiramate primarily act on?",
      options: [
        "Voltage-gated Na+ channels; high-voltage Ca2+ channels; AMPA/kainate (antagonism); GABA-A (potentiation); carbonic anhydrase (weak inhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Topiramate acts primarily at Voltage-gated Na+ channels; high-voltage Ca2+ channels; AMPA/kainate (antagonism); GABA-A (potentiation); carbonic anhydrase (weak inhibition). Topiramate acts at multiple targets — sodium and calcium channels, AMPA/kainate glutamate receptors, and GABA potentiation — the anticonvulsant with weight-losing pharmacology.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Topiramate?",
      options: [
        "Cognitive blunting and word-finding difficulty",
        "Paraesthesia (tingling fingers/toes)",
        "Appetite suppression and weight loss",
        "Sedation and fatigue",
      ],
      correctIndex: 0,
      explanation: "Cognitive blunting and word-finding difficulty — The 'Dopamax' signature — slowed thinking, word-loss, mental fog; dose- and titration-speed-dependent.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Topiramate for migraine prophylaxis?",
      options: ["50-100 mg/day", "200 mg/day", "50-100 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For migraine prophylaxis: start 25 mg at night, target 50-100 mg/day, maximum 200 mg/day. Increase by 25 mg weekly to 50-100 mg/day",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Topiramate in two sentences.",
      answer: "Topiramate acts at multiple targets — sodium and calcium channels, AMPA/kainate glutamate receptors, and GABA potentiation — the anticonvulsant with weight-losing pharmacology. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Topiramate.",
      answer: "Migraine prophylaxis, Epilepsy (focal and generalised), Binge eating disorder / bulimia (adjunct), Alcohol dependence (craving adjunct). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Topiramate and how you would manage it.",
      answer: "Nephrolithiasis (kidney stones): Carbonic-anhydrase-related stone risk (~1-1.5%). Management: Hydration counselling; avoid with other stone-risk drugs.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Topiramate require?",
      answer: "Weight (Every visit); Cognitive function review (Every visit); Bicarbonate (long use) (Periodically); Pregnancy planning/folate counselling (At every review of women of childbearing age)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Topiramate that separates safe prescribers from unsafe ones.",
      answer: "Dopamax: the cognitive tax is the dose-limit — word-finding loss in conversation is the patient's report to ask for at every review.",
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
      checkpoint: "You now know what Topiramate is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Topiramate works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Topiramate safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Topiramate.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Topiramate with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Topiramate.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Migraine benefit 4-8 weeks; craving effects over weeks of titration.",
    ],
    ifItWorks: [
      "Continue Topiramate at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Topiramate (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Topiramate follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Agent-specific.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Migraine prophylaxis",
        starting: "25 mg at night",
        titration: "Increase by 25 mg weekly to 50-100 mg/day",
        target: "50-100 mg/day",
        max: "200 mg/day",
      },
      {
        indication: "Binge/craving augmentation",
        starting: "25 mg at night",
        titration: "Increase by 25 mg weekly",
        target: "100-200 mg/day",
        max: "300 mg/day",
      },
      {
        indication: "Epilepsy (adjunct)",
        starting: "25-50 mg/day",
        titration: "Weekly increases",
        target: "200-400 mg/day",
        max: "400 mg/day",
      },
    ],
    dosageForms: ["Tablets 25, 50, 100, 200 mg", "Capsules (sprinkle) 15, 25 mg"],
    dosingTips: [
      "25 mg/week titration always.",
      "Ask about word-finding at every review.",
      "Hydration counselling for stones.",
      "Folate 5 mg + contraception discussion for women who may conceive.",
    ],
    overdose: [
      "Overdose with Topiramate is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Topiramate is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 21-23 hours..", "Metabolism: Hepatic.."],
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
      "Weight-losing (unique among mood agents with zonisamide).",
      "Binge/craving efficacy.",
      "Migraine cover alongside.",
    ],
    potentialDisadvantages: [
      "Cognitive blunting (dose-limiting).",
      "Teratogenicity (oral clefts).",
      "Stones, acidosis, ocular emergency cautions.",
      "Slow titration.",
    ],
    primaryTargetSymptoms: ["Binge eating and cravings", "Migraine prophylaxis", "Weight-protective mood augmentation", "Alcohol craving (off-label)"],
    pearls: [
      "Dopamax: the cognitive tax is the dose-limit — word-finding loss in conversation is the patient's report to ask for at every review.",
      "The weight-losers club: topiramate and zonisamide — the anticonvulsants that reverse the metabolic tide; the reason they anchor binge/craving prescriptions.",
      "The tingling is harmless: carbonic-anhydrase paraesthesia alarms patients more than it harms them — pre-counselling saves calls.",
      "The stone and sweat cautions: hydration counselling and paediatric heat awareness are the practical safety layer.",
      "The pregnancy paragraph: oral-cleft risk makes contraception-and-folate planning a prescribing condition for women of childbearing age.",
      "Slow titration is pharmacology: the cognitive window narrows with every rushed week.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
