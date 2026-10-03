import type { PsychiatryCourse } from "./types";

/**
 * AMNESIC SYNDROMES — canonical Psychiatry course
 * (migration batch 7, Group A — neurocognitive disorders, part 2 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/amnesic-syndromes.md — untouched foundation),
 * re-researched against current guidance (the Kopelman reviews of
 * the Korsakoff syndrome and confabulation, the Thomson parenteral-
 * thiamine treatment literature, the Sechi-Serra non-alcoholic
 * Wernicke series, the Antinori HAND nosology for the modern
 * differential) with per-claim provenance.
 *
 * Drug routes: NONE — no drug restores the filed gap, and that
 * absence IS the teaching (trials of cholinesterase inhibitors,
 * SSRIs and others have been disappointing-to-modest). All
 * pharmacology named here (parenteral thiamine, magnesium) has no
 * KYP drug lesson and is recorded in contentGaps, never invented.
 */
export const amnesicSyndromesCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "amnesic-syndromes",
  title: "Amnesic Syndromes",
  shortName: "Korsakoff",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Amnesic Syndromes"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "31 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The punched-out hole in new memory, and the thiamine injection that largely prevents it",

  summary:
    "The amnesic syndrome punches a hole in new memory while attention, personality and old memories survive, and confabulation fills the gaps. The commonest cause is thiamine deficiency, and the sequence rule (thiamine before glucose) prevents it.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define the amnesic syndrome by its four features: new-memory failure; relative sparing of immediate memory, personality and old memories; confabulation; variable anosognosia.",
    "Draw the memory circuit (hippocampal formation → fornix → mammillary bodies → thalamus) and name which lesions hit it.",
    "Recite the Wernicke triad, the 'any one sign' treatment rule, and the sequence law: thiamine BEFORE glucose, with parenteral dosing.",
    "Explain confabulation and distinguish it from lying.",
    "Differentiate the amnesic syndrome from dementia, delirium and transient global amnesia.",
    "Manage established Korsakoff syndrome: environment, memory aids, family rules, safety, alcohol treatment.",
    "Address the Indian realities: malnourished drinking, hunger and hyperemesis as non-alcoholic routes, and the missed-injection audit point.",
  ],
  quickFacts: [
    { label: "The architecture", value: "Immediate intact, recent ruined, remote retained", detail: "Working memory, personality and old knowledge survive; new long-term learning is punched out: the three-phrase definition that separates it from delirium (immediate impaired) and late dementia (remote lost)" },
    { label: "The filing line", value: "Hippocampus → fornix → mammillary bodies → thalamus", detail: "The Papez-type circuit that carries new memories to storage; the commonest lesion set (mammillary bodies + medial thalamus) is the thiamine-famine's signature" },
    { label: "The emergency", value: "one sign is enough", detail: "Confusion OR eye-movement palsy OR ataxia in the malnourished/vomiting drinker = parenteral thiamine NOW: the full triad is the exception, not the rule" },
    { label: "The sequence law", value: "B1 before D5", detail: "Glucose metabolism consumes thiamine: the dextrose drip into an empty circuit burns it; thiamine before, during and after any glucose load, in casualty and maternity alike" },
    { label: "The confabulation", value: "The helpful inventor", detail: "Fluent, plausible, fictional filler without intent to deceive: honest retrieval of material never filed; vivid early, fading to 'I don't remember' over months" },
    { label: "The preserved gift", value: "Procedural learning survives", detail: "Habits, songs, routes and routines outlast facts: the care architecture's foundation: build life as habit, not instruction" },
    { label: "The prognosis", value: "A minority improve, most stabilise", detail: "Meaningful improvement in around a quarter to a fifth of classic series, over months, mostly in those treated early; complete recovery rare; supported life the realistic goal" },
    { label: "The Indian tier", value: "₹10–30 ampoules, forgotten sequence", detail: "Thiamine among the cheapest medicines in the hospital (approx 2026); the Korsakoff problem is never cost. It is the forgotten B1-before-D5 rule and the missing follow-up structure; the hyperemesis mother the classic missed case" },
  ],
  knowledgeGraph: [
    { label: "Alcohol-Related Dementia", type: "condition", href: "/psychiatry/alcohol-related-dementia/", note: "The companion course: the five-channel wider picture, the executive face, the abstinence architecture; this course owns the amnesic face's full account" },
    { label: "Vascular Dementia", type: "condition", href: "/psychiatry/vascular-dementia/", note: "The strategic thalamic infarct: the non-alcoholic door into the same filing circuit, sudden-onset" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The consciousness differential: immediate memory and attention impaired there, intact here, and the Wernicke emergency itself a delirium-mimic until the eyes are checked" },
    { label: "HIV-Associated Neurocognitive Disorder", type: "condition", href: "/psychiatry/hiv-neuropsychiatry/", note: "The modern differential's treatable member: the young subcortical-speed picture that earns the HIV test" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The dementia contrast: gradual, multi-domain, remote memory eventually lost, against the punched-out single-function hole" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The encoding-fails-from-effort mimic: new learning recovering with cueing and treatment, unlike the true hole" },
    { label: "Memory Rehabilitation", type: "condition", href: "/psychiatry/memory-rehabilitation/", note: "The prosthetic continuation: errorless learning, spaced retrieval, the household prosthetics that run the Korsakoff home" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The honest negative: the cholinesterase trials here disappointing-to-modest; no drug restores the filed gap" },
    { label: "Thalamus", type: "brain-region", href: "#brain", note: "The memory relay and the syndrome's seat: the strategic infarct's target and the thiamine-famine's" },
    { label: "Mammillary bodies", type: "brain-region", href: "#brain", note: "The filing corridor's best-known victim: atrophied on good MRI, the Korsakoff signature" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The recording room's doorway: the herpes and anoxia door into the same syndrome" },
    { label: "Fornix", type: "brain-region", href: "#brain", note: "The corridor's bridge: the surgical and tumour route's occasional casualty" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the amnesic syndrome. The filing room is intact; the porter is dead: new memory formation works like a library. The reading room (working memory) holds a book for seconds; a porter (the hippocampal-thalamic circuit) must carry it to the stacks (long-term storage). In the amnesic syndrome, the porter's corridor (the mammillary bodies and thalamus) is damaged. The book can be read, discussed, enjoyed... and never shelved. Tomorrow, the person denies ever seeing it, because in HIS library, he never did. The helpful inventor: asked what he did this morning, a brain with a memory hole does not tolerate silence. It offers material that feels like memory, a plausible mixture of old habits, fragments and guesses. That is confabulation: not lying (no intent to deceive) but honest retrieval of material that was never filed. It fades with time in most patients; vivid, rich confabulation is more prominent early. The ten-rupee clock: thiamine is the spark plug for brain glucose metabolism. The thalamus and mammillary bodies have high metabolic demands and thin reserves: when thiamine runs out, they fail within days. Give thiamine BEFORE the glucose load and they usually recover; give glucose first (glucose metabolism CONSUMES thiamine) and you push them over the edge. The lesion becomes permanent. The whole prevention message of this course is a sequence rule, not an expensive drug: B1 before D5.",
    steps: [
      "The filing line: hippocampus → fornix → mammillary bodies → thalamus; the circuit that carries new memories to the stacks; damage anywhere on it punches the hole.",
      "The porter's death: the reading room works (immediate memory intact), the stacks survive (old knowledge safe); only the transfer fails; tomorrow's person denies a visit that in HIS library never happened.",
      "The thiamine engine: the spark plug of brain glucose metabolism; the diencephalic hub's high demands and thin reserves failing within days of depletion.",
      "The sequence chemistry: glucose metabolism CONSUMES thiamine; the dextrose-first error pushing the starving circuit over the edge; B1 before D5 as the prevention's whole architecture.",
      "The helpful inventor: confabulation as the brain's intolerance of silence; plausible filler offered without intent to deceive; vivid early, fading over months.",
      "The preserved gift: procedural/implicit learning survives (habits, songs, routes) the care architecture's foundation (life built as habit, not instruction).",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "mammillary-bodies", name: "Mammillary bodies", role: "The filing corridor's best-known victim: the thiamine-famine's primary target; atrophied on good-quality MRI, the Korsakoff signature.", grade: "established" },
    { id: "thalamus", name: "Medial thalamus (the relay)", role: "The memory gate and the syndrome's other seat: the anterior/medial nuclei; also the strategic-infarct door's target (the sudden-onset non-alcoholic route).", grade: "established" },
    { id: "hippocampus", name: "Hippocampal formation (the recording doorway)", role: "The circuit's temporal end: the herpes encephalitis, anoxia and severe hypoglycaemia door into the same punched-out presentation.", grade: "established" },
    { id: "fornix", name: "Fornix (the bridge)", role: "The corridor's arch: the third-ventricle surgery and tumour route's occasional casualty, rare but anatomy-complete.", grade: "supported" },
    { id: "frontal-connections", name: "Fronto-thalamic connections", role: "The indifference and anosognosia's contributors: the flat comfort of the repeated morning; the confabulation's richness early in the course.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "The honest negative: cholinesterase-inhibitor trials in Korsakoff syndrome disappointing-to-modest; no drug restores the filed gap; the teaching contrast with Alzheimer's emptiness.", grade: "established", drugConnection: "The refusal documented: the donepezil tier is NOT this disease's answer. The absence is the pharmacology lesson." },
    { name: "Glutamate", symbol: "Glu", role: "The memory-filing machinery's transmitter through the hippocampal-diencephalic circuit, and the excitotoxic bystander when the metabolic collapse comes.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The mood-rider chemistry only: depression and insomnia treated symptomatically in the supportive tier; no restoration claims.", grade: "supported" },
    { name: "GABA", symbol: "GABA", role: "The withdrawal-storm context in the alcoholic route: the kindling that must be managed alongside (the Alcohol Use Disorders tier's ladder).", grade: "supported" },
  ],
  pathways: [
    {
      id: "filing-line-pathway",
      name: "The filing line (porter to stacks)",
      steps: [
        { label: "The reading room", detail: "Working memory holds the book for seconds: intact in the pure syndrome" },
        { label: "The porter collects", detail: "The hippocampal-fornical-mammillary-thalamic circuit carries the trace toward storage" },
        { label: "The corridor breaks", detail: "Mammillary bodies and medial thalamus damaged: the thiamine-famine's signature, or the strategic infarct's" },
        { label: "The stacks stay closed", detail: "Old knowledge safe, new learning lost: tomorrow's person denies the visit that in HIS library never happened" },
      ],
      clinicalManifestation: "The card-player who charms the examiner and denies ever meeting him: the tragedy legible in the preserved personality.",
      grade: "established",
    },
    {
      id: "ten-rupee-pathway",
      name: "The ten-rupee clock (thiamine to lesion)",
      steps: [
        { label: "The spark plug runs out", detail: "Thiamine, the cofactor of brain glucose metabolism: the diencephalic hub's high demands meeting thin reserves" },
        { label: "The days-scale failure", detail: "Confusion, eye-movement palsies, gait collapse: the Wernicke emergency; any ONE sign in the malnourished demanding treatment now" },
        { label: "The sequence decides", detail: "Thiamine BEFORE glucose: the circuit usually recovers; glucose first: the metabolism consumes the last thiamine and the lesion becomes permanent" },
        { label: "The prevention arithmetic", detail: "A 10-rupee injection in time versus the lifelong hole: the sequence rule as the whole programme" },
      ],
      clinicalManifestation: "The arrack labourer who got the dextrose drip overnight and never again laid down memories: the iatrogenic amplifier's classic face.",
      grade: "established",
    },
    {
      id: "procedural-pathway",
      name: "The preserved gift (procedural learning)",
      steps: [
        { label: "The facts fail", detail: "Episodic, declarative memory (the filing circuit's product) punched out" },
        { label: "The habits survive", detail: "Procedural, implicit learning (the basal ganglia and cerebellar systems' product) running on separate wiring" },
        { label: "The care architecture builds on it", detail: "Life as habit: the fixed routine, the same rooms, the songs, the routes; knowledge offloaded to the surviving system" },
        { label: "The family trained on it", detail: "The diary's pointing, the one-encounter honesty, the repeated sentence: the home system that substitutes for the corridor" },
      ],
      clinicalManifestation: "The patient who cannot name yesterday's visitor but finds the kitchen, the cards and the evening prayer without instruction: the surviving system carrying the day.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "depletion-stage", time: "Days to weeks", title: "The depletion and the emergency", description: "Thiamine stores emptying in the malnourished or vomiting patient; the Wernicke window (confusion, eye-movement palsies, gait collapse) treated or missed; each missed episode deepening the eventual hole.", phase: "onset" },
    { id: "transition-stage", time: "Weeks", title: "The settling into the gap", description: "The acute confusion clearing to reveal the residue: the punched-out new memory, the early vivid confabulation, the apathy; the Korsakoff picture declaring itself.", phase: "onset" },
    { id: "established-stage", time: "Months 1–12", title: "The recovery window", description: "The minority improving meaningfully (a quarter to a fifth in classic series, mostly the early-treated); confabulation fading to 'I don't remember'; the family system being built.", phase: "peak" },
    { id: "stable-stage", time: "Years", title: "The supported plateau", description: "Most patients stabilise and live years in supported settings: the routine-and-labels home, the family as hippocampus; procedural learning carrying the household's rhythm.", phase: "duration" },
    { id: "complication-stage", time: "The long term", title: "The riders audited", description: "The alcohol route's companions managed (liver, neuropathy, cerebellar); the non-alcoholic routes' causes followed; the caregiver's endurance the load-bearing wall throughout.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Wernicke-Korsakoff syndrome is overwhelmingly associated with alcohol misuse; estimates of Wernicke's frequency among people with severe alcohol problems run in the double figures at autopsy, far above bedside recognition: it is MISSED in most cases that have it. Non-alcoholic routes matter wherever malnutrition and vomiting exist: starvation, hunger strikes, anorexia, hyperemesis of pregnancy, bariatric surgery, prolonged vomiting, dialysis, cancer, AIDS. Survival with established Korsakoff is variable: many stabilise and live years in supported settings; a substantial minority (around a quarter to a fifth in classic series) improve meaningfully; complete recovery is rare.",
    indianPrevalence: "Indian reports come from two streams: alcohol-dependent patients with heavy AND malnourished drinking (arrack/country-liquor populations where the diet is nearly carbohydrate-only), and non-alcoholic thiamine crises in women with hyperemesis gravidarum, famine/starvation, tuberculosis and severe dietary restriction; the latter the classic Indian exam vignette and the clinical blind spot. The intervention gap is the story: the syndrome is preventable at the cost of a few ampoules, yet the injection is routinely forgotten at first glucose infusion; the audit point every training programme should drill.",
    lifetimeRisk: "In the malnourished-dependent population, double-figure autopsy rates against far-lower bedside recognition; among hyperemesis and starvation admissions, the unmeasured but recurring Indian stream.",
    genderRatio: "The alcoholic route historically male-dominant (mirroring dependence patterns); the hyperemesis route exclusively women of childbearing age: the Indian vignette's population.",
    ageOfOnset: "The alcoholic route: 40s–60s (the decades of accumulated drinking-plus-malnutrition); the hyperemesis route: young pregnant women; the starvation and TB routes: any age the deprivation runs.",
    indianNotes: "The missed-injection audit: 'no dextrose before thiamine in the malnourished' as a monthly house-rule in every emergency department and maternity ward; the quality-improvement answer that examiners reward and wards forget.",
  },
  etiology: [
    { category: "biological", factor: "The thiamine-deficiency route (commonest)", details: "Chronic heavy drinking with poor diet (absorption and storage both impaired by alcohol); the non-alcoholic members: hyperemesis of pregnancy, anorexia nervosa, starvation and hunger, bariatric surgery, prolonged vomiting, dialysis, severe infection, heart failure, AIDS, thyrotoxicosis, and refeeding after severe malnutrition (the carbohydrate load on empty stores, the refeeding-syndrome logic)." },
    { category: "biological", factor: "The direct-lesion route", details: "Thalamic stroke (anterior or medial, the arterial territory, sudden amnesia in a hypertensive patient); temporal/hippocampal damage: herpes simplex encephalitis, surgery, anoxia, carbon monoxide, severe hypoglycaemia, head trauma; third-ventricle and fornix-area tumours and surgery." },
    { category: "biological", factor: "The risk factors to act on", details: "Anything combining carbohydrate load with empty thiamine stores: the glucose drip in a starving or drinking patient, carb-heavy binges; repeated Wernicke episodes before the first treated one; prior alcohol-related seizures." },
    { category: "social", factor: "The Indian deprivation routes", details: "The famine and starvation populations; the tuberculosis wasting; the poverty-calorie arithmetic (liquor replacing food); the hyperemesis mother admitted for IV fluids without vitamins for days: the classic missed case wearing a maternity wristband." },
    { category: "psychological", factor: "The anosognosia layer", details: "Variable insight, some patients know and joke about the hole; many are indifferent (the frontal-thalamic contribution); the family, not the patient, must carry the awareness and the plan." },
  ],
  symptomClusters: [
    {
      category: "1. The pure syndrome (the architecture)",
      symptoms: ["Immediate memory intact: can repeat a phone number, hold a normal conversation, do mental arithmetic, play cards", "New memory fails within minutes: the morning's visit, the meal just eaten, the names introduced an hour ago; gone", "Remote memory relatively preserved: childhood, schooling, old songs; the events just before the illness with a border blur", "Personality and social skills preserved: warmth, manners, humour survive; what separates Korsakoff patients socially from dementia patients", "Confabulation: plausible invented answers, more vivid early, usually fading to 'I don't remember' over months", "Anosognosia variable: some know and joke; many indifferent: the comfortable repeated morning"],
    },
    {
      category: "2. The Wernicke emergency (the stage before)",
      symptoms: ["Confusion/apathy: the clouding that mimics delirium until the eyes are checked", "Eye-movement paralysis or double vision/nystagmus: the sign that names the emergency", "Ataxia (wide-based unsteady gait): the third classic member", "Fever, tachycardia and hypotension may accompany; the full triad is the EXCEPTION: any ONE sign in a malnourished drinker or vomiting patient demands parenteral thiamine now", "Untreated: progression to stupor, coma and death, or into the Korsakoff gap"],
    },
    {
      category: "3. The other-route variants",
      symptoms: ["Sudden-onset amnesia with other stroke signs: the thalamic strategic infarct in the hypertensive patient", "Fever-and-seizure onset: the herpes encephalitis door into the temporal hippocampus", "Post-anoxic amnesia after resuscitation; the post-hypoglycaemia hole", "Transient global amnesia: a middle-aged/elderly person with a pure hours-long memory gap, often after exertion or cold-water immersion, repeatedly asking the same questions, then COMPLETE recovery; frightening, benign, rarely recurring"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "WHO 1990 (ICD-10 research criteria, paraphrased)",
      code: "The Korsakoff syndrome definition",
      criteria: [
        "Memory impairment for recent events (a defect of registration of new material), at sufficient severity to interfere with daily living.",
        "A history of Wernicke encephalopathy (confusion, eye-movement palsies, ataxia) or, in the alcoholic/nutritional history, the presumption of it, but the syndrome is diagnosed on its architecture even when the acute stage was never observed.",
        "The demonstrable preservation of immediate memory (registration) and of remote memory relative to the recent: the dissociation that defines the syndrome.",
        "The absence of the clouded consciousness of delirium, and of the global multi-domain decline of a dementia.",
      ],
      duration: "The impairment persists beyond the acute confusional state: the established picture, not the emergency.",
      indianNote: "The bedside three minutes: name-and-address registration → immediate recall intact → 5-minute recall gone → remote memory intact → working conversation seamless; the architecture confirmed before any test is ordered.",
    },
    {
      system: "The work-up",
      code: "The cause hunt alongside the treatment",
      criteria: [
        "Bloods: thiamine where available (rarely needed practically, clinical suspicion treats), MAGNESIUM (deficiency perpetuates the picture and must be replaced), full counts, sugar, renal, liver, B12/folate, pregnancy test where relevant.",
        "MRI brain: mammillary-body and medial-thalamic signal change in Wernicke-Korsakoff; the thalamic infarct; the temporal herpes changes; the atrophy patterns of the mimics.",
        "Memory assessment where available: the dissociation between intact immediate and destroyed delayed recall is the formal fingerprint.",
        "EEG if seizures or encephalitis are in question; CSF when herpes is (temporal presentation, fever, confusion out of proportion).",
        "The differentials that change management TODAY: delirium (immediate memory and attention impaired, clouded, fluctuating), Alzheimer's (gradual, multi-domain, remote eventually lost), depression's poor memory (encoding fails from effort (new learning recovers with cueing and treatment), psychogenic/dissociative amnesia (patchy, identity- and trauma-period memory, inconsistent across examinations) the diagnosis of careful exclusion), TGA (hours, self-limited, complete return).",
      ],
      duration: "The workup runs ALONGSIDE treatment, never before it: suspected Wernicke gets parenteral thiamine first; the scan accompanies, not precedes.",
      indianNote: "The referral usually says 'dementia vs psychosis': the preserved personality and immediate memory with pure new-learning failure giving the diagnosis at the bedside in three minutes.",
    },
  ],
  severityScales: [
    {
      name: "The Wernicke gate",
      fullName: "The emergency staging (any one sign is enough)",
      measures: "How active the injury still is, and what the next hour's treatment must be.",
      ranges: [
        { min: 0, max: 0, severity: "Established Korsakoff (the quiet aftermath)", action: "The home system built (routine-and-labels, the family as hippocampus); thiamine continued for LIFE; the alcohol treatment run BY THE FAMILY (the patient cannot self-track); the three-monthly reviews" },
        { min: 1, max: 1, severity: "Partial/active Wernicke signs", action: "Parenteral thiamine generously NOW, continuing for several days per local protocol (oral absorption poor in these states); magnesium replaced alongside; the glucose sequence law enforced; the investigations running alongside, never before" },
        { min: 2, max: 2, severity: "Stupor or coma", action: "The medical emergency tier with the treating team: thiamine continued through it, the withdrawal and metabolic causes managed in parallel; the prognosis honest even at this stage" },
      ],
      indianNote: "The dose principle: early parenteral replacement is the evidence-based move; oral thiamine absorbs poorly in active Wernicke; the ampoules cost ₹10–30 (approx 2026) and the forgetting costs everything.",
    },
    {
      name: "The home-system ladder",
      fullName: "Supported-life staging for the established syndrome",
      measures: "How much architecture the household needs, and who carries it.",
      ranges: [
        { min: 0, max: 0, severity: "The stable household", action: "Fixed routines, same rooms, same faces; clocks, calendars, labels and photographs everywhere; the same sentences at the same times ('after lunch we sit on the veranda'): life as a predictable rail" },
        { min: 1, max: 1, severity: "The fraying household", action: "The safety tier audited (stove and money locks, the wandering plan, the ID card, bathing supervision, sequencing of steps frays); the one-written-instruction discipline; the caregiver's own endurance monitored" },
        { min: 2, max: 2, severity: "The overwhelmed household", action: "The respite architecture (rosters, day-care where it exists, planned admissions); the institutional options honestly explored (scarce in India, the family plus the review interval as the realistic tier); the dignity held" },
      ],
      indianNote: "Institutional options are scarce; the realistic home package is the routine-and-labels system taught in ONE family session: the cheapest, most transferable intervention in this whole disease.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Delirium", distinguishingFeatures: "Immediate memory and attention are IMPAIRED, consciousness clouded, the picture fluctuating: versus the preserved immediate memory and stable awake background of the pure amnesia.", keyDifferentiator: "The registration test: the delirious patient cannot hold the sentence; the amnesic patient holds it and loses the tomorrow." },
    { condition: "Alzheimer's dementia", distinguishingFeatures: "Gradual, multi-domain, remote memory eventually lost with the other cognitive functions falling too: versus the punched-out single function with personality and old knowledge intact.", keyDifferentiator: "The architecture and the course: one function lost suddenly-ish versus everything declining gradually; the dementia does not stay boxed." },
    { condition: "Depression-related 'poor memory'", distinguishingFeatures: "Encoding fails from effort: the complaint loud, the performance variable, new learning recovering with cueing and treatment.", keyDifferentiator: "The cueing response and the mood picture; the depression's memory lifts when the mood does." },
    { condition: "Psychogenic/dissociative amnesia", distinguishingFeatures: "Patchy, memory for identity and trauma periods, inconsistent across examinations: the diagnosis of careful exclusion after the structural circuit is cleared.", keyDifferentiator: "The inconsistency pattern against the organic constancy; the structural workup clean; the trauma history taken with skill." },
    { condition: "Transient global amnesia", distinguishingFeatures: "A self-limited hours-long pure memory gap, typically 50–70, often after exertion or cold-water immersion, with repetitive questioning and COMPLETE recovery.", keyDifferentiator: "The time course and the return; the benign prognosis; the rare recurrence." },
    { condition: "Alcohol intoxication or withdrawal", distinguishingFeatures: "Clears with detoxification; the eye-movement and gait signs of Wernicke distinguish the emergency riding underneath.", keyDifferentiator: "The timeline against the last drink; the eyes checked in every 'confused drinker' regardless." },
  ],
  management: [
    { category: "pharmacotherapy", name: "The emergency rule: before anything else", description: "Parenteral thiamine, generously (high-dose intravenous, continuing for several days in suspected Wernicke per local protocol, the principle: oral thiamine absorbs poorly in these states, so early parenteral replacement is the evidence-based move), ALWAYS BEFORE any glucose-containing fluid; magnesium replacement alongside; then nutritional rehabilitation. Every malnourished, alcohol-dependent or vomiting patient presenting to casualty or clinic gets this BY DEFAULT, making the injection automatic is the syndrome's real prevention programme.", whenToUse: "The moment of suspicion: any one Wernicke sign in the malnourished; the treatment precedes the investigations.", indianContext: "Thiamine ampoules among the cheapest medicines in the hospital (₹10–30, approx 2026); the teaching-level fix: 'no dextrose before thiamine in the malnourished' as a house-rule audited monthly in every emergency department and maternity ward." },
    { category: "lifestyle", name: "Established Korsakoff: building a life around the porter", description: "Stability and labelling: fixed routines, same rooms, same faces; clocks, calendars, labels and photographs everywhere; the family using the same sentences so life becomes a predictable rail. Memory aids to BODY memory: procedures survive when facts don't; habits, songs, routes; teach the family to build life as habit rather than as instruction. One-encounter honesty: visitors introduce themselves each time; the family stops correcting ('you DO remember him!'): correction exhausts both; gentle orientation replaces it. Safety: stove and money locks, wandering plan, ID card, bathing supervision (sequencing of steps often frays).", whenToUse: "From the established diagnosis: the home system is the treatment's second half.", indianContext: "The realistic home package taught in ONE family session: the routine-and-labels system, the one-written-instruction rule, the ID card; the cheapest, most transferable intervention this disease owns." },
    { category: "lifestyle", name: "The alcohol treatment where relevant — run BY the family", description: "Motivational conversation, detoxification if withdrawal risk, the family contract, relapse-care planning, with the specific Korsakoff modification: the memory handicap demands FAMILY-LED adherence designs, since the patient cannot self-track appointments or doses; a medicine box with alarms belongs to the family's phone, not his. The full abstinence architecture lives in the Alcohol-Related Dementia and Alcohol Use Disorders courses.", whenToUse: "From the established picture, with the family contracted explicitly as the tracking system.", indianContext: "The spouse manages money, medicines and appointments; the patient attends happily and forgets the visit; the family must leave each consultation with ONE written instruction, not five spoken ones." },
    { category: "pharmacotherapy", name: "What to treat and what not to promise", description: "No drug restores the filed gap: trials of cholinesterase inhibitors, SSRIs and others have been disappointing-to-modest. What IS treated: depression, insomnia, agitation; the usual careful, low-dose way; any remaining Wernicke activity (thiamine continued through the months of recovery); the magnesium deficiency until replete.", whenToUse: "Symptom-targeted only, with the honest no-restoration framing protecting the family from the tonic-and-app economy.", indianContext: "The honest script: 'the injection protects what remains and the routine carries what returns; the tablet that refills the past does not exist': the sentence that saves the family's money and the clinic's credibility." },
    { category: "lifestyle", name: "The non-alcoholic routes: the same rules in different wards", description: "Hyperemesis of pregnancy: treat the vomiting, replace thiamine and magnesium, feed back slowly; obstetric teams carrying the same sequence rule. Refeeding after starvation: calories low, thiamine and electrolytes first (the refeeding-syndrome discipline). Stroke and post-anoxic cases: memory rehabilitation as in the TBI course; the same 'treat the load, then see the floor' logic.", whenToUse: "Route-specific, from the hour the cause is recognised.", indianContext: "The hyperemesis vignette as the Indian exam classic AND the maternity-ward blind spot: the mother admitted for IV fluids without vitamins for days; the audit point that makes 'no dextrose before thiamine' a ward rule, not a textbook line." },
  ],
  safety: {
    redFlags: [
      "Any one Wernicke sign (confusion OR eye-movement palsy OR ataxia) in a malnourished, vomiting or drinking patient: parenteral thiamine NOW, before the glucose and before the scan",
      "The glucose drip running or planned without thiamine alongside: the sequence violation to intercept in casualty AND maternity",
      "Fever with temporal signs, seizures or confusion out of proportion: the herpes encephalitis window: CSF and the antiviral conversation with the treating team",
      "Sudden-onset amnesia with focal signs: the thalamic infarct: image and the stroke pathway, not the 'dementia' label",
      "The wandering, the stove, the unsupervised bath: the safety tier of the established home fraying",
      "The caregiver's collapse: the spouse carrying the memory, the medicines and the money is the system's load-bearing wall",
    ],
    urgentGuidance:
      "The order of operations: (1) thiamine before glucose; the sequence law that holds from casualty to maternity; (2) parenteral, generous, continuing for days in suspected Wernicke (oral absorbs poorly in the acute state), with magnesium replaced alongside; (3) the investigations running alongside, never before: the scan accompanies the treatment; (4) the established-syndrome tier: the home system taught in one family session, the safety locks, the ID card, the one-written-instruction rule; (5) the alcohol treatment run BY the family with the medicine-box alarms on their phone, not his; (6) the prognosis honesty (a minority improve over months, most stabilise, supported life is the goal) the expectation that protects the household's endurance.",
  },
  drugLinks: [],
  contentGaps: [
    "Parenteral thiamine (the emergency and maintenance pharmacology itself) has no KYP drug lesson; the sequence rule (B1 before D5), the parenteral-first principle and the magnesium co-replacement are taught in this course.",
    "The honest refusal (no drug restores the filed gap: the cholinesterase-inhibitor and SSRI trial record in Korsakoff syndrome is disappointing-to-modest) documented so no KYP route implies a restoring tablet exists.",
    "The benzodiazepine withdrawal ladder (where the alcoholic route demands it) has no KYP lessons: the discipline belongs to the Alcohol Use Disorders tier and is referenced, not duplicated.",
    "The antiviral and stroke pharmacologies of the other routes (herpes encephalitis, thalamic infarction) have no KYP lessons. The recognition-and-routing discipline is this course's contribution.",
  ],
  patientGuide: {
    whatIsIt:
      "This is a specific hole in new memory: the person can talk, reason, recognise everyone and remember the distant past, but cannot lay down new memories for more than a few minutes. It is not madness and not full dementia, one function is punched out while the rest of the person survives. The commonest cause is vitamin B1 (thiamine) deficiency from years of heavy drinking with poor food; other causes include severe vomiting in pregnancy, starvation, and rare strokes or infections hitting the same memory circuit. The tragedy has a hopeful edge: the hole is largely PREVENTABLE with a cheap injection given in time, and even after it forms, part of the surrounding fog can lift with months of treatment.",
    whatCausesIt:
      "New memories travel a circuit, from the brain's recording room, along a bridge, to a relay station (the thalamus) and two small structures (the mammillary bodies) that file them for the long term. Thiamine is the vitamin that circuit runs on; when it runs out (from liquor replacing meals, or from prolonged vomiting, or starvation), the filing stations fail within days. Sugar given without the vitamin can push them over the edge, which is why the injection comes first in anyone starved, vomiting or drinking heavily.",
    symptoms:
      "The same question every few minutes; the morning's meal and visitors unremembered by afternoon; old stories and skills intact. Made-up answers that sound fluent and confident (confabulation): offered without any intention to deceive, more vivid early and fading over months. A calm, comfortable acceptance of the repeated morning in many. The emergency that precedes it: sudden confusion with double vision or unsteady walking in a malnourished or vomiting person; that is the hospital-TODAY sign.",
    treatment:
      "The treatment's order is strict. Emergency: the vitamin by injection, generously, BEFORE any sugar drip, and continued for days; the magnesium replaced alongside. Then: the vitamin by mouth for months, and for life where the memory hole is established. Then: the home system; fixed routines, clocks, calendars, labels and photographs; the same sentences at the same times; visitors introducing themselves each time; the stove and money under lock; an ID card; the family carrying the medicines and appointments on their own phone alarms. Where alcohol is the cause: the stopping treatment planned and run BY the family, because the patient cannot track it himself. No tablet restores the filed gap: the honest promise is protection of what remains, the lifting of the surrounding fog, and the safe, dignified life the routine builds.",
    selfHelp: [
      "The routine rail: same times, same rooms, same sequence; the day as a predictable track the body can learn even when the memory cannot.",
      "The labels everywhere: clocks, calendars, photographs with names, the today-page; the house remembering FOR him.",
      "The one-encounter rule: introduce yourself every time; do not say 'you DO remember me': correction exhausts both of you; gentle orientation instead.",
      "The habit-building: songs, routes, card games, the evening prayer; the procedures that survive, taught as the day's structure.",
      "The safety locks: stove off and out of reach, money with one named family member, the bath supervised, the ID card in the pocket always.",
      "The one-written-instruction rule for every clinic visit: one instruction on paper, not five spoken ones.",
      "The family's own endurance: the spouse who carries the memory, the medicines and the money needs her own monitoring. Ask for it at every review.",
    ],
    whenToSeekHelp: [
      "Sudden confusion with double vision, vomiting or unsteady walking in a malnourished or vomiting person: hospital TODAY (the injection window)",
      "Any planned glucose drip in someone starved, vomiting or drinking heavily: ask the doctor directly: 'has the vitamin been given?'",
      "The memory hole widening rather than holding: the review that week, the thiamine checked",
      "The wandering, the stove incident, the bath scare: the home-safety tier re-audited",
      "The caregiver's own breakdown: the spouse's treatment is part of the patient's treatment",
      "In pregnancy with unrelenting vomiting: the vitamins asked about BY NAME; 'am I getting thiamine?' is the question that protects the memory",
    ],
    indianResources: [
      "The district hospital casualty and the maternity ward, where the sequence rule lives or dies; ask the question directly",
      "Thiamine through every government channel (₹10–30, approx 2026): the cheapest protection in the house",
      "Tele-MANAS 14416 (24×7, free): the caregiver's own support line and the family's routing questions",
      "The Memory Rehabilitation course's household-prosthetic package: the systems the Indian household already runs, formalised",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific Korsakoff pathway exists; practice follows the WHO/ICD logic and the parenteral-thiamine treatment literature with the refeeding-syndrome disciplines: the Indian craft being the ward-rule audit ('no dextrose before thiamine in the malnourished') and the one-family-session home system.",
    systemContext: "Where it is missed: the malnourished drinker in casualty receiving a dextrose drip for 'weakness'; the hyperemesis mother admitted for IV fluids without vitamins for days; the starved elderly in famine or post-institutional neglect: every one a prevention opportunity costing less than the IV set. The confabulating alcoholic in psychiatry OPD arrives with a referral that says 'dementia vs psychosis'; the preserved personality and immediate memory with pure new-learning failure give the direction at the bedside in three minutes.",
    programmeContext: "The DMHP psychiatric tier and the ART-equivalent nutrition channels; institutional options scarce: the family plus the review interval as the realistic tier; the three-monthly reviews (memory status, alcohol plan, nutrition, magnesium) and the annual companion checks (liver, neuropathy, cerebellar) as the follow-up architecture.",
    costConsiderations: "Thiamine among the cheapest medicines in the hospital (₹10–30 per ampoule, approx 2026): the Korsakoff problem in India is therefore NEVER cost; it is the forgotten sequence rule and the missing follow-up structure. The home package (clocks, calendars, labels, locks) costs almost nothing; the one family session is the delivery channel.",
    culturalConsiderations: "The malnourished country-liquor populations (the nearly carbohydrate-only diet) and the hyperemesis pregnancies as the two Indian streams: the latter the classic exam vignette AND the maternity blind spot. The family realities: the spouse manages money, medicines and appointments; the patient attends happily and forgets the visit; each consultation must end with ONE written instruction. The faith-frame confabulation (the stories accepted as truth by the household) handled as the illness speaking, not deception: the family's distress reduced by the mechanism explained once, gently.",
    patientCounselling: [
      "The one-line philosophy: 'In the confused malnourished patient, the diagnosis is made in the IV room: thiamine before glucose, every time.'",
      "The mechanism script: 'The recording room works, the old shelves are safe; only the corridor to the new shelves is broken; the person you love is still in there, and the routine is how you reach him.'",
      "The confabulation script: 'He is not lying. The gaps fill themselves with material that feels like memory; arguing with it teaches the family nothing but distress.'",
      "The family-hippocampus script: 'Your phone's alarms, the weekly-filled box, the one written instruction; the memory moves into the household, and that is the treatment working as designed.'",
      "The prognosis script: 'Some capacity returns in the early-treated months; the disability itself usually persists; a safe, structured, dignified life is the goal, and it is achievable.'",
      "The maternity script (to every hyperemesis family): 'The drip must come with the vitamin. Ask for it by name; it costs less than the set it runs through.'",
    ],
  },
  decisionPath: {
    title: "The patient who cannot make new memories",
    nodes: [
      {
        id: "start",
        question: "A patient cannot retain new information. First: the tempo and the consciousness.",
        branches: [
          { label: "Hours-long gap, then full recovery", next: "tga-path" },
          { label: "Acute confusion with eye or gait signs", next: "wernicke-path" },
          { label: "Sudden-onset amnesia with focal signs", next: "thalamic-path" },
          { label: "Stable weeks-months loop-questioning picture", next: "korsakoff-gate" },
        ],
      },
      {
        id: "wernicke-path",
        question: "The emergency: one sign is enough.",
        recommendation: "Parenteral thiamine NOW, before the glucose, before the scan; continuing for several days per protocol; magnesium alongside; the investigations running in parallel; the untreated trajectory (stupor, coma, the permanent hole) prevented by the hour's decision.",
      },
      {
        id: "tga-path",
        question: "The benign impostor: transient global amnesia.",
        recommendation: "The hours-long pure gap with repetitive questioning and complete recovery, typically 50–70, after exertion or cold immersion: reassurance, the rare-recurrence honesty, and the structural workup once to close the question; not the start of the disease.",
      },
      {
        id: "thalamic-path",
        question: "The sudden non-alcoholic door: strategic infarct.",
        recommendation: "Image and the stroke pathway (the Vascular Dementia course's territory): the anterior/medial thalamic territory, the hypertensive patient, the same punched-out architecture arriving overnight; the memory rehabilitation tier following the medical management.",
      },
      {
        id: "korsakoff-gate",
        question: "The established architecture: immediate intact, recent ruined, remote retained.",
        branches: [
          { label: "Drinking/malnutrition history present", next: "alcoholic-route-path" },
          { label: "Vomiting, starvation, dialysis, bariatric history", next: "nonalcoholic-route-path" },
          { label: "Fever, seizures, temporal signs in the story", next: "herpes-path" },
          { label: "Patchy, inconsistent, identity-focused gaps", next: "psychogenic-path" },
        ],
      },
      {
        id: "alcoholic-route-path",
        question: "The commonest door: the malnourished drinker.",
        recommendation: "Thiamine continued for months (for life in the established states); the Alcohol-Related Dementia course's abstinence architecture run BY THE FAMILY; the withdrawal safety assessed (the inpatient ladder where complicated); the workup's mimic tier (subdural, hepatic) cleared alongside.",
      },
      {
        id: "nonalcoholic-route-path",
        question: "The Indian vignette routes: hyperemesis, starvation, TB, refeeding.",
        recommendation: "The same sequence discipline in the ward it presents to: treat the vomiting, replace thiamine and magnesium, feed back slowly (the refeeding-syndrome tier: calories low, vitamins and electrolytes first); the obstetric and medical teams carrying the rule; partial recovery the good outcome of early treatment.",
      },
      {
        id: "herpes-path",
        question: "The febrile door: temporal involvement.",
        recommendation: "The urgent tier with the treating team. CSF virology, the antiviral conversation, the temporal-signal imaging; the memory residue after treatment followed by the rehabilitation tier.",
      },
      {
        id: "psychogenic-path",
        question: "The diagnosis of careful exclusion: dissociative amnesia.",
        recommendation: "The structural circuit cleared FIRST (imaging, the toxic-metabolic screen); then the patchy, identity- and trauma-period pattern, the inconsistency across examinations: the trauma-skilled assessment that follows the exclusion, never precedes it.",
      },
      {
        id: "management-gate",
        question: "The established syndrome. The programme:",
        branches: [
          { label: "The vitamin and magnesium maintenance", next: "vitamin-path" },
          { label: "The home system (always)", next: "home-path" },
          { label: "The family-led alcohol treatment", next: "alcohol-path" },
          { label: "The caregiver's endurance", next: "caregiver-path" },
        ],
      },
      {
        id: "vitamin-path",
        question: "The maintenance tier.",
        recommendation: "High-dose oral thiamine for months after every episode, for LIFE in the established states; magnesium until replete; the nutrition rebuilt; the honest framing that no tablet restores the filed gap: the protection of what remains and the lifting of the fog being the pharmacology's whole honest scope.",
      },
      {
        id: "home-path",
        question: "The routine-and-labels architecture.",
        recommendation: "The fixed rail (times, rooms, faces, sentences); the labels and photographs; the one-encounter honesty; the safety locks (stove, money, bath, wandering plan, ID card); the procedural-learning exploitation (habits, songs, routes as the surviving memory); the one-written-instruction clinic rule.",
      },
      {
        id: "alcohol-path",
        question: "The abstinence treatment the family runs.",
        recommendation: "The motivational conversation, the family contract, the relapse-care plan, with the medicine-box alarms on the FAMILY's phone (the patient cannot self-track); the de-addiction tier linked; the Alcohol Use Disorders course's full ladder referenced, not duplicated.",
      },
      {
        id: "caregiver-path",
        question: "The load-bearing wall monitored.",
        recommendation: "The spouse's sleep, health and morale asked at EVERY review; the respite tier built early (rosters, day-care where it exists); her treatment as a patient when needed: the household's endurance being the prognosis's other half.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Labelling a Korsakoff patient as 'dementia' on memory-weighted screens",
      why: "The screens measure storage and retrieval, not the architecture: the preserved immediate registration and remote memory get lost in a total score that 'confirms' the wrong category and forecloses the correct workup.",
      correction: "The three-minute bedside architecture: registration → immediate recall → 5-minute recall → remote memory → the working conversation; the dissociation IS the diagnosis.",
    },
    {
      mistake: "Giving oral thiamine alone in active Wernicke",
      why: "Oral absorption is poor in the acute state: the under-dosed route converts the treatable emergency into the permanent hole while appearing to 'treat' it.",
      correction: "The parenteral-first principle: high-dose intravenous thiamine for several days in suspected Wernicke (per local protocol), stepping to sustained high-dose oral only after the acute state clears.",
    },
    {
      mistake: "Treating the confabulation as malingering",
      why: "The fluent fictional filler offered without intent gets read as manipulation. The confrontation that follows destroys trust and teaches nothing.",
      correction: "The mechanism taught once: honest retrieval of material never filed; the response is gentle orientation, one-encounter honesty, and the family's distress reduced by the explanation rather than the argument.",
    },
    {
      mistake: "Forgetting the magnesium",
      why: "The deficiency perpetuates the picture and blocks the thiamine response. The replaced vitamin cannot do its work in the empty electrolyte bath.",
      correction: "The co-replacement rule: magnesium measured and replaced alongside every treatment course, until replete, in the emergency and the maintenance tier alike.",
    },
    {
      mistake: "Diagnosing psychogenic amnesia without excluding the structural circuit",
      why: "The patchy inconsistent picture tempts the functional label early, and the thalamic infarct, the early herpes, the metabolic hole all present 'inconsistently' to the hurried examiner.",
      correction: "The exclusion-first discipline: imaging and the toxic-metabolic screen before the functional diagnosis is even considered; the trauma-skilled assessment FOLLOWS the clean workup.",
    },
    {
      mistake: "Leaving the medicine-keeping to the patient",
      why: "The illness damages the very system the treatment needs: the self-tracked dosing fails silently, the abstinence architecture collapses, the follow-up vanishes.",
      correction: "The family-led design: the weekly-filled box, the alarms on the FAMILY's phone, the named monitor; the memory moved out of the patient into the household's architecture.",
    },
    {
      mistake: "The glucose drip ordered before the vitamin in the malnourished",
      why: "The casualty reflex: the hypoglycaemic numbers demanding sugar now; the energy flood burning the thiamine-empty circuit in the hours it takes to 'get around to' the vitamin.",
      correction: "The sequence law audited as a ward rule: B1 before D5, in every emergency department and every maternity ward; the monthly audit question that makes the injection automatic.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The four architecture points: new-memory failure with relative sparing of immediate memory, personality and old memories; confabulation; variable anosognosia.",
        "The filing line drawn: hippocampus → fornix → mammillary bodies → thalamus, with the two commonest lesions named (mammillary body + medial thalamic).",
        "The Wernicke triad and the 'any one sign' rule, and why the full triad is the exception.",
        "The sequence rule with the chemistry: glucose metabolism consumes thiamine; B1 before D5.",
        "Confabulation against lying and against delirium: the three-way distinction in three sentences.",
      ],
      practical: [
        "Demonstrate the three-minute bedside architecture examination (registration, immediate, delayed, remote, the working conversation) on any case of suspected amnesia.",
        "Take the thiamine-route history: the drinking-with-meals question, the vomiting weeks, the starvation, the dialysis, the bariatric surgery; the five doors asked by name.",
      ],
      longAnswer: [
        "A 46-year-old malnourished labourer with a three-month history of repetitive questioning and confabulation: diagnosis and management (the evergreen Korsakoff essay, the architecture, the route, the emergency rule, the home system).",
        "Wernicke-Korsakoff syndrome: prevention, recognition, and the sequence discipline; the iatrogenic amplifier as the discussion.",
      ],
    },
    neetPg: {
      highYield: [
        "THE ARCHITECTURE: immediate intact, recent ruined, remote retained, with personality and social skills preserved (the socially-intact contrast with dementia patients).",
        "THE ANATOMY: mammillary bodies + medial thalamus the commonest lesion set (thiamine route); the hippocampal-fornical route for herpes/anoxia; the thalamic strategic infarct for the sudden non-alcoholic door.",
        "THE EMERGENCY RULE: any ONE of confusion / eye-movement palsy / ataxia in the malnourished = parenteral thiamine NOW; the full triad is the exception.",
        "THE SEQUENCE LAW: B1 before D5; glucose metabolism consumes thiamine; the dextrose-first drip the classic iatrogenic amplifier.",
        "THE ROUTE: oral thiamine absorbs poorly in active Wernicke; parenteral first, days-long, generous; magnesium replaced alongside.",
        "CONFABULATION: fluent gap-filling without intent to deceive; fades over months; the contrast with malingering (motive-plus-gain).",
        "THE PROGNOSIS: a quarter to a fifth improve meaningfully (mostly the early-treated), over months; complete recovery rare; most stabilise in supported settings.",
        "TRANSIENT GLOBAL AMNESIA: hours-long, self-limited, repetitive questioning, 50–70 age band, complete recovery, rarely recurs; the benign impostor.",
        "THE NON-ALCOHOLIC ROUTES: hyperemesis of pregnancy (the Indian vignette), anorexia, starvation, bariatric surgery, prolonged vomiting, dialysis, refeeding syndrome.",
        "THE DIFFERENTIAL ANCHORS: delirium (immediate impaired, clouded), Alzheimer's (gradual, multi-domain, remote eventually lost), depression (effort-failure, cue-responsive), dissociative (patchy, identity-focused, inconsistent, exclusion of structure first).",
        "THE PROSEDURAL GIFT: implicit learning survives; the basis of the routine-and-labels care architecture.",
        "THE PHARMACOLOGY HONESTY: no drug restores the filed gap; cholinesterase and SSRI trials disappointing-to-modest; thiamine and magnesium the only evidence-backed pharmacology.",
      ],
      pyqConcepts: [
        "B1 before D5: the one-line casualty rule every exam tier rewards.",
        "The hyperemesis vignette: the Indian exam classic (the mother, the drip, the missing vitamin).",
        "The glucose-drip catastrophe as the preventable-iatrogenesis short note.",
        "'Immediate intact, recent ruined, remote retained': the three-phrase definition that anchors every viva answer.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 46-year-old arrack-dependent labourer eating one meal a day, brought 'weak and confused' to a rural hospital and treated with an IV glucose drip overnight; the next morning double vision and a wide-based gait attributed to 'drink'; thiamine starting only on day three: the eye movements recovering, the gait improving, the memory never again laying down; three months later the pleasant card-player who denies meeting the examiner and describes a village trip that never happened: the iatrogenic amplifier in full, the full-triad exception demonstrated, and the family-as-memory-system built in its aftermath.",
        "A 26-year-old in her 12th week of a second pregnancy, vomiting for weeks, keeping down only glucose water; confused, then apathetic and drowsy; the admission drip, then (on review) intravenous thiamine with magnesium and slow refeeding: the improvement over days, the six-week memory patchy but the children's names, the work life and the personality returned, only the illness-weeks dark: the non-alcoholic route treated early, the partial recovery that IS the good outcome.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "In the pure amnesic syndrome, IMMEDIATE (working) memory is characteristically intact.",
        "One Wernicke sign in the malnourished = parenteral thiamine before glucose.",
        "Confabulation: no intent to deceive; the contrast with lying.",
        "Mammillary bodies + medial thalamus: the classic lesion set.",
        "Procedural (habit) learning survives: exploit it in care.",
        "TGA: hours-long, benign, self-limited, 50–70 age band.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The ward-rule audit is the residency's deliverable: 'no dextrose before thiamine in the malnourished' made a house-rule and audited monthly in casualty AND maternity. The quality-improvement project that prevents more Korsakoff than any clinic will ever treat.",
        "The family session is the treatment's second half: the routine-and-labels system, the one-encounter honesty, the safety locks, one session, teachable by any doctor or counsellor, transforming the household from a correction-machine into a memory-system.",
        "The confabulation explanation delivered once, gently, spares the family years of arguments: 'the gaps fill themselves; he is not lying; the story is as real to him as your morning is to you'.",
        "The one-written-instruction rule for every consultation: the family that leaves with one instruction implements it; the family that leaves with five implements none.",
        "The caregiver's endurance is the prognosis's other half: the spouse carrying the memory, the medicines, the money and the monitoring needs her own review slot in every follow-up, and the respite prescribed in words with dates.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The dextrose drip that cost a library",
      presentation: "The overnight drip for 'weakness' that traded the filing circuit for a normal morning sugar: the iatrogenic amplifier's classic face.",
      initialPresentation: "A 46-year-old arrack-dependent labourer, eating one meal a day, was brought 'weak and confused' to a rural hospital and treated with an intravenous glucose drip overnight. The next morning he had double vision and a wide-based gait (attributed to 'drink') and thiamine was started only on day three. Three months later he was pleasant and talkative, played cards, denied ever meeting the examiner, and described at length a trip to his village that morning (he had not left the ward).",
      history: "Arrack dependence for twelve years with the one-meal-a-day pattern (the malnutrition partnership); no prior cognitive assessment; the confusion onset abrupt over a day; the eye signs and gait change arriving in the drip's aftermath; no fever, no focal neurology, no head injury.",
      examination: "At three months: immediate registration intact (phone number forward and the sentence held); five-minute recall absent across three trials; remote memory intact (schooling, marriage, old songs fluent); the working conversation seamless; apathy with comfortable anosognosia; the confabulation fluent and untroubled when probed.",
      diagnosis: "Korsakoff syndrome: the permanent residue of the thiamine-famine, deepened by the glucose-first sequence error.",
      management: "Thiamine continued at high oral dose for life; magnesium replaced and repleted; the routine-and-labels home system taught to the wife in one session (fixed rooms, the same sentences, the today-page, the safety locks); the wife taking over money and medicines with the box-alarms on her phone; the de-addiction linkage held by the family.",
      outcome: "He remained at home for years: the card games and the songs carrying the days, the household's rail holding the safety, the wife's monitoring surviving one monsoon crisis and one wedding season; the partial-stability that the system builds.",
      teachingPoints: [
        "Glucose-before-thiamine is the classic iatrogenic amplifier: the sequence, not the disease, decided this library's fate.",
        "The full triad rarely presents: the eye signs attributed to 'drink' until the third day, one sign is enough, in the malnourished, ALWAYS.",
        "The card-playing, confabulating, preserved-personality picture is the Korsakoff fingerprint: the bedside three minutes that no screen replaces.",
        "The family becomes the memory system: the box-alarms, the today-page, the one written instruction: the treatment's second half, taught once.",
      ],
    },
    {
      title: "The mother who kept vomiting",
      presentation: "Weeks of pregnancy vomiting on glucose water alone: the non-alcoholic route arriving at the maternity ward's door.",
      initialPresentation: "A 26-year-old in the 12th week of her second pregnancy had vomited for weeks and could keep down only glucose water; she became confused, then apathetic and drowsy. She was admitted and placed on a glucose drip; on review the following day the ophthalmology note recorded bilateral lateral-rectus weakness, and the sequence was corrected: intravenous thiamine with magnesium and slow refeeding.",
      history: "Hyperemesis gravidarum from week 6 of an otherwise wanted second pregnancy; no alcohol; no prior psychiatric history; the household's first pregnancy uncomplicated; the glucose-water-only intake for the preceding ten days; the confusion developing over two days before admission.",
      examination: "Drowsy but arousable; bilateral abductor weakness on lateral gaze with horizontal nystagmus; the gait wide-based and unsafe; the registration intact with delayed responses; no focal limb signs; the pregnancy viable on the obstetric review.",
      diagnosis: "Wernicke encephalopathy on hyperemesis gravidarum: the non-alcoholic thiamine route, caught at the two-day mark.",
      management: "Parenteral thiamine for five days, then high-dose oral; magnesium replaced; the refeeding discipline (calories low, electrolytes first); the obstetric team's antiemetic tier for the vomiting; the family counselled on the sequence rule for any future drip.",
      outcome: "She improved over days: the eye movements recovering first, the gait steadying; at six weeks her memory remained patchy but her children's names, her work life and her personality returned; only the weeks around the illness stayed dark.",
      teachingPoints: [
        "Hyperemesis is the classic non-alcoholic Indian route: the same sequence rule applies in maternity as in casualty.",
        "Partial recovery is the good outcome of early treatment: the weeks around the illness dark, the life before and after intact.",
        "The drip question belongs to the family too: 'has the vitamin been given?': the question that protects the memory.",
        "The obstetric team carrying the rule: the vitamin ordered WITH the first fluid order, not after the review that catches the eyes.",
      ],
    },
  ],
  clinicalPearls: [
    "Immediate intact, recent ruined, remote retained: the three-phrase architecture that anchors every answer.",
    "One Wernicke sign in the malnourished is enough: confusion OR eye-movement palsy OR ataxia. The full triad is the exception.",
    "B1 before D5: the sequence law; glucose metabolism consumes thiamine, and the dextrose-first drip burns the empty circuit.",
    "Mammillary bodies + medial thalamus: the lesion set the thiamine famine writes; the strategic infarct's thalamus the sudden door.",
    "Confabulation: honest retrieval of material never filed; no intent, no gain, fading over months; confrontation teaches nothing but distress.",
    "Procedural learning survives when facts fail: build life as habit, not instruction: the care architecture's foundation.",
    "No drug restores the filed gap: the cholinesterase and SSRI record is disappointing-to-modest; thiamine and magnesium the only honest pharmacology.",
    "A quarter to a fifth improve meaningfully (the early-treated); complete recovery rare; supported, dignified life the realistic goal.",
    "The hyperemesis mother, the starvation case, the dialysis patient and the bariatric aftermath share the sequence rule: the non-alcoholic routes.",
    "Transient global amnesia: hours-long, self-limited, complete recovery, rarely recurs; the benign impostor, 50–70.",
    "The majority of Wernicke cases are missed during life: the autopsy series' standing reproach; one sign, one injection, one audit.",
    "The family becomes the hippocampus: the box-alarms on their phone, the today-page, the one written instruction per visit.",
    "In India the problem is never cost (₹10–30 ampoules). It is the forgotten sequence and the missing follow-up structure.",
  ],
  highYieldSummary: [
    "Definition: the amnesic syndrome = a punched-out failure of new long-term memory with immediate memory, personality and remote memory relatively preserved, plus confabulation and variable anosognosia; an architecture, not a total decline; one function lost, the person intact.",
    "Epidemiology: overwhelmingly the thiamine-deficiency route in alcohol misuse (double-figure autopsy rates among severe dependence, the majority missed in life); the non-alcoholic routes wherever malnutrition and vomiting exist (hyperemesis, anorexia, starvation, bariatric surgery, dialysis, refeeding); around a quarter to a fifth improving meaningfully, over months, mostly the early-treated; complete recovery rare.",
    "Mechanism: the filing line (hippocampus → fornix → mammillary bodies → thalamus) carrying new memories to storage; the porter dead while the reading room and the stacks survive; the ten-rupee clock (thiamine as the spark plug of diencephalic glucose metabolism, days-scale failure, the sequence-decided permanence); the helpful inventor (confabulation as gap-filling without intent); the procedural gift (implicit learning surviving on separate wiring).",
    "Clinical: the pure architecture (immediate intact, the three-minute loop, remote preserved, personality and social skills intact, confabulation vivid-then-fading, comfortable anosognosia); the Wernicke emergency that precedes it (any one sign demanding parenteral thiamine); the route variants (sudden thalamic infarct, febrile herpes, post-anoxic, the benign TGA hours).",
    "Diagnosis: the three-minute bedside architecture (registration → immediate → 5-minute → remote → the working conversation); the workup running ALONGSIDE treatment (thiamine never delayed for a scan): thiamine and magnesium, the MRI (mammillary/medial-thalamic signal, the infarct, the temporal changes), CSF where herpes is in question; the differentials (delirium's impaired immediate, Alzheimer's gradual multi-domain, depression's effort-failure, dissociative's patchy inconsistency after structural exclusion, TGA's benign hours).",
    "Management: (1) the emergency rule; parenteral thiamine generously before any glucose, days-long, with magnesium alongside; the injection automatic in every malnourished/vomiting/drinking casualty and maternity presentation; (2) the established tier: the routine-and-labels home (fixed rail, labels, one-encounter honesty, safety locks, ID card), procedural learning exploited, the one-written-instruction clinic rule; (3) the alcohol treatment run BY the family (the box-alarms on their phone, the contract, the de-addiction linkage); (4) the honest pharmacology: no restoring tablet exists; depression, insomnia and agitation treated symptomatically, low-dose and careful; (5) the caregiver's endurance monitored as the system's load-bearing wall.",
    "The Indian tier: the two streams (the malnourished country-liquor population; the hyperemesis-and-starvation non-alcoholic routes: the exam vignette and the maternity blind spot); thiamine at ₹10–30 making cost never the barrier; the ward-rule audit ('no dextrose before thiamine in the malnourished') as the quality-improvement deliverable; the one-family-session home package as the delivery channel; the spouse carrying money, medicines and appointments: her endurance the prognosis's other half.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "amn-quiz-1",
      question: "In the pure amnesic syndrome, which memory is characteristically intact?",
      options: ["New long-term memory", "Immediate (working) memory", "Confabulated memory", "Prospective memory"],
      correctIndex: 1,
      explanation: "The architecture: immediate intact, recent ruined, remote retained.",
      afterSectionId: "diagnosis",
    },
    {
      id: "amn-quiz-2",
      question: "A malnourished dependent drinker presents confused with double vision. The immediate treatment is:",
      options: ["Intravenous glucose", "Parenteral thiamine before any glucose", "Haloperidol", "CT scan first"],
      correctIndex: 1,
      explanation: "One Wernicke sign in the malnourished is enough; glucose first worsens the injury; the scan accompanies, not precedes, treatment.",
      afterSectionId: "management",
    },
    {
      id: "amn-quiz-3",
      question: "Confabulation differs from lying because:",
      options: ["It is always grandiose", "It lacks intent to deceive — the brain offers material that feels like memory", "It is always about childhood", "It can be stopped by confrontation"],
      correctIndex: 1,
      explanation: "No deception intent; the material sincerely offered; confrontation only exhausts.",
      afterSectionId: "symptoms",
    },
    {
      id: "amn-quiz-4",
      question: "The classic anatomy of Korsakoff pathology involves:",
      options: ["Hippocampal plaques", "Mammillary bodies and medial thalamus", "Frontal poles bilaterally", "Occipital cortex"],
      correctIndex: 1,
      explanation: "The filing corridor (mammillary bodies, medial thalamic nuclei) is the lesion set.",
      afterSectionId: "mechanism",
    },
    {
      id: "amn-quiz-5",
      question: "A 64-year-old repeatedly asks the same questions for 6 hours after gardening, then fully recovers. Most likely:",
      options: ["Korsakoff syndrome", "Transient global amnesia", "Psychogenic amnesia", "Wernicke encephalopathy"],
      correctIndex: 1,
      explanation: "TGA: hours-long, self-limited, repetitive questioning, no cause found, benign course, 50–70 age band.",
      afterSectionId: "differential",
    },
    {
      id: "amn-quiz-6",
      question: "Which survives in Korsakoff syndrome and should be exploited in care?",
      options: ["Episodic fact learning", "Procedural (habit) learning", "Confabulation as therapy", "REM sleep memory"],
      correctIndex: 1,
      explanation: "Procedural/implicit learning persists — routines, habits and routes become the patient's functional memory system.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "State the four architecture points of the pure amnesic syndrome.", answer: "(1) NEW-MEMORY FAILURE: new long-term learning punched out; the breakfast an hour ago is news, the same question on a three-minute loop. (2) RELATIVE SPARING of immediate memory (the phone number held, the sentence repeated, the conversation maintained), personality (warmth, manners, humour, what separates Korsakoff patients socially from dementia patients), and old memories (childhood, schooling, old songs fluent, the recent-past border blurred). (3) CONFABULATION: plausible invented filler offered without intent to deceive; vivid early, fading to 'I don't remember' over months. (4) VARIABLE ANOSOGNOSIA: some patients know and joke about the hole; many are indifferent: the frontal-thalamic comfort of the repeated morning. One function lost, the person intact: the architecture that separates it from delirium (immediate impaired) and dementia (everything, gradually).", topic: "Diagnosis" },
    { question: "Trace the filing line from hippocampus to thalamus; name two lesions on it.", answer: "THE LINE: the hippocampal formation (the recording doorway) → the fornix (the arching bridge) → the mammillary bodies (the first relay) → the anterior and medial thalamic nuclei (the gate to the cortex and the stacks); the Papez-type circuit whose job is carrying today's experience into tomorrow's storage. TWO LESIONS: (1) the thiamine-famine set; the mammillary bodies and medial thalamus together, the Wernicke-Korsakoff signature (atrophied mammillary bodies visible on good-quality MRI); (2) the anterior/medial thalamic strategic infarct: the sudden non-alcoholic door, one hypertensive stroke producing overnight what the famine produces over weeks. (The further members: the hippocampal end taken by herpes encephalitis, anoxia and severe hypoglycaemia; the fornix occasionally by tumour and third-ventricle surgery: the anatomy-complete rareities the viva rewards.)", topic: "Anatomy" },
    { question: "Recite the Wernicke triad and the 'any one sign' treatment rule.", answer: "THE TRIAD: (1) confusion and apathy; the clouding that mimics delirium until the eyes are checked; (2) eye-movement paralysis or double vision/nystagmus: the sign that names the emergency (the abducens and conjugate-gaze palsies); (3) ataxia: the wide-based unsteady gait. THE RULE: ANY ONE of the three in a malnourished drinker, a vomiting patient, or anyone with empty thiamine stores demands PARENTERAL thiamine NOW, because the full triad is the exception, not the rule; the majority of Wernicke cases present with one or two signs and are missed. The accompaniments (fever, tachycardia, hypotension) widen the delirium mimic, and the untreated trajectory runs through stupor and coma to death or the permanent Korsakoff hole. The rule's Indian audit form: the injection made automatic in casualty and maternity; the sequence question asked before the drip question.", topic: "Emergency" },
    { question: "Why is thiamine given before glucose? Explain the chemistry in one sentence.", answer: "Because glucose METABOLISM CONSUMES thiamine: the diencephalic hub (mammillary bodies, medial thalamus) runs the highest metabolic demands on the thinnest reserves in the brain, and forcing glucose through a thiamine-empty circuit completes the energy bankruptcy the depletion began; the lesion becoming permanent in the hours between the drip and the vitamin. In one sentence: the sugar is the fuel, the thiamine is the spark plug, and flooding fuel into an engine with no spark doesn't drive it; it burns it. Hence the sequence law: B1 before D5, every time, in anyone starved, vomiting or drinking heavily, including (the Indian audit point) the hyperemesis mother's maternity drip and the casualty 'weakness' presentation.", topic: "Pharmacology" },
    { question: "Three bedside minutes distinguishing Korsakoff from delirium and from Alzheimer's.", answer: "MINUTE ONE: the registration test: the delirious patient cannot hold the sentence or the phone number (immediate impaired, attention flickering, consciousness clouded, the picture fluctuating); the Korsakoff patient holds it perfectly and loses only the tomorrow. MINUTE TWO: the remote memory and personality: the Alzheimer's patient's old stories thinning with the general decline (gradual, multi-domain, the remote eventually lost alongside everything else); the Korsakoff patient's childhood fluent, his manners warm, his humour intact, one function boxed while the person survives. MINUTE THREE: the confabulation probe: the fluent plausible filler offered without discomfort (the delirious patient's productions are clouded and fragmented; the Alzheimer's patient confabulates to cover gaps he half-knows, and the effort shows). Add the course: sudden-ish and stable in Korsakoff, fluctuating in delirium, a smooth ramp in Alzheimer's; the timeline separating all three within the same three minutes.", topic: "Differential" },
    { question: "Define confabulation in one sentence; distinguish from lying; state its natural course.", answer: "DEFINITION: the fluent, unplanned filling of memory gaps with fabricated content, offered without intent to deceive. FROM LYING: the liar knows the truth and hides it for gain; the confabulator offers material that FEELS like memory, as sincerely as any recollection; confrontation changes the liar's story and only exhausts the patient (the families who stop arguing and start orienting are the ones who thrive). NATURAL COURSE: vivid and rich in the early weeks and months (the stories elaborate, occasionally magnificent) then fading over months to the terse 'I don't remember' in most patients; the rare persistent rich confabulation flags the frontal contribution and deserves its own assessment.", topic: "Clinical practice" },
    { question: "Five elements of the home routine-and-labels system.", answer: "(1) THE FIXED RAIL: same times, same rooms, same faces, same sentences ('after lunch we sit on the veranda'); life as a predictable track the surviving procedural system can learn. (2) THE LABELS: clocks, calendars, the today-page, photographs with names on the walls; the house remembering FOR him. (3) THE ONE-ENCOUNTER HONESTY: visitors introduce themselves every time; the family stops correcting ('you DO remember him!'): gentle orientation replaces the exhausting correction. (4) THE SAFETY LOCKS: stove off and out of reach, money with one named member, the bath supervised (sequencing frays), the ID card always in the pocket, the wandering plan rehearsed. (5) THE FAMILY'S PHONE: the weekly-filled medicine box with alarms, the appointments, the one written instruction from every clinic visit; the memory moved out of the patient into the household's architecture. Together: the family as hippocampus; the treatment's second half, taught in one session.", topic: "Management" },
  ],
  faqs: [
    { question: "He remembers his school days perfectly. How is this a memory disease?", answer: "The filing of old memories is complete and safe on the shelves; the corridor that carries new memories to the stacks is damaged. Old is safe, new is lost; that is exactly this disease." },
    { question: "He invents things about this morning. Is he lying to us?", answer: "No. Confabulation is the brain filling silence with material that feels like memory. There is no intention to deceive; the story is as real to him as your morning is to you." },
    { question: "Will the memory come back?", answer: "Some recovery occurs in a minority of patients over months, mostly in those treated early. The realistic goal is a safe, structured, dignified life where the family and the routine become his memory." },
    { question: "What is the injection for, if the damage is already done?", answer: "First, active injury may still be continuing; thiamine stops the fire even if the burnt part stays burnt. Second, without it, the hole gets bigger." },
    { question: "Can he stay at home?", answer: "Usually, yes, with the system: fixed routines, labels, money and medicines in one family member's hands, safety locks, and a written (not spoken) daily plan." },
    { question: "Can he take his own medicines?", answer: "Not reliably: he cannot remember taking them, so he either misses doses or repeats them. The family member with alarms owns this job permanently." },
    { question: "Does he have dementia? Is it the same thing?", answer: "No: dementia affects many thinking domains and worsens progressively. This is a specific hole in one function, with personality and intelligence intact. It does not spread the way dementia does." },
    { question: "The same thing happened to my aunt for a few hours and then she was fine.", answer: "That sounds like transient global amnesia: a frightening but benign, self-limiting cousin, typically in the 50s–70s, that rarely recurs. It is not the start of this disease." },
    { question: "What should the hospital have done differently?", answer: "Thiamine before the glucose drip, in anyone starved, vomiting or drinking heavily. That one sequence, costing a few rupees, is the difference between this syndrome and no syndrome." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "World Health Organization — ICD-10 research criteria for the Korsakoff syndrome (paraphrased)" },
      { source: "Royal College of Physicians / NICE-lineage guidance — vitamin replacement in alcohol misuse and severe malnutrition; refeeding-syndrome discipline" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.12 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Thomson AD, Cook CCH et al. — the thiamine-deficiency and Wernicke treatment literature (the parenteral-dosing principle)" },
      { source: "Cochrane/systematic reviews of pharmacological treatments in Korsakoff syndrome — the honest 'no restoring drug' conclusion" },
    ],
    reviews: [
      { source: "Kopelman MD — the classic reviews of the Korsakoff/amnesic syndrome and confabulation (definitions and natural history)" },
      { source: "Victor M, Adams RD, Collins GH — the classic monograph tradition of the Wernicke-Korsakoff syndrome" },
      { source: "Sechi G, Serra A — Wernicke's encephalopathy in non-alcoholic settings (including hyperemesis)" },
      { source: "Transient global amnesia literature — the diagnostic criteria and benign course (Hodges JR lineage)" },
      { source: "Memory-circuit anatomy: the hippocampal-fornix-mammillary-thalamic pathway reviews (paraphrased)" },
      { source: "Antinori A et al. — the modern HAND nosology (the treatable differential of the young amnesic)" },
    ],
    patientResources: [
      { source: "The routine-and-labels home package and the one-written-instruction rule — the instruments this course hands to every Indian Korsakoff family" },
      { source: "Tele-MANAS 14416 — the caregiver's own support line; the Memory Rehabilitation course's household-prosthetic continuation" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the corridor that broke, the injection rule, the routine that carries the days.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The architecture, the filing line, the Wernicke rule, the confabulation definition, the sequence law.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything: the ward-rule audit, the family session, the honest pharmacology, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The architecture, the routes, the prevention arithmetic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the four architecture points and the ₹10–30 prevention story cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The porter, the ten-rupee clock, the helpful inventor.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can trace the filing line and explain why glucose burns the empty circuit." },
    { number: 3, title: "Clinical Practice", description: "The three-minute bedside, the emergency rule, the home system.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the architecture examination, the sequence law and the routine-and-labels package." },
    { number: 4, title: "Indian Context", description: "The two streams, the ward-rule audit, the family as hippocampus.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the maternity sequence question and the one-session family package." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the Korsakoff essay cold and recite the differential anchors without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.12 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Kopelman MD — the classic reviews of the Korsakoff/amnesic syndrome, confabulation and its natural history", sourceType: "review", year: "1980s–2010s", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Victor M, Adams RD, Collins GH — the classic Wernicke-Korsakoff monograph tradition (the founding clinical structure)", sourceType: "primary", year: "1971 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Thomson AD, Cook CCH et al. — the thiamine-deficiency and Wernicke treatment literature (the parenteral-dosing principle; oral absorption poor in the acute state)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Sechi G, Serra A — Wernicke's encephalopathy in non-alcoholic settings (including hyperemesis gravidarum)", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "WHO ICD-10 research criteria for the Korsakoff syndrome (paraphrased architecture)", sourceType: "classification", year: "1990s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Royal College of Physicians / NICE-lineage guidance — vitamin replacement in alcohol misuse and severe malnutrition; refeeding-syndrome discipline", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Transient global amnesia literature — diagnostic criteria and benign course (Hodges JR lineage)", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Cochrane/systematic reviews of pharmacological treatments in Korsakoff syndrome — the honest no-restoring-drug conclusion", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Memory-circuit anatomy reviews — the hippocampal-fornix-mammillary-thalamic pathway (paraphrased); Antinori A et al. 2007 HAND nosology as the treatable differential", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Indian case series of Wernicke-Korsakoff — the alcohol-related and hyperemesis-related streams (journal reports, 1990s–2010s); thiamine cost realities (approx 2026)", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The architecture: new-memory failure with immediate memory, personality and remote memory relatively preserved; the definition that separates the syndrome from delirium (immediate impaired, clouded) and late dementia (remote lost, multi-domain); confabulation and variable anosognosia completing the four points.", grade: "established", sources: ["S1", "S2", "S6"] },
    { text: "The anatomy: the hippocampal-fornix-mammillary-thalamic filing line, with the mammillary bodies + medial thalamus as the commonest lesion set (the thiamine route's signature, visible as mammillary-body atrophy on good-quality MRI) and the anterior/medial thalamic strategic infarct as the sudden non-alcoholic door.", grade: "established", sources: ["S3", "S10"] },
    { text: "The Wernicke emergency rule: confusion OR eye-movement palsy OR ataxia; any ONE sign in the malnourished, vomiting or drinking patient demands parenteral thiamine now; the full triad is the exception, and the untreated trajectory runs through stupor and coma to death or the permanent hole.", grade: "established", sources: ["S1", "S3"] },
    { text: "The sequence law: glucose metabolism consumes thiamine; thiamine before any glucose-containing fluid (B1 before D5), with parenteral dosing first (oral absorption poor in active Wernicke), continuing for days, and magnesium replaced alongside; the rule extending to the maternity ward (hyperemesis) and the refeeding window (calories low, vitamins and electrolytes first).", grade: "established", sources: ["S4", "S5", "S7"] },
    { text: "Confabulation: fluent, unplanned gap-filling without intent to deceive; distinguished from lying (no motive-plus-gain; confrontation only exhausts) and from delirium's productions (stable awake background, immediate memory intact); vivid early, fading to 'I don't remember' over months in most patients.", grade: "established", sources: ["S2"] },
    { text: "The prognosis arithmetic: meaningful improvement in around a quarter to a fifth of classic series, over months, mostly among the early-treated; complete recovery rare; most patients stabilising and living years in supported settings: the expectation-setting that protects the household's endurance.", grade: "established", sources: ["S3"] },
    { text: "Procedural/implicit learning survives the syndrome (habits, songs and routes outlasting facts) the evidence-based foundation of the routine-and-labels care architecture and the family-as-hippocampus design.", grade: "established", sources: ["S2", "S10"] },
    { text: "The pharmacological honesty: no drug restores the filed gap; cholinesterase-inhibitor, SSRI and other trials in Korsakoff syndrome disappointing-to-modest; thiamine and magnesium the only evidence-backed pharmacology, with depression, insomnia and agitation treated symptomatically and carefully.", grade: "established", sources: ["S9"] },
    { text: "Transient global amnesia: a self-limiting hours-long pure memory gap (typically 50–70, after exertion or cold-water immersion, repetitive questioning, complete recovery, rare recurrence); the benign impostor requiring one structural workup to close the question.", grade: "established", sources: ["S8"] },
    { text: "The Indian tier: the two streams; the malnourished country-liquor population (nearly carbohydrate-only diets) and the non-alcoholic routes (hyperemesis gravidarum the classic vignette, starvation, tuberculosis); thiamine ampoules at ₹10–30 (approx 2026) making cost never the barrier; the missed-injection audit ('no dextrose before thiamine in the malnourished') as the ward-rule deliverable; the one-family-session routine-and-labels package as the delivery channel; the spouse carrying money, medicines and appointments.", grade: "supported", sources: ["S11"] },
  ],
};
