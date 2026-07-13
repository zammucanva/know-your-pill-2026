import type { Drug } from "../types";

/**
 * Clomipramine — canonical drug page data.
 *
 * Tricyclic antidepressant (TCA) — tertiary amine. The MOST serotonergic of
 * all TCAs: blocks SERT >> NET (unlike amitriptyline, which is roughly balanced
 * SERT/NET). This serotonergic selectivity is precisely WHY clomipramine is the
 * ONLY TCA effective for OCD — OCD responds specifically to serotonergic drugs.
 * Still a "dirty drug" like amitriptyline (α1, H1, M1, cardiac Na+ channels)
 * with the same lethal overdose profile, MORE seizure risk at high doses, and
 * MORE sexual dysfunction (serotonergic). Active metabolite desmethylclomipramine
 * shifts the profile toward NET blockade, so clomipramine effectively becomes
 * an SNRI over weeks of treatment.
 *
 * Sources consulted:
 *   - Katzung Basic & Clinical Pharmacology, 16th edition (Ch. 30 — Antidepressant Agents)
 *   - Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition (Section V — Pharmacotherapy of Mood Disorders)
 *   - FDA Prescribing Information for Anafranil (clomipramine hydrochloride)
 *   - APA Practice Guideline for the Treatment of Patients with Obsessive-Compulsive Disorder
 *   - American Geriatrics Society Beers Criteria (2023 update)
 *
 * Last reviewed: 2026-07-13
 */
