import type { Drug } from "../types";

/**
 * Phenelzine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), phenelzine monograph (book p. 97)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const phenelzine: Drug = {
  /* ---- Identity ---- */
  slug: "phenelzine",
  genericName: "Phenelzine",
  brandNames: ["Nardil"],
  drugClass: "maoi",
  drugClassLabel: "MAOI",
  drugClassFullName: "Monoamine Oxidase Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "MAOIs", "Phenelzine"],
  /* ---- Hero / summary ---- */
  tagline: "The hydrazine MAOI classic — the treatment-resistant and atypical-depression legend with the cheese rule.",
  summary: "Phenelzine is the irreversible non-selective MAOI of legend: the drug for treatment-resistant and atypical depression (mood reactivity, rejection sensitivity, hyperphagia-hypersomnia) — among the most effective antidepressants ever made, governed by the tyramine diet, the serotonergic washouts, and the hydrazine adverse-effect texture (weight gain, sexual dysfunction, oedema).",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Phenelzine — from its molecular target (MAO-A and MAO-B (irreversible non-selective inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Phenelzine.",
    "Predict the common and serious side effects of Phenelzine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Phenelzine.",
    "Compare Phenelzine with other maois and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Phenelzine irreversibly inhibits both MAO-A and MAO-B — maximal monoamine elevation, with the full interaction governance of irreversible MAO inhibition.",
    molecularTarget: "MAO-A and MAO-B (irreversible non-selective inhibition)",
    effect: "Monoamine oxidase inhibition raising synaptic monoamines — the most powerful monoamine-enhancing mechanism in psychiatry.",
    steps: [
      "Phenelzine irreversibly inhibits both MAO-A and MAO-B — maximal monoamine elevation, with the full interaction governance of irreversible MAO inhibition.",
      "MAO inhibition raises intracellular and synaptic serotonin, noradrenaline, and dopamine.",
      "The therapeutic effect — like every antidepressant — requires weeks of downstream adaptation; the tyramine and drug interactions are immediate.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Short plasma (~1-2 h) but MAO inhibition lasts ~2 weeks after stopping (irreversible). — see mechanism and prescriber sections.",
    halfLife: "Short plasma (~1-2 h) but MAO inhibition lasts ~2 weeks after stopping (irreversible).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Phenelzine",
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
      name: "Major depressive disorder (treatment-resistant/atypical presentations)",
      status: "fda-approved",
      description: "The classic niche: atypical depression (rejection sensitivity, mood reactivity) and TRD.",
    },
    {
      name: "Social anxiety disorder (historic efficacy)",
      status: "off-label",
      description: "Among the most effective agents known for social anxiety — pre-SSRI era.",
    },
    {
      name: "Panic disorder (treatment-resistant)",
      status: "off-label",
      description: "Historic MAOI efficacy.",
    },
    {
      name: "Treatment-resistant depression generally",
      status: "guideline",
      description: "The MAOI step in algorithms after multiple failures.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Phenelzine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      name: "Orthostatic hypotension",
      frequency: "common",
      severity: "moderate",
      description: "The dose-limiting MAOI effect (MAO-A in sympathetic terminals).",
      management: "Standing BP monitoring; slow titration.",
    },
    {
      name: "Weight gain and increased appetite",
      frequency: "common",
      severity: "moderate",
      description: "The hydrazine-MAOI metabolic story — carbohydrate craving specifically.",
      management: "Diet structure from the start.",
    },
    {
      name: "Sexual dysfunction (anorgasmia)",
      frequency: "common",
      severity: "moderate",
      description: "The MAOI-class effect — pronounced with phenelzine.",
      management: "Counsel; drug holidays are inappropriate here (interactions); consider aripiprazole add-on.",
    },
    {
      name: "Sedation and insomnia (both reported)",
      frequency: "common",
      severity: "mild",
      description: "Paradoxical mixture — some activate, some sedate.",
      management: "Dose timing individualisation.",
    },
    {
      name: "Oedema and myoclonus (higher doses)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Hydrazine-MAOI effects.",
      management: "Dose review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hypertensive crisis (tyramine/diet/sympathomimetic)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The cheese reaction: thunderclap headache, hypertension, risk of stroke — the MAOI-defining emergency.",
      management: "Diet education; BP teaching; medical alert; nifedipine-bite protocols in specialist practice.",
    },
    {
      name: "Serotonin syndrome (drug interactions)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "With SSRIs, tramadol, triptans, meperidine, dextromethorphan — the interaction list that governs prescribing.",
      management: "14-day washouts (5 weeks post-fluoxetine); alert documentation.",
    },
    {
      name: "Hepatotoxicity (hydrazine class, rare)",
      frequency: "rare",
      severity: "severe",
      description: "The original hydrazine MAOI concern.",
      management: "LFT vigilance if symptomatic.",
    },
    {
      name: "Pyridoxine (B6) deficiency with long use",
      frequency: "uncommon",
      severity: "moderate",
      description: "Hydrazine MAOIs consume B6 — peripheral neuropathy possible.",
      management: "B6 supplementation with long use.",
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
    "Benefit from Phenelzine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The atypical-depression discovery: phenelzine's superiority in mood-reactive, rejection-sensitive, hypersomnic-hyperphagic depression defined the atypical-depression construct itself.",
    "The two-washout rule: 14 days after stopping phenelzine, MAO is still inhibited — new antidepressants wait; and 5 weeks after fluoxetine before starting it.",
    "The MAOI paradox: phenelzine lowers standing BP (dose-limiting orthostasis) while tyramine can send it through the roof — the same drug, opposite crises.",
    "The social-anxiety benchmark: pre-SSPI era phenelzine was THE social-anxiety drug — efficacy modern agents approach but rarely exceeded.",
    "B6 with the hydrazines: peripheral neuropathy on long phenelzine is a vitamin deficiency — supplement rather than switch.",
    "The MAOI step is under-used: decades of diet-phobia kept the most powerful antidepressants in the cabinet.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Phenelzine: Phenelzine irreversibly inhibits both MAO-A and MAO-B — maximal monoamine elevation, with the full interaction governance of irreversible MAO inhibition.",
        "Uses of Phenelzine: Major depressive disorder (treatment-resistant/atypical presentations); Social anxiety disorder (historic efficacy); Panic disorder (treatment-resistant); Treatment-resistant depression generally",
        "Mechanism: IRREVERSIBLE non-selective MAO-A + MAO-B inhibitor (hydrazine class).",
        "Legend indications: atypical depression (the defining trials) and treatment-resistant depression.",
      ],
      practical: [
        "Prescribe Phenelzine for major depressive disorder (treatment-resistant/atypical presentations) with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure (standing and supine) (Baseline and during titration; home BP for tyramine symptoms); Tyramine-diet adherence (Every review (irreversible MAOIs)); Mood and suicidality (Early weeks)",
      ],
      longAnswer: [
        "Phenelzine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: IRREVERSIBLE non-selective MAO-A + MAO-B inhibitor (hydrazine class).",
        "Legend indications: atypical depression (the defining trials) and treatment-resistant depression.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: IRREVERSIBLE non-selective MAO-A + MAO-B inhibitor (hydrazine class).",
        "Legend indications: atypical depression (the defining trials) and treatment-resistant depression.",
        "Historic benchmark: social anxiety and panic efficacy.",
        "Tyramine diet + 14-day washout rules (5 weeks post-fluoxetine) + medical alert.",
        "Signature adverse effects: orthostatic hypotension, weight gain, sexual dysfunction, oedema, B6-depletion neuropathy.",
        "Hypertensive crisis = thunderclap headache + severe hypertension (the emergency).",
      ],
      pyqConcepts: [
        "Mechanism/target of Phenelzine",
        "Key adverse effect: Hypertensive crisis (tyramine/diet/sympathomimetic)",
        "Dosing and titration of Phenelzine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Phenelzine develops hypertensive crisis (tyramine/diet/sympathomimetic) — next best step?",
        "When to choose Phenelzine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: MAO-A and MAO-B (irreversible non-selective inhibition)",
        "Most common side effects: Orthostatic hypotension, Weight gain and increased appetite, Sexual dysfunction (anorgasmia)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The atypical-depression discovery: phenelzine's superiority in mood-reactive, rejection-sensitive, hypersomnic-hyperphagic depression defined the atypical-depression construct itself.",
        "The two-washout rule: 14 days after stopping phenelzine, MAO is still inhibited — new antidepressants wait; and 5 weeks after fluoxetine before starting it.",
        "The MAOI paradox: phenelzine lowers standing BP (dose-limiting orthostasis) while tyramine can send it through the roof — the same drug, opposite crises.",
        "The social-anxiety benchmark: pre-SSPI era phenelzine was THE social-anxiety drug — efficacy modern agents approach but rarely exceeded.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: IRREVERSIBLE non-selective MAO-A + MAO-B inhibitor (hydrazine class).",
    "Legend indications: atypical depression (the defining trials) and treatment-resistant depression.",
    "Historic benchmark: social anxiety and panic efficacy.",
    "Tyramine diet + 14-day washout rules (5 weeks post-fluoxetine) + medical alert.",
    "Signature adverse effects: orthostatic hypotension, weight gain, sexual dysfunction, oedema, B6-depletion neuropathy.",
    "Hypertensive crisis = thunderclap headache + severe hypertension (the emergency).",
    "Dose 45-90 mg/day.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder (treatment-resistant/atypical presentations)",
      presentation: "A patient presenting with major depressive disorder (treatment-resistant/atypical presentations), started on Phenelzine.",
      history: "A adult patient presents with a major depressive disorder (treatment-resistant/atypical presentations) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder (treatment-resistant/atypical presentations); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder (treatment-resistant/atypical presentations). Differentials are considered and excluded clinically.",
      rationale: "Phenelzine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (MAOI) with strong evidence in this condition.",
      management: "Started at 15 mg three times daily, titrated to 45-90 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Phenelzine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "MAOI comparison — choosing within the class",
      primaryDrug: "Phenelzine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "MAO-A and MAO-B (irreversible non-selective inhibition)",
          comparisons: [
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
            {
              drug: "Tranylcypromine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Short plasma (~1-2 h) but MAO inhibition lasts ~2 weeks after stopping (irreversible).",
          comparisons: [
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
            {
              drug: "Tranylcypromine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight gain common — the MAOI story.",
          comparisons: [
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
            {
              drug: "Tranylcypromine",
              value: "Weight gain common — the MAOI story.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Variable (agent-specific).",
          comparisons: [
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
            {
              drug: "Tranylcypromine",
              value: "Variable (agent-specific).",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The atypical-depression legend — MAOI pharmacology's flagship",
          comparisons: [
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
            {
              drug: "Tranylcypromine",
              value: "The activating MAOI — anergic treatment-resistant depression",
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
      description: "Phenelzine reaches peak plasma concentration and begins acting at its molecular target (MAO-A and MAO-B (irreversible non-selective inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (orthostatic hypotension, weight gain and increased appetite, sexual dysfunction (anorgasmia)). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Phenelzine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Phenelzine take to work?",
      answer: "Antidepressant effect 2-6 weeks; interactions are immediate from the first dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Phenelzine?",
      answer: "The most frequently reported effects are: Orthostatic hypotension, Weight gain and increased appetite, Sexual dysfunction (anorgasmia), Sedation and insomnia (both reported), Oedema and myoclonus (higher doses). Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Phenelzine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Phenelzine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Phenelzine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Phenelzine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Phenelzine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), phenelzine monograph, p. 97",
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
        source: "FDA Prescribing Information for Nardil (Phenelzine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for phenelzine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Phenelzine",
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
    {
      name: "Tranylcypromine",
      slug: "tranylcypromine",
      drugClass: "MAOI",
      relationship: "Same class (MAOI)",
    },
  ],
  relatedConditions: [
    {
      name: "Major depressive disorder (treatment-resistant/atypical presentations)",
      relationship: "primary",
    },
    {
      name: "Social anxiety disorder (historic efficacy)",
      relationship: "off-label",
    },
    {
      name: "Panic disorder (treatment-resistant)",
      relationship: "off-label",
    },
    {
      name: "Treatment-resistant depression generally",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Phenelzine",
      type: "drug",
      href: "/drugs/phenelzine",
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
      label: "MAO-A and MAO-B (irreversible non-selective inhibition)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Major depressive disorder (treatment-resistant/atypical presentations)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Social anxiety disorder (historic efficacy)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Panic disorder (treatment-resistant)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hypertensive crisis (tyramine/diet/sympathomimetic)",
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
      label: "Orthostatic hypotension",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Phenelzine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The hydrazine MAOI classic — the treatment-resistant and atypical-depression legend with the cheese rule.",
    summary: "Phenelzine is a prescription medicine used to treat major depressive disorder (treatment-resistant/atypical presentations). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "This is a monoamine oxidase inhibitor — the oldest and one of the most powerful families of antidepressants, used especially when other medicines have failed. It permanently switches off the enzyme that recycles the brain's mood chemicals. Because the same enzyme also protects the body against certain foods and medicines, taking it requires following a diet sheet (avoiding aged cheese, cured meats, and tap beer) and never mixing certain medicines — rules that keep a very effective treatment safe.",
    sideEffects: "The most common side effects are: orthostatic hypotension, weight gain and increased appetite, sexual dysfunction (anorgasmia), sedation and insomnia (both reported), oedema and myoclonus (higher doses). These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hypertensive crisis (tyramine/diet/sympathomimetic) and Serotonin syndrome (drug interactions). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure (standing and supine) (baseline and during titration; home bp for tyramine symptoms); tyramine-diet adherence (every review (irreversible maois)); mood and suicidality (early weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Serotonergic antidepressants (SSRIs, SNRIs, TCAs, tramadol, triptans, linezolid, methylene blue), Tyramine-rich foods (aged cheese, cured meats, yeast extracts, tap beer, soy sauce, overripe fruit), Sympathomimetics (OTC decongestants, amphetamines, cocaine), Meperidine (pethidine) and dextromethorphan. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Nardil (imported/very rare)",
        manufacturer: "Pfizer legacy",
        strengths: "15 mg",
      },
    ],
    typicalDoses: "45-90 mg/day divided.",
    prescribingScenarios: [
      "Tertiary-care treatment-resistant depression.",
      "Rare specialist-initiated use in India.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "high",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Standing BP; diet diary; alert card.",
    patientCounselling: [
      "The diet sheet is absolute — aged cheese, cured meats, tap beer, soy sauce.",
      "Carry the MAOI alert card always.",
      "No cough syrups or OTC decongestants without checking.",
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
    familyName: "MAOIs",
    members: [
      {
        name: "Phenelzine",
        slug: "phenelzine",
        relationship: "This guide",
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
      {
        name: "Tranylcypromine",
        slug: "tranylcypromine",
        relationship: "Same class (MAOI)",
        distinguishing: "The activating MAOI — anergic treatment-resistant depression",
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
      question: "Which molecular target does Phenelzine primarily act on?",
      options: [
        "MAO-A and MAO-B (irreversible non-selective inhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Phenelzine acts primarily at MAO-A and MAO-B (irreversible non-selective inhibition). Phenelzine irreversibly inhibits both MAO-A and MAO-B — maximal monoamine elevation, with the full interaction governance of irreversible MAO inhibition.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Phenelzine?",
      options: ["Orthostatic hypotension", "Weight gain and increased appetite", "Sexual dysfunction (anorgasmia)", "Sedation and insomnia (both reported)"],
      correctIndex: 0,
      explanation: "Orthostatic hypotension — The dose-limiting MAOI effect (MAO-A in sympathetic terminals).",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Phenelzine for depression?",
      options: ["45-90 mg/day", "90 mg/day", "45-90 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For depression: start 15 mg three times daily, target 45-90 mg/day, maximum 90 mg/day. Increase by 15 mg/day weekly to 45-90 mg/day",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Phenelzine in two sentences.",
      answer: "Phenelzine irreversibly inhibits both MAO-A and MAO-B — maximal monoamine elevation, with the full interaction governance of irreversible MAO inhibition. Net effect: Monoamine oxidase inhibition raising synaptic monoamines — the most powerful monoamine-enhancing mechanism in psychiatry.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Phenelzine.",
      answer: "Major depressive disorder (treatment-resistant/atypical presentations), Social anxiety disorder (historic efficacy), Panic disorder (treatment-resistant), Treatment-resistant depression generally. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Phenelzine and how you would manage it.",
      answer: "Hypertensive crisis (tyramine/diet/sympathomimetic): The cheese reaction: thunderclap headache, hypertension, risk of stroke — the MAOI-defining emergency. Management: Diet education; BP teaching; medical alert; nifedipine-bite protocols in specialist practice.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Phenelzine require?",
      answer: "Blood pressure (standing and supine) (Baseline and during titration; home BP for tyramine symptoms); Tyramine-diet adherence (Every review (irreversible MAOIs)); Mood and suicidality (Early weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Phenelzine that separates safe prescribers from unsafe ones.",
      answer: "The atypical-depression discovery: phenelzine's superiority in mood-reactive, rejection-sensitive, hypersomnic-hyperphagic depression defined the atypical-depression construct itself.",
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
      checkpoint: "You now know what Phenelzine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Phenelzine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Phenelzine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Phenelzine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Phenelzine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Phenelzine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Antidepressant effect 2-6 weeks; interactions are immediate from the first dose.",
    ],
    ifItWorks: [
      "Continue Phenelzine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Phenelzine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Phenelzine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        starting: "15 mg three times daily",
        titration: "Increase by 15 mg/day weekly to 45-90 mg/day",
        target: "45-90 mg/day",
        max: "90 mg/day",
      },
    ],
    dosageForms: ["Tablets 15 mg"],
    dosingTips: [
      "The diet sheet is part of the prescription.",
      "Medical-alert documentation for every patient.",
      "14-day washout rules in both directions.",
    ],
    overdose: [
      "Overdose with Phenelzine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Phenelzine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Short plasma (~1-2 h) but MAO inhibition lasts ~2 weeks after stopping (irreversible)..",
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
      "The atypical-depression discovery: phenelzine's superiority in mood-reactive, rejection-sensitive, hypersomnic-hyperphagic depression defined the atypical-depression construct itself.",
      "The two-washout rule: 14 days after stopping phenelzine, MAO is still inhibited — new antidepressants wait; and 5 weeks after fluoxetine before starting it.",
      "The MAOI paradox: phenelzine lowers standing BP (dose-limiting orthostasis) while tyramine can send it through the roof — the same drug, opposite crises.",
      "The social-anxiety benchmark: pre-SSPI era phenelzine was THE social-anxiety drug — efficacy modern agents approach but rarely exceeded.",
      "B6 with the hydrazines: peripheral neuropathy on long phenelzine is a vitamin deficiency — supplement rather than switch.",
      "The MAOI step is under-used: decades of diet-phobia kept the most powerful antidepressants in the cabinet.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
