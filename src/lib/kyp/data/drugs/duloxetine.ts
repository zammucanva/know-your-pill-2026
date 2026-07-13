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

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Cymbalta label"],
};
