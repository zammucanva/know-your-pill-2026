import type { Drug } from "../types";

/**
 * Selegiline — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), selegiline monograph (book p. 112)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const selegiline: Drug = {
  /* ---- Identity ---- */
  slug: "selegiline",
  genericName: "Selegiline",
  brandNames: ["Eldepryl", "Emsam (patch)", "Zeelandia-legacy generics"],
  drugClass: "maoi",
  drugClassLabel: "MAOI",
  drugClassFullName: "Monoamine Oxidase Inhibitor (MAO-B Selective)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "MAOIs", "Selegiline"],
  /* ---- Hero / summary ---- */
  tagline: "The MAO-B-selective that became an antidepressant patch — Parkinson's drug by day, depression patch at dose.",
  summary: "Selegiline is the MAO-B-SELECTIVE inhibitor: at low doses (Parkinson's adjunct) it spares MAO-A and needs no tyramine diet; at antidepressant doses (oral ≥ 20 mg) selectivity is lost and full MAOI governance applies — until the TRANSDERMAL PATCH arrived: transdermal selegiline reaches the brain with minimal gut MAO-A inhibition, delivering antidepressant effect WITHOUT the tyramine diet (at 6 mg/24 h).",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Selegiline — from its molecular target (MAO-B (selective inhibition at low dose); MAO-A+B at antidepressant oral doses; patch = CNS-selective) to clinical effect.",
    "List the FDA-approved and off-label uses of Selegiline.",
    "Predict the common and serious side effects of Selegiline from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Selegiline.",
    "Compare Selegiline with other maois and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Selegiline selectively inhibits MAO-B at low doses (dopamine-sparing Parkinson's pharmacology); at antidepressant doses it inhibits both enzymes — except the transdermal route, which delivers CNS selectivity without gut MAO-A blockade.",
    molecularTarget: "MAO-B (selective inhibition at low dose); MAO-A+B at antidepressant oral doses; patch = CNS-selective",
    effect: "Monoamine oxidase inhibition raising synaptic monoamines — the most powerful monoamine-enhancing mechanism in psychiatry.",
    steps: [
      "Selegiline selectively inhibits MAO-B at low doses (dopamine-sparing Parkinson's pharmacology); at antidepressant doses it inhibits both enzymes — except the transdermal route, which delivers CNS selectivity without gut MAO-A blockade.",
      "MAO inhibition raises intracellular and synaptic serotonin, noradrenaline, and dopamine.",
      "The therapeutic effect — like every antidepressant — requires weeks of downstream adaptation; the tyramine and drug interactions are immediate.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life Short plasma (~10 h); MAO-B inhibition lasts ~1-2 weeks (irreversible). — see mechanism and prescriber sections.",
    halfLife: "Short plasma (~10 h); MAO-B inhibition lasts ~1-2 weeks (irreversible).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Selegiline",
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
      name: "Major depressive disorder (transdermal patch)",
      status: "fda-approved",
      description: "The only MAOI without the tyramine diet — the Emsam patch's achievement (6 mg/24 h).",
    },
    {
      name: "Parkinson's disease — adjunct to levodopa (low-dose oral)",
      status: "fda-approved",
      description: "The MAO-B original indication.",
    },
    {
      name: "Treatment-resistant depression (patch at higher doses)",
      status: "guideline",
      description: "9-12 mg patches re-introduce diet cautions.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Selegiline must not be used in this situation (see Prescriber's Guide: Do Not Use).",
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
      name: "Application-site reactions (patch)",
      frequency: "common",
      severity: "mild",
      description: "Local erythema.",
      management: "Site rotation.",
    },
    {
      name: "Insomnia and activation",
      frequency: "common",
      severity: "moderate",
      description: "MAO-B dopaminergic alerting — amphetamine metabolites contribute.",
      management: "Morning patch application.",
    },
    {
      name: "Dry mouth and dizziness",
      frequency: "common",
      severity: "mild",
      description: "Class-adjacent effects.",
      management: "Reassurance.",
    },
    {
      name: "Orthostatic hypotension",
      frequency: "common",
      severity: "moderate",
      description: "MAOI effect at antidepressant doses.",
      management: "Standing BP.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Hypertensive crisis (oral high-dose; patch ≥ 9 mg with tyramine)",
      frequency: "rare",
      severity: "life-threatening",
      description: "At 6 mg/24 h patch: diet-free (gut MAO-A spared); at 9-12 mg: tyramine cautions return.",
      management: "Dose-appropriate counselling.",
    },
    {
      name: "Serotonin syndrome (all routes — serotonergic drugs)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The washout rules apply at ALL antidepressant doses — the diet relaxes, the drug rules do not.",
      management: "14-day washouts.",
    },
    {
      name: "Non-selective shift at oral ≥ 20 mg",
      frequency: "rare",
      severity: "life-threatening",
      description: "Oral antidepressant dosing loses MAO-B selectivity — full MAOI rules.",
      management: "Route-and-dose-based governance.",
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
    "Benefit from Selegiline builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The patch's pharmacokinetic magic: transdermal selegiline bypasses first-pass gut MAO-A inhibition — antidepressant brain levels with dietary freedom (at 6 mg).",
    "The dose-diet staircase: oral 5 mg (no rules) → patch 6 mg (no diet) → patch 9-12 mg (diet cautions return) → oral 20 mg+ (full MAOI rules).",
    "The amphetamine footnote: selegiline metabolises partly to l-amphetamine/l-methamphetamine — the alerting texture and the occasional false-positive urine screen.",
    "The Parkinson's-depression bridge: one molecule, two CNS careers — MAO-B dopaminergic protection (Parkinson's) and MAO-A-B monoamine elevation (depression).",
    "The washout honesty: even diet-free patch patients follow the SSRI washout rules — reversibility of DIET, not of DRUG rules.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Selegiline: Selegiline selectively inhibits MAO-B at low doses (dopamine-sparing Parkinson's pharmacology); at antidepressant doses it inhibits both enzymes — except the transdermal route, which delivers CNS selectivity without gut MAO-A blockade.",
        "Uses of Selegiline: Major depressive disorder (transdermal patch); Parkinson's disease — adjunct to levodopa (low-dose oral); Treatment-resistant depression (patch at higher doses)",
        "Mechanism: MAO-B-SELECTIVE at low doses; non-selective at oral antidepressant doses; transdermal = CNS-selective.",
        "The EMSAM PATCH (6 mg/24 h): the ONLY MAOI without the tyramine diet.",
      ],
      practical: [
        "Prescribe Selegiline for major depressive disorder (transdermal patch) with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure (standing and supine) (Baseline and during titration; home BP for tyramine symptoms); Tyramine-diet adherence (Every review (irreversible MAOIs)); Mood and suicidality (Early weeks)",
      ],
      longAnswer: [
        "Selegiline: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: MAO-B-SELECTIVE at low doses; non-selective at oral antidepressant doses; transdermal = CNS-selective.",
        "The EMSAM PATCH (6 mg/24 h): the ONLY MAOI without the tyramine diet.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: MAO-B-SELECTIVE at low doses; non-selective at oral antidepressant doses; transdermal = CNS-selective.",
        "The EMSAM PATCH (6 mg/24 h): the ONLY MAOI without the tyramine diet.",
        "Parkinson's adjunct (5 mg bd oral) — the origin indication.",
        "Metabolites include l-amphetamine/l-methamphetamine (alerting + urine-screen caveat).",
        "Serotonergic washout rules apply at ALL antidepressant doses.",
        "Diet cautions return at patch 9-12 mg and oral ≥ 20 mg.",
      ],
      pyqConcepts: [
        "Mechanism/target of Selegiline",
        "Key adverse effect: Hypertensive crisis (oral high-dose; patch ≥ 9 mg with tyramine)",
        "Dosing and titration of Selegiline",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Selegiline develops hypertensive crisis (oral high-dose; patch ≥ 9 mg with tyramine) — next best step?",
        "When to choose Selegiline over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: MAO-B (selective inhibition at low dose); MAO-A+B at antidepressant oral doses; patch = CNS-selective",
        "Most common side effects: Application-site reactions (patch), Insomnia and activation, Dry mouth and dizziness",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The patch's pharmacokinetic magic: transdermal selegiline bypasses first-pass gut MAO-A inhibition — antidepressant brain levels with dietary freedom (at 6 mg).",
        "The dose-diet staircase: oral 5 mg (no rules) → patch 6 mg (no diet) → patch 9-12 mg (diet cautions return) → oral 20 mg+ (full MAOI rules).",
        "The amphetamine footnote: selegiline metabolises partly to l-amphetamine/l-methamphetamine — the alerting texture and the occasional false-positive urine screen.",
        "The Parkinson's-depression bridge: one molecule, two CNS careers — MAO-B dopaminergic protection (Parkinson's) and MAO-A-B monoamine elevation (depression).",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: MAO-B-SELECTIVE at low doses; non-selective at oral antidepressant doses; transdermal = CNS-selective.",
    "The EMSAM PATCH (6 mg/24 h): the ONLY MAOI without the tyramine diet.",
    "Parkinson's adjunct (5 mg bd oral) — the origin indication.",
    "Metabolites include l-amphetamine/l-methamphetamine (alerting + urine-screen caveat).",
    "Serotonergic washout rules apply at ALL antidepressant doses.",
    "Diet cautions return at patch 9-12 mg and oral ≥ 20 mg.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — major depressive disorder (transdermal patch)",
      presentation: "A patient presenting with major depressive disorder (transdermal patch), started on Selegiline.",
      history: "A adult patient presents with a major depressive disorder (transdermal patch) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with major depressive disorder (transdermal patch); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Major depressive disorder (transdermal patch). Differentials are considered and excluded clinically.",
      rationale: "Selegiline is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (MAOI) with strong evidence in this condition.",
      management: "Started at 6 mg/24 h patch daily, titrated to 6-12 mg/24 h with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Selegiline takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "MAOI comparison — choosing within the class",
      primaryDrug: "Selegiline",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "MAO-B (selective inhibition at low dose); MAO-A+B at antidepressant oral doses; patch = CNS-selective",
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
              drug: "Tranylcypromine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Short plasma (~10 h); MAO-B inhibition lasts ~1-2 weeks (irreversible).",
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
              drug: "Tranylcypromine",
              value: "Variable (agent-specific).",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The MAO-B drug that became the diet-free antidepressant patch",
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
      description: "Selegiline reaches peak plasma concentration and begins acting at its molecular target (MAO-B (selective inhibition at low dose); MAO-A+B at antidepressant oral doses; patch = CNS-selective). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (application-site reactions (patch), insomnia and activation, dry mouth and dizziness). Many settle as the body adapts.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Selegiline is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Selegiline take to work?",
      answer: "Antidepressant effect 2-6 weeks; interactions are immediate from the first dose.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Selegiline?",
      answer: "The most frequently reported effects are: Application-site reactions (patch), Insomnia and activation, Dry mouth and dizziness, Orthostatic hypotension. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Selegiline suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Selegiline habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Selegiline exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Selegiline during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Selegiline may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), selegiline monograph, p. 112",
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
        source: "FDA Prescribing Information for Eldepryl (Selegiline)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for selegiline — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Selegiline",
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
      name: "Tranylcypromine",
      slug: "tranylcypromine",
      drugClass: "MAOI",
      relationship: "Same class (MAOI)",
    },
  ],
  relatedConditions: [
    {
      name: "Major depressive disorder (transdermal patch)",
      relationship: "primary",
    },
    {
      name: "Parkinson's disease — adjunct to levodopa (low-dose oral)",
      relationship: "primary",
    },
    {
      name: "Treatment-resistant depression (patch at higher doses)",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Selegiline",
      type: "drug",
      href: "/drugs/selegiline",
      note: "The drug you're reading about",
    },
    {
      label: "MAOI",
      type: "class",
      href: "#mechanism",
      note: "Monoamine Oxidase Inhibitor (MAO-B Selective)",
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
      label: "MAO-B (selective inhibition at low dose); MAO-A+B at antidepressant oral doses; patch = CNS-selective",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Major depressive disorder (transdermal patch)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Parkinson's disease — adjunct to levodopa (low-dose oral)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Treatment-resistant depression (patch at higher doses)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Hypertensive crisis (oral high-dose; patch ≥ 9 mg with tyramine)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Serotonin syndrome (all routes — serotonergic drugs)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Application-site reactions (patch)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Selegiline",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The MAO-B-selective that became an antidepressant patch — Parkinson's drug by day, depression patch at dose.",
    summary: "Selegiline is a prescription medicine used to treat major depressive disorder (transdermal patch). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "This is a monoamine oxidase inhibitor — the oldest and one of the most powerful families of antidepressants, used especially when other medicines have failed. It permanently switches off the enzyme that recycles the brain's mood chemicals. Because the same enzyme also protects the body against certain foods and medicines, taking it requires following a diet sheet (avoiding aged cheese, cured meats, and tap beer) and never mixing certain medicines — rules that keep a very effective treatment safe.",
    sideEffects: "The most common side effects are: application-site reactions (patch), insomnia and activation, dry mouth and dizziness, orthostatic hypotension. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Hypertensive crisis (oral high-dose; patch ≥ 9 mg with tyramine) and Serotonin syndrome (all routes — serotonergic drugs). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure (standing and supine) (baseline and during titration; home bp for tyramine symptoms); tyramine-diet adherence (every review (irreversible maois)); mood and suicidality (early weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Serotonergic antidepressants (SSRIs, SNRIs, TCAs, tramadol, triptans, linezolid, methylene blue), Tyramine-rich foods (aged cheese, cured meats, yeast extracts, tap beer, soy sauce, overripe fruit), Sympathomimetics (OTC decongestants, amphetamines, cocaine), Meperidine (pethidine) and dextromethorphan. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Selgin / Selegiline generic",
        manufacturer: "various",
        strengths: "5 mg oral",
      },
      {
        name: "Emsam patch (imported/rare)",
        manufacturer: "Somerset-legacy",
        strengths: "6-12 mg patches",
      },
    ],
    typicalDoses: "Parkinson's 5 mg bd oral; depression patch 6-12 mg/24 h.",
    prescribingScenarios: [
      "Parkinson's clinics — the common Indian exposure.",
      "Psychiatry patch use rare/imported.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Standing BP at antidepressant doses; serotonergic audit.",
    patientCounselling: [
      "Morning dosing (insomnia).",
      "Patch 6 mg = no diet; above that, cautions return.",
      "The SSRI washout rules apply regardless.",
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
        name: "Selegiline",
        slug: "selegiline",
        relationship: "This guide",
        distinguishing: "The MAO-B drug that became the diet-free antidepressant patch",
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
        name: "Tranylcypromine",
        slug: "tranylcypromine",
        relationship: "Same class (MAOI)",
        distinguishing: "The activating MAOI — anergic treatment-resistant depression",
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
      question: "Which molecular target does Selegiline primarily act on?",
      options: [
        "MAO-B (selective inhibition at low dose); MAO-A+B at antidepressant oral doses; patch = CNS-selective",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Selegiline acts primarily at MAO-B (selective inhibition at low dose); MAO-A+B at antidepressant oral doses; patch = CNS-selective. Selegiline selectively inhibits MAO-B at low doses (dopamine-sparing Parkinson's pharmacology); at antidepressant doses it inhibits both enzymes — except the transdermal route, which delivers CNS selectivity without gut MAO-A blockade.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Selegiline?",
      options: ["Application-site reactions (patch)", "Insomnia and activation", "Dry mouth and dizziness", "Orthostatic hypotension"],
      correctIndex: 0,
      explanation: "Application-site reactions (patch) — Local erythema.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Selegiline for depression (patch)?",
      options: ["6-12 mg/24 h", "12 mg/24 h", "6-12 mg/24 h (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For depression (patch): start 6 mg/24 h patch daily, target 6-12 mg/24 h, maximum 12 mg/24 h. May increase to 9-12 mg (diet cautions resume above 6)",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Selegiline in two sentences.",
      answer: "Selegiline selectively inhibits MAO-B at low doses (dopamine-sparing Parkinson's pharmacology); at antidepressant doses it inhibits both enzymes — except the transdermal route, which delivers CNS selectivity without gut MAO-A blockade. Net effect: Monoamine oxidase inhibition raising synaptic monoamines — the most powerful monoamine-enhancing mechanism in psychiatry.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Selegiline.",
      answer: "Major depressive disorder (transdermal patch), Parkinson's disease — adjunct to levodopa (low-dose oral), Treatment-resistant depression (patch at higher doses). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Selegiline and how you would manage it.",
      answer: "Hypertensive crisis (oral high-dose; patch ≥ 9 mg with tyramine): At 6 mg/24 h patch: diet-free (gut MAO-A spared); at 9-12 mg: tyramine cautions return. Management: Dose-appropriate counselling.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Selegiline require?",
      answer: "Blood pressure (standing and supine) (Baseline and during titration; home BP for tyramine symptoms); Tyramine-diet adherence (Every review (irreversible MAOIs)); Mood and suicidality (Early weeks)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Selegiline that separates safe prescribers from unsafe ones.",
      answer: "The patch's pharmacokinetic magic: transdermal selegiline bypasses first-pass gut MAO-A inhibition — antidepressant brain levels with dietary freedom (at 6 mg).",
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
      checkpoint: "You now know what Selegiline is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Selegiline works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Selegiline safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Selegiline.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Selegiline with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Selegiline.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Antidepressant effect 2-6 weeks; interactions are immediate from the first dose.",
    ],
    ifItWorks: [
      "Continue Selegiline at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Selegiline (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Selegiline follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Depression (patch)",
        starting: "6 mg/24 h patch daily",
        titration: "May increase to 9-12 mg (diet cautions resume above 6)",
        target: "6-12 mg/24 h",
        max: "12 mg/24 h",
      },
      {
        indication: "Parkinson's adjunct (oral)",
        starting: "5 mg twice daily with breakfast and lunch",
        titration: "Avoid afternoon-evening dosing (insomnia)",
        target: "10 mg/day",
        max: "10 mg/day",
      },
    ],
    dosageForms: ["Oral tablets/capsules 5 mg", "Transdermal patches 6, 9, 12 mg/24 h"],
    dosingTips: [
      "The diet sheet is part of the prescription.",
      "Medical-alert documentation for every patient.",
      "14-day washout rules in both directions.",
    ],
    overdose: [
      "Overdose with Selegiline is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Selegiline is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Short plasma (~10 h); MAO-B inhibition lasts ~1-2 weeks (irreversible)..",
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
      "The patch's pharmacokinetic magic: transdermal selegiline bypasses first-pass gut MAO-A inhibition — antidepressant brain levels with dietary freedom (at 6 mg).",
      "The dose-diet staircase: oral 5 mg (no rules) → patch 6 mg (no diet) → patch 9-12 mg (diet cautions return) → oral 20 mg+ (full MAOI rules).",
      "The amphetamine footnote: selegiline metabolises partly to l-amphetamine/l-methamphetamine — the alerting texture and the occasional false-positive urine screen.",
      "The Parkinson's-depression bridge: one molecule, two CNS careers — MAO-B dopaminergic protection (Parkinson's) and MAO-A-B monoamine elevation (depression).",
      "The washout honesty: even diet-free patch patients follow the SSRI washout rules — reversibility of DIET, not of DRUG rules.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
