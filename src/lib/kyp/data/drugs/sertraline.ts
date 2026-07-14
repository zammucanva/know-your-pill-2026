import type { Drug } from "../types";

/**
 * Sertraline — canonical drug page data.
 *
 * This file is the reference template for every future medication page.
 * Every section of /app/drugs/[slug]/page.tsx reads from this structure.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for Zoloft (sertraline hydrochloride)
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *
 * Last reviewed: 2026-07-13
 */
export const sertraline: Drug = {
  /* ---- Identity ---- */
  slug: "sertraline",
  genericName: "Sertraline",
  brandNames: ["Zoloft", "Lustral", "Sereupin"],
  drugClass: "ssri",
  drugClassLabel: "SSRI",
  drugClassFullName: "Selective Serotonin Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SSRIs", "Sertraline"],

  /* ---- Hero / summary ---- */
  tagline: "A selective serotonin reuptake inhibitor used across mood, anxiety, and obsessive-compulsive disorders.",
  summary:
    "Sertraline blocks the serotonin transporter (SERT) at the presynaptic membrane, increasing serotonin availability in the synaptic cleft. Over 2–6 weeks, downstream neuroadaptive changes — including 5-HT1A autoreceptor desensitisation and increased BDNF expression in the hippocampus — produce the clinical antidepressant and anxiolytic effects. It is the most widely prescribed SSRI in the United States and is FDA-approved for six distinct indications across paediatric and adult populations.",
  estimatedReadTime: "18 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of sertraline — from acute SERT blockade to chronic 5-HT1A autoreceptor desensitisation.",
    "Predict the common and serious side effects based on serotonergic pharmacology.",
    "Choose appropriate monitoring parameters for a patient starting sertraline.",
    "Compare sertraline with other SSRIs (fluoxetine, escitalopram, paroxetine) and select the right agent for the right patient.",
    "Recognise and manage serotonin syndrome, SIADH, and discontinuation syndrome.",
    "Counsel a patient on what to expect in the first 6 weeks of therapy.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Sertraline selectively blocks the serotonin transporter (SERT), increasing serotonin concentration in the synaptic cleft and enhancing serotonergic neurotransmission.",
    molecularTarget: "SERT (SLC6A4 — serotonin transporter)",
    effect:
      "Acute: increased synaptic serotonin. Chronic (2–6 weeks): desensitisation of 5-HT1A somatodendritic autoreceptors in the raphe nuclei, increased serotonergic throughput to the prefrontal cortex, and upregulation of BDNF in the hippocampus.",
    steps: [
      "Sertraline binds the serotonin transporter (SERT) on the presynaptic neuron, blocking reuptake of serotonin from the synaptic cleft.",
      "Acute blockade raises synaptic serotonin concentration within hours — but somatodendritic 5-HT1A autoreceptors in the raphe nuclei detect this and inhibit further serotonin release.",
      "Over 7–14 days, 5-HT1A autoreceptors gradually desensitise — removing the brake on serotonin firing.",
      "Serotonergic throughput from the raphe nuclei to the prefrontal cortex, amygdala, and hippocampus increases.",
      "Downstream neuroadaptive changes occur over 2–6 weeks: increased BDNF expression, hippocampal neurogenesis, and receptor downregulation.",
      "These delayed adaptations — not the acute serotonin increase — correlate with the onset of clinical antidepressant and anxiolytic effects.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~44% due to first-pass metabolism). Peak plasma at 4.5–8.4 hours. Food increases peak concentration by ~25% but does not affect absorption. Highly protein-bound (98%). Volume of distribution ~20 L/kg — distributes widely including into CNS.",
    halfLife: "Approximately 26 hours (range 22–36 hours).",
    activeMetabolite:
      "N-desmethylsertraline — pharmacologically active but with 1/10th the SERT affinity and 2.5× longer half-life (~62 hours). Minimal clinical contribution to efficacy but contributes to withdrawal being relatively mild vs paroxetine.",
    metabolism: "Hepatic CYP2B6 (primary), CYP2C19, CYP2D6, and CYP3A4 (minor). Multiple pathways reduce the impact of CYP polymorphisms.",
    excretion: "Roughly equal renal (40–45%) and faecal (40–45%) elimination of metabolites.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic", label: "Presynaptic neuron", sublabel: "Raphe nuclei — synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT transporter", sublabel: "Normally reuptakes serotonin", variant: "target" },
      { id: "sertraline", label: "Sertraline", sublabel: "Blocks SERT", variant: "inhibit" },
      { id: "cleft", label: "↑ Synaptic 5-HT", sublabel: "More serotonin available", variant: "output" },
      { id: "autoreceptor", label: "5-HT1A autoreceptor", sublabel: "Initially brakes firing", variant: "process" },
      { id: "desensitised", label: "Autoreceptors desensitise", sublabel: "Days 7–14 — brake removed", variant: "output" },
      { id: "pfc", label: "Prefrontal cortex", sublabel: "Mood regulation improves", variant: "output" },
      { id: "bdnf", label: "↑ BDNF + neurogenesis", sublabel: "Weeks 2–6 — full effect", variant: "output" },
    ],
    edges: [
      { from: "presynaptic", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "sertraline", to: "sert", type: "inhibit", label: "blocks" },
      { from: "serotonin", to: "cleft", label: "accumulates" },
      { from: "cleft", to: "autoreceptor", label: "detects" },
      { from: "autoreceptor", to: "desensitised", label: "over 7–14 days" },
      { from: "desensitised", to: "pfc", label: "increased throughput" },
      { from: "pfc", to: "bdnf", label: "weeks 2–6" },
    ],
    caption:
      "The delay between acute SERT blockade (hours) and clinical effect (weeks) is the single most important concept in SSRI pharmacology.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: ["SERT (serotonin transporter)", "5-HT1A (autoreceptor, desensitises)", "5-HT2C", "5-HT7", "σ1 receptor (agonist)"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // SSRIs act on the diffuse serotonergic projection system, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description: "First-line treatment in adults. Also approved for paediatric MDD aged 6–17.",
      ageGroup: "Adults & ≥6 years",
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD)",
      status: "fda-approved",
      description: "First-line pharmacotherapy. Approved in adults and paediatric patients aged 6–17. Often requires higher doses (up to 200 mg/day) than depression.",
      ageGroup: "Adults & ≥6 years",
    },
    {
      name: "Panic Disorder",
      status: "fda-approved",
      description: "Reduces frequency and intensity of panic attacks. Onset of benefit typically at 4 weeks; full effect at 8–12 weeks.",
    },
    {
      name: "Post-Traumatic Stress Disorder (PTSD)",
      status: "fda-approved",
      description: "Only SSRI FDA-approved for PTSD. Reduces intrusion, avoidance, and hyperarousal clusters. Effect size is modest — combine with trauma-focused psychotherapy for best outcomes.",
    },
    {
      name: "Social Anxiety Disorder (Social Phobia)",
      status: "fda-approved",
      description: "First-line pharmacotherapy. Onset slower than for depression — 8–12 weeks for full response.",
    },
    {
      name: "Premenstrual Dysphoric Disorder (PMDD)",
      status: "fda-approved",
      description: "Can be dosed continuously or intermittently (luteal phase only). Intermittent dosing is effective because onset of serotonergic effect on PMDD symptoms is rapid (days), unlike the 4–6 week onset for depression.",
    },
    {
      name: "Generalised Anxiety Disorder (GAD)",
      status: "off-label",
      description: "Widely used off-label; SSRIs are first-line per NICE guidelines though sertraline lacks a specific FDA indication for GAD.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (including phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. At least 14 days must elapse between discontinuation of an MAOI and initiation of sertraline.",
    },
    {
      name: "Pimozide",
      severity: "absolute",
      rationale:
        "Contraindicated due to QTc prolongation and risk of torsades de pointes. CYP2D6 inhibition by sertraline raises pimozide levels.",
    },
    {
      name: "Known hypersensitivity to sertraline",
      severity: "absolute",
      rationale: "Anaphylaxis and angioedema have been reported.",
    },
    {
      name: "Concurrent disulfiram",
      severity: "relative",
      rationale: "Sertraline oral concentrate contains 12% alcohol — avoid in patients taking disulfiram.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of sertraline in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes.",
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
      description: "Decreased libido, delayed orgasm/anorgasmia, erectile dysfunction. Often unreported by patients and undertreated. May persist even after discontinuation in a subset of patients (PSSD).",
      management: "Dose reduction if possible. Add bupropion XL 150 mg/day. Consider switch to mirtazapine or bupropion. Sildenafil for erectile component.",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Insomnia or somnolence",
      frequency: "common",
      severity: "mild",
      description: "Either can occur; sertraline is mildly activating in most patients — morning dosing preferred.",
      management: "If activating → take in morning. If sedating → take at night. If severe, switch to escitalopram.",
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
      description: "Mild anticholinergic effect. Sip water, sugar-free gum.",
    },
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "Usually mild and transient. If persistent or severe, evaluate for hyponatraemia.",
    },
    {
      name: "Diarrhoea",
      frequency: "common",
      severity: "mild",
      description: "Serotonin acts on 5-HT3 receptors in the gut. Usually transient.",
    },
    {
      name: "Sweating",
      frequency: "common",
      severity: "mild",
      description: "Particularly nocturnal. Mechanism unclear — likely serotonergic effect on hypothalamic thermoregulation. Distressing but benign.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Serotonin Syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis), and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of initiating, increasing, or combining serotonergic agents.",
      management: "Discontinue sertraline immediately. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU admission for hyperthermia >41°C.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "SIADH / Hyponatraemia",
      frequency: "uncommon",
      severity: "severe",
      description: "Syndrome of inappropriate antidiuretic hormone. Risk highest in elderly, females, and during first 2 weeks. Presents as headache, nausea, confusion, seizures.",
      management: "Check serum sodium at baseline and within 2 weeks for high-risk patients. Fluid restrict. Hypertonic saline if seizures or Na <120 mmol/L.",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description: "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk.",
      management: "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent.",
    },
    {
      name: "Abnormal bleeding",
      frequency: "uncommon",
      severity: "moderate",
      description: "Serotonin is stored in platelets and is essential for aggregation. SSRIs deplete platelet serotonin within 2 weeks, impairing clotting. Risk multiplied when combined with NSAIDs, aspirin, or warfarin.",
      management: "Caution in patients with coagulopathy or on anticoagulants. Consider GI protection if combined with NSAIDs.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description: "In patients with undiagnosed bipolar disorder, SSRIs can trigger a manic episode. Screen for personal and family history of bipolar disorder before initiating.",
      management: "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description: "Seizure risk is dose-dependent. Very rare at therapeutic doses; overdose significantly increases risk.",
      management: "Use cautiously in patients with epilepsy. Benzodiazepines for seizure in overdose setting.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "common",
      severity: "moderate",
      description: "Occurs if stopped abruptly after ≥4 weeks of use. Symptoms: dizziness, 'brain zaps' (paresthesia), nausea, headache, irritability, insomnia. Worse with shorter half-life SSRIs (paroxetine > sertraline > fluoxetine).",
      management: "Taper over at least 4 weeks. If symptoms emerge, return to previous dose and taper more slowly. Fluoxetine self-taper (long half-life) can be substituted for shorter half-life SSRIs near end of taper.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale: "Black-box warning for suicidality in patients <25. Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes.",
    },
    {
      parameter: "Serum sodium",
      frequency: "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale: "SSRIs cause SIADH in ~0.5–1% of patients. Highest risk in elderly females.",
    },
    {
      parameter: "Blood pressure",
      frequency: "Baseline and routine.",
      rationale: "Sertraline has minimal effect on BP. Mainly relevant when combined with antihypertensives.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 3 months, then every 6 months.",
      rationale: "Mild weight gain may occur long-term. Less than mirtazapine or TCAs.",
    },
    {
      parameter: "Response assessment (PHQ-9 / GAD-7)",
      frequency: "Baseline, week 4, week 8, then every 3 months.",
      rationale: "Quantifies response. ≥50% reduction in PHQ-9 = response. PHQ-9 <5 = remission.",
    },
    {
      parameter: "LFTs",
      frequency: "Baseline; only if clinically indicated.",
      rationale: "Hepatotoxicity is rare but reported. Monitor for jaundice, fatigue, dark urine.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism: "MAOIs inhibit serotonin breakdown. Combining with SERT blockade causes massive serotonergic excess → serotonin syndrome.",
      action: "Absolute contraindication. Wait 14 days after stopping MAOI before starting sertraline; 14 days after stopping sertraline before starting MAOI.",
    },
    {
      drug: "Pimozide",
      severity: "contraindicated",
      mechanism: "Sertraline inhibits CYP2D6 → raises pimozide levels → QTc prolongation → torsades de pointes.",
      action: "Never combine.",
    },
    {
      drug: "Tramadol",
      severity: "major",
      mechanism: "Tramadol is a weak serotonin–norepinephrine reuptake inhibitor and inhibits serotonin reuptake. Combined with SSRIs, raises serotonin syndrome risk. Also lowers seizure threshold.",
      action: "Avoid if possible. If unavoidable, use lowest tramadol dose, monitor for serotonin syndrome.",
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
      drug: "Warfarin / DOACs",
      severity: "moderate",
      mechanism: "Additive bleeding risk (platelet effect + anticoagulation). Sertraline also weakly inhibits CYP2C9, raising warfarin levels.",
      action: "Monitor INR closely during SSRI initiation/discontinuation if on warfarin. No specific monitoring needed for DOACs but counsel patient.",
    },
    {
      drug: "St John's Wort",
      severity: "major",
      mechanism: "Herbal SSRI. Additive serotonergic effect.",
      action: "Avoid combination — serotonin syndrome risk.",
    },
    {
      drug: "CYP2D6 substrates (e.g. metoprolol, propafenone, TCAs)",
      severity: "moderate",
      mechanism: "Sertraline is a mild CYP2D6 inhibitor at doses ≥200 mg/day.",
      action: "Monitor for toxicity of co-administered CYP2D6 substrates. Consider dose reduction.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category — DEPRECATED, no longer used by FDA)",
    evidenceBasedSummary:
      "Sertraline is the SSRI of choice in pregnancy when pharmacotherapy is necessary, based on the largest cumulative safety data. The absolute risk of major congenital malformations is not significantly increased above baseline. Third-trimester use is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding) in ~30% of exposed neonates — usually self-limited and managed supportively. Persistent pulmonary hypertension of the newborn (PPHN) risk is small (absolute risk ~1 in 300). Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks. Do NOT stop sertraline abruptly if a patient becomes pregnant — abrupt discontinuation risks relapse AND discontinuation syndrome.",
    indianPracticeNote:
      "In Indian practice, sertraline is preferred in pregnancy per IPS concurrence with international guidelines. However, the decision to treat must also consider the higher risks of untreated depression in low-resource settings (poor antenatal care, poor nutrition, lack of social support, suicidality). Always involve the obstetrician. In government hospitals, the cost and availability of sertraline make it a practical choice. Counsel the family (not just the patient) about the risk-benefit balance, as family involvement is critical in Indian antenatal care.",
    summary:
      "Sertraline is generally considered the SSRI of choice in pregnancy when pharmacotherapy is necessary. Overall, the absolute risk of major congenital malformations is small. Third-trimester use is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding) in ~30% of exposed neonates — usually self-limited. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks.",
    lactation:
      "Sertraline is the SSRI of choice in breastfeeding. Drug transfer into breast milk is minimal relative to other SSRIs (milk/plasma ratio ~0.5; infant serum levels usually undetectable). No adverse effects on infant development have been demonstrated in longitudinal studies. Watch for infant irritability or feeding issues during initiation.",
  },

  renalAdjustment: "No dose adjustment required in mild–severe renal impairment (CrCl 20–50 mL/min). No studies in severe renal failure (CrCl <20 mL/min) — use cautiously.",

  hepaticAdjustment:
    "Reduce starting dose by 50% in hepatic impairment (Child-Pugh A/B): start at 25 mg every other day or 12.5 mg daily, titrate slowly. Avoid in severe hepatic impairment (Child-Pugh C) if possible.",

  /* ---- Education ---- */
  patientExplanation:
    "Sertraline is a medicine that helps the brain keep more of a chemical called serotonin available for longer. Serotonin is one of the chemicals your brain uses to regulate mood, anxiety, sleep, and appetite. By keeping more of it active between nerve cells, sertraline helps your brain's mood-regulation system work better — but this doesn't happen immediately. Most people feel some side effects in the first week or two (often nausea, sleep changes, or feeling a bit wired) before the mood benefit builds up over 4–6 weeks. It is not addictive in the way that alcohol or benzodiazepines are, but stopping suddenly can cause uncomfortable withdrawal-like symptoms — so always come off it slowly with your doctor's guidance.",

  patientEducationPoints: [
    "Some early changes can happen within 1–2 weeks, but clearer mood benefit often takes 4–6 weeks or longer. Don't stop early just because you don't feel better yet.",
    "Nausea, headache, sleep change, or restlessness may appear before mood benefit. These usually settle within 1–2 weeks. Persistent or severe effects should be discussed with your clinician.",
    "Take it in the morning if it makes you feel more alert; at night if it makes you sleepy. Take with food to reduce nausea.",
    "Sertraline is not considered addictive in the way alcohol, opioids, or benzodiazepines can be, but stopping suddenly can still cause uncomfortable discontinuation symptoms ('brain zaps', dizziness, irritability).",
    "Do not stop suddenly without medical guidance. Your clinician will recommend a gradual taper over several weeks depending on your dose, duration, and symptoms.",
    "Alcohol can worsen sleepiness, mood symptoms, judgment, and medication tolerability. Best avoided or minimised.",
    "Tell your doctor about all other medications — especially tramadol, triptans, certain antibiotics (linezolid), cough syrups containing dextromethorphan, or herbal products like St John's Wort.",
    "Watch for warning signs in the first month: new or worsening agitation, irritability, anxiety, or suicidal thoughts — particularly if you're under 25. Contact your clinician immediately.",
    "Seek emergency help for signs of serotonin syndrome: high fever, confusion, sweating, agitation, tremor, muscle rigidity or twitching, fast heartbeat.",
    "If you miss a dose, take it when you remember unless it's within 8 hours of your next dose — in that case, skip the missed dose.",
  ],

  clinicalPearls: [
    "Onset of action for depression is 4–6 weeks, but for PMDD it's only days — which is why intermittent (luteal-phase-only) dosing works for PMDD but not for depression.",
    "Sexual dysfunction is the #1 reason patients stop SSRIs. Always ask directly — patients rarely volunteer it. Add bupropion XL 150 mg/day or switch to bupropion/mirtazapine if problematic.",
    "Among SSRIs, sertraline has the most favourable pregnancy and lactation safety profile — making it the first-choice SSRI in women of reproductive age.",
    "Sertraline's mild CYP2D6 inhibition means it has fewer clinically significant drug interactions than fluoxetine or paroxetine, but still check before co-prescribing TCAs, metoprolol, or antiarrhythmics.",
    "Discontinuation syndrome is milder than with paroxetine but still real. Always taper over ≥4 weeks. Substituting fluoxetine (long half-life) for the last few weeks of a paroxetine or venlafaxine taper can smooth the discontinuation.",
    "The 'start low, go slow' approach (25 mg → 50 mg → 100 mg) reduces early activation side effects — particularly important in anxiety disorders where early jitteriness can be misattributed to drug failure.",
    "Treatment response (≥50% PHQ-9 reduction) is expected by week 6; remission (PHQ-9 <5) by week 12. If no response by week 6, increase dose. If no response by week 12 at max dose, switch class.",
    "Continue treatment for 6–12 months after the FIRST depressive episode. For 2+ episodes or severe episodes, consider indefinite maintenance therapy (recurrence risk after 2 episodes is ~70%).",
    "Sertraline's σ1 receptor agonism is unique among SSRIs and may contribute to its anxiolytic effects — explaining its early approval for panic disorder, PTSD, and social anxiety.",
    "In bipolar depression, sertraline (and any antidepressant) can trigger a manic switch. Always screen for bipolar disorder (MDQ questionnaire) before prescribing.",
  ],

  examPearls: [
    "Sertraline is the SSRI of choice in pregnancy and lactation — high-yield for OBGYN and psychiatry exams.",
    "Mechanism: SERT blockade → ↑ synaptic 5-HT → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ raphe firing → downstream BDNF and neurogenesis (4–6 weeks). The delay between acute pharmacology and clinical effect is THE favourite SSRI question.",
    "FDA-approved indications (6): MDD, OCD, Panic Disorder, PTSD, Social Anxiety Disorder, PMDD. Memorise the list — only SSRI approved for PTSD.",
    "Contraindications: MAOIs (wait 14 days), pimozide (QTc), concurrent disulfiram (alcohol in concentrate).",
    "Black box warning: suicidality in <25. Mandatory to counsel and document informed consent.",
    "Serotonin syndrome triad: mental status change + autonomic instability + neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset within 24h. Treat with cyproheptadine.",
    "NMS vs Serotonin Syndrome: NMS = rigid ('lead pipe'), bradyreflexic, normal pupils. Serotonin syndrome = clonus, hyperreflexic, mydriasis, GI symptoms (diarrhoea).",
    "SIADH from SSRIs: highest risk in elderly females, first 2 weeks. Hyponatraemia + concentrated urine + euvolaemia.",
    "CYP interactions: sertraline is a mild CYP2D6 inhibitor (less than fluoxetine/paroxetine). Major pathway is CYP2B6.",
    "Discontinuation syndrome: 'FINISH' — Flu-like symptoms, Insomnia, Nausea, Imbalance, Sensory disturbances (brain zaps), Hyperarousal. Worst with paroxetine > sertraline > fluoxetine (because of half-life).",
    "Half-life: sertraline 26h; fluoxetine + norfluoxetine 1–4 days (longest); paroxetine 21h (shortest, worst discontinuation).",
    "PMDD dosing: continuous OR intermittent (luteal phase only, starting ~14 days before expected menses). Intermittent works because PMDD onset is rapid (days).",
    "Treatment-resistant depression algorithm: SSRI fail → switch to another SSRI/SNRI → augment with bupropion or mirtazapine → consider TCA/MAOI/trial of ketamine.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "FINISH — SSRI Discontinuation Syndrome",
      trick: "Flu-like · Insomnia · Nausea · Imbalance · Sensory disturbances (brain zaps) · Hyperarousal",
      remembers: "The 6 classic SSRI withdrawal symptoms. Worst with paroxetine (shortest half-life), mildest with fluoxetine (longest).",
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
      title: "SSRI Pearl — 'Pregnancy Safe'",
      trick: "Sertraline = Safe in pregnancy and lactation (SSRI of choice)",
      remembers: "Among SSRIs, sertraline has the lowest milk/plasma ratio (~0.5) and infant serum levels are usually undetectable.",
    },
    {
      title: "6 FDA Indications for Sertraline",
      trick: "MOP PPS — Mood (MDD), OCD, Panic, PTSD, social Phobia, Premenstrual (PMDD)",
      remembers: "Sertraline is the ONLY SSRI FDA-approved for PTSD.",
    },
    {
      title: "Black Box Warning",
      trick: "<25 = Suicide risk (Antidepressants in young)",
      remembers: "Anyone under 25 starting an antidepressant needs weekly monitoring in the first month.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: SSRI — selectively blocks SERT → ↑ synaptic serotonin.",
    "Mechanism: Acute SERT blockade (hours) → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ BDNF + neurogenesis (4–6 weeks). The delay explains why patients feel worse before better.",
    "6 FDA indications: MDD, OCD, Panic, PTSD, Social Anxiety, PMDD. Only SSRI approved for PTSD.",
    "Onset: 4–6 weeks for depression; 8–12 weeks for anxiety/PTSD. PMDD onset is days (intermittent dosing works).",
    "Common side effects: nausea, sexual dysfunction (30–50%), insomnia, headache, sweating, diarrhoea.",
    "Serious: serotonin syndrome, SIADH (elderly females), suicidality <25 (black box), bleeding (platelet), activation of mania, discontinuation syndrome.",
    "Contraindications: MAOIs (14-day washout), pimozide (QTc), disulfiram (concentrate has alcohol).",
    "Interactions: MAOIs (fatal), tramadol/triptans/St John's Wort (serotonin syndrome), NSAIDs/warfarin (bleeding), CYP2D6 substrates.",
    "Pregnancy/lactation: SSRI of choice. Untreated depression is worse than the drug.",
    "Half-life 26h. Metabolised by CYP2B6 (main), CYP2C19/2D6/3A4 (minor). Mild CYP2D6 inhibitor.",
    "Monitoring: mood/suicidality (weekly × 1 month), serum Na (elderly), PHQ-9 at baseline/4/8 weeks.",
    "Discontinuation: taper over ≥4 weeks. Fluoxetine self-tapers (long half-life) — can substitute at end of taper.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
    title: "First-episode depression in a 28-year-old woman",
    presentation:
      "A 28-year-old woman presents with 8 weeks of low mood, anhedonia, early-morning awakening, and 4 kg weight loss after a relationship breakdown.",
    history:
      "Priya, a 28-year-old software engineer, presents to her GP with 8 weeks of persistent low mood, loss of interest in activities she previously enjoyed (hiking, painting), early-morning awakening at 4 AM with inability to return to sleep, 4 kg unintentional weight loss, and intrusive negative thoughts about being 'a failure'. Symptoms began after her partner ended their 4-year relationship. She denies suicidal ideation but feels 'hopeless about the future'. No prior psychiatric history. No medical comorbidities. Sister has a history of depression treated with sertraline. Patient drinks alcohol 2–3 units/week, no recreational drugs, no regular medications. She works full-time but has taken 3 sick days in the past 2 weeks — previously zero in 2 years.",
    examination:
      "Alert, oriented, cooperative. Speech normal rate and rhythm. Mood '2/10', affect congruent and reactive. No hallucinations or delusions. No thought disorder. Cognitively intact (MoCA 28/30). PHQ-9 score 17 (moderately severe). GAD-7 score 11 (moderate). No thyroid enlargement, no neurological deficit. BMI 22. BP 118/74, HR 72.",
    diagnosis:
      "Major Depressive Disorder, single episode, moderate-severe, without psychotic features (ICD-10 F32.2). Differential: adjustment disorder with depressed mood (less likely given severity and neurovegetative symptoms); bipolar depression (screen with MDQ — negative); hypothyroidism-induced depression (TSH to be checked).",
    rationale:
      "Sertraline chosen because: (1) first-line for MDD per NICE CG91; (2) favourable side-effect profile for a working patient (minimal sedation, low weight gain); (3) sister had a good response — pharmacogenetic concordance; (4) safest SSRI if patient becomes pregnant (reproductive age, no current contraception); (5) once-daily dosing improves adherence. Fluoxetine would be alternative but more activating; mirtazapine rejected due to weight gain in a patient already losing weight.",
    management:
      "Started sertraline 50 mg every morning with food. Plan: review at 2 weeks (tolerability + suicidality), 4 weeks (early response), 6 weeks (dose escalation if PHQ-9 reduction <30%), 12 weeks (full response assessment). Patient given PHQ-9 self-rating schedule and safety plan with crisis contacts (112, Tele-MANAS 14416). Counseled: (1) expect side effects before benefit; (2) do not stop abruptly; (3) avoid alcohol; (4) watch for agitation or new suicidal thoughts in first month; (5) full effect takes 4–6 weeks. Concurrent referral for CBT (NICE recommends combining medication + psychotherapy for moderate-severe depression).",
    outcome:
      "Week 2: nausea and mild insomnia (tolerable, no suicidality). Week 4: sleep normalised, appetite returning, PHQ-9 12 (29% reduction — early response). Week 6: mood 5/10, PHQ-9 8 (53% reduction — treatment response). Dose maintained at 50 mg. Week 12: PHQ-9 4 (remission). Returned to hiking and painting. CBT sessions ongoing. Plan: continue sertraline for 9 more months (12 months total from remission), then taper over 4–6 weeks.",
    teachingPoints: [
      "PHQ-9 monitoring quantifies response — a ≥50% reduction defines 'response', a score <5 defines 'remission'.",
      "Family history of good SSRI response is a reasonable (though not definitive) predictor — pharmacogenomic testing is not yet routine.",
      "Combining SSRI + CBT produces better long-term outcomes than either alone — especially for first-episode depression.",
      "The 6-week review point is critical: if PHQ-9 reduction is <30%, increase the dose; if <50% at 12 weeks, consider switching or augmenting.",
      "Continue treatment for 6–12 months AFTER remission for a first episode — stopping earlier dramatically increases relapse risk.",
    ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Sertraline vs Fluoxetine vs Escitalopram vs Paroxetine",
      primaryDrug: "Sertraline",
      rows: [
        {
          attribute: "Half-life",
          primaryValue: "26 hours",
          comparisons: [
            { drug: "Fluoxetine", value: "1–4 days (with norfluoxetine)" },
            { drug: "Escitalopram", value: "27–32 hours" },
            { drug: "Paroxetine", value: "21 hours (shortest)" },
          ],
        },
        {
          attribute: "Onset of action",
          primaryValue: "4–6 weeks",
          comparisons: [
            { drug: "Fluoxetine", value: "4–6 weeks" },
            { drug: "Escitalopram", value: "4–6 weeks" },
            { drug: "Paroxetine", value: "4–6 weeks" },
          ],
        },
        {
          attribute: "Sexual dysfunction",
          primaryValue: "Common (30–40%)",
          comparisons: [
            { drug: "Fluoxetine", value: "Common (30–40%)" },
            { drug: "Escitalopram", value: "Common (30–40%)" },
            { drug: "Paroxetine", value: "Highest (40–50%)" },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Mild",
          comparisons: [
            { drug: "Fluoxetine", value: "Weight neutral / loss" },
            { drug: "Escitalopram", value: "Mild" },
            { drug: "Paroxetine", value: "Most weight gain" },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Mildly activating",
          comparisons: [
            { drug: "Fluoxetine", value: "Most activating" },
            { drug: "Escitalopram", value: "Neutral" },
            { drug: "Paroxetine", value: "Most sedating" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "Mild–moderate",
          comparisons: [
            { drug: "Fluoxetine", value: "Mildest (self-tapers)" },
            { drug: "Escitalopram", value: "Mild–moderate" },
            { drug: "Paroxetine", value: "Worst (shortest half-life)" },
          ],
        },
        {
          attribute: "Pregnancy safety",
          primaryValue: "SSRI of choice",
          comparisons: [
            { drug: "Fluoxetine", value: "Safe (long experience)" },
            { drug: "Escitalopram", value: "Safe" },
            { drug: "Paroxetine", value: "Avoid in 1st trimester (cardiac defects)" },
          ],
        },
        {
          attribute: "CYP inhibition",
          primaryValue: "Mild CYP2D6",
          comparisons: [
            { drug: "Fluoxetine", value: "Strong CYP2D6" },
            { drug: "Escitalopram", value: "Minimal (lowest interaction profile)" },
            { drug: "Paroxetine", value: "Strong CYP2D6" },
          ],
        },
        {
          attribute: "Unique indication",
          primaryValue: "PTSD (only SSRI)",
          comparisons: [
            { drug: "Fluoxetine", value: "Paediatric depression (≥8 yrs), bulimia" },
            { drug: "Escitalopram", value: "GAD (12–17 yrs)" },
            { drug: "Paroxetine", value: "Hot flushes in breast-cancer survivors" },
          ],
        },
      ],
      takeaway:
        "Sertraline = best all-rounder (especially in pregnancy and when interactions matter). Fluoxetine = good for lethargic depression and when long half-life helps adherence. Escitalopram = best if patient is on many other drugs (lowest CYP interactions). Paroxetine = generally avoid — worst discontinuation, most weight gain, contraindicated in pregnancy, strongest CYP2D6 — but useful for severe hot flushes in breast-cancer survivors.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute SERT blockade",
      description:
        "Sertraline blocks the serotonin transporter within hours. Synaptic serotonin rises. Side effects (nausea, headache, activation) often appear here. Patients frequently feel worse before they feel better.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "5-HT1A autoreceptor desensitisation begins",
      description:
        "Somatodendritic 5-HT1A autoreceptors in the raphe nuclei begin to desensitise. Serotonin release toward the prefrontal cortex gradually increases. Sleep, appetite, and energy often improve first — before mood.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Neuroadaptive changes",
      description:
        "BDNF expression rises in the hippocampus. Postsynaptic receptor downregulation occurs. Early mood improvement becomes noticeable in many patients. Sexual side effects typically emerge here.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "Steady-state serotonin levels and full downstream adaptations achieved. Mood, anxiety, and energy typically reach maximum improvement for depression. Side effects usually stabilise.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 8–12",
      title: "Full therapeutic effect (anxiety, PTSD)",
      description:
        "Anxiety disorders, panic, PTSD, and social anxiety often take 8–12 weeks for full response — slower than depression. Counsel patients accordingly.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months 3–6",
      title: "Maintenance & relapse prevention",
      description:
        "Continued neuroplastic changes. Continue treatment for 6–12 months after the first depressive episode, longer (often indefinite) for recurrent episodes, OCD, or chronic anxiety disorders.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Tapered withdrawal",
      description:
        "Sudden cessation causes discontinuation syndrome (dizziness, 'brain zaps', nausea, irritability). Taper over ≥4 weeks. Among SSRIs, withdrawal is milder than paroxetine but real. Fluoxetine self-tapers due to long half-life.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does sertraline take to work?",
      answer:
        "Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks or longer for depression. For anxiety disorders, PTSD, and social anxiety, full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet.",
    },
    {
      question: "Can side effects happen before the benefits?",
      answer:
        "Yes — nausea, headache, sleep changes, or restlessness may appear in the first 1–2 weeks, before mood improvement. These usually settle as your body adapts. Persistent or severe effects should be discussed with your clinician — they may recommend a slower titration or dose adjustment.",
    },
    {
      question: "Is sertraline addictive?",
      answer:
        "Sertraline is not addictive in the way that alcohol, opioids, or benzodiazepines can be — it does not cause cravings, escalating use, or intoxication. However, stopping suddenly after several weeks of use can cause uncomfortable discontinuation symptoms (dizziness, 'brain zaps', nausea, irritability), so always come off it slowly with your doctor's guidance.",
    },
    {
      question: "Can I stop taking it once I feel better?",
      answer:
        "Not usually. For a first depressive episode, treatment should continue for 6–12 months AFTER you feel better — stopping earlier significantly increases relapse risk. For recurrent episodes or chronic anxiety disorders, longer-term (sometimes indefinite) treatment may be recommended. Always discuss timing with your clinician before stopping.",
    },
    {
      question: "Will it affect my sex life?",
      answer:
        "Possibly. Sexual side effects — decreased libido, delayed orgasm, erectile dysfunction — affect 30–50% of people on SSRIs and are the most common reason people stop them. These are usually reversible on discontinuation, but in a small subset of patients they may persist (PSSD). If this bothers you, talk to your clinician — adding bupropion or switching to a different medication often helps.",
    },
    {
      question: "What if I'm pregnant or breastfeeding?",
      answer:
        "Sertraline is generally considered the SSRI of choice in pregnancy and breastfeeding when pharmacotherapy is necessary. Untreated maternal depression also carries significant risks to mother and baby. The decision requires balancing benefits and risks with your obstetrician and psychiatrist — do not stop sertraline suddenly if you become pregnant.",
    },
    {
      question: "Can I drink alcohol while taking sertraline?",
      answer:
        "Alcohol can worsen sleepiness, mood symptoms, judgment, and medication tolerability. While not strictly contraindicated, it's best minimised or avoided — particularly during the first month while your body is adapting to the medication.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Take the missed dose as soon as you remember, unless it's within 8 hours of your next scheduled dose — in that case, skip the missed dose and continue normally. Do not double up to make up for a missed dose.",
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
        source: "WHO mhGAP Intervention Guide (mental health Gap Action Programme)",
        section: "Module on depression",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents",
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
        source: "Glass RM. Fluoxetine, cognitive-behavioral therapy, and their combination for adolescents with depression (TADS). JAMA 2004;292:861-863.",
      },
    ],
    reviews: [
      {
        source: "Cipriani A, Furukawa TA, Salanti G, et al. Lancet 2018 — Comparative efficacy and acceptability of 21 antidepressants",
      },
      {
        source: "MIMS India — Sertraline",
        section: "India-specific prescribing information",
      },
      {
        source: "FDA Prescribing Information — ZOLOFT (sertraline hydrochloride)",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/019839s74lbl.pdf",
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
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship: "Same class. Longest half-life (1–4 days with active metabolite) → mildest discontinuation syndrome. Only SSRI approved for paediatric depression (≥8 yrs) and bulimia. More activating — better for lethargic depression.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      drugClass: "SSRI",
      relationship: "Same class. S-enantiomer of citalopram. Lowest CYP interaction profile — preferred in patients on complex regimens. QTc prolongation at higher doses (>20 mg) — avoid in long-QT.",
    },
    {
      name: "Paroxetine",
      slug: "paroxetine",
      drugClass: "SSRI",
      relationship: "Same class. Shortest half-life (21h) → worst discontinuation syndrome. Most sedating. Strongest CYP2D6 inhibition. Most anticholinergic. Highest risk of weight gain. Best-studied for hot flushes in breast-cancer survivors.",
    },
    {
      name: "Citalopram",
      drugClass: "SSRI",
      relationship: "Same class. Racemic mixture (escitalopram is the S-enantiomer). Dose-dependent QTc prolongation — max 40 mg/day (20 mg in elderly).",
    },
    {
      name: "Fluvoxamine",
      drugClass: "SSRI",
      relationship: "Same class. Preferred for paediatric OCD. Strong CYP1A2 inhibition — interacts with caffeine, theophylline, clozapine.",
    },
    {
      name: "Venlafaxine",
      drugClass: "SNRI",
      relationship: "Alternative class. Serotonin-norepinephrine reuptake inhibitor. May work when SSRI fails. Dose-dependent: <150 mg/day mostly serotonergic; >150 mg/day adds noradrenergic effect. Watch BP — can cause hypertension.",
    },
    {
      name: "Bupropion",
      drugClass: "NDRI",
      relationship: "Augmentation partner. Norepinephrine-dopamine reuptake inhibitor. Adding 150 mg XL to an SSRI is first-line augmentation for partial response and reverses SSRI-induced sexual dysfunction. Avoid in seizure disorder and eating disorders.",
    },
    {
      name: "Mirtazapine",
      drugClass: "NaSSA",
      relationship: "Augmentation partner. Noradrenergic and specific serotonergic antidepressant. Adding 15–30 mg at night improves sleep and appetite and may reverse SSRI-induced sexual dysfunction. Sedating — give at night.",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Obsessive-Compulsive Disorder", relationship: "primary" },
    { name: "Panic Disorder", relationship: "primary" },
    { name: "Post-Traumatic Stress Disorder", relationship: "primary" },
    { name: "Social Anxiety Disorder", relationship: "primary" },
    { name: "Premenstrual Dysphoric Disorder", relationship: "primary" },
    { name: "Generalised Anxiety Disorder", relationship: "off-label" },
    { name: "Premature Ejaculation", relationship: "off-label" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline", note: "The drug you're reading about" },
    { label: "SSRI", type: "class", href: "#mechanism", note: "Selective Serotonin Reuptake Inhibitor" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "The neurotransmitter being modulated" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Molecular target" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood regulation" },
    { label: "Amygdala", type: "brain-region", href: "#brain-regions", note: "Anxiety & fear processing" },
    { label: "Hippocampus", type: "brain-region", href: "#brain-regions", note: "Memory & neurogenesis" },
    { label: "Depression", type: "condition", href: "#clinical-uses", note: "Primary indication" },
    { label: "Anxiety Disorders", type: "condition", href: "#clinical-uses", note: "Multiple approved indications" },
    { label: "OCD", type: "condition", href: "#clinical-uses", note: "Approved in adults & children" },
    { label: "PTSD", type: "condition", href: "#clinical-uses", note: "Only SSRI approved for PTSD" },
    { label: "Sexual Dysfunction", type: "side-effect", href: "#side-effects", note: "Most common reason for discontinuation" },
    { label: "Serotonin Syndrome", type: "side-effect", href: "#side-effects", note: "Life-threatening — know the signs" },
    { label: "Patient Guide — Starting an SSRI", type: "patient-guide", href: "#patient-education", note: "What to expect in the first 6 weeks" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A medicine that helps your brain keep more of a mood-regulating chemical (serotonin) available for longer.",
    summary:
      "Sertraline is one of the most commonly prescribed antidepressants in the world. It belongs to a class called SSRIs. It doesn't make you happy — it helps your brain's natural mood-regulation system work better. Most people feel some side effects in the first week or two before the mood benefit builds up over 4–6 weeks.",
    mechanism:
      "Your brain uses a chemical called serotonin to regulate mood, anxiety, sleep, and appetite. Normally, after serotonin is released between nerve cells, it gets quickly taken back up (recycled). Sertraline blocks this recycling, so more serotonin stays available between the nerve cells for longer. Over 4–6 weeks, this helps your brain's mood-regulation system work better — but it doesn't happen immediately.",
    sideEffects:
      "Most people get some side effects in the first 1–2 weeks — usually nausea, headache, sleep changes, or feeling a bit wired. These usually settle as your body adapts. Sexual side effects (lower interest or difficulty reaching orgasm) are common and can persist — talk to your doctor if this bothers you, as there are solutions. Serious side effects are rare but you should know the signs: high fever with confusion and shaking could be serotonin syndrome (emergency), and feeling worse or having new suicidal thoughts in the first month needs immediate medical review.",
    monitoring:
      "You'll have check-ins with your doctor at 2 weeks, 4 weeks, and 6 weeks to see how you're responding. They'll ask about your mood, side effects, and any new thoughts. You may be asked to fill in a short questionnaire (PHQ-9) so your progress can be tracked. If you're over 65, your doctor may check your blood sodium in the first 2 weeks.",
    contraindications:
      "Don't take sertraline if you've taken a MAOI antidepressant in the last 14 days (dangerous combination). Tell your doctor about all other medicines you take — especially tramadol (pain), triptans (migraine), certain antibiotics like linezolid, cough syrups with dextromethorphan, or herbal products like St John's Wort. Don't take the liquid form if you're on disulfiram (for alcohol dependence) — it contains alcohol.",
    interactions:
      "The main thing to know: avoid alcohol or keep it to a minimum — it can make you more drowsy and worsen mood symptoms. Tell your pharmacist about everything you take, including over-the-counter products, because several common medicines can interact with sertraline. The most dangerous combinations are with other medicines that affect serotonin — your doctor or pharmacist will check for these automatically.",
  },

  /* ---- India-first extensions ---- */

  /* Indian clinical practice */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Serta", manufacturer: "Sun Pharma", strengths: "25mg, 50mg, 100mg", note: "Among the most commonly prescribed sertraline brands in India" },
      { name: "Daxid", manufacturer: "Sun Pharma", strengths: "25mg, 50mg, 100mg, 200mg" },
      { name: "Serenata", manufacturer: "Lupin", strengths: "25mg, 50mg, 100mg" },
      { name: "Zosert", manufacturer: "Sun Pharma", strengths: "25mg, 50mg, 100mg" },
      { name: "Xet", manufacturer: "Micro Labs", strengths: "12.5mg, 25mg, 50mg, 100mg" },
    ],
    typicalDoses:
      "Depression: start 50mg OD, titrate to 100–200mg OD. OCD: 50–200mg OD. Panic/PTSD/Social Anxiety: start 25mg OD, titrate to 50–200mg OD. PMDD: 50–150mg (continuous or luteal phase). In Indian government hospitals, starting dose is often 25–50mg OD to minimise early side effects given limited follow-up capacity. Maximum: 200mg/day.",
    prescribingScenarios: [
      "First-line SSRI for depression in Indian primary care and psychiatry OPD — most commonly prescribed SSRI in India alongside escitalopram.",
      "Preferred SSRI in pregnancy and lactation in Indian practice (consistent with international guidelines).",
      "Widely used in government hospital psychiatry OPDs under the District Mental Health Programme (DMHP).",
      "Common first choice for anxiety spectrum disorders (GAD, panic, social anxiety) in Indian private practice.",
      "Often chosen over fluoxetine in elderly due to shorter half-life and lower CYP interactions.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
      note: "Widely available across India. Included in the essential medicines list of many state governments. Available through District Mental Health Programme (DMHP) centres. Generic sertraline is commonly stocked in Jan Aushadhi Kendras.",
    },
    costCategory: "low",
    costNote: "Generic sertraline is inexpensive in India (approximately ₹2–5 per 50mg tablet). Branded versions (Serta, Serenata) cost ₹3–8 per tablet. Cost varies by manufacturer and region. Jan Aushadhi generic versions are the most affordable.",
    monitoring:
      "In Indian government hospitals, monitoring is primarily clinical (symptom-based) due to resource constraints. PHQ-9 is used in tertiary centres and DMHP clinics. Serum sodium monitoring in elderly is recommended but practice varies. ECG is not routinely done unless cardiac risk factors exist. Follow-up schedule: 2 weeks (tolerability), 4 weeks (early response), 6 weeks (dose escalation decision), 12 weeks (full response assessment). In private practice, monitoring aligns more closely with international guidelines.",
    patientCounselling: [
      "Take in the morning with food to reduce nausea.",
      "It may take 4–6 weeks to feel the full benefit — don't stop early just because you don't feel better yet.",
      "Do NOT stop suddenly — your doctor will help you reduce the dose gradually over several weeks.",
      "Generic versions (Serta, Serenata, Zosert) are equally effective — you don't need to pay more for expensive brands if cost is a concern. Jan Aushadhi generic sertraline is a good affordable option.",
      "Avoid alcohol — it can worsen your mood symptoms and increase drowsiness.",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month, contact your doctor immediately or call Tele-MANAS at 14416.",
      "Common side effects in the first 1–2 weeks (nausea, headache, sleep changes) usually settle on their own. If they persist or are severe, tell your doctor.",
      "Sexual side effects (reduced interest, difficulty reaching orgasm) are common and can be embarrassing to discuss — but your doctor can help. Don't stop the medicine without discussing alternatives.",
      "Follow-up visits at 2 weeks, 4 weeks, and 6 weeks are important — please attend even if you're feeling better.",
      "If you miss a dose, take it when you remember unless it's close to your next dose — then skip the missed dose. Do not double up.",
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
    integrationSubjects: ["Psychiatry", "General Medicine", "Community Medicine"],
  },

  /* Exam Lens — structured by Indian examination */
  examLens: {
    mbbs: {
      viva: [
        "What is the mechanism of action of sertraline? (SERT blockade → ↑ synaptic 5-HT → 5-HT1A autoreceptor desensitisation over 1–2 weeks → ↑ serotonergic throughput → downstream BDNF/neurogenesis over 4–6 weeks)",
        "Why does sertraline take 4–6 weeks to work when SERT blockade occurs within hours? (Acute blockade raises synaptic 5-HT, but 5-HT1A autoreceptors initially brake firing. Clinical effect correlates with autoreceptor desensitisation and downstream neuroadaptive changes, not acute 5-HT levels.)",
        "Name 5 FDA-approved indications for sertraline. (MDD, OCD, Panic Disorder, PTSD, Social Anxiety Disorder, PMDD — 6 total. Sertraline is the only SSRI approved for PTSD.)",
        "What is the black box warning for sertraline? (Increased suicidality in patients <25 years — monitor weekly in the first month.)",
        "Which SSRI is preferred in pregnancy and why? (Sertraline — lowest milk/plasma ratio, undetectable infant serum levels, longest safety track record.)",
        "What is serotonin syndrome? Name the triad. (Mental status change + autonomic instability + neuromuscular excitation — clonus, hyperreflexia. Onset within 24h. Treat with cyproheptadine.)",
      ],
      practical: [
        "Counsel a patient starting sertraline for depression — address onset delay, side effects, adherence, and follow-up.",
        "Write a prescription for sertraline for a 30-year-old with first-episode depression (dose: 50mg OD, morning, with food).",
        "Identify the contraindications of sertraline from a given clinical scenario (e.g., patient on MAOI).",
        "Explain the monitoring schedule for a patient on sertraline (2/4/6/12 weeks, PHQ-9, suicidality <25).",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics, adverse effects, and therapeutic uses of SSRIs with special reference to sertraline. Discuss the rationale for SSRI selection in specific populations (pregnancy, elderly, hepatic impairment).",
        "A 28-year-old woman presents with first-episode moderate depression. Discuss the pharmacological management, including drug selection, dose titration, monitoring, and patient counselling. Address the black box warning and how you would counsel the patient about it.",
      ],
    },
    neetPg: {
      highYield: [
        "Sertraline = SSRI of choice in pregnancy and lactation (milk/plasma ratio ~0.5, infant levels usually undetectable).",
        "Sertraline = only SSRI FDA-approved for PTSD.",
        "Mechanism: SERT blockade (hours) → 5-HT1A autoreceptor desensitisation (1–2 weeks) → BDNF/neurogenesis (4–6 weeks). The delay is THE favourite SSRI question.",
        "6 FDA indications: MDD, OCD, Panic, PTSD, Social Anxiety, PMDD. Mnemonic: MOP PPS.",
        "σ1 receptor agonism — unique among SSRIs, contributes to anxiolytic effect (relevant to approval for panic, PTSD, social anxiety).",
        "Black box: suicidality <25 years. Weekly monitoring in first month.",
        "Metabolism: CYP2B6 (primary), CYP2C19/2D6/3A4 (minor). Mild CYP2D6 inhibitor (less than fluoxetine/paroxetine).",
        "Half-life: 26 hours. Active metabolite N-desmethylsertraline (half-life ~62h) — contributes to mild discontinuation vs paroxetine.",
        "Discontinuation syndrome: FINISH — Flu-like, Insomnia, Nausea, Imbalance, Sensory (brain zaps), Hyperarousal. Worst: paroxetine > sertraline > fluoxetine.",
        "Serotonin syndrome triad: Mental + Autonomic + Neuromuscular (clonus, hyperreflexia). NMS = rigidity + bradyreflexia. SS = clonus + hyperreflexia.",
      ],
      pyqConcepts: [
        "NEET PG 2022: A 24-year-old pregnant woman requires SSRI for depression. Which SSRI is preferred? (Answer: Sertraline — lowest placental transfer and milk/plasma ratio.)",
        "NEET PG 2021: Which antidepressant is FDA-approved for PTSD? (Answer: Sertraline — only SSRI approved for PTSD.)",
        "NEET PG 2020: A patient on SSRI presents with agitation, clonus, hyperreflexia, and fever. Diagnosis? (Answer: Serotonin syndrome. Treatment: discontinue SSRI, cyproheptadine, benzodiazepines, cooling.)",
        "NEET PG 2019: Which SSRI has the shortest half-life and worst discontinuation syndrome? (Answer: Paroxetine — 21h. Sertraline is 26h, fluoxetine is 1–4 days.)",
        "INICET 2021: A patient on sertraline develops hyponatraemia (Na 124). What is the mechanism? (Answer: SIADH — SSRIs increase ADH secretion. Risk highest in elderly females, first 2 weeks.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 28-year-old woman with depression is started on sertraline 50mg. At week 1, she reports worsening anxiety, insomnia, and jitteriness. She wants to stop. How do you counsel her? (Answer: This is common early activation — explain that side effects precede benefit, the anxiety will settle in 1–2 weeks, and the mood benefit starts at 4–6 weeks. Consider temporary dose reduction to 25mg or adding short-term benzodiazepine. Do NOT stop abruptly — counsel on adherence.)",
        "A 35-year-old man on sertraline 100mg for 8 weeks reports partial response (PHQ-9 dropped from 18 to 10). What are the next steps? (Answer: Options include dose escalation to 150–200mg, augmentation with bupropion XL 150mg, or switch to another agent. CBT should be added if not already. Assess adherence and sleep.)",
        "A 22-year-old college student is prescribed sertraline for depression. Two weeks later, his family reports increased agitation and new suicidal thoughts. What is the mechanism and management? (Answer: Activation syndrome — common in young adults in the first 1–2 weeks. Black box warning. Management: assess suicidality directly, involve family for monitoring, consider dose reduction or switch to fluoxetine (less activating), add CBT, safety planning. Do not stop without supervision.)",
        "A 32-year-old woman on sertraline 50mg for depression presents with pregnancy. She wants to stop the medication. How do you counsel her? (Answer: Sertraline is the SSRI of choice in pregnancy. Untreated depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality). Stopping abruptly risks relapse AND discontinuation syndrome. Counsel: continue sertraline, monitor closely, involve obstetrician. Third-trimester: watch for neonatal adaptation syndrome.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Sertraline mechanism: SERT blockade → ↑ serotonin in synaptic cleft.",
        "Onset of action: 4–6 weeks (not immediate — key FMGE concept).",
        "Most common side effect: sexual dysfunction (30–50%).",
        "Black box warning: suicidal thoughts in patients under 25.",
        "Serotonin syndrome: clonus + hyperreflexia + fever + agitation. Treatment: cyproheptadine.",
        "Contraindication: MAOIs (14-day washout required).",
        "Sertraline is the SSRI of choice in pregnancy.",
        "Discontinuation syndrome: dizziness, brain zaps, nausea. Worst with paroxetine.",
        "Drug interaction: NSAIDs increase bleeding risk (platelet serotonin depletion).",
        "SIADH: hyponatraemia from SSRIs, especially in elderly.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "σ1 receptor agonism is unique to sertraline among SSRIs and may explain its particular efficacy in anxiety spectrum disorders (panic, PTSD, social anxiety). Other SSRIs lack this property.",
        "Among SSRIs, sertraline has the most favourable pregnancy/lactation profile — but the decision to treat in pregnancy must always weigh untreated maternal depression risks (preterm birth, low birth weight, poor bonding, suicidality) against medication risks. Never stop abruptly if a patient becomes pregnant.",
        "Treatment-resistant depression algorithm after sertraline failure: (1) optimise dose to 200mg, (2) confirm adherence + address substance use, (3) augment with bupropion XL or mirtazapine, (4) consider switch to SNRI or TCA, (5) consider ketamine/esketamine for severe TRD, (6) rTMS or ECT for severe/catatonic features.",
        "PHQ-9 monitoring: ≥50% reduction = response. <5 = remission. If <30% reduction at 6 weeks → increase dose. If <50% at 12 weeks → switch or augment. Continue for 6–12 months after remission for first episode; longer for recurrent.",
        "Discontinuation syndrome management: if severe, restart at previous dose and taper more slowly (over 4–8 weeks). Fluoxetine can be substituted for shorter half-life SSRIs at end of taper (self-tapers due to long half-life of norfluoxetine).",
        "CYP2B6 is the primary metaboliser (not CYP2D6 as commonly assumed) — this reduces the impact of CYP2D6 polymorphisms on sertraline levels, making it a good choice for patients on multiple CYP2D6 substrates.",
        "In bipolar depression, sertraline (and any antidepressant) can trigger a manic switch. Always screen for bipolar disorder (MDQ questionnaire) before initiating. If bipolar confirmed, use mood stabiliser first; antidepressant only if mood stabiliser alone is insufficient.",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "First-line SSRI for depression",
      internationalSource: "NICE CG91 / APA Practice Guideline",
      internationalRecommendation: "SSRIs are first-line for moderate-severe depression. Sertraline is commonly chosen due to favourable side-effect profile and drug interaction profile.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS guidelines also recommend SSRIs as first-line for depression. Sertraline and escitalopram are the most commonly prescribed SSRIs in Indian practice. No specific IPS preference between individual SSRIs — selection is based on patient profile (pregnancy, elderly, comorbidities, cost).",
    },
    {
      topic: "Use in pregnancy",
      internationalSource: "FDA / APA",
      internationalRecommendation: "Sertraline is the SSRI of choice in pregnancy when pharmacotherapy is necessary. Former FDA Category C. Risk of persistent pulmonary hypertension of the newborn (PPHN) is small. Third-trimester use associated with neonatal adaptation syndrome.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs with international guidelines — sertraline is preferred in pregnancy. In Indian practice, the decision to treat must also consider the risks of untreated depression (poor antenatal care, poor nutrition, suicidality) which may be higher in low-resource settings. Always involve obstetrician.",
    },
    {
      topic: "Monitoring during treatment",
      internationalSource: "NICE / APA",
      internationalRecommendation: "Weekly contact in first month, then every 2–4 weeks until stable. PHQ-9 at baseline, 4, 8, 12 weeks. Serum sodium in elderly. ECG if cardiac risk factors.",
      indianSource: null,
      indianRecommendation: "No dedicated IPS guideline on SSRI monitoring frequency. In Indian government hospitals, monitoring is primarily clinical due to resource constraints. PHQ-9 is used in tertiary centres and DMHP clinics. Follow-up schedule is often 2, 4, 6 weeks but may be longer in rural settings due to travel barriers. Current section reflects accepted clinical practice and internationally accepted evidence.",
    },
    {
      topic: "Suicidality monitoring (<25 years)",
      internationalSource: "FDA Black Box Warning",
      internationalRecommendation: "Antidepressants increased risk of suicidal thinking in patients <25. Weekly monitoring in first month. Document informed consent.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS acknowledges the FDA black box warning and recommends close monitoring of young patients (<25) during the first month. In Indian practice, family involvement in monitoring is particularly important given the joint family system. Tele-MANAS (14416) should be provided as a crisis resource.",
    },
    {
      topic: "Use in lactation",
      internationalSource: "AAP / LactMed",
      internationalRecommendation: "Sertraline is the SSRI of choice in breastfeeding. Milk/plasma ratio ~0.5. Infant serum levels usually undetectable. Safe for breastfeeding.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — sertraline is preferred in lactation. In Indian practice, breastfeeding is strongly culturally valued, and the ability to continue breastfeeding while on sertraline improves adherence. Counsel mother to watch for infant irritability or feeding issues during initiation.",
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
      { source: "NICE CG91", recommendation: "SSRIs are first-line for moderate-severe depression. Sertraline is commonly chosen due to favourable side-effect profile." },
      { source: "APA Practice Guideline", recommendation: "SSRI first-line for MDD. Sertraline preferred when drug interactions are a concern (mild CYP2D6 inhibition)." },
      { source: "FDA", recommendation: "Approved for 6 indications: MDD, OCD, Panic, PTSD, Social Anxiety, PMDD. Black box warning for suicidality <25." },
      { source: "WHO mhGAP", recommendation: "SSRIs recommended as first-line antidepressants in the Mental Health Gap Action Programme." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS guidelines recommend SSRIs as first-line for depression. Sertraline and escitalopram are the most commonly prescribed SSRIs in Indian practice." },
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS concurs with international guidelines — sertraline is preferred in pregnancy and lactation." },
      { source: null, recommendation: "No dedicated IPS guideline on SSRI monitoring frequency. Current section reflects accepted clinical practice and internationally accepted evidence." },
    ],
    indianClinicalPractice:
      "In Indian practice, sertraline is the most commonly prescribed SSRI alongside escitalopram. It is the default first-choice SSRI in government hospitals under the District Mental Health Programme (DMHP) due to low cost, wide availability, and favourable safety profile. In private practice, it is preferred for patients with comorbid anxiety, in pregnancy/lactation, and in elderly patients. Starting dose is often 25-50mg OD (lower than Western guidelines) to minimise early side effects, particularly given limited follow-up capacity in government settings. PHQ-9 is used in tertiary centres but not routinely in primary care. Family involvement in monitoring is emphasised given the joint family system.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "First-line SSRI in government hospital psychiatry OPDs. Available through DMHP. Starting dose 25-50mg OD. Monitoring is primarily clinical (symptom-based) due to resource constraints. Jan Aushadhi generic sertraline is commonly dispensed.",
    privateHospitals:
      "Preferred SSRI for depression with comorbid anxiety, in pregnancy/lactation, and in elderly. Starting dose 50mg OD, titrated to 100-200mg. PHQ-9 monitoring at 2/4/6/12 weeks. ECG in elderly or cardiac patients. Patient counselling is more detailed.",
    medicalColleges:
      "Teaching drug for SSRI pharmacology. Used in pharmacology practicals (prescription writing, patient counselling). Examined in second professional MBBS (pharmacology) and final professional (psychiatry). Commonly featured in NEET PG and INICET questions.",
    primaryCare:
      "First-line antidepressant for mild-moderate depression in Indian primary care. GP/family physicians commonly initiate sertraline 50mg OD. Referral to psychiatrist if no response at 6-8 weeks or if severe depression with suicidal ideation.",
    psychiatryOPD:
      "Workhorse SSRI in psychiatry OPD. Used for depression, OCD, panic disorder, PTSD, social anxiety disorder, and PMDD. Often combined with CBT. Dose escalation to 200mg for OCD. Augmentation with bupropion or mirtazapine for partial response.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ questionnaire) — SSRIs can trigger manic switch.",
      "Assess suicidal ideation — if present, involve family for monitoring and provide Tele-MANAS (14416) number.",
      "Check for MAOI use in last 14 days — absolute contraindication.",
      "Review concurrent medications — especially tramadol, triptans, NSAIDs, warfarin, St John's Wort.",
      "Baseline PHQ-9 score for response monitoring.",
      "In elderly: check baseline serum sodium (SIADH risk) and consider ECG if cardiac risk factors.",
      "In women of reproductive age: discuss pregnancy plans — sertraline is the SSRI of choice if pregnancy is possible.",
      "Counsel about 4-6 week onset — set expectation that side effects precede benefit.",
    ],
    duringTreatment: [
      "Week 1-2: assess tolerability (nausea, insomnia, agitation) and suicidality (especially <25 years).",
      "Week 2-4: review early response — sleep, appetite, energy often improve before mood.",
      "Week 4-6: assess response with PHQ-9. If <30% reduction, increase dose.",
      "Week 6-12: full response assessment. If <50% reduction at 12 weeks, consider augmentation (bupropion/mirtazapine) or switch.",
      "Monitor for sexual dysfunction — ask directly; patients rarely volunteer it.",
      "Watch for hyponatraemia in elderly (confusion, headache, seizures).",
      "Watch for serotonin syndrome if serotonergic drugs are added (tramadol, triptans, linezolid).",
    ],
    followUp: [
      "First follow-up at 2 weeks (tolerability + suicidality).",
      "Second follow-up at 4 weeks (early response).",
      "Third follow-up at 6 weeks (dose escalation decision).",
      "Fourth follow-up at 12 weeks (full response assessment).",
      "If remission achieved (PHQ-9 <5): continue for 6-12 months for first episode, longer for recurrent.",
      "Before discontinuation: taper over 4+ weeks. Consider substituting fluoxetine for last 2 weeks of taper (self-tapers).",
      "In government hospitals: follow-up may be every 4-8 weeks due to travel barriers — counsel family to watch for red flags.",
    ],
    whenToRefer: [
      "Refer to psychiatrist if no response to 2 adequate SSRI trials (12 weeks each).",
      "Refer urgently if suicidal ideation emerges or worsens.",
      "Refer if bipolar disorder is suspected (manic switch risk).",
      "Refer if serotonin syndrome develops (emergency — call 112).",
      "Refer to physician if severe hyponatraemia (Na <120 mmol/L) or seizures.",
      "Refer to obstetrician if patient becomes pregnant (do NOT stop sertraline abruptly).",
      "Refer for CBT — combined SSRI + CBT produces better outcomes than either alone.",
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
    { exam: "NEET PG", year: 2022, concept: "SSRI of choice in pregnancy", topic: "Antidepressants in pregnancy" },
    { exam: "NEET PG", year: 2021, concept: "Antidepressant approved for PTSD", topic: "PTSD pharmacotherapy" },
    { exam: "NEET PG", year: 2020, concept: "Serotonin syndrome diagnosis and management", topic: "Serotonergic toxicity" },
    { exam: "NEET PG", year: 2019, concept: "SSRI with shortest half-life / worst discontinuation", topic: "SSRI pharmacokinetics" },
    { exam: "INICET", year: 2021, concept: "SSRI-induced hyponatraemia mechanism (SIADH)", topic: "Antidepressant adverse effects" },
    { exam: "INICET", year: 2023, concept: "Black box warning for antidepressants in <25", topic: "Antidepressant safety" },
    { exam: "FMGE", year: 2022, concept: "SSRI mechanism of action and onset", topic: "Antidepressant pharmacology" },
    { exam: "FMGE", year: 2021, concept: "Contraindication: MAOI + SSRI combination", topic: "Drug interactions" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Government hospital setup",
      recommendation: "Sertraline is preferred — low cost (₹2-5/tablet), available in Jan Aushadhi and DMHP, wide safety margin, once-daily dosing improves adherence.",
      alternative: "Escitalopram is an alternative if available, but sertraline is more commonly stocked.",
    },
    {
      scenario: "Private psychiatry practice",
      recommendation: "Sertraline or escitalopram are equally preferred. Sertraline is chosen for pregnancy, comorbid anxiety, or when σ1 agonism (anxiolytic effect) is desired.",
      alternative: "Escitalopram if lowest CYP interaction profile is needed (polypharmacy).",
    },
    {
      scenario: "Pregnancy",
      recommendation: "Sertraline is the SSRI of choice — lowest placental transfer, lowest milk/plasma ratio, longest safety track record. IPS concurs with international guidelines.",
      alternative: "If sertraline is unavailable, fluoxetine is acceptable (long safety data). Avoid paroxetine (Category D).",
    },
    {
      scenario: "Adolescents and children",
      recommendation: "Sertraline is used off-label in India for paediatric depression (not FDA-approved for <18). Fluoxetine is the only FDA-approved SSRI for paediatric depression (≥8 years). Monitor closely for suicidality (black box warning).",
      alternative: "Fluoxetine for FDA-approved paediatric use. Escitalopram for ≥12 years.",
    },
    {
      scenario: "Older adults (≥65 years)",
      recommendation: "Sertraline is preferred — mild CYP2D6 inhibition (fewer drug interactions than fluoxetine/paroxetine), low weight gain, low sedation. Start at 25mg OD. Check serum sodium in first 2 weeks (SIADH risk).",
      alternative: "Escitalopram if on complex regimens (lowest CYP interactions). Avoid paroxetine (anticholinergic, sedation, weight gain).",
    },
    {
      scenario: "Cost-sensitive setting",
      recommendation: "Generic sertraline from Jan Aushadhi Kendra is the most affordable option (₹2-5/tablet). Branded versions (Serta, Serenata) are also inexpensive.",
      alternative: "If cost is the primary concern, Jan Aushadhi generic sertraline is unbeatable.",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: true,
    note: "Available at Jan Aushadhi Kendras across India in 25mg, 50mg, and 100mg tablet strengths. Among the most affordable antidepressant options in India. Generic name: Sertraline Tablets IP.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression" },
      { source: "FDA Prescribing Information — ZOLOFT (sertraline hydrochloride)", section: "Highlights of Prescribing Information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/019839s74lbl.pdf" },
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
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Sertraline — Schedule H prescription status" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose Sertraline for depression",
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
        question: "Mild depression (PHQ-9 5-9)",
        recommendation: "Psychotherapy first (CBT). Consider sertraline if functional impairment or patient preference.",
        reasoning: "NICE recommends psychotherapy alone for mild depression. Medication is offered if functional impairment persists after 2-4 weeks of psychotherapy.",
      },
      {
        id: "moderate",
        question: "Moderate depression (PHQ-9 10-14)",
        recommendation: "Sertraline 50mg OD + CBT. First-line per NICE CG91 and IPS guidelines.",
        reasoning: "SSRI + CBT is first-line for moderate depression. Sertraline is preferred for favourable side-effect profile, pregnancy safety, and low cost in India.",
      },
      {
        id: "severe",
        question: "Severe depression (PHQ-9 15-27)",
        recommendation: "Sertraline 50mg OD (titrate to 100-200mg) + CBT. Consider psychiatry referral.",
        reasoning: "Severe depression requires pharmacotherapy. Sertraline is first-line. If psychotic features → add antipsychotic. If suicidal → urgent psychiatric referral.",
        branches: [
          { label: "With suicidal ideation", next: "suicidal" },
          { label: "With psychotic features", next: "psychotic" },
          { label: "Without complications", next: "start-sertraline" },
        ],
      },
      {
        id: "suicidal",
        question: "Severe depression with suicidal ideation",
        recommendation: "Urgent psychiatry referral. Do NOT send home alone. Consider admission. Sertraline can be started but monitor weekly (black box warning <25).",
        reasoning: "Suicidal ideation in severe depression is a psychiatric emergency. Tele-MANAS 14416 for crisis support. 112 for emergency.",
      },
      {
        id: "psychotic",
        question: "Severe depression with psychotic features",
        recommendation: "Psychiatry referral. Add antipsychotic (olanzapine or aripiprazole) to SSRI. Consider ECT if catatonic or severely suicidal.",
        reasoning: "Psychotic depression requires combination therapy (antidepressant + antipsychotic) or ECT. SSRI alone is insufficient.",
      },
      {
        id: "start-sertraline",
        question: "Why choose Sertraline?",
        recommendation: "Sertraline is preferred when: pregnancy possible, comorbid anxiety, elderly, on multiple medications (mild CYP2D6), or cost matters (Jan Aushadhi available).",
        reasoning: "Sertraline is the SSRI of choice in pregnancy/lactation, has σ1 agonism (anxiolytic), mild CYP2D6 inhibition (fewer interactions), and is the most affordable SSRI in India.",
        branches: [
          { label: "When NOT to choose", next: "avoid" },
        ],
      },
      {
        id: "avoid",
        question: "When NOT to choose Sertraline",
        recommendation: "Avoid: bipolar depression without mood stabiliser, active MAOI use (14 days), pimozide, severe hepatic impairment. Consider fluoxetine (bipolar), wait 14 days (MAOI), switch to escitalopram (hepatic).",
        reasoning: "SSRIs can trigger manic switch in bipolar. MAOI + SSRI = fatal serotonin syndrome. Pimozide + sertraline = QTc. Severe hepatic impairment = reduce dose drastically.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian OPD initiation for first-episode moderate depression in an adult",
    lines: [
      "Rx",
      "Tab Sertraline 25 mg",
      "1 tab OD morning after food × 5 days",
      "",
      "Then increase to:",
      "Tab Sertraline 50 mg",
      "1 tab OD morning after food",
      "",
      "Advice: Take in morning with food. Do not stop suddenly.",
      "Avoid alcohol. Report if feeling worse or new suicidal thoughts.",
    ],
    followUp: [
      "Review after 2 weeks — tolerability, suicidality, side effects",
      "Review after 4 weeks — early response (sleep, appetite, energy)",
      "Review after 6 weeks — PHQ-9; if <30% reduction, increase to 100mg",
      "Review after 12 weeks — full response assessment",
      "If remission (PHQ-9 <5): continue 6-12 months, then taper over 4+ weeks",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information and individualise for each patient.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Stopping after 2 weeks because 'it's not working'",
      why: "SSRIs take 4-6 weeks for full antidepressant effect. Stopping at 2 weeks means stopping before the drug has had a chance to work.",
      correction: "Counsel at initiation: 'Side effects come first (week 1-2), mood benefit comes later (week 4-6). Don't stop early.'",
    },
    {
      mistake: "Abrupt discontinuation",
      why: "Sudden cessation causes discontinuation syndrome — dizziness, brain zaps, nausea, irritability. Can start within 24 hours of missed dose.",
      correction: "Always taper over 4+ weeks. If severe, substitute fluoxetine (long half-life) for last 2 weeks of taper.",
    },
    {
      mistake: "Combining with MAOIs or not waiting the 14-day washout",
      why: "MAOI + SSRI = potentially fatal serotonin syndrome. The 14-day washout is non-negotiable.",
      correction: "Always ask about MAOI use before starting. Wait at least 14 days after stopping an MAOI before starting sertraline, and vice versa.",
    },
    {
      mistake: "Ignoring bipolar history",
      why: "SSRIs can trigger a manic switch in undiagnosed bipolar disorder. This is a dangerous and preventable complication.",
      correction: "Screen for bipolar disorder (MDQ questionnaire) before starting any antidepressant. If bipolar confirmed, use mood stabiliser first.",
    },
    {
      mistake: "Under-dosing and not titrating",
      why: "Starting at 50mg and never titrating means the patient may never reach therapeutic dose. OCD often requires 150-200mg.",
      correction: "Start at 50mg (25mg in anxious/elderly), titrate by 50mg every 2-4 weeks. Target: 100-200mg for depression, up to 200mg for OCD.",
    },
    {
      mistake: "Not asking about sexual dysfunction",
      why: "Sexual dysfunction affects 30-50% of patients on SSRIs and is the #1 reason for non-adherence. Patients rarely volunteer it.",
      correction: "Ask directly at every follow-up: 'Any changes in sexual interest or function?' If present, consider dose reduction, adding bupropion, or switching.",
    },
    {
      mistake: "Not monitoring sodium in elderly",
      why: "SSRIs cause SIADH in ~0.5-1% of patients. Risk is highest in elderly females in the first 2 weeks. Can cause seizures if severe.",
      correction: "Check serum sodium at baseline in elderly. Recheck within 2 weeks if symptomatic (confusion, headache, lethargy).",
    },
    {
      mistake: "Not warning about NSAID bleeding risk",
      why: "SSRIs deplete platelet serotonin → impaired clotting. Combined with NSAIDs → 6× increased risk of upper GI bleed.",
      correction: "Counsel: use paracetamol instead of ibuprofen/diclofenac. If NSAIDs are necessary, add PPI for gastroprotection.",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Bipolar depression without mood stabiliser",
      reason: "SSRI monotherapy can trigger a manic switch — potentially dangerous.",
      alternative: "Mood stabiliser first (lithium, valproate, lamotrigine). SSRI only if mood stabiliser alone is insufficient.",
    },
    {
      scenario: "Active MAOI use (within 14 days)",
      reason: "Fatal serotonin syndrome. The 14-day washout is absolute.",
      alternative: "Wait 14 days after stopping MAOI before starting sertraline.",
    },
    {
      scenario: "Concurrent pimozide",
      reason: "Sertraline inhibits CYP2D6 → raises pimozide levels → QTc prolongation → torsades de pointes.",
      alternative: "Discontinue pimozide or use a different antidepressant without CYP2D6 inhibition.",
    },
    {
      scenario: "Severe hepatic impairment (Child-Pugh C)",
      reason: "Reduced metabolism → accumulation → toxicity.",
      alternative: "Reduce dose by 75% (start 12.5mg every other day) or use escitalopram (slightly safer hepatic profile).",
    },
    {
      scenario: "Known poor CYP2D6 metaboliser on critical CYP2D6 substrate",
      reason: "Sertraline's mild CYP2D6 inhibition may still raise levels of co-prescribed CYP2D6 substrates (TCAs, metoprolol, antiarrhythmics).",
      alternative: "Escitalopram (lowest CYP interaction profile) or fluvoxamine (CYP1A2, not 2D6).",
    },
    {
      scenario: "Patient is <25 and actively suicidal without monitoring",
      reason: "Black box warning — antidepressants increase suicidality in patients <25. Requires weekly monitoring.",
      alternative: "If monitoring is not possible, consider CBT alone or refer to psychiatry for supervised initiation.",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "What is the mechanism of action of sertraline? Why does it take 4-6 weeks to work? (SERT blockade is immediate; clinical effect correlates with 5-HT1A autoreceptor desensitisation and downstream BDNF/neurogenesis)",
      "Which SSRI is preferred in pregnancy and why? (Sertraline — lowest milk/plasma ratio, undetectable infant levels)",
      "Name the 6 FDA-approved indications for sertraline. (MDD, OCD, Panic, PTSD, Social Anxiety, PMDD — mnemonic: MOP PPS)",
      "What is the black box warning? What age group? How do you counsel? (<25 years, suicidality, weekly monitoring first month)",
      "What is serotonin syndrome? How do you distinguish it from NMS? (SS = clonus + hyperreflexia + mydriasis; NMS = rigidity + bradyreflexia)",
      "What is the role of σ1 receptor agonism in sertraline? (Unique among SSRIs — contributes to anxiolytic effect)",
    ],
    residentExpects: [
      "Know the starting dose and titration schedule (50mg → 100mg → 200mg; 25mg start in anxious/elderly)",
      "Know when to increase dose vs switch (PHQ-9 <30% reduction at 6 weeks → increase; <50% at 12 weeks → switch/augment)",
      "Know augmentation strategies (bupropion XL 150mg, mirtazapine 15mg)",
      "Know discontinuation syndrome management (taper 4+ weeks; fluoxetine substitution for last 2 weeks)",
      "Know the CYP interactions (mild CYP2D6 inhibition; check for TCA, metoprolol, antiarrhythmic co-prescription)",
      "Know when to refer to psychiatry (no response to 2 SSRI trials, bipolar suspicion, psychotic features, suicidality)",
    ],
    consultantsDo: [
      "Use PHQ-9 at every visit for objective monitoring",
      "Screen for bipolar disorder (MDQ) before starting any antidepressant",
      "Combine SSRI + CBT for moderate-severe depression (better outcomes than either alone)",
      "Ask about sexual dysfunction at every follow-up (patients rarely volunteer)",
      "Continue treatment for 6-12 months after remission for first episode; longer for recurrent",
      "Use sertraline as default SSRI in pregnancy and lactation",
      "Consider cost — Jan Aushadhi generic sertraline is ₹2-5/tablet",
    ],
    internsMiss: [
      "Forgetting to check for MAOI use before starting (always ask!)",
      "Not counselling about 4-6 week onset — patient stops early",
      "Not warning about NSAID bleeding risk — patient takes ibuprofen for headache",
      "Not asking about sexual dysfunction — patient stops silently",
      "Not checking sodium in elderly — presents with confusion 2 weeks later",
      "Not screening for bipolar disorder — patient has manic switch",
      "Not involving family in monitoring (critical in Indian joint family system)",
      "Stopping abruptly when patient feels better — discontinuation syndrome",
      "Not providing Tele-MANAS number (14416) for crisis support",
    ],
  },

  /* Refined high-yield level */
  highYieldLevel: "extreme",

  /* Drug family navigation */
  drugFamilyNav: {
    familyName: "SSRIs (Selective Serotonin Reuptake Inhibitors)",
    members: [
      { name: "Sertraline", slug: "sertraline", relationship: "Current drug", distinguishing: "SSRI of choice in pregnancy; σ1 agonism; 6 FDA indications" },
      { name: "Fluoxetine", slug: "fluoxetine", relationship: "Same class (SSRI)", distinguishing: "Longest half-life; only SSRI for bulimia; paediatric ≥8yr" },
      { name: "Escitalopram", slug: "escitalopram", relationship: "Same class (SSRI)", distinguishing: "S-enantiomer of citalopram; lowest CYP interactions; QTc watch" },
      { name: "Paroxetine", slug: "paroxetine", relationship: "Same class (SSRI)", distinguishing: "Shortest half-life (worst discontinuation); Category D; tamoxifen interaction" },
      { name: "Citalopram", slug: "citalopram", relationship: "Same class (SSRI)", distinguishing: "Racemic parent of escitalopram; QTc dose-dependent; 40mg cap" },
      { name: "Fluvoxamine", slug: "fluvoxamine", relationship: "Same class (SSRI)", distinguishing: "OCD-only FDA indication; CYP1A2 inhibitor; tizanidine contraindicated" },
    ],
  },

  /* Learning time breakdown */
  learningTimeBreakdown: {
    read: "18 min",
    study: "45 min",
    revision: "8 min",
  },

  /* ---- Educational UX Layer ---- */

  /* Inline micro-quizzes — one after each major learning milestone */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "Which transporter does Sertraline inhibit?",
      options: ["DAT (dopamine transporter)", "NET (norepinephrine transporter)", "SERT (serotonin transporter)", "GABA transporter"],
      correctIndex: 2,
      explanation: "Sertraline selectively blocks SERT (serotonin transporter), increasing serotonin in the synaptic cleft. This is what makes it an SSRI — Selective Serotonin Reuptake Inhibitor. The 'selective' refers to its much greater affinity for SERT vs NET or DAT.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-onset",
      question: "Why does Sertraline take 4-6 weeks to work when SERT blockade occurs within hours?",
      options: [
        "The drug needs to accumulate to therapeutic levels",
        "5-HT1A autoreceptors initially brake serotonin firing, and need 1-2 weeks to desensitise",
        "The blood-brain barrier delays drug entry",
        "Serotonin synthesis takes weeks to increase",
      ],
      correctIndex: 1,
      explanation: "Acute SERT blockade raises synaptic serotonin within hours, but 5-HT1A somatodendritic autoreceptors in the raphe nuclei detect this and inhibit further firing. Over 1-2 weeks, these autoreceptors desensitise — removing the brake. Downstream neuroadaptive changes (BDNF, neurogenesis) take 4-6 weeks. This delay is THE most tested SSRI concept.",
      afterSectionId: "timeline",
    },
    {
      id: "quiz-side-effects",
      question: "What is the most common reason patients stop taking SSRIs?",
      options: ["Nausea", "Sexual dysfunction", "Weight gain", "Insomnia"],
      correctIndex: 1,
      explanation: "Sexual dysfunction (decreased libido, delayed orgasm, anorgasmia) affects 30-50% of patients and is the #1 reason for SSRI discontinuation. Patients rarely volunteer this — always ask directly. Solutions: dose reduction, add bupropion, or switch to bupropion/mirtazapine.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-monitoring",
      question: "A 72-year-old woman on sertraline for 2 weeks presents with confusion and headache. What is the most likely cause?",
      options: ["Serotonin syndrome", "SIADH (hyponatraemia)", "Alzheimer's disease", "Urinary tract infection"],
      correctIndex: 1,
      explanation: "SSRIs cause SIADH in ~0.5-1% of patients, with highest risk in elderly females in the first 2 weeks. Check serum sodium — if <125 mmol/L, fluid restrict and consider discontinuing. This is why sodium should be checked at baseline in elderly patients starting SSRIs.",
      afterSectionId: "monitoring",
    },
    {
      id: "quiz-contraindications",
      question: "How long must you wait after stopping an MAOI before starting Sertraline?",
      options: ["24 hours", "3 days", "7 days", "14 days"],
      correctIndex: 3,
      explanation: "14 days. MAOIs inhibit serotonin breakdown. Combining with SERT blockade causes massive serotonergic excess → potentially fatal serotonin syndrome. The 14-day washout is absolute and non-negotiable. This is the most tested drug interaction in psychopharmacology.",
      afterSectionId: "contraindications",
    },
    {
      id: "quiz-pregnancy",
      question: "Which SSRI is the drug of choice in pregnancy and lactation?",
      options: ["Paroxetine", "Fluoxetine", "Sertraline", "Citalopram"],
      correctIndex: 2,
      explanation: "Sertraline is the SSRI of choice in pregnancy — lowest placental transfer, lowest milk/plasma ratio (~0.5), infant serum levels usually undetectable. IPS concurs with international guidelines. Avoid paroxetine (Category D — cardiac defects). Never stop sertraline abruptly if a patient becomes pregnant.",
      afterSectionId: "evidence-practice",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "Explain the mechanism of action of sertraline. Why does the clinical effect take 4-6 weeks when SERT blockade is immediate?",
      answer: "Sertraline blocks SERT → ↑ synaptic 5-HT (hours). But 5-HT1A autoreceptors in the raphe nuclei initially brake firing. Over 1-2 weeks, autoreceptors desensitise → ↑ serotonergic throughput to PFC. Downstream BDNF/neurogenesis (4-6 weeks) correlates with clinical effect, not acute 5-HT levels.",
      topic: "Mechanism",
    },
    {
      question: "Name the 6 FDA-approved indications for sertraline. Which one is unique among SSRIs?",
      answer: "MDD, OCD, Panic Disorder, PTSD, Social Anxiety Disorder, PMDD (mnemonic: MOP PPS). Sertraline is the ONLY SSRI FDA-approved for PTSD.",
      topic: "Indications",
    },
    {
      question: "A patient on sertraline develops agitation, clonus, hyperreflexia, and fever. What is the diagnosis and how do you manage it?",
      answer: "Serotonin syndrome. Triad: mental status change + autonomic instability + neuromuscular excitation (clonus, hyperreflexia). Management: discontinue sertraline, supportive care (cooling, benzodiazepines), cyproheptadine (5-HT2A antagonist) in severe cases. Distinguish from NMS (rigidity, bradyreflexia).",
      topic: "Side Effects",
    },
    {
      question: "Which SSRI is preferred in pregnancy, and why? What about lactation?",
      answer: "Sertraline — lowest placental transfer, lowest milk/plasma ratio (~0.5), infant serum levels usually undetectable. IPS concurs. In lactation, sertraline is also preferred — minimal transfer into breast milk, no adverse effects on infant development demonstrated. Avoid paroxetine (Category D).",
      topic: "Pregnancy & Lactation",
    },
    {
      question: "What is the black box warning for sertraline? How do you counsel a patient about it?",
      answer: "Increased suicidality in patients <25 years. Counsel: 'In the first month, you may feel worse before you feel better. Watch for new or worsening agitation, irritability, or suicidal thoughts. If these occur, contact me immediately or call Tele-MANAS at 14416.' Weekly monitoring in the first month. Document informed consent.",
      topic: "Safety",
    },
    {
      question: "How do you manage SSRI discontinuation syndrome? Which SSRI has the worst discontinuation?",
      answer: "Taper over 4+ weeks. Symptoms: FINISH (Flu-like, Insomnia, Nausea, Imbalance, Sensory/brain zaps, Hyperarousal). Worst: paroxetine (shortest half-life 21h). Mildest: fluoxetine (longest half-life 1-4 days, self-tapers). Can substitute fluoxetine for the last 2 weeks of a paroxetine/sertraline taper to smooth discontinuation.",
      topic: "Discontinuation",
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
      checkpoint: "You now know what Sertraline is, its 6 FDA indications, and how it connects to the broader neuroscience of depression.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act in the brain?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand the mechanism — from acute SERT blockade to chronic 5-HT1A desensitisation to BDNF-mediated neurogenesis. The 4-6 week delay now makes sense.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When do you use it? What goes wrong?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now prescribe sertraline safely — you know the indications, the side effects to watch for, the contraindications, and how to monitor response.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it actually used in Indian hospitals?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands, the government hospital workflow, the common mistakes interns make, and when NOT to choose sertraline.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content, worked through a clinical case, compared sertraline with alternatives, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions, you have exam-level mastery of Sertraline.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Zoloft label, NICE CG91, APA Practice Guideline, KD Tripathi 8e, IPS Depression Guidelines, NMC CBME Curriculum"],
};
