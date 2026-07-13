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

  /* ---- Hero / summary ---- */
  tagline: "A selective serotonin reuptake inhibitor used across mood, anxiety, and obsessive-compulsive disorders.",
  summary:
    "Sertraline blocks the serotonin transporter (SERT) at the presynaptic membrane, increasing serotonin availability in the synaptic cleft. Over 2–6 weeks, downstream neuroadaptive changes — including 5-HT1A autoreceptor desensitisation and increased BDNF expression in the hippocampus — produce the clinical antidepressant and anxiolytic effects. It is the most widely prescribed SSRI in the United States and is FDA-approved for six distinct indications across paediatric and adult populations.",

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
    legacyCategory: "C (former FDA category)",
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
  references: [
    {
      source: "Katzung Basic & Clinical Pharmacology, 16th edition",
      section: "Chapter 30 — Antidepressant Agents",
    },
    {
      source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
      section: "Section V — Pharmacotherapy of Mood Disorders",
    },
    {
      source: "FDA Prescribing Information — ZOLOFT (sertraline hydrochloride)",
      section: "Highlights of Prescribing Information",
      url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/019839s74lbl.pdf",
    },
    {
      source: "NICE Clinical Guideline CG91 — Depression in adults: recognition and management",
    },
    {
      source: "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder, 3rd edition",
    },
    {
      source: "MIMS India — Sertraline",
      section: "India-specific prescribing information",
    },
  ],

  relatedDrugs: [
    {
      name: "Fluoxetine",
      drugClass: "SSRI",
      relationship: "Same class. Longest half-life (1–4 days with active metabolite) → mildest discontinuation syndrome. Only SSRI approved for paediatric depression (≥8 yrs) and bulimia. More activating — better for lethargic depression.",
    },
    {
      name: "Escitalopram",
      drugClass: "SSRI",
      relationship: "Same class. S-enantiomer of citalopram. Lowest CYP interaction profile — preferred in patients on complex regimens. QTc prolongation at higher doses (>20 mg) — avoid in long-QT.",
    },
    {
      name: "Paroxetine",
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
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-mapping", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-mapping", note: "Target of mood regulation" },
    { label: "Amygdala", type: "brain-region", href: "#brain-mapping", note: "Anxiety & fear processing" },
    { label: "Hippocampus", type: "brain-region", href: "#brain-mapping", note: "Memory & neurogenesis" },
    { label: "Depression", type: "condition", href: "#clinical-uses", note: "Primary indication" },
    { label: "Anxiety Disorders", type: "condition", href: "#clinical-uses", note: "Multiple approved indications" },
    { label: "OCD", type: "condition", href: "#clinical-uses", note: "Approved in adults & children" },
    { label: "PTSD", type: "condition", href: "#clinical-uses", note: "Only SSRI approved for PTSD" },
    { label: "Sexual Dysfunction", type: "side-effect", href: "#side-effects", note: "Most common reason for discontinuation" },
    { label: "Serotonin Syndrome", type: "side-effect", href: "#side-effects", note: "Life-threatening — know the signs" },
    { label: "Patient Guide — Starting an SSRI", type: "patient-guide", href: "#patient-education", note: "What to expect in the first 6 weeks" },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Zoloft label, NICE CG91, APA Practice Guideline"],
};
