import type { PsychiatryCourse } from "./types";

/**
 * MEMORY & EMOTION — canonical Psychiatry concept course
 * (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/memory-emotion-science.md — untouched
 * foundation, itself an original rewrite of the Oxford
 * chapters 2.5.3–2.5.4 (NOTP 2e, 2009, Part 2 — Meyer-Lindenberg
 * & Goldberg: the memory chapter and the emotion-anatomy
 * chapter): the systems taxonomy by duration and content, LTP/LTD,
 * the declarative architecture, the assessment principles, the
 * amygdala's fear-conditioning and extinction circuitry), and
 * re-researched against the lineages the note itself cites
 * (Scoville & Milner's H.M. report, Squire's declarative/implicit
 * framework, Baddeley's working-memory model with Miller's
 * seven-item origin, Bliss & Lømo's LTP discovery, Kandel's
 * CREB-consolidation tradition, O'Keefe & Nadel's cognitive map,
 * the Norman-O'Reilly / McClelland complementary-learning-systems
 * models, Eldridge's recollection/familiarity neuroimaging with
 * Squire's lesion-qualification tradition, Tulving's episodic/
 * semantic distinction with Craik's levels of processing,
 * LeDoux's amygdala fear-conditioning framework with Phelps's
 * human integration, Milner's H.M. follow-ups and Knowlton's
 * striatal double dissociations, Hebb's assembly principle) —
 * with per-claim provenance.
 *
 * Drug routes: NONE — the note assigns no medication any role
 * (the muscarinic-blockade and Meynert material is mechanisms
 * science, not a prescription route); drugLinks is empty by
 * design, the dementia drug tier belongs to its own courses,
 * and the honest boundaries are recorded in contentGaps, never
 * invented.
 *
 * Born-normalized metadata: title "Memory & Emotion" (topic
 * only, no em-dash subtitle), tagline under 90 characters,
 * summary under 45 words — this course meets the final
 * curriculum normalization rules on arrival.
 */
