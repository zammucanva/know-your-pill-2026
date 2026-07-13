import type { Drug } from "../types";

/**
 * Citalopram — canonical drug page data.
 *
 * Structured to mirror the sertraline / escitalopram template exactly so every
 * section of /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Citalopram is the racemic parent of escitalopram. It is pharmacologically
 * distinct from its S-enantiomer in one critical way: roughly half the dose
 * (the R-enantiomer) is essentially inactive at SERT yet contributes
 * disproportionately to hERG channel blockade and QTc prolongation. The 2011
 * FDA Drug Safety Communication — which capped dosing at 40 mg/day (20 mg/day
 * in elderly, hepatic impairment, and CYP2C19 poor metabolisers) — is the
 * single highest-yield exam fact about this drug.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for CELEXA (citalopram hydrobromide)
 *   - FDA Drug Safety Communication (2011): abnormal heart rhythms associated
 *     with high doses of citalopram — dose cap and QTc warning
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *
 * Last reviewed: 2026-07-13
 */
export const citalopram: Drug = {
  /* ---- Identity ---- */
  slug: "citalopram",
  genericName: "Citalopram",
  brandNames: ["Celexa", "Cipramil", "Celapram"],
  drugClass: "ssri",
  drugClassLabel: "SSRI",
  drugClassFullName: "Selective Serotonin Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SSRIs", "Citalopram"],

  /* ---- Hero / summary ---- */
  tagline:
    "The racemic parent of escitalopram — an effective SSRI whose dose is capped by dose-dependent QTc prolongation driven by the inactive R-enantiomer.",
  summary:
    "Citalopram is a racemic mixture of two enantiomers: S-citalopram (the pharmacologically active serotonin transporter blocker) and R-citalopram (essentially inactive at SERT but a meaningful blocker of the hERG potassium channel). The S-enantiomer does the antidepressant work; the R-enantiomer does most of the QTc damage. This stereochemistry is the entire reason escitalopram — the isolated S-enantiomer — was developed. In 2011, the FDA capped citalopram at 40 mg/day (down from 60 mg) and at 20 mg/day in patients older than 60, those with hepatic impairment, CYP2C19 poor metabolisers, and patients taking CYP2C19 inhibitors, after post-marketing data linked higher doses to QTc prolongation and torsades de pointes. Citalopram is FDA-approved only for major depressive disorder in adults — it is NOT approved for paediatric depression (unlike fluoxetine and escitalopram). It is metabolised primarily by CYP2C19, has a half-life of ~35 hours, and is generally well tolerated at appropriately capped doses.",
  estimatedReadTime: "16 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain why citalopram is a racemic mixture, identify which enantiomer is responsible for SERT blockade (S) versus hERG blockade (R), and articulate why escitalopram was developed as the S-only successor.",
    "Describe the mechanism of action — from acute SERT blockade to chronic 5-HT1A autoreceptor desensitisation — and why the clinical antidepressant effect is delayed 4–6 weeks despite rapid pharmacological action.",
    "Apply the FDA dose-capping rules: 40 mg/day maximum in adults; 20 mg/day maximum in patients >60 years, hepatic impairment, CYP2C19 poor metabolisers, and patients taking CYP2C19 inhibitors (e.g. omeprazole, fluvoxamine).",
    "Design an ECG and electrolyte monitoring plan for patients on citalopram, particularly at doses >20 mg, in the elderly, and in those on other QTc-prolonging drugs.",
    "Compare citalopram with escitalopram, sertraline, fluoxetine, and paroxetine — and articulate when the cheaper racemic drug is acceptable versus when the S-enantiomer is preferred.",
    "Recognise and manage the serious SSRI adverse effects: serotonin syndrome, SIADH, suicidality in patients under 25, abnormal bleeding, activation of mania, and discontinuation syndrome.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Citalopram is a racemic SSRI. The S-enantiomer selectively blocks the serotonin transporter (SERT); the R-enantiomer is essentially inactive at SERT but blocks the hERG potassium channel, producing dose-dependent QTc prolongation.",
    molecularTarget: "SERT (SLC6A4 — serotonin transporter) — via the S-enantiomer; hERG (KCNH2) potassium channel — via the R-enantiomer",
    effect:
      "Acute (S-enantiomer): increased synaptic serotonin. Chronic (2–6 weeks): desensitisation of 5-HT1A somatodendritic autoreceptors in the raphe nuclei, increased serotonergic throughput to the prefrontal cortex, and upregulation of BDNF in the hippocampus. Parallel off-target (R-enantiomer): hERG blockade → delayed ventricular repolarisation → QTc prolongation, dose-dependently.",
    steps: [
      "Citalopram is administered as a racemate — a 1:1 mixture of S-citalopram and R-citalopram. Only the S-enantiomer has clinically meaningful affinity for SERT; the R-enantiomer is essentially inactive at the transporter.",
      "S-citalopram binds the serotonin transporter (SERT) on the presynaptic neuron, blocking reuptake of serotonin from the synaptic cleft. Acute blockade raises synaptic serotonin concentration within hours.",
      "Somatodendritic 5-HT1A autoreceptors in the raphe nuclei detect the rise in serotonin and initially inhibit further serotonin release — which is why acute pharmacology does not immediately translate into mood benefit.",
      "Over 7–14 days, 5-HT1A autoreceptors gradually desensitise — removing the brake on serotonin firing.",
      "Serotonergic throughput from the raphe nuclei to the prefrontal cortex, amygdala, and hippocampus increases. Downstream neuroadaptive changes occur over 2–6 weeks: increased BDNF expression, hippocampal neurogenesis, and postsynaptic receptor downregulation — these delayed adaptations correlate with clinical antidepressant and anxiolytic effects.",
      "In parallel, the R-enantiomer (present in equal amount to the S-enantiomer in the racemate) blocks the hERG (KCNH2) potassium channel responsible for the rapid delayed-rectifier current (IKr) in cardiac ventricular myocytes. Blocking IKr delays phase 3 repolarisation, prolonging the QT interval on the surface ECG in a dose-dependent fashion. At supratherapeutic or high therapeutic doses this can precipitate torsades de pointes.",
      "Because half of every citalopram dose (the R-enantiomer) is essentially 'wasted' therapeutically but contributes fully to cardiac risk, the racemate is intrinsically less efficient than its isolated S-enantiomer (escitalopram). This is the pharmacological rationale for the existence of escitalopram.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~80%). Peak plasma at 4 hours. Food does not significantly affect absorption. Protein binding ~80%. Volume of distribution ~12 L/kg. Steady state reached in ~7–10 days. The racemate reaches equivalent peak concentrations of both enantiomers, but R-citalopram accumulates slightly more than S-citalopram at steady state — which may contribute to the QTc signal at higher doses.",
    halfLife: "Approximately 35 hours (range 30–40 hours) for the parent racemate — longer than escitalopram's 27–32 hours.",
    activeMetabolite:
      "N-desmethylcitalopram (DCT) and N-didemethylcitalopram (DDCT) — both weakly active at SERT and present at much lower concentrations than the parent. DDCT has notable hERG channel affinity and was historically implicated in cardiotoxicity at supratherapeutic doses; the FDA label change in 2011 was in part driven by this signal. Both metabolites contribute negligibly to clinical efficacy.",
    metabolism:
      "Hepatic CYP2C19 (primary), CYP3A4 and CYP2D6 (minor). CYP2C19 poor metabolisers achieve ~2-fold higher plasma concentrations of citalopram — hence the 20 mg/day dose cap in this population. Less CYP inhibition than fluoxetine or paroxetine, but more than escitalopram.",
    excretion: "Roughly 10% renal as unchanged drug; metabolites excreted predominantly in urine (~80%) with a smaller faecal component.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic", label: "Presynaptic neuron", sublabel: "Raphe nuclei — synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT transporter", sublabel: "Normally reuptakes serotonin", variant: "target" },
      { id: "racemate", label: "Citalopram (racemic)", sublabel: "1:1 mixture of S- and R-enantiomers", variant: "input" },
      { id: "s_enantiomer", label: "S-enantiomer", sublabel: "Active at SERT", variant: "inhibit" },
      { id: "r_enantiomer", label: "R-enantiomer", sublabel: "Inactive at SERT", variant: "process" },
      { id: "cleft", label: "↑ Synaptic 5-HT", sublabel: "More serotonin available", variant: "output" },
      { id: "autoreceptor", label: "5-HT1A autoreceptor", sublabel: "Initially brakes firing", variant: "process" },
      { id: "desensitised", label: "Autoreceptors desensitise", sublabel: "Days 7–14 — brake removed", variant: "output" },
      { id: "bdnf", label: "↑ BDNF + neurogenesis", sublabel: "Weeks 2–6 — antidepressant effect", variant: "output" },
      { id: "herg", label: "hERG (KCNH2) channel", sublabel: "Cardiac IKr current", variant: "target" },
      { id: "qtc", label: "QTc prolongation", sublabel: "Dose-dependent — risk of torsades", variant: "output" },
    ],
    edges: [
      { from: "presynaptic", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "racemate", to: "s_enantiomer", label: "50% of dose" },
      { from: "racemate", to: "r_enantiomer", label: "50% of dose" },
      { from: "s_enantiomer", to: "sert", type: "inhibit", label: "blocks (therapeutic)" },
      { from: "serotonin", to: "cleft", label: "accumulates" },
      { from: "cleft", to: "autoreceptor", label: "detects" },
      { from: "autoreceptor", to: "desensitised", label: "over 7–14 days" },
      { from: "desensitised", to: "bdnf", label: "weeks 2–6" },
      { from: "r_enantiomer", to: "herg", type: "inhibit", label: "blocks hERG (off-target)" },
      { from: "herg", to: "qtc", label: "delayed repolarisation" },
    ],
    caption:
      "Citalopram is a racemate. The S-enantiomer drives SERT blockade (therapeutic); the R-enantiomer drives hERG blockade (QTc). This is why escitalopram (S-only) was developed — to separate the therapeutic enantiomer from the cardiotoxic one. The 2011 FDA label change (60 mg → 40 mg max) followed directly from this QTc signal.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: ["SERT (serotonin transporter) — S-enantiomer", "hERG / KCNH2 potassium channel — R-enantiomer", "5-HT1A (autoreceptor, desensitises)", "5-HT2C", "5-HT7"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // SSRIs act on the diffuse serotonergic projection system, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description: "FDA-approved for adults only. NOT approved for paediatric depression (unlike fluoxetine ≥8 yrs and escitalopram ≥12 yrs). Start at 20 mg/day; may increase to 40 mg/day after ≥1 week if needed. 20 mg/day is the maximum in patients >60 years, with hepatic impairment, who are CYP2C19 poor metabolisers, or who are taking a CYP2C19 inhibitor.",
      ageGroup: "Adults only",
    },
    {
      name: "Generalised Anxiety Disorder (GAD)",
      status: "off-label",
      description: "Widely used off-label; SSRIs are first-line for GAD per NICE guidance, though citalopram lacks a specific FDA indication. Onset of anxiolytic benefit typically 4–6 weeks.",
    },
    {
      name: "Panic Disorder",
      status: "off-label",
      description: "Effective off-label; reduces frequency and intensity of panic attacks. Start at 10 mg/day (lower than for depression) to avoid early activation, titrate to 20–40 mg/day.",
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD)",
      status: "off-label",
      description: "Used off-label, particularly when escitalopram, sertraline, or fluvoxamine are not suitable. Higher doses (up to the 40 mg cap) are typically required, limiting its utility in OCD where higher SSRI doses are often needed.",
    },
    {
      name: "Premenstrual Dysphoric Disorder (PMDD)",
      status: "off-label",
      description: "Effective off-label, either continuously or intermittently (luteal phase only). As with other SSRIs, intermittent dosing works because onset of serotonergic effect on PMDD symptoms is rapid (days).",
    },
    {
      name: "Social Anxiety Disorder & PTSD",
      status: "off-label",
      description: "Used off-label for social anxiety disorder and post-traumatic stress disorder. Sertraline and paroxetine are FDA-approved alternatives for these indications.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (including phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. At least 14 days must elapse between discontinuation of an MAOI and initiation of citalopram, and vice versa.",
    },
    {
      name: "Pimozide",
      severity: "absolute",
      rationale:
        "Contraindicated due to combined QTc prolongation (both pimozide and citalopram prolong QTc) and risk of torsades de pointes. Citalopram also inhibits CYP2C19, raising pimozide levels.",
    },
    {
      name: "Congenital long-QT syndrome",
      severity: "absolute",
      rationale:
        "Patients with congenital long-QT syndrome are at baseline risk of torsades de pointes. Any additional QTc-prolonging drug is contraindicated.",
    },
    {
      name: "Other QTc-prolonging drugs (class IA/III antiarrhythmics, antipsychotics, macrolides, fluoroquinolones)",
      severity: "relative",
      rationale:
        "Additive QTc prolongation significantly increases torsades de pointes risk. Avoid combination where possible; if unavoidable, monitor ECG and electrolytes closely and use the lowest effective citalopram dose.",
    },
    {
      name: "Known hypersensitivity to citalopram or escitalopram",
      severity: "absolute",
      rationale: "Anaphylaxis and angioedema have been reported. Cross-reactivity with escitalopram is expected given shared structure.",
    },
    {
      name: "Significant hypokalaemia or hypomagnesaemia (uncorrected)",
      severity: "relative",
      rationale:
        "Hypokalaemia and hypomagnesaemia both independently prolong QTc and potentiate the torsades risk of citalopram. Correct electrolytes before initiation.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Citalopram is NOT approved for paediatric depression. Anyone considering the use of citalopram in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. A second boxed warning addresses dose-dependent QTc prolongation and torsades de pointes (see Contraindications and Monitoring).",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea & GI upset",
      frequency: "very-common",
      severity: "mild",
      description: "Dose-dependent, typically resolves after 1–2 weeks. Taking with food reduces severity.",
      management: "Take with food. Split dosing. Consider temporary dose reduction.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "very-common",
      severity: "moderate",
      description: "Decreased libido, delayed orgasm/anorgasmia, erectile dysfunction. Often unreported by patients and undertreated. Class effect of all SSRIs.",
      management: "Dose reduction if possible. Add bupropion XL 150 mg/day. Consider switch to bupropion or mirtazapine. Sildenafil for erectile component.",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Insomnia or somnolence",
      frequency: "common",
      severity: "mild",
      description: "Either can occur; citalopram is generally mildly activating. Morning dosing preferred if activating.",
      management: "If activating → take in morning. If sedating → take at night. If severe, consider switch to escitalopram.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Usually transient in the first 1–2 weeks. Differentiate from serotonin syndrome (which includes hyperreflexia and clonus).",
      management: "Paracetamol is safe. Avoid NSAIDs (bleeding risk).",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Mild effect. Sip water, sugar-free gum.",
    },
    {
      name: "Sweating",
      frequency: "common",
      severity: "mild",
      description: "Particularly nocturnal. Likely serotonergic effect on hypothalamic thermoregulation. Distressing but benign.",
    },
    {
      name: "Diarrhoea",
      frequency: "common",
      severity: "mild",
      description: "Serotonin acts on 5-HT3 receptors in the gut. Usually transient.",
    },
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "Usually mild and transient. If persistent or severe, evaluate for hyponatraemia or QTc-related arrhythmia.",
    },
    {
      name: "Upper respiratory tract infection",
      frequency: "common",
      severity: "mild",
      description: "Reported in clinical trials at slightly higher rates than placebo — clinical significance unclear.",
    },
  ],

  seriousSideEffects: [
    {
      name: "QTc Prolongation (signature risk)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Dose-dependent prolongation of the QT interval on surface ECG, driven primarily by the R-enantiomer's blockade of the hERG (KCNH2) potassium channel. Mean QTc prolongation at 20 mg is ~8 ms, at 40 mg ~12 ms, and at 60 mg ~18 ms (versus placebo). Above 40 mg/day the torsades risk becomes clinically meaningful. This is the rationale for the 2011 FDA label change capping the dose at 40 mg/day (20 mg/day in elderly, hepatic impairment, CYP2C19 poor metabolisers, or patients on CYP2C19 inhibitors).",
      management:
        "Cap dose at 40 mg/day (20 mg/day in elderly, hepatic impairment, CYP2C19 PM, or with CYP2C19 inhibitors). Check baseline ECG in patients with risk factors and a follow-up ECG after dose escalation above 20 mg. Correct hypokalaemia and hypomagnesaemia. Avoid other QTc-prolonging drugs. Discontinue if QTc >500 ms or increases >60 ms from baseline.",
      sideEffectId: "qtc-prolongation",
    },
    {
      name: "Torsades de pointes",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Polymorphic ventricular tachycardia that can degenerate into ventricular fibrillation and sudden cardiac death. Risk is highest at supratherapeutic doses (>40 mg/day), in patients with hypokalaemia/hypomagnesaemia, congenital long-QT syndrome, or those on other QTc-prolonging drugs. Female sex and bradycardia are additional risk factors.",
      management:
        "Stop citalopram immediately. IV magnesium sulfate (2 g bolus) is first-line. Correct electrolytes. Cardiology consult; may need overdrive pacing or isoproterenol if bradycardia-dependent. ICU admission.",
    },
    {
      name: "Serotonin Syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis), and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of initiating, increasing, or combining serotonergic agents.",
      management:
        "Discontinue citalopram immediately. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU admission for hyperthermia >41°C.",
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
        "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk. Citalopram is NOT approved for paediatric depression.",
      management:
        "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent.",
    },
    {
      name: "Abnormal bleeding",
      frequency: "uncommon",
      severity: "moderate",
      description:
        "Serotonin is stored in platelets and is essential for aggregation. SSRIs deplete platelet serotonin within 2 weeks, impairing clotting. Risk multiplied when combined with NSAIDs, aspirin, or warfarin.",
      management: "Caution in patients with coagulopathy or on anticoagulants. Consider GI protection if combined with NSAIDs.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description:
        "In patients with undiagnosed bipolar disorder, SSRIs can trigger a manic episode. Screen for personal and family history of bipolar disorder before initiating.",
      management:
        "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "common",
      severity: "moderate",
      description:
        "Occurs if stopped abruptly after ≥4 weeks of use. Symptoms: dizziness, 'brain zaps' (paresthesia), nausea, headache, irritability, insomnia. Severity is intermediate among SSRIs — worse than fluoxetine, similar to sertraline, milder than paroxetine/venlafaxine.",
      management:
        "Taper over at least 4 weeks. If symptoms emerge, return to previous dose and taper more slowly. Fluoxetine self-taper (long half-life) can be substituted for shorter half-life SSRIs near end of taper.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "ECG (QTc)",
      frequency: "Baseline in patients with risk factors (age >60, cardiac disease, electrolyte abnormalities, family history of sudden death, concurrent QTc-prolonging drugs). Repeat ECG after dose escalation above 20 mg and at steady state. Consider serial ECGs in high-risk patients.",
      rationale:
        "Citalopram produces dose-dependent QTc prolongation via R-enantiomer hERG blockade. The 2011 FDA label change reduced the maximum daily dose from 60 mg to 40 mg (and to 20 mg in elderly, hepatic impairment, CYP2C19 poor metabolisers, and those on CYP2C19 inhibitors). Baseline and follow-up ECGs are the cornerstone of risk mitigation.",
    },
    {
      parameter: "Serum potassium and magnesium",
      frequency: "Baseline and periodically in high-risk patients (especially elderly, on diuretics, or with cardiac disease).",
      rationale:
        "Hypokalaemia and hypomagnesaemia independently prolong QTc and dramatically potentiate torsades risk. Correct before initiation and during therapy.",
    },
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes.",
    },
    {
      parameter: "Serum sodium",
      frequency: "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale: "SSRIs cause SIADH in ~0.5–1% of patients. Highest risk in elderly females.",
    },
    {
      parameter: "CYP2C19 genotype (if available)",
      frequency: "Once, before initiation or at any time if clinically indicated.",
      rationale:
        "CYP2C19 poor metabolisers achieve ~2-fold higher citalopram plasma concentrations and must have their dose capped at 20 mg/day. Pharmacogenomic testing is increasingly available and is recommended by CPIC guidelines when accessible.",
    },
    {
      parameter: "Response assessment (PHQ-9 / GAD-7)",
      frequency: "Baseline, week 4, week 8, then every 3 months.",
      rationale: "Quantifies response. ≥50% reduction in PHQ-9 = response. PHQ-9 <5 = remission.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 3 months, then every 6 months.",
      rationale: "Mild weight gain may occur long-term. Less than mirtazapine or paroxetine.",
    },
  ],

  interactions: [
    {
      drug: "Other QTc-prolonging drugs — class IA/III antiarrhythmics (quinidine, procainamide, amiodarone, sotalol), antipsychotics (haloperidol, droperidol, ziprasidone, thioridazine), macrolides (erythromycin, clarithromycin), fluoroquinolones (moxifloxacin), antimalarials",
      severity: "major",
      mechanism: "Additive QTc prolongation via independent hERG blockade. Citalopram contributes its own dose-dependent QTc effect — combinations substantially raise torsades de pointes risk.",
      action:
        "Avoid combination wherever possible. If unavoidable, use the lowest effective citalopram dose (≤20 mg if risk factors present), correct electrolytes, and obtain baseline + follow-up ECGs. Consider azithromycin instead of erythromycin/clarithromycin (azithromycin has minimal QTc effect).",
    },
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism: "MAOIs inhibit serotonin breakdown. Combining with SERT blockade causes massive serotonergic excess → serotonin syndrome.",
      action:
        "Absolute contraindication. Wait 14 days after stopping MAOI before starting citalopram; 14 days after stopping citalopram before starting MAOI.",
    },
    {
      drug: "Pimozide",
      severity: "contraindicated",
      mechanism: "Combined QTc prolongation + CYP2C19-mediated pimozide level elevation → torsades de pointes.",
      action: "Never combine.",
    },
    {
      drug: "CYP2C19 inhibitors — omeprazole, esomeprazole, fluvoxamine, fluoxetine, moclobemide, ticlopidine",
      severity: "moderate",
      mechanism:
        "CYP2C19 is the primary metabolic pathway for citalopram. Inhibition raises citalopram plasma levels ~2-fold — equivalent to being a CYP2C19 poor metaboliser. Higher levels → more QTc prolongation.",
      action:
        "Reduce citalopram maximum dose to 20 mg/day when co-prescribed. Consider pantoprazole (less CYP2C19 inhibition) instead of omeprazole. Monitor for QTc and serotonin toxicity.",
    },
    {
      drug: "Tramadol",
      severity: "major",
      mechanism:
        "Tramadol is a weak serotonin–norepinephrine reuptake inhibitor and inhibits serotonin reuptake. Combined with SSRIs, raises serotonin syndrome risk. Also lowers seizure threshold.",
      action: "Avoid if possible. If unavoidable, use lowest tramadol dose, monitor for serotonin syndrome and seizures.",
    },
    {
      drug: "Triptans (sumatriptan, rizatriptan)",
      severity: "major",
      mechanism: "Triptans are 5-HT1B/1D agonists — additive serotonergic effect.",
      action: "Use cautiously. Monitor for serotonin syndrome, especially in first month of SSRI therapy.",
    },
    {
      drug: "NSAIDs & aspirin",
      severity: "moderate",
      mechanism:
        "SSRIs deplete platelet serotonin → impaired aggregation. NSAIDs cause GI mucosal damage. Combined → ~6× increased risk of upper GI bleeding.",
      action: "Co-prescribe gastroprotection (PPI) in elderly or those with prior GI bleed. Consider paracetamol instead.",
    },
    {
      drug: "Warfarin / DOACs",
      severity: "moderate",
      mechanism: "Additive bleeding risk (platelet effect + anticoagulation).",
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
      drug: "Drugs that lower seizure threshold (bupropion, tramadol, antipsychotics)",
      severity: "moderate",
      mechanism: "Citalopram lowers seizure threshold at high doses; combinations can precipitate seizures.",
      action: "Use cautiously in patients with epilepsy. Avoid high-dose combinations.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Citalopram is generally considered acceptable in pregnancy when pharmacotherapy is necessary, but it is NOT the SSRI of choice — sertraline is preferred due to a larger reproductive safety database and the lowest milk/plasma ratio in lactation. Citalopram has not been associated with a specific teratogenic signal (unlike paroxetine, which carries a 1st-trimester cardiac defect signal). Third-trimester use is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding) in ~30% of exposed neonates — usually self-limited. Persistent pulmonary hypertension of the newborn (PPHN) has been weakly associated with third-trimester SSRI exposure (absolute risk ~1 in 200). Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks. The QTc precaution is theoretically relevant in the neonatal period; observe exposed neonates for arrhythmia.",
    lactation:
      "Citalopram is excreted into breast milk in higher concentrations than sertraline or paroxetine (milk/plasma ratio ~3; relative infant dose ~3–5%). Infant serum levels are detectable, and isolated case reports describe infant irritability, sedation, and poor weight gain. Sertraline or paroxetine are preferred SSRIs in breastfeeding. If citalopram is required, monitor the infant for sedation, feeding, and weight gain.",
  },

  renalAdjustment: "No dose adjustment required in mild–moderate renal impairment (CrCl 20–50 mL/min). Limited data in severe renal impairment (CrCl <20 mL/min) — use cautiously and at the lower end of the dose range.",

  hepaticAdjustment:
    "Maximum dose 20 mg/day in hepatic impairment (Child-Pugh A and B). The 20 mg cap is mandatory, not optional — hepatic impairment raises citalopram plasma levels and QTc risk. Avoid in severe hepatic impairment (Child-Pugh C) if possible.",

  /* ---- Education ---- */
  patientExplanation:
    "Citalopram is a medicine that helps the brain keep more of a chemical called serotonin available for longer. Serotonin is one of the chemicals your brain uses to regulate mood, anxiety, sleep, and appetite. By keeping more of it active between nerve cells, citalopram helps your brain's mood-regulation system work better — but this doesn't happen immediately. Most people feel some side effects in the first week or two (often nausea, sleep changes, or feeling a bit wired) before the mood benefit builds up over 4–6 weeks. Citalopram is part of a class of medicines called SSRIs. One thing that is special about citalopram is that the maximum dose is capped — for most adults it is 40 mg a day, and for people over 60 or with certain other conditions it is 20 mg a day. This is because higher doses can affect the electrical rhythm of the heart (the QT interval on an ECG). Always tell every doctor, pharmacist, and dentist that you take citalopram so they can check it against any new medicine they prescribe.",

  patientEducationPoints: [
    "Some early changes can happen within 1–2 weeks, but clearer mood benefit often takes 4–6 weeks or longer. Don't stop early just because you don't feel better yet.",
    "Nausea, headache, sleep change, or restlessness may appear before mood benefit. These usually settle within 1–2 weeks. Persistent or severe effects should be discussed with your clinician.",
    "The maximum dose of citalopram is capped for safety. For most adults this is 40 mg a day. If you are over 60, have liver problems, or take certain other medicines (including the common stomach medicine omeprazole), the maximum is 20 mg a day. Never increase your dose beyond what your doctor prescribed.",
    "Citalopram can affect the electrical rhythm of the heart (the QT interval). Tell your doctor about ALL your medicines — especially antibiotics (macrolides like erythromycin/clarithromycin, and fluoroquinolones like ciprofloxacin/moxifloxacin), antipsychotics, heart rhythm medicines, and over-the-counter medicines. Some combinations can be dangerous.",
    "Tell your doctor if you have ever had a heart problem, an irregular heartbeat, fainting spells, or a family member who died suddenly at a young age. They may want to do an ECG (heart tracing) before and during treatment.",
    "Tell your doctor about low potassium or magnesium levels, vomiting, diarrhoea, or taking water pills (diuretics) — these can affect heart rhythm and may need a blood test.",
    "Citalopram is not considered addictive in the way alcohol, opioids, or benzodiazepines can be, but stopping suddenly can still cause uncomfortable discontinuation symptoms ('brain zaps', dizziness, irritability). Always come off slowly with your doctor's guidance.",
    "Seek emergency help for signs of serotonin syndrome: high fever, confusion, sweating, agitation, tremor, muscle rigidity or twitching, fast heartbeat — especially after a dose increase or starting a new interacting medicine.",
    "Watch for warning signs in the first month: new or worsening agitation, irritability, anxiety, or suicidal thoughts — particularly if you're under 25. Contact your clinician immediately.",
    "If you miss a dose, take it when you remember unless it is within 8 hours of your next dose — in that case, skip the missed dose. Do not double up. Avoid alcohol — it can worsen sleepiness, mood symptoms, and tolerability.",
  ],

  clinicalPearls: [
    "Citalopram is the racemic parent of escitalopram. The S-enantiomer does the SERT blockade (the antidepressant work); the R-enantiomer is essentially inactive at SERT but blocks hERG and drives QTc prolongation. This stereochemistry is the entire reason escitalopram exists.",
    "The 2011 FDA Drug Safety Communication capped citalopram at 40 mg/day (down from 60 mg) after post-marketing QTc / torsades data. The same communication capped escitalopram at 20 mg/day. This label change is a high-yield exam fact.",
    "20 mg of citalopram is approximately equivalent to 10 mg of escitalopram in SERT blockade — but at equivalent antidepressant doses, escitalopram carries less QTc risk because the R-enantiomer is absent.",
    "Use the 20 mg/day cap in: age >60 years, hepatic impairment (Child-Pugh A/B), CYP2C19 poor metabolisers, and patients taking CYP2C19 inhibitors (omeprazole, esomeprazole, fluvoxamine, fluoxetine, moclobemide). This list is essentially mandatory knowledge for prescribing.",
    "Citalopram is NOT approved for paediatric depression — fluoxetine (≥8 years) and escitalopram (≥12 years) are. The black-box suicidality warning applies particularly strongly in this population.",
    "CYP2C19 is the primary metabolic enzyme (not CYP2D6, as with paroxetine and fluoxetine). CYP2C19 poor metabolisers have ~2× higher plasma levels. Pharmacogenomic testing is increasingly available and is recommended by CPIC when accessible.",
    "Common stomach medicines omeprazole and esomeprazole are CYP2C19 inhibitors and effectively halve the maximum citalopram dose. Use pantoprazole (minimal CYP2C19 inhibition) when a PPI is needed in a patient on citalopram.",
    "Citalopram is generally the cheapest SSRI (generic, off-patent) and remains a reasonable first-line SSRI for adult depression in resource-limited settings or when escitalopram is unavailable — provided the dose-capping rules and QTc precautions are respected.",
    "Sexual dysfunction affects 30–50% of patients on citalopram and is the #1 reason patients stop. Always ask directly — patients rarely volunteer it. Add bupropion XL 150 mg/day or switch to bupropion/mirtazapine if problematic.",
    "ECG monitoring is recommended at baseline and after dose escalation above 20 mg in patients >60, with cardiac disease, electrolyte abnormalities, or on other QTc-prolonging drugs. A QTc >500 ms or an increase >60 ms from baseline warrants dose reduction or discontinuation.",
  ],

  examPearls: [
    "Citalopram = RACEMIC mixture. Escitalopram = S-enantiomer (the active one). The R-enantiomer is essentially inactive at SERT but blocks hERG → QTc prolongation. This single fact underpins the entire clinical distinction.",
    "QTc prolongation is dose-dependent and is the #1 exam fact about citalopram. Mean QTc increase: ~8 ms at 20 mg, ~12 ms at 40 mg, ~18 ms at 60 mg. Above 40 mg/day the torsades risk becomes clinically meaningful.",
    "Maximum dose: 40 mg/day in adults; 20 mg/day in elderly (>60 yrs), hepatic impairment, CYP2C19 poor metabolisers, and patients taking CYP2C19 inhibitors. Memorise this list — it appears on virtually every prescribing exam.",
    "FDA 2011 Drug Safety Communication: maximum daily dose reduced from 60 mg to 40 mg because of QTc / torsades de pointes risk. The same communication capped escitalopram at 20 mg/day. High-yield historical fact.",
    "R-enantiomer → hERG (KCNH2) blockade → delayed ventricular repolarisation → QTc prolongation. S-enantiomer → SERT blockade → antidepressant effect. The two enantiomers have completely different clinically relevant targets.",
    "Metabolism: CYP2C19 (primary), CYP3A4 and CYP2D6 (minor). NOT primarily CYP2D6 (that is paroxetine/fluoxetine). CYP2C19 poor metabolisers have ~2× higher levels.",
    "Citalopram is NOT FDA-approved for paediatric depression (unlike fluoxetine ≥8 yrs and escitalopram ≥12 yrs). The black-box suicidality warning applies.",
    "Avoid combining with other QTc-prolonging drugs: class IA/III antiarrhythmics (amiodarone, sotalol, quinidine), antipsychotics (haloperidol, ziprasidone, thioridazine), macrolides (erythromycin, clarithromycin — consider azithromycin), fluoroquinolones (moxifloxacin).",
    "Common CYP2C19 inhibitors that mandate the 20 mg/day cap: omeprazole, esomeprazole, fluvoxamine, fluoxetine, moclobemide, ticlopidine. Use pantoprazole if a PPI is required.",
    "Half-life: ~35 hours — longer than escitalopram (27–32 h) and paroxetine (21 h), shorter than fluoxetine (1–4 days with norfluoxetine).",
    "Dose equivalence: 20 mg citalopram ≈ 10 mg escitalopram. But at equivalent antidepressant doses, escitalopram has less QTc risk because the R-enantiomer is absent.",
    "Black box warning: suicidality in <25. Citalopram is not approved in paediatric depression — never first-line in a child or adolescent with depression.",
    "Contraindications: MAOIs (14-day washout), pimozide (QTc), congenital long-QT syndrome, known hypersensitivity. Relative: other QTc-prolonging drugs, uncorrected hypokalaemia/hypomagnesaemia.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "CIT — Citalopram signature",
      trick: "Citalopram = Check QTc · Isomers Two (R + S) · Twenty mg in elderly",
      remembers:
        "The three highest-yield citalopram facts: (1) QTc monitoring is essential, (2) it is a racemic mixture of R- and S-enantiomers, (3) the maximum dose in elderly (and other at-risk groups) is 20 mg/day.",
    },
    {
      title: "S does the Serotonin; R Ruins the Rhythm",
      trick: "S-enantiomer = Serotonin (SERT) blockade = antidepressant effect. R-enantiomer = Rhythm (hERG) blockade = QTc prolongation.",
      remembers:
        "Which enantiomer does what. The S-enantiomer is the active antidepressant (and is what escitalopram IS). The R-enantiomer is inactive at SERT but causes the cardiac QT problem — and is what escitalopram deliberately LEFT OUT.",
    },
    {
      title: "40 → 20 → 2011",
      trick: "40 mg max in adults. 20 mg max in Elderly / hepatic / 2C19 poor metabolisers / 2C19 Inhibitors. 2011 = FDA label change (60 → 40).",
      remembers:
        "The full dose-capping rule. Most adults 40 mg/day; four specific groups cap at 20 mg/day; the rule was born in 2011 when the FDA cut the maximum from 60 to 40 mg due to QTc/torsades risk.",
    },
    {
      title: "2C19 — Not 2D6",
      trick: "Citalopram is metabolised by 2C19, not 2D6. '2C19 = Citalopram'.",
      remembers:
        "The CYP enzyme. Paroxetine and fluoxetine are the famous CYP2D6 inhibitors; citalopram's primary enzyme is CYP2C19 — which is why CYP2C19 inhibitors (omeprazole!) and CYP2C19 poor metaboliser status mandate a 20 mg/day dose cap.",
    },
    {
      title: "OMEPRAZOLE halves the cap",
      trick: "Omeprazole is a CYP2C19 inhibitor → 20 mg/day citalopram cap when co-prescribed. Swap to Pantoprazole to avoid the interaction.",
      remembers:
        "The single most common real-world citalopram interaction. Patients on long-term omeprazole for reflux or GI protection often end up on citalopram — and many prescribers forget to halve the dose cap. Switching to pantoprazole (minimal CYP2C19 inhibition) avoids the issue.",
    },
    {
      title: "Racemic → R-escitalopram problem",
      trick: "Racemic citalopram has the R-enantiomer. Escitalopram is 'escape'-italopram — escape from the R-enantiomer.",
      remembers:
        "Why escitalopram was developed. By isolating the active S-enantiomer, escitalopram delivers the antidepressant effect without the R-enantiomer's hERG/QTc liability — a textbook example of stereochemistry solving a clinical problem.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: SSRI — racemic mixture of S-citalopram (active at SERT) and R-citalopram (inactive at SERT, blocks hERG).",
    "Mechanism: S-enantiomer blocks SERT → ↑ synaptic 5-HT → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ BDNF + neurogenesis (4–6 weeks). Parallel: R-enantiomer blocks hERG → QTc prolongation (dose-dependent).",
    "FDA indication: Major Depressive Disorder in ADULTS ONLY (not paediatric). Off-label: GAD, panic, OCD, PMDD, social anxiety, PTSD.",
    "Signature risk: dose-dependent QTc prolongation → torsades de pointes. The defining safety issue of this drug.",
    "Dose caps: 40 mg/day in adults; 20 mg/day in patients >60 yrs, hepatic impairment, CYP2C19 poor metabolisers, or on CYP2C19 inhibitors (omeprazole, esomeprazole, fluvoxamine, fluoxetine, moclobemide).",
    "FDA 2011 label change: 60 mg → 40 mg maximum due to QTc/torsades signal. High-yield historical fact.",
    "Common side effects: nausea, sexual dysfunction (30–50%), insomnia, headache, sweating, diarrhoea.",
    "Serious: QTc prolongation + torsades de pointes (signature), serotonin syndrome, SIADH (elderly females), suicidality <25 (black box), bleeding (platelet), activation of mania, discontinuation syndrome.",
    "Contraindications: MAOIs (14-day washout), pimozide (QTc), congenital long-QT syndrome, hypersensitivity. Relative: other QTc-prolonging drugs, uncorrected hypokalaemia/hypomagnesaemia.",
    "Interactions: QTc-prolonging drugs (amiodarone, sotalol, haloperidol, ziprasidone, macrolides, fluoroquinolones), MAOIs, pimozide, CYP2C19 inhibitors (omeprazole!), tramadol, triptans, NSAIDs/warfarin (bleeding), St John's Wort.",
    "Pharmacokinetics: half-life ~35 h (longer than escitalopram). Metabolised by CYP2C19 (primary), CYP3A4, CYP2D6 (minor). CYP2C19 PMs have ~2× higher levels.",
    "Pregnancy: acceptable but NOT the SSRI of choice (sertraline preferred). Former Category C. Lactation: detectable in infant serum; sertraline/paroxetine preferred in breastfeeding.",
    "Vs escitalopram: 20 mg citalopram ≈ 10 mg escitalopram in SERT blockade, but escitalopram has less QTc risk at equivalent doses (no R-enantiomer).",
    "Monitoring: ECG at baseline + after dose escalation in high-risk patients; K+ and Mg2+; serum Na in elderly; mood/suicidality weekly × 1 month; CYP2C19 genotyping if available; PHQ-9 at baseline/4/8 weeks.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Late-life depression in a 68-year-old man with reflux — why the 20 mg cap and ECG matter",
      presentation:
        "A 68-year-old man presents with 3 months of low mood, anhedonia, early-morning waking, and weight loss. He takes omeprazole 20 mg daily for gastro-oesophageal reflux and has well-controlled hypertension on amlodipine.",
      history:
        "Mr K, a 68-year-old retired teacher, presents to his GP with 3 months of persistent low mood, loss of interest in his grandchildren and gardening, early-morning waking at 4 AM, and 5 kg unintentional weight loss. He feels 'a burden to my wife' and admits to passive death wishes but no active plan. No prior psychiatric history. Past medical history: hypertension (well controlled on amlodipine 5 mg daily), gastro-oesophageal reflux disease (on omeprazole 20 mg daily for 4 years), and a remote appendectomy. No known cardiac disease, no syncope, no family history of sudden cardiac death. He drinks 2–3 units of alcohol per week, does not smoke, no recreational drugs. Lives with his wife of 45 years. PHQ-9 score 18 (moderately severe). GAD-7 score 8 (mild).",
      examination:
        "Alert, oriented, cooperative. Speech slow but normal in content. Mood '3/10', affect congruent. No hallucinations, no delusions, no thought disorder. MoCA 26/30 (mildly reduced, stable from a prior test 2 years ago). Cardiovascular exam: regular rhythm, HR 64, BP 138/82, no murmurs. BMI 24. TSH normal. Basic metabolic panel: Na 138, K 4.1, Mg 0.85 (normal), renal function normal. LFTs normal. Baseline ECG: sinus rhythm, QTc 440 ms (within normal limits for a male).",
      diagnosis:
        "Major Depressive Disorder, single episode, moderate-severe, without psychotic features (ICD-10 F32.2). Differential: vascular depression (given age and hypertension — likely contributor); hypothyroidism-induced depression (TSH normal — excluded); bipolar depression (screen with MDQ — negative). The omeprazole is clinically critical: it is a CYP2C19 inhibitor and therefore caps citalopram at 20 mg/day in this patient.",
      rationale:
        "An SSRI is first-line. Citalopram is acceptable because: (1) the patient is an adult with MDD; (2) generic citalopram is inexpensive and formulary-preferred; (3) the patient's baseline QTc is normal (440 ms), giving a safe margin; (4) the patient is on amlodipine (no QTc liability, unlike some antihypertensives). Crucial constraints: (i) age >60 → 20 mg/day cap; (ii) omeprazole (CYP2C19 inhibitor) → 20 mg/day cap — both independently mandate the same 20 mg ceiling, so the cap is non-negotiable; (iii) baseline and follow-up ECG required because the dose may need titration toward the cap. Sertraline would be a reasonable alternative (less QTc liability, no CYP2C19 cap) but slightly more CYP2D6 interaction; escitalopram would also be reasonable (10 mg cap in this patient) but more expensive. The shared decision was to use citalopram with strict 20 mg/day ceiling and ECG follow-up.",
      management:
        "Started citalopram 10 mg every morning with food (lower than the cap, to assess tolerability). Plan: review at 1 week (tolerability + suicidality + ECG), 2 weeks (serum Na — elderly), 4 weeks (early response, ECG, dose escalation to 20 mg if tolerated and PHQ-9 reduction <30%), 8 weeks (full response assessment, ECG). Counseled: (1) expect side effects before benefit; (2) DO NOT exceed 20 mg/day — explained the QTc rationale and the omeprazole interaction in plain language; (3) tell every clinician he sees that he is on citalopram, especially before any new antibiotic or heart medicine; (4) seek emergency care for palpitations, syncope, or near-syncope; (5) avoid alcohol. Concurrent referral for CBT (NICE recommends combining medication + psychotherapy). Safety plan with crisis contacts documented. Advised to continue omeprazole but consider pantoprazole if a future dose increase is contemplated (avoids the CYP2C19 interaction).",
      outcome:
        "Week 1: mild nausea and sleep disturbance (tolerable, no suicidality, no palpitations). Repeat ECG at week 1: QTc 448 ms (within normal limits, +8 ms from baseline — within the expected effect size at 10 mg/day). Week 2: serum sodium 137 mmol/L (normal). Week 4: nausea settled, sleep improved, PHQ-9 14 (22% reduction — suboptimal). Dose increased to 20 mg/day (the cap for this patient). ECG at week 5 (after 1 week at 20 mg): QTc 458 ms (+18 ms from baseline) — still within normal limits but monitored. Week 8: mood 6/10, PHQ-9 7 (61% reduction — treatment response). ECG at week 8: QTc 460 ms (stable from week 5). No palpitations, no syncope. Returned to gardening, playing with grandchildren. CBT ongoing. Plan: continue citalopram 20 mg/day for 9 more months (12 months total from remission), then taper over 6–8 weeks. ECG every 6 months while on therapy, and after any new medication is added.",
      teachingPoints: [
        "Two independent factors (age >60 years AND concurrent omeprazole) both mandated the 20 mg/day cap in this patient. Recognising CYP2C19 inhibitors (omeprazole!) is essential — they are the most commonly missed citalopram interaction in primary care.",
        "Baseline ECG before starting and a follow-up ECG after each dose escalation is the standard of care in elderly patients on citalopram. A QTc increase of 8–18 ms at therapeutic doses is expected; >60 ms or an absolute QTc >500 ms warrants action.",
        "The observed QTc effect (~18 ms at 20 mg) was consistent with published dose-response data. This is precisely the magnitude of effect that led the FDA to cap dosing — and it illustrates why exceeding the cap is dangerous.",
        "Starting at 10 mg rather than 20 mg in an elderly patient reduces early activation and GI side effects, and provides a QTc baseline at the lower dose before titration to the cap.",
        "Switching omeprazole to pantoprazole (minimal CYP2C19 inhibition) is a useful clinical manoeuvre if a patient genuinely needs a higher citalopram dose — though in this elderly patient the 20 mg cap from age alone would still apply.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Citalopram vs Escitalopram vs Sertraline vs Fluoxetine",
      primaryDrug: "Citalopram",
      rows: [
        {
          attribute: "Stereochemistry",
          primaryValue: "Racemic (R + S enantiomers)",
          comparisons: [
            { drug: "Escitalopram", value: "S-enantiomer only (no R)" },
            { drug: "Sertraline", value: "Single enantiomer (not a racemate)" },
            { drug: "Fluoxetine", value: "Racemic (R + S enantiomers)" },
          ],
        },
        {
          attribute: "QTc prolongation risk",
          primaryValue: "SIGNATURE — dose-dependent (R-enantiomer hERG blockade)",
          comparisons: [
            { drug: "Escitalopram", value: "Lower (no R-enantiomer) but dose still capped" },
            { drug: "Sertraline", value: "Minimal QTc effect at therapeutic doses" },
            { drug: "Fluoxetine", value: "Low but possible in overdose" },
          ],
        },
        {
          attribute: "Maximum daily dose",
          primaryValue: "40 mg/day (20 mg in elderly/hepatic/2C19 PM/2C19 inhibitor co-admin)",
          comparisons: [
            { drug: "Escitalopram", value: "20 mg/day (10 mg in same at-risk groups)" },
            { drug: "Sertraline", value: "200 mg/day (no formal cap)" },
            { drug: "Fluoxetine", value: "80 mg/day (no formal cap)" },
          ],
        },
        {
          attribute: "Primary CYP enzyme",
          primaryValue: "CYP2C19",
          comparisons: [
            { drug: "Escitalopram", value: "CYP2C19 (lowest interaction profile overall)" },
            { drug: "Sertraline", value: "CYP2B6 (primary), 2C19/2D6/3A4 (minor)" },
            { drug: "Fluoxetine", value: "CYP2D6 (potent inhibitor)" },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "~35 hours",
          comparisons: [
            { drug: "Escitalopram", value: "27–32 hours" },
            { drug: "Sertraline", value: "26 hours" },
            { drug: "Fluoxetine", value: "1–4 days (with norfluoxetine)" },
          ],
        },
        {
          attribute: "FDA indications",
          primaryValue: "MDD (adults only — NOT paediatric)",
          comparisons: [
            { drug: "Escitalopram", value: "MDD (≥12 yrs), GAD (adults)" },
            { drug: "Sertraline", value: "MDD, OCD, Panic, PTSD, Social Anxiety, PMDD (6 indications)" },
            { drug: "Fluoxetine", value: "MDD (≥8 yrs), OCD (≥8 yrs), Bulimia, Panic, PMDD" },
          ],
        },
        {
          attribute: "Pregnancy / lactation preference",
          primaryValue: "Acceptable but not first-choice (sertraline preferred)",
          comparisons: [
            { drug: "Escitalopram", value: "Acceptable; not first-choice" },
            { drug: "Sertraline", value: "SSRI of choice in pregnancy and lactation" },
            { drug: "Fluoxetine", value: "Safe (longest reproductive safety database)" },
          ],
        },
        {
          attribute: "Sexual dysfunction",
          primaryValue: "Common (30–40%)",
          comparisons: [
            { drug: "Escitalopram", value: "Common (30–40%)" },
            { drug: "Sertraline", value: "Common (30–40%)" },
            { drug: "Fluoxetine", value: "Common (30–40%)" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "Moderate (half-life intermediate)",
          comparisons: [
            { drug: "Escitalopram", value: "Mild–moderate" },
            { drug: "Sertraline", value: "Mild–moderate" },
            { drug: "Fluoxetine", value: "Mildest (long half-life self-tapers)" },
          ],
        },
        {
          attribute: "When to choose this drug",
          primaryValue: "Adult MDD when cost matters and QTc risk factors are absent",
          comparisons: [
            { drug: "Escitalopram", value: "When lowest CYP interaction profile and lower QTc risk are needed (elderly, complex regimens)" },
            { drug: "Sertraline", value: "Best all-rounder; SSRI of choice in pregnancy, PTSD, anxiety spectrum" },
            { drug: "Fluoxetine", value: "Lethargic depression, paediatric MDD/OCD, bulimia; when self-taper helps" },
          ],
        },
      ],
      takeaway:
        "Citalopram = the racemic, cheaper parent of escitalopram — effective for adult depression but dose-capped by QTc risk driven by the R-enantiomer. Escitalopram delivers the same antidepressant S-enantiomer without the cardiotoxic R-enantiomer, at the cost of a higher price. Sertraline is the best all-rounder (pregnancy, PTSD, anxiety). Fluoxetine is best when long half-life is an asset (paediatric depression, adherence, self-taper). When QTc risk factors (elderly, cardiac disease, electrolyte abnormalities, other QTc-prolonging drugs, CYP2C19 inhibitors like omeprazole) are present, prefer escitalopram or sertraline over citalopram — or strictly respect the 20 mg/day cap if citalopram must be used.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute SERT blockade (S-enantiomer) + onset of hERG blockade (R-enantiomer)",
      description:
        "S-citalopram blocks SERT within hours — synaptic serotonin rises. R-citalopram begins to block hERG; QTc effect is small at therapeutic doses but measurable. Side effects (nausea, headache, activation) often appear here. Patients frequently feel worse before they feel better. QTc monitoring begins at baseline before the first dose in at-risk patients.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "5-HT1A autoreceptor desensitisation begins",
      description:
        "Somatodendritic 5-HT1A autoreceptors in the raphe nuclei begin to desensitise. Serotonin release toward the prefrontal cortex gradually increases. Sleep, appetite, and energy often improve first — before mood. QTc remains stable at low doses; check ECG if patient develops syncope or palpitations.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Neuroadaptive changes",
      description:
        "BDNF expression rises in the hippocampus. Postsynaptic receptor downregulation occurs. Early mood improvement becomes noticeable in many patients. Sexual side effects typically emerge here. In elderly or patients on CYP2C19 inhibitors, this is when dose escalation toward the 20 mg cap is typically considered — with a follow-up ECG.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "Steady-state serotonin levels and full downstream adaptations achieved. Mood, anxiety, and energy typically reach maximum improvement for depression. Side effects usually stabilise. QTc effect at steady state is the clinically relevant one — recheck ECG at this visit if dose was escalated.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 8–12",
      title: "Full therapeutic effect (anxiety, OCD)",
      description:
        "Anxiety disorders and OCD often take 8–12 weeks for full response — slower than depression. Counsel patients accordingly. If still partial response at week 8, consider dose escalation within the cap, augmentation (bupropion, mirtazapine), or switch.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months 3–6",
      title: "Maintenance & relapse prevention",
      description:
        "Continued neuroplastic changes. Continue treatment for 6–12 months after the first depressive episode, longer (often indefinite) for recurrent episodes, OCD, or chronic anxiety disorders. ECG every 6 months in at-risk patients. Recheck electrolytes if clinically indicated.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Tapered withdrawal",
      description:
        "Sudden cessation causes discontinuation syndrome (dizziness, 'brain zaps', nausea, irritability). Taper over at least 4 weeks. Severity is intermediate among SSRIs — worse than fluoxetine (self-tapers) and similar to sertraline, milder than paroxetine/venlafaxine. After the last dose, the QTc effect resolves over ~1 week.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why is the maximum dose of citalopram only 40 mg a day (and 20 mg in some people)?",
      answer:
        "In 2011, the FDA reduced the maximum daily dose of citalopram from 60 mg to 40 mg after post-marketing data showed dose-dependent QTc prolongation on the ECG — a lengthening of the heart's electrical recovery time that can trigger a dangerous arrhythmia called torsades de pointes. The QTc effect is driven mainly by the R-enantiomer of citalopram. People over 60, with liver impairment, who are CYP2C19 poor metabolisers, or who take CYP2C19 inhibitors (including omeprazole) must cap at 20 mg/day because they accumulate higher drug levels.",
    },
    {
      question: "What is the difference between citalopram and escitalopram?",
      answer:
        "Citalopram is a racemic mixture — it contains two mirror-image molecules, the S-enantiomer and the R-enantiomer, in equal amounts. Only the S-enantiomer blocks the serotonin transporter and produces the antidepressant effect; the R-enantiomer is essentially inactive at SERT but blocks the hERG potassium channel and contributes to QTc prolongation. Escitalopram is the isolated S-enantiomer — same antidepressant effect, less QTc liability because the R-enantiomer has been removed. Roughly, 20 mg citalopram ≈ 10 mg escitalopram in antidepressant effect.",
    },
    {
      question: "Does citalopram affect the heart?",
      answer:
        "Yes — citalopram can prolong the QT interval on the ECG, which in rare cases can lead to a serious arrhythmia called torsades de pointes. The risk is dose-dependent and is highest in people over 60, those with low potassium or magnesium, those with pre-existing heart disease or congenital long-QT syndrome, and those taking other QTc-prolonging drugs (some antibiotics, antipsychotics, and heart rhythm medicines). Your doctor may do an ECG before and during treatment, especially if any of these risk factors apply to you.",
    },
    {
      question: "Can I take citalopram with omeprazole (or other acid-suppressing medicines)?",
      answer:
        "Omeprazole and esomeprazole inhibit the CYP2C19 enzyme that breaks down citalopram, raising citalopram levels in the blood. This means the maximum dose of citalopram must be reduced to 20 mg/day (rather than 40 mg/day) when these medicines are taken together. If you need a strong acid-suppressing medicine long-term, your doctor may switch you to pantoprazole, which has minimal CYP2C19 inhibition. Always tell every clinician that you take citalopram before any new medicine is prescribed.",
    },
    {
      question: "How long does citalopram take to work?",
      answer:
        "Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks or longer for depression. For anxiety disorders and OCD, full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet.",
    },
    {
      question: "Is citalopram safe in pregnancy and breastfeeding?",
      answer:
        "Citalopram is generally considered acceptable in pregnancy when pharmacotherapy is necessary, but it is NOT the SSRI of choice — sertraline is preferred because it has a larger reproductive safety database and the lowest transfer into breast milk. Citalopram has not been linked to a specific birth defect signal (unlike paroxetine, which is avoided in the 1st trimester). In breastfeeding, citalopram is detectable in infant blood and has been linked to isolated reports of infant irritability and poor weight gain — sertraline or paroxetine are preferred. Do not stop citalopram suddenly if you become pregnant — discuss with your obstetrician and psychiatrist.",
    },
    {
      question: "Can I drink alcohol while taking citalopram?",
      answer:
        "Alcohol can worsen sleepiness, mood symptoms, judgment, and medication tolerability. While not strictly contraindicated, it is best minimised or avoided — particularly during the first month while your body is adapting to the medication. Alcohol does not directly affect citalopram levels, but the combination can make you feel more unwell.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Take the missed dose as soon as you remember, unless it is within 8 hours of your next scheduled dose — in that case, skip the missed dose and continue normally. Do not double up to make up for a missed dose. If you have missed several doses, you may notice mild discontinuation symptoms (dizziness, 'brain zaps') — these usually settle as you resume the medication.",
    },
  ],

  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "FDA Drug Safety Communication (2011): Abnormal heart rhythms associated with high doses of citalopram — Celexa (citalopram hydrobromide) dose limit changed to 40 mg/day",
        section: "Safety announcement, August 2011 (updated February 2012)",
        url: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fda-drug-safety-communication-abnormal-heart-rhythms-associated-high-doses-celexa-citalopram",
      },
      {
        source: "NICE Clinical Guideline CG91 — Depression in adults: recognition and management",
      },
      {
        source: "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder, 3rd edition",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents (citalopram stereochemistry and QTc section)",
      },
      {
        source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
        section: "Section V — Pharmacotherapy of Mood Disorders",
      },
      {
        source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition",
        section: "Chapter 36 — Psychopharmacology",
      },
    ],
    trials: [
      {
        source: "Cipriani A et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366.",
        section: "The definitive SSRI head-to-head meta-analysis",
      },
      {
        source: "Vieweg WV et al. Citalopram, QTc prolongation, and torsades de pointes: how much is too much? CNS Spectrums 2012;17(4):187-193.",
        section: "Review of the dose-QTc relationship that drove the 2011 FDA label change",
      },
    ],
    reviews: [
      {
        source: "FDA Prescribing Information — CELEXA (citalopram hydrobromide) tablets",
        section: "Highlights of Prescribing Information (revised post-2011 dose-cap)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/020822s052lbl.pdf",
      },
      {
        source: "CPIC Guideline for CYP2C19 and CYP2D6 and Selective Serotonin Reuptake Inhibitors",
        section: "Dosing recommendations for CYP2C19 poor metabolisers on citalopram/escitalopram",
      },
      {
        source: "MIMS India — Citalopram",
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
      name: "Escitalopram",
      slug: "escitalopram",
      drugClass: "SSRI",
      relationship: "Same drug, isolated S-enantiomer. Escitalopram was developed specifically to solve citalopram's QTc problem — by removing the inactive R-enantiomer (which causes hERG blockade). 20 mg citalopram ≈ 10 mg escitalopram in antidepressant effect, but escitalopram has less QTc risk at equivalent doses.",
    },
    {
      name: "Sertraline",
      slug: "sertraline",
      drugClass: "SSRI",
      relationship: "Same class. Best all-rounder — SSRI of choice in pregnancy and lactation, only SSRI FDA-approved for PTSD. Minimal QTc effect at therapeutic doses. Useful alternative when citalopram is contraindicated by QTc risk factors.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship: "Same class. Longest half-life (1–4 days with norfluoxetine) → mildest discontinuation syndrome. Only SSRI approved for paediatric depression (≥8 yrs) — citalopram is NOT. More activating — better for lethargic depression.",
    },
    {
      name: "Paroxetine",
      slug: "paroxetine",
      drugClass: "SSRI",
      relationship: "Same class. Shortest half-life (21h) → worst discontinuation syndrome. Most sedating. Strongest CYP2D6 inhibition. Most anticholinergic. Highest risk of weight gain. Avoid in 1st trimester (cardiac defects).",
    },
    {
      name: "Fluvoxamine",
      drugClass: "SSRI",
      relationship: "Same class. Preferred for paediatric OCD. Strong CYP1A2 inhibition — interacts with caffeine, theophylline, clozapine. Also a CYP2C19 inhibitor — would cap citalopram dose if combined.",
    },
    {
      name: "Venlafaxine",
      drugClass: "SNRI",
      relationship: "Alternative class. Serotonin-norepinephrine reuptake inhibitor. May work when SSRI fails. Dose-dependent: <150 mg/day mostly serotonergic; >150 mg/day adds noradrenergic effect. Watch BP — can cause hypertension. Also prolongs QTc in overdose.",
    },
    {
      name: "Bupropion",
      drugClass: "NDRI",
      relationship: "Augmentation partner. Norepinephrine-dopamine reuptake inhibitor. Adding 150 mg XL to an SSRI is first-line augmentation for partial response and reverses SSRI-induced sexual dysfunction. Avoid in seizure disorder and eating disorders.",
    },
    {
      name: "Mirtazapine",
      drugClass: "NaSSA",
      relationship: "Augmentation partner. Noradrenergic and specific serotonergic antidepressant. Adding 15–30 mg at night improves sleep and appetite and may reverse SSRI-induced sexual dysfunction. Sedating — give at night. No QTc liability of note.",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Generalised Anxiety Disorder", relationship: "off-label" },
    { name: "Panic Disorder", relationship: "off-label" },
    { name: "Obsessive-Compulsive Disorder", relationship: "off-label" },
    { name: "Social Anxiety Disorder", relationship: "off-label" },
    { name: "Post-Traumatic Stress Disorder", relationship: "off-label" },
    { name: "Premenstrual Dysphoric Disorder", relationship: "off-label" },
    { name: "Torsades de Pointes (iatrogenic risk)", relationship: "off-label" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Citalopram", type: "drug", href: "/drugs/citalopram", note: "The racemic SSRI you're reading about" },
    { label: "Escitalopram (S-enantiomer)", type: "drug", href: "/drugs/escitalopram", note: "The isolated active enantiomer — developed to solve citalopram's QTc problem" },
    { label: "SSRI", type: "class", href: "#mechanism", note: "Selective Serotonin Reuptake Inhibitor" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "The neurotransmitter being modulated by S-citalopram" },
    { label: "S-enantiomer", type: "neurotransmitter", href: "#mechanism", note: "Active at SERT — the antidepressant half of the racemate" },
    { label: "R-enantiomer", type: "neurotransmitter", href: "#mechanism", note: "Inactive at SERT, blocks hERG → QTc prolongation" },
    { label: "hERG (KCNH2) channel", type: "neurotransmitter", href: "#mechanism", note: "Cardiac potassium channel blocked by R-citalopram — the molecular basis of QTc risk" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Molecular target of the S-enantiomer" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood regulation" },
    { label: "Hippocampus", type: "brain-region", href: "#brain-regions", note: "Memory & neurogenesis" },
    { label: "Major Depressive Disorder", type: "condition", href: "#clinical-uses", note: "Only FDA-approved indication (adults only)" },
    { label: "QTc Prolongation", type: "side-effect", href: "#side-effects", note: "Signature risk — dose-dependent, R-enantiomer driven, FDA capped dosing in 2011" },
    { label: "Torsades de Pointes", type: "side-effect", href: "#side-effects", note: "Life-threatening polymorphic VT — consequence of QTc prolongation" },
    { label: "Serotonin Syndrome", type: "side-effect", href: "#side-effects", note: "Class SSRI risk with serotonergic combinations" },
    { label: "Patient Guide — Starting Citalopram Safely", type: "patient-guide", href: "#patient-education", note: "Dose caps, ECG monitoring, and what to tell every clinician" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "An antidepressant that works by keeping more of a mood-regulating chemical (serotonin) available in your brain — with a maximum dose cap to protect your heart rhythm.",
    summary:
      "Citalopram is a common antidepressant that belongs to a class called SSRIs. It doesn't make you happy — it helps your brain's natural mood-regulation system work better by keeping more serotonin available between nerve cells. Most people feel some side effects in the first week or two before the mood benefit builds up over 4–6 weeks. One thing that is special about citalopram is that the dose is capped — for most adults it is 40 mg a day, and for people over 60 or with certain other conditions it is 20 mg a day. This is because higher doses can affect the electrical rhythm of the heart. Always tell every doctor and pharmacist that you take citalopram so they can check it against any new medicine.",
    mechanism:
      "Your brain uses a chemical called serotonin to regulate mood, anxiety, sleep, and appetite. Normally, after serotonin is released between nerve cells, it gets quickly taken back up (recycled). Citalopram blocks this recycling, so more serotonin stays available for longer. Over 4–6 weeks this helps your brain's mood-regulation system work better — but it doesn't happen immediately. Citalopram is made of two mirror-image halves (called enantiomers): one half (the S-enantiomer) does the mood work, the other half (the R-enantiomer) doesn't help mood but can affect the heart's electrical rhythm at higher doses. This is why the dose is capped.",
    sideEffects:
      "Most people get some side effects in the first 1–2 weeks — usually nausea, headache, sleep changes, or feeling a bit wired. These usually settle as your body adapts. Sexual side effects (lower interest or difficulty reaching orgasm) are common and can persist — talk to your doctor if this bothers you, as there are solutions. The most important safety issue with citalopram is its effect on the heart's electrical rhythm (the QT interval on an ECG). At higher doses — or in people over 60, with liver problems, low potassium or magnesium, or on certain other medicines — this can cause a dangerous irregular heartbeat called torsades de pointes. That is why the dose is capped. Seek emergency help for palpitations, fainting, or near-fainting while on citalopram. Also seek emergency help for signs of serotonin syndrome: high fever, confusion, sweating, agitation, tremor, muscle rigidity or twitching, fast heartbeat.",
    monitoring:
      "Your doctor may want to do an ECG (heart tracing) before and during treatment, especially if you are over 60, have heart problems, or take certain other medicines. They will check your mood, sleep, and side effects at 2, 4, and 8 weeks. They may check your blood sodium (especially in the first 2 weeks if you are over 65) and may check potassium and magnesium levels. You may be asked to fill in a short questionnaire (PHQ-9) so your progress can be tracked.",
    contraindications:
      "Do not take citalopram if you have taken an MAOI antidepressant in the last 14 days (dangerous combination), if you have a congenital heart condition called long-QT syndrome, or if you are allergic to it. Tell your doctor about all other medicines you take — especially antibiotics (erythromycin, clarithromycin, moxifloxacin, ciprofloxacin), antipsychotics, heart rhythm medicines, and over-the-counter products including St John's Wort. The combination with certain stomach medicines (omeprazole, esomeprazole) means your citalopram dose must not exceed 20 mg a day — make sure your doctor and pharmacist know about all your medicines.",
    interactions:
      "The single most important thing to know: tell EVERY doctor, pharmacist, and dentist that you take citalopram. Many common medicines can interact with it. The most dangerous combinations are with other medicines that affect the heart's electrical rhythm (some antibiotics, antipsychotics, and heart medicines) and with other medicines that affect serotonin (tramadol, triptans for migraine, St John's Wort, certain cough syrups with dextromethorphan). Common stomach medicines like omeprazole raise citalopram levels and require the dose to be capped at 20 mg a day. Avoid alcohol or keep it to a minimum — it can make you more drowsy and worsen mood symptoms.",
  },

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Celexa label, FDA 2011 Drug Safety Communication"],
};
