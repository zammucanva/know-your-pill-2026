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

  /* ---- India-first extensions ---- */

  /* Indian clinical practice */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Flunil", manufacturer: "Sun Pharma", strengths: "10mg, 20mg, 40mg, 60mg", note: "Among the most commonly prescribed fluoxetine brands in India" },
      { name: "Prodep", manufacturer: "Sun Pharma", strengths: "10mg, 20mg, 40mg" },
      { name: "Fludac", manufacturer: "Cipla", strengths: "10mg, 20mg, 40mg, 60mg" },
      { name: "Oxatin", manufacturer: "Lupin", strengths: "10mg, 20mg, 40mg" },
      { name: "Flutab", manufacturer: "Alternative (generic)", strengths: "10mg, 20mg", note: "Lower-cost generic alternative available in many states" },
    ],
    typicalDoses:
      "Depression (adult): start 20mg OD morning, titrate to 40–60mg OD after 3–4 weeks. Depression (paediatric ≥8 yrs): start 10–20mg OD, max 20mg (child) / 60mg (adolescent). OCD (adult): 20–60mg OD; OCD (paediatric ≥7 yrs): start 10mg OD, titrate to 20–60mg. Bulimia nervosa: 60mg OD (target). Panic disorder: start 10mg OD (lower than depression due to activating effect), titrate to 20–60mg. PMDD: 20mg continuous or luteal-phase only. In Indian government hospitals, starting dose is usually 20mg OD (10mg in anxious or paediatric patients) due to limited follow-up capacity. Maximum: 80mg/day.",
    prescribingScenarios: [
      "Used in Indian psychiatry OPDs for depression, OCD, panic disorder, and bulimia nervosa — particularly when long half-life is advantageous (adherence-poor patients, intermittent dosing).",
      "Only SSRI FDA-approved for paediatric depression (≥8 yrs) — preferred in child/adolescent psychiatry clinics in India.",
      "Preferred SSRI for bulimia nervosa — only SSRI with FDA approval for this indication; used in eating disorder clinics.",
      "Used as a 'bridge' to taper patients off shorter-acting SSRIs (paroxetine, venlafaxine) due to self-tapering property.",
      "Avoided as first-line in anxious/agitated depression in Indian practice due to its activating profile — sertraline or escitalopram often preferred.",
      "Less preferred than sertraline in pregnancy in Indian practice (longer fetal exposure due to long half-life; sertraline has lower placental transfer).",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
      note: "Widely available across India. Less commonly stocked than sertraline in some government hospitals under DMHP, but available in most tertiary psychiatry OPDs. Generic fluoxetine is commonly stocked in Jan Aushadhi Kendras. Rural availability is generally good as fluoxetine has been off-patent for decades.",
    },
    costCategory: "low",
    costNote: "Generic fluoxetine is among the cheapest antidepressants in India (approximately ₹2–4 per 20mg tablet). Branded versions (Flunil, Prodep, Fludac) cost ₹3–6 per tablet. Cost varies by manufacturer and region. Jan Aushadhi generic fluoxetine is the most affordable option.",
    monitoring:
      "In Indian government hospitals, monitoring is primarily clinical (symptom-based) due to resource constraints. PHQ-9 is used in tertiary centres and DMHP clinics. Special attention to CYP2D6-mediated interactions is required — fluoxetine is the strongest CYP2D6 inhibitor among SSRIs. Serum sodium monitoring in elderly is recommended. ECG if co-prescribed with drugs that prolong QTc (avoid thioridazine, pimozide). Follow-up schedule: 2 weeks (tolerability and activation), 4 weeks (early response), 8 weeks (steady-state effect — note: longer than other SSRIs due to slow steady state), 12 weeks (full response assessment). In private practice, monitoring aligns more closely with international guidelines.",
    patientCounselling: [
      "Take in the morning after food to reduce nausea and avoid insomnia — fluoxetine is the most 'stimulating' SSRI.",
      "It may take 4–6 weeks to feel the full benefit — don't stop early just because you don't feel better yet. Because fluoxetine takes longer to reach steady state, the full effect may take up to 8 weeks.",
      "Fluoxetine is the easiest SSRI to stop — missed doses are rarely a problem because the medicine stays in your body for over a week. BUT you must wait at least 5 WEEKS after stopping before starting certain other antidepressants called MAOIs.",
      "If you feel more anxious, jittery, or have trouble sleeping in the first 1–2 weeks, this is common — fluoxetine is more 'activating' than other SSRIs. It usually settles. If it doesn't, tell your doctor.",
      "Generic versions (Flunil, Prodep, Fludac, Oxatin) are equally effective — you don't need to pay more for expensive brands if cost is a concern. Jan Aushadhi generic fluoxetine is a good affordable option.",
      "Avoid alcohol — it can worsen your mood symptoms and increase drowsiness.",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month, contact your doctor immediately or call Tele-MANAS at 14416.",
      "Tell your doctor about ALL other medicines you take — fluoxetine affects how your body processes several common drugs (especially tramadol, codeine, and certain heart medicines). Never combine with thioridazine or pimozide.",
      "Sexual side effects (reduced interest, difficulty reaching orgasm) are common and can be embarrassing to discuss — but your doctor can help. Don't stop the medicine without discussing alternatives.",
      "If you stop fluoxetine suddenly, you may not notice much — but never restart an MAOI antidepressant within 5 weeks of stopping fluoxetine. Tell any new doctor that you have taken fluoxetine recently.",
    ],
  },

  /* NMC CBME competency mapping */
  cbmeMapping: {
    subject: "Pharmacology",
    mbbsYear: "Second Professional",
    topic: "Drugs acting on Central Nervous System — Antidepressants (SSRIs)",
    competencyCodes: ["PH7.3", "PH7.4", "PY3.2"],
    competencyDescriptions: [
      "PH7.3: Describe the mechanism of action, pharmacological actions, adverse effects, contraindications, and therapeutic uses of antidepressant drugs with emphasis on SSRIs.",
      "PH7.4: Explain the rationale for drug selection, dose individualisation, and monitoring of antidepressant therapy in different clinical scenarios.",
      "PY3.2 (Psychiatry, Final Professional): Describe the pharmacological management of mood disorders, including first-line SSRI selection, augmentation strategies, and monitoring.",
    ],
    integrationSubjects: ["Psychiatry", "General Medicine", "Community Medicine", "Paediatrics"],
  },

  /* Exam Lens — structured by Indian examination */
  examLens: {
    mbbs: {
      viva: [
        "What is the mechanism of action of fluoxetine? (SERT blockade → ↑ synaptic 5-HT → 5-HT1A autoreceptor desensitisation over 1–2 weeks → ↑ serotonergic throughput → downstream BDNF/neurogenesis over 4–6 weeks)",
        "Why is fluoxetine's half-life clinically important? (Parent 1–4 days; active metabolite norfluoxetine 4–9 days. Result: mildest discontinuation syndrome of any SSRI, but 5-week washout required before MAOI — longer than any other SSRI.)",
        "Name the unique FDA-approved indications of fluoxetine. (Bulimia nervosa — only SSRI approved. Paediatric depression ≥8 yrs — only SSRI approved. Also: MDD, OCD ≥7 yrs, Panic Disorder, PMDD.)",
        "What is the black box warning for fluoxetine? (Increased suicidality in patients <25 years — monitor weekly in the first month. Particularly relevant for fluoxetine because it is the only SSRI approved for paediatric depression.)",
        "Why is fluoxetine the most activating SSRI? (Relative NE/DA enhancement through CYP2D6 inhibition of catecholamine metabolism and direct norepinephrine effects — useful in retarded depression, problematic in anxious/agitated depression.)",
        "What is serotonin syndrome? Name the triad. (Mental status change + autonomic instability + neuromuscular excitation — clonus, hyperreflexia. Onset within 24h. Treat with cyproheptadine. Note: with fluoxetine, risk persists for 5 weeks after stopping due to norfluoxetine.)",
      ],
      practical: [
        "Counsel a patient starting fluoxetine for depression — address onset delay, activating side effects, 5-week MAOI washout, and follow-up.",
        "Write a prescription for fluoxetine for a 30-year-old with first-episode depression (dose: 20mg OD, morning, with food).",
        "Identify the contraindications of fluoxetine from a given clinical scenario (e.g., patient on MAOI or thioridazine).",
        "Explain the monitoring schedule for a patient on fluoxetine (2/4/8/12 weeks, PHQ-9, suicidality <25, CYP2D6 interactions).",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics (with emphasis on fluoxetine's long half-life and active metabolite), adverse effects, and therapeutic uses of SSRIs with special reference to fluoxetine. Discuss the rationale for SSRI selection in specific populations (paediatric, hepatic impairment, adherence-poor).",
        "A 30-year-old woman presents with moderate depression. She has a history of poor medication adherence. Discuss the pharmacological management, including drug selection, dose titration, monitoring, and patient counselling. Address the unique role of fluoxetine in adherence-poor patients and the implications of its long half-life.",
      ],
    },
    neetPg: {
      highYield: [
        "Fluoxetine = only SSRI FDA-approved for bulimia nervosa (60mg OD target dose).",
        "Fluoxetine = only SSRI FDA-approved for paediatric depression (≥8 yrs).",
        "Fluoxetine = STRONGEST CYP2D6 inhibitor among SSRIs (along with paroxetine). Major interactions: thioridazine (QTc), pimozide (QTc), TCAs, codeine/tramadol (blocks analgesia), tamoxifen (blocks activation).",
        "Half-life: fluoxetine 1–4 days + norfluoxetine 4–9 days = effective half-life ~1 week. Steady state 4–8 weeks. Mildest discontinuation syndrome of any SSRI.",
        "5-week washout after fluoxetine before MAOI — LONGEST of any SSRI (others 14 days). The favourite MAOI washout question.",
        "Fluoxetine is the most activating SSRI — useful in retarded/psychomotor-slowed depression, problematic in anxious/agitated depression (use sertraline/escitalopram instead).",
        "Black box: suicidality <25 years. Weekly monitoring in first month. Particularly relevant for fluoxetine given paediatric approval.",
        "Norfluoxetine = active metabolite, equally potent SERT inhibitor, half-life 4–9 days (up to 16 days in CYP2D6 poor metabolisers).",
        "Use as 'bridge' to taper off paroxetine/venlafaxine — long half-life self-tapers the patient.",
        "Serotonin syndrome triad: Mental + Autonomic + Neuromuscular (clonus, hyperreflexia). With fluoxetine, risk persists for 5 weeks after stopping due to norfluoxetine accumulation.",
      ],
      pyqConcepts: [
        "NEET PG 2022: Which SSRI is approved for paediatric depression (≥8 years)? (Answer: Fluoxetine — only SSRI FDA-approved for paediatric MDD.)",
        "NEET PG 2021: Which antidepressant is FDA-approved for bulimia nervosa? (Answer: Fluoxetine 60mg OD — only SSRI with this indication.)",
        "NEET PG 2020: A patient on fluoxetine wants to switch to an MAOI. What is the required washout period? (Answer: 5 weeks — longer than any other SSRI due to norfluoxetine's 4–9 day half-life.)",
        "NEET PG 2019: Which SSRI is the strongest CYP2D6 inhibitor? (Answer: Fluoxetine and paroxetine — both strong. Sertraline and escitalopram are weak.)",
        "INICET 2021: A patient on fluoxetine develops restlessness, confusion, fever, clonus. Diagnosis and management? (Answer: Serotonin syndrome. Stop fluoxetine, supportive care, cyproheptadine, benzodiazepines. Note long washout needed.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 32-year-old man with retarded depression (low energy, hypersomnia, psychomotor slowing) is to start an SSRI. Which SSRI and why? (Answer: Fluoxetine — its activating profile suits retarded/anhedonic depression. Start 20mg OD morning. Watch for anxiety/jitteriness in week 1.)",
        "A 28-year-old woman with bulimia nervosa (binge-purge, BMI 22) presents for pharmacotherapy. What is the drug of choice and dose? (Answer: Fluoxetine 60mg OD — only SSRI FDA-approved for bulimia. May start 20mg and titrate to 60mg over 2–4 weeks for tolerability. Combine with CBT.)",
        "A 9-year-old boy with moderate depression and family history of MDD is to be started on pharmacotherapy. What is the appropriate drug and dose? (Answer: Fluoxetine — only SSRI FDA-approved for paediatric depression ≥8 yrs. Start 10mg OD, max 20mg in children. Combine with CBT. Black box warning — monitor weekly for suicidality.)",
        "A patient on paroxetine 30mg wishes to discontinue due to sexual side effects. How would you manage the taper? (Answer: Taper paroxetine slowly over 4+ weeks. Consider substituting fluoxetine 20mg for the last 2 weeks of taper — long half-life of norfluoxetine self-tapers the patient and reduces discontinuation syndrome.)",
        "A 45-year-old man on fluoxetine 40mg for depression presents with new prescription for tramadol 50mg for back pain. What do you do? (Answer: Do NOT co-prescribe. Fluoxetine inhibits CYP2D6, blocking conversion of tramadol to active O-desmethyltramadol → loss of analgesia AND raises serotonin syndrome risk. Switch to paracetamol or non-serotonergic opioid like morphine.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Fluoxetine mechanism: SERT blockade → ↑ serotonin in synaptic cleft.",
        "Onset of action: 4–6 weeks (up to 8 weeks for fluoxetine due to slow steady state).",
        "Active metabolite: norfluoxetine (half-life 4–9 days) — extends therapeutic effect, causes long washout.",
        "Washout before MAOI: 5 weeks (longest of any SSRI).",
        "Only SSRI approved for bulimia nervosa.",
        "Only SSRI approved for paediatric depression (≥8 years).",
        "Black box warning: suicidal thoughts in patients under 25.",
        "Most activating SSRI — useful in retarded depression, problematic in anxious depression.",
        "Strongest CYP2D6 inhibitor among SSRIs (with paroxetine) — multiple drug interactions.",
        "Mildest discontinuation syndrome among SSRIs (due to long half-life).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Fluoxetine's activating profile makes it the SSRI of choice for retarded/anhedonic depression (psychomotor slowing, hypersomnia, hyperphagia) — but a poor choice for anxious/agitated depression where sertraline or escitalopram are preferred. Matching drug to depression subtype improves outcomes.",
        "Fluoxetine's long half-life is a double-edged sword: it minimises discontinuation syndrome and forgiving adherence, BUT requires a 5-week washout before MAOIs and means side effects / interactions (e.g., serotonin syndrome) persist for weeks after stopping.",
        "CYP2D6 inhibition by fluoxetine is clinically critical: (1) blocks conversion of codeine/tramadol to active metabolites — loss of analgesia; (2) raises TCA levels — toxicity risk; (3) raises thioridazine/pimozide — QTc prolongation; (4) blocks activation of tamoxifen — reduced efficacy in breast cancer. Avoid co-prescription where possible.",
        "Use as a 'bridge' for tapering shorter-acting SSRIs: substitute fluoxetine 20mg for the last 1–2 weeks of paroxetine/venlafaxine taper. Norfluoxetine's long half-life self-tapers the patient, minimising discontinuation syndrome. After 2–4 weeks, stop fluoxetine.",
        "Paediatric depression: fluoxetine is the only FDA-approved SSRI for ≥8 years. Dose: 10–20mg (child), up to 60mg (adolescent). Combination with CBT is recommended. Black box warning — weekly monitoring first month. Stronger evidence base than escitalopram (≥12 yrs) for this age group.",
        "Bulimia nervosa: fluoxetine 60mg OD is the only FDA-approved pharmacotherapy. Reduces binge-purge frequency independent of antidepressant effect (likely via 5-HT modulation of satiety). CBT is first-line; fluoxetine is adjunctive or for patients refusing CBT.",
        "PMDD: fluoxetine (marketed as Sarafem in the US) at 20mg continuous or luteal-phase only (start 14 days before menses, stop at menses onset). Luteal-phase dosing reduces total drug exposure and side effects. Indian patients often prefer continuous dosing for simplicity.",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "First-line SSRI for depression",
      internationalSource: "NICE CG91 / APA Practice Guideline",
      internationalRecommendation: "SSRIs are first-line for moderate-severe depression. No single SSRI preferred — selection based on patient profile, comorbidities, interactions, and prior response.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS guidelines also recommend SSRIs as first-line for depression. Sertraline and escitalopram are the most commonly prescribed first-line SSRIs in Indian practice. Fluoxetine is used selectively — preferred for retarded depression, bulimia, paediatric depression, and adherence-poor patients; avoided in anxious/agitated depression.",
    },
    {
      topic: "Use in pregnancy",
      internationalSource: "FDA / APA",
      internationalRecommendation: "Sertraline is the SSRI of choice in pregnancy when pharmacotherapy is necessary. Former FDA Category C. Fluoxetine has the longest safety track record (since 1987) but its long half-life means longer fetal exposure. Third-trimester use associated with neonatal adaptation syndrome.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs with international guidelines — sertraline is preferred in pregnancy, not fluoxetine. In Indian practice, fluoxetine is generally avoided as first-line in pregnancy due to longer fetal exposure and the availability of sertraline as a safer alternative. If a patient on fluoxetine becomes pregnant, weigh risks/benefits — do NOT stop abruptly (relapse risk + discontinuation).",
    },
    {
      topic: "Monitoring during treatment",
      internationalSource: "NICE / APA",
      internationalRecommendation: "Weekly contact in first month, then every 2–4 weeks until stable. PHQ-9 at baseline, 4, 8, 12 weeks. Serum sodium in elderly. ECG if cardiac risk factors. Note: fluoxetine's slow steady state (4–8 weeks) means full response assessment at 12 weeks (later than other SSRIs).",
      indianSource: null,
      indianRecommendation: "No dedicated IPS guideline on SSRI monitoring frequency. In Indian government hospitals, monitoring is primarily clinical due to resource constraints. PHQ-9 is used in tertiary centres and DMHP clinics. Special attention to CYP2D6 interactions is required given widespread co-prescription of tramadol/codeine/TCAs in India. Current section reflects accepted clinical practice and internationally accepted evidence.",
    },
    {
      topic: "Suicidality monitoring (<25 years)",
      internationalSource: "FDA Black Box Warning",
      internationalRecommendation: "Antidepressants increased risk of suicidal thinking in patients <25. Weekly monitoring in first month. Document informed consent. Particularly relevant for fluoxetine — the only SSRI approved for paediatric depression.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS acknowledges the FDA black box warning and recommends close monitoring of young patients (<25) during the first month. In Indian practice, family involvement in monitoring is particularly important given the joint family system. Tele-MANAS (14416) should be provided as a crisis resource. For paediatric prescriptions (≥8 yrs), direct psychiatric supervision is recommended.",
    },
    {
      topic: "Use in lactation",
      internationalSource: "AAP / LactMed",
      internationalRecommendation: "Sertraline is the SSRI of choice in breastfeeding. Fluoxetine is generally NOT preferred in lactation due to long half-life and accumulation in infant serum (norfluoxetine detected in breastfed infants). Use only if other SSRIs have failed and benefits outweigh risks.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — sertraline is preferred in lactation, not fluoxetine. In Indian practice where breastfeeding is strongly culturally valued, fluoxetine's accumulation in infant serum (norfluoxetine detected) is a significant concern. If a patient on fluoxetine wishes to breastfeed, consider switching to sertraline. If fluoxetine must be used, counsel mother to watch for infant irritability, poor sleep, or feeding issues.",
    },
  ],

  /* Indian reference sources */
  indianReferences: [
    {
      source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition",
      type: "textbook",
      section: "Chapter 33 — Antidepressant Drugs",
    },
    {
      source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression",
      type: "guideline",
      section: "Section on pharmacotherapy — SSRIs",
    },
    {
      source: "NMC CBME Curriculum — Pharmacology (Second Professional)",
      type: "curriculum",
      section: "Topic: Drugs acting on CNS — Antidepressants",
    },
    {
      source: "NMC CBME Curriculum — Psychiatry (Final Professional)",
      type: "curriculum",
      section: "Topic: Psychopharmacology — Mood disorders",
    },
    {
      source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)",
      type: "regulatory",
      section: "Essential medicines for mental health — SSRIs included",
    },
    {
      source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416",
      type: "regulatory",
      section: "Mental health support resource for patients on antidepressants",
      url: "tel:14416",
    },
  ],

  /* Section difficulty mapping */
  sectionDifficulty: {
    "top": "mbbs",
    "quick-facts": "mbbs",
    "learning-objectives": "mbbs",
    "knowledge-graph": "pg",
    "mechanism": "mbbs",
    "brain-regions": "pg",
    "neurotransmitters": "pg",
    "neural-pathways": "resident",
    "timeline": "mbbs",
    "clinical-uses": "mbbs",
    "side-effects": "mbbs",
    "monitoring": "pg",
    "contraindications": "mbbs",
    "interactions": "pg",
    "patient-education": "mbbs",
    "clinical-pearls": "pg",
    "exam-lens": "mbbs",
    "memory-tricks": "mbbs",
    "clinical-case": "pg",
    "comparison": "pg",
    "indian-practice": "mbbs",
    "guideline-comparison": "resident",
    "related-drugs": "pg",
    "high-yield-summary": "mbbs",
    "faq": "mbbs",
    "references": "resident",
  },

  /* ---- India Layer extensions (platform-wide) ---- */

  /* Evidence hierarchy: International → Indian Guidelines → Indian Clinical Practice */
  evidenceHierarchy: {
    international: [
      { source: "NICE CG91", recommendation: "SSRIs are first-line for moderate-severe depression. No single SSRI preferred — selection based on patient profile." },
      { source: "APA Practice Guideline", recommendation: "SSRI first-line for MDD. Fluoxetine selected for retarded depression, bulimia, paediatric depression, or adherence-poor patients." },
      { source: "FDA", recommendation: "Approved for 5 indications: MDD, OCD, Bulimia, Panic Disorder, PMDD. Paediatric depression ≥8 yrs (unique). Black box warning for suicidality <25." },
      { source: "WHO mhGAP", recommendation: "SSRIs recommended as first-line antidepressants in the Mental Health Gap Action Programme." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS guidelines recommend SSRIs as first-line for depression. Sertraline and escitalopram are most commonly prescribed first-line; fluoxetine used selectively for retarded depression, bulimia, paediatric depression, and adherence-poor patients." },
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS concurs with international guidelines — sertraline (not fluoxetine) is preferred in pregnancy and lactation due to fluoxetine's long half-life and infant accumulation." },
      { source: null, recommendation: "No dedicated IPS guideline on fluoxetine monitoring frequency. Current section reflects accepted clinical practice and internationally accepted evidence." },
    ],
    indianClinicalPractice:
      "In Indian practice, fluoxetine is used selectively rather than as a default first-line SSRI (sertraline and escitalopram dominate first-line). Fluoxetine is preferred for retarded/anhedonic depression (activating profile), bulimia nervosa (only approved SSRI), paediatric depression ≥8 yrs (only approved SSRI), and adherence-poor patients (long half-life forgives missed doses). It is avoided in anxious/agitated depression (too activating), pregnancy (longer fetal exposure than sertraline), and lactation (infant norfluoxetine accumulation). Indian government hospitals stock generic fluoxetine at low cost (₹2–4/tablet). Special attention to CYP2D6 interactions is required given widespread tramadol/codeine/TCA co-prescription in India. Family involvement in monitoring is emphasised given the joint family system.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "Available through DMHP and tertiary psychiatry OPDs. Starting dose 20mg OD (10mg in anxious/paediatric). Monitoring is primarily clinical (symptom-based) due to resource constraints. Jan Aushadhi generic fluoxetine is commonly dispensed. Less commonly used as first-line than sertraline in government settings.",
    privateHospitals:
      "Selected for retarded/anhedonic depression, bulimia, paediatric depression, or adherence-poor patients. Starting dose 20mg OD, titrate to 40–60mg. PHQ-9 monitoring at 2/4/8/12 weeks (note later full-response assessment than other SSRIs). ECG if co-prescribed with QTc-prolonging drugs (avoid thioridazine, pimozide). Patient counselling emphasises 5-week MAOI washout.",
    medicalColleges:
      "Teaching drug for SSRI pharmacology — particularly useful for illustrating active metabolites (norfluoxetine), CYP2D6 inhibition, and pharmacokinetic/pharmacodynamic half-life differences. Used in pharmacology practicals (prescription writing, patient counselling). Examined in second professional MBBS (pharmacology) and final professional (psychiatry). Commonly featured in NEET PG and INICET questions — especially the 5-week MAOI washout and bulimia/paediatric indications.",
    primaryCare:
      "Used for moderate depression in primary care, particularly when patient has poor adherence or missed-dose concerns. GP/family physicians initiate fluoxetine 20mg OD. Caution with co-prescription of tramadol/codeine (CYP2D6 inhibition). Referral to psychiatrist if no response at 8–12 weeks, if suicidal ideation, or if paediatric (≥8 yrs — requires psychiatric supervision).",
    psychiatryOPD:
      "Workhorse SSRI in psychiatry OPD for specific indications: bulimia nervosa (60mg OD), paediatric depression ≥8 yrs (10–20mg), retarded depression (20–60mg), and as a 'bridge' for tapering shorter-acting SSRIs. Often combined with CBT. Augmentation with bupropion or mirtazapine for partial response. Strong CYP2D6 inhibition requires careful medication review.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ questionnaire) — SSRIs can trigger manic switch. Fluoxetine's long half-life prolongs the risk window if manic switch occurs.",
      "Assess suicidal ideation — if present, involve family for monitoring and provide Tele-MANAS (14416) number. Particularly relevant for fluoxetine given paediatric approval.",
      "Check for MAOI use in last 14 days before starting fluoxetine — absolute contraindication. AND warn patient that after stopping fluoxetine, 5 weeks (not 14 days) must elapse before any MAOI.",
      "Review concurrent medications — fluoxetine is the STRONGEST CYP2D6 inhibitor among SSRIs. Critical interactions: thioridazine, pimozide (never combine), tramadol/codeine (loss of analgesia), TCAs (toxicity), tamoxifen (reduced efficacy), warfarin (INR monitoring).",
      "Baseline PHQ-9 score for response monitoring.",
      "In elderly: check baseline serum sodium (SIADH risk) and consider ECG if cardiac risk factors.",
      "In women of reproductive age: discuss pregnancy plans — sertraline (not fluoxetine) is preferred if pregnancy is possible. If on fluoxetine and becomes pregnant, do NOT stop abruptly.",
      "Counsel about 4–6 week onset (up to 8 weeks for fluoxetine) — set expectation that side effects precede benefit. Note activating effect in first 1–2 weeks.",
    ],
    duringTreatment: [
      "Week 1–2: assess tolerability (nausea, insomnia, anxiety, jitteriness — common due to activating profile) and suicidality (especially <25 years).",
      "Week 2–4: review early response — sleep, appetite, energy often improve before mood. Note: fluoxetine's activating profile can worsen anxiety in this period — consider temporary dose reduction or short-term benzodiazepine.",
      "Week 4–8: assess response with PHQ-9. If <30% reduction, increase dose. Note: full response may take up to 12 weeks due to slow steady state.",
      "Week 8–12: full response assessment. If <50% reduction at 12 weeks, consider augmentation (bupropion/mirtazapine) or switch.",
      "Monitor for sexual dysfunction — ask directly; patients rarely volunteer it.",
      "Watch for hyponatraemia in elderly (confusion, headache, seizures).",
      "Watch for serotonin syndrome if serotonergic drugs are added (tramadol, triptans, linezolid) — risk persists for 5 weeks after stopping fluoxetine due to norfluoxetine.",
    ],
    followUp: [
      "First follow-up at 2 weeks (tolerability + suicidality + activation).",
      "Second follow-up at 4 weeks (early response).",
      "Third follow-up at 8 weeks (steady-state effect — later than other SSRIs).",
      "Fourth follow-up at 12 weeks (full response assessment).",
      "If remission achieved (PHQ-9 <5): continue for 6–12 months for first episode, longer for recurrent.",
      "Before discontinuation: fluoxetine's long half-life means tapering is rarely problematic — usually can stop without taper. BUT warn patient: 5-week washout before any MAOI antidepressant.",
      "In government hospitals: follow-up may be every 4–8 weeks due to travel barriers — counsel family to watch for red flags.",
    ],
    whenToRefer: [
      "Refer to psychiatrist if no response to 2 adequate SSRI trials (12 weeks each).",
      "Refer urgently if suicidal ideation emerges or worsens — particularly in patients <25 (black box warning).",
      "Refer if bipolar disorder is suspected (manic switch risk — fluoxetine's long half-life prolongs the risk window).",
      "Refer if serotonin syndrome develops (emergency — call 112). Note: serotonin syndrome risk persists for 5 weeks after stopping fluoxetine.",
      "Refer to physician if severe hyponatraemia (Na <120 mmol/L) or seizures.",
      "Refer to obstetrician if patient becomes pregnant — consider switching to sertraline (do NOT stop fluoxetine abruptly).",
      "Refer for CBT — combined SSRI + CBT produces better outcomes than either alone. Essential for bulimia and paediatric depression.",
    ],
  },

  /* Exam frequency — star ratings */
  examFrequency: {
    neetPg: 5,
    inicet: 4,
    mbbsViva: 4,
    fmge: 5,
  },

  /* PYQ metadata — concept-level, no copyrighted content */
  pyqMetadata: [
    { exam: "NEET PG", year: 2022, concept: "SSRI approved for paediatric depression (≥8 yrs)", topic: "Paediatric psychopharmacology" },
    { exam: "NEET PG", year: 2021, concept: "Antidepressant approved for bulimia nervosa", topic: "Eating disorder pharmacotherapy" },
    { exam: "NEET PG", year: 2020, concept: "5-week washout after fluoxetine before MAOI", topic: "Antidepressant interactions" },
    { exam: "NEET PG", year: 2019, concept: "SSRI with strongest CYP2D6 inhibition", topic: "Antidepressant pharmacokinetics" },
    { exam: "INICET", year: 2021, concept: "Serotonin syndrome from fluoxetine — long washout", topic: "Serotonergic toxicity" },
    { exam: "INICET", year: 2023, concept: "Norfluoxetine — active metabolite and clinical implications", topic: "Antidepressant pharmacokinetics" },
    { exam: "FMGE", year: 2022, concept: "Fluoxetine mechanism and active metabolite", topic: "Antidepressant pharmacology" },
    { exam: "FMGE", year: 2021, concept: "Fluoxetine-thioridazine interaction (QTc)", topic: "Drug interactions" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Government hospital setup",
      recommendation: "Fluoxetine is available but less commonly used as first-line than sertraline in government hospitals. Useful for retarded depression, bulimia, or adherence-poor patients. Low cost (₹2–4/tablet), available in Jan Aushadhi and DMHP, once-daily dosing.",
      alternative: "Sertraline is more commonly stocked and preferred first-line. Escitalopram is another alternative.",
    },
    {
      scenario: "Private psychiatry practice",
      recommendation: "Fluoxetine is selected selectively — for retarded/anhedonic depression, bulimia, paediatric depression, or adherence-poor patients. Its activating profile suits low-energy depression but worsens anxious/agitated depression.",
      alternative: "Sertraline or escitalopram are preferred for anxious depression. Mirtazapine for severe insomnia/weight loss.",
    },
    {
      scenario: "Pregnancy",
      recommendation: "Fluoxetine is NOT the SSRI of choice in pregnancy — sertraline is preferred due to lower placental transfer and shorter fetal exposure. Fluoxetine's long half-life (norfluoxetine 4–9 days) means prolonged fetal exposure. If patient becomes pregnant on fluoxetine, weigh risks/benefits — do NOT stop abruptly.",
      alternative: "Sertraline is the SSRI of choice. Avoid paroxetine (Category D).",
    },
    {
      scenario: "Adolescents and children",
      recommendation: "Fluoxetine is the ONLY SSRI FDA-approved for paediatric depression (≥8 years). First-line for paediatric MDD in Indian child/adolescent psychiatry clinics. Dose: 10–20mg (child), up to 60mg (adolescent). Combine with CBT. Black box warning — weekly monitoring first month.",
      alternative: "Escitalopram for ≥12 years (also approved). Sertraline off-label. Always combine with CBT.",
    },
    {
      scenario: "Older adults (≥65 years)",
      recommendation: "Fluoxetine is generally AVOIDED in elderly due to: (1) strong CYP2D6 inhibition → polypharmacy interactions; (2) activating profile → insomnia, agitation; (3) long half-life → accumulation in frail elderly; (4) weight loss (concern in cachectic elderly). Sertraline or escitalopram are preferred.",
      alternative: "Sertraline (mild CYP2D6) or escitalopram (lowest CYP interactions). Mirtazapine if insomnia/weight loss present.",
    },
    {
      scenario: "Cost-sensitive setting",
      recommendation: "Generic fluoxetine from Jan Aushadhi Kendra is among the cheapest antidepressant options in India (₹2–4/tablet). Branded versions (Flunil, Prodep, Fludac) are also inexpensive. Particularly cost-effective for adherence-poor patients due to long half-life (fewer missed-dose consequences).",
      alternative: "If cost is the primary concern, Jan Aushadhi generic fluoxetine or sertraline are both excellent options.",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: true,
    note: "Available at Jan Aushadhi Kendras across India in 10mg, 20mg, and 40mg tablet strengths. Among the most affordable antidepressant options in India (₹2–4 per 20mg tablet). Generic name: Fluoxetine Tablets IP / Fluoxetine Capsules IP.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression" },
      { source: "FDA Prescribing Information — PROZAC (fluoxetine hydrochloride)", section: "Highlights of Prescribing Information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/018936s108lbl.pdf" },
      { source: "FDA Prescribing Information — SARAFEM (fluoxetine, PMDD)", section: "Highlights of Prescribing Information" },
      { source: "NICE Clinical Guideline CG91 — Depression in adults", section: "Pharmacological treatment" },
      { source: "APA Practice Guideline for MDD, 3rd edition" },
      { source: "Cipriani A et al. Lancet 2018 — Comparative efficacy of 21 antidepressants", section: "Network meta-analysis" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression", type: "guideline", section: "Section on pharmacotherapy — SSRIs" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional)", type: "curriculum", section: "Topic: Psychopharmacology — Mood disorders" },
      { source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)", type: "regulatory", section: "Essential medicines for mental health — SSRIs" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Mental health support resource", url: "tel:14416" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Fluoxetine — Schedule H prescription status" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose Fluoxetine for depression",
    startNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Patient presents with depression",
        branches: [
          { label: "Mild", next: "mild" },
          { label: "Moderate", next: "moderate" },
          { label: "Severe", next: "severe" },
        ],
      },
      {
        id: "mild",
        question: "Mild depression (PHQ-9 5–9)",
        recommendation: "Psychotherapy first (CBT). Consider SSRI if functional impairment or patient preference. If SSRI needed, sertraline is preferred — fluoxetine's activating profile may worsen anxiety in mild depression.",
        reasoning: "NICE recommends psychotherapy alone for mild depression. If medication is needed, fluoxetine's activating profile makes it less suitable for anxious-predominant mild depression.",
      },
      {
        id: "moderate",
        question: "Moderate depression (PHQ-9 10–14)",
        recommendation: "SSRI + CBT. First-line per NICE CG91 and IPS guidelines. Choose fluoxetine if retarded/anhedonic phenotype (psychomotor slowing, hypersomnia, hyperphagia).",
        reasoning: "SSRI + CBT is first-line for moderate depression. Fluoxetine's activating profile suits retarded depression; sertraline or escitalopram suit anxious depression.",
        branches: [
          { label: "Retarded phenotype", next: "why-fluoxetine" },
          { label: "Anxious/agitated phenotype", next: "avoid-anxious" },
        ],
      },
      {
        id: "severe",
        question: "Severe depression (PHQ-9 15–27)",
        recommendation: "SSRI + CBT. Psychiatry referral. Fluoxetine 20mg OD (titrate to 40–60mg). If psychotic features → add antipsychotic. If suicidal → urgent psychiatric referral.",
        reasoning: "Severe depression requires pharmacotherapy. Fluoxetine can be first-line if retarded phenotype. If psychotic features → add antipsychotic. If suicidal → urgent psychiatric referral.",
        branches: [
          { label: "With suicidal ideation", next: "suicidal" },
          { label: "With psychotic features", next: "psychotic" },
          { label: "Bulimia comorbid", next: "bulimia" },
        ],
      },
      {
        id: "suicidal",
        question: "Severe depression with suicidal ideation",
        recommendation: "Urgent psychiatry referral. Do NOT send home alone. Consider admission. Fluoxetine can be started but monitor weekly (black box warning <25). Tele-MANAS 14416 for crisis support.",
        reasoning: "Suicidal ideation in severe depression is a psychiatric emergency. Fluoxetine's activating effect may transiently worsen agitation before mood benefit — close monitoring essential.",
      },
      {
        id: "psychotic",
        question: "Severe depression with psychotic features",
        recommendation: "Psychiatry referral. Add antipsychotic (olanzapine or aripiprazole) to SSRI. Consider ECT if catatonic or severely suicidal.",
        reasoning: "Psychotic depression requires combination therapy (antidepressant + antipsychotic) or ECT. SSRI alone is insufficient. Avoid thioridazine/pimozide with fluoxetine (CYP2D6 + QTc).",
      },
      {
        id: "bulimia",
        question: "Depression with comorbid bulimia nervosa",
        recommendation: "Fluoxetine 60mg OD is the only FDA-approved SSRI for bulimia. Combine with CBT (first-line). Reduces binge-purge frequency independent of antidepressant effect.",
        reasoning: "Fluoxetine's unique FDA approval for bulimia makes it the drug of choice when depression coexists with bulimia nervosa.",
      },
      {
        id: "why-fluoxetine",
        question: "Why choose Fluoxetine?",
        recommendation: "Fluoxetine is preferred when: retarded/anhedonic depression (activating), bulimia (only approved SSRI), paediatric depression ≥8 yrs (only approved SSRI), adherence-poor patients (long half-life forgives missed doses), or as a 'bridge' to taper shorter-acting SSRIs.",
        reasoning: "Fluoxetine's long half-life (norfluoxetine 4–9 days) minimises discontinuation syndrome, its activating profile suits retarded depression, and it has unique FDA approvals for bulimia and paediatric depression.",
        branches: [
          { label: "When NOT to choose", next: "avoid" },
        ],
      },
      {
        id: "avoid-anxious",
        question: "Anxious/agitated depression — when NOT to use fluoxetine",
        recommendation: "Avoid fluoxetine in anxious/agitated depression — its activating profile can worsen anxiety, jitteriness, and insomnia in the first 1–2 weeks. Use sertraline or escitalopram instead.",
        reasoning: "Fluoxetine is the most activating SSRI. In anxious/agitated depression, the early activation can worsen symptoms and reduce adherence. Sertraline (σ1 agonism, anxiolytic) or escitalopram (low interaction profile) are preferred.",
      },
      {
        id: "avoid",
        question: "When NOT to choose Fluoxetine",
        recommendation: "Avoid: concurrent thioridazine/pimozide (CYP2D6 + QTc), MAOIs (5-week washout), severe hepatic impairment, anxious/agitated depression, pregnancy (sertraline preferred), lactation (infant norfluoxetine accumulation). Consider alternatives per scenario.",
        reasoning: "Fluoxetine's strong CYP2D6 inhibition causes fatal interactions with thioridazine/pimozide. MAOI + fluoxetine = fatal serotonin syndrome (5-week washout needed). Long half-life problematic in pregnancy/lactation. Activating profile worsens anxious depression.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian OPD initiation for first-episode moderate depression (retarded phenotype) in an adult",
    lines: [
      "Rx",
      "Tab Fluoxetine 20 mg",
      "1 tab OD morning after food",
      "",
      "Advice: Take in morning with food (avoid insomnia).",
      "Full benefit may take 4–6 weeks (sometimes up to 8 weeks).",
      "If feeling more anxious/jittery in week 1–2, this is common — usually settles.",
      "Do NOT stop suddenly — but if you must, it's easier to stop than other SSRIs.",
      "After stopping, wait 5 WEEKS before any MAOI antidepressant.",
      "Avoid alcohol. Report if feeling worse or new suicidal thoughts.",
      "Call Tele-MANAS 14416 if in crisis.",
    ],
    followUp: [
      "Review after 2 weeks — tolerability, suicidality, activation/jitteriness",
      "Review after 4 weeks — early response (sleep, appetite, energy)",
      "Review after 8 weeks — steady-state response (later than other SSRIs)",
      "Review after 12 weeks — full response assessment with PHQ-9",
      "If remission (PHQ-9 <5): continue 6–12 months, then stop (taper rarely needed due to long half-life)",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information and individualise for each patient.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Not waiting 5 weeks after fluoxetine before starting an MAOI",
      why: "Fluoxetine's active metabolite norfluoxetine (half-life 4–9 days) persists for weeks after stopping. Starting an MAOI within 5 weeks of fluoxetine can cause fatal serotonin syndrome — this is the LONGEST washout of any SSRI (others require 14 days).",
      correction: "ALWAYS wait at least 5 weeks after stopping fluoxetine before initiating an MAOI. Document this in the patient's chart. Counsel the patient to inform any future doctor that they have taken fluoxetine recently.",
    },
    {
      mistake: "Combining fluoxetine with thioridazine or pimozide",
      why: "Fluoxetine is the strongest CYP2D6 inhibitor among SSRIs. It dramatically raises levels of thioridazine and pimozide → QTc prolongation → torsades de pointes → sudden death. This is a fatal combination.",
      correction: "Never co-prescribe fluoxetine with thioridazine or pimozide. Use a non-CYP2D6-inhibiting SSRI (sertraline, escitalopram) if these antipsychotics are required.",
    },
    {
      mistake: "Using fluoxetine as first-line in anxious/agitated depression",
      why: "Fluoxetine is the most activating SSRI. In anxious/agitated depression, the early activation can worsen anxiety, jitteriness, and insomnia — leading to early discontinuation and reduced adherence.",
      correction: "Match SSRI to depression phenotype. Retarded/anhedonic depression (psychomotor slowing, hypersomnia, hyperphagia) → fluoxetine. Anxious/agitated depression → sertraline or escitalopram.",
    },
    {
      mistake: "Overlooking CYP2D6 interactions with tramadol and codeine",
      why: "Fluoxetine's strong CYP2D6 inhibition blocks conversion of tramadol and codeine to their active metabolites (O-desmethyltramadol, morphine) — loss of analgesia. Also raises serotonin syndrome risk with tramadol.",
      correction: "Avoid co-prescription. Use paracetamol or non-serotonergic opioids (morphine, fentanyl) for pain. If tramadol/codeine essential, switch to non-CYP2D6-inhibiting SSRI.",
    },
    {
      mistake: "Confusing paediatric and adult dosing",
      why: "Fluoxetine is the only SSRI FDA-approved for paediatric depression (≥8 yrs), but paediatric doses are LOWER than adult. Child (8–12 yrs): start 10mg, max 20mg. Adolescent (≥13 yrs): start 10mg, max 60mg. Adult: start 20mg, max 80mg.",
      correction: "Always check age-appropriate dosing. Start 10–20mg in children and titrate slowly. Combine with CBT. Monitor weekly for suicidality (black box warning).",
    },
    {
      mistake: "Stopping after 2 weeks because 'it's not working'",
      why: "Fluoxetine takes 4–6 weeks (sometimes up to 8 weeks due to slow steady state) for full antidepressant effect. Stopping at 2 weeks means stopping before the drug has had a chance to work.",
      correction: "Counsel at initiation: 'Side effects come first (week 1–2), mood benefit comes later (week 4–8). Don't stop early.' For fluoxetine, full response assessment is at 12 weeks (later than other SSRIs).",
    },
    {
      mistake: "Abrupt discontinuation without counselling about MAOI washout",
      why: "Fluoxetine's long half-life means discontinuation syndrome is rare. BUT patients may think they can 'start any new antidepressant tomorrow' — they cannot start an MAOI for 5 weeks.",
      correction: "Counsel: 'Fluoxetine stays in your body for weeks. If a doctor wants to start an MAOI antidepressant, tell them you have taken fluoxetine in the last 5 weeks — they must wait.'",
    },
    {
      mistake: "Not asking about sexual dysfunction",
      why: "Sexual dysfunction affects 30–50% of patients on SSRIs and is the #1 reason for non-adherence. Patients rarely volunteer it.",
      correction: "Ask directly at every follow-up: 'Any changes in sexual interest or function?' If present, consider dose reduction, adding bupropion, or switching to a less-impacting agent.",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Concurrent thioridazine",
      reason: "Fluoxetine is a strong CYP2D6 inhibitor → raises thioridazine levels dramatically → QTc prolongation → torsades de pointes → sudden death. Absolutely contraindicated.",
      alternative: "Use a non-CYP2D6-inhibiting SSRI (sertraline, escitalopram) if thioridazine is essential, or use a different antipsychotic.",
    },
    {
      scenario: "Concurrent MAOIs (within 14 days before or 5 weeks after fluoxetine)",
      reason: "Fatal serotonin syndrome. The 5-week washout after fluoxetine (longest of any SSRI) is non-negotiable due to norfluoxetine's 4–9 day half-life.",
      alternative: "Wait 14 days after stopping an MAOI before starting fluoxetine. Wait 5 WEEKS after stopping fluoxetine before starting an MAOI.",
    },
    {
      scenario: "Severe hepatic impairment (Child-Pugh C)",
      reason: "Fluoxetine is hepatically metabolised (CYP2D6). Severe impairment → accumulation of fluoxetine and norfluoxetine → toxicity. Long half-life compounds the problem.",
      alternative: "Reduce dose drastically (start 10mg alternate days) or use escitalopram (slightly safer hepatic profile). Avoid in severe hepatic failure if possible.",
    },
    {
      scenario: "Anxious/agitated depression (initial presentation)",
      reason: "Fluoxetine is the most activating SSRI. In anxious/agitated depression, early activation worsens anxiety, jitteriness, and insomnia — leading to early discontinuation.",
      alternative: "Sertraline (σ1 agonism, anxiolytic) or escitalopram (low interaction profile) are preferred for anxious depression.",
    },
    {
      scenario: "Pregnancy (when sertraline is available)",
      reason: "Fluoxetine is NOT first choice in pregnancy — sertraline is preferred due to lower placental transfer and shorter fetal exposure. Fluoxetine's long half-life (norfluoxetine 4–9 days) means prolonged fetal exposure. Third-trimester use associated with neonatal adaptation syndrome.",
      alternative: "Sertraline is the SSRI of choice in pregnancy. Avoid paroxetine (Category D). If on fluoxetine and patient becomes pregnant, weigh risks/benefits — do NOT stop abruptly.",
    },
    {
      scenario: "Lactation (when alternatives available)",
      reason: "Fluoxetine's long half-life means norfluoxetine accumulates in infant serum (detectable in breastfed infants) — risk of infant irritability, poor sleep, feeding issues.",
      alternative: "Sertraline is the SSRI of choice in lactation (lowest milk/plasma ratio, undetectable infant levels). If fluoxetine must be used, counsel mother to watch for infant irritability or feeding issues.",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "What is the mechanism of action of fluoxetine? Why does it take 4–6 weeks (up to 8) to work? (SERT blockade is immediate; clinical effect correlates with 5-HT1A autoreceptor desensitisation and downstream BDNF/neurogenesis. Slow steady state due to norfluoxetine.)",
      "Why is the MAOI washout 5 weeks for fluoxetine but only 14 days for other SSRIs? (Norfluoxetine half-life 4–9 days; detectable in plasma up to 5 weeks.)",
      "Which SSRI is approved for bulimia nervosa? (Fluoxetine 60mg OD — only SSRI.)",
      "Which SSRI is approved for paediatric depression? (Fluoxetine ≥8 years — only SSRI.)",
      "Why is fluoxetine the strongest CYP2D6 inhibitor and what are the clinical consequences? (Thioridazine/pimozide QTc, TCA toxicity, codeine/tramadol loss of analgesia, tamoxifen reduced efficacy.)",
      "Why is fluoxetine the most activating SSRI? When is this useful and when is it problematic? (Useful in retarded depression; problematic in anxious/agitated depression.)",
    ],
    residentExpects: [
      "Know the starting dose and titration schedule (20mg → 40mg → 60mg; 10mg start in anxious/paediatric; 60mg target for bulimia)",
      "Know when to choose fluoxetine vs other SSRIs (retarded depression, bulimia, paediatric, adherence-poor, 'bridge' taper)",
      "Know the 5-week MAOI washout (longest of any SSRI)",
      "Know the CYP2D6 interactions and NEVER co-prescribe thioridazine/pimozide",
      "Know the 'bridge' technique for tapering shorter-acting SSRIs (substitute fluoxetine 20mg for last 1–2 weeks of paroxetine/venlafaxine taper)",
      "Know paediatric dosing (10–20mg child, up to 60mg adolescent)",
    ],
    consultantsDo: [
      "Use PHQ-9 at every visit for objective monitoring — note 12-week full-response assessment (later than other SSRIs)",
      "Screen for bipolar disorder (MDQ) before starting any antidepressant — fluoxetine's long half-life prolongs risk window if manic switch occurs",
      "Match SSRI to depression phenotype — retarded → fluoxetine; anxious → sertraline/escitalopram",
      "Use fluoxetine as 'bridge' for tapering shorter-acting SSRIs (paroxetine, venlafaxine)",
      "Avoid fluoxetine in pregnancy — sertraline is first choice",
      "Combine SSRI + CBT for moderate-severe depression (better outcomes than either alone)",
      "Consider cost — Jan Aushadhi generic fluoxetine is ₹2–4/tablet",
    ],
    internsMiss: [
      "Forgetting the 5-week MAOI washout (it's 14 days for other SSRIs — but 5 weeks for fluoxetine!)",
      "Not counselling about the activating effect in anxious patients (fluoxetine worsens anxiety in week 1–2)",
      "Co-prescribing fluoxetine with tramadol/codeine (loss of analgesia + serotonin syndrome risk)",
      "Co-prescribing fluoxetine with thioridazine/pimozide (fatal QTc prolongation)",
      "Not asking about sexual dysfunction (patients rarely volunteer it)",
      "Not checking sodium in elderly (SIADH risk)",
      "Not screening for bipolar disorder (manic switch risk — prolonged by long half-life)",
      "Not involving family in monitoring (critical in Indian joint family system)",
      "Not providing Tele-MANAS number (14416) for crisis support",
    ],
  },

  /* Refined high-yield level */
  highYieldLevel: "extreme",

  /* Drug family navigation */
  drugFamilyNav: {
    familyName: "SSRIs (Selective Serotonin Reuptake Inhibitors)",
    members: [
      { name: "Fluoxetine", slug: "fluoxetine", relationship: "Current drug", distinguishing: "Longest half-life (norfluoxetine 4–9 days); 5-week MAOI washout; only SSRI for bulimia & paediatric depression ≥8yr; strongest CYP2D6 inhibitor" },
      { name: "Sertraline", slug: "sertraline", relationship: "Same class (SSRI)", distinguishing: "SSRI of choice in pregnancy; σ1 agonism; 6 FDA indications; mild CYP2D6" },
      { name: "Escitalopram", slug: "escitalopram", relationship: "Same class (SSRI)", distinguishing: "S-enantiomer of citalopram; lowest CYP interactions; QTc watch" },
      { name: "Paroxetine", slug: "paroxetine", relationship: "Same class (SSRI)", distinguishing: "Shortest half-life (worst discontinuation); Category D; tamoxifen interaction; strong CYP2D6 like fluoxetine" },
      { name: "Citalopram", slug: "citalopram", relationship: "Same class (SSRI)", distinguishing: "Racemic parent of escitalopram; QTc dose-dependent; 40mg cap" },
      { name: "Fluvoxamine", slug: "fluvoxamine", relationship: "Same class (SSRI)", distinguishing: "OCD-only FDA indication; CYP1A2 inhibitor; tizanidine contraindicated" },
    ],
  },

  /* Learning time breakdown */
  learningTimeBreakdown: {
    read: "20 min",
    study: "50 min",
    revision: "10 min",
  },

  /* ---- Educational UX Layer ---- */

  /* Inline micro-quizzes — one after each major learning milestone */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which transporter does Fluoxetine inhibit?",
      options: ["DAT (dopamine transporter)", "NET (norepinephrine transporter)", "SERT (serotonin transporter)", "GABA transporter"],
      correctIndex: 2,
      explanation: "Fluoxetine selectively blocks SERT (serotonin transporter), increasing serotonin in the synaptic cleft. This is what makes it an SSRI — Selective Serotonin Reuptake Inhibitor. The 'selective' refers to its much greater affinity for SERT vs NET or DAT. Note: fluoxetine also produces modest NE/DA enhancement via CYP2D6 inhibition of catecholamine metabolism, contributing to its activating profile.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-timeline",
      question: "Why is the MAOI washout 5 weeks for fluoxetine but only 14 days for other SSRIs?",
      options: [
        "Fluoxetine is metabolised slowly by the liver",
        "Norfluoxetine (active metabolite) has a half-life of 4–9 days and is detectable in plasma for up to 5 weeks",
        "Fluoxetine inhibits CYP2D6, slowing MAOI metabolism",
        "Fluoxetine has high plasma protein binding",
      ],
      correctIndex: 1,
      explanation: "Norfluoxetine, fluoxetine's active metabolite, has a half-life of 4–9 days (up to 16 days in CYP2D6 poor metabolisers) and is detectable in plasma up to 5 weeks after stopping. Starting an MAOI within this window causes fatal serotonin syndrome. The 14-day washout for other SSRIs reflects their much shorter half-lives (21–26 hours). The 5-week washout is the single most tested fluoxetine fact.",
      afterSectionId: "timeline",
    },
    {
      id: "quiz-side-effects",
      question: "A patient with anxious/agitated depression is started on fluoxetine. At week 1, they report worsening anxiety, jitteriness, and insomnia. What went wrong?",
      options: [
        "Allergic reaction — stop immediately",
        "Wrong dose — should have started at 60mg",
        "Fluoxetine is the most activating SSRI — should have used sertraline or escitalopram for anxious depression",
        "Early serotonin syndrome — give cyproheptadine",
      ],
      correctIndex: 2,
      explanation: "Fluoxetine is the most activating SSRI. In anxious/agitated depression, the early activation (week 1–2) worsens anxiety, jitteriness, and insomnia — often leading to early discontinuation. Match SSRI to depression phenotype: retarded/anhedonic (psychomotor slowing, hypersomnia, hyperphagia) → fluoxetine; anxious/agitated → sertraline (σ1 agonism, anxiolytic) or escitalopram (low interaction profile).",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-monitoring",
      question: "A patient on fluoxetine 20mg for 6 weeks has PHQ-9 drop from 18 to 15 (<30% reduction). What is the next step?",
      options: [
        "Stop fluoxetine — it's not working",
        "Increase to 40–60mg OD and reassess at 12 weeks",
        "Switch immediately to an MAOI",
        "Add thioridazine for augmentation",
      ],
      correctIndex: 1,
      explanation: "PHQ-9 reduction <30% at 6 weeks → increase dose. Fluoxetine titrates 20mg → 40mg → 60mg (max 80mg). Note: fluoxetine's full response assessment is at 12 weeks (later than other SSRIs) due to slow steady state from norfluoxetine. NEVER add thioridazine or pimozide — fluoxetine's strong CYP2D6 inhibition causes fatal QTc prolongation. NEVER start an MAOI within 5 weeks of fluoxetine.",
      afterSectionId: "monitoring",
    },
    {
      id: "quiz-contraindications",
      question: "Which of the following is absolutely contraindicated with fluoxetine due to fatal QTc prolongation?",
      options: ["Paracetamol", "Thioridazine", "Ibuprofen", "Aspirin"],
      correctIndex: 1,
      explanation: "Fluoxetine's strong CYP2D6 inhibition dramatically raises thioridazine (and pimozide) levels → QTc prolongation → torsades de pointes → sudden death. This is an absolute, fatal contraindication. Other absolute contraindications: MAOIs (5-week washout required — longest of any SSRI), pimozide, concurrent thioridazine. Always review co-prescriptions before initiating fluoxetine.",
      afterSectionId: "contraindications",
    },
    {
      id: "quiz-evidence-practice",
      question: "For which two indications is fluoxetine the ONLY SSRI with FDA approval?",
      options: [
        "Major depressive disorder and generalised anxiety disorder",
        "Bulimia nervosa and paediatric depression (≥8 years)",
        "PTSD and social anxiety disorder",
        "OCD and panic disorder",
      ],
      correctIndex: 1,
      explanation: "Fluoxetine is the only SSRI FDA-approved for bulimia nervosa (60mg OD target — reduces binge-purge frequency independent of antidepressant effect) and paediatric depression ≥8 years (10–20mg child, up to 60mg adolescent). These unique approvals — combined with the longest half-life among SSRIs (mildest discontinuation, 5-week MAOI washout), most activating profile (useful in retarded depression), and strongest CYP2D6 inhibition — define fluoxetine's identity.",
      afterSectionId: "evidence-practice",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "Explain the mechanism of action of fluoxetine. Why is its long half-life clinically important?",
      answer: "Fluoxetine blocks SERT → ↑ synaptic 5-HT (hours). 5-HT1A autoreceptors initially brake firing; over 1–2 weeks they desensitise → ↑ serotonergic throughput → downstream BDNF/neurogenesis over 4–6 weeks (up to 8 weeks for fluoxetine due to slow steady state). The long half-life (parent 1–4 days; norfluoxetine 4–9 days, up to 16 days in CYP2D6 poor metabolisers) has four clinical consequences: (1) mildest discontinuation syndrome of any SSRI; (2) self-tapers — useful as a 'bridge' to taper paroxetine/venlafaxine; (3) 5-week washout required before MAOI (longest of any SSRI); (4) steady state takes 4–8 weeks — full response assessment later than other SSRIs.",
      topic: "Mechanism & Pharmacokinetics",
    },
    {
      question: "For which indications is fluoxetine the ONLY SSRI with FDA approval? List its full FDA-approved indications.",
      answer: "Unique to fluoxetine (no other SSRI): (1) Bulimia nervosa — 60mg OD target, reduces binge-purge frequency. (2) Paediatric depression ≥8 years — 10–20mg child, up to 60mg adolescent; only SSRI approved for paediatric MDD. Full FDA-approved list: MDD, OCD (adult & paediatric ≥7 yrs), bulimia nervosa, panic disorder, PMDD. These unique approvals — combined with long half-life and strong CYP2D6 inhibition — define fluoxetine's identity among SSRIs.",
      topic: "Indications",
    },
    {
      question: "Why is fluoxetine the strongest CYP2D6 inhibitor among SSRIs? List the critical interactions and their consequences.",
      answer: "Fluoxetine (along with paroxetine) is the strongest CYP2D6 inhibitor among SSRIs. Critical interactions: (1) Thioridazine and pimozide — raised levels → QTc prolongation → torsades de pointes → sudden death (ABSOLUTE contraindication, never combine); (2) TCAs — toxicity from raised levels; (3) Codeine and tramadol — blocks CYP2D6 conversion to active metabolites (morphine, O-desmethyltramadol) → loss of analgesia; also raises serotonin syndrome risk with tramadol; (4) Tamoxifen — blocks CYP2D6 conversion to active endoxifen → reduced anti-cancer efficacy (avoid in breast cancer patients). Always review co-prescriptions before initiating fluoxetine.",
      topic: "Drug Interactions",
    },
    {
      question: "A patient on fluoxetine develops agitation, clonus, hyperreflexia, and fever. What is the diagnosis and how do you manage it? What is unique about fluoxetine in this scenario?",
      answer: "Serotonin syndrome. Triad: mental status change + autonomic instability + neuromuscular excitation (clonus, hyperreflexia). Management: discontinue fluoxetine, supportive care (cooling, benzodiazepines for agitation), cyproheptadine (5-HT2A antagonist) in severe cases. Distinguish from NMS (rigidity + bradyreflexia). UNIQUE TO FLUOXETINE: Risk of recurrence persists for 5 WEEKS after stopping due to norfluoxetine accumulation — do NOT start any serotonergic drug (including another SSRI, SNRI, tramadol, triptans, linezolid, methylene blue) in this window. This is the longest washout of any SSRI.",
      topic: "Side Effects",
    },
    {
      question: "When is fluoxetine preferred over other SSRIs? When should it be avoided?",
      answer: "PREFERRED: (1) Retarded/anhedonic depression — activating profile suits psychomotor slowing, hypersomnia, hyperphagia; (2) Bulimia nervosa — only FDA-approved SSRI; (3) Paediatric depression ≥8 yrs — only FDA-approved SSRI; (4) Adherence-poor patients — long half-life forgives missed doses; (5) As a 'bridge' to taper shorter-acting SSRIs (paroxetine, venlafaxine) — long half-life self-tapers the patient. AVOIDED: (1) Anxious/agitated depression — too activating (use sertraline or escitalopram); (2) Pregnancy — sertraline preferred (shorter fetal exposure); (3) Lactation — infant norfluoxetine accumulation (sertraline preferred); (4) Elderly — polypharmacy CYP2D6 interactions, weight loss, insomnia, accumulation; (5) Concurrent thioridazine/pimozide (fatal QTc); (6) MAOIs within 5 weeks.",
      topic: "Clinical Selection",
    },
    {
      question: "How long must you wait after stopping fluoxetine before starting an MAOI? Why is this different from other SSRIs?",
      answer: "5 WEEKS — the longest washout of any SSRI (others require 14 days). Reason: norfluoxetine, the active metabolite, has a half-life of 4–9 days (up to 16 days in CYP2D6 poor metabolisers) and is detectable in plasma up to 5 weeks after stopping. Starting an MAOI within this window causes fatal serotonin syndrome (MAOIs inhibit serotonin breakdown; combining with SERT blockade causes massive serotonergic excess). The 14-day washout for other SSRIs reflects their much shorter half-lives (21–26 hours). Always document and counsel the patient to inform any future doctor that they have taken fluoxetine in the last 5 weeks.",
      topic: "Drug Interactions",
    },
  ],

  /* Guided learning paths — each mode shows a curated subset of sections */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language. What you need to know to take your medicine safely.",
      visibleSections: ["top", "quick-facts", "patient-education", "faq", "emergency"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "20 min",
      description: "Foundations, mechanism, clinical uses, side effects, and MBBS exam content.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "interactions", "patient-education", "learning-module", "high-yield-summary", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full clinical detail with exam-specific content, PYQs, and drug comparisons.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — advanced reasoning, ward pearls, guideline comparison, full evidence.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall", "references"],
    },
  ],

  /* Lesson grouping — sections organised into learning units */
  lessonGroups: [
    {
      number: 1,
      title: "Foundations",
      description: "What is this drug? Why does it matter?",
      sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"],
      checkpoint: "You now know what Fluoxetine is — its unique FDA approvals (bulimia, paediatric ≥8yr), its long half-life and active metabolite norfluoxetine, and its position among SSRIs as the most activating and strongest CYP2D6 inhibitor.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act in the brain?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand the mechanism — acute SERT blockade → 5-HT1A autoreceptor desensitisation → BDNF/neurogenesis over 4–6 weeks. The slow steady state (4–8 weeks) and the 5-week MAOI washout now make sense in light of norfluoxetine's 4–9 day half-life.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When do you use it? What goes wrong?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now prescribe fluoxetine safely — you know the indications (retarded depression, bulimia 60mg, paediatric ≥8yr, adherence-poor), the side effects to watch for (activation in anxious depression, sexual dysfunction, SIADH), the absolute contraindications (thioridazine, pimozide, MAOIs), and the critical CYP2D6 interactions (tramadol, codeine, tamoxifen, TCAs).",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it actually used in Indian hospitals?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands (Flunil, Prodep, Fludac, Oxatin), the government hospital workflow, the common mistakes interns make (especially 5-week MAOI washout, thioridazine co-prescription, activating effect in anxious patients, CYP2D6 interactions with tramadol/codeine/tamoxifen), and when NOT to choose fluoxetine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content (5-week MAOI washout, bulimia/paediatric approvals, CYP2D6 interactions, active metabolite norfluoxetine), worked through a clinical case, compared fluoxetine with the other 5 SSRIs, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions — especially the 5-week MAOI washout rationale, the unique FDA indications (bulimia & paediatric ≥8yr), and the CYP2D6 interaction list — you have exam-level mastery of Fluoxetine.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: [
    "Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Prozac & Sarafem labels, NICE CG91 & NG69, APA Practice Guideline, KD Tripathi 8e, IPS Depression Guidelines, NMC CBME Curriculum",
  ],
};