export const clomipramine: Drug = {
  /* ---- Identity ---- */
  slug: "clomipramine",
  genericName: "Clomipramine",
  brandNames: ["Anafranil", "Clofranil", "Clomipram"],
  drugClass: "tca",
  drugClassLabel: "TCA",
  drugClassFullName: "Tricyclic Antidepressant",

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Antidepressants", "TCAs", "Clomipramine"],

  /* ---- Hero / summary ---- */
  tagline:
    "The most serotonergic tricyclic antidepressant — and the ONLY TCA effective for OCD. Still a 'dirty drug' with the same overdose lethality as amitriptyline.",
  summary:
    "Clomipramine is a tertiary-amine tricyclic antidepressant (TCA) with a unique position in psychopharmacology: it is the MOST selective for the serotonin transporter (SERT) among all TCAs, blocking SERT >> NET. This serotonergic selectivity is precisely why it is effective for Obsessive-Compulsive Disorder (OCD) — OCD responds to serotonergic drugs specifically, and other TCAs (amitriptyline, imipramine, nortriptyline) that are more balanced SERT/NET do NOT work for OCD. FDA-approved for OCD in adults and children ≥10 years, clomipramine was the first-line OCD pharmacotherapy before SSRIs and remains a powerful option for SSRI-resistant OCD. Like all TCAs it is a 'dirty drug' — also blocking α1, H1, M1 and cardiac Na+ channels — producing the same anticholinergic toxidrome, sedation, weight gain, orthostatic hypotension and lethal overdose profile as amitriptyline. It carries MORE seizure risk than amitriptyline (especially at the higher doses used for OCD, up to 250 mg/day) and MORE sexual dysfunction (because it is more serotonergic). Its active metabolite, desmethylclomipramine, is primarily noradrenergic — so over weeks of treatment, clomipramine effectively becomes a dual SNRI. Never prescribe to actively suicidal patients.",
  estimatedReadTime: "19 min read",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain why clomipramine is the MOST serotonergic of all TCAs (SERT >> NET blockade) and how this serotonergic selectivity uniquely makes it the ONLY TCA effective for OCD.",
    "Distinguish clomipramine from amitriptyline: same 'dirty drug' off-target profile (α1, H1, M1, Na+ channel) but MORE seizure risk, MORE sexual dysfunction, and a unique OCD indication.",
    "Recognise and manage TCA overdose: QRS widening on ECG, ventricular arrhythmia, seizures, anticholinergic toxidrome, and the role of IV sodium bicarbonate.",
    "Justify why OCD requires HIGHER doses (up to 250 mg/day) than depression (75–150 mg/day) and a LONGER onset of action (8–12 weeks vs 4–6 weeks).",
    "Describe the active metabolite desmethylclomipramine — predominantly noradrenergic (NET) — and explain how clomipramine effectively becomes a dual SNRI over weeks of treatment.",
    "Counsel a patient prescribed clomipramine for SSRI-resistant OCD, including dose titration, ECG monitoring, seizure warning signs, and the absolute prohibition on combining with SSRIs/MAOIs.",
  ],

  /* ---- Mechanism ---- */
  mechanism: {
    summary:
      "Clomipramine is the MOST serotonergic of all TCAs — it blocks SERT >> NET (unlike amitriptyline, which is roughly balanced). Like all TCAs it is also a 'dirty drug' — blocking α1, H1, M1 receptors and cardiac Na+ channels. The serotonergic selectivity is why it is the only TCA effective for OCD.",
    molecularTarget:
      "SERT (SLC6A4 — serotonin transporter) — PRIMARY target; NET (SLC6A2 — norepinephrine transporter) — secondary. Plus off-target α1, H1, M1 receptors and cardiac voltage-gated Na+ channels.",
    effect:
      "Acute: marked ↑ synaptic serotonin (SERT >> NET) — this is what makes clomipramine unique among TCAs. Also simultaneous α1 blockade (orthostatic hypotension), H1 blockade (sedation, weight gain), M1 blockade (anticholinergic effects), and Na+ channel blockade (cardiac conduction slowing). Chronic (4–6 weeks for depression, 8–12 weeks for OCD): downstream 5-HT1A autoreceptor desensitisation, increased BDNF expression, hippocampal neurogenesis, and — critically for OCD — downregulation of cortical 5-HT2 receptors and normalisation of cortico-striato-thalamo-cortical (CSTC) loop hyperactivity.",
    steps: [
      "Clomipramine binds the serotonin transporter (SERT) on presynaptic serotonergic neurons, blocking reuptake of serotonin from the synaptic cleft — its PRIMARY and most potent action.",
      "Clomipramine ALSO binds the norepinephrine transporter (NET) — but with substantially lower affinity than for SERT (unlike amitriptyline, which is roughly balanced). This SERT >> NET selectivity is unique among TCAs and is the molecular basis for its efficacy in OCD.",
      "Acute blockade raises synaptic serotonin within hours — but somatodendritic 5-HT1A autoreceptors in the raphe nuclei detect this and initially inhibit further serotonin firing.",
      "Over 7–14 days, 5-HT1A autoreceptors desensitise — removing the brake on serotonin firing. Throughput from the raphe nuclei to the prefrontal cortex, orbitofrontal cortex, anterior cingulate, and caudate increases.",
      "Downstream neuroadaptive changes occur over 4–6 weeks (depression) to 8–12 weeks (OCD): increased BDNF, hippocampal neurogenesis, downregulation of postsynaptic 5-HT2A/2C receptors, and — specific to OCD — normalisation of the hyperactive cortico-striato-thalamo-cortical (CSTC) loops that drive compulsive behaviour.",
      "SIMULTANEOUSLY — clomipramine is also a 'dirty drug' (like amitriptyline) — non-selectively blocking α1-adrenergic receptors (→ orthostatic hypotension, dizziness), H1-histamine receptors (→ sedation, weight gain), M1-muscarinic receptors (→ dry mouth, constipation, urinary retention, blurred vision, cognitive impairment), and fast cardiac Na+ channels (→ QRS widening, QTc prolongation, ventricular arrhythmia — the mechanism of lethality in overdose).",
      "Active metabolite: clomipramine is N-demethylated by CYP2C19 and CYP1A2 to DESMETHYLCLOMIPRAMINE, which is primarily noradrenergic (NET > SERT). As this metabolite accumulates over weeks of treatment, the parent drug's SERT-selective profile is progressively diluted and clomipramine effectively becomes a dual SNRI — contributing both to sustained antidepressant effect and to the side-effect burden over time.",
    ],
    pharmacokinetics:
      "Well absorbed orally (bioavailability ~50% due to first-pass metabolism). Peak plasma at 2–6 hours. Highly protein-bound (~98%). Volume of distribution ~12 L/kg — widely distributed including into CNS. Lipophilic tertiary amine — penetrates blood-brain barrier readily.",
    halfLife:
      "Clomipramine 19–37 hours; active metabolite desmethylclomipramine ~54–77 hours. Effective half-life of parent + metabolite supports once-daily (usually night-time) dosing.",
    activeMetabolite:
      "Desmethylclomipramine — pharmacologically active but with REVERGED selectivity: NET >> SERT (predominantly noradrenergic), whereas the parent clomipramine is SERT >> NET (predominantly serotonergic). As desmethylclomipramine accumulates over weeks of treatment, clomipramine effectively becomes a dual SNRI. This contributes to sustained antidepressant efficacy and to the side-effect profile over time.",
    metabolism:
      "Hepatic — predominantly CYP2D6, CYP2C19, and CYP1A2. CYP2C19/1A2 demethylate clomipramine to desmethylclomipramine; CYP2D6 hydroxylates both. CYP2D6 inhibitors (fluoxetine, paroxetine, bupropion) and CYP1A2 inhibitors (fluvoxamine, ciprofloxacin) significantly raise plasma levels and toxicity risk — fluvoxamine is particularly hazardous and generally avoided.",
    excretion:
      "Primarily renal as metabolites (conjugated hydroxylated derivatives). Urinary excretion of unchanged clomipramine is minimal.",
  },

  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      { id: "presynaptic-5ht", label: "Raphe neuron", sublabel: "Synthesises serotonin", variant: "input" },
      { id: "serotonin", label: "Serotonin (5-HT)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "sert", label: "SERT (PROMINENT)", sublabel: "PRIMARY target — blocked >> NET", variant: "target" },
      { id: "presynaptic-ne", label: "Locus coeruleus neuron", sublabel: "Synthesises norepinephrine", variant: "input" },
      { id: "norepinephrine", label: "Norepinephrine (NE)", sublabel: "Released into synaptic cleft", variant: "process" },
      { id: "net", label: "NET (smaller effect)", sublabel: "Secondary target — blocked < SERT", variant: "target" },
      { id: "clomipramine", label: "Clomipramine", sublabel: "Most serotonergic TCA — 'dirty drug'", variant: "inhibit" },
      { id: "alpha1", label: "α1-adrenergic receptor", sublabel: "Vasomotor tone", variant: "target" },
      { id: "h1", label: "H1 histamine receptor", sublabel: "Wakefulness, appetite", variant: "target" },
      { id: "m1", label: "M1 muscarinic receptor", sublabel: "Parasympathetic tone", variant: "target" },
      { id: "na-channel", label: "Cardiac Na+ channel", sublabel: "Ventricular conduction", variant: "target" },
      { id: "metabolite", label: "Desmethylclomipramine", sublabel: "Active metabolite — NET >> SERT (becomes SNRI over time)", variant: "process" },
      { id: "ocd", label: "OCD response (8–12 weeks)", sublabel: "CSTC loop normalisation", variant: "output" },
      { id: "antidepressant", label: "↑ 5-HT (and NE) throughput", sublabel: "Antidepressant effect (4–6 weeks)", variant: "output" },
      { id: "orthostasis", label: "Orthostatic hypotension", sublabel: "α1 blockade — falls risk in elderly", variant: "output" },
      { id: "sedation", label: "Sedation + weight gain", sublabel: "H1 blockade — useful for sleep", variant: "output" },
      { id: "toxidrome", label: "Anticholinergic toxidrome", sublabel: "M1 blockade — dry mouth, constipation, urinary retention, blurred vision", variant: "output" },
      { id: "qrs", label: "QRS widening → VT/VF", sublabel: "Na+ channel blockade — LETHAL in overdose", variant: "output" },
    ],
    edges: [
      { from: "presynaptic-5ht", to: "serotonin", label: "releases" },
      { from: "serotonin", to: "sert", label: "reuptake" },
      { from: "clomipramine", to: "sert", type: "inhibit", label: "blocks (primary)" },
      { from: "presynaptic-ne", to: "norepinephrine", label: "releases" },
      { from: "norepinephrine", to: "net", label: "reuptake" },
      { from: "clomipramine", to: "net", type: "inhibit", label: "blocks (weaker)" },
      { from: "clomipramine", to: "metabolite", label: "N-demethylation (CYP2C19/1A2)" },
      { from: "metabolite", to: "net", type: "inhibit", label: "blocks (primary for metabolite)" },
      { from: "serotonin", to: "ocd", label: "↑ cleft 5-HT → CSTC normalisation" },
      { from: "serotonin", to: "antidepressant", label: "↑ cleft 5-HT" },
      { from: "norepinephrine", to: "antidepressant", label: "↑ cleft NE (later, via metabolite)" },
      { from: "clomipramine", to: "alpha1", type: "inhibit", label: "blocks" },
      { from: "alpha1", to: "orthostasis", label: "vasodilation" },
      { from: "clomipramine", to: "h1", type: "inhibit", label: "blocks" },
      { from: "h1", to: "sedation", label: "CNS depression" },
      { from: "clomipramine", to: "m1", type: "inhibit", label: "blocks" },
      { from: "m1", to: "toxidrome", label: "parasympathetic loss" },
      { from: "clomipramine", to: "na-channel", type: "inhibit", label: "blocks" },
      { from: "na-channel", to: "qrs", label: "conduction slowing" },
    ],
    caption:
      "The MOST serotonergic TCA. Note the prominent SERT inhibition (biggest target) — this is what makes clomipramine uniquely effective for OCD. NET blockade is weaker (smaller). The four red inhibitions on α1, H1, M1 and Na+ channels produce the same 'dirty drug' side-effect profile as amitriptyline — and the Na+ channel blockade is what kills in overdose. The desmethylclomipramine metabolite shifts the profile toward NET blockade over weeks — effectively becoming a dual SNRI.",
  },

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Serotonin (5-HT)", "Norepinephrine (NE)"],
  receptors: [
    "SERT (serotonin transporter) — PRIMARY target, blocked >> NET",
    "NET (norepinephrine transporter) — secondary target",
    "α1-adrenergic receptor (antagonist)",
    "H1 histamine receptor (antagonist)",
    "M1 muscarinic receptor (antagonist)",
    "5-HT2A receptor (antagonist)",
    "5-HT2C receptor (antagonist)",
    "Cardiac fast Na+ channel (use-dependent blocker)",
  ],
  brainRegionIds: ["raphe-nuclei", "prefrontal-cortex", "amygdala", "hippocampus"],
  pathwayIds: [], // TCAs act on diffuse serotonergic + noradrenergic projection systems; OCD effect involves cortico-striato-thalamo-cortical (CSTC) loops

  /* ---- Clinical ---- */
  indications: [
    {
      name: "Obsessive-Compulsive Disorder (OCD) — SIGNATURE INDICATION",
      status: "fda-approved",
      description:
        "FDA-approved for OCD in adults and children ≥10 years. THE defining clomipramine indication — clomipramine is the ONLY TCA effective for OCD, because OCD responds specifically to SEROTONERGIC drugs and clomipramine is the most serotonergic TCA. Other TCAs (amitriptyline, imipramine, nortriptyline) do NOT work for OCD. Before SSRIs, clomipramine was THE treatment for OCD; still used when SSRIs fail and often more effective than SSRIs for severe OCD. Requires HIGHER doses than depression: target 100–250 mg/day. Onset SLOWER than depression: 8–12 weeks for full OCD response. Tracked with Y-BOCS (Yale-Brown Obsessive-Compulsive Scale).",
      ageGroup: "Adults & ≥10 years",
    },
    {
      name: "Major Depressive Disorder (MDD)",
      status: "off-label",
      description:
        "Used as a second-line antidepressant in Europe and other countries for MDD; not FDA-approved for MDD in the US (Anafranil label is OCD only). Effective antidepressant via dual SERT/NET blockade, but SSRIs/SNRIs are preferred first-line due to overdose safety. Typical depression dose 75–150 mg/day (up to 250 mg/day in refractory cases). Reserved for patients who fail SSRIs/SNRIs or who have comorbid OCD where the same drug can treat both.",
    },
    {
      name: "Panic Disorder",
      status: "off-label",
      description:
        "Effective for panic disorder — the potent serotonergic effect reduces panic attack frequency and anticipatory anxiety. Onset of benefit typically at 4 weeks; full effect at 8–12 weeks. Reserved for patients who fail SSRIs/SNRIs; start at very low dose (10–25 mg) to avoid early activation that can worsen panic.",
    },
    {
      name: "Cataplexy in narcolepsy",
      status: "off-label",
      description:
        "Highly effective for cataplexy (sudden loss of muscle tone triggered by emotion) in narcolepsy — the serotonergic effect on REM sleep regulation reduces cataplexy frequency by 80–90%. Low doses (10–75 mg at night) often effective. Now largely replaced by sodium oxybate and newer agents but remains a useful alternative when those are contraindicated or unavailable.",
    },
    {
      name: "Premature ejaculation",
      status: "off-label",
      description:
        "Used off-label for premature ejaculation — clomipramine's potent serotonergic effect delays ejaculation. May be used daily (25–50 mg) or on-demand (taken 4–6 hours before intercourse). Mechanism: serotonergic inhibition of the ejaculatory reflex via 5-HT2C receptors. More sexual dysfunction than amitriptyline because of the higher serotonergic potency — useful when this side effect is the therapeutic goal.",
    },
    {
      name: "Trichotillomania (hair-pulling disorder)",
      status: "off-label",
      description:
        "Some evidence for reduction in hair-pulling symptoms — overlaps with OCD spectrum. Less consistently effective than for OCD itself. Often used when SSRIs (first-line) fail. Typical dose 75–150 mg/day.",
    },
    {
      name: "Body dysmorphic disorder",
      status: "off-label",
      description:
        "Off-label use in body dysmorphic disorder (OCD-spectrum condition) where SSRIs have failed. Mechanism is presumed to be similar to OCD. Evidence is limited; clomipramine is generally reserved as a second-line option after SSRI failure.",
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
        "Combining with MAOIs (phenelzine, tranylcypromine, selegiline >10 mg/day, linezolid, methylene blue) causes potentially fatal serotonin syndrome. Clomipramine is the MOST serotonergic TCA — risk of serotonin syndrome with MAOIs is particularly high. At least 14 days must elapse between discontinuation of an MAOI and initiation of clomipramine.",
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
      name: "Seizure disorder",
      severity: "relative",
      rationale:
        "Clomipramine lowers the seizure threshold MORE than amitriptyline in a dose-dependent manner — particularly at the higher OCD doses (up to 250 mg/day). Avoid in patients with poorly controlled epilepsy; if essential, use lowest effective dose, ensure antiseizure medication is optimised, and avoid other seizure-threshold-lowering drugs. Clomipramine is generally contraindicated in patients with active seizure disorder by the FDA label unless benefits clearly outweigh risks.",
    },
    {
      name: "Known hypersensitivity to clomipramine or other TCAs",
      severity: "absolute",
      rationale: "Cross-reactivity within the TCA class is possible. Anaphylaxis and severe skin reactions reported.",
    },
    {
      name: "Concurrent SSRIs / SNRIs",
      severity: "absolute",
      rationale:
        "Clomipramine is already highly serotonergic — combining with SSRIs/SNRIs produces DOUBLE serotonergic load → high risk of serotonin syndrome. SSRIs that inhibit CYP2D6 (fluoxetine, paroxetine) or CYP1A2 (fluvoxamine) ALSO raise clomipramine plasma levels → additive toxicity. Fluvoxamine is particularly hazardous and should be AVOIDED. Do not combine clomipramine with SSRIs without specialist psychiatry input.",
    },
    {
      name: "Active suicidal ideation",
      severity: "relative",
      rationale:
        "TCAs are LETHAL in overdose (10× dose can kill) — they remain the #1 cause of antidepressant overdose death. Avoid prescribing to actively suicidal patients; if essential, supply limited quantities and consider depot/observed dosing.",
    },
    {
      name: "Elderly with cognitive impairment (Beers criteria)",
      severity: "relative",
      rationale:
        "Strong anticholinergic + sedating + orthostatic + cardiotoxic profile makes clomipramine one of the highest-priority drugs to AVOID in older adults per the AGS Beers Criteria. Causes cognitive impairment, falls, delirium, urinary retention and constipation. Often used in younger OCD patients who tolerate better.",
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
        "Antidepressants increased the risk of suicidal thinking and behaviour in short-term studies in children, adolescents, and young adults with MDD and other psychiatric disorders. Patients of all ages should be monitored closely for clinical worsening, suicidality, or unusual changes in behaviour — especially during the first 1–2 months of therapy and during dose changes. CLOMIPRAMINE-SPECIFIC WARNING: TCAs have a NARROW THERAPEUTIC INDEX and are LETHAL in overdose — as little as 10× the therapeutic dose can cause fatal cardiac arrhythmia (Na+ channel blockade → QRS widening → VT/VF), seizures (clomipramine lowers seizure threshold MORE than other TCAs), anticholinergic toxicity, coma. TCAs remain a leading cause of antidepressant overdose death. NEVER prescribe clomipramine to actively suicidal patients without careful consideration of risk; when prescribed, supply limited quantities and involve carers. The clomipramine FDA label also carries a specific warning for seizures — dose-dependent and especially at doses >250 mg/day.",
    },
  ],

  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Dry mouth",
      frequency: "very-common",
      severity: "mild",
      description:
        "M1-muscarinic blockade reduces salivation. Often the first and most troublesome side effect. Can lead to dental caries with long-term use. Hallmark of the TCA anticholinergic profile — pronounced as with amitriptyline.",
      management: "Sip water, sugar-free gum, sugar-free lozenges. Regular dental review. Pilocarpine if severe.",
    },
    {
      name: "Constipation",
      frequency: "very-common",
      severity: "moderate",
      description:
        "M1 blockade slows gut motility. Can progress to paralytic ileus in susceptible patients (especially elderly). Dose-dependent — particularly problematic at higher OCD doses.",
      management: "Increase fluids and dietary fibre. Osmotic laxative (lactulose) if needed. Stop drug if obstipation or abdominal distension — risk of ileus.",
    },
    {
      name: "Sedation / somnolence",
      frequency: "very-common",
      severity: "moderate",
      description:
        "H1-histamine blockade produces marked sedation. Often used therapeutically (once-nightly dosing for sleep) but impairs daytime function. Worst in first 1–2 weeks; partial tolerance develops. Often beneficial in OCD patients with comorbid insomnia.",
      management: "Dose at night. Warn patient about driving/operating machinery in first 2 weeks. Reduce dose if limiting.",
    },
    {
      name: "Weight gain",
      frequency: "very-common",
      severity: "moderate",
      description:
        "H1 and 5-HT2C blockade increases appetite and cravings — particularly for carbohydrates. Can be 2–5 kg or more over months. Significant problem for long-term adherence, especially in chronic OCD treatment.",
      management: "Dietary counselling. Switch to an SSRI if weight gain is limiting. Avoid in patients with obesity or diabetes where possible.",
    },
    {
      name: "Orthostatic hypotension / dizziness",
      frequency: "very-common",
      severity: "moderate",
      description:
        "α1-adrenergic blockade prevents compensatory vasoconstriction on standing — drop in systolic BP >20 mmHg. Major cause of falls in elderly. Often worst in first 2 weeks of treatment or after dose titration.",
      management: "Stand up slowly. Hydrate adequately. Avoid in elderly (Beers). Reduce dose.",
    },
    {
      name: "Sexual dysfunction (MORE than amitriptyline — serotonergic)",
      frequency: "very-common",
      severity: "moderate",
      description:
        "More pronounced than with amitriptyline because clomipramine is MORE serotonergic. Reduced libido, delayed orgasm/anorgasmia, erectile dysfunction. The potent serotonergic effect on 5-HT2C receptors delays ejaculation — which is WHY clomipramine can be used off-label for premature ejaculation. Often unreported by patients and undertreated.",
      management: "Dose reduction if possible. Add bupropion XL 150 mg/day (but reduce clomipramine dose 30–50% — bupropion is a CYP2D6 inhibitor). Consider switch to bupropion or mirtazapine. Sildenafil for erectile component.",
      sideEffectId: "sexual-dysfunction",
    },
    {
      name: "Sweating (especially nocturnal)",
      frequency: "very-common",
      severity: "moderate",
      description:
        "MORE pronounced than with amitriptyline because of the higher serotonergic potency — likely serotonergic effect on hypothalamic thermoregulation. Night sweats are particularly distressing for patients and may limit adherence.",
      management: "Reassure. Reduce dose if severe. Cool bedroom, moisture-wicking sleepwear. Consider terazosin for severe night sweats (off-label).",
    },
    {
      name: "Tremor",
      frequency: "common",
      severity: "mild",
      description:
        "Fine postural tremor — likely adrenergic overdrive from NET blockade (and from the desmethylclomipramine metabolite accumulating). Dose-dependent.",
      management: "Reduce dose if troublesome. Propranolol 10–20 mg if severe and clomipramine must be continued.",
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
      name: "Nausea / GI upset",
      frequency: "common",
      severity: "mild",
      description:
        "Serotonergic effect on gut 5-HT3 receptors — usually settles within 1–2 weeks. Take with food to reduce.",
      management: "Take with food. Split dosing if needed. Usually transient.",
    },
    {
      name: "Urinary retention",
      frequency: "common",
      severity: "moderate",
      description:
        "M1 blockade on bladder detrusor impairs voiding. Especially problematic in elderly men with BPH. Can precipitate acute urinary obstruction requiring catheterisation.",
      management: "Reduce dose. Rule out BPH before starting. Stop drug if urinary hesitancy or post-void residual >200 mL.",
    },
  ],

  seriousSideEffects: [
    {
      name: "Cardiac arrhythmia (signature — potentially fatal, especially in overdose)",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Fast Na+ channel blockade slows phase 0 depolarisation in ventricular myocytes → QRS widening → ventricular tachycardia / fibrillation. Also QTc prolongation → torsades de pointes. THIS is the overdose killer — as little as 10× therapeutic dose can be fatal. Even at therapeutic doses, arrhythmia can occur in patients with pre-existing cardiac disease or with CYP2D6/1A2 inhibitors raising clomipramine levels.",
      management: "ECG monitoring essential. QRS >100 ms is a red flag → stop drug, consider IV sodium bicarbonate. In overdose: IV sodium bicarbonate (1–2 mEq/kg) to overcome Na+ channel blockade, alkalinise serum (pH 7.45–7.55) to increase protein binding, hyperventilate, IV lidocaine for VT. AVOID class Ia/Ic antiarrhythmics (quinidine, procainamide, flecainide — additive Na+ blockade).",
    },
    {
      name: "QRS widening on ECG",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Direct consequence of Na+ channel blockade. QRS >100 ms predicts significant toxicity and risk of ventricular arrhythmia. Dose-dependent but individual susceptibility varies widely. Particularly concerning at higher OCD doses (up to 250 mg/day).",
      management: "Stop clomipramine. Check level. IV sodium bicarbonate if QRS >100 ms or symptomatic. Cardiology consult.",
    },
    {
      name: "QTc prolongation / torsades de pointes",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Blockade of cardiac K+ channels (hERG) prolongs QTc. Risk of polymorphic VT (torsades) — especially with hypokalaemia, hypomagnesaemia, bradycardia, or concurrent QTc-prolonging drugs.",
      management: "Correct K+/Mg2+. Stop clomipramine. IV magnesium sulfate for torsades. Avoid all other QTc-prolonging drugs.",
    },
    {
      name: "Seizures (MORE than amitriptyline — dose-dependent)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Clomipramine lowers the seizure threshold MORE than amitriptyline in a dose-dependent manner — particularly at the higher OCD doses (>250 mg/day). FDA label carries a specific seizure warning. At therapeutic doses, risk is ~0.5–1.5% at <250 mg/day but rises to ~2% or higher above 250 mg/day. Common in overdose.",
      management: "Benzodiazepines (lorazepam) first-line. Avoid phenytoin (also Na+ channel blocker — may worsen). Intubation and ventilatory support if recurrent or prolonged. Reduce dose or switch to an SSRI if seizures occur at therapeutic dose.",
    },
    {
      name: "Serotonin syndrome (MORE likely than with amitriptyline)",
      frequency: "rare",
      severity: "life-threatening",
      description:
        "Triad of mental status change (agitation, confusion), autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis) and neuromuscular excitation (clonus, hyperreflexia, rigidity). MORE LIKELY than with amitriptyline because clomipramine is the most serotonergic TCA. Onset usually within 24 hours of combining with another serotonergic agent (SSRI, SNRI, MAOI, tramadol, triptan, St John's Wort, linezolid). NEVER combine with SSRIs/MAOIs.",
      management: "Discontinue clomipramine and any other serotonergic agents immediately. Supportive care — cooling, benzodiazepines. Cyproheptadine (5-HT2A antagonist) in severe cases. ICU for hyperthermia >41°C.",
      sideEffectId: "serotonin-syndrome",
    },
    {
      name: "Increased suicidality (under 25)",
      frequency: "uncommon",
      severity: "severe",
      description:
        "Black-box warning. Risk highest in first 1–2 months and during dose changes. Patients under 25 are at greatest risk. With TCAs, the risk is compounded by overdose lethality — a suicidal patient on clomipramine has a more dangerous overdose vehicle than on an SSRI.",
      management: "Weekly contact during first month. Warn patient and family. Consider SSRI/SNRI first. Limit supply in at-risk patients.",
    },
    {
      name: "Activation of mania / hypomania",
      frequency: "uncommon",
      severity: "severe",
      description:
        "In patients with undiagnosed bipolar disorder, TCAs (like all antidepressants) can trigger a manic switch — possibly more than SSRIs due to the noradrenergic component (especially from desmethylclomipramine). Screen for personal and family history of bipolar disorder before initiating.",
      management: "Discontinue if mania emerges. Screen for bipolar disorder before initiating any antidepressant. Use mood stabiliser first in bipolar depression.",
    },
    {
      name: "Agranulocytosis / blood dyscrasias",
      frequency: "rare",
      severity: "severe",
      description:
        "Rare but reported — agranulocytosis, neutropenia, thrombocytopenia, pancytopenia. Presents as fever, sore throat, infection, or bruising. Idiosyncratic, not dose-dependent. Slightly more reported with clomipramine than with some other TCAs.",
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
      name: "Acute angle-closure glaucoma",
      frequency: "rare",
      severity: "severe",
      description:
        "M1 blockade produces mydriasis — can precipitate acute angle closure in anatomically predisposed eyes (shallow anterior chamber). Ophthalmic emergency — presents with painful red eye, haloes, nausea, vision loss.",
      management: "Stop drug. Urgent ophthalmology review. Pilocarpine, topical beta-blocker, acetazolamide, mannitol as per glaucoma protocol.",
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
      frequency: "Baseline ECG for all patients; mandatory if >50 years, any cardiac history, or starting dose >100 mg/day. Repeat after each significant dose titration — especially at doses >150 mg/day for OCD.",
      rationale:
        "Na+ channel blockade → QRS widening and QTc prolongation → ventricular arrhythmia. QRS >100 ms predicts significant toxicity. ECG is the single most important safety test for TCAs — and is especially important at the higher doses used for OCD (up to 250 mg/day).",
    },
    {
      parameter: "QRS duration on ECG",
      frequency: "At baseline and after each dose titration; immediately in any suspected overdose.",
      rationale:
        "QRS >100 ms is the threshold for concern; >160 ms predicts high risk of ventricular arrhythmia and seizure. QRS widening precedes clinical deterioration in TCA toxicity — early detection is life-saving.",
    },
    {
      parameter: "Seizure activity",
      frequency: "Ask at every visit — particularly at doses >200 mg/day. Caution in patients with seizure history or those on other seizure-threshold-lowering drugs.",
      rationale:
        "Clomipramine lowers the seizure threshold MORE than amitriptyline — dose-dependent. Risk rises significantly at doses >250 mg/day. The FDA label carries a specific seizure warning. Report any new twitching, myoclonus, or seizure activity immediately.",
    },
    {
      parameter: "Mood & suicidality",
      frequency: "Weekly during first month, then every 2–4 weeks until stable.",
      rationale:
        "Black-box warning for suicidality in patients <25. With TCAs, additional concern about overdose lethality — limit supply in at-risk patients. In OCD, track Y-BOCS at baseline, 4, 8, and 12 weeks.",
    },
    {
      parameter: "Weight & BMI",
      frequency: "Baseline, 3 months, then every 6 months.",
      rationale:
        "H1 and 5-HT2C blockade causes significant weight gain (often 2–5 kg). Particularly important in diabetes, obesity, metabolic syndrome — and in chronic OCD treatment where long-term therapy is the norm.",
    },
    {
      parameter: "Blood pressure / orthostatic vital signs",
      frequency: "Baseline, after each dose titration, and during first 4 weeks. Especially in elderly and patients on antihypertensives.",
      rationale:
        "α1 blockade causes orthostatic hypotension — major cause of falls in elderly. Measure BP lying and standing (drop >20 mmHg systolic = significant).",
    },
    {
      parameter: "Plasma clomipramine + desmethylclomipramine levels",
      frequency: "Optional. At steady state (5–7 days after dose change) if poor response, suspected toxicity, frail elderly, or whenever a CYP2D6/1A2 inhibitor is added or removed.",
      rationale:
        "Clomipramine does NOT have a well-defined therapeutic window like nortriptyline, but combined parent + metabolite levels can guide management. Combined clomipramine + desmethylclomipramine levels >450–500 ng/mL are associated with increased seizure risk and toxicity. Levels are most useful when response is inadequate or toxicity is suspected.",
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
        "MAOIs inhibit serotonin breakdown. Combining with clomipramine — the MOST serotonergic TCA — causes massive serotonergic excess → potentially fatal serotonin syndrome. Also risk of hypertensive crisis from noradrenergic excess.",
      action:
        "Absolute contraindication. Wait 14 days after stopping MAOI before starting clomipramine; 14 days after stopping clomipramine before starting MAOI.",
    },
    {
      drug: "Fluvoxamine (CYP1A2 inhibitor — MAJOR)",
      severity: "contraindicated",
      mechanism:
        "Fluvoxamine is a potent CYP1A2 inhibitor. Clomipramine is metabolised by CYP1A2 (among others) → fluvoxamine significantly raises clomipramine plasma levels → high risk of toxicity (seizures, arrhythmia, anticholinergic). Also additive serotonergic effect → serotonin syndrome.",
      action:
        "AVOID combination — this is the single most hazardous SSRI to combine with clomipramine. If a switch is planned, allow at least 1 week washout. Use a different SSRI or wait until clomipramine is fully tapered before initiating fluvoxamine.",
    },
    {
      drug: "SSRIs — especially fluoxetine, paroxetine (CYP2D6 inhibitors)",
      severity: "contraindicated",
      mechanism:
        "Double jeopardy: (1) ADDITIVE serotonergic effect → serotonin syndrome (clomipramine is already highly serotonergic); (2) fluoxetine and paroxetine are strong CYP2D6 inhibitors → impair clomipramine metabolism → raise plasma levels → toxicity (arrhythmia, anticholinergic, seizures).",
      action:
        "Avoid combination. If switching from SSRI to clomipramine, allow 4–5 half-lives (especially 5 weeks for fluoxetine). If essential (rare specialist combination), reduce clomipramine dose by 50% and monitor levels + ECG.",
    },
    {
      drug: "Other serotonergic drugs (tramadol, triptans, St John's Wort, linezolid, dextromethorphan)",
      severity: "major",
      mechanism: "Additive serotonergic effect → serotonin syndrome. Clomipramine's high serotonergic potency makes this combination particularly hazardous.",
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
        "Additive Na+ channel blockade → QRS widening, ventricular arrhythmia, AV block. Quinidine also inhibits CYP2D6 raising clomipramine levels.",
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
        "Additive CNS depression (sedation, impairment) AND additive cardiotoxicity. Alcohol also impairs hepatic metabolism of clomipramine.",
      action: "Avoid alcohol — especially during initiation and dose titration. Counsel patient explicitly.",
    },
    {
      drug: "CYP2D6 inhibitors (fluoxetine, paroxetine, bupropion, quinidine, terbinafine)",
      severity: "major",
      mechanism:
        "CYP2D6 is a primary enzyme for clomipramine hydroxylation. Inhibition raises parent clomipramine levels → toxicity (arrhythmia, seizures, anticholinergic).",
      action: "Reduce clomipramine dose by 30–50% if combination unavoidable. Monitor levels and ECG.",
    },
    {
      drug: "CYP1A2 inhibitors (fluvoxamine, ciprofloxacin, enoxacin, oral contraceptives)",
      severity: "major",
      mechanism:
        "CYP1A2 is a primary enzyme for clomipramine N-demethylation. Inhibition raises clomipramine plasma levels significantly → toxicity.",
      action:
        "Avoid combination — particularly fluvoxamine (see separate entry) and ciprofloxacin. If essential, reduce clomipramine dose by 30–50% and monitor levels + ECG.",
    },
    {
      drug: "Seizure-threshold-lowering drugs (bupropion, tramadol, antipsychotics, theophylline)",
      severity: "major",
      mechanism:
        "Clomipramine ALREADY lowers seizure threshold more than amitriptyline (dose-dependent, especially >250 mg/day). Additive seizure risk with these drugs.",
      action:
        "Avoid combination in patients with epilepsy or at high OCD doses. If essential, use lowest effective doses of both drugs and ensure antiseizure medication is optimised. Monitor for new twitching or seizures.",
    },
    {
      drug: "Sympathomimetics (epinephrine, norepinephrine, pseudoephedrine, phenylephrine)",
      severity: "major",
      mechanism:
        "α1 blockade prevents uptake of exogenous catecholamines into neurons and prevents α1-mediated vasoconstriction → unopposed β stimulation → severe hypertension, arrhythmia.",
      action: "Avoid. If pressor required, use direct-acting agent at reduced dose with invasive BP monitoring. Even local anaesthetic with epinephrine (dentist) can be hazardous.",
    },
  ],

  pregnancy: {
    legacyCategory: "C (former FDA category)",
    summary:
      "Clomipramine is NOT the drug of choice in pregnancy — sertraline is preferred for OCD and depression in pregnancy. Available data do not show a clear increase in major congenital malformations, but data are limited and clomipramine is generally avoided in favour of SSRIs. Third-trimester use is associated with neonatal adaptation syndrome (jitteriness, respiratory distress, poor feeding, hypotonia, anticholinergic withdrawal symptoms) in ~30% of exposed neonates. Untreated maternal OCD or depression carries significant risks (functional impairment, suicidality, poor bonding) — the decision to treat must weigh these against medication risks. If a TCA is essential in pregnancy, nortriptyline is generally preferred (more data, lower transfer). Do NOT stop abruptly if pregnancy is discovered — taper.",
    lactation:
      "Clomipramine and desmethylclomipramine transfer into breast milk — relative infant dose is moderate (~1–3% but accumulation is possible due to long half-lives of both parent and metabolite). Monitor infant for sedation, poor feeding, anticholinergic effects (constipation, urinary retention). Sertraline is the preferred antidepressant in breastfeeding. If clomipramine is essential (e.g. severe SSRI-resistant OCD), the lowest effective dose immediately after a feed is generally considered compatible with breastfeeding — but infant monitoring is essential, particularly in the first few weeks.",
  },

  renalAdjustment:
    "No specific dose adjustment required in renal impairment — clomipramine is metabolised hepatically and excreted mainly as metabolites. However, use cautiously in elderly or those with significant CKD — accumulation of active metabolites (especially desmethylclomipramine with its long half-life of 54–77 hours) can occur. Monitor for anticholinergic effects, sedation, and orthostatic hypotension; consider reducing dose by 25–50% in frail elderly with CKD.",

  hepaticAdjustment:
    "Reduce starting dose by 50% in any hepatic impairment (Child-Pugh A/B/C) — start at 25 mg at night, titrate slowly with at least 7 days between dose increases. The FDA Anafranil label recommends starting at 25 mg daily and titrating to 100 mg over 2 weeks in patients with hepatic impairment. Monitor plasma clomipramine + desmethylclomipramine levels if available, and ECG. Avoid in severe cirrhosis or acute hepatitis if possible; if essential, use the lowest effective dose with level-guided titration.",

  /* ---- Education ---- */
  patientExplanation:
    "Clomipramine is a medicine that belongs to a class called tricyclic antidepressants (TCAs). Its main approved use is for Obsessive-Compulsive Disorder (OCD) — it is the only medicine in its class that works for OCD, because it has a particularly strong effect on a brain chemical called serotonin. OCD responds specifically to medicines that boost serotonin. Like other medicines in its class, clomipramine affects several other receptors in the body — which is why it can cause side effects like dry mouth, constipation, dizziness when standing up, sleepiness, weight gain, and (more than other medicines in its class) sexual side effects and sweating. The most important thing to know is that clomipramine can be DANGEROUS in overdose — even a relatively small amount more than prescribed can affect the heart rhythm or cause seizures. That's why your doctor will only prescribe limited supplies and why you must NEVER take more than the prescribed dose. Don't stop suddenly — your doctor will show you how to taper off gradually. For OCD, the benefit typically takes 8–12 weeks to appear and may require higher doses than for depression.",

  patientEducationPoints: [
    "For OCD, benefit typically takes 8–12 weeks to appear — much slower than for depression. Don't stop early just because you don't feel better yet; the full effect can take up to 3 months at the target dose.",
    "Don't stop abruptly — your doctor will taper the dose gradually over several weeks. Sudden stopping can cause cholinergic rebound (nausea, sweating, headache, insomnia, vivid dreams) and a return of OCD symptoms.",
    "If you miss a dose, take it when you remember unless it's within 8 hours of your next dose — in that case, skip the missed dose. NEVER take a double dose to make up for a missed one — too much clomipramine at once can affect your heart or cause a seizure.",
    "Report palpitations, fainting, dizziness on standing, or feeling like you might pass out immediately — these can be signs that the medicine is affecting your heart rhythm or blood pressure. Your doctor will arrange an ECG.",
    "Report any new twitching, jerking, muscle spasms, or seizure-like activity immediately — clomipramine can lower the seizure threshold, especially at higher doses (>250 mg/day).",
    "Don't combine with other antidepressants (especially SSRIs like fluoxetine, paroxetine, fluvoxamine), MAOIs, tramadol (pain), triptans (migraine), or St John's Wort without your doctor knowing — these combinations can cause a dangerous condition called serotonin syndrome (high fever, confusion, sweating, shaking, muscle rigidity).",
    "Don't drive or operate machinery in the first 1–2 weeks (or after dose increases) until you know how sleepy the medicine makes you. Stand up slowly from sitting or lying to reduce dizziness. If you feel dizzy, don't drive.",
    "Don't combine with alcohol — it makes you much more drowsy, increases the risk of falls, and can stress your heart.",
    "Tell your doctor AND pharmacist about ALL other medicines you take — including over-the-counter cold remedies (pseudoephedrine, phenylephrine), antibiotics (ciprofloxacin, macrolides), and herbal products. Several common drugs interact dangerously with clomipramine by raising its levels in your blood.",
    "Some side effects (dry mouth, constipation, sedation, weight gain, sweating, sexual dysfunction) are very common — your doctor can suggest ways to manage them. Don't just stop the medicine; talk to your doctor first. Sexual side effects are particularly common with clomipramine because it strongly boosts serotonin.",
    "If you feel low, hopeless, or have thoughts of harming yourself, contact your doctor, a crisis line, or emergency services immediately. Never take extra clomipramine tablets — too much can be fatal.",
    "If you become pregnant or are planning pregnancy, tell your doctor — don't stop the medicine suddenly; the plan will need to be reviewed together. The same applies if you start breastfeeding.",
  ],

  clinicalPearls: [
    "Clomipramine is the ONLY TCA effective for OCD — because it is the MOST serotonergic TCA (SERT >> NET). Other TCAs (amitriptyline, imipramine, nortriptyline) do NOT work for OCD. This is one of the highest-yield exam facts in TCA pharmacology.",
    "OCD responds SPECIFICALLY to serotonergic drugs. Clomipramine is uniquely serotonergic among TCAs — that's why it works when other TCAs don't. SSRIs work for OCD for the same reason. Noradrenergic drugs alone (like bupropion or desipramine) do NOT work for OCD.",
    "Before SSRIs (fluoxetine, sertraline, fluvoxamine, paroxetine) were available, clomipramine was THE treatment for OCD — it was a game-changer in the 1980s. SSRIs replaced it as first-line for OCD because of safety (overdose lethality), not efficacy — clomipramine is often MORE effective than SSRIs for severe OCD.",
    "When SSRIs fail for OCD (after adequate 12-week trial at max tolerated dose), clomipramine is the next-line agent — often effective when 2 SSRIs have failed. Sometimes combined with an SSRI in specialist hands (with extreme caution and dose reduction due to CYP interactions).",
    "OCD requires HIGHER doses than depression: target 100–250 mg/day for OCD vs 75–150 mg/day for depression. OCD onset is SLOWER: 8–12 weeks vs 4–6 weeks for depression. Counsel patients explicitly — many stop too early when they don't see benefit in the first month.",
    "Active metabolite desmethylclomipramine is primarily NORadrenergic (NET > SERT) — REVERSED selectivity from the parent. As it accumulates over weeks, clomipramine effectively becomes a dual SNRI. This contributes to sustained antidepressant effect and to the side-effect burden over time.",
    "Clomipramine carries MORE seizure risk than amitriptyline — dose-dependent, especially >250 mg/day. The FDA label carries a specific seizure warning. Caution in patients with epilepsy, head injury, or those on other seizure-threshold-lowering drugs (bupropion, tramadol, antipsychotics).",
    "Clomipramine causes MORE sexual dysfunction than amitriptyline (because it's more serotonergic) — this side effect can be turned to advantage: off-label use for premature ejaculation (serotonergic effect delays ejaculation via 5-HT2C).",
    "Same overdose lethality as amitriptyline — 10× dose can kill via Na+ channel blockade (QRS → VT/VF), seizures, anticholinergic toxidrome. NEVER prescribe to actively suicidal patients without careful consideration and supply limitation. Treat overdose with IV sodium bicarbonate.",
    "CYP2D6 + CYP1A2 metabolism — fluvoxamine (CYP1A2 inhibitor) significantly raises clomipramine levels and should be AVOIDED. Fluoxetine/paroxetine (CYP2D6 inhibitors) also raise levels. Combining clomipramine with SSRIs is generally contraindicated due to both pharmacokinetic and pharmacodynamic (serotonergic) interactions.",
    "Useful for cataplexy in narcolepsy — the serotonergic effect on REM sleep regulation reduces cataplexy frequency by 80–90%. Largely supplanted by sodium oxybate but remains a useful alternative.",
    "Tertiary amine (like amitriptyline, imipramine) → more side effects than secondary amines (nortriptyline, desipramine). When a TCA is needed for depression or pain (not OCD), nortriptyline is usually preferred for its lower side-effect burden and defined therapeutic window. Clomipramine is reserved for OCD or SSRI-resistant depression.",
    "ECG monitoring essential — baseline ECG for all, mandatory if >50 years or cardiac history. QRS >100 ms is a red flag. Repeat ECG after dose titration — especially when escalating to OCD doses (≥150 mg).",
  ],

  examPearls: [
    "Clomipramine is the MOST serotonergic TCA (SERT >> NET) — and the ONLY TCA effective for OCD. This is THE single most testable clomipramine fact.",
    "OCD responds SPECIFICALLY to serotonergic drugs — that's why clomipramine works for OCD and other TCAs (amitriptyline, imipramine, nortriptyline) do NOT. SSRI + clomipramine are the only antidepressant classes effective for OCD.",
    "Mechanism: SERT >> NET blockade (primary) PLUS α1, H1, M1 and cardiac Na+ channel blockade (dirty drug) — same off-target profile as amitriptyline but with SERT-selective primary action.",
    "Active metabolite = DESMETHYLCLOMIPRAMINE — predominantly noradrenergic (NET > SERT). REVERSED selectivity from parent. As it accumulates, clomipramine effectively becomes a dual SNRI over weeks of treatment.",
    "FDA indication: OCD (adults & ≥10 years) — primary and signature indication. Off-label: depression (Europe), panic, cataplexy (narcolepsy), premature ejaculation, trichotillomania, body dysmorphic disorder.",
    "Same overdose lethality as amitriptyline — 10× dose can kill. #1 antidepressant overdose killer class. Mechanism: Na+ channel blockade → QRS widening → VT/VF; also seizures, anticholinergic toxidrome. Treat with IV SODIUM BICARBONATE (1–2 mEq/kg). AVOID class Ia/Ic antiarrhythmics.",
    "MORE seizure risk than amitriptyline — dose-dependent, especially >250 mg/day. FDA label carries specific seizure warning. Avoid in seizure disorder; if essential, use lowest effective dose.",
    "MORE sexual dysfunction than amitriptyline — because clomipramine is more serotonergic. Can be used OFF-LABEL for premature ejaculation (serotonergic delay of ejaculation via 5-HT2C).",
    "OCD dose: up to 250 mg/day (HIGHER than depression dose 75–150 mg/day). OCD onset: 8–12 weeks (SLOWER than depression 4–6 weeks). Counsel patients explicitly.",
    "CYP2D6 + CYP1A2 metabolism. FLUVOXAMINE (CYP1A2 inhibitor) significantly raises clomipramine — AVOID combination. Fluoxetine/paroxetine (CYP2D6 inhibitors) also raise levels. Combining clomipramine with any SSRI is generally contraindicated.",
    "Before SSRIs (1980s), clomipramine was THE treatment for OCD. Still used when SSRIs fail — often more effective than SSRIs for severe OCD.",
    "Contraindications: recent MI, arrhythmias/heart block, MAOIs (14-day washout), narrow-angle glaucoma, urinary retention, seizure disorder (relative — clomipramine lowers threshold MORE than other TCAs), concurrent SSRIs/MAOIs (serotonin syndrome). Beers criteria: avoid in elderly.",
    "Tertiary amine (like amitriptyline, imipramine) = MORE side effects (anticholinergic, sedating, cardiotoxic). Secondary amines (nortriptyline, desipramine) = FEWER side effects. Clomipramine is reserved for OCD or SSRI-resistant depression.",
  ],

  /* ---- Memory tricks (mnemonics) ---- */
  memoryTricks: [
    {
      title: "CLO = Clomipramine",
      trick: "CLO = Clomipramine = CLo-OCD (only TCA for OCD) · Lethal overdose · Only serotonergic TCA",
      remembers:
        "The three signature things to know about clomipramine: it's the only TCA effective for OCD (because it's the most serotonergic TCA), and it carries the same lethal overdose profile as other TCAs.",
    },
    {
      title: "'SERT-strong' = Serotonin = OCD",
      trick: "Clomipramine = SERT-strong = Serotonin = OCD (OCD needs serotonin, and clomipramine delivers the most)",
      remembers:
        "Clomipramine blocks SERT >> NET (unlike amitriptyline which is balanced). OCD responds specifically to SEROTONERGIC drugs — that's why clomipramine is the ONLY TCA effective for OCD. Other TCAs (amitriptyline, imipramine, nortriptyline) do NOT work for OCD.",
    },
    {
      title: "'CLOM-OCD' higher & slower",
      trick: "CLOMipramine for OCD: Higher dose (250 mg) · Longer onset (8–12 weeks)",
      remembers:
        "OCD needs HIGHER doses than depression (up to 250 mg/day vs 75–150 mg for depression) and a LONGER onset of action (8–12 weeks vs 4–6 weeks for depression). Counsel patients explicitly — many stop too early.",
    },
    {
      title: "'Desmethyl flips it'",
      trick: "Parent: SERT-strong (serotonergic). Metabolite (Desmethylclomipramine): NET-strong (noradrenergic). Over weeks, the SNRI emerges.",
      remembers:
        "Clomipramine's active metabolite desmethylclomipramine has REVERSED selectivity — primarily noradrenergic. As it accumulates over weeks of treatment, clomipramine effectively becomes a dual SNRI. This contributes to both sustained efficacy and the side-effect burden over time.",
    },
    {
      title: "'Seizures & Sex'",
      trick: "Clomipramine: MORE Seizures than amitriptyline · MORE Sexual dysfunction than amitriptyline (but useful for premature ejaculation)",
      remembers:
        "Compared to amitriptyline, clomipramine has MORE seizure risk (dose-dependent, especially >250 mg/day — FDA carries a specific warning) and MORE sexual dysfunction (because it's more serotonergic). The sexual side effect is turned to therapeutic advantage in off-label premature ejaculation treatment.",
    },
    {
      title: "'Avoid Fluvo'",
      trick: "Fluvo-xamine raises Clomi-pramine — AVOID. (CYP1A2)",
      remembers:
        "Fluvoxamine is a potent CYP1A2 inhibitor and significantly raises clomipramine plasma levels — combination is contraindicated. Other SSRIs (fluoxetine, paroxetine — CYP2D6 inhibitors) also raise clomipramine levels and add serotonergic load. Combining clomipramine with any SSRI is generally contraindicated.",
    },
  ],

  /* ---- High-yield summary (one-page revision) ---- */
  highYieldSummary: [
    "Class: TCA — tertiary amine. The MOST serotonergic TCA (SERT >> NET). Active metabolite desmethylclomipramine is primarily noradrenergic (NET > SERT) — clomipramine effectively becomes a dual SNRI over weeks.",
    "Six targets: SERT (primary, biggest) + NET (smaller) = serotonergic + noradrenergic effect (antidepressant and anti-OCD); PLUS α1 (orthostasis), H1 (sedation, weight gain), M1 (anticholinergic), Na+ channel (cardiotoxicity, overdose lethality).",
    "Signature: ONLY TCA effective for OCD — because OCD responds specifically to serotonergic drugs. Other TCAs (amitriptyline, imipramine, nortriptyline) do NOT work for OCD.",
    "Half-life: clomipramine 19–37 h; desmethylclomipramine 54–77 h. Hepatic metabolism via CYP2D6, CYP2C19, CYP1A2.",
    "FDA indication: OCD (adults & ≥10 years). Off-label: MDD (Europe), panic, cataplexy (narcolepsy), premature ejaculation, trichotillomania, body dysmorphic disorder.",
    "Dose: depression 75–150 mg/day; OCD 100–250 mg/day (HIGHER than depression). Onset: depression 4–6 weeks; OCD 8–12 weeks (SLOWER than depression).",
    "LETHAL in overdose — 10× dose can kill. Same as amitriptyline. Causes QRS widening → VT/VF (Na+ channel), seizures, anticholinergic toxidrome, coma. Treat with IV sodium bicarbonate.",
    "MORE seizure risk than amitriptyline — dose-dependent, especially >250 mg/day. FDA label carries specific seizure warning. Avoid in seizure disorder.",
    "MORE sexual dysfunction than amitriptyline (serotonergic) — used off-label for premature ejaculation. Also MORE sweating.",
    "Contraindications: recent MI, arrhythmias/heart block, MAOIs (14-day washout), narrow-angle glaucoma, urinary retention, seizure disorder (relative), concurrent SSRIs/MAOIs. Beers criteria — avoid in elderly.",
    "Interactions: MAOIs (fatal serotonin syndrome), FLUVOXAMINE (CYP1A2 inhibitor — AVOID), fluoxetine/paroxetine (CYP2D6 inhibitors), other serotonergic drugs, QTc-prolonging drugs, antiarrhythmics (additive Na+ blockade), other anticholinergics, alcohol, seizure-threshold drugs, sympathomimetics.",
    "Monitoring: ECG at baseline (mandatory if >50 yrs or cardiac history) + after dose titration, QRS duration, seizure activity (especially >200 mg/day), mood/suicidality, weight, BP/orthostatic, optional plasma clomipramine + desmethylclomipramine levels if poor response or suspected toxicity.",
  ],

  /* ---- Clinical cases (plural — supports multiple cases per drug) ---- */
  clinicalCases: [
    {
      title: "Severe treatment-resistant OCD after SSRI failure — clomipramine as the deciding treatment",
      presentation:
        "A 24-year-old man presents with severe, treatment-resistant Obsessive-Compulsive Disorder after inadequate response to two SSRIs. He has intrusive contamination obsessions and 6+ hours/day of hand-washing compulsions, with a Y-BOCS score of 30 (extreme).",
      history:
        "Arjun, a 24-year-old engineering student, was diagnosed with OCD at age 17. His symptoms began with contamination fears (germs, public surfaces) and escalated into compulsive hand-washing that now consumes 6+ hours per day. His hands are cracked, bleeding, and often infected. He has dropped out of university, cannot leave the house without 1–2 hours of ritual preparation, and has lost 8 kg in the past 6 months due to food-related contamination fears. He has had TWO adequate SSRI trials: (1) fluoxetine 80 mg/day for 14 weeks — partial response (Y-BOCS from 32 to 24, then plateau); (2) fluvoxamine 300 mg/day for 16 weeks — minimal additional benefit (Y-BOCS 26). He completed 20 sessions of Exposure and Response Prevention (ERP) therapy with modest improvement but continues to be severely disabled. He denies suicidal ideation but feels 'hopeless' about ever recovering. No cardiac history, no seizure history. Maternal aunt has OCD. He drinks alcohol 1–2 units/month, no recreational drugs. No regular medications other than current fluvoxamine (being tapered).",
      examination:
        "Alert, oriented, cooperative but visibly anxious. Speech normal. Mood '4/10', affect anxious and congruent. No hallucinations, delusions, or thought disorder. Cognitively intact (MoCA 29/30). Y-BOCS 30 (extreme). Both hands erythematous, cracked, with multiple erosions and signs of secondary infection. BMI 19. BP 118/72 lying, 114/70 standing. HR 78, regular. ECG: sinus rhythm, normal QRS (88 ms), QTc 420 ms (normal). FBC, U&E, LFTs, TSH all normal.",
      diagnosis:
        "Severe, treatment-resistant Obsessive-Compulsive Disorder (ICD-11 6B20), contamination subtype, with secondary dermatitis of hands. Treatment-resistant by NICE criteria: failed 2 adequate SSRI trials + ERP. Differential: OCD with comorbid depression (PHQ-9 11 — secondary to functional impairment, not primary).",
      rationale:
        "Clomipramine chosen because: (1) NICE CG31 and APA OCD guideline recommend clomipramine as next-line agent after failure of 2 SSRIs in OCD; (2) clomipramine is the ONLY TCA effective for OCD — and often MORE effective than SSRIs for severe OCD; (3) clomipramine is the most serotonergic TCA — OCD responds specifically to serotonergic drugs, so the potent serotonergic effect is the therapeutic mechanism; (4) patient is young (24) with no cardiac history, normal ECG, and no seizure disorder — acceptable candidate for clomipramine; (5) NOT actively suicidal — suitable for a TCA with limited supply; (6) fluvoxamine must be FULLY tapered before starting clomipramine (CYP1A2 inhibition — see interactions); (7) will need higher OCD dose (target 200 mg/day) and slower onset (8–12 weeks) — counsel patient explicitly. ECG at baseline and at each dose titration is mandatory.",
      management:
        "Fluvoxamine tapered over 4 weeks (50 mg/week) with a 1-week washout before clomipramine initiated (to allow CYP1A2 inhibition to clear). Baseline ECG: QRS 88 ms, QTc 420 ms — both within normal limits, safe to proceed. Started clomipramine 25 mg at night. Counseled: (1) OCD takes 8–12 weeks for full effect — DON'T stop early; (2) expect dry mouth, sedation, orthostatic dizziness, weight gain, sweating, sexual dysfunction in first 1–2 weeks; (3) take at night (sedating); (4) stand up slowly; (5) avoid alcohol; (6) do not stop suddenly; (7) report palpitations, fainting, seizures, or muscle twitching immediately; (8) NEVER take extra tablets — overdose can be fatal; (9) limited 2-week supply (25 mg × 14). Plan: titrate by 25 mg every 4–7 days as tolerated to target 200 mg/day. Repeat ECG at 100 mg, 150 mg, and 200 mg. Y-BOCS at baseline, 4, 8, and 12 weeks. Concurrent referral for ERP booster sessions (combine medication + ERP for best outcomes). Patient given safety plan with crisis contacts (Tele-MANAS 14416, emergency 112).",
      outcome:
        "Week 2 (50 mg): dry mouth and morning grogginess — tolerable. Sedation welcome (comorbid insomnia improved). ECG unchanged. Week 4 (100 mg): Y-BOCS 26 (was 30 — 13% reduction, early response). Sweating and sexual dysfunction (delayed ejaculation) emerged — counselled and tolerated. Week 8 (150 mg): Y-BOCS 18 (40% reduction — partial response). Hand-washing time reduced from 6 to 3 hours/day. Week 12 (200 mg): Y-BOCS 11 (63% reduction — full response). Hand-washing reduced to 30 minutes/day; hands healing; resumed university part-time. ECG at 200 mg: QRS 96 ms, QTc 432 ms — within normal limits. No seizures. Plan: continue 200 mg/day for at least 12 months, with ERP maintenance sessions. Reassess at 18 months for possible slow taper. Patient reports 'I have my life back.'",
      teachingPoints: [
        "OCD responds SPECIFICALLY to serotonergic drugs — clomipramine (most serotonergic TCA) and SSRIs are the only antidepressant classes effective for OCD. Other TCAs (amitriptyline, imipramine, nortriptyline) do NOT work for OCD. This is a high-yield exam distinction.",
        "OCD requires HIGHER doses than depression (target 100–250 mg/day vs 75–150 mg) and a SLOWER onset (8–12 weeks vs 4–6 weeks). Many patients stop too early — counsel explicitly that full effect can take 3 months.",
        "Fluvoxamine (CYP1A2 inhibitor) SIGNIFICANTLY raises clomipramine levels — AVOID combination. When switching from fluvoxamine to clomipramine, allow at least 1 week washout after tapering fluvoxamine before starting clomipramine.",
        "ECG monitoring is essential at the higher doses used for OCD — repeat ECG at 100, 150, and 200 mg. QRS >100 ms is a red flag. Caution re seizures at doses >250 mg/day — clomipramine carries MORE seizure risk than amitriptyline.",
        "Clomipramine is often MORE effective than SSRIs for severe OCD — in this case, two adequate SSRI trials produced only partial response, while clomipramine achieved a 63% Y-BOCS reduction. This is consistent with meta-analytic evidence favouring clomipramine over SSRIs for severe OCD.",
      ],
    },
  ],

  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Clomipramine vs Amitriptyline vs Sertraline vs Fluvoxamine",
      primaryDrug: "Clomipramine",
      rows: [
        {
          attribute: "Class",
          primaryValue: "TCA (tertiary amine)",
          comparisons: [
            { drug: "Amitriptyline", value: "TCA (tertiary amine)" },
            { drug: "Sertraline", value: "SSRI" },
            { drug: "Fluvoxamine", value: "SSRI" },
          ],
        },
        {
          attribute: "Mechanism (the serotonergic selectivity row)",
          primaryValue: "SERT >> NET — the MOST serotonergic TCA. Plus α1, H1, M1, Na+ channel blockade ('dirty drug').",
          comparisons: [
            { drug: "Amitriptyline", value: "SERT ≈ NET (balanced). Same dirty off-target profile (α1, H1, M1, Na+ channel)." },
            { drug: "Sertraline", value: "Selective SERT blockade only (clean — no off-targets)" },
            { drug: "Fluvoxamine", value: "Selective SERT blockade (clean). Strong CYP1A2 inhibitor." },
          ],
        },
        {
          attribute: "OCD efficacy (the signature row)",
          primaryValue: "EFFECTIVE — ONLY TCA effective for OCD (because most serotonergic). Often more effective than SSRIs for severe OCD.",
          comparisons: [
            { drug: "Amitriptyline", value: "NOT effective for OCD (less serotonergic). Off-label for pain, migraine, insomnia — not OCD." },
            { drug: "Sertraline", value: "Effective for OCD (FDA-approved). First-line. Often less effective than clomipramine for severe OCD." },
            { drug: "Fluvoxamine", value: "Effective for OCD (FDA-approved). Preferred SSRI for paediatric OCD. CANNOT be combined with clomipramine (CYP1A2)." },
          ],
        },
        {
          attribute: "Overdose lethality (the safety row)",
          primaryValue: "LETHAL — 10× dose can kill. Same as amitriptyline. Class effect of TCAs.",
          comparisons: [
            { drug: "Amitriptyline", value: "LETHAL — same as clomipramine. #1 antidepressant overdose killer class." },
            { drug: "Sertraline", value: "Safe in overdose — reason SSRIs are first-line" },
            { drug: "Fluvoxamine", value: "Safe in overdose — reason SSRIs are first-line" },
          ],
        },
        {
          attribute: "Seizure risk (clomipramine > amitriptyline row)",
          primaryValue: "MORE than amitriptyline — dose-dependent, especially >250 mg/day. FDA label carries specific seizure warning.",
          comparisons: [
            { drug: "Amitriptyline", value: "Lowers seizure threshold (class effect) but LESS than clomipramine at equivalent doses." },
            { drug: "Sertraline", value: "Minimal seizure risk at therapeutic doses" },
            { drug: "Fluvoxamine", value: "Minimal seizure risk at therapeutic doses" },
          ],
        },
        {
          attribute: "Sexual dysfunction (clomipramine > amitriptyline row)",
          primaryValue: "MORE than amitriptyline (serotonergic). Used off-label for premature ejaculation.",
          comparisons: [
            { drug: "Amitriptyline", value: "Less than clomipramine (less serotonergic). Multifactorial." },
            { drug: "Sertraline", value: "Common (30–40%) — serotonergic class effect" },
            { drug: "Fluvoxamine", value: "Common (30–40%) — serotonergic class effect" },
          ],
        },
        {
          attribute: "Anticholinergic burden",
          primaryValue: "HIGH — dry mouth, constipation, urinary retention, blurred vision, cognitive impairment",
          comparisons: [
            { drug: "Amitriptyline", value: "HIGH — same as clomipramine (tertiary amine)" },
            { drug: "Sertraline", value: "Minimal" },
            { drug: "Fluvoxamine", value: "Minimal" },
          ],
        },
        {
          attribute: "Active metabolite",
          primaryValue: "Desmethylclomipramine (NET > SERT — noradrenergic). Clomipramine effectively becomes an SNRI over weeks.",
          comparisons: [
            { drug: "Amitriptyline", value: "Nortriptyline (NET > SERT — defined therapeutic window 50–150 ng/mL)" },
            { drug: "Sertraline", value: "N-desmethylsertraline (weak SERT activity, minimal clinical contribution)" },
            { drug: "Fluvoxamine", value: "No clinically significant active metabolite" },
          ],
        },
        {
          attribute: "Metabolism / CYP interactions",
          primaryValue: "CYP2D6 + CYP2C19 + CYP1A2. Fluvoxamine (CYP1A2) AVOID. Fluoxetine/paroxetine (CYP2D6) raise levels.",
          comparisons: [
            { drug: "Amitriptyline", value: "CYP2D6 (primary) + CYP2C19/1A2/3A4. Similar interaction profile." },
            { drug: "Sertraline", value: "CYP2B6 (primary). Mild CYP2D6 inhibitor. Low interaction profile." },
            { drug: "Fluvoxamine", value: "Strong CYP1A2 + CYP2C19 inhibitor. Many interactions (caffeine, theophylline, clozapine, clomipramine)." },
          ],
        },
        {
          attribute: "Pregnancy/lactation",
          primaryValue: "Avoid — not drug of choice. Sertraline preferred for OCD in pregnancy.",
          comparisons: [
            { drug: "Amitriptyline", value: "Avoid — not drug of choice. Sertraline preferred." },
            { drug: "Sertraline", value: "SSRI of choice in pregnancy/lactation" },
            { drug: "Fluvoxamine", value: "Limited data; sertraline preferred in pregnancy" },
          ],
        },
      ],
      takeaway:
        "Clomipramine = the ONLY TCA that works for OCD, because it is the MOST serotonergic TCA. Amitriptyline = the dirty drug for pain, migraine, insomnia — does NOT work for OCD. Sertraline = the safe first-line SSRI for OCD (and the SSRI of choice in pregnancy). Fluvoxamine = an effective SSRI for OCD that CANNOT be combined with clomipramine (CYP1A2 inhibition raises clomipramine to toxic levels — AVOID). When SSRIs fail for OCD, clomipramine is the next-line agent and is often MORE effective than SSRIs for severe OCD — but carries the overdose lethality, seizure risk, and anticholinergic burden of the TCA class.",
    },
  ],

  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours 1–24",
      title: "Acute receptor blockade (side effects first)",
      description:
        "Within hours of the first dose, clomipramine blocks SERT (prominently), NET (weakly), α1, H1, M1 and Na+ channels simultaneously. Patients typically notice dry mouth, sedation, postural dizziness, and sometimes sweating BEFORE any therapeutic benefit. Sleep is often improved the first night (H1 effect).",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 2–7",
      title: "Side effects peak; partial tolerance develops",
      description:
        "Anticholinergic and sedative side effects often peak in the first week and then partially improve as tolerance develops. Sweating and sexual dysfunction may emerge here. No therapeutic benefit expected yet for either depression or OCD. Counsel patient to persist.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 2–4",
      title: "Autoreceptor desensitisation begins (depression path)",
      description:
        "For depression, somatodendritic 5-HT1A and α2 autoreceptors in the raphe nuclei and locus coeruleus begin to desensitise. Monoamine throughput to the prefrontal cortex, amygdala and hippocampus gradually increases. Sleep, appetite and energy often improve first — before mood. Desmethylclomipramine (active metabolite) begins to accumulate, adding noradrenergic effect.",
      phase: "onset",
    },
    {
      id: "t4",
      time: "Weeks 4–6",
      title: "Full therapeutic effect (depression)",
      description:
        "For depression, steady-state serotonin and norepinephrine levels and full downstream neuroadaptive changes (BDNF, hippocampal neurogenesis, receptor downregulation) are achieved. Mood typically reaches maximum improvement. For OCD, some early response may appear but full effect is still weeks away.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Weeks 4–8",
      title: "Desmethylclomipramine accumulation — SNRI shift",
      description:
        "By week 4–8, the active metabolite desmethylclomipramine (which has REVERSED selectivity — NET > SERT) has accumulated significantly. The overall pharmacological profile now approximates a dual SNRI rather than a pure SERT-selective drug. This contributes to sustained antidepressant efficacy and may explain clomipramine's effectiveness in SSRI-resistant depression.",
      phase: "duration",
    },
    {
      id: "t6",
      time: "Weeks 8–12",
      title: "Full therapeutic effect (OCD — slower than depression)",
      description:
        "For OCD, the full therapeutic effect typically takes 8–12 weeks — significantly slower than for depression. The mechanism involves normalisation of hyperactive cortico-striato-thalamo-cortical (CSTC) loops and downregulation of cortical 5-HT2 receptors. Track response with Y-BOCS. Counsel patients explicitly: full effect can take 3 months at the target dose.",
      phase: "peak",
    },
    {
      id: "t7",
      time: "Months 3–12+",
      title: "Maintenance & relapse prevention",
      description:
        "For OCD, continue treatment for at least 1–2 years after full response before considering a slow taper. Long-term maintenance is often necessary. For depression, 6–12 months after remission for first episode; longer for recurrent. Recheck ECG periodically during long-term therapy, especially at doses >150 mg/day. Monitor weight, BP, and sexual function.",
      phase: "duration",
    },
    {
      id: "t8",
      time: "Discontinuation",
      title: "Tapered withdrawal",
      description:
        "Sudden cessation causes cholinergic rebound (GI upset, sweating, headache, malaise), insomnia, vivid dreams and irritability — less common than SSRI discontinuation but real. Taper over at least 4 weeks; longer for high doses or long duration. For OCD, taper even more slowly (over 2–3 months) to monitor for relapse.",
      phase: "recovery",
    },
  ],

  /* ---- FAQ ---- */
  faqs: [
    {
      question: "Why is clomipramine the only TCA effective for OCD?",
      answer:
        "Clomipramine is the MOST serotonergic of all tricyclic antidepressants — it blocks the serotonin transporter (SERT) much more strongly than the norepinephrine transporter (NET). OCD responds specifically to SEROTONERGIC drugs, so clomipramine's strong serotonin effect makes it uniquely effective among TCAs. Other TCAs (amitriptyline, imipramine, nortriptyline) are more balanced SERT/NET and do NOT work for OCD. SSRIs (sertraline, fluoxetine, fluvoxamine) also work for OCD for the same reason — they boost serotonin. Before SSRIs were available, clomipramine was THE treatment for OCD.",
    },
    {
      question: "How is clomipramine different from amitriptyline?",
      answer:
        "Both are tertiary-amine TCAs with the same 'dirty drug' off-target profile (α1, H1, M1, Na+ channel blockade) and the same overdose lethality. The KEY difference is their selectivity for the serotonin transporter: clomipramine is SERT >> NET (much more serotonergic), while amitriptyline is roughly balanced SERT/NET. This is why clomipramine works for OCD and amitriptyline does not. Other differences: clomipramine has MORE seizure risk (especially at higher OCD doses >250 mg/day), MORE sexual dysfunction (serotonergic), and is metabolised to desmethylclomipramine (a noradrenergic metabolite — so clomipramine effectively becomes a dual SNRI over weeks). Amitriptyline, by contrast, is now used more for neuropathic pain, migraine prophylaxis, and insomnia than for depression — clomipramine is used primarily for OCD.",
    },
    {
      question: "Why does my OCD need a higher dose than depression?",
      answer:
        "OCD typically requires HIGHER doses of clomipramine (up to 250 mg/day) than depression (75–150 mg/day). This is because the neuroadaptive changes needed to normalise the hyperactive brain loops driving OCD (cortico-striato-thalamo-cortical loops) require stronger and more sustained serotonergic stimulation than the changes needed for mood improvement. OCD also takes LONGER to respond — 8–12 weeks vs 4–6 weeks for depression. So don't be surprised if your doctor titrates your dose higher and asks you to wait longer for full effect. Many patients stop too early — counsel with your doctor before deciding the medicine isn't working.",
    },
    {
      question: "Why does it take 8–12 weeks for my OCD to improve?",
      answer:
        "The serotonergic effect on OCD symptoms requires slow neuroadaptive changes in the brain — specifically, normalisation of hyperactive loops between the cortex, striatum, and thalamus (the brain circuits that drive compulsive behaviour). These changes take 8–12 weeks to fully develop, even though the medicine starts blocking serotonin transporters within hours. The first 4–6 weeks may show some early benefit, but full effect typically requires 3 months at the target dose. This is slower than depression (4–6 weeks) — counsel with your doctor before stopping early.",
    },
    {
      question: "Can I take clomipramine with an SSRI?",
      answer:
        "Generally NO — clomipramine should NOT be combined with SSRIs without specialist psychiatry input. There are two reasons: (1) clomipramine is already highly serotonergic, so combining with an SSRI doubles the serotonergic load and can cause a dangerous condition called serotonin syndrome (high fever, confusion, sweating, muscle rigidity); (2) several SSRIs (especially fluvoxamine, fluoxetine, paroxetine) block the liver enzymes that metabolise clomipramine, raising its blood levels to toxic ranges. FLUVOXAMINE in particular must be AVOIDED — it strongly raises clomipramine levels. If you're switching from an SSRI to clomipramine, your doctor will plan a careful washout period. Always tell your doctor about all other medications you take.",
    },
    {
      question: "Why do I need an ECG before and during treatment?",
      answer:
        "Clomipramine can affect the heart's electrical conduction by blocking sodium channels — this shows up on an ECG as a widening of the QRS complex and sometimes a prolonged QTc interval. In overdose this is the cause of death. At normal doses, the risk is small but real, especially if you're over 50, have a heart condition, or take other medicines that affect the heart — or at the higher doses used for OCD (up to 250 mg/day). Your doctor will check an ECG at the start (mandatory if you're over 50 or have any cardiac history) and repeat it after dose increases. If the QRS is wider than 100 ms, that's a warning sign — the dose may need reducing or the medicine stopped.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Take the missed dose as soon as you remember, unless it's within 8 hours of your next scheduled dose — in that case, skip the missed dose and continue normally. NEVER take a double dose to make up for a missed one — too much clomipramine at once can dangerously affect your heart rhythm or cause a seizure. If you've missed several doses, contact your doctor — they may want you to restart at a slightly lower dose and re-titrate.",
    },
    {
      question: "What happens if I take too much clomipramine?",
      answer:
        "Get emergency medical help IMMEDIATELY (call your local emergency number) — even if you feel fine at first. TCA overdose can cause irregular heart rhythms, seizures (clomipramine lowers the seizure threshold MORE than other TCAs), dangerous drops in blood pressure and coma — and the situation can worsen rapidly. Don't try to make yourself sick. Take the medicine bottle with you to hospital. The specific treatment is intravenous sodium bicarbonate, which helps overcome the heart-rhythm effects. If you ever have thoughts of harming yourself or taking an overdose, contact your doctor, a crisis line, or emergency services immediately — never take extra clomipramine.",
    },
  ],

  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for the Treatment of Patients with Obsessive-Compulsive Disorder (3rd edition)",
        section: "Clomipramine positioned as next-line agent after SSRI failure in OCD",
      },
      {
        source: "NICE Clinical Guideline CG31 — Obsessive-compulsive disorder and body dysmorphic disorder: treatment",
        section: "Clomipramine as alternative to SSRI in OCD",
      },
      {
        source: "American Geriatrics Society Beers Criteria for Potentially Inappropriate Medication Use in Older Adults (2023 update)",
        section: "TCAs listed as 'avoid' in older adults due to anticholinergic, sedating, orthostatic and cardiotoxic effects",
      },
    ],
    textbooks: [
      {
        source: "Katzung Basic & Clinical Pharmacology, 16th edition",
        section: "Chapter 30 — Antidepressant Agents (TCA section; clomipramine as most serotonergic TCA for OCD)",
      },
      {
        source: "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14th edition",
        section: "Section V — Pharmacotherapy of Mood Disorders (TCA section; clomipramine pharmacology)",
      },
      {
        source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th edition",
        section: "Chapter 36 — Psychopharmacology (Tricyclic antidepressants; clomipramine for OCD)",
      },
    ],
    trials: [
      {
        source: "The Clomipramine Collaborative Study Group. Clomipramine in the treatment of patients with obsessive-compulsive disorder. Arch Gen Psychiatry 1991;48:730-738.",
        section: "Landmark RCT establishing clomipramine efficacy for OCD",
      },
      {
        source: "Greist JH, Jefferson JW, Kobak KA, et al. Efficacy and tolerability of serotonin transport inhibitors in obsessive-compulsive disorder: a meta-analysis. Arch Gen Psychiatry 1995;52:53-60.",
        section: "Meta-analysis showing clomipramine has greater effect size than SSRIs for OCD but is less well tolerated",
      },
    ],
    reviews: [
      {
        source: "Cipriani A et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357-1366.",
        section: "TCAs and SSRIs shown to have comparable efficacy for depression — SSRIs better tolerated",
      },
      {
        source: "FDA Prescribing Information — ANAFRANIL (clomipramine hydrochloride)",
        section: "Highlights of Prescribing Information (OCD indication, seizure warning, boxed warning)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/019906s050lbl.pdf",
      },
      {
        source: "Pigott TA, Seay SM. A review of the efficacy of selective serotonin reuptake inhibitors in obsessive-compulsive disorder. J Clin Psychiatry 1999;60:101-106.",
        section: "Comparative review of clomipramine vs SSRIs in OCD",
      },
    ],
    patientResources: [
      {
        source: "International OCD Foundation — Medications for OCD",
        url: "https://iocdf.org/about-ocd/treatment/meds/",
      },
      {
        source: "Royal College of Psychiatrists — Patient information on OCD and antidepressants",
        url: "https://www.rcpsych.ac.uk/mental-health/mental-health-conditions/obsessive-compulsive-disorder-ocd",
      },
      {
        source: "NIMH (National Institute of Mental Health) — Obsessive-Compulsive Disorder brochure",
        url: "https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-take-over",
      },
    ],
  },

  relatedDrugs: [
    {
      name: "Amitriptyline",
      slug: "amitriptyline",
      drugClass: "TCA",
      relationship:
        "Fellow tertiary-amine TCA. Same 'dirty drug' off-target profile (α1, H1, M1, Na+ channel) and same overdose lethality. KEY DIFFERENCE: amitriptyline is balanced SERT/NET, clomipramine is SERT >> NET — so amitriptyline does NOT work for OCD. Amitriptyline is now used mainly for neuropathic pain, migraine prophylaxis, and insomnia. Clomipramine has MORE seizure risk and MORE sexual dysfunction than amitriptyline.",
    },
    {
      name: "Sertraline",
      slug: "sertraline",
      drugClass: "SSRI",
      relationship:
        "First-line alternative for OCD. FDA-approved for OCD in adults and children ≥6 years. Selective SERT blockade — clean safety profile (no anticholinergic, no α1, no H1, no Na+ channel). Safer in overdose — reason SSRIs are first-line for OCD. Clomipramine is reserved for SSRI-resistant OCD or when more serotonergic potency is needed. Sertraline is also the SSRI of choice in pregnancy/lactation.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      drugClass: "SSRI",
      relationship:
        "Alternative SSRI for OCD. Long half-life (1–4 days with norfluoxetine). Strong CYP2D6 inhibitor — would SIGNIFICANTLY raise clomipramine levels if combined (contraindicated). Allow 5-week washout when switching from fluoxetine to clomipramine.",
    },
    {
      name: "Fluvoxamine",
      slug: "fluvoxamine",
      drugClass: "SSRI",
      relationship:
        "Alternative SSRI for OCD (preferred for paediatric OCD). POTENT CYP1A2 inhibitor — would DRAMATICALLY raise clomipramine levels if combined. This is the SINGLE MOST HAZARDOUS SSRI to combine with clomipramine — AVOID. Allow at least 1-week washout when switching from fluvoxamine to clomipramine.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      drugClass: "SSRI",
      relationship:
        "Alternative SSRI for OCD (off-label). S-enantiomer of citalopram. Lowest CYP interaction profile — least likely of the SSRIs to interact with clomipramine if combination is being considered (specialist psychiatry only). QTc prolongation at higher doses (>20 mg) — additive with clomipramine.",
    },
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      drugClass: "SNRI",
      relationship:
        "Cleaner version of clomipramine's eventual SNRI profile (after desmethylclomipramine accumulates). Blocks SERT + NET without the α1, H1, M1, and Na+ channel off-targets. Useful in depression when TCA would be considered but safety profile is needed. Some evidence in OCD. Watch BP — can cause hypertension at higher doses.",
    },
    {
      name: "Imipramine",
      drugClass: "TCA (tertiary amine)",
      relationship:
        "Fellow tertiary-amine TCA. The first TCA developed (1950s). Metabolised to desipramine (secondary amine). Same 'dirty drug' multi-receptor profile as clomipramine and amitriptyline — same overdose lethality. Balanced SERT/NET — does NOT work for OCD. Historically used for nocturnal enuresis in children and depression.",
    },
    {
      name: "Nortriptyline",
      drugClass: "TCA (secondary amine)",
      relationship:
        "Secondary-amine TCA (the active metabolite of amitriptyline). FEWER anticholinergic/sedating effects than tertiary amines. The ONLY antidepressant with a defined THERAPEUTIC WINDOW (50–150 ng/mL) — serum-level monitoring is standard. Does NOT work for OCD (not serotonergic enough). When a TCA is needed for depression or pain (not OCD), nortriptyline is usually preferred.",
    },
  ],

  relatedConditions: [
    { name: "Obsessive-Compulsive Disorder (OCD)", relationship: "primary" },
    { name: "Major Depressive Disorder", relationship: "off-label" },
    { name: "Panic Disorder", relationship: "off-label" },
    { name: "Cataplexy in Narcolepsy", relationship: "off-label" },
    { name: "Premature Ejaculation", relationship: "off-label" },
    { name: "Trichotillomania (Hair-Pulling)", relationship: "off-label" },
    { name: "Body Dysmorphic Disorder", relationship: "off-label" },
    { name: "Treatment-Resistant Depression", relationship: "off-label" },
  ],

  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    { label: "Clomipramine", type: "drug", href: "/drugs/clomipramine", note: "The drug you're reading about" },
    { label: "TCA (Tricyclic Antidepressant)", type: "class", href: "#mechanism", note: "Tertiary amine — the 'dirty drug' class" },
    { label: "SERT (serotonin transporter)", type: "neurotransmitter", href: "#mechanism", note: "PRIMARY target — blocked PROMINENTLY (more than NET). Makes clomipramine the MOST serotonergic TCA." },
    { label: "Serotonin (5-HT)", type: "neurotransmitter", href: "#mechanism", note: "↑↑ via prominent SERT blockade — drives OCD efficacy" },
    { label: "Norepinephrine (NE)", type: "neurotransmitter", href: "#mechanism", note: "↑ via weaker NET blockade (parent) and stronger NET blockade (desmethylclomipramine metabolite)" },
    { label: "Desmethylclomipramine", type: "neurotransmitter", href: "#mechanism", note: "Active metabolite — primarily noradrenergic (NET > SERT). Clomipramine effectively becomes an SNRI over weeks." },
    { label: "OCD (Obsessive-Compulsive Disorder)", type: "condition", href: "#clinical-uses", note: "SIGNATURE indication. Clomipramine is the ONLY TCA effective for OCD. FDA-approved in adults & ≥10 years." },
    { label: "Cardiac Na+ channel", type: "neurotransmitter", href: "#mechanism", note: "Blocked → QRS widening, overdose lethality (same as amitriptyline)" },
    { label: "QRS prolongation", type: "side-effect", href: "#side-effects", note: "Signature ECG sign of TCA toxicity — QRS >100 ms = danger" },
    { label: "Anticholinergic toxidrome", type: "side-effect", href: "#side-effects", note: "M1 blockade — dry mouth, constipation, urinary retention, blurred vision" },
    { label: "Seizures", type: "side-effect", href: "#side-effects", note: "MORE than amitriptyline — dose-dependent, especially >250 mg/day. FDA carries specific warning." },
    { label: "Sexual dysfunction", type: "side-effect", href: "#side-effects", note: "MORE than amitriptyline (serotonergic). Used off-label for premature ejaculation." },
    { label: "Serotonin Syndrome", type: "side-effect", href: "#side-effects", note: "MORE likely than with amitriptyline — clomipramine is the most serotonergic TCA" },
    { label: "Raphe Nuclei", type: "brain-region", href: "#brain-regions", note: "Where serotonin is synthesised" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain-regions", note: "Target of mood + OCD regulation (cortico-striato-thalamo-cortical loops)" },
    { label: "Patient Guide — Starting clomipramine for OCD", type: "patient-guide", href: "#patient-education", note: "8–12 week onset, higher OCD doses, ECG monitoring, serotonin syndrome warning" },
  ],

  /* ---- Patient mode content ---- */
  patientMode: {
    tagline:
      "A medicine that is the only one in its class (tricyclic antidepressants) that works for Obsessive-Compulsive Disorder (OCD) — because it has the strongest effect on serotonin in the brain.",
    summary:
      "Clomipramine is a medicine that belongs to a class called tricyclic antidepressants (TCAs). Its main approved use is for Obsessive-Compulsive Disorder (OCD). It's the only medicine in its class that works for OCD because it has a particularly strong effect on a brain chemical called serotonin — and OCD responds specifically to medicines that boost serotonin. Like other medicines in its class, clomipramine affects several other receptors in the body — which is why it can cause side effects like dry mouth, constipation, dizziness when standing up, sleepiness, weight gain, sweating, and sexual side effects. The most important thing to know is that clomipramine can be DANGEROUS in overdose — even a relatively small amount more than prescribed can affect the heart rhythm or cause a seizure. That's why your doctor will only prescribe limited supplies. For OCD, the benefit typically takes 8–12 weeks to appear and may require higher doses than for depression.",
    mechanism:
      "Your brain uses a chemical called serotonin to regulate mood, anxiety, and obsessive thoughts. Normally, after serotonin is released between nerve cells, it gets quickly taken back up (recycled). Clomipramine blocks this recycling — and it does so more strongly than other medicines in its class. This means more serotonin stays available between the nerve cells for longer. Over 8–12 weeks, this helps normalise the brain loops that drive obsessions and compulsions in OCD. Clomipramine also has a 'by-product' (active metabolite) called desmethylclomipramine that has a different effect — it boosts another brain chemical called norepinephrine. So over weeks of treatment, clomipramine effectively works on both serotonin and norepinephrine. The medicine also affects other receptors in the body — which is why it causes side effects like dry mouth and sleepiness — and can affect the heart's rhythm, which is why the dose must be carefully controlled.",
    sideEffects:
      "Most people get some side effects — dry mouth, drowsiness, constipation, dizziness when standing up, sweating, blurred vision, weight gain, and sexual side effects (like reduced interest or delayed orgasm) are very common. Sexual side effects are MORE common with clomipramine than with similar medicines because it has a stronger effect on serotonin. These are usually mild and often improve over the first few weeks. Some side effects — like sleepiness at night — can actually be helpful if you have trouble sleeping. More serious side effects are less common but you should know the warning signs: palpitations, fainting, or feeling like you might pass out (could mean the heart is being affected — tell your doctor immediately); new twitching, jerking, or seizure-like activity (clomipramine can cause seizures, especially at higher doses — tell your doctor immediately); fever, sore throat, or unusual bruising (could mean a blood problem — urgent blood test); and signs of serotonin syndrome (high fever, confusion, sweating, shaking, muscle twitching — emergency). The single most important safety rule: NEVER take more than the prescribed dose — too much clomipramine at once can dangerously affect the heart or cause a seizure.",
    monitoring:
      "Before you start, your doctor will usually arrange a heart tracing (ECG) — especially if you're over 50, have any heart history, or will be on higher doses for OCD. They'll repeat it after dose increases. They'll also check your blood pressure lying and standing, ask about your mood and any seizure-like symptoms or twitching, and check your weight periodically. For OCD, your doctor will use a questionnaire called the Y-BOCS at baseline, 4, 8, and 12 weeks to track your response. The target dose for OCD is often higher than for depression (up to 250 mg/day), and the full effect takes 8–12 weeks.",
    contraindications:
      "Don't take clomipramine if you've had a recent heart attack, have a heart rhythm problem or heart block, have narrow-angle glaucoma, have problems with urinary retention, or have a seizure disorder (clomipramine lowers the seizure threshold more than similar medicines). Don't take it if you've taken an MAOI antidepressant in the last 14 days. Don't combine it with other antidepressants (especially SSRIs like fluoxetine, paroxetine, or fluvoxamine) without your doctor knowing — these combinations can cause a dangerous condition called serotonin syndrome and can raise clomipramine to toxic levels. If you're over 65, your doctor will usually prefer a different medicine because of the side-effect profile (Beers criteria).",
    interactions:
      "Clomipramine interacts with MANY medicines — tell your doctor and pharmacist about everything you take, including over-the-counter products and herbal remedies. The most dangerous combinations are with other antidepressants (especially fluvoxamine, fluoxetine, and paroxetine — these can raise clomipramine to dangerous levels and cause serotonin syndrome), MAOIs (must never be combined), tramadol (pain), triptans (migraine), St John's Wort, certain antibiotics (especially ciprofloxacin and macrolides), medicines for bladder or stomach (anticholinergics), and even some cold remedies containing pseudoephedrine or phenylephrine. Alcohol adds to the drowsiness and increases heart stress — best avoided. If you're planning to see a dentist, tell them you're on clomipramine — even local anaesthetic with epinephrine can be hazardous.",
  },

  /* ---- Metadata ---- */
  lastReviewed: "2026-07-13",
  reviewers: ["Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Anafranil label"],
};
