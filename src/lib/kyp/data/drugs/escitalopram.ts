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

  /* ---- India-first extensions ---- */

  /* Indian clinical practice */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Nexito", manufacturer: "Lupin", strengths: "5mg, 10mg, 20mg", note: "Among the most commonly prescribed escitalopram brands in India" },
      { name: "Stalopam", manufacturer: "Sun Pharma", strengths: "5mg, 10mg, 20mg" },
      { name: "Cipralex", manufacturer: "Lundbeck", strengths: "5mg, 10mg, 20mg", note: "Originator brand — more expensive" },
      { name: "Feliz-S", manufacturer: "Intas", strengths: "5mg, 10mg, 20mg" },
      { name: "Szetalo", manufacturer: "Sun Pharma", strengths: "5mg, 10mg, 20mg" },
    ],
    typicalDoses:
      "Depression (adults): start 10mg OD, can increase to 20mg OD after 1 week. Adolescents ≥12 years: start 10mg OD (max 20mg). GAD: 10mg OD (titrate to 20mg). Elderly (>60 years) and CYP2C19 poor metabolisers: max 10mg OD. In Indian government hospitals, starting dose is often 5–10mg OD to minimise early side effects. Maximum: 20mg/day in adults; 10mg/day in elderly and CYP2C19 poor metabolisers.",
    prescribingScenarios: [
      "Preferred SSRI in elderly patients (>60 years) due to lowest CYP interaction profile and favourable tolerability.",
      "First-line SSRI for patients on complex polypharmacy regimens (cardiac, GI, neurological medications) due to minimal CYP interactions.",
      "Used for adolescents ≥12 years with major depression — one of only two SSRIs FDA-approved for paediatric depression (along with fluoxetine for ≥8 years).",
      "Commonly prescribed in Indian private practice for depression with comorbid anxiety — broad-spectrum SSRI with clean profile.",
      "Preferred when QTc monitoring is feasible and the lowest-interaction SSRI is desired (e.g., cardiac patients on amiodarone, azole antifungals, macrolides).",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
      note: "Widely available across India. Escitalopram is included in many state government essential medicines lists and is dispensed through District Mental Health Programme (DMHP) centres. Generic escitalopram is commonly stocked in Jan Aushadhi Kendras.",
    },
    costCategory: "low",
    costNote: "Generic escitalopram is inexpensive in India (approximately ₹3–6 per 10mg tablet). Branded versions (Nexito, Stalopam, Feliz-S) cost ₹4–10 per tablet. The originator brand Cipralex (Lundbeck) is more expensive. Jan Aushadhi generic escitalopram is the most affordable option.",
    monitoring:
      "In Indian government hospitals, monitoring is primarily clinical (symptom-based) due to resource constraints. PHQ-9 is used in tertiary centres and DMHP clinics. Serum sodium monitoring in elderly is recommended but practice varies. ECG for QTc is recommended at baseline and after dose escalation in patients >60 years, those with cardiac risk factors, or those on other QTc-prolonging drugs — but is not uniformly done in resource-limited settings. Follow-up schedule: 2 weeks (tolerability), 4 weeks (early response), 6 weeks (dose escalation decision), 12 weeks (full response assessment). In private practice, monitoring aligns more closely with international guidelines including baseline ECG in elderly.",
    patientCounselling: [
      "Take once daily, morning or evening, with or without food. Most people prefer morning, but if it makes you sleepy take at night.",
      "It may take 4–6 weeks to feel the full benefit — don't stop early just because you don't feel better yet.",
      "Do NOT stop suddenly — your doctor will help you reduce the dose gradually over several weeks.",
      "Generic versions (Nexito, Stalopam, Feliz-S, Szetalo) are equally effective — you don't need to pay more for the originator brand Cipralex if cost is a concern. Jan Aushadhi generic escitalopram is a good affordable option.",
      "Avoid alcohol — it can worsen your mood symptoms and increase drowsiness.",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month, contact your doctor immediately or call Tele-MANAS at 14416.",
      "Common side effects in the first 1–2 weeks (nausea, headache, sleep changes) usually settle on their own. If they persist or are severe, tell your doctor.",
      "Sexual side effects (reduced interest, difficulty reaching orgasm) are common and can be embarrassing to discuss — but your doctor can help. Don't stop the medicine without discussing alternatives.",
      "If you're over 60 or have heart problems, your doctor will keep your dose at 10mg/day or below and may check an ECG — this is because high doses can rarely affect heart rhythm.",
      "Tell your doctor about all medicines you take — especially omeprazole (for reflux), tramadol (pain), and antibiotics like erythromycin. Even though escitalopram has fewer interactions than most antidepressants, some combinations still matter.",
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
        "What is the mechanism of action of escitalopram? (S-enantiomer of citalopram; high-affinity, high-selectivity SERT blockade → ↑ synaptic 5-HT → 5-HT1A autoreceptor desensitisation over 1–2 weeks → ↑ serotonergic throughput → downstream BDNF/neurogenesis over 4–6 weeks)",
        "Why is escitalopram called the 'most selective' SSRI? (Highest SERT binding affinity relative to NET, DAT, and other receptors — lowest off-target binding → cleanest side-effect profile among SSRIs.)",
        "What is the QTc precaution with escitalopram? (Dose-dependent QTc prolongation. FDA maximum: 20mg/day adults, 10mg/day in elderly >60 and CYP2C19 poor metabolisers. Caution with other QTc-prolonging drugs.)",
        "Why is the maximum dose lower in elderly? (Reduced clearance, higher baseline QTc, polypharmacy with other QTc-prolonging drugs. FDA caps at 10mg/day for >60 years.)",
        "What is the relationship between citalopram and escitalopram? (Escitalopram is the S-enantiomer of racemic citalopram. The R-enantiomer in citalopram actually antagonises the active S-enantiomer's effect — so escitalopram is more potent at half the mg dose.)",
        "What is the black box warning for escitalopram? (Increased suicidality in patients <25 years — monitor weekly in the first month. Same as all SSRIs.)",
      ],
      practical: [
        "Counsel an elderly patient starting escitalopram for depression — address onset delay, side effects, the 10mg/day dose cap, and ECG monitoring.",
        "Write a prescription for escitalopram for a 65-year-old with first-episode depression (dose: 5mg OD for 5 days, then 10mg OD, morning).",
        "Identify the contraindications of escitalopram from a clinical scenario (e.g., patient with congenital long-QT, or on pimozide).",
        "Explain the monitoring schedule for an elderly patient on escitalopram (2/4/6/12 weeks, PHQ-9, sodium, ECG at baseline and after dose escalation).",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics, adverse effects, and therapeutic uses of SSRIs with special reference to escitalopram. Discuss the rationale for choosing escitalopram in elderly patients, in polypharmacy, and in patients with cardiac comorbidities.",
        "A 68-year-old man with hypertension, type 2 diabetes, and recent MI presents with moderate depression. He is on aspirin, atorvastatin, metoprolol, and omeprazole. Discuss the pharmacological management, including SSRI selection, dose, monitoring, and drug interactions. Address the QTc precaution.",
      ],
    },
    neetPg: {
      highYield: [
        "Escitalopram = S-enantiomer of citalopram. R-enantiomer in citalopram antagonises the S-enantiomer — so escitalopram at half the mg dose is more potent and better tolerated.",
        "Escitalopram = most selective SSRI (highest SERT affinity relative to NET/DAT/other receptors) → cleanest side-effect profile.",
        "Escitalopram = lowest CYP interaction profile among SSRIs (minimal CYP2D6 inhibition, mostly CYP2C19/3A4 metabolism) → drug of choice in elderly and polypharmacy.",
        "QTc precaution: dose-dependent QTc prolongation. FDA max 20mg/day adults; 10mg/day in elderly >60 and CYP2C19 poor metabolisers. FDA added this warning in 2011/2012 (originally for citalopram, then extended).",
        "Mechanism: SERT blockade (hours) → 5-HT1A autoreceptor desensitisation (1–2 weeks) → BDNF/neurogenesis (4–6 weeks). Same delayed onset as all SSRIs.",
        "FDA-approved indications: MDD in adults and adolescents ≥12 years, GAD in adults. One of only two SSRIs for paediatric depression (with fluoxetine ≥8 years).",
        "CYP2C19 poor metabolisers (≈3–5% of Caucasians, lower in Indians): reduce max dose by 50% (max 10mg/day). Omeprazole (CYP2C19 inhibitor) raises escitalopram levels — switch to pantoprazole or famotidine if long-term.",
        "Half-life: 27–32 hours. Once-daily dosing. Withdrawal symptoms less severe than paroxetine but more than fluoxetine.",
        "Black box: suicidality <25 years. Weekly monitoring in first month.",
        "Metabolism: CYP2C19 (primary), CYP3A4 and CYP2D6 (minor). S-demethylcitalopram and S-didemethylcitalopram are weakly active metabolites.",
      ],
      pyqConcepts: [
        "NEET PG 2022: Which SSRI is preferred in an elderly patient on multiple medications? (Answer: Escitalopram — lowest CYP interaction profile.)",
        "NEET PG 2021: Escitalopram is the S-enantiomer of which drug? (Answer: Citalopram. The R-enantiomer antagonises the active S-enantiomer.)",
        "NEET PG 2020: Maximum dose of escitalopram in elderly (>60 years)? (Answer: 10mg/day — FDA cap due to QTc prolongation risk.)",
        "NEET PG 2019: A patient on escitalopram develops QTc prolongation. Which co-prescribed drug is the most likely culprit? (Answer: Omeprazole, a CYP2C19 inhibitor, raises escitalopram levels → dose-dependent QTc.)",
        "INICET 2021: Which SSRI has the lowest CYP drug interaction profile? (Answer: Escitalopram — minimal CYP2D6 inhibition, mostly CYP2C19/3A4.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 68-year-old man with hypertension, T2DM, and recent MI presents with moderate depression. He is on aspirin, atorvastatin, metoprolol, and omeprazole. Which SSRI do you choose and at what dose? (Answer: Escitalopram — lowest CYP interaction profile, minimal CYP2D6 inhibition so no effect on metoprolol levels, low bleeding risk compared to sertraline. Start 5mg OD × 5 days, then 10mg OD. Baseline ECG and repeat after dose escalation. Switch omeprazole to pantoprazole to avoid CYP2C19 inhibition raising escitalopram levels.)",
        "A 35-year-old woman with depression is started on escitalopram 10mg. At 6 weeks, PHQ-9 has dropped from 16 to 11. What are the next steps? (Answer: Partial response. Options: escalate to 20mg OD, augment with bupropion XL 150mg, or add CBT if not already. Assess adherence and sleep. Reassess at 12 weeks — if <50% reduction, switch or augment.)",
        "A 14-year-old girl presents with moderate depression, declining school performance, and passive suicidal ideation. What is the pharmacological management? (Answer: Escitalopram is FDA-approved for paediatric depression ≥12 years. Start 10mg OD, can increase to 20mg after 3 weeks. Weekly monitoring in first month (black box warning). Combined with CBT. Involve family for monitoring. Tele-MANAS 14416 for crisis support. Fluoxetine is the alternative (FDA-approved ≥8 years).)",
        "A 72-year-old woman on escitalopram 10mg for 2 weeks presents with confusion, headache, and a seizure. Serum Na is 122 mmol/L. What is the diagnosis and management? (Answer: SSRI-induced SIADH. Stop escitalopram, fluid restrict, consider hypertonic saline if severe. Once resolved, restart at lower dose or switch to alternative. Check Na at baseline in elderly starting SSRIs.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Escitalopram mechanism: SERT blockade → ↑ serotonin in synaptic cleft.",
        "Onset of action: 4–6 weeks (not immediate — key FMGE concept).",
        "Escitalopram = S-enantiomer of citalopram.",
        "QTc prolongation at high doses — max 20mg/day adults, 10mg/day elderly.",
        "Lowest CYP interaction profile among SSRIs.",
        "Serotonin syndrome: clonus + hyperreflexia + fever + agitation. Treatment: cyproheptadine.",
        "Contraindication: MAOIs (14-day washout), congenital long-QT, pimozide.",
        "FDA-approved for paediatric depression ≥12 years.",
        "CYP2C19 poor metabolisers: reduce max dose by 50%.",
        "SIADH: hyponatraemia from SSRIs, especially in elderly.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Escitalopram's allosteric SERT binding site is unique — it binds the primary orthosteric site (high affinity) AND an allosteric site that slows dissociation, prolonging SERT occupancy. This may contribute to its potency and clean profile at low doses.",
        "The 'allosteric' mechanism is why escitalopram at half the mg dose of citalopram produces equivalent or superior SERT occupancy — the R-enantiomer in citalopram actually antagonises SERT binding of the S-enantiomer.",
        "QTc prolongation with escitalopram is dose-dependent and modest (~5–10ms at 20mg, ~15ms at 30mg in studies). The FDA cap is conservative — torsades is extremely rare in patients with normal baseline QTc and no other risk factors. However, the risk becomes clinically meaningful with concurrent QTc-prolonging drugs (antiarrhythmics, antipsychotics, macrolides, fluoroquinolones, methadone).",
        "Treatment-resistant depression algorithm after escitalopram failure: (1) optimise dose to 20mg (10mg in elderly), (2) confirm adherence + address substance use, (3) augment with bupropion XL or mirtazapine, (4) consider switch to SNRI or TCA, (5) consider ketamine/esketamine for severe TRD, (6) rTMS or ECT for severe/catatonic features.",
        "PHQ-9 monitoring: ≥50% reduction = response. <5 = remission. If <30% reduction at 6 weeks → increase dose (within age caps). If <50% at 12 weeks → switch or augment. Continue for 6–12 months after remission for first episode; longer for recurrent.",
        "In bipolar depression, escitalopram (and any antidepressant) can trigger a manic switch. Always screen for bipolar disorder (MDQ questionnaire) before initiating. If bipolar confirmed, use mood stabiliser first; antidepressant only if mood stabiliser alone is insufficient.",
        "When switching from escitalopram to another antidepressant: cross-taper is generally safe (escitalopram's clean profile makes this easier than with paroxetine/fluoxetine). Allow 7-day washout before starting an MAOI.",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "First-line SSRI for depression in elderly",
      internationalSource: "NICE CG91 / APA Practice Guideline",
      internationalRecommendation: "SSRIs are first-line for moderate-severe depression. In elderly, an SSRI with low CYP interaction profile and favourable tolerability is preferred — escitalopram and sertraline are commonly chosen.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS guidelines recommend SSRIs as first-line for depression. Escitalopram is widely preferred in elderly Indian patients due to lowest CYP interaction profile, favourable tolerability, and once-daily dosing. Dose cap of 10mg/day in >60 years is observed.",
    },
    {
      topic: "QTc prolongation and dose caps",
      internationalSource: "FDA Drug Safety Communication (2011/2012)",
      internationalRecommendation: "Dose-dependent QTc prolongation with citalopram/escitalopram. Maximum 20mg/day in adults; 10mg/day in patients >60 years, those with hepatic impairment, or CYP2C19 poor metabolisers. Avoid in congenital long-QT and with other QTc-prolonging drugs.",
      indianSource: "Indian Psychiatric Society (IPS) / CDSCO",
      indianRecommendation: "IPS acknowledges the FDA QTc warning and recommends adhering to the dose caps (20mg/day adults; 10mg/day elderly). In Indian practice, ECG monitoring is recommended at baseline in elderly, in patients with cardiac disease, and when combining with other QTc-prolonging drugs. CDSCO Schedule H status requires prescription.",
    },
    {
      topic: "Use in adolescents (≥12 years)",
      internationalSource: "FDA",
      internationalRecommendation: "Escitalopram is FDA-approved for major depressive disorder in adolescents ≥12 years. Black box warning for suicidality in <25 years. Weekly monitoring in first month.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs with the FDA approval for escitalopram in paediatric depression ≥12 years. In Indian practice, escitalopram is one of only two SSRIs commonly used in adolescents (with fluoxetine ≥8 years). Close monitoring for suicidality is mandatory; family involvement is critical given the joint family system.",
    },
    {
      topic: "Use in pregnancy",
      internationalSource: "FDA / APA",
      internationalRecommendation: "Escitalopram is generally considered safe in pregnancy when needed (former Category C). Sertraline is preferred as first-line in pregnancy due to lowest placental transfer, but escitalopram is acceptable. Small risk of persistent pulmonary hypertension of the newborn (PPHN). Third-trimester use associated with neonatal adaptation syndrome.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs with international guidelines — sertraline is preferred as first-choice in pregnancy, with escitalopram as an alternative when sertraline is not tolerated or has been previously effective. In Indian practice, the decision must also consider the risks of untreated depression (poor antenatal care, poor nutrition, suicidality). Never stop abruptly if a patient becomes pregnant — risk of relapse plus discontinuation syndrome.",
    },
    {
      topic: "CYP2C19 poor metabolisers",
      internationalSource: "FDA / CPIC Guideline",
      internationalRecommendation: "CYP2C19 poor metabolisers (loss-of-function homozygotes) have ~2× higher escitalopram exposure. Reduce max dose by 50% (max 10mg/day). Consider alternative SSRI (e.g., fluoxetine which is partly CYP2D6-metabolised) if dose reduction is inadequate.",
      indianSource: null,
      indianRecommendation: "No dedicated IPS guideline on CYP2C19 pharmacogenomics — not routinely tested in India due to cost. Clinical practice: reduce max dose to 10mg/day in elderly, those with hepatic impairment, or those on strong CYP2C19 inhibitors (omeprazole, fluconazole, fluvoxamine). Switch omeprazole to pantoprazole in patients on long-term escitalopram.",
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
    {
      source: "CDSCO — Central Drugs Standard Control Organisation",
      type: "regulatory",
      section: "Escitalopram — Schedule H prescription status",
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
      { source: "NICE CG91", recommendation: "SSRIs are first-line for moderate-severe depression. Escitalopram is commonly chosen in elderly and in patients on complex regimens due to lowest CYP interaction profile." },
      { source: "APA Practice Guideline", recommendation: "SSRI first-line for MDD. Escitalopram preferred when drug interactions are a concern (minimal CYP2D6 inhibition) and in elderly." },
      { source: "FDA", recommendation: "Approved for MDD in adults and adolescents ≥12 years, and GAD in adults. QTc dose-dependent — max 20mg/day adults, 10mg/day in elderly >60 and CYP2C19 poor metabolisers." },
      { source: "WHO mhGAP", recommendation: "SSRIs recommended as first-line antidepressants in the Mental Health Gap Action Programme." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS guidelines recommend SSRIs as first-line for depression. Escitalopram is widely preferred in elderly Indian patients and in those on complex polypharmacy." },
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS acknowledges the FDA QTc warning and recommends adhering to the dose caps (20mg/day adults; 10mg/day elderly). ECG monitoring recommended at baseline in elderly and cardiac patients." },
      { source: null, recommendation: "No dedicated IPS guideline on CYP2C19 pharmacogenomics — not routinely tested in India. Clinical practice: reduce max dose to 10mg/day in elderly, hepatic impairment, or strong CYP2C19 inhibitor co-prescription." },
    ],
    indianClinicalPractice:
      "In Indian practice, escitalopram is one of the most commonly prescribed SSRIs alongside sertraline. It is the preferred SSRI in elderly patients (>60 years) due to its lowest CYP interaction profile, favourable tolerability, and minimal CYP2D6 inhibition (allowing safe co-prescription with metoprolol, tamoxifen, TCAs). In private practice, it is the default choice for patients on complex polypharmacy (cardiac, GI, neurological medications). Starting dose is often 5–10mg OD (lower than Western guidelines) to minimise early side effects. PHQ-9 is used in tertiary centres but not routinely in primary care. The 10mg/day dose cap in elderly is generally observed; ECG monitoring is variable in government settings due to resource constraints. Family involvement in monitoring is emphasised given the joint family system. Jan Aushadhi generic escitalopram is widely available and affordable.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "Available through DMHP, though sertraline is more commonly dispensed due to lower cost. Starting dose 5–10mg OD. Monitoring is primarily clinical (symptom-based) due to resource constraints. ECG in elderly is recommended but practice varies. Jan Aushadhi generic escitalopram is commonly dispensed where available.",
    privateHospitals:
      "Preferred SSRI for elderly patients, those on complex polypharmacy, and those with comorbid anxiety. Starting dose 10mg OD (5mg in anxious/elderly). PHQ-9 monitoring at 2/4/6/12 weeks. Baseline ECG in elderly or cardiac patients, repeated after dose escalation. Patient counselling is more detailed.",
    medicalColleges:
      "Teaching drug for SSRI pharmacology, with emphasis on stereoisomerism (S-enantiomer concept), QTc dose-dependency, and CYP2C19 pharmacogenomics. Used in pharmacology practicals (prescription writing, patient counselling). Examined in second professional MBBS (pharmacology) and final professional (psychiatry). Commonly featured in NEET PG and INICET questions on SSRI selection in elderly and polypharmacy.",
    primaryCare:
      "First-line antidepressant for mild-moderate depression in adults and elderly. GP/family physicians commonly initiate escitalopram 10mg OD (5mg in elderly). Referral to psychiatrist if no response at 6–8 weeks or if severe depression with suicidal ideation. Caution with omeprazole — common co-prescription in elderly that raises escitalopram levels.",
    psychiatryOPD:
      "Workhorse SSRI in psychiatry OPD for depression, GAD, and panic disorder. Often chosen for elderly and polypharmacy patients. Dose escalation to 20mg (10mg in elderly) for partial response. Augmentation with bupropion or mirtazapine for partial response. Often combined with CBT. Used in adolescents ≥12 years for depression.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ questionnaire) — SSRIs can trigger manic switch.",
      "Assess suicidal ideation — if present, involve family for monitoring and provide Tele-MANAS (14416) number.",
      "Check for MAOI use in last 14 days — absolute contraindication.",
      "Review concurrent medications — especially tramadol, triptans, NSAIDs, warfarin, St John's Wort, and QTc-prolonging drugs (antiarrhythmics, antipsychotics, macrolides, fluoroquinolones, methadone).",
      "Check for omeprazole use — if long-term, switch to pantoprazole (minimal CYP2C19 inhibition) or famotidine to avoid raising escitalopram levels.",
      "Baseline PHQ-9 score for response monitoring.",
      "In elderly: check baseline serum sodium (SIADH risk), serum potassium and magnesium, and ECG for QTc (especially if cardiac risk factors or other QTc-prolonging drugs).",
      "Counsel about 4–6 week onset — set expectation that side effects precede benefit. Also counsel about the 20mg/day (10mg/day in elderly) dose cap.",
    ],
    duringTreatment: [
      "Week 1–2: assess tolerability (nausea, insomnia, agitation) and suicidality (especially <25 years).",
      "Week 2–4: review early response — sleep, appetite, energy often improve before mood.",
      "Week 4–6: assess response with PHQ-9. If <30% reduction, increase dose (within age-appropriate caps).",
      "Week 6–12: full response assessment. If <50% reduction at 12 weeks, consider augmentation (bupropion/mirtazapine) or switch.",
      "Monitor for sexual dysfunction — ask directly; patients rarely volunteer it.",
      "Watch for hyponatraemia in elderly (confusion, headache, seizures).",
      "Watch for QTc prolongation if dose escalation or addition of other QTc-prolonging drugs — repeat ECG.",
    ],
    followUp: [
      "First follow-up at 2 weeks (tolerability + suicidality).",
      "Second follow-up at 4 weeks (early response).",
      "Third follow-up at 6 weeks (dose escalation decision — within age-appropriate caps).",
      "Fourth follow-up at 12 weeks (full response assessment).",
      "If remission achieved (PHQ-9 <5): continue for 6–12 months for first episode, longer for recurrent.",
      "Before discontinuation: taper over 4+ weeks. Consider substituting fluoxetine for last 2 weeks of taper (self-tapers).",
      "In government hospitals: follow-up may be every 4–8 weeks due to travel barriers — counsel family to watch for red flags.",
    ],
    whenToRefer: [
      "Refer to psychiatrist if no response to 2 adequate SSRI trials (12 weeks each).",
      "Refer urgently if suicidal ideation emerges or worsens.",
      "Refer if bipolar disorder is suspected (manic switch risk).",
      "Refer if serotonin syndrome develops (emergency — call 112).",
      "Refer to physician/cardiologist if QTc >450ms (men) or >470ms (women), or if it increases by >30ms from baseline — review concomitant medications.",
      "Refer to obstetrician if patient becomes pregnant (do NOT stop escitalopram abruptly — switch to sertraline if first trimester and naive to SSRIs).",
      "Refer for CBT — combined SSRI + CBT produces better outcomes than either alone.",
    ],
  },

  /* Exam frequency — star ratings */
  examFrequency: {
    neetPg: 5,
    inicet: 4,
    mbbsViva: 3,
    fmge: 4,
  },

  /* PYQ metadata — concept-level, no copyrighted content */
  pyqMetadata: [
    { exam: "NEET PG", year: 2022, concept: "SSRI preferred in elderly on multiple medications", topic: "Antidepressant selection" },
    { exam: "NEET PG", year: 2021, concept: "Escitalopram as S-enantiomer of citalopram", topic: "Antidepressant pharmacology" },
    { exam: "NEET PG", year: 2020, concept: "Maximum dose of escitalopram in elderly (>60 years)", topic: "Antidepressant safety" },
    { exam: "NEET PG", year: 2019, concept: "CYP2C19 inhibitor raising escitalopram levels (omeprazole)", topic: "Drug interactions" },
    { exam: "INICET", year: 2021, concept: "SSRI with lowest CYP drug interaction profile", topic: "Antidepressant pharmacology" },
    { exam: "INICET", year: 2023, concept: "SSRI FDA-approved for paediatric depression (≥12 years)", topic: "Paediatric psychopharmacology" },
    { exam: "FMGE", year: 2022, concept: "Escitalopram mechanism of action and QTc precaution", topic: "Antidepressant pharmacology" },
    { exam: "FMGE", year: 2021, concept: "Contraindication: congenital long-QT and concurrent pimozide", topic: "Drug contraindications" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Government hospital setup",
      recommendation: "Sertraline is preferred as first-line due to lower cost and wider DMHP availability. Escitalopram is used when sertraline is contraindicated or not tolerated, or in elderly with polypharmacy.",
      alternative: "If escitalopram is unavailable, sertraline is the default. Citalopram (racemic) is generally avoided due to higher QTc risk at equivalent doses.",
    },
    {
      scenario: "Private psychiatry practice",
      recommendation: "Escitalopram is the preferred SSRI in elderly, in polypharmacy (cardiac, GI medications), and in patients with comorbid anxiety where clean side-effect profile is desired. Often the first choice in urban private practice for patients >50 years.",
      alternative: "Sertraline for pregnancy, OCD, or PTSD. Fluoxetine for bulimia or where long half-life is desired (adherence, self-tapering).",
    },
    {
      scenario: "Pregnancy",
      recommendation: "Sertraline is the SSRI of choice in pregnancy — lowest placental transfer, lowest milk/plasma ratio. Escitalopram is an acceptable alternative when sertraline is not tolerated or has been previously effective. IPS concurs with international guidelines.",
      alternative: "If sertraline is unavailable, escitalopram is acceptable. Avoid paroxetine (Category D — cardiac defects). Never stop abruptly if patient becomes pregnant.",
    },
    {
      scenario: "Adolescents and children",
      recommendation: "Escitalopram is FDA-approved for paediatric depression ≥12 years. One of only two SSRIs for paediatric depression (with fluoxetine ≥8 years). Monitor closely for suicidality (black box warning). Family involvement is critical in Indian practice.",
      alternative: "Fluoxetine for younger children (≥8 years) or for FDA-approved paediatric OCD. Sertraline is used off-label for paediatric OCD.",
    },
    {
      scenario: "Older adults (≥65 years)",
      recommendation: "Escitalopram is the preferred SSRI in elderly — lowest CYP interaction profile, minimal CYP2D6 inhibition (safe with metoprolol, tamoxifen), low weight gain, low sedation. Start at 5mg OD, titrate to max 10mg OD. Check serum sodium in first 2 weeks (SIADH risk). Baseline ECG for QTc.",
      alternative: "Sertraline if cost is a concern or for cardiac patients needing σ1 agonism. Avoid paroxetine (anticholinergic, sedation, weight gain, worst discontinuation). Avoid citalopram at >20mg in elderly (higher QTc risk than escitalopram at equivalent dose).",
    },
    {
      scenario: "Cost-sensitive setting",
      recommendation: "Generic escitalopram from Jan Aushadhi Kendra is affordable (₹3–6 per 10mg tablet). Branded versions (Nexito, Stalopam, Feliz-S) are also inexpensive. If cost is the primary concern, sertraline is marginally cheaper and more widely stocked in government hospitals.",
      alternative: "Jan Aushadhi generic escitalopram or sertraline are the most affordable options. Citalopram (racemic) is sometimes cheaper but carries higher QTc risk — avoid in elderly.",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: true,
    note: "Available at Jan Aushadhi Kendras across India in 5mg, 10mg, and 20mg tablet strengths. Among the more affordable SSRI options in India. Generic name: Escitalopram Tablets IP.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression" },
      { source: "FDA Prescribing Information — LEXAPRO (escitalopram oxalate)", section: "Highlights of Prescribing Information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/021323s047lbl.pdf" },
      { source: "FDA Drug Safety Communication: abnormal heart rhythms associated with high doses of citalopram/escitalopram (2011/2012)", section: "Dose-dependent QTc prolongation — dose caps established" },
      { source: "NICE Clinical Guideline CG91 — Depression in adults", section: "Pharmacological treatment" },
      { source: "APA Practice Guideline for MDD, 3rd edition" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression", type: "guideline", section: "Section on pharmacotherapy — SSRIs" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional)", type: "curriculum", section: "Topic: Psychopharmacology — Mood disorders" },
      { source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)", type: "regulatory", section: "Essential medicines for mental health — SSRIs" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Mental health support resource", url: "tel:14416" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Escitalopram — Schedule H prescription status" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose Escitalopram for depression",
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
        recommendation: "Psychotherapy first (CBT). Consider escitalopram if functional impairment or patient preference, especially in elderly where SSRI choice is preferred over watchful waiting.",
        reasoning: "NICE recommends psychotherapy alone for mild depression. In elderly, the threshold for pharmacotherapy is lower due to higher risk of progression and lower tolerance of prolonged distress.",
      },
      {
        id: "moderate",
        question: "Moderate depression (PHQ-9 10–14)",
        recommendation: "Escitalopram 10mg OD (5mg in anxious/elderly) + CBT. First-line per NICE CG91 and IPS guidelines, particularly preferred in elderly and polypharmacy.",
        reasoning: "SSRI + CBT is first-line for moderate depression. Escitalopram is preferred in elderly (>60) and in patients on complex regimens due to lowest CYP interaction profile.",
        branches: [
          { label: "Why choose Escitalopram?", next: "start-escitalopram" },
        ],
      },
      {
        id: "severe",
        question: "Severe depression (PHQ-9 15–27)",
        recommendation: "Escitalopram 10mg OD (titrate to 20mg in adults; max 10mg in elderly) + CBT. Consider psychiatry referral.",
        reasoning: "Severe depression requires pharmacotherapy. Escitalopram is first-line. If psychotic features → add antipsychotic. If suicidal → urgent psychiatric referral.",
        branches: [
          { label: "With suicidal ideation", next: "suicidal" },
          { label: "With psychotic features", next: "psychotic" },
          { label: "Without complications", next: "start-escitalopram" },
        ],
      },
      {
        id: "start-escitalopram",
        question: "Why choose Escitalopram?",
        recommendation: "Escitalopram is preferred when: elderly patient (>60 years) — lowest CYP interaction profile; complex polypharmacy — minimal CYP2D6 inhibition (safe with metoprolol, tamoxifen); adolescent ≥12 years with depression — FDA-approved; patient with comorbid GAD — broad-spectrum coverage. Dose cap 10mg/day in >60 years (QTc precaution); 20mg/day in adults.",
        reasoning: "Escitalopram is the S-enantiomer of citalopram — the most selective SSRI with the lowest CYP interaction profile. In elderly and polypharmacy, it avoids the CYP2D6 interactions that complicate sertraline, paroxetine, and fluoxetine. QTc dose cap is conservative and clinically manageable with baseline ECG.",
        branches: [
          { label: "When NOT to choose", next: "avoid" },
        ],
      },
      {
        id: "suicidal",
        question: "Severe depression with suicidal ideation",
        recommendation: "Urgent psychiatry referral. Do NOT send home alone. Consider admission. Escitalopram can be started but monitor weekly (black box warning <25).",
        reasoning: "Suicidal ideation in severe depression is a psychiatric emergency. Tele-MANAS 14416 for crisis support. 112 for emergency.",
      },
      {
        id: "psychotic",
        question: "Severe depression with psychotic features",
        recommendation: "Psychiatry referral. Add antipsychotic (olanzapine or aripiprazole) to SSRI. Consider ECT if catatonic or severely suicidal.",
        reasoning: "Psychotic depression requires combination therapy (antidepressant + antipsychotic) or ECT. SSRI alone is insufficient.",
      },
      {
        id: "avoid",
        question: "When NOT to choose Escitalopram",
        recommendation: "Avoid: congenital long-QT, concurrent QTc-prolonging drugs (pimozide, antiarrhythmics, methadone), CYP2C19 poor metabolisers at high dose (max 10mg), bipolar depression without mood stabiliser, active MAOI (14 days).",
        reasoning: "QTc risk is dose-dependent and amplified by other QTc-prolonging drugs. CYP2C19 poor metabolisers have ~2× higher exposure — reduce max dose. SSRIs can trigger manic switch in bipolar. MAOI + SSRI = fatal serotonin syndrome.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian OPD initiation for first-episode moderate depression in a 35-year-old adult",
    lines: [
      "Rx",
      "Tab Escitalopram 5 mg",
      "1 tab OD morning after food × 5 days",
      "",
      "Then increase to:",
      "Tab Escitalopram 10 mg",
      "1 tab OD morning after food",
      "",
      "Advice: Take once daily in morning with food. Do not stop suddenly.",
      "Avoid alcohol. Report if feeling worse or new suicidal thoughts.",
      "Maximum dose 20mg/day (10mg/day if >60 years).",
    ],
    followUp: [
      "Review after 2 weeks — tolerability, suicidality, side effects",
      "Review after 4 weeks — early response (sleep, appetite, energy)",
      "Review after 6 weeks — PHQ-9; if <30% reduction, increase to 20mg (within age caps)",
      "Review after 12 weeks — full response assessment",
      "If remission (PHQ-9 <5): continue 6–12 months, then taper over 4+ weeks",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information and individualise for each patient.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Prescribing >20mg/day in adults or >10mg/day in elderly",
      why: "Escitalopram causes dose-dependent QTc prolongation. The FDA caps (20mg/day adults; 10mg/day in >60 years and CYP2C19 poor metabolisers) were established after post-marketing reports of torsades de pointes. Exceeding these caps is a preventable safety error.",
      correction: "Always check age before prescribing. In patients >60 years, maximum is 10mg/day. In adults, titrate to 20mg max. If inadequate response at max dose, augment (bupropion, mirtazapine) or switch — do NOT exceed the cap.",
    },
    {
      mistake: "Not recognising QTc risk in patients on other QTc-prolonging drugs",
      why: "Escitalopram's QTc effect is amplified by concurrent QTc-prolonging drugs: antiarrhythmics (amiodarone, sotalol, quinidine), antipsychotics (haloperidol, ziprasidone), antibiotics (macrolides, fluoroquinolones), methadone, ondansetron. The combination can cause torsades de pointes.",
      correction: "Review all medications before prescribing. If QTc-prolonging drugs are unavoidable, use a non-QTc SSRI (sertraline at low doses), check baseline ECG, and monitor. Avoid escitalopram in patients with baseline QTc >450ms (men) or >470ms (women).",
    },
    {
      mistake: "Missing CYP2C19 drug interactions",
      why: "Escitalopram is primarily metabolised by CYP2C19. Strong CYP2C19 inhibitors (omeprazole, esomeprazole, fluconazole, fluvoxamine, ticlopidine) raise escitalopram levels → dose-dependent QTc risk. Omeprazole is extremely common in elderly Indian patients.",
      correction: "Always ask about reflux medications. If long-term PPI is needed, switch omeprazole to pantoprazole (minimal CYP2C19 inhibition) or famotidine. If CYP2C19 inhibitor cannot be avoided, reduce escitalopram max dose by 50%.",
    },
    {
      mistake: "Stopping after 2 weeks because 'it's not working'",
      why: "SSRIs take 4–6 weeks for full antidepressant effect. Stopping at 2 weeks means stopping before the drug has had a chance to work.",
      correction: "Counsel at initiation: 'Side effects come first (week 1–2), mood benefit comes later (week 4–6). Don't stop early.'",
    },
    {
      mistake: "Abrupt discontinuation",
      why: "Sudden cessation causes discontinuation syndrome — dizziness, brain zaps, nausea, irritability. Can start within 24 hours of missed dose. Less severe than paroxetine but more than fluoxetine.",
      correction: "Always taper over 4+ weeks. If severe, substitute fluoxetine (long half-life) for last 2 weeks of taper.",
    },
    {
      mistake: "Not asking about sexual dysfunction",
      why: "Sexual dysfunction affects 30–50% of patients on SSRIs and is the #1 reason for non-adherence. Patients rarely volunteer it. Although less than paroxetine, escitalopram still causes significant sexual dysfunction.",
      correction: "Ask directly at every follow-up: 'Any changes in sexual interest or function?' If present, consider dose reduction, adding bupropion, or switching.",
    },
    {
      mistake: "Not monitoring sodium in elderly",
      why: "SSRIs cause SIADH in ~0.5–1% of patients. Risk is highest in elderly females in the first 2 weeks. Can cause seizures if severe.",
      correction: "Check serum sodium at baseline in elderly. Recheck within 2 weeks if symptomatic (confusion, headache, lethargy).",
    },
    {
      mistake: "Ignoring bipolar history",
      why: "SSRIs can trigger a manic switch in undiagnosed bipolar disorder. This is a dangerous and preventable complication. Escitalopram is not immune.",
      correction: "Screen for bipolar disorder (MDQ questionnaire) before starting any antidepressant. If bipolar confirmed, use mood stabiliser first.",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Congenital long-QT syndrome",
      reason: "Escitalopram causes dose-dependent QTc prolongation. In patients with congenital long-QT, the baseline risk of torsades is already high — any further prolongation is unacceptable.",
      alternative: "Use a non-QTc SSRI under cardiology supervision, or non-pharmacological treatment (CBT, rTMS). If SSRI is essential, consider sertraline at low dose with intensive ECG monitoring.",
    },
    {
      scenario: "Concurrent QTc-prolonging drugs that cannot be stopped",
      reason: "Combining escitalopram with antiarrhythmics (amiodarone, sotalol, quinidine), antipsychotics (haloperidol, ziprasidone), methadone, or certain antibiotics (macrolides, fluoroquinolones) amplifies QTc risk → torsades de pointes.",
      alternative: "Switch to sertraline (lowest QTc effect at clinical doses), or use non-pharmacological treatment. If combination is unavoidable, baseline ECG, daily ECG during initiation, and cardiology consultation are essential.",
    },
    {
      scenario: "CYP2C19 poor metabolisers requiring high dose",
      reason: "CYP2C19 poor metabolisers (loss-of-function homozygotes) have ~2× higher escitalopram exposure. Max dose is 10mg/day — if a patient needs more, escitalopram is the wrong drug.",
      alternative: "Switch to fluoxetine (partly CYP2D6-metabolised) or sertraline (mostly CYP2B6). If CYP2C19 status is unknown but patient is on a strong inhibitor (omeprazole, fluconazole), treat as poor metaboliser.",
    },
    {
      scenario: "Active MAOI use (within 14 days)",
      reason: "Fatal serotonin syndrome. The 14-day washout is absolute.",
      alternative: "Wait 14 days after stopping MAOI before starting escitalopram. Allow 7 days after stopping escitalopram before starting an MAOI.",
    },
    {
      scenario: "Bipolar depression without mood stabiliser",
      reason: "SSRI monotherapy can trigger a manic switch — potentially dangerous. Escitalopram is not immune to this risk.",
      alternative: "Mood stabiliser first (lithium, valproate, lamotrigine). SSRI only if mood stabiliser alone is insufficient.",
    },
    {
      scenario: "Known hypersensitivity to escitalopram or citalopram",
      reason: "Cross-reactivity between citalopram and escitalopram is expected. Anaphylaxis, angioedema, or severe rash contraindicates re-exposure.",
      alternative: "Use a structurally different SSRI (sertraline, fluoxetine, paroxetine, fluvoxamine) or non-SSRI antidepressant.",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "What is the mechanism of action of escitalopram? Why is it called the 'most selective' SSRI? (S-enantiomer of citalopram with high-affinity, high-selectivity SERT blockade; allosteric binding site; lowest off-target receptor binding among SSRIs)",
      "What is the relationship between citalopram and escitalopram? (Escitalopram is the S-enantiomer; the R-enantiomer in racemic citalopram antagonises SERT binding of the S-enantiomer, so escitalopram at half the mg dose is more potent and better tolerated.)",
      "What is the QTc precaution with escitalopram? What is the maximum dose in adults vs elderly? (Dose-dependent QTc prolongation. Max 20mg/day adults, 10mg/day in >60 years and CYP2C19 poor metabolisers. FDA warning 2011/2012.)",
      "Which SSRI is preferred in an elderly patient on multiple medications, and why? (Escitalopram — lowest CYP interaction profile, minimal CYP2D6 inhibition, safe with metoprolol/tamoxifen.)",
      "Which SSRI is FDA-approved for paediatric depression ≥12 years? (Escitalopram. Fluoxetine is approved for ≥8 years.)",
      "Which common Indian co-prescription raises escitalopram levels? (Omeprazole — CYP2C19 inhibitor. Switch to pantoprazole.)",
    ],
    residentExpects: [
      "Know the starting dose and titration schedule (10mg → 20mg in adults; 5mg → 10mg in elderly/anxious)",
      "Know the dose caps (20mg/day adults; 10mg/day in >60 years and CYP2C19 poor metabolisers)",
      "Know when to increase dose vs switch (PHQ-9 <30% reduction at 6 weeks → increase within age caps; <50% at 12 weeks → switch/augment)",
      "Know augmentation strategies (bupropion XL 150mg, mirtazapine 15mg)",
      "Know discontinuation syndrome management (taper 4+ weeks; fluoxetine substitution for last 2 weeks)",
      "Know when to refer to psychiatry (no response to 2 SSRI trials, bipolar suspicion, psychotic features, suicidality, QTc >450ms men or >470ms women)",
    ],
    consultantsDo: [
      "Use PHQ-9 at every visit for objective monitoring",
      "Screen for bipolar disorder (MDQ) before starting any antidepressant",
      "Combine SSRI + CBT for moderate-severe depression (better outcomes than either alone)",
      "Ask about sexual dysfunction at every follow-up (patients rarely volunteer)",
      "Continue treatment for 6–12 months after remission for first episode; longer for recurrent",
      "Use escitalopram as default SSRI in elderly and polypharmacy",
      "Always review concurrent medications for QTc-prolonging drugs and CYP2C19 inhibitors before prescribing",
    ],
    internsMiss: [
      "Prescribing 20mg/day to an elderly patient — should be 10mg/day max",
      "Missing the omeprazole interaction — extremely common in elderly Indian patients",
      "Not counselling about 4–6 week onset — patient stops early",
      "Not warning about QTc risk in patients on multiple medications",
      "Not asking about sexual dysfunction — patient stops silently",
      "Not checking sodium in elderly — presents with confusion 2 weeks later",
      "Not screening for bipolar disorder — patient has manic switch",
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
      { name: "Sertraline", slug: "sertraline", relationship: "Same class (SSRI)", distinguishing: "SSRI of choice in pregnancy; σ1 agonism; 6 FDA indications" },
      { name: "Fluoxetine", slug: "fluoxetine", relationship: "Same class (SSRI)", distinguishing: "Longest half-life; only SSRI for bulimia; paediatric ≥8yr" },
      { name: "Escitalopram", slug: "escitalopram", relationship: "Current drug", distinguishing: "S-enantiomer of citalopram; lowest CYP interactions; QTc watch" },
      { name: "Paroxetine", slug: "paroxetine", relationship: "Same class (SSRI)", distinguishing: "Shortest half-life (worst discontinuation); Category D; tamoxifen interaction" },
      { name: "Citalopram", slug: "citalopram", relationship: "Same class (SSRI)", distinguishing: "Racemic parent of escitalopram; QTc dose-dependent; 40mg cap" },
      { name: "Fluvoxamine", slug: "fluvoxamine", relationship: "Same class (SSRI)", distinguishing: "OCD-only FDA indication; CYP1A2 inhibitor; tizanidine contraindicated" },
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
      question: "Escitalopram is the S-enantiomer of which antidepressant?",
      options: ["Fluoxetine", "Citalopram", "Sertraline", "Paroxetine"],
      correctIndex: 1,
      explanation: "Escitalopram is the S-enantiomer of racemic citalopram. The R-enantiomer in citalopram actually antagonises SERT binding of the S-enantiomer, so escitalopram at half the mg dose is more potent and better tolerated.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-onset",
      question: "Why does escitalopram take 4–6 weeks to work when SERT blockade occurs within hours?",
      options: [
        "The drug needs to accumulate to therapeutic levels",
        "5-HT1A autoreceptors initially brake serotonin firing, and need 1–2 weeks to desensitise",
        "The blood-brain barrier delays drug entry",
        "Serotonin synthesis takes weeks to increase",
      ],
      correctIndex: 1,
      explanation: "Acute SERT blockade raises synaptic serotonin within hours, but 5-HT1A somatodendritic autoreceptors in the raphe nuclei detect this and inhibit further firing. Over 1–2 weeks, these autoreceptors desensitise — removing the brake. Downstream neuroadaptive changes (BDNF, neurogenesis) take 4–6 weeks. This delay is THE most tested SSRI concept.",
      afterSectionId: "timeline",
    },
    {
      id: "quiz-side-effects",
      question: "What is the maximum dose of escitalopram in an adult, and what is the safety reason for this cap?",
      options: [
        "10mg/day — risk of hepatotoxicity",
        "20mg/day — dose-dependent QTc prolongation",
        "40mg/day — risk of serotonin syndrome",
        "60mg/day — risk of seizure",
      ],
      correctIndex: 1,
      explanation: "20mg/day in adults; 10mg/day in patients >60 years and CYP2C19 poor metabolisers. The FDA established these caps in 2011/2012 after post-marketing reports of dose-dependent QTc prolongation and torsades de pointes. The QTc effect is amplified by other QTc-prolonging drugs.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-monitoring",
      question: "A 72-year-old woman on escitalopram 10mg for 2 weeks presents with confusion and headache. Serum Na is 122 mmol/L. What is the most likely cause?",
      options: ["Serotonin syndrome", "SIADH (hyponatraemia)", "Alzheimer's disease", "Urinary tract infection"],
      correctIndex: 1,
      explanation: "SSRIs cause SIADH in ~0.5–1% of patients, with highest risk in elderly females in the first 2 weeks. Check serum sodium — if <125 mmol/L, fluid restrict and consider discontinuing. This is why sodium should be checked at baseline in elderly patients starting SSRIs.",
      afterSectionId: "monitoring",
    },
    {
      id: "quiz-contraindications",
      question: "A 65-year-old patient is on amiodarone for atrial fibrillation. Which SSRI is best avoided?",
      options: ["Sertraline", "Escitalopram", "Fluoxetine", "Paroxetine"],
      correctIndex: 1,
      explanation: "Escitalopram causes dose-dependent QTc prolongation. Amiodarone also prolongs QTc. The combination amplifies torsades de pointes risk. Sertraline (lowest QTc effect at clinical doses) is preferred in patients on amiodarone, with baseline ECG and monitoring.",
      afterSectionId: "contraindications",
    },
    {
      id: "quiz-pregnancy",
      question: "Which common co-prescription in Indian elderly patients raises escitalopram levels via CYP2C19 inhibition?",
      options: ["Aspirin", "Metformin", "Omeprazole", "Atorvastatin"],
      correctIndex: 2,
      explanation: "Omeprazole is a strong CYP2C19 inhibitor. Escitalopram is primarily metabolised by CYP2C19 — co-prescription raises levels → dose-dependent QTc risk. Switch to pantoprazole (minimal CYP2C19 inhibition) or famotidine in patients on long-term escitalopram. This is an extremely common interaction in Indian elderly.",
      afterSectionId: "evidence-practice",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "When is Escitalopram preferred over other SSRIs? List 4 scenarios.",
      answer: "Escitalopram is preferred when: (1) elderly patient (>60 years) — lowest CYP interaction profile and favourable tolerability; (2) complex polypharmacy — minimal CYP2D6 inhibition (safe with metoprolol, tamoxifen); (3) adolescent ≥12 years with depression — FDA-approved; (4) patient with comorbid GAD — broad-spectrum coverage with clean side-effect profile. The S-enantiomer of citalopram is more potent and better tolerated than the racemic parent.",
      topic: "Drug Selection",
    },
    {
      question: "What is the QTc precaution with escitalopram? What are the maximum doses in adults vs elderly, and why?",
      answer: "Dose-dependent QTc prolongation → risk of torsades de pointes. FDA caps established 2011/2012: max 20mg/day in adults; 10mg/day in patients >60 years, hepatic impairment, or CYP2C19 poor metabolisers. The QTc effect (~5–10ms at 20mg) is modest in isolation but amplified by other QTc-prolonging drugs (antiarrhythmics, antipsychotics, macrolides, methadone). Avoid in congenital long-QT.",
      topic: "Safety",
    },
    {
      question: "Explain the relationship between citalopram and escitalopram. Why does escitalopram at half the mg dose produce equivalent or superior SERT occupancy?",
      answer: "Escitalopram is the S-enantiomer of racemic citalopram. The R-enantiomer in citalopram is not inert — it antagonises SERT binding of the active S-enantiomer via allosteric interaction. Removing the R-enantiomer (as in escitalopram) eliminates this antagonism, so escitalopram at half the mg dose achieves equivalent or superior SERT occupancy with better tolerability.",
      topic: "Pharmacology",
    },
    {
      question: "A patient on escitalopram develops agitation, clonus, hyperreflexia, and fever. What is the diagnosis and how do you manage it?",
      answer: "Serotonin syndrome. Triad: mental status change + autonomic instability + neuromuscular excitation (clonus, hyperreflexia). Management: discontinue escitalopram, supportive care (cooling, benzodiazepines), cyproheptadine (5-HT2A antagonist) in severe cases. Distinguish from NMS (rigidity, bradyreflexia).",
      topic: "Side Effects",
    },
    {
      question: "Which common Indian co-prescription raises escitalopram levels? How do you manage it?",
      answer: "Omeprazole — a strong CYP2C19 inhibitor. Escitalopram is primarily metabolised by CYP2C19, so co-prescription raises levels → dose-dependent QTc risk. Management: switch omeprazole to pantoprazole (minimal CYP2C19 inhibition) or famotidine. If PPI cannot be changed, reduce escitalopram max dose by 50% (max 10mg/day in adults, 5mg/day in elderly).",
      topic: "Drug Interactions",
    },
    {
      question: "How do you manage SSRI discontinuation syndrome? Where does escitalopram sit relative to other SSRIs?",
      answer: "Taper over 4+ weeks. Symptoms: FINISH (Flu-like, Insomnia, Nausea, Imbalance, Sensory/brain zaps, Hyperarousal). Worst: paroxetine (shortest half-life 21h). Mildest: fluoxetine (longest half-life 1–4 days, self-tapers). Escitalopram (half-life 27–32h) is intermediate — moderate discontinuation risk. Can substitute fluoxetine for the last 2 weeks of an escitalopram taper to smooth discontinuation.",
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
      checkpoint: "You now know what Escitalopram is — the S-enantiomer of citalopram, the most selective SSRI with the lowest CYP interaction profile, and a dose-dependent QTc precaution.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act in the brain?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand the mechanism — from acute SERT blockade to chronic 5-HT1A desensitisation to BDNF-mediated neurogenesis. The 4–6 week delay now makes sense, and you know why the S-enantiomer is more potent than the racemic parent.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When do you use it? What goes wrong?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now prescribe escitalopram safely — you know the indications (including paediatric ≥12 years and GAD), the QTc dose caps, the contraindications, and how to monitor response.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it actually used in Indian hospitals?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands (Nexito, Stalopam, Feliz-S), the government hospital workflow, the common mistakes interns make (especially the omeprazole interaction), and when NOT to choose escitalopram.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content, worked through a clinical case, compared escitalopram with the other 5 SSRIs, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions, you have exam-level mastery of Escitalopram.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Lexapro label, FDA Drug Safety Communication on citalopram/escitalopram QTc (2011/2012), NICE CG91, APA Practice Guideline"],
};
