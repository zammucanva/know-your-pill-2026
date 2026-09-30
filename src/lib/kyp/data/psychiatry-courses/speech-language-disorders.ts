import type { PsychiatryCourse } from "./types";

/**
 * SPEECH & LANGUAGE DISORDERS — THE CRITICAL AGE — canonical Psychiatry
 * course (migration batch 13, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/speech-language-disorders.md — untouched
 * foundation), re-researched against the lineages the note itself
 * cites (the Law prevalence reviews, the Bishop SLI and
 * Bishop–Norbury pragmatic-language work, the Conti-Ramsden &
 * Botting and Clegg longitudinal-outcome cohorts, Snowling's
 * phonological-processing and literacy line, the Johnson & Wintgens
 * and Cohan selective-mutism literature, the RCSLT service
 * frameworks) with per-claim provenance.
 *
 * Drug routes: none. No medication carries an evidence-backed role in
 * the developmental speech and language disorders themselves; the one
 * pharmacological footnote (fluoxetine in selective mutism — reported
 * but unreplicated success) is taught with its unreplicated status
 * and drugLinks stays empty, recorded honestly in contentGaps, never
 * invented.
 */
export const speechLanguageDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "speech-language-disorders",
  title: "Speech & Language Disorders",
  shortName: "Speech & Language",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Speech & Language Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Speech and language difficulties hide behind behaviour — treat what persists past age 5",

  summary:
    "Speech and language disorders in children span speech intelligibility, language and pragmatics, and often present first as behaviour or school problems. Difficulties still impairing communication after age 5 are significant and warrant prioritised intervention.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Outline typical speech and language development and the school-entry expectations — the five-year gate that makes the critical age clinical.",
    "Distinguish speech difficulties (cleft palate, dysarthria, phonological disorder, apraxia, stuttering) from language difficulties (vocabulary, word-finding, syntax) and social communication difficulties (pragmatics), with one bedside example each.",
    "Define specific language impairment, quote its 3–7% prevalence, and argue the strict-versus-liberal criteria trade-off honestly.",
    "Map the SLI–autism boundary at Pragmatic Language Impairment and state the practical rule: pragmatic impairment alone does not diagnose autism.",
    "Explain the bidirectional language-behaviour association — why the behaviour-referred child needs the language screen and the language-impaired child needs the behaviour watch.",
    "Diagnose selective mutism on its five elements, including the bilingual duration rule, and build its multi-modal treatment ladder.",
    "Apply the critical-age rule, the risk-versus-resilience stratification and the long-horizon plan to real children.",
    "Deliver the Indian rules: strongest-language assessment, hearing first, the parent-and-teacher-delivered programme, the RPwD certificate, the behaviour-gateway screen.",
  ],
  quickFacts: [
    { label: "The map", value: "Speech, language, pragmatics", detail: "Speech = intelligibility (phonology, dysarthria, cleft palate, apraxia, stuttering); language = vocabulary, word-finding, syntax; social communication = pragmatics, the use of language in conversation — three domains, one hiding place behind behaviour" },
    { label: "The prevalence pair", value: "24.6% broad, SLI 3–7%", detail: "Speech and language difficulties touch up to 24.6% of children by inclusive criteria (Law's reviews); specific language impairment 3–7% — and the tighter the discrepancy criteria, the fewer the cases" },
    { label: "The critical age", value: "After age 5", detail: "Difficulties still impairing communication after age 5 — school entry — are significant and warrant prioritised intervention; language is not a school subject but the medium of every school subject" },
    { label: "The dissociation", value: "Normal IQ, language years behind", detail: "SLI: language delayed or disordered out of proportion to otherwise normal non-verbal intelligence; heritable; phonological memory and processing deficits underpinning the vocabulary and syntax difficulties" },
    { label: "The mutism gate", value: "Talks at home, silent at school", detail: "Selective mutism ~0.75–0.8% of children, slightly more common in girls, onset typically 3–5 years; more than 1 month (bilingual children: 6 months in both languages); social anxiety the predominant feature" },
    { label: "The ADHD triad", value: "Receptive, expressive, pragmatic", detail: "ADHD is the psychiatric disorder most commonly reported with speech and language difficulties — excessive talking, poor topic maintenance — and child psychiatric populations generally carry high rates of undetected language disorder" },
    { label: "The bidirectional rule", value: "Behaviour the ticket, language the diagnosis", detail: "Children with primary language impairment are at elevated risk of behaviour problems; children with primary psychiatric disorders carry undetected language disorders — the association runs both ways and one checklist pass rewrites the formulation" },
    { label: "The Indian signature", value: "Bilingual rule, hearing first", detail: "Assess in the child's strongest language; otoscopy and audiometry before any behavioural label (untreated chronic otitis media among the commonest reversible causes); therapist-designed, parent-and-teacher-delivered programmes; the RPwD certificate pathway" },
  ],
  knowledgeGraph: [
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The pragmatic boundary the two disorders share — reciprocity history and repetitive behaviours against conversational impairment alone; the compounding rule runs in both directions" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The most commonly reported psychiatric companion — the receptive-expressive-pragmatic triad, excessive talking, poor topic maintenance, and the interaction loop that starves language stimulation" },
    { label: "Child Anxiety", type: "condition", href: "/psychiatry/child-anxiety/", note: "Selective mutism's anxiety home — the graded exposure logic both courses share; the language course adds the bilingual duration rule and the competence-verification step" },
    { label: "Developmental Disorders", type: "condition", href: "/psychiatry/developmental-disorders/", note: "The literacy cascade downstream — language → literacy → attainment — and the both-language discipline the two courses enforce together" },
    { label: "Conduct Disorders", type: "condition", href: "/psychiatry/conduct-disorder/", note: "The behaviour gateway's far end — the conduct-labelled child whose language disorder nobody screened, and the formulation change the screen forces" },
    { label: "Intellectual Disability", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The explained tier — language parallel to IQ, the Down and Williams patterns, communicative intent as the profound-disability goal" },
    { label: "Left perisylvian language network", type: "brain-region", href: "#brain", note: "The grammar and sound machinery SLI's atypical organisation implicates — research findings that explain the channel, never tests that diagnose it" },
    { label: "Left temporal auditory-phonological cortex", type: "brain-region", href: "#brain", note: "The sound archive the vocabulary is built from — phonological memory's substrate and the SLI bottleneck" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The conversation's executive — topic maintenance, self-monitoring, the sentence plan held online; the pragmatic profile's arm and the ADHD overlap's seat" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the mechanism, and the first is the five-year gate. Speech and language development is the fastest and most consequential learning task of early childhood — so fast it looks effortless: clear speech, complex grammar, negotiation and prediction, confident conversation with adults and peers, letter sounds and some reading, all assembled by school entry. Language is not a school subject; it is the medium of every school subject — so a child who crosses the school gate without this equipment begins failing immediately, and the failure compounds: language → literacy → attainment → self-esteem → behaviour. The critical-age hypothesis turns this into the clinical rule: difficulties still impairing communication after age 5 are significant and warrant prioritised intervention. The second story is the dissociation. In some children language runs years behind non-verbal intelligence — the puzzle that fuels the deepest debates in cognitive science: is language a separable mental module, or the visible end of general processing limits? The dissociation means the child LOOKS capable (average non-verbal IQ, often normal social interests) but cannot follow instructions, retrieve words or build sentences — the chapter's transcript of a child with word-finding and syntax problems attempting a simple narrative ('goed to make some vegetable circles') showing the exhausting effort underneath. The specific cognitive deficits are measurable: phonological memory, verbal and visuospatial memory, and symbolic play all impaired despite normal non-verbal IQ; the genetic research targets both a general processing-deficit account (phonological memory deficit as genetic marker) and a modular account (tense-marking and syntax representational deficits — the 'goed' error itself the phenotype). The third story is the pragmatic boundary. Some children with fluent grammar and good vocabularies still fail conversationally — not knowing how much information a listener needs, misreading humour and sarcasm, monologuing on special interests. Historically labelled semantic-pragmatic disorder within SLI, this profile — Pragmatic Language Impairment — now sits on contested ground between SLI and autism: the conversational impairments WITHOUT the non-verbal repetitive behaviours of autism. The practical rule the boundary teaches: pragmatic impairment alone does not diagnose autism, and any child's social communication difficulty may be compounded by language difficulty that treatment can reduce — the plasticity corollary that keeps this whole territory hopeful.",
    steps: [
      "The fastest learning task: speech and language development completes so fast it looks effortless — clear speech, complex grammar, negotiation, confident conversation, letter sounds by school entry; language not a school subject but the medium of every school subject.",
      "The gate: the child who crosses the school gate without the equipment begins failing immediately — the compounding cascade, language → literacy → attainment → self-esteem → behaviour, each year's failure loading the next.",
      "The critical-age rule: difficulties still impairing communication after age 5 are significant and warrant prioritised intervention — the cascade translated into one clinical instinct.",
      "The dissociation: language years behind non-verbal intelligence with measurable specific deficits — phonological memory, verbal and visuospatial memory, symbolic play — the child who looks capable but cannot follow instructions, retrieve words or build sentences.",
      "The genetics: heritable, with two rival research accounts — the general processing-deficit account (phonological memory deficit as genetic marker) and the modular account (tense-marking and syntax representational deficits, the 'goed' error as phenotype).",
      "The pragmatic boundary: fluent grammar with conversational failure — initiating, humour and sarcasm, contextual adaptation — without autism's repetitive behaviours; the language component treatable, and the social difficulty often shrinking with it.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "perisylvian-network", name: "Left perisylvian language network (the grammar and sound machinery)", role: "The speech-sound discrimination, sequencing and grammar machinery — atypical organisation here is the research signature SLI's cognitive profile implies; it explains the channel and never diagnoses it.", grade: "supported" },
    { id: "auditory-phonological-cortex", name: "Left temporal auditory-phonological cortex (the sound archive)", role: "The substrate of phonological memory — the seconds-long sound store new words are built from; its weakness underpinning the small vocabularies, the word-finding searches and the syntax lag.", grade: "proposed" },
    { id: "prefrontal-discourse", name: "Prefrontal cortex (the conversation's executive)", role: "Topic maintenance, self-monitoring and the working memory that holds the plan of a sentence and the point of a conversation — the pragmatic profile's executive arm and the seat of the ADHD overlap.", grade: "proposed" },
    { id: "motor-speech-systems", name: "Motor speech systems (cortico-bulbar tracts, basal ganglia, cerebellum)", role: "The movement machinery of speech — cerebral palsy's dysarthria (slow, weak, uncoordinated speech) and the debated neuromotor planning of childhood apraxia; the oromotor signs (drooling, feeding, blowing) that point below the cortex.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Glutamate", symbol: "Glu", role: "The plasticity currency: the critical-period learning on which the whole five-year gate runs — vocabulary, grammar and the remediation that re-trains them all ride on synaptic strengthening.", grade: "proposed" },
    { name: "GABA", symbol: "GABA", role: "The excitation-inhibition balance of cortical development — the critical-period wiring window that makes early childhood the fastest and most consequential learning epoch; named as honest developmental framing, not a drug target.", grade: "uncertain" },
    { name: "Dopamine", symbol: "DA", role: "The fronto-striatal attention machinery of the ADHD overlap — the comorbidity channel, not the language channel itself: the child who cannot attend cannot practise, the interaction loop that starves language stimulation.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "five-year-gate-pathway",
      name: "The five-year gate (why school entry decides)",
      steps: [
        { label: "The medium is built", detail: "Speech, grammar and conversation assembled by school entry — the fastest learning task of early childhood, invisible because it looks effortless" },
        { label: "The gate is crossed unequipped", detail: "Language is not a school subject but the medium of every school subject — the unequipped child begins failing immediately" },
        { label: "The cascade compounds", detail: "Language → literacy → attainment → self-esteem → behaviour — each year's failure loading the next" },
        { label: "The rule crystallises", detail: "Difficulties still impairing communication after age 5 are significant and warrant prioritised intervention — the critical-age gate" },
      ],
      clinicalManifestation: "The Standard 1 child who 'refuses to do work and fights at line-up' — the line-up being exactly where verbal instructions move fastest and incomprehension looks like defiance.",
      grade: "established",
    },
    {
      id: "dissociation-pathway",
      name: "The dissociation (why the capable-looking child cannot follow you)",
      steps: [
        { label: "Non-verbal intelligence intact", detail: "Blocks, puzzles, everyday reasoning at age level — the child looks capable, often with normal social interests" },
        { label: "Phonological memory runs grainy", detail: "The sound store new words are built from is weak — small vocabularies, word-finding searches, fillers ('stuff', 'thingy'), gesture and first-sound substitutions" },
        { label: "Syntax lags years", detail: "Tense inflections wrong ('goed'), complex sentences and passives failing, narratives collapsing mid-telling" },
        { label: "The mismatch is misread", detail: "Cannot follow instructions, retrieve words or build sentences — presented to the clinic as behaviour, not as language" },
      ],
      clinicalManifestation: "The exhausting narrative transcript — 'goed to make some vegetable circles' — a child with word-finding and syntax problems working far harder than the listener ever sees.",
      grade: "supported",
    },
    {
      id: "pragmatic-boundary-pathway",
      name: "The pragmatic boundary (fluent but conversationally lost)",
      steps: [
        { label: "The form arrives fluent", detail: "Grammar and vocabulary pass the casual ear — the surface misleads teachers and examiners alike" },
        { label: "The use fails", detail: "Initiating conversations, humour and sarcasm, giving the listener adequate information, contextual adaptation, non-verbal communication — all impaired" },
        { label: "The autism discriminant holds", detail: "The conversational impairments WITHOUT the non-verbal repetitive behaviours and interests of autism — Pragmatic Language Impairment on contested ground between SLI and autism" },
        { label: "The treatable component", detail: "The language difficulty compounding the social picture is reducible — the social difficulty often shrinking when the language is treated, before any autism verdict" },
      ],
      clinicalManifestation: "The fluent monologuer on special interests who cannot judge how much information the listener needs — misread either as naughtiness or as autism when neither is the whole story.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "vocabulary-boom", time: "0–3 years", title: "The vocabulary boom", description: "First words, the two-word combinations, the explosion that looks effortless because it is — hearing status and interaction quality already writing the trajectory; the cleft-palate pathway running from birth (feeding first, then speech).", phase: "onset" },
    { id: "critical-window", time: "3–5 years", title: "The critical window", description: "Grammar assembling, conversations negotiating; normal non-fluency between 2–5 years resolving spontaneously (the stuttering trap); selective mutism onset typically 3–5; SLI already visible in retrospect — the last cheap years for intervention.", phase: "onset" },
    { id: "school-entry-gate", time: "Age 5 — school entry", title: "The five-year gate", description: "The school-entry expectations: speaking clearly, understanding and building complex grammar, negotiating and predicting, conversing confidently with adults and peers, knowing letter sounds — difficulties still impairing communication after age 5 are significant and warrant prioritised intervention.", phase: "peak" },
    { id: "compounding-years", time: "5–11 years", title: "The compounding years", description: "The cascade at work: literacy demands load the weak language base, attainment falls, self-esteem follows, behaviour presents — the behaviour gateway through which the language-impaired child enters Indian child guidance clinics with the wrong label.", phase: "duration" },
    { id: "adolescence", time: "11–16 years", title: "The adolescent persistence", description: "The chapter's corrective: these difficulties persist — into adolescence, affecting literacy, attainment, friendships and arrest rates in the outcome cohorts; the post-16 educational support tier opens for qualifications and workplace entry.", phase: "duration" },
    { id: "adulthood-outcomes", time: "Adulthood (mid-30s evidence)", title: "The long shadow and the counterweights", description: "Adults with SLI histories in their mid-30s: employment, relationships, independent living and health all adversely affected — the honest literature families are owed; the resilience factors (pure speech difficulty, high IQ, high SES, specialist support) marking the better-outcome paths.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Speech and language difficulties broadly: up to 24.6% of children by inclusive criteria (Law's prevalence reviews) — the honest headline that depends entirely on where the definitional bar sits. Specific language impairment: 3–7%, the tighter the discrepancy criteria the fewer the cases. Selective mutism: ~0.75–0.8% of children, slightly more common in girls, onset typically 3–5 years. ADHD is the psychiatric disorder most commonly reported with speech and language difficulties; high rates of undetected language disorder run through child psychiatric populations generally — the epidemiology of the hiding place.",
    indianPrevalence: "No equivalent national data exists. The structural context writes the epidemiology instead: multilingual homes and language-switching children, mid-year medium switches, hearing loss from untreated otitis media, and speech-language pathology services concentrated in cities and a handful of institutions — producing BOTH over-identification (normal bilingual variation misread as impairment) and severe under-identification (the child nobody can understand falling silently behind). The realistic reading: the prevalence is not lower in India, the detection is different.",
    lifetimeRisk: "A developmental condition with lifelong echoes: difficulties persisting beyond age 5 predict literacy problems, low attainment and poorer adult psychosocial function — the risk concentrated in the receptive-involvement, severe and unsupported ends.",
    genderRatio: "Broad difficulties roughly even with referral tilts; selective mutism slightly more common in girls; ADHD comorbidity tilting the clinical population toward boys — the behaviour gateway filtering who arrives.",
    ageOfOnset: "Developmental from the first words; the clinical decision point is school entry — the age-5 gate; selective mutism onset typically 3–5 years; Landau–Kleffner usually ages 3–7 (the acquired exception that presents as regression).",
    indianNotes: "The English-medium shift makes the both-language discipline diagnostic: a child behind only in the school language carries acquisition load; a child behind in the home language too carries impairment — one question, two different futures.",
  },
  etiology: [
    { category: "biological", factor: "The explained tier (always exclude first)", details: "Hearing impairment — the first exclusion to check, every time; visual impairment, general learning disability, epilepsy and the syndromes (Down, fragile X) — the causes that must be found before 'unexplained' is written on any file." },
    { category: "genetic", factor: "The unexplained core (SLI)", details: "Heritable, with the genetic research targeting two rival accounts: the general processing-deficit account (phonological memory deficit as genetic marker) and the modular account (tense-marking and syntax representational deficits). The measurable specific deficits: phonological memory, verbal and visuospatial memory, and symbolic play — despite normal non-verbal IQ." },
    { category: "biological", factor: "The structural and neurological machinery", details: "Cleft lip and palate — post-repair fistulas and velopharyngeal incompetence impairing intelligibility, therapy from birth (feeding first, then speech); cerebral palsy's dysarthria — slow, weak, uncoordinated speech, severe forms with shallow breathing, nasal voice, reduced vowel and consonant range." },
    { category: "biological", factor: "The developmental speech disorders", details: "Developmental phonological disorder — intact musculature but an incomplete or atypical speech-sound system with systematic error patterns (always replacing 's' with 'd'), auditory processing implicated, often resolving with therapy; childhood apraxia of speech — inconsistent errors plus oral-motor difficulty (drooling, feeding, blowing), reduced babbling, a residual label for persistent unexplained speech disorder with the neuromotor planning itself debated." },
    { category: "biological", factor: "The acquired causes (the regression tier)", details: "Head injury, cerebrovascular lesions, cerebral infection, tumours and epilepsy — including Landau–Kleffner syndrome: acquired aphasia with seizures, usually ages 3–7, receptive language devastated. Any loss of acquired language is investigated, never watched." },
    { category: "psychological", factor: "The interaction and anxiety routes", details: "Language stimulation affected by poor parent-child interaction or by the child's inability to attend (the ADHD interaction loop — the child who cannot attend cannot practise); selective mutism multi-factorial — social phobia and anxiety central, with comorbid behaviour problems, communication difficulties and developmental delay riding along." },
  ],
  symptomClusters: [
    {
      category: "1. Speech difficulties (the intelligibility problems)",
      symptoms: ["Cleft palate: post-repair velopharyngeal incompetence and fistulas impairing intelligibility — therapy from birth, feeding first, then speech", "Dysarthria: neurological (cerebral palsy) — slow, weak, uncoordinated speech; severe forms with shallow breathing, nasal voice, reduced vowel and consonant range", "Developmental phonological disorder: intact musculature but an incomplete or atypical sound system with SYSTEMATIC error patterns (always 's' as 'd'); auditory processing implicated; often resolves with therapy, sometimes persists", "Childhood apraxia of speech: INCONSISTENT errors plus oral-motor difficulty — drooling, feeding, blowing; reduced babbling; often co-occurring with motor apraxia; the residual label for persistent unexplained speech disorder", "Stuttering: not an articulatory problem — core behaviours are repetitions, blocks, prolongations and struggle; secondary avoidance (circumlocution, telephone avoidance); the normal non-fluency of 2–5 years resolves spontaneously"],
    },
    {
      category: "2. Language difficulties (the vocabulary, word-finding and syntax problems)",
      symptoms: ["Small vocabularies with word-finding difficulty and searching behaviours — the circumlocution ('that thing... you know...'), the fillers ('stuff', 'thingy'), gesture and first-sound substitutions", "Word-finding linked to phonological working memory — the sound archive too grainy to hold and retrieve the word", "Syntax problems: tense inflections wrong ('goed'), complex sentences and passives failing", "Narratives fall apart mid-telling — the plan of the sentence lost between the idea and the mouth"],
    },
    {
      category: "3. Social communication difficulties (the pragmatic problems)",
      symptoms: ["Eye contact, initiation, turn-taking, sharing, requesting and responding — the conversation's basic moves", "Higher-level failures: inferring information, giving the listener adequate information, self-monitoring", "The aetiology differs by territory: secondary to the language difficulty in SLI, intrinsic in autism, compounding in both"],
    },
    {
      category: "4. Selective mutism (the anxiety costume)",
      symptoms: ["Persistent refusal to talk in certain social situations despite speaking in others — classically talking at home, not at school", "Not better explained by a communication disorder, a pervasive developmental disorder or psychosis", "Social anxiety the predominant feature — the alarm jamming the voice, not defiance", "Many affected children nonetheless have measurable speech and language difficulties — articulation, expressive and receptive — riding under the anxiety"],
    },
    {
      category: "5. The syndrome patterns (the genetics' fingerprints)",
      symptoms: ["Down syndrome: vocabulary stronger than grammar — the gap the examiner must expect", "Williams syndrome: apparently competent communicators with significant language learning problems — the fluent surface misleading", "Learning disability generally: language parallel to IQ with delay; profound disability may never establish communicative intent; mild-moderate plateaus in adolescence"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The framework",
      code: "Three domains, two axes",
      criteria: [
        "The domain sort: is the difficulty SPEECH (intelligibility), LANGUAGE (comprehension and production — vocabulary, syntax) or SOCIAL COMMUNICATION (pragmatics)?",
        "The specificity axis: is it SPECIFIC (cognitive development age-appropriate) or EXPLAINED (hearing loss, syndrome, structural, neurological cause found)?",
        "The trajectory axis: DELAYED (on the normal path but behind) versus DISORDERED (atypical or stuck) — the distinction that changes prognosis and is made by formal assessment, not by watching.",
        "Exclude hearing loss first, always — the rule that precedes every label in this territory.",
      ],
      duration: "The age-5 gate: difficulties still impairing communication after age 5 are significant — the persistence, not the age of first worry, that prioritises.",
      indianNote: "In Indian clinics the bilingual rule rides on top: assess in the child's strongest language, through an interpreter or bilingual worker where needed — a home-language delay before a school-language boom is acquisition, not disorder; genuine impairment of the home language is the true signal.",
    },
    {
      system: "SLI criteria (contested)",
      code: "The discrepancy debate",
      criteria: [
        "The definition: language delayed or disordered out of proportion to otherwise normal non-verbal intelligence — with no identifiable medical, neurological, sensory or functional cause.",
        "ICD-10 strict: language ≥2 SD below chronological age AND ≥1 SD below non-verbal IQ.",
        "Liberal: non-verbal IQ ≥75 with language often 1 SD below the mean.",
        "The trade-off: strict criteria risk missing children with poor long-term outcomes; liberal criteria risk pathologising the low-normal tail — and the tighter the discrepancy criteria, the fewer the cases.",
      ],
      duration: "Developmental onset — recognisable from the early school years, usually earlier in retrospect.",
      indianNote: "Where formal psychometrics are scarce, the clinical proxy: a child of average non-verbal ability (blocks, puzzles, everyday reasoning) whose language runs years behind — the dissociation you can see at a kitchen table.",
    },
    {
      system: "Selective mutism",
      code: "The five-element definition",
      criteria: [
        "Persistent refusal to talk in certain social situations despite speaking in others — classically at home, not at school.",
        "Not better explained by a communication disorder, a pervasive developmental disorder or psychosis.",
        "Duration more than 1 month — and NOT the first month of school; bilingual children: 6 months in both languages.",
        "Interferes with education and social achievement.",
        "Social anxiety the predominant feature — and verify language competence before assuming pure anxiety (many affected children carry measurable language difficulties).",
      ],
      duration: ">1 month (bilingual children: 6 months, both languages).",
      indianNote: "Bilingual homes are the Indian norm — the 6-month both-languages rule exists precisely so that acquisition load is never miscounted as mutism, and mutism is never excused as acquisition.",
    },
    {
      system: "The identification checklist (school-age)",
      code: "Any positive → referral",
      criteria: [
        "Speech: difficult to understand? sounds omitted? less intelligible in sentences than single words?",
        "Comprehension: follows conversations with children and adults? carries out verbal instructions? understands time and space concepts?",
        "Production: wide vocabulary? complex sentences? can narrate past and future events? filler words and hesitation?",
        "Social communication: participates in and enjoys conversation? contributions meaningful and relevant? appropriate verbal and non-verbal behaviour?",
        "Plus school functioning and persistence beyond age 5 — any positive answer triggers the speech and language therapy referral.",
      ],
      duration: "One clinic pass — repeated each school year for the at-risk.",
      indianNote: "The checklist is the Indian delivery instrument: designed to be run by teacher or parent where therapists are thin, with periodic professional review — the screen that changes the management plan more often than any investigation.",
    },
  ],
  severityScales: [
    {
      name: "The identification checklist",
      fullName: "The school-age speech, language and social communication screen",
      measures: "The five-domain structured pass — speech intelligibility, comprehension, production, social communication, and school functioning with the age-5 persistence gate; any positive answer triggers referral. Named and described, items never scored or reproduced as a test.",
      ranges: [],
      indianNote: "The instrument doubles as the delivery vehicle: teacher- and parent-runnable, periodic therapist review — the realistic Indian architecture.",
    },
    {
      name: "The risk-resilience stratification",
      fullName: "The long-horizon outcome grid",
      measures: "Risk factors (severity, receptive involvement, low IQ, low SES) against resilience factors (pure speech difficulty, high IQ, high SES, specialist support) — the ready-made 5-mark answer and the prioritisation rule where services are scarce.",
      ranges: [],
      indianNote: "The grid decides who gets the scarce therapist hours first: the receptive-involvement and severe ends, and everything still impairing after age 5.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Hearing impairment (the first exclusion)", distinguishingFeatures: "Conductive loss from untreated chronic otitis media with effusion masquerading as language delay or inattention — among the commonest reversible causes in Indian clinics.", keyDifferentiator: "Otoscopy and audiometry before any behavioural label — the hearing test that precedes every diagnosis in this territory." },
    { condition: "Autism at the pragmatic boundary (PLI)", distinguishingFeatures: "Fluent grammar and vocabulary with initiating, humour, sarcasm and contextual-adaptation failures — WITHOUT the non-verbal repetitive behaviours and interests of autism.", keyDifferentiator: "Pragmatic impairment alone does not diagnose autism — and the social difficulty often shrinks when the language component is treated; re-look after treatment." },
    { condition: "General learning disability and the syndromes", distinguishingFeatures: "Language parallel to overall ability (delay, not dissociation); Down (vocabulary stronger than grammar); Williams (fluent surface, impaired learning); fragile X on the syndrome list.", keyDifferentiator: "The non-verbal IQ and the pattern — the dissociation defines SLI, the parallel defines the explained tier." },
    { condition: "Selective mutism", distinguishingFeatures: "Situation-specific silence with preserved home speech and participation-without-speech; social anxiety core; the setting, not the ability, fails.", keyDifferentiator: "Talks at home, silent at school, more than 1 month (bilingual: 6 months, both languages) — with language competence verified before assuming pure anxiety." },
    { condition: "Normal developmental non-fluency (the stuttering trap)", distinguishingFeatures: "Repetitions and hesitations between 2–5 years that resolve spontaneously — every nursery has several.", keyDifferentiator: "The secondary avoidance behaviours (circumlocution, telephone avoidance) and struggle mark the disorder; the calendar alone marks the normal." },
    { condition: "ADHD's language triad", distinguishingFeatures: "Receptive, expressive and pragmatic difficulties riding with inattention — excessive talking, poor topic maintenance.", keyDifferentiator: "ADHD is the most commonly reported psychiatric companion, but the two need separate assessment and separate treatment — one does not absorb the other." },
    { condition: "Acquired childhood aphasia (Landau–Kleffner)", distinguishingFeatures: "Language that was acquired and then lost — with seizures; usually ages 3–7, receptive language devastated.", keyDifferentiator: "Regression versus developmental — any loss of acquired language is urgent paediatric neurology, never a language-clinic referral alone." },
    { condition: "Bilingual acquisition load", distinguishingFeatures: "Home-language delay before a school-language boom in the language-switching child — normal code-switching, normal mixing.", keyDifferentiator: "The both-language discipline: impairment shows in BOTH languages; acquisition load shows in one — and 'he'll catch up with English' must never hide a genuine home-language impairment." },
  ],
  management: [
    { category: "psychotherapy", name: "Speech and language therapy — the core service", description: "The assessment-and-treatment discipline the whole field runs on, working across education, health and social care: schools (statements of special educational needs, individual learning plans, curriculum access), community programmes, child development centres — and increasingly WITHIN CAMHS teams, where the therapist identifies communication difficulties, assesses their impact on mental health, and delivers direct (individual or group) or indirect (family or classroom) intervention.", whenToUse: "Every positive on the identification checklist — and every behaviour formulation that has never had the screen.", indianContext: "Where speech-language pathology clusters in the metros, the realistic Indian pathway is the therapist-designed, parent-and-teacher-delivered programme with periodic review — the checklist and the communication principles are built for exactly that delivery." },
    { category: "psychotherapy", name: "The selective mutism ladder — multi-modal by aetiology", description: "Behavioural (contingency management, shaping and stimulus fading, systematic desensitisation, self-modelling); CBT; family therapy (the relationship contributions); psychodynamic play and art therapy; SLT as the desensitising adjunct — a hierarchy of easy-to-hard speech tasks in easy-to-hard situations. Fluoxetine has reported but unreplicated success — held in reserve, never the first rung.", whenToUse: "From the day the diagnosis is made: early treatment works better, and untreated mutism predicts later social anxiety.", indianContext: "The ladder's early rungs (mother in the empty classroom after hours) are deliverable anywhere — the hierarchy travels to any teacher willing to stay half an hour." },
    { category: "lifestyle", name: "The communication-facilitation rules (for the mute child's adults)", description: "One-to-one settings with a familiar person first; accept non-verbal communication — nods, writing, drawing, gesture; whispering or quiet talking is easier than loud; factual or yes/no questions before feelings or opinions.", whenToUse: "Immediately, everywhere the child must function — the rules are the environment's half of every mutism programme.", indianContext: "Coached into the teacher and the family at the first visit — the zero-cost intervention that starts working before any programme is scheduled." },
    { category: "lifestyle", name: "The six adaptation principles (for the language-impaired child's adults)", description: "Forced-choice answers; break long instructions into short steps; slow delivery with pauses; short simple sentences, familiar vocabulary, no ambiguity; visual supports (pictures, objects, symbols); remember written language is impaired too. And when you cannot understand the child: show interest, honestly say which parts you did and did not understand, offer choices to narrow the guess, invite showing, pointing or drawing — and try again later without blame.", whenToUse: "Every classroom, clinic and kitchen where a language-impaired child is expected to function.", indianContext: "These principles ARE the parent-and-teacher-delivered programme's curriculum — the content the Indian model delivers between therapist reviews." },
    { category: "lifestyle", name: "Treat the explained causes first", description: "Hearing first, always — the otitis media with effusion treated before any behavioural label; the cleft-palate surgical and therapy pathway from birth (feeding first, then speech); the neurological route (epilepsy, Landau–Kleffner, the acquired causes) when language regresses.", whenToUse: "Before, during and after every behavioural formulation — the reversible causes cannot be treated by any adaptation.", indianContext: "Untreated chronic otitis media with conductive loss is among the commonest reversible causes of apparent 'language delay' in Indian clinics — otoscopy and audiometry are inexpensive in public centres and change the whole plan." },
    { category: "lifestyle", name: "The long horizon — stratification, supports and honest outcomes", description: "Risk stratification (severity, receptive involvement, low IQ, low SES = risk; pure speech difficulty, high IQ, high SES, specialist support = resilience); prioritise anything persisting beyond age 5; post-16 educational support for qualifications and workplace entry; families informed with the honest outcome literature — persistence into adolescence and adult life is the chapter's central corrective.", whenToUse: "From diagnosis, reviewed at every transition — the compounding cascade is the enemy and transitions are its ambush points.", indianContext: "The RPwD Act provisions (scribes, extra time, exemptions where appropriate) apply to speech and language impairment as a specified disability — the certificate pathway matters more than most clinicians realise." },
  ],
  safety: {
    redFlags: [
      "Any loss of previously acquired language is never 'wait and see' — regression means urgent paediatric neurological referral: the Landau–Kleffner window (acquired aphasia with seizures, usually ages 3–7, receptive language devastated) is treated, not watched",
      "The hearing test before the behavioural label — untreated chronic otitis media with conductive loss is among the commonest reversible causes of apparent language delay; otoscopy and audiometry at the first visit",
      "The 'wait and see' year past age 5 — difficulties still impairing communication after age 5 predict literacy problems and low attainment; the year wasted is the compounding cascade's best year",
      "Selective mutism beyond the first month of school (6 months, both languages, for bilingual children) — the anxiety is treatable, and untreated mutism predicts later social anxiety",
      "The behaviour-referred child nobody has screened — undetected language disorder is common in child psychiatric populations; the 'naughty boy' verdict can be the presenting complaint of incomprehension",
      "The child nobody can understand falling silently behind — in multilingual homes and thin-therapy districts, absence of complaint is not absence of difficulty (the under-identification face)",
    ],
    urgentGuidance:
      "The order of operations: (1) hearing excluded first, always — otoscopy and audiometry before any behavioural label; (2) any regression of acquired language referred urgently to paediatric neurology (the Landau–Kleffner window: seizures plus devastated comprehension, usually ages 3–7); (3) any positive on the identification checklist referred to speech and language therapy — prioritised when the difficulty persists beyond age 5; (4) the classroom adaptations (short steps, forced choice, visual supports) started immediately while waiting; (5) selective mutism treated early with the graded multi-modal ladder, language competence verified first; (6) the RPwD certificate pathway opened early where impairment persists — the entitlement (scribe, extra time, exemptions) is the school career's protection.",
  },
  drugLinks: [],
  contentGaps: [
    "The selective-mutism pharmacotherapy footnote (fluoxetine — reported but unreplicated success) has a KYP drug lesson elsewhere in the system but is deliberately not linked here: no medication carries an evidence-backed role in the developmental speech and language disorders themselves, so drugLinks stays empty and the tier is taught here with its unreplicated status, route never invented.",
    "Speech and language therapy itself — the core treatment of this whole territory — has no KYP lesson: the assessment discipline, the programme design and the Indian parent-and-teacher-delivered model are taught in this course.",
    "The hearing assessment pathway (otoscopy, audiometry, behavioural audiology, the ENT route for chronic otitis media) has no KYP lesson; the hearing-first rule is taught here because it is this territory's first exclusion.",
    "The fluency disorders (stuttering and its behavioural ladder) have no dedicated KYP course — taught here in compressed exam form only.",
    "Landau–Kleffner syndrome and the acquired childhood aphasias — the paediatric neurology tier — have no KYP course; the exam facts (acquired aphasia with seizures, usually ages 3–7) are taught here as the regression red flag.",
  ],
  patientGuide: {
    whatIsIt:
      "A speech and language difficulty means the child struggles to understand what is said, to put thoughts into words and sentences, or to be understood when speaking — three separate jobs that can each fail alone. Speech means being clear enough to be understood; language means the words, the grammar and the understanding behind them; social communication means using language in real conversations — taking turns, judging what the listener needs, reading humour. The crucial fact: a child with this difficulty almost never complains of it — the difficulty shows up AS behaviour problems, school failure or silence, because communication is the medium of learning, friendship and self-control. When language runs years behind a child's otherwise normal intelligence (specific language impairment), the child looks capable and is wrongly called lazy or naughty. The condition does not come from bad parenting, and multilingual homes do not cause it.",
    whatCausesIt:
      "Sometimes a cause is found — hearing loss (the first thing to check, every time), a syndrome such as Down, a cleft palate, cerebral palsy, epilepsy, or rarely a brain injury or infection; these are the 'explained' difficulties and each has its own treatment route. When no cause is found and intelligence is otherwise normal, it is called specific language impairment — which runs in families and is rooted in how the brain processes sounds (especially the sound-memory new words are built from). The environment matters at the edges — how much conversation a child gets — but the core difficulty is developmental, not chosen and not anyone's fault.",
    symptoms:
      "Speech: hard to understand, sounds left out, worse in sentences than single words, drooling or feeding difficulties (the oromotor signs), repetitions, blocks and struggle when speaking. Language: small vocabulary, long searching pauses, filler words ('thingy'), gestures instead of words, sentences that stay simple, tense errors ('goed'), stories that fall apart halfway. Social communication: poor eye contact and turn-taking, monologues, missing jokes and sarcasm, not judging what the listener needs. Selective mutism: speaks freely at home, completely silent at school for more than a month (six months, in both languages, in bilingual children) — an anxiety condition, not stubbornness. Warnings needing prompt attention: any loss of words the child previously had, or a language delay with never-checked ears.",
    treatment:
      "The core treatment is speech and language therapy — assessment, then a programme that can be delivered at school and at home by teachers and parents with periodic therapist review (the realistic model where therapists are few). Hearing problems are treated first, always. For the selectively mute child, treatment is a graded ladder: speech with the parent in the empty classroom after hours, gradually widened; the teacher accepting nods, writing and gestures without pressure; yes/no questions before open ones; family sessions lowering the anxiety; medication (fluoxetine) only rarely, held in reserve — its success is reported but unreplicated. For every language-impaired child the adults change how they talk: short steps, slow delivery, forced-choice questions, visual supports, and honesty when you did not understand — 'I didn't catch that — show me'.",
    selfHelp: [
      "Break instructions into single short steps, delivered slowly with pauses — one thing at a time, in the order it must happen.",
      "Offer forced choices ('the red one or the blue one?') instead of open questions the child cannot yet answer.",
      "Use pictures, objects and gestures alongside words — the visual route is a genuine second channel, not a crutch.",
      "When you cannot understand: show interest, say honestly which parts you caught, offer choices to narrow the guess, invite pointing or drawing — and try again later without blame.",
      "For the mute child: accept nods, writing and drawing; allow whispering; ask factual or yes/no questions before feelings; never punish the silence — punishment deepens it.",
      "Speak the home language richly and without apology — and if the delay shows in the home language too, insist on the assessment.",
      "Keep the ears checked: the child who says 'what?', turns the television up, or drifts after ear infections needs otoscopy and audiometry before any other label.",
    ],
    whenToSeekHelp: [
      "Any loss of words or sentences the child previously had — urgent referral, the same week (regression is never watched)",
      "Difficulty still impairing communication after age 5 — the critical-age rule: significant, and prioritised for intervention",
      "Speech that nobody outside the family can understand, or sounds omitted across the board",
      "The child who cannot carry out two-step verbal instructions, or whose narratives collapse halfway",
      "Complete silence at school beyond the first month (six months, both languages, for bilingual children) while speaking freely at home",
      "Behaviour problems or school failure without an explanation found — ask directly for the language screen; one checklist pass changes the plan more often than any investigation",
    ],
    indianResources: [
      "Public-centre audiometry and behavioural audiology — inexpensive, and the first investigation this territory owes every child",
      "The RPwD Act 2016 certificate pathway — speech and language impairment is a specified disability: scribes, extra time, exemptions where appropriate; ask at the district hospital for the designated authority",
      "The therapist-designed, parent-and-teacher-delivered programme — the model that costs time, not money, and works between reviews",
      "The identification checklist — ask the treating team or school counsellor to run it with the teacher each year for the at-risk child",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific speech-and-language clinical pathway exists; practice follows the assessment framework taught here with two Indian additions that behave like guidelines: the bilingual assessment rule (assess in the child's strongest language, through an interpreter or bilingual worker where needed) and the RPwD Act 2016 — speech and language impairment is a specified disability, with the certificate pathway (scribe, extra time, exemptions where appropriate) mattering more than most clinicians realise.",
    systemContext: "The behaviour gateway: in Indian child guidance clinics the language-impaired child usually arrives with a conduct or school-failure label — the 'oppositional' Standard 1 boy, the 'not concentrating' complaint. One screening pass with the identification checklist changes the management plan more often than any investigation; the presentation filter, not the prevalence, decides who gets seen.",
    programmeContext: "Speech-language pathology services cluster in the metros and a handful of institutions — the realistic Indian pathway is the therapist-designed, parent-and-teacher-delivered programme with periodic review. Public centres provide inexpensive audiometry and behavioural audiology; the checklist and the six communication principles are built for exactly this delivery model.",
    costConsiderations: "Approx 2026: audiometry and behavioural audiology are inexpensive in public centres; private speech therapy sessions are a recurring middle-class expense; the parent-delivered model costs time, not money — the barrier is never the equipment, it is the identification and the engagement.",
    culturalConsiderations: "Multilingual homes are the norm, not the exception: normal code-switching and a home-language delay before a school-language boom are acquisition, not disorder — but 'he'll catch up with English' must never hide a genuine impairment of the home language (the both-language discipline). Mid-year medium switches manufacture both over- and under-identification. The 'naughty boy' verdict absorbs the language difficulty for years; the selectively mute girl is called stubborn; the quiet child is sometimes praised into silence. The counter in every case is the same: one structured pass at what the child can and cannot do with language.",
    patientCounselling: [
      "The bilingual script: 'Speaking three languages at home did not cause this and stopping will not cure it — we assess in your child's strongest language, and the true signal is whether BOTH languages are behind.'",
      "The hearing script: 'Before we discuss behaviour or labels, we check the ears — untreated ear infection is among the commonest reversible causes of what looks like language delay, and the test costs almost nothing.'",
      "The critical-age script: 'After the fifth birthday, a difficulty still slowing communication is significant — this is the year we act, not the year we watch.'",
      "The behaviour-gateway script: 'The fighting is real, and so is the reason behind it: a child who cannot follow the instructions fights where the instructions move fastest. We treat the language and re-look at the behaviour.'",
      "The mutism script: 'She is not stubborn and she is not defiant — the voice locks with anxiety, and the ladder starts where speech is easiest: with you, after hours, in the empty classroom.'",
      "The certificate script: 'The RPwD certificate is not a stigma — it is the scribe, the extra time and the exemption that protect the school career; the pathway starts at the district hospital.'",
    ],
  },
  decisionPath: {
    title: "The child who cannot understand or be understood",
    nodes: [
      {
        id: "start",
        question: "A child arrives — behaviour-referred, school-flagged or screened. First: what cannot the child do, and is the clock past 5?",
        branches: [
          { label: "Speech hard to understand (intelligibility)", next: "speech-path" },
          { label: "Language below age (understanding, words, sentences)", next: "language-gate" },
          { label: "Fluent but conversationally lost (pragmatics)", next: "pragmatic-path" },
          { label: "Speaks at home, silent at school", next: "mutism-path" },
        ],
      },
      {
        id: "speech-path",
        question: "The intelligibility problem: which machinery is failing?",
        recommendation: "Hearing first (otoscopy and audiometry), then the oromotor and structural review: cleft palate (post-repair velopharyngeal incompetence and fistulas — therapy from birth, feeding first), dysarthria (the slow, weak, uncoordinated speech of cerebral palsy — a neurological route), phonological disorder (systematic error patterns with intact musculature — often resolves with therapy), apraxia (inconsistent errors plus drooling, feeding, blowing), stuttering (repetitions, blocks, prolongations — with the 2–5-year normal non-fluency window held in mind). SLT referral; the structural and neurological channels to their specialists.",
      },
      {
        id: "language-gate",
        question: "Language below age. Before any label: the exclusions that change everything.",
        branches: [
          { label: "Hearing not yet tested (or ears full)", next: "hearing-first-path" },
          { label: "Hearing clear, non-verbal ability average, no cause found", next: "sli-workup" },
          { label: "Global developmental delay / syndrome known", next: "syndrome-path" },
          { label: "Language was acquired, then lost", next: "regression-path" },
        ],
      },
      {
        id: "hearing-first-path",
        question: "The hearing-first rule.",
        recommendation: "Otoscopy and audiometry before ANY behavioural label: untreated chronic otitis media with conductive loss is among the commonest reversible causes of apparent language delay in Indian clinics — treat the ears, reassess the language, and only then formulate. The bilingual assessment runs alongside: strongest language, interpreter where needed, the both-language discipline deciding acquisition load against impairment.",
      },
      {
        id: "sli-workup",
        question: "Specific language impairment: the discrepancy debate in action.",
        recommendation: "Formal language assessment against chronological age and non-verbal IQ — strict ICD-10 criteria (language ≥2 SD below chronological age and ≥1 SD below non-verbal IQ) against the liberal (non-verbal IQ ≥75) — remembering the trade-off: strict misses poor-outcome children, liberal pathologises the low-normal tail. Then the checklist domains, the risk stratification (severity, receptive involvement, low IQ, low SES against pure speech difficulty, high IQ, high SES, specialist support), and the SLT referral — prioritised past age 5. Classroom adaptations started while waiting: short steps, forced choice, visual supports.",
      },
      {
        id: "syndrome-path",
        question: "The explained tier: the syndrome patterns.",
        recommendation: "Language parallel to the learning disability — Down (vocabulary stronger than grammar), Williams (the fluent surface misleading), fragile X on the list — with the paediatric developmental pathway owning the medical care and SLT set to the pattern, not the label; profound disability makes communicative intent itself the goal; the cleft pathway from birth where it rides along.",
      },
      {
        id: "regression-path",
        question: "The red flag: language that was acquired and then lost.",
        recommendation: "Urgent paediatric neurological referral — the Landau–Kleffner window (acquired aphasia with seizures, usually ages 3–7, receptive language devastated) and the wider acquired causes (head injury, cerebrovascular lesions, cerebral infection, tumours, epilepsy). Regression is investigated, never watched; the EEG belongs to the neurologist, the formulation to the team.",
      },
      {
        id: "pragmatic-path",
        question: "Fluent grammar, good vocabulary, failing conversation.",
        recommendation: "The PLI boundary: initiating, humour and sarcasm, giving the listener adequate information, contextual adaptation, non-verbal communication — WITHOUT autism's repetitive behaviours and interests means pragmatic impairment alone does not diagnose autism. Assess both sides honestly (the autism discriminants: reciprocity history, sensory profile, the repetitive behaviours), treat the language component (the social difficulty often shrinks with it), and re-look after treatment before any autism verdict.",
      },
      {
        id: "mutism-path",
        question: "Home speech, school silence: two questions before the ladder.",
        branches: [
          { label: "Language competence verified, duration met (bilingual: 6 months, both languages)", next: "mutism-ladder" },
          { label: "Language competence never assessed", next: "mutism-verify-path" },
        ],
      },
      {
        id: "mutism-verify-path",
        question: "Verify before assuming pure anxiety.",
        recommendation: "Non-verbal language testing — the nods, points and writing carry the assessment: comprehension age-appropriate confirms the mutism formulation; measurable articulation, expressive or receptive difficulty re-routes part of the plan to SLT. Many selectively mute children have real language difficulties riding under the anxiety — the verification step exists so they are not missed twice.",
      },
      {
        id: "mutism-ladder",
        question: "The multi-modal ladder, rung by rung.",
        recommendation: "Stimulus fading (speech with the mother in the empty classroom after hours, gradually widened), shaping and contingency management, systematic desensitisation, self-modelling; teacher coaching (accept nods and writing, no pressure to speak, yes/no questions first); the family session (the anxiety atmosphere lowered, the similarly reticent father recruited as ally, not suspect); review at 4 weeks with fluoxetine held in reserve — reported but unreplicated, never the first rung. Early treatment: untreated mutism predicts later social anxiety.",
      },
      {
        id: "priority-gate",
        question: "Every pathway ends here: the age-5 gate.",
        recommendation: "Difficulties still impairing communication after age 5 are significant and warrant prioritised intervention — the critical-age rule that converts the whole tree into one clinical instinct: under 5, screen and support; past 5, the referral is prioritised, the classroom adapted (short steps, forced choice, visual supports), the family taught the six principles, and the long horizon opened — risk and resilience stratified, the post-16 tier planned, the RPwD pathway opened where it applies.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Labelling the behaviour before screening the language",
      why: "The 'oppositional' or 'not concentrating' referral absorbs the whole formulation — the incomprehension behind the refusal is never tested, and the child is treated for a conduct problem he does not have.",
      correction: "One structured pass with the identification checklist on every behaviour-referred, school-failing or socially struggling child — it rewrites the management plan more often than any investigation in child guidance clinics.",
    },
    {
      mistake: "Skipping the hearing test",
      why: "Untreated chronic otitis media with conductive loss hides behind the 'delay' label for years — among the commonest reversible causes in Indian clinics, and the cheapest to find.",
      correction: "Otoscopy and audiometry before any behavioural label, at the first visit — the hearing-first rule admits no exceptions in this territory.",
    },
    {
      mistake: "Calling bilingual acquisition a disorder (or hiding impairment behind it)",
      why: "Both errors are routine in multilingual India: normal code-switching and home-language delay pathologised as impairment; genuine home-language impairment excused as 'he'll catch up with English'.",
      correction: "Assess in the child's strongest language and apply the both-language discipline: impairment shows in both languages, acquisition load in one — the single question that separates the two futures.",
    },
    {
      mistake: "Diagnosing autism from pragmatic difficulty alone",
      why: "The fluent child with conversational failure looks autistic to the casual ear — and the label ends the assessment instead of starting it.",
      correction: "The PLI boundary rule: pragmatic impairment alone does not diagnose autism — seek the repetitive behaviours and the reciprocity history, treat the language component, and re-look after treatment before the verdict.",
    },
    {
      mistake: "'Wait and see' past the fifth birthday",
      why: "The year of watching is the compounding cascade's best year — language → literacy → attainment → self-esteem → behaviour, each stage loading the next while the adults reassure each other.",
      correction: "The critical-age rule: difficulties still impairing communication after age 5 are significant and warrant prioritised intervention — the referral is prioritised, not postponed.",
    },
    {
      mistake: "Reading selective mutism as stubbornness (or treating it as pure anxiety without verifying language)",
      why: "The stubbornness verdict invites punishment, which deepens the silence; the pure-anxiety assumption misses the measurable articulation, expressive and receptive difficulties many of these children carry.",
      correction: "The two-step: verify language competence with non-verbal testing first, then the graded ladder — stimulus fading, teacher coaching, the family session — with fluoxetine held in reserve (reported but unreplicated) and early treatment the rule.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The three-domain map: speech (intelligibility), language (vocabulary, word-finding, syntax), social communication (pragmatics) — with one bedside example each.",
        "Define SLI and quote its prevalence: language impaired out of proportion to normal non-verbal IQ with no identifiable cause; heritable; 3–7% of children.",
        "The critical age: difficulties still impairing communication after age 5 are significant — and the logic behind the rule (language is the medium of schooling).",
        "Selective mutism: the five criteria, the social anxiety core, and the bilingual duration rule (more than 1 month; 6 months in both languages).",
        "Landau–Kleffner syndrome: acquired aphasia with seizures, usually ages 3–7, receptive language devastated — the regression red flag.",
        "The ADHD language triad: receptive, expressive and pragmatic difficulties — excessive talking, poor topic maintenance.",
      ],
      practical: [
        "Run the identification checklist on a school-age child — speech, comprehension, production, social communication, school functioning — and state the referral decision.",
        "Demonstrate the communication adaptations live: forced-choice questions, one-step instructions with visual support, and the honest 'I didn't catch that — show me' response to the unintelligible child.",
      ],
      longAnswer: [
        "A 6-year-old is referred for 'oppositional behaviour and not concentrating': assessment and management, including the language screen that changes the formulation (the evergreen essay — the map, the hearing rule, the criteria debate, the age-5 gate).",
        "Selective mutism in a 5-year-old: diagnostic criteria and multi-modal management.",
      ],
    },
    neetPg: {
      highYield: [
        "THE PREVALENCE PAIR: speech and language difficulties up to 24.6% by inclusive criteria; SLI 3–7% (the tighter the discrepancy criteria, the fewer the cases); selective mutism ~0.75–0.8%, slightly more common in girls, onset typically 3–5 years.",
        "THE CRITICAL AGE: impairment still present after age 5 = significant, prioritise intervention — the rule every exam tier loves.",
        "THE SLI CRITERIA DEBATE: ICD-10 strict (language ≥2 SD below chronological age AND ≥1 SD below non-verbal IQ) versus liberal (non-verbal IQ ≥75) — strict misses poor-outcome children, liberal pathologises the low-normal tail.",
        "THE ADHD LANGUAGE TRIAD: receptive, expressive and pragmatic (excessive talking, poor topic maintenance) — ADHD is the psychiatric disorder most commonly reported with speech and language difficulties.",
        "THE MUTISM GATE: home speech, school silence, more than 1 month (bilingual: 6 months, both languages); not a communication disorder, pervasive developmental disorder or psychosis; social anxiety the core.",
        "THE PLI BOUNDARY: fluent grammar and vocabulary with inappropriate conversational behaviour WITHOUT the non-verbal repetitive behaviours of autism — pragmatic impairment alone does not diagnose autism.",
        "THE DIAGNOSES LIST: cleft palate (post-repair velopharyngeal incompetence), dysarthria (cerebral palsy), developmental phonological disorder (systematic error patterns), childhood apraxia of speech (inconsistent errors plus oromotor signs), fluency disorders, the syndrome patterns (Down vocabulary stronger than grammar; Williams fluent-but-impaired), Landau–Kleffner (aphasia + seizures, usually 3–7).",
        "THE OUTCOME GRID: risk = severity, receptive involvement, low IQ, low SES; resilience = pure speech difficulty, high IQ, high SES, specialist support — adult mid-30s outcomes adversely affected (employment, relationships, independent living, health).",
        "THE HEARING RULE: exclude hearing loss first, always — the untreated otitis media behind the 'delay'.",
      ],
      pyqConcepts: [
        "The age-5 critical-age question — the one-line answer that appears in every exam tier.",
        "The SLI definition short answer — the exclusion/discrepancy structure with the criteria debate as the discussion tail.",
        "The selective mutism duration trap — more than 1 month, 6 months for bilingual children, and never the first month of school.",
        "The Williams syndrome vignette — the fluent, sociable surface misleading the examiner into missing the impairment.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 6-year-old in an English-medium school is referred for 'oppositional behaviour and not concentrating': the teacher reports he 'refuses to do work and fights at line-up'; the screening interview finds speech barely intelligible in sentences, inability to carry out two-step verbal instructions without prompting, a narrow filler-filled vocabulary and no narrative; bilateral conductive loss from untreated otitis media with effusion; receptive and expressive language far below chronological age with average non-verbal IQ — the formulation landing on specific language impairment presenting as behaviour, the hearing treated first, the school-delivered SLT programme with home carryover, the classroom adaptations (short steps, visual supports, forced choice) and the teacher psychoeducation that changes the label from naughty to struggling: the behaviour was the referral ticket, the language was the diagnosis.",
        "A 5-year-old has never spoken a word at school in six months though she chatters at home; the teachers assume autism and the family has been told she is stubborn: at home she speaks in full sentences; at clinic she nods, points and writes her name; hearing and language comprehension age-appropriate on non-verbal testing; no restrictive or repetitive interests; a shy, watchful temperament with a similarly reticent father — the bilingual home applying the 6-month both-languages criterion, the formulation landing on selective mutism with social anxiety at the core, and the management running the multi-modal ladder: stimulus fading with the mother in the classroom after hours, teacher coaching (accept nods and writing, no pressure, yes/no first), the family session recruiting the father as ally, the 4-week review with fluoxetine held in reserve — speech returning at school over the following term: the anxiety costume, not autism and not stubbornness.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "SLI: language impairment disproportionate to non-verbal IQ within the normal range; prevalence 3–7%.",
        "The critical age: 5 years — persisting impairment is significant and prioritised.",
        "Selective mutism: talks at home, silent at school; anxiety condition, not defiance or autism.",
        "Hearing loss excluded first in every language delay.",
        "ADHD: receptive, expressive and pragmatic language difficulties.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "One checklist pass rewrites more formulations than any investigation in the child guidance clinic — the behaviour-gateway screening habit is the single highest-yield reflex this territory teaches.",
        "The speech and language therapist belongs INSIDE the CAMHS team — identifying communication difficulties, assessing their impact on mental health, delivering direct and indirect intervention: the chapter's modern service discovery.",
        "The both-language discipline in bilingual assessment: impairment shows in both languages, acquisition load in one — the question that prevents both the false certificate and the false reassurance.",
        "The compounding cascade (language → literacy → attainment → self-esteem → behaviour) is the argument for treating past age 5 with energy rather than sympathy — every transition is an ambush point.",
        "The RPwD certificate pathway for speech and language impairment — scribes, extra time, exemptions — is clinical work: the school career's protection, opened at the district hospital, years before the board year makes it urgent.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The naughty boy who couldn't follow instructions",
      presentation: "The 'oppositional' six-year-old whose refusal was incomprehension — and whose line-up fights happened exactly where verbal instructions move fastest.",
      initialPresentation: "A 6-year-old boy in an English-medium school was referred for 'oppositional behaviour and not concentrating' — the teacher reported that he 'refuses to do work and fights at line-up'. The screening interview found speech barely intelligible in sentences, inability to carry out two-step verbal instructions without prompting, a narrow filler-filled vocabulary and no narrative to his history.",
      history: "English-medium school with a home language switch in between; no medical history volunteered beyond 'always behind in talking'; enjoys rough play but conversation is minimal; the family had never had his hearing checked despite years of 'what?' at home.",
      examination: "Speech barely intelligible in sentences (better in single words); two-step verbal instructions not carried out without prompting; vocabulary narrow with fillers ('that thing... you know'); no narrative; hearing testing revealing bilateral conductive loss from untreated otitis media with effusion; language assessment showing receptive and expressive language far below chronological age with non-verbal IQ average.",
      diagnosis: "Specific language impairment presenting as behaviour — the 'refusal' was incomprehension, compounded by untreated bilateral conductive hearing loss from otitis media with effusion.",
      management: "Hearing treatment first; speech and language therapy assessment with a school-delivered programme and home carryover; classroom adaptations (instructions broken into short steps, visual supports, forced-choice questions); teacher psychoeducation — the label changing from naughty to struggling.",
      outcome: "The outcome that mattered first arrived at the feedback session: the formulation replaced the verdict, the hearing was treated, and the programme began its long course with the classroom adapted around it — the note's own teaching points standing as the case's conclusion: the behaviour is the referral ticket, the language is the diagnosis; hearing exclusion first; the school-medium switch had buried the problem.",
      teachingPoints: [
        "The behaviour is the referral ticket; the language is the diagnosis — the association runs both ways and the screen finds it.",
        "Hearing exclusion first, always: the bilateral conductive loss from untreated otitis media with effusion was reversible and hiding in plain 'what?'.",
        "The school-medium switch buries the problem — an English-medium classroom hides a home-language delay as 'adjustment trouble'.",
        "The classroom adaptations (short steps, visual supports, forced choice) are management, not consolation — the teacher is the co-therapist.",
      ],
    },
    {
      title: "The girl who speaks at home",
      presentation: "Six months of total school silence, full sentences at the kitchen table — and the 'she is stubborn' verdict that preceded the correct one.",
      initialPresentation: "A 5-year-old girl was brought by her parents after her school reported that she had never spoken a word there in six months, though she chatters freely at home; the teachers assumed autism and the parents had been told 'she is stubborn'. At clinic she nodded, pointed, and wrote her name; at home she speaks in full sentences.",
      history: "A bilingual home (the 6-month both-languages duration criterion applied and satisfied); a shy, watchful temperament with a similarly reticent father; no developmental concerns beyond the silence; no history of trauma or loss.",
      examination: "Speaks in full sentences at home (parent-recorded); at clinic nods, points and writes her name; hearing and language comprehension age-appropriate — verified with non-verbal testing; no restrictive or repetitive interests; participation-without-speech throughout the assessment.",
      diagnosis: "Selective mutism — the bilingual duration criterion met (6 months in both languages), social anxiety the predominant feature, language competence verified before the anxiety attribution.",
      management: "Multi-modal by aetiology: stimulus fading (speech with the mother in the classroom after hours, gradually widening), teacher coaching (accept nods and writing, no pressure to speak, yes/no questions before open ones), a family session lowering the anxiety atmosphere and recruiting the similarly reticent father as ally in shared temperament, and a 4-week review with fluoxetine held in reserve.",
      outcome: "Speech returned at school over the following term — the graded ladder working exactly as its design predicts when started early.",
      teachingPoints: [
        "Selective mutism is anxiety, not autism and not stubbornness — the setting, not the ability, fails.",
        "The bilingual duration rule (6 months in both languages) exists for exactly this presentation and must be applied, not assumed.",
        "Verify language competence with non-verbal testing before attributing the silence purely to anxiety — many of these children carry real language difficulties.",
        "The fading hierarchy works from easy to hard (mother, empty classroom, after hours) — and untreated mutism predicts later social anxiety.",
      ],
    },
  ],
  clinicalPearls: [
    "The behaviour is the referral ticket; the language is the diagnosis — the association runs both ways and one checklist pass finds it.",
    "Hearing first, always — otoscopy and audiometry before any behavioural label: untreated chronic otitis media is among the commonest reversible causes of apparent 'language delay'.",
    "The critical age: difficulties still impairing communication after age 5 are significant and warrant prioritised intervention.",
    "SLI is 3–7% of children — and the tighter the discrepancy criteria, the fewer the cases: strict criteria miss poor-outcome children, liberal ones pathologise the low-normal tail.",
    "The ADHD language triad: receptive, expressive and pragmatic — excessive talking, poor topic maintenance.",
    "Pragmatic impairment alone does not diagnose autism — and the social difficulty often shrinks when the language difficulty is treated.",
    "Talks at home, silent at school, more than 1 month (bilingual children: 6 months in both languages) — selective mutism: anxiety, not defiance.",
    "The word-finding child's fillers ('stuff', 'thingy') are searching behaviour, not laziness — the phonological memory bottleneck made audible.",
    "'Goed' — the tense-marking error is the syntax deficit's signature and the modular genetic account's phenotype.",
    "Landau–Kleffner: acquired aphasia with seizures, usually ages 3–7, receptive language devastated — regression is investigated, never watched.",
    "Adults with SLI histories in their mid-30s: employment, relationships, independent living and health all adversely affected — the not-benign corrective, with pure speech difficulty, high IQ, high SES and specialist support the resilience markers.",
    "The speech and language therapist belongs inside the CAMHS team — identifying communication difficulties, assessing their mental-health impact, treating directly and indirectly.",
    "Assess in the strongest language and trust the both-language discipline: impairment shows in both languages, acquisition load in one.",
  ],
  highYieldSummary: [
    "Definition and thesis: speech and language difficulties span three domains — speech (intelligibility: phonology, dysarthria, cleft palate, apraxia, stuttering), language (vocabulary, word-finding, syntax) and social communication (pragmatics) — and travel with psychiatric disorders in BOTH directions: primary language impairment elevates behaviour-problem risk, and primary psychiatric disorders (ADHD above all) carry undetected language disorders. Communication is the medium of learning, friendship and self-control — so the presenting complaint is usually the behaviour, the school failure or the silence, not the difficulty itself.",
    "Epidemiology: up to 24.6% of children by inclusive criteria (Law's reviews — the number depends entirely on the definitional bar); SLI 3–7% (the tighter the discrepancy criteria, the fewer the cases); selective mutism ~0.75–0.8%, slightly more common in girls, onset typically 3–5 years; ADHD the psychiatric disorder most commonly reported with speech and language difficulties, with high rates of undetected language disorder across child psychiatric populations generally; India has no equivalent national data — the multilingual structure and thin therapy coverage manufacturing both over- and under-identification.",
    "The core entity: SLI = language delayed or disordered out of proportion to otherwise normal non-verbal intelligence, heritable, no identifiable cause — with the criteria debate as its famous tail (ICD-10 strict: language ≥2 SD below chronological age AND ≥1 SD below non-verbal IQ; liberal: non-verbal IQ ≥75, language often 1 SD below the mean). The measurable deficits: phonological memory, verbal and visuospatial memory, symbolic play — despite normal non-verbal IQ; the genetics targets the processing-deficit account (phonological memory as genetic marker) against the modular account (tense-marking/syntax representational deficits — the 'goed' phenotype).",
    "The difficulty types: speech — cleft (post-repair velopharyngeal incompetence and fistulas; therapy from birth), dysarthria (cerebral palsy's slow-weak-uncoordinated speech), phonological disorder (systematic error patterns, auditory processing implicated, often resolves), apraxia (inconsistent errors plus oromotor signs — drooling, feeding, blowing; reduced babbling), stuttering (repetitions, blocks, prolongations, struggle; secondary avoidance; the 2–5-year normal non-fluency window); language — small vocabularies, word-finding searches with fillers, tense inflection errors, narratives collapsing; pragmatics — initiation, turn-taking, inferring, giving the listener adequate information, self-monitoring; the syndrome patterns — Down (vocabulary stronger than grammar), Williams (fluent-but-impaired), learning disability (language parallel to IQ).",
    "The boundaries: the PLI boundary (fluent grammar with conversational impairment WITHOUT autism's repetitive behaviours — historically 'semantic-pragmatic disorder', now contested ground between SLI and autism; the rule: pragmatic impairment alone does not diagnose autism, and the language component is treatable); the ADHD boundary (the triad: receptive, expressive, pragmatic — excessive talking, poor topic maintenance; each disorder needs its own assessment); the anxiety boundary (selective mutism: five elements — situation-specific refusal with preserved ability, not a communication/PDD/psychotic disorder, more than 1 month excluding the first month of school with 6 months in both languages for bilingual children, functional interference, social anxiety predominant — with language competence verified first).",
    "Diagnosis: the three-domain framework (speech/language/social communication) on two axes (specific versus explained; delayed versus disordered); exclude hearing first, always; the identification checklist (speech — intelligibility, omissions, sentences worse than single words; comprehension — conversations, verbal instructions, time/space concepts; production — vocabulary, complex sentences, narration, fillers; social communication — participation, relevance, appropriateness; plus school functioning and persistence beyond age 5) — any positive triggering referral; and the red flag: regression (Landau–Kleffner — acquired aphasia with seizures, usually 3–7, receptive devastated) is urgent paediatric neurology.",
    "Management: speech and language therapy as the core service across education, health and social care — increasingly embedded WITHIN CAMHS (identifying difficulties, assessing mental-health impact, direct and indirect intervention); the selective mutism ladder (contingency management, shaping and stimulus fading, systematic desensitisation, self-modelling; CBT; family therapy; play/art therapy; SLT as the desensitising adjunct — easy-to-hard tasks in easy-to-hard situations; fluoxetine reported but unreplicated, held in reserve); the communication-facilitation rules (familiar person first, non-verbal accepted, whispering easier, factual/yes-no before feelings); the six adaptation principles (forced choice, short steps, slow delivery, short simple sentences, visual supports, written language remembered impaired too) with the honest-when-unable-to-understand script; the long horizon (risk: severity, receptive involvement, low IQ, low SES; resilience: pure speech difficulty, high IQ, high SES, specialist support; post-16 support; the honest outcome literature — persistence into adolescence and the adverse mid-30s adult outcomes).",
    "The Indian tier: the bilingual rule (strongest-language assessment, interpreter where needed, the both-language discipline, code-switching normal, 'he'll catch up with English' never hiding home-language impairment); the hearing-first rule (otoscopy and audiometry before any behavioural label — untreated chronic otitis media among the commonest reversible causes); the therapy-scarcity model (therapist-designed, parent-and-teacher-delivered programmes with periodic review — the checklist and principles built for that delivery); the RPwD Act certificate pathway (speech and language impairment a specified disability: scribes, extra time, exemptions — mattering more than most clinicians realise); the behaviour gateway (the conduct-labelled arrival; one screening pass changing the plan more often than any investigation); costs approx 2026 (public audiometry inexpensive; private therapy a recurring middle-class expense; the parent-delivered model costing time, not money).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "sld-quiz-1",
      question: "Specific language impairment is defined by:",
      options: ["Language delay with below-average non-verbal intelligence", "Language impairment disproportionate to non-verbal IQ within the normal range, with no identifiable medical, neurological, sensory or functional cause", "Language difficulties caused by hearing impairment", "Any speech difficulty at all"],
      correctIndex: 1,
      explanation: "The exclusion/discrepancy definition — with the ongoing strict-versus-liberal criteria debate about where the thresholds should sit.",
      afterSectionId: "diagnosis",
    },
    {
      id: "sld-quiz-2",
      question: "The critical age for prioritising speech and language intervention, per the hypothesis cited in the chapter:",
      options: ["18 months", "3 years", "5 years", "11 years"],
      correctIndex: 2,
      explanation: "Difficulties still impairing communication after age 5 — school entry — are significant and should be prioritised: language is the medium of schooling.",
      afterSectionId: "mechanism",
    },
    {
      id: "sld-quiz-3",
      question: "Which profile best describes Pragmatic Language Impairment (the SLI–autism boundary group)?",
      options: ["Fluent grammar and vocabulary, but inappropriate conversational behaviour without the non-verbal repetitive behaviours of autism", "Complete mutism at school", "Weak jaw muscles with dysarthria", "Normal language with hearing loss"],
      correctIndex: 0,
      explanation: "Initiating conversations, humour and sarcasm, contextual adaptation and non-verbal communication impaired — but not autistic in the restrictive-behaviour sense; pragmatic impairment alone does not diagnose autism.",
      afterSectionId: "differential",
    },
    {
      id: "sld-quiz-4",
      question: "A 5-year-old speaks fluently at home but has never spoken at school in 8 months; language comprehension is age-appropriate. The most likely diagnosis is:",
      options: ["Autism", "Social anxiety disorder with selective mutism", "Landau–Kleffner syndrome", "Oppositional defiant disorder"],
      correctIndex: 1,
      explanation: "Situation-specific silence with preserved ability, social anxiety core — autism requires pervasive social communication impairment plus repetitive behaviours.",
      afterSectionId: "symptoms",
    },
    {
      id: "sld-quiz-5",
      question: "In ADHD, the speech and language difficulties consistently reported include:",
      options: ["Only motor speech problems", "Receptive and expressive language problems and pragmatic difficulties (excessive talking, poor topic maintenance)", "Only stuttering", "No association at all"],
      correctIndex: 1,
      explanation: "ADHD is the psychiatric disorder most commonly reported with speech and language difficulties — assess for them even when not the presenting complaint.",
      afterSectionId: "differential",
    },
    {
      id: "sld-quiz-6",
      question: "Among adults in their mid-30s with a history of specific language impairment, the long-term studies show:",
      options: ["Complete resolution of all difficulties without exception", "Employment, relationships, independent living and health adversely affected", "Better outcomes than non-impaired peers", "Only speech difficulties persist"],
      correctIndex: 1,
      explanation: "The chapter's central corrective: this is not a benign, self-resolving childhood condition — and the resilience factors (pure speech difficulty, high IQ, high SES, specialist support) mark the better-outcome paths.",
      afterSectionId: "timeline",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the school-entry communication expectations — the five-year gate.", answer: "By school entry, the typically developing child: speaks clearly (intelligible to strangers), understands and builds complex grammar, negotiates and predicts in conversation, converses confidently with adults AND peers, knows letter sounds and reads some words. The point of reciting the list: language is not a school subject but the MEDIUM of every school subject — a child crossing the school gate without this equipment begins failing immediately, and the failure compounds (language → literacy → attainment → self-esteem → behaviour). The clinical translation is the critical-age rule: difficulties still impairing communication after age 5 are significant and warrant prioritised intervention.", topic: "Foundations" },
    { question: "Separate speech, language and social communication difficulties, with one example each.", answer: "SPEECH = intelligibility, the sound machinery: developmental phonological disorder — intact musculature but an atypical sound system with systematic error patterns (always replacing 's' with 'd'). LANGUAGE = the words and the grammar, comprehension and production: word-finding difficulty with searching behaviours — the circumlocution, the fillers ('stuff', 'thingy'), gesture and first-sound substitutions; syntax problems with tense inflections ('goed') and collapsing narratives. SOCIAL COMMUNICATION = pragmatics, the use of language in conversation: the fluent child who cannot judge how much information the listener needs, misreads humour and sarcasm, and monologues on special interests. The separation matters because each domain has its own causes, its own assessments and its own treatment routes — and the three can fail alone or together.", topic: "Clinical practice" },
    { question: "Define SLI, quote its prevalence, and state the strict-versus-liberal criteria trade-off.", answer: "DEFINITION: language delayed or disordered out of proportion to otherwise normal non-verbal intelligence, with no identifiable medical, neurological, sensory or functional cause; heritable; the measurable specific deficits in phonological memory, verbal and visuospatial memory and symbolic play despite normal non-verbal IQ. PREVALENCE: 3–7% of children. THE TRADE-OFF: ICD-10 strict criteria demand language ≥2 SD below chronological age AND ≥1 SD below non-verbal IQ; the liberal position keeps non-verbal IQ ≥75 with language often 1 SD below the mean — strict criteria risk missing children with poor long-term outcomes, liberal criteria risk pathologising the low-normal tail — and the tighter the discrepancy criteria, the fewer the cases counted. The exam moral: the prevalence and the definition are functions of each other.", topic: "Diagnosis" },
    { question: "What is Pragmatic Language Impairment, and what is the practical SLI–autism boundary rule?", answer: "PLI is the profile of fluent grammar and good vocabulary with inappropriate conversational behaviour: impaired initiating, humour and sarcasm misread, contextual adaptation failing, non-verbal communication off — historically labelled semantic-pragmatic disorder within SLI, now sitting on contested ground between SLI and autism. THE RULE: pragmatic impairment alone does not diagnose autism — the discriminator is the non-verbal repetitive behaviours and interests of autism, which PLI children lack. And the rule's therapeutic corollary: any child's social communication difficulty may be compounded by language difficulty that treatment can reduce — so treat the language component and re-look before any autism verdict; in many children the social difficulties shrink when the language improves.", topic: "Differential" },
    { question: "What are ADHD's three language difficulty domains, and what is the psychiatric interface habit they demand?", answer: "THE TRIAD: receptive (understanding below the appearance), expressive (the words and sentences below the thought) and pragmatic difficulties — with the signature of excessive talking and poor topic maintenance. THE HABIT: ADHD is the psychiatric disorder most commonly reported with speech and language difficulties, and undetected language disorder runs at high rates through child psychiatric populations generally — so screen children with ADHD for all three domains even when language is not the presenting complaint, and assess language in ANY child with unexplained behaviour problems, school failure or social difficulty. The interaction runs the other way too: the inattentive child cannot attend to the language stimulation that builds the system — each disorder worsens the other's soil.", topic: "Clinical practice" },
    { question: "Define selective mutism (five elements) and give its core psychological feature.", answer: "THE FIVE ELEMENTS: (1) persistent refusal to talk in certain social situations despite speaking in others — classically talking at home, not at school; (2) not better explained by a communication disorder, a pervasive developmental disorder or psychosis; (3) duration more than 1 month — not the first month of school, and 6 months in both languages for bilingual children; (4) interference with education and social achievement; (5) social anxiety the predominant feature. THE CORE: an anxiety condition — the alarm jamming the voice in specific settings, not defiance and not inability. Two clinical cautions ride with the definition: verify language competence before assuming pure anxiety (many affected children have measurable articulation, expressive and receptive difficulties), and treat early — untreated mutism predicts later social anxiety.", topic: "Diagnosis" },
    { question: "Which factors predict poor versus resilient long-term outcomes?", answer: "RISK (the poor-outcome profile): severity of the difficulty, receptive involvement (understanding affected, not just expression), low IQ, low socioeconomic status — with difficulties persisting beyond age 5 predicting literacy problems, low attainment and poorer adult psychosocial function, and the adult follow-ups finding employment, relationships, independent living and health all adversely affected in the mid-30s. RESILIENCE (the better-outcome profile): pure speech difficulty (language proper spared), high IQ, high SES and specialist support. The grid is not a fortune-teller — it is a prioritisation instrument: it tells the service where the scarce hours go (the receptive, severe, unsupported end), and it tells the family honestly which counterweights are worth building: identification, the right programme, the accommodations, and intervention before the compounding starts.", topic: "Management" },
    { question: "Recite the six communication-adaptation principles for working with language-impaired children.", answer: "(1) Forced-choice answers — offer 'the red one or the blue one?' instead of open questions the child cannot yet answer. (2) Break long instructions into short steps — one thing at a time, in order. (3) Slow delivery with pauses — the processing budget respected. (4) Short simple sentences, familiar vocabulary, no ambiguity. (5) Visual supports — pictures, objects, symbols alongside words. (6) Remember written language is impaired too — never assume the note home did the work the sentence could not. And the companion script for the unintelligible child: show interest, honestly say which parts you did and did not understand, offer choices to narrow the guess, invite showing, pointing or drawing, and try again later without blame. These six are not kindness — they are the treatment's delivery vehicle, and in the Indian model they are the curriculum the parents and teachers deliver between therapist reviews.", topic: "Management" },
  ],
  faqs: [
    { question: "He'll just grow out of it, won't he?", answer: "Some do — the normal non-fluency of 2–5-year-olds resolves spontaneously, and many phonological difficulties resolve with therapy. But many do not: difficulties persisting beyond age 5 predict literacy problems, lower attainment and adult psychosocial difficulty. The 'wait and see' year is the year the compounding cascade does its best work — which is why the critical-age rule exists." },
    { question: "Is it delay or disorder?", answer: "Delay means the child is on the normal path but behind; disorder means the pattern is atypical or stuck. The distinction matters because it changes the prognosis — and it is made by formal assessment, not by watching. The age-5 gate sits on top: past the fifth birthday, either way, a difficulty still impairing communication is significant and gets prioritised." },
    { question: "His behaviour is the problem — why are you looking at language?", answer: "Because the association runs both ways: language-impaired children are at elevated risk of behaviour problems, and behaviour-referred children often carry undetected language disorders. A child who cannot follow the instructions fights where the instructions move fastest — the line-up, the group task. One checklist pass rewrites the formulation more often than any investigation." },
    { question: "Is speech therapy actually available — and does it work?", answer: "Yes and yes. Speech and language therapists assess, diagnose and treat; phonological disorders often resolve with input; and where therapists are scarce — most of India — the realistic model is the therapist-designed, parent-and-teacher-delivered programme with periodic review. The therapy works; the delivery adapts." },
    { question: "Could this be autism?", answer: "Only if the social communication impairment is intrinsic and pervasive — with the repetitive behaviours and interests of autism alongside. Pragmatic difficulty alone does not diagnose autism, and in many children the social difficulties shrink when the language difficulty is treated. Assess both sides, treat the language component, re-look before the verdict." },
    { question: "She talks at home but not at all in school — is she being defiant?", answer: "That is selective mutism: an anxiety condition affecting roughly 0.75–0.8% of children — speech is intact, the setting triggers the silence. It is neither stubbornness nor autism. Treatment is graded and multi-modal, and it works better early; untreated mutism predicts later social anxiety." },
    { question: "Will this affect his adult life?", answer: "Persisting difficulty raises the risks honestly: lower literacy and attainment, bullying, and poorer employment and relationships in adults with SLI histories — the mid-30s follow-ups found employment, relationships, independent living and health all adversely affected. The counterweights are equally real: pure speech difficulty, good IQ, support, and intervention before the compounding starts." },
    { question: "We speak three languages at home — did we cause this?", answer: "No. Multilingual homes do not cause language disorder, and normal code-switching is not impairment. We will assess in your child's strongest language — and the true signal is whether BOTH languages are behind: behind only in the school language is acquisition load; behind in the home language too deserves the full assessment. Stopping the home language would take away the child's strongest channel, not the difficulty." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO ICD-10 — the strict SLI discrepancy criteria paraphrased in the source chapter (language 2 SD below chronological age and 1 SD below non-verbal IQ)" },
      { source: "Royal College of Speech and Language Therapists (RCSLT) — professional standards and service frameworks; the therapist-within-CAMHS model" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.11 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Conti-Ramsden G & Botting N — the longitudinal outcome cohorts of children with SLI" },
      { source: "Clegg J et al. — the adult-outcome follow-up of SLI into the mid-30s (employment, relationships, independent living, health)" },
    ],
    reviews: [
      { source: "Law J et al. — the prevalence reviews of speech and language difficulties (the 24.6% inclusive-criteria figure)" },
      { source: "Bishop DVM — SLI, its subtyping debates and the criteria literature" },
      { source: "Bishop DVM & Norbury CF — Pragmatic Language Impairment: conversational impairment without autism's repetitive behaviours" },
      { source: "Snowling M et al. — literacy relationships and phonological processing" },
      { source: "Johnson M & Wintgens A — the selective mutism management resource (the graded ladder's source lineage)" },
      { source: "Cohan S et al. — the review of selective mutism intervention efficacies" },
      { source: "Johnson C & Beitchman J et al. (as cited in the chapter) — language impairment and later anxiety" },
      { source: "Kuhl P et al. and Dodd B — the speech development and disorder references cited in the chapter" },
    ],
    patientResources: [
      { source: "The identification checklist — the five-domain screen teachers and parents can run, with the age-5 persistence gate" },
      { source: "The RPwD Act 2016 certificate pathway for speech and language impairment — the scribe, extra-time and exemption entitlements" },
      { source: "The therapist-designed, parent-and-teacher-delivered programme model — the Indian delivery architecture with periodic review" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the three domains, the hearing rule, the age-5 gate, the adaptation script, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The domain map, the SLI definition and criteria debate, the boundaries (PLI, ADHD, mutism), the checklist, the age-5 rule.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — the behaviour-gateway craft, the bilingual discipline, the mutism ladder, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The domain map, the prevalence pair, the behaviour gateway.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the three-domain map and the prevalence pair (24.6% broad, SLI 3–7%, mutism 0.75–0.8%) cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The five-year gate, the dissociation, the pragmatic boundary.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why school entry is the critical age and why the capable-looking child cannot follow you." },
    { number: 3, title: "Clinical Practice", description: "The checklist, the criteria debate, the boundaries, the therapy ladder.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the identification checklist, the hearing rule and the six adaptation principles on a real child." },
    { number: 4, title: "Indian Context", description: "The bilingual rule, hearing first, the parent-and-teacher delivery, the certificate.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the both-language discipline and the hearing-first script without notes." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the SLI short-answer and the selective mutism criteria cold, bilingual rule included." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.11 — source chapter mapped; content rewritten and updated beyond it (the Clegg synthesis on children's speech and language difficulties)", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Law J et al. — the prevalence reviews of speech and language difficulties (the 24.6% by inclusive criteria figure)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Bishop DVM — SLI, its subtyping debates and the criteria literature (the strict-versus-liberal discrepancy argument)", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Bishop DVM & Norbury CF — Pragmatic Language Impairment: children with conversational impairment without autism's repetitive behaviours (the boundary group)", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Conti-Ramsden G & Botting N — the longitudinal outcome cohorts of children with SLI (persistence into adolescence and adult life)", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Clegg J et al. — the adult outcomes of SLI (the mid-30s follow-up: employment, relationships, independent living and health all adversely affected)", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Snowling M et al. — the literacy relationships and phonological processing line (the sound-memory bottleneck and its literacy consequences)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Johnson M & Wintgens A — the selective mutism management resource (the graded ladder and communication-facilitation rules)", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Cohan S et al. — the review of selective mutism intervention efficacies (the multi-modal evidence tier)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Johnson C & Beitchman J et al. (as cited in the chapter) — language impairment and later anxiety (the mutism-outcome lineage)", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Kuhl P et al. and Dodd B — the speech development and disorder references cited in the chapter (the acquisition and phonology tier, incl. the apraxia debate)", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Royal College of Speech and Language Therapists (RCSLT) — professional standards and service frameworks (the SLT core service and the within-CAMHS model)", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S13", source: "The Indian clinical layer — the RPwD Act 2016 speech-and-language-impairment provisions and certificate pathway, bilingual/multilingual assessment practice, the otitis-media-first audiology discipline, therapy access geography and costs (approx 2026)", sourceType: "government", year: "2016 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The map and the thesis: difficulties span speech (intelligibility — phonology, dysarthria, cleft palate, apraxia, stuttering), language (vocabulary, word-finding, syntax) and social communication (pragmatics); communication is the medium of learning, friendship and self-control, so children must be competent communicators before school starts — and the difficulty presents as behaviour, school failure or silence.", grade: "established", sources: ["S1"] },
    { text: "The bidirectional association: children with primary language impairment are at elevated risk of behaviour problems; children with primary psychiatric disorders (ADHD, selective mutism) carry undetected language disorders; undetected language disorder is common in child psychiatric populations — the behaviour-gateway finding.", grade: "established", sources: ["S1", "S10"] },
    { text: "Epidemiology: speech and language difficulties up to 24.6% of children by inclusive criteria; SLI 3–7% with the tighter the discrepancy criteria the fewer the cases; selective mutism ~0.75–0.8%, slightly more common in girls, onset typically 3–5 years; ADHD the psychiatric disorder most commonly reported with speech and language difficulties.", grade: "established", sources: ["S1", "S2"] },
    { text: "SLI defined: language delayed or disordered out of proportion to otherwise normal non-verbal intelligence with no identifiable cause; heritable; specific cognitive deficits in phonological memory, verbal and visuospatial memory, and symbolic play; the strict ICD-10 criteria (language ≥2 SD below chronological age and ≥1 SD below non-verbal IQ) against the liberal (non-verbal IQ ≥75) — strict risking missing poor-outcome children, liberal risking pathologising the low-normal tail.", grade: "established", sources: ["S1", "S3"] },
    { text: "The genetics of SLI targets two accounts — the general processing-deficit account (phonological memory deficit as genetic marker) and the modular account (tense-marking and syntax representational deficits) — rival hypotheses, presented as open.", grade: "proposed", sources: ["S3", "S7"] },
    { text: "The critical-age hypothesis and the compounding cascade: language is the medium of schooling, so failure compounds (language → literacy → attainment → self-esteem → behaviour); difficulties still impairing communication after age 5 are significant and warrant prioritised intervention.", grade: "established", sources: ["S1", "S7"] },
    { text: "Pragmatic Language Impairment: fluent grammar and vocabulary with inappropriate conversational behaviour (initiating, humour and sarcasm, contextual adaptation, non-verbal communication) WITHOUT the non-verbal repetitive behaviours of autism — historically semantic-pragmatic disorder within SLI, now on contested ground between SLI and autism; pragmatic impairment alone does not diagnose autism, and the social difficulty may be compounded by treatable language difficulty.", grade: "established", sources: ["S3", "S4"] },
    { text: "The ADHD language triad: receptive, expressive and pragmatic difficulties — excessive talking, poor topic maintenance — with the assessment habit that follows: screen ADHD children for language even when not the presenting complaint, and assess language in any child with unexplained behaviour or school failure.", grade: "established", sources: ["S1"] },
    { text: "Selective mutism: persistent refusal to talk in certain social situations despite speaking in others, not better explained by a communication disorder, pervasive developmental disorder or psychosis; more than 1 month (not the first month of school; bilingual children 6 months in both languages); interference with education and social achievement; social anxiety predominant; many affected children have measurable articulation, expressive and receptive difficulties; treatment multi-modal (contingency management, shaping and stimulus fading, systematic desensitisation, self-modelling, CBT, family therapy, play/art therapy, SLT hierarchy) with fluoxetine's success reported but unreplicated.", grade: "established", sources: ["S1", "S8", "S9"] },
    { text: "Long-term outcomes: the difficulties persist — into adolescence (literacy, attainment, friendships, arrest rates in the cohorts) and adult life; adults with SLI histories in their mid-30s show employment, relationships, independent living and health all adversely affected; the risk profile is severity, receptive involvement, low IQ and low SES; the resilience profile is pure speech difficulty, high IQ, high SES and specialist support.", grade: "established", sources: ["S5", "S6"] },
    { text: "The acquired tier: head injury, cerebrovascular lesions, cerebral infection, tumours and epilepsy — including Landau–Kleffner syndrome (acquired aphasia with seizures, usually ages 3–7, receptive language devastated); regression of acquired language is a red flag for urgent paediatric neurological referral.", grade: "established", sources: ["S1", "S11"] },
    { text: "The service model: speech and language therapy is the core service, working across education, health and social care — schools (statements of special educational needs, individual learning plans), community programmes, child development centres, and increasingly within CAMHS teams (identification, mental-health impact assessment, direct and indirect intervention); phonological disorders often resolve with therapy input.", grade: "supported", sources: ["S1", "S12"] },
    { text: "The Indian tier: no equivalent national prevalence data; the bilingual assessment rule (strongest language, interpreter where needed, normal code-switching not disorder, genuine home-language impairment the true signal); hearing first always (untreated chronic otitis media with conductive loss among the commonest reversible causes — otoscopy and audiometry before any behavioural label); the therapist-designed, parent-and-teacher-delivered delivery model; the RPwD Act 2016 specified-disability provisions and certificate pathway; costs approx 2026.", grade: "supported", sources: ["S13"] },
  ],
};
