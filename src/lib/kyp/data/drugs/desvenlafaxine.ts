import type { Drug } from "../types";

/**
 * Desvenlafaxine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), desvenlafaxine monograph (book p. 32)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const desvenlafaxine: Drug = {
  /* ---- Identity ---- */
  slug: "desvenlafaxine",
  genericName: "Desvenlafaxine",
  brandNames: ["Pristiq", "Desvenlafaxine (generic)"],
  drugClass: "snri",
  drugClassLabel: "SNRI",
  drugClassFullName: "Serotonin-Norepinephrine Reuptake Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SNRIs", "Desvenlafaxine"],
  /* ---- Hero / summary ---- */
  tagline: "Venlafaxine's active metabolite, packaged — SNRI efficacy with simpler pharmacokinetics.",
  summary: "Desvenlafaxine is the active metabolite of venlafaxine (O-desmethylvenlafaxine) marketed directly: the same SNRI mechanism — SERT and NET inhibition — with predictable renal-excreted pharmacokinetics, minimal CYP2D6 dependence, and a low starting dose that reaches therapeutic effect quickly. Approved for MDD, with off-label use mirroring venlafaxine's.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Desvenlafaxine — from its molecular target (SERT and NET (inhibition) — the SNRI mechanism) to clinical effect.",
    "List the FDA-approved and off-label uses of Desvenlafaxine.",
    "Predict the common and serious side effects of Desvenlafaxine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Desvenlafaxine.",
    "Compare Desvenlafaxine with other snris and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Desvenlafaxine inhibits serotonin and norepinephrine reuptake — venlafaxine's active metabolite delivered directly.",
    molecularTarget: "SERT and NET (inhibition) — the SNRI mechanism",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Desvenlafaxine inhibits serotonin and norepinephrine reuptake — venlafaxine's active metabolite delivered directly.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 11 hours. — see mechanism and prescriber sections.",
    halfLife: "About 11 hours.",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Desvenlafaxine",
        sublabel: "Antidepressant",
        variant: "inhibit",
      },
      {
        id: "trans",
        label: "SERT + NET",
        sublabel: "Dual reuptake pumps blocked",
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
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine (NE)"],
  receptors: ["SERT (inhibited)", "NET (inhibited)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder",
      status: "fda-approved",
      description: "50 mg starting dose IS therapeutic — a rare 'start at target' antidepressant.",
    },
    {
      name: "Anxiety disorders (GAD, panic, social anxiety)",
      status: "off-label",
      description: "SNRI-class off-label breadth.",
    },
    {
      name: "Hot flushes (menopause)",
      status: "off-label",
      description: "SNRI-class non-hormonal flush control.",
    },
    {
      name: "Neuropathic pain (adjunct)",
      status: "off-label",
      description: "SNRI-class analgesia.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Desvenlafaxine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Serotonin syndrome.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Suicidal thoughts and behaviours in children, adolescents, and young adults",
      text: "Antidepressants increased the risk of suicidal thinking and behaviour in short-term studies in children, adolescents, and young adults with MDD and other psychiatric disorders. All patients should be monitored closely for clinical worsening, suicidality, and unusual behaviour changes, especially in the first 1-2 months.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description: "The most common SNRI effect.",
      management: "With food; usually transient.",
    },
    {
      name: "Sweating",
      frequency: "common",
      severity: "mild",
      description: "SNRI signature.",
      management: "Reassurance.",
    },
    {
      name: "Blood pressure rise (dose-related)",
      frequency: "uncommon",
      severity: "moderate",
      description: "NET-driven noradrenergic effect at higher doses.",
      management: "BP monitoring above 100 mg.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "common",
      severity: "moderate",
      description: "SNRI-class effect.",
      management: "Counsel; dose review; adjunct strategies.",
    },
    {
      name: "Dry mouth and constipation",
      frequency: "common",
      severity: "mild",
      description: "Noradrenergic/anticholinergic-adjacent effects.",
      management: "Manage symptomatically.",
    },
    {
      name: "Insomnia or sedation",
      frequency: "common",
      severity: "mild",
      description: "Agent-variable.",
      management: "Dose timing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Sustained hypertension",
      frequency: "uncommon",
      severity: "severe",
      description: "Dose-related BP elevation.",
      management: "Monitor; dose reduction; treat if sustained.",
    },
    {
      name: "Serotonin syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "SNRI-class risk with MAOIs and serotonergics.",
      management: "Washout rules; counselling.",
    },
    {
      name: "Hyponatraemia (SIADH, elderly)",
      frequency: "uncommon",
      severity: "severe",
      description: "SSRI/SNRI-class effect.",
      management: "Sodium if confused in the elderly.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "common",
      severity: "moderate",
      description: "Short half-life — the SNRI FINISH syndrome.",
      management: "Taper over weeks; never abrupt.",
    },
    {
      name: "Bleeding risk (platelet serotonin)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Class effect with NSAIDs/anticoagulants.",
      management: "Counsel.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Blood pressure",
      frequency: "Baseline and after dose increases",
      rationale: "SNRI dose-related hypertension.",
    },
    {
      parameter: "Mood and suicidality (early weeks)",
      frequency: "Weeks 1-4",
      rationale: "Class warning.",
    },
    {
      parameter: "Sodium (elderly)",
      frequency: "If unwell/confused",
      rationale: "SIADH class risk.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Serotonin syndrome.",
      action: "14-day washout.",
    },
    {
      drug: "Serotonergic drugs and triptans",
      severity: "major",
      mechanism: "Additive serotonergic load.",
      action: "Counsel.",
    },
    {
      drug: "NSAIDs and anticoagulants",
      severity: "moderate",
      mechanism: "Bleeding risk.",
      action: "Counsel; PPI if needed.",
    },
    {
      drug: "Minimal CYP interaction",
      severity: "minor",
      mechanism: "The pharmacokinetic selling point.",
      action: "—",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "SNRI-class pregnancy considerations: no clear teratogenic signal; third-trimester neonatal adaptation syndrome (irritability, poor feeding). Decisions individualised with obstetrics.",
    lactation: "Excreted in milk; infant serotonergic/adaptation monitoring.",
  },
  renalAdjustment: "Halve dose at CrCl 30-50; avoid or further reduce below 30.",
  hepaticAdjustment: "No adjustment for mild-moderate; reduce in severe.",
  /* ---- Education ---- */
  patientExplanation: "Desvenlafaxine is a modern SNRI antidepressant — it raises two brain chemicals (serotonin and noradrenaline) involved in mood. Its practical advantage is that the starting dose is usually the full treatment dose. Common effects are nausea, sweating, and — like others in its class — it must not be stopped suddenly, and blood pressure is checked at higher doses.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Desvenlafaxine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The 50 mg miracle of prescribing simplicity: unlike most antidepressants, the starting dose IS the therapeutic dose for most patients.",
    "2D6 independence: desvenlafaxine skips venlafaxine's CYP2D6 activation step — poor metabolisers and fluoxetine co-prescription stop mattering.",
    "Renal excretion dominant — the rare antidepressant where the kidney, not the liver, is the dosing organ.",
    "The SNRI dose-BP law applies: above 150 mg-equivalents, blood pressure climbs — monitor.",
    "Discontinuation syndrome is real (short half-life) — taper, don't ambush.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Desvenlafaxine: Desvenlafaxine inhibits serotonin and norepinephrine reuptake — venlafaxine's active metabolite delivered directly.",
        "Uses of Desvenlafaxine: Major depressive disorder; Anxiety disorders (GAD, panic, social anxiety); Hot flushes (menopause); Neuropathic pain (adjunct)",
        "Mechanism: SERT + NET inhibition — venlafaxine's ACTIVE METABOLITE marketed directly.",
        "50 mg starting = therapeutic dose (the simplicity advantage).",
      ],
      practical: [
        "Prescribe Desvenlafaxine for major depressive disorder with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure (Baseline and after dose increases); Mood and suicidality (early weeks) (Weeks 1-4); Sodium (elderly) (If unwell/confused)",
      ],
      longAnswer: [
        "Desvenlafaxine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: SERT + NET inhibition — venlafaxine's ACTIVE METABOLITE marketed directly.",
        "50 mg starting = therapeutic dose (the simplicity advantage).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: SERT + NET inhibition — venlafaxine's ACTIVE METABOLITE marketed directly.",
        "50 mg starting = therapeutic dose (the simplicity advantage).",
        "Minimal CYP2D6 involvement; renal excretion dominant.",
        "MDD approved; SNRI-class off-label breadth (anxiety, flushes, pain).",
        "Dose-related hypertension above 100 mg.",
        "Discontinuation syndrome — taper always.",
      ],
      pyqConcepts: [
        "Mechanism/target of Desvenlafaxine",
        "Key adverse effect: Sustained hypertension",
        "Dosing and titration of Desvenlafaxine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Desvenlafaxine develops sustained hypertension — next best step?",
        "When to choose Desvenlafaxine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: SERT and NET (inhibition) — the SNRI mechanism",
        "Most common side effects: Nausea, Sweating, Blood pressure rise (dose-related)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The 50 mg miracle of prescribing simplicity: unlike most antidepressants, the starting dose IS the therapeutic dose for most patients.",
        "2D6 independence: desvenlafaxine skips venlafaxine's CYP2D6 activation step — poor metabolisers and fluoxetine co-prescription stop mattering.",
        "Renal excretion dominant — the rare antidepressant where the kidney, not the liver, is the dosing organ.",
        "The SNRI dose-BP law applies: above 150 mg-equivalents, blood pressure climbs — monitor.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: SERT + NET inhibition — venlafaxine's ACTIVE METABOLITE marketed directly.",
    "50 mg starting = therapeutic dose (the simplicity advantage).",
    "Minimal CYP2D6 involvement; renal excretion dominant.",
    "MDD approved; SNRI-class off-label breadth (anxiety, flushes, pain).",
    "Dose-related hypertension above 100 mg.",
    "Discontinuation syndrome — taper always.",
    "Class suicidality warning applies.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder",
      presentation: "A patient presenting with major depressive disorder, started on Desvenlafaxine.",
      history: "A adult patient presents with a major depressive disorder picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder. Differentials are considered and excluded clinically.",
      rationale: "Desvenlafaxine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (SNRI) with strong evidence in this condition.",
      management: "Started at 50 mg once daily, titrated to 50 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Desvenlafaxine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "SNRI comparison — choosing within the class",
      primaryDrug: "Desvenlafaxine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "SERT and NET (inhibition) — the SNRI mechanism",
          comparisons: [
            {
              drug: "Levomilnacipran",
              value: "See full guide",
            },
            {
              drug: "Milnacipran",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 11 hours.",
          comparisons: [
            {
              drug: "Levomilnacipran",
              value: "—",
            },
            {
              drug: "Milnacipran",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
          comparisons: [
            {
              drug: "Levomilnacipran",
              value: "Weight neutral to mild gain (agent-specific).",
            },
            {
              drug: "Milnacipran",
              value: "Weight neutral to mild gain (agent-specific).",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Levomilnacipran",
              value: "Agent-specific.",
            },
            {
              drug: "Milnacipran",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The simplified SNRI — venlafaxine's metabolite packaged",
          comparisons: [
            {
              drug: "Levomilnacipran",
              value: "The NE-tilted SNRI — for the anergic depression phenotype",
            },
            {
              drug: "Milnacipran",
              value: "The fibromyalgia SNRI — pain + fatigue coverage",
            },
          ],
        },
      ],
      takeaway: "All snris share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Desvenlafaxine reaches peak plasma concentration and begins acting at its molecular target (SERT and NET (inhibition) — the SNRI mechanism). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea, sweating, blood pressure rise (dose-related)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Antidepressant response 2-4 weeks at therapeutic dose.)",
      title: "Therapeutic effect builds",
      description: "Antidepressant response 2-4 weeks at therapeutic dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Desvenlafaxine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Desvenlafaxine take to work?",
      answer: "Antidepressant response 2-4 weeks at therapeutic dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Desvenlafaxine?",
      answer: "The most frequently reported effects are: Nausea, Sweating, Blood pressure rise (dose-related), Sexual dysfunction, Dry mouth and constipation. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Desvenlafaxine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Desvenlafaxine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Desvenlafaxine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Desvenlafaxine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Desvenlafaxine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE Clinical Guideline CG91 (Depression in adults); APA MDD Guideline",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), desvenlafaxine monograph, p. 32",
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
        source: "FDA Prescribing Information for Pristiq (Desvenlafaxine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for desvenlafaxine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Desvenlafaxine",
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
      name: "Levomilnacipran",
      slug: "levomilnacipran",
      drugClass: "SNRI",
      relationship: "Same class (SNRI)",
    },
    {
      name: "Milnacipran",
      slug: "milnacipran",
      drugClass: "SNRI",
      relationship: "Same class (SNRI)",
    },
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      drugClass: "Established agent",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Major depressive disorder",
      relationship: "primary",
    },
    {
      name: "Anxiety disorders (GAD, panic, social anxiety)",
      relationship: "off-label",
    },
    {
      name: "Hot flushes (menopause)",
      relationship: "off-label",
    },
    {
      name: "Neuropathic pain (adjunct)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Desvenlafaxine",
      type: "drug",
      href: "/drugs/desvenlafaxine",
      note: "The drug you're reading about",
    },
    {
      label: "SNRI",
      type: "class",
      href: "#mechanism",
      note: "Serotonin-Norepinephrine Reuptake Inhibitor",
    },
    {
      label: "Serotonin (5-HT)",
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
      label: "SERT and NET (inhibition) — the SNRI mechanism",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Major depressive disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Anxiety disorders (GAD, panic, social anxiety)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hot flushes (menopause)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Sustained hypertension",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Serotonin syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Desvenlafaxine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "Venlafaxine's active metabolite, packaged — SNRI efficacy with simpler pharmacokinetics.",
    summary: "Desvenlafaxine is a prescription medicine used to treat major depressive disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Desvenlafaxine is a modern SNRI antidepressant — it raises two brain chemicals (serotonin and noradrenaline) involved in mood. Its practical advantage is that the starting dose is usually the full treatment dose. Common effects are nausea, sweating, and — like others in its class — it must not be stopped suddenly, and blood pressure is checked at higher doses.",
    sideEffects: "The most common side effects are: nausea, sweating, blood pressure rise (dose-related), sexual dysfunction, dry mouth and constipation, insomnia or sedation. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Sustained hypertension and Serotonin syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure (baseline and after dose increases); mood and suicidality (early weeks) (weeks 1-4); sodium (elderly) (if unwell/confused). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, Serotonergic drugs and triptans, NSAIDs and anticoagulants, Minimal CYP interaction. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "D-Veniz",
        manufacturer: "Sun",
        strengths: "50, 100 mg",
      },
      {
        name: "Desvenlafaxine generic",
        manufacturer: "multiple",
        strengths: "50, 100 mg",
      },
    ],
    typicalDoses: "50 mg OD (100 mg max usual).",
    prescribingScenarios: ["MDD — the simple SNRI option.", "Perimenopausal depression with flushes."],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "BP at 100 mg doses; mood review early.",
    patientCounselling: [
      "The starting dose is usually the treatment dose.",
      "Do not stop suddenly.",
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
    familyName: "SNRIs",
    members: [
      {
        name: "Desvenlafaxine",
        slug: "desvenlafaxine",
        relationship: "This guide",
        distinguishing: "The simplified SNRI — venlafaxine's metabolite packaged",
      },
      {
        name: "Levomilnacipran",
        slug: "levomilnacipran",
        relationship: "Same class (SNRI)",
        distinguishing: "The NE-tilted SNRI — for the anergic depression phenotype",
      },
      {
        name: "Milnacipran",
        slug: "milnacipran",
        relationship: "Same class (SNRI)",
        distinguishing: "The fibromyalgia SNRI — pain + fatigue coverage",
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
      question: "Which molecular target does Desvenlafaxine primarily act on?",
      options: [
        "SERT and NET (inhibition) — the SNRI mechanism",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Desvenlafaxine acts primarily at SERT and NET (inhibition) — the SNRI mechanism. Desvenlafaxine inhibits serotonin and norepinephrine reuptake — venlafaxine's active metabolite delivered directly.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Desvenlafaxine?",
      options: ["Nausea", "Sweating", "Blood pressure rise (dose-related)", "Sexual dysfunction"],
      correctIndex: 0,
      explanation: "Nausea — The most common SNRI effect.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Desvenlafaxine for major depressive disorder?",
      options: ["50 mg/day", "100 mg/day (some go to 400 off-label)", "50 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For major depressive disorder: start 50 mg once daily, target 50 mg/day, maximum 100 mg/day (some go to 400 off-label). Therapeutic from the start; may increase to 100 mg after weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Desvenlafaxine in two sentences.",
      answer: "Desvenlafaxine inhibits serotonin and norepinephrine reuptake — venlafaxine's active metabolite delivered directly. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Desvenlafaxine.",
      answer: "Major depressive disorder, Anxiety disorders (GAD, panic, social anxiety), Hot flushes (menopause), Neuropathic pain (adjunct). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Desvenlafaxine and how you would manage it.",
      answer: "Sustained hypertension: Dose-related BP elevation. Management: Monitor; dose reduction; treat if sustained.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Desvenlafaxine require?",
      answer: "Blood pressure (Baseline and after dose increases); Mood and suicidality (early weeks) (Weeks 1-4); Sodium (elderly) (If unwell/confused)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Desvenlafaxine that separates safe prescribers from unsafe ones.",
      answer: "The 50 mg miracle of prescribing simplicity: unlike most antidepressants, the starting dose IS the therapeutic dose for most patients.",
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
      checkpoint: "You now know what Desvenlafaxine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Desvenlafaxine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Desvenlafaxine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Desvenlafaxine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Desvenlafaxine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Desvenlafaxine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Antidepressant response 2-4 weeks at therapeutic dose.",
    ],
    ifItWorks: [
      "Continue Desvenlafaxine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Desvenlafaxine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Desvenlafaxine follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral to mild gain (agent-specific).",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Major depressive disorder",
        starting: "50 mg once daily",
        titration: "Therapeutic from the start; may increase to 100 mg after weeks",
        target: "50 mg/day",
        max: "100 mg/day (some go to 400 off-label)",
      },
    ],
    dosageForms: ["Extended-release tablets 25, 50, 100 mg"],
    dosingTips: [
      "Start 50 mg and stay there for most patients.",
      "BP check above 100 mg.",
      "Taper on stopping — the short half-life punishes abrupt stops.",
    ],
    overdose: [
      "Overdose with Desvenlafaxine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Desvenlafaxine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: About 11 hours..", "Metabolism: Hepatic CYP metabolism.."],
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
      "Start-at-target dosing.",
      "2D6-independent — simple pharmacokinetics.",
      "Renal-dosing clarity.",
    ],
    potentialDisadvantages: [
      "No meaningful efficacy edge over venlafaxine.",
      "BP ceiling at higher doses.",
      "Discontinuation syndrome.",
      "Sexual dysfunction class effect.",
    ],
    primaryTargetSymptoms: ["Major depression", "Anxiety spectrum (off-label)", "Vasomotor symptoms (off-label)"],
    pearls: [
      "The 50 mg miracle of prescribing simplicity: unlike most antidepressants, the starting dose IS the therapeutic dose for most patients.",
      "2D6 independence: desvenlafaxine skips venlafaxine's CYP2D6 activation step — poor metabolisers and fluoxetine co-prescription stop mattering.",
      "Renal excretion dominant — the rare antidepressant where the kidney, not the liver, is the dosing organ.",
      "The SNRI dose-BP law applies: above 150 mg-equivalents, blood pressure climbs — monitor.",
      "Discontinuation syndrome is real (short half-life) — taper, don't ambush.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
