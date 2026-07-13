import type { Drug } from "../types";

/**
 * Fluoxetine — canonical drug page data.
 *
 * Structured to mirror the sertraline template exactly so every section of
 * /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for PROZAC (fluoxetine hydrochloride)
 *   - FDA Prescribing Information for SARAFEM (fluoxetine hydrochloride, PMDD)
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *
 * Last reviewed: 2026-07-13
 */
export const fluoxetine: Drug = {
  /* ---- Identity ---- */
  slug: "fluoxetine",
  genericName: "Fluoxetine",
  brandNames: ["Prozac", "Sarafem", "Prodep"],
  drugClass: "ssri",
  drugClassLabel: "SSRI",
  drugClassFullName: "Selective Serotonin Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SSRIs", "Fluoxetine"],

  /* ---- Hero / summary ---- */
  tagline:
    "The longest-acting SSRI — FDA-approved for depression, OCD, bulimia, panic disorder, and PMDD, and the only SSRI approved for paediatric depression (≥8 yrs).",
  summary:
    "Fluoxetine blocks the serotonin transporter (SERT) at the presynaptic membrane, increasing serotonin availability in the synaptic cleft. Over 2–6 weeks, downstream neuroadaptive changes — including 5-HT1A autoreceptor desensitisation and increased BDNF expression in the hippocampus — produce the clinical antidepressant and anxiolytic effects. Fluoxetine is pharmacokinetically unique among SSRIs: it is metabolised to norfluoxetine, an equally potent active metabolite with a 4–9 day half-life. The combined long half-life (effectively 1–2 weeks to steady state) gives fluoxetine the mildest discontinuation syndrome of any SSRI and makes it self-tapering — useful for adherence-poor patients and as a 'bridge' when weaning off shorter-acting SSRIs. It is the most activating SSRI, the strongest CYP2D6 inhibitor in the class, and the only SSRI approved for bulimia nervosa and for paediatric depression (≥8 years).",
  estimatedReadTime: "20 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of fluoxetine — from acute SERT blockade to chronic 5-HT1A autoreceptor desensitisation — and contrast it with the long-acting active metabolite norfluoxetine.",
    "Predict the common and serious side effects based on serotonergic pharmacology, with particular attention to fluoxetine's activating profile and CYP2D6 inhibition.",
    "Choose appropriate monitoring parameters for a patient starting fluoxetine, including the longer time to steady state.",
    "Compare fluoxetine with other SSRIs (sertraline, escitalopram, paroxetine) and select the right agent for the right patient — including when to use fluoxetine's unique properties.",
    "Recognise and manage serotonin syndrome, SIADH, and the unique CYP2D6-mediated interactions (thioridazine, pimozide).",
    "Counsel a patient on what to expect in the first 6 weeks of therapy, including the activating nature of fluoxetine and the very long washout period required before starting an MAOI.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Fluoxetine selectively blocks the serotonin transporter (SERT), increasing serotonin concentration in the synaptic cleft and enhancing serotonergic neurotransmission. Its active metabolite norfluoxetine extends the pharmacodynamic effect for 1–2 weeks after the last dose.",
    molecularTarget: "SERT (SLC6A4 — serotonin transporter)",
    effect:
      "Acute: increased synaptic serotonin. Chronic (2–6 weeks): desensitisation of 5-HT1A somatodendritic autoreceptors in the raphe nuclei, increased serotonergic throughput to the prefrontal cortex, and upregulation of BDNF in the hippocampus. Norfluoxetine extends the duration of SERT blockade well beyond the parent drug's half-life.",
    steps: [
      "Fluoxetine binds the serotonin transporter (SERT) on the presynaptic neuron, blocking reuptake of serotonin from the synaptic cleft.",
      "Acute blockade raises synaptic serotonin concentration within hours — but somatodendritic 5-HT1A autoreceptors in the raphe nuclei detect this and inhibit further serotonin release.",
      "Over 7–14 days, 5-HT1A autoreceptors gradually desensitise — removing the brake on serotonin firing.",
      "Serotonergic throughput from the raphe nuclei to the prefrontal cortex, amygdala, and hippocampus increases.",
      "Downstream neuroadaptive changes occur over 2–6 weeks: increased BDNF expression, hippocampal neurogenesis, and receptor downregulation.",
      "Hepatic N-demethylation converts fluoxetine to norfluoxetine — an equally potent SERT inhibitor with a 4–9 day half-life. Norfluoxetine accumulates over weeks, extends therapeutic effect, and is responsible for the long washout period required before MAOI initiation.",
      "These delayed adaptations — not the acute serotonin increase — correlate with the onset of clinical antidepressant and anxiolytic effects.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~60–80%, less first-pass effect than other SSRIs). Peak plasma at 6–8 hours. Food does not significantly affect absorption. Highly protein-bound (~94%). Volume of distribution ~20–45 L/kg — distributes widely including into CNS. Steady state is reached only after 1–2 months because of the long half-life of norfluoxetine.",
    halfLife:
      "Fluoxetine: 1–4 days (acute phase), 4–6 days after chronic dosing. Norfluoxetine: 4–9 days (up to 16 days in poor metabolisers). Effective half-life of the active drug + metabolite combination is ~1 week — steady state takes 4–8 weeks.",
    activeMetabolite:
      "Norfluoxetine — equally potent SERT inhibitor (similar affinity to parent). Half-life 4–9 days. Accounts for the long washout period before MAOI initiation (5 weeks recommended), the mildest discontinuation syndrome among SSRIs, and the long tail of therapeutic effect after the last dose.",
    metabolism:
      "Hepatic CYP2D6 (primary) — fluoxetine is a STRONG CYP2D6 inhibitor. Minor contributions from CYP2C9, CYP2C19, and CYP3A4. CYP2D6 poor metabolisers have substantially higher fluoxetine and norfluoxetine exposure.",
    excretion:
      "Primarily renal (~60%) as inactive metabolites; ~12% faecal. Norfluoxetine excretion is slow — detectable in plasma for up to 5 weeks after discontinuation.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic", label: "Presynaptic neuron", sublabel: "Raphe nuclei — synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT transporter", sublabel: "Normally reuptakes serotonin", variant: "target" },
      { id: "fluoxetine", label: "Fluoxetine", sublabel: "Blocks SERT (parent drug)", variant: "inhibit" },
      { id: "norfluoxetine", label: "Norfluoxetine", sublabel: "Active metabolite — also blocks SERT, half-life 4–9 days", variant: "inhibit" },
      { id: "cleft", label: "↑ Synaptic 5-HT", sublabel: "More serotonin available", variant: "output" },
      { id: "autoreceptor", label: "5-HT1A autoreceptor", sublabel: "Initially brakes firing", variant: "process" },
      { id: "desensitised", label: "Autoreceptors desensitise", sublabel: "Days 7–14 — brake removed", variant: "output" },
      { id: "pfc", label: "Prefrontal cortex", sublabel: "Mood regulation improves", variant: "output" },
      { id: "bdnf", label: "↑ BDNF + neurogenesis", sublabel: "Weeks 2–6 — full effect", variant: "output" },
    ],
    edges: [
      { from: "presynaptic", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "fluoxetine", to: "sert", type: "inhibit", label: "blocks" },
      { from: "norfluoxetine", to: "sert", type: "inhibit", label: "blocks (long-acting)" },
      { from: "fluoxetine", to: "norfluoxetine", label: "CYP2D6 N-demethylation" },
      { from: "serotonin", to: "cleft", label: "accumulates" },
      { from: "cleft", to: "autoreceptor", label: "detects" },
      { from: "autoreceptor", to: "desensitised", label: "over 7–14 days" },
      { from: "desensitised", to: "pfc", label: "increased throughput" },
      { from: "pfc", to: "bdnf", label: "weeks 2–6" },
    ],
    caption:
      "Norfluoxetine is the pharmacokinetic signature of fluoxetine. It is responsible for the 5-week MAOI washout, the mildest discontinuation syndrome of any SSRI, and the self-tapering property that makes fluoxetine useful when weaning patients off shorter-acting SSRIs.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: [
    "SERT (serotonin transporter)",
    "5-HT1A (autoreceptor, desensitises)",
    "5-HT2A / 5-HT2C",
    "5-HT3",
    "5-HT7",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // SSRIs act on the diffuse serotonergic projection system, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description:
        "First-line treatment in adults. Also FDA-approved for paediatric MDD aged 8–18 — fluoxetine and escitalopram are the only two antidepressants approved for paediatric depression.",
      ageGroup: "Adults & ≥8 years",
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD)",
      status: "fda-approved",
      description:
        "First-line pharmacotherapy. Approved in adults and paediatric patients aged 7–17. Often requires higher doses (up to 80 mg/day) than depression. Full anti-obsessional effect may take 10–12 weeks.",
      ageGroup: "Adults & ≥7 years",
    },
    {
      name: "Bulimia Nervosa",
      status: "fda-approved",
      description:
        "Only SSRI (and only medication) FDA-approved for bulimia nervosa. Reduces binge-purge frequency. Effective at 60 mg/day — higher than the typical depression dose. Benefit is independent of co-morbid depression.",
    },
    {
      name: "Panic Disorder",
      status: "fda-approved",
      description:
        "Reduces frequency and intensity of panic attacks. Fluoxetine's activating profile can initially worsen anxiety — start low (10 mg) and titrate slowly to avoid early jitteriness.",
    },
    {
      name: "Premenstrual Dysphoric Disorder (PMDD)",
      status: "fda-approved",
      description:
        "Marketed under the brand Sarafem for PMDD. Can be dosed continuously or intermittently (luteal phase only). Intermittent dosing works because PMDD onset is rapid (days). Long half-life allows continuous coverage with intermittent dosing — a unique advantage.",
    },
    {
      name: "Cataplexy in Narcolepsy",
      status: "off-label",
      description:
        "Useful for cataplexy when sodium oxybate is contraindicated or unavailable. Serotonergic agents reduce REM-related muscle atonia. Less effective than TCAs or sodium oxybate but better tolerated.",
    },
    {
      name: "Binge-Eating Disorder",
      status: "off-label",
      description:
        "Reduces binge frequency and weight in binge-eating disorder — extrapolated from the bulimia nervosa approval. Lisdexamfetamine is FDA-approved for BED and is generally preferred first-line.",
    },
    {
      name: "Treatment-resistant depression (augmentation)",
      status: "off-label",
      description:
        "Sometimes used as an augmenting agent (at low dose, e.g. 20 mg) to atypical antipsychotics or as the SSRI component of combination strategies. Olanzapine-fluoxetine combination (OFC, Symbyax) is FDA-approved for bipolar I depression and for treatment-resistant MDD.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (including phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. Because of fluoxetine + norfluoxetine's long half-life, AT LEAST 5 WEEKS must elapse between discontinuation of fluoxetine and initiation of an MAOI (the longest washout of any SSRI).",
    },
    {
      name: "Thioridazine",
      severity: "absolute",
      rationale:
        "Contraindicated because fluoxetine is a strong CYP2D6 inhibitor — coadministration raises thioridazine plasma levels dramatically, prolonging QTc and risking torsades de pointes / sudden cardiac death. Thioridazine should not be initiated until at least 5 weeks after fluoxetine discontinuation.",
    },
    {
      name: "Pimozide",
      severity: "absolute",
      rationale:
        "Contraindicated due to QTc prolongation and risk of torsades de pointes. Strong CYP2D6 inhibition by fluoxetine markedly raises pimozide plasma concentrations.",
    },
    {
      name: "Concurrent MAOI-containing products (including linezolid, methylene blue)",
      severity: "absolute",
      rationale:
        "Reinforced because linezolid and methylene blue are reversible, non-selective MAOIs that are often prescribed by non-psychiatrists — always review the full medication list before initiating fluoxetine.",
    },
    {
      name: "Known hypersensitivity to fluoxetine",
      severity: "absolute",
      rationale:
        "Anaphylaxis, angioedema, and rash have been reported. Also cross-reacts with other SSRI hypersensitivity in rare cases.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of fluoxetine in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. Fluoxetine is approved for paediatric MDD (≥8 yrs) and OCD (≥7 yrs); the risk-benefit balance was judged favourable in these specific populations, but monitoring remains mandatory.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea & GI upset",
      frequency: "very-common",
      severity: "mild",
      description:
        "Dose-dependent, typically resolves after 1–2 weeks. Taking with food reduces severity.",
      management: "Take with food. Split dosing. Consider temporary dose reduction.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "very-common",
      severity: "moderate",
      description:
        "Decreased libido, delayed orgasm/anorgasmia, erectile dysfunction. Often unreported by patients and undertreated. May persist even after discontinuation in a subset of patients (PSSD).",
      management:
        "Dose reduction if possible. Add bupropion XL 150 mg/day. Consider switch to mirtazapine or bupropion. Sildenafil for erectile component.",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Insomnia & activation",
      frequency: "very-common",
      severity: "moderate",
      description:
        "Fluoxetine is the MOST activating SSRI — insomnia, jitteriness, anxiety, and agitation are particularly common, especially in the first 2 weeks. Morning dosing is preferred. More likely to cause insomnia than somnolence (unlike paroxetine).",
      management:
        "Always dose in the morning. Start low (10 mg) in anxious patients. Consider temporary short-acting benzodiazepine cover for the first 2 weeks in panic disorder. If persistent, switch to escitalopram or sertraline.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description:
        "Usually transient in the first 1–2 weeks. Differentiate from serotonin syndrome (which includes hyperreflexia and clonus).",
      management: "Paracetamol is safe. Avoid NSAIDs (bleeding risk).",
    },
    {
      name: "Anxiety / jitteriness (especially initially)",
      frequency: "common",
      severity: "moderate",
      description:
        "Particularly common in panic disorder and GAD patients during the first 1–2 weeks. The activating profile of fluoxetine can paradoxically worsen anxiety before improving it. Distinguish from serotonin syndrome.",
      management:
        "Start at 10 mg daily for anxiety disorders and titrate up. Brief benzodiazepine cover (e.g. clonazepam 0.25–0.5 mg) for first 2 weeks may be needed. Counsel patient that this is expected and transient.",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Mild effect. Sip water, sugar-free gum.",
    },
    {
      name: "Diarrhoea",
      frequency: "common",
      severity: "mild",
      description:
        "Serotonin acts on 5-HT3 receptors in the gut. Usually transient.",
    },
    {
      name: "Sweating",
      frequency: "common",
      severity: "mild",
      description:
        "Particularly nocturnal. Mechanism unclear — likely serotonergic effect on hypothalamic thermoregulation. Distressing but benign.",
    },
    {
      name: "Anorexia & weight loss",
      frequency: "common",
      severity: "mild",
      description:
        "Unlike paroxetine (weight gain), fluoxetine is weight-neutral to weight-losing, particularly in the first 6 months. Advantageous in overweight patients; can be problematic in already-underweight patients (e.g. anorexia nervosa).",
      management: "Monitor weight. Avoid in significantly underweight patients.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Serotonin Syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis), and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of initiating, increasing, or combining serotonergic agents. Norfluoxetine's long half-life means the risk persists for weeks after fluoxetine discontinuation — relevant when adding other serotonergic drugs after stopping fluoxetine.",
      management:
        "Discontinue fluoxetine immediately. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU admission for hyperthermia >41°C.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "SIADH / Hyponatraemia",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Syndrome of inappropriate antidiuretic hormone. Risk highest in elderly, females, and during first 2 weeks. Presents as headache, nausea, confusion, seizures.",
      management:
        "Check serum sodium at baseline and within 2 weeks for high-risk patients. Fluid restrict. Hypertonic saline if seizures or Na <120 mmol/L.",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk. Particularly relevant given fluoxetine is approved for paediatric depression (≥8 yrs).",
      management:
        "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent.",
    },
    {
      name: "Abnormal bleeding",
      frequency: "uncommon",
      severity: "moderate",
      description:
        "Serotonin is stored in platelets and is essential for aggregation. SSRIs deplete platelet serotonin within 2 weeks, impairing clotting. Risk multiplied when combined with NSAIDs, aspirin, or warfarin.",
      management:
        "Caution in patients with coagulopathy or on anticoagulants. Consider GI protection if combined with NSAIDs.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description:
        "In patients with undiagnosed bipolar disorder, SSRIs can trigger a manic episode. Fluoxetine's activating profile may make this slightly more likely than with sedating SSRIs. Olanzapine-fluoxetine combination (Symbyax) is the approved formulation for bipolar I depression — fluoxetine alone is NOT used in bipolar depression.",
      management:
        "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description:
        "Seizure risk is dose-dependent. Very rare at therapeutic doses; overdose significantly increases risk.",
      management:
        "Use cautiously in patients with epilepsy. Benzodiazepines for seizure in overdose setting.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "uncommon",
      severity: "mild",
      description:
        "MILDEST among SSRIs because of fluoxetine + norfluoxetine's long half-life — fluoxetine essentially self-tapers. Symptoms (if they occur): mild dizziness, sensory disturbances, irritability. Far less frequent and less severe than with paroxetine or venlafaxine.",
      management:
        "Often no taper needed for low doses. For high-dose or long-term use, taper over 2–4 weeks (less aggressive than other SSRIs). Fluoxetine is the preferred SSRI to substitute at the END of a paroxetine or venlafaxine taper to smooth the discontinuation.",
    },
    {
      name: "Rash / allergic reactions (including erythema multiforme)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Rash occurs in ~2% of patients. Rarely progresses to erythema multiforme, Stevens-Johnson syndrome, or vasculitis. More emphasised in the Prozac label than in other SSRI labels.",
      management:
        "Discontinue fluoxetine if rash is severe, accompanied by systemic symptoms (fever, arthralgia), or mucosal involvement. Do not rechallenge.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Mood & suicidality",
      frequency:
        "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. Particularly relevant because fluoxetine is approved for paediatric depression (≥8 yrs) and OCD (≥7 yrs). Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes.",
    },
    {
      parameter: "Serum sodium",
      frequency:
        "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale:
        "SSRIs cause SIADH in ~0.5–1% of patients. Highest risk in elderly females.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 3 months, then every 6 months.",
      rationale:
        "Fluoxetine tends to be weight-neutral or cause mild weight loss (unlike paroxetine, mirtazapine, TCAs). Reassuring in overweight patients, but monitor in underweight patients (e.g. comorbid eating disorders).",
    },
    {
      parameter: "Drug interaction review",
      frequency: "Every visit, especially when adding new medications.",
      rationale:
        "Fluoxetine is a STRONG CYP2D6 inhibitor — more clinically significant interactions than sertraline. Always check for CYP2D6 substrates (TCAs, beta-blockers, antiarrhythmics, antipsychotics), thioridazine, pimozide, tramadol, and other serotonergic agents.",
    },
    {
      parameter: "Response assessment (PHQ-9 / GAD-7 / Y-BOCS)",
      frequency: "Baseline, week 4, week 8, then every 3 months.",
      rationale:
        "Quantifies response. ≥50% reduction in PHQ-9 = response. PHQ-9 <5 = remission. For OCD use Y-BOCS; for bulimia use binge-purge frequency diary.",
    },
    {
      parameter: "LFTs",
      frequency: "Baseline; only if clinically indicated.",
      rationale:
        "Hepatotoxicity is rare but reported. Monitor for jaundice, fatigue, dark urine.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism:
        "MAOIs inhibit serotonin breakdown. Combining with SERT blockade causes massive serotonergic excess → serotonin syndrome. Norfluoxetine's long half-life means the risk persists for weeks.",
      action:
        "Absolute contraindication. Wait AT LEAST 5 WEEKS after stopping fluoxetine before starting an MAOI (longest washout of any SSRI). Wait 14 days after stopping an MAOI before starting fluoxetine.",
    },
    {
      drug: "Thioridazine",
      severity: "contraindicated",
      mechanism:
        "Fluoxetine is a STRONG CYP2D6 inhibitor → markedly raises thioridazine plasma levels → dose-dependent QTc prolongation → torsades de pointes / sudden cardiac death.",
      action:
        "Never combine. Thioridazine should not be initiated until at least 5 weeks after fluoxetine discontinuation. This is a fluoxetine-SPECIFIC contraindication.",
    },
    {
      drug: "Pimozide",
      severity: "contraindicated",
      mechanism:
        "Strong CYP2D6 inhibition by fluoxetine raises pimozide levels → QTc prolongation → torsades de pointes.",
      action: "Never combine.",
    },
    {
      drug: "Tramadol",
      severity: "major",
      mechanism:
        "Tramadol is a weak serotonin–norepinephrine reuptake inhibitor and requires CYP2D6 activation to its more active opioid metabolite (O-desmethyltramadol). Fluoxetine blocks this activation AND raises serotonin syndrome risk AND lowers seizure threshold.",
      action:
        "Avoid if possible. If unavoidable, use lowest tramadol dose, monitor for serotonin syndrome AND for inadequate analgesia (because fluoxetine blocks conversion to active metabolite).",
    },
    {
      drug: "Triptans (sumatriptan, rizatriptan)",
      severity: "major",
      mechanism: "Triptans are 5-HT1B/1D agonists — additive serotonergic effect.",
      action:
        "Use cautiously. Monitor for serotonin syndrome, especially in first month of SSRI therapy.",
    },
    {
      drug: "NSAIDs & aspirin",
      severity: "moderate",
      mechanism:
        "SSRIs deplete platelet serotonin → impaired aggregation. NSAIDs cause GI mucosal damage. Combined → ~6× increased risk of upper GI bleeding.",
      action:
        "Co-prescribe gastroprotection (PPI) in elderly or those with prior GI bleed. Consider paracetamol instead.",
    },
    {
      drug: "Warfarin / DOACs",
      severity: "moderate",
      mechanism:
        "Additive bleeding risk (platelet effect + anticoagulation). Fluoxetine also inhibits CYP2C9 (minor), potentially raising warfarin levels.",
      action:
        "Monitor INR closely during SSRI initiation/discontinuation if on warfarin. No specific monitoring needed for DOACs but counsel patient.",
    },
    {
      drug: "St John's Wort",
      severity: "major",
      mechanism: "Herbal SSRI. Additive serotonergic effect.",
      action: "Avoid combination — serotonin syndrome risk.",
    },
    {
      drug: "CYP2D6 substrates (TCAs, metoprolol, propafenone, flecainide, risperidone, aripiprazole, atomoxetine, codeine)",
      severity: "major",
      mechanism:
        "Fluoxetine is a STRONG CYP2D6 inhibitor — clinically more significant than sertraline. Raises levels of all CYP2D6 substrates. Codeine is a special case: fluoxetine blocks conversion to morphine, potentially causing inadequate analgesia (rather than toxicity).",
      action:
        "Reduce dose of co-administered CYP2D6 substrates by 25–75% depending on the drug. Monitor for toxicity. For codeine, consider alternative opioid (morphine, oxycodone) not requiring CYP2D6 activation.",
    },
    {
      drug: "Alcohol",
      severity: "moderate",
      mechanism:
        "Fluoxetine does not potentiate alcohol's psychomotor effects in formal studies, but alcohol worsens depression, sleep, and judgment.",
      action:
        "Counsel to minimise or avoid alcohol, especially during initiation and titration.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Fluoxetine is generally considered safe in pregnancy — it has the longest pregnancy safety track record of any SSRI (marketed since 1987). However, it is NOT the first-choice SSRI in pregnancy (sertraline is preferred) for two reasons: (1) fluoxetine's long half-life means prolonged neonatal exposure after delivery, increasing the risk and duration of neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding); (2) some studies have suggested a small absolute increase in cardiovascular malformations with first-trimester exposure, although the data are inconsistent and confounded. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks. Do not stop fluoxetine suddenly if a patient becomes pregnant — withdrawal or relapse can be harmful. Switch to sertraline pre-conception if planning pregnancy.",
    lactation:
      "Fluoxetine is excreted in breast milk in higher concentrations than sertraline (milk/plasma ratio ~0.3 for fluoxetine + norfluoxetine combined), and norfluoxetine's long half-life means drug accumulates in the infant over weeks. Infant serum levels are often detectable. While most exposed infants have no adverse effects, cases of infant colic, irritability, and poor weight gain have been reported. Sertraline or paroxetine are preferred SSRIs during breastfeeding. If fluoxetine must be used, consider holding breastfeeding for infants <2 months or those who are premature or medically unstable. Monitor infant for irritability, feeding problems, and adequate weight gain.",
  },

  renalAdjustment:
    "No dose adjustment required in mild–moderate renal impairment. Use lower starting dose (10 mg every other day) and slower titration in severe renal impairment (CrCl <20 mL/min) — norfluoxetine clearance is reduced and the long half-life magnifies any accumulation.",

  hepaticAdjustment:
    "Reduce starting dose by 50% in hepatic impairment (Child-Pugh A/B): start at 10 mg daily, titrate slowly to 20 mg over several weeks. Severe hepatic impairment (Child-Pugh C): start at 10 mg every other day, use lowest effective dose. Both fluoxetine and norfluoxetine clearance are reduced and half-life is approximately doubled in cirrhosis.",

  /* ---- Education ---- */
  patientExplanation:
    "Fluoxetine is a medicine that helps the brain keep more of a chemical called serotonin available for longer. Serotonin is one of the chemicals your brain uses to regulate mood, anxiety, sleep, and appetite. By keeping more of it active between nerve cells, fluoxetine helps your brain's mood-regulation system work better — but this doesn't happen immediately. Most people feel some side effects in the first week or two (often nausea, sleep changes, or feeling a bit wired or jittery — fluoxetine tends to be more stimulating than other SSRIs) before the mood benefit builds up over 4–6 weeks. Fluoxetine stays in your body for a long time — its active breakdown product, norfluoxetine, lasts for over a week. This is good news for missed doses and for stopping (very mild withdrawal), but it also means you must wait at least 5 weeks after stopping fluoxetine before starting certain other antidepressants called MAOIs. It is not addictive in the way that alcohol or benzodiazepines are, but always talk to your doctor before stopping.",

  patientEducationPoints: [
    "Some early changes can happen within 1–2 weeks, but clearer mood benefit often takes 4–6 weeks or longer. Don't stop early just because you don't feel better yet.",
    "Fluoxetine is the most 'stimulating' SSRI — you may feel more awake, jittery, or have trouble sleeping in the first 1–2 weeks. Take it in the MORNING to reduce insomnia. These effects usually settle as your body adapts.",
    "If you have panic disorder or significant anxiety, your doctor may start you on a very low dose (10 mg) and increase slowly — fluoxetine can temporarily worsen anxiety before it helps.",
    "Fluoxetine stays in your body a long time. This means: (a) missed doses are less of a problem; (b) withdrawal symptoms are mild when stopping; (c) BUT you must wait AT LEAST 5 WEEKS after stopping before starting an MAOI antidepressant.",
    "Fluoxetine is not considered addictive in the way alcohol, opioids, or benzodiazepines can be, but stopping suddenly can still cause mild discontinuation symptoms. Talk to your clinician before stopping.",
    "Alcohol can worsen sleep, mood symptoms, judgment, and medication tolerability. Best avoided or minimised, especially during the first month.",
    "Tell your doctor about all other medications — fluoxetine affects how your body processes several drugs including tramadol (pain), certain heart medicines (thioridazine, pimozide), codeine, and herbal products like St John's Wort.",
    "Watch for warning signs in the first month: new or worsening agitation, irritability, anxiety, or suicidal thoughts — particularly if you're under 25. Contact your clinician immediately.",
    "Seek emergency help for signs of serotonin syndrome: high fever, confusion, sweating, agitation, tremor, muscle rigidity or twitching, fast heartbeat.",
    "If you miss a dose, take it when you remember — fluoxetine's long half-life means missed doses are less critical than with other SSRIs. Do not double up.",
  ],

  clinicalPearls: [
    "Fluoxetine's long half-life (parent + norfluoxetine ~1 week) is its single most distinctive feature — it causes the mildest discontinuation syndrome of any SSRI and 'self-tapers'. This makes it ideal for adherence-poor patients and as the bridge at the END of a paroxetine or venlafaxine taper.",
    "Fluoxetine is the MOST activating SSRI — best for lethargic, anergic, retarded depression (where patients sleep too much, eat too much, and lack energy). Worst for agitated, anxious, insomniac depression (where sertraline or escitalopram are better).",
    "Only SSRI approved for BULIMIA NERVOSA — effective at 60 mg/day, independent of co-morbid depression. Reduces both binge frequency and purging behaviour.",
    "Only SSRI approved for PAEDIATRIC DEPRESSION (≥8 yrs) — along with escitalopram (≥12 yrs). This is a frequent exam question. The benefit-to-risk ratio in paediatric MDD is narrow — close monitoring for suicidality is mandatory.",
    "Strong CYP2D6 inhibitor — more clinically significant drug interactions than sertraline or escitalopram. Always review the full medication list. Special cases: codeine loses analgesic effect (blocks conversion to morphine); thioridazine and pimozide are contraindicated (QTc); TCAs rise to toxic levels rapidly.",
    "MAOI washout after fluoxetine is 5 WEEKS — the longest of any SSRI. Never start an MAOI (including linezolid or methylene blue) until at least 5 weeks after the last fluoxetine dose. This is a frequent exam question and a real clinical trap.",
    "Treatment response expected by week 6; remission by week 12. If no response by week 6 at 20 mg, increase to 40–60 mg. For OCD, may need up to 80 mg/day and 10–12 weeks for full effect.",
    "For PMDD, can be dosed continuously OR intermittently (luteal phase only). Fluoxetine's long half-life makes intermittent dosing particularly forgiving — even if a dose is missed, norfluoxetine provides coverage. Marketed as Sarafem for this indication.",
    "Olanzapine-fluoxetine combination (OFC, brand Symbyax) is FDA-approved for bipolar I depression and for treatment-resistant MDD — the only SSRI-containing combination approved for bipolar depression. Fluoxetine ALONE should NOT be used in bipolar depression (mania risk).",
    "Generally AVOID in pregnancy as first-choice (sertraline preferred) because of the long half-life → prolonged neonatal exposure after delivery → worse neonatal adaptation syndrome. If a patient becomes pregnant on fluoxetine, do not stop abruptly — discuss switching to sertraline or continuing with monitoring.",
  ],

  examPearls: [
    "Fluoxetine has the LONGEST half-life of any SSRI — parent 1–4 days + norfluoxetine 4–9 days → effective half-life ~1 week. Mildest discontinuation syndrome. Self-tapers.",
    "Norfluoxetine is the active metabolite — equally potent SERT inhibitor, half-life 4–9 days. Responsible for: 5-week MAOI washout, mild discontinuation, long tail of therapeutic effect after stopping.",
    "Only SSRI approved for BULIMIA NERVOSA (60 mg/day). Also only SSRI approved for PAEDIATRIC DEPRESSION (≥8 yrs) — escitalopram is the other antidepressant approved for paediatrics (≥12 yrs).",
    "FDA indications (5): MDD (adults & ≥8 yrs), OCD (adults & ≥7 yrs), Bulimia, Panic Disorder, PMDD (Sarafem). Memorise the list.",
    "Mechanism: SERT blockade → ↑ synaptic 5-HT → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ raphe firing → downstream BDNF and neurogenesis (4–6 weeks). The delay between acute pharmacology and clinical effect is THE favourite SSRI question.",
    "Contraindications: MAOIs (5-week washout — longest of any SSRI), thioridazine (CYP2D6 inhibition → QTc), pimozide (QTc). The thioridazine contraindication is FLUOXETINE-SPECIFIC.",
    "Black box warning: suicidality in <25. Mandatory to counsel and document informed consent — particularly relevant because fluoxetine is approved for paediatric depression.",
    "CYP2D6 strong inhibitor — more drug interactions than sertraline. Codeine loses analgesic effect (blocks conversion to morphine). TCAs rise to toxic levels. Thioridazine/pimozide contraindicated.",
    "Most ACTIVATING SSRI — best for lethargic/retarded depression (hypersomnia, hyperphagia, anergia). Worst for agitated/anxious/insomniac depression. Always dose in the morning.",
    "Serotonin syndrome triad: mental status change + autonomic instability + neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset within 24h. Treat with cyproheptadine.",
    "MAOI washout comparison: fluoxetine = 5 weeks (longest); sertraline/escitalopram/citalopram/paroxetine/fluvoxamine = 14 days (2 weeks); venlafaxine = 7 days.",
    "Weight effect: fluoxetine = weight-neutral / mild loss (unlike paroxetine = weight gain). Useful in overweight depressed patients.",
    "Pregnancy: NOT first-choice SSRI (sertraline preferred) — long half-life means prolonged neonatal exposure. Lactation: higher infant drug levels than sertraline — prefer sertraline or paroxetine if breastfeeding.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "FLU-O-X-E-T-I-N-E — Fluoxetine's Unique Traits",
      trick: "F = First SSRI marketed (1987); L = Longest half-life (self-tapers); U = Under 8 not approved (paediatric MDD is ≥8); O = Only SSRI for bulimia; X = X-cretion slow (5-week MAOI washout); E = Energising (most activating SSRI); T = Thioridazine contraindicated (QTc); I = Inhibits CYP2D6 (strongly); N = Norfluoxetine (active metabolite); E = Eating disorders (bulimia, BED off-label).",
      remembers: "The complete one-word mnemonic for fluoxetine's distinguishing features. Use this to recall half-life, indications, contraindications, CYP, and metabolite in one shot.",
    },
    {
      title: "5 FDA Indications — 'My Old Brain Panics Premenstrually'",
      trick: "MDD · OCD · Bulimia · Panic · PMDD — 'My Old Brain Panics Premenstrually'",
      remembers: "Fluoxetine's 5 FDA-approved indications. Note: PMDD is under Sarafem brand; Bulimia is unique to fluoxetine among SSRIs.",
    },
    {
      title: "MAOI Washout Lengths — '5-2-1'",
      trick: "5 weeks (Fluoxetine) · 2 weeks (most other SSRIs — sertraline, paroxetine, citalopram, escitalopram, fluvoxamine) · 1 week (venlafaxine)",
      remembers: "The three MAOI washout lengths you need to know. Fluoxetine is the outlier because of norfluoxetine's long half-life.",
    },
    {
      title: "Serotonin Syndrome Triad",
      trick: "Mental · Autonomic · Neuromuscular — think 'MAN'",
      remembers: "Altered mental state + Autonomic instability + Neuromuscular excitation (clonus, hyperreflexia). Onset within 24h.",
    },
    {
      title: "NMS vs Serotonin Syndrome",
      trick: "NMS = 'Lead pipe' rigidity, bradyreflexia, NORMAL pupils. SS = Clonus, hyperreflexia, MYDRIASIS, diarrhoea.",
      remembers: "The single most testable distinction. NMS is dopaminergic blockade; SS is serotonergic excess.",
    },
    {
      title: "CYP2D6 'Codeine Loses Power'",
      trick: "Fluoxetine (and paroxetine) = strong CYP2D6 inhibitors → Codeine Loses Power (no conversion to morphine → no analgesia). Also raises Thioridazine, Pimozide, TCAs → toxicity.",
      remembers: "Why fluoxetine causes codeine to fail AND why thioridazine/pimozide are contraindicated. Strong CYP2D6 inhibition is fluoxetine's signature interaction profile.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: SSRI — selectively blocks SERT → ↑ synaptic serotonin. The prototype SSRI (first marketed 1987).",
    "Mechanism: Acute SERT blockade (hours) → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ BDNF + neurogenesis (4–6 weeks). The delay explains why patients feel worse before better.",
    "Active metabolite: NORFLUOXETINE — equally potent SERT inhibitor, half-life 4–9 days. Extends therapeutic effect for 1–2 weeks after stopping.",
    "Half-life: 1–4 days (parent) + 4–9 days (norfluoxetine) → effective ~1 week. Steady state takes 4–8 weeks. Longest of any SSRI.",
    "5 FDA indications: MDD (adults & ≥8 yrs), OCD (adults & ≥7 yrs), Bulimia, Panic Disorder, PMDD (Sarafem). Only SSRI approved for bulimia AND for paediatric depression.",
    "Onset: 4–6 weeks for depression; 8–12 weeks for anxiety/OCD. PMDD onset is days (intermittent dosing works).",
    "Common side effects: nausea, sexual dysfunction (30–50%), INSOMNIA/ACTIVATION (more than other SSRIs), headache, sweating, diarrhoea, weight loss.",
    "Serious: serotonin syndrome, SIADH (elderly females), suicidality <25 (black box), bleeding (platelet), activation of mania, seizures, rash (including rare SJS).",
    "Contraindications: MAOIs (5-week washout — longest), thioridazine (CYP2D6 → QTc), pimozide (QTc), hypersensitivity.",
    "Interactions: MAOIs (fatal, 5-week washout), thioridazine/pimozide (QTc via CYP2D6), tramadol/triptans/St John's Wort (serotonin syndrome), NSAIDs/warfarin (bleeding), strong CYP2D6 inhibition (raises TCAs, blocks codeine activation).",
    "Pregnancy: Safe but NOT first-choice (sertraline preferred) — long half-life → prolonged neonatal exposure. Lactation: prefer sertraline or paroxetine (lower infant drug levels).",
    "Clinical positioning: best for lethargic/retarded depression, adherence-poor patients (forgiving of missed doses), bulimia, paediatric depression. Worst for agitated/anxious depression or patients on many CYP2D6 substrates.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Bulimia nervosa in a 22-year-old woman — using fluoxetine's unique indication",
      presentation:
        "A 22-year-old university student presents with 14 months of recurrent binge-purge episodes, menstrual irregularity, and dental erosion, seeking help after her boyfriend noticed blood in the bathroom sink.",
      history:
        "Ananya, a 22-year-old engineering student, presents to her GP with a 14-month history of recurrent episodes of binge eating followed by self-induced vomiting. Binges occur 4–6 times per week, typically in the evening after lectures, involving consumption of 2000–3000 kcal in 30 minutes followed by guilt and purging. She reports loss of control during binges, secretive eating, and preoccupation with body shape and weight. She uses laxatives occasionally but no diuretics. Menstrual periods have become irregular (last 3 months) and her dentist recently noted enamel erosion on the lingual surface of her front teeth. She describes her mood as 'up and down' — low after binges, normal between. BMI 22.4 (normal range). No prior psychiatric history. No medical comorbidities. Mother has a history of anxiety. Patient drinks alcohol 4–6 units/week, no recreational drugs, no regular medications except occasional paracetamol. She is distressed, motivated to stop, and has tried CBT-based self-help apps without success.",
      examination:
        "Alert, oriented, cooperative but embarrassed. Speech normal. Mood '5/10', affect congruent. No suicidal ideation. No body dysmorphic delusions. BMI 22.4 (normal). BP 108/68, HR 64 (slightly bradycardic — assess for electrolyte effects of purging). Calluses on the dorsal surface of the right hand (Russell's sign — from inducing vomiting). Mild bilateral parotid enlargement. Dental erosion on lingual surfaces of upper incisors. No lanugo. ECG: normal sinus rhythm, QTc 410 ms (normal). Labs requested: serum potassium 3.3 mmol/L (mild hypokalaemia from purging), serum sodium normal, magnesium normal, amylase slightly elevated (parotid stimulation), TSH normal, FBC normal, LFTs normal. Urine pregnancy test negative.",
      diagnosis:
        "Bulimia Nervosa, severe (DSM-5: 4–6 binge-purge episodes/week = severe threshold ≥4/week; ICD-11 equivalent). Differential: anorexia nervosa binge-purge subtype (BMI must be <18.5 — excluded here); binge-eating disorder (no compensatory purging — excluded); major depressive disorder with atypical features (secondary to bulimia rather than primary); borderline personality disorder (consider if interpersonal instability and self-harm emerge).",
      rationale:
        "Fluoxetine is the ONLY medication FDA-approved for bulimia nervosa and is recommended as first-line pharmacotherapy by NICE and APA guidelines. Chosen because: (1) only SSRI with proven anti-bulimic efficacy at 60 mg/day (higher than typical depression dose); (2) benefit is independent of co-morbid mood symptoms (works even in non-depressed bulimia); (3) fluoxetine's mild weight-loss effect is acceptable here (BMI normal — no anorexia concern); (4) activating profile helps counter the lethargy and 'brain fog' Ananya describes post-binge; (5) once-daily dosing and forgiving missed-dose profile suit a university student. CBT-ED (cognitive behavioural therapy for eating disorders) is the OTHER first-line treatment and should be combined with fluoxetine for best outcomes.",
      management:
        "Started fluoxetine 20 mg every morning with food. Plan: titrate to 40 mg at day 7, then 60 mg at day 14 (target dose for bulimia). Started CBT-ED referral (16–20 sessions over 4–5 months). Counseled: (1) full anti-bulimic effect may take 6–8 weeks at target dose; (2) common early side effects (nausea, insomnia, jitteriness) — take in morning, with food; (3) NOT a weight-loss drug — modest weight effect only; (4) does NOT replace therapy — combination is best; (5) avoid alcohol; (6) watch for agitation or new suicidal thoughts (under 25); (7) serum potassium 3.3 mmol/L needs recheck — nutritional counselling and oral potassium-rich foods; if <3.0 or symptomatic, consider oral potassium replacement. Safety plan with crisis contacts (Tele-MANAS 14416). Schedule: review at 2 weeks (tolerability + suicidality + electrolytes), 4 weeks (early response — binge diary review), 8 weeks (full response assessment), then monthly.",
      outcome:
        "Week 2: tolerated fluoxetine titration to 60 mg well. Mild nausea resolved by day 10. Serum potassium normalised (3.8 mmol/L) after dietary counselling. No suicidality. Binge frequency unchanged at week 2 (expected — too early). Week 4: binge-purge episodes down from 4–6/week to 2–3/week (early response). CBT-ED sessions begun — patient engaging well. Week 8: binge-purge episodes down to 0–1/week (treatment response). Mood improved (PHQ-9 from 11 to 5). Menstrual cycles regularising. Dental erosion stable. Week 16 (4 months): complete abstinence from binge-purge for 6 weeks. CBT-ED completed. Plan: continue fluoxetine 60 mg for at least 9 more months (12 months total from remission), then reassess. Ananya restarted her hobbies and reported improved concentration in coursework.",
      teachingPoints: [
        "Fluoxetine is the ONLY medication FDA-approved for bulimia nervosa — and the effective dose (60 mg/day) is higher than for depression (20 mg/day). This is a classic exam pearl.",
        "Benefit is INDEPENDENT of co-morbid depression — fluoxetine reduces binge-purge frequency in non-depressed patients too, suggesting the anti-bulimic effect is not simply an antidepressant effect.",
        "CBT-ED (cognitive behavioural therapy for eating disorders) is the other first-line treatment. Combination (fluoxetine + CBT-ED) produces better outcomes than either alone — pharmacotherapy alone is rarely sufficient.",
        "Always check electrolytes in bulimia — vomiting causes hypokalaemia, hypochloraemia, and metabolic alkalosis. Severe hypokalaemia can cause QTc prolongation and arrhythmia. Recheck after starting treatment if purging continues.",
        "Russell's sign (calluses on the dorsum of the hand from inducing vomiting) and dental erosion on the lingual surfaces of upper teeth are classic exam physical findings of bulimia.",
        "Continue treatment for at least 12 months after remission — relapse rates are high if stopped earlier. Fluoxetine's long half-life makes stopping easier than with other SSRIs if treatment is discontinued.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Fluoxetine vs Sertraline vs Escitalopram vs Paroxetine",
      primaryDrug: "Fluoxetine",
      rows: [
        {
          attribute: "Half-life",
          primaryValue: "1–4 days (parent) + 4–9 days (norfluoxetine) — LONGEST",
          comparisons: [
            { drug: "Sertraline", value: "26 hours" },
            { drug: "Escitalopram", value: "27–32 hours" },
            { drug: "Paroxetine", value: "21 hours (shortest)" },
          ],
        },
        {
          attribute: "Active metabolite",
          primaryValue: "Norfluoxetine — equally potent SERT inhibitor, half-life 4–9 days",
          comparisons: [
            { drug: "Sertraline", value: "N-desmethylsertraline (1/10th potency, minimal clinical contribution)" },
            { drug: "Escitalopram", value: "S-demethylcitalopram (weak activity)" },
            { drug: "Paroxetine", value: "None clinically significant" },
          ],
        },
        {
          attribute: "Time to steady state",
          primaryValue: "4–8 weeks (longest of any SSRI)",
          comparisons: [
            { drug: "Sertraline", value: "~1 week" },
            { drug: "Escitalopram", value: "~1 week" },
            { drug: "Paroxetine", value: "~1 week" },
          ],
        },
        {
          attribute: "MAOI washout required",
          primaryValue: "5 WEEKS (longest of any SSRI)",
          comparisons: [
            { drug: "Sertraline", value: "2 weeks" },
            { drug: "Escitalopram", value: "2 weeks" },
            { drug: "Paroxetine", value: "2 weeks" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "MILDEST (self-tapers due to long half-life)",
          comparisons: [
            { drug: "Sertraline", value: "Mild–moderate" },
            { drug: "Escitalopram", value: "Mild–moderate" },
            { drug: "Paroxetine", value: "WORST (shortest half-life)" },
          ],
        },
        {
          attribute: "Sedation vs activation",
          primaryValue: "MOST activating — best for lethargic depression",
          comparisons: [
            { drug: "Sertraline", value: "Mildly activating" },
            { drug: "Escitalopram", value: "Neutral" },
            { drug: "Paroxetine", value: "MOST sedating" },
          ],
        },
        {
          attribute: "Weight effect",
          primaryValue: "Weight-neutral / mild weight LOSS",
          comparisons: [
            { drug: "Sertraline", value: "Mild weight gain" },
            { drug: "Escitalopram", value: "Mild weight gain" },
            { drug: "Paroxetine", value: "MOST weight gain" },
          ],
        },
        {
          attribute: "Sexual dysfunction",
          primaryValue: "Common (30–40%)",
          comparisons: [
            { drug: "Sertraline", value: "Common (30–40%)" },
            { drug: "Escitalopram", value: "Common (30–40%)" },
            { drug: "Paroxetine", value: "Highest (40–50%)" },
          ],
        },
        {
          attribute: "CYP inhibition",
          primaryValue: "STRONG CYP2D6 inhibitor (most interactions in class)",
          comparisons: [
            { drug: "Sertraline", value: "Mild CYP2D6" },
            { drug: "Escitalopram", value: "Minimal (lowest interaction profile)" },
            { drug: "Paroxetine", value: "Strong CYP2D6" },
          ],
        },
        {
          attribute: "Pregnancy safety",
          primaryValue: "Safe but NOT first-choice (long half-life → prolonged neonatal exposure)",
          comparisons: [
            { drug: "Sertraline", value: "SSRI of choice in pregnancy" },
            { drug: "Escitalopram", value: "Safe" },
            { drug: "Paroxetine", value: "AVOID in 1st trimester (cardiac defects)" },
          ],
        },
        {
          attribute: "Lactation",
          primaryValue: "Detectable infant drug levels — prefer sertraline/paroxetine",
          comparisons: [
            { drug: "Sertraline", value: "SSRI of choice (lowest milk transfer)" },
            { drug: "Escitalopram", value: "Acceptable" },
            { drug: "Paroxetine", value: "Acceptable (low milk transfer)" },
          ],
        },
        {
          attribute: "Unique FDA indications",
          primaryValue: "Bulimia nervosa (only SSRI); paediatric depression ≥8 yrs (with escitalopram)",
          comparisons: [
            { drug: "Sertraline", value: "PTSD (only SSRI)" },
            { drug: "Escitalopram", value: "GAD (12–17 yrs)" },
            { drug: "Paroxetine", value: "Hot flushes in breast-cancer survivors (off-label but best evidence)" },
          ],
        },
        {
          attribute: "Best-fit patient",
          primaryValue: "Lethargic/retarded depression, adherence-poor patients, bulimia, paediatric MDD (≥8)",
          comparisons: [
            { drug: "Sertraline", value: "All-rounder, pregnancy, anxiety disorders" },
            { drug: "Escitalopram", value: "Patients on complex regimens (lowest CYP interactions)" },
            { drug: "Paroxetine", value: "Generally avoid — worst discontinuation, most weight gain, contraindicated in pregnancy" },
          ],
        },
      ],
      takeaway:
        "Fluoxetine = the long-acting, activating, self-tapering SSRI. Best when: (a) patient has lethargic/retarded depression; (b) adherence is poor (forgiving of missed doses); (c) bulimia or paediatric depression (≥8 yrs); (d) as a 'bridge' at the end of a paroxetine/venlafaxine taper. Worst when: patient has agitated/anxious depression, is on many CYP2D6 substrates (especially thioridazine, pimozide, codeine), or is pregnant/breastfeeding (prefer sertraline). Sertraline = best all-rounder (especially in pregnancy and when interactions matter). Escitalopram = best if patient is on many other drugs (lowest CYP interactions). Paroxetine = generally avoid — worst discontinuation, most weight gain, contraindicated in pregnancy, strongest CYP2D6 — but useful for severe hot flushes in breast-cancer survivors.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute SERT blockade",
      description:
        "Fluoxetine blocks the serotonin transporter within hours. Synaptic serotonin rises. Side effects (nausea, headache, INSOMNIA, jitteriness, activation — more pronounced than other SSRIs) often appear here. Patients frequently feel worse before they feel better. Dose in the morning to reduce insomnia.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "5-HT1A autoreceptor desensitisation begins; norfluoxetine starts accumulating",
      description:
        "Somatodendritic 5-HT1A autoreceptors in the raphe nuclei begin to desensitise. Serotonin release toward the prefrontal cortex gradually increases. Sleep, appetite, and energy often improve first — before mood. Norfluoxetine begins to accumulate, extending SERT blockade.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Neuroadaptive changes; norfluoxetine nears therapeutic levels",
      description:
        "BDNF expression rises in the hippocampus. Postsynaptic receptor downregulation occurs. Early mood improvement becomes noticeable in many patients. Sexual side effects typically emerge here. Norfluoxetine concentration approaches 50% of steady state.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "Steady-state serotonin levels and full downstream adaptations achieved for most patients. Mood, anxiety, and energy typically reach maximum improvement for depression. Side effects usually stabilise. Note: because of the long half-life, FULL steady state takes 4–8 weeks — slightly later than other SSRIs.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 8–12",
      title: "Full therapeutic effect (anxiety, OCD); full steady state reached",
      description:
        "Anxiety disorders, panic, and OCD often take 8–12 weeks for full response — slower than depression. OCD may require doses up to 80 mg/day. By week 8, fluoxetine + norfluoxetine have reached complete steady state.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months 3–6",
      title: "Maintenance & relapse prevention",
      description:
        "Continued neuroplastic changes. Continue treatment for 6–12 months after the first depressive episode, longer (often indefinite) for recurrent episodes, OCD, bulimia, or chronic anxiety disorders. For bulimia: continue at least 12 months from remission given high relapse rates.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Self-tapering withdrawal",
      description:
        "Because of norfluoxetine's long half-life (4–9 days), fluoxetine essentially self-tapers. Discontinuation syndrome is the MILDEST of any SSRI. Often no formal taper is needed for low doses. For high-dose or long-term use, taper over 2–4 weeks. CRITICAL: wait AT LEAST 5 WEEKS after stopping before starting an MAOI — norfluoxetine is detectable for up to 5 weeks.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does fluoxetine take to work?",
      answer:
        "Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks or longer for depression. For anxiety disorders, OCD, and bulimia, full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet. Because fluoxetine and its breakdown product (norfluoxetine) take 4–8 weeks to reach full steady state in your body, it can take slightly longer than some other antidepressants to show complete benefit.",
    },
    {
      question: "Why do I feel more anxious or jittery since starting fluoxetine?",
      answer:
        "Fluoxetine is the most 'stimulating' or 'activating' SSRI — it can cause temporary jitteriness, anxiety, insomnia, or restlessness in the first 1–2 weeks, especially if you have panic disorder or significant anxiety. This is usually temporary and improves as your body adapts. Taking the medicine in the morning, starting at a low dose, and using a slow titration can help. If symptoms are severe, persistent, or include new suicidal thoughts, contact your clinician immediately.",
    },
    {
      question: "Is fluoxetine addictive?",
      answer:
        "Fluoxetine is not addictive in the way that alcohol, opioids, or benzodiazepines can be — it does not cause cravings, escalating use, or intoxication. Because fluoxetine has a long half-life (its breakdown product stays in your body for over a week), withdrawal symptoms are the mildest of any SSRI. Often no formal taper is needed. However, always talk to your doctor before stopping any antidepressant.",
    },
    {
      question: "Why do I have to wait 5 weeks after stopping fluoxetine before starting an MAOI?",
      answer:
        "Fluoxetine is broken down in your liver to norfluoxetine, an active breakdown product that stays in your body for 4–9 days (and is detectable for up to 5 weeks after the last dose). MAOIs interact dangerously with any remaining fluoxetine/norfluoxetine and can cause a life-threatening condition called serotonin syndrome. The 5-week washout is the longest of any SSRI — this is a direct consequence of fluoxetine's long half-life.",
    },
    {
      question: "Will it affect my sex life?",
      answer:
        "Possibly. Sexual side effects — decreased libido, delayed orgasm, erectile dysfunction — affect 30–50% of people on SSRIs and are the most common reason people stop them. These are usually reversible on discontinuation, but in a small subset of patients they may persist (PSSD). If this bothers you, talk to your clinician — adding bupropion or switching to a different medication often helps.",
    },
    {
      question: "What if I'm pregnant or breastfeeding?",
      answer:
        "Fluoxetine has the longest safety track record of any SSRI (used since 1987) and is generally considered safe in pregnancy. However, it is NOT the first-choice SSRI in pregnancy — sertraline is usually preferred because fluoxetine's long half-life means prolonged exposure to the baby after delivery, which can cause neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding). If you are planning pregnancy, discuss switching to sertraline. If you become pregnant on fluoxetine, do NOT stop abruptly — talk to your obstetrician and psychiatrist. For breastfeeding, sertraline or paroxetine are preferred (lower infant drug levels).",
    },
    {
      question: "Can I drink alcohol while taking fluoxetine?",
      answer:
        "Alcohol can worsen sleepiness, mood symptoms, judgment, and medication tolerability. While not strictly contraindicated, it's best minimised or avoided — particularly during the first month while your body is adapting to the medication.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Take the missed dose as soon as you remember. Because fluoxetine and norfluoxetine have long half-lives, missed doses are less critical than with other SSRIs — you have a wider window. Do not double up to make up for a missed dose. If it's close to your next scheduled dose, just take the next dose as normal.",
    },
  ],

  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source:
          "NICE Clinical Guideline CG91 — Depression in adults: recognition and management",
      },
      {
        source:
          "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder, 3rd edition",
      },
      {
        source:
          "NICE Clinical Guideline NG69 — Eating disorders: recognition and treatment (covers bulimia nervosa)",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents",
      },
      {
        source:
          "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
        section: "Section V — Pharmacotherapy of Mood Disorders",
      },
      {
        source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition",
        section: "Chapter 36 — Psychopharmacology",
      },
    ],
    trials: [
      {
        source:
          "Cipriani A et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366.",
        section: "The definitive SSRI head-to-head meta-analysis",
      },
      {
        source:
          "Fluoxetine Bulimia Nervosa Collaborative Study Group. Fluoxetine in the treatment of bulimia nervosa: a multicenter, placebo-controlled, double-blind trial. Arch Gen Psychiatry 1992;49:139-147.",
        section: "Landmark RCT establishing fluoxetine 60 mg/day for bulimia",
      },
    ],
    reviews: [
      {
        source:
          "FDA Prescribing Information — PROZAC (fluoxetine hydrochloride)",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/018936s108lbl.pdf",
      },
      {
        source:
          "FDA Prescribing Information — SARAFEM (fluoxetine hydrochloride, for PMDD)",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/021285s016lbl.pdf",
      },
      {
        source: "MIMS India — Fluoxetine (Prodep, Flunil)",
        section: "India-specific prescribing information",
      },
    ],
    patientResources: [
      {
        source: "Royal College of Psychiatrists — Patient information on SSRIs",
        url: "https://www.rcpsych.ac.uk/mental-health/treatments-and-wellbeing/antidepressants",
      },
      {
        source: "Tele-MANAS (National Mental Health Helpline, India) — 14416",
        url: "tel:14416",
      },
      {
        source: "NIMH (National Institute of Mental Health) — Depression brochure",
        url: "https://www.nimh.nih.gov/health/publications/depression",
      },
    ],
  },

  relatedDrugs: [
    {
      name: "Sertraline",
      slug: "sertraline",
      drugClass: "SSRI",
      relationship:
        "Same class. Shorter half-life (26h) → moderate discontinuation syndrome. SSRI of choice in pregnancy/lactation. Mild CYP2D6 inhibitor (fewer interactions than fluoxetine). Only SSRI approved for PTSD. Less activating — better for anxious/agitated depression.",
    },
    {
      name: "Escitalopram",
      drugClass: "SSRI",
      relationship:
        "Same class. S-enantiomer of citalopram. Lowest CYP interaction profile — preferred in patients on complex regimens. QTc prolongation at higher doses (>20 mg) — avoid in long-QT. Approved for paediatric depression (≥12 yrs) along with fluoxetine (≥8 yrs).",
    },
    {
      name: "Paroxetine",
      drugClass: "SSRI",
      relationship:
        "Same class. Shortest half-life (21h) → WORST discontinuation syndrome. Most sedating. Strong CYP2D6 inhibitor (like fluoxetine). Most anticholinergic. Highest risk of weight gain. Best-studied for hot flushes in breast-cancer survivors. Contraindicated in pregnancy (cardiac defects).",
    },
    {
      name: "Citalopram",
      drugClass: "SSRI",
      relationship:
        "Same class. Racemic mixture (escitalopram is the S-enantiomer). Dose-dependent QTc prolongation — max 40 mg/day (20 mg in elderly). Less CYP2D6 inhibition than fluoxetine.",
    },
    {
      name: "Fluvoxamine",
      drugClass: "SSRI",
      relationship:
        "Same class. Preferred for paediatric OCD. Strong CYP1A2 inhibition (fluoxetine is CYP2D6) — interacts with caffeine, theophylline, clozapine. Shorter half-life than fluoxetine.",
    },
    {
      name: "Venlafaxine",
      drugClass: "SNRI",
      relationship:
        "Alternative class. Serotonin-norepinephrine reuptake inhibitor. May work when SSRI fails. Dose-dependent: <150 mg/day mostly serotonergic; >150 mg/day adds noradrenergic effect. Watch BP — can cause hypertension. Short half-life → severe discontinuation syndrome (worse than fluoxetine).",
    },
    {
      name: "Bupropion",
      drugClass: "NDRI",
      relationship:
        "Augmentation partner. Norepinephrine-dopamine reuptake inhibitor. Adding 150 mg XL to an SSRI is first-line augmentation for partial response and reverses SSRI-induced sexual dysfunction. Avoid in seizure disorder and eating disorders (lowered seizure threshold in bulimia — relevant if combining with fluoxetine for bulimia).",
    },
    {
      name: "Mirtazapine",
      drugClass: "NaSSA",
      relationship:
        "Augmentation partner. Noradrenergic and specific serotonergic antidepressant. Adding 15–30 mg at night improves sleep and appetite and may reverse SSRI-induced sexual dysfunction. Sedating — give at night. Causes weight gain (contrast with fluoxetine's weight-loss effect).",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Obsessive-Compulsive Disorder", relationship: "primary" },
    { name: "Bulimia Nervosa", relationship: "primary" },
    { name: "Panic Disorder", relationship: "primary" },
    { name: "Premenstrual Dysphoric Disorder", relationship: "primary" },
    { name: "Binge-Eating Disorder", relationship: "off-label" },
    { name: "Cataplexy in Narcolepsy", relationship: "off-label" },
    { name: "Bipolar I Depression (as olanzapine-fluoxetine combination)", relationship: "primary" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Fluoxetine", type: "drug", href: "/drugs/fluoxetine", note: "The drug you're reading about" },
    { label: "SSRI", type: "class", href: "#mechanism", note: "Selective Serotonin Reuptake Inhibitor" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "The neurotransmitter being modulated" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Molecular target — blocked by both fluoxetine AND norfluoxetine" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood regulation" },
    { label: "Amygdala", type: "brain-region", href: "#brain-regions", note: "Anxiety & fear processing" },
    { label: "Hippocampus", type: "brain-region", href: "#brain-regions", note: "Memory & neurogenesis" },
    { label: "Depression", type: "condition", href: "#clinical-uses", note: "Primary indication — including paediatric ≥8 yrs" },
    { label: "OCD", type: "condition", href: "#clinical-uses", note: "Approved in adults & children ≥7 yrs" },
    { label: "Bulimia Nervosa", type: "condition", href: "#clinical-uses", note: "Only SSRI approved for bulimia" },
    { label: "Panic Disorder", type: "condition", href: "#clinical-uses", note: "FDA-approved — start low (10 mg) to avoid early activation" },
    { label: "PMDD", type: "condition", href: "#clinical-uses", note: "Marketed as Sarafem; intermittent or continuous dosing" },
    { label: "Sexual Dysfunction", type: "side-effect", href: "#side-effects", note: "Most common reason for discontinuation" },
    { label: "Serotonin Syndrome", type: "side-effect", href: "#side-effects", note: "Life-threatening — risk persists for weeks after stopping due to norfluoxetine" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A long-acting antidepressant that helps your brain keep more of a mood-regulating chemical (serotonin) available for longer. Often the easiest SSRI to stop because of its long half-life.",
    summary:
      "Fluoxetine is one of the oldest and most widely used antidepressants in the world (marketed since 1987). It belongs to a class called SSRIs. It doesn't make you happy — it helps your brain's natural mood-regulation system work better. Most people feel some side effects in the first week or two (especially feeling 'wired' or having trouble sleeping — fluoxetine is the most stimulating of the SSRIs) before the mood benefit builds up over 4–6 weeks. A unique feature: fluoxetine stays in your body a long time (over a week after your last dose), which means missed doses are less of a problem and stopping is usually easy — BUT you must wait 5 weeks after stopping before starting certain other antidepressants called MAOIs.",
    mechanism:
      "Your brain uses a chemical called serotonin to regulate mood, anxiety, sleep, and appetite. Normally, after serotonin is released between nerve cells, it gets quickly taken back up (recycled). Fluoxetine blocks this recycling, so more serotonin stays available between the nerve cells for longer. Over 4–6 weeks, this helps your brain's mood-regulation system work better — but it doesn't happen immediately. Fluoxetine is broken down in your liver into another active substance called norfluoxetine, which does the same job and stays in your body for over a week. This is why missed doses are less of a problem and why stopping fluoxetine is usually easier than other SSRIs.",
    sideEffects:
      "Most people get some side effects in the first 1–2 weeks — fluoxetine is the most 'stimulating' SSRI, so you may notice feeling more awake, jittery, anxious, or having trouble sleeping. Take it in the morning to reduce insomnia. These effects usually settle as your body adapts. Sexual side effects (lower interest or difficulty reaching orgasm) are common and can persist — talk to your doctor if this bothers you, as there are solutions. Weight is usually neutral or may decrease slightly. Serious side effects are rare but you should know the signs: high fever with confusion and shaking could be serotonin syndrome (emergency), and feeling worse or having new suicidal thoughts in the first month needs immediate medical review.",
    monitoring:
      "You'll have check-ins with your doctor at 2 weeks, 4 weeks, and 6 weeks to see how you're responding. They'll ask about your mood, side effects, and any new thoughts. You may be asked to fill in a short questionnaire (PHQ-9 for depression, Y-BOCS for OCD, or a binge-purge diary for bulimia) so your progress can be tracked. If you're over 65, your doctor may check your blood sodium in the first 2 weeks. If you're on other medications, your doctor will review them carefully — fluoxetine affects how your body processes several common drugs.",
    contraindications:
      "Don't take fluoxetine if you've taken a MAOI antidepressant in the last 14 days (dangerous combination). After stopping fluoxetine, you must wait AT LEAST 5 WEEKS before starting an MAOI antidepressant — this is longer than for any other SSRI. Never combine fluoxetine with thioridazine or pimozide (heart rhythm medicines) — fluoxetine can dangerously raise their levels. Tell your doctor about all other medicines you take — especially tramadol (pain), codeine, certain antibiotics like linezolid, cough syrups with dextromethorphan, or herbal products like St John's Wort.",
    interactions:
      "The main thing to know: fluoxetine affects how your body processes several common medicines. Always tell your pharmacist about everything you take, including over-the-counter products. The most important interactions are: (1) MAOI antidepressants (wait 5 weeks); (2) thioridazine and pimozide (never combine); (3) tramadol and codeine (fluoxetine can block pain relief and raise serotonin syndrome risk); (4) NSAIDs like ibuprofen (raises bleeding risk); (5) warfarin (raises bleeding risk — monitor INR). Avoid alcohol or keep it to a minimum — it can make you more drowsy and worsen mood symptoms.",
  },

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: [
    "Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Prozac & Sarafem labels, NICE CG91 & NG69, APA Practice Guideline",
  ],
};
