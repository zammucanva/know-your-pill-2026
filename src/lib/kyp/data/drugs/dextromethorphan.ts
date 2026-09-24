import type { Drug } from "../types";

/**
 * Dextromethorphan — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), dextromethorphan monograph (book p. 33)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const dextromethorphan: Drug = {
  /* ---- Identity ---- */
  slug: "dextromethorphan",
  genericName: "Dextromethorphan",
  brandNames: ["Robitussin DM (cough)", "Auvelity (with bupropion)"],
  drugClass: "nmda-antagonist",
  drugClassLabel: "NMDA Antagonist",
  drugClassFullName: "NMDA Receptor Antagonist / Sigma-1 Agonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Specialised Agents", "NMDA Antagonists", "Dextromethorphan"],
  /* ---- Hero / summary ---- */
  tagline: "The cough suppressant with three secret lives — NMDA blocker, sigma agonist, and the newest antidepressant mechanism.",
  summary: "Dextromethorphan is the OTC antitussive whose CNS pharmacology gave it psychiatric careers: NMDA antagonism (the ketamine-adjacent mechanism), sigma-1 agonism, and — as dextromethorphan-bupropion (Auvelity) — the newest FDA-approved antidepressant mechanism of the decade. Misuse at recreational doses (robo-tripping) and serotonin-syndrome potential complete the profile.",
  estimatedReadTime: "18 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Dextromethorphan — from its molecular target (NMDA receptor (antagonism) + sigma-1 receptor (agonism); with bupropion = dextrorphan potentiation) to clinical effect.",
    "List the FDA-approved and off-label uses of Dextromethorphan.",
    "Predict the common and serious side effects of Dextromethorphan from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Dextromethorphan.",
    "Compare Dextromethorphan with other nmda antagonists and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Dextromethorphan antagonises NMDA receptors and agonises sigma-1 — glutamate-modulating antidepressant pharmacology (especially combined with bupropion, which raises dextrorphan levels via CYP2D6 competition).",
    molecularTarget: "NMDA receptor (antagonism) + sigma-1 receptor (agonism); with bupropion = dextrorphan potentiation",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Dextromethorphan antagonises NMDA receptors and agonises sigma-1 — glutamate-modulating antidepressant pharmacology (especially combined with bupropion, which raises dextrorphan levels via CYP2D6 competition).",
      "The mechanism translates into the clinical profile described.",
      "Practical use follows half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 3-30 hours (2D6-dependent — poor metabolisers hold it longer). — see mechanism and prescriber sections.",
    halfLife: "3-30 hours (2D6-dependent — poor metabolisers hold it longer).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Dextromethorphan",
        sublabel: "NMDA receptor antagonist",
        variant: "inhibit",
      },
      {
        id: "nmda",
        label: "NMDA receptor",
        sublabel: "Glutamate-gated Ca²⁺ channel",
        variant: "target",
      },
      {
        id: "glu",
        label: "Glutamate",
        sublabel: "Excitatory tone rebalanced",
        variant: "process",
      },
      {
        id: "syn",
        label: "Synaptic plasticity",
        sublabel: "Rapid antidepressant / neuroprotective effect",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "nmda",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "nmda",
        to: "glu",
        label: "modulates",
      },
      {
        from: "glu",
        to: "syn",
        label: "restores plasticity",
        type: "stimulate",
      },
    ],
    caption: "NMDA antagonism rebalances glutamate signalling — the pathway that can produce antidepressant effects within hours rather than weeks.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Glutamate", "Serotonin (5-HT)"],
  receptors: ["NMDA receptor (antagonist)", "Sigma-1 receptor (agonist)"],
  brainRegionIds: ["prefrontal-cortex", "hippocampus"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Cough suppression (OTC)",
      status: "fda-approved",
      description: "The original life: the most common antitussive in world cough syrup.",
    },
    {
      name: "Major depressive disorder (as dextromethorphan-bupropion combination)",
      status: "fda-approved",
      description: "Auvelity: 45/105 mg twice daily — the rapidish-onset NMDA-flavoured antidepressant (days-to-weeks onset in trials).",
    },
    {
      name: "Pseudobulbar affect (as dextromethorphan-quinidine)",
      status: "fda-approved",
      description: "Nuedexta: the approved pseudobulbar affect treatment.",
    },
    {
      name: "Treatment-resistant depression (off-label, investigational)",
      status: "off-label",
      description: "The ketamine-adjacent mechanism under study.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Dextromethorphan must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "MAOIs",
      severity: "absolute",
      rationale: "Serotonin syndrome.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea and dizziness (combination products)",
      frequency: "common",
      severity: "mild",
      description: "The commonest effects of the antidepressant combination.",
      management: "With food.",
    },
    {
      name: "Somnolence or dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Class-typical.",
      management: "Reassurance.",
    },
    {
      name: "Dissociation at high doses",
      frequency: "uncommon",
      severity: "moderate",
      description: "The NMDA texture when misused (robo-tripping).",
      management: "Dose ceilings; misuse awareness.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Serotonin syndrome (with SSRIs, MAOIs, other serotonergics)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Dextromethorphan is serotonergic — the SSRI + cough-syrup interaction is classic.",
      management: "Read OTC labels; MAOI absolute contraindication.",
    },
    {
      name: "Misuse and dependence (recreational doses)",
      frequency: "uncommon",
      severity: "severe",
      description: "Robo-tripping: dissociative misuse of OTC syrup — a real adolescent pattern.",
      management: "Dispensing awareness; education.",
    },
    {
      name: "Leukoencephalopathy with chronic high-dose misuse",
      frequency: "rare",
      severity: "severe",
      description: "The chronic-misuse end-organ damage.",
      management: "Misuse identification.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Response (combination MDD use)",
      frequency: "At 2-6 weeks",
      rationale: "The adequate-trial discipline.",
    },
    {
      parameter: "Misuse review (OTC contexts)",
      frequency: "In adolescent care",
      rationale: "The robo-tripping awareness.",
    },
  ],
  interactions: [
    {
      drug: "MAOIs",
      severity: "contraindicated",
      mechanism: "Serotonin syndrome.",
      action: "Absolute washout.",
    },
    {
      drug: "SSRIs and serotonergics",
      severity: "major",
      mechanism: "Serotonin syndrome — including OTC cough-syrup dosing on SSRIs.",
      action: "Counsel on reading labels.",
    },
    {
      drug: "CYP2D6 inhibitors (bupropion deliberately; fluoxetine incidentally)",
      severity: "major",
      mechanism: "Raise dextromethorphan levels — intended (Auvelity) or incidental.",
      action: "Dose awareness.",
    },
  ],
  pregnancy: {
    summary: "OTC cough use: short courses standard caution. Combination antidepressant use: bupropion-class pregnancy considerations apply.",
    lactation: "Standard caution.",
  },
  renalAdjustment: "Standard caution.",
  hepaticAdjustment: "2D6 metabolism — hepatic impairment and poor-metaboliser status raise levels.",
  /* ---- Education ---- */
  patientExplanation: "Dextromethorphan is the cough-suppressing ingredient in most over-the-counter cough syrups — and, in new prescription combinations, also a fast-acting antidepressant that works on the brain's glutamate system. On its own at normal doses it is safe; it must not be mixed with antidepressants without your doctor's knowledge, and taking large amounts for recreational effects is dangerous.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Dextromethorphan builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The triple life: cough syrup by day, pseudobulbar-affect capsule by prescription, and the newest antidepressant mechanism by combination — one molecule, three careers.",
    "The 2D6 story: bupropion inhibits CYP2D6, raising dextromethorphan AND its active metabolite dextrorphan — the combination is pharmacokinetic engineering.",
    "The ketamine connection: NMDA antagonism with sigma-1 agonism — the glutamate-era antidepressant pharmacology at OTC prices.",
    "The adolescent misuse footnote: robo-tripping (dissociative syrup misuse) is the addiction-medicine reminder that OTC is not risk-free.",
    "The SSRI-syrup trap: serotonin syndrome from cough syrup on an SSRI — the OTC-labeling lesson.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Dextromethorphan: Dextromethorphan antagonises NMDA receptors and agonises sigma-1 — glutamate-modulating antidepressant pharmacology (especially combined with bupropion, which raises dextrorphan levels via CYP2D6 competition).",
        "Uses of Dextromethorphan: Cough suppression (OTC); Major depressive disorder (as dextromethorphan-bupropion combination); Pseudobulbar affect (as dextromethorphan-quinidine); Treatment-resistant depression (off-label, investigational)",
        "Mechanism: NMDA ANTAGONIST + sigma-1 AGONIST (serotonergic activity too).",
        "Three lives: OTC antitussive + pseudobulbar affect (with quinidine) + MDD (with bupropion — Auvelity).",
      ],
      practical: [
        "Prescribe Dextromethorphan for cough suppression (otc) with dose, timing, and duration.",
        "Outline the monitoring plan: Response (combination MDD use) (At 2-6 weeks); Misuse review (OTC contexts) (In adolescent care)",
      ],
      longAnswer: [
        "Dextromethorphan: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: NMDA ANTAGONIST + sigma-1 AGONIST (serotonergic activity too).",
        "Three lives: OTC antitussive + pseudobulbar affect (with quinidine) + MDD (with bupropion — Auvelity).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: NMDA ANTAGONIST + sigma-1 AGONIST (serotonergic activity too).",
        "Three lives: OTC antitussive + pseudobulbar affect (with quinidine) + MDD (with bupropion — Auvelity).",
        "The 2D6-bupropion pharmacokinetic pairing raises dextrorphan.",
        "Warnings: serotonin syndrome with SSRIs/MAOIs; recreational misuse (robo-tripping).",
        "The newest FDA antidepressant mechanism of the 2020s.",
      ],
      pyqConcepts: [
        "Mechanism/target of Dextromethorphan",
        "Key adverse effect: Serotonin syndrome (with SSRIs, MAOIs, other serotonergics)",
        "Dosing and titration of Dextromethorphan",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Dextromethorphan develops serotonin syndrome (with ssris, maois, other serotonergics) — next best step?",
        "When to choose Dextromethorphan over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: NMDA receptor (antagonism) + sigma-1 receptor (agonism); with bupropion = dextrorphan potentiation",
        "Most common side effects: Nausea and dizziness (combination products), Somnolence or dry mouth, Dissociation at high doses",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The triple life: cough syrup by day, pseudobulbar-affect capsule by prescription, and the newest antidepressant mechanism by combination — one molecule, three careers.",
        "The 2D6 story: bupropion inhibits CYP2D6, raising dextromethorphan AND its active metabolite dextrorphan — the combination is pharmacokinetic engineering.",
        "The ketamine connection: NMDA antagonism with sigma-1 agonism — the glutamate-era antidepressant pharmacology at OTC prices.",
        "The adolescent misuse footnote: robo-tripping (dissociative syrup misuse) is the addiction-medicine reminder that OTC is not risk-free.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: NMDA ANTAGONIST + sigma-1 AGONIST (serotonergic activity too).",
    "Three lives: OTC antitussive + pseudobulbar affect (with quinidine) + MDD (with bupropion — Auvelity).",
    "The 2D6-bupropion pharmacokinetic pairing raises dextrorphan.",
    "Warnings: serotonin syndrome with SSRIs/MAOIs; recreational misuse (robo-tripping).",
    "The newest FDA antidepressant mechanism of the 2020s.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — cough suppression (otc)",
      presentation: "A patient presenting with cough suppression (otc), started on Dextromethorphan.",
      history: "A adult patient presents with a cough suppression (otc) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with cough suppression (otc); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Cough suppression (OTC). Differentials are considered and excluded clinically.",
      rationale: "Dextromethorphan is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (NMDA Antagonist) with strong evidence in this condition.",
      management: "Started at 15-30 mg up to four times daily, titrated to 30-120 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Dextromethorphan takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "NMDA Antagonist vs related agents — orientation table",
      primaryDrug: "Dextromethorphan",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "NMDA receptor (antagonism) + sigma-1 receptor (agonism); with bupropion = dextrorphan potentiation",
          comparisons: [
            {
              drug: "Ketamine",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Ketamine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Ketamine",
              value: "See its guide",
            },
          ],
        },
        {
          attribute: "Clinical niche",
          primaryValue: "The OTC drug with an antidepressant second life",
          comparisons: [
            {
              drug: "Ketamine",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Dextromethorphan is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Dextromethorphan reaches peak plasma concentration and begins acting at its molecular target (NMDA receptor (antagonism) + sigma-1 receptor (agonism); with bupropion = dextrorphan potentiation). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea and dizziness (combination products), somnolence or dry mouth, dissociation at high doses). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Cough in hours; antidepressant effect days-to-weeks (combination trials).)",
      title: "Therapeutic effect builds",
      description: "Cough in hours; antidepressant effect days-to-weeks (combination trials). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Dextromethorphan is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Dextromethorphan take to work?",
      answer: "Cough in hours; antidepressant effect days-to-weeks (combination trials).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Dextromethorphan?",
      answer: "The most frequently reported effects are: Nausea and dizziness (combination products), Somnolence or dry mouth, Dissociation at high doses. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Dextromethorphan suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Dextromethorphan habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Dextromethorphan exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Dextromethorphan during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Dextromethorphan may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for MDD; APA Ketamine Task Force Consensus",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), dextromethorphan monograph, p. 33",
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
        source: "FDA Prescribing Information for Robitussin DM (cough) (Dextromethorphan)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for dextromethorphan — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Dextromethorphan",
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
      name: "Ketamine",
      slug: "ketamine",
      drugClass: "NMDA Antidepressant",
      relationship: "Class reference compound",
    },
  ],
  relatedConditions: [
    {
      name: "Cough suppression (OTC)",
      relationship: "primary",
    },
    {
      name: "Major depressive disorder (as dextromethorphan-bupropion combination)",
      relationship: "primary",
    },
    {
      name: "Pseudobulbar affect (as dextromethorphan-quinidine)",
      relationship: "primary",
    },
    {
      name: "Treatment-resistant depression (off-label, investigational)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Dextromethorphan",
      type: "drug",
      href: "/drugs/dextromethorphan",
      note: "The drug you're reading about",
    },
    {
      label: "NMDA Antagonist",
      type: "class",
      href: "#mechanism",
      note: "NMDA Receptor Antagonist / Sigma-1 Agonist",
    },
    {
      label: "Glutamate",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "NMDA receptor (antagonism) + sigma-1 receptor (agonism); with bupropion = dextrorphan potentiation",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Cough suppression (OTC)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Major depressive disorder (as dextromethorphan-bupropion combination)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Pseudobulbar affect (as dextromethorphan-quinidine)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Serotonin syndrome (with SSRIs, MAOIs, other serotonergics)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Misuse and dependence (recreational doses)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea and dizziness (combination products)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Dextromethorphan",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The cough suppressant with three secret lives — NMDA blocker, sigma agonist, and the newest antidepressant mechanism.",
    summary: "Dextromethorphan is a prescription medicine used to treat cough suppression (otc). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Dextromethorphan is the cough-suppressing ingredient in most over-the-counter cough syrups — and, in new prescription combinations, also a fast-acting antidepressant that works on the brain's glutamate system. On its own at normal doses it is safe; it must not be mixed with antidepressants without your doctor's knowledge, and taking large amounts for recreational effects is dangerous.",
    sideEffects: "The most common side effects are: nausea and dizziness (combination products), somnolence or dry mouth, dissociation at high doses. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Serotonin syndrome (with SSRIs, MAOIs, other serotonergics) and Misuse and dependence (recreational doses). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: response (combination mdd use) (at 2-6 weeks); misuse review (otc contexts) (in adolescent care). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: MAOIs, SSRIs and serotonergics, CYP2D6 inhibitors (bupropion deliberately; fluoxetine incidentally). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Cough syrups containing DXM)",
        manufacturer: "multiple OTC brands",
        strengths: "per label",
      },
      {
        name: "Nuedexta/Auvelity (not marketed in India)",
        manufacturer: "imported",
        strengths: "—",
      },
    ],
    typicalDoses: "Cough 15-30 mg up to qid; combination products per label.",
    prescribingScenarios: [
      "The OTC misuse-awareness teaching context.",
      "Imported combination antidepressant use rare.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Serotonergic interaction audit.",
    patientCounselling: [
      "Read labels on cough syrups if taking antidepressants.",
      "Never take more than the label dose.",
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
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "NMDA Antagonists",
    members: [
      {
        name: "Dextromethorphan",
        slug: "dextromethorphan",
        relationship: "This guide",
        distinguishing: "The OTC drug with an antidepressant second life",
      },
    ],
  },
  learningTimeBreakdown: {
    read: "14 min",
    study: "20 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Dextromethorphan primarily act on?",
      options: [
        "NMDA receptor (antagonism) + sigma-1 receptor (agonism); with bupropion = dextrorphan potentiation",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Dextromethorphan acts primarily at NMDA receptor (antagonism) + sigma-1 receptor (agonism); with bupropion = dextrorphan potentiation. Dextromethorphan antagonises NMDA receptors and agonises sigma-1 — glutamate-modulating antidepressant pharmacology (especially combined with bupropion, which raises dextrorphan levels via CYP2D6 competition).",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Dextromethorphan?",
      options: [
        "Nausea and dizziness (combination products)",
        "Somnolence or dry mouth",
        "Dissociation at high doses",
        "Weight gain",
      ],
      correctIndex: 0,
      explanation: "Nausea and dizziness (combination products) — The commonest effects of the antidepressant combination.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Dextromethorphan for cough (otc)?",
      options: ["30-120 mg/day", "120 mg/day (OTC labelling)", "30-120 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For cough (otc): start 15-30 mg up to four times daily, target 30-120 mg/day, maximum 120 mg/day (OTC labelling). Short-term use",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Dextromethorphan in two sentences.",
      answer: "Dextromethorphan antagonises NMDA receptors and agonises sigma-1 — glutamate-modulating antidepressant pharmacology (especially combined with bupropion, which raises dextrorphan levels via CYP2D6 competition). Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Dextromethorphan.",
      answer: "Cough suppression (OTC), Major depressive disorder (as dextromethorphan-bupropion combination), Pseudobulbar affect (as dextromethorphan-quinidine), Treatment-resistant depression (off-label, investigational). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Dextromethorphan and how you would manage it.",
      answer: "Serotonin syndrome (with SSRIs, MAOIs, other serotonergics): Dextromethorphan is serotonergic — the SSRI + cough-syrup interaction is classic. Management: Read OTC labels; MAOI absolute contraindication.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Dextromethorphan require?",
      answer: "Response (combination MDD use) (At 2-6 weeks); Misuse review (OTC contexts) (In adolescent care)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Dextromethorphan that separates safe prescribers from unsafe ones.",
      answer: "The triple life: cough syrup by day, pseudobulbar-affect capsule by prescription, and the newest antidepressant mechanism by combination — one molecule, three careers.",
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
      checkpoint: "You now know what Dextromethorphan is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Dextromethorphan works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Dextromethorphan safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Dextromethorphan.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Dextromethorphan with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Dextromethorphan.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Cough in hours; antidepressant effect days-to-weeks (combination trials).",
    ],
    ifItWorks: [
      "Continue Dextromethorphan at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Dextromethorphan (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Dextromethorphan follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Cough (OTC)",
        starting: "15-30 mg up to four times daily",
        titration: "Short-term use",
        target: "30-120 mg/day",
        max: "120 mg/day (OTC labelling)",
      },
      {
        indication: "Depression (dextromethorphan-bupropion)",
        starting: "45/105 mg once daily × 3 days",
        titration: "Increase to twice daily (≥ 8 h apart)",
        target: "45/105 mg bd",
        max: "90/210 mg/day",
      },
    ],
    dosageForms: ["OTC cough syrups/lozenges", "Auvelity tablets 45/105 mg", "Nuedexta (with quinidine) 20/10 mg"],
    dosingTips: [
      "Ask every SSRI patient about cough-syrup use (serotonin syndrome).",
      "The Auvelity pairing is deliberate pharmacokinetics — never DIY it.",
      "Adolescent misuse awareness for syrup quantities.",
    ],
    overdose: [
      "Overdose with Dextromethorphan is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Dextromethorphan is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 3-30 hours (2D6-dependent — poor metabolisers hold it longer)..",
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
      "The newest antidepressant mechanism (with bupropion).",
      "Decades of OTC safety at label doses.",
      "Pseudobulbar-affect indication.",
    ],
    potentialDisadvantages: ["Serotonin-syndrome interaction surface.", "Misuse potential at high doses.", "2D6 variability.", "Combination product pricing."],
    primaryTargetSymptoms: ["Cough suppression", "Major depression (combination product)", "Pseudobulbar affect (with quinidine)"],
    pearls: [
      "The triple life: cough syrup by day, pseudobulbar-affect capsule by prescription, and the newest antidepressant mechanism by combination — one molecule, three careers.",
      "The 2D6 story: bupropion inhibits CYP2D6, raising dextromethorphan AND its active metabolite dextrorphan — the combination is pharmacokinetic engineering.",
      "The ketamine connection: NMDA antagonism with sigma-1 agonism — the glutamate-era antidepressant pharmacology at OTC prices.",
      "The adolescent misuse footnote: robo-tripping (dissociative syrup misuse) is the addiction-medicine reminder that OTC is not risk-free.",
      "The SSRI-syrup trap: serotonin syndrome from cough syrup on an SSRI — the OTC-labeling lesson.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
