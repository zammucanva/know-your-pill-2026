import type { Drug } from "../types";

/**
 * Ketamine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), ketamine monograph (book p. 60)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const ketamine: Drug = {
  /* ---- Identity ---- */
  slug: "ketamine",
  genericName: "Ketamine",
  brandNames: [
    "Ketalar",
    "Spravato (esketamine nasal — separate product)",
  ],
  drugClass: "nmda-antagonist",
  drugClassLabel: "NMDA Antidepressant",
  drugClassFullName: "NMDA Receptor Antagonist",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "NMDA Antagonists", "Ketamine"],
  /* ---- Hero / summary ---- */
  tagline: "The dissociative revolution — NMDA blockade that can lift severe depression within hours.",
  summary: "Ketamine is the dissociative anaesthetic whose NMDA-receptor antagonism (glutamate surge → AMPA → BDNF cascade) produces rapid antidepressant effects in treatment-resistant depression — often within hours, in patients who have failed everything else. Its psychiatric era spans off-label IV sub-anesthetic infusion protocols to the approved intranasal esketamine (with REMS) — alongside dissociation, blood pressure rises, and misuse potential as governing cautions.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Ketamine — from its molecular target (NMDA receptor (antagonist) → glutamate surge → AMPA receptor activation → BDNF/mTOR synaptogenesis) to clinical effect.",
    "List the FDA-approved and off-label uses of Ketamine.",
    "Predict the common and serious side effects of Ketamine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Ketamine.",
    "Compare Ketamine with other nmda antidepressants and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Ketamine blocks NMDA receptors on GABAergic interneurons, disinhibiting a glutamate surge whose AMPA-mediated cascade drives rapid synaptogenesis — an antidepressant mechanism measured in hours, not weeks.",
    molecularTarget: "NMDA receptor (antagonist) → glutamate surge → AMPA receptor activation → BDNF/mTOR synaptogenesis",
    effect: "Monoaminergic modulation producing the antidepressant effect described.",
    steps: [
      "Ketamine blocks NMDA receptors on GABAergic interneurons, disinhibiting a glutamate surge whose AMPA-mediated cascade drives rapid synaptogenesis — an antidepressant mechanism measured in hours, not weeks.",
      "Downstream receptor adaptation over 2-6 weeks translates acute monoamine change into clinical response.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 2-3 hours (IV; antidepressant effects outlast plasma by days). — see mechanism and prescriber sections.",
    halfLife: "2-3 hours (IV; antidepressant effects outlast plasma by days).",
    metabolism: "Hepatic CYP metabolism.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Ketamine",
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
  neurotransmitters: ["Glutamate", "GABA"],
  receptors: ["NMDA receptor (antagonist)", "AMPA receptor (indirect activation)"],
  brainRegionIds: ["prefrontal-cortex", "hippocampus", "nucleus-accumbens"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Treatment-resistant depression (IV, off-label)",
      status: "off-label",
      description: "0.5 mg/kg IV over 40 min — the standard infusion protocol; response within hours to days.",
    },
    {
      name: "Treatment-resistant depression (intranasal esketamine, approved)",
      status: "fda-approved",
      description: "Esketamine nasal spray with oral antidepressant — under REMS monitoring (2-hour observation, blood-pressure protocol).",
    },
    {
      name: "Major depression with acute suicidality (esketamine)",
      status: "fda-approved",
      description: "Rapid-onset indication for suicidal ideation in mood disorders.",
    },
    {
      name: "Anaesthesia (its first life)",
      status: "fda-approved",
      description: "Dissociative anaesthesia.",
    },
    {
      name: "Chronic pain (adjunct)",
      status: "off-label",
      description: "NMDA analgesia in neuropathic and pain-clinic settings.",
    },
    {
      name: "Obsessive-compulsive disorder (esketamine, off-label)",
      status: "off-label",
      description: "Selected use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Ketamine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dissociation and perceptual disturbance",
      frequency: "very-common",
      severity: "moderate",
      description: "The signature effect during and shortly after dosing — dream-like detachment, distortions.",
      management: "Monitoring setting (REMS for esketamine); settles within the observation window.",
    },
    {
      name: "Blood pressure rise",
      frequency: "very-common",
      severity: "moderate",
      description: "Sympathomimetic effect — systolic rises of 10-20 mmHg common during dosing.",
      management: "BP monitoring protocol; hold criteria; treat if sustained.",
    },
    {
      name: "Nausea and vomiting",
      frequency: "common",
      severity: "mild",
      description: "Post-dose effect.",
      management: "Antiemetic premedication.",
    },
    {
      name: "Dizziness and sedation",
      frequency: "common",
      severity: "mild",
      description: "During the dosing window.",
      management: "Observation period; no driving that day.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Post-dose.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Severe hypertension during dosing",
      frequency: "uncommon",
      severity: "severe",
      description: "Marked BP rises in vulnerable patients — the monitoring rationale.",
      management: "Protocol hold/treat criteria; defer uncontrolled hypertension.",
    },
    {
      name: "Bladder toxicity (chronic misuse)",
      frequency: "uncommon",
      severity: "severe",
      description: "The ketamine-misuse legacy: ulcerative cystitis with chronic high-dose use.",
      management: "Misuse screening; avoid in use-disorder history.",
    },
    {
      name: "Misuse and dependence",
      frequency: "uncommon",
      severity: "severe",
      description: "Reinforcing dissociative properties — diversion and misuse documented.",
      management: "Controlled setting; screening; no take-home supplies in psychiatric use.",
    },
    {
      name: "Persistent psychotomimetic effects",
      frequency: "rare",
      severity: "severe",
      description: "Prolonged dissociation in predisposed patients (psychosis history caution).",
      management: "Screen for psychosis; stop if persistent.",
    },
    {
      name: "Perception of memory/cognitive effects (repeated use)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Long-term data limited — frequency caps and monitoring.",
      management: "Interval limits; cognitive check at review.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Blood pressure (dosing protocol)",
      frequency: "Before, at 40 min, and at discharge every session",
      rationale: "The sympathomimetic rise — hold/treat criteria.",
    },
    {
      parameter: "Dissociation severity (observation window)",
      frequency: "Every session (2 h esketamine)",
      rationale: "The safety observation period.",
    },
    {
      parameter: "Suicidality and mood trajectory",
      frequency: "Between sessions",
      rationale: "The treatment target.",
    },
    {
      parameter: "Misuse and diversion review",
      frequency: "Ongoing",
      rationale: "Controlled-substance discipline.",
    },
  ],
  interactions: [
    {
      drug: "Benzodiazepines and lamotrigine",
      severity: "major",
      mechanism: "May blunt ketamine's antidepressant response (GABAergic/mGluR interference).",
      action: "Timing considerations; response awareness.",
    },
    {
      drug: "MAOIs",
      severity: "major",
      mechanism: "Sympathomimetic BP amplification.",
      action: "Caution; BP protocol.",
    },
    {
      drug: "Stimulants and sympathomimetics",
      severity: "major",
      mechanism: "BP additive effect.",
      action: "Monitor.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "moderate",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    summary: "Anaesthetic pregnancy use under specialist care; psychiatric use avoided/individualised — data limited.",
    lactation: "Avoid breastfeeding for 12-24 h after dosing (kinetics-based advice).",
  },
  renalAdjustment: "No specific psychiatric-dose adjustment (bladder caution in chronic misuse).",
  hepaticAdjustment: "Standard caution.",
  /* ---- Education ---- */
  patientExplanation: "Ketamine is an anaesthetic medicine that, in small doses, can lift severe depression remarkably fast — sometimes within hours rather than weeks. It works on the brain's glutamate system, a different pathway from standard antidepressants. Treatment is given in a clinic under observation because it briefly causes dream-like detachment and a rise in blood pressure; you cannot drive yourself home afterwards.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Ketamine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The hours-not-weeks fact: response measurable within 4-24 hours — the single most important pharmacological observation in 50 years of depression research.",
    "The mechanism journey: NMDA blockade → interneuron disinhibition → glutamate surge → AMPA → BDNF/mTOR → synaptogenesis — the cascade that rewrote the monoamine story.",
    "Dissociation is the tax, BP is the monitor, and the setting is the safety system: psychiatric ketamine happens in observed clinical spaces, never take-home.",
    "Esketamine's REMS: the regulatory answer to a drug that works fast but dissocates and raises BP — 2-hour observation every dose.",
    "Maintenance is the open question: effects last days-to-weeks; schedules stretch intervals response-guided rather than escalating doses.",
    "The infusion niche: for the suicidal Wednesday, the failed-everything Friday — ketamine is the circuit-breaker that buys time for slower drugs to work.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Ketamine: Ketamine blocks NMDA receptors on GABAergic interneurons, disinhibiting a glutamate surge whose AMPA-mediated cascade drives rapid synaptogenesis — an antidepressant mechanism measured in hours, not weeks.",
        "Uses of Ketamine: Treatment-resistant depression (IV, off-label); Treatment-resistant depression (intranasal esketamine, approved); Major depression with acute suicidality (esketamine); Anaesthesia (its first life)",
        "Mechanism: NMDA ANTAGONIST → glutamate surge → AMPA → BDNF/mTOR synaptogenesis — non-monoamine antidepressant action.",
        "Onset: HOURS (4-24 h) — the fastest antidepressant effect in medicine.",
      ],
      practical: [
        "Prescribe Ketamine for treatment-resistant depression (iv, off-label) with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure (dosing protocol) (Before, at 40 min, and at discharge every session); Dissociation severity (observation window) (Every session (2 h esketamine)); Suicidality and mood trajectory (Between sessions)",
      ],
      longAnswer: [
        "Ketamine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: NMDA ANTAGONIST → glutamate surge → AMPA → BDNF/mTOR synaptogenesis — non-monoamine antidepressant action.",
        "Onset: HOURS (4-24 h) — the fastest antidepressant effect in medicine.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: NMDA ANTAGONIST → glutamate surge → AMPA → BDNF/mTOR synaptogenesis — non-monoamine antidepressant action.",
        "Onset: HOURS (4-24 h) — the fastest antidepressant effect in medicine.",
        "Uses: treatment-resistant depression (IV off-label 0.5 mg/kg; esketamine nasal approved with REMS); acute suicidality (esketamine).",
        "Signature effects: dissociation + BP rise during dosing (monitoring mandatory).",
        "Misuse potential — clinical-setting use only; bladder toxicity in chronic misuse.",
        "Racemic IV vs S-enantiomer esketamine: two products, one pharmacology family.",
      ],
      pyqConcepts: [
        "Mechanism/target of Ketamine",
        "Key adverse effect: Severe hypertension during dosing",
        "Dosing and titration of Ketamine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Ketamine develops severe hypertension during dosing — next best step?",
        "When to choose Ketamine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: NMDA receptor (antagonist) → glutamate surge → AMPA receptor activation → BDNF/mTOR synaptogenesis",
        "Most common side effects: Dissociation and perceptual disturbance, Blood pressure rise, Nausea and vomiting",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The hours-not-weeks fact: response measurable within 4-24 hours — the single most important pharmacological observation in 50 years of depression research.",
        "The mechanism journey: NMDA blockade → interneuron disinhibition → glutamate surge → AMPA → BDNF/mTOR → synaptogenesis — the cascade that rewrote the monoamine story.",
        "Dissociation is the tax, BP is the monitor, and the setting is the safety system: psychiatric ketamine happens in observed clinical spaces, never take-home.",
        "Esketamine's REMS: the regulatory answer to a drug that works fast but dissocates and raises BP — 2-hour observation every dose.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: NMDA ANTAGONIST → glutamate surge → AMPA → BDNF/mTOR synaptogenesis — non-monoamine antidepressant action.",
    "Onset: HOURS (4-24 h) — the fastest antidepressant effect in medicine.",
    "Uses: treatment-resistant depression (IV off-label 0.5 mg/kg; esketamine nasal approved with REMS); acute suicidality (esketamine).",
    "Signature effects: dissociation + BP rise during dosing (monitoring mandatory).",
    "Misuse potential — clinical-setting use only; bladder toxicity in chronic misuse.",
    "Racemic IV vs S-enantiomer esketamine: two products, one pharmacology family.",
    "Durations short — maintenance schedules response-guided.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — treatment-resistant depression (iv, off-label)",
      presentation: "A patient presenting with treatment-resistant depression (iv, off-label), started on Ketamine.",
      history: "A adult patient presents with a treatment-resistant depression (iv, off-label) picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with treatment-resistant depression (iv, off-label); physical examination and baseline investigations are unremarkable.",
      diagnosis: "Treatment-resistant depression (IV, off-label). Differentials are considered and excluded clinically.",
      rationale: "Ketamine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (NMDA Antidepressant) with strong evidence in this condition.",
      management: "Started at 0.5 mg/kg IV over 40 minutes, titrated to 0.5 mg/kg × 6 (acute course) with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Ketamine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "NMDA Antidepressant vs related agents — orientation table",
      primaryDrug: "Ketamine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "NMDA receptor (antagonist) → glutamate surge → AMPA receptor activation → BDNF/mTOR synaptogenesis",
          comparisons: [
            {
              drug: "Ketamine",
              value: "Different mechanism — see its guide",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral to mild gain (agent-specific).",
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
          primaryValue: "The hours-not-weeks antidepressant — treatment-resistant depression's new lever",
          comparisons: [
            {
              drug: "Ketamine",
              value: "See its guide",
            },
          ],
        },
      ],
      takeaway: "Ketamine is compared here with related agents for orientation. Full comparison data lives in each drug's own guide — follow the links for the complete picture.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Ketamine reaches peak plasma concentration and begins acting at its molecular target (NMDA receptor (antagonist) → glutamate surge → AMPA receptor activation → BDNF/mTOR synaptogenesis). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (dissociation and perceptual disturbance, blood pressure rise, nausea and vomiting). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Antidepressant effect 4-24 hours; peak 24-72 hours; single-dose effect days-1-2 weeks.)",
      title: "Therapeutic effect builds",
      description: "Antidepressant effect 4-24 hours; peak 24-72 hours; single-dose effect days-1-2 weeks. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Ketamine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Ketamine take to work?",
      answer: "Antidepressant effect 4-24 hours; peak 24-72 hours; single-dose effect days-1-2 weeks.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Ketamine?",
      answer: "The most frequently reported effects are: Dissociation and perceptual disturbance, Blood pressure rise, Nausea and vomiting, Dizziness and sedation, Headache. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Ketamine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Ketamine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Ketamine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Ketamine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Ketamine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), ketamine monograph, p. 60",
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
        source: "FDA Prescribing Information for Ketalar (Ketamine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for ketamine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Ketamine",
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
      name: "Treatment-resistant depression (IV, off-label)",
      relationship: "off-label",
    },
    {
      name: "Treatment-resistant depression (intranasal esketamine, approved)",
      relationship: "primary",
    },
    {
      name: "Major depression with acute suicidality (esketamine)",
      relationship: "primary",
    },
    {
      name: "Anaesthesia (its first life)",
      relationship: "primary",
    },
    {
      name: "Chronic pain (adjunct)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Ketamine",
      type: "drug",
      href: "/drugs/ketamine",
      note: "The drug you're reading about",
    },
    {
      label: "NMDA Antidepressant",
      type: "class",
      href: "#mechanism",
      note: "NMDA Receptor Antagonist",
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
      label: "NMDA receptor (antagonist) → glutamate surge → AMPA receptor activation → BDNF/mTOR synaptogenesis",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Treatment-resistant depression (IV, off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Treatment-resistant depression (intranasal esketamine, approved)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Major depression with acute suicidality (esketamine)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Severe hypertension during dosing",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Bladder toxicity (chronic misuse)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Dissociation and perceptual disturbance",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Ketamine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The dissociative revolution — NMDA blockade that can lift severe depression within hours.",
    summary: "Ketamine is a prescription medicine used to treat treatment-resistant depression (iv, off-label). It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Ketamine is an anaesthetic medicine that, in small doses, can lift severe depression remarkably fast — sometimes within hours rather than weeks. It works on the brain's glutamate system, a different pathway from standard antidepressants. Treatment is given in a clinic under observation because it briefly causes dream-like detachment and a rise in blood pressure; you cannot drive yourself home afterwards.",
    sideEffects: "The most common side effects are: dissociation and perceptual disturbance, blood pressure rise, nausea and vomiting, dizziness and sedation, headache. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Severe hypertension during dosing and Bladder toxicity (chronic misuse). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure (dosing protocol) (before, at 40 min, and at discharge every session); dissociation severity (observation window) (every session (2 h esketamine)); suicidality and mood trajectory (between sessions). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Benzodiazepines and lamotrigine, MAOIs, Stimulants and sympathomimetics, Alcohol and CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Ketamine injection (anaesthetic strength)",
        manufacturer: "multiple + Jan Aushadhi-adjacent hospital supply",
        strengths: "vials",
      },
      {
        name: "Spravato (imported/limited)",
        manufacturer: "Janssen",
        strengths: "nasal",
      },
    ],
    typicalDoses: "IV 0.5 mg/kg over 40 min (TRD protocol); esketamine per REMS.",
    prescribingScenarios: [
      "Emerging IV-infusion clinics in private psychiatry.",
      "Esketamine at tertiary centres.",
      "Anaesthesia departments as source control.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "moderate",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Session BP protocol + 2-hour dissociation observation; misuse screening.",
    patientCounselling: [
      "Clinic-only administration — never take-home.",
      "No driving that day.",
      "BP and dream-like effects are expected and monitored.",
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
    familyName: "NMDA Antagonists",
    members: [
      {
        name: "Ketamine",
        slug: "ketamine",
        relationship: "This guide",
        distinguishing: "The hours-not-weeks antidepressant — treatment-resistant depression's new lever",
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
      question: "Which molecular target does Ketamine primarily act on?",
      options: [
        "NMDA receptor (antagonist) → glutamate surge → AMPA receptor activation → BDNF/mTOR synaptogenesis",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Ketamine acts primarily at NMDA receptor (antagonist) → glutamate surge → AMPA receptor activation → BDNF/mTOR synaptogenesis. Ketamine blocks NMDA receptors on GABAergic interneurons, disinhibiting a glutamate surge whose AMPA-mediated cascade drives rapid synaptogenesis — an antidepressant mechanism measured in hours, not weeks.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Ketamine?",
      options: ["Dissociation and perceptual disturbance", "Blood pressure rise", "Nausea and vomiting", "Dizziness and sedation"],
      correctIndex: 0,
      explanation: "Dissociation and perceptual disturbance — The signature effect during and shortly after dosing — dream-like detachment, distortions.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Ketamine for treatment-resistant depression (iv, off-label protocol)?",
      options: [
        "0.5 mg/kg × 6 (acute course)",
        "Protocol-defined",
        "0.5 mg/kg × 6 (acute course) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For treatment-resistant depression (iv, off-label protocol): start 0.5 mg/kg IV over 40 minutes, target 0.5 mg/kg × 6 (acute course), maximum Protocol-defined. Acute course: 2-3 infusions weekly × 2 weeks; response-guided maintenance at increasing intervals",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Ketamine in two sentences.",
      answer: "Ketamine blocks NMDA receptors on GABAergic interneurons, disinhibiting a glutamate surge whose AMPA-mediated cascade drives rapid synaptogenesis — an antidepressant mechanism measured in hours, not weeks. Net effect: Monoaminergic modulation producing the antidepressant effect described.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Ketamine.",
      answer: "Treatment-resistant depression (IV, off-label), Treatment-resistant depression (intranasal esketamine, approved), Major depression with acute suicidality (esketamine), Anaesthesia (its first life). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Ketamine and how you would manage it.",
      answer: "Severe hypertension during dosing: Marked BP rises in vulnerable patients — the monitoring rationale. Management: Protocol hold/treat criteria; defer uncontrolled hypertension.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Ketamine require?",
      answer: "Blood pressure (dosing protocol) (Before, at 40 min, and at discharge every session); Dissociation severity (observation window) (Every session (2 h esketamine)); Suicidality and mood trajectory (Between sessions); Misuse and diversion review (Ongoing)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Ketamine that separates safe prescribers from unsafe ones.",
      answer: "The hours-not-weeks fact: response measurable within 4-24 hours — the single most important pharmacological observation in 50 years of depression research.",
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
      checkpoint: "You now know what Ketamine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Ketamine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Ketamine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Ketamine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Ketamine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Ketamine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Antidepressant effect 4-24 hours; peak 24-72 hours; single-dose effect days-1-2 weeks.",
    ],
    ifItWorks: [
      "Continue Ketamine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Ketamine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Ketamine follow directly from its receptor and organ effects — predict them from the mechanism.",
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
        indication: "Treatment-resistant depression (IV, off-label protocol)",
        starting: "0.5 mg/kg IV over 40 minutes",
        titration: "Acute course: 2-3 infusions weekly × 2 weeks; response-guided maintenance at increasing intervals",
        target: "0.5 mg/kg × 6 (acute course)",
        max: "Protocol-defined",
      },
      {
        indication: "Esketamine nasal (approved, with REMS)",
        starting: "56 mg nasal day 1 (with oral AD)",
        titration: "56-84 mg twice weekly (weeks 1-4) → weekly (5-9) → weekly-biweekly maintenance",
        target: "56-84 mg per session",
        max: "Per REMS protocol",
      },
    ],
    dosageForms: [
      "IV vials (anaesthetic strength)",
      "Esketamine nasal spray device 28 mg/spray (Spravato)",
    ],
    dosingTips: [
      "The observation period is the prescription — never shortcut it.",
      "BP protocol with hold criteria at every session.",
      "No driving until the next day after any session.",
      "Interval-stretch maintenance beats dose-escalation.",
      "Screen for psychosis history and substance use before starting.",
    ],
    overdose: [
      "Overdose with Ketamine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Ketamine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 2-3 hours (IV; antidepressant effects outlast plasma by days)..",
      "Metabolism: Hepatic CYP metabolism..",
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
      "Hours-not-weeks onset.",
      "Works after multiple failures (the TRS niche).",
      "Suicidality relief speed.",
      "Non-monoamine mechanism — the research door it opened.",
    ],
    potentialDisadvantages: ["Dissociation and monitoring burden.", "BP rise every dose.", "Short duration — maintenance treadmill.", "Misuse/diversion potential.", "Long-term data limited."],
    primaryTargetSymptoms: [
      "Treatment-resistant depression",
      "Acute suicidal ideation",
      "Depressive episodes needing rapid bridge",
    ],
    pearls: [
      "The hours-not-weeks fact: response measurable within 4-24 hours — the single most important pharmacological observation in 50 years of depression research.",
      "The mechanism journey: NMDA blockade → interneuron disinhibition → glutamate surge → AMPA → BDNF/mTOR → synaptogenesis — the cascade that rewrote the monoamine story.",
      "Dissociation is the tax, BP is the monitor, and the setting is the safety system: psychiatric ketamine happens in observed clinical spaces, never take-home.",
      "Esketamine's REMS: the regulatory answer to a drug that works fast but dissocates and raises BP — 2-hour observation every dose.",
      "Maintenance is the open question: effects last days-to-weeks; schedules stretch intervals response-guided rather than escalating doses.",
      "The infusion niche: for the suicidal Wednesday, the failed-everything Friday — ketamine is the circuit-breaker that buys time for slower drugs to work.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
