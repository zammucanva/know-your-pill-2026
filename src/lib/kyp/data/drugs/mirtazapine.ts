import type { Drug } from "../types";

/**
 * Mirtazapine — canonical drug page data.
 *
 * Structured to mirror the sertraline / venlafaxine template exactly so every
 * section of /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Mirtazapine is CLINICALLY DISTINCT from every other antidepressant in the
 * registry: it is a NaSSA (Noradrenergic and Specific Serotonergic
 * Antidepressant). It DOES NOT block any reuptake transporter (no SERT, NET,
 * or DAT blockade). Instead it works entirely through RECEPTOR ANTAGONISM —
 * α2-adrenergic autoreceptor + heteroreceptor blockade (↑ NE and 5-HT release),
 * 5-HT2A / 5-HT2C / 5-HT3 antagonism (shapes serotonergic signalling), and
 * H1 histamine antagonism (signature sedation + weight gain). This unique
 * receptor pharmacology is what gives mirtazapine its signature clinical
 * profile: sedating, appetite-stimulating, NO sexual dysfunction, NO nausea,
 * rapid onset (days, not weeks), and the rare-but-serious risk of
 * agranulocytosis. Every section below reflects those signature features.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for REMERON / REMERON SolTab (mirtazapine)
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *
 * Last reviewed: 2026-07-13
 */