export const memoryEmotionScienceCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "memory-emotion-science",
  title: "Memory & Emotion",
  shortName: "Memory/Emotion",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Memory & Emotion"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The psychological science: memory systems, emotion circuits, psychiatric relevance",

  summary:
    "Memory is not one function but several dissociable systems (declarative versus implicit) with different brain bases and a shared synaptic engine of LTP and LTD. The amygdala's fear-conditioning and extinction circuitry ties emotion to memory across PTSD, dementia and the amnesias.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Draw the memory taxonomy: duration (ultrashort, short-term, long-term) by content (declarative: episodic and semantic; implicit: procedural, priming, conditioning and extinction), with the neural system assigned to each box.",
    "Define working memory as the mental workspace holding task-relevant, environment-absent information for manipulation and goal-directed behaviour, and state its psychiatric significance: the schizophrenia impairments and the prefrontal parallel-link neurobiology.",
    "Distinguish episodic from semantic memory across context, speed of learning, storage locus and retrieval requirement: rapid single-trial hippocampal binding against slow multi-exposure neocortical consolidation.",
    "Explain familiarity versus recollection with the perirhinal-hippocampal division and the lesion-evidence qualification, and place déjà vu and false memories among the episodic system's clinical features.",
    "Walk the LTP cascade (NMDA-receptor calcium influx, kinases, CREB, protein synthesis) with the early-versus-late-phase distinction (learning versus consolidation) and LTD's counter-directionality.",
    "Tell the H.M. story with its dissociations (complete enduring anterograde amnesia with preserved working memory, procedural memory and priming) and state what it established about the hippocampal-diencephalic episodic-encoding system.",
    "Explain pattern separation and pattern completion (the entorhinal-hippocampal model) and the schizophrenia simulation's conclusion: disproportionate retrieval failures due to compromised encoding.",
    "Map the emotional gateway: the amygdala's fear conditioning and extinction circuitry, the amygdala-hippocampal interaction in emotional memory, and the clinical readings. PTSD's intrusive fragments, the non-extinguishing dysphoria of depression and anxiety, and the bedside examination India can run.",
  ],
  quickFacts: [
    { label: "The core claim", value: "Several systems, not one function", detail: "Declarative (episodic, semantic) versus implicit (procedural, priming, conditioning), each with its own brain basis, which is why one disease can destroy memory for events while leaving skills and emotional learning intact" },
    { label: "The capacity law", value: "About seven items", detail: "Short-term memory's limit (the phone number from reading to dialling); working memory (the workspace variant holding task-relevant, environment-absent information) the system impaired in schizophrenia" },
    { label: "The case", value: "H.M., 1953", detail: "Bilateral hippocampal-formation and amygdala resection for epilepsy: complete enduring anterograde amnesia with partial retrograde loss; working memory, procedural memory and priming unimpaired" },
    { label: "The cellular engine", value: "LTP and LTD", detail: "NMDA-calcium-CREB-protein cascade; early-phase LTP learning's signature, late (protein-synthesis-dependent) phase consolidation's; LTD the counter-directional partner giving bidirectional synaptic modulation" },
    { label: "The forgetting-rate discriminator", value: "Savings", detail: "80–90% for hours in normals; below 50% after minutes in Alzheimer's and Korsakov's: the accelerated-forgetting signature the bedside can track" },
    { label: "The extinction law", value: "Active, not passive", detail: "New cingulate-amygdala learning overriding, not erasing, the fear trace: exposure's rationale and relapse's explanation in one line" },
    { label: "The trauma signature", value: "Unforgettable and fragmented", detail: "Extreme stress produces simultaneously enhanced fear conditioning and impaired autobiographical memory: the PTSD pattern: trauma without contextual binding" },
    { label: "The Indian instrument", value: "Three words, delay, recognition", detail: "The bedside system examination (episodic encoding, retention and retrieval discrimination) deliverable at every district clinic without any proprietary battery, with savings as the quantitative layer" },
  ],
  knowledgeGraph: [
    { label: "Amnesic Syndromes", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The clinical home of the episodic-encoding failure: the Korsakov diencephalic system (medial thalamus, mamillary body, fornix) this course's science explains" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The episodic-first failure with savings collapsed below 50% at minutes, priming predicted to fail with progression, procedural relatively spared: the bath and prayer routines outlasting the names" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The trauma-memory signature this course teaches: the emotional-memory system overactive, the contextual system impaired; intrusive fragments without contextual binding" },
    { label: "Recovered & False Memories", type: "condition", href: "/psychiatry/recovered-memories/", note: "The false-memory science's forensic home: laboratory implantation, suggestibility, source-confusion, and the catecholamine-amnesia speculations" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The working-memory impairments and the encoding-retrieval simulation: disproportionate retrieval failures due to compromised encoding" },
    { label: "Memory Rehabilitation", type: "condition", href: "/psychiatry/memory-rehabilitation/", note: "The engineering discipline built on the spared-systems logic: procedural learning surviving episodic failure is its substrate" },
    { label: "Cognitive Assessment", type: "condition", href: "/psychiatry/cognitive-assessment/", note: "The instrument discipline the bedside examination belongs to: the batteries, the learning slope, the material-specific laterality" },
    { label: "Glutamate", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The LTP-LTD substrate: the NMDA-receptor calcium cascade that makes synaptic strength bidirectionally modifiable" },
    { label: "Hippocampal formation", type: "brain-region", href: "#brain", note: "The episodic encoder, with entorhinal, perirhinal and parahippocampal cortices, the pattern-separation and completion machinery H.M.'s lesion established" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The fear-conditioning gateway and extinction's partner (with the cingulate): the emotional gate on hippocampal consolidation" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Memory runs as a pipeline of dissociable systems rather than one faculty. Experience enters through modality-specific ultrashort buffers (echoic and iconic, milliseconds to seconds), is held in the capacity-limited short-term store or the working-memory workspace (about seven items, prefrontal-dependent, the system schizophrenia impairs), and what is to be kept is encoded: the hippocampal formation (entorhinal cortex as the cortical port of entry, perirhinal and parahippocampal cortices carrying the bidirectional neocortical wiring) binds the episode's spatial, item and temporal-emotional context in rapid single-trial fashion, separating overlapping representations so retrieval can be unambiguous. The cellular substrate is bidirectional synaptic plasticity: long-term potentiation (high-frequency stimulation driving calcium through NMDA receptors, kinases, CREB, protein synthesis, early-phase LTP the signature of learning, late-phase protein-synthesis-dependent LTP the signature of consolidation) and its counter-directional partner, LTD. Consolidation hands knowledge downward and outward: semantic facts accumulate slowly in neocortex across multiple exposures, procedural skill consolidates in striatum and cerebellum, and the engram comes to live in distributed neocortical synapses. Retrieval reverses the flow: a partial cue reactivates entorhinal fragments, hippocampal nodes complete the pattern, and the representation reinstates (recollection predominantly hippocampal, familiarity linked to perirhinal cortex). Emotion gates every stage: the amygdala establishes and stores the conditioned fear association, modulates hippocampal consolidation through catecholamine and stress-hormone mechanisms, and its extinction circuitry (active, cingulate-mediated new learning, not passive fading) determines whether fear and dysphoria fade. The psychiatric readings follow directly: extreme stress strengthens the fear trace while weakening contextual binding (the PTSD signature), the medial-temporal-diencephalic failure empties new episodic learning (the amnesias and dementias), reduced inter-module connectivity makes retrieval fail because encoding was compromised (the schizophrenia simulation), and non-extinction maintains the dysphoria of depression and anxiety.",
    steps: [
      "The taxonomy claim: memory is several dissociable systems, not one function, differing by duration (ultrashort, short-term/working, long-term), content (declarative: episodic and semantic; implicit: procedural, priming, conditioning and extinction) and brain basis; each box with its own neural system.",
      "Encoding: the hippocampal formation (hippocampus proper, entorhinal cortex as the port of entry, perirhinal and parahippocampal cortices) binds the episode in rapid single-trial learning, with prefrontal organisation; left differentially encoding, right differentially retrieving.",
      "The cellular engine: high-frequency stimulation, calcium influx through NMDA receptors (with AMPA and mGluR contributions), kinases (CaMKII), CREB, protein synthesis; early-phase LTP (seconds-minutes) the learning signature, late-phase (minutes-hours, protein-synthesis-dependent) the consolidation signature; LTD the counter-directional partner (lower stimulation, less calcium, preferential calcineurin activation, enduring depression).",
      "Consolidation: episodic traces stabilise through the protein-synthesis-dependent late phase; semantic knowledge slowly accumulates in neocortex over multiple exposures (retrievable without the MTL); procedural skill consolidates in striatum and cerebellum; the engram lives in distributed neocortical synapses.",
      "Retrieval: partial cues activate entorhinal fragments, associated hippocampal nodes complete the pattern; pattern completion reinstating the full representation; recollection predominantly hippocampal, familiarity perirhinal (with the lesion qualification, circumscribed hippocampal lesions also impair familiarity).",
      "The emotional gate: the amygdala establishes and stores the conditioned stimulus-unconditioned stimulus association in its subnuclei, modulates hippocampal consolidation through catecholamine and stress-hormone mechanisms, and extinction is active cingulate-amygdala new learning that inhibits rather than erases the fear trace.",
      "The psychiatric readings: extreme stress means enhanced fear conditioning plus impaired contextual binding (PTSD); medial-temporal-diencephalic failure means episodic encoding loss with implicit systems spared (the amnesias, dementias); reduced inter-module connectivity means encoding-compromised retrieval failure (the schizophrenia simulation); non-extinction means the persistent dysphoria of depression and anxiety.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "hippocampal-formation", name: "Hippocampal formation (the episodic encoder)", role: "Hippocampus proper with the entorhinal cortex (the cortical port of entry) and the perirhinal and parahippocampal cortices: rapid single-trial episodic binding, pattern separation, and the recollection side of the familiarity-recollection division; its bilateral loss in H.M. produced complete enduring anterograde amnesia.", grade: "established" },
    { id: "amygdala", name: "Amygdala (the fear-conditioning gateway)", role: "Establishes and stores the conditioned fear association through its subnuclei; modulates hippocampal consolidation for fearful and aversive material; with the anterior cingulate, the substrate of extinction: active new learning that inhibits rather than erases the fear response.", grade: "established" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the workspace and the organiser)", role: "The working-memory workspace holding task-relevant, environment-absent information (about seven items; the system impaired in schizophrenia), and the encoding-retrieval organiser: left prefrontal differentially encoding, right differentially retrieving.", grade: "established" },
    { id: "striatum-cerebellum", name: "Striatum and cerebellum (the habit engine)", role: "Procedural memory: sensorimotor, perceptual and cognitive skills acquired gradually by repetition; the striatum's parallel loops integrating sensorimotor, cognitive and emotional information, the cerebellum's closed-loop error control; impaired in Huntington's and other basal-ganglia disease.", grade: "established" },
    { id: "diencephalon", name: "Diencephalic system (the Korsakov circuit)", role: "Medial thalamus, mamillary bodies and fornix, with the hippocampal formation the distributed episodic-encoding system; its thiamine-deficiency failure produces the Wernicke-Korsakov amnesia, the common Indian memory-clinic presentation.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Glutamate", symbol: "Glu", role: "The LTP-LTD substrate: glutamatergic transmission carrying the NMDA-receptor calcium cascade; the molecular machinery of synaptic plasticity from learning to consolidation.", grade: "established" },
    { name: "Acetylcholine", symbol: "ACh", role: "Modulates declarative memory: muscarinic blockade impairs episodic memory, and the Meynert basal-nucleus degeneration of Alzheimer's disease is the cholinergic-medial-temporal modulation story.", grade: "established" },
    { name: "Catecholamines", symbol: "NE/DA", role: "The emotional-arousal channel: the catecholamine and stress-hormone mechanisms by which the amygdala modulates hippocampal consolidation, with the extreme-stress amnesia links the note itself teaches as speculations.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "episodic-pipeline-pathway",
      name: "The episodic pipeline (experience to engram to retrieval)",
      steps: [
        { label: "Ultrashort buffers", detail: "Echoic and iconic retention: milliseconds to seconds, modality-specific (replaying the last second of conversation; the scene after closing the eyes)" },
        { label: "Short-term and working memory", detail: "Seconds to minutes, rehearsal-fed, capacity-limited to about seven items; the working-memory variant holds task-relevant, environment-absent information for manipulation and goal-directed behaviour" },
        { label: "Hippocampal encoding", detail: "Entorhinal cortex integrates the segregated spatial and item streams; the hippocampus proper rapidly codes the conjunction and separates overlapping patterns: pattern separation, ensuring unambiguous retrieval and enormous storage capacity" },
        { label: "Consolidation", detail: "Late-phase LTP: protein-synthesis-dependent stabilisation; semantic knowledge migrating slowly to neocortex across multiple exposures; the engram stored in distributed neocortical synapses" },
        { label: "Retrieval", detail: "Partial cues activate entorhinal fragments, associated hippocampal nodes complete the pattern: the full representation reinstated; recollection predominantly hippocampal, familiarity perirhinal" },
      ],
      clinicalManifestation: "The system's failure states: the amnesias and dementias; new episodic learning empty (H.M., Korsakov), savings collapsed below 50% at minutes (Alzheimer's), while procedural routines persist.",
      grade: "established",
    },
    {
      id: "fear-extinction-pathway",
      name: "The fear-conditioning and extinction circuit",
      steps: [
        { label: "The CS-US association", detail: "The amygdala's subnuclei establish and store the conditioned stimulus-unconditioned stimulus link: of high psychiatric relevance across phobias, GAD and depression" },
        { label: "The conditioned response", detail: "Fear expressed to the cue: the emotional-memory system running" },
        { label: "Extinction training", detail: "Repeated cue exposure without consequence: an ACTIVE process depending on amygdala-cingulate interactions, not passive fading of the trace" },
        { label: "Inhibition, not erasure", detail: "The new circuitry inhibits the fear response while the original trace remains; hence practice matters and relapse is possible" },
        { label: "The failure mode", detail: "Dysphoric mood and affect abnormally maintained (not extinguished) in depression and anxiety: the circuit-level account of persistent negative affect" },
      ],
      clinicalManifestation: "Exposure therapy's mechanism and its relapse pattern; the non-extinguishing dysphoria of depression and anxiety; the phobias and GAD the conditioning circuit explains.",
      grade: "established",
    },
    {
      id: "emotional-memory-pathway",
      name: "The emotional-memory consolidation chain",
      steps: [
        { label: "Emotional arousal", detail: "Fearful or aversive material recruits the amygdala alongside the hippocampal formation" },
        { label: "Amygdalar modulation", detail: "The amygdala modulates hippocampal consolidation: the catecholamine and stress-hormone mechanisms (the neuroendocrinology tier)" },
        { label: "The normal outcome", detail: "Emotional memories preferentially retained: hippocampal-amygdalar cooperation binding feeling to context" },
        { label: "Extreme stress", detail: "Simultaneously enhanced fear conditioning and impaired autobiographical memory: the emotional system overactive, the contextual system failing, trauma without contextual binding" },
        { label: "The clinical signature", detail: "Intrusive affect-laden fragments that are simultaneously unforgettable and fragmented: the PTSD pattern and the recovered-memories note's amnesia speculations" },
      ],
      clinicalManifestation: "The PTSD memory signature: intrusive emotional memories without contextual binding; the trauma remembered in feeling and fragment, not in story.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "hebb-1949", time: "1949", title: "Hebb's assembly principle", description: "Changed synaptic efficacy across neural assemblies can, in principle, encode, store and retrieve information: the network-modelling bridge from molecules to mind that every later mechanism assumes.", phase: "onset" },
    { id: "hm-lesion", time: "1953–1957", title: "The H.M. lesion", description: "Bilateral hippocampal-formation and amygdala resection for epilepsy (Scoville & Milner's 1957 report): complete enduring anterograde amnesia with preserved working memory, procedural memory and priming; the dissociation that established the systems.", phase: "onset" },
    { id: "systems-taxonomy-era", time: "1956–1972", title: "The taxonomy assembled", description: "Miller's seven-item tradition (1956), Tulving's episodic/semantic distinction, Baddeley's working-memory model and Squire's declarative/implicit framework: the duration-by-content grid the clinic still uses.", phase: "peak" },
    { id: "ltp-discovery", time: "1973", title: "LTP discovered (Bliss & Lømo)", description: "High-frequency stimulation of the hippocampal CA1 pathway producing weeks-long synaptic enhancement: the cellular engine found; Kandel's CREB-consolidation tradition and O'Keefe & Nadel's cognitive-map theory follow.", phase: "peak" },
    { id: "computational-era", time: "1990s–2000s", title: "The computational and imaging turn", description: "The complementary-learning-systems models (McClelland; Norman & O'Reilly) formalising pattern separation and completion; Eldridge et al.'s recollection/familiarity neuroimaging with Squire's lesion qualification; Knowlton et al.'s striatal double dissociations; Milner's H.M. long-term follow-ups.", phase: "duration" },
    { id: "extinction-turn", time: "Now", title: "The extinction turn", description: "LeDoux's amygdala fear-conditioning framework and Phelps & LeDoux's human integration; extinction established as active cingulate-amygdala learning. PTSD, depression and exposure therapy mapped onto the circuitry this course teaches.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the science as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "A science, not a disorder: the honest epidemiology is structural. These systems underlie every clinical population psychiatry assesses: the dementias (the episodic-encoding system failing), the amnesias (the diencephalic circuit and the Korsakov alcohol burden), PTSD and the trauma populations (the fear-conditioning and contextual-binding dissociation), schizophrenia (the working-memory impairments and the encoding-retrieval deficit), and depression (the retrieval failure with recognition intact). The note records no survey numbers for the science itself, and none are invented here.",
    indianPrevalence: "The India lens: the memory-clinic discipline (word lists, delay, recognition, deliverable without proprietary batteries) running on this science; the Korsakov pathway a common Indian memory-clinic presentation; the dementia expansion (India's ageing demographics making the episodic/semantic/implicit dissociations daily clinical tools); disaster, conflict and displacement populations presenting the PTSD memory signature; and the 'memory weak' OPD complaint spanning the systems.",
    lifetimeRisk: "Not applicable as a risk: every brain runs on these systems; the clinical question is never whether memory fails but which system fails, and the systems examination exists to answer it.",
    genderRatio: "Not given by the note: the systems science carries no gender ratio, and none is invented.",
    ageOfOnset: "The ageing dimension the note's India lens teaches: ageing slows encoding (savings preserved) while the dementias collapse consolidation (savings below 50% at minutes). The discriminator that keeps the two apart.",
    indianNotes: "The family-education value of the procedural-memory knowledge (the bath and prayer routines persisting after the names have gone); the two-step instruction rule for cognitive impairment; the exposure-therapy rationale expressible in plain Indian clinical language.",
  },
  etiology: [
    { category: "biological", factor: "The medial-temporal-diencephalic failure", details: "Alzheimer's disease (with the Meynert cholinergic degeneration), Wernicke-Korsakov syndrome and the diencephalic lesions (medial thalamus, mamillary body, fornix): the distributed episodic-encoding system failing: new events never stored, implicit systems spared." },
    { category: "biological", factor: "The striatal failure", details: "Huntington's and other basal-ganglia disease impair procedural memory while episodic memory survives: the double dissociation that localises the complaint to the habit system (the striatum's parallel loops; the cerebellum's error control)." },
    { category: "psychological", factor: "Depression's retrieval failure", details: "The depressed memory complaint runs at retrieval, not encoding: recognition relatively intact, savings relatively preserved; treating the mood restores the access." },
    { category: "psychological", factor: "The extinction failure", details: "Dysphoric mood and affect abnormally maintained (not extinguished) in depression and anxiety: the amygdala-cingulate circuit failing to inhibit the affective trace." },
    { category: "environmental", factor: "Extreme stress and the trauma memory", details: "Simultaneously enhanced fear conditioning and impaired autobiographical memory: the amygdala strengthened while the hippocampal contextual binding weakens; the PTSD pattern the disaster, conflict and displacement populations present." },
  ],
  symptomClusters: [
    {
      category: "1. The episodic-system signals",
      symptoms: [
        "New events not stored: the question asked within the hour, the morning's conversation gone by evening (the H.M. and Korsakov pattern)",
        "Accelerated forgetting: savings below 50% at minutes where normals retain 80–90% for hours",
        "Familiarity without recollection: the déjà vu experience; the face recognised without the meeting retrieved",
        "False memories: the person can be convinced to remember events that never happened; the suggestibility the forensic setting must know",
      ],
    },
    {
      category: "2. The implicit-system signals",
      symptoms: [
        "Skills and habits persisting after the episodes are lost: the bath and prayer routines outliving the names (the family-education fact)",
        "Procedural failure with episodes spared: the movement and skill deterioration of Huntington's and basal-ganglia disease",
        "Priming measurable but expected to fall as disease advances neocortex: the model's prediction of impaired semantic priming in Alzheimer's disease",
      ],
    },
    {
      category: "3. The working-memory signals",
      symptoms: [
        "Instructions exceeding capacity: the seven-item limit and the two-step instruction rule for cognitive impairment",
        "Conversation-tracking difficulty (schizophrenia): the workspace failing to hold what was just said",
        "Planning and goal-directed behaviour losing their holding pen: the task-relevant, environment-absent information slipping",
      ],
    },
    {
      category: "4. The emotional-memory signals",
      symptoms: [
        "Intrusive affect-laden fragments without contextual binding: the trauma simultaneously unforgettable and fragmented",
        "Dysphoria that will not extinguish: the persistent negative affect of depression and anxiety read at circuit level",
        "Conditioned fear to cues the person cannot contextualise: the phobia, GAD and depression relevance of the amygdala's circuitry",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The systems taxonomy",
      code: "The duration by content grid",
      criteria: [
        "Duration axis: ultrashort-term (sensory, echoic and iconic, milliseconds to seconds); short-term (seconds to minutes, rehearsal-fed, capacity-limited to about seven items; working memory the workspace variant); long-term (minutes to lifespan, not capacity-limited, dependent on enduring neuronal-structure changes, the engram question).",
        "Content axis, declarative: episodic (events with temporal, spatial and emotional context; familiarity versus recollection; déjà vu; false memories) and semantic (facts and vocabulary, context-independent, slowly consolidated into neocortex over multiple exposures, retrievable without the MTL).",
        "Content axis, implicit: procedural skills (striatum and cerebellum), priming (neocortical), conditioning and extinction (amygdalar circuitry).",
        "The neural assignment: medial temporal lobe-hippocampal formation for episodic; neocortex for semantic and for priming; striatum-cerebellum for procedural; amygdala for fear conditioning; prefrontal cortex for the workspace.",
        "The warning: the declarative/implicit distinction concerns conscious access, not test surface; a sentence-completion test can be priming-driven.",
      ],
      duration: "The grid drawn from memory: the examination instrument that precedes every battery.",
      indianNote: "The Indian bedside examination delivers the system-level read (episodic encoding, retention, retrieval discrimination) without any proprietary battery.",
    },
    {
      system: "The clinical memory examination",
      code: "The assessment principles",
      criteria: [
        "Multiple word-list trials read for the learning slope (the Wechsler Memory Scale-III with its verbal-visual immediate and delayed indexes; the California and Hopkins Verbal Learning Tests; the Selective Reminding Test with alternate forms reducing practice effects).",
        "Immediate and delayed recall: the 30-minute delay separating retention from encoding.",
        "Recognition testing (yes/no) minimising effortful retrieval: the retrieval-versus-encoding discriminator.",
        "Visual and verbal tests read for the material-specific medial-temporal laterality.",
        "The savings measure (how much was retained relative to immediate recall): 80–90% for hours in normals; below 50% after minutes in Alzheimer's and Korsakov's: the accelerated-forgetting signature (increased forgetting also in a frontotemporal dementia variant).",
        "Depth of encoding exploited: semantic judgements beat orthographic (the levels-of-processing effect).",
      ],
      duration: "Thirty minutes of clinic time: the delay is the instrument.",
      indianNote: "Three-word learning with distraction, 30-minute delayed recall and a yes/no recognition trial: the system-level examination India can run at every district clinic, with the savings concept as the quantitative layer.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The depressed memory complaint (retrieval failure)", distinguishingFeatures: "Delayed recall reduced but recognition intact and savings relatively preserved; the learning slope present once effort and mood are addressed.", keyDifferentiator: "The recognition trial separates retrieval failure (depression) from encoding failure (the amnesias): the mimic not to mislabel as dementia." },
    { condition: "The ageing memory (slowed encoding)", distinguishingFeatures: "Slower learning across trials with normal retention once encoded: savings preserved.", keyDifferentiator: "The savings measure: preserved in ageing, collapsed below 50% at minutes in the dementias; the two kept apart by one number." },
    { condition: "MCI and the beyond-normal forgetting threshold", distinguishingFeatures: "Forgetting beyond the normal ageing pattern without the collapsed savings and failed recognition of the dementia: the boundary state between.", keyDifferentiator: "The systems examination quantifies the boundary (slope, delay, recognition, savings); the MCI course carries the follow-up discipline." },
    { condition: "The organic amnesias versus Huntington's (which system fails)", distinguishingFeatures: "Episodic failure (Alzheimer's, Korsakov (medial-temporal-diencephalic) against procedural failure (Huntington's, basal-ganglia disease)) the double dissociation with mirror-image patient profiles.", keyDifferentiator: "The systems map is the localiser: the same complaint, different system, different disease, and the spared system in each is the rehabilitation base." },
    { condition: "The trauma-memory pattern (dissociated emotional and contextual systems)", distinguishingFeatures: "Intrusive affect-laden fragments without contextual binding: fear conditioning strengthened while autobiographical memory is impaired; a dissociation within the memory systems, not a general amnesia.", keyDifferentiator: "The PTSD signature against the uniform episodic loss of organic amnesia: fragmented-unforgettable versus uniformly-empty new learning with spared implicit systems." },
  ],
  management: [
    { category: "psychotherapy", name: "The bedside system examination", description: "Three-word learning with distraction, 30-minute delayed recall, and a yes/no recognition trial: the episodic encoding, retention and retrieval-discrimination read, with the savings concept (how much retained relative to immediate recall) as the quantitative layer. Deliverable without any proprietary battery.", whenToUse: "Every memory complaint, every district clinic: the examination that sorts the mimics from the amnesias before any referral.", indianContext: "The Indian instrument: no proprietary battery, no cost; the learning slope, the delay, the recognition trial and the savings figure (below 50% at minutes, the amnesic-dementing signal) all obtainable in a general OPD." },
    { category: "psychotherapy", name: "The forgetting-rate discriminator", description: "The savings measure as the cheap, powerful separator: 80–90% for hours in normals against below 50% after minutes in Alzheimer's and Korsakov's; a bedside-trackable metric separating the amnesic and dementing from the depressed and normal.", whenToUse: "Whenever 'memory weak' is the complaint, before imaging, before referral.", indianContext: "The depression-mimic and the ageing-pattern are separated from the true consolidation failure by one calculation. The discipline that protects the Indian OPD from both overdiagnosis of dementia and dismissal of it." },
    { category: "psychotherapy", name: "Expectation-setting with the H.M. lesson", description: "Procedural learning survives pure episodic failure: the amnesic patient who cannot remember the therapy session can still learn the skill practised in it. Rehabilitation is built on the spared system: routines, habits, procedures.", whenToUse: "Every amnesia and dementia plan, and every family conversation about what the patient can still learn.", indianContext: "The family-education script: the bath and prayer routines persist after the names have gone because procedural memory survives; build the day on the routines (the routine-based rehabilitation the Korsakov pathway demands)." },
    { category: "psychotherapy", name: "Exposure therapy reframed as extinction science", description: "Exposure is not forgetting but new cingulate-mediated learning overriding the amygdala's fear, which is why practice matters, why the sessions are repeated, and why relapse is possible (the original trace remains, overridden rather than erased).", whenToUse: "Every exposure-based plan (the phobias, the PTSD programme), and every patient asking why the fear 'came back'.", indianContext: "The plain-language Indian framing: new learning competes with old fear; the practice schedule is the treatment's engine; a relapse is a retraining need, not a failure." },
    { category: "psychotherapy", name: "The cognitive-communication rules", description: "Working-memory limits explain everyday clinic phenomena: instructions exceeding capacity, the two-step instruction rule for cognitive impairment, the schizophrenia conversation-tracking difficulty; communication redesigned to the workspace's size.", whenToUse: "Every cognitive-impairment and psychosis consultation: the seven-item limit applied to prescription instructions, schedules and advice.", indianContext: "The two-step instruction rule taught to families: one instruction, completion, the second instruction; the everyday application of the seven-item teaching." },
    { category: "service-design", name: "The 'memory weak' interpreter discipline", description: "The Indian OPD complaint interpreted through the systems: depression's retrieval failure (recognition intact), ageing's slowed encoding (savings preserved), MCI's beyond-normal forgetting, the dementias' consolidation failure (savings collapsed); the taxonomy plus the assessment discipline as the interpreter.", whenToUse: "Every 'memory weak' presentation: the phrase spans the systems and the systems lens sorts it.", indianContext: "The interpreter discipline this course exists to teach: the complaint is ambiguous, the system examination is not." },
  ],
  safety: {
    redFlags: [
      "Savings collapsed below 50% at minutes in a 'memory weak' patient: the Alzheimer's and Korsakov signal: full assessment now, not reassurance",
      "The alcohol-dependent patient with confusion or new memory impairment: thiamine first, before the amnesia becomes enduring (the Korsakov prevention window the note names)",
      "A memory complaint that is actually a trauma presentation: intrusive affect-laden fragments without contextual binding: the PTSD assessment the fragment pattern demands",
      "Skills lost rather than episodes: the Huntington's and basal-ganglia localisation the procedural failure signals",
      "The patient deteriorating on a plan built above their working-memory capacity: instructions exceeding the seven-item workspace, the adherence failure nobody recognised",
    ],
    urgentGuidance:
      "The order of operations: (1) in the alcohol-dependent patient, thiamine first; the prevention window before the diencephalic amnesia becomes enduring; (2) the system examination run before any label: learning slope, 30-minute delay, recognition trial, savings; (3) savings collapse triggering the full dementia workup (the amnesic-syndromes and dementia courses carry it); (4) the trauma signature recognised as a memory presentation and routed to PTSD assessment; (5) communication rebuilt to capacity (the two-step rule) while the diagnostic work proceeds.",
  },
  drugLinks: [],
  contentGaps: [
    "The note assigns no medication any role in the memory-emotion science: drugLinks is empty by design; the cholinesterase-inhibitor and memantine tier belongs to the dementia-management course and the drug-family lessons, never invented here (the muscarinic-blockade and Meynert material is mechanisms science, not a prescription route).",
    "The wider emotion-anatomy chapter territory (the note's source_map: ch 2.5.4, Meyer-Lindenberg & Goldberg) beyond the amygdala's memory gateway has no KYP lesson. The fear-circuit and extinction material is taught here at the note's depth, and the rest is recorded as absent, not paraphrased.",
    "The catecholamine-amnesia and trauma-memory speculation tier (the note's own amnesia speculations, tied to the recovered-memories and neuroendocrinology notes) has no dedicated reconsolidation-pharmacology lesson in KYP: taught here as speculation only, no route implied.",
    "The laboratory false-memory paradigms are taught at summary level (implantation, suggestibility, source-confusion); the full forensic treatment lives in the recovered-memories course: the implantation-experiment detail is referenced, not duplicated.",
  ],
  patientGuide: {
    whatIsIt:
      "A field of science, not an illness: the study of how memory and emotion actually work. Memory is not one thing but several systems (memory for events, memory for facts, memory for skills and habits, memory for fears) each running on a different part of the brain. This is the science your doctor uses to work out which system is struggling when you or a relative complains of 'weak memory', and how emotion, especially fear, writes its own kind of memory. The kind that makes traumatic moments unforgettable and fragmented at the same time.",
    whatCausesIt:
      "Memory problems are not one disease. The commonest causes by system: forgetting of events with preserved routines (the dementias and the alcohol-thiamine amnesia, the episodic system failing); a memory complaint with low mood and intact recognition (depression, a retrieval problem, not a storage problem); slowed learning with normal retention once stored (normal ageing); unforgettable fear fragments after disaster or violence (the trauma-memory pattern); and instructions not sticking because the mind's small workspace is overloaded (not a memory store problem at all).",
    symptoms:
      "What the different system failures look like: asking the same question within the hour; the morning's conversation gone by evening; the bath and prayer routines persisting after names are lost (habit memory surviving); skills of movement deteriorating (a different system again); a fear that returns in fragments (the water, the shout) without the story around them; and forgetting that lifts when the mood is treated.",
    treatment:
      "The doctor's discipline: examine the systems (word learning, a 30-minute delay, a recognition trial, the savings calculation), identify which system is struggling, and treat the cause; the mood, the thiamine deficiency, the dementia programme, the PTSD treatment. Two facts to hold onto: skills and routines survive when event-memory fails (rehabilitation builds on them), and exposure treatment works by new learning that competes with the fear, which is why it takes practice and why a setback is a retraining need, not a failure.",
    selfHelp: [
      "Keep the routines: bath, prayer, meals, walks: the habit memory survives long after event-memory fades; the day's structure is treatment.",
      "Give instructions in two steps, one at a time, to anyone with memory or attention difficulty: the mental workspace holds only about seven items.",
      "Repeat and write down rather than trust the storing, and treat the writing-down as the memory aid it is, not a defeat.",
      "For fear after trauma: the fragments are a memory-system pattern, not madness; exposure-based treatment retrains it: practice is the treatment's engine.",
      "Bring the alcohol history openly: the alcohol-related memory problem is preventable in its early stage (thiamine), and shame delays exactly the prevention that works.",
      "Ask for the mood check before accepting a memory diagnosis: depression imitates dementia at the memory examination, and the recognition trial tells them apart.",
    ],
    whenToSeekHelp: [
      "New forgetting of recent events that others notice and that disrupts the day: assessment, not reassurance",
      "Confusion plus heavy alcohol use: urgent, thiamine first",
      "Unbearable fragment-like memories of a disaster or violence that do not settle: the trauma-memory treatment",
      "Skills of movement or coordination changing alongside thinking changes: a different system, a different disease",
      "The family overwhelmed by the care of a forgetful relative: the family-education session is part of the treatment",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages), for distress, memory-clinic guidance and where to go",
      "The district hospital or DMHP psychiatric OPD: the memory examination this course teaches needs no special centre",
      "The treating team's family-counselling session: ask for the visit that explains which memory survives and how to build the day on it",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs the memory-emotion science; practice follows the Oxford synthesis (NOTP 2e, ch 2.5.3–2.5.4) with the bedside system examination as the Indian instrument: word lists, delay and recognition, deliverable without proprietary batteries.",
    systemContext: "The Indian patient meets this science at the memory clinic, the district OPD or the family's kitchen table: the complaint is 'memory weak'; a phrase spanning depression's retrieval failure (recognition intact), ageing's slowed encoding (savings preserved), MCI's beyond-normal forgetting and the dementias' consolidation failure (savings collapsed). The system examination, not the phrase, makes the diagnosis.",
    programmeContext: "The memory-clinic discipline, the Korsakov alcohol burden (thiamine-first) and the dementia epidemic's assessment infrastructure all run on this science; the dementia expansion (India's ageing demographics) makes the episodic/semantic/implicit dissociations daily clinical tools, and the disaster, conflict and displacement populations present the PTSD memory signature in every district.",
    costConsiderations: "The Indian advantage: the system examination costs nothing; three words, a distraction task, 30 minutes and a recognition trial; the savings concept is the quantitative layer no proprietary battery owns. What costs is the untreated end: the missed Korsakov prevention window, the mislabelled depression, the dementia diagnosed late.",
    culturalConsiderations: "The family-education value of the systems knowledge: the bath and prayer routines persisting after the names have gone; the explanation that converts grief into a rehabilitation plan. The trauma-memory framing for disaster, conflict and displacement populations: the systems-level explanation of why the traumatic memory is simultaneously unforgettable and fragmented, with the exposure-therapy rationale (new extinction learning) expressed in plain Indian clinical language. The seven-item and workspace teaching applied as practical cognitive communication: the two-step instruction rule.",
    patientCounselling: [
      "The systems script: 'Memory is not one thing. The part that stores events is struggling, but the part that stores habits and routines is well. The bath and the prayer will outlast the names, and we build the day on what survives.'",
      "The savings script: 'We will test how much you retain after half an hour; that one number separates the treatable causes from the ones needing a dementia workup.'",
      "The depression script: 'Your memory complaint improves when the mood does. The recognition trial you passed tells us the store is intact; the retrieval is what the low mood blocks.'",
      "The alcohol script: 'The alcohol-related memory problem is preventable in its early stage. The vitamin (thiamine) comes first, before the memory fixes its loss.'",
      "The trauma script: 'The fragments are unforgettable because fear writes its own memory; they are fragmented because the story-binding system weakens under extreme stress. The treatment trains a new, competing memory: that is why it takes practice, and why a setback means retraining, not failure.'",
      "The instruction script: 'One instruction at a time; the mind's workspace holds about seven items; two steps, done in order, beat one long sentence every time.'",
    ],
  },
  decisionPath: {
    title: "Evaluating a memory complaint through the systems lens",
    nodes: [
      {
        id: "start",
        question: "An OPD 'memory weak' complaint. The bedside system examination is run: three-word learning with distraction, 30-minute delayed recall, a yes/no recognition trial, and the savings calculation. What does the picture show?",
        branches: [
          { label: "Learning slope shallow, delayed recall collapsed, recognition also failed (savings collapsed)", next: "encoding-failure-gate" },
          { label: "Delayed recall reduced but recognition intact", next: "retrieval-failure-gate" },
          { label: "Learning slow but retention preserved once encoded", next: "ageing-path" },
          { label: "The complaint is intrusive fragments of a disaster or violence, not everyday forgetting", next: "trauma-gate" },
          { label: "The complaint is instructions not sticking, conversation drifting", next: "capacity-gate" },
        ],
      },
      {
        id: "encoding-failure-gate",
        question: "The episodic-encoding system failing: new events not stored. Which substrate?",
        branches: [
          { label: "Alcohol dependence or malnutrition in the history", next: "korsakov-thiamine-path" },
          { label: "Progressive course, older age, insidious onset", next: "dementia-path" },
          { label: "Movement disorder: skills deteriorating rather than episodes", next: "striatal-path" },
        ],
      },
      {
        id: "korsakov-thiamine-path",
        question: "The diencephalic system: the thiamine-deficiency amnesia.",
        recommendation: "Thiamine first: the prevention window before the amnesia becomes enduring; then the systems reading: diencephalic episodic-encoding failure with spared procedural learning, hence the value of routine-based rehabilitation (the day built on the routines that survive). The amnesic-syndromes course carries the clinical programme; the family education is the H.M. lesson in Indian dress.",
      },
      {
        id: "dementia-path",
        question: "The progressive episodic failure of the dementias.",
        recommendation: "The full dementia workup (the alzheimers-dementia and dementia-management courses carry it); the systems facts for the family: episodic first, priming failing with disease progression, procedural relatively spared; the bath and prayer routines persisting after the names have gone; the management plan built on preserved systems and the two-step communication rule.",
      },
      {
        id: "striatal-path",
        question: "The procedural system failing. Huntington's and the basal-ganglia diseases.",
        recommendation: "The double dissociation recognised: the mirror image of the amnesias; episodes spared, skills lost; the huntingtons-neuropsychiatry course carries the disease; the systems examination has localised the complaint the phrase 'memory weak' blurred.",
      },
      {
        id: "retrieval-failure-gate",
        question: "Retrieval failure with the store intact. What is blocking access?",
        branches: [
          { label: "Depressive symptoms, low effort, sleep and appetite changes", next: "depression-path" },
        ],
      },
      {
        id: "depression-path",
        question: "The depressed memory complaint.",
        recommendation: "Treat the mood, re-test the memory later: recognition intact and savings relatively preserved separate this from the amnesias; the mimic not to mislabel as dementia; the depressive-disorders course carries the treatment.",
      },
      {
        id: "ageing-path",
        question: "Slowed encoding with retention preserved: the ageing pattern.",
        recommendation: "Savings preserved once the material is learned: the ageing signature; reassurance, encoding strategies (deeper processing, slower pace, written anchors), and the MCI course's follow-up where the forgetting is beyond the normal threshold (the boundary quantified by the same examination).",
      },
      {
        id: "trauma-gate",
        question: "The trauma-memory signature: intrusive affect-laden fragments without contextual binding.",
        recommendation: "The systems explanation as psychoeducation: extreme stress strengthened the fear conditioning while weakening the contextual binding; hence simultaneously unforgettable and fragmented; the PTSD assessment (the ptsd course carries the programme), exposure therapy as new cingulate-mediated extinction learning: practice required, relapse possible, the original trace overridden not erased.",
      },
      {
        id: "capacity-gate",
        question: "The working-memory workspace overran: instructions exceeding the seven-item limit.",
        recommendation: "The workspace diagnosis: attention and capacity, not the episodic store, in schizophrenia the conversation-tracking difficulty; in cognitive impairment the two-step instruction rule; communication rebuilt to capacity (one instruction, completion, the second), prescriptions and schedules simplified to the seven-item arithmetic.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating memory as one function",
      why: "The examination, the referral and the family conversation all go vague: 'memory loss' without the system files the dementias, the amnesias, depression, ageing and attention failure together, and the localisation (medial temporal, diencephalic, striatal, prefrontal) is lost.",
      correction: "The duration-by-content grid with the neural system per box: the same complaint worked through the systems: episodic failure localises to the medial-temporal-diencephalic circuit, procedural to the striatum, working memory to the prefrontal cortex.",
    },
    {
      mistake: "Reading the test surface instead of the system",
      why: "A sentence-completion test looks verbal and explicit but can be priming-driven; scoring it as declarative failure mislocalises an intact system and inflates the impairment estimate.",
      correction: "The declarative/implicit distinction concerns conscious access, not test surface: ask what the test demands of consciousness, not what it looks like on paper.",
    },
    {
      mistake: "Calling extinction forgetting",
      why: "If exposure therapy is assumed to erase the fear trace, the practice schedule looks optional, relapse looks like treatment failure, and the patient is blamed for a recurrence the circuitry predicts.",
      correction: "Extinction is active cingulate-amygdala new learning that inhibits rather than erases: practice is the treatment's engine, relapse is the permanent trace reasserting, and retraining is the answer.",
    },
    {
      mistake: "Writing off the amnesic patient's learning",
      why: "The team stops teaching anything new to the patient who cannot remember the session, and the procedural system that could still learn is left idle.",
      correction: "The H.M. lesson: procedural learning survives episodic failure; the amnesic patient who cannot remember the therapy session can still learn the skill practised in it; rehabilitation builds on routines.",
    },
    {
      mistake: "Mislabelling depression's retrieval failure as dementia",
      why: "The depressed patient fails the delayed-recall trial, the word 'dementia' enters the family's vocabulary, and a treatable mood disorder acquires a prognosis it does not carry.",
      correction: "The recognition trial and the savings measure separate them: recognition intact and savings preserved against savings below 50% at minutes; treat the mood, re-test the memory.",
    },
    {
      mistake: "Exceeding the workspace",
      why: "Instructions, prescriptions and advice delivered in seven-item-plus sentences to patients with cognitive impairment or psychosis guarantee non-adherence that reads as defiance or deterioration.",
      correction: "The two-step instruction rule: one instruction, completion, the second; communication redesigned to the seven-item arithmetic of the working-memory workspace.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Classify memory by duration and content with the neural system for each box: ultrashort (sensory), short-term and working (prefrontal), episodic (hippocampal-MTL), semantic (neocortical), procedural (striatal-cerebellar), priming (neocortical), conditioning (amygdalar).",
        "Define working memory and give its psychiatric significance: the workspace holding task-relevant, environment-absent information, limited to about seven items; the schizophrenia impairments and the prefrontal link.",
        "Walk the LTP cascade with the early-versus-late-phase distinction, and state LTD's counter-directionality and the bidirectional-modulation principle.",
        "H.M.: what was lost, what was spared, and what the dissociation established about the hippocampal-diencephalic episodic-encoding system.",
        "The savings concept with the figures: 80–90% for hours in normals; below 50% after minutes in Alzheimer's and Korsakov's, and its bedside use as the forgetting-rate discriminator.",
      ],
      practical: [
        "Demonstrate the bedside memory examination: three-word learning with distraction, 30-minute delayed recall, and a yes/no recognition trial, and present the savings calculation with its interpretation.",
        "Take a memory complaint through the systems lens: the learning slope, the delayed-recall loss, the recognition rescue, and the interpretation (encoding failure versus retrieval failure).",
      ],
      longAnswer: [
        "The memory systems: classification by duration and content, the neural basis of each system, the cellular mechanisms (LTP and LTD), and the clinical relevance to the amnesias and dementias.",
        "Emotion and memory: the amygdala's fear-conditioning and extinction circuitry, the amygdala-hippocampal interaction in emotional memory, and the relevance to PTSD, depression and exposure therapy.",
      ],
    },
    neetPg: {
      highYield: [
        "THE TAXONOMY: duration (ultrashort, echoic/iconic; short-term: about seven items, rehearsal-fed; long-term, not capacity-limited) by content (declarative: episodic and semantic; implicit: procedural, priming, conditioning); each box with its neural system (medial temporal, neocortical, striatal-cerebellar, amygdalar).",
        "WORKING MEMORY: the mental workspace holding task-relevant, environment-absent information for manipulation and goal-directed behaviour; about seven items; impaired in schizophrenia (the prefrontal parallel-link neurobiology).",
        "THE H.M. DISSOCIATION (1953): complete enduring anterograde episodic amnesia with partial retrograde loss; working memory, procedural memory and priming spared; the lesion establishing the systems.",
        "THE DIENCEPHALIC SYSTEM: Wernicke-Korsakov syndrome and the medial thalamus, mamillary body and fornix lesions; the same pattern as H.M.; the distributed episodic-encoding system.",
        "THE LTP CASCADE: NMDA-receptor calcium influx → kinases (CaMKII) → CREB → protein synthesis; early-phase LTP (seconds-minutes) the learning signature, late-phase (minutes-hours, protein-synthesis-dependent) the consolidation signature; LTD the counter-directional partner (less calcium, calcineurin, enduring depression).",
        "PATTERN SEPARATION AND COMPLETION: the hippocampus separates overlapping entorhinal patterns (unambiguous retrieval, enormous capacity); partial cues drive completion, with the schizophrenia simulation's conclusion: disproportionate retrieval failures due to compromised encoding.",
        "THE SAVINGS FIGURES: 80–90% for hours in normals; below 50% after minutes in Alzheimer's and Korsakov's: the accelerated-forgetting signature (also increased in a frontotemporal dementia variant).",
        "THE DOUBLE DISSOCIATION: procedural memory spared in hippococampal amnesia, impaired in Huntington's and basal-ganglia disease; striatum-cerebellum for skills against MTL-diencephalon for episodes.",
        "EXTINCTION: an active amygdala-cingulate process, not passive fading; new learning overriding rather than erasing the trace; dysphoric mood abnormally maintained (not extinguished) in depression and anxiety.",
        "THE TRAUMA PATTERN: extreme stress produces simultaneously enhanced fear conditioning and impaired autobiographical memory; the PTSD signature: intrusive fragments without contextual binding.",
        "LATERALITY: left prefrontal differentially encoding, right differentially retrieving; material-specific medial-temporal laterality (verbal and visual) on the bedside examination.",
      ],
      pyqConcepts: [
        "H.M. The single most examined case in this territory (the dissociation pattern asked verbatim).",
        "Extinction as new learning: the exposure-therapy question that recurs across viva and PG formats.",
        "The savings measure: the forgetting-rate discriminator with its three figures (normal, Alzheimer's, Korsakov).",
        "The procedural-versus-episodic double dissociation. Huntington's against the amnesias, the localisation favourite.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 58-year-old man with two decades of alcohol dependence is brought to the Indian memory clinic: he asks the same questions within the hour, cannot recall the morning's conversation, yet every evening tunes and plays the harmonium he has owned for thirty years; three-word learning with distraction shows a shallow slope, 30-minute delayed recall is near zero, the recognition trial fails at chance, and the savings calculation sits below 50% at minutes (the reasoning tested: the systems localisation (episodic lost, procedural spared) the H.M. pattern in Korsakov dress), the savings figure separating this from depression's retrieval failure (recognition intact) and ageing's slowed encoding (savings preserved), thiamine-first as the partly-missed prevention window, and the routine-based rehabilitation built on the surviving habit system with the family educated that the bath and prayer routines (like the harmonium) will outlast the names.",
        "A 26-year-old woman from a flood-displaced family, six months after the disaster, is brought not for forgetting but for 'fear and weak memory': nights of fragment images (the water entering, the child's cough) without any coherent narrative of the day, daytime avoidance of the river road, and a word-list examination that is largely preserved (the reasoning tested: the trauma-memory signature recognised as a memory-systems presentation (fear conditioning strengthened while contextual binding weakened) simultaneously unforgettable and fragmented), the distinction from the uniform episodic loss of the organic amnesias, the psychoeducation script (why the fragment is unforgettable and story-less at once), and the exposure rationale delivered as extinction science; new cingulate-mediated learning competing with the amygdala's trace, practice the engine, relapse the permanent trace reasserting, retraining the answer.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "H.M.: anterograde episodic amnesia; working memory, procedural memory and priming spared.",
        "LTP begins with calcium influx through NMDA receptors.",
        "Working memory holds about seven items: the prefrontal workspace impaired in schizophrenia.",
        "Extinction is active amygdala-cingulate new learning, not passive fading.",
        "Savings below 50% after minutes: Alzheimer's and Korsakov's (80–90% for hours in normals).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The systems map is a differential-diagnosis instrument: episodic failure localises to the medial-temporal-diencephalic circuit, procedural to the striatum, working memory to the prefrontal cortex; the same 'memory complaint' worked differently by system, and the spared system in each is the rehabilitation base.",
        "The H.M. expectation-setting discipline: procedural learning survives episodic failure; the amnesic patient who cannot remember the session can still learn the skill practised in it; say this to the family explicitly, because it converts grief into a rehabilitation plan.",
        "The exposure reframing held to its circuitry: relapse explained to the patient as the original trace remaining (overridden, not erased) which converts a 'failed treatment' conversation into a retraining schedule.",
        "The bedside examination India can run (three words, a distraction task, 30 minutes, a recognition trial, the savings calculation) is a complete system-level examination without any proprietary battery; the 30-minute delay is the instrument, so the clinic must be organised to hold it.",
        "The 'memory weak' interpreter discipline: depression's retrieval failure (recognition intact), ageing's slowed encoding (savings preserved), MCI's beyond-normal forgetting, the dementias' consolidation failure (savings collapsed); four patterns, one complaint, one examination that sorts them.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The harmonium outlasting the names",
      presentation: "Two decades of alcohol, a question asked within the hour, and an evening harmonium: the Korsakov clinic that taught a family which memory survives.",
      initialPresentation: "A 58-year-old man was brought to the district memory clinic by his wife: two decades of alcohol dependence, two years of repeated confusional episodes treated at home, and now the same questions within the hour, the morning's conversation gone by evening, yet every evening he tunes and plays the harmonium he has owned for thirty years.",
      history: "The alcohol burden the Korsakov pathway predicts; thiamine given late and irregularly during the confusional episodes; no head injury; the family had attributed the forgetting to weakness and age until the recognition failures became impossible to miss; the wife now asking directly what he can still learn.",
      examination: "Three-word learning with distraction: shallow slope, the second trial no better than the first. Thirty-minute delayed recall: near zero. Yes/no recognition trial: chance. Savings: collapsed, below 50% at minutes. Working-memory span: preserved. Procedural system: the harmonium played fluently; a new fingering practised one day played better the next without his recalling the practice. Word-stem completion (priming): intact.",
      diagnosis: "Wernicke-Korsakov amnesia: the diencephalic episodic-encoding failure (the same dissociation pattern as H.M.) with the implicit systems spared.",
      management: "Thiamine continued: prevention of further extension, though the established amnesia endures; family education with the systems script (the episodic store is failing, the habit store is well, the routines will outlast the names); routine-based rehabilitation: the day built on fixed sequences (bath, prayer, meals, the evening harmonium); the two-step instruction rule for everything new; the amnesic-syndromes and memory-rehabilitation programmes carried by referral.",
      outcome: "No episodic recovery: the amnesia endured as the lesion dictated; the household reorganised around the routines that held; the harmonium and the prayer sequences carried the day's structure; the family's grief converted into a rehabilitation plan once the surviving system was named.",
      teachingPoints: [
        "The H.M. pattern in Indian dress: complete episodic failure with working memory, procedural memory and priming spared; the systems dissociation at the bedside.",
        "The savings calculation below 50% at minutes: the accelerated-forgetting signature separating the amnesic from the depressed (recognition intact) and the aged (savings preserved).",
        "The thiamine lesson: prevention before the amnesia fixes; the window the irregular tablets had half-missed.",
        "Routine-based rehabilitation is not resignation but systems science: the procedural system that survives is the treatment's substrate.",
      ],
    },
    {
      title: "The flood that would not become a story",
      presentation: "Six months after the water, the fear arrived nightly in fragments, and the day's story would not assemble: the PTSD memory signature read through the systems.",
      initialPresentation: "A 26-year-old woman from a flood-displaced family was brought to the district OPD six months after the disaster, not for forgetting, but for 'fear and weak memory': nights broken by fragment images (the water entering the door, the child's cough) that never assembled into the day's narrative, daytime avoidance of the river road, and a complaint that her memory had gone weak since.",
      history: "No prior psychiatric history; no head injury; the family displaced twice; the fragments arriving with full affect (the water, the shout, the cough) while the chronological story of the day itself stayed blurred and fragmentary; she avoided talking about the event yet the images arrived unbidden.",
      examination: "General word-list examination largely preserved: learning slope normal, delayed recall and recognition intact (the episodic store not the failing system); the memory complaint localising instead to the trauma material: intrusive affect-laden fragments without contextual binding; fear conditioning strengthened, contextual binding weakened; heightened startle to flood cues; avoidance of the reminders.",
      diagnosis: "PTSD: the trauma-memory pattern: the emotional-memory system overactive, the contextual system impaired, the trauma encoded without contextual binding.",
      management: "Psychoeducation with the systems script: why the memory is simultaneously unforgettable (the amygdala's fear conditioning strengthened by extreme stress) and fragmented (the hippocampal contextual binding weakened), not madness, but memory's two systems dissociating; trauma-focused exposure treatment as extinction science: new cingulate-mediated learning inhibiting rather than erasing the amygdala's trace, the practice schedule as the engine; the relapse conversation held early (the original trace remains; a setback is retraining, not failure); the ptsd course's programme carried by referral.",
      outcome: "Over the following months of graded exposure the fragments acquired sequence (the water before the shout, the cough after) the narrative assembling as the contextual binding re-engaged; one relapse at the next monsoon's first rain, handled as retraining; the memory became tellable, still painful, but a story with a beginning and an end.",
      teachingPoints: [
        "The PTSD memory signature: intrusive affect-laden fragments without contextual binding; extreme stress producing simultaneously enhanced fear conditioning and impaired autobiographical memory.",
        "The systems differential: the trauma pattern (fragmented-unforgettable) against the organic amnesias (uniform new-learning failure with spared implicit systems); the same complaint, different systems.",
        "Exposure reframed: extinction is active amygdala-cingulate new learning; practice required, relapse possible, the original trace overridden rather than erased.",
        "The plain-language counselling the India lens demands: the fragment's strangeness explained in systems terms converts stigma into treatability.",
      ],
    },
  ],
  clinicalPearls: [
    "Memory is not one function but several dissociable systems: the same complaint localises differently by system: episodic to the medial-temporal-diencephalic circuit, procedural to the striatum, working memory to the prefrontal cortex.",
    "Working memory holds about seven items: the two-step instruction rule for cognitive impairment and the schizophrenia conversation-tracking difficulty both follow from the limit.",
    "H.M. (1953): complete enduring anterograde episodic amnesia with spared working memory, procedural memory and priming; the dissociation that established the systems.",
    "The Korsakov mirror: medial thalamus, mamillary body and fornix; the same pattern as H.M., and a common Indian memory-clinic presentation.",
    "The LTP cascade (NMDA, calcium, kinases, CREB, protein synthesis) with early phase learning's signature and late (protein-synthesis-dependent) phase consolidation's; LTD the counter-directional partner giving bidirectional modulation of synaptic strength.",
    "Pattern separation (hippocampal) and pattern completion (partial-cue reinstatement), and the schizophrenia reading: retrieval failures born of compromised encoding.",
    "Recollection is predominantly hippocampal, familiarity linked to perirhinal cortex, with the lesion qualification that circumscribed hippocampal lesions also impair familiarity (the MTL as an integrated network).",
    "Savings: 80–90% for hours in normals; below 50% after minutes in Alzheimer's and Korsakov's: the cheap, powerful bedside discriminator.",
    "Extinction is active new learning (amygdala-cingulate), not passive fading. The original trace remains, which is why practice matters and relapse is possible.",
    "Extreme stress produces enhanced fear conditioning with impaired contextual binding: the trauma memory simultaneously unforgettable and fragmented (the PTSD signature).",
    "The amnesic patient who cannot remember the session can still learn the skill practised in it: procedural learning survives episodic failure; build the rehabilitation on routines.",
    "Left prefrontal encodes, right prefrontal retrieves, and the bedside examination reads material-specific medial-temporal laterality through its verbal and visual tests.",
  ],
  highYieldSummary: [
    "THE TAXONOMY: memory is not one function but several dissociable systems. By duration: ultrashort-term (echoic-iconic sensory retention, milliseconds to seconds); short-term (seconds to minutes, rehearsal-fed, capacity-limited to about seven items, working memory the workspace variant holding task-relevant, environment-absent information for manipulation and goal-directed behaviour, the system impaired in schizophrenia with the prefrontal parallel-link neurobiology); long-term (minutes to lifespan, not capacity-limited, dependent on enduring neuronal-structure changes, the engram question). By content: declarative: episodic (events with temporal, spatial and emotional context; familiarity versus recollection; déjà vu; false memories) and semantic (facts, context-independent, slowly consolidated into neocortex over multiple exposures, retrievable without the MTL); implicit: procedural skills (striatum and cerebellum), priming (neocortical), conditioning and extinction (amygdalar). Each box its own neural system, and the declarative/implicit distinction concerns conscious access, not test surface (a sentence-completion test can be priming-driven).",
    "THE CELLULAR ENGINE: LTP; high-frequency presynaptic stimulation (the hippocampal CA1 model) producing weeks-long enhancement of postsynaptic responsiveness; the cascade calcium influx through NMDA receptors (with AMPA and mGluR contributions), cAMP and protein kinases (CaMKII), CREB, altered protein synthesis and phosphorylation; early-phase LTP (seconds-minutes (the cellular signature of learning) against late-phase LTP (minutes-hours, protein-synthesis-dependent) the consolidation signature). LTD (the closely related opposite: lower presynaptic stimulation, less calcium influx, preferential calcineurin activation, enduring synaptic depression) together bidirectional modulation of synaptic strength. Hebb's assembly principle: changed synaptic efficacy across neural assemblies can, in principle, encode, store and retrieve information; the bridge from molecules to mind.",
    "THE DECLARATIVE ARCHITECTURE: the hippocampal formation (hippocampus proper, entorhinal cortex as the cortical port of entry, perirhinal and parahippocampal cortices receiving from all neocortical areas) with the prefrontal cortex for encoding-retrieval organisation. H.M. (1953): bilateral HF and amygdala resection for epilepsy; complete enduring anterograde amnesia with partial retrograde amnesia, working memory, procedural memory and priming unimpaired; the same pattern in Wernicke-Korsakov syndrome and the diencephalic lesions (medial thalamus, mamillary body, fornix): the distributed episodic-encoding system. The computational model: segregated spatial and item streams converging in entorhinal cortex; hippocampal pattern separation (unambiguous retrieval, enormous storage capacity); retrieval by partial cues activating entorhinal fragments with pattern completion reinstating the full representation. The schizophrenia simulation: reduced inter-module connectivity (compromised item-context association plus mild separation loss, free recall disproportionately impaired with recognition mildly affected) disproportionate retrieval failures due to compromised encoding. Recollection predominantly hippocampal, familiarity linked to perirhinal cortex (neuroimaging), with the lesion qualification (circumscribed hippocampal lesions also impair familiarity). Hemispheric asymmetry: left prefrontal encoding, right prefrontal retrieval. The engram: neocortex (the category-specific anomias). Neurotransmitters: glutamate as the LTP-LTD substrate; acetylcholine modulating declarative memory (muscarinic blockade impairing episodic memory; the Meynert basal-nucleus degeneration of Alzheimer's).",
    "ASSESSMENT AND THE IMPLICIT SYSTEMS: the episodic batteries (the Wechsler Memory Scale-III with verbal-visual immediate and delayed indexes; the California and Hopkins Verbal Learning Tests; the Selective Reminding Test with alternate forms reducing practice effects) and the principles: multiple word-list trials (the learning slope), immediate and delayed recall (30 minutes), recognition testing (minimising effortful retrieval), visual and verbal tests (the material-specific MTL laterality), depth of encoding (semantic judgements beating orthographic; levels of processing). The rate of forgetting: savings 80–90% for hours in normals, below 50% after minutes in Alzheimer's and Korsakov's (increased also in a frontotemporal dementia variant); the accelerated-forgetting signature. The implicit systems clinically: procedural memory spared in deep MTL amnesia, impaired in Huntington's and other basal-ganglia disease (the double dissociation; the striatum's parallel loops integrating sensorimotor, cognitive and emotional information; the cerebellum's closed-loop error control); priming neocortical (reduced activation to primed stimuli, the pruned, optimised assemblies; the prediction of impaired semantic priming in Alzheimer's disease); fear conditioning in the amygdala's subnuclei (high psychiatric relevance across phobias, GAD and depression); extinction an active amygdala-cingulate process, not passive fading: dysphoric mood abnormally maintained (not extinguished) in depression and anxiety, the circuit-level account of persistent negative affect.",
    "EMOTION AND MEMORY. THE INTEGRATION: emotional memories ride hippocampal-amygdalar interactions (especially fearful or aversive material), the amygdala modulating hippocampal consolidation through the catecholamine and stress-hormone mechanisms; extreme stress produces simultaneously enhanced fear conditioning and impaired autobiographical memory: the PTSD pattern (intrusive emotional memories: the emotional-memory system overactive, the contextual system impaired, trauma without contextual binding) and the recovered-memories territory's amnesia speculations. The memory-psychiatry links: the amnesias and dementias (the episodic-encoding system failing); schizophrenia (the encoding-retrieval simulation; working memory); psychotherapy (remembered episodes as material; new habits and response patterns as procedural learning: declarative insight converting to implicit skill over time).",
    "THE CLINICAL TRANSLATION: the systems map is differential diagnosis; episodic failure (medial-temporal-diencephalic: Alzheimer's, Korsakov) against procedural failure (striatal: Huntington's) against working-memory failure (prefrontal: schizophrenia), the same complaint localising differently; the forgetting-rate test is cheap and powerful (savings below 50% at minutes separating the amnesic and dementing from the depressed and normal); the extinction insight reframes therapy (exposure as new cingulate-mediated learning overriding the amygdala's fear, relapse patterns and practice requirements explained); the H.M. lesson protects expectation-setting (procedural learning survives pure episodic failure, the amnesic patient who cannot remember the session can still learn the skill practised in it); and the false-memory science is forensic psychiatry's foundation (laboratory implantation, suggestibility, source-confusion, memory's reconstructive nature as expert-witness knowledge).",
    "THE INDIA LAYER: the bedside memory examination India can run (three-word learning with distraction, 30-minute delayed recall, a yes/no recognition trial, the savings concept as the quantitative layer) the system-level examination without any proprietary battery; the Korsakov pathway (the thiamine-deficiency amnesia as a common Indian memory-clinic presentation, the diencephalic episodic-encoding failure with spared procedural learning, hence the value of routine-based rehabilitation); the dementia expansion (India's ageing demographics making the episodic/semantic/implicit dissociations daily clinical tools, episodic first, priming failing with progression, procedural relatively spared: the bath and prayer routines persisting after the names have gone); the trauma-memory framing (disaster, conflict and displacement populations presenting the PTSD memory signature, why the traumatic memory is simultaneously unforgettable and fragmented, the exposure rationale in plain clinical language); the seven-item and workspace teaching (instructions exceeding capacity; the two-step instruction rule; the schizophrenia conversation-tracking difficulty); and the interpreter discipline for the OPD's 'memory weak': depression's retrieval failure (recognition intact), ageing's slowed encoding (savings preserved), MCI's beyond-normal forgetting, the dementias' consolidation failure (savings collapsed).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "mes-quiz-1",
      question: "Patient H.M., after bilateral hippocampal and amygdala resection, demonstrated which pattern?",
      options: ["Global memory loss including skills", "Complete anterograde episodic amnesia with preserved working memory, procedural memory and priming", "Retrograde-only amnesia", "No memory impairment"],
      correctIndex: 1,
      explanation: "The dissociation that established the systems: episodic encoding (hippocampal-diencephalic) lost; the implicit systems and the workspace spared.",
      afterSectionId: "mechanism",
    },
    {
      id: "mes-quiz-2",
      question: "The synaptic mechanism of long-term potentiation begins with:",
      options: ["Calcium influx through NMDA receptors", "Dopamine D2 blockade", "Myelin thickening", "Cell division"],
      correctIndex: 0,
      explanation: "The NMDA-calcium cascade leading to kinases, CREB and protein synthesis; late-phase LTP (minutes-hours, protein-synthesis-dependent) is the consolidation signature.",
      afterSectionId: "mechanism",
    },
    {
      id: "mes-quiz-3",
      question: "In the entorhinal-hippocampal memory model, pattern separation refers to:",
      options: ["Spatial navigation only", "The hippocampus's separating of overlapping entorhinal representations — unambiguous retrieval and expanded storage capacity", "Sleep architecture", "Emotional regulation"],
      correctIndex: 1,
      explanation: "With pattern completion (partial cues reinstating the full representation) as the retrieval counterpart — the same architecture from which the schizophrenia simulation derives its retrieval-failures-from-encoding-failure conclusion.",
      afterSectionId: "brain",
    },
    {
      id: "mes-quiz-4",
      question: "Which double dissociation links procedural memory to its neural system?",
      options: ["Procedural memory spared in hippocampal amnesia; impaired in Huntington's and basal-ganglia disease", "Procedural memory impaired by amygdala lesions", "Procedural memory is cerebellar-only", "No dissociation exists"],
      correctIndex: 0,
      explanation: "The striatum-cerebellum system for skills against the medial-temporal-diencephalic system for episodes — the mirror-image patient profiles.",
      afterSectionId: "differential",
    },
    {
      id: "mes-quiz-5",
      question: "Extinction of conditioned fear, as currently understood:",
      options: ["Is passive decay of the fear memory", "Is an active amygdala-cingulate process — new learning overriding rather than erasing the original trace", "Requires hippocampal damage", "Is permanent once achieved"],
      correctIndex: 1,
      explanation: "The clinical corollaries: exposure therapy as active new learning (practice, relapse possibility) and the depression-anxiety non-extinguishing dysphoria as circuit-level persistence.",
      afterSectionId: "management",
    },
    {
      id: "mes-quiz-6",
      question: "Savings (retention relative to initial learning) in normal individuals versus Alzheimer's and Korsakov's patients:",
      options: ["Identical in all groups", "80–90% for hours in normals; below 50% after minutes in Alzheimer's and Korsakov's", "100% in all", "Zero in normals"],
      correctIndex: 1,
      explanation: "The accelerated-forgetting signature — the cheap, powerful discriminator the bedside examination can track.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "Draw the two-axis taxonomy (duration by content), filling every box with its neural system.", answer: "DURATION: ultrashort-term (echoic and iconic sensory retention, milliseconds to seconds, modality-specific buffers); short-term (seconds to minutes, rehearsal-fed, capacity about seven items; working memory the workspace variant: prefrontal); long-term (minutes to lifespan, not capacity-limited, dependent on enduring neuronal-structure changes, the engram question). CONTENT, DECLARATIVE (consciously, intentionally retrievable): episodic (events with temporal, spatial and emotional context (the medial temporal lobe-hippocampal formation) and semantic (facts and vocabulary, context-independent, slowly stored in neocortex) neocortical, retrievable without the MTL). CONTENT, IMPLICIT (not consciously retrieved): procedural skills (striatum and cerebellum), priming (neocortex), conditioning and extinction (amygdala). The warning: the declarative/implicit distinction concerns conscious access, not test surface; a sentence-completion test can be priming-driven.", topic: "The taxonomy" },
    { question: "Define working memory and give its psychiatric significance.", answer: "DEFINITION: the mental workspace holding task-relevant, environment-absent information for manipulation and goal-directed behaviour (the studied variant of short-term memory (seconds to minutes, rehearsal-fed, capacity-limited to about seven items) the phone number from reading to dialling). SIGNIFICANCE: the schizophrenia working-memory impairments (conversation-tracking, planning) with the prefrontal-parallel-link neurobiology; plus the everyday clinic phenomena the limit explains: instructions exceeding capacity and the two-step instruction rule for cognitive impairment.", topic: "Working memory" },
    { question: "Contrast episodic and semantic memory across five dimensions.", answer: "CONTEXT: episodic events carry temporal, spatial and emotional context (what did you have for breakfast?); semantic facts are context-independent. SPEED: episodic is rapid single-trial learning; semantic stores slowly over multiple exposures. STORAGE LOCUS: episodic binds in the hippocampal-MTL formation; semantic consolidates into neocortex (retrievable without the MTL). RETRIEVAL REQUIREMENT: episodic retrieval is context-bound reconstruction (familiarity versus recollection, déjà vu and false memories its clinical features); semantic retrieval is context-free. THE MTL ROLE: essential for episodic encoding and retrieval; dispensable for established semantic knowledge. H.M.'s dissociation in every dimension.", topic: "Episodic versus semantic" },
    { question: "Walk the LTP cascade naming each step; distinguish early from late phase; state LTD's reversal.", answer: "LTP: high-frequency presynaptic stimulation (the hippocampal CA1 model) → calcium influx through NMDA receptors (with AMPA and mGluR contributions) → cAMP and protein kinases (CaMKII) → the gene-transcription factor CREB → altered protein synthesis and phosphorylation → weeks-long enhancement of postsynaptic responsiveness. EARLY PHASE (seconds-minutes): the cellular signature of learning. LATE PHASE (minutes-hours, protein-synthesis-dependent): the consolidation signature. LTD (the closely related opposite: lower presynaptic stimulation → less calcium influx → preferential calcineurin (phosphatase) activation → enduring synaptic depression) together bidirectional modulation of synaptic strength, the formation and reversal of experience-dependent coupling (Hebb's assembly principle the network-modelling bridge from molecules to mind).", topic: "The cellular engine" },
    { question: "H.M.: what was lost, what was spared, what was established?", answer: "LOST (1953, bilateral hippocampal-formation and amygdala resection for epilepsy): new episodic memory (complete enduring anterograde amnesia) with partial retrograde amnesia for pre-surgery episodes. SPARED: working memory, procedural memory (new skills acquirable), priming; the implicit systems intact. ESTABLISHED: the hippocampal-diencephalic system's episodic-encoding role and its non-involvement in implicit systems; the same pattern later in Wernicke-Korsakov syndrome and the diencephalic lesions (medial thalamus, mamillary body, fornix): the distributed episodic-encoding system; and the clinical expectation it protects: the amnesic patient can still learn the skills practised.", topic: "The H.M. lesson" },
    { question: "Explain pattern separation and pattern completion, and the schizophrenia simulation's conclusion.", answer: "THE ARCHITECTURE: two segregated cortical streams (spatial and item information) converge in entorhinal cortex, which integrates co-occurrence; the hippocampus proper rapidly codes the conjunction and separates overlapping entorhinal patterns: pattern separation, ensuring unambiguous retrieval and enormous storage capacity. RETRIEVAL: partial cues activate entorhinal fragments → associated hippocampal nodes → pattern completion reinstating the full representation with its features. THE SCHIZOPHRENIA SIMULATION: reduced inter-module connectivity → compromised item-context cross-association plus mild pattern-separation loss → patterns irretrievable (recognition mildly affected) and single-cue searching failing (free recall disproportionately impaired); the conclusion: disproportionate retrieval failures due to compromised encoding, the information-processing reading of schizophrenia's memory deficit.", topic: "The computational model" },
    { question: "State the savings figures (normal, Alzheimer's, Korsakov) and the double dissociation that links procedural memory to its neural system.", answer: "SAVINGS (retention relative to initial learning): 80–90% for hours in normals; below 50% after minutes in Alzheimer's and Korsakov's: the accelerated-forgetting signature (increased forgetting also in a frontotemporal dementia variant); the cheap, powerful bedside discriminator. THE DOUBLE DISSOCIATION: procedural memory is spared in hippocampal-diencephalic amnesia (deep MTL loss leaves skills acquirable. H.M. learned new skills) and impaired in Huntington's and other basal-ganglia disease (striatum and cerebellum): the mirror-image patient profiles that localise skill memory to the striatum-cerebellum and episodic memory to the medial-temporal-diencephalic system.", topic: "Assessment and dissociations" },
    { question: "Describe the fear-conditioning and extinction circuitry and the depression-anxiety connection.", answer: "FEAR CONDITIONING: the amygdala's subnuclei establish and store the conditioned stimulus-unconditioned stimulus association; of high psychiatric relevance across the phobias, GAD and depression. EXTINCTION: now clearly an active process depending on amygdala-cingulate interactions, not passive fading; new learning that inhibits the fear response while the original trace remains (hence practice matters and relapse is possible). THE DEPRESSION-ANXIETY CONNECTION: dysphoric mood and affect abnormally maintained (not extinguished) in depression and anxiety; the circuit-level account of persistent negative affect; and the therapy corollary: exposure treatment as active new cingulate-mediated learning overriding the amygdala's fear, the practice schedule the engine and relapse the permanent trace reasserting.", topic: "Fear and extinction" },
  ],
  faqs: [
    { question: "Is memory one thing or several?", answer: "Several: the systems differ by duration (seconds to lifelong), content (events and facts versus skills, priming and conditioning) and brain basis (hippocampal for events; striatal for habits; amygdalar for fears), which is why one disease can destroy memory for events while leaving skills and emotional learning intact." },
    { question: "What is working memory?", answer: "The mental workspace holding information for the task at hand when the information is not in front of you: limited to about seven items, and the system whose failure makes schizophrenia's conversation-tracking and planning difficult." },
    { question: "Why can't she learn anything new but still plays the harmonium?", answer: "Because the systems are separate: H.M. could not form new episodic memories but acquired new skills: procedural learning (striatum-cerebellum) survives hippocampal failure, and therapy for the amnesic patient builds on the same spared system." },
    { question: "What actually changes in the brain when we remember?", answer: "Synaptic strength: high-frequency use strengthens connections (LTP) and disuse-patterns weaken them (LTD); protein-synthesis-dependent changes that make some assemblies easier to reactivate than others; the memory is the changed ease of reactivation." },
    { question: "Why do traumatic memories behave so strangely?", answer: "Because the emotional and contextual systems can dissociate under extreme stress: the amygdala's fear learning strengthens while the hippocampal contextual binding weakens, leaving an unforgettable fragment without a context; the PTSD signature." },
    { question: "How does exposure therapy work if the fear memory is permanent?", answer: "By new learning, not erasure: extinction is an active cingulate-amygdala process that inhibits the fear response, which is why practice matters and relapse is possible: the original trace remains, overridden by new circuitry." },
    { question: "Is 'memory weak' always a memory disease?", answer: "No: depression impairs retrieval (recognition preserved), ageing slows encoding, and attention failures masquerade as memory loss; the system examination (learning slope, delay, recognition, savings) sorts the mimics from the true amnesias." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Oxford ch 2.5.3–2.5.4 synthesis (Meyer-Lindenberg & Goldberg) — the memory and emotion chapters' clinical reading (paraphrased from the source chapters)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 2.5.3–2.5.4 — source chapters mapped; content rewritten and updated beyond it (2009)" },
      { source: "Squire LR — the declarative/implicit memory-systems framework" },
      { source: "Baddeley AD — the working-memory model (with Miller's 1956 seven-item origin); Hebb DO (1949) — The Organization of Behavior: the assembly principle" },
    ],
    trials: [
      { source: "Scoville WB & Milner B (1957) — the H.M. case report" },
      { source: "Bliss TVP & Lømo T (1973) — the LTP discovery; the CA1 hippocampal paradigm" },
      { source: "Milner B et al. — the H.M. long-term follow-ups; Knowlton BJ et al. — the striatal procedural-learning double dissociations" },
      { source: "Eldridge LL et al. — the recollection/familiarity neuroimaging (with Squire's lesion-qualification tradition)" },
    ],
    reviews: [
      { source: "Kandel ER — the molecular-biology-of-memory tradition (CREB, consolidation)" },
      { source: "O'Keefe J & Nadel L — the hippocampal cognitive-map theory" },
      { source: "Norman KA & O'Reilly RC / McClelland JL et al. — the pattern-separation/completion complementary-learning-systems models" },
      { source: "Tulving E — the episodic/semantic distinction; Craik FIM — the levels-of-processing tradition" },
      { source: "LeDoux JE — the amygdala fear-conditioning framework; Phelps EA & LeDoux JE — the human emotional-memory integration" },
    ],
    patientResources: [
      { source: "The bedside memory examination script (three words, distraction, 30-minute delay, recognition, savings) — the instrument this course hands to every Indian clinician" },
      { source: "Tele-MANAS 14416 and the district memory clinic — the reachable channels for every 'memory weak' complaint" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: the several kinds of memory, which survives when events are lost, why trauma memories fragment, when to seek help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The taxonomy grid, working memory, the LTP cascade, the H.M. lesson, the savings figures, the fear circuit.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the pathways, the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "37 min",
      description: "Everything: the systems craft, the bedside examination, the extinction reframing, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The systems claim: duration by content, the neural assignment, the working-memory workspace.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can draw the taxonomy grid with every box's neural system and define working memory." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The LTP-LTD engine, the H.M. lesson, pattern separation and completion, the fear and extinction circuit.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the LTP cascade, tell the H.M. dissociations and explain extinction as active learning." },
    { number: 3, title: "Clinical Practice", description: "The bedside examination, the savings discriminator, the systems differential, the management translations.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the three-word examination and interpret it through the systems lens cold." },
    { number: 4, title: "Indian Context", description: "The no-battery instrument, the Korsakov pathway, the trauma framing, the two-step rule.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can interpret 'memory weak' through the four Indian patterns and deliver the systems scripts to a family." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the H.M. question and the savings question cold and recite the extinction reframing." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 2.5.3–2.5.4 (Meyer-Lindenberg & Goldberg) — the memory and emotion-anatomy source chapters mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Scoville WB & Milner B — the H.M. case report (bilateral medial-temporal resection; the dissociations)", sourceType: "primary", year: "1957", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Squire LR — the declarative/implicit memory-systems framework", sourceType: "textbook", year: "1980s–2000s", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Baddeley AD — the working-memory model; the seven-item tradition with Miller's 1956 origin", sourceType: "primary", year: "1956; 1970s onward", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Bliss TVP & Lømo T — the LTP discovery; the hippocampal CA1 paradigm", sourceType: "primary", year: "1973", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Kandel ER — the molecular-biology-of-memory tradition (CREB, protein-synthesis-dependent consolidation)", sourceType: "review", year: "1960s–2000s", dateReviewed: "2026-09-30" },
    { id: "S7", source: "O'Keefe J & Nadel L — the hippocampal cognitive-map theory (the rodent neural map, controversially extended to humans)", sourceType: "textbook", year: "1978", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Norman KA & O'Reilly RC and McClelland JL et al. — the pattern-separation/completion complementary-learning-systems models (as cited)", sourceType: "review", year: "1995; 2000s", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Eldridge LL et al. — the recollection/familiarity neuroimaging; the perirhinal literature with Squire's lesion-qualification tradition", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Tulving E — the episodic/semantic distinction; the levels-of-processing tradition with Craik FIM", sourceType: "primary", year: "1972; 1975", dateReviewed: "2026-09-30" },
    { id: "S11", source: "LeDoux JE — the amygdala fear-conditioning framework; Phelps EA & LeDoux JE — the human emotional-memory integration (as cited in the emotion chapter)", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Milner B et al. — the H.M. long-term follow-ups; Knowlton BJ et al. — the striatal procedural-learning double dissociations", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-30" },
    { id: "S13", source: "Hebb DO — the assembly principle underlying the network models", sourceType: "textbook", year: "1949", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The systems taxonomy: memory is not one function but several dissociable systems differing by duration (ultrashort sensory; short-term, capacity-limited to about seven items, working memory the workspace variant; long-term, not capacity-limited) and content (declarative: episodic, rapidly learned and hippocampal-MTL-bound; semantic, slow multi-exposure neocortical storage; implicit: procedural striatal-cerebellar, priming neocortical, conditioning amygdalar), the declarative/implicit distinction concerning conscious access rather than test surface.", grade: "established", sources: ["S1", "S3", "S10"] },
    { text: "Working memory: the mental workspace holding task-relevant, environment-absent information for manipulation and goal-directed behaviour; limited to about seven items, impaired in schizophrenia with the prefrontal parallel-link neurobiology.", grade: "established", sources: ["S4", "S1"] },
    { text: "The LTP-LTD engine: high-frequency stimulation drives calcium influx through NMDA receptors (with AMPA and mGluR contributions), kinases (CaMKII), CREB and protein synthesis; early-phase LTP the learning signature, late (protein-synthesis-dependent) phase the consolidation signature; LTD (lower stimulation, less calcium, preferential calcineurin activation) the counter-directional partner giving bidirectional modulation of synaptic strength, per Hebb's assembly principle.", grade: "established", sources: ["S5", "S6", "S13"] },
    { text: "The H.M. lesson and the diencephalic extension: bilateral hippocampal-formation and amygdala resection (1953) produced complete enduring anterograde amnesia with partial retrograde loss while working memory, procedural memory and priming stayed unimpaired; the same pattern as Wernicke-Korsakov syndrome and the diencephalic lesions (medial thalamus, mamillary body, fornix), establishing the distributed episodic-encoding system and its non-involvement in implicit systems.", grade: "established", sources: ["S2", "S12", "S1"] },
    { text: "The entorhinal-hippocampal computational model: segregated spatial and item streams converge in entorhinal cortex; the hippocampus separates overlapping patterns (pattern separation, unambiguous retrieval, enormous capacity); retrieval proceeds by partial cues, entorhinal fragments and pattern completion; recollection predominantly hippocampal, familiarity linked to perirhinal cortex, with the lesion qualification that circumscribed hippocampal lesions also impair familiarity, the MTL as an integrated network.", grade: "supported", sources: ["S8", "S9", "S3"] },
    { text: "The schizophrenia simulation: reduced inter-module connectivity producing compromised item-context association plus mild pattern-separation loss; free recall disproportionately impaired with recognition mildly affected; the conclusion, disproportionate retrieval failures due to compromised encoding (the information-processing reading of schizophrenia's memory deficit).", grade: "proposed", sources: ["S8"] },
    { text: "Hemispheric asymmetry and the engram: left prefrontal differentially encoding and right differentially retrieving; the engram stored in neocortex (the category-specific anomias (people, tools, living things) from circumscribed cortical lesions); glutamate as the LTP-LTD substrate and acetylcholine modulating declarative memory (muscarinic blockade impairing episodic memory; the Meynert basal-nucleus degeneration of Alzheimer's).", grade: "established", sources: ["S1", "S6"] },
    { text: "The assessment principles: multiple word-list trials for the learning slope (WMS-III, the California and Hopkins Verbal Learning Tests, the Selective Reminding Test with alternate forms); immediate and delayed recall (30 minutes); recognition testing minimising effortful retrieval; visual and verbal tests reading the material-specific MTL laterality; depth of encoding (semantic judgements beating orthographic); and the savings figures: 80–90% for hours in normals against below 50% after minutes in Alzheimer's and Korsakov's (increased forgetting also in a frontotemporal dementia variant).", grade: "established", sources: ["S1", "S10"] },
    { text: "The implicit systems clinically: procedural memory spared in deep MTL amnesia and impaired in Huntington's and other basal-ganglia disease (the double dissociation; the striatum's parallel loops; the cerebellum's closed-loop error control); priming neocortical (reduced activation to primed stimuli) with the model's prediction of impaired semantic priming in Alzheimer's disease.", grade: "established", sources: ["S12", "S3", "S1"] },
    { text: "Fear conditioning and extinction: the amygdala's subnuclei establish and store the CS-US association (of high psychiatric relevance across phobias, GAD and depression); extinction is now clearly an active process depending on amygdala-cingulate interactions, not passive fading: new learning that inhibits rather than erases the original trace.", grade: "established", sources: ["S11", "S1"] },
    { text: "The emotional-memory integration: hippocampal-amygdalar interactions for fearful or aversive material, the amygdala modulating hippocampal consolidation through catecholamine and stress-hormone mechanisms; extreme stress producing simultaneously enhanced fear conditioning and impaired autobiographical memory: the PTSD pattern of intrusive fragments without contextual binding; dysphoric mood abnormally maintained (not extinguished) in depression and anxiety; and the false-memory finding that people can be convinced to remember events that never happened.", grade: "supported", sources: ["S11", "S1", "S10"] },
    { text: "The clinical translations: the systems map as differential localisation (episodic MTL-diencephalic against procedural striatal against working-memory prefrontal); the forgetting-rate test separating the amnesic and dementing from the depressed and normal; exposure as new cingulate-mediated learning overriding the amygdala's fear; procedural learning surviving episodic failure as the rehabilitation base; and the false-memory science as forensic psychiatry's foundation.", grade: "established", sources: ["S1", "S2", "S11"] },
    { text: "The India layer: the bedside memory examination (three-word learning with distraction, 30-minute delayed recall, yes/no recognition, savings as the quantitative layer) deliverable without any proprietary battery; the Korsakov pathway as a common Indian memory-clinic presentation (thiamine-first; routine-based rehabilitation on spared procedural learning); the dementia expansion with the bath-and-prayer-routines family education; the trauma-memory framing for disaster, conflict and displacement populations; the seven-item and workspace teaching with the two-step instruction rule; and the 'memory weak' interpreter discipline (depression's retrieval failure, ageing's slowed encoding, MCI's beyond-normal forgetting, the dementias' consolidation failure): practice-pattern description from the note's India lens, context honestly labelled.", grade: "supported", sources: ["S1"] },
  ],
};
