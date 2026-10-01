import type { Drug } from "../types";

/**
 * Risperidone — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), risperidone monograph (book p. 110)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const risperidone: Drug = {
  /* ---- Identity ---- */
  slug: "risperidone",
  genericName: "Risperidone",
  brandNames: ["Risperdal", "Risperdal Consta", "Risperdal M-Tab", "Perseris", "Rykindo"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Risperidone"],
  /* ---- Hero / summary ---- */
  tagline: "The potent serotonin-dopamine antagonist — strong D2 binding gives robust anti-manic and antipsychotic power at the price of prolactin.",
  summary: "Risperidone is a serotonin-dopamine antagonist (SDA) and one of the most widely used atypical antipsychotics worldwide. Its strong D2 receptor binding delivers powerful efficacy against psychosis and mania, while 5-HT2A antagonism preserves an atypical profile at low-to-moderate doses. It is the atypical most associated with hyperprolactinaemia and, above 6 mg/day, extrapyramidal symptoms — 'the atypical that behaves like a typical when the dose climbs'. Available as oral, orally disintegrating, and long-acting injectable forms, with deep paediatric and LAI evidence.",
  estimatedReadTime: "18 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Risperidone — from its molecular target (D2 receptor (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1 adrenergic; H1) to clinical effect.",
    "List the FDA-approved and off-label uses of Risperidone.",
    "Predict the common and serious side effects of Risperidone from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Risperidone.",
    "Compare Risperidone with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Risperidone blocks 5-HT2A receptors with high affinity and D2 receptors potently — a strong serotonin-dopamine antagonist; its active metabolite (paliperidone) adds a long-acting second wave.",
    molecularTarget: "D2 receptor (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1 adrenergic; H1",
    effect: "Powerful reduction of positive psychotic and manic symptoms; dose-dependent EPS and prolactin elevation as the D2 occupancy extends beyond therapeutic range.",
    steps: [
      "Risperidone binds D2 receptors with higher affinity than most atypicals — therapeutic efficacy appears at ~60–72% D2 occupancy.",
      "5-HT2A antagonism disinhibits dopamine release in nigrostriatal and tuberoinfundibular pathways, buying relative protection from EPS and hyperprolactinaemia at low doses.",
      "Above roughly 6 mg/day, D2 occupancy exceeds ~80% — the 5-HT2A protection is overwhelmed, and EPS and prolactin rise appear (a 'typical-like' profile).",
      "Alpha-1 blockade produces orthostatic hypotension, particularly at treatment initiation.",
      "9-hydroxylation converts risperidone to paliperidone (the same molecule marketed as Invega) — an active metabolite extending effective half-life.",
    ],
    pharmacokinetics: "Well absorbed orally, peak ~1 hour (IR). Steady state ~5 days. Long-acting microsphere injection (Consta) releases therapeutic levels only after ~3 weeks — oral overlap is mandatory at initiation.",
    halfLife: "About 20–24 hours combined (parent ~3 hours + active metabolite 9-hydroxyrisperidone ~24 hours); paliperidone itself ~23 hours.",
    activeMetabolite: "9-hydroxyrisperidone (paliperidone) — equipotent D2/5-HT2A antagonist; the basis of the paliperidone product line.",
    metabolism: "Hepatic CYP2D6 (9-hydroxylation); renal excretion of parent and metabolite.",
    excretion: "Renal — significant; reduce dose in renal impairment.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Risperidone",
        sublabel: "Atypical antipsychotic",
        variant: "inhibit",
      },
      {
        id: "5ht2a",
        label: "5-HT2A receptor",
        sublabel: "Blocked at high affinity",
        variant: "target",
      },
      {
        id: "d2",
        label: "D2 receptor",
        sublabel: "Occupied in mesolimbic pathway",
        variant: "target",
      },
      {
        id: "da",
        label: "Dopamine firing",
        sublabel: "Disinhibited by 5-HT2A blockade",
        variant: "process",
      },
      {
        id: "meso",
        label: "Mesolimbic pathway",
        sublabel: "Psychotic salience normalised",
        variant: "output",
      },
      {
        id: "pfc",
        label: "Prefrontal cortex",
        sublabel: "Negative & cognitive symptoms",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "5ht2a",
        label: "blocks",
        type: "inhibit",
      },
      {
        from: "drug",
        to: "d2",
        label: "occupies",
        type: "inhibit",
      },
      {
        from: "5ht2a",
        to: "da",
        label: "disinhibits",
        type: "stimulate",
      },
      {
        from: "da",
        to: "meso",
        label: "normalises",
      },
      {
        from: "d2",
        to: "meso",
        label: "reduces psychosis signal",
      },
      {
        from: "drug",
        to: "pfc",
        label: "5-HT2A-mediated benefit",
      },
    ],
    caption: "5-HT2A antagonism 'releases the brake' on dopamine firing, while moderate D2 occupancy treats positive symptoms — the serotonin-dopamine hypothesis of atypical antipsychotics.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)", "Norepinephrine (NE)"],
  receptors: ["D2 receptor (potent antagonist)", "5-HT2A (high-affinity antagonist)", "5-HT2C (antagonist)", "Alpha-1 adrenergic (antagonist)", "H1 (antagonist, moderate)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens", "substantia-nigra"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal", "tuberoinfundibular"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "First-line atypical; robust efficacy for positive symptoms in adults and adolescents.",
      ageGroup: "Adults & ≥13 years",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      status: "fda-approved",
      description: "As monotherapy or adjunct to lithium or valproate; one of the best-evidenced anti-manic agents.",
      ageGroup: "Adults & ≥10 years",
    },
    {
      name: "Bipolar I maintenance",
      status: "fda-approved",
      description: "Prevents relapse as monotherapy or adjunct.",
    },
    {
      name: "Irritability associated with autistic disorder",
      status: "fda-approved",
      description: "Reduces aggression, tantrums, and self-injury; the best-studied agent for this indication.",
      ageGroup: "5–16 years",
    },
    {
      name: "Schizoaffective disorder",
      status: "off-label",
      description: "Widely used, especially as long-acting injection.",
    },
    {
      name: "Behavioural disturbance in dementia",
      status: "off-label",
      description: "Modest efficacy but boxed-warning territory — use only after non-pharmacological measures fail, at the lowest dose.",
    },
    {
      name: "Tourette's disorder and tics",
      status: "off-label",
      description: "Effective tic suppressant; aripiprazole is the FDA-approved alternative.",
    },
    {
      name: "Delirium (agitated)",
      status: "off-label",
      description: "Low-dose use in ICU/postoperative settings when non-drug measures fail.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to risperidone or paliperidone",
      severity: "absolute",
      rationale: "Cross-reactivity within the class is possible.",
    },
    {
      name: "Elderly patients with dementia-related psychosis",
      severity: "absolute",
      rationale: "Class boxed warning: increased cerebrovascular events and mortality.",
    },
    {
      name: "Levodopa / dopamine agonists",
      severity: "relative",
      rationale: "D2 blockade antagonises antiparkinsonian effect — risperidone will worsen Parkinson's disease psychosis (prefer quetiapine, clozapine, or pimavanserin).",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Risperidone is not approved for dementia-related psychosis. Pooled analyses show approximately 1.6–1.7-fold increased mortality versus placebo, mainly cardiovascular and infectious deaths, and a dose-related increase in cerebrovascular adverse events (stroke and transient ischaemic attacks).",
    },
    {
      title: "Tardive dyskinesia (class warning)",
      text: "Long-term use carries a risk of potentially irreversible tardive dyskinesia; risk rises with age, duration, and female sex. Prescribe the lowest effective dose and monitor with AIMS.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Hyperprolactinaemia",
      frequency: "very-common",
      severity: "moderate",
      description: "The signature adverse effect — highest among atypicals. Galactorrhoea, amenorrhoea, gynaecomastia, sexual dysfunction, and infertility; often asymptomatic on labs.",
      management: "Ask about sexual and menstrual changes directly; switch to aripiprazole if symptomatic — prolactin usually normalises.",
    },
    {
      name: "Extrapyramidal symptoms (EPS)",
      frequency: "common",
      severity: "moderate",
      description: "Dose-dependent parkinsonism, rigidity, and bradykinesia — rises sharply above 6 mg/day; also acute dystonia at initiation.",
      management: "Reduce dose; anticholinergic (benztropine, trihexyphenidyl) for parkinsonism/dystonia.",
    },
    {
      name: "Akathisia",
      frequency: "common",
      severity: "moderate",
      description: "Dose-related inner restlessness; less than with aripiprazole or typicals but frequent.",
      management: "Dose reduction; propranolol; switch if persistent.",
    },
    {
      name: "Sedation and drowsiness",
      frequency: "common",
      severity: "mild",
      description: "Mild sedation, more prominent in children and at initiation.",
      management: "Usually transient; dose at bedtime.",
    },
    {
      name: "Orthostatic hypotension",
      frequency: "common",
      severity: "moderate",
      description: "Alpha-1 mediated; first-dose phenomenon — dizziness on standing, tachycardia.",
      management: "Titrate slowly; instruct slow rising; review antihypertensives.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "moderate",
      description: "Moderate weight gain — less than olanzapine/quetiapine, more than aripiprazole/lurasidone.",
      management: "Lifestyle intervention; metformin if rising; monitor metabolic panel.",
    },
    {
      name: "Nausea and abdominal discomfort",
      frequency: "common",
      severity: "mild",
      description: "Usually transient at initiation.",
      management: "Take with food; reassurance.",
    },
    {
      name: "Anxiety and headache",
      frequency: "common",
      severity: "mild",
      description: "Usually settle within the first week or two.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Rigidity, hyperthermia, autonomic instability, raised creatine kinase, altered consciousness — reported with risperidone as with all D2 blockers.",
      management: "Stop immediately; ICU supportive care; dantrolene/bromocriptine.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "uncommon",
      severity: "severe",
      description: "Involuntary orofacial and limb movements; risk rises with dose, age, and duration.",
      management: "Reduce or switch (aripiprazole or clozapine); valbenazine/deutetrabenazine for severe cases.",
    },
    {
      name: "Cerebrovascular events in dementia patients",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Dose-related stroke and TIA signal in elderly dementia patients — the basis of the boxed warning.",
      management: "Avoid in dementia-related psychosis; stop if focal signs develop.",
    },
    {
      name: "Priapism",
      frequency: "rare",
      severity: "severe",
      description: "Prolonged erection from alpha-1 blockade — a urological emergency.",
      management: "Immediate urological referral.",
    },
    {
      name: "Metabolic syndrome",
      frequency: "uncommon",
      severity: "severe",
      description: "Weight gain, dyslipidaemia, hyperglycaemia — moderate risk.",
      management: "Monitor weight, fasting glucose, lipids; intervene early.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description: "Dose-related lowering of seizure threshold.",
      management: "Caution in epilepsy; consider valproate co-prescription if unavoidable.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Weight and BMI",
      frequency: "Baseline, 4, 8, 12 weeks, then quarterly",
      rationale: "Moderate metabolic risk.",
    },
    {
      parameter: "Fasting glucose / HbA1c",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Class metabolic risk.",
    },
    {
      parameter: "Lipid profile",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Class metabolic risk.",
    },
    {
      parameter: "Prolactin (if symptomatic)",
      frequency: "When symptoms of hyperprolactinaemia emerge",
      rationale: "Galactorrhoea, amenorrhoea, gynaecomastia, sexual dysfunction — ask, don't wait.",
    },
    {
      parameter: "AIMS examination",
      frequency: "Baseline, then every 6–12 months",
      rationale: "Tardive dyskinesia surveillance.",
    },
    {
      parameter: "Blood pressure (orthostatic)",
      frequency: "Baseline and during titration",
      rationale: "Alpha-1 blockade — first-dose syncope risk.",
    },
    {
      parameter: "Renal function",
      frequency: "Baseline and if clinically indicated",
      rationale: "Renally cleared; dose adjust in impairment.",
    },
  ],
  interactions: [
    {
      drug: "Fluoxetine and paroxetine (strong CYP2D6 inhibitors)",
      severity: "major",
      mechanism: "Inhibit risperidone's metabolism — raise combined active levels.",
      action: "Consider reducing risperidone dose; monitor for adverse effects.",
    },
    {
      drug: "Carbamazepine and enzyme inducers",
      severity: "major",
      mechanism: "Induce CYP2D6/3A4 — lower risperidone levels, possible loss of efficacy.",
      action: "Monitor response; may need dose increase.",
    },
    {
      drug: "Levodopa and dopamine agonists",
      severity: "major",
      mechanism: "Central D2 antagonism opposes dopaminergic therapy.",
      action: "Avoid — prefer quetiapine, clozapine, or pimavanserin for Parkinson's psychosis.",
    },
    {
      drug: "Antihypertensives",
      severity: "moderate",
      mechanism: "Additive hypotension via alpha-1 blockade.",
      action: "Monitor standing blood pressure; adjust antihypertensives.",
    },
    {
      drug: "CNS depressants and alcohol",
      severity: "moderate",
      mechanism: "Additive sedation.",
      action: "Counsel against alcohol; anticipate increased sedation.",
    },
    {
      drug: "QT-prolonging drugs",
      severity: "moderate",
      mechanism: "Additive QT effect (risperidone has a modest signal).",
      action: "ECG if multiple QT drugs are unavoidable.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    evidenceBasedSummary: "Registry data show no major malformation signal above background, but data remain limited; neonates exposed in the third trimester may have EPS and withdrawal symptoms.",
    indianPracticeNote: "Indian practice mirrors international guidance — continue if needed for psychosis control, involve obstetrics, and document shared decision-making.",
    summary: "Available registry data have not shown a major teratogenic signal, but experience remains limited. In serious mental illness, relapse prevention usually outweighs fetal risk — do not stop abruptly. Third-trimester exposure warrants neonatal monitoring for rigidity, tremor, and poor feeding.",
    lactation: "Risperidone passes into breast milk in small amounts; infant sedation and weight-gain concerns exist. Many guidelines consider it acceptable with infant monitoring, but alternatives with less milk transfer (e.g., olanzapine) are sometimes preferred.",
  },
  renalAdjustment: "Halve the starting dose in renal impairment (CrCl < 30 mL/min) due to reduced clearance of the active metabolite; titrate slowly.",
  hepaticAdjustment: "No formal adjustment for mild impairment; start low in moderate-to-severe impairment given first-pass metabolism.",
  /* ---- Education ---- */
  patientExplanation: "Risperidine quiets overactive dopamine and serotonin signalling in the brain — the circuits that drive hallucinations, paranoia, and mania. It is one of the strongest medicines in its class, which is also why it can cause side effects like breast discomfort, missed periods, or restless legs — all of which are worth mentioning to your doctor early rather than stopping the medicine.",
  patientEducationPoints: [
    "Standing up slowly in the first week prevents dizziness — the medicine can lower blood pressure on standing.",
    "Report breast discomfort, milk production, missed periods, or sexual changes — these are common, treatable, and nothing to be embarrassed about.",
    "If your legs feel restless or you feel like you cannot sit still, tell your doctor — the dose may need adjusting.",
    "Benefit builds over 1–3 weeks; do not stop because it hasn't worked immediately.",
    "If you are on the 2-weekly injection, never miss your appointment — the medicine releases slowly and needs topping up on schedule.",
    "Keep your weight, sugar, and cholesterol check-ups — this medicine can cause modest weight gain.",
    "Do not stop suddenly — discuss any change with your doctor first.",
  ],
  clinicalPearls: [
    "6 mg/day is the cliff: below it risperidone behaves like an atypical; above it EPS and prolactin rise steeply — more is not more effective, only more adverse.",
    "Hyperprolactinaemia is the signature: ask every woman about periods and every man about gynaecomastia — patients rarely volunteer these symptoms.",
    "Switching to aripiprazole reliably normalises prolactin — one of the most satisfying switch manoeuvres in psychopharmacology.",
    "Consta takes 3 weeks to start releasing drug — overlap oral risperidone for 3 weeks at initiation or the patient will relapse.",
    "Risperidone's active metabolite IS paliperidone — knowing this one fact explains the paliperidone product family, the renal dosing, and the 2D6 interaction profile.",
    "In autism-related irritability (ages 5–16), risperidone and aripiprazole are the two best-evidenced agents — expect weight gain in children and monitor it actively.",
    "For Parkinson's disease psychosis, risperidone is the wrong tool — its D2 blockade worsens motor symptoms; use quetiapine, clozapine, or pimavanserin.",
    "Fluoxetine can double risperidone exposure — a common accidental combination in bipolar depression.",
    "Subcutaneous once-monthly and 2-weekly microsphere options now span the adherence spectrum — the most flexible LAI shelf of any antipsychotic.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Risperidone: Risperidone blocks 5-HT2A receptors with high affinity and D2 receptors potently — a strong serotonin-dopamine antagonist; its active metabolite (paliperidone) adds a long-acting second wave.",
        "Uses of Risperidone: Schizophrenia; Acute manic / mixed episodes of bipolar I; Bipolar I maintenance; Irritability associated with autistic disorder",
        "Mechanism: potent D2 + 5-HT2A antagonist — strongest D2 binding among commonly used atypicals.",
        "Signature adverse effect: hyperprolactinaemia — highest in class (galactorrhoea, amenorrhoea, gynaecomastia, sexual dysfunction).",
      ],
      practical: [
        "Prescribe Risperidone for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, 4, 8, 12 weeks, then quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (Baseline, 12 weeks, then annually)",
      ],
      longAnswer: [
        "Risperidone: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: potent D2 + 5-HT2A antagonist — strongest D2 binding among commonly used atypicals.",
        "Signature adverse effect: hyperprolactinaemia — highest in class (galactorrhoea, amenorrhoea, gynaecomastia, sexual dysfunction).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: potent D2 + 5-HT2A antagonist — strongest D2 binding among commonly used atypicals.",
        "Signature adverse effect: hyperprolactinaemia — highest in class (galactorrhoea, amenorrhoea, gynaecomastia, sexual dysfunction).",
        "6 mg/day threshold: above it, EPS rises sharply — the atypical behaves like a typical.",
        "Active metabolite = 9-hydroxyrisperidone = paliperidone (marketed separately as Invega).",
        "CYP2D6 metabolism — fluoxetine/paroxetine raise levels; carbamazepine lowers them.",
        "Renal clearance matters — halve the dose in significant renal impairment.",
      ],
      pyqConcepts: [
        "Mechanism/target of Risperidone",
        "Key adverse effect: Neuroleptic malignant syndrome",
        "Dosing and titration of Risperidone",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Risperidone develops neuroleptic malignant syndrome — next best step?",
        "When to choose Risperidone over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 receptor (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1 adrenergic; H1",
        "Most common side effects: Hyperprolactinaemia, Extrapyramidal symptoms (EPS), Akathisia",
        "Key contraindication: Known hypersensitivity to risperidone or paliperidone",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "At 6 mg the drug flips: below it an atypical, above it a typical — dose discipline is everything.",
        "Prolactin problems announce themselves only if you ask — build one question into every review.",
        "Aripiprazole is the antidote to risperidone hyperprolactinaemia — switching reliably normalises it.",
        "Consta takes 3 weeks to start working — '3-week overlap' is the rule to tattoo on the prescription.",
      ],
    },
  },
  memoryTricks: [
    {
      title: "RISPeridone = RISPonses for PROlactin",
      trick: "Risperidone is the atypical with the PROlactin problem — PRL rises, periods stop, breasts leak.",
      remembers: "Which atypical causes hyperprolactinaemia",
    },
    {
      title: "The 6 mg cliff",
      trick: "Below 6 mg = atypical (safe); above 6 mg = typical (EPS). Remember: 'at 6 it flips'.",
      remembers: "The dose threshold where risperidone loses its atypical advantage",
    },
    {
      title: "3-week overlap rule",
      trick: "Consta = 'comes later' — 3 weeks of oral overlap before the injection takes over.",
      remembers: "Long-acting risperidone initiation",
    },
  ],
  highYieldSummary: [
    "Mechanism: potent D2 + 5-HT2A antagonist — strongest D2 binding among commonly used atypicals.",
    "Signature adverse effect: hyperprolactinaemia — highest in class (galactorrhoea, amenorrhoea, gynaecomastia, sexual dysfunction).",
    "6 mg/day threshold: above it, EPS rises sharply — the atypical behaves like a typical.",
    "Active metabolite = 9-hydroxyrisperidone = paliperidone (marketed separately as Invega).",
    "CYP2D6 metabolism — fluoxetine/paroxetine raise levels; carbamazepine lowers them.",
    "Renal clearance matters — halve the dose in significant renal impairment.",
    "Consta (q2wk IM): requires 3 weeks of oral overlap at initiation.",
    "FDA ages: schizophrenia ≥13, bipolar mania ≥10, autism irritability 5–16.",
    "Boxed warnings: mortality and cerebrovascular events in dementia-related psychosis.",
    "Avoid in Parkinson's psychosis (D2 blockade worsens motor function) — prefer quetiapine/clozapine/pimavanserin.",
    "Autism irritability: risperidone + aripiprazole are the two best-evidenced drugs.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First-episode mania — the speed of escalation decides the drug",
      presentation: "A 19-year-old woman with acute mania, started on risperidone after lithium is deferred.",
      history: "A 19-year-old student is brought to the emergency department by her parents with 5 days of reduced sleep (2–3 hours, feels rested), pressured speech, grandiose plans to start a company, shopping sprees beyond her means, and increasing irritability. First episode; no substance use; family history of bipolar disorder in the father.",
      examination: "Elated but irritable affect; pressured speech; flight of ideas; psychomotor agitation. No psychotic features. YMRS 32. Physical exam normal; pregnancy test negative; thyroid function and renal panel normal.",
      diagnosis: "Bipolar I disorder, current episode manic, severe without psychotic features.",
      rationale: "An antipsychotic is needed for acute mania; risperidone has among the best anti-manic evidence, low cost, and flexible dosing. Lithium is started simultaneously for maintenance. Risperidone 2 mg at night targets the target symptoms (sleep, agitation, grandiosity) within days; prolactin and weight are the risks to monitor over the years ahead.",
      management: "Risperidone 2 mg at bedtime, titrated to 4 mg over 4 days; lithium 600 mg begun and titrated to levels. Sleep hygiene, no-discharge-driving counselling, family psychoeducation about bipolar illness. Review at 1 week.",
      outcome: "Manic symptoms improve substantially by day 7 (YMRS 14); sleep normalises first. Mild bilateral hand tremor and one episode of orthostatic dizziness occur; dose held at 4 mg rather than escalated. Outpatient transition with lithium continuation and a planned risperidone taper after 3 months of stability.",
      teachingPoints: [
        "In acute mania, sedation and sleep restoration are the first signs of response — expect them within days.",
        "Choose an anti-manic antipsychotic with an eye on the maintenance phase: prolactin and weight over years matter in a 19-year-old.",
        "Lithium plus an antipsychotic is a standard combination — the antipsychotic handles the acute episode; lithium holds the long term.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical antipsychotic comparison — where risperidone sits",
      primaryDrug: "Risperidone",
      rows: [
        {
          attribute: "Mechanism",
          primaryValue: "Potent D2 antagonist + 5-HT2A antagonist (SDA)",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "D2/D3 partial agonist (stabiliser)",
            },
            {
              drug: "Olanzapine",
              value: "D2/5-HT2A antagonist + strong M1/H1",
            },
            {
              drug: "Quetiapine",
              value: "Weak D2 + H1-dominant (norquetiapine NET)",
            },
            {
              drug: "Clozapine",
              value: "Loose D2 + broad multi-receptor profile",
            },
          ],
        },
        {
          attribute: "Prolactin",
          primaryValue: "Highest elevation in class",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "Usually lowers prolactin",
            },
            {
              drug: "Olanzapine",
              value: "Minimal rise",
            },
            {
              drug: "Quetiapine",
              value: "No rise",
            },
            {
              drug: "Clozapine",
              value: "No rise",
            },
          ],
        },
        {
          attribute: "EPS risk",
          primaryValue: "Dose-dependent — rises sharply > 6 mg",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "Low EPS; akathisia instead",
            },
            {
              drug: "Olanzapine",
              value: "Low",
            },
            {
              drug: "Quetiapine",
              value: "Lowest",
            },
            {
              drug: "Clozapine",
              value: "Lowest — treats refractory cases",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Moderate",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "Lowest tier",
            },
            {
              drug: "Olanzapine",
              value: "Highest tier",
            },
            {
              drug: "Quetiapine",
              value: "Moderate–high",
            },
            {
              drug: "Clozapine",
              value: "Highest",
            },
          ],
        },
        {
          attribute: "Best niche",
          primaryValue: "Acute mania, autism irritability (5+), LAI experience, low cost",
          comparisons: [
            {
              drug: "Aripiprazole",
              value: "Metabolic risk, augmentation, maintenance",
            },
            {
              drug: "Olanzapine",
              value: "Robust efficacy, poor-intake patients, IM agitation",
            },
            {
              drug: "Quetiapine",
              value: "Bipolar depression, sedation needed",
            },
            {
              drug: "Clozapine",
              value: "Treatment resistance, suicidality",
            },
          ],
        },
      ],
      takeaway: "Risperidone is the 'strong and reliable' atypical: best-in-class anti-manic potency and paediatric data, cheapest generic, and the most flexible LAI shelf — priced at prolactin elevation and EPS above 6 mg. It rewards careful dosing: most patients need 2–6 mg, not more.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "First doses act",
      description: "D2/5-HT2A occupancy within hours; orthostatic dizziness is the first-dose phenomenon to warn about.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early clinical drift",
      description: "Sleep, agitation, and aggression often improve first — especially in mania and autism irritability.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–2",
      title: "EPS and prolactin emerge",
      description: "Dose-dependent adverse effects surface — the window to catch parkinsonism, akathisia, and galactorrhoea early.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 2–4",
      title: "Core antipsychotic response",
      description: "Positive symptoms measurably improve in schizophrenia; formal thought disorder follows.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Week 3 (Consta)",
      title: "LAI release begins",
      description: "Microsphere injection only starts delivering therapeutic levels at week 3 — oral overlap covers the gap.",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Months 3+",
      title: "Maintenance",
      description: "Metabolic monitoring continues; AIMS at least annually; LAI conversion for adherence.",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why has my menstrual cycle stopped on risperidone?",
      answer: "Risperidone raises prolactin — the hormone that controls milk production and periods. High prolactin can stop periods, cause breast discharge, or reduce sex drive. It is common, reversible, and worth reporting: options include dose reduction, a switch to aripiprazole (which usually normalises prolactin), or treating with dopamine-like medication.",
    },
    {
      question: "Is risperidone stronger than other antipsychotics?",
      answer: "It binds dopamine receptors more tightly than most atypicals, which gives it robust anti-manic and antipsychotic power. That same potency is why its movement and hormone side effects are more prominent than gentler alternatives like quetiapine.",
    },
    {
      question: "What is the two-weekly injection?",
      answer: "Risperidone Consta is the same medicine in a slow-release injection given every 2 weeks. It guarantees steady levels when daily tablets are missed or forgotten. Starting it requires 3 weeks of tablets alongside, because the injection takes that long to begin working.",
    },
    {
      question: "My mother has dementia and was given risperidone for agitation — is that safe?",
      answer: "It is a carefully controlled situation: regulatory agencies warn of increased stroke risk and mortality when antipsychotics are used in dementia. Guidelines allow short-term, low-dose use for severe distress or danger only after non-drug approaches have failed — and with documented review dates.",
    },
    {
      question: "Can it be used in children?",
      answer: "Yes — it is one of the best-studied antipsychotics in young people: schizophrenia from 13, bipolar mania from 10, and autism-related irritability from 5. Children are more sensitive to sedation and weight gain, so monitoring is closer.",
    },
    {
      question: "What should I do if I feel faint standing up?",
      answer: "Sit or lie down immediately. This medicine lowers blood pressure on standing, especially in the first week. Rise slowly, drink enough fluids, and tell your doctor — a slower titration usually solves it.",
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
        section: "6th ed. (2017), risperidone monograph, p. 110",
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
        source: "FDA Prescribing Information for Risperdal (Risperidone)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for risperidone — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Risperidone",
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
      name: "Aripiprazole",
      slug: "aripiprazole",
      drugClass: "Dopamine Stabiliser",
      relationship: "Same class (Dopamine Stabiliser)",
    },
    {
      name: "Clozapine",
      slug: "clozapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Lurasidone",
      slug: "lurasidone",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Olanzapine",
      slug: "olanzapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Paliperidone",
      slug: "paliperidone",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
    {
      name: "Quetiapine",
      slug: "quetiapine",
      drugClass: "Atypical Antipsychotic",
      relationship: "Same class (Atypical Antipsychotic)",
    },
  ],
  relatedConditions: [
    {
      name: "Schizophrenia",
      relationship: "primary",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      relationship: "primary",
    },
    {
      name: "Bipolar I maintenance",
      relationship: "primary",
    },
    {
      name: "Irritability associated with autistic disorder",
      relationship: "primary",
    },
    {
      name: "Schizoaffective disorder",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Risperidone",
      type: "drug",
      href: "/drugs/risperidone",
      note: "The drug you're reading about",
    },
    {
      label: "Atypical Antipsychotic",
      type: "class",
      href: "#mechanism",
      note: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
    },
    {
      label: "Dopamine (DA)",
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
      label: "D2 receptor (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1 adrenergic; H1",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Prefrontal Cortex",
      type: "brain-region",
      href: "#brain-regions",
      note: "Region where the drug acts",
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
      label: "Schizophrenia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Acute manic / mixed episodes of bipolar I",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar I maintenance",
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
      label: "Hyperprolactinaemia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Risperidone",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The potent serotonin-dopamine antagonist — strong D2 binding gives robust anti-manic and antipsychotic power at the price of prolactin.",
    summary: "Risperidone is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Risperidine quiets overactive dopamine and serotonin signalling in the brain — the circuits that drive hallucinations, paranoia, and mania. It is one of the strongest medicines in its class, which is also why it can cause side effects like breast discomfort, missed periods, or restless legs — all of which are worth mentioning to your doctor early rather than stopping the medicine.",
    sideEffects: "The most common side effects are: hyperprolactinaemia, extrapyramidal symptoms (eps), akathisia, sedation and drowsiness, orthostatic hypotension, weight gain. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, 4, 8, 12 weeks, then quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually); lipid profile (baseline, 12 weeks, then annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Known hypersensitivity to risperidone or paliperidone, Elderly patients with dementia-related psychosis, Levodopa / dopamine agonists. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Fluoxetine and paroxetine (strong CYP2D6 inhibitors), Carbamazepine and enzyme inducers, Levodopa and dopamine agonists, Antihypertensives. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Risdone",
        manufacturer: "Intas",
        strengths: "1 mg, 2 mg, 3 mg, 4 mg",
      },
      {
        name: "Sizodon",
        manufacturer: "Sun Pharma",
        strengths: "1 mg, 2 mg, 3 mg, 4 mg",
      },
      {
        name: "Risperidone (generic)",
        manufacturer: "Multiple, incl. Jan Aushadhi",
        strengths: "1–4 mg tablets, oral solution",
      },
      {
        name: "Risdone Consta / generic LAI",
        manufacturer: "Intas and others",
        strengths: "25 mg, 37.5 mg, 50 mg vials",
      },
    ],
    typicalDoses: "Psychosis 2–6 mg at bedtime; mania 2–6 mg; autism irritability 0.5–2 mg (paediatric); Consta 25–50 mg IM q2wk.",
    prescribingScenarios: [
      "Acute mania admissions in district hospitals — low cost and IM availability.",
      "Maintenance via Consta in government psychiatry institutes for relapse prevention.",
      "Paediatric autism-related aggression in developmental clinics.",
      "Schizophrenia first-episode protocols in medical colleges.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "One of the cheapest atypicals in India; Jan Aushadhi stocks generic tablets. Cost varies by manufacturer and region; LAI vials remain the expensive item.",
    monitoring: "Weight/BMI, fasting glucose, and lipids at baseline and periodically per district-hospital protocols; AIMS where feasible; prolactin only when symptomatic.",
    patientCounselling: [
      "Bedtime dosing for sedation and orthostasis.",
      "Ask women about periods and men about breast discomfort at every visit — prolactin effects are common and treatable.",
      "Consta appointments are every 2 weeks — missing one risks relapse.",
      "Do not stop the medicine when the family pressure to stop it is highest (early recovery).",
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
    note: "Generic risperidone tablets widely stocked in Jan Aushadhi kendras.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Risperidone",
        slug: "risperidone",
        relationship: "This guide",
        distinguishing: "Most potent D2 blockade among atypicals — highest prolactin, best-studied LAI",
      },
      {
        name: "Aripiprazole",
        slug: "aripiprazole",
        relationship: "Same class (Dopamine Stabiliser)",
        distinguishing: "Least metabolic burden among atypicals — the activating 'thermostat' antipsychotic",
      },
      {
        name: "Clozapine",
        slug: "clozapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Treatment-resistant schizophrenia + anti-suicide efficacy — the drug that rescues the failures",
      },
      {
        name: "Lurasidone",
        slug: "lurasidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Bipolar depression + metabolic safety — the 'clean' lurasidone/ziprasidone/aripiprazole trio",
      },
      {
        name: "Olanzapine",
        slug: "olanzapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Most robust broad-spectrum atypical — heaviest metabolic burden",
      },
      {
        name: "Paliperidone",
        slug: "paliperidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "The LAI platform king — monthly to 6-monthly injections for schizophrenia",
      },
      {
        name: "Quetiapine",
        slug: "quetiapine",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Bipolar depression approval + virtually zero EPS/prolactin — the sedating antidepressant-antipsychotic",
      },
      {
        name: "Ziprasidone",
        slug: "ziprasidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Weight-neutral oral + the least hypotensive IM antipsychotic — with QT vigilance",
      },
      {
        name: "Amisulpride",
        slug: "amisulpride",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "The dose-band benzamide — European/Indian staple with the clozapine-drool rescue",
      },
    ],
  },
  learningTimeBreakdown: {
    read: "18 min",
    study: "40 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Risperidone primarily act on?",
      options: [
        "D2 receptor (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1 adrenergic; H1",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "GABA-A receptor",
      ],
      correctIndex: 0,
      explanation: "Risperidone acts primarily at D2 receptor (potent antagonist); 5-HT2A (high-affinity antagonist); alpha-1 adrenergic; H1. Risperidone blocks 5-HT2A receptors with high affinity and D2 receptors potently — a strong serotonin-dopamine antagonist; its active metabolite (paliperidone) adds a long-acting second wave.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Risperidone?",
      options: ["Hyperprolactinaemia", "Extrapyramidal symptoms (EPS)", "Akathisia", "Sedation and drowsiness"],
      correctIndex: 0,
      explanation: "Hyperprolactinaemia — The signature adverse effect — highest among atypicals. Galactorrhoea, amenorrhoea, gynaecomastia, sexual dysfunction, and infertility; often asymptomatic on labs.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Risperidone for schizophrenia (adults)?",
      options: ["4–6 mg/day", "8 mg/day", "4–6 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (adults): start 2 mg/day, target 4–6 mg/day, maximum 8 mg/day. Increase by 1–2 mg/day to 4–6 mg; increments no faster than every 24–72 h",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Risperidone in two sentences.",
      answer: "Risperidone blocks 5-HT2A receptors with high affinity and D2 receptors potently — a strong serotonin-dopamine antagonist; its active metabolite (paliperidone) adds a long-acting second wave. Net effect: Powerful reduction of positive psychotic and manic symptoms; dose-dependent EPS and prolactin elevation as the D2 occupancy extends beyond therapeutic range.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Risperidone.",
      answer: "Schizophrenia, Acute manic / mixed episodes of bipolar I, Bipolar I maintenance, Irritability associated with autistic disorder. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Risperidone and how you would manage it.",
      answer: "Neuroleptic malignant syndrome: Rigidity, hyperthermia, autonomic instability, raised creatine kinase, altered consciousness — reported with risperidone as with all D2 blockers. Management: Stop immediately; ICU supportive care; dantrolene/bromocriptine.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Risperidone require?",
      answer: "Weight and BMI (Baseline, 4, 8, 12 weeks, then quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipid profile (Baseline, 12 weeks, then annually); Prolactin (if symptomatic) (When symptoms of hyperprolactinaemia emerge)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Risperidone that separates safe prescribers from unsafe ones.",
      answer: "At 6 mg the drug flips: below it an atypical, above it a typical — dose discipline is everything.",
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
      checkpoint: "You now know what Risperidone is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Risperidone works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Risperidone safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Risperidone.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Risperidone with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Risperidone.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Mania: anti-manic effect often visible within 2–5 days.",
      "Schizophrenia: agitation and hostility improve within days; positive symptoms over 1–3 weeks.",
      "Autism irritability: aggressive and self-injurious behaviour often improves within 1–2 weeks.",
      "Consta: no significant release for 3 weeks — oral supplementation mandatory at initiation.",
    ],
    ifItWorks: [
      "Continue at the lowest effective dose; taper toward 2–4 mg/day for maintenance if tolerated.",
      "In bipolar disorder, pair with a mood stabiliser for long-term prophylaxis and plan the antipsychotic exit (usually after 3–6 months of stability).",
      "In schizophrenia, continue for at least 1–2 years after the first episode; indefinitely after relapse.",
      "Consider switching to LAI if adherence is fragile — early, not after the second relapse.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Risperidone (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Lithium or valproate in mania not controlled by risperidone alone.",
      "Benzodiazepine short-term for agitation or catatonic features.",
      "Antidepressant continuation for comorbid depression — monitor for switching.",
      "In TRS, the evidence-based move is clozapine, not polypharmacy.",
    ],
    testsBeforeStarting: [
      "Baseline weight/BMI, waist, fasting glucose/HbA1c, lipids, blood pressure.",
      "Pregnancy test where relevant.",
      "Baseline AIMS; consider baseline ECG if cardiac risk factors.",
      "Prolactin only if symptoms emerge — routine screening is not required.",
    ],
    sideEffectLogic: [
      "Adverse effects follow receptor binding: strong D2 → EPS and prolactin; alpha-1 → orthostasis; H1 → sedation; 5-HT2C/H1 → weight gain. Every risperidone side effect is predictable from its binding profile.",
    ],
    sideEffectManagement: [
      "Wait — nausea, headache, and sedation usually settle within 1–2 weeks.",
      "Reduce the dose — the single most effective manoeuvre for EPS and prolactin effects.",
      "Add an anticholinergic for parkinsonism/dystonia; propranolol for akathisia.",
      "Switch to aripiprazole if hyperprolactinaemia is symptomatic — prolactin reliably falls.",
    ],
    sideEffectRescue: [
      "Benztropine or trihexyphenidyl for acute dystonia and parkinsonism.",
      "Propranolol for akathisia.",
      "Metformin early for weight trajectory heading upward.",
      "Dose reduction rather than discontinuation for most moderate adverse effects.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "Mild-to-moderate; dose at bedtime; children more sensitive than adults.",
    dosing: [
      {
        indication: "Schizophrenia (adults)",
        starting: "2 mg/day",
        titration: "Increase by 1–2 mg/day to 4–6 mg; increments no faster than every 24–72 h",
        target: "4–6 mg/day",
        max: "8 mg/day",
        notes: [
          "Optimal efficacy/adverse-effect balance is 4–6 mg",
          "Doses > 6 mg add EPS without adding efficacy for most patients",
        ],
      },
      {
        indication: "Schizophrenia (adolescents 13–17)",
        starting: "0.5 mg/day",
        titration: "Increase by 0.5–1 mg/day as tolerated",
        target: "3 mg/day",
        max: "6 mg/day",
        notes: [
          "Adolescents need lower doses on average than adults",
        ],
      },
      {
        indication: "Acute mania (adults)",
        starting: "2–3 mg/day",
        titration: "Increase by 1 mg/day as needed",
        target: "2–6 mg/day",
        max: "6 mg/day",
        notes: [
          "Adjunct to lithium/valproate equally effective",
          "Combine with a benzodiazepine for severe agitation",
        ],
      },
      {
        indication: "Acute mania (children 10–17)",
        starting: "0.5 mg/day",
        titration: "Increase by 0.5–1 mg/day",
        target: "1–2.5 mg/day",
        max: "2.5 mg/day",
        notes: [
          "Weight gain in children is the main concern — monitor closely",
        ],
      },
      {
        indication: "Irritability in autistic disorder",
        starting: "0.25–0.5 mg/day",
        titration: "Increase by 0.5 mg at intervals of at least 2 weeks",
        target: "0.5–2.5 mg/day",
        max: "3 mg/day (≥ 20 kg) / 2.5 mg (< 20 kg)",
        notes: [
          "Slow titration minimises sedation and weight gain",
          "Periodic off-taper attempts to establish continued need",
        ],
      },
      {
        indication: "LAI — Consta (q2wk IM gluteal/deltoid)",
        starting: "25 mg every 2 weeks",
        titration: "Oral overlap 3 weeks at initiation; dose adjustments no more often than every 4 weeks",
        target: "25–50 mg q2wk",
        max: "50 mg q2wk",
        notes: [
          "Oral dose before switching need not exceed 4–6 mg equivalence",
          "First therapeutic release only at week 3",
        ],
      },
      {
        indication: "LAI — Perseris (monthly SC abdominal)",
        starting: "90 mg monthly",
        titration: "No oral overlap needed if already tolerating oral risperidone; can start directly",
        target: "90–120 mg/month",
        max: "120 mg/month",
        notes: [
          "Alternative initiation pathway: 2 weeks of oral during first injection month",
        ],
      },
    ],
    dosageForms: [
      "Tablets 0.25, 0.5, 1, 2, 3, 4 mg",
      "Orally disintegrating tablets 0.5, 1, 2, 3, 4 mg",
      "Oral solution 1 mg/mL",
      "Consta 12.5, 25, 37.5, 50 mg vial (q2wk IM)",
      "Perseris 90, 120 mg SC prefilled syringe (monthly)",
    ],
    dosingTips: [
      "Dose at bedtime — sedation and orthostasis then mostly occur during sleep.",
      "Start 0.5–1 mg in the elderly and in children; their receptors are more sensitive.",
      "The dose–response ceiling is real: beyond 6 mg most extra binding is adverse, not therapeutic.",
      "When adding fluoxetine, expect higher risperidone levels — halve and titrate.",
      "Consta must be given every 2 weeks strictly; a 3–4 week gap requires re-initiation with oral overlap.",
      "Ask about sexual and menstrual health at every review — prolactin symptoms are silent until asked.",
      "Inexpensive generics make risperidone the workhorse antipsychotic in Indian public health settings.",
    ],
    overdose: [
      "Somnolence, EPS, hypotension, and tachycardia are expected; QT prolongation possible with large overdoses.",
      "Management: supportive — airway, circulation, IV fluids for hypotension; avoid major tranquilisers.",
      "No specific antidote; dialysis does not remove the drug (high protein binding).",
    ],
    longTermUse: "Years of use are well characterised; principal long-term risks are tardive dyskinesia, metabolic drift, and prolactin-related bone density loss — monitor AIMS, weight, and bone health in long-term users.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper rather than stop abruptly — rebound insomnia, agitation, and psychosis risk.",
      "Reduce by about 1 mg every 1–2 weeks at maintenance doses.",
      "After a single psychotic episode, guidelines still favour at least 1 year of continuation.",
      "For Consta, remember the 3-week release delay works in reverse — effects persist weeks after the last injection.",
    ],
    pharmacokinetics: [
      "Half-life ~20–24 h combined (parent + paliperidone).",
      "Steady state in ~5 days.",
      "CYP2D6 9-hydroxylation; renal excretion prominent.",
      "Consta: therapeutic release begins week 3, maintained q2wk.",
    ],
    doNotUse: [
      "Known hypersensitivity to risperidone/paliperidone.",
      "Dementia-related psychosis in the elderly (boxed warning).",
      "Parkinson's disease psychosis — D2 blockade worsens motor symptoms.",
      "As an as-needed sedative — prolactin and EPS risks are not PRN-friendly.",
    ],
    specialPopulations: [
      {
        population: "Renal impairment",
        guidance: [
          "Halve the starting dose at CrCl < 30 mL/min (0.5 mg starting).",
          "Titrate slowly; active metabolite renally cleared.",
        ],
      },
      {
        population: "Hepatic impairment",
        guidance: [
          "Start low (0.5 mg) in moderate–severe impairment.",
          "First-pass metabolism affected — watch for excessive first-dose hypotension.",
        ],
      },
      {
        population: "Cardiac impairment",
        guidance: [
          "Caution with heart failure — alpha-1 blockade and tachycardia.",
          "Modest QT effect — ECG if additional QT drugs.",
        ],
      },
      {
        population: "Elderly",
        guidance: [
          "Start 0.25–0.5 mg; the elderly are exquisitely sensitive to EPS, orthostasis, and falls.",
          "Dementia-related psychosis: boxed warning — avoid.",
          "Stroke risk in elderly dementia patients is dose-related.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Approved: schizophrenia ≥13, mania ≥10, autism irritability 5–16.",
          "Start at half the adult dose per kg; children gain weight faster — monitor BMI at every visit.",
          "Prolactin effects in adolescents deserve specific counselling (delayed puberty, menstrual changes).",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "Registry data show no major teratogenic signal; data limited.",
          "Relapse prevention usually outweighs risk — do not stop abruptly.",
          "Third trimester: neonatal EPS/withdrawal monitoring.",
          "Breastfeeding: small amounts in milk; usually acceptable with infant monitoring.",
        ],
      },
    ],
    potentialAdvantages: [
      "Among the most potent anti-manic and antipsychotic atypicals.",
      "Deepest LAI experience of any antipsychotic (q2wk IM, monthly SC).",
      "Best-studied agent for autism-related irritability (from age 5).",
      "Extensive paediatric data in bipolar mania.",
      "Inexpensive generics available worldwide, including Jan Aushadhi in India.",
      "Lowest-dose-friendly: works at 2–4 mg in most patients.",
    ],
    potentialDisadvantages: [
      "Hyperprolactinaemia — highest among atypicals.",
      "EPS above 6 mg/day — the 'atypical' advantage is dose-limited.",
      "Orthostatic hypotension at initiation.",
      "Moderate weight and metabolic risk.",
      "Wrong choice for Parkinson's psychosis.",
    ],
    primaryTargetSymptoms: [
      "Positive symptoms of psychosis",
      "Manic symptoms (hyperactivity, grandiosity, irritability)",
      "Aggression and self-injury (autism, conduct problems)",
      "Agitation and sleep loss in acute episodes",
      "Tics (off-label)",
    ],
    pearls: [
      "At 6 mg the drug flips: below it an atypical, above it a typical — dose discipline is everything.",
      "Prolactin problems announce themselves only if you ask — build one question into every review.",
      "Aripiprazole is the antidote to risperidone hyperprolactinaemia — switching reliably normalises it.",
      "Consta takes 3 weeks to start working — '3-week overlap' is the rule to tattoo on the prescription.",
      "Paliperidone is just risperidone's active metabolite — the entire Invega family is risperidone pharmacology.",
      "In children with autism-related irritability, weight gain is the price of dramatically reduced tantrums — pre-empt with lifestyle counselling.",
      "Fluoxetine plus risperidone is a stealth interaction — levels rise quietly.",
      "For long-term users, remember bones: chronic hyperprolactinaemia reduces bone density — check vitamin D and calcium status periodically.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
