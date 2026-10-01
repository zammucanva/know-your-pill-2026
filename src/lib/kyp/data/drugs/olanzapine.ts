import type { Drug } from "../types";

/**
 * Olanzapine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), olanzapine monograph (book p. 90)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const olanzapine: Drug = {
  /* ---- Identity ---- */
  slug: "olanzapine",
  genericName: "Olanzapine",
  brandNames: ["Zyprexa", "Zyprexa Zydis", "Zyprexa Relprevv", "Symbyax (olanzapine-fluoxetine)"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Olanzapine"],
  /* ---- Hero / summary ---- */
  tagline: "The robust workhorse atypical — strong efficacy across psychosis and mania, with the class's heaviest metabolic price tag.",
  summary: "Olanzapine is a serotonin-dopamine antagonist with prominent muscarinic and histamine binding — among the most pharmacologically 'dirty' and therefore most robust atypicals. It is highly effective for psychosis, mania, agitation, and (in combination with fluoxetine) bipolar and treatment-resistant depression, with early benefit often within days. Its twin burdens are sedation and the highest-tier weight gain and metabolic risk in the class — a trade-off that must be managed actively with lifestyle intervention, metformin, and switching when necessary.",
  estimatedReadTime: "18 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Olanzapine — from its molecular target (D2 (moderate-affinity antagonist); 5-HT2A; M1–M5 (antimuscarinic); H1 (potent); alpha-1) to clinical effect.",
    "List the FDA-approved and off-label uses of Olanzapine.",
    "Predict the common and serious side effects of Olanzapine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Olanzapine.",
    "Compare Olanzapine with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Olanzapine blocks D2 and 5-HT2A receptors plus muscarinic, histaminic, and alpha-1 receptors — broad receptor binding that delivers robust efficacy and a characteristically 'heavy' adverse-effect profile.",
    molecularTarget: "D2 (moderate-affinity antagonist); 5-HT2A; M1–M5 (antimuscarinic); H1 (potent); alpha-1",
    effect: "Broad monoaminergic and cholinergic modulation — powerful anti-manic, antipsychotic, and sedative effects with low EPS but high metabolic risk.",
    steps: [
      "Moderate D2 affinity — enough occupancy to treat psychosis and mania, with loose enough binding that EPS and prolactin rise are uncommon.",
      "Potent 5-HT2A antagonism contributes to efficacy and further protects the motor system.",
      "Strong H1 binding produces sedation and appetite stimulation — the entry point of its metabolic story.",
      "5-HT2C antagonism disinhibits appetite and feeding circuits in the hypothalamus — the deeper driver of weight gain.",
      "Muscarinic (M1–M4) antagonism adds sedation, dry mouth, and constipation — and contributes to its unusual efficacy in agitated delirium.",
      "The net effect: a robustly effective, calming antipsychotic whose metabolic cost must be budgeted for from day one.",
    ],
    pharmacokinetics: "Well absorbed orally (peak ~5–8 hours); food has no effect. Smoking (CYP1A2 induction) accelerates clearance substantially — levels drop when patients smoke, rise when they quit.",
    halfLife: "21–54 hours (mean about 30 hours) — once-daily dosing.",
    activeMetabolite: "No clinically important active metabolite.",
    metabolism: "Hepatic CYP1A2 (primary) and CYP2D6 (minor); direct glucuronidation.",
    excretion: "Predominantly hepatic; renal impairment has little effect on dosing.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Olanzapine",
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
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)", "Acetylcholine (ACh)", "Histamine"],
  receptors: ["D2 receptor (moderate antagonist)", "5-HT2A / 5-HT2C (antagonist)", "M1–M5 (antagonist)", "H1 (potent antagonist)", "Alpha-1 (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens", "hippocampus"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal", "tuberoinfundibular"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "First-line atypical with robust efficacy for positive and negative symptoms.",
      ageGroup: "Adults & ≥13 years",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      status: "fda-approved",
      description: "Among the most effective anti-manic agents; monotherapy or adjunct.",
      ageGroup: "Adults & ≥13 years",
    },
    {
      name: "Bipolar I maintenance",
      status: "fda-approved",
      description: "Effective relapse prevention as monotherapy or adjunct to lithium/valproate.",
    },
    {
      name: "Bipolar depression",
      status: "fda-approved",
      description: "As olanzapine-fluoxetine combination (Symbyax) — one of the few approved options for the depressed pole.",
    },
    {
      name: "Treatment-resistant depression",
      status: "fda-approved",
      description: "Olanzapine-fluoxetine combination is approved after failed antidepressant trials.",
    },
    {
      name: "Acute agitation (schizophrenia / bipolar mania)",
      status: "fda-approved",
      description: "Intramuscular formulation for rapid tranquillisation.",
    },
    {
      name: "Delirium (agitated)",
      status: "off-label",
      description: "Widely used in palliative and general medicine for agitated delirium — the anticholinergic profile is usually acceptable here.",
    },
    {
      name: "Nausea and cachexia (adjunct)",
      status: "off-label",
      description: "Its appetite-stimulating and antiemetic effects are sometimes used therapeutically in palliative care and oncology.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to olanzapine",
      severity: "absolute",
      rationale: "Rare anaphylaxis reported.",
    },
    {
      name: "Elderly patients with dementia-related psychosis",
      severity: "absolute",
      rationale: "Class boxed warning: increased mortality and cerebrovascular events.",
    },
    {
      name: "Olanzapine pamoate without post-injection observation",
      severity: "absolute",
      rationale: "Post-injection delirium/sedation syndrome can occur — a 3-hour observation REMS applies to the long-acting injection.",
    },
    {
      name: "History of diabetic ketoacidosis or poorly controlled diabetes",
      severity: "relative",
      rationale: "Olanzapine has the strongest hyperglycaemia and DKA signal in the class — prefer alternatives or use with active metabolic management.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Olanzapine is not approved for dementia-related psychosis. Pooled analyses show increased mortality (approximately 1.6–1.7-fold) versus placebo, primarily cardiovascular and infectious, with an increased risk of cerebrovascular events.",
    },
    {
      title: "Severe hyperglycaemia and diabetic ketoacidosis (class metabolic warning)",
      text: "Atypical antipsychotics — olanzapine among the highest-risk — can cause severe hyperglycaemia, sometimes presenting as diabetic ketoacidosis or non-ketotic hyperosmolar coma, occasionally in patients with no prior diabetes. Monitor glucose; educate patients on polyuria and polydipsia.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Weight gain",
      frequency: "very-common",
      severity: "severe",
      description: "The signature adverse effect — highest tier with clozapine; average gains of several kilograms are typical, with the trajectory visible within the first 6 weeks.",
      management: "Early lifestyle intervention; metformin (evidence-based) from the start of the upward trajectory; switch to a lower-risk agent if gain continues.",
    },
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "H1-mediated sedation — usually beneficial in acute mania/agitation, a burden in maintenance.",
      management: "Dose at bedtime; anticipate tolerance over 1–2 weeks; avoid driving early.",
    },
    {
      name: "Increased appetite and cravings",
      frequency: "very-common",
      severity: "moderate",
      description: "5-HT2C and H1 effects on hypothalamic feeding circuits — the behavioural front end of metabolic risk.",
      management: "Structured meals, no late-night eating, kitchen strategy counselling; metformin if gaining.",
    },
    {
      name: "Dry mouth, constipation",
      frequency: "common",
      severity: "mild",
      description: "Antimuscarinic effects; constipation can be severe in combination with other anticholinergics.",
      management: "Fluids, fibre, exercise; laxative if needed.",
    },
    {
      name: "Dizziness and orthostasis",
      frequency: "common",
      severity: "mild",
      description: "Alpha-1 blockade, mostly at initiation.",
      management: "Rise slowly; usually attenuates.",
    },
    {
      name: "Dyslipidaemia",
      frequency: "common",
      severity: "moderate",
      description: "Triglycerides and total cholesterol rise — part of the metabolic package.",
      management: "Baseline and periodic lipids; lifestyle intervention; statin if persistent.",
    },
    {
      name: "Restlessness / mild akathisia",
      frequency: "uncommon",
      severity: "mild",
      description: "Less than with risperidone or aripiprazole.",
      management: "Dose check; propranolol if needed.",
    },
    {
      name: "Transient liver enzyme elevation",
      frequency: "uncommon",
      severity: "mild",
      description: "Usually asymptomatic and self-limited.",
      management: "Monitor if symptomatic.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Diabetic ketoacidosis / severe hyperglycaemia",
      frequency: "rare",
      severity: "life-threatening",
      description: "Olanzapine carries the strongest hyperglycaemia and DKA signal among atypicals — occasionally in patients without prior diabetes; some cases fatal.",
      management: "Emergency medical management; stop the drug; re-assess antipsychotic choice.",
    },
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Rigidity, fever, autonomic instability, raised CK — reported with olanzapine, occasionally with atypical features (less rigidity).",
      management: "Stop drug; ICU supportive care; dantrolene/bromocriptine.",
    },
    {
      name: "Post-injection delirium/sedation syndrome (Relprevv)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Rare but serious: rapid olanzapine release from the depot site causing sudden sedation, delirium, and respiratory compromise — the reason for the 3-hour post-injection observation REMS.",
      management: "Never give olanzapine pamoate without the observation protocol and emergency response available.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "uncommon",
      severity: "severe",
      description: "Risk lower than with typicals but real — rises with age and duration.",
      management: "Reduce or switch; valbenazine/deutetrabenazine for severe cases.",
    },
    {
      name: "Metabolic syndrome",
      frequency: "common",
      severity: "severe",
      description: "The cluster: weight gain, dyslipidaemia, hyperglycaemia, hypertension — the major long-term cost of olanzapine.",
      management: "Monitor weight, glucose, lipids, blood pressure; intervene early; switch if progressive.",
    },
    {
      name: "Severe constipation / ileus",
      frequency: "uncommon",
      severity: "severe",
      description: "Anticholinergic and serotonergic slowing — rare but reported, occasionally serious.",
      management: "Bowel regimen when combined with other constipating drugs.",
    },
    {
      name: "Pancreatitis",
      frequency: "rare",
      severity: "severe",
      description: "Rare reports, some associated with hypertriglyceridaemia.",
      management: "Stop drug; check amylase/lipase and triglycerides.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Weight and BMI",
      frequency: "Baseline, weekly × 6 weeks, then monthly × 3, then quarterly",
      rationale: "The earliest metabolic signal — act on the trajectory, not the absolute number.",
    },
    {
      parameter: "Waist circumference",
      frequency: "Baseline and quarterly",
      rationale: "Tracks central adiposity.",
    },
    {
      parameter: "Fasting glucose / HbA1c",
      frequency: "Baseline, 12 weeks, then annually (sooner if gaining weight)",
      rationale: "Detect olanzapine-induced dysglycaemia early.",
    },
    {
      parameter: "Lipid profile",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Dyslipidaemia is part of the metabolic package.",
    },
    {
      parameter: "Blood pressure",
      frequency: "Baseline and periodically",
      rationale: "Metabolic syndrome surveillance and orthostasis at initiation.",
    },
    {
      parameter: "AIMS examination",
      frequency: "Baseline, then every 6–12 months",
      rationale: "Tardive dyskinesia surveillance.",
    },
    {
      parameter: "Liver enzymes",
      frequency: "If symptomatic or with other hepatotoxic drugs",
      rationale: "Transient rises occur.",
    },
  ],
  interactions: [
    {
      drug: "Fluvoxamine (strong CYP1A2 inhibitor)",
      severity: "major",
      mechanism: "Can more than double olanzapine levels.",
      action: "Reduce olanzapine dose; monitor for sedation and anticholinergic effects.",
    },
    {
      drug: "Smoking (CYP1A2 induction)",
      severity: "major",
      mechanism: "Smokers clear olanzapine faster — quitting smoking can raise levels 30–50% even without dose change.",
      action: "Reassess dose and adverse effects whenever smoking status changes.",
    },
    {
      drug: "Carbamazepine / other inducers",
      severity: "major",
      mechanism: "Induce CYP1A2 and glucuronidation — lower olanzapine levels.",
      action: "Monitor response; dose increase may be needed.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "major",
      mechanism: "Additive sedation, orthostasis, and respiratory depression.",
      action: "Counsel strongly against alcohol; expect amplified impairment.",
    },
    {
      drug: "Anticholinergic drugs",
      severity: "moderate",
      mechanism: "Additive dry mouth, constipation, cognitive blunting, ileus risk.",
      action: "Minimise total anticholinergic load, especially in the elderly.",
    },
    {
      drug: "Antihypertensives",
      severity: "moderate",
      mechanism: "Additive hypotension.",
      action: "Monitor standing blood pressure.",
    },
    {
      drug: "Metoclopramide and other EPS-causing drugs",
      severity: "moderate",
      mechanism: "Additive EPS risk.",
      action: "Avoid combinations where possible.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    evidenceBasedSummary: "Registry data show no clear increase in major malformations, but third-trimester exposure is associated with neonatal EPS and, in some series, higher birth weight and larger-for-gestational-age infants; maternal weight gain and gestational diabetes risk compound the picture.",
    indianPracticeNote: "Indian practice follows international guidance; screen for gestational diabetes actively given olanzapine's metabolic effect.",
    summary: "No convincing teratogenic signal in available data, but gestational diabetes and excessive maternal weight gain are special concerns with olanzapine. In serious mental illness the risk of stopping usually exceeds fetal risk — continue at the lowest effective dose with obstetric co-management and active glucose screening.",
    lactation: "Olanzapine passes into milk in small amounts; infant sedation and weight gain are the concerns. Generally considered compatible with breastfeeding with infant monitoring of sedation and growth, though some guidelines prefer alternatives.",
  },
  renalAdjustment: "No dose adjustment required for renal impairment (even on dialysis) — negligible renal clearance.",
  hepaticAdjustment: "Start at 5 mg in hepatic impairment (including cirrhosis) and titrate cautiously.",
  /* ---- Education ---- */
  patientExplanation: "Olanzapine calms overactive brain circuits by blocking several chemical messengers at once — dopamine, serotonin, histamine, and acetylcholine. This broad action makes it strong and reliably sedating, which helps when thoughts are racing or sleep has vanished. The trade-off it is famous for is hunger and weight gain — it genuinely increases appetite, so a food plan from day one is part of the treatment, not an afterthought.",
  patientEducationPoints: [
    "Expect increased appetite from the first week — plan meals, avoid late-night eating, and tell your doctor early if weight is climbing.",
    "It is usually taken at bedtime because it is sedating — do not drive in the first days.",
    "Feeling very thirsty or urinating a lot warrants an urgent sugar check.",
    "Alcohol strongly amplifies its effects — avoid it.",
    "If you smoke, tell your doctor before quitting or changing — quitting can raise the level of this medicine in your blood.",
    "Benefit often starts within days in mania; give it 2–4 weeks for psychosis.",
    "Do not stop suddenly — and never miss the observation period if you receive the injection form.",
  ],
  clinicalPearls: [
    "Olanzapine's efficacy-to-metabolic-cost ratio is the central prescribing decision: strongest evidence base among atypicals, heaviest metabolic bill.",
    "The weight trajectory is set in the first 6 weeks — start metformin and lifestyle intervention then, not after 10 kg.",
    "Smoking is a hidden dose knob: quitting raises olanzapine levels by up to half — watch for new sedation after cessation.",
    "For bipolar depression and treatment-resistant depression, the olanzapine-fluoxetine combination is FDA-approved — one of the few options for the depressed pole.",
    "In agitated delirium, olanzapine's anticholinergic burden is usually acceptable — and its sedation, anxiolysis, and appetite effects can all be therapeutic at end of life.",
    "IM olanzapine + parenteral benzodiazepine in the elderly is the classic pathway to respiratory depression — separate them in time and document.",
    "Women need lower doses on average (slower clearance) — a difference that becomes clinically meaningful at the margins.",
    "The Zydis orally disintegrating form is for adherence (and hides the tablet in the cheek — check the mouth).",
    "Olanzapine pamoate's post-injection syndrome is rare but unforgettable — the 3-hour observation is non-negotiable.",
    "When long-term metabolic risk becomes unacceptable, cross-taper to aripiprazole, lurasidone, or ziprasidone rather than stopping olanzapine abruptly in a stable patient.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Olanzapine: Olanzapine blocks D2 and 5-HT2A receptors plus muscarinic, histaminic, and alpha-1 receptors — broad receptor binding that delivers robust efficacy and a characteristically 'heavy' adverse-effect profile.",
        "Uses of Olanzapine: Schizophrenia; Acute manic / mixed episodes of bipolar I; Bipolar I maintenance; Bipolar depression",
        "Mechanism: D2 + 5-HT2A antagonist with potent H1, M1–M5, alpha-1, and 5-HT2C binding — the broadest receptor profile among common atypicals.",
        "Signature adverse effect: weight gain and metabolic syndrome — highest tier with clozapine; DKA can occur without prior diabetes.",
      ],
      practical: [
        "Prescribe Olanzapine for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, weekly × 6 weeks, then monthly × 3, then quarterly); Waist circumference (Baseline and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually (sooner if gaining weight))",
      ],
      longAnswer: [
        "Olanzapine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D2 + 5-HT2A antagonist with potent H1, M1–M5, alpha-1, and 5-HT2C binding — the broadest receptor profile among common atypicals.",
        "Signature adverse effect: weight gain and metabolic syndrome — highest tier with clozapine; DKA can occur without prior diabetes.",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D2 + 5-HT2A antagonist with potent H1, M1–M5, alpha-1, and 5-HT2C binding — the broadest receptor profile among common atypicals.",
        "Signature adverse effect: weight gain and metabolic syndrome — highest tier with clozapine; DKA can occur without prior diabetes.",
        "Metabolism: CYP1A2 — fluvoxamine doubles levels; smoking induces clearance (quitting raises levels).",
        "Half-life 21–54 hours; no active metabolite; renal impairment irrelevant to dosing.",
        "Olanzapine-fluoxetine combination (Symbyax): FDA-approved for bipolar depression AND treatment-resistant depression.",
        "IM olanzapine for acute agitation — avoid combining with parenteral benzodiazepines (respiratory depression).",
      ],
      pyqConcepts: [
        "Mechanism/target of Olanzapine",
        "Key adverse effect: Diabetic ketoacidosis / severe hyperglycaemia",
        "Dosing and titration of Olanzapine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Olanzapine develops diabetic ketoacidosis / severe hyperglycaemia — next best step?",
        "When to choose Olanzapine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (moderate-affinity antagonist); 5-HT2A; M1–M5 (antimuscarinic); H1 (potent); alpha-1",
        "Most common side effects: Weight gain, Sedation and drowsiness, Increased appetite and cravings",
        "Key contraindication: Known hypersensitivity to olanzapine",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The metabolic trajectory is decided in the first 6 weeks — metformin early beats diet lectures late.",
        "Smoking status is a hidden dose dial — re-check the dose whenever it changes.",
        "Symbyax is not just 'olanzapine plus fluoxetine' — it is one of the very few approved treatments for bipolar depression.",
        "IM olanzapine plus parenteral benzodiazepine is the classic pathway to respiratory depression — separate them in time and document.",
      ],
    },
  },
  memoryTricks: [
    {
      title: "O-Zone",
      trick: "Olanzapine puts patients in the 'O-Zone' — sedated, hungry, calm.",
      remembers: "H1 sedation + 5-HT2C appetite — the twin signature effects",
    },
    {
      title: "Smoke = Speed",
      trick: "Smoking speeds clearance; quitting slows it — levels jump when cigarettes stop.",
      remembers: "The CYP1A2 smoking interaction",
    },
    {
      title: "Symbyax saves the sad pole",
      trick: "Symbyax (olanzapine + fluoxetine) treats bipolar depression — 'S for Sad pole'.",
      remembers: "Which combination is approved for bipolar depression",
    },
  ],
  highYieldSummary: [
    "Mechanism: D2 + 5-HT2A antagonist with potent H1, M1–M5, alpha-1, and 5-HT2C binding — the broadest receptor profile among common atypicals.",
    "Signature adverse effect: weight gain and metabolic syndrome — highest tier with clozapine; DKA can occur without prior diabetes.",
    "Metabolism: CYP1A2 — fluvoxamine doubles levels; smoking induces clearance (quitting raises levels).",
    "Half-life 21–54 hours; no active metabolite; renal impairment irrelevant to dosing.",
    "Olanzapine-fluoxetine combination (Symbyax): FDA-approved for bipolar depression AND treatment-resistant depression.",
    "IM olanzapine for acute agitation — avoid combining with parenteral benzodiazepines (respiratory depression).",
    "Olanzapine pamoate (Relprevv): 3-hour post-injection observation REMS for post-injection delirium/sedation syndrome.",
    "Low EPS and minimal prolactin rise — the price is metabolic, not motor.",
    "Women clear olanzapine more slowly — lower doses on average.",
    "Widely used off-label for agitated delirium in palliative care.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "Mania with poor intake — when weight gain is therapeutic",
      presentation: "A 27-year-old man with severe manic relapse and weight loss, treated with olanzapine where appetite restoration is part of the plan.",
      history: "A 27-year-old man with known bipolar I disorder (non-adherent to lithium for 2 months) presents with 10 days of mania: 2 hours of sleep, grandiose spending, psychomotor agitation, and progressive refusal of food ('no time to eat'). He has lost 6 kg. Past episodes responded to olanzapine; he stopped it himself a year ago over weight concerns.",
      examination: "Dishevelled, tachycardic 108/min, blood pressure 138/84. Pressured speech, flight of ideas, grandiosity; no psychosis. BMI 17.8 (down from 21). Electrolytes mildly deranged; glucose normal.",
      diagnosis: "Bipolar I disorder, current episode manic, severe, with inadequate nutrition.",
      rationale: "Rapid anti-manic control plus reliable sedation is needed now, and his low BMI makes olanzapine's appetite effect temporarily therapeutic rather than harmful. Lithium is restarted for maintenance. The metabolic risk is actively re-framed: this time he stays on it, with monitoring — the lesson is adherence, not avoiding the drug that works.",
      management: "Admitted. Olanzapine 10 mg at night (Zydis during the first days when swallowing tablets was resisted), titrated to 15 mg; lithium restarted and titrated to level 0.8 mEq/L. Supervised meals, electrolyte correction. Weight, glucose, and lipids at baseline and weekly.",
      outcome: "Sleep normalised by day 3, mania resolving by day 10 (YMRS 8 at discharge). Weight regained to BMI 20 over 6 weeks. At 3-month review, stable on olanzapine 10 mg + lithium; weight plateaued with a structured diet; metabolic panel normal. A plan documents switching to a lower-metabolic antipsychotic if BMI exceeds 25.",
      teachingPoints: [
        "In the underweight manic patient, olanzapine's 'side effect' of appetite stimulation is therapeutic — drug properties are context-dependent.",
        "Non-adherence driven by adverse effects (his weight gain) is best answered by structured monitoring, not by abandoning the effective drug.",
        "Lithium re-establishment during admission converts a crisis into a maintenance opportunity.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical antipsychotic comparison — where olanzapine sits",
      primaryDrug: "Olanzapine",
      rows: [
        {
          attribute: "Mechanism",
          primaryValue: "D2/5-HT2A antagonist + potent H1/M1 + 5-HT2C blockade",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Potent D2 + 5-HT2A (SDA)",
            },
            {
              drug: "Quetiapine",
              value: "Weak D2 + H1-dominant; norquetiapine NET",
            },
            {
              drug: "Aripiprazole",
              value: "D2 partial agonist (stabiliser)",
            },
            {
              drug: "Clozapine",
              value: "Loose D2 + broad profile",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Highest tier — frequent and significant",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Moderate",
            },
            {
              drug: "Quetiapine",
              value: "Moderate–high",
            },
            {
              drug: "Aripiprazole",
              value: "Lowest tier",
            },
            {
              drug: "Clozapine",
              value: "Highest tier (with olanzapine)",
            },
          ],
        },
        {
          attribute: "EPS",
          primaryValue: "Low",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Dose-dependent above 6 mg",
            },
            {
              drug: "Quetiapine",
              value: "Lowest",
            },
            {
              drug: "Aripiprazole",
              value: "Low EPS but akathisia",
            },
            {
              drug: "Clozapine",
              value: "Lowest",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Moderate–high",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Mild",
            },
            {
              drug: "Quetiapine",
              value: "High",
            },
            {
              drug: "Aripiprazole",
              value: "Low — activating",
            },
            {
              drug: "Clozapine",
              value: "High",
            },
          ],
        },
        {
          attribute: "Unique strengths",
          primaryValue: "Robust efficacy; IM for agitation; OFC for bipolar/TR depression; appetite gain therapeutic in cachexia",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Anti-manic potency; LAI shelf; autism irritability",
            },
            {
              drug: "Quetiapine",
              value: "Bipolar depression approval; no prolactin/EPS",
            },
            {
              drug: "Aripiprazole",
              value: "Metabolic safety; augmentation; maintenance",
            },
            {
              drug: "Clozapine",
              value: "Treatment resistance; anti-suicide",
            },
          ],
        },
      ],
      takeaway: "Olanzapine is the maximalist atypical: strongest across-metaphor efficacy with the heaviest metabolic bill. Choose it when robust control matters most — severe mania, agitation, poor intake — and budget for the metabolic cost from day one with monitoring, metformin, and a switching plan.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "First doses",
      description: "Peak concentration 5–8 hours; sedation and calm are the first effects — valuable in acute mania and agitation.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–3",
      title: "Agitation settles, sleep restored",
      description: "In mania and agitation, the early benefit is often dramatic; IM acts within 30–60 minutes.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–2",
      title: "Metabolic trajectory begins",
      description: "Appetite rises in the first week — the weight-gain curve starts here even if the scale lags.",
      phase: "onset",
    },
    {
      id: "t4",
      time: "Weeks 2–4",
      title: "Core antipsychotic response",
      description: "Positive symptoms of schizophrenia and mania measurably improve; formal assessment (PANSS/YMRS) at 4 weeks.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 4–8",
      title: "Weight becomes visible",
      description: "The metabolic trajectory is now measurable — intervene here, not at 6 months.",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Months 3+",
      title: "Maintenance",
      description: "Metabolic monitoring continues indefinitely; switching decisions balance stability against metabolic cost.",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why does olanzapine cause so much weight gain?",
      answer: "It blocks histamine and a serotonin receptor (5-HT2C) that regulate appetite — hunger genuinely increases, especially for carbohydrates, and the feeling is physiological, not weak willpower. Early food planning, exercise, and sometimes metformin are part of standard treatment with this medicine.",
    },
    {
      question: "Is olanzapine stronger than other antipsychotics?",
      answer: "It is among the most robustly effective atypicals across psychosis and mania — in head-to-head trials it consistently ranks near the top for preventing relapse and dropout. The trade-off is the metabolic cost; the choice is about matching that trade-off to the patient.",
    },
    {
      question: "What is Symbyax?",
      answer: "A single capsule containing olanzapine plus fluoxetine. It is FDA-approved for bipolar depression and for depression that has not responded to antidepressants alone — one of the few approved options for the depressed phase of bipolar disorder.",
    },
    {
      question: "Can I take olanzapine with alcohol?",
      answer: "Not recommended — both are sedating, and together they can cause dangerous drowsiness, low blood pressure, and slowed breathing.",
    },
    {
      question: "I've quit smoking and feel much more drowsy on the same dose — why?",
      answer: "Smoking makes the liver clear olanzapine faster. When you stop smoking, the level of the medicine in your blood rises — sometimes by half. Tell your doctor so the dose can be adjusted; this is expected pharmacology, not a mystery.",
    },
    {
      question: "What are the emergency warning signs?",
      answer: "Intense thirst and frequent urination (high blood sugar), fever with muscle stiffness, and — after the injection form — sudden overwhelming sleepiness. All need urgent medical attention.",
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
        section: "6th ed. (2017), olanzapine monograph, p. 90",
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
        source: "FDA Prescribing Information for Zyprexa (Olanzapine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for olanzapine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Olanzapine",
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
    {
      name: "Risperidone",
      slug: "risperidone",
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
      name: "Bipolar depression",
      relationship: "primary",
    },
    {
      name: "Treatment-resistant depression",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Olanzapine",
      type: "drug",
      href: "/drugs/olanzapine",
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
      label: "D2 (moderate-affinity antagonist); 5-HT2A; M1–M5 (antimuscarinic); H1 (potent); alpha-1",
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
      label: "Hippocampus",
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
      label: "Diabetic ketoacidosis / severe hyperglycaemia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Neuroleptic malignant syndrome",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Weight gain",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Olanzapine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The robust workhorse atypical — strong efficacy across psychosis and mania, with the class's heaviest metabolic price tag.",
    summary: "Olanzapine is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Olanzapine calms overactive brain circuits by blocking several chemical messengers at once — dopamine, serotonin, histamine, and acetylcholine. This broad action makes it strong and reliably sedating, which helps when thoughts are racing or sleep has vanished. The trade-off it is famous for is hunger and weight gain — it genuinely increases appetite, so a food plan from day one is part of the treatment, not an afterthought.",
    sideEffects: "The most common side effects are: weight gain, sedation and drowsiness, increased appetite and cravings, dry mouth, constipation, dizziness and orthostasis, dyslipidaemia. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Diabetic ketoacidosis / severe hyperglycaemia and Neuroleptic malignant syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, weekly × 6 weeks, then monthly × 3, then quarterly); waist circumference (baseline and quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually (sooner if gaining weight)). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Known hypersensitivity to olanzapine, Elderly patients with dementia-related psychosis, Olanzapine pamoate without post-injection observation, History of diabetic ketoacidosis or poorly controlled diabetes. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Fluvoxamine (strong CYP1A2 inhibitor), Smoking (CYP1A2 induction), Carbamazepine / other inducers, Alcohol and CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Oleanz",
        manufacturer: "Sun Pharma",
        strengths: "2.5, 5, 7.5, 10, 15, 20 mg",
      },
      {
        name: "Olimelt (ODT)",
        manufacturer: "Alkem",
        strengths: "5, 10, 15, 20 mg",
      },
      {
        name: "Zyprexa / Zydis",
        manufacturer: "Lilly",
        strengths: "tablets + ODT",
      },
      {
        name: "Olanzapine (generic)",
        manufacturer: "Multiple, incl. Jan Aushadhi",
        strengths: "2.5–20 mg",
      },
    ],
    typicalDoses: "Psychosis/mania 10–20 mg at bedtime; agitation 5–10 mg IM; palliative 2.5–5 mg at night.",
    prescribingScenarios: [
      "Acute mania admissions — rapid control of agitation and sleep.",
      "Agitated delirium in palliative and oncology wards.",
      "Bipolar depression via olanzapine-fluoxetine combination in private practice.",
      "Schizophrenia maintenance when cost and robustness both matter.",
      "Cachexia and nausea in HIV/palliative care at low dose.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Generic olanzapine is inexpensive in India; Jan Aushadhi stocks it. Cost varies by manufacturer and region.",
    monitoring: "Weight at every visit in the first 2 months; fasting glucose and lipids at baseline, 12 weeks, then 6–12 monthly — essential in Indian practice where baseline metabolic risk is already elevated.",
    patientCounselling: [
      "Explain the appetite effect in the patient's own words BEFORE the first tablet — pre-warned patients gain less weight.",
      "Bedtime dosing; no driving in the first week.",
      "Urgent return for excessive thirst, urination, or vomiting.",
      "Discuss the smoking interaction at every visit if the patient smokes.",
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
    note: "Generic olanzapine tablets available in Jan Aushadhi kendras.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Olanzapine",
        slug: "olanzapine",
        relationship: "This guide",
        distinguishing: "Most robust broad-spectrum atypical — heaviest metabolic burden",
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
        name: "Risperidone",
        slug: "risperidone",
        relationship: "Same class (Atypical Antipsychotic)",
        distinguishing: "Most potent D2 blockade among atypicals — highest prolactin, best-studied LAI",
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
      question: "Which molecular target does Olanzapine primarily act on?",
      options: [
        "D2 (moderate-affinity antagonist); 5-HT2A; M1–M5 (antimuscarinic); H1 (potent); alpha-1",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Olanzapine acts primarily at D2 (moderate-affinity antagonist); 5-HT2A; M1–M5 (antimuscarinic); H1 (potent); alpha-1. Olanzapine blocks D2 and 5-HT2A receptors plus muscarinic, histaminic, and alpha-1 receptors — broad receptor binding that delivers robust efficacy and a characteristically 'heavy' adverse-effect profile.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Olanzapine?",
      options: ["Weight gain", "Sedation and drowsiness", "Increased appetite and cravings", "Dry mouth, constipation"],
      correctIndex: 0,
      explanation: "Weight gain — The signature adverse effect — highest tier with clozapine; average gains of several kilograms are typical, with the trajectory visible within the first 6 weeks.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Olanzapine for schizophrenia?",
      options: ["10–20 mg/day", "20 mg/day", "10–20 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia: start 5–10 mg once daily at bedtime, target 10–20 mg/day, maximum 20 mg/day. Increase by 5 mg at intervals of at least several days",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Olanzapine in two sentences.",
      answer: "Olanzapine blocks D2 and 5-HT2A receptors plus muscarinic, histaminic, and alpha-1 receptors — broad receptor binding that delivers robust efficacy and a characteristically 'heavy' adverse-effect profile. Net effect: Broad monoaminergic and cholinergic modulation — powerful anti-manic, antipsychotic, and sedative effects with low EPS but high metabolic risk.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Olanzapine.",
      answer: "Schizophrenia, Acute manic / mixed episodes of bipolar I, Bipolar I maintenance, Bipolar depression. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Olanzapine and how you would manage it.",
      answer: "Diabetic ketoacidosis / severe hyperglycaemia: Olanzapine carries the strongest hyperglycaemia and DKA signal among atypicals — occasionally in patients without prior diabetes; some cases fatal. Management: Emergency medical management; stop the drug; re-assess antipsychotic choice.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Olanzapine require?",
      answer: "Weight and BMI (Baseline, weekly × 6 weeks, then monthly × 3, then quarterly); Waist circumference (Baseline and quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually (sooner if gaining weight)); Lipid profile (Baseline, 12 weeks, then annually)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Olanzapine that separates safe prescribers from unsafe ones.",
      answer: "The metabolic trajectory is decided in the first 6 weeks — metformin early beats diet lectures late.",
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
      checkpoint: "You now know what Olanzapine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Olanzapine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Olanzapine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Olanzapine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Olanzapine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Olanzapine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Acute agitation (IM): calming within 15–45 minutes.",
      "Mania: anti-manic effect often within 2–5 days.",
      "Schizophrenia: agitation and sleep improve within days; positive symptoms over 1–3 weeks.",
      "Depression (with fluoxetine): benefit typically 1–4 weeks.",
    ],
    ifItWorks: [
      "Continue at the lowest effective dose; many patients maintain on 5–10 mg.",
      "Bipolar disorder: pair with lithium/valproate for maintenance; plan the eventual antipsychotic taper with the patient.",
      "Schizophrenia: continue at least 1–2 years post first episode; indefinitely after relapse.",
      "Audit metabolic parameters every visit — response should not be banked at the cost of unmeasured metabolic drift.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Olanzapine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Lithium or valproate in mania and for maintenance.",
      "Fluoxetine as the approved combination for bipolar/TR depression.",
      "Short-term benzodiazepine for agitation (separate from IM olanzapine by an hour or more).",
      "In TRS, switch to clozapine rather than stacking antipsychotics.",
    ],
    testsBeforeStarting: [
      "Baseline weight/BMI, waist, fasting glucose/HbA1c, lipids, blood pressure.",
      "Repeat weight weekly × 6 (inpatients) or at 4 and 8 weeks (outpatients).",
      "Consider baseline ECG and LFTs if risk factors.",
      "AIMS baseline; pregnancy test where relevant.",
    ],
    sideEffectLogic: [
      "Every adverse effect traces to a receptor: H1 → sedation and appetite; 5-HT2C → feeding disinhibition; M1 → dry mouth, constipation; alpha-1 → orthostasis; D2 (moderate, loose) → low EPS and minimal prolactin. The 'heavy' feel of olanzapine is pharmacology, not mystery.",
    ],
    sideEffectManagement: [
      "Wait: sedation and anticholinergic effects usually attenuate over 1–2 weeks.",
      "Reduce the dose: 5 mg less often transforms tolerability.",
      "Treat the metabolic axis actively: structured diet, exercise, metformin — early, not after 10 kg.",
      "Switch to a lower-metabolic atypical (aripiprazole, lurasidone, ziprasidone) when the metabolic trajectory is unacceptable.",
    ],
    sideEffectRescue: [
      "Metformin (500 mg titrated to 1000 mg twice daily) for emerging weight gain.",
      "Morning dosing is NOT advised — use bedtime dosing to convert sedation into sleep.",
      "Bowel regimen when total anticholinergic load is high.",
      "Topiramate as an augmenting option with weight benefit in selected patients.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "Moderate to high — usually transient at a given dose but dose-limiting for many patients.",
    dosing: [
      {
        indication: "Schizophrenia",
        starting: "5–10 mg once daily at bedtime",
        titration: "Increase by 5 mg at intervals of at least several days",
        target: "10–20 mg/day",
        max: "20 mg/day",
        notes: [
          "Rapid responders may stabilise on 5–10 mg",
          "First-episode patients: start 5 mg",
        ],
      },
      {
        indication: "Acute mania",
        starting: "10–15 mg once daily",
        titration: "May increase to 20 mg within days if needed",
        target: "10–20 mg/day",
        max: "20 mg/day",
        notes: [
          "Adjunct to lithium/valproate equally effective",
          "Bedtime dosing uses the sedation for sleep restoration",
        ],
      },
      {
        indication: "Bipolar maintenance",
        starting: "5–20 mg once daily",
        titration: "Continue the dose that stabilised the acute episode",
        target: "5–20 mg/day",
        max: "20 mg/day",
        notes: [
          "Weigh metabolic cost against relapse risk at every review",
        ],
      },
      {
        indication: "Bipolar / treatment-resistant depression (with fluoxetine)",
        starting: "Olanzapine 6 mg + fluoxetine 25 mg evening",
        titration: "Increase to olanzapine 6–12 mg / fluoxetine 25–50 mg",
        target: "6–12 mg + 25–50 mg",
        max: "18 mg + 75 mg (OFC)",
      },
      {
        indication: "Acute agitation (IM)",
        starting: "10 mg IM (5 mg if elderly); may repeat after 2 hours",
        titration: "Max three 10 mg injections (30 mg/day) per acute episode",
        target: "10 mg IM per episode",
        max: "30 mg IM/day",
        notes: [
          "Avoid parenteral benzodiazepine within 1 hour of IM olanzapine",
        ],
      },
      {
        indication: "Adolescents (13–17, schizophrenia/mania)",
        starting: "2.5–5 mg once daily",
        titration: "Increase by 2.5–5 mg as tolerated",
        target: "10 mg/day",
        max: "20 mg/day",
        notes: [
          "Adolescents are more metabolically vulnerable — monitor weight at every visit",
        ],
      },
      {
        indication: "LAI — Relprevv (pamoate)",
        starting: "Initiation per label (e.g., 405 mg on day 1 and 210 mg day 8... follow protocol)",
        titration: "Deep IM gluteal every 2–4 weeks per dosing table",
        target: "150–300 mg per 2–4 weeks",
        max: "300 mg/4 weeks (per label)",
        notes: [
          "3-hour post-injection observation is mandatory (REMS)",
        ],
      },
    ],
    dosageForms: [
      "Tablets 2.5, 5, 7.5, 10, 15, 20 mg",
      "Orally disintegrating tablets (Zydis) 5, 10, 15, 20 mg",
      "IM powder for injection 10 mg vial",
      "Relprevv pamoate 210, 300, 405 mg vials",
      "Symbyax capsules: olanzapine/fluoxetine 3/25, 6/25, 6/50, 12/25, 12/50 mg",
    ],
    dosingTips: [
      "Bedtime dosing converts the main adverse effect into a therapeutic ally.",
      "Start metformin with the prescription in high-risk patients — waiting for weight gain loses the window.",
      "Ask about smoking at every visit — any change in smoking status changes olanzapine levels.",
      "Women and the elderly: start at 5 mg and go slower.",
      "Zydis ODT hides under the tongue in seconds — useful for adherence (and for cheeking).",
      "In palliative care, olanzapine 2.5–5 mg at night treats agitation, nausea, and poor appetite together — a three-in-one.",
      "If weight climbs beyond the agreed threshold, act on the pre-agreed switch plan — patient engagement doubles adherence.",
    ],
    overdose: [
      "Tachycardia, sedation, slurred speech, respiratory depression, and anticholinergic signs.",
      "Monitor airway; charcoal if early; supportive care.",
      "Rarely fatal alone but dangerous with alcohol or benzodiazepines.",
    ],
    longTermUse: "Long-term use demands permanent metabolic vigilance: diabetes, dyslipidaemia, and weight trajectory are the long-game risks; tardive dyskinesia risk is lower than with typicals but non-zero.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper over weeks; abrupt cessation risks rebound insomnia, agitation, and cholinergic rebound (nausea, sweating, vomiting).",
      "Reduce by 5 mg every 1–2 weeks at typical doses.",
      "Relprevv persists for months — no rapid discontinuation exists.",
      "In bipolar maintenance, withdraw antipsychotic gradually alongside mood-stabiliser continuation.",
    ],
    pharmacokinetics: [
      "Half-life 21–54 hours (mean ~30).",
      "CYP1A2 primary; fluvoxamine inhibits (levels × 2), smoking induces (quitting raises levels).",
      "Renal impairment: no adjustment.",
      "Women clear more slowly than men.",
    ],
    doNotUse: [
      "Known hypersensitivity.",
      "Dementia-related psychosis (boxed warning).",
      "Olanzapine pamoate without the REMS observation protocol.",
      "In patients with active diabetic ketoacidosis or brittle diabetes without specialist co-management.",
    ],
    specialPopulations: [
      {
        population: "Renal impairment",
        guidance: ["No dose adjustment (even on dialysis)."],
      },
      {
        population: "Hepatic impairment",
        guidance: [
          "Start at 5 mg and titrate cautiously.",
          "Avoid in significant cirrhosis without specialist input.",
        ],
      },
      {
        population: "Cardiac impairment",
        guidance: [
          "Caution: tachycardia and orthostasis; monitor in heart failure.",
        ],
      },
      {
        population: "Elderly",
        guidance: [
          "Start 2.5–5 mg; sensitive to sedation, orthostasis, and anticholinergic effects.",
          "Dementia-related psychosis: boxed warning — avoid.",
          "Delirium (agitated) use in palliative settings is accepted practice at low doses with review.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Approved 13+ for schizophrenia and mania; start at half the adult dose.",
          "Metabolic monitoring is critical — adolescents gain weight fastest.",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "No clear teratogenic signal; watch for gestational diabetes and excess maternal weight.",
          "Third-trimester neonatal EPS/withdrawal monitoring.",
          "Breastfeeding: usually compatible with infant sedation and growth monitoring.",
        ],
      },
      {
        population: "Comorbid substance use",
        guidance: [
          "Alcohol interaction is significant — counsel explicitly.",
          "LAI (after Relprevv observation) can anchor treatment when substance use undermines adherence.",
        ],
      },
    ],
    potentialAdvantages: [
      "Among the most robustly effective atypicals for psychosis and mania.",
      "Rapid onset of calming and sleep restoration.",
      "IM form for acute agitation.",
      "Olanzapine-fluoxetine combination approved for bipolar and treatment-resistant depression.",
      "Appetite stimulation can be therapeutic in cachexia and palliative care.",
      "Low EPS and minimal prolactin elevation.",
      "Inexpensive generics widely available.",
    ],
    potentialDisadvantages: [
      "Highest-tier weight gain and metabolic risk with it.",
      "DKA can occur without prior diabetes.",
      "Sedation limits daytime functioning for some patients.",
      "CYP1A2 smoking interaction is a moving target.",
      "Relprevv requires burdensome observation protocols.",
      "Anticholinergic burden adds to polypharmacy load in the elderly.",
    ],
    primaryTargetSymptoms: [
      "Manic symptoms (hyperactivity, grandiosity, insomnia)",
      "Positive symptoms of psychosis",
      "Agitation and aggression",
      "Sleep disturbance in acute episodes",
      "Appetite loss in palliative settings (therapeutic effect)",
      "Bipolar depression (in combination with fluoxetine)",
    ],
    pearls: [
      "The metabolic trajectory is decided in the first 6 weeks — metformin early beats diet lectures late.",
      "Smoking status is a hidden dose dial — re-check the dose whenever it changes.",
      "Symbyax is not just 'olanzapine plus fluoxetine' — it is one of the very few approved treatments for bipolar depression.",
      "IM olanzapine plus parenteral benzodiazepine is the classic pathway to respiratory depression — separate them in time and document.",
      "In the cachectic or palliative patient, olanzapine 2.5–5 mg at night treats agitation, nausea, and appetite in one move.",
      "Women clear olanzapine more slowly — same dose, more exposure.",
      "Olanzapine pamoate's post-injection syndrome is rare but unforgettable — never skip the 3-hour observation.",
      "When weight becomes unacceptable, cross-titrate to aripiprazole/lurasidone/ziprasidone — preserve the stability you bought.",
      "Non-response on olanzapine at 20 mg for 6 weeks is a clozapine conversation, not an olanzapine 30 mg experiment.",
      "The most common real-world failure of olanzapine is not pharmacological — it is losing the patient to the metabolic conversation.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
