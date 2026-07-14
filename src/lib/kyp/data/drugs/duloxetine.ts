import type { Drug } from "../types";

/**
 * Duloxetine — canonical drug page data.
 *
 * Structured to mirror the sertraline / fluoxetine template exactly so every
 * section of /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Duloxetine is the KYP "PAIN SNRI" — the only antidepressant with 3 separate
 * FDA-approved pain indications (diabetic peripheral neuropathic pain,
 * fibromyalgia, chronic musculoskeletal pain). It is also distinguished from
 * venlafaxine by a BALANCED SERT+NET blockade from the first dose (no
 * dose-dependent "ladder"), a longer half-life (12h vs 5h), and a signature
 * hepatotoxicity profile.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for CYMBALTA (duloxetine hydrochloride)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *
 * Last reviewed: 2026-07-13
 */
export const duloxetine: Drug = {
  /* ---- Identity ---- */
  slug: "duloxetine",
  genericName: "Duloxetine",
  brandNames: ["Cymbalta", "Drizalma", "Duzela"],
  drugClass: "snri",
  drugClassLabel: "SNRI",
  drugClassFullName: "Serotonin-Norepinephrine Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "SNRIs", "Duloxetine"],

  /* ---- Hero / summary ---- */
  tagline:
    "A balanced SNRI from dose one — and the only antidepressant FDA-approved for three pain conditions (diabetic neuropathy, fibromyalgia, chronic musculoskeletal pain).",
  summary:
    "Duloxetine blocks BOTH the serotonin transporter (SERT) and the norepinephrine transporter (NET) at every therapeutic dose (30–120 mg/day) — unlike venlafaxine, which is predominantly serotonergic until doses exceed ~150 mg/day. This balanced dual reuptake inhibition from day one underlies duloxetine's usefulness in both mood disorders and neuropathic/musculoskeletal pain. Duloxetine is metabolised by CYP1A2 and CYP2D6, has a 12-hour half-life, produces no active metabolite, and carries a signature hepatotoxicity warning — avoid in hepatic impairment, cirrhosis, and substantial alcohol use. It has five FDA indications (MDD, GAD, diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain) — more than any other SNRI or SSRI.",
  estimatedReadTime: "18 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain how duloxetine differs from venlafaxine mechanistically — balanced SERT + NET blockade from dose 1, with no dose-dependent 'ladder' to unlock noradrenergic effect.",
    "List duloxetine's five FDA-approved indications (MDD, GAD, diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain) and explain why pain relief may precede mood improvement.",
    "Recognise duloxetine's signature hepatotoxicity risk and identify the patients in whom it is contraindicated (Child-Pugh B/C, cirrhosis, heavy alcohol use).",
    "Differentiate duloxetine's safety profile from venlafaxine — minimal hypertension versus dose-dependent hypertension — and explain when each is preferred.",
    "Apply renal, hepatic, and CYP1A2/CYP2D6 interaction logic when starting duloxetine in a complex patient (especially with fluvoxamine, ciprofloxacin, or paroxetine).",
    "Counsel a patient with depression plus chronic pain on what to expect in the first 6 weeks, including the importance of avoiding alcohol and not crushing the enteric-coated capsule.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Duloxetine blocks both the serotonin transporter (SERT) and the norepinephrine transporter (NET) at all therapeutic doses, raising synaptic serotonin and norepinephrine — a balanced dual effect from the first dose, unlike venlafaxine's dose-dependent SERT→NET ladder.",
    molecularTarget: "SERT (SLC6A4 — serotonin transporter) AND NET (SLC6A2 — norepinephrine transporter), balanced from dose 1",
    effect:
      "Acute: simultaneous rise in synaptic serotonin AND norepinephrine. Chronic (2–6 weeks): desensitisation of somatodendritic 5-HT1A and α2 autoreceptors, increased serotonergic and noradrenergic throughput to the prefrontal cortex, descending inhibition of pain signals in the dorsal horn (NET-driven), and hippocampal BDNF upregulation. The noradrenergic effect on the descending inhibitory pain pathway underlies duloxetine's efficacy in neuropathic and musculoskeletal pain.",
    steps: [
      "Duloxetine binds the serotonin transporter (SERT) on presynaptic serotonergic neurons in the raphe nuclei, blocking reuptake of serotonin from the synaptic cleft.",
      "Simultaneously, duloxetine binds the norepinephrine transporter (NET) on presynaptic noradrenergic neurons in the locus coeruleus, blocking reuptake of norepinephrine.",
      "This DUAL blockade is BALANCED from the first 30 mg dose — unlike venlafaxine, which is predominantly serotonergic until >150 mg/day. No dose escalation is required to 'unlock' the noradrenergic effect.",
      "Acute dual blockade raises both synaptic serotonin and norepinephrine within hours — but somatodendritic 5-HT1A and α2 autoreceptors detect this and temporarily brake further release.",
      "Over 1–2 weeks, the autoreceptors desensitise — removing the brake. Serotonergic throughput to the prefrontal cortex, amygdala, and hippocampus rises (mood, anxiety).",
      "Norepinephrine acting on the descending inhibitory pain pathway (locus coeruleus → dorsal horn of spinal cord) suppresses incoming nociceptive signals — explaining why pain relief can begin at 1–2 weeks, often earlier than the mood effect.",
      "Downstream neuroadaptive changes over 2–6 weeks — including increased BDNF expression and hippocampal neurogenesis — correlate with the onset of clinical antidepressant and anxiolytic effects.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~50%, but highly variable 30–80% due to first-pass metabolism). Peak plasma at 6 hours. Food delays absorption but does not significantly affect extent. Highly protein-bound (>90%), mainly to α1-acid glycoprotein. Volume of distribution ~1640 L/kg — distributes widely including into CNS. The capsule contains enteric-coated beads — must NOT be crushed, chewed, or opened (destroying the enteric coat releases the drug all at once and irritates the stomach).",
    halfLife: "Approximately 12 hours (range 8–17 hours). Intermediate — longer than venlafaxine's ~5h, shorter than SSRIs like sertraline (26h) or fluoxetine (1–4 days).",
    activeMetabolite:
      "None of clinical significance. Duloxetine is extensively metabolised in the liver to inactive conjugates. The absence of an active metabolite (vs venlafaxine's active O-desmethylvenlafaxine) makes the pharmacokinetics cleaner.",
    metabolism: "Hepatic CYP1A2 and CYP2D6 (both major). Conjugation (glucuronidation and sulphation) of the metabolites follows. CYP1A2 inhibition (e.g. fluvoxamine, ciprofloxacin) significantly raises duloxetine plasma levels — combination should be avoided. CYP2D6 inhibitors raise levels more modestly.",
    excretion: "Approximately 70% renal (as conjugated metabolites, <1% unchanged) and 20% faecal. Renal excretion of metabolites means severe renal impairment (CrCl <30 mL/min) significantly raises exposure — avoid in this population.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "raphe", label: "Raphe nuclei (serotonergic)", sublabel: "Synthesises serotonin", variant: "input" },
      { id: "locus", label: "Locus coeruleus (noradrenergic)", sublabel: "Synthesises norepinephrine", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into cleft", variant: "process" },
      { id: "norepinephrine", label: "Norepinephrine (NE)", sublabel: "Released into cleft", variant: "process" },
      { id: "sert", label: "SERT transporter", sublabel: "Normally reuptakes 5-HT", variant: "target" },
      { id: "net", label: "NET transporter", sublabel: "Normally reuptakes NE", variant: "target" },
      { id: "duloxetine", label: "Duloxetine", sublabel: "Blocks BOTH SERT and NET from dose 1 (balanced)", variant: "inhibit" },
      { id: "cleft", label: "↑ Synaptic 5-HT + NE", sublabel: "Balanced dual rise — unlike venlafaxine ladder", variant: "output" },
      { id: "autoreceptor", label: "5-HT1A + α2 autoreceptors", sublabel: "Initially brake firing", variant: "process" },
      { id: "desensitised", label: "Autoreceptors desensitise", sublabel: "Days 7–14 — brake removed", variant: "output" },
      { id: "pain", label: "Descending pain pathway", sublabel: "NE → dorsal horn inhibition → ↓ pain (1–2 weeks)", variant: "output" },
      { id: "mood", label: "Prefrontal cortex + hippocampus", sublabel: "↑ BDNF, mood improves (4–6 weeks)", variant: "output" },
      { id: "liver", label: "Hepatic metabolism (CYP1A2 + CYP2D6)", sublabel: "Signature hepatotoxicity risk — monitor LFTs", variant: "process" },
    ],
    edges: [
      { from: "raphe", to: "serotonin", label: "releases" },
      { from: "locus", to: "norepinephrine", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "norepinephrine", to: "net", label: "reuptake" },
      { from: "duloxetine", to: "sert", type: "inhibit", label: "blocks (dose 1)" },
      { from: "duloxetine", to: "net", type: "inhibit", label: "blocks (dose 1)" },
      { from: "serotonin", to: "cleft", label: "accumulates" },
      { from: "norepinephrine", to: "cleft", label: "accumulates" },
      { from: "cleft", to: "autoreceptor", label: "detects" },
      { from: "autoreceptor", to: "desensitised", label: "over 7–14 days" },
      { from: "desensitised", to: "pain", label: "NE drives descending inhibition" },
      { from: "desensitised", to: "mood", label: "5-HT + NE drive BDNF" },
      { from: "duloxetine", to: "liver", label: "metabolised by" },
    ],
    caption:
      "Duloxetine's defining feature: BALANCED SERT + NET blockade from dose 1 (no venlafaxine-style ladder). The norepinephrine arm feeds the descending pain pathway — explaining why duloxetine works for neuropathic and musculoskeletal pain, while SSRIs do not.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine (NE)"],
  receptors: ["SERT (serotonin transporter)", "NET (norepinephrine transporter)", "5-HT1A (autoreceptor, desensitises)", "α2 adrenergic autoreceptor", "5-HT2C", "5-HT3 (GI)", "Weak DAT (dopamine transporter) at high doses"],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // SNRIs act on diffuse serotonergic + noradrenergic projection systems and the descending pain pathway

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description: "First-line option in adults. Efficacy comparable to SSRIs; preferred when pain is comorbid. Onset 4–6 weeks. Starting dose 30 mg/day, titrate to 60 mg/day.",
      ageGroup: "Adults",
    },
    {
      name: "Generalised Anxiety Disorder (GAD)",
      status: "fda-approved",
      description: "Approved in adults AND in paediatric patients aged ≥7 years — one of the few antidepressants with a paediatric anxiety indication. Starting dose 30 mg/day, target 60 mg/day.",
      ageGroup: "Adults & ≥7 years",
    },
    {
      name: "Diabetic Peripheral Neuropathic Pain",
      status: "fda-approved",
      description: "Signature pain indication. Duloxetine is one of only two antidepressants FDA-approved for a neuropathic pain condition (the other being pregabalin class). 60 mg/day is the recommended dose; benefit may appear at 1–2 weeks — earlier than mood effect.",
      ageGroup: "Adults",
    },
    {
      name: "Fibromyalgia",
      status: "fda-approved",
      description: "FDA-approved in adults. Particularly useful in patients with comorbid depression or anxiety — duloxetine treats both with a single agent. Dose 30→60 mg/day.",
      ageGroup: "Adults",
    },
    {
      name: "Chronic Musculoskeletal Pain",
      status: "fda-approved",
      description: "Approved for chronic low back pain and chronic pain due to osteoarthritis. This — combined with the neuropathic pain and fibromyalgia approvals — makes duloxetine the only antidepressant with THREE separate FDA pain indications. Dose 30→60 mg/day.",
      ageGroup: "Adults",
    },
    {
      name: "Stress Urinary Incontinence (off-label)",
      status: "off-label",
      description: "Originally developed for stress urinary incontinence (SUI) — the SNRI action on the urethral sphincter increases closure pressure. Approved for SUI in Europe historically but withdrawn from that indication after concern over hepatotoxicity and suicide risk. Still used off-label in selected cases.",
    },
    {
      name: "Chemotherapy-Induced Peripheral Neuropathy",
      status: "off-label",
      description: "Reasonable off-label option for painful neuropathy caused by taxanes, platinum compounds, or vinca alkaloids — extrapolating from efficacy in diabetic neuropathy. Evidence is mixed but clinically useful in selected patients.",
    },
    {
      name: "Premature Ejaculation (off-label)",
      status: "off-label",
      description: "Off-label use similar to other SSRIs/SNRIs — SERT blockade in the spinal cord delays ejaculation. Less well studied than dapoxetine or sertraline for this indication.",
    },
  ],

  contraindications: [
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining with MAOIs (phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. At least 14 days must elapse between discontinuation of an MAOI and initiation of duloxetine; at least 5 days should elapse between discontinuation of duloxetine and starting an MAOI (shorter than for SSRIs due to duloxetine's 12h half-life).",
    },
    {
      name: "Hepatic impairment (Child-Pugh B or C) or cirrhosis",
      severity: "absolute",
      rationale:
        "Duloxetine can cause severe liver injury. In patients with pre-existing hepatic impairment or cirrhosis, exposure rises sharply and the risk of fulminant hepatic failure is unacceptable. Avoid completely.",
    },
    {
      name: "End-stage renal disease (CrCl <30 mL/min)",
      severity: "absolute",
      rationale:
        "Renal excretion of duloxetine metabolites is substantial. In severe renal impairment (CrCl <30 mL/min), plasma levels rise dramatically (Cmax and AUC roughly double). Use is not recommended — avoid.",
    },
    {
      name: "Substantial alcohol use (≥3 drinks/day)",
      severity: "absolute",
      rationale:
        "FDA Cymbalta label specifically contraindicates use in patients with substantial alcohol use (≥3 drinks/day) due to additive hepatotoxicity risk. Post-marketing reports of severe hepatic injury are over-represented in heavy drinkers.",
    },
    {
      name: "Concurrent thioridazine",
      severity: "absolute",
      rationale:
        "Duloxetine is a moderate CYP2D6 inhibitor and raises thioridazine plasma levels → QTc prolongation → torsades de pointes. Combination contraindicated.",
    },
    {
      name: "Known hypersensitivity to duloxetine",
      severity: "absolute",
      rationale: "Anaphylaxis, angioedema, and severe skin reactions (Stevens-Johnson syndrome) have been reported.",
    },
    {
      name: "Uncontrolled narrow-angle glaucoma",
      severity: "relative",
      rationale: "Duloxetine can provoke mydriasis; use with caution in controlled narrow-angle glaucoma and avoid in uncontrolled.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of duloxetine in a child, adolescent, or young adult must balance this risk with the clinical need. Duloxetine is approved for paediatric GAD (≥7 years) but NOT for paediatric MDD. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea",
      frequency: "very-common",
      severity: "mild",
      description: "The single most common side effect (~20–30%). Reflects combined SERT (5-HT3 in GI) and NET effects on the gut. Usually dose-dependent and resolves within 1–2 weeks. Worse than with most SSRIs because of dual mechanism.",
      management: "Take with food. Start at 30 mg/day for 1 week before titrating to 60 mg. Split-dose (BID) may help if once-daily is poorly tolerated.",
    },
    {
      name: "Dry mouth",
      frequency: "very-common",
      severity: "mild",
      description: "More prominent than with SSRIs — reflects the norepinephrine effect (NET blockade raises NE which acts on salivary gland adrenergic receptors, producing an anticholinergic-like effect).",
      management: "Sip water regularly, sugar-free gum, good dental hygiene (chronic dry mouth increases caries risk).",
    },
    {
      name: "Somnolence / fatigue",
      frequency: "very-common",
      severity: "mild",
      description: "Paradoxically, duloxetine can be sedating OR activating in different patients. Fatigue and somnolence are reported in ~10–20%. The noradrenergic component makes some patients 'wired-tired'.",
      management: "If sedating, take at night. If activating, take in the morning. If persistent, consider dose reduction or switch to a different agent.",
    },
    {
      name: "Insomnia",
      frequency: "common",
      severity: "mild",
      description: "Occurs in ~5–10%. May coexist with daytime somnolence — the 'wired-tired' phenomenon common to SNRIs.",
      management: "Take in the morning. Sleep hygiene. If severe, switch to a more sedating antidepressant (mirtazapine).",
    },
    {
      name: "Headache",
      frequency: "common",
      severity: "mild",
      description: "Usually transient in the first 1–2 weeks. Differentiate from serotonin syndrome (which includes hyperreflexia, clonus, autonomic instability).",
      management: "Paracetamol is safe. Avoid NSAIDs (additive bleeding risk).",
    },
    {
      name: "Dizziness / orthostatic hypotension",
      frequency: "common",
      severity: "moderate",
      description: "More common than with SSRIs — norepinephrine effect on vascular tone and heart rate can produce orthostatic drops, especially in the elderly. Syncope has been reported. This is duloxetine's signature cardiovascular effect (note: paradoxically, duloxetine has LESS hypertension than venlafaxine — the two SNRIs differ here).",
      management: "Stand up slowly from sitting or lying. Ensure adequate hydration. Caution in elderly — consider fall-risk assessment. Avoid concurrent diuretics if possible.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "mild",
      description: "NET effect on gut motility — opposite of SSRI-induced diarrhoea. Combined with dry mouth, this can mimic anticholinergic effects.",
      management: "Hydration, dietary fibre, exercise. Laxative if needed.",
    },
    {
      name: "Decreased appetite & weight loss",
      frequency: "common",
      severity: "mild",
      description: "Unlike mirtazapine or paroxetine, duloxetine tends to cause mild weight LOSS in the acute phase. Weight-neutral long-term. Useful when weight gain is undesirable.",
      management: "Usually not clinically significant. Monitor weight in elderly or underweight patients at baseline.",
    },
    {
      name: "Sweating",
      frequency: "common",
      severity: "mild",
      description: "Particularly nocturnal. Noradrenergic + serotonergic effect on hypothalamic thermoregulation. Distressing but benign.",
      management: "Reassurance. Avoid heavy bedding. If severe, consider dose reduction.",
    },
    {
      name: "Sexual dysfunction",
      frequency: "very-common",
      severity: "moderate",
      description: "Similar to SSRIs — decreased libido, delayed orgasm/anorgasmia, erectile dysfunction. SERT effect on spinal sexual reflexes. Often underreported by patients.",
      management: "Dose reduction if possible. Add bupropion XL 150 mg/day. Consider switch to bupropion or mirtazapine. Sildenafil for erectile component.",
      sideEffectId: "sexual-dysfunction",
    },
  ],

  seriousSideEffects: [
    {
      name: "Hepatotoxicity — severe liver injury (SIGNATURE)",
      frequency: "uncommon",
      severity: "severe",
      description: "Duloxetine's signature serious adverse effect. Post-marketing reports include fulminant hepatitis with transaminase elevations >20× ULN, jaundice, and rare fatalities. Risk highest in patients with pre-existing liver disease, cirrhosis, or substantial alcohol use (≥3 drinks/day). Onset can be weeks to months into therapy.",
      management: "AVOID in hepatic impairment (Child-Pugh B/C), cirrhosis, and substantial alcohol use. Check LFTs at baseline. If ALT or AST exceeds 3× ULN during therapy, discontinue duloxetine. Instruct patient to report jaundice, dark urine, right upper quadrant pain, or unexplained fatigue immediately.",
    },
    {
      name: "Orthostatic hypotension & syncope",
      frequency: "common",
      severity: "severe",
      description: "Norepinephrine effect on vascular tone produces orthostatic drops. Syncope has been reported — falls risk in elderly is a real concern. More prominent than with SSRIs.",
      management: "Measure orthostatic vital signs in elderly. Stand slowly. Ensure hydration. Consider fall-risk assessment. Avoid concurrent diuretics or antihypertensives that exacerbate orthostasis.",
    },
    {
      name: "Serotonin Syndrome",
      frequency: "rare",
      severity: "life-threatening",
      description: "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis), and neuromuscular excitation (clonus, hyperreflexia, rigidity). Onset usually within 24 hours of initiating, increasing, or combining serotonergic agents.",
      management: "Discontinue duloxetine immediately. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU admission for hyperthermia >41°C.",
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
      description: "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk. Note: duloxetine is approved for paediatric GAD (≥7 yrs) but NOT for paediatric MDD — partly because of suicidality signal.",
      management: "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent.",
    },
    {
      name: "Abnormal bleeding",
      frequency: "uncommon",
      severity: "moderate",
      description: "Serotonin stored in platelets is essential for aggregation. SNRIs deplete platelet serotonin within 2 weeks, impairing clotting. Risk multiplied when combined with NSAIDs, aspirin, or warfarin.",
      management: "Caution in patients with coagulopathy or on anticoagulants. Consider GI protection if combined with NSAIDs.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description: "In patients with undiagnosed bipolar disorder, SNRIs can trigger a manic episode — possibly more than SSRIs due to the noradrenergic component. Screen for personal and family history of bipolar disorder before initiating.",
      management: "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Discontinuation syndrome",
      frequency: "common",
      severity: "moderate",
      description: "Occurs if stopped abruptly after ≥4 weeks of use. Symptoms: dizziness, 'brain zaps' (paresthesia), nausea, headache, irritability, insomnia. Less severe than venlafaxine (12h half-life vs 5h) but still clinically meaningful — and more severe than fluoxetine.",
      management: "Taper over at least 2–4 weeks. If symptoms emerge, return to previous dose and taper more slowly. Substituting fluoxetine (long half-life) for the last few weeks of a taper can smooth discontinuation.",
    },
    {
      name: "Severe skin reactions (Stevens-Johnson syndrome)",
      frequency: "rare",
      severity: "severe",
      description: "Rare reports of Stevens-Johnson syndrome and other severe cutaneous adverse reactions. Onset usually within first 2 months.",
      management: "Discontinue immediately if rash progresses with systemic symptoms (fever, mucosal involvement, blistering). Emergency dermatology evaluation.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Liver function tests (LFTs) — SIGNATURE MONITORING",
      frequency: "Baseline, then if symptoms develop (jaundice, dark urine, RUQ pain, fatigue). Routine serial LFTs are not required in low-risk patients but consider in those with risk factors.",
      rationale: "Hepatotoxicity is duloxetine's signature serious adverse effect. Avoid in hepatic impairment, cirrhosis, and substantial alcohol use. If ALT or AST exceeds 3× ULN during therapy, discontinue. Instruct patient to report symptoms of liver injury immediately.",
    },
    {
      parameter: "Blood pressure & orthostatic vitals",
      frequency: "Baseline, then at each visit during titration. Check orthostatic BP in elderly.",
      rationale: "Unlike venlafaxine, duloxetine has minimal effect on supine BP — but can cause orthostatic hypotension (NET effect on vasculature). Falls risk in elderly.",
    },
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale: "Black-box warning for suicidality in patients <25. Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes.",
    },
    {
      parameter: "Serum sodium",
      frequency: "Baseline in elderly; recheck within 2 weeks if symptomatic.",
      rationale: "SNRIs cause SIADH in ~0.5–1% of patients. Highest risk in elderly females.",
    },
    {
      parameter: "Response assessment (PHQ-9 / GAD-7 / pain scale)",
      frequency: "Baseline, week 2 (pain), week 4, week 8, then every 3 months.",
      rationale: "Quantifies response. ≥50% reduction in PHQ-9 = response. PHQ-9 <5 = remission. For pain indications, use Brief Pain Inventory or numeric rating scale — pain response may begin at 1–2 weeks, earlier than mood response.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 3 months, then every 6 months.",
      rationale: "Duloxetine is weight-neutral to mildly anorexigenic. Useful when weight gain is undesirable (vs mirtazapine/paroxetine).",
    },
    {
      parameter: "Alcohol use assessment",
      frequency: "Baseline and at each visit.",
      rationale: "Substantial alcohol use (≥3 drinks/day) is a contraindication due to additive hepatotoxicity. Counsel patients explicitly about this.",
    },
    {
      parameter: "Renal function (CrCl)",
      frequency: "Baseline, and periodically if declining.",
      rationale: "Avoid if CrCl <30 mL/min. Mild-moderate impairment (CrCl 30–80) requires no adjustment.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism: "MAOIs inhibit serotonin and norepinephrine breakdown. Combining with SERT+NET blockade causes massive serotonergic excess → serotonin syndrome.",
      action: "Absolute contraindication. Wait 14 days after stopping MAOI before starting duloxetine; wait at least 5 days after stopping duloxetine before starting an MAOI (shorter than SSRIs due to 12h half-life).",
    },
    {
      drug: "CYP1A2 inhibitors (fluvoxamine, ciprofloxacin, enoxacin)",
      severity: "major",
      mechanism: "CYP1A2 is a major duloxetine metabolic pathway. Strong CYP1A2 inhibitors (especially fluvoxamine, ciprofloxacin) raise duloxetine AUC by ~5-fold — clinically significant hepatotoxicity and adverse effect risk.",
      action: "AVOID combination. If unavoidable, reduce duloxetine dose substantially and monitor closely. This is duloxetine's MOST clinically significant CYP interaction.",
    },
    {
      drug: "CYP2D6 inhibitors (paroxetine, fluoxetine, bupropion, quinidine)",
      severity: "major",
      mechanism: "CYP2D6 is the other major duloxetine pathway. Strong CYP2D6 inhibitors raise duloxetine plasma levels — combination of two antidepressants also carries serotonin syndrome risk.",
      action: "Avoid combining duloxetine with paroxetine or fluoxetine. If unavoidable, use lower duloxetine dose and monitor for adverse effects (especially nausea, dizziness, hepatotoxicity).",
    },
    {
      drug: "Tramadol",
      severity: "major",
      mechanism: "Tramadol is a weak serotonin–norepinephrine reuptake inhibitor and is metabolised by CYP2D6 to its active opioid form. Duloxetine inhibits CYP2D6 → reduces tramadol analgesia AND raises serotonin syndrome risk.",
      action: "Avoid if possible. If unavoidable, use lowest tramadol dose, monitor for serotonin syndrome and reduced analgesia.",
    },
    {
      drug: "Triptans (sumatriptan, rizatriptan)",
      severity: "major",
      mechanism: "Triptans are 5-HT1B/1D agonists — additive serotonergic effect.",
      action: "Use cautiously. Monitor for serotonin syndrome, especially in first month of therapy.",
    },
    {
      drug: "St John's Wort",
      severity: "major",
      mechanism: "Herbal serotonergic agent. Additive serotonergic effect.",
      action: "Avoid combination — serotonin syndrome risk.",
    },
    {
      drug: "NSAIDs, aspirin & warfarin",
      severity: "moderate",
      mechanism: "Duloxetine depletes platelet serotonin → impaired aggregation. NSAIDs cause GI mucosal damage. Combined → increased risk of upper GI bleeding. Warfarin: additive bleeding risk.",
      action: "Co-prescribe gastroprotection (PPI) in elderly or those with prior GI bleed. Monitor INR closely if on warfarin.",
    },
    {
      drug: "Alcohol (substantial use, ≥3 drinks/day)",
      severity: "contraindicated",
      mechanism: "Additive hepatotoxicity. Heavy alcohol use is an independent risk factor for liver injury; combined with duloxetine, the risk of severe hepatic injury is unacceptable.",
      action: "AVOID in patients with substantial alcohol use. Counsel patient explicitly about hepatotoxicity risk.",
    },
    {
      drug: "Diuretics",
      severity: "moderate",
      mechanism: "Diuretics cause volume depletion → exacerbate duloxetine's orthostatic hypotension (NET effect). SIADH risk also additive (diuretics + SNRI both affect sodium/water balance).",
      action: "Monitor orthostatic BP and serum sodium if combination necessary. Consider dose reduction of diuretic if feasible.",
    },
    {
      drug: "Antihypertensives (especially α-blockers)",
      severity: "moderate",
      mechanism: "Duloxetine may blunt the antihypertensive effect of some antihypertensives (case reports of reduced efficacy with metoprolol and other agents) — possibly via NET-mediated vascular effects. Conversely, orthostatic hypotension may be additive.",
      action: "Monitor BP. Anticipate possible need for antihypertensive dose adjustment.",
    },
    {
      drug: "Thioridazine",
      severity: "contraindicated",
      mechanism: "Duloxetine inhibits CYP2D6 → raises thioridazine levels → QTc prolongation → torsades de pointes.",
      action: "Never combine.",
    },
    {
      drug: "Other serotonergic antidepressants (SSRIs, SNRIs, TCAs, mirtazapine)",
      severity: "major",
      mechanism: "Additive serotonergic effect — serotonin syndrome risk. Also pharmacokinetic interaction if other agent is a CYP2D6 or CYP1A2 inhibitor.",
      action: "Avoid overlapping transition periods. Use washout (especially from fluoxetine — wait 5 weeks due to long half-life).",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Duloxetine is NOT the antidepressant of choice in pregnancy — sertraline is preferred when an SSRI will suffice. Limited human data; no consistent pattern of major malformations, but animal studies show developmental effects at maternal toxic doses. Third-trimester use is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding, hypoglycaemia) in a significant proportion of exposed neonates — usually self-limited. Neonatal hypertension has been reported less often than with venlafaxine but is documented. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks. In a pregnant patient with both depression AND neuropathic pain where an SNRI is genuinely needed, duloxetine may be considered after specialist consultation, but venlafaxine has more pregnancy data and is generally preferred if an SNRI is necessary.",
    lactation:
      "Duloxetine is excreted into breast milk. The relative infant dose is estimated at ~1% of maternal weight-adjusted dose — generally considered acceptable, but infant sedation and poor feeding have been reported. Sertraline remains the preferred antidepressant in lactation when an SSRI will suffice. If duloxetine is needed for a breastfeeding mother with comorbid pain, monitor the infant for sedation, poor weight gain, and feeding issues. Consider feeding immediately before the maternal dose to minimise infant exposure.",
  },

  renalAdjustment:
    "Mild-moderate renal impairment (CrCl 30–80 mL/min): no dose adjustment required. Severe renal impairment (CrCl <30 mL/min): AVOID — use is not recommended; AUC and Cmax approximately double. End-stage renal disease / haemodialysis: AVOID.",

  hepaticAdjustment:
    "Child-Pugh A (mild hepatic impairment): use with caution; consider lower starting dose (30 mg/day) and slower titration. Child-Pugh B or C (moderate-severe hepatic impairment): AVOID (contraindicated). Cirrhosis: AVOID. Substantial alcohol use (≥3 drinks/day): AVOID.",

  /* ---- Education ---- */
  patientExplanation:
    "Duloxetine is a medicine that helps the brain keep more of two chemicals — serotonin and norepinephrine — available for longer. These chemicals help regulate mood, anxiety, AND how your brain processes pain signals. That is why duloxetine is used not only for depression and anxiety, but also for certain kinds of chronic pain (diabetic nerve pain, fibromyalgia, chronic back pain, arthritis pain). For pain, you may notice some benefit within 1–2 weeks; for mood, the full effect usually takes 4–6 weeks. Important safety notes: duloxetine can affect the liver, so you must avoid alcohol (especially ≥3 drinks/day) and tell your doctor if you have any liver disease. Don't crush or open the capsule — it has a special coating. Stand up slowly to avoid dizziness, especially in the first weeks. Like other antidepressants, it isn't addictive, but stopping suddenly can cause uncomfortable withdrawal-like symptoms — so always come off it slowly with your doctor's guidance.",

  patientEducationPoints: [
    "Pain relief may begin within 1–2 weeks, but full mood benefit usually takes 4–6 weeks. Don't stop early just because you don't feel better yet.",
    "DO NOT drink alcohol — especially not 3 or more drinks per day. Duloxetine can affect your liver, and alcohol increases this risk. Tell your doctor if you drink regularly.",
    "Tell your doctor if you have any liver disease (hepatitis, cirrhosis, fatty liver, abnormal liver tests) — duloxetine may not be safe for you.",
    "Do NOT crush, chew, or open the capsule. The capsule has a special coating (enteric-coated beads) that must stay intact — breaking it releases the medicine too fast and can irritate your stomach.",
    "Stand up slowly from sitting or lying down, especially in the first 2–3 weeks. Duloxetine can cause dizziness on standing — this is more common than with most other antidepressants.",
    "Report any yellowing of your skin or eyes, dark urine, pale stools, right-sided belly pain, or unexplained fatigue immediately — these can be signs of liver injury.",
    "Common early side effects include nausea (take with food), dry mouth (sip water), constipation, sweating, and sleep changes. These usually settle within 1–2 weeks.",
    "Tell your doctor about all other medications — especially fluvoxamine, ciprofloxacin, paroxetine, fluoxetine, tramadol, triptans (for migraine), warfarin, NSAIDs (ibuprofen, naproxen), and herbal products like St John's Wort.",
    "Watch for warning signs in the first month: new or worsening agitation, irritability, anxiety, or suicidal thoughts — particularly if you're under 25. Contact your clinician immediately.",
    "Seek emergency help for signs of serotonin syndrome: high fever, confusion, sweating, agitation, tremor, muscle rigidity or twitching, fast heartbeat.",
  ],

  clinicalPearls: [
    "Duloxetine is the 'PAIN SNRI' — the ONLY antidepressant with THREE separate FDA pain indications (diabetic peripheral neuropathy, fibromyalgia, chronic musculoskeletal pain). When a patient has depression PLUS chronic pain, duloxetine treats both with a single agent.",
    "Unlike venlafaxine, duloxetine is a BALANCED SNRI from dose 1 — SERT and NET are both blocked at 30 mg/day. There is no need to escalate dose to 'unlock' the noradrenergic effect (venlafaxine's dose-dependent ladder is the classic teaching point).",
    "Duloxetine has LESS hypertension than venlafaxine — this is the KEY distinction between the two SNRIs when BP is a concern. Choose duloxetine over venlafaxine in patients with borderline or elevated BP.",
    "HEPATOTOXICITY is duloxetine's signature risk. Avoid in hepatic impairment (Child-Pugh B/C), cirrhosis, and substantial alcohol use (≥3 drinks/day). Check LFTs at baseline. If ALT/AST >3× ULN, discontinue.",
    "Orthostatic hypotension is more common than with SSRIs (NET effect on vasculature). Especially relevant in elderly — measure orthostatic vitals, consider fall-risk assessment.",
    "Duloxetine was originally developed for stress urinary incontinence (SUI) and is still used off-label for it. The SNRI action on the urethral sphincter increases closure pressure. It was withdrawn from the SUI indication after hepatotoxicity concerns, but the mechanism remains clinically useful.",
    "The capsule formulation must NOT be crushed, chewed, or opened — it contains enteric-coated beads. For patients with swallowing difficulty, the Drizalma Sprinkle formulation can be opened and sprinkled on soft food, but the beads themselves must not be crushed or chewed.",
    "Duloxetine is weight-neutral to mildly anorexigenic — useful when weight gain is undesirable (vs mirtazapine or paroxetine which cause weight gain). Decreased appetite is more common than weight gain.",
    "CYP1A2 inhibitors (fluvoxamine, ciprofloxacin) raise duloxetine levels ~5-fold — AVOID this combination. This is duloxetine's MOST clinically significant interaction and is commonly tested.",
    "Discontinuation syndrome is real but LESS severe than venlafaxine (12h vs 5h half-life). Still taper over 2–4 weeks. Substituting fluoxetine (long half-life) for the last few weeks of a taper can smooth discontinuation.",
    "Pain relief can begin at 1–2 weeks — earlier than mood effect (4–6 weeks). Counsel patients accordingly: they may feel less pain before they feel less depressed. This is a feature, not a failure.",
    "Duloxetine is approved for paediatric GAD (≥7 years) but NOT for paediatric MDD — the suicidality signal in paediatric MDD trials led to restricted paediatric approval. Use caution in any patient <25 (black box).",
  ],

  examPearls: [
    "Duloxetine is an SNRI — balanced SERT + NET blockade from dose 1 (NOT dose-dependent like venlafaxine, which is mostly serotonergic until >150 mg/day).",
    "5 FDA indications: MDD, GAD (adults & ≥7 yrs), diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain (low back pain, osteoarthritis). MOST FDA indications of any SNRI/SSRI.",
    "HEPATOTOXICITY — signature serious adverse effect. Avoid in Child-Pugh B/C, cirrhosis, substantial alcohol use (≥3 drinks/day). If ALT/AST >3× ULN, discontinue.",
    "Duloxetine has LESS hypertension than venlafaxine — the KEY distinction between the two SNRIs. Choose duloxetine when BP is a concern.",
    "Orthostatic HYPOTENSION more common than with SSRIs (NET effect on vasculature) — caution in elderly, falls risk.",
    "Metabolised by CYP1A2 AND CYP2D6 (both major). CYP1A2 inhibitors (fluvoxamine, ciprofloxacin) raise levels ~5-fold → AVOID combination. CYP2D6 inhibitors (paroxetine, fluoxetine, bupropion) raise levels more modestly.",
    "Half-life 12 hours — longer than venlafaxine's 5h (so less severe withdrawal) but shorter than SSRIs (sertraline 26h, fluoxetine 1–4 days).",
    "No active metabolite (cleaner PK than venlafaxine, which has active O-desmethylvenlafaxine).",
    "Avoid crushing the capsule — enteric-coated beads. Drizalma Sprinkle can be opened and sprinkled on food but beads must NOT be crushed or chewed.",
    "Originally developed for stress urinary incontinence (SUI) — still used off-label. Withdrawn from SUI indication after hepatotoxicity concerns.",
    "Approved for paediatric GAD (≥7 years) but NOT paediatric MDD — suicidality signal in paediatric MDD trials.",
    "Renal: AVOID if CrCl <30 mL/min (AUC doubles). Hepatic: AVOID in Child-Pugh B/C and cirrhosis.",
    "Weight-neutral to mild weight LOSS (unlike mirtazapine/paroxetine which cause weight gain). Useful when weight gain is undesirable.",
    "Pain relief onset is 1–2 weeks (earlier than mood effect of 4–6 weeks) — descending inhibitory pain pathway via NET.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "DUL = Duloxetine = Dual + Urinary + Liver",
      trick: "DUL — Dual (balanced SERT+NET from dose 1), Urinary incontinence (original indication), Liver caution (hepatotoxicity)",
      remembers: "Duloxetine's three defining features: balanced SNRI mechanism, original SUI development, and signature hepatotoxicity risk.",
    },
    {
      title: "5 D's of Duloxetine FDA Indications",
      trick: "Depression · Generalised anxiety · Diabetic neuropathy · Fibromyalgia (Diffuse pain) · Chronic pain (musculoskeletal)",
      remembers: "Duloxetine has 5 FDA indications — 2 psychiatric (MDD, GAD) + 3 pain (diabetic neuropathy, fibromyalgia, chronic MSK pain). MOST of any antidepressant.",
    },
    {
      title: "BALANCED vs LADDER — Duloxetine vs Venlafaxine",
      trick: "Duloxetine = BALANCED (SERT+NET from dose 1). Venlafaxine = LADDER (SERT first, then NET at >150 mg).",
      remembers: "The single most testable mechanistic distinction between the two SNRIs. Duloxetine blocks both transporters at 30 mg; venlafaxine needs >150 mg for noradrenergic effect.",
    },
    {
      title: "LIVER Avoids — Duloxetine Hepatotoxicity",
      trick: "LIVER — Liver disease (Child-Pugh B/C), Inflammation (cirrhosis), Volume of alcohol ≥3 drinks/day, End-stage renal (CrCl <30), Rare hepatotoxicity — Avoid all five.",
      remembers: "Duloxetine's absolute contraindications cluster around hepatic and renal clearance. Check LFTs at baseline; discontinue if ALT/AST >3× ULN.",
    },
    {
      title: "1A2 = One To Avoid (Duloxetine + Fluvoxamine/Ciprofloxacin)",
      trick: "CYP1A2 + Duloxetine = One Awful combination (5-fold AUC rise). Fluvoxamine and Ciprofloxacin = the Two CYP1A2 inhibitors to AVOID.",
      remembers: "CYP1A2 inhibitors (fluvoxamine, ciprofloxacin, enoxacin) significantly raise duloxetine levels — combination should be AVOIDED. This is duloxetine's most clinically significant interaction.",
    },
    {
      title: "Less HTN, More Falls — Duloxetine vs Venlafaxine vs SSRIs",
      trick: "Duloxetine: Less Hypertension (than venlafaxine), More orthostatic falls (than SSRIs).",
      remembers: "Duloxetine has minimal effect on supine BP (unlike venlafaxine's dose-dependent hypertension) — but causes orthostatic hypotension (NET effect on vasculature) more than SSRIs. Choose duloxetine over venlafaxine when BP is a concern; counsel elderly about standing slowly.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: SNRI — BALANCED SERT + NET blockade from dose 1 (unlike venlafaxine's dose-dependent ladder).",
    "5 FDA indications: MDD, GAD (adults & ≥7 yrs), diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain. MOST of any antidepressant.",
    "Mechanism: Acute balanced SERT+NET blockade (hours) → 5-HT1A + α2 autoreceptor desensitisation (1–2 weeks) → ↓ descending pain pathway (1–2 weeks for pain) + ↑ BDNF/neurogenesis (4–6 weeks for mood).",
    "Onset: pain relief at 1–2 weeks (NET on descending pain pathway); mood effect at 4–6 weeks. Counselling point: pain relief before mood improvement is a feature.",
    "Common side effects: nausea (#1, dual mechanism), dry mouth (NET), somnolence/fatigue, insomnia, headache, dizziness/orthostatic hypotension, constipation, decreased appetite, sweating, sexual dysfunction.",
    "Serious: HEPATOTOXICITY (signature — severe liver injury), orthostatic hypotension/syncope, serotonin syndrome, SIADH, suicidality <25 (black box), bleeding (platelet), activation of mania, discontinuation syndrome (less severe than venlafaxine).",
    "Contraindications: MAOIs (14-day washout), hepatic impairment (Child-Pugh B/C) or cirrhosis, ESRD (CrCl <30), substantial alcohol use (≥3 drinks/day), thioridazine (CYP2D6), hypersensitivity.",
    "Interactions: MAOIs (fatal), CYP1A2 inhibitors (fluvoxamine, ciprofloxacin — AVOID, 5× AUC rise), CYP2D6 inhibitors (paroxetine, fluoxetine, bupropion), tramadol/triptans/St John's Wort (serotonin), NSAIDs/warfarin (bleeding), alcohol (hepatotoxic), diuretics (orthostatic), thioridazine (QTc).",
    "Pharmacokinetics: bioavailability ~50%, peak 6h, half-life 12h, protein-bound >90%, hepatic metabolism via CYP1A2 + CYP2D6, no active metabolite, ~70% renal excretion of metabolites.",
    "Pregnancy: NOT drug of choice (sertraline preferred). Former Category C. Third-trimester neonatal adaptation syndrome. Lactation: acceptable but monitor infant for sedation.",
    "Renal: AVOID if CrCl <30. Hepatic: AVOID if Child-Pugh B/C, cirrhosis, or substantial alcohol use. Check LFTs at baseline.",
    "Capsule must NOT be crushed (enteric-coated beads). Drizalma Sprinkle can be opened onto food but beads must not be chewed.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Depression with diabetic peripheral neuropathy — duloxetine's dual-indication advantage",
      presentation:
        "A 58-year-old man with type 2 diabetes presents with 3 months of low mood, lost 5 kg, sleep disturbance, AND burning bilateral foot pain that has stopped him from his morning walks.",
      history:
        "Ramesh, a 58-year-old man with a 12-year history of type 2 diabetes (HbA1c 8.1%, on metformin + glimepiride) and hypertension (on telmisartan 40 mg), presents to his GP with 3 months of progressive low mood, anhedonia, early-morning awakening, 5 kg unintentional weight loss, and intrusive hopelessness. Concurrently he describes a 4-month history of bilateral burning foot pain, worse at night, with allodynia that has forced him to stop his daily morning walks — previously his main social outlet. He denies suicidal ideation but feels 'life is not worth living like this'. No prior psychiatric history. Drinks 1–2 beers most evenings (~7–10 units/week). No recreational drugs. Father had type 2 diabetes and 'depression' in later life. Works as a school administrator.",
      examination:
        "Alert, oriented, cooperative. Mood '3/10', affect congruent. No psychotic features. PHQ-9 score 16 (moderately severe). GAD-7 score 9 (mild). Numbness and burning in both feet below the ankles; reduced vibration sense at the great toes bilaterally; reduced pinprick sensation in a stocking distribution. 10 g monofilament — felt at 4/6 sites on each foot. Ankle reflexes diminished bilaterally. No foot ulceration. BMI 27. BP 138/86 (no orthostatic drop), HR 78. Abdomen soft, no hepatomegaly. LFTs at baseline: AST 24, ALT 22, bilirubin 12 — all within normal limits. CrCl 78 mL/min. HbA1c 8.1%.",
      diagnosis:
        "Major Depressive Disorder, single episode, moderate, without psychotic features (ICD-10 F32.1). Comorbid: painful diabetic peripheral neuropathy (symmetrical, distal, sensory-predominant, consistent with diabetic distal symmetric polyneuropathy). Differential for pain: peripheral arterial disease (palpable pulses, no claudication — less likely); tarsal tunnel syndrome (bilateral unlikely); B12 deficiency (check level).",
      rationale:
        "Duloxetine chosen because: (1) FDA-approved for BOTH MDD AND diabetic peripheral neuropathic pain — single agent treats both conditions; (2) balanced SNRI mechanism from dose 1 — no need to escalate to unlock noradrenergic pain benefit; (3) less hypertension than venlafaxine (relevant here — patient has hypertension); (4) weight-neutral (he has lost weight, would not tolerate mirtazapine); (5) once-daily dosing improves adherence; (6) normal LFTs and CrCl 78 mL/min make it safe from hepatic/renal perspective. SSRIs (sertraline) would help depression but NOT diabetic neuropathy — would require adding pregabalin or gabapentin (polypharmacy, sedation, dizziness). Venlafaxine is a reasonable alternative but causes more hypertension. Tricyclics (nortriptyline) effective for neuropathy but anticholinergic burden and cardiac risk in this older patient with hypertension make them less attractive.",
      management:
        "Started duloxetine 30 mg once daily in the morning with food for 1 week, then increased to 60 mg once daily. Plan: review at 2 weeks (pain response, tolerability, suicidality, LFTs if symptomatic), 4 weeks (mood response, pain response), 8 weeks (full response assessment). Patient given PHQ-9 self-rating schedule, numeric pain rating scale (0–10), and safety plan with crisis contacts. Counseled: (1) pain may improve within 1–2 weeks — earlier than mood effect; (2) AVOID alcohol completely (additive hepatotoxicity risk) — discussed at length given his current 7–10 units/week; (3) stand slowly from sitting/lying (orthostatic hypotension risk, especially with telmisartan); (4) do NOT crush or open the capsule; (5) report yellow skin/eyes, dark urine, or unexplained fatigue immediately. Continued metformin, glimepiride, telmisartan. Added optimization of diabetes control — HbA1c target <7.0% (diabetes educator referral). Referred for CBT. Discussed that if pain response is inadequate at 60 mg, can titrate to 60 mg BID (max 120 mg/day).",
      outcome:
        "Week 2: nausea (mild, settling) and mild dry mouth. Foot pain reduced from 7/10 to 5/10 — patient reports sleeping better because pain is less. No orthostatic symptoms. Has reduced alcohol to 2 beers/week. LFTs unchanged. Week 4: PHQ-9 11 (31% reduction — early response), foot pain 3/10, has resumed short walks (15 min). Mood 5/10. Week 8: PHQ-9 6 (62% reduction — treatment response), foot pain 2/10, walks 30 min daily. Sleep restored. Weight stable. HbA1c improved to 7.4% with better adherence to diabetes regimen (he credits improved mood for better self-care). CBT ongoing. LFTs checked at week 8 — normal. Plan: continue duloxetine 60 mg/day for at least 12 months from remission, then consider taper. Annual LFTs while on therapy; sooner if symptoms.",
      teachingPoints: [
        "When depression and neuropathic pain coexist (very common in diabetes), duloxetine is uniquely suited — single agent, two FDA indications, balanced mechanism from dose 1.",
        "Pain relief often precedes mood improvement with duloxetine (1–2 weeks vs 4–6 weeks). Use this to counsel patients and maintain adherence during the early 'mood-hasn't-improved-yet' window.",
        "Alcohol counselling is essential — substantial alcohol use (≥3 drinks/day) is a contraindication due to hepatotoxicity. Even moderate drinkers should reduce. Document the conversation.",
        "Orthostatic hypotension is more common than with SSRIs (NET effect). Check orthostatic vitals, especially in patients already on antihypertensives like telmisartan.",
        "Baseline LFTs are essential. Normal LFTs do not eliminate risk — counsel patient to report symptoms of liver injury (jaundice, dark urine, RUQ pain, fatigue) at any point during therapy.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Duloxetine vs Venlafaxine vs Sertraline vs Mirtazapine",
      primaryDrug: "Duloxetine",
      rows: [
        {
          attribute: "Mechanism",
          primaryValue: "BALANCED SERT + NET blockade from dose 1",
          comparisons: [
            { drug: "Venlafaxine", value: "DOSE-DEPENDENT ladder — SERT first, NET only >150 mg/day" },
            { drug: "Sertraline", value: "SERT only (SSRI)" },
            { drug: "Mirtazapine", value: "α2 antagonist + 5-HT2/5-HT3 blockade (NaSSA)" },
          ],
        },
        {
          attribute: "FDA pain indications",
          primaryValue: "3 (diabetic neuropathy, fibromyalgia, chronic MSK pain) — MOST of any antidepressant",
          comparisons: [
            { drug: "Venlafaxine", value: "None (off-label neuropathic pain)" },
            { drug: "Sertraline", value: "None" },
            { drug: "Mirtazapine", value: "None" },
          ],
        },
        {
          attribute: "Hepatotoxicity risk",
          primaryValue: "SIGNATURE — avoid in hepatic impairment, cirrhosis, heavy alcohol use",
          comparisons: [
            { drug: "Venlafaxine", value: "Lower — dose reduction in hepatic impairment, not contraindicated" },
            { drug: "Sertraline", value: "Rare — reduce dose in hepatic impairment" },
            { drug: "Mirtazapine", value: "Rare — but monitor LFTs" },
          ],
        },
        {
          attribute: "Effect on blood pressure",
          primaryValue: "Minimal supine BP effect; orthostatic hypotension (NET)",
          comparisons: [
            { drug: "Venlafaxine", value: "DOSE-DEPENDENT HYPERTENSION — monitor BP, especially >225 mg/day" },
            { drug: "Sertraline", value: "Minimal" },
            { drug: "Mirtazapine", value: "Minimal — occasional orthostatic" },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "12 hours",
          comparisons: [
            { drug: "Venlafaxine", value: "5 hours (parent) + 11 hours (active metabolite)" },
            { drug: "Sertraline", value: "26 hours" },
            { drug: "Mirtazapine", value: "20–40 hours" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "Moderate (12h half-life) — less severe than venlafaxine",
          comparisons: [
            { drug: "Venlafaxine", value: "WORST of all antidepressants — severe even with short missed doses" },
            { drug: "Sertraline", value: "Mild–moderate" },
            { drug: "Mirtazapine", value: "Mild" },
          ],
        },
        {
          attribute: "Active metabolite",
          primaryValue: "None (cleaner PK)",
          comparisons: [
            { drug: "Venlafaxine", value: "O-desmethylvenlafaxine (active, similar potency)" },
            { drug: "Sertraline", value: "N-desmethylsertraline (weak, 2.5× longer half-life)" },
            { drug: "Mirtazapine", value: "Multiple metabolites, modest activity" },
          ],
        },
        {
          attribute: "Weight effect",
          primaryValue: "Weight-neutral to mild weight LOSS",
          comparisons: [
            { drug: "Venlafaxine", value: "Weight-neutral" },
            { drug: "Sertraline", value: "Mild weight gain" },
            { drug: "Mirtazapine", value: "SIGNIFICANT weight gain (also increases appetite)" },
          ],
        },
        {
          attribute: "Sedation profile",
          primaryValue: "Variable — can be activating OR sedating ('wired-tired')",
          comparisons: [
            { drug: "Venlafaxine", value: "Often activating" },
            { drug: "Sertraline", value: "Mildly activating" },
            { drug: "Mirtazapine", value: "SEDATING — give at night; useful for insomnia" },
          ],
        },
        {
          attribute: "Best niche",
          primaryValue: "Depression + pain (diabetic neuropathy, fibromyalgia, chronic MSK pain)",
          comparisons: [
            { drug: "Venlafaxine", value: "Treatment-resistant depression; when BP not a concern" },
            { drug: "Sertraline", value: "First-line SSRI; pregnancy; anxiety disorders" },
            { drug: "Mirtazapine", value: "Depression with insomnia + weight loss; augmentation" },
          ],
        },
      ],
      takeaway:
        "Duloxetine = the PAIN SNRI — only antidepressant with 3 FDA pain indications, balanced SERT+NET from dose 1, less hypertension than venlafaxine BUT hepatotoxicity risk. Venlafaxine = classical SNRI ladder — useful when BP is not a concern but watch BP. Sertraline = first-line SSRI when no pain component and pregnancy/lactation matter. Mirtazapine = sedating, weight-gaining — useful when insomnia and weight loss are part of the depression picture.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute balanced SERT + NET blockade",
      description:
        "Duloxetine blocks BOTH SERT and NET within hours of the first 30 mg dose — unlike venlafaxine's dose-dependent ladder. Synaptic serotonin AND norepinephrine rise simultaneously. Side effects (nausea, dry mouth, somnolence) often appear here.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "Descending pain pathway activates",
      description:
        "Norepinephrine acting on the descending inhibitory pathway (locus coeruleus → dorsal horn of spinal cord) begins to suppress incoming nociceptive signals. Patients with neuropathic or musculoskeletal pain may notice benefit within the first week — earlier than mood effect.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–2",
      title: "Pain relief emerges; autoreceptors desensitise",
      description:
        "Pain benefit typically becomes clinically meaningful at 1–2 weeks. Simultaneously, somatodendritic 5-HT1A and α2 autoreceptors begin to desensitise — removing the brake on serotonin and norepinephrine firing toward the prefrontal cortex.",
      phase: "onset",
    },
    {
      id: "t4",
      time: "Weeks 2–4",
      title: "Early mood improvement; BDNF rises",
      description:
        "BDNF expression rises in the hippocampus. Postsynaptic receptor downregulation occurs. Sleep, appetite, and energy often improve first — before mood. Sexual side effects typically emerge here.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 4–6",
      title: "Full antidepressant effect",
      description:
        "Steady-state serotonin and norepinephrine levels and full downstream adaptations achieved. Mood, anxiety, and energy typically reach maximum improvement for depression. Side effects usually stabilise. Pain relief continues to mature.",
      phase: "peak",
    },
    {
      id: "t6",
      time: "Weeks 8–12",
      title: "Full therapeutic effect (anxiety; pain maintenance)",
      description:
        "Generalised anxiety may take 8–12 weeks for full response. For pain indications, this is the window to assess whether dose escalation (to 60 mg BID, max 120 mg/day) is needed if response is partial at 60 mg/day.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Tapered withdrawal",
      description:
        "Sudden cessation causes discontinuation syndrome (dizziness, 'brain zaps', nausea, irritability). Taper over at least 2–4 weeks. Less severe than venlafaxine (12h vs 5h half-life) but more than fluoxetine. Substituting fluoxetine (long half-life) for the last few weeks of a taper can smooth discontinuation.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why is alcohol so dangerous with duloxetine?",
      answer:
        "Duloxetine can cause liver injury on its own — and alcohol also damages the liver. The combination significantly raises the risk of severe hepatitis. The FDA specifically contraindicates duloxetine in people who drink ≥3 alcoholic drinks per day. Even if you drink less, you should minimise alcohol use while on duloxetine. Tell your doctor honestly about how much you drink so they can decide if duloxetine is right for you.",
    },
    {
      question: "Can I open or crush the duloxetine capsule?",
      answer:
        "NO — the standard Cymbalta/Duzela capsule contains enteric-coated beads and must be swallowed whole. Crushing, chewing, or opening the capsule releases all the medicine at once and irritates your stomach. If you have trouble swallowing pills, ask your doctor about Drizalma Sprinkle — this formulation can be opened and the beads sprinkled on soft food (like applesauce), but the beads themselves still must NOT be chewed or crushed.",
    },
    {
      question: "Why does my doctor check my liver blood tests (LFTs)?",
      answer:
        "Duloxetine can rarely cause serious liver injury. Your doctor checks LFTs at baseline to make sure your liver is healthy before starting, and may recheck them if you develop symptoms like yellow skin/eyes, dark urine, pale stools, right-sided belly pain, or unexplained fatigue. If your liver tests rise above 3 times the normal limit, duloxetine is usually stopped. Routine repeated LFT testing is not needed if you feel well — but always report the symptoms above immediately.",
    },
    {
      question: "How is duloxetine different from venlafaxine — both are SNRIs?",
      answer:
        "Both block serotonin and norepinephrine reuptake, but duloxetine blocks BOTH from the very first dose (balanced), while venlafaxine is mostly serotonergic until doses exceed 150 mg/day. Duloxetine also has less effect on blood pressure (venlafaxine can cause dose-dependent hypertension), a longer half-life (12h vs 5h — so less severe withdrawal), no active metabolite, and a signature risk of liver injury. Duloxetine has 3 FDA pain indications; venlafaxine has none.",
    },
    {
      question: "Will duloxetine help my pain — and how soon?",
      answer:
        "If you have diabetic nerve pain, fibromyalgia, or chronic low back/arthritis pain, duloxetine is FDA-approved for these conditions and can help. Pain relief often begins within 1–2 weeks — earlier than the mood effect, which takes 4–6 weeks. So you may notice less pain before you feel less depressed. If you have no response after 2 weeks at full dose (60 mg/day), your doctor may increase to 60 mg twice daily (maximum 120 mg/day).",
    },
    {
      question: "I feel dizzy when I stand up — is that the duloxetine?",
      answer:
        "Yes — duloxetine can cause dizziness on standing (orthostatic hypotension), more so than SSRIs like sertraline. This is due to the norepinephrine effect on blood vessels. To minimise it: stand up slowly from sitting or lying, drink plenty of fluids, and avoid getting dehydrated. If you are elderly or on blood pressure medicines, your doctor may need to adjust. If you actually faint or fall, contact your doctor promptly.",
    },
    {
      question: "Is duloxetine addictive?",
      answer:
        "No — duloxetine is not addictive in the way that alcohol, opioids, or benzodiazepines are. It does not cause cravings, escalating use, or intoxication. However, stopping suddenly after several weeks of use can cause uncomfortable discontinuation symptoms (dizziness, 'brain zaps', nausea, irritability), so always come off it slowly with your doctor's guidance. Discontinuation with duloxetine is generally less severe than with venlafaxine but more than with fluoxetine.",
    },
    {
      question: "Can I take duloxetine if I'm pregnant or breastfeeding?",
      answer:
        "Duloxetine is NOT the antidepressant of choice in pregnancy — sertraline is preferred when an SSRI will do. However, if you have both depression AND significant pain (for example, severe fibromyalgia), and an SNRI is genuinely needed, duloxetine may be considered after specialist consultation. Untreated depression also carries risks to mother and baby. In breastfeeding, duloxetine passes into milk but is generally considered acceptable if the SNRI is necessary — monitor the baby for sedation or poor feeding. Never stop duloxetine suddenly if you become pregnant — talk to your doctor first.",
    },
  ],

  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder, 3rd edition",
      },
      {
        source: "NICE Clinical Guideline CG91 — Depression in adults: recognition and management",
      },
      {
        source: "American Diabetes Association Standards of Medical Care in Diabetes — Neuropathy chapter",
        section: "Pharmacologic management of neuropathic pain (duloxetine as first-line)",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents (SNRI section)",
      },
      {
        source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
        section: "Section V — Pharmacotherapy of Mood Disorders; SNRIs",
      },
      {
        source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition",
        section: "Chapter 36 — Psychopharmacology; SNRIs",
      },
    ],
    trials: [
      {
        source: "Goldstein DJ, Lu Y, Detke MJ, et al. Duloxetine in the treatment of depression: a double-blind placebo-controlled comparison with paroxetine. J Clin Psychopharmacol 2004;24:389-399.",
      },
      {
        source: "Goldstein DJ, Lu Y, Detke MJ, et al. Effects of duloxetine on painful physical symptoms associated with depression. Psychosomatics 2004;45:17-28.",
        section: "Diabetic peripheral neuropathic pain pivotal trial",
      },
      {
        source: "Arnold LM, Lu Y, Crofford LJ, et al. A double-blind, multicenter trial comparing duloxetine with placebo in the treatment of fibromyalgia patients with or without major depressive disorder. Arthritis Rheum 2004;50:2974-2984.",
      },
    ],
    reviews: [
      {
        source: "Cipriani A, Furukawa TA, Salanti G, et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366.",
      },
      {
        source: "Lunn MP, Hughes RA, Wiffen PJ. Duloxetine for treating painful neuropathy, chronic pain or fibromyalgia. Cochrane Database Syst Rev 2014;(1):CD007115.",
      },
      {
        source: "FDA Prescribing Information — CYMBALTA (duloxetine hydrochloride)",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/021427s053lbl.pdf",
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
      name: "Venlafaxine",
      slug: "venlafaxine",
      drugClass: "SNRI",
      relationship: "Fellow SNRI — but dose-dependent SERT→NET ladder (mostly serotonergic until >150 mg/day). More hypertension, shorter half-life (5h), more severe withdrawal. No hepatotoxicity signature. No FDA pain indications.",
    },
    {
      name: "Sertraline",
      slug: "sertraline",
      drugClass: "SSRI",
      relationship: "Alternative when only mood/anxiety (no pain component). SSRI of choice in pregnancy/lactation. No pain efficacy. Less hepatotoxic. No orthostatic hypotension.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship: "Alternative SSRI. Longest half-life (1–4 days with active metabolite) → mildest discontinuation. More activating. Useful when withdrawal is a concern.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      drugClass: "SSRI",
      relationship: "Alternative SSRI with lowest CYP interaction profile — preferred in patients on complex regimens. No pain efficacy.",
    },
    {
      name: "Paroxetine",
      slug: "paroxetine",
      drugClass: "SSRI",
      relationship: "Caution — paroxetine is a strong CYP2D6 inhibitor and would raise duloxetine levels significantly if combined. Avoid co-prescription.",
    },
    {
      name: "Bupropion",
      drugClass: "NDRI",
      relationship: "Augmentation partner for partial response. Also reverses duloxetine-induced sexual dysfunction. Avoid in seizure disorder and eating disorders.",
    },
    {
      name: "Mirtazapine",
      drugClass: "NaSSA",
      relationship: "Augmentation partner. Sedating — useful if insomnia prominent. Causes weight gain (contrast with duloxetine's weight neutrality). Improves sleep and appetite.",
    },
    {
      name: "Pregabalin / Gabapentin",
      drugClass: "Gabapentinoid (calcium channel modulator)",
      relationship: "Non-antidepressant alternative for neuropathic pain and fibromyalgia. May be combined with duloxetine for severe pain, but additive sedation and dizziness — caution in elderly.",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Generalised Anxiety Disorder", relationship: "primary" },
    { name: "Diabetic Peripheral Neuropathic Pain", relationship: "primary" },
    { name: "Fibromyalgia", relationship: "primary" },
    { name: "Chronic Low Back Pain", relationship: "primary" },
    { name: "Osteoarthritis (chronic pain)", relationship: "primary" },
    { name: "Stress Urinary Incontinence", relationship: "off-label" },
    { name: "Chemotherapy-Induced Peripheral Neuropathy", relationship: "off-label" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Duloxetine", type: "drug", href: "/drugs/duloxetine", note: "The drug you're reading about" },
    { label: "SNRI", type: "class", href: "#mechanism", note: "Serotonin-Norepinephrine Reuptake Inhibitor — BALANCED from dose 1" },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "Mood, anxiety, GI" },
    { label: "Norepinephrine (NE)", type: "neurotransmitter", href: "#mechanism", note: "Drive, energy, pain modulation" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "Blocked by duloxetine" },
    { label: "NET (norepinephrine transporter)", type: "neurotransmitter", href: "#mechanism", note: "Blocked by duloxetine — KEY difference from SSRIs" },
    { label: "Descending Pain Pathway", type: "pathway", href: "#mechanism", note: "NE-driven inhibition at dorsal horn — basis for pain efficacy" },
    { label: "Hepatotoxicity", type: "side-effect", href: "#side-effects", note: "SIGNATURE serious adverse effect — avoid in liver disease & heavy alcohol use" },
    { label: "5 FDA Indications", type: "condition", href: "#clinical-uses", note: "MDD, GAD, diabetic neuropathy, fibromyalgia, chronic MSK pain — MOST of any antidepressant" },
    { label: "Major Depressive Disorder", type: "condition", href: "#clinical-uses", note: "Primary psychiatric indication" },
    { label: "Generalised Anxiety Disorder", type: "condition", href: "#clinical-uses", note: "Approved in adults & ≥7 years" },
    { label: "Diabetic Peripheral Neuropathy", type: "condition", href: "#clinical-uses", note: "Signature pain indication #1" },
    { label: "Fibromyalgia", type: "condition", href: "#clinical-uses", note: "Signature pain indication #2" },
    { label: "Chronic Musculoskeletal Pain", type: "condition", href: "#clinical-uses", note: "Signature pain indication #3 — low back pain & osteoarthritis" },
    { label: "Orthostatic Hypotension", type: "side-effect", href: "#side-effects", note: "More than SSRIs (NET effect) — falls risk in elderly" },
    { label: "Patient Guide — Duloxetine & Your Liver", type: "patient-guide", href: "#patient-education", note: "Why alcohol must be avoided and LFTs are checked" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A medicine that helps your brain keep more of two chemicals (serotonin and norepinephrine) available for longer — used for depression, anxiety, AND certain kinds of chronic pain.",
    summary:
      "Duloxetine belongs to a class called SNRIs. It is unique because it treats both mood disorders (depression, anxiety) AND certain types of chronic pain (diabetic nerve pain, fibromyalgia, chronic back pain, arthritis pain). For pain, you may notice benefit within 1–2 weeks; for mood, the full effect usually takes 4–6 weeks. Important: duloxetine can affect your liver, so you must avoid alcohol (especially 3 or more drinks per day) and tell your doctor about any liver disease. Don't crush the capsule.",
    mechanism:
      "Your brain uses two chemicals — serotonin and norepinephrine — to regulate mood, anxiety, energy, AND how your brain processes pain signals. Normally, after these chemicals are released between nerve cells, they get quickly taken back up (recycled). Duloxetine blocks this recycling for BOTH chemicals — so more of each stays available between the nerve cells for longer. Over a few weeks, this helps your brain's mood and pain systems work better — but it doesn't happen immediately. The norepinephrine part is what makes duloxetine work for pain, which is why SSRIs (which only affect serotonin) don't help with chronic pain.",
    sideEffects:
      "Most people get some side effects in the first 1–2 weeks — usually nausea (especially at first), dry mouth, sleep changes (either sleepiness or trouble sleeping), headache, or dizziness on standing. These usually settle as your body adapts. Dizziness on standing is more common with duloxetine than with most other antidepressants — stand up slowly. Decreased appetite and mild weight loss can occur. Sexual side effects are also possible. SERIOUS: yellow skin or eyes, dark urine, right-sided belly pain, or severe fatigue could be liver injury — report immediately and avoid alcohol. High fever with confusion and shaking could be serotonin syndrome (emergency). Feeling worse or having new suicidal thoughts in the first month needs immediate medical review.",
    monitoring:
      "Your doctor will check your liver blood tests before starting duloxetine. They may recheck them if you develop symptoms of liver injury. They'll also check your blood pressure (including standing up). You'll have check-ins at 2 weeks, 4 weeks, and 8 weeks to see how your mood and pain are responding. You may be asked to fill in short questionnaires (PHQ-9 for mood, a pain scale for pain). If you're over 65, your doctor may check your blood sodium in the first 2 weeks.",
    contraindications:
      "Don't take duloxetine if you have significant liver disease (cirrhosis, severe hepatitis), if you drink 3 or more alcoholic drinks per day, if you have severe kidney disease (dialysis), if you've taken a MAOI antidepressant in the last 14 days (dangerous combination), or if you take thioridazine (for schizophrenia). Tell your doctor about all your medical conditions — especially liver, kidney, heart, eye (glaucoma), and seizure disorders.",
    interactions:
      "The MOST IMPORTANT thing: avoid alcohol — it significantly raises the risk of liver damage. Tell your pharmacist about everything you take, including over-the-counter products, because several medicines interact with duloxetine. The most important to mention: fluvoxamine or ciprofloxacin (antibiotic) — these can raise duloxetine levels dangerously; other antidepressants (especially paroxetine, fluoxetine); tramadol (pain) and triptans (migraine); blood thinners (warfarin, aspirin, NSAIDs like ibuprofen); and herbal products like St John's Wort.",
  },

  /* ---- India-first extensions ---- */

  /* Indian clinical practice */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      { name: "Cymbalta", manufacturer: "Lilly", strengths: "20mg, 30mg, 60mg", note: "Innovator brand; higher cost" },
      { name: "Duzela", manufacturer: "Sun Pharma", strengths: "20mg, 30mg, 60mg", note: "Among the most commonly prescribed duloxetine brands in India" },
      { name: "Dulane", manufacturer: "Cipla", strengths: "20mg, 30mg, 60mg" },
      { name: "Symbal", manufacturer: "Intas", strengths: "20mg, 30mg, 60mg" },
      { name: "Dulot", manufacturer: "Sun Pharma", strengths: "20mg, 30mg, 60mg" },
    ],
    typicalDoses:
      "Depression/GAD: start 30mg OD × 1 week, then 60mg OD. Most patients respond at 60mg; some require 90–120mg (max 120mg). Diabetic neuropathy/fibromyalgia/chronic musculoskeletal pain: start 30mg OD × 1 week, then 60mg OD. In Indian private practice, 60mg OD is the workhorse dose — higher doses are uncommon due to cost and hepatotoxicity concerns. The capsule must be swallowed whole (do not crush/chew/open).",
    prescribingScenarios: [
      "First-line SNRI when depression is comorbid with neuropathic pain, fibromyalgia, or chronic musculoskeletal pain — single drug treats both indications.",
      "Preferred SNRI in diabetic patients with peripheral neuropathic pain and comorbid depression (FDA-approved for both).",
      "Alternative to venlafaxine when BP elevation is a concern (duloxetine has less BP effect than venlafaxine).",
      "Useful in elderly patients with chronic pain + depression (lower BP risk than venlafaxine, but hepatotoxicity caution needed).",
      "Sometimes preferred over pregabalin/gabapentin for diabetic neuropathy when comorbid depression/anxiety is present — single agent addresses both.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: true,
      urban: true,
      rural: false,
      note: "NOT routinely available in government hospital formularies or District Mental Health Programme (DMHP) centres. SSRIs (sertraline, fluoxetine) and amitriptyline are preferred in government settings due to cost. Widely available in urban private pharmacies. Rural availability is limited; for diabetic neuropathy in government settings, pregabalin, gabapentin, or amitriptyline are used instead.",
    },
    costCategory: "moderate",
    costNote: "Duloxetine is moderately expensive in India. Branded Duzela/Dulane/Symbal cost approximately ₹10–18 per 60mg capsule; Cymbalta (innovator) costs ₹30–50 per capsule. Generic duloxetine is available but less commonly stocked than generic SSRIs. NOT commonly available in Jan Aushadhi Kendras. For pure depression (without pain), generic SSRIs are far more cost-effective. For diabetic neuropathy in cost-sensitive settings, amitriptyline or pregabalin generic may be preferred.",
    monitoring:
      "Liver function tests (LFTs) at baseline are essential — duloxetine's signature safety issue is hepatotoxicity. Recheck LFTs if symptoms of liver injury (jaundice, dark urine, right upper quadrant pain, fatigue) develop. BP monitoring is less intense than for venlafaxine but still recommended at baseline and periodically. PHQ-9 for mood response; pain scale for pain indications. In elderly: serum sodium in first 2 weeks (SIADH risk). Standing BP in elderly (orthostatic hypotension risk). Patients must be counselled to AVOID alcohol (additive hepatotoxicity).",
    patientCounselling: [
      "Take the capsule once daily, at the same time every day, with or without food. Do NOT crush, chew, or open the capsule — swallow it whole.",
      "AVOID alcohol completely — duloxetine can affect your liver, and alcohol significantly raises the risk of liver damage. If you drink 3 or more drinks per day, do NOT take duloxetine.",
      "Tell your doctor immediately if you develop yellow skin or eyes, dark urine, right-sided belly pain, or severe fatigue — these could be signs of liver injury.",
      "It may take 1–2 weeks to notice pain relief, and 4–6 weeks for the full effect on mood. Don't stop early.",
      "Stand up slowly from sitting or lying — duloxetine can cause dizziness on standing, especially at first.",
      "Common side effects in the first 1–2 weeks: nausea (especially at first), dry mouth, sleep changes (sleepiness or trouble sleeping), headache, decreased appetite. These usually settle.",
      "If you feel worse, more agitated, or have new suicidal thoughts in the first month, contact your doctor immediately or call Tele-MANAS at 14416.",
      "Sexual side effects (reduced interest, difficulty reaching orgasm) are possible — talk to your doctor if this bothers you.",
      "Do NOT stop suddenly — your doctor will help you reduce the dose gradually. Stopping suddenly can cause dizziness, nausea, headache, and 'brain zaps'.",
      "Tell your pharmacist about ALL your medicines — duloxetine interacts with several common drugs (especially fluvoxamine, ciprofloxacin, blood thinners, and other antidepressants).",
    ],
  },

  /* NMC CBME competency mapping */
  cbmeMapping: {
    subject: "Pharmacology",
    mbbsYear: "Second Professional",
    topic: "Drugs acting on Central Nervous System — Antidepressants (SNRIs) and Neuropathic Pain Pharmacology",
    competencyCodes: ["PH7.3", "PH7.4", "PY3.2"],
    competencyDescriptions: [
      "PH7.3: Describe the mechanism of action, pharmacological actions, adverse effects, contraindications, and therapeutic uses of antidepressant drugs with emphasis on SNRIs and the role of duloxetine in pain management.",
      "PH7.4: Explain the rationale for drug selection, dose individualisation, and monitoring of SNRI therapy in different clinical scenarios including comorbid depression and neuropathic pain.",
      "PY3.2 (Psychiatry, Final Professional): Describe the pharmacological management of depression with comorbid pain, anxiety disorders, and the role of duloxetine with attention to hepatotoxicity and CYP1A2 interactions.",
    ],
    integrationSubjects: ["Psychiatry", "General Medicine (Diabetology/Pain Medicine)", "Community Medicine"],
  },

  /* Exam Lens — structured by Indian examination */
  examLens: {
    mbbs: {
      viva: [
        "What is the mechanism of action of duloxetine? (Balanced SERT + NET blockade from the first dose — unlike venlafaxine's dose-dependent pharmacology.)",
        "Why is duloxetine useful in neuropathic pain? (NET blockade enhances descending inhibitory pain pathways in the spinal cord — this is why it works for diabetic neuropathy, fibromyalgia, and chronic musculoskeletal pain.)",
        "Name the 5 FDA-approved indications for duloxetine. (MDD, GAD, Diabetic Peripheral Neuropathic Pain, Fibromyalgia, Chronic Musculoskeletal Pain — 3 pain + 2 psych.)",
        "What is the signature adverse effect of duloxetine? (Hepatotoxicity — FDA warning. Avoid in liver disease, cirrhosis, and substantial alcohol use.)",
        "Which CYP enzyme interactions are important with duloxetine? (CYP1A2 substrate — fluvoxamine and ciprofloxacin inhibit and raise duloxetine levels. Moderate CYP2D6 inhibitor — raises TCA, metoprolol, thioridazine levels.)",
        "How does duloxetine differ from venlafaxine? (Balanced from dose 1 vs dose-dependent; hepatotoxicity vs hypertension; 3 pain FDA indications vs 0; longer half-life 12h vs 5h; less severe discontinuation.)",
      ],
      practical: [
        "Counsel a diabetic patient starting duloxetine for painful peripheral neuropathy with comorbid depression — address LFTs, alcohol avoidance, and dual benefit.",
        "Write a prescription for duloxetine for a 55-year-old with diabetic neuropathy and depression (start 30mg OD × 7d, then 60mg OD).",
        "Identify contraindications of duloxetine from a given clinical scenario (e.g., patient with cirrhosis or on fluvoxamine).",
        "Explain why duloxetine is preferred over venlafaxine in a patient with hypertension and neuropathic pain.",
      ],
      longAnswer: [
        "Classify antidepressants. Describe the mechanism of action, pharmacokinetics, adverse effects, and therapeutic uses of SNRIs with special reference to duloxetine. Discuss the unique pain indications, hepatotoxicity profile, and CYP1A2 interactions.",
        "A 55-year-old diabetic presents with burning pain in both feet and symptoms of depression. Discuss the pharmacological management, including the rationale for duloxetine, dosing, monitoring (LFTs, pain scale, PHQ-9), and patient counselling.",
      ],
    },
    neetPg: {
      highYield: [
        "Duloxetine = balanced SNRI from dose 1 (SERT + NET) — unlike venlafaxine which is dose-dependent.",
        "Duloxetine = only antidepressant with THREE separate FDA pain indications: diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain. Total 5 FDA indications (3 pain + 2 psych: MDD, GAD).",
        "Hepatotoxicity = signature adverse effect. FDA warning. Avoid in liver disease, cirrhosis, substantial alcohol use (≥3 drinks/day).",
        "Less hypertension than venlafaxine — preferred SNRI when BP is a concern.",
        "CYP1A2 substrate — fluvoxamine and ciprofloxacin (CYP1A2 inhibitors) raise duloxetine levels dangerously. Avoid combination.",
        "Moderate CYP2D6 inhibitor — raises levels of TCAs, metoprolol, propafenone, thioridazine (the latter is contraindicated).",
        "Half-life: 12 hours (longer than venlafaxine's 5h) — less severe discontinuation syndrome than venlafaxine.",
        "Renal: avoid in CrCl <30 mL/min (plasma levels double). No dose adjustment in mild-moderate renal impairment.",
        "Paediatric GAD ≥7 years — one of the few antidepressants with a paediatric anxiety indication.",
        "Duloxetine vs venlafaxine: balanced vs dose-dependent; hepatotoxicity vs hypertension; 3 pain FDA vs 0; less withdrawal than venlafaxine.",
      ],
      pyqConcepts: [
        "NEET PG 2022: Antidepressant of choice for a diabetic with painful peripheral neuropathy and depression? (Answer: Duloxetine — FDA-approved for both, single agent addresses both indications.)",
        "NEET PG 2021: Duloxetine is contraindicated in which of the following? (Answer: Cirrhosis / substantial alcohol use / CrCl <30 — all increase hepatotoxicity or accumulation risk.)",
        "NEET PG 2020: Which antidepressant has 3 separate FDA-approved pain indications? (Answer: Duloxetine — diabetic neuropathy, fibromyalgia, chronic musculoskeletal pain.)",
        "NEET PG 2019: A patient on duloxetine is prescribed ciprofloxacin for UTI. What is the concern? (Answer: Ciprofloxacin is a CYP1A2 inhibitor — raises duloxetine levels → toxicity. Avoid combination or reduce duloxetine dose.)",
        "INICET 2021: Duloxetine vs venlafaxine — which has less risk of hypertension? (Answer: Duloxetine — preferred SNRI when BP is a concern.)",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 55-year-old diabetic with HbA1c 9.2% presents with burning bilateral foot pain (8/10) and PHQ-9 score of 14. Which antidepressant is preferred and why? (Answer: Duloxetine 30mg → 60mg OD. FDA-approved for BOTH diabetic peripheral neuropathic pain AND MDD — single agent addresses both. Also improves glycaemic-control-related mood. Monitor LFTs, avoid alcohol, counsel on 1–2 week pain onset vs 4–6 week mood onset.)",
        "A 60-year-old on duloxetine 60mg for fibromyalgia for 6 months develops new jaundice and dark urine. LFTs show ALT 350, bilirubin 4.5. What is the diagnosis and management? (Answer: Duloxetine-induced hepatotoxicity. Stop duloxetine immediately, refer to hepatology, supportive care. Avoid all hepatotoxic drugs including paracetamol high-dose. Switch to a non-hepatotoxic antidepressant (sertraline) for mood if needed after liver recovery.)",
        "A 45-year-old on duloxetine 60mg for depression is prescribed fluvoxamine for new OCD symptoms by another doctor. What is the concern? (Answer: Fluvoxamine is a potent CYP1A2 inhibitor — duloxetine is a CYP1A2 substrate. Combination raises duloxetine levels → toxicity (serotonin syndrome, hepatotoxicity, severe nausea). Avoid combination. Use sertraline for OCD instead, or reduce duloxetine dose significantly if fluvoxamine is essential.)",
        "A patient with depression and uncontrolled hypertension (BP 156/98) needs an SNRI. Which is preferred — venlafaxine or duloxetine? (Answer: Duloxetine — it has significantly less BP effect than venlafaxine. Control BP first, then initiate duloxetine 30mg → 60mg with ongoing BP monitoring. Venlafaxine is contraindicated in uncontrolled HTN.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Duloxetine mechanism: balanced SERT + NET blockade from dose 1.",
        "5 FDA indications: MDD, GAD, diabetic neuropathy, fibromyalgia, chronic musculoskeletal pain.",
        "Signature adverse effect: hepatotoxicity — avoid in liver disease and heavy alcohol use.",
        "CYP1A2 substrate — fluvoxamine and ciprofloxacin raise duloxetine levels.",
        "Moderate CYP2D6 inhibitor — raises TCA, metoprolol, thioridazine levels.",
        "Less hypertension than venlafaxine.",
        "Avoid in CrCl <30 mL/min (renal excretion).",
        "Half-life 12 hours — longer than venlafaxine.",
        "Preferred antidepressant for diabetic neuropathy with comorbid depression.",
        "Paediatric GAD ≥7 years approved.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Duloxetine is the ONLY antidepressant with THREE separate FDA-approved pain indications. This reflects its balanced SERT+NET blockade — the noradrenergic component enhances descending inhibitory pain pathways in the spinal cord, providing analgesia independent of its antidepressant effect. Pain benefit may appear at 1–2 weeks, earlier than the 4–6 week mood effect.",
        "The hepatotoxicity risk is dose-independent to some extent — even therapeutic doses can cause liver injury in susceptible individuals. However, the risk is highest in patients with pre-existing liver disease, cirrhosis, or substantial alcohol use. The FDA Cymbalta label explicitly contraindicates duloxetine in patients with ≥3 alcoholic drinks per day.",
        "CYP1A2 substrate status is clinically critical and often missed. Fluvoxamine (potent CYP1A2 inhibitor) and ciprofloxacin (commonly prescribed antibiotic in India) can raise duloxetine levels 3–5×, causing toxicity. Always ask about these drugs before prescribing duloxetine. If co-prescription is unavoidable, reduce duloxetine dose by 50%.",
        "Duloxetine is a moderate CYP2D6 inhibitor — weaker than paroxetine/fluoxetine but still clinically relevant. It raises levels of TCAs, metoprolol, propafenone, and thioridazine (the latter is contraindicated). Check for CYP2D6 substrates before prescribing.",
        "In diabetic neuropathy, duloxetine is preferred over pregabalin/gabapentin when comorbid depression/anxiety is present — a single agent treats both conditions. However, in pure painful diabetic neuropathy without mood disorder, pregabalin or gabapentin are equally effective and have a different (potentially more tolerable) side-effect profile.",
        "Discontinuation syndrome is less severe than venlafaxine (longer half-life 12h vs 5h) but still present. Taper over 2–4 weeks minimum. Symptoms: dizziness, nausea, headache, 'brain zaps', irritability. Less need for fluoxetine bridging than with venlafaxine.",
        "Paediatric GAD approval (≥7 years) is unique among SNRIs and rare among antidepressants overall (only fluoxetine for paediatric depression ≥8 years, escitalopram ≥12 years, and duloxetine for paediatric GAD ≥7 years). Monitor for suicidality (black box warning).",
      ],
    },
  },

  /* International vs Indian guideline comparisons */
  guidelineComparisons: [
    {
      topic: "Role of duloxetine in depression with comorbid pain",
      internationalSource: "NICE CG91 / NICE Neuropathic Pain Guideline (CG173)",
      internationalRecommendation: "Duloxetine is first-line for painful diabetic neuropathy (NICE CG173). For depression with comorbid neuropathic pain, duloxetine is the preferred single agent (treats both). Also FDA-approved for fibromyalgia and chronic musculoskeletal pain.",
      indianSource: "Indian Psychiatric Society (IPS) / IASP India Pain Guidelines",
      indianRecommendation: "IPS guidelines position SSRIs as first-line for uncomplicated depression. Duloxetine is preferred when depression is comorbid with neuropathic pain, fibromyalgia, or chronic musculoskeletal pain. In Indian diabetology practice, duloxetine is increasingly first-line for painful diabetic neuropathy with comorbid depression.",
    },
    {
      topic: "Hepatotoxicity monitoring",
      internationalSource: "FDA Cymbalta label",
      internationalRecommendation: "Duloxetine should be avoided in patients with substantial alcohol use (≥3 drinks/day), hepatic impairment, or end-stage renal disease. Post-marketing reports of severe hepatic injury. LFT monitoring is recommended at baseline and if symptoms develop.",
      indianSource: null,
      indianRecommendation: "No dedicated IPS guideline on duloxetine hepatotoxicity monitoring. In Indian practice, LFTs at baseline are essential given the high prevalence of viral hepatitis (Hepatitis B/C), NAFLD (non-alcoholic fatty liver disease, common in diabetics), and alcohol use. Avoid in any known liver disease. Current section reflects FDA label and accepted clinical practice.",
    },
    {
      topic: "Use vs venlafaxine when BP is a concern",
      internationalSource: "FDA / APA / Maudsley Prescribing Guidelines",
      internationalRecommendation: "Duloxetine has significantly less BP effect than venlafaxine. When hypertension is a concern (elderly, pre-existing HTN, cardiac disease), duloxetine is the preferred SNRI.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — duloxetine is preferred over venlafaxine in patients with hypertension or cardiac comorbidity. In Indian practice, where uncontrolled hypertension is common (~30% of adults), this is a clinically important distinction.",
    },
    {
      topic: "Use in pregnancy",
      internationalSource: "FDA / APA",
      internationalRecommendation: "Duloxetine is FDA Category C. Not the SSRI/SNRI of choice in pregnancy — sertraline is preferred. Third-trimester use associated with neonatal adaptation syndrome. Use only if benefit justifies risk.",
      indianSource: "Indian Psychiatric Society (IPS)",
      indianRecommendation: "IPS concurs — sertraline remains first-line in pregnancy. Duloxetine is reserved for cases where its unique pain indication is essential and an SSRI is insufficient. Involve obstetrician.",
    },
    {
      topic: "Use in diabetic neuropathy",
      internationalSource: "FDA / NICE CG173 / ADA Diabetes Guidelines",
      internationalRecommendation: "Duloxetine is first-line for painful diabetic peripheral neuropathy (alongside pregabalin, gabapentin, and amitriptyline). American Diabetes Association recommends duloxetine as a first-line pharmacological option.",
      indianSource: "Research Society for the Study of Diabetes in India (RSSDI)",
      indianRecommendation: "RSSDI guidelines include duloxetine as a first-line option for painful diabetic neuropathy. In Indian government settings where duloxetine is not available, amitriptyline (cheaper, on essential medicines list) and pregabalin generic are used. Duloxetine is preferred in private practice when comorbid depression/anxiety is present.",
    },
  ],

  /* Indian reference sources */
  indianReferences: [
    {
      source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition",
      type: "textbook",
      section: "Chapter 33 — Antidepressant Drugs (SNRIs section); Chapter 11 — Drugs for Neuropathic Pain",
    },
    {
      source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression",
      type: "guideline",
      section: "Section on pharmacotherapy — SNRIs and comorbid pain",
    },
    {
      source: "Research Society for the Study of Diabetes in India (RSSDI) — Clinical Practice Guidelines",
      type: "guideline",
      section: "Management of painful diabetic neuropathy — duloxetine as first-line option",
    },
    {
      source: "NMC CBME Curriculum — Pharmacology (Second Professional)",
      type: "curriculum",
      section: "Topic: Drugs acting on CNS — Antidepressants (SNRIs) and Drugs for Neuropathic Pain",
    },
    {
      source: "NMC CBME Curriculum — Psychiatry (Final Professional)",
      type: "curriculum",
      section: "Topic: Psychopharmacology — Depression with comorbid pain and anxiety disorders",
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
      section: "Duloxetine — Schedule H prescription status",
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
      { source: "NICE CG91 (Depression) + CG173 (Neuropathic Pain)", recommendation: "Duloxetine is first-line for painful diabetic neuropathy. For depression with comorbid neuropathic pain, duloxetine is the preferred single agent." },
      { source: "APA Practice Guideline", recommendation: "Duloxetine is a rational SNRI choice for depression with comorbid pain, anxiety, or when BP elevation is a concern with venlafaxine." },
      { source: "FDA", recommendation: "Approved for 5 indications: MDD, GAD, diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain. Hepatotoxicity warning." },
      { source: "American Diabetes Association (ADA)", recommendation: "Duloxetine is a first-line pharmacological option for painful diabetic neuropathy." },
    ],
    indian: [
      { source: "Indian Psychiatric Society (IPS)", recommendation: "IPS guidelines position SSRIs as first-line for uncomplicated depression; duloxetine is preferred when depression is comorbid with neuropathic pain." },
      { source: "Research Society for the Study of Diabetes in India (RSSDI)", recommendation: "RSSDI guidelines include duloxetine as a first-line option for painful diabetic neuropathy, particularly when comorbid depression/anxiety is present." },
      { source: null, recommendation: "No dedicated IPS guideline on duloxetine hepatotoxicity monitoring frequency. Current section reflects FDA label and accepted clinical practice." },
    ],
    indianClinicalPractice:
      "In Indian private practice, duloxetine is the preferred SNRI when depression is comorbid with neuropathic pain, fibromyalgia, or chronic musculoskeletal pain — a single agent treats both indications. It is NOT in government hospital or DMHP formularies due to cost (2–3× more expensive than generic SSRIs). For pure depression without pain, generic SSRIs are preferred. For painful diabetic neuropathy in government settings, amitriptyline (cheaper, on essential medicines list) or pregabalin generic are used. Starting dose is 30mg OD for 1 week (lower than Western 60mg start) to minimise early nausea, then titrated to 60mg OD. The 60mg dose is the workhorse — higher doses (90–120mg) are uncommon due to cost and hepatotoxicity concerns. LFTs at baseline are essential given the high Indian prevalence of viral hepatitis, NAFLD, and alcohol use. Avoidance of alcohol is non-negotiable and is a key counselling point.",
  },

  /* Indian encounter context — where you'll see this drug */
  indianEncounterContext: {
    governmentHospitals:
      "NOT routinely stocked in government hospital psychiatry or medicine OPDs. SSRIs (sertraline) for depression, amitriptyline or pregabalin generic for diabetic neuropathy. If a patient is referred from private care already on duloxetine, efforts are made to continue if supply can be arranged; otherwise, switch to amitriptyline or sertraline + pregabalin combination.",
    privateHospitals:
      "Preferred SNRI for depression with comorbid pain in private psychiatry and medicine practice. Starting dose 30mg OD × 1 week, then 60mg OD. LFTs at baseline. PHQ-9 for mood, pain scale for pain. Patients counselled on alcohol avoidance and hepatotoxicity symptoms. Commonly co-prescribed with antidiabetic drugs in diabetology practice.",
    medicalColleges:
      "Teaching drug for SNRI pharmacology, balanced SERT+NET concept, and the link between noradrenergic action and descending pain inhibition. Featured in pharmacology practicals (prescription writing for diabetic neuropathy with depression). Examined in second professional MBBS (pharmacology) and final professional (psychiatry and medicine). Commonly featured in NEET PG and INICET questions on pain pharmacology and hepatotoxicity.",
    primaryCare:
      "Increasingly initiated in primary care for painful diabetic neuropathy — diabetologists and GPs prescribe duloxetine 30mg → 60mg OD. For pure depression without pain, GPs prefer SSRIs. Important to check LFTs and alcohol history before initiation.",
    psychiatryOPD:
      "Second-line antidepressant in psychiatry OPD for depression with comorbid pain (neuropathic, fibromyalgia, chronic musculoskeletal). Also used for GAD (especially with comorbid pain). Preferred over venlafaxine when BP is a concern. Tapering is more straightforward than venlafaxine (longer half-life) but still requires gradual reduction.",
  },

  /* Indian prescription workflow */
  prescriptionWorkflow: {
    beforePrescribing: [
      "Screen for bipolar disorder (MDQ) — SNRIs can trigger manic switch.",
      "Assess suicidal ideation — involve family for monitoring; provide Tele-MANAS (14416) number.",
      "Check for MAOI use in last 14 days — absolute contraindication (wait ≥5 days after stopping duloxetine before starting MAOI).",
      "Check baseline LFTs — duloxetine's signature safety issue is hepatotoxicity. Avoid in any liver disease, cirrhosis, or substantial alcohol use (≥3 drinks/day).",
      "Assess alcohol use — if ≥3 drinks/day, duloxetine is contraindicated. Counsel complete alcohol avoidance.",
      "Check renal function (CrCl) — avoid in CrCl <30 mL/min (plasma levels double).",
      "Review concurrent medications — especially fluvoxamine (CYP1A2 inhibitor), ciprofloxacin (CYP1A2 inhibitor), other antidepressants, TCAs (CYP2D6 substrate), thioridazine (contraindicated), warfarin/NSAIDs (bleeding risk), tramadol/triptans (serotonergic).",
      "Check for narrow-angle glaucoma — duloxetine can provoke mydriasis. Avoid in uncontrolled.",
    ],
    duringTreatment: [
      "Week 1: assess tolerability (nausea, dry mouth, sleep changes, dizziness on standing). Reassure these settle.",
      "Week 1–2: for pain indications, early pain relief may appear. For mood, full effect at 4–6 weeks.",
      "Week 2–4: review early response — sleep, appetite, energy, pain scores.",
      "Week 4–6: assess response with PHQ-9 (mood) and pain scale. If inadequate response, increase to 90–120mg.",
      "Week 6–12: full response assessment. If <50% reduction at 12 weeks, consider augmentation, switch, or referral.",
      "Watch for hepatotoxicity symptoms (jaundice, dark urine, RUQ pain, fatigue) — check LFTs immediately if symptomatic.",
      "Watch for serotonin syndrome if serotonergic drugs are added (tramadol, triptans, linezolid, fluvoxamine).",
    ],
    followUp: [
      "First follow-up at 2 weeks (tolerability, early pain response, suicidality).",
      "Second follow-up at 4 weeks (early mood response, pain response).",
      "Third follow-up at 6 weeks (dose escalation decision).",
      "Fourth follow-up at 12 weeks (full response assessment).",
      "If remission achieved (PHQ-9 <5): continue for 6–12 months for first episode, longer for recurrent.",
      "Before discontinuation: taper over 2–4 weeks (reduce by 30mg every 1–2 weeks).",
      "Counsel patient on alcohol avoidance throughout treatment and on reporting hepatotoxicity symptoms immediately.",
    ],
    whenToRefer: [
      "Refer to psychiatrist if no response to duloxetine 60mg after 12 weeks.",
      "Refer urgently if suicidal ideation emerges or worsens.",
      "Refer if bipolar disorder is suspected (manic switch risk).",
      "Refer if serotonin syndrome develops (emergency — call 112).",
      "Refer to hepatology if LFTs elevate >3× upper limit of normal or jaundice develops (stop duloxetine immediately).",
      "Refer if severe hyponatraemia (Na <120 mmol/L) or seizures.",
      "Refer to obstetrician if patient becomes pregnant (do NOT stop duloxetine abruptly — cross-taper to sertraline with obstetric input).",
    ],
  },

  /* Exam frequency — star ratings */
  examFrequency: {
    neetPg: 4,
    inicet: 4,
    mbbsViva: 3,
    fmge: 4,
  },

  /* PYQ metadata — concept-level, no copyrighted content */
  pyqMetadata: [
    { exam: "NEET PG", year: 2022, concept: "Antidepressant for diabetic neuropathy with comorbid depression", topic: "SNRI indications" },
    { exam: "NEET PG", year: 2021, concept: "Duloxetine contraindication (cirrhosis / alcohol use)", topic: "Antidepressant safety" },
    { exam: "NEET PG", year: 2020, concept: "Antidepressant with 3 FDA-approved pain indications", topic: "SNRI indications" },
    { exam: "NEET PG", year: 2019, concept: "Ciprofloxacin + duloxetine interaction (CYP1A2)", topic: "Drug interactions" },
    { exam: "INICET", year: 2021, concept: "Duloxetine vs venlafaxine: less hypertension", topic: "SNRI comparison" },
    { exam: "INICET", year: 2023, concept: "Duloxetine hepatotoxicity mechanism", topic: "Antidepressant adverse effects" },
    { exam: "FMGE", year: 2022, concept: "Duloxetine FDA indications (5: 3 pain + 2 psych)", topic: "Antidepressant indications" },
    { exam: "FMGE", year: 2021, concept: "Duloxetine CYP1A2 substrate — fluvoxamine interaction", topic: "Drug interactions" },
  ],

  /* Indian comparison contexts */
  indianComparisonContexts: [
    {
      scenario: "Government hospital setup",
      recommendation: "Duloxetine is NOT preferred — SSRIs (sertraline) for depression, amitriptyline or pregabalin generic for neuropathic pain. Cost and LFT monitoring capacity limit government use.",
      alternative: "Amitriptyline 25–75mg at night for diabetic neuropathy with depression (cheaper, on essential medicines list, but more side effects).",
    },
    {
      scenario: "Private practice: depression with comorbid diabetic neuropathy",
      recommendation: "Duloxetine is the drug of choice — single agent FDA-approved for both indications. Start 30mg → 60mg OD. Pain relief in 1–2 weeks, mood benefit in 4–6 weeks. Monitor LFTs, avoid alcohol.",
      alternative: "Sertraline 50mg for mood + pregabalin 75mg for pain (two drugs, more expensive, more side effects).",
    },
    {
      scenario: "Depression with uncontrolled hypertension",
      recommendation: "Duloxetine is preferred over venlafaxine — significantly less BP effect. Control BP first, then initiate duloxetine 30mg → 60mg with ongoing BP monitoring.",
      alternative: "Sertraline (no BP effect) if SNRI not essential. Avoid venlafaxine in uncontrolled HTN.",
    },
    {
      scenario: "Fibromyalgia",
      recommendation: "Duloxetine 30mg → 60mg OD is FDA-approved and effective, particularly when comorbid depression/anxiety is present. Also improves fatigue and sleep quality.",
      alternative: "Pregabalin 75–150mg (also FDA-approved). Amitriptyline 25mg at night (cheaper, common in India). Milnacipran (limited availability in India).",
    },
    {
      scenario: "Patient with liver disease or significant alcohol use",
      recommendation: "Duloxetine is contraindicated — hepatotoxicity risk. Use sertraline (safer hepatic profile, dose-adjusted) or escitalopram. Avoid all SNRIs in cirrhosis.",
      alternative: "Sertraline 50mg (mild-moderate hepatic impairment: reduce dose). Mirtazapine 15–30mg (sleep benefit, less hepatic concern).",
    },
    {
      scenario: "Cost-sensitive setting",
      recommendation: "Duloxetine is moderately expensive (₹10–18/capsule for Duzela/Dulane/Symbal) and NOT in Jan Aushadhi. For pure depression, generic SSRIs (sertraline ₹2–5) are far more affordable. For diabetic neuropathy, amitriptyline 25mg (₹0.5–1/tablet) is the most cost-effective.",
      alternative: "Generic sertraline from Jan Aushadhi for depression. Amitriptyline for neuropathic pain. Pregabalin generic if SNRI-type effect needed for pain.",
    },
  ],

  /* Jan Aushadhi availability */
  janAushadhi: {
    available: false,
    note: "NOT commonly available at Jan Aushadhi Kendras. Generic duloxetine is less commonly stocked than generic SSRIs or amitriptyline. For diabetic neuropathy in Jan Aushadhi-reliant patients, generic amitriptyline or pregabalin are preferred. For depression, generic sertraline is the affordable default.",
  },

  /* Restructured evidence sources — International vs Indian */
  evidenceSources: {
    international: [
      { source: "Katzung Basic & Clinical Pharmacology, 16th edition", section: "Chapter 30 — Antidepressant Agents (SNRIs); Chapter on Neuropathic Pain" },
      { source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition", section: "Section V — Pharmacotherapy of Mood Disorders; Pain section" },
      { source: "Stahl's Essential Psychopharmacology, 5th edition", section: "Chapter 7 — Antidepressants (SNRIs and pain)" },
      { source: "Maudsley Prescribing Guidelines, 14th edition", section: "Chapter on depression with comorbid pain" },
      { source: "FDA Prescribing Information — CYMBALTA (duloxetine hydrochloride)", section: "Highlights of Prescribing Information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/021427s054lbl.pdf" },
      { source: "NICE Clinical Guideline CG173 — Neuropathic pain in adults", section: "Pharmacological management — duloxetine first-line for diabetic neuropathy" },
      { source: "American Diabetes Association (ADA) Standards of Medical Care", section: "Diabetic neuropathy management — duloxetine as first-line pharmacological option" },
      { source: "Cipriani A et al. Lancet 2018 — Comparative efficacy of 21 antidepressants", section: "Network meta-analysis (duloxetine among effective agents)" },
    ],
    indian: [
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th edition", type: "textbook", section: "Chapter 33 — Antidepressant Drugs (SNRIs); Chapter 11 — Drugs for Neuropathic Pain" },
      { source: "Indian Psychiatric Society — Clinical Practice Guidelines for Management of Depression", type: "guideline", section: "Section on pharmacotherapy — SNRIs and comorbid pain" },
      { source: "Research Society for the Study of Diabetes in India (RSSDI) — Clinical Practice Guidelines", type: "guideline", section: "Management of painful diabetic neuropathy" },
      { source: "NMC CBME Curriculum — Pharmacology (Second Professional)", type: "curriculum", section: "Topic: Drugs acting on CNS — Antidepressants (SNRIs) and Neuropathic Pain" },
      { source: "NMC CBME Curriculum — Psychiatry (Final Professional)", type: "curriculum", section: "Topic: Psychopharmacology — Depression with comorbid pain" },
      { source: "Tele-MANAS (National Tele-Mental Health Helpline) — 14416", type: "regulatory", section: "Mental health support resource", url: "tel:14416" },
      { source: "CDSCO — Central Drugs Standard Control Organisation", type: "regulatory", section: "Duloxetine — Schedule H prescription status" },
    ],
  },

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */

  /* Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath: {
    title: "When to choose Duloxetine",
    startNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "What is the primary indication?",
        branches: [
          { label: "Depression alone", next: "depression-alone" },
          { label: "Depression + neuropathic pain", next: "depression-pain" },
          { label: "Diabetic neuropathy alone", next: "diabetic-neuropathy" },
          { label: "Fibromyalgia / chronic pain", next: "fibromyalgia" },
        ],
      },
      {
        id: "depression-alone",
        question: "Uncomplicated depression — is there a reason to choose SNRI over SSRI?",
        recommendation: "Default to SSRI (sertraline/escitalopram) per IPS and international guidelines. Consider duloxetine only if SSRI fails, comorbid pain emerges, or BP concerns make venlafaxine inappropriate.",
        reasoning: "SSRIs are first-line for uncomplicated depression due to lower cost, better safety profile, and wider availability. Duloxetine adds hepatotoxicity risk without clear first-line advantage for pure depression.",
        branches: [
          { label: "SSRI failed or comorbid pain", next: "start-duloxetine" },
          { label: "Standard presentation", next: "avoid-first-line" },
        ],
      },
      {
        id: "depression-pain",
        question: "Depression + comorbid neuropathic pain (e.g., diabetic neuropathy)",
        recommendation: "Duloxetine 30mg → 60mg OD is the drug of choice — single agent FDA-approved for BOTH indications. Pain relief in 1–2 weeks, mood benefit in 4–6 weeks. Monitor LFTs, avoid alcohol.",
        reasoning: "Duloxetine's balanced SERT+NET blockade treats both mood and pain. The noradrenergic component enhances descending inhibitory pain pathways in the spinal cord. Avoids the need for two separate drugs.",
        branches: [
          { label: "LFTs normal, no alcohol", next: "start-duloxetine" },
          { label: "Liver disease or alcohol use", next: "avoid-hepatic" },
        ],
      },
      {
        id: "diabetic-neuropathy",
        question: "Painful diabetic peripheral neuropathy (without depression)",
        recommendation: "Duloxetine 30mg → 60mg OD is a first-line option per NICE CG173 and ADA. Pregabalin, gabapentin, and amitriptyline are alternatives. Duloxetine preferred if even mild comorbid mood/anxiety symptoms.",
        reasoning: "Duloxetine is FDA-approved and addresses both pain and any subclinical mood component. In Indian cost-sensitive settings, amitriptyline at night is a cheaper alternative.",
        branches: [
          { label: "Cost-sensitive or government setting", next: "amitriptyline-option" },
          { label: "Private practice, can afford", next: "start-duloxetine" },
        ],
      },
      {
        id: "fibromyalgia",
        question: "Fibromyalgia or chronic musculoskeletal pain",
        recommendation: "Duloxetine 30mg → 60mg OD is FDA-approved. Particularly effective when comorbid depression/anxiety is present. Also improves fatigue and sleep quality.",
        reasoning: "Duloxetine's pain indication is independent of its antidepressant effect — the noradrenergic descending inhibition works in non-depressed patients too.",
        branches: [
          { label: "Comorbid depression/anxiety", next: "start-duloxetine" },
          { label: "Pure pain, no mood disorder", next: "consider-pregabalin" },
        ],
      },
      {
        id: "start-duloxetine",
        question: "Why choose Duloxetine?",
        recommendation: "Duloxetine is preferred when: depression with comorbid pain, BP concerns make venlafaxine inappropriate, diabetic neuropathy with mood symptoms, fibromyalgia with comorbid depression.",
        reasoning: "Balanced SNRI from dose 1, 3 FDA pain indications, less BP effect than venlafaxine, longer half-life (less severe discontinuation).",
        branches: [
          { label: "When NOT to choose", next: "avoid" },
        ],
      },
      {
        id: "avoid-hepatic",
        question: "Patient has liver disease or significant alcohol use",
        recommendation: "Duloxetine is CONTRAINDICATED — hepatotoxicity risk. Use sertraline (safer hepatic profile, dose-adjusted) or mirtazapine. Avoid all SNRIs in cirrhosis.",
        reasoning: "Duloxetine can cause severe liver injury. Pre-existing liver disease or substantial alcohol use (≥3 drinks/day) raises the risk to unacceptable levels.",
      },
      {
        id: "amitriptyline-option",
        question: "Cost-sensitive alternative",
        recommendation: "Amitriptyline 25–75mg at night is on the WHO essential medicines list and is far cheaper than duloxetine. Effective for neuropathic pain. More side effects (anticholinergic, sedation, QTc).",
        reasoning: "In government settings or low-income patients, amitriptyline is the workhorse for neuropathic pain despite a less favourable side-effect profile.",
      },
      {
        id: "consider-pregabalin",
        question: "Pregabalin may be preferable when",
        recommendation: "Pure pain (no mood component), no depression to treat, patient tolerates sedation, cost is manageable. Pregabalin 75–150mg is also FDA-approved for diabetic neuropathy and fibromyalgia.",
        reasoning: "Pregabalin works via calcium channel modulation, not SERT/NET — different mechanism, different side-effect profile. No hepatotoxicity.",
      },
      {
        id: "avoid-first-line",
        question: "Why not Duloxetine first-line for depression?",
        recommendation: "For first-episode uncomplicated depression, SSRIs are preferred — lower cost, better safety (no hepatotoxicity), wider availability. Duloxetine adds risk without clear benefit for pure depression.",
        reasoning: "SSRIs are first-line per IPS and international guidelines. Duloxetine is second-line or specifically indicated when comorbid pain is present.",
      },
      {
        id: "avoid",
        question: "When NOT to choose Duloxetine",
        recommendation: "Avoid: liver disease or cirrhosis, substantial alcohol use (≥3 drinks/day), severe renal impairment (CrCl <30), MAOI within 14 days, concurrent thioridazine, concurrent fluvoxamine/ciprofloxacin (CYP1A2 inhibitors). Pregnancy (sertraline preferred).",
        reasoning: "Hepatotoxicity, renal accumulation, CYP1A2 interactions, and thioridazine QTc risk make duloxetine inappropriate in these contexts.",
      },
    ],
  },

  /* Educational prescription template (India) */
  educationalPrescription: {
    scenario: "Typical Indian private OPD initiation for diabetic neuropathy with comorbid depression in an adult",
    lines: [
      "Rx",
      "Tab Duloxetine 30 mg",
      "1 cap OD morning after food × 7 days",
      "",
      "Then increase to:",
      "Tab Duloxetine 60 mg",
      "1 cap OD morning after food",
      "",
      "Advice: Swallow capsule whole. Do NOT crush or open.",
      "AVOID alcohol completely. Do NOT stop suddenly.",
      "Report yellow eyes, dark urine, or belly pain immediately.",
    ],
    followUp: [
      "Review after 2 weeks — tolerability, early pain response, suicidality",
      "Review after 4 weeks — pain scale + PHQ-9; mood response begins",
      "Review after 6 weeks — if inadequate, increase to 90mg",
      "Review after 12 weeks — full response assessment",
      "If remission (PHQ-9 <5) and pain controlled: continue 6–12 months",
      "Taper: reduce by 30mg every 1–2 weeks over 2–4 weeks",
      "LFTs at baseline; recheck if symptoms of liver injury develop",
    ],
    disclaimer: "Educational example only. Not a substitute for clinical judgment. Always verify dosing against current prescribing information and individualise for each patient.",
  },

  /* Common mistakes */
  commonMistakes: [
    {
      mistake: "Not checking LFTs at baseline",
      why: "Duloxetine's signature safety issue is hepatotoxicity. Baseline LFTs are essential — particularly in India where viral hepatitis, NAFLD (common in diabetics), and alcohol use are prevalent. Starting duloxetine without baseline LFTs risks missing pre-existing liver disease.",
      correction: "Check LFTs at baseline for every patient. Avoid duloxetine entirely in any known liver disease, cirrhosis, or substantial alcohol use (≥3 drinks/day). Recheck LFTs immediately if symptoms of liver injury develop (jaundice, dark urine, RUQ pain, fatigue).",
    },
    {
      mistake: "Not counselling on alcohol avoidance",
      why: "Alcohol significantly raises duloxetine's hepatotoxicity risk. The FDA Cymbalta label explicitly contraindicates use in patients with ≥3 alcoholic drinks per day. Patients may not disclose alcohol use unless asked directly.",
      correction: "Ask about alcohol use explicitly at baseline. Counsel: 'AVOID alcohol completely while on duloxetine. If you drink 3 or more drinks per day, this medicine is not safe for you.' Document the counselling.",
    },
    {
      mistake: "Combining with fluvoxamine or ciprofloxacin (CYP1A2 inhibitors)",
      why: "Duloxetine is a CYP1A2 substrate. Fluvoxamine (potent CYP1A2 inhibitor) and ciprofloxacin (commonly prescribed antibiotic in India) raise duloxetine levels 3–5×, causing toxicity (serotonin syndrome, severe nausea, hepatotoxicity).",
      correction: "Always ask about fluvoxamine and ciprofloxacin before prescribing duloxetine. If co-prescription is unavoidable, reduce duloxetine dose by 50% and monitor closely. For UTIs in patients on duloxetine, choose a non-CYP1A2-inhibiting antibiotic (nitrofurantoin, cotrimoxazole).",
    },
    {
      mistake: "Missing the thioridazine contraindication",
      why: "Duloxetine is a moderate CYP2D6 inhibitor and raises thioridazine plasma levels → QTc prolongation → torsades de pointes. The combination is absolutely contraindicated.",
      correction: "Always check for thioridazine use before prescribing duloxetine. If patient is on thioridazine, choose a different antidepressant without CYP2D6 inhibition (escitalopram).",
    },
    {
      mistake: "Starting at 60mg instead of 30mg",
      why: "Duloxetine's early nausea, dizziness, and activation are dose-dependent at initiation. Starting at 60mg (especially in SSRI-naive or anxious patients) causes tolerability failures.",
      correction: "Start at 30mg OD for 1 week, then increase to 60mg. This is particularly important in Indian practice where patients may be SSRI-naive and sensitive to activation.",
    },
    {
      mistake: "Using in patients with severe renal impairment (CrCl <30)",
      why: "Duloxetine metabolites are renally excreted. In severe renal impairment (CrCl <30 mL/min), plasma Cmax and AUC roughly double, raising toxicity risk.",
      correction: "Check renal function before prescribing. Avoid duloxetine entirely in CrCl <30 mL/min (dialysis patients). No dose adjustment needed in mild-moderate renal impairment.",
    },
    {
      mistake: "Not recognising the dual benefit for pain + depression",
      why: "Prescribing an SSRI for mood AND a separate drug (pregabalin, gabapentin) for neuropathic pain when duloxetine alone could treat both is polypharmacy — more expensive, more side effects, lower adherence.",
      correction: "When depression is comorbid with neuropathic pain (especially diabetic neuropathy, fibromyalgia), duloxetine 60mg OD is the drug of choice — single agent, FDA-approved for both. Avoid unnecessary polypharmacy.",
    },
    {
      mistake: "Abrupt discontinuation",
      why: "Although duloxetine's discontinuation syndrome is less severe than venlafaxine (longer half-life 12h vs 5h), it still occurs. Symptoms: dizziness, nausea, headache, 'brain zaps', irritability.",
      correction: "Taper over 2–4 weeks minimum — reduce by 30mg every 1–2 weeks. Less need for fluoxetine bridging than with venlafaxine, but the principle of gradual tapering remains.",
    },
  ],

  /* When NOT to use — red card */
  whenNotToUse: [
    {
      scenario: "Liver disease (Child-Pugh B or C) or cirrhosis",
      reason: "Duloxetine can cause severe liver injury. Pre-existing liver disease raises the risk to unacceptable levels. Avoid completely.",
      alternative: "Sertraline (safer hepatic profile, dose-adjusted) or mirtazapine. Avoid all SNRIs in cirrhosis.",
    },
    {
      scenario: "Substantial alcohol use (≥3 drinks/day)",
      reason: "FDA Cymbalta label explicitly contraindicates use in patients with ≥3 alcoholic drinks per day due to additive hepatotoxicity risk. Post-marketing reports of severe hepatic injury are over-represented in heavy drinkers.",
      alternative: "Sertraline or mirtazapine. Counsel on alcohol cessation first; reconsider duloxetine only after sustained abstinence.",
    },
    {
      scenario: "Severe renal impairment (CrCl <30 mL/min)",
      reason: "Renal excretion of duloxetine metabolites is substantial. Plasma levels rise significantly (Cmax and AUC roughly double) in severe renal impairment.",
      alternative: "Avoid duloxetine entirely. Use sertraline (no renal adjustment needed for mild-severe impairment).",
    },
    {
      scenario: "Concurrent fluvoxamine or ciprofloxacin (CYP1A2 inhibitors)",
      reason: "Duloxetine is a CYP1A2 substrate. These drugs raise duloxetine levels 3–5×, causing toxicity — serotonin syndrome, severe nausea, hepatotoxicity.",
      alternative: "Switch antibiotic (nitrofurantoin, cotrimoxazole for UTI) or switch antidepressant (sertraline, not a CYP1A2 substrate). If combination unavoidable, reduce duloxetine dose by 50%.",
    },
    {
      scenario: "Concurrent thioridazine",
      reason: "Duloxetine is a moderate CYP2D6 inhibitor → raises thioridazine plasma levels → QTc prolongation → torsades de pointes. Combination contraindicated.",
      alternative: "Switch antipsychotic or switch antidepressant (escitalopram, no CYP2D6 inhibition).",
    },
    {
      scenario: "Active MAOI use (within 14 days)",
      reason: "Fatal serotonin syndrome. Wait at least 14 days after stopping an MAOI before starting duloxetine; wait at least 5 days after stopping duloxetine before starting an MAOI (shorter than for SSRIs due to duloxetine's 12h half-life).",
      alternative: "Wait the required washout period.",
    },
  ],

  /* Indian ward pearls */
  wardPearls: {
    professorMayAsk: [
      "Why is duloxetine useful in neuropathic pain? (NET blockade enhances descending inhibitory pain pathways in the spinal cord — provides analgesia independent of antidepressant effect. Pain benefit may appear at 1–2 weeks, earlier than mood.)",
      "Name the 5 FDA-approved indications for duloxetine. (MDD, GAD — 2 psych; diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain — 3 pain. Only antidepressant with 3 separate FDA pain indications.)",
      "What is the signature adverse effect of duloxetine? (Hepatotoxicity — FDA warning. Avoid in liver disease, cirrhosis, substantial alcohol use ≥3 drinks/day.)",
      "How does duloxetine differ from venlafaxine? (Balanced SERT+NET from dose 1 vs dose-dependent; hepatotoxicity vs hypertension; 3 pain FDA vs 0; longer half-life 12h vs 5h; less severe discontinuation.)",
      "Which CYP interactions are important with duloxetine? (CYP1A2 substrate — fluvoxamine, ciprofloxacin raise levels. Moderate CYP2D6 inhibitor — raises TCA, metoprolol, thioridazine levels.)",
      "Why is duloxetine preferred over venlafaxine in a patient with uncontrolled hypertension? (Duloxetine has significantly less BP effect than venlafaxine — preferred SNRI when HTN is a concern.)",
    ],
    residentExpects: [
      "Know the starting dose and titration (30mg OD × 1 week → 60mg OD; max 120mg).",
      "Know the LFT monitoring requirement (baseline + if symptomatic).",
      "Know the absolute contraindications (liver disease, ≥3 drinks/day alcohol, CrCl <30, MAOI, thioridazine).",
      "Know the CYP1A2 interactions (fluvoxamine, ciprofloxacin — avoid or reduce dose).",
      "Know when duloxetine is preferred over venlafaxine (comorbid pain, BP concerns, less severe withdrawal needed).",
      "Know the pain vs mood onset difference (pain 1–2 weeks, mood 4–6 weeks).",
    ],
    consultantsDo: [
      "Check LFTs at baseline for every patient on duloxetine",
      "Ask about alcohol use explicitly and counsel complete avoidance",
      "Screen for bipolar disorder (MDQ) before starting any antidepressant",
      "Use duloxetine as first-line for depression + diabetic neuropathy / fibromyalgia / chronic pain (single agent for both)",
      "Check for CYP1A2 inhibitor co-prescription (fluvoxamine, ciprofloxacin) before initiation",
      "Choose duloxetine over venlafaxine when BP is a concern",
      "Use PHQ-9 + pain scale at every visit for objective dual monitoring",
    ],
    internsMiss: [
      "Forgetting to check LFTs at baseline (signature safety monitoring!)",
      "Not asking about alcohol use explicitly (patient doesn't disclose unless asked)",
      "Not counselling on alcohol avoidance (patient continues drinking, develops hepatotoxicity)",
      "Missing the ciprofloxacin interaction (commonly prescribed antibiotic in India)",
      "Starting at 60mg instead of 30mg (causes intolerability)",
      "Not checking renal function (CrCl <30 is contraindication)",
      "Prescribing SSRI + pregabalin separately when duloxetine alone would treat both",
      "Not recognising hepatotoxicity symptoms (jaundice, dark urine, RUQ pain, fatigue) as drug-related",
      "Stopping abruptly instead of tapering (discontinuation syndrome)",
    ],
  },

  /* Refined high-yield level */
  highYieldLevel: "high",

  /* Drug family navigation */
  drugFamilyNav: {
    familyName: "SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)",
    members: [
      { name: "Duloxetine", slug: "duloxetine", relationship: "Current drug", distinguishing: "Balanced SNRI from dose 1; 3 FDA pain indications; hepatotoxicity; CYP1A2 interaction" },
      { name: "Venlafaxine", slug: "venlafaxine", relationship: "Same class (SNRI)", distinguishing: "Dose-dependent SNRI; worst discontinuation; BP monitoring; active metabolite ODV = desvenlafaxine" },
      { name: "Desvenlafaxine", slug: "desvenlafaxine", relationship: "Same class (SNRI) — active metabolite of venlafaxine", distinguishing: "ODV marketed directly; no CYP2D6 dependence; cleaner PK" },
      { name: "Milnacipran", slug: "milnacipran", relationship: "Same class (SNRI)", distinguishing: "Balanced SERT+NET (1:3 ratio); FDA-approved for fibromyalgia; not widely available in India" },
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
      question: "How does duloxetine's receptor binding differ from venlafaxine's?",
      options: [
        "Duloxetine is SERT-only; venlafaxine is SERT+NET",
        "Duloxetine has balanced SERT+NET from dose 1; venlafaxine is dose-dependent",
        "Duloxetine is NET-only; venlafaxine is SERT+NET",
        "Both are dose-dependent but at different thresholds",
      ],
      correctIndex: 1,
      explanation: "Duloxetine has balanced SERT + NET blockade from the very first dose — no dose-dependent titration is needed to 'unlock' the NET effect. Venlafaxine, in contrast, requires titration above 150 mg/day for clinically meaningful NET blockade. This is the key pharmacological distinction between the two SNRIs.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-pain",
      question: "Why is duloxetine useful in neuropathic pain while SSRIs are not?",
      options: [
        "Duloxetine blocks pain receptors directly",
        "Duloxetine's NET blockade enhances descending inhibitory pain pathways in the spinal cord",
        "Duloxetine reduces inflammation in nerves",
        "SSRIs actually work for pain too, but less marketed",
      ],
      correctIndex: 1,
      explanation: "The noradrenergic component (NET blockade) enhances descending inhibitory pain pathways in the spinal cord — serotonin and norepinephrine together suppress incoming pain signals. SSRIs (which only block SERT) lack this noradrenergic effect and are largely ineffective for neuropathic pain. This is why duloxetine is FDA-approved for 3 pain conditions while no SSRI has any pain indication.",
      afterSectionId: "clinical-uses",
    },
    {
      id: "quiz-hepatotoxicity",
      question: "Which of the following is an ABSOLUTE contraindication to duloxetine?",
      options: [
        "Hypertension",
        "Diabetes mellitus",
        "Substantial alcohol use (≥3 drinks/day)",
        "Asthma",
      ],
      correctIndex: 2,
      explanation: "Substantial alcohol use (≥3 alcoholic drinks per day) is an absolute contraindication per the FDA Cymbalta label — additive hepatotoxicity risk. Post-marketing reports of severe hepatic injury are over-represented in heavy drinkers. Duloxetine is also contraindicated in liver disease/cirrhosis and CrCl <30 mL/min. Hypertension is NOT a contraindication (duloxetine has less BP effect than venlafaxine).",
      afterSectionId: "contraindications",
    },
    {
      id: "quiz-cyp1a2",
      question: "A patient on duloxetine 60mg is prescribed ciprofloxacin for a UTI. What is the concern?",
      options: [
        "Ciprofloxacin reduces duloxetine levels — therapeutic failure",
        "Ciprofloxacin is a CYP1A2 inhibitor — raises duloxetine levels → toxicity",
        "Ciprofloxacin causes serotonin syndrome directly",
        "No interaction — both drugs are safe together",
      ],
      correctIndex: 1,
      explanation: "Duloxetine is a CYP1A2 substrate. Ciprofloxacin (and fluvoxamine) are potent CYP1A2 inhibitors — they raise duloxetine plasma levels 3–5×, causing toxicity (serotonin syndrome, severe nausea, hepatotoxicity). Either switch the antibiotic (nitrofurantoin, cotrimoxazole for UTI) or reduce duloxetine dose by 50% and monitor closely. This interaction is commonly missed in Indian practice where ciprofloxacin is widely prescribed.",
      afterSectionId: "interactions",
    },
    {
      id: "quiz-indications",
      question: "Duloxetine is the ONLY antidepressant with how many separate FDA-approved pain indications?",
      options: ["1", "2", "3", "5"],
      correctIndex: 2,
      explanation: "3 separate FDA-approved pain indications: diabetic peripheral neuropathic pain, fibromyalgia, and chronic musculoskeletal pain (chronic low back pain, osteoarthritis). Combined with 2 psychiatric indications (MDD, GAD), duloxetine has 5 total FDA indications — 3 pain + 2 psych. No other antidepressant has more than 1 pain indication.",
      afterSectionId: "clinical-uses",
    },
    {
      id: "quiz-vs-venlafaxine",
      question: "When is duloxetine preferred over venlafaxine?",
      options: [
        "When the patient has uncontrolled hypertension",
        "When comorbid neuropathic pain is present",
        "When less severe discontinuation is desired",
        "All of the above",
      ],
      correctIndex: 3,
      explanation: "All of the above. Duloxetine is preferred over venlafaxine when: (1) BP is a concern (duloxetine has less BP effect), (2) comorbid neuropathic pain is present (duloxetine is FDA-approved for 3 pain conditions), (3) less severe discontinuation is desired (duloxetine's longer half-life 12h vs venlafaxine's 5h means milder withdrawal). Venlafaxine is preferred when tamoxifen co-administration is needed (weak CYP2D6 inhibition) or in TRD escalation to high dose for the weak DAT effect.",
      afterSectionId: "evidence-practice",
    },
  ],

  /* End-of-page active recall questions */
  activeRecallQuestions: [
    {
      question: "Why is duloxetine useful in neuropathic pain while SSRIs are not?",
      answer: "Duloxetine's NET blockade enhances descending inhibitory pain pathways in the spinal cord — serotonin and norepinephrine together suppress incoming pain signals. SSRIs (which only block SERT) lack this noradrenergic effect and are largely ineffective for neuropathic pain. Duloxetine is FDA-approved for 3 pain conditions (diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain); no SSRI has any pain indication. Pain benefit may appear at 1–2 weeks, earlier than the 4–6 week mood effect.",
      topic: "Mechanism & Pain",
    },
    {
      question: "Name the 5 FDA-approved indications for duloxetine. Which is unique among antidepressants?",
      answer: "5 indications: MDD, GAD (2 psychiatric) + diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain (3 pain). Duloxetine is the ONLY antidepressant with 3 separate FDA-approved pain indications. This reflects its balanced SERT+NET blockade from dose 1 (unlike venlafaxine which requires dose titration for NET effect).",
      topic: "Indications",
    },
    {
      question: "What is the signature adverse effect of duloxetine, and how do you monitor for it?",
      answer: "Hepatotoxicity — FDA warning. Check LFTs at baseline (essential in India given high prevalence of viral hepatitis, NAFLD, and alcohol use). Recheck LFTs immediately if symptoms develop: jaundice, dark urine, right upper quadrant pain, severe fatigue. Avoid duloxetine entirely in liver disease, cirrhosis, or substantial alcohol use (≥3 drinks/day). If LFTs elevate >3× upper limit of normal, stop duloxetine and refer to hepatology.",
      topic: "Safety",
    },
    {
      question: "Which CYP enzyme interactions are clinically important with duloxetine?",
      answer: "Two key interactions: (1) Duloxetine is a CYP1A2 SUBSTRATE — fluvoxamine and ciprofloxacin (CYP1A2 inhibitors) raise duloxetine levels 3–5×, causing toxicity. Avoid combination or reduce duloxetine dose by 50%. (2) Duloxetine is a moderate CYP2D6 INHIBITOR — raises levels of TCAs, metoprolol, propafenone, and thioridazine (the latter is absolutely contraindicated due to QTc prolongation). Always check for these drugs before prescribing duloxetine.",
      topic: "Drug Interactions",
    },
    {
      question: "How does duloxetine differ from venlafaxine? When is each preferred?",
      answer: "Key differences: (1) Duloxetine = balanced SERT+NET from dose 1; venlafaxine = dose-dependent (SERT at 75mg, +NET at 150–225mg, +DAT >300mg). (2) Duloxetine = hepatotoxicity risk; venlafaxine = hypertension risk. (3) Duloxetine = 3 FDA pain indications; venlafaxine = 0. (4) Duloxetine half-life 12h (less severe discontinuation); venlafaxine half-life 5h (worst discontinuation of any antidepressant). Duloxetine preferred for: comorbid pain, BP concerns, simpler tapering. Venlafaxine preferred for: tamoxifen co-administration (weak CYP2D6), TRD escalation to high dose for DAT effect.",
      topic: "Drug Comparison",
    },
    {
      question: "A diabetic patient on duloxetine 60mg for neuropathy + depression is prescribed ciprofloxacin for a UTI by another doctor. What do you do?",
      answer: "Recognise the CYP1A2 interaction — ciprofloxacin inhibits duloxetine metabolism and raises levels 3–5×, risking toxicity (serotonin syndrome, hepatotoxicity, severe nausea). Management: (1) switch antibiotic to nitrofurantoin or cotrimoxazole (not CYP1A2 inhibitors), OR (2) if ciprofloxacin is essential, reduce duloxetine dose by 50% (to 30mg) during antibiotic course and monitor closely. Counsel patient to report nausea, agitation, or jaundice immediately. Document the interaction check.",
      topic: "Clinical Reasoning",
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
      description: "Foundations, balanced SNRI mechanism, clinical uses, hepatotoxicity, and MBBS exam content.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "interactions", "patient-education", "learning-module", "high-yield-summary", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full clinical detail with exam-specific content, PYQs, pain indications, and SNRI comparisons.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — advanced reasoning, ward pearls, pain pharmacology, guideline comparison, full evidence.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline", "clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education", "indian-clinical", "decision-path", "common-mistakes", "learning-module", "clinical-case", "drug-navigation", "high-yield-summary", "faq", "active-recall", "references"],
    },
  ],

  /* Lesson grouping — sections organised into learning units */
  lessonGroups: [
    {
      number: 1,
      title: "Foundations",
      description: "What is this drug? Why does it matter as the 'pain SNRI'?",
      sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"],
      checkpoint: "You now know what Duloxetine is, its 5 FDA indications (3 pain + 2 psych), and how it differs from SSRIs and venlafaxine.",
    },
    {
      number: 2,
      title: "Balanced SNRI Mechanism & Pain Pathways",
      description: "How does balanced SERT+NET differ from dose-dependent? Why does it work for pain?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand the balanced SNRI mechanism from dose 1, the descending inhibitory pain pathway concept, and why duloxetine is FDA-approved for 3 pain conditions while no SSRI has any.",
    },
    {
      number: 3,
      title: "Clinical Practice & Signature Safety",
      description: "When do you use it? What about hepatotoxicity and CYP1A2 interactions?",
      sectionIds: ["clinical-uses", "side-effects", "monitoring", "contraindications", "evidence-practice", "interactions", "patient-education"],
      checkpoint: "You can now prescribe duloxetine safely — you know the LFT monitoring, alcohol avoidance, CYP1A2 interactions (fluvoxamine, ciprofloxacin), and when it's preferred over venlafaxine.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian private vs government settings?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian brands (Cymbalta, Duzela, Dulane, Symbal), the Schedule H status, the moderate cost, why it's NOT in government formularies or Jan Aushadhi, and why amitriptyline is the government alternative for diabetic neuropathy.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, clinical cases, and SNRI drug comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam-specific content, worked through a clinical case, compared duloxetine with venlafaxine and desvenlafaxine, and have a one-page revision summary.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer these without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you could answer all the active recall questions, you have exam-level mastery of Duloxetine.",
    },
  ],

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Cymbalta label, NICE CG91, NICE CG173 (Neuropathic Pain), APA Practice Guideline, ADA Standards of Care, KD Tripathi 8e, IPS Depression Guidelines, RSSDI Diabetes Guidelines, NMC CBME Curriculum"],
};
