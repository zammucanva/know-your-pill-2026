import type { PsychiatryCourse } from "./types";

/**
 * BIPOLAR DISORDERS — canonical Psychiatry course
 * (migration batch 1, Group D).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/bipolar-disorders.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR, ICD-11, NICE
 * CG185, CANMAT/ISBD 2018/2023, BALANCE, STEP-BD, NMHS India) with
 * per-claim provenance.
 *
 * KYP currently has NO mood-stabiliser or antipsychotic drug lessons —
 * lithium, valproate, lamotrigine, carbamazepine, quetiapine and
 * olanzapine routes are recorded in contentGaps (never invented).
 */
export const bipolarDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "bipolar-disorders",
  title: "Bipolar Disorders",
  shortName: "Bipolar",
  kind: "disorder",
  category: "Mood Disorder",
  groupLetter: "D",
  groupName: "Mood disorders",
  learningPath: ["Psychiatry", "Mood Disorders", "Bipolar Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-27",

  tagline:
    "Mania and depression with normal stretches between — treatable, but a long-term condition",
  summary:
    "Bipolar disorders bring weeks-long episodes of mania or hypomania and depression, separated by normal stretches, with each untreated episode easier to trigger than the last. Screening every depression for hidden hypomania is the craft that prevents years of misdiagnosis.",
  estimatedReadTime: "40 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Distinguish mania, hypomania and mixed features using the duration and impairment gates: mania ≥ 7 days (or hospitalisation), hypomania ≥ 4 days without marked impairment.",
    "Apply the bipolar I vs II vs cyclothymia logic: one manic episode ever makes bipolar I; hypomania plus major depression without full mania makes bipolar II.",
    "Screen for past hypomania in every 'depressed' patient using the questions that actually work — the best period, not only the worst.",
    "Recite the lithium running-rules: levels, monitoring schedule, toxicity ladder, interactions, and the never-stop-abruptly rule.",
    "State why antidepressant monotherapy is forbidden in bipolar depression and which drugs treat both poles instead.",
    "Manage pregnancy planning in bipolar disorder: valproate's teratogenicity, lithium carry-forward with monitoring, folate 5 mg, ECT as the safe fast option.",
    "Recognise the postpartum period as the strongest single episode trigger and plan prophylaxis antenatally.",
    "Navigate the Indian realities: NMHS prevalence and treatment gap, hidden hypomania in families, arranged-marriage disclosure, summer lithium toxicity.",
  ],
  quickFacts: [
    { label: "Bipolar I prevalence", value: "≈ 0.6–1%", detail: "Lifetime; bipolar II ≈ 0.4–1%; the whole soft spectrum may reach 2–5%" },
    { label: "Heritability", value: "70–85%", detail: "Among the highest in psychiatry; one affected parent raises a child's risk to roughly 5–10%" },
    { label: "Duration gates", value: "7d / 4d / 2w / 2y / 4/yr", detail: "Mania ≥ 7 days (or any duration if hospitalisation needed); hypomania ≥ 4 days; depression ≥ 2 weeks; cyclothymia ≥ 2 years; rapid cycling ≥ 4 episodes/year" },
    { label: "Diagnosis delay", value: "5–10 years", detail: "From first symptoms to correct diagnosis; most patients are mislabelled unipolar-depressive first and exposed to antidepressants" },
    { label: "Suicide risk", value: "10–15-fold", detail: "Completed-suicide risk elevation; about a third attempt; mixed states and the years just after diagnosis are highest-risk windows" },
    { label: "The unique drug", value: "Lithium", detail: "The only psychiatric drug with replicated suicide-MORTALITY reduction evidence — say this to patients; it matters to them" },
    { label: "Strongest trigger", value: "Childbirth", detail: "The postpartum weeks carry the highest episode risk in bipolar illness; plan prophylaxis antenatally" },
    { label: "India (NMHS)", value: "≈ 0.3%", detail: "Bipolar affective disorder in NMHS 2015–16, with a treatment gap of roughly 70%" },
  ],
  knowledgeGraph: [
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The great mimic — every depressed patient gets a hypomania screen" },
    { label: "Dysthymia, Cyclothymia & Hyperthymia", type: "condition", href: "/psychiatry/persistent-mood-disorders/", note: "Cyclothymia and hyperthymia — the below-threshold spectrum" },
    { label: "Schizoaffective & Schizotypal Disorders", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "Psychosis persisting OUTSIDE mood episodes points there, not here" },
    { label: "Acute & Transient Psychotic Disorders", type: "condition", href: "/psychiatry/acute-transient-psychosis/", note: "Puerperal psychosis as the bipolar-spectrum emergency" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Among the highest risks in medicine — mixed states especially" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Reward-circuit currency of the high" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The depressive pole's pharmacology" },
    { label: "Suprachiasmatic nucleus", type: "brain-region", href: "#brain", note: "The circadian clock — fragile in bipolar disorder" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain", note: "The safety sensors that burn out in mania" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "Cautious add-on only — never monotherapy in bipolar" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The safer add-on class if a mood stabiliser already covers the highs" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The honest model is the broken thermostat plus kindling. The mood-regulation system holds mood in a band the way a thermostat holds temperature; in bipolar disorder the heater can jam full-on (mania, with the 'too much' safety sensors burnt out) and the cooler can jam full-on (depression). Episodes behave like kindled fire: the first needs a big life event, later ones need less, and eventually episodes can arrive untriggered — the biological reason maintenance continues when the person feels well. The system is stitched to the circadian clock, which is why sleep loss is both trigger and earliest warning.",
    steps: [
      "The thermostat: prefrontal-limbic mood regulation normally holds mood in a band; in bipolar disorder both extremes are reachable and self-sustaining.",
      "The safety-sensor failure: the 'too much' detectors (prefrontal control over reward and threat circuits) burn out during the high — grandiosity, lack of insight, no felt need for sleep.",
      "Kindling / behavioural sensitisation: each episode lowers the threshold for the next; the first needs a major life event, later ones less, and finally none at all.",
      "The clock coupling: circadian fragility means shift work, transmeridian flights and three-night weddings can flick the mania switch — and decreasing need for sleep with rising energy is the earliest reliable warning.",
      "The pharmacological bridge: mood stabilisers do not remove the thermostat; they narrow the swings — lithium (anti-manic, anti-depressant, anti-suicide), valproate (anti-manic), lamotrigine (anti-depressive pole), atypical antipsychotics (both poles).",
      "The maintenance logic that follows: each prevented episode protects the future thermostat; abrupt lithium stoppage after years is like leaving dry wood next to the stove.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "pfc", name: "Prefrontal Cortex", role: "The safety sensors — executive braking over reward and threat circuits; their failure in mania is the disinhibition engine.", grade: "supported" },
    { id: "scn", name: "Suprachiasmatic Nucleus (circadian pacemaker)", role: "The master clock whose fragility underlies sleep-triggered episodes — the treatment target of rhythm-stabilising psychoeducation.", grade: "supported" },
    { id: "amygdala", name: "Amygdala", role: "Threat-salience reactivity — irritability and agitation in mixed states ride on it.", grade: "proposed" },
    { id: "vstriatum", name: "Ventral Striatum", role: "Reward circuitry — the goal-drive and hedonic surge of the high; goal-attainment life events precede mania more than losses do.", grade: "supported" },
    { id: "wm", name: "White-matter tracts", role: "Subtle prefrontal-limbic connectivity differences on MRI — research tools, not diagnostic tests.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "Reward and drive currency — the high's surge and the antidepressant-switch risk share the machinery; antipsychotics' anti-manic action lands here.", grade: "supported", drugConnection: "KYP antipsychotic drug lessons are a recorded content gap." },
    { name: "Serotonin", symbol: "5-HT", role: "The depressive pole's pharmacology — SSRIs act here but only under mood-stabiliser cover in bipolar disorder.", grade: "supported", drugConnection: "Sertraline/escitalopram lessons cover the SSRI pharmacology." },
    { name: "Norepinephrine", symbol: "NE", role: "Arousal and energy tone — the wakefulness-that-needs-no-sleep signature of mania.", grade: "proposed" },
    { name: "Glutamate / GABA", symbol: "Glu / GABA", role: "Balance-shift candidates — valproate's and lamotrigine's mechanisms point here; the honest layer is that mood-stabiliser molecular pharmacology remains only partly mapped.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "bp-mania-switch",
      name: "The mania switch",
      steps: [
        { label: "Circadian hit or goal-attainment event", detail: "Sleep loss, transmeridian flight, wedding season, promotion, steroid course" },
        { label: "Decreasing need for sleep", detail: "The earliest reliable warning — not insomnia, no NEED to sleep" },
        { label: "Reward circuit surges, prefrontal brakes fail", detail: "Confidence, energy, speech, spending at maximum with burnt-out 'too much' sensors" },
        { label: "Full mania", detail: "≥ 7 days (or hospitalisation); psychotic features in severe cases" },
        { label: "The crash", detail: "Into exhaustion, depression or a mixed state — the highest suicide-risk window" },
      ],
      clinicalManifestation: "Manic episode — and the family-taught day-2 catch (sleep + energy watch) that converts admissions into dose adjustments.",
      grade: "supported",
    },
    {
      id: "bp-kindling",
      name: "The kindling cascade",
      steps: [
        { label: "First episode", detail: "Usually needs a major life event to start" },
        { label: "Second episode", detail: "Needs less stress" },
        { label: "By the fifth", detail: "Episodes can arrive untriggered — the brain has learned the pathway" },
        { label: "Maintenance prevents the learning", detail: "The honest reason treatment continues when the person feels completely well" },
      ],
      clinicalManifestation: "Episode acceleration across an untreated life — and the relapse spike after abrupt lithium discontinuation.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "bp-onset", time: "Ages 15–25 (typical)", title: "First episode", description: "Mean onset 18–22 for bipolar I, slightly later for II; often misdiagnosed as unipolar depression and exposed to antidepressants.", phase: "onset" },
    { id: "bp-mania", time: "Days–weeks", title: "The high declares itself", description: "Decreasing need for sleep with rising energy; goal-driven hyperactivity; disinhibition; hospitalisation if severe.", phase: "peak" },
    { id: "bp-diagnosis", time: "5–10 years (avg delay)", title: "Correct diagnosis lands", description: "Usually after collateral history or an antidepressant-induced switch; the life-chart drawn with the family makes the episodic architecture visible.", phase: "duration" },
    { id: "bp-maintenance", time: "Years–lifetime", title: "Maintenance phase", description: "Continue the medicine that worked acutely; ≥ 2–5 years after a classic manic episode, most guidelines favour indefinite treatment after 2+ episodes — 'blood pressure medicine for the mood system'.", phase: "recovery" },
    { id: "bp-watch", time: "Lifelong", title: "The trained family", description: "Written three-sign early-warning list (sleep cut, morning energy rise, phone-calling spurt) with a standing instruction to call at day 2, not week 3.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Bipolar I ~0.6–1% lifetime; bipolar II ~0.4–1% (higher in some surveys); the whole soft spectrum including soft forms may reach 2–5%.",
    indianPrevalence: "NMHS 2015–16: ~0.3% for bipolar affective disorder (0.4% male, 0.3% female; urban slightly higher) with a treatment gap of roughly 70%.",
    lifetimeRisk: "Episodes recur: without mood-stabilising treatment they tend to come faster (kindling); one affected parent raises a child's risk to roughly 5–10%, higher if both.",
    genderRatio: "Equal sex ratio for bipolar I; bipolar II and rapid cycling skew female.",
    ageOfOnset: "Mean 18–22 for bipolar I, slightly later for II; onset after 50 is unusual and should prompt a medical hunt (thyroid, steroids, frontal lesions).",
    indianNotes: "Substantial under-recognition of hypomania (families celebrate the energetic phase and report only depression); heavier valproate-than-lithium use for practical monitoring reasons; steroid courses, hypothyroidism and substance use both mimic and worsen the course.",
  },
  etiology: [
    { category: "genetic", factor: "The strongest single story", details: "Heritability ~70–85% among the highest in psychiatry; polygenic risk overlapping schizophrenia and depression; no single gene." },
    { category: "biological", factor: "Circadian-clock fragility", details: "Shift work, transmeridian flights and sleep loss precipitate mania — and mania destroys sleep in a vicious cycle; HPA-axis and thyroid interactions (autoimmune thyroiditis commoner in bipolar women; lithium itself affects the thyroid)." },
    { category: "biological", factor: "Structural correlates", details: "Subtle white-matter and prefrontal-limbic differences on MRI — research tools, not diagnostic tests." },
    { category: "psychological", factor: "High goal-drive and reward-sensitivity traits", details: "Interact with life events: goal-attainment events precede mania more than losses do; childhood adversity raises earlier-onset, mixed, treatment-resistant courses." },
    { category: "social", factor: "Life events and substances", details: "First episodes are triggered by life events more than later ones (biological autonomy develops); cannabis and stimulants accelerate onset and worsen course; alcohol destabilises sleep and adherence." },
    { category: "environmental", factor: "Indian context specifics", details: "Arranged-marriage concealment: families suppress mania history to secure matches, then marriage coincides with relapse, medication stoppage or in-law conflict. Steroid courses (prescribed liberally for allergies/skin), SLE/thyroid illness and postpartum states are common local mania mimics and triggers; male alcohol use masks mixed states until a family timeline is drawn." },
  ],
  symptomClusters: [
    {
      category: "Mania (bipolar I)",
      symptoms: ["Elevated or irritable mood ≥ 1 week (or any duration if hospitalisation needed)", "Inflated self-esteem / grandiosity ('divine insight; I can fix the national economy')", "Decreased NEED for sleep (2–3 hours, wakes furious with energy)", "Pressured speech — fast, loud, uninterruptible, joke-jumping", "Flight of ideas; distractibility", "Goal-driven hyperactivity: projects, religious devotion, business schemes, renovation marathons", "Hedonistic disinhibition: overspending, EMI splurges, impulsive gold/property decisions, sexual risk, reckless driving", "Psychotic features in severe mania: grandiose delusions, religious mission status", "Near-total lack of insight — the ill person feels at their best"],
    },
    {
      category: "Hypomania (bipolar II)",
      symptoms: ["Same flavour ≥ 4 days, observable by others", "No marked impairment, no psychosis, no hospitalisation", "Often experienced as the 'good period' — productive, witty, social, big plans", "The tell: afterwards the projects are unfinished, the money gone, the person slightly embarrassed"],
    },
    {
      category: "Bipolar depression",
      symptoms: ["Looks like severe depression BUT with atypical features more often: oversleeping, overeating, leaden heaviness of limbs, rejection sensitivity", "Young onset, many brief episodes, postpartum onset, family history of bipolar", "Psychotic guilt-laden features can occur", "Mixed features (DSM-5): ≥ 3 opposite-pole symptoms during the depression — racing thoughts, agitation, talkativeness, insomnia-despite-fatigue, risk-taking; 'tired but wired' — the worst mental state in psychiatry and the most dangerous for suicide"],
    },
    {
      category: "Course patterns worth naming",
      symptoms: ["Rapid cycling: ≥ 4 episodes/year — often alcohol-related, thyroid-related or antidepressant-induced; valproate preferred over lithium", "Seasonal patterns; postpartum-onset episodes; late-adolescent first presentations", "Cyclothymia: ≥ 2 years of low-grade ups and downs never meeting full criteria (see the Persistent Mood Disorders course)"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Bipolar I (F31.x) / Bipolar II (F31.8)",
      criteria: [
        "Bipolar I: a manic episode, ever, makes the diagnosis — regardless of depression history (depression almost always eventually appears).",
        "Mania: elevated/irritable mood ≥ 7 days (or any duration if hospitalisation required) + ≥ 3-4 DIGFAST symptoms + marked impairment.",
        "Hypomania: ≥ 4 days, observable by others, no marked impairment/psychosis/hospitalisation.",
        "Bipolar II: hypomania + major depression, with no full mania ever.",
        "Mixed features specifier: ≥ 3 opposite-pole symptoms during an episode.",
      ],
      duration: "Mania 7 days; hypomania 4 days; depression 2 weeks; cyclothymia 2 years; rapid cycling 4 episodes/year.",
      indianNote: "The screening craft that works: not 'have you ever been too happy?' but 'has there ever been a period of at least four days when you needed much less sleep, felt full of energy, and people said you were talking too much or making big plans?' Then ask about credit splurges, letters to officials/deities, and any week others called 'too much'.",
    },
    {
      system: "ICD-11",
      code: "Bipolar I / II disorder",
      criteria: [
        "Bipolar and related disorders grouping with the same episode architecture.",
        "Hypomania requires ≥ 4 days in ICD-11 too (the classic ICD-10 '2-day' hypomania has been aligned).",
        "Mixed episodes are modelled as mixed features within episodes rather than a separate category.",
      ],
      duration: "Same gates as DSM-5-TR.",
    },
  ],
  severityScales: [
    {
      name: "YMRS",
      fullName: "Young Mania Rating Scale",
      measures: "Manic symptom severity — documents the high pole and its response.",
      ranges: [
        { min: 0, max: 11, severity: "Remission / euthymia", action: "Maintenance continues unchanged; reinforce sleep-protective habits" },
        { min: 12, max: 19, severity: "Mild manic symptoms", action: "Review sleep, adherence and stressors; outpatient dose review" },
        { min: 20, max: 25, severity: "Moderate mania", action: "Urgent medication review; assess admission need and risk" },
        { min: 26, max: 60, severity: "Severe mania", action: "Usually inpatient management; consider antipsychotic + mood stabiliser combination" },
      ],
      indianNote: "Named for documentation and exams; items not reproduced (copyright).",
    },
    {
      name: "MDQ",
      fullName: "Mood Disorder Questionnaire",
      measures: "Screening instrument for past hypomania — the gateway question set before the clinical interview.",
      ranges: [
        { min: 0, max: 6, severity: "Below symptom threshold", action: "Screen negative — proceed with unipolar assessment, but re-screen after any non-response" },
        { min: 7, max: 13, severity: "At/above threshold", action: "Positive screen ONLY if symptoms co-occurred AND caused moderate-or-greater impairment — then structured interview before any diagnosis" },
      ],
    },
    {
      name: "PHQ-9 / HAM-D",
      fullName: "Depression severity instruments",
      measures: "The depressive pole — read alongside the switch-risk watch.",
      ranges: [
        { min: 0, max: 4, severity: "Minimal", action: "Monitor; maintain mood stabiliser cover" },
        { min: 5, max: 9, severity: "Mild", action: "Psychoeducation + watchful waiting; never antidepressant monotherapy" },
        { min: 10, max: 14, severity: "Moderate", action: "Bipolar-depression pathway: quetiapine / lithium / lamotrigine discussion" },
        { min: 15, max: 19, severity: "Moderately severe", action: "Definite bipolar-specific treatment; assess suicide risk every visit" },
        { min: 20, max: 27, severity: "Severe", action: "Consider ECT for psychotic or life-threatening depression; guard the switch risk" },
      ],
      indianNote: "PHQ-9 bands shown (self-report); HAM-D 17-item clinician-rated correspondence: <7 normal, 8–16 mild, 17–23 moderate, ≥24 severe.",
    },
    { name: "Life chart", fullName: "NIMH life-chart method (episodes on a timeline)", measures: "The single most useful tool in the whole field: episodes, triggers and treatment response on one drawn line — draw it WITH the family in the first two visits.", ranges: [] },
  ],
  differentialDiagnosis: [
    { condition: "Unipolar depression", distinguishingFeatures: "First episodes > 30, no highs ever, classic insomnia.", keyDifferentiator: "First episode < 25, atypical features (hypersomnia, heaviness), postpartum onset, family bipolar history." },
    { condition: "ADHD", distinguishingFeatures: "Lifelong and continuous since childhood, no discrete episodes.", keyDifferentiator: "Clear episodicity with euthymic gaps — the life-chart shows the architecture." },
    { condition: "Borderline personality", distinguishingFeatures: "Hours-long reactivity to interpersonal triggers.", keyDifferentiator: "Week-long sustained episodes with euthymic gaps; the two clocks (days-weeks untriggered vs hours triggered)." },
    { condition: "Schizoaffective disorder / schizophrenia", distinguishingFeatures: "Psychosis persists outside mood episodes.", keyDifferentiator: "In bipolar, psychosis sits INSIDE episodes and is grandiosity-laden." },
    { condition: "Substance-induced mania", distinguishingFeatures: "High confined to intoxication/withdrawal weeks.", keyDifferentiator: "Recurrent highs when clean." },
    { condition: "Steroid / thyroid / frontal-lobe mania", distinguishingFeatures: "Onset locks to the medical cause.", keyDifferentiator: "No medical correlate; classic early onset; always screen TSH and steroid history in first presentations and atypical ages." },
  ],
  management: [
    {
      category: "pharmacotherapy",
      name: "Acute mania / mixed states",
      description: "STOP any antidepressant. First-line: lithium (800–1,200 mg/day; target level 0.8–1.2 mmol/L acutely), valproate (loading 20–30 mg/kg/day, e.g., 1,000–1,500 mg/day), quetiapine (400–800 mg/day), olanzapine (10–20 mg), risperidone (2–6 mg) or asenapine; combinations (lithium or valproate + antipsychotic) for severe cases. Benzodiazepines bridge agitation and sleep for the first week.",
      whenToUse: "Every manic/mixed episode.",
      indianContext: "Valproate is often chosen first in Indian practice for practical monitoring reasons (no routine levels); lithium's lab access varies by town.",
    },
    {
      category: "pharmacotherapy",
      name: "Acute bipolar depression",
      description: "First-line: quetiapine 300 mg/day (best single-agent evidence, including bipolar II), lurasidone 20–120 mg (with food), lithium, or lamotrigine (25 mg × 2 weeks → 50 mg → 100–200 mg; slow titration protects against rash). Olanzapine-fluoxetine combination is an approved option. Antidepressant monotherapy is FORBIDDEN — if used at all, only as an add-on to a mood stabiliser, never with mixed or rapid-cycling features, with an explicit stop-plan; bupropion and SSRIs are the safer add-ons, venlafaxine the poorer switch record.",
      whenToUse: "Depressive episodes in confirmed bipolar disorder.",
      indianContext: "Lamotrigine rash education must be delivered in the local language — mandatory in Indian practice.",
    },
    {
      category: "pharmacotherapy",
      name: "Maintenance — the phase that decides the life",
      description: "Continue the medicine that worked acutely; ≥ 2–5 years after a classic manic episode, indefinite treatment after 2+ episodes ('blood pressure medicine for the mood system'). Lithium remains gold: anti-manic, anti-depressant, anti-suicide. Valproate: strong anti-manic/mixed cover, easier monitoring, teratogenic. Lamotrigine: mainly anti-depressive pole, weight-neutral. Carbamazepine: many interactions (OCPs, warfarin, psychotropics); watch hyponatraemia and rash. Long-acting injectable antipsychotics for adherence-fragile patients.",
      whenToUse: "From the first episode onwards — and especially through the 'I feel fine now' pressure.",
      indianContext: "The real Indian cost is not the tablet — it is the travel day lost to a lithium level check and the wage loss of an untreated manic month.",
    },
    {
      category: "pharmacotherapy",
      name: "Lithium running-rules (learn cold)",
      description: "Levels: 0.8–1.2 mmol/L acute mania, 0.6–0.8 maintenance (12-hour post-dose trough). Check 5–7 days after dose change, monthly × 3, then quarterly; TSH and creatinine every 6–12 months; calcium yearly; weight each visit. Toxicity ladder: coarse tremor, nausea, diarrhoea, slurring → confusion, ataxia → seizures, coma (triggers: dehydration, NSAIDs, ACE inhibitors, thiazides, low-salt diets, fevers — Indian summers). Long-term: hypothyroidism (replace thyroxine, do NOT stop lithium), renal concentrating defect, mild cognitive dulling, weight gain, acne, psoriasis, parathyroid/calcium check. NEVER stop abruptly — taper over weeks to months.",
      whenToUse: "Every lithium patient, every visit.",
      indianContext: "Indian summers, gastroenteritis season and Ramadan-timed fasting are the classic local toxicity windows — teach 'lithium + low salt + loose motions = come the same day.'",
    },
    {
      category: "brain-stimulation",
      name: "ECT",
      description: "For mania unresponsive to drugs, or where speed matters most — highly effective and safe, including in pregnancy; also for severe psychotic bipolar depression with suicidality.",
      whenToUse: "Refractory or life-threatening episodes; pregnancy with severe symptoms.",
      indianContext: "Available in medical-college hospitals; memory blurring around the course is real and usually clears over weeks.",
    },
    {
      category: "psychotherapy",
      name: "Psychoeducation + rhythm work",
      description: "The written three-sign early-warning list for the family; the life-chart; sleep-protection rules; substance-hygiene; the marriage/disclosure conversation. This single package reduces admissions more reliably than any prescription change.",
      whenToUse: "Every patient, from diagnosis for life.",
      indianContext: "The trained family converts admissions into phone calls — that is the entire maintenance game in Indian practice.",
    },
  ],
  safety: {
    redFlags: [
      "Mixed features state — 'tired but wired', the highest suicide-risk window",
      "Any suicidal ideation with plan, means or rehearsal (see the Suicide & Self-harm course)",
      "Manic exhaustion with dehydration and refusal to rest",
      "Abrupt lithium stoppage — relapse risk multiplies in the following months",
      "Lithium toxicity signs: coarse tremor, vomiting, slurring, ataxia, confusion — an emergency (hold drug, check level, hydrate)",
      "Valproate in a woman who may conceive — teratogenic emergency-in-waiting",
      "Postpartum weeks — the strongest trigger; watch mother and baby",
    ],
    urgentGuidance:
      "Lithium toxicity during a gastroenteritis week: hold lithium, check level, rehydrate urgently — dialysis in severe cases. Mania with dangerous behaviour or exhaustion: hospitalise. Postpartum onset within 2 weeks: treat as emergency (see the Acute & Transient Psychosis course's puerperal pathway).",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "Cautious add-on only", rationale: "If an antidepressant is used at all in bipolar depression: only on top of a mood stabiliser, never in mixed or rapid-cycling states, with an explicit stop-plan. The safer add-on class; never monotherapy.", evidenceLevel: "guideline", clinicalDisclaimer: "Antidepressant monotherapy is contraindicated in bipolar disorder — this link covers the add-on pharmacology only.", emergencyGuidance: "Any switch into hypomania/mania on an SSRI: stop the antidepressant, reassess the mood stabiliser." },
    { name: "Escitalopram", slug: "escitalopram", role: "Cautious add-on only", rationale: "Fewest interactions — the practical add-on on polypharmacy; same never-alone rule.", evidenceLevel: "guideline", clinicalDisclaimer: "Same add-only rule; watch for switching." },
  ],
  contentGaps: [
    "Lithium — the gold-standard mood stabiliser with unique anti-suicide evidence — has no KYP drug lesson yet (pharmacology, levels, toxicity ladder, interactions).",
    "Valproate and carbamazepine — the anti-manic antiepileptics — have no KYP drug lessons yet.",
    "Lamotrigine — the depressive-pole agent with the SJS titration rule — has no KYP drug lesson yet.",
    "Antipsychotics with bipolar indications (quetiapine, olanzapine, risperidone, asenapine, lurasidone) — no KYP drug lessons yet.",
    "ECT as a treatment modality has no KYP lesson yet.",
  ],
  patientGuide: {
    whatIsIt:
      "A mood-regulation condition that comes in episodes — like epilepsy comes in seizures. The swings are episodic (weeks to months, not hours), pathological (the 'high' is not happiness but a revved, dangerous state of sleeplessness and overconfidence), and recurrent without treatment. Between episodes, most people are completely themselves.",
    whatCausesIt:
      "The strongest genetic story in psychiatry: heritability 70–85%. Sleep loss, shift work, three-night weddings, steroid courses, childbirth and substances can trigger episodes in a vulnerable brain. It is nobody's fault and nobody's weakness.",
    symptoms:
      "The high: little sleep but no tiredness, racing unstoppable speech, grand plans, spending sprees, sexual or religious disinhibition — and no insight that anything is wrong. The low: crushing depression with oversleeping and heaviness. The mixed state: agitated despair — tired but wired — which is the most dangerous phase for suicide.",
    treatment:
      "Two plans from day one: the episode plan (weeks) and the maintenance plan (years). Lithium remains the gold standard — including the only medicine in psychiatry proven to reduce suicide deaths; valproate, lamotrigine, quetiapine and others each cover different poles. Antidepressants alone are forbidden here — they can flip you into a high. Stopping abruptly when you feel fine is the classic relapse trap; any change happens slowly, planned, with your doctor.",
    selfHelp: [
      "Protect sleep like a prescription — the earliest warning sign is needing less of it with rising energy.",
      "Keep the written three-sign list where the family can find it, with the standing instruction: call at day 2, not week 3.",
      "Avoid cannabis and alcohol — they accelerate and destabilise the course.",
      "Carry the lithium card: 'li + low salt + loose motions = come the same day' — summers, gastroenteritis and fasting seasons are the danger windows.",
    ],
    whenToSeekHelp: [
      "Sleep falling below 5 hours with rising energy and plans — the day-2 call",
      "Spending, phone-calling or project-starting spurt that others notice",
      "Any suicidal thoughts, especially in the tired-but-wired state",
      "Vomiting/diarrhoea while on lithium — same-day review",
      "A missed pregnancy on valproate — urgent specialist review",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District hospital psychiatry OPD under DMHP — many maintenance medicines free or near-free",
      "iCall and city helplines for counselling access",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No dedicated Indian bipolar guideline; management follows NICE CG185 and CANMAT/ISBD 2018/2023 architecture with Indian cost-and-monitoring adaptations documented in IPS practice.",
    systemContext: "NMHS 2015–16: ~0.3% prevalence with ~70% treatment gap. The hidden hypomania problem: families report the depressed member but omit the 'energetic month' — either because it was the only time the person earned well, or because it was classified as religious fervour. Ask separately: 'his best period, what was he like?' and 'how much sleep did he need in his best period?'",
    programmeContext: "RPwD Act 2016's 40% benchmark applies to severe persistent cases; PM-JAY covers hospitalisation; NIMHANS and medical-college OPDs anchor low-cost maintenance.",
    costConsiderations: "The cost-and-monitoring ledger (approx 2026): lithium ≈ ₹60–150/month BUT needs ₹300–600 level checks and lab access; valproate ≈ ₹150–350/month with no routine levels; lamotrigine ≈ ₹150–400/month; quetiapine 300 mg ≈ ₹350–700/month; olanzapine 10 mg ≈ ₹120–250/month. District hospitals supply many free. Pharmacist lithium availability outside metros can be patchy — know your town's supply reality before prescribing it.",
    culturalConsiderations: "The arranged-marriage three-act tragedy: concealment → marriage with hidden diagnosis and medicines stopped secretly → relapse discovered by the spouse. The honest route (stabilised, disclosed to at least one senior family member on the other side, framed as 'treatable like thyroid/epilepsy') is hard to sell but survives audits. Decline 'fitness certificates' beyond a factual fitness-for-marriage-with-treatment-status letter. Mania with religious content draws families to temples and dargahs first — engage respectfully, keep the medical door open.",
    patientCounselling: [
      "The early-warning system: written list of the person's three earliest signs (typically sleep cut, morning energy rise, phone-calling spurt) with the standing call instruction.",
      "Heritability counselling for siblings: general population ~1%; one affected parent ~5–10% — a planning conversation, not a prohibition; avoid both alarm and false reassurance.",
      "The lithium-in-the-heat talk: Indian summers, gastroenteritis season and fasting windows are the toxicity seasons — teach the same-day rule.",
      "The marriage conversation: stabilise first, disclose to one senior member, frame as treatable; stopping medicine for an auspicious date usually ruins the very occasion it was meant to bless — schedule adjustments are possible, stoppage is not.",
    ],
  },
  decisionPath: {
    title: "The depressed patient — bipolar screen gate",
    nodes: [
      {
        id: "start",
        question: "A patient presents with depression.",
        branches: [
          { label: "Screen for past hypomania/mania first", next: "screen" },
        ],
      },
      {
        id: "screen",
        question: "Structured hypomania questions + collateral + family history: any period ≥ 4 days of decreased sleep-need with energy and activity? Any lifetime manic-grade episode?",
        branches: [
          { label: "Mania ever (≥ 7 days or hospitalisation)", next: "bipolar-i" },
          { label: "Hypomania ≥ 4 days, no full mania", next: "bipolar-ii" },
          { label: "No highs; chronic low-grade oscillation ≥ 2 years", next: "cyclothymia" },
          { label: "No highs ever, episodic architecture absent", next: "unipolar" },
        ],
      },
      { id: "bipolar-i", question: "Bipolar I disorder.", recommendation: "Treat per phase: acute mania → stop antidepressants, lithium/valproate/antipsychotic ± combination; bipolar depression → quetiapine/lurasidone/lithium/lamotrigine, NEVER antidepressant monotherapy; maintenance ≥ 2–5 years, indefinite after 2+ episodes. Suicide-risk assessment every visit." },
      { id: "bipolar-ii", question: "Bipolar II disorder.", recommendation: "Quetiapine has the best single-agent evidence including in bipolar II; lamotrigine for the depressive pole; the same antidepressant caution applies; train the family on the three-sign early-warning list." },
      { id: "cyclothymia", question: "Cyclothymic pattern.", recommendation: "Rhythm-first psychoeducation, charting, antidepressant caution, yearly amplitude review — see the Persistent Mood Disorders course." },
      { id: "unipolar", question: "Unipolar picture (after genuine screening).", recommendation: "Proceed along the Depressive Disorders course — but re-screen at every future non-response: failed antidepressant trials with activation should always re-trigger the hypomania questions." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating the presenting depression without hypomania screening",
      why: "The most common real-world error in the whole field — antidepressants in undiagnosed bipolar disorder switch or accelerate the course.",
      correction: "Screen every depressed patient with the best-period questions and collateral; failed antidepressant trials always re-trigger the screen.",
    },
    {
      mistake: "Prescribing valproate to a woman of childbearing age without a pregnancy conversation and folate plan",
      why: "Valproate is the strongest teratogen in common psychiatric use — neural tube and neurodevelopmental risks.",
      correction: "Pre-conception planning: substitute a lower-teratogenic strategy (quetiapine, lamotrigine, or lithium with specialised monitoring), folate 5 mg, relapse-prevention plan, ECT available for severe episodes.",
    },
    {
      mistake: "Confusing hypomania with the spontaneous recovery of a withdrawn person",
      why: "The chart question is whether the sleep NEED was decreased, not just sleep normal.",
      correction: "Ask the collateral the sleep-need question specifically; recovery restores normal sleep, hypomania removes the need for it.",
    },
    {
      mistake: "Missing steroid-induced or thyrotoxic mania in a first presentation",
      why: "First episodes at atypical ages with medical correlates are the classic mimic zone.",
      correction: "TSH, steroid history, substance screen in every first episode; onset after 50 gets a full medical hunt.",
    },
    {
      mistake: "Letting the patient stop lithium abruptly at the 'I feel fine now' self-discharge",
      why: "Abrupt stoppage multiplies relapse risk in the following months — and the relapse lands on a family that believed the story was over.",
      correction: "Taper over weeks to months, planned, with the relapse drill and the trained family; if the patient self-stops anyway, early-warning review within weeks, not months.",
    },
    {
      mistake: "Calling week-long euphoria with psychotic grandiosity 'schizophrenia'",
      why: "Psychosis sits INSIDE episodes in bipolar disorder — the episodic architecture and grandiosity loading are the tells.",
      correction: "Map the episodes on a life-chart with the family; persisting psychosis outside mood episodes is the schizophrenia-spectrum question instead.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The three duration gates: mania, hypomania, depression.",
        "DIGFAST — describe each mania symptom in patient words.",
        "Lithium: levels, monitoring schedule, toxicity ladder, interactions.",
        "Why antidepressant monotherapy is forbidden in bipolar depression.",
        "Bipolar I vs II differentiation.",
      ],
      practical: [
        "Take a collateral history from a spouse and present the life-chart formulation.",
        "Counsel a patient starting lithium: the paradox of staying well, the summer/dehydration rules.",
        "Counsel a woman on valproate planning pregnancy.",
      ],
      longAnswer: [
        "Bipolar disorder: diagnosis, pharmacotherapy across phases, maintenance principles.",
        "Lithium pharmacology, monitoring and toxicity management.",
        "Management of bipolar disorder in a pregnant woman.",
      ],
    },
    neetPg: {
      highYield: [
        "Duration gates: mania ≥ 7 days (or hospitalisation); hypomania ≥ 4 days; depression ≥ 2 weeks; cyclothymia ≥ 2 years; rapid cycling ≥ 4 episodes/year.",
        "DIGFAST mnemonic for mania.",
        "Heritability 70–85% — highest in psychiatry with autism.",
        "Lithium = the only psychotropic with replicated anti-suicide MORTALITY data.",
        "Valproate = the strongest teratogen in common psychiatric use.",
        "Lamotrigine = depressive pole; SJS risk demands slow titration and rash education.",
        "Postpartum = the strongest single trigger; plan prophylaxis antenatally.",
        "Mixed features = highest suicide-risk state + antidepressant danger zone.",
        "Quetiapine 300 mg = best single-agent evidence in bipolar depression (incl. bipolar II).",
        "Lithium toxicity 3 C's ladder: Coarse tremor → Confusion → Convulsions/Coma; interactions: NSAIDs, ACE-I, thiazides, dehydration.",
      ],
      pyqConcepts: [
        "Lithium pharmacology/monitoring/toxicity — the perennial long question (write the levels, the interaction list, the summer/dehydration context).",
        "Why avoid antidepressant monotherapy in bipolar depression — the viva classic.",
        "Bipolar I vs II differentiation.",
        "ECT indications in mania.",
        "NMHS 2015–16 bipolar prevalence (0.3%) and treatment gap — quotable Indian-context marks.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "The 19-year-old 'depressed' engineering student whose best period needed four hours' sleep — the screening sequence and the prescription logic.",
        "Failed three antidepressant trials in 'recurrent depression' with oversleeping and heaviness — the diagnosis and the first prescription change.",
        "Gastroenteritis week on lithium with coarse tremor and slurring — the immediate three moves.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Mania = ≥ 7 days + ≥ 3 DIGFAST symptoms + impairment; hypomania = ≥ 4 days without marked impairment.",
        "Lithium level targets: 0.8–1.2 acute, 0.6–0.8 maintenance.",
        "Antidepressant monotherapy contraindicated in bipolar depression.",
        "Valproate teratogenic; avoid in women who may conceive.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The kindling/behavioural-sensitisation model is the honest framing for why maintenance continues after the first episode — each prevented episode protects the future thermostat.",
        "BALANCE and the maintenance hierarchy: combination and lithium arms both beat valproate monotherapy for recurrence prevention.",
        "STEP-BD: antidepressant add-on to mood stabilisers showed no benefit over placebo augmentation in bipolar depression — the trial that closed the antidepressant-augmentation era.",
        "The trained family converting admissions into phone calls is the highest-yield maintenance intervention in Indian practice — brief them properly at every visit.",
        "Postpartum planning is bipolar planning: the strongest single trigger deserves an antenatal prophylaxis plan written in the booking visit notes.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The 'model student' crash",
      presentation: "19-year-old engineering student, Vellore — brought by his father after staying awake five nights 'finishing the semester early', spending ₹1.2 lakh of fee money on a 'startup to deliver temple prasadam by drone', and messaging the college director 'direct instructions received'.",
      initialPresentation: "First psychiatric contact: a 19-year-old male engineering student brought by his father to the OPD in Vellore. Presenting picture: five consecutive nights of near-absent sleep with escalating goal-directed activity — fee money redirected into a drone-delivery 'startup', messages announcing 'direct instructions' sent to the college director. College functioning visibly disrupted; the father is the informant.",
      history: "Treated for 'depression' a year earlier with an SSRI. Timeline taken with the mother revealed a 10-day 'super-study period' then too — 4 hours' sleep, notes in three colours, torrential talking — that the family had enjoyed.",
      examination: "Pressured speech, flight of ideas, grandiose delusions, decreased need for sleep; no organic findings; substance screen negative.",
      diagnosis: "Bipolar I disorder, manic episode with psychotic features, prior antidepressant exposure.",
      management: "Olanzapine 15 mg + valproate 1,250 mg; lorazepam for four nights; discharge at day 12 when sleep normalised; family taught the sleep-sign protocol.",
      outcome: "Maintenance continued through graduation; the drone project quietly closed with his consent after recovery.",
      teachingPoints: [
        "Antidepressant-triggered mania in a misdiagnosed teen.",
        "Hypomania hides in 'his best period' — always ask about the best, not only the worst.",
        "Sleep is both the alarm and the treatment target.",
      ],
    },
    {
      title: "The wife who checked the ledger",
      presentation: "34-year-old bank employee, Bhubaneswar — 8 years of 'recurrent depression', three failed antidepressant trials; episodes increasingly short with oversleeping and heaviness.",
      initialPresentation: "A 34-year-old female bank employee assessed for 'recurrent depression' — eight years of episodes and three adequate antidepressant trials without sustained benefit. Presenting episode features: depressed mood with oversleeping, leaden heaviness and rejection sensitivity (the atypical pattern); the screening question that changes the diagnosis — the best-period interview — had not yet been asked at first contact. Husband available as an independent informant.",
      history: "On structured screening she admitted a recurring 'four-to-five day sparkle': cleaning the whole house at 3 a.m., calling relatives she had fought with, buying sarees on EMI, needing 4 hours' sleep — never reported because 'those were my good days, doctor'. Her husband confirmed it.",
      examination: "Currently in a moderate depressive episode with atypical features (hypersomnia, leaden heaviness, rejection sensitivity).",
      diagnosis: "Bipolar II disorder, currently depressed.",
      management: "Lamotrigine begun with slow titration to 150 mg + quetiapine 50 mg at night; antidepressant stopped; life-chart drawn with the couple.",
      outcome: "Recovery over 8 weeks; at 1 year, one mild hypomanic blip caught by her husband at day 3 via a phone call to the OPD — dose adjustment only, no admission.",
      teachingPoints: [
        "Failed antidepressant trials in 'depression' always trigger hypomania screening.",
        "Collateral history is diagnostic here.",
        "The couple who can catch day-3 signs converts admissions into phone calls — that is the entire maintenance game.",
      ],
    },
  ],
  clinicalPearls: [
    "Screen every depressed patient for the best period, not only the worst — 'how much sleep did you need in your best period?'",
    "One manic episode ever = bipolar I. Four days of hypomania without impairment = the bipolar II tell.",
    "Antidepressant monotherapy is forbidden in bipolar depression; quetiapine, lurasidone, lithium and lamotrigine treat the low while protecting the high.",
    "Lithium is the only psychiatric drug with replicated suicide-mortality reduction evidence — tell patients; it changes adherence.",
    "Lithium + low salt + loose motions = same-day visit. Indian summers are the toxicity season.",
    "Never stop lithium abruptly — taper over weeks to months with a relapse drill.",
    "Childbirth is the strongest single trigger: write the prophylaxis plan in the antenatal card.",
    "The trained family converts admissions into phone calls.",
  ],
  highYieldSummary: [
    "Gates: mania 7 days / hypomania 4 days / depression 2 weeks / cyclothymia 2 years / rapid cycling 4 per year.",
    "Mania mnemonic DIGFAST; the mixed-features state is the top suicide-risk window.",
    "Heritability 70–85%; one affected parent → child risk ~5–10%.",
    "Acute mania: stop antidepressants; lithium/valproate/antipsychotic; combinations for severe.",
    "Bipolar depression: quetiapine, lurasidone, lithium, lamotrigine — never antidepressant monotherapy.",
    "Lithium running-rules: 0.8–1.2 acute / 0.6–0.8 maintenance; 12-hour trough; TSH + creatinine 6–12-monthly; never stop abruptly.",
    "Valproate = strongest common teratogen — pre-conception switch + folate 5 mg.",
    "Postpartum = strongest trigger; prophylaxis antenatally; ECT safe and fast in pregnancy.",
    "India: NMHS 0.3% prevalence, ~70% treatment gap; hidden hypomania; marriage-disclosure counselling.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "bp-quiz-1",
      question: "A 24-year-old woman has had 5 days of 3-hour-sleep nights, boundless energy, pressured speech, heavy online spending, and feels 'invincible'. She continues to attend work, though poorly. Best characterisation:",
      options: ["Manic episode: bipolar I", "Hypomanic episode: bipolar II", "Mixed features with depression", "Cyclothymia"],
      correctIndex: 1,
      explanation: "Four-plus days of hypomanic symptoms without marked impairment/hospitalisation/psychosis = hypomania (watch the impairment boundary: if marked, it upgrades toward mania).",
      afterSectionId: "diagnosis",
    },
    {
      id: "bp-quiz-2",
      question: "Which single drug has replicated evidence for reducing SUICIDE MORTALITY in bipolar disorder?",
      options: ["Valproate", "Lithium", "Quetiapine", "Lamotrigine"],
      correctIndex: 1,
      explanation: "Lithium's anti-suicide mortality effect is unique among mood treatments.",
      afterSectionId: "management",
    },
    {
      id: "bp-quiz-3",
      question: "A patient on lithium develops coarse tremor, vomiting, and slurred speech during a gastroenteritis week. The correct immediate steps:",
      options: ["Double lithium to counter agitation", "Hold lithium, check level, rehydrate urgently", "Add an antipsychotic", "Reassure and continue"],
      correctIndex: 1,
      explanation: "Dehydration + lithium = the toxicity ladder; hold, level, hydrate are the ABCs.",
      afterSectionId: "management",
    },
    {
      id: "bp-quiz-4",
      question: "First-line options for acute BIPOLAR DEPRESSION include all EXCEPT:",
      options: ["Quetiapine monotherapy", "Lurasidone", "Lamotrigine (titrated slowly)", "Venlafaxine monotherapy"],
      correctIndex: 3,
      explanation: "Antidepressant monotherapy is contraindicated; venlafaxine carries higher switch risk than other antidepressants even when added.",
      afterSectionId: "management",
    },
    {
      id: "bp-quiz-5",
      question: "A woman with bipolar I on valproate plans pregnancy. The correct course is:",
      options: ["Continue valproate at same dose, benefits outweigh risks", "Stop valproate, substitute a lower-teratogenic strategy (e.g., quetiapine/lamotrigine or lithium with specialised monitoring), folate 5 mg, plan relapse-prevention", "Terminate pregnancy planning permanently", "Switch to paroxetine"],
      correctIndex: 1,
      explanation: "Valproate is the strongest teratogen in common psychiatric use; plan the switch pre-conception with a maintenance strategy and relapse plan (ECT available for severe episodes).",
      afterSectionId: "management",
    },
    {
      id: "bp-quiz-6",
      question: "The strongest single trigger for a new bipolar episode is:",
      options: ["Job promotion", "Childbirth (postpartum period)", "Winter", "Change of residence"],
      correctIndex: 1,
      explanation: "The postpartum weeks carry the highest episode risk in bipolar illness; plan prophylaxis antenatally (goal-attainment events like promotion rank high for mania, but childbirth is the strongest overall trigger).",
      afterSectionId: "symptoms",
    },
  ],
  activeRecallQuestions: [
    { question: "Write the three duration gates (mania, hypomania, depression) from memory.", answer: "Mania ≥ 7 days (or any duration if hospitalisation needed); hypomania ≥ 4 days without marked impairment; depressive episode ≥ 2 weeks. (Cyclothymia ≥ 2 years; rapid cycling ≥ 4 episodes/year.)", topic: "Diagnosis" },
    { question: "Name the four questions you use to hunt a hidden hypomania in a 'depressed' patient.", answer: "(1) 'Has there ever been a period of at least four days when you needed much less sleep, felt full of energy, and people said you were talking too much or making big plans?' (2) Credit-card/loan splurges, letters to officials/deities/celebrities? (3) 'His best period — how much sleep did he need?' (ask the family separately). (4) Any week others called 'too much'? — plus the collateral history and the family pedigree.", topic: "Diagnosis" },
    { question: "Recite the lithium monitoring schedule and the toxicity ladder in order.", answer: "Levels: 0.8–1.2 mmol/L acute, 0.6–0.8 maintenance (12-hour trough); check 5–7 days after dose change, monthly × 3, then quarterly; TSH + creatinine every 6–12 months, calcium yearly, weight each visit. Toxicity ladder: coarse tremor, nausea, diarrhoea, slurring → confusion, ataxia → seizures, coma. Triggers: dehydration, NSAIDs, ACE inhibitors, thiazides, low-salt diets, fevers.", topic: "Pharmacotherapy" },
    { question: "Why is antidepressant monotherapy forbidden in bipolar depression, and which patients are at highest switch risk?", answer: "It can flip the patient into mania/hypomania or accelerate cycling, without treating the underlying episode biology; highest risk: mixed features, rapid cycling, early age of onset, hyperthymic baseline. Treat the low with agents that also guard the high (quetiapine, lithium, lamotrigine, lurasidone).", topic: "Management" },
    { question: "A woman on valproate wants to conceive — your next five moves?", answer: "(1) Pre-conception switch off valproate to a lower-teratogenic strategy (quetiapine or lamotrigine; or lithium with specialised monitoring); (2) folic acid 5 mg; (3) written relapse-prevention plan with the trained family; (4) clarify ECT availability for severe episodes; (5) coordinate with obstetrics for peripartum monitoring and postpartum prophylaxis planning.", topic: "Special situations" },
    { question: "Distinguish borderline mood swings from bipolar episodes using the life-chart logic.", answer: "The two clocks: borderline reactivity runs in HOURS and is interpersonally triggered; bipolar episodes run in DAYS-TO-WEEKS, sustained and untriggered, with euthymic gaps between. Draw the life-chart with the family — the episodic architecture (or its absence) settles it; comorbidity exists and both clocks can run in one person.", topic: "Differential" },
    { question: "What makes lamotrigine titration slow, and what is the feared complication?", answer: "Slow titration (25 mg × 2 weeks → 50 mg → 100–200 mg) protects against Stevens–Johnson syndrome / toxic epidermal necrolysis; rash education in the patient's own language is mandatory, and any rash means stop and reassess.", topic: "Pharmacotherapy" },
    { question: "Write the three early-warning signs you would teach a specific family to watch for.", answer: "Typically: (1) sleep falling below the person's normal with rising morning energy; (2) the phone-calling/contact spurt with pressured speech; (3) the project/spending start — with the standing instruction to call the OPD at day 2, not week 3.", topic: "Management" },
  ],
  faqs: [
    { question: "Am I mad? My relatives say mania means madness.", answer: "No. You have a mood-regulation condition that comes in episodes, like epilepsy comes in seizures. Between episodes most people with bipolar disorder are completely themselves, and with maintenance treatment the episodes can be pushed years apart or stopped altogether." },
    { question: "The doctor says I must take lithium for years though I feel completely fine.", answer: "The paradox is real: the medicine's job is precisely to keep you feeling like this. Stopping when well is like removing the umbrella the moment the rain stops. If you want to try stopping, do it planned and slow, with your doctor, with a relapse drill in place — never abruptly." },
    { question: "Is lithium poison? I read about toxicity.", answer: "Lithium is one of psychiatry's oldest and best-proven medicines, including for preventing suicide. Its window between dose and toxicity is narrower than most drugs, so we monitor blood levels and guard the salt/water balance, especially in Indian summers and stomach infections. Respected, it is safe; ignored, it bites." },
    { question: "Why can't I just take an antidepressant for the low phases?", answer: "In this condition antidepressants alone can flip you into a high or set off frequent cycling; it is the classic mistreatment of bipolar disorder. The lows are treated with medicines that also protect the highs — quetiapine, lithium, lamotrigine — so both ends stay guarded." },
    { question: "Will my children get this?", answer: "The honest numbers: about 5–10% if one parent is affected, higher if both. Most children of patients never develop it. This is a conversation for planning, not panic — and the child who does develop it will have something you never had: a family that recognises day one." },
    { question: "Can I marry? Should I tell the other family?", answer: "Many people with bipolar disorder marry and parent well. Telling at least one senior member of the prospective family, after stabilisation, is the course we recommend; concealment plus stopped medicines is the most common route to a marriage-crisis relapse. We can help you plan that conversation." },
    { question: "The person is better now — can we stop everything before the wedding / auspicious date?", answer: "Stopping medicine for an auspicious date is like cancelling the antibiotics because the fever looks better. If a dose-timing change is needed for rituals, we can adjust schedules; stopping outright multiplies relapse risk in the following months, usually on schedule to ruin the very occasion it was meant to bless." },
    { question: "Is ECT for mania dangerous?", answer: "Modern ECT under anaesthesia is among the safest treatments we have and is sometimes the fastest way out of a severe episode, including in pregnancy. Memory blurring around the course is real and usually clears over weeks." },
    { question: "He becomes very religious during highs. Is it spiritual or illness?", answer: "During mania, deep conviction, mission and divine feelings are common symptoms; genuine spirituality is not the question. Our test is the ledger, not the liturgy: when 'devotion' arrives with no sleep and vanished savings, treat the state first; the person's real beliefs will still be there afterwards." },
    { question: "Will I lose my job / licence because of this diagnosis?", answer: "The condition itself need not be disclosed in most employment contexts, and lakhs of people with bipolar disorder work professionally on maintenance treatment. Safety-critical roles (transport, armed forces, aviation) have their own medical rules — plan those with the treating doctor rather than being ambushed by them." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "NICE CG185 — Bipolar disorder: assessment and management", url: "https://www.nice.org.uk/guidance/cg185" },
      { source: "CANMAT / ISBD — Guidelines for the management of patients with bipolar disorder (2018/2023 update)", url: "https://www.canmat.org/" },
      { source: "DSM-5-TR — Bipolar I/II/cyclothymia architecture (paraphrased; criteria not reproduced) (2022)" },
      { source: "ICD-11 — Bipolar and related disorders grouping (2022 release)", url: "https://icd.who.int/" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.5.2–4.5.8 — source chapters mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — bipolar chapters (2022)" },
      { source: "Stahl's Essential Psychopharmacology, 5th ed. — mood stabilisers and antipsychotics (2021)" },
    ],
    trials: [
      { source: "Cade JF — lithium's discovery (historical framing) (1949)" },
      { source: "BALANCE trial — lithium vs valproate vs combination maintenance (Lancet, 2010)" },
      { source: "STEP-BD / Sachs GS et al. — antidepressant add-on null results in bipolar depression (NEJM, 2007)" },
      { source: "Quetiapine bipolar-depression trials (Calabrese/Young, BOLDER programme); lurasidone (Post et al.); lamotrigine (Calabrese, CAL/GIT programmes)" },
    ],
    reviews: [
      { source: "Geddes JR et al. + Lancet/AJP meta-analyses — maintenance efficacy hierarchy; lithium's recurrence prevention and anti-suicide evidence (Tiihonen / Baldessarini mortality series)" },
      { source: "Post FM et al. — kindling / behavioural sensitisation model of episode recurrence (neuroscience literature series)" },
      { source: "EURAP + Bromley/Christensen — valproate teratogenicity and neurodevelopmental follow-up cohorts; PPP/PvPI restrictions" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "NMHS India 2015–16 + Mental Healthcare Act 2017 + RPwD Act 2016 — Indian context" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language: what bipolar disorder is, treatment basics, safety and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "30 min",
      description: "Foundations, neuroscience, clinical picture, diagnosis and management at UG depth.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "42 min",
      description: "Full course with differentials, lithium running-rules, exam lens, cases and India layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "50 min",
      description: "Everything — full evidence grading, decision path, cases, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The episodic illness, the gates, the numbers.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the duration gates, the I-vs-II logic, and the NMHS Indian numbers with sources." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Broken thermostat, kindling, the clock coupling — graded honestly.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why maintenance continues when the person feels well, and why sleep is both trigger and earliest warning." },
    { number: 3, title: "Clinical Practice", description: "Recognise, screen for hidden hypomania, treat both poles, run lithium safely.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the hypomania screen, recite the lithium running-rules, apply the antidepressant prohibition, and plan a pregnancy switch off valproate." },
    { number: 4, title: "Indian Context", description: "Hidden hypomania, marriage disclosure, lithium in the heat, family as radar.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You know the arranged-marriage three-act tragedy, the summer toxicity windows, and how to brief a family into a day-2 early-warning system." },
    { number: 5, title: "Exam Revision", description: "Exam lens, cases, drug navigation and high-yield.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the duration-gate, lithium and antidepressant-prohibition questions cold, and you know which drug lessons are still missing." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — Bipolar I/II/cyclothymia architecture (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-27" },
    { id: "S2", source: "ICD-11 — Bipolar and related disorders grouping", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-27" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.5.2–4.5.8 — source chapters mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-27" },
    { id: "S4", source: "NICE CG185 — Bipolar disorder: assessment and management", sourceType: "guideline", year: "2014 (updated)", locator: "https://www.nice.org.uk/guidance/cg185", dateReviewed: "2026-09-27" },
    { id: "S5", source: "CANMAT/ISBD — Guidelines for patients with bipolar disorder", sourceType: "guideline", year: "2018/2023", locator: "https://www.canmat.org/", dateReviewed: "2026-09-27" },
    { id: "S6", source: "BALANCE trial — lithium vs valproate vs combination maintenance (Lancet)", sourceType: "trial", year: "2010", dateReviewed: "2026-09-27" },
    { id: "S7", source: "Sachs GS et al. — STEP-BD antidepressant add-on null results (NEJM)", sourceType: "trial", year: "2007", dateReviewed: "2026-09-27" },
    { id: "S8", source: "Calabrese JR / Young AH — quetiapine bipolar-depression trials (BOLDER); Calabrese — lamotrigine (CAL/GIT); Post RM — lurasidone", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S9", source: "Geddes JR et al. + Tiihonen / Baldessarini — lithium maintenance efficacy and suicide-mortality reduction meta-analytic series", sourceType: "meta-analysis", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S10", source: "Post FM et al. — kindling / behavioural sensitisation model of episode recurrence", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-27" },
    { id: "S11", source: "EURAP + Bromley/Christensen — valproate teratogenicity and neurodevelopmental cohorts; PPP/PvPI restrictions", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-27" },
    { id: "S12", source: "National Mental Health Survey of India 2015–16 (Gururaj G et al., NIMHANS) — bipolar prevalence ~0.3%, treatment gap ~70%", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-27" },
    { id: "S13", source: "Mental Healthcare Act 2017 + RPwD Act 2016 — Indian rights and disability framework", sourceType: "government", year: "2017/2016", dateReviewed: "2026-09-27" },
    { id: "S14", source: "Cade JF — lithium's discovery (historical framing)", sourceType: "primary", year: "1949", dateReviewed: "2026-09-27" },
  ],
  evidenceMap: [
    { text: "Bipolar I lifetime prevalence ~0.6–1%; bipolar II ~0.4–1%; heritability 70–85% — among the highest in psychiatry.", grade: "established", sources: ["S1", "S3"] },
    { text: "Mean delay from first symptoms to correct diagnosis is 5–10 years; most patients are first mislabelled unipolar-depressive and exposed to antidepressants.", grade: "supported", sources: ["S3", "S5"] },
    { text: "Lithium reduces suicide MORTALITY in bipolar disorder — the only psychiatric drug with replicated evidence at that endpoint.", grade: "established", sources: ["S9"] },
    { text: "Antidepressant monotherapy is contraindicated in bipolar depression; STEP-BD found no benefit of antidepressant add-on over placebo augmentation.", grade: "established", sources: ["S7", "S4", "S5"] },
    { text: "Quetiapine monotherapy (300 mg/day) has the best single-agent evidence in bipolar depression, including bipolar II.", grade: "established", sources: ["S8", "S5"] },
    { text: "Lamotrigine mainly protects the depressive pole; slow titration protects against SJS/TEN rash.", grade: "established", sources: ["S8", "S5"] },
    { text: "Maintenance: lithium, valproate and combination regimens all prevent recurrence; BALANCE found combination and lithium arms superior to valproate monotherapy on key outcomes.", grade: "established", sources: ["S6", "S9"] },
    { text: "Abrupt lithium discontinuation multiplies relapse risk in the following months — taper over weeks to months.", grade: "established", sources: ["S9", "S4"] },
    { text: "Valproate is the strongest teratogen in common psychiatric use (neural tube and neurodevelopmental risks); avoid entirely in women who may conceive.", grade: "established", sources: ["S11", "S5"] },
    { text: "The postpartum period is the strongest single episode trigger in bipolar illness; prophylaxis is planned antenatally.", grade: "established", sources: ["S5", "S4"] },
    { text: "Kindling / behavioural sensitisation — episodes arriving with progressively smaller triggers across an untreated course — is the working model, not a settled mechanism.", grade: "proposed", sources: ["S10"] },
    { text: "Indian prevalence ~0.3% (NMHS 2015–16) with ~70% treatment gap; hidden hypomania and valproate-first prescribing are documented Indian practice patterns.", grade: "established", sources: ["S12"] },
    { text: "Goal-attainment life events precede mania more than losses do; sleep loss is both trigger and earliest warning sign.", grade: "supported", sources: ["S10", "S3"] },
    { text: "MHCA 2017 rights-based care and RPwD 2016 benchmark disability apply to severe persistent bipolar cases in India.", grade: "established", sources: ["S13"] },
  ],
};
