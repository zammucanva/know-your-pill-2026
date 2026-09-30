import type { Drug } from "../types";

/**
 * Donepezil — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), donepezil monograph (book p. 37)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const donepezil: Drug = {
  /* ---- Identity ---- */
  slug: "donepezil",
  genericName: "Donepezil",
  brandNames: ["Aricept", "Aricept ODT", "Donep / Donecept (India)"],
  drugClass: "cholinesterase-inhibitor",
  drugClassLabel: "AChE Inhibitor",
  drugClassFullName: "Acetylcholinesterase Inhibitor",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Cognitive Enhancers", "Cholinesterase Inhibitors", "Donepezil"],
  /* ---- Hero / summary ---- */
  tagline: "The once-daily cholinesterase inhibitor — the dementia first-line.",
  summary: "Donepezil is the acetylcholinesterase inhibitor of choice in Alzheimer's disease: once-daily dosing (its practical advantage over rivastigmine and galantamine), dose-dependent efficacy on cognition and global function across mild-to-moderate and severe stages, and a clean adverse-effect profile dominated by cholinergic GI effects and vivid dreams. Bradycardia is the prescribing caution.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Donepezil — from its molecular target (Acetylcholinesterase (central inhibition)) to clinical effect.",
    "List the FDA-approved and off-label uses of Donepezil.",
    "Predict the common and serious side effects of Donepezil from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Donepezil.",
    "Compare Donepezil with other ache inhibitors and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Donepezil inhibits acetylcholinesterase in the cerebral cortex, raising synaptic acetylcholine — amplifying the residual cholinergic neurons of Alzheimer's disease.",
    molecularTarget: "Acetylcholinesterase (central inhibition)",
    effect: "Modulation of the described target with the agent's clinical effect.",
    steps: [
      "Donepezil inhibits acetylcholinesterase in the cerebral cortex, raising synaptic acetylcholine — amplifying the residual cholinergic neurons of Alzheimer's disease.",
      "The target engagement produces the clinical effect described.",
      "Onset and duration follow the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life About 70 hours (long — once-daily and slow washout). — see mechanism and prescriber sections.",
    halfLife: "About 70 hours (long — once-daily and slow washout).",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Donepezil",
        sublabel: "Cholinesterase inhibitor",
        variant: "inhibit",
      },
      {
        id: "ache",
        label: "Acetylcholinesterase",
        sublabel: "Enzyme that degrades ACh",
        variant: "target",
      },
      {
        id: "ach",
        label: "Acetylcholine",
        sublabel: "Synaptic levels rise",
        variant: "output",
      },
      {
        id: "cortex",
        label: "Cerebral cortex",
        sublabel: "Cholinergic deficit partially corrected",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "ache",
        label: "inhibits",
        type: "inhibit",
      },
      {
        from: "ache",
        to: "ach",
        label: "preserves",
        type: "stimulate",
      },
      {
        from: "ach",
        to: "cortex",
        label: "supports cognition",
      },
    ],
    caption: "Cholinesterase inhibition cannot replace lost cholinergic neurons, but amplifying remaining acetylcholine reliably modestly improves cognition and function in dementia.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Acetylcholine (ACh)"],
  receptors: [
    "Acetylcholinesterase (central inhibition)",
  ],
  brainRegionIds: ["hippocampus", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alzheimer's disease — mild to severe",
      status: "fda-approved",
      description: "The only cholinesterase inhibitor approved across all stages; modest but real cognitive and functional benefits.",
    },
    {
      name: "Dementia with Lewy bodies (symptomatic)",
      status: "guideline",
      description: "DLB patients often respond markedly to cholinesterase inhibition.",
    },
    {
      name: "Vascular and Parkinson's disease dementia (off-label)",
      status: "off-label",
      description: "Reasonable evidence and guideline support.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Donepezil must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea, diarrhoea, vomiting",
      frequency: "common",
      severity: "mild",
      description: "Cholinergic GI effects — the most common adverse effects.",
      management: "Take with evening meal; slow titration.",
    },
    {
      name: "Vivid dreams and nightmares",
      frequency: "common",
      severity: "mild",
      description: "Cholinergic REM enhancement — donepezil's famous signature.",
      management: "Morning dosing if dreams are distressing.",
    },
    {
      name: "Muscle cramps",
      frequency: "common",
      severity: "mild",
      description: "Cholinergic effect.",
      management: "Reassurance; quinine avoided.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "mild",
      description: "Related to the activating profile.",
      management: "Morning dosing.",
    },
    {
      name: "Anorexia and weight loss",
      frequency: "uncommon",
      severity: "moderate",
      description: "Cholinergic GI effect.",
      management: "Monitor weight.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Symptomatic bradycardia / heart block",
      frequency: "uncommon",
      severity: "severe",
      description: "Cholinergic cardiac conduction slowing — the prescribing caution.",
      management: "ECG and pulse checks; caution with beta-blockers/digoxin.",
    },
    {
      name: "Syncope",
      frequency: "uncommon",
      severity: "severe",
      description: "Partly bradycardic; falls result.",
      management: "Fall review; pulse lying/standing.",
    },
    {
      name: "GI bleeding (rare, NSAID-combined)",
      frequency: "rare",
      severity: "severe",
      description: "Cholinergic gastric acid effects.",
      management: "Caution with NSAIDs.",
    },
    {
      name: "Seizures (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Cholinergic proconvulsant reports.",
      management: "Caution in epilepsy.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Pulse (bradycardia)",
      frequency: "Baseline and every review",
      rationale: "The cardiac caution.",
    },
    {
      parameter: "Weight",
      frequency: "Periodically",
      rationale: "Cholinergic anorexia.",
    },
    {
      parameter: "Cognition and function scores",
      frequency: "Every 6 months",
      rationale: "Response tracking (MMSE/ADCS-ADL).",
    },
  ],
  interactions: [
    {
      drug: "Beta-blockers, digoxin, calcium channel blockers",
      severity: "major",
      mechanism: "Additive bradycardia/conduction slowing.",
      action: "Pulse and ECG monitoring.",
    },
    {
      drug: "Anticholinergics (including many bladder drugs and TCAs)",
      severity: "major",
      mechanism: "Pharmacodynamic antagonism — the two cancel out.",
      action: "Avoid combinations; review bladder drugs.",
    },
    {
      drug: "NSAIDs",
      severity: "moderate",
      mechanism: "GI bleeding risk amplified.",
      action: "Caution; PPI if unavoidable.",
    },
    {
      drug: "CYP2D6/3A4 inhibitors",
      severity: "moderate",
      mechanism: "Raise donepezil levels modestly.",
      action: "Awareness.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Not applicable clinically (dementia population); standard caution in any use.",
    lactation: "Unknown; not applicable.",
  },
  renalAdjustment: "No renal adjustment.",
  hepaticAdjustment: "No specific adjustment.",
  /* ---- Education ---- */
  patientExplanation: "Donepezil is the standard medicine for Alzheimer's dementia: it raises acetylcholine — a memory-related brain chemical that Alzheimer's depletes — by stopping its breakdown. It does not cure the disease but can hold function steadier for months. It is taken once a day at bedtime; its commonest effects are stomach upset and unusually vivid dreams, and your pulse will be checked because it can slow the heart.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Donepezil builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Once daily is the advantage: the only AChE inhibitor with true once-daily dosing at every strength.",
    "Bedtime dosing hides the cholinergic GI effects in sleep — but move to MORNING if vivid dreams wake the patient (the classic dosing dance).",
    "DLB responds dramatically to cholinesterase inhibition — the fluctuating-parkinsonian-hallucinating patient is the responder phenotype.",
    "The 23 mg dose: modest gain, more adverse effects — for selected severe patients only.",
    "Bradycardia is the quiet danger: pulse at every review, ECG if any conduction disease.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Donepezil: Donepezil inhibits acetylcholinesterase in the cerebral cortex, raising synaptic acetylcholine — amplifying the residual cholinergic neurons of Alzheimer's disease.",
        "Uses of Donepezil: Alzheimer's disease — mild to severe; Dementia with Lewy bodies (symptomatic); Vascular and Parkinson's disease dementia (off-label)",
        "Mechanism: central acetylcholinesterase inhibition → ↑ synaptic acetylcholine.",
        "Once daily; 5 → 10 mg (23 severe); bedtime default, morning if dreams.",
      ],
      practical: [
        "Prescribe Donepezil for alzheimer's disease — mild to severe with dose, timing, and duration.",
        "Outline the monitoring plan: Pulse (bradycardia) (Baseline and every review); Weight (Periodically); Cognition and function scores (Every 6 months)",
      ],
      longAnswer: [
        "Donepezil: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: central acetylcholinesterase inhibition → ↑ synaptic acetylcholine.",
        "Once daily; 5 → 10 mg (23 severe); bedtime default, morning if dreams.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: central acetylcholinesterase inhibition → ↑ synaptic acetylcholine.",
        "Once daily; 5 → 10 mg (23 severe); bedtime default, morning if dreams.",
        "Approved mild-to-SEVERE Alzheimer's (unique among AChEIs).",
        "Commonest adverse effects: GI cholinergic (nausea, diarrhoea), vivid dreams, cramps.",
        "Key caution: bradycardia/conduction — pulse and ECG vigilance.",
        "DLB and Parkinson's dementia: robust guideline use.",
      ],
      pyqConcepts: [
        "Mechanism/target of Donepezil",
        "Key adverse effect: Symptomatic bradycardia / heart block",
        "Dosing and titration of Donepezil",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Donepezil develops symptomatic bradycardia / heart block — next best step?",
        "When to choose Donepezil over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Acetylcholinesterase (central inhibition)",
        "Most common side effects: Nausea, diarrhoea, vomiting, Vivid dreams and nightmares, Muscle cramps",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Once daily is the advantage: the only AChE inhibitor with true once-daily dosing at every strength.",
        "Bedtime dosing hides the cholinergic GI effects in sleep — but move to MORNING if vivid dreams wake the patient (the classic dosing dance).",
        "DLB responds dramatically to cholinesterase inhibition — the fluctuating-parkinsonian-hallucinating patient is the responder phenotype.",
        "The 23 mg dose: modest gain, more adverse effects — for selected severe patients only.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: central acetylcholinesterase inhibition → ↑ synaptic acetylcholine.",
    "Once daily; 5 → 10 mg (23 severe); bedtime default, morning if dreams.",
    "Approved mild-to-SEVERE Alzheimer's (unique among AChEIs).",
    "Commonest adverse effects: GI cholinergic (nausea, diarrhoea), vivid dreams, cramps.",
    "Key caution: bradycardia/conduction — pulse and ECG vigilance.",
    "DLB and Parkinson's dementia: robust guideline use.",
    "Modest efficacy: months of function preserved, not cure.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — alzheimer's disease — mild to severe",
      presentation: "A patient presenting with alzheimer's disease — mild to severe, started on Donepezil.",
      history: "A adult patient presents with a alzheimer's disease — mild to severe picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with alzheimer's disease — mild to severe; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Alzheimer's disease — mild to severe. Differentials are considered and excluded clinically.",
      rationale: "Donepezil is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (AChE Inhibitor) with strong evidence in this condition.",
      management: "Started at 5 mg once daily at bedtime × 4 weeks, titrated to 10 mg/day with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Donepezil takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "AChE Inhibitor comparison — choosing within the class",
      primaryDrug: "Donepezil",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Acetylcholinesterase (central inhibition)",
          comparisons: [
            {
              drug: "Galantamine",
              value: "See full guide",
            },
            {
              drug: "Rivastigmine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "About 70 hours (long — once-daily and slow washout).",
          comparisons: [
            {
              drug: "Galantamine",
              value: "—",
            },
            {
              drug: "Rivastigmine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Not typically associated with weight change.",
          comparisons: [
            {
              drug: "Galantamine",
              value: "Not typically associated with weight change.",
            },
            {
              drug: "Rivastigmine",
              value: "Not typically associated with weight change.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Galantamine",
              value: "Agent-specific.",
            },
            {
              drug: "Rivastigmine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The once-daily AChE inhibitor — Alzheimer's first-line",
          comparisons: [
            {
              drug: "Galantamine",
              value: "The nicotinic-modulating AChE inhibitor",
            },
            {
              drug: "Rivastigmine",
              value: "The dual-inhibitor with the patch — and the DLB/PDD approval",
            },
          ],
        },
      ],
      takeaway: "All cholinesterase inhibitors share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Donepezil reaches peak plasma concentration and begins acting at its molecular target (Acetylcholinesterase (central inhibition)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (nausea, diarrhoea, vomiting, vivid dreams and nightmares, muscle cramps). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Cognitive benefit over weeks-months; titration steps at 4-week intervals.)",
      title: "Therapeutic effect builds",
      description: "Cognitive benefit over weeks-months; titration steps at 4-week intervals. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Donepezil is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Donepezil take to work?",
      answer: "Cognitive benefit over weeks-months; titration steps at 4-week intervals.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Donepezil?",
      answer: "The most frequently reported effects are: Nausea, diarrhoea, vomiting, Vivid dreams and nightmares, Muscle cramps, Insomnia, Anorexia and weight loss. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Donepezil suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Donepezil habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Donepezil exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Donepezil during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Donepezil may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE TA217 (Alzheimer's Disease); AA AD Diagnostic Guidelines",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), donepezil monograph, p. 37",
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
        source: "FDA Prescribing Information for Aricept (Donepezil)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for donepezil — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Donepezil",
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
      name: "Galantamine",
      slug: "galantamine",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
    {
      name: "Rivastigmine",
      slug: "rivastigmine",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
    {
      name: "Tacrine",
      slug: "tacrine",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
  ],
  relatedConditions: [
    {
      name: "Alzheimer's disease — mild to severe",
      relationship: "primary",
    },
    {
      name: "Dementia with Lewy bodies (symptomatic)",
      relationship: "alternative",
    },
    {
      name: "Vascular and Parkinson's disease dementia (off-label)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Donepezil",
      type: "drug",
      href: "/drugs/donepezil",
      note: "The drug you're reading about",
    },
    {
      label: "AChE Inhibitor",
      type: "class",
      href: "#mechanism",
      note: "Acetylcholinesterase Inhibitor",
    },
    {
      label: "Acetylcholine (ACh)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Acetylcholinesterase (central inhibition)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Alzheimer's disease — mild to severe",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Dementia with Lewy bodies (symptomatic)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Vascular and Parkinson's disease dementia (off-label)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Symptomatic bradycardia / heart block",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Syncope",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea, diarrhoea, vomiting",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Donepezil",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The once-daily cholinesterase inhibitor — the dementia first-line.",
    summary: "Donepezil is a prescription medicine used to treat alzheimer's disease — mild to severe. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Donepezil is the standard medicine for Alzheimer's dementia: it raises acetylcholine — a memory-related brain chemical that Alzheimer's depletes — by stopping its breakdown. It does not cure the disease but can hold function steadier for months. It is taken once a day at bedtime; its commonest effects are stomach upset and unusually vivid dreams, and your pulse will be checked because it can slow the heart.",
    sideEffects: "The most common side effects are: nausea, diarrhoea, vomiting, vivid dreams and nightmares, muscle cramps, insomnia, anorexia and weight loss. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Symptomatic bradycardia / heart block and Syncope. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: pulse (bradycardia) (baseline and every review); weight (periodically); cognition and function scores (every 6 months). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Beta-blockers, digoxin, calcium channel blockers, Anticholinergics (including many bladder drugs and TCAs), NSAIDs, CYP2D6/3A4 inhibitors. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Donep",
        manufacturer: "Alkem",
        strengths: "5, 10 mg",
      },
      {
        name: "Donecept",
        manufacturer: "Cipla",
        strengths: "5, 10 mg",
      },
      {
        name: "Donepezil generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "5, 10 mg",
      },
    ],
    typicalDoses: "5 mg nocte → 10 mg after 4 weeks.",
    prescribingScenarios: [
      "Memory clinics nationwide — the default dementia drug.",
      "DLB and Parkinson's dementia co-management with neurology.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Pulse every visit; weight; 6-monthly cognition scores.",
    patientCounselling: ["Bedtime dosing with food.", "Vivid dreams are expected and harmless.", "Report fainting or a slow pulse."],
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
    note: "Generic donepezil stocked in many Jan Aushadhi kendras.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Cholinesterase Inhibitors",
    members: [
      {
        name: "Donepezil",
        slug: "donepezil",
        relationship: "This guide",
        distinguishing: "The once-daily AChE inhibitor — Alzheimer's first-line",
      },
      {
        name: "Galantamine",
        slug: "galantamine",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The nicotinic-modulating AChE inhibitor",
      },
      {
        name: "Rivastigmine",
        slug: "rivastigmine",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The dual-inhibitor with the patch — and the DLB/PDD approval",
      },
      {
        name: "Tacrine",
        slug: "tacrine",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The hepatotoxic QID prototype — the first Alzheimer's ChEI",
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
      question: "Which molecular target does Donepezil primarily act on?",
      options: [
        "Acetylcholinesterase (central inhibition)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Donepezil acts primarily at Acetylcholinesterase (central inhibition). Donepezil inhibits acetylcholinesterase in the cerebral cortex, raising synaptic acetylcholine — amplifying the residual cholinergic neurons of Alzheimer's disease.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Donepezil?",
      options: ["Nausea, diarrhoea, vomiting", "Vivid dreams and nightmares", "Muscle cramps", "Insomnia"],
      correctIndex: 0,
      explanation: "Nausea, diarrhoea, vomiting — Cholinergic GI effects — the most common adverse effects.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Donepezil for alzheimer's disease?",
      options: ["10 mg/day", "23 mg/day (severe, cautious)", "10 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For alzheimer's disease: start 5 mg once daily at bedtime × 4 weeks, target 10 mg/day, maximum 23 mg/day (severe, cautious). Increase to 10 mg; 23 mg for severe in selected patients",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Donepezil in two sentences.",
      answer: "Donepezil inhibits acetylcholinesterase in the cerebral cortex, raising synaptic acetylcholine — amplifying the residual cholinergic neurons of Alzheimer's disease. Net effect: Modulation of the described target with the agent's clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Donepezil.",
      answer: "Alzheimer's disease — mild to severe, Dementia with Lewy bodies (symptomatic), Vascular and Parkinson's disease dementia (off-label). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Donepezil and how you would manage it.",
      answer: "Symptomatic bradycardia / heart block: Cholinergic cardiac conduction slowing — the prescribing caution. Management: ECG and pulse checks; caution with beta-blockers/digoxin.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Donepezil require?",
      answer: "Pulse (bradycardia) (Baseline and every review); Weight (Periodically); Cognition and function scores (Every 6 months)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Donepezil that separates safe prescribers from unsafe ones.",
      answer: "Once daily is the advantage: the only AChE inhibitor with true once-daily dosing at every strength.",
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
      checkpoint: "You now know what Donepezil is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Donepezil works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Donepezil safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Donepezil.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Donepezil with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Donepezil.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Cognitive benefit over weeks-months; titration steps at 4-week intervals.",
    ],
    ifItWorks: [
      "Continue Donepezil at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Donepezil (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Donepezil follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Not typically associated with weight change.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Alzheimer's disease",
        starting: "5 mg once daily at bedtime × 4 weeks",
        titration: "Increase to 10 mg; 23 mg for severe in selected patients",
        target: "10 mg/day",
        max: "23 mg/day (severe, cautious)",
      },
    ],
    dosageForms: ["Tablets 5, 10, 23 mg", "Orally disintegrating tablets"],
    dosingTips: [
      "Bedtime default; switch to morning for distressing dreams.",
      "4-week titration steps.",
      "Pulse at every review.",
      "Stop or reassess when swallowing or function is lost entirely.",
    ],
    overdose: [
      "Overdose with Donepezil is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Donepezil is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: About 70 hours (long — once-daily and slow washout)..",
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
    potentialAdvantages: ["Once daily; all-stage approval.", "Modest, real functional benefit.", "Cheap generics."],
    potentialDisadvantages: ["Cholinergic GI effects and dreams.", "Bradycardia caution.", "Disease-modifying effect: none."],
    primaryTargetSymptoms: [
      "Cognition and global function in Alzheimer's",
      "DLB symptoms",
    ],
    pearls: [
      "Once daily is the advantage: the only AChE inhibitor with true once-daily dosing at every strength.",
      "Bedtime dosing hides the cholinergic GI effects in sleep — but move to MORNING if vivid dreams wake the patient (the classic dosing dance).",
      "DLB responds dramatically to cholinesterase inhibition — the fluctuating-parkinsonian-hallucinating patient is the responder phenotype.",
      "The 23 mg dose: modest gain, more adverse effects — for selected severe patients only.",
      "Bradycardia is the quiet danger: pulse at every review, ECG if any conduction disease.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
