import type { Drug } from "../types";

/**
 * Aripiprazole — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), aripiprazole monograph (book p. 9)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const aripiprazole: Drug = {
  /* ---- Identity ---- */
  slug: "aripiprazole",
  genericName: "Aripiprazole",
  brandNames: ["Abilify", "Abilify Maintena", "Aristada", "Abilify Asimtufii"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Dopamine Stabiliser",
  drugClassFullName: "Dopamine-Serotonin Stabiliser (Atypical Antipsychotic)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Aripiprazole"],
  /* ---- Hero / summary ---- */
  tagline: "A dopamine system stabiliser — the 'thermostat' antipsychotic that tunes dopamine up where it is too low and down where it is too high.",
  summary: "Aripiprazole is the prototype third-generation antipsychotic: a partial agonist at D2/D3 and 5-HT1A receptors and an antagonist at 5-HT2A receptors. Because it partially activates dopamine receptors rather than simply blocking them, it stabilises dopaminergic tone — producing antipsychotic efficacy with less hyperprolactinaemia than risperidone and less weight gain than olanzapine or quetiapine. It is approved across schizophrenia, bipolar mania, bipolar maintenance, adjunctive major depression, autism-related irritability, and Tourette's disorder, with long-acting injectable formulations for maintenance and adherence.",
  estimatedReadTime: "18 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Aripiprazole — from its molecular target (D2/D3 receptor (partial agonist); 5-HT1A (partial agonist); 5-HT2A (antagonist)) to clinical effect.",
    "List the FDA-approved and off-label uses of Aripiprazole.",
    "Predict the common and serious side effects of Aripiprazole from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Aripiprazole.",
    "Compare Aripiprazole with other dopamine stabilisers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Aripiprazole is a partial agonist at D2/D3 and 5-HT1A receptors and an antagonist at 5-HT2A receptors — a dopamine-serotonin system stabiliser rather than a pure blocker.",
    molecularTarget: "D2/D3 receptor (partial agonist); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
    effect: "Functional dopamine antagonist in hyperdopaminergic (mesolimbic) regions, but functionally agonist-like in hypodopaminergic (mesocortical, tuberoinfundibular) regions — antipsychotic effect with little prolactin rise or secondary negative-symptom burden.",
    steps: [
      "Aripiprazole occupies D2 receptors with very high affinity — higher than most antipsychotics and endogenous dopamine itself.",
      "As a PARTIAL agonist, it produces roughly 25–30% of the response dopamine would produce — enough to silence excessive dopamine signalling in the mesolimbic pathway (antipsychotic effect).",
      "In pathways where dopamine tone is low (mesocortical, tuberoinfundibular), its partial agonism actually supports dopaminergic signalling — preserving prolactin regulation and theoretically reducing negative and cognitive symptoms.",
      "5-HT2A antagonism further disinhibits dopamine release in cortical and nigrostriatal regions, adding efficacy and lowering EPS risk.",
      "5-HT1A partial agonism contributes to antidepressant and anxiolytic effects and may improve cognition.",
      "The net result is 'stabilisation' — the same molecule behaves as antagonist or agonist depending on the dopaminergic environment of each pathway.",
    ],
    pharmacokinetics: "Well absorbed orally (peak 3–5 hours); food has no clinically significant effect. Steady state in about 14 days. Long half-life makes once-daily dosing possible and smooths missed doses.",
    halfLife: "75 hours (aripiprazole); 94 hours for the active metabolite dehydro-aripiprazole — together effective half-life can approach 2 weeks on chronic dosing.",
    activeMetabolite: "Dehydro-aripiprazole — similar D2 partial agonist activity; contributes meaningfully to overall effect.",
    metabolism: "Hepatic CYP2D6 and CYP3A4; both must be blocked to double levels (single-pathway inhibition only raises levels modestly).",
    excretion: "Primarily faecal, with a smaller renal fraction of metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Aripiprazole",
        sublabel: "D2/D3 partial agonist",
        variant: "process",
      },
      {
        id: "d2",
        label: "D2 receptor",
        sublabel: "High-affinity partial agonist occupancy",
        variant: "target",
      },
      {
        id: "meso",
        label: "Mesolimbic pathway",
        sublabel: "Excess dopamine → psychosis",
        variant: "input",
      },
      {
        id: "block",
        label: "Net antagonism here",
        sublabel: "Partial agonist out-competes dopamine",
        variant: "output",
      },
      {
        id: "tuber",
        label: "Tuberoinfundibular pathway",
        sublabel: "Prolactin regulation preserved",
        variant: "output",
      },
      {
        id: "meso_c",
        label: "Mesocortical pathway",
        sublabel: "Agonist support where DA tone is low",
        variant: "output",
      },
      {
        id: "5ht2a",
        label: "5-HT2A antagonism + 5-HT1A partial agonism",
        sublabel: "Cortical DA release, antidepressant effect",
        variant: "target",
      },
    ],
    edges: [
      {
        from: "meso",
        to: "d2",
        label: "high DA tone",
      },
      {
        from: "drug",
        to: "d2",
        label: "occupies",
        type: "stimulate",
      },
      {
        from: "d2",
        to: "block",
        label: "net blockade",
      },
      {
        from: "drug",
        to: "tuber",
        label: "net agonism",
        type: "stimulate",
      },
      {
        from: "drug",
        to: "meso_c",
        label: "net agonism",
        type: "stimulate",
      },
      {
        from: "drug",
        to: "5ht2a",
        label: "modulates",
        type: "inhibit",
      },
      {
        from: "5ht2a",
        to: "meso_c",
        label: "enhances",
      },
    ],
    caption: "One molecule, direction-dependent action: net antagonist where dopamine is excessive (mesolimbic), net agonist where dopamine is deficient (tuberoinfundibular, mesocortical) — the 'thermostat' model of aripiprazole.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)"],
  receptors: [
    "D2 receptor (partial agonist)",
    "D3 receptor (partial agonist)",
    "5-HT1A (partial agonist)",
    "5-HT2A (antagonist)",
    "5-HT2C (partial agonist)",
    "5-HT7 (antagonist)",
    "5-HT6 (antagonist)",
    "H1 (partial agonist, low affinity)",
    "M1 (negligible)",
  ],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens", "substantia-nigra"],
  pathwayIds: ["mesolimbic", "mesocortical", "tuberoinfundibular", "nigrostriatal"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Schizophrenia",
      status: "fda-approved",
      description: "First-line atypical antipsychotic for positive and negative symptoms, in adults and adolescents aged 13–17.",
      ageGroup: "Adults & ≥13 years",
    },
    {
      name: "Acute manic / mixed episodes of bipolar I",
      status: "fda-approved",
      description: "Effective as monotherapy or adjunct to lithium/valproate; approved ages 10 and up.",
      ageGroup: "Adults & ≥10 years",
    },
    {
      name: "Bipolar I maintenance",
      status: "fda-approved",
      description: "Prevents relapse into both poles; commonly combined with lithium or valproate.",
    },
    {
      name: "Major depressive disorder — adjunctive",
      status: "fda-approved",
      description: "Low-dose aripiprazole (2–10 mg/day) is one of the best-evidenced augmentations for SSRI/SNRI partial response.",
      ageGroup: "Adults",
    },
    {
      name: "Irritability associated with autistic disorder",
      status: "fda-approved",
      description: "Reduces tantrums, aggression, and self-injurious behaviour in children and adolescents.",
      ageGroup: "6–17 years",
    },
    {
      name: "Tourette's disorder",
      status: "fda-approved",
      description: "Reduces tic frequency and severity in children and adolescents.",
      ageGroup: "6–18 years",
    },
    {
      name: "Agitation associated with schizophrenia or bipolar mania",
      status: "fda-approved",
      description: "Intramuscular formulation for acute agitation in emergency settings.",
    },
    {
      name: "Bipolar depression",
      status: "off-label",
      description: "Widely used off-label as monotherapy or adjunct; cariprazine and quetiapine are the approved alternatives for this phase.",
    },
  ],
  contraindications: [
    {
      name: "Known hypersensitivity to aripiprazole",
      severity: "absolute",
      rationale: "Rare anaphylaxis reactions reported with the class.",
    },
    {
      name: "Elderly patients with dementia-related psychosis",
      severity: "absolute",
      rationale: "Class boxed warning: increased mortality (primarily cardiovascular and infectious) in this population — not an approved use.",
    },
    {
      name: "Strong CYP2D6 or CYP3A4 inhibitors without dose adjustment",
      severity: "relative",
      rationale: "Both pathways metabolise aripiprazole; combined inhibition raises exposure — halve the dose when these are co-prescribed.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Increased mortality in elderly patients with dementia-related psychosis",
      text: "Aripiprazole is not approved for the treatment of patients with dementia-related psychosis. In pooled analyses of atypical antipsychotics in this population, mortality was increased (approximately 1.7-fold) compared with placebo, with deaths primarily from cardiovascular causes (sudden death, heart failure) and infections (pneumonia).",
    },
    {
      title: "Suicidal thinking in adjunctive use for depression",
      text: "When used as an adjunct for major depressive disorder, antidepressant-class warnings apply: increased risk of suicidality in children, adolescents, and young adults. All patients should be monitored for clinical worsening, suicidality, and unusual behaviour changes, especially early in treatment.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Akathisia",
      frequency: "very-common",
      severity: "moderate",
      description: "Inner restlessness and an inability to sit still — the signature adverse effect of aripiprazole, dose-related, most common in the first weeks.",
      management: "Reduce dose; propranolol 10–30 mg three times daily, or a benzodiazepine, is usually effective.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "mild",
      description: "Difficulty initiating sleep related to the drug's activating profile — usually in the first week.",
      management: "Shift dosing to morning; short-term hypnotic if required.",
    },
    {
      name: "Nausea and vomiting",
      frequency: "common",
      severity: "mild",
      description: "Central dopamine partial agonism affects the chemoreceptor trigger zone.",
      management: "Take with food; tolerance usually develops over 1–2 weeks.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Usually mild and transient in the first weeks.",
      management: "Simple analgesia; reassurance.",
    },
    {
      name: "Activation / anxiety / restlessness",
      frequency: "common",
      severity: "moderate",
      description: "Some patients feel 'wired' or agitated, distinct from true akathisia.",
      management: "Lower the dose; if persistent, consider a more sedating alternative.",
    },
    {
      name: "Tremor",
      frequency: "common",
      severity: "mild",
      description: "Fine tremor, usually mild; distinguish from parkinsonism and lithium tremor.",
      management: "Reassure; check the dose; review other tremorgenic drugs.",
    },
    {
      name: "Somnolence",
      frequency: "uncommon",
      severity: "mild",
      description: "Less sedation than most antipsychotics — some patients actually feel more alert.",
      management: "Usually transient; dose timing matters more than dose size.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Neuroleptic malignant syndrome (NMS)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Rigidity, hyperthermia, autonomic instability, elevated creatine kinase, and altered consciousness — a medical emergency reported with all antipsychotics including aripiprazole.",
      management: "Stop the drug immediately, aggressive supportive care in ICU, consider dantrolene or bromocriptine.",
    },
    {
      name: "Tardive dyskinesia",
      frequency: "rare",
      severity: "severe",
      description: "Potentially irreversible involuntary movements (orofacial, limb, truncal) with long-term use; risk increases with age, duration, and female sex.",
      management: "Stop or reduce if possible; consider switching to clozapine; valbenazine or deutetrabenazine for severe cases.",
    },
    {
      name: "Impulse control disorders",
      frequency: "uncommon",
      severity: "severe",
      description: "Pathological gambling, compulsive shopping, hypersexuality, and binge eating linked to partial dopamine agonism — patients and families must be warned.",
      management: "Stop the drug; symptoms usually resolve, but may take weeks to months.",
    },
    {
      name: "Pathological gambling specifically",
      frequency: "uncommon",
      severity: "severe",
      description: "The best-documented impulse-control problem with aripiprazole; several regulatory warnings exist worldwide.",
      management: "Immediate discontinuation once recognised; refer for psychological support.",
    },
    {
      name: "Metabolic changes",
      frequency: "uncommon",
      severity: "moderate",
      description: "Weight gain, dyslipidaemia, and hyperglycaemia — less than olanzapine or quetiapine but possible, especially with long-term use.",
      management: "Lifestyle interventions; monitor weight, fasting glucose, and lipids each visit.",
    },
    {
      name: "Orthostatic hypotension",
      frequency: "uncommon",
      severity: "moderate",
      description: "Mild alpha-1 adrenergic antagonism — usually clinically insignificant in healthy adults.",
      management: "Rise slowly; review antihypertensives; increase fluid intake.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Weight and BMI",
      frequency: "Baseline, then at 4, 8, 12 weeks and quarterly",
      rationale: "Detect emerging metabolic syndrome even though aripiprazole is lower-risk.",
    },
    {
      parameter: "Fasting plasma glucose / HbA1c",
      frequency: "Baseline, then at 12 weeks and annually",
      rationale: "Atypical antipsychotics can unmask diabetes.",
    },
    {
      parameter: "Lipid profile (fasting)",
      frequency: "Baseline, then at 12 weeks and annually",
      rationale: "Class metabolic risk; aripiprazole lower risk.",
    },
    {
      parameter: "Blood pressure (orthostatic)",
      frequency: "Baseline and after dose changes",
      rationale: "Detect orthostasis especially in the elderly.",
    },
    {
      parameter: "Movement review (AIMS)",
      frequency: "Baseline and every 6–12 months",
      rationale: "Baseline AIMS allows early detection of tardive dyskinesia.",
    },
    {
      parameter: "Prolactin if symptomatic",
      frequency: "Only if symptoms (galactorrhoea, amenorrhoea, sexual dysfunction)",
      rationale: "Aripiprazole usually lowers prolactin — check if symptoms suggest another cause.",
    },
    {
      parameter: "Mental state for akathisia and activation",
      frequency: "Every review in the first 2 months",
      rationale: "The most common reason patients stop aripiprazole.",
    },
  ],
  interactions: [
    {
      drug: "Strong CYP2D6 inhibitors (fluoxetine, paroxetine, quinidine)",
      severity: "major",
      mechanism: "Reduce aripiprazole clearance by about half when 3A4 is also inhibited; single-pathway inhibition is usually modest.",
      action: "Halve the aripiprazole dose if the patient is also on a 3A4 inhibitor; otherwise monitor for adverse effects.",
    },
    {
      drug: "Strong CYP3A4 inhibitors (ketoconazole, clarithromycin)",
      severity: "major",
      mechanism: "Same mechanism as above via the 3A4 pathway.",
      action: "Halve the dose when combined with 2D6 inhibitors; monitor otherwise.",
    },
    {
      drug: "Carbamazepine and other strong CYP3A4 inducers",
      severity: "major",
      mechanism: "Enzyme induction can more than halve aripiprazole levels.",
      action: "Double the aripiprazole dose (label recommendation) and reassess response.",
    },
    {
      drug: "Other antipsychotics",
      severity: "moderate",
      mechanism: "Additive adverse effects (EPS, akathisia, sedation); combining a partial agonist with a full antagonist can be counterproductive.",
      action: "Use combinations only with clear rationale; prefer monotherapy or LAI.",
    },
    {
      drug: "CNS depressants and alcohol",
      severity: "moderate",
      mechanism: "Additive sedation and orthostasis.",
      action: "Counsel against alcohol; anticipate increased sedation.",
    },
    {
      drug: "Antihypertensives",
      severity: "minor",
      mechanism: "Additive hypotensive effect via alpha-1 blockade.",
      action: "Monitor blood pressure standing and sitting.",
    },
  ],
  pregnancy: {
    legacyCategory: "C",
    evidenceBasedSummary: "Available registry data have not shown a major teratogenic signal, but data remain limited; treat schizophrenia in pregnancy with the lowest effective dose and involve the patient in shared decision-making.",
    indianPracticeNote: "Indian practice follows international guidance; involve obstetrics early and document the risk-benefit discussion.",
    summary: "No convincing teratogenic signal in available registries, but data are limited. For a woman with psychosis, relapse prevention usually outweighs fetal risk — abrupt discontinuation is usually the greater danger. Neonates exposed in the third trimester should be monitored for extrapyramidal and withdrawal symptoms.",
    lactation: "Aripiprazole passes into breast milk in small amounts; infant sedation is possible. Most guidance considers aripiprazole among the antipsychotics more compatible with breastfeeding, but the infant should be monitored for drowsiness and poor feeding.",
  },
  renalAdjustment: "No dose adjustment required for any degree of renal impairment.",
  hepaticAdjustment: "No formal dose adjustment for mild-to-moderate hepatic impairment; use cautiously in severe impairment given extensive hepatic metabolism.",
  /* ---- Education ---- */
  patientExplanation: "Aripiprazole helps restore the balance of two natural brain chemicals — dopamine and serotonin. Unlike older antipsychotics that simply block dopamine, it works like a thermostat: it turns dopamine activity down in the circuits that are too active (causing hallucinations or paranoia) and supports it in circuits that need it. This is why it tends to cause fewer movement side effects and less weight gain than many similar medicines.",
  patientEducationPoints: [
    "The most common problem in the first weeks is a restless, 'can't sit still' feeling (akathisia) — it is treatable; tell your doctor rather than stopping.",
    "Take it in the morning if it keeps you awake — it is slightly activating for most people.",
    "Rare but important: some people develop urges they cannot control — gambling, shopping, eating, or sex. If this happens, contact your doctor immediately; it stops when the medicine is stopped.",
    "Expect benefit to build over 1–3 weeks — do not stop because relief isn't immediate.",
    "Do not stop suddenly — discuss any change with your doctor first.",
    "Tell your doctor about all your other medicines — some antibiotics and antidepressants change aripiprazole levels and the dose may need adjusting.",
    "If you receive the monthly or 6-weekly injection, never miss your appointment — the long-acting form can't be stopped quickly if problems develop.",
    "Keep appointments for weight, blood sugar, and cholesterol checks, even though aripiprazole is lower-risk than similar medicines.",
  ],
  clinicalPearls: [
    "Think of aripiprazole as a dopamine thermostat: net antagonist where dopamine is high, net agonist where dopamine is low — this single concept explains its benefits and its adverse effects.",
    "Akathisia, not weight gain, is aripiprazole's signature problem — ask about it directly at every early review because patients rarely volunteer it.",
    "2–10 mg/day is often the sweet spot for antidepressant augmentation; higher doses are not more effective for this indication.",
    "Because it can be activating, aripiprazole is a poor choice when sedation is the goal — pair with a benzodiazepine short-term if calming is needed.",
    "Aripiprazole can actually lower prolactin — useful when switching from risperidone-induced hyperprolactinaemia.",
    "When switching from another antipsychotic, cross-titration beats abrupt switch: overlap with the old drug for 1–2 weeks to avoid rebound psychosis or withdrawal dyskinesia.",
    "The long half-life (~3 days, longer for the metabolite) means adverse effects and benefits persist for days after stopping — relevant for overdose monitoring and for LAI timing decisions.",
    "In bipolar depression, aripiprazole monotherapy evidence is weak — cariprazine, quetiapine, or lurasidone are better-supported; use aripiprazole as an adjunct or for maintenance.",
    "Warn about impulse-control disorders at initiation — a single sentence at the start can prevent catastrophic gambling losses months later.",
    "For elderly patients who must remain on an antipsychotic, aripiprazole's low metabolic burden is an advantage — but the dementia-psychosis boxed warning still applies.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Aripiprazole: Aripiprazole is a partial agonist at D2/D3 and 5-HT1A receptors and an antagonist at 5-HT2A receptors — a dopamine-serotonin system stabiliser rather than a pure blocker.",
        "Uses of Aripiprazole: Schizophrenia; Acute manic / mixed episodes of bipolar I; Bipolar I maintenance; Major depressive disorder — adjunctive",
        "Mechanism: D2/D3 PARTIAL agonist + 5-HT1A partial agonist + 5-HT2A antagonist — the prototype third-generation 'dopamine stabiliser'.",
        "Signature adverse effect: akathisia (dose-related, treat with propranolol or dose reduction).",
      ],
      practical: [
        "Prescribe Aripiprazole for schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting plasma glucose / HbA1c (Baseline, then at 12 weeks and annually); Lipid profile (fasting) (Baseline, then at 12 weeks and annually)",
      ],
      longAnswer: [
        "Aripiprazole: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: D2/D3 PARTIAL agonist + 5-HT1A partial agonist + 5-HT2A antagonist — the prototype third-generation 'dopamine stabiliser'.",
        "Signature adverse effect: akathisia (dose-related, treat with propranolol or dose reduction).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: D2/D3 PARTIAL agonist + 5-HT1A partial agonist + 5-HT2A antagonist — the prototype third-generation 'dopamine stabiliser'.",
        "Signature adverse effect: akathisia (dose-related, treat with propranolol or dose reduction).",
        "Metabolic profile: least weight gain among commonly used atypicals (with lurasidone and ziprasidone) — preferred in diabetes, dyslipidaemia, obesity.",
        "Prolactin: usually normal or LOW — can normalise risperidone-induced hyperprolactinaemia on cross-taper.",
        "Adjunctive use in MDD: 2–10 mg/day is FDA-approved; the best-studied augmentation after lithium and triiodothyronine.",
        "Half-life 75 h (metabolite 94 h) — once-daily dosing; doses persist days after stopping.",
      ],
      pyqConcepts: [
        "Mechanism/target of Aripiprazole",
        "Key adverse effect: Neuroleptic malignant syndrome (NMS)",
        "Dosing and titration of Aripiprazole",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Aripiprazole develops neuroleptic malignant syndrome (nms) — next best step?",
        "When to choose Aripiprazole over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2/D3 receptor (partial agonist); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
        "Most common side effects: Akathisia, Insomnia, Nausea and vomiting",
        "Key contraindication: Known hypersensitivity to aripiprazole",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Dopamine thermostat: antagonist where DA is high, agonist where DA is low — one concept explains the whole drug.",
        "Akathisia is the signature: ask at every early visit — patients call it 'anxiety' or 'restlessness'.",
        "2–10 mg for augmentation; 10–15 mg for psychosis; 30 mg is rarely better than 20 mg.",
        "Can normalise prolactin — a deliberate switch strategy from risperidone.",
      ],
    },
  },
  memoryTricks: [
    {
      title: "A-rip in the blockade",
      trick: "Aripiprazole puts a 'rip' (tear) in the wall of pure D2 blockade — partial agonism lets some dopamine signal through.",
      remembers: "Why aripiprazole causes less hyperprolactinaemia and less EPS than full blockers",
    },
    {
      title: "The Thermostat",
      trick: "Turns DA down when too hot (mesolimbic), up when too cold (tuberoinfundibular) — a thermostat, not a switch.",
      remembers: "The mechanism of a dopamine 'stabiliser'",
    },
    {
      title: "Akathisia is the A-signature",
      trick: "A-ripiprazole → A-kathisia → A-sk the patient (restless? can't sit still?) at every visit.",
      remembers: "The number-one adverse effect and the number-one counselling point",
    },
  ],
  highYieldSummary: [
    "Mechanism: D2/D3 PARTIAL agonist + 5-HT1A partial agonist + 5-HT2A antagonist — the prototype third-generation 'dopamine stabiliser'.",
    "Signature adverse effect: akathisia (dose-related, treat with propranolol or dose reduction).",
    "Metabolic profile: least weight gain among commonly used atypicals (with lurasidone and ziprasidone) — preferred in diabetes, dyslipidaemia, obesity.",
    "Prolactin: usually normal or LOW — can normalise risperidone-induced hyperprolactinaemia on cross-taper.",
    "Adjunctive use in MDD: 2–10 mg/day is FDA-approved; the best-studied augmentation after lithium and triiodothyronine.",
    "Half-life 75 h (metabolite 94 h) — once-daily dosing; doses persist days after stopping.",
    "Pharmacokinetics: CYP2D6 + CYP3A4 — double the dose with carbamazepine (inducer); halve with strong inhibitors of both pathways.",
    "Impulse control disorders (gambling, hypersexuality, compulsive shopping) — a specific warning unique among atypicals.",
    "Boxed warning: increased mortality in elderly with dementia-related psychosis (class warning).",
    "Approved ages: schizophrenia ≥13, bipolar mania ≥10, autism irritability 6–17, Tourette's 6–18.",
    "LAI options: Abilify Maintena (400 mg/4 weeks), Aristada (441–882 mg, 4–8 weeks) — for adherence in maintenance.",
    "Bipolar depression: weak monotherapy evidence — prefer cariprazine/quetiapine/lurasidone; aripiprazole shines in maintenance and mania.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "The restless recovery — first-episode schizophrenia",
      presentation: "A 23-year-old man with first-episode schizophrenia, started on aripiprazole, returns with restlessness at week 2.",
      history: "A 23-year-old computing student is brought by his family with 6 months of social withdrawal, deteriorating self-care, and 2 months of auditory hallucinations (a running commentary) and persecutory delusions (his phone is bugged). No substance use on screening. No medical history; not on any medication.",
      examination: "Dishevelled, guarded, and distracted (responding to internal stimuli). Affect blunted; thought form tangential; auditory hallucinations and delusions of surveillance elicited. Insight partial. Physical examination normal; BMI 22.5; baseline fasting glucose, lipids, and ECG normal.",
      diagnosis: "Schizophrenia, first episode (DSM-5). Differentials: substance-induced psychosis (excluded by negative screen and timeline), brief psychotic disorder (< 1 month — excluded by duration), delusional disorder (excluded by hallucinations and functional decline).",
      rationale: "Aripiprazole 10 mg is chosen: first-episode patients are exquisitely sensitive to adverse effects, adherence is the strongest predictor of outcome, and the low metabolic burden plus neutral prolactin profile favour it. The absence of depressive or catatonic features removes pressure toward quetiapine; preserved weight consciousness and the patient's studies favour an activating profile.",
      management: "Aripiprazole 10 mg once daily (morning), psychoeducation for patient and family, written symptom-monitoring diary, review at 2 weeks. At review, mild akathisia is diagnosed (BARS 3) and managed with propranolol 10 mg three times daily; dosing moved to breakfast. Metabolic panel repeated at 12 weeks.",
      outcome: "By week 4, hallucinations faded to brief, dismissible occurrences; akathisia resolved by week 3 on propranolol, which was then tapered off. At 6 months, the patient remains on aripiprazole 10 mg, has returned to studies with reduced course load, gains no significant weight, and has a normal AIMS exam.",
      teachingPoints: [
        "First-episode schizophrenia: start low, go slow, and take adverse effects more seriously than symptoms — adherence now determines prognosis.",
        "Akathisia at week 2 is not a reason to switch — it is a reason to ask, dose-adjust, and treat (propranolol) before judging efficacy.",
        "Low metabolic burden matters in young patients on potentially decades of treatment — aripiprazole's key advantage.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Atypical antipsychotic comparison — choosing within the class",
      primaryDrug: "Aripiprazole",
      rows: [
        {
          attribute: "Mechanism",
          primaryValue: "D2/D3 partial agonist + 5-HT1A partial agonist + 5-HT2A antagonist",
          comparisons: [
            {
              drug: "Risperidone",
              value: "D2 antagonist + 5-HT2A antagonist (strong D2)",
            },
            {
              drug: "Olanzapine",
              value: "D2/5-HT2A antagonist + potent M1/H1 activity",
            },
            {
              drug: "Quetiapine",
              value: "Weak D2 + H1-dominant sedative profile",
            },
            {
              drug: "Clozapine",
              value: "D2 (loose) + broad receptor profile; NMDA-linked effects",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Lowest tier — reported but not expected",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Modest",
            },
            {
              drug: "Olanzapine",
              value: "Highest tier — frequent and significant",
            },
            {
              drug: "Quetiapine",
              value: "Moderate",
            },
            {
              drug: "Clozapine",
              value: "High",
            },
          ],
        },
        {
          attribute: "Prolactin",
          primaryValue: "Usually lowers prolactin",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Highest prolactin elevation in class",
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
          attribute: "Sedation",
          primaryValue: "Low — can be activating",
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
              drug: "Quetiapine",
              value: "High — used as a sedative",
            },
            {
              drug: "Clozapine",
              value: "High",
            },
          ],
        },
        {
          attribute: "Akathisia / EPS",
          primaryValue: "Akathisia common; EPS low",
          comparisons: [
            {
              drug: "Risperidone",
              value: "EPS dose-dependent; highest EPS risk among atypicals > 6 mg",
            },
            {
              drug: "Olanzapine",
              value: "Low EPS",
            },
            {
              drug: "Quetiapine",
              value: "Lowest EPS",
            },
            {
              drug: "Clozapine",
              value: "Lowest EPS — treats refractory cases",
            },
          ],
        },
        {
          attribute: "Best niche",
          primaryValue: "Metabolic-risk patients, augmentation, maintenance, prolactin-sensitive cases",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Potent anti-manic; paediatric irritability; LAI experience",
            },
            {
              drug: "Olanzapine",
              value: "Agitation/mania with poor intake; refractory mood; olanzapine-fluoxetine for bipolar depression",
            },
            {
              drug: "Quetiapine",
              value: "Bipolar depression, anxiety comorbidity, when sedation is desired",
            },
            {
              drug: "Clozapine",
              value: "Treatment-resistant schizophrenia; suicidality in schizophrenia",
            },
          ],
        },
      ],
      takeaway: "Choose aripiprazole when weight, diabetes, prolactin, or sedation are the enemy; accept akathisia risk and manage it actively. Risperidone when potency and prolactin tolerance fit; olanzapine when metabolic risk is acceptable but robustness is needed; quetiapine when depression or anxiety dominates; clozapine when nothing else has worked.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Receptor occupancy achieved",
      description: "High D2 occupancy within hours of the first dose; acute agitation (IM) can settle within 30 minutes to 1 hour.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Activation window",
      description: "Insomnia, nausea, and especially akathisia typically appear here — the make-or-break week for adherence.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–2",
      title: "Early antipsychotic effect",
      description: "Agitation, hostility, and sleep begin improving in schizophrenia; formal thought disorder takes longer.",
      phase: "onset",
    },
    {
      id: "t4",
      time: "Weeks 2–4",
      title: "Core symptom response",
      description: "Positive symptoms of schizophrenia and manic symptoms show measurable improvement; assess with PANSS/YMRS.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 4–6",
      title: "Full oral-dose response",
      description: "Adequate trial at target dose; persisting symptoms at 4–6 weeks prompt dose optimisation, adherence review, or drug change.",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Months 3+",
      title: "Maintenance and monitoring",
      description: "Long-term phase: metabolic monitoring continues quarterly; AIMS at least annually; LAI conversion if adherence is fragile.",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How is aripiprazole different from other antipsychotics?",
      answer: "It is a partial agonist at dopamine receptors — it modulates dopamine rather than simply blocking it. In practice this means less weight gain, less prolactin elevation, and less sedation than most alternatives, at the price of more akathisia and activation.",
    },
    {
      question: "Why does aripiprazole make some people feel restless?",
      answer: "That is akathisia — an inner restlessness from partial dopamine agonism in certain circuits. It is common, dose-related, and treatable: dose reduction, propranolol, or a short benzodiazepine course usually settle it. Report it early rather than stopping the medicine.",
    },
    {
      question: "Can it be used with an antidepressant?",
      answer: "Yes — low-dose aripiprazole (2–10 mg/day) is FDA-approved specifically as an add-on when an SSRI or SNRI has produced only a partial response in major depression.",
    },
    {
      question: "What are the warning signs I should never ignore?",
      answer: "Uncontrollable urges (gambling, spending, sex, eating), muscle rigidity with fever, and — if you are pregnant or planning pregnancy — any change in your treatment plan. All warrant an urgent call.",
    },
    {
      question: "Is the monthly injection better than tablets?",
      answer: "Same medicine, different delivery. The injection guarantees steady levels and removes daily adherence pressure — ideal when tablets have been missed or relapses have followed. It cannot be removed once given, so side effects persist longer.",
    },
    {
      question: "Does aripiprazole cause weight gain?",
      answer: "Less than most atypicals — usually in the 'reported but not expected' category, and clearly less than olanzapine or quetiapine. Weight, glucose, and lipids are still monitored because a minority of patients do gain.",
    },
    {
      question: "Can I drink alcohol while taking it?",
      answer: "Not recommended — additive sedation, dizziness, and impaired judgement. Occasional small amounts may be tolerated, but discuss with your prescriber.",
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
        section: "6th ed. (2017), aripiprazole monograph, p. 9",
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
        source: "FDA Prescribing Information for Abilify (Aripiprazole)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for aripiprazole — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Aripiprazole",
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
      name: "Major depressive disorder — adjunctive",
      relationship: "primary",
    },
    {
      name: "Irritability associated with autistic disorder",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Aripiprazole",
      type: "drug",
      href: "/drugs/aripiprazole",
      note: "The drug you're reading about",
    },
    {
      label: "Dopamine Stabiliser",
      type: "class",
      href: "#mechanism",
      note: "Dopamine-Serotonin Stabiliser (Atypical Antipsychotic)",
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
      label: "D2/D3 receptor (partial agonist); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
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
      label: "Neuroleptic malignant syndrome (NMS)",
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
      label: "Akathisia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Aripiprazole",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "A dopamine system stabiliser — the 'thermostat' antipsychotic that tunes dopamine up where it is too low and down where it is too high.",
    summary: "Aripiprazole is a prescription medicine used to treat schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Aripiprazole helps restore the balance of two natural brain chemicals — dopamine and serotonin. Unlike older antipsychotics that simply block dopamine, it works like a thermostat: it turns dopamine activity down in the circuits that are too active (causing hallucinations or paranoia) and supports it in circuits that need it. This is why it tends to cause fewer movement side effects and less weight gain than many similar medicines.",
    sideEffects: "The most common side effects are: akathisia, insomnia, nausea and vomiting, headache, activation / anxiety / restlessness, tremor. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Neuroleptic malignant syndrome (NMS) and Tardive dyskinesia. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: weight and bmi (baseline, then at 4, 8, 12 weeks and quarterly); fasting plasma glucose / hba1c (baseline, then at 12 weeks and annually); lipid profile (fasting) (baseline, then at 12 weeks and annually). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Known hypersensitivity to aripiprazole, Elderly patients with dementia-related psychosis, Strong CYP2D6 or CYP3A4 inhibitors without dose adjustment. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Strong CYP2D6 inhibitors (fluoxetine, paroxetine, quinidine), Strong CYP3A4 inhibitors (ketoconazole, clarithromycin), Carbamazepine and other strong CYP3A4 inducers, Other antipsychotics. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Attentrol",
        manufacturer: "Intas",
        strengths: "5 mg, 10 mg, 15 mg, 20 mg, 30 mg",
      },
      {
        name: "Arip MT",
        manufacturer: "Sun Pharma",
        strengths: "5 mg, 10 mg, 15 mg, 20 mg, 30 mg",
      },
      {
        name: "Apzeco",
        manufacturer: "Zydus/Hetero network generics",
        strengths: "10 mg, 15 mg, 20 mg",
      },
      {
        name: "Aripiprazole (generic)",
        manufacturer: "Multiple manufacturers incl. Jan Aushadhi",
        strengths: "5–30 mg",
      },
    ],
    typicalDoses: "Psychosis 10–15 mg once daily morning; augmentation in depression 2–5 mg once daily; mania 10–15 mg.",
    prescribingScenarios: [
      "First-episode psychosis in college students — metabolic-sparing profile suits decades of expected treatment.",
      "Bipolar maintenance with lithium or valproate co-prescription.",
      "Risperidone-induced hyperprolactinaemia — deliberate cross-switch.",
      "Aggression and irritability in autism spectrum disorder (paediatric psychiatry OPD).",
      "LAI conversion in government psychiatry institutes for relapse prevention.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Generic aripiprazole is among the cheapest atypicals in India. Cost varies by manufacturer and region; Jan Aushadhi generic makes it accessible at primary-care level.",
    monitoring: "Standard Indian practice follows international guidance: weight/BMI, fasting glucose, and lipids at baseline and periodically; AIMS where feasible in district hospitals.",
    patientCounselling: [
      "Restlessness in the first weeks is common and treatable — do not stop the medicine silently.",
      "Warn about gambling/urge problems in the patient's own language at initiation.",
      "Morning dose after breakfast for adherence and to protect sleep.",
      "Never stop suddenly, especially after an episode has settled — relapse risk is highest in the first year off treatment.",
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
    note: "Generic aripiprazole tablets are stocked in many Jan Aushadhi kendras; LAI forms are typically hospital-only.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Aripiprazole",
        slug: "aripiprazole",
        relationship: "This guide",
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
      question: "Which molecular target does Aripiprazole primarily act on?",
      options: [
        "D2/D3 receptor (partial agonist); 5-HT1A (partial agonist); 5-HT2A (antagonist)",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Aripiprazole acts primarily at D2/D3 receptor (partial agonist); 5-HT1A (partial agonist); 5-HT2A (antagonist). Aripiprazole is a partial agonist at D2/D3 and 5-HT1A receptors and an antagonist at 5-HT2A receptors — a dopamine-serotonin system stabiliser rather than a pure blocker.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Aripiprazole?",
      options: ["Akathisia", "Insomnia", "Nausea and vomiting", "Headache"],
      correctIndex: 0,
      explanation: "Akathisia — Inner restlessness and an inability to sit still — the signature adverse effect of aripiprazole, dose-related, most common in the first weeks.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Aripiprazole for schizophrenia (adults)?",
      options: ["10–15 mg/day", "30 mg/day", "10–15 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For schizophrenia (adults): start 10–15 mg once daily, target 10–15 mg/day, maximum 30 mg/day. Can start at 10 mg without titration; increase after 2 weeks if needed",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Aripiprazole in two sentences.",
      answer: "Aripiprazole is a partial agonist at D2/D3 and 5-HT1A receptors and an antagonist at 5-HT2A receptors — a dopamine-serotonin system stabiliser rather than a pure blocker. Net effect: Functional dopamine antagonist in hyperdopaminergic (mesolimbic) regions, but functionally agonist-like in hypodopaminergic (mesocortical, tuberoinfundibular) regions — antipsychotic effect with little prolactin rise or secondary negative-symptom burden.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Aripiprazole.",
      answer: "Schizophrenia, Acute manic / mixed episodes of bipolar I, Bipolar I maintenance, Major depressive disorder — adjunctive. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Aripiprazole and how you would manage it.",
      answer: "Neuroleptic malignant syndrome (NMS): Rigidity, hyperthermia, autonomic instability, elevated creatine kinase, and altered consciousness — a medical emergency reported with all antipsychotics including aripiprazole. Management: Stop the drug immediately, aggressive supportive care in ICU, consider dantrolene or bromocriptine.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Aripiprazole require?",
      answer: "Weight and BMI (Baseline, then at 4, 8, 12 weeks and quarterly); Fasting plasma glucose / HbA1c (Baseline, then at 12 weeks and annually); Lipid profile (fasting) (Baseline, then at 12 weeks and annually); Blood pressure (orthostatic) (Baseline and after dose changes)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Aripiprazole that separates safe prescribers from unsafe ones.",
      answer: "Dopamine thermostat: antagonist where DA is high, agonist where DA is low — one concept explains the whole drug.",
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
      checkpoint: "You now know what Aripiprazole is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Aripiprazole works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Aripiprazole safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Aripiprazole.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Aripiprazole with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Aripiprazole.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Acute agitation (intramuscular): calming within 30–60 minutes.",
      "Schizophrenia: some improvement within days; full effect typically 1–3 weeks.",
      "Bipolar mania: 3–5 days for early anti-manic effect; full effect 2–4 weeks.",
      "Augmentation in depression: benefit often detectable within 1–2 weeks.",
    ],
    ifItWorks: [
      "Continue at the same dose; do not escalate needlessly once the target dose is reached.",
      "Continue for the guideline duration — in schizophrenia, indefinite maintenance after the second episode (and most experts advise it after the first).",
      "Consider LAI conversion if adherence is fragile or the patient prefers it.",
      "Maintain psychosocial rehabilitation — medication alone does not restore function.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Aripiprazole (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Benzodiazepine short-term for breakthrough agitation or anxiety.",
      "Valproate or lithium in mania when aripiprazole alone is insufficient.",
      "In treatment-resistant schizophrenia, clozapine is the evidence-based next step, not combination antipsychotics.",
      "Antidepressant continuation when treating comorbid depression — aripiprazole may be added to, not substituted for, the SSRI.",
    ],
    testsBeforeStarting: [
      "Baseline weight/BMI, waist circumference, fasting glucose or HbA1c, fasting lipids, blood pressure.",
      "Consider ECG if personal or family cardiac history or concurrent QT-prolonging drugs (aripiprazole itself is low-risk).",
      "Baseline AIMS (abnormal involuntary movements scale) examination.",
      "Pregnancy test in women of childbearing potential when clinically indicated.",
    ],
    sideEffectLogic: [
      "Adverse effects arise from the same partial agonism that produces benefit: akathisia and activation from mesolimbic/mesocortical partial agonism in susceptible patients, nausea from CTZ effects, insomnia from mild activation, and rare impulse-control phenomena from amplified reward signalling.",
    ],
    sideEffectManagement: [
      "Wait: nausea and insomnia often settle in 1–2 weeks.",
      "Reduce the dose — akathisia and activation are dose-related.",
      "Treat akathisia specifically: propranolol 10–30 mg three times daily or a benzodiazepine.",
      "Switch only when dose adjustment and targeted treatment fail.",
    ],
    sideEffectRescue: [
      "Propranolol or a benzodiazepine to 'rescue' akathisia without abandoning the drug.",
      "Morning dosing for insomnia; short-term hypnotic bridging.",
      "Metformin early for emerging weight gain (evidence-based and commonly used in Indian practice).",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "Low; can be activating — insomnia is more common than somnolence.",
    dosing: [
      {
        indication: "Schizophrenia (adults)",
        starting: "10–15 mg once daily",
        titration: "Can start at 10 mg without titration; increase after 2 weeks if needed",
        target: "10–15 mg/day",
        max: "30 mg/day",
        notes: [
          "No titration required — unlike quetiapine or clozapine",
          "Response should be assessed at 2–4 weeks before escalating",
        ],
      },
      {
        indication: "Schizophrenia (adolescents 13–17)",
        starting: "2 mg once daily",
        titration: "Increase to 10 mg over 1–2 weeks as tolerated",
        target: "10 mg/day",
        max: "30 mg/day",
        notes: [
          "Adolescents tolerate and respond at lower doses on average",
        ],
      },
      {
        indication: "Acute mania / mixed episodes",
        starting: "10–15 mg once daily",
        titration: "Titrate quickly — mania is an emergency",
        target: "10–15 mg/day",
        max: "30 mg/day",
        notes: [
          "Adjunct to lithium or valproate is equally effective",
          "Combine with a benzodiazepine for acute agitation",
        ],
      },
      {
        indication: "Bipolar maintenance",
        starting: "10–20 mg once daily",
        titration: "Continue the dose that resolved the acute episode",
        target: "15–20 mg/day",
        max: "30 mg/day",
        notes: [
          "Often combined with lithium or valproate",
        ],
      },
      {
        indication: "Adjunctive treatment of MDD",
        starting: "2–5 mg once daily",
        titration: "Increase to 5–10 mg after 1 week",
        target: "5–10 mg/day",
        max: "15 mg/day",
        notes: [
          "Start low — akathisia and nausea are the reasons patients quit augmentation",
          "2–10 mg is often sufficient",
        ],
      },
      {
        indication: "Irritability in autistic disorder",
        starting: "2–5 mg once daily",
        titration: "Titrate weekly by 5 mg as tolerated",
        target: "5–10 mg/day",
        max: "15 mg/day",
        notes: [
          "Monitor weight and metabolic parameters closely in children",
        ],
      },
      {
        indication: "Tourette's disorder",
        starting: "2 mg once daily",
        titration: "Increase weekly as tolerated",
        target: "5–10 mg/day",
        max: "20 mg/day",
        notes: [
          "Children may be highly sensitive — go slow",
        ],
      },
      {
        indication: "LAI — Abilify Maintena",
        starting: "400 mg intramuscular once monthly",
        titration: "Establish oral tolerability (10–30 mg × 14 days) first; give first injection with next oral dose",
        target: "400 mg/4 weeks",
        max: "400 mg/4 weeks",
        notes: [
          "Reduce to 300 mg for CYP2D6 poor metabolisers or dual strong inhibitors",
          "Missed doses: injection window up to 14 days (see label)",
        ],
      },
      {
        indication: "LAI — Aristada",
        starting: "441 mg intramuscular",
        titration: "21-day oral overlap (30 mg) or 7-day overlap (30 mg) depending on regimen",
        target: "441–882 mg every 4 weeks (or 882 mg every 8 weeks after ≥ 882 mg/4 weeks)",
        max: "882 mg/4 weeks",
        notes: [
          "Alternative initiation regimens exist — follow the label",
        ],
      },
    ],
    dosageForms: [
      "Tablets 2 mg, 5 mg, 10 mg, 15 mg, 20 mg, 30 mg",
      "Orally disintegrating tablets 10 mg, 15 mg",
      "Oral solution 1 mg/mL",
      "Intramuscular injection 9.75 mg/1.3 mL (acute agitation)",
      "LAI: Abilify Maintena 400 mg vial; Aristada 441, 662, 882 mg prefilled syringes",
    ],
    dosingTips: [
      "Morning dosing suits most patients given the activating profile.",
      "Akathisia is not a reason to abandon ship — propranolol plus patience carries most patients through.",
      "In augmentation, less is more: many patients do best at 2–5 mg.",
      "No dietary restrictions; can be taken with or without food.",
      "When switching from another antipsychotic, cross-titration (overlap 1–2 weeks) avoids withdrawal and rebound.",
      "Inexpensive generics make aripiprazole one of the most cost-effective atypicals in India — and Jan Aushadhi supplies the generic.",
    ],
    overdose: [
      "Experience is limited; expected effects: somnolence, vomiting, akathisia.",
      "No specific antidote; management is supportive with airway protection and cardiac monitoring.",
      "ECG monitoring recommended; QTC changes are minimal but co-ingestants matter.",
    ],
    longTermUse: "Well studied for years of maintenance; key long-term risks are tardive dyskinesia (lower than with high-dose typicals but real) and impulse-control disorders — ask at every review.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Taper over 1–2 weeks where possible.",
      "Abrupt cessation risks relapse — in schizophrenia, usually gradual, supervised reduction only with a clear rationale.",
      "For LAI, note that effects persist for months after the last injection — there is no 'stopping quickly'.",
      "Rebound insomnia and agitation can occur for a few days after stopping.",
    ],
    pharmacokinetics: [
      "Half-life 75 hours (parent), 94 hours (dehydro-aripiprazole).",
      "Steady state in about 2 weeks.",
      "Metabolism: CYP2D6 and CYP3A4 (both must be affected to double exposure).",
      "Food does not affect absorption.",
    ],
    doNotUse: [
      "Known hypersensitivity to aripiprazole.",
      "Elderly patients with dementia-related psychosis (boxed warning — increased mortality).",
      "As a monotherapy for bipolar depression (weak evidence — use as adjunct or prefer approved agents).",
    ],
    specialPopulations: [
      {
        population: "Renal impairment",
        guidance: [
          "No dose adjustment required at any level of renal impairment.",
        ],
      },
      {
        population: "Hepatic impairment",
        guidance: [
          "No formal adjustment for mild-to-moderate impairment.",
          "Use cautiously in severe impairment; extensive hepatic metabolism.",
        ],
      },
      {
        population: "Cardiac impairment",
        guidance: [
          "Limited data; aripiprazole has minimal QT effect.",
          "Use cautiously with other QT-prolonging agents.",
        ],
      },
      {
        population: "Elderly",
        guidance: [
          "Start at the lower end of the range.",
          "Dementia-related psychosis: do not use (boxed warning).",
          "Watch for orthostasis and falls.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Approved 13+ (schizophrenia), 10+ (bipolar mania), 6–17 (autism irritability), 6–18 (Tourette's).",
          "Start low, titrate slowly — children are more sensitive to adverse effects.",
          "Metabolic monitoring is critical in paediatric use.",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "Registry data show no major teratogenic signal, but data are limited.",
          "Relapse prevention usually outweighs fetal risk in serious mental illness — do not stop abruptly.",
          "Third-trimester exposure: monitor the neonate for EPS and withdrawal.",
          "Breastfeeding: small amounts in milk; usually considered compatible with infant monitoring.",
        ],
      },
      {
        population: "Comorbid substance use",
        guidance: [
          "No significant interaction with alcohol beyond additive sedation.",
          "Consider LAI early when substance use threatens adherence.",
        ],
      },
    ],
    potentialAdvantages: [
      "Patients concerned about weight gain, or who are already obese/overweight.",
      "Patients with diabetes or dyslipidaemia.",
      "Patients who wish to avoid sedation — or need an alerting profile.",
      "Patients with risperidone-induced hyperprolactinaemia (aripiprazole can normalise prolactin).",
      "No titration required — can start at effective dose.",
      "Multiple LAI options for maintenance.",
      "FDA-approved adjunct for depression — broadest indication set of any atypical.",
    ],
    potentialDisadvantages: [
      "Akathisia and activation — the most common reasons patients stop.",
      "Poor choice when sedation is the goal.",
      "Insomnia and nausea at initiation.",
      "Impulse-control disorder risk requires specific counselling.",
      "Weak monotherapy evidence in bipolar depression.",
    ],
    primaryTargetSymptoms: [
      "Positive symptoms of psychosis (hallucinations, delusions, thought disorder)",
      "Manic symptoms (hyperactivity, grandiosity, irritability)",
      "Agitation and aggression (including autism-related irritability)",
      "Tics (Tourette's disorder)",
      "Incomplete antidepressant response (augmentation)",
    ],
    pearls: [
      "Dopamine thermostat: antagonist where DA is high, agonist where DA is low — one concept explains the whole drug.",
      "Akathisia is the signature: ask at every early visit — patients call it 'anxiety' or 'restlessness'.",
      "2–10 mg for augmentation; 10–15 mg for psychosis; 30 mg is rarely better than 20 mg.",
      "Can normalise prolactin — a deliberate switch strategy from risperidone.",
      "Activating profile: dose in the morning; expect insomnia in the first week.",
      "Cross-titrate when switching from other antipsychotics — avoid abrupt switches.",
      "LAI when adherence is fragile — and remember the long half-life means problems persist after the last dose.",
      "Warn about gambling and impulse-control disorders at initiation — one sentence can save a life's savings.",
      "In first-episode psychosis, adverse-effect sensitivity is extreme: start at 5–10 mg and let the patient set the pace.",
      "If aripiprazole fails at adequate dose, the next question is clozapine, not another me-too atypical.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