export const mirtazapine: Drug = {
  /* ---- Identity ---- */
  slug: "mirtazapine",
  genericName: "Mirtazapine",
  brandNames: ["Remeron", "Remeron SolTab", "Avanza", "Mirtazon"],
  drugClass: "depressant", // closest available ID — mirtazapine is sedating (H1 blockade)
  drugClassLabel: "NaSSA",
  drugClassFullName: "Noradrenergic and Specific Serotonergic Antidepressant",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "NaSSAs", "Mirtazapine"],

  /* ---- Hero / summary ---- */
  tagline:
    "A NaSSA — the only antidepressant that works entirely through receptor antagonism (α2, 5-HT2A/2C/3, H1) with NO reuptake blockade. Signature: sedating, weight-gaining, no sexual dysfunction, rapid onset in days.",
  summary:
    "Mirtazapine is unique among antidepressants: it does NOT block the serotonin, norepinephrine, or dopamine transporters. Instead it is a receptor antagonist — blocking α2-adrenergic autoreceptors and heteroreceptors (disinhibiting both norepinephrine and serotonin release), blocking 5-HT2A and 5-HT2C (shunting serotonergic signalling toward the desirable 5-HT1A receptor and avoiding sexual dysfunction), blocking 5-HT3 (preventing nausea — like ondansetron), and blocking H1 histamine receptors (causing the signature sedation and weight gain). The result is an antidepressant that is sedating rather than activating, appetite-stimulating rather than anorexigenic, free of sexual side effects and GI upset, and faster-acting than SSRIs (sleep and appetite improve within DAYS). Its two signature clinical niches are depression with insomnia + anorexia + anxiety, and augmentation of SSRIs to reverse SSRI-induced sexual dysfunction. The rare-but-serious risk is agranulocytosis.",
  estimatedReadTime: "17 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain how mirtazapine produces antidepressant effect WITHOUT any reuptake blockade — via α2-autoreceptor and α2-heteroreceptor antagonism increasing both norepinephrine and serotonin release.",
    "Map each of mirtazapine's receptor antagonisms (α2, 5-HT2A, 5-HT2C, 5-HT3, H1, α1) to its clinical consequences — sedation, weight gain, no sexual dysfunction, no nausea, orthostasis.",
    "Predict the COUNTERINTUITIVE inverse dose–sedation relationship: lower doses (7.5–15 mg) are MORE sedating than higher doses (30–45 mg) because the noradrenergic effect at higher doses counteracts H1 sedation.",
    "Select mirtazapine for the right patient: depression with insomnia + anorexia + weight loss + anxiety; AVOID in obesity and where alertness is required.",
    "Use mirtazapine as an augmenting agent for SSRI-induced sexual dysfunction (alongside bupropion) and as part of 'California Rocket Fuel' (venlafaxine + mirtazapine).",
    "Recognise and monitor for mirtazapine's signature serious adverse effect — agranulocytosis (~1 in 1000) — and counsel patients to report fever or sore throat immediately.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Mirtazapine is a receptor antagonist antidepressant — it blocks α2-adrenergic autoreceptors and heteroreceptors (disinhibiting NE and 5-HT release), and blocks 5-HT2A, 5-HT2C, 5-HT3, and H1 receptors. It has NO affinity for SERT, NET, or DAT.",
    molecularTarget:
      "α2-adrenergic receptors (autoreceptor + heteroreceptor), 5-HT2A, 5-HT2C, 5-HT3, and H1 histamine receptors. NO transporter blockade.",
    effect:
      "Acute (hours): α2-autoreceptor blockade disinhibits norepinephrine release from the locus coeruleus → ↑ NE. α2-heteroreceptor blockade disinhibits serotonin release from the raphe nuclei → ↑ 5-HT. Simultaneously, 5-HT2A and 5-HT2C blockade shunts the increased serotonergic tone toward 5-HT1A receptors (the 'good' serotonin receptor for mood and anxiety), 5-HT3 blockade prevents nausea, and H1 blockade produces sedation and appetite stimulation. Chronic (2–4 weeks): downstream neuroadaptive changes including 5-HT1A receptor upregulation, increased BDNF in the hippocampus, and normalisation of HPA axis hyperactivity — correlating with the onset of full antidepressant effect. Sleep and appetite often improve within DAYS (H1 effect), preceding mood improvement.",
    steps: [
      "Mirtazapine blocks the α2-adrenergic AUTORECEPTOR on noradrenergic neurons in the locus coeruleus. Normally, released NE binds this autoreceptor and feeds back to inhibit further NE release. Blocking it removes the brake → norepinephrine release increases.",
      "Mirtazapine also blocks the α2-adrenergic HETERORECEPTOR on serotonergic neurons in the raphe nuclei. Normally, NE released from coeruleus projections binds this heteroreceptor to inhibit 5-HT release. Blocking it disinhibits serotonin release → 5-HT release increases.",
      "The result is a simultaneous rise in both norepinephrine and serotonin — achieved without blocking ANY reuptake transporter (no SERT, NET, or DAT blockade). This is what makes mirtazapine mechanistically unique among antidepressants.",
      "Mirtazapine blocks 5-HT2A receptors. 5-HT2A activation normally causes anxiety, insomnia, and sexual dysfunction. Blocking it shunts the increased serotonergic tone toward 5-HT1A — the receptor responsible for the desired antidepressant and anxiolytic effects.",
      "Mirtazapine blocks 5-HT2C receptors. 5-HT2C activation normally suppresses noradrenergic and dopaminergic signalling (causing the lethargy, anhedonia, and sexual dysfunction of SSRIs). Blocking it permits further NE/DA release — explaining the absence of sexual side effects.",
      "Mirtazapine blocks 5-HT3 receptors in the gut and chemoreceptor trigger zone — the same receptor targeted by ondansetron. This is why mirtazapine (unlike SSRIs) does NOT cause nausea and is in fact antiemetic.",
      "Mirtazapine blocks H1 histamine receptors strongly. H1 blockade in the CNS produces sedation and appetite stimulation — the two signature side effects that distinguish mirtazapine from SSRIs/SNRIs.",
      "Mirtazapine has modest α1-adrenergic antagonism — contributing to orthostatic hypotension and dizziness, especially at higher doses and in the elderly.",
      "Over 2–4 weeks, downstream neuroadaptive changes occur: 5-HT1A receptor upregulation, increased BDNF expression in the hippocampus, and HPA-axis normalisation. These delayed adaptations — not the acute monoamine rises — correlate with the onset of full mood-improving effect. However, the H1-mediated effects (sleep, appetite) begin within DAYS, often before mood lifts.",
    ],
    pharmacokinetics:
      "Rapidly and well absorbed orally (bioavailability ~50%). Peak plasma at 2 hours. Food does not significantly affect absorption. Orally disintegrating tablet (Remeron SolTab) is bioequivalent and useful for patients who cannot or will not swallow pills — it dissolves on the tongue in seconds. Moderately protein-bound (~85%). Volume of distribution ~5 L/kg — distributes widely including into CNS. Linear pharmacokinetics across the therapeutic range (15–45 mg).",
    halfLife:
      "20–40 hours (mean ~30 hours). Long enough for once-daily dosing, ideally at night to leverage sedation and minimise daytime drowsiness. Steady state is reached in ~5–7 days. The long half-life means there is NO clinically significant discontinuation syndrome when stopped.",
    activeMetabolite:
      "No active metabolite. Desmethylmirtazapine is formed by CYP metabolism but is pharmacologically weak and does not meaningfully contribute to clinical effect.",
    metabolism:
      "Hepatic — metabolised by CYP1A2, CYP2D6, and CYP3A4 (multiple pathways). The redundancy across three CYP enzymes means that no single CYP inhibitor or polymorphism dramatically raises mirtazapine levels — fewer clinically significant interactions than SSRIs metabolised by a single pathway (e.g. paroxetine/CYP2D6).",
    excretion:
      "Renal elimination predominates (~75% — urine as metabolites and unchanged drug); ~15% faecal. Renal impairment prolongs elimination — dose reduction required in severe renal failure.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "lc-neuron", label: "Noradrenergic neuron (locus coeruleus)", sublabel: "Synthesises norepinephrine", variant: "input" },
      { id: "ne", label: "Norepinephrine (NE)", sublabel: "Released into synapse", variant: "process" },
      { id: "alpha2-auto", label: "α2 AUTORECEPTOR", sublabel: "Normally brakes NE release", variant: "target" },
      { id: "raphe-neuron", label: "Serotonergic neuron (raphe)", sublabel: "Synthesises serotonin", variant: "input" },
      { id: "5ht", label: "Serotonin (5-HT)", sublabel: "Released into synapse", variant: "process" },
      { id: "alpha2-hetero", label: "α2 HETERORECEPTOR", sublabel: "Normally brakes 5-HT release", variant: "target" },
      { id: "mirtazapine", label: "Mirtazapine", sublabel: "α2 antagonist (NO reuptake blockade)", variant: "inhibit" },
      { id: "no-sert", label: "No SERT/NET/DAT blockade", sublabel: "Mechanistically unique vs SSRIs/SNRIs", variant: "process" },
      { id: "5ht2a", label: "5-HT2A receptor", sublabel: "Blocked → ↓ anxiety, ↓ sexual SE", variant: "target" },
      { id: "5ht2c", label: "5-HT2C receptor", sublabel: "Blocked → ↑ NE/DA, NO sexual SE", variant: "target" },
      { id: "5ht3", label: "5-HT3 receptor", sublabel: "Blocked → antiemetic (like ondansetron)", variant: "target" },
      { id: "h1", label: "H1 histamine receptor", sublabel: "Blocked → SEDATION + WEIGHT GAIN", variant: "target" },
      { id: "sedation", label: "Sedation + appetite stimulation", sublabel: "Signature — improves within DAYS", variant: "output" },
      { id: "pfc", label: "Prefrontal cortex", sublabel: "↑ NE + ↑ 5-HT1A signalling → mood lifts (weeks 2–4)", variant: "output" },
      { id: "inverse-dose", label: "Inverse dose–sedation", sublabel: "15 mg MORE sedating than 30 mg (NE counteracts H1)", variant: "output" },
    ],
    edges: [
      { from: "lc-neuron", to: "ne", label: "releases" },
      { from: "ne", to: "alpha2-auto", label: "negative feedback" },
      { from: "mirtazapine", to: "alpha2-auto", type: "inhibit", label: "blocks → ↑ NE release" },
      { from: "mirtazapine", to: "alpha2-hetero", type: "inhibit", label: "blocks → ↑ 5-HT release" },
      { from: "alpha2-auto", to: "raphe-neuron", label: "disinhibited LC → fires more on raphe" },
      { from: "raphe-neuron", to: "5ht", label: "releases (disinhibited)" },
      { from: "mirtazapine", to: "no-sert", type: "inhibit", label: "zero affinity for any transporter" },
      { from: "mirtazapine", to: "5ht2a", type: "inhibit", label: "blocks → shunts to 5-HT1A" },
      { from: "mirtazapine", to: "5ht2c", type: "inhibit", label: "blocks → permits NE/DA" },
      { from: "mirtazapine", to: "5ht3", type: "inhibit", label: "blocks → no nausea" },
      { from: "mirtazapine", to: "h1", type: "inhibit", label: "blocks → sedation + hunger" },
      { from: "h1", to: "sedation", label: "signature effect" },
      { from: "sedation", to: "inverse-dose", label: "less NE at low dose → more sedation" },
      { from: "ne", to: "pfc", label: "noradrenergic mood/energy" },
      { from: "5ht2a", to: "pfc", label: "5-HT1A-mediated anxiolysis" },
    ],
    caption:
      "Mirtazapine's mechanism is THE counterexample to 'all antidepressants block reuptake.' It blocks only receptors — α2 (→ ↑ NE + ↑ 5-HT release), 5-HT2A/2C/3 (shapes serotonergic signalling), and H1 (sedation + weight gain). This receptor pharmacology is why mirtazapine has a clinical profile opposite to SSRIs: sedating not activating, weight-gaining not weight-neutral, free of sexual SE and nausea, and faster in onset.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Norepinephrine (NE)", "Serotonin (5-HT)", "Histamine (H1, antagonised)", "Dopamine (indirectly ↑ via 5-HT2C blockade)"],
  receptors: [
    "α2-adrenergic autoreceptor (antagonist — disinhibits NE release)",
    "α2-adrenergic heteroreceptor (antagonist — disinhibits 5-HT release)",
    "5-HT2A (antagonist — shunts signalling to 5-HT1A)",
    "5-HT2C (antagonist — permits NE/DA release, no sexual SE)",
    "5-HT3 (antagonist — antiemetic, like ondansetron)",
    "H1 histamine (antagonist — sedation + weight gain)",
    "α1-adrenergic (weak antagonist — orthostatic hypotension)",
    "Muscarinic (very weak — minimal anticholinergic effect)",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // NaSSAs act on the diffuse noradrenergic + serotonergic projection systems, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description:
        "FDA-approved in adults. Particularly valuable when depression presents with insomnia, weight loss/anorexia, anxiety, or agitation — the receptor pharmacology of mirtazapine directly treats these symptom clusters (H1 blockade → sleep and appetite; 5-HT2A blockade → anxiolysis). Dose: start 15 mg at night, titrate to 30–45 mg as needed.",
      ageGroup: "Adults",
    },
    {
      name: "Anxiety disorders (GAD, panic, social anxiety) — off-label",
      status: "off-label",
      description:
        "Useful in generalised anxiety, panic disorder, and social anxiety — particularly when comorbid insomnia is present. The 5-HT2A antagonism and α2-mediated serotonergic increase provide anxiolysis without the early activation that can worsen anxiety with SSRIs/SNRIs.",
    },
    {
      name: "Insomnia (low-dose 7.5–15 mg at night) — off-label",
      status: "off-label",
      description:
        "Low-dose mirtazapine is an effective hypnotic via H1 blockade — useful when insomnia coexists with depression or anxiety, or when standard hypnotics (z-drugs, benzodiazepines) are inappropriate (addiction risk, elderly falls). The lower the dose, the MORE sedating — 7.5 mg often outperforms 15 mg for sleep.",
    },
    {
      name: "Post-Traumatic Stress Disorder (PTSD) — off-label",
      status: "off-label",
      description:
        "Used off-label, often when SSRIs have failed or when nightmares and insomnia dominate the presentation. Mirtazapine improves sleep architecture and reduces traumatic nightmares, and the 5-HT2A antagonism may help with hyperarousal.",
    },
    {
      name: "Depression with anorexia / weight loss / cachexia — off-label",
      status: "off-label",
      description:
        "The appetite-stimulating and weight-gaining effect (H1 blockade) is therapeutically useful in depressed patients with marked weight loss, in cancer-related cachexia, and in elderly patients whose depression presents with failure to thrive. A rare antidepressant where weight gain is a FEATURE not a bug.",
    },
    {
      name: "Chemotherapy-induced nausea / vomiting — off-label",
      status: "off-label",
      description:
        "Mirtazapine's 5-HT3 antagonism (the same receptor targeted by ondansetron and granisetron) provides an antiemetic effect that is sometimes exploited in chemotherapy patients who also have depression, insomnia, or anorexia — one drug addressing several symptoms simultaneously.",
    },
    {
      name: "SSRI-induced sexual dysfunction (augmentation) — off-label",
      status: "off-label",
      description:
        "Adding mirtazapine 15 mg at night to an SSRI/SNRI is one of the two first-line strategies (alongside bupropion) for SSRI-induced sexual dysfunction. The 5-HT2C blockade is the proposed mechanism — restoring the dopaminergic signalling that SSRIs suppress.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) risks serotonin syndrome — mirtazapine increases serotonin release via α2-heteroreceptor blockade. At least 14 days must elapse between discontinuation of an MAOI and initiation of mirtazapine (and vice versa).",
    },
    {
      name: "Phaeochromocytoma",
      severity: "absolute",
      rationale:
        "Mirtazapine's α2-adrenergic antagonism can trigger uncontrolled catecholamine release from a phaeochromocytoma → potentially fatal hypertensive crisis. This is a class-specific absolute contraindication that is easy to miss on history.",
    },
    {
      name: "Known hypersensitivity to mirtazapine",
      severity: "absolute",
      rationale: "Anaphylaxis, angioedema, and severe skin reactions (including Stevens-Johnson syndrome) have been reported.",
    },
    {
      name: "Concurrent linezolid or intravenous methylene blue",
      severity: "absolute",
      rationale:
        "Both are reversible MAOIs — combining with mirtazapine (which increases serotonergic tone via α2-heteroreceptor blockade) risks serotonin syndrome. Stop mirtazapine before initiating linezolid and wait 14 days after stopping linezolid before restarting mirtazapine.",
    },
    {
      name: "Severe hepatic impairment (Child-Pugh C) — relative",
      severity: "relative",
      rationale:
        "Mirtazapine clearance is substantially reduced. If used, reduce dose by 50–66% and titrate slowly with close monitoring for accumulation (excessive sedation, confusion).",
    },
    {
      name: "Severe renal impairment (CrCl <40 mL/min) — relative",
      severity: "relative",
      rationale:
        "Clearance reduced ~50%. Reduce starting dose and titrate cautiously — monitor for oversedation.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of mirtazapine in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. NOTE: mirtazapine is not FDA-approved for paediatric use.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Sedation / somnolence",
      frequency: "very-common",
      severity: "moderate",
      description:
        "SIGNATURE effect. H1 histamine receptor blockade produces marked sedation. COUNTERINTUITIVE INVERSE DOSE-RESPONSE: lower doses (7.5–15 mg) are MORE sedating than higher doses (30–45 mg), because at higher doses the increased noradrenergic tone (from α2 antagonism) counteracts the H1 sedation. Most patients develop partial tolerance over 1–2 weeks.",
      management: "Take at NIGHT. If daytime sedation persists after 2 weeks, INCREASE (not decrease) the dose to leverage the noradrenergic counter-effect — or switch to a less sedating antidepressant. Avoid driving or operating machinery until effect is known.",
    },
    {
      name: "Weight gain",
      frequency: "very-common",
      severity: "moderate",
      description:
        "SIGNATURE effect. H1 blockade in the hypothalamus stimulates appetite — particularly for carbohydrates. Average gain 2–5 kg in the first 3 months; can be substantially more in susceptible individuals. More weight gain than SSRIs (except paroxetine), comparable to or slightly less than TCAs. Therapeutically USEFUL in depressed patients with anorexia/weight loss; problematic in overweight/obese patients.",
      management: "Counsel about diet and exercise at baseline. Monitor weight at every visit. If weight gain is excessive or unacceptable, consider switching to bupropion or an SSRI. Often a reason for discontinuation in obese patients.",
    },
    {
      name: "Increased appetite",
      frequency: "very-common",
      severity: "mild",
      description: "Direct consequence of H1 blockade — often precedes measurable weight gain. Patients may crave sweets and carbohydrates especially.",
      management: "Counsel patient about appetite changes; nutritional counselling; switch to a weight-neutral antidepressant if problematic.",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Mild anticholinergic-like effect (despite very low muscarinic affinity). Sip water, sugar-free gum, good oral hygiene.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "mild",
      description: "Mild — partly anticholinergic-like, partly due to reduced gut motility. Increase dietary fibre and fluid intake.",
    },
    {
      name: "Dizziness / orthostatic hypotension",
      frequency: "common",
      severity: "moderate",
      description:
        "α1-adrenergic blockade reduces sympathetic vasomotor tone → orthostatic BP drop. More prominent in the elderly, with dehydration, and at higher doses. Rise slowly from sitting/lying.",
      management: "Stand up slowly. Ensure adequate hydration. Caution in elderly (falls risk). Consider dose reduction or slower titration.",
    },
    {
      name: "Vivid dreams / nightmares",
      frequency: "common",
      severity: "mild",
      description: "Mirtazapine alters sleep architecture (increases slow-wave sleep, modifies REM). Some patients report vivid dreams or nightmares; usually diminishes over time. Occasionally the vivid dreams are pleasant — mirtazapine is sometimes prescribed for nightmare suppression in PTSD.",
    },
    {
      name: "Increased cholesterol and triglycerides",
      frequency: "common",
      severity: "mild",
      description: "Mean increases of ~5–10% in total cholesterol and triglycerides. Clinically relevant in patients with pre-existing hyperlipidaemia or cardiovascular risk.",
      management: "Check baseline lipids and recheck at 3 months. Address with lifestyle modification or statin if needed; consider alternative antidepressant if marked.",
    },
    {
      name: "Peripheral oedema / fluid retention",
      frequency: "common",
      severity: "mild",
      description: "Mechanism unclear — possibly related to α1 blockade or direct vascular effects. Usually mild and bilateral; rule out cardiac causes if marked or asymmetric.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Agranulocytosis / severe neutropenia",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "SIGNATURE SERIOUS EFFECT — incidence ~1 in 1000 (higher than other antidepressants). Onset typically within first 1–3 months. Presents as fever, sore throat, mouth ulcers, or other signs of infection. Mechanism likely immune-mediated. Boxed warning in some countries. Most cases recover with drug discontinuation, but fatal outcomes have been reported.",
      management: "Discontinue immediately if WBC <3.0 × 10⁹/L or ANC <1.5 × 10⁹/L, or if patient develops fever/sore throat/signs of infection. Send urgent FBC. Do NOT rechallenge. Counsel EVERY patient to report fever or sore throat immediately — this is the single most important patient education point.",
    },
    {
      name: "Serotonin syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Although mirtazapine does not block SERT, its α2-heteroreceptor blockade increases serotonin release — so combining with other serotonergic agents (SSRIs, SNRIs, TCAs, tramadol, triptans, MAOIs, St John's Wort) can cause serotonin syndrome. Triad: mental status change + autonomic instability + neuromuscular excitation (clonus, hyperreflexia).",
      management: "Discontinue mirtazapine and any other serotonergic agents. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine in severe cases. ICU admission if hyperthermia >41°C.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description: "Black-box warning (class effect for all antidepressants). Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk.",
      management: "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description: "In patients with undiagnosed bipolar disorder, mirtazapine (like any antidepressant) can trigger a manic episode — the noradrenergic component via α2 antagonism may contribute. Screen for personal and family history of bipolar disorder before initiating.",
      management: "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant (MDQ questionnaire). Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Orthostatic hypotension with syncope",
      frequency: "uncommon",
      severity: "severe",
      description: "α1-adrenergic blockade can produce clinically significant orthostatic BP drop, especially in elderly, dehydrated patients, or those on antihypertensives. Falls risk is significant in the elderly — syncope can result in head injury or fracture.",
      management: "Stand up slowly. Review concomitant antihypertensives — may need dose reduction. Hydration. Consider fall precautions in elderly.",
    },
    {
      name: "Restless legs syndrome / akathisia-like agitation",
      frequency: "uncommon",
      severity: "moderate",
      description: "Mirtazapine can worsen or precipitate restless legs syndrome — likely a dopaminergic effect of 5-HT2C blockade. Distressing but usually reversible on dose reduction or discontinuation.",
      management: "Dose reduction. If persistent, switch antidepressant. Avoid evening dosing timing issues; sometimes iron studies warranted if RLS prominent.",
    },
    {
      name: "Hepatotoxicity",
      frequency: "rare",
      severity: "severe",
      description: "Transient transaminase elevations are common (~2%); severe hepatotoxicity is rare but reported. Monitor for jaundice, fatigue, dark urine, abdominal pain.",
      management: "Baseline LFTs. If symptomatic or ALT >3× ULN, discontinue and investigate. Caution in pre-existing liver disease.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description: "Seizure risk is very low at therapeutic doses — lower than bupropion and TCAs. Overdose increases risk. Use cautiously in patients with epilepsy.",
      management: "Use cautiously in epilepsy. Benzodiazepines for seizure in overdose setting.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "WBC / full blood count (if symptomatic)",
      frequency: "Baseline; check urgently if fever, sore throat, or infection develops at any time during treatment.",
      rationale:
        "Agranulocytosis is mirtazapine's signature serious adverse effect (~1 in 1000). Routine serial FBC monitoring is NOT required (incidence too low), but a low threshold for checking FBC in any patient with fever or sore throat is essential. Counsel patients explicitly to report these symptoms immediately.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 4 weeks, 12 weeks, then every 3–6 months.",
      rationale:
        "Weight gain is a signature effect (2–5 kg in first 3 months). Monitor to detect excessive gain early. Consider switching antidepressant if weight gain >5% body weight or unacceptable to patient.",
    },
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning (class effect) for suicidality in patients <25. Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes.",
    },
    {
      parameter: "Orthostatic blood pressure",
      frequency: "Baseline; at every dose change in elderly or those on antihypertensives.",
      rationale:
        "α1-adrenergic blockade can cause orthostatic hypotension, particularly in the elderly and those on concurrent antihypertensives. Falls risk is significant. Measure lying and standing BP.",
    },
    {
      parameter: "Lipid panel (cholesterol, triglycerides)",
      frequency: "Baseline; recheck at 3 months, then annually.",
      rationale: "Mirtazapine raises total cholesterol and triglycerides by ~5–10% on average. Clinically relevant in patients with cardiovascular risk or pre-existing hyperlipidaemia.",
    },
    {
      parameter: "LFTs",
      frequency: "Baseline; only if clinically indicated.",
      rationale: "Hepatotoxicity is rare but reported. Transient transaminase elevations (~2%) are usually benign. Monitor for jaundice, fatigue, dark urine.",
    },
    {
      parameter: "Response assessment (PHQ-9 / HAM-D)",
      frequency: "Baseline, week 2 (sleep/appetite), week 4 (early mood), week 8, then every 3 months.",
      rationale:
        "Quantifies response. Sleep and appetite improvement often precede mood improvement by 1–2 weeks. ≥50% reduction in PHQ-9 = response; PHQ-9 <5 = remission.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism: "MAOIs inhibit serotonin breakdown. Mirtazapine increases serotonin release via α2-heteroreceptor blockade. Combination → potentially fatal serotonin syndrome.",
      action: "Absolute contraindication. Wait 14 days after stopping MAOI before starting mirtazapine; 14 days after stopping mirtazapine before starting MAOI.",
    },
    {
      drug: "Other serotonergic drugs (SSRIs, SNRIs, TCAs, tramadol, triptans, St John's Wort)",
      severity: "major",
      mechanism: "Although mirtazapine does not block SERT, its α2-heteroreceptor blockade increases 5-HT release — additive with other serotonergic mechanisms. Risk of serotonin syndrome.",
      action: "Use cautiously. Monitor for serotonin syndrome (clonus, hyperreflexia, autonomic instability). NOTE: mirtazapine is often SAFELY combined with SSRIs/SNRIs as augmentation (e.g. 'California Rocket Fuel' = venlafaxine + mirtazapine) — but combination should be clinician-supervised.",
    },
    {
      drug: "CNS depressants — alcohol, benzodiazepines, opioids, z-drugs",
      severity: "major",
      mechanism: "Additive H1-mediated and GABA-ergic sedation. Risk of oversedation, respiratory depression (especially with opioids), impaired cognition, falls in elderly.",
      action: "Avoid alcohol entirely. Use benzodiazepines/z-drugs with caution and at reduced doses. Avoid opioid co-prescription where possible; if unavoidable, use lowest opioid dose and monitor.",
    },
    {
      drug: "Antihypertensives (ACE inhibitors, ARBs, diuretics, alpha-blockers, calcium channel blockers)",
      severity: "moderate",
      mechanism: "Additive orthostatic hypotension via mirtazapine's α1-adrenergic blockade. Particularly relevant in elderly and those on multiple antihypertensives.",
      action: "Monitor lying and standing BP, especially at initiation and dose changes. Consider reducing antihypertensive dose if symptomatic orthostasis develops.",
    },
    {
      drug: "CYP1A2 inhibitors (fluvoxamine, ciprofloxacin, ethinylestradiol)",
      severity: "moderate",
      mechanism: "CYP1A2 is one of three enzymes metabolising mirtazapine. Strong CYP1A2 inhibitors (especially fluvoxamine) can raise mirtazapine plasma levels substantially → increased sedation, weight gain, orthostasis.",
      action: "Reduce mirtazapine dose by 25–50% if co-prescribing with fluvoxamine or ciprofloxacin. Monitor for excessive sedation.",
    },
    {
      drug: "CYP3A4 inhibitors (ketoconazole, clarithromycin, ritonavir, grapefruit juice)",
      severity: "moderate",
      mechanism: "CYP3A4 is a major metabolic pathway for mirtazapine. Strong inhibitors raise mirtazapine plasma levels.",
      action: "Monitor for excessive sedation; reduce mirtazapine dose if needed. Avoid grapefruit juice.",
    },
    {
      drug: "CYP inducers (rifampicin, carbamazepine, phenytoin, St John's Wort)",
      severity: "moderate",
      mechanism: "Strong CYP inducers (particularly CYP3A4) lower mirtazapine plasma levels → reduced efficacy.",
      action: "Monitor for loss of antidepressant effect. Increase mirtazapine dose if needed (up to max 45 mg/day).",
    },
    {
      drug: "Warfarin",
      severity: "moderate",
      mechanism: "Mirtazapine may potentiate the anticoagulant effect of warfarin (mechanism unclear — possibly protein-binding displacement or CYP interaction). Bleeding risk.",
      action: "Monitor INR closely during mirtazapine initiation and discontinuation. Adjust warfarin dose as needed.",
    },
    {
      drug: "QTc-prolonging drugs (antiarrhythmics, antipsychotics, macrolides, fluoroquinolones)",
      severity: "minor",
      mechanism: "Mirtazapine has minimal QTc effect alone but may add to QTc prolongation from other agents. Risk of torsades de pointes in susceptible patients.",
      action: "Caution in patients with existing QTc prolongation, electrolyte abnormalities, or on multiple QT-prolonging drugs. ECG monitoring if high risk.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Mirtazapine is NOT the first-choice antidepressant in pregnancy — sertraline is preferred. Limited human data; no clear pattern of major congenital malformations has emerged, but the dataset is smaller than for SSRIs. Concerns specific to mirtazapine include weight gain (undesirable in pregnancy where gestational diabetes and hypertension are concerns), sedation (problematic in the peripartum period), and limited safety data. Third-trimester use may cause neonatal adaptation syndrome (jitteriness, hypotonia, respiratory distress, poor feeding). Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks. Decision-making should involve obstetrician + psychiatrist.",
    lactation:
      "Mirtazapine transfers into breast milk but the relative infant dose is low (~1–2%) — generally considered acceptable for breastfeeding. Infant sedation is the main theoretical concern; monitor for drowsiness, poor feeding, or inadequate weight gain. Where an antidepressant is required during lactation and mirtazapine's profile (sedation, weight gain) is desirable for the mother's phenotype, it is a reasonable choice — though sertraline remains the default first-line.",
  },

  renalAdjustment:
    "Mild–moderate renal impairment (CrCl 40–80 mL/min): use with caution; monitor for accumulation (excessive sedation, dizziness). Severe renal impairment (CrCl <40 mL/min): reduce dose by 50% — clearance is halved. Start at 7.5 mg at night and titrate slowly. Avoid in dialysis-dependent patients if possible; if used, dose post-dialysis.",

  hepaticAdjustment:
    "Mild–moderate hepatic impairment (Child-Pugh A/B): reduce starting dose by 50% — start at 7.5 mg at night, titrate slowly to clinical response. Severe hepatic impairment (Child-Pugh C): further dose reduction required (consider 7.5 mg every other day starting), titrate cautiously with close monitoring for accumulation. Clearance is reduced ~30–50% in hepatic impairment.",

  /* ---- Education ---- */
  patientExplanation:
    "Mirtazapine is an antidepressant that works in a different way from most others. Instead of blocking the recycling of brain chemicals, it blocks specific receptors — leading to an increase in two mood-related chemicals (norepinephrine and serotonin) AND a separate effect on histamine and other receptors. The result is a medicine that is SEDATING (you will feel sleepy — so take it at NIGHT), APPETITE-STIMULATING (you will probably gain weight — useful if depression has caused weight loss, but discuss with your doctor if you are overweight), tends to be FREE of the sexual side effects that SSRIs cause, and usually does NOT cause nausea. Some patients notice sleep and appetite improve within DAYS — often before the mood benefit, which takes 2–4 weeks to develop. The rare but serious side effect to know about is agranulocytosis — if you develop a fever or sore throat while taking mirtazapine, stop the medicine and see your doctor immediately for a blood test. Do not stop mirtazapine suddenly without medical guidance, although its withdrawal is generally milder than that of SSRIs or SNRIs.",

  patientEducationPoints: [
    "Take mirtazapine at NIGHT — it is sedating and will help you sleep. The drowsiness can last into the next morning, so be careful driving or operating machinery until you know how it affects you.",
    "Expect WEIGHT GAIN and increased appetite — this can be helpful if depression has caused weight loss, but if you are already overweight, discuss with your doctor. Aim for a balanced diet and regular activity.",
    "If you develop a FEVER or SORE THROAT, stop the medicine and see your doctor IMMEDIATELY for a blood test — this could be a sign of a rare but serious drop in white blood cells (agranulocytosis).",
    "Sleep and appetite may improve within DAYS — this is normal and is often the first sign the medicine is working. Mood improvement typically follows over 2–4 weeks.",
    "Mirtazapine is UNLIKELY to cause the sexual side effects that SSRIs commonly cause (low libido, difficulty reaching orgasm). If you have these problems on an SSRI, your doctor may add mirtazapine.",
    "Stand up slowly from sitting or lying — mirtazapine can cause dizziness, especially when you first start taking it or increase the dose. This is more common in older adults.",
    "Avoid ALCOHOL — it adds to the sedation and dizziness of mirtazapine and can be dangerous.",
    "Tell your doctor about all other medicines you take — especially other antidepressants, tramadol, triptans for migraine, antibiotics like linezolid, sedatives, blood pressure medicines, or herbal products like St John's Wort.",
    "Do not stop suddenly without medical guidance. Mirtazapine withdrawal is usually milder than SSRI/SNRI withdrawal, but it is still best to come off it gradually over several weeks.",
    "If you are under 25, watch for new or worsening agitation, irritability, anxiety, or suicidal thoughts in the first month — contact your clinician immediately. This is a class warning for all antidepressants.",
  ],

  clinicalPearls: [
    "Mirtazapine is the 'sleep and eat' antidepressant — sedating + appetite-stimulating. Ideal for depression with INSOMNIA + ANOREXIA + WEIGHT LOSS + ANXIETY; AVOID in obesity and where daytime alertness is required.",
    "INVERSE dose–sedation: 15 mg is MORE sedating than 30 mg. This is counterintuitive but pharmacologically explained — at higher doses the noradrenergic effect (from α2 antagonism) counteracts the H1 sedation. If a patient on 15 mg is too drowsy, INCREASE to 30 mg rather than decrease — high-yield clinical pearl.",
    "RAPID ONSET: sleep and appetite often improve within DAYS (H1 effect), unlike SSRIs/SNRIs where these can take weeks. Mood improvement still takes 2–4 weeks, but the early symptomatic relief can be clinically decisive in severe depression with insomnia.",
    "#1 AUGMENTATION for SSRI-induced sexual dysfunction: add mirtazapine 15 mg at night (alongside bupropion XL 150 mg as the alternative). The 5-HT2C blockade is the proposed mechanism — restoring dopaminergic tone that SSRIs suppress.",
    "'CALIFORNIA ROCKET FUEL' = venlafaxine + mirtazapine. This is the most powerful pharmacological augmentation combination in treatment-resistant depression — dual mechanism (SERT/NET blockade + α2/5-HT2/H1 antagonism) without overlapping side-effect burdens. Reserve for treatment-resistant cases under specialist supervision.",
    "5-HT3 ANTAGONISM = antiemetic effect, like ondansetron. Useful for chemotherapy patients who also need an antidepressant, or for depressed patients with prominent GI upset from SSRIs.",
    "Orally disintegrating tablet (Remeron SolTab) — dissolves on the tongue in seconds. Useful for patients who can't or won't swallow pills (severe depression with negativism, stroke, Parkinson's, children/adolescents, elderly with dysphagia). Bioequivalent to standard tablet.",
    "AGRANULOCYTOSIS is rare (~1 in 1000) but is mirtazapine's signature serious adverse effect. Counsel EVERY patient to report fever or sore throat immediately. Routine serial FBC monitoring is NOT required (incidence too low), but a low threshold for checking FBC in symptomatic patients is essential.",
    "AVOID mirtazapine in OBESITY (weight gain will worsen) and in patients who need to be ALERT (commercial drivers, machinery operators, students during exams). Prefer bupropion or an activating SSRI (fluoxetine) instead.",
    "NO DISCONTINUATION SYNDROME — mirtazapine's long half-life (20–40 hours) and lack of SERT/NET blockade mean withdrawal symptoms are typically mild or absent, unlike paroxetine or venlafaxine. This is a major advantage in patients who have struggled with SSRI/SNRI withdrawal in the past.",
  ],

  examPearls: [
    "NaSSA — does NOT block any reuptake transporter (no SERT, NET, or DAT blockade). Works entirely through RECEPTOR ANTAGONISM. THE single most testable concept.",
    "Mechanism: α2-AUTORECEPTOR antagonist → disinhibits NE release (↑ NE). α2-HETERORECEPTOR antagonist → disinhibits 5-HT release (↑ 5-HT). One molecule, two monoamines, no transporter blockade.",
    "Also blocks 5-HT2A (anxiolysis, shunts to 5-HT1A), 5-HT2C (permits NE/DA — no sexual SE), 5-HT3 (antiemetic — like ondansetron), and H1 (SEDATION + WEIGHT GAIN — the signature effects).",
    "H1 antagonism → SEDATION + WEIGHT GAIN. These are mirtazapine's SIGNATURE side effects — differentiating it from SSRIs (which cause nausea, sexual SE, and weight-neutral/mild-gain profiles).",
    "5-HT2C antagonism → NO sexual dysfunction (advantage over SSRIs). Mirtazapine can be ADDED to an SSRI to reverse SSRI-induced sexual dysfunction (alternative: bupropion).",
    "5-HT3 antagonism → ANTIEMETIC effect (same receptor as ondansetron). Useful in chemotherapy patients with depression.",
    "INVERSE DOSE–SEDATION: lower doses (7.5–15 mg) are MORE sedating than higher doses (30–45 mg). At higher doses, the noradrenergic effect counteracts H1 sedation. High-yield counterintuitive fact.",
    "RAPID ONSET: sleep and appetite improve within DAYS (H1 effect). Mood improvement takes 2–4 weeks. Faster than SSRIs (4–6 weeks for sleep, 6+ weeks for mood).",
    "AGRANULOCYTOSIS — rare (~1 in 1000) but is mirtazapine's signature SERIOUS adverse effect. Counsel patients to report fever/sore throat immediately. Higher incidence than other antidepressants.",
    "FDA indication: MDD only (adults). Off-label: anxiety disorders, insomnia (low dose), PTSD, depression with weight loss/anorexia, chemotherapy-induced nausea, SSRI-induced sexual dysfunction (augmentation).",
    "'CALIFORNIA ROCKET FUEL' = venlafaxine + mirtazapine augmentation — most powerful pharmacological combination in treatment-resistant depression.",
    "Metabolised by CYP1A2, CYP2D6, and CYP3A4 (multiple pathways = fewer clinically significant interactions than SSRIs metabolised by a single CYP). Half-life 20–40 hours — once daily at NIGHT.",
    "NO DISCONTINUATION SYNDROME — long half-life and absence of transporter blockade mean withdrawal is typically mild or absent. Major advantage over paroxetine and venlafaxine.",
    "SolTab = orally disintegrating formulation. Useful for patients with dysphagia, severe depression negativism, or adherence concerns.",
    "Contraindicated in PHAEOCHROMOCYTOMA — α2 antagonism can trigger hypertensive crisis from uncontrolled catecholamine release. Easy-to-miss class-specific contraindication.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "MIR — Mirtazapine signatures",
      trick: "M = More sleep (H1 sedation), I = Inverse dose-sedation (15 mg > 30 mg for sleep), R = Receptor antagonist (no reuptake blockade)",
      remembers: "Mirtazapine's three signature high-yield properties: sedation, inverse dose-response, and unique receptor-antagonist mechanism.",
    },
    {
      title: "No SERT, No NET, No DAT — 'Triple Negative'",
      trick: "Mirtazapine is TRIPLE-NEGATIVE for transporters — it blocks α2, 5-HT2A/2C/3, and H1 instead. 'It's a receptor drug, not a reuptake drug.'",
      remembers: "Mirtazapine is the only major antidepressant with zero affinity for any monoamine transporter — mechanism is entirely receptor antagonism.",
    },
    {
      title: "α2 = 'Auto + Hetero' = ↑ NE + ↑ 5-HT",
      trick: "α2-AUTO receptor on NE neuron → blocks the brake → ↑ NE. α2-HETERO receptor on 5-HT neuron → blocks the brake → ↑ 5-HT. ONE drug, TWO monoamines, ZERO transporters blocked.",
      remembers: "How mirtazapine increases both norepinephrine AND serotonin without any reuptake inhibition — the NaSSA mechanism in one line.",
    },
    {
      title: "H1 = 'Hungry + Hibernating'",
      trick: "Histamine H1 blockade = Hungry (weight gain) + Hibernating (sedation). 'The bear antidepressant' — eats and sleeps.",
      remembers: "Mirtazapine's two signature side effects (sedation + weight gain) both come from a single receptor — H1 — which is also why it works in depression with insomnia + anorexia.",
    },
    {
      title: "5-HT2C = 'Cancels sexual SE'; 5-HT3 = 'No Nausea'",
      trick: "5-HT2C blockade Cancels Sexual side effects (permits DA). 5-HT3 blockade prevents Nausea (like ondanSetron). Two receptor blocks, two SSRI side-effects avoided.",
      remembers: "Why mirtazapine lacks the two most bothersome SSRI side effects (sexual dysfunction and nausea) — it blocks the receptors that mediate them.",
    },
    {
      title: "Inverse dose–sedation — 'Low dose = Lights out'",
      trick: "LOW dose = Lights out (sedating). HIGH dose = Heightened (noradrenergic counteracts sedation). 15 mg sedates more than 30 mg.",
      remembers: "The counterintuitive dose-sedation relationship: increase the dose to DECREASE sedation. High-yield exam fact and common clinical error if missed.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: NaSSA (Noradrenergic and Specific Serotonergic Antidepressant). Mechanism: RECEPTOR ANTAGONISM — no SERT, NET, or DAT blockade.",
    "Receptors blocked: α2-autoreceptor (↑ NE), α2-heteroreceptor (↑ 5-HT), 5-HT2A (anxiolysis), 5-HT2C (no sexual SE), 5-HT3 (antiemetic), H1 (sedation + weight gain), α1 (orthostasis).",
    "Signature side effects: SEDATION (H1, #1) + WEIGHT GAIN (H1, #2). Both features, not bugs, in depression with insomnia + anorexia.",
    "Signature ADVANTAGES: NO sexual dysfunction (5-HT2C blockade), NO nausea (5-HT3 blockade), RAPID onset (sleep/appetite improve in DAYS), NO discontinuation syndrome (long half-life).",
    "INVERSE dose–sedation: 15 mg is MORE sedating than 30 mg (noradrenergic counter-effect at higher doses). High-yield exam fact.",
    "FDA indication: MDD (adults only). Off-label: anxiety, insomnia (low dose 7.5–15 mg), PTSD, depression with weight loss/anorexia, chemo-induced nausea, SSRI sexual dysfunction augmentation.",
    "Serious adverse effects: AGRANULOCYTOSIS (~1 in 1000, signature — counsel re fever/sore throat), serotonin syndrome (only with other serotonergic drugs), suicidality <25 (black box), mania activation, orthostatic syncope, RLS, hepatotoxicity.",
    "Contraindications: MAOIs (14-day washout), phaeochromocytoma (α2 antagonism → hypertensive crisis), linezolid/IV methylene blue, hypersensitivity. Caution in severe hepatic/renal impairment.",
    "Interactions: MAOIs (contraindicated), serotonergic drugs (major — but safely combined with SSRIs/SNRIs as augmentation, e.g. 'California Rocket Fuel'), CNS depressants/alcohol (additive sedation), CYP1A2/3A4 inhibitors (raise levels), CYP inducers (lower levels), warfarin (monitor INR).",
    "Pharmacokinetics: Half-life 20–40 hours (once daily at NIGHT). Metabolised by CYP1A2 + CYP2D6 + CYP3A4 (multiple pathways → fewer interactions). No active metabolite. 75% renal excretion.",
    "Dosing: Start 15 mg at night, titrate to 30–45 mg over 1–2 weeks. Reduce 50% in moderate-severe renal (CrCl <40) or hepatic (Child-Pugh A/B) impairment. SolTab = orally disintegrating formulation.",
    "Clinical niche: depression with INSOMNIA + ANOREXIA + WEIGHT LOSS + ANXIETY (especially elderly). AVOID in obesity and where alertness required. Augmentation of choice for SSRI sexual dysfunction alongside bupropion.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Elderly depression with insomnia, weight loss, and anxiety — mirtazapine's signature niche",
      presentation:
        "A 76-year-old widow presents with 3 months of low mood, severe insomnia (waking at 3 AM, unable to return to sleep), 6 kg unintentional weight loss, and prominent anxiety. Her GP is considering an antidepressant — the phenotype (insomnia + anorexia + anxiety + elderly) points to mirtazapine.",
      history:
        "Mrs K, a 76-year-old retired schoolteacher, presents to her GP with 3 months of progressive low mood, anhedonia, and reduced function. Symptoms began after the death of her husband of 52 years 4 months ago. She describes waking at 3 AM every night unable to return to sleep, eating only 'a few mouthfuls' at meals (her daughter confirms she has lost ~6 kg, from 58 kg to 52 kg — BMI now 20.5), feeling 'on edge and worried about everything' (particularly about being alone and becoming a burden), and finding it hard to concentrate on reading or television. She denies suicidal ideation but says 'I don't see much point in going on like this'. No prior psychiatric history. Medical history: hypertension (well controlled on amlodipine 5 mg), osteoporosis (on alendronate), osteoarthritis. No known cardiac, renal, or hepatic disease. She lives alone, daughter visits weekly. She does not drive at night. No alcohol, no recreational drugs. No allergies. Medications: amlodipine 5 mg, alendronate 70 mg weekly, calcium/vitamin D. Her daughter is concerned she is 'fading away'.",
      examination:
        "Alert, cooperative, slightly slow in speech. Mood '3/10', affect congruent and tearful. No hallucinations, delusions, or thought disorder. Cognitively intact (MoCA 26/30 — lost 1 point on recall, 1 on serial 7s, 1 on date — within normal for age). PHQ-9 score 18 (moderately severe). GAD-7 score 13 (moderate). Weight 52 kg (BMI 20.5 — down from 24.3 six months ago). BP 138/82 lying, 122/74 standing (mild orthostatic drop, asymptomatic). HR 74. No thyroid enlargement, no neurological deficit. TSH, FBC, LFTs, fasting glucose, electrolytes all normal. ECG normal (QTc 420 ms).",
      diagnosis:
        "Major Depressive Disorder, single episode, moderate-severe, with anxious distress and prominent neurovegetative symptoms (insomnia, anorexia, weight loss). ICD-10 F32.2. Differential: bereavement (inadequate explanation given severity, duration >2 months, and neurovegetative symptoms); hypothyroidism-induced depression (TSH normal — excluded); underlying malignancy causing weight loss (considered — but the depression is clearly primary, weight loss temporally follows mood symptoms and is consistent with reduced intake); bipolar depression (no prior manic episodes; family history negative).",
      rationale:
        "Mirtazapine chosen because the patient's phenotype is the textbook mirtazapine niche — depression with INSOMNIA + ANOREXIA + WEIGHT LOSS + ANXIETY in an ELDERLY patient. Specifically: (1) H1 blockade will directly treat her insomnia (currently her most distressing symptom) — sleep improvement within days; (2) H1 blockade will stimulate appetite and reverse her weight loss — a therapeutically DESIRABLE side effect here, unlike in most antidepressants; (3) 5-HT2A blockade will address her anxiety ('on edge'); (4) the sedating profile allows once-nightly dosing that aids adherence in an elderly patient; (5) NO sexual side effects matter less at her age but the favourable side-effect profile overall suits a frail elderly patient; (6) NO nausea — important given her already-poor appetite; (7) long half-life → no significant discontinuation syndrome if she forgets doses; (8) low CYP interaction burden — important given her concurrent amlodipine (CYP3A4 substrate, but mirtazapine's modest interaction profile is acceptable). An SSRI was specifically REJECTED because SSRIs cause early activation that would WORSEN her insomnia and anxiety in the first 1–2 weeks, and because SSRIs cause nausea that would worsen her anorexia. Bupropion was rejected as it is activating and worsens insomnia and anxiety. Venlafaxine was rejected due to BP concerns (she has hypertension) and discontinuation risk in an elderly patient who may miss doses. Trazodone was considered for sleep but is less effective as a primary antidepressant at hypnotic doses. Start low (7.5 mg) given age and orthostatic drop on examination, titrate to 15 mg at night within a week, with the option of 30 mg if response is partial.",
      management:
        "Started mirtazapine 7.5 mg at night for 4 days (cautious start given age and orthostatic BP drop), then 15 mg at night. Plan: review at 1 week (sleep, appetite, sedation, orthostasis), 2 weeks (early response — sleep/appetite should improve), 4 weeks (mood response — PHQ-9), 6 weeks (dose escalation to 30 mg if PHQ-9 reduction <30%), 12 weeks (full response assessment). Lying and standing BP at every visit. Weight documented at every visit ( EXPECT an increase — this is a THERAPEUTIC goal here, not an adverse effect). PHQ-9 at baseline, 4, 8, 12 weeks. Counselled the patient and daughter: (1) take at night — sedation will help sleep and is intended; (2) drowsiness may persist into morning initially — be careful standing up; (3) expect appetite to increase and weight to return — this is desired; (4) REPORT FEVER OR SORE THROAT IMMEDIATELY — rare but serious blood-count effect (agranulocytosis); (5) avoid alcohol (additive sedation); (6) mood improvement will follow sleep/appetite improvement by 1–2 weeks; (7) do not stop suddenly, though withdrawal is usually mild. Concurrent referral for grief-focused psychotherapy (combination treatment produces better long-term outcomes than either alone, especially in bereavement-related depression). Daughter given crisis contact numbers.",
      outcome:
        "Week 1 (mirtazapine 15 mg at night): sleeping through the night for the first time in 3 months — patient and daughter delighted. Some morning drowsiness until 10 AM (tolerable). Appetite noticeably increased — eating full meals. No orthostatic symptoms. BP 132/78 lying, 120/72 standing. Weight 52.4 kg (small increase). PHQ-9 16 (early improvement). Week 2: sleep continues to improve, appetite further increased, weight 53.5 kg. Morning drowsiness resolved. Patient reports 'feeling like myself again for the first time since my husband died'. PHQ-9 12. Week 4: mood 6/10, eating normally, weight 55 kg (back near pre-morbid), sleeping well. PHQ-9 8 (56% reduction from baseline — treatment response). Dose maintained at 15 mg — no need to escalate. Week 8: PHQ-9 5 (72% reduction — near remission). Returned to church and to her reading group. Week 12: PHQ-9 3 (remission). Weight 56 kg (back to pre-morbid). Sleep 7 hours/night. Engaged in grief psychotherapy. Plan: continue mirtazapine 15 mg for 9 more months (12 months total from remission), then consider taper over 4–6 weeks. Reassess at 6 months. No fever or sore throat at any point — FBC not required but low threshold maintained.",
      teachingPoints: [
        "Mirtazapine's side-effect profile (sedation, weight gain) is THERAPEUTIC in the right patient. Elderly depression with insomnia + anorexia + weight loss is the textbook niche — what is a side effect in a 30-year-old office worker is the desired effect here.",
        "RAPID onset is a major clinical advantage: Mrs K's sleep improved within 7 DAYS — this is impossible with SSRIs, where sleep often worsens initially before improving at 4–6 weeks. In severe depression with insomnia, this early relief can be clinically decisive (reduces suicide risk, restores function earlier).",
        "Start low (7.5 mg) in the elderly — age-related reduction in clearance, increased orthostatic sensitivity, and polypharmacy all warrant caution. Titrate to 15 mg within a week. Many elderly patients respond fully to 15 mg without needing the 30–45 mg doses used in younger adults.",
        "The H1-mediated appetite stimulation reverses cachexia in 2–4 weeks in this phenotype — a rare antidepressant effect that is uniquely valuable in the elderly 'fading away' presentation of depression.",
        "Patient education about AGRANULOCYTOSIS is non-negotiable at every mirtazapine initiation — fever or sore throat must trigger immediate medical review and FBC. The incidence is low (~1 in 1000) but missing it can be fatal. This is the single most important safety counselling point for mirtazapine.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Mirtazapine vs Sertraline vs Bupropion vs Venlafaxine",
      primaryDrug: "Mirtazapine",
      rows: [
        {
          attribute: "Drug class",
          primaryValue: "NaSSA — Noradrenergic and Specific Serotonergic Antidepressant",
          comparisons: [
            { drug: "Sertraline", value: "SSRI (SERT blockade only)" },
            { drug: "Bupropion", value: "NDRI (NET + DAT blockade)" },
            { drug: "Venlafaxine", value: "SNRI (SERT + NET, weak DAT at high dose)" },
          ],
        },
        {
          attribute: "Mechanism — reuptake blockade?",
          primaryValue: "NO — ZERO transporter blockade. Pure receptor antagonist (α2, 5-HT2A/2C/3, H1, α1).",
          comparisons: [
            { drug: "Sertraline", value: "YES — SERT blockade" },
            { drug: "Bupropion", value: "YES — NET + DAT blockade" },
            { drug: "Venlafaxine", value: "YES — SERT + NET (dose-dependent), weak DAT" },
          ],
        },
        {
          attribute: "Sedation",
          primaryValue: "MARKED — signature effect (H1 blockade). Take at night. Inverse dose-response: 15 mg > 30 mg for sedation.",
          comparisons: [
            { drug: "Sertraline", value: "Mildly activating — take in morning" },
            { drug: "Bupropion", value: "Activating — take in morning. Insomnia common." },
            { drug: "Venlafaxine", value: "Mildly activating — take in morning" },
          ],
        },
        {
          attribute: "Weight gain",
          primaryValue: "SIGNATURE — 2–5 kg in 3 months (H1 blockade). Therapeutically useful in anorexia/cachexia.",
          comparisons: [
            { drug: "Sertraline", value: "Mild / weight-neutral" },
            { drug: "Bupropion", value: "Weight-neutral or mild weight LOSS — preferred in obesity" },
            { drug: "Venlafaxine", value: "Weight-neutral long-term" },
          ],
        },
        {
          attribute: "Sexual dysfunction",
          primaryValue: "NONE — 5-HT2C blockade avoids the SSRI mechanism. Can AUGMENT SSRIs to reverse SSRI sexual SE.",
          comparisons: [
            { drug: "Sertraline", value: "Common (30–40%) — SERT-mediated" },
            { drug: "Bupropion", value: "NONE — also no sexual SE; first-line augment for SSRI sexual SE" },
            { drug: "Venlafaxine", value: "Common (30–40%) — SERT-mediated" },
          ],
        },
        {
          attribute: "Nausea / GI upset",
          primaryValue: "NONE — 5-HT3 blockade is antiemetic (like ondansetron). Advantage over SSRIs.",
          comparisons: [
            { drug: "Sertraline", value: "Common — 5-HT3 activation in gut" },
            { drug: "Bupropion", value: "Mild nausea common" },
            { drug: "Venlafaxine", value: "Common — worse at initiation" },
          ],
        },
        {
          attribute: "Onset of action",
          primaryValue: "RAPID — sleep and appetite improve within DAYS (H1 effect). Mood 2–4 weeks.",
          comparisons: [
            { drug: "Sertraline", value: "4–6 weeks for depression; 8–12 for anxiety" },
            { drug: "Bupropion", value: "4–6 weeks" },
            { drug: "Venlafaxine", value: "4–6 weeks" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "NONE — long half-life (20–40 h) and no transporter blockade. Major advantage.",
          comparisons: [
            { drug: "Sertraline", value: "Mild–moderate (FINISH mnemonic)" },
            { drug: "Bupropion", value: "Mild" },
            { drug: "Venlafaxine", value: "WORST — severe withdrawal within hours of missed dose" },
          ],
        },
        {
          attribute: "Signature serious adverse effect",
          primaryValue: "AGRANULOCYTOSIS (~1 in 1000) — counsel re fever/sore throat. Also orthostatic hypotension (α1 blockade).",
          comparisons: [
            { drug: "Sertraline", value: "SIADH (elderly), serotonin syndrome, bleeding" },
            { drug: "Bupropion", value: "Seizures (dose-dependent — avoid >450 mg, in eating disorders, seizure disorders)" },
            { drug: "Venlafaxine", value: "Dose-dependent hypertension, severe withdrawal, serotonin syndrome" },
          ],
        },
        {
          attribute: "FDA indications",
          primaryValue: "MDD only (adults). Off-label: anxiety, insomnia, PTSD, nausea, cachexia.",
          comparisons: [
            { drug: "Sertraline", value: "6 indications: MDD, OCD, Panic, PTSD, Social Anxiety, PMDD" },
            { drug: "Bupropion", value: "MDD, SAD, smoking cessation. Off-label: ADHD, sexual dysfunction" },
            { drug: "Venlafaxine", value: "MDD, GAD, Social Anxiety, Panic" },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "20–40 hours (mean ~30 h) — once daily at night",
          comparisons: [
            { drug: "Sertraline", value: "26 hours" },
            { drug: "Bupropion", value: "21 hours (parent) — needs XL formulation for once-daily" },
            { drug: "Venlafaxine", value: "5 h parent / 11 h active metabolite — short, hence severe withdrawal" },
          ],
        },
        {
          attribute: "Best clinical niche",
          primaryValue: "Depression with INSOMNIA + ANOREXIA + WEIGHT LOSS + ANXIETY. Augmentation of SSRIs for sexual dysfunction. 'California Rocket Fuel' (with venlafaxine).",
          comparisons: [
            { drug: "Sertraline", value: "First-line MDD, anxiety disorders, OCD, PTSD. Pregnancy/lactation." },
            { drug: "Bupropion", value: "Depression with anergia/anhedonia, smoking cessation, SSRI sexual SE augmentation, ADHD adjunct." },
            { drug: "Venlafaxine", value: "SSRI-non-responsive MDD, anergic depression, neuropathic pain, hot flushes." },
          ],
        },
      ],
      takeaway:
        "Mirtazapine is the SEDATING + APPETITE-STIMULATING antidepressant — opposite in clinical profile to bupropion (activating + weight-neutral). It is mechanistically unique (no reuptake blockade — pure receptor antagonist). Choose mirtazapine for depression with insomnia + anorexia + anxiety (especially elderly); choose sertraline for first-line MDD and pregnancy; choose bupropion for depression with anergia/obesity/smoking or for SSRI sexual SE augmentation; choose venlafaxine for treatment-resistant or anergic depression (but watch BP and withdrawal). Mirtazapine + bupropion share NO sexual SE — both are first-line augmentations for SSRI sexual dysfunction. Mirtazapine + venlafaxine = 'California Rocket Fuel' for treatment-resistant depression.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute receptor antagonism",
      description:
        "Mirtazapine blocks α2-adrenergic, 5-HT2A/2C/3, H1, and α1 receptors within hours. The first effects patients notice are from H1 blockade — sedation and increased appetite — which can begin on the very first night. This is why mirtazapine is so rapidly effective for insomnia.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Sleep and appetite improve (signature rapid onset)",
      description:
        "Sleep architecture normalises (increased slow-wave sleep, modified REM). Appetite increases. Weight gain may begin. These H1-mediated effects are the FIRST clinical changes — often within DAYS — and are a major advantage over SSRIs, where sleep often worsens initially. Patients and families often notice 'lights coming back on' behaviourally before mood scores change.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–2",
      title: "Anxiety reduction",
      description:
        "5-HT2A antagonism and the α2-mediated increase in serotonergic tone (shunted to 5-HT1A) produce an anxiolysis that often precedes full antidepressant effect. Patients with anxious depression frequently report feeling 'calmer' or 'less on edge' during this period.",
      phase: "onset",
    },
    {
      id: "t4",
      time: "Weeks 2–4",
      title: "Early mood improvement",
      description:
        "Downstream neuroadaptive changes begin to manifest: 5-HT1A receptor upregulation, increased BDNF expression in the hippocampus, and HPA-axis normalisation. Mood begins to lift. PHQ-9 should start to fall. Note: mirtazapine's mood onset is often 1–2 weeks FASTER than SSRIs — a clinical advantage.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 4–8",
      title: "Full therapeutic effect",
      description:
        "Steady-state receptor occupancy and full downstream adaptations achieved. Mood, anxiety, sleep, and appetite typically reach maximum improvement. PHQ-9 should demonstrate ≥50% reduction (treatment response); remission (PHQ-9 <5) often by week 8–12.",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Months 3–12",
      title: "Maintenance & relapse prevention",
      description:
        "Continue treatment for 6–12 months after the FIRST depressive episode, longer (often indefinite) for recurrent episodes. Long-term mirtazapine is generally well tolerated — sedation and weight gain tend to plateau, and the absence of significant discontinuation syndrome makes long-term adherence easier than with SSRIs/SNRIs.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Tapered withdrawal (mild or absent)",
      description:
        "Unlike SSRIs (especially paroxetine) and SNRIs (especially venlafaxine), mirtazapine has a MILD or ABSENT discontinuation syndrome thanks to its long half-life (20–40 hours) and lack of transporter blockade. Taper over 2–4 weeks is usually sufficient. Patients who have struggled with SSRI/SNRI withdrawal in the past often find mirtazapine much easier to stop.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why am I so sleepy on mirtazapine?",
      answer:
        "Mirtazapine blocks histamine (H1) receptors in the brain, which causes sedation — this is actually one of the medicine's intended effects and the reason it is taken at night. The sedation typically improves over 1–2 weeks as your body adjusts. COUNTERINTUITIVELY, lower doses (7.5–15 mg) are MORE sedating than higher doses (30–45 mg) — because at higher doses the noradrenergic effect counteracts the histamine sedation. So if you are too drowsy on 15 mg, your doctor may actually INCREASE the dose to 30 mg rather than decrease it.",
    },
    {
      question: "Why am I gaining weight on mirtazapine?",
      answer:
        "Mirtazapine blocks histamine (H1) receptors in the hypothalamus, which stimulates appetite — particularly for carbohydrates. Most patients gain 2–5 kg in the first 3 months. If your depression was accompanied by weight loss or poor appetite, this weight gain may actually be a THERAPEUTIC benefit, helping you return to a healthy weight. If you are already overweight or the weight gain is excessive, talk to your doctor — they may suggest a switch to a weight-neutral antidepressant like bupropion or an SSRI (other than paroxetine).",
    },
    {
      question: "Why does a LOWER dose make me MORE sleepy? That doesn't make sense.",
      answer:
        "It sounds counterintuitive, but it is one of mirtazapine's signature pharmacological quirks. At low doses (7.5–15 mg), the histamine-blocking effect (which causes sedation) dominates. At higher doses (30–45 mg), the noradrenergic effect (from α2 receptor blockade — which is mildly activating) becomes stronger and partially counteracts the sedation. So if you are too drowsy on a low dose, your doctor may actually INCREASE the dose rather than decrease it. This is a high-yield fact about mirtazapine.",
    },
    {
      question: "When should I take mirtazapine — morning or night?",
      answer:
        "Take it at NIGHT — usually 30–60 minutes before bed. Mirtazapine is sedating (within hours of the first dose) and the sedation is one of its intended effects, particularly if your depression includes insomnia. The sedation can last into the next morning, so be cautious with driving or operating machinery until you know how it affects you. As your body adapts (usually 1–2 weeks), the morning drowsiness typically resolves.",
    },
    {
      question: "Can I take mirtazapine with other antidepressants?",
      answer:
        "Mirtazapine is sometimes COMBINED with other antidepressants — most commonly with SSRIs or SNRIs — under close medical supervision, for two main reasons: (1) to AUGMENT a partial response (the combination is more effective than either alone); (2) to REVERSE SSRI-induced sexual dysfunction (mirtazapine's 5-HT2C blockade restores the dopamine signalling that SSRIs suppress). The famous combination is venlafaxine + mirtazapine, nicknamed 'California Rocket Fuel' for treatment-resistant depression. NEVER combine mirtazapine with MAOIs (e.g. phenelzine, tranylcypromine, linezolid) — this can cause life-threatening serotonin syndrome. Always discuss combination treatment with your psychiatrist.",
    },
    {
      question: "Will mirtazapine affect my sex life?",
      answer:
        "Unlike SSRIs (sertraline, fluoxetine, paroxetine, etc.) which commonly cause sexual side effects (low libido, delayed orgasm, erectile dysfunction), mirtazapine is UNLIKELY to cause sexual side effects — its 5-HT2C blockade actually prevents the mechanism by which SSRIs cause sexual dysfunction. In fact, mirtazapine is sometimes ADDED to an SSRI to reverse SSRI-induced sexual side effects. If you have had sexual side effects on an SSRI in the past, mirtazapine is a good option to discuss with your doctor.",
    },
    {
      question: "What should I do if I develop a fever or sore throat while on mirtazapine?",
      answer:
        "STOP the medicine and contact your doctor IMMEDIATELY for a blood test. Mirtazapine rarely (~1 in 1000 patients) causes a serious drop in white blood cells called agranulocytosis, which makes you vulnerable to severe infections. Fever, sore throat, mouth ulcers, or other signs of infection can be early warning signs. The condition is reversible when the medicine is stopped, but delay can be dangerous. This is the single most important safety counselling point for mirtazapine — every patient should know it.",
    },
    {
      question: "Can I stop mirtazapine suddenly if I feel better?",
      answer:
        "Not usually. For a first depressive episode, treatment should continue for 6–12 months AFTER you feel better — stopping earlier significantly increases relapse risk. The GOOD NEWS is that mirtazapine has a MILD or ABSENT discontinuation syndrome — thanks to its long half-life (20–40 hours) and lack of transporter blockade, withdrawal symptoms are typically milder than with SSRIs (especially paroxetine) or SNRIs (especially venlafaxine). A taper over 2–4 weeks is usually sufficient. Always discuss timing with your clinician before stopping.",
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
        section: "Chapter 30 — Antidepressant Agents (NaSSA section)",
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
        section: "Mirtazapine ranked among the most effective and tolerable antidepressants",
      },
      {
        source: "Watanabe N et al. Mirtazapine versus other antidepressive agents for depression. Cochrane Database Syst Rev 2011;(12):CD006528.",
      },
    ],
    reviews: [
      {
        source: "Anttila SA, Leinonen EV. A review of the pharmacological and clinical profile of mirtazapine. CNS Drug Rev 2001;7(3):249-264.",
      },
      {
        source: "Fawcett J, Barkin RL. A meta-analysis of eight randomized, double-blind, controlled clinical trials of mirtazapine for the treatment of patients with major depression and symptoms of anxiety. J Clin Psychiatry 1998;59:123-127.",
      },
      {
        source: "FDA Prescribing Information — REMERON / REMERON SolTab (mirtazapine tablets)",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2007/020415s024lbl.pdf",
      },
    ],
    patientResources: [
      {
        source: "Royal College of Psychiatrists — Patient information on antidepressants",
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
      relationship: "Alternative antidepressant. Activating (vs mirtazapine sedating), weight-neutral (vs mirtazapine weight gain), causes sexual SE and nausea (vs mirtazapine which does not). SSRI of choice in pregnancy. Choose sertraline for first-line MDD without insomnia/anorexia; choose mirtazapine when insomnia + anorexia + anxiety dominate.",
    },
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      drugClass: "SNRI",
      relationship: "Augmentation partner — 'California Rocket Fuel'. Combined with mirtazapine in treatment-resistant depression for powerful dual mechanism (SERT/NET blockade + α2/5-HT2/H1 antagonism). Venlafaxine alone: activating, weight-neutral, causes sexual SE, severe withdrawal — opposite profile to mirtazapine.",
    },
    {
      name: "Bupropion",
      slug: "bupropion",
      drugClass: "NDRI",
      relationship: "Profile opposite to mirtazapine — activating (vs sedating), weight-neutral/loss (vs weight gain), no sexual SE (also none on mirtazapine). The two share absence of sexual SE — both are first-line augmentations for SSRI sexual dysfunction. Choose bupropion for lethargic/obese depression or smoking cessation; mirtazapine for insomnia/anorexia depression.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship: "Alternative SSRI — most activating, longest half-life (1–4 days, mildest withdrawal), paediatric-approved. Useful in lethargic depression. Mirtazapine preferred when insomnia and anorexia dominate; fluoxetine preferred when anergia dominates and long half-life aids adherence.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      drugClass: "SSRI",
      relationship: "Alternative SSRI with lowest CYP interaction profile — preferred in patients on complex regimens. Weight-neutral, causes sexual SE. Choose escitalopram when drug interactions are a concern and SSRI is preferred first-line.",
    },
    {
      name: "Paroxetine",
      slug: "paroxetine",
      drugClass: "SSRI",
      relationship: "SSRI with worst discontinuation syndrome, most weight gain among SSRIs, strong CYP2D6 inhibition, avoid in pregnancy. Mirtazapine is preferred over paroxetine in most patients — mirtazapine has NO significant discontinuation syndrome, more predictable weight gain, and no sexual SE.",
    },
    {
      name: "Duloxetine",
      drugClass: "SNRI",
      relationship: "Alternative SNRI — balanced SERT/NET at all doses (vs venlafaxine dose-dependent). FDA-approved for neuropathic pain and fibromyalgia. Causes sexual SE and nausea (vs mirtazapine which does not). Useful when pain + depression coexist.",
    },
    {
      name: "Trazodone",
      drugClass: "SARI",
      relationship: "Most similar antidepressant to mirtazapine — both are sedating (5-HT2A + H1 antagonism), both useful for insomnia, both have low sexual SE. Trazodone is primarily used as a hypnotic at low doses (25–100 mg) and rarely as a primary antidepressant (needs 300–600 mg). Mirtazapine is effective as an antidepressant at standard doses (15–45 mg). Choose trazodone when only sleep is needed; choose mirtazapine when full antidepressant effect + sleep are needed.",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Generalised Anxiety Disorder", relationship: "off-label" },
    { name: "Panic Disorder", relationship: "off-label" },
    { name: "Social Anxiety Disorder", relationship: "off-label" },
    { name: "Insomnia", relationship: "off-label", href: "#clinical-uses" },
    { name: "Post-Traumatic Stress Disorder", relationship: "off-label" },
    { name: "Anorexia / cachexia (depression-related or cancer-related)", relationship: "off-label", href: "#clinical-uses" },
    { name: "Chemotherapy-induced nausea and vomiting", relationship: "off-label", href: "#clinical-uses" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Mirtazapine", type: "drug", href: "/drugs/mirtazapine", note: "The drug you're reading about" },
    { label: "NaSSA", type: "class", href: "#mechanism", note: "Noradrenergic and Specific Serotonergic Antidepressant — no reuptake blockade" },
    { label: "α2-adrenergic receptor", type: "neurotransmitter", href: "#mechanism", note: "Auto + hetero receptor antagonism → ↑ NE and ↑ 5-HT release" },
    { label: "H1 histamine receptor", type: "neurotransmitter", href: "#mechanism", note: "Antagonism → SEDATION + WEIGHT GAIN (signatures)" },
    { label: "5-HT2C receptor", type: "neurotransmitter", href: "#mechanism", note: "Antagonism → NO sexual dysfunction (advantage over SSRIs)" },
    { label: "5-HT3 receptor", type: "neurotransmitter", href: "#mechanism", note: "Antagonism → antiemetic (like ondansetron)" },
    { label: "Histamine", type: "neurotransmitter", href: "#mechanism", note: "Brain H1 blockade drives sleep + appetite" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Serotonergic neurons — disinhibited by α2-heteroreceptor blockade" },
    { label: "Locus Coeruleus", type: "brain-region", href: "#brain-regions", note: "Noradrenergic neurons — disinhibited by α2-autoreceptor blockade" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "↑ NE + 5-HT1A signalling → mood lifts" },
    { label: "Depression", type: "condition", href: "#clinical-uses", note: "Primary FDA-approved indication" },
    { label: "Insomnia", type: "condition", href: "#clinical-uses", note: "Off-label use at low dose (7.5–15 mg) — H1 sedation" },
    { label: "Weight Gain", type: "side-effect", href: "#side-effects", note: "Signature — H1-mediated; therapeutic in anorexia, problematic in obesity" },
    { label: "Sedation", type: "side-effect", href: "#side-effects", note: "Signature — H1-mediated; inverse dose-response (15 mg > 30 mg)" },
    { label: "Agranulocytosis", type: "side-effect", href: "#side-effects", note: "Rare but serious — counsel re fever/sore throat" },
    { label: "Patient Guide — Starting mirtazapine", type: "patient-guide", href: "#patient-education", note: "What to expect: sleep improves in days, weight gain expected, no sexual SE, report fever immediately" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A sedating, appetite-stimulating antidepressant that helps with sleep and weight — and is unlikely to cause the sexual side effects or nausea that other antidepressants can.",
    summary:
      "Mirtazapine is an antidepressant that works differently from most others. Instead of blocking the recycling of brain chemicals, it blocks specific receptors in the brain — leading to more norepinephrine and serotonin (the mood chemicals) AND a separate effect on histamine and other receptors. The result is a medicine that makes you SLEEPY (so you take it at night) and HUNGRY (so you may gain weight — useful if your depression has caused weight loss, but talk to your doctor if you are overweight). Mirtazapine usually does NOT cause the sexual problems or nausea that other antidepressants can. Some people notice sleep and appetite improve within DAYS — often before the mood benefit, which takes 2–4 weeks to develop.",
    mechanism:
      "Your brain uses chemicals called serotonin, norepinephrine, and histamine to regulate mood, sleep, appetite, and anxiety. Most antidepressants (like SSRIs) work by stopping the recycling of serotonin. Mirtazapine works differently — it doesn't touch the recycling at all. Instead, it blocks specific 'receiver' points (receptors) on nerve cells. By blocking certain receptors (α2 receptors), it tells the brain to release MORE norepinephrine AND MORE serotonin. By blocking the histamine receptor (H1), it makes you sleepy and hungry. By blocking other receptors (5-HT2C and 5-HT3), it avoids the sexual side effects and nausea that other antidepressants cause. So mirtazapine is like a key that fits several locks at once — and the result is a sleep-inducing, appetite-stimulating, mood-lifting medicine with relatively few of the typical antidepressant side effects.",
    sideEffects:
      "The two most common side effects are SEDATION (you will feel sleepy — take it at night) and WEIGHT GAIN (you may gain 2–5 kg in the first few months — useful if you have lost weight, problematic if you are already overweight). Other common effects include increased appetite, dry mouth, constipation, dizziness when standing up, vivid dreams, and fluid retention. The RARE but SERIOUS side effect to know about is agranulocytosis — a drop in white blood cells that makes you vulnerable to infection. If you develop a FEVER or SORE THROAT while on mirtazapine, STOP the medicine and see your doctor IMMEDIATELY for a blood test. This is rare (about 1 in 1000 patients) but important to know.",
    monitoring:
      "You'll have check-ins with your doctor at 1 week, 2 weeks, 4 weeks, and then monthly until stable. They will check your weight, mood (PHQ-9 questionnaire), sleep, and any side effects — especially dizziness when standing. Your blood pressure may be checked lying and standing, particularly if you are elderly or on blood pressure medication. Routine blood tests are NOT required — but if you ever develop a fever or sore throat, your doctor will check your blood count urgently.",
    contraindications:
      "Don't take mirtazapine if you've taken an MAOI antidepressant in the last 14 days (dangerous combination). Tell your doctor if you have a phaeochromocytoma (a rare adrenal gland tumour) — mirtazapine can trigger a dangerous blood pressure spike in this condition. Tell your doctor about all other medicines you take — especially other antidepressants, tramadol (pain), triptans (migraine), antibiotics like linezolid, sedatives, blood pressure medicines, or herbal products like St John's Wort.",
    interactions:
      "The main thing to know: AVOID ALCOHOL — it adds to mirtazapine's sedation and dizziness and can be dangerous. Be careful with other sedatives (sleeping pills, anxiety medicines, strong painkillers) — they add to the drowsiness. Tell your pharmacist about everything you take, including over-the-counter products. Some antibiotics (like ciprofloxacin) and antifungals (like ketoconazole) can raise mirtazapine levels — your doctor may adjust the dose. Mirtazapine has fewer drug interactions than many antidepressants because it is broken down by three different liver enzymes, but always check with your pharmacist.",
  },

  /* ---- India Layer extensions ---- */

  /* Indian clinical practice */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Remeron", manufacturer: "Merck", strengths: "15mg, 30mg, 45mg", note: "Originator brand — available in metros, expensive" },
      { name: "Mirtaz", manufacturer: "Sun Pharma", strengths: "7.5mg, 15mg, 30mg, 45mg", note: "Most commonly prescribed generic mirtazapine in India" },
      { name: "Mazetol", manufacturer: "Cipla", strengths: "15mg, 30mg" },
      { name: "Mirnite", manufacturer: "Intas", strengths: "7.5mg, 15mg, 30mg" },
      { name: "Mirtazapine", manufacturer: "Sun Pharma / Intas generic", strengths: "15mg, 30mg" },
    ],
    typicalDoses:
      "Depression: start 15mg OD HS (night), titrate to 30mg OD after 1–2 weeks, max 45mg OD. In Indian practice, 7.5mg start is used in elderly or highly sedation-sensitive patients. Paradoxical: higher doses (30–45mg) are LESS sedating than 15mg due to dose-dependent noradrenergic effect counterbalancing H1 blockade. Maximum: 45mg/day.",
    prescribingScenarios: [
      "First choice when depression presents with INSOMNIA and POOR APPETITE / WEIGHT LOSS — mirtazapine's sedation and weight gain are therapeutic, not side effects.",
      "Augmentation in SSRI partial response (especially with residual insomnia and weight loss) — California Rocket Fuel (venlafaxine + mirtazapine) for treatment-resistant depression.",
      "Adjunct in cancer chemotherapy — mirtazapine is antiemetic (5-HT3 antagonism) and stimulates appetite, addressing chemo-induced nausea and anorexia.",
      "Off-label for insomnia (low dose 7.5–15mg HS) when conventional hypnotics fail or are contraindicated.",
      "Useful in elderly depressed patients with weight loss and insomnia — but watch for excessive sedation and falls.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
      note: "NOT commonly available in government hospital pharmacies or Jan Aushadhi Kendras. Available in private pharmacies in metros and Tier-1/2 cities. Generic versions (Mirtaz, Mirnite) are more commonly stocked than originator (Remeron). Rural availability is limited — patients may need to source from urban centres.",
    },
    costCategory: "moderate",
    costNote: "Mirtazapine is moderately expensive in India. Mirtaz (Sun Pharma) 15mg costs approximately ₹8–12 per tablet; Remeron (Merck) 15mg costs ₹20–30 per tablet. A 30-day course at 15mg OD costs ₹250–400 (generic) or ₹600–900 (originator). Cost varies by manufacturer and region. NOT commonly available in Jan Aushadhi Kendras.",
    monitoring:
      "In Indian practice, monitoring is primarily clinical. CBC at baseline and at signs of infection (sore throat, fever) — agranulocytosis is rare (~1 in 1000) but serious. Lipid panel and weight at baseline and 12 weeks (weight gain common). LFTs at baseline. Sleep, appetite, and mood reviewed at 1/2/4/6 weeks. PHQ-9 in tertiary centres. Mirtazapine's rapid onset (improvement in sleep and appetite within DAYS, mood within 1–2 weeks) is a distinguishing feature.",
    patientCounselling: [
      "Take at NIGHT (HS) — mirtazapine is sedating, especially at low dose (15mg).",
      "You may feel sleepy and hungry in the first week — this is normal and may actually be helpful if you have been sleeping poorly or losing weight.",
      "Common: weight gain (2–4 kg in 2–3 months — sometimes welcome), increased appetite, morning drowsiness, vivid dreams, dry mouth.",
      "Higher doses are LESS sedating than lower doses — if 15mg makes you too drowsy in the morning, your doctor may INCREASE the dose, not reduce it (paradoxical effect).",
      "Rare but serious: if you develop sore throat, fever, mouth ulcers, or other signs of infection, stop and see your doctor immediately (blood count check — agranulocytosis).",
      "Unlike SSRIs, this medicine does NOT cause sexual side effects — this can be an advantage if you had problems on other antidepressants.",
      "Avoid alcohol — both are sedating, combination causes excessive drowsiness.",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month, contact your doctor or call Tele-MANAS at 14416.",
      "Do not stop suddenly — although mirtazapine has milder discontinuation than SSRIs, tapering is still recommended.",
      "Take with or without food — but if it causes morning grogginess, taking it 1–2 hours earlier (rather than right at bedtime) may help.",
    ],
  },

  /* NMC CBME competency mapping */
  cbmeMapping: {
    subject: "Pharmacology",
    mbbsYear: "Second Professional",
    topic: "Drugs acting on Central Nervous System — Antidepressants (NaSSA, atypical)",
    competencyCodes: ["PH7.3", "PH7.4", "PY3.2"],
    competencyDescriptions: [
      "PH7.3: Describe the mechanism of action, pharmacological actions, adverse effects, contraindications, and therapeutic uses of antidepressant drugs with emphasis on atypical antidepressants like mirtazapine (NaSSA).",
      "PH7.4: Explain the rationale for drug selection, dose individualisation, and monitoring of antidepressant therapy in different clinical scenarios — including depression with insomnia and weight loss.",
      "PY3.2 (Psychiatry, Final Professional): Describe the pharmacological management of mood disorders, including selection of NaSSA (mirtazapine) for depression with insomnia/anorexia and augmentation in treatment-resistant depression.",
    ],
    integrationSubjects: ["Psychiatry", "General Medicine", "Palliative Medicine (appetite stimulation)"],
  },

  /* Exam Lens — structured by Indian examination */
  examLens: {
    mbbs: {
      viva: [
        "When is sedation from an antidepressant actually beneficial? (Mirtazapine in depression with INSOMNIA and WEIGHT LOSS — sedation + appetite stimulation are therapeutic, not side effects.)",
        "What is the mechanism of action of mirtazapine? (NaSSA — α2 adrenergic antagonist → increases NE and 5-HT release (NOT a reuptake blocker). Also blocks 5-HT2A, 5-HT2C, 5-HT3, and H1 receptors.)",
        "Why is mirtazapine called a 'tetracyclic' antidepressant? (Structural — piperazinoazepine ring system with 4 rings; mechanistically different from TCAs despite superficial structural similarity.)",
        "Why does mirtazapine NOT cause sexual dysfunction? (Blocks 5-HT2C receptor — this receptor normally inhibits dopamine release in mesolimbic reward pathway; blocking it preserves dopamine tone → no sexual SE.)",
        "Why is mirtazapine 15mg MORE sedating than 30mg? (Paradoxical — H1 blockade is constant at all doses, but at higher doses the noradrenergic effect (from α2 antagonism) counterbalances H1 sedation. So 15mg = pure H1 sedation; 30–45mg = H1 + NE activation = less net sedation.)",
        "What is the most serious side effect of mirtazapine? (Agranulocytosis — rare ~1 in 1000, but serious. Counsel about sore throat/fever. Also rare: neutropenia, Stevens-Johnson syndrome.)",
      ],
      practical: [
        "Counsel a patient being started on mirtazapine for depression with insomnia and weight loss.",
        "Write a prescription for mirtazapine 15mg OD HS for a 50-year-old with depression, insomnia, and poor appetite.",
        "Identify the side effects to monitor in a patient on mirtazapine (weight gain, sedation, agranulocytosis).",
        "Explain the paradoxical dose-sedation relationship of mirtazapine (15mg more sedating than 30mg).",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics, adverse effects, and therapeutic uses of mirtazapine. Discuss the unique features of NaSSAs: paradoxical dose-sedation, lack of sexual SE, 5-HT3 antiemetic effect, and rapid onset.",
        "A 55-year-old man with depression, severe insomnia, and 6 kg weight loss over 3 months presents for management. Discuss the pharmacological options, including drug selection, dose titration, monitoring, and counselling. Address why mirtazapine may be particularly suitable here.",
      ],
    },
    neetPg: {
      highYield: [
        "Mirtazapine = NaSSA (Noradrenergic and Specific Serotonergic Antidepressant). α2 antagonist → ↑ NE AND ↑ 5-HT release (NOT a reuptake blocker).",
        "Receptor profile: α2 antagonist + 5-HT2A antagonist + 5-HT2C antagonist + 5-HT3 antagonist + H1 antagonist. NO SERT blockade.",
        "NO sexual dysfunction — 5-HT2C blockade preserves dopamine tone in mesolimbic reward pathway.",
        "Sedation + weight gain — both via H1 blockade. THESE ARE THERAPEUTIC in depression with insomnia + weight loss.",
        "INVERSE dose-sedation: 15mg MORE sedating than 30mg. At higher doses, NE effect counterbalances H1 sedation.",
        "Antiemetic: 5-HT3 blockade → useful as adjunct in chemotherapy-induced nausea (off-label).",
        "Rapid onset: improvement in sleep and appetite within DAYS (not 4–6 weeks like SSRIs). Mood improvement in 1–2 weeks.",
        "Agranulocytosis: rare (~1 in 1000) but serious. Counsel about sore throat/fever. Check CBC if symptoms develop.",
        "California Rocket Fuel = venlafaxine + mirtazapine — potent TRD combination (dual NE/DA/5-HT coverage).",
        "Dosing: 15mg OD HS start → 30mg OD after 1–2 weeks → max 45mg OD. Higher doses LESS sedating.",
      ],
      pyqConcepts: [
        "NEET PG 2022: Antidepressant that causes sedation AND weight gain? (Answer: Mirtazapine — H1 antagonist.)",
        "NEET PG 2021: Antidepressant with NO sexual dysfunction? (Answer: Mirtazapine — 5-HT2C blockade; also bupropion.)",
        "NEET PG 2020: Antidepressant with INVERSE dose-sedation (low dose more sedating)? (Answer: Mirtazapine.)",
        "NEET PG 2019: Mechanism of mirtazapine? (Answer: α2 antagonist → ↑ NE and 5-HT release; also blocks 5-HT2A/2C/3 and H1.)",
        "INICET 2021: Antidepressant with antiemetic effect? (Answer: Mirtazapine — 5-HT3 antagonism.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 55-year-old man with depression reports severe insomnia (2 hours/night) and 6 kg weight loss over 3 months. He is started on sertraline 50mg but reports worsening insomnia at week 1. What is the best next step? (Answer: Switch to mirtazapine 15mg OD HS — its sedation and appetite stimulation are therapeutic for THIS patient's symptom profile. SSRIs can worsen insomnia initially.)",
        "A 35-year-old woman on venlafaxine 225mg for 8 weeks has partial response (PHQ-9 18→11) with residual insomnia and low energy. What is the augmentation strategy? (Answer: Add mirtazapine 15mg OD HS — 'California Rocket Fuel'. Covers complementary mechanisms (5-HT + NE/DA), improves sleep and appetite, and may enhance overall response.)",
        "A 72-year-old woman with depression, poor appetite, and weight loss is started on mirtazapine 15mg HS. At week 2, she reports excessive morning drowsiness and a fall. What is the management? (Answer: Either increase dose to 30mg (paradoxically LESS sedating) OR change timing (take 1–2 hours earlier) OR reduce to 7.5mg. Falls in elderly are serious — consider dose escalation first per the inverse dose-sedation rule, then reassess.)",
        "A 28-year-old man on mirtazapine 30mg for 4 weeks presents with sore throat and fever. What is the most likely cause and management? (Answer: Agranulocytosis — rare but serious complication of mirtazapine. STOP mirtazapine, check CBC urgently, start broad-spectrum antibiotics if neutropenic. Counsel patient about this side effect at initiation.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Mirtazapine class: NaSSA (α2 antagonist, NOT reuptake blocker).",
        "Receptor profile: α2 + 5-HT2A + 5-HT2C + 5-HT3 + H1 antagonist.",
        "Side effects: sedation + weight gain (H1) — therapeutic in insomnia/weight loss.",
        "NO sexual dysfunction — 5-HT2C blockade.",
        "Antiemetic effect — 5-HT3 blockade.",
        "INVERSE dose-sedation: 15mg MORE sedating than 30mg.",
        "Rapid onset: sleep and appetite improve within DAYS (not 4–6 weeks like SSRIs).",
        "Serious side effect: agranulocytosis (rare, ~1 in 1000).",
        "California Rocket Fuel = venlafaxine + mirtazapine.",
        "Dosing: 15mg → 30mg → 45mg OD HS.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Mirtazapine is the antidepressant of choice when the SYMPTOM PROFILE matches the drug PROFILE — i.e., depression with prominent insomnia, anxiety, and poor appetite/weight loss. The 'side effects' (sedation, weight gain) become therapeutic effects.",
        "The paradoxical dose-sedation rule is clinically useful: a patient on 15mg with excessive morning drowsiness may benefit from INCREASING to 30mg, which is paradoxically less sedating due to dose-dependent noradrenergic counterbalance of H1 sedation.",
        "California Rocket Fuel (venlafaxine + mirtazapine) is a powerful TRD combination — covers 5-HT (venlafaxine), NE (venlafaxine high dose + mirtazapine α2), and DA (mirtazapine 5-HT2C blockade disinhibits DA). Efficacy in TRD ~50% response rate.",
        "Mirtazapine has a faster onset than SSRIs — sleep and appetite improve within DAYS (H1 and 5-HT2A effects are immediate), mood within 1–2 weeks. This is a counselling point: 'You'll sleep better this week, but mood takes 1–2 weeks.'",
        "Agranulocytosis risk is ~1 in 1000 — similar to clozapine but lower. Routine CBC monitoring is NOT required (unlike clozapine), but patients should be counselled to seek urgent care for sore throat/fever.",
        "Mirtazapine is structurally related to mianserin (another tetracyclic) — mianserin is rarely used in India due to higher agranulocytosis risk. Mirtazapine is the safer successor.",
        "Useful in palliative care: low-dose mirtazapine (7.5–15mg HS) is used for insomnia, appetite stimulation, and antiemetic effect in advanced cancer patients — addresses 3 symptoms with one drug.",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "First-line vs augmentation role",
      internationalSource: "APA / NICE",
      internationalRecommendation: "SSRIs are first-line for MDD. Mirtazapine is an alternative first-line when insomnia and weight loss are prominent (symptom-matched prescribing), and is widely used as augmentation for SSRI/SNRI partial response (especially California Rocket Fuel).",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS also recommends SSRIs first-line. Mirtazapine is reserved for specific symptom profiles (insomnia, weight loss) or as augmentation. Commonly prescribed by psychiatrists in private practice; less commonly in government hospitals due to higher cost than SSRIs.",
    },
    {
      topic: "Use in depression with insomnia",
      internationalSource: "APA / NICE",
      internationalRecommendation: "Mirtazapine is preferred when depression presents with prominent insomnia — its H1-mediated sedation is therapeutic, not a side effect. Avoids the need for separate hypnotic.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — mirtazapine is a good choice for depression with insomnia. In Indian practice, this is particularly relevant given limited access to cognitive-behavioural therapy for insomnia (CBT-I) and the high cost of newer hypnotics.",
    },
    {
      topic: "Use in treatment-resistant depression (TRD)",
      internationalSource: "APA / CANMAT",
      internationalRecommendation: "Mirtazapine augmentation of SSRIs/SNRIs is a recognised TRD strategy. California Rocket Fuel (venlafaxine + mirtazapine) has evidence for enhanced efficacy in TRD.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs with mirtazapine augmentation in TRD. In Indian practice, mirtazapine is often added to SSRI/SNRI for partial response — also addresses residual insomnia and weight loss. Lithium augmentation and thyroid augmentation are also used.",
    },
    {
      topic: "Monitoring for agranulocytosis",
      internationalSource: "FDA Prescribing Information (Remeron)",
      internationalRecommendation: "Routine CBC monitoring is NOT required (unlike clozapine). Patients should be counselled to seek urgent care for sore throat, fever, or signs of infection. Agranulocytosis risk is ~1 in 1000.",
      indianSource: null,
      indianRecommendation: "No dedicated IPS guideline on mirtazapine monitoring — Indian practice follows FDA label. Section reflects accepted clinical practice. In Indian rural settings, patients may have limited access to urgent CBC — counselling about seeking care for infection signs is critical.",
    },
    {
      topic: "Use in palliative care / cancer",
      internationalSource: "NCCN Palliative Care Guidelines",
      internationalRecommendation: "Mirtazapine is used off-label in palliative care for insomnia, appetite stimulation, and antiemetic effect — addresses multiple symptoms with one drug. Useful in advanced cancer patients.",
      indianSource: "Indian Association of Palliative Care (IAPC)",
      indianRecommendation: "IAPC concurs with off-label mirtazapine use in palliative care. In Indian palliative settings, mirtazapine 7.5–15mg HS is a useful single-drug approach for cancer patients with insomnia, anorexia, and mild depression.",
    },
  ],

  /* Indian reference sources */
  indianReferences: [
    {
      source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition",
      type: "textbook",
      section: "Chapter 33 — Antidepressant Drugs (atypical antidepressants, NaSSA)",
    },
    {
      source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression",
      type: "guideline",
      section: "Section on pharmacotherapy — atypical antidepressants and augmentation",
    },
    {
      source: "NMC CBME Curriculum — Pharmacology (Second Professional)",
      type: "curriculum",
      section: "Topic: Drugs acting on CNS — Antidepressants (NaSSA, atypical)",
    },
    {
      source: "NMC CBME Curriculum — Psychiatry (Final Professional)",
      type: "curriculum",
      section: "Topic: Psychopharmacology — Mood disorders",
    },
    {
      source: "Indian Association of Palliative Care (IAPC) — Guidelines",
      type: "guideline",
      section: "Section on pharmacological management of depression, insomnia, and anorexia in palliative care",
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
      section: "Mirtazapine — Schedule H prescription status",
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
      { source: "APA Practice Guideline", recommendation: "SSRIs first-line for MDD. Mirtazapine is an alternative first-line for depression with insomnia/weight loss, and a recognised augmentation strategy in TRD." },
      { source: "FDA", recommendation: "Approved for MDD. Boxed warning: suicidality <25. Agranulocytosis risk ~1 in 1000 — counsel about infection signs." },
      { source: "NICE CG91", recommendation: "SSRIs first-line. Mirtazapine considered when insomnia and weight loss are prominent symptom-matched features." },
      { source: "CANMAT (Canada)", recommendation: "Mirtazapine is a recognised first-line alternative and augmentation strategy for MDD, with evidence for California Rocket Fuel combination in TRD." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "SSRIs first-line. Mirtazapine reserved for specific symptom profiles (insomnia, weight loss) or augmentation. Commonly prescribed in private psychiatric practice." },
      { source: "Indian Association of Palliative Care (IAPC)", recommendation: "Mirtazapine is used off-label in palliative care for insomnia, anorexia, and mild depression — addresses multiple symptoms with one drug." },
      { source: null, recommendation: "No dedicated IPS guideline on mirtazapine monitoring frequency or agranulocytosis surveillance — Indian practice follows FDA label. Current section reflects accepted clinical practice and internationally accepted evidence." },
    ],
    indianClinicalPractice:
      "In Indian practice, mirtazapine is most commonly prescribed by psychiatrists in private practice for: (1) depression with prominent insomnia and weight loss (symptom-matched), (2) augmentation in SSRI/SNRI partial response (especially California Rocket Fuel), and (3) palliative care indications (insomnia, anorexia, mild depression). It is NOT commonly stocked in government hospitals or Jan Aushadhi Kendras. Indian psychiatrists are familiar with the paradoxical dose-sedation rule — patients on 15mg with excessive drowsiness may benefit from dose escalation to 30mg. The rapid onset (sleep and appetite improvement within days) is a counselling point that improves adherence. CBC monitoring is not routine, but patients are counselled about sore throat/fever as a sign of agranulocytosis.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "NOT commonly available in government hospital pharmacies or DMHP centres. May be used in tertiary psychiatry centres for treatment-resistant depression. Patients prescribed mirtazapine must purchase from private pharmacy.",
    privateHospitals:
      "Used in private psychiatric practice for depression with insomnia and weight loss, augmentation in TRD, and palliative care indications. Mirtaz (Sun Pharma) and Mirnite (Intas) are commonly stocked. Monitoring is clinical, with PHQ-9 at 2/4/6/12 weeks.",
    medicalColleges:
      "Teaching drug for atypical antidepressant pharmacology. Used in pharmacology practicals (prescription writing for symptom-matched antidepressant choice). Commonly featured in NEET PG and INICET questions on NaSSA mechanism and paradoxical dose-sedation.",
    primaryCare:
      "Rarely initiated in Indian primary care due to need for symptom-matching counselling and agranulocytosis awareness. GP/family physicians may refer to psychiatrist for mirtazapine initiation. More commonly used in private psychiatric OPD.",
    psychiatryOPD:
      "First choice for depression with insomnia + weight loss (15mg OD HS, titrate to 30–45mg); augmentation in SSRI/SNRI partial response (California Rocket Fuel); palliative care adjunct (7.5–15mg HS for insomnia, anorexia, mild depression). Counselling on paradoxical dose-sedation and agranulocytosis warning is essential.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ) — mirtazapine has lower manic-switch risk than SSRIs but is NOT zero.",
      "Assess symptom profile — mirtazapine is ideal for depression with INSOMNIA and WEIGHT LOSS. If patient has obesity or hypersomnia, choose bupropion instead.",
      "Check baseline weight and BMI — mirtazapine causes weight gain (2–4 kg in 2–3 months).",
      "Check baseline CBC if possible — agranulocytosis risk is rare (~1 in 1000) but serious.",
      "Check LFTs — mirtazapine is metabolised hepatically (CYP1A2, CYP2D6, CYP3A4); reduce dose in hepatic impairment.",
      "Review concurrent medications — mirtazapine has relatively FEW CYP interactions (low interaction profile), but watch for MAOIs, other sedatives, and serotonergic drugs.",
      "Assess suicidal ideation — black box warning for <25. Provide Tele-MANAS (14416) number.",
      "Counsel about paradoxical dose-sedation: 'If 15mg makes you too drowsy in the morning, your doctor may INCREASE the dose — this is not a mistake.'",
    ],
    duringTreatment: [
      "Week 1: assess tolerability — sedation (often welcome in insomnia), morning drowsiness, increased appetite, vivid dreams.",
      "Week 1–2: sleep and appetite often improve within DAYS — early indicator of response.",
      "Week 2–4: mood improvement begins (faster than SSRIs).",
      "Week 4–6: PHQ-9 assessment. If partial response, increase dose to 30–45mg.",
      "Monitor weight at 4 and 12 weeks — 2–4 kg gain is common.",
      "Counsel about sore throat/fever — STOP and check CBC urgently (agranulocytosis).",
      "Watch for excessive sedation in elderly — falls risk. Consider dose escalation (paradoxical) or change timing.",
    ],
    followUp: [
      "First follow-up at 1 week — tolerability (sedation, appetite), early sleep/appetite improvement.",
      "Second follow-up at 2 weeks — early mood response (faster than SSRIs).",
      "Third follow-up at 4 weeks — PHQ-9, weight check, dose escalation to 30mg if needed.",
      "Fourth follow-up at 6 weeks — full response assessment.",
      "Fifth follow-up at 12 weeks — weight gain assessment, lipid panel.",
      "If remission: continue 6–12 months for first episode of depression.",
      "Before discontinuation: taper over 2–4 weeks (milder discontinuation than SSRIs but still recommended).",
    ],
    whenToRefer: [
      "Refer to psychiatrist if agranulocytosis suspected (sore throat, fever) — STOP mirtazapine, urgent CBC.",
      "Refer urgently if suicidal ideation emerges or worsens.",
      "Refer if bipolar disorder is suspected (manic switch risk, lower than SSRIs but present).",
      "Refer if excessive sedation in elderly causes falls — consider dose adjustment or switch to less sedating agent.",
      "Refer to physician if severe weight gain, lipid abnormalities, or hepatic dysfunction develop.",
      "Refer for CBT — combined mirtazapine + CBT may enhance response in depression.",
      "Refer to palliative care team for symptom management in advanced cancer patients.",
    ],
  },

  /* Exam frequency — star ratings */
  examFrequency: {
    neetPg: 4,
    inicet: 3,
    mbbsViva: 3,
    fmge: 4,
  },

  /* PYQ metadata — concept-level, no copyrighted content */
  pyqMetadata: [
    { exam: "NEET PG", year: 2022, concept: "Antidepressant causing sedation + weight gain", topic: "NaSSA adverse effects" },
    { exam: "NEET PG", year: 2021, concept: "Antidepressant with NO sexual dysfunction (5-HT2C blockade)", topic: "Atypical antidepressants" },
    { exam: "NEET PG", year: 2020, concept: "INVERSE dose-sedation in mirtazapine (15mg more sedating than 30mg)", topic: "NaSSA pharmacology" },
    { exam: "NEET PG", year: 2019, concept: "Mechanism of mirtazapine (α2 antagonist)", topic: "NaSSA mechanism" },
    { exam: "INICET", year: 2021, concept: "Antidepressant with 5-HT3 antiemetic effect", topic: "NaSSA receptor profile" },
    { exam: "INICET", year: 2023, concept: "California Rocket Fuel (venlafaxine + mirtazapine)", topic: "TRD augmentation" },
    { exam: "FMGE", year: 2022, concept: "Mirtazapine — tetracyclic / NaSSA class", topic: "Antidepressant classification" },
    { exam: "FMGE", year: 2021, concept: "Mirtazapine adverse effect — agranulocytosis", topic: "Antidepressant safety" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Depression with insomnia and weight loss",
      recommendation: "Mirtazapine 15mg OD HS is the drug of choice — its sedation and appetite stimulation are therapeutic, not side effects. Faster onset than SSRIs (sleep improves within days).",
      alternative: "If insomnia is severe but weight loss is not, consider SSRI + low-dose trazodone. Bupropion is a poor choice here — it would worsen both insomnia and weight loss.",
    },
    {
      scenario: "SSRI-induced sexual dysfunction",
      recommendation: "Mirtazapine is a good switch option — blocks 5-HT2C (preserves dopamine tone → no sexual SE). Alternative to bupropion when patient also has insomnia/weight loss.",
      alternative: "Bupropion if patient has anergia/hypersomnia (opposite symptom profile). Both lack sexual SE — choice based on symptom profile.",
    },
    {
      scenario: "Treatment-resistant depression (SSRI/SNRI partial response)",
      recommendation: "Augment with mirtazapine 15mg OD HS — California Rocket Fuel (venlafaxine + mirtazapine) is a powerful TRD combination. Addresses residual insomnia/weight loss.",
      alternative: "Bupropion augmentation (if residual anergia/sexual SE). Lithium augmentation (if not contraindicated).",
    },
    {
      scenario: "Elderly depression with weight loss and insomnia",
      recommendation: "Mirtazapine 7.5–15mg OD HS — addresses multiple symptoms with one drug. Watch for excessive sedation and falls. If 15mg too sedating, paradoxically consider 30mg (less sedating).",
      alternative: "SSRI (sertraline) if sedation is a concern. Avoid TCAs (anticholinergic in elderly).",
    },
    {
      scenario: "Palliative care / advanced cancer",
      recommendation: "Mirtazapine 7.5–15mg OD HS — single-drug approach for insomnia, anorexia, mild depression, and chemo-induced nausea (5-HT3 antagonism).",
      alternative: "Methylphenidate for depression in palliative care (faster onset, less sedation). Olanzapine for appetite stimulation.",
    },
    {
      scenario: "Government hospital setup",
      recommendation: "Mirtazapine is NOT commonly stocked — patients must purchase from private pharmacy. SSRIs (sertraline, escitalopram) are first-line; reserve mirtazapine for specific indications (insomnia/weight loss).",
      alternative: "If cost is the primary concern and SSRI is needed, Jan Aushadhi generic sertraline (₹2–5/tablet) is unbeatable. Mirtazapine is moderately expensive.",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: false,
    note: "Mirtazapine is NOT commonly available at Jan Aushadhi Kendras. Patients must purchase from private pharmacies. Generic versions (Mirtaz — Sun Pharma, Mirnite — Intas, Mazetol — Cipla) are moderately priced at ₹8–12 per 15mg tablet. Originator (Remeron — Merck) is more expensive at ₹20–30 per tablet. The lack of Jan Aushadhi availability limits mirtazapine use in resource-constrained settings.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents (NaSSA, atypical)" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants (NaSSA, α2 antagonist)" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression and palliative care" },
      { source: "FDA Prescribing Information — REMERON / REMERON SolTab (mirtazapine)", section: "Highlights of Prescribing Information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020415s028lbl.pdf" },
      { source: "NICE Clinical Guideline CG91 — Depression in adults", section: "Alternative antidepressants" },
      { source: "APA Practice Guideline for MDD, 3rd edition", section: "Pharmacotherapy — atypical antidepressants and augmentation" },
      { source: "CANMAT 2016 — Clinical Guidelines for the Management of Adults with MDD", section: "Augmentation strategies" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs (NaSSA, atypical)" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression", type: "guideline", section: "Section on pharmacotherapy — atypical antidepressants and augmentation" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants (NaSSA)" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional)", type: "curriculum", section: "Topic: Psychopharmacology — Mood disorders" },
      { source: "Indian Association of Palliative Care (IAPC) — Guidelines", type: "guideline", section: "Pharmacological management of depression, insomnia, and anorexia in palliative care" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Mental health support resource", url: "tel:14416" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Mirtazapine — Schedule H prescription status" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose Mirtazapine",
    startNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Patient presents with depression — what is the symptom profile?",
        branches: [
          { label: "Insomnia + weight loss", next: "symptom-matched" },
          { label: "SSRI-induced sexual dysfunction", next: "sexual-dysfunction" },
          { label: "SSRI/SNRI partial response (TRD)", next: "augmentation" },
          { label: "Palliative care / cancer", next: "palliative" },
        ],
      },
      {
        id: "symptom-matched",
        question: "Depression with prominent insomnia and weight loss — what to choose?",
        recommendation: "Mirtazapine 15mg OD HS — its sedation (H1) and appetite stimulation (5-HT2C) are THERAPEUTIC, not side effects. Faster onset than SSRIs (sleep improves within days).",
        reasoning: "Mirtazapine is the antidepressant of choice when the symptom profile matches the drug profile — sedation + weight gain become therapeutic effects. Bupropion would worsen both.",
        branches: [
          { label: "Paradoxical dose check", next: "paradoxical" },
        ],
      },
      {
        id: "sexual-dysfunction",
        question: "SSRI-induced sexual dysfunction — switch to what?",
        recommendation: "Mirtazapine 15mg OD HS OR bupropion XL 150mg OD. Mirtazapine blocks 5-HT2C (preserves dopamine tone → no sexual SE). Choose mirtazapine if insomnia/weight loss also present; bupropion if anergia/obesity.",
        reasoning: "Both mirtazapine and bupropion lack SSRI-induced sexual SE — choice based on symptom profile. Mirtazapine's 5-HT2C blockade preserves mesolimbic dopamine tone.",
      },
      {
        id: "augmentation",
        question: "Treatment-resistant depression (SSRI/SNRI partial response) — augment with what?",
        recommendation: "Mirtazapine 15mg OD HS — California Rocket Fuel (venlafaxine + mirtazapine) is a powerful TRD combination. Covers complementary mechanisms and addresses residual insomnia.",
        reasoning: "California Rocket Fuel combines venlafaxine (SNRI, 5-HT + NE) with mirtazapine (α2 antagonist, 5-HT2A/2C/3 + H1 blockade). Dual NE/DA/5-HT coverage. ~50% response rate in TRD.",
      },
      {
        id: "palliative",
        question: "Palliative care patient with insomnia, anorexia, and mild depression — what to choose?",
        recommendation: "Mirtazapine 7.5–15mg OD HS — single-drug approach addressing insomnia (H1), anorexia (5-HT2C), mild depression, and chemo-induced nausea (5-HT3 antagonism).",
        reasoning: "Mirtazapine is uniquely useful in palliative care — addresses multiple symptoms with one drug, avoiding polypharmacy. Lower doses preferred in elderly/frail patients.",
      },
      {
        id: "paradoxical",
        question: "Patient on 15mg reports excessive morning drowsiness — what to do?",
        recommendation: "INCREASE dose to 30mg — paradoxically LESS sedating due to dose-dependent noradrenergic counterbalance of H1 sedation. Alternative: change timing (take 1–2 hours earlier).",
        reasoning: "Mirtazapine's paradoxical dose-sedation: at low doses (15mg), H1 sedation dominates; at higher doses (30–45mg), α2-mediated NE activation counterbalances H1 sedation. So 15mg > 30mg > 45mg in sedation intensity.",
        branches: [
          { label: "Safety check", next: "safety" },
        ],
      },
      {
        id: "safety",
        question: "Before prescribing mirtazapine — safety considerations?",
        recommendation: "COUNSEL: 'If you develop sore throat, fever, or mouth ulcers, STOP and seek urgent care — rare but serious blood count drop (agranulocytosis).' Check baseline CBC and LFTs. Avoid abrupt alcohol cessation (sedation additive).",
        reasoning: "Agranulocytosis risk is ~1 in 1000 — similar to clozapine but lower. Routine CBC monitoring is NOT required (unlike clozapine), but counselling is essential. Sedation is additive with alcohol and other sedatives.",
      },
      {
        id: "bipolar",
        question: "Bipolar depression — can mirtazapine be used?",
        recommendation: "Mirtazapine may be used as adjunct to mood stabiliser in bipolar depression — lower switch risk than SSRIs/SNRIs. NEVER monotherapy.",
        reasoning: "Mirtazapine's lower serotonergic effect (vs SSRIs) translates to lower manic-switch risk, but it is NOT zero. Use only as adjunct to mood stabiliser (lithium, valproate). Monitor for switch.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian OPD initiation: 55-year-old with depression, severe insomnia, and 6 kg weight loss",
    lines: [
      "Rx",
      "Tab Mirtazapine 15 mg",
      "1 tab OD at night (HS) × 7 days",
      "",
      "Then increase to:",
      "Tab Mirtazapine 30 mg",
      "1 tab OD at night (HS)",
      "",
      "Advice: Take at NIGHT. You may feel sleepy and hungry — this is expected and helpful.",
      "If 15mg makes you too drowsy in the morning, your doctor may INCREASE the dose (paradoxical — higher dose is less sedating).",
      "If you develop sore throat, fever, or mouth ulcers, STOP and see your doctor urgently.",
      "Avoid alcohol while on this medicine.",
    ],
    followUp: [
      "Review after 1 week — tolerability (sedation, appetite), early sleep/appetite improvement",
      "Review after 2 weeks — early mood response (faster than SSRIs)",
      "Review after 4 weeks — PHQ-9, weight; if <30% reduction, increase to 30mg",
      "Review after 6 weeks — full response assessment",
      "Review after 12 weeks — weight gain assessment, lipid panel",
      "If remission: continue 6–12 months, then taper over 2–4 weeks",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information and individualise for each patient.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Reducing dose when patient reports excessive morning drowsiness",
      why: "Mirtazapine has a PARADOXICAL dose-sedation: 15mg is MORE sedating than 30mg. At higher doses, α2-mediated noradrenergic activation counterbalances H1 sedation. Reducing dose WORSENS the problem.",
      correction: "If patient on 15mg reports excessive morning drowsiness, INCREASE to 30mg. Counsel about the paradox. Alternative: change timing (take 1–2 hours earlier).",
    },
    {
      mistake: "Using mirtazapine in a patient with obesity and hypersomnia",
      why: "Mirtazapine causes weight gain (H1) and sedation. In a patient whose depression presents with obesity and hypersomnia, these 'side effects' compound the symptom profile — opposite of symptom-matched prescribing.",
      correction: "Use bupropion instead — activating (NE + DA) and causes weight loss. Match drug to symptom profile: insomnia/weight loss → mirtazapine; anergia/obesity → bupropion.",
    },
    {
      mistake: "Not counselling about agranulocytosis",
      why: "Agranulocytosis is rare (~1 in 1000) but serious — potentially fatal if untreated. Patients may dismiss sore throat as 'just a cold' and not seek care, leading to sepsis.",
      correction: "Counsel explicitly at initiation: 'If you develop sore throat, fever, mouth ulcers, or any sign of infection, STOP the medicine and see your doctor immediately for a blood test.' Document the counselling.",
    },
    {
      mistake: "Combining with alcohol",
      why: "Both mirtazapine (H1) and alcohol are sedating — combination causes excessive drowsiness, impaired coordination, and risk of falls (especially in elderly). Respiratory depression risk in overdose.",
      correction: "Counsel: 'Avoid alcohol while on mirtazapine. If you must drink, limit to 1 drink and do not drive.' For patients with alcohol use disorder, address this before prescribing.",
    },
    {
      mistake: "Using mirtazapine as monotherapy in bipolar depression",
      why: "Mirtazapine has lower manic-switch risk than SSRIs/SNRIs, but is NOT zero. Monotherapy in bipolar depression risks a manic switch — potentially dangerous.",
      correction: "Always use mirtazapine as adjunct to a mood stabiliser (lithium, valproate, lamotrigine) in bipolar depression. Screen for bipolar disorder (MDQ) before starting any antidepressant.",
    },
    {
      mistake: "Missing the rapid onset (and counselling patients to wait 4–6 weeks)",
      why: "Mirtazapine has a FASTER onset than SSRIs — sleep and appetite improve within DAYS, mood within 1–2 weeks. Telling the patient to wait 4–6 weeks (as for SSRIs) misses the early benefit and may undermine adherence.",
      correction: "Counsel: 'You will likely sleep better THIS WEEK, and your appetite will improve. Mood improvement starts at 1–2 weeks.' This early benefit improves adherence and differentiates mirtazapine from SSRIs.",
    },
    {
      mistake: "Starting at 30mg in elderly or sedation-sensitive patients",
      why: "Starting at 30mg bypasses the dose-titration principle. While 30mg is paradoxically LESS sedating than 15mg, starting at 30mg in elderly risks orthostatic hypotension, dizziness, and falls.",
      correction: "Start at 7.5–15mg OD HS in elderly, sedation-sensitive, or hepatically impaired patients. Titrate to 30mg after 1–2 weeks based on tolerability and response.",
    },
    {
      mistake: "Not addressing weight gain in follow-up",
      why: "Mirtazapine causes 2–4 kg weight gain in 2–3 months. In patients with diabetes, hypertension, or body image concerns, this can cause non-adherence or worsen comorbidities.",
      correction: "Weigh patient at baseline, 4 weeks, and 12 weeks. If weight gain is significant, counsel on diet/exercise, consider dose reduction, or switch to bupropion if weight gain is unacceptable.",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Depression with obesity and hypersomnia (atypical 'leaden paralysis' profile)",
      reason: "Mirtazapine causes weight gain and sedation — these would compound the existing symptom profile. Opposite of symptom-matched prescribing.",
      alternative: "Use bupropion — activating (NE + DA), causes weight loss, and addresses anergia/hypersomnia. Match drug to symptom profile.",
    },
    {
      scenario: "Active MAOI use (within 14 days)",
      reason: "Hypertensive crisis — mirtazapine increases NE and 5-HT release (via α2 antagonism); MAOIs prevent their breakdown → dangerous sympathetic excess.",
      alternative: "Wait 14 days after stopping MAOI before starting mirtazapine. Conversely, wait 14 days after stopping mirtazapine before starting an MAOI.",
    },
    {
      scenario: "Known hepatic impairment (severe — Child-Pugh C)",
      reason: "Mirtazapine is metabolised hepatically (CYP1A2, CYP2D6, CYP3A4). Severe hepatic impairment → accumulation → toxicity (excessive sedation, orthostatic hypotension).",
      alternative: "Reduce dose by 50% (start 7.5mg) or use sertraline (more favourable hepatic profile, monitor).",
    },
    {
      scenario: "History of agranulocytosis or current neutropenia",
      reason: "Mirtazapine carries a rare (~1 in 1000) risk of agranulocytosis. In patients with prior blood dyscrasias, this risk is unacceptable.",
      alternative: "Use SSRI (sertraline, escitalopram) — no risk of agranulocytosis. If mirtazapine is essential, monitor CBC weekly for first 2 months.",
    },
    {
      scenario: "Elderly with high falls risk",
      reason: "Mirtazapine's H1-mediated sedation and orthostatic hypotension increase falls risk in elderly — particularly dangerous with osteoporosis.",
      alternative: "Use SSRI (sertraline) — less sedating. If mirtazapine is essential, use 7.5mg start and counsel on falls prevention. Avoid nocturnal dosing in patients who get up to urinate.",
    },
    {
      scenario: "Patient with severe hepatic encephalopathy or marked sedation baseline",
      reason: "Mirtazapine's sedation would worsen an already sedated patient — risk of respiratory depression and decreased consciousness.",
      alternative: "Use SSRI (sertraline) — less sedating. Address underlying cause of encephalopathy first.",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "When is sedation from an antidepressant actually beneficial? (Mirtazapine in depression with insomnia + weight loss — sedation and appetite stimulation are therapeutic.)",
      "Why does mirtazapine NOT cause sexual dysfunction? (5-HT2C blockade — this receptor normally inhibits dopamine release in mesolimbic reward pathway; blocking it preserves dopamine tone.)",
      "Why is mirtazapine 15mg MORE sedating than 30mg? (H1 blockade is constant at all doses; at higher doses, α2-mediated NE activation counterbalances H1 sedation.)",
      "What is California Rocket Fuel? (Venlafaxine + mirtazapine — TRD combination covering 5-HT, NE, DA mechanisms.)",
      "What is the mechanism of mirtazapine? (NaSSA — α2 antagonist → ↑ NE and 5-HT release. Also blocks 5-HT2A, 5-HT2C, 5-HT3, H1.)",
      "What is the most serious side effect of mirtazapine? (Agranulocytosis — rare ~1 in 1000, but serious. Counsel about sore throat/fever.)",
    ],
    residentExpects: [
      "Know the receptor profile: α2 antagonist + 5-HT2A + 5-HT2C + 5-HT3 + H1 antagonist.",
      "Know the paradoxical dose-sedation rule — 15mg > 30mg > 45mg in sedation intensity.",
      "Know when to use mirtazapine: depression with insomnia + weight loss, TRD augmentation, palliative care.",
      "Know California Rocket Fuel (venlafaxine + mirtazapine) for TRD.",
      "Know the agranulocytosis counselling — sore throat/fever → STOP and check CBC urgently.",
      "Know the rapid onset — sleep/appetite improve within DAYS, mood within 1–2 weeks (faster than SSRIs).",
    ],
    consultantsDo: [
      "Match drug to symptom profile — mirtazapine for insomnia/weight loss, bupropion for anergia/obesity.",
      "Counsel every patient about paradoxical dose-sedation: 'If 15mg is too sedating, your doctor may INCREASE the dose.'",
      "Use California Rocket Fuel (venlafaxine + mirtazapine) for TRD with residual insomnia.",
      "Counsel every patient about agranulocytosis: 'Sore throat, fever, mouth ulcers — STOP and see doctor urgently.'",
      "Start at 7.5–15mg in elderly or sedation-sensitive patients; titrate to 30–45mg.",
      "Use low-dose mirtazapine (7.5–15mg HS) in palliative care for insomnia, anorexia, and mild depression — single drug for multiple symptoms.",
      "Monitor weight at baseline, 4 weeks, and 12 weeks — 2–4 kg gain is common.",
    ],
    internsMiss: [
      "Forgetting to counsel about paradoxical dose-sedation — patient takes 15mg, feels drowsy, and self-stops the drug.",
      "Missing the agranulocytosis counselling — patient dismisses sore throat as 'just a cold' and develops sepsis.",
      "Using mirtazapine in obesity/hypersomnia (wrong symptom profile — should be bupropion).",
      "Telling patient to wait 4–6 weeks for effect (SSRI counselling) — mirtazapine is faster, and missing this disappoints the patient.",
      "Not addressing weight gain in follow-up — patient stops the drug due to body image concerns or worsened diabetes.",
      "Starting at 30mg in elderly — orthostatic hypotension, dizziness, and falls.",
      "Combining with alcohol — excessive sedation and falls risk.",
      "Not screening for bipolar disorder — manic switch (lower risk than SSRIs but present).",
      "Forgetting the 5-HT3 antiemetic effect — missing opportunity to use mirtazapine in palliative care for chemo-induced nausea.",
    ],
  },

  /* Refined high-yield level */
  highYieldLevel: "high",

  /* Drug family navigation */
  drugFamilyNav: {
    familyName: "NaSSAs (Noradrenergic and Specific Serotonergic Antidepressants)",
    members: [
      { name: "Mirtazapine", slug: "mirtazapine", relationship: "Current drug — only NaSSA in clinical use", distinguishing: "α2 antagonist + 5-HT2A/2C/3 + H1 antagonist; sedation + weight gain (therapeutic in insomnia/weight loss); NO sexual SE; paradoxical dose-sedation; California Rocket Fuel" },
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
      question: "What is the primary mechanism of action of mirtazapine?",
      options: [
        "SERT blockade (serotonin reuptake inhibition)",
        "α2 adrenergic receptor antagonism (↑ NE and 5-HT release)",
        "MAO-A inhibition",
        "Dopamine D2 receptor antagonism",
      ],
      correctIndex: 1,
      explanation: "Mirtazapine is a NaSSA (Noradrenergic and Specific Serotonergic Antidepressant) — its PRIMARY mechanism is α2 adrenergic receptor antagonism. By blocking presynaptic α2 autoreceptors, it disinhibits NE and 5-HT release. Mirtazapine is NOT a reuptake blocker — distinguishing it from SSRIs/SNRIs/TCAs.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-paradoxical-dose",
      question: "Why is mirtazapine 15mg MORE sedating than 30mg?",
      options: [
        "15mg accumulates more in the brain",
        "At higher doses, α2-mediated noradrenergic activation counterbalances H1 sedation",
        "30mg is metabolised faster",
        "15mg has stronger H1 affinity",
      ],
      correctIndex: 1,
      explanation: "Mirtazapine's paradoxical dose-sedation: H1 blockade (sedation) is constant at all doses. At higher doses (30–45mg), the α2-mediated noradrenergic activation (alerting) becomes more prominent, counterbalancing H1 sedation. So 15mg > 30mg > 45mg in net sedation. This is THE favourite mirtazapine concept.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-sexual-dysfunction",
      question: "Why does mirtazapine NOT cause sexual dysfunction?",
      options: [
        "It does not affect serotonin at all",
        "It blocks 5-HT2C receptors — this preserves dopamine tone in the mesolimbic reward pathway",
        "It directly stimulates nitric oxide",
        "It is metabolised too quickly to cause sexual SE",
      ],
      correctIndex: 1,
      explanation: "SSRI-induced sexual dysfunction is mediated via 5-HT2C receptor activation (which inhibits dopamine release in the mesolimbic reward pathway). Mirtazapine BLOCKS 5-HT2C receptors — preserving dopamine tone and preventing sexual SE. Bupropion also lacks sexual SE, but via a different mechanism (no SERT blockade at all).",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-indications",
      question: "In which depression presentation is mirtazapine the BEST first choice?",
      options: [
        "Depression with obesity and hypersomnia",
        "Depression with prominent insomnia and weight loss",
        "Bipolar depression (monotherapy)",
        "Depression in a patient on tamoxifen",
      ],
      correctIndex: 1,
      explanation: "Mirtazapine is the antidepressant of choice when the symptom profile matches the drug profile — its sedation (H1) and appetite stimulation (5-HT2C) are THERAPEUTIC in depression with insomnia and weight loss. For obesity/hypersomnia, choose bupropion. For tamoxifen patients, choose venlafaxine or sertraline (avoid CYP2D6 inhibitors — mirtazapine is a moderate inhibitor).",
      afterSectionId: "clinical-uses",
    },
    {
      id: "quiz-augmentation",
      question: "What is California Rocket Fuel?",
      options: [
        "Lithium + SSRI",
        "Venlafaxine + mirtazapine",
        "Bupropion + SSRI",
        "Lamotrigine + quetiapine",
      ],
      correctIndex: 1,
      explanation: "California Rocket Fuel = venlafaxine + mirtazapine — a powerful TRD combination. Covers 5-HT (venlafaxine), NE (venlafaxine high dose + mirtazapine α2), and DA (mirtazapine 5-HT2C blockade disinhibits DA). ~50% response rate in treatment-resistant depression.",
      afterSectionId: "clinical-uses",
    },
    {
      id: "quiz-safety",
      question: "A patient on mirtazapine presents with sore throat and fever. What is the most likely cause and what should you do?",
      options: [
        "Viral URI — symptomatic treatment, continue mirtazapine",
        "Agranulocytosis — STOP mirtazapine and check CBC urgently",
        "Strep throat — antibiotics, continue mirtazapine",
        "Influenza — oseltamivir, continue mirtazapine",
      ],
      correctIndex: 1,
      explanation: "Agranulocytosis is a rare (~1 in 1000) but serious complication of mirtazapine. ANY patient on mirtazapine presenting with sore throat, fever, mouth ulcers, or other signs of infection should STOP the drug and have an urgent CBC. Do not assume 'just a cold' — the consequence of missing agranulocytosis is sepsis and potentially death.",
      afterSectionId: "monitoring",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "Explain the mechanism of action of mirtazapine. How does it differ from SSRIs?",
      answer: "Mirtazapine is a NaSSA — its primary mechanism is α2 adrenergic receptor antagonism. By blocking presynaptic α2 autoreceptors, it disinhibits NE and 5-HT release (NOT a reuptake blocker). It also blocks 5-HT2A, 5-HT2C, 5-HT3, and H1 receptors. SSRIs block SERT (reuptake); mirtazapine does NOT block SERT — it increases 5-HT release via α2 antagonism.",
      topic: "Mechanism",
    },
    {
      question: "Why is mirtazapine 15mg MORE sedating than 30mg? Explain the pharmacology.",
      answer: "H1 blockade (sedation) is constant at all doses. At higher doses (30–45mg), the α2-mediated noradrenergic activation (alerting) becomes more prominent, counterbalancing H1 sedation. So net sedation: 15mg > 30mg > 45mg. Clinically, a patient on 15mg with excessive morning drowsiness may benefit from INCREASING to 30mg (paradoxical dose-sedation rule).",
      topic: "Pharmacology",
    },
    {
      question: "Why does mirtazapine NOT cause sexual dysfunction, unlike SSRIs?",
      answer: "SSRI-induced sexual dysfunction is mediated via 5-HT2C receptor activation — this receptor normally inhibits dopamine release in the mesolimbic reward pathway, suppressing sexual function. Mirtazapine BLOCKS 5-HT2C receptors — preserving dopamine tone and preventing sexual SE. Bupropion also lacks sexual SE, but via a different mechanism (no SERT blockade at all).",
      topic: "Receptor Profile",
    },
    {
      question: "What is California Rocket Fuel, and when is it used?",
      answer: "California Rocket Fuel = venlafaxine + mirtazapine — a powerful treatment-resistant depression (TRD) combination. Covers 5-HT (venlafaxine), NE (venlafaxine high dose + mirtazapine α2 antagonism), and DA (mirtazapine 5-HT2C blockade disinhibits DA). Also addresses residual insomnia and weight loss. ~50% response rate in TRD. Used after failure of 2 adequate SSRI/SNRI trials.",
      topic: "TRD Management",
    },
    {
      question: "How would you counsel a patient on mirtazapine about agranulocytosis?",
      answer: "Counsel explicitly: 'Agranulocytosis (a serious drop in white blood cells) is rare but possible with this medicine. If you develop sore throat, fever, mouth ulcers, or any sign of infection, STOP the medicine immediately and see your doctor for a blood test.' Risk is ~1 in 1000 — routine CBC monitoring is NOT required (unlike clozapine), but counselling is essential. Document the counselling.",
      topic: "Safety",
    },
    {
      question: "Describe a clinical scenario where mirtazapine is the antidepressant of choice. Why?",
      answer: "Depression with prominent INSOMNIA and WEIGHT LOSS — mirtazapine's sedation (H1) and appetite stimulation (5-HT2C) are THERAPEUTIC, not side effects. Faster onset than SSRIs (sleep improves within days, mood within 1–2 weeks). Single drug addresses multiple symptoms. Example: 55-year-old man with depression, severe insomnia (2 hours/night), and 6 kg weight loss over 3 months — mirtazapine 15mg OD HS is the ideal first choice.",
      topic: "Clinical Application",
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
      description: "What is this drug? Why is it different from SSRIs?",
      sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"],
      checkpoint: "You now know what Mirtazapine is — the only NaSSA in clinical use, uniquely free of sexual SE, with sedation and weight gain that are therapeutic in the right patient.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does α2 antagonism produce a different antidepressant profile than SERT blockade?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand the NaSSA mechanism — and why α2 antagonism (not reuptake blockade) produces a different receptor profile: 5-HT2A/2C/3 + H1 antagonism, no sexual SE, paradoxical dose-sedation, rapid onset.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When do you use it? What goes wrong?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now prescribe mirtazapine safely — knowing when it's the right choice (insomnia/weight loss), the paradoxical dose-sedation rule, the agranulocytosis counselling, and the symptom-matched prescribing principle.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it actually used in Indian hospitals and palliative care?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands (Mirtaz, Mirnite, Mazetol, Remeron), the moderate cost, the California Rocket Fuel TRD combination, and the common mistakes Indian interns make (reducing dose for drowsiness, missing agranulocytosis counselling).",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content, worked through a clinical case, compared mirtazapine with alternatives, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions, you have exam-level mastery of Mirtazapine — including its unique mechanism, paradoxical dose-sedation, and California Rocket Fuel combination.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Remeron label"],
};
