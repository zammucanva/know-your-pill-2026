import type { PsychiatryCourse } from "./types";

/**
 * TRAUMATIC BRAIN INJURY NEUROPSYCHIATRY — canonical Psychiatry course
 * (migration batch 7, Group A — neurocognitive disorders, part 2 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/tbi-neuropsychiatry.md — untouched foundation),
 * re-researched against current guidance (the Glasgow Coma Scale /
 * PTA grading tradition, the VA/DoD and NICE rehabilitation
 * architectures, the post-TBI hypopituitarism consensus, the CTE
 * literature) with per-claim provenance.
 *
 * Drug routes: sertraline, escitalopram and mirtazapine (the
 * small-dose SSRI/mirtazapine tier for the mood-sleep riders) have
 * KYP lessons and are linked; the antiepileptics, the stimulant
 * tier and the antipsychotic tier have no KYP lessons and are
 * recorded in contentGaps, never invented.
 */
export const tbiNeuropsychiatryCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "tbi-neuropsychiatry",
  title: "Traumatic Brain Injury Neuropsychiatry",
  shortName: "TBI psychiatry",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Traumatic Brain Injury Neuropsychiatry"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Slowed thinking, changed mood, released temper: the invisible triad after head injury",

  summary:
    "Traumatic brain injury produces cognitive, emotional and behavioural sequelae on a timeline from weeks to years, often unconnected to the accident by families or clinicians. The label itself is therapeutic, and structured rehabilitation with small-dose pharmacology treats most symptoms.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Grade TBI severity using loss of consciousness and post-traumatic amnesia, and explain why grading predicts outcome only loosely.",
    "Map the post-TBI timeline of neuropsychiatric syndromes: post-concussion syndrome, mood disorders, cognitive impairment, behavioural change, psychosis (rare), dementia risk.",
    "Explain the difference between post-traumatic amnesia and ordinary forgetfulness, and why PTA duration matters more than the LOC number.",
    "Recognise post-traumatic epilepsy and PTSD riding together after road accidents.",
    "Assemble the assessment: collateral behavioural history, frontal-weighted testing, medicine review, compensation/legal documentation.",
    "Manage it: small-dose pharmacology, structure, family education, graded return to work and driving.",
    "Catch the two lethal mimics: chronic subdural haematoma in the elderly anticoagulated faller, and post-TBI hypopituitarism.",
    "Address Indian realities: helmet law, compensation claims, litigation distress, employer communication, the absent rehabilitation tier.",
  ],
  quickFacts: [
    { label: "The predictor", value: "LOC lies; PTA tells", detail: "Post-traumatic amnesia duration (the gap between injury and continuous memory) outperforms loss-of-consciousness as the outcome predictor: hours worse than minutes, days worse than hours" },
    { label: "The geography", value: "Frontal and temporal poles", detail: "Coup-contrecoup contusions and shearing strike the manager offices of self-control (orbitofrontal, frontal poles) and the filing room of new memories (temporal poles): disinhibition plus forgetfulness in a person whose old knowledge survives" },
    { label: "The triad", value: "Head, Heart, Hindrance", detail: "Headache/dizziness; mood/PTSD; cognition/behaviour: the post-TBI syndrome cluster; 'mild' by LOC can disable by PTA, and roughly 10–15% of mild-TBI patients report persistent symptoms beyond a year" },
    { label: "The riders", value: "Depression in a quarter to a half", detail: "Depression prevalence post-TBI is high over follow-up; anxiety and PTSD co-travel with accident trauma; suicide risk genuinely elevated: ask directly" },
    { label: "The long shadow", value: "One severe TBI ≈ doubles dementia risk", detail: "Repeated mild impacts (the boxing pathway) carry the distinct tau dementia (CTE); protect from further knocks, treat vascular risks, monitor: vigilance, not worry" },
    { label: "The two lethal mimics", value: "Subdural and hypopituitarism", detail: "Weeks-delayed drowsiness in the elderly anticoagulated faller = chronic subdural (image, drain); treatment-resistant fatigue with weight change = post-TBI hypopituitarism (screen the hormone axes, it does not respond to SSRIs)" },
    { label: "The pharmacology law", value: "Small doses, slow titration, one change at a time", detail: "The injured brain amplifies side effects: half-standard SSRI starts, benzodiazepines avoided (they tax cognition and balance), every sedative load re-justified" },
    { label: "The Indian tier", value: "No rehab, family as therapist", detail: "Neurosurgery → home → physiotherapy for limbs → nothing for cognition/behaviour; the family-as-therapist teaching programme is the delivery channel, and the employer letter prevents terminations for 'attitude'" },
  ],
  knowledgeGraph: [
    { label: "Frontotemporal Dementia", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The shared frontal-pole geography: disinhibition and executive failure with the temporal filing-room overlap; the bedside frontal battery belongs to both" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The co-traveller after road accidents: intrusions, avoidance, hyperarousal sharing symptoms so heavily with post-concussion that both must be assessed in every survivor" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The quarter-to-a-half rider: biological and reactive at once, genuinely elevating suicide risk after injury" },
    { label: "Vascular Dementia", type: "condition", href: "/psychiatry/vascular-dementia/", note: "The shared executive-first profile and the shared long-game (vascular risk treated as brain medicine after injury)" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The post-traumatic confusion states and the postictal imitators: the episodic-behaviour differential" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "The sleep-wake disruption both populations share, and the sedative restraint both demand" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "The sleep programme that carries post-TBI recovery: hygiene first, melatonin for rhythm, the benzodiazepine exit" },
    { label: "Alcohol-Related Dementia", type: "condition", href: "/psychiatry/alcohol-related-dementia/", note: "The alcohol junction: intoxication at injury predicting worse outcomes and misuse escalating after; the falling drinker's subdural factory shared" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The fronto-striatal circuitry the shearing disconnects: drive, initiation and impulse control" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The manager of manners and plans: bruised at the poles; the disinhibition's seat" },
    { label: "Temporal poles", type: "brain-region", href: "#brain", note: "The filing room of new memories: the anterior contusion zone behind the new-learning failure" },
    { label: "White matter (the cabling)", type: "brain-region", href: "#brain", note: "The diffuse axonal injury's territory: the long-distance wiring sheared by acceleration-deceleration" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI tier for the depressive-anxious load: half-standard doses, slow titration" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The alternative SSRI of the same small-dose tier" },
    { label: "Mirtazapine", type: "drug", href: "/drugs/mirtazapine/", note: "Where sleep and appetite need help alongside the mood: watching the next-day grogginess" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry post-TBI neuropsychiatry. The shaken wiring: the brain floats in fluid; a sudden stop throws it against the skull's inner ridges and twists it on its own stem: deep white-matter fibres shear (diffuse axonal injury, the brain's long-distance cabling), and the injured offices are predictably the frontal poles (the manager of manners and plans) and temporal poles (the filing room of new memories). That geography IS the neuropsychiatric phenomenology: disinhibition plus forgetfulness plus slow thinking, in a person whose storage of old knowledge remains. The overloaded CPU: after injury the brain's processing budget shrinks; ordinary tasks (a noisy shop, a family argument, a work deadline) now cost more than the budget allows, so the system overheats: headache, fatigue, irritability, the urgent need to lie down in a dark room. Families see 'laziness'; the clinic sees FATIGABILITY: the symptom that most shapes return-to-work plans. The mind re-lives the crash: for many, the traumatic event itself is not over. It replays intrusively, sleep breaks under nightmares, roads are avoided, hypervigilance keeps the alarm ringing; PTSD and post-concussion syndrome share symptoms so heavily (sleeplessness, irritability, concentration failure, jumpiness) that the only honest clinical move is to assess both in every accident survivor and treat what is found.",
    steps: [
      "The shaken wiring: acceleration-deceleration shears deep white-matter fibres (diffuse axonal injury) and bruises the frontal and temporal poles by coup-contrecoup; the cabling and the offices of self-control and new memory.",
      "The geography becomes the phenomenology: disinhibition (orbitofrontal) plus forgetfulness (temporal poles) plus slowed thinking (disconnected networks) with old knowledge preserved.",
      "The overloaded CPU: the processing budget shrinks; ordinary stimulation now overheats the system (headache, fatigue, irritability, the dark-room need); fatigability, not laziness, is the return-to-work variable.",
      "The mind re-lives the crash: PTSD and post-concussion syndrome overlap so heavily that both get assessed in every accident survivor; intrusions, avoidance, hyperarousal riding the cognitive picture.",
      "The sleep axis: disrupted sleep-wake and circadian systems worsen cognition, mood and recovery speed; the sleep programme is treatment infrastructure, not comfort.",
      "The long shadow: single severe TBI roughly doubles later dementia risk; repeated mild impacts carry the distinct tauopathy (CTE): protection from further knocks as the life-course prescription.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-poles", name: "Frontal poles and orbitofrontal cortex", role: "The manager of manners, plans and judgement: bruised by coup-contrecoup; disinhibition, tactlessness, impulsivity with money and driving, perseveration.", grade: "established" },
    { id: "temporal-poles", name: "Anterior temporal lobes", role: "The filing room of new memories: contused in the same deceleration; new-learning failure, emotional-regulation contributions.", grade: "established" },
    { id: "white-matter", name: "Deep white matter (the cabling)", role: "The diffuse axonal injury's territory: sheared long-distance tracts disconnecting fronto-striatal circuits: slowed processing and the executive-behavioural change.", grade: "established" },
    { id: "fronto-striatal", name: "Fronto-striatal circuits", role: "The initiation-drive-impulse wiring the disconnection silences: apathy in a subgroup, released temper in others.", grade: "supported" },
    { id: "hypothalamic-pituitary", name: "Hypothalamic-pituitary axis", role: "The under-remembered victim: post-traumatic hypopituitarism's fatigue, low mood and sexual dysfunction that mimics treatment-resistant depression and responds only to hormone replacement.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The fronto-striatal drive chemistry the shearing disrupts: apathy and slowed initiation; the circuitry whose stimulant-tier support (where used) is physician-governed.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The mood-anxiety-sleep rider's chemistry: the small-dose SSRI tier's target; depression and irritability both responding here.", grade: "established", drugConnection: "Sertraline and escitalopram at half-standard starts: the injured brain amplifies side effects; mirtazapine where sleep and appetite need help." },
    { name: "Noradrenaline", symbol: "NE", role: "The hyperarousal and attention chemistry: the PTSD rider's alarm and the concentration failure's amplifier.", grade: "supported" },
    { name: "Melatonin", symbol: "MLT", role: "The circadian rhythm's keeper: the disrupted sleep-wake axis and the rhythm-first sleep programme (melatonin for timing, hygiene before hypnotics).", grade: "supported" },
  ],
  pathways: [
    {
      id: "shear-pathway",
      name: "The shaken wiring (shear to syndrome)",
      steps: [
        { label: "The sudden stop", detail: "The floating brain strikes the inner ridges and twists on its stem: acceleration-deceleration" },
        { label: "The cabling shears", detail: "Diffuse axonal injury of the deep white matter: the long-distance tracts disconnecting fronto-striatal circuits" },
        { label: "The poles bruise", detail: "Coup-contrecoup contusions of the frontal manager offices and temporal filing rooms" },
        { label: "The triad emerges", detail: "Disinhibition + forgetfulness + slowed thinking, in a person whose old knowledge survives intact" },
      ],
      clinicalManifestation: "The 34-year-old manager shouting in stand-ups and missing deadlines two months after a 'mild' injury: the triad wearing office clothes.",
      grade: "established",
    },
    {
      id: "cpu-pathway",
      name: "The overloaded CPU (fatigability)",
      steps: [
        { label: "The budget shrinks", detail: "Post-injury, the processing capacity is smaller than the pre-injury day demanded" },
        { label: "Ordinary costs more", detail: "Noisy shops, family arguments, work deadlines: each now exceeds the available budget" },
        { label: "The system overheats", detail: "Headache, fatigue, irritability, the urgent need for a dark room: the visible 'temperature'" },
        { label: "The misread", detail: "Families see 'laziness' and employers see 'attitude': the clinic sees the symptom that shapes every return-to-work plan" },
      ],
      clinicalManifestation: "The patient who manages a quiet morning perfectly and collapses into headache and temper by the evening shop visit: the budget, not the character.",
      grade: "established",
    },
    {
      id: "ptsd-ride-pathway",
      name: "The crash that keeps playing (PTSD on the concussion)",
      steps: [
        { label: "The event encodes", detail: "The terrifying accident: threat, helplessness, the body's alarm fully rung" },
        { label: "The intrusions arrive", detail: "Replays, nightmares, the road avoided, the horn that flinches the whole body" },
        { label: "The overlap confuses", detail: "Sleeplessness, irritability, concentration failure, jumpiness: shared symptom for symptom with post-concussion" },
        { label: "The clinical discipline", detail: "Assess BOTH in every accident survivor and treat what is found: the only honest move when the syndromes share their surface" },
      ],
      clinicalManifestation: "The bus-accident widow whose concentration failure and startle were called 'post-concussion' until the nightmare tape was asked about, both treated, both recovering.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "injury-moment", time: "The injury", title: "LOC, PTA, the first imaging", description: "The numbers that matter later: duration of loss of consciousness and the post-traumatic amnesia gap between injury and continuous memory. PTA the stronger predictor.", phase: "onset" },
    { id: "early-weeks", time: "Days to weeks", title: "Post-concussion syndrome's reign", description: "Headache, dizziness, poor concentration, irritability: overlapping with anxiety, depression and PTSD; the sleep-wake disruption settling in.", phase: "onset" },
    { id: "months-era", time: "Months 1–12", title: "The triad consolidates", description: "Mood disorders (a quarter to a half over follow-up), cognitive impairment, behavioural change: the families discovering the 'new person'; post-traumatic epilepsy typically declaring within two years.", phase: "peak" },
    { id: "years-era", time: "Years 1–5", title: "Recovery's long tail and the stuck cases", description: "Gradual improvement with managed load; the persistent 10–15% of mild-TBI patients; the stuck cases demanding the mimic screen (subdural, hypopituitarism, seizures, depression).", phase: "duration" },
    { id: "long-shadow", time: "Decades later", title: "The dementia risk", description: "One severe TBI roughly doubling later dementia risk; repeated mild impacts carrying the distinct tauopathy (CTE): protection from further knocks, vascular risk treated, monitoring held.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "TBI is a leading cause of disability in young adults (peak incidence 15–35, male-predominant); road traffic, falls, sports and assault dominate causes. Roughly 10–15% of mild-TBI patients report persistent post-concussion symptoms beyond a year; moderate-severe survivors almost all carry residual cognitive-behavioural deficits. Depression prevalence runs about a quarter to a half over follow-up; anxiety and PTSD commonly co-travel with accident trauma; suicide risk is genuinely raised. Single severe TBI roughly doubles later dementia risk; repeated mild impacts (the boxing pathway) carry the distinct degenerative risk (chronic traumatic encephalopathy, a tau pathology).",
    indianPrevalence: "Road-traffic injuries are among the top causes of death and disability in the young; two-wheeler riders dominate casualties, helmet use is inconsistent, and TBI admissions fill neurosurgical services in every city. Follow-up is the Indian failure point: surgical review ends, no neuropsychiatric service exists in most districts, and families absorb the sequelae unlabelled. Compensation claims (Motor Vehicles Act tribunals, ESIS, insurance) commonly demand psychiatric documentation: clinical and medico-legal work arriving together.",
    lifetimeRisk: "Depression in a quarter to a half over follow-up; post-traumatic epilepsy raised with highest risk in the first two years; persistent post-concussion symptoms in 10–15% of mild injuries; dementia risk roughly doubled after one severe TBI.",
    genderRatio: "Male-predominant: the young-male road-traffic and risk-taking mirror.",
    ageOfOnset: "Peak 15–35: the student, the wage-earner, the young parent: the population whose injuries carry the most life-years and livelihoods at stake.",
    indianNotes: "Night-road injuries with delayed rescue; alcohol-involved crashes (predicting both worse outcomes and post-injury misuse escalation); the near-absence of post-acute neuro-rehabilitation in the public sector.",
  },
  etiology: [
    { category: "biological", factor: "The injury mechanics", details: "Acceleration-deceleration shearing fibres (diffuse axonal injury); coup-contrecoup contusions bruising the frontal and temporal poles: precisely the offices of self-control and memory integration; deeper coma, longer PTA, early seizures, intracranial bleed and older age at injury predicting poorer outcome." },
    { category: "biological", factor: "The endocrine mimic", details: "Post-traumatic hypopituitarism after moderate-severe TBI: fatigue, low mood, sexual dysfunction, weight change, lethargy mimicking treatment-resistant depression and unresponsive to SSRIs; the screen that changes the management." },
    { category: "psychological", factor: "The amplifiers", details: "The accident itself terrifying (PTSD co-travel); ongoing pain, tinnitus and vertigo maintaining arousal; blame, litigation and job loss maintaining depression: the load on the reduced budget." },
    { category: "social", factor: "The environmental stack", details: "Return to unmodified work too early; families interpreting disinhibition as disrespect; no compensation, so treatment competes with wage-earning; the employer's 'attitude' reading that ends jobs." },
    { category: "biological", factor: "The pre-existing burden", details: "Pre-existing learning or psychiatric history and alcohol misuse at the time of injury both predicting worse outcomes: the alcohol junction operating at both ends (cause of the crash and escalator after it)." },
    { category: "environmental", factor: "The Indian exposure", details: "Two-wheeler and pedestrian vulnerability; helmet non-use; delayed night-road rescue; and the medico-legal entanglement (MACT tribunals) that both demands documentation and prolongs symptom reporting: assess clinically, never cynically." },
  ],
  symptomClusters: [
    {
      category: "1. Cognitive (the overloaded CPU)",
      symptoms: ["Processing speed slowed; attention flickering in noise; multitasking collapsed", "New-learning difficulty (temporal filing bruised): appointments missed, instructions lost after the second step", "Executive failure: poor planning, poor money judgement, difficulty adapting when routines change", "Fatigability: the evening overheating after the quiet morning; the symptom that most shapes return-to-work plans"],
    },
    {
      category: "2. Emotional (the changed heart)",
      symptoms: ["Depression: often biological and reactive at once (job, status, self-image lost): anhedonia, morning heaviness, hopelessness; suicide risk genuinely elevated: ask directly", "Anxiety, panic in crowds, travel re-experiencing; the full PTSD set (intrusions, avoidance, hyperarousal, negative mood) in a substantial minority", "Irritability and low frustration tolerance: the commonest family complaint; temper explosions disproportionate to triggers", "Emotional lability: the quick tears and quick laughter of the disinhibited cortex"],
    },
    {
      category: "3. Behavioural (frontal-type release)",
      symptoms: ["Disinhibition: tactless jokes, overfamiliarity, impulsivity with money or driving, neglect of hygiene, childish or rigid humour", "Apathy in a subgroup; perseveration (the same story, the same task, the same argument on repeat)", "Sleep-wake reversal, day somnolence; occasionally post-traumatic confusion or wandering states", "Sexual disinhibition and social boundary failure: the family's deepest embarrassment, the clinic's straightforward frontal lesson"],
    },
    {
      category: "4. The neurological flags to catch in psychiatry clinic",
      symptoms: ["Post-traumatic epilepsy: any odd episodic behaviour (staring, lip-smacking, nocturnal tongue-bite, lost minutes); investigate, and check antiepileptic adherence and interactions", "Chronic subdural haematoma (elderly, alcohol users, anticoagulated): subacute personality change or drowsiness weeks after a 'trivial' fall; a missed surgical emergency mimicking psychiatric decline", "Post-traumatic headache, vertigo, tinnitus: the pain maintenance that amplifies every other symptom", "Hypopituitarism after moderate-severe TBI: fatigue, low mood, sexual dysfunction, weight change, lethargy unresponsive to SSRIs; screen the hormone axes in unexplained fatigue after TBI"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The assessment structure",
      code: "The injury interview, in numbers",
      criteria: [
        "Duration of loss of consciousness; duration of POST-TRAUMATIC AMNESIA (the gap between injury and continuous memory, the strongest single predictor; hours worse than minutes, days worse than hours); imaging findings; seizures; time off work.",
        "The change inventory taken COLLATERALLY and in private: temper, humour, patience, money, hygiene, sleep, driving, affection, work quality, before versus after, with a timeline.",
        "Frontal-weighted bedside testing (as in the FTD course): proverb interpretation, go/no-go, alternating sequences, fluency under time; memory-weighted screens under-sell TBI exactly as they under-sell FTD.",
        "Mood and PTSD screening in every accident survivor: the two most treatable riders.",
        "Review the drug list: antiepileptics (sedation, cognitive blunting, the older agents worst), pain opioids, benzodiazepines given 'for nerves', muscle relaxants.",
        "Rule-outs for subacute decline: chronic subdural (image), hypopituitarism (endocrine screen), hypothyroid, anaemia, alcohol relapse.",
      ],
      duration: "The assessment spans the timeline: the injury numbers, then the weeks-months change inventory; the detective work IS the diagnosis.",
      indianNote: "Documentation for compensation written factual and functional (impairments, capacities, prognosis, care needs) as a clinical document for the tribunal, not an advocacy pamphlet; honesty protects the patient better than inflation.",
    },
    {
      system: "DSM-5 / ICD-11 framing (paraphrased)",
      code: "Neurocognitive disorder due to TBI",
      criteria: [
        "The TBI evidence: loss of consciousness, post-traumatic amnesia, disorientation, or neurological signs, with the injury's severity documented (mild/moderate/severe per the GCS-PTA tradition).",
        "The cognitive decline meeting the neurocognitive-disorder skeleton immediately post-injury or immediately after emergence from the PTA: persisting beyond the acute confusional state.",
        "The neuropsychiatric riders (mood, anxiety, PTSD, behavioural change) documented as their own syndromes, not folded into a single wastebasket label.",
        "The mimics excluded: the subdural, the pituitary failure, the seizure disorder, the depression-alone reading.",
      ],
      duration: "The persistent tier: symptoms beyond the expected recovery window (the 10–15% of mild injuries; most moderate-severe survivors).",
      indianNote: "Grading predicts outcome only LOOSELY: the 'mild' injury with 12-hour PTA that disables versus the severe injury that recovers well: the numbers open the assessment, the function closes it.",
    },
  ],
  severityScales: [
    {
      name: "The severity tradition",
      fullName: "LOC and PTA grading (the GCS lineage)",
      measures: "How big was the hit, and how long the memory was gone.",
      ranges: [
        { min: 0, max: 0, severity: "Mild (brief LOC <30 min, PTA minutes-hours)", action: "Most recover fully, but the 10–15% persistent tier demands follow-up, and PTA duration outranks the LOC number in predicting who they are" },
        { min: 1, max: 1, severity: "Moderate (LOC 30 min–24 h, PTA hours-days)", action: "The full assessment battery, the mimic screen, the graded return with written accommodations, the family programme begun early" },
        { min: 2, max: 2, severity: "Severe (LOC >24 h, PTA days-weeks)", action: "Rehabilitation architecture (formal where available, family-as-therapist where not), the hypopituitarism screen, the epilepsy vigilance, the long-horizon planning" },
      ],
      indianNote: "LOC lies; PTA tells: the mnemonic to hand every trainee grading injuries in casualty.",
    },
    {
      name: "The return-to-work ladder",
      fullName: "Graded functional re-entry staging",
      measures: "How much world the recovering brain can afford, and in what order.",
      ranges: [
        { min: 0, max: 0, severity: "Home tier", action: "Quiet environments, one instruction at a time, scheduled rest, sensory load graded: fatigue management as the core of cognitive rehabilitation" },
        { min: 1, max: 1, severity: "Modified duty", action: "Half-days, written tasks, no multitasking, supervision for safety-critical tasks: the employer letter stating 'neurological recovery, not misconduct'" },
        { min: 2, max: 2, severity: "Full return with accommodations", action: "Two accommodations held (written instructions, quiet workstation), driving cleared by the clinical checklist, the review cadence spacing out as function steadies" },
      ],
      indianNote: "The employer letter prevents terminations for 'attitude'. Write it routinely; the documentation is cheaper than the litigation on both sides.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Pre-existing personality disorder", distinguishingFeatures: "The collateral says the pattern predates the crash: the timeline the whole differential turns on.", keyDifferentiator: "The before-versus-after inventory taken privately and specifically; the family's honest ledger." },
    { condition: "Depression alone", distinguishingFeatures: "The temporal link to injury, the disinhibition and the fatigue pattern out of proportion: the triad's body, not just the mood.", keyDifferentiator: "The PTA-weighted injury history plus the frontal findings; the SSRI trial that lifts mood but leaves the triad's other limbs standing." },
    { condition: "PTSD alone", distinguishingFeatures: "Cognitive slowing and disinhibition are not PTSD core, but the shared surface (sleep, irritability, concentration) means both get assessed in every survivor.", keyDifferentiator: "The intrusion-avoidance-hyperarousal structure against the executive-disinhibition structure; treat both when both are found." },
    { condition: "Postictal states and undiagnosed epilepsy", distinguishingFeatures: "Episodic pattern: staring, lip-smacking, nocturnal tongue-bite, lost minutes; the behaviour the family calls 'moods' that are actually seizures.", keyDifferentiator: "The episodic diary and the EEG; the antiepileptic adherence-and-interaction audit." },
    { condition: "Chronic subdural haematoma", distinguishingFeatures: "Weeks-delayed drowsiness, headache, focal signs in the elderly, alcohol-using or anticoagulated faller: the surgical emergency impersonating psychiatric decline.", keyDifferentiator: "The imaging ordered on the timeline alone: any subacute change after any fall in these groups gets the scan before the label." },
    { condition: "Post-traumatic hypopituitarism", distinguishingFeatures: "Fatigue, low mood, sexual dysfunction, weight change: mimicking treatment-resistant depression, unresponsive to SSRIs, responding to hormone replacement.", keyDifferentiator: "The endocrine screen in every unexplained persistent fatigue after moderate-severe TBI." },
  ],
  management: [
    { category: "lifestyle", name: "Relabel, then rehabilitate", description: "Explain the shaken-wiring story to the family in the first consultation: the relabelling that converts blame ('he has become difficult') into treatment alliance. Then: fixed routines; one instruction at a time; graded sensory load (quiet rooms, short shifts); scheduled rest: fatigue management as the core of cognitive rehabilitation. Graded return to work/school with written accommodations (reduced hours, written instructions, no multitasking initially, supervision for safety-critical tasks). The driving decision formal and documented (seizures, reaction speed, impulsivity, vision each disqualify until cleared). Family programme: one page on disinhibition ('his brakes are injured, not his values'), the anger drill (leave-stay-return), the single-speaker rule. Formal neuropsychological rehabilitation where available; the family taught the core techniques where it is not.", whenToUse: "From the first post-acute contact: the label and the structure ARE the treatment's first floor.", indianContext: "The family-as-therapist teaching programme is the Indian delivery channel for the absent rehabilitation tier, one session, teachable by any doctor or counsellor, measurably reducing household conflict; the employer letter written routinely ('neurological recovery, not misconduct')." },
    { category: "pharmacotherapy", name: "Small doses, slow titration, one change at a time", description: "Depression: SSRIs first (sertraline, escitalopram); the injured brain amplifying side effects means half-standard starts and slow titration; mirtazapine where sleep and appetite need help (watching next-day grogginess). Irritability and explosive anger: SSRI trial first, then the cautious mood-stabiliser option (valproate-type with pregnancy counselling; one drug serving epilepsy and irritability together where both coexist). Sleep: hygiene first, melatonin for rhythm, mirtazapine if depression co-travels; long-term benzodiazepines avoided: they tax cognition and balance. Cognition: no stimulant licensed for TBI cognition; treat the treatable (sleep, mood, pain, hormones) before concluding the deficit is fixed. Post-traumatic epilepsy: with neurology, the least cognitively sedating agent compatible with the individual. Severe dangerous disinhibition: small-dose quetiapine with fixed review; the same caution logic as the dementia courses.", whenToUse: "After the relabel-structure floor is laid: pharmacology rides on rehabilitation, never replaces it.", indianContext: "Sertraline and valproate generics inexpensive (approx ₹50–150/month, 2026); the expensive items are imaging and medico-legal time; the scarcest is rehabilitation: the family programme substitutes." },
    { category: "lifestyle", name: "The medico-legal and social work", description: "MACT/insurance documentation at defined intervals (functional picture, care needs, prognosis); ESIS/workmen's-compensation coordination for the employed. Guarding against the two failure modes: symptom inflation under litigation pressure (treat clinical truth, document uncertainty honestly) and symptom dismissal ('compensation neurosis'), most post-TBI suffering is genuine even when money is at stake; assess, don't editorialise.", whenToUse: "From the first consultation that touches the claim: the honest record serves both the tribunal and the treatment.", indianContext: "The helmet conversation is psychiatry too: every head-injured two-wheeler survivor who returns to riding without a helmet is a repeat customer; the conversation belongs in the consultation, especially for the young and the drinking." },
  ],
  safety: {
    redFlags: [
      "Weeks-delayed drowsiness, headache or personality change after ANY fall in an elderly, alcohol-using or anticoagulated patient: chronic subdural: urgent imaging, a surgical emergency impersonating psychiatric decline",
      "New fever with muscle stiffness after any antipsychotic started for disinhibition: the neuroleptic-malignant rule on an injured brain",
      "Suicidal ideation after TBI: the risk is genuinely elevated: ask directly, and treat the depression as the emergency it is",
      "Any odd episodic behaviour (staring, lip-smacking, nocturnal tongue-bite, lost minutes): post-traumatic epilepsy: investigate, and audit adherence and interactions",
      "The return to two-wheeling without a helmet: the repeat-customer conversation held the same week",
      "Treatment-resistant fatigue with weight change or sexual dysfunction: the hypopituitarism screen before the second SSRI",
    ],
    urgentGuidance:
      "The order of operations: (1) any subacute change in the elderly/anticoagulated faller gets imaged before labelled. The subdural that drains is the recovery that shames the missed diagnosis; (2) suicide risk asked directly at every mood touchpoint: the elevated post-TBI risk is treatable when caught; (3) the epilepsy vigilance held for two years (the highest-risk window): episodic behaviours investigated, not moralised; (4) the endocrine screen in every unexplained persistent fatigue; (5) the driving decision made clinically and documented: seizures, reaction speed, impulsivity and vision each disqualify until cleared; (6) the helmet conversation and the alcohol junction addressed explicitly: the injury's causes are the next injury's.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The SSRI tier for the depressive-anxious load and the irritability first-line",
      rationale: "Depression rides a quarter to a half of TBI courses, PTSD a substantial minority, and the SSRI tier treats both riders while the rehabilitation floor does the heavy lifting; irritability and explosive anger also get the SSRI trial FIRST. The injured brain amplifies side effects: half-standard starting doses, slow titration, one change at a time.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-targeted care alongside the relabel-structure-rehabilitate programme that owns the functional recovery.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The alternative SSRI of the same small-dose tier",
      rationale: "The second member of the SSRI pair chosen on tolerability and comorbidity: the same half-standard-start discipline, the same one-change-at-a-time rule.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Same tier and framing as sertraline: the mood rider treated while the structure carries the recovery.",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      role: "Where sleep and appetite need help alongside the mood",
      rationale: "The sleep-wake disruption worsens cognition, mood and recovery speed: mirtazapine serves the insomnia-appression- appetite triad in one small nightly dose, with the next-day grogginess watched and balanced (the groggy morning taxes the processing budget it was meant to protect).",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "The sedative load weighed against the cognitive budget at every review: morning-function is the outcome that matters.",
    },
  ],
  contentGaps: [
    "The antiepileptic tier (the post-traumatic epilepsy management shared with neurology) has no KYP drug lessons. The least-sedating-agent principle and the adherence-interaction audit are taught here.",
    "The stimulant tier (methylphenidate and relatives for fatigue/attention in selected TBI cases, physician-governed) has no KYP lessons, and no stimulant is licensed for TBI cognition: the treat-the-treatable rule holds the line.",
    "Valproate and the mood-stabiliser tier for explosive anger have no KYP lessons. The one-drug-two-jobs logic (epilepsy plus irritability) is taught in this course.",
    "Quetiapine and the antipsychotic tier for dangerous disinhibition have no KYP lessons. The small-dose-fixed-review caution is taught here.",
    "Melatonin and the rhythm tier have no KYP lessons. The sleep programme's hygiene-first architecture is taught in the Insomnia course and applied here.",
  ],
  patientGuide: {
    whatIsIt:
      "After a significant knock to the head, changes can arrive that nobody connects to the accident: slowed thinking, a shortened temper, moods that swing, sleep that breaks, and behaviour that seems out of character. These are injuries to the brain's wiring and its manager offices, not attitude problems, not madness, not 'using the accident as an excuse'. They start weeks to months after the injury, last months to years, and most improve steadily with the right management: rest, structure, graded return to work, treatment of the mood and sleep problems, and family understanding.",
    whatCausesIt:
      "The brain floats in fluid inside the skull; a sudden stop throws it against the bone ridges and twists it on its stem. The stretching injures the deep wiring, and the bruising lands predictably on the frontal lobes (the manager of manners and plans) and temporal lobes (the filing room for new memories), which is why self-control and new learning suffer while old knowledge survives.",
    symptoms:
      "Thinking: slow answers, lost instructions, planning failures, overwhelming tiredness in noise or crowds. Mood: sadness, anxiety, nightmares and road-avoidance (the accident replaying), quick temper over nothing. Behaviour: tactless jokes, impulsivity with money or driving, neglect of hygiene, repetitive arguments. Warnings needing the doctor or hospital the same day: drowsiness worsening weeks after any fall (especially in the elderly or those on blood thinners), any staring spells or lost minutes, and thoughts of self-harm.",
    treatment:
      "The treatment has an order. First the label: the family learning that 'the brakes are injured, not the values'; this alone changes the household. Then structure: fixed routines, one instruction at a time, rest scheduled like medicine, sensory load graded. Then graded return to work with written accommodations and a doctor's letter stating 'neurological recovery, not misconduct'. Medicines are small-dose and careful (the injured brain amplifies side effects): an SSRI for the depression, anxiety or temper; mirtazapine where sleep and appetite need help; melatonin for rhythm. Sedatives of the long-term kind are avoided: they tax exactly the functions being rebuilt. Driving is a clinical decision, documented, not a family one.",
    selfHelp: [
      "The fatigue budget: schedule the demanding tasks in the good hours, rest BEFORE the overheating (not after), and treat the dark-room need as a medical instruction; 'pacing, not laziness'.",
      "The one-instruction rule for the household: single steps, written lists, the same sentences at the same times.",
      "The anger drill: leave-stay-return; the walk away before the explosion, the return after the cooling, the single speaker at a time.",
      "The sleep programme: daylight in the morning, activity by day, no daytime chair-napping, screens dimmed by evening; the rhythm rebuilt before any tablet.",
      "The helmet commitment: the return to riding only with the helmet, always; the second injury lands on a smaller reserve.",
      "The alcohol honesty: the drinking that contributed to the crash can escalate after it; ask for the help early, not after the second injury.",
      "The one-page explanation for the employer: 'neurological recovery, not misconduct'; the letter that saves the job.",
      "The seizure diary: any staring, lip-smacking, tongue-bite or lost minute recorded and reported; the episodic behaviours are data, not moods.",
    ],
    whenToSeekHelp: [
      "Drowsiness, headache or personality change worsening weeks after ANY fall in an elderly person or anyone on blood thinners: hospital the same day (the drainable blood clot)",
      "Any staring spells, lost minutes or nocturnal tongue-bites: the epilepsy assessment",
      "Persistent fatigue with weight change or loss of sexual function unresponsive to depression treatment: the hormone screen (treatable, and not an antidepressant matter)",
      "Thoughts of self-harm: the risk is genuinely elevated after head injury and help works: the same-day conversation",
      "Household conflict escalating around temper or disinhibition: the family session before the marriage, not after",
      "The compensation case distorting recovery: the honest clinical record serving both the claim and the treatment",
    ],
    indianResources: [
      "The district hospital neurosurgical follow-up: the imaging door for the subacute changes",
      "Tele-MANAS 14416 (24×7, free), for mood, sleep and family distress after injury",
      "The family-as-therapist session, one session, ask the treating team; it is the rehabilitation tier India actually has",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No dedicated Indian post-TBI neuropsychiatry pathway exists; practice follows the GCS/PTA grading tradition with the VA/DoD and NICE rehabilitation architectures as the reference logic: the graded return and symptom-management structure adapted to the family-as-therapist Indian delivery.",
    systemContext: "The pathway today: neurosurgery → home → (maybe) physiotherapy for limbs → nothing for cognition and behaviour. The family physician and the occasional psychiatrist are the whole service; the note's family programme is the practical substitute for missing rehabilitation infrastructure. MACT/ESIS documentation demands arrive with the clinical work, and the doctor must keep both honest.",
    programmeContext: "District hospitals own the acute injury; the medico-legal tier (Motor Vehicles Act tribunals, ESIS, insurance) commonly demands psychiatric documentation at defined intervals; the DMHP psychiatric tier and tele-follow-up are the realistic maintenance channel for mood, sleep and family work.",
    costConsiderations: "Sertraline and valproate generics inexpensive (approx ₹50–150/month, 2026); the expensive items are imaging and medico-legal time; the scarcest is rehabilitation, one family session substitutes for months of an absent service, and the employer letter saves a livelihood for the price of ten lines.",
    culturalConsiderations: "The family's initial reading is moral ('he has become difficult', 'using the accident as an excuse'): the relabelling session converts the moral argument into a medical alliance, and the CT films on the table carry more persuasion than any lecture. The helmet counselling belongs in the psychiatric consultation: the head-injured two-wheeler survivor returning to helmetless riding is the system's repeat customer, and the conversation lands best from the clinician who knows what the second injury costs. The alcohol junction is cultural and clinical at once: intoxication at the injury predicting worse outcomes, post-injury misuse escalating. Screen both ends without moralising either.",
    patientCounselling: [
      "The one-line philosophy: 'After head injury, treat the mood, the sleep, the pain and the load, then see how much brain remains to rehabilitate.'",
      "The brakes script: 'His brakes are injured, not his values. The tactlessness and temper are injuries to the manager offices, and structure and time repair them better than blame does.'",
      "The fatigue script: 'The tiredness is a budget, not a character. Schedule the demanding hours, rest before the overheating, and the budget grows back over months.'",
      "The employer script (written, ten lines): 'Neurological recovery, not misconduct; reduced hours, written instructions, no multitasking, a review in six weeks.'",
      "The driving script: 'The decision is clinical and documented; seizures, reaction speed, impulsivity and vision each decide it, and the family never carries it alone.'",
      "The helmet script: 'The second injury lands on a smaller reserve; the helmet is the only intervention that protects what remains, and it costs less than one week of the tablets.'",
      "The litigation script: 'The honest record serves the claim better than exaggeration, and the clinical treatment continues regardless of the tribunal's calendar.'",
    ],
  },
  decisionPath: {
    title: "The accident survivor whose family says 'he is not the same'",
    nodes: [
      {
        id: "start",
        question: "A head-injury survivor's family reports change. First: the timeline and the numbers.",
        branches: [
          { label: "Weeks-delayed drowsiness after a recent fall, elderly/anticoagulated", next: "subdural-path" },
          { label: "Months of temper, disinhibition, slowed thinking since the crash", next: "triad-gate" },
          { label: "Episodic 'moods': staring, lost minutes, tongue-bites", next: "epilepsy-path" },
          { label: "Nightmares, road-avoidance, startle since the accident", next: "ptsd-path" },
        ],
      },
      {
        id: "subdural-path",
        question: "The surgical emergency impersonating psychiatry: chronic subdural.",
        recommendation: "Urgent imaging before any label: weeks-delayed drowsiness, headache or personality change after any fall in the elderly, alcohol-using or anticoagulated patient; the drainable clot whose evacuation returns the person within days; the strongest psychiatric skill here is ordering the scan.",
      },
      {
        id: "epilepsy-path",
        question: "The episodic behaviours: post-traumatic epilepsy until the EEG says otherwise.",
        recommendation: "Investigate with neurology (the two-year highest-risk window); treat with the least cognitively sedating agent compatible; audit adherence and interactions, and teach the family that the 'moods' with lost minutes are data, not character.",
      },
      {
        id: "ptsd-path",
        question: "The crash that keeps playing: the PTSD rider.",
        recommendation: "The full structure assessed (intrusions, avoidance, hyperarousal, negative mood): treated with trauma-focused work and the SSRI tier; the shared surface with post-concussion means BOTH get assessed and BOTH get treated when found.",
      },
      {
        id: "triad-gate",
        question: "The triad: cognitive, emotional, behavioural change since the injury.",
        branches: [
          { label: "Mood dominant: weeks-onset sadness, hopelessness", next: "depression-path" },
          { label: "Disinhibition and temper dominant", next: "frontal-path" },
          { label: "Fatigue dominant, treatment-resistant", next: "pituitary-path" },
          { label: "The pattern predates the crash (collateral)", next: "preexisting-path" },
        ],
      },
      {
        id: "depression-path",
        question: "The biological-and-reactive rider.",
        recommendation: "SSRI at half-standard start, slow titration, one change at a time; suicide risk asked directly (genuinely elevated); the rehabilitation floor laid alongside: the label and the structure carrying what the tablet alone cannot.",
      },
      {
        id: "frontal-path",
        question: "The released temper and the disinhibition.",
        recommendation: "The relabelling session first ('brakes injured, not values'); the family programme (one page, anger drill, single-speaker rule); the SSRI trial before the mood-stabiliser tier; small-dose quetiapine with fixed review only for dangerous disinhibition that structure cannot hold.",
      },
      {
        id: "pituitary-path",
        question: "The under-remembered mimic: post-traumatic hypopituitarism.",
        recommendation: "Endocrine screening in every unexplained persistent fatigue after moderate-severe TBI: fatigue, low mood, sexual dysfunction and weight change that never responded to SSRIs; hormone replacement the treatment no antidepressant substitutes.",
      },
      {
        id: "preexisting-path",
        question: "The pattern that predates the crash.",
        recommendation: "The honest collateral reading: pre-existing personality or psychiatric history worsens outcomes but does not fake the injury's additions. Treat both layers on their own evidence; the timeline separates them.",
      },
      {
        id: "management-gate",
        question: "The programme: relabel, then rehabilitate.",
        branches: [
          { label: "The family and structure floor (always)", next: "family-path" },
          { label: "Return to work/school", next: "work-path" },
          { label: "Sleep broken", next: "sleep-path" },
          { label: "Driving question open", next: "driving-path" },
        ],
      },
      {
        id: "family-path",
        question: "The relabel session and the household programme.",
        recommendation: "The shaken-wiring story told with the CT films on the table; the one-page disinhibition sheet; the anger drill (leave-stay-return); the one-instruction grammar; the fatigue budget respected by everyone including the visitors; the household's endurance itself monitored.",
      },
      {
        id: "work-path",
        question: "The graded return with documentation.",
        recommendation: "Half-days then full days; written instructions; no multitasking initially; supervision for safety-critical tasks; the employer letter stating neurological recovery, not misconduct; the review at six weeks and the accommodations held as long as the function needs them.",
      },
      {
        id: "sleep-path",
        question: "The rhythm rebuilt before the hypnotic.",
        recommendation: "Daylight mornings, daytime activity, no chair-napping, evening calm; melatonin for rhythm; mirtazapine where depression co-travels; the benzodiazepine exit planned: the long-term sedatives tax exactly the budget being rebuilt.",
      },
      {
        id: "driving-path",
        question: "The clinical, documented decision.",
        recommendation: "The checklist: seizures (the two-year window), reaction speed, impulsivity, vision, sedating medicines; each disqualifying until cleared; the decision documented and reviewed, never delegated to the family's optimism or the employer's pressure.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Labelling disinhibition 'personality worsening' without a timeline",
      why: "The before-versus-after inventory never taken means the injury's signature gets moralised: the marriage and the job lost to a treatable relabelling failure.",
      correction: "The collateral change inventory taken privately and specifically (temper, humour, money, hygiene, sleep, driving, affection, work) with the crash's date drawn between the columns.",
    },
    {
      mistake: "Missing PTSD riding under 'post-concussion'",
      why: "The shared surface (sleeplessness, irritability, concentration failure, jumpiness) lets the trauma hide inside the concussion label: the most treatable rider going untreated.",
      correction: "The both-always rule: assess PTSD structure in every accident survivor, and treat what is found; the concentration and sleep that lift with the trauma work prove the point.",
    },
    {
      mistake: "Prescribing benzodiazepines for anxiety in the cognitively impaired patient",
      why: "The 'nerves' prescription taxes cognition and balance exactly where both are already injured: the falls, the daytime fog, the dependence arriving on schedule.",
      correction: "Hygiene first, melatonin for rhythm, SSRI for the anxiety itself, mirtazapine where sleep and appetite need help: the benzodiazepine exit planned at the first prescription that included one.",
    },
    {
      mistake: "Missing the chronic subdural in the elderly anticoagulated faller",
      why: "Weeks-delayed drowsiness and personality change look psychiatric: the drainable clot's window closes while the label settles.",
      correction: "The imaging rule on the timeline alone: any subacute change after any fall in the elderly, alcohol-using or anticoagulated patient gets the scan before the psychiatric label.",
    },
    {
      mistake: "Writing 'compensation neurosis' instead of assessing",
      why: "The cynicism reflex: money at stake read as symptom manufacture, most post-TBI suffering is genuine even when the claim is real; the dismissal forfeits the treatable riders.",
      correction: "Assess, don't editorialise: treat the clinical truth, document uncertainty honestly. The honest record serves the claim AND the treatment better than either inflation or dismissal.",
    },
    {
      mistake: "Forgetting hypopituitarism in 'treatment-resistant post-TBI depression'",
      why: "The SSRI-escalation reflex misses the endocrine mimic: fatigue, low mood, sexual dysfunction and weight change that no antidepressant reaches.",
      correction: "The hormone screen in every unexplained persistent fatigue after moderate-severe TBI: the replacement that resolves what the antidepressant could not.",
    },
    {
      mistake: "Letting the family decide the driving question",
      why: "The optimism of love and the pressure of livelihoods delegating a safety decision to sentiment: the seizure, the slowed reaction, the impulsivity each disqualifying quietly.",
      correction: "The clinical, documented, checklist-driven decision reviewed at intervals: the family supported by the clinic's authority rather than abandoned to its own hope.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "LOC lies; PTA tells: post-traumatic amnesia as the outcome predictor and its grading (minutes-hours-days-weeks).",
        "The coup-contrecoup geography: frontal and temporal poles; the disinhibition and new-learning failure that follow.",
        "Post-concussion syndrome vs PTSD: the shared surface and the distinguishing structures (intrusion-avoidance-hyperarousal vs executive-disinhibition).",
        "The two lethal mimics: chronic subdural (elderly, anticoagulated, weeks-delayed) and hypopituitarism (the SSRI-unresponsive fatigue).",
        "The pharmacology law: small doses, slow titration, one change at a time, with the benzodiazepine prohibition explained.",
      ],
      practical: [
        "Demonstrate the frontal-weighted bedside battery (proverbs, go/no-go, alternating sequences, timed fluency) and explain why memory-weighted screens under-sell TBI.",
        "Take the collateral change inventory: the before-after columns across temper, humour, money, hygiene, sleep, driving, affection and work. The eight-row table that carries the diagnosis.",
      ],
      longAnswer: [
        "A 30-year-old two-wheeler accident survivor, six months post-injury, presents with irritability, insomnia and job difficulties: neuropsychiatric assessment and management (the evergreen post-TBI essay, the triad, the riders, the relabel-rehabilitate package).",
        "Neuropsychiatric sequelae of traumatic brain injury: the timeline, the treatable riders, and the medico-legal interface.",
      ],
    },
    neetPg: {
      highYield: [
        "PTA DURATION > LOC as the outcome predictor: the grading tradition's central fact; 'LOC lies, PTA tells'.",
        "The vulnerable geography: frontal poles (disinhibition, perseveration, disinhibited humour) and anterior temporal lobes (new-learning failure); coup-contrecoup plus diffuse axonal shearing of white matter.",
        "DEPRESSION IN A QUARTER TO A HALF over follow-up; suicide risk genuinely elevated (ask directly); anxiety and PTSD co-travelling; 10–15% of mild-TBI patients persisting beyond a year.",
        "POST-TRAUMATIC EPILEPSY: risk raised, highest in the FIRST TWO YEARS; any episodic behaviour (staring, lip-smacking, tongue-bite, lost minutes) investigated.",
        "CHRONIC SUBDURAL: weeks-delayed drowsiness/personality change in the ELDERLY, ALCOHOL-USING or ANTICOAGULATED faller; the surgical emergency impersonating psychiatry.",
        "POST-TBI HYPOPITUITARISM: fatigue, low mood, sexual dysfunction, weight change mimicking treatment-resistant depression; the endocrine screen before the second SSRI.",
        "THE PHARMACOLOGY LAW: small doses, slow titration, one change at a time; benzodiazepines avoided (cognition and balance); SSRI first for depression AND irritability; valproate one-drug-two-jobs (epilepsy + explosive anger); no stimulant licensed for TBI cognition.",
        "THE DEMENTIA LINK: one severe TBI roughly doubles later dementia risk; repeated mild impacts → CTE, the distinct tauopathy (name known from sport; no clinic test).",
        "DRIVING: a clinical, documented decision (seizures, reaction speed, impulsivity, vision), never familial.",
        "THE SHARED SURFACE: post-concussion vs PTSD overlap (sleeplessness, irritability, concentration failure, jumpiness); assess BOTH in every accident survivor.",
        "FATIGABILITY as the return-to-work variable: the overloaded-CPU model: ordinary stimulation exceeding the shrunken processing budget.",
        "SECOND-IMPUME/repeat-injury concept and the graded-return protocol (half-days, written instructions, no multitasking, safety supervision).",
      ],
      pyqConcepts: [
        "The eight-row collateral change inventory: the short-note favourite that IS the assessment.",
        "The employer letter ('neurological recovery, not misconduct'): the Indian medico-legal answer that saves jobs.",
        "MACT documentation duties at defined intervals: the compensation-question staple.",
        "The helmet-counselling-as-psychiatry argument: the programme-design answer.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 34-year-old software manager with 'mild' TBI (LOC minutes, PTA around 12 hours, CT normal) two months ago, back at full hours, now shouting in stand-ups, missing deadlines, sleeping badly and avoiding the crash route: the employer warning and the family's 'has he become arrogant'; the package being the relabelling session with wife and HR, the graded return (half-days, written tasks), sertraline for the depressive-anxious load, the sleep protocol and the suspended driving: twelve weeks later full hours with two accommodations, near-baseline at two years; 'mild' by LOC disabling by PTA, and the documentation outperforming any prescription.",
        "A 72-year-old on warfarin, three weeks after a 'trivial' bathroom slip, drowsy by day, rude at dinner, unsteady (the family requesting 'a psychiatric check for dementia': the CT showing the chronic subdural, the drainage, the return to the gentle baseline within days) the strongest psychiatric skill being the scan's ordering.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "PTA outperforms LOC as the outcome predictor.",
        "Chronic subdural in the elderly anticoagulated faller: image, don't label.",
        "Post-traumatic epilepsy: highest risk in the first two years.",
        "SSRI first for post-TBI depression and irritability; benzodiazepines avoided.",
        "Hypopituitarism: the treatable mimic of resistant post-TBI fatigue.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The relabelling session is the treatment's first prescription. The family that hears 'his brakes are injured, not his values' becomes the rehabilitation programme instead of the crisis source; one session, measurable household-conflict reduction, cheaper than any service India does not have.",
        "The employer letter is a psychiatric instrument: ten lines stating 'neurological recovery, not misconduct' with the accommodations listed. The livelihood it saves is the relapse it prevents.",
        "The litigation stance is a clinical skill: treat the clinical truth, document the uncertainty honestly, and never write 'compensation neurosis'. The honest record wins the claim more often than the inflated one, and the therapeutic alliance survives either verdict.",
        "The helmet conversation belongs in the follow-up: the head-injured rider returning helmetless is the system's repeat customer, and the clinician who knows what the second injury costs speaks with an authority no road-safety poster owns.",
        "The household's endurance is the prognosis's other half: the caregiver's sleep, health and resentment audited at every review. The family that breaks ends the recovery more surely than any seizure does.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The manager who failed the comeback",
      presentation: "A 'mild' injury by LOC that disabled by PTA: the manager whose stand-up shouting nearly ended a career the documentation saved.",
      initialPresentation: "A 34-year-old software manager sustained a 'mild' TBI in a car crash: loss of consciousness for minutes, post-traumatic amnesia around twelve hours, CT normal. Two months later, back at full hours, he began shouting in stand-up meetings, missing deadlines, sleeping badly and avoiding the crash route. His employer issued a warning; the family wondered 'if he had become arrogant'; the referral asked for an attitude assessment.",
      history: "No pre-injury psychiatric or personality history by the wife's private collateral account; the injury's numbers (minutes of LOC, the 12-hour PTA gap) documented from the discharge summary; the sleep broken since the crash with nightmares of the impact; the crash route avoided and the horn-startle present; alcohol use unchanged; no seizures.",
      examination: "Frontal-weighted testing: slowed timed fluency, go/no-go errors, proverb interpretation concrete; processing speed visibly slowed in the noisy clinic; startle present; the fatigue pattern: a capable quiet-morning performance collapsing in the evening's simulation of the office floor.",
      diagnosis: "Post-TBI neuropsychiatric syndrome: post-concussion cognitive-fatigue picture with co-travelling depression, PTSD features and frontal-type irritability, on a 'mild'-by-LOC, moderate-by-PTA injury.",
      management: "The relabelling session with wife and HR present (the shaken-wiring story with the CT films on the table); graded return (half-days, written tasks, no multitasking, the accommodation list written); sertraline at half-standard start for the depressive-anxious load; the sleep protocol (daylight, no chair-napping, evening calm, melatonin); driving suspended pending assessment; the PTSD work begun.",
      outcome: "Twelve weeks later he managed full hours with two accommodations held; the sleep and temper settled with the SSRI and the routine; two years later, close to baseline: the documentation and the graded return having outperformed any prescription in the case.",
      teachingPoints: [
        "'Mild' by LOC can disable by PTA: the grading tradition's central lesson worn by one career.",
        "PTSD-depression-fatigue is the common post-concussion engine. Treat the riders and the residual shrinks.",
        "The graded return with documentation outperformed any prescription: the employer letter as clinical instrument.",
        "The family's relabelling rescued the job: 'brakes injured, not values' is a treatment, not a metaphor.",
      ],
    },
    {
      title: "The sweet grandfather who turned rude",
      presentation: "Three weeks after a 'trivial' bathroom slip, a warfarin-anticoagulated grandfather grew drowsy by day and rude at dinner: the family asked for a dementia check.",
      initialPresentation: "A 72-year-old gentleman on warfarin, three weeks after a 'trivial' bathroom slip nobody logged as an injury, was brought by his son with a request for 'a psychiatric check for dementia': drowsiness by day, uncharacteristic rudeness at dinner, unsteadiness on the evening walk; a change in character that the family could no longer reconcile with the man they knew.",
      history: "Atrial fibrillation on warfarin (the anticoagulation the family never connected to the fall); the bathroom slip unwitnessed but the bruise remembered; no prior cognitive decline by the wife's account: 'sharp at accounts until last month'; no headache reported (the family not asked, the patient not volunteering).",
      examination: "Drowsy but arousable; mild right-sided pronator drift; gait unsteady beyond his baseline; the affect flattened but the person recognisable: the 'rudeness' the cortical irritation of a compressing clot, not a character.",
      diagnosis: "Chronic subdural haematoma: the weeks-delayed surgical emergency impersonating psychiatric decline in the anticoagulated elderly faller.",
      management: "Urgent CT: the chronic subdural; neurosurgical drainage; warfarin management bridged with the treating team; no psychotropic prescribed at any point: the strongest psychiatric skill in the case was the scan's ordering on the timeline alone.",
      outcome: "After drainage, the return to his gentle baseline within days: the drowsiness lifted, the rudeness dissolved, the accounts resumed; the family left with the fall-rule for every future slip in an anticoagulated elder.",
      teachingPoints: [
        "Weeks-delayed change after ANY fall in the elderly, especially the anticoagulated, is a surgical emergency impersonating psychiatry.",
        "The timeline alone earns the scan: no symptom threshold required when the anticoagulation is on the chart.",
        "The strongest psychiatric skill here was ordering the scan. The diagnosis that protects the person from the label.",
        "The 'dementia check' request reframed: every subacute personality change in an anticoagulated elder gets imaged before it gets assessed.",
      ],
    },
  ],
  clinicalPearls: [
    "LOC lies; PTA tells: post-traumatic amnesia duration is the outcome predictor the grading tradition actually trusts.",
    "The vulnerable geography is the whole phenomenology: frontal poles (disinhibition) and temporal poles (new-learning failure), with the deep wiring sheared in between.",
    "Depression rides a quarter to a half of TBI courses; suicide risk is genuinely elevated. Ask directly at every mood touchpoint.",
    "Assess PTSD in EVERY accident survivor: the shared surface with post-concussion hides the most treatable rider.",
    "Fatigability, not laziness: the overloaded-CPU model; the processing budget that ordinary stimulation now exceeds; the return-to-work plan's central variable.",
    "Weeks-delayed drowsiness in the elderly, alcohol-using or anticoagulated faller = chronic subdural until imaged: the drainable emergency impersonating psychiatry.",
    "Post-traumatic epilepsy: raised risk, highest in the first two years; staring spells, lost minutes and nocturnal tongue-bites are data, not moods.",
    "Post-TBI hypopituitarism: the SSRI-unresponsive fatigue with weight change and sexual dysfunction; the hormone screen before the second antidepressant.",
    "Small doses, slow titration, one change at a time: the injured brain amplifies every side effect.",
    "Benzodiazepines tax exactly the functions being rebuilt (cognition, balance): the sleep programme runs hygiene-first, melatonin for rhythm, mirtazapine where depression co-travels.",
    "One severe TBI roughly doubles later dementia risk; repeated mild impacts carry the distinct tauopathy (CTE): protect from further knocks, treat vascular risks, monitor without catastrophising.",
    "The driving decision is clinical and documented: seizures, reaction speed, impulsivity and vision each disqualify until cleared; never the family's call.",
    "The relabelling session is the first prescription: 'his brakes are injured, not his values'. The label that rescues marriages, jobs and self-respect.",
  ],
  highYieldSummary: [
    "Definition: post-TBI neuropsychiatry = the cognitive, emotional and behavioural sequelae following traumatic brain injury on a weeks-to-years timeline; severity graded by LOC and PTA (PTA the stronger predictor), with 'mild' injuries disabling when PTA runs long.",
    "Epidemiology: leading cause of disability in young adults (15–35, male-predominant); 10–15% of mild-TBI patients persisting beyond a year; depression in a quarter to a half over follow-up; PTSD co-travelling; suicide risk raised; single severe TBI roughly doubling later dementia risk; CTE the repeated-impact tauopathy.",
    "Mechanism: acceleration-deceleration shearing (diffuse axonal injury of the white-matter cabling) plus coup-contrecoup contusions of the frontal and temporal poles; disinhibition plus forgetfulness plus slowed thinking with old knowledge preserved; the overloaded-CPU fatigability; the sleep-wake disruption amplifying all of it.",
    "Clinical: the triad (Head, headache, dizziness; Heart: depression, anxiety, PTSD; Hindrance: cognition, behaviour); frontal-type release (disinhibition, perseveration, apathy); the neurological flags (post-traumatic epilepsy's episodic behaviours, the chronic subdural's weeks-delayed decline, hypopituitarism's resistant fatigue).",
    "Diagnosis: the injury interview in numbers (LOC, PTA, imaging, seizures) + the collateral change inventory (eight rows, before versus after) + frontal-weighted testing (memory-weighted screens under-sell) + mood-and-PTSD screening + the drug-list review + the mimic rule-outs (subdural imaging, endocrine screen, EEG, hypothyroid, alcohol).",
    "Management: (1) relabel then rehabilitate; the family session, the one-instruction grammar, sensory grading, scheduled rest, the fatigue budget; (2) graded return to work/school with written accommodations and the employer letter; (3) the clinical documented driving decision; (4) pharmacology. SSRI first (half-standard starts) for depression AND irritability, mirtazapine for the sleep-appetite tier, valproate one-drug-two-jobs, small-dose quetiapine with fixed review for dangerous disinhibition, benzodiazepines exited; (5) the riders treated (PTSD work, epilepsy with neurology, the pituitary screen); (6) the medico-legal discipline (honest documentation, no 'compensation neurosis').",
    "The Indian tier: the two-wheeler burden and helmet gap; night-road delayed rescue; the absent rehabilitation tier with the family-as-therapist programme as the channel; the MACT/ESIS documentation duties; the employer letter saving livelihoods; sertraline and valproate generics at ₹50–150/month (approx 2026): the scarcest resource being rehabilitation, the cheapest intervention being the label.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "tbi-quiz-1",
      question: "The best single early predictor of cognitive outcome after TBI is:",
      options: ["Duration of loss of consciousness", "Duration of post-traumatic amnesia", "Skull fracture visible", "Duration of hospital stay"],
      correctIndex: 1,
      explanation: "PTA outperforms LOC in predicting outcome across the classic literature — LOC lies, PTA tells.",
      afterSectionId: "diagnosis",
    },
    {
      id: "tbi-quiz-2",
      question: "Three weeks after a fall, an anticoagulated 70-year-old becomes drowsy and disinhibited. First suspicion:",
      options: ["Post-concussion syndrome", "Chronic subdural haematoma: urgent imaging", "Early dementia", "Depression"],
      correctIndex: 1,
      explanation: "Weeks-delayed decline in an anticoagulated elderly faller is a neurosurgical emergency impersonating psychiatry.",
      afterSectionId: "differential",
    },
    {
      id: "tbi-quiz-3",
      question: "The mood-PTSD-cognition triad after a road accident is best addressed first by:",
      options: ["Long-term benzodiazepines", "Screening and treating depression/PTSD with SSRI plus structured pacing", "Antipsychotics", "No treatment until compensation concludes"],
      correctIndex: 1,
      explanation: "SSRIs plus sleep, pacing and graded return; benzodiazepines harm cognition and balance — exactly the functions being rebuilt.",
      afterSectionId: "management",
    },
    {
      id: "tbi-quiz-4",
      question: "Post-TBI 'treatment-resistant' fatigue and depression with weight change should prompt:",
      options: ["Doubling the SSRI", "Endocrine screening (hypopituitarism)", "ECT", "A second antipsychotic"],
      correctIndex: 1,
      explanation: "Post-traumatic hypopituitarism mimics depression and responds to hormone replacement, not antidepressants.",
      afterSectionId: "differential",
    },
    {
      id: "tbi-quiz-5",
      question: "Disinhibition after frontal-pole contusion is best FIRST managed with:",
      options: ["Environmental structure and family psychoeducation", "Immediate high-dose antipsychotic", "Punishment-based behaviour chart", "Restraints"],
      correctIndex: 0,
      explanation: "Structure and education are the first line — 'brakes injured, not values'; drugs enter only for danger that structure cannot hold, small-dose with fixed review.",
      afterSectionId: "management",
    },
    {
      id: "tbi-quiz-6",
      question: "Regarding driving after significant TBI:",
      options: ["The family should decide", "It is a documented clinical decision covering seizures, reaction, impulsivity and vision", "All patients can drive after discharge", "Only patients with seizures need review"],
      correctIndex: 1,
      explanation: "Driving fitness is a clinical, documented decision, not a family compromise — each disqualifier cleared before return.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Why does post-traumatic amnesia predict outcome better than loss of consciousness?", answer: "Because LOC measures the depth of the initial stun while PTA measures the WIDTH of the actual injury to the memory-filing and integration machinery: PTA is the gap between the injury and continuous memory; the hours-to-days the brain could not consolidate experience at all. A brief LOC with a 12-hour PTA has already told you the temporal poles and the deep wiring took a real hit (the manager who fails his comeback); a longer LOC with a short PTA can recover cleanly. The grading tradition's translation: LOC lies, PTA tells; the discharge summary's most predictive single number, and the one the family must be asked about specifically (they remember the waking-up conversations starting, not the stun's length).", topic: "Diagnosis" },
    { question: "Post-concussion syndrome vs PTSD: list the three overlapping and the three distinguishing features.", answer: "OVERLAPPING (the shared surface that mandates assessing both): sleeplessness, irritability, concentration failure; plus jumpiness. DISTINGUISHING (the structures that separate them): (1) PTSD's signature (intrusions (the crash replaying), avoidance (the road, the vehicle), hyperarousal with the startle architecture) none of which post-concussion produces; (2) TBI's signature (fatigability with the overloaded-CPU pattern (capable in quiet, collapsing in noise), disinhibition, slowed processing) none of which PTSD's core contains; (3) the timelines' logic. PTSD tracks the terror's memory (worse with reminders), post-concussion tracks the injury's physics (worse with load). The clinical rule that resolves the overlap: assess BOTH in every accident survivor and treat what is found. The shared surface is a mandate, not a differential.", topic: "Differential" },
    { question: "Four bedside frontal tasks for the TBI follow-up examination.", answer: "(1) PROVERB INTERPRETATION: the concrete reading ('people in glass houses shouldn't throw stones' explained literally) exposing orbitofrontal dysfunction; (2) GO/NO-GO: tapping once when the examiner taps once, withholding when the examiner taps twice (or the fist-sequence variant): the inhibition failure directly observed; (3) ALTERNATING SEQUENCES (the Luria triangle-loop copying or fist-edge-palm cycle): the perseveration writ visible on paper; (4) TIMED FLUENCY (animals or words beginning with a letter in sixty seconds): the processing speed and retrieval under time. The battery's logic: memory-weighted screens (the MMSE-style) under-sell TBI exactly as they under-sell FTD; the frontal-weighted tasks probe the injured geography directly, in under five minutes, at a follow-up desk.", topic: "Clinical practice" },
    { question: "An elderly anticoagulated patient becomes drowsy and rude three weeks after a fall. Diagnosis-first move?", answer: "URGENT IMAGING: the chronic subdural haematoma is a surgical emergency impersonating psychiatric decline: weeks-delayed drowsiness, headache or personality change in the elderly, alcohol-using or anticoagulated faller gets the CT BEFORE any label, any psychotropic, or any 'dementia check' framing. The bridge physiology: the bridging veins tear on the trivial fall, the clot organises and compresses over weeks, the anticoagulation keeps the factory running, and the drainage returns the person within days (the sweet grandfather restored). The teaching sentence: the timeline alone earns the scan; no symptom threshold required when the warfarin is on the chart; the strongest psychiatric skill in the case is the ordering.", topic: "Clinical practice" },
    { question: "Why must hypopituitarism be remembered in 'treatment-resistant post-TBI depression'?", answer: "Because post-traumatic hypopituitarism (after moderate-severe TBI) produces fatigue, low mood, sexual dysfunction, weight change and lethargy that mimic treatment-resistant depression EXACTLY, and respond to hormone replacement alone, never to SSRIs. The sequence it breaks: the SSRI escalated twice for the 'resistant' fatigue-mood picture, the referral deepening toward somatic therapies, while the endocrine screen (a single morning panel against the pituitary axes) resolves the whole picture with replacement. The rule: every unexplained persistent fatigue after moderate-severe TBI earns the hormone screen BEFORE the second antidepressant; the under-remembered treatable mimic, and the cheapest answer to 'nothing is working'.", topic: "Differential" },
    { question: "The return-to-work package: five components in order.", answer: "(1) THE MEDICAL CLEARANCE note stating the recovery stage and the specific accommodations; (2) HALF-DAY SCHEDULE initially, expanding as the fatigue budget demonstrably holds; (3) WRITTEN INSTRUCTIONS replacing multi-step verbal ones: the temporal-filing support; (4) NO MULTITASKING initially, with supervision for safety-critical tasks (driving, machinery, cash-handling); (5) THE EMPLOYER LETTER: ten lines stating 'neurological recovery, not misconduct', the accommodations listed, a review date promised. The package's spine: graded exposure matched to the observable budget, documented so that the employer's 'attitude' reading never gets its footing; the documentation outperforming prescriptions in case after case (the manager who failed the comeback, then didn't).", topic: "Management" },
    { question: "Two pharmacology rules for the injured brain (doses; changes).", answer: "DOSES: SMALL, and started at half-standard, titrated slowly; the injured brain amplifies side effects (the SSRI that sedates a normal patient at 50 mg fogs the TBI patient at 25; the sedatives that calm others unbalance the already-wobbled). CHANGES: ONE AT A TIME, with review before the next, because when two variables move together, neither the benefit nor the harm can be attributed, and the attribution IS the clinical information on this terrain. The corollaries the rules carry: benzodiazepines exited (they tax cognition and balance, the exact functions under reconstruction); every sedative load re-justified at each review (antiepileptics swapped for the least-sedating compatible agent); mirtazapine's morning grogginess weighed against the night it bought. The law in one line: the pharmacology rides on the rehabilitation, never replaces it.", topic: "Pharmacology" },
  ],
  faqs: [
    { question: "The scan is normal, then why is he different?", answer: "Wiring injuries (shearing of fibres) often do not show on routine scans. The office manager is hurt even when the building photographs look fine. The functioning (temper, patience, memory) is the real scan." },
    { question: "It has been a year. Is this as good as it gets?", answer: "Much of the visible 'slowness' is often the treatable load on top: depression, broken sleep, pain, medicines. Treat those before deciding the floor. And recovery continues for years; the brain keeps adapting if the load is managed." },
    { question: "He fights over nothing since the accident. Is he just using it as an excuse?", answer: "His brakes are injured. Irritability after head injury is as physical as a limp, and it responds to structure and sometimes medicines; blame worsens it, always." },
    { question: "Can he drive again?", answer: "A clinical decision with a checklist: seizures, reaction speed, impulsivity, vision, medicines. Some return in weeks, some must not; the family should never decide this alone." },
    { question: "He has nightmares about the accident and avoids that road.", answer: "That is post-traumatic stress, and it travels with head injury constantly. It has specific, effective treatment; ask for it rather than waiting; it also lifts concentration and sleep." },
    { question: "The compensation case is pending and he seems worse whenever we go to court.", answer: "Stress genuinely flares the symptoms; the case and the brain feed each other. Keep treating clinically, and keep the documentation factual; honest records help the claim more than exaggeration does." },
    { question: "Do head injuries cause dementia later?", answer: "One severe injury raises the risk meaningfully; repeated mild ones (boxing-type) carry a distinct risk. What one can do: protect from further knocks, treat vascular risks, and monitor; worry is optional, vigilance is not." },
    { question: "What are the chances of seizures?", answer: "Raised after significant injuries, highest in the first two years. Any odd episodic event (staring spells, lost minutes, tongue-bite) must be reported for EEG and treatment decisions." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased neurocognitive-disorder-due-to-TBI framework and the PTSD criteria referenced descriptively" },
      { source: "VA/DoD and NICE guidance on TBI rehabilitation — the graded-return and symptom-management architecture" },
      { source: "Post-TBI hypopituitarism consensus guidance — the hormonal-screening recommendation (the treatable mimic)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.10 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Fann JR et al. and the TBI-depression literature — prevalence and SSRI treatment outcomes" },
      { source: "Post-traumatic epilepsy studies — incidence windows and risk factors after moderate-severe TBI" },
      { source: "Cochrane reviews of cognitive rehabilitation after TBI — what works, how thinly" },
    ],
    reviews: [
      { source: "Teasdale GM, Jennett B lineage — the Glasgow Coma Scale and the PTA grading tradition (paraphrased)" },
      { source: "Repeated head-impact literature — chronic traumatic encephalopathy as a distinct tauopathy (name and caveat)" },
      { source: "Indian road-traffic injury and TBI burden studies (NIMHANS and others) — the epidemiological base of the India sections" },
      { source: "Motor Vehicles Act compensation practice — documentation standards for MACT/ESIS" },
    ],
    patientResources: [
      { source: "The one-page disinhibition sheet and the employer letter — the two instruments this course hands to every Indian TBI family" },
      { source: "Tele-MANAS 14416 — the mood, sleep and family distress line after injury" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the brakes-not-values explanation, the fatigue budget, the warning signs, the return-to-work letter.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "PTA grading, the pole geography, the triad, the two lethal mimics, the pharmacology law.",
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
      description: "Everything: the relabelling craft, the medico-legal discipline, the family-as-therapist programme, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The triad, the PTA rule, the riders and the long shadow.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the PTA rule and the two lethal mimics cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The shaken wiring, the overloaded CPU, the replaying crash.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the poles' geography IS the phenomenology." },
    { number: 3, title: "Clinical Practice", description: "The detective assessment, the mimic screens, the relabel-rehabilitate package.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the change inventory, the frontal battery and the graded-return plan." },
    { number: 4, title: "Indian Context", description: "The absent rehab tier, the employer letter, the helmet conversation.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the relabelling session and write the ten-line employer letter." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the post-TBI essay cold and recite the two mimics without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.10 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Teasdale GM, Jennett B lineage — the Glasgow Coma Scale and the PTA grading tradition (paraphrased; PTA as the superior outcome predictor)", sourceType: "primary", year: "1974 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased neurocognitive-disorder-due-to-TBI framework; PTSD criteria referenced descriptively", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "VA/DoD and NICE TBI rehabilitation guidance — the graded-return and symptom-management architecture", sourceType: "guideline", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Fann JR et al. and the TBI-depression literature — prevalence (a quarter to a half over follow-up) and SSRI treatment outcomes", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Post-traumatic epilepsy studies — incidence windows (highest in the first two years) and risk factors after moderate-severe TBI", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Post-TBI hypopituitarism consensus guidance — hormonal screening after moderate-severe TBI (the treatable mimic)", sourceType: "guideline", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Repeated head-impact literature — chronic traumatic encephalopathy as a distinct tauopathy (name and caveat, no clinic test); single severe TBI dementia-risk doubling studies", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Cochrane reviews of cognitive rehabilitation after TBI — the honest what-works tier", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Indian road-traffic injury and TBI burden studies (NIMHANS and others) — the epidemiological base of the India sections", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Motor Vehicles Act compensation practice — MACT/ESIS documentation standards; Indian generic cost realities (approx 2026)", sourceType: "government", year: "2019 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "PTA duration outperforms LOC as the outcome predictor: the gap between injury and continuous memory (graded minutes-hours-days-weeks) measures the actual injury to the consolidation machinery; 'LOC lies, PTA tells'; mild-by-LOC injuries with long PTA can disable more than severe ones.", grade: "established", sources: ["S2"] },
    { text: "The mechanism geography: acceleration-deceleration shearing (diffuse axonal injury of deep white matter) plus coup-contrecoup contusions of the frontal and temporal poles; disinhibition plus new-learning failure plus slowed processing with old knowledge preserved; the overloaded-CPU fatigability as the return-to-work variable.", grade: "established", sources: ["S1", "S4"] },
    { text: "The epidemiology: TBI a leading cause of disability in young adults (15–35, male-predominant); roughly 10–15% of mild-TBI patients persisting beyond a year; depression in a quarter to a half over follow-up; anxiety/PTSD co-travelling; suicide risk genuinely raised; single severe TBI roughly doubling later dementia risk with CTE the distinct repeated-impact tauopathy.", grade: "established", sources: ["S5", "S8", "S10"] },
    { text: "The PTSD overlap discipline: post-concussion syndrome and PTSD share sleeplessness, irritability, concentration failure and jumpiness; the mandated move is assessing both in every accident survivor and treating what is found.", grade: "established", sources: ["S1", "S5"] },
    { text: "The two lethal mimics: chronic subdural haematoma (weeks-delayed drowsiness/personality change after any fall in the elderly, alcohol-using or anticoagulated patient (urgent imaging, a surgical emergency) and post-traumatic hypopituitarism (fatigue, low mood, sexual dysfunction, weight change unresponsive to SSRIs) the endocrine screen before the second antidepressant).", grade: "established", sources: ["S1", "S7"] },
    { text: "The pharmacology law: small doses, slow titration, one change at a time; the injured brain amplifies side effects; SSRIs first for depression AND irritability; mirtazapine for the sleep-appetite tier; benzodiazepines avoided (they tax cognition and balance); valproate as the one-drug-two-jobs option (epilepsy plus explosive anger, pregnancy counselling); small-dose quetiapine with fixed review for dangerous disinhibition; no stimulant licensed for TBI cognition.", grade: "established", sources: ["S1", "S4", "S5"] },
    { text: "The rehabilitation architecture: relabel-then-rehabilitate; the family session converting blame to alliance; fixed routines, one-instruction grammar, graded sensory load, scheduled rest; graded return to work with written accommodations (half-days, written tasks, no multitasking, safety supervision); the employer letter; the clinical documented driving decision.", grade: "established", sources: ["S4", "S9"] },
    { text: "Post-traumatic epilepsy: risk raised with the highest-risk window in the first two years; episodic behaviours (staring, lip-smacking, nocturnal tongue-bite, lost minutes) investigated with EEG; management with neurology on the least cognitively sedating compatible agent.", grade: "established", sources: ["S6"] },
    { text: "The medico-legal discipline: MACT/ESIS documentation at defined intervals, factual and functional; the two failure modes guarded against: symptom inflation under litigation pressure and symptom dismissal ('compensation neurosis'); most post-TBI suffering is genuine even when money is at stake.", grade: "established", sources: ["S11"] },
    { text: "The Indian tier: two-wheeler riders dominating casualties with inconsistent helmet use; night-road injuries with delayed rescue; the absent post-acute neuro-rehabilitation tier in the public sector with the family-as-therapist programme as the delivery channel; the employer letter as a livelihood-saving clinical instrument; sertraline and valproate generics at ₹50–150/month (approx 2026).", grade: "supported", sources: ["S10", "S11"] },
  ],
};
