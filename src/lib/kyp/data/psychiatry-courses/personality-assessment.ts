import type { PsychiatryCourse } from "./types";

/**
 * PERSONALITY ASSESSMENT — canonical Psychiatry concept course
 * (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/personality-assessment.md — untouched
 * foundation, itself an original rewrite of the Cloninger
 * Oxford ch 1.8.2 synthesis, NOTP 2e 2009): the temperament-
 * character framework and the clinical method of personality
 * assessment, re-researched against the lineages the note
 * itself cites (Cloninger's 1987 tridimensional model; the
 * 1993 Cloninger-Svrakic-Przybeck psychobiological model; the
 * TCI manuals; the temperament-monoamine framework; the
 * Sigvardsson-Bohman-Cloninger cross-fostering heritability
 * studies; the personality-antidepressant-response literature;
 * Virkkunen's antisocial-substance-abuse and CSF studies;
 * Livesley-Jang-Vernon's trait-structure work; WHO ICD-10)
 * with per-claim provenance.
 *
 * Drug routes: NONE — the note assigns no medication any role in
 * personality assessment itself (medication appears only as the
 * adjunct in personality-disorder treatment and as the response
 * variable the traits predict); drugLinks is empty by design and
 * the honest boundaries are recorded in contentGaps, never
 * invented.
 */
