import type { PsychiatryCourse } from "./types";

/**
 * DESCRIPTIVE PHENOMENOLOGY — canonical Psychiatry concept course
 * (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/psychiatric-phenomenology.md — untouched
 * foundation), which is itself an original rewrite of the Oxford
 * ch 1.7 synthesis (NOTP 2e, 2009, Part 1 — Sims): perception,
 * thinking, self and insight phenomenology paraphrased, never
 * reproduced as lists. Re-researched against the lineages the
 * note itself cites — Jaspers' General Psychopathology,
 * Schneider's first-rank catalogue, Cutting's and Janzarik's
 * hallucination definitions, Zucker's as-if experiments,
 * Klosterkötter's transition observations, Penfield & Perot's
 * cortical-stimulation studies, Krause's videotape work,
 * McKenna's overvalued-ideas paper, Beck's negative schema,
 * Frith & Done's intention-monitoring account, Hemsley's
 * cognitive-anomaly model, David's insight framework, and the
 * Kandinsky/Scharfetter ego-psychopathology tradition — with
 * per-claim provenance.
 *
 * Drug routes: NONE — the note assigns no medication any role;
 * the substances it names (amphetamine psychoses, cannabis-like
 * misperceptions, alcoholic delirium) are descriptive contrasts
 * of the hallucination catalogue, not treatments. drugLinks is
 * empty by design; the substance courses carry their own
 * routes, and the honest boundaries are recorded in
 * contentGaps, never invented.
 *
 * Born-normalized metadata: title "Descriptive Phenomenology"
 * (topic only, no em-dash subtitle), tagline under 90
 * characters, summary under 45 words — this course meets the
 * final curriculum normalization rules on arrival.
 */
export const psychiatricPhenomenologyCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "psychiatric-phenomenology",
  title: "Descriptive Phenomenology",
  shortName: "Phenomenology",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Descriptive Phenomenology"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Psychiatry's clinical language: form vs content, primary vs secondary, symptom catalogue",

  summary:
    "The discipline that gives psychiatry its clinical language: precisely describing and categorising abnormal experience. It covers form versus content, primary versus secondary phenomena, and the symptom catalogue from hallucination to delusion to thought disorder.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define psychopathology and its descriptive branch (the precise description and categorisation of abnormal experiences as recounted by the patient and observed in behaviour) and state its two components: observation of behaviour and the empathic assessment of subjective experience.",
    "Use the empathic method as an examination skill (organised questions, rephrasing, reiteration and the final recounting-back until the patient recognises the description as accurate) and explain why psychiatric symptom and sign both live in the patient's speech.",
    "State Jaspers' four great distinctions (understanding versus explaining, primary versus secondary, form versus content, development versus process) with one clinical example of each.",
    "Define the perception phenomena: hallucination (Cutting's definition, Janzarik's free-running psychic contents, Zucker's as-if quality), pseudohallucination (Jaspers' criteria and Kandinsky's vignette), imagery, illusion, delusional perception and thought-echo, and distinguish them from one another.",
    "Match hallucination modalities to their diagnostic leanings: voices about-and-commenting (typical of, never specific to, schizophrenia), visual fine structures and siege experiences (organic), tactile and coenaesthetic phenomena (the schizophrenia pointer), and recite the three aetiological theories of hallucinations.",
    "Recite the delusion definition with the discarded impossibility criterion, the four primary-delusion types with the atmosphere-to-formed-delusion sequence, the six themes with their mood mappings, the three structural axes, and the overvalued idea against them.",
    "Define the thought-process disorders (acceleration, retardation, circumstantiality, tangentiality, perseveration, thought blocking, loosening of associations and incoherence) with one diagnostic association each, and the speech-and-language layer beneath them.",
    "Use the self-experience and insight material clinically (Scharfetter's ego dimensions, depersonalisation with retained insight, David's three-dimensional insight) and apply the form-content discipline across cultures, languages and the Indian clinic.",
  ],
  quickFacts: [
    { label: "The definition", value: "Description before explanation", detail: "Descriptive psychopathology precisely describes and categorises abnormal experiences as recounted by the patient and observed in behaviour, against explanatory psychopathologies that theorise causes; Jaspers' phenomenology demands the patient introspect and describe, the doctor recognise and understand, aiming to know what the experience must feel like" },
    { label: "The examination rule", value: "Symptom and sign live in the speech", detail: "The patient complains of his mood (symptom) and ascribes his knee pain to alien forces (sign) in the same sentence; for diagnostic use a symptom must be typical of the condition and occur relatively frequently in it" },
    { label: "The four distinctions", value: "Jaspers' apparatus", detail: "Understanding (empathic, meaningful) vs explaining (causal, scientific); primary (irreducible by empathy) vs secondary (meaningfully emergent); form (identifies the disorder) vs content (reveals the person); development (grows from history) vs process (imposed from outside)" },
    { label: "The delusion", value: "Overriding, rigid, self-evident, private, isolating", detail: "The working definition: overriding, rigid convictions which create a self-evident, private and isolating reality requiring no proof; the impossibility criterion rightly discarded (collective socio-cultural beliefs read false elsewhere; delusional jealousy's content is possible)" },
    { label: "The primary four", value: "Intuition, percept, memory, atmosphere", detail: "Delusional intuition (autochthonous, out of the blue); delusional percept (a Schneider first-rank symptom); delusional memory; delusional atmosphere: the uncanny something-is-happening that matures into self-referential certainty and then the formed delusion, whose arrival releases the preceding perplexity" },
    { label: "The modality pointers", value: "Typical of, never specific to", detail: "Voices talking about the patient among themselves or commenting on his actions: schizophrenia-typical; fine structures (hairs, threads, spider webs on white walls) and siege experiences: alcoholic delirium and organic states; strongly externally-attributed coenaesthesia predicts schizophrenia (Klosterkötter)" },
    { label: "The bridge category", value: "The overvalued idea", detail: "An acceptable, comprehensible idea pursued beyond the bounds of reason, causing disturbed functioning or suffering: dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy, the querulous pursuit of injustice; the preventer of both psychosis overdiagnosis and undertreatment" },
    { label: "The affective contrast", value: "Grown vs arrived", detail: "Affective delusions grow out of the underlying excessive mood and appear consonant with the personality; schizophrenic delusions appear as something new and alien. The diagnostic feel of the two psychoses in a single rule" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The first-rank home: delusional percept, thought-echo, voices about-and-commenting (typical, never specific), passivity and loosening of associations" },
    { label: "Persistent Delusional Disorder", type: "condition", href: "/psychiatry/delusional-disorder/", note: "The theme and structure catalogue applied: the six contents, systematisation, the overvalued-idea boundary" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The visual-modality territory: sensory realism, fine structures, siege experiences, and incoherence as loosening's organic cousin" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The anankastic phenomena: obsessions and compulsions recognised as one's own yet resisted" },
    { label: "Depersonalization / Derealization Disorder", type: "condition", href: "/psychiatry/depersonalization-disorder/", note: "The self-experience compartment: depersonalisation with retained insight against the nihilistic delusion of Cotard's syndrome" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The mood-thematic mapping's depressive pole: guilt, unworthiness, nihilism, and Beck's negative cognitive triad beneath" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Acceleration and flight of ideas; the grandiose and erotic themes growing out of mania's excessive mood" },
    { label: "Psychiatric Assessment", type: "condition", href: "/psychiatry/psychiatric-assessment/", note: "The mental-state examination: phenomenology's daily instrument, and the private-interview discipline the India lens invokes (migrating in this same batch)" },
    { label: "Psychodynamic Theories", type: "condition", href: "/psychiatry/psychodynamic-theories/", note: "The explanatory/dynamic psychopathologies the descriptive method defines itself against. Jaspers' boundary line (migrating in this same batch)" },
    { label: "Temporal cortex", type: "brain-region", href: "#brain", note: "Penfield & Perot's stimulation site: scenic hallucinations in 8% of 500 temporal stimulations; the overstimulation theory's evidence" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The conceptual engine of psychiatry is a listening discipline. Descriptive psychopathology precisely describes and categorises abnormal experiences as recounted by the patient and observed in behaviour: its two components being the observation of behaviour and the empathic assessment of subjective experience, Jaspers' phenomenology: the patient introspects and describes, the doctor questions, rephrases and recounts back until the description is confirmed, aiming to know what the experience must feel like. The method rests on the assumption that all speech, behaviour and nuance has meaning to the patient at the time it occurs, not a mere epiphenomenon of brain function. On this foundation stand the four great distinctions: understanding (empathic, meaningful. I understand because I can put myself in my patient's situation and feel those feelings myself) versus explaining (external observation and causal connection, as in science); the primary (reducible no further by empathy) versus the secondary (emerging from the primary in an understandable way, the nihilistic delusion of profound depression); the form (delusion, phobia, structure (dependent on the nature of the illness, identifying the disorder) versus the content (nurses stealing money, the djinn, the television) dependent on life situation, culture and society, revealing the person and guiding the well-directed treatment); and development (change emerging understandably from previous patterns) versus process (an event imposed from outside, not understandable as natural progression, epilepsy and its psychiatric symptoms). The engine's output is the symptom catalogue itself: the hallucination and its neighbours, the delusion with its genesis and themes, the overvalued idea, the thought-process disorders, the self-experience disorders and insight; each a form named precisely enough to carry diagnosis across languages and cultures while its content travels with the person.",
    steps: [
      "The model's claim: psychiatric diagnosis begins in description, not explanation; the forms of experience (hallucination, delusion, overvalued idea, thought disorder) are the diagnostic objects, and every theory of causes comes after them.",
      "The symptom-and-sign rule: in psychiatry both are contained within the speech of the patient (the mood complaint and the alien-forces attribution in the same sentence) and a symptom is diagnostically usable only when typical of the condition and relatively frequent in it.",
      "The empathic elicitation: an organised series of questions with rephrasing and reiteration until sure of what is described; the final stage (recounting back) is complete only when the patient recognises the description as accurate.",
      "The primary/secondary test: what empathy can reduce no further is primary; what emerges from the primary in an understandable way is secondary. Jaspers' understanding-versus-explaining distinction operationalised at the bedside.",
      "The form/content split applied: the form names the disorder (delusion, phobia, passivity); the content (who, what, spirits, enemies, CCTV) reveals the person's life, culture and concerns, and guides the well-directed treatment.",
      "The catalogue deployed: perception (hallucination and its neighbours, sorted by modality), thinking content (delusion, overvalued idea, mood-congruent themes), thinking form (the process disorders), the self and insight; each phenomenon defined by criteria, never by severity alone.",
      "The cultural discipline held throughout: expression and content vary with culture while the form stays constant (the djinn-made-me-do-it is the same passivity form as thoughts controlled by the television) and normal is kept statistical, because hypnagogic hallucinations are common and healthy.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "temporal-cortex", name: "Temporal cortex (the scenic stimulator)", role: "Penfield & Perot's stimulation experiments: temporal stimulation produced scenic hallucinations in 8% of 500 patients; the overstimulation theory's direct evidence, and the territory of the sensory dysphasias in the speech-and-language layer.", grade: "supported" },
    { id: "occipital-cortex", name: "Occipital cortex (the elementary-flash generator)", role: "Occipital stimulation produced flashes, circles and stars: the elementary phenomena whose maturation into complex hallucinations Klosterkötter's transition observations traced.", grade: "supported" },
    { id: "prefrontal-monitor", name: "Prefrontal monitoring system (the intention monitor)", role: "The intention-monitoring system whose failure Frith & Done mapped the made-experiences to: sensations, feelings, drives, volition and thoughts experienced as made by others; the note names the function, and the grade records that the address is the model's, not the chapter's.", grade: "proposed" },
    { id: "hippocampal-memory", name: "Hippocampal-memory system (the past-experience weight)", role: "Hemsley's cognitive-anomaly account of primary delusions: a disturbance reducing the influence of past experience on current perception; heightened awareness of irrelevant stimuli, ambiguous unstructured input, intrusion of unintended long-term-memory material. The chapter names the function; the structure is the model's reading of it.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The system beneath the note's amphetamine-psychosis contrast: film-like hallucinations in clear consciousness; a phenomenological signature the descriptive method can observe and use against the affectively overwhelming hallucinations of delusional mood, without any assay. The chemistry is the explaining layer the describing layer deliberately does not need.", grade: "proposed" },
    { name: "Endocannabinoids", symbol: "eCB", role: "The note's own comparison (schizophrenic elementary misperceptions (optical distortions of size, colour, distance, perspective) resembling cannabis experiences) ties the perceptual-distortion form to the system the method observes only at the level of experience.", grade: "proposed" },
    { name: "GABA", symbol: "GABA", role: "The withdrawal territory of the note's alcoholic-delirium fine structures (hairs, threads, spider webs on white walls): the disinhibition lineage (Jackson to Janzarik's free-running psychic contents) is the conceptual bridge; the transmitter is the explanatory counterpart, honestly graded as such.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "empathic-elicitation-pathway",
      name: "The empathic elicitation pathway (complaint to confirmed form)",
      steps: [
        { label: "The complaint in the patient's speech", detail: "Symptom and sign together: the mood complaint and the alien-forces attribution arriving in the same sentence" },
        { label: "Organised questioning", detail: "Feel oneself into the other: a prepared, systematic empathic enquiry into each described experience" },
        { label: "Rephrasing and reiteration", detail: "The description checked and re-checked until the doctor is sure of what is described, never settled for, never assumed" },
        { label: "The recount-back", detail: "The doctor recounts the experience as understood; the patient recognises it as accurate: the method's final and most reliable stage" },
        { label: "Form identification", detail: "The confirmed description sorted into its form (hallucination, delusion, overvalued idea, thought disorder) the diagnostic act itself" },
      ],
      clinicalManifestation: "The patient who says 'that is exactly what it is like': the alliance formed at the same moment the diagnosis's raw data is secured.",
      grade: "established",
    },
    {
      id: "delusional-genesis-pathway",
      name: "The primary-delusion genesis pathway (atmosphere to formed meaning)",
      steps: [
        { label: "Delusional atmosphere", detail: "Minuscule, almost-unnoticed experiences impart a new, uncanny, bewildering aspect: something is going on in which one is personally involved without knowing how" },
        { label: "Mounting self-reference", detail: "The uncertainty evolves into self-referential certainty: the patient, not merely the world, becomes the target" },
        { label: "The formed delusion", detail: "Fully formed delusional meaning arrives, and releases the preceding perplexity" },
        { label: "The cognitive anomaly beneath (Hemsley)", detail: "Reduced influence of past experience on current perception; heightened awareness of irrelevant stimuli; ambiguous unstructured input; intrusion of unintended long-term-memory material" },
      ],
      clinicalManifestation: "The pre-psychotic window: the weeks of uncanny something-is-happening that precede the formed delusion, recognising it buys early intervention.",
      grade: "supported",
    },
    {
      id: "hallucination-transition-pathway",
      name: "The hallucination transition pathway (elementary to complex)",
      steps: [
        { label: "Elementary sensations", detail: "Crack and hiss phenomena: the raw sensory level" },
        { label: "Localisable percepts", detail: "Localisable inside-the-head experiences: the transitional middle" },
        { label: "Complex hallucinations", detail: "Woven into the developing delusional structure, with mounting affective involvement" },
        { label: "The three theories' accounts", detail: "Overstimulation at processing levels (Penfield & Perot); disinhibition. Janzarik's free-running psychic contents in Jackson's lineage; interpretive-level distortion of sensory processing" },
      ],
      clinicalManifestation: "The patient whose voices began as noises in the head months before anyone asked: the transitions the examination retraces.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "jaspers-era", time: "1913 (7th edn 1963)", title: "Jaspers founds the discipline", description: "General Psychopathology: phenomenology as the empathic assessment of subjective experience; understanding versus explaining; primary versus secondary; form versus content; the pseudohallucination criteria: the working distinctions the whole course still runs on.", phase: "onset" },
    { id: "schneider-era", time: "1962", title: "Schneider's first-rank catalogue", description: "Klinische Psychopathologie: the delusional percept and thought-echo named as first-rank symptoms; the symptom catalogue gains its schizophrenia pointers.", phase: "onset" },
    { id: "stimulation-era", time: "1963", title: "The stimulation experiments", description: "Penfield & Perot: temporal stimulation evoking scenic hallucinations in 8% of 500 patients, occipital stimulation producing flashes, circles and stars; the overstimulation theory of hallucinations earns its evidence.", phase: "peak" },
    { id: "experimental-decades", time: "1969–1989", title: "The experimental decades", description: "Zucker's as-if experiments on hallucinated voices; Klosterkötter's elementary-to-complex transition observations and coenaesthesia prediction; Krause's videotape studies of non-verbal cue deficits; Frith & Done's intention-monitoring account of alien control: the descriptive method gains its experimental interrogators.", phase: "peak" },
    { id: "consolidation-era", time: "1979–1994", title: "Cognitive and insight consolidation", description: "Beck's negative cognitive schema (1979); McKenna's overvalued-idea disorders (1984); David's three-dimensional insight (1990); Hemsley's experimental-psychological model of the primary-delusion anomaly (1994): description and explanation settle into their Jaspersian division of labour.", phase: "duration" },
    { id: "portable-present", time: "Now", title: "The portable present", description: "Phenomenology as the most portable psychiatric skill: no equipment, every language, examinable at the bedside; the Oxford ch 1.7 synthesis (Sims' tradition) anchoring form across cultures: the Indian multilingual clinic its best demonstration.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the method as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "No prevalence figure belongs to this discipline: the note's epidemiology is the distribution of phenomena, not of a disorder. Hypnagogic hallucinations are statistically common and healthy (the note's statistical-normality warning: normal is best kept statistical, and it is unwise to extrapolate from mentally ill populations to the origins of normal behaviour). Hallucinations themselves are distributed across the idiopathic psychoses (auditory commonest), the organic states (visual, sometimes only hours at night in partial delirium syndromes), and the sensory-deprivation and oneiroid conditions (Janzarik's evidence). The discipline's subject is the form every one of them takes, not their rate in a population.",
    indianPrevalence: "The Indian distribution is a content distribution: the same forms arriving in local idiom (spirit possession, poisoning, the neighbourhood enemy, CCTV) with somatised distress (gas, burning, head pressure) as the presenting layer of depression and anxiety in cultures that discourage emotional expression. The multilingual clinic sees the form stay constant while the content translates; the note's cultural-discipline rule is daily Indian practice.",
    lifetimeRisk: "Not applicable as risk: every psychiatric encounter runs on the method; the relevant lifetime figure is the hypnagogic one, hallucinations at the sleep boundary statistically common in healthy people.",
    genderRatio: "The note records no gender distribution for any phenomenon in the catalogue: the form carries no gender in this lineage, and no figure is invented here.",
    ageOfOnset: "The catalogue's one age-pointer: skin-localised tactile hallucinations underlie parasitosis delusions as an elderly early-organic risk. Beyond it the note dates no phenomenon by age: the forms are age-indifferent, the conditions beneath them are not.",
    indianNotes: "Teaching-value distribution (approx 2026): phenomenology is the most portable psychiatric skill (no equipment, translating into every Indian language, examinable at the bedside) which makes it the district tier's diagnostic engine wherever imaging and laboratories are scarce.",
  },
  etiology: [
    { category: "psychological", factor: "The diagnostic engine", details: "Form, not content, identifies the disorder: the cultural and forensic errors of psychiatry (pathologising beliefs, missing psychoses) are usually form-content confusions; the discipline exists to prevent them." },
    { category: "psychological", factor: "The empathy discipline", details: "The recount-back step (continuing until the patient confirms the description) is both the most reliable elicitation technique in psychiatry and the alliance-building one; the examination is itself the first treatment." },
    { category: "social", factor: "The cultural discipline", details: "Culture shapes the expression and content of subjective experience (suppressed in some cultures, somatised in others, subjugated to group well-being in others) while the form stays constant; without the form-content rule every local idiom becomes a misdiagnosis (the Appalachian fundamentalist and the Sri Lankan Buddhist girl phenomenologically similar in possession)." },
    { category: "biological", factor: "The explanatory counterpart", details: "The three hallucination theories (overstimulation, disinhibition, interpretive-level distortion) and the cognitive-anomaly models (Hemsley, Frith & Done) mark where explaining begins once describing ends. Jaspers' boundary held in the curriculum as in the clinic." },
    { category: "social", factor: "The portable skill", details: "No equipment, every language, examinable at the bedside, in the Indian district tier the descriptive method is the affordable diagnostic engine and the first defence against both superstition-labelling and psychosis-missing." },
  ],
  symptomClusters: [
    {
      category: "1. The perception signals",
      symptoms: [
        "Voices, who talks to whom, whether they comment on ongoing actions, whether they feel inside or outside the head",
        "Visual experiences: animals, multi-person scenes, and the alcoholic fine structures: hairs, threads, spider webs, especially staring at white walls",
        "The siege experience: hallucination plus delusion of being besieged, doors and windows barred",
        "Tactile and coenaesthetic phenomena (simple skin sensations, sexual sensations, inner-organ contraction, expansion and rotation, atypical pain) usually carrying delusional explanations",
        "Elementary misperceptions: optical distortions of size, colour, distance and perspective (resembling cannabis experiences); brief non-verbal cues missed in conversation",
        "Coenaesthesia: bodily misperception lasting minutes to days, fluctuating with stress, seldom reported unprompted",
      ],
    },
    {
      category: "2. The belief-content signals",
      symptoms: [
        "The six themes (persecution, jealousy, love (erotomania), guilt/unworthiness/poverty, grandiosity, hypochondriasis) with their specific contents (religious, infestation, misidentification, control)",
        "Primary arrival: autochthonous intuition, percept-bound meaning, spontaneous memory distortion, or growth out of an uncanny atmosphere",
        "Secondary growth: delusion-like ideas emerging understandably from morbid mood, life events or misperception",
        "The overvalued pursuits: dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy, the querulous litigation of injustice",
        "Mood-coloured content: the negative cognitive triad (self, future, world), failure attributed to self and success to others, guilt reaching delusional intensity",
        "Anankastic phenomena: obsessions and compulsions recognised as one's own yet resisted; phobias with inappropriate exaggerated fear and avoidance",
      ],
    },
    {
      category: "3. The thinking-form and speech signals",
      symptoms: [
        "Acceleration with flight of ideas (links loosening with mood elevation) versus depressive retardation",
        "Circumstantiality (goal retained, path wandering through over-detailed steps) versus tangentiality (replies obliquely past the point)",
        "Perseveration: a response persisting beyond its relevance (organic); thought blocking: sudden unintended cessation (schizophrenia, severe mood states)",
        "Loosening of associations (ideas linked by superficial or chance associations (clang, puns) versus incoherence) the organic cousin arising from clouded cognition",
        "Passivity of thought: thoughts experienced as inserted, withdrawn or broadcast; the made-experience of drives, feelings and volition",
        "The speech layer: alogia, poverty of content, logorrhoea, verbigeration, echolalia, approximate answers (Ganser), paraphasia, dysphasias, mutism, pseudologia fantastica",
      ],
    },
    {
      category: "4. The self and insight signals",
      symptoms: [
        "Depersonalisation and derealisation with insight retained",
        "The ego-dimension disturbances: identity, demarcation, consistency, activity, vitality (Scharfetter)",
        "Nihilistic delusion reaching Cotard's syndrome: the real world has disappeared; autoscopic phenomena: seeing one's double",
        "Insight failing in separable dimensions: illness not recognised, symptoms not attributed, treatment not accepted",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The hallucination and its neighbours (the chapter's working definitions)",
      code: "The perception boundary",
      criteria: [
        "Hallucination. Cutting: perception without an object; Zucker: an as-if quality even when reality is asserted (patients reliably discriminate imitated external voices from their hallucinations); Janzarik: free-running psychic contents, a Jacksonian disinhibition concept",
        "Illusion: a misinterpretation of a real object, often mood-linked, correctable by the patient",
        "Delusional perception: a real percept to which an incorrect, incorrigible meaning attaches; illusions can be recognised as misread, delusional perceptions cannot",
        "Pseudohallucination: lacks the corporeal tangible quality of true hallucination, arises spontaneously, is discernible from real perception, and is difficult but not impossible to overcome voluntarily",
        "Thought-echo (Gedankenlautwerden, Schneider): the patient recognises the words as his own thoughts but cannot control them: lesser alienation than thought insertion or voices",
      ],
      duration: "Judged on quality and form, not duration: the note's definitions carry no time element.",
      indianNote: "The modality and the inside-or-outside quality must be elicited through whatever language the patient dreams in: the form survives translation, the words do not.",
    },
    {
      system: "The delusion (the chapter's working criteria)",
      code: "Form, not severity",
      criteria: [
        "Unrivalled, overriding conviction",
        "Amenability to neither experience nor counter-argument",
        "Impossibility of content: rightly discarded: collective socio-cultural beliefs read false elsewhere, and delusional jealousy's content is possible",
        "The working definition: overriding, rigid convictions which create a self-evident, private and isolating reality requiring no proof (familiarly: a false unshakable belief out of keeping with the patient's social and cultural background)",
        "Genesis: primary (true) delusional ideas psychologically irreducible; secondary (delusion-like) ideas emerging understandably from life events, morbid mood or misperception",
      ],
      duration: "The conviction's quality decides, not its age: a week-old autochthonous primary delusion out ranks a year-old overvalued pursuit.",
      indianNote: "Out of keeping with the patient's social and cultural background: the clause that does the Indian heavy lifting: the community's shared beliefs are the reference standard, not the doctor's.",
    },
    {
      system: "The overvalued idea (McKenna)",
      code: "The bridge category",
      criteria: [
        "An acceptable, comprehensible idea: reachable by evidence in principle",
        "Pursued beyond the bounds of reason",
        "Causing disturbed functioning or suffering",
        "Typically arising in abnormal personalities under stress (the querulous, litigious injustice-pursuer) or in abnormal mood states that set aside the counterbalances",
        "The classic instances: dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy, parasitophobia, the transsexual belonging conviction",
      ],
      duration: "The pursuit's duration is the dysfunction's duration. The category is defined by degree, not by time.",
      indianNote: "The Indian OPD's frequent visitor: the injustice-pursuer with folders of affidavits (comprehensible, excessive, suffering) neither deluded nor dismissible.",
    },
    {
      system: "Insight (David's three dimensions)",
      code: "The adherence framework",
      criteria: [
        "Recognition that one has an illness",
        "Attribution of symptoms to that illness",
        "Acceptance of treatment",
        "Multidimensional rather than all-or-none: each dimension assessed and documented separately",
        "The social-normative layer (Kemp & David): insight itself treated as a belief, subject to persuasion",
      ],
      duration: "Assessed at every examination: poor insight relates to acute psychopathology and independently predicts some outcomes.",
      indianNote: "In the Indian family-led pathway, insight is often distributed across the household: the family recognises, the patient attributes elsewhere, and the treatment negotiation happens between all three parties.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Form versus content (the diagnostic engine)", distinguishingFeatures: "The form (delusion, phobia, passivity) depends on the nature of the illness; the content (nurses stealing money, the djinn, the television) depends on life situation, culture and society.", keyDifferentiator: "Form identifies the disorder; content reveals the person's current concerns and guides a well-directed treatment. The cultural and forensic errors of psychiatry are usually form-content confusions." },
    { condition: "Primary versus secondary delusions", distinguishingFeatures: "Primary (true) delusional ideas are psychologically irreducible, arriving autochthonously or through atmosphere and percept; delusion-like ideas emerge understandably from life events, morbid mood or misperception.", keyDifferentiator: "The empathy test: if I were as profoundly depressed as my patient, I could believe the world had ended. A secondary nihilistic delusion; what empathy cannot enter is the primary." },
    { condition: "True hallucination versus pseudohallucination", distinguishingFeatures: "The true hallucination carries the corporeal, tangible quality of real perception; Jaspers' pseudohallucination lacks it, arises spontaneously, is discernible from real perception and is difficult (not impossible) to overcome voluntarily.", keyDifferentiator: "Kandinsky's vignette: acquaintances' images with eyes closed, abolished by opening them, near to imagination yet spontaneous and more vivid; the Anglo-American literature often suffices with subjective awareness of unreality. Jaspers' usage is inconsistent there." },
    { condition: "Illusion versus delusional perception", distinguishingFeatures: "Both involve a real object: the illusion is a misinterpretation, often mood-linked, correctable by the patient; the delusional perception attaches an incorrect, incorrigible meaning to a normal percept.", keyDifferentiator: "Recognisability: illusions can be recognised as misread, delusional perceptions cannot; the delusional percept is a Schneider first-rank symptom, the illusion is not." },
    { condition: "Delusion versus overvalued idea", distinguishingFeatures: "The delusion is unrivalled, unshakeable, excluding all other possibilities; the overvalued idea is an acceptable, comprehensible idea pursued beyond reason, with disturbed functioning or suffering, arising typically in abnormal personalities under stress or abnormal mood states.", keyDifferentiator: "Comprehensibility and degree: dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy and the querulous pursuit of injustice are bridge phenomena, treating them as delusions overdiagnoses psychosis, dismissing them as personality undertreats suffering." },
    { condition: "Affective versus schizophrenic delusions", distinguishingFeatures: "Affective delusions grow out of the underlying excessive mood (guilt and unworthiness with depression, grandiosity and erotomania with mania) and appear consonant with the personality; schizophrenic delusions appear as something new and alien.", keyDifferentiator: "The diagnostic feel: mood-congruent growth versus foreign arrival; guilt growing from depression against the atmosphere-born percept arriving as alien." },
    { condition: "Loosening of associations versus incoherence", distinguishingFeatures: "Both interrupt the flow with chance linkages; loosening is the schizophrenic associative failure (clang associations and puns) while incoherence arises from the clouded cognition of delirium and dementia.", keyDifferentiator: "The level of the lesion: psychotic associative failure versus organic clouding; clinically similar surfaces, different workups." },
    { condition: "Thought-echo versus thought insertion versus voices", distinguishingFeatures: "Gedankenlautwerden is the transitional phenomenon: the patient recognises the words as his own thoughts but cannot control them; thought insertion and voices carry the greater alienation.", keyDifferentiator: "The degree of alienation: lesser in thought-echo, greater in insertion and voices; Schneider's ordering doing the differential work." },
  ],
  management: [
    { category: "psychotherapy", name: "The empathic method — question, rephrase, recount-back", description: "Feel oneself into the patient through an organised series of questions, rephrasing and reiteration until sure of what is described; the final stage is recounting back what you believe the experience to be: complete only when the patient recognises it as accurate. The underlying assumption held deliberately: all speech, behaviour and nuance has meaning to the patient at the time it occurs.", whenToUse: "Every phenomenological examination: the discipline's single examination skill, and its alliance-builder.", indianContext: "In the multilingual Indian clinic the recount-back doubles as the translation check: the form (passivity, percept, atmosphere) confirmed across languages while the content arrives in local idiom." },
    { category: "psychotherapy", name: "The modality-and-form workup discipline", description: "The described experience's modality and quality set the workup: voices talking about the patient among themselves or commenting on his actions; the schizophrenia-typical examination (first-rank symptoms, thought form); structured visual hallucinations with fine structures and siege experiences: the organic and delirium workup; externally-attributed coenaesthesia: the schizophrenia pointer. The typical-but-never-specific discipline held throughout.", whenToUse: "Every hallucination report: the modality is the pointer, the full examination decides.", indianContext: "The visual-with-siege presentation reaches Indian OPDs from alcohol-withdrawal elders at night; the voices-about-him presentation from young first-episode men, one OPD, two workups, both set by form." },
    { category: "psychotherapy", name: "Treat through the content", description: "Form identifies the disorder; content reveals the person's current concerns and guides a well-directed treatment. The delusion's theme (who is doing what to whom, which fear, which loss) is the treatment-plan material once the form is named; the empathic understanding of the content is what keeps the person in the treatment.", whenToUse: "After the form is identified, never before, never instead.", indianContext: "The Indian content layer (spirits, poisoning, CCTV, the marital in-law conflict) is where the person's treatable life situation is read; diagnosing the form and treating through the content is the chapter's Indian rule verbatim." },
    { category: "psychotherapy", name: "The overvalued-idea category applied", description: "The two classic errors prevented: treating fixed personality-based pursuits as delusions (psychosis overdiagnosis) and dismissing them as personality (undertreatment of dysmorphophobia, anorexic preoccupation, morbid jealousy); the boundary drawn on comprehensibility, degree and relative insight, with the suffering treated on its own terms.", whenToUse: "Every presentation where a pursuit or apprehension has outgrown its reasonable bounds without becoming delusional.", indianContext: "The querulous litigant and the dysmorphophobic bride are Indian OPD regulars. The category keeps them out of both the antipsychotic prescription and the discharge-in-five-minutes error." },
    { category: "psychotherapy", name: "The atmosphere window — early intervention", description: "Delusional mood is the pre-psychotic signal: the uncanny something-is-happening period of tension, suspicion and expectation precedes the formed delusion, recognising it buys early intervention. The perplexity, the minuscule uncanny experiences and the mounting self-reference asked about directly, and documented as the genesis the formed delusion will release.", whenToUse: "Every presentation of unease, watchfulness or unexplained reference in a person at clinical risk.", indianContext: "The Indian family usually brings the patient during exactly this window ('something is wrong, we do not know what') the note's early-intervention argument in Indian dress." },
    { category: "service-design", name: "Teach and examine the portable skill", description: "Phenomenology is the most portable psychiatric skill (requiring no equipment, translating into every language, examinable at the bedside) which makes it the district tier's diagnostic engine and the medical student's first examination discipline; the form-content distinction is the first defence against both superstition-labelling and psychosis-missing.", whenToUse: "Every teaching encounter and every examination setting: the viva's most reliable territory.", indianContext: "The Indian undergraduate and postgraduate examinations test this material directly at the bedside: the skill's portability is the Indian system's opportunity, not its constraint." },
  ],
  drugLinks: [],
  contentGaps: [
    "The note assigns no medication any role, so no KYP drug lesson is linked: the substances it names (amphetamine psychoses, cannabis-like misperceptions, alcoholic delirium) are descriptive contrasts of the hallucination catalogue; their treatments belong to the substance courses, never duplicated here.",
    "Ganser syndrome (approximate answers, Vorbeiredanken) has no KYP lesson. The phenomenon is taught here as the speech-and-language item the note catalogues.",
    "Cotard's syndrome and delusional misidentification (Capgras' imposter substitution) have no dedicated lessons. The forms are taught here, the adjacent mood and delusional content lives in the depressive-disorders and delusional-disorder courses.",
    "Scharfetter's full ego-psychopathology (the five dimensions' own account) has no KYP lesson. The note's own pointer is to its chapter's later sections, which KYP has not migrated; the dimensions are summarised here at the depth the note gives them.",
    "The private-interview discipline the India lens invokes (the note's L1/Q2 material) belongs to psychiatric-assessment, migrating in this same batch: linked in the knowledge graph, not gapped.",
  ],
  patientGuide: {
    whatIsIt:
      "A discipline, not an illness: the careful way psychiatrists listen to and describe experiences (voices, visions, beliefs, moods, feelings of being controlled) so that the pattern of an experience (doctors call it the form) can tell which condition it belongs to. The same experience, hearing a voice for instance, can come from several different conditions; the careful questions find out which pattern you have. When the doctor repeats your words back to you, that is the method checking it has understood you exactly.",
    whatCausesIt:
      "The careful questioning exists because experiences themselves have patterns: a voice commenting on what you are doing, a belief that arrived overnight, a fear that grew from your personality; each pattern points to a different condition, whatever its words are. Your culture and life situation give the experience its content (spirits, enemies, machines); the pattern underneath stays the same, which is why the doctor listens to the how, not only the what.",
    symptoms:
      "Not applicable as an illness. The experiences a doctor examines this way include: hearing voices or seeing things; beliefs that will not move; feelings of being controlled or made to act; feeling unreal or changed; intrusive thoughts that will not stop. None of these alone is an illness: the pattern, the setting and the effect on your life decide.",
    treatment:
      "The doctor's discipline, not a prescription: you describe your experience in your own words; the doctor questions, rephrases and says it back until the description is exactly right; the pattern is named; the condition behind it is treated. Tell the doctor about your cultural and religious beliefs too: a belief shared by your whole community is not an illness in itself, and knowing your beliefs helps the doctor tell the difference.",
    selfHelp: [
      "Describe your experiences in your own words: what it is like matters more than why you think it happens",
      "Tell the doctor about spirit, religious or cultural explanations: they are part of the assessment, not something to hide",
      "If you hear voices, note when they come, what they say, and whether they feel inside or outside your head",
      "Ask the doctor to say back what they understood: the check works in both directions",
      "Bring a family member who has seen the episodes. The observed behaviour is the other half of the assessment",
    ],
    whenToSeekHelp: [
      "Experiences that frighten you or those around you: voices, visions, feelings of being controlled",
      "A belief that has begun to cut you off from family, work or food",
      "A growing sense that something is happening around you that you cannot explain. The earlier it is assessed the better",
      "Feeling unreal, or feeling that people close to you have been replaced or changed",
      "Any action or speech of yours that you do not recognise as your own",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24x7, free, multiple Indian languages), for distress, and guidance on where to go",
      "District hospital psychiatry OPD under the DMHP: the examination described here is the outpatient's first psychiatric conversation",
      "The treating team's family-informed assessment session: ask for the visit where the family's observations and your private account are both heard",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs phenomenology: practice follows the Oxford chapter's method itself (Jaspers' tradition as transmitted by Sims), applied in Indian settings; the material is examined directly in Indian undergraduate and postgraduate psychiatry, which makes the note's teaching-value claim an Indian curricular fact rather than an aspiration.",
    systemContext: "The multilingual Indian clinic is the method's proving ground: the delusion form (passivity, percept, atmosphere) is identifiable across languages, while the content arrives in local idiom (spirits, enemies, poisoning, CCTV) so the clinician diagnoses the form and treats the person through the content. Somatised distress (gas, burning, head pressure) is the chapter's cultural principle in clinical dress: the empathic elicitation must begin in the body and travel inward. In joint families the observed-behaviour component arrives richly (multi-informant observation across settings) while the subjective component needs the private-interview discipline of the assessment course.",
    programmeContext: "No phenomenology-specific programme exists or is needed. The skill's home is every district OPD and medical college psychiatry department under the DMHP and the national mental-health architecture, where the mental-state examination is taught and examined at the bedside; the note's portability point (no equipment, every language) makes the method the one psychiatric instrument the whole Indian system can afford everywhere at once.",
    costConsiderations: "The method costs nothing: no equipment, no investigation, no assay: in the Indian district tier where imaging and laboratories are scarce and distant, the descriptive examination is the affordable diagnostic engine, and its teaching (a viva, a bedside, a willing registrar) is the cheapest capacity the system can build (approx 2026).",
    culturalConsiderations: "The content-variation rule is daily Indian practice: the djinn-made-me-do-it and the television-control passivity share one form while wearing different idioms; the differential between spiritual experience, dissociative possession and schizophrenic passivity is made on form criteria (attribution, control and congruence with the cultural norm) exactly as the chapter teaches. Cultures that discourage emotional expression somatise: the Indian gas-burning-head-pressure presentation of depression and anxiety is the cultural principle in clinical dress. Guilt's content is itself culturally dependent: the melancholic guilt of one tradition reads differently in another. Statistical normality does its Indian work too: possession states normative in a community are not thereby pathological, and shared beliefs are not delusions in the culture that shares them.",
    patientCounselling: [
      "The careful-questions script: 'I ask everyone these questions in the same careful way. The pattern of the experience matters more than its words, and the pattern is what tells me which kind of problem this is.'",
      "The spirits script: 'Tell me exactly how it feels when the djinn or the mata does this, whether it feels like your own thought or something made to happen. That feeling is what I need to hear; I am not asking you to give up the belief.'",
      "The body-first script: 'Tell me where in the body you feel it (the gas, the burning, the pressure) and we will travel inward from there together.'",
      "The recount-back script: 'Let me say back what I have understood, and correct me until it is exact. I would rather be corrected ten times than be wrong once.'",
      "The culture-not-delusion script: 'A belief your whole community shares is not an illness by itself. I am listening for how the experience itself feels, not for whether your beliefs are fashionable.'",
      "The family script: 'I will speak with him alone for a few minutes (some experiences are easier to describe without the room listening) and then we will all hear the plan together.'",
    ],
  },
  decisionPath: {
    title: "Classifying a described experience: the phenomenological examination",
    nodes: [
      {
        id: "start",
        question: "A patient describes an unusual experience: a voice, a vision, a belief, a feeling of being controlled or changed. What is the first sorting question?",
        branches: [
          { label: "A perception without an object: a voice, a vision, a sensation", next: "hallucination-gate" },
          { label: "A real object misread, or a real object bearing a meaning", next: "percept-gate" },
          { label: "A belief or conviction held against the world", next: "belief-gate" },
          { label: "A change in the self: unreal, altered, or made", next: "self-gate" },
        ],
      },
      {
        id: "hallucination-gate",
        question: "A hallucination. Which modality, and with what quality and content?",
        branches: [
          { label: "Voices talking about him among themselves, or commenting on his ongoing actions and thoughts", next: "voices-path" },
          { label: "Voices naming, calling or otherwise non-commenting", next: "nonspecific-path" },
          { label: "Visual: animals, multi-person scenes, fine structures (hairs, threads, spider webs), or a siege of besiegers", next: "organic-path" },
          { label: "Tactile or coenaesthetic: skin, sexual, inner-organ sensations, or a bodily misperception lasting minutes to days", next: "coenaesthesia-path" },
        ],
      },
      {
        id: "voices-path",
        question: "Voices about-and-commenting: the schizophrenia-typical form.",
        recommendation: "Typical of but not specific to schizophrenia: proceed to the full mental-state examination (first-rank symptoms, thought form, passivity) and document the form precisely (who speaks, to whom, about what, inside or outside the head). The modality pointed; the examination decides.",
      },
      {
        id: "nonspecific-path",
        question: "Non-commenting voices.",
        recommendation: "Name-calling and non-commenting voices are diagnostically non-specific: the context examination (mood, organic screen, substance history) decides their weight; the typical-but-not-specific discipline applied honestly in both directions.",
      },
      {
        id: "organic-path",
        question: "Visual hallucinations with organic signatures.",
        recommendation: "Fine structures (hairs, threads, spider webs on white walls), multi-person scenes and the siege experience point toward organic psychosis: delirium and alcohol withdrawal: run the organic workup the modality dictates, document the fluctuation and clouded cognition, and record the incoherence-versus-loosening distinction at the bedside.",
      },
      {
        id: "coenaesthesia-path",
        question: "Tactile and coenaesthetic phenomena.",
        recommendation: "More often schizophrenia than affective or organic, and usually carrying delusional explanations; skin-localised tactile hallucinations underlie parasitosis delusions (an elderly early-organic risk); Klosterkötter's rule: strongly externally-attributed coenaesthesia predicts schizophrenia; ask about the attribution directly, because patients seldom report the experience unprompted.",
      },
      {
        id: "percept-gate",
        question: "A real percept is involved. Can the misreading be corrected?",
        branches: [
          { label: "Correctable, mood-linked: the object misread", next: "illusion-path" },
          { label: "Incorrigible meaning attached to a normal perception", next: "delusional-percept-path" },
        ],
      },
      {
        id: "illusion-path",
        question: "An illusion.",
        recommendation: "A misinterpretation of a real object, often mood-linked, correctable by the patient: no delusional form: examine the mood state and the perceptual conditions (delirium, sensory impairment) that favour misreading, and reassure where appropriate.",
      },
      {
        id: "delusional-percept-path",
        question: "A delusional perception.",
        recommendation: "A normal perception acquiring an incorrigible delusional significance: a Schneider first-rank symptom: the schizophrenia-typical examination follows, with the distinction from illusion (recognisable as misread) and hallucination (no object) documented verbatim.",
      },
      {
        id: "belief-gate",
        question: "A conviction. Can empathy reduce it further?",
        branches: [
          { label: "No: psychologically irreducible, arriving autochthonously or out of an uncanny atmosphere", next: "primary-path" },
          { label: "Yes: understandable from morbid mood, life events or misperception", next: "secondary-path" },
          { label: "A comprehensible idea pursued beyond reason, insight relatively preserved", next: "overvalued-path" },
        ],
      },
      {
        id: "primary-path",
        question: "A primary delusion.",
        recommendation: "Name the type (intuition (autochthonous, out of the blue), percept (first-rank), memory (spontaneously distorted or reinterpreted), atmosphere (the uncanny something-is-happening)) and the sequence: atmosphere maturing into self-referential certainty, then the formed delusion releasing the perplexity. The atmosphere window is the early-intervention variable; the theme (persecution, guilt, grandiosity, hypochondriasis, love, jealousy) is then mapped to its mood leaning.",
      },
      {
        id: "secondary-path",
        question: "A secondary, delusion-like idea.",
        recommendation: "It grew out of something: morbid mood, life event, misperception: treat the primary. The affective contrast applies (delusions grown from excessive mood appear consonant with the personality) so the mood treatment is the delusion treatment's engine.",
      },
      {
        id: "overvalued-path",
        question: "An overvalued idea.",
        recommendation: "The bridge category: comprehensible, pursued beyond reason, with suffering or dysfunction; dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy, the querulous pursuit of injustice. Neither overdiagnose psychosis (the fixed pursuit is not a delusion) nor undertreat the suffering (the personality-based pursuit deserves its own treatment). McKenna's category earning its keep.",
      },
      {
        id: "self-gate",
        question: "A self-experience disorder: is insight into the unreality retained?",
        recommendation: "The fork the note teaches: depersonalisation and derealisation retain insight (examine the accompanying state); nihilistic elaboration reaches Cotard's syndrome (the real world has disappeared) and made-experiences (insertion, withdrawal, broadcast) carry the intention-monitoring failure (Frith & Done), engaging the first-rank examination. Scharfetter's ego dimensions (identity, demarcation, consistency, activity, vitality) structure the record.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing the content instead of the form",
      why: "The djinn, the CCTV or the poisoning is taken as the pathology: the cultural and forensic errors of psychiatry (pathologising beliefs, missing psychoses) are usually exactly this confusion, and the treatment follows the idiom instead of the illness.",
      correction: "Name the form first (passivity, delusional percept, atmosphere) then read the content as the person's life situation: form identifies the disorder, content guides the treatment.",
    },
    {
      mistake: "Calling a culturally shared belief a delusion",
      why: "The impossibility criterion was discarded for good reason, and the working definition requires being out of keeping with the patient's social and cultural background. A belief normative in the community fails the definition however strange it reads to the doctor.",
      correction: "Compare the form with the cultural norm: attribution, control and congruence decide; the shared belief is content, the alien made-feeling foreign to the patient's own framework is passivity phenomenology.",
    },
    {
      mistake: "Treating every fixed idea as a delusion",
      why: "The overvalued idea is missed and psychosis is overdiagnosed, or the same phenomenon is dismissed as mere personality and dysmorphophobia, anorexic preoccupation and morbid jealousy go undertreated: the two classic errors of this territory in one.",
      correction: "Apply McKenna's category: comprehensible, pursued beyond the bounds of reason, causing suffering or dysfunction, insight preserved relative to the delusion, then treat the pursuit's own distress.",
    },
    {
      mistake: "Recording hallucinations without modality or quality",
      why: "A one-word entry wastes the diagnostic engine: the modality and quality (who talks, about what, inside or outside the head, on white walls or in scenes) are what separate the idiopathic from the organic psychoses and set the workup.",
      correction: "The full description discipline: modality, quality, content, attribution and the neighbouring phenomena (illusion, delusional perception, thought-echo) distinguished in the record itself.",
    },
    {
      mistake: "Jumping to explanation before the description is complete",
      why: "Jaspers' boundary exists for clinical reasons: causal theories applied to an unconfirmed description inherit its errors, and the empathic understanding that would have corrected the record never happens.",
      correction: "Describe first (question, rephrase, recount-back until the patient confirms) then explain: the cognitive-anomaly and monitoring models are the layer that comes after, never instead.",
    },
    {
      mistake: "Treating insight as all-or-none",
      why: "A single insight judgement collapses three separable dimensions (recognition of illness, attribution of symptoms, acceptance of treatment) and loses the prediction and the persuasion targets each carries.",
      correction: "Assess and document David's three dimensions separately; treat the social-normative layer (Kemp & David) as the persuasion work it is.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define descriptive psychopathology and its two components, and contrast it with explanatory psychopathologies: what does Jaspers' phenomenology demand of the patient and of the doctor?",
        "Why do symptom and sign both live in the patient's speech in psychiatry, and what makes a symptom diagnostically usable?",
        "The four great distinctions (understanding versus explaining, primary versus secondary, form versus content, development versus process) with one clinical example of each.",
        "Define hallucination, pseudohallucination, illusion, delusional perception and thought-echo, and separate each from its nearest neighbour.",
        "The delusion: the three classical criteria, why impossibility was discarded, and the working definition.",
      ],
      practical: [
        "Demonstrate the empathic method on a described experience: organised questions, rephrasing, and the recount-back until the patient confirms, then present the form you have identified with its modality and quality.",
        "Present a hallucination examination organised by the note's discipline: modality, quality, content, attribution, and state the diagnostic leaning each finding carries (typical of, never specific to).",
      ],
      longAnswer: [
        "Descriptive psychopathology: definition, the empathic method, the four great distinctions and their diagnostic use, with the symptom catalogue's place in psychiatric examination.",
        "Disorders of perception: the definitions (hallucination, pseudohallucination, illusion, delusional perception, thought-echo), the modality-diagnosis mappings and the three aetiological theories of hallucinations.",
      ],
    },
    neetPg: {
      highYield: [
        "THE DELUSION DEFINITION: overriding, rigid convictions which create a self-evident, private and isolating reality requiring no proof; the three classical criteria (unrivalled conviction; amenability to neither experience nor counter-argument; impossibility) with impossibility rightly discarded (collective beliefs read false elsewhere; delusional jealousy's content is possible).",
        "THE PRIMARY FOUR: delusional intuition (autochthonous); delusional percept (normal perception + delusional significance, a Schneider first-rank symptom); delusional memory (spontaneously distorted or reinterpreted); delusional atmosphere (the uncanny something-is-happening).",
        "THE GENESIS SEQUENCE: delusional atmosphere, to self-referential certainty, to the formed delusion, whose arrival releases the preceding perplexity; Hemsley's anomaly beneath (reduced past-experience influence, irrelevant-stimulus awareness, unstructured input, memory intrusion).",
        "THE FIRST-RANK POINTERS: delusional percept and thought-echo (Gedankenlautwerden, the patient recognises the words as his own thoughts but cannot control them); voices talking about the patient among themselves or commenting on his actions: typical of, never specific to, schizophrenia; name-calling voices non-specific.",
        "THE MODALITY MAPPINGS: auditory commonest in the idiopathic psychoses; visual most frequent in organic psychosis, particularly delirium (sometimes only hours at night in partial syndromes): alcoholic fine structures (hairs, threads, spider webs, white walls) and the siege experience (barring doors and windows); tactile/coenaesthetic more often schizophrenia than affective or organic, usually carrying delusional explanations; Klosterkötter: strongly externally-attributed coenaesthesia predicts schizophrenia; skin-localised tactile hallucinations underlie parasitosis delusions (elderly early-organic risk).",
        "THE PSEUDOHALLUCINATION (Jaspers): lacks the corporeal tangible quality, arises spontaneously, discernible from real perception, difficult but not impossible to overcome voluntarily. Kandinsky's vignette (images with eyes closed, abolished by opening them); Anglo-American usage suffices with subjective awareness of unreality, inconsistently with Jaspers.",
        "THE OVERVALUED IDEA (McKenna): acceptable, comprehensible idea pursued beyond the bounds of reason, causing disturbed functioning or suffering; dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy, parasitophobia, the transsexual belonging conviction; arising in abnormal personalities under stress (the querulous litigant) or abnormal mood states.",
        "THE AFFECTIVE CONTRAST: affective delusions grow out of the underlying excessive mood and appear consonant with the personality; schizophrenic delusions appear as something new and alien: guilt/unworthiness and hypochondriasis with depression, grandiosity and erotomania with mania, persecution and jealousy from suspicious or atmospheric states.",
        "THE THOUGHT-PROCESS LADDER: acceleration to flight of ideas (mood elevation) versus retardation (depression); circumstantiality (goal retained) versus tangentiality (past the point); perseveration (organic); thought blocking (schizophrenia, severe mood states); loosening of associations (schizophrenic, clang, puns) versus incoherence (its organic cousin from clouded cognition); passivity: insertion, withdrawal, broadcast.",
        "THE SPEECH LAYER: alogia, poverty of content, logorrhoea, verbigeration (monotonous syllable-repetition), echolalia, approximate answers (Vorbeiredanken. Ganser syndrome), paraphasia, sensory versus motor dysphasias (pure word-deafness), mutism, pseudologia fantastica.",
        "THE THREE HALLUCINATION THEORIES: overstimulation at processing levels (Penfield & Perot, temporal stimulation scenic hallucinations in 8% of 500; occipital flashes, circles, stars); disinhibition (Jackson's lineage. Janzarik's free-running psychic contents, supported by sensory deprivation and oneiroid states); interpretive-level distortion of sensory processing.",
      ],
      pyqConcepts: [
        "The delusional percept vignette: a normal perception acquiring incorrigible delusional meaning (the television greeting as a signal of being chosen): illusion versus delusional perception versus hallucination in one stem.",
        "The fine-structures stem: hairs, threads and spider webs on white walls in a patient with alcohol withdrawal: the alcoholic-delirium signature with the siege experience.",
        "The overvalued-idea stem (dysmorphophobia or the querulous pursuit of injustice: comprehensible, excessive, insight-preserved) not a delusion, not nothing.",
        "The insight stem. David's three dimensions (recognising illness, attributing symptoms, accepting treatment) tested as separable rather than all-or-none.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 21-year-old college student in a district town is brought by his father after six weeks of declining attendance and a week of refusing home-cooked food; over the preceding fortnight the world had become subtly uncanny (cars parking outside, conversations stopping when he passed, streetlights out of rhythm) and in the last week the uncertainty resolved into certainty: a group of men is watching him through the flat's CCTV and has begun poisoning what he eats; he is relieved, not frightened, that the meaning has finally arrived. The reasoning: the phenomenological form is a primary delusion arising through the note's sequence; delusional atmosphere maturing into self-referential certainty and then the formed delusion, whose arrival releases the perplexity (the relief is the diagnostic clue); the workup follows the schizophrenia-typical pointers (thought form, passivity, first-rank symptoms) with the typical-but-never-specific discipline held; the teaching: the atmosphere window was the six-week early-intervention opportunity, the recount-back examination is what secures the genesis history the family cannot give, and the CCTV-and-poisoning content (read as form, not as pathology) is the person's local world, not the diagnosis.",
        "A 62-year-old retired mill worker with thirty years of liquor dependence, the last drink two days ago, is brought by his sons after three nights of poor sleep and talking to people who were not there; the sons found the doors barred and windows latched: he was keeping the attackers out; in the evenings he watches the white painted wall and sees fine hairs, threads and cobwebs moving upon it, and men enter the room in groups at night to mock him; his speech at night is fragmented and he misidentifies the ward calendar. The reasoning: the modality does the pointing; visual hallucinations with sensory realism, the alcoholic fine structures (hairs, threads, spider webs on white walls) and the siege experience (hallucination plus delusion of being besieged, barring doors and windows), all typical of organic psychosis, particularly delirium, sometimes only hours at night in partial syndromes; the night-speech fragmentation is incoherence: the clouded-cognition cousin of schizophrenic loosening, clinically similar, different lesion, different workup; the management is the organic and withdrawal pathway (its own courses, no drug route duplicated here) with the phenomenological record kept as the diagnostic document; the teaching: the modality sets the workup, and the sons' counselling holds the form-content line. The attackers were the illness's content, the visual hallucination and siege its form.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Delusion: an overriding, rigid conviction creating a self-evident, private and isolating reality; unshakeable by experience or counter-argument.",
        "Delusional percept: a normal perception acquiring delusional significance; a first-rank symptom (Schneider).",
        "Voices commenting on the patient's ongoing actions: typical of schizophrenia, never specific to it.",
        "Overvalued idea: a comprehensible idea pursued beyond reason; dysmorphophobia, morbid jealousy, anorexic preoccupation.",
        "Insight (David): recognising the illness, attributing symptoms to it, accepting treatment; three dimensions, never all-or-none.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The recount-back is the discipline's whole craft in one step: continue until the patient recognises the description as accurate; the most reliable elicitation technique in psychiatry and the alliance-builder in the same breath; the consultation that skips it is working from its own assumption, not the patient's experience.",
        "Zucker's as-if lesson: patients who assert their hallucinations are real nevertheless reliably discriminate imitated external voices from their hallucinations; assert-reality and lose-discrimination are different deficits, and the examination should never confuse them.",
        "Klosterkötter's transitions are the longitudinal examination in miniature: elementary crack-and-hiss, to localisable inside-the-head percepts, to complex hallucinations woven into delusional structure with mounting affective involvement. Ask what the voices were like at the beginning, not only what they are like now; and the atmosphere window it illuminates is the early-intervention variable the whole prodrome field runs on.",
        "The explanatory layer's proper place: Hemsley's anomaly, Frith & Done's intention-monitoring failure and Penfield & Perot's stimulations are the explaining that comes after the describing; teaching them before the descriptive catalogue inverts Jaspers' order and produces residents who theorise about experiences they cannot yet name.",
        "The statistical-normality discipline: hypnagogic hallucinations are common and healthy, and it is unwise to extrapolate from mentally ill populations to the origins of normal behaviour; the guard against both overdiagnosis and the seductions of continuity theories.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The fortnight when something was happening",
      presentation: "The uncanny weeks before the belief: the atmosphere window caught in time.",
      initialPresentation: "A 21-year-old college student was brought to the district psychiatric OPD by his father after six weeks of declining attendance and a week of refusing food cooked at home. The father volunteered little beyond quietness and a sudden religiosity; the specific experiences emerged only in the private interview.",
      history: "No substance use, no medical illness, no family psychiatric history. Over the preceding fortnight the student had experienced the world becoming subtly uncanny. A sense that something was going on in which he was personally involved without knowing how: cars parking outside the flat, the neighbours' conversation stopping as he passed, the streetlights seeming out of rhythm. In the last week the uncertainty resolved: the meaning arrived. A group of men from the neighbourhood was watching him through the building's new CCTV and had begun to poison what he ate. He reported feeling relieved that the tension finally had an explanation.",
      examination: "The empathic method: organised questions on each experience, rephrasing, and the recount-back; the description of the atmosphere confirmed by the patient as accurate ('that is exactly what it was like'). Form: a primary delusion arising through the atmosphere-to-self-reference-to-formed-delusion sequence; theme: persecution, the local idiom (CCTV, neighbours, poisoning). No hallucinations on modality-by-modality enquiry; thought form preserved; no passivity. Insight: illness not recognised; the experiences attributed to the men.",
      diagnosis: "First-episode psychosis, schizophreniform presentation in the note's phenomenological terms: a primary persecutory delusion arising through the delusional-atmosphere sequence.",
      management: "The phenomenological examination completed and documented as the diagnostic record: the genesis sequence recorded verbatim from the patient's account. Psychoeducation with the father holding the form-content line: the CCTV-and-poisoning content is the son's world, not the diagnosis's substance. Treatment followed the first-episode psychosis pathway in its own course (no drug route duplicated here); the atmosphere window was named in the notes as the early-intervention variable the six-week presentation had permitted.",
      outcome: "Over the following weeks of treatment the formed delusion's certainty receded and the perplexity of the preceding fortnight became describable in the past tense; the father, counselled on what to watch for, named the something-happening period as the illness's beginning and brought the son to the two subsequent reviews on his own initiative.",
      teachingPoints: [
        "The atmosphere window is a clinical instrument: the uncanny fortnight was the early-intervention opportunity, and recognising it is why this presentation was six weeks, not sixteen months.",
        "The recount-back secured the genesis history: the family could describe only quietness and religiosity; the atmosphere, the mounting self-reference and the relief-at-arrival came from the patient, in the private interview, because the method was used.",
        "Form and content in one sentence: the persecutory form identified the disorder; the CCTV-and-neighbour content revealed the world of a young man in a changing district town, and kept the father in the room.",
        "The relief is the clue: the formed delusion releases the preceding perplexity; a patient calmer after the belief arrived than before it is the atmosphere sequence's signature.",
      ],
    },
    {
      title: "The siege at the white wall",
      presentation: "Hairs, threads and spider webs on a white wall: the visual modality pointing organic.",
      initialPresentation: "A 62-year-old retired mill worker was brought by his two sons after three nights of poor sleep, restlessness and talking to people who were not there; on arrival at the family home the sons had found the doors barred and the windows latched. Their father was keeping the attackers out. Thirty years of liquor dependence; the last drink two days before.",
      history: "Dependence with a familiar withdrawal pattern of tremor and sleeplessness; no prior psychiatric contact. In the three nights before presentation he had watched the white painted wall of his room in the evenings and seen fine hairs, threads and cobwebs moving upon it; men had entered the room in groups at night and mocked him; he had barred the door because they were coming in from all sides. The family reported his speech becoming fragmented and his attention wandering after dark, with clearer intervals in the mornings.",
      examination: "The phenomenological record: visual hallucinations with sensory realism; multi-person scenes and the fine structures (hairs, threads, spider webs on the white wall) that characterise alcoholic delirium; the siege experience: hallucination plus delusion of being besieged, with doors barred and windows latched; fluctuating cognition with nocturnal incoherence of speech: clinically similar to loosening of associations but arising from clouded cognition rather than psychotic associative failure; partial night-time pattern, the syndrome sometimes only hours at night. Tactile and auditory modalities otherwise unremarkable.",
      diagnosis: "Alcohol withdrawal delirium: the organic-psychosis territory the visual modality points to; the phenomenological distinction from a schizophrenic hallucinosis carried by the modality-quality findings.",
      management: "The organic workup the modality dictated, and the delirium and withdrawal treatment in their own courses (no drug route duplicated here). The phenomenological record was kept as the diagnostic document, with the incoherence-versus-loosening distinction documented explicitly. The sons were counselled with the form-content discipline: the attackers were the illness's content, the visual hallucination and the siege its form. The dependence, not the enemies, was what needed treating.",
      outcome: "The delirium resolved over days of treatment; a follow-up examination weeks later in clear consciousness found no hallucinations, the visual modality's organic prediction confirmed; the dependence treatment was engaged afterwards with the sons as the monitoring family. The barred doors were not discussed as paranoid behaviour but as the siege experience it had been.",
      teachingPoints: [
        "The modality sets the workup: visual hallucinations with fine structures and a siege experience point organic (delirium and withdrawal) and the examination's first act is the organic screen, not the antipsychotic consideration.",
        "The fine structures are a signature: hairs, threads and spider webs, especially on white walls, in alcoholic delirium, with multi-person scenes and the sometimes-only-hours-at-night partial pattern.",
        "Incoherence is loosening's organic cousin: clinically similar surfaces, different lesions (clouded cognition versus psychotic associative failure) and the distinction changes every downstream decision.",
        "Typical but not specific, honestly held in both directions: the organic pointers justified the organic workup; the workup, not the pointer alone, made the diagnosis.",
      ],
    },
  ],
  clinicalPearls: [
    "Form identifies the disorder; content reveals the person, and guides a well-directed treatment.",
    "In psychiatry, symptom and sign both live in the speech of the patient: the mood complaint and the alien-forces attribution in the same sentence.",
    "Primary is what empathy can reduce no further; secondary is what emerges from it meaningfully. The nihilistic delusion of profound depression is the classic secondary formation.",
    "The delusion: overriding, rigid, self-evident, private and isolating, and the impossibility criterion was rightly discarded.",
    "Voices talking about the patient among themselves, or commenting on his actions: typical of schizophrenia, never specific to it; name-calling voices are non-specific altogether.",
    "Hairs, threads and spider webs on a white wall, with a siege of besiegers and barred doors: the alcoholic-delirium signature of the visual modality.",
    "Klosterkötter: strongly externally-attributed coenaesthesia predicts schizophrenia, and patients seldom report the experience unless asked.",
    "Affective delusions grow out of the excessive mood and appear consonant with the personality; schizophrenic delusions arrive as something new and alien.",
    "The overvalued idea (comprehensible, pursued beyond reason, insight preserved) prevents the two classic errors: psychosis overdiagnosis and the undertreatment of dysmorphophobia, anorexic preoccupation and morbid jealousy.",
    "Loosening of associations is the schizophrenic associative failure; incoherence is its organic cousin from clouded cognition, similar surface, different lesion, different workup.",
    "Insight is three dimensions, not one switch: recognising the illness, attributing the symptoms to it, accepting the treatment; assess each separately.",
    "Form survives translation; content does not: the multilingual Indian clinic's daily proof that the djinn and the television are one passivity form wearing two idioms.",
  ],
  highYieldSummary: [
    "DEFINITION AND METHOD: psychopathology is the systematic study of abnormal experience, cognition and behaviour. Split into explanatory psychopathologies (causal, theory-driven) and DESCRIPTIVE psychopathology, which precisely describes and categorises abnormal experiences as recounted by the patient and observed in behaviour. Two components: observation of behaviour, and the empathic assessment of subjective experience. Jaspers' phenomenology: the patient introspects and describes, the doctor recognises and understands, aiming to know what the experience must feel like. Symptom versus sign: both are contained within the speech of the patient; he complains of his mood (symptom) and ascribes his knee pain to alien forces (sign) in the same sentence; for diagnostic use a symptom must be typical of the condition and occur relatively frequently. The empathic method: organised questions, rephrasing and reiteration until sure of what is described, the final stage being the recounting-back until the patient recognises it as accurate, on the assumption that all speech, behaviour and nuance has meaning to the patient at the time it occurs, not a mere epiphenomenon of brain function.",
    "THE FOUR DISTINCTIONS: (1) UNDERSTANDING versus EXPLAINING (Jaspers); understanding is the perception of personal meaning via empathy; explanation is external observation and causal connection, as in science. (2) PRIMARY versus SECONDARY: what is primary can be reduced no further by empathy; what is secondary emerges from the primary in an understandable way (if I were as profoundly depressed as my patient, I could believe the world had ended). (3) FORM versus CONTENT: the form (delusion, phobia, the structure) depends on the nature of the illness; the content (nurses stealing money) depends on life situation, culture and society: form identifies the disorder, content reveals the person's current concerns and guides a well-directed treatment. (4) DEVELOPMENT versus PROCESS: a change emerging understandably from previous patterns is development (anankastic personality confronting new circumstances, to anxiety); an event imposed from outside, not understandable as natural progression, is process (epilepsy and its psychiatric symptoms). The cultural discipline: expression and content vary with culture (suppressed, somatised, or subjugated to group well-being) while the form stays constant. The djinn-made-me-do-it is the same passivity form as television-control; and normal is best kept statistical: hypnagogic hallucinations are common and healthy.",
    "DISORDERS OF PERCEPTION. THE DEFINITIONS: hallucination: Cutting's perception without an object; the problem and Zucker's answer: an as-if quality even when patients assert reality (they reliably discriminate imitated external voices from their hallucinations); Janzarik: free-running psychic contents, a Jacksonian disinhibition concept, supported by sensory deprivation and oneiroid paraplegic states. The neighbours: PSEUDOHALLUCINATION (Jaspers); lacks the corporeal tangible quality, arises spontaneously, discernible from real perception, difficult but not impossible to overcome voluntarily (Kandinsky's patient: images with eyes closed, abolished by opening them, near to imagination, yet spontaneous and more vivid; Anglo-American usage inconsistently suffices with awareness of unreality); IMAGERY: vivid, voluntary, trance-intensified; ILLUSION: a misinterpretation of a real object, mood-linked, correctable; DELUSIONAL PERCEPTION: a real percept with an incorrect, incorrigible meaning (illusions can be recognised as misread, delusional perceptions cannot); GEDANKENLAUTWERDEN (thought-echo, Schneider): a transitional phenomenon between imagination and hallucination: the patient recognises the words as his own thoughts but cannot control them, lesser alienation than insertion or voices. Elementary misperceptions in schizophrenia: optical distortions of size, colour, distance, perspective (resembling cannabis experiences), with brief non-verbal cues missed in conversation (Krause's videotape studies); social competence failing at the perceptual root.",
    "THE MODALITY-DIAGNOSIS MAPPINGS AND THE THEORIES: AUDITORY, commonest in the idiopathic psychoses; voices talking about the patient among themselves, or commenting on his ongoing actions or thoughts: typical of but NOT specific to schizophrenia; name-calling and non-commenting voices non-specific. VISUAL, most frequent in organic psychosis, particularly delirium (sometimes only hours at night in partial syndromes): animals and multi-person scenes; the alcoholic fine structures (hairs, threads, spider webs, especially staring at white walls); the SIEGE EXPERIENCE: hallucination plus delusion of being besieged, barring doors and windows: typical but not specific to organic. TACTILE/COENAESTHETIC: more often schizophrenia than affective or organic: simple skin sensations, sexual sensations, inner-organ contraction, expansion and rotation, atypical pain, usually carrying delusional explanations; skin-localised tactile hallucinations underlie parasitosis delusions (elderly early-organic risk). COENAESTHESIA: bodily misperception lasting minutes to days, fluctuating with stress, seldom reported; Klosterkötter: strongly externally-attributed coenaesthesia predicts schizophrenia. Gustatory/olfactory: gas smells with neighbour-poisoning elaborations; melancholic blunting or overspiced-food misperception. The three aetiological theories: OVERSTIMULATION at processing levels (Penfield & Perot: temporal stimulation, scenic hallucinations in 8% of 500 patients; occipital, flashes, circles, stars); DISINHIBITION (Jackson's lineage); INTERPRETIVE-LEVEL distortion of sensory processing. Klosterkötter's transitions: elementary crack and hiss, to localisable inside-the-head percepts, to complex hallucinations woven into delusional structure with mounting affective involvement.",
    "DISORDERS OF THINKING (CONTENT: three types of thinking) fantasy/dereistic/autistic (pathological when accepted as fact: conversion, dissociation, pseudologia fantastica, some delusions, withdrawal from the world); rational/conceptual; imaginative (pathological in degree: the overvalued idea weighs one interpretation above equally possible others; the delusion excludes all other possibilities). THE DELUSION: a complex edifice communicated as judgement; three classical criteria (unrivalled conviction; amenability to neither experience nor counter-argument; impossibility: rightly discarded: collective beliefs read false elsewhere, delusional jealousy's content is possible), yielding the working definition: overriding, rigid convictions creating a self-evident, private and isolating reality requiring no proof. GENESIS: primary (psychologically irreducible) versus secondary (delusion-like, emerging from life events, morbid mood or misperception); the four primary types. INTUITION (autochthonous), PERCEPT (a first-rank symptom), MEMORY (spontaneously distorted or reinterpreted), ATMOSPHERE (the uncanny something-is-happening that matures into self-referential certainty and then the formed delusion, releasing the perplexity); beneath it, Hemsley's anomaly: reduced influence of past experience, heightened awareness of irrelevant stimuli, ambiguous unstructured input, intrusion of unintended long-term-memory material. The six themes: persecution, jealousy, love (erotomania), guilt/unworthiness/poverty (to the nihilistic delusion (the real world has disappeared), grandiosity, hypochondriasis) with religious, infestation, MISIDENTIFICATION (Capgras' imposter substitution) and CONTROL (made-experiences mapped to the intention-monitoring failure, Frith & Done) as specific contents. Mood mapping: guilt and hypochondriasis with depression; grandiosity and erotomania with mania; persecution and jealousy from suspicious or atmospheric states. STRUCTURE: logical versus paralogical; organised versus unorganised (the highly organised logical delusion is systematised); reality-relationship: polarised, juxtaposition, autistic. THE OVERVALUED IDEA (McKenna): acceptable, comprehensible, pursued beyond the bounds of reason, causing disturbed functioning or suffering; dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy, parasitophobia, the transsexual belonging conviction; arising in abnormal personalities under stress (the querulous litigant) or abnormal mood states. Mood-disordered content: Beck's negative triad (self, future, world), failure to self and success to others, the fixed cognitive schema latent after recovery and reactivated by distress; guilt reaching delusional intensity; cultural dependence of guilty content. The key contrast: affective delusions grow out of the mood and appear consonant with the personality; schizophrenic delusions appear new and alien. Phobic and anankastic phenomena: inappropriate exaggerated fears with avoidance; obsessions and compulsions recognised as one's own yet resisted, most frequently with abnormal personality.",
    "DISORDERS OF THE THINKING PROCESS AND SPEECH: form and stream, independent of content. ACCELERATION (associations formed normally but rapidly; flight of ideas when links loosen with mood elevation) versus RETARDATION (depressive slowing); CIRCUMSTANTIALITY (goal retained, path wandering through over-detailed steps) versus TANGENTIALITY (replies obliquely past the point); PERSEVERATION (response persisting beyond relevance, organic); THOUGHT BLOCKING (sudden unintended cessation, schizophrenia and severe mood states); LOOSENING OF ASSOCIATIONS (flow interrupted, ideas linked by superficial or chance associations, clang, puns) versus INCOHERENCE (its organic cousin, from the clouded cognition of delirium and dementia); PASSIVITY of thought: insertion, withdrawal, broadcast, the made-experience. The speech-and-language layer: alogia (poverty of speech), poverty of content, logorrhoea, verbigeration (monotonous syllable-repetition), echolalia, approximate answers (Vorbeiredanken. Ganser syndrome), paraphasia, the dysphasias (sensory versus motor, pure word-deafness), mutism, pseudologia fantastica (fluent lying with the quality of conviction).",
    "THE SELF AND INSIGHT (AND WHY IT ALL MATTERS: self-experience disorders) the permeability-of-self theme; Scharfetter's ego dimensions (identity, demarcation, consistency, activity, vitality); depersonalisation and derealisation with retained insight; the nihilistic delusion reaching Cotard's syndrome; autoscopic phenomena (seeing one's double). INSIGHT (David): the recognition that one has an illness, the attribution of symptoms to it, and the acceptance of treatment; multidimensional, never all-or-none; poor insight relates to acute psychopathology and independently predicts some outcomes; the social-normative layer (Kemp & David) treats insight itself as a belief subject to persuasion. Why it matters: form, not content, identifies the disorder. The cultural and forensic errors of psychiatry are usually form-content confusions; the recount-back is the most reliable elicitation and the alliance-builder; the delusional mood is the pre-psychotic signal whose recognition buys early intervention; the modality pointers set the workup; the overvalued-idea category prevents the two classic errors. The Indian layer: form survives translation, content does not. The clinician diagnoses the form and treats the person through the content; the possession differential (spiritual experience versus dissociative possession versus schizophrenic passivity) is made on form criteria: attribution, control, congruence with the cultural norm; somatised distress (gas, burning, head pressure) means the empathic elicitation begins in the body; the joint family supplies the behavioural observation richly while the subjective component needs the private interview; and phenomenology is the most portable psychiatric skill: no equipment, every language, examinable at the bedside.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pp-quiz-1",
      question: "Jaspers' distinction between understanding and explaining underpins which psychopathological distinction?",
      options: ["Form and content", "Primary and secondary phenomena — the irreducible versus the meaningfully emergent", "Nominal and ordinal scales", "Symptom and sign"],
      correctIndex: 1,
      explanation: "What cannot be reduced further by empathy is primary; what emerges from the primary in an understandable way is secondary — the nihilistic delusion of severe depression being the classic secondary formation.",
      afterSectionId: "mechanism",
    },
    {
      id: "pp-quiz-2",
      question: "Fine visual hallucinations of hairs, threads and spider webs, especially when staring at a white wall, characteristically occur in:",
      options: ["Alcoholic delirium", "Adolescent-onset schizophrenia", "Generalised anxiety disorder", "Pure anankastic states"],
      correctIndex: 0,
      explanation: "The alcoholic-delirium signature — alongside multi-person scenes and the organic siege experience: the visual modality's organic pointers.",
      afterSectionId: "symptoms",
    },
    {
      id: "pp-quiz-3",
      question: "Hallucinated voices talking among themselves about the patient, and voices commenting on the patient's ongoing actions, are:",
      options: ["Specific to mania", "Typical of but not specific to schizophrenia", "Diagnostic of organic psychosis", "Never pathological"],
      correctIndex: 1,
      explanation: "The classic typical-but-not-specific discipline; name-calling voices and non-commenting voices are diagnostically non-specific altogether.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pp-quiz-4",
      question: "A patient reports that the television announcer's ordinary greeting was 'a signal that I have been chosen'. The phenomenological form of this is:",
      options: ["An illusion", "A delusional percept — a real perception acquiring delusional significance, a first-rank symptom", "A pseudohallucination", "Gedankenlautwerden"],
      correctIndex: 1,
      explanation: "The percept is real; the meaning attached is delusional and incorrigible — distinguishing it from illusion (correctable misreading) and hallucination (perception without object).",
      afterSectionId: "differential",
    },
    {
      id: "pp-quiz-5",
      question: "An acceptable, comprehensible idea pursued beyond the bounds of reason, causing disturbed functioning or suffering, is:",
      options: ["A primary delusion", "An overvalued idea", "Thought insertion", "A delusional atmosphere"],
      correctIndex: 1,
      explanation: "The bridge category: dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy and the querulous pursuit of injustice — comprehensible in origin, excessive in degree, preserved in insight relative to the delusion.",
      afterSectionId: "management",
    },
    {
      id: "pp-quiz-6",
      question: "In a multilingual Indian clinic, what happens to a delusion's form and its content across languages?",
      options: ["Both translate freely", "The form (passivity, percept, atmosphere) is identifiable across languages while the content arrives in local idiom", "The content stays constant while the form changes", "Neither can be identified reliably across languages"],
      correctIndex: 1,
      explanation: "Form survives translation, content does not — the clinician diagnoses the form and treats the person through the content: spirits, enemies, poisoning or CCTV, the idiom of the patient's world.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Define descriptive psychopathology with its two components, and state what Jaspers' phenomenology demands of the patient and the doctor, and why psychiatric symptom and sign both live in the speech.", answer: "DEFINITION: the precise description and categorisation of abnormal experiences as recounted by the patient and observed in behaviour, against explanatory psychopathologies, which are causal and theory-driven. TWO COMPONENTS: observation of behaviour, and the empathic assessment of subjective experience. THE DEMANDS: the patient introspects and describes; the doctor recognises and understands the description, aiming to know what the experience must feel like. SYMPTOM AND SIGN: in internal medicine the complaint (symptom) and the elicited finding (sign) are separable; in psychiatry both are contained within the speech of the patient (he complains of his mood (symptom) and ascribes his knee pain to alien forces (sign) in the same sentence) and for diagnostic use a symptom must be typical of the condition and occur relatively frequently in it.", topic: "The method" },
    { question: "State the four great distinctions with one clinical example of each.", answer: "(1) UNDERSTANDING versus EXPLAINING (Jaspers): understanding is the perception of personal meaning via empathy. I understand because I can put myself in my patient's situation and feel those feelings myself; explanation is external observation and causal connection, as in science. (2) PRIMARY versus SECONDARY: what empathy can reduce no further is primary; what emerges from the primary in an understandable way is secondary: were I as profoundly depressed as my patient, I could believe the world had ended (a nihilistic secondary delusion). (3) FORM versus CONTENT: the form (delusion, phobia) depends on the nature of the illness and identifies the disorder; the content (nurses stealing money) depends on life situation, culture and society, reveals the person's current concerns and guides a well-directed treatment. (4) DEVELOPMENT versus PROCESS: change emerging understandably from previous patterns is development; anankastic personality confronting new circumstances, to anxiety; an event imposed from outside, not understandable as natural progression, is process: epilepsy and its psychiatric symptoms.", topic: "The four distinctions" },
    { question: "Recite the delusion definition, the three classical criteria, and why impossibility was discarded.", answer: "THE WORKING DEFINITION: overriding, rigid convictions which create a self-evident, private and isolating reality requiring no proof; familiarly, a false unshakable belief out of keeping with the patient's social and cultural background. THE THREE CLASSICAL CRITERIA: unrivalled conviction; amenability to neither experience nor counter-argument; impossibility of content. WHY IMPOSSIBILITY WAS DISCARDED: collective socio-cultural beliefs read false elsewhere (what a community holds true is a cultural fact, not a delusion) and delusional jealousy's content is entirely possible; impossibility fails both culturally and logically, leaving the first two criteria to carry the definition.", topic: "The delusion" },
    { question: "Name the four primary-delusion types, and walk the genesis sequence from atmosphere to formed delusion.", answer: "THE FOUR: delusional INTUITION; autochthonous conviction arriving out of the blue; delusional PERCEPT: a normal perception acquiring delusional significance (a Schneider first-rank symptom); delusional MEMORY: a distorted or false memory arriving spontaneously, or a normal memory reinterpreted with delusional meaning; delusional ATMOSPHERE (mood): minuscule, almost-unnoticed experiences imparting a new, uncanny, bewildering aspect. THE SEQUENCE: the atmosphere first; something is going on in which one is personally involved without knowing how; the uncertainty then evolves into self-referential certainty: the patient, not merely the world, becomes the target; the fully formed delusional meaning finally arrives, and the formed delusion releases the preceding perplexity, which is why patients can feel relief at the belief's arrival. Beneath it, Hemsley's cognitive anomaly: a disturbance reducing the influence of past experience on current perception, heightened awareness of irrelevant stimuli, ambiguous unstructured input, intrusion of unintended long-term-memory material.", topic: "Delusion genesis" },
    { question: "Recite the six delusional themes with their mood mappings, and state the affective-versus-schizophrenic phenomenological contrast.", answer: "THE SIX THEMES: persecution; jealousy; love (erotomania's conviction); guilt, unworthiness and poverty: reaching the nihilistic delusion, the real world has disappeared; grandiosity; hypochondriasis, with the specific contents: religious, infestation, misidentification (Capgras' imposter substitution, physical transformation into the self) and control (sensations, feelings, drives, volition and thoughts experienced as made by others, mapped to the intention-monitoring failure). THE MOOD MAPPINGS: guilt, unworthiness and hypochondriacal themes with depression; grandiose and erotic themes with mania; persecution and jealousy from suspicious or atmospheric states, though occurring in depression too. THE CONTRAST: affective delusions grow out of the underlying excessive mood and appear as consonant with the personality; schizophrenic delusions appear as something new and alien. The diagnostic feel of the two psychoses in a single phenomenological sentence.", topic: "Themes and contrast" },
    { question: "Define: pseudohallucination (Jaspers), illusion, delusional perception, Gedankenlautwerden, and the overvalued idea.", answer: "PSEUDOHALLUCINATION: lacks the corporeal, tangible quality of true hallucination; arises spontaneously; is discernible from real perception; is difficult but not impossible to overcome voluntarily. Kandinsky's patient saw acquaintances' images with eyes closed, abolished by opening them, near to imagination yet spontaneous and more vivid; the Anglo-American literature inconsistently suffices with subjective awareness of unreality. ILLUSION: a misinterpretation of a real object, often mood-linked, correctable by the patient. DELUSIONAL PERCEPTION: a real percept to which an incorrect, incorrigible meaning attaches; illusions can be recognised as misread, delusional perceptions cannot; a first-rank symptom. GEDANKENLAUTWERDEN (thought-echo, Schneider): a transitional phenomenon between imagination and hallucination; the patient recognises the words as his own thoughts but cannot control them; lesser alienation than thought insertion or voices. OVERVALUED IDEA: an acceptable, comprehensible idea pursued beyond the bounds of reason, causing disturbed functioning or suffering (dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy, parasitophobia, the transsexual belonging conviction) typically arising in abnormal personalities under stress or in abnormal mood states.", topic: "The five definitions" },
    { question: "Recite the modality-diagnosis mappings with their typical-but-not-specific discipline.", answer: "AUDITORY: the commonest hallucination of the idiopathic psychoses: voices talking about the patient among themselves, or commenting on his ongoing actions or thoughts, are TYPICAL OF BUT NOT SPECIFIC TO schizophrenia; name-calling and non-commenting voices are diagnostically non-specific altogether. VISUAL, most frequent in organic psychosis, particularly delirium, sometimes only hours at night in partial syndromes: animals and multi-person scenes; the alcoholic fine structures (hairs, threads, spider webs, especially staring at white walls); the siege experience (hallucination plus delusion of being besieged, barring doors and windows) typical but not specific to organic psychosis. TACTILE/COENAESTHETIC: more often schizophrenia than affective or organic: simple skin sensations, sexual sensations, inner-organ contraction, expansion and rotation, atypical pain, usually carrying delusional explanations; skin-localised tactile hallucinations underlie parasitosis delusions (an elderly early-organic risk). COENAESTHESIA: bodily misperception lasting minutes to days, fluctuating with stress, not attributed externally, seldom reported by patients; Klosterkötter: strongly externally-attributed coenaesthesia predicts schizophrenia. GUSTATORY/OLFACTORY: gas smells with neighbour-poisoning elaborations; melancholic blunting or overspiced-food misperception.", topic: "Modality mappings" },
    { question: "List the thought-process disorders with one diagnostic association each, and distinguish loosening from incoherence.", answer: "ACCELERATION: associations formed normally but rapidly, flight of ideas when the links loosen with mood elevation (mania). RETARDATION: depressive slowing. CIRCUMSTANTIALITY: the goal retained while the path wanders through over-detailed intermediate steps. TANGENTIALITY: replies obliquely past the point. PERSEVERATION: a response persisting beyond its relevance (organic). THOUGHT BLOCKING: sudden unintended cessation of the train of thought (schizophrenia, and severe mood states). LOOSENING OF ASSOCIATIONS: the flow interrupted, ideas linked by superficial or chance associations such as clang and puns (schizophrenic). INCOHERENCE: clinically similar but arising from the clouded cognition of delirium and dementia rather than from psychotic associative failure: the organic cousin. PASSIVITY OF THOUGHT: thoughts experienced as inserted, withdrawn or broadcast; the made-experience (schizophrenia). The speech layer beneath: alogia, poverty of content, logorrhoea, verbigeration, echolalia, approximate answers (Ganser), paraphasia, the dysphasias, mutism, pseudologia fantastica.", topic: "Thought process" },
  ],
  faqs: [
    { question: "What exactly is phenomenology?", answer: "The disciplined, empathic description of subjective experience: the patient introspects and describes; the doctor questions, rephrases and recounts back until the description is confirmed, building psychiatry's shared language of forms (hallucination, delusion, overvalued idea) that is independent of any theory of causes." },
    { question: "Why does the doctor keep asking me to repeat what the voices are like?", answer: "Because the form carries the diagnosis: who the voices talk about, whether they comment on you, and whether they feel inside or outside the head separates the conditions more reliably than what they say; the content. The repetition is the method checking it has your experience exactly right." },
    { question: "Isn't a delusion just a strong belief?", answer: "No: a delusion is an overriding, rigid conviction creating a self-evident, private and isolating reality that needs no proof and yields to no counter-argument. An overvalued idea is a comprehensible belief pursued beyond reason but reachable by evidence, and a belief shared by a whole culture is not a delusion in that culture." },
    { question: "My patient says spirits control him: delusion or faith?", answer: "Compare the form with the cultural norm: if spirit influence is normative in his community and he can negotiate with it, it is content, not illness; if the experience is an alien made-feeling foreign to his own framework, it is passivity phenomenology. The form decides: attribution, control, and congruence with the cultural norm." },
    { question: "What is a delusional mood?", answer: "The pre-delusional atmosphere: the world subtly uncanny, something going on in which one is involved without knowing how; tension, suspicion, expectation. It matures into self-referential certainty and then the formed delusion, whose arrival often relieves the perplexity; recognising it buys early intervention." },
    { question: "Can you have a hallucination and know it isn't real?", answer: "Yes: a pseudohallucination in Jaspers' sense; vivid, spontaneous, lacking the tangible corporeal quality, recognised as internal and partly controllable. The Anglo-American usage simply requires preserved insight into the unreality. Jaspers' own usage is applied inconsistently in that literature." },
    { question: "What is the difference between a symptom and a sign in psychiatry?", answer: "In internal medicine the symptom is the patient's complaint and the sign the doctor's elicited finding; in psychiatry both are contained within the speech of the patient: he complains of his mood and ascribes his knee pain to alien forces in the same sentence, so the psychiatric symptom embraces both." },
    { question: "Do healthy people have hallucinations?", answer: "Yes: hypnagogic hallucinations at the sleep boundary are statistically common and healthy, which is why normal is best kept statistical in this discipline; and it is unwise to extrapolate from mentally ill populations to the origins of normal behaviour." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Oxford ch 1.7 method — the empathic examination discipline (paraphrased from the source chapter)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 1.7 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Sims A — Symptoms in the Mind: the descriptive-psychopathology textbook tradition the source chapter belongs to" },
      { source: "Jaspers K — General Psychopathology (7th edn, trans Hoenig & Hamilton): phenomenology, understanding/explaining, primary/secondary, form/content, pseudohallucination (1963)" },
      { source: "Schneider K — Klinische Psychopathologie: the first-rank symptoms, delusional percept, thought-echo (1962)" },
      { source: "Beck AT et al. — Cognitive Therapy of Depression: the negative cognitive schema (1979)" },
    ],
    trials: [
      { source: "Penfield W & Perot P — cortical stimulation and scenic hallucinations (8% of 500 temporal stimulations; occipital flashes, circles, stars)" },
      { source: "Zucker et al. — the experimental demonstration of the as-if quality of hallucinated voices" },
    ],
    reviews: [
      { source: "Klosterkötter J — the elementary-to-complex hallucination transitions; coenaesthesia as a schizophrenia predictor" },
      { source: "Krause R et al. — non-verbal cue processing deficits in schizophrenia (videotape studies)" },
      { source: "McKenna PJ — disorders with overvalued ideas (Br J Psychiatry 145:579–85, 1984)" },
      { source: "Frith CD & Done DJ — experiences of alien control: the intention-monitoring failure (1989)" },
      { source: "Hemsley DR — the experimental-psychological model of the primary-delusion cognitive anomaly (1994)" },
      { source: "David AS — insight and psychosis (Br J Psychiatry 156:798–808, 1990)" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, for distress and guidance on where to go" },
      { source: "The recount-back script — the one-minute instrument this course hands to every clinician and patient alike" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what the doctor's careful questions are for, why patterns matter more than words, what to bring to the appointment.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The definition, the empathic method, the four distinctions, the perception and thinking catalogues, insight.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "37 min",
      description: "Everything: the examination craft, the genesis sequences, the Indian multilingual discipline, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definition, the two components, the four great distinctions.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define descriptive psychopathology and state the four distinctions with a clinical example each." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The descriptive engine: empathic elicitation, delusional genesis, hallucination transitions, the explanatory counterpart.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the empathic method's stages and the atmosphere-to-formed-delusion sequence cold." },
    { number: 3, title: "Clinical Practice", description: "The symptom catalogue as clinical signals, the working criteria, the distinctions at the bedside, the examination as management.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can classify a described experience by modality, quality and form, and name the two errors the overvalued-idea category prevents." },
    { number: 4, title: "Indian Context", description: "The multilingual clinic, the possession differential, somatised distress, the decision path and the common mistakes.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the spirits script, the body-first script and the form-criteria possession differential without notes." },
    { number: 5, title: "Exam Revision", description: "The exam lens, the two cases and the high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the delusion definition, the primary four, the modality mappings and the affective contrast cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer all eight recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 1.7 — the source chapter (Sims' synthesis, in his Symptoms in the Mind textbook tradition); content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Jaspers K — General Psychopathology (7th edn, trans Hoenig & Hamilton): phenomenology, understanding/explaining, primary/secondary, form/content, pseudohallucination", sourceType: "textbook", year: "1963", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Schneider K — Klinische Psychopathologie: the first-rank symptoms, delusional percept, thought-echo", sourceType: "textbook", year: "1962", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Cutting J — 'perception without an object' (the hallucination definition); Janzarik W — 'free-running psychic contents' (the Jacksonian disinhibition account)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Zucker et al. — the experimental 'as if' quality of hallucinated voices; Krause R et al. — non-verbal cue processing deficits in schizophrenia (videotape studies)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Penfield W & Perot P — cortical stimulation and scenic hallucinations (8% of 500 temporal stimulations; occipital flashes, circles, stars)", sourceType: "primary", year: "1963", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Klosterkötter J — the elementary-to-complex hallucination transitions; externally-attributed coenaesthesia as a schizophrenia predictor", sourceType: "primary", year: "1990s–2001", dateReviewed: "2026-09-30" },
    { id: "S8", source: "McKenna PJ — disorders with overvalued ideas (Br J Psychiatry 145:579–85)", sourceType: "primary", year: "1984", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Beck AT et al. — Cognitive Therapy of Depression: the negative cognitive schema and the mood-disordered thinking content", sourceType: "textbook", year: "1979", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Frith CD & Done DJ — experiences of alien control: the intention-monitoring failure (1989); Hemsley DR — the experimental-psychological model of the primary-delusion cognitive anomaly (1994)", sourceType: "primary", year: "1989 / 1994", dateReviewed: "2026-09-30" },
    { id: "S11", source: "David AS — insight and psychosis (Br J Psychiatry 156:798–808): the three dimensions, with the Kemp & David social-normative layer", sourceType: "primary", year: "1990", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Kandinsky — the classical pseudohallucination vignette; Scharfetter — the ego-psychopathology dimensions (identity, demarcation, consistency, activity, vitality)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The method: psychopathology is the systematic study of abnormal experience, cognition and behaviour, split into explanatory psychopathologies (causal, theory-driven) and descriptive psychopathology, which precisely describes and categorises abnormal experiences as recounted by the patient and observed in behaviour; its two components are observation of behaviour and the empathic assessment of subjective experience (Jaspers' phenomenology: the patient introspects and describes, the doctor recognises and understands, aiming to know what the experience must feel like); symptom and sign both live in the patient's speech, and a symptom is diagnostically usable only when typical of the condition and relatively frequent in it; the empathic method runs organised questions, rephrasing and reiteration to the final recounting-back that the patient recognises as accurate, on the assumption that all speech, behaviour and nuance has meaning to the patient at the time it occurs.", grade: "established", sources: ["S1", "S2"] },
    { text: "The four great distinctions: understanding (empathic, meaningful) versus explaining (causal, scientific); primary (reducible no further by empathy) versus secondary (emerging from the primary in an understandable way, the nihilistic delusion of profound depression); form (depends on the nature of the illness, identifies the disorder) versus content (depends on life situation, culture and society, reveals the person and guides well-directed treatment); development (emerging understandably from previous patterns) versus process (imposed from outside, not understandable as natural progression, epilepsy and its psychiatric symptoms).", grade: "established", sources: ["S1", "S2"] },
    { text: "The hallucination definitions: Cutting; perception without an object; Zucker's experiments: an as-if quality even when patients assert reality, discriminating imitated external voices from their hallucinations reliably; Janzarik: free-running psychic contents, a Jacksonian disinhibition concept unconnected to perception as such, supported by hallucinations in sensory deprivation and oneiroid paraplegic states; the perceptual quality varying from delirium's sensory realism to schizophrenia's bizarre apprehensions, with the amphetamine psychoses' film-like quality against the affectively overwhelming hallucinations of delusional mood.", grade: "established", sources: ["S4", "S5", "S1"] },
    { text: "The neighbouring phenomena: pseudohallucination (Jaspers) lacks the corporeal tangible quality, arises spontaneously, is discernible from real perception, and is difficult but not impossible to overcome voluntarily (Kandinsky's patient: acquaintances' images with eyes closed, abolished by opening them, near to imagination, yet spontaneous and more vivid; Anglo-American usage inconsistently suffices with subjective awareness of unreality); imagery is vivid and voluntary; the illusion is a correctable, mood-linked misinterpretation of a real object; the delusional perception attaches an incorrigible meaning to a real percept (a Schneider first-rank symptom, illusions can be recognised as misread, delusional perceptions cannot); Gedankenlautwerden (thought-echo) is the transitional phenomenon whose words the patient recognises as his own thoughts but cannot control: lesser alienation than thought insertion or voices.", grade: "established", sources: ["S2", "S3", "S12"] },
    { text: "The modality-diagnosis mappings: auditory, the commonest of the idiopathic psychoses; voices talking about the patient among themselves or commenting on his actions, typical of but not specific to schizophrenia, name-calling and non-commenting voices non-specific; visual, most frequent in organic psychosis particularly delirium (sometimes only hours at night in partial syndromes): animals, multi-person scenes, the alcoholic fine structures (hairs, threads, spider webs, white walls) and the siege experience; tactile and coenaesthetic, more often schizophrenia than affective or organic, usually carrying delusional explanations, with skin-localised tactile hallucinations underlying parasitosis delusions (elderly early-organic risk); gustatory and olfactory: gas smells with neighbour-poisoning elaborations, melancholic blunting, overspiced-food misperception.", grade: "established", sources: ["S1"] },
    { text: "The three aetiological theories of hallucinations: overstimulation at processing levels (Penfield & Perot, temporal stimulation produced scenic hallucinations in 8% of 500 patients, occipital stimulation flashes, circles and stars); disinhibition (Jackson's lineage, Janzarik's free-running psychic contents); interpretive-level distortion of sensory processing, with Klosterkötter's transition observations (elementary crack-and-hiss to localisable inside-the-head percepts to complex hallucinations woven into delusional structure, with mounting affective involvement) and the coenaesthesia rule: strongly externally-attributed coenaesthesia predicts schizophrenia, the bodily misperception itself fluctuating over minutes to days and seldom reported.", grade: "supported", sources: ["S6", "S4", "S7"] },
    { text: "The delusion: three classical criteria (unrivalled conviction; amenability to neither experience nor counter-argument; impossibility of content: rightly discarded, collective socio-cultural beliefs reading false elsewhere and delusional jealousy's content being possible), yielding the working definition of overriding, rigid convictions creating a self-evident, private and isolating reality requiring no proof; genesis: primary (psychologically irreducible) versus secondary (delusion-like, emerging understandably from life events, morbid mood or misperception); the four primary types (intuition, percept, memory, atmosphere) with the sequence: the uncanny atmosphere maturing into self-referential certainty and then the formed delusion, whose arrival releases the preceding perplexity.", grade: "established", sources: ["S1", "S2"] },
    { text: "The delusion's themes, structure and neighbours: six themes (persecution, jealousy, love (erotomania), guilt/unworthiness/poverty (reaching the nihilistic delusion), grandiosity, hypochondriasis) with religious, infestation, misidentification (Capgras' imposter substitution) and control (made-experiences) as specific contents; the mood mapping (guilt and hypochondriasis with depression, grandiosity and erotomania with mania, persecution and jealousy from suspicious or atmospheric states); the structure axes (logical versus paralogical, organised versus unorganised (the highly organised logical delusion being systematised) and the reality-relationship of polarisation, juxtaposition and autistic); and the key contrast: affective delusions grow out of the underlying excessive mood and appear consonant with the personality, schizophrenic delusions appear as something new and alien.", grade: "established", sources: ["S1", "S3"] },
    { text: "The overvalued idea and the mood-disordered content: McKenna's category; an acceptable, comprehensible idea pursued beyond the bounds of reason, causing disturbed functioning or suffering, arising typically in abnormal personalities under stress (the querulous, litigious injustice-pursuer) or in abnormal mood states that set aside the counterbalances (dysmorphophobia, anorexic thinness-preoccupation, morbid jealousy, parasitophobia, the transsexual belonging conviction); Beck's mood-disordered content: the negative cognitive triad (self, future, world), failure attributed to self and success to others, the fixed cognitive schema latent after recovery and reactivated by distress, guilt reaching delusional intensity with culturally dependent content; and the anankastic phenomena: obsessions and compulsions recognised as one's own yet resisted, most frequently with abnormal personality.", grade: "established", sources: ["S8", "S9", "S1"] },
    { text: "The cognitive-science layer beneath the forms: Hemsley's account of the primary delusion; a disturbance reducing the influence of past experience on current perception, heightened awareness of irrelevant stimuli, ambiguous unstructured input, intrusion of unintended long-term-memory material; Frith & Done's account of alien control: the made-experiences of sensations, feelings, drives, volition and thoughts mapped to a failure of the intention-monitoring system; Krause's videotape studies: schizophrenic patients missing brief non-verbal cues, misjudging intentions, social competence failing at the perceptual root.", grade: "proposed", sources: ["S10", "S5"] },
    { text: "The thought-process and speech catalogue: acceleration with flight of ideas (links loosening with mood elevation) versus depressive retardation; circumstantiality (goal retained) versus tangentiality (past the point); perseveration (organic); thought blocking (schizophrenia and severe mood states); loosening of associations (superficial and chance links, clang, puns) versus incoherence (its organic cousin from clouded cognition); passivity of thought: insertion, withdrawal, broadcast; and the speech layer: alogia, poverty of content, logorrhoea, verbigeration, echolalia, approximate answers (Vorbeiredanken, classically Ganser syndrome), paraphasia, the dysphasias with pure word-deafness, mutism, pseudologia fantastica.", grade: "established", sources: ["S1"] },
    { text: "The self and insight: the self-experience disorders; the permeability-of-self theme, Scharfetter's ego-psychopathology dimensions (identity, demarcation, consistency, activity, vitality), depersonalisation and derealisation with retained insight, the nihilistic delusion reaching Cotard's syndrome, autoscopic phenomena; and David's insight: recognition of illness, attribution of symptoms to it, acceptance of treatment, multidimensional rather than all-or-none, poor insight relating to acute psychopathology and independently predicting some outcomes, with the Kemp & David social-normative layer treating insight itself as a belief subject to persuasion.", grade: "established", sources: ["S1", "S11", "S12"] },
    { text: "The Indian layer: form survives translation while content does not; the delusion form (passivity, percept, atmosphere) identifiable across languages with content arriving in local idiom (spirits, enemies, poisoning, CCTV); the possession differential (spiritual experience versus dissociative possession versus schizophrenic passivity) made on form criteria: attribution, control, congruence with the cultural norm; somatised distress (gas, burning, head pressure) as the cultural principle in clinical dress, the empathic elicitation beginning in the body; the joint family supplying rich behavioural observation while the subjective component needs the private interview; and phenomenology as the most portable psychiatric skill (no equipment, every language, examinable at the bedside) practice-pattern description from Indian clinical practice, context honestly labelled.", grade: "supported", sources: ["S1"] },
  ],
};
