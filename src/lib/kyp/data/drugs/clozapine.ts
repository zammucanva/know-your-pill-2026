import type { Drug } from "../types";

/**
 * Clozapine — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), clozapine monograph (book p. 29)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const clozapine: Drug = {
  /* ---- Identity ---- */
  slug: "clozapine",
  genericName: "Clozapine",
  brandNames: ["Clozaril", "FazaClo", "Versacloz", "Clopine"],
  drugClass: "atypical-antipsychotic",
  drugClassLabel: "Atypical Antipsychotic",
  drugClassFullName: "Atypical Antipsychotic (Serotonin-Dopamine Antagonist)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antipsychotics", "Atypical Antipsychotics", "Clozapine"],
  /* ---- Hero / summary ---- */
  tagline: "The last-line lifesaver — the only agent proven for treatment-resistant schizophrenia and suicidality, governed by mandatory blood monitoring.",
  summary: "Clozapine is the benchmark agent for treatment-resistant schizophrenia: it improves roughly a third of patients who have failed two adequate antipsychotic trials, it is the only drug with proven anti-suicide efficacy in schizophrenia, and it produces virtually no EPS or tardive dyskinesia — it can even treat dyskinesias caused by other antipsychotics. This unique value is priced with a uniquely regulated burden: mandatory absolute neutrophil count (ANC) monitoring for agranulocytosis, and vigilance for myocarditis, seizures, severe constipation, and the heaviest metabolic profile in the class.",
  estimatedReadTime: "20 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Clozapine — from its molecular target (D2 (loose/transient antagonist); 5-HT2A (high affinity); D4; M1/M4; H1; alpha-1; NMDA/glutamate system) to clinical effect.",
    "List the FDA-approved and off-label uses of Clozapine.",
    "Predict the common and serious side effects of Clozapine from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Clozapine.",
    "Compare Clozapine with other atypical antipsychotics and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Clozapine blocks a uniquely wide receptor spectrum — loose D2 binding plus 5-HT2A, D4, M1/M4, H1, and alpha-1 — with glutamatergic (NMDA-enhancing) actions that may underpin its efficacy in treatment-resistant cases.",
    molecularTarget: "D2 (loose/transient antagonist); 5-HT2A (high affinity); D4; M1/M4; H1; alpha-1; NMDA/glutamate system",
    effect: "Antipsychotic efficacy in treatment-resistant patients, near-zero EPS/TD and no prolactin rise, plus anti-aggression, anti-suicide, and (uniquely among antipsychotics) some restorative effect on dyskinesias.",
    steps: [
      "Loose, low-affinity D2 binding — quickly disengaging occupancy treats psychosis without the sustained blockade that causes EPS and prolactin rise.",
      "Strong 5-HT2A antagonism contributes to efficacy and further protects the motor system.",
      "Muscarinic M4 (and possibly M1) effects and glutamate/NMDA modulation are unique to clozapine's profile and are candidates for its treatment-resistant efficacy.",
      "H1 and alpha-1 binding produce sedation and orthostasis; M- and 5-HT-mediated gut slowing plus sympathetic effects underlie the severe constipation and sialorrhoea.",
      "The overall result is pharmacology no other antipsychotic replicates: efficacy where everything else failed, with the motor system untouched.",
    ],
    pharmacokinetics: "Variable absorption (first-pass); peak 1–4 hours. Extensive hepatic metabolism. Plasma level monitoring is clinically meaningful: response is associated with levels above roughly 350 ng/mL.",
    halfLife: "About 12 hours (range 6–26) — twice-daily dosing is standard; smoking status and caffeine shift levels substantially.",
    activeMetabolite: "Norclozapine (N-desmethylclozapine) — pharmacologically active with a distinct profile (partial agonist properties); contributes to effect.",
    metabolism: "Hepatic CYP1A2 (major); CYP3A4 and CYP2D6 minor; smoking induces 1A2 sharply.",
    excretion: "Renal excretion of metabolites.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Clozapine",
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
  neurotransmitters: ["Dopamine (DA)", "Serotonin (5-HT)", "Acetylcholine (ACh)", "Histamine", "Glutamate"],
  receptors: ["D2 (loose antagonist)", "D4 (antagonist)", "5-HT2A (high-affinity antagonist)", "M1/M4 (antagonist/partial agonism)", "H1 (potent antagonist)", "Alpha-1 (antagonist)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens", "hippocampus"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal", "tuberoinfundibular"],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Treatment-resistant schizophrenia",
      status: "fda-approved",
      description: "For patients who have failed two adequate antipsychotic trials — the defining indication; response rates of ~30–60% where other drugs have failed.",
    },
    {
      name: "Recurrent suicidal behaviour in schizophrenia/schizoaffective disorder",
      status: "fda-approved",
      description: "The only medication with proven reduction of suicidal behaviour in schizophrenia (InterSePT trial).",
    },
    {
      name: "Psychosis in Parkinson's disease",
      status: "off-label",
      description: "The gold standard where quetiapine fails — motor-safe dopaminergic-sparing profile; requires the same blood monitoring.",
    },
    {
      name: "Severe aggression / violence in psychosis",
      status: "off-label",
      description: "Clozapine has the best anti-aggression evidence of any antipsychotic.",
    },
    {
      name: "Tardive dyskinesia caused by other antipsychotics",
      status: "off-label",
      description: "The only antipsychotic that does not worsen and often improves tardive dyskinesia.",
    },
    {
      name: "Bipolar disorder (treatment-resistant mania/mixed states)",
      status: "off-label",
      description: "Reserved for severe refractory illness.",
    },
    {
      name: "Schizophrenia with suicide risk factors even without documented TRS",
      status: "guideline",
      description: "Guideline-supported consideration given its anti-suicide signal.",
    },
  ],
  contraindications: [
    {
      name: "Known haematological toxicity / prior clozapine-induced agranulocytosis or neutropenia",
      severity: "absolute",
      rationale: "Never rechallenge after clozapine-induced neutropenia with ANC < 1000 — the definitive contraindication.",
    },
    {
      name: "Inability to comply with ANC monitoring (no REMS access)",
      severity: "absolute",
      rationale: "Monitoring is a condition of the prescription — without it, agranulocytosis mortality risk is unmanaged.",
    },
    {
      name: "Uncontrolled epilepsy without co-management",
      severity: "relative",
      rationale: "Clozapine is pro-convulsant dose-dependently; seizures require active management rather than automatic discontinuation.",
    },
    {
      name: "Severe constipation / paralytic ileus history",
      severity: "relative",
      rationale: "Clozapine's gut effects can be lethal — bowel regimen is mandatory.",
    },
    {
      name: "Myocarditis or severe cardiomyopathy history from clozapine",
      severity: "absolute",
      rationale: "Never rechallenge after clozapine-induced myocarditis.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Agranulocytosis — mandatory ANC monitoring",
      text: "Clozapine has caused agranulocytosis (ANC < 500/µL) in approximately 0.8% of patients in registration studies and has caused fatal infections and death. Prescribing requires ANC monitoring before treatment and regularly during treatment: weekly for 6 months, every 2 weeks for 6 months, then monthly — indefinitely. Patients must be enrolled in a monitoring programme. Educate patients to report fever, sore throat, or any infection immediately.",
    },
    {
      title: "Seizures, myocarditis, hypotension, and other life-threatening risks",
      text: "Dose-related seizures (use lowest effective dose; consider anticonvulsant prophylaxis); myocarditis and cardiomyopathy (highest incidence in the first 4–8 weeks — monitor for fever, tachycardia, chest pain, dyspnoea); severe hypotension and respiratory depression/cardiac arrest with rapid titration; severe constipation progressing to bowel obstruction; increased mortality in elderly patients with dementia-related psychosis.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation and drowsiness",
      frequency: "very-common",
      severity: "moderate",
      description: "H1-mediated; strongest in the first weeks and with dose increases — the dose-limiting daytime effect for many patients.",
      management: "Dose at night; divide larger daytime doses; tolerance develops.",
    },
    {
      name: "Hypersalivation / sialorrhoea",
      frequency: "very-common",
      severity: "moderate",
      description: "Drenching night-time drooling — the socially most distressing effect; paradoxical given anticholinergic profile (likely adrenergic/pro-cholinergic mechanisms).",
      management: "Atropine eye drops sublingually (off-label), glycopyrrolate, or low-dose amisulpride/aipiprazole augmentation; towel the pillow — practical advice matters.",
    },
    {
      name: "Weight gain and obesity",
      frequency: "very-common",
      severity: "severe",
      description: "Highest tier in the class; frequently progressive — the metabolic burden of clozapine.",
      management: "Early lifestyle intervention; metformin (strong evidence); monitor glucose/lipids closely.",
    },
    {
      name: "Constipation",
      frequency: "very-common",
      severity: "severe",
      description: "Potentially life-threatening — clozapine's gut effects (anticholinergic + sympathetic) can progress to ileus and bowel necrosis; deaths reported.",
      management: "Stool diary; macrogol regularly; treat constipation as an emergency when severe; avoid other constipating drugs.",
    },
    {
      name: "Tachycardia",
      frequency: "common",
      severity: "moderate",
      description: "Reflex and anticholinergic; also an early myocarditis red flag when clustered with fever.",
      management: "ECG if persistent; monitor within the first 8 weeks context.",
    },
    {
      name: "Orthostatic hypotension",
      frequency: "common",
      severity: "moderate",
      description: "Alpha-1 mediated; strongest in titration and in the elderly.",
      management: "Slow titration; rise slowly; review antihypertensives.",
    },
    {
      name: "Fever in the first weeks (benign transient)",
      frequency: "common",
      severity: "moderate",
      description: "Occurs in up to a quarter of patients; must always trigger ANC + myocarditis workup rather than being assumed benign.",
      management: "Check ANC, CRP, troponin when fever appears in weeks 1–8.",
    },
    {
      name: "Nocturnal enuresis",
      frequency: "common",
      severity: "mild",
      description: "Distressing and under-discussed — common with clozapine.",
      management: "Timing of fluids; desmopressin rarely; reduce evening dose if feasible.",
    },
    {
      name: "Dry mouth and blurred vision",
      frequency: "common",
      severity: "mild",
      description: "Anticholinergic-type effects.",
      management: "Oral hygiene, sugar-free gum.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Agranulocytosis / severe neutropenia",
      frequency: "rare",
      severity: "life-threatening",
      description: "Incidence ~0.8% (0.3% severe); highest risk in the first 6 months; presents as fever, sore throat, mouth ulcers — the reason for mandatory ANC monitoring.",
      management: "Stop immediately; haematology referral; granulocyte colony-stimulating factor in severe cases; never rechallenge.",
    },
    {
      name: "Myocarditis",
      frequency: "rare",
      severity: "life-threatening",
      description: "Incidence ~0.5–1%; ~80% of cases in the first 8 weeks; presents with fever, tachycardia, chest pain, dyspnoea, raised troponin/CRP — fatal in up to 20% if the drug is continued.",
      management: "Stop immediately; cardiology workup; never rechallenge. Fever + tachycardia in week 1–8 = troponin and CRP today.",
    },
    {
      name: "Seizures",
      frequency: "uncommon",
      severity: "severe",
      description: "Dose-related: < 300 mg/day ~1–2%, > 600 mg ~5%+; myoclonus may precede.",
      management: "Slow titration; valproate prophylaxis at higher doses; dose reduction; EEG if events.",
    },
    {
      name: "Paralytic ileus / bowel obstruction",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Clozapine-induced gastrointestinal hypomotility can progress from constipation to ileus, necrosis, and death — the most underestimated lethal risk.",
      management: "Aggressive bowel regimen; any severe abdominal pain/distension = emergency evaluation.",
    },
    {
      name: "Diabetic ketoacidosis / severe hyperglycaemia",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Can occur without prior diabetes; clozapine has one of the strongest hyperglycaemia signals.",
      management: "Emergency medical management; stop drug; re-evaluate treatment.",
    },
    {
      name: "Neuroleptic malignant syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Atypical presentation with clozapine — often less rigidity; fever + autonomic instability still the core.",
      management: "Stop drug; ICU care; dantrolene/bromocriptine.",
    },
    {
      name: "Aspiration pneumonia",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "Sedation + sialorrhoea + dysphagia combine — a leading cause of clozapine-related death in the elderly.",
      management: "Night positioning; treat sialorrhoea; caution with sedative co-prescription.",
    },
    {
      name: "Venous thromboembolism",
      frequency: "uncommon",
      severity: "severe",
      description: "Modestly increased risk with clozapine (class + specific signal).",
      management: "Mobility; consider VTE prophylaxis in immobilised inpatients.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "ANC (absolute neutrophil count)",
      frequency: "Weekly × 26 weeks, then every 2 weeks × 26 weeks, then monthly — indefinitely",
      rationale: "Agranulocytosis surveillance is the non-negotiable condition of prescribing (REMS).",
    },
    {
      parameter: "Fever / infection symptoms",
      frequency: "Immediate ANC check whenever fever, sore throat, or flu-like illness occurs",
      rationale: "The clinical face of both agranulocytosis and myocarditis.",
    },
    {
      parameter: "Troponin and CRP",
      frequency: "With any fever, tachycardia, chest pain, or dyspnoea in the first 8 weeks",
      rationale: "Myocarditis window — early detection saves lives.",
    },
    {
      parameter: "Weight and BMI",
      frequency: "Baseline, 4, 8, 12 weeks, then quarterly",
      rationale: "Highest metabolic risk in class.",
    },
    {
      parameter: "Fasting glucose / HbA1c",
      frequency: "Baseline, 12 weeks, then every 6 months",
      rationale: "DKA can arrive unannounced.",
    },
    {
      parameter: "Lipid profile",
      frequency: "Baseline, 12 weeks, then annually",
      rationale: "Class metabolic risk.",
    },
    {
      parameter: "Heart rate and blood pressure (orthostatic)",
      frequency: "Baseline, during titration",
      rationale: "Tachycardia is common; interpret within the myocarditis context.",
    },
    {
      parameter: "Constipation review",
      frequency: "Every visit — ask specifically",
      rationale: "The lethal bowel risk hides behind 'a bit constipated'.",
    },
    {
      parameter: "Seizure history and myoclonus check",
      frequency: "Baseline and during dose escalation",
      rationale: "Dose-related seizure threshold lowering.",
    },
    {
      parameter: "Plasma clozapine level",
      frequency: "After steady state; when response is inadequate; after smoking/medication changes",
      rationale: "Levels > 350 ng/mL associated with response; guides dose and adherence.",
    },
  ],
  interactions: [
    {
      drug: "Smoking (CYP1A2 induction)",
      severity: "major",
      mechanism: "Quitting smoking can raise clozapine levels by 50–100% — a stealth overdose in a stable patient.",
      action: "Re-check levels and adverse effects whenever smoking status changes; anticipate dose reduction.",
    },
    {
      drug: "Caffeine",
      severity: "moderate",
      mechanism: "High caffeine intake raises levels; abrupt cessation lowers them — an underappreciated moving part.",
      action: "Keep caffeine intake stable; consider level checks with big changes.",
    },
    {
      drug: "Fluvoxamine (strong 1A2 inhibitor)",
      severity: "major",
      mechanism: "Can raise levels several-fold — sometimes used deliberately at low dose as augmentation, otherwise a hazard.",
      action: "If deliberate co-prescription, use fraction of the usual clozapine dose with level monitoring.",
    },
    {
      drug: "Ciprofloxacin and other 1A2 inhibitors",
      severity: "major",
      mechanism: "Raise levels; common in practice for intercurrent infections.",
      action: "Prefer non-1A2-inhibiting antibiotics; check levels if unavoidable.",
    },
    {
      drug: "Carbamazepine",
      severity: "major",
      mechanism: "Induces 1A2 AND adds bone-marrow suppression risk — doubly wrong with clozapine.",
      action: "Avoid; use valproate or lamotrigine for seizure prophylaxis instead.",
    },
    {
      drug: "Valproate",
      severity: "moderate",
      mechanism: "Used for seizure prophylaxis; may lower clozapine levels slightly; watch for added sedation and hepatotoxicity.",
      action: "Monitor levels and LFTs; standard combination in practice.",
    },
    {
      drug: "Benzodiazepines",
      severity: "major",
      mechanism: "Additive sedation and respiratory depression — rare deaths reported, especially early in treatment.",
      action: "Minimise; avoid parenteral combinations.",
    },
    {
      drug: "Constipating drugs (opioids, anticholinergics, some antidepressants)",
      severity: "major",
      mechanism: "Compound the ileus risk — the additive that turns constipation lethal.",
      action: "Bowel prophylaxis; avoid opioids where possible.",
    },
    {
      drug: "Lithium",
      severity: "moderate",
      mechanism: "Both affect the CNS and can interact; combination is used in practice but adds neurotoxicity monitoring.",
      action: "Monitor for confusion, ataxia; check lithium levels.",
    },
  ],
  pregnancy: {
    legacyCategory: "B",
    evidenceBasedSummary: "Clozapine exposure has not shown a clear pattern of major malformations in registry data, but experience is limited; neonatal sedation, floppy infant syndrome, and agranulocytosis in the newborn have been reported.",
    indianPracticeNote: "Indian practice reserves clozapine in pregnancy for the most treatment-resistant cases with MDT decision and documented counselling.",
    summary: "No convincing teratogenic signal, but data are limited and neonatal neutropenia/sedation is documented. For a woman with treatment-resistant schizophrenia who is stable on clozapine, discontinuation carries a very high relapse risk — most guidance supports continuation with obstetric co-management, neonatal ANC monitoring at birth, and shared decision-making documented before conception where possible.",
    lactation: "Clozapine passes into breast milk in meaningful amounts; infant sedation and neutropenia are documented concerns. Most guidelines discourage breastfeeding on clozapine — formula feeding with monitoring is usually advised.",
  },
  renalAdjustment: "No dose adjustment for renal impairment per se; standard titration cautions apply.",
  hepaticAdjustment: "Hepatic metabolism is extensive — monitor transaminases at baseline and periodically; rare hepatotoxicity.",
  /* ---- Education ---- */
  patientExplanation: "Clozapine is the strongest medicine for schizophrenia that exists — reserved for cases where at least two other antipsychotics have failed. It works differently from all others and can succeed where they could not, including reducing suicidal thoughts. Because it can rarely stop the immune system's white cells from forming, you will have a small blood test every week at first, then monthly forever — this is what keeps the medicine safe. Report any fever, sore throat, or infection immediately, and treat constipation seriously on this medicine.",
  patientEducationPoints: [
    "The regular blood test is part of the treatment — never skip it; it protects you from a rare but serious blood problem.",
    "Fever, sore throat, mouth ulcers, or any infection: blood test the same day — no waiting to see.",
    "Chest pain, breathlessness, or a racing heart with fever in the first two months: emergency assessment.",
    "Constipation must be prevented, not endured — take the bowel medication prescribed and report any severe stomach pain or vomiting immediately.",
    "If you smoke, tell your doctor BEFORE you try to quit — quitting changes the level of this medicine in your blood substantially.",
    "Drooling at night is common and treatable — mention it rather than hiding it.",
    "Expect the first weeks to be very sedating; do not drive until the dose settles.",
    "This medicine often helps when nothing else has — stay with it through the difficult first months with your team's support.",
  ],
  clinicalPearls: [
    "Clozapine is the only drug with proven efficacy for treatment-resistant schizophrenia AND the only one with proven anti-suicide effect — two monopoly indications.",
    "The first 8 weeks are the danger zone: agranulocytosis risk peaks (weeks 4–18) and ~80% of myocarditis occurs here — fever gets a full workup, not a phone diagnosis.",
    "Constipation kills clozapine patients — prescribe a bowel regimen with the clozapine, ask at every visit, and treat obstruction as an emergency.",
    "Smoking cessation can double clozapine levels: a stable patient who quits smoking is a covert overdose waiting to happen — re-check levels whenever tobacco changes.",
    "Levels matter: aim > 350 ng/mL before declaring failure; norclozapine/clozapine ratio hints at adherence and metabolism.",
    "Never rechallenge after clozapine-induced agranulocytosis or myocarditis — the definitive no-go decisions in psychopharmacology.",
    "Valproate (not carbamazepine) is the seizure prophylaxis partner at higher doses — carbamazepine is doubly contraindicated (marrow + induction).",
    "Low-dose fluvoxamine augmentation deliberately raises clozapine levels — a cost-saving, level-targeting manoeuvre in expert hands.",
    "In Parkinson's psychosis failing quetiapine, clozapine at tiny doses (6.25–50 mg) is the gold standard — the blood monitoring is still mandatory.",
    "Clozapine treats tardive dyskinesia rather than causing it — the switch TD patients have been waiting for.",
    "Sialorrhoea: the pillow towel is real medicine — and sublingual atropine or glycopyrrolate rescues the socially destroyed patient.",
    "Slow is fast: the fatal collisions (hypotension, seizures, respiratory arrest with rapid titration) all happen when we hurry.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Clozapine: Clozapine blocks a uniquely wide receptor spectrum — loose D2 binding plus 5-HT2A, D4, M1/M4, H1, and alpha-1 — with glutamatergic (NMDA-enhancing) actions that may underpin its efficacy in treatment-resistant cases.",
        "Uses of Clozapine: Treatment-resistant schizophrenia; Recurrent suicidal behaviour in schizophrenia/schizoaffective disorder; Psychosis in Parkinson's disease; Severe aggression / violence in psychosis",
        "Mechanism: loose D2 + 5-HT2A/D4 + M1/M4 + H1 + alpha-1; glutamate/NMDA-linked actions unique to clozapine.",
        "Monopoly indication #1: treatment-resistant schizophrenia (failure of 2 adequate antipsychotic trials).",
      ],
      practical: [
        "Prescribe Clozapine for treatment-resistant schizophrenia with dose, timing, and duration.",
        "Outline the monitoring plan: ANC (absolute neutrophil count) (Weekly × 26 weeks, then every 2 weeks × 26 weeks, then monthly — indefinitely); Fever / infection symptoms (Immediate ANC check whenever fever, sore throat, or flu-like illness occurs); Troponin and CRP (With any fever, tachycardia, chest pain, or dyspnoea in the first 8 weeks)",
      ],
      longAnswer: [
        "Clozapine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: loose D2 + 5-HT2A/D4 + M1/M4 + H1 + alpha-1; glutamate/NMDA-linked actions unique to clozapine.",
        "Monopoly indication #1: treatment-resistant schizophrenia (failure of 2 adequate antipsychotic trials).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: loose D2 + 5-HT2A/D4 + M1/M4 + H1 + alpha-1; glutamate/NMDA-linked actions unique to clozapine.",
        "Monopoly indication #1: treatment-resistant schizophrenia (failure of 2 adequate antipsychotic trials).",
        "Monopoly indication #2: reduction of suicidal behaviour in schizophrenia (InterSePT).",
        "Agranulocytosis ~0.8% — ANC weekly × 6 months, biweekly × 6 months, then monthly forever (REMS).",
        "Myocarditis ~0.5–1% — 80% within the first 8 weeks; fever + tachycardia = troponin/CRP urgently.",
        "Seizures are dose-related (> 600 mg ~5%); valproate prophylaxis; avoid carbamazepine (marrow risk + induction).",
      ],
      pyqConcepts: [
        "Mechanism/target of Clozapine",
        "Key adverse effect: Agranulocytosis / severe neutropenia",
        "Dosing and titration of Clozapine",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Clozapine develops agranulocytosis / severe neutropenia — next best step?",
        "When to choose Clozapine over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: D2 (loose/transient antagonist); 5-HT2A (high affinity); D4; M1/M4; H1; alpha-1; NMDA/glutamate system",
        "Most common side effects: Sedation and drowsiness, Hypersalivation / sialorrhoea, Weight gain and obesity",
        "Key contraindication: Known haematological toxicity / prior clozapine-induced agranulocytosis or neutropenia",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Clozapine has two monopolies — TRS and anti-suicide — and no competitor in either.",
        "The first 8 weeks are the danger zone: fever gets troponin/CRP, not reassurance.",
        "Prescribe the bowel regimen with the prescription — the ileus risk is the most underestimated killer.",
        "Level > 350 ng/mL before you call it failure; 6 months at adequate dose before you call it clozapine-resistant.",
      ],
    },
  },
  memoryTricks: [
    {
      title: "Clozapine's 5 killers",
      trick: "FEBCT: Fever/blood (agranulocytosis), Heart (myocarditis), Bowel (ileus), Clots (seizures/VTE), Tachycardia-hypotension (rapid titration).",
      remembers: "The life-threatening adverse effects to recite in any viva",
    },
    {
      title: "The 350 rule",
      trick: "Level above 350 ng/mL before you call clozapine a failure.",
      remembers: "The plasma level target",
    },
    {
      title: "Smoke = Speed, Stop = Soar",
      trick: "Smoking speeds clearance; stopping makes levels soar.",
      remembers: "The CYP1A2 smoking interaction",
    },
    {
      title: "Blood, Bowels, Brain",
      trick: "Monitor the blood (ANC), protect the bowels (regimen), and give the brain time (slow titration) — the three rules of safe clozapine.",
      remembers: "Clozapine stewardship in one line",
    },
  ],
  highYieldSummary: [
    "Mechanism: loose D2 + 5-HT2A/D4 + M1/M4 + H1 + alpha-1; glutamate/NMDA-linked actions unique to clozapine.",
    "Monopoly indication #1: treatment-resistant schizophrenia (failure of 2 adequate antipsychotic trials).",
    "Monopoly indication #2: reduction of suicidal behaviour in schizophrenia (InterSePT).",
    "Agranulocytosis ~0.8% — ANC weekly × 6 months, biweekly × 6 months, then monthly forever (REMS).",
    "Myocarditis ~0.5–1% — 80% within the first 8 weeks; fever + tachycardia = troponin/CRP urgently.",
    "Seizures are dose-related (> 600 mg ~5%); valproate prophylaxis; avoid carbamazepine (marrow risk + induction).",
    "Weight gain highest tier; DKA can occur de novo.",
    "CYP1A2 metabolism: smoking induces (quitting doubles levels), fluvoxamine inhibits (used deliberately as augmentation).",
    "Plasma level > 350 ng/mL associated with response.",
    "Virtually no EPS/TD/prolactin — clozapine TREATS tardive dyskinesia.",
    "Parkinson's psychosis: gold standard at micro-doses after quetiapine fails.",
    "Sialorrhoea (very common), severe constipation/ileus, nocturnal enuresis — the distinctive adverse-effect triad.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "Two failures later — the clozapine conversation done right",
      presentation: "A 29-year-old man with schizophrenia unresponsive to two adequate antipsychotic trials, started on clozapine.",
      history: "A 29-year-old man with 7 years of schizophrenia has persistent persecutory delusions and auditory hallucinations despite risperidone 6 mg × 12 weeks and olanzapine 20 mg × 10 weeks (both adherent, plasma levels adequate). Two admissions in the past year; a serious suicide attempt 8 months ago. He lives with his mother, who attends with him and asks 'what else is left'.",
      examination: "Chronic persecutory delusions and running commentary hallucinations; blunted affect; cognitive slowing. Physical exam normal; BMI 23; ANC 4200; ECG, troponin, CRP, glucose, and lipids normal at baseline.",
      diagnosis: "Treatment-resistant schizophrenia (two failed adequate antipsychotic trials), with history of suicidal behaviour.",
      rationale: "Clozapine is the evidence-based standard after two adequate failed trials — and his suicide attempt independently strengthens the indication. The conversation sets expectations honestly: titration is slow, blood monitoring is mandatory, and benefit may take months. Family involvement predicts success.",
      management: "Enrolled in ANC monitoring. Clozapine 12.5 mg at night, increased by 12.5–25 mg every 1–2 days toward 300 mg over 3–4 weeks; divided then consolidated to nightly dosing. Macrogol prescribed from day one. Written fever/constipation/chest-symptom action plan. Level checked at steady state (410 ng/mL on 400 mg). Metabolic panel and weight at 4, 8, 12 weeks.",
      outcome: "Week 2: transient fever with normal ANC, CRP, and troponin — observed, resolved. Week 3: distressing sialorrhoea managed with sublingual atropine drops. By month 3: hallucinations reduced to intermittent, delusions less preoccupying; CGI-I much improved. By month 6: no hospitalisation, part-time work trial. ANC monitoring continues monthly; weight up 4 kg with metformin started.",
      teachingPoints: [
        "Two adequate failed trials define treatment resistance — the clozapine conversation is a guideline mandate, not a last resort to postpone.",
        "The first 8 weeks carry the myocarditis risk: fever plus tachycardia is a troponin/CRP event, never a phone reassurance.",
        "Set expectations for months, not weeks — the response curve of clozapine is slow, and abandoning it early re-labels a future responder as a non-responder.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Antipsychotic comparison — where clozapine sits",
      primaryDrug: "Clozapine",
      rows: [
        {
          attribute: "Position",
          primaryValue: "Treatment-resistant schizophrenia; suicidality in schizophrenia",
          comparisons: [
            {
              drug: "Risperidone",
              value: "First-line psychosis/mania",
            },
            {
              drug: "Olanzapine",
              value: "Robust first-line; metabolic-heavy",
            },
            {
              drug: "Quetiapine",
              value: "Bipolar depression; motor-safe",
            },
            {
              drug: "Aripiprazole",
              value: "Metabolic-safe first-line/augmentation",
            },
          ],
        },
        {
          attribute: "EPS / TD",
          primaryValue: "Lowest — treats tardive dyskinesia",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Dose-dependent EPS",
            },
            {
              drug: "Olanzapine",
              value: "Low",
            },
            {
              drug: "Quetiapine",
              value: "Lowest (with clozapine)",
            },
            {
              drug: "Aripiprazole",
              value: "Low; akathisia",
            },
          ],
        },
        {
          attribute: "Prolactin",
          primaryValue: "No rise",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Highest",
            },
            {
              drug: "Olanzapine",
              value: "Minimal",
            },
            {
              drug: "Quetiapine",
              value: "No rise",
            },
            {
              drug: "Aripiprazole",
              value: "Usually lowers",
            },
          ],
        },
        {
          attribute: "Weight / metabolic",
          primaryValue: "Highest tier",
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
              drug: "Quetiapine",
              value: "Moderate–high",
            },
            {
              drug: "Aripiprazole",
              value: "Lowest tier",
            },
          ],
        },
        {
          attribute: "Unique risks",
          primaryValue: "Agranulocytosis (REMS), myocarditis, seizures, ileus",
          comparisons: [
            {
              drug: "Risperidone",
              value: "Prolactin, EPS, orthostasis",
            },
            {
              drug: "Olanzapine",
              value: "Metabolic, DKA",
            },
            {
              drug: "Quetiapine",
              value: "Sedation, orthostasis, lipids",
            },
            {
              drug: "Aripiprazole",
              value: "Akathisia, impulse control",
            },
          ],
        },
      ],
      takeaway: "Clozapine is not another option in the sequence — it is a different category: the treatment of resistance itself, with an anti-suicide monopoly. The monitoring burden is the toll for efficacy no other drug provides; the clinical error is not starting it, but starting it late.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Days 1–7 (12.5–25 mg)",
      title: "The cautious start",
      description: "Sedation, orthostasis, and tachycardia appear first; ANC already counting; dose moves in 12.5–25 mg steps.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Weeks 1–4",
      title: "Titration zone",
      description: "Fever may appear (often benign but always investigated); sialorrhoea and constipation establish; bowel regimen active.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–8",
      title: "The myocarditis window",
      description: "Fever + tachycardia + chest symptoms = troponin/CRP today; ~80% of myocarditis cases live in this window.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–18",
      title: "The agranulocytosis peak",
      description: "The highest-risk period for severe neutropenia — weekly ANC through week 26.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 4–12",
      title: "Clinical response emerges",
      description: "In TRS, improvement often arrives slowly — give 4–6 months at adequate dose/level before judgement; check level once at steady state.",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Months 6–12",
      title: "Stabilisation",
      description: "ANC spacing extends (biweekly then monthly); metabolic management matures; psychosocial recovery begins in earnest.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Years",
      title: "The long reward",
      description: "The best long-term data in TRS: reduced suicidality, hospitalisation, and aggression — with indefinite ANC and metabolic surveillance.",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why do I need blood tests every week?",
      answer: "Clozapine can very rarely switch off the white cells that fight infection (agranulocytosis). The weekly blood count catches any fall before it becomes dangerous, which is exactly why the medicine has become safe to use. After six months of stable counts, testing stretches to every two weeks, then monthly.",
    },
    {
      question: "Is clozapine stronger than other antipsychotics?",
      answer: "It works differently, not just stronger — and it succeeds in a third to half of the people for whom two other medicines have failed. It is also the only psychiatric medicine shown to reduce suicide attempts in schizophrenia. That is why the blood-monitoring trouble is considered worth it.",
    },
    {
      question: "What symptoms should make me seek help urgently?",
      answer: "Three situations: (1) fever, sore throat, or mouth ulcers — blood test the same day; (2) chest pain, breathlessness, or a racing heart in the first two months — emergency; (3) severe stomach pain, vomiting, or no bowel movement for days — emergency. All three are rare and all three are survivable when caught early.",
    },
    {
      question: "I drool at night — is that the medicine? Can anything be done?",
      answer: "Yes — it is one of clozapine's most common effects and nothing to be embarrassed about. Practical measures (towel on the pillow) plus specific medicines can reduce it considerably. Mention it at your review; it is a solved problem.",
    },
    {
      question: "I want to quit smoking — can I?",
      answer: "You can, but never without telling your clozapine doctor first: quitting changes how your body handles clozapine and can raise the level by half or more. The dose is usually adjusted with a blood-level check afterwards.",
    },
    {
      question: "Can clozapine be used in pregnancy?",
      answer: "It is a specialist decision made case by case. For most women with treatment-resistant schizophrenia whose health depends on clozapine, continuing with close obstetric and psychiatric co-management is safer than relapsing. Breastfeeding is usually discouraged on clozapine.",
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
        section: "6th ed. (2017), clozapine monograph, p. 29",
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
        source: "FDA Prescribing Information for Clozaril (Clozapine)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for clozapine — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Clozapine",
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
      name: "Treatment-resistant schizophrenia",
      relationship: "primary",
    },
    {
      name: "Recurrent suicidal behaviour in schizophrenia/schizoaffective disorder",
      relationship: "primary",
    },
    {
      name: "Psychosis in Parkinson's disease",
      relationship: "off-label",
    },
    {
      name: "Severe aggression / violence in psychosis",
      relationship: "off-label",
    },
    {
      name: "Tardive dyskinesia caused by other antipsychotics",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Clozapine",
      type: "drug",
      href: "/drugs/clozapine",
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
      label: "D2 (loose/transient antagonist); 5-HT2A (high affinity); D4; M1/M4; H1; alpha-1; NMDA/glutamate system",
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
      label: "Treatment-resistant schizophrenia",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Recurrent suicidal behaviour in schizophrenia/schizoaffective disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Psychosis in Parkinson's disease",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Agranulocytosis / severe neutropenia",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Myocarditis",
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
      label: "Patient Guide — Clozapine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The last-line lifesaver — the only agent proven for treatment-resistant schizophrenia and suicidality, governed by mandatory blood monitoring.",
    summary: "Clozapine is a prescription medicine used to treat treatment-resistant schizophrenia. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Clozapine is the strongest medicine for schizophrenia that exists — reserved for cases where at least two other antipsychotics have failed. It works differently from all others and can succeed where they could not, including reducing suicidal thoughts. Because it can rarely stop the immune system's white cells from forming, you will have a small blood test every week at first, then monthly forever — this is what keeps the medicine safe. Report any fever, sore throat, or infection immediately, and treat constipation seriously on this medicine.",
    sideEffects: "The most common side effects are: sedation and drowsiness, hypersalivation / sialorrhoea, weight gain and obesity, constipation, tachycardia, orthostatic hypotension. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Agranulocytosis / severe neutropenia and Myocarditis. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: anc (absolute neutrophil count) (weekly × 26 weeks, then every 2 weeks × 26 weeks, then monthly — indefinitely); fever / infection symptoms (immediate anc check whenever fever, sore throat, or flu-like illness occurs); troponin and crp (with any fever, tachycardia, chest pain, or dyspnoea in the first 8 weeks). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Known haematological toxicity / prior clozapine-induced agranulocytosis or neutropenia, Inability to comply with ANC monitoring (no REMS access), Uncontrolled epilepsy without co-management, Severe constipation / paralytic ileus history. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: Smoking (CYP1A2 induction), Caffeine, Fluvoxamine (strong 1A2 inhibitor), Ciprofloxacin and other 1A2 inhibitors. Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Sizopin",
        manufacturer: "Sun Pharma",
        strengths: "25 mg, 50 mg, 100 mg",
      },
      {
        name: "Clopine / Lozapine",
        manufacturer: "Eros / others",
        strengths: "25–100 mg",
      },
      {
        name: "Clozapine (generic)",
        manufacturer: "Multiple",
        strengths: "25, 100 mg",
      },
    ],
    typicalDoses: "TRS: 12.5 mg start → 300–450 mg (level-guided); Parkinson's psychosis: 6.25–50 mg micro-doses.",
    prescribingScenarios: [
      "Treatment-resistant schizophrenia in psychiatric institutes and medical colleges — the standard of care.",
      "Suicide-risk schizophrenia under IPS guidance.",
      "Parkinson's psychosis referrals from neurology (micro-dose protocols).",
      "Severe aggression in psychosis where other agents have failed.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: false,
    },
    costCategory: "moderate",
    costNote: "Generic clozapine is inexpensive; the real cost is the monitoring system (weekly ANC in early months). Cost varies by manufacturer and region.",
    monitoring: "ANC weekly × 6 months, biweekly × 6 months, monthly thereafter — in India often coordinated through medical college hematology labs; give every patient a written fever/chest/bowel action card.",
    patientCounselling: [
      "The blood test is the licence to use the best medicine — never skip it.",
      "Fever or sore throat = same-day blood test; chest symptoms in the first 2 months = emergency.",
      "Constipation is a serious risk on this medicine — the bowel medication is part of the prescription.",
      "Tell the doctor before any change in smoking.",
      "Night-time drooling is common, treatable, and nothing to be ashamed of.",
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
    note: "Clozapine is not typically stocked in Jan Aushadhi kendras; Schedule X dispensing requires licensed pharmacy with register maintenance.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Atypical Antipsychotics",
    members: [
      {
        name: "Clozapine",
        slug: "clozapine",
        relationship: "This guide",
        distinguishing: "Treatment-resistant schizophrenia + anti-suicide efficacy — the drug that rescues the failures",
      },
      {
        name: "Aripiprazole",
        slug: "aripiprazole",
        relationship: "Same class (Dopamine Stabiliser)",
        distinguishing: "Least metabolic burden among atypicals — the activating 'thermostat' antipsychotic",
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
    read: "20 min",
    study: "40 min",
    revision: "6 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which molecular target does Clozapine primarily act on?",
      options: [
        "D2 (loose/transient antagonist); 5-HT2A (high affinity); D4; M1/M4; H1; alpha-1; NMDA/glutamate system",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Clozapine acts primarily at D2 (loose/transient antagonist); 5-HT2A (high affinity); D4; M1/M4; H1; alpha-1; NMDA/glutamate system. Clozapine blocks a uniquely wide receptor spectrum — loose D2 binding plus 5-HT2A, D4, M1/M4, H1, and alpha-1 — with glutamatergic (NMDA-enhancing) actions that may underpin its efficacy in treatment-resistant cases.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Clozapine?",
      options: ["Sedation and drowsiness", "Hypersalivation / sialorrhoea", "Weight gain and obesity", "Constipation"],
      correctIndex: 0,
      explanation: "Sedation and drowsiness — H1-mediated; strongest in the first weeks and with dose increases — the dose-limiting daytime effect for many patients.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Clozapine for treatment-resistant schizophrenia?",
      options: [
        "300–450 mg/day (divided, then consolidated)",
        "900 mg/day",
        "300–450 mg/day (divided, then consolidated) (twice that)",
        "There is no established dosing",
      ],
      correctIndex: 0,
      explanation: "For treatment-resistant schizophrenia: start 12.5 mg once or twice daily, target 300–450 mg/day (divided, then consolidated), maximum 900 mg/day. Increase by 12.5–25 mg/day or every 2 days as tolerated; slower in the elderly",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Clozapine in two sentences.",
      answer: "Clozapine blocks a uniquely wide receptor spectrum — loose D2 binding plus 5-HT2A, D4, M1/M4, H1, and alpha-1 — with glutamatergic (NMDA-enhancing) actions that may underpin its efficacy in treatment-resistant cases. Net effect: Antipsychotic efficacy in treatment-resistant patients, near-zero EPS/TD and no prolactin rise, plus anti-aggression, anti-suicide, and (uniquely among antipsychotics) some restorative effect on dyskinesias.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Clozapine.",
      answer: "Treatment-resistant schizophrenia, Recurrent suicidal behaviour in schizophrenia/schizoaffective disorder, Psychosis in Parkinson's disease, Severe aggression / violence in psychosis. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Clozapine and how you would manage it.",
      answer: "Agranulocytosis / severe neutropenia: Incidence ~0.8% (0.3% severe); highest risk in the first 6 months; presents as fever, sore throat, mouth ulcers — the reason for mandatory ANC monitoring. Management: Stop immediately; haematology referral; granulocyte colony-stimulating factor in severe cases; never rechallenge.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Clozapine require?",
      answer: "ANC (absolute neutrophil count) (Weekly × 26 weeks, then every 2 weeks × 26 weeks, then monthly — indefinitely); Fever / infection symptoms (Immediate ANC check whenever fever, sore throat, or flu-like illness occurs); Troponin and CRP (With any fever, tachycardia, chest pain, or dyspnoea in the first 8 weeks); Weight and BMI (Baseline, 4, 8, 12 weeks, then quarterly)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Clozapine that separates safe prescribers from unsafe ones.",
      answer: "Clozapine has two monopolies — TRS and anti-suicide — and no competitor in either.",
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
      checkpoint: "You now know what Clozapine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Clozapine works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Clozapine safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Clozapine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Clozapine with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Clozapine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Sedation and orthostasis: from the first days (titration effects).",
      "Antipsychotic response: often 1–3 weeks at adequate dose, but in TRS the full benefit may take 3–6 months.",
      "Aggression and suicidality: often among the first clinical signs to improve.",
      "Sialorrhoea and constipation: usually within the first weeks — manage early.",
    ],
    ifItWorks: [
      "Continue — clozapine response in TRS is precious; do not destabilise it.",
      "Optimise to the lowest dose maintaining response (guided by level > 350 ng/mL where used).",
      "Keep ANC monitoring indefinitely — the temptation to skip visits grows with wellness; the system must not.",
      "Add psychosocial rehabilitation — clozapine-responsive patients have years of recovery to rebuild.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Clozapine (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Amisulpride or aripiprazole for partial response (best augmentation evidence).",
      "Valproate for seizures at higher doses (prophylaxis or treatment).",
      "Low-dose fluvoxamine to deliberately raise clozapine levels (reduce clozapine dose accordingly) — an expert manoeuvre.",
      "ECT for clozapine-resistant illness — the best-evidenced option.",
    ],
    testsBeforeStarting: [
      "ANC before starting, weekly × 26 weeks, biweekly × 26 weeks, then monthly indefinitely (REMS).",
      "Baseline: ECG, troponin/CRP availability plan, weight/BMI, fasting glucose/HbA1c, lipids, LFTs, seizure history.",
      "Plasma clozapine level at steady state and whenever response is inadequate or status changes.",
      "Pregnancy test where relevant; bowel regimen assessment.",
    ],
    sideEffectLogic: [
      "The wide receptor map predicts everything: H1 → sedation; alpha-1 → orthostasis; M/gut-sympathetic → constipation and sialorrhoea; 5-HT2C/H1 → weight; loose D2 → no EPS or prolactin. The serious risks (agranulocytosis, myocarditis, seizures) are idiosyncratic or dose-related and are managed by monitoring rather than avoided.",
    ],
    sideEffectManagement: [
      "Titrate slowly — most early toxicity (sedation, hypotension, tachycardia) is a titration-speed problem.",
      "Move doses to bedtime; divide only when total dose is high.",
      "Treat sialorrhoea and constipation actively — both are solvable, both destroy adherence when ignored.",
      "For fever: same-day ANC and (in the first 8 weeks) troponin/CRP — no exceptions.",
    ],
    sideEffectRescue: [
      "Sublingual atropine or glycopyrrolate for sialorrhoea; amisulpride augmentation also reduces it.",
      "Regular macrogol + stimulant laxative PRN for the bowel; escalation pathway written for the patient.",
      "Metformin early and at adequate dose for the metabolic trajectory.",
      "Valproate for seizure prophylaxis above 600 mg/day.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "Very high initially; attenuates at a stable dose but remains the dose-limiting effect for many.",
    dosing: [
      {
        indication: "Treatment-resistant schizophrenia",
        starting: "12.5 mg once or twice daily",
        titration: "Increase by 12.5–25 mg/day or every 2 days as tolerated; slower in the elderly",
        target: "300–450 mg/day (divided, then consolidated)",
        max: "900 mg/day",
        notes: [
          "Slow is safe: the fatal titration events happen when we hurry",
          "Divide doses during titration; move to nightly when stable",
          "Level-guided optimisation: aim > 350 ng/mL",
        ],
      },
      {
        indication: "Suicidal behaviour in schizophrenia",
        starting: "12.5–25 mg/day",
        titration: "Standard titration",
        target: "300–400 mg/day",
        max: "900 mg/day",
      },
      {
        indication: "Parkinson's disease psychosis",
        starting: "6.25 mg at night",
        titration: "Increase by 6.25 mg every 3–7 days — micro-doses",
        target: "25–50 mg/day",
        max: "100 mg/day (rarely needed)",
        notes: ["The blood monitoring still applies", "Expect benefit at tiny doses"],
      },
      {
        indication: "Seizure-prone patients / high dose",
        starting: "Standard start; add valproate prophylaxis",
        titration: "Slow increments above 600 mg",
        target: "Lowest effective",
        max: "900 mg with anticonvulsant cover",
      },
    ],
    dosageForms: [
      "Tablets 25, 100 mg (scored)",
      "Orally disintegrating tablets 12.5, 25, 100 mg",
      "Oral suspension 50 mg/mL",
      "Generic clozapine widely available",
    ],
    dosingTips: [
      "12.5 mg starts and 25-mg steps — the elderly and the sensitive need half of that again.",
      "Consolidate to a single night dose once stable — converts sedation into sleep.",
      "The level is cheap and priceless: check at steady state, at non-response, and after any smoking/caffeine/medication change.",
      "Prescribe the bowel regimen WITH the clozapine — not after the first ileus scare.",
      "Give every patient a written action card: fever → same-day blood; chest symptoms → emergency; no bowels 3 days → call.",
      "In fluvoxamine augmentation, the clozapine dose may drop to a quarter — level monitoring is the guardrail.",
      "Sialorrhoea treatments work; asking is the step most often skipped.",
      "Plan the long game: clozapine response in TRS often needs 6 months — protect the trial from premature abandonment.",
    ],
    overdose: [
      "Life-threatening: severe sedation, delirium, seizures, respiratory depression, hypotension, hypersalivation with aspiration risk.",
      "Activated charcoal early; ICU-level monitoring; benzodiazepines for seizures (cautiously).",
      "Effects can persist for days ( metabolites + ileus prolong absorption).",
    ],
    longTermUse: "Years to decades of use in TRS; surveillance for life: ANC monthly, metabolic 6–12 monthly, bowel health every visit. The long-term rewards — reduced suicide, hospitalisation, and aggression — justify the burden.",
    habitForming: "Not considered habit-forming.",
    howToStop: [
      "Reduce gradually; abrupt cessation risks rebound psychosis, cholinergic rebound (nausea, vomiting, sweating, restlessness), and catatonia.",
      "If stopped for neutropenia, the haematology and psychiatry plan must run in parallel — a treatment gap in TRS is dangerous.",
      "After myocarditis or agranulocytosis — never rechallenge; alternatives are ECT or carefully selected combinations.",
      "The ANC must continue for 4 weeks after full discontinuation.",
    ],
    pharmacokinetics: [
      "Half-life ~12 h (wide range).",
      "CYP1A2 primary — smoking and caffeine move levels sharply; fluvoxamine and ciprofloxacin inhibit.",
      "Plasma level target > 350 ng/mL associated with response.",
      "Norclozapine: active, contributes to effect and adverse effects.",
    ],
    doNotUse: [
      "Prior clozapine-induced agranulocytosis/neutropenia (ANC < 1000) or myocarditis — never rechallenge.",
      "No ANC monitoring access — prescribing without monitoring is not permitted.",
      "With carbamazepine (marrow risk + induction).",
      "Uncontrolled ileus or untreated severe constipation.",
    ],
    specialPopulations: [
      {
        population: "Renal impairment",
        guidance: [
          "No specific adjustment; titrate by clinical response.",
        ],
      },
      {
        population: "Hepatic impairment",
        guidance: [
          "Monitor transaminases; rare but serious hepatotoxicity.",
        ],
      },
      {
        population: "Cardiac impairment",
        guidance: [
          "Baseline ECG and troponin plan; myocarditis vigilance is heightened.",
          "Caution with tachycardia in heart failure.",
        ],
      },
      {
        population: "Elderly",
        guidance: [
          "Start 12.5 mg; go at half speed.",
          "Aspiration pneumonia (sedation + sialorrhoea) is a leading cause of death — position, treat drooling, minimise sedatives.",
          "Dementia-related psychosis: boxed warning — avoid.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Specialist-only; reserved for early-onset treatment-resistant illness.",
          "Same ANC rules; metabolic monitoring intensified.",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "No clear teratogenic signal; neonatal sedation and neutropenia reported.",
          "Continuation usually preferred in TRS with MDT oversight.",
          "Breastfeeding generally discouraged.",
        ],
      },
      {
        population: "Smokers",
        guidance: [
          "Smoking induces 1A2 — levels halve with smoking and double with cessation.",
          "Re-check level and adverse effects at every smoking-status change.",
        ],
      },
    ],
    potentialAdvantages: [
      "The only proven agent for treatment-resistant schizophrenia (30–60% respond).",
      "The only drug with proven anti-suicide efficacy in schizophrenia.",
      "Best anti-aggression evidence of any antipsychotic.",
      "Virtually no EPS/TD — treats tardive dyskinesia.",
      "No prolactin elevation.",
      "Gold standard for Parkinson's psychosis (micro-dose).",
      "Level-guided, affordable in generic form.",
    ],
    potentialDisadvantages: [
      "Agranulocytosis risk with mandatory indefinite ANC monitoring (REMS).",
      "Myocarditis window (weeks 1–8).",
      "Dose-related seizures.",
      "Severe constipation/ileus — lethal if ignored.",
      "Heaviest metabolic profile in class.",
      "Sialorrhoea, enuresis, sedation — quality-of-life burden.",
      "Wide interaction surface (1A2, smoking, caffeine).",
      "Underused: prescribed years late on average.",
    ],
    primaryTargetSymptoms: [
      "Positive symptoms of psychosis after failure of other agents",
      "Suicidal behaviour in schizophrenia/schizoaffective disorder",
      "Aggression and violence in psychosis",
      "Tardive dyskinesia (improves it)",
      "Psychosis in Parkinson's disease (micro-doses)",
      "Negative and affective symptoms of schizophrenia (partial)",
    ],
    pearls: [
      "Clozapine has two monopolies — TRS and anti-suicide — and no competitor in either.",
      "The first 8 weeks are the danger zone: fever gets troponin/CRP, not reassurance.",
      "Prescribe the bowel regimen with the prescription — the ileus risk is the most underestimated killer.",
      "Level > 350 ng/mL before you call it failure; 6 months at adequate dose before you call it clozapine-resistant.",
      "Smoking cessation doubles levels — the stealth overdose of stable clozapine patients.",
      "Valproate, never carbamazepine, for seizure prophylaxis.",
      "Low-dose fluvoxamine augmentation is deliberate pharmacokinetic engineering — expert hands, level-guided only.",
      "Amisulpride or aripiprazole are the evidence-based augmentation partners for partial response.",
      "Sialorrhoea has treatments that work — the missing step is asking.",
      "The biggest clozapine error in psychiatry is latency: on average it is tried years after the criteria were met.",
      "ECT augmentation for clozapine resistance is the best-evidenced last station.",
      "A stable clozapine patient is a system achievement — ANC logistics, bowel regimen, metabolic plan, and family all held together by follow-up.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
