import type { Drug } from "../types";

/**
 * Escitalopram — canonical drug page data.
 *
 * Structured to mirror the sertraline template exactly so every section of
 * /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for LEXAPRO (escitalopram oxalate)
 *   - FDA Drug Safety Communication: abnormal heart rhythms associated with high doses of citalopram (2011/2012)
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *
 * Last reviewed: 2026-07-13
 */
export const escitalopram: Drug = {
  /* ---- Identity ---- */
  slug: "escitalopram",
  genericName: "Escitalopram",
  brandNames: ["Lexapro", "Cipralex", "Nexito"],
  drugClass: "ssri",
  drugClassLabel: "SSRI",
  drugClassFullName: "Selective Serotonin Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SSRIs", "Escitalopram"],

  /* ---- Hero / summary ---- */
  tagline:
    "The S-enantiomer of citalopram — the most selective SSRI, with the lowest CYP interaction profile and a dose-dependent QTc precaution.",
  summary:
    "Escitalopram is the pharmacologically active S-enantiomer of citalopram. It blocks the serotonin transporter (SERT) with high selectivity and minimal off-target effects on norepinephrine or dopamine transporters, muscarinic, histaminic, or α-adrenergic receptors. Among SSRIs it has the lowest cytochrome P450 interaction profile, making it the preferred SSRI for elderly patients and those on complex regimens. It is FDA-approved for major depressive disorder (adults and adolescents ≥12 years) and generalised anxiety disorder (adults). Its principal safety concern — shared with racemic citalopram — is dose-dependent QTc prolongation, which led the FDA to cap maintenance dosing at 20 mg/day (10 mg in patients >60 years, hepatic impairment, CYP2C19 poor metabolisers, or those taking CYP2C19 inhibitors).",
  estimatedReadTime: "17 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain why escitalopram is the S-enantiomer of citalopram and how this stereochemistry translates into clinical advantages (cleaner receptor profile, less hERG blockade from the R-enantiomer).",
    "Describe the mechanism of action — from acute SERT blockade to chronic 5-HT1A autoreceptor desensitisation — and why the clinical effect is delayed despite rapid pharmacological action.",
    "Justify escitalopram's selection as the SSRI of choice in elderly patients and in those on complex medication regimens, based on its low CYP interaction profile.",
    "Predict and counsel for the dose-dependent QTc prolongation risk, and apply the FDA maximum-dose rules (20 mg/day; 10 mg/day in elderly, CYP2C19 poor metabolisers, hepatic impairment, and CYP2C19 inhibitor coadministration).",
    "Compare escitalopram with other SSRIs (sertraline, fluoxetine, paroxetine, citalopram) and choose the right agent for the right patient.",
    "Recognise and manage serotonin syndrome, SIADH, QTc prolongation, and SSRI discontinuation syndrome.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Escitalopram selectively blocks the serotonin transporter (SERT) with the highest selectivity ratio among SSRIs, increasing synaptic serotonin and — over 2–6 weeks — producing downstream neuroadaptive antidepressant and anxiolytic effects.",
    molecularTarget: "SERT (SLC6A4 — serotonin transporter)",
    effect:
      "Acute: increased synaptic serotonin. Chronic (2–6 weeks): desensitisation of 5-HT1A somatodendritic autoreceptors in the raphe nuclei, increased serotonergic throughput to the prefrontal cortex, and upregulation of BDNF in the hippocampus.",
    steps: [
      "Escitalopram (the S-enantiomer of citalopram) binds the serotonin transporter (SERT) on the presynaptic neuron with high affinity, blocking reuptake of serotonin from the synaptic cleft.",
      "Acute SERT blockade raises synaptic serotonin concentration within hours — but somatodendritic 5-HT1A autoreceptors in the raphe nuclei detect this and inhibit further serotonin release.",
      "Over 7–14 days, 5-HT1A autoreceptors gradually desensitise — removing the brake on serotonin firing.",
      "Serotonergic throughput from the raphe nuclei to the prefrontal cortex, amygdala, and hippocampus increases.",
      "Downstream neuroadaptive changes occur over 2–6 weeks: increased BDNF expression, hippocampal neurogenesis, and postsynaptic receptor downregulation.",
      "These delayed adaptations — not the acute serotonin increase — correlate with the onset of clinical antidepressant and anxiolytic effects. Some studies suggest earlier symptomatic improvement (week 1–2) than other SSRIs, possibly reflecting escitalopram's allosteric SERT binding and high intrinsic activity.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~80%). Peak plasma at 5 hours. Food does not significantly affect absorption. Highly protein-bound (~56%). Volume of distribution ~12 L/kg. Steady state reached in ~7–10 days. The R-enantiomer (present in racemic citalopram but absent in escitalopram) is essentially inactive at SERT but contributes to hERG channel blockade and QTc prolongation — escitalopram therefore delivers the therapeutic S-enantiomer without the cardiotoxic R-enantiomer load.",
    halfLife: "27–32 hours (parent drug).",
    activeMetabolite:
      "S-demethylcitalopram (S-DCT) and S-didemethylcitalopram — both weakly active at SERT (1/27th and 1/40th the affinity of the parent, respectively). Negligible clinical contribution to overall effect. Elimination half-lives are slightly longer than the parent.",
    metabolism:
      "Hepatic CYP2C19 (primary), CYP3A4, and CYP2D6 (minor). Lowest CYP interaction profile among SSRIs — minimal inhibition of CYP1A2, 2C9, 2C19, 2D6, and 3A4 at therapeutic doses. CYP2C19 poor metabolisers achieve ~2-fold higher plasma levels — hence the 10 mg/day dose cap in this population.",
    excretion: "Roughly 8% renal as unchanged drug; metabolites excreted approximately equally in urine (~85%) and faeces (~10%).",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic", label: "Presynaptic neuron", sublabel: "Raphe nuclei — synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT transporter", sublabel: "Normally reuptakes serotonin", variant: "target" },
      { id: "escitalopram", label: "Escitalopram (S-enantiomer)", sublabel: "Highly selective SERT blockade", variant: "inhibit" },
      { id: "cleft", label: "↑ Synaptic 5-HT", sublabel: "More serotonin available", variant: "output" },
      { id: "autoreceptor", label: "5-HT1A autoreceptor", sublabel: "Initially brakes firing", variant: "process" },
      { id: "desensitised", label: "Autoreceptors desensitise", sublabel: "Days 7–14 — brake removed", variant: "output" },
      { id: "pfc", label: "Prefrontal cortex", sublabel: "Mood regulation improves", variant: "output" },
      { id: "bdnf", label: "↑ BDNF + neurogenesis", sublabel: "Weeks 2–6 — full effect", variant: "output" },
    ],
    edges: [
      { from: "presynaptic", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "escitalopram", to: "sert", type: "inhibit", label: "blocks (highly selective)" },
      { from: "serotonin", to: "cleft", label: "accumulates" },
      { from: "cleft", to: "autoreceptor", label: "detects" },
      { from: "autoreceptor", to: "desensitised", label: "over 7–14 days" },
      { from: "desensitised", to: "pfc", label: "increased throughput" },
      { from: "pfc", to: "bdnf", label: "weeks 2–6" },
    ],
    caption:
      "Escitalopram is the S-enantiomer of citalopram. By isolating the active enantiomer, the therapeutic SERT blockade is delivered without the off-target R-enantiomer (which contributes to hERG / QTc liability). The 2–6 week delay between acute pharmacology and clinical effect is shared with all SSRIs.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)"],
  receptors: ["SERT (serotonin transporter — high-affinity, high-selectivity blockade)", "5-HT1A (autoreceptor, desensitises)", "5-HT2C", "5-HT7", "Allosteric SERT binding site"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // SSRIs act on the diffuse serotonergic projection system, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description: "First-line treatment in adults. Also FDA-approved for adolescents aged 12–17 years — one of only two SSRIs approved for paediatric depression (the other being fluoxetine).",
      ageGroup: "Adults & ≥12 years",
    },
    {
      name: "Generalised Anxiety Disorder (GAD)",
      status: "fda-approved",
      description: "First-line pharmacotherapy in adults. Onset of anxiolytic benefit typically by 4 weeks; full effect at 8–12 weeks.",
      ageGroup: "Adults",
    },
    {
      name: "Panic Disorder",
      status: "off-label",
      description: "Widely used off-label; efficacy comparable to other SSRIs. Onset of benefit typically at 4 weeks; full effect at 8–12 weeks.",
    },
    {
      name: "Social Anxiety Disorder (Social Phobia)",
      status: "off-label",
      description: "Off-label use supported by RCT evidence. Onset slower than for depression — 8–12 weeks for full response.",
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD)",
      status: "off-label",
      description: "Off-label (sertraline, fluoxetine, fluvoxamine, and paroxetine carry the FDA OCD approvals). Often requires higher doses (up to 20 mg/day, the maximum recommended dose).",
    },
    {
      name: "Post-Traumatic Stress Disorder (PTSD)",
      status: "off-label",
      description: "Off-label use; sertraline is the only SSRI FDA-approved for PTSD. Reasonable alternative when sertraline is not tolerated or interactions are a concern.",
    },
    {
      name: "Premenstrual Dysphoric Disorder (PMDD)",
      status: "off-label",
      description: "Off-label; sertraline and fluoxetine carry the FDA PMDD approval. Continuous or luteal-phase-only intermittent dosing may be used.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (including phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. At least 14 days must elapse between discontinuation of an MAOI and initiation of escitalopram.",
    },
    {
      name: "Pimozide",
      severity: "absolute",
      rationale:
        "Contraindicated due to QTc prolongation and risk of torsades de pointes — additive with escitalopram's own dose-dependent QTc effect.",
    },
    {
      name: "Congenital long-QT syndrome / concurrent QTc-prolonging drugs",
      severity: "absolute",
      rationale:
        "Escitalopram dose-dependently prolongs the QTc interval. Avoid in patients with congenital long-QT syndrome, and avoid co-prescription with other QTc-prolonging agents (class IA/III antiarrhythmics, certain antipsychotics, macrolides, fluoroquinolones, methadone) when possible.",
    },
    {
      name: "Known hypersensitivity to escitalopram or citalopram",
      severity: "absolute",
      rationale: "Anaphylaxis and angioedema have been reported. Cross-reactivity with the racemic parent (citalopram) should be assumed.",
    },
    {
      name: "CYP2C19 poor metabolisers / coadministration with strong CYP2C19 inhibitors (e.g. omeprazole) — at doses >10 mg/day",
      severity: "relative",
      rationale:
        "CYP2C19 poor metabolism or inhibition raises escitalopram plasma levels ~2-fold, amplifying QTc risk. The FDA maximum dose in these patients is 10 mg/day.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of escitalopram in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. Escitalopram is one of only two SSRIs FDA-approved for paediatric (≥12 yrs) depression; the boxed warning still applies.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea & GI upset",
      frequency: "very-common",
      severity: "mild",
      description: "Dose-dependent, typically resolves after 1–2 weeks. Taking with food reduces severity. Among the most common reasons for early discontinuation.",
      management: "Take with food. Consider temporary dose reduction or slower titration.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "very-common",
      severity: "moderate",
      description: "Decreased libido, delayed orgasm/anorgasmia, erectile dysfunction. Often unreported. Less than paroxetine but still substantial. May persist in a subset of patients after discontinuation (PSSD).",
      management: "Dose reduction if possible. Add bupropion XL 150 mg/day. Consider switch to bupropion or mirtazapine. Sildenafil for erectile component.",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Usually transient in the first 1–2 weeks. Differentiate from serotonin syndrome (which includes hyperreflexia and clonus).",
      management: "Paracetamol is safe. Avoid NSAIDs if possible (bleeding risk).",
    },
    {
      name: "Insomnia or somnolence",
      frequency: "common",
      severity: "mild",
      description: "Either can occur; escitalopram is generally neutral — less activating than fluoxetine, less sedating than paroxetine. Can be taken morning or night depending on individual response.",
      management: "If activating → take in morning. If sedating → take at night.",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Less pronounced than with paroxetine (which has mild anticholinergic activity). Sip water, sugar-free gum.",
    },
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description: "Usually mild and transient. If persistent or severe, evaluate for hyponatraemia (especially in the elderly) or QTc effects.",
    },
    {
      name: "Diarrhoea",
      frequency: "common",
      severity: "mild",
      description: "Serotonin acts on 5-HT3 receptors in the gut. Usually transient over 1–2 weeks.",
    },
    {
      name: "Sweating",
      frequency: "common",
      severity: "mild",
      description: "Particularly nocturnal. Mechanism likely serotonergic effect on hypothalamic thermoregulation. Distressing but benign.",
    },
    {
      name: "Fatigue",
      frequency: "common",
      severity: "mild",
      description: "Mild and usually transient. Less than with paroxetine. Often improves after 2–3 weeks.",
    },
  ],

  seriousSideEffects: [
    {
      name: "QTc Prolongation & Torsades de Pointes",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Dose-dependent QTc prolongation — the signature safety concern shared with racemic citalopram. The FDA issued a Drug Safety Communication (2011/2012) restricting citalopram and escitalopram maximum doses because of torsades de pointes and QTc prolongation. Risk is highest in elderly, females, hypokalaemia, hypomagnesaemia, bradycardia, congestive heart failure, congenital long-QT syndrome, hepatic impairment, CYP2C19 poor metabolisers, and concurrent QTc-prolonging drugs.",
      management:
        "Maximum dose 20 mg/day in adults; 10 mg/day in patients >60 years, hepatic impairment, CYP2C19 poor metabolisers, or concurrent CYP2C19 inhibitors. Baseline ECG in patients with risk factors; repeat after dose titration. Correct hypokalaemia / hypomagnesaemia. Avoid concurrent QTc-prolonging drugs.",
    },
    {
      name: "Serotonin Syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis), and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of initiating, increasing, or combining serotonergic agents.",
      management:
        "Discontinue escitalopram immediately. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU admission for hyperthermia >41°C.",
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
        "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk.",
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
        "In patients with undiagnosed bipolar disorder, SSRIs can trigger a manic episode. Screen for personal and family history of bipolar disorder before initiating.",
      management:
        "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant. Use a mood stabiliser first in bipolar depression.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description:
        "Seizure risk is dose-dependent. Very rare at therapeutic doses; overdose significantly increases risk.",
      management: "Use cautiously in patients with epilepsy. Benzodiazepines for seizure in overdose setting.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "common",
      severity: "moderate",
      description:
        "Occurs if stopped abruptly after ≥4 weeks of use. Symptoms: dizziness, 'brain zaps' (paresthesia), nausea, headache, irritability, insomnia. Severity intermediate — milder than paroxetine (shortest half-life), comparable to sertraline, more noticeable than fluoxetine (longest half-life).",
      management:
        "Taper over at least 4 weeks. If symptoms emerge, return to previous dose and taper more slowly. Fluoxetine self-taper (long half-life) can be substituted for shorter half-life SSRIs near end of taper.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes.",
    },
    {
      parameter: "ECG (QTc)",
      frequency: "Baseline in patients with risk factors (age >60, cardiac disease, electrolyte abnormalities, congenital long-QT, concurrent QTc-prolonging drugs, CYP2C19 PMs); repeat after dose titration above 10 mg/day.",
      rationale:
        "Dose-dependent QTc prolongation is the signature safety concern of escitalopram/citalopram. Detect early and reduce dose or discontinue if QTc >450 ms (men) / >470 ms (women) or increase >30 ms from baseline.",
    },
    {
      parameter: "Serum sodium",
      frequency: "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale: "SSRIs cause SIADH in ~0.5–1% of patients. Highest risk in elderly females.",
    },
    {
      parameter: "Electrolytes (K⁺, Mg²⁺)",
      frequency: "Baseline and periodically in patients at QTc risk.",
      rationale: "Hypokalaemia and hypomagnesaemia amplify QTc prolongation and torsades risk. Correct before and during therapy.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 3 months, then every 6 months.",
      rationale: "Mild weight gain may occur long-term — less than paroxetine, less than mirtazapine or TCAs.",
    },
    {
      parameter: "Response assessment (PHQ-9 / GAD-7)",
      frequency: "Baseline, week 2, week 4, week 8, then every 3 months.",
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
      action: "Absolute contraindication. Wait 14 days after stopping MAOI before starting escitalopram; wait at least 7 days (FDA recommends 14) after stopping escitalopram before starting an MAOI.",
    },
    {
      drug: "Pimozide",
      severity: "contraindicated",
      mechanism: "Additive QTc prolongation → torsades de pointes.",
      action: "Never combine.",
    },
    {
      drug: "Other QTc-prolonging drugs (class IA/III antiarrhythmics, certain antipsychotics — ziprasidone, haloperidol IV, thioridazine; macrolides — erythromycin, clarithromycin; fluoroquinolones — moxifloxacin; methadone; ondansetron IV)",
      severity: "major",
      mechanism: "Additive QTc prolongation → torsades de pointes. Escitalopram itself dose-dependently prolongs QTc.",
      action: "Avoid combination when possible. If unavoidable, perform baseline and follow-up ECG, keep escitalopram dose ≤10 mg/day, and correct electrolytes.",
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
      mechanism: "Additive bleeding risk (platelet effect + anticoagulation).",
      action: "Monitor INR closely during escitalopram initiation/discontinuation if on warfarin. No specific INR monitoring needed for DOACs but counsel patient about bleeding signs.",
    },
    {
      drug: "St John's Wort",
      severity: "major",
      mechanism: "Herbal SSRI. Additive serotonergic effect.",
      action: "Avoid combination — serotonin syndrome risk.",
    },
    {
      drug: "CYP2C19 inhibitors (omeprazole, esomeprazole, fluconazole, fluvoxamine, ticlopidine, clopidogrel)",
      severity: "moderate",
      mechanism: "CYP2C19 is the primary metabolic pathway for escitalopram. Inhibition raises escitalopram plasma levels ~2-fold, amplifying QTc risk.",
      action: "Reduce escitalopram maximum dose to 10 mg/day when co-prescribed with a strong CYP2C19 inhibitor. Consider switching PPI to pantoprazole (minimal CYP2C19 inhibition).",
    },
    {
      drug: "CYP2C19 substrates (e.g. clopidogrel — prodrug activation; diazepam; some TCAs)",
      severity: "minor",
      mechanism: "Escitalopram is a mild CYP2C19 inhibitor in vitro but clinically significant interactions are uncommon at therapeutic doses — among the lowest of any SSRI.",
      action: "Monitor for therapeutic failure of clopidogrel (antiplatelet effect) if combined chronically. Generally low risk.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Escitalopram is generally considered safe in pregnancy when pharmacotherapy is necessary — second only to sertraline as the SSRI of choice. Overall, the absolute risk of major congenital malformations is small. Some studies have suggested a small absolute increase in cardiac septal defects with first-trimester exposure, but the data are inconsistent and confounded. Third-trimester use is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding) in ~30% of exposed neonates — usually self-limited. Persistent pulmonary hypertension of the newborn (PPHN) has been reported with SSRI exposure after 20 weeks (absolute risk ~1 in 300). Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks.",
    lactation:
      "Escitalopram is excreted into breast milk in small amounts (milk/plasma ratio ~2.7; relative infant dose ~3–5%). Infant serum levels are usually low but detectable. Sertraline is preferred when initiating SSRI therapy in a breastfeeding mother because of its lower milk transfer. For mothers already stabilised on escitalopram prior to delivery, continuation of breastfeeding is generally acceptable if the infant is monitored for irritability, feeding issues, or sedation.",
  },

  renalAdjustment:
    "No dose adjustment required in mild–moderate renal impairment (CrCl 20–60 mL/min). Use cautiously in severe renal impairment (CrCl <20 mL/min) — limited data; consider a 50% starting-dose reduction.",

  hepaticAdjustment:
    "Reduce starting dose in hepatic impairment. FDA recommends 10 mg/day starting dose in patients with mild-to-moderate hepatic impairment (Child-Pugh A/B), with a maximum recommended dose of 10 mg/day. Avoid in severe hepatic impairment (Child-Pugh C) if possible; if unavoidable, use 5 mg/day with very slow titration and ECG monitoring.",

  /* ---- Education ---- */
  patientExplanation:
    "Escitalopram is a medicine that helps the brain keep more of a chemical called serotonin available for longer. Serotonin is one of the chemicals your brain uses to regulate mood, anxiety, sleep, and appetite. By keeping more of it active between nerve cells, escitalopram helps your brain's mood-regulation system work better — but this doesn't happen immediately. Most people feel some side effects in the first week or two (often nausea, sleep changes, or headache) before the mood benefit builds up over 4–6 weeks. Escitalopram is a 'cleaner' version of an older medicine called citalopram — only the active component is kept, which is one of the reasons it has fewer drug interactions than most other antidepressants. It is not addictive in the way that alcohol or benzodiazepines are, but stopping suddenly can cause uncomfortable withdrawal-like symptoms — so always come off it slowly with your doctor's guidance.",

  patientEducationPoints: [
    "Some early changes can happen within 1–2 weeks, but clearer mood benefit often takes 4–6 weeks or longer. Don't stop early just because you don't feel better yet.",
    "Nausea, headache, sleep change, or restlessness may appear before mood benefit. These usually settle within 1–2 weeks. Persistent or severe effects should be discussed with your clinician.",
    "Escitalopram can be taken in the morning or at night depending on whether it makes you feel more alert or more sleepy. Take with food to reduce nausea.",
    "Escitalopram is not considered addictive in the way alcohol, opioids, or benzodiazepines can be, but stopping suddenly can still cause uncomfortable discontinuation symptoms ('brain zaps', dizziness, irritability).",
    "Do not stop suddenly without medical guidance. Your clinician will recommend a gradual taper over several weeks depending on your dose, duration, and symptoms.",
    "Alcohol can worsen sleepiness, mood symptoms, judgment, and medication tolerability. Best avoided or minimised — especially during the first month.",
    "Tell your doctor about all other medications — especially tramadol (pain), triptans (migraine), certain antibiotics (erythromycin, clarithromycin, linezolid), cough syrups containing dextromethorphan, other heart or rhythm medicines, or herbal products like St John's Wort.",
    "Watch for warning signs in the first month: new or worsening agitation, irritability, anxiety, or suicidal thoughts — particularly if you're under 25. Contact your clinician immediately.",
    "Seek emergency help for signs of serotonin syndrome: high fever, confusion, sweating, agitation, tremor, muscle rigidity or twitching, fast heartbeat.",
    "If you experience fainting, palpitations, or a racing/irregular heartbeat, contact your clinician promptly — escitalopram can rarely affect the heart's electrical rhythm (QTc prolongation), particularly at higher doses or in older adults.",
  ],

  clinicalPearls: [
    "Escitalopram is the S-enantiomer of citalopram — isolating the active enantiomer means you get the SERT blockade without the R-enantiomer's contribution to hERG / QTc liability. Theoretically cleaner than racemic citalopram, though both still carry the FDA QTc dose cap.",
    "Lowest CYP interaction profile among SSRIs — preferred in elderly patients and in those on complex regimens (polypharmacy, transplant, HIV, oncology). When the choice is between escitalopram and a more CYP-inhibiting SSRI (fluoxetine, paroxetine, fluvoxamine), escitalopram wins on interaction risk.",
    "QTc prolongation is dose-dependent. FDA caps: 20 mg/day in adults; 10 mg/day in patients >60 years, hepatic impairment, CYP2C19 poor metabolisers, or concurrent CYP2C19 inhibitors (e.g. omeprazole). Baseline ECG in at-risk patients.",
    "One of only two SSRIs FDA-approved for paediatric depression (≥12 years) — the other is fluoxetine (≥8 years). The boxed warning for suicidality <25 still applies; weekly monitoring in the first month is essential.",
    "Some pooled analyses suggest faster early symptomatic improvement (week 1–2) than other SSRIs — possibly due to allosteric SERT binding. Don't oversell this to patients — full antidepressant effect still takes 4–6 weeks.",
    "Less weight gain than paroxetine, less sexual dysfunction than paroxetine, less activating than fluoxetine, less sedating than paroxetine — a balanced profile that many patients tolerate well.",
    "When a patient on a stable SSRI needs a PPI, switch omeprazole / esomeprazole (strong CYP2C19 inhibitors) to pantoprazole (minimal CYP2C19 inhibition) to avoid raising escitalopram levels.",
    "Sexual dysfunction remains the #1 reason patients stop any SSRI — including escitalopram. Always ask directly; add bupropion XL 150 mg/day or switch to bupropion/mirtazapine if problematic.",
    "Discontinuation syndrome is milder than with paroxetine but real. Always taper over ≥4 weeks. Substituting fluoxetine (long half-life) for the last few weeks of a paroxetine or venlafaxine taper can smooth the discontinuation.",
    "In bipolar depression, escitalopram (and any antidepressant) can trigger a manic switch. Always screen for bipolar disorder (MDQ questionnaire) before prescribing — escitalopram's clean profile does not protect against switch.",
  ],

  examPearls: [
    "Escitalopram = S-enantiomer of citalopram. Isolating the active enantiomer theoretically reduces hERG / QTc liability from the R-enantiomer — but the FDA still caps doses because QTc prolongation remains dose-dependent.",
    "Mechanism: SERT blockade → ↑ synaptic 5-HT → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ raphe firing → downstream BDNF and neurogenesis (4–6 weeks). The delay between acute pharmacology and clinical effect is THE favourite SSRI question.",
    "FDA indications: MDD (adults AND adolescents ≥12 yrs — one of only two SSRIs approved for paediatric depression, the other being fluoxetine ≥8 yrs) and GAD (adults). Other SSRIs (sertraline, paroxetine, fluvoxamine, fluoxetine) carry the OCD, panic, PTSD, social anxiety, PMDD approvals — escitalopram does not.",
    "Signature safety concern: dose-dependent QTc prolongation → torsades de pointes. FDA maximum doses — 20 mg/day in adults; 10 mg/day in patients >60 years, hepatic impairment, CYP2C19 poor metabolisers, or concurrent CYP2C19 inhibitors (e.g. omeprazole).",
    "Contraindications: MAOIs (14-day washout), pimozide (QTc), congenital long-QT syndrome, concurrent QTc-prolonging drugs (class IA/III antiarrhythmics, certain antipsychotics, macrolides, fluoroquinolones, methadone).",
    "Black-box warning: suicidality in <25. Mandatory to counsel and document informed consent. Applies even though escitalopram is approved for adolescent (≥12 yrs) depression.",
    "Lowest CYP interaction profile among SSRIs. Primary metabolism via CYP2C19; minor CYP3A4 and CYP2D6. Minimal inhibition of CYP1A2, 2C9, 2C19, 2D6, 3A4 — preferred in elderly and patients on complex regimens.",
    "Serotonin syndrome triad: mental status change + autonomic instability + neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset within 24h. Treat with cyproheptadine.",
    "NMS vs Serotonin Syndrome: NMS = rigid ('lead pipe'), bradyreflexic, normal pupils. Serotonin syndrome = clonus, hyperreflexic, mydriasis, GI symptoms (diarrhoea).",
    "SIADH from SSRIs: highest risk in elderly females, first 2 weeks. Hyponatraemia + concentrated urine + euvolaemia.",
    "Discontinuation syndrome: 'FINISH' — Flu-like symptoms, Insomnia, Nausea, Imbalance, Sensory disturbances (brain zaps), Hyperarousal. Severity ranking: paroxetine > escitalopram ≈ sertraline > fluoxetine (longest half-life, self-tapers).",
    "Half-life: escitalopram 27–32 hours; citalopram ~35 hours; sertraline 26 hours; paroxetine 21 hours (shortest); fluoxetine + norfluoxetine 1–4 days (longest).",
    "Faster onset claim: pooled analyses suggest escitalopram may produce earlier symptomatic improvement (week 1–2) than other SSRIs — possibly due to allosteric SERT binding. Caveat: full antidepressant effect still requires 4–6 weeks.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "ESC = Escitalopram — the 'ESCape' from interactions",
      trick: "ESCitalopram = S-enantiomer, Cleanest interactions, QTc watch",
      remembers: "Escitalopram is the S-enantiomer of citalopram with the lowest CYP interaction profile among SSRIs — but QTc must be watched at higher doses.",
    },
    {
      title: "QTc dose caps — '20/10 Rule'",
      trick: "20 mg/day max in healthy adults; 10 mg/day in the 'four Es': Elderly (>60), Enzyme (CYP2C19) PMs, Inhibitors of CYP2C19, hEpatic impairment",
      remembers: "FDA maximum escitalopram doses after the 2011/2012 QTc Drug Safety Communication.",
    },
    {
      title: "Paediatric depression — 'F-E' (only two SSRIs)",
      trick: "Fluoxetine (≥8 yrs) + Escitalopram (≥12 yrs) = the only two SSRIs FDA-approved for paediatric depression",
      remembers: "Don't prescribe other SSRIs for paediatric depression — only fluoxetine and escitalopram have paediatric MDD labelling.",
    },
    {
      title: "FINISH — SSRI Discontinuation Syndrome",
      trick: "Flu-like · Insomnia · Nausea · Imbalance · Sensory disturbances (brain zaps) · Hyperarousal",
      remembers: "The 6 classic SSRI withdrawal symptoms. Severity: paroxetine (worst) > escitalopram ≈ sertraline > fluoxetine (mildest, self-tapers).",
    },
    {
      title: "Serotonin Syndrome Triad",
      trick: "Mental · Autonomic · Neuromuscular — think 'MAN'",
      remembers: "Altered mental state + Autonomic instability + Neuromuscular excitation (clonus, hyperreflexia). Onset within 24h.",
    },
    {
      title: "PPI swap to keep escitalopram levels safe",
      trick: "Omeprazole = 'O M G' (raises escitalopram via CYP2C19) → switch to Pantoprazole = 'Pleasant' (minimal CYP2C19 inhibition)",
      remembers: "When escitalopram and a PPI must be co-prescribed, pantoprazole is the safer choice — avoids the 10 mg/day dose cap triggered by CYP2C19 inhibition.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: SSRI — the S-enantiomer of citalopram. Most selective SSRI at SERT; minimal off-target receptor effects.",
    "Mechanism: Acute SERT blockade (hours) → 5-HT1A autoreceptor desensitisation (1–2 weeks) → ↑ BDNF + neurogenesis (4–6 weeks). The delay explains why patients feel worse before better.",
    "FDA indications (2): MDD (adults & ≥12 yrs adolescents) and GAD (adults). One of only two SSRIs approved for paediatric depression (with fluoxetine).",
    "Onset: 4–6 weeks for depression; 8–12 weeks for anxiety. Some pooled analyses suggest earlier symptomatic improvement (week 1–2) than other SSRIs — likely due to allosteric SERT binding.",
    "Common side effects: nausea, sexual dysfunction (less than paroxetine), headache, insomnia or somnolence, sweating, dry mouth, diarrhoea, fatigue.",
    "Signature serious effect: dose-dependent QTc prolongation → torsades de pointes. FDA caps — 20 mg/day in adults; 10 mg/day in patients >60 yrs, hepatic impairment, CYP2C19 poor metabolisers, or concurrent CYP2C19 inhibitors.",
    "Other serious effects: serotonin syndrome, SIADH (elderly females), suicidality <25 (black box), bleeding (platelet), activation of mania, discontinuation syndrome.",
    "Contraindications: MAOIs (14-day washout), pimozide, congenital long-QT, concurrent QTc-prolonging drugs, known hypersensitivity.",
    "Interactions: MAOIs (fatal), QTc-prolonging drugs, tramadol/triptans/St John's Wort (serotonin syndrome), NSAIDs/warfarin (bleeding), CYP2C19 inhibitors (raise escitalopram levels — cap 10 mg/day).",
    "Pregnancy/lactation: generally safe; second to sertraline as SSRI of choice. Sertraline preferred in breastfeeding (lower milk transfer). Untreated depression is worse than the drug.",
    "Half-life 27–32 h. Metabolised primarily by CYP2C19, minor CYP3A4 and CYP2D6. Lowest CYP interaction profile among SSRIs — preferred in elderly and polypharmacy patients.",
    "Monitoring: mood/suicidality (weekly × 1 month), ECG in at-risk patients, serum Na (elderly), electrolytes, PHQ-9 at baseline/2/4/8 weeks.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Late-life depression in a 72-year-old man on polypharmacy",
      presentation:
        "A 72-year-old man with ischaemic heart disease, atrial fibrillation, type 2 diabetes, and chronic kidney disease stage 3 presents with 3 months of low mood, anhedonia, and weight loss. He is on 11 medications including warfarin, amiodarone, metformin, atorvastatin, and omeprazole.",
      history:
        "Mr R, a 72-year-old retired schoolteacher, is brought by his wife with 3 months of progressive low mood, loss of interest in his grandchildren and gardening, early-morning awakening, and 5 kg unintentional weight loss. He denies active suicidal ideation but says 'I'd be better off not waking up'. Medical history: ischaemic heart disease (prior NSTEMI 2019, current EF 45%), paroxysmal atrial fibrillation on warfarin and amiodarone, type 2 diabetes (HbA1c 7.4%), hypertension, CKD stage 3 (eGFR 42), gastro-oesophageal reflux on omeprazole, BPH on tamsulosin. Current medications (11 in total): warfarin, amiodarone, metformin, gliclazide, atorvastatin, ramipril, furosemide, tamsulosin, omeprazole, aspirin (stopped when warfarin started), paracetamol PRN. No prior psychiatric history. Father had late-life depression. Patient drinks 4 units/week, does not smoke. Lives with wife; independently mobile.",
      examination:
        "Alert, oriented, cooperative. Speech slow but normal in content. Mood '3/10', affect congruent. No hallucinations, no delusions, no thought disorder. MoCA 26/30 (slow but accurate). PHQ-9 score 18 (moderately severe). GAD-7 score 8 (mild). BP 138/82, HR 64 (controlled AF). Weight 68 kg, BMI 23 (down from 24.6 three months ago). ECG: AF, rate 64, QTc 440 ms (within normal limits but at the upper end for his age). Na 138, K 4.0, Mg 0.85, INR 2.4 (in range).",
      diagnosis:
        "Major Depressive Disorder, single episode, moderate-severe, late-life onset (ICD-10 F32.2). Differential: vascular depression (given ischaemic heart disease and white-matter changes likely on imaging); depression secondary to a medical condition or polypharmacy (less likely — symptoms are classic MDD phenotype); bipolar depression (screen negative). Cognitive testing slightly slowed but not demented — re-test after mood treatment.",
      rationale:
        "An SSRI is indicated for moderate-severe late-life depression. Choosing the right SSRI in this patient is the crux:\n• Drug interactions are critical — he is on amiodarone (CYP2C9, 2D6, 3A4 substrate/inhibitor), warfarin (CYP2C9 substrate), omeprazole (strong CYP2C19 inhibitor), and atorvastatin (CYP3A4 substrate). Fluoxetine and paroxetine (strong CYP2D6 inhibitors) and fluvoxamine (strong CYP1A2, 2C19 inhibitor) are unsafe in this regimen. Sertraline (mild CYP2D6) and citalopram/escitalopram (low interaction) are reasonable — but citalopram and escitalopram carry the QTc precaution and he is on amiodarone (QTc-prolonging).\n• However, his baseline QTc is only 440 ms, electrolytes are normal, and at the FDA-capped 10 mg/day dose (mandatory in patients >60 yrs and on omeprazole), the QTc increment from escitalopram is small. Amiodarone's QTc effect is well-characterised and his QTc is monitored.\n• Escitalopram at 10 mg/day was chosen over sertraline because (1) lowest interaction profile minimises disturbance of warfarin INR and atorvastatin levels, (2) once-daily dosing, (3) neutral sedation profile suitable for an elderly patient at risk of falls, (4) less activating than fluoxetine (better for his sleep disturbance). Sertraline was the alternative but has mild CYP2D6 inhibition which would be amplified at higher doses.\n• Plan includes baseline + follow-up ECGs, weekly INR checks for the first month, and close monitoring of amiodarone levels.",
      management:
        "Started escitalopram 5 mg every morning with food for 7 days, then increased to 10 mg/day (the FDA-capped dose in patients >60 yrs AND on omeprazole). Baseline ECG (QTc 440 ms); repeat ECG at 2 weeks and after dose increase. Daily INR for the first week, then weekly × 4 weeks, then back to his usual schedule. Electrolytes checked at baseline (normal) and at 2 weeks. Patient given PHQ-9 self-rating schedule and a safety plan with crisis contacts. Counselled: (1) expect side effects before benefit; (2) do not stop abruptly; (3) avoid alcohol; (4) watch for agitation or new suicidal thoughts in the first month; (5) full effect takes 4–6 weeks; (6) report any fainting, palpitations, or new chest pain immediately. Concurrent referral for problem-solving therapy (NICE-recommended first-line psychosocial intervention for mild-moderate depression; suitable adjunct here).",
      outcome:
        "Week 2: mild nausea (tolerable, taken with food), no suicidality, sleep unchanged. ECG QTc 446 ms (within acceptable increment of <30 ms from baseline). INR stable at 2.3–2.6. Week 4: sleep improved (sleeping through the night), appetite returning, PHQ-9 14 (22% reduction — early response). Week 8: mood 5/10, PHQ-9 8 (56% reduction — treatment response). Returned to gardening. Week 12: PHQ-9 5 (near-remission). ECG QTc 448 ms (stable, acceptable). INR remains in range. Plan: continue escitalopram 10 mg/day for 12 more months (late-life depression has high recurrence; consider indefinite maintenance), then reassess. Tolerated the full 12-month course without bleeding events, INR instability, or significant QTc change.",
      teachingPoints: [
        "In elderly patients on polypharmacy, escitalopram's low CYP interaction profile often makes it the SSRI of choice — but the QTc precaution and the 10 mg/day dose cap (in >60 yrs, CYP2C19 PMs, hepatic impairment, or CYP2C19 inhibitor coadministration) must be respected.",
        "Omeprazole is a strong CYP2C19 inhibitor and triggers the 10 mg/day dose cap in escitalopram patients — switch to pantoprazole if a higher escitalopram dose is needed.",
        "Co-prescription with QTc-prolonging drugs (amiodarone, class IA/III antiarrhythmics, certain antipsychotics, macrolides, fluoroquinolones, methadone) is a relative contraindication — perform baseline and follow-up ECGs and aim for the lowest effective escitalopram dose.",
        "Baseline INR and weekly INR checks during SSRI initiation in a warfarin patient — escitalopram has the lowest interaction risk of any SSRI but platelet serotonin depletion still adds a bleeding risk independent of INR.",
        "Late-life depression has a high recurrence rate — consider maintenance therapy beyond 12 months after the first episode, especially with vascular risk factors.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Escitalopram vs Sertraline vs Fluoxetine vs Paroxetine",
      primaryDrug: "Escitalopram",
      rows: [
        {
          attribute: "Half-life",
          primaryValue: "27–32 hours",
          comparisons: [
            { drug: "Sertraline", value: "26 hours" },
            { drug: "Fluoxetine", value: "1–4 days (with norfluoxetine)" },
            { drug: "Paroxetine", value: "21 hours (shortest)" },
          ],
        },
        {
          attribute: "Onset of action",
          primaryValue: "4–6 weeks (some studies suggest earlier week 1–2 improvement)",
          comparisons: [
            { drug: "Sertraline", value: "4–6 weeks" },
            { drug: "Fluoxetine", value: "4–6 weeks" },
            { drug: "Paroxetine", value: "4–6 weeks" },
          ],
        },
        {
          attribute: "Sexual dysfunction",
          primaryValue: "Common (~25–35%) — less than paroxetine",
          comparisons: [
            { drug: "Sertraline", value: "Common (30–40%)" },
            { drug: "Fluoxetine", value: "Common (30–40%)" },
            { drug: "Paroxetine", value: "Highest (40–50%)" },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Mild",
          comparisons: [
            { drug: "Sertraline", value: "Mild" },
            { drug: "Fluoxetine", value: "Weight neutral / early loss" },
            { drug: "Paroxetine", value: "Most weight gain" },
          ],
        },
        {
          attribute: "Sedation / activation",
          primaryValue: "Neutral — less activating than fluoxetine, less sedating than paroxetine",
          comparisons: [
            { drug: "Sertraline", value: "Mildly activating" },
            { drug: "Fluoxetine", value: "Most activating" },
            { drug: "Paroxetine", value: "Most sedating" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "Mild–moderate",
          comparisons: [
            { drug: "Sertraline", value: "Mild–moderate" },
            { drug: "Fluoxetine", value: "Mildest (self-tapers, long half-life)" },
            { drug: "Paroxetine", value: "Worst (shortest half-life)" },
          ],
        },
        {
          attribute: "Pregnancy / lactation",
          primaryValue: "Generally safe; second to sertraline as SSRI of choice. Detectable in breast milk — sertraline preferred when initiating in breastfeeding mothers.",
          comparisons: [
            { drug: "Sertraline", value: "SSRI of choice (lowest milk transfer)" },
            { drug: "Fluoxetine", value: "Safe (longest experience); higher milk transfer" },
            { drug: "Paroxetine", value: "Avoid in 1st trimester (cardiac defects); preferred if SSRI needed in 3rd trimester due to lowest PPHN risk" },
          ],
        },
        {
          attribute: "CYP inhibition / interaction profile",
          primaryValue: "Lowest CYP interaction profile among SSRIs (primary CYP2C19; minimal 2D6/3A4 inhibition)",
          comparisons: [
            { drug: "Sertraline", value: "Mild CYP2D6 (less than fluoxetine/paroxetine)" },
            { drug: "Fluoxetine", value: "Strong CYP2D6; moderate 2C9/2C19" },
            { drug: "Paroxetine", value: "Strong CYP2D6" },
          ],
        },
        {
          attribute: "QTc prolongation",
          primaryValue: "Yes — dose-dependent; FDA cap 20 mg/day (10 mg/day in >60 yrs, CYP2C19 PMs, hepatic impairment, CYP2C19 inhibitors)",
          comparisons: [
            { drug: "Sertraline", value: "Minimal at therapeutic doses" },
            { drug: "Fluoxetine", value: "Minimal at therapeutic doses" },
            { drug: "Paroxetine", value: "Minimal at therapeutic doses" },
          ],
        },
        {
          attribute: "FDA indications",
          primaryValue: "MDD (adults & ≥12 yrs), GAD (adults)",
          comparisons: [
            { drug: "Sertraline", value: "MDD, OCD, Panic, PTSD, Social Anxiety, PMDD (6 indications)" },
            { drug: "Fluoxetine", value: "MDD (≥8 yrs), OCD (≥8 yrs), Bulimia, Panic, PMDD (Sarafem)" },
            { drug: "Paroxetine", value: "MDD, OCD, Panic, Social Anxiety, GAD, PTSD, PMDD (7 indications)" },
          ],
        },
        {
          attribute: "Unique differentiator",
          primaryValue: "S-enantiomer of citalopram; lowest CYP interactions; QTc dose cap; adolescent (≥12 yrs) depression approval",
          comparisons: [
            { drug: "Sertraline", value: "Pregnancy/lactation SSRI of choice; only SSRI approved for PTSD; σ1 agonism" },
            { drug: "Fluoxetine", value: "Longest half-life (mildest discontinuation); only SSRI approved for paediatric depression ≥8 yrs; bulimia approval" },
            { drug: "Paroxetine", value: "Most sedating; best-studied for hot flushes in breast-cancer survivors; 7 FDA indications" },
          ],
        },
      ],
      takeaway:
        "Escitalopram = the SSRI of choice when drug interactions are the deciding factor (elderly, polypharmacy, transplant, HIV, oncology) — at the cost of a dose-dependent QTc precaution and a 20/10 mg/day FDA cap. Sertraline = best all-rounder and the SSRI of choice in pregnancy/lactation. Fluoxetine = good for lethargic depression, when long half-life helps adherence, and in children ≥8 yrs. Paroxetine = generally last-line (worst discontinuation, most weight gain, pregnancy caution, strongest CYP2D6) but useful for severe hot flushes in breast-cancer survivors.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute SERT blockade",
      description:
        "Escitalopram blocks the serotonin transporter within hours. Synaptic serotonin rises. Side effects (nausea, headache) often appear here. Patients frequently feel worse before they feel better.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "5-HT1A autoreceptor desensitisation begins — possible early symptomatic improvement",
      description:
        "Somatodendritic 5-HT1A autoreceptors in the raphe nuclei begin to desensitise. Serotonin release toward the prefrontal cortex gradually increases. Pooled analyses suggest escitalopram may produce earlier symptomatic improvement (week 1–2) than other SSRIs — possibly due to allosteric SERT binding — but full antidepressant effect is still weeks away.",
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
      title: "Full therapeutic effect (GAD, anxiety)",
      description:
        "Generalised anxiety disorder and other anxiety indications often take 8–12 weeks for full response — slower than depression. Counsel patients accordingly.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months 3–6",
      title: "Maintenance & relapse prevention",
      description:
        "Continued neuroplastic changes. Continue treatment for 6–12 months after the first depressive episode, longer (often indefinite) for recurrent episodes, GAD, or chronic anxiety disorders. Late-life depression has high recurrence — consider maintenance therapy beyond 12 months.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Tapered withdrawal",
      description:
        "Sudden cessation causes discontinuation syndrome (dizziness, 'brain zaps', nausea, irritability). Taper over ≥4 weeks. Among SSRIs, withdrawal severity: paroxetine (worst) > escitalopram ≈ sertraline > fluoxetine (mildest, self-tapers). Fluoxetine can be substituted at the end of a taper to smooth the discontinuation.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does escitalopram take to work?",
      answer:
        "Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, and pooled analyses suggest escitalopram may produce earlier symptomatic improvement than some other SSRIs. However, clearer mood benefit typically takes 4–6 weeks for depression and 8–12 weeks for generalised anxiety disorder. Don't stop early just because you don't feel better yet.",
    },
    {
      question: "Why is the maximum dose only 20 mg/day (or 10 mg/day for some people)?",
      answer:
        "Escitalopram can dose-dependently prolong the QTc interval on the ECG, which in rare cases can lead to a serious heart rhythm disturbance (torsades de pointes). The FDA therefore caps the dose at 20 mg/day in most adults, and at 10 mg/day in patients over 60, those with liver impairment, those who are slow metabolisers via the CYP2C19 enzyme, or those taking certain other medications (such as omeprazole). Your doctor will check an ECG if you have risk factors.",
    },
    {
      question: "Is escitalopram different from citalopram?",
      answer:
        "Yes. Citalopram is a racemic mixture — it contains two mirror-image molecules (R and S). Only the S-enantiomer is active at the serotonin transporter. Escitalopram is the pure S-enantiomer. Isolating the active enantiomer means you get the therapeutic effect without the R-enantiomer's contribution to hERG channel blockade and QTc prolongation — though both drugs still carry the FDA QTc dose cap.",
    },
    {
      question: "Is escitalopram addictive?",
      answer:
        "Escitalopram is not addictive in the way that alcohol, opioids, or benzodiazepines can be — it does not cause cravings, escalating use, or intoxication. However, stopping suddenly after several weeks of use can cause uncomfortable discontinuation symptoms (dizziness, 'brain zaps', nausea, irritability), so always come off it slowly with your doctor's guidance.",
    },
    {
      question: "Can I stop taking it once I feel better?",
      answer:
        "Not usually. For a first depressive episode, treatment should continue for 6–12 months AFTER you feel better — stopping earlier significantly increases relapse risk. For recurrent episodes, late-life depression, or chronic anxiety disorders, longer-term (sometimes indefinite) treatment may be recommended. Always discuss timing with your clinician before stopping.",
    },
    {
      question: "Will it affect my sex life?",
      answer:
        "Possibly. Sexual side effects — decreased libido, delayed orgasm, erectile dysfunction — affect 25–35% of people on escitalopram and are a common reason people stop SSRIs. The risk is lower than with paroxetine but still substantial. These are usually reversible on discontinuation, but in a small subset of patients they may persist (PSSD). If this bothers you, talk to your clinician — adding bupropion or switching to a different medication often helps.",
    },
    {
      question: "What if I'm pregnant or breastfeeding?",
      answer:
        "Escitalopram is generally considered safe in pregnancy when pharmacotherapy is necessary — second only to sertraline as the SSRI of choice. If you are breastfeeding, sertraline is usually preferred when starting a new SSRI because less passes into breast milk. If you are already stable on escitalopram, continuation of breastfeeding is usually acceptable with monitoring of the infant. Untreated maternal depression also carries significant risks to mother and baby. The decision requires balancing benefits and risks with your obstetrician and psychiatrist — do not stop escitalopram suddenly if you become pregnant.",
    },
    {
      question: "Can I drink alcohol while taking escitalopram?",
      answer:
        "Alcohol can worsen sleepiness, mood symptoms, judgment, and medication tolerability. While not strictly contraindicated, it's best minimised or avoided — particularly during the first month while your body is adapting to the medication.",
    },
  ],

  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "FDA Drug Safety Communication: Abnormal heart rhythms associated with high doses of citalopram (Celexa) — and dose recommendations",
        section: "FDA Postmarket Drug Safety Communication, 2011 (updated 2012)",
        url: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fda-drug-safety-communication-abnormal-heart-rhythms-associated-high-doses-citalopram-celexa",
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
        section: "The definitive SSRI head-to-head meta-analysis — escitalopram among the most effective and best-tolerated",
      },
      {
        source: "Wade A, Michael Lemming O, Bang Hedegaard K. Escitalopram 10 mg/day is effective and well tolerated in a placebo-controlled study in depression in primary care. Int Clin Psychopharmacol 2002;17:95-102.",
        section: "Pivotal escitalopram dose-response trial",
      },
    ],
    reviews: [
      {
        source: "FDA Prescribing Information — LEXAPRO (escitalopram oxalate)",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/021323s046lbl.pdf",
      },
      {
        source: "MIMS India — Escitalopram",
        section: "India-specific prescribing information",
      },
      {
        source: " Vieweg WV, Wood MA, Fernandez A, et al. Proarrhythmic risk with antipsychotic and antidepressant drugs: implications in the elderly. Drugs Aging 2009;26:997-1012.",
        section: "Review of QTc prolongation with antidepressants including citalopram/escitalopram",
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
      name: "Citalopram",
      drugClass: "SSRI",
      relationship: "Racemic parent of escitalopram. Contains both R- and S-enantiomers; only the S is active at SERT. Shares the QTc dose-dependent precaution — FDA cap 40 mg/day (20 mg/day in elderly/PMs). Escitalopram delivers the active enantiomer without the R-enantiomer load.",
    },
    {
      name: "Sertraline",
      drugClass: "SSRI",
      relationship: "Same class. SSRI of choice in pregnancy/lactation (lowest milk transfer). Mild CYP2D6 inhibitor. Only SSRI approved for PTSD. σ1 receptor agonism may contribute to anxiolytic effect.",
      slug: "sertraline",
    },
    {
      name: "Fluoxetine",
      drugClass: "SSRI",
      relationship: "Same class. Longest half-life (1–4 days with active metabolite) → mildest discontinuation syndrome. Only SSRI approved for paediatric depression (≥8 yrs) and bulimia. More activating — better for lethargic depression.",
      slug: "fluoxetine",
    },
    {
      name: "Paroxetine",
      drugClass: "SSRI",
      relationship: "Same class. Shortest half-life (21h) → worst discontinuation syndrome. Most sedating. Strongest CYP2D6 inhibition. Most anticholinergic. Highest weight gain. Best-studied for hot flushes in breast-cancer survivors.",
    },
    {
      name: "Fluvoxamine",
      drugClass: "SSRI",
      relationship: "Same class. Preferred for paediatric OCD. Strong CYP1A2 inhibition — interacts with caffeine, theophylline, clozapine. σ1 receptor agonism like sertraline.",
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
    { name: "Generalised Anxiety Disorder", relationship: "primary" },
    { name: "Panic Disorder", relationship: "off-label" },
    { name: "Social Anxiety Disorder", relationship: "off-label" },
    { name: "Obsessive-Compulsive Disorder", relationship: "off-label" },
    { name: "Post-Traumatic Stress Disorder", relationship: "off-label" },
    { name: "Premenstrual Dysphoric Disorder", relationship: "off-label" },
    { name: "Adolescent Depression (≥12 yrs)", relationship: "primary" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram", note: "The drug you're reading about" },
    { label: "SSRI", type: "class", href: "#mechanism", note: "Selective Serotonin Reuptake Inhibitor" },
    { label: "Citalopram (racemic parent)", type: "drug", href: "#related-drugs", note: "Escitalopram is the S-enantiomer of citalopram" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "The neurotransmitter being modulated" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Molecular target — high selectivity" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood regulation" },
    { label: "Amygdala", type: "brain-region", href: "#brain-regions", note: "Anxiety & fear processing" },
    { label: "Hippocampus", type: "brain-region", href: "#brain-regions", note: "Memory & neurogenesis" },
    { label: "Depression (adults & ≥12 yrs adolescents)", type: "condition", href: "#clinical-uses", note: "FDA-approved indication — one of only two SSRIs for paediatric depression" },
    { label: "Generalised Anxiety Disorder", type: "condition", href: "#clinical-uses", note: "FDA-approved indication" },
    { label: "QTc Prolongation / Torsades de Pointes", type: "side-effect", href: "#side-effects", note: "Signature safety concern — dose-dependent, FDA-capped" },
    { label: "Sexual Dysfunction", type: "side-effect", href: "#side-effects", note: "Common reason for discontinuation — less than paroxetine" },
    { label: "Serotonin Syndrome", type: "side-effect", href: "#side-effects", note: "Life-threatening — know the signs" },
    { label: "Patient Guide — Starting an SSRI (low-interaction choice for elderly / polypharmacy)", type: "patient-guide", href: "#patient-education", note: "What to expect in the first 6 weeks" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A medicine that helps your brain keep more of a mood-regulating chemical (serotonin) available for longer — with one of the cleanest drug-interaction profiles of any antidepressant.",
    summary:
      "Escitalopram is a widely prescribed antidepressant belonging to a class called SSRIs. It is a 'cleaner' version of an older medicine called citalopram — only the active component is kept. It doesn't make you happy — it helps your brain's natural mood-regulation system work better. Most people feel some side effects in the first week or two before the mood benefit builds up over 4–6 weeks. Because it has fewer interactions with other medicines than most other antidepressants, it's often the choice for older adults or people taking several other medications.",
    mechanism:
      "Your brain uses a chemical called serotonin to regulate mood, anxiety, sleep, and appetite. Normally, after serotonin is released between nerve cells, it gets quickly taken back up (recycled). Escitalopram blocks this recycling, so more serotonin stays available between the nerve cells for longer. Over 4–6 weeks, this helps your brain's mood-regulation system work better — but it doesn't happen immediately.",
    sideEffects:
      "Most people get some side effects in the first 1–2 weeks — usually nausea, headache, sleep changes, or feeling a bit wired. These usually settle as your body adapts. Sexual side effects (lower interest or difficulty reaching orgasm) are common and can persist — talk to your doctor if this bothers you, as there are solutions. Two things to know that are a bit specific to escitalopram: (1) at higher doses it can rarely affect the heart's electrical rhythm (called QTc prolongation) — your doctor may check an ECG and keep your dose at or below 20 mg/day (10 mg/day if you're over 60 or take certain other medicines); (2) serious side effects are rare but you should know the signs of serotonin syndrome (high fever with confusion and shaking — emergency) and worsening mood or new suicidal thoughts in the first month (needs immediate medical review).",
    monitoring:
      "You'll have check-ins with your doctor at 2 weeks, 4 weeks, and 6–8 weeks to see how you're responding. They'll ask about your mood, side effects, and any new thoughts. You may be asked to fill in a short questionnaire (PHQ-9 or GAD-7) so your progress can be tracked. If you're over 60 or have heart risk factors, your doctor may check an ECG and your blood sodium and potassium at baseline and after dose changes.",
    contraindications:
      "Don't take escitalopram if you've taken a MAOI antidepressant in the last 14 days (dangerous combination), if you have a congenital heart-rhythm condition called long-QT syndrome, or if you take pimozide or certain other medicines that affect the heart's electrical rhythm. Tell your doctor about all other medicines you take — especially tramadol (pain), triptans (migraine), certain antibiotics like erythromycin or linezolid, heart rhythm medicines, cough syrups with dextromethorphan, or herbal products like St John's Wort.",
    interactions:
      "The main thing to know: escitalopram has fewer interactions with other medicines than most other antidepressants — that's one of its main advantages. Still, tell your pharmacist about everything you take, including over-the-counter products. Avoid alcohol or keep it to a minimum. Some medicines (like omeprazole, used for reflux) can raise escitalopram levels — your doctor may switch you to a different reflux medicine or lower your escitalopram dose. The most dangerous combinations are with other medicines that affect serotonin — your doctor or pharmacist will check for these automatically.",
  },

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Lexapro label, FDA Drug Safety Communication on citalopram/escitalopram QTc (2011/2012), NICE CG91, APA Practice Guideline"],
};
