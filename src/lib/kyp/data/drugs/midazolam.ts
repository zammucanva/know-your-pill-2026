import type { Drug } from "../types";

/**
 * Midazolam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), midazolam monograph (book p. 79)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const midazolam: Drug = {
  /* ---- Identity ---- */
  slug: "midazolam",
  genericName: "Midazolam",
  brandNames: ["Versed", "Buccolam", "Midazolam (generic)"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine",
  drugClassFullName: "Benzodiazepine (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepines", "Midazolam"],
  /* ---- Hero / summary ---- */
  tagline: "The shortest-acting benzodiazepine — procedural sedation and status epilepticus in one syringe.",
  summary: "Midazolam is the ultrashort-acting benzodiazepine of anaesthesia and emergencies: 1–5 minute IV onset with a 2–3 hour half-life, water-soluble in acid solutions (painless IV) and membrane-soluble at physiological pH. IM midazolam is the WHO-preferred route for status epilepticus in children (faster than IV access in the field). Its imidazole ring and titratability make it the procedural-sedation standard.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Midazolam — from its molecular target (GABA-A benzodiazepine site (PAM)) to clinical effect.",
    "List the FDA-approved and off-label uses of Midazolam.",
    "Predict the common and serious side effects of Midazolam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Midazolam.",
    "Compare Midazolam with other benzodiazepines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Ultrashort-acting GABA-A PAM — the titratable benzodiazepine with an imidazole ring enabling water solubility at acidic pH and rapid membrane entry at physiological pH.",
    molecularTarget: "GABA-A benzodiazepine site (PAM)",
    effect: "Rapid sedation, anxiolysis, amnesia, and anticonvulsant action with a short, titratable course.",
    steps: [
      "Class mechanism at the GABA-A benzodiazepine site.",
      "Imidazole ring: water-soluble at pH < 4 (painless IV prep), converts to membrane-soluble at pH 7.4 — instant brain entry.",
      "Half-life 2–3 h: fast on, fast off — the titration property anaesthesia wants.",
      "Active metabolite (1-hydroxymidazolam) accumulates only in renal failure or prolonged infusion.",
    ],
    pharmacokinetics: "IV onset 1–5 min; IM 10–15 min; intranasal/buccal rapid. Rectal routes used in paediatric field contexts.",
    halfLife: "2–3 hours.",
    activeMetabolite: "1-hydroxymidazolam (minor; accumulates in renal failure/infusion).",
    metabolism: "Hepatic CYP3A4 — the fentanyl/ritonavir interaction concern.",
    excretion: "Renal metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "gaba",
        label: "GABA",
        sublabel: "Inhibitory neurotransmitter",
        variant: "input",
      },
      {
        id: "receptor",
        label: "GABA-A receptor",
        sublabel: "Chloride channel",
        variant: "target",
      },
      {
        id: "drug",
        label: "Midazolam",
        sublabel: "Positive allosteric modulator",
        variant: "process",
      },
      {
        id: "cl",
        label: "Cl⁻ influx",
        sublabel: "Neuron hyperpolarises",
        variant: "output",
      },
      {
        id: "effect",
        label: "Reduced neuronal firing",
        sublabel: "Anxiolysis, sedation, anticonvulsant effect",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "gaba",
        to: "receptor",
        label: "binds",
      },
      {
        from: "drug",
        to: "receptor",
        label: "enhances GABA action",
        type: "stimulate",
      },
      {
        from: "receptor",
        to: "cl",
        label: "opens channel",
      },
      {
        from: "cl",
        to: "effect",
        label: "inhibits firing",
      },
    ],
    caption: "Benzodiazepines amplify the brain's own inhibitory signal (GABA) rather than activating the receptor directly — which is why their effect is powerful but limited by dependence risk.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["GABA"],
  receptors: ["GABA-A receptor (PAM)"],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Procedural sedation and premedication",
      status: "fda-approved",
      description: "Endoscopy, bronchoscopy, minor surgery — the titratable sedation standard.",
    },
    {
      name: "Status epilepticus (IM in the field, IV in-hospital)",
      status: "guideline",
      description: "IM midazolam is WHO-preferred for paediatric status in the field (faster than IV access).",
    },
    {
      name: "Acute agitation (ICU)",
      status: "off-label",
      description: "Titratable infusion sedation.",
    },
    {
      name: "Seizure clusters / acute rescue (buccal/intranasal)",
      status: "guideline",
      description: "Carer-administered rescue pathways in epilepsy.",
    },
    {
      name: "Induction of anaesthesia",
      status: "fda-approved",
      description: "The anaesthesia use.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Midazolam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioids (fentanyl class)",
      severity: "absolute",
      rationale: "Profound respiratory depression — the classic pair.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Risks with opioids — profound sedation, respiratory depression, death",
      text: "Midazolam + fentanyl is the classic anaesthesia pair and the classic respiratory-depression pair — monitoring settings only.",
    },
    {
      title: "Dependence potential (class)",
      text: "Brief; less relevant in procedural use.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and amnesia",
      frequency: "very-common",
      severity: "moderate",
      description: "The intended procedural effects.",
      management: "Monitoring during procedures.",
    },
    {
      name: "Hypotension (with anaesthesia co-drugs)",
      frequency: "common",
      severity: "moderate",
      description: "Usually context-dependent with opioids/propofol.",
      management: "IV fluids; monitoring.",
    },
    {
      name: "Hiccups, nausea, cough",
      frequency: "common",
      severity: "mild",
      description: "Minor procedural effects.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression/arrest",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The signature serious risk, especially with opioids or in the elderly.",
      management: "Airway support; flumazenil reversal with monitoring; antagonist availability is a condition of use.",
    },
    {
      name: "Paradoxical reactions (children, elderly)",
      frequency: "uncommon",
      severity: "severe",
      description: "Agitation instead of sedation.",
      management: "Stop; alternative agent.",
    },
    {
      name: "Propylene glycol (high-dose infusions)",
      frequency: "rare",
      severity: "life-threatening",
      description: "As with lorazepam: metabolic acidosis with prolonged high-dose infusion.",
      management: "Limit infusion duration; acid-base monitoring.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Continuous respiratory and cardiac monitoring",
      frequency: "During all procedural/ICU use",
      rationale: "Airway and ventilation surveillance is a condition of midazolam use.",
    },
    {
      parameter: "Sedation depth scoring (ICU)",
      frequency: "With infusions",
      rationale: "Titration target discipline.",
    },
  ],
  interactions: [
    {
      drug: "Opioids (fentanyl class)",
      severity: "contraindicated",
      mechanism: "Profound respiratory depression — the classic pair.",
      action: "Monitoring settings only.",
    },
    {
      drug: "CYP3A4 inhibitors (ritonavir, ketoconazole, clarithromycin)",
      severity: "major",
      mechanism: "Sharply raise midazolam levels — prolonged sedation; the ritonavir interaction is legendary.",
      action: "Reduce dose or avoid; document awareness.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "major",
      mechanism: "Additive sedation.",
      action: "Counsel.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "Used at caesarean/obstetric anaesthesia with neonatal monitoring (floppy infant, respiratory depression at birth — resuscitation anticipated). Brief single-dose procedural use is standard practice.",
    lactation: "Single procedural doses compatible with breastfeeding; avoid repeated dosing while nursing.",
  },
  renalAdjustment: "Metabolites accumulate in renal failure on prolonged infusion; single doses unaffected.",
  hepaticAdjustment: "Reduce dose in liver disease; 3A4 metabolism.",
  /* ---- Education ---- */
  patientExplanation: "Midazolam is the very-short-acting member of the calming-medicine family used by anaesthetists and emergency teams: it relaxes and causes forgetfulness of a procedure within minutes and wears off quickly. It is given only in monitored settings because it can slow breathing.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Midazolam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "The pH trick: water-soluble in the vial (painless injection), membrane-soluble at body pH (instant brain entry) — the imidazole ring's gift.",
    "IM midazolam beats IV access for paediatric status in the field — the WHO preference.",
    "Buccal/intranasal midazolam is the modern carer-administered seizure-rescue (replacing rectal diazepam's dignity problem).",
    "The ritonavir interaction can produce 24-hour sedation from a standard dose — the legend that teaches 3A4 pharmacology.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Midazolam: Ultrashort-acting GABA-A PAM — the titratable benzodiazepine with an imidazole ring enabling water solubility at acidic pH and rapid membrane entry at physiological pH.",
        "Uses of Midazolam: Procedural sedation and premedication; Status epilepticus (IM in the field, IV in-hospital); Acute agitation (ICU); Seizure clusters / acute rescue (buccal/intranasal)",
        "Ultrashort-acting benzodiazepine (half-life 2–3 h).",
        "The pH-dependent solubility trick (imidazole ring) — water-soluble prep, rapid CNS entry.",
      ],
      practical: [
        "Prescribe Midazolam for procedural sedation and premedication with dose, timing, and duration.",
        "Outline the monitoring plan: Continuous respiratory and cardiac monitoring (During all procedural/ICU use); Sedation depth scoring (ICU) (With infusions)",
      ],
      longAnswer: [
        "Midazolam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Ultrashort-acting benzodiazepine (half-life 2–3 h).",
        "The pH-dependent solubility trick (imidazole ring) — water-soluble prep, rapid CNS entry.",
      ],
    },
    neetPg: {
      highYield: [
        "Ultrashort-acting benzodiazepine (half-life 2–3 h).",
        "The pH-dependent solubility trick (imidazole ring) — water-soluble prep, rapid CNS entry.",
        "Uses: procedural sedation, status epilepticus (IM paediatric first-line), ICU titration.",
        "CYP3A4 metabolism — ritonavir/azoles cause profound prolongation.",
        "Reversed by flumazenil (with monitoring).",
      ],
      pyqConcepts: [
        "Mechanism/target of Midazolam",
        "Key adverse effect: Respiratory depression/arrest",
        "Dosing and titration of Midazolam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Midazolam develops respiratory depression/arrest — next best step?",
        "When to choose Midazolam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A benzodiazepine site (PAM)",
        "Most common side effects: Sedation and amnesia, Hypotension (with anaesthesia co-drugs), Hiccups, nausea, cough",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Fast on, fast off, titratable — the three words that define midazolam.",
        "The ritonavir-midazolam 24-hour sleep is the 3A4 teaching legend.",
        "IM for the field, IV for the ward, buccal for the carer.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Ultrashort-acting benzodiazepine (half-life 2–3 h).",
    "The pH-dependent solubility trick (imidazole ring) — water-soluble prep, rapid CNS entry.",
    "Uses: procedural sedation, status epilepticus (IM paediatric first-line), ICU titration.",
    "CYP3A4 metabolism — ritonavir/azoles cause profound prolongation.",
    "Reversed by flumazenil (with monitoring).",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — procedural sedation and premedication",
      presentation: "A patient presenting with procedural sedation and premedication, started on Midazolam.",
      history: "A adult patient presents with a procedural sedation and premedication picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with procedural sedation and premedication; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Procedural sedation and premedication. Differentials are considered and excluded clinically.",
      rationale: "Midazolam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine) with strong evidence in this condition.",
      management: "Started at 0.5–1 mg IV titrated, titrated to 2–5 mg typical total with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Midazolam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine comparison — choosing within the class",
      primaryDrug: "Midazolam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A benzodiazepine site (PAM)",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "See full guide",
            },
            {
              drug: "Clonazepam",
              value: "See full guide",
            },
            {
              drug: "Diazepam",
              value: "See full guide",
            },
            {
              drug: "Lorazepam",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "2–3 hours.",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "—",
            },
            {
              drug: "Clonazepam",
              value: "—",
            },
            {
              drug: "Diazepam",
              value: "—",
            },
            {
              drug: "Lorazepam",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "See product information and class comparison.",
            },
            {
              drug: "Clonazepam",
              value: "See product information and class comparison.",
            },
            {
              drug: "Diazepam",
              value: "See product information and class comparison.",
            },
            {
              drug: "Lorazepam",
              value: "See product information and class comparison.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Very high (intended effect).",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "High — potency-driven.",
            },
            {
              drug: "Clonazepam",
              value: "High — the dose-limiting effect.",
            },
            {
              drug: "Diazepam",
              value: "High — the dose-limiting effect; tolerance develops to sedation faster than to anxiolysis.",
            },
            {
              drug: "Lorazepam",
              value: "Moderate — intermediate duration limits hangover vs diazepam.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Midazolam — see clinical pearls",
          comparisons: [
            {
              drug: "Alprazolam",
              value: "The highest-potency anxiolytic with the class-worst withdrawal",
            },
            {
              drug: "Clonazepam",
              value: "The long-acting anticonvulsant benzo — seizures and panic",
            },
            {
              drug: "Diazepam",
              value: "The fast-into-brain, long-in-body benzo — withdrawal and spasm workhorse",
            },
            {
              drug: "Lorazepam",
              value: "Glucuronidation-only metabolism — the liver/elderly/interactions-safe benzo",
            },
          ],
        },
      ],
      takeaway: "All benzodiazepines share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Midazolam reaches peak plasma concentration and begins acting at its molecular target (GABA-A benzodiazepine site (PAM)). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and amnesia, hypotension (with anaesthesia co-drugs), hiccups, nausea, cough). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (IV: 1–5 min. IM: 10–15 min. Buccal/intranasal: 5–10 min.)",
      title: "Therapeutic effect builds",
      description: "IV: 1–5 min. IM: 10–15 min. Buccal/intranasal: 5–10 min. is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Midazolam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Midazolam take to work?",
      answer: "IV: 1–5 min. IM: 10–15 min. Buccal/intranasal: 5–10 min.. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Midazolam?",
      answer: "The most frequently reported effects are: Sedation and amnesia, Hypotension (with anaesthesia co-drugs), Hiccups, nausea, cough. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Midazolam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Midazolam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Midazolam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Midazolam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Midazolam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG113 (Anxiety); NICE CG91",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), midazolam monograph, p. 79",
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
        source: "FDA Prescribing Information for Versed (Midazolam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for midazolam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Midazolam",
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
      name: "Alprazolam",
      slug: "alprazolam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Clonazepam",
      slug: "clonazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Diazepam",
      slug: "diazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Lorazepam",
      slug: "lorazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Chlordiazepoxide",
      slug: "chlordiazepoxide",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
    {
      name: "Oxazepam",
      slug: "oxazepam",
      drugClass: "Benzodiazepine",
      relationship: "Same class (Benzodiazepine)",
    },
  ],
  relatedConditions: [
    {
      name: "Procedural sedation and premedication",
      relationship: "primary",
    },
    {
      name: "Status epilepticus (IM in the field, IV in-hospital)",
      relationship: "alternative",
    },
    {
      name: "Acute agitation (ICU)",
      relationship: "off-label",
    },
    {
      name: "Seizure clusters / acute rescue (buccal/intranasal)",
      relationship: "alternative",
    },
    {
      name: "Induction of anaesthesia",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Midazolam",
      type: "drug",
      href: "/drugs/midazolam",
      note: "The drug you're reading about",
    },
    {
      label: "Benzodiazepine",
      type: "class",
      href: "#mechanism",
      note: "Benzodiazepine (GABA-A PAM)",
    },
    {
      label: "GABA",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "GABA-A benzodiazepine site (PAM)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Amygdala",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Prefrontal Cortex",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Procedural sedation and premedication",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Status epilepticus (IM in the field, IV in-hospital)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Acute agitation (ICU)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Respiratory depression/arrest",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Paradoxical reactions (children, elderly)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Sedation and amnesia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Midazolam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The shortest-acting benzodiazepine — procedural sedation and status epilepticus in one syringe.",
    summary: "Midazolam is a prescription medicine used to treat procedural sedation and premedication. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Midazolam is the very-short-acting member of the calming-medicine family used by anaesthetists and emergency teams: it relaxes and causes forgetfulness of a procedure within minutes and wears off quickly. It is given only in monitored settings because it can slow breathing.",
    sideEffects: "The most common side effects are: sedation and amnesia, hypotension (with anaesthesia co-drugs), hiccups, nausea, cough. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression/arrest and Paradoxical reactions (children, elderly). Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: continuous respiratory and cardiac monitoring (during all procedural/icu use); sedation depth scoring (icu) (with infusions). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids (fentanyl class), CYP3A4 inhibitors (ritonavir, ketoconazole, clarithromycin), Alcohol and CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Midazolam (generic)",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "1, 5 mg/mL inj; syrup",
      },
    ],
    typicalDoses: "IV procedural 0.5–1 mg titrated; IM status 0.2 mg/kg (max 10 mg).",
    prescribingScenarios: [
      "Anaesthesia and emergency departments nationwide.",
      "Paediatric seizure rescue (buccal).",
      "ICU infusion sedation.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Continuous respiratory and cardiac monitoring is a condition of use.",
    patientCounselling: [
      "Given only in monitored settings — patients rarely carry it home (epilepsy carers excepted, with training).",
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
    note: "Generic injection stocked.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "high",
  drugFamilyNav: {
    familyName: "Benzodiazepines",
    members: [
      {
        name: "Midazolam",
        slug: "midazolam",
        relationship: "This guide",
        distinguishing: "See pearls",
      },
      {
        name: "Alprazolam",
        slug: "alprazolam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "The highest-potency anxiolytic with the class-worst withdrawal",
      },
      {
        name: "Clonazepam",
        slug: "clonazepam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "The long-acting anticonvulsant benzo — seizures and panic",
      },
      {
        name: "Diazepam",
        slug: "diazepam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "The fast-into-brain, long-in-body benzo — withdrawal and spasm workhorse",
      },
      {
        name: "Lorazepam",
        slug: "lorazepam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Glucuronidation-only metabolism — the liver/elderly/interactions-safe benzo",
      },
      {
        name: "Chlordiazepoxide",
        slug: "chlordiazepoxide",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Alcohol withdrawal tablet — the founding benzo",
      },
      {
        name: "Oxazepam",
        slug: "oxazepam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Benzodiazepine — see full guide",
      },
      {
        name: "Clorazepate",
        slug: "clorazepate",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Benzodiazepine — see full guide",
      },
      {
        name: "Loflazepate",
        slug: "loflazepate",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Benzodiazepine — see full guide",
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
      question: "Which molecular target does Midazolam primarily act on?",
      options: ["GABA-A benzodiazepine site (PAM)", "SERT (serotonin transporter)", "NET (norepinephrine transporter)", "D2 receptor"],
      correctIndex: 0,
      explanation: "Midazolam acts primarily at GABA-A benzodiazepine site (PAM). Ultrashort-acting GABA-A PAM — the titratable benzodiazepine with an imidazole ring enabling water solubility at acidic pH and rapid membrane entry at physiological pH.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Midazolam?",
      options: ["Sedation and amnesia", "Hypotension (with anaesthesia co-drugs)", "Hiccups, nausea, cough", "Weight gain"],
      correctIndex: 0,
      explanation: "Sedation and amnesia — The intended procedural effects.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Midazolam for procedural sedation (iv)?",
      options: ["2–5 mg typical total", "Titration-limited; monitored setting", "2–5 mg typical total (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For procedural sedation (iv): start 0.5–1 mg IV titrated, target 2–5 mg typical total, maximum Titration-limited; monitored setting. Repeat 0.25–0.5 mg increments every 2–3 min",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Midazolam in two sentences.",
      answer: "Ultrashort-acting GABA-A PAM — the titratable benzodiazepine with an imidazole ring enabling water solubility at acidic pH and rapid membrane entry at physiological pH. Net effect: Rapid sedation, anxiolysis, amnesia, and anticonvulsant action with a short, titratable course.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Midazolam.",
      answer: "Procedural sedation and premedication, Status epilepticus (IM in the field, IV in-hospital), Acute agitation (ICU), Seizure clusters / acute rescue (buccal/intranasal). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Midazolam and how you would manage it.",
      answer: "Respiratory depression/arrest: The signature serious risk, especially with opioids or in the elderly. Management: Airway support; flumazenil reversal with monitoring; antagonist availability is a condition of use.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Midazolam require?",
      answer: "Continuous respiratory and cardiac monitoring (During all procedural/ICU use); Sedation depth scoring (ICU) (With infusions)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Midazolam that separates safe prescribers from unsafe ones.",
      answer: "Fast on, fast off, titratable — the three words that define midazolam.",
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
      checkpoint: "You now know what Midazolam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Midazolam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Midazolam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Midazolam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Midazolam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Midazolam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "IV: 1–5 min. IM: 10–15 min. Buccal/intranasal: 5–10 min.",
    ],
    ifItWorks: [
      "Continue Midazolam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Midazolam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Midazolam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "Very high (intended effect).",
    dosing: [
      {
        indication: "Procedural sedation (IV)",
        starting: "0.5–1 mg IV titrated",
        titration: "Repeat 0.25–0.5 mg increments every 2–3 min",
        target: "2–5 mg typical total",
        max: "Titration-limited; monitored setting",
      },
      {
        indication: "Status epilepticus (IM)",
        starting: "0.2 mg/kg IM (10 mg max adult)",
        titration: "Repeat per protocol / transition to IV",
        target: "10 mg IM per episode",
        max: "Protocol-limited",
      },
      {
        indication: "Status epilepticus (IV)",
        starting: "0.1 mg/kg IV (max 5 mg)",
        titration: "Repeat once after 5–10 min",
        target: "Per protocol",
        max: "Protocol-limited",
      },
      {
        indication: "ICU sedation (infusion)",
        starting: "0.02–0.1 mg/kg/h",
        titration: "Titrate to sedation score",
        target: "0.02–0.2 mg/kg/h",
        max: "Watch propylene glycol and 3A4 interactions",
      },
    ],
    dosageForms: ["Injection 1, 5 mg/mL", "Oral syrup (paediatric premed)", "Buccal liquid"],
    dosingTips: [
      "Titrate slowly in the elderly (half doses) — respiratory events cluster there.",
      "Buccal route for seizure rescue where IV access is absent.",
      "Always with antagonist (flumazenil) and airway capability available.",
    ],
    overdose: [
      "Overdose with Midazolam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Midazolam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: 2–3 hours..",
      "Metabolism: Hepatic CYP3A4 — the fentanyl/ritonavir interaction concern..",
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
      "Titratable ultrashort action — the anaesthesia favourite.",
      "Best IM bioavailability for emergencies alongside lorazepam.",
      "Amnesia properties ideal for procedures.",
    ],
    potentialDisadvantages: [
      "Respiratory depression requires monitoring settings.",
      "3A4 interaction minefield.",
      "Pain-free injection invites casual use — resist.",
    ],
    primaryTargetSymptoms: ["Procedural sedation and amnesia", "Status epilepticus", "ICU sedation", "Seizure cluster rescue"],
    pearls: [
      "Fast on, fast off, titratable — the three words that define midazolam.",
      "The ritonavir-midazolam 24-hour sleep is the 3A4 teaching legend.",
      "IM for the field, IV for the ward, buccal for the carer.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
