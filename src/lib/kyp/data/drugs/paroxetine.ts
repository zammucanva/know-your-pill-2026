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

  /* ---- India-first extensions ---- */

  /* Indian clinical practice */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Paxil", manufacturer: "GSK", strengths: "10mg, 20mg, 30mg, 40mg", note: "Originator brand — among the most recognised paroxetine brands in India" },
      { name: "Pexep", manufacturer: "Sun Pharma", strengths: "10mg, 20mg, 30mg, 40mg; CR 12.5mg, 25mg" },
      { name: "Paxidep", manufacturer: "Intas", strengths: "10mg, 20mg, 30mg, 40mg; CR 12.5mg, 25mg" },
      { name: "Paroxet", manufacturer: "Cipla", strengths: "10mg, 20mg, 30mg, 40mg" },
    ],
    typicalDoses:
      "Depression: start 20mg OD, titrate by 10mg every 1-2 weeks to 20-50mg OD (morning OR night — sedating, many Indian psychiatrists give at night). OCD: 20-60mg OD. Panic/Social Anxiety/PTSD: start 10mg OD (lower start to avoid early activation), titrate to 20-50mg OD. GAD: 20-50mg OD. PMDD: 12.5-25mg CR (luteal or continuous). Vasomotor symptoms: 7.5mg CR (Brisdelle-equivalent — off-label in India). In Indian government hospitals, starting dose is often 10mg OD to minimise early side effects given limited follow-up capacity. Maximum: 50mg/day (60mg for OCD). Controlled-release (CR) formulation preferred when available — smoother profile, milder discontinuation.",
    prescribingScenarios: [
      "Generally NOT first-line SSRI in Indian primary care — sertraline and escitalopram are preferred. Paroxetine is reserved for specific niches.",
      "Used in Indian psychiatry OPDs for severe anxiety disorders where sedation is therapeutically useful (e.g., panic disorder with severe anticipatory anxiety, severe social anxiety).",
      "Niche use in breast-cancer survivors with vasomotor symptoms (hot flushes) who cannot take HRT — paroxetine 7.5mg CR. CAUTION: only if not on tamoxifen.",
      "Occasionally used off-label for premature ejaculation in Indian urology/psychiatry practice — 20mg OD or 4-6 hours before intercourse.",
      "AVOIDED in pregnant women in Indian practice (Category D) — switch to sertraline if pregnancy is planned or detected.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
      note: "Available across India but less commonly stocked than sertraline/escitalopram in government hospitals under DMHP. Branded paroxetine (Paxil, Pexep, Paxidep, Paroxet) is widely available in private pharmacies. Generic paroxetine is occasionally stocked in Jan Aushadhi Kendras but availability is variable — sertraline is preferred for cost-sensitive settings.",
    },
    costCategory: "moderate",
    costNote: "Paroxetine is moderately priced in India. Branded versions (Paxil, Pexep, Paxidep, Paroxet) cost approximately ₹5-12 per 20mg tablet — more expensive than generic sertraline (₹2-5/tablet). Controlled-release (CR) formulations cost ₹8-15 per tablet. Cost varies by manufacturer and region. Less commonly available at Jan Aushadhi Kendras compared to sertraline. 🟡 Moderate cost.",
    monitoring:
      "In Indian government hospitals, monitoring is primarily clinical (symptom-based) due to resource constraints. PHQ-9 is used in tertiary centres and DMHP clinics. CRITICAL additional monitoring for paroxetine vs other SSRIs: (1) pregnancy test before initiation in women of reproductive age + reliable contraception throughout; (2) serum sodium in elderly in first 2 weeks (highest SIADH risk among SSRIs); (3) weight at baseline, 4 weeks, 12 weeks (most weight gain of any SSRI); (4) blood pressure if on tamoxifen history or combination with NSAIDs/anticoagulants (bleeding); (5) liver function if hepatic impairment. Follow-up schedule: 2 weeks (tolerability), 4 weeks (early response), 6 weeks (dose escalation decision), 12 weeks (full response assessment). In private practice, monitoring aligns more closely with international guidelines.",
    patientCounselling: [
      "Take at NIGHT with food — paroxetine is the most sedating SSRI and taking it at night helps with sleep and reduces daytime drowsiness.",
      "It may take 4-6 weeks to feel the full benefit — don't stop early just because you don't feel better yet.",
      "DO NOT STOP ABRUPTLY — paroxetine has the WORST discontinuation syndrome of any SSRI because of its short half-life. Even missing 1-2 doses can trigger withdrawal (dizziness, 'brain zaps', nausea, irritability) within 24-48 hours. Your doctor will taper the dose slowly over weeks to months.",
      "If you are a woman who could become pregnant, use reliable contraception throughout treatment. Paroxetine can harm a developing baby (especially in the first 3 months — risk of heart defects). Tell your doctor immediately if you become pregnant — do NOT stop on your own (the doctor will switch you to a safer medicine).",
      "NEVER combine with tamoxifen (breast cancer medicine) — paroxetine stops tamoxifen from working. Tell every doctor you see that you are on paroxetine.",
      "Avoid alcohol — it can worsen your mood symptoms and increase drowsiness (paroxetine is already sedating).",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month, contact your doctor immediately or call Tele-MANAS at 14416.",
      "Common side effects in the first 1-2 weeks (nausea, sleepiness, dry mouth, headache) usually settle. Compared to other SSRIs, paroxetine is MORE likely to cause weight gain, sleepiness, dry mouth, constipation, and sexual side effects (up to half of patients).",
      "Sexual side effects (reduced interest, difficulty reaching orgasm) are very common with paroxetine — sometimes the highest among SSRIs. If they bother you, your doctor can help. Don't stop the medicine without discussing alternatives.",
      "Follow-up visits at 2 weeks, 4 weeks, and 6 weeks are important — please attend even if you're feeling better. Do NOT stop on your own between visits.",
    ],
  },

  /* NMC CBME competency mapping */
  cbmeMapping: {
    subject: "Pharmacology",
    mbbsYear: "Second Professional",
    topic: "Drugs acting on Central Nervous System — Antidepressants (SSRIs)",
    competencyCodes: ["PH7.3", "PH7.4", "PY3.2"],
    competencyDescriptions: [
      "PH7.3: Describe the mechanism of action, pharmacological actions, adverse effects, contraindications, and therapeutic uses of antidepressant drugs with emphasis on SSRIs — including paroxetine's unique muscarinic M1 antagonism, CYP2D6 inhibition, and pregnancy Category D status.",
      "PH7.4: Explain the rationale for drug selection, dose individualisation, and monitoring of antidepressant therapy in different clinical scenarios — including why paroxetine is generally avoided as first-line and reserved for specific niches (vasomotor symptoms, premature ejaculation).",
      "PY3.2 (Psychiatry, Final Professional): Describe the pharmacological management of mood disorders, including SSRI selection (avoiding paroxetine in pregnancy, with tamoxifen, in elderly with cognitive impairment), augmentation strategies, and discontinuation syndrome management.",
    ],
    integrationSubjects: ["Psychiatry", "General Medicine", "Obstetrics & Gynaecology", "Oncology"],
  },

  /* Exam Lens — structured by Indian examination */
  examLens: {
    mbbs: {
      viva: [
        "What is the mechanism of action of paroxetine? (SERT blockade → ↑ synaptic 5-HT → 5-HT1A autoreceptor desensitisation over 1-2 weeks → ↑ serotonergic throughput → downstream BDNF/neurogenesis over 4-6 weeks. UNIQUE: paroxetine is also a muscarinic M1 antagonist — explains anticholinergic & sedating profile.)",
        "Why is paroxetine generally avoided as first-line SSRI? (Shortest half-life = worst discontinuation syndrome; Category D in pregnancy; strongest CYP2D6 inhibitor = tamoxifen interaction; most sedating/weight gain/anticholinergic among SSRIs.)",
        "Which SSRI is preferred in pregnancy, and which is CONTRAINDICATED? (Preferred: sertraline. CONTRAINDICATED: paroxetine — Category D, 1st-trimester cardiac septal defects.)",
        "What is the paroxetine-tamoxifen interaction and why is it an absolute contraindication? (Paroxetine is a strong CYP2D6 inhibitor. Tamoxifen needs CYP2D6 to be converted to endoxifen (its active metabolite). Paroxetine blocks this conversion → tamoxifen becomes ineffective → breast cancer recurrence.)",
        "What is the FDA pregnancy category of paroxetine? (Category D — positive evidence of human fetal risk. 1st-trimester cardiac septal defects (ASD, VSD). Avoid; if patient becomes pregnant, switch to sertraline.)",
        "Which SSRI has the shortest half-life and worst discontinuation syndrome? (Paroxetine — half-life ~21 hours, no active metabolite. Discontinuation syndrome is worst of any SSRI. Mnemonic: FINISH — Flu-like, Insomnia, Nausea, Imbalance, Sensory/brain zaps, Hyperarousal.)",
      ],
      practical: [
        "Counsel a patient starting paroxetine for panic disorder — address onset delay, night dosing for sedation, discontinuation syndrome, pregnancy/contraception, and follow-up.",
        "Write a prescription for paroxetine for a 30-year-old with panic disorder (dose: 10mg OD at night with food, titrate to 20-40mg). Include a contraception note if female of reproductive age.",
        "Identify the contraindications of paroxetine from a given clinical scenario (e.g., patient on tamoxifen for breast cancer, or pregnant patient, or patient on MAOI).",
        "Explain the monitoring schedule for a patient on paroxetine (2/4/6/12 weeks, PHQ-9, pregnancy test, weight, sodium in elderly, suicidality <25).",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics, adverse effects, and therapeutic uses of SSRIs with special reference to paroxetine. Discuss why paroxetine is generally avoided as first-line SSRI — covering pregnancy Category D, CYP2D6 inhibition (tamoxifen interaction), short half-life (discontinuation), anticholinergic/weight-gain profile, and its niche use for vasomotor symptoms and premature ejaculation.",
        "A 32-year-old woman with panic disorder is on paroxetine 20mg OD. She is now 6 weeks pregnant and wants to know if she can continue. Discuss the pharmacological management — addressing the risks of paroxetine in pregnancy (Category D, cardiac defects), the risks of untreated maternal illness, switching strategies (paroxetine → sertraline), and the role of psychological therapies. Also address how to manage the discontinuation syndrome during the switch.",
      ],
    },
    neetPg: {
      highYield: [
        "Paroxetine = SSRI with SHORTEST half-life (~21h) and WORST discontinuation syndrome. Never stop abruptly — taper over weeks to months.",
        "Paroxetine = Pregnancy Category D — 1st-trimester cardiac septal defects (ASD, VSD). AVOID; switch to sertraline if pregnancy detected.",
        "Paroxetine = STRONGEST CYP2D6 inhibitor among SSRIs. ABSOLUTE CONTRAINDICATION with tamoxifen (blocks conversion to endoxifen → breast cancer recurrence).",
        "Paroxetine = ONLY non-hormonal FDA-approved drug for vasomotor symptoms of menopause (Brisdelle 7.5mg). Niche use in breast-cancer survivors who can't take HRT — but ONLY if not on tamoxifen.",
        "Paroxetine = MOST sedating, MOST weight gain, MOST anticholinergic (muscarinic M1 antagonist — UNIQUE among SSRIs) of any SSRI. Avoid in elderly with cognitive impairment.",
        "Mechanism: SERT blockade (hours) → 5-HT1A autoreceptor desensitisation (1-2 weeks) → BDNF/neurogenesis (4-6 weeks). PLUS unique muscarinic M1 antagonism.",
        "Half-life ~21h, no active metabolite → worst discontinuation. Mnemonic: FINISH — Flu-like, Insomnia, Nausea, Imbalance, Sensory (brain zaps), Hyperarousal.",
        "Discontinuation ranking (worst to mildest): Paroxetine > Venlafaxine > Sertraline > Escitalopram > Fluoxetine. Fluoxetine can be substituted at end of paroxetine taper to smooth discontinuation.",
        "FDA indications: MDD, OCD, Panic Disorder, Social Anxiety Disorder, GAD, PTSD, PMDD, Vasomotor Symptoms (8 total — most of any SSRI).",
        "Off-label use: premature ejaculation (20mg OD or PRN before intercourse). Mechanism: sexual side effect exploited therapeutically.",
      ],
      pyqConcepts: [
        "NEET PG 2019: Which SSRI has the shortest half-life and worst discontinuation syndrome? (Answer: Paroxetine — 21h. Fluoxetine is longest at 1-4 days.)",
        "NEET PG 2020: A patient on SSRI presents with agitation, clonus, hyperreflexia, and fever. Diagnosis? (Answer: Serotonin syndrome. Treat with cyproheptadine.)",
        "NEET PG 2021: A breast-cancer survivor on tamoxifen develops depression. Which SSRI is CONTRAINDICATED? (Answer: Paroxetine — strong CYP2D6 inhibitor, blocks tamoxifen → endoxifen conversion. Use sertraline or venlafaxine instead.)",
        "NEET PG 2022: A pregnant woman is on paroxetine for depression. What is the fetal risk? (Answer: Category D — 1st-trimester cardiac septal defects (ASD, VSD). Switch to sertraline.)",
        "INICET 2021: Which SSRI is most likely to cause SIADH in an elderly female? (Answer: All SSRIs can, but paroxetine and fluoxetine have the highest risk — paroxetine due to anticholinergic + serotonergic effects.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 32-year-old woman with panic disorder on paroxetine 20mg OD calls you — she just found out she is 6 weeks pregnant. What is your management? (Answer: Do NOT stop abruptly (discontinuation syndrome). Switch to sertraline 50mg OD over a cross-taper of 1-2 weeks. Paroxetine is Category D — 1st-trimester cardiac septal defects. Sertraline is the SSRI of choice in pregnancy. Counsel about fetal cardiac ultrasound at 18-20 weeks. Involve obstetrician.)",
        "A 55-year-old breast-cancer survivor on tamoxifen for 2 years presents with moderate depression. She was started on paroxetine 20mg by her GP 3 weeks ago. What is your action? (Answer: STOP paroxetine immediately — absolute contraindication. Paroxetine is a strong CYP2D6 inhibitor, blocks tamoxifen → endoxifen conversion, increasing breast cancer recurrence risk. Switch to sertraline (minimal CYP2D6 effect) or venlafaxine (preferred in breast cancer). Counsel GP about the interaction. Reassess depression severity.)",
        "A 28-year-old man on paroxetine 40mg OD for 6 months feels better and stops the medication abruptly. Three days later, he presents with dizziness, 'electric shocks' in his head, nausea, irritability, and insomnia. What is the diagnosis and management? (Answer: SSRI discontinuation syndrome. Worst with paroxetine due to short half-life (21h) and no active metabolite. Management: restart paroxetine at previous dose, then taper slowly over 4-8 weeks. Alternatively, substitute fluoxetine 20mg for the last 2 weeks of taper (long half-life self-tapers). Counsel: never stop paroxetine abruptly.)",
        "A 68-year-old man with mild cognitive impairment and depression is being considered for an SSRI. The intern suggests paroxetine. Why do you overrule this? (Answer: Paroxetine is the WORST SSRI choice in elderly — anticholinergic (muscarinic M1 antagonist) worsens cognition and urinary hesitancy; highest SIADH risk; highest fall risk due to sedation; short half-life causes discontinuation with missed doses (common in elderly). Use sertraline or escitalopram instead — minimal CYP interactions, low anticholinergic, low weight gain.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Paroxetine mechanism: SERT blockade + muscarinic M1 antagonism (UNIQUE among SSRIs).",
        "Pregnancy Category D — 1st-trimester cardiac septal defects (ASD, VSD). AVOID in pregnancy.",
        "Shortest half-life of any SSRI (~21h) → WORST discontinuation syndrome. Never stop abruptly.",
        "Strongest CYP2D6 inhibitor among SSRIs → ABSOLUTE CONTRAINDICATION with tamoxifen.",
        "Most sedating, most weight gain, most anticholinergic of any SSRI. Avoid in elderly with cognitive impairment.",
        "Only non-hormonal FDA-approved drug for vasomotor symptoms (hot flushes) — Brisdelle 7.5mg.",
        "Onset of action: 4-6 weeks (same as all SSRIs).",
        "Most common side effect: sexual dysfunction (40-50% — highest among SSRIs, exploited for premature ejaculation).",
        "Black box warning: suicidal thoughts in patients under 25.",
        "Serotonin syndrome: clonus + hyperreflexia + fever + agitation. Treatment: cyproheptadine.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Paroxetine is the most potent SERT binder in vitro among SSRIs — but this does NOT translate to superior clinical efficacy. The Cipriani 2018 Lancet network meta-analysis found paroxetine effective but with higher dropout for side effects than sertraline/escitalopram. It is generally reserved for specific niches (vasomotor symptoms, premature ejaculation) or when sedation is therapeutically useful.",
        "Pregnancy: paroxetine is the ONLY SSRI with FDA Category D. Two large studies (GlaxoSmithKline 2005, BMJ 2015) confirmed a 1.5-2× increased risk of 1st-trimester cardiac septal defects (ASD, VSD). Absolute risk is small (~1% vs 0.7% baseline), but paroxetine is avoided in pregnancy. If a patient on paroxetine becomes pregnant: do NOT stop abruptly (discontinuation); cross-taper to sertraline over 1-2 weeks; schedule fetal echocardiogram at 18-20 weeks.",
        "Tamoxifen interaction: paroxetine is a strong CYP2D6 inhibitor. Tamoxifen is a prodrug that requires CYP2D6 to be converted to endoxifen (its active metabolite). Co-prescription reduces endoxifen levels by 50-75%, effectively rendering tamoxifen ineffective. This is an ABSOLUTE CONTRAINDICATION. Among antidepressants: AVOID paroxetine, fluoxetine, bupropion (strong CYP2D6 inhibitors). PREFERRED in tamoxifen patients: sertraline (mild), escitalopram (minimal), venlafaxine (minimal), mirtazapine (none).",
        "Discontinuation syndrome: paroxetine has the WORST discontinuation of any SSRI due to (1) shortest half-life (21h), (2) no active metabolite. Symptoms start within 24-48h of missed doses. Management: restart paroxetine at previous dose, then taper over 4-8 weeks (slower than other SSRIs). For the last 2 weeks of taper, substitute fluoxetine 20mg (long half-life, self-tapers). Patient counselling is critical — many patients experience discontinuation even with slow tapers.",
        "Pharmacokinetics: paroxetine is metabolised by CYP2D6 (and is itself a strong CYP2D6 inhibitor — autoinhibition causes non-linear kinetics). Half-life ~21h. Poor CYP2D6 metabolisers (5-10% of Indians) have 2-10× higher levels — start at half the dose. No active metabolite (unlike fluoxetine → norfluoxetine).",
        "Off-label uses: (1) Premature ejaculation — 20mg OD or 4-6h before intercourse; exploits the high sexual-dysfunction side effect. (2) Vasomotor symptoms of menopause — Brisdelle 7.5mg CR is the only non-hormonal FDA-approved treatment. Mechanism unclear but may involve serotonergic modulation of the hypothalamic thermoregulatory centre. (3) Refractory anger/irritability in personality disorders.",
        "Bipolar depression: paroxetine (and any SSRI) can trigger a manic switch. Always screen for bipolar disorder (MDQ questionnaire) before initiating. If bipolar confirmed, use mood stabiliser first; SSRI only if mood stabiliser alone is insufficient. Among SSRIs, paroxetine and fluoxetine have similar manic-switch risk; bupropion may have lower risk.",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "First-line SSRI for depression",
      internationalSource: "NICE CG91 / APA Practice Guideline",
      internationalRecommendation: "SSRIs are first-line for moderate-severe depression. Paroxetine is effective but NOT preferred as first-line due to discontinuation syndrome, weight gain, sedation, and drug interactions. Sertraline or escitalopram are usually chosen first.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS guidelines also recommend SSRIs as first-line for depression. Paroxetine is generally NOT the first choice — sertraline and escitalopram are preferred in Indian practice. Paroxetine is reserved for specific niches (severe anxiety with sedation desired, vasomotor symptoms, premature ejaculation).",
    },
    {
      topic: "Use in pregnancy (CRITICAL)",
      internationalSource: "FDA / APA / ACOG",
      internationalRecommendation: "Paroxetine is the ONLY SSRI with FDA Category D — positive evidence of human fetal risk. 1st-trimester cardiac septal defects (ASD, VSD). AVOID in pregnancy. If a patient on paroxetine becomes pregnant, switch to sertraline. Third-trimester: all SSRIs carry neonatal adaptation syndrome risk.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs with international guidelines — AVOID paroxetine in pregnancy, especially in the 1st trimester. In Indian practice, all women of reproductive age on paroxetine should use reliable contraception. If pregnancy is detected: do NOT stop abruptly (discontinuation); cross-taper to sertraline over 1-2 weeks; involve obstetrician; schedule fetal echocardiogram at 18-20 weeks.",
    },
    {
      topic: "Tamoxifen co-prescription (CRITICAL)",
      internationalSource: "FDA / ASCO Clinical Practice Guideline",
      internationalRecommendation: "Paroxetine is ABSOLUTELY CONTRAINDICATED in patients on tamoxifen. Paroxetine is a strong CYP2D6 inhibitor; tamoxifen requires CYP2D6 to be converted to endoxifen (its active metabolite). Co-prescription increases breast cancer recurrence risk. Use sertraline, escitalopram, venlafaxine, or mirtazapine instead.",
      indianSource: "Indian Psychiatric Society (IPS) / Indian oncology practice",
      indianRecommendation: "IPS concurs — paroxetine is contraindicated with tamoxifen. In Indian oncology-psychiatry liaison practice, this interaction is increasingly recognised. Use venlafaxine (preferred — minimal CYP2D6 effect and also treats hot flushes) or sertraline. Educate the patient to inform every doctor of her tamoxifen status before any antidepressant is prescribed.",
    },
    {
      topic: "Monitoring during treatment",
      internationalSource: "NICE / APA / FDA",
      internationalRecommendation: "Weekly contact in first month, then every 2-4 weeks until stable. PHQ-9 at baseline, 4, 8, 12 weeks. For paroxetine specifically: pregnancy test before initiation + reliable contraception; weight at baseline/4/12 weeks; serum sodium in elderly in first 2 weeks; blood pressure if co-prescribed NSAIDs/anticoagulants.",
      indianSource: null,
      indianRecommendation: "No dedicated IPS guideline on paroxetine monitoring. In Indian government hospitals, monitoring is primarily clinical due to resource constraints. PHQ-9 is used in tertiary centres and DMHP clinics. The pregnancy test and contraception counselling are CRITICAL in Indian practice given the high rate of unplanned pregnancies. Family involvement in monitoring is emphasised given the joint family system.",
    },
    {
      topic: "Use in lactation",
      internationalSource: "AAP / LactMed",
      internationalRecommendation: "Paroxetine is actually considered RELATIVELY SAFE in breastfeeding — milk/plasma ratio is low (~0.6-1.0), infant serum levels usually undetectable, no adverse effects on infant development demonstrated. However, in Indian practice, sertraline is still preferred due to overall safety profile.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS notes that while paroxetine is relatively safe in lactation (low infant serum levels), sertraline remains the SSRI of choice in breastfeeding mothers in Indian practice. The decision is individualised — paroxetine is acceptable if the mother is already stable on it and breastfeeding is strongly desired. Counsel mother to watch for infant irritability, sedation, or feeding issues.",
    },
  ],

  /* Indian reference sources */
  indianReferences: [
    {
      source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition",
      type: "textbook",
      section: "Chapter 33 — Antidepressant Drugs (Paroxetine subsection)",
    },
    {
      source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression",
      type: "guideline",
      section: "Section on pharmacotherapy — SSRIs (with paroxetine-specific cautions on pregnancy and tamoxifen)",
    },
    {
      source: "NMC CBME Curriculum — Pharmacology (Second Professional)",
      type: "curriculum",
      section: "Topic: Drugs acting on CNS — Antidepressants (PH7.3, PH7.4)",
    },
    {
      source: "NMC CBME Curriculum — Psychiatry (Final Professional)",
      type: "curriculum",
      section: "Topic: Psychopharmacology — Mood disorders (PY3.2)",
    },
    {
      source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)",
      type: "regulatory",
      section: "Essential medicines for mental health — SSRIs (paroxetine less commonly stocked than sertraline)",
    },
    {
      source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416",
      type: "regulatory",
      section: "Mental health support resource for patients on antidepressants",
      url: "tel:14416",
    },
    {
      source: "CDSCO — Central Drugs Standard Control Organisation",
      type: "regulatory",
      section: "Paroxetine — Schedule H prescription status; pregnancy Category D labelling requirements",
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
      { source: "NICE CG91", recommendation: "SSRIs are first-line for moderate-severe depression. Paroxetine is effective but not preferred first-line due to discontinuation syndrome, weight gain, sedation, and drug interactions." },
      { source: "APA Practice Guideline", recommendation: "SSRI first-line for MDD. Paroxetine generally avoided when drug interactions are a concern (strong CYP2D6 inhibitor) or in pregnancy (Category D)." },
      { source: "FDA", recommendation: "Approved for 8 indications: MDD, OCD, Panic, Social Anxiety, GAD, PTSD, PMDD, Vasomotor Symptoms. Pregnancy Category D. Black box warning for suicidality <25." },
      { source: "ACOG Committee Opinion 753", recommendation: "Paroxetine should be avoided in pregnancy due to 1st-trimester cardiac defect risk. Switch to sertraline if pregnancy is planned or detected." },
      { source: "ASCO Clinical Practice Guideline", recommendation: "Paroxetine is contraindicated in patients on tamoxifen — strong CYP2D6 inhibition reduces endoxifen formation. Use venlafaxine, sertraline, or escitalopram instead." },
      { source: "WHO mhGAP", recommendation: "SSRIs recommended as first-line antidepressants in the Mental Health Gap Action Programme — paroxetine less preferred due to discontinuation and interaction profile." },
      { source: "Cipriani A et al. Lancet 2018", recommendation: "Network meta-analysis of 21 antidepressants — paroxetine is effective but has higher dropout for side effects than sertraline/escitalopram." },
      { source: "Maudsley Prescribing Guidelines, 14th edition", recommendation: "Paroxetine has the worst discontinuation syndrome of any SSRI; avoid in elderly (anticholinergic); absolute contraindication with tamoxifen." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS guidelines recommend SSRIs as first-line for depression. Paroxetine is generally NOT the first choice — sertraline and escitalopram are preferred in Indian practice." },
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS concurs with international guidelines — AVOID paroxetine in pregnancy (Category D, 1st-trimester cardiac defects) and with tamoxifen (CYP2D6 inhibition)." },
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS recommends that all women of reproductive age on paroxetine use reliable contraception, and that patients on paroxetine are educated about the discontinuation syndrome (worst of any SSRI)." },
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", recommendation: "Standard Indian pharmacology textbook — describes paroxetine's unique muscarinic M1 antagonism, strong CYP2D6 inhibition, and Category D pregnancy status." },
      { source: "NMC CBME Curriculum", recommendation: "Paroxetine included in PH7.3/PH7.4 competencies with emphasis on its unique adverse-effect profile and contraindications." },
      { source: "Indian oncology practice", recommendation: "Paroxetine-tamoxifen interaction increasingly recognised in Indian oncology-psychiatry liaison practice — venlafaxine preferred in breast-cancer survivors." },
      { source: null, recommendation: "No dedicated IPS guideline on paroxetine monitoring frequency. Current section reflects accepted clinical practice and internationally accepted evidence." },
    ],
    indianClinicalPractice:
      "In Indian practice, paroxetine is NOT a first-line SSRI — sertraline and escitalopram are preferred due to better tolerability, lower cost, and fewer drug interactions. Paroxetine is reserved for specific niches: (1) severe anxiety with desired sedation, (2) vasomotor symptoms in breast-cancer survivors (NOT on tamoxifen), (3) premature ejaculation, (4) refractory OCD. Indian brands include Paxil (GSK), Pexep (Sun Pharma), Paxidep (Intas), and Paroxet (Cipla). Cost is moderate (₹5-12 per 20mg tablet — more expensive than generic sertraline). Starting dose in Indian government hospitals is often 10mg OD (lower than Western guidelines) to minimise early side effects. CRITICAL: pregnancy test and contraception in women of reproductive age; AVOID in tamoxifen patients; taper very slowly (over weeks-months, not weeks). Family involvement in monitoring is emphasised given the joint family system.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "NOT commonly used as first-line SSRI in government hospital psychiatry OPDs. Available through DMHP but less commonly stocked than sertraline. When used, starting dose 10mg OD. Monitoring is primarily clinical (symptom-based) due to resource constraints. Reserved for specific niches (severe anxiety, vasomotor symptoms, premature ejaculation).",
    privateHospitals:
      "Used as second-line SSRI in private psychiatry practice. Preferred in patients where sedation is therapeutically useful (severe panic disorder with anticipatory anxiety, severe social anxiety). Starting dose 10-20mg OD at night. PHQ-9 monitoring at 2/4/6/12 weeks. CRITICAL: pregnancy test in women of reproductive age + reliable contraception. Avoid in elderly with cognitive impairment (anticholinergic). Patient counselling is more detailed — especially about discontinuation syndrome and pregnancy.",
    medicalColleges:
      "Teaching drug for SSRI pharmacology — emphasised as the SSRI with the most 'caveats' (Category D, tamoxifen interaction, worst discontinuation, anticholinergic). Used in pharmacology practicals (prescription writing, patient counselling, recognising discontinuation syndrome). Examined in second professional MBBS (pharmacology) and final professional (psychiatry). Commonly featured in NEET PG and INICET questions — high-yield because of its distinctive contraindications.",
    primaryCare:
      "Generally NOT initiated in Indian primary care due to interaction profile and pregnancy/tamoxifen risks. GPs are educated to prefer sertraline or escitalopram. If a primary-care patient is on paroxetine (e.g., started by psychiatrist), the GP should know: (1) never stop abruptly, (2) contraception in women of reproductive age, (3) never combine with tamoxifen, (4) watch for discontinuation symptoms if doses are missed.",
    psychiatryOPD:
      "Reserved SSRI in psychiatry OPD for specific niches: (1) severe anxiety disorders where sedation is therapeutic, (2) vasomotor symptoms in breast-cancer survivors (NOT on tamoxifen) — 7.5mg CR, (3) premature ejaculation — 20mg OD or PRN, (4) refractory OCD at higher doses (40-60mg). When used, careful patient selection and counselling are critical. Often combined with CBT for anxiety disorders. Dose escalation to 50-60mg for OCD. Taper over weeks-months (not weeks) when discontinuing.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ questionnaire) — SSRIs can trigger manic switch.",
      "Assess suicidal ideation — if present, involve family for monitoring and provide Tele-MANAS (14416) number.",
      "Check for MAOI use in last 14 days — absolute contraindication.",
      "Review concurrent medications — CRITICAL: tamoxifen (absolute contraindication), tramadol, triptans, NSAIDs, warfarin, codeine (paroxetine blocks CYP2D6 → codeine ineffective), TCAs, antiarrhythmics, St John's Wort.",
      "In women of reproductive age: pregnancy test + reliable contraception counselling. Paroxetine is Category D — AVOID if pregnancy is possible.",
      "In elderly: check baseline serum sodium (SIADH risk — highest with paroxetine among SSRIs), cognitive assessment (avoid if cognitive impairment due to anticholinergic effect), fall risk assessment (sedation).",
      "Baseline PHQ-9 score for response monitoring. Baseline weight and BMI (paroxetine has most weight gain of any SSRI).",
      "Counsel about 4-6 week onset AND the worst-in-class discontinuation syndrome — set expectation that stopping will require a slow taper over weeks-months.",
    ],
    duringTreatment: [
      "Week 1-2: assess tolerability (sedation, dry mouth, nausea, sexual dysfunction) and suicidality (especially <25 years).",
      "Week 2-4: review early response — sleep, appetite, energy often improve before mood (sedation can be therapeutic for anxiety).",
      "Week 4-6: assess response with PHQ-9. If <30% reduction, increase dose by 10mg.",
      "Week 6-12: full response assessment. If <50% reduction at 12 weeks, consider augmentation (bupropion XL — but also CYP2D6 inhibitor, caution; or mirtazapine) or switch to sertraline.",
      "Monitor for sexual dysfunction — ask directly; paroxetine has the highest rate among SSRIs (40-50%).",
      "Watch for hyponatraemia in elderly (confusion, headache, seizures) — paroxetine has highest SIADH risk.",
      "If female of reproductive age: confirm contraception at every visit. If pregnancy is suspected, switch to sertraline immediately (cross-taper over 1-2 weeks).",
    ],
    followUp: [
      "First follow-up at 2 weeks (tolerability + suicidality + pregnancy check + contraception).",
      "Second follow-up at 4 weeks (early response + weight check).",
      "Third follow-up at 6 weeks (dose escalation decision + side-effect review).",
      "Fourth follow-up at 12 weeks (full response assessment).",
      "If remission achieved (PHQ-9 <5): continue for 6-12 months for first episode, longer for recurrent. Plan discontinuation well in advance — taper will be SLOW (over 4-8 weeks minimum, sometimes months).",
      "Before discontinuation: plan a SLOW taper (paroxetine has worst discontinuation syndrome of any SSRI). Reduce by 10mg every 1-2 weeks. For the last 2 weeks, consider substituting fluoxetine 20mg (long half-life, self-tapers).",
      "In government hospitals: follow-up may be every 4-8 weeks due to travel barriers — counsel family to watch for red flags (suicidality, missed doses leading to discontinuation, pregnancy).",
    ],
    whenToRefer: [
      "Refer to psychiatrist if no response to 2 adequate SSRI trials (12 weeks each) — paroxetine is rarely the first SSRI tried.",
      "Refer urgently if suicidal ideation emerges or worsens.",
      "Refer if bipolar disorder is suspected (manic switch risk).",
      "Refer if serotonin syndrome develops (emergency — call 112).",
      "Refer to obstetrician IMMEDIATELY if patient becomes pregnant — switch to sertraline via cross-taper, schedule fetal echocardiogram at 18-20 weeks.",
      "Refer to oncologist if breast-cancer patient is inadvertently co-prescribed paroxetine with tamoxifen — STOP paroxetine, switch to venlafaxine or sertraline.",
      "Refer for CBT — combined SSRI + CBT produces better outcomes than either alone, especially for anxiety disorders (the main indication for paroxetine).",
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
    { exam: "NEET PG", year: 2019, concept: "SSRI with shortest half-life / worst discontinuation", topic: "SSRI pharmacokinetics" },
    { exam: "NEET PG", year: 2020, concept: "Serotonin syndrome diagnosis and management", topic: "Serotonergic toxicity" },
    { exam: "NEET PG", year: 2021, concept: "Paroxetine-tamoxifen absolute contraindication", topic: "Drug interactions in oncology" },
    { exam: "NEET PG", year: 2022, concept: "Paroxetine Category D in pregnancy — cardiac defects", topic: "Antidepressants in pregnancy" },
    { exam: "INICET", year: 2021, concept: "SSRI-induced hyponatraemia (SIADH) — highest with paroxetine", topic: "Antidepressant adverse effects" },
    { exam: "INICET", year: 2022, concept: "Antidepressant choice in breast-cancer survivor on tamoxifen", topic: "Psychiatry-oncology liaison" },
    { exam: "FMGE", year: 2022, concept: "Paroxetine mechanism: SERT blockade + muscarinic M1 antagonism", topic: "Antidepressant pharmacology" },
    { exam: "FMGE", year: 2021, concept: "Non-hormonal drug for vasomotor symptoms — paroxetine 7.5mg", topic: "Menopause management" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Government hospital setup",
      recommendation: "Sertraline or escitalopram preferred — paroxetine is NOT a first-line choice. Paroxetine is more expensive, has a worse discontinuation profile, and requires careful monitoring (pregnancy, tamoxifen). Reserved for specific psychiatric OPD indications.",
      alternative: "Sertraline (Jan Aushadhi available, ₹2-5/tablet) or escitalopram (low CYP interactions).",
    },
    {
      scenario: "Private psychiatry practice",
      recommendation: "Paroxetine used as second-line SSRI — preferred in severe anxiety disorders where sedation is therapeutically useful, in refractory OCD, or for vasomotor symptoms in breast-cancer survivors (NOT on tamoxifen). Starting dose 10-20mg at night.",
      alternative: "Sertraline or escitalopram as first-line. Venlafaxine for treatment-resistant depression or if SNRI profile desired.",
    },
    {
      scenario: "Pregnancy (CRITICAL)",
      recommendation: "Paroxetine is CONTRAINDICATED (Category D — 1st-trimester cardiac septal defects). If a patient on paroxetine becomes pregnant: do NOT stop abruptly (discontinuation); cross-taper to sertraline over 1-2 weeks. IPS concurs with international guidelines.",
      alternative: "Sertraline is the SSRI of choice in pregnancy. If sertraline unavailable, fluoxetine is acceptable. NEVER use paroxetine.",
    },
    {
      scenario: "Breast-cancer survivor on tamoxifen (CRITICAL)",
      recommendation: "Paroxetine is ABSOLUTELY CONTRAINDICATED — strong CYP2D6 inhibition blocks tamoxifen → endoxifen conversion. Use venlafaxine (preferred — also treats hot flushes), sertraline, or escitalopram instead.",
      alternative: "Venlafaxine is the antidepressant of choice in breast-cancer survivors — minimal CYP2D6 effect AND treats vasomotor symptoms. Sertraline or escitalopram if SSRI specifically needed.",
    },
    {
      scenario: "Elderly (≥65 years)",
      recommendation: "AVOID paroxetine in elderly, especially with cognitive impairment. Reasons: (1) anticholinergic (muscarinic M1 antagonist) worsens cognition and urinary hesitancy, (2) highest SIADH risk, (3) highest fall risk due to sedation, (4) short half-life causes discontinuation with missed doses (common in elderly).",
      alternative: "Sertraline (preferred — mild CYP2D6, low anticholinergic) or escitalopram (lowest CYP interactions, low anticholinergic). Start at 25mg (sertraline) or 5mg (escitalopram) — half the adult dose.",
    },
    {
      scenario: "Cost-sensitive setting",
      recommendation: "Paroxetine is moderately priced (₹5-12/tablet) — more expensive than generic sertraline. Less commonly available at Jan Aushadhi Kendras. NOT the best choice if cost is the primary concern.",
      alternative: "Generic sertraline from Jan Aushadhi Kendra (₹2-5/tablet) is the most affordable SSRI. If paroxetine is specifically needed, generic Paroxet (Cipla) is the most affordable brand.",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: false,
    note: "Not commonly available at Jan Aushadhi Kendras. Sertraline and escitalopram are the preferred SSRIs in Jan Aushadhi (low-cost, fewer contraindications). If paroxetine is specifically needed, branded generic versions (Paroxet by Cipla, Pexep by Sun Pharma) are the most affordable options in private pharmacies.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents (Paroxetine subsection)" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants (paroxetine: muscarinic M1 antagonist, strong CYP2D6 inhibitor)" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression (paroxetine discontinuation, tamoxifen interaction, elderly cautions)" },
      { source: "FDA Prescribing Information — PAXIL (paroxetine hydrochloride), PAXIL CR, and BRISDELLE 7.5 mg", section: "Highlights of Prescribing Information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/020936s062lbl.pdf" },
      { source: "NICE Clinical Guideline CG91 — Depression in adults", section: "Pharmacological treatment" },
      { source: "APA Practice Guideline for MDD, 3rd edition" },
      { source: "Cipriani A et al. Lancet 2018 — Comparative efficacy of 21 antidepressants", section: "Network meta-analysis (paroxetine effective but higher dropout for side effects)" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs (Paroxetine subsection)" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression", type: "guideline", section: "Section on pharmacotherapy — SSRIs (paroxetine-specific cautions)" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants (PH7.3, PH7.4)" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional)", type: "curriculum", section: "Topic: Psychopharmacology — Mood disorders (PY3.2)" },
      { source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)", type: "regulatory", section: "Essential medicines for mental health — paroxetine less commonly stocked than sertraline" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Mental health support resource", url: "tel:14416" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Paroxetine — Schedule H prescription status; pregnancy Category D labelling requirements" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose (or avoid) Paroxetine",
    startNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Patient presents with a condition paroxetine is approved for (depression, OCD, panic, social anxiety, GAD, PTSD, PMDD, vasomotor symptoms)",
        branches: [
          { label: "Pregnant or could become pregnant", next: "pregnancy" },
          { label: "On tamoxifen", next: "tamoxifen" },
          { label: "Elderly with cognitive impairment", next: "elderly" },
          { label: "None of the above — considering SSRI", next: "ssri-selection" },
        ],
      },
      {
        id: "pregnancy",
        question: "Pregnant or could become pregnant",
        recommendation: "DO NOT use paroxetine. Category D — 1st-trimester cardiac septal defects (ASD, VSD). Use sertraline instead (SSRI of choice in pregnancy). If patient is already on paroxetine and becomes pregnant, do NOT stop abruptly — cross-taper to sertraline over 1-2 weeks.",
        reasoning: "Paroxetine is the ONLY SSRI with FDA Category D. Two large studies confirmed 1.5-2× increased risk of 1st-trimester cardiac septal defects. IPS concurs with avoiding paroxetine in pregnancy.",
      },
      {
        id: "tamoxifen",
        question: "Patient is on tamoxifen for breast cancer",
        recommendation: "DO NOT use paroxetine. ABSOLUTE CONTRAINDICATION — paroxetine is a strong CYP2D6 inhibitor; tamoxifen requires CYP2D6 to be converted to endoxifen (active metabolite). Co-prescription increases breast cancer recurrence. Use venlafaxine (preferred — also treats hot flushes), sertraline, or escitalopram instead.",
        reasoning: "ASCO Clinical Practice Guideline explicitly contraindicates paroxetine with tamoxifen. Venlafaxine is the antidepressant of choice in breast-cancer survivors.",
      },
      {
        id: "elderly",
        question: "Elderly patient (≥65 years) with cognitive impairment or fall risk",
        recommendation: "DO NOT use paroxetine. Reasons: (1) anticholinergic (muscarinic M1 antagonist) worsens cognition and urinary hesitancy, (2) highest SIADH risk, (3) highest fall risk due to sedation, (4) short half-life causes discontinuation with missed doses. Use sertraline or escitalopram instead.",
        reasoning: "Paroxetine is on the Beers Criteria list of potentially inappropriate medications in elderly. Sertraline and escitalopram are preferred in elderly due to minimal anticholinergic and CYP interaction profiles.",
      },
      {
        id: "ssri-selection",
        question: "Considering an SSRI — when does paroxetine have a niche?",
        recommendation: "Paroxetine is NOT first-line. Consider paroxetine for: (1) severe anxiety where sedation is therapeutic, (2) vasomotor symptoms (hot flushes) in breast-cancer survivors NOT on tamoxifen — 7.5mg CR (Brisdelle), (3) premature ejaculation — 20mg OD or PRN, (4) refractory OCD at higher doses. Otherwise, sertraline or escitalopram preferred.",
        reasoning: "Cipriani 2018 Lancet meta-analysis: paroxetine effective but with higher dropout for side effects than sertraline/escitalopram. Paroxetine is reserved for specific niches.",
        branches: [
          { label: "Niche use selected — proceed", next: "start-paroxetine" },
          { label: "No niche — use another SSRI", next: "avoid" },
        ],
      },
      {
        id: "start-paroxetine",
        question: "Starting paroxetine",
        recommendation: "Start 10mg OD at night (with food) for depression/anxiety, 20mg OD for OCD. Titrate by 10mg every 1-2 weeks. Maximum 50mg/day (60mg for OCD). Counsel: NEVER stop abruptly, use reliable contraception (if female of reproductive age), avoid tamoxifen.",
        reasoning: "Lower starting dose than Western guidelines to minimise early side effects (sedation, nausea). Night dosing exploits sedation for sleep benefit. CR formulation preferred when available — smoother profile, milder discontinuation.",
        branches: [
          { label: "Need to discontinue later", next: "discontinuation" },
        ],
      },
      {
        id: "discontinuation",
        question: "Discontinuing paroxetine",
        recommendation: "Plan a SLOW taper — reduce by 10mg every 1-2 weeks (over 4-8 weeks minimum, sometimes months). For the last 2 weeks, consider substituting fluoxetine 20mg (long half-life, self-tapers). Counsel patient about discontinuation symptoms (FINISH — Flu-like, Insomnia, Nausea, Imbalance, Sensory/brain zaps, Hyperarousal) — even with slow tapers, some patients experience them.",
        reasoning: "Paroxetine has the WORST discontinuation syndrome of any SSRI — short half-life (21h) + no active metabolite. Symptoms can start within 24-48h of missed doses. Fluoxetine substitution is a recognised strategy to smooth discontinuation.",
      },
      {
        id: "avoid",
        question: "When NOT to choose Paroxetine",
        recommendation: "Avoid: pregnancy (Category D), tamoxifen use, elderly with cognitive impairment, MAOI within 14 days, pimozide/thioridazine, known CYP2D6 poor metaboliser on critical CYP2D6 substrate, eating disorders (weight gain), patients likely to miss doses (discontinuation risk).",
        reasoning: "Paroxetine has more contraindications and cautions than any other SSRI. The cumulative risk-benefit profile favours sertraline or escitalopram as first-line in most clinical scenarios.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian OPD initiation for severe panic disorder with anticipatory anxiety in a non-pregnant adult female on reliable contraception",
    lines: [
      "Rx",
      "Tab Paroxetine 10 mg",
      "1 tab OD at night after food × 7 days",
      "",
      "Then increase to:",
      "Tab Paroxetine 20 mg",
      "1 tab OD at night after food",
      "",
      "Advice: Take at night with food. DO NOT STOP ABRUPTLY — paroxetine has the worst discontinuation syndrome of any SSRI.",
      "Use reliable contraception throughout treatment. Avoid alcohol. Avoid tamoxifen.",
      "Report if feeling worse or new suicidal thoughts. Call Tele-MANAS at 14416 if in crisis.",
      "",
      "Follow-up: 2 weeks, 4 weeks, 6 weeks, 12 weeks",
    ],
    followUp: [
      "Review after 2 weeks — tolerability (sedation, dry mouth, sexual dysfunction), suicidality, pregnancy check, contraception adherence",
      "Review after 4 weeks — early response (sleep, anxiety levels), weight check",
      "Review after 6 weeks — PHQ-9; if <30% reduction, increase to 30mg",
      "Review after 12 weeks — full response assessment; if <50% reduction, consider augmentation or switch to sertraline",
      "If remission (PHQ-9 <5): continue 6-12 months, then plan a SLOW taper (reduce by 10mg every 1-2 weeks over 4-8 weeks minimum)",
      "For the last 2 weeks of taper: consider substituting fluoxetine 20mg (long half-life, self-tapers)",
      "If pregnancy is planned or detected: switch to sertraline via cross-taper over 1-2 weeks (do NOT stop abruptly)",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information and individualise for each patient. CRITICAL: contraindicated in pregnancy (Category D) and with tamoxifen.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Not recognising paroxetine as Pregnancy Category D",
      why: "Paroxetine is the ONLY SSRI with FDA Category D — 1st-trimester cardiac septal defects (ASD, VSD). Prescribing to a pregnant woman or a woman of reproductive age without reliable contraception is a serious error.",
      correction: "Always do a pregnancy test before starting paroxetine in women of reproductive age, and counsel about reliable contraception. If pregnancy is detected, switch to sertraline (cross-taper, do not stop abruptly). Schedule fetal echocardiogram at 18-20 weeks.",
    },
    {
      mistake: "Abrupt discontinuation of paroxetine (WORST of any SSRI)",
      why: "Paroxetine has the shortest half-life of any SSRI (~21h) and no active metabolite. Even missing 1-2 doses can trigger withdrawal (dizziness, 'brain zaps', nausea, irritability) within 24-48h. Abrupt cessation causes severe discontinuation syndrome.",
      correction: "Always taper SLOWLY — reduce by 10mg every 1-2 weeks over 4-8 weeks minimum. For the last 2 weeks, consider substituting fluoxetine 20mg (long half-life, self-tapers). Counsel patient: never stop abruptly, never miss doses, carry a spare dose when travelling.",
    },
    {
      mistake: "Missing the paroxetine-tamoxifen interaction",
      why: "Paroxetine is a strong CYP2D6 inhibitor; tamoxifen requires CYP2D6 to be converted to endoxifen (its active metabolite). Co-prescription reduces endoxifen levels by 50-75%, effectively rendering tamoxifen ineffective and increasing breast cancer recurrence risk. This is an ABSOLUTE CONTRAINDICATION.",
      correction: "Always ask about tamoxifen use before prescribing paroxetine. In breast-cancer survivors, use venlafaxine (preferred — minimal CYP2D6 and treats hot flushes), sertraline, or escitalopram. Educate the patient to inform every doctor of her tamoxifen status.",
    },
    {
      mistake: "Using paroxetine in elderly with cognitive impairment",
      why: "Paroxetine is on the Beers Criteria list of potentially inappropriate medications in elderly. The anticholinergic (muscarinic M1 antagonist) effect worsens cognition, causes urinary hesitancy, and increases fall risk. Highest SIADH risk among SSRIs. Short half-life causes discontinuation with missed doses (common in elderly).",
      correction: "AVOID paroxetine in elderly, especially with cognitive impairment. Use sertraline or escitalopram instead — minimal anticholinergic and CYP interaction profiles, low weight gain, low sedation.",
    },
    {
      mistake: "Not warning about weight gain",
      why: "Paroxetine causes the MOST weight gain of any SSRI — typically 3-7kg over 6-12 months. This is often under-recognised and leads to non-adherence or metabolic complications.",
      correction: "Weigh patient at baseline, 4 weeks, 12 weeks. Counsel about diet and exercise. If weight gain is significant, consider switching to sertraline (low weight gain) or bupropion (weight-neutral, but also CYP2D6 inhibitor — caution).",
    },
    {
      mistake: "Not asking about sexual dysfunction",
      why: "Paroxetine has the HIGHEST rate of sexual dysfunction among SSRIs (40-50%) — decreased libido, delayed orgasm, anorgasmia. It is the #1 reason for non-adherence. Patients rarely volunteer it.",
      correction: "Ask directly at every follow-up: 'Any changes in sexual interest or function?' If present, consider dose reduction, adding bupropion XL (reverses SSRI-induced sexual dysfunction — but caution with CYP2D6), switching to sertraline/escitalopram (lower rates), or using mirtazapine. Off-label, paroxetine's sexual side effect is exploited for premature ejaculation.",
    },
    {
      mistake: "Not checking sodium in elderly",
      why: "Paroxetine has the highest SIADH risk among SSRIs. Risk is highest in elderly females in the first 2 weeks. Can cause confusion, seizures, and death if severe (Na <120 mmol/L).",
      correction: "Check serum sodium at baseline in elderly. Recheck within 2 weeks if symptomatic (confusion, headache, lethargy, seizures). Counsel family to watch for these symptoms.",
    },
    {
      mistake: "Combining with MAOIs or not waiting the 14-day washout",
      why: "MAOI + paroxetine (any SSRI) = potentially fatal serotonin syndrome. The 14-day washout is non-negotiable. With paroxetine's short half-life, the washout before starting an MAOI can be slightly shorter (5-7 days), but the washout after an MAOI before starting paroxetine is the full 14 days.",
      correction: "Always ask about MAOI use before starting paroxetine. Wait at least 14 days after stopping an MAOI before starting paroxetine. When switching from paroxetine to an MAOI, wait at least 5-7 days (some guidelines say 14 days for safety).",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Pregnancy (Category D) — 1st trimester especially",
      reason: "Paroxetine is the ONLY SSRI with FDA Category D — positive evidence of human fetal risk. 1.5-2× increased risk of 1st-trimester cardiac septal defects (ASD, VSD). Also neonatal adaptation syndrome in 3rd trimester.",
      alternative: "Sertraline is the SSRI of choice in pregnancy (lowest placental transfer). If sertraline unavailable, fluoxetine is acceptable. If patient is already on paroxetine and becomes pregnant, cross-taper to sertraline over 1-2 weeks (do NOT stop abruptly).",
    },
    {
      scenario: "Concurrent tamoxifen use",
      reason: "ABSOLUTE CONTRAINDICATION. Paroxetine is a strong CYP2D6 inhibitor; tamoxifen requires CYP2D6 to be converted to endoxifen (active metabolite). Co-prescription reduces endoxifen levels by 50-75%, increasing breast cancer recurrence risk.",
      alternative: "Venlafaxine (preferred — minimal CYP2D6 effect AND treats vasomotor symptoms), sertraline (mild CYP2D6), or escitalopram (minimal CYP interactions). Avoid paroxetine, fluoxetine, and bupropion (all strong CYP2D6 inhibitors).",
    },
    {
      scenario: "Active MAOI use (within 14 days)",
      reason: "Fatal serotonin syndrome. The 14-day washout after an MAOI is absolute and non-negotiable.",
      alternative: "Wait 14 days after stopping an MAOI before starting paroxetine. When switching from paroxetine to an MAOI, wait at least 5-7 days (some guidelines say 14 days for safety).",
    },
    {
      scenario: "Elderly with cognitive impairment or fall risk",
      reason: "Paroxetine is on the Beers Criteria list of potentially inappropriate medications in elderly. Anticholinergic (muscarinic M1) worsens cognition and urinary hesitancy; sedation increases fall risk; highest SIADH risk; short half-life causes discontinuation with missed doses.",
      alternative: "Sertraline or escitalopram — minimal anticholinergic and CYP interaction profiles. Start at half the adult dose (sertraline 25mg, escitalopram 5mg).",
    },
    {
      scenario: "Eating disorders (anorexia or bulimia nervosa)",
      reason: "Paroxetine causes the most weight gain of any SSRI — undesirable in patients with eating disorders. Also, bupropion (an alternative) is contraindicated in eating disorders due to seizure risk. Paroxetine may also trigger binge episodes in susceptible patients.",
      alternative: "Fluoxetine is FDA-approved for bulimia nervosa (and is weight-neutral). Sertraline or escitalopram are reasonable alternatives. Avoid paroxetine, mirtazapine (weight gain), and bupropion (seizure risk).",
    },
    {
      scenario: "Known CYP2D6 poor metaboliser on critical CYP2D6 substrate",
      reason: "Paroxetine is itself metabolised by CYP2D6 AND is a strong CYP2D6 inhibitor. In poor metabolisers (5-10% of Indians), paroxetine levels are 2-10× higher. Additionally, paroxetine raises levels of co-prescribed CYP2D6 substrates (TCAs, metoprolol, antiarrhythmics, codeine).",
      alternative: "Escitalopram (lowest CYP interaction profile), sertraline (CYP2B6 primary), or venlafaxine (CYP2D6 but minimal inhibition). If paroxetine is essential, start at half the dose and titrate slowly.",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "Why is paroxetine generally avoided as first-line SSRI? (Shortest half-life → worst discontinuation; Category D in pregnancy; strongest CYP2D6 inhibitor → tamoxifen interaction; most sedating/weight gain/anticholinergic among SSRIs.)",
      "What is the FDA pregnancy category of paroxetine and what is the fetal risk? (Category D — 1st-trimester cardiac septal defects (ASD, VSD). Only SSRI with Category D. Switch to sertraline if pregnancy detected.)",
      "Explain the paroxetine-tamoxifen interaction. Why is it an absolute contraindication? (Paroxetine is a strong CYP2D6 inhibitor. Tamoxifen needs CYP2D6 to be converted to endoxifen (active metabolite). Co-prescription → tamoxifen ineffective → breast cancer recurrence.)",
      "Which SSRI has the shortest half-life and worst discontinuation syndrome? How do you manage it? (Paroxetine — 21h. Taper slowly over 4-8 weeks. Substitute fluoxetine 20mg for the last 2 weeks of taper (long half-life, self-tapers).)",
      "What is unique about paroxetine's receptor pharmacology among SSRIs? (Muscarinic M1 antagonist — explains anticholinergic & sedating profile, dry mouth, constipation, cognitive impairment in elderly. UNIQUE among SSRIs.)",
      "What is the niche use of paroxetine 7.5mg CR (Brisdelle)? (Vasomotor symptoms of menopause — the only non-hormonal FDA-approved drug for hot flushes. Useful in breast-cancer survivors who can't take HRT — but ONLY if not on tamoxifen.)",
    ],
    residentExpects: [
      "Know the starting dose and titration (10mg OD → 20mg → 40mg; lower start of 10mg for panic/anxiety to avoid early activation; max 50mg/day, 60mg for OCD).",
      "Know the absolute contraindications (pregnancy Category D, tamoxifen, MAOIs, pimozide/thioridazine) and relative contraindications (elderly with cognitive impairment, eating disorders).",
      "Know the discontinuation syndrome management (SLOW taper over 4-8 weeks minimum; fluoxetine substitution for last 2 weeks; counsel about FINISH symptoms).",
      "Know the CYP2D6 interactions (tamoxifen, TCAs, metoprolol, codeine (paroxetine blocks conversion to morphine → codeine ineffective), antiarrhythmics).",
      "Know when to switch from paroxetine to sertraline (pregnancy detected, elderly with cognitive decline, treatment-resistant depression, intolerable side effects).",
      "Know when to refer to psychiatry (no response to 2 SSRI trials, bipolar suspicion, psychotic features, suicidality, pregnancy in a patient on paroxetine).",
    ],
    consultantsDo: [
      "Use PHQ-9 at every visit for objective monitoring.",
      "Screen for bipolar disorder (MDQ) before starting any antidepressant — paroxetine has similar manic-switch risk to other SSRIs.",
      "Reserve paroxetine for specific niches — severe anxiety with desired sedation, vasomotor symptoms (NOT on tamoxifen), premature ejaculation, refractory OCD.",
      "Always do a pregnancy test in women of reproductive age before starting paroxetine, and counsel about reliable contraception.",
      "Always ask about tamoxifen use before prescribing paroxetine — if yes, use venlafaxine instead.",
      "Plan discontinuation WELL in advance — paroxetine requires the slowest taper of any SSRI (4-8 weeks minimum, sometimes months).",
      "Consider cost — generic paroxetine (Paroxet by Cipla) is the most affordable option if paroxetine is specifically needed.",
    ],
    internsMiss: [
      "Forgetting to do a pregnancy test before starting paroxetine (Category D — critical!).",
      "Not asking about tamoxifen use before prescribing (absolute contraindication — breast cancer recurrence risk).",
      "Counselling the patient to 'just stop' paroxetine when they feel better (worst discontinuation syndrome of any SSRI — must taper slowly).",
      "Using paroxetine as first-line SSRI in elderly with cognitive impairment (anticholinergic worsens cognition, on Beers Criteria).",
      "Not asking about sexual dysfunction (highest rate among SSRIs — 40-50%).",
      "Not checking sodium in elderly (highest SIADH risk among SSRIs).",
      "Not warning about weight gain (most weight gain of any SSRI — 3-7kg over 6-12 months).",
      "Not screening for bipolar disorder (manic switch risk — same as all SSRIs).",
      "Not providing Tele-MANAS number (14416) for crisis support.",
    ],
  },

  /* Refined high-yield level */
  highYieldLevel: "extreme",

  /* Drug family navigation */
  drugFamilyNav: {
    familyName: "SSRIs (Selective Serotonin Reuptake Inhibitors)",
    members: [
      { name: "Paroxetine", slug: "paroxetine", relationship: "Current drug", distinguishing: "Shortest half-life (worst discontinuation); Category D; tamoxifen contraindication; muscarinic M1 antagonist; vasomotor niche" },
      { name: "Sertraline", slug: "sertraline", relationship: "Same class (SSRI)", distinguishing: "SSRI of choice in pregnancy; σ1 agonism; 6 FDA indications; mild CYP2D6" },
      { name: "Fluoxetine", slug: "fluoxetine", relationship: "Same class (SSRI)", distinguishing: "Longest half-life (mildest discontinuation); only SSRI for bulimia; paediatric ≥8yr; also strong CYP2D6 inhibitor (avoid with tamoxifen)" },
      { name: "Escitalopram", slug: "escitalopram", relationship: "Same class (SSRI)", distinguishing: "S-enantiomer of citalopram; lowest CYP interactions (safe with tamoxifen); QTc watch at >20mg" },
      { name: "Citalopram", slug: "citalopram", relationship: "Same class (SSRI)", distinguishing: "Racemic parent of escitalopram; minimal CYP2D6 (reasonable in tamoxifen); QTc dose-dependent; max 40mg/day (20mg in elderly)" },
      { name: "Fluvoxamine", slug: "fluvoxamine", relationship: "Same class (SSRI)", distinguishing: "OCD-only FDA indication; CYP1A2 inhibitor (not 2D6 — safe with tamoxifen); tizanidine contraindicated" },
    ],
  },

  /* Learning time breakdown */
  learningTimeBreakdown: {
    read: "19 min",
    study: "50 min",
    revision: "10 min",
  },

  /* ---- Educational UX Layer ---- */

  /* Inline micro-quizzes — one after each major learning milestone */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Paroxetine has a UNIQUE receptor pharmacology among SSRIs. What is it?",
      options: ["σ1 receptor agonist", "Muscarinic M1 antagonist", "5-HT2C antagonist", "Alpha-1 antagonist"],
      correctIndex: 1,
      explanation: "Paroxetine is the only SSRI that is a muscarinic M1 antagonist. This explains its unique adverse-effect profile among SSRIs: dry mouth, constipation, sedation, urinary hesitancy, and cognitive impairment in elderly (which is why paroxetine is on the Beers Criteria list). The M1 antagonism also contributes to its sedating profile (paroxetine is the most sedating SSRI).",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-onset",
      question: "Why does Paroxetine have the WORST discontinuation syndrome of any SSRI?",
      options: [
        "It accumulates in tissues and is released slowly",
        "Shortest half-life (21h) and no active metabolite",
        "It produces a withdrawal rebound of depression",
        "It causes irreversible changes to serotonin receptors",
      ],
      correctIndex: 1,
      explanation: "Paroxetine has the shortest half-life of any SSRI (~21 hours) and no active metabolite (unlike fluoxetine → norfluoxetine). This means blood levels drop rapidly between doses, and even missing 1-2 doses can trigger withdrawal (dizziness, 'brain zaps', nausea, irritability) within 24-48 hours. Discontinuation ranking (worst to mildest): Paroxetine > Venlafaxine > Sertraline > Escitalopram > Fluoxetine. Management: SLOW taper over 4-8 weeks; substitute fluoxetine 20mg for the last 2 weeks (long half-life, self-tapers).",
      afterSectionId: "timeline",
    },
    {
      id: "quiz-side-effects",
      question: "Which side effect is HIGHEST with paroxetine compared to other SSRIs?",
      options: ["Nausea", "Sexual dysfunction", "Insomnia", "Diarrhoea"],
      correctIndex: 1,
      explanation: "Paroxetine has the HIGHEST rate of sexual dysfunction among SSRIs (40-50%) — decreased libido, delayed orgasm, anorgasmia. It also has the most weight gain, most sedation, and most anticholinergic effects of any SSRI. Off-label, this sexual side effect is exploited therapeutically for premature ejaculation (20mg OD or PRN before intercourse).",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-pregnancy",
      question: "Paroxetine is the ONLY SSRI with FDA pregnancy Category D. What is the fetal risk?",
      options: ["Neural tube defects", "1st-trimester cardiac septal defects (ASD, VSD)", "Cleft palate", "Limb reduction defects"],
      correctIndex: 1,
      explanation: "Paroxetine is the ONLY SSRI with FDA Category D — 1.5-2× increased risk of 1st-trimester cardiac septal defects (atrial septal defect, ventricular septal defect). Absolute risk is small (~1% vs 0.7% baseline), but paroxetine is avoided in pregnancy. If a patient on paroxetine becomes pregnant: do NOT stop abruptly (discontinuation); cross-taper to sertraline over 1-2 weeks; schedule fetal echocardiogram at 18-20 weeks. IPS concurs with international guidelines.",
      afterSectionId: "contraindications",
    },
    {
      id: "quiz-interactions",
      question: "Why is paroxetine ABSOLUTELY CONTRAINDICATED with tamoxifen?",
      options: [
        "Paroxetine increases tamoxifen toxicity",
        "Paroxetine inhibits CYP2D6, blocking conversion of tamoxifen to endoxifen (its active metabolite)",
        "Paroxetine reduces absorption of tamoxifen",
        "Paroxetine increases the risk of breast cancer directly",
      ],
      correctIndex: 1,
      explanation: "Paroxetine is a strong CYP2D6 inhibitor. Tamoxifen is a prodrug that requires CYP2D6 to be converted to endoxifen (its active metabolite). Co-prescription reduces endoxifen levels by 50-75%, effectively rendering tamoxifen ineffective and increasing breast cancer recurrence risk. This is an ABSOLUTE CONTRAINDICATION per ASCO guidelines. Among antidepressants to AVOID with tamoxifen: paroxetine, fluoxetine, bupropion (all strong CYP2D6 inhibitors). PREFERRED: venlafaxine (also treats hot flushes), sertraline, escitalopram.",
      afterSectionId: "interactions",
    },
    {
      id: "quiz-niche",
      question: "What is the unique niche use of paroxetine 7.5mg CR (Brisdelle)?",
      options: [
        "Paediatric depression",
        "Bipolar depression",
        "Vasomotor symptoms (hot flushes) of menopause",
        "Schizophrenia negative symptoms",
      ],
      correctIndex: 2,
      explanation: "Paroxetine 7.5mg CR (Brisdelle) is the ONLY non-hormonal FDA-approved drug for vasomotor symptoms (hot flushes) of menopause. This is a niche use — particularly useful in breast-cancer survivors who cannot take hormone replacement therapy (HRT). CRITICAL CAUTION: only use if the patient is NOT on tamoxifen (paroxetine is contraindicated with tamoxifen). If on tamoxifen, use venlafaxine instead (also effective for hot flushes, minimal CYP2D6 effect).",
      afterSectionId: "evidence-practice",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "Why is paroxetine generally avoided as first-line SSRI? List the key reasons.",
      answer: "Paroxetine is generally avoided as first-line SSRI because: (1) Shortest half-life (~21h) → WORST discontinuation syndrome of any SSRI — even missing 1-2 doses can trigger withdrawal. (2) Pregnancy Category D — the ONLY SSRI with this category, due to 1st-trimester cardiac septal defects. (3) Strongest CYP2D6 inhibitor among SSRIs → ABSOLUTE CONTRAINDICATION with tamoxifen. (4) Most sedating, most weight gain (3-7kg), most anticholinergic (muscarinic M1 antagonist — UNIQUE among SSRIs) of any SSRI. (5) On Beers Criteria for potentially inappropriate medications in elderly. Paroxetine is reserved for specific niches: severe anxiety with desired sedation, vasomotor symptoms in non-tamoxifen breast-cancer survivors, premature ejaculation, refractory OCD.",
      topic: "Drug Selection",
    },
    {
      question: "A 32-year-old woman with panic disorder on paroxetine 20mg OD calls you — she is 6 weeks pregnant. What is your management?",
      answer: "Do NOT stop paroxetine abruptly (severe discontinuation syndrome). Cross-taper to sertraline over 1-2 weeks (e.g., reduce paroxetine to 10mg and start sertraline 25mg, then stop paroxetine and increase sertraline to 50mg). Paroxetine is Pregnancy Category D — 1st-trimester cardiac septal defects (ASD, VSD). Sertraline is the SSRI of choice in pregnancy. Schedule fetal echocardiogram at 18-20 weeks. Involve obstetrician. Counsel: untreated maternal depression also carries risks (preterm birth, low birth weight, poor bonding, suicidality) — so treat, but with sertraline.",
      topic: "Pregnancy",
    },
    {
      question: "A breast-cancer survivor on tamoxifen presents with depression. The GP started paroxetine 3 weeks ago. What is your action?",
      answer: "STOP paroxetine immediately — ABSOLUTE CONTRAINDICATION. Paroxetine is a strong CYP2D6 inhibitor; tamoxifen requires CYP2D6 to be converted to endoxifen (active metabolite). Co-prescription reduces endoxifen by 50-75%, increasing breast cancer recurrence risk. Switch to venlafaxine (PREFERRED — minimal CYP2D6 effect AND treats hot flushes if present), sertraline, or escitalopram. Counsel patient to inform every doctor of her tamoxifen status before any antidepressant is prescribed. Reassess depression severity. Consider CBT addition.",
      topic: "Drug Interactions",
    },
    {
      question: "Explain paroxetine's unique receptor pharmacology among SSRIs and the clinical consequences.",
      answer: "Paroxetine is the ONLY SSRI that is a muscarinic M1 antagonist. This explains its unique adverse-effect profile: (1) Anticholinergic effects — dry mouth, constipation, urinary hesitancy, blurred vision, cognitive impairment (especially in elderly — paroxetine is on Beers Criteria list). (2) Sedation — paroxetine is the MOST sedating SSRI (give at night). (3) Weight gain — most weight gain of any SSRI (3-7kg over 6-12 months). The M1 antagonism also explains why paroxetine is uniquely problematic in elderly with cognitive impairment, unlike other SSRIs (sertraline, escitalopram) which have minimal anticholinergic activity.",
      topic: "Pharmacology",
    },
    {
      question: "How do you manage SSRI discontinuation syndrome, particularly with paroxetine (the worst SSRI for this)?",
      answer: "Paroxetine has the WORST discontinuation syndrome of any SSRI due to shortest half-life (21h) and no active metabolite. Symptoms (FINISH — Flu-like, Insomnia, Nausea, Imbalance, Sensory/brain zaps, Hyperarousal) can start within 24-48h of missed doses. Management: (1) Restart paroxetine at previous dose if severe. (2) TAPER SLOWLY — reduce by 10mg every 1-2 weeks over 4-8 weeks minimum (sometimes months). (3) For the last 2 weeks of taper, substitute fluoxetine 20mg (long half-life of norfluoxetine, self-tapers). (4) Counsel patient: never stop abruptly, never miss doses, carry a spare dose when travelling. (5) Discontinuation ranking (worst to mildest): Paroxetine > Venlafaxine > Sertraline > Escitalopram > Fluoxetine.",
      topic: "Discontinuation",
    },
    {
      question: "What are the niche indications where paroxetine is actually useful?",
      answer: "Despite being generally avoided as first-line, paroxetine has specific niches: (1) Severe anxiety disorders (panic disorder with severe anticipatory anxiety, severe social anxiety) where the sedating profile is therapeutically useful — give at night. (2) Vasomotor symptoms (hot flushes) of menopause — paroxetine 7.5mg CR (Brisdelle) is the ONLY non-hormonal FDA-approved drug. Particularly useful in breast-cancer survivors who can't take HRT — CRITICAL: only if NOT on tamoxifen. (3) Premature ejaculation — 20mg OD or PRN 4-6h before intercourse; exploits the high sexual-dysfunction side effect therapeutically. (4) Refractory OCD at higher doses (40-60mg) when other SSRIs have failed. (5) Off-label for refractory anger/irritability in personality disorders.",
      topic: "Indications",
    },
  ],

  /* Guided learning paths — each mode shows a curated subset of sections */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language. What you need to know to take your medicine safely — especially the warnings.",
      visibleSections: ["top", "quick-facts", "patient-education", "faq", "emergency"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "Foundations, mechanism, clinical uses, side effects, and MBBS exam content. Pay attention to paroxetine's unique contraindications.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "interactions", "patient-education", "learning-module", "high-yield-summary", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "40 min",
      description: "Full clinical detail with exam-specific content, PYQs, and drug comparisons. Paroxetine is HIGH-YIELD due to its distinctive contraindications.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "55 min",
      description: "Everything — advanced reasoning, ward pearls, guideline comparison, full evidence. Especially the niche uses and discontinuation management.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall", "references"],
    },
  ],

  /* Lesson grouping — sections organised into learning units */
  lessonGroups: [
    {
      number: 1,
      title: "Foundations",
      description: "What is this drug? Why does it have so many caveats?",
      sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"],
      checkpoint: "You now know what Paroxetine is, its 8 FDA indications, and the key reasons it is generally avoided as first-line SSRI — Category D, tamoxifen interaction, worst discontinuation, anticholinergic/weight-gain profile.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? What makes paroxetine pharmacologically unique among SSRIs?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand paroxetine's mechanism — SERT blockade PLUS muscarinic M1 antagonism (UNIQUE among SSRIs), and why the short half-life (21h) causes the worst discontinuation syndrome of any SSRI.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When (rarely) do you use it? What goes wrong?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now identify paroxetine's niche uses (severe anxiety, vasomotor symptoms, premature ejaculation, refractory OCD) and its critical contraindications (pregnancy Category D, tamoxifen, MAOIs, elderly with cognitive impairment).",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is paroxetine used (and avoided) in Indian hospitals?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands (Paxil, Pexep, Paxidep, Paroxet), the pregnancy and tamoxifen protocols, the discontinuation management, and the common mistakes interns make with paroxetine.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content (paroxetine is HIGH-YIELD due to its distinctive contraindications), worked through a clinical case, compared paroxetine with other SSRIs, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions, you have exam-level mastery of Paroxetine — including why it is generally avoided, its critical contraindications, and its niche uses.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: [
    "Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Paxil/Paxil CR/Brisdelle labels, NICE CG91, APA Practice Guideline, ACOG Committee Opinion 753",
  ],
};
