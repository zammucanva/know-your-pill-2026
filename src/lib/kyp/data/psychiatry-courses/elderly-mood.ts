import type { PsychiatryCourse } from "./types";

/**
 * MOOD DISORDERS IN THE ELDERLY — canonical Psychiatry course
 * (migration batch 10, Group M — psychiatry of old age).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/elderly-mood.md — untouched foundation),
 * re-researched against current guidance (the Alexopoulos
 * vascular-depression construct, the Kiloh–Whyte pseudodementia
 * lineage, the Robinson post-stroke-depression evidence, the
 * Shulman late-onset-mania and geriatric-lithium rules, the
 * NICE/APA tiers with the Cochrane and UK ECT Review Group
 * evidence, the NMHS 2015–16 geriatric tier).
 *
 * Drug routes: sertraline, escitalopram and mirtazapine (the
 * first-line SSRI pair and the wasting-insomniac niche) have KYP
 * lessons and are linked; the antipsychotic augmentation and
 * mania-scaffold tier, lithium's geriatric pharmacology,
 * valproate/lamotrigine and ECT itself have no KYP lessons and
 * are recorded in contentGaps, never invented.
 */
export const elderlyMoodCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "elderly-mood",
  title: "Mood Disorders in the Elderly — The Pseudodementia Trap",
  shortName: "Elderly Mood",
  kind: "disorder",
  category: "Psychiatry of Old Age",
  groupLetter: "M",
  groupName: "Psychiatry of old age",
  learningPath: ["Psychiatry", "Psychiatry of Old Age", "Mood Disorders in the Elderly — The Pseudodementia Trap"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "40 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Depression in old age is common, dangerous and chronically under-treated — routinely misread as 'just ageing' through its body-pain and burden-talk costumes — while two geriatric signatures demand special skill: the pseudodementia mask (depression imitating dementia, reversible with treatment) and late-onset mania (often SECONDARY to a stroke, a thyroid storm or a medicine, demanding a workup before a label).",

  summary:
    "This is the illness the family calls 'old age' — and the course's first law is that the elder who stops eating, stops walking, complains of body pains and speaks of 'becoming a burden' is not fading naturally but running a treatable illness. The National Mental Health Survey 2015–16 found depression in roughly one in twelve elderly Indians (higher in urban metros, a treatment gap above 85%), and the default Indian reading — budhapa, kamzori, tension — delays the diagnosis by years. The elderly depressive episode presents through the BODY and through PSYCHOMOTOR change more than through weeping sadness: the somatic costume (the joint and back pains, the burning feet, the 'gas' and weakness complaints that tour three OPDs with normal workups), the slowed or agitated motor state, the 3 a.m. waking, and the guilt-nihilism layer that arrives intact — with 'I am a burden; the family would be free without me' standing as the population's signature suicide-risk sentence (attempts fewer, completions higher than the young; the Elderly Suicide course carries that half). Two geriatric signatures organise the clinical skill. First, the pseudodementia mask: depression FREEZES retrieval while dementia destroys storage — the depressed elder answers 'I don't know' with absent effort and keeps the date through the news, while the dementing elder confabulates a near-miss with genuine effort — and because many elders carry both layers, the differentiation is finally made by the TREATMENT TRIAL: treat the depression properly, then re-test; what recovers was depression, what remains is dementia's true floor. Second, the vascular-depression story: the first depression of a 70-year-old often rides on lacunes and white-matter hyperintensities disrupting frontostriatal mood circuitry, arriving with executive dysfunction, apathy and a weaker response to SSRI monotherapy — so the mood treatment includes the blood pressure, the sugars and the vessels. The treatment laws are geriatric throughout: antidepressants work well in elders but 'Start LOW, go SLOW, but GO' (the eternal starter dose is the Indian sin that 'confirms' treatment failure), the HY-FIB watch-list governs every prescription (HYponatraemia, Falls, Interactions, Bleeding with NSAIDs), the response clock runs 8–12 weeks, ECT is often the best medicine this population has for the melancholic, psychotic and food-refusing band, and the first mania after 50 is a brain workup — M-T-M-S-D: MRI, Thyroid, Medications, Stroke-history, Delirium-screen — before it is ever a bipolar label. The Indian layer is structural: the migration-empty-nest aetiology, the physician-OPD intercept through pain complaints, the property-catastrophe prevented by the treatment-trial re-test, and the film-era ECT stigma that withholds the safest fast option from exactly the patients who need it most.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recognise elderly depression through its costumes — the somatic front door, the psychomotor signs, the burden-talk, the apathy misread as 'lazy old age' — and name the one collateral question that converts the soma into the syndrome.",
    "Differentiate depressive pseudodementia from true dementia at the bedside through the ten-clue set, and state the rule that the differentiation is finally made by TREATMENT RESPONSE.",
    "Explain the vascular-depression story (why late-life depression clusters with strokes and white-matter disease) and the loss-stack story (why it clusters with bereavement, relocation and role-loss).",
    "Screen every elderly depression for suicide risk (the elderly lethality pattern: attempts fewer, completions higher) and for the cognitive, medical, medication and sensory co-riders.",
    "Prescribe antidepressants in elders with the geriatric discipline: SSRI first (sertraline/escitalopram), the HY-FIB watch-list, mirtazapine's niche, TCA avoidance, the full-eventual-dose law, the 8–12-week clock and the longer maintenance.",
    "Position ECT without film-era fear in the melancholic, psychotic, food-refusing and medication-intolerant elderly.",
    "Work up late-onset mania as SECONDARY until proven otherwise (stroke, thyroid, dopaminergic drugs, steroids, dementia, delirium) and manage elderly bipolar with lithium's geriatric rules.",
    "Handle Indian realities: the migration-empty-nest elder, the 'budhapa' dismissal, the pain-complaint route through physicians, the joint family's protective-and-pressuring double edge.",
  ],
  quickFacts: [
    { label: "The prevalence", value: "One in twelve Indian elders", detail: "NMHS 2015–16: geriatric depression ~8–9%, higher in urban metros (nearly one in five in the urban-elderly band — the city's elder lonelier than the village's), treatment gap above 85%; community-dwelling major depression globally 2–5%, rising to a fifth or more among the medically ill and institutionalised" },
    { label: "The mask", value: "Pseudodementia", detail: "Depression wearing dementia's costume — the retrieval-freeze (memories filed, the drawer jammed: 'I don't know' with the shrug) against the storage failure (the confabulated near-miss with genuine effort); the final judge is the treatment-trial re-test" },
    { label: "The subtype", value: "Vascular depression", detail: "The first depression of the late 60s and 70s riding on lacunes and white-matter hyperintensities: executive dysfunction and apathy prominent, guilt-psychology sparse, SSRI-alone response weaker — augmentation and exercise the demanded moves, the vessels part of the mood treatment" },
    { label: "The dose law", value: "Start LOW, go SLOW, but GO", detail: "Sertraline 25–50 mg to start, titrated weekly to the FULL effective dose; the geriatric sin is not starting — it is staying at the starter dose forever; the clock runs 8–12 weeks for full response, against the younger adult's 4–6" },
    { label: "The watch-list", value: "HY-FIB", detail: "HYponatraemia (SSRI-induced SIADH — sodium checked within the first month, more so with diuretics), Falls (sedation and orthostasis), Interactions (the polypharmacy ledger), Bleeding with NSAIDs (the arthritis co-prescription)" },
    { label: "The modality", value: "ECT", detail: "Fast, effective and SAFE in elders for the melancholic-psychotic band, the food-and-fluid-refusing wasting elder, the drug-intolerant and the severe suicidal states — the frail-body advantage of no drug-interaction ledger; film-era fear the barrier, not the evidence" },
    { label: "The mania rule", value: "M-T-M-S-D", detail: "A first manic episode after 50–60 is a medical workup before a psychiatric label: MRI, Thyroid, Medications (levodopa, steroids, stimulant-adjacent remedies), Stroke-history, Delirium-screen" },
    { label: "The sentence that is a screen", value: "'I am a burden'", detail: "Burden-talk — 'the family would be free without me', 'better if God took me' — is the elderly suicide-risk flag: this population attempts less and dies more; every such sentence earns the direct questions, the medicines-secured audit and the same-week assessment" },
  ],
  knowledgeGraph: [
    { label: "Suicide in the Elderly — The Physician's Opportunity", type: "condition", href: "/psychiatry/elderly-suicide/", note: "The darker half of this course — the lethality pattern (attempts fewer, completions higher), the burden-sentence screen, the stockpiling and affairs-in-order flags" },
    { label: "Delirium in the Elderly — The Quiet Emergency", type: "condition", href: "/psychiatry/elderly-delirium/", note: "The hypoactive mimic — the days-onset inattention picture that hides inside apparent 'dementia' and inside agitated depression" },
    { label: "Mild Cognitive Impairment — The Crossroads", type: "condition", href: "/psychiatry/mci/", note: "The follow-up map for the recovered pseudodementia — the serial-cognition discipline, the retained-roles scaffolding principle this course borrows" },
    { label: "Late-Life Psychosis — The Ridden-Upon Illness", type: "condition", href: "/psychiatry/late-life-psychosis/", note: "The antipsychotic-augmentation cautions (the metabolic-mortality warnings) and the nomenclature for psychotic depression's guilt-delusions in the old" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The genuine-bipolar home — where the late-onset workup lands when every secondary cause has been cleared, and the sleep-drop alarm's original discipline" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "The wave-pattern differential — the spouse of 50 years lost, and the rule that major depression within weeks of a death is often both" },
    { label: "Benzodiazepine Misuse — The Borrowed Calm", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The benzodiazepine decade — the night sedative that manufactures the very fog, falls and memory complaints this course unpicks, and the taper bridge" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The first-line SSRI tier's target — and the system whose elder-specific harms (the month-one sodium, the bleeding risk) the watch-list polices" },
    { label: "Frontostriatal circuitry", type: "brain-region", href: "#brain", note: "The mood circuits that run through the brain's watershed territory — where the small-vessel disease of the vascular-depression engine strikes first" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The first-line SSRI in elders — started at 25–50 mg and taken to the full effective dose, never parked at the starter dose" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the mood disorders of old age. The watershed engine (the vascular-depression story): the mood circuits run through frontostriatal territory — the brain's watershed zones, where small-vessel disease strikes first — and hypertension and diabetes quietly degrade the white-matter highways until the mood system's connectivity thins. The first depression of a 70-year-old therefore arrives with a signature: executive slowing, apathy, less guilt-psychology, more braking-failure, and a tougher response to antidepressants ALONE — the trials' lesson being to add the augmentation, add the exercise, and treat the vessels as part of the mood treatment. The retrieval-freeze (the pseudodementia story): depression freezes RETRIEVAL while dementia destroys STORAGE — the depressed elder files the memories intact but cannot open the drawer, so the memory questions are answered 'I don't know' and 'I can't remember' with EFFORT absent (the shrug), while the dementing elder confabulates the wrong answer with genuine effort. The giveaway behaviours: the depressed elder keeps the date through the news and forgets the breakfast they didn't eat; the dementing elder eats the breakfast and forgets the year. And the critical clinical law: many elders have BOTH layers (the depression riding on early dementia), so the differential is finally made by the TREATMENT TRIAL — treat the depression properly, then re-test cognition; what recovers was depression, what remains is dementia's true floor. The loss-stack physics: late-life mood is a load-bearing calculation — each loss (spouse, role, home, friend, function) removes a strut, and the structure still stands until one more; the Indian elder's particular vulnerability is that the struts were built INTO the family structure (identity-as-provider, kitchen-authority, ritual-role) and modernisation removes them all in one decade. The pills lift the mood's floor; the struts carry the load — the non-drug half of every plan is strut-REBUILDING.",
    steps: [
      "The watershed engine: hypertension and diabetes degrade the white-matter highways of frontostriatal mood circuitry — the brain's watershed zones — and the mood system's connectivity thins.",
      "The vascular signature declares: the first depression of a 70-year-old arrives with executive slowing, apathy, sparse guilt-psychology and braking-failure — and a weaker response to SSRI monotherapy.",
      "The engine's treatment lesson: augmentation and exercise added, the blood pressure and the sugars treated as mood treatment — the elder's first depression a cardiology-and-neurology consultation as much as a psychiatric one.",
      "The retrieval-freeze: depression jams the drawer while the files stay intact — 'I don't know' with absent effort, date-through-news preserved, cueing improving recognition; the dementing brain loses the storage itself — near-miss confabulation with genuine effort.",
      "The both-layers law: depression frequently rides on early dementia — the treatment trial is the final judge, the dated re-test separating what recovers from what remains as the true floor.",
      "The loss-stack physics: each loss removes a strut; the Indian elder's struts were built into the family structure, and the migration, the daughter-in-law's kitchen and society's ageism remove them in one decade — strut-rebuilding is the non-drug half of the treatment.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "frontostriatal-circuitry", name: "Frontostriatal mood circuitry", role: "The mood highways running through the brain's watershed territory — where small-vessel disease strikes first; the disconnection here is the vascular-depression engine's address.", grade: "supported" },
    { id: "prefrontal-executive-tier", name: "Prefrontal executive tier", role: "The braking-and-planning machinery whose dysfunction dominates the vascular-depression signature — executive slowing, apathy, poor inhibition — and whose testing (not memory testing alone) maps the subtype.", grade: "supported" },
    { id: "deep-white-matter", name: "Deep white matter (the watershed zones)", role: "The lacunes and white-matter hyperintensities on MRI that carry the vascular-depression construct — the visible freight of decades of hypertension and diabetes under a first late-life episode.", grade: "supported" },
    { id: "right-orbitofrontal-territory", name: "Right-hemisphere orbitofrontal territory", role: "The stroke address of secondary mania — right-hemisphere and orbitofrontal-adjacent infarcts standing among the classic secondary causes of a first manic presentation in an elder.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The first-line tier's target — the SSRI (sertraline/escitalopram) the best evidence-tolerability balance in elders, with the system's elder-specific harms (SIADH hyponatraemia, platelet-mediated bleeding with NSAIDs) policed by the watch-list.", grade: "established", drugConnection: "Sertraline and escitalopram (the first-line pair) have KYP lessons; the HY-FIB discipline rides every prescription." },
    { name: "Dopamine", symbol: "DA", role: "The mania engine of the secondary causes — dopaminergic medications (levodopa, the agonists) and stimulant-adjacent remedies triggering late-onset manic pictures; the target of the geriatric-dose antipsychotic scaffold used while the causes are treated.", grade: "supported" },
    { name: "Acetylcholine", symbol: "ACh", role: "The anticholinergic fog of the TCA ledger and the bladder tablets — the load that worsens confusion and memory complaints in exactly the population being assessed for them; the reason the drug list is audited with anticholinergic and sedative counts.", grade: "supported" },
    { name: "GABA", symbol: "GABA", role: "The benzodiazepine decade's system — the night sedative that manufactures daytime fog, night-falls and dementia-imitating memory complaints while treating the symptom of the very illness that needs treating.", grade: "supported" },
  ],
  pathways: [
    {
      id: "watershed-pathway",
      name: "The watershed engine (vessels to vascular depression)",
      steps: [
        { label: "The vessels degrade", detail: "Hypertension and diabetes quietly injure the small vessels of the watershed zones" },
        { label: "The highways thin", detail: "Lacunes and white-matter hyperintensities disconnect frontostriatal mood circuitry" },
        { label: "The signature declares", detail: "Executive slowing, apathy, sparse guilt-psychology, braking-failure — the first depression of a 70-year-old" },
        { label: "The response pattern", detail: "SSRI-alone underperforms; augmentation, exercise and vessel-care demanded — the BP, the sugars and the mood on one prescription pad" },
      ],
      clinicalManifestation: "The 74-year-old hypertensive diabetic whose first-ever depression arrived with apathy and poor planning rather than weeping — and whose MRI shows the white-matter freight.",
      grade: "supported",
    },
    {
      id: "retrieval-freeze-pathway",
      name: "The retrieval-freeze (depression to apparent dementia)",
      steps: [
        { label: "The depression settles", detail: "The depressive episode with its psychomotor slowing and effort-withdrawal — often after a datable loss" },
        { label: "The drawer jams", detail: "Retrieval freezes while storage stays intact: the memory questions answered 'I don't know', effort absent, the shrug at the clock" },
        { label: "The family reads dementia", detail: "Weeks-to-months of 'memory loss', the stopped activities, the physician's note — the property conversations beginning" },
        { label: "The treatment trial runs", detail: "The depression treated to the full effective dose; the dated re-test at 3–6 months post-remission separates the layers" },
      ],
      clinicalManifestation: "The 'demented' elder whose MoCA rises seven points once the mood is treated — the family's wrongly-prepared property work undone by eight weeks of sertraline.",
      grade: "supported",
    },
    {
      id: "secondary-mania-pathway",
      name: "The secondary-mania engine (first mania after 50)",
      steps: [
        { label: "The engine assembles", detail: "A right-hemisphere orbitofrontal infarct, a thyrotoxicosis, a steroid course, a dopaminergic medication — or several stacked in one patient" },
        { label: "The picture excites", detail: "Elation or irritability, two-to-three-hour sleep, pressured speech, spending sprees, disinhibition, grandiosity — no psychiatric history" },
        { label: "The workup precedes the label", detail: "M-T-M-S-D: MRI, Thyroid, Medications, Stroke-history, Delirium-screen — before any bipolar diagnosis or lithium" },
        { label: "The causes are treated", detail: "The smallest psychiatric scaffold (geriatric-dose antipsychotic, tapered as the engines clear); the secondary label resolved with its causes" },
      ],
      clinicalManifestation: "The 66-year-old businessman with three weeks of two-hour nights and a 'complete' factory plan — whose MRI, TSH and drug list find three engines under one manic picture.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "loss-stack-years", time: "The years before", title: "The loss-stack assembles", description: "Bereavement, retirement, relocation, the friend-cohort's attrition; the children's migration hollowing the household into two-person and one-person arrangements — each loss removing a strut while the structure still stands.", phase: "onset" },
    { id: "costume-months", time: "The presenting months", title: "The costume and the mask", description: "The body-pain and 'weakness' complaints touring the physicians; the stopped cooking, temple and walk; the 3 a.m. stare; the burden-sentences; or the apparent 'memory loss' with its don't-know answers — read as budhapa for an average of years before anyone asks the mood questions.", phase: "peak" },
    { id: "treatment-clock", time: "Weeks 1–12 of treatment", title: "The longer clock", description: "Start low (sertraline 25–50 mg), titrate weekly to the full effective dose; the month-one sodium check; the falls and bleeding counsel; the HY-FIB review at each step — full response expected at 8–12 weeks, not the younger adult's 4–6; ECT for the severe, food-refusing band acting faster than any tablet.", phase: "duration" },
    { id: "the-retest", time: "Months 3–6 post-remission", title: "The re-test and the true floor", description: "The dated cognitive re-test: what recovers was depression, what remains is dementia's floor — the family counselled on both numbers, the recovered pseudodementia kept on the follow-up map.", phase: "recovery" },
    { id: "maintenance-horizon", time: "The years after", title: "The maintenance horizon", description: "First episode treated to full remission then 12+ months; second-or-more episodes (most elderly depressions are recurrent by the time they reach us) 2–3 years or indefinite — the taper always gradual, never abrupt, the decision dated and review-based.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Major depression in community-dwelling elderly runs roughly 2–5%, rising steeply among the medically ill, hospitalised and institutionalised (where rates reach a fifth or more); subsyndromal depression is several-fold higher — the mixed zone of 'not quite criteria, quite impaired'. The course is longer and more relapsing than young-adult depression; the suicide risk is higher in lethality (attempts fewer, completions more). Sex: women treated more, men dying more.",
    indianPrevalence: "NMHS 2015–16: geriatric depression ~8–9% — roughly one in twelve elders — higher in urban metros (nearly one in five in the urban-elderly band of the survey's reporting, a counter-intuitive finding against the modernisation narrative: the Indian city's elder lonelier than the village's), with a treatment gap above 85%. The structural drivers: the migration-empty-nest pattern, the joint family's slow dissolution into 'near but not with' arrangements, economic dependency, the chronic-pain and multimorbidity freight, and the grief stacks the long-lived accumulate.",
    lifetimeRisk: "Most elderly depressions are recurrent by the time they reach the clinic — the maintenance question is the rule, not the exception; late-life depression also raises later dementia risk (the association real, the practical translation being treatment plus cognitive monitoring).",
    genderRatio: "Women are treated more; men die more — the widowed Indian male (the man whose household-knowledge was outsourced to his wife for 50 years) is the least-supported, fastest-declining cohort.",
    ageOfOnset: "Recurrent illness grown old, or the first episode of the late 60s–70s — the latter carrying the vascular-depression signature (deep white-matter hyperintensities, executive dysfunction, weaker antidepressant response-alone). Late-onset mania is defined by a first episode after 50–60.",
    indianNotes: "The presentation routes: the physician's OPD via pain and 'weakness' complaints (the depression hidden under the presenting symptom), the faith-temple route, and too often only the family's crisis point — the two-question screen plus the collateral 'what has she STOPPED doing?' being the system's single best catch-point.",
  },
  etiology: [
    { category: "biological", factor: "The vascular-depression engine", details: "Lacunes and white-matter hyperintensities disrupting frontostriatal mood circuitry; the stroke-depression comorbidity (post-stroke depression affecting roughly a third of stroke survivors at some point in year one — a two-way street, depression also impairing stroke rehabilitation)." },
    { category: "biological", factor: "The multimorbidity freight", details: "Hypothyroidism, B12/folate deficiency, anaemia, cancer (the pancreatic-depression classic), cardiac failure, Parkinson's, chronic pain (the arthritis-depression loop) — and the medications: steroids, beta-blocker-era discussions, the benzodiazepine decade, dopaminergic drugs." },
    { category: "biological", factor: "Sensory, mobility and neurodegenerative layers", details: "The world shrinking to one room and one channel; late-life depression as a prodrome-or-risk-marker of dementia — treat the depression and monitor cognition rather than reassure blindly." },
    { category: "psychological", factor: "The loss-stack and the burden-schema", details: "Bereavement (the spouse of 50 years), retirement (the identity organ removed), relocation (the familiar lanes lost to the children's city), the phone-book thinning; rigid coping styles meeting irreversible losses; self-worth calibrated to contribution — dependency felt as debt ('eating and doing nothing')." },
    { category: "social", factor: "The Indian structural layer", details: "The migration-empty-nest pattern and the 'visiting elder' identity (the six-month visa parent); status inversion inside the joint family (the patriarch-to-patient, the matriarch-to-guest in the daughter-in-law's kitchen); economic dependency and the pension gap; the stigma-complex reading depression as 'tension' or family shame. The protective structures worth naming: the temple-committee role, the morning-walk group, the grandchildren's homework — retained roles as protective medicine." },
  ],
  symptomClusters: [
    {
      category: "1. The somatic costume (the Indian front door)",
      symptoms: ["Chronic pain complaints — joints, back, 'whole-body pain', burning feet — with the workup repeatedly normal", "'Weakness' as the presenting word, multiple 'gas/indigestion' visits, constipation-era complaints", "Appetite loss with weight decline (the 7 kg of the classic presentation)", "Sleep inversion: the 3 a.m. stare, the lost afternoon-nap structure, the day-night drift"],
    },
    {
      category: "2. The psychomotor signs",
      symptoms: ["The slowed elder: the long pauses, the sighing, the stoop, the stopped cooking", "The agitated elder: the wringing of hands, the pacing, the 'can't sit' restlessness — the geriatric agitated depression that mimics anxiety"],
    },
    {
      category: "3. The mood-cognition layer",
      symptoms: ["The burden-talk: 'I am a burden', 'the family spends on my medicines for nothing', 'better if God took me' — every such sentence a suicide-screen trigger in this population", "Guilt and nihilism intact with age: 'I ruined my sons' lives', the religious-guilt layer in the devout", "Apathy and anhedonia-by-attrition: the stopped visits, the abandoned morning walk, the temple stopped — misread as 'lazy old age' for months", "Cognitive complaints — the pseudodementia presentation: 'my memory is gone' with the don't-know answers", "Psychotic features in the severe band: nihilistic and guilt content ('my insides have rotted'), hypochondriacal delusions", "The mask-of-smiles: many elders, schooled in not complaining, present cheerful at interview — the informant report is the examination"],
    },
    {
      category: "4. The bipolar side (the late-onset presentations)",
      symptoms: ["Late-onset mania (first episode after 50–60): elation or irritability, decreased sleep, pressured speech, disinhibition, grandiosity — the classic SECONDARY-suspicion territory", "Elderly bipolar I grown old: recurrent episodes with the mania softening and the depressive poles dominating late life; mixed-agitated states; the long-maintenance question", "The rapid-signal flag: any first manic presentation in an elder is an MRI-plus-TSH-plus-medication-audit-plus-cognitive-assessment event before it is a psychiatric label"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR (paraphrased)",
      code: "The episode logic, geriatric-weighted",
      criteria: [
        "The same episode criteria as adults — 2 weeks of 5+ symptoms with mood or anhedonia inclusive — read with the geriatric weighting: anhedonia, guilt, psychomotor change and early waking carry more weight than appetite and sleep complaints alone, because the somatic symptoms overlap with medical illness.",
        "Persistent depressive disorder where the picture has run ≥2 years.",
        "The bereavement-adjacent discipline: major depression within weeks of a spouse's death is not 'just grief' — often both (the Bereavement course's rules).",
        "Persistent, treatment-resistant or first-episode-after-60 depressions: consider the vascular-depression subtype's signature — executive dysfunction, apathy, the MRI's white-matter burden.",
      ],
      duration: "2 weeks (episode); ≥2 years (persistent depressive disorder); 8–12 weeks for the full treatment response to declare itself.",
      indianNote: "The collateral interview IS the examination in this population: the co-resident child, the cook, the neighbour — the stopped-activities list more diagnostic than the elder's brave smile.",
    },
    {
      system: "The assessment structure",
      code: "Eight moves, in order",
      criteria: [
        "The collateral interview (the stopped-activities list is the diagnostic core).",
        "The suicide screen: the burden-sentences, passive wishes, the stockpiling of medicines, the 'affairs-in-order' behaviour.",
        "The cognitive screen (MoCA-tier) with the ten-clue pseudodementia differentiation — and the serial-cognition discipline: re-test after mood treatment.",
        "The medical and medication audit: TSH, B12, CBC, glucose, renal; the cancer index-of-suspicion where the picture fits (the weight-loss audit); the pain assessment; the full drug list with anticholinergic and sedative counts; alcohol (the quiet-elder-drinker under-recognition).",
        "The sensory-mobility audit: hearing, vision, the fall history — depression's motor cost and the treatment's falls-risk input in one.",
        "The loss-stack map: recent bereavements, relocations, the migration-children map, roles lost and roles remaining.",
        "The bipolar-side workup for late-onset mania: M-T-M-S-D — MRI (the stroke and frontotemporal hunt), TSH, the medication timeline (levodopa, agonists, steroids, stimulant-adjacent remedies), the stroke history, the delirium screen — plus the family psychiatric history (the genuine-bipolar marker).",
        "Rating scales, named only: GDS (the yes/no geriatric self-report), PHQ-9, CSDD for the dementia-overlap cases.",
      ],
      duration: "The assessment is one good collateral interview plus one audit panel — the district-lab tier running TSH/B12/Na at roughly ₹500–1,000 (approx 2026).",
      indianNote: "The two-question screen plus the collateral 'what has she STOPPED doing?' converts the soma into the syndrome at the physician's OPD — the system's single best catch-point before the crisis-point presentation.",
    },
  ],
  severityScales: [
    { name: "GDS", fullName: "Geriatric Depression Scale", measures: "The geriatric self-report built for elders — the yes/no format designed for the population's tolerance; used with the informant report, never instead of it.", ranges: [], indianNote: "The yes/no format suits the Indian OPD's time; the daughter-in-law's stopped-activities list remains the more diagnostic instrument." },
    { name: "PHQ-9", fullName: "Patient Health Questionnaire-9", measures: "The standard episode screen — with the geriatric reading that somatic items overlap medical illness and the anhedonia-guilt-psychomotor-early-waking items carry the weight.", ranges: [], indianNote: "The screen that flagged the severe band in the course's own case; the physician-OPD intercept's instrument." },
    { name: "CSDD", fullName: "Cornell Scale for Depression in Dementia", measures: "The dementia-overlap instrument — for the elder whose depression rides on established cognitive impairment, where self-report alone fails.", ranges: [], indianNote: "The scale for the both-layers patient — the depression on early dementia that the treatment-trial re-test will later quantify." },
  ],
  differentialDiagnosis: [
    { condition: "True dementia (the storage failure)", distinguishingFeatures: "Insidious onset over years; near-miss confabulation offered with genuine effort; little spontaneous complaint (the FAMILY complains); orientation lost early; cueing fails; performance consistently poor; ability genuinely lost; affect shallow or labile.", keyDifferentiator: "The treatment-trial re-test: treat the depression properly and re-test cognition — what recovers was depression, what remains is dementia's true floor; many elders carry both layers." },
    { condition: "Normal grief", distinguishingFeatures: "The wave-pattern — moments of sharp pain breaking on a sea of preserved function, the deceased actively mourned rather than the self-nihilistically abandoned.", keyDifferentiator: "The Bereavement course's rules; major depression within weeks of a spouse's death is usually both, and treatable depression does not honour the grief's privacy." },
    { condition: "Hypoactive delirium", distinguishingFeatures: "Days-scale onset, inattention primary, the fluctuating course — the quiet mimic hiding inside apparent 'dementia' and inside the withdrawn elder.", keyDifferentiator: "The onset tempo and the attention examination (the Delirium in the Elderly course's screen); the confused-withdrawn elder is a delirium until examined otherwise." },
    { condition: "Hypothyroidism and B12 deficiency states", distinguishingFeatures: "The fatigue-slowing-cognitive fog triad that mimics the depressive episode — the audit findings that reverse with replacement.", keyDifferentiator: "TSH and B12 on every first-episode workup — the ₹500–1,000 district-lab panel that replaces months of therapeutic limbo." },
    { condition: "Medication sedation and the anticholinergic load", distinguishingFeatures: "The benzodiazepine decade, the bladder tablets, the sedative stacks — daytime fog, night-falls and memory complaints imitating both dementia and refractory depression.", keyDifferentiator: "The full drug list with anticholinergic and sedative counts; the bridge-and-taper while the real medicine takes over." },
    { condition: "The apathy of early dementia", distinguishingFeatures: "Apathy WITHOUT dysphoria — the disengagement without the guilt, the tears or the burden-talk; both can co-ride in one elder.", keyDifferentiator: "The mood architecture: dysphoria and guilt-laden content point to depression; flat disengagement with preserved contentment points to the dementia's apathy — and the treatment trial clarifies the mixture." },
    { condition: "Parkinson's disease depression", distinguishingFeatures: "Depression in roughly half of Parkinson's patients, chronically under-treated — the motor and the mood disease sharing the circuitry.", keyDifferentiator: "The neurological examination and the levodopa-and-agonists history (which doubles as the secondary-mania audit)." },
    { condition: "Post-stroke depression", distinguishingFeatures: "The timeline locked to the event — the mood collapse in the weeks after a stroke, impairing the rehabilitation it should be powering.", keyDifferentiator: "The dated stroke event and the roughly-one-third year-one prevalence making every stroke survivor a screen candidate; the treatment running WITH the rehabilitation, not after it." },
  ],
  management: [
    { category: "pharmacotherapy", name: "Treat the co-riders first", description: "Hypothyroid and B12 states replaced; the pain managed properly (the undertreated arthritis-pain depression); the anticholinergic-sedative load deprescribed — the benzodiazepine decade's taper bridged while the real medicine takes over; the sensory channels aided (hearing aids as mood treatment); the medical illnesses optimised, the mood added to the same follow-up visits the family already runs.", whenToUse: "Before or alongside every antidepressant decision — the co-riders are the treatment's first floor.", indianContext: "The cardiac-and-diabetic clinics already in the family's routine — the mood review bolted onto the same visits costs the family nothing extra." },
    { category: "pharmacotherapy", name: "SSRIs first-line — the geriatric dose law", description: "Sertraline and escitalopram carry the best geriatric evidence-tolerability balance (citalopram's QT-dose ceiling remembered). Start low (sertraline 25–50 mg) but titrate to the FULL effective dose over weeks — 'Start LOW, go SLOW, but GO': the geriatric sin is not starting; it is STAYING at the starter dose. Expect the longer clock: 8–12 weeks for full response in elders against the younger adult's 4–6. The watch-list at every step: HY-FIB — HYponatraemia (SSRI-induced SIADH; sodium within the first month, more so with diuretics; the confusion-lethargy presentation), Falls (sedation, orthostasis, the evening-dose choices, the get-up-slowly counsel), Interactions (the polypharmacy ledger), Bleeding with NSAIDs (the arthritis co-prescription counselled, PPI where both must run) — plus QT where applicable, serotonin syndrome in the polypharmacy, and the first-two-weeks activation watch. Duration: first episode treated to full remission then 12+ months; second-or-more episodes (the elderly rule) 2–3 years or indefinite; the taper never abrupt.", whenToUse: "Every non-vascular-signature elderly depressive episode once the co-riders are handled and the suicide risk is assessed.", indianContext: "Sertraline ₹50–150/month, escitalopram ₹60–200 (approx 2026); the hyponatraemia check ₹100–200 at district labs, built into the month-one review; the recurring Indian failure is the eternal starter dose — '25 mg for six months, no improvement, told antidepressants don't work in old people'." },
    { category: "pharmacotherapy", name: "Mirtazapine for the wasting, sleepless elder", description: "The appetite-lost, insomniac, wasting elder's niche — the appetite-restoring, sleep-restoring atypical whose early sedation is used deliberately at night for the first two weeks; the weight gain that would be a side effect elsewhere is the therapeutic point here.", whenToUse: "Where the depression presents through appetite loss, weight decline and insomnia — the Indian somatic costume's pharmacological answer.", indianContext: "Mirtazapine ₹80–250/month (approx 2026); the morning-grogginess-and-falls counsel riding the prescription." },
    { category: "pharmacotherapy", name: "The vascular-depression augmentation tier", description: "The trials' lesson: SSRI-alone underperforms in the vascular signature. Add bupropion (the activation-fit where no seizure or cardiac contraindication), atypical-antipsychotic augmentation (aripiprazole at low dose, the metabolic-mortality cautions of the Late-Life Psychosis course applying), lithium's geriatric version — and above all the NON-DRUG move: the exercise prescription, the strongest single geriatric-augmentation evidence, the walk-group written like a prescription. The BP, the sugars and the vessels are part of the mood treatment.", whenToUse: "Executive-dysfunction-predominant, apathetic, first-episode-after-60 pictures; treatment-resistant depressions with the white-matter burden on imaging.", indianContext: "The walk-group and temple-role prescriptions cost nothing — the augmentation tier that Indian families can actually fill." },
    { category: "brain-stimulation", name: "ECT — the geriatric best-kept secret", description: "For the melancholic-psychotic band, the food-and-fluid-refusing wasting elder, the intolerant-to-drugs picture and the severe suicidal states: ECT in elders is fast, effective and SAFE (the modern-modality evidence; the cognitive side-effects largely transient and monitored; the frail-body advantage of no drug-interaction ledger). The Indian film-era fear is the barrier to the best medicine this population has — the consent-and-family-education work is the treatment's first session.", whenToUse: "Severe melancholic or psychotic depression; food and fluid refusal with wasting; medication intolerance in the polypharmacy patient; severe suicidal states needing speed.", indianContext: "The ECT course at government hospitals at ₹100–500/session-era pricing at the public tier, private ₹2,000–5,000 (approx 2026) — the modality whose under-use most costs Indian elders." },
    { category: "psychotherapy", name: "The under-used talking tier", description: "Problem-solving therapy (the best geriatric-adapted evidence: short, structured, concrete — the bills, the stairs, the loneliness each becoming problems with steps); behavioural activation (the scheduled pleasant-events work for the anhedonia); brief dynamic work for the loss-stack's meaning-layer; reminiscence and life-review therapy — the geriatric-specific modality with real evidence, the structured telling of the life story to a listener, landing beautifully in the Indian adaptation: the family-sanctioned 'telling the grandchildren' formats.", whenToUse: "Every plan — combined with pharmacotherapy in the moderate-to-severe band, alone-or-leading in the milder.", indianContext: "Therapist scarcity met with the physician-plus-family-delivered versions: the activation-scheduling taught to the daughter-in-law, the walk-group prescribed to the neighbour cohort." },
    { category: "lifestyle", name: "The strut-rebuilding programme", description: "The non-drug half of every plan: role-restoration (the temple-committee accounts, the grandchildren-homework supervisorship, the building-association duty — RETAINED roles, not token roles); the re-connection architecture (the morning-walk group, the senior association, the phone-tree of the surviving cohort); the environment's engagement engineering (the plants, the cooking-supervision-not-substitution); and the migration-children protocol — the fixed, scheduled, predictable, role-bearing video rituals ('Sunday you check Sagar's homework on the call').", whenToUse: "From the first consultation, alongside the pills — the pills lift the mood's floor; the struts carry the load.", indianContext: "The two temple-cohort women assigned the daily-collection duty — behavioural activation with social enforcement, the Indian version that outperforms any leaflet." },
    { category: "pharmacotherapy", name: "Late-onset mania: the workup-first discipline", description: "The MRI-TSH-medication audit BEFORE the bipolar label (M-T-M-S-D); the secondary causes treated — the stroke-rehab team engaged, the levodopa negotiated with neurology, the steroid wound down with the prescribing specialty — and only then the genuine-late-bipolar treatment: atypical antipsychotics at geriatric doses (the Late-Life Psychosis course's cautions), lithium's geriatric rules (start ~150–300 mg, levels at the lower therapeutic band ~0.4–0.7 in elders, the renal check always — GFR has fallen by decades; NSAIDs and ACE-inhibitors RAISE lithium levels, the arthritis-painkiller-plus-lithium emergency; the thirst-urination-confusion toxicity triad taught to the family), valproate's elder-niches with the tremor-interaction caution, lamotrigine's elderly rash-window, and the maintenance's longer horizon.", whenToUse: "Every first manic presentation after 50 — the workup IS the first treatment.", indianContext: "The family taught the sleep-drop alarm — 'when his sleep falls below 5 hours for two nights, call us' — the early-warning instrument that survives every aetiology." },
  ],
  safety: {
    redFlags: [
      "The burden-sentence — 'I am a burden', 'the family would be free without me', 'better if God took me' — is a suicide-screen trigger, not philosophy: the elderly attempt less and die more; assess the same week, with the direct questions, the medicines-secured audit and the plan made with the family.",
      "Stockpiling of medicines or the 'affairs-in-order' behaviour — the elderly suicide plan's quiet preliminaries; the same-week assessment, not the next routine visit.",
      "The food-and-fluid-refusing, wasting elder with psychotic guilt — the ECT-tier emergency; waiting for an oral antidepressant's 8–12-week clock is the wrong clock here.",
      "New confusion or lethargy in the first SSRI month — hyponatraemia (SIADH), more so with diuretics: the week-six confusion read as 'dementia worsening' is the classic miss; check the sodium.",
      "The arthritis patient on both an NSAID and an SSRI (GI bleeding) — and on both an NSAID and lithium (toxicity): the same painkiller, two emergencies, one drug list to audit.",
      "The first manic presentation in an elder — the M-T-M-S-D workup before any label or lithium; and the taught alarm — sleep below 5 hours for two nights is the call-us signal.",
    ],
    urgentGuidance:
      "The order of operations: (1) the burden-sentence or the stockpiling behaviour earns the direct suicide assessment the same week — the questions asked plainly, the medicines secured, the family contracted; (2) the food-and-fluid-refusing wasting elder moves to the ECT conversation now — the fastest-effective-safest tier this population has, with the consent-and-family-education work as the first session; (3) any new confusion on a new SSRI gets a sodium level — the month-one check catching the SIADH before it is misread as dementia; (4) the NSAID interactions audited at every visit in the arthritis population (the bleeding risk with SSRIs, the lithium-level rise); (5) the first mania after 50 gets its MRI, TSH, medication timeline, stroke history and delirium screen BEFORE the psychiatric label; (6) every treated pseudodementia booked for the dated 3–6-month cognitive re-test — the instrument that separates the treatable from the fixed, before the lawyer is called.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "First-line SSRI for geriatric depression",
      rationale: "The best geriatric evidence-tolerability balance of the SSRI tier: started at 25–50 mg and titrated weekly to the full effective dose (100 mg in this course's own case), with the month-one sodium check, the falls counsel and the bleeding audit riding every prescription — approx ₹50–150/month (2026), the reason the eternal-starter-dose failure has no cost excuse.",
      evidenceLevel: "guideline",
      clinicalDisclaimer: "The dose law governs: the geriatric sin is not starting but staying at the starter dose — titrate to the full effective dose over weeks against the 8–12-week clock, with the HY-FIB review at each step.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "First-line SSRI alongside sertraline (the twin balance choice)",
      rationale: "The other half of the first-line pair — the same evidence-tolerability balance with the citalopram QT-dose ceiling of the racemic parent remembered in the choice; approx ₹60–200/month (approx 2026) keeps it a live option at the district tier.",
      evidenceLevel: "guideline",
      clinicalDisclaimer: "The same HY-FIB watch-list rides the prescription — the month-one sodium check, the falls counsel and the NSAID-bleeding audit are SSRI-class disciplines, not molecule-specific ones.",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      role: "The appetite-lost, insomniac, wasting elder's niche",
      rationale: "The appetite-restoring, sleep-restoring atypical whose early night sedation is used deliberately for the first two weeks — the weight gain that is a liability elsewhere is the therapeutic point in the wasting elder; approx ₹80–250/month (approx 2026).",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "The morning grogginess and the falls watch ride the prescription — and the strut-rebuilding programme runs underneath, because the tablet restores the appetite but only the roles restore the person.",
    },
  ],
  contentGaps: [
    "The antipsychotic tier — aripiprazole at low dose for vascular-depression augmentation, and the geriatric-dose mania scaffold (quetiapine 12.5–25 mg titrated) — has no KYP drug lessons; the dose law and the metabolic-mortality cautions are taught here and referenced to the Late-Life Psychosis course, the route never invented.",
    "Lithium's geriatric pharmacology (the 150–300 mg start, the 0.4–0.7 level band, the NSAID and ACE-inhibitor interactions that raise levels, the thirst-urination-confusion triad) has no KYP lesson; the narrow-margin rules are taught within this course.",
    "ECT — often the safest-fast effective option for the severe elderly band — has no KYP lesson; the indications, the consent-and-family-education architecture and the film-era-fear response are taught here.",
    "Valproate's elder-niches and lamotrigine (with the elderly rash-window caution) have no KYP drug lessons; their geriatric positioning is taught here in the late-onset-mania management tier.",
  ],
  patientGuide: {
    whatIsIt:
      "Depression in old age is a real, common and treatable illness — not a natural part of ageing. Roughly one in twelve Indian elders lives with it. It does not always look like sadness: in the elderly it presents through the body (pains, weakness, appetite loss, sleep that breaks at 3 a.m.), through slowing or restlessness, through guilt and through the feeling of being a burden — 'the family would be free without me'. One special costume matters most: it can imitate dementia ('pseudodementia') — the memory seems gone because the depressed brain cannot be bothered to retrieve it, and the memory returns when the depression is treated. Old age slows the body; it does not stop the appetite, stop the cooking and stop the will to live — those are symptoms, and they respond to treatment at any age.",
    whatCausesIt:
      "Several engines run together. The vessels: late-life depression often rides on small strokes and white-matter changes in the brain's mood wiring — which is why the blood pressure and the sugars are part of the mood treatment. The losses: the spouse, the role, the home, the friends, the children's migration — each loss removes a load-bearing strut. The body's illnesses: thyroid and B12 deficiency, chronic pain, Parkinson's, the after-math of strokes, and some medicines (including long-term sleeping tablets). None of these make the depression 'understandable' and therefore untreatable — it is treatable in every one of these situations.",
    symptoms:
      "The body's complaints: joint and back pains with normal reports, 'weakness', burning feet, appetite loss with weight decline, sleep that wakes at 3 a.m. The slowing: the long pauses, the sighing, the stopped cooking — or the opposite, the restless pacing. The words: 'I am a burden', 'better if God took me' — these are warning sentences, not old-age philosophy. The stops: the temple, the walk, the visits, all quietly abandoned. The memory complaint: 'my memory is gone' with 'I don't know' answers — the pseudodementia mask that must be tested by treating the mood before anyone accepts a dementia verdict. The severe band: fixed beliefs of rot inside or ruined family finances, and refusing food and drink — emergencies with fast treatments.",
    treatment:
      "The frame: treat the other conditions first, treat the depression FULLY (not timidly), re-test the memory serially, protect against suicide, and rebuild the roles. The medicines: an SSRI first (sertraline or escitalopram), started low and raised steadily to the full working dose — 'Start LOW, go SLOW, but GO' — with the elder-specific checks: the blood sodium in the first month, the falls counsel, the caution with arthritis painkillers (bleeding risk with the SSRI). The clock runs longer in elders: 8–12 weeks for the full response. Mirtazapine where appetite and sleep lead the picture. Old-style antidepressants (TCAs) are avoided at this age. For the severe, psychotic or food-refusing pictures, ECT is the fastest, often the safest treatment — the modern version bears no resemblance to the old films. The non-medicine half: problem-solving therapy, the scheduled restarts of walking and cooking with company, the temple role restored, the grandchildren's-homework supervision, the distant children's fixed video-rituals. The first episode needs about a year of medicine after recovery; repeat episodes need years — the decision dated, gradual and review-based, never abrupt.",
    selfHelp: [
      "The two-question habit at every family gathering: 'what has Papa/Maa STOPPED doing this year?' — the stopped-activities answer that converts the body's complaints into the diagnosis.",
      "The month-one sodium check written on the calendar when any SSRI starts — the confusion that gets blamed on 'dementia worsening' is often the salt, and the check costs little.",
      "The walk-partner arrangement: someone arrives at the door at the fixed hour — action returns after structure, not after lectures; 'she cannot' is the illness's signature, not her refusal.",
      "The medicines box and the fixed-dose calendar — the system the problem-solving therapy session builds in one sitting.",
      "The property rule: no dementia verdict, and no property or bank-authorisation conversations built on one, until the depression has been treated and the memory re-tested — the pause-letter is a clinical instrument, ask for it.",
      "The children's protocol: fixed, scheduled, role-bearing video rituals ('Sunday you check the homework on the call') — remote engagement is real treatment, not a courtesy.",
      "The role-restoration negotiation: the mother-in-law's SUPERVISION of the kitchen defined with the daughter-in-law — the recipe-consultant honoured in practice, not the guest at the table.",
    ],
    whenToSeekHelp: [
      "Any burden-sentence — 'I am a burden', 'the family would be free without me' — assessed the same week: this population attempts less and dies more, and the sentence is the flag.",
      "Medicines being stockpiled, or affairs suddenly put in order — the quiet preliminaries that earn the urgent assessment.",
      "Refusing food and fluids, or fixed beliefs of having rotted inside or ruined the family — the severe band where ECT is the fast, safe answer.",
      "New confusion or drowsiness in the first month of an antidepressant — the sodium check now, not the 'dementia worsening' conclusion.",
      "Falls or near-falls after any new medicine — the dose or the timing reviewed before the next one.",
      "A first manic episode — little sleep, fast talking, big spending, religious preaching — the MRI-and-thyroid workup before any bipolar label.",
    ],
    indianResources: [
      "The geriatric clinic and psychiatry OPD at the medical colleges — the low-cost assessment spine; the family physician co-managing with the month-one sodium check.",
      "Tele-MANAS 14416 (24×7, free) — the family's distress channel, the caregiver's exhaustion line and the crisis intercept.",
      "The district-lab tier — TSH, B12 and sodium at roughly ₹500–1,000 (approx 2026) — the audit panel that replaces months of limbo.",
      "The walk group, the temple committee and the senior association — the strut-rebuilding programme's infrastructure, cost: nothing.",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific geriatric-depression pathway exists; practice follows the DSM-5-TR episode logic with the geriatric weighting and the NICE/APA-lineage pharmacotherapy and ECT positions, delivered through the medical-college geriatric clinics, the DMHP district psychiatric tier and the family physician — with the NMHS 2015–16 geriatric findings as the epidemiological frame.",
    systemContext: "The elder arrives late, brought by a son or daughter-in-law, framed as 'weakness', body pain or 'memory loss' — the physician's OPD the real front door, the faith-temple route the parallel one, and too often only the family's crisis point. The two-question screen plus the collateral 'what has she STOPPED doing?' is the intercept that works at every one of these doors.",
    programmeContext: "The geriatric-clinic and psychiatry-OPD tier at the medical colleges (low-cost); the DMHP district psychiatric services; the family physician's co-management carrying the month-one sodium check; the district-lab tier for TSH/B12/Na; the ECT course at government hospitals (₹100–500/session-era pricing at the public tier, private ₹2,000–5,000, approx 2026) — the modality whose under-use most costs Indian elders.",
    costConsiderations: "The pharmacotherapy is cheap — sertraline ₹50–150/month, escitalopram ₹60–200, mirtazapine ₹80–250, the hyponatraemia check ₹100–200, the district-lab audit panel ₹500–1,000 (all approx 2026). The walk-group and temple-role prescriptions cost nothing. The expensive items are the imaging and the therapist time; the scarcest is the follow-up structure — which is why the family, the medicine bag and the review card are the delivery system.",
    culturalConsiderations: "The 'budhapa-kamzori' dismissal is the primary killer: the elder's depression read as ageing's weather for an average of years before presentation, while the untreated cohort's suicide-completion risk runs alongside the delay. The migration-empty-nest pattern is the new Indian aetiology layer — the Bangalore-and-Dubai children's parents presenting with the loss-stack's full architecture, the treatment's family-module largely remote (the fixed video-rituals, the role-bearing calls, the NRI son's annual screen question: 'what has Papa stopped doing this year?'). The joint family protects AND pressures — the observation and scaffolding on one side, the status-inversion humiliation and the daughter-in-law's kitchen-theft of the matriarch's last role on the other; the role-restoration negotiation is clinical work here. The 'weakness' complaint also feeds the tonic-and-remedy market — the 'strength' tonics and the local practitioner's courses (the steroid-for-weakness prescription that became a secondary-mania engine in this course's own case) — the drug history asked as specifically as the mood. The temple-remedy route is kept as an ally ('the temple visit IS part of your treatment'), and the ECT stigma — the film-era fear — is the barrier that withholds the best medicine from the food-refusing elder; the consent-and-family-education conversation is the treatment's first session. The widowed male is the least-supported cohort — the man whose household-knowledge was outsourced to his wife for fifty years declining fastest, the unglamorous cooking-class-and-walk-group programme the one that works.",
    patientCounselling: [
      "The one-line philosophy: 'Old age slows the body; it does not stop the appetite, stop the cooking and wake her at 3 a.m. with what-is-the-use — that is an illness, it affects roughly one in twelve elders, and it treats well at any age.'",
      "The dose-law script: 'We start low and go slow, but we GO — the full working dose, the 8–12-week clock; the tablet stopped at the starter dose is the prescription that fails and gets blamed on old age.'",
      "The checks script: 'Not addictive, not kidney-damaging — but checked for the elder-specific harms: the blood sodium in month one, the falls counsel, the caution with the arthritis painkillers; and the honest ledger against the untreated illness — the weight loss, the stroke rehabilitation that fails, the suicide risk.'",
      "The pseudodementia script: 'Before anyone accepts a dementia verdict — and before any property conversation built on one — we treat the depression and re-test the memory; what returns was never gone.'",
      "The ECT script: 'The modern treatment under anaesthesia has nothing in common with the old films — for the severe, food-refusing pictures it is the fastest and often the safest option elders have, and the memory disturbance it causes is mostly brief and monitored.'",
      "The struts script: 'The tablets lift the floor; the roles carry the load — the temple committee's accounts, the homework supervision on the Sunday call, the two women arriving at the door at the fixed morning hour: that is treatment, not niceness.'",
      "The burden-sentence script: 'When she says she is a burden or that God should take her, that is not old-age talk — it is the sentence we assess the same week; answered with the right treatment, it goes quiet.'",
    ],
  },
  decisionPath: {
    title: "The elder whose mood has gone — or seems to have",
    nodes: [
      {
        id: "start",
        question: "An elder arrives through one of four doors: 'weakness' and body pain, apparent 'memory loss', a first manic episode, or the severe crisis. Which door?",
        branches: [
          { label: "Somatic pain-and-weakness costume (the OPD route)", next: "somatic-gate" },
          { label: "Apparent dementia, weeks-to-months onset", next: "pseudo-gate" },
          { label: "First manic episode after 50", next: "mania-gate" },
          { label: "Refusing food and fluids, psychotic guilt, active risk", next: "crisis-gate" },
        ],
      },
      {
        id: "somatic-gate",
        question: "The pain-and-weakness front door: the two-question screen plus the one collateral question.",
        branches: [
          { label: "Screen positive (mood low, or the stopped-activities list)", next: "depression-workup" },
          { label: "Screen negative, picture persists", next: "medical-audit" },
        ],
      },
      {
        id: "medical-audit",
        question: "The medical engine underneath the soma.",
        recommendation: "TSH, B12, glucose, renal; the pain managed properly; the sensory channels aided; the anticholinergic-sedative load deprescribed (the benzodiazepine decade bridged and tapered); the mood re-screened serially — the pain OPD that asked the two questions becomes the catch-point, not the bypass.",
      },
      {
        id: "pseudo-gate",
        question: "The ten-clue differentiation at the bedside.",
        branches: [
          { label: "'I don't know' answers, datable onset, variability, date-through-news intact", next: "depression-workup" },
          { label: "Near-miss confabulation, insidious years, the family complains", next: "dementia-route" },
        ],
      },
      {
        id: "dementia-route",
        question: "The storage failure: the true dementia pathway.",
        recommendation: "The Mild Cognitive Impairment course's follow-up map applies — and the honest both-layers rule: treat any riding depression fully, then re-test; the family counselled on both numbers; the retained-roles scaffolding begun regardless of which number dominates.",
      },
      {
        id: "mania-gate",
        question: "The first mania after 50: workup before label.",
        recommendation: "The M-T-M-S-D ladder: MRI (the stroke and frontotemporal hunt), TSH, the medication timeline (levodopa and agonists, steroids, stimulant-adjacent remedies, the tonic-market courses), the stroke history, the delirium screen — plus the family psychiatric history. The causes treated with the smallest psychiatric scaffold (geriatric-dose antipsychotic, tapered as the engines clear); the sleep-drop alarm taught: below 5 hours for two nights, call.",
      },
      {
        id: "crisis-gate",
        question: "The severe band: which emergency is this?",
        branches: [
          { label: "Food-and-fluid refusal, psychotic guilt, frail wasting", next: "ect-gate" },
          { label: "Burden-sentences, stockpiling, affairs-in-order", next: "suicide-path" },
        ],
      },
      {
        id: "ect-gate",
        question: "The food-refusing, melancholic-psychotic elder.",
        recommendation: "ECT — fast, effective and SAFE in exactly this population, the frail-body advantage of no drug-interaction ledger; the consent-and-family-education conversation as the treatment's first session (the film-era fear answered head-on); the oral-antidepressant clock started alongside for the maintenance phase, not instead of the fast tier.",
      },
      {
        id: "suicide-path",
        question: "The burden-sentence and the quiet preliminaries.",
        recommendation: "The same-week assessment: the questions asked directly, the medicines secured, the plan made with the family — the Elderly Suicide course's full architecture; the untreated depression's lethality (attempts fewer, completions higher) making this the population's most urgent mood emergency.",
      },
      {
        id: "depression-workup",
        question: "The depression confirmed: the audit, then the signature question.",
        branches: [
          { label: "First episode after 60, executive dysfunction, apathy, vascular picture", next: "vascular-path" },
          { label: "Non-vascular picture", next: "ssri-path" },
        ],
      },
      {
        id: "ssri-path",
        question: "The ordinary geriatric depression: the dose law and the watch-list.",
        recommendation: "Sertraline 25–50 mg (or escitalopram) started low and titrated weekly to the FULL effective dose — Start LOW, go SLOW, but GO — with HY-FIB at every step: the month-one sodium check, the falls counsel, the interaction ledger, the NSAID-bleeding audit (PPI where both must run); mirtazapine where appetite and sleep lead; the 8–12-week clock; the duration law (12+ months first episode, 2–3 years or indefinite for the recurrent); the co-riders treated; the dated 3–6-month cognitive re-test booked for any pseudodementia presentation; the strut-rebuilding programme started today.",
      },
      {
        id: "vascular-path",
        question: "The vascular signature: the augmentation logic.",
        recommendation: "SSRI-alone expected to underperform: the exercise prescription added (the strongest single geriatric-augmentation evidence — the walk-group written like a prescription), bupropion where no seizure or cardiac contraindication, aripiprazole at low dose with the metabolic-mortality cautions, lithium's geriatric rules (150–300 mg start, 0.4–0.7 band, the renal check, the NSAID/ACE interaction lecture) — and the BP, the sugars and the vessels treated as part of the mood treatment itself.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Accepting 'budhapa' as the explanation for years",
      why: "The pain-and-weakness OPD route never screened, the temple route parallel-running, and the elder's depression read as ageing's weather — the delay measured in years, with the untreated cohort's suicide-completion risk running alongside it.",
      correction: "The two-question screen plus the collateral 'what has she STOPPED doing?' at every elder OPD visit — the soma converted into the syndrome before the crisis-point presentation.",
    },
    {
      mistake: "The eternal starter dose",
      why: "Sertraline 25 mg for six months, no improvement, then the verdict that 'antidepressants don't work in old people' — the geriatric sin that manufactures treatment resistance and 'confirms' pseudodementia verdicts.",
      correction: "Start LOW, go SLOW, but GO — the weekly titration to the full effective dose, the 8–12-week clock honoured before any judgement is passed.",
    },
    {
      mistake: "Passing the dementia verdict (and the property conversation) before the treatment-trial re-test",
      why: "The wrongly-labelled demented elder gets the property transferred, the driving stopped, the person institutionalised — on a depression that would have lifted in eight weeks; the miss costs the family's finances and the person's remaining function at once.",
      correction: "The ten-clue differentiation at first assessment, the property-PAUSE letter where the agenda surfaces, and the dated re-test after treatment — 'let us first treat the depression and THEN measure the memory' before any verdict is announced to the family or the lawyer.",
    },
    {
      mistake: "Reading the week-six confusion as 'dementia worsening'",
      why: "The SSRI-induced hyponatraemia presenting as confusion and lethargy in exactly the window where the family (and the doctor) expect cognitive decline — the sodium missed, the antidepressant blamed, the treatable layer untreated.",
      correction: "The month-one sodium check built into every geriatric SSRI start, more so with diuretics — the ₹100–200 test that saves the month and the diagnosis.",
    },
    {
      mistake: "Labelling late-onset mania bipolar and loading lithium before the audit",
      why: "The stroke, the thyrotoxicosis, the steroid course and the levodopa hide inside these presentations — the unexamined stack produces the wrong lifelong label and treats the wrong disease, with lithium's narrow margin added on top of an unmanaged engine.",
      correction: "M-T-M-S-D first — MRI, TSH, the medication timeline, the stroke history, the delirium screen — and the causes treated with the smallest psychiatric scaffold; the label only where the workup clears.",
    },
    {
      mistake: "Missing both NSAID interactions in the same arthritis patient",
      why: "The painkiller plus the SSRI (the GI bleeding) and the painkiller plus the lithium (the level rise and toxicity) — two emergencies hiding in one drug list, neither flagged by the patient who sees only 'the joint tablet'.",
      correction: "The full drug list with the painkillers named and audited at every visit — the counsel, the PPI where SSRI and NSAID must run together, and the family taught the lithium toxicity triad (thirst, urination, confusion).",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The geriatric weighting of the episode criteria: 2 weeks, 5+ symptoms — with anhedonia, guilt, psychomotor change and early waking outweighing appetite and sleep complaints (the somatic overlap with medical illness).",
        "The costumes of elderly depression: somatic, psychomotor, burden-talk, apathy-by-attrition — and the collateral stopped-activities list as the examination.",
        "Depressive pseudodementia versus true dementia: the retrieval-freeze against the storage failure — 'I don't know' with absent effort versus the confabulated near-miss with genuine effort; the treatment-trial re-test as the final judge.",
        "The vascular-depression subtype: white-matter hyperintensities, executive dysfunction, apathy, weaker SSRI-alone response — augmentation and exercise as the answer.",
        "The geriatric prescribing laws: 'Start LOW, go SLOW, but GO'; the HY-FIB watch-list; the 8–12-week clock; TCAs avoided; mirtazapine's niche.",
        "ECT in the elderly: the indications (melancholic, psychotic, food-refusing, intolerant, severe-suicidal) and the safety position (fast, effective, SAFE; cognitive effects largely transient and monitored).",
        "Late-onset mania: secondary until proven otherwise — stroke, thyroid, dopaminergics, steroids, FTD, delirium — and the M-T-M-S-D workup.",
        "Lithium in the elder: the 0.4–0.7 band, the fallen GFR, the NSAID and ACE-inhibitor interactions that raise levels.",
      ],
      practical: [
        "Take the collateral interview: demonstrate the 'what has she STOPPED doing?' question and the stopped-activities list against the elder's brave smile.",
        "Run the bedside pseudodementia differentiation: the don't-know answers, the clock-shrug, the date-through-news, the cueing response — then state the treatment-trial re-test as the closing move.",
        "Screen the elderly depressed patient for suicide risk: the burden-sentences, the stockpiling, the affairs-in-order behaviour — asked directly, documented.",
      ],
      longAnswer: [
        "A 75-year-old presents with 'memory loss', weight loss and body pain: outline the assessment and management (the pseudodementia ladder, the ten-clue table, the treatment-trial re-test, the dose law and the watch-list).",
        "Depression in the elderly: how does it differ from younger-adult depression in presentation, assessment and management? (the costumes, the collateral, the vascular subtype, the geriatric pharmacology, the ECT position).",
        "ECT in the elderly: indications, safety and the consent conversation (with the late-onset mania workup as the companion essay).",
      ],
    },
    neetPg: {
      highYield: [
        "NMHS 2015–16: ~1 in 12 Indian elders with depression; urban-elderly higher (nearly one in five in the urban band); treatment gap >85%.",
        "Community-dwelling elderly major depression 2–5%; the medically ill, hospitalised and institutionalised reach a fifth or more; subsyndromal several-fold higher.",
        "PSEUDODEMENTIA: retrieval-freeze versus storage-failure; 'I don't know'/no effort versus confabulation/effort; onset weeks-months and datable versus insidious years; the FAMILY complains in dementia, the patient in depression; the final judge is the treatment-trial re-test.",
        "VASCULAR DEPRESSION: white-matter hyperintensities and lacunes disrupting frontostriatal circuitry; executive dysfunction and apathy prominent; weaker SSRI-alone response — augmentation and exercise.",
        "POST-STROKE DEPRESSION: roughly a third of stroke survivors at some point in year one; bidirectional with rehabilitation outcomes — every stroke survivor a screen candidate.",
        "THE DOSE LAW: 'Start LOW, go SLOW, but GO' — the eternal starter dose the geriatric sin; the 8–12-week response clock (versus 4–6 in younger adults).",
        "THE WATCH-LIST 'HY-FIB': HYponatraemia (SIADH — the month-one sodium check), Falls, Interactions, Bleeding with NSAIDs; citalopram's QT ceiling remembered.",
        "FIRST-LINE: sertraline/escitalopram; TCAs avoided in elders; mirtazapine for the wasting-insomniac; maintenance 12+ months first episode, 2–3 years or indefinite for recurrent.",
        "ECT: fast, effective, SAFE in elders — the melancholic/psychotic/wasting/intolerant tier's best option; cognitive effects largely transient.",
        "LATE-ONSET MANIA: secondary until proven (stroke — especially right-hemisphere/orbitofrontal, hyperthyroid, steroids, dopaminergics, FTD, delirium); workup M-T-M-S-D before the label.",
        "ELDERLY SUICIDE: attempts fewer, COMPLETIONS higher; burden-talk = the screen trigger; stockpiling and affairs-in-order the preliminaries.",
        "THE STRONGEST GERIATRIC AUGMENTATION: exercise (the walk-group prescription) plus problem-solving therapy and reminiscence — the non-drug tier with the evidence.",
      ],
      pyqConcepts: [
        "The pseudodementia differentiator question — the answer built on effort, onset and the treatment-trial re-test.",
        "The SSRI hyponatraemia stem — the month-one sodium check in the confused elder on a new antidepressant.",
        "The late-onset mania stem — the MRI/TSH/steroid audit before lithium; the post-stroke mania classic.",
        "The first-episode-after-60 executive-dysfunction depression — the vascular subtype answer.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 76-year-old Pune widow referred as 'probably dementia; family wants to plan', with four months of missed fixed-deposit dates, stopped cooking and temple, 3 a.m. waking, 7 kg lost, body pains that toured three orthopaedists, 'I don't know' answers with the clock-shrug, full date-through-news orientation, and the daughter-reported sentence 'I eat and sit like a sack': the ten-clue differential running pseudodementic, the audit finding borderline B12 and a two-year alprazolam, the property conversation paused by letter, sertraline titrated 25→100 mg, the kitchen renegotiated to supervision, the walk-group reconnected — and at four months the re-test: seven MoCA points recovered, the bank satisfied by the widow herself: the treatment-trial re-test as the final judge, and the property-PAUSE letter as a clinical instrument.",
        "A 66-year-old Ludhiana businessman with no psychiatric history, three weeks of two-to-three-hour nights, pressured speech, large spending on 'the new venture', religious preaching and one late-night confrontation — the family's theory 'stress of business'; the order-rule finding a recent right-hemisphere orbitofrontal-adjacent infarct on MRI, a suppressed TSH (two months of weight loss and palpitations read as work stress), a steroid course from a local practitioner for 'weakness' six weeks prior, and a clinic BP of 178/104 with the antihypertensive stopped a year ago: three secondary engines stacked in one manic presentation, the causes treated (endocrinology, the weaning steroid, the restored BP), quetiapine 12.5–25 mg tapered as the layers cleared, the sleep-drop alarm taught — and at three months no psychiatric diagnosis carried forward: the workup-first discipline as the difference between a wrong lifelong label and a resolved illness.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Pseudodementia = depression imitating dementia; the memory recovers when the mood is treated.",
        "'Start low, go slow, but go' — titrate geriatric antidepressants to the full effective dose.",
        "SSRI elder-risks: hyponatraemia (month-one sodium), falls, GI bleeding with NSAIDs.",
        "First-line geriatric SSRIs: sertraline and escitalopram; TCAs avoided.",
        "ECT is fast, effective and safe in the severe elderly band — not the film-era procedure.",
        "First mania after 50 = secondary workup (MRI, TSH, medications) before the bipolar label.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The collateral stopped-activities list outperforms every self-report in this population — the mask-of-smiles elder is symptomatic only in the informant's account; interview the daughter-in-law, the cook and the neighbour as deliberately as the patient.",
        "The property-PAUSE letter is a clinical instrument in Indian practice: 'the memory picture is currently unproven; re-assessment after treatment' — the sentence that undoes the wrongly-prepared sale, written before the family reaches the lawyer.",
        "The month-one sodium check is the geriatric SSRI's signature investigation — the week-six confusion read as 'dementia worsening' is the hyponatraemia miss that unseats an otherwise correct diagnosis.",
        "The daughter-in-law's kitchen-negotiation is strut-rebuilding and symptom-cause both: the recipe-consultant contract (her idea, once named) restores the matriarch's last role while removing the loss that helped trigger the episode.",
        "The vascular-depression patient needs the augmentation-and-exercise prescription as much as the SSRI — and the walk-group with social enforcement (two temple-cohort women assigned the daily-collection duty) outperforms any leaflet-based activation plan the OPD has ever issued.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The house that was nearly sold for a disease she did not have",
      presentation: "A 'dementia' referral with the property deeds already moving — the memory loss that turned out to be depression's retrieval-freeze, and the re-test that returned a Pune widow both her mind and her house.",
      initialPresentation: "A 76-year-old Pune widow was brought by her son carrying the family physician's note: 'memory loss, probably dementia; family wants to plan'. Four months of missed fixed-deposit dates and forgotten medicines (which the daughter-in-law had taken over administering), cooking stopped, temple stopped, the morning walk stopped, waking at 3 a.m., 7 kg lost, and body-pain complaints that had toured three orthopaedists without a finding.",
      history: "The husband's death 14 months prior; the sister-friend's death 6 months prior; the kitchen role quietly taken over by the daughter-in-law 3 months ago. The daughter reported the phone-call sentence: 'what is the use of my staying now; I eat and sit like a sack'. Alprazolam 0.25 mg nocte for two years. The son's real agenda surfaced in the collateral interview — the property-deed and bank-authorisation work 'before she gets worse'.",
      examination: "'I don't know' to most memory items; the shrug at the clock; full orientation to date-through-news; measurable brightening when the conversation turned to the granddaughter's exams (the variability clue). The daughter-in-law's stopped-activities list was the diagnostic core; the PHQ-9-tier screen ran severe; the ten-clue table ran strongly pseudodementic. Audit: B12 borderline-low, TSH normal, sodium normal, the bladder tablet stopped, the alprazolam tapered.",
      diagnosis: "Major depressive episode, severe, with a pseudodementia presentation — on a loss-stack (widowhood, the sister-friend's death, the kitchen-role loss) with a borderline B12 layer; not dementia.",
      management: "The property conversation PAUSED explicitly, with the clinic's letter: 'the memory picture is currently unproven; re-assessment after treatment'. Sertraline started at 25 mg and titrated weekly to 100 mg (the GO law); the B12 replaced; the daughter-in-law's kitchen role NEGOTIATED to supervision (the recipe-consultant contract, her idea once named); the walk-group reconnected — two temple-cohort women assigned the daily-collection duty; problem-solving therapy in 6 sessions (the medicines-box system, the fixed-deposit calendar, the stairs-anxiety each given a plan); the son's remote-engagement prescription — the Sunday homework-call for the granddaughter's maths.",
      outcome: "At 8 weeks: cooking twice weekly, PHQ-9 halved, appetite returning. At 4 months: the re-test — MoCA-tier score up 7 points from baseline, orientation intact, memory 'good enough that the bank asked nothing when I went myself'. The dementia label never resumed. The son's verdict, in the file verbatim because it belongs in teaching: 'we were selling the house to fund a disease she did not have.'",
      teachingPoints: [
        "The 'memory loss' was the physician's referral line and the depression's symptom in one presentation — the ten-clue differential plus the stopped-activities list made the diagnosis before any test.",
        "The property-PAUSE letter is a clinical instrument in Indian practice — the referral said 'family wants to plan', and the plan was stopped by letter.",
        "The daughter-in-law kitchen-negotiation was the strut-rebuild and the symptom's cause both — the role restored while the loss was still driving the episode.",
        "The sertraline went to the full 100 mg dose; the starter-dose-forever sin would have 'confirmed' the dementia and funded the sale.",
        "The treatment-trial re-test is the pseudodementia's final judge — the 7-point recovery the number that closed the case.",
      ],
    },
    {
      title: "The first mania at 66",
      presentation: "Three weeks of two-hour nights and a 'complete' factory plan in a man with no psychiatric history — and an MRI, a TSH and a drug list that found three engines stacked under one manic picture.",
      initialPresentation: "A 66-year-old Ludhiana businessman with no psychiatric history was brought by his sons after a three-week changed state: sleeping two-to-three hours ('I don't need sleep; the factory plan is complete'), talking fast, spending large sums on 'the new venture', religious-preaching to the staff, and initial elation shading into irritability with one late-night confrontation with a supplier. The family's proposed theory: 'stress of business'.",
      history: "Two months of weight loss and palpitations read as 'work stress'; a steroid course from a local practitioner for 'weakness' six weeks prior; the blood-pressure medicine stopped a year ago ('felt fine').",
      examination: "The clinic's order-rule ran the late-onset-mania discipline: MRI first — a right-hemisphere orbitofrontal-adjacent infarct, dated by the radiologist as recent-weeks; TSH suppressed (the missed hyperthyroidism); the drug list holding the recent steroid course; the clinic BP 178/104.",
      diagnosis: "Secondary manic presentation — post-stroke mania on a hyperthyroid-and-steroid layer, with uncontrolled hypertension as the engine's engine; no primary bipolar disorder.",
      management: "The causes treated: the thyrotoxicosis with the endocrinology team; the steroid already weaning; the stroke workup and secondary prevention with the physician, the BP restored to treatment; the family counselled on the mania's secondary nature. The acute agitation managed with quetiapine at geriatric dose (12.5–25 mg titrated, the vascular-patient caution), tapered as the thyroid and steroid layers cleared; the family educated on the recapitulation risk-signs — the sleep-drop alarm: 'when his sleep falls below 5 hours for two nights, call us'.",
      outcome: "At three months: euthymic, thyroxine-controlled, the anticoagulant-and-BP regime running, the 'venture' quietly dissolved under the sons' management. No psychiatric diagnosis carried forward — the secondary manic presentation resolved with its causes — but the file carries the watch-note: any recurrence earns the workup-first order again.",
      teachingPoints: [
        "The FIRST mania after 50 is a medical workup before it is a psychiatric label — MRI, TSH, steroids, stroke: the whole M-T-M-S-D ladder.",
        "Three secondary engines were stacked in one patient (infarct, thyroid, steroid); the unexamined stack produces the wrong lifelong label.",
        "The treatment of secondary mania is the treatment of its causes, with the smallest psychiatric scaffold — the quetiapine tapered away as the layers cleared.",
        "The sleep-drop alarm taught to the family is the early-warning instrument for ANY future episode — below 5 hours for two nights, they call.",
        "'Work stress' was doing what first explanations do in Indian families — covering a hypertension that had already stopped its own medicines.",
      ],
    },
  ],
  clinicalPearls: [
    "The elder who stops eating, stops walking and speaks of being a burden is not fading naturally — that is a treatable illness wearing ageing's costume; roughly one in twelve Indian elders has it, and the treatment gap runs above 85%.",
    "Depression freezes RETRIEVAL; dementia destroys STORAGE — 'I don't know' with the shrug against the confabulated near-miss with genuine effort: the bedside differential in one line.",
    "The final judge of the pseudodementia differential is the TREATMENT TRIAL — treat the depression fully, re-test at 3–6 months; what recovers was depression, what remains is the dementia floor (and many elders carry both layers).",
    "The vascular-depression signature: first episode after 60, executive dysfunction, apathy, sparse guilt — weaker SSRI-alone response; add the augmentation, prescribe the exercise, treat the vessels.",
    "Post-stroke depression affects roughly a third of stroke survivors at some point in year one — and depression impairs rehabilitation right back: a two-way street screened at every stroke follow-up.",
    "Start LOW, go SLOW, but GO — the geriatric sin is not starting the antidepressant; it is staying at the starter dose forever.",
    "HY-FIB rides every prescription: HYponatraemia (the month-one sodium), Falls, Interactions, Bleeding with NSAIDs.",
    "The clock runs 8–12 weeks in elders (against 4–6 in younger adults); maintenance 12+ months after a first episode, 2–3 years or indefinite for the recurrent — the taper always gradual.",
    "Mirtazapine for the appetite-lost, insomniac, wasting elder; TCAs avoided (the anticholinergic-orthostatic ledger); citalopram's QT-dose ceiling remembered.",
    "ECT in elders is fast, effective and SAFE for the melancholic, psychotic, food-refusing and intolerant band — the film-era fear is the barrier, not the evidence.",
    "The first mania after 50 is a workup before a label — M-T-M-S-D: MRI, Thyroid, Medications, Stroke-history, Delirium-screen.",
    "Lithium's geriatric rules: start ~150–300 mg, levels at the 0.4–0.7 band, the renal check always — and NSAIDs and ACE-inhibitors RAISE the level (the arthritis-painkiller-plus-lithium emergency).",
    "'What has Papa stopped doing this year?' — the festival-visit question that outperforms every instrument in the Indian family's hands; and 'I am a burden' is the sentence that triggers the same-week suicide assessment.",
  ],
  highYieldSummary: [
    "Definition and framing: mood disorders of old age = the depressive episodes (recurrent illness grown old, or the first late-life episode with its vascular signature), the pseudodementia mask, and the late-onset bipolar presentations — all running on the same law: not ageing, but treatable illness, misread as budhapa for an average of years before presentation.",
    "Epidemiology: community-dwelling elderly major depression 2–5% (a fifth or more among the medically ill and institutionalised; subsyndromal several-fold higher); the course longer and more relapsing than young-adult depression; attempts fewer, completions more; women treated more, men dying more; NMHS 2015–16 — roughly one in twelve Indian elders, urban higher (nearly one in five in the urban band), treatment gap >85%.",
    "Mechanism: the watershed engine (hypertension and diabetes degrading frontostriatal white matter — executive-dysfunction-predominant depression with weaker SSRI-alone response); the retrieval-freeze (depression jamming retrieval while storage stays intact — the pseudodementia mask); the loss-stack physics (each loss removing a strut, the Indian elder's struts built into the family structure and removed together by modernisation).",
    "Clinical: the somatic costume (pain, weakness, gas, normal workups), the psychomotor signs (slowed or agitated), the 3 a.m. waking, the burden-talk (the suicide flag), the guilt-nihilism layer intact with age, the apathy-by-attrition misread as lazy old age, the mask-of-smiles (the informant report is the examination) — and the bipolar side: late-onset mania as the secondary-suspicion territory, elderly bipolar I with mania softening and depressions dominating.",
    "Diagnosis: the geriatric-weighted episode criteria (anhedonia, guilt, psychomotor change and early waking over the somatic items); the collateral stopped-activities list; the suicide screen (burden-sentences, stockpiling, affairs-in-order); the audit (TSH, B12, CBC, glucose, renal, the drug list with anticholinergic and sedative counts, alcohol); the ten-clue pseudodementia differentiation — with the treatment-trial re-test as the final judge; the M-T-M-S-D workup for any first mania after 50.",
    "Management: co-riders treated first; SSRI first-line (sertraline/escitalopram) under 'Start LOW, go SLOW, but GO' with HY-FIB (month-one sodium, falls, interactions, NSAID-bleeding) and the 8–12-week clock; mirtazapine for the wasting-insomniac; TCAs avoided; the vascular-depression augmentation tier with exercise the strongest single move; ECT for the melancholic-psychotic-food-refusing band (fast, effective, safe); problem-solving therapy, behavioural activation and reminiscence; the strut-rebuilding programme (retained roles, re-connection architecture, the migration-children protocol); duration 12+ months (first) to 2–3 years-or-indefinite (recurrent), taper never abrupt.",
    "The Indian tier: the physician-OPD intercept through pain complaints (the two-question screen plus 'what has she STOPPED doing?'); the property-PAUSE letter preventing the pseudodementia family catastrophe; the joint family's double edge managed by role-restoration negotiation; the temple route kept as an ally; the tonic-and-remedy market and the local steroid courses entering the drug history and the mania workup; the film-era ECT stigma withholding the best medicine from exactly those who need it; the widowed male as the fastest-declining, least-supported cohort.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "em-quiz-1",
      question: "The geriatric antidepressant dose law:",
      options: ["Start low, stay low forever", "Start LOW, go SLOW, but GO — titrate to the full effective dose", "Start high for a faster response in elders", "Fixed dose for all ages"],
      correctIndex: 1,
      explanation: "The eternal starter dose is the Indian geriatric sin that manufactures treatment failure and 'confirms' pseudodementia verdicts — the titration to the full effective dose is the law.",
      afterSectionId: "management",
    },
    {
      id: "em-quiz-2",
      question: "A depressed elder answers 'I don't know' to memory questions, keeps the date through the news, and the family reports four months of stopped cooking. The leading formulation:",
      options: ["Alzheimer's disease", "Depressive pseudodementia — treat the depression, then re-test cognition", "Delirium", "Normal ageing"],
      correctIndex: 1,
      explanation: "The retrieval-freeze signature — and the treatment trial is the final judge, before any property-transfer conversations.",
      afterSectionId: "differential",
    },
    {
      id: "em-quiz-3",
      question: "The SSRI-specific adverse effect warranting a month-one check in elders:",
      options: ["Weight gain", "Hyponatraemia (SIADH)", "Hair loss", "Acne"],
      correctIndex: 1,
      explanation: "The confusion-lethargy presentation read as 'dementia worsening' at week six — the sodium check costs little and saves the diagnosis.",
      afterSectionId: "management",
    },
    {
      id: "em-quiz-4",
      question: "A 79-year-old with psychotic depression is refusing food and fluids. The fastest effective and safest treatment is usually:",
      options: ["Waiting for fluoxetine to work", "ECT", "Haloperidol loading", "Deep brain stimulation"],
      correctIndex: 1,
      explanation: "The geriatric modality's best-kept position — film-era fear is the barrier, not the evidence; the frail-body advantage is the absence of a drug-interaction ledger.",
      afterSectionId: "management",
    },
    {
      id: "em-quiz-5",
      question: "A first manic episode at 66 with no psychiatric history demands FIRST:",
      options: ["Lithium prescription", "The secondary-cause workup — MRI, TSH, medication/steroid audit, stroke hunt", "An antipsychotic depot", "Family therapy"],
      correctIndex: 1,
      explanation: "Late-onset mania is workup-first: strokes, thyrotoxicosis, steroids and dopaminergics hide inside these presentations — the M-T-M-S-D ladder before any label.",
      afterSectionId: "diagnosis",
    },
    {
      id: "em-quiz-6",
      question: "The vascular-depression subtype, compared with non-vascular geriatric depression:",
      options: ["Responds better to SSRI monotherapy", "Shows executive-dysfunction prominence and a weaker SSRI-alone response — augmentation and exercise matter more", "Presents with euphoria", "Needs no maintenance treatment"],
      correctIndex: 1,
      explanation: "The watershed-engine lesson: treat the vessels, add the augmentation, prescribe the walk-group — the strongest single geriatric-augmentation evidence is exercise.",
      afterSectionId: "mechanism",
    },
  ],
  activeRecallQuestions: [
    { question: "Name the geriatric costumes of depression and the one collateral question that converts the soma into the syndrome.", answer: "THE COSTUMES: (1) the somatic front door — joint and back pains, 'weakness', burning feet, appetite loss with weight decline, the gas-and-indigestion visits with normal workups; (2) the psychomotor signs — the slowed, stooped, sighing elder or the agitated wringer-of-hands; (3) the burden-talk — 'I am a burden; the family would be free without me'; (4) the apathy-by-attrition — the stopped visits, walks and temple attendance misread as lazy old age; (5) the pseudodementia mask — 'my memory is gone' with don't-know answers. THE CONVERTING QUESTION: 'what has she STOPPED doing?' — asked of the co-resident child, the cook or the neighbour: the stopped-activities list is more diagnostic than the elder's brave smile, because many elders schooled in not complaining present cheerful at interview (the mask-of-smiles) and symptomatic only in the informant report. In the Indian setting the same question at the festival visit — 'what has Papa stopped doing this year?' — is the single best screening instrument the family owns.", topic: "Clinical practice" },
    { question: "Recite the pseudodementia differentiation in five clue-pairs, and state the final judge.", answer: "FIVE PAIRS: (1) ONSET — weeks-to-months, datable, often after a loss (pseudodementia) versus insidious over years (dementia); (2) THE ANSWERS — 'I don't know' with absent effort and the shrug versus the near-miss confabulation offered with genuine effort; (3) INSIGHT AND COMPLAINANT — the depressed elder complains loudly and early; in dementia the FAMILY complains while the patient says little; (4) PERFORMANCE — variability and 'don't-test-me' inconsistency with recognition improving on cueing, against consistently poor performance where cueing fails (the storage is gone); (5) FUNCTION — ability intact though unused ('I can't cook') against ability genuinely lost — with the mood architecture dysphoric and guilt-laden in the depression, shallow-labile in the dementia. THE FINAL JUDGE: the TREATMENT TRIAL — treat the depression fully, then re-test cognition at 3–6 months: what recovers was depression; what remains is dementia's true floor. The law exists because many elders carry BOTH layers — the depression riding on early dementia — and no bedside clue set can replace the re-test's arithmetic.", topic: "Diagnosis" },
    { question: "What is the vascular-depression signature, and which two treatment moves does its weaker SSRI-alone response demand?", answer: "THE SIGNATURE: the first depression of the late 60s–70s riding on lacunes and deep white-matter hyperintensities that disrupt frontostriatal mood circuitry — the brain's watershed zones where small-vessel disease strikes first. Clinically: executive dysfunction prominent (the slowed planning, the braking failure), apathy, sparse guilt-psychology, a tough response to antidepressants ALONE, and the MRI showing the white-matter freight; post-stroke depression is the same engine's acute face (roughly a third of stroke survivors in year one). THE TWO MOVES: (1) AUGMENTATION — SSRI-alone underperforms, so bupropion (where no seizure or cardiac contraindiction), low-dose aripiprazole (with the metabolic-mortality cautions) or lithium's geriatric version is added; (2) EXERCISE plus vessel-care — the exercise prescription is the strongest single geriatric-augmentation evidence (the walk-group written like a prescription), and the BP, the sugars and the vessels are treated as part of the mood treatment itself: the elder's first depression is a cardiology-and-neurology consultation as much as a psychiatric one.", topic: "Management" },
    { question: "Give the geriatric SSRI discipline: the molecules, the dose law, the clock, and the four-item watch-list.", answer: "THE MOLECULES: sertraline and escitalopram — the best geriatric evidence-tolerability balance (citalopram's QT-dose ceiling remembered); mirtazapine for the appetite-lost, insomniac, wasting elder; TCAs avoided or reserved for specific pain-adjuvant niches at micro-doses. THE DOSE LAW: 'Start LOW, go SLOW, but GO' — sertraline started at 25–50 mg and titrated weekly to the FULL effective dose; the geriatric sin is not starting, it is staying at the starter dose. THE CLOCK: 8–12 weeks for full response in elders, against 4–6 in younger adults — with maintenance 12+ months after a first episode, 2–3 years or indefinite for the recurrent, and the taper never abrupt. THE WATCH-LIST (HY-FIB): HYponatraemia — SSRI-induced SIADH, sodium checked within the first month (more so with diuretics; the confusion-lethargy presentation); Falls — sedation and orthostasis, the evening-dose choices, the get-up-slowly counsel; Interactions — the polypharmacy ledger audited; Bleeding with NSAIDs — the arthritis co-prescription counselled, a PPI where both must run.", topic: "Pharmacology" },
    { question: "When is ECT the best medicine this population has? Name three indications and the one-line response to the family's film-era fear.", answer: "THE POSITION: ECT in elders is fast, effective and SAFE — the modern-modality evidence with cognitive side-effects largely transient and monitored, and the frail-body advantage of NO drug-interaction ledger (the polypharmacy patient's pharmacological minefield simply absent). THREE INDICATIONS (of the four): (1) the melancholic-psychotic band — the guilt-delusional, nihilistic elder; (2) the food-and-fluid-refusing wasting elder — the emergency whose oral-antidepressant clock is the wrong clock; (3) the medication-intolerant picture — the patient for whom every tablet route has failed or is unsafe (the fourth: the severe suicidal states needing speed). THE ONE-LINE RESPONSE TO THE FILM-ERA FEAR: 'the treatment your mother would receive has nothing in common with the old films — it is given under anaesthesia, it is often gentler than the drug alternatives in frail elders, and the memory disturbance it causes is mostly brief and monitored.' The consent-and-family-education work is the treatment's first session — in India, where the film-era fear is the barrier to the best medicine this population has, that conversation IS the procedure's first component.", topic: "Management" },
    { question: "The first mania at 66: list the workup-first ladder and two treatment consequences of finding a secondary cause.", answer: "THE LADDER (M-T-M-S-D): MRI — the stroke hunt (especially right-hemisphere and orbitofrontal territory) and the frontotemporal-dementia screen; Thyroid — TSH, the missed hyperthyroidism hiding behind 'work stress'; Medications — the timeline of levodopa and the agonists, steroids (including the local practitioner's 'weakness' courses), stimulant-adjacent remedies; Stroke-history — including the silent and the stopped-medicine hypertension behind it; Delirium-screen — the mixed picture that mimics mania. CONSEQUENCE ONE: the causes are treated, not the label — the stroke-rehab team engaged, the thyrotoxicosis managed with endocrinology, the levodopa negotiated with neurology, the steroid wound down with the prescribing specialty — with only the smallest psychiatric scaffold (a geriatric-dose antipsychotic, tapered as the engines clear); the bipolar diagnosis is NOT carried forward when the presentation resolves with its causes. CONSEQUENCE TWO: no lifelong lithium on an unexamined stack — where genuine late bipolar is confirmed after the audit, lithium runs the geriatric rules (start 150–300 mg, the 0.4–0.7 band, the renal check always, the NSAID-and-ACE interaction lecture) rather than the adult default; and the family leaves with the sleep-drop alarm — below 5 hours for two nights, they call.", topic: "Diagnosis" },
    { question: "Lithium in an 80-year-old: the level band, the kidney fact, and the two common Indian drug-interactions that raise levels.", answer: "THE LEVEL BAND: the lower therapeutic band in elders — roughly 0.4–0.7 — with the start at approximately 150–300 mg rather than adult loading. THE KIDNEY FACT: GFR has fallen by decades by the eighties — the kidney that clears lithium is not the kidney the adult dosing tables assumed, so the renal-function check runs ALWAYS, and the level, not the dose, is the prescription's truth. THE TWO INTERACTIONS: NSAIDs (the arthritis painkillers bought over the counter — the prostaglandin-mediated reduction in lithium clearance) and ACE-inhibitors — both RAISE lithium levels: the arthritis-painkiller-plus-lithium emergency is a specifically Indian frequency because the painkiller is bought without prescription and mentioned to nobody. The family is taught the toxicity triad — thirst, urination, confusion — as the call-us sign; and the same NSAID that threatens the lithium also threatens the SSRI's bleeding risk in the same arthritis patient: one drug list, two audits.", topic: "Pharmacology" },
    { question: "The migration-empty-nest elder: name the strut-rebuilding programme's three prescriptions.", answer: "PRESCRIPTION ONE — ROLE-RESTORATION: new roles that carry weight, RETAINED not token — the temple-committee accounts, the grandchildren's-homework supervisorship, the building-association duty; in the joint family's case, the role-restoration negotiation (the mother-in-law's SUPERVISION of the kitchen defined with the daughter-in-law — the recipe-consultant honoured in practice, not the guest at the table). PRESCRIPTION TWO — THE RE-CONNECTION ARCHITECTURE: the morning-walk group (two temple-cohort women assigned the daily-collection duty — behavioural activation with social enforcement), the senior association, the phone-tree of the surviving cohort, the building's WhatsApp-admin role. PRESCRIPTION THREE — THE MIGRATION-CHILDREN PROTOCOL: the remote-engagement prescription for the distant children — fixed, scheduled, predictable, role-bearing video rituals ('Sunday you check Sagar's homework on the call'), plus the annual screen question the NRI son asks on his visit: 'what has Papa stopped doing this year?' The frame underneath: the pills lift the mood's floor; the struts carry the load — and the Indian elder's struts were built into the family structure that modernisation removed in one decade.", topic: "Indian context" },
  ],
  faqs: [
    { question: "He is 78. Isn't this just old age?", answer: "Old age slows the body; it does not stop the appetite, stop the cooking, stop the talking and wake him at 3 a.m. with 'what is the use'. Those are symptoms of an illness — one that affects roughly one in twelve Indian elders and treats well at any age. The 'just old age' sentence is the reason Indian elders average years before anyone asks the mood questions." },
    { question: "Is it dementia? His memory has gone.", answer: "It may be — or it may be depression wearing memory's costume: the memories filed but the drawer jammed. The two are separated at assessment (the pattern of the answers, the speed of the decline, what the family reports) and finally by TREATMENT: we treat the depression fully and re-test the memory; what returns was never gone. Before any 'dementia' verdict — and any property decisions built on it — that trial belongs in the file." },
    { question: "Aren't antidepressants dangerous at this age — kidneys, falls, addiction?", answer: "They are medicines that respect age: we start low, rise to the full working dose, and run the elder-specific checks — the sodium test in month one, the falls counsel, the bleeding audit with his arthritis medicines. They are not addictive. And the honest comparison is with the untreated illness's ledger: the weight loss, the stroke rehabilitation that fails, the suicide risk that runs highest in exactly this age group. The medicine is the safer side of that ledger." },
    { question: "ECT? Like in the old films? You want to shock my mother?", answer: "Modern ECT under anaesthesia is the fastest and often the safest treatment we have for the severe elderly depressions — the ones refusing food, the psychotic guilt-states, the failed-medication pictures. The memory disturbances it causes are mostly brief and monitored, and in frail elders it is often gentler than the drug alternatives. The old films were made before the anaesthesia era; the treatment your mother would receive has nothing in common with them." },
    { question: "She has stopped everything — temple, cooking, walks. We tell her to try. She says she cannot.", answer: "That 'cannot' is the illness's signature — the will-engine itself is part of what is depressed; willpower advice is aspirin for a fracture. The treatment order: medicine and therapy to lift the floor, THEN the scheduled restarts — the walk-partner arriving at the door, the cooking starting with supervision-not-alone, the temple visit with the fixed companion. Action returns after structure, not after lectures." },
    { question: "She says she is a burden and God should take her. Is that normal old-age talk?", answer: "No — and treat it as the emergency-adjacent sentence it is. The elderly hide frank suicidal statements behind exactly this 'burden' grammar, and this population's attempts succeed more often than the young's. We assess her the same week: the questions asked directly, the medicines secured, the plan made with the family. The sentence is her depression speaking; answered with the right treatment, it goes quiet." },
    { question: "The GP gave her a sleeping tablet years ago. Can we just continue that?", answer: "That tablet is likely a benzodiazepine, and at her age it manufactures daytime fog, night-falls, memory complaints that imitate dementia, and a dependency that will need a gradual taper. It was treating the symptom of the very illness we should treat properly. We will bridge-and-taper it while the real medicine takes over; the sleep architecture returns with the mood." },
    { question: "All her friends are dying and the children are abroad. What can medicine do about loneliness?", answer: "Medicine lifts the floor; the structure rebuilds the load-bearing walls — and that half is ours to engineer together: the walk-cohort (two women assigned the daily-collection duty), the temple-committee role, the grandchildren's homework supervision on the Sunday call, the senior association's phone-tree. The children's remote-engagement prescription is real treatment: fixed, role-bearing, predictable contact. Loneliness is a treatable architecture, not just a feeling." },
    { question: "Her memory improved after treatment, so it was depression. Is she now safe from dementia?", answer: "Partially protected, not guaranteed: late-life depression also raises later dementia risk, which is why the recovered pseudodementia stays on the follow-up map (the re-test dates in the file), the vascular risks are treated as brain-protection, and the family keeps the three-signs notebook. What is certain: she now has her true baseline, measured on a treated brain — the honest floor. And the medicine question follows from it: about a year at the full working dose after a first recovery, years for the episodes that have returned before (most have), the decision review-based and dated — never the prescription-and-forget pattern that harms." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "NICE / APA guideline tiers — geriatric depression pharmacotherapy, the hyponatraemia and falls evidence lineages, and the ECT positions in older adults" },
      { source: "Regulatory QT-ceiling advisories for citalopram in older adults — the dose ceiling remembered in the first-line choice" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.4 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "The Cochrane ECT-in-elderly evidence tier and the UK ECT Review Group appraisal — modern-ECT efficacy and cognitive safety in elders" },
    ],
    reviews: [
      { source: "Alexopoulos GS et al. — the vascular-depression construct, its treatment-response evidence and the executive-dysfunction syndrome line" },
      { source: "Fiske A et al. — geriatric depression phenomenology and course; Beekman AT et al. — the community epidemiology" },
      { source: "Kiloh LG's original pseudodementia construct, the Whyte EM and modern dementia-syndrome-of-depression lineages" },
      { source: "Mitchell AJ et al. — the depression-dementia risk-association meta-analyses (the follow-up map's rationale)" },
      { source: "Robinson RG et al. — post-stroke depression epidemiology and treatment evidence" },
      { source: "Shulman KI et al. — the late-onset mania secondary-cause evidence and lithium's geriatric narrow-margin pharmacology" },
      { source: "NMHS 2015–16 (Gururaj G et al., NIMHANS) — the geriatric depression prevalence and treatment gap; Census/UNFPA India ageing reports — the migration and empty-nest patterns" },
    ],
    patientResources: [
      { source: "The property-PAUSE letter, the stopped-activities question and the sleep-drop alarm — the three paper instruments this course hands to every Indian family" },
      { source: "Tele-MANAS 14416 (24×7, free) and the medical-college geriatric-clinic tier — the assessment, follow-up and crisis channels" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: not just ageing, the pseudodementia question, the medicine checks, the warning sentences.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The costumes, the ten-clue differential, the dose law, the watch-list, the ECT position.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything — the collateral-interview craft, the M-T-M-S-D discipline, the augmentation tier, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The not-just-ageing frame, the prevalence arithmetic, the masks and the mania rule.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state why the 'just ageing' reading is the diagnosis's biggest enemy and recite the two geriatric signatures cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The watershed engine, the retrieval-freeze, the loss-stack physics.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the vessels are part of the mood treatment and why the re-test judges the mask." },
    { number: 3, title: "Clinical Practice", description: "The costumes, the ten clues, the audit, the dose law, the ECT position.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the collateral interview, the HY-FIB prescription and the treatment-trial re-test without notes." },
    { number: 4, title: "Indian Context", description: "The budhapa dismissal, the migration empty-nest, the property-PAUSE instrument.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the property-pause conversation and the festival-visit screening question." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the pseudodementia essay and the late-onset mania workup essay cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.4 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Alexopoulos GS et al. — the vascular-depression construct, its treatment-response evidence and the executive-dysfunction syndrome line", sourceType: "review", year: "1993 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Fiske A et al. — geriatric depression phenomenology and course overview; Beekman AT et al. — the community epidemiology", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Kiloh LG — the original pseudodementia construct; Whyte EM and the modern dementia-syndrome-of-depression lineages", sourceType: "review", year: "1961 onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Mitchell AJ et al. — the depression-dementia risk-association meta-analyses (the follow-up-map rationale)", sourceType: "meta-analysis", year: "2010s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "NICE / APA guideline tiers — geriatric depression pharmacotherapy and ECT positions; the hyponatraemia and falls evidence lineages; the citalopram QT ceiling", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "The Cochrane ECT-in-elderly evidence tier and the UK ECT Review Group — modern-ECT efficacy and cognitive safety in elders", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Robinson RG et al. — post-stroke depression epidemiology and treatment evidence (the year-one prevalence and the rehabilitation bidirectionality)", sourceType: "primary", year: "1980s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Shulman KI et al. — the late-onset mania secondary-cause evidence and lithium's geriatric narrow-margin pharmacology", sourceType: "review", year: "1980s–2000s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "NMHS 2015–16 (Gururaj G et al., NIMHANS) — the geriatric depression prevalence, the urban-elderly band and the treatment gap", sourceType: "government", year: "2016", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Census of India / UNFPA India ageing reports — the migration and empty-nest demographic patterns of the Indian elderly", sourceType: "government", year: "2011 onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Indian service layer — the district-lab and ECT cost realities, the geriatric-clinic and DMHP delivery spine (approx 2026)", sourceType: "indian-guideline", year: "2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Epidemiology: community-dwelling elderly major depression roughly 2–5%, rising to a fifth or more among the medically ill, hospitalised and institutionalised, with subsyndromal depression several-fold higher; the course longer and more relapsing than young-adult depression; women treated more, men dying more.", grade: "established", sources: ["S1", "S3"] },
    { text: "The Indian tier: NMHS 2015–16 geriatric depression ~8–9% (roughly one in twelve elders), higher in urban metros (nearly one in five in the urban-elderly band), treatment gap above 85% — with the migration-empty-nest pattern, the joint family's dissolution into 'near but not with' arrangements, and the physician-OPD pain-and-weakness route as the structural frame.", grade: "established", sources: ["S10", "S11"] },
    { text: "The vascular-depression construct: lacunes and deep white-matter hyperintensities disrupting frontostriatal mood circuitry; the executive-dysfunction syndrome (executive slowing, apathy, sparse guilt-psychology); the weaker response to SSRI monotherapy, demanding augmentation and exercise — the model that shifted late-life depression from 'reactive to losses' to 'brain-vessel-burdened'.", grade: "supported", sources: ["S2"] },
    { text: "The pseudodementia differentiation: depression freezes RETRIEVAL while dementia destroys STORAGE — 'I don't know' with absent effort against the confabulated near-miss with genuine effort; onset weeks-months and datable against insidious years; the variability and cueing responses; and the treatment-trial re-test (treat the depression fully, then re-test at 3–6 months) as the final judge, because many elders carry both layers.", grade: "established", sources: ["S1", "S4"] },
    { text: "Late-life depression raises later dementia risk (the prodrome-or-risk-marker association) — the practical translation being full treatment of the depression plus dated cognitive monitoring of the recovered pseudodementia.", grade: "supported", sources: ["S5"] },
    { text: "Post-stroke depression affects roughly a third of stroke survivors at some point in year one, bidirectionally impairing stroke rehabilitation — making every stroke survivor a depression-screen candidate.", grade: "established", sources: ["S8"] },
    { text: "The geriatric pharmacotherapy discipline: sertraline and escitalopram first-line (the evidence-tolerability balance; citalopram's QT-dose ceiling); 'Start LOW, go SLOW, but GO' — titration to the full effective dose with the eternal-starter-dose failure documented; the 8–12-week response clock (versus 4–6 in younger adults); maintenance 12+ months after a first episode, 2–3 years or indefinite for the recurrent, the taper never abrupt; mirtazapine's niche for the appetite-lost insomniac wasting elder; TCAs avoided in elders.", grade: "established", sources: ["S1", "S6"] },
    { text: "The elder-specific SSRI watch-list (HY-FIB): hyponatraemia from SIADH with the sodium checked within the first month (more so with diuretics — the confusion-lethargy presentation misread as 'dementia worsening'); falls from sedation and orthostasis; the interaction ledger of the polypharmacy; GI bleeding with the NSAID co-prescription of the arthritis population.", grade: "established", sources: ["S6"] },
    { text: "ECT in elders: fast, effective and SAFE for the melancholic-psychotic band, the food-and-fluid-refusing wasting elder, the medication-intolerant and the severe suicidal states — the cognitive side-effects largely transient and monitored, the frail-body advantage the absence of a drug-interaction ledger; the film-era fear the barrier, the consent-and-family-education work the treatment's first session.", grade: "established", sources: ["S6", "S7"] },
    { text: "Late-onset mania (first episode after 50–60) is SECONDARY until proven otherwise: recent stroke (especially right-hemisphere and orbitofrontal territory), hyperthyroidism, dopaminergic medications (levodopa, the agonists), steroids and stimulant-adjacent remedies, frontotemporal dementia's disinhibition phase, delirium — with the M-T-M-S-D workup (MRI, Thyroid, Medications, Stroke-history, Delirium-screen) preceding any bipolar label.", grade: "established", sources: ["S1", "S9"] },
    { text: "Lithium's geriatric rules: start ~150–300 mg with levels at the lower therapeutic band ~0.4–0.7 in elders; the renal-function check always (GFR fallen by decades); NSAIDs and ACE-inhibitors RAISE lithium levels — the arthritis-painkiller-plus-lithium emergency; the thirst-urination-confusion toxicity triad taught to the family.", grade: "established", sources: ["S9"] },
    { text: "The Indian delivery layer: the geriatric-clinic and psychiatry-OPD spine at medical colleges with family-physician co-management carrying the month-one sodium check; the district-lab tier (TSH/B12/Na ≈ ₹500–1,000); sertraline ₹50–150/month, escitalopram ₹60–200, mirtazapine ₹80–250; the ECT course at government hospitals ₹100–500 per session at the public tier (private ₹2,000–5,000) — all approx 2026 — the modality whose under-use most costs Indian elders.", grade: "supported", sources: ["S10", "S12"] },
  ],
};
