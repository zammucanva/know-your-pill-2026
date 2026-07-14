import type { Drug } from "../types";

/**
 * Venlafaxine — canonical drug page data.
 *
 * Structured to mirror the sertraline / fluoxetine template exactly so every
 * section of /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Venlafaxine is CLINICALLY DISTINCT from the SSRIs already in the registry:
 * it is a serotonin–norepinephrine reuptake inhibitor (SNRI) with a
 * dose-dependent mechanism, dose-dependent hypertension, and the worst
 * discontinuation syndrome of any antidepressant. Every section below
 * reflects those signature pharmacological features.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for EFFEXOR XR (venlafaxine hydrochloride)
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *
 * Last reviewed: 2026-07-13
 */
export const venlafaxine: Drug = {
  /* ---- Identity ---- */
  slug: "venlafaxine",
  genericName: "Venlafaxine",
  brandNames: ["Effexor", "Effexor XR", "Venlor"],
  drugClass: "snri",
  drugClassLabel: "SNRI",
  drugClassFullName: "Serotonin-Norepinephrine Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SNRIs", "Venlafaxine"],

  /* ---- Hero / summary ---- */
  tagline:
    "An SNRI with a signature dose-dependent mechanism — pure serotonergic at low dose, dual SERT + NET blockade at moderate dose, weak DAT effect at high dose — and the worst discontinuation syndrome of any antidepressant.",
  summary:
    "Venlafaxine is a serotonin–norepinephrine reuptake inhibitor (SNRI) that blocks both the serotonin transporter (SERT) and the norepinephrine transporter (NET). Its pharmacology is uniquely dose-dependent: at 75–150 mg/day it behaves essentially as an SSRI (predominant SERT blockade), at 150–225 mg/day it becomes a true dual SNRI (SERT + NET), and above ~300 mg/day it adds weak dopamine transporter (DAT) inhibition. This dose-dependency is the single most testable fact about the drug. Venlafaxine is FDA-approved for four indications — major depressive disorder, generalised anxiety disorder, social anxiety disorder, and panic disorder — a broader anxiety approval than most SSRIs. Two signature safety issues distinguish it from SSRIs: (1) dose-dependent hypertension (sustained BP elevation occurs in 10–15% of patients at >300 mg/day), and (2) the most severe discontinuation syndrome of any antidepressant, driven by the short parent half-life (~5 hours) and dual-mechanism withdrawal — symptoms can begin within hours of a missed dose. The active metabolite O-desmethylvenlafaxine (ODV) is pharmacologically equivalent to the parent and is marketed separately as desvenlafaxine (Pristiq).",
  estimatedReadTime: "19 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain venlafaxine's dose-dependent mechanism — how SERT blockade at low dose, dual SERT + NET blockade at moderate dose, and weak DAT effect at high dose translate into different clinical profiles.",
    "Predict the dose-dependent blood-pressure effect of venlafaxine and design an appropriate BP monitoring schedule (baseline, 2 weeks, 4 weeks, every dose change).",
    "Recognise and manage venlafaxine's discontinuation syndrome — the most severe of any antidepressant — including why missed doses can cause withdrawal within hours and how to taper safely (often bridging with fluoxetine).",
    "Differentiate venlafaxine from SSRIs (sertraline, fluoxetine, escitalopram, paroxetine) and from the closely related SNRI duloxetine — and select the right agent when an SSRI has failed or when depression is comorbid with neuropathic pain.",
    "Identify the four FDA-approved indications (MDD, GAD, Social Anxiety Disorder, Panic Disorder) and key off-label uses (neuropathic pain, hot flushes, fibromyalgia, cataplexy).",
    "Counsel a patient on the unique safety profile — BP monitoring, never missing a dose, never stopping abruptly, and recognising early withdrawal — and explain the relationship to desvenlafaxine (Pristiq).",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Venlafaxine blocks both SERT and NET, with a dose-dependent ratio: SERT is inhibited at low doses, NET blockade becomes clinically meaningful only at moderate–high doses, and weak DAT inhibition appears above ~300 mg/day.",
    molecularTarget:
      "SERT (SLC6A4 — serotonin transporter) and NET (SLC6A2 — norepinephrine transporter); weak DAT (SLC6A3) inhibition at high doses.",
    effect:
      "Acute: increased synaptic serotonin (at all doses) plus increased synaptic norepinephrine (above ~150 mg/day). Chronic (2–6 weeks): desensitisation of 5-HT1A somatodendritic autoreceptors in the raphe nuclei, downregulation of α2-adrenergic autoreceptors in the locus coeruleus, increased cortico-limbic throughput, and upregulation of BDNF in the hippocampus. The noradrenergic component adds benefit in lethargic/anergic depression, neuropathic pain, and attention — but is also responsible for sweating, insomnia, BP elevation, and a more severe withdrawal syndrome.",
    steps: [
      "Venlafaxine binds the serotonin transporter (SERT) on the presynaptic neuron, blocking reuptake of serotonin from the synaptic cleft. SERT affinity is high — even at 75 mg/day this effect is near-maximal.",
      "Acute SERT blockade raises synaptic serotonin within hours — but 5-HT1A autoreceptors in the raphe nuclei detect this and brake further serotonin release.",
      "At doses up to ~150 mg/day, NET blockade is clinically negligible. The drug behaves pharmacodynamically as an SSRI.",
      "As the dose climbs above 150 mg/day, venlafaxine's lower NET affinity becomes clinically relevant: NET on presynaptic noradrenergic neurons (locus coeruleus and periphery) is blocked, raising synaptic norepinephrine.",
      "Above ~300 mg/day, weak dopamine transporter (DAT) inhibition adds a modest dopaminergic effect — sometimes useful in treatment-resistant depression but also raising seizure risk.",
      "Increased noradrenergic tone drives therapeutic benefits in anergic depression, attention, and descending inhibition of pain — but also drives the signature adverse effects: sweating, insomnia, and dose-dependent hypertension (peripheral NET blockade raises NE at sympathetic synapses → vasoconstriction → ↑ BP).",
      "Over 2–6 weeks, downstream neuroadaptive changes occur: 5-HT1A autoreceptor desensitisation, α2-adrenoceptor downregulation, increased BDNF expression, and hippocampal neurogenesis. These delayed adaptations — not the acute monoamine rise — correlate with the onset of clinical antidepressant effect.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~45% due to first-pass metabolism). Peak plasma at 2–3 hours (IR) or 5.5–7.5 hours (XR). Food does not significantly affect absorption. Modest protein binding (~27%). Volume of distribution ~7.5 L/kg — distributes widely including into CNS. The XR formulation is preferred for tolerability (lower peak-related nausea) and for once-daily dosing.",
    halfLife:
      "Venlafaxine: ~5 hours (parent). O-desmethylvenlafaxine (ODV, active metabolite): ~11 hours. Combined effective half-life ~8–10 hours — short enough that missed doses cause withdrawal within hours, but long enough that steady state is reached in ~3 days.",
    activeMetabolite:
      "O-desmethylvenlafaxine (ODV) — pharmacologically equivalent to the parent drug (same SERT/NET affinity). Created by CYP2D6 O-demethylation. ODV is itself marketed separately as desvenlafaxine (Pristiq) — essentially the same molecule with cleaner pharmacokinetics (less CYP2D6 dependence, lower inter-patient variability).",
    metabolism:
      "Hepatic CYP2D6 (primary — O-demethylation to ODV). Minor contributions from CYP2C19, CYP3A4, and CYP2B6. CYP2D6 poor metabolisers have higher parent venlafaxine and lower ODV levels — total pharmacodynamic exposure is roughly preserved (parent and metabolite are equipotent), but tolerability may be worse due to higher peak parent concentrations.",
    excretion:
      "Primarily renal (~87% — 5% as unchanged venlafaxine, 29% as unchanged ODV, 53% as conjugated metabolites). Renal impairment significantly prolongs elimination — dose reduction required.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic-sero", label: "Presynaptic serotonergic neuron", sublabel: "Raphe nuclei — synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT transporter", sublabel: "Normally reuptakes serotonin", variant: "target" },
      { id: "presynaptic-ne", label: "Presynaptic noradrenergic neuron", sublabel: "Locus coeruleus — synthesises norepinephrine", variant: "input" },
      { id: "norepinephrine", label: "Norepinephrine (NE)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "net", label: "NET transporter", sublabel: "Normally reuptakes norepinephrine", variant: "target" },
      { id: "venlafaxine", label: "Venlafaxine", sublabel: "Dose-dependent dual reuptake inhibitor", variant: "inhibit" },
      { id: "low-dose", label: "Low dose (75–150 mg/day)", sublabel: "Predominantly SERT blockade → 'SSRI-like'", variant: "process" },
      { id: "mod-dose", label: "Moderate dose (150–225 mg/day)", sublabel: "SERT + NET blockade → true SNRI effect", variant: "process" },
      { id: "high-dose", label: "High dose (>300 mg/day)", sublabel: "SERT + NET + weak DAT → mild dopaminergic", variant: "process" },
      { id: "bp-elevation", label: "↑ Blood pressure (dose-dependent)", sublabel: "Peripheral NE → vasoconstriction — signature risk", variant: "output" },
      { id: "pfc", label: "Prefrontal cortex", sublabel: "Mood + attention improve (5-HT + NE)", variant: "output" },
      { id: "pain-pathway", label: "Descending pain pathways", sublabel: "NE-mediated analgesia — useful in neuropathic pain", variant: "output" },
    ],
    edges: [
      { from: "presynaptic-sero", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "presynaptic-ne", to: "norepinephrine", label: "releases" },
      { from: "norepinephrine", to: "net", label: "reuptake" },
      { from: "venlafaxine", to: "low-dose", label: "75–150 mg" },
      { from: "venlafaxine", to: "mod-dose", label: "150–225 mg" },
      { from: "venlafaxine", to: "high-dose", label: ">300 mg" },
      { from: "low-dose", to: "sert", type: "inhibit", label: "blocks (near-maximal)" },
      { from: "mod-dose", to: "sert", type: "inhibit", label: "blocks" },
      { from: "mod-dose", to: "net", type: "inhibit", label: "blocks (clinically relevant)" },
      { from: "high-dose", to: "sert", type: "inhibit", label: "blocks" },
      { from: "high-dose", to: "net", type: "inhibit", label: "blocks" },
      { from: "net", to: "bp-elevation", label: "↑ peripheral NE → vasoconstriction" },
      { from: "sert", to: "pfc", label: "serotonergic mood effect (weeks 2–6)" },
      { from: "net", to: "pfc", label: "noradrenergic energy + attention" },
      { from: "net", to: "pain-pathway", label: "descending inhibition" },
    ],
    caption:
      "The dose-dependent ratio of SERT:NET:DAT blockade is THE signature pharmacology of venlafaxine. Above ~150 mg/day the noradrenergic effect — both therapeutic (energy, attention, pain) and adverse (sweating, insomnia, hypertension) — becomes clinically important.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine (NE)", "Dopamine (DA, weak/high-dose)"],
  receptors: [
    "SERT (serotonin transporter) — high affinity, near-maximal at all doses",
    "NET (norepinephrine transporter) — lower affinity, clinically relevant above ~150 mg/day",
    "DAT (dopamine transporter) — weak, only above ~300 mg/day",
    "5-HT1A (somatodendritic autoreceptor — desensitises over 1–2 weeks)",
    "5-HT2A / 5-HT2C",
    "α2-adrenergic autoreceptor (downregulates with chronic NET blockade)",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // SNRIs act on the diffuse serotonergic + noradrenergic projection systems, not the 4 named dopamine pathways

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description:
        "First-line option in adults. Often selected after SSRI failure or when anergic/lethargic features predominate (noradrenergic benefit). Dose titration from 75 mg/day to 225 mg/day (max 375 mg/day) is the standard pathway — and is also the pathway that unlocks the dual SNRI effect.",
      ageGroup: "Adults",
    },
    {
      name: "Generalised Anxiety Disorder (GAD)",
      status: "fda-approved",
      description:
        "FDA-approved in adults. Among antidepressants, venlafaxine XR has one of the broadest GAD approval sets. Onset of anxiolytic effect is 4–6 weeks; full effect at 8–12 weeks.",
      ageGroup: "Adults",
    },
    {
      name: "Social Anxiety Disorder (Social Phobia)",
      status: "fda-approved",
      description:
        "FDA-approved in adults. Effective for both performance anxiety and generalised social anxiety. Onset slower than for depression — 8–12 weeks for full response.",
      ageGroup: "Adults",
    },
    {
      name: "Panic Disorder",
      status: "fda-approved",
      description:
        "FDA-approved in adults. Reduces panic attack frequency and anticipatory anxiety. Start low (37.5 mg XR) for the first week to avoid early activation that can paradoxically worsen panic.",
      ageGroup: "Adults",
    },
    {
      name: "Neuropathic pain (off-label)",
      status: "off-label",
      description:
        "Useful for diabetic peripheral neuropathy, post-herpetic neuralgia, and other neuropathic pain syndromes — the NET blockade enhances descending inhibitory pain pathways. Duloxetine is the preferred SNRI for neuropathic pain (FDA-approved), but venlafaxine is a reasonable alternative when comorbid depression/anxiety also need treatment.",
    },
    {
      name: "Vasomotor symptoms (hot flushes) — menopause and breast-cancer survivors",
      status: "off-label",
      description:
        "Effective for menopausal hot flushes and for hot flushes induced by tamoxifen or aromatase inhibitors in breast-cancer survivors (SSRIs — especially paroxetine — can inhibit CYP2D6 and reduce tamoxifen activation; venlafaxine is a weak CYP2D6 inhibitor and is preferred in this setting). Doses of 37.5–75 mg/day are typically sufficient.",
    },
    {
      name: "Fibromyalgia (off-label)",
      status: "off-label",
      description:
        "Reduces pain and fatigue in fibromyalgia, particularly when comorbid depression or anxiety is present. Duloxetine and milnacipran are FDA-approved for fibromyalgia; venlafaxine is used off-label.",
    },
    {
      name: "Cataplexy in narcolepsy / ADHD adjunct (off-label)",
      status: "off-label",
      description:
        "Useful adjunctively for cataplexy (noradrenergic effect reduces REM-related muscle atonia). Occasionally used off-label as an adjunct in adult ADHD when stimulants are contraindicated — though not first-line.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (including phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. At least 14 days must elapse between discontinuation of an MAOI and initiation of venlafaxine, and at least 7 days between discontinuation of venlafaxine and initiation of an MAOI.",
    },
    {
      name: "Uncontrolled hypertension",
      severity: "absolute",
      rationale:
        "Venlafaxine causes dose-dependent BP elevation. Blood pressure must be controlled before initiation; patients with pre-existing hypertension should be on stable antihypertensive therapy and monitored closely. Discontinue if sustained BP elevation occurs despite dose reduction.",
    },
    {
      name: "Pimozide",
      severity: "absolute",
      rationale:
        "Contraindicated due to QTc prolongation and risk of torsades de pointes. Venlafaxine inhibits CYP2D6, raising pimozide plasma concentrations.",
    },
    {
      name: "Known hypersensitivity to venlafaxine or desvenlafaxine",
      severity: "absolute",
      rationale: "Anaphylaxis, angioedema, and severe cutaneous adverse reactions (including Stevens-Johnson syndrome) have been reported.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of venlafaxine in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. Venlafaxine is not approved for use in paediatric patients.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea & GI upset",
      frequency: "very-common",
      severity: "mild",
      description:
        "More pronounced than with SSRIs — combined serotonergic (5-HT3 in gut) and noradrenergic effects slow GI motility. Occurs in ~30–40% of patients. Dose-dependent; worst during titration. The XR formulation reduces peak-related nausea.",
      management: "Take with food. Use XR formulation. Start at 37.5 mg for the first week, then titrate. Split dosing if on IR. Usually resolves after 2 weeks.",
    },
    {
      name: "Sweating (diaphoresis)",
      frequency: "very-common",
      severity: "moderate",
      description:
        "More frequent and more severe than with SSRIs — a direct noradrenergic effect on eccrine glands and thermoregulation. Often nocturnal. Distressing for patients and frequently under-recognised.",
      management: "Reassure (benign). Reduce dose if possible. Terazosin 1–2 mg at night or glycopyrrolate can help severe cases. Avoid trigger foods.",
    },
    {
      name: "Insomnia / activation",
      frequency: "very-common",
      severity: "moderate",
      description:
        "More activating than SSRIs — noradrenergic effect. Patients often report feeling 'wired', restless, or having vivid dreams. Can be therapeutic in anergic depression but problematic in anxious/agitated patients.",
      management: "Dose in the morning. If severe, reduce dose or switch to duloxetine (less activating). Avoid concurrent caffeine. Add low-dose mirtazapine at night if insomnia persists.",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description:
        "Usually transient in the first 1–2 weeks. Noradrenergic component can cause tension-type headache. Differentiate from serotonin syndrome (which includes hyperreflexia and clonus) and from hypertensive headache (check BP).",
      management: "Paracetamol is safe. Avoid NSAIDs (bleeding risk). Check BP if headache is severe or persistent.",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description: "Mild — less than TCAs but more than SSRIs. Sip water, sugar-free gum.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "very-common",
      severity: "moderate",
      description:
        "Similar rate to SSRIs (~30–50%): decreased libido, delayed orgasm/anorgasmia, erectile dysfunction. Mechanism is serotonergic (5-HT2C stimulation inhibits dopamine release in mesolimbic reward pathway).",
      management: "Dose reduction if possible. Add bupropion XL 150 mg/day. Sildenafil/tadalafil for erectile component. Switch to bupropion or mirtazapine if persistent.",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Dizziness",
      frequency: "common",
      severity: "mild",
      description:
        "Multifactorial — noradrenergic effect on vasculature, mild orthostasis, early discontinuation-like symptoms between doses (because of short half-life).",
      management: "Stand up slowly. Check BP. If persistent, consider longer-acting formulation or twice-daily IR dosing.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "mild",
      description: "Noradrenergic effect on GI motility. More common than with SSRIs (which tend to cause diarrhoea).",
      management: "Hydration, fibre, exercise. Mild osmotic laxative if needed.",
    },
    {
      name: "Anorexia & weight loss",
      frequency: "common",
      severity: "mild",
      description:
        "Initial weight loss is common (unlike mirtazapine or paroxetine). Often desirable in overweight patients but can be problematic in cachectic or geriatric patients. Usually plateaus after 3–6 months.",
      management: "Monitor weight. Calorically dense foods. Switch to mirtazapine if weight loss is problematic.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Hypertension (dose-dependent — SIGNATURE RISK)",
      frequency: "common",
      severity: "severe",
      description:
        "Dose-dependent sustained BP elevation — the signature safety issue of venlafaxine. At <150 mg/day the BP effect is minimal. At 150–300 mg/day a 2–5 mmHg diastolic rise is typical. At >300 mg/day, clinically significant hypertension develops in 10–15% of patients. Mechanism: peripheral NET blockade raises synaptic norepinephrine at sympathetic vascular synapses → vasoconstriction. Unlike SSRIs, this is dose-dependent and clinically important.",
      management: "Check BP at baseline, 2 weeks, 4 weeks, and at every dose change. If BP rises >10 mmHg diastolic or sustained BP >140/90, reduce dose or switch. If BP becomes uncontrolled, discontinue. Pre-existing hypertension must be controlled before initiation.",
    },
    {
      name: "Severe discontinuation syndrome (SIGNATURE RISK)",
      frequency: "common",
      severity: "severe",
      description:
        "Venlafaxine has the WORST discontinuation syndrome of any antidepressant. Driven by: (1) short parent half-life (~5 h), (2) dual-mechanism withdrawal (serotonergic AND noradrenergic), and (3) ODV half-life of only 11 h (no self-taper). Symptoms can begin within HOURS of a missed dose: severe 'brain zaps', dizziness, nausea, irritability, vivid dreams, 'electric shock' sensations, disequilibrium, flu-like symptoms. Missed doses are the most common precipitant.",
      management: "NEVER stop abruptly. Taper over at least 4 weeks (longer if high dose or long duration). For severe withdrawal, return to previous dose and taper more slowly. Bridge with fluoxetine 10–20 mg (long half-life self-tapers) for the final 2 weeks. Warn patients to never run out of medication.",
    },
    {
      name: "Serotonin Syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis), and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of initiating, increasing, or combining serotonergic agents. Venlafaxine's dual mechanism does NOT increase serotonin syndrome risk per se vs SSRIs, but combinations with tramadol, triptans, MAOIs, or St John's Wort are higher-risk.",
      management: "Discontinue venlafaxine immediately. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU admission for hyperthermia >41°C.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "SIADH / Hyponatraemia",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Syndrome of inappropriate antidiuretic hormone. Risk highest in elderly, females, and during first 2 weeks. Presents as headache, nausea, confusion, seizures. Mechanism identical to SSRIs — serotonergic stimulation of vasopressin release.",
      management: "Check serum sodium at baseline and within 2 weeks for high-risk patients. Fluid restrict. Hypertonic saline if seizures or Na <120 mmol/L.",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk. Venlafaxine is NOT approved in paediatric patients.",
      management: "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent.",
    },
    {
      name: "Abnormal bleeding",
      frequency: "uncommon",
      severity: "moderate",
      description:
        "Serotonin is stored in platelets and is essential for aggregation. SERT blockade depletes platelet serotonin within 2 weeks, impairing clotting. Risk multiplied when combined with NSAIDs, aspirin, or warfarin.",
      management: "Caution in patients with coagulopathy or on anticoagulants. Consider GI protection if combined with NSAIDs.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description:
        "In patients with undiagnosed bipolar disorder, venlafaxine can trigger a manic switch — possibly at a higher rate than SSRIs due to the noradrenergic/dopaminergic component at high doses. Screen for personal and family history of bipolar disorder before initiating.",
      management: "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Seizures (rare, dose-dependent)",
      frequency: "rare",
      severity: "severe",
      description:
        "Seizure risk is dose-dependent and increases markedly in overdose. At therapeutic doses the risk is low but slightly higher than SSRIs — believed to be due to the noradrenergic and high-dose dopaminergic effects.",
      management: "Use cautiously in patients with epilepsy. Avoid high doses if possible. Benzodiazepines for seizure in overdose setting.",
    },
    {
      name: "Hepatotoxicity (rare)",
      frequency: "rare",
      severity: "severe",
      description:
        "Rare cases of severe hepatotoxicity, including hepatic failure and death, have been reported. Risk is higher than with SSRIs but still rare. Monitor for jaundice, fatigue, dark urine.",
      management: "Discontinue if liver injury suspected. Avoid in severe hepatic impairment.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Blood pressure (SIGNATURE MONITORING)",
      frequency: "Baseline, then at 2 weeks, 4 weeks, at every dose change, and periodically thereafter. More frequently if dose >225 mg/day.",
      rationale:
        "Dose-dependent hypertension is the signature safety issue. At 150–300 mg/day expect ~2–5 mmHg diastolic rise; at >300 mg/day 10–15% develop clinically significant hypertension. Reduce dose if BP rises >10 mmHg diastolic; discontinue if uncontrolled. BP must be controlled before initiation.",
    },
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes.",
    },
    {
      parameter: "Response assessment (PHQ-9 / GAD-7 / HAM-D)",
      frequency: "Baseline, week 4, week 8, then every 3 months.",
      rationale:
        "Quantifies response. ≥50% reduction in PHQ-9 = response. PHQ-9 <5 = remission. Note: at week 4 consider dose escalation from 75 mg → 150 mg (which adds NET blockade) if response is partial — this is the dose where venlafaxine becomes a true SNRI.",
    },
    {
      parameter: "Serum sodium",
      frequency: "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale:
        "SIADH risk is similar to SSRIs (~0.5–1%). Highest risk in elderly females. Hyponatraemia may present as headache, confusion, falls.",
    },
    {
      parameter: "Withdrawal / discontinuation symptoms",
      frequency: "Ask at every visit whether patient has missed any doses.",
      rationale:
        "Because of the short half-life (~5 h parent, ~11 h ODV), missed doses can trigger withdrawal within hours. Early identification enables dose-timing adjustment (e.g., twice-daily IR) or switch to XR. Critical to assess before any planned taper.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 3 months, then every 6 months.",
      rationale:
        "Initial weight loss is common. Long-term weight is relatively neutral. Less weight gain than paroxetine or mirtazapine.",
    },
    {
      parameter: "LFTs",
      frequency: "Baseline; only if clinically indicated.",
      rationale:
        "Hepatotoxicity is rare but reported — slightly higher than SSRIs. Monitor for jaundice, fatigue, dark urine. More caution in pre-existing liver disease.",
    },
    {
      parameter: "Lipid panel (at high doses)",
      frequency: "Baseline; repeat if dose >300 mg/day sustained.",
      rationale:
        "Modest dose-dependent rise in fasting cholesterol (especially LDL) has been reported at high doses. Reassess if patient is on long-term high-dose therapy.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism: "MAOIs inhibit serotonin breakdown. Combining with SERT blockade causes massive serotonergic excess → serotonin syndrome.",
      action: "Absolute contraindication. Wait 14 days after stopping MAOI before starting venlafaxine; wait at least 7 days after stopping venlafaxine before starting an MAOI.",
    },
    {
      drug: "Other serotonergic drugs (tramadol, triptans, St John's Wort, linezolid, dextromethorphan, fentanyl, lithium)",
      severity: "major",
      mechanism: "Additive serotonergic effect raises serotonin syndrome risk. Tramadol is also a weak SNRI — directly overlapping mechanism with venlafaxine.",
      action: "Avoid if possible. If unavoidable, monitor closely for serotonin syndrome — especially during the first month.",
    },
    {
      drug: "NSAIDs, aspirin, and anticoagulants (warfarin, DOACs)",
      severity: "moderate",
      mechanism:
        "SERT blockade depletes platelet serotonin → impaired aggregation. Combined with NSAIDs (GI mucosal damage) or anticoagulants → additive bleeding risk. ~6× increased risk of upper GI bleeding vs either alone.",
      action: "Co-prescribe gastroprotection (PPI) in elderly or those with prior GI bleed. Monitor INR if on warfarin. Consider paracetamol instead of NSAIDs.",
    },
    {
      drug: "CYP2D6 inhibitors (paroxetine, fluoxetine, bupropion, quinidine)",
      severity: "major",
      mechanism:
        "Venlafaxine is metabolised by CYP2D6 to its active metabolite ODV. Strong CYP2D6 inhibitors raise parent venlafaxine and lower ODV — total pharmacodynamic exposure is roughly preserved (parent and metabolite are equipotent) but tolerability may worsen due to higher peak parent concentrations.",
      action: "Reduce venlafaxine dose by 25–50% when initiating a strong CYP2D6 inhibitor. Monitor for nausea, dizziness, and BP changes.",
    },
    {
      drug: "CYP3A4 inhibitors (ketoconazole, clarithromycin, ritonavir, grapefruit juice)",
      severity: "moderate",
      mechanism: "CYP3A4 is a minor metabolic pathway for venlafaxine, but strong inhibitors can raise plasma concentrations of both venlafaxine and ODV.",
      action: "Monitor for dose-related adverse effects (nausea, BP elevation, insomnia). Reduce dose if needed.",
    },
    {
      drug: "Diuretics",
      severity: "moderate",
      mechanism:
        "Additive risk of hyponatraemia (SIADH from venlafaxine + diuretic-induced natriuresis). Also additive hypertension risk via volume changes if venlafaxine raises BP.",
      action: "Check serum sodium at baseline and within 2 weeks in elderly patients on diuretics. Monitor BP.",
    },
    {
      drug: "Sympathomimetics (pseudoephedrine, phenylephrine, decongestants, vasopressors)",
      severity: "moderate",
      mechanism:
        "Venlafaxine raises synaptic norepinephrine via NET blockade. Additive sympathomimetic effect → marked BP elevation, tachycardia, arrhythmia risk.",
      action: "Avoid decongestants in patients on venlafaxine — especially at doses >225 mg/day. Monitor BP closely if combination unavoidable.",
    },
    {
      drug: "Pimozide",
      severity: "contraindicated",
      mechanism: "CYP2D6 inhibition by venlafaxine raises pimozide levels → QTc prolongation → torsades de pointes.",
      action: "Never combine.",
    },
    {
      drug: "Alcohol",
      severity: "moderate",
      mechanism: "Venlafaxine does not potentiate alcohol impairment in formal studies, but alcohol worsens depression, sleep, and tolerability — and raises bleeding risk if combined with NSAIDs.",
      action: "Counsel to minimise or avoid. No safe level during the first month.",
    },
    {
      drug: "CYP2D6 substrates with narrow therapeutic index (TCAs, flecainide, metoprolol)",
      severity: "moderate",
      mechanism: "Venlafaxine is a weak CYP2D6 inhibitor — can raise levels of co-administered CYP2D6 substrates.",
      action: "Monitor for toxicity. Consider dose reduction of the substrate.",
    },
    {
      drug: "Sibutramine (where available)",
      severity: "contraindicated",
      mechanism: "Sibutramine is itself an SNRI — combining two SNRIs raises serotonin syndrome and severe hypertension risk.",
      action: "Do not combine.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Venlafaxine is NOT the antidepressant of choice in pregnancy — sertraline is preferred when an SSRI is appropriate. Venlafaxine has not been clearly linked to major congenital malformations, but third-trimester neonatal adaptation syndrome is MORE SEVERE than with SSRIs (dual-mechanism withdrawal + noradrenergic effect). Neonatal hypertension has been reported (unique among antidepressants — directly attributable to maternal NET blockade), along with irritability, jitteriness, respiratory distress, poor feeding, and constant crying. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks. If venlafaxine is necessary in pregnancy, use the lowest effective dose, plan a planned taper in the third trimester if clinically appropriate, and alert the neonatal team at delivery.",
    lactation:
      "Venlafaxine and ODV pass into breast milk in clinically meaningful amounts — relative infant dose is ~6–9% (higher than sertraline's ~1%). Most breastfed infants have no adverse effects, but cases of irritability, sedation, and poor weight gain have been reported. Sertraline is the preferred antidepressant in breastfeeding when pharmacotherapy is necessary. If venlafaxine is required, use the lowest effective dose, monitor the infant for sedation/irritability/poor feeding, and consider expressing and discarding milk at peak drug concentration (~4 hours post-dose).",
  },

  renalAdjustment:
    "Reduce total daily dose by 25–50% in moderate renal impairment (CrCl 30–89 mL/min). Reduce by 50% or more in severe renal impairment (CrCl <30 mL/min). Reduce by 50% in patients on haemodialysis, and dose AFTER dialysis sessions (venlafaxine and ODV are dialysable).",

  hepaticAdjustment:
    "Reduce total daily dose by 50% in mild-to-moderate hepatic impairment (Child-Pugh A and B). Further reduction may be needed in severe hepatic impairment (Child-Pugh C) — use cautiously and titrate slowly. Consider every-other-day dosing for the XR formulation in severe impairment.",

  /* ---- Education ---- */
  patientExplanation:
    "Venlafaxine is a medicine that helps the brain keep more of two mood-regulating chemicals available for longer — serotonin and norepinephrine. SSRIs only affect serotonin; venlafaxine is called an SNRI because it affects both, which is why it can work when an SSRI hasn't. At low doses (75–150 mg/day) it acts mostly like an SSRI; at higher doses (150–225 mg/day) the norepinephrine effect kicks in, helping with energy, attention, and pain. Most people notice side effects in the first 1–2 weeks (commonly nausea, sweating, trouble sleeping) before mood benefit builds up over 4–6 weeks. Two things make venlafaxine different from most other antidepressants: (1) it can raise your blood pressure — especially at higher doses — so your doctor will check it regularly; and (2) it has the most severe withdrawal of any antidepressant, so you must never miss a dose and never stop it suddenly. Always come off it slowly with your doctor's guidance.",

  patientEducationPoints: [
    "Some early changes can happen within 1–2 weeks, but clearer mood benefit usually takes 4–6 weeks or longer. Don't stop early just because you don't feel better yet.",
    "NEVER stop venlafaxine abruptly. Stopping suddenly can cause severe withdrawal — 'brain zaps', dizziness, nausea, irritability, vivid dreams — sometimes within hours of a missed dose.",
    "NEVER miss a dose. Because venlafaxine has a short half-life, missing even one dose can trigger withdrawal. Refill your prescription at least a week before you run out.",
    "Your doctor will check your blood pressure at baseline, 2 weeks, 4 weeks, and at every dose change. This is because venlafaxine can raise blood pressure — especially at higher doses. Tell your doctor if you have high BP or are on BP medication.",
    "Nausea, sweating, headache, or trouble sleeping may appear in the first 1–2 weeks before mood benefit. These usually settle as your body adapts. Take with food to reduce nausea.",
    "Take it in the morning — venlafaxine can be activating and may keep you awake if taken at night.",
    "Avoid alcohol — it can worsen sleep, mood, and tolerability. There is no safe alcohol level during the first month.",
    "Tell your doctor about all other medications — especially tramadol (pain), triptans (migraine), certain antibiotics like linezolid, cough syrups with dextromethorphan, herbal products like St John's Wort, decongestants (pseudoephedrine), and NSAIDs (ibuprofen, aspirin).",
    "Watch for warning signs in the first month: new or worsening agitation, irritability, anxiety, or suicidal thoughts — particularly if you're under 25. Contact your clinician immediately.",
    "Seek emergency help for signs of serotonin syndrome (high fever, confusion, sweating, agitation, tremor, muscle rigidity, fast heartbeat) OR for severe headache with very high blood pressure.",
  ],

  clinicalPearls: [
    "Dose-dependent mechanism is THE signature of venlafaxine: 75 mg/day = essentially an SSRI; 150–225 mg/day = true SNRI (dual SERT + NET); >300 mg/day = adds weak DAT inhibition. If a patient on 75 mg isn't responding, escalating to 150 mg isn't just 'more of the same' — it's adding a fundamentally different mechanism.",
    "ALWAYS CHECK BP at every visit — baseline, 2 weeks, 4 weeks, every dose change. Dose-dependent hypertension is the signature adverse effect. If BP rises >10 mmHg diastolic, reduce the dose or switch. Pre-existing hypertension must be controlled before initiation.",
    "Venlafaxine has the WORST discontinuation syndrome of any antidepressant — short parent half-life (~5 h) + dual-mechanism withdrawal. Missed doses can cause withdrawal within HOURS. Always taper over ≥4 weeks; bridge with fluoxetine (long half-life) for the last 2 weeks of taper.",
    "When an SSRI has failed, venlafaxine's dual mechanism is a logical next step — particularly for anergic/lethargic depression where the noradrenergic component is desirable. The SMENCED algorithm and NICE CG91 both support SNRI switching after SSRI failure.",
    "Venlafaxine is particularly useful when depression is COMORBID WITH PAIN — neuropathic pain, fibromyalgia, chronic musculoskeletal pain. The NET blockade enhances descending inhibitory pain pathways. Duloxetine is the FDA-approved SNRI for neuropathic pain; venlafaxine is a reasonable off-label alternative.",
    "Desvenlafaxine (Pristiq) is the isolated active metabolite O-desmethylvenlafaxine (ODV), marketed separately. Same pharmacology but cleaner PK (less CYP2D6 dependence, lower inter-patient variability). Patients stable on venlafaxine may be switched mg-for-mg (26 mg desvenlafaxine ≈ 75 mg venlafaxine).",
    "Venlafaxine is more activating than SSRIs (norepinephrine) — useful for atypical/lethargic depression where patients sleep too much and eat too much. Avoid in agitated/anxious depression unless combined with a sedating agent at night.",
    "Initial weight LOSS is common (unlike paroxetine/mirtazapine). Useful in overweight patients; problematic in cachectic or geriatric patients. Weight usually plateaus after 3–6 months.",
    "For breast-cancer survivors on tamoxifen: venlafaxine is PREFERRED over paroxetine/fluoxetine for hot flushes because it is a weak CYP2D6 inhibitor and does not block tamoxifen activation. Doses of 37.5–75 mg/day are typically sufficient.",
    "In bipolar depression, venlafaxine can trigger a manic switch — possibly at a higher rate than SSRIs due to the noradrenergic/dopaminergic component. Always screen for bipolar disorder (MDQ) before prescribing, and avoid using venlafaxine as monotherapy in known bipolar depression.",
  ],

  examPearls: [
    "Venlafaxine is an SNRI — DUAL SERT + NET blockade. It is NOT an SSRI. The 'SNRI' label is the single most testable fact.",
    "DOSE-DEPENDENT mechanism: <150 mg/day = SERT only (SSRI-like); 150–225 mg/day = SERT + NET (true SNRI); >300 mg/day = SERT + NET + weak DAT. This is the most testable mechanism fact about venlafaxine.",
    "HYPERTENSION is dose-dependent — monitor BP at baseline, 2wk, 4wk, every dose change. At >300 mg/day, 10–15% develop clinically significant hypertension. Unique among antidepressants (only SNRIs and TCAs do this).",
    "WORST discontinuation syndrome of any antidepressant — short parent half-life (~5 h) + dual-mechanism withdrawal. Missed dose → withdrawal within hours. Taper slowly; bridge with fluoxetine.",
    "Active metabolite = O-desmethylvenlafaxine (ODV). Desvenlafaxine (Pristiq) is ODV marketed separately — same molecule, cleaner PK.",
    "4 FDA-approved indications: MDD, GAD, Social Anxiety Disorder, Panic Disorder. Broader anxiety approval than most SSRIs (note: NOT approved for OCD, PTSD, or PMDD — those are sertraline's signature indications).",
    "Metabolised by CYP2D6 (to ODV). Strong CYP2D6 inhibitors (paroxetine, fluoxetine, bupropion) raise venlafaxine levels — but total pharmacodynamic exposure is roughly preserved because parent and ODV are equipotent.",
    "Useful for depression WITH PAIN — NET blockade enhances descending inhibitory pain pathways. Indicated off-label for diabetic neuropathy, post-herpetic neuralgia, fibromyalgia.",
    "More NAUSEA than SSRIs (combined 5-HT3 + noradrenergic effect on gut). More SWEATING than SSRIs (noradrenergic effect on eccrine glands). More INSOMNIA than SSRIs (noradrenergic activation).",
    "Can cause weight LOSS initially (unlike paroxetine/mirtazapine which cause weight gain).",
    "NEONATAL HYPERTENSION reported in third-trimester exposure — unique among antidepressants (directly attributable to maternal NET blockade). NOT the drug of choice in pregnancy (sertraline preferred).",
    "Preferred over paroxetine/fluoxetine for hot flushes in breast-cancer survivors on tamoxifen (weak CYP2D6 inhibition → does not block tamoxifen activation).",
    "Half-lives to memorise: venlafaxine 5h (parent) + 11h (ODV) → shortest effective half-life among commonly used antidepressants → worst withdrawal. Compare: paroxetine 21h, sertraline 26h, fluoxetine + norfluoxetine 1–4 days (longest, mildest withdrawal).",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "VEN — the three-fact signature",
      trick: "VENlafaxine = Varies by dose · Expect BP rise · Nasty withdrawal",
      remembers:
        "The three signature facts about venlafaxine: dose-dependent mechanism, dose-dependent hypertension, and the worst discontinuation syndrome of any antidepressant.",
    },
    {
      title: "75 / 150 / 300 — the dose ladder",
      trick: "75 = SERT only (SSRI) · 150 = SERT + NET (SNRI) · 300 = SERT + NET + DAT (mild dopaminergic)",
      remembers:
        "The dose-dependent mechanism — the single most testable fact. Each step up the ladder adds a transporter. 75 mg behaves like an SSRI; 150 mg unlocks the true SNRI effect; >300 mg adds weak dopamine.",
    },
    {
      title: "BP³ — Blood Pressure at three timepoints",
      trick: "Baseline · 2 weeks Post-initiation · Per dose-change (and 4 weeks)",
      remembers:
        "The signature BP monitoring schedule: at Baseline, at 2 weeks Post-initiation, and at every dose change (and at 4 weeks). Dose-dependent hypertension is the unique SNRI safety issue.",
    },
    {
      title: "WORST Withdrawal",
      trick: "WORST = Worst Of all antidepressants due to: Short half-life (5h) + dual mechanism + Tachy onset (hours)",
      remembers:
        "Venlafaxine has the most severe discontinuation syndrome of any antidepressant. Mechanism: short parent half-life (~5h) + dual SERT/NET withdrawal. Symptoms begin within hours of a missed dose. Bridge with fluoxetine (long half-life) for the last 2 weeks of any taper.",
    },
    {
      title: "SNRI Side Effects — 'Sweat, Nausea, Insomnia, BP'",
      trick: "SNRI = Sweating + Nausea + Insomnia + BP rise (more than SSRIs)",
      remembers:
        "SNRI-specific side effects. Sweating and BP rise = noradrenergic (NET). Nausea = combined serotonergic + noradrenergic effect on gut. Insomnia = noradrenergic activation. All are more pronounced than with SSRIs.",
    },
    {
      title: "ODV — the same drug, twice",
      trick: "Venlafaxine → O-Desmethyl-Venlafaxine (ODV) = Desvenlafaxine (Pristiq) — same active molecule, sold separately",
      remembers:
        "ODV is the active metabolite of venlafaxine — pharmacologically equivalent to the parent. Desvenlafaxine (Pristiq) is ODV marketed directly, with cleaner pharmacokinetics (less CYP2D6 dependence). 26 mg desvenlafaxine ≈ 75 mg venlafaxine.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: SNRI — blocks both SERT and NET (weak DAT at high doses). NOT an SSRI.",
    "Dose-dependent mechanism: 75–150 mg/day = SERT only (SSRI-like); 150–225 mg/day = SERT + NET (true SNRI); >300 mg/day = + weak DAT (mild dopaminergic). Most testable fact.",
    "4 FDA indications: MDD, GAD, Social Anxiety Disorder, Panic Disorder. Off-label: neuropathic pain, hot flushes (especially in breast-cancer survivors on tamoxifen), fibromyalgia, cataplexy.",
    "Onset: 4–6 weeks for depression; 8–12 weeks for anxiety disorders. Withdrawal can begin within HOURS of a missed dose.",
    "Signature safety #1: dose-dependent HYPERTENSION. <150 mg/day = minimal BP effect; >300 mg/day = 10–15% develop significant HTN. Monitor BP at baseline, 2wk, 4wk, every dose change.",
    "Signature safety #2: WORST discontinuation syndrome of any antidepressant. Short parent t½ (5h) + dual-mechanism withdrawal. Taper ≥4 weeks; bridge with fluoxetine for last 2 weeks.",
    "Common side effects: nausea (worse than SSRIs), sweating (noradrenergic), insomnia (activating), sexual dysfunction, headache, dry mouth, weight loss initially.",
    "Contraindications: MAOIs (14-day washout), uncontrolled hypertension, pimozide, hypersensitivity.",
    "Interactions: MAOIs (fatal), serotonergic drugs (serotonin syndrome), NSAIDs/warfarin (bleeding), CYP2D6 inhibitors (raise venlafaxine), CYP3A4 inhibitors (raise venlafaxine), diuretics (additive hyponatraemia + HTN), sympathomimetics (additive HTN).",
    "Pregnancy: NOT the drug of choice (sertraline preferred). Neonatal hypertension reported (unique among antidepressants). Severe neonatal adaptation syndrome. Avoid if possible; weigh risks of untreated depression.",
    "Renal: reduce 25–50% (CrCl 30–89), 50%+ (CrCl <30), 50% (haemodialysis). Hepatic: reduce 50% (Child-Pugh A/B); further reduction + caution in C.",
    "Active metabolite = O-desmethylvenlafaxine (ODV) — equipotent to parent. Desvenlafaxine (Pristiq) is ODV marketed separately with cleaner PK.",
  ],

  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "Treatment-resistant depression after SSRI failure — escalating venlafaxine from 75 mg to 225 mg with BP tracking",
      presentation:
        "A 42-year-old man with persistent depression despite 10 weeks of sertraline 200 mg/day. Now switched to venlafaxine for its dual mechanism. BP must be tracked through every dose escalation.",
      history:
        "Rajesh, a 42-year-old accountant, presents to his psychiatrist after an adequate trial of sertraline 200 mg/day for 10 weeks produced only partial response (PHQ-9 fell from 20 at baseline to 14 — a 30% reduction, short of the 50% threshold for response). Symptoms include persistent low mood, anhedonia, marked lethargy (sleeping 11 hours per day), difficulty concentrating at work, and 3 kg weight gain. No suicidal ideation. He finds the lethargy most disabling — describing himself as 'moving through treacle'. No prior psychiatric history. Medical history: pre-hypertension (BP typically 128–134/80–86), no diabetes. Maternal aunt with bipolar disorder. He drinks 4 units of alcohol per week, no recreational drugs, no regular medications besides sertraline. MDQ screen for bipolar disorder is negative. BMI 26.",
      examination:
        "Alert, oriented, cooperative but visibly slowed. Speech slightly delayed. Mood '4/10', affect congruent and flat. No hallucinations, delusions, or thought disorder. MoCA 27/30 (mild slowing on trail-making). PHQ-9 score 14 (moderate). GAD-7 score 7 (mild). BP 132/84 (baseline — pre-hypertensive). HR 76. BMI 26. No neurological deficit. TSH, FBC, LFTs, fasting glucose, lipid panel all normal. ECG normal (QTc 412 ms).",
      diagnosis:
        "Major Depressive Disorder, recurrent episode, moderate, with partial response to SSRI (sertraline) — i.e., 'treatment-resistant' by NICE definition (inadequate response to one adequate antidepressant trial). Differential: bipolar depression (MDQ negative but family history warrants caution); depression with atypical features (hypersomnia, lethargy — favouring a noradrenergic agent).",
      rationale:
        "Venlafaxine chosen because: (1) SSRI has produced only partial response → switching to a different pharmacological class (SERT + NET) is more evidence-based than dose-escalating sertraline further; (2) the patient's phenotype is anergic/hypersomnic — the noradrenergic effect of venlafaxine at moderate dose is particularly suited to lethargic depression; (3) no significant renal/hepatic impairment; (4) baseline BP is pre-hypertensive but controlled — acceptable to start venlafaxine with close BP monitoring; (5) family history of bipolar disorder warrants caution but MDQ is negative and the patient will be monitored closely for manic switch. Plan to escalate through the dose-dependent mechanism: 75 mg (SSRI-like) → 150 mg (true SNRI) → 225 mg (full SNRI) if needed.",
      management:
        "Sertraline tapered and stopped over 1 week (washout period observed). Venlafaxine XR 37.5 mg every morning with food for 4 days, then 75 mg daily. Plan: review at 2 weeks (tolerability + BP + suicidality), 4 weeks (early response + BP), 6 weeks (dose escalation if PHQ-9 reduction <50%), 12 weeks (full response assessment). BP checked at every visit. Patient given PHQ-9 self-rating schedule, BP log to record at home twice weekly, and safety plan with crisis contacts. Counseled: (1) expect nausea and sweating in first 1–2 weeks; (2) NEVER miss a dose — withdrawal can begin within hours; (3) NEVER stop abruptly; (4) take in the morning; (5) watch for agitation, irritability, or new suicidal thoughts in first month; (6) full effect takes 4–6 weeks. Concurrent referral for CBT.",
      outcome:
        "Week 2 (venlafaxine XR 75 mg): nausea and increased sweating (tolerable), no suicidality, sleep unchanged. BP 130/82 (baseline 132/84 — no change). PHQ-9 14 (no change yet). Week 4 (still 75 mg): energy mildly improved, BP 132/84 (no change), PHQ-9 12 (14% reduction from venlafaxine baseline — partial response). Dose escalated to 150 mg XR (now true SNRI — adds NET blockade). Week 6 (150 mg): energy noticeably better — sleeping 9 hours instead of 11. BP 138/86 (rise of 6/2 mmHg — monitor but acceptable, <10 mmHg diastolic). PHQ-9 9 (36% reduction). Sweating increased. Dose escalated to 225 mg XR. Week 8 (225 mg): BP 140/86 (rise of 8/2 mmHg from baseline — borderline but acceptable; advised home BP monitoring and dose held at 225 mg). PHQ-9 6 (57% reduction — treatment response). Mood 7/10. Energy restored, returned to full-time work without 'treacle' sensation. Week 12: PHQ-9 4 (remission). BP stable at 138/86. Sweating persistent but tolerated. Plan: continue venlafaxine 225 mg XR for 9 more months (12 months total from remission), then taper over 6–8 weeks with fluoxetine bridge for the last 2 weeks. BP to be monitored at every visit throughout treatment.",
      teachingPoints: [
        "Dose-dependent mechanism in action: at 75 mg Rajesh had only partial SSRI-like response; the meaningful improvement came only after escalation to 150 mg (where NET blockade begins) and 225 mg. This is exactly the dose-dependent pharmacology made clinical.",
        "BP monitoring IS the prescribing of venlafaxine: his BP rose 6–8 mmHg systolic with escalation — within acceptable limits (<10 mmHg diastolic rise), but if it had crossed that threshold, the dose would have been reduced or the drug switched. The pre-hypertensive baseline warranted extra vigilance.",
        "Switching antidepressant class after one adequate SSRI trial is more evidence-based than dose-escalating the same SSRI — particularly when the phenotype (anergic, hypersomnic) suggests noradrenergic deficit.",
        "Plan the taper FROM THE DAY YOU START. Venlafaxine's withdrawal syndrome is severe enough that the exit strategy must be discussed at initiation — including the fluoxetine bridge for the last 2 weeks of any future taper.",
        "Family history of bipolar disorder warrants MDQ screening before any antidepressant — and ongoing vigilance for manic switch, which may be more likely with venlafaxine than SSRIs due to the noradrenergic/dopaminergic component at higher doses.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Venlafaxine vs Sertraline vs Duloxetine vs Mirtazapine",
      primaryDrug: "Venlafaxine",
      rows: [
        {
          attribute: "Drug class",
          primaryValue: "SNRI (SERT + NET, weak DAT at high dose)",
          comparisons: [
            { drug: "Sertraline", value: "SSRI (SERT only)" },
            { drug: "Duloxetine", value: "SNRI (SERT + NET, balanced at all doses)" },
            { drug: "Mirtazapine", value: "NaSSA (α2 + 5-HT2/5-HT3 antagonist)" },
          ],
        },
        {
          attribute: "Mechanism — dose-dependent?",
          primaryValue: "YES (signature): 75 mg = SERT only; 150–225 mg = SERT + NET; >300 mg = + weak DAT",
          comparisons: [
            { drug: "Sertraline", value: "No — pure SERT blockade at all doses" },
            { drug: "Duloxetine", value: "No — balanced SERT + NET at all doses" },
            { drug: "Mirtazapine", value: "No — blockade of α2 and 5-HT2/3 receptors, dose-independent" },
          ],
        },
        {
          attribute: "BP monitoring required",
          primaryValue: "YES — signature. Baseline, 2wk, 4wk, every dose change. Dose-dependent hypertension.",
          comparisons: [
            { drug: "Sertraline", value: "No — minimal BP effect" },
            { drug: "Duloxetine", value: "Yes — BP elevation reported but less pronounced than venlafaxine; check periodically" },
            { drug: "Mirtazapine", value: "No — minimal BP effect (sedation can cause orthostasis)" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "WORST of any antidepressant (short t½ 5h + dual withdrawal)",
          comparisons: [
            { drug: "Sertraline", value: "Mild–moderate (t½ 26h)" },
            { drug: "Duloxetine", value: "Moderate (t½ 12h)" },
            { drug: "Mirtazapine", value: "Mild (t½ 20–40h)" },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "5 h (parent) + 11 h (ODV active metabolite)",
          comparisons: [
            { drug: "Sertraline", value: "26 hours" },
            { drug: "Duloxetine", value: "12 hours" },
            { drug: "Mirtazapine", value: "20–40 hours" },
          ],
        },
        {
          attribute: "FDA-approved indications",
          primaryValue: "MDD, GAD, Social Anxiety, Panic (4)",
          comparisons: [
            { drug: "Sertraline", value: "MDD, OCD, Panic, PTSD, Social Anxiety, PMDD (6)" },
            { drug: "Duloxetine", value: "MDD, GAD, fibromyalgia, neuropathic pain (DPN), chronic musculoskeletal pain (5)" },
            { drug: "Mirtazapine", value: "MDD only (1)" },
          ],
        },
        {
          attribute: "Pain indication",
          primaryValue: "Off-label for neuropathic pain, fibromyalgia, hot flushes",
          comparisons: [
            { drug: "Sertraline", value: "No pain indication" },
            { drug: "Duloxetine", value: "FDA-APPROVED for diabetic neuropathy, fibromyalgia, chronic musculoskeletal pain (preferred SNRI for pain)" },
            { drug: "Mirtazapine", value: "No pain indication (some evidence for neuropathic pain adjunct)" },
          ],
        },
        {
          attribute: "Sedation vs activation",
          primaryValue: "Activating (noradrenergic) — good for anergic depression",
          comparisons: [
            { drug: "Sertraline", value: "Mildly activating" },
            { drug: "Duloxetine", value: "Mildly activating" },
            { drug: "Mirtazapine", value: "Sedating — good for insomnia/weight loss" },
          ],
        },
        {
          attribute: "Weight change",
          primaryValue: "Initial weight LOSS (unlike paroxetine/mirtazapine)",
          comparisons: [
            { drug: "Sertraline", value: "Mild long-term gain" },
            { drug: "Duloxetine", value: "Weight neutral" },
            { drug: "Mirtazapine", value: "Significant weight GAIN (often therapeutic in cachectic patients)" },
          ],
        },
        {
          attribute: "Pregnancy safety",
          primaryValue: "NOT drug of choice (sertraline preferred). Neonatal hypertension reported.",
          comparisons: [
            { drug: "Sertraline", value: "SSRI of choice in pregnancy & lactation" },
            { drug: "Duloxetine", value: "Limited data — not first-line in pregnancy" },
            { drug: "Mirtazapine", value: "Probably safe; less data than sertraline" },
          ],
        },
        {
          attribute: "When to choose",
          primaryValue: "SSRI failure, anergic depression, depression + pain, hot flushes in tamoxifen users",
          comparisons: [
            { drug: "Sertraline", value: "First-line depression/anxiety, pregnancy/lactation, PTSD, OCD" },
            { drug: "Duloxetine", value: "Depression + documented neuropathic pain or fibromyalgia (FDA-approved for pain)" },
            { drug: "Mirtazapine", value: "Depression with severe insomnia + weight loss; SSRI-induced sexual dysfunction" },
          ],
        },
      ],
      takeaway:
        "Venlafaxine = the dose-dependent SNRI — escalates from SSRI-like to true SNRI to mild dopaminergic as dose rises. Choose it after SSRI failure, for anergic depression, or when comorbid pain/hot flushes make NET blockade desirable. BUT you must monitor BP (signature risk) and never miss a dose (worst withdrawal of any antidepressant). Sertraline remains first-line for uncomplicated depression/anxiety and for pregnancy. Duloxetine is the preferred SNRI when neuropathic pain is the primary indication (FDA-approved). Mirtazapine is reserved for depression with severe insomnia/weight loss.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute SERT blockade (and NET blockade if starting at ≥150 mg)",
      description:
        "Venlafaxine blocks SERT (and, at higher doses, NET) within hours. Synaptic serotonin and norepinephrine rise. Side effects (nausea, sweating, activation) often appear here. Patients may feel worse before they feel better — particularly anxious patients sensitive to the activating noradrenergic effect.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "Autoreceptor desensitisation begins",
      description:
        "5-HT1A autoreceptors in the raphe nuclei begin to desensitise. α2-adrenergic autoreceptors in the locus coeruleus begin to downregulate. Sleep, appetite, and energy often improve first — before mood. Note: if a dose is MISSED during this window, withdrawal symptoms can begin within hours (short half-life).",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Neuroadaptive changes + dose escalation window",
      description:
        "BDNF expression rises in the hippocampus. Postsynaptic receptor downregulation occurs. Early mood improvement becomes noticeable. This is the typical window to consider dose escalation from 75 mg to 150 mg — which transforms the drug from an SSRI to a true SNRI by adding NET blockade.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "Steady-state monoamine levels and full downstream adaptations achieved. Mood, anxiety, and energy typically reach maximum improvement for depression. BP should be rechecked here — if a dose-dependent rise is going to occur, it usually manifests by week 4 at the new dose.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 8–12",
      title: "Full therapeutic effect (anxiety disorders)",
      description:
        "GAD, social anxiety, and panic disorder often take 8–12 weeks for full response — slower than depression. Counsel patients accordingly.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months 3–6",
      title: "Maintenance & relapse prevention",
      description:
        "Continued neuroplastic changes. Continue treatment for 6–12 months after the first depressive episode, longer (often indefinite) for recurrent episodes or chronic anxiety disorders. BP should continue to be monitored periodically throughout maintenance.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation (PLANNED — never abrupt)",
      title: "Tapered withdrawal over ≥4 weeks",
      description:
        "Sudden cessation causes the WORST discontinuation syndrome of any antidepressant — within HOURS, patients can experience 'brain zaps', dizziness, nausea, irritability, vivid dreams. Taper over ≥4 weeks (longer for high doses or long duration). Bridge with fluoxetine 10–20 mg for the last 2 weeks — its long half-life self-tapers the patient off the serotonergic component.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why does my doctor check my blood pressure every time I see them?",
      answer:
        "Venlafaxine can raise your blood pressure — especially at higher doses (above 150 mg/day). This is a dose-dependent effect: at low doses it's minimal, but at 300 mg/day or more, 10–15% of people develop clinically significant hypertension. Your doctor checks your BP at baseline, 2 weeks, 4 weeks, and at every dose change to catch this early. If your BP rises too much, the dose may be reduced or the medication switched.",
    },
    {
      question: "Why can't I miss even one dose?",
      answer:
        "Venlafaxine has a very short half-life (about 5 hours for the parent drug). This means that within hours of a missed dose, your brain starts to feel the absence of the medicine — and withdrawal symptoms can begin: 'brain zaps', dizziness, nausea, irritability, vivid dreams. This is the worst withdrawal of any antidepressant. Always refill your prescription at least a week before you run out, and take your dose at the same time every day.",
    },
    {
      question: "What should I do if I run out of medication?",
      answer:
        "Call your pharmacy or doctor IMMEDIATELY — do not wait. Even one missed dose can trigger withdrawal. If you're travelling, always carry a spare pack. If you absolutely cannot obtain more, contact your doctor who may be able to bridge you with a small supply of fluoxetine (a long-acting SSRI that can smooth the transition). Never stop abruptly.",
    },
    {
      question: "How is venlafaxine different from an SSRI like sertraline?",
      answer:
        "Venlafaxine is an SNRI — it affects both serotonin AND norepinephrine. SSRIs affect only serotonin. This matters for two reasons: (1) the norepinephrine effect can help when SSRIs haven't worked, particularly for lethargic/low-energy depression and for neuropathic pain; (2) the norepinephrine effect also causes the two signature differences — it can raise blood pressure (SSRIs don't) and it causes worse withdrawal when stopped (the dual mechanism makes withdrawal more severe). At low doses (75–150 mg), venlafaxine actually behaves very much like an SSRI; the SNRI effect kicks in at higher doses.",
    },
    {
      question: "Will I gain or lose weight on venlafaxine?",
      answer:
        "Unlike paroxetine or mirtazapine, venlafaxine tends to cause mild weight LOSS initially — particularly in the first 3–6 months. This can be welcome if you're overweight, but if you're already underweight or elderly, your doctor will monitor your weight. After the initial period, weight usually plateaus. If weight loss is problematic, switching to mirtazapine is an option.",
    },
    {
      question: "How long does venlafaxine take to work?",
      answer:
        "Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks or longer for depression. For anxiety disorders (GAD, social anxiety, panic), full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet — and don't increase the dose on your own. Your doctor will assess response at 4–6 weeks and decide whether to escalate the dose (which also changes the mechanism — adding the norepinephrine effect).",
    },
    {
      question: "Can I drink alcohol while taking venlafaxine?",
      answer:
        "Alcohol can worsen sleep, mood, judgment, and medication tolerability — and combined with venlafaxine's already activating profile, it can worsen anxiety, insomnia, and BP. Best minimised or avoided, particularly during the first month. There is no 'safe' level that has been established, so the simplest advice is not to drink while you're stabilising on the medication.",
    },
    {
      question: "What if I'm pregnant or breastfeeding?",
      answer:
        "Venlafaxine is NOT the antidepressant of choice in pregnancy — sertraline is usually preferred. Venlafaxine has not been clearly linked to birth defects, but in the third trimester it can cause a more severe neonatal adaptation syndrome than SSRIs — and, uniquely, neonatal hypertension has been reported. If you're already on venlafaxine and become pregnant, do NOT stop suddenly (severe withdrawal). Talk to your obstetrician and psychiatrist together to weigh the risks of continuing against the risks of untreated depression and the risks of switching. For breastfeeding, sertraline is preferred; if venlafaxine is required, the lowest effective dose is used and the infant is monitored for sedation or poor feeding.",
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
        source: "NICE Clinical Guideline CG113 — Generalised anxiety disorder and panic disorder in adults: management",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents (SNRI section)",
      },
      {
        source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
        section: "Section V — Pharmacotherapy of Mood Disorders (Venlafaxine & Desvenlafaxine)",
      },
      {
        source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition",
        section: "Chapter 36 — Psychopharmacology (Serotonin–Norepinephrine Reuptake Inhibitors)",
      },
    ],
    trials: [
      {
        source: "Cipriani A et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366.",
        section: "Venlafaxine among the more effective antidepressants in the network meta-analysis",
      },
      {
        source: "Thase ME et al. Remission rates following antidepressant therapy with bupropion or venlafaxine: a meta-analysis of original data from 7 randomized controlled trials. J Clin Psychiatry 2006;67:276-285.",
        section: "Venlafaxine associated with higher remission rates than SSRIs in pooled analysis",
      },
    ],
    reviews: [
      {
        source: "FDA Prescribing Information — EFFEXOR XR (venlafaxine hydrochloride)",
        section: "Highlights of Prescribing Information (Boxed Warning, Hypertension, Discontinuation)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/020699s040lbl.pdf",
      },
      {
        source: "Sansone RA, Sansone LA. Venlafaxine-induced hypertension: a clinical review. Innov Clin Neurosci 2014;11(7-8):25-29.",
        section: "Dose-dependent hypertension: incidence, mechanism, monitoring",
      },
      {
        source: "Fava GA et al. Withdrawal symptoms after selective serotonin reuptake inhibitor discontinuation: a systematic review. Psychother Psychosom 2015;84:72-81.",
        section: "Venlafaxine has the highest rate of severe withdrawal symptoms among antidepressants",
      },
    ],
    patientResources: [
      {
        source: "Royal College of Psychiatrists — Patient information on antidepressants (SNRIs)",
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
      name: "Duloxetine",
      drugClass: "SNRI",
      relationship:
        "Fellow SNRI — same dual SERT + NET mechanism, but balanced at all doses (no dose-dependent ratio). Duloxetine is FDA-approved for neuropathic pain, fibromyalgia, and chronic musculoskeletal pain — preferred SNRI when pain is the primary indication. Less hypertension risk than venlafaxine; less severe withdrawal.",
    },
    {
      name: "Desvenlafaxine (Pristiq)",
      drugClass: "SNRI",
      relationship:
        "The active metabolite of venlafaxine (O-desmethylvenlafaxine, ODV) marketed as a separate drug. Same pharmacology but cleaner PK — less CYP2D6 dependence, lower inter-patient variability, no dose-dependent mechanism. 26 mg desvenlafaxine ≈ 75 mg venlafaxine.",
    },
    {
      name: "Sertraline",
      slug: "sertraline",
      drugClass: "SSRI",
      relationship:
        "First-line alternative. Pure SERT blockade at all doses. Preferred in pregnancy/lactation and when BP is a concern. No dose-dependent mechanism. Milder discontinuation syndrome. Useful when venlafaxine causes problematic BP elevation or when an SSRI is sufficient.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship:
        "Critical partner in venlafaxine discontinuation — fluoxetine's long half-life (1–4 days with norfluoxetine) makes it the standard 'bridge' for the last 2 weeks of a venlafaxine taper. Self-tapers the patient off the serotonergic component smoothly.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      drugClass: "SSRI",
      relationship:
        "Alternative SSRI — lowest CYP interaction profile, minimal BP effect. Useful comparator when selecting between an SSRI and an SNRI for uncomplicated depression/anxiety.",
    },
    {
      name: "Paroxetine",
      slug: "paroxetine",
      drugClass: "SSRI",
      relationship:
        "Comparator with the worst SSRI discontinuation (still milder than venlafaxine) and strong CYP2D6 inhibition — paroxetine would significantly raise venlafaxine levels if combined. Both drugs require slow tapers; neither is appropriate in pregnancy.",
    },
    {
      name: "Bupropion",
      drugClass: "NDRI",
      relationship:
        "Augmentation partner. Norepinephrine-dopamine reuptake inhibitor. Adding 150 mg XL can augment partial venlafaxine response and may reverse venlafaxine-induced sexual dysfunction. Avoid in seizure disorder and eating disorders. Note: bupropion is a strong CYP2D6 inhibitor — raises venlafaxine levels.",
    },
    {
      name: "Mirtazapine",
      drugClass: "NaSSA",
      relationship:
        "Alternative for depression with severe insomnia/weight loss — sedating and appetite-stimulating (opposite of venlafaxine). Also useful as a low-dose (15–30 mg) night-time adjunct to venlafaxine to improve sleep and reduce nausea.",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Generalised Anxiety Disorder", relationship: "primary" },
    { name: "Social Anxiety Disorder", relationship: "primary" },
    { name: "Panic Disorder", relationship: "primary" },
    { name: "Diabetic Peripheral Neuropathy (neuropathic pain)", relationship: "off-label" },
    { name: "Fibromyalgia", relationship: "off-label" },
    { name: "Vasomotor symptoms (hot flushes — menopause / breast-cancer survivors)", relationship: "off-label" },
    { name: "Cataplexy in narcolepsy", relationship: "off-label" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Venlafaxine", type: "drug", href: "/drugs/venlafaxine", note: "The drug you're reading about" },
    { label: "SNRI", type: "class", href: "#mechanism", note: "Serotonin-Norepinephrine Reuptake Inhibitor" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "Affected at all doses" },
    { label: "Norepinephrine (NE)", type: "neurotransmitter", href: "#mechanism", note: "Affected above ~150 mg/day" },
    { label: "Dopamine (DA)", type: "neurotransmitter", href: "#mechanism", note: "Weak effect only at >300 mg/day" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Primary target — high affinity" },
    { label: "NET (norepinephrine transporter)", type: "neurotransmitter", href: "#mechanism", note: "Secondary target — lower affinity, dose-dependent" },
    { label: "Dose-dependent mechanism", type: "class", href: "#mechanism", note: "Signature pharmacology — SERT → SERT+NET → SERT+NET+DAT" },
    { label: "Hypertension", type: "side-effect", href: "#side-effects", note: "Signature dose-dependent risk — monitor BP" },
    { label: "Discontinuation syndrome", type: "side-effect", href: "#side-effects", note: "Worst of any antidepressant — never miss a dose" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood + attention regulation (5-HT + NE)" },
    { label: "Depression", type: "condition", href: "#clinical-uses", note: "Primary indication" },
    { label: "Generalised Anxiety Disorder", type: "condition", href: "#clinical-uses", note: "FDA-approved" },
    { label: "Neuropathic Pain", type: "condition", href: "#clinical-uses", note: "Off-label — NET blockade aids descending inhibition" },
    { label: "Desvenlafaxine (Pristiq)", type: "drug", href: "#related-drugs", note: "Active metabolite ODV marketed separately" },
    { label: "Patient Guide — Starting an SNRI", type: "patient-guide", href: "#patient-education", note: "Never miss a dose · check BP · taper slowly" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A medicine that helps your brain keep more of two mood-regulating chemicals (serotonin and norepinephrine) available for longer — used when an SSRI alone hasn't worked.",
    summary:
      "Venlafaxine belongs to a class called SNRIs. Unlike SSRIs (which only affect serotonin), venlafaxine affects two brain chemicals — serotonin and norepinephrine. At low doses it acts mostly like an SSRI; at higher doses the norepinephrine effect kicks in, helping with energy, attention, and pain. This is why it can work when an SSRI hasn't. Two things make venlafaxine different from most antidepressants: it can raise your blood pressure (especially at higher doses), and it has the most severe withdrawal of any antidepressant — so you must never miss a dose and never stop it suddenly.",
    mechanism:
      "Your brain uses serotonin and norepinephrine to regulate mood, anxiety, sleep, energy, and attention. Normally, after these chemicals are released between nerve cells, they get quickly taken back up (recycled). Venlafaxine blocks this recycling, so more of both chemicals stays available between the nerve cells for longer. At lower doses (75–150 mg) it mainly affects serotonin; at higher doses (150–225 mg) it also affects norepinephrine, which is why dose increases can add new benefits (and new side effects). Over 4–6 weeks, this helps your brain's mood-regulation system work better — but it doesn't happen immediately.",
    sideEffects:
      "Most people get some side effects in the first 1–2 weeks — usually nausea, sweating, headache, trouble sleeping, or feeling a bit wired. These usually settle as your body adapts. Sexual side effects (lower interest or difficulty reaching orgasm) are common and can persist — talk to your doctor if this bothers you. The two signature things to know: (1) venlafaxine can raise your blood pressure, especially at higher doses — your doctor will check it regularly; (2) venlafaxine has the worst withdrawal of any antidepressant, so NEVER miss a dose and NEVER stop suddenly.",
    monitoring:
      "Your doctor will check your blood pressure at baseline, 2 weeks, 4 weeks, and at every dose change — this is the signature monitoring for venlafaxine. You'll also have check-ins about your mood, especially in the first month (looking for any new or worsening agitation, irritability, or suicidal thoughts — particularly if you're under 25). You may be asked to fill in a short questionnaire (PHQ-9) so your progress can be tracked. If you're over 65, your doctor may check your blood sodium in the first 2 weeks. You can also check your BP at home twice weekly — keep a log to share with your clinician.",
    contraindications:
      "Don't take venlafaxine if you've taken a MAOI antidepressant in the last 14 days (dangerous combination). Don't take it if your blood pressure is uncontrolled — your BP must be controlled first. Tell your doctor about all other medicines you take — especially tramadol (pain), triptans (migraine), certain antibiotics like linezolid, cough syrups with dextromethorphan, herbal products like St John's Wort, decongestants (pseudoephedrine), and NSAIDs (ibuprofen, aspirin) — because venlafaxine interacts with all of these.",
    interactions:
      "The most important thing to know: NEVER stop venlafaxine suddenly or miss a dose — withdrawal can begin within hours and is severe ('brain zaps', dizziness, nausea, irritability). Always refill your prescription at least a week before you run out. The most dangerous combinations are with other medicines that affect serotonin (your doctor or pharmacist will check for these automatically) and with decongestants (which can push your BP up too high). Avoid alcohol or keep it to a minimum — it can worsen sleep, mood, and tolerability.",
  },

  /* ---- India-first extensions ---- */

  /* Indian clinical practice */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Veniz", manufacturer: "Sun Pharma", strengths: "37.5mg, 75mg, 150mg XR", note: "Among the most commonly prescribed venlafaxine XR brands in India" },
      { name: "Venlift", manufacturer: "Cipla", strengths: "37.5mg, 75mg, 150mg XR" },
      { name: "Effexor XR", manufacturer: "Pfizer", strengths: "37.5mg, 75mg, 150mg XR", note: "Innovator brand; higher cost" },
      { name: "Ventab", manufacturer: "Intas", strengths: "37.5mg, 75mg, 150mg XR" },
      { name: "Venla", manufacturer: "Sun Pharma", strengths: "25mg, 50mg, 100mg IR" },
    ],
    typicalDoses:
      "Depression: start 37.5mg XR OD × 7 days, then 75mg OD, titrate by 37.5–75mg every 1–2 weeks to 150–225mg OD (max 375mg). GAD/Social Anxiety/Panic: start 37.5mg XR OD, titrate to 75–225mg. In Indian private practice, doses above 225mg are uncommon due to BP concerns and cost; if depression is treatment-resistant, psychiatrists may push to 300–375mg with strict BP monitoring. The XR formulation is overwhelmingly preferred over IR for tolerability and adherence.",
    prescribingScenarios: [
      "Second-line after SSRI failure in depression — especially when anergic/lethargic features predominate (noradrenergic benefit).",
      "First-line SNRI choice in depression with comorbid generalized anxiety (broadest anxiety approval among SNRIs).",
      "Preferred antidepressant in breast-cancer survivors on tamoxifen with vasomotor symptoms — weak CYP2D6 inhibition (unlike paroxetine) does not reduce tamoxifen activation.",
      "Used off-label for diabetic neuropathy and fibromyalgia when duloxetine is unavailable or not tolerated.",
      "Sometimes chosen in treatment-resistant depression to push to high-dose (>300mg) for the weak DAT effect.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
      note: "NOT routinely available in government hospital formularies or District Mental Health Programme (DMHP) centres — SSRIs (sertraline, fluoxetine) are preferred in government settings due to cost and BP monitoring requirements. Widely available in urban private pharmacies. Rural availability is limited; patients may need to travel to district headquarters.",
    },
    costCategory: "moderate",
    costNote: "Venlafaxine XR is moderately expensive in India compared to SSRIs. Branded Veniz/Ventab cost approximately ₹8–15 per 75mg XR capsule; Effexor XR (innovator) costs ₹25–40 per capsule. Generic venlafaxine is available but less commonly stocked than generic SSRIs. NOT commonly available in Jan Aushadhi Kendras. Cost is a barrier for long-term use in low-income patients.",
    monitoring:
      "Blood pressure monitoring is the signature requirement and is often the limiting factor in government hospital use (where BP cuffs and follow-up capacity are constrained). Schedule: baseline BP, then at 2 weeks, 4 weeks, and every dose change. Above 150mg/day, BP should be checked at every visit. PHQ-9 for mood response. In elderly: serum sodium in first 2 weeks (SIADH risk). ECG not routine unless cardiac disease. In private practice, home BP monitoring with a log is encouraged. Patients must be counselled to never miss a dose (withdrawal within hours).",
    patientCounselling: [
      "Take the XR capsule once daily, ideally in the morning with food, at the same time every day. Do NOT crush, chew, or open the capsule.",
      "NEVER miss a dose — venlafaxine has the worst withdrawal of any antidepressant and symptoms can start within hours of a missed dose ('brain zaps', dizziness, nausea, irritability).",
      "NEVER stop suddenly — your doctor will taper the dose slowly over weeks to months. Even then, you may feel withdrawal symptoms.",
      "Your blood pressure will be checked regularly — venlafaxine can raise BP, especially at higher doses. If you have a BP machine at home, check and log it twice weekly.",
      "It may take 4–6 weeks to feel the full benefit on mood. At higher doses (above 150mg) you may notice more energy and alertness sooner.",
      "Avoid alcohol — it can worsen mood, sleep, and BP.",
      "Common side effects in the first 1–2 weeks: nausea, sweating (especially night sweats), headache, trouble sleeping, dry mouth, decreased appetite. These usually settle.",
      "Sexual side effects (reduced interest, difficulty reaching orgasm) are common — talk to your doctor if this bothers you.",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month, contact your doctor immediately or call Tele-MANAS at 14416.",
      "If you run out of medicine, get your refill BEFORE you take your last capsule — even one missed dose can cause withdrawal. Keep a buffer stock of a few days.",
    ],
  },

  /* NMC CBME competency mapping */
  cbmeMapping: {
    subject: "Pharmacology",
    mbbsYear: "Second Professional",
    topic: "Drugs acting on Central Nervous System — Antidepressants (SNRIs)",
    competencyCodes: ["PH7.3", "PH7.4", "PY3.2"],
    competencyDescriptions: [
      "PH7.3: Describe the mechanism of action, pharmacological actions, adverse effects, contraindications, and therapeutic uses of antidepressant drugs with emphasis on SNRIs and dose-dependent pharmacology.",
      "PH7.4: Explain the rationale for drug selection, dose individualisation, and monitoring of SNRI therapy in different clinical scenarios including SSRI failure and comorbid pain.",
      "PY3.2 (Psychiatry, Final Professional): Describe the pharmacological management of treatment-resistant depression, anxiety disorders, and the role of SNRIs with attention to discontinuation syndrome and BP monitoring.",
    ],
    integrationSubjects: ["Psychiatry", "General Medicine", "Community Medicine"],
  },

  /* Exam Lens — structured by Indian examination */
  examLens: {
    mbbs: {
      viva: [
        "What is the mechanism of action of venlafaxine? (Dose-dependent: SERT blockade at 75mg, +NET at 150–225mg, +weak DAT >300mg. This is THE signature pharmacology.)",
        "Why does venlafaxine cause hypertension? (NET blockade at peripheral sympathetic synapses raises NE → vasoconstriction → dose-dependent BP elevation in 10–15% at >300mg.)",
        "What is the active metabolite of venlafaxine and how is it related to desvenlafaxine? (O-desmethylvenlafaxine / ODV — pharmacologically equivalent, created by CYP2D6. Desvenlafaxine (Pristiq) is ODV marketed directly.)",
        "Why is venlafaxine's discontinuation syndrome the worst of any antidepressant? (Short parent half-life ~5h, dual SERT+NET withdrawal, symptoms within hours of missed dose. Taper must be slow.)",
        "Name 4 FDA-approved indications for venlafaxine. (MDD, GAD, Social Anxiety Disorder, Panic Disorder — broader anxiety approval than most SSRIs.)",
        "How do you monitor a patient on venlafaxine? (BP at baseline, 2w, 4w, every dose change. Above 150mg, BP every visit. PHQ-9 for mood. Sodium in elderly.)",
      ],
      practical: [
        "Counsel a patient starting venlafaxine XR for depression with SSRI failure — address BP monitoring, never missing a dose, and discontinuation.",
        "Write a prescription for venlafaxine XR for a 40-year-old with GAD (start 37.5mg OD × 7d, then 75mg OD).",
        "Explain the dose-dependent pharmacology of venlafaxine using a graph/diagram (SERT at 75mg, +NET at 150–225mg, +DAT >300mg).",
        "Describe the tapering schedule for a patient on venlafaxine 225mg XR who wants to stop (reduce by 37.5mg every 1–2 weeks; consider fluoxetine bridge).",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics, adverse effects, and therapeutic uses of SNRIs with special reference to venlafaxine. Discuss the dose-dependent pharmacology, BP monitoring, and discontinuation syndrome.",
        "A 45-year-old man with treatment-resistant depression (failed 2 SSRI trials) is started on venlafaxine. Discuss the dose titration, BP monitoring, expected response timeline, and how you would manage discontinuation when remission is achieved.",
      ],
    },
    neetPg: {
      highYield: [
        "Venlafaxine = dose-dependent SNRI: 75mg = SERT only (SSRI-like), 150–225mg = +NET (true SNRI), >300mg = +weak DAT. THE most tested SNRI concept.",
        "Venlafaxine = worst discontinuation syndrome of any antidepressant (short half-life 5h, dual withdrawal). Taper slowly; can bridge with fluoxetine.",
        "Dose-dependent hypertension: 10–15% of patients at >300mg. BP must be monitored at every dose change. Uncontrolled HTN = absolute contraindication.",
        "Active metabolite = O-desmethylvenlafaxine (ODV), created by CYP2D6. ODV is marketed separately as desvenlafaxine (Pristiq) — same molecule, cleaner PK.",
        "4 FDA indications: MDD, GAD, Social Anxiety, Panic. Broader anxiety approval than most SSRIs.",
        "Preferred antidepressant in breast-cancer survivors on tamoxifen with hot flushes — weak CYP2D6 inhibition (unlike paroxetine which reduces tamoxifen activation).",
        "Half-life: venlafaxine ~5h, ODV ~11h. Combined effective ~8–10h — missed doses cause withdrawal within hours.",
        "Off-label uses: diabetic neuropathy, fibromyalgia, hot flushes (menopause + breast cancer), cataplexy.",
        "CYP2D6 poor metabolisers (5–10% of Indians): higher parent, lower ODV — total exposure preserved but worse tolerability (higher peak parent).",
        "Venlafaxine vs duloxetine: venlafaxine = dose-dependent, worst withdrawal, BP issue; duloxetine = balanced from dose 1, hepatotoxicity, pain FDA-approved.",
      ],
      pyqConcepts: [
        "NEET PG 2022: Which antidepressant has the worst discontinuation syndrome? (Answer: Venlafaxine — short half-life + dual withdrawal.)",
        "NEET PG 2021: A patient on venlafaxine 225mg develops sustained BP 150/96. What is the mechanism? (Answer: NET blockade at peripheral sympathetic synapses → ↑NE → vasoconstriction. Manage: reduce dose, add/adjust antihypertensive, consider switch.)",
        "NEET PG 2020: The dose-dependent pharmacology of venlafaxine is best described as: (Answer: SERT at 75mg, SERT+NET at 150–225mg, SERT+NET+DAT >300mg.)",
        "NEET PG 2019: Active metabolite of venlafaxine? (Answer: O-desmethylvenlafaxine / ODV — same as desvenlafaxine (Pristiq).)",
        "INICET 2021: A breast cancer survivor on tamoxifen develops hot flushes. Which antidepressant is preferred? (Answer: Venlafaxine — weak CYP2D6 inhibition, doesn't reduce tamoxifen activation. Avoid paroxetine/fluoxetine.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 40-year-old with MDD failed sertraline 200mg for 12 weeks (PHQ-9 18→12). How do you proceed? (Answer: Switch to venlafaxine XR — start 37.5mg × 7d then 75mg, titrate to 150–225mg. Cross-taper: taper sertraline over 1–2 weeks while initiating venlafaxine. Monitor BP.)",
        "A patient on venlafaxine 225mg XR for 6 months is in remission and wants to stop. How do you counsel? (Answer: Taper slowly over 4–8 weeks minimum — reduce by 37.5mg every 1–2 weeks. Even with slow taper, withdrawal symptoms ('brain zaps', dizziness, irritability) are common. Consider fluoxetine 20mg bridge for last 2 weeks. Counsel: never miss doses during taper.)",
        "A 55-year-old on venlafaxine 300mg for TRD develops BP 152/98 (baseline 124/80). What is the management? (Answer: Dose-dependent hypertension. Options: (1) reduce venlafaxine to 225mg and reassess, (2) add antihypertensive (amlodipine), (3) switch to duloxetine (less BP effect). Do not stop abruptly.)",
        "A patient on venlafaxine 150mg XR missed two doses and presents with dizziness, nausea, 'brain zaps', and irritability. Diagnosis? (Answer: Venlafaxine discontinuation syndrome — onset within hours due to short half-life. Management: take the missed dose immediately, resume regular schedule, counsel on never missing a dose.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Venlafaxine mechanism: dose-dependent SERT + NET (and weak DAT at high dose).",
        "Worst discontinuation syndrome of any antidepressant — short half-life (5h), dual withdrawal.",
        "Dose-dependent hypertension — monitor BP at every dose change.",
        "Active metabolite: O-desmethylvenlafaxine (ODV) = desvenlafaxine (Pristiq).",
        "4 FDA indications: MDD, GAD, Social Anxiety, Panic Disorder.",
        "Metabolism: CYP2D6 (O-demethylation to ODV).",
        "Preferred in breast-cancer survivors on tamoxifen (weak CYP2D6 inhibition).",
        "Absolute contraindication: MAOI within 14 days, uncontrolled hypertension.",
        "Off-label: neuropathic pain, hot flushes, fibromyalgia.",
        "Venlafaxine vs duloxetine: dose-dependent vs balanced; BP issue vs hepatotoxicity.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The dose-dependent SERT:NET:DAT ratio is unique to venlafaxine among SNRIs — duloxetine has balanced SERT+NET from dose 1, milnacipran has a fixed ratio. This means venlafaxine is the only SNRI where dose titration changes the pharmacology, not just the magnitude.",
        "Treatment-resistant depression algorithm: after 2 SSRI failures, venlafaxine is a rational next step. The noradrenergic component addresses anergic/lethargic depression that SSRIs may miss. Pushing to 300–375mg adds the weak DAT effect — modest but sometimes decisive in TRD.",
        "Discontinuation management: venlafaxine's short half-life makes tapering brutal. Practical strategy: (1) convert to XR if on IR, (2) reduce by 37.5mg every 1–2 weeks, (3) at 37.5mg, substitute fluoxetine 20mg for 2 weeks then stop fluoxetine (self-tapers). Some patients need months to taper.",
        "BP monitoring: sustained elevation >10mmHg from baseline at any dose warrants attention. Above 150mg/day, check BP every visit. Above 300mg, consider home BP log. If BP uncontrolled despite dose reduction, switch to duloxetine or mirtazapine.",
        "CYP2D6 poor metabolisers (5–10% of Indians) have higher parent venlafaxine and lower ODV. Total pharmacodynamic exposure is roughly preserved (parent and metabolite are equipotent), but tolerability may be worse due to higher peak parent concentrations — particularly nausea and CNS effects.",
        "In breast-cancer survivors on tamoxifen, paroxetine and fluoxetine (strong CYP2D6 inhibitors) reduce tamoxifen activation to endoxifen and increase recurrence risk. Venlafaxine is the preferred antidepressant in this setting because of weak CYP2D6 inhibition — and it also treats tamoxifen-induced hot flushes at 37.5–75mg/day.",
        "Desvenlafaxine (Pristiq) is the active metabolite ODV marketed directly. Advantages: no CYP2D6 dependence, lower inter-patient variability, slightly cleaner PK. Disadvantages: cost, limited dose flexibility. Clinically, venlafaxine and desvenlafaxine are nearly interchangeable.",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "Role of SNRIs in depression algorithm",
      internationalSource: "NICE CG91 / APA Practice Guideline",
      internationalRecommendation: "SSRIs are first-line. SNRIs (venlafaxine, duloxetine) are second-line after SSRI failure or when comorbid pain/anergic features warrant a noradrenergic component. Venlafaxine is the most studied SNRI for TRD.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS guidelines also position SSRIs as first-line and SNRIs as second-line. Venlafaxine is the most commonly prescribed SNRI in Indian private practice, particularly for SSRI-nonresponsive depression and comorbid anxiety. In government settings, cost limits SNRI use.",
    },
    {
      topic: "Blood pressure monitoring",
      internationalSource: "FDA Effexor XR label",
      internationalRecommendation: "Regular BP monitoring is recommended, particularly at doses above 150mg/day. Sustained BP elevation (≥10mmHg from baseline) occurs in 10–15% at high doses. Pre-existing hypertension must be controlled before initiation.",
      indianSource: null,
      indianRecommendation: "No dedicated IPS guideline on venlafaxine BP monitoring. In Indian practice, BP monitoring is the signature safety requirement but is inconsistently applied — particularly in government settings where follow-up capacity is limited. This is a key reason venlafaxine is NOT in DMHP formularies. Current section reflects FDA label and accepted clinical practice.",
    },
    {
      topic: "Discontinuation syndrome management",
      internationalSource: "APA / Maudsley Prescribing Guidelines",
      internationalRecommendation: "Venlafaxine has the most severe discontinuation syndrome of any antidepressant. Taper over 4+ weeks minimum (often months for long-term users). Fluoxetine bridging for the last 2 weeks of taper is a recognised strategy. Patients must be warned never to miss a dose.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS acknowledges the severe discontinuation risk. In Indian practice, patient counselling on never missing a dose is critical — particularly given the risk of stock-outs in rural pharmacies. Fluoxetine bridging is used by psychiatrists but is less familiar to non-specialists.",
    },
    {
      topic: "Use in pregnancy",
      internationalSource: "FDA / APA",
      internationalRecommendation: "Venlafaxine is not the SSRI/SNRI of choice in pregnancy — sertraline is preferred. Venlafaxine is FDA Category C. Third-trimester use associated with neonatal adaptation syndrome. Use only if benefit justifies risk, particularly in the 3rd trimester.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — sertraline remains first-line in pregnancy. Venlafaxine is reserved for SSRI-resistant depression in pregnancy where the risk of untreated depression outweighs medication risk. Involve obstetrician.",
    },
    {
      topic: "Use in neuropathic pain",
      internationalSource: "FDA / NICE Neuropathic Pain Guideline",
      internationalRecommendation: "Duloxetine is FDA-approved for diabetic peripheral neuropathic pain. Venlafaxine is used off-label but has evidence. NICE neuropathic pain guideline places duloxetine, amitriptyline, pregabalin, gabapentin as first-line; venlafaxine is not in the algorithm.",
      indianSource: "Indian Psychiatric Society (IPS) / IAS Pain Guidelines",
      indianRecommendation: "In Indian practice, venlafaxine is used off-label for neuropathic pain when comorbid depression/anxiety is present — duloxetine is preferred when pain is the primary indication. Cost considerations favour duloxetine where available.",
    },
  ],

  /* Indian reference sources */
  indianReferences: [
    {
      source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition",
      type: "textbook",
      section: "Chapter 33 — Antidepressant Drugs (SNRIs section)",
    },
    {
      source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression",
      type: "guideline",
      section: "Section on pharmacotherapy — SNRIs and treatment-resistant depression",
    },
    {
      source: "NMC CBME Curriculum — Pharmacology (Second Professional)",
      type: "curriculum",
      section: "Topic: Drugs acting on CNS — Antidepressants (SNRIs)",
    },
    {
      source: "NMC CBME Curriculum — Psychiatry (Final Professional)",
      type: "curriculum",
      section: "Topic: Psychopharmacology — Treatment-resistant depression and anxiety disorders",
    },
    {
      source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)",
      type: "regulatory",
      section: "Essential medicines for mental health — venlafaxine NOT included (SSRIs preferred for cost and safety)",
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
      section: "Venlafaxine — Schedule H prescription status",
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
      { source: "NICE CG91", recommendation: "SSRIs first-line for moderate-severe depression. SNRIs (venlafaxine) are second-line after SSRI failure or when anergic features warrant noradrenergic action." },
      { source: "APA Practice Guideline", recommendation: "Venlafaxine is a rational switch option after 1–2 SSRI failures. Useful in treatment-resistant depression." },
      { source: "FDA", recommendation: "Approved for MDD, GAD, Social Anxiety, Panic Disorder. BP monitoring required above 150mg/day." },
      { source: "Maudsley Prescribing Guidelines", recommendation: "Venlafaxine has the worst discontinuation syndrome of any antidepressant. Taper slowly; consider fluoxetine bridging." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS guidelines position SSRIs as first-line and SNRIs as second-line. Venlafaxine is the most commonly prescribed SNRI in Indian private practice for SSRI-resistant depression." },
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS acknowledges the dose-dependent BP risk and severe discontinuation syndrome — counselling on never missing a dose is emphasised." },
      { source: null, recommendation: "No dedicated IPS guideline on venlafaxine BP monitoring frequency. Current section reflects FDA label and accepted clinical practice." },
    ],
    indianClinicalPractice:
      "In Indian private practice, venlafaxine is the most prescribed SNRI, used primarily as second-line after SSRI failure and for depression with comorbid anxiety. It is NOT in government hospital or DMHP formularies due to cost (3–5× more expensive than generic SSRIs) and the BP monitoring requirement that government follow-up capacity cannot reliably support. Starting dose is 37.5mg XR OD (lower than Western 75mg start) to minimise early nausea and activation, titrated to 75–150mg over 1–2 weeks. Doses above 225mg are uncommon in India due to BP concerns and cost. The XR formulation is overwhelmingly preferred. Rural availability is limited — patients in remote areas may face stock-outs, which is dangerous given the withdrawal risk. Counselling on never missing a dose and carrying a buffer stock is critical.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "NOT routinely stocked in government hospital psychiatry OPDs or DMHP centres. SSRIs (sertraline, fluoxetine) are preferred due to cost and BP monitoring capacity. If a patient is referred from private care already on venlafaxine, efforts are made to continue the same drug if supply can be arranged; otherwise, cross-taper to sertraline is undertaken.",
    privateHospitals:
      "Preferred SNRI in private psychiatry practice for SSRI-resistant depression and comorbid anxiety. Starting dose 37.5mg XR OD, titrated to 75–225mg. BP monitored at every visit. PHQ-9 tracking standard. Patients counselled on withdrawal risk and never missing a dose.",
    medicalColleges:
      "Teaching drug for SNRI pharmacology and the concept of dose-dependent receptor binding. Featured in pharmacology practicals (prescription writing, dose-titration planning). Examined in second professional MBBS (pharmacology) and final professional (psychiatry). Commonly featured in NEET PG and INICET questions on dose-dependent pharmacology and discontinuation syndrome.",
    primaryCare:
      "Infrequently initiated in primary care — most GPs prefer SSRIs as first-line. Venlafaxine is usually started by psychiatrists after SSRI failure. GPs may continue prescriptions initiated by specialists but must be aware of BP monitoring and withdrawal risk.",
    psychiatryOPD:
      "Second-line antidepressant in psychiatry OPD. Used after 1–2 SSRI failures, in TRD escalation (push to 300–375mg with BP monitoring), for comorbid depression + anxiety, and for hot flushes in breast-cancer survivors. Often combined with CBT. Tapering is a major OPD activity — patients need slow tapers and fluoxetine bridging.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ) — SNRIs can trigger manic switch.",
      "Assess suicidal ideation — involve family for monitoring; provide Tele-MANAS (14416) number.",
      "Check for MAOI use in last 14 days — absolute contraindication.",
      "Measure baseline blood pressure — if uncontrolled HTN, control first or choose alternative. Document baseline BP for comparison.",
      "Review concurrent medications — tramadol, triptans, NSAIDs, warfarin, St John's Wort, other serotonergic drugs.",
      "Check renal function (CrCl) — dose reduction required in renal impairment.",
      "Check hepatic function — dose reduction in mild-moderate hepatic impairment; avoid in severe.",
      "Counsel about 4–6 week onset AND the critical 'never miss a dose' rule — set expectation that withdrawal can begin within hours.",
    ],
    duringTreatment: [
      "Week 1: assess tolerability (nausea, sweating, insomnia) and activation. Reassure these settle.",
      "Week 2: check BP (signature monitoring) and early response — sleep, appetite, energy often improve before mood.",
      "Week 4: assess response with PHQ-9. If <30% reduction, increase dose by 37.5–75mg.",
      "Week 6–12: full response assessment. If <50% reduction at 12 weeks, consider further titration to 225–300mg, augmentation (mirtazapine, bupropion), or switch.",
      "BP at every dose change AND every visit above 150mg/day. If sustained BP elevation >10mmHg, reduce dose or add antihypertensive.",
      "Watch for hyponatraemia in elderly (SIADH risk in first 2 weeks).",
      "Watch for serotonin syndrome if serotonergic drugs are added (tramadol, triptans, linezolid).",
    ],
    followUp: [
      "First follow-up at 2 weeks (tolerability, BP, suicidality).",
      "Second follow-up at 4 weeks (early response, BP).",
      "Third follow-up at 6 weeks (dose escalation decision, BP).",
      "Fourth follow-up at 12 weeks (full response assessment, BP).",
      "If remission achieved (PHQ-9 <5): continue for 6–12 months for first episode, longer for recurrent.",
      "Before discontinuation: taper over 4–8+ weeks (reduce by 37.5mg every 1–2 weeks). Consider fluoxetine 20mg bridge for last 2 weeks.",
      "Counsel patient to never miss a dose and to keep a buffer stock of 3–5 days in case of pharmacy stock-outs.",
    ],
    whenToRefer: [
      "Refer to psychiatrist if no response to venlafaxine 225mg after 12 weeks (consider TRD algorithm).",
      "Refer urgently if suicidal ideation emerges or worsens.",
      "Refer if bipolar disorder is suspected (manic switch risk).",
      "Refer if serotonin syndrome develops (emergency — call 112).",
      "Refer to physician if sustained BP elevation despite dose reduction or antihypertensives.",
      "Refer if severe hyponatraemia (Na <120 mmol/L) or seizures.",
      "Refer to obstetrician if patient becomes pregnant (do NOT stop venlafaxine abruptly — cross-taper to sertraline with obstetric input).",
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
    { exam: "NEET PG", year: 2022, concept: "Antidepressant with worst discontinuation syndrome", topic: "SNRI adverse effects" },
    { exam: "NEET PG", year: 2021, concept: "Venlafaxine-induced hypertension mechanism", topic: "SNRI adverse effects" },
    { exam: "NEET PG", year: 2020, concept: "Dose-dependent SERT/NET/DAT pharmacology", topic: "SNRI pharmacology" },
    { exam: "NEET PG", year: 2019, concept: "Active metabolite O-desmethylvenlafaxine / desvenlafaxine", topic: "SNRI pharmacokinetics" },
    { exam: "INICET", year: 2021, concept: "Antidepressant in breast cancer survivor on tamoxifen", topic: "Drug interactions" },
    { exam: "INICET", year: 2023, concept: "Venlafaxine discontinuation syndrome management", topic: "Antidepressant withdrawal" },
    { exam: "FMGE", year: 2022, concept: "Venlafaxine dose-dependent mechanism", topic: "Antidepressant pharmacology" },
    { exam: "FMGE", year: 2021, concept: "Venlafaxine FDA indications (MDD, GAD, Social Anxiety, Panic)", topic: "Antidepressant indications" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Government hospital setup",
      recommendation: "Venlafaxine is NOT preferred — SSRIs (sertraline, fluoxetine) are first-line due to cost, BP monitoring capacity, and DMHP availability. Venlafaxine use is exceptional.",
      alternative: "If an SNRI is essential, consider generic duloxetine if available — but cost still limits use vs SSRIs.",
    },
    {
      scenario: "Private psychiatry practice (SSRI-resistant depression)",
      recommendation: "Venlafaxine XR is the most common SNRI choice. Start 37.5mg, titrate to 150–225mg. The noradrenergic component addresses anergic depression that SSRIs may miss. Push to 300–375mg in TRD with BP monitoring.",
      alternative: "Duloxetine 60mg if comorbid neuropathic pain or if BP is a concern. Mirtazapine 15–45mg if sleep/appetite are prominent issues.",
    },
    {
      scenario: "Depression with comorbid anxiety (GAD/Social/Panic)",
      recommendation: "Venlafaxine XR is preferred — broadest anxiety approval among SNRIs (GAD, Social Anxiety, Panic). Onset 4–6 weeks for depression, 8–12 weeks for full anxiolytic effect.",
      alternative: "Sertraline or escitalopram (SSRIs) for first-line. Duloxetine for GAD if comorbid pain.",
    },
    {
      scenario: "Breast cancer survivor on tamoxifen with hot flushes",
      recommendation: "Venlafaxine 37.5–75mg/day is the antidepressant of choice — weak CYP2D6 inhibition does not reduce tamoxifen activation to endoxifen. Also treats hot flushes effectively.",
      alternative: "Avoid paroxetine and fluoxetine (strong CYP2D6 inhibitors). Gabapentin or clonidine if antidepressant not desired.",
    },
    {
      scenario: "Depression with comorbid neuropathic pain",
      recommendation: "Duloxetine is preferred (FDA-approved for diabetic neuropathy). Venlafaxine 150–225mg is an alternative off-label option, particularly if duloxetine is not tolerated or if anxiety comorbidity favours venlafaxine's broader approval.",
      alternative: "Duloxetine 60mg. Pregabalin or gabapentin if SNRI not suitable. Amitriptyline at night if cost-sensitive.",
    },
    {
      scenario: "Cost-sensitive setting",
      recommendation: "Venlafaxine is moderately expensive (₹8–15/capsule for Veniz/Ventab) and NOT in Jan Aushadhi. For low-income patients, generic SSRIs (sertraline ₹2–5) or amitriptyline are far more affordable.",
      alternative: "Generic sertraline from Jan Aushadhi is the most cost-effective antidepressant in India. If SNRI essential, negotiate with manufacturer patient-access programmes.",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: false,
    note: "NOT commonly available at Jan Aushadhi Kendras. Generic venlafaxine is less commonly stocked than generic SSRIs due to lower demand and the BP monitoring requirement that limits government formulary inclusion. Patients relying on Jan Aushadhi should be prescribed sertraline or fluoxetine instead.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents (SNRIs)" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants (SNRIs)" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression and discontinuation syndromes" },
      { source: "FDA Prescribing Information — EFFEXOR XR (venlafaxine hydrochloride)", section: "Highlights of Prescribing Information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/020699s080lbl.pdf" },
      { source: "NICE Clinical Guideline CG91 — Depression in adults", section: "Pharmacological treatment — treatment-resistant depression" },
      { source: "APA Practice Guideline for MDD, 3rd edition" },
      { source: "Cipriani A et al. Lancet 2018 — Comparative efficacy of 21 antidepressants", section: "Network meta-analysis (venlafaxine among more effective agents)" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs (SNRIs)" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression", type: "guideline", section: "Section on pharmacotherapy — SNRIs and treatment-resistant depression" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants (SNRIs)" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional)", type: "curriculum", section: "Topic: Psychopharmacology — Treatment-resistant depression" },
      { source: "National Mental Health Programme (NMHP) / District Mental Health Programme (DMHP)", type: "regulatory", section: "Essential medicines — venlafaxine NOT included" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Mental health support resource", url: "tel:14416" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Venlafaxine — Schedule H prescription status" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose Venlafaxine for depression",
    startNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Patient with depression — has SSRI been tried?",
        branches: [
          { label: "No — first episode", next: "first-line" },
          { label: "Yes — 1 SSRI failed", next: "ssri-failed" },
          { label: "Yes — 2+ SSRIs failed (TRD)", next: "trd" },
        ],
      },
      {
        id: "first-line",
        question: "First-episode depression — is there a reason to choose SNRI over SSRI?",
        recommendation: "Default to SSRI (sertraline/escitalopram) per IPS and international guidelines. Consider venlafaxine only if anergic features predominate or comorbid GAD/Social Anxiety/Panic is severe.",
        reasoning: "SSRIs are first-line for first-episode depression due to lower cost, better safety profile, and wider availability. Venlafaxine adds BP risk and withdrawal risk without clear first-line advantage.",
        branches: [
          { label: "Anergic depression / severe comorbid anxiety", next: "start-venlafaxine" },
          { label: "Standard presentation", next: "avoid-first-line" },
        ],
      },
      {
        id: "ssri-failed",
        question: "One adequate SSRI trial failed (12 weeks, max dose)",
        recommendation: "Venlafaxine XR is a rational switch. Start 37.5mg × 7d, titrate to 75–150mg. Cross-taper SSRI over 1–2 weeks. Monitor BP.",
        reasoning: "After one SSRI failure, switching to an SNRI leverages the noradrenergic mechanism that SSRIs lack. Venlafaxine is the most studied SNRI for this indication.",
        branches: [
          { label: "Comorbid neuropathic pain", next: "consider-duloxetine" },
          { label: "Comorbid severe anxiety", next: "start-venlafaxine" },
        ],
      },
      {
        id: "trd",
        question: "Treatment-resistant depression (2+ SSRI failures)",
        recommendation: "Venlafaxine XR titrated to 225–300mg (max 375mg) with strict BP monitoring. Consider augmentation (mirtazapine, bupropion, lithium, T3). Refer to psychiatry if not already.",
        reasoning: "Pushing venlafaxine to high dose unlocks the weak DAT effect that may help in TRD. BP monitoring is critical at these doses.",
        branches: [
          { label: "BP controlled, can titrate", next: "high-dose-venlafaxine" },
          { label: "BP uncontrolled", next: "consider-duloxetine" },
        ],
      },
      {
        id: "start-venlafaxine",
        question: "Why choose Venlafaxine?",
        recommendation: "Venlafaxine is preferred when: SSRI has failed, anergic depression, comorbid GAD/Social Anxiety/Panic (broadest anxiety approval among SNRIs), or breast-cancer survivor on tamoxifen with hot flushes.",
        reasoning: "Dose-dependent SNRI mechanism, broad anxiety indications, weak CYP2D6 inhibition (safe with tamoxifen). Active metabolite ODV = desvenlafaxine.",
        branches: [
          { label: "When NOT to choose", next: "avoid" },
        ],
      },
      {
        id: "high-dose-venlafaxine",
        question: "High-dose venlafaxine (225–375mg) for TRD",
        recommendation: "Titrate by 75mg every 1–2 weeks to 300–375mg. Check BP every visit. If sustained BP elevation, reduce dose or add amlodipine. Consider augmentation if partial response.",
        reasoning: "High-dose venlafaxine adds weak DAT inhibition — modest but sometimes decisive in TRD. BP monitoring is non-negotiable.",
      },
      {
        id: "consider-duloxetine",
        question: "Duloxetine may be preferable when",
        recommendation: "Comorbid neuropathic pain (FDA-approved), hepatic concerns manageable, BP is an issue (less BP effect than venlafaxine). Duloxetine is balanced SNRI from dose 1 — no dose-dependent titration needed.",
        reasoning: "Duloxetine's balanced SERT+NET and pain indications make it preferred when pain is comorbid or when BP is a concern.",
      },
      {
        id: "avoid-first-line",
        question: "Why not Venlafaxine first-line?",
        recommendation: "For first-episode uncomplicated depression, SSRIs are preferred — lower cost, better safety, no BP monitoring, milder discontinuation. Venlafaxine adds risk without clear benefit.",
        reasoning: "SSRIs are first-line per IPS and international guidelines. Venlafaxine is second-line.",
      },
      {
        id: "avoid",
        question: "When NOT to choose Venlafaxine",
        recommendation: "Avoid: uncontrolled hypertension, MAOI within 14 days, severe hepatic impairment, severe renal impairment (CrCl <30), pregnancy (sertraline preferred), patient unable to adhere to never-miss-a-dose rule. Cost-sensitive or rural setting with unreliable supply.",
        reasoning: "BP risk, hepatotoxicity risk, renal accumulation, severe withdrawal, and supply chain issues make venlafaxine inappropriate in these contexts.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian private OPD initiation for SSRI-resistant depression in an adult",
    lines: [
      "Rx",
      "Tab Venlafaxine XR 37.5 mg",
      "1 cap OD morning after food × 7 days",
      "",
      "Then increase to:",
      "Tab Venlafaxine XR 75 mg",
      "1 cap OD morning after food",
      "",
      "Advice: Take at the same time every day. NEVER miss a dose.",
      "Do NOT stop suddenly. Check BP at 2 weeks, 4 weeks.",
      "Avoid alcohol. Report if feeling worse or new suicidal thoughts.",
    ],
    followUp: [
      "Review after 2 weeks — tolerability, BP, suicidality, side effects",
      "Review after 4 weeks — early response (sleep, appetite, energy), BP",
      "Review after 6 weeks — PHQ-9; if <30% reduction, increase to 150mg",
      "Review after 12 weeks — full response assessment; titrate to 225mg if needed",
      "If remission (PHQ-9 <5): continue 6–12 months, then taper over 4–8+ weeks",
      "Taper: reduce by 37.5mg every 1–2 weeks; consider fluoxetine 20mg bridge for last 2 weeks",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information and individualise for each patient.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Starting at 75mg instead of 37.5mg",
      why: "Venlafaxine's early nausea, activation, and anxiety are dose-dependent at initiation. Starting at 75mg (especially in SSRI-naive or anxious patients) causes tolerability failures.",
      correction: "Start at 37.5mg XR OD for 5–7 days, then increase to 75mg. This is particularly important in Indian practice where patients may be SSRI-naive and sensitive to activation.",
    },
    {
      mistake: "Not monitoring blood pressure",
      why: "Venlafaxine causes dose-dependent hypertension in 10–15% at high doses. The BP effect is the signature safety issue and is often missed in busy Indian OPDs.",
      correction: "Check BP at baseline, 2 weeks, 4 weeks, and every dose change. Above 150mg, check BP every visit. Document baseline for comparison. If >10mmHg sustained elevation, reduce dose or add antihypertensive.",
    },
    {
      mistake: "Abrupt discontinuation or missing doses",
      why: "Venlafaxine has the WORST discontinuation syndrome of any antidepressant — short half-life (5h), dual SERT+NET withdrawal. Symptoms ('brain zaps', dizziness, nausea, irritability) can begin within hours of a missed dose.",
      correction: "Counsel at initiation: 'NEVER miss a dose. Keep a buffer stock of 3–5 days. If you run out, get your refill BEFORE taking your last capsule.' Taper over 4–8+ weeks. Consider fluoxetine 20mg bridge for last 2 weeks.",
    },
    {
      mistake: "Not counselling on withdrawal before initiation",
      why: "Patients who are not warned about withdrawal may stop abruptly when they feel better, leading to severe discontinuation syndrome and unnecessary ER visits.",
      correction: "At the very first visit, explain: 'Venlafaxine works well but it is harder to stop than most antidepressants. You will need to taper slowly over weeks when the time comes. Never stop suddenly.'",
    },
    {
      mistake: "Combining with MAOIs or not waiting the washout",
      why: "MAOI + venlafaxine = potentially fatal serotonin syndrome. The 14-day washout is non-negotiable.",
      correction: "Always ask about MAOI use before starting. Wait at least 14 days after stopping an MAOI before starting venlafaxine. At least 7 days after stopping venlafaxine before starting an MAOI.",
    },
    {
      mistake: "Ignoring bipolar history",
      why: "SNRIs, like SSRIs, can trigger a manic switch in undiagnosed bipolar disorder. The noradrenergic component may slightly increase this risk vs SSRIs.",
      correction: "Screen for bipolar disorder (MDQ) before starting any antidepressant. If bipolar confirmed, use mood stabiliser first; antidepressant only if mood stabiliser alone is insufficient.",
    },
    {
      mistake: "Not dose-titrating to adequate levels",
      why: "Stopping at 75mg and never titrating means the patient may never experience the dual SNRI effect that venlafaxine was chosen for. The noradrenergic benefit only appears above 150mg.",
      correction: "Start 37.5mg, titrate by 37.5–75mg every 1–2 weeks to 150–225mg. For TRD, push to 300–375mg with BP monitoring. The dose IS the pharmacology.",
    },
    {
      mistake: "Not addressing supply continuity in rural/semi-urban patients",
      why: "Venlafaxine is not stocked in all Indian pharmacies (especially rural). Stock-outs combined with the withdrawal risk create dangerous gaps in therapy.",
      correction: "Before prescribing, check local pharmacy availability. Counsel patient to identify 2–3 pharmacies that stock the brand. Maintain a buffer stock of 5–7 days. If relocating, plan the transfer of prescription in advance.",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Uncontrolled hypertension",
      reason: "Venlafaxine causes dose-dependent BP elevation. Uncontrolled HTN is an absolute contraindication — BP must be controlled first.",
      alternative: "Control BP first (amlodipine, ACE inhibitor). Then re-initiate venlafaxine with close monitoring, or choose sertraline (no BP effect) or duloxetine (less BP effect).",
    },
    {
      scenario: "Active MAOI use (within 14 days)",
      reason: "Fatal serotonin syndrome. The 14-day washout is absolute.",
      alternative: "Wait 14 days after stopping MAOI before starting venlafaxine.",
    },
    {
      scenario: "Severe hepatic impairment (Child-Pugh B or C)",
      reason: "Reduced metabolism → accumulation → toxicity. Dose reduction is insufficient in severe impairment.",
      alternative: "Use sertraline (safer hepatic profile, dose-adjusted) or escitalopram. Avoid venlafaxine entirely in cirrhosis.",
    },
    {
      scenario: "Severe renal impairment (CrCl <30 mL/min)",
      reason: "Renal excretion of venlafaxine and ODV is substantial. Plasma levels rise significantly in severe renal impairment.",
      alternative: "Reduce dose by 50% or avoid. Use sertraline (no renal adjustment needed for mild-severe impairment).",
    },
    {
      scenario: "Pregnancy (particularly 3rd trimester)",
      reason: "Venlafaxine is not the SSRI/SNRI of choice in pregnancy — sertraline is preferred. Category C. Third-trimester use associated with neonatal adaptation syndrome.",
      alternative: "Sertraline is the SSRI of choice in pregnancy. If SNRI essential, involve obstetrician and document risk-benefit.",
    },
    {
      scenario: "Patient unable to adhere to never-miss-a-dose rule",
      reason: "Venlafaxine's short half-life means missed doses cause withdrawal within hours. Patients with cognitive impairment, chaotic lifestyles, or unreliable supply cannot safely use this drug.",
      alternative: "Use fluoxetine (long half-life, self-tapers, forgiving of missed doses) or sertraline (milder discontinuation).",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "What is the dose-dependent pharmacology of venlafaxine? (SERT at 75mg, +NET at 150–225mg, +weak DAT >300mg — THE signature SNRI concept.)",
      "Why does venlafaxine cause hypertension? (Peripheral NET blockade → ↑NE at sympathetic synapses → vasoconstriction → dose-dependent BP elevation.)",
      "What is the relationship between venlafaxine and desvenlafaxine? (Desvenlafaxine is the active metabolite O-desmethylvenlafaxine (ODV), marketed directly. Same molecule, cleaner PK — no CYP2D6 dependence.)",
      "Why is venlafaxine's discontinuation syndrome the worst of any antidepressant? (Short parent half-life 5h + dual SERT+NET withdrawal. Symptoms within hours of missed dose.)",
      "How do you taper venlafaxine safely? (Reduce by 37.5mg every 1–2 weeks over 4–8+ weeks. Consider fluoxetine 20mg bridge for last 2 weeks.)",
      "Which antidepressant is preferred in a breast-cancer survivor on tamoxifen with hot flushes? (Venlafaxine — weak CYP2D6 inhibition does not reduce tamoxifen activation. Avoid paroxetine/fluoxetine.)",
    ],
    residentExpects: [
      "Know the starting dose and titration (37.5mg XR → 75mg → 150mg → 225mg; max 375mg in TRD).",
      "Know the BP monitoring schedule (baseline, 2w, 4w, every dose change; every visit above 150mg).",
      "Know the discontinuation syndrome management (slow taper, fluoxetine bridge, never miss a dose).",
      "Know when to switch from SSRI to venlafaxine (after 1–2 SSRI failures, anergic depression, comorbid anxiety).",
      "Know the active metabolite and CYP2D6 dependence (ODV, desvenlafaxine equivalence).",
      "Know when NOT to use venlafaxine (uncontrolled HTN, severe hepatic/renal impairment, pregnancy, unreliable patient).",
    ],
    consultantsDo: [
      "Use PHQ-9 at every visit for objective mood monitoring",
      "Check BP at every visit above 150mg/day and document trends",
      "Screen for bipolar disorder (MDQ) before starting any antidepressant",
      "Push venlafaxine to 300–375mg in TRD with strict BP monitoring",
      "Cross-taper carefully when switching from SSRI to venlafaxine",
      "Use fluoxetine bridging for the last 2 weeks of venlafaxine taper",
      "Counsel on never missing a dose and maintaining a buffer stock — especially in rural patients with unreliable supply",
    ],
    internsMiss: [
      "Forgetting to check BP at every visit (signature monitoring!)",
      "Starting at 75mg instead of 37.5mg (causes intolerability)",
      "Not counselling on never missing a dose (patient stops abruptly, presents with withdrawal)",
      "Not warning about withdrawal before initiation (patient feels trapped when they try to stop later)",
      "Not checking for MAOI use before starting",
      "Not screening for bipolar disorder (manic switch risk)",
      "Not addressing supply continuity in rural patients (stock-outs cause dangerous withdrawal)",
      "Not checking renal function (dose reduction required in CrCl <30)",
      "Stopping at 75mg and never titrating (patient never experiences the SNRI benefit)",
    ],
  },

  /* Refined high-yield level */
  highYieldLevel: "extreme",

  /* Drug family navigation */
  drugFamilyNav: {
    familyName: "SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)",
    members: [
      { name: "Venlafaxine", slug: "venlafaxine", relationship: "Current drug", distinguishing: "Dose-dependent SNRI; worst discontinuation; BP monitoring; active metabolite ODV = desvenlafaxine" },
      { name: "Desvenlafaxine", slug: "desvenlafaxine", relationship: "Same class (SNRI) — active metabolite of venlafaxine", distinguishing: "ODV marketed directly; no CYP2D6 dependence; cleaner PK" },
      { name: "Duloxetine", slug: "duloxetine", relationship: "Same class (SNRI)", distinguishing: "Balanced SERT+NET from dose 1; 3 FDA pain indications; hepatotoxicity; CYP1A2 interaction" },
      { name: "Milnacipran", slug: "milnacipran", relationship: "Same class (SNRI)", distinguishing: "Balanced SERT+NET (1:3 ratio); FDA-approved for fibromyalgia; not widely available in India" },
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
      question: "At what dose does venlafaxine become a true dual SNRI (SERT + NET blockade)?",
      options: ["37.5 mg/day", "75 mg/day", "150–225 mg/day", ">400 mg/day"],
      correctIndex: 2,
      explanation: "Venlafaxine's NET affinity is lower than its SERT affinity — NET blockade only becomes clinically meaningful above ~150 mg/day. At 75 mg/day it behaves essentially as an SSRI. Above 300 mg/day it adds weak DAT inhibition. This dose-dependent pharmacology is THE most tested venlafaxine concept.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-bp",
      question: "Why does venlafaxine cause dose-dependent hypertension?",
      options: [
        "SERT blockade in the vasculature",
        "NET blockade at peripheral sympathetic synapses raises NE → vasoconstriction",
        "Direct alpha-1 adrenergic agonism",
        "Renin-angiotensin activation",
      ],
      correctIndex: 1,
      explanation: "NET blockade at peripheral sympathetic synapses prevents NE reuptake → ↑ synaptic NE → vasoconstriction → dose-dependent BP elevation. This is why BP monitoring is the signature safety requirement for venlafaxine, particularly above 150 mg/day. Sustained elevation >10 mmHg occurs in 10–15% of patients at high doses.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-discontinuation",
      question: "Which antidepressant has the worst discontinuation syndrome, and why?",
      options: [
        "Fluoxetine — longest half-life",
        "Sertraline — moderate half-life",
        "Venlafaxine — short half-life (5h) + dual SERT+NET withdrawal",
        "Mirtazapine — noradrenergic mechanism",
      ],
      correctIndex: 2,
      explanation: "Venlafaxine has the WORST discontinuation syndrome of any antidepressant. The short parent half-life (~5 hours) combined with dual SERT+NET withdrawal means symptoms ('brain zaps', dizziness, nausea, irritability) can begin within hours of a missed dose. Patients must NEVER miss a dose. Taper over 4–8+ weeks; fluoxetine bridging helps.",
      afterSectionId: "monitoring",
    },
    {
      id: "quiz-metabolite",
      question: "What is the active metabolite of venlafaxine, and which drug is it marketed as separately?",
      options: [
        "Norvenlafaxine — marketed as Pristiq",
        "O-desmethylvenlafaxine (ODV) — marketed as desvenlafaxine (Pristiq)",
        "N-desmethylvenlafaxine — marketed as Duloxetine",
        "Hydroxyvenlafaxine — marketed as Milnacipran",
      ],
      correctIndex: 1,
      explanation: "Venlafaxine is O-demethylated by CYP2D6 to O-desmethylvenlafaxine (ODV), which is pharmacologically equivalent to the parent. ODV is itself marketed as desvenlafaxine (Pristiq) — essentially the same molecule with cleaner PK (no CYP2D6 dependence, lower inter-patient variability).",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-tamoxifen",
      question: "A breast-cancer survivor on tamoxifen develops depression with hot flushes. Which antidepressant is preferred?",
      options: ["Paroxetine", "Fluoxetine", "Venlafaxine", "Bupropion"],
      correctIndex: 2,
      explanation: "Venlafaxine is preferred in breast-cancer survivors on tamoxifen because it is a WEAK CYP2D6 inhibitor — tamoxifen needs CYP2D6 to be activated to endoxifen. Paroxetine and fluoxetine (strong CYP2D6 inhibitors) reduce tamoxifen activation and increase recurrence risk. Venlafaxine also treats tamoxifen-induced hot flushes at 37.5–75 mg/day.",
      afterSectionId: "clinical-uses",
    },
    {
      id: "quiz-taper",
      question: "How should venlafaxine be discontinued after 6 months of 225 mg XR for remission?",
      options: [
        "Stop abruptly — remission achieved",
        "Reduce by 75 mg every 3 days",
        "Reduce by 37.5 mg every 1–2 weeks over 4–8+ weeks; consider fluoxetine bridge",
        "Switch immediately to sertraline 50 mg",
      ],
      correctIndex: 2,
      explanation: "Venlafaxine must be tapered SLOWLY — reduce by 37.5 mg every 1–2 weeks over 4–8+ weeks minimum. Even with slow taper, withdrawal symptoms are common. For the last 2 weeks, substituting fluoxetine 20 mg (long half-life, self-tapers) smooths the final discontinuation. Never stop abruptly — severe withdrawal within hours.",
      afterSectionId: "evidence-practice",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "Explain the dose-dependent pharmacology of venlafaxine. Why is this clinically important?",
      answer: "Venlafaxine has dose-dependent receptor binding: SERT blockade is near-maximal at 75 mg/day (SSRI-like), NET blockade becomes clinically meaningful above 150 mg/day (true SNRI effect), and weak DAT inhibition appears above 300 mg/day. Clinically: titrating the dose changes the pharmacology, not just the magnitude. This means a patient on 75 mg is NOT getting the dual SNRI benefit they were prescribed venlafaxine for — they need 150–225 mg.",
      topic: "Mechanism",
    },
    {
      question: "Why does venlafaxine cause hypertension, and how do you monitor for it?",
      answer: "NET blockade at peripheral sympathetic synapses prevents NE reuptake → ↑ synaptic NE → vasoconstriction → dose-dependent BP elevation. Sustained elevation >10 mmHg occurs in 10–15% at >300 mg/day. Monitoring: baseline BP, then 2 weeks, 4 weeks, and every dose change. Above 150 mg/day, check BP every visit. If sustained elevation despite dose reduction, switch to duloxetine or mirtazapine.",
      topic: "Side Effects",
    },
    {
      question: "Why does venlafaxine have the worst discontinuation syndrome of any antidepressant, and how do you manage it?",
      answer: "Short parent half-life (~5 hours) combined with dual SERT+NET withdrawal means symptoms ('brain zaps', dizziness, nausea, irritability) can begin within hours of a missed dose. Management: (1) counsel NEVER to miss a dose, (2) maintain buffer stock of 3–5 days, (3) taper over 4–8+ weeks reducing by 37.5 mg every 1–2 weeks, (4) consider fluoxetine 20 mg bridge for last 2 weeks (long half-life self-tapers).",
      topic: "Discontinuation",
    },
    {
      question: "What is the relationship between venlafaxine and desvenlafaxine?",
      answer: "Desvenlafaxine (Pristiq) is the active metabolite of venlafaxine — O-desmethylvenlafaxine (ODV). Venlafaxine is O-demethylated by CYP2D6 to ODV, which is pharmacologically equivalent to the parent. Desvenlafaxine is ODV marketed directly, with the advantage of no CYP2D6 dependence and lower inter-patient variability. Clinically, venlafaxine and desvenlafaxine are nearly interchangeable.",
      topic: "Pharmacokinetics",
    },
    {
      question: "A patient on venlafaxine 225 mg XR missed two doses and presents with dizziness, 'brain zaps', nausea, and irritability. What is the diagnosis and immediate management?",
      answer: "Venlafaxine discontinuation syndrome — onset within hours due to short half-life (5h) and dual withdrawal. Management: (1) take a dose immediately, (2) resume regular schedule, (3) reassure that symptoms will resolve within 24–48 hours of resuming, (4) counsel on NEVER missing a dose, (5) maintain buffer stock of 3–5 days. If symptoms severe, can give a single dose in the clinic and observe.",
      topic: "Clinical Reasoning",
    },
    {
      question: "Why is venlafaxine preferred over paroxetine in a breast-cancer survivor on tamoxifen?",
      answer: "Tamoxifen is a prodrug that requires CYP2D6 to be activated to endoxifen (the active anti-cancer metabolite). Paroxetine and fluoxetine are STRONG CYP2D6 inhibitors — they reduce tamoxifen activation and increase breast cancer recurrence risk. Venlafaxine is a WEAK CYP2D6 inhibitor and does not significantly affect tamoxifen activation. It also effectively treats tamoxifen-induced hot flushes at 37.5–75 mg/day.",
      topic: "Drug Interactions",
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
      estimatedTime: "22 min",
      description: "Foundations, dose-dependent mechanism, clinical uses, side effects, and MBBS exam content.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "interactions", "patient-education", "learning-module", "high-yield-summary", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "40 min",
      description: "Full clinical detail with exam-specific content, PYQs, dose-dependent pharmacology, and drug comparisons.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "50 min",
      description: "Everything — advanced reasoning, ward pearls, TRD algorithm, guideline comparison, full evidence.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall", "references"],
    },
  ],

  /* Lesson grouping — sections organised into learning units */
  lessonGroups: [
    {
      number: 1,
      title: "Foundations",
      description: "What is this drug? Why does it matter as an SNRI?",
      sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"],
      checkpoint: "You now know what Venlafaxine is, its 4 FDA indications, and how it differs from SSRIs.",
    },
    {
      number: 2,
      title: "Dose-Dependent Mechanism & Neuroscience",
      description: "How does the dose change the pharmacology? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand the dose-dependent SERT → +NET → +DAT pharmacology — THE signature venlafaxine concept. You also understand the active metabolite ODV and its relationship to desvenlafaxine.",
    },
    {
      number: 3,
      title: "Clinical Practice & Signature Safety",
      description: "When do you use it? What about BP and discontinuation?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now prescribe venlafaxine safely — you know the dose-dependent BP monitoring, the worst-in-class discontinuation syndrome, and how to counsel patients on never missing a dose.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian private vs government settings?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands (Veniz, Venlift, Effexor XR, Ventab), the Schedule H status, the moderate cost, and why it is NOT in government formularies or Jan Aushadhi.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and SNRI drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content, worked through a clinical case, compared venlafaxine with duloxetine and desvenlafaxine, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions, you have exam-level mastery of Venlafaxine.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Effexor XR label, NICE CG91, APA Practice Guideline, KD Tripathi 8e, IPS Depression Guidelines, NMC CBME Curriculum"],
};
