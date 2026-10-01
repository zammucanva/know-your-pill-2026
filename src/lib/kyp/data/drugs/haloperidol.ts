import type { Drug } from "../types";

/**
 * Haloperidol — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), haloperidol monograph (book p. 55)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const haloperidol: Drug = {
  /* ---- Identity ---- */
  slug: "haloperidol",
  genericName: "Haloperidol",
  brandNames: ["Haldol", "Haldol Decanoate", "Serenace"],
  drugClass: "typical-antipsychotic",
  drugClassLabel: "Typical Antipsychotic",
  drugClassFullName: "Typical (Conventional) Antipsychotic — Butyrophenone",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Typical Antipsychotics", "Haloperidol"],
  /* ---- Hero / summary ---- */
  tagline: "The prototype high-potency D2 blocker — gold-standard potency for psychosis and agitation, at the price of EPS.",
  summary: "Haloperidol is the reference typical antipsychotic: a potent butyrophenone D2 antagonist used since the 1950s and still a global workhorse for acute psychosis, agitation, delirium, and Tourette's, with a 4-weekly decanoate depot. Its clean profile (minimal sedation, minimal anticholinergic, minimal hypotension) makes it the safest typical in overdose situations and the most agitation-effective IM — while its strong D2 binding delivers the highest EPS and hyperprolactinaemia risk among commonly used agents. In many Indian settings it remains the most available and affordable antipsychotic.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Haloperidol — from its molecular target (D2 receptor (potent competitive antagonist); sigma receptors at higher doses) to clinical effect.",
    "List the FDA-approved and off-label uses of Haloperidol.",
    "Predict the common and serious side effects of Haloperidol from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Haloperidol.",
    "Compare Haloperidol with other typical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Haloperidol is a potent, selective D2 receptor antagonist — strong, competitive dopamine blockade with minimal action at histamine, muscarinic, or alpha-1 receptors.",
    molecularTarget: "D2 receptor (potent competitive antagonist); sigma receptors at higher doses",
    effect: "Robust reduction of positive psychotic symptoms, agitation, and tics; dose-dependent EPS, dystonia, akathisia, and hyperprolactinaemia from the same blockade.",
    steps: [
      "Haloperidol binds D2 receptors with high affinity — therapeutic antipsychotic effect at 65–75% striatal D2 occupancy.",
      "EPS emerges as occupancy passes ~78–80%: the therapeutic window between antipsychotic effect and motor toxicity is narrow.",
      "Minimal H1/M1/alpha-1 binding — little sedation, no anticholinergic burden, no meaningful orthostasis (unlike low-potency phenothiazines).",
      "Tuberoinfundibular D2 blockade raises prolactin markedly — often to symptomatic levels.",
      "IM bioavailability high; decanoate ester releases haloperidol over ~4 weeks for depot maintenance.",
    ],
    pharmacokinetics: "Oral bioavailability 60–70% (first-pass); peak 2–6 h oral, 20 min IM. Decanoate: single injection covers ~4 weeks.",
    halfLife: "Oral 12–38 hours (wide variation); decanoate ~3 weeks.",
    activeMetabolite: "Reduced haloperidol (weakly active, negligible contribution).",
    metabolism: "Hepatic CYP3A4 and 2D6, plus glucuronidation and reduction; many pathways reduce interaction impact.",
    excretion: "Renal and biliary metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Haloperidol",
        sublabel: "Typical antipsychotic",
        variant: "inhibit",
      },
      {
        id: "d2",
        label: "D2 receptor",
        sublabel: "Strongly blocked (65–80% occupancy)",
        variant: "target",
      },
      {
        id: "meso",
        label: "Mesolimbic pathway",
        sublabel: "Positive symptoms improve",
        variant: "output",
      },
      {
        id: "nigro",
        label: "Nigrostriatal pathway",
        sublabel: "EPS emerges",
        variant: "process",
      },
      {
        id: "tuber",
        label: "Tuberoinfundibular pathway",
        sublabel: "Prolactin rises",
        variant: "process",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "d2",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "d2",
        to: "meso",
        label: "treats psychosis",
      },
      {
        from: "d2",
        to: "nigro",
        label: "EPS / dystonia",
      },
      {
        from: "d2",
        to: "tuber",
        label: "hyperprolactinaemia",
      },
    ],
    caption: "Potent D2 blockade treats positive symptoms but the same mechanism in motor and pituitary pathways drives EPS and hyperprolactinaemia — efficacy and motor risk are two sides of one coin.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Dopamine (DA)"],
  receptors: ["D2 receptor (potent antagonist)"],
  brainRegionIds: ["nucleus-accumbens", "substantia-nigra", "prefrontal-cortex"],
  pathwayIds: ["mesolimbic", "nigrostriatal", "tuberoinfundibular", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia — psychotic manifestations",
      status: "fda-approved",
      description: "Positive-symptom control, oral or IM; decades of evidence and the cheapest effective option globally.",
      ageGroup: "Adults & ≥3 years (USA label)",
    },
    {
      name: "Acute agitation / psychotic excitement",
      status: "fda-approved",
      description: "IM haloperidol ± lorazepam is the classical rapid-tranquillisation combination.",
    },
    {
      name: "Tourette's disorder — tics and vocal utterances",
      status: "fda-approved",
      description: "Highly effective tic suppressant when symptoms are severe.",
    },
    {
      name: "Severe behaviour problems / hyperexcitability in children (second line)",
      status: "fda-approved",
      description: "Reserved for severe cases unresponsive to behavioural approaches.",
    },
    {
      name: "Prolonged parenteral antipsychotic therapy — decanoate",
      status: "fda-approved",
      description: "4-weekly depot for non-adherent maintenance.",
    },
    {
      name: "Delirium (agitated)",
      status: "off-label",
      description: "The best-evidenced antipsychotic for ICU/ward delirium agitation (with quetiapine for prophylaxis debates ongoing).",
    },
    {
      name: "Bipolar mania",
      status: "off-label",
      description: "Effective anti-manic, largely replaced by atypicals for maintenance due to adverse effects.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to haloperidol",
      severity: "absolute",
      rationale: "Rare anaphylaxis reported.",
    },
    {
      name: "Elderly patients with dementia-related psychosis",
      severity: "absolute",
      rationale: "Class boxed warning: increased mortality.",
    },
    {
      name: "Parkinson's disease / Lewy body dementia",
      severity: "absolute",
      rationale: "D2 blockade causes catastrophic motor worsening — use quetiapine, clozapine, or pimavanserin.",
    },
    {
      name: "Baseline QT prolongation or uncompensated cardiac disease",
      severity: "relative",
      rationale: "Haloperidol (especially IV) prolongs QT — ECG and electrolytes first.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Haloperidol is not approved for dementia-related psychosis. Pooled analyses show increased mortality versus placebo, primarily cardiovascular and infectious.",
    },
    {
      title: "QT prolongation and torsades de pointes",
      text: "Haloperidol prolongs the QT interval; IV use, high doses, electrolyte disturbance, and combination with other QT drugs raise the risk of torsades de pointes and sudden death. Correct potassium/magnesium and monitor ECG in at-risk patients.",
    },
    {
      title: "Tardive dyskinesia",
      text: "Long-term use carries among the highest tardive dyskinesia risks of any antipsychotic; risk rises with age, duration, and female sex. Use the lowest effective dose.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Extrapyramidal symptoms (parkinsonism)",
      frequency: "very-common",
      severity: "moderate",
      description: "Rigidity, bradykinesia, shuffling gait — the haloperidol signature; dose-dependent.",
      management: "Reduce dose; add anticholinergic (benztropine/trihexyphenidyl); consider atypical switch.",
    },
    {
      name: "Acute dystonia",
      frequency: "common",
      severity: "severe",
      description: "Painful muscle spasms — tongue, neck (torticollis), back (opisthotonus), oculogyric crisis; most common in young men within days.",
      management: "IM/IV benztropine or diphenhydramine — dramatic response; continue oral anticholinergic briefly.",
    },
    {
      name: "Akathisia",
      frequency: "common",
      severity: "moderate",
      description: "Motor restlessness, inability to sit still; frequently misread as worsening psychosis.",
      management: "Reduce dose; propranolol; benzodiazepine; distinguish from agitation before escalating.",
    },
    {
      name: "Hyperprolactinaemia",
      frequency: "very-common",
      severity: "moderate",
      description: "Among the highest prolactin elevations in psychiatry — amenorrhoea, galactorrhoea, gynaecomastia, sexual dysfunction, infertility.",
      management: "Ask directly; consider switching to a prolactin-sparing agent.",
    },
    {
      name: "Sedation",
      frequency: "common",
      severity: "mild",
      description: "Mild — less than low-potency phenothiazines; dose-related.",
      management: "Dose timing.",
    },
    {
      name: "Blurred vision and dry mouth",
      frequency: "uncommon",
      severity: "mild",
      description: "Mild anticholinergic-type effects despite low M1 affinity.",
      management: "Reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Haloperidol is the classic NMS drug: lead-pipe rigidity, hyperthermia, autonomic instability, CK elevation, coma — mortality 10–20% untreated.",
      management: "Stop immediately; ICU; dantrolene/bromocriptine; avoid rechallenge for at least 2 weeks.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "common",
      severity: "severe",
      description: "Orofacial, limb, and truncal dyskinesia; the highest-risk common antipsychotic with chronic use.",
      management: "Prevention first — lowest dose, shortest duration; VMAT2 inhibitors for severe cases; consider clozapine.",
    },
    {
      name: "Torsades de pointes / sudden death (QT)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Dose-related QT prolongation, especially IV and with electrolyte disturbance.",
      management: "ECG monitoring in at-risk; correct K+/Mg2+; stop if QTc > 500 ms.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description: "Seizure-threshold lowering, mostly at high doses.",
      management: "Caution in epilepsy; dose review.",
    },
    {
      name: "Neutropenia (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Rare haematological toxicity — the reason clozapine's story began.",
      management: "Check FBC if unexplained fever.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "AIMS examination",
      frequency: "Baseline, then every 6 months (the highest-TD-risk common agent)",
      rationale: "Tardive dyskinesia surveillance is mandatory in long-term use.",
    },
    {
      parameter: "EPS screen at every early review",
      frequency: "Weeks 1–4",
      rationale: "Parkinsonism, dystonia, and akathisia are the early-treatment hazards.",
    },
    {
      parameter: "ECG",
      frequency: "Baseline if cardiac risk factors, IV use, or QT-drug combinations",
      rationale: "QT surveillance in at-risk patients.",
    },
    {
      parameter: "Potassium and magnesium",
      frequency: "When ill, on diuretics, or before IV use",
      rationale: "Electrolyte depletion amplifies QT risk.",
    },
    {
      parameter: "Prolactin if symptomatic",
      frequency: "When menstrual/sexual/breast symptoms emerge",
      rationale: "Symptomatic hyperprolactinaemia is common.",
    },
    {
      parameter: "Weight and metabolic panel",
      frequency: "Baseline, then annually",
      rationale: "Lower metabolic risk than atypicals — light-touch monitoring.",
    },
  ],
  interactions: [
    {
      drug: "Other QT-prolonging drugs",
      severity: "contraindicated",
      mechanism: "Additive QT effect — torsades risk concentrates.",
      action: "Avoid combinations; ECG if unavoidable.",
    },
    {
      drug: "Lithium",
      severity: "major",
      mechanism: "Historic association with encephalopathy and NMS-like syndromes at high combined exposure.",
      action: "Monitor closely; use lowest doses; recognise early neurotoxicity.",
    },
    {
      drug: "Carbamazepine and enzyme inducers",
      severity: "moderate",
      mechanism: "Lower haloperidol levels.",
      action: "Monitor response; dose adjustment.",
    },
    {
      drug: "CNS depressants",
      severity: "moderate",
      mechanism: "Additive sedation.",
      action: "Counsel; adjust.",
    },
    {
      drug: "Anticholinergics",
      severity: "moderate",
      mechanism: "Often co-prescribed for EPS — adds cognitive and bowel burden.",
      action: "Use the minimum effective anticholinergic duration.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    summary: "Decades of use in pregnancy have not shown a major teratogenic signal — among the best-characterised antipsychotics in pregnancy. Third-trimester exposure can cause neonatal EPS and withdrawal. Relapse prevention in serious psychosis usually outweighs fetal risk.",
    lactation: "Small milk transfer; infant EPS-like symptoms (stiffness, tremor) possible — monitor. Generally considered acceptable with infant monitoring.",
  },
  renalAdjustment: "No dose adjustment; standard caution.",
  hepaticAdjustment: "Use cautiously in significant hepatic impairment.",
  /* ---- Education ---- */
  patientExplanation: "Haloperidol is a strong, old, well-understood medicine that blocks dopamine — the brain chemical that is overactive in psychosis and severe agitation. It is powerful and inexpensive, but its strength shows in the body too: stiffness, restlessness, or odd muscle spasms are common early effects, and your doctor will actively check for and treat these.",
  patientEducationPoints: [
    "Report stiffness, shakiness, restlessness, or unusual tongue/mouth movements early — these are treatable.",
    "Stand up slowly during the first week.",
    "Do not stop suddenly — discuss any change with your doctor.",
    "Benefit from Haloperidol builds over weeks — do not judge it in the first days.",
    "Tell every doctor and pharmacist you see that you take this medicine.",
  ],
  clinicalPearls: [
    "High potency = clean but stiff: minimal sedation/orthostasis/anticholinergic, maximal EPS and prolactin — haloperidol's entire safety story in one line.",
    "Acute dystonia in a young man within 72 hours of the first dose is the classic presentation — benztropine IM reverses it in minutes.",
    "Akathisia misread as 'worse psychosis' is the most dangerous haloperidol error — the response is a lower dose, never a higher one.",
    "Haloperidol + lorazepam IM is the classical rapid-tranquillisation duo; add promethazine where protocols prefer it.",
    "IV haloperidol demands ECG and electrolytes — the torsades risk is real at high cumulative doses.",
    "Decanoate: 10–20× the oral daily dose, given 4-weekly — the standard conversion at stabilisation.",
    "In resource-limited settings, haloperidol remains the most cost-effective antipsychotic on earth — mastering its motor risk is the skill that makes it safe.",
    "NMS is the emergency: rigidity + fever + autonomic instability = stop, cool, ICU — haloperidol is its prototype drug.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Haloperidol: Haloperidol is a potent, selective D2 receptor antagonist — strong, competitive dopamine blockade with minimal action at histamine, muscarinic, or alpha-1 receptors.",
        "Uses of Haloperidol: Schizophrenia — psychotic manifestations; Acute agitation / psychotic excitement; Tourette's disorder — tics and vocal utterances; Severe behaviour problems / hyperexcitability in children (second line)",
        "Mechanism: potent selective D2 antagonist — the reference typical antipsychotic.",
        "High potency, 'clean' binding: no anticholinergic, no orthostasis, little sedation — but maximum EPS and hyperprolactinaemia.",
      ],
      practical: [
        "Prescribe Haloperidol for schizophrenia — psychotic manifestations with dose, timing, and duration.",
        "Outline the monitoring plan: AIMS examination (Baseline, then every 6 months (the highest-TD-risk common agent)); EPS screen at every early review (Weeks 1–4); ECG (Baseline if cardiac risk factors, IV use, or QT-drug combinations)",
      ],
      longAnswer: [
        "Haloperidol: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: potent selective D2 antagonist — the reference typical antipsychotic.",
        "High potency, 'clean' binding: no anticholinergic, no orthostasis, little sedation — but maximum EPS and hyperprolactinaemia.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: potent selective D2 antagonist — the reference typical antipsychotic.",
        "High potency, 'clean' binding: no anticholinergic, no orthostasis, little sedation — but maximum EPS and hyperprolactinaemia.",
        "Therapeutic D2 occupancy 65–75%; EPS > 78–80% — the narrow window concept.",
        "Classical emergency uses: IM rapid tranquillisation (with lorazepam), delirium with agitation, acute dystonia (treats and causes).",
        "Decanoate: 10–20× oral daily dose every 4 weeks.",
        "Highest-priority risks: acute dystonia (young men), akathisia, TD with chronic use, NMS, QT (IV).",
      ],
      pyqConcepts: [
        "Mechanism/target of Haloperidol",
        "Key adverse effect: Neuroleptic malignant syndrome",
        "Dosing and titration of Haloperidol",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Haloperidol develops neuroleptic malignant syndrome — next best step?",
        "When to choose Haloperidol over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 receptor (potent competitive antagonist); sigma receptors at higher doses",
        "Most common side effects: Extrapyramidal symptoms (parkinsonism), Acute dystonia, Akathisia",
        "Key contraindication: Known hypersensitivity to haloperidol",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "High potency = clean but stiff: no sedation or hypotension, maximum motor risk.",
        "Dystonia in the first 72 hours, akathisia in the first weeks, TD in the long years — the haloperidol clock.",
        "Akathisia misdiagnosed as worsening is the classic error — lower the dose.",
        "Decanoate 10–20× oral dose 4-weekly is the depot conversion to remember.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Mechanism: potent selective D2 antagonist — the reference typical antipsychotic.",
    "High potency, 'clean' binding: no anticholinergic, no orthostasis, little sedation — but maximum EPS and hyperprolactinaemia.",
    "Therapeutic D2 occupancy 65–75%; EPS > 78–80% — the narrow window concept.",
    "Classical emergency uses: IM rapid tranquillisation (with lorazepam), delirium with agitation, acute dystonia (treats and causes).",
    "Decanoate: 10–20× oral daily dose every 4 weeks.",
    "Highest-priority risks: acute dystonia (young men), akathisia, TD with chronic use, NMS, QT (IV).",
    "Contraindicated in Parkinson's disease and Lewy body dementia.",
    "Contraindicated with strong QT-prolonging drug combinations; correct K+/Mg2+ first.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "Acute agitation in the emergency department — the haloperidol hour",
      presentation: "A 26-year-old man with acute psychotic agitation receives IM haloperidol and lorazepam.",
      history: "A 26-year-old man is brought by police to the emergency department after being found directing traffic undressed at 2 am. He is agitated, shouting that voices command him, and has not slept for 3 nights. No prior psychiatric history obtainable; no signs of intoxication; capillary glucose normal.",
      examination: "Extremely agitated, responding to auditory hallucinations, disorganised speech; no focal neurology. Vital signs: HR 112, BP 142/88, temp 37.0. Physical examination limited by agitation.",
      diagnosis: "Acute psychotic agitation — first presentation, most consistent with schizophreniaform psychosis pending workup.",
      rationale: "IM haloperidol with lorazepam is the classical rapid-tranquillisation combination: fast, reliable, cheap, and — crucially — the patient has no cardiac history or ECG risk factors. IV access obtained for chemistry and baseline checks. Anticholinergic cover is prescribed for the first days given his age and sex (highest dystonia demographic).",
      management: "Haloperidol 5 mg IM + lorazepam 2 mg IM. Observed 1:1. Within 40 minutes the patient is calmed and cooperative enough for examination and bloods. Oral haloperidol 5 mg twice daily begins the next morning with benztropine 2 mg nightly for the first week; workup initiated.",
      outcome: "Day 2: mild parkinsonian cogwheeling noted — benztropine continued; haloperidol reduced to 5 mg nocte. Psychosis improves steadily over 2 weeks; the diagnosis is confirmed as schizophreniform disorder; transition planning to an atypical antipsychotic begins as soon as acute control is consolidated.",
      teachingPoints: [
        "Rapid tranquillisation: treat the danger, then the diagnosis — calm first, investigate immediately after.",
        "The young-male dystonia demographic earns anticholinergic cover from the first dose.",
        "Plan the exit strategy before the first dose: haloperidol controls the storm; an atypical with better long-term tolerability is usually the destination.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Typical Antipsychotic comparison — choosing within the class",
      primaryDrug: "Haloperidol",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "D2 receptor (potent competitive antagonist); sigma receptors at higher doses",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "See full guide",
            },
            {
              drug: "Fluphenazine",
              value: "See full guide",
            },
            {
              drug: "Perphenazine",
              value: "See full guide",
            },
            {
              drug: "Pimozide",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "Oral 12–38 hours (wide variation); decanoate ~3 weeks.",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "—",
            },
            {
              drug: "Fluphenazine",
              value: "—",
            },
            {
              drug: "Perphenazine",
              value: "—",
            },
            {
              drug: "Pimozide",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "Low — weight gain not expected.",
            },
            {
              drug: "Fluphenazine",
              value: "Low — weight gain not expected.",
            },
            {
              drug: "Perphenazine",
              value: "Low — weight gain not expected.",
            },
            {
              drug: "Pimozide",
              value: "Low — weight gain not expected.",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Mild — among the least sedating antipsychotics; alerting more than calming at low doses.",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "Mild.",
            },
            {
              drug: "Fluphenazine",
              value: "Mild.",
            },
            {
              drug: "Perphenazine",
              value: "Mild.",
            },
            {
              drug: "Pimozide",
              value: "Mild.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Highest-potency D2 blockade with minimal sedation/hypotension — the agitation and delirium tool",
          comparisons: [
            {
              drug: "Chlorpromazine",
              value: "Historic prototype + heavy sedation for agitation; anti-hiccup oddity",
            },
            {
              drug: "Fluphenazine",
              value: "The historic 2–5-weekly decanoate depot for maintenance",
            },
            {
              drug: "Perphenazine",
              value: "The CATIE-proven mid-potency typical",
            },
            {
              drug: "Pimozide",
              value: "Tourette's + delusional parasitosis specialist (ECG mandatory)",
            },
          ],
        },
      ],
      takeaway: "All typical antipsychotics share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Minutes (IM/IV)",
      title: "Agitation calms",
      description: "IM onset ~20–30 minutes — the basis of rapid tranquillisation.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Hours–days",
      title: "First motor effects",
      description: "Dystonia risk peaks in the first 72 hours; parkinsonism and akathisia emerge in week 1–2.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Days–2 weeks",
      title: "Psychosis begins responding",
      description: "Positive symptoms improve over 1–2 weeks at adequate D2 occupancy.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full assessment point",
      description: "Adequate trial judged at 4–6 weeks of adequate dose.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Week 4 (decanoate)",
      title: "Steady depot state",
      description: "After 2–3 injections, trough levels stabilise — dosing interval individualised 3–5 weeks.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months+",
      title: "TD surveillance era",
      description: "AIMS every 6 months; prolactin symptoms asked; dose rationalisation attempts.",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why did my neck/eyes lock up after the first dose?",
      answer: "That is acute dystonia — a known, dramatic but completely reversible muscle spasm from the medicine's strong dopamine blockade. It is most common in young men in the first days. An injection of another medicine (benztropine or diphenhydramine) relieves it within minutes, and a short course of tablets prevents recurrence.",
    },
    {
      question: "Is haloperidol still used when newer medicines exist?",
      answer: "Very much so: it remains the most reliable and cheapest option for acute agitation and psychosis worldwide, and the 4-weekly injection is a maintenance mainstay in many programmes. Newer drugs improved motor and metabolic tolerability, not fundamental efficacy.",
    },
    {
      question: "I feel intensely restless — is my illness worse?",
      answer: "Possibly the opposite: restlessness that makes you unable to sit still (akathisia) is a medicine effect that can mimic worsening. Do not increase the dose yourself — report it; it is treated with dose reduction or propranolol.",
    },
    {
      question: "Why an ECG and blood tests before IV use?",
      answer: "Haloperidol can lengthen the heart's electrical reset time (QT), and low potassium or magnesium makes that dangerous. A quick ECG and blood check keep a useful medicine safe.",
    },
    {
      question: "Can it be used long-term?",
      answer: "Yes, at the lowest effective dose, with twice-yearly movement checks — the long-term risk to monitor is tardive dyskinesia, involuntary movements that can become permanent.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for Schizophrenia (2020)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), haloperidol monograph, p. 55",
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
        source: "FDA Prescribing Information for Haldol (Haloperidol)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for haloperidol — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Haloperidol",
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
      name: "Chlorpromazine",
      slug: "chlorpromazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Fluphenazine",
      slug: "fluphenazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Perphenazine",
      slug: "perphenazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Pimozide",
      slug: "pimozide",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Thioridazine",
      slug: "thioridazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
    {
      name: "Trifluoperazine",
      slug: "trifluoperazine",
      drugClass: "Typical Antipsychotic",
      relationship: "Same class (Typical Antipsychotic)",
    },
  ],
  relatedConditions: [
    {
      name: "Schizophrenia — psychotic manifestations",
      relationship: "primary",
    },
    {
      name: "Acute agitation / psychotic excitement",
      relationship: "primary",
    },
    {
      name: "Tourette's disorder — tics and vocal utterances",
      relationship: "primary",
    },
    {
      name: "Severe behaviour problems / hyperexcitability in children (second line)",
      relationship: "primary",
    },
    {
      name: "Prolonged parenteral antipsychotic therapy — decanoate",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Haloperidol",
      type: "drug",
      href: "/drugs/haloperidol",
      note: "The drug you're reading about",
    },
    {
      label: "Typical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Typical (Conventional) Antipsychotic — Butyrophenone",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "D2 receptor (potent competitive antagonist); sigma receptors at higher doses",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Nucleus Accumbens",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
    },
    {
      label: "Substantia Nigra",
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
      label: "Schizophrenia — psychotic manifestations",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Acute agitation / psychotic excitement",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Tourette's disorder — tics and vocal utterances",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Neuroleptic malignant syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Tardive dyskinesia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Extrapyramidal symptoms (parkinsonism)",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Haloperidol",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The prototype high-potency D2 blocker — gold-standard potency for psychosis and agitation, at the price of EPS.",
    summary: "Haloperidol is a prescription medicine used to treat schizophrenia — psychotic manifestations. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Haloperidol is a strong, old, well-understood medicine that blocks dopamine — the brain chemical that is overactive in psychosis and severe agitation. It is powerful and inexpensive, but its strength shows in the body too: stiffness, restlessness, or odd muscle spasms are common early effects, and your doctor will actively check for and treat these.",
    sideEffects: "The most common side effects are: extrapyramidal symptoms (parkinsonism), acute dystonia, akathisia, hyperprolactinaemia, sedation, blurred vision and dry mouth. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: aims examination (baseline, then every 6 months (the highest-td-risk common agent)); eps screen at every early review (weeks 1–4); ecg (baseline if cardiac risk factors, iv use, or qt-drug combinations). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Known hypersensitivity to haloperidol, Elderly patients with dementia-related psychosis, Parkinson's disease / Lewy body dementia, Baseline QT prolongation or uncompensated cardiac disease. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Other QT-prolonging drugs, Lithium, Carbamazepine and enzyme inducers, CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Serenace / Haloperidol (generic)",
        manufacturer: "RPG/others + Jan Aushadhi",
        strengths: "0.5–10 mg tabs, drops, IM",
      },
      {
        name: "Haloperidol Decanoate",
        manufacturer: "multiple",
        strengths: "50 mg/mL ampoule",
      },
    ],
    typicalDoses: "Psychosis 2–10 mg/day; IM agitation 5 mg; decanoate 50–200 mg 4-weekly.",
    prescribingScenarios: [
      "Emergency agitation in district hospitals.",
      "Schizophrenia maintenance on decanoate in institute programmes.",
      "ICU delirium protocols with lorazepam.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "AIMS 6-monthly, EPS review each visit, ECG before IV/high-dose use; weight annually.",
    patientCounselling: [
      "Report stiffness, restlessness, or odd muscle spasms immediately — they are treatable.",
      "Do not increase the dose for restlessness without review — it may be the medicine, not the illness.",
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
    note: "Generic tablets and injection widely stocked in Jan Aushadhi kendras.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Typical Antipsychotics",
    members: [
      {
        name: "Haloperidol",
        slug: "haloperidol",
        relationship: "This guide",
        distinguishing: "Highest-potency D2 blockade with minimal sedation/hypotension — the agitation and delirium tool",
      },
      {
        name: "Chlorpromazine",
        slug: "chlorpromazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "Historic prototype + heavy sedation for agitation; anti-hiccup oddity",
      },
      {
        name: "Fluphenazine",
        slug: "fluphenazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "The historic 2–5-weekly decanoate depot for maintenance",
      },
      {
        name: "Perphenazine",
        slug: "perphenazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "The CATIE-proven mid-potency typical",
      },
      {
        name: "Pimozide",
        slug: "pimozide",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "Tourette's + delusional parasitosis specialist (ECG mandatory)",
      },
      {
        name: "Thioridazine",
        slug: "thioridazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "The restricted QT-retinopathy phenothiazine — last-line",
      },
      {
        name: "Trifluoperazine",
        slug: "trifluoperazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "Indian formulary staple high-potency typical",
      },
      {
        name: "Cyamemazine",
        slug: "cyamemazine",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "French-market anxiolytic phenothiazine curiosity",
      },
      {
        name: "Flupenthixol",
        slug: "flupenthixol",
        relationship: "Same class (Typical Antipsychotic)",
        distinguishing: "The activating thioxanthene with 2–4-weekly depot (Europe/India)",
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
      question: "Which molecular target does Haloperidol primarily act on?",
      options: [
        "D2 receptor (potent competitive antagonist); sigma receptors at higher doses",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "GABA-A receptor",
      ],
      correctIndex: 0,
      explanation: "Haloperidol acts primarily at D2 receptor (potent competitive antagonist); sigma receptors at higher doses. Haloperidol is a potent, selective D2 receptor antagonist — strong, competitive dopamine blockade with minimal action at histamine, muscarinic, or alpha-1 receptors.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Haloperidol?",
      options: ["Extrapyramidal symptoms (parkinsonism)", "Acute dystonia", "Akathisia", "Hyperprolactinaemia"],
      correctIndex: 0,
      explanation: "Extrapyramidal symptoms (parkinsonism) — Rigidity, bradykinesia, shuffling gait — the haloperidol signature; dose-dependent.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Haloperidol for psychosis (oral, moderate)?",
      options: ["2–10 mg/day", "20 mg/day (expert settings)", "2–10 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For psychosis (oral, moderate): start 1–2 mg twice daily, target 2–10 mg/day, maximum 20 mg/day (expert settings). Titrate by 2–4 mg/day to response",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Haloperidol in two sentences.",
      answer: "Haloperidol is a potent, selective D2 receptor antagonist — strong, competitive dopamine blockade with minimal action at histamine, muscarinic, or alpha-1 receptors. Net effect: Robust reduction of positive psychotic symptoms, agitation, and tics; dose-dependent EPS, dystonia, akathisia, and hyperprolactinaemia from the same blockade.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Haloperidol.",
      answer: "Schizophrenia — psychotic manifestations, Acute agitation / psychotic excitement, Tourette's disorder — tics and vocal utterances, Severe behaviour problems / hyperexcitability in children (second line). (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Haloperidol and how you would manage it.",
      answer: "Neuroleptic malignant syndrome: Haloperidol is the classic NMS drug: lead-pipe rigidity, hyperthermia, autonomic instability, CK elevation, coma — mortality 10–20% untreated. Management: Stop immediately; ICU; dantrolene/bromocriptine; avoid rechallenge for at least 2 weeks.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Haloperidol require?",
      answer: "AIMS examination (Baseline, then every 6 months (the highest-TD-risk common agent)); EPS screen at every early review (Weeks 1–4); ECG (Baseline if cardiac risk factors, IV use, or QT-drug combinations); Potassium and magnesium (When ill, on diuretics, or before IV use)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Haloperidol that separates safe prescribers from unsafe ones.",
      answer: "High potency = clean but stiff: no sedation or hypotension, maximum motor risk.",
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
      checkpoint: "You now know what Haloperidol is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Haloperidol works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Haloperidol safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Haloperidol.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Haloperidol with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Haloperidol.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "IM agitation control: 20–30 minutes.",
      "Psychosis: 1–2 weeks at adequate dose; full assessment at 4–6 weeks.",
    ],
    ifItWorks: [
      "Consolidate at the lowest effective dose.",
      "Plan transition to maintenance — oral, or decanoate 4-weekly when adherence is fragile.",
      "Attempt dose reduction after stabilisation to find the minimum.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Haloperidol (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Lorazepam for acute agitation (the classical pair).",
      "Anticholinergic for EPS — prophylactically in dystonia-risk demographics.",
      "Lithium or valproate if treating mania.",
    ],
    testsBeforeStarting: [
      "Baseline ECG if cardiac risk factors or planned IV use.",
      "Electrolytes (K+/Mg2+) before IV or high-dose use.",
      "Baseline AIMS; weight; prolactin only if symptomatic.",
    ],
    sideEffectLogic: [
      "Strong selective D2 binding predicts everything: EPS, dystonia, akathisia, hyperprolactinaemia — and minimal sedation or hypotension. The adverse-effect profile is the mechanism made visible.",
    ],
    sideEffectManagement: [
      "Reduce dose — the single most effective EPS manoeuvre.",
      "Anticholinergics for dystonia/parkinsonism; propranolol for akathisia.",
      "Switch to an atypical for dose-limiting or persistent motor effects.",
    ],
    sideEffectRescue: [
      "IM/IV benztropine 2 mg for acute dystonia (reversal in minutes).",
      "Propranolol for akathisia.",
      "Prophylactic anticholinergic for the first week in high-dystonia-risk patients.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "Mild — among the least sedating antipsychotics; alerting more than calming at low doses.",
    dosing: [
      {
        indication: "Psychosis (oral, moderate)",
        starting: "1–2 mg twice daily",
        titration: "Titrate by 2–4 mg/day to response",
        target: "2–10 mg/day",
        max: "20 mg/day (expert settings)",
      },
      {
        indication: "Acute agitation (IM)",
        starting: "2–5 mg IM",
        titration: "Repeat after 30–60 min if needed (max 3 doses typically)",
        target: "2–5 mg per episode",
        max: "Per protocol; ECG if cumulative doses high",
      },
      {
        indication: "Acute agitation (IV, ICU/delirium)",
        starting: "0.5–2 mg IV",
        titration: "Repeat per protocol with ECG monitoring",
        target: "0.5–2 mg per dose",
        max: "Protocol-limited; watch QTc",
      },
      {
        indication: "Tourette's disorder",
        starting: "0.5–2 mg/day",
        titration: "Increase slowly to minimal effective dose",
        target: "1–4 mg/day",
        max: "10 mg/day",
      },
      {
        indication: "Decanoate (maintenance)",
        starting: "10–20× the previous oral daily dose, 4-weekly IM",
        titration: "Initial: oral bridge per protocol; adjust interval 3–5 weeks by response",
        target: "50–200 mg per 4 weeks",
        max: "Individualised",
      },
    ],
    dosageForms: ["Tablets 0.5, 1, 2, 5, 10, 20 mg", "Oral solution 2 mg/mL", "Injection 5 mg/mL (IM)", "Decanoate 50, 100 mg/mL"],
    dosingTips: [
      "Give the largest dose at night if sedation is desired, morning if alertness matters more.",
      "Anticholinergic cover for the first week in young men (dystonia demographic).",
      "Decanoate: 10–20× oral daily dose, first injection often with a short oral overlap.",
      "One ECG before high-dose or IV use prevents the rare catastrophic outcome.",
      "In delirium, haloperidol treats agitation, not the underlying cause — the workup continues.",
    ],
    overdose: [
      "Severe EPS (rigidity, dystonia), sedation, hypotension, QT prolongation with torsades risk.",
      "ECG monitoring, electrolyte correction, supportive care; physostigmine avoided; anticholinergics for dystonia.",
    ],
    longTermUse: "Effective for decades of maintenance, but TD risk accrues with time — AIMS surveillance and dose-minimisation attempts are the long-term discipline.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper rather than abrupt stop — withdrawal dyskinesia and rebound psychosis described.",
      "After switching to an atypical, overlap during cross-titration.",
      "Decanoate tapers itself — effects persist a month after the last injection.",
    ],
    pharmacokinetics: [
      "Oral half-life 12–38 h; decanoate ~3 weeks.",
      "Metabolism via CYP3A4/2D6 + glucuronidation — moderate interaction surface.",
      "IM nearly complete bioavailability.",
    ],
    doNotUse: [
      "Known hypersensitivity.",
      "Dementia-related psychosis in the elderly (boxed warning).",
      "Parkinson's disease / Lewy body dementia — motor catastrophe.",
      "Baseline long QT or uncompensated heart failure without cardiology input.",
    ],
    specialPopulations: [
      {
        population: "Elderly",
        guidance: [
          "Halve doses; the elderly develop EPS and TD at lower exposures.",
          "Delirium use: lowest dose, shortest course, daily review.",
          "Dementia-related psychosis: boxed warning.",
        ],
      },
      {
        population: "Children",
        guidance: [
          "Approved in severe disorders (Tourette's, refractory aggression) — specialist dosing.",
          "Dystonia risk highest in children and young men.",
        ],
      },
      {
        population: "Pregnancy",
        guidance: [
          "Among the best-characterised antipsychotics in pregnancy — no major signal.",
          "Third-trimester neonatal EPS monitoring.",
        ],
      },
    ],
    potentialAdvantages: [
      "Robust, fast, reliable antipsychotic and anti-agitation effect.",
      "Cheapest effective option worldwide — formulary backbone.",
      "No weight gain, no orthostasis, no anticholinergic burden.",
      "Depot every 4 weeks.",
      "Best-studied agent in delirium agitation.",
    ],
    potentialDisadvantages: [
      "Maximum EPS/dystonia/akathisia among common agents.",
      "Highest chronic TD risk with long use.",
      "Marked hyperprolactinaemia.",
      "QT caution in IV/high-dose use.",
      "NMS prototype.",
    ],
    primaryTargetSymptoms: ["Positive psychotic symptoms", "Acute agitation", "Tics (Tourette's)", "Delirium with agitation"],
    pearls: [
      "High potency = clean but stiff: no sedation or hypotension, maximum motor risk.",
      "Dystonia in the first 72 hours, akathisia in the first weeks, TD in the long years — the haloperidol clock.",
      "Akathisia misdiagnosed as worsening is the classic error — lower the dose.",
      "Decanoate 10–20× oral dose 4-weekly is the depot conversion to remember.",
      "IV haloperidol: ECG and electrolytes first, always.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
