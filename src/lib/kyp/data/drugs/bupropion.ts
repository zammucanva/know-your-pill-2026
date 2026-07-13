import type { Drug } from "../types";

/**
 * Bupropion — canonical drug page data.
 *
 * Structured to mirror the sertraline / venlafaxine template exactly so every
 * section of /app/drugs/[slug]/page.tsx renders without modification.
 *
 * Bupropion is CLINICALLY DISTINCT from the SSRIs / SNRIs already in the
 * registry: it is a norepinephrine-dopamine reuptake inhibitor (NDRI) with
 * NO serotonergic activity — which is why it uniquely does NOT cause sexual
 * dysfunction, weight gain, sedation, or discontinuation syndrome. It is also
 * a nicotinic acetylcholine receptor antagonist, the basis for its FDA
 * approval as a smoking-cessation aid (Zyban). Two signature safety issues
 * distinguish it: (1) dose-dependent seizures (the highest seizure risk of
 * any modern antidepressant — contraindicated in seizure disorder and eating
 * disorders), and (2) strong CYP2D6 inhibition despite being metabolised by
 * CYP2B6. Every section below reflects those signature pharmacological
 * features.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition
 *   - FDA Prescribing Information for WELLBUTRIN / WELLBUTRIN SR / WELLBUTRIN XL / ZYBAN
 *   - NICE Clinical Guideline CG91 (Depression in adults)
 *   - APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder
 *   - US Public Health Service Guideline — Treating Tobacco Use and Dependence
 *
 * Last reviewed: 2026-07-13
 */
