import type { PsychiatryCourse } from "./types";

/**
 * FRONTOTEMPORAL DEMENTIA — canonical Psychiatry course
 * (migration batch 6, Group A — neurocognitive disorders, part 1 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/frontotemporal-dementia.md — untouched
 * foundation), re-researched against current guidance (Rascovsky 2011
 * bvFTD consensus criteria, Gorno-Tempini PPA classification, the
 * MAPT/GRN/C9orf72 genetic architecture, the FTD-MND overlap
 * literature) with per-claim provenance.
 *
 * Drug routes: sertraline and escitalopram (the pragmatic SSRI tier
 * for bvFTD behaviours) have KYP lessons and are linked honestly with
 * their modest-evidence framing; trazodone, quetiapine and the
 * speech-therapy infrastructure have no KYP lessons and are recorded
 * in contentGaps, never invented. Cholinesterase inhibitors have no
 * role — the anti-reflex this course exists to teach.
 */
export const frontotemporalDementiaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "frontotemporal-dementia",
  title: "Frontotemporal Dementia",
  shortName: "FTD",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Frontotemporal Dementia"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "When personality changes first — the younger-onset dementia of frontal and temporal lobes",
  summary:
    "Frontotemporal dementia is a younger-onset dementia family in which personality, behaviour and language change before memory does. There is no disease-modifying treatment, so care rests on early diagnosis, behavioural management, caregiver support and foresighted planning.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define FTD and its three clinical presentations: behavioural variant, semantic-variant language, and nonfluent/agrammatic language.",
    "Recite the behavioural-variant feature clusters — disinhibition, apathy, loss of empathy, compulsive/stereotyped behaviour, hyperorality, executive decline — as a checklist with everyday examples.",
    "Explain why FTD is the great psychiatric mimic of midlife, and list its five commonest misdiagnoses.",
    "Describe the two underlying proteins (tau and TDP-43) and the three main familial genes.",
    "Order and interpret the diagnostic work-up: collateral history, frontal-weighted testing, MRI/FDG-PET, and the rule-out list.",
    "Manage FTD without disease-modifying options: behavioural strategies, selective SSRIs, careful sedation only when needed, speech therapy, caregiver and legal planning.",
    "Screen for and counsel about the motor neuron disease overlap.",
    "Advise genetic counselling appropriately for Indian families, including its practical limits.",
  ],
  quickFacts: [
    { label: "The age signature", value: "Onset 45–65 (typical late 50s)", detail: "About 20 years earlier than typical Alzheimer's — which is precisely why its social blast radius (jobs, marriages, school-age children) is so much wider" },
    { label: "The two doors", value: "Behaviour (bvFTD, commonest) or language", detail: "Semantic variant (fluent but empty — the melting dictionary) or nonfluent/agrammatic (effortful, telegraphic); logopenic belongs to Alzheimer's — the trick variant" },
    { label: "The six clusters", value: "Disinhibition · apathy · empathy loss · perseveration/compulsion · hyperorality · executive decline", detail: "The checklist not a paragraph; three or more plus functional decline = possible bvFTD; imaging or genetic marker = probable" },
    { label: "The test paradox", value: "A normal MMSE never excludes FTD", detail: "Frontotemporal damage is invisible to memory-weighted tests: passes simple memory screens, fails life — frontal-weighted tasks are the exam that catches it" },
    { label: "The eating sign", value: "Weight GAIN, not loss", detail: "Sweet-and-carbohydrate craving, food grabbed from others' plates — vs depression's appetite loss and Alzheimer's late anorexia; one of the most reliable early Indian family reports ('he finished the entire box of mithai')" },
    { label: "The familial signal", value: "30–40% run in families", detail: "The strongest of any common dementia: MAPT (tau), GRN (progranulin), C9orf72 (the FTD-ALS gene) — map the three-generation tree in clinic" },
    { label: "The MND shadow", value: "FTD-MND may survive only 2–5 years", detail: "The same TDP-43 protein seen from two windows — four screening questions at every visit: dropped objects, grip, slurring, breathlessness" },
    { label: "The survival range", value: "7–13 years from onset on average", detail: "Language variants run slower (over a decade, workable communication with strategy); the FTD-MND fork is the short end" },
  ],
  knowledgeGraph: [
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The memory-first contrast — and the source of the reflex prescription (cholinesterase inhibitors) FTD must refuse" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The sudden-change impostor on any dementing background" },
    { label: "Dementia with Lewy Bodies", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The other young-ish dementia sibling in the differential" },
    { label: "Dementia in Parkinson's Disease", type: "condition", href: "/psychiatry/parkinsons-dementia/", note: "The parkinsonian cousin — PSP and CBS sit at FTD's own tau border" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The mimic: FTD rituals are egosyntonic, unresisted and fixed — no anxiety relief-seeking" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The mania mimic that fails the gates: no sleeplessness, no quickening, no contagious euphoria" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The commonest wrong label: apathy is indifferent, depression is painful — and antidepressants do nothing for FTD" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system behind the modest-but-pragmatic SSRI tier for bvFTD behaviours" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The conductor that FTD silences first — often right side before left" },
    { label: "Anterior temporal lobe", type: "brain-region", href: "#brain", note: "The concept-dictionary whose melting makes the semantic variant" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The pragmatic SSRI first line for disinhibition, irritability and compulsive-type behaviours" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The alternative SSRI of the same modest-evidence tier" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry FTD. The conductor retires: the frontal lobes are the brain's conductor — they inhibit impulses, sequence plans, monitor whether behaviour fits the room, and read other people's feelings. FTD begins by silencing the conductor, often asymmetrically, right side first. With the conductor gone, the orchestra plays whatever it likes: the jokes that were always privately thought now get said aloud; the second helping becomes the fifth; the schedule becomes a rigid ritual. Nothing has been added to the person; something restraining has been subtracted — that sentence, told to families, does more therapeutic work than any prescription. The dictionary melts: in the semantic variant, the anterior temporal lobes hold the concept-dictionary — the meanings that link the word 'camel' to humps, desert and patience. As those hubs dissolve, patients substitute increasingly general words ('animal... a walking thing'), lose the ability to name even common objects, yet keep fluent grammar and normal rhythm — the speech sounds effortless and empty. Remarkably, the same melting affects knowledge about people and famous figures, which is why some patients stop recognising the emotional weight of old friends long before they stop recognising faces. The shared protein with motor disease: in some patients, TDP-43 also climbs into the motor neurons of the spinal cord — within the same year or a few years, the patient who lost his manners begins to drop cups, trip on kerbs and waste the hand muscles. This overlap is not a coincidence of two illnesses; it is one protein process seen from two windows, and its recognition changes the conversation: prognosis planning, breathing and swallowing surveillance, honest pacing with the family.",
    steps: [
      "The frontal conductor (inhibition, sequencing, social monitoring, empathy reading) is silenced — often right-first asymmetry.",
      "Released, not added: tactless jokes said aloud, the fifth helping, the rigid ritual — the reframe that rescues families.",
      "The anterior temporal concept-dictionary melts in the semantic variant: word meanings, object knowledge, famous-face meaning dissolve while grammar and fluency survive.",
      "Left inferior frontal-insular atrophy breaks speech fluency and grammar in the nonfluent variant — effortful, telegraphic, groping.",
      "Underneath it all: tau inclusions in one group (the historical 'Pick's disease' pattern), TDP-43 in the other — the pathology, not the clinical picture, decides the familial gene.",
      "TDP-43 can climb into spinal motor neurons: the FTD-MND overlap — one protein process seen from two windows.",
      "The treatments mirror what remains: structure and environmental engineering for the released behaviour, SSRIs for the serotonergic modulation of disinhibition, speech therapy for the language doors — and no cholinesterase inhibitor (the cholinergic systems are relatively spared, so the Alzheimer's reflex has nothing to act on).",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "frontal-lobes", name: "Frontal lobes (the conductor)", role: "Inhibition, planning, social monitoring, empathy — their silencing releases the behavioural variant; often right-predominant asymmetry.", grade: "established" },
    { id: "anterior-temporal", name: "Anterior temporal lobe (the dictionary)", role: "The concept-hub for word meanings, object knowledge and person-knowledge — its 'knife-blade' atrophy defines the semantic variant.", grade: "established" },
    { id: "left-inferior-frontal-insular", name: "Left inferior frontal-insular region", role: "Speech fluency and grammar engine — its breakdown produces the effortful, telegraphic nonfluent variant.", grade: "established" },
    { id: "hypothalamus-reward", name: "Hypothalamus and taste-reward circuits", role: "The hyperorality and sweet-craving machinery — weight GAIN as the disease signature.", grade: "supported" },
    { id: "motor-neurons", name: "Spinal motor neurons (the MND window)", role: "TDP-43's second target in the overlap — dropped objects, wasted hands, slurring, breathlessness: the prognosis-changing fork.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The system behind the modest SSRI effect on disinhibition, irritability and compulsive-type behaviours — the pragmatic first line with honest framing.", grade: "supported", drugConnection: "Sertraline and escitalopram carry KYP lessons — the tier to link when the behaviour demands pharmacology." },
    { name: "Acetylcholine", symbol: "ACh", role: "RELATIVELY SPARED in FTD — the reason cholinesterase inhibitors have no benefit here and can worsen behaviour: the anti-reflex this course teaches.", grade: "established", drugConnection: "The Alzheimer's prescription reflex unlearned: donepezil has no role in FTD." },
    { name: "Glutamate", symbol: "Glu", role: "Excitotoxic tier implicated in the motor-neuron window of the overlap — the ALS side of the shared TDP-43 process.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "conductor-release-pathway",
      name: "The conductor retires (behavioural release)",
      steps: [
        { label: "Frontal atrophy, right-first", detail: "The conductor's inhibition, sequencing and social monitoring fade" },
        { label: "The orchestra plays on", detail: "Privately-thought jokes said aloud; the fifth helping; careless spending; the rigid ritual" },
        { label: "Empathy circuits fail", detail: "Stops asking after family; cold response to a spouse's illness; 'present in body only' — the wound families grieve most" },
        { label: "Hyperorality and weight gain", detail: "Hypothalamic and taste-reward involvement: sweet craving, plates grabbed, the mithai-box sign" },
      ],
      clinicalManifestation: "The bank manager of the classic vignette: three years of 'character change' with perfect memory and a collapsing life.",
      grade: "established",
    },
    {
      id: "dictionary-melt-pathway",
      name: "The dictionary melts (semantic variant)",
      steps: [
        { label: "Anterior temporal hubs dissolve", detail: "The concept-store linking 'camel' to humps, desert and patience empties" },
        { label: "Speech stays fluent", detail: "Grammar and rhythm intact — the speech sounds effortless and empty; 'that thing' replaces the pressure cooker" },
        { label: "Meaning-loss generalises", detail: "Faces of famous people, tools, animals lose meaning — emotional weight of old friends goes before face-recognition does" },
        { label: "Surface dyslexia emerges", detail: "'Colonel' read as 'kolonel' — irregular words sounded out; the beloved exam pearl" },
      ],
      clinicalManifestation: "The retired schoolteacher calling objects 'that thing' — fluent, grammatical, and unable to say what a camel is.",
      grade: "established",
    },
    {
      id: "mnd-overlap-pathway",
      name: "One protein, two windows (the FTD-MND overlap)",
      steps: [
        { label: "TDP-43 misfolds in the frontal-temporal cortex", detail: "The behavioural or language syndrome declares" },
        { label: "The same protein climbs into motor neurons", detail: "Dropped objects, weak grip, slurring, breathlessness, fasciculations — asked at EVERY visit" },
        { label: "The prognosis reframes", detail: "Survival compresses to the 2–5-year fork; swallow and breathing surveillance begin; palliative conversations open early" },
        { label: "The family finally hears one story", detail: "The neurology clinic manages the ALS, the psychiatry clinic the behaviour — someone must say out loud it is one disease" },
      ],
      clinicalManifestation: "The patient whose 'lost manners' and 'dropped cups' were two separate consultations until one clinician joined them.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "prodromal", time: "Months–2 years", title: "The misdiagnosis runway", description: "The behaviours are attributed to stress, finances, 'bad company', the spouse, or alcohol — the Indian blaming tier that delays the MRI; failed antidepressant trials accumulate.", phase: "onset" },
    { id: "diagnosis-window", time: "Year 2–4 (typical)", title: "The relabelling consultation", description: "Collateral history + frontal-weighted testing + MRI/FDG-PET name the disease — the intervention that rescues marriages, inheritances and employment dignity.", phase: "onset" },
    { id: "early-years", time: "Years 1–5 post-diagnosis", title: "The maximal family damage years", description: "Disinhibition, spending, hyperorality and empathy loss at full pitch while mobility persists — environment engineering, UPI locks, caregiver architecture; language variants still workable with strategy.", phase: "peak" },
    { id: "middle-years", time: "Years 5–10", title: "The narrowing world", description: "Behaviours progress into dependency and muteness (behavioural variant); communication reduces but warmth persists (language variants with support); the MND fork may declare at any point.", phase: "duration" },
    { id: "late-years", time: "Final 1–3 years", title: "The honest ending", description: "Dependency, swallowing failure, muteness — or the MND trajectory's respiratory ending; survival 7–13 years on average with the wide fork; palliative conversations held early, not in crisis.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Prevalence estimates are roughly comparable to early-onset Alzheimer's in the 45–64 band; in specialist young-onset dementia series, FTD is the leading or second diagnosis. Mean onset 45–65 (typical late 50s) — about 20 years earlier than typical Alzheimer's, which is precisely why its social blast radius (jobs, marriages, children still at school) is so much wider. Behavioural variant is the commonest presentation; language variants together form a substantial minority. Familial burden: 30–40% of patients have a strong family history — versus a much weaker familial signal in late-onset Alzheimer's. Survival roughly 7–13 years from onset on average, with a wide fork: the FTD-MND subgroup may survive only 2–5 years, while some language-variant patients live well over a decade.",
    indianPrevalence: "No systematic national prevalence; young-onset dementia is doubly invisible in India — families attribute midlife behaviour change to stress, finances, 'bad company', or the spouse, and psychiatric referral comes first (which is why psychiatrists are the real front line of Indian FTD detection). Indian memory-clinic series from metros report FTD forming a meaningful share of young-onset dementia, usually diagnosed after 2–4 years of symptom duration, frequently after failed antidepressant trials and often after marital or employment breakdown. The FTD-MND overlap is under-appreciated: neurology clinics manage the ALS; families are often never told the behavioural change is part of the same disease.",
    lifetimeRisk: "30–40% familial burden — the strongest of any common dementia; the act-on signal is a family tree containing young dementia, ALS/MND, or 'psychiatric breakdowns' misdiagnosed decades ago.",
    genderRatio: "Roughly comparable across sexes in most series; the behavioural variant's presentation differences are dominated by social context (spending, impropriety) rather than sex biology.",
    ageOfOnset: "45–65, typical late 50s — the midlife window that makes every case a family, employment and financial emergency, not only a medical one.",
    indianNotes: "Joint-family conflict, property disputes and alcohol assumptions ('he must be drinking') are the commonest initial family explanations offered in Indian clinics for early bvFTD; every one of them delays the MRI by another year.",
  },
  etiology: [
    { category: "biological", factor: "The two proteins", details: "Tau (the microtubule protein famous from Alzheimer's tangles) misfolds in one group — including the classic historical 'Pick's disease' pattern; TDP-43 (an RNA-handling protein) misfolds in the other large group — the same protein that accumulates in ALS, which is why the two diseases overlap; a rarer third protein (FUS) accounts for a small fraction. The pathology, not the clinical picture, decides the familial gene: tau-inclusion families carry MAPT mutations; TDP-43 families carry GRN or C9orf72." },
    { category: "genetic", factor: "The familial trio", details: "MAPT (chromosome 17, tau) — often prominent early personality change, sometimes parkinsonism; GRN (progranulin) — often asymmetric, parietal-touching presentations, language and behavioural mixes; C9orf72 — the massive hexanucleotide-repeat expansion causing both FTD and ALS in the same family tree, sometimes presenting as late-onset psychosis-like pictures. Sporadic cases (the majority overall) have no identified mutation." },
    { category: "genetic", factor: "The red flags for familial disease", details: "Onset under 60, especially under 50; a family tree containing any mix of young dementia, ALS/motor neuron disease, 'psychiatric breakdowns' misdiagnosed decades ago, and early parkinsonism — the tree to draw on paper in every Indian clinic." },
    { category: "social", factor: "The blaming tier (the delay amplifier)", details: "Midlife stressors (job loss, debt, menopause, empty-nesting) are what families blame — and the blaming itself delays diagnosis by years; joint-family conflict, property disputes and alcohol assumptions are the Indian variants. One clinical task is always the same: remove the blame and re-attach the change to the brain." },
  ],
  symptomClusters: [
    {
      category: "1. Behavioural variant — the six clusters (the commonest face)",
      symptoms: ["Disinhibition: tactless remarks, overfamiliarity with strangers, public impropriety, careless spending, new gambling or gift-buying — NOT mania (no sleeplessness, no flight of ideas, no contagious euphoria)", "Apathy: initiates nothing, abandons years-long hobbies, sits for hours — the variant most mislabelled depression (but apathy is indifferent while depression is painful, and antidepressants do nothing)", "Loss of empathy and social warmth: stops asking after family, cold response to a spouse's illness, absent grief — 'present in body only'; the deepest wound and the clearest discriminator from depression", "Compulsive, stereotyped behaviours: the same route daily, counting and rearranging, one joke repeated, rigid food rituals — mimics OCD in content but is egosyntonic, unresisted and fixed in form", "Hyperorality and dietary change: sweet-and-carbohydrate craving, grabbing food from others' plates, WEIGHT GAIN (vs depression's loss, vs Alzheimer's late anorexia)", "Executive decline with PRESERVED memory: recalls yesterday, stores new memories, cannot plan a puja or follow a bank form — passes simple bedside memory tests, fails life"],
    },
    {
      category: "2. Additional bvFTD signs",
      symptoms: ["Neglect of hygiene and dressing, absent embarrassment at soiling", "Utilisation behaviour (uses every object placed before him) and environmental dependency (imitates the examiner's actions) — the classical frontal release signs", "Insight absent-to-patchy from early on; confabulated rationalisations fill the gaps ('I am not bathing because I am saving water')"],
    },
    {
      category: "3. Semantic-variant language (svPPA)",
      symptoms: ["Fluent, grammatical speech that empties of content; severe naming difficulty; word-comprehension loss ('camel': 'a thing... for... going')", "Loss extends beyond words: faces of famous people, tools, animals lose their meaning", "Surface dyslexia — irregular words read by sound ('colonel' as 'kolonel')", "Behavioural quirks of the temporal-right-dominant type: emotional coldness, rigid sweet preferences, bizarre narrow collections (bottle caps, one celebrity's paraphernalia)"],
    },
    {
      category: "4. Nonfluent/agrammatic variant (nfvPPA) and the MND shadow",
      symptoms: ["Effortful, 'telegraphic' speech; grammar collapses while word-meaning survives; grope-for-the-word quality (apraxia of speech)", "Asymmetric parkinsonism or, over years, progression to a broader four-limb syndrome (overlap with CBS/PSP phenotypes)", "At every visit, the four MND questions: dropped objects, weak grip, slurred speech, breathlessness — their arrival reframes the prognosis"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "Consensus criteria (Rascovsky 2011, paraphrased; mirrored in DSM-5/ICD-11)",
      code: "The bvFTD six-cluster architecture",
      criteria: [
        "A deterioration in behaviour and/or cognition by history and testing.",
        "Plus THREE OR MORE of six characteristic clusters: disinhibition; apathy; loss of empathy; perseverative/compulsive behaviour; hyperorality; utilisation/executive pattern.",
        "With functional decline and other explanations preserved (the mimic work-up run and clean).",
        "POSSIBLE bvFTD is clinical; PROBABLE requires an imaging or genetic marker — frontal/anterior-temporal atrophy, hypometabolism, or a known pathogenic mutation.",
        "The old 'Pick's disease' name belongs to post-mortem tau histology, not to bedside use.",
      ],
      duration: "Years — the misdiagnosis runway averages 2–4 years in Indian series before the correct label lands.",
      indianNote: "The psychiatrist is the real front line of Indian FTD detection: midlife 'personality change' after failed antidepressant trials should hold FTD in the front of the differential — the single highest-yield habit Indian psychiatry could adopt.",
    },
    {
      system: "The work-up",
      code: "Collateral, frontal weighting, imaging, rule-outs",
      criteria: [
        "Collateral history is 80% of the diagnosis and must be taken PRIVATELY: the spouse's and children's inventory of change (manners, money, food, empathy, rituals, hygiene), compared with the patient's own 'everything is fine, she exaggerates'.",
        "Bedside cognitive testing with FRONTAL weighting: inhibition/switching, abstraction (similarities), proverb interpretation, go/no-go patterns, Luria sequences, timed verbal fluency — a normal MMSE-style score never excludes FTD.",
        "Neuropsychological assessment where available: the frontal-executive and language profile against preserved memory storage.",
        "MRI brain: frontal and/or anterior temporal atrophy, often strikingly asymmetric; the 'knife-blade' anterior temporal atrophy of the semantic variant; early disease can look near-normal, then FDG-PET (frontal/anterior-temporal hypometabolism) earns its place.",
        "The rule-out battery (the mimic killers): thyroid and B12 as in any dementia; HIV and syphilis serology in younger behaviour change (cheap, treatable, classic misses); MRI for masses and hydrocephalus; neurosyphilis and autoimmune encephalitis in any rapid or atypical course; sleep, alcohol and substance history; medication review (steroids, benzodiazepines and dopamine drugs can caricature disinhibition).",
        "EMG/clinical surveillance for MND when wasting, fasciculations or slurring join; coordinate with neurology early.",
        "Genetic testing pathway: counselling-driven, offered when onset is early and the family tree is loaded — map the three-generation tree in clinic first; reserve mutation testing for tertiary genetic services; never test an unaffected relative without formal pre-test counselling.",
      ],
      duration: "A clinic-day diagnosis with the right collateral history; the years lost are before the clinic, not inside it.",
      indianNote: "MRI-normal is read as brain-normal by families and insurers alike — the FDG-PET conversation (₹15,000–30,000 in metros, approx) is often the decisive one in the courtship-of-mimics cases.",
    },
  ],
  severityScales: [
    {
      name: "The six-cluster burden ladder",
      fullName: "Behavioural-variant clinical staging",
      measures: "How many of the six clusters are active, and how much supervision the day requires.",
      ranges: [
        { min: 0, max: 0, severity: "Early (one or two clusters; social camouflage persists)", action: "The misdiagnosis runway: relabel now, start environment engineering (money, food, routine), draw the family tree, screen MND at every visit" },
        { min: 1, max: 1, severity: "Established (three or more clusters; supervision required)", action: "The maximal family damage years: full structure package, UPI limits and spending control, caregiver architecture with respite prescribed in words, SSRI tier for target behaviours" },
        { min: 2, max: 2, severity: "Advanced (dependency, muteness, swallowing tier)", action: "Comfort-focused care, honest pacing, palliative conversations early — and the MND fork's surveillance to the end" },
      ],
      indianNote: "The Indian stage-marks are financial and legal as much as clinical: the joint account, the employment exit letter, the disability certification initiated early because processing takes months.",
    },
    {
      name: "The MND shadow ladder",
      fullName: "Motor-overlap surveillance staging",
      measures: "The four-question screen run at every visit — the fork that reframes prognosis.",
      ranges: [
        { min: 0, max: 0, severity: "No motor signs", action: "The behavioural-language course continues; screening questions repeated every visit" },
        { min: 1, max: 1, severity: "Emerging signs (dropped objects, grip, slurring, breathlessness)", action: "EMG and neurology co-management NOW; swallow and breathing surveillance begins; voice-banking conversation while speech remains" },
        { min: 2, max: 2, severity: "Established FTD-MND", action: "The 2–5-year fork: positioning and seating equipment, early palliative-care conversation, caregiver counselling shifts to prognosis pacing" },
      ],
      indianNote: "The Indian gap: neurology manages the ALS, psychiatry the behaviour — someone must say out loud it is one disease, and that clinician is usually you.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Depression", distinguishingFeatures: "No sadness, no guilt, no sleep/appetite LOSS (weight GAINS); empathy absent rather than painful; antidepressants fail through two trials.", keyDifferentiator: "Apathy is indifferent; depression is painful — and the depressed patient still cares and says so." },
    { condition: "Mania / bipolar disorder", distinguishingFeatures: "No psychomotor acceleration, no decreased sleep, no grandiose plans, no contagious euphoria — just released behaviour at a flat, unrewarded pitch.", keyDifferentiator: "The manic patient SLEEPS three hours and speeds; the bvFTD patient sleeps normally and offends." },
    { condition: "Obsessive-compulsive disorder", distinguishingFeatures: "Rituals unresisted, unsought, unchanged by challenge; no anxiety relief-seeking; adult onset.", keyDifferentiator: "OCD rituals are egodystonic (fought against); FTD rituals are egosyntonic and fixed in form." },
    { condition: "Marital infidelity / 'character change'", distinguishingFeatures: "Progression over years, disinhibition ACROSS all social settings (not just home), other signs in the six-cluster inventory.", keyDifferentiator: "Character is stable across contexts by nature; disease is progressive and crosses every room." },
    { condition: "Late-onset schizophrenia / delusional disorder", distinguishingFeatures: "Content absent or bizarre-minimal; behaviour is release-pattern; MMSE-normal but life-collapsed.", keyDifferentiator: "The psychosis question is about beliefs; bvFTD presents as conduct — the C9orf72 psychosis-like exception is the tree's clue, not the rule." },
    { condition: "Alcohol / substance personality change", distinguishingFeatures: "Collateral confirms zero intake — always verify before blaming 'he must be drinking'.", keyDifferentiator: "The Indian assumption that must be actively excluded: the family's alcohol narrative delays the MRI by a year." },
    { condition: "Early-onset Alzheimer's disease", distinguishingFeatures: "Memory-first phenotype; posterior-parietal atrophy pattern; disorientation early.", keyDifferentiator: "What is lost FIRST: FTD takes conduct and speech while the memory gate holds; Alzheimer's takes memory while conduct holds longer." },
  ],
  management: [
    { category: "psychotherapy", name: "The foundation: explain the conductor, remove the blame", description: "The first consultation task is to relabel: the person has not turned bad; the front of the brain that policed behaviour is ill. This single reframe prevents divorce proceedings, elder-abuse escalation and family excommunication. Written in the file, repeated at each visit, given to school-college-age children in words they can repeat ('the front of his brain is ill, like a leg that cannot walk').", whenToUse: "The day of diagnosis, and every visit thereafter — the relabelling IS the treatment's spine.", indianContext: "The wife is usually blamed ('she changed him'), the spending triggers property disputes, disinhibition becomes community gossip before consultation — early family psychoeducation with the conductor explanation is the Indian consultation's core deliverable." },
    { category: "lifestyle", name: "Behavioural management (the real pharmacology of bvFTD)", description: "Structure beats willpower: fixed daily routine with photographs and written schedules — the FTD brain runs on rails. Environment engineering: money out of reach (joint accounts, spending limits, UPI locks), kitchen sweets locked, wardrobe rotation, hygiene scheduled. Reduce audience and stimulation for disinhibited behaviour; redirect, never confront or argue (the frontal lobes that could accept an argument are the ones that are ill). Supervise food (hyperorality with weight gain needs it as surely as anorexia does); manage wandering with ID cards and locked doors early.", whenToUse: "From diagnosis, adjusted at every visit — the package that holds the household together.", indianContext: "UPI locks and joint accounts are 'a very Indian necessity now that phones are wallets'; traffic and open terraces make the ID card and locked-door step critical." },
    { category: "pharmacotherapy", name: "Medicines: modest, targeted, honest", description: "SSRIs (sertraline, escitalopram) are the pragmatic first line for disinhibition, irritability and compulsive-type behaviours — modest evidence, reasonable tolerability, titrate patiently. Trazodone as recognised second line for irritability and agitation (watch orthostasis). Low-dose quetiapine for dangerous agitation only, fixed review dates. NO cognition drug: acetylcholinesterase inhibitors have NO evidence of benefit in FTD (cholinergic systems are relatively spared) and some patients worsen on them — the Indian prescribing reflex worth unlearning. Treat pain, constipation, sleep and hearing, the same trigger-first logic as all dementias.", whenToUse: "When specific behaviours demand pharmacology — never as a substitute for structure and environment.", indianContext: "The affordable essentials: sertraline ₹50–150/month generic (approx 2026), trazodone where available, and the free infrastructure — routine, locks, ID card, family roster; MRI ₹2,000–8,000 and FDG-PET ₹15,000–30,000 are the diagnostic expenses (approx, varying)." },
    { category: "psychotherapy", name: "Language variants: the speech therapist's hour", description: "Early referral to speech-language therapy: pacing boards, sentence starters, word books; family training in yes/no scaffolding and patience-centred turn-taking. Semantic-variant families build a visual dictionary (labelled photo albums of relatives, foods, objects) to route around the melted word-meanings. Bank the voice early if MND overlap is suspected — recording speech before it changes further is emotionally priceless later.", whenToUse: "From the language-variant diagnosis — the therapy tier IS the disease management for these doors.", indianContext: "The visual dictionary is the Indian family's home-built prosthesis: labelled photo albums in the mother tongue, built while word meanings remain." },
    { category: "lifestyle", name: "Legal, financial and vocational planning: the early-and-urgent work", description: "While comprehension remains: employment exit strategy (medical board, disability documentation), property and nomination planning, guardianship preparedness under the Mental Healthcare Act 2017 framework, honest conversations with adult children. This is more urgent in FTD than in any other dementia because onset is midlife: school fees, loans and the earning decade are all still in play.", whenToUse: "The first month of a confirmed diagnosis — the window is measured in months, not years.", indianContext: "The employer letter in one line: 'This is a neurodegenerative illness like any other brain disease, not misconduct' — a treating doctor's letter prevents termination-for-cause and unlocks medical benefits; disability certification for dementia exists through the government pathway (NIMHANS and state medical boards; initiate early because processing takes months)." },
  ],
  safety: {
    redFlags: [
      "New careless spending or gambling in a midlife patient — the joint account, spending limits and UPI locks installed the same week",
      "Disinhibition across all social settings with preserved memory — bvFTD until proven otherwise; do not settle for the character explanation",
      "Two failed antidepressant trials in 'depression without sadness' — a diagnostic alarm, not a treatment escalation",
      "Weight GAIN with sweet craving and food-grabbing — the hyperorality signature (against every depressive and Alzheimer's expectation)",
      "Dropped objects, weak grip, slurred speech or breathlessness at any point — the MND screen turning positive: EMG and neurology now, prognosis reframed",
      "Inappropriate behaviour at home with small children — protect first, explain second: supervision plans and simple honest words",
    ],
    urgentGuidance:
      "The order of operations: (1) the relabelling consultation — remove the blame, name the frontal illness, write it in the file; (2) the same-week safety tier — money out of reach, kitchen locks, ID card, employment letter; (3) the work-up that earns the label — private collateral history, frontal-weighted testing, MRI/FDG-PET, the rule-out battery (HIV and syphilis in every younger behaviour change); (4) the MND screen at every visit — four questions, thirty seconds; (5) the family tree drawn on paper — young dementia, MND, 'psychiatric' deaths marked; tertiary referral only for loaded trees, never direct-to-test; (6) the caregiver architecture — respite prescribed in words, siblings' rosters, permission to be disliked without guilt.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The pragmatic SSRI first line for bvFTD behaviours",
      rationale: "For disinhibition, irritability and compulsive-type behaviours: modest evidence, reasonable tolerability, titrated patiently — the pharmacological tier of a management plan whose real engine is structure and environment. The KYP lesson carries the full prescribing detail behind this modest, honest framing.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Modest-effect tier: the SSRI softens target behaviours in a fraction of patients; it treats no dementia and replaces no environmental engineering.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The alternative SSRI of the same pragmatic tier",
      rationale: "The second member of the SSRI tier used for the same target behaviours when sertraline is not tolerated or the comorbidity profile favours it — same modest framing, same position in the plan: after structure, before antipsychotics.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Same honest tier as sertraline: a behaviour-targeted adjunct, not a disease treatment.",
    },
  ],
  contentGaps: [
    "Trazodone (the recognised second line for irritability and agitation in bvFTD) has no KYP drug lesson — its evidence is taught here, the route never invented.",
    "Low-dose quetiapine for dangerous agitation (the fixed-review-date tier) has no KYP lesson.",
    "Speech-language therapy, pacing boards and the visual-dictionary method have no standalone KYP skills modules — the architecture lives in this course.",
    "The FTD-MND co-management tier ( riluzole and the ALS pharmacology) has no KYP lessons — recorded, never invented.",
    "The anti-reflex teaching: cholinesterase inhibitors have no role in FTD — the drugs that are NOT indicated, documented so no future reader mistakes the omission.",
  ],
  patientGuide: {
    whatIsIt:
      "Frontotemporal dementia is a younger-onset dementia that attacks the front of the brain first — the part that polices behaviour, reads other people's feelings and holds language. So the first changes are in PERSONALITY, CONDUCT and SPEECH, not memory: a previously careful person becomes tactless or careless with money; a warm person stops asking after family; a fluent speaker's words empty of meaning. It typically begins between 45 and 65, making it one of the commonest causes of young-onset dementia. It is not 'a midlife crisis', not madness, and not the person's choice — nothing has been added to the person; something restraining has been subtracted.",
    whatCausesIt:
      "Two abnormal proteins (tau and TDP-43) build up in the frontal and temporal lobes and slowly shrink them — often starting on the right side. In roughly a third to two-fifths of families the disease runs in the family tree (the strongest familial signal of any common dementia); in some patients the same protein process later reaches the motor nerves of the spinal cord (the ALS overlap), which changes the outlook. Stress, menopause, finances and 'bad company' do not cause it — families blame these because the real cause is invisible on the scans nobody ordered.",
    symptoms:
      "The behavioural signs: tactless remarks or overfamiliarity, careless spending or new gambling, sweet-and-carbohydrate craving with WEIGHT GAIN, eating from others' plates, rigid daily rituals and repeated jokes, neglect of bathing and dressing, and — the wound families grieve most — a loss of warmth and empathy while memory stays intact. The language doors: speech that stays fluent and grammatical but empties of word meanings (calling everything 'that thing'), or effortful, telegraphic, ungrammatical speech. The alarm to know: any sudden worsening is usually a separate treatable delirium, not this disease.",
    treatment:
      "There is no disease-modifying medicine yet. What helps is real: the relabelling (the person has an illness, not a bad character), a fixed daily routine the FTD brain runs on, money put out of reach, food supervised, an ID card early, speech therapy and a photo-dictionary for the language variants, and modest targeted medicines (an SSRI for disinhibition or irritability; careful, short-term sedation only when danger demands). The Alzheimer's memory medicines do NOT help here and can make behaviour worse. The family package — caregiver roster, respite, legal and employment planning done early — is the treatment.",
    selfHelp: [
      "Relabel first, at every family gathering that needs it: 'the front of his brain is ill — like a leg that cannot walk'.",
      "Build the rails: the same wake, meals, walk and sleep times daily, with photographs and written schedules — structure beats willpower because the conductor is gone.",
      "Take the money out of reach the same week: joint accounts, spending limits, UPI locks — the phone is now the wallet.",
      "Lock the kitchen sweets and pre-portion the treats; expect weight gain, and supervise food as seriously as anorexia's families must.",
      "Redirect, never argue: the frontal lobes that could accept an argument are the ones that are ill.",
      "ID card with address and phone from the first wandering risk — traffic and open terraces make this critical in India.",
      "For language loss: yes/no questions, patience-centred turn-taking, and a labelled photo-album dictionary built while word meanings remain.",
      "The caregiver's own care: respite prescribed in words, siblings' rosters, and permission to be disliked by the patient without guilt — the behaviour, not the dependency, is the burden.",
    ],
    whenToSeekHelp: [
      "Midlife personality or behaviour change across ALL social settings with memory intact — ask for the FTD work-up, not another antidepressant trial",
      "Two failed antidepressant trials in 'depression without sadness' — the diagnostic alarm",
      "New careless spending, gambling or public impropriety — the same-week money and safety engineering plus the consultation",
      "Speech becoming empty ('that thing'), effortful or telegraphic — the speech-therapy referral now, the dictionary-building now",
      "Dropped objects, weak grip, slurring or breathlessness at any point — the motor-overlap screen: same-week neurology",
      "Any sudden worsening — delirium rules (urine, salts, infection) before blaming the dementia",
      "The caregiver's own exhaustion, depression or isolation — as urgent as the patient's symptoms",
    ],
    indianResources: [
      "The treating psychiatrist as the front line — Indian FTD usually arrives via failed antidepressant trials; the relabelling consultation is the service",
      "Disability certification for dementia through the government pathway (NIMHANS and state medical boards) — initiate early, processing takes months",
      "The employer letter: 'a neurodegenerative illness, not misconduct' — converts disciplinary cases into medical exits with benefits",
      "Tele-MANAS 14416 (24×7, free) — for the caregiver's distress and family routing",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific FTD guideline exists; practice follows the international consensus architecture (Rascovsky 2011 bvFTD criteria, Gorno-Tempini PPA classification, DSM-5/ICD-11 frontotemporal neurocognitive disorder framing) with Indian adaptation craft: the family-tree-first genetic approach, the employment-letter tier, and the disability certification pathway.",
    systemContext: "Who actually makes the diagnosis: usually the psychiatrist (after failed antidepressant trials), occasionally the neurologist (after an EMG or a seizure), rarely the family physician. Psychiatrists seeing midlife 'personality change' should hold FTD in the front of the differential — this single habit is the highest-yield change Indian psychiatry could make to young-onset dementia. Families attribute midlife behaviour change to stress, finances, 'bad company', or the spouse ('she changed him'); disinhibition at family functions becomes community gossip before it becomes a consultation.",
    programmeContext: "Young-onset dementia is doubly invisible: no systematic national prevalence, metro memory-clinic series reporting 2–4-year diagnostic delays with failed antidepressant trials and marital or employment breakdown in the wake. Disability certification for dementia (including young-onset) exists through the government pathway (NIMHANS and state medical boards) — worth initiating early because processing takes months. Day-care for young-onset behaviour disturbance barely exists; paid male attendants are hard to find for hygienic care; respite is the scarcest resource — the treating team should prescribe it in words.",
    costConsiderations: "The affordable essentials: sertraline ₹50–150/month generic (approx 2026), trazodone where available, and the free infrastructure — routine, locks, ID card, family roster. The diagnostic expenses: MRI ₹2,000–8,000 and FDG-PET ₹15,000–30,000 in metros (approx, varying) — both often avoidable or deferrable in textbook-clear behavioural cases with a family history, but decisive in the courtship-of-mimics cases where 'MRI-normal' is read as 'brain-normal' by families and insurers alike.",
    culturalConsiderations: "The blame tier is the Indian terrain: the wife blamed through in-law narratives, the husband's spending triggering property disputes, the alcohol assumption ('he must be drinking') — every one delays the MRI by a year, and removing the blame is part of the treatment. The genetic counselling infrastructure is thin and private-sector dependent: the practical Indian package is the three-generation tree drawn in the file, early dementia / MND / 'psychiatric' deaths marked, counselling about the pattern, and referral of only the loaded trees for mutation testing with pre-test counselling — never direct-to-test, never a home kit.",
    patientCounselling: [
      "The conductor script for the family conference: 'Nothing has been added to him; something restraining has been subtracted — the front of the brain that policed behaviour is ill' — the single reframe that prevents divorce proceedings, elder-abuse escalation and family excommunication.",
      "The children's version, in words they can repeat: 'the front of his brain is ill, like a leg that cannot walk' — protection first, explanation second, scheduled one-to-one time so affection survives the behaviour.",
      "The employer letter: 'This is a neurodegenerative illness like any other brain disease, not misconduct' — converts a disciplinary case into a medical exit with leave benefits and dignity, done early while the paperwork is still in the office's hands.",
      "The medication honesty: 'The memory medicines do not work for this disease and can make behaviour worse; what works is structure, safety, your understanding, and a targeted medicine when specific behaviours demand it.'",
      "The genetic conversation for the asking children: 'In some families yes, in most no — the signal to act on is relatives with similar early dementia, motor neuron disease, or young-onset psychiatric illness; we map the tree on paper and refer only the loaded families, never a direct home test.'",
      "The MND screen taught to the family itself: 'At every visit we ask four questions — dropped objects, grip, slurring, breathlessness; tell us between visits if any appears.'",
      "The caregiver's permission: 'You will be disliked, and it will not be his fault or yours; your respite is a prescription, not an indulgence.'",
    ],
  },
  decisionPath: {
    title: "The midlife personality change consultation",
    nodes: [
      {
        id: "start",
        question: "A 45–65-year-old is brought (or referred) for 'personality change', 'depression not responding', or 'inappropriate behaviour'. What changed FIRST?",
        branches: [
          { label: "Conduct: disinhibition, apathy, empathy loss, rituals, eating", next: "bvftd-gate" },
          { label: "Language: empty fluent speech OR effortful telegraphic speech", next: "language-gate" },
          { label: "Memory and orientation first", next: "alzheimers-path" },
          { label: "Sudden change over hours-days", next: "delirium-gate" },
        ],
      },
      {
        id: "delirium-gate",
        question: "Sudden change on any background = delirium until proven otherwise.",
        recommendation: "The full delirium work-up (see the Delirium course): urine, sodium, infection, drug chart — treat the cause; the dementia question re-baselines after.",
      },
      {
        id: "bvftd-gate",
        question: "Run the six-cluster checklist against the collateral inventory (taken PRIVATELY from spouse and children).",
        branches: [
          { label: "Three or more clusters + functional decline", next: "mimic-gate" },
          { label: "Fewer clusters, or single-domain complaints", next: "watch-path" },
        ],
      },
      {
        id: "mimic-gate",
        question: "Psychiatry's department: exclude the mimics before naming the dementia.",
        branches: [
          { label: "Depression? No sadness/guilt, weight GAIN, empathy absent, two failed SSRIs", next: "ftd-workup" },
          { label: "Mania? No sleeplessness, no quickening, flat-rewarded behaviour", next: "ftd-workup" },
          { label: "OCD? Rituals unresisted, unsought, adult-onset, egosyntonic", next: "ftd-workup" },
          { label: "Alcohol? Collateral confirms zero intake — the assumption verified", next: "ftd-workup" },
          { label: "Neurosyphilis / HIV / autoimmune / subdural / steroid-or-dopamine hypomania", next: "ruleout-path" },
        ],
      },
      {
        id: "ftd-workup",
        question: "The FTD work-up: collateral (80%), frontal-weighted testing, imaging, MND screen.",
        recommendation: "Private collateral inventory; frontal tasks (inhibition/switching, similarities, proverbs, go/no-go, Luria, timed fluency — a normal MMSE NEVER excludes FTD); MRI for frontal/anterior-temporal atrophy (knife-blade in semantic variant); FDG-PET when MRI looks near-normal and the story is textbook; the four MND questions; the three-generation family tree drawn on paper.",
      },
      {
        id: "ruleout-path",
        question: "The treatable mimics: cheap tests, classic misses.",
        recommendation: "HIV and syphilis serology in EVERY younger behaviour change; thyroid and B12 as in any dementia; MRI for masses and hydrocephalus; autoimmune encephalitis and neurosyphilis in rapid or atypical courses; the medication review (steroids, benzodiazepines, dopamine drugs can caricature disinhibition) — treat what is found, re-assess what remains.",
      },
      {
        id: "language-gate",
        question: "Which language door — and is it really FTD?",
        branches: [
          { label: "Fluent, grammatical, empty; word-meanings lost; 'colonel' as 'kolonel'", next: "semantic-path" },
          { label: "Effortful, telegraphic, agrammatic; word-meaning survives", next: "nonfluent-path" },
          { label: "Word-finding pauses, repetition impaired — LOGOPENIC", next: "logopenic-path" },
        ],
      },
      {
        id: "semantic-path",
        question: "Semantic-variant PPA (the melting dictionary).",
        recommendation: "Anterior temporal (knife-blade) atrophy, often left-worse; behavioural companions (coldness, sweet rigidity, collections); speech therapy plus the visual dictionary built early; slower course — pace the family honestly.",
      },
      {
        id: "nonfluent-path",
        question: "Nonfluent/agrammatic variant.",
        recommendation: "Left inferior frontal-insular atrophy; watch for asymmetric parkinsonism and the CBS/PSP cousins (4-repeat tau family); speech therapy and communication scaffolding; progression to a broader four-limb syndrome surveilled.",
      },
      {
        id: "logopenic-path",
        question: "The trick variant: logopenic PPA points to ALZHEIMER'S.",
        recommendation: "Pauses for word-finding with impaired repetition — the Alzheimer's-pathology variant of PPA: redirect the work-up accordingly (the classic 'third variant' exam question).",
      },
      {
        id: "alzheimers-path",
        question: "Memory-first in midlife: the early-onset Alzheimer's route.",
        recommendation: "See the Alzheimer's course: posterior-parietal pattern, disorientation early, the cholinergic tier that WORKS there (and only there) — the variant map's other half.",
      },
      {
        id: "watch-path",
        question: "Fewer clusters, early or ambiguous: the disciplined wait.",
        recommendation: "Document the inventory, repeat testing in 6–12 months, MRI again in a year if still ambiguous (a normal early scan does not exclude disease), screen MND questions at every visit — and keep the family inside the follow-up so the pattern, when it declares, meets a prepared clinician.",
      },
      {
        id: "management-gate",
        question: "Confirmed FTD. The package, by door:",
        branches: [
          { label: "Behavioural variant", next: "bvftd-package" },
          { label: "Language variant", next: "language-package" },
          { label: "MND overlap declared", next: "mnd-package" },
        ],
      },
      {
        id: "bvftd-package",
        question: "Structure, safety, modest pharmacology.",
        recommendation: "The relabelling conference; the rails (fixed routine, photographs, schedules); money out of reach (joint accounts, UPI locks); kitchen locks and food supervision; ID card and locked doors; SSRI tier for target behaviours (sertraline, titrated patiently); quetiapine low-dose only for danger, fixed review dates; NO cholinesterase inhibitors — the reflex to unlearn; caregiver architecture with respite prescribed in words.",
      },
      {
        id: "language-package",
        question: "The speech therapist's hour.",
        recommendation: "Early speech-language referral (pacing boards, sentence starters, word books); family yes/no scaffolding training; the visual dictionary for semantic variant; voice-banking early if MND is suspected — recording speech before it changes is emotionally priceless later.",
      },
      {
        id: "mnd-package",
        question: "One protein, two windows: the reframed conversation.",
        recommendation: "Neurology co-management; swallow and breathing surveillance; seating and positioning equipment; early palliative-care conversation; caregiver counselling shifted to prognosis pacing — and the family told out loud that the behaviour and the muscle disease are ONE illness, not two.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating bvFTD apathy as depression through two antidepressant trials",
      why: "The commonest Indian pathway to the diagnosis: 'depression without sadness' that fails SSRIs repeatedly while the family disintegrates — each trial is another six months of the wrong story.",
      correction: "Two failed antidepressant trials in midlife behavioural change = a diagnostic alarm, not an escalation: the six-cluster inventory and the frontal-weighted exam NOW.",
    },
    {
      mistake: "Diagnosing mania without the gates",
      why: "Released behaviour superficially mimics mania — but the manic patient sleeps three hours and speeds contagiously; the bvFTD patient sleeps normally and offends at a flat, unrewarded pitch.",
      correction: "The three gates before the label: sleep (decreased or not), psychomotor quickening (present or not), grandiose plans (present or not) — all three fail in bvFTD.",
    },
    {
      mistake: "Believing a normal MRI (and a normal memory screen) excludes disease",
      why: "The double negative that traps midlife cases: MMSE-normal ('she scored 28!') plus MRI-normal ('brain is normal') — while the frontal atrophy is still too subtle for either test and the life collapses around both.",
      correction: "Frontal-weighted testing (the exam that CAN catch it) plus FDG-PET when MRI is near-normal and the story is textbook — or repeat MRI in a year; 'passes simple memory screens, fails life' is the course's one-line answer.",
    },
    {
      mistake: "Prescribing cholinesterase inhibitors by reflex",
      why: "The Indian prescribing reflex carried over from Alzheimer's — but the cholinergic systems are relatively spared in FTD: nothing to act on, and some patients WORSEN on them.",
      correction: "The anti-reflex taught at every level: no donepezil in FTD; the plan is structure, environment, caregiver architecture and modest targeted pharmacology.",
    },
    {
      mistake: "Missing the treatable mimics in younger behaviour change",
      why: "Neurosyphilis, HIV, autoimmune encephalitis, chronic subdural and steroid-or-dopamine hypomania are cheap to test and classic to miss — each missed mimic costs the patient a treatable disease and the family years.",
      correction: "The rule-out battery in every younger behaviour change: HIV and syphilis serology, thyroid and B12, MRI for masses, the medication review — plus the substance and sleep history taken privately.",
    },
    {
      mistake: "Blaming the spouse, the stress or the bottle",
      why: "The Indian blaming tier ('she changed him', 'he must be drinking', 'job stress') is the diagnosis's longest delay — the attribution is culturally available and the MRI is not.",
      correction: "The clinical task stated as policy: verify the alcohol assumption with collateral BEFORE carrying it; remove the blame explicitly in the family conference; re-attach the change to the brain.",
    },
    {
      mistake: "Never joining the behaviour and the muscle disease",
      why: "The FTD-MND overlap is under-appreciated in India: neurology manages the ALS, psychiatry the behaviour, and the family is never told it is one disease — surveillance, prognosis planning and palliative timing all suffer.",
      correction: "The four questions at EVERY FTD visit (dropped objects, grip, slurring, breathlessness); when positive: EMG, co-management, and the one-illness sentence said out loud to the family.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The six bvFTD clusters as a checklist: disinhibition, apathy, empathy loss, perseveration/compulsion, hyperorality, executive decline.",
        "Why a normal MMSE never excludes FTD — and the five frontal-weighted tasks you would add instead.",
        "Semantic vs nonfluent vs logopenic PPA: which variant points to Alzheimer's (the classic trick question).",
        "The FTD-MND-ALS triangle and C9orf72 — the gene that causes both in one family.",
        "'Pick's disease' nomenclature: a pathological, not clinical, label.",
      ],
      practical: [
        "Take the private collateral inventory (manners, money, food, empathy, rituals, hygiene) and present the six-cluster formulation.",
        "Demonstrate the two-minute frontal exam: similarities, proverbs, go/no-go, Luria sequences, utilisation/imitation behaviour.",
      ],
      longAnswer: [
        "A 54-year-old with three years of personality change, careless spending and preserved memory: differential diagnosis and management (the evergreen midlife vignette).",
        "Primary progressive aphasia: classification and bedside distinction of the variants.",
      ],
    },
    neetPg: {
      highYield: [
        "FTD = personality/behaviour/language FIRST, memory preserved, onset 45–65 — a commonest young-onset dementia; a normal memory screen NEVER excludes it.",
        "The six bvFTD clusters (Rascovsky): disinhibition, apathy, loss of empathy, perseverative/compulsive, hyperorality, utilisation/executive — 3 or more + decline = possible; imaging/genetic marker = probable.",
        "Hyperorality = sweet craving with WEIGHT GAIN (vs depression's loss, vs Alzheimer's late anorexia) — the reliable early sign.",
        "Semantic variant: fluent-empty speech + lost word meanings + intact repetition + surface dyslexia ('colonel' as 'kolonel'); nonfluent variant: effortful agrammatic telegraphic speech; LOGOPENIC variant = Alzheimer's pathology (the trick).",
        "The two proteins: tau (MAPT families, Pick's pathology) and TDP-43 (GRN and C9orf72 families); C9orf72 causes FTD AND ALS in one kindred.",
        "FTD-MND overlap: shortest survival fork (2–5 years); screen with four questions — dropped objects, grip weakness, slurred speech, breathlessness.",
        "NO cholinesterase inhibitor benefit in FTD (cholinergic systems relatively spared; some worsen) — the anti-reflex examiners love.",
        "Utilisation behaviour and environmental dependency (imitation) — the classical frontal release signs of the bedside exam.",
        "MRI: frontal/anterior-temporal atrophy, often asymmetric, knife-blade anterior temporal in semantic variant; FDG-PET frontal/anterior-temporal hypometabolism when MRI is subtle.",
        "Caregiver burden EXCEEDS Alzheimer's at matched severity — behaviour, not dependency, is the burden.",
        "PSP (vertical gaze palsy, axial rigidity) and corticobasal syndrome (alien limb, apraxia) are 4-repeat-tau cousins — 'FTD spectrum' as the short note.",
        "Familial burden 30–40% — the strongest of any common dementia; onset under 60 with a loaded tree (dementia + MND + early 'psychiatric' deaths) triggers counselling-driven genetics.",
      ],
      pyqConcepts: [
        "Surface dyslexia as the semantic-variant pearl.",
        "The 'test paradox': MMSE-normal but life-collapsed.",
        "BvFTD apathy vs depression: indifferent vs painful.",
        "Midlife 'personality change' as the Indian long-question favourite — the differential that includes neurosyphilis, HIV and hypothyroid psychosis.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 54-year-old bank branch manager: three years of public teasing of a junior colleague, ₹6 lakh of online impulse purchases, eating from colleagues' tiffins, two traffic challans for roadside urination, and total silence about his mother's hospitalisation; two psychiatrists had treated depression (two failed SSRI courses); the marriage was in mediation; examination: memory intact (he recalled the entire interview outline), naming fluent, but card-sorting collapsed at the rule-switch, the proverb interpreted literally, and the examiner's hand-movements imitated without being asked; MRI: right-frontal-predominant atrophy — the relabelling conference, the UPI limits and spending control installed, sertraline softening the disinhibition, the wife joining a caregiver group: six more years at home and the mediation closed.",
        "A 61-year-old retired schoolteacher whose daughter noticed 'that thing' replacing the pressure cooker, the neem tree and her own spectacles: speech fluent and grammatical, long sentences repeated verbatim, but 'camel' and 'temple bell' undefinable two years on; biscuit wrappers collected in a locked cupboard, 8 kg weight gain on sweet craving; naming, low-frequency word comprehension and famous-face tasks failed; MRI: knife-blade anterior temporal atrophy, left worse — the visual dictionary built, yes/no scaffolding trained, surface dyslexia confirmed ('kolonel'); four years later still pottering in her kitchen, fully ambulant, conversation reduced but warm.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The commonest young-onset dementia presentation: behaviour or language first with preserved memory.",
        "Weight gain with sweet craving = hyperorality of bvFTD.",
        "C9orf72: the FTD + ALS gene.",
        "No role for cholinesterase inhibitors in FTD.",
        "Utilisation behaviour = frontal release sign.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The consultation's real deliverable is the relabelling: 'he has not become a terrible person; the front of the brain that policed behaviour is ill' — one sentence that prevents divorce proceedings, elder abuse and family excommunication; write it in the file and repeat it.",
        "The psychiatrist is the front line of Indian FTD detection: hold it in the front of the differential for every midlife 'personality change' and every 'depression' that fails two antidepressant trials without sadness.",
        "The caregiver architecture is disease management: bvFTD caregivers carry higher distress than Alzheimer's caregivers at matched severity — respite prescribed in words, siblings' rosters, and explicit permission to be disliked without guilt.",
        "The employment intervention: the one-line doctor's letter ('a neurodegenerative illness, not misconduct') converts termination-for-cause into medical exit with benefits — among the highest-impact single paragraphs a psychiatrist writes.",
        "The genetic discipline for Indian practice: the three-generation tree drawn in the file beats the direct-to-test reflex; refer only loaded trees, with pre-test counselling, and never test an unaffected relative without formal process.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The manager the family nearly divorced",
      presentation: "Three years of 'character change' — public teasing, ₹6 lakh of impulse purchases, eating from colleagues' tiffins — and a marriage in mediation.",
      initialPresentation: "A 54-year-old bank branch manager was brought by his wife to a psychiatry OPD after two prior psychiatric consultations for 'depression' (two failed SSRI courses). Over three years he had developed public teasing of a junior colleague, ₹6 lakh of online impulse purchases, eating from colleagues' tiffin boxes, two traffic challans for urinating by the roadside, and total silence about his mother's hospitalisation. The marriage was headed to mediation; the in-law narrative was 'she changed him'.",
      history: "Onset around age 51 with subtly reduced initiative and off-colour jokes; progression across ALL social settings (office, functions, roadside); memory explicitly intact per the family ('he remembers everything, unfortunately'); sleep normal; appetite INCREASED with sweet craving; no sadness, guilt or tearfulness; no psychomotor quickening; alcohol denied and verified with collateral; no prior psychiatric history before 51.",
      examination: "Memory intact (he recalled the entire interview outline later); naming fluent; frontal tasks collapsed — sorted cards by one rule and could not switch, interpreted 'people in glass houses...' literally, imitated the examiner's hand-movements without being asked (utilisation/imitation pattern); MMSE-style score unremarkable (the test paradox); fundi and neurology otherwise normal.",
      diagnosis: "Behavioural-variant frontotemporal dementia, probable (six-cluster clinical picture + right-frontal-predominant atrophy on MRI).",
      management: "The relabelling family conference (the conductor explanation, written in the file); spending control with joint accounts and UPI limits installed the same week; fixed daily routine with written schedules; sertraline titrated for the disinhibition; the wife joined a caregiver group; ID card issued early.",
      outcome: "The disinhibition softened on the SSRI-plus-structure package; he remained at home for six more years; the divorce mediation was closed — the consultation's deliverable was the relabelling, and the family reorganised around the illness instead of against the person.",
      teachingPoints: [
        "Midlife 'character change' across ALL social settings + intact memory = frontal until proven otherwise.",
        "Two failed antidepressant trials in 'depression without sadness' is a diagnostic alarm, not an escalation.",
        "Utilisation behaviour and proverb-literalism are two-minute frontal exams — and the collateral inventory is the scan that catches what MMSE misses.",
      ],
    },
    {
      title: "The melting dictionary",
      presentation: "A retired schoolteacher began calling everything 'that thing' — the pressure cooker, the neem tree, her own spectacles.",
      initialPresentation: "A 61-year-old retired schoolteacher was brought by her daughter for 'forgetting words'. Over two years she had come to call objects 'that thing' — the pressure cooker, the neem tree, her own spectacles — while her speech stayed fluent and grammatical and she could still repeat long sentences verbatim. More recently she could not say what a 'camel' or a 'temple bell' was, though she used them appropriately when handed pictures; she had begun collecting biscuit wrappers in a locked cupboard, and sweet craving had driven 8 kg of weight gain.",
      history: "Insidious onset around 59 with word-finding complaints only the daughter noticed; no behavioural disinhibition, no apathy, no mood syndrome; social warmth preserved in the early years; daily functioning managed with family scaffolding; no vascular risk factors; no family history of dementia or MND.",
      examination: "Naming severely impaired; low-frequency word comprehension impaired; famous-face tasks failed; repetition INTACT (long sentences verbatim); grammar and fluency preserved; surface dyslexia present — irregular words read by sound ('colonel' as 'kolonel'); neurological exam otherwise normal including motor screen; MRI: knife-blade anterior temporal atrophy, left worse than right.",
      diagnosis: "Semantic-variant primary progressive aphasia (semantic dementia) — the melting dictionary with its behavioural companions (collections, sweet rigidity, coldness of the temporal-right-dominant type emerging).",
      management: "Early speech-language therapy referral with family training in yes/no scaffolding and patience-centred turn-taking; the visual dictionary built (labelled photo albums of relatives, foods, objects in the mother tongue); weight management with pre-portioned sweets; MND screen negative at every visit; honest pacing of the slower language-variant course with the family.",
      outcome: "Four years later: still pottering in her kitchen, fully ambulant, conversation reduced but warm — the dictionary melted but the person's warmth persisted far longer than the words.",
      teachingPoints: [
        "Fluent empty speech + lost word meanings + intact repetition = the semantic-variant triad.",
        "Surface dyslexia ('colonel' read as 'kolonel') is the pearl; collections and sweet craving are the behavioural companions of the temporal-dominant type.",
        "Language variants run slower courses than the behavioural variant — pacing the family honestly IS the management.",
      ],
    },
  ],
  clinicalPearls: [
    "In midlife personality change, the memory test is irrelevant and the spouse's history is the scan — the sentence to rehearse.",
    "The six clusters as a checklist: disinhibition, apathy, empathy loss, perseveration/compulsion, hyperorality, executive decline — three or more plus decline = possible bvFTD.",
    "Nothing has been added to the person; something restraining has been subtracted — the conductor explanation that does more therapeutic work than any prescription.",
    "Onset 45–65; one of the commonest young-onset dementias; familial burden 30–40% — the strongest of any common dementia.",
    "A normal MMSE never excludes FTD: passes simple memory screens, fails life — frontal-weighted tasks are the exam that catches it.",
    "Weight GAIN with sweet craving and food-grabbing — against depression's loss and Alzheimer's late anorexia.",
    "Apathy is indifferent; depression is painful — and antidepressants do nothing for FTD apathy.",
    "The bvFTD-mania gate: no sleeplessness, no quickening, no contagious euphoria — released behaviour at a flat, unrewarded pitch.",
    "The mimic that must be actively excluded in India: the alcohol assumption — collateral BEFORE the blame.",
    "Semantic variant: fluent-empty, word-meanings lost, repetition intact, surface dyslexia; nonfluent: effortful, telegraphic, agrammatic; LOGOPENIC = Alzheimer's (the trick).",
    "Tau (MAPT families) vs TDP-43 (GRN, C9orf72 families); C9orf72 causes FTD AND ALS in one kindred — the overlap that reframes prognosis to 2–5 years.",
    "Four questions at every visit: dropped objects, weak grip, slurred speech, breathlessness — the MND screen.",
    "No cholinesterase inhibitor in FTD — cholinergic systems are relatively spared and patients can WORSEN: the anti-reflex.",
    "The real pharmacology of bvFTD is structure: the rails, the money out of reach, the kitchen locks, the ID card — plus modest SSRIs for target behaviours.",
    "Caregiver burden exceeds Alzheimer's at matched severity — behaviour, not dependency, is the burden; prescribe respite in words.",
    "The Indian tier: the psychiatrist as front line, the employment letter that converts misconduct charges into medical exits, the disability certification initiated early, the family tree drawn on paper before any genetic test.",
  ],
  highYieldSummary: [
    "Definition and doors: FTD = a younger-onset (45–65) dementia family attacking frontal and temporal lobes first — the behavioural door (bvFTD, commonest: the six clusters) or the language door (semantic variant: fluent-empty with lost word-meanings; nonfluent/agrammatic: effortful telegraphic; logopenic belongs to Alzheimer's).",
    "Epidemiology: comparable to early-onset Alzheimer's in the 45–64 band (leading or second in young-onset series); familial burden 30–40% (strongest of any common dementia); survival 7–13 years on average — the FTD-MND fork may compress to 2–5 years, language variants often exceed a decade.",
    "Mechanism: the conductor retires (frontal inhibition, sequencing, social monitoring, empathy — released not added behaviour, often right-first); the dictionary melts (anterior temporal concept-hubs — word meanings, object knowledge, person-knowledge); one protein two windows (TDP-43 in cortex AND motor neurons — the FTD-MND overlap).",
    "Genetics: tau-inclusion families carry MAPT (chromosome 17, early personality change, sometimes parkinsonism); TDP-43 families carry GRN (asymmetric, parietal-touching) or C9orf72 (FTD + ALS + late-onset psychosis-like pictures); sporadic majority have no identified mutation; the act-on signal = onset under 60 with a tree of young dementia, MND or early 'psychiatric' deaths.",
    "Diagnosis: private collateral history is 80% (the inventory of change: manners, money, food, empathy, rituals, hygiene); frontal-weighted testing (inhibition/switching, similarities, proverbs, go/no-go, Luria, timed fluency) — MMSE-normal NEVER excludes; MRI frontal/anterior-temporal (knife-blade) atrophy, FDG-PET when subtle; rule-out battery (HIV, syphilis, thyroid, B12, MRI masses, autoimmune encephalitis, medication review); EMG/MND surveillance; counselling-driven genetics for loaded trees only.",
    "The differential is psychiatry's department: depression (no sadness, weight gain, empathy absent, SSRIs fail), mania (no sleeplessness/quickening), OCD (egosyntonic unresisted adult-onset rituals), marital/character (progressive, cross-setting), late-onset psychosis (release-pattern not delusion), alcohol (verify with collateral), early Alzheimer's (memory-first, posterior-parietal).",
    "Management: the relabelling conference (remove the blame — the treatment's spine); structure beats willpower (fixed rails, photographs, schedules); environment engineering (joint accounts, UPI locks, kitchen locks, ID card, locked doors); redirect never argue; SSRI tier (sertraline, escitalopram) for disinhibition/irritability/compulsions; trazodone second line; low-dose quetiapine only for danger with fixed review; NO cholinesterase inhibitors; speech therapy + visual dictionary + voice-banking for language variants and suspected MND.",
    "The legal-employment tier (more urgent than in any other dementia — midlife onset): employment exit with the doctor's letter ('neurodegenerative illness, not misconduct'), disability certification initiated early (government pathway, months of processing), property and nomination planning, guardianship preparedness under the MHA 2017 framework.",
    "The MND discipline: four screening questions at every visit; when positive — EMG, neurology co-management, swallow and breathing surveillance, positioning equipment, early palliative conversation, and the one-disease sentence said out loud to a family that has been managing two clinics' worth of fragmentation.",
    "The Indian tier: doubly invisible young-onset dementia; the blaming tier ('she changed him', 'he must be drinking', job stress) delaying the MRI by years; the psychiatrist as detection front line (post-failed-antidepressant presentations); metro memory-clinic series showing 2–4-year delays; the caregiver's midlife burden (jobs, school-going children, no respite tier); the affordable essentials (sertraline ₹50–150/month, the free infrastructure of routine and locks); the employment letter as the highest-impact paragraph.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ftd-quiz-1",
      question: "A 56-year-old with 3 years of disinhibition, sweet-food craving with weight gain, apathy and preserved memory recall. The most likely diagnosis is:",
      options: ["Major depression", "Alzheimer's disease", "Behavioural-variant frontotemporal dementia", "Bipolar mania"],
      correctIndex: 2,
      explanation: "The six-cluster pattern with weight GAIN and intact memory is the bvFTD signature; depression and mania both fail key gates (sadness; sleeplessness and quickening).",
      afterSectionId: "symptoms",
    },
    {
      id: "ftd-quiz-2",
      question: "Fluent speech with emptied word-meanings, intact repetition, and reading 'colonel' as 'kolonel' indicates:",
      options: ["Nonfluent/agrammatic variant", "Logopenic variant", "Semantic-variant primary progressive aphasia", "Broca's aphasia post-stroke"],
      correctIndex: 2,
      explanation: "The fluent-empty pattern plus surface dyslexia is the semantic variant's fingerprint; the logopenic variant belongs to the Alzheimer's pathology family.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ftd-quiz-3",
      question: "The gene causing both familial FTD and ALS in the same kindred is:",
      options: ["MAPT", "C9orf72", "GRN", "APP"],
      correctIndex: 1,
      explanation: "The C9orf72 repeat expansion produces FTD, ALS, or both within one family — the core of the FTD-MND overlap.",
      afterSectionId: "mechanism",
    },
    {
      id: "ftd-quiz-4",
      question: "In confirmed FTD, which prescription reflex should be avoided?",
      options: ["Sertraline for compulsive behaviours", "Speech-language therapy referral", "Donepezil for cognition", "Trazodone for irritability"],
      correctIndex: 2,
      explanation: "Cholinesterase inhibitors lack benefit in FTD (cholinergic systems are relatively spared) and can worsen behaviour — the reflex to unlearn.",
      afterSectionId: "management",
    },
    {
      id: "ftd-quiz-5",
      question: "At every FTD visit, the four screening questions for motor neuron disease overlap are about:",
      options: ["Sleep, appetite, mood, and pain", "Dropped objects, grip weakness, slurred speech, and breathlessness", "Memory, orientation, spelling, and drawing", "Blood pressure, sugar, lipids, and weight"],
      correctIndex: 1,
      explanation: "Hand function, dysarthria and respiratory symptoms screen the TDP-43 spread into motor neurons — the FTD-MND subgroup carries the shortest survival.",
      afterSectionId: "management",
    },
    {
      id: "ftd-quiz-6",
      question: "The family of a 50-year-old with bvFTD asks what actually helps. The best-supported core of management is:",
      options: ["A cholinesterase inhibitor plus donepezil", "Structure, safety engineering, caregiver support, and targeted SSRIs", "High-dose antipsychotics from the start", "No intervention changes anything"],
      correctIndex: 1,
      explanation: "With no disease-modifying therapy, routine, environmental control, family education and modest pharmacology for specific behaviours are the evidence-shaped package.",
      afterSectionId: "high-yield",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the six behavioural-variant clusters with one everyday example each.", answer: "(1) Disinhibition — the off-colour joke said aloud in the meeting; (2) Apathy — the hobby of thirty years abandoned, sitting for hours; (3) Loss of empathy — no question about the spouse's operation, absent grief at a parent's death; (4) Perseverative/compulsive behaviour — the same route walked daily, the one joke repeated, the clock watched; (5) Hyperorality — the mithai box finished before the guests arrive, food grabbed from others' plates; (6) Executive decline with preserved memory — yesterday recalled in detail while the bank form cannot be followed. Three or more plus functional decline = possible bvFTD; imaging or genetic marker upgrades to probable.", topic: "Diagnosis" },
    { question: "A 52-year-old carries a 'depression' label. List the four findings that would flip you to bvFTD instead.", answer: "(1) The mood gate fails: no sadness, no guilt, no tearfulness — the 'depression' is apathy, which is indifferent rather than painful; (2) The vegetative signs run the WRONG way: appetite and weight INCREASE (sweet craving) against depression's loss, and sleep is normal rather than terminal insomnia; (3) Empathy is absent rather than preserved: no asking after family, cold response to a spouse's illness — the depressed patient still cares and says so; (4) Two antidepressant trials have failed while the collateral history shows progression across ALL social settings with memory intact. Add the exam: MMSE-normal, frontal tasks collapsed — the flip is complete.", topic: "Diagnosis" },
    { question: "Why does a normal MMSE-style score never exclude FTD, and which five bedside tasks would you add?", answer: "Because FTD damages the frontal and anterior temporal systems that MMSE-style memory-weighted screens barely touch: the patient stores and recalls new information normally while conduct, judgement and language decompose — passes simple memory screens, fails life. The tasks to add: (1) inhibition/switching (card sorting with rule change — the bvFTD patient sorts by one rule and cannot switch); (2) abstraction (similarities); (3) proverb interpretation (the literal read of 'people in glass houses'); (4) go/no-go and Luria-type motor sequences; (5) timed verbal fluency with category/letter dissociation — plus the two-minute release signs: utilisation behaviour and imitation of the examiner's movements.", topic: "Clinical practice" },
    { question: "The two proteins of FTD, the three familial genes — and which gene also causes ALS?", answer: "The two proteins: tau (misfolding microtubule protein — the historical 'Pick's disease' pattern; these families carry MAPT mutations on chromosome 17, often early personality change with sometimes parkinsonism) and TDP-43 (the RNA-handling protein — the same protein that accumulates in ALS, which is why the diseases overlap; these families carry GRN, often asymmetric parietal-touching presentations, or C9orf72). C9orf72 is the gene that also causes ALS: its massive hexanucleotide-repeat expansion produces FTD, ALS, or both within one family tree — sometimes presenting as late-onset psychosis-like pictures. A rarer third protein (FUS) accounts for a small fraction; the sporadic majority carry no identified mutation.", topic: "Mechanism" },
    { question: "In language-variant FTD, distinguish the 'fluent but empty' from the 'effortful and ungrammatical' bedside pictures.", answer: "Fluent-empty = SEMANTIC variant (svPPA): speech flows with normal grammar and rhythm but content dissolves — 'that thing' replaces the pressure cooker; word meanings lost (cannot define camel); repetition INTACT (long sentences verbatim); surface dyslexia ('colonel' as 'kolonel'); anterior temporal knife-blade atrophy, often left-worse; behavioural companions (coldness, sweet rigidity, bizarre narrow collections). Effortful-agrammatic = NONFLUENT variant (nfvPPA): telegraphic speech, grammar collapses while word-meaning survives, grope-for-the-word apraxia of speech; left inferior frontal-insular atrophy; watch for asymmetric parkinsonism and the CBS/PSP cousins. The third door — pauses for word-finding with impaired repetition — is LOGOPENIC, and it points to Alzheimer's pathology: the classic trick question.", topic: "Diagnosis" },
    { question: "What four questions screen for MND overlap at every FTD visit?", answer: "Dropped objects? Weak grip? Slurred speech? Breathlessness? — plus the observation of fasciculations (visible muscle twitching) on examination. Their arrival at any point reframes the prognosis: EMG and neurology co-management now, swallow and breathing surveillance, seating and positioning equipment, early palliative-care conversation, and the family told out loud that the behaviour and the muscle disease are ONE illness (the shared TDP-43 process seen from two windows) — the FTD-MND subgroup's survival compresses to 2–5 years.", topic: "Management" },
    { question: "Which dementia drug class is NOT indicated in FTD, and what replaces it in the management plan?", answer: "The cholinesterase inhibitors (donepezil, rivastigmine, galantamine): cholinergic systems are relatively spared in FTD, so there is nothing for the drug to act on — no evidence of benefit, and some patients WORSEN on them (a common Indian prescribing reflex worth unlearning). What replaces the reflex: the real pharmacology of bvFTD is structure and environment (fixed rails, money out of reach, kitchen locks, ID card), with modest targeted drugs — SSRIs (sertraline, escitalopram) as the pragmatic first line for disinhibition, irritability and compulsive-type behaviours, trazodone second line, and low-dose quetiapine only for dangerous agitation with fixed review dates — plus speech therapy and the visual dictionary for the language doors.", topic: "Pharmacology" },
    { question: "Name the legal and financial steps for the first month of a confirmed midlife FTD diagnosis in India.", answer: "(1) The employment exit strategy: the treating doctor's letter — 'a neurodegenerative illness like any other brain disease, not misconduct' — converting disciplinary cases into medical exits with leave benefits and dignity, done early while the paperwork is still in the office's hands; (2) disability certification for dementia initiated through the government pathway (NIMHANS or the state medical board — processing takes months, so start now); (3) property and nomination planning, joint accounts and spending control (UPI locks) while comprehension remains; (4) guardianship preparedness under the Mental Healthcare Act 2017 framework, with honest conversations with adult children — more urgent in FTD than in any other dementia because school fees, loans and the earning decade are all still in play.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "He has become a bad person. Is that a disease?", answer: "Yes — that is the illness. The front of the brain that polices manners, spending and restraint is shrinking; the behaviours are released, not chosen. It is as physical as a paralysed leg; the paralysed part here is self-control." },
    { question: "Is this because of his job stress, her menopause, or the family problems?", answer: "Stress does not cause this. Stress was the family's explanation because the real cause was invisible on the scans nobody ordered. Removing the blame is part of the treatment — and so is the MRI." },
    { question: "But his memory is perfect! How is it dementia?", answer: "Dementia means loss of thinking ability that changes daily life — and planning, judgement, self-restraint and language are thinking abilities. This disease spares memory first and attacks them first; that is its signature, not a contradiction." },
    { question: "Will the memory medicines help?", answer: "Honestly, no: the chemical they target is not the one deficient here — and some patients get worse on them. What helps is structure, safety, family understanding, and targeted medicines for specific behaviours." },
    { question: "Is it hereditary? Our children are asking.", answer: "In some families yes, in most no. The signal to act on: relatives with similar early dementia, motor neuron disease, or young-onset 'psychiatric' illness. If the family tree looks loaded, we map it on paper and, where appropriate, arrange formal genetic counselling — never a direct home test." },
    { question: "The eating worries us — he grabs food everywhere.", answer: "That symptom (food craving and grabbing, usually sweets) is typical of this disease. Kitchen arrangements, scheduled portions and pre-portioned sweets work better than confrontation; expect weight gain, not loss." },
    { question: "Can she work? The office is initiating disciplinary action.", answer: "The behaviours are symptoms of brain illness. A doctor's letter stating the diagnosis converts a disciplinary case into a medical one — medical exit, leave benefits, and dignity. Do this early, while the paperwork is still in the office's hands." },
    { question: "What is the life expectancy?", answer: "The honest range is broad: many years with gradually increasing dependency, often seven to thirteen; longer in the language-dominant forms; much shorter if muscle disease (ALS) joins — which we monitor for at every visit with four simple questions." },
    { question: "We have small children and he is behaving inappropriately at home.", answer: "Protect first, explain second: supervision plans for shared spaces, simple honest words for the children ('the front of his brain is ill, like a leg that cannot walk'), and scheduled one-to-one time so affection survives the behaviour." },
    { question: "Is there any surgery or new medicine?", answer: "Not yet. Trials exist — gene-targeted ones for the familial forms included — but nothing proven for clinic use today. Our job is to protect the family's functioning and the patient's dignity while the science matures." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Rascovsky K et al. — the 2011 consensus criteria for behavioural-variant FTD (paraphrased; the six-cluster architecture)" },
      { source: "DSM-5 / DSM-5-TR and ICD-11 — frontotemporal neurocognitive disorder framing" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.3 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Gorno-Tempini ML et al. — the primary progressive aphasia classification (semantic, nonfluent/agrammatic, logopenic)" },
      { source: "SSRI and trazodone open-label/trial literature for bvFTD behaviours — the modest-effect, pragmatic framing" },
    ],
    reviews: [
      { source: "Rohrer JD et al. — the genetic architecture of familial FTD (MAPT, GRN, C9orf72) and genotype-phenotype correlations" },
      { source: "Bang J, Boxer AL et al. — natural history and survival of FTD and FTD-MND syndromes" },
      { source: "Neary D, Snowden JS — the Manchester-era clinical phenotyping (semantic dementia, progressive aphasia, behavioural profiles)" },
      { source: "Piguet O et al. — caregiver burden in FTD exceeding Alzheimer's at matched severity" },
      { source: "Hosek ASM et al. and later reviews — pre-symptomatic genetic counselling frameworks for familial FTD" },
      { source: "de Vugt BM / Diehl-Schmid J et al. — caregiver intervention studies in FTD (Europe-based, adapted reasoning for Indian practice)" },
      { source: "Indian young-onset dementia and FTD clinic series (metro-based) — late diagnosis, psychiatric misdiagnosis patterns, family attribution narratives" },
    ],
    patientResources: [
      { source: "The conductor explanation and the children's version — the two scripts this course hands to every family" },
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416), for caregiver distress and family routing" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the conductor explanation, the rails and locks that work, the language-dictionary craft, the caregiver's own care.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The six clusters, the variant map, the mimic table and the frontal-weighted exam.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything — the genetic discipline, the employment intervention, the MND co-management tier, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two doors, the six clusters, the age signature.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the six clusters as a checklist and explain why midlife conduct change with intact memory is frontal until proven otherwise." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The retired conductor, the melting dictionary, the shared protein.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can deliver the conductor explanation and name the two proteins and three genes." },
    { number: 3, title: "Clinical Practice", description: "The variant map, the frontal exam, the mimic killers, the honest pharmacology.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the private collateral inventory, the frontal-weighted exam, and write the no-cholinesterase-inhibitor plan." },
    { number: 4, title: "Indian Context", description: "The blaming tier, the employment letter, the disability pathway, the tree on paper.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can relabel the illness for a family, write the employer letter, and map the three-generation tree." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the midlife-vignette essay cold and spot the logopenic trick question." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.3 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "Rascovsky K et al. — the 2011 consensus criteria for behavioural-variant FTD (paraphrased; the six-cluster architecture)", sourceType: "primary", year: "2011", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Gorno-Tempini ML et al. — the primary progressive aphasia classification (semantic, nonfluent/agrammatic, logopenic)", sourceType: "primary", year: "2011", dateReviewed: "2026-09-28" },
    { id: "S4", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — frontotemporal neurocognitive disorder framing", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Rohrer JD et al. — the genetic architecture of familial FTD (MAPT, GRN, C9orf72) and genotype-phenotype correlations", sourceType: "review", year: "2009 onward", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Bang J, Boxer AL et al. — natural history and survival of FTD and FTD-MND syndromes", sourceType: "review", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Neary D, Snowden JS — the Manchester-era clinical phenotyping (semantic dementia, progressive aphasia, behavioural profiles)", sourceType: "primary", year: "1998 onward", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Piguet O et al. — caregiver burden in FTD exceeding Alzheimer's at matched severity", sourceType: "primary", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "SSRI and trazodone open-label/trial literature for bvFTD behaviours (modest-effect, pragmatic-evidence framing)", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Indian young-onset dementia and FTD clinic series (metro-based, 2010s–2020s) — late diagnosis, psychiatric misdiagnosis patterns, family attribution narratives", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "FTD is a younger-onset (mean 45–65, typical late 50s) dementia family attacking frontal and anterior temporal lobes first — behaviour/language change with memory preserved; among the commonest causes of young-onset dementia (leading or second in specialist series), with the behavioural variant the commonest presentation.", grade: "established", sources: ["S1", "S2", "S4"] },
    { text: "The six bvFTD clusters (disinhibition, apathy, loss of empathy, perseverative/compulsive behaviour, hyperorality, utilisation/executive pattern): three or more plus functional decline = POSSIBLE; an imaging or genetic marker upgrades to PROBABLE; 'Pick's disease' is a post-mortem tau histology label, not a bedside one.", grade: "established", sources: ["S2", "S4"] },
    { text: "The test paradox: memory-weighted screens (MMSE-style) miss FTD by design — executive/behavioural damage with preserved memory storage; frontal-weighted tasks (inhibition/switching, abstraction, proverbs, go/no-go, Luria, timed fluency) and the private collateral inventory are the detecting instruments.", grade: "established", sources: ["S2", "S7"] },
    { text: "The PPA variant map: semantic variant (fluent-empty speech, lost word meanings, intact repetition, surface dyslexia, anterior temporal knife-blade atrophy); nonfluent/agrammatic (effortful telegraphic speech, left inferior frontal-insular breakdown, CBS/PSP cousins); logopenic (word-finding pauses, impaired repetition) pointing to Alzheimer's pathology.", grade: "established", sources: ["S3", "S7"] },
    { text: "Hyperorality with weight GAIN (sweet-and-carbohydrate craving, food-grabbing) distinguishes bvFTD from depression's appetite loss and Alzheimer's late anorexia; apathy in bvFTD is indifferent (vs depression's painful) and unresponsive to antidepressants.", grade: "established", sources: ["S2", "S7"] },
    { text: "Genetics: familial burden 30–40% — the strongest of any common dementia; tau-inclusion families carry MAPT (chromosome 17), TDP-43 families carry GRN or C9orf72; the C9orf72 hexanucleotide expansion causes FTD and ALS in the same kindred (sometimes late-onset psychosis-like presentations); counselling-driven testing only, never direct-to-test or affected-relative reflexes.", grade: "established", sources: ["S5"] },
    { text: "The FTD-MND overlap: the shared TDP-43 process seen from two windows; the subgroup carries 2–5-year survival (vs 7–13 years overall, longer for language variants); four screening questions at every visit — dropped objects, grip weakness, slurred speech, breathlessness.", grade: "established", sources: ["S6"] },
    { text: "Pharmacology honesty: SSRIs (sertraline, escitalopram) are the pragmatic first line for disinhibition, irritability and compulsive-type behaviours (modest evidence); trazodone second line; low-dose antipsychotics only for danger with fixed review; cholinesterase inhibitors have NO benefit in FTD (cholinergic systems relatively spared) and some patients worsen.", grade: "supported", sources: ["S9"] },
    { text: "Management is behavioural and architectural: structure/rails, money out of reach (joint accounts, UPI locks), food supervision, ID cards early, redirect-not-argue; speech therapy plus visual dictionaries and voice-banking for language variants; caregiver burden exceeds Alzheimer's at matched severity — respite and rosters are clinical prescriptions, not suggestions.", grade: "established", sources: ["S7", "S8"] },
    { text: "The legal-vocational tier is more urgent in FTD than any other dementia (midlife onset: earning decade, school fees, loans in play): employment letters preventing termination-for-cause, disability certification, property/nomination planning, MHA 2017 guardianship preparedness — while comprehension remains.", grade: "supported", sources: ["S10"] },
    { text: "The Indian tier: young-onset dementia doubly invisible; diagnosis typically 2–4 years after onset via failed antidepressant trials (psychiatrists the real front line); the blaming tier (spouse, stress, alcohol assumptions) delays imaging; disability certification exists but takes months; genetic counselling infrastructure thin and private-dependent — the three-generation tree drawn in the file is the practical instrument.", grade: "supported", sources: ["S10"] },
    { text: "The mimic discipline: depression (no sadness, weight gain, empathy absent, SSRI failures), mania (no sleeplessness/quickening/grandiosity), OCD (egosyntonic unresisted adult-onset rituals), late-onset psychosis (release-pattern), alcohol/substance (verify with collateral), and the treatable rule-outs — HIV, syphilis, autoimmune encephalitis, chronic subdural, steroid/dopamine-drug hypomania — cheap to test, classic to miss.", grade: "established", sources: ["S1", "S2"] },
  ],
};