export const personalityAssessmentCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "personality-assessment",
  title: "Personality Assessment",
  shortName: "Personality",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Personality Assessment"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "28 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Temperament, character and the clinical read: inventories, interviews and formulation",

  summary:
    "Personality assessment reads a person's emotional style, goals and values through the history and mental state examination: temperament and character as the organizing constructs. The clinical position: the psychiatric interview, properly attended, is the instrument; tests supplement research, not routine care.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define personality with all four definition-words unpacked (dynamic, psychobiological, unique, internal-and-external adaptation) and state the clinical implication of each.",
    "Explain why inflexibility, not extremity, marks personality disorder, and what \"psychobiological\" implies for its treatment: psychological growth as the engine, medication only an adjunct.",
    "Distinguish temperament (moderately heritable, moderately stable biases in emotional responses) from character (weakly heritable, maturing self-concept and goals), and name the TCI's four temperament and three character dimensions with a clinical descriptor each.",
    "Apply the longitudinal assessment principle: the childhood-premorbid question, the range-not-fixed nature of traits, and the rough spots that surface under stress.",
    "Use the clinical method: the history and mental state examination as personality instruments: general appearance, expressions and behaviour, the significance of what is said and how it is said, with a final review covering only the high-yield items that did not surface spontaneously.",
    "State the prediction utilities: comorbidity direction (antisocial personality predicting more substance abuse and less Parkinson's disease), treatment response (traits predicting much of the variability in antidepressant response where depressive symptoms do not), and alliance-building.",
    "Describe the five situations-of-life taxonomy (material, social, mental/spiritual) as the assessment's context frame, and explain why only context-specified assessment is adequate.",
    "Deploy the method in Indian practice: the joint family's multi-informant premorbid history collected deliberately and separately, the cross-setting read, and the trait-state disambiguation in somatic presentations.",
  ],
  quickFacts: [
    { label: "The definition", value: "Four words, all clinical", detail: "Personality is the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment: dynamic (inflexibility marks disorder), psychobiological (treatment requires growth, medication adjunctive), unique (general rules, individually configured), internal-and-external (context-specified assessment only)" },
    { label: "The disorder marker", value: "Inflexibility, not extremity", detail: "Everyone has a range of thoughts, feelings and behaviours; the pattern of variability IS the person's configuration; the loss of the adaptive range (the traits once varying with context becoming rigid, applied everywhere) is what personality disorder adds" },
    { label: "The two layers", value: "Temperament vs character", detail: "Temperament: biases in emotional responses; four moderately heritable, moderately stable dimensions; character: the self-concept and goals layer; weakly heritable, maturing through insight across life; the personality-disorder relation lives largely here" },
    { label: "The TCI's seven dimensions", value: "4 + 3", detail: "Temperament: harm avoidance, novelty seeking, reward dependence, persistence; character: self-directedness, cooperativeness, self-transcendence; low self-directedness and cooperativeness marking PD risk across diagnoses" },
    { label: "The primary instrument", value: "The interview", detail: "Personality can be well assessed clinically without psychometric testing, within routine history-taking and mental state examination, alert to non-verbal cues (general appearance, expressions, behaviour) and to the significance of what is said and how it is said" },
    { label: "The cheapest differential", value: "The premorbid question", detail: "\"What was he like before the depression?\": separates trait from state; the childhood temperament tells which parts are the person and which are the illness, and how the person is likely to recover" },
    { label: "The response predictor", value: "Traits, not symptoms", detail: "Personality traits predict much of the variability in antidepressant response, whereas depressive symptoms do not: the prescribing conversation's hidden variable made explicit" },
    { label: "The monoamine model", value: "Model, not measurement", detail: "Harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline: the framework's psychobiological wing, held as model; the Indian clinic's verdict: clinical assessment suffices" },
  ],
  knowledgeGraph: [
    { label: "Personality Disorders", type: "condition", href: "/psychiatry/personality-disorders-overview/", note: "The disorder this assessment defines the edge of: inflexibility, the adaptation-loss definition this course's read feeds" },
    { label: "Specific Personality Disorder Types", type: "condition", href: "/psychiatry/personality-disorder-types/", note: "The categorical outputs the dimensional read informs: the ten types as extreme, rigid configurations of the same temperament-character space" },
    { label: "Treating Personality Disorders", type: "condition", href: "/psychiatry/personality-disorder-treatment/", note: "The \"psychobiological\" implication delivered: psychological growth as the treatment engine, medication adjunctive only" },
    { label: "Psychodynamic Theories", type: "condition", href: "/psychiatry/psychodynamic-theories/", note: "The character layer's intellectual lineage: insight and self-understanding as the maturing agents the assessment reads" },
    { label: "Psychiatric Assessment", type: "condition", href: "/psychiatry/psychiatric-assessment/", note: "The general examination this method lives inside: the history and mental state examination as the shared instrument" },
    { label: "Descriptive Phenomenology", type: "condition", href: "/psychiatry/psychiatric-phenomenology/", note: "The descriptive discipline underneath the read: what is said and how it is said, described before it is interpreted" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The state that most contaminates the read, and the treatment whose response the traits predict" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The comorbidity the chapter's example anticipates: antisocial personality predicting more substance abuse" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Harm avoidance's monoamine correlate in the framework's psychobiological wing: held as model, not measurement" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The character layer's candidate address: purpose, responsibility and resourcefulness as the maturing self-concept's executive work" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Personality assessment runs on a definition before it runs on any instrument. Personality is the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment. Every word doing clinical work: dynamic (constantly adapting; everyone has a range of thoughts, feelings and behaviours varying within it, and inflexibility, the loss of that adaptive range, is the marker of personality disorder), psychobiological (influenced by biology and psychology both, hence personality-disorder treatment requires growth in psychological self-understanding with medication only an adjunct), unique (general developmental rules followed, individually configured (complex adaptive systems), and internal-and-external (the person differs across contexts) a date, work, church, so only context-specified assessment is adequate). On this engine the quantitative read runs at two levels: TEMPERAMENT, biases in emotional responses along four moderately heritable, moderately stable dimensions (harm avoidance, novelty seeking, reward dependence, persistence), correlated in the framework's psychobiological wing with the monoamine systems (harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline, held as model, not measurement); and CHARACTER, the self-concept and goals layer, weakly heritable and continuing to develop across life through insight (self-directedness, cooperativeness, self-transcendence), where the personality-disorder relation largely lives, low self-directedness and cooperativeness marking PD risk across diagnoses. The read itself is the interview: the history and mental state examination attended to non-verbal cues and to the significance of what is said and how it is said, items surfacing spontaneously in the narrative, brief clarifying questions only, and a final review covering the high-yield gaps, with the corollary that standardized questions asked regardless of interview opportunities signal inadequate construct understanding. The longitudinal correction runs through it: personality develops over time in response to changing internal and external environments, so the premorbid, childhood baseline is asked for whenever the current state (a depression, an anxiety state) modifies emotion, thought and behaviour. The payoffs the engine delivers: personality predicts comorbidity (antisocial personality predicting more substance abuse and less Parkinson's disease), predicts treatment response (traits predicting much of the variability in antidepressant response, where depressive symptoms do not), and builds the alliance itself (the patient feeling understood when the psychiatrist understands their motivation and can predict their reactions) while never reducing anyone to a label.",
    steps: [
      "The definition's engine: dynamic, psychobiological, unique, internal-and-external, with inflexibility (not extremity) the disorder marker, and psychological growth with medication only adjunctive the treatment implication.",
      "The two quantitative layers: temperament; the four moderately heritable, moderately stable biases of emotional response (harm avoidance, novelty seeking, reward dependence, persistence) (versus character) the weakly heritable self-concept and goals layer maturing through insight.",
      "The character-disorder relation: self-directedness, cooperativeness, self-transcendence; low self-directedness and cooperativeness marking personality-disorder risk across diagnoses; the temperament-monoamine associations held as the framework's model layer, never as measurement.",
      "The clinical method: the history and mental state examination as the instruments; non-verbal cues (general appearance, expressions, behaviour), the significance of what is said and how it is said, brief clarifying questions, items surfacing spontaneously, the final review covering only what did not.",
      "The longitudinal correction: the childhood-premorbid question disambiguating the state-modified presentation; the current episode modifies emotion, thought and behaviour, so the baseline is sought in the past.",
      "The context specification: traits differ by setting (some strong and pervasive, others situation-dependent, prior and anticipated events and personal goals modifying outlook) the five situations of life (material, social, mental/spiritual) framing where the read happens.",
      "The payoffs deployed: comorbidity anticipation (the antisocial-personality example), trait-informed treatment planning (the antidepressant-response prediction), and the alliance built by the assessment itself; the anti-label discipline holding throughout.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the character layer's address)", role: "The executive substrate of the maturing self-concept: purpose, responsibility and resourcefulness (self-directedness) as work this region does, and the address insight-based treatment of personality disorder plausibly acts through. Held as the framework's teaching map, not a measurement claim.", grade: "proposed" },
    { id: "amygdala", name: "Amygdala (harm avoidance's alarm)", role: "The threat-response tuning read as the inhibition-worry-pessimism bias of harm avoidance: the person whose first read of any novelty is danger. The framework's model layer, taught as map, not measurement.", grade: "proposed" },
    { id: "ventral-striatum", name: "Ventral striatum (novelty seeking's engine)", role: "The exploratory-activation circuit of novelty seeking: exploratory activity versus rigidity and stoicism; the reward-anticipation signal that pulls the novelty-seeker onward.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Harm avoidance's monoamine correlate in the framework's psychobiological wing: the inhibition-worry-pessimism dimension mapped to serotonergic tuning; held as model, not measurement.", grade: "proposed" },
    { name: "Dopamine", symbol: "DA", role: "Novelty seeking's monoamine correlate: exploratory activity versus rigidity; the framework's dopaminergic mapping of the exploratory bias.", grade: "proposed" },
    { name: "Noradrenaline", symbol: "NE", role: "Reward dependence's monoamine correlate: social attachment and dependence on approval versus detachment; the framework's noradrenergic mapping of the affiliative bias.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "temperament-pathway",
      name: "The temperament pathway (bias to expression)",
      steps: [
        { label: "Heritable bias", detail: "Moderate heritability established by the cross-fostering adoption studies: the temperament dimensions as the person's emotional floor, not the episode's decoration" },
        { label: "Emotional responses biased", detail: "Harm avoidance: inhibition, worry, pessimism versus confidence, optimism; novelty seeking: exploration versus rigidity and stoicism; reward dependence: attachment and approval versus detachment; persistence: determination versus underachievement" },
        { label: "Moderate stability, moderate cross-situational variation", detail: "The dimensions hold across time and shift across settings: the framework's honest \"moderately\" on both counts" },
        { label: "The monoamine model layer", detail: "Harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline: the psychobiological wing, held as model, not measurement" },
        { label: "The clinical read", detail: "The emotional style showing itself in the history and the mental state examination: what is volunteered, what is avoided, how the person engages" },
      ],
      clinicalManifestation: "The worrier who has always been a worrier: the harm-avoidant read that predicts side-effect reporting and compliance patterns before the first tablet is written.",
      grade: "supported",
    },
    {
      id: "character-pathway",
      name: "The character pathway (insight to self-concept)",
      steps: [
        { label: "Weak heritability, lifelong development", detail: "The character dimensions are weakly heritable and continue developing across life: the layer experience writes on" },
        { label: "Insight and self-understanding mature the layer", detail: "Life narrative, psychotherapy, deliberate reflection: the maturing agents the assessment reads and the treatment recruits" },
        { label: "The dimensions expressed", detail: "Self-directedness: resourcefulness, purpose, responsibility versus blaming and aimlessness; cooperativeness: acceptance, empathy, helpfulness versus intolerance and revenge; self-transcendence: self-forgetful participation in the larger whole versus self-centredness" },
        { label: "The disorder relation", detail: "Low self-directedness and cooperativeness marking personality-disorder risk across diagnoses: the PD signal living in the character tier" },
        { label: "The treatment implication", detail: "Personality-disorder treatment works by growing the character layer: psychological growth the engine, medication only an adjunct" },
      ],
      clinicalManifestation: "The maturing that treatment of personality disorder works by: character growing through insight where temperament shifts only slowly.",
      grade: "supported",
    },
    {
      id: "premorbid-pathway",
      name: "The premorbid pathway (the trait-state disambiguation)",
      steps: [
        { label: "The episode colours the present", detail: "A depression or anxiety state modifies emotion, thought and behaviour: the person read through an active episode reads the episode" },
        { label: "The premorbid question asked", detail: "\"What was he like before the depression?\", as a child, before the illness, at the last well period; the cheapest differential instrument in psychiatry" },
        { label: "Informants deliver the baseline", detail: "The joint family's multi-informant memory (what was he like as a boy, before the marriage, at his last job) collected deliberately, separately, in the patient's own words and the family's" },
        { label: "The range-not-fixed logic applied", detail: "Good days and bad days, rough spots under stress, the person varying within a range: the pattern of variability itself the person's configuration" },
        { label: "Trait separated from state", detail: "The state treated as the episode; the person documented as the baseline: the reference point for the current treatment and every future episode" },
      ],
      clinicalManifestation: "The depressed man whose \"dependence\" was the episode wearing the person's clothes: the premorbid question recovering the man the family knew.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "cross-fostering-era", time: "1970s–1980s", title: "The cross-fostering foundation", description: "Sigvardsson, Bohman and Cloninger's adoption and cross-fostering studies establish the moderate heritability of the temperament dimensions: the quantitative structure's biological wing, later held as model rather than measurement at the monoamine layer.", phase: "onset" },
    { id: "tridimensional-model", time: "1987", title: "The tridimensional model", description: "Cloninger's systematic method for clinical description and classification of personality variants (Arch Gen Psychiatry 44:573–88): harm avoidance, novelty seeking and reward dependence; the temperament tier quantified first.", phase: "onset" },
    { id: "psychobiological-model", time: "1993", title: "Temperament and character joined", description: "Cloninger, Svrakic and Przybeck's psychobiological model of temperament and character (Arch Gen Psychiatry 50:975–90): the character tier added (self-directedness, cooperativeness, self-transcendence) and persistence joined as the fourth temperament dimension; the seven-factor structure the TCI measures.", phase: "peak" },
    { id: "tci-era", time: "1990s onward", title: "The TCI and the monoamine framework", description: "The Temperament and Character Inventory manuals operationalize the seven dimensions; the temperament-monoamine associations (harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline) circulated as the framework's model layer: taught ever since as map, not measurement.", phase: "duration" },
    { id: "trait-structure-era", time: "1998", title: "The personality-disorder trait structure", description: "Livesley, Jang and Vernon's phenotypic and genetic structure of traits delineating personality disorder: the trait-structure companion finding, with the character dimensions' low self-directedness and cooperativeness marking PD risk across diagnoses.", phase: "duration" },
    { id: "clinical-synthesis", time: "2009", title: "The Oxford clinical synthesis", description: "The Cloninger ch 1.8.2 synthesis (NOTP 2e) delivers the framework as a clinical method: the interview-first doctrine, the predictive utilities, the definition with every word unpacked for the bedside; the position this course teaches.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the method as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "Not a disorder, and the note's lineage records no survey numbers: the honest epidemiology is structural. Personality assessment applies to every psychiatric patient at every encounter: the four temperament dimensions are moderately heritable and moderately stable across the population; the character dimensions are weakly heritable and mature across life; personality disorder is marked by inflexibility rather than extremity, and its trait structure is shared across diagnoses. The field's measured quantities are predictive, not prevalence: personality predicts comorbidity (the chapter's example, antisocial personality predicting more substance abuse and less Parkinson's disease) and treatment response (traits predicting much of the variability in antidepressant response, whereas depressive symptoms do not).",
    indianPrevalence: "The Indian clinic is natively built for this method: the joint family holds the premorbid history the longitudinal principle demands, and the multi-informant OPD encounter delivers what Western practice must construct deliberately. The TCI exists in research use; Indian clinical practice rarely deploys it: the chapter's own verdict (clinical assessment suffices) licenses the interview-based approach as the Indian norm, not a compromise.",
    lifetimeRisk: "Structural, not numerical: every person carries a personality to be read, and every episode risks being mistaken for one. The state-trait confusion the premorbid question exists to prevent. No lifetime risk figure belongs to a concept lesson, and none is invented.",
    indianNotes: "The somatic-presentation caveat is the Indian examination room's daily version: \"he has always worried about his health since his twenties\" versus \"the gas started after the job loss\". The temperament-character distinction deciding whether the somatic anxiety is the person or the episode.",
  },
  etiology: [
    { category: "genetic", factor: "Temperament's moderate heritability", details: "The four temperament dimensions are moderately heritable and moderately stable (the cross-fostering adoption studies' finding) which is why the emotional biases are read as the person's floor rather than the episode's decoration." },
    { category: "biological", factor: "The psychobiological systems", details: "The definition's own word: personality is the organization of psychobiological systems modulating adaptation; influenced by biology and psychology together, hence the monoamine model layer (harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline) held as model, not measurement, and the growth-not-medication treatment implication." },
    { category: "psychological", factor: "Character's maturation through insight", details: "Self-directedness, cooperativeness and self-transcendence are weakly heritable and continue developing across life: the self-concept and goals layer that insight and self-understanding mature, and where the personality-disorder relation largely lives." },
    { category: "social", factor: "Context and situation-dependence", details: "The person differs across contexts (a date, work, church) with some traits strong and pervasive, others situation-dependent; prior and anticipated events and personal goals modifying outlook; the five situations of life (material, social, mental/spiritual) supplying the assessment's context frame." },
    { category: "environmental", factor: "The state's contamination", details: "Episodes modify emotion, thought and behaviour: the depression or anxiety state that must be disambiguated from the person by the premorbid-childhood question; the assessment's commonest confounder and the reason the longitudinal principle exists." },
  ],
  symptomClusters: [
    {
      category: "1. The temperament read (emotional style)",
      symptoms: [
        "Harm avoidance: the tendency toward inhibition, worry and pessimism versus confidence and optimism; varying moderately across situations",
        "Novelty seeking: exploratory activity versus rigidity and stoicism",
        "Reward dependence: social attachment and dependence on approval versus detachment",
        "Persistence: determination and ambition versus underachievement",
      ],
    },
    {
      category: "2. The character read (self-concept and goals)",
      symptoms: [
        "Self-directedness: resourcefulness, purpose and responsibility versus blaming and aimlessness",
        "Cooperativeness: acceptance, empathy and helpfulness versus intolerance and revenge",
        "Self-transcendence: self-forgetful participation in the larger whole versus self-centredness",
        "The disorder signal: low self-directedness and cooperativeness marking PD risk across diagnoses",
      ],
    },
    {
      category: "3. The interview signals (what the encounter shows)",
      symptoms: [
        "General appearance, expressions and behaviour: the non-verbal cue layer the clinician stays alert to",
        "The significance of what is said and how it is said: the how as data, not decoration",
        "Personality items surfacing spontaneously in the narrative: the best data the interview yields",
        "The rough spots under stress, the good days and bad days: the range in action, the pattern of variability itself the configuration",
      ],
    },
    {
      category: "4. The state-contamination signals (what must be subtracted)",
      symptoms: [
        "A depression or anxiety state modifying emotion, thought and behaviour: the present read coloured by the episode",
        "The somatic presentation whose timeline decides: always-worried (trait) versus after-the-job-loss (state)",
        "Context-splits awaiting interpretation: muted at home, expansive at work; situation-dependence, not inconsistency",
        "The standardized-question reflex: fixed items asked regardless of interview opportunities; the sign the constructs are not understood",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The clinical method",
      code: "The interview as the instrument",
      criteria: [
        "Personality can be well assessed clinically, without psychometric testing, within routine history-taking and mental state examination, simple and brief.",
        "Alertness to non-verbal cues: general appearance, expressions, behaviour; the layer that never reaches the referral letter.",
        "Alertness to the significance of what is said and how it is said: only brief clarifying questions being needed.",
        "Personality items surface spontaneously in the narrative; the clinician does not interrupt them with standardized schedules.",
        "A final review covers the high-yield items that did not surface spontaneously, and nothing more.",
        "The corollary held: if standardized questions must be asked regardless of interview opportunities, the basic constructs are not adequately understood.",
      ],
      duration: "Distributed through every routine assessment: minutes, not visits; no instrument fee.",
      indianNote: "The Indian OPD's default arrangement (multiple relatives, longitudinal acquaintance with the patient) supplies the method's raw material; the discipline is to collect it deliberately: separately, in the patient's own words and the family's.",
    },
    {
      system: "The Temperament and Character Inventory",
      code: "The seven-dimension quantitative frame",
      criteria: [
        "Temperament: biases in emotional responses, four dimensions, moderately heritable and moderately stable: harm avoidance (inhibition, worry, pessimism versus confidence, optimism), novelty seeking (exploration versus rigidity and stoicism), reward dependence (social attachment and approval-dependence versus detachment), persistence (determination and ambition versus underachievement).",
        "Character: the self-concept and goals layer, three dimensions, weakly heritable, maturing through insight: self-directedness (resourcefulness, purpose, responsibility versus blaming, aimlessness), cooperativeness (acceptance, empathy, helpfulness versus intolerance, revenge), self-transcendence (self-forgetful participation in the larger whole versus self-centredness).",
        "The personality-disorder relation: low self-directedness and cooperativeness marking PD risk across diagnoses.",
        "The monoamine correlates (harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline) held as the framework's model layer, not as measurement.",
      ],
      duration: "A research instrument, in Indian clinical practice rarely deployed, and not required for competent assessment.",
      indianNote: "The chapter's own verdict licenses the interview-based approach: the TCI supplements research, not routine care; the Indian clinic runs on the clinical method and loses nothing by it.",
    },
    {
      system: "The longitudinal and context principles",
      code: "The state-disambiguation frame",
      criteria: [
        "The premorbid question asked whenever the state modifies the presentation: what was the person like as a child, before the illness, at the last well period; the cheapest differential instrument in psychiatry.",
        "The range-not-fixed logic: everyone has a range of thoughts, feelings and behaviours; traits vary within it and occasionally move beyond it in response to internal and external events: the pattern of variability is the person's configuration.",
        "Context-specified assessment: the person differs across situations (a date, work, church), some traits strong and pervasive, others situation-dependent; assessment that does not specify the psychosocial context is not adequate.",
        "The five situations of life as the context frame: material situations (possessions, practical tasks), social situations, and the mental/spiritual domain; people differing in which situation-class most engages them.",
      ],
      duration: "Asked at every assessment of an episode, and repeated whenever the episode changes.",
      indianNote: "The Indian read runs across settings before concluding: the person muted at home, expansive at work, submissive before elders and commanding with juniors is one personality in several situations; the chapter's situation-dependence made Indian.",
    },
  ],
  differentialDiagnosis: [
    { condition: "State masquerading as trait (the episode wearing the person's clothes)", distinguishingFeatures: "A depression or anxiety state modifies emotion, thought and behaviour: clinginess, irritability, pessimism and self-reproach read as \"personality\" at a single cross-sectional interview.", keyDifferentiator: "The premorbid-childhood question: what was the person like before the episode; the baseline sought in the past, from the patient and the informants, before any trait is concluded." },
    { condition: "Extreme temperament versus personality disorder", distinguishingFeatures: "Marked harm avoidance or novelty seeking without dysfunction: intensity of traits mistaken for the disorder, because extremity is intuitive and inflexibility is not.", keyDifferentiator: "The inflexibility criterion: disorder is the loss of the adaptive range; the traits that once varied with context becoming rigid, applied everywhere, causing distress and dysfunction; extremity alone is not the diagnosis." },
    { condition: "Personality disorder versus the axis-I illness it accompanies", distinguishingFeatures: "The antisocial patient's substance abuse, the harm-avoidant patient's \"refractory\" depression on abandoned regimens: the axis-I picture that the personality beneath predicts and maintains.", keyDifferentiator: "The comorbidity-anticipation direction: personality predicts which other disorders to expect (and which not, antisocial personality predicting more substance abuse and less Parkinson's disease), so the assessment multiplies assessment rather than competing with it." },
    { condition: "Trait anxiety versus episode anxiety in somatic presentations", distinguishingFeatures: "The health-worrier of two decades against the breathlessness that began after the job loss, both presenting through the body, both requesting reassurance.", keyDifferentiator: "The timeline question: \"he has always worried about his health since his twenties\" is temperament; \"the gas started after the job loss\" is state. The longitudinal read deciding which is being treated." },
  ],
  management: [
    { category: "psychotherapy", name: "The clinical read: history and mental state examination as personality instruments", description: "The primary method: personality assessed within routine history-taking and mental state examination; alert to general appearance, expressions and behaviour, and to the significance of what is said and how it is said; personality items allowed to surface spontaneously, brief clarifying questions only, a final review covering the high-yield gaps; the assessment conducted as the exploration of the person's uniqueness, never reducing anyone to a case or a label.", whenToUse: "Every psychiatric assessment: the method is the assessment, not an addition to it.", indianContext: "The joint family's multi-informant memory (what was he like as a boy, before the marriage, at his last job) delivers the longitudinal material the method demands: collect it deliberately, separately, in the patient's own words and the family's." },
    { category: "psychotherapy", name: "The premorbid-personality question (the trait-state disambiguation)", description: "The cheapest differential instrument in psychiatry: whenever the current state modifies emotion, thought and behaviour, ask what the person was like before, as a child, before the illness, at the last well period; the childhood temperament tells which parts are the person and which are the illness, and how the person is likely to recover; the premorbid personality documented as the baseline for the current episode and every future one.", whenToUse: "Every episode assessment: depression, anxiety, psychosis, any state that colours the read.", indianContext: "The Indian clinic's native strength: the family holds the premorbid history. The discipline is separation (patient's account, then the family's) and documentation, so the baseline survives the consultation." },
    { category: "psychotherapy", name: "Context-specified assessment (the cross-setting read)", description: "Because the person differs across situations: a date, work, church; home, factory, temple: adequate assessment specifies the psychosocial context: some traits strong and pervasive, others situation-dependent, prior and anticipated events and personal goals modifying outlook; the five situations of life (material, social, mental/spiritual) supplying the frame; the cross-setting inconsistencies read as situation-dependence, not dishonesty.", whenToUse: "Whenever the account is context-split (the family's version and the employer's version disagreeing) and before any trait is concluded from a single setting.", indianContext: "The person muted at home, expansive at work, submissive before elders and commanding with juniors is not inconsistent: the chapter's situation-dependence made Indian; assess across the settings before concluding." },
    { category: "psychotherapy", name: "Trait-informed treatment planning (the prescribing conversation's hidden variable)", description: "People differ markedly in the treatments they respond to and comply with: personality traits predict much of the variability in antidepressant response, whereas depressive symptoms do not, so the read enters the plan: the harm-avoidant patient's sensitivity anticipated with earlier and more explicit side-effect discussion; the novelty-seeking patient's regimen simplified; the reward-dependent patient's family engaged in supervision; the character layer's strengths (self-directedness, cooperativeness) recruited as the treatment's allies.", whenToUse: "Every treatment-planning conversation: the person, not merely the diagnosis, in the drug choice and the framing.", indianContext: "The Indian prescribing conversation is trait-informed already: once-daily dosing, family-supervised medication, the side-effect framing; make it explicit rather than accidental." },
    { category: "psychotherapy", name: "The alliance move (assessment as the first treatment)", description: "The assessment itself is therapeutic: the sharing of uniquely personal information establishes mutual respect; patients feel understood when the psychiatrist understands their motivation and can predict their reactions: the alliance the treatment will run on; the anti-label discipline holds throughout: no one likes to be reduced to a case or a label, and the assessment explores the mystery of uniqueness systematically, without reduction.", whenToUse: "Every assessment: the alliance is built in the reading, not after it.", indianContext: "The Indian family present at the consultation is an alliance asset: the read that includes the family's account makes the household the treatment's carrier rather than its obstacle." },
    { category: "psychotherapy", name: "The inventory's honest place (when standardized data is wanted)", description: "The TCI operationalizes the seven dimensions and serves research and quantified follow-up; the clinical position stands: the test supplements research, not routine care, and the corollary disciplines its use: standardized questions run regardless of interview opportunities mean the basic constructs are not adequately understood.", whenToUse: "Research settings and quantified follow-up, never as a substitute for the attended interview.", indianContext: "Indian clinical practice rarely deploys the TCI; the chapter's own verdict licenses the interview-based approach: the Indian clinic loses nothing by running on the clinical method." },
  ],
  drugLinks: [],
  contentGaps: [
    "No medication is this course's territory: the note assigns drugs no role in personality assessment itself; medication appears only as the adjunct in personality-disorder treatment and as the response variable the traits predict; the pharmacology lives in the Treating Personality Disorders course and the KYP drug lessons, and no drugLinks are invented here.",
    "The psychometric-instrument tier (the TCI as an administered inventory, its scoring, norms and interpretation beyond the framework) has no KYP lesson of its own; the note's verdict (clinical assessment suffices) makes the gap deliberate, recorded rather than filled.",
    "The temperament-monoamine biology beyond the model layer (the fuller psychobiological literature the framework's wing rests on) has no dedicated KYP lesson; the chemistry is taught in the Neurotransmitters & Signalling course and the model held here at honest proposed grade.",
    "The personality-antidepressant-response literature is cited by the note as a predictive utility but has no dedicated KYP lesson of its own; the trait-informed prescribing conversation is taught here and exercised inside the mood-disorder courses.",
  ],
  patientGuide: {
    whatIsIt:
      "Personality assessment is the doctor's disciplined way of reading who you are (your emotional style, your goals and your values) not just what illness you have. It happens through ordinary conversation: your history, how you talk and carry yourself, what you say and how you say it, and what your family remembers of you across the years. Its working ideas: temperament; the emotional tendencies you were partly born with (worry, adventurousness, people-orientation, stick-with-it-ness), and character, the goals and self-understanding that keep maturing through life. It needs no test, and it costs nothing beyond the conversation itself.",
    whatCausesIt:
      "Nothing causes it. It is not an illness. Your temperament is partly inborn and reasonably stable; your character keeps growing through experience and self-understanding. Both are shaped by the situations of your life (home, work, community, worship) and, read properly, neither is a fault: they are how one particular person adapts.",
    symptoms:
      "Not applicable as an illness. What the doctor attends to: how you have always reacted to worry, novelty, approval and difficulty; what you say and how you say it; how you differ from place to place (quiet at home, outgoing at work, normal, not contradictory); and, most importantly, how you were before any current episode, because a depression or anxiety can temporarily make anyone seem like a different person.",
    treatment:
      "The assessment is the treatment's first act: it fits the plan to you. Your tendencies predict how you will respond to medicines: the sensitive among us experience and report more side effects; the restless abandon regimens, which other illnesses to watch for, and how the doctor should explain things so you stay the course. Being understood in this way also builds the working relationship: people stay in treatment when they feel understood rather than labelled. And where a personality disorder is present, its real treatment is psychological growth: medicines only assist.",
    selfHelp: [
      "Tell the doctor what you were like before the illness: childhood, the school years, your last well self; that baseline protects you from being mislabelled by a temporary episode.",
      "Bring the family's memory: a relative who has known you across the years holds the account the doctor needs, and your two versions together are stronger than either.",
      "Describe yourself across settings honestly: home, work, community, worship; the differences are information, not contradiction.",
      "Ask how your tendencies might affect your medicines: the side-effect discussion and the regimen can be tailored to you before the first tablet.",
      "Expect character to grow: goals, self-understanding and ways of relating mature with insight and experience; that layer responds to work, and it is where treatment acts.",
      "Refuse the label: you are a person with a pattern, not a \"type\". Ask that the plan be discussed with you, not applied to you.",
    ],
    whenToSeekHelp: [
      "An episode of depression or anxiety making you feel like \"a different person\". Ask for the personality read before the episode is mistaken for your personality.",
      "Medicines repeatedly stopped over side effects: a trait-informed prescribing conversation may solve what repeated drug changes have not.",
      "Your own account and your family's disagree strongly: a structured read across settings resolves what arguing cannot.",
      "A \"difficult\" or \"personality problem\" note in your file that no one ever actually assessed: ask for the formulation, in words you understand.",
      "Health worries that have been yours since youth, flaring under stress. The pattern deserves assessment, not dismissal.",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages), for distress and guidance on where to be assessed",
      "District hospital psychiatry OPD under the DMHP: the clinical interview, the only instrument the method needs, at no test cost",
      "The treating team's family-interview session: ask for the visit that includes the premorbid history, in your family's own words",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs personality assessment; practice follows the Oxford chapter's clinical method (the interview as the primary instrument, the TCI a research instrument rarely deployed) absorbed into routine history-taking and case formulation in Indian clinical teaching rather than standardized into inventories.",
    systemContext: "The Indian clinic is natively longitudinal and informant-rich: the joint family holds the premorbid history the method demands (what was he like as a boy, before the marriage, at his last job) and the multi-informant OPD encounter delivers what Western practice must construct deliberately; the discipline is collection (deliberate, separate, the patient's own words and then the family's) and documentation, so the baseline survives the consultation.",
    programmeContext: "The district psychiatric OPD and the DMHP tier deliver the assessment at zero marginal cost: the clinical interview is the cheapest instrument in psychiatry; the TCI sits in academic research use; the chapter's own verdict (clinical assessment suffices) licenses the interview-based approach as the Indian norm rather than a compromise, and the trait-informed prescribing habits (once-daily dosing, family-supervised medication, the side-effect framing) already latent in Indian practice are made explicit rather than invented.",
    costConsiderations: "Approx 2026: the clinical method costs professional time only; no instruments, no licences, no scoring; the TCI's deployments sit in research settings; the expensive failure is the unread personality: the regimen abandoned on an unanticipated side effect, the \"difficult patient\" label replacing the formulation, the personality disorder diagnosed by extremity because no one asked about the range.",
    culturalConsiderations: "Context specificity across Indian settings: the person muted at home, expansive at work, submissive before elders and commanding with juniors is one personality in several situations; the chapter's situation-dependence made Indian; assess across the settings before concluding. Character maturation runs on Indian collectivist scaffolding (family duty, occupational role) shaping the expression of self-directedness and cooperativeness: assess against the person's own developmental path, not Western independence norms. The trait-state disambiguation in somatic presentations is the examination room's daily version: \"he has always worried about his health since his twenties\" versus \"the gas started after the job loss\".",
    patientCounselling: [
      "The premorbid script: \"To understand this illness I need to know the person it happened to; what were you like as a boy, before the marriage, at your last job? I ask everyone, and it changes what I do next.\"",
      "The childhood script: \"The present episode colours everything; your premorbid self tells me which parts are you and which are the illness, and how you are likely to recover.\"",
      "The context script: \"People show different sides at home, at work, at the temple. That is situation-dependence, not contradiction; I need all of them, and your family's account alongside yours.\"",
      "The change script: \"Character (your goals, self-understanding and ways of relating) can mature through insight and experience; temperament, the emotional biases, shifts more slowly; treatment works on the first and respects the second.\"",
      "The prescription script: \"Your own temperament shapes how medicines suit you; the sensitive need the side-effects discussed earlier, the restless need a simpler regimen; the prescription is fitted to you, not just to your diagnosis.\"",
      "The anti-label script: \"You are not a diagnosis or a type; this assessment maps how you adapt, so the treatment fits you; nobody here is reduced to a label.\"",
    ],
  },
  decisionPath: {
    title: "Reading the person in the live clinical pathway",
    nodes: [
      {
        id: "start",
        question: "Every patient carries a personality, and the read will shape the treatment, the differential or the alliance. First question: is the present state clean enough to read the person?",
        branches: [
          { label: "An episode is active: emotion, thought and behaviour state-modified", next: "premorbid-gate" },
          { label: "No active episode: the person can be read now", next: "interview-gate" },
          { label: "Standardized trait data requested (research or quantified follow-up)", next: "instrument-path" },
        ],
      },
      {
        id: "premorbid-gate",
        question: "The state contaminates the read: the longitudinal principle applies. Who holds the baseline?",
        branches: [
          { label: "Family or informants available (the Indian default)", next: "informant-path" },
          { label: "The patient alone: no informant reachable", next: "baseline-path" },
        ],
      },
      {
        id: "informant-path",
        question: "The multi-informant premorbid history.",
        recommendation: "Collect deliberately, separately: the patient's own words first, then the family's; what was he like as a boy, before the marriage, at his last job. The joint family's memory delivers the longitudinal assessment the method demands; the context-splits it reports (muted at home, expansive at work, submissive before elders) are situation-dependence, not inconsistency: assess across the settings before concluding. The premorbid personality documented as the baseline for the current episode's treatment and every future one.",
      },
      {
        id: "baseline-path",
        question: "The patient holds the baseline alone.",
        recommendation: "Ask directly what the person was like before the episode (childhood temperament, the school years, the last well period) and apply the range-not-fixed logic: good days and bad days, rough spots under stress, the range the person varies within; the pattern of variability is the configuration, and the state is subtracted from it. Where the state is severe, defer the read until recovery and record the deferral honestly rather than diagnosing a personality through a depression.",
      },
      {
        id: "interview-gate",
        question: "The read begins. The history and mental state examination are the instruments. What is attended to?",
        branches: [
          { label: "Personality items surface spontaneously in the narrative", next: "spontaneous-path" },
          { label: "The history closes with high-yield gaps", next: "review-path" },
        ],
      },
      {
        id: "spontaneous-path",
        question: "Traits emerging in the patient's own narrative.",
        recommendation: "Do not interrupt with standardized questions: the spontaneously surfaced items are the best personality data the interview yields. Attend to general appearance, expressions and behaviour; to the significance of what is said and how it is said; ask brief clarifying questions only. The construct-understanding corollary governs throughout: fixed questions asked regardless of interview opportunities mean the basic constructs are not understood.",
      },
      {
        id: "review-path",
        question: "The high-yield items that did not surface.",
        recommendation: "A final review covering only the gaps: the four temperament dimensions (harm avoidance, novelty seeking, reward dependence, persistence) and the three character dimensions (self-directedness, cooperativeness, self-transcendence), read across the five situations of life (material, social, mental/spiritual), never a fixed battery. The read then feeds the three payoffs: comorbidity anticipation, trait-informed treatment planning, and the alliance the assessment itself builds; no one reduced to a label.",
      },
      {
        id: "instrument-path",
        question: "Standardized quantification requested.",
        recommendation: "The Temperament and Character Inventory (the seven dimensions, four temperament and three character) serves research and quantified follow-up; Indian clinical practice rarely deploys it, and the chapter's own verdict (clinical assessment suffices) licenses the interview-based approach; the test supplements research, not routine care. The corollary restated before the inventory is opened: if its questions are being run regardless of what the interview has already yielded, the basic constructs are not understood.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading the personality through the episode",
      why: "The current state (a depression, an anxiety state) modifies emotion, thought and behaviour; the personality read at a single cross-sectional interview describes the illness, and treatable episodes acquire permanent \"trait\" labels.",
      correction: "The premorbid question, every time: what was the person like before, as a child, before the illness, at the last well period; the baseline sought in the past and documented for the future.",
    },
    {
      mistake: "Diagnosing personality disorder by extremity",
      why: "Extreme traits are intuitive but not diagnostic: marked harm avoidance or novelty seeking without dysfunction is a style, and the extremity habit mislabels intense people as disordered.",
      correction: "The inflexibility criterion: disorder is the loss of the adaptive range; the traits that once varied with context becoming rigid, applied everywhere, causing distress and dysfunction; extremity alone never makes the diagnosis.",
    },
    {
      mistake: "Running the questionnaire instead of the interview",
      why: "Standardized questions asked regardless of interview opportunities signal that the basic constructs are not understood, and the fixed schedule interrupts the spontaneous narrative that carries the best data.",
      correction: "The interview-first method: items allowed to surface spontaneously, brief clarifying questions only, and a final review covering the high-yield items that did not surface; nothing more.",
    },
    {
      mistake: "Concluding from one context",
      why: "The person differs across situations: a date, work, church; a single-setting read mistakes situation-dependence for the whole person, and the home interview alone misreads the person who commands at work and submits at home.",
      correction: "Context-specified assessment: the psychosocial context named (the date, the workplace, the temple), the five situations of life as the frame, and the cross-setting account collected before any trait is concluded.",
    },
    {
      mistake: "Reducing the person to a label",
      why: "\"No one likes to be reduced to a case or a label\": the label loses the alliance the treatment needed, and the systematic exploration of uniqueness is replaced by a word.",
      correction: "The anti-label discipline: the assessment explores the mystery of uniqueness systematically; motivation understood, reactions predicted, the person fitted to the treatment rather than filed under it.",
    },
    {
      mistake: "Prescribing without the personality read",
      why: "Traits predict much of the variability in antidepressant response, whereas depressive symptoms do not; the prescription written for the diagnosis alone meets the harm-avoidant patient's side-effect reports and the novelty-seeking patient's abandonment unprepared.",
      correction: "Trait-informed planning: the side-effect discussion held earlier for the sensitive, the regimen simplified for the restless, the family engaged for the approval-dependent, the character strengths recruited; the person, not merely the diagnosis, in the plan.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define personality (the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment) and unpack all four words: dynamic, psychobiological, unique, internal-and-external.",
        "Why is inflexibility, not extremity, the marker of personality disorder, and what does \"psychobiological\" imply for the treatment of personality disorder?",
        "The four temperament and three character dimensions of the TCI, one clinical descriptor each, and the heritability difference between the two layers.",
        "The chapter's position on psychometric testing in personality assessment, with its corollary about standardized questions asked regardless of interview opportunities.",
        "The prediction utilities: comorbidity (with the chapter's antisocial-personality example) and treatment response, and what the interview itself contributes (non-verbal cues, the how as well as the what).",
      ],
      practical: [
        "Demonstrate personality assessment within the routine history and mental state examination: attend to general appearance, expressions and behaviour, to the significance of what is said and how it is said, and close with a review of the high-yield items that did not surface spontaneously.",
        "Take a premorbid personality history from an informant: \"What was he like as a boy? Before the marriage? At his last job?\": collected deliberately and separately, and present it as the trait-state differential.",
      ],
      longAnswer: [
        "Personality assessment in clinical practice: the definition unpacked, temperament and character, the clinical method (the history and mental state examination as instruments, the longitudinal principle, context specification), and the predictive utilities.",
        "\"Psychobiological\" and its consequences: why the treatment of personality disorder requires psychological growth with medication only adjunctive, and how personality assessment informs the treatment of the disorders it accompanies.",
      ],
    },
    neetPg: {
      highYield: [
        "THE DEFINITION: personality is the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment; every word clinical.",
        "THE DISORDER MARKER: inflexibility (the loss of the adaptive range), NOT extremity; everyone has a range; the pattern of variability IS the person's configuration.",
        "THE TREATMENT IMPLICATION: \"psychobiological\"; personality-disorder treatment requires psychological growth; medication is an adjunct, never the engine.",
        "TEMPERAMENT (4 dimensions, moderately heritable, moderately stable): harm avoidance (inhibition, worry, pessimism versus confidence, optimism), novelty seeking (exploration versus rigidity and stoicism), reward dependence (social attachment and approval versus detachment), persistence (determination and ambition versus underachievement).",
        "CHARACTER (3 dimensions, weakly heritable, maturing through insight): self-directedness (resourcefulness, purpose, responsibility versus blaming, aimlessness), cooperativeness (acceptance, empathy, helpfulness versus intolerance, revenge), self-transcendence (self-forgetful participation versus self-centredness); low self-directedness and cooperativeness marking PD risk across diagnoses.",
        "THE MONOAMINE PAIRS (model, not measurement): harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline.",
        "THE PREMORBID QUESTION: \"What was he like before the depression?\": the cheapest differential instrument in psychiatry; the childhood temperament disambiguating the state-modified presentation.",
        "THE COMORBIDITY EXAMPLE: antisocial personality predicts more substance abuse and LESS Parkinson's disease; the assessment-multiplier.",
        "THE RESPONSE PREDICTOR: personality traits predict much of the variability in antidepressant response; depressive symptoms do not.",
        "THE NO-TEST POSITION: personality can be well assessed clinically without psychometric testing; non-verbal cues, the significance of what is said and how it is said; the corollary: standardized questions regardless of interview opportunities = inadequate construct understanding.",
      ],
      pyqConcepts: [
        "The temperament-character distinction: the single most examined line in this territory (the heritability-stability-maturation contrast between the two layers).",
        "The TCI dimension lists: four temperament plus three character, each with a one-line clinical descriptor.",
        "The inflexibility-not-extremity criterion: the personality-disorder definitional question.",
        "The premorbid-personality question: the trait-versus-state staple of vivas and clinical stations alike.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 46-year-old mill supervisor is referred with six months of low mood and a letter reading \"dependent traits?\": repeated telephone calls to the physician, the wife accompanying every errand, weeping at minor setbacks; interviewed separately, the wife describes a decisive, sociable man who organized the temple festival for a decade and \"never took a day's worry\", and the son dates the clinging to the insomnia and weight loss: the premorbid question separates state from trait, the episode is treated as an episode, the baseline documented, and no personality label survives the recovery; the teaching: the current state modifies emotion, thought and behaviour, and personality read through an active depression reads the depression.",
        "A 34-year-old schoolteacher is referred as \"treatment-refractory depression\" after abandoning three antidepressant regimens in two years, each within weeks, each with a list of side effects; her brother volunteers that \"she has always worried about her health since her girlhood (even the school van running late would upset her for the day\", while her employment and childcare continued through the episodes: the read) high harm avoidance on an intact character substrate; redirects the plan from drug escalation to prescribing-conversation redesign (the side-effect discussion held earlier and more explicitly, once-daily dosing, the husband engaged as supervisor, fixed early reviews), and the fourth regimen holds: the teaching: traits predict much of the variability in antidepressant response where symptoms do not, and the person, not merely the episode, determines the treatment course.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Temperament = moderately heritable, moderately stable biases in emotional responses; character = weakly heritable self-concept and goals, maturing through insight.",
        "TCI temperament dimensions: harm avoidance, novelty seeking, reward dependence, persistence.",
        "TCI character dimensions: self-directedness, cooperativeness, self-transcendence.",
        "Harm avoidance correlates with serotonin; novelty seeking with dopamine; reward dependence with noradrenaline: the framework's model layer.",
        "Personality can be well assessed clinically without psychometric testing: the interview is the primary instrument.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The premorbid question is the cheapest differential instrument in psychiatry, and the Indian joint family holds the answer: collect it deliberately, separately, in the patient's own words and the family's, and document it as the baseline for every future episode.",
        "The prescribing conversation's hidden variable made explicit: the harm-avoidant patient reports every side effect, the novelty-seeking patient abandons regimens; the person, not merely the diagnosis, belongs in the drug choice and the framing.",
        "The anti-label discipline is clinical, not sentimental: \"no one likes to be reduced to a case or a label\". The assessment that explores uniqueness systematically is the same assessment that builds the alliance the adherence runs on.",
        "The honest model discipline: the temperament-monoamine associations are the framework's model layer, not measurement; teach them, and never let a trainee present them as neurochemical fact.",
        "Context-specified assessment is the Indian clinic's native skill: the person muted at home, expansive at work, submissive before elders and commanding with juniors is one personality in several situations; assess across the settings before concluding, and against the person's own developmental path, not Western independence norms.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The man the depression impersonated",
      presentation: "Six months of clinging, reassurance-seeking and weeping, and the man the family remembered had never once asked for help.",
      initialPresentation: "A 46-year-old mill supervisor was brought to the district psychiatric OPD by his wife and elder son with six months of low mood, insomnia and weight loss, and a referring physician's letter reading \"dependent traits?\": repeated telephone calls to the physician's chamber, the wife accompanying every errand, weeping at minor setbacks.",
      history: "No psychiatric history. The premorbid question, asked of the wife separately: what was he like before this began? Returned a decisive, sociable man who ran the household accounts, settled the neighbours' disputes and had organized the temple festival for a decade: \"he never took a day's worry in his life.\" The son dated the clinging and the calls to the insomnia and the weight loss, not before. No substance use; no medical comorbidity.",
      examination: "Psychomotor retardation; pessimistic ruminations and self-reproach (\"I have become a burden\") expressed with the observation that the thoughts felt foreign: \"thinking was never my trouble.\" No first-rank symptoms, no thought disorder. Appearance and behaviour read against the informants' baseline: the diminished range and postural slump noted as the episode's non-verbal signature, not the man's.",
      diagnosis: "Moderate depressive episode; the \"dependence\" read as state-modified presentation: the episode wearing the person's clothes, not a dependent personality, which the premorbid record contradicted on every informant's account.",
      management: "The premorbid personality documented in the notes as the baseline for this and every future episode; the family engaged as the informants they already were, their accounts recorded separately; antidepressant treatment begun with the routine side-effect framing (no harm-avoidant history to anticipate, the prescribing conversation proportionate to the man described); psychoeducation for the household: the man they knew would resurface as the episode lifted; fixed reviews.",
      outcome: "Over the following weeks the episode lifted; the repeated calls, the accompaniment and the weeping receded with it. At three months the wife's summary: \"he is again the man who organizes the festival.\" The \"dependent traits?\" of the referral letter had described the illness, not the person, and the documented premorbid baseline now protects him from the same misread at every future presentation.",
      teachingPoints: [
        "The premorbid question is the cheapest differential instrument in psychiatry: one question. What was he like before? Separated a treatable episode from an unchangeable \"personality\".",
        "State contamination: the current episode modifies emotion, thought and behaviour; personality read through an active depression reads the depression.",
        "Informants separated: the patient's account, then the family's; the joint family's multi-informant memory delivering the longitudinal assessment the method demands.",
        "The baseline documents the future: the premorbid personality recorded now is the reference point for every subsequent episode.",
      ],
    },
    {
      title: "The prescription the temperament redesigned",
      presentation: "Three antidepressants abandoned in two years, each within weeks: the side effects were real, and so was the pattern.",
      initialPresentation: "A 34-year-old schoolteacher with recurrent depressive episodes was referred to the district hospital as \"treatment-refractory\" after abandoning three antidepressant regimens in two years, each within days to weeks of starting, each with a list of side effects: nausea, \"tingling\", \"heaviness of the head\", \"the tablet did not agree with me\".",
      history: "Depressive episodes since her late twenties, currently moderate. The brother, the accompanying informant, volunteered the longitudinal line unprompted: \"She has always worried about her health since her girlhood, even as a child, the school van running ten minutes late would upset her for the day.\" No manic episodes; no substance use. Employment and childcare continued through the episodes: the character read: responsible, purposeful, holding her post and her household.",
      examination: "Between-episode personality, corroborated at the current interview: high harm avoidance; anticipatory worry, pessimistic first reads of bodily sensations, sensitivity to criticism; self-directedness intact (the post held, the children raised through the episodes); cooperativeness high by every account. The read: not refractory illness but harm-avoidant trait physiology amplifying early side-effect experience and driving prompt abandonment; the trait generating the \"refractoriness\".",
      diagnosis: "Recurrent depressive disorder, currently moderate, with treatment non-adherence on a harm-avoidant temperament substrate: the trait, not the illness, manufacturing the apparent resistance.",
      management: "The prescribing conversation redesigned rather than the drug escalated: the side-effect discussion held earlier and more explicitly; the first week's symptoms named and their transience framed; once-daily dosing; the husband engaged as the medication supervisor with the couple's consent; fixed review dates through the anticipated rough patch of the first fortnight; and the formulation shared with the patient herself (her sensitivity understood as temperament, not danger) the assessment building the alliance the adherence needed.",
      outcome: "The fourth regimen held: the anticipated side effects were reported at the first review and tolerated with the framing in place; the episode remitted over the following months. At review, the patient's own words: \"Knowing that the tablet's first days are supposed to feel strange was knowing I was not being poisoned.\" The \"refractory\" label was retired.",
      teachingPoints: [
        "Personality traits predict much of the variability in antidepressant response, whereas depressive symptoms do not: the person, not merely the episode, determines the treatment course.",
        "The harm-avoidant patient reports every side effect; the novelty-seeking patient abandons regimens: the prescribing conversation adjusted before the first tablet, not after the third failure.",
        "The Indian delivery is already latent: once-daily dosing, family-supervised medication, the side-effect framing. The method makes an existing habit deliberate.",
        "The assessment is the alliance: the patient who feels her predictable reactions understood stays in treatment longer than the patient who feels judged \"non-compliant\".",
      ],
    },
  ],
  clinicalPearls: [
    "Personality is the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment: every word clinical, none decorative.",
    "Inflexibility, not extremity, marks personality disorder: everyone has a range of thoughts, feelings and behaviours, and the pattern of variability IS the person's configuration. Its loss is the pathology.",
    "\"Psychobiological\" is the treatment implication: personality-disorder treatment requires growth in psychological self-understanding, with medication only an adjunct.",
    "Temperament: four moderately heritable, moderately stable biases; harm avoidance, novelty seeking, reward dependence, persistence. Character: three weakly heritable dimensions maturing through insight; self-directedness, cooperativeness, self-transcendence.",
    "The monoamine pairs (harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline) are the framework's model layer. Learn them, and never present them as measurement.",
    "The cheapest differential instrument in psychiatry: \"What was he like before the depression?\": the premorbid question separating trait from state in one sentence.",
    "Personality can be well assessed clinically without psychometric testing, within routine history-taking and mental state examination, alert to non-verbal cues and to the significance of what is said and how it is said.",
    "If you must ask standardized questions regardless of interview opportunities, you do not understand the basic constructs: items surface spontaneously; the final review covers the gaps only.",
    "Traits predict much of the variability in antidepressant response; depressive symptoms do not: the prescribing conversation's hidden variable made explicit.",
    "Antisocial personality predicts more substance abuse and less Parkinson's disease: personality assessment multiplies assessment: knowing the person tells you which other disorders to expect, and which not to.",
    "The person differs across contexts: a date, work, church; home, factory, temple: only context-specified assessment is adequate, and the cross-setting differences are data, not dishonesty.",
    "The assessment is the alliance: patients feel understood when their motivation and predictable reactions are understood, and \"no one likes to be reduced to a case or a label\".",
  ],
  highYieldSummary: [
    "Definition: personality is the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment. DYNAMIC: constantly changing and adapting, not a fixed set of traits; everyone has a range of thoughts, feelings and behaviours, varies within it and occasionally moves beyond it in response to internal and external events; everyone has rough spots that surface under stress, good days and bad days; the pattern of variability IS the person's configuration, and INFLEXIBILITY (the loss of the adaptive range) is the marker of personality disorder. PSYCHOBIOLOGICAL: influenced by biology and psychology both, hence personality-disorder treatment requires growth in psychological self-understanding, medication only an adjunct. UNIQUE: general developmental rules followed while each configuration remains individual; complex adaptive systems. INTERNAL-AND-EXTERNAL: the person interacts with their own internal milieu and their external situation, thinking and feeling differently under stress than when calm, so traits differ across contexts (a date, work, church) and only context-specified assessment is adequate.",
    "Temperament: the first quantitative layer: biases in emotional responses, assessable along four moderately heritable, moderately stable dimensions. HARM AVOIDANCE: the tendency toward inhibition, worry and pessimism versus confidence and optimism, varying moderately across situations and moderately heritable. NOVELTY SEEKING: exploratory activity versus rigidity and stoicism. REWARD DEPENDENCE: social attachment and dependence on approval versus detachment. PERSISTENCE: determination and ambition versus underachievement. The temperament dimensions are correlated with the monoamine systems in the framework's psychobiological wing (harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline) held as model, not measurement.",
    "Character: the second quantitative layer: the self-concept and goals dimension-set, weakly heritable, continuing to develop across life, maturing through insight and self-understanding. SELF-DIRECTEDNESS: resourcefulness, purpose and responsibility versus blaming and aimlessness. COOPERATIVENESS: acceptance, empathy and helpfulness versus intolerance and revenge. SELF-TRANSCENDENCE: self-forgetful participation in the larger whole versus self-centredness. The personality-disorder relation lives largely here: low self-directedness and cooperativeness mark PD risk across diagnoses, and the treatment of personality disorder works precisely by growing the character layer.",
    "The clinical method: personality can be well assessed clinically, WITHOUT psychometric testing (simple and brief, within routine history-taking and mental state examination) provided the clinician is alert to non-verbal cues (general appearance, expressions, behaviour) and to the significance of what is said and how it is said, only brief clarifying questions being needed. Personality items should surface spontaneously in the narrative; the standardized-question fallacy is the chapter's warning: if you must run fixed questions regardless of interview opportunities, you do not understand the basic constructs adequately. The disciplined close: a final review covering the high-yield items that did not surface, and nothing more.",
    "The longitudinal and context principles: personality develops over time in response to changing internal and external environments, so ask what the patient was like as a child whenever the current state (a depression, an anxiety state) modifies emotion, thought and behaviour. The premorbid personality disambiguates the state; traits are ranges, not fixed points, with rough spots surfacing under stress. Context specification: the person differs across situations (some traits strong and pervasive, others situation-dependent, prior and anticipated events and personal goals modifying outlook) with the five situations of life (material, possessions and practical tasks; social; and the mental/spiritual domain) framing where the read happens and which situation-class most engages the person.",
    "The prediction utilities: comorbidity; personality predicts which other disorders to expect and which not: antisocial personality predicts more substance abuse and less Parkinson's disease, the assessment-multiplier. Treatment response: people differ markedly in the treatments they respond to and comply with, and personality traits predict much of the variability in antidepressant response, whereas depressive symptoms do not: the harm-avoidant patient's side-effect sensitivity and the novelty-seeking patient's regimen abandonment anticipated in the prescribing conversation. Alliance: the assessment itself, the sharing of uniquely personal information, establishes mutual respect: patients feel understood when the psychiatrist understands their motivation and can predict their reactions, while the anti-label discipline holds throughout: no one likes to be reduced to a case or a label; the assessment explores the mystery of uniqueness systematically, without reduction.",
    "The Indian layer: the joint family's multi-informant memory (what was he like as a boy, before the marriage, at his last job?) is Indian psychiatry's gift to this method: collect it deliberately, separately, in the patient's own words and the family's. Context specificity across Indian settings: the person muted at home, expansive at work, submissive before elders and commanding with juniors is one personality in several situations; assess across the settings before concluding. The trait-state disambiguation in somatic presentations: \"he has always worried about his health since his twenties\" versus \"the gas started after the job loss\". Character maturation on Indian collectivist scaffolding (family duty, occupational role): assessed against the person's own developmental path, not Western independence norms. The trait-informed Indian prescribing conversation (once-daily dosing, family-supervised medication, the side-effect framing) is latent already. The method makes it explicit; and the TCI, in research use only, is no loss: the chapter's own verdict is that clinical assessment suffices.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "persa-quiz-1",
      question: "Within the definition of personality as \"the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment\", the word \"dynamic\" implies that:",
      options: [
        "Personality is fixed at birth",
        "Personality constantly changes and adapts in response to experience — and inflexibility is the indicator of personality disorder",
        "Personality is purely theatrical",
        "Only the external environment matters",
      ],
      correctIndex: 1,
      explanation: "The anti-fixed-traits position: everyone has a range of functioning, and the pattern of variability is the person's configuration — its loss, not its extremity, is the pathological direction.",
      afterSectionId: "mechanism",
    },
    {
      id: "persa-quiz-2",
      question: "The distinction between temperament and character in this framework is:",
      options: [
        "Temperament is heritable emotional biasing (harm avoidance, novelty seeking, reward dependence, persistence); character is the maturing self-concept (self-directedness, cooperativeness, self-transcendence)",
        "Temperament is culture; character is biology",
        "Both are fixed at birth",
        "Neither is assessable clinically",
      ],
      correctIndex: 0,
      explanation: "Moderately heritable, moderately stable biases versus weakly heritable dimensions maturing through insight — the two-layer quantitative structure, with the personality-disorder relation living largely in the character tier.",
      afterSectionId: "symptoms",
    },
    {
      id: "persa-quiz-3",
      question: "The chapter's position on psychometric testing in clinical personality assessment is:",
      options: [
        "Testing is mandatory before any clinical judgement",
        "Personality can be well assessed clinically without psychometric testing — within routine history-taking and mental state examination, alert to non-verbal cues and to what is said and how",
        "Tests should replace interviews",
        "Personality cannot be assessed at all",
      ],
      correctIndex: 1,
      explanation: "The clinician-liberating position — with the corollary that rigid standardized questioning, run regardless of interview opportunities, indicates inadequate construct understanding.",
      afterSectionId: "diagnosis",
    },
    {
      id: "persa-quiz-4",
      question: "When assessing personality in a currently depressed patient, the key disambiguating information is:",
      options: [
        "The current symptom count",
        "The premorbid and childhood personality — what the person was like before the state modified emotions, thoughts and behaviour",
        "The family's income",
        "The medication list",
      ],
      correctIndex: 1,
      explanation: "The longitudinal principle: personality traits vary within a range across time and context; the episode distorts the present, so the baseline is sought in the past.",
      afterSectionId: "differential",
    },
    {
      id: "persa-quiz-5",
      question: "In the treatment-planning domain, the chapter cites evidence that:",
      options: [
        "Symptoms predict antidepressant response better than traits",
        "Personality traits predict much of the variability in antidepressant response, whereas the symptoms of depression do not",
        "Neither predicts anything",
        "Only dose predicts response",
      ],
      correctIndex: 1,
      explanation: "The person, not merely the episode, determines the treatment course — the prescribing conversation's hidden variable made explicit.",
      afterSectionId: "management",
    },
    {
      id: "persa-quiz-6",
      question: "In the Indian clinic, the patient who is muted at home, expansive at work, submissive before elders and commanding with juniors is best read as:",
      options: [
        "A dissociative presentation requiring four separate assessments",
        "One personality expressed across situations — situation-dependence, requiring assessment across the settings before concluding",
        "Inconsistent reporting, so no personality read is possible",
        "Four separate personality disorders",
      ],
      correctIndex: 1,
      explanation: "The chapter's context principle made Indian: the person differs across situations — a date, work, church; home, factory, temple — and only context-specified assessment is adequate.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the definition of personality and unpack all four definition-words' clinical meaning.", answer: "DEFINITION: personality is the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment. DYNAMIC: constantly changing and adapting to experience, not a fixed set of traits; everyone has a range of thoughts, feelings and behaviours, varies within it and occasionally moves beyond it in response to internal and external events; everyone has rough spots that surface under stress, good days and bad days; the pattern of variability IS the person's configuration, and INFLEXIBILITY (the loss of this adaptive range) is the marker of personality disorder. PSYCHOBIOLOGICAL: influenced by both biology and psychology, hence treatment of personality disorder requires growth in psychological self-understanding, with medication only an adjunct. UNIQUE: each person's pattern follows general developmental rules (complex adaptive systems) while remaining individually configured. INTERNAL-AND-EXTERNAL: the person interacts with their own internal milieu and their external situation, thinking and feeling differently under stress than when calm and encouraged, so traits differ across contexts (a date, work, church) and only context-specified assessment is adequate.", topic: "Definition" },
    { question: "Why is inflexibility, not extremity, the disorder marker, and what does \"psychobiological\" imply for the treatment of personality disorder?", answer: "INFLEXIBILITY: personality is a dynamic organization; everyone has a range, and the pattern of variability is itself the person's configuration; personality disorder is the loss of that adaptive range, the traits that once varied with context becoming rigid and applied everywhere, causing distress and dysfunction. Extremity is a separate dimension: intense traits without rigidity or dysfunction are a style, not a disorder, which is why the criterion redirects diagnosis from \"extreme personality\" to \"rigid personality\". PSYCHOBIOLOGICAL: the systems are influenced by both biology and psychology; therefore the treatment of personality disorder requires growth in psychological self-understanding (insight maturing the character layer), with medication only an adjunct; prescribing alone expects the biology to fix what the biography maintains.", topic: "Disorder marker" },
    { question: "Name the four temperament and three character dimensions of the TCI, one clinical descriptor each.", answer: "TEMPERAMENT (moderately heritable, moderately stable biases in emotional responses): HARM AVOIDANCE; inhibition, worry and pessimism versus confidence and optimism; NOVELTY SEEKING: exploratory activity versus rigidity and stoicism; REWARD DEPENDENCE: social attachment and dependence on approval versus detachment; PERSISTENCE: determination and ambition versus underachievement. CHARACTER (weakly heritable, maturing through insight): SELF-DIRECTEDNESS; resourcefulness, purpose and responsibility versus blaming and aimlessness; COOPERATIVENESS: acceptance, empathy and helpfulness versus intolerance and revenge; SELF-TRANSCENDENCE: self-forgetful participation in the larger whole versus self-centredness. The two heritabilities differ, and the personality-disorder relation lives largely in the character tier: low self-directedness and cooperativeness mark PD risk across diagnoses.", topic: "TCI dimensions" },
    { question: "State the longitudinal principle: the premorbid-childhood question and the range-not-fixed logic.", answer: "THE PRINCIPLE: personality develops over time in response to changing internal and external environments, so the assessment is longitudinal. Ask what the patient was like as a child and before the current illness, because the current state (a depression, an anxiety state) modifies emotion, thought and behaviour; the premorbid personality disambiguates the state, telling the clinician which parts are the person and which are the episode, and how the person is likely to recover. THE RANGE: everyone has a range of thoughts, feelings and behaviours, varying within it and occasionally moving beyond it in response to internal and external events; everyone has rough spots that surface under stress, good days and bad days: traits are ranges, not fixed points, and the pattern of variability is itself the person's configuration. THE INDIAN DELIVERY: the joint family's multi-informant memory (what was he like as a boy, before the marriage, at his last job) collected deliberately, separately, in the patient's own words and the family's.", topic: "Longitudinal principle" },
    { question: "What does the interview itself contribute to personality assessment: the non-verbal cues, and the how as well as the what?", answer: "The chapter's position: personality can be well assessed clinically, without psychometric testing; simple and brief, as part of routine history-taking and mental state examination. The interview's contribution is threefold. NON-VERBAL CUES: general appearance, expressions and behaviour; the layer the referral letter never carries. THE HOW AS WELL AS THE WHAT: the significance of what is said and how it is said (manner, hesitations, warmth, contempt) only brief clarifying questions being needed. SPONTANEOUS SURFACING: personality items should surface in the patient's own narrative; the final review covers the high-yield items that did not, and nothing more. The corollary disciplines the whole method: if you must ask standardized questions regardless of interview opportunities, you do not understand the basic constructs adequately.", topic: "Clinical method" },
    { question: "Give the prediction utilities of personality assessment, with the chapter's examples.", answer: "COMORBIDITY: personality predicts which other disorders to expect, and which not: antisocial personality predicts more substance abuse and less Parkinson's disease (the Virkkunen-line studies the chapter cites); the assessment-multiplier: one good personality read multiplies the yield of every other assessment. TREATMENT RESPONSE: people differ markedly in the treatments they respond to and comply with, and personality traits predict much of the variability in antidepressant response, whereas depressive symptoms do not; the harm-avoidant patient's side-effect sensitivity, the novelty-seeking patient's regimen abandonment, anticipated in the prescribing conversation. ALLIANCE: the assessment itself, the sharing of uniquely personal information, establishes mutual respect; patients feel understood when the psychiatrist understands their motivation and can predict their reactions; and the anti-label discipline guards the gift: no one likes to be reduced to a case or a label.", topic: "Prediction utilities" },
    { question: "Why does context specification matter. The date/work/church principle and the five situations of life?", answer: "THE PRINCIPLE: personality is adaptation to a changing internal and external environment. The person differs across contexts (a date, work, church; home, factory, temple), some traits strong and pervasive, others situation-dependent, with prior and anticipated events and personal goals modifying outlook. Assessment that does not specify the psychosocial context is therefore not adequate. The cross-setting differences are data, not dishonesty. THE FIVE SITUATIONS OF LIFE supply the frame: material situations (possessions and practical tasks), social situations, and the mental/spiritual domain; people differing in which situation-class most engages them, so the read asks where the person lives most. THE INDIAN VERSION: the person muted at home, expansive at work, submissive before elders and commanding with juniors is one personality in several situations; assess across the settings before concluding.", topic: "Context specification" },
    { question: "Distinguish trait anxiety from state anxiety in a somatic presentation, using the note's Indian example.", answer: "THE DISTINCTION: temperament is the moderately stable emotional bias. The person's floor; the state is the episode's current modification of emotion, thought and behaviour: the person's weather. THE EXAMPLE: \"he has always worried about his health since his twenties\" is trait; harm avoidance reading the body's signals with pessimistic first interpretation, present across contexts and years; \"the gas started after the job loss\" is state: an anxiety episode with a date of onset and an identifiable stressor. THE CLINICAL CONSEQUENCE: the two are treated differently; the trait informs the prescribing conversation (earlier side-effect discussion, framing matched to the sensitive patient) and is managed longitudinally; the state is treated as the episode it is. Conflating them produces the two classic errors: treating a person as an illness, or dismissing an illness as \"just how he is\".", topic: "Trait versus state" },
  ],
  faqs: [
    { question: "Doesn't personality just mean \"difficult\"?", answer: "No: personality is the person's dynamic organization of emotional style, goals and values; their unique way of adapting. Difficult is one style; even \"agreeable\" is one. The assessment is of the person's pattern, not their compliance." },
    { question: "How is personality different from personality disorder?", answer: "Disorder is inflexibility: the loss of the adaptive range: the traits that once varied with context become rigid, applied everywhere, causing distress and dysfunction. The assessment watches for the range; the diagnosis finds its loss." },
    { question: "Can personality be measured with a test?", answer: "Yes (temperament and character inventories exist (the TCI among them)) but the clinical position is that the interview (history, mental state, non-verbal cues, the how of the what) assesses personality well without them; the test supplements research, not routine care." },
    { question: "Why do you ask what I was like as a child?", answer: "Because the current episode colours everything; the premorbid person, the childhood temperament, tells me which parts are you and which are the illness, and how you are likely to recover." },
    { question: "Will my personality change with treatment?", answer: "Character (your goals, self-understanding, ways of relating) can mature through insight and experience; that is its nature. Temperament, the emotional biases, shifts more slowly. Treatment of personality disorder works precisely by growing the character layer." },
    { question: "Why does knowing my personality help my depression treatment?", answer: "Because traits predict treatment response and compliance far better than symptoms do: the sensitive patient needs different framing, the novelty-seeker a simpler regimen, the harm-avoidant an earlier side-effect discussion. The prescription is fitted to the person." },
    { question: "Is the Temperament and Character Inventory used in Indian clinics?", answer: "Rarely: the TCI exists in Indian research use, but clinical practice deploys almost nothing of it, and the chapter's own verdict (clinical assessment suffices) licenses the interview-based approach as the Indian norm rather than a compromise." },
    { question: "My family describes me differently from how I see myself, who is right?", answer: "Both, probably: the person differs across situations (quiet at home, outgoing at work, reserved before elders) and that is situation-dependence, not contradiction. A context-specified assessment collects all the versions before concluding anything." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — ICD-10 personality-disorder definitions: the nosological interface the assessment's inflexibility criterion feeds" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 1.8.2 (Cloninger) — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Cloninger CR (1987) — A systematic method for clinical description and classification of personality variants (Arch Gen Psychiatry 44:573–88): the original tridimensional temperament model" },
      { source: "Cloninger CR, Svrakic DM, Przybeck TR (1993) — A psychobiological model of temperament and character (Arch Gen Psychiatry 50:975–90): the seven-factor TCI framework" },
      { source: "Sigvardsson S, Bohman M, Cloninger CR — the temperament heritability cross-fostering studies" },
      { source: "Virkkunen M et al. — the antisocial-personality/substance-abuse and CSF studies cited in the chapter's comorbidity example" },
    ],
    reviews: [
      { source: "Cloninger CR et al. — the Temperament and Character Inventory manuals: the instruments' own documentation" },
      { source: "Cloninger CR, Przybeck TR, Svrakic DM — the temperament-monoamine framework (the model layer)" },
      { source: "Cloninger CR et al. — the personality-antidepressant-response literature (as cited in the chapter)" },
      { source: "Livesley WJ, Jang KL, Vernon PA (1998) — Phenotypic and genetic structure of traits delineating personality disorder" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, for distress and guidance on where to be assessed" },
      { source: "The premorbid-question script — the one-minute instrument this course hands to every Indian clinician and family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what personality assessment is, why the doctor asks about your childhood, how your tendencies shape your treatment.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The definition unpacked, temperament versus character, the clinical method, the prediction utilities.",
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
      description: "Everything: the interview craft, the premorbid discipline, trait-informed prescribing, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definition unpacked, the two quantitative layers, the payoff map.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the definition with all four words clinical and name the seven TCI dimensions cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The assessment logic's engine: temperament, character, the read, and the monoamine model's honest grade.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the temperament and character pathways and state the monoamine pairs as model, not measurement." },
    { number: 3, title: "Clinical Practice", description: "The interview as instrument: the read, the premorbid question, context specification, trait-informed planning.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the clinical read inside a routine history and MSE, and close it with the high-yield review of the gaps only." },
    { number: 4, title: "Indian Context", description: "The joint-family informant gift, the cross-setting read, the somatic trait-state question, the decision path.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can collect the premorbid history separately in the patient's and the family's words, and deliver the trait-informed prescribing scripts." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the temperament-character question cold and recite the inflexibility criterion and the prediction utilities without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 1.8.2 (Cloninger) — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Cloninger CR — A systematic method for clinical description and classification of personality variants (Arch Gen Psychiatry 44:573–88): the original tridimensional temperament model", sourceType: "primary", year: "1987", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Cloninger CR, Svrakic DM, Przybeck TR — A psychobiological model of temperament and character (Arch Gen Psychiatry 50:975–90): the TCI framework", sourceType: "primary", year: "1993", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Cloninger CR et al. — the Temperament and Character Inventory manuals: the instruments' own documentation", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Cloninger CR, Przybeck TR, Svrakic DM — the temperament-monoamine framework (harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline): the model layer", sourceType: "review", year: "1990s", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Sigvardsson S, Bohman M, Cloninger CR — the temperament heritability studies (cross-fostering): the moderate heritability of the temperament dimensions", sourceType: "primary", year: "1970s–1980s", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Cloninger CR et al. — the personality-antidepressant-response literature (as cited in the chapter): traits predicting response variability", sourceType: "review", year: "1980s–1990s", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Virkkunen M et al. — the antisocial-personality/substance-abuse and CSF studies cited in the chapter's comorbidity example", sourceType: "primary", year: "1980s–1990s", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Livesley WJ, Jang KL, Vernon PA — Phenotypic and genetic structure of traits delineating personality disorder: the trait-structure companion finding", sourceType: "primary", year: "1998", dateReviewed: "2026-09-30" },
    { id: "S10", source: "WHO — ICD-10 personality-disorder definitions: the nosological interface", sourceType: "classification", year: "1992", dateReviewed: "2026-09-30" },
    { id: "S11", source: "The Indian tier — the joint-family informant practice pattern, the cross-setting read, the somatic trait-state disambiguation and the TCI's research-only Indian deployment; practice-pattern description from Indian clinical literature, context honestly labelled (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "Definition: personality is the dynamic organization within the individual of the psychobiological systems that modulate unique adaptation to a changing internal and external environment; dynamic (inflexibility, the loss of the adaptive range, marking personality disorder), psychobiological (treatment requiring psychological growth, medication adjunctive), unique (general rules, individual configuration), internal-and-external (context-specified assessment only).", grade: "established", sources: ["S1"] },
    { text: "Temperament: biases in emotional responses along four moderately heritable, moderately stable dimensions (harm avoidance, novelty seeking, reward dependence, persistence) the cross-fostering studies establishing the moderate heritability.", grade: "established", sources: ["S1", "S3", "S6"] },
    { text: "Character: the self-concept and goals layer (self-directedness, cooperativeness, self-transcendence) weakly heritable, continuing to develop across life, maturing through insight; the personality-disorder relation living largely here, low self-directedness and cooperativeness marking PD risk across diagnoses.", grade: "established", sources: ["S1", "S3", "S9"] },
    { text: "The clinical method: personality can be well assessed clinically without psychometric testing (within routine history-taking and mental state examination, alert to non-verbal cues and to the significance of what is said and how it is said) with the corollary that standardized questions asked regardless of interview opportunities signal inadequate construct understanding; items surface spontaneously, a final review covering the high-yield gaps.", grade: "established", sources: ["S1"] },
    { text: "The longitudinal principle: the childhood-premorbid personality disambiguates the state-modified presentation; traits are ranges, not fixed points, with rough spots surfacing under stress, good days and bad days, and the pattern of variability itself the person's configuration.", grade: "established", sources: ["S1"] },
    { text: "Context-specified assessment: the person differs across situations (a date, work, church), some traits strong and pervasive, others situation-dependent, prior and anticipated events and personal goals modifying outlook, with the five situations of life (material, social, mental/spiritual) framing the assessment context.", grade: "established", sources: ["S1"] },
    { text: "The comorbidity prediction: personality predicts which other disorders to expect and which not; the chapter's example being antisocial personality predicting more substance abuse and less Parkinson's disease.", grade: "supported", sources: ["S1", "S8"] },
    { text: "The treatment-response prediction: personality traits predict much of the variability in antidepressant response, whereas the symptoms of depression do not; people differing markedly in the treatments they respond to and comply with.", grade: "supported", sources: ["S1", "S7"] },
    { text: "The temperament-monoamine associations (harm avoidance-serotonin, novelty seeking-dopamine, reward dependence-noradrenaline) constitute the framework's psychobiological model layer, held as model, not measurement.", grade: "proposed", sources: ["S1", "S5"] },
    { text: "The treatment implication of \"psychobiological\": the treatment of personality disorder requires growth in psychological self-understanding, with medication only an adjunct. The character layer the treatment target, maturing through insight.", grade: "established", sources: ["S1", "S3"] },
    { text: "The alliance logic: the assessment itself (the sharing of uniquely personal information) establishes mutual respect, patients feeling understood when the psychiatrist understands their motivation and can predict their reactions; the anti-label discipline holding throughout: no one likes to be reduced to a case or a label.", grade: "established", sources: ["S1"] },
    { text: "The Indian tier: the joint family's multi-informant premorbid history collected deliberately and separately; context specificity across Indian settings (muted at home, expansive at work, submissive before elders, commanding with juniors); the somatic trait-state disambiguation (always-worried-since-the-twenties versus after-the-job-loss); character maturation assessed on Indian collectivist scaffolding against the person's own developmental path; the TCI in research use only: practice-pattern description from Indian clinical literature, context honestly labelled.", grade: "supported", sources: ["S1", "S11"] },
  ],
};
