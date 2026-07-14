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

  /* ---- India-first extensions ---- */

  /* Indian clinical practice */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Luvox", manufacturer: "Abbott", strengths: "50mg, 100mg", note: "Originator brand — higher cost, less commonly prescribed in cost-sensitive Indian settings" },
      { name: "Fluvaxin", manufacturer: "Sun Pharma", strengths: "50mg, 100mg" },
      { name: "Voxam", manufacturer: "Cipla", strengths: "50mg, 100mg" },
      { name: "Favo", manufacturer: "Intas", strengths: "50mg, 100mg" },
    ],
    typicalDoses:
      "OCD (adults): start 50mg OD at bedtime, titrate by 50mg every 4–7 days to 100–300mg/day (usually divided BD). Maximum 300mg/day. OCD (children 8–17): start 25mg at bedtime, titrate to 200mg/day (≤12 years) or 300mg/day (>12 years). In Indian government hospitals, the typical target is 100–200mg/day due to cost and tolerability. Bedtime dosing preferred because fluvoxamine is the most sedating SSRI after paroxetine. Not for first-line depression in India — sertraline, escitalopram, fluoxetine are preferred for depression. OCD takes 8–12 weeks for full response (longer than depression's 4–6 weeks).",
    prescribingScenarios: [
      "Reserved SSRI in Indian practice — used for OCD that has not responded to first-line SSRIs (sertraline, fluoxetine) or for OCD with comorbid anxiety where σ1 agonism may help.",
      "Occasionally used in government hospital psychiatry OPDs for treatment-resistant OCD, but limited by higher cost and lower availability than sertraline or fluoxetine.",
      "Used cautiously in patients on theophylline (asthma), clozapine (schizophrenia), warfarin, or tizanidine — requires dose adjustment or contraindication. NEVER combine with tizanidine.",
      "Strongly AVOIDED in Indian patients who consume significant caffeine (multiple cups of coffee/tea, energy drinks) — the CYP1A2 inhibition causes caffeine accumulation and jitteriness, palpitations, insomnia.",
      "Preferred SSRI in OCD with significant anxiety/insomnia component (because of sedating profile and σ1 agonism) — but requires careful counselling about caffeine and other CYP1A2 substrates.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
      note: "Less commonly available than other SSRIs in India. Originator brand (Luvox) is costly; Indian generics (Fluvaxin, Voxam, Favo) are moderately priced but still more expensive than sertraline or escitalopram. Not routinely stocked in government hospital pharmacies or Jan Aushadhi Kendras — this limits its use in public-sector psychiatry. Private pharmacies in urban areas commonly stock it; rural availability is patchy.",
    },
    costCategory: "moderate",
    costNote: "Generic fluvoxamine is moderately priced in India (approximately ₹8–15 per 50mg tablet; ₹15–25 per 100mg tablet). Branded versions (Fluvaxin, Voxam, Favo) cost ₹10–30 per tablet. Originator Luvox is significantly more expensive (₹25–40 per tablet). Roughly 3–5× more expensive than generic sertraline or escitalopram, which is one reason it is rarely first-line in India.",
    monitoring:
      "In Indian government hospitals, fluvoxamine is rarely used and monitoring experience is limited. In private psychiatry practice, monitoring includes: (1) caffeine intake assessment at every visit — limit to 1–2 cups/day; (2) clozapine levels if co-prescribed (reduce clozapine to 1/3 dose BEFORE starting fluvoxamine); (3) theophylline levels if co-prescribed (reduce theophylline to 1/3 dose); (4) INR if on warfarin; (5) blood pressure if on tizanidine — though tizanidine is CONTRAINDICATED; (6) PHQ-9 / Y-BOCS for OCD response at 4, 8, 12 weeks; (7) sodium in elderly in first 2 weeks (SIADH risk, same as all SSRIs). OCD takes 8–12 weeks for full response — counsel patience. Sedation is common — assess daytime drowsiness and consider dose timing.",
    patientCounselling: [
      "Take at bedtime — fluvoxamine is more sedating than other SSRIs (it can make you sleepy).",
      "LIMIT CAFFEINE to 1–2 cups of coffee or tea per day. Fluvoxamine slows your body's breakdown of caffeine — your normal cup can build up and cause jitteriness, palpitations, or insomnia. Avoid energy drinks. Switch to decaf where possible.",
      "It may take 8–12 weeks for OCD to improve — longer than for depression. Don't stop early just because you don't feel better yet.",
      "Do NOT stop suddenly — your doctor will help you reduce the dose gradually over several weeks.",
      "Tell EVERY doctor, dentist, and pharmacist that you take fluvoxamine — it interacts with MANY common medicines, especially for asthma (theophylline), schizophrenia (clozapine), blood thinning (warfarin), and muscle spasms (tizanidine — DANGEROUS combination).",
      "NEVER combine with tizanidine (a muscle relaxant) — this can cause dangerous blood pressure drops and fainting.",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month, contact your doctor immediately or call Tele-MANAS at 14416.",
      "Common side effects in the first 1–2 weeks: nausea (more than with other SSRIs), sleepiness, vivid dreams, headache. These usually settle.",
      "Sexual side effects (reduced interest, difficulty reaching orgasm) are common — your doctor can help. Don't stop the medicine without discussing alternatives.",
      "If you are on clozapine (for schizophrenia), your doctor MUST reduce the clozapine dose to ONE-THIRD before starting fluvoxamine — tell your psychiatrist immediately if this has not been done.",
    ],
  },

  /* NMC CBME competency mapping */
  cbmeMapping: {
    subject: "Pharmacology",
    mbbsYear: "Second Professional",
    topic: "Drugs acting on Central Nervous System — Antidepressants (SSRIs)",
    competencyCodes: ["PH7.3", "PH7.4", "PY3.2"],
    competencyDescriptions: [
      "PH7.3: Describe the mechanism of action, pharmacological actions, adverse effects, contraindications, and therapeutic uses of antidepressant drugs with emphasis on SSRIs — including fluvoxamine's unique CYP1A2 inhibition profile and OCD-only FDA indication.",
      "PH7.4: Explain the rationale for drug selection, dose individualisation, and monitoring of fluvoxamine therapy — with emphasis on CYP1A2 interactions (clozapine, theophylline, caffeine, tizanidine) and OCD dosing.",
      "PY3.2 (Psychiatry, Final Professional): Describe the pharmacological management of OCD, including the role of fluvoxamine, the 8–12 week response delay, and the contraindication with tizanidine.",
    ],
    integrationSubjects: ["Psychiatry", "General Medicine", "Pulmonary Medicine (theophylline)", "Community Medicine"],
  },

  /* Exam Lens — structured by Indian examination */
  examLens: {
    mbbs: {
      viva: [
        "What is unique about fluvoxamine among the SSRIs? (It is the most potent CYP1A2 inhibitor in the class — leading to signature interactions with caffeine, theophylline, clozapine, tizanidine, and warfarin. Also the only SSRI whose sole FDA-approved indication in the US is OCD.)",
        "What is the FDA-approved indication for fluvoxamine? (OCD — in adults and in children ≥8 years. In the US, this is its ONLY FDA-approved indication. It is used off-label for depression in some countries.)",
        "Why is tizanidine CONTRAINDICATED with fluvoxamine? (Fluvoxamine potently inhibits CYP1A2, the main metaboliser of tizanidine. Tizanidine levels rise ~10-fold → severe hypotension, bradycardia, syncope. This is an absolute contraindication.)",
        "How should clozapine dose be adjusted when starting fluvoxamine? (Reduce clozapine to ONE-THIRD of the original dose before starting fluvoxamine, because fluvoxamine inhibits CYP1A2 — the main metaboliser of clozapine. Monitor clozapine levels.)",
        "What counselling would you give a patient starting fluvoxamine about caffeine? (LIMIT CAFFEINE to 1–2 cups/day. Fluvoxamine inhibits CYP1A2 which metabolises caffeine — caffeine accumulates, causing jitteriness, palpitations, insomnia. Avoid energy drinks. Switch to decaf.)",
        "Why is fluvoxamine sedating? (It is the most sedating SSRI after paroxetine — likely related to its σ1 receptor agonism and slight affinity for 5-HT2C. Bedtime dosing is preferred.)",
      ],
      practical: [
        "Write a prescription for fluvoxamine for a 25-year-old with OCD (start: 50mg at bedtime, titrate to 100–200mg).",
        "Counsel a patient starting fluvoxamine — address caffeine restriction, sedation, the 8–12 week OCD response delay, and drug interactions (clozapine, theophylline, tizanidine).",
        "Identify the contraindications of fluvoxamine from a given clinical scenario (tizanidine use, MAOI within 14 days, thioridazine, pimozide).",
        "Explain the monitoring schedule for a patient on fluvoxamine + clozapine (clozapine dose reduction to 1/3, clozapine levels, caffeine assessment, Y-BOCS for OCD).",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics, adverse effects, and therapeutic uses of SSRIs with special reference to fluvoxamine. Discuss the unique CYP1A2 inhibition profile, the signature drug interactions (clozapine, theophylline, caffeine, tizanidine), and the role of fluvoxamine in OCD management.",
        "A 30-year-old man with OCD and schizophrenia on stable clozapine 300mg/day is prescribed fluvoxamine 100mg/day for OCD by his psychiatrist. Critically evaluate the prescription, identify the interaction, and outline the management. (Clozapine dose must be reduced to 1/3 BEFORE starting fluvoxamine. Clozapine levels monitored. Caffeine restricted. Sedation and orthostatic hypotension watched.)",
      ],
    },
    neetPg: {
      highYield: [
        "Fluvoxamine = most potent CYP1A2 inhibitor among SSRIs. Signature interactions: clozapine, theophylline, caffeine, tizanidine, warfarin, ramelteon.",
        "Fluvoxamine + tizanidine = CONTRAINDICATED. Tizanidine levels rise ~10-fold → severe hypotension, bradycardia, syncope.",
        "Fluvoxamine + clozapine: reduce clozapine dose to ONE-THIRD before starting fluvoxamine. Monitor clozapine levels.",
        "Fluvoxamine + caffeine: LIMIT to 1–2 cups/day. CYP1A2 inhibition causes caffeine accumulation → jitteriness, palpitations, insomnia.",
        "Fluvoxamine + theophylline: reduce theophylline dose to ONE-THIRD. Monitor levels. Same mechanism as clozapine.",
        "FDA indication: OCD only (in US). Adults and children ≥8 years. OCD response takes 8–12 weeks (longer than depression's 4–6 weeks).",
        "Fluvoxamine is the MOST sedating SSRI after paroxetine — bedtime dosing preferred. Likely related to σ1 agonism and 5-HT2C affinity.",
        "σ1 (sigma-1) receptor agonism — shared with sertraline; may contribute to anxiolytic effect and is being studied for anti-inflammatory/COVID-19 roles.",
        "Half-life: 12–13 hours (shorter than most SSRIs). BD dosing often required at higher doses. No active metabolite of clinical significance.",
        "Black box: suicidality <25 years. Weekly monitoring in first month. Same as all antidepressants.",
      ],
      pyqConcepts: [
        "NEET PG 2022: Which SSRI is CONTRAINDICATED with tizanidine? (Answer: Fluvoxamine — CYP1A2 inhibition causes ~10-fold rise in tizanidine levels → severe hypotension.)",
        "NEET PG 2021: A patient on clozapine 300mg/day is started on fluvoxamine. What dose adjustment is required? (Answer: Reduce clozapine to 1/3 of the original dose — ~100mg/day. CYP1A2 inhibition raises clozapine levels.)",
        "NEET PG 2020: Which SSRI inhibits caffeine metabolism and requires caffeine restriction? (Answer: Fluvoxamine — most potent CYP1A2 inhibitor among SSRIs.)",
        "NEET PG 2019: Which SSRI is FDA-approved ONLY for OCD in the US? (Answer: Fluvoxamine — its sole US FDA indication is OCD.)",
        "INICET 2021: A patient on theophylline for asthma requires an SSRI for OCD. Which SSRI should be AVOIDED? (Answer: Fluvoxamine — CYP1A2 inhibition raises theophylline levels (narrow therapeutic index, toxicity risk). Use sertraline or fluoxetine instead.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 28-year-old man with OCD is started on fluvoxamine 50mg at bedtime. At week 2, he reports severe daytime drowsiness and vivid nightmares. How do you manage? (Answer: Sedation is expected — fluvoxamine is the most sedating SSRI after paroxetine. Options: (1) continue at bedtime (most sedation settles in 1–2 weeks); (2) reduce dose to 25mg and titrate slowly; (3) move dose earlier in evening. Vivid dreams are common and usually settle. Counsel that OCD takes 8–12 weeks to respond. Do not stop abruptly.)",
        "A 35-year-old woman with OCD and schizophrenia on clozapine 300mg/day is prescribed fluvoxamine 100mg/day. What is the correct management? (Answer: This is a DANGEROUS prescription. Fluvoxamine inhibits CYP1A2 (the main clozapine metaboliser) → clozapine levels rise 3–5-fold → risk of seizures, myocarditis, severe sedation, agranulocytosis. Management: STOP fluvoxamine immediately, reduce clozapine to 1/3 (~100mg/day) BEFORE restarting fluvoxamine, monitor clozapine levels and WBC, reassess in 1 week. Alternatively, switch OCD treatment to sertraline or fluoxetine (minimal CYP1A2 effect).)",
        "A 22-year-old college student on fluvoxamine 100mg BD for OCD presents with palpitations, anxiety, and insomnia. He drinks 5–6 cups of coffee/day to study. What is the diagnosis? (Answer: Caffeine toxicity due to CYP1A2 inhibition by fluvoxamine. Caffeine accumulates → jitteriness, palpitations, insomnia. Management: LIMIT caffeine to 1–2 cups/day (or switch to decaf), counsel that energy drinks and strong tea also contain caffeine, reassess in 1–2 weeks. Consider dose reduction if symptoms severe.)",
        "A 45-year-old man on fluvoxamine 200mg/day for OCD presents with severe dizziness and syncope on standing. His GP recently started tizanidine 4mg BD for back spasm. What is the diagnosis and management? (Answer: Tizanidine toxicity — fluvoxamine inhibits CYP1A2 (main tizanidine metaboliser) → tizanidine levels rise ~10-fold → severe hypotension, bradycardia, syncope. This is a CONTRAINDICATED combination. Management: STOP tizanidine immediately, supportive care (IV fluids, supine position, monitor BP/HR), switch muscle relaxant to one not metabolised by CYP1A2 (e.g., baclofen, cyclobenzaprine). Counsel patient to tell every doctor that fluvoxamine + tizanidine is dangerous.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Fluvoxamine mechanism: SERT blockade → ↑ serotonin. Same as all SSRIs.",
        "Fluvoxamine = most potent CYP1A2 inhibitor among SSRIs.",
        "FDA indication: OCD only (US). ≥8 years for paediatric OCD.",
        "Fluvoxamine + tizanidine = CONTRAINDICATED (~10-fold rise in tizanidine levels).",
        "Fluvoxamine + clozapine: reduce clozapine to 1/3 of dose.",
        "Fluvoxamine + caffeine: limit to 1–2 cups/day.",
        "Most sedating SSRI after paroxetine — bedtime dosing.",
        "σ1 receptor agonism — anxiolytic effect.",
        "Black box warning: suicidal thoughts in patients under 25.",
        "Onset for OCD: 8–12 weeks (longer than depression's 4–6 weeks).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Fluvoxamine's CYP1A2 inhibition is clinically the most consequential SSRI-drug interaction profile. CYP1A2 metabolises clozapine, theophylline, caffeine, tizanidine, ramelteon, melatonin, and (partly) warfarin and olanzapine. The clozapine and tizanidine interactions are the most dangerous — clozapine requires 1/3 dose reduction; tizanidine is absolutely contraindicated.",
        "Fluvoxamine's σ1 (sigma-1) receptor agonism is shared with sertraline and may explain part of its anxiolytic effect. σ1 agonism has been investigated for potential anti-inflammatory and COVID-19 roles (fluvoxamine was studied in the TOGETHER and STOP-COVID trials for early COVID-19 due to σ1-mediated anti-inflammatory effects — results mixed).",
        "Why fluvoxamine is favoured in OCD specifically: (1) only FDA-approved SSRI for paediatric OCD (≥8 years, alongside fluoxetine, sertraline); (2) the σ1 agonism may be uniquely beneficial in OCD anxiety; (3) once-daily or twice-daily dosing at higher doses; (4) extensive RCT evidence in adult OCD. However, sertraline and fluoxetine are equally effective in OCD and have simpler interaction profiles.",
        "Clozapine-fluvoxamine interaction is sometimes USED THERAPEUTICALLY in treatment-resistant schizophrenia — fluvoxamine can be added to allow clozapine dose reduction (cost-saving and reduced metabolic side effects), but requires expert monitoring of clozapine levels, WBC, and seizure threshold.",
        "Caffeine interaction is one of the most clinically relevant in Indian practice — Indian patients often consume multiple cups of coffee/tea/energy drinks daily. CYP1A2 inhibition causes caffeine accumulation → jitteriness, palpitations, insomnia that may be misattributed to SSRI activation. Always assess caffeine intake at every visit.",
        "Fluvoxamine has the shortest half-life among commonly used SSRIs (12–13h, vs sertraline 26h, paroxetine 21h, citalopram 35h, fluoxetine 1–4 days). At doses ≥100mg/day, BD dosing is preferred to avoid trough withdrawal symptoms. Discontinuation syndrome is more pronounced than with fluoxetine but less than with paroxetine.",
        "OCD takes 8–12 weeks for full response to SSRI — longer than the 4–6 weeks for depression. Clomipramine (a TCA) is also highly effective in OCD and was the gold standard before SSRIs. Augmentation strategies for treatment-resistant OCD: antipsychotic augmentation (aripiprazole, risperidone), glutamatergic agents (memantine, N-acetylcysteine), or CBT with ERP (exposure and response prevention).",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "FDA-approved indication",
      internationalSource: "FDA Prescribing Information for LUVOX",
      internationalRecommendation: "Fluvoxamine is FDA-approved ONLY for OCD in adults and children ≥8 years. It is NOT FDA-approved for depression in the US (though it is approved for depression in some other countries, including parts of Europe).",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS uses fluvoxamine primarily for OCD, consistent with the FDA indication. In Indian practice, fluvoxamine is rarely first-line for depression — sertraline, escitalopram, and fluoxetine are preferred. Its role is in OCD that has not responded to first-line SSRIs.",
    },
    {
      topic: "First-line SSRI for OCD",
      internationalSource: "APA Practice Guideline for OCD / NICE CG31",
      internationalRecommendation: "SSRIs (fluoxetine, fluvoxamine, sertraline, paroxetine) are first-line for OCD. Clomipramine is an alternative. No specific preference among the SSRIs — all are equally effective. Selection is based on side-effect profile, drug interactions, and patient factors.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — SSRIs are first-line for OCD. In Indian practice, sertraline and fluoxetine are preferred first-line due to lower cost, wider availability, and simpler interaction profiles. Fluvoxamine is reserved for OCD that has not responded to first-line SSRIs or for OCD with significant comorbid anxiety.",
    },
    {
      topic: "Interaction with clozapine (CYP1A2)",
      internationalSource: "FDA / Maudsley Prescribing Guidelines",
      internationalRecommendation: "Fluvoxamine potently inhibits CYP1A2 (the main clozapine metaboliser). Clozapine levels rise 3–5-fold. Reduce clozapine to ONE-THIRD of the original dose BEFORE starting fluvoxamine. Monitor clozapine levels, WBC, and seizure threshold.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs. In Indian practice, this interaction is a major reason fluvoxamine is rarely used in schizophrenia patients on clozapine. When the combination is necessary (e.g., comorbid OCD), reduce clozapine to 1/3 dose BEFORE starting fluvoxamine and monitor closely. Some Indian psychiatrists use the interaction THERAPEUTICALLY to allow clozapine dose reduction in treatment-resistant schizophrenia.",
    },
    {
      topic: "Contraindication with tizanidine",
      internationalSource: "FDA / EMA",
      internationalRecommendation: "Fluvoxamine + tizanidine is CONTRAINDICATED. CYP1A2 inhibition causes ~10-fold rise in tizanidine levels → severe hypotension, bradycardia, syncope. This is one of the most dangerous SSRI interactions.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs with the absolute contraindication. In Indian practice, tizanidine is commonly prescribed by orthopaedicians and GPs for muscle spasms — patients on fluvoxamine must be explicitly warned to tell every doctor about the contraindication. The interaction is easily missed because tizanidine is perceived as a 'safe muscle relaxant'.",
    },
    {
      topic: "Use in pregnancy and lactation",
      internationalSource: "FDA / APA",
      internationalRecommendation: "Fluvoxamine is not the SSRI of choice in pregnancy — sertraline is preferred (lowest placental transfer, lowest milk/plasma ratio). Fluvoxamine is acceptable if already established and stable. Former FDA Category C. Third-trimester neonatal adaptation syndrome risk.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — sertraline is preferred in pregnancy. Fluvoxamine should not be the first choice if pregnancy is possible. In Indian practice, the CYP1A2 interaction profile (especially with caffeine, common in Indian diets) and the sedation profile further favour sertraline or escitalopram in women of reproductive age.",
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
      source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of OCD",
      type: "guideline",
      section: "Section on pharmacotherapy — SSRIs in OCD",
    },
    {
      source: "NMC CBME Curriculum — Pharmacology (Second Professional)",
      type: "curriculum",
      section: "Topic: Drugs acting on CNS — Antidepressants",
    },
    {
      source: "NMC CBME Curriculum — Psychiatry (Final Professional)",
      type: "curriculum",
      section: "Topic: Psychopharmacology — OCD and Anxiety Disorders",
    },
    {
      source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)",
      type: "regulatory",
      section: "Essential medicines for mental health — SSRIs (fluvoxamine less commonly stocked)",
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
      section: "Fluvoxamine — Schedule H prescription status",
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
      { source: "FDA Prescribing Information (LUVOX)", recommendation: "Fluvoxamine FDA-approved ONLY for OCD (adults and ≥8 years). Most potent CYP1A2 inhibitor among SSRIs. Tizanidine contraindicated." },
      { source: "APA Practice Guideline for OCD / NICE CG31", recommendation: "SSRIs (including fluvoxamine) are first-line for OCD. No specific preference among SSRIs — selection based on side-effect profile and interactions." },
      { source: "Maudsley Prescribing Guidelines, 14th edition", recommendation: "Clozapine + fluvoxamine: reduce clozapine to 1/3 dose. Tizanidine + fluvoxamine: contraindicated. Theophylline + fluvoxamine: reduce to 1/3 dose." },
      { source: "WHO mhGAP", recommendation: "SSRIs recommended as first-line antidepressants in the Mental Health Gap Action Programme — fluvoxamine is one option among several." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "Fluvoxamine is reserved for OCD that has not responded to first-line SSRIs (sertraline, fluoxetine). Not first-line for depression in India." },
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS concurs with the tizanidine contraindication and the clozapine 1/3 dose reduction. In Indian practice, tizanidine is commonly prescribed by orthopaedicians — patients must be warned." },
      { source: null, recommendation: "No dedicated IPS guideline on fluvoxamine caffeine monitoring. Current section reflects accepted clinical practice and the FDA label." },
    ],
    indianClinicalPractice:
      "In Indian practice, fluvoxamine is a reserved SSRI — rarely first-line, used for OCD that has not responded to sertraline or fluoxetine, or for OCD with significant comorbid anxiety (where its σ1 agonism and sedating profile may help). The higher cost (₹8–25/tablet vs ₹2–5 for sertraline), patchy rural availability, and the complex CYP1A2 interaction profile (with caffeine — extremely common in Indian diets — and with clozapine, theophylline, tizanidine) limit its use. It is NOT commonly stocked in government hospitals or Jan Aushadhi Kendras. When used, Indian psychiatrists actively counsel on caffeine restriction, screen for clozapine/theophylline/tizanidine/warfarin use, and prefer bedtime dosing. The clozapine-fluvoxamine interaction is sometimes used THERAPEUTICALLY in treatment-resistant schizophrenia to allow clozapine dose reduction. Tele-MANAS (14416) is provided as a crisis resource. Family involvement in monitoring is emphasised.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "RARELY used in government hospital psychiatry OPDs. Not routinely stocked in government pharmacies or Jan Aushadhi Kendras due to higher cost. When used (e.g., for treatment-resistant OCD under DMHP), patients often purchase from private pharmacies. Starting dose 25–50mg at bedtime, titrated slowly. Monitoring experience limited.",
    privateHospitals:
      "Reserved SSRI in private psychiatry practice — used for OCD that has not responded to sertraline or fluoxetine, or for OCD with significant anxiety/insomnia. Bedtime dosing preferred. Active screening for clozapine, theophylline, tizanidine, warfarin, and caffeine intake. PHQ-9 / Y-BOCS monitoring at 4/8/12 weeks. OCD response assessed at 8–12 weeks.",
    medicalColleges:
      "Teaching drug for SSRI pharmacology, OCD management, and CYP1A2 drug interactions. Used in pharmacology practicals (prescription writing, drug interaction identification). The tizanidine contraindication, clozapine 1/3 dose rule, and caffeine limit are routine NEET PG and INICET questions.",
    primaryCare:
      "RARELY initiated by GPs or family physicians in Indian primary care — most GPs are unfamiliar with its complex interaction profile. Usually initiated by psychiatrists. Tele-MANAS (14416) for crisis support. Referral to psychiatrist for OCD assessment and SSRI selection.",
    psychiatryOPD:
      "Reserved for OCD that has not responded to first-line SSRIs (sertraline, fluoxetine) at adequate doses for 8–12 weeks, or for OCD with significant comorbid anxiety. Bedtime dosing. Active screening for CYP1A2 substrates. Augmentation with antipsychotics (aripiprazole, risperidone) or CBT with ERP for treatment-resistant OCD.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ questionnaire) — SSRIs can trigger manic switch.",
      "Assess suicidal ideation — if present, involve family for monitoring and provide Tele-MANAS (14416) number.",
      "Check for MAOI use in last 14 days — absolute contraindication.",
      "Check for tizanidine use — ABSOLUTE CONTRAINDICATION. Tizanidine is commonly prescribed by orthopaedicians in India — ask directly.",
      "If on clozapine: plan dose reduction to ONE-THIRD before starting fluvoxamine. Monitor clozapine levels and WBC.",
      "If on theophylline: plan dose reduction to ONE-THIRD. Monitor theophylline levels (narrow therapeutic index).",
      "Assess caffeine intake — Indian patients often consume multiple cups of coffee/tea/energy drinks daily. Counsel to limit to 1–2 cups/day BEFORE starting fluvoxamine.",
      "Baseline PHQ-9 (depression) or Y-BOCS (OCD) score for response monitoring. Counsel that OCD takes 8–12 weeks to respond (longer than depression's 4–6 weeks).",
    ],
    duringTreatment: [
      "Week 1–2: assess tolerability (nausea — more than with other SSRIs; sedation — most sedating after paroxetine; vivid dreams) and suicidality (especially <25 years).",
      "Week 2–4: review early response — sleep often improves first in OCD. Reassess caffeine intake and adherence.",
      "Week 4–8: assess response with Y-BOCS. OCD takes 8–12 weeks for full response — do not declare failure at 4 weeks. Titrate dose by 50mg every 4–7 days as tolerated.",
      "Week 8–12: full OCD response assessment. If <30% reduction at 12 weeks, AUGMENT (aripiprazole, risperidone) or SWITCH (clomipramine, fluoxetine, sertraline).",
      "If on clozapine: monitor clozapine levels at week 1, 4, and 8. Watch for seizures, sedation, hypersalivation, myocarditis signs.",
      "Watch for hyponatraemia in elderly (confusion, headache, seizures).",
      "Watch for serotonin syndrome if serotonergic drugs are added (tramadol, triptans, linezolid).",
    ],
    followUp: [
      "First follow-up at 2 weeks (tolerability, suicidality, sedation, nausea).",
      "Second follow-up at 4 weeks (early response, caffeine adherence).",
      "Third follow-up at 8 weeks (Y-BOCS — partial response expected by now).",
      "Fourth follow-up at 12 weeks (full OCD response assessment).",
      "If remission achieved (Y-BOCS <8): continue for 1–2 YEARS for OCD (longer than depression's 6–12 months — OCD has higher relapse rates).",
      "Before discontinuation: taper over 4+ weeks. Consider substituting fluoxetine for last 2 weeks of taper (self-tapers).",
      "In government hospitals: follow-up may be every 4–8 weeks due to travel barriers — counsel family to watch for red flags (sedation interfering with daily activities, palpitations from caffeine, syncope from tizanidine interaction).",
    ],
    whenToRefer: [
      "Refer to psychiatrist if no response to 12-week fluvoxamine trial at 200–300mg/day — augmentation (aripiprazole, risperidone) or switch (clomipramine, fluoxetine, sertraline) needed.",
      "Refer urgently if tizanidine has been co-prescribed — STOP tizanidine immediately and assess for hypotension/bradycardia.",
      "Refer urgently if clozapine toxicity develops (seizures, severe sedation, myocarditis signs) — clozapine dose adjustment required.",
      "Refer urgently if suicidal ideation emerges or worsens.",
      "Refer if bipolar disorder is suspected (manic switch risk).",
      "Refer if serotonin syndrome develops (emergency — call 112).",
      "Refer for CBT with ERP (exposure and response prevention) — combined SSRI + CBT produces better OCD outcomes than either alone.",
    ],
  },

  /* Exam frequency — star ratings */
  examFrequency: {
    neetPg: 4,
    inicet: 3,
    mbbsViva: 3,
    fmge: 3,
  },

  /* PYQ metadata — concept-level, no copyrighted content */
  pyqMetadata: [
    { exam: "NEET PG", year: 2022, concept: "Fluvoxamine + tizanidine CONTRAINDICATION (CYP1A2)", topic: "SSRI drug interactions" },
    { exam: "NEET PG", year: 2021, concept: "Fluvoxamine + clozapine: reduce clozapine to 1/3 dose", topic: "Antipsychotic interactions" },
    { exam: "NEET PG", year: 2020, concept: "Fluvoxamine as most potent CYP1A2 inhibitor among SSRIs", topic: "SSRI pharmacokinetics" },
    { exam: "NEET PG", year: 2019, concept: "Fluvoxamine FDA-approved ONLY for OCD in US", topic: "Antidepressant indications" },
    { exam: "INICET", year: 2021, concept: "Fluvoxamine + caffeine interaction requiring caffeine restriction", topic: "Drug interactions" },
    { exam: "INICET", year: 2023, concept: "Fluvoxamine σ1 agonism and anxiolytic effect", topic: "SSRI pharmacodynamics" },
    { exam: "FMGE", year: 2022, concept: "Most sedating SSRI after paroxetine (fluvoxamine)", topic: "SSRI adverse effects" },
    { exam: "FMGE", year: 2021, concept: "Fluvoxamine + theophylline interaction (reduce to 1/3)", topic: "Drug interactions" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Government hospital setup",
      recommendation: "Fluvoxamine is RARELY used — not routinely stocked due to higher cost (₹8–25/tablet vs ₹2–5 for sertraline). Use sertraline (200mg) or fluoxetine as first-line for OCD under DMHP. Reserve fluvoxamine for treatment-resistant OCD.",
      alternative: "Sertraline (preferred — low cost, available in Jan Aushadhi, simple interaction profile) or fluoxetine.",
    },
    {
      scenario: "Private psychiatry practice",
      recommendation: "Reserved SSRI — used for OCD that has not responded to first-line SSRIs (sertraline, fluoxetine) at adequate doses for 8–12 weeks, or for OCD with significant comorbid anxiety where sedation and σ1 agonism may help.",
      alternative: "Sertraline (preferred first-line) or fluoxetine. Clomipramine (TCA) is an alternative for treatment-resistant OCD.",
    },
    {
      scenario: "Patient on clozapine for schizophrenia with comorbid OCD",
      recommendation: "Use fluvoxamine ONLY with clozapine dose reduction to ONE-THIRD before starting. Monitor clozapine levels and WBC. The interaction can be used THERAPEUTICALLY to allow clozapine dose reduction (cost-saving).",
      alternative: "Sertraline or fluoxetine (minimal CYP1A2 effect) — preferred if clozapine level manipulation is not desired. Aripiprazole augmentation for OCD if antipsychotic switch is feasible.",
    },
    {
      scenario: "Patient on theophylline for asthma",
      recommendation: "AVOID fluvoxamine — CYP1A2 inhibition raises theophylline levels (narrow therapeutic index, toxicity risk — nausea, seizures, arrhythmias). Use sertraline or escitalopram.",
      alternative: "Sertraline (preferred — minimal CYP1A2 effect) or escitalopram.",
    },
    {
      scenario: "Patient requiring tizanidine for muscle spasm",
      recommendation: "Fluvoxamine is CONTRAINDICATED — CYP1A2 inhibition causes ~10-fold rise in tizanidine → severe hypotension, bradycardia, syncope. Switch SSRI to sertraline/escitalopram OR switch muscle relaxant to baclofen/cyclobenzaprine.",
      alternative: "Sertraline or escitalopram (no CYP1A2 effect) — preferred. Baclofen or cyclobenzaprine as alternative muscle relaxants if fluvoxamine must continue.",
    },
    {
      scenario: "Patient who consumes significant caffeine (multiple cups of coffee/tea/energy drinks daily)",
      recommendation: "Counsel STRICT caffeine restriction to 1–2 cups/day BEFORE starting fluvoxamine. CYP1A2 inhibition causes caffeine accumulation → jitteriness, palpitations, insomnia. Common Indian pitfall — caffeine is widespread in Indian diets (coffee in south India, tea nationwide, energy drinks in young adults).",
      alternative: "If caffeine restriction is not feasible, prefer sertraline or escitalopram (no CYP1A2 effect on caffeine).",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: false,
    note: "NOT commonly available at Jan Aushadhi Kendras across India. Unlike sertraline, escitalopram, fluoxetine, and citalopram (which are stocked as affordable generics), fluvoxamine is rarely included in Jan Aushadhi formularies due to lower demand and higher procurement cost. Patients requiring fluvoxamine typically purchase from private pharmacies at higher cost (₹8–25/tablet). This is one reason fluvoxamine is rarely first-line in Indian public-sector psychiatry.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants (CYP1A2 inhibition profile)" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on drug interactions (clozapine, tizanidine, theophylline)" },
      { source: "FDA Prescribing Information — LUVOX (fluvoxamine maleate)", section: "Highlights of Prescribing Information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/021519s030lbl.pdf" },
      { source: "APA Practice Guideline for the Treatment of Patients with Obsessive-Compulsive Disorder", section: "Pharmacotherapy — SSRIs" },
      { source: "NICE Clinical Guideline CG31 — OCD and body dysmorphic disorder", section: "Pharmacological treatment" },
      { source: "Cipriani A et al. Lancet 2018 — Comparative efficacy of 21 antidepressants", section: "Network meta-analysis" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of OCD", type: "guideline", section: "Section on pharmacotherapy — SSRIs in OCD" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional)", type: "curriculum", section: "Topic: Psychopharmacology — OCD and Anxiety Disorders" },
      { source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)", type: "regulatory", section: "Essential medicines for mental health (fluvoxamine less commonly stocked)" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Mental health support resource", url: "tel:14416" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Fluvoxamine — Schedule H prescription status" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose Fluvoxamine for OCD",
    startNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Patient presents with OCD and SSRI selection is being considered",
        branches: [
          { label: "First-line OCD (no prior SSRI trial)", next: "first-line" },
          { label: "OCD not responded to first-line SSRI", next: "second-line" },
          { label: "On tizanidine, clozapine, or theophylline", next: "interaction-screen" },
        ],
      },
      {
        id: "first-line",
        question: "First-line SSRI for OCD (no prior SSRI trial)",
        recommendation: "Use sertraline or fluoxetine — lower cost, wider availability (including Jan Aushadhi), simpler interaction profile. Fluvoxamine is NOT first-line in Indian practice.",
        reasoning: "APA and IPS guidelines: all SSRIs are equally effective in OCD. Selection based on side-effect profile, interactions, cost, and availability. In India, sertraline and fluoxetine are preferred first-line. Fluvoxamine's CYP1A2 interaction profile and higher cost make it second-line.",
      },
      {
        id: "second-line",
        question: "OCD has not responded to 8–12 weeks of sertraline (200mg) or fluoxetine (60mg)",
        recommendation: "Try fluvoxamine (50mg at bedtime, titrate to 200–300mg/day) OR switch to clomipramine (TCA, gold standard pre-SSRI). Add CBT with ERP. Consider antipsychotic augmentation (aripiprazole, risperidone).",
        reasoning: "Fluvoxamine has extensive RCT evidence in OCD and its σ1 agonism may benefit OCD-related anxiety. Before starting, screen for tizanidine (contraindicated), clozapine (1/3 dose), theophylline (1/3 dose), and caffeine (restrict).",
        branches: [
          { label: "No interacting drugs", next: "start-fluvoxamine" },
          { label: "On interacting drugs", next: "interaction-screen" },
        ],
      },
      {
        id: "interaction-screen",
        question: "Patient is on tizanidine, clozapine, theophylline, or significant caffeine",
        branches: [
          { label: "On tizanidine", next: "tizanidine-contraindicated" },
          { label: "On clozapine", next: "clozapine-interaction" },
          { label: "On theophylline", next: "theophylline-interaction" },
          { label: "High caffeine intake", next: "caffeine-counsel" },
        ],
      },
      {
        id: "tizanidine-contraindicated",
        question: "Patient on tizanidine (muscle relaxant, commonly prescribed by orthopaedicians in India)",
        recommendation: "CONTRAINDICATED. Either STOP tizanidine and switch to baclofen/cyclobenzaprine BEFORE starting fluvoxamine, OR use a different SSRI (sertraline, escitalopram).",
        reasoning: "CYP1A2 inhibition by fluvoxamine causes ~10-fold rise in tizanidine levels → severe hypotension, bradycardia, syncope. This is one of the most dangerous SSRI interactions and is an absolute contraindication.",
      },
      {
        id: "clozapine-interaction",
        question: "Patient on clozapine for schizophrenia with comorbid OCD",
        recommendation: "Reduce clozapine to ONE-THIRD of the original dose BEFORE starting fluvoxamine. Monitor clozapine levels at week 1, 4, 8. Watch for seizures, sedation, myocarditis.",
        reasoning: "CYP1A2 is the main clozapine metaboliser. Fluvoxamine inhibits CYP1A2 → clozapine levels rise 3–5-fold → seizures, myocarditis, agranulocytosis risk. The interaction can be used THERAPEUTICALLY to allow clozapine dose reduction in treatment-resistant schizophrenia (cost-saving).",
      },
      {
        id: "theophylline-interaction",
        question: "Patient on theophylline for asthma",
        recommendation: "AVOID fluvoxamine if possible — use sertraline or escitalopram instead. If fluvoxamine is essential, reduce theophylline to ONE-THIRD and monitor levels (narrow therapeutic index).",
        reasoning: "Theophylline is a CYP1A2 substrate with a narrow therapeutic index. Fluvoxamine raises theophylline levels → toxicity (nausea, seizures, arrhythmias). Prefer sertraline/escitalopram which do not affect CYP1A2.",
      },
      {
        id: "caffeine-counsel",
        question: "Patient consumes multiple cups of coffee/tea/energy drinks daily",
        recommendation: "Counsel STRICT caffeine restriction to 1–2 cups/day BEFORE starting fluvoxamine. CYP1A2 inhibition causes caffeine accumulation → jitteriness, palpitations, insomnia. Switch to decaf where possible. Energy drinks and strong tea also contain caffeine.",
        reasoning: "Caffeine is widespread in Indian diets (coffee in south India, tea nationwide, energy drinks in young adults). CYP1A2 inhibition by fluvoxamine slows caffeine elimination ~5-fold. This is one of the most clinically relevant fluvoxamine interactions in Indian practice — often missed because caffeine is perceived as harmless.",
      },
      {
        id: "start-fluvoxamine",
        question: "Why choose Fluvoxamine (after screening)?",
        recommendation: "Fluvoxamine 50mg at bedtime, titrate by 50mg every 4–7 days to 100–300mg/day (BD dosing at ≥100mg). Indications: OCD not responding to first-line SSRIs, or OCD with significant comorbid anxiety (σ1 agonism, sedation benefit).",
        reasoning: "Fluvoxamine has extensive RCT evidence in OCD. Its σ1 agonism (shared with sertraline) may benefit OCD-related anxiety. Bedtime dosing preferred (most sedating SSRI after paroxetine). OCD response takes 8–12 weeks — counsel patience.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian private psychiatry OPD initiation for OCD that has not responded to sertraline, in an adult with no interacting drugs",
    lines: [
      "Rx",
      "Tab Fluvoxamine 50 mg",
      "1 tab at bedtime × 7 days",
      "",
      "Then increase to:",
      "Tab Fluvoxamine 50 mg",
      "1 tab BD (morning + bedtime) × 7 days",
      "",
      "Then increase to:",
      "Tab Fluvoxamine 100 mg",
      "1 tab BD (morning + bedtime)",
      "",
      "Maximum: 300 mg/day. OCD response: 8–12 weeks.",
      "",
      "Advice: Take at bedtime — it can make you sleepy.",
      "LIMIT CAFFEINE to 1–2 cups/day. Switch to decaf where possible.",
      "Tell every doctor and pharmacist you take fluvoxamine — MANY drug interactions.",
      "NEVER combine with tizanidine (muscle relaxant) — dangerous blood pressure drop.",
      "If on clozapine (schizophrenia), tell your psychiatrist BEFORE starting — dose must be reduced to 1/3.",
      "Report if feeling worse or new suicidal thoughts. Tele-MANAS 14416 for crisis.",
    ],
    followUp: [
      "Review after 2 weeks — tolerability (nausea, sedation, vivid dreams), suicidality.",
      "Review after 4 weeks — early response, caffeine adherence, dose titration.",
      "Review after 8 weeks — Y-BOCS (partial response expected).",
      "Review after 12 weeks — full OCD response assessment.",
      "If remission (Y-BOCS <8): continue for 1–2 YEARS (OCD has higher relapse rates than depression).",
      "If no response at 12 weeks at 200–300mg/day: augment (aripiprazole, risperidone) or switch (clomipramine). Add CBT with ERP.",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information, screen for CYP1A2 substrates (tizanidine, clozapine, theophylline, caffeine) before prescribing, and individualise for each patient. In most Indian clinical scenarios, fluvoxamine is a second-line SSRI — sertraline or fluoxetine are preferred first-line for OCD.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Prescribing fluvoxamine to a patient on tizanidine",
      why: "CYP1A2 inhibition by fluvoxamine causes ~10-fold rise in tizanidine levels → severe hypotension, bradycardia, syncope. This is an ABSOLUTE CONTRAINDICATION and one of the most dangerous SSRI interactions. Tizanidine is commonly prescribed by orthopaedicians in India — easily missed.",
      correction: "ALWAYS ask about tizanidine use before prescribing fluvoxamine. If tizanidine is needed, switch SSRI to sertraline/escitalopram. If fluvoxamine is essential, switch muscle relaxant to baclofen or cyclobenzaprine.",
    },
    {
      mistake: "Starting fluvoxamine without reducing clozapine dose",
      why: "CYP1A2 inhibition by fluvoxamine raises clozapine levels 3–5-fold → seizures, severe sedation, myocarditis, agranulocytosis. Clozapine must be reduced to ONE-THIRD of the original dose BEFORE starting fluvoxamine.",
      correction: "ALWAYS check for clozapine use. If patient is on clozapine, reduce to 1/3 dose BEFORE starting fluvoxamine. Monitor clozapine levels at week 1, 4, 8. Watch for seizures, sedation, hypersalivation, myocarditis signs.",
    },
    {
      mistake: "Not counselling about caffeine restriction",
      why: "CYP1A2 inhibition by fluvoxamine slows caffeine elimination ~5-fold. Caffeine accumulates → jitteriness, palpitations, insomnia. Often misattributed to 'SSRI activation'. Indian patients often consume multiple cups of coffee/tea/energy drinks daily.",
      correction: "ALWAYS assess caffeine intake at the first visit. Counsel to LIMIT to 1–2 cups/day BEFORE starting fluvoxamine. Switch to decaf where possible. Energy drinks and strong tea also contain caffeine. Reassess at every follow-up.",
    },
    {
      mistake: "Using fluvoxamine as first-line for depression",
      why: "Fluvoxamine is NOT FDA-approved for depression in the US (only OCD). In India, sertraline, escitalopram, and fluoxetine are preferred first-line for depression — lower cost, wider availability, simpler interaction profile. Fluvoxamine's CYP1A2 profile and higher cost make it a poor first choice for depression.",
      correction: "Reserve fluvoxamine for OCD that has not responded to first-line SSRIs. For depression, use sertraline or escitalopram. If fluvoxamine is essential for depression (e.g., comorbid OCD), counsel carefully about interactions.",
    },
    {
      mistake: "Not counselling about sedation and timing the dose",
      why: "Fluvoxamine is the most sedating SSRI after paroxetine (likely σ1 agonism + 5-HT2C affinity). Daytime drowsiness affects adherence and daily function if dose is taken in the morning.",
      correction: "Counsel to take fluvoxamine at BEDTIME. If sedation persists despite bedtime dosing, consider dose reduction or moving dose earlier in the evening. Most sedation settles in 1–2 weeks.",
    },
    {
      mistake: "Declaring OCD treatment failure at 4 weeks",
      why: "OCD takes 8–12 weeks for full SSRI response — longer than depression's 4–6 weeks. Declaring failure at 4 weeks (and switching) means stopping before the drug has had a chance to work. This is a common Indian OPD pitfall where follow-up is short.",
      correction: "Counsel at initiation: 'OCD takes 8–12 weeks to respond — don't stop early.' Continue at adequate dose (200–300mg/day) for at least 12 weeks before declaring failure. Augment with CBT (exposure and response prevention) which has comparable efficacy to SSRIs.",
    },
    {
      mistake: "Not asking about theophylline use in asthma patients",
      why: "Theophylline is a CYP1A2 substrate with a narrow therapeutic index. Fluvoxamine raises theophylline levels → toxicity (nausea, seizures, arrhythmias). Although theophylline use has declined in India with inhaled steroids, it is still used in some asthmatics.",
      correction: "ALWAYS ask about theophylline use. If patient is on theophylline, prefer sertraline or escitalopram. If fluvoxamine is essential, reduce theophylline to 1/3 and monitor levels.",
    },
    {
      mistake: "Forgetting the 14-day MAOI washout",
      why: "MAOI + SSRI = potentially fatal serotonin syndrome. The 14-day washout is non-negotiable — same as all SSRIs.",
      correction: "Always ask about MAOI use before starting. Wait at least 14 days after stopping an MAOI before starting fluvoxamine, and vice versa.",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Concurrent tizanidine use",
      reason: "CYP1A2 inhibition by fluvoxamine causes ~10-fold rise in tizanidine levels → severe hypotension, bradycardia, syncope. ABSOLUTE CONTRAINDICATION.",
      alternative: "Switch SSRI to sertraline or escitalopram (no CYP1A2 effect). If fluvoxamine is essential, switch muscle relaxant to baclofen or cyclobenzaprine.",
    },
    {
      scenario: "Active MAOI use (within 14 days)",
      reason: "Fatal serotonin syndrome. The 14-day washout is absolute.",
      alternative: "Wait 14 days after stopping MAOI before starting fluvoxamine.",
    },
    {
      scenario: "Concurrent thioridazine or pimozide",
      reason: "QTc prolongation (additive). Thioridazine and pimozide are themselves QTc-prolonging and should not be combined with fluvoxamine.",
      alternative: "Switch antipsychotic to one with lower QTc burden (aripiprazole, lurasidone) OR switch SSRI to sertraline (lower interaction profile).",
    },
    {
      scenario: "Concurrent clozapine WITHOUT dose reduction",
      reason: "CYP1A2 inhibition raises clozapine levels 3–5-fold → seizures, severe sedation, myocarditis, agranulocytosis. Starting fluvoxamine at full clozapine dose is dangerous.",
      alternative: "Reduce clozapine to ONE-THIRD of the original dose BEFORE starting fluvoxamine. Monitor clozapine levels. Alternatively, use sertraline or fluoxetine (minimal CYP1A2 effect) for OCD in clozapine-treated patients.",
    },
    {
      scenario: "Patient on theophylline with narrow therapeutic index",
      reason: "CYP1A2 inhibition raises theophylline levels → toxicity (nausea, seizures, arrhythmias). Theophylline has a narrow therapeutic index.",
      alternative: "Switch SSRI to sertraline or escitalopram (no CYP1A2 effect). If fluvoxamine is essential, reduce theophylline to 1/3 and monitor levels closely.",
    },
    {
      scenario: "Bipolar depression without mood stabiliser",
      reason: "SSRI monotherapy can trigger a manic switch — potentially dangerous. Same risk as all antidepressants.",
      alternative: "Mood stabiliser first (lithium, valproate, lamotrigine). SSRI only if mood stabiliser alone is insufficient — and prefer sertraline or fluoxetine (better bipolar depression data).",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "What is unique about fluvoxamine among the SSRIs? (Most potent CYP1A2 inhibitor in the class — signature interactions with clozapine, theophylline, caffeine, tizanidine, warfarin. Also the only SSRI whose sole FDA-approved US indication is OCD.)",
      "Why is tizanidine CONTRAINDICATED with fluvoxamine? (CYP1A2 inhibition causes ~10-fold rise in tizanidine levels → severe hypotension, bradycardia, syncope.)",
      "How should clozapine dose be adjusted when starting fluvoxamine? (Reduce clozapine to ONE-THIRD of the original dose BEFORE starting fluvoxamine. Monitor clozapine levels and WBC.)",
      "What counselling would you give about caffeine to a patient starting fluvoxamine? (LIMIT to 1–2 cups/day. CYP1A2 inhibition causes caffeine accumulation → jitteriness, palpitations, insomnia. Switch to decaf where possible.)",
      "What is the FDA-approved indication for fluvoxamine, and how long does OCD take to respond? (OCD only in the US — adults and ≥8 years. OCD response takes 8–12 weeks, longer than depression's 4–6 weeks.)",
      "Why is fluvoxamine sedating? (Most sedating SSRI after paroxetine — likely σ1 agonism + 5-HT2C affinity. Bedtime dosing preferred.)",
    ],
    residentExpects: [
      "Know the CYP1A2 substrate interactions cold: tizanidine (contraindicated), clozapine (1/3 dose), theophylline (1/3 dose), caffeine (limit 1–2 cups/day), warfarin (monitor INR), ramelteon (reduce dose).",
      "Know the OCD dosing: start 50mg at bedtime, titrate by 50mg every 4–7 days to 100–300mg/day (BD at ≥100mg). Maximum 300mg/day.",
      "Know when to declare OCD treatment failure: at least 12 weeks at 200–300mg/day before switching or augmenting. Augmentation: aripiprazole, risperidone. CBT with ERP.",
      "Know the discontinuation protocol: taper over 4+ weeks. Substitute fluoxetine for last 2 weeks (self-tapers). Half-life is 12–13h — relatively short, so discontinuation syndrome is more pronounced than with fluoxetine.",
      "Know when to use fluvoxamine therapeutically with clozapine: in treatment-resistant schizophrenia, fluvoxamine can allow clozapine dose reduction (cost-saving) — but requires expert monitoring.",
      "Know when to refer to psychiatry: no response at 12 weeks at 200–300mg/day, tizanidine co-prescription, clozapine toxicity, suicidal ideation, bipolar suspicion.",
    ],
    consultantsDo: [
      "Screen for ALL CYP1A2 substrates before prescribing: tizanidine, clozapine, theophylline, caffeine, warfarin, ramelteon, melatonin, olanzapine (partly).",
      "Reserve fluvoxamine for OCD that has not responded to first-line SSRIs (sertraline, fluoxetine) — not for first-line depression in India.",
      "Counsel caffeine restriction EXPLICITLY at the first visit — Indian patients often consume multiple cups of coffee/tea/energy drinks daily.",
      "Use Y-BOCS at every visit for objective OCD monitoring (not just PHQ-9, which is for depression).",
      "Combine SSRI + CBT with ERP for OCD (better outcomes than either alone).",
      "Continue treatment for 1–2 YEARS after OCD remission (higher relapse rates than depression).",
      "Consider the therapeutic clozapine-fluvoxamine interaction in treatment-resistant schizophrenia (allows clozapine dose reduction — cost-saving).",
    ],
    internsMiss: [
      "Forgetting to ask about tizanidine use — orthopaedicians prescribe it commonly in India.",
      "Starting fluvoxamine without reducing clozapine dose — dangerous.",
      "Not counselling about caffeine restriction — patient presents with jitteriness and palpitations 2 weeks later, often misattributed to 'SSRI activation'.",
      "Not counselling about sedation and timing the dose at bedtime — patient takes morning dose and is drowsy all day.",
      "Declaring OCD treatment failure at 4 weeks — OCD takes 8–12 weeks.",
      "Not asking about theophylline in asthma patients.",
      "Not asking about sexual dysfunction — patient stops silently.",
      "Not checking sodium in elderly — presents with confusion 2 weeks later.",
      "Not screening for bipolar disorder — patient has manic switch.",
      "Not involving family in monitoring (critical in Indian joint family system, especially for caffeine adherence and sedation).",
    ],
  },

  /* Refined high-yield level */
  highYieldLevel: "high",

  /* Drug family navigation */
  drugFamilyNav: {
    familyName: "SSRIs (Selective Serotonin Reuptake Inhibitors)",
    members: [
      { name: "Sertraline", slug: "sertraline", relationship: "Same class (SSRI)", distinguishing: "SSRI of choice in pregnancy; σ1 agonism; 6 FDA indications" },
      { name: "Fluoxetine", slug: "fluoxetine", relationship: "Same class (SSRI)", distinguishing: "Longest half-life; only SSRI for bulimia; paediatric ≥8yr" },
      { name: "Escitalopram", slug: "escitalopram", relationship: "Same class (SSRI)", distinguishing: "S-enantiomer of citalopram; lowest CYP interactions; QTc watch" },
      { name: "Paroxetine", slug: "paroxetine", relationship: "Same class (SSRI)", distinguishing: "Shortest half-life (worst discontinuation); Category D; tamoxifen interaction; most sedating" },
      { name: "Citalopram", slug: "citalopram", relationship: "Same class (SSRI)", distinguishing: "Racemic parent of escitalopram; QTc dose-dependent; 40mg cap" },
      { name: "Fluvoxamine", slug: "fluvoxamine", relationship: "Current drug", distinguishing: "OCD-only FDA indication (US); most potent CYP1A2 inhibitor; tizanidine CONTRAINDICATED; clozapine → 1/3 dose; caffeine limit 1–2 cups/day; σ1 agonist; most sedating after paroxetine" },
    ],
  },

  /* Learning time breakdown */
  learningTimeBreakdown: {
    read: "17 min",
    study: "45 min",
    revision: "8 min",
  },

  /* ---- Educational UX Layer ---- */

  /* Inline micro-quizzes — one after each major learning milestone */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "What is unique about fluvoxamine's interaction profile among the SSRIs?",
      options: [
        "It is the most potent CYP2D6 inhibitor",
        "It is the most potent CYP1A2 inhibitor — affecting clozapine, theophylline, caffeine, tizanidine",
        "It does not inhibit any CYP enzymes",
        "It is the only SSRI that does not interact with other drugs",
      ],
      correctIndex: 1,
      explanation: "Fluvoxamine is the most potent CYP1A2 inhibitor among SSRIs. CYP1A2 metabolises clozapine, theophylline, caffeine, tizanidine, warfarin (partly), and ramelteon. This gives fluvoxamine its signature interaction profile — tizanidine is contraindicated, clozapine and theophylline require 1/3 dose reduction, and caffeine must be limited to 1–2 cups/day.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-indication",
      question: "What is the FDA-approved indication for fluvoxamine in the United States?",
      options: ["Depression only", "OCD only (adults and ≥8 years)", "PTSD only", "Bulimia nervosa only"],
      correctIndex: 1,
      explanation: "Fluvoxamine is FDA-approved ONLY for OCD in the US — in adults and children ≥8 years. It is NOT FDA-approved for depression in the US (though it is approved for depression in some other countries). This is in contrast to sertraline (6 indications) or fluoxetine (multiple indications).",
      afterSectionId: "timeline",
    },
    {
      id: "quiz-tizanidine",
      question: "A patient on fluvoxamine is prescribed tizanidine by an orthopaedician for back spasm. What should you do?",
      options: [
        "Continue both drugs at the same dose",
        "Reduce tizanidine dose by half",
        "STOP tizanidine — combination is CONTRAINDICATED due to ~10-fold rise in tizanidine levels",
        "Increase fluvoxamine dose",
      ],
      correctIndex: 2,
      explanation: "Fluvoxamine + tizanidine is CONTRAINDICATED. CYP1A2 inhibition by fluvoxamine causes ~10-fold rise in tizanidine levels → severe hypotension, bradycardia, syncope. Either stop tizanidine and switch to baclofen/cyclobenzaprine, OR switch SSRI to sertraline/escitalopram. Tizanidine is commonly prescribed by orthopaedicians in India — always ask.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-clozapine",
      question: "A patient on clozapine 300mg/day for schizophrenia is started on fluvoxamine for comorbid OCD. What clozapine dose adjustment is required?",
      options: [
        "No adjustment needed",
        "Reduce clozapine to 200mg/day",
        "Reduce clozapine to 100mg/day (1/3 of original dose)",
        "Discontinue clozapine",
      ],
      correctIndex: 2,
      explanation: "Reduce clozapine to ONE-THIRD of the original dose (100mg/day) BEFORE starting fluvoxamine. CYP1A2 inhibition raises clozapine levels 3–5-fold → seizures, severe sedation, myocarditis, agranulocytosis risk. Monitor clozapine levels at week 1, 4, 8. The interaction can be used THERAPEUTICALLY to allow clozapine dose reduction in treatment-resistant schizophrenia (cost-saving).",
      afterSectionId: "monitoring",
    },
    {
      id: "quiz-caffeine",
      question: "A 22-year-old student on fluvoxamine 100mg BD for OCD presents with palpitations, anxiety, and insomnia. He drinks 5–6 cups of coffee/day to study. What is the diagnosis?",
      options: [
        "SSRI activation syndrome",
        "Serotonin syndrome",
        "Caffeine toxicity due to CYP1A2 inhibition by fluvoxamine",
        "Bipolar manic switch",
      ],
      correctIndex: 2,
      explanation: "Caffeine toxicity due to CYP1A2 inhibition by fluvoxamine. Caffeine accumulates ~5-fold → jitteriness, palpitations, insomnia. Often misattributed to 'SSRI activation'. Management: LIMIT caffeine to 1–2 cups/day, switch to decaf where possible, energy drinks and strong tea also contain caffeine. Reassess in 1–2 weeks. This is one of the most common Indian fluvoxamine pitfalls — caffeine is widespread in Indian diets.",
      afterSectionId: "contraindications",
    },
    {
      id: "quiz-onset",
      question: "How long does OCD take to respond to fluvoxamine (or any SSRI)?",
      options: ["1–2 weeks", "4–6 weeks (same as depression)", "8–12 weeks (longer than depression)", "6 months"],
      correctIndex: 2,
      explanation: "OCD takes 8–12 weeks for full SSRI response — LONGER than depression's 4–6 weeks. Declaring failure at 4 weeks (and switching) means stopping before the drug has had a chance to work. Continue at adequate dose (200–300mg/day for fluvoxamine) for at least 12 weeks before declaring failure. Counsel patience at initiation.",
      afterSectionId: "evidence-practice",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "What is unique about fluvoxamine's CYP inhibition profile among the SSRIs, and which drugs are most affected?",
      answer: "Fluvoxamine is the most potent CYP1A2 inhibitor among SSRIs. CYP1A2 metabolises: tizanidine (CONTRAINDICATED — 10-fold level rise → severe hypotension), clozapine (reduce to 1/3 dose — 3–5-fold level rise → seizures, myocarditis), theophylline (reduce to 1/3 dose — narrow therapeutic index), caffeine (limit to 1–2 cups/day — 5-fold accumulation → jitteriness, palpitations), warfarin (monitor INR), ramelteon (reduce dose). Fluvoxamine also inhibits CYP2C9, CYP3A4, and CYP2C19 to a lesser extent.",
      topic: "Pharmacokinetics",
    },
    {
      question: "Why is tizanidine CONTRAINDICATED with fluvoxamine? Describe the clinical presentation of the interaction and the management.",
      answer: "Tizanidine is a CYP1A2 substrate. Fluvoxamine inhibits CYP1A2 → tizanidine levels rise ~10-fold → severe hypotension, bradycardia, syncope. Clinical presentation: dizziness on standing, near-syncope or syncope, bradycardia on monitoring. Management: STOP tizanidine immediately, supportive care (IV fluids, supine position, monitor BP/HR), switch muscle relaxant to baclofen or cyclobenzaprine (not CYP1A2 substrates). Alternative: switch SSRI to sertraline/escitalopram. Tizanidine is commonly prescribed by orthopaedicians in India — always ask.",
      topic: "Drug Interactions",
    },
    {
      question: "A patient on clozapine 300mg/day for schizophrenia is prescribed fluvoxamine 100mg BD for comorbid OCD. Critically evaluate the prescription.",
      answer: "DANGEROUS prescription. Fluvoxamine inhibits CYP1A2 (the main clozapine metaboliser) → clozapine levels rise 3–5-fold → seizures, severe sedation, myocarditis, agranulocytosis. Management: STOP fluvoxamine immediately, reduce clozapine to 1/3 (~100mg/day) BEFORE restarting fluvoxamine, monitor clozapine levels (week 1, 4, 8), monitor WBC, watch for seizures and myocarditis. Alternatively, switch OCD treatment to sertraline or fluoxetine (minimal CYP1A2 effect). Note: The interaction can be used THERAPEUTICALLY in treatment-resistant schizophrenia to allow clozapine dose reduction.",
      topic: "Drug Interactions",
    },
    {
      question: "List the Indian brands of fluvoxamine, the Schedule H status, and the Jan Aushadhi availability. Why is fluvoxamine rarely first-line in India?",
      answer: "Indian brands: Luvox (Abbott — originator, costly), Fluvaxin (Sun Pharma), Voxam (Cipla), Favo (Intas). Schedule H (prescription-only). Jan Aushadhi: NOT commonly available — fluvoxamine is rarely stocked in Jan Aushadhi Kendras or government hospital pharmacies due to lower demand and higher procurement cost. Reasons it is rarely first-line in India: (1) higher cost (₹8–25/tablet vs ₹2–5 for sertraline); (2) patchy rural availability; (3) complex CYP1A2 interaction profile (with caffeine — common in Indian diets, and clozapine, theophylline, tizanidine); (4) OCD-only FDA indication limits use to OCD; (5) sedation profile. Sertraline and fluoxetine are preferred first-line for OCD in India.",
      topic: "Indian Context",
    },
    {
      question: "What counselling would you give a patient starting fluvoxamine about caffeine? Why is this particularly relevant in Indian practice?",
      answer: "Counsel: 'LIMIT CAFFEINE to 1–2 cups/day. Fluvoxamine slows your body's breakdown of caffeine, so your normal cup can build up and cause jitteriness, palpitations, or insomnia. Avoid energy drinks. Switch to decaf where possible. Strong tea also contains caffeine.' This is particularly relevant in India because: (1) coffee is widely consumed in south India; (2) tea (chai) is consumed nationwide, often multiple cups/day; (3) energy drinks are popular in young adults and students. CYP1A2 inhibition by fluvoxamine slows caffeine elimination ~5-fold. Caffeine toxicity is often misattributed to 'SSRI activation' — always assess caffeine intake at every visit.",
      topic: "Patient Counselling",
    },
    {
      question: "How long does OCD take to respond to fluvoxamine (or any SSRI)? What is the management of treatment-resistant OCD after adequate fluvoxamine trial?",
      answer: "OCD takes 8–12 weeks for full SSRI response — longer than depression's 4–6 weeks. Continue at adequate dose (200–300mg/day for fluvoxamine) for at least 12 weeks before declaring failure. Treatment-resistant OCD management after adequate fluvoxamine trial: (1) augmentation with antipsychotics (aripiprazole 5–15mg, risperidone 0.5–3mg); (2) switch to clomipramine (TCA, gold standard pre-SSRI); (3) glutamatergic agents (memantine, N-acetylcysteine); (4) CBT with ERP (exposure and response prevention) — comparable efficacy to SSRIs and should be added if not already; (5) consider deep brain stimulation or gamma ventral capsulotomy for severe refractory OCD. Continue treatment for 1–2 YEARS after OCD remission (higher relapse rates than depression).",
      topic: "Clinical Management",
    },
  ],

  /* Guided learning paths — each mode shows a curated subset of sections */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language. What you need to know to take your medicine safely — especially caffeine restriction and drug interactions.",
      visibleSections: ["top", "quick-facts", "patient-education", "faq", "emergency"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "19 min",
      description: "Foundations, mechanism, OCD indication, signature CYP1A2 interactions, and MBBS exam content.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "interactions", "patient-education", "learning-module", "high-yield-summary", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full clinical detail with exam-specific content, PYQs, and drug comparisons (esp. fluvoxamine's CYP1A2 profile).",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "44 min",
      description: "Everything — advanced reasoning, ward pearls, guideline comparison, full evidence on OCD management.",
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
      checkpoint: "You now know what Fluvoxamine is, its OCD-only FDA indication in the US, and its unique role as the most potent CYP1A2 inhibitor among SSRIs.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Why is it different from other SSRIs?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand the mechanism — SERT blockade for OCD, σ1 agonism for anxiolysis, and the CYP1A2 inhibition that drives its signature interaction profile. The 8–12 week OCD response delay now makes sense.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When do you use it? What goes wrong — especially with tizanidine, clozapine, theophylline, and caffeine?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now prescribe fluvoxamine safely — you know the tizanidine contraindication, the clozapine 1/3 dose rule, the caffeine restriction, the theophylline interaction, and the 8–12 week OCD response timeline.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it actually used in Indian hospitals — and why is it rarely first-line?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands (Luvox, Fluvaxin, Voxam, Favo), the cost (₹8–25/tablet), the lack of Jan Aushadhi availability, the caffeine pitfall in Indian diets, and the common mistakes interns make.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content (tizanidine contraindication, clozapine 1/3 dose, caffeine limit, OCD-only FDA indication), worked through a clinical case, compared fluvoxamine with alternatives, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions, you have exam-level mastery of Fluvoxamine — including its CYP1A2 interaction profile and its role as a reserved SSRI in Indian practice.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Luvox label, APA OCD Guideline, NICE CG31, KD Tripathi 8e, IPS OCD Guidelines, NMC CBME Curriculum"],
};
