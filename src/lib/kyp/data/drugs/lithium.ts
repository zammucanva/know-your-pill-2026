import type { Drug } from "../types";

/**
 * Lithium — drug page data, generated from Stahl's Prescriber's Guide (6th ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017), lithium monograph (book p. 65)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information
 *   - NICE / APA / class-specific treatment guidelines
 *
 * Part of the KYP Phase 3 Stahl integration — 131 medication guides.
 * Last reviewed: 2026-09-21
 */
export const lithium: Drug = {
  /* ---- Identity ---- */
  slug: "lithium",
  genericName: "Lithium",
  brandNames: ["Lithobid", "Eskalith", "Lithium carbonate (generic)"],
  drugClass: "mood-stabiliser",
  drugClassLabel: "Mood Stabiliser",
  drugClassFullName: "Mood Stabiliser — Lithium Salt",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Mood Stabilisers & Anticonvulsants", "Mood Stabilisers", "Lithium"],
  /* ---- Hero / summary ---- */
  tagline: "The original and still gold-standard mood stabiliser — the only drug that prevents both poles and reduces suicide.",
  summary: "Lithium is psychiatry's oldest mood stabiliser and remains its gold standard: uniquely effective against mania, the only agent that prevents both manic and depressive relapse, and the only psychiatric drug with proven anti-suicide efficacy. Its narrow therapeutic index (0.6–1.2 mEq/L) makes it the archetype of level-guided psychiatry: thyroid and renal surveillance is lifelong, toxicity arrives with dehydration and NSAIDs, and tremor, thirst, and polyuria are the daily texture. Underused for decades because it is old and unprofitable — its modern renaissance is evidence-driven.",
  estimatedReadTime: "14 min read",
  yieldRating: "high",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of Lithium — from its molecular target (Inositol monophosphatase (depletion of PI cycle); GSK-3β (inhibition); multiple ion channels and second messengers) to clinical effect.",
    "List the FDA-approved and off-label uses of Lithium.",
    "Predict the common and serious side effects of Lithium from its pharmacology.",
    "Construct an appropriate dosing and monitoring plan for a patient starting Lithium.",
    "Compare Lithium with other mood stabilisers and justify when to choose it over alternatives.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Lithium's mechanism is genuinely multi-target: it inhibits inositol monophosphatase (depleting the phosphoinositide second-messenger pool), inhibits GSK-3β (neuroprotective, circadian), and alters multiple neurotransmitter systems downstream.",
    molecularTarget: "Inositol monophosphatase (depletion of PI cycle); GSK-3β (inhibition); multiple ion channels and second messengers",
    effect: "Mood stabilisation in both directions — anti-manic, antidepressant-adjacent, relapse-preventing for both poles, and uniquely anti-suicidal; neuroprotective and possibly grey-matter preserving.",
    steps: [
      "Lithium replaces sodium in ion channels and intracellular signalling — entering neurons via sodium channels and accumulating intracellularly.",
      "Inositol monophosphatase inhibition depletes the phosphoinositide (PI) second-messenger pool — 'PI depletion' dampens overactive signalling cascades (the classic Stahl explanation).",
      "GSK-3β inhibition is neuroprotective and affects circadian biology — a leading candidate for lithium's unique relapse-prevention and anti-suicide profile.",
      "Downstream: enhanced serotonergic transmission, reduced dopaminergic excitability, neurotrophic (BDNF) effects, and grey-matter preservation documented in imaging studies.",
      "The clinical signature follows: strongest against mania ('treats from above'), moderate for the depressed pole, powerful for maintenance of both, and uniquely anti-suicidal.",
    ],
    pharmacokinetics: "Complete absorption; peak 1–4 h (immediate release). Excreted ENTIRELY unchanged by the kidney — no metabolism at all: the drug that defined therapeutic drug monitoring.",
    halfLife: "18–30 hours (longer with renal impairment, in the elderly, and with dehydration).",
    activeMetabolite: "None — lithium is an element; it is not metabolised, only excreted.",
    metabolism: "None (elemental ion) — renal excretion is 100% of elimination; reabsorbed alongside sodium in the proximal tubule (hence the sodium-depletion interaction story).",
    excretion: "Renal, unchanged — the kidney IS the metabolism.",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "drug",
        label: "Lithium",
        sublabel: "Mood stabiliser",
        variant: "process",
      },
      {
        id: "targets",
        label: "Multiple targets",
        sublabel: "Ion channels, second messengers, neuroprotection",
        variant: "target",
      },
      {
        id: "exc",
        label: "Neuronal hyperexcitability",
        sublabel: "Kindled mood episodes",
        variant: "input",
      },
      {
        id: "effect",
        label: "Mood stabilised",
        sublabel: "Relapse prevention",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "drug",
        to: "targets",
        label: "acts on",
      },
      {
        from: "exc",
        to: "targets",
        label: "calmed by",
        type: "inhibit",
      },
      {
        from: "targets",
        to: "effect",
        label: "prevents extremes",
      },
    ],
    caption: "Mood stabilisation is multi-mechanism: damping neuronal hyperexcitability, protecting neurons, and re-tuning intracellular signalling together prevent both poles of bipolar illness.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Dopamine (DA)", "Glutamate"],
  receptors: ["Inositol monophosphatase (inhibitor)", "GSK-3β (inhibitor)"],
  brainRegionIds: ["prefrontal-cortex", "hippocampus", "amygdala"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Acute mania / manic episodes of bipolar disorder",
      status: "fda-approved",
      description: "Effective anti-manic (though slower onset than antipsychotics — often paired).",
      ageGroup: "Adults & ≥7 years",
    },
    {
      name: "Bipolar maintenance",
      status: "fda-approved",
      description: "THE gold-standard maintenance agent — prevents both manic and depressive relapse.",
    },
    {
      name: "Acute bipolar depression (adjunct)",
      status: "guideline",
      description: "Moderate evidence alone; often combined with quetiapine/lurasidone or an antidepressant-free regimen.",
    },
    {
      name: "Major depressive disorder — augmentation",
      status: "fda-approved",
      description: "The classic augmentation: lithium 600–900 mg triples antidepressant response rates in partial responders.",
    },
    {
      name: "Reduction of suicidal behaviour",
      status: "guideline",
      description: "The only psychiatric drug with proven anti-suicide efficacy — reduces completed suicide ~5–6-fold in cohort studies.",
    },
    {
      name: "Schizoaffective disorder (adjunct)",
      status: "off-label",
      description: "Stabilises the affective component alongside antipsychotics.",
    },
    {
      name: "Aggression / impulsivity (neurological and psychiatric)",
      status: "off-label",
      description: "Historic use in aggression, self-harm patterns, and conduct disturbance.",
    },
    {
      name: "Neutropenia (including clozapine-induced)",
      status: "off-label",
      description: "Lithium raises white counts — a therapeutic side effect exploited in clozapine patients.",
    },
  ],
  contraindications: [
    {
      name: "Severe renal impairment (eGFR < 30)",
      severity: "relative",
      rationale: "Lithium accumulates — specialist-only decisions below this threshold; many stable long-term patients continue with adjusted dosing and close monitoring.",
    },
    {
      name: "Acute dehydration / sodium depletion states",
      severity: "relative",
      rationale: "Sodium depletion causes renal lithium reabsorption to rise sharply — the commonest toxicity pathway.",
    },
    {
      name: "Untreated thyroid disease",
      severity: "relative",
      rationale: "Lithium causes hypothyroidism and goitre — treat the thyroid, then decide; most continue lithium with replacement.",
    },
    {
      name: "Addison's disease / significant adrenal insufficiency",
      severity: "relative",
      rationale: "Sodium-wasting state — toxicity amplifier.",
    },
    {
      name: "First trimester of pregnancy (traditionally)",
      severity: "relative",
      rationale: "Ebstein anomaly risk (historically overestimated at ~1/1000–2000); modern practice continues lithium in severe bipolar disorder with level control, counselling, and high-resolution foetal echocardiography.",
    },
  ],
  blackBoxWarnings: [
    {
      title: "Lithium toxicity — narrow therapeutic index",
      text: "Lithium toxicity is closely related to lithium levels and can occur at standard doses with dehydration, sodium loss, or interacting drugs (NSAIDs, ACE inhibitors, thiazides). Early signs include fine tremor, gastrointestinal upset; severe toxicity produces coarse tremor, confusion, ataxia, seizures, and permanent neurological injury or death. Patients must maintain fluid and salt intake and know the toxicity warning signs.",
    },
  ],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Fine tremor",
      frequency: "very-common",
      severity: "mild",
      description: "Fine postural hand tremor — the classic early effect; caffeine and anxiety worsen it.",
      management: "Dose review (is the level at the lower end of range?); propranolol 10–30 mg if persistent; reduce caffeine.",
    },
    {
      name: "Polyuria and polydipsia",
      frequency: "very-common",
      severity: "moderate",
      description: "Lithium impairs renal concentrating ability — thirst and large urine volumes are near-universal; the question is whether it progresses.",
      management: "Maintain fluids; monitor urine concentrating ability and renal function; amiloride for problematic polyuria; avoid chronically high levels.",
    },
    {
      name: "Nausea and gastrointestinal upset",
      frequency: "common",
      severity: "mild",
      description: "Worse at initiation and with rapid level rises; the classic clue to too-fast titration.",
      management: "Take with food; use sustained-release formulations; slower titration.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "moderate",
      description: "Metabolic and behavioural mixed; average 3–7 kg over years; a key long-term adherence challenge.",
      management: "Lifestyle intervention from the start; metformin evidence emerging.",
    },
    {
      name: "Cognitive blunting / 'slowed' feeling",
      frequency: "common",
      severity: "mild",
      description: "Some patients describe mental fog or feeling 'flat' — dose-related.",
      management: "Check the level — the lowest effective maintenance level (0.6–0.8) is the modern trend.",
    },
    {
      name: "Acne and psoriasis worsening",
      frequency: "common",
      severity: "mild",
      description: "Dermatological effects that disproportionately distress younger patients.",
      management: "Dermatology co-management; dose review.",
    },
    {
      name: "Hypothyroidism",
      frequency: "common",
      severity: "moderate",
      description: "Lithium inhibits thyroid hormone release — goitre and hypothyroidism develop in a substantial minority over years.",
      management: "TSH at baseline and 6–12 monthly; levothyroxine replacement allows lithium continuation.",
    },
    {
      name: "Diabetes insipidus (nephrogenic, long-term)",
      frequency: "uncommon",
      severity: "severe",
      description: "Concentrating defect progressing to frank nephrogenic DI in a minority of long-term users.",
      management: "Amiloride; nephrology input; lithium-sparing regimen review.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Lithium toxicity",
      frequency: "uncommon",
      severity: "life-threatening",
      description: "The signature emergency: coarse tremor, vomiting/diarrhoea (which worsen dehydration → more toxicity), ataxia, dysarthria, confusion, seizures, coma. Levels > 2.5 mEq/L (or lower with chronic kidney injury) are life-threatening; permanent cerebellar damage can survive the episode.",
      management: "Stop lithium; aggressive fluid and electrolyte management; haemodialysis for severe toxicity; the classic trigger audit — NSAIDs? Dehydration? New diuretic? Hot weather?",
    },
    {
      name: "Nephrogenic diabetes insipidus",
      frequency: "uncommon",
      severity: "severe",
      description: "Vasopressin-resistant polyuria — long-term dose- and duration-related.",
      management: "Amiloride; thiazides paradoxically (with careful level monitoring); nephrology co-management.",
    },
    {
      name: "Chronic kidney disease (CKD)",
      frequency: "uncommon",
      severity: "severe",
      description: "Long-term risk of progressive reduction in GFR — the reason creatinine is monitored for life.",
      management: "Annual (or more frequent) eGFR and creatinine; keep levels in the lower therapeutic range; consider alternatives if progressive.",
    },
    {
      name: "Hypothyroidism",
      frequency: "common",
      severity: "moderate",
      description: "Goitre and clinical hypothyroidism — fully manageable with replacement.",
      management: "TSH surveillance; levothyroxine.",
    },
    {
      name: "Hyperparathyroidism / hypercalcaemia",
      frequency: "uncommon",
      severity: "moderate",
      description: "Lithium raises calcium and PTH — an under-recognised annual-check item.",
      management: "Calcium monitoring; parathyroid evaluation if persistent elevation.",
    },
    {
      name: "Ebstein anomaly (first-trimester exposure)",
      frequency: "rare",
      severity: "severe",
      description: "Tricuspid valve malformation — historically estimated ~1/1000–2000 (modern estimates lower); the classic teratology teaching point.",
      management: "Counselling before conception where possible; high-resolution foetal echocardiography for exposed pregnancies.",
    },
    {
      name: "Serotonin syndrome (with serotonergic co-prescription)",
      frequency: "rare",
      severity: "life-threatening",
      description: "Lithium is serotonergically active — a recognised co-ingredient in serotonin syndrome with SSRIs/MAOIs.",
      management: "Stop serotonergic drugs; supportive care.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Lithium level",
      frequency: "5–7 days after starting/dose change; then weekly × 2; then 3–6 monthly for life",
      rationale: "The archetype of level-guided psychiatry: 12-hour post-dose trough, target 0.6–1.2 mEq/L (0.8–1.2 acute mania; 0.6–0.8 modern maintenance).",
    },
    {
      parameter: "Renal function (creatinine/eGFR)",
      frequency: "Baseline, then every 6–12 months for life; more often if impaired",
      rationale: "Renal excretion is 100% of elimination; CKD is the long-term risk.",
    },
    {
      parameter: "Thyroid function (TSH, free T4)",
      frequency: "Baseline, then every 6–12 months",
      rationale: "Hypothyroidism develops in a substantial minority.",
    },
    {
      parameter: "Calcium (and PTH if elevated)",
      frequency: "Baseline, then annually",
      rationale: "Lithium-induced hyperparathyroidism is the forgotten annual item.",
    },
    {
      parameter: "Weight / BMI",
      frequency: "Baseline, then every visit",
      rationale: "Weight gain is a leading adherence threat.",
    },
    {
      parameter: "Pregnancy testing and counselling",
      frequency: "Before starting in women of childbearing age; at every review if relevant",
      rationale: "Teratogenicity counselling is a prescribing condition.",
    },
    {
      parameter: "Toxicity symptom review",
      frequency: "Every visit — tremor, polyuria, cognition",
      rationale: "The history is as important as the level.",
    },
  ],
  interactions: [
    {
      drug: "NSAIDs (ibuprofen, naproxen, indometacin)",
      severity: "major",
      mechanism: "Reduce renal lithium clearance — levels can rise 20–400%; the classic stealth toxicity trigger available over the counter.",
      action: "Avoid OTC NSAIDs without level checks; prefer paracetamol; warn every patient by name.",
    },
    {
      drug: "Thiazide diuretics",
      severity: "major",
      mechanism: "Increase proximal lithium reabsorption — levels rise predictably.",
      action: "If unavoidable, halve lithium and re-check level within 5–7 days.",
    },
    {
      drug: "ACE inhibitors / ARBs",
      severity: "major",
      mechanism: "Reduce lithium clearance — the elderly are especially vulnerable.",
      action: "Monitor levels closely after starting; expect dose reduction.",
    },
    {
      drug: "Dehydration (gastroenteritis, heat, exercise)",
      severity: "major",
      mechanism: "Volume and sodium depletion cause renal lithium reabsorption to rise — the commonest real-world toxicity pathway.",
      action: "Teach sick-day rules: maintain fluids and salt; hold lithium and check level during vomiting/diarrhoea illness.",
    },
    {
      drug: "Serotonergic drugs (SSRIs, SNRIs, MAOIs, tramadol)",
      severity: "moderate",
      mechanism: "Additive serotonergic effect — serotonin syndrome case reports with lithium always aboard.",
      action: "Counsel on symptoms; the combination is common and appropriate with awareness.",
    },
    {
      drug: "Haloperidol and high-potency antipsychotics",
      severity: "moderate",
      mechanism: "Historic association with encephalopathy and NMS-like states at high combined exposure.",
      action: "Common combination in mania — use moderate doses; recognise early neurotoxicity.",
    },
    {
      drug: "Topiramate and carbonic anhydrase inhibitors",
      severity: "moderate",
      mechanism: "Bicarbonate loss can raise lithium levels.",
      action: "Level check after starting.",
    },
    {
      drug: "Non-dihydropyridine calcium channel blockers (verapamil, diltiazem)",
      severity: "moderate",
      mechanism: "Paradoxical neurotoxicity reports — CNS effects with 'normal' levels.",
      action: "Observe for confusion/ataxia; avoid or monitor closely.",
    },
  ],
  pregnancy: {
    legacyCategory: "D",
    summary: "First-trimester exposure carries an Ebstein anomaly risk historically quoted at ~1/1000 (modern estimates lower — the absolute risk is small but the counseling is mandatory). For many women with severe bipolar disorder, continuing lithium with tight level control, high-resolution foetal echocardiography, and delivery-hospital coordination is safer than relapse. Never stop abruptly; decisions are made with the patient, obstetrics, and psychiatry together.",
    lactation: "Lithium passes into breast milk and into the infant — infant levels reach a meaningful fraction of maternal levels; the neonatal period is highest-risk (dehydration in a baby is dangerous). Most guidelines discourage breastfeeding on lithium, though some specialists support it with infant level and hydration monitoring in stable, motivated mothers.",
  },
  renalAdjustment: "The kidney is the entire elimination pathway: in mild impairment, reduce dose and lengthen the interval; in moderate-severe impairment, specialist-only — some stable long-term patients continue with adjusted regimens and close monitoring.",
  hepaticAdjustment: "No hepatic metabolism at all — hepatic impairment does not change lithium handling (a rare psychotropic for whom the liver is irrelevant).",
  /* ---- Education ---- */
  patientExplanation: "Lithium is a simple salt — related to sodium — that has been stabilising moods for 70 years. It is uniquely good at keeping both mania and depression away and is the only psychiatric medicine proven to reduce suicide. It needs respect: the safe dose range is narrow, your kidneys clear it unchanged, and anything that dehydrates you (vomiting, diarrhoea, heat, some painkillers) can push the level dangerously high. Regular blood tests are part of taking it safely — for life.",
  patientEducationPoints: [
    "Sick-day rules: if you have vomiting, diarrhoea, or fever — pause lithium, drink fluids with salt, and contact your team (the level can climb dangerously when you are dehydrated).",
    "Avoid ibuprofen, naproxin, and similar painkillers unless your doctor knows — they raise lithium levels.",
    "Know your toxicity signs: worsening shake, vomiting, clumsy walking, slurred words, confusion — same-day medical assessment, not tomorrow.",
    "Keep salt and fluid intake steady — no crash diets or salt-restricted fads.",
    "Blood tests: lithium level, kidney, thyroid, and calcium checks are lifelong — keep every appointment.",
    "Tell every doctor, dentist, and pharmacist you take lithium before any new medicine.",
    "If you plan pregnancy, tell your psychiatrist first — decisions happen before conception, not after.",
    "Do not stop suddenly — rebound mania and relapse risk are high; any change is gradual and supervised.",
  ],
  clinicalPearls: [
    "Lithium is the only drug that prevents BOTH poles and the only psychiatric drug that reduces completed suicide — two monopolies that no newer agent has matched.",
    "Treats 'from above': best for euphoric mania; less effective for rapid cycling and mixed states (valproate's territory).",
    "The level is everything: acute mania 0.8–1.2; modern maintenance 0.6–0.8 — the trend is lower maintenance levels with preserved efficacy.",
    "NSAIDs + lithium is the classic stealth toxicity — an OTC painkiller can hospitalise a stable patient; name the drugs in counselling.",
    "Sick-day rules (hold lithium during dehydrating illness) are the single highest-yield safety teaching in lithium care.",
    "Annual calcium is the forgotten test — lithium-induced hyperparathyroidism hides behind normal thyroid panels.",
    "Lithium augmentation of antidepressants (600–900 mg) triples response in partial responders — the cheapest augmentation in psychiatry.",
    "Lithium + valproate or lithium + antipsychotic outperform either alone for mania and maintenance — combination is the rule in severe illness, not polypharmacy.",
    "In clozapine patients with borderline neutrophils, lithium's leucocytosis is therapeutic — a side effect worth prescribing.",
    "The underuse of lithium is the great market-driven tragedy of modern psychopharmacology: the best evidence, the lowest price, and the least promotion.",
    "Grey-matter preservation on MRI and neurotrophic effects — lithium protects the brain it stabilises.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of Lithium: Lithium's mechanism is genuinely multi-target: it inhibits inositol monophosphatase (depleting the phosphoinositide second-messenger pool), inhibits GSK-3β (neuroprotective, circadian), and alters multiple neurotransmitter systems downstream.",
        "Uses of Lithium: Acute mania / manic episodes of bipolar disorder; Bipolar maintenance; Acute bipolar depression (adjunct); Major depressive disorder — augmentation",
        "Mechanism: inositol monophosphatase inhibition (PI depletion) + GSK-3β inhibition; not metabolised — 100% renal excretion unchanged.",
        "Monopolies: prevents both poles; the ONLY anti-suicide psychiatric drug (completed suicide reduced several-fold).",
      ],
      practical: [
        "Prescribe Lithium for acute mania / manic episodes of bipolar disorder with dose, timing, and duration.",
        "Outline the monitoring plan: Lithium level (5–7 days after starting/dose change; then weekly × 2; then 3–6 monthly for life); Renal function (creatinine/eGFR) (Baseline, then every 6–12 months for life; more often if impaired); Thyroid function (TSH, free T4) (Baseline, then every 6–12 months)",
      ],
      longAnswer: [
        "Lithium: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Mechanism: inositol monophosphatase inhibition (PI depletion) + GSK-3β inhibition; not metabolised — 100% renal excretion unchanged.",
        "Monopolies: prevents both poles; the ONLY anti-suicide psychiatric drug (completed suicide reduced several-fold).",
      ],
    },
    neetPg: {
      highYield: [
        "Mechanism: inositol monophosphatase inhibition (PI depletion) + GSK-3β inhibition; not metabolised — 100% renal excretion unchanged.",
        "Monopolies: prevents both poles; the ONLY anti-suicide psychiatric drug (completed suicide reduced several-fold).",
        "Therapeutic range 0.6–1.2 mEq/L (acute mania 0.8–1.2; modern maintenance 0.6–0.8); 12-hour trough sampling.",
        "Toxicity ladder: fine → coarse tremor, GI upset, ataxia/dysarthria, confusion, seizures, coma; permanent cerebellar damage possible.",
        "Classic interactions: NSAIDs, thiazides, ACE inhibitors/ARBs (all raise levels); dehydration is the master amplifier.",
        "Long-term surveillance: TSH (hypothyroidism), creatinine/eGFR (CKD), calcium (hyperparathyroidism) — for life.",
      ],
      pyqConcepts: ["Mechanism/target of Lithium", "Key adverse effect: Lithium toxicity", "Dosing and titration of Lithium"],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on Lithium develops lithium toxicity — next best step?",
        "When to choose Lithium over alternatives in its class.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary target: Inositol monophosphatase (depletion of PI cycle); GSK-3β (inhibition); multiple ion channels and second messengers",
        "Most common side effects: Fine tremor, Polyuria and polydipsia, Nausea and gastrointestinal upset",
        "Key contraindication: Severe renal impairment (eGFR < 30)",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Two monopolies: both-pole prevention and anti-suicide — nothing newer has matched either.",
        "Treats from above — best for euphoric mania and classic cycling; valproate for mixed and rapid-cycling.",
        "The NSAID conversation is a prescribing condition, not optional counselling.",
        "Sick-day rules save kidneys and lives — written cards outperform verbal advice.",
      ],
    },
  },
  memoryTricks: [
    {
      title: "LITHIUM toxicity signs",
      trick: "Lets Identify Tremor, Hyperreflexia (coarse), Incoordination, Unwell-confused, Metabolic (GI). Severe: seizures, coma.",
      remembers: "The toxicity ladder from early to late",
    },
    {
      title: "The 3 causes of a rising level",
      trick: "Dehydration (sick days), Drugs (NSAIDs, diuretics, ACEi), Declining renal function.",
      remembers: "The audit to run on every toxic level",
    },
    {
      title: "Treats from above",
      trick: "Lithium treats mania (above baseline) better than depression (below) — 'the mood ceiling'.",
      remembers: "The directionality of lithium's effect",
    },
    {
      title: "THC + L",
      trick: "The monitoring panel: Thyroid, Heart (ECG optional), Calcium + Lithium level, + creatinine.",
      remembers: "The annual lithium checkup",
    },
  ],
  highYieldSummary: [
    "Mechanism: inositol monophosphatase inhibition (PI depletion) + GSK-3β inhibition; not metabolised — 100% renal excretion unchanged.",
    "Monopolies: prevents both poles; the ONLY anti-suicide psychiatric drug (completed suicide reduced several-fold).",
    "Therapeutic range 0.6–1.2 mEq/L (acute mania 0.8–1.2; modern maintenance 0.6–0.8); 12-hour trough sampling.",
    "Toxicity ladder: fine → coarse tremor, GI upset, ataxia/dysarthria, confusion, seizures, coma; permanent cerebellar damage possible.",
    "Classic interactions: NSAIDs, thiazides, ACE inhibitors/ARBs (all raise levels); dehydration is the master amplifier.",
    "Long-term surveillance: TSH (hypothyroidism), creatinine/eGFR (CKD), calcium (hyperparathyroidism) — for life.",
    "Pregnancy: Ebstein anomaly (tricuspid valve) — small absolute risk; modern practice often continues lithium in severe bipolar disorder.",
    "Nephrogenic diabetes insipidus: amiloride treats; paradoxical thiazide with level monitoring.",
    "Augmentation: lithium + antidepressant triples response in partial responders (600–900 mg).",
    "Best for euphoric mania and classic bipolar I cycling; weaker in rapid cycling and mixed states.",
    "Leucocytosis side effect — used therapeutically in clozapine patients.",
    "Serotonin syndrome contributor with SSRIs/MAOIs.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "The recovered architect — lithium maintenance for 20 years",
      presentation: "A 42-year-old man with bipolar I, stable on lithium for 15 years, presents with rising polyuria and a creeping creatinine.",
      history: "Diagnosed at 22 after two hospitalisations for mania (grandiosity, 2-hour sleep, spending sprees), started on lithium at 23. Two brief depressions in the first 5 years, none since. Now attends routine review reporting 'drinking water all day and waking twice nightly to urinate' for 6 months. No vomiting or diarrhoea; no new medications; takes lithium 800 mg nightly, paracetamol only. Works as an architect; married.",
      examination: "Stable mood, no tremor beyond a fine wobble, no toxicity signs. BP 128/80. Weight stable. Investigations: lithium level 0.82 mEq/L (12-h trough), creatinine 1.24 mg/dL (baseline 1.02, eGFR now 58 from 72), TSH 3.1 (normal), calcium 9.6, HbA1c normal. Urine osmolality after overnight water deprivation: inappropriately dilute.",
      diagnosis: "Lithium-maintained bipolar I in full remission, now with early lithium-associated nephrogenic diabetes insipidus picture and mild, slowly declining renal function.",
      rationale: "This is the art of lithium maintenance: the drug preventing his episodes (and protecting against suicide) is now gently taxing his kidneys. The aim is to keep the mood protection while protecting the kidney: lower the level target, treat the DI, intensify surveillance — not reflexively abandoning the drug that gave him 15 years of stability.",
      management: "Lithium reduced to 600 mg at night with a target level of 0.6–0.7; amiloride 5 mg twice daily for the polyuria; fluids encouraged; NSAID avoidance re-emphasised; sick-day rules rehearsed. Renal function 3-monthly; nephrology referral for co-monitoring; family psychoeducation about relapse early-warning signs.",
      outcome: "Polyuria improves substantially on amiloride; creatinine stabilises at 1.18 (eGFR 60); mood remains in remission at the lower level. Joint psychiatric-nephrology surveillance continues; a pre-agreed plan documents the switch pathway (valproate or lamotrigine) if renal function declines further.",
      teachingPoints: [
        "In a stable long-term lithium patient, the task is protecting both the recovery AND the kidney — level-lowering beats drug-stopping in most cases.",
        "Amiloride is the targeted treatment for lithium polyuria/DI — a solvable problem that otherwise erodes quality of life and adherence.",
        "The annual panel (creatinine, TSH, calcium) is where long-term lithium care is won or lost — his declining eGFR was found because of it, not because of symptoms.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Mood Stabiliser comparison — choosing within the class",
      primaryDrug: "Lithium",
      rows: [
        {
          attribute: "Primary molecular target",
          primaryValue: "Inositol monophosphatase (depletion of PI cycle); GSK-3β (inhibition); multiple ion channels and second messengers",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "See full guide",
            },
            {
              drug: "Lamotrigine",
              value: "See full guide",
            },
            {
              drug: "Valproate",
              value: "See full guide",
            },
            {
              drug: "Oxcarbazepine",
              value: "See full guide",
            },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "18–30 hours (longer with renal impairment, in the elderly, and with dehydration).",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "—",
            },
            {
              drug: "Lamotrigine",
              value: "—",
            },
            {
              drug: "Valproate",
              value: "—",
            },
            {
              drug: "Oxcarbazepine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "See product information and class comparison.",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "See product information and class comparison.",
            },
            {
              drug: "Lamotrigine",
              value: "See product information and class comparison.",
            },
            {
              drug: "Valproate",
              value: "—",
            },
            {
              drug: "Oxcarbazepine",
              value: "—",
            },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Not typically sedating — neutral; occasionally described as 'slowing'.",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "Moderate, dose-related — partly tolerance-developing.",
            },
            {
              drug: "Lamotrigine",
              value: "Not sedating — mildly activating (morning dosing suits most).",
            },
            {
              drug: "Valproate",
              value: "Common, dose-related — often useful in acute mania.",
            },
            {
              drug: "Oxcarbazepine",
              value: "Mild-to-moderate.",
            },
          ],
        },
        {
          attribute: "Unique niche",
          primaryValue: "Anti-suicide + both-pole prophylaxis — the irreplaceable classic",
          comparisons: [
            {
              drug: "Carbamazepine",
              value: "Mania + trigeminal neuralgia + the great CYP450 inducer",
            },
            {
              drug: "Lamotrigine",
              value: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
            },
            {
              drug: "Valproate",
              value: "Mania workhorse — especially mixed states and rapid cycling; now pregnancy-governed",
            },
            {
              drug: "Oxcarbazepine",
              value: "The cleaner carbamazepine — off-label mood use with fewer interactions",
            },
          ],
        },
      ],
      takeaway: "All mood stabilisers share a core mechanism, but they differ in half-life, weight gain, sedation, and drug interactions. Choice within the class is driven by patient profile — comorbidity, age, other medications, and which side effects the patient can least afford.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Days 1–5",
      title: "Level building",
      description: "Steady state takes 5–7 days — first level check then; early effects: thirst, fine tremor, GI.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 5–10",
      title: "Early anti-manic effect",
      description: "In acute mania, psychomotor activity and irritability begin settling — slower than antipsychotics, hence combination.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Full acute response",
      description: "Mania resolves over 2–4 weeks (antipsychotic paired for speed); level adjusted to 0.8–1.2 in acute treatment.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Months 1–6",
      title: "Maintenance phase established",
      description: "Level targeted down to 0.6–0.8; the annual panel (renal, thyroid, calcium) begins; psychosocial work resumes.",
      phase: "duration",
    },
    {
      id: "t5",
      time: "Years",
      title: "The long dividend",
      description: "Relapse prevention, suicide-risk reduction, and grey-matter preservation — balanced against renal, thyroid, and weight surveillance for life.",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why do I need blood tests so often on lithium?",
      answer: "Lithium's safe dose range is narrow — too little loses the benefit, too much becomes toxic, and the kidney (which clears it entirely) can change how it handles the drug slowly over years. The level check, plus kidney, thyroid, and calcium tests, are how 70 years of patients have taken this remarkable drug safely.",
    },
    {
      question: "Which painkillers can I take?",
      answer: "Paracetamol is safe. Ibuprofen, naproxen, diclofenac and similar 'anti-inflammatory' painkillers (also called NSAIDs) make the kidneys hold on to lithium and can push levels into the toxic range — they are available without a prescription, which is exactly why we name them. Ask the pharmacist to check every time.",
    },
    {
      question: "What are the warning signs of too much lithium?",
      answer: "A shake that gets coarser, feeling sick or vomiting, walking becoming clumsy or unsteady, slurred words, or confusion. These never wait — stop the lithium that day and get a same-day level checked.",
    },
    {
      question: "What if I get a stomach bug?",
      answer: "This is the highest-risk moment: vomiting and diarrhoea dehydrate you, and the kidneys respond by reabsorbing more lithium. The rule: pause the lithium, drink fluids with a pinch of salt (ORS), and contact your team early — restarting is easy once you are rehydrated.",
    },
    {
      question: "Does lithium affect the thyroid?",
      answer: "Yes — it can lower thyroid function over the years in a significant minority of patients. This is why TSH is checked at least annually. If it happens, thyroid replacement tablets solve it completely, and most people continue lithium.",
    },
    {
      question: "I'm planning a pregnancy — what about lithium?",
      answer: "Have the conversation with your psychiatrist BEFORE trying to conceive. Lithium carries a small risk to the baby's heart (Ebstein anomaly — rare), but stopping it abruptly can be dangerous for you too. Many women with severe bipolar disorder continue lithium through pregnancy with extra scans and careful level control; the decision is individualised and always shared.",
    },
    {
      question: "Will lithium make me gain weight or feel dull?",
      answer: "Weight gain is common and manageable with early lifestyle attention. Some people describe a subtle mental 'slowing' — if that happens, checking the level and aiming for the lower maintenance range (0.6–0.8) often resolves it without losing protection.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE CG185 (Bipolar Disorder); CANMAT/ISBD Guidelines",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "6th ed. (2017), lithium monograph, p. 65",
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
        source: "FDA Prescribing Information for Lithobid (Lithium)",
      },
    ],
    reviews: [
      {
        source: "Stahl SM. The Prescriber's Guide entry for lithium — practical prescribing synthesis.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide — Lithium",
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
      name: "Carbamazepine",
      slug: "carbamazepine",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Lamotrigine",
      slug: "lamotrigine",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Valproate",
      slug: "valproate",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
    {
      name: "Oxcarbazepine",
      slug: "oxcarbazepine",
      drugClass: "Mood Stabiliser",
      relationship: "Same class (Mood Stabiliser)",
    },
  ],
  relatedConditions: [
    {
      name: "Acute mania / manic episodes of bipolar disorder",
      relationship: "primary",
    },
    {
      name: "Bipolar maintenance",
      relationship: "primary",
    },
    {
      name: "Acute bipolar depression (adjunct)",
      relationship: "alternative",
    },
    {
      name: "Major depressive disorder — augmentation",
      relationship: "primary",
    },
    {
      name: "Reduction of suicidal behaviour",
      relationship: "alternative",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Lithium",
      type: "drug",
      href: "/drugs/lithium",
      note: "The drug you're reading about",
    },
    {
      label: "Mood Stabiliser",
      type: "class",
      href: "#mechanism",
      note: "Mood Stabiliser — Lithium Salt",
    },
    {
      label: "Serotonin (5-HT)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Dopamine (DA)",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Inositol monophosphatase (depletion of PI cycle); GSK-3β (inhibition); multiple ion channels and second messengers",
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
      label: "Hippocampus",
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
      label: "Acute mania / manic episodes of bipolar disorder",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Bipolar maintenance",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Acute bipolar depression (adjunct)",
      type: "condition",
      href: "#clinical-uses",
      note: "Used clinically",
    },
    {
      label: "Lithium toxicity",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nephrogenic diabetes insipidus",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Fine tremor",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Patient Guide — Lithium",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The original and still gold-standard mood stabiliser — the only drug that prevents both poles and reduces suicide.",
    summary: "Lithium is a prescription medicine used to treat acute mania / manic episodes of bipolar disorder. It belongs to a well-studied class of medicines and works gradually — most people notice the benefit over weeks, not days.",
    mechanism: "Lithium is a simple salt — related to sodium — that has been stabilising moods for 70 years. It is uniquely good at keeping both mania and depression away and is the only psychiatric medicine proven to reduce suicide. It needs respect: the safe dose range is narrow, your kidneys clear it unchanged, and anything that dehydrates you (vomiting, diarrhoea, heat, some painkillers) can push the level dangerously high. Regular blood tests are part of taking it safely — for life.",
    sideEffects: "The most common side effects are: fine tremor, polyuria and polydipsia, nausea and gastrointestinal upset, weight gain, cognitive blunting / 'slowed' feeling, acne and psoriasis worsening. These usually appear early and many settle with time. Serious effects are uncommon but important to know: Lithium toxicity and Nephrogenic diabetes insipidus. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "Your doctor will monitor: lithium level (5–7 days after starting/dose change; then weekly × 2; then 3–6 monthly for life); renal function (creatinine/egfr) (baseline, then every 6–12 months for life; more often if impaired); thyroid function (tsh, free t4) (baseline, then every 6–12 months). Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: Severe renal impairment (eGFR < 30), Acute dehydration / sodium depletion states, Untreated thyroid disease, Addison's disease / significant adrenal insufficiency. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tell your doctor and pharmacist about everything you take — including over-the-counter and herbal products. Common interacting agents include: NSAIDs (ibuprofen, naproxen, indometacin), Thiazide diuretics, ACE inhibitors / ARBs, Dehydration (gastroenteritis, heat, exercise). Avoid alcohol unless your doctor says it is safe.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Licab",
        manufacturer: "Micro Labs",
        strengths: "300 mg capsules, 400 mg SR",
      },
      {
        name: "Lithosun SR",
        manufacturer: "Torrent",
        strengths: "300 mg, 400 mg SR",
      },
      {
        name: "Lithium carbonate (generic)",
        manufacturer: "multiple",
        strengths: "250–450 mg",
      },
    ],
    typicalDoses: "Acute mania 900–1800 mg/day (level 0.8–1.2); maintenance 600–900 mg nightly (level 0.6–0.8).",
    prescribingScenarios: [
      "Bipolar I maintenance across public and private psychiatry — the formulary backbone.",
      "Antidepressant augmentation in government district mental health programmes (cost-effective).",
      "Clozapine-associated neutropenia rescue in institute settings.",
      "Weekly level monitoring programmes in medical college labs.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
    },
    costCategory: "low",
    costNote: "Cost varies by manufacturer and region.",
    monitoring: "Level 3–6 monthly for life plus annual creatinine, TSH, calcium — in India often coordinated through district hospital labs; sick-day cards in local languages.",
    patientCounselling: [
      "Name NSAIDs in the local language — 'no ibuprofen/naproxen/diclofenac without asking'.",
      "Sick-day rules during gastroenteritis and heat waves: pause, hydrate with ORS, contact the centre.",
      "Lifelong annual tests are part of the prescription.",
      "Pregnancy plans are discussed with the psychiatrist before conception.",
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
    note: "Lithium carbonate is stocked in many Jan Aushadhi kendras — one of the cheapest essential psychotropics.",
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "extreme",
  drugFamilyNav: {
    familyName: "Mood Stabilisers",
    members: [
      {
        name: "Lithium",
        slug: "lithium",
        relationship: "This guide",
        distinguishing: "Anti-suicide + both-pole prophylaxis — the irreplaceable classic",
      },
      {
        name: "Carbamazepine",
        slug: "carbamazepine",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Mania + trigeminal neuralgia + the great CYP450 inducer",
      },
      {
        name: "Lamotrigine",
        slug: "lamotrigine",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Bipolar depression + depressive-pole prophylaxis; no-switch antidepressant mood stabiliser",
      },
      {
        name: "Valproate",
        slug: "valproate",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "Mania workhorse — especially mixed states and rapid cycling; now pregnancy-governed",
      },
      {
        name: "Oxcarbazepine",
        slug: "oxcarbazepine",
        relationship: "Same class (Mood Stabiliser)",
        distinguishing: "The cleaner carbamazepine — off-label mood use with fewer interactions",
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
      question: "Which molecular target does Lithium primarily act on?",
      options: [
        "Inositol monophosphatase (depletion of PI cycle); GSK-3β (inhibition); multiple ion channels and second messengers",
        "SERT (serotonin transporter)",
        "NET (norepinephrine transporter)",
        "D2 receptor",
      ],
      correctIndex: 0,
      explanation: "Lithium acts primarily at Inositol monophosphatase (depletion of PI cycle); GSK-3β (inhibition); multiple ion channels and second messengers. Lithium's mechanism is genuinely multi-target: it inhibits inositol monophosphatase (depleting the phosphoinositide second-messenger pool), inhibits GSK-3β (neuroprotective, circadian), and alters multiple neurotransmitter systems downstream.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which of the following is one of the most common side effects of Lithium?",
      options: ["Fine tremor", "Polyuria and polydipsia", "Nausea and gastrointestinal upset", "Weight gain"],
      correctIndex: 0,
      explanation: "Fine tremor — Fine postural hand tremor — the classic early effect; caffeine and anxiety worsen it.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the usual target dose range of Lithium for acute mania?",
      options: ["900–1800 mg/day", "Level-limited (1.2–1.5 acute max)", "900–1800 mg/day (twice that)", "There is no established dosing"],
      correctIndex: 0,
      explanation: "For acute mania: start 600–900 mg/day divided (or 900–1800 depending on preparation), target 900–1800 mg/day, maximum Level-limited (1.2–1.5 acute max). Level-guided: check at 5–7 days, target 0.8–1.2 mEq/L",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of Lithium in two sentences.",
      answer: "Lithium's mechanism is genuinely multi-target: it inhibits inositol monophosphatase (depleting the phosphoinositide second-messenger pool), inhibits GSK-3β (neuroprotective, circadian), and alters multiple neurotransmitter systems downstream. Net effect: Mood stabilisation in both directions — anti-manic, antidepressant-adjacent, relapse-preventing for both poles, and uniquely anti-suicidal; neuroprotective and possibly grey-matter preserving.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of Lithium.",
      answer: "Acute mania / manic episodes of bipolar disorder, Bipolar maintenance, Acute bipolar depression (adjunct), Major depressive disorder — augmentation. (FDA-approved uses should be distinguished from off-label uses in viva answers.)",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of Lithium and how you would manage it.",
      answer: "Lithium toxicity: The signature emergency: coarse tremor, vomiting/diarrhoea (which worsen dehydration → more toxicity), ataxia, dysarthria, confusion, seizures, coma. Levels > 2.5 mEq/L (or lower with chronic kidney injury) are life-threatening; permanent cerebellar damage can survive the episode. Management: Stop lithium; aggressive fluid and electrolyte management; haemodialysis for severe toxicity; the classic trigger audit — NSAIDs? Dehydration? New diuretic? Hot weather?",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on Lithium require?",
      answer: "Lithium level (5–7 days after starting/dose change; then weekly × 2; then 3–6 monthly for life); Renal function (creatinine/eGFR) (Baseline, then every 6–12 months for life; more often if impaired); Thyroid function (TSH, free T4) (Baseline, then every 6–12 months); Calcium (and PTH if elevated) (Baseline, then annually)",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about Lithium that separates safe prescribers from unsafe ones.",
      answer: "Two monopolies: both-pole prevention and anti-suicide — nothing newer has matched either.",
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
      checkpoint: "You now know what Lithium is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Lithium works — from molecular target to clinical effect timeline.",
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
      checkpoint: "You can prescribe Lithium safely — indications, side effects, contraindications, and monitoring are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian availability, cost context, and practical workflow for Lithium.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Lithium with alternatives.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Lithium.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017)",
    onsetTimeline: [
      "Acute mania: 1–2 weeks for initial effect (slower than antipsychotics — combine for speed).",
      "Maintenance protection: establishes over months.",
      "Antidepressant augmentation: 1–3 weeks.",
      "Anti-suicidal effect: emerges over months of maintenance treatment.",
    ],
    ifItWorks: [
      "Continue — lithium maintenance is years-long; relapse risk roughly doubles on stopping.",
      "Target the lowest effective level (0.6–0.8 for maintenance in most patients).",
      "Keep the annual panel sacred: renal, thyroid, calcium, weight.",
      "Combine with psychosocial interventions (psyeducation, regular rhythm therapy) — the combination halves relapse versus either alone.",
    ],
    ifItDoesNotWork: [
      "Confirm adherence and allow an adequate trial of Lithium (4–6 weeks at target dose) before judging response.",
      "Re-check the diagnosis and consider comorbidities before switching.",
    ],
    augmentationCombos: [
      "Antipsychotic (risperidone, olanzapine, quetiapine, aripiprazole) for acute mania speed.",
      "Quetiapine, lurasidone, or cariprazine for bipolar-depressive breakthroughs.",
      "Antidepressant + lithium in unipolar partial response (the classic augmentation).",
      "Valproate in combination for severe or mixed-episode illness.",
    ],
    testsBeforeStarting: [
      "Baseline: lithium level (after starting), renal function, TSH/T4, calcium, weight, pregnancy test where relevant; ECG if over 40 or cardiac history.",
      "Level 5–7 days after any dose change; then weekly × 2 in early treatment.",
      "Renal, thyroid, calcium every 6–12 months for life.",
    ],
    sideEffectLogic: [
      "As an element substituted for sodium, lithium's adverse effects follow from where sodium goes: kidney (polyuria, DI, CKD), thyroid (hormone release inhibition), CNS at toxic levels (the narrow index made visible), and parathyroid (calcium rise). Nothing is metabolised — every effect is lithium itself.",
    ],
    sideEffectManagement: [
      "Fine tremor: check level, reduce caffeine, propranolol if needed.",
      "Polyuria: confirm the level is not high; amiloride; maintain fluids.",
      "Nausea: take with food; sustained-release formulation; slower titration.",
      "Weight: early lifestyle structure — the trajectory starts in year one.",
    ],
    sideEffectRescue: [
      "Propranolol for tremor; amiloride for polyuria/DI; levothyroxine for hypothyroidism — all three rescue problems without abandoning lithium.",
      "Sustained-release formulation switch for GI and peak-related effects.",
    ],
    weightGain: "See product information and class comparison.",
    sedation: "Not typically sedating — neutral; occasionally described as 'slowing'.",
    dosing: [
      {
        indication: "Acute mania",
        starting: "600–900 mg/day divided (or 900–1800 depending on preparation)",
        titration: "Level-guided: check at 5–7 days, target 0.8–1.2 mEq/L",
        target: "900–1800 mg/day",
        max: "Level-limited (1.2–1.5 acute max)",
        notes: [
          "Combine with an antipsychotic for faster control",
          "12-hour trough sampling standard",
        ],
      },
      {
        indication: "Maintenance",
        starting: "600–900 mg once nightly",
        titration: "Adjust to level 0.6–0.8 mEq/L (modern target)",
        target: "600–1200 mg/day",
        max: "Level-limited (≤ 1.0 maintenance typical)",
        notes: [
          "Once-nightly dosing improves adherence and renal outcomes",
          "Lower maintenance levels preserve efficacy with fewer adverse effects",
        ],
      },
      {
        indication: "Depression augmentation (unipolar)",
        starting: "600–900 mg/day",
        titration: "Target level ~0.6–0.8",
        target: "600–900 mg/day",
        max: "Level-limited",
      },
      {
        indication: "Paediatric mania (≥7 years, specialist)",
        starting: "Weight-based initiation",
        titration: "Level-guided as adults",
        target: "Level 0.6–1.2",
        max: "Level-limited",
      },
    ],
    dosageForms: ["Standard capsules/tablets 150–600 mg", "Sustained-release tablets 300–450 mg", "Lithium citrate syrup"],
    dosingTips: [
      "Once-nightly dosing: better adherence, possibly gentler on the kidney.",
      "Name the NSAID interaction at every dispensing — 'no ibuprofen, no naproxen without checking' is a safety standard.",
      "Sick-day rules card: written instructions beat verbal ones.",
      "Aim low in maintenance (0.6–0.8) — the modern trend with preserved efficacy.",
      "Polyuria deserves treatment (amiloride), not endurance — it is the leading quality-of-life complaint.",
      "In switching TO lithium from valproate/antipsychotics: cross-titrate; FROM lithium: never abrupt (rebound mania).",
    ],
    overdose: [
      "Lithium overdose is a medical emergency at any level above ~1.5 with symptoms, and >2.5 regardless.",
      "Whole-bowel irrigation if recent ingestion; aggressive fluids; haemodialysis for severe or renal-impaired toxicity.",
      "Levels may rebound after dialysis — repeated checks required.",
    ],
    longTermUse: "Lifelong treatment for classic bipolar I — with the lifelong panel (renal, thyroid, calcium, weight) and level checks 3–6 monthly; the anti-suicide benefit accrues with years of continuation.",
    habitForming: "Not considered habit-forming — but abrupt discontinuation triggers rebound mania: taper over weeks minimum.",
    howToStop: [
      "Never stop abruptly: rebound mania and suicide risk spike in the months after discontinuation.",
      "Taper over 2–4 weeks minimum (some evidence favours months).",
      "If stopping for toxicity or kidney failure, cover with an alternative mood stabiliser before the lithium is fully withdrawn.",
      "Sick-day pauses are the exception — brief holds during dehydration are standard safety practice, not discontinuation.",
    ],
    pharmacokinetics: [
      "Half-life 18–30 h; steady state 5–7 days.",
      "Zero metabolism — 100% renal excretion unchanged.",
      "12-hour trough level is the standard sample.",
      "Clearance falls with age, dehydration, sodium loss, and interacting drugs.",
    ],
    doNotUse: [
      "Severe renal impairment without specialist co-management.",
      "Acute dehydration/sodium depletion — correct first.",
      "With NSAIDs or ACE inhibitors/thiazides without level-monitoring plans.",
      "Untreated Addison's disease.",
    ],
    specialPopulations: [
      {
        population: "Renal impairment",
        guidance: [
          "The kidney eliminates lithium entirely — dosing follows the eGFR with level guidance.",
          "Specialist co-management for progressive CKD; some stable patients continue for years with adjusted regimens.",
        ],
      },
      {
        population: "Hepatic impairment",
        guidance: [
          "No hepatic metabolism — the liver is irrelevant to lithium handling (a rare psychotropic exception).",
        ],
      },
      {
        population: "Cardiac impairment",
        guidance: [
          "Sinoatrial dysfunction reports; ECG if over 40 or cardiac history.",
          "Mild T-wave flattening is common and benign.",
        ],
      },
      {
        population: "Elderly",
        guidance: [
          "Reduce dose targets (0.4–0.7 often sufficient); clearance falls with age.",
          "Toxicity presents as delirium with 'normal' levels — the elderly can be toxic at 0.9.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Approved ≥7 for mania (specialist setting); weight-based initiation with level guidance.",
          "Aggressive hydration counselling in sports-playing teenagers.",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "Ebstein anomaly counselling before conception; high-resolution foetal echocardiography for exposed pregnancies.",
          "Many women with severe bipolar disorder continue lithium with tight level control — shared decisions, documented.",
          "Levels need re-checking each trimester (clearance changes) and postpartum (drops sharply).",
          "Breastfeeding: generally discouraged; specialist exception possible with monitoring.",
        ],
      },
      {
        population: "Surgery",
        guidance: [
          "Perioperative fluid shifts and sodium restriction alter levels — hold or reduce with anaesthesia team awareness.",
        ],
      },
    ],
    potentialAdvantages: [
      "Prevents both poles — the only agent with robust both-pole prophylaxis.",
      "The only psychiatric drug with proven anti-suicide efficacy.",
      "Augments antidepressants in unipolar partial response.",
      "Neuroprotective — grey-matter preservation on imaging.",
      "Very cheap; 70 years of experience.",
      "Raises white count (useful with clozapine).",
    ],
    potentialDisadvantages: [
      "Narrow therapeutic index with lifelong level monitoring.",
      "NSAID/diuretic/dehydration interaction minefield.",
      "Tremor, polyuria, weight gain, acne — daily quality-of-life costs.",
      "Thyroid, kidney, parathyroid surveillance for life.",
      "Teratogenicity counselling burden.",
      "Slower onset than antipsychotics in acute mania.",
    ],
    primaryTargetSymptoms: [
      "Manic episodes (acute and prophylaxis)",
      "Depressive episodes (prophylaxis and augmentation)",
      "Suicidal behaviour",
      "Aggression and impulsivity",
      "Stability of the whole bipolar course",
    ],
    pearls: [
      "Two monopolies: both-pole prevention and anti-suicide — nothing newer has matched either.",
      "Treats from above — best for euphoric mania and classic cycling; valproate for mixed and rapid-cycling.",
      "The NSAID conversation is a prescribing condition, not optional counselling.",
      "Sick-day rules save kidneys and lives — written cards outperform verbal advice.",
      "Maintenance levels trend lower (0.6–0.8) with preserved efficacy — the modern practice.",
      "Annual calcium: the forgotten fifth test (level, creatinine, TSH, calcium, weight).",
      "Amiloride solves the polyuria that quietly destroys adherence.",
      "Lithium + antidepressant in unipolar partial response: the cheapest triple-your-response move in psychiatry.",
      "Abrupt discontinuation causes rebound mania — taper is weeks-to-months, never overnight.",
      "The elderly are toxic at 'normal' levels — age adjusts the whole range downward.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-09-21",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced.",
  ],
};
