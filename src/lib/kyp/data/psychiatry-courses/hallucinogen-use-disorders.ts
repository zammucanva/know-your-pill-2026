import type { PsychiatryCourse } from "./types";

/**
 * HALLUCINOGEN USE DISORDERS — THE GREAT EXCEPTION — canonical
 * Psychiatry course (migration batch 8, Group B — substance use
 * disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/hallucinogen-use-disorders.md — untouched
 * foundation), re-researched against the note's evidence lineages
 * (the Nichols 5-HT2A pharmacology canon, the Carhart-Harris/Nutt
 * neuroimaging line, the Halpern-Pope HPPD settlement, the Domino
 * PCP classics, the AIIMS national survey frame) with per-claim
 * provenance.
 *
 * Drug routes: the medication tier this class actually uses —
 * benzodiazepines (lorazepam/midazolam) for the panic storm and the
 * dissociative corner, the lamotrigine/clonazepam-adjacent HPPD
 * tier — has no KYP drug lessons; drugLinks is deliberately empty
 * and the tier is recorded honestly in contentGaps, never invented.
 */
export const hallucinogenUseDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "hallucinogen-use-disorders",
  title: "Hallucinogen Use Disorders",
  shortName: "Hallucinogens",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Hallucinogen Use Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The great exception: no reward hijack, no withdrawal, but the bad trip and HPPD",

  summary:
    "Hallucinogens act at 5-HT2A receptors, produce tolerance within days and cause dependence rarely: the exception to the addictive-disorder framework. Clinical care is crisis management of the bad trip, reassurance-led HPPD care and recognition of the dissociatives.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Explain why hallucinogens produce dependence rarely (no classic reward hijack, tolerance in days, no withdrawal) and state the services consequence: an alcohol-style addiction framework mostly does not apply.",
    "Describe the 5-HT2A mechanism in plain words (cortical pyramidal excitation, perceptual loosening, ego-dissolution via default-mode de-synchronisation) and why vital signs stay near-normal in the classic intoxication.",
    "Manage the acute bad trip in order: environment first, one familiar person, talking down with the truth script, benzodiazepines for the panic storm, restraint avoided, and the antipsychotic caution in pure classic reactions.",
    "Diagnose and manage hallucinogen persisting perceptual disorder (HPPD): flashbacks, visual snow, palinopsia, with the reassurance-first, medication-sparingly ladder.",
    "Recognise PCP/ketamine dissociative intoxication: the violent-numb-nystagmic triad, the analgesic injuries, the cyclical re-emergence, and its specific management.",
    "Separate the mimics: NBOMe-sold-as-LSD, MDMA tablet substitution, temporal-lobe aura, migraine aura, primary psychosis and delirium.",
    "Place psilocybin's therapeutic-research era honestly (overseas trials, screened and monitored, research not clinic) and India's 2026 frame under the NDPS schedules.",
    "Work the Indian realities: the Goa circuit, darknet-postal supply, the undersuspected substituted tablet, the returning retreat traveller, and speak both dialects, the spiritual emergency and the medical.",
  ],
  quickFacts: [
    { label: "The class verdict", value: "The great exception", detail: "No reward-circuit hijack, no physical withdrawal, dependence rarely: tolerance in days and a trip too demanding to run daily; the service tier that follows: crisis-and-aftercare, not detox" },
    { label: "The receptor", value: "5-HT2A", detail: "Partial agonists at one serotonin receptor on the deep pyramidal neurons of the association cortex: the world-modelling machinery running richer and more chaotic than reality warrants" },
    { label: "The durations shelf", value: "Minutes to 12 hours", detail: "DMT minutes; psilocybin 4–7 hours; LSD 8–12 hours; mescaline longer: the duration the history takes and the disposition the timeline predicts" },
    { label: "The vitals irony", value: "Profound storm, quiet body", detail: "Modest pupil dilation, slight pulse rise, minimal measurable toxicity; hyperthermia or seizures mean substitution (NBOMe/MDMA-class), not the classic agent" },
    { label: "The PCP triad", value: "Analgesia + nystagmus + violent strength", detail: "The dissociative signature: self-injury without flinching, horizontal/vertical/rotatory nystagmus, the patient who fights six people; with cyclical re-emergence forbidding the early discharge" },
    { label: "HPPD's signatures", value: "Visual snow, palinopsia, halos", detail: "Persisting perceptual phenomena with insight intact, not stored drug, not ongoing intoxication, not psychosis; the correct explanation itself the main treatment" },
    { label: "The bad-trip first line", value: "Environment, person, script — then medicine", detail: "Quiet dim-not-dark room, one calm familiar person, the truth ('it ends by morning'); benzodiazepines for the panic storm; haloperidol not first-line in the pure classic reaction; restraint avoided" },
    { label: "The Indian frame", value: "Negligible numbers, real circuit casualties", detail: "Goa and coastal festivals, metro elite party scenes, darknet-postal blotter, the undersuspected substituted tablet, the returning retreat traveller: recognition and calm management, not epidemic management" },
  ],
  knowledgeGraph: [
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The framework this class is the great exception to: the dopamine capture, the withdrawal syndromes and the detox tiers the hallucinogens conspicuously lack" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The withdrawal-storm contrast: where alcohol owns the detox ladder, the classic hallucinogens own no withdrawal at all" },
    { label: "Party Drugs", type: "condition", href: "/psychiatry/party-drug-use-disorders/", note: "The substituted-tablet corner. NBOMe sold as LSD, MDMA cocktails, and the toxicology redirections the quiet-vitals rule forces" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The first-episode pathway the prolonged post-trip psychosis needs, some trips introduce the illness rather than cause it" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The clouded-consciousness differential: the hallucinogen patient is awake and orientated to planet, however far from it" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The 5-HT2A receptor: the single address where the classic class does its work" },
    { label: "Glutamate", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The NMDA receptor the dissociatives block. PCP's violent-numb-nystagmic kingdom" },
    { label: "Cortical association areas", type: "brain-region", href: "#brain", note: "The deep pyramidal neurons carrying 5-HT2A: the world-modelling machinery the class loosens" },
    { label: "Default-mode network", type: "brain-region", href: "#brain", note: "The self's hub: its de-synchronisation the neuroimaging signature of ego-dissolution" },
    { label: "Cannabis", type: "condition", href: "/substances/cannabis", note: "The amplifier: bad-trip co-ingestant, HPPD trigger, and the first thing retired after a persisting perceptual complaint" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the classic class, plus one separate kingdom. The doors that loosen: partial agonists at the 5-HT2A receptor, densely placed on the deep pyramidal neurons of the cortex's association areas; stimulating them excites and disinhibits the networks that build our models of the world, so the cortex's prediction machinery runs richer and more chaotic than reality warrants: colours intensify, boundaries breathe, music paints, time stretches, and the self's edges dissolve (the default-mode network's de-synchronisation, the neuroimaging signature of ego-dissolution). The deep clinical irony rides alongside: this profound subjective storm on nearly normal vital signs; modest pupil dilation, slight pulse rise, minimal measurable toxicity; the emergency is in the mind's experience and occasionally in its content, not in the body's chemistry. Why no addiction: dependence as a syndrome needs the reward circuitry's hijack, dopamine's mesolimbic capture with tolerance, withdrawal and craving's escalation, and the hallucinogens do not seize that machinery; their subjective 'reward' is not reliably hedonic (a trip is hard work), tolerance develops within days of consecutive use (the receptor's own tachyphylaxis; the second consecutive-day trip famously weak), and there is no withdrawal syndrome to treat. The pattern that emerges is use like visiting a temple: episodic, deliberate, bounded, and the services consequence follows the pharmacology: crisis-and-aftercare, not detox-and-agonist. The stuck replay: in a minority, some perceptual loosening persists after the trip; the leading model being a failure of the prediction machinery to fully re-stabilise, a kind of perceptual network scar. The separate kingdom: PCP and street-dose ketamine block the NMDA receptor; a different pharmacology producing the violent-numb-nystagmic dissociative intoxication, the triad of marked analgesia, nystagmus and violent-agitated strength, with waves of re-emergence as the storm cycles.",
    steps: [
      "One receptor, one address: partial agonism at 5-HT2A on the deep pyramidal neurons of the cortex's association areas; the class's entire classic pharmacology.",
      "The world-model runs chaotic: excitation and disinhibition of the association networks let the cortex's prediction machinery outrun reality; colour intensification, breathing walls, synaesthesia, time dilation, body-image distortion.",
      "The self's hub de-synchronises: the default-mode network's de-synchronisation is the neuroimaging signature of ego-dissolution; the spectrum from pleasant self-loss to terrifying ego-death.",
      "The quiet-vitals irony: modest pupil dilation, slight pulse rise, minimal measurable toxicity; the hallucinogen-intoxicated body is usually safe; hyperthermia or seizures redirect the diagnosis to NBOMe/MDMA-class substitution.",
      "The non-addiction pharmacology: no mesolimbic reward capture, no withdrawal syndrome, tolerance within days (the receptor's tachyphylaxis, the second consecutive-day trip famously weak); episodic, temple-visit use; dependence rarely.",
      "The stuck replay: the prediction machinery, once shown a more chaotic mode, sometimes fails to fully re-stabilise; the perceptual network scar of HPPD; not stored drug, not ongoing intoxication, not psychosis.",
      "The separate kingdom: PCP and street-dose ketamine block the NMDA receptor; marked analgesia, nystagmus and violent strength in one package, with cyclical re-emergence as the intoxication cycles back in waves.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "cortical-association-areas", name: "Cortical association areas (deep pyramidal neurons)", role: "The 5-HT2A address: the densely-served pyramidal neurons whose excitation and disinhibition let the cortex's world-modelling machinery run richer and more chaotic than reality warrants.", grade: "established" },
    { id: "default-mode-network", name: "Default-mode network", role: "The self's hub: its de-synchronisation the neuroimaging signature of ego-dissolution, the spectrum from pleasant self-loss to terrifying ego-death.", grade: "supported" },
    { id: "mesolimbic-reward-circuit", name: "Mesolimbic reward circuit (the circuit NOT hijacked)", role: "The dopamine capture that defines the addictive classes has no hold here: the great exception's anatomy, and the reason this class needs crisis-and-aftercare rather than detox-and-agonist services.", grade: "established" },
    { id: "nmda-networks", name: "NMDA-bearing cortical networks (the dissociative address)", role: "The PCP and street-dose ketamine blockade target: the disconnection producing marked analgesia, nystagmus and violent strength in one pharmacological package.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The class's single-receptor story: partial agonism at 5-HT2A; the ayahuasca brew adds an MAOI partnership, which is where the serotonin-syndrome question lives (the combination, not the classic agent alone).", grade: "established" },
    { name: "Glutamate", symbol: "Glu", role: "The excitation the 5-HT2A story rides on (the pyramidal neurons are the cortex's excitatory core) and, at the NMDA receptor, the dissociatives' blockade target.", grade: "established" },
    { name: "Dopamine", symbol: "DA", role: "The neurotransmitter these drugs do not capture: no mesolimbic hijack, no escalation-typology; the great exception's chemistry and the reason the addiction framework mostly does not apply.", grade: "established" },
  ],
  pathways: [
    {
      id: "doors-that-loosen",
      name: "The doors that loosen (5-HT2A to the perceptual storm)",
      steps: [
        { label: "Partial agonism at 5-HT2A", detail: "The classic agents stimulate one receptor, densely placed on deep pyramidal neurons of the association cortex" },
        { label: "The world-model runs chaotic", detail: "Excitation and disinhibition of the association networks: the cortex's prediction machinery outrunning reality" },
        { label: "Perceptual loosening", detail: "Intensified colour, breathing walls, synaesthesia, time dilation, body-image distortion" },
        { label: "Default-mode de-synchronisation", detail: "The self's hub loosens its grip: the ego-dissolution spectrum, pleasant to terrifying" },
      ],
      clinicalManifestation: "The wide-pupilled party casualty, terrified or awestruck, awake and orientated to planet, with vital signs that barely move.",
      grade: "supported",
    },
    {
      id: "the-exception-anatomy",
      name: "The exception's anatomy (why the addiction framework does not apply)",
      steps: [
        { label: "No reward-circuit capture", detail: "No dopamine mesolimbic hijack, no reliably hedonic drive. A trip is hard work, not a reliable pleasure" },
        { label: "Tachyphylaxis within days", detail: "The receptor's own rapid tolerance: the second consecutive-day trip famously weak" },
        { label: "No withdrawal syndrome", detail: "Nothing to detoxify from; no craving escalation to treat" },
        { label: "Episodic, deliberate use", detail: "The temple-visit pattern the pharmacology itself enforces: dependence rarely realised" },
      ],
      clinicalManifestation: "The service-tier consequence: crisis-and-aftercare services, not detox beds or agonist programmes; the class that emergency rooms and follow-up clinics own.",
      grade: "established",
    },
    {
      id: "dissociative-divergence",
      name: "The dissociative divergence (NMDA blockade to the violent-numb-nystagmic state)",
      steps: [
        { label: "NMDA-receptor blockade", detail: "PCP and street-dose ketamine: a different family sharing the note's chapter and the exam's attention" },
        { label: "Dissociation with marked analgesia", detail: "Self-injury without flinching: the wounds the examination must hunt because the patient cannot feel them" },
        { label: "The triad declares itself", detail: "Analgesia plus nystagmus (horizontal, vertical or rotatory) plus violent-agitated strength: the patient who fights six people" },
        { label: "Cyclical re-emergence", detail: "Apparent recovery, then the storm again: the waves that forbid the early discharge" },
      ],
      clinicalManifestation: "The police-escorted arrival: violent, numb, nystagmic; needing the quiet room, generous benzodiazepines, and the full injury survey with CK, renal function and temperature.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "come-up", time: "The first hour or two", title: "The come-up: the doors loosen", description: "Colour and texture intensify, walls breathe, minutes stretch; pupils modestly dilated, pulse slightly up: the vitals staying nearly normal while the experience builds. The DMT traveller is already landing; the LSD traveller stands at the start of 8–12 hours.", phase: "onset" },
    { id: "peak-storm", time: "Hours 2–4 (agent-dependent)", title: "The peak: perceptual storm and the self's edges", description: "Synaesthesia, geometric patterning, body-image distortion; the ego-dissolution spectrum from pleasant self-loss to terrifying ego-death. The bad-trip window opens here in the vulnerable or unprepared: overwhelming terror, fear of going mad, fear of never returning; occasionally self-harm flight or accidental injury in impaired judgement.", phase: "peak" },
    { id: "durations-shelf", time: "Hours 4–12: the durations shelf", title: "The long tail: the agent decides the length", description: "DMT is over in minutes; psilocybin runs 4–7 hours; LSD holds 8–12 hours; mescaline runs longer still: the duration the history takes and the disposition the timeline predicts.", phase: "duration" },
    { id: "comedown", time: "By morning", title: "The comedown and the sheepish noon", description: "Insight returns before the perceptions fully settle; the truth script proves true: it ends by morning. The vulnerability screen and the batch check belong to this window, before the patient and the friends scatter.", phase: "recovery" },
    { id: "tachyphylaxis-cliff", time: "Days 1–4 after use", title: "The tolerance cliff", description: "Receptor tachyphylaxis within days of consecutive use: the second consecutive-day trip famously weak; the pharmacology itself enforcing the episodic, temple-visit pattern that keeps this class out of the addiction services.", phase: "recovery" },
    { id: "perceptual-tail", time: "Weeks to months (the minority)", title: "The perceptual tail: HPPD", description: "Visual snow, palinopsia, halos and re-intruding fragments with insight intact: typically after the first or an early trip, amplified by darkness, stress, fatigue and cannabis; the explanation-first ladder, not medication, is the first rung.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Lifetime hallucinogen use in Western surveys runs in single digits of adults (US NSDUH-tier figures around 8–10% lifetime for the class, past-month use under 1%) a pattern of episodic experimentation rather than daily use, concentrated in young men, party and festival circuits, and spiritual-seeking subcultures. PCP use in the United States is regional and small; ketamine misuse has risen with dance culture and, separately, with its depression-clinic off-label fame: the two must not be conflated. The ayahuasca and psilocybin-ceremony circuits have globalised (retreats in Latin America, Europe and now Asia), carrying low-harm statistics in screened ceremonial contexts and individual psychiatric casualties in unscreened ones.",
    indianPrevalence: "Population-survey hallucinogen numbers are negligible: the AIIMS Magnitude-of-Substance-Use 2019 national surveys show opioids, cannabis and sedatives as the national load, with hallucinogens barely registering in general samples. The realistic map: the Goa and coastal-festival circuit; metro nightclub and elite party scenes; darknet-and-postal supply of LSD blotter and psilocybin to urban professionals and students; occasional mushroom-picking experimentation in the Himalayan belt; and (most important clinically because least suspected) hallucinogenic surprises inside tablets sold as MDMA/ecstasy (the substituted-pill problem: NBOMe-family sold as LSD, PMMA and cocktails sold as ecstasy). PCP is essentially absent from Indian streets; ketamine appears in party circuits and diversion.",
    lifetimeRisk: "Dependence rarely realised: tolerance within days and no withdrawal mean the addictive syndrome is the exception this class is named for; the risks that do persist are the panic storm, the perceptual tail and the precipitation of illness in vulnerable minds.",
    genderRatio: "Young men the concentration: party, festival and first-dose social initiation; the spiritual-seeking route adds a second cohort of older retreat travellers.",
    ageOfOnset: "Youth and young adulthood for the experimental tier; the retreat-tourism tier arrives later, both meet the same casualty.",
    indianNotes: "The practical Indian skill is recognition and calm management, not epidemic management; the casualties arrive from the Goa circuit, the metro party, the postman-delivered blotter and the flight back from the retreat.",
  },
  etiology: [
    { category: "psychological", factor: "The seeker profile", details: "Sensation-seeking and openness: the personality profile of most experimental users; novelty-seeking youth; spiritual-seeking adults on the ayahuasca and 'medicine-journey' route; trauma-driven self-experimentation." },
    { category: "social", factor: "The circuits and the friction", details: "Festival, rave and nightclub circuits; peer initiation (the first dose almost always social); darknet access lowering the friction of supply; retreat-tourism: screened ceremonial structure and unscreened tourist casualty sold by the same industry." },
    { category: "biological", factor: "The vulnerability tags (the critical risk screen)", details: "Personal or family history of psychosis: the precipitation risk; bipolar-spectrum instability (mania and mixed states triggered); unstable cardiac conduction (the sympathomimetic load); PCP's additional medical profile at street doses." },
    { category: "biological", factor: "The pharmacological uncertainties", details: "Dose uncertainty (blotter and pill dosing is the dealer's guess); substitution (NBOMe sold as LSD at higher toxicity); combination with cannabis, stimulants and alcohol at the same party, always asked, always." },
    { category: "environmental", factor: "The Indian exposures", details: "The undersuspected tablet at a metro party; the returning traveller from an ayahuasca retreat abroad; the Goa-visitor emergency; psychiatric-vulnerable seekers drawn in by 'hearing the drug cures depression' headlines." },
  ],
  symptomClusters: [
    {
      category: "1. Acute classic hallucinogen intoxication (LSD, psilocybin, DMT, mescaline)",
      symptoms: [
        "Perceptual: intensification of colour and texture, geometric patterning, walls breathing, synaesthesia (music seen), time dilation (minutes as hours), body-image distortion",
        "Cognitive-affective: wonder, awe, insight-flush, or the opposite: fear of dissolving, paranoid ideation, the panic storm (overwhelming terror, fear of going mad, of never returning)",
        "The ego-dissolution spectrum: from pleasant self-loss to terrifying ego-death",
        "Physical: wide pupils, mild pulse and BP rise, slight tremor, appetite loss; usually unremarkable; hyperthermia and seizures suggest substitution (NBOMe/MDMA-class), not the classic agent",
        "Duration: LSD 8–12 hours; psilocybin 4–7; DMT minutes (the short-flight distinction); mescaline longer",
      ],
    },
    {
      category: "2. Hallucinogen persisting perceptual disorder (HPPD)",
      symptoms: [
        "Recurring visual distortions (flashbacks) or continuous phenomena: re-intruding fragments of the experience under stress, fatigue or darkness",
        "Visual snow (static), trailing/palinopsia (images clinging), halos, intensified colour, illusions of movement",
        "Reality-testing intact: the person knows the phenomena are the eye-brain's, not the world's",
        "Clinically significant distress; typically after the first or an early trip",
        "Unpredictable triggers: darkness, stress, cannabis, fatigue",
      ],
    },
    {
      category: "3. Prolonged post-trip psychosis",
      symptoms: [
        "A post-trip psychosis persisting for weeks: paranoid, self-referential, often with a mystical-doom colouring",
        "The distinction from schizophrenia's own debut is temporal and often only made in retrospect. The follow-up duty",
        "The vulnerability screen (personal and family psychosis history) predicts who",
      ],
    },
    {
      category: "4. PCP/ketamine dissociative intoxication (the violent corner)",
      symptoms: [
        "The triad: marked analgesia (self-injury without flinching), nystagmus (horizontal, vertical or rotatory, the bedside pearl), violent-agitated strength (the patient who fights six people)",
        "Hypertension, sweating, muscle rigidity, ataxia, vacant staring, disorganised speech, hallucinations",
        "Cyclical re-emergence: apparent recovery, then the storm again",
        "At high doses: coma, seizures, hyperthermia, rhabdomyolysis with renal failure",
        "Bizarre behaviour classical and street-legendary: nudity, staring into lights, peculiar postures",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The logic (history is the test)",
      code: "No confirmatory toxicology in the Indian casualty",
      criteria: [
        "Ingestion history from the patient or friends: blotter, mushroom, tablet or brew, and what the tablet was supposed to be.",
        "The syndrome's shape: perceptual storm with quiet vitals versus the PCP violent-numb-nystagmic shape.",
        "Time-course against the durations shelf: DMT minutes, psilocybin 4–7 hours, LSD 8–12 hours, mescaline longer; the timeline dating and predicting the event.",
        "The scene: party, festival, retreat, Goa.",
        "Co-ingestions asked always: cannabis, alcohol, stimulants, MDMA-class.",
        "Full vitals with temperature: hyperthermia or hypertensive crisis redirects the diagnosis to substitution or stimulant/MDMA territory.",
        "Mental state: perception phenomena versus delirium (orientation clouded or preserved?), reality-testing intact or lost, suicidal ideation, panic level.",
        "The vulnerability screen: personal and family psychiatric history, especially psychosis and bipolar.",
        "Physical examination: pupils, nystagmus (PCP's flag), injuries (the analgesic patient examined head-to-toe), rigidity, reflexes.",
      ],
      duration: "Minutes to 12 hours by agent: the timeline itself is diagnostic.",
      indianNote: "Routine Indian casualty screens do not test for the LSD-class. The blood was never going to answer; the history and the syndrome's shape carry the diagnosis.",
    },
    {
      system: "HPPD (the persisting-perceptual criteria, paraphrased)",
      code: "A clinical diagnosis after one honest eye screen",
      criteria: [
        "Re-experiencing of perceptual phenomena after cessation of the hallucinogen: flashbacks or continuous phenomena (visual snow, palinopsia, halos, intensified colour, illusions of movement).",
        "Reality-testing preserved: the person knows the phenomena are the eye-brain's, not the world's.",
        "Clinically significant distress.",
        "Not better explained by psychosis, delirium or another cause.",
        "The eye examined once (to retire retinal causes honestly) then the diagnosis is clinical; no test confirms it.",
      ],
      duration: "Weeks to months after the trip; typically declared after the first or an early trip.",
      indianNote: "The Indian HPPD patient has usually consulted three ophthalmologists and one temple before you; the correct diagnosis-giving is the treatment.",
    },
  ],
  severityScales: [
    {
      name: "The bad-trip triage ladder",
      fullName: "The quiet-vitals-to-toxicology staging",
      measures: "Where the acute party casualty sits, and which pathway the syndrome's shape opens.",
      ranges: [
        { min: 0, max: 0, severity: "The quiet-vitals panic storm", action: "Classic-agent territory: environment, one familiar person, talking down; benzodiazepine if the storm persists; restraint avoided; the doors, stairs and water's edge held" },
        { min: 1, max: 1, severity: "The storm that breaks through", action: "Oral or IV lorazepam/midazolam; the antipsychotic caution remembered, not first-line in the pure classic reaction; watch, do not wrestle" },
        { min: 2, max: 2, severity: "The toxicology redirect", action: "Hyperthermia, seizure, hypertensive storm or unknown tablet: treat as substitution (NBOMe/MDMA-class): cooling, cardiac monitoring, fluids; ask what the tablet was supposed to be" },
      ],
      indianNote: "The vitals and the shape, not the blood, decide the pathway: the Indian casualty's toxicology screen was never going to name the blotter.",
    },
  ],
  differentialDiagnosis: [
    { condition: "NBOMe sold as LSD", distinguishingFeatures: "Seizures, hyperthermia, hypertension, a longer-than-expected storm, severe agitation: the quiet-vitals rule broken.", keyDifferentiator: "Treat as medical toxicology: cooling, cardiac monitoring, fluids, and ask always what the blotter or tablet was supposed to be." },
    { condition: "MDMA/tablet substitution", distinguishingFeatures: "Hyperthermia, hyponatraemia from compulsive water-drinking, bruxism, the 'hug-drug' affect.", keyDifferentiator: "The sympathomimetic and serotonergic signature the classic agents lack: the substitution era's casualty." },
    { condition: "Temporal-lobe aura", distinguishingFeatures: "Stereotyped brief episodes, automatisms, EEG where suspected.", keyDifferentiator: "No pupil signs; the episode pattern epileptiform, not perceptual-storm." },
    { condition: "Migraine aura", distinguishingFeatures: "Visual phenomena with a headache history, minutes-long, no drug history.", keyDifferentiator: "The duration and the headache lineage: the drug history the tie-breaker." },
    { condition: "Primary psychotic disorder", distinguishingFeatures: "Perceptual phenomena plus delusions and functional decline; intoxication history absent or old.", keyDifferentiator: "The temporal relationship to the trip, and the follow-up that settles what the first interview cannot." },
    { condition: "Delirium (any cause)", distinguishingFeatures: "Clouded consciousness, fluctuating attention.", keyDifferentiator: "The hallucinogen patient is awake and orientated to planet, however far from it: the orientation test separating the two beds." },
    { condition: "PCP/ketamine intoxication", distinguishingFeatures: "The triad: analgesia + nystagmus + violent strength; cyclical re-emergence.", keyDifferentiator: "The numbness and the nystagmus, and the injuries the analgesia hides." },
  ],
  management: [
    { category: "psychotherapy", name: "The acute bad trip: environment first, then the script", description: "Quiet, dim-not-dark room; one calm familiar person; minimal handling: sensory reduction is the antidote to sensory amplification. Talking down with grounded orientation: name, place, 'the medicine is wearing off; hours, not forever', breathing, familiar objects; the reassurance script IS the treatment. Restraint avoided: physical struggle amplifies terror and injury.", whenToUse: "Every classic-agent crisis, from the first minute; most resolve here without a prescription.", indianContext: "The Goa cottage and the metro casualty run the same algorithm; the family's terror is treated with one calm explanation after the patient sleeps." },
    { category: "pharmacotherapy", name: "Benzodiazepines for the panic storm", description: "Oral or IV lorazepam/midazolam: resolving most crises that reassurance cannot; the one reliable medicine of the class's signature emergency.", whenToUse: "When the panic storm persists or escalates beyond environment and talking down.", indianContext: "A casualty benzo-calming admission is inexpensive (approx 2026); the benzodiazepine tier has no KYP drug lesson: taught here, route never invented." },
    { category: "pharmacotherapy", name: "The antipsychotic caution", description: "In a PURE classic hallucinogen reaction, haloperidol-class drugs can deepen dysphoria and are not first-line; reserved for the genuinely psychotic, for persistent agitation after benzodiazepine adequacy, or when PCP/NBOMe blur the picture: low-dose, cautious, the pragmatic toxicology practice.", whenToUse: "After the benzodiazepine tier has been given its chance; never as the reflex answer to terror.", indianContext: "The exam trap and the casualty trap in one: 'haloperidol is the drug of choice in bad trip' is false twice over." },
    { category: "lifestyle", name: "The physical-safety audit", description: "Drowning, balcony, road-flight during the 'escaping the trip' panic: the death in this class is usually accident, not chemistry; hold the doors, hold the ground floor, hold the water's edge.", whenToUse: "From the first minute of every bad trip, alongside the talking down.", indianContext: "The beach party and the high-rise flat share the same audit; one friend instructed by phone is the supervision channel." },
    { category: "pharmacotherapy", name: "PCP/ketamine intoxication: quiet room, generous benzos, full survey", description: "Quiet minimally-stimulating room (stimulation feeds the storm); benzodiazepines generous and titrated; antipsychotics cautiously if psychosis persists (haloperidol can lower the seizure threshold and worsen some PCP states). Full injury survey: the analgesia hides fractures and wounds; rhabdomyolysis screen (creatine kinase), renal function, temperature; hypertension managed when severe; the historical forced-acid-diuresis abandoned as harmful. Coma: supportive, airway, the re-emergence watch.", whenToUse: "The violent-numb-nystagmic arrival, and the hours after it, because the storm cycles back.", indianContext: "Do not discharge the patient who 'woke up clear' within the first hours; PCP is essentially absent from Indian streets, but mislabelled dissociatives travel under tranquiliser and club-drug names." },
    { category: "psychotherapy", name: "HPPD: the explanation-first ladder", description: "(1) Explanation and reassurance: the majority's distress is fear of what it might mean ('the drug is still inside', 'I am becoming schizophrenic'); the correct diagnosis calmly given is itself the main treatment, plus abstinence from further hallucinogens and cannabis (the common amplifier). (2) Reduce the amplifiers: sleep, stress, alcohol and stimulant hygiene. (3) Medication when distress persists: benzodiazepines short-course (the longest-standing practical option); the antiepileptic tier (lamotrigine the most-discussed, clonazepam-adjacent practice varies): an honest low-evidence zone, best described as case-series medicine; SSRIs where the anxiety-depression rider dominates; reported worsening with some antipsychotics and with cannabis, said plainly. (4) The cognitive-behavioural frame: acceptance-of-the-signal work and attention-management; the visual-snow literature's practical core.", whenToUse: "From the first consultation: the explanation IS the intervention; medication the last rung, not the first.", indianContext: "The consultation that resolves more than it prescribes; the natural-course data (many phenomena fade or soften over months-to-years) the decatastrophising instrument." },
    { category: "pharmacotherapy", name: "Prolonged post-trip psychosis: the first-episode pathway", description: "Antipsychotic treatment along standard lines, with the honest follow-up note that some of these are first-episode schizophrenia introduced by the trip, needing the full first-episode pathway, not merely detox-and-discharge.", whenToUse: "When psychosis persists beyond the pharmacological window (days to weeks) with paranoid, self-referential, mystical-doom content.", indianContext: "The temporal distinction from schizophrenia's debut is often only made in retrospect. The follow-up duty this course flags." },
    { category: "lifestyle", name: "Harm reduction and the honest trial position", description: "The moment-frame advice: the experienced sitter, the safe setting, the family-history question before anyone's first dose; reagent-test-the-tablet and party-medicine outreach belong to NGO frames, not official programmes. The psilocybin-therapeutics position stated honestly: overseas research trials for depression/PTSD/end-of-life distress; screened and monitored; research, not clinic. The retreat ticket and the dealer's blotter are not the trial.", whenToUse: "Every follow-up contact, delivered without moralising. The harm-reduction script the Goa case ends on.", indianContext: "The NDPS Act schedules LSD, psilocybin and mescaline stringently; the 2019-era notifications tightened research access; hence India's psilocybin-research silence (2026: no approved clinical trial programme)." },
  ],
  safety: {
    redFlags: [
      "Hyperthermia or seizure in anyone consuming 'LSD' (substitution (NBOMe/MDMA-class) until proven otherwise: the toxicology pathway) cooling, cardiac monitoring, fluids",
      "Hypertensive storm, muscle rigidity or hyperthermia in the violent-numb-nystagmic patient: high-dose PCP territory: coma, seizures, rhabdomyolysis with renal failure; CK, renal function, temperature",
      "The analgesic patient: injuries hidden without flinching: the full head-to-toe survey before any psychiatric label",
      "The PCP patient who 'cleared' and jokes with the staff: cyclical re-emergence; do not discharge within the first hours",
      "The panic-driven flight, toward water, balconies, roads: the death in this class is usually accident, not chemistry; hold the exits and the edges",
      "Post-trip psychosis persisting weeks with self-referential or mystical-doom content, some are first-episode schizophrenia introduced; the first-episode pathway, not discharge",
    ],
    urgentGuidance:
      "The order of operations: (1) read the syndrome's shape before reaching for any prescription; the quiet-vitals panic storm, the toxicology storm, or the violent-numb-nystagmic corner; (2) hyperthermia, seizures, cardiac symptoms or an unknown tablet run toxicology rules (cooling, cardiac monitoring, fluids, and always ask what the tablet was supposed to be); (3) the classic storm gets environment, one familiar person, the truth script and (if needed) a benzodiazepine; haloperidol is not first-line in the pure classic reaction, and restraint is avoided; (4) the dissociative corner gets the quiet room, generous benzodiazepines, and the full injury survey with CK, renal function and temperature, with the re-emergence watch that forbids the early discharge; (5) before anyone goes home: the vulnerability screen (personal and family psychosis history) and the batch check; (6) persisting perceptual phenomena get the explanation-first HPPD ladder: the eye examined once, the diagnosis named, the amplifiers retired, the distress heard.",
  },
  drugLinks: [],
  contentGaps: [
    "The benzodiazepine tier (lorazepam, midazolam, the bad-trip panic storm and the PCP calming mainstay) has no KYP drug lessons; the crisis algorithm is taught here, the route never invented.",
    "Lamotrigine (the most-discussed medication rung of the HPPD ladder) has no KYP drug lesson; its low-evidence, case-series status is taught honestly in the management section.",
    "The clonazepam-adjacent HPPD practice (benzodiazepine short-courses for persisting perceptual distress) has no KYP lesson; recorded here as part of the honest low-evidence zone.",
    "The antipsychotic-caution tier (haloperidol-class, reserved for genuine psychosis, post-benzo agitation or the PCP/NBOMe blur) has no KYP drug lessons; the caution itself is the teaching point.",
    "The SSRI anxiety-depression rider tier of HPPD (sertraline and cousins, which do have KYP lessons) is deliberately not drug-linked here: in this class the medicine is the last rung, the explanation the first. The rider is taught in the management ladder, not routed as if it were the treatment.",
  ],
  patientGuide: {
    whatIsIt:
      "This is the family of drugs (LSD, magic mushrooms (psilocybin), DMT and mescaline) famous for one thing doctors call the great exception: they take no physical hold. No withdrawal, no daily craving, and tolerance so fast that a second consecutive-day trip barely works. The troubles they do cause are different in kind: the terrifying panic storm of a bad trip; the rarely persisting visual disturbances afterwards (flashbacks, 'visual snow'); the uncovering of a psychotic illness in a mind that was already vulnerable, and, in the separate PCP/ketamine family, the most dangerous intoxication in the street catalogue: numb, strong and violent.",
    whatCausesIt:
      "The classic drugs switch on one receptor in the brain (5-HT2A) sitting on the machinery that builds our model of the world. Switching it on makes the model run rich: colours deepen, time stretches, the sense of 'I' can loosen or dissolve. The drug is not stored in the body and it leaves within hours (LSD, the longest, 8–12 hours). The persisting visual symptoms some people keep are not leftover drug. They are a changed setting in the brain's visual networks, like a room that keeps ringing faintly after the bell has stopped.",
    symptoms:
      "During the trip: intensified colour and sound, seeing music, walls breathing, minutes feeling like hours, the sense of self loosening, and in the bad trip, overwhelming terror: fear of going mad, of never coming back. The body stays surprisingly quiet: wide pupils, a slightly fast pulse, nothing more; high fever or a fit mean the tablet was NOT what the dealer said. After: in a minority, visual snow (static), trailing after-images, halos, with the person fully aware these are the eye-brain's, not the world's. In the PCP family: no pain, jerking eyes (nystagmus) and strength that fights six people, in waves that come back after they seem to have gone.",
    treatment:
      "A bad trip is treated with the setting, not a syringe: a quiet dim room, one calm familiar face, the truth ('it ends by morning') breathing, water, no struggle, no mockery; a benzodiazepine if a doctor can be reached by phone. Restraint makes it worse; antipsychotic medicines are not the first answer in a pure hallucinogen reaction (they are reserved for a genuinely psychotic picture). The persisting visual symptoms are treated first with the explanation itself, naming the condition, showing that the fear is the disease, and retiring the amplifiers (lost sleep, stress, cannabis); medicines are the last, low-evidence rung. A psychosis that stays for weeks gets the standard antipsychotic pathway and proper follow-up.",
    selfHelp: [
      "The moment-script for a bad trip: dark-quiet room, one calm familiar person, his name, the truth ('it ends by morning'), breathing, water (no struggle, no mockery) and physically hold the doors, stairs and water's edge; the danger is the flight, not the drug.",
      "The family-history question before anyone's first dose: psychosis or bipolar in the bloodline is the one answer that changes the plan.",
      "The amplifier retirement for persisting visuals: sleep, stress, cannabis, late nights; retired one by one.",
      "Do not refresh the forums: the internet-diagnosis cascade amplifies exactly what the explanation treats.",
      "Always ask what the tablet was supposed to be. The substituted tablet (NBOMe sold as LSD) is the medical emergency hiding inside the party.",
    ],
    whenToSeekHelp: [
      "High temperature, a fit, or collapse after any 'LSD' or 'ecstasy': hospital the same hour (the substituted-tablet emergency)",
      "Terrified and far from help: reach a doctor by phone; a benzodiazepine can be guided in",
      "Numbness with injury, jerking eyes, or fighting without feeling pain: the dissociative emergency: hospital, full examination",
      "Visual disturbances lasting weeks after the trip, one eye examination, then the right clinician: the naming is the treatment",
      "Beliefs or fears that stay for weeks after the trip: the first-episode pathway, not waiting",
      "Any thought of self-harm during or after the trip: immediate help",
    ],
    indianResources: [
      "The casualty near the festival circuit or the metro hospital: the crisis tier this class actually needs",
      "Tele-MANAS 14416 (24×7, free), for the family's distress and the aftercare conversation",
      "The single ophthalmology screen for persisting visuals: ask the treating team; one honest screen is enough",
      "NGO and party-medicine outreach (reagent-testing, the experienced-sitter rule): harm-reduction frames outside the official programmes",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific hallucinogen-use pathway exists; the NDPS Act schedules LSD, psilocybin and mescaline stringently (the 2019-era notifications tightened research access), and 2026 India has no approved psilocybin clinical-trial programme. Practice is the crisis-and-aftercare logic this course teaches, delivered through casualty care with the DMHP psychiatric tier and Tele-MANAS carrying follow-up.",
    systemContext: "Four consultations carry the Indian load: (1) the metro-college student brought from a party (panicking, pupils wide, vitals quiet) the talking-down-plus-benzo casualty case, with the family's terror to treat after the patient sleeps; (2) the returning ayahuasca or mushroom-'retreat' traveller with either HPPD or a mystical-psychotic question: the history-taking where 'spiritual emergency' frames fight medical frames and the clinician must speak both dialects; (3) the undersuspected substitution case: the 'ecstasy' tablet that was NBOMe, arriving as hyperthermia and seizures into the toxicology pathway; (4) the rare HPPD presentation: the engineering student with visual snow who has consulted three ophthalmologists and one temple before you, for whom the correct diagnosis-giving is the treatment.",
    programmeContext: "Emergency management happens in casualties near festival circuits and metro hospitals; harm-reduction frames (reagent-test-the-tablet, the one-experienced-sitter rule) belong to NGO and party-medicine outreach rather than official programmes; the DMHP psychiatric tier and Tele-MANAS carry the aftercare this class's tier is named for.",
    costConsiderations: "Costs (approx 2026): a casualty benzo-calming admission is inexpensive; the HPPD workup is mostly the single ophthalmology screen; the therapeutic-research option does not exist domestically: the honest answer to the family asking whether to take him abroad for the depression-mushroom trial is the standard, not the price: those trials exclude, screen and monitor; they are not a retreat ticket, and his psychosis-vulnerability may be the exclusion.",
    culturalConsiderations: "The 'spiritual emergency' presentation is real and must be met bilingually: the retreat traveller's frame (a journey, a purification, a teaching) and the medical frame (an intoxication, a perceptual after-effect, a precipitated illness) describe the same events. The clinician fluent in both wins the negotiation. The temple's generational plant use is a structure, not a chemistry pass: ceremonial contexts screen participants, dose carefully and hold the container together; the unscreened mind and the unstructured dose are what the tourist circuit sells. The family's retreat question: 'should we take him abroad for the trial?': gets the honest standard: the trials are research settings, overseas, screened and monitored; a mind with psychosis in the family is usually exactly whom they exclude.",
    patientCounselling: [
      "The moment-script: 'Dark room, one familiar face, his name, and the truth; it ends by morning. Hold the doors, the stairs and the water's edge. No struggle, no mockery.'",
      "The three-months-later script: 'The drug left his body within hours; what remains is a changed perceptual setting, like a room that keeps ringing after the bell stopped (not stored drug, not madness) and it fades or softens for most.'",
      "The family-history script: 'Before anyone's first dose, answer one question honestly; psychosis or bipolar in the bloodline? That answer changes the plan.'",
      "The retreat-question script: 'The trials are real, overseas, screened and monitored; the retreat ticket and the dealer's blotter are not the trial, and a mind with psychosis in the family is usually exactly whom the trials exclude.'",
      "The substitution script: 'Always ask what the tablet was supposed to be; the emergency at this party may be a different drug wearing this one's name.'",
      "The aftercare script: 'The follow-up visit is where this class is actually treated; the vulnerability screen, the amplifiers retired, the distress heard.'",
    ],
  },
  decisionPath: {
    title: "The party casualty: which emergency is this?",
    nodes: [
      {
        id: "start",
        question: "A young person arrives (or is brought) from a party, festival or retreat with altered perception or behaviour. First read: the syndrome's shape and the vitals.",
        branches: [
          { label: "Terrified, awake, vitals quiet, pupils wide", next: "classic-gate" },
          { label: "Hyperthermia, seizure, hypertensive storm or unknown tablet", next: "substitution-path" },
          { label: "Violent, numb, nystagmic", next: "pcp-path" },
          { label: "The trip is over: phenomena or fears persisting", next: "aftercare-gate" },
        ],
      },
      {
        id: "classic-gate",
        question: "The classic bad trip: awake, orientated to planet, terrified.",
        branches: [
          { label: "The storm settles with environment and talking down", next: "talking-path" },
          { label: "The panic storm persists or escalates", next: "benzo-path" },
          { label: "Content turns psychotic and persists beyond the trip", next: "psychosis-path" },
        ],
      },
      {
        id: "talking-path",
        question: "Environment and the script as the medicine.",
        recommendation: "Quiet, dim-not-dark room; one calm familiar person; minimal handling; grounded orientation: name, place, 'the medicine is wearing off, hours not forever', breathing, familiar objects. The physical-safety audit run alongside: doors, stairs, balconies, the water's edge held; the death in this class is usually accident or flight, not chemistry. Restraint declined; the family given one calm explanation after the patient sleeps; the batch check and the vulnerability screen before anyone scatters.",
      },
      {
        id: "benzo-path",
        question: "The storm that reassurance cannot hold.",
        recommendation: "Oral or IV lorazepam/midazolam: the benzodiazepine resolves most crises the script cannot. The antipsychotic caution remembered: haloperidol-class drugs can deepen dysphoria in a PURE classic reaction and are not first-line; reserved for the genuinely psychotic, persistent agitation after benzodiazepine adequacy, or the PCP/NBOMe blur. Chemical calming chosen over physical struggle; the safety audit continued; the vulnerability screen and the batch check before discharge.",
      },
      {
        id: "substitution-path",
        question: "The quiet-vitals rule broken.",
        recommendation: "Treat as substitution (NBOMe-family sold as LSD, or an MDMA-class tablet) and run toxicology-grade management: cooling, cardiac monitoring, fluids. Always ask what the tablet was supposed to be; one seizure in another user of the same batch is the epidemiology at the cottage level. The psychiatric lesson: this patient was never a pure talking-down case.",
      },
      {
        id: "pcp-path",
        question: "The dissociative triad: analgesia, nystagmus, violent strength.",
        branches: [
          { label: "Aroused, violent, sweating, hypertensive", next: "pcp-calm-path" },
          { label: "Coma, seizure or high-dose signs", next: "pcp-medical-path" },
        ],
      },
      {
        id: "pcp-calm-path",
        question: "The storm in progress.",
        recommendation: "Quiet minimally-stimulating room (stimulation feeds the storm); benzodiazepines generous and titrated; antipsychotics cautiously if psychosis persists (haloperidol can lower the seizure threshold and worsen some PCP states). Full injury survey: the analgesia hides fractures and wounds; rhabdomyolysis screen (creatine kinase), renal function, temperature; hypertension managed when severe. Restraint minimised; and the discharge that must not happen: the patient who 'woke up clear' stays; the storm returns in waves.",
      },
      {
        id: "pcp-medical-path",
        question: "The high-dose picture.",
        recommendation: "Supportive care with airway protection; the re-emergence watch maintained through the cycles; hyperthermia, seizures and rhabdomyolysis with renal failure managed with the physicians; the historical forced-acid-diuresis remembered only as an abandoned harm.",
      },
      {
        id: "aftercare-gate",
        question: "The trip ended: what stayed behind?",
        branches: [
          { label: "Visual phenomena, insight intact, weeks to months", next: "hppd-ladder-path" },
          { label: "Psychotic content persisting weeks", next: "psychosis-path" },
          { label: "The family asking about the next retreat or trial", next: "vulnerability-gate" },
        ],
      },
      {
        id: "hppd-ladder-path",
        question: "The persisting perceptual disorder: insight intact.",
        recommendation: "The eye examined once to retire retinal causes honestly, then the explanation-first ladder: the diagnosis named and explained (a perceptual-network after-effect, not stored drug, not ongoing intoxication, not psychosis); the fear decatastrophised with the natural-course data (many phenomena fade or soften over months-to-years); the amplifiers retired (sleep, stress, cannabis, late nights); the cognitive-behavioural frame offered (acceptance-of-the-signal, attention-management); review at weeks: medication only if distress persists, as the last low-evidence rung (benzodiazepine short-course, the lamotrigine-discussed tier, SSRIs for the anxiety-depression rider).",
      },
      {
        id: "psychosis-path",
        question: "The psychosis that outlasted the pharmacology.",
        recommendation: "Antipsychotic treatment along standard lines, with the honest follow-up note that some of these are first-episode schizophrenia introduced by the trip: the full first-episode pathway (the Schizophrenia course), not detox-and-discharge. The temporal distinction from schizophrenia's own debut is often only made in retrospect. The follow-up arranged, not assumed.",
      },
      {
        id: "vulnerability-gate",
        question: "Before the next dose, the next retreat or the abroad-trial question.",
        recommendation: "The vulnerability screen: personal and family psychosis history, bipolar-spectrum instability; the answer that changes the plan before anyone's first dose. The honest trial position: overseas research settings, screened and monitored, excluding exactly the vulnerable minds families most want to help; India 2026 has no approved clinical trial programme under the NDPS schedules. The harm-reduction script delivered without moralising: the experienced sitter, the safe setting, the family-history question.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reaching for haloperidol first in the pure bad trip",
      why: "Antipsychotics can deepen dysphoria in a classic hallucinogen reaction and were never the first line: the storm belongs to the environment, the familiar person, the truth script and, if needed, a benzodiazepine.",
      correction: "Haloperidol-class reserved for the genuinely psychotic, persistent agitation after benzodiazepine adequacy, or the PCP/NBOMe blur: low-dose and cautious when used.",
    },
    {
      mistake: "Reading hyperthermia or seizures as expected LSD",
      why: "The quiet-vitals rule: the classic agents run a profound subjective storm on near-normal vitals; hyperthermia and seizures are the substitution signature (NBOMe/MDMA-class), a different emergency wearing this one's name.",
      correction: "The toxicology redirect: cooling, cardiac monitoring, fluids, and the question asked always: what was the tablet supposed to be?",
    },
    {
      mistake: "Discharging the PCP patient who first 'clears'",
      why: "The dissociative intoxication is cyclically re-emergent. The calm, joking hour is a trough between waves, not the end of the storm.",
      correction: "Observe longer; the injury survey, CK, renal function and temperature completed first: the storm returns.",
    },
    {
      mistake: "Explaining HPPD as stored drug, ongoing intoxication or early psychosis",
      why: "The three misconceptions that dominate family (and some clinical) understanding. Each one raises exactly the distress the treatment must lower, and drives the forum-refreshing that amplifies the symptoms.",
      correction: "The perceptual-network after-effect named and explained: not stored drug, not intoxication, not madness; the explanation IS the intervention.",
    },
    {
      mistake: "Wrestling the panicking tripper into restraint",
      why: "Physical struggle amplifies terror and injury, and the real dangers are the flight and the fall, not the chemistry.",
      correction: "Chemical calming with benzodiazepines plus environment; the doors, stairs and water's edge physically held by people, not straps.",
    },
    {
      mistake: "Answering the retreat question with the headline",
      why: "'Mushrooms treat depression' is a trial-era half-truth: the trials are overseas research settings that screen, exclude and monitor. The retreat ticket and the dealer's blotter are not the trial.",
      correction: "The honest position: research, not clinic; India 2026 has no approved programme; and the family's psychosis history may be exactly the exclusion the trial exists to enforce.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Why hallucinogens escape the addictive syndrome: the three pharmacological reasons and the services consequence (crisis-and-aftercare, not detox).",
        "The 5-HT2A story in one breath: partial agonism on deep pyramidal neurons, cortical prediction machinery running chaotic, ego-dissolution via default-mode de-synchronisation.",
        "The vital-signs irony: what you expect in classic intoxication, and what finding redirects you to NBOMe/MDMA substitution.",
        "The PCP triad and its three medical must-dos: the injury survey, CK/renal/temperature, and the re-emergence watch.",
        "HPPD defined in two sentences, with the insight intact and the three misconceptions corrected.",
      ],
      practical: [
        "Demonstrate the talking-down script at the bedside of the simulated party casualty: the room, the person, the truth, and the physical-safety audit named aloud.",
        "Elicit the HPPD history: the first or early trip, the triggers (darkness, stress, cannabis, fatigue), the intact insight, the distress, and deliver the explanation-first consultation.",
      ],
      longAnswer: [
        "A young man brought from a rave, panicking, wide pupils, vitals normal: management (the environment-talking-down-benzo answer with restraint avoidance and the substitution watch).",
        "Hallucinogen persisting perceptual disorder: diagnosis, the three misconceptions, and the management ladder.",
        "PCP intoxication: the triad, the complications, and the emergency management including the discharge rule.",
      ],
    },
    neetPg: {
      highYield: [
        "THE RECEPTOR: 5-HT2A partial agonism; the single-address pharmacology of the classic class.",
        "THE EGO STORY: ego-dissolution via default-mode network de-synchronisation; the neuroimaging signature.",
        "THE NON-ADDICTION LECTURE: no reward hijack, no withdrawal, tolerance in DAYS (the second consecutive-day trip famously weak); the great exception.",
        "THE QUIET-VITALS RULE: modest pupil dilation, slight pulse rise; hyperthermia or seizures = NBOMe/MDMA substitution, not classic LSD.",
        "THE DURATIONS SHELF: DMT minutes; psilocybin 4–7 hours; LSD 8–12 hours; mescaline longer: the duration the history takes.",
        "THE PCP TRIAD: analgesia + nystagmus (horizontal, vertical, rotatory) + violent strength, with cyclical re-emergence forbidding the early discharge.",
        "THE NBOME MASQUERADE: seizures, hyperthermia, hypertension, longer-than-expected storm; the toxicology pathway.",
        "HPPD: visual snow, palinopsia (trailing after-images), halos; insight INTACT, not psychotic episodes.",
        "ONE-LINERS TO BANK: ayahuasca = DMT + MAOI brew; mescaline = peyote cactus, the classic phenethylamine; serotonin syndrome: the MAOI-brew combination, not the classic agent alone.",
        "THE FIRST-LINE ANSWER: bad trip = environment + talking down + benzodiazepine if needed; haloperidol NOT first-line.",
      ],
      pyqConcepts: [
        "The trap set: 'LSD causes physical dependence'; false; 'flashbacks are psychotic episodes': false, insight intact.",
        "'Haloperidol is the drug of choice in bad trip': false twice over: benzos and talking down own the storm.",
        "'PCP intoxication shows pinpoint pupils': false: nystagmus is the sign; miosis belongs to the opioids.",
        "'Hyperthermia is expected in classic LSD': false: the substitution signature, the quiet-vitals rule.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 24-year-old designer is brought from a Goa beach party two hours after first-time 'LSD': terrified, saying the sky is coding him, pupils wide, vitals quiet, stopped by friends from running toward the water. Management unfolds as the algorithm itself: the quiet cottage with lights low, one friend instructed by phone ('tell him his name, tell him it ends by morning, stay with him'), oral lorazepam when the storm breaks through, sleep by hour six, a sheepish noon. The reasoning tested: the vitals that stay quiet buy the classic pathway and exclude the substitution redirect; the water's edge audit named before the prescription; and the follow-up that completes the case: the vulnerability screen (an aunt with a psychotic episode) and the batch check (one seizure in another user of the same blotter: NBOMe-family suspicion, the epidemiology at the cottage level).",
        "A 26-year-old man is brought by police after fighting six constables 'without feeling anything': horizontal nystagmus on gaze, deep lacerations on both forearms he has not noticed, hypertensive, sweating, rigid. An hour after benzodiazepines he is calm, joking with the staff, asking to go home. The reasoning: the triad (analgesia + nystagmus + violent strength) opens the dissociative pathway (the quiet room, generous titrated benzodiazepines, the full head-to-toe injury survey with CK, renal function and temperature) and the request to go home is declined: the cyclical re-emergence of PCP-class intoxication forbids the early discharge; the storm returns in waves.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Benzodiazepines (with environment and talking down): the bad-trip first line; haloperidol is not.",
        "The PCP triad: analgesia, nystagmus, violent strength.",
        "HPPD: visual snow and palinopsia with intact insight; a perceptual disorder, not psychosis.",
        "DMT = the minutes-long trip; ayahuasca = DMT + MAOI brew.",
        "Mescaline = peyote cactus, the classic phenethylamine.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The services consequence is the batch's quiet thesis: this class needs crisis-and-aftercare tiers, not detox beds; commission accordingly, and never let the absence of withdrawal be read as absence of harm.",
        "Speak both dialects: the retreat traveller's 'spiritual emergency' and your medical frame describe the same event; the clinician fluent in both wins the negotiation the mono-lingual clinician loses.",
        "The batch check is epidemiology at the cottage level: one seizure in another user of the same blotter rewrites the whole case as substitution.",
        "The honest trial position, delivered without enthusiasm or contempt: overseas, screened, monitored, excluding the vulnerable; the retreat ticket is not the trial, and 2026 India has no approved programme.",
        "The re-emergence discipline: the dissociative admission is a watch, not a door. The patient who clears is the patient you keep.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The Goa hour that lasted nine",
      presentation: "First-time LSD at a beach party, a terror of never returning, and a flight toward the water stopped by friends: the hour that had to be survived until morning.",
      initialPresentation: "A 24-year-old designer from Pune was brought to a cottage near a Goa beach party by his friends, two hours after his first-ever LSD blotter. He was terrified, repeating that 'the sky is coding me' and that he would never come back; he had tried to run toward the water and had been physically stopped by two friends. On arrival: wide pupils, quiet vital signs, awake and oriented when spoken to slowly, no focal deficits, no fever, no seizure.",
      history: "First-time hallucinogen use, on friends' suggestion at the party; the blotter bought at the venue (dealer unknown, dose unknown). No personal psychiatric history; the family history later revealing an aunt with a psychotic episode. Co-ingestions: alcohol earlier in the evening, no cannabis; no medical history, no regular medication.",
      examination: "Pupils widely dilated but reactive; pulse mildly up, temperature normal, the rest of the vitals unremarkable. Mental state: intense perceptual distortion with flooding visual phenomena, paranoid-flavoured terror ('being coded', fear of never returning), reality-testing strained but orientation to person and place preserved; no command hallucinations elicited.",
      diagnosis: "Acute classic hallucinogen panic reaction (the bad trip) on quiet vitals; substitution not excluded by history alone.",
      management: "Environment first: a quiet cottage room with lights low, one familiar friend staying with him, minimal handling; the friend instructed by phone: 'tell him his name, tell him it ends by morning, stay with him'. The truth script delivered in plain words; breathing paced; water within reach and the water's edge, stairs and balcony physically held. Oral lorazepam when the panic storm broke through the reassurance; the physical-safety audit maintained through the night.",
      outcome: "Sleep by hour six; awake and sheepish by noon, with insight fully restored and no residual perceptual phenomena. The follow-up completed the case: the vulnerability screen (the aunt's psychotic episode (the family-history conversation before anyone's next dose), the batch check (one seizure in another user of the same blotter batch) NBOMe-family suspicion, making this a substitution-inclusive event), and the harm-reduction script delivered without moralising: the experienced sitter, the safe setting, and the family-history question.",
      teachingPoints: [
        "Environment-plus-talking-down IS the medicine; the benzodiazepine is the adjunct, not the answer.",
        "The batch check is epidemiology at the cottage level, one seizure in another user rewrites the case as substitution.",
        "The vulnerability screen belongs to the follow-up, before the patient and the friends scatter.",
        "The family's fears need one calm explanation, not three consultations.",
        "The death in this class is usually accident or flight, not chemistry. The water's edge audit is the treatment's silent half.",
      ],
    },
    {
      title: "The snow that stayed",
      presentation: "Four months of visual snow after a Himalayan retreat's 'spiritual journey': three ophthalmology clearances, one internet cascade, and a consultation that resolved more than it prescribed.",
      initialPresentation: "A 21-year-old engineering student in Bengaluru presented with four months of continuous visual snow and light-trails after psilocybin-containing mushrooms taken at a Himalayan retreat, framed by him and his family as a spiritual journey. He had obtained three ophthalmology clearances; his fear of 'becoming mad' was growing, fed by a cascade of internet self-diagnosis and nightly forum-refreshing. Insight was fully intact (he knew the phenomena were his eye-brain's, not the world's) and the distress was clinical: concentration lost, sleep deteriorating, cannabis use nightly.",
      history: "A single psilocybin exposure at the retreat, first-time use, in an unscreened tourist-ceremonial setting; no personal or family psychiatric history; the visual phenomena beginning in the days after the trip and persisting unchanged; triggers noted with darkness, fatigue and cannabis; three ophthalmology consultations with normal examinations; escalating internet research replacing sleep.",
      examination: "Normal general and neurological examination; visual acuity and fundus normal (the third clearance in the file); mental state: oriented, full insight into the phenomena's nature, marked health anxiety centred on becoming schizophrenic, checking-and-searching compulsion, no psychotic content, no mood syndrome beyond the distress.",
      diagnosis: "Hallucinogen persisting perceptual disorder (HPPD): visual snow and palinopsia with intact insight and clinically significant distress; the anxiety and checking compounding it.",
      management: "The consultation that resolves more than it prescribes: the diagnosis named and explained; a perceptual-network after-effect, not psychosis, not stored drug, not ongoing intoxication; the fear decatastrophised with the natural-course data (many phenomena fade or soften over months-to-years); the amplifiers retired one by one: the late nights, the cannabis, the screen-auditing compulsion; brief cognitive-behavioural work for the checking and the acceptance-of-the-signal frame; a review fixed at eight weeks. No medication prescribed at the first visit: the last rung held in reserve.",
      outcome: "At the eight-week review: the snow persists, the distress has halved; the sleep restored, the forums abandoned, the checking retired, the concentration returning. The perceptual tail outlasts the fear, and the fear was the disease's active ingredient.",
      teachingPoints: [
        "In HPPD, the explanation IS the intervention; reassurance is active treatment.",
        "Medication is the last rung, not the first, and the low-evidence zone said plainly to the patient.",
        "The amplifiers (sleep, stress, cannabis) are the treatable part of a phenomenon that fades on its own timescale.",
        "The 'spiritual emergency vs medical event' negotiation is won by a clinician fluent in both languages: the retreat frame respected, the medical frame delivered.",
        "One honest eye screen retires the retinal causes; three repeated screens feed the checking.",
      ],
    },
  ],
  clinicalPearls: [
    "The great exception: no reward hijack, no withdrawal, dependence rarely; the class that needs crisis-and-aftercare services, not detox beds.",
    "Tolerance in days: the receptor's own tachyphylaxis makes the second consecutive-day trip famously weak, and the episodic temple-visit pattern pharmacologically inevitable.",
    "The quiet-vitals irony: a profound subjective storm on modest pupil dilation and a slight pulse rise; hyperthermia or seizures mean NBOMe/MDMA substitution until proven otherwise.",
    "The bad-trip algorithm in order: environment, one familiar person, the truth script, the benzodiazepine, and restraint declined.",
    "'It ends by morning'. The reassurance script is the treatment, and it is truthful pharmacokinetics.",
    "Haloperidol is not first-line in the pure classic reaction: the caution expires only with genuine psychosis, post-benzo agitation, or the PCP/NBOMe blur.",
    "The death in this class is usually accident or flight, not chemistry. Hold the doors, the stairs, the balconies and the water's edge.",
    "HPPD: visual snow, palinopsia, halos, with insight intact; not stored drug, not ongoing intoxication, not psychosis.",
    "In HPPD the explanation IS the treatment; medication is the last, low-evidence rung (benzodiazepine short-course, the lamotrigine-discussed tier, SSRIs for the anxiety rider).",
    "The PCP triad: analgesia + nystagmus + violent strength; the bedside pearl is the nystagmus, and the analgesia hides the injuries.",
    "Cyclical re-emergence, never discharge the dissociative patient who first 'clears'; the storm returns in waves.",
    "The analgesic patient is examined head-to-toe: fractures and wounds without flinching, with CK, renal function and temperature alongside.",
    "The psilocybin-trial honest position: overseas, screened, monitored, excluding the vulnerable, not a retreat ticket; India 2026 has no approved programme.",
  ],
  highYieldSummary: [
    "Definition: the classic hallucinogens (LSD, psilocybin, DMT, mescaline) are the great exception among recreational drugs (no reward-circuit hijack, no withdrawal syndrome, tolerance within days (tachyphylaxis), dependence rarely) with the clinical load concentrated instead in the acute panic or psychotic reaction, the persisting perceptual disorder (HPPD) and the precipitation of psychotic illness in vulnerable minds; PCP/ketamine are pharmacologically a separate family (the NMDA-blocking dissociatives) with the street catalogue's most dangerous intoxication.",
    "Mechanism: partial agonism at 5-HT2A on the deep pyramidal neurons of the association cortex; the world-modelling machinery running richer and more chaotic (perceptual loosening, synaesthesia, time dilation), with the default-mode network's de-synchronisation the neuroimaging signature of ego-dissolution; the quiet-vitals irony (modest pupil dilation, slight pulse rise, minimal toxicity) redirects hyperthermia and seizures to NBOMe/MDMA substitution; the exception's anatomy (no mesolimbic capture) dictates the service tier: crisis-and-aftercare, not detox-and-agonist.",
    "Clinical: the acute intoxication (perceptual storm, ego-dissolution spectrum, durations shelf: DMT minutes, psilocybin 4–7 hours, LSD 8–12 hours, mescaline longer); the bad trip (terror, fear of going mad, flight risk, the death usually accident, not chemistry); HPPD (visual snow, palinopsia, halos, flashbacks, insight intact, distress present, typically after the first or an early trip); the prolonged post-trip psychosis (paranoid, mystical-doom, some first-episode schizophrenia introduced); the PCP corner (analgesia + nystagmus + violent strength, hypertension, rigidity, ataxia, cyclical re-emergence; high doses: coma, seizures, hyperthermia, rhabdomyolysis with renal failure).",
    "Diagnosis: the history IS the test in India (casualty screens do not test the LSD-class); ingestion history, syndrome shape, time-course, scene; vitals with temperature (hyperthermia/hypertensive crisis = the substitution or stimulant/MDMA redirect); the vulnerability screen (personal/family psychosis, bipolar); the physical examination (pupils, nystagmus, the head-to-toe injury survey of the analgesic patient); the differential: NBOMe-sold-as-LSD, MDMA substitution, temporal-lobe aura, migraine aura, primary psychosis, delirium (the hallucinogen patient awake and orientated to planet), PCP intoxication.",
    "Management: the bad trip; environment first (quiet dim-not-dark room, one calm familiar person, minimal handling), talking down with the truth script, benzodiazepines (oral/IV lorazepam or midazolam) for the panic storm, haloperidol-class NOT first-line in the pure classic reaction, restraint avoided, the physical-safety audit; PCP: quiet room, generous titrated benzodiazepines, the full injury survey with CK, renal function and temperature, the re-emergence watch that forbids the early discharge, the abandoned acidifying tricks remembered as harm; HPPD: the explanation-first ladder (diagnosis-giving as treatment, amplifiers retired, medication last and low-evidence, CBT frame for the distress); prolonged psychosis: standard antipsychotics with the first-episode pathway.",
    "The therapeutic-research honest position: psilocybin trials for depression/PTSD/end-of-life distress are overseas, screened and monitored research, not clinic practice and not a retreat ticket; the NDPS Act schedules LSD, psilocybin and mescaline stringently, the 2019-era notifications tightened research access, and 2026 India has no approved clinical trial programme: the returning retreat traveller meets a clinician who can hold both the research promise and its exclusions honestly.",
    "The Indian tier: negligible population numbers, real circuit casualties; the Goa and coastal-festival circuit, metro elite party scenes, darknet-postal blotter, the undersuspected substituted tablet (always ask what it was supposed to be), the Himalayan mushroom-picking belt, the returning retreat traveller with the spiritual-emergency frame; the clinician's skill is recognition and calm management in both dialects, with the casualty tier inexpensive, the HPPD workup mostly one honest ophthalmology screen, and the aftercare visit where this class is actually treated.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "hud-quiz-1",
      question: "The chief reason hallucinogens escape the addictive syndrome:",
      options: ["Their doses are too small to matter", "No reward-circuit capture, no reliable hedonic drive, no withdrawal — and receptor tachyphylaxis within days enforcing episodic use", "They are too expensive for daily use", "Rapid physical dependence prevents reuse"],
      correctIndex: 1,
      explanation: "The pharmacology decides the service tier: crisis-and-aftercare, not detox-and-agonist.",
      afterSectionId: "mechanism",
    },
    {
      id: "hud-quiz-2",
      question: "A party-goer panicking on 'LSD' arrives with hyperthermia and a seizure. The clinical redirection:",
      options: ["Expected classic LSD effect — observe only", "Suspect substitution (NBOMe or MDMA-class) and run toxicology-grade management: cooling, cardiac monitoring, fluids", "Give haloperidol immediately", "Physically restrain to control the seizure"],
      correctIndex: 1,
      explanation: "The quiet-vitals rule of the classic agents; hyperthermia and seizures are the substitution signature.",
      afterSectionId: "differential",
    },
    {
      id: "hud-quiz-3",
      question: "First-line management of a pure classic bad trip:",
      options: ["Haloperidol IM", "Physical restraint for safety", "Low-stimulation environment, talking down by a familiar person, benzodiazepines if the panic storm persists", "Gastric lavage"],
      correctIndex: 2,
      explanation: "Sensory reduction, orientation and truthfulness are the medicine; restraint amplifies the danger.",
      afterSectionId: "management",
    },
    {
      id: "hud-quiz-4",
      question: "Visual snow and light-trails persisting four months after psilocybin, insight intact, distress present. Diagnosis and first intervention:",
      options: ["Schizophrenia — start an antipsychotic", "HPPD — give the diagnosis and its explanation (the treatment itself), retire the amplifiers, review; medication last", "Migraine — start a triptan", "Simple phobia of visuals"],
      correctIndex: 1,
      explanation: "Naming it, decatastrophising it and removing the amplifiers is the majority of the treatment; the medicine runs out long before the care does.",
      afterSectionId: "management",
    },
    {
      id: "hud-quiz-5",
      question: "The PCP-intoxicated patient who has 'cleared' and jokes with the staff one hour after a violent storm:",
      options: ["Discharge home immediately", "Observe longer — the intoxication is cyclically re-emergent; the storm returns in waves", "Start disulfiram", "Begin methadone"],
      correctIndex: 1,
      explanation: "The re-emergence cycle is the classical trap of the dissociative emergency.",
      afterSectionId: "diagnosis",
    },
    {
      id: "hud-quiz-6",
      question: "A young man with a psychotic aunt asks whether one LSD trip can 'give him schizophrenia'. The honest answer:",
      options: ["Yes, in all cases", "No risk to anyone", "The trip does not create the illness in a healthy brain, but in a vulnerable one it can precipitate or advance it — the family history is the question to answer before the first dose", "Only if alcohol is added"],
      correctIndex: 2,
      explanation: "The precipitation-and-vulnerability frame — the exact risk conversation the first-episode clinics are built on.",
      afterSectionId: "patient-guide",
    },
  ],
  activeRecallQuestions: [
    { question: "Give the three reasons hallucinogens escape the addictive syndrome, and state the services consequence.", answer: "THE THREE REASONS: (1) NO REWARD-CIRCUIT HIJACK; the class does not seize the mesolimbic dopamine machinery, and its subjective 'reward' is not reliably hedonic (a trip is hard work, not a dependable pleasure); (2) RAPID TOLERANCE: the receptor's own tachyphylaxis within days of consecutive use, the second consecutive-day trip famously weak; (3) NO WITHDRAWAL SYNDROME: there is nothing to detoxify from and no craving escalation to treat. The pattern that emerges is use like visiting a temple: episodic, deliberate, bounded. THE SERVICES CONSEQUENCE: an alcohol-style addiction framework mostly does not apply; this class needs the crisis-and-aftercare tier (the casualty that calms the bad trip, the follow-up clinic that screens vulnerability and treats the perceptual tail), NOT the detox-and-agonist tier. The dependence framework's near-absence is a pharmacological fact that shapes services, not a moral bonus.", topic: "The exception" },
    { question: "The vital-signs irony: what do you expect in classic hallucinogen intoxication, and which findings redirect the diagnosis?", answer: "EXPECTED: the profound subjective storm rides on nearly normal vital signs; modest pupil dilation, a slight pulse and BP rise, minimal measurable toxicity; the hallucinogen-intoxicated body is usually safe (contrast the stimulant cardiovascular siege and the opioid respiratory suppression); the emergency is in the mind's experience and occasionally its content. THE REDIRECT: hyperthermia, seizures, hypertensive crisis or a longer-than-expected storm mean SUBSTITUTION until proven otherwise (NBOMe-family sold as LSD (higher toxicity) or an MDMA-class tablet) and the case now runs toxicology rules: cooling, cardiac monitoring, fluids. The question that catches these: always ask what the tablet or blotter was supposed to be; one seizure in another user of the same batch is the cottage-level epidemiology that rewrites the case.", topic: "Diagnosis" },
    { question: "Walk the bad-trip algorithm in order: environment, person, script, drug, restraint.", answer: "ENVIRONMENT FIRST: quiet, dim-not-dark room, minimal handling; sensory reduction is the antidote to sensory amplification. PERSON: one calm familiar person stays; the social container the trip lost. SCRIPT: talking down with grounded orientation; name, place, 'the medicine is wearing off, hours not forever', breathing, familiar objects; the truth script ('it ends by morning') is both kind and pharmacokinetically honest: the reassurance script IS the treatment. DRUG: benzodiazepines for the panic storm; oral or IV lorazepam/midazolam, resolving most crises reassurance cannot; antipsychotics NOT first-line in the pure classic reaction (haloperidol-class can deepen dysphoria, reserved for genuine psychosis, persistent agitation after benzodiazepine adequacy, or the PCP/NBOMe blur). RESTRAINT: avoided; physical struggle amplifies terror and injury; chemical calming plus environment is the safer path, with the physical-safety audit (doors, stairs, balconies, water) the treatment's silent half. The death in this class is usually accident or flight, not chemistry.", topic: "Management" },
    { question: "Why is haloperidol NOT first-line in a pure bad trip, and when does the caution expire?", answer: "WHY NOT FIRST-LINE: in a PURE classic hallucinogen reaction, haloperidol-class antipsychotics can deepen the dysphoria; the storm is panic and perceptual chaos on quiet vitals, not a dopamine-driven psychosis, and the treatment that fits the mechanism is sensory reduction, orientation and a benzodiazepine. WHEN THE CAUTION EXPIRES: (1) the GENUINELY PSYCHOTIC reaction; delusions and lost reality-testing persisting into the trip's later hours; (2) PERSISTENT AGITATION after adequate benzodiazepination; (3) the BLURRED PICTURE, when PCP or NBOMe substitution cannot be excluded, low-dose cautious antipsychotic use is the pragmatic toxicology practice (with the PCP-specific warnings remembered: haloperidol can lower the seizure threshold and worsen some PCP states). The exam's one-liner: benzos and talking down own the storm; the antipsychotic is a reserved instrument, not a reflex.", topic: "Pharmacology" },
    { question: "HPPD: define it in two sentences, state the three misconceptions to correct, and give the management ladder.", answer: "DEFINITION (two sentences): hallucinogen persisting perceptual disorder is the re-experiencing of perceptual phenomena (flashbacks or continuous visual snow, palinopsia (trailing after-images), halos, intensified colour, illusions of movement) after cessation of hallucinogen use, with reality-testing preserved and clinically significant distress; it typically declares after the first or an early trip, with darkness, stress, fatigue and cannabis as amplifying triggers. THE THREE MISCONCEPTIONS TO CORRECT: it is NOT the drug stored in the body, NOT an ongoing intoxication, and NOT a psychotic symptom. The leading model is a failure of the cortical prediction machinery to fully re-stabilise, a perceptual-network scar. THE LADDER: (1) explanation and reassurance; the correct diagnosis calmly given is itself the main treatment, plus abstinence from further hallucinogens and cannabis (the common amplifier); (2) reduce the amplifiers: sleep, stress, alcohol and stimulant hygiene; (3) medication when distress persists: benzodiazepines short-course (longest-standing), the antiepileptic tier (lamotrigine most-discussed, clonazepam-adjacent practice varies) as an honest low-evidence case-series zone, SSRIs for the anxiety-depression rider, with reported worsening under some antipsychotics and cannabis said plainly; (4) the cognitive-behavioural frame: acceptance-of-the-signal work and attention-management.", topic: "Clinical practice" },
    { question: "The PCP triad and the three medical must-dos.", answer: "THE TRIAD: marked ANALGESIA (self-injury without flinching (the lacerations the patient has not noticed), NYSTAGMUS (horizontal, vertical or rotatory) the bedside pearl that separates the dissociative from every other intoxication), and VIOLENT-AGITATED STRENGTH (the patient who fights six people), on a background of hypertension, sweating, muscle rigidity, ataxia, vacant staring and disorganised speech; bizarre behaviour (nudity, staring into lights, peculiar postures) classical and street-legendary; at high doses coma, seizures, hyperthermia and rhabdomyolysis with renal failure. THE THREE MEDICAL MUST-DOS: (1) the FULL INJURY SURVEY; head to toe, because the analgesia hides fractures and wounds; (2) the LABOURATORY SCREEN: creatine kinase (rhabdomyolysis), renal function, temperature, with hypertension managed when severe; (3) the RE-EMERGENCE WATCH: the intoxication is cyclical, apparent recovery giving way to returning storms, so the patient who 'woke up clear' is NOT discharged within the first hours. Management itself: quiet minimally-stimulating room, benzodiazepines generous and titrated, antipsychotics cautious if psychosis persists (the seizure-threshold warning), the historical forced-acid-diuresis remembered only as abandoned harm.", topic: "Emergency care" },
    { question: "State the psilocybin-therapeutics honest position, and give the Indian family's retreat-question answer.", answer: "THE HONEST POSITION: psilocybin's therapeutic-research era (trials for depression, PTSD and end-of-life distress) is real but it is RESEARCH: overseas, in screened and monitored settings, with exclusion criteria that do their own work; it is not clinic practice, and the retreat ticket and the dealer's blotter are not the trial. THE INDIAN FAMILY'S QUESTION ('should we take him abroad for the depression-mushroom trial?'): the standard, not the sentiment; those trials exclude, screen and monitor; a mind with psychosis in the family is usually exactly whom they exclude; and the domestic frame: the NDPS Act schedules LSD, psilocybin and mescaline stringently, the 2019-era notifications tightened research access, and 2026 India has no approved clinical trial programme; overseas trials are the only access. The retreat-tourism patient still returns to your OPD, and the answer that holds both hope and honesty beats both the enthusiastic yes and the reflexive no.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is LSD addictive like heroin?", answer: "No: it takes no physical hold: no withdrawal, no daily craving, and tolerance builds so fast that consecutive-day use simply stops working. The harms of this class are different in kind: the panic storm, the flashbacks, and the unmasking of illness in vulnerable minds." },
    { question: "He still has the drug inside him after three months. That is why he sees the trails, no?", answer: "No. The drug left his body within hours; what remains is a changed perceptual setting in the visual networks, like a room that keeps ringing faintly after the bell stopped. It fades or softens for most, and it is not madness." },
    { question: "Will one trip make him schizophrenic?", answer: "One trip does not create schizophrenia in a healthy brain, but in a brain already carrying vulnerability, it can bring the illness forward or light it. That is why the family history matters before anyone's first dose, and why a psychosis that persists after the trip gets proper follow-up, not just sleep." },
    { question: "What do we do in the moment. He is terrified and we are far from any hospital?", answer: "Dark-quiet room, one calm familiar person, his name and the truth ('this ends by morning'), breathing, water; no struggle and no mockery. A benzodiazepine if you can reach a doctor by phone. And physically hold the doors, the stairs and the water. The danger is the flight, not the drug." },
    { question: "Are these mushrooms used as medicine for depression? I read the trials.", answer: "The trials are real: overseas, screened and monitored, in research settings. The retreat ticket and the dealer's blotter are not the trial; and a mind with psychosis in the family is usually exactly whom the trials exclude." },
    { question: "The temple has used such plants for generations. How is it dangerous?", answer: "Traditional ceremonial contexts screen participants, dose carefully and hold the container together: a structure, not a chemistry pass. The danger is the unscreened mind and the unstructured dose, which is what the tourist circuit sells." },
    { question: "He fought six policemen and felt no pain: is that LSD?", answer: "Almost never. That shape belongs to the dissociative family (PCP, street ketamine): the numb-violent-nystagmic patient gets the full injury survey, the quiet room and the benzodiazepines, and you do not discharge him when he first 'clears', because the storm returns in waves." },
    { question: "Can the flashbacks be removed with medicine?", answer: "Mostly they are managed, not excised: the diagnosis-explanation halves the suffering, the amplifiers (sleep, stress, cannabis) are retired, and medicines are the last, low-evidence rung; used for the distress, sparingly." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "APA practice-level guidance and toxicology-association statements — the acute hallucinogen-emergency crisis-management tier" },
      { source: "NDPS Act schedules and the 2019-era notifications — the Indian legal frame for LSD, psilocybin and mescaline, and research access" },
      { source: "WHO/UNODC World Drug Report tiers — global prevalence frames" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.3 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Carhart-Harris R, Nutt D et al. — the neuroimaging line (default-mode de-synchronisation, entropic-brain framing) and the psilocybin-for-depression trial era (the COMPASS/Imperial lineage, 2016–2022 onward)" },
      { source: "Krebs T, Johansen P — population-level analysis of psychedelic use and mental-health outcomes (the reassurance-tier epidemiology)" },
    ],
    reviews: [
      { source: "Nichols D — the pharmacology canon of psychedelics: 5-HT2A mechanisms and structure-class reviews" },
      { source: "Halpern J, Pope H — the HPPD systematic review (the diagnostic and natural-course settlement)" },
      { source: "Abraham H — the founding HPPD clinical descriptions and follow-ups" },
      { source: "Liechti M — modern MDMA and hallucinogen acute-effects and toxicity reviews (the substitution-era clinical pharmacology)" },
      { source: "Domino E — the TCP-era PCP classics (NMDA antagonism, the dissociative model); Lynch M and modern emergency-practice reviews for PCP management" },
      { source: "Johansen P, Krebs T — the ayahuasca/ceremonial-context outcome literature base" },
      { source: "Ambekar A, Rao R et al. (AIIMS) — Magnitude of Substance Use in India 2019: the national map the hallucinogen absence sits on" },
    ],
    patientResources: [
      { source: "The moment-script and the explanation-first HPPD consultation — the two instruments this course hands to every Indian family" },
      { source: "The casualty near the festival circuit and Tele-MANAS 14416 — the crisis-and-aftercare channels this class actually needs" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the great exception, the moment-script for the bad trip, the truth about flashbacks, the retreat question answered honestly.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "The 5-HT2A story, the non-addiction lecture, the bad-trip algorithm, the PCP triad, HPPD.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "34 min",
      description: "Everything: the crisis craft, the dissociative discipline, the both-dialects consultation, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The great exception, the durations shelf, the class verdict.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the three reasons this class escapes the addictive syndrome and the service tier that follows." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The doors that loosen, the exception's anatomy, the dissociative divergence.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the vitals stay quiet and why the second-day trip is weak." },
    { number: 3, title: "Clinical Practice", description: "The bad-trip algorithm, the HPPD ladder, the PCP corner, the mimics.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the party-casualty algorithm cold and deliver the HPPD explanation-first consultation." },
    { number: 4, title: "Indian Context", description: "The Goa circuit, the substituted tablet, the retreat traveller, both dialects.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can triage the party casualty by syndrome shape and answer the family's retreat question honestly." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the bad-trip and PCP questions cold and recite the trap-question verdicts." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.3 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Nichols D — the pharmacology canon of psychedelics: 5-HT2A mechanisms and structure-class reviews", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Carhart-Harris R, Nutt D et al. — the neuroimaging line (default-mode de-synchronisation, entropic-brain framing) and the psilocybin-for-depression trial era (the COMPASS/Imperial lineage)", sourceType: "trial", year: "2016–2022 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Halpern J, Pope H — the HPPD systematic review (the diagnostic and natural-course settlement)", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Abraham H — the founding HPPD clinical descriptions and follow-ups", sourceType: "primary", year: "1980s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Krebs T, Johansen P — population-level analysis of psychedelic use and mental-health outcomes (the reassurance-tier epidemiology)", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Johansen P, Krebs T — the ayahuasca/ceremonial-context outcome literature base", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Liechti M — modern MDMA and hallucinogen acute-effects and toxicity reviews (the substitution-era clinical pharmacology)", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Domino E — the TCP-era PCP classics (NMDA antagonism, the dissociative model); Lynch M and modern emergency-practice reviews for PCP management", sourceType: "primary", year: "1950s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "WHO/UNODC World Drug Report tiers — global prevalence frames", sourceType: "who", year: "2020s editions", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Ambekar A, Rao R et al. (AIIMS) — Magnitude of Substance Use in India 2019: the national map the hallucinogen absence sits on", sourceType: "government", year: "2019", dateReviewed: "2026-09-29" },
    { id: "S12", source: "NDPS Act schedules and 2019-era notifications — the Indian legal frame for LSD, psilocybin and mescaline, and research access", sourceType: "government", year: "2019", dateReviewed: "2026-09-29" },
    { id: "S13", source: "American Psychiatric Association — the DSM-5/DSM-5-TR hallucinogen-related-disorder and HPPD classification (the persisting-perceptual criteria paraphrased here), with APA practice-level guidance and toxicology-association statements on acute hallucinogen emergencies", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The 5-HT2A mechanism: the classic hallucinogens are partial agonists at the 5-HT2A receptor, densely placed on deep pyramidal neurons of the cortex's association areas; excitation and disinhibition of the world-modelling networks, the prediction machinery running richer and more chaotic than reality warrants.", grade: "established", sources: ["S1", "S2"] },
    { text: "Ego-dissolution via default-mode network de-synchronisation: the neuroimaging signature (the entropic-brain line); the leading working model, taught as such.", grade: "proposed", sources: ["S3"] },
    { text: "The quiet-vitals irony: the profound subjective storm of classic intoxication rides on nearly normal vital signs (modest pupil dilation, slight pulse rise, minimal measurable toxicity) while hyperthermia and seizures indicate substitution (NBOMe/MDMA-class), not the classic agent.", grade: "established", sources: ["S1", "S2", "S8"] },
    { text: "The non-addiction pharmacology: no reward-circuit capture, no reliably hedonic drive, no withdrawal syndrome, and receptor tachyphylaxis within days (the second consecutive-day trip famously weak); episodic deliberate use, dependence rarely; the services consequence: crisis-and-aftercare, not detox-and-agonist.", grade: "established", sources: ["S1", "S6"] },
    { text: "Epidemiology: lifetime hallucinogen use in Western surveys in single digits of adults (US NSDUH-tier around 8–10% lifetime for the class, past-month under 1%); PCP use in the United States regional and small; Indian population-survey numbers negligible (the AIIMS 2019 national surveys showing opioids, cannabis and sedatives as the national load).", grade: "established", sources: ["S10", "S11"] },
    { text: "HPPD: recurring visual distortions or continuous phenomena (visual snow, trailing/palinopsia, halos, intensified colour) with reality-testing preserved and clinically significant distress, typically after the first or an early trip, triggered by darkness, stress, fatigue and cannabis; the leading model a failure of the cortical prediction machinery to fully re-stabilise (a perceptual-network scar). NOT stored drug, NOT ongoing intoxication, NOT a psychotic symptom; many phenomena fade or soften over months-to-years.", grade: "supported", sources: ["S4", "S5", "S1"] },
    { text: "The bad-trip algorithm: environment first (quiet dim-not-dark room, one calm familiar person, minimal handling, sensory reduction the antidote to sensory amplification), talking down with grounded orientation and the truth script, benzodiazepines (oral or IV lorazepam/midazolam) for the panic storm; haloperidol-class not first-line in a PURE classic reaction (can deepen dysphoria): reserved for genuine psychosis, persistent agitation after benzodiazepine adequacy, or the PCP/NBOMe blur; restraint avoided (physical struggle amplifies terror and injury); the physical-safety audit: the death usually accident or flight (drowning, balcony, road), not chemistry.", grade: "supported", sources: ["S1", "S13"] },
    { text: "PCP/ketamine intoxication: NMDA-receptor blockade producing the dissociative triad (marked analgesia with self-injury without flinching; nystagmus: horizontal, vertical or rotatory; violent-agitated strength), with hypertension, sweating, muscle rigidity, ataxia, vacant staring, disorganised speech and hallucinations; bizarre behaviour classical (nudity, staring into lights, peculiar postures); cyclical re-emergence: the patient who 'clears' is not discharged; at high doses coma, seizures, hyperthermia, rhabdomyolysis with renal failure; the medical must-dos: the full injury survey, creatine kinase, renal function and temperature; the historical forced-acid-diuresis abandoned as harmful; haloperidol can lower the seizure threshold and worsen some PCP states.", grade: "established", sources: ["S1", "S9"] },
    { text: "The ayahuasca/ceremonial frame: the brew is DMT plus an MAOI (the stomach's chemistry); classic hallucinogens alone rarely cause serotonin syndrome, but the MAOI-brew combinations can; ceremonial contexts screen participants, dose carefully and hold the container: a structure, not a chemistry pass; the tourist circuit sells the unscreened mind and the unstructured dose.", grade: "supported", sources: ["S1", "S7"] },
    { text: "The psilocybin-therapeutics honest position: overseas research trials for depression/PTSD/end-of-life distress; screened and monitored, research not clinic, excluding the vulnerable minds families most want to help; India 2026: the NDPS Act schedules LSD, psilocybin and mescaline stringently, the 2019-era notifications tightened research access, and no approved Indian clinical trial programme exists; overseas trials the only access, with the retreat-tourism patient returning to the OPD.", grade: "supported", sources: ["S3", "S12"] },
    { text: "The precipitation/vulnerability frame: one trip does not create schizophrenia in a healthy brain, but in a brain already carrying vulnerability it can precipitate or advance the illness; hence the family-history question before anyone's first dose; some prolonged post-trip psychoses are first-episode schizophrenia introduced, needing the full first-episode pathway rather than detox-and-discharge; the distinction from schizophrenia's debut often only made in retrospect.", grade: "supported", sources: ["S1", "S6"] },
    { text: "The Indian realities: the Goa and coastal-festival circuit, metro elite party scenes, darknet-postal supply of blotter and psilocybin, Himalayan mushroom-picking experimentation, the undersuspected substituted tablet ('what was the tablet supposed to be'. NBOMe-family sold as LSD, PMMA and cocktails sold as ecstasy), PCP essentially absent with ketamine in party circuits and diversion; costs approx 2026: the casualty benzo-calming admission inexpensive, the HPPD workup mostly the single ophthalmology screen.", grade: "supported", sources: ["S1", "S11", "S8"] },
    { text: "The HPPD medication tier's honest grade: benzodiazepines short-course the longest-standing practical option; the antiepileptic tier (lamotrigine the most-discussed, clonazepam-adjacent practice varying) an honest low-evidence zone: case-series medicine; SSRIs where the anxiety-depression rider dominates; reported worsening with some antipsychotics and with cannabis: the ladder's rule: explanation first, medication last.", grade: "supported", sources: ["S4", "S5", "S13"] },
  ],
};