export const bupropion: Drug = {
  /* ---- Identity ---- */
  slug: "bupropion",
  genericName: "Bupropion",
  brandNames: ["Wellbutrin", "Wellbutrin XL", "Wellbutrin SR", "Zyban", "Aplenzin"],
  drugClass: "stimulant",
  drugClassLabel: "NDRI",
  drugClassFullName: "Norepinephrine-Dopamine Reuptake Inhibitor",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "NDRIs", "Bupropion"],

  /* ---- Hero / summary ---- */
  tagline:
    "An NDRI that blocks NET and DAT (NOT SERT) — the only commonly used antidepressant with no sexual dysfunction, no weight gain, and no discontinuation syndrome. Also a nicotinic ACh antagonist used for smoking cessation (Zyban).",
  summary:
    "Bupropion is a norepinephrine-dopamine reuptake inhibitor (NDRI) that blocks the norepinephrine transporter (NET) and the dopamine transporter (DAT) with negligible affinity for the serotonin transporter (SERT). This complete absence of serotonergic activity is the single most important fact about the drug — it explains every clinical signature that distinguishes bupropion from SSRIs and SNRIs: no sexual dysfunction (the #1 clinical advantage), no weight gain (often weight loss), no sedation (it is activating — useful for lethargic depression), no prominent GI side effects, and no discontinuation syndrome. Bupropion is also a non-competitive antagonist at α3β4 and α4β2 nicotinic acetylcholine receptors, which is the mechanism underlying its FDA approval as a smoking-cessation aid (marketed as Zyban). Two signature safety issues define its prescribing envelope: (1) dose-dependent seizures — bupropion lowers the seizure threshold more than any other modern antidepressant, with risk rising sharply above 450 mg/day, making it absolutely contraindicated in seizure disorders and eating disorders (which inherently lower the threshold); and (2) strong CYP2D6 inhibition, which raises levels of TCAs, metoprolol, propafenone, paroxetine, and many antipsychotics — even though bupropion itself is metabolised by CYP2B6. The active metabolite hydroxybupropion (formed by CYP2B6) is pharmacologically equivalent to the parent and has a longer half-life (20–24 h vs 21 h). FDA-approved for three distinct indications across psychiatry and addiction medicine — major depressive disorder, seasonal affective disorder prevention, and smoking cessation — bupropion has the broadest indication range of any single antidepressant molecule.",
  estimatedReadTime: "18 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain bupropion's NDRI mechanism — dual NET + DAT blockade with NO SERT activity — and predict how this unique pharmacology produces no sexual dysfunction, no weight gain, no sedation, and no discontinuation syndrome.",
    "Identify the absolute contraindications to bupropion (seizure disorder, eating disorders, alcohol withdrawal, head trauma, MAOIs) and explain the shared mechanism — lowered seizure threshold.",
    "Recognise the dose-dependent seizure risk and the hard dose ceiling of 450 mg/day (XL) or 400 mg/day (SR) — the single most-tested safety fact about bupropion.",
    "Use bupropion's unique advantages to select it appropriately — for SSRI-induced sexual dysfunction (augmentation or switch), for atypical/lethargic depression with hypersomnia and hyperphagia, for depressed patients who smoke or are overweight, and for adult ADHD off-label.",
    "Apply bupropion's strong CYP2D6 inhibition clinically to predict and manage interactions with metoprolol, TCAs, antipsychotics, paroxetine, and antiarrhythmics — and identify CYP2B6 inhibitors/inducers that alter bupropion levels.",
    "Counsel a patient on the three indications (MDD, seasonal affective disorder, smoking cessation), the morning dosing (activating — causes insomnia at night), the absence of withdrawal, and the smoking-cessation course (typically 7–12 weeks, often combined with nicotine replacement).",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Bupropion blocks the norepinephrine transporter (NET) and the dopamine transporter (DAT), increasing synaptic norepinephrine and dopamine — with negligible effect on serotonin (SERT). It is also a non-competitive antagonist at nicotinic acetylcholine receptors, the basis of its smoking-cessation efficacy.",
    molecularTarget:
      "NET (SLC6A2 — norepinephrine transporter) and DAT (SLC6A3 — dopamine transporter); non-competitive antagonist at α3β4 and α4β2 nicotinic acetylcholine receptors. NO clinically meaningful SERT affinity.",
    effect:
      "Acute: increased synaptic norepinephrine and dopamine in the prefrontal cortex and reward pathway (mesolimbic). The NE effect drives energy, attention, and anxiogenic potential; the DA effect drives motivation, reward, and the small risk of psychosis. Chronic (1–2 weeks): downstream neuroadaptive changes including BDNF upregulation and cortical dopaminergic tone normalisation. Because bupropion does NOT touch SERT, it produces none of the SSRI signature effects — no sexual dysfunction, no GI upset, no platelet effects, no SIADH pattern, no serotonin withdrawal. The nicotinic antagonism in the ventral tegmental area reduces nicotine-triggered dopamine release, attenuating the rewarding and reinforcing properties of smoking.",
    steps: [
      "Bupropion binds the norepinephrine transporter (NET) on presynaptic noradrenergic neurons (locus coeruleus and periphery), blocking reuptake of norepinephrine from the synaptic cleft.",
      "Bupropion also binds the dopamine transporter (DAT) on presynaptic dopaminergic neurons in the mesolimbic and mesocortical pathways, blocking dopamine reuptake — increasing synaptic dopamine in the prefrontal cortex (attention, energy) and nucleus accumbens (motivation, reward).",
      "Critically, bupropion has negligible affinity for the serotonin transporter (SERT). There is NO acute rise in synaptic serotonin and NO downstream 5-HT1A autoreceptor desensitisation. This is why bupropion lacks every serotonergic signature effect — no sexual dysfunction, no GI upset, no platelet inhibition, no SIADH, no serotonin withdrawal.",
      "The active metabolite hydroxybupropion (formed by CYP2B6) is pharmacologically equivalent to the parent and reaches 5–10× higher plasma concentrations — it contributes substantially to chronic NET/DAT blockade.",
      "Bupropion and hydroxybupropion non-competitively antagonise α3β4 and (more weakly) α4β2 nicotinic acetylcholine receptors in the mesolimbic reward pathway. By blocking nicotinic receptor activation, bupropion blunts the dopamine surge triggered by inhaled nicotine — reducing the rewarding and reinforcing properties of smoking.",
      "Acute NET + DAT blockade is responsible for the activating, anxiogenic, and insomnia-producing effects (norepinephrine + dopamine in the cortex) — which is why bupropion is given in the morning and is poorly suited to anxious/agitated depression.",
      "Over 1–2 weeks, downstream neuroadaptive changes (BDNF upregulation, cortical dopaminergic tone normalisation, α2-adrenoceptor downregulation) produce the clinical antidepressant effect. Onset may be slightly faster than SSRIs (some benefit in 1–2 weeks) due to the direct dopaminergic action.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ≥87% for IR; SR and XL formulations extend the absorption window). Peak plasma at 5 hours (SR) or 5 hours (XL). Food does not meaningfully affect absorption but may delay peak. Protein binding ~84%. Volume of distribution ~19 L/kg (extensive distribution, ~2000 L for hydroxybupropion) — distributes widely including into CNS. The SR (twice-daily) and XL (once-daily) formulations are designed to limit peak plasma excursions, which is the principal strategy for reducing the dose-dependent seizure risk.",
    halfLife:
      "Bupropion: ~21 hours (parent). Hydroxybupropion (active metabolite): ~20 hours (range 19–24 h). Threohydrobupropion (active): ~37 hours. Combined effective half-life supports once-daily XL dosing; the relatively long half-life and lack of serotonergic action explain the absence of discontinuation syndrome.",
    activeMetabolite:
      "Hydroxybupropion — formed by CYP2B6 hydroxylation. Pharmacologically equivalent to the parent (similar NET/DAT affinity), reaches 5–10× higher steady-state plasma concentrations than bupropion itself, and contributes substantially to chronic therapeutic effect. The Aplenzin formulation is hydroxybupropion extended-release, exploiting this active metabolite directly. Threohydrobupropion (formed by reduction of the carbonyl, NOT CYP-mediated) is also active and contributes to clinical effect, especially in CYP2B6 slow metabolisers.",
    metabolism:
      "Hepatic CYP2B6 (primary — hydroxylation to hydroxybupropion). Minor contributions from CYP2C9, CYP2D6, CYP3A4, and CYP1A2. Carbonyl reduction to threohydrobupropion is non-CYP. Bupropion is itself a STRONG CYP2D6 inhibitor (the CYP2D6 inhibition is not the same enzyme that metabolises bupropion — this is an important and frequently tested point).",
    excretion:
      "Primarily renal (~87% — 0.5% as unchanged bupropion, the remainder as metabolites). Faecal elimination ~10%. Renal impairment prolongs elimination of metabolites — dose/frequency reduction required in severe renal impairment.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic-ne", label: "Presynaptic NE neuron", sublabel: "Locus coeruleus — synthesises norepinephrine", variant: "input" },
      { id: "norepinephrine", label: "Norepinephrine (NE)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "net", label: "NET transporter", sublabel: "Normally reuptakes norepinephrine", variant: "target" },
      { id: "presynaptic-da", label: "Presynaptic DA neuron", sublabel: "VTA / mesolimbic & mesocortical — synthesises dopamine", variant: "input" },
      { id: "dopamine", label: "Dopamine (DA)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "dat", label: "DAT transporter", sublabel: "Normally reuptakes dopamine", variant: "target" },
      { id: "bupropion", label: "Bupropion", sublabel: "NDRI — dual NET + DAT blockade", variant: "inhibit" },
      { id: "sert-none", label: "SERT — NOT blocked", sublabel: "Negligible serotonin effect — the key to bupropion's unique profile", variant: "process" },
      { id: "nicotinic", label: "Nicotinic ACh receptor (α3β4, α4β2)", sublabel: "Antagonised by bupropion — blocks nicotine reward", variant: "target" },
      { id: "pfc", label: "Prefrontal cortex", sublabel: "Mood + energy + attention improve (NE + DA)", variant: "output" },
      { id: "reward", label: "Nucleus accumbens (reward)", sublabel: "DA ↑ → motivation; nicotinic block → less nicotine reward", variant: "output" },
      { id: "no-sex-no-weight", label: "No sexual SE · No weight gain · No sedation · No withdrawal", sublabel: "Because serotonin is NOT touched", variant: "output" },
      { id: "seizure-risk", label: "Seizure threshold ↓ (dose-dependent)", sublabel: "Signature safety risk — max 450 mg/day", variant: "output" },
    ],
    edges: [
      { from: "presynaptic-ne", to: "norepinephrine", label: "releases" },
      { from: "norepinephrine", to: "net", label: "reuptake" },
      { from: "presynaptic-da", to: "dopamine", label: "releases" },
      { from: "dopamine", to: "dat", label: "reuptake" },
      { from: "bupropion", to: "net", type: "inhibit", label: "blocks" },
      { from: "bupropion", to: "dat", type: "inhibit", label: "blocks" },
      { from: "bupropion", to: "nicotinic", type: "inhibit", label: "antagonises" },
      { from: "bupropion", to: "sert-none", label: "no affinity (key fact)" },
      { from: "net", to: "pfc", label: "↑ NE → energy + attention" },
      { from: "dat", to: "pfc", label: "↑ DA → mood + cognition" },
      { from: "dat", to: "reward", label: "↑ DA → motivation" },
      { from: "nicotinic", to: "reward", type: "inhibit", label: "↓ nicotine-driven DA surge (smoking cessation)" },
      { from: "sert-none", to: "no-sex-no-weight", label: "no serotonergic signature effects" },
      { from: "bupropion", to: "seizure-risk", label: "dose-dependent (↑ above 450 mg/day)" },
    ],
    caption:
      "Bupropion blocks NET and DAT (NOT SERT) and antagonises nicotinic ACh receptors. The absence of SERT blockade is the source of every clinical advantage (no sexual SE, no weight gain, no withdrawal); the nicotinic antagonism is the basis of its FDA approval for smoking cessation. The dose-dependent seizure risk is the defining safety constraint.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Norepinephrine (NE)", "Dopamine (DA)", "Acetylcholine (nicotinic — antagonised)"],
  receptors: [
    "NET (norepinephrine transporter) — clinically relevant blockade",
    "DAT (dopamine transporter) — clinically relevant blockade",
    "SERT (serotonin transporter) — negligible affinity (key differentiator from SSRIs/SNRIs)",
    "α3β4 nicotinic acetylcholine receptor — non-competitive antagonist (smoking cessation mechanism)",
    "α4β2 nicotinic acetylcholine receptor — antagonist (contributes to smoking cessation)",
    "5-HT3A (weak antagonist — may contribute to antiemetic effect)",
  ],
  brainRegionIds: ["prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: ["mesolimbic", "mesocortical", "nigrostriatal"],

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Major Depressive Disorder (MDD)",
      status: "fda-approved",
      description:
        "First-line option in adults — particularly suited to lethargic/anergic ('atypical') depression with hypersomnia, hyperphagia, and leaden paralysis, where the activating NE+DA effect is therapeutic. Also first choice when sexual dysfunction or weight gain is a concern. Not first-line for anxious/agitated depression (activating effect can worsen anxiety). Dose: 150 mg XL once daily → titrate to 300 mg XL once daily; max 450 mg/day.",
      ageGroup: "Adults",
    },
    {
      name: "Seasonal Affective Disorder (SAD) — prevention",
      status: "fda-approved",
      description:
        "FDA-approved for prevention of winter-pattern seasonal affective disorder. Initiate in autumn (September–November) before symptom onset, continue through winter, and taper in spring. Dose: 150 mg XL → 300 mg XL once daily. One of only two antidepressants with this indication (the other being the related Aplenzin formulation).",
      ageGroup: "Adults",
    },
    {
      name: "Smoking Cessation (Zyban)",
      status: "fda-approved",
      description:
        "FDA-approved as an aid to smoking cessation under the brand name Zyban (same molecule, different indication and dosing schedule). Start 1–2 weeks BEFORE the target quit date (allows steady-state bupropion + hydroxybupropion to be present when nicotine is withdrawn). Standard course: 7–12 weeks. Can be combined with nicotine replacement therapy (NRT) — combination is more effective than either alone. Dose: 150 mg SR once daily for 3 days, then 150 mg SR twice daily (≥8 hours apart, last dose no later than early evening to avoid insomnia).",
      ageGroup: "Adults",
    },
    {
      name: "SSRI-induced sexual dysfunction (augmentation)",
      status: "off-label",
      description:
        "Adding bupropion XL 150 mg/day to an existing SSRI/SNRI is first-line augmentation for SSRI-induced sexual dysfunction and is also effective for partial response. Mechanism: DA/NE augmentation counters the serotonergic inhibition of sexual arousal. Alternative: switch SSRI to bupropion monotherapy if sexual side effects are the primary reason for treatment change.",
      ageGroup: "Adults",
    },
    {
      name: "Adult ADHD (off-label)",
      status: "off-label",
      description:
        "Off-label use in adult attention-deficit/hyperactivity disorder — particularly in patients with comorbid depression, substance-use history (low abuse potential vs stimulants), or intolerance of amphetamine/methylphenidate. Less effective than first-line stimulants but useful when stimulants are contraindicated. Dose: 150–300 mg XL once daily in the morning.",
      ageGroup: "Adults",
    },
    {
      name: "Bipolar Depression (adjunct)",
      status: "off-label",
      description:
        "Off-label adjunct to mood stabilisers for bipolar depression. Lower switch risk than tricyclics or SNRIs (less serotonergic and noradrenergic drive relative to TCAs), but dopaminergic activity means monotherapy in bipolar is NOT recommended — must be combined with a mood stabiliser (lithium, valproate, or an atypical antipsychotic). Use caution: bupropion can still precipitate mania.",
      ageGroup: "Adults",
    },
  ],

  contraindications: [
    {
      name: "Seizure disorder (epilepsy)",
      severity: "absolute",
      rationale:
        "Bupropion lowers the seizure threshold more than any other modern antidepressant. The risk is dose-dependent and rises sharply above 450 mg/day. Any patient with a history of seizures (or unexplained single seizure) must NOT receive bupropion — choose an SSRI (sertraline) or mirtazapine instead.",
    },
    {
      name: "Eating disorders (bulimia nervosa, anorexia nervosa)",
      severity: "absolute",
      rationale:
        "Patients with active or prior eating disorders — particularly bulimia nervosa (electrolyte disturbances from purging) and anorexia nervosa (starvation-related EEG changes) — have an inherently lowered seizure threshold. Bupropion is absolutely contraindicated in this population even in remission, as seizure risk is markedly elevated.",
    },
    {
      name: "Abrupt alcohol withdrawal",
      severity: "absolute",
      rationale:
        "Alcohol withdrawal itself lowers the seizure threshold (rum fits). Adding bupropion during acute alcohol withdrawal compounds the risk dangerously. Wait until the patient is past the acute withdrawal window (typically 1–2 weeks) before initiating bupropion.",
    },
    {
      name: "MAOI coadministration",
      severity: "absolute",
      rationale:
        "Combining bupropion with MAOIs (phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) can precipitate hypertensive crisis (bupropion's NE effect + MAO inhibition). At least 14 days must elapse between discontinuation of an MAOI and initiation of bupropion; at least 14 days between stopping bupropion and starting an MAOI.",
    },
    {
      name: "Head trauma / known CNS lesion",
      severity: "absolute",
      rationale:
        "Head trauma, space-occupying lesions, and active CNS infection all lower the seizure threshold. Bupropion is contraindicated in these patients to avoid precipitating seizures.",
    },
    {
      name: "Known hypersensitivity to bupropion",
      severity: "absolute",
      rationale:
        "Anaphylaxis, angioedema, and serious skin reactions (Stevens-Johnson syndrome) have been reported. Any confirmed hypersensitivity reaction to bupropion is an absolute contraindication to all formulations and brands (Wellbutrin, Zyban, Aplenzin — all the same molecule).",
    },
    {
      name: "Concurrent linezolid or methylene blue",
      severity: "relative",
      rationale:
        "Linezolid and methylene blue are reversible MAO inhibitors. Although bupropion is not primarily serotonergic, coadministration risks hypertensive crisis via the MAO-inhibition + NE-elevation combination. Withhold linezolid/methylene blue for at least 14 days before starting bupropion; resume only after 24 hours off bupropion.",
    },
  ],

  blackBoxWarnings: [
    {
      title: "Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults",
      text:
        "Antidepressants increased the risk of suicidal thinking and behaviour (suicidality) in short-term studies in children, adolescents, and young adults with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of bupropion in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. NOTE: bupropion is NOT approved for paediatric depression; the boxed warning still applies to young adults (18–24).",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Insomnia",
      frequency: "very-common",
      severity: "mild",
      description:
        "Bupropion is activating (NE + DA in cortex). Insomnia is one of the most common side effects and is the reason bupropion is dosed in the MORNING. Giving it at night predictably causes sleep disruption.",
      management: "Take the last dose no later than late afternoon (for SR twice-daily dosing, second dose by 4 PM). For XL, take once daily in the morning. If insomnia persists despite morning dosing, consider dose reduction or switch to a less activating antidepressant.",
    },
    {
      name: "Headache",
      frequency: "very-common",
      severity: "mild",
      description: "Usually transient in the first 1–2 weeks. Often settles as the body adapts to increased cortical NE/DA.",
      management: "Paracetamol is safe. Adequate hydration. Differentiate from hypertensive headache — check BP if severe or persistent.",
    },
    {
      name: "Dry mouth",
      frequency: "common",
      severity: "mild",
      description:
        "Despite minimal muscarinic affinity, dry mouth is common — likely a downstream effect of noradrenergic tone on salivary gland vasculature. Sip water, sugar-free gum, good dental hygiene.",
    },
    {
      name: "Nausea",
      frequency: "common",
      severity: "mild",
      description:
        "Less prominent than with SSRIs (no serotonin-mediated gut effect). Usually transient. SR and XL formulations reduce peak-related nausea.",
      management: "Take with food. Use SR/XL formulation. Split dosing if on IR.",
    },
    {
      name: "Anxiety / agitation",
      frequency: "common",
      severity: "moderate",
      description:
        "Noradrenergic + dopaminergic activation can produce jitteriness, restlessness, and anxiety — particularly in the first 1–2 weeks and in patients with anxious/agitated depression. This is the basis for caution in anxious depression.",
      management: "Start low (150 mg XL) and titrate slowly. If anxiety is severe or worsens, switch to an SSRI (sertraline) — bupropion is the WRONG drug for anxious depression.",
    },
    {
      name: "Tremor",
      frequency: "common",
      severity: "mild",
      description:
        "Fine hand tremor, similar to that seen with stimulants and other noradrenergic agents. Usually dose-related and mild. Mechanism: enhanced NE and DA in the basal ganglia / motor cortex.",
      management: "Dose reduction if troublesome. Often improves with chronic use. Avoid concurrent caffeine.",
    },
    {
      name: "Sweating",
      frequency: "common",
      severity: "mild",
      description:
        "Increased sweating (especially nocturnal) reflects noradrenergic activation of thermoregulatory pathways. Less than with SNRIs but more than with SSRIs. Distressing but benign.",
    },
    {
      name: "Constipation",
      frequency: "common",
      severity: "mild",
      description:
        "Noradrenergic effect on gut motility (opposite of serotonergic diarrhoea). Usually mild. Hydration, fibre, and exercise help.",
    },
    {
      name: "Weight LOSS (advantage)",
      frequency: "common",
      severity: "mild",
      description:
        "Unlike most antidepressants (paroxetine, mirtazapine, TCAs), bupropion causes appetite suppression and weight LOSS — typically 1–2 kg over 6–12 months. This is a major advantage in overweight/obese depressed patients and is one of the reasons bupropion is sometimes combined with naltrexone as the weight-loss drug Contrave. Weight loss is not a side effect to be 'managed' — it is part of bupropion's clinical niche.",
      management: "Generally desirable. Monitor weight in underweight patients. Consider switching if weight loss is undesirable.",
    },
    {
      name: "Tinnitus",
      frequency: "uncommon",
      severity: "mild",
      description: "Reported in clinical trials at slightly higher rates than placebo. Usually mild and reversible on discontinuation. Mechanism unclear.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Seizures (dose-dependent — signature risk)",
      frequency: "uncommon",
      severity: "life-threatening",
      description:
        "Bupropion lowers the seizure threshold more than any other modern antidepressant. At therapeutic doses (≤450 mg/day in patients without risk factors), incidence is ~0.1% (similar to other antidepressants). Above 450 mg/day, incidence rises sharply to ~0.4%, and overdose carries a ~30% seizure risk. Risk factors: dose >450 mg/day, eating disorder, head trauma, alcohol withdrawal, concurrent seizure-threshold-lowering drugs (TCAs, antipsychotics, tramadol, theophylline, meperidine), and rapid dose escalation. This is the #1 safety fact about bupropion.",
      management: "Never exceed 450 mg/day XL (400 mg/day SR). Screen ALL patients for seizure risk factors before prescribing. Absolute contraindications: seizure disorder, eating disorders, alcohol withdrawal, head trauma. Avoid combining with other seizure-threshold-lowering drugs. In overdose: benzodiazepines IV, ICU monitoring, charcoal if early.",
      sideEffectId: "seizures",
    },
    {
      name: "Psychosis / hallucinations",
      frequency: "rare",
      severity: "severe",
      description:
        "Dopaminergic activity in the mesolimbic pathway can precipitate psychotic symptoms (delusions, hallucinations) — rare at therapeutic doses but reported. Higher risk in patients with schizophrenia or schizoaffective disorder, and in overdose. Mechanism: enhanced mesolimbic DA signalling (the same circuit that antipsychotics block).",
      management: "Discontinue bupropion. Consider antipsychotic if psychosis persists. Use bupropion with caution in patients with psychotic disorders; the dopaminergic mechanism makes it potentially destabilising.",
    },
    {
      name: "Hypertension",
      frequency: "uncommon",
      severity: "moderate",
      description:
        "Noradrenergic effect raises BP in some patients — less pronounced than venlafaxine but clinically meaningful. Particularly relevant when combined with nicotine replacement therapy (NRT) — both raise NE and BP. Sustained hypertension should prompt dose reduction or switch.",
      management: "Check baseline BP. Recheck at 2–4 weeks and after dose changes. If sustained BP elevation >140/90 in a previously normotensive patient, reduce dose or switch. Monitor more closely if combined with NRT or vasoconstrictors.",
    },
    {
      name: "Serotonin syndrome (only with serotonergic co-prescription)",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Bupropion itself does NOT cause serotonin syndrome — it has no SERT activity. However, when COMBINED with serotonergic drugs (SSRIs, SNRIs, TCAs, tramadol, triptans, MAOIs), the addition of NE/DA activity can amplify the serotonergic picture. Most cases occur when bupropion is added to a patient already on a serotonergic agent.",
      management: "Discontinue all serotonergic agents. Supportive care — cooling, benzodiazepines for agitation. Cyproheptadine in severe cases. ICU for hyperthermia >41°C. Be vigilant when bupropion is used as SSRI augmentation.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Black-box warning (all antidepressants). Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk. NOTE: bupropion is not approved for paediatric depression but the boxed warning still applies to young adults.",
      management: "Weekly contact during first month. Warn patient and family to watch for agitation, irritability, or new suicidal thoughts. Document informed consent.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Bupropion's dopaminergic activity can precipitate a manic switch in undiagnosed bipolar disorder — perhaps more so than SSRIs in some patients. Screen with MDQ before initiating any antidepressant. In known bipolar depression, only use bupropion as an adjunct to a mood stabiliser.",
      management: "Discontinue if mania emerges. Screen for bipolar disorder before initiating. In bipolar depression, use only as adjunct to lithium/valproate/atypical antipsychotic — never as monotherapy.",
    },
    {
      name: "Stevens-Johnson syndrome (SJS)",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Rare but reported — severe mucocutaneous reaction. Onset typically within the first 8 weeks. The FDA label warns of SJS and anaphylaxis. Patients should be counselled to report any rash immediately.",
      management: "Discontinue bupropion immediately at first sign of rash, mucosal involvement, or systemic symptoms (fever, lymphadenopathy). Emergency dermatology evaluation. Supportive care — fluid, electrolyte, wound care. Do not rechallenge.",
    },
    {
      name: "Seizure in overdose (high incidence)",
      frequency: "unknown",
      severity: "life-threatening",
      description:
        "Bupropion overdose carries a uniquely high seizure rate (~30%) compared with other antidepressants — often delayed 1–8 hours after ingestion. Single doses as low as 2× the maximum daily dose have caused seizures. Other features: tachycardia, agitation, hallucinations, QTc prolongation.",
      management: "Activated charcoal if within 1 hour. IV benzodiazepines for seizures (often high doses required). ICU monitoring for at least 8 hours. ECG monitoring for QTc. Activated charcoal may be considered beyond 1 hour due to SR/XL delayed absorption.",
    },
  ],

  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Seizure history & risk-factor assessment",
      frequency: "Baseline (BEFORE prescribing) — single most important assessment.",
      rationale:
        "Bupropion's signature safety risk is seizures. Screen for: personal/family history of seizures, eating disorder (current or remote), head trauma, alcohol misuse/withdrawal, concurrent seizure-threshold-lowering drugs, CNS tumour/infection. If ANY risk factor is present, choose a different antidepressant.",
    },
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. Monitor for clinical worsening, agitation, irritability, or new suicidal thoughts — especially during dose changes and during the first 1–2 months.",
    },
    {
      parameter: "Blood pressure",
      frequency: "Baseline, 2–4 weeks after initiation or dose change, then periodically.",
      rationale:
        "Bupropion's noradrenergic effect can raise BP — less than venlafaxine but clinically meaningful. Monitor more closely when combined with nicotine replacement therapy (NRT) or in patients with pre-existing hypertension.",
    },
    {
      parameter: "Weight & BMI (note: weight LOSS expected)",
      frequency: "Baseline, 1 month, 3 months, then every 6 months.",
      rationale:
        "Unlike most antidepressants, bupropion causes weight LOSS (typically 1–2 kg). This is usually desirable (advantage in overweight/obese patients) but monitor for excessive loss in underweight patients or those with eating disorder history (absolute contraindication — should not be on bupropion anyway).",
    },
    {
      parameter: "Response assessment (PHQ-9)",
      frequency: "Baseline, week 2, week 4, week 8, then every 3 months.",
      rationale:
        "Quantifies response. ≥50% PHQ-9 reduction = response. PHQ-9 <5 = remission. Onset may be slightly faster than SSRIs (some benefit in 1–2 weeks) due to the direct dopaminergic action — but full effect still takes 4–6 weeks.",
    },
    {
      parameter: "Anxiety / agitation (early treatment)",
      frequency: "Week 1, week 2, then at each visit until stable.",
      rationale:
        "Bupropion's activating NE+DA effect can worsen anxiety — particularly in the first 1–2 weeks and in anxious/agitated depression. If anxiety worsens significantly, switch to an SSRI (sertraline) — bupropion is poorly suited to anxious depression.",
    },
    {
      parameter: "Smoking-status assessment (if used for smoking cessation)",
      frequency: "Weekly during quit attempt, then at 3 months, 6 months, 12 months.",
      rationale:
        "For smoking cessation, monitor quit status, craving, and withdrawal symptoms. Combination with NRT is more effective than either alone. If still smoking at 7 weeks, discontinue — unlikely to work. Sustained abstinence at 12 months is the outcome measure.",
    },
    {
      parameter: "CYP2D6 substrate co-medications",
      frequency: "At every prescribing change.",
      rationale:
        "Bupropion is a STRONG CYP2D6 inhibitor. Review the patient's medication list for: metoprolol, propranolol, propafenone, flecainide, TCAs (nortriptyline, desipramine), antipsychotics (risperidone, haloperidol, aripiprazole), paroxetine, fluoxetine, venlafaxine, tramadol. Dose reduction of the co-medication may be required.",
    },
  ],

  interactions: [
    {
      drug: "MAOIs (phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue)",
      severity: "contraindicated",
      mechanism:
        "MAOIs inhibit monoamine breakdown. Combining with bupropion's NE-elevating effect → hypertensive crisis. Bupropion itself is not serotonergic, but the MAOI + NE/DA combination is dangerous.",
      action: "Absolute contraindication. Wait 14 days after stopping MAOI before starting bupropion; 14 days after stopping bupropion before starting MAOI.",
    },
    {
      drug: "Other seizure-threshold-lowering drugs (TCAs, antipsychotics, tramadol, theophylline, meperidine, systemic corticosteroids, antimalarials)",
      severity: "major",
      mechanism:
        "Additive seizure threshold lowering. Bupropion's signature risk is seizures; combining with any other threshold-lowering agent compounds the risk dangerously.",
      action: "Avoid combination whenever possible. If unavoidable, keep bupropion at the lowest effective dose, never exceed 450 mg/day, and counsel patient about seizure risk. Document the clinical justification.",
    },
    {
      drug: "CYP2D6 substrates — metoprolol, propranolol, propafenone, flecainide, TCAs (nortriptyline, desipramine, imipramine), antipsychotics (risperidone, haloperidol, aripiprazole, thioridazine), paroxetine, fluoxetine, venlafaxine, tramadol, atomoxetine, tamoxifen",
      severity: "major",
      mechanism:
        "Bupropion is a STRONG CYP2D6 inhibitor. Even though bupropion itself is metabolised by CYP2B6, it potently inhibits CYP2D6 — raising levels of CYP2D6 substrates 2–5×. This is the #1 drug-interaction point about bupropion. Thioridazine combination is particularly dangerous (QTc prolongation → torsades). Tamoxifen interaction reduces formation of active metabolite endoxifen — may reduce cancer protection.",
      action: "Review medication list before starting bupropion. Reduce dose of CYP2D6 substrates by ~25–50% if combination is necessary. Monitor for toxicity (e.g. bradycardia with metoprolol, anticholinergic effects with TCAs, extrapyramidal effects with antipsychotics). Avoid thioridazine combination entirely.",
    },
    {
      drug: "CYP2B6 inhibitors — clopidogrel, ticlopidine, paroxetine, fluoxetine, sertraline",
      severity: "moderate",
      mechanism:
        "These drugs inhibit CYP2B6, the enzyme that metabolises bupropion to hydroxybupropion. Plasma bupropion rises; hydroxybupropion falls. Net pharmacodynamic effect is generally preserved (both are active) but tolerability may worsen.",
      action: "Monitor for increased bupropion side effects (insomnia, anxiety, tremor). Dose reduction of bupropion may be needed.",
    },
    {
      drug: "CYP2B6 inducers — rifampin, ritonavir, efavirenz, carbamazepine, phenytoin, phenobarbital",
      severity: "moderate",
      mechanism:
        "These drugs induce CYP2B6, accelerating bupropion metabolism and reducing plasma levels of both bupropion and hydroxybupropion — potentially reducing efficacy. Particularly relevant in HIV patients on efavirenz or rifampin-based TB therapy.",
      action: "Monitor for loss of antidepressant efficacy. Dose increase of bupropion may be needed (within the 450 mg/day ceiling).",
    },
    {
      drug: "Alcohol (especially abrupt cessation)",
      severity: "major",
      mechanism:
        "Two-way risk: (1) abrupt alcohol cessation lowers seizure threshold (rum fits) → bupropion compounds the risk; (2) chronic alcohol misuse itself lowers seizure threshold. The combination is the historical reason bupropion was nearly withdrawn in the 1980s (high seizure rates in alcoholic patients).",
      action: "Avoid in active heavy alcohol use or recent withdrawal. Wait 1–2 weeks after alcohol cessation before initiating bupropion. Counsel patient on the seizure risk of binge drinking + bupropion.",
    },
    {
      drug: "Levodopa and amantadine",
      severity: "major",
      mechanism:
        "Both levodopa and amantadine increase central dopaminergic tone. Combining with bupropion's DAT blockade produces additive dopaminergic effect → heightened risk of psychosis, hallucinations, and dyskinesia.",
      action: "Avoid combination if possible. If unavoidable (e.g. Parkinson's patient with depression), use lower bupropion dose and monitor closely for psychosis.",
    },
    {
      drug: "Nicotine replacement therapy (NRT) — patches, gum, lozenges",
      severity: "moderate",
      mechanism:
        "Both bupropion (NE) and nicotine (NE + DA via nicotinic receptors) raise blood pressure. Combination is actually MORE effective than either alone for smoking cessation — but BP must be monitored.",
      action: "Combination is acceptable and often recommended for smoking cessation. Monitor BP at baseline, 2 weeks, and after dose changes. Reduce NRT dose if BP rises.",
    },
    {
      drug: "Dopamine agonists (pramipexole, ropinirole, bromocriptine)",
      severity: "moderate",
      mechanism:
        "Additive dopaminergic effect. May be beneficial (combined for refractory depression or restless legs) but raises psychosis risk, especially in Parkinson's patients.",
      action: "Use with caution. Monitor for psychosis, impulse-control disorders (gambling, hypersexuality).",
    },
    {
      drug: "Drugs that lower seizure threshold via QTc — thioridazine, pimozide, ziprasidone, antiarrhythmics",
      severity: "major",
      mechanism:
        "Bupropion raises levels of these CYP2D6 substrates (QTc prolongation) AND independently lowers seizure threshold — combined risk of both seizures and arrhythmia. Thioridazine combination is particularly dangerous.",
      action: "Avoid thioridazine and pimozide entirely. ECG monitoring with other QTc-prolonging drugs. Consider alternative antidepressant.",
    },
    {
      drug: "Tamoxifen",
      severity: "major",
      mechanism:
        "Bupropion's strong CYP2D6 inhibition prevents conversion of tamoxifen to its active metabolite endoxifen — potentially reducing the cancer-preventing effect. CYP2D6 inhibition can negate tamoxifen efficacy.",
      action: "Avoid combination. Choose an antidepressant without CYP2D6 inhibition (sertraline, escitalopram, venlafaxine) for women on tamoxifen.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Bupropion is NOT the first-choice antidepressant in pregnancy — sertraline is preferred. However, it has a growing safety database and may be acceptable when benefit justifies risk, particularly in specific scenarios: (1) pregnant women who smoke (smoking is MORE harmful to the fetus than bupropion, and bupropion is FDA-approved for smoking cessation — the smoking-cessation benefit may outweigh the drug risk); (2) women with severe SSRI-induced sexual dysfunction in whom sertraline/fluoxetine have failed; (3) women requiring an activating antidepressant for anergic depression. Available data do NOT show an increased risk of major congenital malformations overall; a small possible increase in cardiac defects has been suggested but not consistently reproduced. Third-trimester use may cause neonatal adaptation syndrome (jitteriness, irritability) but this is milder than with SSRIs because bupropion is not serotonergic. Untreated maternal depression carries significant risks (preterm birth, low birth weight, poor bonding, suicidality) — the decision to treat must weigh these against medication risks.",
    lactation:
      "Bupropion and its active metabolites transfer into breast milk in small amounts. Relative infant dose is estimated at ~0.5–2% of the maternal weight-adjusted dose — generally considered compatible with breastfeeding. However, because bupropion is activating (NE + DA), monitor the infant for irritability, insomnia, or poor feeding. Premature infants and those with hepatic immaturity may be more sensitive. The smoking-cessation indication is itself often relevant to lactating women who wish to quit smoking. Weigh benefits of breastfeeding + maternal treatment against the small infant-exposure risk.",
  },

  renalAdjustment:
    "Mild-to-moderate renal impairment (CrCl 30–89 mL/min): no dose adjustment required, but monitor for accumulation of bupropion and its metabolites — particularly insomnia, anxiety, and tremor. Severe renal impairment (CrCl <30 mL/min): reduce dose and/or frequency. Consider 150 mg every other day (XL) or 150 mg once daily (SR) as a starting dose, with cautious titration. A nephrologist's input is advisable in dialysis patients — bupropion and metabolites are removed by haemodialysis, so dosing should be timed relative to dialysis sessions.",

  hepaticAdjustment:
    "Mild-to-moderate hepatic impairment (Child-Pugh A/B): reduce dose and frequency. Recommended starting dose 150 mg every other day (XL) or 100 mg twice daily (SR), with cautious titration. Severe hepatic impairment (Child-Pugh C): max 150 mg every other day (XL) or 100 mg once daily (SR) — extreme caution. The dose/frequency reduction is critical because bupropion is extensively hepatically metabolised (CYP2B6) and accumulation sharply raises seizure risk — the dose ceiling applies with even greater force in hepatic impairment.",

  /* ---- Education ---- */
  patientExplanation:
    "Bupropion (Wellbutrin, Zyban) is an antidepressant that works differently from the more common SSRIs like sertraline or fluoxetine. Instead of targeting a brain chemical called serotonin, it boosts two OTHER chemicals — norepinephrine and dopamine — which control energy, motivation, attention, and reward. This is why bupropion has several advantages over other antidepressants: it does NOT cause sexual side effects (it's the go-to when SSRIs cause sexual problems), it does NOT cause weight gain (often causes mild weight LOSS), it does NOT make you drowsy (it's actually energising — good for low-energy depression), and it does NOT cause the 'brain zap' withdrawal that SSRIs can cause if you stop them suddenly. There are two important things to know about bupropion: (1) you take it in the MORNING because it can keep you awake if taken at night, and (2) it can increase the risk of seizures in certain people — so tell your doctor if you have ever had a seizure, an eating disorder, or are withdrawing from alcohol. Bupropion is also prescribed under the brand name Zyban to help people quit smoking, because it blocks the nicotine 'reward' signal in the brain.",

  patientEducationPoints: [
    "Take bupropion in the MORNING — it is an activating medicine and can cause insomnia if taken too late in the day. With the SR (twice-daily) form, take the second dose by mid-afternoon at the latest (no later than ~5 hours before bedtime). With the XL form, take once daily in the morning.",
    "Tell your doctor BEFORE starting bupropion if you have EVER had a seizure, an eating disorder (anorexia or bulimia), a serious head injury, or if you drink heavily or are withdrawing from alcohol. These all increase seizure risk and bupropion may not be safe for you.",
    "Do NOT exceed the prescribed dose. The maximum is 450 mg/day (XL) or 400 mg/day (SR). Higher doses significantly increase the risk of seizures — this is the single most important safety limit on bupropion.",
    "Bupropion is the antidepressant LEAST likely to cause sexual side effects (low sex drive, difficulty reaching orgasm, erectile problems). If you stopped an SSRI because of sexual side effects, bupropion is often a good alternative — and it can even be added to an SSRI to reverse those side effects while keeping the SSRI's benefit.",
    "Bupropion may help you QUIT SMOKING. The same medicine is sold under the brand name Zyban for this purpose. It blocks the nicotine reward signal in the brain. You usually start 1–2 weeks before your planned quit date and continue for 7–12 weeks. It can be combined with nicotine patches or gum for a stronger effect.",
    "You may LOSE a small amount of weight on bupropion (typically 1–2 kg). This is usually welcome if you are overweight, but if you are underweight, mention it to your doctor.",
    "If you feel more anxious, jittery, or agitated in the first 1–2 weeks — particularly if your depression is an anxious type — tell your doctor. Bupropion is energising and is not the best choice for everyone; an SSRI may suit you better.",
    "Tell your doctor and pharmacist about ALL other medicines you take, including over-the-counter drugs and herbal products. Bupropion can raise the levels of many other drugs (metoprolol and other beta-blockers, certain antidepressants, antipsychotics, some heart-rhythm medicines) — your other doses may need adjusting.",
    "If you have a rash, fever, swelling, or trouble breathing — stop bupropion and seek medical attention immediately. Rare but serious allergic and skin reactions can occur, usually in the first 8 weeks.",
    "Bupropion does NOT cause the 'brain zap' withdrawal that some SSRIs do, but you should still talk to your doctor before stopping — they will advise on whether to taper and how. Do not stop suddenly if you have been taking it for many months.",
    "If you are under 25, your doctor will want to see you more often in the first month. Like all antidepressants, bupropion can rarely increase suicidal thoughts in young adults — report any new or worsening thoughts immediately.",
  ],

  clinicalPearls: [
    "Bupropion is the 'no sex, no weight, no sedation' antidepressant — its unique triple advantage comes directly from the absence of SERT blockade. Any patient complaining of these on an SSRI is a candidate for switching to or augmenting with bupropion.",
    "#1 use for SSRI-induced sexual dysfunction: add bupropion XL 150 mg/day to the existing SSRI. The dopaminergic augmentation counters the serotonergic inhibition of sexual arousal and is effective in 1–2 weeks. Alternative: switch SSRI to bupropion monotherapy.",
    "Bupropion is the WRONG drug for anxious/agitated depression. The activating NE+DA effect can worsen anxiety, jitteriness, and insomnia. Choose an SSRI (sertraline) for anxious depression; reserve bupropion for lethargic/anergic/atypical depression with hypersomnia, hyperphagia, and leaden paralysis.",
    "Contraindications are non-negotiable: SEIZURE DISORDER and EATING DISORDERS (bulimia, anorexia) are ABSOLUTE contraindications — the seizure threshold is already low in these patients and bupropion compounds the risk. Use sertraline or mirtazapine instead.",
    "Always dose in the MORNING (XL once daily AM; SR twice daily with second dose by mid-afternoon). Bupropion is activating and causes insomnia if taken too late. This is the single most common dosing error.",
    "Max dose is 450 mg/day (XL) or 400 mg/day (SR) — a HARD ceiling because seizure risk rises sharply above this. Do not exceed, even in treatment-resistant depression. If partial response at max dose, AUGMENT (with mirtazapine, an SSRI, or lithium) rather than push the dose higher.",
    "Bupropion is a STRONG CYP2D6 inhibitor even though it is metabolised by CYP2B6 — this is a favourite exam point and a clinically critical one. Review the patient's medication list for CYP2D6 substrates (metoprolol, propafenone, TCAs, risperidone, paroxetine) before prescribing. Reduce their doses by ~25–50%.",
    "Bupropion has NO discontinuation syndrome — the long half-life (21 h parent, 20–24 h hydroxybupropion) and lack of serotonergic action mean patients can stop relatively abruptly without the 'brain zaps' of SSRI withdrawal. Still, a brief taper is reasonable after long-term use.",
    "Good for depressed patients who smoke (dual benefit: treats depression AND helps smoking cessation — same molecule, different brand names Wellbutrin vs Zyban), and for depressed patients who are overweight (weight loss advantage vs paroxetine, mirtazapine, TCAs).",
    "Off-label adult ADHD: useful when stimulants are contraindicated (substance-use history, anxiety, cardiac disease) — bupropion XL 150–300 mg in the morning provides modest but real benefit. Less effective than methylphenidate or amphetamine but a reasonable alternative.",
  ],

  examPearls: [
    "Bupropion is an NDRI — blocks NET and DAT (NOT SERT). No serotonin effect = the source of every clinical advantage (no sexual SE, no weight gain, no sedation, no withdrawal).",
    "Also a non-competitive antagonist at α3β4 and α4β2 nicotinic ACh receptors — this is the mechanism of action for smoking cessation (Zyban). The favourite 'second mechanism' exam point.",
    "NO SEXUAL DYSFUNCTION — bupropion is the ONLY commonly used antidepressant that does not cause sexual side effects, and is the first-line augmentation strategy for SSRI-induced sexual dysfunction.",
    "Causes WEIGHT LOSS — unique among antidepressants (fluoxetine is weight-neutral; everything else causes weight gain). Advantage in overweight/obese depressed patients. Combined with naltrexone = the weight-loss drug Contrave.",
    "SEIZURES — dose-dependent, signature risk. Contraindicated in seizure disorder, eating disorders (bulimia/anorexia), alcohol withdrawal, head trauma. This is the #1 safety pearl.",
    "Max dose: 450 mg/day (XL) or 400 mg/day (SR). Hard ceiling. Seizure risk rises sharply above this. Frequently tested.",
    "STRONG CYP2D6 inhibitor (even though metabolised by CYP2B6 — the two facts are deliberately separate and both are tested). Raises levels of: metoprolol, propranolol, propafenone, flecainide, TCAs, paroxetine, fluoxetine, venlafaxine, risperidone, haloperidol, aripiprazole, tramadol, atomoxetine, tamoxifen.",
    "Metabolised by CYP2B6 (hydroxylation to hydroxybupropion — the active metabolite that reaches 5–10× higher plasma levels and contributes substantially to chronic effect). CYP2B6 inhibitors (clopidogrel, paroxetine, fluoxetine) raise bupropion; CYP2B6 inducers (rifampin, ritonavir, efavirenz) lower it.",
    "Three FDA indications — broader than any single antidepressant molecule: (1) Major Depressive Disorder, (2) Seasonal Affective Disorder prevention, (3) Smoking cessation (Zyban brand). Memorise this list.",
    "Give in the MORNING — bupropion is activating (NE + DA in cortex) and causes insomnia if given at night. SR formulation is twice daily; XL is once daily. The favourite dosing-time exam point.",
    "NO discontinuation syndrome — long half-life + lack of serotonergic action means patients can stop relatively abruptly without 'brain zaps' or SSRI withdrawal. (Note: still reasonable to taper after long-term use.)",
    "Off-label for ADULT ADHD (not paediatric — paediatric use is limited by seizure risk and the boxed warning). Useful when stimulants are contraindicated (substance-use history).",
    "Contraindicated with MAOIs (14-day washout — same rule as SSRIs). Also contraindicated with concurrent linezolid or methylene blue (reversible MAOIs — hypertensive crisis risk).",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "BUP = Bupropion = Boosts UP",
      trick: "BUP = Boosts UP (norepi + dopamine); No Sex problems, No Sedation, Seizure caution",
      remembers:
        "Bupropion's NDRI mechanism (boosts NE + DA, not serotonin) and its three signature clinical features: no sexual side effects, no sedation (actually activating), and the unique seizure caution. The 'UP' is also a nod to its mild stimulant-like profile.",
    },
    {
      title: "NO SERT — No Sex, No Scale, No Sleepiness, No Stops",
      trick: "No SERT blockade → No Sexual dysfunction · No weight gain on the Scale · No Sedation · No abrupt-Stops (withdrawal) syndrome",
      remembers:
        "The absence of SERT affinity is the source of EVERY clinical advantage of bupropion. Each 'No' maps to an SSRI signature effect that bupropion spares the patient. Memorise the four 'No's together with 'No SERT'.",
    },
    {
      title: "Wellbutrin vs Zyban — Same Drug, Different Habit",
      trick: "Wellbutrin for Wellness (depression); Zyban for Zero cigarettes (smoking)",
      remembers:
        "Bupropion is sold under different brand names for different indications — Wellbutrin for depression, Zyban for smoking cessation. Same molecule, same dose-forms, different clinical framing. The smoking-cessation mechanism is nicotinic ACh receptor antagonism (blocks the nicotine 'reward').",
    },
    {
      title: "SEIZE the Day — but Never Exceed 450",
      trick: "SEIZure is the signature risk; max 450 mg/day = the safety ceiling; Never in Seizure disorder or Eating disorders (bulimia/anorexia)",
      remembers:
        "Bupropion's defining safety constraint is seizures — dose-dependent, with a hard 450 mg/day ceiling. Contraindicated in patients with seizure disorders and eating disorders (both already lower the threshold). The 'SEIZE/450' pairing cements the dose ceiling.",
    },
    {
      title: "CYP2B6 makes it; CYP2D6 it breaks (others)",
      trick: "Bupropion is Made by CYP2B6; it STRONGLY inhibits CYP2D6 — so it raises metoprolol, TCAs, antipsychotics, paroxetine",
      remembers:
        "The two CYP facts about bupropion are deliberately separate and both exam favourites: it is METABOLISED by CYP2B6 (so CYP2B6 inhibitors like clopidogrel and inducers like rifampin affect IT), but it STRONGLY INHIBITS CYP2D6 (so it affects metoprolol, propafenone, TCAs, antipsychotics, paroxetine, tamoxifen). The rhyme separates the two.",
    },
    {
      title: "MOrning for Motivation — Avoid MOon",
      trick: "Take bupropion in the MOrning for Motivation (NE + DA = activating); giving it at the MOon (night) causes insomnia",
      remembers:
        "Bupropion is dosed in the morning because it is activating (norepinephrine + dopamine in the cortex). Evening dosing predictably causes insomnia — one of the most common prescribing errors. MOrning/MOtation/MOon provides a memorable triplicate.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: NDRI — Norepinephrine-Dopamine Reuptake Inhibitor. Blocks NET and DAT. NO SERT affinity — the source of every clinical advantage.",
    "Mechanism: Dual NET + DAT blockade → ↑ synaptic NE and DA in prefrontal cortex and reward pathway. ALSO non-competitive antagonist at α3β4/α4β2 nicotinic ACh receptors (basis of smoking-cessation efficacy).",
    "Three FDA indications (broader than any single antidepressant): (1) Major Depressive Disorder, (2) Seasonal Affective Disorder prevention, (3) Smoking cessation (Zyban brand).",
    "Triple advantage (vs SSRIs/SNRIs): NO sexual dysfunction · NO weight gain (often weight LOSS) · NO sedation (activating). Also NO prominent GI effects and NO discontinuation syndrome — all because serotonin is not touched.",
    "Signature safety: SEIZURES — dose-dependent, the highest seizure risk of any modern antidepressant. Hard ceiling 450 mg/day (XL) or 400 mg/day (SR). Above this, seizure incidence rises sharply.",
    "Absolute contraindications: seizure disorder, eating disorders (bulimia/anorexia), abrupt alcohol withdrawal, head trauma, MAOIs, known hypersensitivity. All share the lowered-seizure-threshold mechanism (except MAOI which is hypertensive crisis).",
    "Pharmacokinetics: Half-life 21 h (parent), 20–24 h (hydroxybupropion active metabolite). Metabolised by CYP2B6. Excreted renally. Long half-life + no SERT = no discontinuation syndrome.",
    "STRONG CYP2D6 inhibitor (despite being metabolised by CYP2B6 — the two facts are deliberately separate and both are tested). Raises levels of metoprolol, propranolol, propafenone, flecainide, TCAs, paroxetine, fluoxetine, venlafaxine, risperidone, haloperidol, aripiprazole, tramadol, atomoxetine, tamoxifen.",
    "Common side effects: insomnia (dose in MORNING), headache, dry mouth, nausea, anxiety/agitation, tremor, sweating, constipation, weight LOSS (advantage), tinnitus.",
    "Onset may be slightly faster than SSRIs (some benefit in 1–2 weeks) due to direct dopaminergic action — but full effect still 4–6 weeks.",
    "Give in the MORNING (activating — causes insomnia). SR: twice daily (second dose by mid-afternoon). XL: once daily AM. Aplenzin = hydroxybupropion extended-release.",
    "Clinical niche: SSRI-induced sexual dysfunction (augmentation or switch); atypical/lethargic depression with hypersomnia and hyperphagia; depressed patients who smoke (dual benefit); overweight depressed patients; adult ADHD off-label. AVOID in anxious/agitated depression.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Depression with SSRI-induced sexual dysfunction and weight gain — switch to bupropion",
      presentation:
        "A 34-year-old man with recurrent MDD on sertraline 100 mg/day for 6 months reports remission of mood symptoms but intolerable sexual dysfunction and 5 kg weight gain, and asks to stop all medication.",
      history:
        "Arjun, a 34-year-old marketing manager, was diagnosed with Major Depressive Disorder 8 months ago after presenting with low mood, anhedonia, and early-morning awakening. He was started on sertraline 50 mg/day, titrated to 100 mg/day. Within 8 weeks his PHQ-9 dropped from 18 to 5 (remission) and he returned to full function at work. He has now been on sertraline 100 mg for 6 months. He presents requesting to stop ALL medication because: (1) he has lost libido entirely and experiences delayed orgasm interfering with his relationship of 3 years; (2) he has gained 5 kg (BMI now 27.5, previously 25.5) despite no change in diet or exercise; (3) he feels 'emotionally flat'. He denies current suicidal ideation. No active medical conditions. No seizures, no eating disorder, no head trauma. Drinks 4–6 units of alcohol per week. Family history: mother with depression, no bipolar disorder or seizures. He is reproductive-age and not currently planning children but wants to keep options open.",
      examination:
        "Alert, oriented, cooperative. Mood '7/10' (improved from 2/10 at presentation). Affect congruent, slightly blunted. No hallucinations, delusions, or thought disorder. Cognitively intact (MoCA 29/30). PHQ-9 = 4 (remission, sustained). GAD-7 = 3 (minimal). BMI 27.5. BP 124/78, HR 70. No neurological deficit. Genital examination unremarkable; sexual dysfunction is medication-related (onset coincided with sertraline initiation, no prior sexual issues).",
      diagnosis:
        "Major Depressive Disorder, recurrent, in remission on sertraline — with SSRI-induced sexual dysfunction and SSRI-induced weight gain. Differential for sexual dysfunction: underlying depression (less likely — he is in remission), relationship issues (denied), vascular/psychogenic ED (no risk factors, onset tied to drug). Working formulation: classic SSRI adverse-effect profile causing treatment dissatisfaction.",
      rationale:
        "Bupropion is the IDEAL agent for this scenario because: (1) it does NOT cause sexual dysfunction (the #1 clinical advantage of NDRIs — no SERT blockade); (2) it causes weight LOSS rather than weight gain (advantage in his current BMI 27.5); (3) it is activating rather than emotionally flattening (addresses his 'flat' feeling); (4) he has NO contraindications — no seizure disorder, no eating disorder, no alcohol misuse, no head trauma, no MAOI use; (5) it does not cause discontinuation syndrome (long half-life, no serotonergic withdrawal). Two reasonable strategies: (A) ADD bupropion XL 150 mg/day to the sertraline (combines SSRI efficacy with bupropion's anti-sexual-SE effect, partial response augmentation); (B) SWITCH from sertraline to bupropion XL monotherapy (cleaner, single-mechanism, addresses both sexual and weight issues). Patient and clinician opted for SWITCH because the sexual and weight side effects were the dominant complaints and he was in remission (so a single effective agent would suffice).",
      management:
        "Plan: cross-taper over 2 weeks. Week 1: continue sertraline 100 mg/day, add bupropion XL 150 mg every MORNING. Week 2: reduce sertraline to 50 mg/day, continue bupropion XL 150 mg AM. Week 3: stop sertraline, increase bupropion XL to 300 mg AM. Week 4 review: tolerability, mood, sexual function, weight. Patient counselled: (1) take bupropion in the MORNING (it is activating, causes insomnia if taken at night); (2) max dose 450 mg/day (seizure risk above this); (3) report any rash immediately; (4) avoid abrupt alcohol cessation; (5) tell any future doctor about bupropion before prescribing — it strongly inhibits CYP2D6 and raises levels of metoprolol and many other drugs. Reviewed his medication list — no CYP2D6 substrate co-medications. PHQ-9 schedule: baseline (4), week 2, week 4, week 8. Safety plan with crisis contacts provided.",
      outcome:
        "Week 2: sertraline 50 + bupropion 150 — mild initial insomnia (resolved when he shifted bupropion from 9 AM to 7 AM), mild anxiety for 3 days (resolved). Week 4: sertraline stopped, bupropion XL 300 mg AM. PHQ-9 = 3 (sustained remission). Libido returned by week 3; orgasm latency normalised by week 5. Weight began declining — 1.5 kg loss by week 8, 3.5 kg loss by month 3. Energy improved; he described feeling 'sharper' than on sertraline. Week 12: PHQ-9 = 2, sustained remission; BMI 26.5; sexual function fully restored; satisfaction high. Plan: continue bupropion XL 300 mg AM for 9 more months (12 months total from remission), then reassess. Counseled that bupropion has no significant discontinuation syndrome but a brief taper is still recommended at the end.",
      teachingPoints: [
        "SSRI-induced sexual dysfunction is the #1 reason patients discontinue SSRIs — always ask directly, patients rarely volunteer it. Bupropion is the only commonly used antidepressant that does NOT cause sexual dysfunction, making it the first-line switch (or augmentation) strategy.",
        "Bupropion's clinical niche is 'atypical depression with lethargy/hypersomnia/hyperphagia' AND 'SSRI-induced adverse effects' — both reflect the absence of SERT blockade and the activating NE+DA profile.",
        "Cross-tapering from an SSRI to bupropion over 1–2 weeks is a safe and standard transition. Bupropion does NOT cause serotonergic discontinuation, but the SSRI still needs to be tapered to avoid SSRI withdrawal.",
        "Always screen for contraindications before prescribing bupropion: seizure disorder, eating disorders, alcohol withdrawal, head trauma, MAOIs. This patient had none — a clean candidate for the switch.",
        "Counsel the morning dosing explicitly. The most common bupropion prescribing error is night-time dosing, which predictably causes insomnia.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Bupropion vs Sertraline vs Venlafaxine vs Mirtazapine",
      primaryDrug: "Bupropion",
      rows: [
        {
          attribute: "Class & mechanism",
          primaryValue: "NDRI — blocks NET + DAT (NO SERT)",
          comparisons: [
            { drug: "Sertraline", value: "SSRI — blocks SERT only" },
            { drug: "Venlafaxine", value: "SNRI — blocks SERT + NET (dose-dependent); weak DAT at high dose" },
            { drug: "Mirtazapine", value: "NaSSA — α2 antagonist + 5-HT2/5-HT3 blocker (NOT a reuptake inhibitor)" },
          ],
        },
        {
          attribute: "Sexual dysfunction",
          primaryValue: "NONE — the only commonly used antidepressant that does NOT cause sexual SE",
          comparisons: [
            { drug: "Sertraline", value: "Common (30–40%) — #1 reason patients stop SSRIs" },
            { drug: "Venlafaxine", value: "Common (30–40%), similar to SSRIs" },
            { drug: "Mirtazapine", value: "Lower than SSRIs (~10–15%)" },
          ],
        },
        {
          attribute: "Weight",
          primaryValue: "Weight LOSS (advantage) — typically 1–2 kg over 6–12 months",
          comparisons: [
            { drug: "Sertraline", value: "Mild weight gain long-term" },
            { drug: "Venlafaxine", value: "Weight neutral to mild gain" },
            { drug: "Mirtazapine", value: "Significant weight gain (5–10 kg) — sometimes used deliberately for cachectic patients" },
          ],
        },
        {
          attribute: "Sedation vs activation",
          primaryValue: "ACTIVATING (NE + DA) — good for lethargic depression, bad for anxious depression",
          comparisons: [
            { drug: "Sertraline", value: "Mildly activating" },
            { drug: "Venlafaxine", value: "Activating (NE effect at >150 mg/day)" },
            { drug: "Mirtazapine", value: "SEDATING — give at night, useful for insomnia" },
          ],
        },
        {
          attribute: "Seizure risk",
          primaryValue: "HIGHEST of any modern antidepressant — dose-dependent, max 450 mg/day",
          comparisons: [
            { drug: "Sertraline", value: "Very low (same as other SSRIs)" },
            { drug: "Venlafaxine", value: "Low at therapeutic doses; rises in overdose" },
            { drug: "Mirtazapine", value: "Low" },
          ],
        },
        {
          attribute: "Discontinuation syndrome",
          primaryValue: "NONE — long half-life + no SERT action = no 'brain zaps'",
          comparisons: [
            { drug: "Sertraline", value: "Mild–moderate (taper over ≥4 weeks)" },
            { drug: "Venlafaxine", value: "WORST of any antidepressant — missed doses can cause withdrawal within hours" },
            { drug: "Mirtazapine", value: "Mild–moderate" },
          ],
        },
        {
          attribute: "CYP interactions",
          primaryValue: "STRONG CYP2D6 inhibitor (raises metoprolol, TCAs, antipsychotics, paroxetine, tamoxifen). Metabolised by CYP2B6.",
          comparisons: [
            { drug: "Sertraline", value: "Mild CYP2D6 inhibitor at ≥200 mg/day; metabolised by CYP2B6" },
            { drug: "Venlafaxine", value: "CYP2D6 substrate (not an inhibitor); minor CYP3A4 interactions" },
            { drug: "Mirtazapine", value: "Minimal CYP interactions" },
          ],
        },
        {
          attribute: "Blood pressure",
          primaryValue: "Mild BP elevation (NE effect) — less than venlafaxine",
          comparisons: [
            { drug: "Sertraline", value: "No meaningful BP effect" },
            { drug: "Venlafaxine", value: "Dose-dependent HYPERTENSION — 10–15% at >300 mg/day" },
            { drug: "Mirtazapine", value: "No meaningful BP effect" },
          ],
        },
        {
          attribute: "Half-life",
          primaryValue: "21 h (parent); 20–24 h (hydroxybupropion active metabolite)",
          comparisons: [
            { drug: "Sertraline", value: "26 h" },
            { drug: "Venlafaxine", value: "5 h (parent); 11 h (O-desmethylvenlafaxine) — shortest, drives severe withdrawal" },
            { drug: "Mirtazapine", value: "20–40 h" },
          ],
        },
        {
          attribute: "Unique indication",
          primaryValue: "Smoking cessation (Zyban) — only antidepressant with this indication",
          comparisons: [
            { drug: "Sertraline", value: "PTSD (only SSRI approved for PTSD)" },
            { drug: "Venlafaxine", value: "GAD, Social Anxiety, Panic Disorder (broadest anxiety approvals)" },
            { drug: "Mirtazapine", value: "Adjunct for SSRI-induced insomnia/cachexia; off-label nausea" },
          ],
        },
        {
          attribute: "Pregnancy",
          primaryValue: "Former Cat C — NOT first choice (sertraline preferred); may be acceptable if benefit justifies risk, especially for smoking cessation",
          comparisons: [
            { drug: "Sertraline", value: "SSRI of CHOICE in pregnancy and lactation" },
            { drug: "Venlafaxine", value: "Generally safe; not first-line" },
            { drug: "Mirtazapine", value: "Generally safe; not first-line" },
          ],
        },
      ],
      takeaway:
        "Bupropion = the antidepressant for patients who have problems with sexual function, weight, energy, or who smoke — its NDRI mechanism (no SERT) is the source of every advantage. Sertraline = best all-rounder and first choice in pregnancy/anxiety. Venlafaxine = second-line when SSRI fails, especially for anergic depression, but watch BP and withdrawal. Mirtazapine = sedating, weight-gaining, useful for insomnia/cachexia. NEVER use bupropion in seizure disorder or eating disorder — the seizure threshold is the hard limit.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute NET + DAT blockade",
      description:
        "Bupropion blocks NET and DAT within hours. Synaptic NE and DA rise in the prefrontal cortex and reward pathway. Patients often feel more energy, alertness, and (sometimes) jitteriness or insomnia in the first few days. SERT is NOT touched — none of the SSRI signature effects appear.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "Hydroxybupropion builds to steady state",
      description:
        "The active metabolite hydroxybupropion (5–10× higher plasma concentration than parent, equivalent NET/DAT affinity) accumulates toward steady state. Patients may notice improved energy and concentration before mood fully lifts. Side effects (insomnia, headache, dry mouth, anxiety) are typically most prominent in this window.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–2",
      title: "Early mood & energy improvement",
      description:
        "Unlike SSRIs (where early improvement is mainly sleep and appetite), bupropion's early improvement is in ENERGY, MOTIVATION, and CONCENTRATION — reflecting the direct dopaminergic action. Some patients report meaningful benefit by week 1–2, slightly faster than SSRI onset. Sexual function (if previously impaired by an SSRI) may begin to recover within this window if bupropion was added or substituted.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "Steady-state NE + DA levels and full downstream neuroadaptive changes (BDNF upregulation, cortical dopaminergic tone normalisation) are achieved. Mood, energy, and motivation reach maximum improvement for MDD. Side effects typically stabilise. PHQ-9 response (≥50% reduction) should be evident; remission (PHQ-9 <5) often by week 8–12.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 7–12",
      title: "Smoking cessation — quit window (Zyban indication)",
      description:
        "For smoking cessation, bupropion is started 1–2 weeks BEFORE the target quit date and continued for 7–12 weeks. Craving and withdrawal symptoms attenuate via nicotinic ACh receptor antagonism. Sustained abstinence at 12 weeks is the outcome measure. Combination with nicotine replacement therapy (NRT) is more effective than either alone.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Months 3–12",
      title: "Maintenance & relapse prevention",
      description:
        "Continued NE + DA tone normalisation. Continue treatment for 6–12 months after the first depressive episode; longer (often indefinite) for recurrent episodes. For seasonal affective disorder, dosing is seasonal — initiate in autumn, taper in spring. For smoking cessation, a 12-week course is standard but longer courses may be considered in high-dependence smokers.",
      phase: "duration",
    },
    {
      id: "t7",
      time: "Discontinuation",
      title: "Brief taper (no significant withdrawal)",
      description:
        "Unlike SSRIs and especially SNRIs, bupropion has NO clinically significant discontinuation syndrome. The long parent half-life (21 h), long active metabolite half-life (20–24 h), and absence of serotonergic action mean 'brain zaps', SSRI-style flu-like symptoms, and severe withdrawal do not occur. A brief taper over 1–2 weeks is still reasonable after long-term use, mainly to monitor for relapse rather than to avoid withdrawal.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why doesn't bupropion cause sexual side effects like other antidepressants?",
      answer:
        "Most antidepressants (SSRIs like sertraline/fluoxetine, and SNRIs like venlafaxine) work by raising SEROTONIN in the brain — and serotonin actually INHIBITS sexual arousal, orgasm, and libido. Bupropion works completely differently — it boosts two OTHER brain chemicals (norepinephrine and dopamine) and does NOT touch serotonin. Because it does not raise serotonin, it does not cause the sexual side effects that other antidepressants do. In fact, bupropion is often ADDED to an SSRI to reverse SSRI-induced sexual dysfunction, or substituted for it.",
    },
    {
      question: "Can bupropion help me quit smoking?",
      answer:
        "Yes — bupropion is FDA-approved for smoking cessation under the brand name Zyban (same molecule as Wellbutrin). It works by blocking the nicotine 'reward' signal in the brain (it antagonises nicotinic acetylcholine receptors). You usually start 1–2 weeks BEFORE your planned quit date and continue for 7–12 weeks. It can be combined with nicotine patches or gum for a stronger effect, and is as effective as varenicline (Chantix) for many smokers. Tell your doctor if you'd like to use bupropion for smoking — the dosing schedule is different from depression dosing.",
    },
    {
      question: "Why do I have to take bupropion in the morning?",
      answer:
        "Bupropion is an 'activating' medicine — it boosts norepinephrine and dopamine, which make you feel more alert and energised. If you take it too late in the day, you'll likely have trouble sleeping that night. For the once-daily XL form, take it in the morning. For the twice-daily SR form, take the first dose in the morning and the second dose no later than mid-afternoon (about 5 hours before your bedtime). If you forget your morning dose, take it as soon as you remember — but if it's already late afternoon, skip it and resume the next morning.",
    },
    {
      question: "What should I do if I have (or had) a seizure disorder or an eating disorder?",
      answer:
        "Do NOT take bupropion — tell your doctor immediately. Bupropion lowers the seizure threshold more than other antidepressants, and this risk is dangerously high in people with seizure disorders (epilepsy) or eating disorders (anorexia, bulimia — these conditions themselves lower the seizure threshold). Your doctor will choose a different antidepressant for you — usually an SSRI like sertraline, or mirtazapine. The same applies if you drink heavily or are withdrawing from alcohol, or if you've had a serious head injury.",
    },
    {
      question: "Will I lose weight on bupropion?",
      answer:
        "Possibly. Unlike most antidepressants (which cause weight gain — particularly paroxetine and mirtazapine), bupropion often causes a small weight LOSS — typically 1–2 kg over 6–12 months. This is usually welcome if you are overweight, but if you are already underweight, your doctor may choose a different antidepressant. Bupropion is actually combined with naltrexone (as the drug Contrave) specifically for weight loss in overweight patients. Don't expect dramatic weight loss — it's modest — but it's a clear advantage over most other antidepressants.",
    },
    {
      question: "Does bupropion have withdrawal symptoms if I stop it?",
      answer:
        "Not in the way SSRIs (like sertraline or paroxetine) or SNRIs (like venlafaxine) do. Bupropion does not cause the 'brain zaps', dizziness, or flu-like symptoms that people get when stopping serotonergic antidepressants — because it doesn't affect serotonin and has a long half-life. That said, after long-term use, your doctor will usually recommend a brief taper over 1–2 weeks — mainly to monitor your mood for relapse rather than to avoid withdrawal. Never stop any antidepressant suddenly without checking with your doctor first.",
    },
    {
      question: "I'm on sertraline and it's working but I have sexual side effects — can I add bupropion?",
      answer:
        "Often yes — this is one of bupropion's most common uses. Adding a low dose of bupropion XL (150 mg in the morning) to an existing SSRI can reverse SSRI-induced sexual dysfunction while keeping the SSRI's benefit for your depression or anxiety. This works because bupropion's dopamine effect counters the serotonergic inhibition of sexual arousal. Your doctor will check your other medications first (bupropion strongly inhibits CYP2D6, which can raise levels of many other drugs) and screen for seizure risk. If your mood is in full remission, switching from the SSRI to bupropion alone is another option — discuss both with your clinician.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Take the missed dose as soon as you remember, UNLESS it is within 4 hours of your next scheduled dose — in that case, skip the missed dose and continue normally. Do NOT double up to make up for a missed dose (this raises seizure risk). For the XL once-daily form: if you remember later in the day, take it as long as it's not too close to bedtime (you don't want insomnia); if it's evening, skip and resume next morning. If you miss multiple doses, contact your doctor — they may recommend restarting at a lower dose.",
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
        source: "U.S. Public Health Service — Treating Tobacco Use and Dependence: Clinical Practice Guideline",
        section: "Bupropion SR for smoking cessation",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents (NDRI section)",
      },
      {
        source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
        section: "Section V — Pharmacotherapy of Mood Disorders (Bupropion subsection)",
      },
      {
        source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition",
        section: "Chapter 36 — Psychopharmacology (Bupropion / NDRI section)",
      },
    ],
    trials: [
      {
        source: "Jorenby DE et al. A controlled trial of sustained-release bupropion, a nicotine patch, or both for smoking cessation. N Engl J Med 1999;340:685-691.",
        section: "Landmark trial — bupropion SR ± nicotine patch for smoking cessation",
      },
      {
        source: "Hurt RD et al. A comparison of sustained-release bupropion and placebo for smoking cessation. N Engl J Med 1997;337:1195-1202.",
        section: "Pivotal smoking-cessation RCT that led to FDA approval of Zyban",
      },
    ],
    reviews: [
      {
        source: "Fava M et al. The role of the surfactant-selective norepinephrine-dopamine reuptake inhibitor (NDRI) bupropion in the treatment of major depressive disorder. J Clin Psychiatry 2005;66:745-755.",
      },
      {
        source: "Patel K et al. Bupropion: a systematic review and meta-analysis of effectiveness as an antidepressant. Ther Adv Psychopharmacol 2016;6(2):99-144.",
      },
      {
        source: "FDA Prescribing Information — WELLBUTRIN / WELLBUTRIN SR / WELLBUTRIN XL / ZYBAN (bupropion hydrochloride)",
        section: "Highlights of Prescribing Information",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/018644s039lbl.pdf",
      },
    ],
    patientResources: [
      {
        source: "Royal College of Psychiatrists — Patient information on antidepressants",
        url: "https://www.rcpsych.ac.uk/mental-health/treatments-and-wellbeing/antidepressants",
      },
      {
        source: "Smokefree.gov (NIH) — Quit-smoking medicines, including bupropion (Zyban)",
        url: "https://smokefree.gov/quit-smoking/medicines",
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
      relationship:
        "Alternative antidepressant. SSRI — blocks SERT only. Used when bupropion is contraindicated (seizure disorder, eating disorder) or when anxious depression predominates (bupropion's activating effect can worsen anxiety). Common switch partner: sertraline → bupropion for SSRI-induced sexual dysfunction or weight gain; bupropion → sertraline for anxious/agitated depression.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship:
        "Alternative SSRI with long half-life (1–4 days) → mildest SSRI discontinuation syndrome. Like sertraline, used when bupropion is contraindicated or for anxious depression. Sometimes combined with bupropion in treatment-resistant depression.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      drugClass: "SSRI",
      relationship:
        "Alternative SSRI with lowest CYP interaction profile — useful if bupropion's strong CYP2D6 inhibition is a problem (e.g. complex medication regimens). Like other SSRIs, causes sexual dysfunction and weight gain — switch to bupropion if these become intolerable.",
    },
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      drugClass: "SNRI",
      relationship:
        "Alternative non-SSRI antidepressant. SNRI — blocks SERT + NET (dose-dependent) and weak DAT at high dose. Shares bupropion's noradrenergic activating effect but ADDS serotonergic action → causes sexual dysfunction and discontinuation syndrome (which bupropion does NOT). Venlafaxine preferred when serotonergic benefit is wanted; bupropion when it is not.",
    },
    {
      name: "Duloxetine",
      drugClass: "SNRI",
      relationship:
        "Alternative SNRI. Balanced SERT + NET blockade at all doses (unlike venlafaxine's dose-dependency). Also approved for neuropathic pain and fibromyalgia. Like venlafaxine, causes sexual dysfunction and discontinuation syndrome that bupropion does not.",
    },
    {
      name: "Mirtazapine",
      drugClass: "NaSSA",
      relationship:
        "Augmentation partner and alternative. NaSSA — sedating, weight-gaining (opposite of bupropion's profile). Useful when patient has INSOMNIA and WEIGHT LOSS (bupropion would worsen both). Sometimes combined with bupropion in treatment-resistant depression (covers both serotonergic and noradrenergic/dopaminergic mechanisms).",
    },
    {
      name: "Methylphenidate",
      drugClass: "Stimulant",
      relationship:
        "Comparison drug for adult ADHD. Stimulant (first-line for ADHD) — blocks DAT and NET, similar molecular targets to bupropion but with higher affinity and abuse potential. Bupropion is the off-label ADHD alternative when stimulants are contraindicated (substance-use history, anxiety, cardiac disease).",
    },
    {
      name: "Varenicline",
      drugClass: "Smoking cessation",
      relationship:
        "Alternative smoking-cessation agent. Varenicline is a partial α4β2 nicotinic agonist (vs bupropion's non-competitive antagonist at α3β4/α4β2). Comparable quit rates to bupropion; varenicline has historically carried a boxed warning for neuropsychiatric effects (now removed). Combination with bupropion is more effective than either alone in heavy smokers.",
    },
  ],

  relatedConditions: [
    { name: "Major Depressive Disorder", relationship: "primary" },
    { name: "Seasonal Affective Disorder", relationship: "primary" },
    { name: "Tobacco Use Disorder (smoking dependence)", relationship: "primary" },
    { name: "Attention-Deficit/Hyperactivity Disorder (adult)", relationship: "off-label" },
    { name: "SSRI-induced sexual dysfunction", relationship: "off-label" },
    { name: "Bipolar Depression (adjunct to mood stabiliser)", relationship: "off-label" },
    { name: "Neuropathic Pain (off-label, limited evidence)", relationship: "off-label" },
    { name: "Cocaine use disorder (investigational)", relationship: "off-label" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Bupropion", type: "drug", href: "/drugs/bupropion", note: "The drug you're reading about" },
    { label: "NDRI", type: "class", href: "#mechanism", note: "Norepinephrine-Dopamine Reuptake Inhibitor" },
    { label: "NET (norepinephrine transporter)", type: "neurotransmitter", href: "#mechanism", note: "Primary molecular target — blocked" },
    { label: "DAT (dopamine transporter)", type: "neurotransmitter", href: "#mechanism", note: "Primary molecular target — blocked" },
    { label: "Dopamine", type: "neurotransmitter", href: "#mechanism", note: "↑ synaptic DA → motivation, reward, attention" },
    { label: "Norepinephrine", type: "neurotransmitter", href: "#mechanism", note: "↑ synaptic NE → energy, alertness" },
    { label: "Nicotinic ACh receptor (α3β4, α4β2)", type: "neurotransmitter", href: "#mechanism", note: "Antagonised — basis of smoking-cessation effect" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "NE + DA → mood, attention, energy" },
    { label: "Mesolimbic Pathway", type: "pathway", href: "#neural-pathways", note: "DA reward — motivation; nicotine reward blocked" },
    { label: "Smoking Cessation", type: "condition", href: "#clinical-uses", note: "Unique FDA indication (Zyban)" },
    { label: "Seasonal Affective Disorder", type: "condition", href: "#clinical-uses", note: "FDA-approved for prevention" },
    { label: "Depression", type: "condition", href: "#clinical-uses", note: "Primary psychiatric indication" },
    { label: "Seizures", type: "side-effect", href: "#side-effects", note: "Signature safety risk — dose-dependent, max 450 mg/day" },
    { label: "Sexual dysfunction (NOT caused)", type: "side-effect", href: "#side-effects", note: "Bupropion's #1 advantage — it does NOT cause this" },
    { label: "Patient Guide — Starting bupropion (or switching from an SSRI)", type: "patient-guide", href: "#patient-education", note: "Take in the morning, expect no sexual SE, may help quit smoking" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "An antidepressant that boosts energy, motivation, and attention — without the sexual side effects, weight gain, or sedation that other antidepressants can cause. Also sold as Zyban to help people quit smoking.",
    summary:
      "Bupropion (Wellbutrin, Zyban) works differently from the more common antidepressants like sertraline or fluoxetine. Instead of raising a brain chemical called serotonin, it raises two OTHER chemicals — norepinephrine and dopamine — which control energy, motivation, attention, and reward. Because it does not touch serotonin, bupropion does NOT cause the sexual problems, weight gain, drowsiness, or 'brain zap' withdrawal that other antidepressants can. It is also sold under the brand name Zyban to help people quit smoking, because it blocks the nicotine 'reward' signal in the brain. The most important safety fact: bupropion can increase the risk of seizures in some people, so tell your doctor if you have ever had a seizure, an eating disorder, or are withdrawing from alcohol.",
    mechanism:
      "Your brain uses several chemicals to regulate mood and energy — including serotonin, norepinephrine, and dopamine. Most antidepressants focus on serotonin. Bupropion focuses instead on norepinephrine and dopamine, by blocking the 'recycling' pumps (transporters) that normally clear them from between nerve cells. With more norepinephrine and dopamine available for longer, you feel more energy, motivation, and concentration. Bupropion ALSO blocks a different kind of receptor — the nicotinic receptor — which is the same receptor nicotine from cigarettes acts on. By blocking it, bupropion reduces the 'reward' you get from smoking, which is why it helps people quit.",
    sideEffects:
      "Bupropion is generally well tolerated, especially compared with SSRIs. The most common side effects are: trouble sleeping (which is why you take it in the morning), headache, dry mouth, mild nausea, and feeling a bit jittery or anxious in the first 1–2 weeks. Many people LOSE a small amount of weight (1–2 kg) — usually welcome. Importantly, bupropion does NOT cause the sexual side effects (low libido, difficulty reaching orgasm) that other antidepressants cause. The most important SERIOUS risk is seizures — this is rare at normal doses but rises if you take more than the maximum dose, or if you have ever had a seizure disorder, an eating disorder (anorexia/bulimia), or are withdrawing from alcohol. Tell your doctor about any of these before starting. If you get a rash, fever, or swelling, stop and seek medical attention immediately.",
    monitoring:
      "You'll have check-ins with your doctor at week 2, week 4, and then periodically. They'll ask about your mood, sleep, energy, and any anxiety or jitteriness. They'll check your blood pressure at least once early on (bupropion can raise it slightly). You may be asked to fill in a short questionnaire (PHQ-9) to track progress. If you are under 25, your doctor will want to see you more often in the first month — like all antidepressants, bupropion can rarely increase suicidal thoughts in young adults. If you're using bupropion to quit smoking, your doctor will also check on your craving and whether you've stopped.",
    contraindications:
      "Do NOT take bupropion if you: (1) have ever had a seizure or epilepsy; (2) have or had an eating disorder (anorexia or bulimia); (3) are withdrawing from heavy alcohol use; (4) have had a serious head injury; (5) have taken an MAOI antidepressant in the last 14 days. Tell your doctor about all of these BEFORE starting. Also tell them about all other medicines you take — bupropion strongly affects how your body handles many other drugs (beta-blockers like metoprolol, certain antidepressants, antipsychotics, some heart-rhythm medicines), and your other doses may need adjusting.",
    interactions:
      "Bupropion strongly slows down one of your liver's enzyme systems (CYP2D6), which processes many other medicines. This means levels of those medicines can rise while you are on bupropion — examples include metoprolol and other beta-blockers, certain antidepressants (paroxetine, fluoxetine, TCAs), antipsychotics (risperidone, haloperidol, aripiprazole), some heart-rhythm medicines (propafenone, flecainide), tramadol, and tamoxifen (used for breast cancer). Always tell your pharmacist about everything you take. Do NOT drink heavily while on bupropion — sudden alcohol cessation combined with bupropion can cause seizures. If you are using bupropion to quit smoking and combining it with nicotine patches or gum, your doctor will check your blood pressure.",
  },

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Wellbutrin label"],
};
