import type { Drug } from "../types";

/**
 * Amitriptyline — canonical drug page data.
 *
 * Tricyclic antidepressant (TCA) — tertiary amine. The archetypal "dirty drug":
 * blocks SERT and NET (like an SNRI) but ALSO blocks α1, H1, M1 and fast Na+
 * channels — producing the signature anticholinergic toxidrome, sedation,
 * orthostatic hypotension and the lethal cardiotoxicity that defines TCA
 * overdose.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition (Ch. 30 — Antidepressant Agents)
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition (Section V — Pharmacotherapy of Mood Disorders)
 *   - FDA Prescribing Information for Elavil (amitriptyline hydrochloride)
 *   - NICE Clinical Guideline CG173 — Neuropathic pain in adults
 *   - American Geriatrics Society Beers Criteria (2023 update)
 *
 * Last reviewed: 2026-07-13
 */
export const amitriptyline: Drug = {
  /* ---- Identity ---- */
  slug: "amitriptyline",
  genericName: "Amitriptyline",
  brandNames: ["Elavil", "Endep", "Tryptomer"],
  drugClass: "tca",
  drugClassLabel: "TCA",
  drugClassFullName: "Tricyclic Antidepressant",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "TCAs", "Amitriptyline"],

  /* ---- Hero / summary ---- */
  tagline:
    "A tricyclic antidepressant that blocks SERT and NET — but also α1, H1, M1 and cardiac Na+ channels, making it lethal in overdose and the archetypal pharmacology 'dirty drug'.",
  summary:
    "Amitriptyline is a tertiary-amine tricyclic antidepressant (TCA). Like an SNRI it blocks reuptake of serotonin (SERT) and norepinephrine (NET), producing antidepressant efficacy equal to SSRIs. But unlike SSRIs, amitriptyline ALSO blocks α1-adrenergic, H1-histamine, M1-muscarinic and fast cardiac sodium channels — the 'dirty drug' profile that produces its signature side effects (anticholinergic toxidrome, sedation, weight gain, orthostatic hypotension) and its lethality in overdose. As little as 10× the therapeutic dose can be fatal via Na+ channel blockade causing QRS widening and ventricular arrhythmia. This is the single most important reason SSRIs replaced TCAs as first-line — not efficacy (which is equivalent), but safety. Amitriptyline is metabolised to nortriptyline (an active, secondary-amine TCA with a defined therapeutic window of 50–150 ng/mL). Today it is prescribed far more often for neuropathic pain, migraine prophylaxis and insomnia than for depression.",
  estimatedReadTime: "20 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain why amitriptyline is the archetypal pharmacology 'dirty drug' — blocking SERT, NET, α1, H1, M1 and cardiac Na+ channels — and predict each off-target effect clinically.",
    "Recognise and manage TCA overdose: QRS widening on ECG, ventricular arrhythmia, seizures, anticholinergic toxidrome, and the role of IV sodium bicarbonate.",
    "Identify the anticholinergic toxidrome ('blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone, full as a flask') and explain its M1-receptor basis.",
    "Justify why SSRIs replaced TCAs as first-line antidepressants on SAFETY grounds, not efficacy — and identify the small number of clinical situations where a TCA is still appropriate.",
    "Use nortriptyline's therapeutic window (50–150 ng/mL) for serum-level monitoring — unique among antidepressants — and explain why amitriptyline (tertiary amine) has more side effects than nortriptyline (secondary amine).",
    "Counsel a patient prescribed low-dose amitriptyline for neuropathic pain or migraine prophylaxis, including dosing rationale, ECG monitoring, and the importance of not stopping abruptly.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Amitriptyline blocks reuptake of serotonin (SERT) and norepinephrine (NET) — like an SNRI — but ALSO blocks α1-adrenergic, H1-histamine, M1-muscarinic receptors and fast cardiac Na+ channels, producing both its antidepressant effect and its signature side-effect/toxicity profile.",
    molecularTarget:
      "SERT (SLC6A4) and NET (SLC6A2) — plus off-target α1, H1, M1 receptors and cardiac voltage-gated Na+ channels",
    effect:
      "Acute: ↑ synaptic serotonin and norepinephrine, plus simultaneous α1 blockade (orthostatic hypotension), H1 blockade (sedation, weight gain), M1 blockade (anticholinergic effects), and Na+ channel blockade (cardiac conduction slowing). Chronic (2–6 weeks): downstream 5-HT1A autoreceptor desensitisation, increased BDNF expression and hippocampal neurogenesis produce the clinical antidepressant effect — identical temporal profile to SSRIs.",
    steps: [
      "Amitriptyline binds the serotonin transporter (SERT) on presynaptic serotonergic neurons, blocking reuptake of serotonin from the synaptic cleft — same mechanism as SSRIs/SNRIs.",
      "Amitriptyline ALSO binds the norepinephrine transporter (NET) on presynaptic noradrenergic neurons, blocking reuptake of norepinephrine — same mechanism as SNRIs.",
      "Acute dual blockade raises synaptic serotonin and norepinephrine within hours — but somatodendritic 5-HT1A and α2 autoreceptors detect this and initially inhibit further firing.",
      "Over 7–14 days, autoreceptors desensitise — removing the brake on monoamine firing. Throughput from the raphe (5-HT) and locus coeruleus (NE) to the prefrontal cortex, amygdala and hippocampus increases.",
      "Downstream neuroadaptive changes occur over 2–6 weeks (increased BDNF, hippocampal neurogenesis, receptor downregulation) — these delayed adaptations, not the acute monoamine rise, correlate with clinical antidepressant effect.",
      "SIMULTANEOUSLY — and this is what makes amitriptyline a 'dirty drug' — amitriptyline non-selectively blocks α1-adrenergic receptors (→ orthostatic hypotension, dizziness), H1-histamine receptors (→ sedation, weight gain), M1-muscarinic receptors (→ dry mouth, constipation, urinary retention, blurred vision, cognitive impairment), and fast cardiac Na+ channels (→ QRS widening, QTc prolongation, ventricular arrhythmia — the mechanism of lethality in overdose).",
      "The 5-HT2A and 5-HT2C receptors are also blocked — contributing to anxiolytic and sleep-restoring effects, and to weight gain.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~50% due to first-pass metabolism). Peak plasma at 2–12 hours. Highly protein-bound (~95%). Volume of distribution ~15 L/kg — widely distributed including into CNS. Lipophilic tertiary amine — penetrates blood-brain barrier readily (more so than the secondary amine nortriptyline), which explains its greater CNS side-effect burden.",
    halfLife:
      "Amitriptyline 10–28 hours; active metabolite nortriptyline 18–56 hours. Effective half-life of the parent + metabolite combination supports once-nightly dosing.",
    activeMetabolite:
      "Nortriptyline — a secondary-amine TCA that is itself an antidepressant. Nortriptyline has fewer anticholinergic/sedating effects than amitriptyline and is the only TCA with a well-defined therapeutic window (50–150 ng/mL). Roughly half of amitriptyline's clinical effect is attributable to its conversion to nortriptyline.",
    metabolism:
      "Hepatic — predominantly CYP2D6 (demethylation to nortriptyline), with contributions from CYP2C19, CYP1A2 and CYP3A4. CYP2D6 polymorphisms and inhibitors (fluoxetine, paroxetine, bupropion) significantly raise plasma levels and toxicity risk.",
    excretion:
      "Primarily renal as metabolites (conjugated hydroxylated derivatives). Urinary excretion of unchanged amitriptyline is minimal.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic-5ht", label: "Raphe neuron", sublabel: "Synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT", sublabel: "Normally reuptakes 5-HT", variant: "target" },
      { id: "presynaptic-ne", label: "Locus coeruleus neuron", sublabel: "Synthesises norepinephrine", variant: "input" },
      { id: "norepinephrine", label: "Norepinephrine (NE)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "net", label: "NET", sublabel: "Normally reuptakes NE", variant: "target" },
      { id: "amitriptyline", label: "Amitriptyline", sublabel: "Tertiary-amine TCA — 'dirty drug'", variant: "inhibit" },
      { id: "alpha1", label: "α1-adrenergic receptor", sublabel: "Vasomotor tone", variant: "target" },
      { id: "h1", label: "H1 histamine receptor", sublabel: "Wakefulness, appetite", variant: "target" },
      { id: "m1", label: "M1 muscarinic receptor", sublabel: "Parasympathetic tone", variant: "target" },
      { id: "na-channel", label: "Cardiac Na+ channel", sublabel: "Ventricular conduction", variant: "target" },
      { id: "antidepressant", label: "↑ 5-HT + NE throughput", sublabel: "Antidepressant effect (4–6 weeks)", variant: "output" },
      { id: "orthostasis", label: "Orthostatic hypotension", sublabel: "α1 blockade — falls risk in elderly", variant: "output" },
      { id: "sedation", label: "Sedation + weight gain", sublabel: "H1 blockade — useful for insomnia", variant: "output" },
      { id: "toxidrome", label: "Anticholinergic toxidrome", sublabel: "M1 blockade — dry mouth, constipation, urinary retention, blurred vision", variant: "output" },
      { id: "qrs", label: "QRS widening → VT/VF", sublabel: "Na+ channel blockade — LETHAL in overdose", variant: "output" },
    ],
    edges: [
      { from: "presynaptic-5ht", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "amitriptyline", to: "sert", type: "inhibit", label: "blocks" },
      { from: "presynaptic-ne", to: "norepinephrine", label: "releases" },
      { from: "norepinephrine", to: "net", label: "reuptake" },
      { from: "amitriptyline", to: "net", type: "inhibit", label: "blocks" },
      { from: "serotonin", to: "antidepressant", label: "↑ cleft 5-HT" },
      { from: "norepinephrine", to: "antidepressant", label: "↑ cleft NE" },
      { from: "amitriptyline", to: "alpha1", type: "inhibit", label: "blocks" },
      { from: "alpha1", to: "orthostasis", label: "vasodilation" },
      { from: "amitriptyline", to: "h1", type: "inhibit", label: "blocks" },
      { from: "h1", to: "sedation", label: "CNS depression" },
      { from: "amitriptyline", to: "m1", type: "inhibit", label: "blocks" },
      { from: "m1", to: "toxidrome", label: "parasympathetic loss" },
      { from: "amitriptyline", to: "na-channel", type: "inhibit", label: "blocks" },
      { from: "na-channel", to: "qrs", label: "conduction slowing" },
    ],
    caption:
      "The 'dirty drug' diagram. The two blue inhibitions on SERT and NET produce the antidepressant effect (4–6 weeks). The four red inhibitions on α1, H1, M1 and Na+ channels produce the side-effect profile — and the Na+ channel blockade is what kills in overdose.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine (NE)"],
  receptors: [
    "SERT (serotonin transporter)",
    "NET (norepinephrine transporter)",
    "α1-adrenergic receptor (antagonist)",
    "H1 histamine receptor (antagonist)",
    "M1 muscarinic receptor (antagonist)",
    "5-HT2A receptor (antagonist)",
    "5-HT2C receptor (antagonist)",
    "Cardiac fast Na+ channel (use-dependent blocker)",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // TCAs act on diffuse serotonergic + noradrenergic projection systems, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description:
        "FDA-approved for depression in adults. Historically first-line, now rarely used as such — SSRIs replaced TCAs due to OVERDOSE SAFETY (equal efficacy, far safer). Reserved for patients who fail SSRIs/SNRIs or where TCA serum-level monitoring is desired. Typical depression dose 75–150 mg/day (up to 300 mg/day in refractory cases, ideally with inpatient ECG monitoring).",
      ageGroup: "Adults",
    },
    {
      name: "Neuropathic pain (diabetic neuropathy, postherpetic neuralgia)",
      status: "off-label",
      description:
        "Amitriptyline is the #1 off-label use — first-line for many neuropathic pain syndromes per NICE CG173. Works at MUCH lower doses (10–75 mg at night) than depression. Onset of pain relief is faster than for depression (days to weeks, not 4–6 weeks). Mechanism: dual 5-HT/NE blockade in descending inhibitory pain pathways plus NMDA and Na+ channel effects on nociceptive transmission.",
    },
    {
      name: "Migraine prophylaxis",
      status: "off-label",
      description:
        "#2 off-label use. Effective at low dose (10–50 mg at night). Reduces migraine frequency by ~50% in responders. Sedation + weight gain can be limiting. Onset of benefit typically 4–8 weeks. Preferred over propranolol/topiramate when comorbid insomnia, depression or anxiety.",
    },
    {
      name: "Fibromyalgia",
      status: "off-label",
      description:
        "Reduces pain, sleep disturbance and fatigue in fibromyalgia. Low dose 10–50 mg at night. Often combined with gabapentinoids. Evidence is moderate; duloxetine/milnacipran are FDA-approved alternatives.",
    },
    {
      name: "Chronic tension-type headache",
      status: "off-label",
      description:
        "Low-dose (10–25 mg at night) reduces frequency of chronic tension-type headaches. Mechanism similar to migraine prophylaxis — central sensitisation is attenuated.",
    },
    {
      name: "Insomnia (sleep maintenance)",
      status: "off-label",
      description:
        "Low dose 10–25 mg at night exploits the H1-blockade sedation effect. NOT a first-line hypnotic — reserve for patients with comorbid pain, migraine or depression where sedation is therapeutically useful. Anticholinergic burden makes it inappropriate in elderly (Beers criteria).",
    },
    {
      name: "Irritable bowel syndrome (IBS)",
      status: "off-label",
      description:
        "Low dose (10–25 mg at night) improves abdominal pain and global IBS symptoms, particularly in diarrhoea-predominant IBS (the anticholinergic effect slows gut motility). Useful when comorbid depression or insomnia is present.",
    },
    {
      name: "Nocturnal enuresis (in children)",
      status: "off-label",
      description:
        "Historically the standard pharmacological treatment for primary nocturnal enuresis in children ≥6 years (dose 10–25 mg at night). Largely supplanted by desmopressin, but still used in resistant cases. Mechanism unclear — may involve antidiuretic, anticholinergic and arousal-altering effects. ECG advisable before starting even in this age group.",
      ageGroup: "≥6 years",
    },
  ],

  contraindications: [
    {
      name: "Recent myocardial infarction",
      severity: "absolute",
      rationale:
        "TCAs are cardiotoxic — Na+ channel blockade slows conduction and predisposes to ventricular arrhythmia in already-compromised myocardium. Absolute contraindication during the acute recovery period (and ideally any time after MI).",
    },
    {
      name: "Pre-existing arrhythmias or conduction disease (heart block, bundle branch block)",
      severity: "absolute",
      rationale:
        "Na+ channel blockade worsens conduction disease — can precipitate complete heart block or ventricular arrhythmia. Avoid in any patient with second- or third-degree AV block, prolonged QTc, or known arrhythmia.",
    },
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. At least 14 days must elapse between discontinuation of an MAOI and initiation of amitriptyline.",
    },
    {
      name: "Narrow-angle (closed-angle) glaucoma",
      severity: "absolute",
      rationale:
        "M1-muscarinic blockade produces mydriasis — can precipitate acute angle-closure glaucoma in anatomically predisposed eyes. Ophthalmic emergency.",
    },
    {
      name: "Urinary retention",
      severity: "absolute",
      rationale:
        "M1 blockade on the bladder detrusor worsens retention — can precipitate acute obstruction, especially in elderly men with BPH.",
    },
    {
      name: "Benign prostatic hyperplasia (BPH) with obstruction",
      severity: "absolute",
      rationale:
        "Anticholinergic effect on bladder neck and prostate increases obstruction risk. Avoid; if a TCA is essential, use nortriptyline at lowest dose with urology input.",
    },
    {
      name: "Known hypersensitivity to amitriptyline or other TCAs",
      severity: "absolute",
      rationale: "Cross-reactivity within the TCA class is possible. Anaphylaxis and severe skin reactions reported.",
    },
    {
      name: "Seizure disorder",
      severity: "relative",
      rationale:
        "TCAs lower the seizure threshold in a dose-dependent manner. Avoid in patients with poorly controlled epilepsy; if essential, use lowest effective dose and ensure antiseizure medication is optimised.",
    },
    {
      name: "Active suicidal ideation",
      severity: "relative",
      rationale:
        "TCAs are LETHAL in overdose (10× dose can kill) — they are the #1 cause of antidepressant overdose death. Avoid prescribing to actively suicidal patients; if essential, supply limited quantities and consider depot/observed dosing.",
    },
    {
      name: "Elderly with cognitive impairment (Beers criteria)",
      severity: "relative",
      rationale:
        "Strong anticholinergic + sedating + orthostatic profile makes amitriptyline one of the highest-priority drugs to AVOID in older adults per the AGS Beers Criteria. Causes cognitive impairment, falls, delirium, urinary retention and constipation.",
    },
    {
      name: "Concurrent QTc-prolonging drugs",
      severity: "relative",
      rationale:
        "Additive QTc prolongation with amiodarone, sotalol, class Ia/Ic antiarrhythmics, antipsychotics, macrolides, fluoroquinolones, ondansetron raises torsades risk. Avoid combination; if essential, monitor ECG closely.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults (and OVERDOSE LETHALITY)",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour in short-term studies in children, adolescents, and young adults with MDD and other psychiatric disorders. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. AMITRIPTYLINE-SPECIFIC WARNING: TCAs have a NARROW THERAPEUTIC INDEX and are LETHAL in overdose — as little as 10× the therapeutic dose can cause fatal cardiac arrhythmia (Na+ channel blockade → QRS widening → VT/VF), seizures, anticholinergic toxicity, coma. TCAs remain the leading cause of antidepressant overdose death. NEVER prescribe amitriptyline to actively suicidal patients without careful consideration of risk; when prescribed, supply limited quantities and involve carers. This is the fundamental reason SSRIs replaced TCAs as first-line antidepressants — not efficacy (which is equivalent) but overdose safety.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dry mouth",
      frequency: "very-common",
      severity: "mild",
      description:
        "M1-muscarinic blockade reduces salivation. Often the first and most troublesome side effect. Can lead to dental caries with long-term use. Note: this is the hallmark of the TCA anticholinergic profile — far more pronounced than with SSRIs.",
      management: "Sip water, sugar-free gum, sugar-free lozenges. Regular dental review. Pilocarpine if severe.",
    },
    {
      name: "Constipation",
      frequency: "very-common",
      severity: "moderate",
      description:
        "M1 blockade slows gut motility. Can progress to paralytic ileus in susceptible patients (especially elderly). Dose-dependent.",
      management: "Increase fluids and dietary fibre. Osmotic laxative (lactulose) if needed. Stop drug if obstipation or abdominal distension — risk of ileus.",
    },
    {
      name: "Sedation / somnolence",
      frequency: "very-common",
      severity: "moderate",
      description:
        "H1-histamine blockade produces marked sedation. Often used therapeutically (low-dose for insomnia) but impairs daytime function in depression dosing. Worst in first 1–2 weeks; partial tolerance develops.",
      management: "Dose at night. Warn patient about driving/operating machinery in first 2 weeks. Switch to nortriptyline if sedation is limiting.",
    },
    {
      name: "Weight gain",
      frequency: "very-common",
      severity: "moderate",
      description:
        "H1 and 5-HT2C blockade increases appetite and cravings — particularly for carbohydrates. Can be 2–5 kg or more over months. Significant problem for long-term adherence.",
      management: "Dietary counselling. Switch to nortriptyline (less weight gain). Avoid in patients with obesity or diabetes where possible.",
    },
    {
      name: "Orthostatic hypotension / dizziness",
      frequency: "very-common",
      severity: "moderate",
      description:
        "α1-adrenergic blockade prevents compensatory vasoconstriction on standing — drop in systolic BP >20 mmHg. Major cause of falls in elderly. Often worst in first 2 weeks.",
      management: "Stand up slowly. Hydrate adequately. Avoid in elderly (Beers). Reduce dose or switch to nortriptyline (less α1 blockade).",
    },
    {
      name: "Blurred vision",
      frequency: "common",
      severity: "mild",
      description:
        "M1 blockade paralyses accommodation (cycloplegia) and dilates pupils (mydriasis). Particularly problematic for reading and night driving. Can precipitate angle-closure glaucoma in predisposed eyes.",
      management: "Reading glasses may help. Urgent ophthalmology review if eye pain, haloes, or red eye — possible acute angle closure.",
    },
    {
      name: "Urinary retention",
      frequency: "common",
      severity: "moderate",
      description:
        "M1 blockade on bladder detrusor impairs voiding. Especially problematic in elderly men with BPH. Can precipitate acute urinary obstruction requiring catheterisation.",
      management: "Reduce dose. Rule out BPH before starting. Stop drug if urinary hesitancy or post-void residual >200 mL.",
    },
    {
      name: "Cognitive impairment (especially elderly)",
      frequency: "common",
      severity: "moderate",
      description:
        "Central anticholinergic burden impairs attention, memory and executive function. In elderly can mimic or worsen dementia and precipitate delirium. Beers criteria — avoid.",
      management: "Avoid in elderly. If essential, use nortriptyline at lowest dose. Consider Mini-Cog at baseline and periodically.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "common",
      severity: "moderate",
      description:
        "Less than SSRIs but still common — reduced libido, erectile dysfunction, delayed orgasm. Multifactorial: anticholinergic, α1-blockade and serotonergic effects.",
      management: "Dose reduction if possible. Add bupropion. Switch to bupropion or mirtazapine if problematic.",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Sweating (especially nocturnal)",
      frequency: "common",
      severity: "mild",
      description:
        "Paradoxical sweating despite anticholinergic effect — likely serotonergic effect on hypothalamic thermoregulation. Distressing but benign.",
      management: "Reassure. Reduce dose if severe. Cool bedroom, moisture-wicking sleepwear.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Cardiac arrhythmia (signature — potentially fatal, especially in overdose)",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Fast Na+ channel blockade slows phase 0 depolarisation in ventricular myocytes → QRS widening → ventricular tachycardia / fibrillation. Also QTc prolongation → torsades de pointes. THIS is the overdose killer — as little as 10× therapeutic dose can be fatal. Even at therapeutic doses, arrhythmia can occur in patients with pre-existing cardiac disease or with CYP2D6 inhibitors raising TCA levels.",
      management: "ECG monitoring essential. QRS >100 ms is a red flag → stop drug, consider IV sodium bicarbonate. In overdose: IV sodium bicarbonate (1–2 mEq/kg) to overcome Na+ channel blockade, alkalinise serum (pH 7.45–7.55) to increase protein binding, hyperventilate, IV lidocaine for VT. AVOID class Ia/Ic antiarrhythmics (quinidine, procainamide, flecainide — additive Na+ blockade).",
    },
    {
      name: "QRS widening on ECG",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Direct consequence of Na+ channel blockade. QRS >100 ms predicts significant toxicity and risk of ventricular arrhythmia. Dose-dependent but individual susceptibility varies widely.",
      management: "Stop amitriptyline. Check level. IV sodium bicarbonate if QRS >100 ms or symptomatic. Cardiology consult.",
    },
    {
      name: "QTc prolongation / torsades de pointes",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Blockade of cardiac K+ channels (hERG) prolongs QTc. Risk of polymorphic VT (torsades) — especially with hypokalaemia, hypomagnesaemia, bradycardia, or concurrent QTc-prolonging drugs.",
      management: "Correct K+/Mg2+. Stop amitriptyline. IV magnesium sulfate for torsades. Avoid all other QTc-prolonging drugs.",
    },
    {
      name: "Seizures",
      frequency: "uncommon",
      severity: "severe",
      description:
        "TCAs lower the seizure threshold in a dose-dependent manner. Common in overdose (up to 10–30% of significant overdoses). At therapeutic doses, risk is ~0.5–1% — higher in patients with epilepsy or head injury.",
      management: "Benzodiazepines (lorazepam) first-line. Avoid phenytoin (also Na+ channel blocker — may worsen). intubation and ventilatory support if recurrent or prolonged.",
    },
    {
      name: "Serotonin syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis) and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of combining with another serotonergic agent (SSRI, SNRI, MAOI, tramadol, triptan, St John's Wort, linezolid).",
      management: "Discontinue amitriptyline and any other serotonergic agents immediately. Supportive care — cooling, benzodiazepines. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU for hyperthermia >41°C.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "Agranulocytosis / blood dyscrasias",
      frequency: "rare",
      severity: "severe",
      description:
        "Rare but reported — agranulocytosis, neutropenia, thrombocytopenia, pancytopenia. Presents as fever, sore throat, infection, or bruising. Idiosyncratic, not dose-dependent.",
      management: "Stop drug. Urgent FBC. Haematology consult. Supportive — antimicrobials for infection.",
    },
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "severe",
      description:
        "Cholestatic or hepatocellular injury — usually within first 1–2 months. Rare but can be severe. Presents as jaundice, dark urine, abdominal pain, transaminitis.",
      management: "Stop drug. LFTs. Hepatology consult if severe. Avoid rechallenge.",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk. In TCAs, the risk is compounded by overdose lethality — a suicidal patient on amitriptyline has a more dangerous overdose vehicle than on an SSRI.",
      management: "Weekly contact during first month. Warn patient and family. Consider SSRI/SNRI first. Limit supply in at-risk patients.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description:
        "In patients with undiagnosed bipolar disorder, TCAs (like all antidepressants) can trigger a manic switch — possibly more than SSRIs due to the noradrenergic component. Screen for personal and family history of bipolar disorder before initiating.",
      management: "Discontinue if mancia emerges. Screen for bipolar disorder before initiating any antidepressant. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Acute angle-closure glaucoma",
      frequency: "rare",
      severity: "severe",
      description:
        "M1 blockade produces mydriasis — can precipitate acute angle closure in anatomically predisposed eyes (shallow anterior chamber). Ophthalmic emergency — presents with painful red eye, haloes, nausea, vision loss.",
      management: "Stop drug. Urgent ophthalmology review. Pilocarpine, topical beta-blocker, acetazolamide, mannitol as per glaucoma protocol.",
    },
    {
      name: "Paralytic ileus",
      frequency: "rare",
      severity: "severe",
      description:
        "Severe anticholinergic effect on gut → absence of bowel sounds, distension, obstipation. Particularly in elderly, postoperative, or those on other anticholinergics/opioids.",
      management: "Stop drug. Nasogastric decompression. IV fluids. Surgical review if perforation or persistent. Neostigmine in selected cases.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "common",
      severity: "moderate",
      description:
        "Less than SSRIs but real — cholinergic rebound (GI upset, sweating, headache, malaise), insomnia, vivid dreams, irritability if stopped abruptly. Worse after >2 months of use.",
      management: "Taper over at least 4 weeks. If symptoms emerge, return to previous dose and taper more slowly.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "ECG (baseline and after dose changes)",
      frequency: "Baseline ECG for all patients; mandatory if >50 years, any cardiac history, or starting dose >100 mg/day. Repeat after each significant dose titration.",
      rationale:
        "Na+ channel blockade → QRS widening and QTc prolongation → ventricular arrhythmia. QRS >100 ms predicts significant toxicity. ECG is the single most important safety test for TCAs.",
    },
    {
      parameter: "QRS duration on ECG",
      frequency: "At baseline and after dose titration; immediately in any suspected overdose.",
      rationale:
        "QRS >100 ms is the threshold for concern; >160 ms predicts high risk of ventricular arrhythmia and seizure. QRS widening precedes clinical deterioration in TCA toxicity — early detection is life-saving.",
    },
    {
      parameter: "Serum nortriptyline level (therapeutic window 50–150 ng/mL)",
      frequency: "At steady state (5–7 days after dose change); if poor response or suspected toxicity; in elderly; whenever a CYP2D6 inhibitor is added.",
      rationale:
        "Nortriptyline (the active metabolite) has a defined therapeutic window — UNIQUE among antidepressants. Below 50 ng/mL = likely ineffective; above 150 ng/mL = toxicity risk (arrhythmia, seizures, delirium). Levels are not routinely measured for amitriptyline itself but for nortriptyline if used or for combined amitriptyline + nortriptyline.",
    },
    {
      parameter: "Blood pressure / orthostatic vital signs",
      frequency: "Baseline, after each dose titration, and during first 4 weeks. Especially in elderly and patients on antihypertensives.",
      rationale:
        "α1 blockade causes orthostatic hypotension — major cause of falls in elderly. Measure BP lying and standing (drop >20 mmHg systolic = significant).",
    },
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. With TCAs, additional concern about overdose lethality — limit supply in at-risk patients.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 3 months, then every 6 months.",
      rationale:
        "H1 and 5-HT2C blockade causes significant weight gain (often 2–5 kg). Particularly important in diabetes, obesity, metabolic syndrome.",
    },
    {
      parameter: "LFTs & FBC",
      frequency: "Baseline; LFTs at 1 month then only if symptomatic. FBC if fever/sore throat.",
      rationale:
        "Hepatotoxicity and rare agranulocytosis are unpredictable. Patient should report fever, sore throat, jaundice, dark urine, abdominal pain immediately.",
    },
    {
      parameter: "Serum sodium (in elderly)",
      frequency: "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale:
        "Like SSRIs, TCAs can cause SIADH — risk highest in elderly females in first 2 weeks. Presents as headache, confusion, seizures.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism:
        "MAOIs inhibit monoamine breakdown. Combining with SERT/NET blockade causes massive serotonergic excess → potentially fatal serotonin syndrome. Also risk of hypertensive crisis from noradrenergic excess.",
      action:
        "Absolute contraindication. Wait 14 days after stopping MAOI before starting amitriptyline; 14 days after stopping amitriptyline before starting MAOI.",
    },
    {
      drug: "SSRIs — especially fluoxetine, paroxetine (CYP2D6 inhibitors)",
      severity: "major",
      mechanism:
        "Fluoxetine and paroxetine are strong CYP2D6 inhibitors → impair amitriptyline metabolism → raise TCA plasma levels → toxicity (arrhythmia, anticholinergic). Also additive serotonergic effect → serotonin syndrome.",
      action:
        "Avoid combination. If switching from SSRI to TCA, allow 4–5 half-lives (especially 5 weeks for fluoxetine). If essential, reduce amitriptyline dose by 50% and monitor levels + ECG.",
    },
    {
      drug: "Other serotonergic drugs (tramadol, triptans, St John's Wort, linezolid, dextromethorphan)",
      severity: "major",
      mechanism: "Additive serotonergic effect → serotonin syndrome.",
      action:
        "Avoid combination. If unavoidable, monitor closely for serotonin syndrome (especially in first month). Patient education about symptoms.",
    },
    {
      drug: "QTc-prolonging drugs (amiodarone, sotalol, class Ia/Ic antiarrhythmics, antipsychotics, macrolides, fluoroquinolones, ondansetron)",
      severity: "major",
      mechanism: "Additive QTc prolongation → torsades de pointes risk.",
      action:
        "Avoid combination. If essential, monitor ECG closely, correct K+/Mg2+, minimise other QTc-prolonging risk factors.",
    },
    {
      drug: "Antiarrhythmics (class Ia: quinidine, procainamide, disopyramide; class Ic: flecainide, propafenone)",
      severity: "contraindicated",
      mechanism:
        "Additive Na+ channel blockade → QRS widening, ventricular arrhythmia, AV block. Quinidine also inhibits CYP2D6 raising TCA levels.",
      action: "Absolute — do not combine. Use lidocaine (class Ib) if antiarrhythmic needed in TCA toxicity.",
    },
    {
      drug: "Other anticholinergic drugs (oxybutynin, solifenacin, tolterodine, atropine, antihistamines, antipsychotics)",
      severity: "major",
      mechanism:
        "Additive anticholinergic burden → severe dry mouth, constipation, urinary retention, ileus, delirium (especially elderly).",
      action: "Avoid combination. Review all medications for anticholinergic load (Anticholinergic Cognitive Burden scale).",
    },
    {
      drug: "Alcohol",
      severity: "major",
      mechanism:
        "Additive CNS depression (sedation, impairment) AND additive cardiotoxicity. Alcohol also impairs hepatic metabolism of TCA.",
      action: "Avoid alcohol — especially during initiation and dose titration. Counsel patient explicitly.",
    },
    {
      drug: "CYP2D6 inhibitors (fluoxetine, paroxetine, bupropion, quinidine, terbinafine)",
      severity: "major",
      mechanism:
        "CYP2D6 is the primary enzyme converting amitriptyline to nortriptyline. Inhibition raises parent amitriptyline levels disproportionately (more cardiotoxic than nortriptyline) → toxicity.",
      action: "Reduce amitriptyline dose by 30–50% if combination unavoidable. Monitor levels and ECG.",
    },
    {
      drug: "CYP2C19 inhibitors (fluvoxamine, omeprazole, esomeprazole, fluoxetine, moclobemide)",
      severity: "moderate",
      mechanism: "Reduce amitriptyline metabolism → raise plasma levels → toxicity.",
      action: "Reduce amitriptyline dose by 25–50%. Monitor levels.",
    },
    {
      drug: "Sympathomimetics (epinephrine, norepinephrine, pseudoephedrine, phenylephrine)",
      severity: "major",
      mechanism:
        "α1 blockade prevents uptake of exogenous catecholamines into neurons and prevents α1-mediated vasoconstriction → unopposed β stimulation → severe hypertension, arrhythmia.",
      action: "Avoid. If pressor required, use direct-acting agent at reduced dose with invasive BP monitoring. Even local anaesthetic with epinephrine (dentist) can be hazardous.",
    },
    {
      drug: "Thyroid hormone (levothyroxine)",
      severity: "moderate",
      mechanism:
        "TCAs + thyroid hormone → increased risk of cardiac arrhythmia. Thyroid augmentation of TCA therapy (used in refractory depression) requires careful ECG monitoring.",
      action: "Monitor ECG and thyroid function. Use lowest effective thyroid dose.",
    },
    {
      drug: "Diuretics (especially loop and thiazide)",
      severity: "moderate",
      mechanism:
        "Diuretic-induced hypokalaemia/hypomagnesaemia potentiates QTc prolongation from TCA → torsades risk.",
      action: "Monitor K+ and Mg2+. Replace aggressively. Consider potassium-sparing diuretic.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Amitriptyline is NOT the antidepressant of choice in pregnancy — sertraline is preferred. Available data do not show a clear increase in major congenital malformations, but data are limited. Third-trimester use is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding, hypotonia, anticholinergic withdrawal symptoms) in ~30% of exposed neonates. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks. If a TCA is essential, nortriptyline is generally preferred (more data, lower transfer). Do NOT stop abruptly if pregnancy is discovered — taper.",
    lactation:
      "Amitriptyline and nortriptyline transfer into breast milk — relative infant dose is low (~1–2%) but accumulation is possible due to long half-life. Monitor infant for sedation, poor feeding, anticholinergic effects (constipation, urinary retention). Sertraline is the preferred antidepressant in breastfeeding. If a TCA is essential, nortriptyline at the lowest effective dose, taken immediately after a feed, is generally considered compatible with breastfeeding.",
  },

  renalAdjustment:
    "No specific dose adjustment required in renal impairment — amitriptyline is metabolised hepatically and excreted mainly as metabolites. However, use cautiously in elderly or those with significant CKD — accumulation of active metabolites can occur. Monitor for anticholinergic effects and orthostatic hypotension; consider reducing dose by 25–50% in frail elderly with CKD.",

  hepaticAdjustment:
    "Reduce starting dose by 50% in any hepatic impairment (Child-Pugh A/B/C) — start at 10–25 mg at night, titrate slowly with at least 7 days between dose increases. Monitor serum nortriptyline levels if available (target 50–150 ng/mL) and ECG. Avoid in severe cirrhosis or acute hepatitis if possible; if essential, use the lowest effective dose with level-guided titration.",

  /* ---- Education ---- */
  patientExplanation:
    "Amitriptyline is a medicine that was originally developed to treat depression, but these days it is prescribed more often for other problems — nerve pain, migraine prevention, fibromyalgia, and sometimes sleep — usually at much lower doses than for depression. It works by raising the levels of two natural brain chemicals (serotonin and norepinephrine) that are involved in mood, sleep and pain signalling. Because it also affects several other receptors in the body, it can cause side effects like dry mouth, constipation, dizziness when standing up, sleepiness, and weight gain. The most important thing to know is that amitriptyline can be DANGEROUS in overdose — even a relatively small amount more than prescribed can affect the heart rhythm. That's why your doctor will only prescribe limited supplies and why you must NEVER take more than the prescribed dose. Don't stop suddenly — your doctor will show you how to taper off gradually. If you ever feel low, hopeless, or think about harming yourself, contact your doctor or emergency services immediately — never take extra tablets to cope.",

  patientEducationPoints: [
    "Don't stop abruptly — your doctor will taper the dose gradually over several weeks. Sudden stopping can cause cholinergic rebound (nausea, sweating, headache, insomnia, vivid dreams).",
    "If you miss a dose, take it when you remember unless it's within 8 hours of your next dose — in that case, skip the missed dose. NEVER take a double dose to make up for a missed one — too much amitriptyline at once can affect your heart.",
    "Report palpitations, fainting, dizziness on standing, or feeling like you might pass out immediately — these can be signs that the medicine is affecting your heart rhythm or blood pressure. Your doctor will arrange an ECG.",
    "Report fever, sore throat, mouth ulcers, easy bruising, or unusual tiredness immediately — rare but serious effects on blood cells can occur and need urgent blood tests.",
    "Don't combine with alcohol — it makes you much more drowsy, increases the risk of falls, and can stress your heart.",
    "Tell your doctor AND pharmacist about ALL other medicines you take — including over-the-counter cold remedies (pseudoephedrine, phenylephrine), painkillers (tramadol), herbal products (St John's Wort), and medicines for mood, heart, bladder or stomach. Several common drugs interact dangerously with amitriptyline.",
    "Don't drive or operate machinery in the first 1–2 weeks (or after dose increases) until you know how sleepy the medicine makes you. Stand up slowly from sitting or lying to reduce dizziness.",
    "Some side effects (dry mouth, constipation, sedation, weight gain) are very common — your doctor can suggest ways to manage them. Don't just stop the medicine; talk to your doctor first.",
    "If you feel low, hopeless, or have thoughts of harming yourself, contact your doctor, a crisis line, or emergency services immediately. Never take extra amitriptyline tablets — too much can be fatal.",
    "If you become pregnant or are planning pregnancy, tell your doctor — don't stop the medicine suddenly; the plan will need to be reviewed together. The same applies if you start breastfeeding.",
  ],

  clinicalPearls: [
    "Amitriptyline is the archetypal pharmacology 'dirty drug' — blocks SERT, NET, α1, H1, M1 AND cardiac Na+ channels. Students who memorise these six targets can predict every side effect and the overdose picture from first principles.",
    "TCAs are LETHAL in overdose — 10× the therapeutic dose can be fatal. TCAs are the #1 cause of antidepressant overdose death. This is THE thing students must know about this class. NEVER prescribe to actively suicidal patients without careful consideration and supply limitation.",
    "SSRIs replaced TCAs as first-line antidepressants because of OVERDOSE SAFETY, not efficacy — TCAs are equally effective antidepressants. The Cipriani 2018 Lancet network meta-analysis confirmed no significant efficacy difference between TCAs and SSRIs.",
    "Amitriptyline is metabolised to NORTRIPTYLINE — an active secondary-amine TCA with a defined THERAPEUTIC WINDOW (50–150 ng/mL). Below 50 = likely ineffective, above 150 = toxic. This is unique among antidepressants and is the single most testable monitoring fact in this class.",
    "Tertiary amine (amitriptyline, imipramine, clomipramine) = MORE side effects (more anticholinergic, more sedating, more cardiotoxic). Secondary amine (nortriptyline, desipramine) = FEWER side effects. When a TCA is needed, nortriptyline is usually preferred — fewer anticholinergic effects, defined therapeutic window, less cardiotoxic.",
    "Amitriptyline is now prescribed MORE for neuropathic pain and migraine prophylaxis than for depression — at MUCH lower doses (10–75 mg at night) than the depression dose (75–300 mg/day). Onset for pain is faster (days–weeks) than for depression (4–6 weeks).",
    "Avoid amitriptyline in elderly — AGS Beers Criteria. Anticholinergic + sedating + orthostatic + cardiotoxic profile makes it one of the highest-priority drugs to avoid in older adults. Falls, delirium, urinary retention, constipation, and cardiac events all increase.",
    "ECG monitoring is essential — baseline ECG for all, mandatory if >50 years or any cardiac history. QRS >100 ms is a red flag. QTc >450 ms (men) or >470 ms (women) warrants caution. Repeat ECG after dose titration.",
    "TCA overdose treatment: IV sodium bicarbonate (1–2 mEq/kg) is the specific antidote — it alkalinises serum (increasing TCA protein binding) AND provides a sodium load to overcome Na+ channel blockade. AVOID class Ia/Ic antiarrhythmics (additive Na+ blockade). Use lidocaine for VT if needed.",
    "Pain dose vs depression dose vs insomnia dose: neuropathic pain 10–75 mg at night; migraine prophylaxis 10–50 mg at night; insomnia 10–25 mg at night; depression 75–300 mg/day. The dose for pain/insomnia is roughly 1/10th the depression dose — emphasise this to patients and pharmacists.",
  ],

  examPearls: [
    "TCA mechanism = SERT + NET blockade PLUS α1, H1, M1 and cardiac Na+ channel blockade — the 'dirty drug'. Six targets, memorise them.",
    "Tertiary amine TCA (amitriptyline, imipramine, clomipramine) = MORE side effects. Secondary amine TCA (nortriptyline, desipramine) = FEWER side effects. When choosing a TCA, prefer nortriptyline.",
    "TCAs are LETHAL in overdose — #1 antidepressant overdose killer. As little as 10× dose can be fatal. Mechanism: Na+ channel blockade → QRS widening → VT/VF; also seizures, anticholinergic toxidrome, coma.",
    "TCA overdose triad: cardiovascular toxicity (QRS widening, arrhythmia, hypotension) + CNS toxicity (seizures, coma) + anticholinergic toxidrome (dry, red, hot, blind, mad, full).",
    "TCA overdose treatment = IV SODIUM BICARBONATE (1–2 mEq/kg) + supportive care. Alkalinises serum (pH 7.45–7.55) to increase protein binding AND provides Na+ load to overcome channel blockade. AVOID class Ia/Ic antiarrhythmics (quinidine, procainamide, flecainide — additive Na+ blockade); use lidocaine for VT.",
    "Anticholinergic toxidrome mnemonic: 'Blind as a bat (mydriasis/cycloplegia), mad as a hatter (delirium), red as a beet (flushed), hot as a hare (anhidrotic hyperthermia), dry as a bone (dry mucosae/skin), full as a flask (urinary retention)'. Treatment: supportive + physostigmine in selected pure anticholinergic cases (NOT for TCA overdose — risk of seizures/asystole).",
    "SSRIs replaced TCAs as first-line antidepressants due to OVERDOSE SAFETY, NOT efficacy. TCAs are equally effective. Cipriani 2018 Lancet network meta-analysis confirms comparable efficacy.",
    "Nortriptyline (active metabolite of amitriptyline) is the ONLY antidepressant with a defined THERAPEUTIC WINDOW: 50–150 ng/mL. Below 50 = ineffective, above 150 = toxic. Serum-level monitoring is standard for nortriptyline, unique in this class.",
    "Amitriptyline contraindications: recent MI, arrhythmias, heart block, MAOIs (14-day washout), narrow-angle glaucoma, urinary retention, BPH with obstruction. Beers criteria: avoid in elderly.",
    "CYP2D6 metabolism — strong inhibitors (fluoxetine, paroxetine, bupropion, quinidine) raise TCA levels significantly → reduce TCA dose by 30–50% and monitor ECG + levels.",
    "Beers Criteria: AVOID TCAs in elderly (anticholinergic, sedation, orthostasis, cardiotoxic). Falls, delirium, urinary retention, constipation, cardiac events all increase. If a TCA is essential, nortriptyline at lowest dose.",
    "Amitriptyline is now used MORE for neuropathic pain (NICE CG173 first-line), migraine prophylaxis, fibromyalgia, insomnia and IBS than for depression — at doses 1/10th the depression dose.",
    "ECG monitoring essential in TCA therapy: baseline ECG for all, mandatory if >50 years or cardiac history. QRS >100 ms = toxicity red flag. QTc >450 ms (men) / >470 ms (women) = caution.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "AMI = Amitriptyline",
      trick: "AMI = Anticholinergic · Many receptors (dirty drug) · In overdose lethal",
      remembers:
        "The three signature things to know about amitriptyline: anticholinergic toxidrome (M1), the 'dirty drug' multi-receptor profile, and overdose lethality (Na+ channel).",
    },
    {
      title: "'SHAM NS' — the 6 dirty-drug targets",
      trick: "SERT · H1 · α1 · M1 · NET · Sodium channel",
      remembers:
        "The six targets amitriptyline blocks. The first four (SERT, H1, α1, M1) produce the antidepressant effect AND the anticholinergic/sedating/orthostatic side effects. The last (Na+ channel) is the overdose killer. 'SHAM NS' = a dirty drug that puts you in a sham of health and may need Na+ bicarbonate.",
    },
    {
      title: "'10 × KILLS' — TCA overdose",
      trick: "10 × therapeutic dose = potentially FATAL. QRS >100 ms = danger. Bicarbonate = antidote.",
      remembers:
        "TCAs have a NARROW therapeutic index. Even 10× the dose can kill via Na+ channel blockade → QRS widening → VT/VF. Treat with IV sodium bicarbonate. This is THE #1 fact about TCAs.",
    },
    {
      title: "'Blind · Mad · Red · Hot · Dry · Full' — Anticholinergic Toxidrome",
      trick: "Blind as a bat · Mad as a hatter · Red as a beet · Hot as a hare · Dry as a bone · Full as a flask",
      remembers:
        "The six classic anticholinergic toxidrome features from M1 blockade: cycloplegia/mydriasis (blind), delirium (mad), flushed skin (red), anhidrotic hyperthermia (hot), dry mucosae (dry), urinary retention (full). Amitriptyline is one of the most common prescription-drug causes.",
    },
    {
      title: "'NORTRI 50–150' — therapeutic window",
      trick: "NORtriptyline = active metabolite of amiTRIPTYLINE. Therapeutic window 50–150 ng/mL.",
      remembers:
        "Nortriptyline is the ONLY antidepressant with a defined therapeutic window. Below 50 = ineffective. Above 150 = toxic. Unique monitoring fact — high-yield for exams. Note: nortriptyline is also a separate drug (secondary amine TCA), with fewer side effects than amitriptyline.",
    },
    {
      title: "'PAIN, MIGRAINE, SLEEP' — off-label triumvirate",
      trick: "Amitriptyline today = PAIN (neuropathic) · MIGRAINE (prophylaxis) · SLEEP (insomnia) — NOT depression",
      remembers:
        "Amitriptyline is now prescribed more for neuropathic pain, migraine prophylaxis and insomnia than for depression — at 1/10th the depression dose (10–75 mg vs 75–300 mg). The SSRI safety advantage (overdose) displaced TCAs from depression but not from chronic-pain use.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: TCA — tertiary amine. Blocks SERT + NET (like an SNRI) PLUS α1, H1, M1 and cardiac Na+ channels — the archetypal 'dirty drug'.",
    "Six targets: SERT, NET (antidepressant effect) + α1 (orthostatic hypotension) + H1 (sedation, weight gain) + M1 (anticholinergic) + Na+ channel (cardiotoxicity, overdose lethality).",
    "Metabolised to NORTRIPTYLINE (active secondary-amine TCA) — fewer side effects and a defined therapeutic window (50–150 ng/mL).",
    "Half-life: amitriptyline 10–28 h; nortriptyline 18–56 h. Hepatic metabolism via CYP2D6 (primary), CYP2C19, CYP1A2, CYP3A4.",
    "FDA indication: MDD. Major off-label: neuropathic pain, migraine prophylaxis, fibromyalgia, insomnia, IBS, nocturnal enuresis. Now prescribed more for pain/migraine/insomnia than depression.",
    "Dose: depression 75–300 mg/day; pain 10–75 mg at night; migraine 10–50 mg at night; insomnia 10–25 mg at night. Pain/insomnia dose ≈ 1/10th depression dose.",
    "Onset: depression 4–6 weeks; neuropathic pain/migraine/insomnia days–weeks.",
    "LETHAL in overdose — 10× dose can kill. #1 antidepressant overdose killer. Causes QRS widening → VT/VF (Na+ channel), seizures, anticholinergic toxidrome, coma. Treat with IV sodium bicarbonate.",
    "Anticholinergic toxidrome: 'Blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone, full as a flask'.",
    "Contraindications: recent MI, arrhythmias/heart block, MAOIs (14-day washout), narrow-angle glaucoma, urinary retention, BPH with obstruction. Beers criteria — avoid in elderly.",
    "Interactions: MAOIs (fatal serotonin syndrome), SSRIs especially fluoxetine/paroxetine (CYP2D6 inhibition raises TCA levels), QTc-prolonging drugs, antiarrhythmics (additive Na+ blockade), other anticholinergics, alcohol, sympathomimetics (unopposed β stimulation → hypertensive crisis).",
    "Monitoring: ECG at baseline (mandatory if >50 years or cardiac history), QRS duration, serum nortriptyline levels if available (50–150 ng/mL), orthostatic BP, mood/suicidality, weight, LFTs/FBC if symptomatic.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Neuropathic pain in a 58-year-old man with type 2 diabetes — low-dose amitriptyline with ECG monitoring",
      presentation:
        "A 58-year-old man with a 12-year history of type 2 diabetes presents with 4 months of bilateral burning foot pain, worse at night, interfering with sleep.",
      history:
        "Ramesh, a 58-year-old accountant, presents to his GP with a 4-month history of bilateral burning, tingling pain in both feet, worse at night, that 'feels like walking on hot sand'. Symptoms wake him 2–3 times per night and he now sleeps only 3–4 hours per night. He has type 2 diabetes (HbA1c 8.1%, on metformin + empagliflozin), hypertension (on ramipril + amlodipine), and hyperlipidaemia (on rosuvastatin). No prior psychiatric history — explicitly denies low mood. He drinks 4–5 units of alcohol per week, does not smoke. No known cardiac disease but his father had an MI at 65. He has tried paracetamol and ibuprofen with no relief. He is finding work difficult due to daytime fatigue from poor sleep and is worried he'll have to take early retirement.",
      examination:
        "Alert, oriented, cooperative. PHQ-9 score 6 (mild, primarily sleep-related items — not meeting MDD criteria). BMI 30. BP 142/86 lying, 138/84 standing. HR 76, regular. Distal symmetrical sensory loss to pinprick and vibration to the metatarsophalangeal joints bilaterally. Ankle reflexes absent. Foot pulses normal. No foot ulceration. ECG: sinus rhythm, normal QRS (90 ms), QTc 430 ms (normal). Creatinine 98 µmol/L, eGFR 78 mL/min. LFTs normal. HbA1c 8.1%.",
      diagnosis:
        "Painful diabetic distal symmetric polyneuropathy (ICD-10 E11.40 + G63.2). Differential includes peripheral arterial disease (excluded — pulses normal), tarsal tunnel syndrome (would be unilateral), and B12 deficiency (check level). Sleep disturbance is secondary to pain.",
      rationale:
        "Amitriptyline chosen because: (1) NICE CG173 recommends amitriptyline, duloxetine, gabapentin or pregabalin as first-line for neuropathic pain — amitriptyline is cheapest and has additional benefit for sleep (H1 sedation therapeutically useful here); (2) once-nightly dosing at low dose (10–25 mg) minimises daytime sedation and anticholinergic burden; (3) onset for pain is faster than for depression (days–weeks); (4) patient has cardiac risk factors (hypertension, family history of MI, age >50) so ECG monitoring is mandatory; (5) not currently depressed but PHQ-9 should be rechecked at follow-up. Duloxetine would be alternative (also covers his diabetic population) but more expensive and lacks the sleep benefit.",
      management:
        "Baseline ECG performed (QRS 90 ms, QTc 430 ms — both within normal limits, safe to proceed). Started amitriptyline 10 mg PO at night. Counseled: take 1 hour before bed; expect dry mouth and morning drowsiness in first 1–2 weeks (will reduce); stand up slowly from bed; avoid alcohol; do not stop suddenly; report palpitations, fainting or excessive dizziness; never exceed prescribed dose; limited 1-month supply (10 mg × 30). Plan: review at 2 weeks (tolerability + ECG if symptomatic), 4 weeks (pain response using Brief Pain Inventory + titrate to 25 mg if tolerated), 8 weeks (target dose 25–75 mg). Repeat ECG at 25 mg and again at 50 mg if dose escalated. Check HbA1c at 3 months (painful neuropathy is the canary for poor glycaemic control — diabetes optimisation is essential). Concurrent referral to diabetes educator for glycaemic optimisation and to podiatry for foot care. Patient given safety plan with crisis contacts.",
      outcome:
        "Week 2: dry mouth and mild morning grogginess — tolerable. Sleep improved from 3–4 hours to 6 hours per night. Pain 6/10 (was 8/10). ECG unchanged. Dose increased to 25 mg at night. Week 4: pain 4/10, sleep 7 hours per night, able to return to full work capacity. Dry mouth manageable with sugar-free gum. Week 8: pain 3/10, off-label analgesic responder. ECG at 25 mg: QRS 96 ms, QTc 435 ms — within normal limits. Plan: continue 25 mg at night, review every 6 months with ECG. HbA1c at 3 months improved to 7.2% with empagliflozin uptitration. Patient remains on amitriptyline 25 mg at night at 12-month follow-up with sustained benefit.",
      teachingPoints: [
        "For neuropathic pain, the amitriptyline dose (10–75 mg at night) is roughly 1/10th the depression dose (75–300 mg/day) — emphasise this to pharmacists and patients.",
        "ECG at baseline is essential for any patient >50 years or with cardiac risk factors before starting a TCA. Repeat ECG after each significant dose titration. QRS >100 ms or QTc >470 ms (women) / >450 ms (men) are red flags.",
        "Even though this patient is not depressed, the dual 5-HT/NE blockade in descending inhibitory pain pathways is the mechanism of pain relief — onset is faster (days–weeks) than for depression (4–6 weeks) because it doesn't require the same 5-HT1A autoreceptor desensitisation.",
        "The H1-mediated sedation is therapeutically USEFUL in this patient — improving sleep is part of the analgesic effect. In a depressed patient, the same sedation would be a side effect.",
        "Limited supply (1 month at a time) is prudent prescribing for any TCA because of overdose lethality — even in a non-depressed patient, circumstances and mood can change.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Amitriptyline vs Sertraline vs Venlafaxine vs Nortriptyline",
      primaryDrug: "Amitriptyline",
      rows: [
        {
          attribute: "Class",
          primaryValue: "TCA (tertiary amine)",
          comparisons: [
            { drug: "Sertraline", value: "SSRI" },
            { drug: "Venlafaxine", value: "SNRI" },
            { drug: "Nortriptyline", value: "TCA (secondary amine)" },
          ],
        },
        {
          attribute: "Mechanism (the 'dirty drug' row)",
          primaryValue: "SERT + NET + α1 + H1 + M1 + Na+ channel blockade ('dirty drug')",
          comparisons: [
            { drug: "Sertraline", value: "Selective SERT blockade only (clean)" },
            { drug: "Venlafaxine", value: "SERT + NET blockade (clean — like an SNRI)" },
            { drug: "Nortriptyline", value: "NET > SERT + weak α1/H1/M1 (less 'dirty' than amitriptyline)" },
          ],
        },
        {
          attribute: "Overdose lethality (the safety row)",
          primaryValue: "LETHAL — 10× dose can kill. #1 antidepressant overdose killer.",
          comparisons: [
            { drug: "Sertraline", value: "Safe in overdose — safer than TCAs (the reason SSRIs are first-line)" },
            { drug: "Venlafaxine", value: "Moderate — more toxic than SSRIs but less than TCAs" },
            { drug: "Nortriptyline", value: "Lethal in overdose (TCA class effect) but less than amitriptyline" },
          ],
        },
        {
          attribute: "Anticholinergic burden (the anticholinergic row)",
          primaryValue: "HIGH — dry mouth, constipation, urinary retention, blurred vision, cognitive impairment",
          comparisons: [
            { drug: "Sertraline", value: "Minimal" },
            { drug: "Venlafaxine", value: "Minimal" },
            { drug: "Nortriptyline", value: "Lower than amitriptyline (secondary amine)" },
          ],
        },
        {
          attribute: "Therapeutic drug monitoring (the therapeutic window row)",
          primaryValue: "Yes — nortriptyline (metabolite) target 50–150 ng/mL",
          comparisons: [
            { drug: "Sertraline", value: "No — no established therapeutic window" },
            { drug: "Venlafaxine", value: "No — no established therapeutic window" },
            { drug: "Nortriptyline", value: "Yes — UNIQUE among antidepressants: 50–150 ng/mL" },
          ],
        },
        {
          attribute: "Pain indication (the off-label pain row)",
          primaryValue: "Neuropathic pain, migraine prophylaxis, fibromyalgia, IBS — first-line for many",
          comparisons: [
            { drug: "Sertraline", value: "Not used for pain" },
            { drug: "Venlafaxine", value: "Some neuropathic pain benefit" },
            { drug: "Nortriptyline", value: "Same pain indications as amitriptyline — fewer side effects" },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "Marked (H1 blockade) — useful for insomnia",
          comparisons: [
            { drug: "Sertraline", value: "Mildly activating" },
            { drug: "Venlafaxine", value: "Neutral" },
            { drug: "Nortriptyline", value: "Moderate (less than amitriptyline)" },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "Significant (2–5 kg+ via H1 and 5-HT2C)",
          comparisons: [
            { drug: "Sertraline", value: "Mild" },
            { drug: "Venlafaxine", value: "Weight neutral" },
            { drug: "Nortriptyline", value: "Less than amitriptyline" },
          ],
        },
        {
          attribute: "Cardiac monitoring",
          primaryValue: "ECG at baseline + after dose changes. Mandatory if >50 yrs or cardiac history.",
          comparisons: [
            { drug: "Sertraline", value: "ECG only if cardiac history or with QTc-prolonging drugs" },
            { drug: "Venlafaxine", value: "BP monitoring (can cause hypertension at higher doses)" },
            { drug: "Nortriptyline", value: "Same ECG requirements as amitriptyline" },
          ],
        },
        {
          attribute: "Pregnancy/lactation",
          primaryValue: "Avoid — not drug of choice. Sertraline preferred.",
          comparisons: [
            { drug: "Sertraline", value: "SSRI of choice in pregnancy/lactation" },
            { drug: "Venlafaxine", value: "Generally avoided — limited data" },
            { drug: "Nortriptyline", value: "If TCA essential, nortriptyline preferred (more data)" },
          ],
        },
      ],
      takeaway:
        "Amitriptyline = the dirty drug that works for both depression AND pain — but kills in overdose. Sertraline = the safe all-rounder that displaced TCAs from first-line depression treatment. Venlafaxine = the SNRI that approximates the TCA mechanism without the dirty off-targets. Nortriptyline = the safer TCA — when a TCA is genuinely needed (e.g. refractory depression, neuropathic pain), nortriptyline is usually preferred over amitriptyline because it has fewer anticholinergic effects, less sedation, less cardiotoxicity and a defined therapeutic window (50–150 ng/mL) for monitoring.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute receptor blockade (side effects first)",
      description:
        "Within hours of the first dose, amitriptyline blocks SERT, NET, α1, H1, M1 and Na+ channels simultaneously. Patients typically notice dry mouth, sedation, and postural dizziness BEFORE any therapeutic benefit. Sleep is often improved the first night (H1 effect) — even before pain or mood benefits appear.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "Pain and sleep benefit (neuropathic pain / insomnia / migraine)",
      description:
        "For neuropathic pain, sleep and migraine prophylaxis, benefit can begin within days — much faster than for depression. The analgesic effect does not require the 5-HT1A autoreceptor desensitisation that delays the antidepressant effect. Anticholinergic side effects may peak and then partially improve as tolerance develops.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Autoreceptor desensitisation begins (depression path)",
      description:
        "For depression, somatodendritic 5-HT1A and α2 autoreceptors in the raphe nuclei and locus coeruleus begin to desensitise. Monoamine throughput to the prefrontal cortex, amygdala and hippocampus gradually increases. Sleep, appetite and energy often improve first — before mood.",
      phase: "onset",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "Steady-state serotonin and norepinephrine levels and full downstream neuroadaptive changes (BDNF, hippocampal neurogenesis, receptor downregulation) achieved. Mood typically reaches maximum improvement for depression. For neuropathic pain, full analgesic benefit is usually established by this point at the target dose.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 4–8",
      title: "Migraine prophylaxis full effect",
      description:
        "Migraine prophylaxis benefit typically takes 4–8 weeks to fully establish. Reduction in migraine frequency of ~50% is considered a good response. Continue for at least 3 months of benefit before considering taper.",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Months 3–6",
      title: "Maintenance",
      description:
        "For depression, continue treatment for 6–12 months after remission of the FIRST episode; longer (often indefinite) for recurrent episodes. For neuropathic pain or migraine prophylaxis, continue for 6–12 months of good response, then consider gradual taper to assess ongoing need. Recheck ECG periodically during long-term therapy.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Tapered withdrawal",
      description:
        "Sudden cessation causes cholinergic rebound (GI upset, sweating, headache, malaise), insomnia, vivid dreams and irritability — less common than SSRI discontinuation but real. Taper over at least 4 weeks; longer for high doses or long duration. For pain indications, taper is often faster (1–2 weeks) but still gradual.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why is amitriptyline considered dangerous compared to other antidepressants?",
      answer:
        "Amitriptyline has a narrow therapeutic index — meaning the dose that helps you is not far from the dose that can harm you. Taking 10× the prescribed dose can be FATAL because the medicine blocks sodium channels in the heart, causing dangerous irregular rhythms. This is why SSRIs (like sertraline) replaced TCAs (like amitriptyline) as the first-choice antidepressants — not because TCAs are less effective (they're equally effective) but because they're far more dangerous in overdose. Your doctor will only prescribe limited supplies and will not prescribe amitriptyline if you have active suicidal thoughts.",
    },
    {
      question: "Can I take amitriptyline with my other medications?",
      answer:
        "Amitriptyline interacts with MANY medications — you must tell your doctor and pharmacist about EVERYTHING you take, including over-the-counter products and herbal remedies. Particularly important: other antidepressants (especially fluoxetine or paroxetine — they raise amitriptyline levels), MAOIs (must never be combined — fatal), tramadol (pain), triptans (migraine), St John's Wort, certain antibiotics (macrolides, fluoroquinolones), antiarrhythmics, cold remedies containing pseudoephedrine or phenylephrine, and medicines for bladder or stomach (anticholinergics). Even dentist injections with epinephrine can be hazardous. Always check with your pharmacist before starting anything new.",
    },
    {
      question: "Why does amitriptyline cause dry mouth, constipation and blurred vision?",
      answer:
        "These are 'anticholinergic' side effects — amitriptyline blocks a receptor in the body called the muscarinic (M1) receptor. This receptor normally controls saliva production, gut movement, eye focusing and bladder emptying. When it's blocked, you get dry mouth, constipation, blurred vision (especially when reading) and sometimes urinary hesitancy. These effects are dose-dependent — higher doses cause more problems. The same effects are also why amitriptyline is on the 'Beers list' of drugs to avoid in elderly people (where they cause confusion, falls and urinary retention).",
    },
    {
      question: "Why do I need an ECG before and during treatment?",
      answer:
        "Amitriptyline can affect the heart's electrical conduction by blocking sodium channels — this shows up on an ECG as a widening of the QRS complex and sometimes a prolonged QTc interval. In overdose this is the cause of death. At normal doses, the risk is small but real, especially if you're over 50, have a heart condition, or take other medicines that affect the heart. Your doctor will check an ECG at the start (mandatory if you're over 50 or have any cardiac history) and repeat it after dose increases. If the QRS is wider than 100 ms, that's a warning sign — the dose may need reducing or the medicine stopped.",
    },
    {
      question: "Why is the dose for my pain/migraine/insomnia so much lower than for depression?",
      answer:
        "Good question. The antidepressant dose of amitriptyline is 75–300 mg per day, but the dose for neuropathic pain, migraine prophylaxis or insomnia is only 10–75 mg at night — roughly one-tenth. The reason is that the pain-relieving, sleep-restoring and migraine-preventing effects happen at lower concentrations than the antidepressant effect, and they involve different mechanisms (descending pain pathways and histamine-mediated sedation rather than the slow neuroadaptive changes needed for mood improvement). Starting low also minimises side effects — and the medicine is taken at night because it makes you sleepy.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Take the missed dose as soon as you remember, unless it's within 8 hours of your next scheduled dose — in that case, skip the missed dose and continue normally. NEVER take a double dose to make up for a missed one — too much amitriptyline at once can dangerously affect your heart rhythm. If you've missed several doses, contact your doctor — they may want you to restart at a slightly lower dose and re-titrate.",
    },
    {
      question: "Can I drink alcohol while taking amitriptyline?",
      answer:
        "Best avoided. Alcohol adds to the drowsiness caused by amitriptyline (and the combination can seriously impair your ability to drive or operate machinery), increases the risk of falls, and adds to the cardiac stress. This is especially important during the first few weeks and after any dose increase. If you do drink, keep it to a small amount and never combine with driving.",
    },
    {
      question: "What happens if I take too much amitriptyline?",
      answer:
        "Get emergency medical help IMMEDIATELY (call your local emergency number) — even if you feel fine at first. TCA overdose can cause irregular heart rhythms, seizures, dangerous drops in blood pressure and coma — and the situation can worsen rapidly. Don't try to make yourself sick. Take the medicine bottle with you to hospital. The specific treatment is intravenous sodium bicarbonate, which helps overcome the heart-rhythm effects. If you ever have thoughts of harming yourself or taking an overdose, contact your doctor, a crisis line, or emergency services immediately — never take extra amitriptyline.",
    },
  ],

  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "NICE Clinical Guideline CG173 — Neuropathic pain in adults: assessment and management",
      },
      {
        source: "American Geriatrics Society Beers Criteria for Potentially Inappropriate Medication Use in Older Adults (2023 update)",
        section: "TCAs listed as 'avoid' in older adults due to anticholinergic, sedating, orthostatic and cardiotoxic effects",
      },
      {
        source: "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder, 3rd edition",
        section: "TCAs positioned as alternative/second-line due to overdose safety concern",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents (TCA section)",
      },
      {
        source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
        section: "Section V — Pharmacotherapy of Mood Disorders (TCA section)",
      },
      {
        source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition",
        section: "Chapter 36 — Psychopharmacology (Tricyclic antidepressants)",
      },
    ],
    trials: [
      {
        source: "Cipriani A et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366.",
        section: "TCAs and SSRIs shown to have comparable efficacy — SSRIs better tolerated",
      },
      {
        source: "Moore RA et al. Amitriptyline for neuropathic pain and fibromyalgia in adults. Cochrane Database Syst Rev 2012;(12):CD008242.",
        section: "Definitive Cochrane review of amitriptyline for neuropathic pain — NNT ~3-4 for some benefit",
      },
    ],
    reviews: [
      {
        source: "Max MB et al. Effects of desipramine, amitriptyline, and fluoxetine on pain in diabetic neuropathy. N Engl J Med 1992;326:1250-1256.",
        section: "Classic RCT establishing TCA efficacy in painful diabetic neuropathy",
      },
      {
        source: "FDA Prescribing Information — ELAVIL (amitriptyline hydrochloride)",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/008683s079lbl.pdf",
      },
      {
        source: "Goldberg RJ. Clinical evaluation of amitriptyline and peripheral neuropathy. Psychosomatics 1981;22:167-172.",
        section: "Historical review of amitriptyline for chronic pain",
      },
    ],
    patientResources: [
      {
        source: "Royal College of Psychiatrists — Patient information on antidepressants",
        url: "https://www.rcpsych.ac.uk/mental-health/treatments-and-wellbeing/antidepressants",
      },
      {
        source: "NHS (UK) — Amitriptyline patient leaflet",
        url: "https://www.nhs.uk/medicines/amitriptyline/",
      },
      {
        source: "NIMH (National Institute of Mental Health) — Depression brochure",
        url: "https://www.nimh.nih.gov/health/publications/depression",
      },
    ],
  },

  relatedDrugs: [
    {
      name: "Nortriptyline",
      drugClass: "TCA (secondary amine)",
      relationship:
        "ACTIVE METABOLITE of amitriptyline. Also a separate antidepressant drug. Secondary amine → fewer anticholinergic/sedating effects than amitriptyline. The ONLY antidepressant with a defined therapeutic window (50–150 ng/mL) — serum-level monitoring is standard. Usually the preferred TCA when one is genuinely needed.",
    },
    {
      name: "Imipramine",
      drugClass: "TCA (tertiary amine)",
      relationship:
        "Fellow tertiary-amine TCA. Same 'dirty drug' multi-receptor profile as amitriptyline. The first TCA developed (1950s). Metabolised to desipramine (secondary amine). Historically used for nocturnal enuresis in children and depression. Same overdose lethality and ECG concerns.",
    },
    {
      name: "Clomipramine",
      drugClass: "TCA (tertiary amine)",
      relationship:
        "Fellow tertiary-amine TCA — most serotonergic of all TCAs, used for OCD. Same 'dirty drug' profile and overdose safety concern as amitriptyline. Metabolised to desmethylclomipramine (predominantly noradrenergic).",
    },
    {
      name: "Sertraline",
      slug: "sertraline",
      drugClass: "SSRI",
      relationship:
        "Replacement for amitriptyline as first-line depression treatment. SSRI displaced TCA due to OVERDOSE SAFETY (equal efficacy). Selective SERT blockade — no anticholinergic, no α1, no H1, no Na+ channel blockade. SSRI of choice in pregnancy/lactation.",
    },
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      drugClass: "SNRI",
      relationship:
        "Cleaner version of the TCA mechanism. Blocks SERT + NET (like amitriptyline) but WITHOUT the α1, H1, M1 and Na+ channel off-targets. Useful when a TCA would be considered but safety profile is needed. Watch BP — can cause hypertension at higher doses.",
    },
    {
      name: "Duloxetine",
      slug: "duloxetine",
      drugClass: "SNRI",
      relationship:
        "Alternative for neuropathic pain (FDA-approved for diabetic neuropathy and fibromyalgia). SERT + NET blockade without TCA off-targets. Useful when amitriptyline's anticholinergic burden is undesirable (e.g. elderly).",
    },
    {
      name: "Bupropion",
      slug: "bupropion",
      drugClass: "NDRI",
      relationship:
        "Augmentation partner for partial TCA response — reverses TCA-induced sexual dysfunction via dopaminergic mechanism. Also a strong CYP2D6 inhibitor — will RAISE TCA levels, so reduce TCA dose by 30–50% if combined. Avoid in seizure disorder.",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      drugClass: "NaSSA",
      relationship:
        "Shares the H1-blockade sedation and weight-gain profile with amitriptyline (both cause weight gain + sedation). Used as a safer alternative when sedation + weight gain is therapeutically desired (e.g. depressed patient with severe insomnia and weight loss). Lower overdose risk than TCAs.",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Diabetic Neuropathy", relationship: "off-label" },
    { name: "Postherpetic Neuralgia", relationship: "off-label" },
    { name: "Migraine (prophylaxis)", relationship: "off-label" },
    { name: "Fibromyalgia", relationship: "off-label" },
    { name: "Insomnia", relationship: "off-label" },
    { name: "Irritable Bowel Syndrome", relationship: "off-label" },
    { name: "Nocturnal Enuresis", relationship: "off-label" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Amitriptyline", type: "drug", href: "/drugs/amitriptyline", note: "The drug you're reading about" },
    { label: "TCA (Tricyclic Antidepressant)", type: "class", href: "#mechanism", note: "Tertiary amine — the 'dirty drug' class" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "↑ via SERT blockade" },
    { label: "Norepinephrine (NE)", type: "neurotransmitter", href: "#mechanism", note: "↑ via NET blockade" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Molecular target — shared with SSRIs/SNRIs" },
    { label: "α1-adrenergic receptor", type: "neurotransmitter", href: "#mechanism", note: "Blocked → orthostatic hypotension, falls" },
    { label: "H1 histamine receptor", type: "neurotransmitter", href: "#mechanism", note: "Blocked → sedation, weight gain" },
    { label: "M1 muscarinic receptor", type: "neurotransmitter", href: "#mechanism", note: "Blocked → anticholinergic toxidrome" },
    { label: "Cardiac Na+ channel", type: "neurotransmitter", href: "#mechanism", note: "Blocked → QRS widening, overdose lethality" },
    { label: "QRS prolongation", type: "side-effect", href: "#side-effects", note: "Signature ECG sign of TCA toxicity — QRS >100 ms = danger" },
    { label: "Anticholinergic toxidrome", type: "side-effect", href: "#side-effects", note: "'Blind/mad/red/hot/dry/full' — signature TCA side-effect profile" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood + pain regulation" },
    { label: "Neuropathic pain", type: "condition", href: "#clinical-uses", note: "#1 off-label use — NICE CG173 first-line" },
    { label: "Migraine prophylaxis", type: "condition", href: "#clinical-uses", note: "#2 off-label use — low dose at night" },
    { label: "Patient Guide — Starting amitriptyline for pain or sleep", type: "patient-guide", href: "#patient-education", note: "ECG monitoring, dose differences, safety counselling" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A medicine originally for depression — now mostly used for nerve pain, migraine prevention and sleep — that needs careful monitoring because it can be dangerous in overdose.",
    summary:
      "Amitriptyline is a medicine that was first developed to treat depression, but these days it is prescribed more often for other problems — nerve pain, preventing migraines, fibromyalgia, and sleep difficulties — usually at much lower doses than for depression. It works by raising the levels of two natural brain chemicals (serotonin and norepinephrine) that are involved in mood, sleep and pain signalling. Because it also affects several other receptors in the body, it can cause side effects like dry mouth, constipation, dizziness when standing up, sleepiness and weight gain. The most important thing to know is that amitriptyline can be DANGEROUS in overdose — even a relatively small amount more than prescribed can affect the heart rhythm. That's why your doctor will only prescribe limited supplies.",
    mechanism:
      "Your brain uses chemicals called serotonin and norepinephrine to regulate mood, sleep and pain. Normally, after these chemicals are released between nerve cells, they're quickly taken back up (recycled). Amitriptyline blocks this recycling, so more of these chemicals stay available between the nerve cells for longer. Over time (days to weeks for pain/sleep, 4-6 weeks for depression), this helps your mood, sleep and pain-regulation systems work better. Amitriptyline also affects other receptors in the body — which is why it can cause dry mouth, drowsiness and other side effects — and it can affect the heart's rhythm, which is why the dose must be carefully controlled.",
    sideEffects:
      "Most people get some side effects — dry mouth, drowsiness, constipation, dizziness when standing up, and sometimes blurred vision or weight gain are very common. These are usually mild and often improve over the first few weeks. Some side effects — like sleepiness at night — can actually be helpful if you have trouble sleeping. More serious side effects are less common but you should know the warning signs: palpitations, fainting or feeling like you might pass out (could mean the heart is being affected — tell your doctor immediately); fever, sore throat or unusual bruising (could mean a blood problem — urgent blood test); and signs of serotonin syndrome (high fever, confusion, sweating, shaking, muscle twitching — emergency). The single most important safety rule: NEVER take more than the prescribed dose — too much amitriptyline at once can dangerously affect the heart.",
    monitoring:
      "Before you start, your doctor will usually arrange a heart tracing (ECG) — especially if you're over 50 or have any heart history. They'll repeat it after dose increases. If you're on a higher dose or having problems, they may check the level of the medicine in your blood (especially the nortriptyline by-product, which has a 'sweet spot' between 50 and 150). They'll also check your blood pressure lying and standing, ask about your mood and sleep, and check your weight periodically.",
    contraindications:
      "Don't take amitriptyline if you've had a recent heart attack, have a heart rhythm problem or heart block, have narrow-angle glaucoma, or have problems with urinary retention or severe prostate enlargement. Don't take it if you've taken an MAOI antidepressant in the last 14 days. If you're over 65, your doctor will usually prefer a different medicine because of the side-effect profile (Beers criteria).",
    interactions:
      "Amitriptyline interacts with MANY medicines — tell your doctor and pharmacist about everything you take, including over-the-counter products and herbal remedies. The most dangerous combinations are with other antidepressants (especially fluoxetine and paroxetine, which raise amitriptyline levels), MAOIs (must never be combined), tramadol (pain), triptans (migraine), St John's Wort, certain antibiotics (macrolides, fluoroquinolones), medicines for bladder or stomach (anticholinergics), and even some cold remedies containing pseudoephedrine or phenylephrine. Alcohol adds to the drowsiness and increases heart stress — best avoided.",
  },

  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Tryptomer", manufacturer: "Sun Pharma", strengths: "10mg, 25mg, 50mg, 75mg", note: "Among the most commonly prescribed amitriptyline brands in India" },
      { name: "Amitone", manufacturer: "Cipla", strengths: "10mg, 25mg, 75mg" },
      { name: "Elavil", manufacturer: "Ranbaxy", strengths: "10mg, 25mg, 50mg, 75mg" },
      { name: "Sarotena", manufacturer: "Intas", strengths: "10mg, 25mg, 50mg, 75mg" },
      { name: "Tryptomer SR", manufacturer: "Sun Pharma", strengths: "25mg, 50mg sustained release" },
    ],
    typicalDoses:
      "Depression: start 25-50mg nocte, titrate by 25-50mg every 3-7 days to 75-150mg nocte (max 200mg/day). Neuropathic pain / migraine prophylaxis / fibromyalgia: 10-75mg nocte (start LOW at 10mg, titrate slowly). In Indian government hospitals, lower starting doses (10-25mg nocte) are used to minimise anticholinergic and orthostatic side effects, especially in older adults. Maximum: 200mg/day for depression; chronic pain rarely exceeds 75mg/day.",
    prescribingScenarios: [
      "Now prescribed MORE for neuropathic pain (diabetic neuropathy, post-herpetic neuralgia) and migraine prophylaxis than for depression in Indian primary care.",
      "Used as a low-dose (10-25mg nocte) sleep aid in Indian general practice — though this is a non-recommended use that the Beers criteria cautions against in elderly.",
      "Available through District Mental Health Programme (DMHP) for depression where SSRIs are unavailable or unaffordable — but SSRIs are preferred first-line.",
      "Used in pain clinics for fibromyalgia and chronic tension-type headache at low dose (10-25mg).",
      "Used in tertiary psychiatry OPD for severe melancholic depression when SSRI trial has failed — but supervised due to overdose lethality.",
    ],
    availability: {
      governmentHospitals: true,
      privatePharmacies: true,
      urban: true,
      rural: true,
      note: "Widely available across India. Cheap generic amitriptyline is stocked in most pharmacies including rural ones. Available through DMHP centres in many states. Jan Aushadhi 10mg and 25mg tablets are widely stocked.",
    },
    costCategory: "low",
    costNote: "Generic amitriptyline is one of the cheapest antidepressants in India (approximately ₹0.5-2 per 25mg tablet). Branded versions (Tryptomer, Amitone, Sarotena) cost ₹1-3 per tablet. Jan Aushadhi generic is the most affordable. Cost varies by manufacturer and region.",
    monitoring:
      "In Indian government hospitals, monitoring is primarily clinical — symptom-based assessment, BP lying/standing, heart rate. ECG is recommended before starting in patients >50 years or with cardiac history, and after dose escalation, but is often not done in resource-limited settings due to access barriers. Serum nortriptyline (active metabolite) levels are used in tertiary centres for refractory depression — therapeutic window 50-150 ng/mL. PHQ-9 used in tertiary centres. Follow-up: 1 week (tolerability), 2 weeks (side effects + early response), 4 weeks (response), 6-8 weeks (full response). In private practice, ECG and serum levels are more commonly used.",
    patientCounselling: [
      "Take at night — it makes you sleepy so this helps with sleep and reduces daytime drowsiness.",
      "NEVER take more than the prescribed number of tablets — amitriptyline is dangerous in overdose and can affect your heart. If you ever feel like taking extra, call Tele-MANAS at 14416 immediately.",
      "It may take 4-6 weeks to feel the full benefit on mood; for nerve pain or migraine prevention, benefit may start sooner (1-2 weeks) at the lower doses used.",
      "Common side effects in the first 1-2 weeks — dry mouth, morning drowsiness, constipation, dizziness when standing up — usually settle as your body adjusts. Suck sugarless sweets for dry mouth, stand up slowly, increase fibre and fluids for constipation.",
      "Do NOT stop suddenly — your doctor will help you reduce the dose gradually.",
      "Avoid alcohol — it adds to the drowsiness and increases the risk of falls and heart rhythm problems.",
      "Tell your doctor about ALL your other medicines — amitriptyline interacts with many drugs including other antidepressants, fluoxetine/paroxetine (raise amitriptyline levels), tramadol, and even some cough/cold remedies.",
      "If you have any heart problems, palpitations, fainting, or feel like you might pass out — tell your doctor immediately. An ECG may be needed.",
      "If you feel worse, more agitated, or have new suicidal thoughts, contact your doctor immediately or call Tele-MANAS at 14416. The tablets will be dispensed in limited supply for safety reasons.",
      "If you are pregnant, planning pregnancy, or breastfeeding — tell your doctor before starting. Amitriptyline is generally avoided in older adults (≥65) due to side effects; ask your doctor if a different medicine would be better.",
    ],
  },

  /* NMC CBME competency mapping */
  cbmeMapping: {
    subject: "Pharmacology",
    mbbsYear: "Second Professional",
    topic: "Drugs acting on Central Nervous System — Antidepressants (Tricyclics) and Chronic Pain",
    competencyCodes: ["PH7.3", "PH7.4", "PY3.2"],
    competencyDescriptions: [
      "PH7.3: Describe the mechanism of action, pharmacological actions, adverse effects, contraindications, and therapeutic uses of tricyclic antidepressants (TCAs) with emphasis on amitriptyline.",
      "PH7.4: Explain the rationale for TCA dose individualisation, therapeutic drug monitoring (nortriptyline 50-150 ng/mL), ECG monitoring, and overdose management (sodium bicarbonate for QRS widening).",
      "PY3.2 (Psychiatry, Final Professional): Describe the place of TCAs in modern psychiatric practice — second-line after SSRIs, role in melancholic depression, neuropathic pain, migraine prophylaxis, and overdose lethality.",
    ],
    integrationSubjects: ["Psychiatry", "General Medicine", "Emergency Medicine", "Community Medicine"],
  },

  /* Exam Lens — structured by Indian examination */
  examLens: {
    mbbs: {
      viva: [
        "What is the mechanism of action of amitriptyline? (TCA — blocks SERT + NET, plus α1, H1, M1 muscarinic, and Na+ channels — that's why it's called a 'dirty drug' with many side effects.)",
        "Why is amitriptyline the #1 antidepressant overdose killer? (Na+ channel blockade → QRS widening → ventricular arrhythmias; plus anticholinergic toxidrome, hypotension from α1 blockade, seizures from GABA antagonism.)",
        "What is the active metabolite of amitriptyline, and what is its therapeutic window? (Nortriptyline — therapeutic window 50-150 ng/mL. Levels used to guide dosing in refractory depression.)",
        "Name 5 receptor/channel targets of amitriptyline that explain its side effects. (SERT → therapeutic; NET → therapeutic + tremor/tachycardia; α1 → orthostatic hypotension; H1 → sedation/weight gain; M1 → dry mouth/constipation/urinary retention/blurred vision; Na+ channel → QRS widening/arrhythmia.)",
        "What is the Beers criteria caution for amitriptyline in elderly? (Avoid in ≥65 years — strong anticholinergic, sedation, orthostatic hypotension → falls, confusion. Use SSRIs instead.)",
        "How do you treat amitriptyline overdose? (Supportive + IV sodium bicarbonate for QRS >100ms or ventricular arrhythmia; benzodiazepines for seizures; avoid Class Ia/Ic antiarrhythmics; ICU monitoring.)",
      ],
      practical: [
        "Counsel a patient starting amitriptyline for diabetic neuropathy — address onset, side effects, overdose safety, and follow-up.",
        "Write a prescription for amitriptyline 25mg nocte for a 45-year-old with neuropathic pain.",
        "Identify the contraindications of amitriptyline from a clinical scenario (e.g., recent MI, narrow-angle glaucoma, elderly).",
        "Explain the monitoring schedule for a patient on amitriptyline 75mg for depression (ECG, BP, nortriptyline level).",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics, adverse effects, and therapeutic uses of tricyclic antidepressants with special reference to amitriptyline. Discuss the management of TCA overdose.",
        "A 55-year-old man with diabetic neuropathy is started on amitriptyline 25mg nocte. Discuss the pharmacological rationale, dose titration, monitoring, and patient counselling. Address the safety concerns in overdose.",
      ],
    },
    neetPg: {
      highYield: [
        "Amitriptyline = 'dirty drug' — blocks SERT + NET + α1 + H1 + M1 + Na+ channels. Every target explains a side effect.",
        "TCA overdose = #1 antidepressant overdose killer. ECG shows QRS widening (>100ms = severe, >160ms = life-threatening). Treat with IV sodium bicarbonate.",
        "Anticholinergic toxidrome: dry as a bone, red as a beet, hot as a hare, blind as a bat, mad as a hatter. Treat with physostigmine if severe (rarely needed).",
        "Active metabolite nortriptyline — therapeutic window 50-150 ng/mL. Only TCA with established therapeutic drug monitoring.",
        "Beers criteria: avoid amitriptyline in ≥65 years (anticholinergic, sedation, orthostatic hypotension → falls).",
        "Now used MORE for neuropathic pain (10-75mg) and migraine prophylaxis than for depression — at much lower doses than the 75-150mg used for depression.",
        "CYP2D6 metabolism — fluoxetine and paroxetine (CYP2D6 inhibitors) raise TCA levels → risk of toxicity. Fluvoxamine (CYP1A2) also raises clomipramine levels.",
        "Lethal dose: as little as 10-15 mg/kg in adults; even smaller in children. Limited dispense quantities are essential in suicidal patients.",
        "Orthostatic hypotension (α1 blockade) is the most common reason elderly patients stop the drug — and a major fall risk.",
        "QTc prolongation + Na+ channel blockade = torsades risk. Avoid combining with other QTc-prolonging drugs (macrolides, fluoroquinolones, antiarrhythmics).",
      ],
      pyqConcepts: [
        "NEET PG 2022: A patient on amitriptyline presents with QRS widening on ECG. What is the antidote? (Answer: IV sodium bicarbonate — alkalinises plasma and provides sodium load to overcome Na+ channel blockade.)",
        "NEET PG 2021: Which antidepressant is most lethal in overdose? (Answer: TCAs, especially amitriptyline — Na+ channel blockade causes fatal arrhythmias.)",
        "NEET PG 2020: Which TCA has a defined therapeutic window? (Answer: Nortriptyline — 50-150 ng/mL. Below 50 = subtherapeutic, above 150 = toxicity.)",
        "NEET PG 2019: A 70-year-old on amitriptyline for insomnia develops confusion and falls. What is the most likely cause? (Answer: Beers criteria — amitriptyline's anticholinergic burden and orthostatic hypotension in elderly.)",
        "INICET 2021: A patient with depression is on fluoxetine 40mg and is switched to amitriptyline. What is the risk? (Answer: Fluoxetine inhibits CYP2D6 → raises amitriptyline levels → TCA toxicity. Need washout and dose adjustment.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 30-year-old woman with depression is brought to the ER unconscious. Empty amitriptyline bottle found. ECG shows QRS 140ms. What is the immediate management? (Answer: ABC, IV access, IV sodium bicarbonate bolus to target QRS <100ms, IV fluids, benzodiazepine if seizures, ICU admission, avoid Class Ia/Ic antiarrhythmics. Continuous cardiac monitoring.)",
        "A 65-year-old man with diabetic neuropathy is on amitriptyline 50mg nocte. He reports dizziness on standing and a recent fall. BP 140/80 supine, 110/70 standing. What is the mechanism and management? (Answer: α1 blockade causing orthostatic hypotension — common in elderly. Reduce dose, change to SNRI (duloxetine) or gabapentinoid, advise stand-up slowly, increase fluids.)",
        "A 50-year-old woman with depression has failed SSRI trial. You want to start amitriptyline. What baseline investigations and counselling? (Answer: ECG (QTc, QRS), BP lying/standing, serum sodium, review current meds (no MAOI within 14 days, no fluoxetine/paroxetine), counsel on sedation, dry mouth, orthostatic hypotension, overdose danger, 4-6 week onset. Dispense limited supply.)",
        "A 28-year-old with depression is on amitriptyline 100mg nocte. Nortriptyline level comes back at 180 ng/mL. He complains of dry mouth, constipation, and tremor. What is the interpretation and management? (Answer: Nortriptyline level above therapeutic window (50-150) — toxicity. Reduce dose, recheck level in 1-2 weeks, target 50-150 ng/mL. Address CYP2D6 inhibitors if any.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Amitriptyline mechanism: blocks SERT + NET + α1 + H1 + M1 + Na+ channels.",
        "Most common side effects: anticholinergic (dry mouth, constipation, urinary retention), sedation, orthostatic hypotension, weight gain.",
        "TCA overdose: QRS widening, ventricular arrhythmias, seizures, anticholinergic toxidrome — IV sodium bicarbonate is the antidote.",
        "Beers criteria: avoid in elderly (≥65) due to anticholinergic burden and fall risk.",
        "Active metabolite nortriptyline — therapeutic window 50-150 ng/mL.",
        "Contraindications: recent MI, heart block, arrhythmias, narrow-angle glaucoma, MAOI within 14 days.",
        "Use in neuropathic pain and migraine prophylaxis at low dose (10-75mg).",
        "CYP2D6 inhibitors (fluoxetine, paroxetine) raise TCA levels — risk of toxicity.",
        "Orthostatic hypotension (α1 blockade) is the most common cardiovascular side effect.",
        "Onset of action: 4-6 weeks for depression; 1-2 weeks for neuropathic pain at low dose.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "TCA selection in modern practice: clomipramine for OCD (only TCA that works), amitriptyline for melancholic depression with insomnia + weight loss (sedation + weight gain can be therapeutic), doxepin for depression with severe insomnia, nortriptyline when therapeutic drug monitoring is needed.",
        "Nortriptyline therapeutic window 50-150 ng/mL — below 50 → non-response; above 150 → toxicity. Use level monitoring to optimise dose, especially in non-responders, elderly, or those on CYP2D6 inhibitors. Levels drawn at steady state (5 half-lives, ~5 days).",
        "TCA overdose is the leading cause of antidepressant-related death. Lethal dose: 10-15 mg/kg. Always prescribe limited supplies (1-2 weeks) for patients with any suicidality. SSRIs are markedly safer in overdose — a key reason they replaced TCAs as first-line.",
        "ECG changes in TCA overdose: sinus tachycardia (anticholinergic + NE reuptake), PR prolongation, QRS widening (Na+ channel blockade — marker of severity), QTc prolongation. QRS >100ms = serious; >160ms = high risk of ventricular arrhythmia.",
        "TCA + SSRI switching: stop SSRI, wait appropriate washout (5 half-lives), then start TCA at LOW dose and titrate slowly. Fluoxetine needs 5-week washout due to norfluoxetine. Avoid simultaneous use — CYP2D6 inhibition + additive serotonergic effect.",
        "For neuropathic pain, amitriptyline 10-25mg nocte is first-line per NICE CG173 — combined with pregabalin/gabapentin for synergistic effect (SNRI like duloxetine is alternative). Effect on pain is independent of antidepressant effect — works in non-depressed patients too.",
        "Beers criteria 2023: amitriptyline listed as 'Avoid' in ≥65 years due to anticholinergic, sedating, and orthostatic properties. If a TCA is essential in elderly, nortriptyline is preferred (less anticholinergic, less orthostatic) — but SSRIs/SNRIs are preferred first.",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "Place in depression treatment",
      internationalSource: "NICE CG91 / APA Practice Guideline",
      internationalRecommendation: "SSRIs are first-line. TCAs including amitriptyline are reserved for severe/melancholic depression, treatment-resistant cases, or when sedation/weight gain is therapeutically useful.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — SSRIs first-line. TCAs are second-line for severe depression with melancholic features, insomnia, or weight loss. Amitriptyline still used in resource-limited settings due to low cost, but overdose risk favours SSRIs.",
    },
    {
      topic: "Use in neuropathic pain",
      internationalSource: "NICE CG173 (Neuropathic pain in adults)",
      internationalRecommendation: "Amitriptyline is one of 4 first-line options (with duloxetine, gabapentin, pregabalin) for neuropathic pain (excluding trigeminal neuralgia). Start at 10mg nocte, titrate to effect, max 75mg/day.",
      indianSource: null,
      indianRecommendation: "No dedicated IPS guideline on neuropathic pain pharmacotherapy. Indian practice follows NICE — amitriptyline 10-25mg nocte is widely used in primary care for diabetic neuropathy, post-herpetic neuralgia. Lower doses than for depression. Current section reflects accepted clinical practice and internationally accepted evidence.",
    },
    {
      topic: "Use in elderly (≥65 years)",
      internationalSource: "AGS Beers Criteria 2023",
      internationalRecommendation: "Amitriptyline listed as 'Avoid' in older adults due to strong anticholinergic properties, sedation, and orthostatic hypotension — fall and cognitive risk.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS acknowledges Beers criteria. In Indian practice, low-dose amitriptyline (10-25mg) is still sometimes used in elderly for neuropathic pain or sleep, but this should be discouraged. SSRIs (sertraline, escitalopram) or pregabalin/gabapentin are preferred.",
    },
    {
      topic: "Use in migraine prophylaxis",
      internationalSource: "AAN / AHS Guidelines",
      internationalRecommendation: "Amitriptyline 10-75mg nocte is recommended for migraine prophylaxis — Level A evidence (alongside propranolol, topiramate, valproate). Particularly useful when migraine coexists with insomnia or tension-type headache.",
      indianSource: "Indian Headache Society",
      indianRecommendation: "Indian Headache Society guidelines include amitriptyline as a first-line prophylactic agent. Dose 10-50mg nocte. Useful in Indian practice due to low cost. Often combined with propranolol if single-agent inadequate.",
    },
    {
      topic: "Overdose safety and prescribing practice",
      internationalSource: "FDA / NICE",
      internationalRecommendation: "TCAs carry significant overdose risk. Prescribe limited supplies (1-2 weeks) in patients with suicidality. SSRIs preferred when overdose risk exists.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — limit dispense quantity for at-risk patients. In India, loose tablet dispensing from pharmacies without strict prescription control is a barrier; advocate for blister packs and limited supply. Tele-MANAS 14416 for crisis support.",
    },
  ],

  /* Indian reference sources */
  indianReferences: [
    {
      source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition",
      type: "textbook",
      section: "Chapter 33 — Antidepressant Drugs (TCAs section)",
    },
    {
      source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression",
      type: "guideline",
      section: "Section on pharmacotherapy — TCAs as second-line",
    },
    {
      source: "NMC CBME Curriculum — Pharmacology (Second Professional)",
      type: "curriculum",
      section: "Topic: Drugs acting on CNS — Antidepressants (TCAs)",
    },
    {
      source: "NMC CBME Curriculum — Psychiatry (Final Professional)",
      type: "curriculum",
      section: "Topic: Psychopharmacology — TCAs and overdose management",
    },
    {
      source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)",
      type: "regulatory",
      section: "Essential medicines — amitriptyline included in DMHP drug kit",
    },
    {
      source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416",
      type: "regulatory",
      section: "Crisis support for patients at overdose risk",
      url: "tel:14416",
    },
    {
      source: "CDSCO — Central Drugs Standard Control Organisation",
      type: "regulatory",
      section: "Amitriptyline — Schedule H prescription status",
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
      { source: "NICE CG91", recommendation: "SSRIs first-line; TCAs (including amitriptyline) reserved for severe or treatment-resistant depression." },
      { source: "NICE CG173", recommendation: "Amitriptyline is a first-line option for neuropathic pain (excluding trigeminal neuralgia) at 10-75mg nocte." },
      { source: "AGS Beers Criteria 2023", recommendation: "Avoid amitriptyline in ≥65 years due to anticholinergic burden, sedation, orthostatic hypotension." },
      { source: "AAN/AHS Migraine Guidelines", recommendation: "Amitriptyline 10-75mg nocte is Level A prophylactic for migraine (especially with insomnia)." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS concurs SSRIs first-line; amitriptyline second-line for severe/melancholic depression." },
      { source: "Indian Headache Society", recommendation: "Amitriptyline 10-50mg nocte is first-line migraine prophylaxis — particularly useful due to low cost." },
      { source: null, recommendation: "No dedicated IPS guideline on neuropathic pain. Indian practice follows NICE CG173 with amitriptyline 10-25mg nocte first-line." },
    ],
    indianClinicalPractice:
      "In Indian practice, amitriptyline is now prescribed MORE for neuropathic pain (diabetic neuropathy, post-herpetic neuralgia) and migraine prophylaxis than for depression. In government hospitals under DMHP, it remains a low-cost second-line antidepressant where SSRIs are unaffordable. Low doses (10-25mg nocte) for pain are widely used by general physicians and GPs. In rural India, the very low cost (₹0.5-2 per tablet) makes it attractive, but overdose lethality is a major concern given easy availability and loose-tablet dispensing. Family physicians often prescribe 10-25mg nocte as a 'sleep aid' — a use that the Beers criteria cautions against in elderly. PHQ-9 and ECG monitoring are limited in primary care due to resource constraints; nortriptyline levels are used only in tertiary centres.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "Available in DMHP drug kit for depression when SSRIs are unavailable. Monitoring is clinical (BP, HR) — ECG often not done due to access barriers. Lower starting doses (10-25mg nocte) used. Limited supply dispensed for safety.",
    privateHospitals:
      "Used for neuropathic pain, migraine prophylaxis, and as second-line antidepressant for severe melancholic depression. ECG at baseline and after dose escalation. Nortriptyline levels in tertiary centres. PHQ-9 monitoring at 2/4/6 weeks.",
    medicalColleges:
      "Teaching drug for TCA pharmacology, anticholinergic toxidrome, and overdose management. Common OSCE scenario — TCA overdose ECG interpretation and sodium bicarbonate therapy. Featured in pharmacology practicals (prescription writing, patient counselling). Examined heavily in MBBS, NEET PG, INICET, FMGE.",
    primaryCare:
      "Widely prescribed in Indian general practice for neuropathic pain, migraine prophylaxis, and insomnia (low-dose, off-label). GPs often start 10-25mg nocte. Referral to psychiatrist if depression is severe or suicidal ideation present.",
    psychiatryOPD:
      "Second-line antidepressant in psychiatry OPD for SSRI-non-responsive melancholic depression. Dose 50-150mg nocte. ECG monitoring. Nortriptyline levels for refractory cases. Limited dispense quantity for at-risk patients.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ) — TCAs can trigger manic switch (more than SSRIs).",
      "Assess suicidal ideation — if present, choose SSRI instead, prescribe limited supply (1-2 weeks), involve family, give Tele-MANAS (14416) number.",
      "ECG at baseline — check QTc, QRS duration, PR interval. Essential in patients >50 years or with cardiac history.",
      "Check BP lying and standing — orthostatic hypotension is common, especially in elderly.",
      "Review concurrent medications — fluoxetine, paroxetine (CYP2D6 inhibitors), MAOIs (14-day washout), QTc-prolonging drugs (macrolides, fluoroquinolones).",
      "In elderly (≥65): consider Beers criteria — generally avoid amitriptyline. If essential, use nortriptyline at low dose.",
      "Check for narrow-angle glaucoma, urinary retention, benign prostatic hyperplasia, recent MI, heart block — contraindications.",
      "Counsel about 4-6 week onset for depression; 1-2 weeks for pain at low doses. Set expectation that side effects precede benefit.",
    ],
    duringTreatment: [
      "Week 1: assess tolerability — sedation, dry mouth, orthostatic dizziness, constipation. Reduce dose if severe.",
      "Week 2-4: review early response — sleep improves first, then appetite, then mood. Check orthostatic vitals.",
      "Week 4-6: assess response. If inadequate, titrate dose upward (depression 75-150mg). For pain, often 25-75mg sufficient.",
      "Recheck ECG after major dose increases (above 100mg/day) and in elderly.",
      "Check nortriptyline level at steady state (after 5+ days at constant dose) if non-responder or suspected toxicity — target 50-150 ng/mL.",
      "Watch for urinary retention (especially elderly men with BPH), acute angle-closure glaucoma, paralytic ileus.",
      "Monitor for overdose warning signs — ask about suicidal ideation at every visit; involve family in monitoring.",
    ],
    followUp: [
      "First follow-up at 1 week (tolerability + side effects).",
      "Second follow-up at 2-4 weeks (early response + titration).",
      "Third follow-up at 6-8 weeks (full response assessment).",
      "ECG at each significant dose change and every 6-12 months on stable therapy.",
      "If remission achieved: continue for 6-12 months for first episode, longer for recurrent.",
      "Before discontinuation: taper over 4+ weeks (anticholinergic rebound, withdrawal symptoms).",
      "In government hospitals: follow-up may be every 4-8 weeks — counsel family to watch for overdose risk and report mood changes immediately.",
    ],
    whenToRefer: [
      "Refer to psychiatrist if depression is severe, treatment-resistant, or suicidal ideation emerges.",
      "Refer urgently to emergency if TCA overdose suspected — call 112. QRS widening = sodium bicarbonate.",
      "Refer to cardiologist if ECG shows QRS >100ms, QTc >470ms (men) / >480ms (women), or new arrhythmia.",
      "Refer to ophthalmology if acute angle-closure glaucoma develops (eye pain, blurred vision, mid-dilated pupil).",
      "Refer to urology if urinary retention develops (especially elderly men with BPH).",
      "Refer to pain specialist or neurologist for refractory neuropathic pain — may need combination therapy or interventional options.",
      "Refer for CBT or other psychotherapy for depression — combined better than TCA alone.",
    ],
  },

  /* Exam frequency — star ratings */
  examFrequency: {
    neetPg: 5,
    inicet: 4,
    mbbsViva: 5,
    fmge: 5,
  },

  /* PYQ metadata — concept-level, no copyrighted content */
  pyqMetadata: [
    { exam: "NEET PG", year: 2022, concept: "TCA overdose — QRS widening and antidote", topic: "Antidepressant toxicity" },
    { exam: "NEET PG", year: 2021, concept: "Most lethal antidepressant in overdose", topic: "Antidepressant safety" },
    { exam: "NEET PG", year: 2020, concept: "Nortriptyline therapeutic window", topic: "TCA therapeutic drug monitoring" },
    { exam: "NEET PG", year: 2019, concept: "Beers criteria — avoid amitriptyline in elderly", topic: "Geriatric pharmacology" },
    { exam: "INICET", year: 2021, concept: "Fluoxetine + TCA interaction (CYP2D6)", topic: "Drug interactions" },
    { exam: "INICET", year: 2023, concept: "Anticholinergic toxidrome management", topic: "Toxicology" },
    { exam: "FMGE", year: 2022, concept: "Amitriptyline mechanism — 'dirty drug' receptors", topic: "TCA pharmacology" },
    { exam: "FMGE", year: 2021, concept: "Amitriptyline for neuropathic pain — dose", topic: "Pain management" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Government hospital setup",
      recommendation: "Amitriptyline remains in the DMHP drug kit as a low-cost antidepressant (₹0.5-2/tablet) when SSRIs are unavailable. However, SSRIs are preferred first-line due to overdose safety. For neuropathic pain, amitriptyline 10-25mg nocte is first-line.",
      alternative: "Sertraline or escitalopram for depression (safer in overdose). Gabapentin or pregabalin for neuropathic pain.",
    },
    {
      scenario: "Private psychiatry practice",
      recommendation: "Amitriptyline is second-line for severe melancholic depression with insomnia and weight loss — sedation and weight gain can be therapeutic. Dose 50-150mg nocte. ECG monitoring essential.",
      alternative: "Mirtazapine for depression with insomnia/weight loss (safer in overdose). Venlafaxine if TCA contraindicated.",
    },
    {
      scenario: "Neuropathic pain",
      recommendation: "Amitriptyline 10-25mg nocte is first-line for diabetic neuropathy and post-herpetic neuralgia per NICE CG173. Cheap and effective. Titrate to 75mg if needed.",
      alternative: "Duloxetine 30-60mg (preferred in painful diabetic neuropathy), pregabalin/gabapentin if TCA contraindicated.",
    },
    {
      scenario: "Migraine prophylaxis",
      recommendation: "Amitriptyline 10-50mg nocte is first-line per Indian Headache Society — particularly useful when migraine coexists with insomnia or tension-type headache. Low cost.",
      alternative: "Propranolol 40-80mg BD, topiramate 50-100mg, flunarizine 5-10mg nocte.",
    },
    {
      scenario: "Elderly (≥65 years)",
      recommendation: "Generally AVOID amitriptyline per Beers criteria — anticholinergic burden, sedation, orthostatic hypotension → falls, cognitive impairment. If TCA essential, use nortriptyline at low dose.",
      alternative: "Sertraline or escitalopram for depression. Gabapentinoid or duloxetine for neuropathic pain.",
    },
    {
      scenario: "Patient with suicidal ideation",
      recommendation: "AVOID amitriptyline — overdose lethality is too high. Use SSRI (sertraline) instead. If TCA is unavoidable, dispense only 1-2 weeks supply, involve family for monitoring.",
      alternative: "Sertraline (lowest overdose risk among antidepressants). ECT for severe suicidal depression.",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: true,
    note: "Available at Jan Aushadhi Kendras across India in 10mg and 25mg tablet strengths. Among the most affordable antidepressants in India. Generic name: Amitriptyline Hydrochloride Tablets IP.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents (TCAs section)" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants (TCAs)" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression and TCAs" },
      { source: "FDA Prescribing Information — Amitriptyline Hydrochloride", section: "Highlights of Prescribing Information" },
      { source: "NICE Clinical Guideline CG91 — Depression in adults", section: "Pharmacological treatment — TCAs as second-line" },
      { source: "NICE Clinical Guideline CG173 — Neuropathic pain in adults", section: "Amitriptyline as first-line option" },
      { source: "AGS Beers Criteria 2023", section: "Amitriptyline listed as 'Avoid' in ≥65 years" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs (TCAs)" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression", type: "guideline", section: "Section on pharmacotherapy — TCAs as second-line" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants (TCAs)" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional)", type: "curriculum", section: "Topic: Psychopharmacology — TCAs and overdose" },
      { source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)", type: "regulatory", section: "Essential medicines — amitriptyline in DMHP drug kit" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Crisis support for overdose risk", url: "tel:14416" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Amitriptyline — Schedule H prescription status" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose Amitriptyline",
    startNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "What is the indication?",
        branches: [
          { label: "Depression", next: "depression" },
          { label: "Neuropathic pain", next: "pain" },
          { label: "Migraine prophylaxis", next: "migraine" },
          { label: "Insomnia (off-label)", next: "insomnia" },
        ],
      },
      {
        id: "depression",
        question: "Depression — what is the clinical picture?",
        recommendation: "Use amitriptyline only as second-line after SSRI failure, particularly for melancholic depression with insomnia and weight loss. Dose 50-150mg nocte.",
        reasoning: "Amitriptyline's sedation and weight-gain effects can be therapeutically useful in melancholic depression. However, SSRIs are first-line due to overdose safety. Limited dispense quantity for suicidal risk.",
        branches: [
          { label: "With suicidal ideation", next: "avoid-suicidal" },
          { label: "Elderly (≥65)", next: "avoid-elderly" },
          { label: "Suitable candidate", next: "start-depression" },
        ],
      },
      {
        id: "pain",
        question: "Neuropathic pain (diabetic neuropathy, post-herpetic neuralgia)",
        recommendation: "Amitriptyline 10-25mg nocte, titrate to 75mg. First-line per NICE CG173.",
        reasoning: "TCAs work in neuropathic pain via NET blockade (descending inhibition) independent of antidepressant effect. Lower doses than for depression. Often combined with pregabalin/gabapentin for synergy.",
      },
      {
        id: "migraine",
        question: "Migraine prophylaxis",
        recommendation: "Amitriptyline 10-50mg nocte. First-line per Indian Headache Society — especially useful with coexisting insomnia or tension-type headache.",
        reasoning: "Mechanism likely involves descending serotonergic modulation and prevention of cortical spreading depression. Low dose effective. Cheap and widely available.",
      },
      {
        id: "insomnia",
        question: "Off-label insomnia use",
        recommendation: "Generally AVOID in elderly (Beers). In younger adults, 10-25mg nocte short-term may help insomnia with comorbid depression or chronic pain. Not a first-line hypnotic.",
        reasoning: "H1-mediated sedation. Better alternatives exist (melatonin, CBT-I, z-drugs short-term). Beers criteria cautions against TCA for sleep in elderly.",
      },
      {
        id: "avoid-suicidal",
        question: "Patient has suicidal ideation",
        recommendation: "AVOID amitriptyline. Use SSRI (sertraline). If TCA essential, dispense only 1-2 weeks supply, involve family for monitoring, provide Tele-MANAS (14416) number.",
        reasoning: "Amitriptyline is the #1 antidepressant overdose killer. Even 10-15mg/kg can be fatal due to Na+ channel blockade → QRS widening → ventricular arrhythmia. Overdose safety is the dominant consideration.",
      },
      {
        id: "avoid-elderly",
        question: "Patient is ≥65 years",
        recommendation: "AVOID per Beers criteria — anticholinergic, sedation, orthostatic hypotension → falls, cognitive impairment. Use SSRI (sertraline/escitalopram) for depression, gabapentinoid/duloxetine for pain.",
        reasoning: "Beers 2023 explicitly lists amitriptyline as 'Avoid' in elderly. If a TCA is absolutely essential, nortriptyline is preferred (less anticholinergic, less orthostatic).",
      },
      {
        id: "start-depression",
        question: "Starting amitriptyline for depression",
        recommendation: "ECG at baseline. Start 25-50mg nocte, titrate by 25-50mg every 3-7 days to 75-150mg nocte (max 200mg). Recheck ECG after dose increases. Counsel on sedation, orthostatic, anticholinergic side effects. 4-6 week onset.",
        reasoning: "Start nocte to leverage sedation. Titrate slowly to minimise anticholinergic and orthostatic effects. ECG monitoring due to Na+ channel blockade. Dispense limited supply if any suicidality risk.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian OPD initiation for diabetic neuropathy in a 50-year-old adult",
    lines: [
      "Rx",
      "Tab Amitriptyline 10 mg",
      "1 tab OD at night × 5 days",
      "",
      "Then increase to:",
      "Tab Amitriptyline 25 mg",
      "1 tab OD at night",
      "",
      "Advice: Take at bedtime. Do not stop suddenly.",
      "Avoid alcohol. Stand up slowly from sitting/lying.",
      "Report if palpitations, fainting, or urinary difficulty.",
    ],
    followUp: [
      "Review after 1 week — tolerability (sedation, dry mouth, orthostatic dizziness)",
      "Review after 4 weeks — pain response (often partial by 2 weeks, full by 4-6)",
      "Review after 6-8 weeks — titrate to 50-75mg if response inadequate",
      "Check BP lying and standing at each visit",
      "ECG if dose increased above 75mg/day or in patients >50 with cardiac history",
      "If remission of pain: continue 3-6 months then taper over 2-4 weeks",
      "If suicidal ideation emerges: switch to duloxetine or pregabalin, stop amitriptyline",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information and individualise for each patient.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Not recognising TCA overdose lethality",
      why: "Amitriptyline is the #1 antidepressant overdose killer. 10-15mg/kg can be fatal — even one week's supply (e.g., 25mg × 28 tablets = 700mg) can kill an adult.",
      correction: "Always assess suicidality before prescribing. If any risk, choose an SSRI (sertraline) instead. If TCA essential, dispense only 1-2 weeks supply, involve family for monitoring, provide Tele-MANAS (14416).",
    },
    {
      mistake: "Not checking ECG before and during treatment",
      why: "Amitriptyline causes Na+ channel blockade → QRS widening, QTc prolongation, ventricular arrhythmia. ECG at baseline and after dose escalation is essential, especially in patients >50 or with cardiac history.",
      correction: "ECG at baseline. Recheck after dose increases above 100mg/day. Avoid combining with other QTc-prolonging drugs (macrolides, fluoroquinolones, antiarrhythmics).",
    },
    {
      mistake: "Not recognising anticholinergic toxidrome",
      why: "Anticholinergic toxicity presents as: dry as a bone, red as a beet, hot as a hare, blind as a bat, mad as a hatter. Can be misdiagnosed as delirium, sepsis, or heat stroke.",
      correction: "Recognise the pattern — mydriasis, dry mucous membranes, ileus, urinary retention, hyperthermia, confusion. Mild: supportive. Severe: physostigmine (rarely needed).",
    },
    {
      mistake: "Using amitriptyline in elderly (Beers criteria violation)",
      why: "Beers 2023 explicitly lists amitriptyline as 'Avoid' in ≥65 years due to anticholinergic burden, sedation, orthostatic hypotension → falls, cognitive impairment, urinary retention.",
      correction: "Use SSRI (sertraline/escitalopram) for depression, gabapentinoid or duloxetine for neuropathic pain. If TCA essential, use nortriptyline at low dose.",
    },
    {
      mistake: "Not monitoring nortriptyline levels in non-responders",
      why: "Nortriptyline has a defined therapeutic window (50-150 ng/mL). Below 50 → subtherapeutic; above 150 → toxicity. Without level monitoring, non-response may be due to subtherapeutic levels.",
      correction: "Draw nortriptyline level at steady state (5+ days at constant dose) in non-responders. Adjust dose to target 50-150 ng/mL. Especially important in elderly, CYP2D6 inhibitor co-prescription, or non-adherence suspicion.",
    },
    {
      mistake: "Combining with SSRIs (especially fluoxetine, paroxetine)",
      why: "Fluoxetine and paroxetine are potent CYP2D6 inhibitors → raise TCA levels 2-5 fold → toxicity. Also additive serotonergic effect → serotonin syndrome.",
      correction: "Stop SSRI, wait appropriate washout (5 half-lives; 5 weeks for fluoxetine due to norfluoxetine), then start TCA at low dose. Monitor levels closely. Avoid simultaneous use.",
    },
    {
      mistake: "Not warning about orthostatic hypotension in the elderly",
      why: "α1 blockade causes orthostatic hypotension — major fall risk in elderly, especially at night when getting up to urinate.",
      correction: "Counsel: stand up slowly, especially from bed. Take at night. Consider dose reduction or switch. Check BP lying and standing at each visit.",
    },
    {
      mistake: "Not counselling on overdose danger",
      why: "Patients may not realise that taking 'a few extra tablets' can be fatal. Carers may stockpile old tablets. Easy availability in India without strict prescription control increases risk.",
      correction: "Counsel explicitly: 'Never take more than prescribed — even a small overdose can stop your heart.' Dispose of unused tablets. Limit dispense quantity. Family to monitor supply.",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Recent myocardial infarction (within 6 weeks)",
      reason: "Na+ channel blockade + anticholinergic tachycardia increases cardiac workload and arrhythmia risk in vulnerable post-MI myocardium.",
      alternative: "SSRI (sertraline — safest post-MI per SADHART trial). Wait 6+ months post-MI before considering TCA.",
    },
    {
      scenario: "Arrhythmias, heart block, or prolonged QTc",
      reason: "Amitriptyline prolongs QTc and causes Na+ channel blockade → torsades risk, ventricular arrhythmia, complete heart block.",
      alternative: "SSRI with lowest QTc effect (sertraline, escitalopram). Avoid TCAs entirely.",
    },
    {
      scenario: "Narrow-angle glaucoma",
      reason: "M1 muscarinic blockade → pupillary dilation → blockage of aqueous humour outflow → acute angle closure → blindness.",
      alternative: "SSRI (sertraline/escitalopram). Ensure ophthalmology review before any antidepressant in glaucoma patients.",
    },
    {
      scenario: "Elderly (≥65 years) — Beers criteria",
      reason: "Strong anticholinergic burden, sedation, orthostatic hypotension → cognitive impairment, falls, urinary retention, delirium.",
      alternative: "SSRI (sertraline/escitalopram) for depression, gabapentinoid or duloxetine for pain, non-pharmacological for sleep.",
    },
    {
      scenario: "Suicidal patients at overdose risk",
      reason: "Amitriptyline is the #1 antidepressant overdose killer. Lethal dose is small (10-15mg/kg). One month's supply can be fatal.",
      alternative: "SSRI (sertraline — safest in overdose). ECT for severe suicidal depression. If TCA unavoidable, dispense 1-2 weeks only with family monitoring.",
    },
    {
      scenario: "Eating disorders with electrolyte disturbance",
      reason: "Bulimia/anorexia patients have hypokalaemia, hypomagnesaemia, prolonged QTc — amitriptyline further prolongs QTc → torsades risk. Also overdose risk in this population.",
      alternative: "SSRI (fluoxetine — FDA-approved for bulimia). Avoid TCAs entirely. ECT for severe cases.",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "What is the mechanism of action of amitriptyline? Why is it called a 'dirty drug'? (Blocks SERT + NET + α1 + H1 + M1 + Na+ channels — each target explains a side effect.)",
      "Why is amitriptyline the #1 antidepressant overdose killer? (Na+ channel blockade → QRS widening → ventricular arrhythmia. Plus anticholinergic toxidrome, hypotension, seizures.)",
      "What is the antidote for TCA overdose? (IV sodium bicarbonate — alkalinises plasma (pH 7.45-7.55) and provides Na+ load to overcome channel blockade. QRS >100ms or ventricular arrhythmia = indication.)",
      "What is the active metabolite and its therapeutic window? (Nortriptyline — 50-150 ng/mL. Below 50 = subtherapeutic, above 150 = toxicity.)",
      "Why is amitriptyline in the Beers criteria for elderly? (Strong anticholinergic, sedating, orthostatic hypotension → falls, cognitive impairment, urinary retention.)",
      "Why is amitriptyline now used more for pain than depression? (At low doses, NET blockade activates descending inhibitory pathways — analgesic effect independent of antidepressant action. Safer at low doses than high depression doses.)",
    ],
    residentExpects: [
      "Know the dose for depression (50-150mg nocte) vs pain (10-75mg nocte) — different dose ranges for different indications.",
      "Know when to check nortriptyline levels (non-responder, toxicity suspicion, elderly, CYP2D6 inhibitor co-prescription).",
      "Know the ECG changes in TCA overdose (sinus tachycardia, PR prolongation, QRS widening, QTc prolongation).",
      "Know the overdose management algorithm (ABC, IV sodium bicarbonate for QRS >100ms, benzodiazepine for seizures, ICU, avoid Class Ia/Ic antiarrhythmics).",
      "Know the CYP2D6 interactions (fluoxetine, paroxetine raise TCA levels 2-5 fold).",
      "Know when to choose SSRI over TCA (first-line, overdose risk, elderly, cardiac history).",
    ],
    consultantsDo: [
      "Always check ECG before prescribing amitriptyline in patients >50 or with cardiac history.",
      "Limit dispense quantity to 1-2 weeks for patients with any suicidality risk.",
      "Check nortriptyline level at steady state in non-responders — target 50-150 ng/mL.",
      "Use low-dose (10-25mg nocte) for neuropathic pain rather than depression doses.",
      "Avoid amitriptyline in elderly per Beers criteria — use SSRI or gabapentinoid instead.",
      "Combine with pregabalin/gabapentin for synergistic effect in refractory neuropathic pain.",
      "Counsel patient explicitly on overdose danger — 'Never take more than prescribed — even a small overdose can stop your heart.'",
    ],
    internsMiss: [
      "Not checking ECG before starting amitriptyline in >50-year-olds.",
      "Prescribing full month's supply to a patient with depression — overdose risk.",
      "Not asking about suicidal ideation before prescribing a lethal-in-overdose drug.",
      "Using depression doses (75-150mg) for neuropathic pain — should be 10-75mg.",
      "Combining with fluoxetine or paroxetine without washout — TCA toxicity.",
      "Not counselling on orthostatic hypotension — elderly fall and fracture.",
      "Missing anticholinergic toxidrome in elderly patient on multiple anticholinergic drugs.",
      "Not warning about narrow-angle glaucoma and urinary retention (especially BPH).",
      "Not providing Tele-MANAS (14416) number for crisis support.",
    ],
  },

  /* Refined high-yield level */
  highYieldLevel: "extreme",

  /* Drug family navigation */
  drugFamilyNav: {
    familyName: "TCAs (Tricyclic Antidepressants)",
    members: [
      { name: "Amitriptyline", slug: "amitriptyline", relationship: "Current drug", distinguishing: "Most prescribed TCA in India; #1 antidepressant overdose killer; nortriptyline metabolite" },
      { name: "Clomipramine", slug: "clomipramine", relationship: "Same class (TCA)", distinguishing: "Most serotonergic TCA; ONLY TCA effective for OCD; highest seizure risk" },
      { name: "Imipramine", slug: "imipramine", relationship: "Same class (TCA)", distinguishing: "First TCA (1950s); prototypical; desipramine active metabolite" },
      { name: "Nortriptyline", slug: "nortriptyline", relationship: "Same class (TCA, secondary amine)", distinguishing: "Active metabolite of amitriptyline; therapeutic window 50-150 ng/mL; less sedating" },
      { name: "Doxepin", slug: "doxepin", relationship: "Same class (TCA)", distinguishing: "Highly H1-selective at low dose (≤6mg) for insomnia; topical for pruritus" },
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
      question: "Which of the following is NOT a receptor/channel target of amitriptyline?",
      options: ["SERT (serotonin transporter)", "NET (norepinephrine transporter)", "D2 (dopamine receptor)", "H1 (histamine receptor)"],
      correctIndex: 2,
      explanation: "Amitriptyline is a 'dirty drug' that blocks SERT, NET, α1, H1, M1 muscarinic, and Na+ channels — but NOT D2 dopamine receptors. D2 blockade is the hallmark of antipsychotics, not TCAs. Each amitriptyline target explains a side effect: SERT/NET = therapeutic + GI/sexual, α1 = orthostatic hypotension, H1 = sedation/weight gain, M1 = anticholinergic, Na+ = QRS widening.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-overdose",
      question: "A patient on amitriptyline presents unconscious. ECG shows QRS 140ms. What is the most important immediate treatment?",
      options: ["IV fluids only", "IV sodium bicarbonate", "IV amiodarone", "Haemodialysis"],
      correctIndex: 1,
      explanation: "IV sodium bicarbonate is the antidote for TCA overdose with QRS widening (>100ms). It alkalinises plasma (target pH 7.45-7.55) and provides a sodium load to overcome Na+ channel blockade. Avoid Class Ia (quinidine, procainamide) and Class Ic (flecainide) antiarrhythmics — they worsen Na+ channel blockade.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-metabolite",
      question: "What is the active metabolite of amitriptyline, and what is its therapeutic window?",
      options: ["Desipramine, 100-300 ng/mL", "Nortriptyline, 50-150 ng/mL", "Desmethylclomipramine, 75-200 ng/mL", "10-hydroxynortriptyline, 50-100 ng/mL"],
      correctIndex: 1,
      explanation: "Nortriptyline is the active metabolite of amitriptyline (via CYP2D6 demethylation). It is itself prescribed as a TCA and is the ONLY TCA with a well-established therapeutic window: 50-150 ng/mL. Below 50 = subtherapeutic, above 150 = toxicity. Levels guide dosing in non-responders.",
      afterSectionId: "monitoring",
    },
    {
      id: "quiz-elderly",
      question: "Why is amitriptyline listed in the Beers criteria as 'Avoid' in patients ≥65 years?",
      options: [
        "It causes hepatotoxicity in elderly",
        "It is less effective in elderly",
        "Strong anticholinergic, sedating, orthostatic properties → falls, cognitive impairment",
        "It interacts with all elderly medications",
      ],
      correctIndex: 2,
      explanation: "Beers criteria lists amitriptyline as 'Avoid' in ≥65 years because of its strong anticholinergic burden (delirium, urinary retention, constipation), sedation (falls), and α1-mediated orthostatic hypotension (falls, fractures). SSRIs (sertraline, escitalopram) are preferred for depression in elderly.",
      afterSectionId: "contraindications",
    },
    {
      id: "quiz-pain",
      question: "What dose of amitriptyline is typically used for diabetic neuropathy?",
      options: ["10-25mg nocte (max 75mg)", "75-150mg nocte", "150-300mg/day in divided doses", "1-2mg/kg/day"],
      correctIndex: 0,
      explanation: "For neuropathic pain, amitriptyline is used at MUCH lower doses than for depression: 10-25mg nocte starting, titrate to max 75mg. The analgesic effect (NET blockade → descending inhibition) occurs at lower doses than the antidepressant effect. Onset for pain is 1-2 weeks (faster than 4-6 weeks for depression).",
      afterSectionId: "clinical-uses",
    },
    {
      id: "quiz-interaction",
      question: "A patient on fluoxetine 40mg is switched to amitriptyline. What is the risk?",
      options: [
        "No risk — fluoxetine and TCAs can be combined safely",
        "Fluoxetine inhibits CYP2D6 → raises amitriptyline levels → TCA toxicity",
        "Fluoxetine reduces amitriptyline absorption",
        "Fluoxetine shortens amitriptyline half-life",
      ],
      correctIndex: 1,
      explanation: "Fluoxetine (and paroxetine) are potent CYP2D6 inhibitors — they raise TCA levels 2-5 fold, causing toxicity (QRS widening, anticholinergic toxidrome). Additionally, both are serotonergic → serotonin syndrome risk. When switching from fluoxetine to a TCA, wait at least 5 weeks (long half-life of norfluoxetine), then start TCA at low dose with level monitoring.",
      afterSectionId: "interactions",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "Amitriptyline is called a 'dirty drug'. Name all its pharmacological targets and the side effect each causes.",
      answer: "SERT (therapeutic antidepressant + GI/sexual side effects), NET (therapeutic + tremor/tachycardia), α1 (orthostatic hypotension), H1 (sedation, weight gain), M1 muscarinic (dry mouth, constipation, urinary retention, blurred vision, tachycardia), Na+ channel (QRS widening, ventricular arrhythmia — basis for overdose lethality).",
      topic: "Mechanism",
    },
    {
      question: "A patient on amitriptyline 100mg nocte is brought unconscious. ECG: QRS 130ms. What is the diagnosis, mechanism, and immediate management?",
      answer: "Diagnosis: TCA overdose with cardiotoxicity. Mechanism: Na+ channel blockade → slow depolarisation → QRS widening → ventricular arrhythmia. Management: ABC, IV access, IV sodium bicarbonate bolus (1-2 mEq/kg) to target QRS <100ms and plasma pH 7.45-7.55, IV fluids, benzodiazepine if seizures, ICU admission, continuous cardiac monitoring. Avoid Class Ia/Ic antiarrhythmics.",
      topic: "Overdose",
    },
    {
      question: "What is the active metabolite of amitriptyline? What is its therapeutic window, and when should levels be checked?",
      answer: "Nortriptyline (via CYP2D6 demethylation). Therapeutic window: 50-150 ng/mL. Below 50 = subtherapeutic, above 150 = toxicity. Check levels at steady state (5+ days at constant dose) in: non-responders, suspected toxicity, elderly, CYP2D6 inhibitor co-prescription, suspected non-adherence.",
      topic: "Therapeutic Drug Monitoring",
    },
    {
      question: "Why is amitriptyline now used more for neuropathic pain than for depression? What doses are used?",
      answer: "At low doses (10-75mg nocte), amitriptyline's NET blockade activates descending noradrenergic inhibitory pathways from locus coeruleus to dorsal horn — analgesic effect independent of antidepressant action. Onset for pain is 1-2 weeks (faster than 4-6 weeks for depression). First-line per NICE CG173 for neuropathic pain (alongside duloxetine, gabapentin, pregabalin).",
      topic: "Clinical Use",
    },
    {
      question: "Why is amitriptyline in the Beers criteria for elderly (≥65)? What are the alternatives?",
      answer: "Beers 2023 lists amitriptyline as 'Avoid' in ≥65 years due to: (1) strong anticholinergic burden → delirium, cognitive impairment, urinary retention (especially with BPH), constipation; (2) H1-mediated sedation → falls; (3) α1-mediated orthostatic hypotension → falls and fractures. Alternatives: SSRIs (sertraline, escitalopram) for depression, gabapentinoids (gabapentin, pregabalin) or SNRIs (duloxetine) for neuropathic pain, non-pharmacological approaches for insomnia.",
      topic: "Geriatric Pharmacology",
    },
    {
      question: "Why is amitriptyline the #1 antidepressant overdose killer? What makes it so lethal?",
      answer: "Multiple factors: (1) Na+ channel blockade → QRS widening → ventricular arrhythmia (the dominant lethal mechanism); (2) Anticholinergic toxidrome → hyperthermia, delirium, ileus; (3) α1 blockade → refractory hypotension; (4) GABA antagonism → seizures; (5) Small lethal dose: 10-15mg/kg (one week's supply at 100mg = 700mg can be fatal). Treatment: IV sodium bicarbonate for QRS >100ms, benzodiazepine for seizures, ICU, avoid Class Ia/Ic antiarrhythmics.",
      topic: "Safety",
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
      checkpoint: "You now know what Amitriptyline is, why it's called a 'dirty drug', and why it's still used despite its side effects.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act in the brain?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand the mechanism — SERT + NET (therapeutic) plus α1, H1, M1, Na+ channel (side effects). You understand why nortriptyline is the active metabolite with a therapeutic window.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When do you use it? What goes wrong?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now prescribe amitriptyline safely — for depression, neuropathic pain, or migraine — knowing the side effects, contraindications, ECG monitoring, and overdose danger.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it actually used in Indian hospitals?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands (Tryptomer, Amitone, Sarotena), the DMHP workflow, the overdose safety concerns in Indian practice, and when NOT to choose amitriptyline.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content, worked through a clinical case, compared amitriptyline with other TCAs, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions, you have exam-level mastery of Amitriptyline.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Amitriptyline label"],
};
