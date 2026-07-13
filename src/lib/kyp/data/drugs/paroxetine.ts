import type { Drug } from "../types";

/**
 * Paroxetine — canonical drug page data.
 *
 * Structured to mirror the sertraline/fluoxetine templates exactly so every
 * section of /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for PAXIL (paroxetine hydrochloride)
 *   - FDA Prescribing Information for PAXIL CR (paroxetine mesylate, controlled-release)
 *   - FDA Prescribing Information for BRISDELLE (paroxetine mesylate 7.5 mg, vasomotor symptoms)
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *   - ACOG Committee Opinion No. 753 (Preeclampsia and Pregnancy) on SSRI use in pregnancy
 *
 * Last reviewed: 2026-07-13
 */
export const paroxetine: Drug = {
  /* ---- Identity ---- */
  slug: "paroxetine",
  genericName: "Paroxetine",
  brandNames: ["Paxil", "Seroxat", "Pexeva", "Paxil CR", "Brisdelle"],
  drugClass: "ssri",
  drugClassLabel: "SSRI",
  drugClassFullName: "Selective Serotonin Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SSRIs", "Paroxetine"],

  /* ---- Hero / summary ---- */
  tagline:
    "The SSRI with the shortest half-life, strongest CYP2D6 inhibition, and most sedating profile — generally avoided as first-line, but with a unique niche for vasomotor symptoms in breast-cancer survivors.",
  summary:
    "Paroxetine blocks the serotonin transporter (SERT) at the presynaptic membrane, increasing serotonin availability in the synaptic cleft — the same primary mechanism shared by all SSRIs. Unlike its classmates, however, paroxetine also has mild anticholinergic (muscarinic) activity, which contributes to its distinct side-effect profile: the most sedation, the most weight gain, the most anticholinergic effects, and the highest rate of sexual dysfunction among SSRIs. Pharmacokinetically, paroxetine has the shortest half-life of any SSRI (~21 hours) and is a potent CYP2D6 inhibitor — giving it the worst discontinuation syndrome of the class and the greatest propensity for drug interactions. It is also a Pregnancy Category D drug: first-trimester exposure is associated with an approximately two-fold increased risk of cardiac septal defects. For all these reasons, paroxetine is generally avoided as a first-line SSRI — but it retains an FDA-approved niche as the only non-hormonal pharmacotherapy for menopausal vasomotor symptoms (paroxetine 7.5 mg, Brisdelle) and is useful in selected patients with comorbid agitated depression, anxiety, and insomnia who tolerate its side-effect burden.",
  estimatedReadTime: "19 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of paroxetine — SERT blockade plus its unique mild anticholinergic (muscarinic) activity that distinguishes it from other SSRIs.",
    "Identify the pharmacokinetic reasons paroxetine has the worst discontinuation syndrome of any SSRI (shortest half-life, no active metabolite, non-linear kinetics) and design a slow, safe taper.",
    "Predict the paroxetine-specific side-effect profile — sedation, weight gain, anticholinergic effects, and the highest rate of sexual dysfunction among SSRIs — based on its receptor pharmacology.",
    "Recognise the absolute contraindication with tamoxifen (CYP2D6 inhibition reduces endoxifen formation and cancer protection) and the Pregnancy Category D warning, and counsel reproductive-age and breast-cancer patients accordingly.",
    "Compare paroxetine with sertraline, fluoxetine, and escitalopram on the seven dimensions where it is the 'worst' SSRI, and identify the narrow clinical scenarios where it remains a rational choice.",
    "Counsel a patient on the critical importance of never stopping paroxetine abruptly, the pregnancy warning, and the tamoxifen contraindication.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Paroxetine selectively blocks the serotonin transporter (SERT), increasing synaptic serotonin concentration. Unique among SSRIs, it also has clinically relevant mild anticholinergic (muscarinic M1) activity, which contributes to its sedating, weight-gaining, and anticholinergic side-effect profile.",
    molecularTarget:
      "SERT (SLC6A4 — serotonin transporter); also weak antagonist at muscarinic M1 receptors (unique among SSRIs)",
    effect:
      "Acute: increased synaptic serotonin plus mild anticholinergic effects (sedation, dry mouth, constipation). Chronic (2–6 weeks): desensitisation of 5-HT1A somatodendritic autoreceptors in the raphe nuclei, increased serotonergic throughput to the prefrontal cortex, and upregulation of BDNF in the hippocampus — producing the antidepressant and anxiolytic effects shared with other SSRIs.",
    steps: [
      "Paroxetine binds the serotonin transporter (SERT) on the presynaptic neuron, blocking reuptake of serotonin from the synaptic cleft. It is the most potent SERT binder among the SSRIs in vitro.",
      "Acute blockade raises synaptic serotonin concentration within hours — but somatodendritic 5-HT1A autoreceptors in the raphe nuclei detect this and inhibit further serotonin release.",
      "Simultaneously, paroxetine's mild muscarinic M1 antagonism produces anticholinergic effects (dry mouth, constipation, urinary hesitancy, sedation) — a profile unique among SSRIs and resembling a low-potency tricyclic.",
      "Over 7–14 days, 5-HT1A autoreceptors gradually desensitise — removing the brake on serotonin firing.",
      "Serotonergic throughput from the raphe nuclei to the prefrontal cortex, amygdala, and hippocampus increases.",
      "Downstream neuroadaptive changes occur over 2–6 weeks: increased BDNF expression, hippocampal neurogenesis, and postsynaptic receptor downregulation. These delayed adaptations — not the acute serotonin increase — correlate with the onset of clinical antidepressant and anxiolytic effects.",
    ],
    pharmacokinetics:
      "Completely absorbed orally; bioavailability ~50% due to extensive first-pass metabolism. Peak plasma at 5.2 hours (immediate-release); controlled-release (Paxil CR) peaks at ~6–10 hours. Highly protein-bound (~95%). Volume of distribution ~17 L/kg — distributes widely including into CNS. Food does not significantly affect absorption. Paroxetine exhibits non-linear kinetics: because it inhibits its own metabolism (CYP2D6), dose increases produce disproportionate plasma concentration rises.",
    halfLife:
      "Approximately 21 hours (range 3–65 hours; population mean ~21 h). Shortest of the six SSRIs — this is the pharmacokinetic basis for paroxetine's severe discontinuation syndrome.",
    activeMetabolite:
      "Paroxetine is metabolised primarily to inactive catechol and methyl catechol metabolites. Unlike fluoxetine (→ norfluoxetine), paroxetine has NO clinically significant active metabolite — meaning plasma levels fall rapidly when the drug is stopped, with no built-in taper.",
    metabolism:
      "Hepatic CYP2D6 (primary). Paroxetine is both a substrate AND a potent mechanism-based inhibitor of CYP2D6 — autoinhibition causes non-linear kinetics and makes paroxetine the strongest CYP2D6 inhibitor among SSRIs (alongside fluoxetine). CYP2D6 poor metabolisers (≈7% of Caucasians, lower in other populations) have ~2–10× higher plasma levels — increased side-effect risk.",
    excretion:
      "Approximately 64% renal (as metabolites, <2% as unchanged drug) and 36% faecal elimination.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic", label: "Presynaptic neuron", sublabel: "Raphe nuclei — synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT transporter", sublabel: "Normally reuptakes serotonin", variant: "target" },
      { id: "paroxetine", label: "Paroxetine", sublabel: "Blocks SERT (most potent in vitro SSRI)", variant: "inhibit" },
      { id: "muscarinic", label: "M1 muscarinic receptor", sublabel: "Mild antagonist effect (unique among SSRIs)", variant: "target" },
      { id: "cleft", label: "↑ Synaptic 5-HT", sublabel: "More serotonin available", variant: "output" },
      { id: "anticholinergic", label: "Anticholinergic effects", sublabel: "Dry mouth, constipation, sedation, urinary hesitancy", variant: "output" },
      { id: "autoreceptor", label: "5-HT1A autoreceptor", sublabel: "Initially brakes firing", variant: "process" },
      { id: "desensitised", label: "Autoreceptors desensitise", sublabel: "Days 7–14 — brake removed", variant: "output" },
      { id: "pfc", label: "Prefrontal cortex", sublabel: "Mood regulation improves", variant: "output" },
      { id: "bdnf", label: "↑ BDNF + neurogenesis", sublabel: "Weeks 2–6 — full effect", variant: "output" },
    ],
    edges: [
      { from: "presynaptic", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "paroxetine", to: "sert", type: "inhibit", label: "blocks (potent)" },
      { from: "paroxetine", to: "muscarinic", type: "inhibit", label: "weak antagonism" },
      { from: "serotonin", to: "cleft", label: "accumulates" },
      { from: "muscarinic", to: "anticholinergic", label: "produces" },
      { from: "cleft", to: "autoreceptor", label: "detects" },
      { from: "autoreceptor", to: "desensitised", label: "over 7–14 days" },
      { from: "desensitised", to: "pfc", label: "increased throughput" },
      { from: "pfc", to: "bdnf", label: "weeks 2–6" },
    ],
    caption:
      "Paroxetine is unique among SSRIs in blocking both SERT and (weakly) the M1 muscarinic receptor — the latter explains its anticholinergic, sedating, and weight-gain profile. The 21-hour half-life and absence of an active metabolite explain why missed doses trigger withdrawal within 24 hours.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Acetylcholine (indirectly — via M1 antagonism)"],
  receptors: [
    "SERT (serotonin transporter) — potent blockade",
    "5-HT1A (autoreceptor, desensitises over 1–2 weeks)",
    "5-HT2C",
    "Muscarinic M1 (weak antagonist — unique among SSRIs)",
    "Nitric oxide synthase (weak inhibitor — may contribute to sexual dysfunction)",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // SSRIs act on the diffuse serotonergic projection system, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description: "Effective in adults. Usual starting dose 20 mg/day, max 50 mg/day. Generally NOT first-line due to side-effect and pregnancy concerns — reserve for patients who have failed or cannot tolerate other SSRIs.",
      ageGroup: "Adults",
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD)",
      status: "fda-approved",
      description: "Effective in adults. Often requires higher doses (40–60 mg/day) than depression. Full effect may take 10–12 weeks. Reasonable second-line option behind sertraline/fluoxetine/fluvoxamine.",
      ageGroup: "Adults",
    },
    {
      name: "Panic Disorder",
      status: "fda-approved",
      description: "Reduces frequency and intensity of panic attacks. Start LOW (10 mg/day) to avoid early activation that can paradoxically worsen panic in the first 1–2 weeks. Max 60 mg/day.",
      ageGroup: "Adults",
    },
    {
      name: "Social Anxiety Disorder (Social Phobia)",
      status: "fda-approved",
      description: "Effective first-line pharmacotherapy. Onset slower than for depression — 8–12 weeks for full response. Sedation may be useful in performance-anxiety patients but problematic for many.",
    },
    {
      name: "Post-Traumatic Stress Disorder (PTSD)",
      status: "fda-approved",
      description: "FDA-approved though sertraline is generally preferred. Useful in patients with prominent sleep disturbance given sedation. Combine with trauma-focused psychotherapy for best outcomes.",
    },
    {
      name: "Generalised Anxiety Disorder (GAD)",
      status: "fda-approved",
      description: "Paroxetine is one of only two SSRIs FDA-approved for GAD (the other is escitalopram, in adolescents). Useful when comorbid depression + GAD + insomnia coexist — the sedating profile can be leveraged.",
    },
    {
      name: "Premenstrual Dysphoric Disorder (PMDD)",
      status: "fda-approved",
      description: "Approved as Paxil CR (controlled-release paroxetine mesylate) for PMDD. Can be dosed continuously or intermittently (luteal phase only). Luteal-phase dosing works because PMDD onset of benefit is rapid (days).",
    },
    {
      name: "Moderate-to-severe vasomotor symptoms (hot flushes) associated with menopause",
      status: "fda-approved",
      description:
        "Paroxetine mesylate 7.5 mg (Brisdelle) is the ONLY FDA-approved non-hormonal treatment for menopausal vasomotor symptoms. Particularly useful in breast-cancer survivors who cannot take hormone replacement therapy. CRITICAL: contraindicated in patients on concurrent tamoxifen — CYP2D6 inhibition reduces endoxifen formation and may compromise anticancer efficacy.",
    },
    {
      name: "Premature ejaculation",
      status: "off-label",
      description:
        "Off-label use exploiting the SSRI class effect of delaying orgasm. Dapoxetine (a related SSRI) is licensed for this indication in many countries; paroxetine is used off-label where dapoxetine is unavailable. Usually dosed on-demand or low-dose daily. The high sexual-dysfunction side-effect rate of paroxetine becomes the therapeutic effect here.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (including phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. At least 14 days must elapse between discontinuation of an MAOI and initiation of paroxetine; wait 14 days after stopping paroxetine before starting an MAOI.",
    },
    {
      name: "Pimozide or thioridazine",
      severity: "absolute",
      rationale:
        "Contraindicated due to QTc prolongation and risk of torsades de pointes. Paroxetine is a potent CYP2D6 inhibitor and raises plasma levels of both pimozide and thioridazine — magnifying QTc effect. Thioridazine alone carries a boxed warning for QTc prolongation and is essentially obsolete.",
    },
    {
      name: "Pregnancy (especially 1st trimester) — Pregnancy Category D",
      severity: "absolute",
      rationale:
        "First-trimester paroxetine exposure is associated with an approximately 2-fold increased risk of cardiac (septal) defects — absolute risk rises from a baseline of ~1% to ~2%. FDA labelling (legacy Category D) and ACOG recommend avoiding paroxetine in pregnancy, particularly in the first trimester, and using safer alternatives (sertraline is the SSRI of choice). If a woman on paroxetine becomes pregnant, do NOT stop abruptly — switch to sertraline under specialist supervision to avoid both withdrawal and re-exposure risk.",
    },
    {
      name: "Concurrent tamoxifen",
      severity: "absolute",
      rationale:
        "Tamoxifen is a prodrug that must be converted by CYP2D6 to its active metabolite endoxifen for full anticancer effect. Paroxetine is a potent CYP2D6 inhibitor and substantially reduces endoxifen formation — potentially compromising breast-cancer protection. Observational data suggest increased breast-cancer recurrence and mortality with strong CYP2D6 inhibitors (paroxetine, fluoxetine) co-prescribed with tamoxifen. Use a non-CYP2D6-inhibiting alternative (venlafaxine, citalopram, escitalopram, sertraline) if an antidepressant is needed during tamoxifen therapy.",
    },
    {
      name: "Known hypersensitivity to paroxetine",
      severity: "absolute",
      rationale: "Anaphylaxis, angioedema, and severe skin reactions (including Stevens-Johnson syndrome) have been reported.",
    },
    {
      name: "Concurrent disulfiram (oral suspension only)",
      severity: "relative",
      rationale: "The paroxetine oral suspension contains alcohol — avoid in patients taking disulfiram or with severe alcohol sensitivity. Tablet formulations are unaffected.",
    },
  ],

  blackBoxWarnings: [
    {
      title:
        "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of paroxetine in a child, adolescent, or young adult must balance this risk with the clinical need. Paroxetine is NOT approved for use in paediatric patients (MDD, OCD, or any other indication). Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. Families and caregivers should be advised of the need for close observation and communication with the prescriber.",
    },
    {
      title: "Pregnancy Warning — Congenital Cardiac Defects (Category D)",
      text:
        "Epidemiological studies have shown that infants exposed to paroxetine in the first trimester of pregnancy have an approximately 2-fold increased risk of congenital cardiovascular malformations (primarily ventricular and atrial septal defects). The absolute risk rises from a background rate of ~1% to ~2%. Paroxetine should be avoided in pregnancy, particularly in the first trimester, unless the clinical benefit clearly justifies the risk. Women of reproductive potential should use reliable contraception. If a patient becomes pregnant while on paroxetine, the decision to continue or discontinue should be made jointly with the prescriber — do NOT stop abruptly, as discontinuation syndrome and untreated depression both carry their own risks. Sertraline is the SSRI of choice if an SSRI is required in pregnancy.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation / somnolence",
      frequency: "very-common",
      severity: "moderate",
      description:
        "Paroxetine is the MOST sedating SSRI — owing to its mild anticholinergic (M1) and 5-HT2C effects. Useful in agitated depression with insomnia, problematic in lethargic or apathetic presentations. Dose at night.",
      management: "Administer at bedtime. If excessive daytime sedation persists, switch to a less sedating SSRI (sertraline, escitalopram, fluoxetine).",
    },
    {
      name: "Sexual dysfunction",
      frequency: "very-common",
      severity: "moderate",
      description:
        "Paroxetine has the HIGHEST rate of sexual dysfunction among SSRIs — approximately 40–50% of patients (vs 30–40% for sertraline/fluoxetine). Decreased libido, delayed orgasm/anorgasmia, erectile dysfunction. Often unreported by patients and undertreated. May persist after discontinuation in a subset (PSSD).",
      management: "Dose reduction if possible. Add bupropion XL 150 mg/day. Switch to bupropion, mirtazapine, or vortioxetine. Sildenafil for erectile component. Important: paroxetine's high sexual-dysfunction rate is leveraged therapeutically in premature ejaculation (off-label).",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Nausea & GI upset",
      frequency: "very-common",
      severity: "mild",
      description: "Dose-dependent, typically resolves after 1–2 weeks. Taking with food reduces severity.",
      management: "Take with food. Split dosing if needed. Consider temporary dose reduction.",
    },
    {
      name: "Weight gain",
      frequency: "common",
      severity: "moderate",
      description:
        "Paroxetine causes the MOST weight gain among SSRIs — average 3–5% body-weight increase over 6–12 months of therapy, with a subset gaining substantially more. Mechanism likely involves combined serotonergic, anticholinergic, and histaminergic effects. Often a reason to switch.",
      management: "Lifestyle counselling. If significant (>5% baseline weight), switch to sertraline, escitalopram, bupropion, or fluoxetine. Avoid paroxetine in patients with obesity or metabolic syndrome.",
    },
    {
      name: "Anticholinergic effects (dry mouth, constipation, urinary hesitancy, blurred vision)",
      frequency: "common",
      severity: "moderate",
      description:
        "Paroxetine has the MOST anticholinergic side-effect burden among SSRIs, due to weak M1 antagonism. Dry mouth, constipation, urinary hesitancy (especially in older men with prostatism), and blurred vision can all occur. Particularly problematic in elderly patients and contributes to fall risk.",
      management: "Sip water, sugar-free gum for dry mouth. Increase dietary fibre. Avoid in patients with narrow-angle glaucoma, prostatic hypertrophy, or chronic constipation. Consider anticholinergic burden scales (ACB) in elderly.",
    },
    {
      name: "Dizziness / lightheadedness",
      frequency: "common",
      severity: "mild",
      description: "Mild and transient. Can indicate emerging hyponatraemia (check Na if persistent or in elderly). Also a hallmark of early withdrawal if doses are missed.",
      management: "Reassure. Check serum sodium if persistent or in elderly. Counsel patient not to miss doses.",
    },
    {
      name: "Sweating (especially nocturnal)",
      frequency: "common",
      severity: "mild",
      description: "Particularly nocturnal. Mechanism likely serotonergic effect on hypothalamic thermoregulation. Distressing but benign. More pronounced with paroxetine than with several other SSRIs.",
      management: "Reassurance. Reduce dose if possible. Some evidence for low-dose terazosin or glycopyrrolate in refractory cases.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Usually transient in the first 1–2 weeks. Differentiate from serotonin syndrome (which includes hyperreflexia and clonus).",
      management: "Paracetamol is safe. Avoid NSAIDs (bleeding risk).",
    },
    {
      name: "Asthenia / fatigue",
      frequency: "common",
      severity: "mild",
      description: "Common in first 2–3 weeks; in some patients persists throughout treatment. Often coexists with sedation. Can mimic worsening depression — distinguish by temporal pattern.",
      management: "Reassure. If persistent, re-evaluate diagnosis and consider switch to activating SSRI (fluoxetine) or bupropion.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Discontinuation syndrome (MOST SEVERE among SSRIs)",
      frequency: "common",
      severity: "severe",
      description:
        "Paroxetine produces the WORST discontinuation syndrome of any SSRI — owing to its short half-life (~21 h), absence of an active metabolite, and non-linear kinetics. Symptoms can emerge within 24–48 hours of a missed dose and include dizziness, 'brain zaps' (paresthesia), nausea, headache, irritability, insomnia, vivid dreams, and emotional lability. Severe cases can resemble meningitis or include suicidal ideation. Affects up to 40–50% of patients who stop abruptly after ≥4 weeks of therapy.",
      management:
        "AVOID abrupt discontinuation. Taper VERY slowly — over months, not weeks — especially after long-term use. Reduce by no more than 10% of dose every 2–4 weeks for patients on long-term therapy. If symptoms emerge, return to previous dose and taper more slowly. Substituting fluoxetine (long half-life) for the last few weeks of a paroxetine taper can smooth the discontinuation. Counsel patients NEVER to miss doses and to refill prescriptions early.",
      sideEffectId: "discontinuation-syndrome",
    },
    {
      name: "Serotonin Syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis), and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of initiating, increasing, or combining serotonergic agents. Risk higher with paroxetine than most SSRIs due to potent SERT inhibition and frequent co-prescribing with CYP2D6 substrates.",
      management: "Discontinue paroxetine immediately. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU admission for hyperthermia >41°C.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "SIADH / Hyponatraemia",
      frequency: "uncommon",
      severity: "severe",
      description: "Syndrome of inappropriate antidiuretic hormone. Risk highest in elderly, females, and during first 2 weeks. Presents as headache, nausea, confusion, seizures. SSRIs as a class cause SIADH in ~0.5–1% of patients; paroxetine is no exception.",
      management: "Check serum sodium at baseline and within 2 weeks for high-risk patients. Fluid restrict. Hypertonic saline if seizures or Na <120 mmol/L.",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description: "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk. Paroxetine is NOT approved in paediatric patients.",
      management: "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent. Avoid in patients under 18.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description: "In patients with undiagnosed bipolar disorder, SSRIs can trigger a manic episode. Screen for personal and family history of bipolar disorder before initiating any antidepressant.",
      management: "Discontinue if mania emerges. Screen for bipolar disorder before initiating. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Abnormal bleeding",
      frequency: "uncommon",
      severity: "moderate",
      description: "Serotonin is stored in platelets and is essential for aggregation. SSRIs deplete platelet serotonin within 2 weeks, impairing clotting. Risk multiplied when combined with NSAIDs, aspirin, or warfarin. Class effect — applies equally to paroxetine.",
      management: "Caution in patients with coagulopathy or on anticoagulants. Consider GI protection if combined with NSAIDs.",
    },
    {
      name: "Fractures / osteoporosis (long-term)",
      frequency: "uncommon",
      severity: "moderate",
      description: "Long-term SSRI use is associated with reduced bone mineral density and increased fracture risk — particularly relevant in elderly. Serotonin transporters in bone may mediate this. Combined with paroxetine's sedation and orthostatic effects, fall risk is increased in older patients.",
      management: "Monitor bone density in elderly long-term users. Fall-prevention counselling. Adequate calcium/vitamin D. Consider switching to a less sedating SSRI in elderly.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description: "Seizure risk is dose-dependent. Rare at therapeutic doses; overdose significantly increases risk — paroxetine is one of the more dangerous SSRIs in overdose due to high potency and added anticholinergic effects.",
      management: "Use cautiously in patients with epilepsy. Benzodiazepines for seizure in overdose setting. Activated charcoal if recent ingestion.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes. Paroxetine is NOT approved in patients under 18.",
    },
    {
      parameter: "Pregnancy test (women of reproductive potential)",
      frequency: "Baseline before initiation; counsel on reliable contraception throughout treatment.",
      rationale:
        "Paroxetine is Pregnancy Category D. Verify a woman is not pregnant before starting, and ensure reliable contraception during treatment. If pregnancy occurs, do NOT stop abruptly — refer urgently to switch to sertraline under specialist supervision.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 1 month, 3 months, then every 3–6 months.",
      rationale:
        "Paroxetine causes the most weight gain among SSRIs. Document baseline weight, set a threshold (e.g. 5% gain) for switching. Counsel on diet/exercise. Avoid as first-line in patients with obesity or metabolic syndrome.",
    },
    {
      parameter: "Serum sodium",
      frequency: "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale: "SSRIs cause SIADH in ~0.5–1% of patients. Highest risk in elderly females.",
    },
    {
      parameter: "Full medication review (CYP2D6 substrates & tamoxifen)",
      frequency: "Baseline and at every visit when medications change.",
      rationale:
        "Paroxetine is a potent CYP2D6 inhibitor. Screen for tamoxifen (absolute contraindication), TCAs, metoprolol, propafenone, atomoxetine, risperidone, and other CYP2D6 substrates. Adjust doses or switch antidepressant.",
    },
    {
      parameter: "Response assessment (PHQ-9 / GAD-7)",
      frequency: "Baseline, week 4, week 8, then every 3 months.",
      rationale: "Quantifies response. ≥50% reduction in PHQ-9 = response. PHQ-9 <5 = remission.",
    },
    {
      parameter: "Discontinuation symptoms during taper",
      frequency: "At every taper step (typically every 2–4 weeks).",
      rationale:
        "Paroxetine has the worst discontinuation syndrome of any SSRI. Use a validated scale (DESS — Discontinuation Emergent Signs and Symptoms) at each taper step. If symptoms emerge, slow the taper further or substitute fluoxetine.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism: "MAOIs inhibit serotonin breakdown. Combining with SERT blockade causes massive serotonergic excess → serotonin syndrome.",
      action: "Absolute contraindication. Wait 14 days after stopping MAOI before starting paroxetine; 14 days after stopping paroxetine before starting MAOI.",
    },
    {
      drug: "Tamoxifen",
      severity: "contraindicated",
      mechanism:
        "Tamoxifen is a prodrug converted by CYP2D6 to the active metabolite endoxifen, which is responsible for much of its anticancer effect. Paroxetine is a potent CYP2D6 inhibitor and substantially reduces endoxifen formation — observational data suggest increased breast-cancer recurrence and mortality. This is the single most clinically important paroxetine interaction.",
      action:
        "NEVER combine. If an antidepressant is required during tamoxifen therapy, use a non-CYP2D6-inhibiting alternative: venlafaxine (preferred), citalopram, escitalopram, or sertraline (mild). Avoid paroxetine, fluoxetine, and bupropion.",
    },
    {
      drug: "Pimozide & thioridazine",
      severity: "contraindicated",
      mechanism:
        "Paroxetine's potent CYP2D6 inhibition raises pimozide and thioridazine levels → QTc prolongation → torsades de pointes. Thioridazine alone carries a boxed QTc warning.",
      action: "Never combine either drug with paroxetine.",
    },
    {
      drug: "Tramadol",
      severity: "major",
      mechanism:
        "Tramadol is a weak serotonin–norepinephrine reuptake inhibitor and inhibits serotonin reuptake. Combined with paroxetine, raises serotonin syndrome risk. Also lowers seizure threshold. Additionally, paroxetine inhibits CYP2D6, blocking conversion of tramadol to its active O-desmethyl metabolite (M1) — reducing analgesia.",
      action: "Avoid if possible. If unavoidable, use lowest tramadol dose, monitor for serotonin syndrome AND inadequate analgesia.",
    },
    {
      drug: "Triptans (sumatriptan, rizatriptan, eletriptan)",
      severity: "major",
      mechanism: "Triptans are 5-HT1B/1D agonists — additive serotonergic effect.",
      action: "Use cautiously. Monitor for serotonin syndrome, especially in first month of SSRI therapy.",
    },
    {
      drug: "NSAIDs & aspirin",
      severity: "moderate",
      mechanism: "SSRIs deplete platelet serotonin → impaired aggregation. NSAIDs cause GI mucosal damage. Combined → ~6× increased risk of upper GI bleeding.",
      action: "Co-prescribe gastroprotection (PPI) in elderly or those with prior GI bleed. Consider paracetamol instead.",
    },
    {
      drug: "Warfarin / DOACs",
      severity: "moderate",
      mechanism:
        "Additive bleeding risk (platelet effect + anticoagulation). Paroxetine also inhibits CYP2D6, which can affect the metabolism of some R-warfarin enantiomer pathways.",
      action: "Monitor INR closely during paroxetine initiation/discontinuation if on warfarin. Counsel patients on DOACs about bleeding signs.",
    },
    {
      drug: "CYP2D6 substrates (TCAs, metoprolol, propafenone, atomoxetine, risperidone, codeine)",
      severity: "major",
      mechanism:
        "Paroxetine is the STRONGEST CYP2D6 inhibitor among SSRIs (alongside fluoxetine). Raises levels of all CYP2D6 substrates — TCAs (cardiotoxicity risk), metoprolol (bradycardia), propafenone (arrhythmia), atomoxetine, risperidone. Conversely, codeine is a prodrug activated by CYP2D6 — paroxetine blocks conversion to morphine → reduced analgesia.",
      action:
        "Check ALL co-prescribed drugs against a CYP2D6 substrate list. Reduce TCA dose by 50% if combined. Avoid codeine — use a non-CYP2D6-dependent opioid. Monitor for toxicity of any co-administered CYP2D6 substrate.",
    },
    {
      drug: "St John's Wort",
      severity: "major",
      mechanism: "Herbal SSRI. Additive serotonergic effect.",
      action: "Avoid combination — serotonin syndrome risk.",
    },
    {
      drug: "QTc-prolonging drugs (antiarrhythmics, antipsychotics, macrolides, fluoroquinolones)",
      severity: "moderate",
      mechanism: "Paroxetine itself has minimal direct QTc effect, but its CYP2D6 inhibition raises levels of co-prescribed QTc-prolonging drugs that are CYP2D6 substrates (e.g. thioridazine, pimozide).",
      action: "Review full medication list. Avoid combining with other QTc-prolonging agents where possible; baseline ECG if multiple QTc drugs unavoidable.",
    },
  ],

  pregnancy: {
    legacyCategory: "D (former FDA category)",
    summary:
      "AVOID in pregnancy — particularly in the first trimester. First-trimester paroxetine exposure is associated with an approximately 2-fold increased risk of congenital cardiovascular malformations (primarily ventricular and atrial septal defects), raising the absolute risk from a background ~1% to ~2%. FDA, ACOG, and most guidelines recommend avoiding paroxetine in pregnancy and using sertraline (the SSRI of choice) if an SSRI is necessary. If a patient becomes pregnant while taking paroxetine, do NOT stop abruptly — abrupt cessation risks severe discontinuation syndrome and untreated maternal depression also harms the pregnancy. Switch to sertraline under specialist supervision with a slow cross-taper. Third-trimester use of any SSRI is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding) in ~30% of exposed neonates — usually self-limited. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks, ideally with a perinatal psychiatrist.",
    lactation:
      "Paroxetine is secreted into breast milk but is considered relatively safe in lactation — the relative infant dose is low (~1–3%) and infant serum levels are usually undetectable, similar to sertraline. Among SSRIs, paroxetine and sertraline are the two preferred options in breastfeeding. However, given paroxetine's other disadvantages (interactions, weight, sedation), sertraline is generally preferred if a breastfeeding mother needs an SSRI. Watch for infant irritability, sedation, or poor feeding during initiation. Avoid if mother is also on tamoxifen for breast cancer.",
  },

  renalAdjustment:
    "No dose adjustment required in mild–moderate renal impairment (CrCl 30–60 mL/min). In severe renal impairment (CrCl <30 mL/min), start at the lower end of the dosing range (e.g. 10 mg/day for depression) and titrate slowly — plasma levels may be elevated. Paxil CR is not recommended in severe renal impairment.",

  hepaticAdjustment:
    "In patients with severe hepatic impairment (Child-Pugh C), start at 10 mg/day and titrate slowly; do not exceed 40 mg/day (20 mg/day for Paxil CR). For mild–moderate hepatic impairment, start at the lower end of the dosing range and titrate to response.",

  /* ---- Education ---- */
  patientExplanation:
    "Paroxetine is a medicine that helps the brain keep more of a chemical called serotonin available for longer. Serotonin is one of the chemicals your brain uses to regulate mood, anxiety, sleep, and appetite. By keeping more of it active between nerve cells, paroxetine helps your brain's mood-regulation system work better — but this doesn't happen immediately. Most people feel some side effects in the first week or two (often nausea, sleep changes, sedation, or dry mouth) before the mood benefit builds up over 4–6 weeks. Paroxetine is more sedating than most other antidepressants — so it is usually taken at night — and it tends to cause more weight gain, dry mouth, and sexual side effects than other SSRIs. It is also one of the hardest antidepressants to stop, because its effects wear off quickly between doses. For this reason, NEVER stop paroxetine suddenly: stopping abruptly can cause severe withdrawal symptoms (dizziness, 'brain zaps', nausea, irritability) within a day or two of a missed dose. Always come off it slowly with your doctor's guidance, often over several months. If you are a woman who could become pregnant, paroxetine should generally be avoided — it can harm the developing baby, especially in early pregnancy. Use reliable contraception while taking paroxetine, and tell your doctor right away if you think you might be pregnant — but DO NOT stop the medicine abruptly.",

  patientEducationPoints: [
    "DO NOT STOP ABRUPTLY. Paroxetine is one of the hardest antidepressants to stop. Missing even one or two doses can trigger withdrawal symptoms (dizziness, 'brain zaps', nausea, irritability) within 24–48 hours. Always take it on time, refill prescriptions early, and only stop with your doctor's guidance — usually over several months.",
    "If you are a woman who could become pregnant, paroxetine should generally be avoided — it can harm the developing baby, especially in the first 3 months. Use reliable contraception while taking it. If you think you might be pregnant, contact your doctor immediately — but DO NOT stop the medicine on your own.",
    "Some early changes can happen within 1–2 weeks, but clearer mood benefit often takes 4–6 weeks or longer. Don't stop early just because you don't feel better yet.",
    "Paroxetine is more sedating than most other antidepressants. Take it at bedtime. If you feel excessively sleepy during the day, talk to your clinician — a different medicine may suit you better.",
    "Paroxetine commonly causes weight gain. Eat sensibly, exercise regularly, and weigh yourself monthly. If you gain more than 5% of your starting weight, talk to your clinician about switching.",
    "Sexual side effects (reduced interest, difficulty reaching orgasm, erectile changes) are common — affecting up to half of people on paroxetine. They are usually reversible but can persist. Talk to your clinician — adding bupropion or switching to a different medicine often helps.",
    "Tell your doctor about ALL other medicines you take — especially tamoxifen (for breast cancer), tramadol (pain), triptans (migraine), codeine, certain antibiotics like linezolid, cough syrups with dextromethorphan, or herbal products like St John's Wort. Paroxetine interacts with many drugs because it blocks a liver enzyme called CYP2D6.",
    "If you have been prescribed paroxetine for hot flushes (Brisdelle 7.5 mg), this is a much lower dose than used for depression. The same rules apply — do not stop abruptly, and do not combine with tamoxifen.",
    "Watch for warning signs in the first month: new or worsening agitation, irritability, anxiety, or suicidal thoughts — particularly if you're under 25. Contact your clinician immediately.",
    "Seek emergency help for signs of serotonin syndrome: high fever, confusion, sweating, agitation, tremor, muscle rigidity or twitching, fast heartbeat — especially after starting a new medicine that affects serotonin.",
  ],

  clinicalPearls: [
    "Generally AVOID paroxetine as first-line — multiple negatives: worst discontinuation syndrome (shortest half-life + no active metabolite), most weight gain, most sedation, most anticholinergic effects, highest sexual dysfunction rate, strongest CYP2D6 inhibition, AND it is a Pregnancy Category D teratogen. Reserve for patients who have failed or cannot tolerate other SSRIs.",
    "Discontinuation syndrome is the single biggest practical problem with paroxetine. Taper over MONTHS, not weeks — reduce by no more than 10% every 2–4 weeks for long-term users. Use the DESS scale to monitor. Substituting fluoxetine (long half-life) for the last few weeks of a paroxetine taper can smooth the discontinuation.",
    "Tamoxifen + paroxetine = absolute contraindication. CYP2D6 inhibition reduces conversion of tamoxifen to endoxifen → potentially increased breast-cancer recurrence. If an antidepressant is needed in a tamoxifen-treated patient, use venlafaxine (preferred), citalopram, escitalopram, or sertraline. Screen for tamoxifen at every paroxetine prescription.",
    "Pregnancy Category D — avoid in pregnancy, especially 1st trimester (≈2× cardiac septal defects). If a woman on paroxetine becomes pregnant, DO NOT stop abruptly. Switch to sertraline under perinatal psychiatry supervision with a slow cross-taper. Switch BEFORE conception if possible — counsel reproductive-age women about this at the time of initiation.",
    "Paroxetine's mild M1 anticholinergic activity is UNIQUE among SSRIs and explains its distinct side-effect profile: more dry mouth, constipation, urinary hesitancy, blurred vision, and sedation. Particularly problematic in elderly — high anticholinergic burden scales (ACB) score increases fall, delirium, and dementia risk. Avoid in elderly where possible.",
    "Paroxetine is the ONLY FDA-approved non-hormonal treatment for menopausal vasomotor symptoms (paroxetine 7.5 mg as Brisdelle). This is a niche use — particularly valuable in breast-cancer survivors who cannot take HRT. CRITICAL: must NOT be on concurrent tamoxifen.",
    "Among SSRIs, paroxetine has the highest sexual-dysfunction rate (40–50%). This side effect is leveraged therapeutically for premature ejaculation (off-label) — but for most patients it is the reason they stop. Always ask directly; patients rarely volunteer it.",
    "Onset of action for depression is 4–6 weeks; for anxiety disorders, PTSD, and social anxiety, 8–12 weeks. Treatment response (≥50% PHQ-9 reduction) by week 6; remission (PHQ-9 <5) by week 12. If no response by week 6, increase dose. If no response by week 12 at max dose, switch class — and consider that paroxetine itself may need switching to a different SSRI.",
    "Continue treatment for 6–12 months after the FIRST depressive episode. For 2+ episodes or severe episodes, consider indefinite maintenance therapy (recurrence risk after 2 episodes is ~70%). When the time comes to stop, plan the taper MONTHS in advance for paroxetine.",
    "Paroxetine exhibits non-linear kinetics: it inhibits its own CYP2D6-mediated metabolism. Dose increases produce disproportionate plasma-level rises — so titrate cautiously (10 mg increments) and don't assume dose proportionality. CYP2D6 poor metabolisers (~7% of Caucasians) have 2–10× higher levels — consider pharmacogenomic testing in patients with unexpected toxicity.",
  ],

  examPearls: [
    "Paroxetine = SHORTEST half-life of the 6 SSRIs (~21 h) → WORST discontinuation syndrome. Always the answer to 'Which SSRI has the most severe withdrawal?'",
    "Paroxetine = STRONGEST CYP2D6 inhibitor among SSRIs (alongside fluoxetine). Raises levels of TCAs, metoprolol, propafenone, risperidone, atomoxetine. Blocks codeine → morphine conversion (reduced analgesia).",
    "TAMOXIFEN + PAROXETINE = absolute contraindication. CYP2D6 inhibition reduces endoxifen formation → potential cancer recurrence. Use venlafaxine or citalopram/escitalopram/sertraline if an antidepressant is needed during tamoxifen therapy. This is the single most tested paroxetine interaction.",
    "Paroxetine = Pregnancy Category D. 1st trimester associated with ~2× risk of cardiac (septal) defects. AVOID in pregnancy — switch to sertraline (SSRI of choice). DO NOT stop abruptly if patient becomes pregnant — cross-taper to sertraline under supervision.",
    "Paroxetine = MOST sedating SSRI (due to mild M1 anticholinergic activity, unique among SSRIs). Give at night. Useful in agitated depression with insomnia; bad for lethargic depression.",
    "Paroxetine = MOST weight gain among SSRIs. Avoid in obese patients or metabolic syndrome.",
    "Paroxetine = HIGHEST sexual dysfunction rate among SSRIs (40–50%). Leveraged off-label for premature ejaculation.",
    "Paroxetine = MOST anticholinergic SSRI (dry mouth, constipation, urinary hesitancy, blurred vision). Avoid in elderly (high anticholinergic burden → falls, delirium, dementia).",
    "FDA indications (7): MDD, OCD, Panic, Social Anxiety, PTSD, GAD, PMDD (Paxil CR). Note: NOT approved in paediatric patients — black-box warning.",
    "Brisdelle = paroxetine 7.5 mg = the ONLY FDA-approved NON-HORMONAL treatment for menopausal vasomotor symptoms. Niche use in breast-cancer survivors who cannot take HRT — but NEVER combine with tamoxifen.",
    "Discontinuation syndrome mnemonic 'FINISH': Flu-like, Insomnia, Nausea, Imbalance, Sensory disturbances (brain zaps), Hyperarousal. Worst with paroxetine (shortest half-life); mildest with fluoxetine (longest).",
    "Mechanism: SERT blockade (most potent in vitro among SSRIs) + mild M1 antagonism (unique). Same chronic 5-HT1A desensitisation → BDNF → neurogenesis pathway as other SSRIs (4–6 weeks).",
    "Black-box warnings: (1) suicidality <25 (and NOT approved in <18); (2) pregnancy Category D — 1st trimester cardiac defects. Two boxed warnings — more than most SSRIs.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "PAR = Problems Always",
      trick: "PARoxetine = Pregnancy Avoid · Anticholinergic effects · Reacts with CYP2D6 (and tamoxifen)",
      remembers:
        "The three big problems that make paroxetine generally avoided: Pregnancy Category D, anticholinergic side effects (unique among SSRIs), and potent CYP2D6 inhibition causing drug interactions.",
    },
    {
      title: "PAXil = 'Pregnancy Avoid X'",
      trick: "PAX-il has an X in it — X marks it as the SSRI to AVOID in pregnancy (Category D).",
      remembers:
        "Among SSRIs, paroxetine is the ONE with a clear teratogenic signal — first-trimester cardiac septal defects (≈2× risk). Switch to sertraline before conception.",
    },
    {
      title: "WORST SSRI",
      trick: "Paroxetine is the WORST SSRI: Withdrawal (worst) · Obesity (most weight gain) · Reacts (CYP2D6) · Sedation (most) · Teratogen (Pregnancy D)",
      remembers:
        "Five 'worst-in-class' dimensions: worst discontinuation, most weight gain, strongest CYP2D6 inhibition (with fluoxetine), most sedating, only Pregnancy Category D SSRI.",
    },
    {
      title: "TAM-PA-XIL",
      trick: "TAMoxifen + PAroxetine = bad X (cross them off — never combine)",
      remembers:
        "Paroxetine's CYP2D6 inhibition blocks conversion of tamoxifen to endoxifen → reduces cancer protection. Absolute contraindication. Use venlafaxine instead if depression occurs during tamoxifen therapy.",
    },
    {
      title: "21 hours = 21 problems",
      trick: "Half-life of 21 hours = the shortest of any SSRI = the worst discontinuation syndrome.",
      remembers:
        "Short half-life + no active metabolite + non-linear kinetics = severe withdrawal within 24–48 h of a missed dose. Taper over MONTHS, not weeks. The '21' makes it the SSRI patients most often struggle to stop.",
    },
    {
      title: "Brisdelle = the only non-hormonal hot-flush drug",
      trick: "BRISDELLE = paroxetine 7.5 mg = the ONLY FDA-approved NON-HORMONAL drug for menopausal hot flushes.",
      remembers:
        "Paroxetine's unique FDA niche. Useful in breast-cancer survivors who can't take HRT — but absolutely never combine with tamoxifen (use venlafaxine off-label instead if patient is on tamoxifen).",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: SSRI — most potent SERT blocker in vitro; UNIQUE among SSRIs in also having mild M1 anticholinergic activity.",
    "Mechanism: Acute SERT blockade (hours) + anticholinergic effect → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ BDNF + neurogenesis (4–6 weeks). The delay explains why patients feel worse before better.",
    "7 FDA indications: MDD, OCD, Panic, Social Anxiety, PTSD, GAD, PMDD (Paxil CR). Plus Brisdelle 7.5 mg for menopausal vasomotor symptoms (only non-hormonal FDA-approved option). NOT approved in <18 years.",
    "Half-life 21 h — SHORTEST of any SSRI. No active metabolite. Non-linear kinetics (autoinhibits its own CYP2D6 metabolism). Metabolised by CYP2D6.",
    "Side-effect profile: MOST sedating, MOST weight gain, MOST anticholinergic, HIGHEST sexual dysfunction (40–50%) among SSRIs.",
    "WORST discontinuation syndrome of any SSRI (short half-life + no active metabolite). NEVER stop abruptly — taper over months, ~10% every 2–4 weeks. Substitute fluoxetine at end of taper.",
    "Pregnancy Category D — 1st trimester associated with ~2× risk of cardiac septal defects. AVOID. Switch to sertraline (SSRI of choice in pregnancy). If patient becomes pregnant, do NOT stop abruptly — cross-taper to sertraline.",
    "Tamoxifen = absolute contraindication. CYP2D6 inhibition reduces endoxifen formation → cancer-protection loss. Use venlafaxine or citalopram/escitalopram/sertraline if antidepressant needed during tamoxifen.",
    "Other contraindications: MAOIs (14-day washout), pimozide & thioridazine (QTc + CYP2D6), pregnancy, tamoxifen, hypersensitivity.",
    "Interactions: MAOIs (fatal), tamoxifen (cancer), tramadol & triptans & St John's Wort (serotonin syndrome), NSAIDs/warfarin (bleeding), CYP2D6 substrates — TCAs, metoprolol, propafenone, risperidone, atomoxetine, codeine.",
    "Monitoring: mood/suicidality (weekly × 1 month), pregnancy test before initiation in women of reproductive potential, weight at baseline/1m/3m, Na in elderly, full med review for CYP2D6 substrates, DESS scale during taper.",
    "Generally AVOID as first-line. Niche uses: (1) severe vasomotor symptoms in breast-cancer survivors (Brisdelle 7.5 mg, off tamoxifen); (2) agitated depression with insomnia + anxiety where sedation is beneficial; (3) premature ejaculation (off-label, leveraging sexual-dysfunction side effect).",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Severe vasomotor symptoms in a 54-year-old breast-cancer survivor — paroxetine's niche use",
      presentation:
        "A 54-year-old woman presents with 8 months of severe hot flushes (15–20 per day) and night sweats disrupting sleep, 6 months after completing 5 years of adjuvant tamoxifen for stage I ER+ breast cancer.",
      history:
        "Meera, a 54-year-old human-resources manager, was diagnosed 5 years ago with stage I (T1cN0M0), grade 2, ER+/PR+/HER2− invasive ductal carcinoma of the left breast. She underwent lumpectomy + sentinel node biopsy, adjuvant radiotherapy, and 5 years of adjuvant tamoxifen 20 mg/day — completed 6 months ago with no recurrence on surveillance. She is menopausal (LMP 3 years ago, before chemo was needed). For the past 8 months she has had 15–20 hot flushes per day and 4–5 night sweats, waking her 3–4 times nightly. Sleep deprivation has caused secondary fatigue, low mood (PHQ-9 = 9, mild), and impaired concentration at work. She has tried lifestyle measures (layered clothing, fan, caffeine avoidance), gabapentin (caused excessive daytime sedation), and venlafaxine 37.5 mg (stopped due to nausea and BP elevation). She is desperate for relief. She has read that hormone replacement therapy is contraindicated after breast cancer. Past medical history: hypertension (well controlled on amlodipine 5 mg). No psychiatric history prior to the cancer diagnosis. Family history: mother had breast cancer at 62.",
      examination:
        "Well-appearing, no acute distress. BMI 27. BP 132/82, HR 78. Breast examination: well-healed lumpectomy scar left breast, no masses, no lymphadenopathy. No clinical signs of recurrence. Mood mildly low; affect reactive. No suicidal ideation. Cognitively intact (MoCA 29/30). PHQ-9 = 9 (mild depression, predominantly sleep-driven). GAD-7 = 6 (mild). Recent oncology follow-up: tumour markers negative, mammogram 3 months ago negative.",
      diagnosis:
        "Severe vasomotor symptoms (VMS) of menopause, refractory to first-line non-hormonal measures, in a breast-cancer survivor with contraindication to hormone replacement therapy. Secondary mild depression and insomnia driven by sleep deprivation from nocturnal VMS. Differential for the depressed mood: recurrent breast cancer (ruled out by recent imaging); primary MDD (less likely — temporal correlation with VMS strongly suggests secondary).",
      rationale:
        "Paroxetine mesylate 7.5 mg (Brisdelle) is the ONLY FDA-approved non-hormonal treatment for moderate-to-severe vasomotor symptoms of menopause — and is particularly suitable for breast-cancer survivors who cannot take HRT. CRITICAL pre-prescription check: patient must NOT be on concurrent tamoxifen — paroxetine's CYP2D6 inhibition reduces endoxifen formation and may compromise cancer protection. Meera completed tamoxifen 6 months ago, so this is safe. The 7.5 mg dose is much lower than the antidepressant dose (20–50 mg) and is NOT intended to treat her mild depression directly; her mood is expected to improve secondarily as sleep restores. Venlafaxine — the typical first-line alternative in breast-cancer survivors — was poorly tolerated. Gabapentin was sedating. Paroxetine 7.5 mg at night is a rational next step. The once-nightly dosing also leverages paroxetine's mild sedating property to help with the patient's insomnia.",
      management:
        "Started paroxetine mesylate (Brisdelle) 7.5 mg orally at night. Explicit counselling: (1) this is the low-dose formulation for hot flushes — do NOT substitute generic paroxetine 10/20/30/40 mg tablets (wrong dose, wrong indication); (2) takes ~4 weeks for full effect on VMS; (3) DO NOT STOP ABRUPTLY even at this low dose — taper if discontinuing; (4) NEVER combine with tamoxifen — if breast-cancer recurrence ever requires tamoxifen in future, stop paroxetine first and switch to venlafaxine; (5) reliable contraception is irrelevant (post-menopausal) but the Pregnancy Category D warning was nonetheless discussed; (6) report any new breast lumps or concerns to oncology team. Plan: review at 4 weeks (VMS diary, tolerability, sleep, mood), 8 weeks (full response assessment), then every 6 months. Continued oncology surveillance unchanged.",
      outcome:
        "Week 2: modest reduction in hot flushes (10–12/day), sleep still fragmented but improving. Week 4: hot flushes reduced to 6–8/day, night sweats to 1–2/night; sleep consolidated; PHQ-9 = 5 (remission of mild depression). Week 8: hot flushes 4–5/day, night sweats 0–1/night; sleep fully restored; PHQ-9 = 3; energy and concentration returned to baseline. Patient resumed full work and social activities. No significant side effects at 7.5 mg dose. Plan: continue indefinitely (VMS typically persists 4–7 years post-menopause). If paroxetine ever needs to be stopped, taper over 4–6 weeks even from this low dose. Annual oncology mammogram continued unchanged — no recurrence at 18-month follow-up.",
      teachingPoints: [
        "Paroxetine 7.5 mg (Brisdelle) is the ONLY FDA-approved non-hormonal treatment for moderate-to-severe menopausal vasomotor symptoms — a unique niche for paroxetine, and especially valuable in breast-cancer survivors who cannot take HRT.",
        "ABSOLUTE CONTRAINDICATION with concurrent tamoxifen: paroxetine's potent CYP2D6 inhibition reduces conversion of tamoxifen to its active metabolite endoxifen, potentially compromising anticancer efficacy. Always document the patient's tamoxifen status before prescribing paroxetine — if tamoxifen is current, use venlafaxine or citalopram/escitalopram/sertraline instead.",
        "The Brisdelle 7.5 mg dose is for VMS — it is NOT an antidepressant dose (paroxetine for depression is 20–50 mg). Do NOT substitute generic paroxetine tablets, which come in 10/20/30/40 mg strengths and would constitute an overdose for the VMS indication.",
        "Even at low dose (7.5 mg), paroxetine's short half-life means DO NOT STOP ABRUPTLY still applies. Taper over 4–6 weeks when discontinuing.",
        "Mild depression secondary to severe VMS and sleep deprivation often resolves with effective VMS treatment — avoid escalating to antidepressant doses prematurely. Reassess mood at 4–8 weeks before adding antidepressant therapy.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Paroxetine vs Sertraline vs Fluoxetine vs Escitalopram — the four most-prescribed SSRIs",
      primaryDrug: "Paroxetine",
      rows: [
        {
          attribute: "Half-life",
          primaryValue: "~21 hours (SHORTEST of all SSRIs)",
          comparisons: [
            { drug: "Sertraline", value: "26 hours" },
            { drug: "Fluoxetine", value: "1–4 days (with norfluoxetine — LONGEST)" },
            { drug: "Escitalopram", value: "27–32 hours" },
          ],
        },
        {
          attribute: "Active metabolite",
          primaryValue: "None clinically significant",
          comparisons: [
            { drug: "Sertraline", value: "N-desmethylsertraline (weak)" },
            { drug: "Fluoxetine", value: "Norfluoxetine (equally potent, 4–9 day half-life)" },
            { drug: "Escitalopram", value: "S-demethylcitalopram (weak)" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "WORST of any SSRI — taper over MONTHS",
          comparisons: [
            { drug: "Sertraline", value: "Mild–moderate — taper over 4+ weeks" },
            { drug: "Fluoxetine", value: "MILDEST — self-tapers due to long half-life" },
            { drug: "Escitalopram", value: "Mild–moderate — taper over 4+ weeks" },
          ],
        },
        {
          attribute: "CYP2D6 inhibition",
          primaryValue: "STRONGEST among SSRIs (tied with fluoxetine) — raises TCA/metoprolol/risperidone levels; blocks codeine→morphine",
          comparisons: [
            { drug: "Sertraline", value: "Mild (only at ≥200 mg/day)" },
            { drug: "Fluoxetine", value: "Strong (tied with paroxetine)" },
            { drug: "Escitalopram", value: "Minimal — lowest interaction profile" },
          ],
        },
        {
          attribute: "Tamoxifen co-prescription",
          primaryValue: "ABSOLUTE CONTRAINDICATION (reduces endoxifen)",
          comparisons: [
            { drug: "Sertraline", value: "Caution (mild CYP2D6 inhibitor — generally acceptable)" },
            { drug: "Fluoxetine", value: "Avoid (strong CYP2D6 inhibitor, like paroxetine)" },
            { drug: "Escitalopram", value: "Safe (minimal CYP2D6 effect — preferred alternative)" },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "MOST sedating SSRI — give at night",
          comparisons: [
            { drug: "Sertraline", value: "Mildly activating — usually morning" },
            { drug: "Fluoxetine", value: "MOST activating SSRI — morning dosing" },
            { drug: "Escitalopram", value: "Neutral" },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "MOST among SSRIs (3–5% body weight typical)",
          comparisons: [
            { drug: "Sertraline", value: "Mild" },
            { drug: "Fluoxetine", value: "Weight neutral / early weight loss" },
            { drug: "Escitalopram", value: "Mild" },
          ],
        },
        {
          attribute: "Sexual dysfunction",
          primaryValue: "HIGHEST rate (40–50%)",
          comparisons: [
            { drug: "Sertraline", value: "Common (30–40%)" },
            { drug: "Fluoxetine", value: "Common (30–40%)" },
            { drug: "Escitalopram", value: "Common (30–40%)" },
          ],
        },
        {
          attribute: "Pregnancy category",
          primaryValue: "Category D — AVOID (1st trimester cardiac defects ≈2×)",
          comparisons: [
            { drug: "Sertraline", value: "SSRI of choice in pregnancy (Category C legacy)" },
            { drug: "Fluoxetine", value: "Generally safe (longest experience)" },
            { drug: "Escitalopram", value: "Generally safe" },
          ],
        },
        {
          attribute: "Anticholinergic effects",
          primaryValue: "MOST among SSRIs (mild M1 antagonism — unique)",
          comparisons: [
            { drug: "Sertraline", value: "Minimal" },
            { drug: "Fluoxetine", value: "Minimal" },
            { drug: "Escitalopram", value: "Minimal" },
          ],
        },
        {
          attribute: "Unique FDA niche",
          primaryValue: "Brisdelle 7.5 mg — only non-hormonal drug for menopausal vasomotor symptoms",
          comparisons: [
            { drug: "Sertraline", value: "Only SSRI approved for PTSD" },
            { drug: "Fluoxetine", value: "Only SSRI approved for paediatric depression (≥8 yrs) & bulimia" },
            { drug: "Escitalopram", value: "Only SSRI approved for adolescent GAD (12–17 yrs)" },
          ],
        },
        {
          attribute: "Paediatric approval",
          primaryValue: "NOT approved in <18 years (black-box warning)",
          comparisons: [
            { drug: "Sertraline", value: "Approved for paediatric OCD & MDD (≥6 yrs)" },
            { drug: "Fluoxetine", value: "Approved for paediatric MDD (≥8 yrs) & OCD (≥8 yrs)" },
            { drug: "Escitalopram", value: "Approved for adolescent MDD (≥12 yrs) & GAD (≥12 yrs)" },
          ],
        },
      ],
      takeaway:
        "Paroxetine is the WORST SSRI on almost every dimension: worst discontinuation (shortest half-life, no active metabolite), most sedation, most weight gain, most anticholinergic effects, highest sexual dysfunction, strongest CYP2D6 inhibition (with fluoxetine), absolute tamoxifen contraindication, and the only Pregnancy Category D SSRI. Generally AVOID as first-line. Sertraline = best all-rounder (especially in pregnancy and when interactions matter). Fluoxetine = good for lethargic depression and when long half-life helps adherence. Escitalopram = best if patient is on many other drugs (lowest CYP interactions). Paroxetine = reserve for its narrow niche: severe vasomotor symptoms in breast-cancer survivors (off tamoxifen), agitated depression with severe insomnia where sedation is therapeutic, or premature ejaculation (off-label).",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute SERT blockade + anticholinergic effects",
      description:
        "Paroxetine blocks SERT within hours; synaptic serotonin rises. Mild anticholinergic effects (dry mouth, sedation, constipation) may be noticeable within the first day — distinguishing paroxetine from other SSRIs. Nausea, headache, and somnolence often appear here. Patients frequently feel worse before they feel better.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "5-HT1A autoreceptor desensitisation begins",
      description:
        "Somatodendritic 5-HT1A autoreceptors in the raphe nuclei begin to desensitise. Serotonin release toward the prefrontal cortex gradually increases. Sedation may be prominent — paroxetine's anticholinergic and serotonergic sedative effects peak in this window. Sleep architecture often normalises early — a benefit in insomnia-associated depression.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Neuroadaptive changes",
      description:
        "BDNF expression rises in the hippocampus. Postsynaptic receptor downregulation occurs. Early mood improvement becomes noticeable in many patients. Sexual side effects typically emerge here — and may be more pronounced than with other SSRIs. Steady state is reached relatively early (≈1 week) due to the short half-life — but non-linear kinetics mean dose changes take longer to fully equilibrate.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "Steady-state serotonin levels and full downstream adaptations achieved. Mood, anxiety, and energy typically reach maximum improvement for depression. Side effects usually stabilise — but weight gain may continue to accumulate over months.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 8–12",
      title: "Full therapeutic effect (anxiety, PTSD)",
      description:
        "Anxiety disorders, panic, PTSD, and social anxiety often take 8–12 weeks for full response — slower than depression. Counsel patients accordingly. The sedating profile can be advantageous in anxiety disorders with prominent insomnia.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months 3–6",
      title: "Maintenance & weight monitoring",
      description:
        "Continue treatment for 6–12 months after the first depressive episode, longer (often indefinite) for recurrent episodes, OCD, or chronic anxiety disorders. Monitor weight every 3–6 months — paroxetine's weight-gain trajectory often continues well beyond the acute phase. Sexual side effects, if present, usually persist.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "VERY SLOW tapered withdrawal — over MONTHS, not weeks",
      description:
        "Sudden cessation causes the WORST discontinuation syndrome of any SSRI — symptoms can emerge within 24–48 hours of a missed dose (dizziness, 'brain zaps', nausea, headache, irritability, vivid dreams, insomnia). Taper over MONTHS — reduce by no more than 10% every 2–4 weeks for long-term users. If symptoms emerge, return to previous dose and slow further. Substituting fluoxetine (long half-life) for the last few weeks can smooth the taper. NEVER stop abruptly.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does paroxetine take to work?",
      answer:
        "Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks or longer for depression. For anxiety disorders, PTSD, and social anxiety, full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet.",
    },
    {
      question: "Why is paroxetine harder to stop than other antidepressants?",
      answer:
        "Paroxetine has the shortest half-life (~21 hours) of any SSRI and has no active metabolite to 'self-taper'. When you miss a dose or stop suddenly, blood levels fall quickly and withdrawal symptoms (dizziness, 'brain zaps', nausea, irritability, vivid dreams, insomnia) can emerge within 24–48 hours. This is why paroxetine must ALWAYS be tapered slowly — over months, not weeks — and why it is generally not a first-choice antidepressant.",
    },
    {
      question: "Can I take paroxetine if I'm pregnant or trying to conceive?",
      answer:
        "Generally NO. Paroxetine is a Pregnancy Category D medicine — first-trimester exposure is associated with an approximately 2-fold increased risk of cardiac (septal) defects in the baby. If you are planning pregnancy, talk to your doctor about switching to sertraline (the SSRI of choice in pregnancy) BEFORE conception. If you are already pregnant and taking paroxetine, DO NOT stop abruptly — abrupt cessation risks severe withdrawal and untreated depression also harms the pregnancy. Contact your doctor urgently to arrange a supervised switch to sertraline.",
    },
    {
      question: "Can I take paroxetine if I'm on tamoxifen for breast cancer?",
      answer:
        "NO — this is an absolute contraindication. Tamoxifen needs to be converted by a liver enzyme called CYP2D6 to its active form (endoxifen) to work. Paroxetine strongly blocks CYP2D6 and can reduce tamoxifen's anticancer effect, potentially increasing the risk of breast cancer recurrence. If you need an antidepressant while on tamoxifen, your doctor will choose a different one that does not block CYP2D6 — venlafaxine, citalopram, escitalopram, or sertraline are common choices. Notably, the low-dose paroxetine (Brisdelle 7.5 mg) for hot flushes is also contraindicated during tamoxifen therapy — even though hot flushes from tamoxifen are a common reason women seek relief.",
    },
    {
      question: "Is paroxetine addictive?",
      answer:
        "Paroxetine is not addictive in the way that alcohol, opioids, or benzodiazepines can be — it does not cause cravings, escalating use, or intoxication. However, it is the hardest of all SSRIs to stop. Stopping suddenly after several weeks of use can cause severe discontinuation symptoms (dizziness, 'brain zaps', nausea, irritability, vivid dreams, insomnia) within 24–48 hours. Always come off paroxetine very slowly with your doctor's guidance — usually over months, not weeks.",
    },
    {
      question: "Will it affect my sex life?",
      answer:
        "Possibly — and more so than with most other SSRIs. Paroxetine has the highest rate of sexual side effects among SSRIs (affecting ~40–50% of people): decreased libido, delayed orgasm/anorgasmia, and erectile dysfunction. These are usually reversible on discontinuation, but in a small subset of patients they may persist (PSSD). If this bothers you, talk to your clinician — adding bupropion or switching to a different medication often helps. (Interestingly, paroxetine's sexual-dysfunction effect is exploited off-label to treat premature ejaculation.)",
    },
    {
      question: "Why was I prescribed the 7.5 mg dose — isn't that very low?",
      answer:
        "Paroxetine 7.5 mg (brand name Brisdelle) is the only FDA-approved non-hormonal treatment for moderate-to-severe hot flushes of menopause. This is much lower than the dose for depression (20–50 mg) — it works for hot flushes by a different mechanism and is NOT meant to treat depression. It is particularly useful for breast-cancer survivors who cannot take hormone replacement therapy. The same rules still apply: do not stop abruptly, and NEVER combine with tamoxifen.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Because paroxetine's half-life is so short, missing even one or two doses can trigger withdrawal symptoms. Take the missed dose as soon as you remember, unless it is within 8 hours of your next scheduled dose — in that case, skip the missed dose and continue normally. Do NOT double up. If you find you are frequently missing doses, talk to your doctor — a longer-acting antidepressant such as fluoxetine may suit you better.",
    },
  ],

  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE Clinical Guideline CG91 — Depression in adults: recognition and management",
      },
      {
        source: "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder, 3rd edition",
      },
      {
        source:
          "ACOG Committee Opinion No. 753 — Depression and Anxiety During Pregnancy and Postpartum (relevant to SSRI choice in pregnancy)",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents (Paroxetine subsection)",
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
        source:
          "Cipriani A et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366.",
        section: "The definitive SSRI head-to-head meta-analysis — paroxetine effective but with higher dropout for side effects than sertraline/escitalopram",
      },
      {
        source:
          "Goetz MP et al. Tamoxifen metabolism and antidepressant use (CYP2D6 inhibition study). J Clin Oncol 2005;23(suppl): abstr 530 — and Kelly JP et al. Breast Cancer Res Treat 2007;101:125-9 (paroxetine-tamoxifen interaction)",
        section: "Practice-changing observational data on paroxetine-tamoxifen absolute contraindication",
      },
    ],
    reviews: [
      {
        source:
          "Furu K et al. Selective serotonin reuptake inhibitors and venlafaxine in early pregnancy and risk of birth defects: population based cohort study. BMJ 2015;350:h1798 — confirms paroxetine cardiac-defect signal.",
      },
      {
        source:
          "Pletzer et al. & general SSRI pharmacology reviews — Discontinuation syndrome severity ranking among SSRIs (paroxetine > venlafaxine > sertraline > escitalopram > fluoxetine).",
      },
      {
        source: "FDA Prescribing Information — PAXIL (paroxetine hydrochloride), PAXIL CR, and BRISDELLE 7.5 mg",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/020936s062lbl.pdf",
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
        "Same class. SSRI of choice in pregnancy and lactation — the drug to SWITCH TO if a paroxetine patient becomes pregnant. Mild CYP2D6 inhibition. Less sedating, less weight gain, milder discontinuation. Generally preferred over paroxetine as first-line SSRI.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship:
        "Same class. LONGEST half-life (1–4 days with norfluoxetine) → MILDEST discontinuation syndrome — useful to substitute at the end of a paroxetine taper. Also strong CYP2D6 inhibitor (like paroxetine) — also contraindicated with tamoxifen. Most activating SSRI — opposite of paroxetine's sedation.",
    },
    {
      name: "Escitalopram",
      drugClass: "SSRI",
      relationship:
        "Same class. Lowest CYP interaction profile — preferred in patients on complex regimens or tamoxifen. Neutral sedation, mild weight gain, common sexual dysfunction. QTc prolongation at higher doses (>20 mg) — avoid in long-QT.",
    },
    {
      name: "Citalopram",
      drugClass: "SSRI",
      relationship:
        "Same class. Racemic mixture (escitalopram is the S-enantiomer). Minimal CYP2D6 effect — reasonable alternative in tamoxifen-treated patients. Dose-dependent QTc prolongation — max 40 mg/day (20 mg in elderly).",
    },
    {
      name: "Fluvoxamine",
      drugClass: "SSRI",
      relationship:
        "Same class. Preferred for paediatric OCD. Strong CYP1A2 inhibition (not 2D6) — different interaction profile from paroxetine. Useful if a patient needs an SSRI without CYP2D6 inhibition.",
    },
    {
      name: "Venlafaxine",
      drugClass: "SNRI",
      relationship:
        "Alternative class — serotonin-norepinephrine reuptake inhibitor. Preferred antidepressant in patients on tamoxifen (minimal CYP2D6 effect) and in breast-cancer survivors with hot flushes (alternative to paroxetine 7.5 mg). Dose-dependent: <150 mg/day mostly serotonergic; >150 mg/day adds noradrenergic effect. Watch BP — can cause hypertension.",
    },
    {
      name: "Bupropion",
      drugClass: "NDRI",
      relationship:
        "Augmentation partner. Norepinephrine-dopamine reuptake inhibitor. Adding 150 mg XL to paroxetine is first-line augmentation for partial response and reverses SSRI-induced sexual dysfunction. CAUTION: bupropion is also a strong CYP2D6 inhibitor — combined with paroxetine may raise TCA/metoprolol levels further. Avoid in seizure disorder and eating disorders.",
    },
    {
      name: "Mirtazapine",
      drugClass: "NaSSA",
      relationship:
        "Augmentation partner. Noradrenergic and specific serotonergic antidepressant. Adding 15–30 mg at night improves sleep and appetite. Sedating like paroxetine — combination may be excessively sedating in some patients. May reverse SSRI-induced sexual dysfunction.",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Obsessive-Compulsive Disorder", relationship: "primary" },
    { name: "Panic Disorder", relationship: "primary" },
    { name: "Social Anxiety Disorder", relationship: "primary" },
    { name: "Post-Traumatic Stress Disorder", relationship: "primary" },
    { name: "Generalised Anxiety Disorder", relationship: "primary" },
    { name: "Premenstrual Dysphoric Disorder", relationship: "primary" },
    { name: "Vasomotor Symptoms of Menopause", relationship: "primary" },
    { name: "Premature Ejaculation", relationship: "off-label" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Paroxetine", type: "drug", href: "/drugs/paroxetine", note: "The drug you're reading about" },
    { label: "SSRI", type: "class", href: "#mechanism", note: "Selective Serotonin Reuptake Inhibitor — generally AVOID paroxetine as first-line" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "The neurotransmitter being modulated by SERT blockade" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Molecular target — paroxetine is the most potent SERT binder in vitro among SSRIs" },
    { label: "Muscarinic M1 receptor", type: "neurotransmitter", href: "#mechanism", note: "Mild antagonist target — UNIQUE among SSRIs; explains anticholinergic & sedating profile" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood regulation" },
    { label: "Hippocampus", type: "brain-region", href: "#brain-regions", note: "Memory & BDNF-mediated neurogenesis" },
    { label: "Pregnancy Category D", type: "side-effect", href: "#contraindications", note: "1st-trimester cardiac septal defects — AVOID; switch to sertraline" },
    { label: "Discontinuation Syndrome", type: "side-effect", href: "#side-effects", note: "WORST of any SSRI — short half-life + no active metabolite. Never stop abruptly." },
    { label: "Tamoxifen Contraindication", type: "side-effect", href: "#interactions", note: "CYP2D6 inhibition reduces endoxifen — absolute contraindication" },
    { label: "Sexual Dysfunction", type: "side-effect", href: "#side-effects", note: "HIGHEST rate among SSRIs (40–50%) — leveraged off-label for premature ejaculation" },
    { label: "Weight Gain", type: "side-effect", href: "#side-effects", note: "Most weight gain of any SSRI" },
    { label: "Anticholinergic Effects", type: "side-effect", href: "#side-effects", note: "Dry mouth, constipation, sedation, urinary hesitancy — unique among SSRIs" },
    { label: "Patient Guide — Coming Off Paroxetine", type: "patient-guide", href: "#patient-education", note: "Why you must taper slowly (over months, not weeks) — and never stop abruptly" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "An SSRI antidepressant that works well but is harder to stop and has more side effects than most — and must be avoided in pregnancy and with tamoxifen.",
    summary:
      "Paroxetine is one of the older SSRI antidepressants. Like other SSRIs, it helps your brain keep more of a mood-regulating chemical (serotonin) available for longer. But it tends to cause more side effects than other SSRIs — more sleepiness, more weight gain, more sexual side effects, and more dry mouth. It is also the hardest of all the SSRIs to stop, because its effects wear off quickly between doses. For these reasons, doctors usually try other SSRIs first. Paroxetine is also unsafe in pregnancy (it can harm the baby) and must never be taken with the breast-cancer medicine tamoxifen.",
    mechanism:
      "Your brain uses a chemical called serotonin to regulate mood, anxiety, sleep, and appetite. Normally, after serotonin is released between nerve cells, it gets quickly taken back up (recycled). Paroxetine blocks this recycling, so more serotonin stays available between the nerve cells for longer. Over 4–6 weeks, this helps your brain's mood-regulation system work better — but it doesn't happen immediately. Paroxetine also has a mild 'anticholinergic' effect (similar to some older allergy medicines), which is why it tends to cause more dry mouth, sleepiness, and constipation than other SSRIs.",
    sideEffects:
      "Most people get some side effects in the first 1–2 weeks — usually nausea, sleepiness, dry mouth, headache, or feeling a bit wired. These often settle as your body adapts. Compared to other SSRIs, paroxetine is MORE likely to cause sleepiness (so take it at night), weight gain, dry mouth, constipation, and sexual side effects (lower interest or difficulty reaching orgasm — affects up to half of people). Serious side effects are rare but you should know the signs: high fever with confusion and shaking could be serotonin syndrome (emergency); feeling worse or having new suicidal thoughts in the first month needs immediate medical review; and DO NOT STOP ABRUPTLY — even missing one or two doses can trigger withdrawal (dizziness, 'brain zaps', nausea, irritability) within 24–48 hours.",
    monitoring:
      "You'll have check-ins with your doctor at 2 weeks, 4 weeks, and 6 weeks to see how you're responding. They'll ask about your mood, side effects, sleep, and any new thoughts. You may be asked to fill in a short questionnaire (PHQ-9) so your progress can be tracked. If you're a woman who could become pregnant, you'll have a pregnancy test before starting and will need to use reliable contraception throughout treatment. Your weight will be checked periodically because paroxetine tends to cause weight gain. If you're over 65, your doctor may check your blood sodium in the first 2 weeks.",
    contraindications:
      "DO NOT take paroxetine if: (1) you have taken an MAOI antidepressant in the last 14 days (dangerous combination); (2) you are pregnant or could become pregnant without reliable contraception — paroxetine can harm the developing baby (especially in the first 3 months); (3) you take tamoxifen for breast cancer — paroxetine blocks tamoxifen from working properly; (4) you take pimozide or thioridazine. Tell your doctor about ALL other medicines you take — especially tramadol (pain), triptans (migraine), codeine, certain antibiotics like linezolid, cough syrups with dextromethorphan, or herbal products like St John's Wort.",
    interactions:
      "The most dangerous combinations are: (1) tamoxifen — NEVER combine (paroxetine stops tamoxifen working); (2) other medicines that affect serotonin — your doctor or pharmacist will check for these automatically; (3) MAOI antidepressants — wait 14 days between the two. Paroxetine also blocks a liver enzyme called CYP2D6, which affects many other medicines (some painkillers like codeine and tramadol, heart medicines like metoprolol, and other psychiatric medicines). Always tell your pharmacist you are on paroxetine before starting any new medicine, including over-the-counter products. Avoid alcohol — it can make you more drowsy and worsen mood symptoms.",
  },

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: [
    "Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Paxil/Paxil CR/Brisdelle labels, NICE CG91, APA Practice Guideline, ACOG Committee Opinion 753",
  ],
};
