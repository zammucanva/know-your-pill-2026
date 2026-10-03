import type { PsychiatryCourse } from "./types";

/**
 * ALCOHOL-RELATED DEMENTIA — canonical Psychiatry course
 * (migration batch 7, Group A — neurocognitive disorders, part 2 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/alcohol-related-dementia.md — untouched foundation),
 * re-researched against current guidance (the Harper neuropathology
 * series, the Victor-Adams-Collins tradition, the Schwarzinger French
 * national cohort, the Lancet Commission risk framing) with per-claim
 * provenance.
 *
 * Drug routes: sertraline and mirtazapine (the depression-rider tier
 * with the sleep-appetite consideration) have KYP lessons and are
 * linked; the naltrexone/acamprosate relapse-prevention tier, the
 * benzodiazepine withdrawal ladder and thiamine itself have no KYP
 * lessons and are recorded in contentGaps, never invented.
 */
export const alcoholRelatedDementiaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "alcohol-related-dementia",
  title: "Alcohol-Related Dementia",
  shortName: "ARD",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Alcohol-Related Dementia"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The dementia with an engine you can switch off, some of the lost mind can return",

  summary:
    "Alcohol-related dementia is cognitive impairment built on thiamine deficiency, repeated withdrawal, trauma and direct toxicity, with executive and amnesic faces. Abstinence and thiamine can return a meaningful fraction of the loss, and thiamine must precede every glucose load.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Trace the five damage channels (direct toxicity, thiamine deficiency, withdrawal kindling, trauma, hepatic disease) and map each to what is and is not recoverable.",
    "Recognise the two clinical faces: the amnesic face (Wernicke-Korsakoff) and the executive face (frontal-parietal decline in the still-functioning drinker).",
    "Distinguish confabulation from lying and from delirium, and explain the mechanism of each.",
    "Diagnose with the right workup: thiamine status, liver and metabolic panels, imaging atrophy patterns (frontal, vermis, white matter), and the differentials that change management (subdural, hepatic encephalopathy, NPH, hypothyroid, neurosyphilis).",
    "Manage the three-legged treatment: safe withdrawal, permanent thiamine, sustained abstinence with relapse prevention, and know the honest reversibility numbers.",
    "Apply the casualty rule: thiamine before glucose, every time, including the day the family brings him hypoglycaemic.",
    "Handle Indian realities: the arrack/IMFL pattern, the malnutrition partnership, de-addiction access and costs, the family's containment role, and the 'he only drinks socially' negotiation.",
  ],
  quickFacts: [
    { label: "The five channels", value: "Toxicity, thiamine, withdrawal, trauma, liver", detail: "Ethanol/acetaldehyde neurotoxicity; thiamine starvation (the Wernicke-Korsakoff route); repeated withdrawal kindling; falls and subdurals; hepatic encephalopathy: each channel carrying its own reversibility verdict" },
    { label: "The prevalence", value: "A quarter to a half impaired", detail: "Cognitive impairment demonstrable in roughly 25–50% of people with severe alcohol dependence; the French national cohort finding alcohol use disorders the strongest modifiable association with EARLY-ONSET dementia" },
    { label: "The two faces", value: "Executive and amnesic", detail: "The common face: frontal-parietal planning failure in the 'still functioning' drinker; the classic face: the Korsakoff memory hole with confabulation, apathy and preserved personality, one engine, two presentations" },
    { label: "The gait tells first", value: "The vermis walks before the mind fails", detail: "Wide-based, worse in the dark and the bath: the cerebellar vermis signature frequently present before any cognitive complaint is admitted; the drinker's stagger announcing the dementia years early" },
    { label: "The casualty rule", value: "B1 before D5", detail: "Thiamine before, during and after any glucose load: sugar without thiamine can precipitate the Wernicke catastrophe in an afternoon; the oldest one-line rule in this corner of medicine" },
    { label: "The reversibility map", value: "A quarter to a half returns", detail: "Thiamine-dependent damage, withdrawal fog and undetected subdurals yield most; the long-standing direct toxicity and the wasted vermis largely do not: months-scale improvement, abstinence the active ingredient" },
    { label: "The rare exam classic", value: "Marchiafava-Bignami", detail: "Corpus callosum degeneration in malnourished drinkers, one hand working against the other, the interhemispheric truce; originally Italian red-wine descriptions, arriving in Indian district hospitals with the arrack population" },
    { label: "The Indian signature", value: "Spirits + malnutrition + 'weakness'", detail: "IMFL and arrack/toddy patterns (calories without nutrition); the somatic front door ('weakness', 'gas', 'he falls'); the family ledger the only honest drinking history: the patient minimises by reflex" },
  ],
  knowledgeGraph: [
    { label: "Amnesic Syndromes", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The full Wernicke-Korsakoff account: the filing-circuit anatomy, the B1-before-D5 rule, the confabulation mechanism, the family-as-hippocampus system" },
    { label: "Vascular Dementia", type: "condition", href: "/psychiatry/vascular-dementia/", note: "The shared executive face and the shared subdural factory in the falling population: the CT that repays itself in both" },
    { label: "Frontotemporal Dementia", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The frontal disinhibition differential: the timeline and the drinking history separating the two" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The withdrawal and hepatic encephalopathy overlaps: the fluctuating states that interleave with the dementia's baseline" },
    { label: "Traumatic Brain Injury Neuropsychiatry", type: "condition", href: "/psychiatry/tbi-neuropsychiatry/", note: "The falls-and-subdural channel shared: the falling drinker's surgical emergency impersonating psychiatric decline" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The rider and the mimic: depression as both cause and product of the drinking, itself a cognitive fog" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "The insomnia-depression-drinking loop: the sleep tier that sustains the relapse engine" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The secondary cholinergic burden the frontal atrophy carries, and why the donepezil tier is not this disease's answer" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The solvent's first address: planning, judgement and inhibition eroding ahead of the memory store" },
    { label: "Cerebellar vermis", type: "brain-region", href: "#brain", note: "The balance machinery that shrivels early and visibly: the gait that announces the dementia years before the family names it" },
    { label: "Corpus callosum", type: "brain-region", href: "#brain", note: "The great bridge that Marchiafava-Bignami darkens: the interhemispheric disconnection of the malnourished drinker" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI tier for the depression rider: the fog that lifts when the mood does" },
    { label: "Mirtazapine", type: "drug", href: "/drugs/mirtazapine/", note: "Where the drinking took the sleep and the appetite with it: the nightly tier with morning-grogginess watched" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry alcohol-related dementia. The solvent years: ethanol is a fat-loving solvent and the brain is fat-rich; the damage of years lands where the fat and the wiring are, the frontal lobes and the white matter. The frontal circuits of planning, inhibition and judgement erode first, and their decay is the dementia's leading edge: the contractor whose estimates go wrong, the mother whose meals go unsalted twice, the driver whose vehicle drifts. White-matter loss slows the whole network: processing speed the first measurable casualty on testing. The vermis of the cerebellum, dense in the machinery of balance, shrivels early and visibly: the drinker's wide-based gait announcing the dementia years before the family recognises it. The famine wire: the thiamine-dependent machinery of the brain's memory-filing circuit runs out of its vitamin; the diencephalic hub seizes; the acute episode (confusion, eye-movement palsies, gait collapse) is the emergency, and the permanent residue is the Korsakoff face: the full account lives in the Amnesic Syndromes course, the essential discipline here: every cognitively impaired drinker gets thiamine before, during and after any glucose; the sugar-without-thiamine error can burn the remaining circuit in an afternoon. The split corpus: a rare but exam-heavy channel. Marchiafava-Bignami disease, a degeneration of the corpus callosum in malnourished heavy drinkers: one hand working against the other, progressive mutism, and in acute forms coma; the MRI's sagittal views showing the bridge dark and shrivelled.",
    steps: [
      "The solvent years: fat-loving ethanol in the fat-rich brain; frontal lobes and white matter take the damage; planning, inhibition and judgement erode first; processing speed the first measurable casualty.",
      "The vermis walks first: the cerebellar balance machinery shrivels early and visibly; the wide-based gait worse in the dark and the bath, announcing the dementia before any cognitive complaint is admitted.",
      "The famine wire: thiamine-dependent memory-filing machinery starves; the diencephalic hub (mammillary bodies, medial thalamus) seizes. Wernicke the emergency, Korsakoff the permanent residue.",
      "The casualty rule: glucose metabolism CONSUMES thiamine; the dextrose drip into a thiamine-empty circuit burns it; B1 before D5, every time.",
      "The withdrawal storms: repeated kindling; each withdrawal an excitotoxic storm accelerating the decline; the morning-drinking pattern damaging more than the same annual dose evenly drunk.",
      "The split corpus: Marchiafava-Bignami; the callosal bridge degenerating in the malnourished drinker; interhemispheric disconnection, the hands quarrelling, the exam name that walks into district hospitals.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-lobes", name: "Frontal lobes (the solvent's first address)", role: "Planning, inhibition and judgement erode first: the executive face's seat; the contractor's failed estimates and the driver's drifting vehicle.", grade: "established" },
    { id: "cerebellar-vermis", name: "Cerebellar vermis (the balance archive)", role: "Shrivels early and visibly: the wide-based gait worse in the dark and the bath; the sign that announces the dementia years before the family names it.", grade: "established" },
    { id: "mammillary-bodies", name: "Mammillary bodies and diencephalon", role: "The thiamine-famine's target: the filing circuit's hub; the Wernicke emergency's seat and the Korsakoff residue's (full account in the Amnesic Syndromes course).", grade: "established" },
    { id: "corpus-callosum", name: "Corpus callosum (the bridge)", role: "Marchiafava-Bignami's territory: sagittal MRI showing the darkened, thinned bridge; the interhemispheric disconnection of the malnourished drinker.", grade: "supported" },
    { id: "white-matter", name: "Deep white matter", role: "The solvent's and the withdrawal-storm's cabling casualty: slowed processing speed as the measurable first loss; partial recovery with abstinence's remyelination window.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "GABA", symbol: "GABA", role: "The receptor remodelling the chronic exposure produces: the tolerance architecture and the withdrawal storm's engine (each kindling episode an excitotoxic event).", grade: "established", drugConnection: "The benzodiazepine withdrawal ladder's logic: scheduled, inpatient where complicated; no KYP lesson, the discipline taught in the Alcohol Use Disorders tier." },
    { name: "Glutamate", symbol: "Glu", role: "The NMDA remodelling and the withdrawal excitotoxicity's other arm: the upregulated system that storms when the solvent is withdrawn.", grade: "established" },
    { name: "Serotonin", symbol: "5-HT", role: "The depression rider's chemistry: the fog that lifts when the mood is treated; the SSRI tier's target alongside the abstinence architecture.", grade: "supported", drugConnection: "Sertraline for the depression rider; mirtazapine where the sleep and appetite went with the drinking." },
    { name: "Acetylcholine", symbol: "ACh", role: "A secondary casualty of the frontal-parietal loss, and the honest reason the cholinesterase tier is NOT this disease's answer (unlike Alzheimer's).", grade: "proposed" },
  ],
  pathways: [
    {
      id: "solvent-pathway",
      name: "The solvent years (toxicity to executive dementia)",
      steps: [
        { label: "Fat-loving solvent, fat-rich brain", detail: "Ethanol and acetaldehyde injure neurons, white matter and frontal circuitry directly" },
        { label: "The frontal circuits erode", detail: "Planning, judgement, inhibition: the estimates that go wrong, the meals unsalted twice, the drifting vehicle" },
        { label: "The white matter slows", detail: "Processing speed the first measurable casualty on testing; the whole network's conduction diluted" },
        { label: "The vermis walks first", detail: "The wide-based gait announcing the dementia years before the family recognises it: worse in the dark and the bath" },
      ],
      clinicalManifestation: "The 55-year-old 'still functioning' drinker whose planning has quietly eroded: the executive face that the family excuses as 'not sharp anymore'.",
      grade: "established",
    },
    {
      id: "famine-wire-pathway",
      name: "The famine wire (thiamine to the memory hole)",
      steps: [
        { label: "The malnutrition partnership", detail: "Spirit calories without nutrition; absorption and storage both impaired by the alcohol itself" },
        { label: "The filing circuit starves", detail: "The thiamine-dependent machinery of the diencephalic hub fails: mammillary bodies, medial thalamus" },
        { label: "The emergency declares", detail: "Wernicke: confusion, eye-movement palsies, gait collapse; any ONE sign in the malnourished demanding parenteral thiamine now" },
        { label: "The residue remains", detail: "Korsakoff: the recording-room intact, the transfer-window closed; confabulation, apathy, preserved personality (the Amnesic Syndromes course's full account)" },
      ],
      clinicalManifestation: "The arrack labourer who plays cards and denies ever meeting the examiner: the tragedy legible in the preserved personality.",
      grade: "established",
    },
    {
      id: "recovery-map-pathway",
      name: "The recovery map (which channels yield)",
      steps: [
        { label: "The engine switches off", detail: "Abstinence: the single disease-modifying treatment this whole disease owns" },
        { label: "The thiamine-dependent tier yields", detail: "The famine's damage partially recovers with months of replacement: the recording returning in patches" },
        { label: "The fog clears", detail: "Withdrawal-storm smog and the hepatic fluctuation lift; the undetected subdural drains (the CT's repayment)" },
        { label: "The fixed ground holds", detail: "Long-standing direct toxicity and the wasted vermis largely do not return: the honest arithmetic: a quarter to a half improves, the rest is held" },
      ],
      clinicalManifestation: "The mill worker who recognised the subdural's evacuation anniversary and remembered his son's visit 'recently': recording returning in patches, months-scale.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "drinking-decades", time: "The drinking years", title: "The solvent at work", description: "Cumulative dose doing its quiet work: frontal circuits eroding, the vermis shrinking, the thiamine stores running empty; the gait the first sign the family dismisses.", phase: "onset" },
    { id: "wernicke-window", time: "The crises", title: "The emergency windows", description: "Wernicke episodes (confusion, eye-movement palsies, gait collapse): treated or missed; each missed episode deepening the eventual hole; the withdrawal storms kindling between.", phase: "onset" },
    { id: "presentation-era", time: "The presenting months", title: "'He keeps asking the same thing'", description: "The family arrives with the somatic front door ('weakness', 'gas', 'he falls', 'he does not eat') the loop questioning, the confabulation, or the quiet executive erosion in the still-functioning drinker.", phase: "peak" },
    { id: "treatment-years", time: "Months 1–12 of abstinence", title: "The recovery curve", description: "The quarter-to-half returning: thiamine replacement, the fog lifting, the subdural drained, the family contracted as monitors; improvement measured in months, the first wedding-season relapse survived or not.", phase: "duration" },
    { id: "established-era", time: "The long term", title: "Held ground and held drinks", description: "The abstinence-held plateau: apathy with orientation, supervised home routines, the family as hippocampus, or the continued-drinking decline (seizures, infection, death in a few years).", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Cognitive impairment is demonstrable in roughly a quarter to a half of people with severe alcohol dependence; a smaller hard-core fraction progress to full alcohol-related dementia. The Lancet-commission framing lists alcohol use disorders among the modifiable midlife risks, heavy use associated with roughly a doubling of later dementia odds; the French national cohort (the largest single contribution) found the strongest and strikingly independent association between alcohol use disorders and early-onset dementia: a substantial share of early-onset cases in that cohort attributable to alcohol. Wernicke-Korsakoff prevalence runs about 1–2% of the general population in Western autopsy series, concentrated in the malnourished-dependent, with post-mortem studies famously finding the majority of Wernicke cases missed during life.",
    indianPrevalence: "Per-capita pure-alcohol consumption has risen for decades: a large abstinent majority plus a heavy-drinking minority: roughly a third of adult men drink, and of drinkers a disproportionate share drink hazardously, largely spirits (IMFL and arrack/toddy rather than wine), which matters for thiamine: the calories of heavy spirit drinking arrive without any nutrition. Indian de-addiction settings commonly find executive deficits in a third or more of inpatients; the Korsakoff endpoint is comparatively under-reported: partly real (competing causes of death, the malnutrition difference), partly an under-diagnosis artefact (autopsy rare; the syndrome's pre-verbal stage, 'weakness' and 'fell down', being nobody's referral letter).",
    lifetimeRisk: "A quarter to a half of severe-dependence patients show measurable impairment; the female telescoping effect (the same damage at lower cumulative doses) narrowing the historical male dominance.",
    genderRatio: "Historically male-dominant, narrowing with consumption patterns; women reaching the same damage at lower cumulative doses: the telescoping effect.",
    ageOfOnset: "The executive face presents in the 50s: younger than the degenerative dementias and one of the commonest causes of early-onset cognitive decline in the drinking populations.",
    indianNotes: "The ALDH2 flushing allele (largely East-Asian, present in the Indian northeast and east) shifting both drinking and damage patterns; the arrack adulteration scares; the absence of a primary-care habit of asking about alcohol units: the family's honest ledger the only instrument that knows the truth.",
  },
  etiology: [
    { category: "biological", factor: "The five channels", details: "(1) Direct neurotoxicity: ethanol and acetaldehyde injuring neurons, white matter and frontal circuitry (GABA/NMDA receptor remodelling, apoptosis); (2) thiamine depletion: malnutrition, malabsorption, the enzyme demands of metabolism itself, plus the Indian non-alcoholic routes (hyperemesis of any cause, tuberculosis, prolonged fevers); (3) withdrawal kindling: each repeated storm an excitotoxic acceleration; (4) trauma: falls and subdurals (the coagulopathy factory); (5) hepatic disease: the fluctuating encephalopathy and the coagulopathy." },
    { category: "biological", factor: "The dose and pattern modifiers", details: "Severity tracking cumulative dose, spirit-predominance, fasting-drinking, binges on dependence; the withdrawal-with-every-morning pattern damaging more than the same annual dose evenly drunk." },
    { category: "genetic", factor: "The inherited tendencies", details: "Heritability of dependence itself substantial; no specific dementia gene for the damage, though thiamine-transporter variants and the ALDH2 flushing allele (northeast and east India) shifting both drinking and damage patterns." },
    { category: "psychological", factor: "The loop maintainers", details: "Depression and insomnia as both cause and product of the heavy drinking, each amplifying the cognitive complaints: the insomnia-depression-drinking loop that sustains relapse." },
    { category: "social", factor: "The Indian trade-offs", details: "Poverty-calorie arithmetic (liquor money replacing food); the occupation clusters (drivers, night-shift workers, brewing-adjacent trades); the social sanction structures (the worksite, the wedding season, the 'only beer now' bargain); loneliness and homelessness." },
  ],
  symptomClusters: [
    {
      category: "1. The executive face (the common presentation)",
      symptoms: ["Planning failure: money miscalculations, project abandonment, medication mismanagement", "Disinhibition or its opposite, apathy: the coarse joke at the wrong funeral, or the flat months of no initiative", "Speed and attention: slower answers, easier distraction, lost thread mid-sentence", "Visuospatial slips: dents on the car, misjudged steps", "Memory complaints real but milder than they feel: retrieval problems (the tip-of-the-tongue) more than recording failure (the whole conversation forgotten)", "The gait: wide-based, worse in the dark and the bath; the vermis signature, frequently present before any cognitive complaint is admitted"],
    },
    {
      category: "2. The Korsakoff face (the amnesic endpoint)",
      symptoms: ["Anterograde amnesia: the recording-room failure: the breakfast an hour ago is news; the same question on a three-minute loop; conversation, arithmetic and old stories intact (the islands of preserved ability that make the tragedy legible)", "Confabulation: the memory's public-relations instinct: fluent, plausible, utterly fictional filler delivered without discomfort when the gap is probed; NOT lying (no intent), NOT delirium (stable, awake background)", "Apathy, lack of insight, passivity: comfortable in his own repeated morning", "Retrograde amnesia graded to time: the recent past blurriest, childhood clearest"],
    },
    {
      category: "3. The interleaving states (what confuses the picture)",
      symptoms: ["Withdrawal tremulousness and morning confusion: the kindling's daily signature", "Hepatic flapping (asterixis) and day-night confusion: the encephalopathy's fluctuation", "Subdural headaches and drowsiness: the falling drinker's surgical emergency hiding in the noise", "The B12/folate neuropathy beneath the gait complaint: the peripheral layer the examination peels first"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The convergence logic",
      code: "No biomarker: four legs and a trial",
      criteria: [
        "A heavy-drinking history HONESTLY established: collateral history mandatory (the patient minimises by reflex; the family's first answer 'social only' usually doubles when asked specifically about quantities, morning drinking and money).",
        "A cognitive syndrome with the executive/visuospatial tilt and/or the Korsakoff structure (anterograde amnesia with confabulation and preserved immediate memory).",
        "Supportive imaging: frontal-predominant atrophy, sulcal widening, white-matter change, vermis shrinkage; the mammillary-body atrophy of Korsakoff on good-quality studies; the callosum if Marchiafava-Bignami is suspected.",
        "The exclusion of the mimics that change management, with the abstinence-plus-thiamine trial serving as both treatment and diagnostic test: partial improvement over months IS the confirmatory signature.",
      ],
      duration: "Months-scale confirmation: the improvement curve that seals the diagnosis after the abstinence hold.",
      indianNote: "The three clinical moments that decide everything: (1) the collateral drinking history taken privately and specifically; (2) the CT every one of these patients deserves (the subdural yield is high in the falling drinker); (3) the abstinence-plus-thiamine trial carried past the first week: the family that expects a week's miracle abandons exactly when the curve turns.",
    },
    {
      system: "The work-up",
      code: "Bloods, imaging, weighted testing",
      criteria: [
        "Bloods: thiamine status where available (erythrocyte transketolase, mostly unavailable; clinical replacement proceeds regardless), full liver panel, coagulation (the subdural factory's flag), B12, folate, thyroid, syphilis and HIV serology, renal function, glucose.",
        "Imaging: CT to clear the subdural; MRI preferred where affordable (frontal atrophy, white matter, vermis, mammillary bodies, the callosum).",
        "Cognitive testing frontal-executive-forward: trail-making, fluency, clock-drawing; the memory-only screen misses the common face; literacy-adjusted tools as in the MCI tier.",
        "The mimic table that changes management: subdural (imaging, drainable), hepatic encephalopathy (fluctuating, asterixis, treatable), NPH (gait-first, shuntable), hypothyroid/B12 (bloods, replaceable), neurosyphilis/HIV (serology, treatable), Alzheimer's or vascular riding with the drinking (the honest position: alcohol accelerates both; the treatment of both is abstinence-plus-vascular-care anyway).",
      ],
      duration: "The work-up runs alongside the treatment that has already begun: thiamine from hour zero, the withdrawal ladder, the nutritional rehabilitation; the diagnostic confirmation arriving as the recovery curve.",
      indianNote: "The presentation is usually late, brought by a spouse or sons, framed as 'weakness', 'gas', 'he falls', 'he does not eat': the somatic front door the OPD hears instead of the cognitive complaint.",
    },
  ],
  severityScales: [
    {
      name: "The two-face staging",
      fullName: "Executive-to-amnesic progression ladder",
      measures: "Where the person stands between the treatable executive face and the fixed amnesic endpoint.",
      ranges: [
        { min: 0, max: 0, severity: "The executive face, drinking ongoing", action: "The full work-up (the CT's subdural yield, the bloods, the liver panel), the collateral drinking history, and the intervention architecture prepared: the family contracted, the de-addiction tier linked, the thiamine begun" },
        { min: 1, max: 1, severity: "The abstinence window opening", action: "Safe withdrawal (inpatient where complicated: seizures, delirium tremens history, comorbidity, no home support); thiamine generously from hour zero and indefinitely; the relapse-prevention tier begun (naltrexone/acamprosate; disulfiram's poor fit in established dementia noted)" },
        { min: 2, max: 2, severity: "The Korsakoff endpoint", action: "The Amnesic Syndromes course's home system: routine-and-labels, the family as hippocampus, one-encounter honesty, safety locks; plus permanent thiamine and the abstinence architecture maintained by the family (the patient cannot self-track)" },
      ],
      indianNote: "Improvement in this disease is measured in MONTHS: the family that expects a week's miracle abandons exactly when the curve turns; the expectation-setting script delivered at the first consultation.",
    },
    {
      name: "The mimic ladder",
      fullName: "The interleaving-states screen",
      measures: "What is treatable TODAY in the fluctuating picture: the layers the examination peels.",
      ranges: [
        { min: 0, max: 0, severity: "The fluctuating days", action: "Hepatic encephalopathy (asterixis, day-night reversal, the ammonia-clinical correlation) and withdrawal states treated as their own emergencies: neither is 'the dementia', and both lift with treatment" },
        { min: 1, max: 1, severity: "The surgical layer", action: "The subdural cleared on CT: the falling drinker's drainable recovery; the coagulopathy managed with the treating team" },
        { min: 2, max: 2, severity: "The replaceable deficiencies", action: "Thiamine (always first), B12, folate, magnesium: the deficiency tier that carries more recoverable mind than any other single act in this disease" },
      ],
      indianNote: "Each peeled layer is either treatable or stabilising: the examining clinician's task stated in one line: peel them one at a time.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Wernicke-Korsakoff syndrome (the amnesic face itself)", distinguishingFeatures: "The punched-out new-memory hole with preserved immediate memory, personality and old knowledge: confabulation early, apathy present.", keyDifferentiator: "The architecture distinguishes it from the diffuse executive decline: one function punched out versus everything slowed; the two faces can coexist (the compressed account lives in the Amnesic Syndromes course)." },
    { condition: "Chronic subdural haematoma", distinguishingFeatures: "Weeks-delayed drowsiness, headache, focal signs in the falling drinker: the drainable mimic.", keyDifferentiator: "The CT every one of these patients deserves; the evacuation that returns a fraction of mind no tablet reaches." },
    { condition: "Hepatic encephalopathy", distinguishingFeatures: "The fluctuating impostor: day-night reversal, asterixis, the ammonia-clinical correlation; treatable, recurrent, and always masquerading as 'the dementia worsening'.", keyDifferentiator: "The fluctuation pattern and the flap; the liver panel; the lactulose-tier response." },
    { condition: "Normal-pressure hydrocephalus", distinguishingFeatures: "Gait-first, incontinence early, ventricles large without cortical shrinkage: the shuntable mimic in a population whose gait is already wide.", keyDifferentiator: "The imaging's proportion; the gait-cognition order; the neurosurgical door." },
    { condition: "Depression with cognitive fog", distinguishingFeatures: "The weeks-months mood picture with effort-dependent testing: itself both cause and product of the drinking.", keyDifferentiator: "The mood screen and the SSRI trial's double life; the abstinence trial clarifying the residual." },
    { condition: "Alzheimer's or vascular dementia riding with the drinking", distinguishingFeatures: "The honest position: alcohol accelerates both; the separation partly academic, the treatment of BOTH being abstinence-plus-vascular-care.", keyDifferentiator: "The convergence logic accepts the mixture: the abstinence-plus-thiamine trial runs, the vascular programme rides alongside, and the trajectory (not the label) directs the plan." },
  ],
  management: [
    { category: "pharmacotherapy", name: "Stop the engine: withdrawal safely first", description: "Complicated withdrawal (seizures, delirium tremens history, comorbidity, no home support) is inpatient: benzodiazepine-scheduled withdrawal, thiamine from hour zero (the B1-before-B5 rule of the Amnesic note), electrolyte correction; the full ladder belongs to the Alcohol Use Disorders tier.", whenToUse: "Before any cognitive rehabilitation makes sense. The engine off is the precondition for everything else.", indianContext: "Supervised home withdrawal where the family can hold it and the picture is uncomplicated; the district de-addiction centre and DMHP psychiatric tier as the inpatient channel." },
    { category: "pharmacotherapy", name: "Thiamine, generously and indefinitely", description: "High-dose oral thiamine continued for months and in Korsakoff states for LIFE; the dose details belong to the Amnesic Syndromes course: here the law: no glucose-loading without thiamine alongside, EVER, including the day the family brings him hypoglycaemic to the casualty.", whenToUse: "From the first contact, before, during and after any glucose load; indefinitely thereafter.", indianContext: "Thiamine is cheap and universally available (approx ₹10–30 per month of high-dose tablets, 2026). The barrier is never the pharmacy; it is the diagnosis and the engagement." },
    { category: "pharmacotherapy", name: "The abstinence architecture", description: "Relapse prevention with naltrexone/acamprosate (no CNS toxicity, unlike disulfiram, which needs its own cautions in the cognitively impaired: forgettable tablets and reaction teaching make it a poor fit in established dementia); the de-addiction programme; AA linkage (the Group Therapy course's card); the family contract and monitoring. Abstinence is the single disease-modifying treatment this whole disease owns.", whenToUse: "From the first stabilized contact, built to survive the first wedding season.", indianContext: "Naltrexone modestly priced where sourced (₹200–500 monthly, 2026); the family's containment role the Indian delivery channel: the contract, the monitor, the follow-through." },
    { category: "lifestyle", name: "Rehabilitation of what returns", description: "Cognitive rehabilitation in the memory-rehab tradition (errorless learning, prosthetic memory, external aids, routines, the family as the hippocampus); gait physiotherapy; balance and fall-prevention audit at home.", whenToUse: "From the second month of the abstinence window, as the fog lifts and the budget returns.", indianContext: "The Memory Rehabilitation course's household-prosthetic package (the wall calendar, the one-place rule, the chai-anchored medicines) formalising the systems the Indian household already runs." },
    { category: "lifestyle", name: "The riders and the family's future", description: "Depression treated (itself a cognitive fog; mirtazapine where sleep and appetite need help); insomnia managed (CBT-I principles, sedative restraint); epilepsy if seizures have occurred. The caregiver conversation; the financial protection conversation (impaired judgement plus the drinking has already cost enough, nominated-early financial safeguards with the family); the driving conversation held early and honestly.", whenToUse: "From diagnosis, reviewed at every visit: the riders amplify the cognitive load more often than acknowledged.", indianContext: "The cultural negotiation: the drinking often has social sanction (the worksite, the wedding season, the 'only beer now' bargain). The medical frame ('this is a dementia, and the alcohol is its engine') delivered to patient and family together with the CT films on the table converts a moral argument into a medical plan better than any lecture on units." },
  ],
  safety: {
    redFlags: [
      "The hypoglycaemic drinker arriving drowsy to casualty: thiamine BEFORE the dextrose, every time: the sugar-without-thiamine error can burn the remaining circuit in an afternoon",
      "Weeks-delayed drowsiness or headache in the falling drinker: the chronic subdural: the CT before the label",
      "Withdrawal storms: seizures or delirium tremens history; inpatient withdrawal, never a home gamble",
      "New fever with stiffness after any antipsychotic for agitation: the neuroleptic-malignant rule (the withdrawal-storm confusion the dangerous setting)",
      "The refeeding window: starvation plus carbohydrate load; the refeeding-syndrome discipline (calories low, thiamine and electrolytes first)",
      "Hepatic deterioration with asterixis and day-night reversal: the encephalopathy treated as its own emergency, not 'the dementia worsening'",
    ],
    urgentGuidance:
      "The order of operations: (1) thiamine before any glucose; the casualty rule that holds in every emergency department; (2) the CT for every cognitively impaired drinker (the subdural yield is the recovery that repays the scan); (3) complicated withdrawal managed inpatient with the scheduled benzodiazepine ladder; (4) the hepatic and electrolyte layer treated as its own emergency; (5) the abstinence-plus-thiamine trial carried PAST the first week: the months-scale expectation set at the first consultation; (6) the family contracted as monitors with the financial safeguards and the driving conversation held early.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The SSRI tier for the depression rider",
      rationale: "Depression in this population is both cause and product of the drinking, and itself a cognitive fog, treating it lifts a layer no cholinesterase inhibitor reaches; the SSRI chosen for tolerability in a liver-compromised, sleep-disrupted population with the interaction review held.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-targeted comorbidity care: the disease-modifying treatment is the abstinence-plus-thiamine architecture; the SSRI treats the rider that amplifies the fog.",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      role: "Where the drinking took the sleep and the appetite with it",
      rationale: "The insomnia-appression-appetite triad in one nightly dose: the malnourished, sleepless, depressed drinker's symptomatic tier; the morning grogginess watched and balanced against the night it bought (the processing budget it serves).",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "The sedative load weighed at every review: the sleep programme (hygiene, rhythm) running underneath, and the abstinence architecture remaining the disease modification.",
    },
  ],
  contentGaps: [
    "The relapse-prevention tier (naltrexone, acamprosate, and disulfiram's documented poor fit in established dementia) has no KYP drug lessons; the abstinence architecture is taught here.",
    "The benzodiazepine withdrawal ladder (scheduled, inpatient where complicated) has no KYP lessons: the discipline belongs to the Alcohol Use Disorders tier and is referenced, not duplicated, here.",
    "Thiamine itself (the prevention's whole pharmacology) has no KYP drug lesson; the B1-before-D5 rule is taught in this course and the Amnesic Syndromes course.",
    "The cholinesterase-inhibitor tier (not this disease's answer, the honest contrast with Alzheimer's) is documented as a refusal, not a route.",
    "The donepezil/memantine absence noted: no tablet family substitutes for the engine-off; documented so no KYP route implies otherwise.",
  ],
  patientGuide: {
    whatIsIt:
      "This is thinking and memory loss caused by long heavy drinking, through several channels at once: the alcohol itself injuring the brain directly, the vitamin starvation that travels with heavy spirit drinking, the repeated withdrawal storms, the falls and blood clots, and the liver's chemistry. Its two faces: the common one, a quiet erosion of planning, judgement and speed; and the rare classic one, a punched-out hole in new memory. The most hopeful fact in this disease: it can be HALTED, and part of what was lost comes back; a quarter to a half of the lost sharpness can return over months of stopping the drinking and taking the vitamin.",
    whatCausesIt:
      "Alcohol is a solvent that concentrates in the brain's fat; years of it erode the frontal manager offices and the wiring between them. Heavy spirit drinking also starves the brain of vitamin B1 (thiamine) (the liquor replaces the meals and blocks the vitamin) and B1 is what the memory-filing circuit runs on. The falls cause blood clots on the brain that look like worsening dementia; the liver's failure adds its own confusion.",
    symptoms:
      "Thinking: slower answers, planning failures (money, projects, medicines), distraction, dents on the vehicle from misjudged distances. Memory: in the common face, tip-of-the-tongue retrieval trouble; in the classic face, a recording failure: the same question every three minutes, with conversation and old stories intact. Behaviour: disinhibition or apathy; occasionally compulsions from nothing. Body: the wide-based unsteady walk (worse in the dark), falls, nerve tingling. Warnings needing same-day care: drowsiness worsening weeks after any fall, fever with stiffness on any new sedative, or a confusion episode with vomiting and double vision.",
    treatment:
      "The treatment has a strict order. First: safe withdrawal from the alcohol (in hospital where fits or severe shakes are possible) with the vitamin started from day one. Second: thiamine, generously and indefinitely; the one-pill rule that protects what remains; no glucose drip ever without the vitamin alongside. Third: the abstinence architecture (the relapse-prevention medicine, the de-addiction programme, the family contract) because stopping the drinking is the single disease-modifying treatment this disease owns. Alongside: the depression and sleep treated, the gait physiotherapy, the home falls-audit, and (where the memory hole is established) the routine-and-labels home system taught to the family.",
    selfHelp: [
      "The months-scale expectation written on the wall: improvement is measured in months, not weeks; the family that expects a week's miracle abandons exactly when the curve turns.",
      "The one-pill discipline: thiamine daily, forever in the established memory loss; the cheapest brain protection in the house.",
      "The family ledger: bottles, money, mornings; the honest drinking history the family (not the patient) holds; bring it to every appointment.",
      "The falls-audit: rails, night lighting, footwear, the floor mattress; the falling drinker's fracture prevention and the subdural factory's shutdown.",
      "The wedding-season plan: the relapse risk's calendar named in advance, who monitors, what the contract says, what happens the morning after the first slip.",
      "The routine-and-labels system for the memory hole: fixed rooms, fixed faces, clocks, calendars, one written instruction per consultation.",
      "The financial safeguards: nominations, joint mandates, the impaired-judgement conversation held early and kindly.",
    ],
    whenToSeekHelp: [
      "Drowsiness or headache worsening weeks after any fall: hospital the same day (the drainable blood clot)",
      "A confusion episode with double vision, vomiting or unsteadiness appearing suddenly: the vitamin emergency (Wernicke); hospital now",
      "Withdrawal shakes, sweating, or a fit: inpatient withdrawal, never a home gamble",
      "Fever with muscle stiffness after any new sedative: stop and seek emergency care",
      "The driving question: the impaired judgement and the fits both answer it: ask the doctor, not the family's optimism",
      "The caregiver's own collapse: the spouse carrying the drinking, the memory and the falls needs her own treatment",
    ],
    indianResources: [
      "The district de-addiction centre and the DMHP psychiatric tier: the withdrawal and relapse-prevention channel",
      "Thiamine through Jan Aushadhi and every primary-health channel: the approx ₹10–30/month protection",
      "Tele-MANAS 14416 (24×7, free), for the family's distress, the relapse crises and the caregiver's own exhaustion",
      "The family contract template: ask the treating team for the written version at the next visit",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific alcohol-related-dementia pathway exists; practice follows the DSM-5 'major neurocognitive disorder due to alcohol' framing with the de-addiction programme structures (district centres, DMHP psychiatric tier) as the delivery spine and the abstinence-plus-thiamine trial as both treatment and confirmation.",
    systemContext: "The presentation is usually late, brought by a spouse or sons, framed as general 'weakness', 'gas', 'he falls' or 'he does not eat'. Psychiatry is consulted for the behaviour or the confusion; the drinking history is nobody's first question unless the family volunteers it: the three clinical moments (the private collateral history, the CT, the trial carried past the first week) decide everything.",
    programmeContext: "De-addiction access through district de-addiction centres and DMHP psychiatric care; thiamine cheap and universally available; naltrexone modestly priced where sourced; the family usually provides the ward and the supervision: the containment role that the contract formalises.",
    costConsiderations: "The effective programme is nearly free (thiamine approx ₹10–30/month, the de-addiction tier free to few-thousand rupees, a CT where indicated); the barrier is never the pharmacy. It is the diagnosis and the engagement; the expensive items are the imaging and the medico-legal time; the scarcest is the follow-up structure the family must become.",
    culturalConsiderations: "The drinking often carries social sanction (the worksite, the wedding season, the 'only beer now' bargain). The medical frame ('this is a dementia, and the alcohol is its engine') delivered to patient and family together WITH THE CT FILMS ON THE TABLE converts a moral argument into a medical plan better than any lecture on units. The states' prohibition experiments and arrack crackdowns change the map of supply, not the clinical entity; the clinician's country-wide constant is the malnutrition-drinking partnership and the missed thiamine. The ALDH2 flushing allele in the northeast and east shifts both drinking and damage patterns: the population's genetics written on the face after the first drink.",
    patientCounselling: [
      "The one-line philosophy: 'The dementia has an engine, and the engine can be switched off; the drinking stopped, the vitamin taken, the months given: a quarter to a half of what was lost comes back, and holding the rest is victory.'",
      "The casualty rule to every family: 'No sugar drip without the vitamin alongside; ever; the sweetness can burn the wiring the vitamin protects.'",
      "The gait script: 'The wide-based walk is the balance machinery's own injury; it arrived before the memory trouble and it improves with the same treatment: abstinence, vitamin, physiotherapy.'",
      "The confabulation script: 'He is not lying; the memory's gaps fill themselves, and the filler sounds fluent because the wit is intact; arguing with it teaches the family nothing but distress.'",
      "The wedding-season script: 'The relapse risk has a calendar; name it in advance, decide who monitors, and write what happens the morning after the first slip before the season starts.'",
      "The financial-safeguards script: 'The judgement that the drinking eroded is the judgement the money needs; nominations and joint mandates now, kindly, while the participation is real.'",
    ],
  },
  decisionPath: {
    title: "The drinker whose mind is going",
    nodes: [
      {
        id: "start",
        question: "A heavy-drinking history (or the suspicion of one) with cognitive decline. First: the face and the tempo.",
        branches: [
          { label: "Quiet executive erosion, months-years", next: "executive-gate" },
          { label: "The memory loop and the stories", next: "korsakoff-gate" },
          { label: "Fluctuating, day-night reversal, flap", next: "hepatic-path" },
          { label: "Drowsiness worsening weeks after a fall", next: "subdural-path" },
        ],
      },
      {
        id: "subdural-path",
        question: "The falling drinker's surgical emergency.",
        recommendation: "Urgent CT: the chronic subdural (the coagulopathy factory's product); the drainable recovery that repays the scan; the coagulopathy managed with the treating team; no psychotropic or label before the image.",
      },
      {
        id: "hepatic-path",
        question: "The fluctuating impostor: hepatic encephalopathy.",
        recommendation: "Treated as its own emergency: the asterixis and day-night pattern, the ammonia-clinical correlation, the lactulose tier with the physicians; the 'dementia worsening' reading deferred until the episode lifts.",
      },
      {
        id: "korsakoff-gate",
        question: "The amnesic face: the three-minute loop, the confabulation, the preserved personality.",
        recommendation: "The Amnesic Syndromes course's full account: the architecture confirmed at the bedside (immediate intact, recent ruined, remote retained); thiamine generously and permanently NOW; the active Wernicke signs sought (eye movements, gait) and treated first; the home system taught; the abstinence architecture run by the family.",
      },
      {
        id: "executive-gate",
        question: "The common face: planning, judgement, speed eroding in the still-functioning drinker.",
        branches: [
          { label: "Drinking history established (collateral)", next: "ard-workup" },
          { label: "History denied, family unsure", next: "ledger-gate" },
          { label: "Mood picture dominant", next: "depression-path" },
        ],
      },
      {
        id: "ledger-gate",
        question: "The family ledger: the drinking history nobody volunteers.",
        recommendation: "The private, specific collateral history (quantities, years, morning drinking, money spent, the family's honest ledger): the first answer 'social only' usually doubles when asked specifically; where the ledger clears him, the other causes hunted with the same energy: the point is the checking, not the label.",
      },
      {
        id: "ard-workup",
        question: "The convergence work-up.",
        recommendation: "Bloods (liver panel, coagulation, B12, folate, thyroid, syphilis, HIV, glucose, thiamine status where available, clinical replacement regardless); CT to clear the subdural (MRI where affordable: frontal atrophy, white matter, vermis, mammillary bodies, the callosum); frontal-executive-forward cognitive testing (the memory-only screen misses the common face); the abstinence-plus-thiamine trial framed as BOTH treatment and confirmation.",
      },
      {
        id: "depression-path",
        question: "The mood picture: cause, product and amplifier.",
        recommendation: "The SSRI tier (sertraline; mirtazapine where sleep and appetite went), the abstinence trial running alongside: the depression treated and the residual reassessed: the improvement that leaves the executive pattern is the two-layer answer.",
      },
      {
        id: "management-gate",
        question: "Alcohol-related dementia confirmed. The three-legged treatment, in order:",
        branches: [
          { label: "Withdrawal safety first", next: "withdrawal-path" },
          { label: "The thiamine law (always)", next: "thiamine-path" },
          { label: "The abstinence architecture", next: "abstinence-path" },
          { label: "The family's future", next: "family-path" },
        ],
      },
      {
        id: "withdrawal-path",
        question: "The engine off, safely.",
        recommendation: "Complicated withdrawal (seizures, DT history, comorbidity, no home support) inpatient: the scheduled benzodiazepine ladder, thiamine from hour zero, electrolytes; the uncomplicated picture supervised at home where the family can hold it.",
      },
      {
        id: "thiamine-path",
        question: "The one-pill law: generously, indefinitely.",
        recommendation: "High-dose oral thiamine for months, for LIFE in the Korsakoff states; no glucose-loading without it, including the casualty arrival; magnesium replaced alongside; the refeeding discipline where starvation was the route.",
      },
      {
        id: "abstinence-path",
        question: "The single disease-modifying treatment.",
        recommendation: "Naltrexone or acamprosate for relapse prevention (no CNS toxicity; disulfiram's forgettable-tablet problem documented as the poor fit); the de-addiction programme; the AA linkage; the family contract with the wedding-season plan written before the season; the relapse-care plan for the morning after the first slip.",
      },
      {
        id: "family-path",
        question: "The household's future and the caregiver's endurance.",
        recommendation: "The financial safeguards (nominations, joint mandates) held early while participation is real; the driving conversation; the routine-and-labels home system for the memory hole; the caregiver's own health audited: the spouse carrying the drinking, the memory and the falls is the treatment's load-bearing wall.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading confabulation as intentional lying (or confronting it)",
      why: "The fluent fictional filler is offered without intent to deceive: the memory's gaps filling themselves; confrontation exhausts the family and teaches the patient nothing but shame.",
      correction: "The mechanism taught: honest retrieval of material never filed; the response is gentle orientation and one-encounter honesty: the argument declined, the visit re-introduced.",
    },
    {
      mistake: "Giving the dextrose drip before the thiamine",
      why: "The casualty classic: the hypoglycaemic malnourished drinker whose glucose load burns the thiamine-empty circuit in an afternoon; the iatrogenic amplifier that turns a recoverable picture into the permanent hole.",
      correction: "B1 before D5, every time: the house rule audited monthly in every emergency department and maternity ward (the hyperemesis mothers share the rule).",
    },
    {
      mistake: "Treating thiamine only during the acute episodes",
      why: "The replacement stopped when the eyes recovered: the months-to-life continuation forgotten; the deficiency quietly re-deepens between the visible crises.",
      correction: "The duration law: high-dose oral thiamine for months after every episode, for LIFE in the Korsakoff states; the cheapest brain protection in the house.",
    },
    {
      mistake: "Promising full recovery (or none) to the family",
      why: "The inflated promise collapses at the plateau and the family abandons; the nihilistic promise withholds the treatment that works, both lose the quarter-to-half that abstinence returns.",
      correction: "The honest arithmetic scripted at the first consultation: a quarter to a half improves over months, the rest is held ground, and holding it is victory. The expectation set before the first week's miracle fails.",
    },
    {
      mistake: "Missing the subdural in the falling drinker",
      why: "The drowsiness and the personality change read as 'the drinking's dementia': the drainable clot's window closing while the label settles.",
      correction: "The CT every cognitively impaired drinker deserves: the falling population's surgical yield is the recovery that repays the scan.",
    },
    {
      mistake: "Prescribing disulfiram in the established dementia",
      why: "The forgettable tablet and the reaction-teaching demand exactly the memory and judgement the disease has taken. The fit that fails by design.",
      correction: "The naltrexone/acamprosate tier (no CNS toxicity) as the pharmacological relapse prevention; the family contract carrying the adherence the patient cannot self-track.",
    },
    {
      mistake: "Accepting 'he only drinks socially' as the history",
      why: "The patient minimises by reflex and the family's first answer protects him. The quantities, the mornings and the money stay hidden unless asked specifically.",
      correction: "The private, specific collateral ledger: quantities by bottle, years by decade, morning drinking, money spent; the first answer usually doubles when the questions get specific.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The five damage channels with the reversibility verdict on each: toxicity (fixed), thiamine (yields), withdrawal kindling (yields), trauma/subdural (drains), hepatic (treats).",
        "The two faces on four axes: onset memory, error type on testing, insight, prognosis; the executive against the amnesic presentation of one disease.",
        "Confabulation defined and distinguished from lying and delirium: no intent, stable awake background; the fluent filler of gaps.",
        "The B1-before-D5 rule with the chemistry in one sentence: glucose metabolism consumes thiamine.",
        "Marchiafava-Bignami: the callosal degeneration of malnourished drinkers; the answer to 'which condition causes interhemispheric disconnection signs'.",
      ],
      practical: [
        "Take the collateral drinking history privately and specifically: the quantities, the mornings, the money; demonstrate the doubling of the first answer.",
        "Demonstrate the bedside Korsakoff architecture: registration → immediate recall intact → 5-minute recall gone → remote memory intact → the seamless working conversation.",
      ],
      longAnswer: [
        "A 55-year-old chronic spirit drinker presents with two years of declining planning ability and a wide-based gait: assessment and management (the evergreen ARD essay, the channels, the faces, the CT, the three-legged treatment).",
        "Alcohol-related cognitive impairment: mechanisms, reversibility, and the prevention message.",
      ],
    },
    neetPg: {
      highYield: [
        "THE FIVE CHANNELS: direct toxicity (frontal, white matter, largely fixed); thiamine deficiency (Wernicke-Korsakoff, partially yields); withdrawal kindling (excitotoxic, yields); trauma (subdurals, drainable); hepatic encephalopathy (fluctuating, treatable).",
        "THE PREVALENCE: a quarter to a half of severe dependence measurably impaired; the French national cohort: alcohol use disorders the strongest modifiable association with EARLY-ONSET dementia.",
        "THE TWO FACES: executive (frontal-parietal, the common presentation) and amnesic (Korsakoff: anterograde amnesia + confabulation + apathy + preserved personality and immediate memory).",
        "THE GAIT SIGN: cerebellar vermis atrophy; wide-based, worse in the dark/bath, PRESENTING BEFORE the cognitive complaint: 'the vermis walks first'.",
        "THE CASUALTY RULE: thiamine BEFORE glucose. B1 before D5; glucose metabolism consumes thiamine; the dextrose drip into an empty circuit burns it.",
        "CONFABULATION: fluent unplanned filling of memory gaps WITHOUT intent to deceive; the contrast with malingering; fades over months in most.",
        "MARCHIAFAVA-BIGNAMI: corpus callosum degeneration in malnourished drinkers; interhemispheric disconnection signs (the hands quarrelling); sagittal MRI the view.",
        "THE IMAGING PATTERN: frontal-predominant atrophy + vermis shrinkage + white-matter change (+ mammillary-body atrophy in Korsakoff); 'which dementia shows cerebellar atrophy with the cognitive decline'.",
        "THE REVERSIBILITY RANKING: thiamine-dependent > withdrawal-fog > subdural/medical riders > direct-toxicity-and-vermis; the exam's moral.",
        "THE TREATMENT TRIAD: safe withdrawal → permanent thiamine → sustained abstinence (naltrexone/acamprosate; disulfiram the poor fit in established dementia).",
        "THE WERNICKE-KORSAKOFF EPIDEMIOLOGY: ~1–2% of Western autopsy populations, the majority of cases MISSED during life.",
        "THE INDIAN ROUTES: hyperemesis, starvation, tuberculosis; the non-alcoholic thiamine crises sharing the sequence rule.",
      ],
      pyqConcepts: [
        "The B1-before-glucose casualty rule: the one-line answer that appears in every exam tier.",
        "The French national cohort finding: the discussion-question magnet on modifiable early-onset dementia risk.",
        "The CT yield in the falling drinker: the subdural as the discussion's twist.",
        "The confabulation definition: the classic short note distinguishing it from lying and delirium.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 58-year-old Coimbatore mill worker with thirty years of daily arrack, brought for 'he keeps asking the same thing': disorientation to date, three-minute loop questioning, wide-based gait, tip-of-the-tongue word failures; the CT showing frontal sulcal widening PLUS a small chronic subdural from a fall nobody logged; the evacuation, the high-dose thiamine, the supervised home detoxification, the family contracted as monitors, and at three months the loop questioning resolved to occasional, the orientation stable, the gait narrower, the recognition of the subdural's evacuation anniversary and the son's 'recent' visit proving the recording returning in patches: the subdural yield, the months-scale, the family-as-hippocampus contract, and partial return as the honest prize.",
        "A 46-year-old malnourished Vijayawada man presenting with apathy, incontinence and the odd new sign of the right hand buttoning while the left unbuttons (on request unable to mirror the greeting gesture: the MRI sagittal sequences showing the corpus callosum dark and thinned, Marchiafava-Bignami) thiamine, feeding, supervised abstinence, the interhemispheric truce partially restored over two months: the callosal classic in the malnourished spirits-drinker, the exam name that walks into district hospitals.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Sustained abstinence = the single disease-modifying treatment.",
        "The hands-quarrel sign points to the corpus callosum: Marchiafava-Bignami.",
        "Confabulation: fluent gap-filling without intent to deceive.",
        "Thiamine alongside (before) glucose, always.",
        "The wide-based gait precedes the cognitive complaint: vermis atrophy.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The family's honest ledger is the only drinking history that exists: the private, specific questions (bottles, money, mornings) that double the first answer, asked without the patient's elders in the room.",
        "The CT every cognitively impaired drinker deserves is the consultation's highest-yield single order: the subdural's drainage returning a fraction of mind that no tablet family reaches.",
        "The months-scale expectation scripted at the FIRST consultation is the treatment's guardian: the family that expects a week's miracle abandons exactly when the curve turns.",
        "The medical frame delivered with the CT films on the table converts the moral argument into a treatment plan: 'this is a dementia, and the alcohol is its engine' beats every units-lecture the OPD has ever delivered.",
        "The financial-safeguards conversation is clinical work in this disease: the impaired judgement plus the drinking has already cost the household enough; the nominations and joint mandates held early, kindly, while the participation is real.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The partly-returned mind",
      presentation: "Thirty years of daily arrack, a three-minute question loop, and a fall nobody logged: the subdural the CT found, the vitamin the months returned.",
      initialPresentation: "A 58-year-old mill worker in Coimbatore with thirty years of daily arrack drinking was brought by his sons for 'he keeps asking the same thing'. Examination found disorientation to date, three-minute loop questioning, a wide-based gait, and tip-of-the-tongue word failures: the sons reporting the walking trouble for 'about two years', the memory trouble for six months, and two falls in the last year that nobody had logged as injuries.",
      history: "Arrack daily for three decades, one meal a day for years (the malnutrition partnership); no prior psychiatric history; the sons' private account estimating the true quantities when asked specifically (the family ledger); no fever, no morning shakes documented, no known withdrawal seizures.",
      examination: "Disoriented to date; the three-minute loop with preserved immediate registration and intact old stories; wide-based gait worse on the turns; bilateral grasp-reflex-spectrum frontal signs soft; the CT arranged the same week.",
      diagnosis: "Alcohol-related dementia: the executive-amnesic blend on the malnutrition partnership, WITH a chronic subdural contribution from the unlogged falls.",
      management: "CT: frontal sulcal widening plus a small chronic subdural; evacuated; high-dose thiamine begun; supervised home detoxification with the family contracted as monitors; the routine-and-labels home system taught; the gait physiotherapy and the falls-audit.",
      outcome: "At three months: the loop questioning resolved to occasional, orientation stable, the gait narrower, and the note's whole thesis in one line, he recognised the subdural's evacuation anniversary and remembered that his son had visited 'recently': recording returning in patches. At a year, abstinence held through one wedding-season relapse; he remained apathetic but oriented, capable of supervised home routines.",
      teachingPoints: [
        "The subdural yield: the CT every cognitively impaired drinker deserves. The drainable recovery the label was absorbing.",
        "The months-scale of recovery: the family expecting a week's miracle abandons exactly when the curve turns.",
        "The family-as-hippocampus contract: the monitors, the routine, the one written instruction; the home system the disease demands.",
        "Partial return is the prize and the honest promise: the quarter-to-half arithmetic delivered at the first consultation.",
      ],
    },
    {
      title: "The hands that quarrelled",
      presentation: "The right hand buttoning while the left unbuttoned: the callosal classic arriving in a malnourished spirits-drinker.",
      initialPresentation: "A 46-year-old man in Vijayawada, visibly malnourished, presented with two months of apathy, new urinary incontinence and an odd sign the wife demonstrated: his right hand buttoning his shirt while the left hand unbuttoned it, and on request to 'show how you greet', the left hand failing to mirror the right's gesture. The referral asked for 'early dementia assessment'.",
      history: "Heavy spirits drinking for fifteen years with markedly reduced food intake in the last two (the poverty-calorie arithmetic); no head injury; no prior cognitive assessment; the wife's account of gradually reducing engagement with the household preceding the intermanual conflict.",
      examination: "Apathy with reduced spontaneous speech; the left-hand mirror failure and the intermanual conflict elicited cleanly; gait wide-based; no focal weakness; the nutritional stigmata visible.",
      diagnosis: "Marchiafava-Bignami disease: corpus callosum degeneration in the malnourished heavy drinker.",
      management: "MRI sagittal sequences: the corpus callosum dark and thinned. Thiamine, nutritional rehabilitation, supervised abstinence in the de-addiction ward: the recovery logic applied even here: abstinence, thiamine, nutrition, time.",
      outcome: "The interhemispheric truce partially restored over two months: the left hand obeying the right's plans again; the apathy yielding slower; the family contracted for the long arc.",
      teachingPoints: [
        "The callosal classic in the malnourished spirits-drinker: the exam name that walks into district hospitals.",
        "The intermanual conflict sign (alien-hand spectrum) points at the bridge: the sagittal views the sequence to request.",
        "The recovery-logic applies even here: abstinence, thiamine, feeding, time; the five-channel framework holding for its rarest member.",
        "Originally described in Italian red-wine drinkers, but any spirits-plus-malnutrition picture qualifies (the 'wine-drinker's disease' trap).",
      ],
    },
  ],
  clinicalPearls: [
    "The dementia with an engine, and the engine can be switched off: abstinence is the single disease-modifying treatment this whole disease owns.",
    "Five channels, five verdicts: toxicity (fixed), thiamine (yields), withdrawal (yields), subdural (drains), hepatic (treats); the recovery map.",
    "A quarter to a half of the lost sharpness returns over months of abstinence: the honest arithmetic to hand every family.",
    "The vermis walks first: the wide-based gait announces the dementia years before the family recognises it.",
    "B1 before D5: the oldest one-line rule in this corner of medicine; the casualty rule that prevents the iatrogenic hole.",
    "Confabulation: fluent, plausible filler without intent to deceive, not lying, not delirium; fading over months in most.",
    "Marchiafava-Bignami: the callosal degeneration of malnourished drinkers; the answer to the interhemispheric-disconnection question.",
    "The imaging pattern: frontal atrophy + vermis + white matter (+ mammillary bodies in Korsakoff); 'which dementia shows cerebellar atrophy'.",
    "The French national cohort: alcohol use disorders the strongest modifiable association with early-onset dementia.",
    "The majority of Wernicke cases are missed during life: the autopsy series' reproach to the bedside.",
    "The CT every cognitively impaired drinker deserves. The falling population's subdural yield is the recovery that repays the scan.",
    "Disulfiram is a poor fit in established dementia (the forgettable tablet and the reaction-teaching demand the memory the disease took).",
    "The first answer 'social only' usually doubles when asked specifically about quantities, mornings and money: the family ledger is the history.",
  ],
  highYieldSummary: [
    "Definition: alcohol-related dementia = cognitive impairment arising from chronic heavy drinking through five channels (direct neurotoxicity, thiamine deficiency, withdrawal kindling, trauma/subdural, hepatic encephalopathy), one of the few dementias that can be halted and partly reversed.",
    "Epidemiology: a quarter to a half of severe dependence measurably impaired; the Lancet-commission modifiable-risk framing; the French national cohort (the strongest modifiable association with early-onset dementia, a substantial share of early-onset cases attributable); Wernicke-Korsakoff ~1–2% of Western autopsy populations with the majority missed in life; the female telescoping effect; the Indian spirit-predominance (calories without nutrition) and the non-alcoholic thiamine routes (hyperemesis, TB, starvation).",
    "Mechanism: the solvent years (frontal erosion, white-matter slowing, vermis shrinkage); the famine wire (the thiamine-dependent filing circuit seizing. Wernicke the emergency, Korsakoff the residue); the withdrawal storms (kindling); the split corpus (Marchiafava-Bignami); the B1-before-D5 chemistry (glucose metabolism consumes thiamine).",
    "Clinical: the executive face (planning failure, disinhibition or apathy, speed and attention, visuospatial slips, retrieval-dominant memory complaints, the vermis gait) and the Korsakoff face (anterograde amnesia with the three-minute loop, confabulation, apathy, preserved personality and immediate memory); the interleaving states (withdrawal, hepatic fluctuation, subdural drowsiness, the neuropathy layer).",
    "Diagnosis: the convergence logic; the honest collateral drinking history (the private specific ledger), the syndrome with its tilt, the supportive imaging (frontal + vermis + white matter + mammillary + callosum), the mimic exclusion (subdural, hepatic, NPH, hypothyroid/B12, neurosyphilis/HIV, the riding degeneratives), and the abstinence-plus-thiamine trial as both treatment and confirmatory test.",
    "Management: (1) the engine off safely; the withdrawal ladder, inpatient where complicated; (2) thiamine generously and indefinitely (months; life in the Korsakoff states; no glucose without it, ever); (3) the abstinence architecture: naltrexone/acamprosate, the de-addiction programme, the family contract with the wedding-season plan; (4) the rehabilitation of what returns (the memory-rehab tradition, the gait physiotherapy, the falls-audit); (5) the riders treated (depression, insomnia, epilepsy); (6) the family's future guarded (the financial safeguards, the driving conversation, the caregiver's own health).",
    "The Indian tier: the somatic front door ('weakness', 'gas', 'he falls', 'he does not eat'); the private collateral history as the only honest instrument; the CT yield in the falling drinker; the months-scale expectation scripted early; the social-sanction negotiation resolved by the medical frame with the CT films on the table; thiamine at ₹10–30/month and the de-addiction tier as the delivery channel: the barrier never the pharmacy, always the diagnosis and the engagement.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ard-quiz-1",
      question: "The single disease-modifying treatment for established alcohol-related cognitive impairment:",
      options: ["Cholinesterase inhibitor", "Sustained abstinence", "High-dose folate alone", "Antipsychotic for confabulation"],
      correctIndex: 1,
      explanation: "The engine off, plus thiamine and time — no tablet family substitutes for it.",
      afterSectionId: "management",
    },
    {
      id: "ard-quiz-2",
      question: "A drinker's right hand buttons while the left unbuttons; on command the left cannot mirror the right's gesture. The MRI structure first to interrogate:",
      options: ["Hippocampus", "Corpus callosum: Marchiafava-Bignami degeneration", "Mammillary bodies", "Caudate"],
      correctIndex: 1,
      explanation: "Interhemispheric disconnection signs point at the bridge — the malnourished drinker's rare classic.",
      afterSectionId: "differential",
    },
    {
      id: "ard-quiz-3",
      question: "Confabulation is best defined as:",
      options: ["Deliberate lying for secondary gain", "Fluent, unplanned filling of memory gaps with fabricated content, without intent to deceive", "A perceptual disturbance without false memory", "Distraction-related inattention"],
      correctIndex: 1,
      explanation: "The mechanism is gap-plus-filler, not motive-plus-gain — the defining contrast with malingering.",
      afterSectionId: "symptoms",
    },
    {
      id: "ard-quiz-4",
      question: "The casualty rule when a known heavy drinker arrives drowsy and hypoglycaemic:",
      options: ["50% dextrose immediately, thiamine later if confusion persists", "Thiamine alongside (before or with) glucose — sugar without thiamine can precipitate the Wernicke catastrophe", "Naloxone for all", "No glucose until MRI"],
      correctIndex: 1,
      explanation: "The energy flood into a thiamine-empty circuit burns it — the oldest one-line rule in this corner of medicine.",
      afterSectionId: "management",
    },
    {
      id: "ard-quiz-5",
      question: "The honest reversibility statement for the abstinence-plus-thiamine-treated patient:",
      options: ["Full recovery expected in all", "No component recovers, only progression halts", "A quarter to a half improves over months; the core Korsakoff amnesia and long-standing atrophy largely persist", "Improvement begins only after two years"],
      correctIndex: 2,
      explanation: "Partial, meaningful, months-scale — the promise the family can bank and the honest limit they must plan around.",
      afterSectionId: "management",
    },
    {
      id: "ard-quiz-6",
      question: "The Indian presentation triad most likely to precede any cognitive complaint in the eventual alcohol-related dementia:",
      options: ["Weight loss, fever, rash", "The wide-based gait, the falling episodes, and the 'weakness/gas' somatic front door", "Insomnia only", "Isolated word-finding pauses"],
      correctIndex: 1,
      explanation: "The vermis walks first, the subdurals fall second, and the OPD hears the body's translation — the gait-and-fall history is the dementia's overture.",
      afterSectionId: "symptoms",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the five damage channels and tag each: partly-reversible or fixed.", answer: "(1) DIRECT TOXICITY (ethanol/acetaldehyde on neurons, white matter, frontal circuitry): largely FIXED: the long years of solvent exposure do not return. (2) THIAMINE DEFICIENCY (the Wernicke-Korsakoff route). PARTLY YIELDS: the famine's damage recovers in patches with months of replacement. (3) WITHDRAWAL KINDLING (repeated excitotoxic storms). YIELDS: the fog lifts with sustained abstinence. (4) TRAUMA/SUBDURAL (the falls and the coagulopathy factory). DRAINS: the surgical recovery that repays the CT. (5) HEPATIC DISEASE (the fluctuating encephalopathy). TREATS: the episodic layer that lifts with the liver's management. The clinical translation: the recovery map is the channel list. Stop the engine, replace the vitamin, drain the clot, treat the liver, and the months return their fraction.", topic: "Mechanism" },
    { question: "Contrast the executive face and the Korsakoff face on four axes (onset memory, error type on testing, insight, prognosis).", answer: "ONSET MEMORY: the executive face presents with retrieval trouble (tip-of-the-tongue, the word found with cueing); the Korsakoff face with recording failure (the breakfast an hour ago is news, the three-minute loop). ERROR TYPE: the executive face makes planning and judgement errors with patchy spared functions; the Korsakoff makes the pure amnesic error: fluent confabulation filling gaps the person cannot see, with immediate registration intact. INSIGHT: the executive face retains partial insight (the embarrassment and the excuses); the Korsakoff face is comfortable in its own repeated morning: the anaesthesia of insight. PROGNOSIS: the executive face carries the better recovery curve (the withdrawal fog and the thiamine-yielding components responding to the engine-off); the established Korsakoff core largely holds. The surrounding fog clears, the recording-hole does not. One engine, two doors, and the doors can coexist in one patient.", topic: "Diagnosis" },
    { question: "Define confabation in one sentence and distinguish it from lying and delirium in two more.", answer: "DEFINITION: confabulation is the fluent, unplanned filling of memory gaps with fabricated content, offered without intent to deceive; the memory's public-relations instinct. FROM LYING: lying serves a motive with the truth known and hidden; confabulation serves the gap itself, the material as sincerely offered as any memory: confrontation with the truth changes the liar's story and only exhausts the confabulator. FROM DELIRIUM: delirium clouds consciousness with fluctuating attention (the immediate memory impaired, the day-night disassembled); the Korsakoff confabulation arrives on a stable, awake background with immediate memory INTACT: the person can hold the conversation, play cards, and charm the examiner between the loops. The natural course: vivid early, fading to 'I don't remember' over months in most.", topic: "Clinical practice" },
    { question: "The casualty rule about glucose and thiamine: state it word-for-word, with the chemistry.", answer: "THE RULE: no glucose-containing fluid before (or without) thiamine. B1 before D5, every time, in anyone starved, vomiting or drinking heavily; including the day the family brings him hypoglycaemic to the casualty. THE CHEMISTRY: glucose metabolism CONSUMES thiamine; the thiamine-dependent machinery of the diencephalic hub (mammillary bodies, medial thalamus) has high metabolic demands and thin reserves; the dextrose drip into a thiamine-empty circuit forces the starving machinery through an energy flood it cannot survive, and the lesion becomes permanent in an afternoon. The Indian audit point: make 'no dextrose before thiamine in the malnourished' a house-rule in every emergency department AND every maternity ward (the hyperemesis mothers share the rule); the sequence costing a few rupees being the difference between this syndrome and no syndrome.", topic: "Pharmacology" },
    { question: "What imaging findings does the MRI request hope to see (and to exclude) in the cognitively impaired drinker?", answer: "TO SEE (the supportive pattern): frontal-predominant atrophy with sulcal widening; white-matter change (the solvent's and the storms' cabling casualty); cerebellar VERMIS shrinkage (the gait's signature); mammillary-body atrophy on good-quality studies (the Korsakoff residue); and (where the intermanual signs raise it) the darkened, thinned CORPUS CALLOSUM of Marchiafava-Bignami on sagittal views. TO EXCLUDE (the mimics that change management): the chronic SUBDURAL (the falling drinker's drainable recovery, the yield that justifies the scan alone); the hydrocephalus pattern (ventricles disproportionate to atrophy, the shuntable); the hepatic picture's contributors; and the strategic infarcts of the vascular rider (the drinking and the vasculopathy travelling together in the same aged vessels). One scan, two jobs: the pattern that supports and the clot that drains.", topic: "Diagnosis" },
    { question: "Give the honest recovery arithmetic: who improves, how much, on what timescale, with what as the active ingredient.", answer: "WHO: the patients whose damage is weighted toward the yielding channels; the thiamine-dependent tier, the withdrawal fog, the undrained subdural, the hepatic fluctuation, the depression rider; the long-standing pure-toxicity and vermis-heavy pictures hold their ground. HOW MUCH: a quarter to a half of the lost sharpness; the honest promise the family can bank (the inflated promise collapses at the plateau and loses them; the nihilistic one withholds the treatment that works). TIMESCale: MONTHS, not weeks; the recording returning in patches across the first year of held abstinence, the gait narrowing, the fog lifting; the review that matters is the three-month mark, and the expectation scripted at the FIRST consultation. THE ACTIVE INGREDIENT: abstinence; the engine off is the disease modification; the thiamine protects and restores what the famine took; the time is what the remyelination and reorganisation window demands; the tablet families (cholinesterase and the rest) contribute nothing this disease recognizes.", topic: "Management" },
    { question: "Why is disulfiram a poor fit in established alcohol-related dementia?", answer: "Because disulfiram's entire safety architecture demands the two functions the dementia has taken: RELIABLE MEMORY (the daily tablet forgotten or doubled, the reaction arriving without warning or never arriving at all) and PRESERVED JUDGEMENT (the reaction-teaching requiring the patient to hold the alcohol-avoidance contract precisely while the frontal inhibition that would enforce it is the thing that eroded). The forgettable tablet and the reaction-education are a poor fit when the patient cannot self-track, and the family's monitoring capacity is already the treatment's load-bearing wall. The alternatives that fit: naltrexone and acamprosate (no CNS toxicity, no reaction-teaching burden, the adherence architecture carried by the family contract); the relapse-prevention tier chosen for the brain that actually has to take it.", topic: "Pharmacology" },
  ],
  faqs: [
    { question: "If he stops drinking completely, does the brain come back?", answer: "Partly, and honestly more than most families expect: the thiamine-hunger damage, the withdrawal storms' smog and the undetected bleeds all yield; the long years of direct toxicity mostly do not. A quarter to a half of the lost sharpness can return over months; the rest is held ground, and holding it is victory." },
    { question: "He only drinks at parties, doctor, surely that is not this?", answer: "Party-only drinking with a dementia is worth checking honestly: the family ledger (bottles, money, mornings) answers better than the patient's account. Where the ledger clears him, we look for the other causes with the same energy; the point is the checking, not the label." },
    { question: "Was it the alcohol or the weakness-from-poor-food that did this?", answer: "Both, inseparably: the liquor replaced the meals and blocked the vitamin. That is why the treatment is not a choice between abstinence and thiamine, but both, always." },
    { question: "Is it hereditary, will our son get it?", answer: "The tendency to become dependent is partly inherited; the dementia itself is not a genetic sentence. It is dose-driven. The son's protection is his pattern, not his stars." },
    { question: "Is a little drink now safe: red wine is supposed to help the heart?", answer: "For a brain already injured by alcohol there is no protective dose of the same solvent; the wine-and-heart story never extended to the recovering brain. The 'one for the heart' is a relapse with a magazine cover." },
    { question: "Why does he make up such stories, is he lying to us?", answer: "No: the memory's gaps fill themselves, and the filler sounds fluent because the wit is intact. It is the illness speaking, not dishonesty, and arguing with it teaches the family nothing but distress." },
    { question: "He is calm and doesn't seem bothered: is that good?", answer: "The calm of the established memory loss is the disease's anaesthesia of insight: it spares him the suffering of the gap, but it also means the family, not the patient, must carry the memory and the plan." },
    { question: "Can he be left alone at home with his meals?", answer: "Depends on the day-shape of his function: a meal-time audit with a stove test, a gate test and a medicine-box test tells you more than any score; make those three observations before deciding." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) — the paraphrased major-neurocognitive-disorder-due-to-alcohol framing" },
      { source: "Royal College of Physicians / NICE-lineage guidance — vitamin replacement in alcohol misuse and severe malnutrition" },
      { source: "Refeeding-syndrome guidance (NICE-lineage) — the thiamine-first discipline during refeeding" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.11 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Schwarzinger S, Thiébaut SPA et al. — the French nationwide cohort: alcohol use disorders and the early-onset dementia contribution (2018)" },
      { source: "Zubaran C et al. and the Lyons-Creuil line — heavy-drinking cohort MRI and cognitive studies; the white-matter recovery literature" },
    ],
    reviews: [
      { source: "Harper C — the classic neuropathology series on alcohol-related brain damage (frontal, vermis, corpus-callosum findings)" },
      { source: "Victor M, Adams RD, Collins GH — the Wernicke-Korsakoff monograph tradition (the founding clinical structure)" },
      { source: "Schwarz S et al. — Marchiafava-Bignami case series with MRI-era descriptions (the recovery reports)" },
      { source: "Rehm J et al. — the alcohol-dementia risk epidemiology; the Lancet-commission modifiable-risk framing" },
      { source: "Duka T et al. — the withdrawal-kindling line; Fama R, Sullivan EV — the cerebellar-vermis and executive literature" },
      { source: "Day E, Copello A, Hull M — clinical management guidance on alcohol-related brain injury; Oscar-Berman M, Marinković K — the systems review" },
      { source: "Benegal V, Murthy P and the NIMHANS de-addiction literature — Indian consumption patterns and inpatient cognitive findings; GATS-India for the population frame" },
    ],
    patientResources: [
      { source: "The family contract and the months-scale expectation script — the two instruments this course hands to every Indian ARD family" },
      { source: "The district de-addiction centre and Tele-MANAS 14416 — the relapse-prevention and caregiver channels" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the engine you can switch off, the vitamin rule, the months-scale honesty, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The five channels, the two faces, the confabulation definition, the B1-before-D5 rule, the imaging pattern.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "43 min",
      description: "Everything: the family-ledger craft, the CT discipline, the abstinence architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The five channels, the two faces, the prevalence arithmetic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the five channels with their reversibility verdicts cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The solvent years, the famine wire, the split corpus.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the vermis walks first and why B1 precedes D5." },
    { number: 3, title: "Clinical Practice", description: "The convergence diagnosis, the mimic ladder, the three-legged treatment.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the family ledger, the CT decision and the honest recovery script." },
    { number: 4, title: "Indian Context", description: "The somatic front door, the social-sanction negotiation, the family contract.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the CT-films-on-the-table conversation and the wedding-season plan." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the ARD essay cold and recite the reversibility ranking without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.11 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Harper C — the classic neuropathology series on alcohol-related brain damage: frontal, vermis and corpus-callosum findings", sourceType: "primary", year: "1979 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Victor M, Adams RD, Collins GH — the Wernicke-Korsakoff monograph (the founding clinical structure; cross-referenced to the Amnesic Syndromes course)", sourceType: "primary", year: "1971 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Schwarzinger S, Thiébaut SPA et al. — the French nationwide cohort: alcohol use disorders and dementia, the early-onset contribution (2018)", sourceType: "primary", year: "2018", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Rehm J et al. and the Lancet Commission on dementia prevention — alcohol use disorders among the modifiable midlife risks (the doubling of later dementia odds)", sourceType: "review", year: "2018–2024", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Duka T, Gerra et al. — the withdrawal-kindling line (the storm-damage channel); Fama R, Sullivan EV — the cerebellar-vermis and executive literature", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Schwarz S et al. — Marchiafava-Bignami case series with MRI-era descriptions (the recovery reports)", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S8", source: "DSM-5 / DSM-5-TR (APA) — the paraphrased major-neurocognitive-disorder-due-to-alcohol framing; the alcohol-related dementia concept-clarification literature (Oscar-Berman, Marinković systems review)", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Royal College of Physicians / NICE-lineage guidance — vitamin replacement in alcohol misuse and severe malnutrition; refeeding-syndrome discipline (thiamine first)", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Benegal V, Murthy P and the NIMHANS de-addiction literature — Indian consumption patterns, spirit predominance and inpatient cognitive findings; GATS-India population frame", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Day E, Copello A, Hull M — clinical management guidance on alcohol-related brain injury (the UK tier, translatable); Indian cost realities (approx 2026)", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The five-channel mechanism: direct ethanol/acetaldehyde neurotoxicity (frontal circuits, white matter, largely fixed); thiamine depletion (the Wernicke-Korsakoff route, partially recoverable); repeated withdrawal kindling (excitotoxic, yields with abstinence); trauma/subdural (drainable); and hepatic encephalopathy (treatable fluctuation): the channels predicting the recovery map.", grade: "established", sources: ["S1", "S2", "S6"] },
    { text: "Epidemiology: cognitive impairment in roughly a quarter to a half of severe alcohol dependence; the French national cohort finding alcohol use disorders the strongest modifiable association with early-onset dementia (a substantial share of early-onset cases attributable); Wernicke-Korsakoff ~1–2% of Western autopsy populations with the majority missed during life; the female telescoping effect.", grade: "established", sources: ["S4", "S5", "S8"] },
    { text: "The two clinical faces on one engine: the executive face (frontal-parietal planning failure, disinhibition or apathy, retrieval-dominant memory complaints, the vermis gait presenting FIRST) and the amnesic Korsakoff face (anterograde amnesia with the three-minute loop, confabulation, apathy, preserved immediate memory and personality).", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "The casualty rule: glucose metabolism consumes thiamine; the dextrose load into a thiamine-empty diencephalic circuit precipitates/worsens the Wernicke lesion ('B1 before D5'); the rule extends to the maternity ward (hyperemesis) and the refeeding window (calories low, thiamine and electrolytes first).", grade: "established", sources: ["S3", "S9"] },
    { text: "Confabulation: fluent, unplanned filling of memory gaps without intent to deceive; distinguished from lying (no motive; confrontation only exhausts) and from delirium (stable awake background, immediate memory intact); vivid early, fading over months in most patients.", grade: "established", sources: ["S1", "S3"] },
    { text: "The imaging pattern: frontal-predominant atrophy, sulcal widening, white-matter change, cerebellar vermis shrinkage (the gait's signature preceding the cognitive complaint), mammillary-body atrophy in Korsakoff, and the darkened thinned corpus callosum of Marchiafava-Bignami on sagittal MRI, with the CT justified by the subdural yield in the falling drinker.", grade: "established", sources: ["S2", "S7"] },
    { text: "The treatment triad: (1) safe withdrawal (inpatient where complicated, the benzodiazepine ladder with thiamine from hour zero); (2) thiamine generously and indefinitely (months; life in Korsakoff states); (3) sustained abstinence as the single disease-modifying treatment: naltrexone/acamprosate for relapse prevention with disulfiram's poor fit documented (forgettable tablet, reaction-teaching demanding the memory the disease took).", grade: "established", sources: ["S9", "S11"] },
    { text: "The honest reversibility arithmetic: a quarter to a half of impairment improves over months of abstinence-and-thiamine (the thiamine-dependent, withdrawal-fog and medical-rider components yielding most), with the core Korsakoff amnesia and long-standing atrophy largely persisting; the months-scale expectation scripted at the first consultation to prevent the week's-miracle abandonment.", grade: "established", sources: ["S1", "S11"] },
    { text: "The Indian tier: rising spirit-predominant consumption (IMFL/arrack, calories without nutrition); the somatic front door ('weakness', 'gas', 'he falls', 'he does not eat'); the family ledger as the only honest drinking history; the non-alcoholic thiamine routes (hyperemesis, tuberculosis, starvation) sharing the sequence rule; thiamine at ₹10–30/month with the de-addiction tier as the channel: the barrier never the pharmacy, always the diagnosis and the engagement.", grade: "supported", sources: ["S10", "S11"] },
    { text: "Marchiafava-Bignami: corpus callosum degeneration in malnourished heavy drinkers; interhemispheric disconnection signs (intermanual conflict, the hands quarrelling), originally described in Italian red-wine drinkers but qualifying in any spirits-plus-malnutrition picture; partial recovery reported with abstinence, thiamine and feeding.", grade: "supported", sources: ["S7"] },
  ],
};
