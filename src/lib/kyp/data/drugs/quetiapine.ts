import type { Drug } from "../types";

/**
 * Quetiapine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), quetiapine monograph (book p. 107)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const quetiapine: Drug = {
  /* ---- Identity ---- */
  slug: "quetiapine",
  genericName: "Quetiapine",
  brandNames: ["Seroquel", "Seroquel XR"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Quetiapine"],
  /* ---- Hero / summary ---- */
  tagline: "The dose-bands-in-one-drug antipsychotic — a sleeping pill at 50 mg, an antidepressant at 300 mg, an antipsychotic at 600 mg.",
  summary: "Quetiapine is a dibenzothiazepine atypical antipsychotic with weak D2 but potent 5-HT2A and histamine binding; its metabolite norquetiapine blocks norepinephrine reuptake and is believed to drive its antidepressant action. This pharmacology creates three clinical identities in one molecule: low doses act as a sedative, mid doses treat bipolar depression and augmentation, and higher doses treat psychosis and mania. It is the only atypical FDA-approved for bipolar depression as monotherapy, with essentially no EPS or prolactin elevation — priced at sedation, orthostasis, and substantial metabolic risk.",
  estimatedReadTime: "18 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Quetiapine — from its molecular target (5-HT2A (high affinity); H1 (potent); D2 (weak, short-acting occupancy); alpha-1; NET via norquetiapine (metabolite)) to clinical effect.",
    "List the FDA-approved and off-label uses of Quetiapine.",
    "Predict the common and serious side effects of Quetiapine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Quetiapine.",
    "Compare Quetiapine with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Quetiapine blocks 5-HT2A and H1 receptors potently with only weak, transient D2 occupancy; its metabolite norquetiapine inhibits norepinephrine reuptake and blocks 5-HT2C — an antidepressant profile hidden inside an antipsychotic.",
    molecularTarget: "5-HT2A (high affinity); H1 (potent); D2 (weak, short-acting occupancy); alpha-1; NET via norquetiapine (metabolite)",
    effect: "Sedation and anxiolysis at low doses; antidepressant effect at mid doses (norquetiapine NET + 5-HT2C); antipsychotic effect only at higher doses when D2 occupancy becomes sustained.",
    steps: [
      "Quetiapine itself binds H1 (sedation) and alpha-1 (orthostasis) strongly from the very first low dose.",
      "Its D2 binding is weak and rapidly disengages — enough antipsychotic occupancy only at higher doses; this is why EPS and prolactin rise are almost absent.",
      "5-HT2A antagonism is strong at all doses, contributing to both antipsychotic and mood effects.",
      "The metabolite norquetiapine inhibits the norepinephrine transporter (NET) and blocks 5-HT2C — the same mechanism family as antidepressants — explaining quetiapine's efficacy in bipolar depression and augmentation.",
      "The clinical result is dose-band dependent: 25–50 mg = sedative; 150–300 mg = antidepressant range; 400–800 mg = antipsychotic/anti-manic range.",
    ],
    pharmacokinetics: "Well absorbed; peak 1–2 hours (IR) / 3–5 hours (XR). Requires titration — starting at full dose causes orthostatic collapse.",
    halfLife: "6–7 hours (IR quetiapine); norquetiapine 9–12 hours; XR formulation smooths delivery to permit once-nightly dosing.",
    activeMetabolite: "Norquetiapine — NET inhibitor and 5-HT2C antagonist; the antidepressant engine of the drug.",
    metabolism: "Hepatic CYP3A4 (major); CYP2D6 minor.",
    excretion: "Hepatic metabolism with renal excretion of metabolites (~70% renal).",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Quetiapine",
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
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)", "Norepinephrine (NE)", "Histamine"],
  receptors: [
    "5-HT2A (high-affinity antagonist)",
    "H1 (potent antagonist)",
    "D2 (weak antagonist, transient occupancy)",
    "Alpha-1 adrenergic (antagonist)",
    "NET (inhibited by norquetiapine)",
    "5-HT2C (antagonist via norquetiapine)",
  ],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens", "amygdala"],
  pathwayIds: ["mesolimbic", "mesocortical"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "Effective at 400–800 mg/day; requires titration over several days.",
      ageGroup: "Adults & ≥13 years",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      status: "fda-approved",
      description: "As monotherapy or adjunct to lithium/valproate.",
      ageGroup: "Adults & ≥10 years",
    },
    {
      name: "Bipolar depression",
      status: "fda-approved",
      description: "The only atypical monotherapy approved for the depressed pole (XR 300 mg/day) — quetiapine's signature indication.",
      ageGroup: "Adults & ≥10 years",
    },
    {
      name: "Bipolar I maintenance",
      status: "fda-approved",
      description: "Relapse prevention as monotherapy or adjunct.",
    },
    {
      name: "Major depressive disorder — adjunctive",
      status: "fda-approved",
      description: "XR 150–300 mg/day as add-on to antidepressants.",
    },
    {
      name: "Generalised anxiety disorder (adjunct/maintenance)",
      status: "off-label",
      description: "Widely used; approved for GAD in some regions (EU/Australia).",
    },
    {
      name: "Insomnia (low dose)",
      status: "off-label",
      description: "25–100 mg at night exploits H1 sedation — effective but controversial given metabolic risk and lack of long-term insomnia data.",
    },
    {
      name: "Parkinson's disease psychosis",
      status: "off-label",
      description: "The best-tolerated antipsychotic option alongside clozapine/pimavanserin — no motor worsening.",
    },
    {
      name: "Agitation in dementia",
      status: "off-label",
      description: "Boxed-warning territory — low doses, clear review plan only after non-drug measures fail.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to quetiapine",
      severity: "absolute",
      rationale: "Rare anaphylaxis reported.",
    },
    {
      name: "Elderly patients with dementia-related psychosis",
      severity: "absolute",
      rationale: "Class boxed warning: increased mortality and cerebrovascular events.",
    },
    {
      name: "Untreated narrow-angle glaucoma",
      severity: "relative",
      rationale: "Anticholinergic-adjacent effects warrant caution.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Quetiapine is not approved for dementia-related psychosis. Pooled atypical antipsychotic analyses show approximately 1.6–1.7-fold increased mortality versus placebo, primarily cardiovascular and infectious; a small increase in cerebrovascular events is also reported.",
    },
    {
      title: "Suicidal thinking in patients under 25 (antidepressant-class warning)",
      text: "Quetiapine carries antidepressant-class suicidality warnings for its depression indications: patients under 25 with major depression should be monitored closely for clinical worsening, suicidality, and unusual behaviour changes, especially in the first months.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and next-morning grogginess",
      frequency: "very-common",
      severity: "moderate",
      description: "H1-mediated; the most common reason patients love it at night and hate it in the morning — dose-timing and XR reduce hangover.",
      management: "Nightly dosing, XR preferred; morning grogginess usually improves over 1–2 weeks.",
    },
    {
      name: "Orthostatic hypotension",
      frequency: "very-common",
      severity: "moderate",
      description: "Alpha-1 blockade — first-dose syncope risk; the reason titration is mandatory.",
      management: "Start low, rise slowly, dose at night; review antihypertensives.",
    },
    {
      name: "Dry mouth and constipation",
      frequency: "common",
      severity: "mild",
      description: "Anticholinergic-type effects despite weak M1 binding.",
      management: "Fluids, fibre, exercise.",
    },
    {
      name: "Weight gain and increased appetite",
      frequency: "common",
      severity: "severe",
      description: "Moderate-to-high; part of the metabolic package.",
      management: "Early lifestyle intervention; metformin if trajectory rises; monitor.",
    },
    {
      name: "Dyslipidaemia",
      frequency: "common",
      severity: "moderate",
      description: "Triglycerides rise prominently — quetiapine has one of the stronger lipid signals.",
      management: "Baseline and periodic lipids; lifestyle; statin if persistent.",
    },
    {
      name: "Dizziness and headache",
      frequency: "common",
      severity: "mild",
      description: "Often blends with orthostasis at initiation.",
      management: "Slow titration.",
    },
    {
      name: "Transient heart rate rise",
      frequency: "common",
      severity: "mild",
      description: "Reflex tachycardia from vasodilation.",
      management: "Usually benign; monitor if cardiac disease.",
    },
    {
      name: "Abnormal dreams / vivid dreams",
      frequency: "uncommon",
      severity: "mild",
      description: "Particularly with XR at night.",
      management: "Reassurance; dose timing.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Metabolic syndrome and diabetes",
      frequency: "uncommon",
      severity: "severe",
      description: "Weight gain, dyslipidaemia, hyperglycaemia — moderate-to-high risk; DKA reported rarely.",
      management: "Monitor weight, fasting glucose, lipids; intervene early; switch if progressive.",
    },
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Reported even with quetiapine's weak D2 binding — atypical presentations may show less rigidity.",
      management: "Stop drug; ICU care; dantrolene/bromocriptine.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "rare",
      severity: "severe",
      description: "The lowest risk among antipsychotics but not zero — the class warning stands.",
      management: "Reduce or switch; treat severe cases with VMAT2 inhibitors.",
    },
    {
      name: "Cataracts / lens changes",
      frequency: "rare",
      severity: "severe",
      description: "Dose-related lens opacity in animal studies prompted historical eye-exam recommendations; causal evidence in humans is weak.",
      management: "Baseline and periodic eye checks in long-term users remain prudent; visual changes warrant ophthalmology review.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description: "Dose-related threshold lowering.",
      management: "Caution in epilepsy; slow titration.",
    },
    {
      name: "Hypothyroidism",
      frequency: "uncommon",
      severity: "moderate",
      description: "Dose-related reduction in total and free T4 (quinoline-like effect).",
      management: "Check TSH at baseline and periodically; replace if symptomatic.",
    },
    {
      name: "Priapism",
      frequency: "rare",
      severity: "severe",
      description: "Alpha-1 blockade — urological emergency.",
      management: "Immediate urological referral.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Blood pressure (orthostatic)",
      frequency: "Baseline and during titration",
      rationale: "First-dose syncope is a real risk — titrate slowly.",
    },
    {
      parameter: "Weight and BMI",
      frequency: "Baseline, 4–8 weeks, then quarterly",
      rationale: "Moderate-to-high metabolic risk.",
    },
    {
      parameter: "Fasting glucose / HbA1c",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Class metabolic risk.",
    },
    {
      parameter: "Lipids (fasting)",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Triglycerides are the prominent signal.",
    },
    {
      parameter: "Thyroid function (TSH/T4)",
      frequency: "Baseline and periodically",
      rationale: "Dose-related T4 reduction.",
    },
    {
      parameter: "AIMS examination",
      frequency: "Baseline, then every 6–12 months",
      rationale: "TD risk lowest in class but surveillance stands.",
    },
    {
      parameter: "Cataract symptoms",
      frequency: "Ask at reviews; eye exam if symptomatic",
      rationale: "Historical animal signal — periodic checks in long-term users.",
    },
  ],
  interactions: [
    {
      drug: "Carbamazepine, phenytoin, rifampicin (strong CYP3A4 inducers)",
      severity: "major",
      mechanism: "Can more than halve quetiapine levels.",
      action: "Avoid; if unavoidable, increase quetiapine and monitor — often better to choose another antipsychotic.",
    },
    {
      drug: "Ketoconazole, clarithromycin, ritonavir (strong 3A4 inhibitors)",
      severity: "major",
      mechanism: "Raise quetiapine levels substantially.",
      action: "Reduce quetiapine dose; monitor for sedation and hypotension.",
    },
    {
      drug: "Antihypertensives",
      severity: "major",
      mechanism: "Additive orthostatic hypotension.",
      action: "Monitor standing blood pressure; consider holding evening antihypertensives during titration.",
    },
    {
      drug: "Alcohol and CNS depressants",
      severity: "major",
      mechanism: "Additive sedation and orthostasis.",
      action: "Counsel strongly; expect amplified impairment.",
    },
    {
      drug: "QT-prolonging drugs",
      severity: "moderate",
      mechanism: "Additive QT effect — quetiapine dose-dependent.",
      action: "ECG if combinations unavoidable; correct potassium/magnesium.",
    },
    {
      drug: "Levodopa / dopamine agonists",
      severity: "moderate",
      mechanism: "Quetiapine's weak D2 binding makes it the antipsychotic of choice in Parkinson's — but antagonism is still possible at high doses.",
      action: "Use low-mid doses; monitor motor function.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    evidenceBasedSummary: "Limited human data; no clear teratogenic signal, but the metabolic and sedative effects and third-trimester neonatal sedation/withdrawal remain considerations.",
    indianPracticeNote: "Indian practice follows international guidance; discuss before conception where possible and co-manage with obstetrics.",
    summary: "Data are limited but have not shown a major malformation signal. The decision follows the usual antipsychotic logic: untreated bipolar illness carries substantial fetal and maternal risk, so continuation at the lowest effective dose with obstetric co-management is usual. Third-trimester exposure warrants neonatal monitoring for sedation and withdrawal.",
    lactation: "Small amounts pass into milk; infant sedation is the main concern. Generally considered acceptable with infant monitoring, though some guidelines prefer alternatives with less sedative transfer.",
  },
  renalAdjustment: "No dose adjustment required in renal impairment.",
  hepaticAdjustment: "Start lower (25 mg) and titrate more slowly in hepatic impairment; CYP3A4 metabolism is hepatic.",
  /* ---- Education ---- */
  patientExplanation: "Quetiapine affects several brain chemicals — histamine (which makes you sleepy), serotonin, and (weakly) dopamine. The dose decides what it does: a small night dose helps sleep; a middle dose lifts depression in bipolar disorder; a higher dose treats mania and psychosis. It must be built up slowly at the start because it can drop your blood pressure on standing.",
  patientEducationPoints: [
    "The dose build-up over the first days is not optional — it protects you from dizzy spells.",
    "Take it at bedtime; expect some morning grogginess that usually improves.",
    "Stand up slowly, especially in the first week.",
    "This medicine can raise weight, sugar, and cholesterol even at modest doses — keep the blood test appointments.",
    "If your mood worsens or new thoughts of self-harm appear, contact your doctor promptly (applies especially under 25).",
    "Avoid alcohol — the combination is very sedating.",
    "Tell every doctor you see that you take it — several common medicines (including some antibiotics) change its level.",
    "Do not stop suddenly — the dose must come down gradually.",
  ],
  clinicalPearls: [
    "One molecule, three dose-bands: 25–50 mg = sedative; 150–300 mg = antidepressant (norquetiapine NET); 400–800 mg = antipsychotic — the most important dosing concept in the class.",
    "Quetiapine is the only atypical monotherapy approved for bipolar depression — XR 300 mg nightly is the evidence-based target.",
    "In Parkinson's psychosis, quetiapine (with clozapine and pimavanserin) is the safe motor choice — every other antipsychotic worsens the movement disorder.",
    "Norquetiapine (NET inhibition + 5-HT2C blockade) is the antidepressant engine — think 'hidden bupropion-lite plus mirtazapine-lite' in the metabolite.",
    "Triglycerides are quetiapine's favourite metabolic target — check them, not just weight.",
    "The 3A4 interaction shelf is wide: carbamazepine guts levels; ketoconazole/ritonavir explode them — both directions matter in Indian polypharmacy.",
    "XR at night converts the sedation into sleep and smooths the morning hangover — almost always preferred once dose is established.",
    "If a patient on quetiapine 800 mg is sedated, the answer is rarely more drug — it's earlier dosing, XR conversion, or dose reduction.",
    "Thyroid: quetiapine lowers T4 dose-dependently — in a tired patient on quetiapine, check TSH before blaming the drug or the mood.",
    "Low-dose quetiapine for insomnia is widespread but hard to justify long-term — metabolic cost without antipsychotic benefit; prefer scheduled review and exit strategies.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Quetiapine: Quetiapine blocks 5-HT2A and H1 receptors potently with only weak, transient D2 occupancy; its metabolite norquetiapine inhibits norepinephrine reuptake and blocks 5-HT2C — an antidepressant profile hidden inside an antipsychotic.",
        "Uses of Quetiapine: Schizophrenia; Acute manic / mixed episodes of bipolar I; Bipolar depression; Bipolar I maintenance",
        "Mechanism: weak/transient D2 + strong 5-HT2A and H1; metabolite norquetiapine inhibits NET (antidepressant action).",
        "Signature: the only atypical monotherapy approved for BIPOLAR DEPRESSION (XR 300 mg/day).",
      ],
      practical: [
        "Prescribe Quetiapine for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Blood pressure (orthostatic) (Baseline and during titration); Weight and BMI (Baseline, 4–8 weeks, then quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually)",
      ],
      longAnswer: [
        "Quetiapine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: weak/transient D2 + strong 5-HT2A and H1; metabolite norquetiapine inhibits NET (antidepressant action).",
        "Signature: the only atypical monotherapy approved for BIPOLAR DEPRESSION (XR 300 mg/day).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: weak/transient D2 + strong 5-HT2A and H1; metabolite norquetiapine inhibits NET (antidepressant action).",
        "Signature: the only atypical monotherapy approved for BIPOLAR DEPRESSION (XR 300 mg/day).",
        "Dose-bands: 25–50 sedative / 150–300 antidepressant / 400–800 antipsychotic.",
        "EPS and prolactin rise: essentially absent — the class-tolerant choice for motor disease and prolactin sensitivity.",
        "Metabolism: CYP3A4 — carbamazepine halves levels; ketoconazole/ritonavir multiply them.",
        "Signature adverse effects: sedation, orthostatic hypotension (titration mandatory), weight gain, hypertriglyceridaemia.",
      ],
      pyqConcepts: [
        "Mechanism/target of Quetiapine",
        "Key adverse effect: Metabolic syndrome and diabetes",
        "Dosing and titration of Quetiapine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Quetiapine develops metabolic syndrome and diabetes — next best step?",
        "When to choose Quetiapine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: 5-HT2A (high affinity); H1 (potent); D2 (weak, short-acting occupancy); alpha-1; NET via norquetiapine (metabolite)",
        "Most common side effects: Sedation and next-morning grogginess, Orthostatic hypotension, Dry mouth and constipation",
        "Key contraindication: Known hypersensitivity to quetiapine",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Dose-band thinking is the whole drug: 50 for sleep, 300 for mood, 600 for psychosis.",
        "Bipolar depression responds at 300 mg XR — pushing higher adds adverse effects, not efficacy.",
        "Parkinson's psychosis: quetiapine is the practical first try — clozapine if it fails, pimavanserin where available.",
        "Norquetiapine is the antidepressant engine — NET inhibition is why an antipsychotic lifts bipolar depression.",
      ],
    },
  },
  memoryTricks: [
    {
      title: "Three identities",
      trick: "50 = Sleeping pill, 300 = antidepressant, 600 = antipsychotic. 'Low = Lie down, Mid = Mood, Max = Madness (treats it)'.",
      remembers: "The dose-band principle of quetiapine",
    },
    {
      title: "Q = Quiet and Quick to faint",
      trick: "Quetiapine sedates (Quiet) and drops blood pressure on standing (Quick to faint) — titrate.",
      remembers: "The two first-week adverse effects",
    },
    {
      title: "Nor-Q = Noradrenaline",
      trick: "Norquetiapine blocks Noradrenaline reuptake — the antidepressant alter-ego.",
      remembers: "Why an antipsychotic treats bipolar depression",
    },
  ],
  highYieldSummary: [
    "Mechanism: weak/transient D2 + strong 5-HT2A and H1; metabolite norquetiapine inhibits NET (antidepressant action).",
    "Signature: the only atypical monotherapy approved for BIPOLAR DEPRESSION (XR 300 mg/day).",
    "Dose-bands: 25–50 sedative / 150–300 antidepressant / 400–800 antipsychotic.",
    "EPS and prolactin rise: essentially absent — the class-tolerant choice for motor disease and prolactin sensitivity.",
    "Metabolism: CYP3A4 — carbamazepine halves levels; ketoconazole/ritonavir multiply them.",
    "Signature adverse effects: sedation, orthostatic hypotension (titration mandatory), weight gain, hypertriglyceridaemia.",
    "Dose-related T4 reduction — check thyroid in tired patients.",
    "Parkinson's disease psychosis: quetiapine/clozapine/pimavanserin are the safe trio.",
    "Half-life short (6–7 h) — XR preferred for once-nightly dosing.",
    "Boxed warnings: dementia-related psychosis mortality; antidepressant-class suicidality warning for depression uses.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "Bipolar depression — the pole with the fewest options",
      presentation: "A 34-year-old woman with bipolar I disorder presents with a depressive episode and is started on quetiapine XR.",
      history: "A 34-year-old woman with bipolar I (two past manic episodes, both lithium-protected until she stopped it in pregnancy 3 years ago) presents with 5 weeks of pervasive low mood, hypersomnia (12–14 hours), hyperphagia with 5 kg gain, anhedonia, and passive death wishes. No current manic or mixed features. Not on any psychotropic medication.",
      examination: "Psychomotor slowing, tearful, blunted affect; MADRS 32. No psychosis. BMI 26. Fasting glucose 98 mg/dL, triglycerides 165 mg/dL (borderline), TSH normal.",
      diagnosis: "Bipolar I disorder, current episode depressed, moderate-to-severe, with atypical features (hypersomnia, hyperphagia).",
      rationale: "Bipolar depression has few approved monotherapies; quetiapine XR is the best-evidenced single agent and directly targets her atypical depressive picture. Antidepressant monotherapy is avoided (switch risk and poor evidence). Lithium is re-introduced for maintenance. Her baseline metabolic picture is already softening — weight and lipids become co-managed targets from day one.",
      management: "Quetiapine XR 50 mg nightly, titrated by 50–100 mg every 1–2 nights to 300 mg; lithium restarted, targeting 0.6–0.8 mEq/L. Sleep diary, structured meal plan, psychoeducation on bipolar depression. Weight, orthostatic symptoms, fasting glucose, and lipids at baseline, week 6, and week 12.",
      outcome: "Sleep improves by week 1; mood lifts measurably by week 3 (MADRS 20) and reaches remission by week 8 (MADRS 7) on quetiapine 300 mg + lithium. Weight rises 2 kg then plateaus on the meal plan; triglycerides stabilise. Maintenance continues with 6-monthly metabolic review.",
      teachingPoints: [
        "Bipolar depression is the hard pole to treat — quetiapine and the other approved agents work where antidepressant monotherapy fails or endangers.",
        "Titration is a safety feature: orthostasis is the first-week hazard, and patient education converts it from a dropout reason into a managed effect.",
        "The metabolic bookkeeping starts at baseline — in a patient already drifting metabolically, the drug's best asset (mood) must not be bought with its worst liability unmonitored.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical antipsychotic comparison — where quetiapine sits",
      primaryDrug: "Quetiapine",
      rows: [
        {
          attribute: "Mechanism",
          primaryValue: "Weak/transient D2 + strong 5-HT2A/H1; norquetiapine NET inhibition",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Potent D2 + 5-HT2A",
            },
            {
              drug: "Olanzapine",
              value: "Broad D2/5-HT2A/H1/M1 binding",
            },
            {
              drug: "Aripiprazole",
              value: "D2 partial agonist",
            },
            {
              drug: "Lurasidone",
              value: "D2 + 5-HT2A + 5-HT7 (metabolically clean)",
            },
          ],
        },
        {
          attribute: "EPS",
          primaryValue: "Lowest in class (with clozapine)",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Dose-dependent above 6 mg",
            },
            {
              drug: "Olanzapine",
              value: "Low",
            },
            {
              drug: "Aripiprazole",
              value: "Low; akathisia instead",
            },
            {
              drug: "Lurasidone",
              value: "Dose-dependent akathisia",
            },
          ],
        },
        {
          attribute: "Prolactin",
          primaryValue: "No rise",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Highest in class",
            },
            {
              drug: "Olanzapine",
              value: "Minimal",
            },
            {
              drug: "Aripiprazole",
              value: "Usually lowers",
            },
            {
              drug: "Lurasidone",
              value: "Minimal",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "High — dose-timing and XR manage it",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Mild",
            },
            {
              drug: "Olanzapine",
              value: "Moderate–high",
            },
            {
              drug: "Aripiprazole",
              value: "Low — activating",
            },
            {
              drug: "Lurasidone",
              value: "Low–moderate",
            },
          ],
        },
        {
          attribute: "Weight/metabolic",
          primaryValue: "Moderate–high",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Moderate",
            },
            {
              drug: "Olanzapine",
              value: "Highest tier",
            },
            {
              drug: "Aripiprazole",
              value: "Lowest tier",
            },
            {
              drug: "Lurasidone",
              value: "Lowest tier",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Bipolar depression monotherapy; Parkinson's psychosis; GAD/augmentation",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Mania potency; LAI shelf; autism",
            },
            {
              drug: "Olanzapine",
              value: "Robustness; IM; OFC combination",
            },
            {
              drug: "Aripiprazole",
              value: "Metabolic safety; augmentation",
            },
            {
              drug: "Lurasidone",
              value: "Bipolar depression with metabolic safety",
            },
          ],
        },
      ],
      takeaway: "Quetiapine is the tolerance champion — no EPS, no prolactin, and the only atypical monotherapy for bipolar depression — bought with sedation, orthostasis, and metabolic drift. It is the right drug when motor safety or the depressed pole is the problem, and the wrong drug to ignore metabolically.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Day 1 (25–50 mg)",
      title: "Sedation and orthostasis begin",
      description: "H1 and alpha-1 effects appear with the first dose — the patient must be warned about dizziness on standing.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–5 (titration)",
      title: "Dose climbs to therapeutic band",
      description: "Daily increments reach 150–400 mg depending on indication; orthostasis usually attenuates as tolerance develops.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Days 4–7",
      title: "Sleep and anxiety improve first",
      description: "Even at low-mid doses, sleep architecture and anxiety respond early — often the first sign the drug is 'working'.",
      phase: "onset",
    },
    {
      id: "t4",
      time: "Weeks 1–2",
      title: "Antidepressant range engages",
      description: "At 150–300 mg, norquetiapine's NET inhibition builds — bipolar depression response typically assessed at week 2–4.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 2–4",
      title: "Antipsychotic/anti-manic response",
      description: "At 400–800 mg, positive and manic symptoms measurably improve; formal assessment at week 4.",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Weeks 4–8",
      title: "Metabolic trajectory visible",
      description: "Weight and lipids declare themselves — the window for intervention.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Months 3+",
      title: "Maintenance",
      description: "Lipids, glucose, weight, and thyroid surveillance; dose rationalisation to the minimum effective band.",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why do I feel dizzy when I stand up?",
      answer: "Quetiapine relaxes blood vessels, so blood pressure dips briefly on standing — strongest in the first days of each dose increase. Rising slowly, staying hydrated, and taking it at night usually solve it. If you actually faint, tell your doctor: the titration is going too fast.",
    },
    {
      question: "My doctor started me on a tiny dose — why not the full dose right away?",
      answer: "The body needs days to adapt to quetiapine's blood-pressure effect. Starting at full dose can cause fainting — the slow build-up (25–50 mg increments) is a safety feature, not hesitation.",
    },
    {
      question: "Can quetiapine treat depression?",
      answer: "Yes — this is one of its approved uses. At 150–300 mg (XR) it is the only antipsychotic on its own approved for the depressed phase of bipolar disorder, and it is also approved as an add-on for ordinary depression. The antidepressant effect is believed to come from its breakdown product, which acts like an antidepressant on noradrenaline.",
    },
    {
      question: "Will it make me gain weight?",
      answer: "It can — moderately in most people. The appetite effect is real, so a food plan from the start, plus weight and blood-lipid checks, are part of standard treatment. If weight climbs steadily, there are alternatives.",
    },
    {
      question: "Is it addictive?",
      answer: "It is not addictive in the dependence sense, but stopping abruptly causes insomnia and dizziness — it must be tapered gradually.",
    },
    {
      question: "I have Parkinson's and psychosis — is this safe for my movement disorder?",
      answer: "Quetiapine is one of only three options considered safe for psychosis in Parkinson's (with clozapine and pimavanserin), because it barely touches the dopamine receptors that your Parkinson's medicine stimulates. It still needs careful monitoring.",
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
        section: "6th ed. (2017), quetiapine monograph, p. 107",
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
        source: "FDA Prescribing Information for Seroquel (Quetiapine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for quetiapine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Quetiapine",
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
      name: "Bipolar depression",
      relationship: "primary",
    },
    {
      name: "Bipolar I maintenance",
      relationship: "primary",
    },
    {
      name: "Major depressive disorder — adjunctive",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Quetiapine",
      type: "drug",
      href: "/drugs/quetiapine",
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
      label: "5-HT2A (high affinity); H1 (potent); D2 (weak, short-acting occupancy); alpha-1; NET via norquetiapine (metabolite)",
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
      label: "Amygdala",
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
      label: "Bipolar depression",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Metabolic syndrome and diabetes",
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
      label: "Sedation and next-morning grogginess",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Quetiapine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The dose-bands-in-one-drug antipsychotic — a sleeping pill at 50 mg, an antidepressant at 300 mg, an antipsychotic at 600 mg.",
    summary: "Quetiapine is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Quetiapine affects several brain chemicals — histamine (which makes you sleepy), serotonin, and (weakly) dopamine. The dose decides what it does: a small night dose helps sleep; a middle dose lifts depression in bipolar disorder; a higher dose treats mania and psychosis. It must be built up slowly at the start because it can drop your blood pressure on standing.",
    sideEffects: "The most common side effects are: sedation and next-morning grogginess, orthostatic hypotension, dry mouth and constipation, weight gain and increased appetite, dyslipidaemia, dizziness and headache. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Metabolic syndrome and diabetes and Neuroleptic malignant syndrome. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: blood pressure (orthostatic) (baseline and during titration); weight and bmi (baseline, 4–8 weeks, then quarterly); fasting glucose / hba1c (baseline, 12 weeks, then annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Known hypersensitivity to quetiapine, Elderly patients with dementia-related psychosis, Untreated narrow-angle glaucoma. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Carbamazepine, phenytoin, rifampicin (strong CYP3A4 inducers), Ketoconazole, clarithromycin, ritonavir (strong 3A4 inhibitors), Antihypertensives, Alcohol and CNS depressants. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Qutipin",
        manufacturer: "Sun Pharma",
        strengths: "25–400 mg IR; SR 50–400 mg",
      },
      {
        name: "Seroquin / Seroquel XR",
        manufacturer: "Cipla / originator",
        strengths: "IR + XR",
      },
      {
        name: "Qutan / Quetiazoledine (generic XR)",
        manufacturer: "Intas and others",
        strengths: "various",
      },
      {
        name: "Quetiapine (generic)",
        manufacturer: "Multiple, incl. Jan Aushadhi",
        strengths: "25–200 mg IR",
      },
    ],
    typicalDoses: "Bipolar depression XR 300 mg nightly (titrate from 50); psychosis 400–800 mg; low-dose sedative 25–100 mg (review-limited).",
    prescribingScenarios: [
      "Bipolar depression in private and public psychiatry — the approved monotherapy.",
      "Parkinson's clinic psychosis referrals — motor-safe antipsychotic.",
      "Anxiety and insomnia augmentation in general practice (with review dates).",
      "Schizophrenia maintenance where EPS intolerance rules out risperidone.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Generic quetiapine (IR and XR equivalents) is inexpensive; XR costs more but generics have narrowed the gap. Cost varies by manufacturer and region.",
    monitoring: "Weight, fasting glucose, lipids at baseline/12 weeks/annually; TSH periodically; orthostatic checks during titration — district-level protocols emphasise weight at every visit.",
    patientCounselling: [
      "Explain the dose-band plan in writing so patients understand why the dose changes by indication.",
      "Bedtime dosing; rise slowly in week one.",
      "Light evening meals with XR for consistent absorption.",
      "Weight and lipid checks are part of the prescription, not an optional extra.",
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
    note: "Generic quetiapine IR available in Jan Aushadhi kendras; XR availability varies by state formulary.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Quetiapine",
        slug: "quetiapine",
        relationship: "This guide",
        distinguishing: "Bipolar depression approval + virtually zero EPS/prolactin — the sedating antidepressant-antipsychotic",
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
      question: "Which molecular target does Quetiapine primarily act on?",
      options: [
        "5-HT2A (high affinity); H1 (potent); D2 (weak, short-acting occupancy); alpha-1; NET via norquetiapine (metabolite)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Quetiapine acts primarily at 5-HT2A (high affinity); H1 (potent); D2 (weak, short-acting occupancy); alpha-1; NET via norquetiapine (metabolite). Quetiapine blocks 5-HT2A and H1 receptors potently with only weak, transient D2 occupancy; its metabolite norquetiapine inhibits norepinephrine reuptake and blocks 5-HT2C — an antidepressant profile hidden inside an antipsychotic.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Quetiapine?",
      options: ["Sedation and next-morning grogginess", "Orthostatic hypotension", "Dry mouth and constipation", "Weight gain and increased appetite"],
      correctIndex: 0,
      explanation: "Sedation and next-morning grogginess — H1-mediated; the most common reason patients love it at night and hate it in the morning — dose-timing and XR reduce hangover.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Quetiapine for schizophrenia (ir)?",
      options: ["400–800 mg/day divided", "800 mg/day", "400–800 mg/day divided (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (ir): start 25 mg twice daily, target 400–800 mg/day divided, maximum 800 mg/day. Increase 25–50 mg bid/day or bid as tolerated to 300–400 by day 4",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Quetiapine in two sentences.",
      answer: "Quetiapine blocks 5-HT2A and H1 receptors potently with only weak, transient D2 occupancy; its metabolite norquetiapine inhibits norepinephrine reuptake and blocks 5-HT2C — an antidepressant profile hidden inside an antipsychotic. Net effect: Sedation and anxiolysis at low doses; antidepressant effect at mid doses (norquetiapine NET + 5-HT2C); antipsychotic effect only at higher doses when D2 occupancy becomes sustained.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Quetiapine.",
      answer: "Schizophrenia, Acute manic / mixed episodes of bipolar I, Bipolar depression, Bipolar I maintenance. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Quetiapine and how you would manage it.",
      answer: "Metabolic syndrome and diabetes: Weight gain, dyslipidaemia, hyperglycaemia — moderate-to-high risk; DKA reported rarely. Management: Monitor weight, fasting glucose, lipids; intervene early; switch if progressive.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Quetiapine require?",
      answer: "Blood pressure (orthostatic) (Baseline and during titration); Weight and BMI (Baseline, 4–8 weeks, then quarterly); Fasting glucose / HbA1c (Baseline, 12 weeks, then annually); Lipids (fasting) (Baseline, 12 weeks, then annually)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Quetiapine that separates safe prescribers from unsafe ones.",
      answer: "Dose-band thinking is the whole drug: 50 for sleep, 300 for mood, 600 for psychosis.",
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
      checkpoint: "You now know what Quetiapine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Quetiapine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Quetiapine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Quetiapine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Quetiapine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Quetiapine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Sedation: from the first night (any dose).",
      "Bipolar depression: response typically begins within 1–2 weeks at 300 mg XR.",
      "Mania: 3–5 days for early anti-manic effect at 400–600 mg.",
      "Schizophrenia: positive symptoms over 1–3 weeks at 400–800 mg.",
      "GAD/adjunct depression: anxiolysis within days; full effect 2–4 weeks.",
    ],
    ifItWorks: [
      "Continue at the lowest effective dose for the indication's band.",
      "Bipolar depression: continue at least 6 months after remission; consider maintenance given recurrence risk.",
      "Schizophrenia/mania: standard continuation rules (1–2 years minimum post first episode).",
      "Re-audit the dose band at every review — many patients can step down a band over time.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Quetiapine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Lithium or valproate in mania and maintenance.",
      "Antidepressant co-prescription in unipolar augmentation (its approved use).",
      "Short-term benzodiazepine where anxiety is severe (mind the additive sedation).",
      "In TRS: clozapine, not another atypical stacked on.",
    ],
    testsBeforeStarting: [
      "Baseline weight/BMI, waist, fasting glucose/HbA1c, lipids, blood pressure (orthostatic), TSH.",
      "Weight and lipids at 12 weeks, then annually.",
      "Eye examination baseline in long-term users (historical cataract signal).",
      "Pregnancy test where relevant; AIMS baseline.",
    ],
    sideEffectLogic: [
      "Sedation and orthostasis are H1/alpha-1 pharmacology from dose one; weight and lipids are 5-HT2C/H1-mediated feeding effects; the absence of EPS and prolactin effects reflects weak, transient D2 occupancy. Every quetiapine effect — good and bad — is dose-band dependent.",
    ],
    sideEffectManagement: [
      "Wait and titrate slowly: orthostasis and sedation attenuate with tolerance.",
      "Shift dosing entirely to bedtime; convert IR to XR to smooth the hangover.",
      "Reduce to the lowest effective band — many patients are over-dosed for their indication.",
      "Treat the metabolic axis early: diet structure, metformin when the curve rises.",
    ],
    sideEffectRescue: [
      "Bedtime XR conversion for morning grogginess.",
      "Compression stockings and salt intake counsel for orthostasis in the frail.",
      "Metformin for weight trajectory; statin for persistent hypertriglyceridaemia.",
      "Levothyroxine if TSH rises with clinical hypothyroidism.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "High at initiation; usually attenuates at a given dose but remains the dose-limiting effect for many.",
    dosing: [
      {
        indication: "Schizophrenia (IR)",
        starting: "25 mg twice daily",
        titration: "Increase 25–50 mg bid/day or bid as tolerated to 300–400 by day 4",
        target: "400–800 mg/day divided",
        max: "800 mg/day",
        notes: [
          "Faster titration possible in inpatient mania/agitation",
          "IR often twice-daily — XR preferred",
        ],
      },
      {
        indication: "Schizophrenia (XR)",
        starting: "300 mg nightly",
        titration: "Increase by 300 mg/day at intervals of no more than 1 day for mania; slower for depression",
        target: "400–800 mg/day",
        max: "800 mg/day",
        notes: [
          "Take without food or with a light evening meal (~350 kcal limit for consistent absorption)",
        ],
      },
      {
        indication: "Bipolar mania (XR, mono/adjunct)",
        starting: "300 mg nightly (day 1: 100 for mania per label schedules)",
        titration: "Increase by 100–200 mg/day",
        target: "400–800 mg/day (usually 600)",
        max: "800 mg/day",
      },
      {
        indication: "Bipolar depression (XR) — signature use",
        starting: "50 mg nightly",
        titration: "Increase by 50 mg/day to 150 by day 5, then to 300 as needed",
        target: "300 mg/day",
        max: "300 mg/day",
        notes: [
          "300 mg is the target in the pivotal trials — efficacy evidence above this for bipolar depression is limited",
          "Slower titration improves tolerability",
        ],
      },
      {
        indication: "Bipolar depression (children 10–17, XR)",
        starting: "50 mg nightly",
        titration: "Increase by 50 mg/day to 150 by day 5",
        target: "150–300 mg/day",
        max: "300 mg/day",
        notes: [
          "Weight monitoring is critical in adolescents",
        ],
      },
      {
        indication: "MDD adjunct (XR)",
        starting: "50 mg nightly",
        titration: "Increase to 150 mg by day 5; decision point at 150 mg",
        target: "150–300 mg/day",
        max: "300 mg/day",
        notes: [
          "Response at 150 mg should be assessed before escalating",
        ],
      },
      {
        indication: "GAD adjunct / maintenance (where used)",
        starting: "50 mg nightly",
        titration: "Increase 50 mg every 3–5 days",
        target: "150–300 mg/day",
        max: "300 mg/day",
      },
      {
        indication: "Parkinson's psychosis / low-dose sedative use",
        starting: "12.5–25 mg nightly",
        titration: "Increase very slowly (12.5–25 mg steps every 3–7 days)",
        target: "25–150 mg/day",
        max: "Individualised",
        notes: [
          "In Parkinson's, keep the dose as low as effective to avoid sedation and orthostasis falls",
        ],
      },
    ],
    dosageForms: [
      "IR tablets 25, 50, 100, 150, 200, 300, 400 mg",
      "XR tablets 50, 150, 200, 300, 400 mg",
      "Generic quetiapine (IR + XR) widely available",
    ],
    dosingTips: [
      "Titration is pharmacology, not caution theatre — starting at 400 mg will faint the patient.",
      "The dose band must match the indication: audit every prescription against the 25/300/600 principle.",
      "XR at night, IR if cost forces it but expect twice-daily dosing and more hangover.",
      "XR absorption changes with a heavy meal — keep evening meals light or dose before food.",
      "In the elderly, start 12.5–25 mg and go half-speed; falls are the harm pathway.",
      "Ask about lipids specifically — triglycerides rise before weight does in some patients.",
      "If low-dose use for insomnia creeps past 3 months, force a review — metabolic cost without antipsychotic benefit.",
      "Sudden cardiac death precautions apply to all antipsychotics: correct potassium and magnesium when ill.",
    ],
    overdose: [
      "Somnolence, tachycardia, hypotension, and anticholinergic-type effects; QT prolongation with large doses.",
      "Supportive care: airway, IV fluids, cardiac monitoring.",
      "No antidote; charcoal if early and airway protected.",
    ],
    longTermUse: "Long-term metabolic monitoring (weight, glucose, lipids) plus thyroid surveillance; cataract screening historically advised; TD risk lowest in class.",
    habitForming: "Not considered habit-forming — but psychological reliance on its sleep effect is common and worth addressing.",
    howToStop: [
      "Taper gradually — abrupt stop causes rebound insomnia, nausea, and dizziness.",
      "Reduce by roughly a band-step every few days (e.g., 400→300→200→100→50).",
      "Watch for relapse of the underlying illness, especially bipolar depression.",
      "After long low-dose insomnia use, taper even slower — rebound insomnia is the rule.",
    ],
    pharmacokinetics: [
      "Half-life 6–7 h (IR); XR extends effective coverage.",
      "Norquetiapine half-life 9–12 h — carries the antidepressant action.",
      "CYP3A4 metabolism — inducers/inhibitors move levels sharply.",
      "XR: food increases exposure — keep evening dosing consistent.",
    ],
    doNotUse: [
      "Known hypersensitivity.",
      "Dementia-related psychosis in the elderly (boxed warning).",
      "As an untreated first choice for simple insomnia without a review plan (metabolic cost/benefit).",
      "With strong 3A4 inducers unless levels/dose are actively managed.",
    ],
    specialPopulations: [
      {
        population: "Renal impairment",
        guidance: ["No dose adjustment."],
      },
      {
        population: "Hepatic impairment",
        guidance: [
          "Start at 25 mg/day and titrate at half the usual increments.",
        ],
      },
      {
        population: "Cardiac impairment",
        guidance: [
          "Monitor orthostasis and heart rate; caution with QT drugs.",
        ],
      },
      {
        population: "Elderly",
        guidance: [
          "Start 12.5–25 mg; go half-speed — falls and orthostasis are the harm pathway.",
          "Dementia-related psychosis: boxed warning.",
          "Low doses are often effective for sleep/agitation in palliative care with review dates set.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Approved: schizophrenia ≥13, mania ≥10, bipolar depression ≥10 (XR).",
          "Weight gain in adolescents is the main burden — monitor every visit.",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "Limited data; no clear teratogenic signal.",
          "Sedation and metabolic effects deserve attention in pregnancy.",
          "Breastfeeding: usually compatible with infant sedation monitoring.",
        ],
      },
      {
        population: "Comorbid neurological disease",
        guidance: [
          "Parkinson's psychosis: first-line consideration with clozapine/pimavanserin — weak D2 spares motor function.",
          "Start tiny (12.5–25 mg) and titrate slowly.",
        ],
      },
    ],
    potentialAdvantages: [
      "Only atypical monotherapy for bipolar depression.",
      "Virtually no EPS and no prolactin elevation.",
      "Safe in Parkinson's disease psychosis.",
      "Anxiolytic and sleep-restoring from the first nights.",
      "Useful across the entire bipolar spectrum (all four approvals are bipolar/schizophrenia).",
      "XR enables once-nightly dosing.",
    ],
    potentialDisadvantages: [
      "Metabolic burden — weight and especially triglycerides.",
      "Sedation and orthostasis require slow titration.",
      "Cannot start at a therapeutic dose (unlike aripiprazole/risperidone).",
      "Short IR half-life forces twice-daily dosing.",
      "Wide 3A4 interaction surface.",
      "Widely misused as a standalone sleeping pill.",
    ],
    primaryTargetSymptoms: [
      "Bipolar depressive episodes (signature target)",
      "Manic symptoms",
      "Positive symptoms of psychosis",
      "Anxiety (GAD, augmentation)",
      "Sleep disturbance",
      "Agitation in dementia (last-resort, short-term)",
    ],
    pearls: [
      "Dose-band thinking is the whole drug: 50 for sleep, 300 for mood, 600 for psychosis.",
      "Bipolar depression responds at 300 mg XR — pushing higher adds adverse effects, not efficacy.",
      "Parkinson's psychosis: quetiapine is the practical first try — clozapine if it fails, pimavanserin where available.",
      "Norquetiapine is the antidepressant engine — NET inhibition is why an antipsychotic lifts bipolar depression.",
      "Titration speed is the difference between a loyal patient and a fainted one.",
      "Triglycerides are the quiet metabolic signal — check them at 12 weeks.",
      "Elderly on quetiapine: the enemy is the fall, not the TD.",
      "If the low-dose sleep prescription outlives its welcome, renegotiate it — metabolic rent is accruing.",
      "3A4 inducers gut quetiapine — a manic relapse in a carbamazepine co-prescription is pharmacokinetics, not bad luck.",
      "Conversion IR→XR is roughly total daily IR dose as a single nightly XR dose — then adjust for hangover.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
