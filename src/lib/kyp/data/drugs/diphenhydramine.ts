import type { Drug } from "../types";

/**
 * Diphenhydramine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), diphenhydramine monograph (book p. 35)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const diphenhydramine: Drug = {
  /* ---- Identity ---- */
  slug: "diphenhydramine",
  genericName: "Diphenhydramine",
  brandNames: ["Benadryl", "Diphenhydramine (generic)"],
  drugClass: "antihistamine",
  drugClassLabel: "Antihistamine",
  drugClassFullName: "Sedating Antihistamine",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Antihistamines", "Diphenhydramine"],
  /* ---- Hero / summary ---- */
  tagline: "The ubiquitous sedating antihistamine — OTC sleep aid, EPS rescue, and anticholinergic cautionary tale.",
  summary: "Diphenhydramine is the first-generation antihistamine found in every medicine cabinet: an H1 blocker with brain-penetrant sedation used OTC for insomnia and allergies, and by prescription as the acute-dystonia rescue drug (IV/IM) alongside its oral antihistamine roles. Its anticholinergic burden in the elderly, abuse-tolerance ceiling as a hypnotic, and confusion/urinary retention risks define its modern cautions; as an EPS antidote it remains an emergency-department classic.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Diphenhydramine — from its molecular target (H1 histamine receptor (first-generation antagonist); muscarinic (anticholinergic) effects at therapeutic doses) to clinical effect.",
    "List the FDA-approved and off-label uses of Diphenhydramine.",
    "Predict the common and serious side effects of Diphenhydramine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Diphenhydramine.",
    "Compare Diphenhydramine with other antihistamines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Diphenhydramine blocks central H1 receptors (sedation) with clinically meaningful antimuscarinic effects — sedation for sleep and allergy, anticholinergic blockade for acute dystonia rescue.",
    molecularTarget: "H1 histamine receptor (first-generation antagonist); muscarinic (anticholinergic) effects at therapeutic doses",
    effect: "Target engagement producing the described clinical effect.",
    steps: [
      "Diphenhydramine blocks central H1 receptors (sedation) with clinically meaningful antimuscarinic effects — sedation for sleep and allergy, anticholinergic blockade for acute dystonia rescue.",
      "The target engagement translates into the clinical effect.",
      "Practical use follows the half-life and formulation.",
    ],
    pharmacokinetics: "Orally administered; peak plasma concentration within hours of dosing. Half-life 4-9 hours. — see mechanism and prescriber sections.",
    halfLife: "4-9 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Diphenhydramine",
        sublabel: "H1 antihistamine",
        variant: "inhibit",
      },
      {
        id: "h1",
        label: "H1 receptor",
        sublabel: "Histamine receptor in cortex",
        variant: "target",
      },
      {
        id: "wake",
        label: "Histaminergic wake drive",
        sublabel: "Reduced",
        variant: "process",
      },
      {
        id: "effect",
        label: "Sedation + anxiolysis",
        sublabel: "Not an anxiolytic receptor target per se — sedation does the work",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "h1",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "h1",
        to: "wake",
        label: "dampens",
      },
      {
        from: "wake",
        to: "effect",
        label: "produces",
      },
    ],
    caption: "Antihistamine anxiolysis is really antihistamine sedation — effective short-term, but tolerance develops and next-day grogginess is common.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Histamine", "Acetylcholine (ACh)"],
  receptors: [
    "H1 receptor (antagonist)",
    "Muscarinic receptors (antagonism — adverse and therapeutic)",
  ],
  brainRegionIds: ["prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Allergic rhinitis, urticaria, allergic reactions",
      status: "fda-approved",
      description: "The original indication.",
    },
    {
      name: "Acute dystonic reactions and drug-induced parkinsonism (adjunct)",
      status: "guideline",
      description: "IV/IM diphenhydramine reverses acute dystonia within minutes — the emergency classic.",
    },
    {
      name: "Insomnia (short-term, OTC)",
      status: "fda-approved",
      description: "Sedation used deliberately — tolerance builds fast.",
    },
    {
      name: "Motion sickness and nausea",
      status: "fda-approved",
      description: "Antihistamine antivertigo effect.",
    },
    {
      name: "Extrapyramidal reactions from antipsychotics",
      status: "guideline",
      description: "Anticholinergic rescue for EPS.",
    },
    {
      name: "Parkinsonism (drug-induced, adjunct)",
      status: "off-label",
      description: "Anticholinergic pathway.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Diphenhydramine must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "The intended effect that becomes next-day impairment.",
      management: "Night dosing; short courses.",
    },
    {
      name: "Dry mouth, constipation, urinary retention",
      frequency: "common",
      severity: "moderate",
      description: "Anticholinergic effects — amplified in the elderly.",
      management: "Avoid in elderly cognitive impairment; hydrate.",
    },
    {
      name: "Confusion (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Anticholinergic delirium — the classic geriatric adverse effect.",
      management: "Avoid in over-65s; delirium review.",
    },
    {
      name: "Tolerance to hypnotic effect",
      frequency: "common",
      severity: "moderate",
      description: "Sleep benefit fades within days-to-weeks of nightly use.",
      management: "Intermittent use only.",
    },
    {
      name: "Next-morning grogginess",
      frequency: "common",
      severity: "moderate",
      description: "Longer effect than intended.",
      management: "Dose timing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Anticholinergic delirium (elderly, overdose)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Confusion, agitation, hyperthermia, urinary retention — full antimuscarinic toxicity.",
      management: "Avoid in elderly; supportive care; physostigmine rarely.",
    },
    {
      name: "Falls and fractures (elderly)",
      frequency: "common",
      severity: "severe",
      description: "Night sedation in fall-prone patients.",
      management: "Avoid; hazard review.",
    },
    {
      name: "Paradoxical excitation (children, elderly)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Agitation instead of sedation.",
      management: "Stop.",
    },
    {
      name: "Seizures (overdose)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Massive overdose lowers threshold.",
      management: "Emergency management.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Anticholinergic burden audit (elderly)",
      frequency: "At prescribing",
      rationale: "The cumulative delirium risk.",
    },
  ],
  interactions: [
    {
      drug: "Other anticholinergics (bladder drugs, TCAs, cyclobenzaprine, some antipsychotics)",
      severity: "major",
      mechanism: "Cumulative anticholinergic burden — delirium, ileus.",
      action: "Audit the whole list; avoid in elderly.",
    },
    {
      drug: "Other sedatives and alcohol",
      severity: "major",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
    {
      drug: "MAOIs",
      severity: "major",
      mechanism: "Prolonged/heightened anticholinergic effect.",
      action: "Avoid.",
    },
  ],
  pregnancy: {
    legacyCategory: "B",
    summary: "Long antihistamine pregnancy record without teratogenic signal — short-course use acceptable when needed.",
    lactation: "Excreted in milk — infant sedation; caution or avoid.",
  },
  renalAdjustment: "Reduce dose in renal impairment (some markets).",
  hepaticAdjustment: "Standard caution.",
  /* ---- Education ---- */
  patientExplanation: "Diphenhydramine is the antihistamine in most over-the-counter sleep and allergy products: it causes drowsiness (used for both sleep and allergies) and it is also given by injection in hospitals to reverse sudden muscle spasm reactions from certain medicines. In older people it can cause confusion and should generally be avoided.",
  patientEducationPoints: [
    "Take exactly as prescribed — same time each day.",
    "Do not stop suddenly; discuss any change with your doctor first.",
    "Report persistent or worrying side effects early.",
    "Benefit from Diphenhydramine builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The emergency classic: IV diphenhydramine reverses an acute dystonia in minutes — the drug that ends the oculogyric crisis on camera.",
    "The anticholinergic paradox: an OTC sleep aid that causes delirium in exactly the population that buys it — Beers-criteria caution in over-65s.",
    "Tolerance is fast: nightly use as a hypnotic is a losing game within 1-2 weeks.",
    "The abuse-tolerance footnote: massive-dose misuse for deliriant effects exists — the anticholinergic ceiling as a hazard.",
    "Hidden in everything: combination cold/flu products — the accidental double-dose patients never counted.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Diphenhydramine: Diphenhydramine blocks central H1 receptors (sedation) with clinically meaningful antimuscarinic effects — sedation for sleep and allergy, anticholinergic blockade for acute dystonia rescue.",
        "Uses of Diphenhydramine: Allergic rhinitis, urticaria, allergic reactions; Acute dystonic reactions and drug-induced parkinsonism (adjunct); Insomnia (short-term, OTC); Motion sickness and nausea",
        "Mechanism: first-generation H1 antagonist + clinically significant ANTICHOLINERGIC effects.",
        "Uses: allergy, insomnia (short-term), motion sickness, and ACUTE DYSTONIA rescue (IV).",
      ],
      practical: [
        "Prescribe Diphenhydramine for allergic rhinitis, urticaria, allergic reactions with dose, timing, and duration.",
        "Outline the monitoring plan: Anticholinergic burden audit (elderly) (At prescribing)",
      ],
      longAnswer: [
        "Diphenhydramine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: first-generation H1 antagonist + clinically significant ANTICHOLINERGIC effects.",
        "Uses: allergy, insomnia (short-term), motion sickness, and ACUTE DYSTONIA rescue (IV).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: first-generation H1 antagonist + clinically significant ANTICHOLINERGIC effects.",
        "Uses: allergy, insomnia (short-term), motion sickness, and ACUTE DYSTONIA rescue (IV).",
        "Elderly: anticholinergic delirium and falls — avoid (Beers criteria).",
        "Tolerance to hypnotic effect within 1-2 weeks of nightly use.",
        "The dystonia drug: 25-50 mg IV reverses antipsychotic-induced dystonia in minutes.",
        "Overdose: anticholinergic toxicity (hot as a hare, dry as a bone, mad as a hatter).",
      ],
      pyqConcepts: [
        "Mechanism/target of Diphenhydramine",
        "Key adverse effect: Anticholinergic delirium (elderly, overdose)",
        "Dosing and titration of Diphenhydramine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Diphenhydramine develops anticholinergic delirium (elderly, overdose) — next best step?",
        "When to choose Diphenhydramine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: H1 histamine receptor (first-generation antagonist); muscarinic (anticholinergic) effects at therapeutic doses",
        "Most common side effects: Sedation and drowsiness, Dry mouth, constipation, urinary retention, Confusion (elderly)",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The emergency classic: IV diphenhydramine reverses an acute dystonia in minutes — the drug that ends the oculogyric crisis on camera.",
        "The anticholinergic paradox: an OTC sleep aid that causes delirium in exactly the population that buys it — Beers-criteria caution in over-65s.",
        "Tolerance is fast: nightly use as a hypnotic is a losing game within 1-2 weeks.",
        "The abuse-tolerance footnote: massive-dose misuse for deliriant effects exists — the anticholinergic ceiling as a hazard.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: first-generation H1 antagonist + clinically significant ANTICHOLINERGIC effects.",
    "Uses: allergy, insomnia (short-term), motion sickness, and ACUTE DYSTONIA rescue (IV).",
    "Elderly: anticholinergic delirium and falls — avoid (Beers criteria).",
    "Tolerance to hypnotic effect within 1-2 weeks of nightly use.",
    "The dystonia drug: 25-50 mg IV reverses antipsychotic-induced dystonia in minutes.",
    "Overdose: anticholinergic toxicity (hot as a hare, dry as a bone, mad as a hatter).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — allergic rhinitis, urticaria, allergic reactions",
      presentation: "A patient presenting with allergic rhinitis, urticaria, allergic reactions, started on Diphenhydramine.",
      history: "A adult patient presents with a allergic rhinitis, urticaria, allergic reactions picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with allergic rhinitis, urticaria, allergic reactions; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Allergic rhinitis, urticaria, allergic reactions. Differentials are considered and excluded clinically.",
      rationale: "Diphenhydramine is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Antihistamine) with strong evidence in this condition.",
      management: "Started at 25-50 mg at bedtime, titrated to 25-50 mg with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Diphenhydramine takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Antihistamine comparison — choosing within the class",
      primaryDrug: "Diphenhydramine",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "H1 histamine receptor (first-generation antagonist); muscarinic (anticholinergic) effects at therapeutic doses",
          comparisons: [
            {
              drug: "Hydroxyzine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "4-9 hours.",
          comparisons: [
            {
              drug: "Hydroxyzine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Weight neutral.",
          comparisons: [
            {
              drug: "Hydroxyzine",
              value: "Weight neutral.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Agent-specific.",
          comparisons: [
            {
              drug: "Hydroxyzine",
              value: "Agent-specific.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The OTC sedative + the EPS rescue — and the anticholinergic caution",
          comparisons: [
            {
              drug: "Hydroxyzine",
              value: "The antihistamine anxiolytic — benzo-sparing sedation",
            },
          ],
        },
      ],
      takeaway: "All antihistamines share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Diphenhydramine reaches peak plasma concentration and begins acting at its molecular target (H1 histamine receptor (first-generation antagonist); muscarinic (anticholinergic) effects at therapeutic doses). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, dry mouth, constipation, urinary retention, confusion (elderly)). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (Sedation 20-30 min; IV dystonia reversal 5-10 min.)",
      title: "Therapeutic effect builds",
      description: "Sedation 20-30 min; IV dystonia reversal 5-10 min. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Diphenhydramine is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Diphenhydramine take to work?",
      answer: "Sedation 20-30 min; IV dystonia reversal 5-10 min.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Diphenhydramine?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Dry mouth, constipation, urinary retention, Confusion (elderly), Tolerance to hypnotic effect, Next-morning grogginess. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Diphenhydramine suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Diphenhydramine habit-forming?",
      answer: "Not considered habit-forming.. However, every patient should take Diphenhydramine exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Diphenhydramine during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Diphenhydramine may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG113 (Anxiety); BNF Guidance",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), diphenhydramine monograph, p. 35",
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
        source: "FDA Prescribing Information for Benadryl (Diphenhydramine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for diphenhydramine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Diphenhydramine",
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
      name: "Hydroxyzine",
      slug: "hydroxyzine",
      drugClass: "Antihistamine",
      relationship: "Same class (Antihistamine)",
    },
  ],
  relatedConditions: [
    {
      name: "Allergic rhinitis, urticaria, allergic reactions",
      relationship: "primary",
    },
    {
      name: "Acute dystonic reactions and drug-induced parkinsonism (adjunct)",
      relationship: "alternative",
    },
    {
      name: "Insomnia (short-term, OTC)",
      relationship: "primary",
    },
    {
      name: "Motion sickness and nausea",
      relationship: "primary",
    },
    {
      name: "Extrapyramidal reactions from antipsychotics",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Diphenhydramine",
      type: "drug",
      href: "/drugs/diphenhydramine",
      note: "The drug you're reading about",
    },
    {
      label: "Antihistamine",
      type: "class",
      href: "#mechanism",
      note: "Sedating Antihistamine",
    },
    {
      label: "Histamine",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Acetylcholine (ACh)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "H1 histamine receptor (first-generation antagonist); muscarinic (anticholinergic) effects at therapeutic doses",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Allergic rhinitis, urticaria, allergic reactions",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Acute dystonic reactions and drug-induced parkinsonism (adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Insomnia (short-term, OTC)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Anticholinergic delirium (elderly, overdose)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Falls and fractures (elderly)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and drowsiness",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Diphenhydramine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The ubiquitous sedating antihistamine — OTC sleep aid, EPS rescue, and anticholinergic cautionary tale.",
    summary: "Diphenhydramine is a prescription medicine used to treat allergic rhinitis, urticaria, allergic reactions. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Diphenhydramine is the antihistamine in most over-the-counter sleep and allergy products: it causes drowsiness (used for both sleep and allergies) and it is also given by injection in hospitals to reverse sudden muscle spasm reactions from certain medicines. In older people it can cause confusion and should generally be avoided.",
    sideEffects: "The most common side effects are: sedation and drowsiness, dry mouth, constipation, urinary retention, confusion (elderly), tolerance to hypnotic effect, next-morning grogginess. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Anticholinergic delirium (elderly, overdose) and Falls and fractures (elderly). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: anticholinergic burden audit (elderly) (at prescribing). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other anticholinergics (bladder drugs, TCAs, cyclobenzaprine, some antipsychotics), Other sedatives and alcohol, MAOIs. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Benadryl",
        manufacturer: "J&J legacy",
        strengths: "elixir, capsules",
      },
      {
        name: "Diphenhydramine generic",
        manufacturer: "multiple",
        strengths: "25, 50 mg; injection",
      },
    ],
    typicalDoses: "Sleep 25-50 mg nocte; dystonia 25-50 mg IV/IM.",
    prescribingScenarios: [
      "The ubiquitous OTC sedative.",
      "Emergency dystonia rescue nationwide.",
      "The classic anticholinergic-burden teaching drug.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Anticholinergic burden audit in elderly.",
    patientCounselling: [
      "Not for regular nightly sleep use.",
      "Elderly: confusion risk — avoid.",
      "Check cold-remedy labels for hidden doses.",
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
    familyName: "Antihistamines",
    members: [
      {
        name: "Diphenhydramine",
        slug: "diphenhydramine",
        relationship: "This guide",
        distinguishing: "The OTC sedative + the EPS rescue — and the anticholinergic caution",
      },
      {
        name: "Hydroxyzine",
        slug: "hydroxyzine",
        relationship: "Same class (Antihistamine)",
        distinguishing: "The antihistamine anxiolytic — benzo-sparing sedation",
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
      question: "Which molecular target does Diphenhydramine primarily act on?",
      options: [
        "H1 histamine receptor (first-generation antagonist); muscarinic (anticholinergic) effects at therapeutic doses",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Diphenhydramine acts primarily at H1 histamine receptor (first-generation antagonist); muscarinic (anticholinergic) effects at therapeutic doses. Diphenhydramine blocks central H1 receptors (sedation) with clinically meaningful antimuscarinic effects — sedation for sleep and allergy, anticholinergic blockade for acute dystonia rescue.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Diphenhydramine?",
      options: [
        "Sedation and drowsiness",
        "Dry mouth, constipation, urinary retention",
        "Confusion (elderly)",
        "Tolerance to hypnotic effect",
      ],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — The intended effect that becomes next-day impairment.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Diphenhydramine for insomnia (short-term)?",
      options: ["25-50 mg", "50 mg", "25-50 mg (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For insomnia (short-term): start 25-50 mg at bedtime, target 25-50 mg, maximum 50 mg. Intermittent use preferred",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Diphenhydramine in two sentences.",
      answer: "Diphenhydramine blocks central H1 receptors (sedation) with clinically meaningful antimuscarinic effects — sedation for sleep and allergy, anticholinergic blockade for acute dystonia rescue. Net effect: Target engagement producing the described clinical effect.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Diphenhydramine.",
      answer: "Allergic rhinitis, urticaria, allergic reactions, Acute dystonic reactions and drug-induced parkinsonism (adjunct), Insomnia (short-term, OTC), Motion sickness and nausea. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Diphenhydramine and how you would manage it.",
      answer: "Anticholinergic delirium (elderly, overdose): Confusion, agitation, hyperthermia, urinary retention — full antimuscarinic toxicity. Management: Avoid in elderly; supportive care; physostigmine rarely.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Diphenhydramine require?",
      answer: "Anticholinergic burden audit (elderly) (At prescribing)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Diphenhydramine that separates safe prescribers from unsafe ones.",
      answer: "The emergency classic: IV diphenhydramine reverses an acute dystonia in minutes — the drug that ends the oculogyric crisis on camera.",
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
      checkpoint: "You now know what Diphenhydramine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Diphenhydramine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Diphenhydramine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Diphenhydramine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Diphenhydramine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Diphenhydramine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Sedation 20-30 min; IV dystonia reversal 5-10 min.",
    ],
    ifItWorks: [
      "Continue Diphenhydramine at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Diphenhydramine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Diphenhydramine follow directly from its receptor and organ effects — predict them from the mechanism.",
    ],
    sideEffectManagement: [
      "Wait (many effects settle in 1–2 weeks).",
      "Reduce the dose.",
      "Switch if dose adjustment fails.",
    ],
    sideEffectRescue: [
      "Dose reduction or timing change before discontinuation.",
    ],
    weightGain: "Weight neutral.",
    sedation: "Agent-specific.",
    dosing: [
      {
        indication: "Insomnia (short-term)",
        starting: "25-50 mg at bedtime",
        titration: "Intermittent use preferred",
        target: "25-50 mg",
        max: "50 mg",
      },
      {
        indication: "Acute dystonia (IV/IM)",
        starting: "25-50 mg IV/IM",
        titration: "Repeat after 15-30 min if needed",
        target: "25-50 mg per episode",
        max: "100 mg/day injectable protocols",
      },
      {
        indication: "Allergic reactions",
        starting: "25-50 mg every 4-6 h",
        titration: "PRN use",
        target: "25-50 mg per dose",
        max: "300 mg/day",
      },
    ],
    dosageForms: ["Capsules/tablets 25, 50 mg", "Injection 10-50 mg/mL", "Topical (itch)", "Syrup"],
    dosingTips: [
      "Avoid in over-65s for sleep — the delirium risk.",
      "Intermittent use only as a hypnotic.",
      "Check combination cold products for hidden doses.",
      "IV for dystonia: 25-50 mg, watch the minutes tick.",
    ],
    overdose: [
      "Overdose with Diphenhydramine is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Diphenhydramine is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: ["Half-life: 4-9 hours..", "Metabolism: Hepatic.."],
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
      "The dystonia rescue of record.",
      "Cheap, ubiquitous, OTC availability.",
      "Allergy + sleep + motion sickness coverage.",
    ],
    potentialDisadvantages: [
      "Anticholinergic delirium risk in elderly.",
      "Rapid tolerance as a hypnotic.",
      "Falls in older patients.",
      "Abuse/misuse potential.",
    ],
    primaryTargetSymptoms: ["Acute dystonia (IV)", "Short-term insomnia", "Allergic symptoms", "Motion sickness"],
    pearls: [
      "The emergency classic: IV diphenhydramine reverses an acute dystonia in minutes — the drug that ends the oculogyric crisis on camera.",
      "The anticholinergic paradox: an OTC sleep aid that causes delirium in exactly the population that buys it — Beers-criteria caution in over-65s.",
      "Tolerance is fast: nightly use as a hypnotic is a losing game within 1-2 weeks.",
      "The abuse-tolerance footnote: massive-dose misuse for deliriant effects exists — the anticholinergic ceiling as a hazard.",
      "Hidden in everything: combination cold/flu products — the accidental double-dose patients never counted.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
