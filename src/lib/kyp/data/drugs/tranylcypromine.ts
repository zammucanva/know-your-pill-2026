import type { Drug } from "../types";

/**
 * Tranylcypromine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), tranylcypromine monograph (book p. 125)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const tranylcypromine: Drug = {
  /* ---- Identity ---- */
  slug: "tranylcypromine",
  genericName: "Tranylcypromine",
  brandNames: ["Parnate"],
  drugClass: "maoi",
  drugClassLabel: "MAOI",
  drugClassFullName: "Monoamine Oxidase Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "MAOIs", "Tranylcypromine"],
  /* ---- Hero / summary ---- */
  tagline: "The amphetamine-flavoured MAOI — activating, non-hydrazine, and the energising TRD option.",
  summary: "Tranylcypromine is the non-hydrazine irreversible MAOI: structurally amphetamine-adjacent (trace amine-like alerting effect), activating rather than sedating — the MAOI for anergic, treatment-resistant depression. Full tyramine and washout governance, with less weight gain and more insomnia/activation than phenelzine.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Tranylcypromine — from its molecular target (MAO-A and MAO-B (irreversible non-selective inhibition) + trace amine-like alerting effects) to clinical effect.",
    "List the FDA-approved and off-label uses of Tranylcypromine.",
    "Predict the common and serious side effects of Tranylcypromine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Tranylcypromine.",
    "Compare Tranylcypromine with other maois and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Tranylcypromine irreversibly inhibits MAO-A and B with an amphetamine-adjacent structure producing mild alerting effects — the activating MAOI.",
    molecularTarget: "MAO-A and MAO-B (irreversible non-selective inhibition) + trace amine-like alerting effects",
    effect: "Monoamine oxidase inhibition raising synaptic monoamines — the most powerful monoamine-enhancing mechanism in psychiatry.",
    steps: [
      "Tranylcypromine irreversibly inhibits MAO-A and B with an amphetamine-adjacent structure producing mild alerting effects — the activating MAOI.",
      "MAO inhibition raises intracellular and synaptic serotonin, noradrenaline, and dopamine.",
      "The therapeutic effect — like every antidepressant — requires weeks of downstream adaptation; the tyramine and drug interactions are immediate.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 2-3 hours plasma; irreversible MAO inhibition persists ~1-2 weeks. — see mechanism and prescriber sections.",
    halfLife: "2-3 hours plasma; irreversible MAO inhibition persists ~1-2 weeks.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Tranylcypromine",
        sublabel: "Monoamine oxidase inhibitor",
        variant: "inhibit",
      },
      {
        id: "mao",
        label: "MAO-A / MAO-B enzyme",
        sublabel: "Degrades monoamines in the terminal",
        variant: "target",
      },
      {
        id: "mono",
        label: "Serotonin / NE / DA",
        sublabel: "Intracellular levels rise",
        variant: "output",
      },
      {
        id: "effect",
        label: "Antidepressant effect",
        sublabel: "Including treatment-resistant depression",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "mao",
        label: "inhibits",
        type: "inhibit",
      },
      {
        from: "mao",
        to: "mono",
        label: "preserves",
        type: "stimulate",
      },
      {
        from: "mono",
        to: "effect",
        label: "drives",
      },
    ],
    caption: "Blocking enzymatic degradation raises all three monoamines simultaneously — powerful, but the same enzyme in the gut protects against dietary tyramine (hence the cheese reaction).",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine (NE)", "Dopamine (DA)"],
  receptors: ["MAO-A and/or MAO-B (inhibition)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major depressive disorder (treatment-resistant)",
      status: "fda-approved",
      description: "The MAOI step after failures — particularly the anergic phenotype.",
    },
    {
      name: "Treatment-resistant depression with fatigue/anergia",
      status: "guideline",
      description: "The activating profile's niche.",
    },
    {
      name: "Anxiety states (historic)",
      status: "off-label",
      description: "MAOI-class anxiolytic history.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Tranylcypromine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Serotonergic antidepressants (SSRIs, SNRIs, TCAs, tramadol, triptans, linezolid, methylene blue)",
      severity: "absolute",
      rationale: "Potentially fatal serotonin syndrome — the 14-day washout rule in both directions (5 weeks for fluoxetine).",
    },
    {
      name: "Sympathomimetics (OTC decongestants, amphetamines, cocaine)",
      severity: "absolute",
      rationale: "Hypertensive crisis via indirect noradrenaline release.",
    },
    {
      name: "Meperidine (pethidine) and dextromethorphan",
      severity: "absolute",
      rationale: "Serotonin syndrome — the classic anaesthetic and cough-syrup dangers.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Suicidal thoughts and behaviours",
      text: "Antidepressant-class suicidality warning applies to all MAOIs.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Insomnia and activation",
      frequency: "common",
      severity: "moderate",
      description: "The amphetamine-adjacent texture — morning dosing essential.",
      management: "Morning-weighted dosing.",
    },
    {
      name: "Orthostatic hypotension",
      frequency: "common",
      severity: "moderate",
      description: "The MAOI dose-limit (as phenelzine).",
      management: "Standing BP; slow titration.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "common",
      severity: "moderate",
      description: "Class effect.",
      management: "Counsel.",
    },
    {
      name: "Weight gain (less than phenelzine)",
      frequency: "uncommon",
      severity: "mild",
      description: "The non-hydrazine advantage.",
      management: "Monitor.",
    },
    {
      name: "Tremor and palpitations",
      frequency: "common",
      severity: "mild",
      description: "Alerting effects.",
      management: "Dose review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hypertensive crisis (tyramine/sympathomimetics)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The cheese reaction — full MAOI governance.",
      management: "Diet education; BP protocol; alert card.",
    },
    {
      name: "Serotonin syndrome (drug interactions)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The washout rules.",
      management: "14-day discipline.",
    },
    {
      name: "Hypertensive reactions at high dose (amphetamine-like pressor)",
      frequency: "rare",
      severity: "severe",
      description: "Dose-related above 60 mg.",
      management: "Dose ceilings.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Blood pressure (standing and supine)",
      frequency: "Baseline and during titration; home BP for tyramine symptoms",
      rationale: "Hypertensive crisis and orthostasis — both directions.",
    },
    {
      parameter: "Tyramine-diet adherence",
      frequency: "Every review (irreversible MAOIs)",
      rationale: "The cheese-reaction prevention.",
    },
    {
      parameter: "Mood and suicidality",
      frequency: "Early weeks",
      rationale: "Class warning.",
    },
  ],
  interactions: [
    {
      drug: "Serotonergic antidepressants (SSRIs, SNRIs, TCAs, tramadol, triptans, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism: "Potentially fatal serotonin syndrome — the 14-day washout rule in both directions (5 weeks for fluoxetine).",
      action: "Absolute washout discipline.",
    },
    {
      drug: "Tyramine-rich foods (aged cheese, cured meats, yeast extracts, tap beer, soy sauce, overripe fruit)",
      severity: "major",
      mechanism: "Hypertensive crisis ('cheese reaction') — tyramine displaces noradrenaline stores.",
      action: "Tyramine-restricted diet education.",
    },
    {
      drug: "Sympathomimetics (OTC decongestants, amphetamines, cocaine)",
      severity: "contraindicated",
      mechanism: "Hypertensive crisis via indirect noradrenaline release.",
      action: "Read every OTC label.",
    },
    {
      drug: "Meperidine (pethidine) and dextromethorphan",
      severity: "contraindicated",
      mechanism: "Serotonin syndrome — the classic anaesthetic and cough-syrup dangers.",
      action: "Medical alert documentation.",
    },
    {
      drug: "Antihypertensives",
      severity: "moderate",
      mechanism: "Additive hypotension — MAOIs themselves lower BP.",
      action: "Monitor; adjust.",
    },
  ],
  pregnancy: {
    legacyCategory: "C (variable)",
    summary: "MAOIs are avoided in pregnancy where alternatives exist; specialist individualised decisions only.",
    lactation: "Avoid — infant effects possible.",
  },
  renalAdjustment: "Standard caution.",
  hepaticAdjustment: "Reduce dose in hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "This is a monoamine oxidase inhibitor — the oldest and one of the most powerful families of antidepressants, used especially when other medicines have failed. It permanently switches off the enzyme that recycles the brain's mood chemicals. Because the same enzyme also protects the body against certain foods and medicines, taking it requires following a diet sheet (avoiding aged cheese, cured meats, and tap beer) and never mixing certain medicines — rules that keep a very effective treatment safe.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Tranylcypromine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The structure story: tranylcypromine is a cyclopropylamine cousin of amphetamine — trace alerting effects without being a stimulant.",
    "The MAOI pair: phenelzine (sedating, weight-gaining, atypical-depression legend) vs tranylcypromine (activating, insomnia-tilted, anergic-TRD niche) — the prescribing choice between the two.",
    "Morning dosing only — the insomnia is dependable if you dose late.",
    "The 60 mg ceiling: above it, the amphetamine-like pressor effects join the tyramine risks.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Tranylcypromine: Tranylcypromine irreversibly inhibits MAO-A and B with an amphetamine-adjacent structure producing mild alerting effects — the activating MAOI.",
        "Uses of Tranylcypromine: Major depressive disorder (treatment-resistant); Treatment-resistant depression with fatigue/anergia; Anxiety states (historic)",
        "Mechanism: IRREVERSIBLE non-selective MAOI — AMPHETAMINE-ADJACENT structure (alerting).",
        "The activating MAOI: anergic treatment-resistant depression niche.",
      ],
      practical: [
        "Prescribe Tranylcypromine for major depressive disorder (treatment-resistant) with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure (standing and supine) (Baseline and during titration; home BP for tyramine symptoms); Tyramine-diet adherence (Every review (irreversible MAOIs)); Mood and suicidality (Early weeks)",
      ],
      longAnswer: [
        "Tranylcypromine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: IRREVERSIBLE non-selective MAOI — AMPHETAMINE-ADJACENT structure (alerting).",
        "The activating MAOI: anergic treatment-resistant depression niche.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: IRREVERSIBLE non-selective MAOI — AMPHETAMINE-ADJACENT structure (alerting).",
        "The activating MAOI: anergic treatment-resistant depression niche.",
        "Insomnia (morning dosing) vs phenelzine's sedation-weight.",
        "Same tyramine and washout governance as phenelzine.",
        "Dose 30-60 mg/day (60 ceiling for pressor reasons).",
      ],
      pyqConcepts: [
        "Mechanism/target of Tranylcypromine",
        "Key adverse effect: Hypertensive crisis (tyramine/sympathomimetics)",
        "Dosing and titration of Tranylcypromine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Tranylcypromine develops hypertensive crisis (tyramine/sympathomimetics) — next best step?",
        "When to choose Tranylcypromine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: MAO-A and MAO-B (irreversible non-selective inhibition) + trace amine-like alerting effects",
        "Most common side effects: Insomnia and activation, Orthostatic hypotension, Sexual dysfunction",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The structure story: tranylcypromine is a cyclopropylamine cousin of amphetamine — trace alerting effects without being a stimulant.",
        "The MAOI pair: phenelzine (sedating, weight-gaining, atypical-depression legend) vs tranylcypromine (activating, insomnia-tilted, anergic-TRD niche) — the prescribing choice between the two.",
        "Morning dosing only — the insomnia is dependable if you dose late.",
        "The 60 mg ceiling: above it, the amphetamine-like pressor effects join the tyramine risks.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: IRREVERSIBLE non-selective MAOI — AMPHETAMINE-ADJACENT structure (alerting).",
    "The activating MAOI: anergic treatment-resistant depression niche.",
    "Insomnia (morning dosing) vs phenelzine's sedation-weight.",
    "Same tyramine and washout governance as phenelzine.",
    "Dose 30-60 mg/day (60 ceiling for pressor reasons).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder (treatment-resistant)",
      presentation: "A patient presenting with major depressive disorder (treatment-resistant), started on Tranylcypromine.",
      history: "A adult patient presents with a major depressive disorder (treatment-resistant) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder (treatment-resistant); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder (treatment-resistant). Differentials are considered and excluded clinically.",
      rationale: "Tranylcypromine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (MAOI) with strong evidence in this condition.",
      management: "Started at 10 mg twice daily (morning + midday), titrated to 30-60 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Tranylcypromine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "MAOI comparison — choosing within the class",
      primaryDrug: "Tranylcypromine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "MAO-A and MAO-B (irreversible non-selective inhibition) + trace amine-like alerting effects",
          comparisons: [
            {
              drug: "Phenelzine",
              value: "See full guide",
            },
            {
              drug: "Isocarboxazid",
              value: "See full guide",
            },
            {
              drug: "Moclobemide",
              value: "See full guide",
            },
            {
              drug: "Selegiline",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "2-3 hours plasma; irreversible MAO inhibition persists ~1-2 weeks.",
          comparisons: [
            {
              drug: "Phenelzine",
              value: "—",
            },
            {
              drug: "Isocarboxazid",
              value: "—",
            },
            {
              drug: "Moclobemide",
              value: "—",
            },
            {
              drug: "Selegiline",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight gain common — the MAOI story.",
          comparisons: [
            {
              drug: "Phenelzine",
              value: "Weight gain common — the MAOI story.",
            },
            {
              drug: "Isocarboxazid",
              value: "Weight gain common — the MAOI story.",
            },
            {
              drug: "Moclobemide",
              value: "Weight gain common — the MAOI story.",
            },
            {
              drug: "Selegiline",
              value: "Weight gain common — the MAOI story.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Variable (agent-specific).",
          comparisons: [
            {
              drug: "Phenelzine",
              value: "Variable (agent-specific).",
            },
            {
              drug: "Isocarboxazid",
              value: "Variable (agent-specific).",
            },
            {
              drug: "Moclobemide",
              value: "Variable (agent-specific).",
            },
            {
              drug: "Selegiline",
              value: "Variable (agent-specific).",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The activating MAOI — anergic treatment-resistant depression",
          comparisons: [
            {
              drug: "Phenelzine",
              value: "The atypical-depression legend — MAOI pharmacology's flagship",
            },
            {
              drug: "Isocarboxazid",
              value: "The quiet hydrazine — legacy MAOI continuity",
            },
            {
              drug: "Moclobemide",
              value: "The RIMA — MAOI mechanism with the diet relaxed",
            },
            {
              drug: "Selegiline",
              value: "The MAO-B drug that became the diet-free antidepressant patch",
            },
          ],
        },
      ],
      takeaway: "All maois share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Tranylcypromine reaches peak plasma concentration and begins acting at its molecular target (MAO-A and MAO-B (irreversible non-selective inhibition) + trace amine-like alerting effects). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (insomnia and activation, orthostatic hypotension, sexual dysfunction). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Antidepressant effect 2-6 weeks; interactions are immediate from the first dose.)",
      title: "Therapeutic effect builds",
      description: "Antidepressant effect 2-6 weeks; interactions are immediate from the first dose. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Tranylcypromine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Tranylcypromine take to work?",
      answer: "Antidepressant effect 2-6 weeks; interactions are immediate from the first dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Tranylcypromine?",
      answer: "The most frequently reported effects are: Insomnia and activation, Orthostatic hypotension, Sexual dysfunction, Weight gain (less than phenelzine), Tremor and palpitations. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Tranylcypromine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Tranylcypromine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Tranylcypromine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Tranylcypromine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Tranylcypromine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for MDD (Treatment-Resistant Depression)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), tranylcypromine monograph, p. 125",
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
        source: "FDA Prescribing Information for Parnate (Tranylcypromine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for tranylcypromine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Tranylcypromine",
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
      name: "Phenelzine",
      slug: "phenelzine",
      drugClass: "MAOI",
      relationship: "Same class (MAOI)",
    },
    {
      name: "Isocarboxazid",
      slug: "isocarboxazid",
      drugClass: "MAOI",
      relationship: "Same class (MAOI)",
    },
    {
      name: "Moclobemide",
      slug: "moclobemide",
      drugClass: "MAOI",
      relationship: "Same class (MAOI)",
    },
    {
      name: "Selegiline",
      slug: "selegiline",
      drugClass: "MAOI",
      relationship: "Same class (MAOI)",
    },
  ],
  relatedConditions: [
    {
      name: "Major depressive disorder (treatment-resistant)",
      relationship: "primary",
    },
    {
      name: "Treatment-resistant depression with fatigue/anergia",
      relationship: "alternative",
    },
    {
      name: "Anxiety states (historic)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Tranylcypromine",
      type: "drug",
      href: "/drugs/tranylcypromine",
      note: "The drug you're reading about",
    },
    {
      label: "MAOI",
      type: "class",
      href: "#mechanism",
      note: "Monoamine Oxidase Inhibitor",
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
      label: "MAO-A and MAO-B (irreversible non-selective inhibition) + trace amine-like alerting effects",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Major depressive disorder (treatment-resistant)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Treatment-resistant depression with fatigue/anergia",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Anxiety states (historic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hypertensive crisis (tyramine/sympathomimetics)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Serotonin syndrome (drug interactions)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Insomnia and activation",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Tranylcypromine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The amphetamine-flavoured MAOI — activating, non-hydrazine, and the energising TRD option.",
    summary: "Tranylcypromine is a prescription medicine used to treat major depressive disorder (treatment-resistant). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "This is a monoamine oxidase inhibitor — the oldest and one of the most powerful families of antidepressants, used especially when other medicines have failed. It permanently switches off the enzyme that recycles the brain's mood chemicals. Because the same enzyme also protects the body against certain foods and medicines, taking it requires following a diet sheet (avoiding aged cheese, cured meats, and tap beer) and never mixing certain medicines — rules that keep a very effective treatment safe.",
    sideEffects: "The most common side effects are: insomnia and activation, orthostatic hypotension, sexual dysfunction, weight gain (less than phenelzine), tremor and palpitations. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hypertensive crisis (tyramine/sympathomimetics) and Serotonin syndrome (drug interactions). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure (standing and supine) (baseline and during titration; home bp for tyramine symptoms); tyramine-diet adherence (every review (irreversible maois)); mood and suicidality (early weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Serotonergic antidepressants (SSRIs, SNRIs, TCAs, tramadol, triptans, linezolid, methylene blue), Tyramine-rich foods (aged cheese, cured meats, yeast extracts, tap beer, soy sauce, overripe fruit), Sympathomimetics (OTC decongestants, amphetamines, cocaine), Meperidine (pethidine) and dextromethorphan. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Parnate (imported/very rare)",
        manufacturer: "legacy",
        strengths: "10 mg",
      },
    ],
    typicalDoses: "30-60 mg/day divided.",
    prescribingScenarios: ["Specialist TRD use only."],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "high",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Standing BP; diet; alert card.",
    patientCounselling: [
      "Morning dosing; strict diet sheet; alert card.",
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
    familyName: "MAOIs",
    members: [
      {
        name: "Tranylcypromine",
        slug: "tranylcypromine",
        relationship: "This guide",
        distinguishing: "The activating MAOI — anergic treatment-resistant depression",
      },
      {
        name: "Phenelzine",
        slug: "phenelzine",
        relationship: "Same class (MAOI)",
        distinguishing: "The atypical-depression legend — MAOI pharmacology's flagship",
      },
      {
        name: "Isocarboxazid",
        slug: "isocarboxazid",
        relationship: "Same class (MAOI)",
        distinguishing: "The quiet hydrazine — legacy MAOI continuity",
      },
      {
        name: "Moclobemide",
        slug: "moclobemide",
        relationship: "Same class (MAOI)",
        distinguishing: "The RIMA — MAOI mechanism with the diet relaxed",
      },
      {
        name: "Selegiline",
        slug: "selegiline",
        relationship: "Same class (MAOI)",
        distinguishing: "The MAO-B drug that became the diet-free antidepressant patch",
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
      question: "Which molecular target does Tranylcypromine primarily act on?",
      options: [
        "MAO-A and MAO-B (irreversible non-selective inhibition) + trace amine-like alerting effects",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Tranylcypromine acts primarily at MAO-A and MAO-B (irreversible non-selective inhibition) + trace amine-like alerting effects. Tranylcypromine irreversibly inhibits MAO-A and B with an amphetamine-adjacent structure producing mild alerting effects — the activating MAOI.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Tranylcypromine?",
      options: ["Insomnia and activation", "Orthostatic hypotension", "Sexual dysfunction", "Weight gain (less than phenelzine)"],
      correctIndex: 0,
      explanation: "Insomnia and activation — The amphetamine-adjacent texture — morning dosing essential.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Tranylcypromine for depression?",
      options: ["30-60 mg/day", "60 mg/day", "30-60 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For depression: start 10 mg twice daily (morning + midday), target 30-60 mg/day, maximum 60 mg/day. Increase by 10 mg/day every 1-2 weeks",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Tranylcypromine in two sentences.",
      answer: "Tranylcypromine irreversibly inhibits MAO-A and B with an amphetamine-adjacent structure producing mild alerting effects — the activating MAOI. Net effect: Monoamine oxidase inhibition raising synaptic monoamines — the most powerful monoamine-enhancing mechanism in psychiatry.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Tranylcypromine.",
      answer: "Major depressive disorder (treatment-resistant), Treatment-resistant depression with fatigue/anergia, Anxiety states (historic). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Tranylcypromine and how you would manage it.",
      answer: "Hypertensive crisis (tyramine/sympathomimetics): The cheese reaction — full MAOI governance. Management: Diet education; BP protocol; alert card.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Tranylcypromine require?",
      answer: "Blood pressure (standing and supine) (Baseline and during titration; home BP for tyramine symptoms); Tyramine-diet adherence (Every review (irreversible MAOIs)); Mood and suicidality (Early weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Tranylcypromine that separates safe prescribers from unsafe ones.",
      answer: "The structure story: tranylcypromine is a cyclopropylamine cousin of amphetamine — trace alerting effects without being a stimulant.",
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
      checkpoint: "You now know what Tranylcypromine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Tranylcypromine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Tranylcypromine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Tranylcypromine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Tranylcypromine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Tranylcypromine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Antidepressant effect 2-6 weeks; interactions are immediate from the first dose.",
    ],
    ifItWorks: [
      "Continue Tranylcypromine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Tranylcypromine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Tranylcypromine follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight gain common — the MAOI story.",
    sedation: "Variable (agent-specific).",
    dosing: [
      {
        indication: "Depression",
        starting: "10 mg twice daily (morning + midday)",
        titration: "Increase by 10 mg/day every 1-2 weeks",
        target: "30-60 mg/day",
        max: "60 mg/day",
      },
    ],
    dosageForms: ["Tablets 10 mg"],
    dosingTips: [
      "The diet sheet is part of the prescription.",
      "Medical-alert documentation for every patient.",
      "14-day washout rules in both directions.",
    ],
    overdose: [
      "Overdose with Tranylcypromine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Tranylcypromine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 2-3 hours plasma; irreversible MAO inhibition persists ~1-2 weeks..",
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
    potentialAdvantages: [
      "Efficacy in treatment-resistant depression — among the most powerful antidepressants.",
      "Atypical depression niche.",
      "Panic/social-anxiety historic efficacy.",
    ],
    potentialDisadvantages: ["Diet and drug-interaction discipline.", "Hypertensive crisis risk.", "Weight gain and sexual dysfunction.", "Washout logistics."],
    primaryTargetSymptoms: ["Treatment-resistant depression", "Atypical depression"],
    pearls: [
      "The structure story: tranylcypromine is a cyclopropylamine cousin of amphetamine — trace alerting effects without being a stimulant.",
      "The MAOI pair: phenelzine (sedating, weight-gaining, atypical-depression legend) vs tranylcypromine (activating, insomnia-tilted, anergic-TRD niche) — the prescribing choice between the two.",
      "Morning dosing only — the insomnia is dependable if you dose late.",
      "The 60 mg ceiling: above it, the amphetamine-like pressor effects join the tyramine risks.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
