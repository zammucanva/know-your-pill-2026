import type { Drug } from "../types";

/**
 * Diazepam — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), diazepam monograph (book p. 34)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const diazepam: Drug = {
  /* ---- Identity ---- */
  slug: "diazepam",
  genericName: "Diazepam",
  brandNames: ["Valium", "Valpam / Diazepam (generic)"],
  drugClass: "benzodiazepine",
  drugClassLabel: "Benzodiazepine",
  drugClassFullName: "Benzodiazepine (GABA-A PAM)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Anxiolytics & Sedatives", "Benzodiazepines", "Diazepam"],
  /* ---- Hero / summary ---- */
  tagline: "The original benzodiazepine — muscle-relaxing, seizure-stopping, alcohol-withdrawing, and the textbook of benzodiazepine pharmacokinetics.",
  summary: "Diazepam is the founding benzodiazepine (1963): a long-acting GABA-A positive allosteric modulator with lipid solubility that makes it fast centrally (30–60 seconds IV) and long-lasting peripherally (active metabolites stretching to 100 hours). Its clinical portfolio — anxiety, alcohol withdrawal, muscle spasm, status epilepticus (historically), pre-procedural sedation — makes it the Swiss Army knife of the class. Dependence risk, accumulation in the elderly, and the opioid combination warning frame its modern use as short-course or carefully justified.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Diazepam — from its molecular target (GABA-A receptor benzodiazepine site (alpha-1/2/3/5-containing) — positive allosteric modulator) to clinical effect.",
    "List the FDA-approved and off-label uses of Diazepam.",
    "Predict the common and serious side effects of Diazepam from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Diazepam.",
    "Compare Diazepam with other benzodiazepines and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Diazepam binds the benzodiazepine site on the GABA-A receptor, increasing the frequency of chloride channel opening — amplifying the brain's own inhibitory signal rather than activating it directly.",
    molecularTarget: "GABA-A receptor benzodiazepine site (alpha-1/2/3/5-containing) — positive allosteric modulator",
    effect: "Anxiolysis, sedation, muscle relaxation, anticonvulsant action, and amnesia — the four classic benzodiazepine actions in one molecule.",
    steps: [
      "Diazepam binds the benzodiazepine (BZ) site at the interface of alpha and gamma subunits on GABA-A.",
      "GABA-A channels open MORE OFTEN in the presence of GABA — the drug amplifies natural inhibition (a positive allosteric modulator, not an agonist of the chloride channel itself).",
      "High lipid solubility delivers rapid brain entry (IV: 30–60 seconds; oral: 30–60 minutes).",
      "Hepatic metabolism to desmethyldiazepam (nordiazepam) — active, half-life 40–100 h — creates the long tail that defines diazepam's cumulative profile.",
      "The result: fast anxiolysis and anticonvulsant effect with slow, cumulative clearance — ideal for alcohol withdrawal tapering, hazardous for elderly chronic use.",
    ],
    pharmacokinetics: "Rapid and complete oral absorption (peak 30–90 min); extensive redistribution to fat; IV onset in under a minute.",
    halfLife: "Diazepam 20–50 h; nordiazepam (active) 40–100 h — effective drug accumulation with repeated dosing.",
    activeMetabolite: "Nordiazepam (desmethyldiazepam), plus temazepam and oxazepam — active metabolites that extend the tail.",
    metabolism: "Hepatic CYP2C19 and 3A4 → nordiazepam (the long-acting metabolite).",
    excretion: "Renal glucuronide metabolites.",
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
        label: "Diazepam",
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
  receptors: [
    "GABA-A receptor (benzodiazepine site — PAM)",
  ],
  brainRegionIds: ["amygdala", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Anxiety disorders / short-term anxiety relief",
      status: "fda-approved",
      description: "The original indication; modern practice restricts to 2–4 week courses.",
    },
    {
      name: "Alcohol withdrawal syndrome",
      status: "guideline",
      description: "A cornerstone: loading and tapering regimens for autonomic stabilisation and seizure prophylaxis (symptom-triggered dosing is standard).",
    },
    {
      name: "Muscle spasm and spasticity",
      status: "fda-approved",
      description: "The muscle-relaxant strength of the class.",
    },
    {
      name: "Status epilepticus (historic/second-line)",
      status: "guideline",
      description: "IV diazepam stops seizures in under a minute — lorazepam's longer duration has made it the first-line successor.",
    },
    {
      name: "Pre-procedural sedation and amnesia",
      status: "off-label",
      description: "Endoscopy, cardioversion, and minor procedures.",
    },
    {
      name: "Panic disorder (adjunct)",
      status: "off-label",
      description: "Effective but dependence-prone — antidepressants are the long-term answer.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to this agent.",
      severity: "absolute",
      rationale: "Diazepam must not be used in this situation (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Opioids",
      severity: "absolute",
      rationale: "Profound sedation, respiratory depression, and death — the strongest boxed warning combination in medicine.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Risks with opioids — sedation, respiratory depression, death",
      text: "Concurrent benzodiazepine and opioid use causes profound sedation, respiratory depression, coma, and death. Reserve for patients for whom alternatives are inadequate; use the lowest doses and shortest duration; warn every patient explicitly.",
    },
    {
      title: "Dependence, abuse, and withdrawal",
      text: "Even therapeutic doses can cause dependence within weeks; abrupt discontinuation causes withdrawal (anxiety, insomnia, seizures) that can be life-threatening. Taper on discontinuation; limit to short courses.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "The dose-limiting effect — additive with alcohol and opioids.",
      management: "Dose reduction; avoid driving; night dosing.",
    },
    {
      name: "Muscle weakness / ataxia",
      frequency: "common",
      severity: "moderate",
      description: "The flip side of muscle relaxation — falls in the elderly.",
      management: "Fall precautions; reduce dose.",
    },
    {
      name: "Anterograde amnesia",
      frequency: "common",
      severity: "moderate",
      description: "Memory gaps for events after dosing — used deliberately in procedures, hazardous socially.",
      management: "Counsel; avoid responsibility-heavy tasks post-dose.",
    },
    {
      name: "Confusion (elderly)",
      frequency: "common",
      severity: "moderate",
      description: "Paradoxical excitation or confusion in older patients — the classic geriatric hazard.",
      management: "Avoid in the elderly where possible; use short-acting no-metabolite alternatives (lorazepam/oxazepam).",
    },
    {
      name: "Tolerance and dependence",
      frequency: "very-common",
      severity: "severe",
      description: "Develops within 2–4 weeks of regular use — the defining risk of the class.",
      management: "Short courses; tapering plans; regular review justification.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Respiratory depression (with opioids or overdose)",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The boxed-warning emergency — IV flumazenil reverses it (with seizure risk in chronic users/TCA co-ingestion).",
      management: "Airway support; flumazenil with caution; the opioid combination is the usual driver.",
    },
    {
      name: "Withdrawal seizures and delirium",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Abrupt cessation after chronic use — seizures, delirium, and a rebound worse than the original anxiety.",
      management: "Slow taper (weeks-months for long-term users); switch to diazepam itself for tapering (see pearl).",
    },
    {
      name: "Paradoxical reactions",
      frequency: "rare",
      severity: "severe",
      description: "Excitement, rage, disinhibition — especially in children, the elderly, and developmental disability.",
      management: "Stop; do not rechallenge.",
    },
    {
      name: "Neonatal floppy infant syndrome",
      frequency: "uncommon",
      severity: "severe",
      description: "Third-trimester exposure: hypotonia, poor feeding, withdrawal.",
      management: "Avoid near term.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Respiratory status and sedation",
      frequency: "Clinical review each visit",
      rationale: "Respiratory depression risk in overdose and with opioids.",
    },
    {
      parameter: "Dependence review",
      frequency: "Every visit for long-term users",
      rationale: "Tolerance and dependence develop within weeks.",
    },
    {
      parameter: "Fall risk review (elderly)",
      frequency: "Every visit in older patients",
      rationale: "Falls and fractures are the main harm in the elderly.",
    },
  ],
  interactions: [
    {
      drug: "Opioids",
      severity: "contraindicated",
      mechanism: "Profound sedation, respiratory depression, and death — the strongest boxed warning combination in medicine.",
      action: "Avoid; if unavoidable for taper protocols, use lowest doses with intensive monitoring.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "major",
      mechanism: "Additive sedation and respiratory depression.",
      action: "Counsel strongly against alcohol.",
    },
    {
      drug: "Clozapine",
      severity: "major",
      mechanism: "Rare but serious respiratory depression/death reported early in treatment.",
      action: "Minimise or avoid.",
    },
    {
      drug: "CYP2C19/3A4 inhibitors (omeprazole, ketoconazole, etc.)",
      severity: "moderate",
      mechanism: "Raise diazepam levels.",
      action: "Observe for excess sedation; dose review.",
    },
    {
      drug: "Older antihistamines (sedating)",
      severity: "moderate",
      mechanism: "Additive sedation in the elderly — falls.",
      action: "Prefer non-sedating alternatives.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "First-trimester exposure is associated with a small absolute increase in oral clefts, and third-trimester use causes neonatal floppy infant syndrome (sedation, hypotonia, poor feeding) and withdrawal. Use short courses at the lowest dose when unavoidable; avoid near term.",
    lactation: "Diazepam and its long-acting metabolites pass into milk and can accumulate in the infant — sedation, poor feeding. Prefer shorter-acting, glucuronidated alternatives (lorazepam/oxazepam) if breastfeeding.",
  },
  renalAdjustment: "Active metabolites accumulate in renal impairment; lorazepam/oxazepam (glucuronidated) are preferred in significant renal disease.",
  hepaticAdjustment: "Cirrhosis markedly slows clearance — halve doses or use lorazepam; watch for encephalopathy in liver disease.",
  /* ---- Education ---- */
  patientExplanation: "Diazepam is the original calming medicine of its class — it works by strengthening the brain's natural relaxing chemical (GABA). It relieves anxiety, relaxes muscles, prevents alcohol-withdrawal fits, and sedates for procedures. It is designed for short courses: taken regularly for more than a few weeks it causes dependence, and combined with opioid painkillers it can dangerously slow breathing.",
  patientEducationPoints: [
    "This medicine is for short-term or carefully planned use — it can cause dependence within weeks of regular use.",
    "Never mix it with opioid painkillers or alcohol — the combination can stop breathing.",
    "Do not drive until you know how it affects you.",
    "Stopping must be gradual — never stop suddenly after regular use.",
    "Benefit from Diazepam builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "Pharmacokinetics IS the prescribing: fast in (lipid solubility), long out (nordiazepam 40–100 h) — great for withdrawal tapers, hazardous for chronic elderly use.",
    "Diazepam is the taper drug of choice: convert short-half-life benzo dependence to diazepam, then taper the single daily dose — the long tail smooths the descent.",
    "IV diazepam works in under a minute — but redistributes fast; lorazepam's longer seizure-free duration made it status-epilepticus first-line.",
    "The metabolite family tree: diazepam → nordiazepam → (temazepam, oxazepam) — three marketed benzos are diazepam's own descendants.",
    "Avoid in the elderly and in liver disease — accumulation produces the confusion-and-falls syndrome; lorazepam/oxazepam are the glucuronidation escape routes.",
    "Alcohol withdrawal: symptom-triggered dosing (CIWA-driven) beats fixed schedules — less total drug, same safety.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Diazepam: Diazepam binds the benzodiazepine site on the GABA-A receptor, increasing the frequency of chloride channel opening — amplifying the brain's own inhibitory signal rather than activating it directly.",
        "Uses of Diazepam: Anxiety disorders / short-term anxiety relief; Alcohol withdrawal syndrome; Muscle spasm and spasticity; Status epilepticus (historic/second-line)",
        "Mechanism: GABA-A PAM — increases FREQUENCY of chloride channel opening (vs barbiturates: duration).",
        "PK signature: fast brain entry (lipid-soluble) + long active metabolite tail (nordiazepam 40–100 h).",
      ],
      practical: [
        "Prescribe Diazepam for anxiety disorders / short-term anxiety relief with dose, timing, and duration.",
        "Outline the monitoring plan: Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      ],
      longAnswer: [
        "Diazepam: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: GABA-A PAM — increases FREQUENCY of chloride channel opening (vs barbiturates: duration).",
        "PK signature: fast brain entry (lipid-soluble) + long active metabolite tail (nordiazepam 40–100 h).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: GABA-A PAM — increases FREQUENCY of chloride channel opening (vs barbiturates: duration).",
        "PK signature: fast brain entry (lipid-soluble) + long active metabolite tail (nordiazepam 40–100 h).",
        "Clinical portfolio: anxiety, alcohol withdrawal, muscle spasm, status epilepticus (2nd line), procedural sedation.",
        "Boxed warnings: opioid combination (respiratory death) + dependence/withdrawal.",
        "Preferred for benzo tapering: long half-life smooths withdrawal (convert-and-taper).",
        "Avoid in elderly/liver disease: accumulation → confusion, falls; prefer lorazepam/oxazepam (glucuronidation).",
      ],
      pyqConcepts: [
        "Mechanism/target of Diazepam",
        "Key adverse effect: Respiratory depression (with opioids or overdose)",
        "Dosing and titration of Diazepam",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Diazepam develops respiratory depression (with opioids or overdose) — next best step?",
        "When to choose Diazepam over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: GABA-A receptor benzodiazepine site (alpha-1/2/3/5-containing) — positive allosteric modulator",
        "Most common side effects: Sedation and drowsiness, Muscle weakness / ataxia, Anterograde amnesia",
        "Key contraindication: known hypersensitivity",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The pharmacokinetic legend: fastest brain entry, longest metabolite tail — learn diazepam and you know the whole class's geometry.",
        "Convert-and-taper: diazepam is the standard vehicle for weaning off any short-half-life benzo.",
        "Symptom-triggered (CIWA) alcohol withdrawal dosing: better outcomes than fixed schedules.",
        "The elderly on diazepam accumulate drug for days — the 'confused for no reason' consultation.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: GABA-A PAM — increases FREQUENCY of chloride channel opening (vs barbiturates: duration).",
    "PK signature: fast brain entry (lipid-soluble) + long active metabolite tail (nordiazepam 40–100 h).",
    "Clinical portfolio: anxiety, alcohol withdrawal, muscle spasm, status epilepticus (2nd line), procedural sedation.",
    "Boxed warnings: opioid combination (respiratory death) + dependence/withdrawal.",
    "Preferred for benzo tapering: long half-life smooths withdrawal (convert-and-taper).",
    "Avoid in elderly/liver disease: accumulation → confusion, falls; prefer lorazepam/oxazepam (glucuronidation).",
    "Withdrawal can include seizures and delirium — taper always.",
    "Metabolites: nordiazepam (active, long); temazepam and oxazepam are descendants.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — anxiety disorders / short-term anxiety relief",
      presentation: "A patient presenting with anxiety disorders / short-term anxiety relief, started on Diazepam.",
      history: "A adult patient presents with a anxiety disorders / short-term anxiety relief picture lasting several weeks, with functional impairment. No prior psychiatric treatment. No significant medical history, no substance use, and no regular medications.",
      examination: "Mental status examination is consistent with anxiety disorders / short-term anxiety relief; physical examination and baseline investigations are unremarkable.",
      diagnosis: "Anxiety disorders / short-term anxiety relief. Differentials are considered and excluded clinically.",
      rationale: "Diazepam is appropriate as a first-line option: it directly targets the presenting syndrome, has a well-characterised safety profile, and belongs to a class (Benzodiazepine) with strong evidence in this condition.",
      management: "Started at 2 mg twice daily (or 5 mg nocte), titrated to 4–30 mg/day divided with scheduled follow-up in 2 weeks, then 4–6 weeks to assess response, side effects, and safety monitoring.",
      outcome: "At 6-week review, partial response with tolerable side effects. Dose optimised; psychoeducation and supportive therapy continued. Full response expected over the next 4–8 weeks.",
      teachingPoints: [
        "Diazepam takes weeks for full effect — early follow-up is about tolerability, not efficacy.",
        "Review adherence and side effects before concluding the drug has failed.",
        "Continue treatment for an adequate duration after response to prevent relapse.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Benzodiazepine comparison — choosing within the class",
      primaryDrug: "Diazepam",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "GABA-A receptor benzodiazepine site (alpha-1/2/3/5-containing) — positive allosteric modulator",
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
              drug: "Lorazepam",
              value: "See full guide",
            },
            {
              drug: "Chlordiazepoxide",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Diazepam 20–50 h; nordiazepam (active) 40–100 h — effective drug accumulation with repeated dosing.",
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
              drug: "Lorazepam",
              value: "—",
            },
            {
              drug: "Chlordiazepoxide",
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
              drug: "Lorazepam",
              value: "—",
            },
            {
              drug: "Chlordiazepoxide",
              value: "See product information and class comparison.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High — the dose-limiting effect; tolerance develops to sedation faster than to anxiolysis.",
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
              drug: "Lorazepam",
              value: "Moderate — intermediate duration limits hangover vs diazepam.",
            },
            {
              drug: "Chlordiazepoxide",
              value: "High — useful in withdrawal.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "The fast-into-brain, long-in-body benzo — withdrawal and spasm workhorse",
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
              drug: "Lorazepam",
              value: "Glucuronidation-only metabolism — the liver/elderly/interactions-safe benzo",
            },
            {
              drug: "Chlordiazepoxide",
              value: "Alcohol withdrawal tablet — the founding benzo",
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
      description: "Diazepam reaches peak plasma concentration and begins acting at its molecular target (GABA-A receptor benzodiazepine site (alpha-1/2/3/5-containing) — positive allosteric modulator). Initial effects are on sleep, energy, or side effects — not the main symptoms.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Side effects are usually most noticeable in the first week (sedation and drowsiness, muscle weakness / ataxia, anterograde amnesia). Many settle as the body adapts.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–4 (IV: 30–60 seconds (status epilepticus, agitation).)",
      title: "Therapeutic effect builds",
      description: "IV: 30–60 seconds (status epilepticus, agitation). is the typical window for the main therapeutic effect to become apparent. Review at 2 and 4 weeks to assess response and tolerability.",
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
      description: "After response, treatment continues for the guideline-recommended duration to prevent relapse. Long-term safety: Long-term safety of Diazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard..",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does Diazepam take to work?",
      answer: "IV: 30–60 seconds (status epilepticus, agitation).. Like most psychotropic medications, the full benefit builds gradually — some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond. Do not stop early because you don't feel immediate effects.",
    },
    {
      question: "What are the most common side effects of Diazepam?",
      answer: "The most frequently reported effects are: Sedation and drowsiness, Muscle weakness / ataxia, Anterograde amnesia, Confusion (elderly), Tolerance and dependence. Most of these appear in the first week or two and settle as your body adjusts. Tell your doctor about any side effect that persists or worries you.",
    },
    {
      question: "Can I stop Diazepam suddenly?",
      answer: "No — taper gradually under medical supervision rather than stopping abruptly. Abrupt discontinuation can cause withdrawal-like symptoms and risk symptom relapse. Always discuss the plan with your doctor first.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose. Never take a double dose to make up for a missed one.",
    },
    {
      question: "Is Diazepam habit-forming?",
      answer: "Dependence or misuse potential exists — see the warnings in this guide.. However, every patient should take Diazepam exactly as prescribed and never change the dose without medical advice.",
    },
    {
      question: "Can I take Diazepam during pregnancy or breastfeeding?",
      answer: "Discuss this with your doctor before becoming pregnant if possible. Decisions depend on balancing the risk of untreated illness against medication exposure — Diazepam may be continued, switched, or tapered depending on your situation. Never stop abruptly on your own.",
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
        section: "6th ed. (2017), diazepam monograph, p. 34",
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
        source: "FDA Prescribing Information for Valium (Diazepam)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for diazepam — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Diazepam",
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
      name: "Midazolam",
      slug: "midazolam",
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
      name: "Anxiety disorders / short-term anxiety relief",
      relationship: "primary",
    },
    {
      name: "Alcohol withdrawal syndrome",
      relationship: "alternative",
    },
    {
      name: "Muscle spasm and spasticity",
      relationship: "primary",
    },
    {
      name: "Status epilepticus (historic/second-line)",
      relationship: "alternative",
    },
    {
      name: "Pre-procedural sedation and amnesia",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Diazepam",
      type: "drug",
      href: "/drugs/diazepam",
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
      label: "GABA-A receptor benzodiazepine site (alpha-1/2/3/5-containing) — positive allosteric modulator",
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
      label: "Anxiety disorders / short-term anxiety relief",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Alcohol withdrawal syndrome",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Muscle spasm and spasticity",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Respiratory depression (with opioids or overdose)",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Withdrawal seizures and delirium",
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
      label: "Patient Guide — Diazepam",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The original benzodiazepine — muscle-relaxing, seizure-stopping, alcohol-withdrawing, and the textbook of benzodiazepine pharmacokinetics.",
    summary: "Diazepam is a prescription medicine used to treat anxiety disorders / short-term anxiety relief. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Diazepam is the original calming medicine of its class — it works by strengthening the brain's natural relaxing chemical (GABA). It relieves anxiety, relaxes muscles, prevents alcohol-withdrawal fits, and sedates for procedures. It is designed for short courses: taken regularly for more than a few weeks it causes dependence, and combined with opioid painkillers it can dangerously slow breathing.",
    sideEffects: "The most common side effects are: sedation and drowsiness, muscle weakness / ataxia, anterograde amnesia, confusion (elderly), tolerance and dependence. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Respiratory depression (with opioids or overdose) and Withdrawal seizures and delirium. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: respiratory status and sedation (clinical review each visit); dependence review (every visit for long-term users); fall risk review (elderly) (every visit in older patients). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have a known allergy to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Opioids, Alcohol and CNS depressants, Clozapine, CYP2C19/3A4 inhibitors (omeprazole, ketoconazole, etc.). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Valium / Calmpose",
        manufacturer: "Nicholas/Ranbaxy legacy",
        strengths: "5, 10 mg",
      },
      {
        name: "Diazepam generic",
        manufacturer: "multiple + Jan Aushadhi",
        strengths: "5, 10 mg tabs, syrup, injection",
      },
    ],
    typicalDoses: "Anxiety 5–15 mg/day divided; withdrawal CIWA-driven; IV status 5–10 mg.",
    prescribingScenarios: [
      "Alcohol withdrawal protocols in district hospitals.",
      "Pre-procedural sedation in endoscopy suites.",
      "Acute seizures in emergency settings (IV).",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "CIWA-scored withdrawal reviews; sedation and respiratory check each IV dose.",
    patientCounselling: [
      "Never with opioid painkillers or heavy alcohol — breathing can stop.",
      "Short courses only — dependence builds within weeks.",
      "No driving until effects are known.",
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
    note: "Generic diazepam tablets and injection widely stocked.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Benzodiazepines",
    members: [
      {
        name: "Diazepam",
        slug: "diazepam",
        relationship: "This guide",
        distinguishing: "The fast-into-brain, long-in-body benzo — withdrawal and spasm workhorse",
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
        name: "Midazolam",
        slug: "midazolam",
        relationship: "Same class (Benzodiazepine)",
        distinguishing: "Benzodiazepine — see full guide",
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
    study: "40 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Diazepam primarily act on?",
      options: [
        "GABA-A receptor benzodiazepine site (alpha-1/2/3/5-containing) — positive allosteric modulator",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Diazepam acts primarily at GABA-A receptor benzodiazepine site (alpha-1/2/3/5-containing) — positive allosteric modulator. Diazepam binds the benzodiazepine site on the GABA-A receptor, increasing the frequency of chloride channel opening — amplifying the brain's own inhibitory signal rather than activating it directly.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Diazepam?",
      options: ["Sedation and drowsiness", "Muscle weakness / ataxia", "Anterograde amnesia", "Confusion (elderly)"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — The dose-limiting effect — additive with alcohol and opioids.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Diazepam for anxiety (short course)?",
      options: ["4–30 mg/day divided", "Up to 30 mg/day (short-term)", "4–30 mg/day divided (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For anxiety (short course): start 2 mg twice daily (or 5 mg nocte), target 4–30 mg/day divided, maximum Up to 30 mg/day (short-term). Lowest effective dose; 2–4 week maximum course",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Diazepam in two sentences.",
      answer: "Diazepam binds the benzodiazepine site on the GABA-A receptor, increasing the frequency of chloride channel opening — amplifying the brain's own inhibitory signal rather than activating it directly. Net effect: Anxiolysis, sedation, muscle relaxation, anticonvulsant action, and amnesia — the four classic benzodiazepine actions in one molecule.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Diazepam.",
      answer: "Anxiety disorders / short-term anxiety relief, Alcohol withdrawal syndrome, Muscle spasm and spasticity, Status epilepticus (historic/second-line). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Diazepam and how you would manage it.",
      answer: "Respiratory depression (with opioids or overdose): The boxed-warning emergency — IV flumazenil reverses it (with seizure risk in chronic users/TCA co-ingestion). Management: Airway support; flumazenil with caution; the opioid combination is the usual driver.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Diazepam require?",
      answer: "Respiratory status and sedation (Clinical review each visit); Dependence review (Every visit for long-term users); Fall risk review (elderly) (Every visit in older patients)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Diazepam that separates safe prescribers from unsafe ones.",
      answer: "The pharmacokinetic legend: fastest brain entry, longest metabolite tail — learn diazepam and you know the whole class's geometry.",
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
      checkpoint: "You now know what Diazepam is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Diazepam works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Diazepam safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Diazepam.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Diazepam with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Diazepam.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "IV: 30–60 seconds (status epilepticus, agitation).",
      "Oral: 30–60 minutes to anxiolysis.",
      "Alcohol withdrawal stabilisation: within hours of loading.",
    ],
    ifItWorks: [
      "Continue Diazepam at the lowest effective dose for the guideline-recommended duration for the condition treated.",
      "Review adherence, adverse effects, and function at every visit.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Diazepam (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Combine with guideline-appropriate agents for the underlying condition rather than stacking same-mechanism drugs.",
    ],
    testsBeforeStarting: [
      "Baseline weight, blood pressure, and relevant labs per class guidance before starting.",
    ],
    sideEffectLogic: [
      "Adverse effects of Diazepam follow directly from its receptor and organ effects — predict them from the mechanism.",
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
    sedation: "High — the dose-limiting effect; tolerance develops to sedation faster than to anxiolysis.",
    dosing: [
      {
        indication: "Anxiety (short course)",
        starting: "2 mg twice daily (or 5 mg nocte)",
        titration: "Lowest effective dose; 2–4 week maximum course",
        target: "4–30 mg/day divided",
        max: "Up to 30 mg/day (short-term)",
      },
      {
        indication: "Alcohol withdrawal",
        starting: "10–20 mg orally (or 5–10 mg IV)",
        titration: "Symptom-triggered (CIWA-scored) loading then taper over 3–7 days",
        target: "40 mg first hour typical (regimen-dependent)",
        max: "Regimen-limited; taper to zero",
      },
      {
        indication: "Muscle spasm",
        starting: "5 mg three times daily",
        titration: "Titrate to relaxation",
        target: "15–30 mg/day",
        max: "Short-course",
      },
      {
        indication: "Status epilepticus (second-line)",
        starting: "5–10 mg IV (~0.15–0.2 mg/kg)",
        titration: "Repeat after 5–10 min if needed — then transition to maintenance",
        target: "10–20 mg IV per episode",
        max: "Protocol-limited; monitor respiration",
      },
      {
        indication: "Pre-procedural sedation",
        starting: "5–10 mg oral (30–60 min before) or 2–5 mg IV",
        titration: "Titrate to slurred speech/ptosis",
        target: "Individualised",
        max: "Procedure-limited",
      },
    ],
    dosageForms: [
      "Tablets 2, 5, 10 mg",
      "Oral solution 2 mg/mL (or 5 mg/5 mL)",
      "Injection 5 mg/mL (IV/IM — IV preferred)",
      "Suppositories (some markets)",
    ],
    dosingTips: [
      "Oral for withdrawal loading; reserve IV for seizures and acute agitation.",
      "Convert chronic short-half-life benzo users to diazepam-equivalent once-daily dosing, then taper ~10–25% per step.",
      "Never co-prescribe with opioids without documented justification.",
      "In the elderly: don't start — switch to lorazepam/oxazepam if a benzo is truly needed.",
    ],
    overdose: [
      "Overdose with Diazepam is managed supportively — no specific antidote.",
      "Activated charcoal if early; cardiac and respiratory monitoring as indicated by the class.",
    ],
    longTermUse: "Long-term safety of Diazepam is established for its approved uses; periodic review of dose necessity and adverse effects is standard.",
    habitForming: "Dependence or misuse potential exists — see the warnings in this guide.",
    howToStop: [
      "Taper gradually under medical supervision rather than stopping abruptly.",
    ],
    pharmacokinetics: [
      "Half-life: Diazepam 20–50 h; nordiazepam (active) 40–100 h — effective drug accumulation with repeated dosing..",
      "Metabolism: Hepatic CYP2C19 and 3A4 → nordiazepam (the long-acting metabolite)..",
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
      "Fast onset (lipid solubility) + long tail (metabolites) — the taper champion.",
      "Muscle-relaxant strength.",
      "IV form for status epilepticus and acute agitation.",
      "Cheap and globally available.",
    ],
    potentialDisadvantages: [
      "Accumulation — falls and confusion in the elderly and liver disease.",
      "Full dependence profile of the class.",
      "Long metabolite tail complicates withdrawal timing.",
      "Opioid-combination lethality.",
    ],
    primaryTargetSymptoms: ["Acute anxiety and panic", "Alcohol withdrawal autonomic storm", "Muscle spasm", "Seizures (acute)", "Pre-procedural sedation/amnesia"],
    pearls: [
      "The pharmacokinetic legend: fastest brain entry, longest metabolite tail — learn diazepam and you know the whole class's geometry.",
      "Convert-and-taper: diazepam is the standard vehicle for weaning off any short-half-life benzo.",
      "Symptom-triggered (CIWA) alcohol withdrawal dosing: better outcomes than fixed schedules.",
      "The elderly on diazepam accumulate drug for days — the 'confused for no reason' consultation.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
