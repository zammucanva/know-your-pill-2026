import type { Drug } from "../types";

/**
 * Fluvoxamine — canonical drug page data.
 *
 * Structured to mirror the sertraline / fluoxetine template exactly so every
 * section of /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for LUVOX (fluvoxamine maleate)
 *   - FDA Prescribing Information for LUVOX CR (fluvoxamine maleate, extended-release)
 *   - NICE Clinical Guideline CG31 (OCD and body dysmorphic disorder)
 *   - APA Practice Guideline for the Treatment of Patients with Obsessive-Compulsive Disorder
 *
 * Last reviewed: 2026-07-13
 */
export const fluvoxamine: Drug = {
  /* ---- Identity ---- */
  slug: "fluvoxamine",
  genericName: "Fluvoxamine",
  brandNames: ["Luvox", "Luvox CR", "Faverin"],
  drugClass: "ssri",
  drugClassLabel: "SSRI",
  drugClassFullName: "Selective Serotonin Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SSRIs", "Fluvoxamine"],

  /* ---- Hero / summary ---- */
  tagline:
    "The 'OCD SSRI' — the only SSRI FDA-approved for paediatric OCD (≥8 yrs), and the most potent CYP1A2 inhibitor in the class, making caffeine, theophylline, clozapine, and tizanidine signature interactions.",
  summary:
    "Fluvoxamine blocks the serotonin transporter (SERT) at the presynaptic membrane, increasing serotonin availability in the synaptic cleft. Over 2–6 weeks, downstream neuroadaptive changes — including 5-HT1A autoreceptor desensitisation and increased BDNF expression in the hippocampus — produce the clinical anti-obsessional and anxiolytic effects. Fluvoxamine is pharmacologically unique among SSRIs in three clinically important ways. First, it is a potent σ1 (sigma-1) receptor AGONIST (shared with sertraline) — this contributes an anxiolytic and possibly neuroprotective effect that other SSRIs lack. Second, it is the MOST potent CYP1A2 inhibitor in the SSRI class, producing clinically significant interactions with caffeine, theophylline, clozapine, tizanidine, ramelteon, and warfarin. Third, it is the only SSRI FDA-approved for OCD in children as young as 8 years (and is FDA-approved ONLY for OCD in the US — not for depression, although it is approved for depression in Europe and Australia). It has a short half-life (~15.6 hours), no active metabolite, and is the most sedating SSRI after paroxetine, with the highest rate of GI side effects in the class.",
  estimatedReadTime: "17 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of fluvoxamine — SERT blockade PLUS σ1 receptor agonism — and contrast this dual pharmacology with other SSRIs.",
    "Predict the common and serious side effects based on serotonergic pharmacology, with particular attention to fluvoxamine's high GI side-effect rate and its sedating profile (most sedating SSRI after paroxetine).",
    "Identify and manage fluvoxamine's signature CYP1A2-mediated interactions — caffeine, theophylline, clozapine, tizanidine, ramelteon, and warfarin — and explain why tizanidine is contraindicated.",
    "Compare fluvoxamine with other SSRIs (sertraline, fluoxetine, escitalopram) and select the right patient for fluvoxamine — particularly in OCD with insomnia and in schizophrenia patients requiring an SSRI.",
    "Counsel a patient on caffeine restriction (limit coffee to 1–2 cups/day) and on the importance of disclosing all medications before starting fluvoxamine.",
    "Recognise and manage serotonin syndrome, SIADH, and discontinuation syndrome — noting fluvoxamine's short half-life places it closer to paroxetine than to fluoxetine in discontinuation severity.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Fluvoxamine selectively blocks the serotonin transporter (SERT), increasing synaptic serotonin concentration. Uniquely among SSRIs (with sertraline), it is also a potent σ1 receptor agonist, contributing an anxiolytic and possibly anti-inflammatory effect.",
    molecularTarget:
      "SERT (SLC6A4 — serotonin transporter) AND σ1 (sigma-1) receptor (agonist).",
    effect:
      "Acute: increased synaptic serotonin + σ1 receptor activation. Chronic (2–6 weeks): desensitisation of 5-HT1A somatodendritic autoreceptors in the raphe nuclei, increased serotonergic throughput to the prefrontal cortex and cortico-striatal-thalamo-cortical (CSTC) loops (relevant to OCD), and upregulation of BDNF in the hippocampus. σ1 agonism modulates intracellular calcium signalling and may contribute to fluvoxamine's efficacy in anxiety with somatic symptoms.",
    steps: [
      "Fluvoxamine binds the serotonin transporter (SERT) on the presynaptic neuron, blocking reuptake of serotonin from the synaptic cleft.",
      "Acute blockade raises synaptic serotonin concentration within hours — but somatodendritic 5-HT1A autoreceptors in the raphe nuclei detect this and inhibit further serotonin release.",
      "Simultaneously, fluvoxamine binds intracellular σ1 receptors (in the endoplasmic reticulum), where its agonist activity modulates calcium signalling, IP3 receptor function, and downstream neuroplasticity — an effect shared with sertraline but absent in fluoxetine, paroxetine, escitalopram, and citalopram.",
      "Over 7–14 days, 5-HT1A autoreceptors gradually desensitise — removing the brake on serotonin firing.",
      "Serotonergic throughput from the raphe nuclei to the prefrontal cortex, amygdala, hippocampus, and the cortico-striatal-thalamo-cortical loops (dysregulated in OCD) increases.",
      "Downstream neuroadaptive changes occur over 2–6 weeks: increased BDNF expression, hippocampal neurogenesis, and receptor downregulation. Full anti-obsessional effect in OCD typically requires 8–12 weeks at target dose.",
      "These delayed adaptations — not the acute serotonin increase — correlate with the onset of clinical anti-obsessional, antidepressant, and anxiolytic effects.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~53% due to first-pass metabolism). Peak plasma at 3–8 hours (immediate-release); 4–6 hours (Luvox CR). Food does not significantly affect absorption. Highly protein-bound (~80%, mostly to albumin). Volume of distribution ~25 L/kg — distributes widely including into CNS. Luvox CR provides once-daily dosing vs the BID dosing required for immediate-release.",
    halfLife:
      "Approximately 15.6 hours (range 12–22 hours) — short, between paroxetine (~21 h) and sertraline (~26 h). Twice-daily dosing is required for immediate-release; Luvox CR permits once-daily dosing.",
    activeMetabolite:
      "None clinically significant. Fluvoxamine is metabolised to inactive compounds (primarily fluvoxamine acid and CYP-mediated oxidation products). The absence of an active metabolite gives cleaner pharmacokinetics than fluoxetine (which has the long-lived norfluoxetine), but the short half-life makes discontinuation syndrome more likely than with fluoxetine.",
    metabolism:
      "Hepatic CYP1A2 (major), CYP2C19, CYP2D6, and CYP3A4 (minor). Fluvoxamine is simultaneously a SUBSTRATE and a POTENT INHIBITOR of CYP1A2 (the mechanism underlying its signature drug interactions with caffeine, theophylline, clozapine, and tizanidine). It also moderately inhibits CYP2C19 and CYP3A4.",
    excretion:
      "Renal elimination of metabolites (~94% within 71 hours). Negligible unchanged drug in urine.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic", label: "Presynaptic neuron", sublabel: "Raphe nuclei — synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT transporter", sublabel: "Normally reuptakes serotonin", variant: "target" },
      { id: "fluvoxamine", label: "Fluvoxamine", sublabel: "Blocks SERT", variant: "inhibit" },
      { id: "cleft", label: "↑ Synaptic 5-HT", sublabel: "More serotonin available", variant: "output" },
      { id: "sigma1", label: "σ1 Receptor (ER)", sublabel: "Fluvoxamine AGONIST — Ca²⁺ modulation", variant: "target" },
      { id: "autoreceptor", label: "5-HT1A autoreceptor", sublabel: "Initially brakes firing", variant: "process" },
      { id: "desensitised", label: "Autoreceptors desensitise", sublabel: "Days 7–14 — brake removed", variant: "output" },
      { id: "cstc", label: "Cortico-striatal loops", sublabel: "OCD-relevant CSTC circuits normalise", variant: "output" },
      { id: "bdnf", label: "↑ BDNF + neurogenesis", sublabel: "Weeks 2–6 (OCD: 8–12 wks)", variant: "output" },
      { id: "cyp1a2", label: "CYP1A2 (liver)", sublabel: "Potently INHIBITED — signature interactions", variant: "inhibit" },
    ],
    edges: [
      { from: "presynaptic", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "fluvoxamine", to: "sert", type: "inhibit", label: "blocks" },
      { from: "serotonin", to: "cleft", label: "accumulates" },
      { from: "fluvoxamine", to: "sigma1", label: "agonist" },
      { from: "sigma1", to: "bdnf", label: "neuroplasticity" },
      { from: "cleft", to: "autoreceptor", label: "detects" },
      { from: "autoreceptor", to: "desensitised", label: "over 7–14 days" },
      { from: "desensitised", to: "cstc", label: "increased throughput" },
      { from: "cstc", to: "bdnf", label: "weeks 2–6" },
      { from: "fluvoxamine", to: "cyp1a2", type: "inhibit", label: "potent inhibition" },
      { from: "cyp1a2", to: "serotonin", label: "↓ metabolism of caffeine, theophylline, clozapine" },
    ],
    caption:
      "Fluvoxamine's THREE signatures: (1) SERT blockade like all SSRIs; (2) σ1 receptor agonism (shared only with sertraline) contributing anxiolysis; (3) potent CYP1A2 inhibition producing the class's most distinctive interaction profile.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: [
    "SERT (serotonin transporter)",
    "5-HT1A (autoreceptor, desensitises)",
    "5-HT2C",
    "5-HT3 (gut — explains high GI side-effect rate)",
    "σ1 (sigma-1) receptor — AGONIST (shared with sertraline)",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // SSRIs act on the diffuse serotonergic projection system, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Obsessive-Compulsive Disorder (OCD) — adults",
      status: "fda-approved",
      description:
        "First-line pharmacotherapy for adult OCD. THIS IS THE ONLY FDA-APPROVED INDICATION FOR FLUVOXAMINE IN THE US. Often requires higher doses (100–300 mg/day) than depression and 8–12 weeks for full anti-obsessional effect. Combine with Exposure and Response Prevention (ERP) therapy for best outcomes.",
      ageGroup: "Adults",
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD) — paediatric",
      status: "fda-approved",
      description:
        "FDA-approved for paediatric OCD in children aged ≥8 years — fluvoxamine is the only SSRI with this age range for OCD (sertraline ≥6 yrs, fluoxetine ≥7 yrs). Start at 25 mg/day, titrate slowly. Monitor for behavioural activation and suicidality (black-box warning).",
      ageGroup: "≥8 years",
    },
    {
      name: "Major Depressive Disorder (MDD)",
      status: "off-label",
      description:
        "OFF-LABEL IN THE US — fluvoxamine is NOT FDA-approved for depression in the United States. However, it IS approved for depression in Europe (Faverin), Australia, and many other countries. Efficacy is comparable to other SSRIs. Generally not first-choice in the US due to interaction profile, but reasonable when sedation is desired.",
    },
    {
      name: "Social Anxiety Disorder (Social Phobia)",
      status: "off-label",
      description:
        "Off-label in the US (sertraline, paroxetine, and venlafaxine are FDA-approved). Fluvoxamine has RCT evidence for efficacy. Its σ1 agonism may offer advantage in anxiety with prominent somatic symptoms.",
    },
    {
      name: "Panic Disorder",
      status: "off-label",
      description:
        "Off-label in the US (sertraline, paroxetine, fluoxetine are FDA-approved). Effective in reducing panic attack frequency. Start LOW (25 mg/day) to avoid early activation that can precipitate panic.",
    },
    {
      name: "Post-Traumatic Stress Disorder (PTSD)",
      status: "off-label",
      description:
        "Off-label in the US (only sertraline and paroxetine are FDA-approved for PTSD). Limited evidence — generally prefer sertraline or paroxetine first.",
    },
    {
      name: "Eating Disorders (Bulimia Nervosa)",
      status: "off-label",
      description:
        "Off-label — fluoxetine is the only SSRI FDA-approved for bulimia. Fluvoxamine has some evidence but is not first-line.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (including phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. At least 14 days must elapse between discontinuation of an MAOI and initiation of fluvoxamine, and vice versa.",
    },
    {
      name: "Tizanidine",
      severity: "absolute",
      rationale:
        "FLUVOXAMINE-SPECIFIC. Fluvoxamine potently inhibits CYP1A2, the primary metabolic pathway for tizanidine. Co-administration produces massive increases in tizanidine plasma levels (up to 10×) causing severe hypotension and bradycardia — syncope and cardiovascular collapse have been reported. This is THE classic fluvoxamine contraindication.",
    },
    {
      name: "Thioridazine",
      severity: "absolute",
      rationale:
        "Contraindicated due to QTc prolongation and risk of torsades de pointes. Thioridazine is metabolised by CYP2D6 and CYP1A2 — both inhibited by fluvoxamine. Combination produces dangerous QTc prolongation.",
    },
    {
      name: "Pimozide",
      severity: "absolute",
      rationale:
        "Contraindicated due to QTc prolongation and risk of torsades de pointes. CYP inhibition by fluvoxamine raises pimozide levels.",
    },
    {
      name: "Alosetron",
      severity: "absolute",
      rationale:
        "Alosetron is metabolised primarily by CYP1A2. Fluvoxamine's potent CYP1A2 inhibition dramatically raises alosetron levels, increasing the risk of fatal constipation and ischaemic colitis. Contraindicated in the FDA label.",
    },
    {
      name: "Known hypersensitivity to fluvoxamine",
      severity: "absolute",
      rationale: "Anaphylaxis and angioedema have been reported.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of fluvoxamine in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. Particularly relevant for fluvoxamine because it is FDA-approved for paediatric OCD down to age 8.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea, vomiting & GI upset",
      frequency: "very-common",
      severity: "mild",
      description:
        "Fluvoxamine has the HIGHEST rate of GI side effects among SSRIs — nausea affects >40% of patients at initiation. Largely mediated by 5-HT3 receptor stimulation in the gut. Usually dose-dependent and resolves after 1–2 weeks, but more pronounced than with other SSRIs.",
      management: "Take WITH FOOD. Split dose (BID for immediate-release). Slow titration (start 25 mg, increase by 25 mg every 4–7 days). Consider Luvox CR for smoother profile.",
    },
    {
      name: "Somnolence / sedation",
      frequency: "very-common",
      severity: "moderate",
      description:
        "Fluvoxamine is the MOST sedating SSRI after paroxetine. Sedation occurs in ~20–25% of patients. Mechanism is unclear but may relate to σ1 agonism and serotonergic effects on sleep architecture. Often a desired effect in OCD patients with comorbid insomnia.",
      management: "Dose AT NIGHT. If daytime somnolence persists, consider switching to a less sedating SSRI (sertraline, escitalopram).",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "mild",
      description:
        "Paradoxically, some patients experience insomnia rather than sedation — SSRI effects on sleep architecture vary between individuals. If activating in a given patient, dose in the morning.",
      management: "If sedating → take at night. If activating → take in morning. Trial and error.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "very-common",
      severity: "moderate",
      description:
        "Decreased libido, delayed orgasm/anorgasmia, erectile dysfunction. Similar rate to other SSRIs (30–40%). Often unreported by patients and undertreated.",
      management: "Dose reduction if possible. Add bupropion XL 150 mg/day. Consider switch to bupropion or mirtazapine. Sildenafil for erectile component.",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Diarrhoea",
      frequency: "common",
      severity: "mild",
      description:
        "Serotonin acts on 5-HT3 receptors in the gut. Higher rate with fluvoxamine than with most other SSRIs (consistent with its overall higher GI side-effect burden).",
      management: "Take with food. Usually transient. If persistent, consider dose reduction.",
    },
    {
      name: "Sweating",
      frequency: "common",
      severity: "mild",
      description:
        "Particularly nocturnal. Mechanism unclear — likely serotonergic effect on hypothalamic thermoregulation. Distressing but benign.",
      management: "Reassure. If severe, consider dose reduction or trial of terazosin (α1 blocker) for SSRI-induced sweating.",
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
      description:
        "Generalised weakness or lack of energy. May coexist with somnolence or occur independently. More common with fluvoxamine than with activating SSRIs like fluoxetine.",
      management: "Often improves after 2–4 weeks. If persistent, review dosing time or consider switch.",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Mild effect. Sip water, sugar-free gum.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Serotonin Syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis), and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of initiating, increasing, or combining serotonergic agents. PARTICULAR RISK with fluvoxamine due to CYP1A2/2C19 inhibition raising levels of co-administered serotonergic drugs metabolised by these enzymes.",
      management: "Discontinue fluvoxamine immediately. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU admission for hyperthermia >41°C.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "SIADH / Hyponatraemia",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Syndrome of inappropriate antidiuretic hormone. Risk highest in elderly, females, and during first 2 weeks. Presents as headache, nausea, confusion, seizures.",
      management: "Check serum sodium at baseline and within 2 weeks for high-risk patients. Fluid restrict. Hypertonic saline if seizures or Na <120 mmol/L.",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Black-box warning. Risk highest in first 1–2 months and during dose changes. Particularly relevant for fluvoxamine because it is approved for paediatric OCD (≥8 yrs).",
      management: "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent.",
    },
    {
      name: "Abnormal bleeding",
      frequency: "uncommon",
      severity: "moderate",
      description:
        "Serotonin is stored in platelets and is essential for aggregation. SSRIs deplete platelet serotonin within 2 weeks, impairing clotting. Risk multiplied when combined with NSAIDs, aspirin, or warfarin — and fluvoxamine's CYP1A2/2C19 inhibition additionally raises warfarin levels, producing a DOUBLE risk with warfarin.",
      management: "Caution in patients with coagulopathy or on anticoagulants. Consider GI protection if combined with NSAIDs. Monitor INR closely with warfarin.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description: "In patients with undiagnosed bipolar disorder, SSRIs can trigger a manic episode. Screen for personal and family history of bipolar disorder before initiating.",
      management: "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "common",
      severity: "moderate",
      description:
        "Occurs if stopped abruptly after ≥4 weeks of use. Symptoms: dizziness, 'brain zaps' (paresthesia), nausea, headache, irritability, insomnia. Severity tracks half-life: paroxetine (21 h) > fluvoxamine (15.6 h) > sertraline (26 h) > escitalopram (30 h) > fluoxetine (1–4 days, mildest). Fluvoxamine's short half-life places it among the SSRIs with MORE bothersome discontinuation — never stop abruptly.",
      management: "Taper over at least 4 weeks. If symptoms emerge, return to previous dose and taper more slowly. Fluoxetine self-taper (long half-life) can be substituted for shorter half-life SSRIs near end of taper.",
    },
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "severe",
      description:
        "Rare but reported — fluvoxamine-associated hepatitis and elevated transaminases. More data are limited than for other SSRIs (fluvoxamine is less prescribed). Monitor for jaundice, fatigue, dark urine.",
      management: "Baseline LFTs; repeat if symptomatic. Discontinue if transaminases >3× ULN.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. Particularly relevant for fluvoxamine because it is approved for paediatric OCD (≥8 yrs). Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes.",
    },
    {
      parameter: "Caffeine intake assessment",
      frequency: "Baseline, every visit during titration, then as needed.",
      rationale:
        "FLUVOXAMINE-SPECIFIC. Fluvoxamine potently inhibits CYP1A2, the enzyme that metabolises caffeine. Patients should LIMIT coffee to 1–2 cups/day (<200 mg caffeine). Higher intake can cause caffeine toxicity (jitteriness, palpitations, insomnia, tremor). This is THE most distinctive patient-counselling point for fluvoxamine.",
    },
    {
      parameter: "Clozapine levels (if co-prescribed)",
      frequency: "Baseline clozapine level before starting fluvoxamine; recheck within 1 week of starting/adjusting fluvoxamine.",
      rationale:
        "FLUVOXAMINE-SPECIFIC. CYP1A2 inhibition can raise clozapine levels by 2–3×. Reduce clozapine dose to ~1/3 of original when starting fluvoxamine. Risk of agranulocytosis, seizures, sedation, and hypotension from clozapine toxicity.",
    },
    {
      parameter: "Theophylline level (if co-prescribed)",
      frequency: "Baseline; recheck within 3–5 days of starting fluvoxamine.",
      rationale:
        "FLUVOXAMINE-SPECIFIC. CYP1A2 inhibition raises theophylline levels → toxicity (seizures, arrhythmia, nausea). Reduce theophylline dose by 2/3 when starting fluvoxamine.",
    },
    {
      parameter: "INR (if on warfarin)",
      frequency: "Baseline INR; recheck within 3–5 days of starting/stopping fluvoxamine.",
      rationale:
        "FLUVOXAMINE-SPECIFIC. CYP1A2/2C19 inhibition raises warfarin levels + platelet serotonin depletion → DOUBLE bleeding risk. Monitor closely.",
    },
    {
      parameter: "Serum sodium",
      frequency: "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale: "SSRIs cause SIADH in ~0.5–1% of patients. Highest risk in elderly females.",
    },
    {
      parameter: "LFTs",
      frequency: "Baseline; only if clinically indicated thereafter.",
      rationale: "Hepatotoxicity is rare but reported with fluvoxamine. Monitor for jaundice, fatigue, dark urine.",
    },
    {
      parameter: "Response assessment (Y-BOCS for OCD; PHQ-9 / GAD-7 for depression/anxiety)",
      frequency: "Baseline, week 4, week 8, week 12, then every 3 months.",
      rationale:
        "Quantifies response. For OCD, ≥25–35% reduction in Y-BOCS = response; Y-BOCS <8 = remission. OCD response is slower than depression — wait until 10–12 weeks at target dose before declaring failure.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism: "MAOIs inhibit serotonin breakdown. Combining with SERT blockade causes massive serotonergic excess → serotonin syndrome.",
      action: "Absolute contraindication. Wait 14 days after stopping MAOI before starting fluvoxamine; 14 days after stopping fluvoxamine before starting MAOI.",
    },
    {
      drug: "Tizanidine",
      severity: "contraindicated",
      mechanism:
        "FLUVOXAMINE-SPECIFIC. Fluvoxamine potently inhibits CYP1A2, the primary metabolic pathway for tizanidine. Plasma levels of tizanidine rise up to ~10-fold → severe hypotension, bradycardia, syncope.",
      action: "CONTRAINDICATED — never combine. This is the classic fluvoxamine interaction. Switch tizanidine to baclofen or use a different SSRI.",
    },
    {
      drug: "Thioridazine",
      severity: "contraindicated",
      mechanism: "Fluvoxamine inhibits CYP2D6 and CYP1A2, both involved in thioridazine metabolism → marked QTc prolongation → torsades de pointes.",
      action: "Never combine.",
    },
    {
      drug: "Pimozide",
      severity: "contraindicated",
      mechanism: "CYP inhibition by fluvoxamine raises pimozide levels → QTc prolongation → torsades de pointes.",
      action: "Never combine.",
    },
    {
      drug: "Alosetron",
      severity: "contraindicated",
      mechanism: "Alosetron is metabolised by CYP1A2. Fluvoxamine potently inhibits CYP1A2 → massive rise in alosetron levels → fatal constipation and ischaemic colitis risk.",
      action: "Never combine.",
    },
    {
      drug: "Clozapine",
      severity: "major",
      mechanism:
        "FLUVOXAMINE-SPECIFIC. Clozapine is metabolised primarily by CYP1A2. Fluvoxamine potently inhibits CYP1A2 → plasma clozapine levels rise 2–3× → risk of agranulocytosis, seizures, sedation, hypotension, sialorrhoea.",
      action: "REDUCE CLOZAPINE DOSE TO APPROXIMATELY 1/3 OF ORIGINAL when starting fluvoxamine. Check clozapine levels within 1 week. Monitor for toxicity. The combination is sometimes used intentionally in schizophrenia with comorbid OCD — but only with clozapine dose reduction.",
    },
    {
      drug: "Caffeine (coffee, tea, energy drinks, some analgesics)",
      severity: "major",
      mechanism:
        "FLUVOXAMINE-SPECIFIC. Caffeine is metabolised by CYP1A2. Fluvoxamine potently inhibits CYP1A2 → caffeine clearance falls by ~80% → caffeine accumulates → jitteriness, palpitations, insomnia, tremor, anxiety.",
      action: "COUNSEL PATIENT TO LIMIT CAFFEINE TO <200 mg/day (1–2 cups of coffee). This is the single most distinctive fluvoxamine patient-education point. Switch to decaf where possible.",
    },
    {
      drug: "Theophylline",
      severity: "major",
      mechanism:
        "FLUVOXAMINE-SPECIFIC. Theophylline is metabolised by CYP1A2. Fluvoxamine potently inhibits CYP1A2 → theophylline levels rise 2–3× → theophylline toxicity (seizures, arrhythmia, nausea, hypokalaemia).",
      action: "REDUCE THEOPHYLLINE DOSE BY 2/3 when starting fluvoxamine. Check theophylline levels within 3–5 days. Consider switching to montelukast or inhaled corticosteroid for asthma.",
    },
    {
      drug: "Warfarin",
      severity: "major",
      mechanism:
        "FLUVOXAMINE-SPECIFIC DOUBLE RISK: (1) CYP1A2/2C19 inhibition raises warfarin levels; (2) platelet serotonin depletion impairs clotting. Combined → markedly increased INR and bleeding risk.",
      action: "Monitor INR closely (within 3–5 days of starting/stopping fluvoxamine). Anticipate warfarin dose reduction. Consider DOAC instead if appropriate.",
    },
    {
      drug: "Ramelteon (and tasimelteon)",
      severity: "major",
      mechanism: "Ramelteon is metabolised primarily by CYP1A2. Fluvoxamine potently inhibits CYP1A2 → ramelteon AUC increases ~190× → profound and prolonged sedation.",
      action: "Avoid combination. If a melatonin agonist is needed, consider melatonin itself (different metabolism) rather than ramelteon.",
    },
    {
      drug: "Omeprazole (and other CYP2C19-metabolised PPIs)",
      severity: "moderate",
      mechanism: "Fluvoxamine inhibits CYP2C19 → raises omeprazole levels. Long-term high omeprazole levels increase risk of hypomagnesaemia, fractures, B12 deficiency, and interstitial nephritis.",
      action: "Monitor if long-term combination. Consider pantoprazole (less CYP2C19-dependent) as alternative PPI.",
    },
    {
      drug: "Tramadol",
      severity: "major",
      mechanism: "Tramadol is a weak serotonin–norepinephrine reuptake inhibitor. Combined with SSRIs, raises serotonin syndrome risk. Also lowers seizure threshold. Fluvoxamine also inhibits CYP2D6 → reduces conversion of tramadol to active O-desmethyltramadol.",
      action: "Avoid if possible. If unavoidable, use lowest tramadol dose, monitor for serotonin syndrome AND for inadequate analgesia.",
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
      mechanism: "SSRIs deplete platelet serotonin → impaired aggregation. NSAIDs cause GI mucosal damage. Combined → ~6× increased risk of upper GI bleeding.",
      action: "Co-prescribe gastroprotection (PPI) in elderly or those with prior GI bleed. Consider paracetamol instead.",
    },
    {
      drug: "St John's Wort",
      severity: "major",
      mechanism: "Herbal SSRI. Additive serotonergic effect.",
      action: "Avoid combination — serotonin syndrome risk.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Fluvoxamine is NOT the SSRI of choice in pregnancy — sertraline is preferred, with the largest safety database and lowest milk/plasma ratio. Limited prospective data exist for fluvoxamine specifically because it is far less prescribed than sertraline, fluoxetine, or paroxetine. No clear teratogenic signal has emerged, but the database is smaller. Third-trimester use is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding) in ~30% of exposed neonates — usually self-limited. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks. If a patient becomes pregnant on fluvoxamine, do not stop abruptly — discuss switching to sertraline or continuing with monitoring.",
    lactation:
      "Fluvoxamine is excreted into breast milk in small amounts. Data are more limited than for sertraline, fluoxetine, or paroxetine. The relative infant dose is ~1% or less, and no adverse effects on infant development have been demonstrated — but the database is smaller. Sertraline is the SSRI of choice in breastfeeding. If a mother is well-controlled on fluvoxamine, continuing breastfeeding is reasonable with monitoring for infant irritability or feeding issues.",
  },

  renalAdjustment:
    "No dose adjustment required in mild–moderate renal impairment. Use cautiously in severe renal impairment (CrCl <20 mL/min) — limited data; start at low dose and titrate slowly.",

  hepaticAdjustment:
    "Reduce starting dose by 50% in hepatic impairment (Child-Pugh A/B): start at 25 mg daily, titrate slowly. Avoid in severe hepatic impairment (Child-Pugh C) if possible. Both fluvoxamine clearance is reduced and half-life is prolonged in cirrhosis.",

  /* ---- Education ---- */
  patientExplanation:
    "Fluvoxamine is a medicine that helps the brain keep more of a chemical called serotonin available for longer. Serotonin is one of the chemicals your brain uses to regulate mood, anxiety, sleep, and obsessive thoughts. By keeping more of it active between nerve cells, fluvoxamine helps your brain's mood-regulation and worry-control systems work better — but this doesn't happen immediately. Most people feel some side effects in the first week or two (often nausea, sleepiness, or vivid dreams — fluvoxamine tends to be more sedating and more nausea-inducing than some other SSRIs) before the benefit builds up over 4–8 weeks (and 8–12 weeks for OCD). FLUVOXAMINE HAS A UNIQUE INTERACTION WITH CAFFEINE: it slows your body's breakdown of caffeine, so your normal cup of coffee can build up and cause jitteriness, palpitations, or insomnia. You should LIMIT COFFEE to 1–2 cups per day while on fluvoxamine. Also tell your doctor about ALL other medications you take — fluvoxamine interacts with several common drugs including theophylline (for asthma), clozapine (for schizophrenia), warfarin (blood thinner), and tizanidine (muscle relaxant). It is not addictive in the way that alcohol or benzodiazepines are, but stopping suddenly can cause uncomfortable withdrawal-like symptoms — so always come off it slowly with your doctor's guidance.",

  patientEducationPoints: [
    "Some early changes can happen within 1–2 weeks, but clearer benefit often takes 4–6 weeks for depression/anxiety and 8–12 weeks for OCD. Don't stop early just because you don't feel better yet.",
    "LIMIT CAFFEINE to 1–2 cups of coffee per day (<200 mg total caffeine) while on fluvoxamine. Fluvoxamine slows your body's breakdown of caffeine, so normal amounts can build up and cause jitteriness, palpitations, insomnia, or tremor. Switch to decaf where possible.",
    "Tell your doctor about ALL other medications you take BEFORE starting fluvoxamine — including over-the-counter pain medicines, asthma medicines (theophylline), blood thinners (warfarin), muscle relaxants (tizanidine), and herbal products. Fluvoxamine interacts with more drugs than most antidepressants.",
    "Take fluvoxamine AT NIGHT if it makes you sleepy (most common), or in the morning if it makes you feel more alert. Take WITH FOOD to reduce nausea — fluvoxamine has more stomach side effects than other SSRIs.",
    "Fluvoxamine is more SEDATING than most other SSRIs — sleepiness is common, especially in the first 2 weeks. Don't drive or operate machinery until you know how it affects you.",
    "Do not stop suddenly without medical guidance. Stopping abruptly can cause discontinuation symptoms ('brain zaps', dizziness, irritability, nausea). Your clinician will recommend a gradual taper over several weeks.",
    "Alcohol can worsen sleepiness and mood symptoms. Best avoided or minimised, especially during the first month.",
    "Watch for warning signs in the first month: new or worsening agitation, irritability, anxiety, or suicidal thoughts — particularly if you're under 25. Contact your clinician immediately.",
    "Seek emergency help for signs of serotonin syndrome: high fever, confusion, sweating, agitation, tremor, muscle rigidity or twitching, fast heartbeat.",
    "If you miss a dose, take it when you remember unless it's within 8 hours of your next dose — in that case, skip the missed dose. Do not double up.",
  ],

  clinicalPearls: [
    "Fluvoxamine is the 'OCD SSRI' — the only SSRI FDA-approved for OCD in BOTH adults AND children (≥8 years). When OCD presents in a child, fluvoxamine (≥8 yrs), sertraline (≥6 yrs), or fluoxetine (≥7 yrs) are the SSRIs to consider.",
    "FLUVOXAMINE IS FDA-APPROVED ONLY FOR OCD in the United States — NOT for depression. It IS approved for depression in Europe (Faverin) and Australia. Many clinicians forget this distinction.",
    "Fluvoxamine is the MOST POTENT CYP1A2 INHIBITOR among SSRIs. ALWAYS ask new patients about CAFFEINE intake, and about theophylline, clozapine, tizanidine, and warfarin use before prescribing. This is the single most testable fluvoxamine fact.",
    "COUNSEL EVERY PATIENT to LIMIT COFFEE to 1–2 cups/day while on fluvoxamine. Caffeine toxicity (jitteriness, palpitations, insomnia) from unrecognised CYP1A2 inhibition is a common real-world reason for early discontinuation.",
    "CLOZAPINE + FLUVOXAMINE is a deliberate and useful combination in schizophrenia with comorbid OCD — but the clozapine dose MUST be reduced to approximately 1/3 of the original dose. Check clozapine levels within 1 week. Without this dose reduction, the patient is at risk of clozapine toxicity (seizures, sedation, agranulocytosis).",
    "Fluvoxamine is the MOST SEDATING SSRI after paroxetine — give at night. This can be an ADVANTAGE in OCD patients with comorbid insomnia, where another SSRI's activating effect would worsen sleep.",
    "Fluvoxamine has the HIGHEST GI side-effect rate among SSRIs (nausea in >40% at initiation). Always take WITH FOOD and titrate slowly (start 25 mg, increase by 25 mg every 4–7 days). Luvox CR provides a smoother profile.",
    "σ1 (sigma-1) receptor AGONISM is shared only with sertraline among SSRIs and may explain fluvoxamine's efficacy in anxiety disorders with prominent somatic symptoms. The σ1 agonism is also being investigated for anti-inflammatory effects.",
    "FLUVOXAMINE IS BEING STUDIED FOR COVID-19 — the σ1 receptor agonism may prevent cytokine storm by modulating endoplasmic reticulum stress and inflammation. Multiple trials (including the TOGETHER trial) have explored this; not an approved indication but a high-profile research area.",
    "No active metabolite and a short half-life (15.6 hours) mean CLEANER PHARMACOKINETICS than fluoxetine (which has the long-lived norfluoxetine) — but ALSO means more bothersome discontinuation syndrome than fluoxetine. Never stop abruptly.",
  ],

  examPearls: [
    "FDA-approved ONLY for OCD (adults & ≥8 yrs paediatric) — NOT for depression in the US. (Approved for depression in Europe/Australia.) This is the most testable fluvoxamine fact.",
    "FLUVOXAMINE IS THE MOST POTENT CYP1A2 INHIBITOR AMONG SSRIs — signature interaction profile. CYP1A2 substrates: caffeine, theophylline, clozapine, tizanidine, ramelteon, warfarin (also CYP2C19).",
    "TIZANIDINE + FLUVOXAMINE = CONTRAINDICATED — severe hypotension and bradycardia from 10× rise in tizanidine levels. This is THE classic fluvoxamine contraindication.",
    "CLOZAPINE + FLUVOXAMINE = MAJOR — reduce clozapine dose to ~1/3 of original. Risk: seizures, agranulocytosis, sedation. Sometimes used DELIBERATELY in schizophrenia + OCD comorbidity (with dose adjustment).",
    "CAFFEINE + FLUVOXAMINE = MAJOR — limit to <200 mg/day (1–2 cups of coffee). Caffeine toxicity (jitteriness, palpitations, insomnia). THE most distinctive patient-counselling point.",
    "THEOPHYLLINE + FLUVOXAMINE = MAJOR — reduce theophylline dose by 2/3. Risk: seizures, arrhythmia.",
    "Most SEDATING SSRI after paroxetine — give at night. (Hierarchy: paroxetine > fluvoxamine > citalopram/escitalopram > sertraline > fluoxetine.)",
    "σ1 (sigma-1) receptor AGONIST — shared with sertraline among SSRIs. Contributes anxiolysis; being studied for COVID-19 cytokine storm prevention.",
    "NO ACTIVE METABOLITE (unlike fluoxetine's norfluoxetine). Cleaner pharmacokinetics but more discontinuation syndrome than fluoxetine.",
    "Half-life ~15.6 hours — short, between paroxetine (21 h) and sertraline (26 h). BID dosing for IR; once-daily for Luvox CR.",
    "MAOI washout = 14 days (same as sertraline, escitalopram, paroxetine; shorter than fluoxetine's 5 weeks).",
    "Preferred for PAEDIATRIC OCD (≥8 yrs) — one of only three SSRIs approved for paediatric OCD (with sertraline ≥6 yrs and fluoxetine ≥7 yrs).",
    "Highest GI side-effect rate among SSRIs — nausea in >40% at initiation. Take with food, titrate slowly.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "FLUVOXAMINE — Five Signature Features",
      trick:
        "FLUid interactions (CYP1A2) · Luvox for OCD (only FDA use in US) · Vexing sedation (most sedating after paroxetine) · O — Omeprazole interaction (CYP2C19) · X — Xanthines (caffeine, theophylline) inhibited · A — Alosetron contraindicated · M — MAOIs contraindicated · I — Interacts with clozapine (reduce to 1/3) · No active metabolite · Es最适合 for paediatric OCD (≥8 yrs)",
      remembers:
        "Fluvoxamine's complete identity: potent CYP1A2 inhibitor, OCD-only US indication, sedating, multiple specific interactions, no active metabolite, paediatric OCD niche.",
    },
    {
      title: "CYP1A2 — 'Caffeine, Theophylline, Clozapine, Tizanidine, Ramelteon' (CTCTR)",
      trick:
        "'Coffee The Clerk To Reduce' — Caffeine · Theophylline · Clozapine · Tizanidine (Contraindicated!) · Ramelteon",
      remembers:
        "The five CYP1A2 substrates that fluvoxamine potently inhibits. Tizanidine is CONTRAINDICATED; the others require MAJOR dose reduction (clozapine → 1/3, theophylline → 2/3 reduction, caffeine → limit to 1–2 cups/day, ramelteon → avoid).",
    },
    {
      title: "Tizanidine 'T-Zero' — Tizanidine + fluvoxamine = Toxic",
      trick:
        "TIZanidine = TOXIC with fluvoxamine (T-Z). 10× rise in tizanidine levels → hypotension, bradycardia, syncope. CONTRAINDICATED.",
      remembers:
        "Tizanidine is the single drug CONTRAINDICATED with fluvoxamine. This is THE classic fluvoxamine exam question.",
    },
    {
      title: "Clozapine 1/3 Rule — 'Cut Clozapine to a Third'",
      trick:
        "Fluvoxamine + Clozapine → Cut Clozapine to a third (1/3) of original dose. 'C + C = 1/3'.",
      remembers:
        "When starting fluvoxamine in a patient on clozapine, reduce clozapine to ~1/3 of original dose and check levels within 1 week. Useful combination in schizophrenia + OCD but only with dose adjustment.",
    },
    {
      title: "Caffeine Limit — 'One or Two Cups, Not a Few'",
      trick:
        "Fluvoxamine + Caffeine = 'One or Two Cups, Not a Few' — limit to 1–2 cups/day (<200 mg). CYP1A2 inhibition slows caffeine clearance.",
      remembers:
        "The single most distinctive patient-counselling point for fluvoxamine: caffeine accumulates and causes jitteriness, palpitations, insomnia. Switch to decaf where possible.",
    },
    {
      title: "OCD-Only in the US — 'Luvox Loves OCD, Not Depression'",
      trick:
        "Luvox Loves OCD — Only FDA use in the US is OCD (adults & ≥8 yrs). Luvox does NOT love depression (in the US — though it does in Europe).",
      remembers:
        "Fluvoxamine is FDA-approved ONLY for OCD in the US (despite being approved for depression in Europe/Australia). Common exam trap: do NOT list depression as an FDA indication.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: SSRI — selectively blocks SERT → ↑ synaptic serotonin. UNIQUE among SSRIs: also a σ1 receptor AGONIST (shared with sertraline).",
    "FDA indication: ONLY OCD (adults & ≥8 yrs). NOT approved for depression in the US (but approved in Europe/Australia). Off-label: social anxiety, panic, PTSD, eating disorders.",
    "Mechanism: Acute SERT blockade + σ1 agonism (hours) → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ BDNF + neurogenesis (2–6 weeks; OCD 8–12 weeks).",
    "Signature: MOST POTENT CYP1A2 INHIBITOR among SSRIs. Interacts with caffeine, theophylline, clozapine, tizanidine, ramelteon, warfarin.",
    "TIZANIDINE = CONTRAINDICATED (10× rise in tizanidine → severe hypotension, bradycardia). CLOZAPINE = MAJOR (reduce to 1/3 dose). THEOPHYLLINE = MAJOR (reduce by 2/3). CAFFEINE = MAJOR (limit to <200 mg/day).",
    "Other contraindications: MAOIs (14-day washout), thioridazine (QTc), pimozide (QTc), alosetron (CYP1A2 → ischaemic colitis), hypersensitivity.",
    "Half-life 15.6 h (short — between paroxetine 21 h and sertraline 26 h). NO active metabolite (cleaner PK than fluoxetine). IR dosing BID; Luvox CR once daily.",
    "Most sedating SSRI after paroxetine — give AT NIGHT. Highest GI side-effect rate among SSRIs (nausea >40%) — take WITH FOOD, titrate slowly (25 mg → 50 → 100 → 200 → 300 max).",
    "Common side effects: nausea (very common, >40%), somnolence (very common, ~20%), sexual dysfunction, diarrhoea, sweating, headache, insomnia, asthenia.",
    "Serious: serotonin syndrome, SIADH (elderly), suicidality <25 (black box), bleeding (platelet — DOUBLE risk with warfarin), activation of mania, discontinuation syndrome (short half-life → moderate), hepatotoxicity (rare).",
    "Pregnancy: NOT SSRI of choice (sertraline preferred — larger safety database). Lactation: limited data; sertraline preferred.",
    "Being studied for COVID-19 (σ1 agonism may prevent cytokine storm — TOGETHER trial). Useful in schizophrenia + OCD comorbidity (with clozapine dose reduction). Often overlooked due to interaction profile but useful when sedation is desired.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title:
        "Schizophrenia with comorbid OCD on clozapine — using fluvoxamine with mandatory clozapine dose reduction and caffeine counselling",
      presentation:
        "A 34-year-old man with treatment-resistant schizophrenia on clozapine develops distressing obsessive–compulsive symptoms (contamination fears, repeating rituals) that are unresponsive to CBT. The psychiatry team considers adding fluvoxamine — a deliberate combination that requires both a clozapine dose reduction and intensive caffeine counselling.",
      history:
        "Rahul, a 34-year-old man, was diagnosed with paranoid schizophrenia at age 21. After failing two atypical antipsychotics (risperidone, olanzapine) due to inadequate response, he was started on clozapine 4 years ago and titrated to 400 mg/day, achieving good control of positive symptoms (no hallucinations since month 4 of clozapine). His most recent clozapine trough level was 0.62 mg/L (therapeutic 0.35–0.50; mildly high but tolerated). For the past 18 months he has developed progressively distressing intrusive thoughts about contamination with 'germs' from public surfaces, accompanied by 2–3 hours/day of handwashing (until skin is macerated), repeating prayers silently to neutralise the thoughts, and avoiding door handles. He recognises the thoughts as his own and excessive (ego-dystonic) — distinguishing OCD from schizophrenia negative symptoms. Y-BOCS score 27 (severe). He has had 12 sessions of Exposure and Response Prevention (ERP) therapy with limited benefit — partly because intrusive thoughts escalate so fast he cannot complete exposures. He drinks 4–5 cups of strong filter coffee per day (long-standing habit; helps with clozapine-induced sedation). No other medical comorbidities. BMI 27. Non-smoker (smoking induces CYP1A2 and lowers clozapine levels — he never smoked). ECG: QTc 430 ms (normal). FBC normal (clozapine monitoring every 2 weeks ongoing — ANC stable).",
      examination:
        "Alert, oriented, cooperative but visibly distressed by contamination fears — declined to shake hands. Speech normal. Mood '6/10' but anxious. No active psychotic symptoms. No thought disorder. Cognitively intact (MoCA 27/30). Hand inspection: macerated, erythematous, fissured dorsa of both hands from repeated washing. BMI 27. BP 112/70, HR 78. No neurological deficit. ECG: sinus rhythm, QTc 430 ms (normal). Labs: FBC normal (ANC 4.2 × 10⁹/L — within clozapine monitoring range), clozapine trough level 0.62 mg/L, LFTs normal, TSH normal, serum sodium 140 mmol/L, ECG QTc 430 ms.",
      diagnosis:
        "Schizophrenia (stable on clozapine) WITH COMORBID Obsessive-Compulsive Disorder, severe (DSM-5 300.3; Y-BOCS 27). Differential: schizophrenia spectrum obsessive-compulsive symptoms (less likely given ego-dystonic nature, classic contamination theme, and full insight); drug-induced OCD from clozapine itself (clozapine can worsen OCD symptoms in ~25% of patients — but here symptoms progressed independent of clozapine dose changes); generalised anxiety (does not capture the obsessional quality).",
      rationale:
        "Fluvoxamine was chosen because: (1) SSRI is first-line pharmacotherapy for OCD; (2) FLUVOXAMINE HAS THE STRONGEST EVIDENCE FOR OCD-SPECIFIC EFFICACY among SSRIs and is FDA-approved for OCD; (3) the σ1 receptor agonism may help with the anxiety component; (4) sedating profile is well-tolerated in a patient already sedated by clozapine. CRITICAL CAVEATS: (a) Fluvoxamine potently inhibits CYP1A2 → clozapine levels will rise 2–3×, risking seizures, agranulocytosis, sedation, and hypotension — clozapine dose MUST be reduced to ~1/3 before adding fluvoxamine; (b) Fluvoxamine will also raise caffeine levels ~5× — Rahul's 4–5 cups/day of coffee will produce caffeine toxicity (jitteriness, palpitations, insomnia, tremor, anxiety) — caffeine intake MUST be cut to 1–2 cups/day; (c) ERP therapy should be intensified once fluvoxamine reduces obsession intensity. Clomipramine (TCA) was considered as an alternative but rejected due to greater QTc prolongation risk combined with clozapine. Sertraline was considered but fluvoxamine's OCD-specific evidence and sedating profile were preferred.",
      management:
        "STEP 1 — CLOZAPINE DOSE REDUCTION: Clozapine reduced from 400 mg/day to 150 mg/day (approximately 1/3) over 1 week. STEP 2 — CAFFEINE RESTRICTION: Rahul counselled to cut coffee from 4–5 cups/day to 1–2 cups/day, switching the rest to decaf. Warned about caffeine toxicity symptoms (jitteriness, palpitations, insomnia). STEP 3 — FLUVOXAMINE INITIATION: Started fluvoxamine 25 mg at NIGHT, titrated by 25 mg every 5–7 days to target 200 mg/day (100 mg BID IR, or 200 mg once daily CR). STEP 4 — MONITORING: Clozapine trough level rechecked within 1 week of starting fluvoxamine (target 0.35–0.50 mg/L); FBC/ANC monitoring continued per clozapine protocol (now weekly during the combination titration); ECG within 2 weeks (QTc); LFTs at baseline and 1 month; Y-BOCS at baseline, 4, 8, 12 weeks; mood and suicidality weekly × 1 month. STEP 5 — ERP INTENSIFICATION: Referral for 16–20 sessions of ERP once fluvoxamine reaches target dose and obsessions begin to attenuate. STEP 6 — SAFETY: Tele-MANAS 14416 + crisis plan documented.",
      outcome:
        "Week 1: tolerated clozapine reduction to 150 mg/day and fluvoxamine 25 mg/day at night. Clozapine trough 0.48 mg/L (back in therapeutic range — fluvoxamine inhibition offset the dose reduction perfectly). Mild nausea (managed with food). Caffeine reduced to 2 cups/day with decaf substitution — jitteriness resolved. Week 4: fluvoxamine at 100 mg BID. Y-BOCS 23 (15% reduction — early response). No recurrence of psychotic symptoms. No seizures. Clozapine level stable at 0.45 mg/L. ANC stable. Week 8: fluvoxamine at 200 mg/day. Y-BOCS 16 (41% reduction — treatment response). Handwashing duration down from 2–3 h to 30 min/day; hands healing. ERP sessions begun and Rahul can now complete exposures. Week 12: Y-BOCS 11 (59% reduction). Handwashing 15 min/day. Door-handle avoidance resolved. Mood '8/10'. Plan: continue fluvoxamine 200 mg/day + clozapine 150 mg/day + ERP for at least 12 more months. Rahul's coffee intake stable at 2 cups/day with decaf. No clozapine toxicity, no seizures, no agranulocytosis.",
      teachingPoints: [
        "FLUVOXAMINE + CLOZAPINE is a deliberate and useful combination in schizophrenia with comorbid OCD — BUT clozapine MUST be reduced to ~1/3 of original dose because fluvoxamine potently inhibits CYP1A2 (clozapine's primary metabolic pathway).",
        "Caffeine counselling is MANDATORY when starting fluvoxamine — caffeine levels rise ~5× via CYP1A2 inhibition. Patients should limit to 1–2 cups of coffee per day. This is THE most distinctive fluvoxamine patient-education point.",
        "Clozapine itself can worsen OCD symptoms in ~25% of patients with schizophrenia — distinguish clozapine-induced OCD from comorbid primary OCD by assessing whether OCD symptoms worsened with clozapine initiation (drug-induced) or emerged independently (comorbid).",
        "Distinguishing OCD from schizophrenia-spectrum obsessions: OCD obsessions are EGO-DYSTONIC (patient recognises them as excessive); schizophrenia obsessions are often EGO-SYNTONIC or delusional. Rahul retained full insight — favouring comorbid OCD.",
        "Fluvoxamine is preferred over clomipramine in this case because clomipramine prolongs QTc — additive with clozapine's QTc effect. Always check ECG when combining any QTc-prolonging drugs.",
        "Y-BOCS is the gold-standard OCD severity scale. ≥25–35% reduction = response; Y-BOCS <8 = remission. OCD response is SLOWER than depression — wait until 10–12 weeks at target dose before declaring failure.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Fluvoxamine vs Sertraline vs Fluoxetine vs Escitalopram",
      primaryDrug: "Fluvoxamine",
      rows: [
        {
          attribute: "Half-life",
          primaryValue: "15.6 hours (short — between paroxetine and sertraline)",
          comparisons: [
            { drug: "Sertraline", value: "26 hours" },
            { drug: "Fluoxetine", value: "1–4 days (parent) + 4–9 days (norfluoxetine) — LONGEST" },
            { drug: "Escitalopram", value: "27–32 hours" },
          ],
        },
        {
          attribute: "Active metabolite",
          primaryValue: "NONE — cleaner PK than fluoxetine (no norfluoxetine accumulation)",
          comparisons: [
            { drug: "Sertraline", value: "N-desmethylsertraline (1/10th potency, minimal contribution)" },
            { drug: "Fluoxetine", value: "Norfluoxetine (equally potent, 4–9 day half-life)" },
            { drug: "Escitalopram", value: "S-demethylcitalopram (weak activity)" },
          ],
        },
        {
          attribute: "FDA indications (US)",
          primaryValue: "ONLY OCD (adults & ≥8 yrs) — NOT depression",
          comparisons: [
            { drug: "Sertraline", value: "6: MDD, OCD, Panic, PTSD, Social Anxiety, PMDD" },
            { drug: "Fluoxetine", value: "5: MDD (≥8 yrs), OCD (≥7 yrs), Bulimia, Panic, PMDD" },
            { drug: "Escitalopram", value: "2: MDD, GAD (≥12 yrs)" },
          ],
        },
        {
          attribute: "CYP inhibition (signature)",
          primaryValue: "MOST POTENT CYP1A2 INHIBITOR in the SSRI class — signature interactions with caffeine, theophylline, clozapine, tizanidine, warfarin, ramelteon",
          comparisons: [
            { drug: "Sertraline", value: "Mild CYP2D6 inhibitor (less than fluoxetine/paroxetine)" },
            { drug: "Fluoxetine", value: "Strong CYP2D6 inhibitor (thioridazine, pimozide, codeine)" },
            { drug: "Escitalopram", value: "Minimal — lowest interaction profile of any SSRI" },
          ],
        },
        {
          attribute: "Sedation vs activation",
          primaryValue: "MOST SEDATING after paroxetine — give at night",
          comparisons: [
            { drug: "Sertraline", value: "Mildly activating — morning dosing" },
            { drug: "Fluoxetine", value: "MOST ACTIVATING — morning dosing" },
            { drug: "Escitalopram", value: "Neutral" },
          ],
        },
        {
          attribute: "GI side-effect rate",
          primaryValue: "HIGHEST among SSRIs (nausea >40% at initiation) — take with food",
          comparisons: [
            { drug: "Sertraline", value: "Moderate nausea rate (~25%)" },
            { drug: "Fluoxetine", value: "Moderate (~20–25%)" },
            { drug: "Escitalopram", value: "Lowest GI rate among SSRIs" },
          ],
        },
        {
          attribute: "σ1 (sigma-1) receptor activity",
          primaryValue: "AGONIST (shared with sertraline) — anxiolytic, possible anti-inflammatory",
          comparisons: [
            { drug: "Sertraline", value: "AGONIST — only other SSRI with this property" },
            { drug: "Fluoxetine", value: "No σ1 activity" },
            { drug: "Escitalopram", value: "No σ1 activity" },
          ],
        },
        {
          attribute: "Pregnancy safety",
          primaryValue: "NOT SSRI of choice (sertraline preferred) — limited database",
          comparisons: [
            { drug: "Sertraline", value: "SSRI OF CHOICE — best safety database, lowest milk/plasma ratio" },
            { drug: "Fluoxetine", value: "Safe but long half-life → prolonged neonatal exposure" },
            { drug: "Escitalopram", value: "Safe — reasonable second-line after sertraline" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "MODERATE — short half-life means more bothersome than fluoxetine, less than paroxetine",
          comparisons: [
            { drug: "Sertraline", value: "Mild–moderate" },
            { drug: "Fluoxetine", value: "MILDEST (self-tapers via long half-life)" },
            { drug: "Escitalopram", value: "Mild–moderate" },
          ],
        },
        {
          attribute: "Unique clinical niche",
          primaryValue: "Paediatric OCD (≥8 yrs); schizophrenia + OCD on clozapine (with dose reduction); OCD with insomnia; COVID-19 research (σ1)",
          comparisons: [
            { drug: "Sertraline", value: "Pregnancy/lactation SSRI of choice; PTSD (only SSRI approved)" },
            { drug: "Fluoxetine", value: "Bulimia (only SSRI); paediatric depression (≥8 yrs); adherence-poor patients (forgiving)" },
            { drug: "Escitalopram", value: "Lowest interaction profile; complex regimens; elderly" },
          ],
        },
      ],
      takeaway:
        "Fluvoxamine = the 'OCD SSRI' with a unique but demanding interaction profile. Choose fluvoxamine for: paediatric OCD (≥8 yrs), schizophrenia + OCD comorbidity (with clozapine dose reduction), OCD with insomnia (sedation is desired), and when σ1 agonism may help anxiety. AVOID fluvoxamine in: patients on tizanidine (contraindicated), heavy caffeine users unwilling to cut intake, patients on theophylline, complex regimens with CYP1A2 substrates, and pregnancy (prefer sertraline). Sertraline remains the all-rounder; fluoxetine for adherence-poor/lethargic/bulimia; escitalopram for the elderly and complex regimens.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute SERT blockade + σ1 engagement",
      description:
        "Fluvoxamine blocks the serotonin transporter within hours and engages σ1 receptors in the endoplasmic reticulum. Synaptic serotonin rises. Side effects (nausea, somnolence, headache) often appear here — fluvoxamine's GI side-effect rate is the highest among SSRIs.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "5-HT1A autoreceptor desensitisation begins",
      description:
        "Somatodendritic 5-HT1A autoreceptors in the raphe nuclei begin to desensitise. Serotonin release toward the prefrontal cortex and cortico-striatal-thalamo-cortical loops gradually increases. Sleep and appetite often improve first — before mood or obsessional thinking.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Neuroadaptive changes",
      description:
        "BDNF expression rises in the hippocampus. Postsynaptic receptor downregulation occurs. Early mood and anxiety improvement becomes noticeable. Sexual side effects typically emerge here. OCD symptoms may BEGIN to attenuate but full anti-obsessional effect is still weeks away.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression, if used off-label)",
      description:
        "Steady-state serotonin levels and full downstream adaptations achieved. Mood and anxiety typically reach maximum improvement for depression. Side effects usually stabilise. OCD response is still incomplete — patience required.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 8–12",
      title: "Full therapeutic effect (OCD) — slower than depression",
      description:
        "OCD response is SLOWER than depression — full anti-obsessional effect typically requires 8–12 weeks at TARGET dose (often 200–300 mg/day). Counsel patients accordingly. Y-BOCS assessment at week 12 determines response vs need for dose escalation or augmentation.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months 3–6",
      title: "Maintenance & relapse prevention",
      description:
        "Continued neuroplastic changes. Continue treatment for AT LEAST 1–2 years after OCD remission (OCD has very high relapse rates on early discontinuation). For recurrent depression or chronic anxiety, longer-term (often indefinite) treatment may be recommended.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Tapered withdrawal",
      description:
        "Sudden cessation causes discontinuation syndrome (dizziness, 'brain zaps', nausea, irritability). Fluvoxamine's short half-life (15.6 h) places it among the SSRIs with MORE bothersome discontinuation — taper over at least 4 weeks. Substituting fluoxetine (long half-life) for the last few weeks can smooth the discontinuation.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why can't I drink much coffee while on fluvoxamine?",
      answer:
        "Fluvoxamine strongly slows your body's breakdown of caffeine by inhibiting an enzyme called CYP1A2 in your liver. Caffeine that would normally be cleared in a few hours can build up over the day, causing jitteriness, palpitations, insomnia, tremor, and anxiety — like drinking far more coffee than you actually are. We recommend limiting coffee to 1–2 cups per day (under 200 mg of caffeine total) and switching to decaf for the rest. The same effect means you should also tell us about any other medicines you take (especially for asthma, blood thinning, or muscle spasms) — fluvoxamine interacts with several.",
    },
    {
      question: "Can I drink coffee at all on fluvoxamine?",
      answer:
        "Yes — most people tolerate 1–2 cups of coffee per day (under 200 mg of caffeine total) without problems. The key is to cut down from whatever you were drinking before. If you currently drink 4–5 cups, drop to 1–2 cups and switch the others to decaf. Watch for symptoms of caffeine build-up — jitteriness, palpitations, trouble sleeping, tremor — and cut down further if they occur. Energy drinks, strong tea, and some pain relievers also contain caffeine.",
    },
    {
      question: "Why is fluvoxamine only approved for OCD in the US — not for depression?",
      answer:
        "Fluvoxamine IS effective for depression and is approved for depression in Europe (sold as Faverin) and Australia. However, when the manufacturer sought FDA approval in the US, they pursued only the OCD indication (where fluvoxamine had particularly strong trial data in both adults and children). For various commercial and historical reasons, they never pursued a separate depression indication in the US. Many clinicians still use fluvoxamine off-label for depression — but it is not first-choice in the US because of its drug interaction profile and lack of FDA approval for depression. If you have depression, other SSRIs (sertraline, fluoxetine, escitalopram) are usually tried first.",
    },
    {
      question: "I'm on clozapine for schizophrenia and my doctor wants to add fluvoxamine for OCD. Why do I need to reduce my clozapine dose?",
      answer:
        "Fluvoxamine strongly inhibits the same liver enzyme (CYP1A2) that breaks down clozapine. If your clozapine dose stays the same, your clozapine blood levels will rise 2–3 times — putting you at risk of clozapine toxicity (seizures, dangerous sedation, very low blood pressure, and rarely a dangerous drop in white blood cells). To prevent this, your doctor will reduce your clozapine dose to about one-third of your current dose before or at the same time as starting fluvoxamine. You'll also need a clozapine blood level checked within a week. The combination can be very effective for schizophrenia with OCD — but only with the dose adjustment and close monitoring.",
    },
    {
      question: "Why does fluvoxamine make me sleepy?",
      answer:
        "Fluvoxamine is the most sedating SSRI after paroxetine — about 1 in 5 patients experience significant sleepiness, especially in the first 2 weeks. The exact mechanism isn't fully understood but is thought to relate to its effects on serotonin in sleep-regulating brain centres and its activity at the σ1 (sigma-1) receptor. For most people this is an advantage — we recommend taking fluvoxamine at night, and it can help with sleep if you have OCD with insomnia. If the sleepiness is severe or persists after 2–4 weeks, talk to your clinician — a different SSRI (sertraline, escitalopram) may be less sedating.",
    },
    {
      question: "How long does fluvoxamine take to work?",
      answer:
        "Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, but clearer mood benefit for depression/anxiety typically takes 4–6 weeks. For OCD, the anti-obsessional effect is SLOWER — full benefit usually requires 8–12 weeks at the target dose (often 200–300 mg/day). Don't stop early just because you don't feel better yet — OCD response especially requires patience.",
    },
    {
      question: "Is fluvoxamine addictive?",
      answer:
        "Fluvoxamine is not addictive in the way that alcohol, opioids, or benzodiazepines can be — it does not cause cravings, escalating use, or intoxication. However, stopping suddenly after several weeks of use can cause uncomfortable discontinuation symptoms (dizziness, 'brain zaps', nausea, irritability) — fluvoxamine's relatively short half-life makes this more likely than with fluoxetine. Always come off it slowly with your doctor's guidance.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Take the missed dose as soon as you remember, unless it's within 8 hours of your next scheduled dose — in that case, skip the missed dose and continue normally. Do not double up to make up for a missed dose. Because fluvoxamine has a relatively short half-life (15.6 hours), missing multiple doses in a row can trigger discontinuation symptoms — try to take it consistently at the same time each day.",
    },
  ],

  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source:
          "American Psychiatric Association Practice Guideline for the Treatment of Patients with Obsessive-Compulsive Disorder",
        section: "Pharmacotherapy section — SSRI dosing and trial duration for OCD",
      },
      {
        source: "NICE Clinical Guideline CG31 — Obsessive-compulsive disorder and body dysmorphic disorder: treatment",
        section: "Pharmacological treatment recommendations",
      },
      {
        source: "NICE Clinical Guideline CG91 — Depression in adults: recognition and management",
        section: "SSRI selection criteria (note: fluvoxamine not first-choice in UK)",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents (Fluvoxamine section; CYP1A2 inhibition; σ1 agonism)",
      },
      {
        source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
        section: "Section V — Pharmacotherapy of Mood Disorders and OCD",
      },
      {
        source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition",
        section: "Chapter 36 — Psychopharmacology; OCD treatment algorithm",
      },
    ],
    trials: [
      {
        source:
          "Goodman WK, Price LH, Rasmussen SA, et al. Efficacy of fluvoxamine in obsessive-compulsive disorder. A double-blind comparison with placebo. Arch Gen Psychiatry 1989;46(1):36-44.",
        section: "Pivotal fluvoxamine OCD trial — basis for FDA approval",
      },
      {
        source:
          "Riddle MA, Scahill L, King RA, et al. Double-blind, crossover trial of fluvoxamine in children and adolescents with obsessive-compulsive disorder. J Am Acad Child Adolesc Psychiatry 1992;31(6):1062-1069.",
        section: "Pivotal paediatric OCD trial — basis for ≥8 yrs FDA approval",
      },
    ],
    reviews: [
      {
        source:
          "Cipriani A, Furukawa TA, Salanti G, et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366.",
        section: "Definitive SSRI head-to-head meta-analysis (includes fluvoxamine)",
      },
      {
        source:
          "Reis C, Arrua A, Vargas-Robledo S, et al. Fluvoxamine as a potential treatment for COVID-19. Lancet Reg Health Am 2022;11:100239.",
        section: "Review of σ1 receptor-mediated anti-inflammatory effects in cytokine storm",
      },
      {
        source: "FDA Prescribing Information — LUVOX (fluvoxamine maleate) and LUVOX CR",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/021511s010lbl.pdf",
      },
    ],
    patientResources: [
      {
        source: "International OCD Foundation — Medications for OCD",
        url: "https://iocdf.org/about-ocd/treatment/meds/",
      },
      {
        source: "Royal College of Psychiatrists — Patient information on SSRIs",
        url: "https://www.rcpsych.ac.uk/mental-health/treatments-and-wellbeing/antidepressants",
      },
      {
        source: "Tele-MANAS (National Mental Health Helpline, India) — 14416",
        url: "tel:14416",
      },
    ],
  },

  relatedDrugs: [
    {
      name: "Sertraline",
      slug: "sertraline",
      drugClass: "SSRI",
      relationship:
        "Same class. Shares σ1 receptor agonism with fluvoxamine — only two SSRIs with this property. Approved for 6 indications (vs fluvoxamine's 1 — OCD). Less sedating, fewer GI side effects, milder CYP interactions. Preferred for OCD in adults when sedation is undesirable. SSRI of choice in pregnancy.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship:
        "Same class. OPPOSITE pharmacokinetic profile: long half-life (1–4 days + norfluoxetine), most activating, strong CYP2D6 inhibitor. Approved for paediatric depression (≥8 yrs), bulimia, OCD (≥7 yrs). Better for adherence-poor patients; worse when interactions with caffeine/clozapine are NOT the goal.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      drugClass: "SSRI",
      relationship:
        "Same class. Lowest CYP interaction profile — preferred when patient is on many other drugs (the OPPOSITE of fluvoxamine's interaction-heavy profile). Neutral on sedation. Approved for MDD and GAD (≥12 yrs).",
    },
    {
      name: "Paroxetine",
      slug: "paroxetine",
      drugClass: "SSRI",
      relationship:
        "Same class. MOST sedating SSRI (fluvoxamine is second). Shortest half-life (21 h) → worst discontinuation. Strong CYP2D6 inhibitor. Most anticholinergic, most weight gain. Avoid in pregnancy. Useful for severe hot flushes in breast-cancer survivors.",
    },
    {
      name: "Citalopram",
      drugClass: "SSRI",
      relationship:
        "Same class. Racemic mixture (escitalopram is the S-enantiomer). Dose-dependent QTc prolongation — max 40 mg/day (20 mg in elderly). Less CYP1A2 inhibition than fluvoxamine.",
    },
    {
      name: "Venlafaxine",
      drugClass: "SNRI",
      relationship:
        "Alternative class. Serotonin-norepinephrine reuptake inhibitor. May work when SSRI fails. Dose-dependent: <150 mg/day mostly serotonergic; >150 mg/day adds noradrenergic effect. Watch BP — can cause hypertension. Short half-life → bothersome discontinuation.",
    },
    {
      name: "Bupropion",
      drugClass: "NDRI",
      relationship:
        "Augmentation partner. Norepinephrine-dopamine reuptake inhibitor. Adding 150 mg XL to an SSRI is first-line augmentation for partial response and reverses SSRI-induced sexual dysfunction. Avoid in seizure disorder and eating disorders.",
    },
    {
      name: "Mirtazapine",
      drugClass: "NaSSA",
      relationship:
        "Augmentation partner. Noradrenergic and specific serotonergic antidepressant. Adding 15–30 mg at night improves sleep and appetite and may reverse SSRI-induced sexual dysfunction. Sedating — give at night.",
    },
  ],

  relatedConditions: [
    { name: "Obsessive-Compulsive Disorder (adults)", relationship: "primary", href: "#clinical-uses" },
    { name: "Obsessive-Compulsive Disorder (paediatric, ≥8 yrs)", relationship: "primary", href: "#clinical-uses" },
    { name: "Social Anxiety Disorder", relationship: "off-label", href: "#clinical-uses" },
    { name: "Panic Disorder", relationship: "off-label", href: "#clinical-uses" },
    { name: "Post-Traumatic Stress Disorder", relationship: "off-label", href: "#clinical-uses" },
    { name: "Major Depressive Disorder (in Europe/Australia; off-label in US)", relationship: "off-label", href: "#clinical-uses" },
    { name: "Bulimia Nervosa", relationship: "off-label", href: "#clinical-uses" },
    { name: "Schizophrenia with comorbid OCD (with clozapine)", relationship: "off-label", href: "#clinical-case" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Fluvoxamine", type: "drug", href: "/drugs/fluvoxamine", note: "The drug you're reading about" },
    { label: "SSRI", type: "class", href: "#mechanism", note: "Selective Serotonin Reuptake Inhibitor" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "The neurotransmitter being modulated" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Molecular target" },
    { label: "σ1 (sigma-1) Receptor", type: "neurotransmitter", href: "#mechanism", note: "AGONIST — shared with sertraline; anxiolytic, possible anti-inflammatory" },
    { label: "CYP1A2", type: "neurotransmitter", href: "#interactions", note: "POTENTLY INHIBITED by fluvoxamine — signature interaction profile" },
    { label: "Caffeine", type: "side-effect", href: "#interactions", note: "CYP1A2 substrate → limit to <200 mg/day" },
    { label: "Clozapine", type: "side-effect", href: "#interactions", note: "CYP1A2 substrate → reduce dose to 1/3" },
    { label: "Tizanidine", type: "side-effect", href: "#contraindications", note: "CONTRAINDICATED — 10× level rise → severe hypotension" },
    { label: "OCD", type: "condition", href: "#clinical-uses", note: "Only FDA-approved US indication (adults & ≥8 yrs)" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood regulation" },
    { label: "Cortico-striatal-thalamo-cortical loops", type: "brain-region", href: "#brain-regions", note: "Dysregulated in OCD — normalised by SSRI" },
    { label: "Serotonin Syndrome", type: "side-effect", href: "#side-effects", note: "Life-threatening — know the signs" },
    { label: "Patient Guide — Limit Caffeine & Disclose All Meds", type: "patient-guide", href: "#patient-education", note: "Fluvoxamine's two non-negotiable counselling points" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A medicine used mainly for OCD (in adults and children 8+) that helps your brain keep more of a mood-and-worry regulating chemical (serotonin) available for longer. Uniquely among similar medicines, it strongly interacts with caffeine and several other drugs.",
    summary:
      "Fluvoxamine is one of the six SSRI antidepressants. In the US it is approved mainly for Obsessive-Compulsive Disorder (OCD) — in adults and children 8 years and older. It works by helping your brain keep more of a chemical called serotonin available for longer, which over weeks helps regulate mood, anxiety, and obsessive thoughts. Two things make fluvoxamine different from other SSRIs: (1) it tends to be more sedating and more nausea-inducing; (2) it strongly slows your body's breakdown of caffeine and several other medicines. That is why we ask you to LIMIT COFFEE to 1–2 cups per day and to TELL US ABOUT ALL OTHER MEDICINES you take.",
    mechanism:
      "Your brain uses a chemical called serotonin to regulate mood, anxiety, sleep, and obsessive thoughts. Normally, after serotonin is released between nerve cells, it gets quickly taken back up (recycled). Fluvoxamine blocks this recycling, so more serotonin stays available for longer. Over 4–6 weeks (and 8–12 weeks for OCD), this helps your brain's regulation systems work better — but it doesn't happen immediately. Fluvoxamine also affects a second target called the σ1 (sigma-1) receptor, which may help with anxiety and is being studied for inflammation. Finally, fluvoxamine strongly slows down an enzyme in your liver (called CYP1A2) that breaks down caffeine and several other drugs — which is why caffeine and certain medicines can build up in your body.",
    sideEffects:
      "Most people get some side effects in the first 1–2 weeks — usually nausea (more than with other SSRIs), sleepiness (fluvoxamine is more sedating than most SSRIs), vivid dreams, headache, or mild dizziness. These usually settle as your body adapts. Sexual side effects (lower interest or difficulty reaching orgasm) are common and can persist — talk to your doctor if this bothers you. Serious side effects are rare but you should know the signs: high fever with confusion and shaking could be serotonin syndrome (emergency), and feeling worse or having new suicidal thoughts in the first month needs immediate medical review.",
    monitoring:
      "You'll have check-ins with your doctor at 2 weeks, 4 weeks, 8 weeks, and 12 weeks to see how you're responding — OCD takes longer to respond than depression, so patience is important. If you are on clozapine (for schizophrenia) or theophylline (for asthma) or warfarin (blood thinner), your doctor will check blood levels within a week of starting fluvoxamine. If you're over 65, your doctor may check your blood sodium in the first 2 weeks.",
    contraindications:
      "Don't take fluvoxamine if you've taken a MAOI antidepressant in the last 14 days (dangerous combination). NEVER combine with tizanidine (a muscle relaxant) — this can cause dangerous blood pressure drops. Don't combine with thioridazine or pimozide (heart rhythm). Tell your doctor about ALL other medicines you take — especially for asthma (theophylline), schizophrenia (clozapine), blood thinning (warfarin), muscle spasms (tizanidine), migraine (triptans), pain (tramadol), or herbal products like St John's Wort.",
    interactions:
      "Two key things to know: (1) LIMIT CAFFEINE — fluvoxamine slows your body's breakdown of caffeine, so your normal cup of coffee can build up and cause jitteriness, palpitations, or insomnia. Limit coffee to 1–2 cups per day and switch to decaf where possible. Energy drinks, strong tea, and some pain relievers also contain caffeine. (2) TELL YOUR DOCTOR AND PHARMACIST about EVERYTHING you take, including over-the-counter medicines. Fluvoxamine interacts with more drugs than most antidepressants — especially clozapine (schizophrenia), theophylline (asthma), warfarin (blood thinner), tizanidine (muscle relaxant), and ramelteon (sleep medicine).",
  },

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Luvox label"],
};
