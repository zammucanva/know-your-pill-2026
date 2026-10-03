import type { PsychiatryCourse } from "./types";

/**
 * DYNAMIC PSYCHOTHERAPY — THE PROCEDURAL UNCONSCIOUS — canonical
 * Psychiatry course (migration batch 14, Group P — treatment methods).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/dynamic-psychotherapy.md — untouched
 * foundation), re-researched against current guidance (Malan's
 * two-triangle brief-therapy lineage, Davanloo's ISTDP, the
 * Leichsenring/Abbass equivalence band, Shedler's 2010 synthesis
 * read with its critics, Bateman & Fonagy's MBT trials, Kernberg/
 * Clarkin/Yeomans TFP, the Oslo LPP cohort, the Bose–Freud
 * correspondence) with per-claim provenance.
 *
 * Drug routes: none — the note assigns no medication a clinical
 * role in dynamic psychotherapy itself ("no tablet yet made
 * teaches a new way of relating"); the comorbid-episode tier
 * belongs to the mood- and anxiety-disorder courses, drugLinks
 * stays empty, and the position is recorded in contentGaps.
 */
export const dynamicPsychotherapyCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "dynamic-psychotherapy",
  title: "Dynamic Psychotherapy",
  shortName: "Dynamic Therapy",
  kind: "concept",
  category: "Treatment Methods",
  groupLetter: "P",
  groupName: "Treatment methods",
  learningPath: ["Psychiatry", "Treatment Methods", "Dynamic Psychotherapy"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The procedural unconscious: automatic relational habits reworked in a live relationship",

  summary:
    "Dynamic psychotherapy treats the procedural unconscious, the relational habits laid down before words, through interpretation and new experience within the therapeutic relationship. Defences and transference become clinical data in every encounter.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Explain the unconscious in its modern, plain form: not a hidden basement but automatic relational habits (procedures learned before words) and explain why advice cannot retrain them.",
    "Name and recognise the common defence mechanisms in everyday clinical encounters, and use them as diagnostic information rather than examination trivia.",
    "Define transference and countertransference, and spot both in a five-minute outpatient encounter, including the feeling a patient reliably produces in staff.",
    "Describe the architecture of psychodynamic work: the frame, free association, the here-and-now pattern, interpretation, working through, and why the rupture is the treatment moment.",
    "Draw Malan's two triangles: the triangle of conflict (impulse – anxiety – defence) and the triangle of person (current figure – therapist – original figure), and explain how brief dynamic therapy compresses the work into 16–40 sessions.",
    "State the honest evidence position: effects for dynamic therapy in common disorders and personality pathology, roughly on par with other bona fide therapies for many, with a particular role for complex, chronic, relational presentations, and say plainly what remains case-series.",
    "Place dynamic therapy in India: the therapy-desert reality, the Indian psychoanalytic tradition (one of the oldest outside Europe), training routes, fees, the family seam, and the referral question every psychiatrist actually faces.",
  ],
  quickFacts: [
    { label: "The unconscious, updated", value: "An autopilot, not a basement", detail: "Most of what the mind does never reaches words: a child learns how relationships work years before language can record it, stored as procedures like bicycle-riding; the pledge lives in the verbal system while the pattern lives in the procedural one" },
    { label: "The clinical engine", value: "Impulse → anxiety → defence", detail: "Malan's triangle of conflict: the unbearable feeling triggers anxiety, muted by a defence; the triangle of person links current figure, therapist and original figure, both triangles in one good interpretation" },
    { label: "Defences are clinical data", value: "Read like a fever pattern", detail: "Primitive (splitting, projective identification, borderline organisation) through neurotic (repression, somatisation, intellectualisation) to mature (humour, sublimation, altruism); the rung used is diagnostic of personality organisation, never a moral grade" },
    { label: "The exportable instrument", value: "Countertransference", detail: "The clinician's own feelings toward the patient (rescue-longing, dread, contempt, sleepiness) are data induced by the patient's procedures; it works in a three-minute OPD interaction as well as a fifty-minute hour" },
    { label: "The brief version", value: "16–40 weekly sessions", detail: "Malan's compression logic: agree early on ONE core conflict pattern, tie every session to it, work the transference actively, accept partial rather than total character change. Davanloo's intensive format descends from it" },
    { label: "The honest evidence", value: "Roughly on par with CBT", detail: "Meta-analyses of short-term dynamic therapy for the common disorders find effect sizes in the same band as CBT with no consistent winner, and a sleeper effect: gains continuing after therapy ends; MBT and TFP have randomised-trial support in borderline personality" },
    { label: "The Indian story", value: "1922, Bose of Calcutta", detail: "Girindrasekhar Bose corresponded with Freud from the 1920s and founded the Indian Psychoanalytic Society in 1922 (the first psychoanalytic body outside Europe and North America) dissenting from the Oedipal triangle on joint-family grounds" },
    { label: "The Indian price", value: "₹800–3,000 metro private", detail: "Approx 2026; NGO and institute clinics slide from ₹100–500, a few supervised training-clinic seats free: long-term weekly work is a middle-and-upper-class purchase, and the class bias in access is a fact to say aloud" },
  ],
  knowledgeGraph: [
    { label: "Group Therapy", type: "condition", href: "/psychiatry/group-therapy/", note: "The same relational engine run in a group: interpersonal learning and the corrective emotional experience the dynamic tradition supplied" },
    { label: "Couples Therapy", type: "condition", href: "/psychiatry/couples-therapy/", note: "The pattern worked where it lives: the repeated couple dance read through a systemic lens" },
    { label: "Family Therapy", type: "condition", href: "/psychiatry/family-therapy/", note: "Where the family-embedded self is the unit. The Indian seam this course works from the individual side" },
    { label: "Therapeutic Communities", type: "condition", href: "/psychiatry/therapeutic-communities/", note: "The relationship-as-treatment principle scaled to a whole institution" },
    { label: "Psychiatric Rehabilitation", type: "condition", href: "/psychiatry/psychiatric-rehabilitation/", note: "Working with the intact part of the personality: the psychodynamic founding idea of rehabilitation itself" },
    { label: "Treating Personality Disorders", type: "condition", href: "/psychiatry/personality-disorder-treatment/", note: "The manualised dynamic descendants in full trial detail (MBT, TFP, schema-focused therapy) with the organised service wrap" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The comorbid-episode tier: treat the episode in front of you; the pharmacotherapy lives there, not here" },
    { label: "Recovered & False Memories", type: "condition", href: "/psychiatry/recovered-memories/", note: "What unrestrained suggestive technique can manufacture: the reason the frame, neutrality and evidence discipline exist" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The implicit emotional-learning machinery: the system that learns relationships before words and relearns them inside a live one" },
    { label: "Medial prefrontal cortex", type: "brain-region", href: "#brain", note: "The regulation and reappraisal circuit: the new learning that repeated answered patterns installs" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The mechanism of dynamic therapy is the mechanism of procedural learning itself. A child learns how relationships work (how closeness feels, what happens after anger, whether needs get met) years before language is available to record it; this early knowledge is stored as procedures, the way bicycle-riding is stored, and it runs automatically ever after. When a procedure-encoded feeling becomes unbearable, the mind does not merely not-think it: it converts it, and the conversions are the defence mechanisms, as individual as fingerprints, and readable as data about the underlying condition. The first relationships supply the template that later runs on every new figure, doctors included (transference); the clinician's own emotional responses are often induced by the patient's procedures and are therefore information (countertransference). The therapy's wager: procedural learning can only be re-learned procedurally; inside a live relationship, over time, with the old pattern activated (it will appear toward the therapist) and answered differently (interpretation plus new experience), dozens of times in dozens of moods, until the procedural system actually updates (working through). That is why it is slow, why it is not replaceable by a lecture, and why it has a duration rather than a course length. The frame (same time, same room, same duration, cancellations spoken about) is the experimental constant against which the automatic pattern shows itself, including in how the frame itself is treated.",
    steps: [
      "Procedural learning before words: the child's relational knowledge is laid down as procedures, not sentences; the modern, plain version of the unconscious, and the reason a sincere pledge ('I will never again fall for someone who needs saving') cannot reach the pattern that produces the identical choice again.",
      "The triangle of conflict: the unacceptable feeling (impulse) triggers anxiety, which the defence mutes (repression, somatisation, intellectualisation, splitting and the rest) each conversion producing its characteristic symptom shape (somatisation, inhibition, withdrawal, perfectionism).",
      "The triangle of person: the template from the first relationships runs on new figures (the current figure, the therapist, the original figure) which is why the pattern reliably appears live in the room rather than only in the history.",
      "Countertransference as induced data: the clinician's rescue-longing, dread, contempt or sleepiness is produced by the patient's procedures; the discipline is to feel it, own it and use it, never to act it out and never to pretend it is absent.",
      "Interpretation: the offered link that names the running pattern aloud, tentatively, at the moment it runs; connecting feeling, defence and history: Malan's two triangles in one sentence.",
      "Working through: one correct interpretation changes almost nothing; the pattern must be met, named and answered dozens of times in dozens of moods before the procedural learning updates; the honest reason dynamic therapy has a duration, not a course length.",
      "The frame as experimental constant: same time, same room, same duration, cancellations spoken about, not bureaucracy but the stable background against which the automatic pattern (the late-comer, the gift-bringer, the bill-ignorer) declares itself, and the vehicle of the corrective relational learning.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala-dynamic", name: "Amygdala (the pre-verbal learner)", role: "Rapid, implicit emotional learning laid down before language: the machinery that encodes how relationships feel and fires the anxiety vertex of the triangle of conflict; re-learned only through new emotional experience, not explanation.", grade: "supported" },
    { id: "mpfc-dynamic", name: "Medial prefrontal cortex (the reappraisal circuit)", role: "Top-down regulation and reappraisal: the circuit the repeated answered pattern gradually recruits, converting raw alarm into something nameable; the neural face of working through.", grade: "supported" },
    { id: "hippocampus-dynamic", name: "Hippocampus (the contextual narrator)", role: "Declarative, contextual memory: the system that advice, insight and lectures speak to; the dissociation between it and the procedural tier is why verbal understanding alone does not change patterned behaviour.", grade: "supported" },
    { id: "acc-dynamic", name: "Anterior cingulate (the conflict monitor)", role: "The conflict-detection signal when impulse and defence collide: the felt anxiety that the defence exists to mute; the internal alarm the therapist watches for in the here-and-now.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The affect-regulation dimension the defended life rides on, and the comorbid-episode tier's chemistry, treated in the mood-disorder courses, not here.", grade: "supported" },
    { name: "Noradrenaline", symbol: "NA", role: "The alarm chemistry of the anxiety vertex: the arousal that announces an impulse pushing toward expression, muted by the defence in the moment.", grade: "proposed" },
    { name: "Dopamine", symbol: "DA", role: "The reinforcement-learning system that laid the original procedures down, and the one new relational experience must eventually write through.", grade: "proposed" },
    { name: "Oxytocin", symbol: "OT", role: "The attachment system's chemistry: the trust a stable, boundaried frame recruits; the biology underneath 'a relationship built on reliability can itself correct old learning'.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "triangle-conflict-pathway",
      name: "The triangle of conflict (feeling to symptom shape)",
      steps: [
        { label: "The impulse", detail: "The feeling that is unbearable: rage at a dying parent, envy of a sibling, dependence the world will not allow" },
        { label: "The anxiety", detail: "The signal that the feeling is approaching expression: the internal alarm the mind must mute" },
        { label: "The defence", detail: "The conversion: repression, denial, projection, splitting, displacement, reaction formation, somatisation, intellectualisation, acting out, as individual as fingerprints" },
        { label: "The symptom shape", detail: "The chronically deployed defence producing its characteristic presentation: the 'gas' that rises with every mention of the arranged marriage, the workup that will not stop" },
      ],
      clinicalManifestation: "The somatic screen in the ten-minute OPD: the body transcribing a conflict nobody has asked after.",
      grade: "supported",
    },
    {
      id: "relearning-pathway",
      name: "The re-learning pathway (why live relationship corrects)",
      steps: [
        { label: "The frame holds", detail: "Same time, same room, same duration: the experimental constant the automatic pattern will eventually violate" },
        { label: "The pattern activates in the room", detail: "The need to please, the fear of being a burden, the waiting for the trap: running on the therapist as on everyone else" },
        { label: "The pattern is named and answered", detail: "Interpretation at the moment it runs, plus the new experience: the test answered with neither retaliation nor flight" },
        { label: "Repetition updates the procedure", detail: "Met, named and answered dozens of times in dozens of moods: working through: change that holds" },
      ],
      clinicalManifestation: "The man who tests every caregiver until they abandon him: met, for once, by someone who stays; treatment begins precisely there.",
      grade: "proposed",
    },
    {
      id: "compression-pathway",
      name: "The compression pathway (brief dynamic therapy)",
      steps: [
        { label: "One core conflict agreed early", detail: "Not the whole character: a single circumscribed pattern, named and consented to in the opening sessions" },
        { label: "Every session tied to it", detail: "Focus instead of open-endedness; the drift back to the core pattern is the technique" },
        { label: "Transference worked actively", detail: "The live sample used as it arises rather than waited for" },
        { label: "Partial change accepted", detail: "Total character restructuring traded for a real shift in one pattern: the honest deal of the short-term format" },
      ],
      clinicalManifestation: "The 16–40 session treatment: enough for a circumscribed conflict in a patient with ego strength and a workable relationship capacity.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "founding-era", time: "1900s–1920s", title: "The founding papers", description: "Freud's papers on repression, the clinical theory and technique: the unconscious, symptom-formation, transference and the talking cure; read today as the source of the concepts, not as current evidence.", phase: "onset" },
    { id: "bose-era", time: "1922 onward", title: "The Indian correction", description: "Girindrasekhar Bose of Calcutta corresponds with Freud from the 1920s and founds the Indian Psychoanalytic Society in 1922 (the first psychoanalytic body outside Europe and North America) and dissents from the Oedipus complex: the joint family's crowded, multi-caregiver stage is not a single triangle.", phase: "onset" },
    { id: "compression-era", time: "1960s–1980s", title: "The compression era", description: "Malan's two triangles and brief dynamic therapy (Toward the Validation of Dynamic Psychotherapy, 1973); Davanloo's intensive short-term dynamic psychotherapy: focus, active technique and follow-up outcomes replace open-endedness.", phase: "peak" },
    { id: "manualised-era", time: "1999–2008", title: "The manualised offshoots", description: "Bateman & Fonagy's mentalization-based treatment and Kernberg's-line transference-focused psychotherapy acquire randomised-trial support in borderline personality; dynamic-interpersonal therapy is packaged as a 16-session depression protocol for Britain's national service.", phase: "peak" },
    { id: "evidence-era", time: "2008–2016", title: "The equivalence band lands", description: "Leichsenring, Abbass and colleagues' meta-analyses place short-term dynamic therapy roughly on par with CBT for the common disorders; Shedler's 2010 synthesis (read with its critics) and the Oslo LPP longitudinal cohort carry the long-term argument with honest caveats.", phase: "recovery" },
    { id: "contemporary-era", time: "2010s onward", title: "The contemporary tier", description: "DIT enters routine national service; online-affiliated analytic training reaches India alongside the Kolkata lineage; the concepts quietly run family intervention, AA-style disclosure cultures and reflective supervision: the country that cannot afford the couch still running on its engineering.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The practice map, honestly drawn: classical psychoanalysis proper (three-to-five sessions a week, years, often the couch) is now a small, specialised corner. The clinically important descendants are the short-term dynamic therapies (typically 16–40 weekly sessions), the manualised offshoots with randomised-trial support in borderline personality (MBT, TFP, standing alongside DBT in guidelines), and dynamic-interpersonal therapy as a 16-session protocol used in Britain's national service for depression. The evidence band: for common disorders, bona fide short-term dynamic therapy performs roughly on par with CBT in meta-analyses; effect sizes in the same band, no consistent winner across trials, a sleeper effect of gains continuing after therapy ends reported in several meta-analytic discussions.",
    indianPrevalence: "The desert, described plainly: trained dynamic psychotherapists in India number in the low hundreds against a population whose need is measured in tens of millions, concentrated in the metros (Mumbai, Delhi, Bengaluru, Kolkata, Chennai, Pune) in private practice and a handful of NGO and university clinics. The average Indian patient's realistic psychological treatment will be brief, eclectic, counselling-flavoured, or a psychiatrist's ten minutes plus medication. Pretending otherwise in a lecture is dishonest. The referral question is therefore triage, not preference.",
    lifetimeRisk: "Who actually needs this treatment: the relational-repeat presentations (the same marriage twice, the same job crisis, the same emptiness), chronicity after adequate protocol therapy, and personality-level difficulties, not the default for circumscribed phobias or first-episode panic, where CBT's protocols are faster and better targeted.",
    ageOfOnset: "No onset age: the patterns are laid down pre-verbally and surface across adult life; selection (ego strength, relationship capacity, a circumscribed conflict) predicts the work better than any demographic.",
    indianNotes: "Psychoanalysis in India is older than the republic's psychiatry infrastructure (the Indian Psychoanalytic Society (1922) among the first psychoanalytic bodies anywhere outside Europe and North America) yet trained dynamic therapists remain scarce; the tradition is old, the supply is thin, and the honest tiering is psychoeducation and brief focal work through government and NGO channels first.",
  },
  etiology: [
    { category: "psychological", factor: "Early relational learning stored procedurally", details: "How closeness feels, what happens after anger, whether needs get met: learned years before language, stored as procedures; the pattern runs automatically while the verbal system sincerely pledges otherwise." },
    { category: "psychological", factor: "The defended-against feeling", details: "The unbearable impulse (rage at a dying parent, envy of a sibling, dependence the world will not allow) converted by the defence into a symptom shape rather than experienced and spoken." },
    { category: "psychological", factor: "Transference re-enactment", details: "The template from the first relationships runs on every new figure, doctors included: each new relationship patterned by the old one, which is why the same marriage happens twice." },
    { category: "social", factor: "The family-embedded self", details: "Classic technique assumes the individual as the unit of change; Indian selves are more family-embedded and secrets are family property. The seam between individual wish and family claim is often the exact conflict producing the symptoms." },
    { category: "biological", factor: "Implicit memory systems", details: "The neuroscience framing the modern unconscious rests on: emotional learning that never reaches words lives in implicit systems, which is why re-learning requires live emotional experience rather than explanation; the contemporary relational-developmental synthesis with the allied infant-research literature." },
  ],
  symptomClusters: [
    {
      category: "1. The primitive defences (borderline-organisation signals)",
      symptoms: ["Splitting: people all-good or all-bad with no middle: the idealised doctor of Tuesday is the villain of Thursday", "Projective identification: the feeling induced in the other until they carry it: the patient leaves each nurse quietly furious, and nobody can say why", "Denial: the external fact refused: the man with a recent infarct booking a trek", "Acting out: the feeling discharged in behaviour instead of words: the self-harm after the breakup, the drink after the insult"],
    },
    {
      category: "2. The neurotic-level defences (the everyday OPD set)",
      symptoms: ["Repression: the feeling shelved and its existence denied: 'I wasn't angry, just tired'", "Projection: the feeling relocated into someone else: 'You're the one who's angry with me'", "Displacement: the emotion landing on a safer target: the son shouted at, the saucepan thrown at the maid", "Reaction formation: the unacceptable feeling over-reversed: excessive sweetness where hatred sits, scrupulous care where resentment lives", "Somatisation: the conflict transcribed into the body: the 'gas' that rises with every mention of the arranged marriage", "Intellectualisation: feelings fled into vocabulary: the relative who asks about transmitter systems at his father's bedside", "Rationalisation: a dignified motive invented for a plain one"],
    },
    {
      category: "3. The mature defences (the conversions that build)",
      symptoms: ["Altruism: the feeling spent in service of others", "Sublimation: the feeling spent in forms that build rather than destroy", "Humour: the feeling named and discharged without damage", "The ladder, not a moral grade: the rung a patient habitually uses is diagnostic of personality organisation"],
    },
    {
      category: "4. What the pattern looks like in the room (the live signs)",
      symptoms: ["The deferential patient who cannot say the medicine caused diarrhoea", "The hostile patient who 'knew you would dismiss me like everyone else'", "The gift-bringer who needs the doctor delighted; the late-comer, the bill-ignorer, the prepared speech", "The resistances to free association: the sudden blankness, the topic-swerve, the arrival of the rehearsed monologue", "The rupture: missed sessions, boundary-testing, sudden hostility; the core pattern reproduced on the therapist, the most valuable session of the year if repaired"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The dynamic assessment",
      code: "No checklist, one question and a live sample",
      criteria: [
        "Psychological-mindedness assessed without jargon in one question: not 'do you have insight' but 'when things go wrong between you and someone you love, what is your part in it, usually?': a patient who can sketch their own recurring pattern at first meeting will make use of any therapy; one who answers only in terms of others' faults needs psychoeducation and structure before interpretation.",
        "The defence profile read at first contact as data: splitting and projective identification announce borderline-level organisation and change the next prescription, the documentation and the expectation of the medication follow-up.",
        "The transference sample: the feeling the patient reliably produces in staff; the ward that dreads one patient is holding information about every relationship in that patient's life.",
        "The repeated-pattern history: the same marriage twice, the same job crisis, the same emptiness; the presentations dynamic therapy earns its place for.",
      ],
      duration: "Assessable in minutes at the first consultation: the screen costs no sessions and predicts use of any therapy, dynamic or otherwise.",
      indianNote: "The family commonly attends, funds and monitors the consultation: assess the pattern with the family in the room AND alone with the patient; the seam (individual wish versus family claim) is often visible in the gap between the two accounts.",
    },
    {
      system: "Selection for brief dynamic work",
      code: "The compression criteria",
      criteria: [
        "Adequate ego strength: the capacity to tolerate affect without fragmentation.",
        "Ability to form a relationship: the alliance survives the first rupture.",
        "A circumscribed conflict. ONE core pattern that can be named and agreed early.",
        "NOT the multiple-comorbid, fragile-organisation patient, who does better with longer, more supportive pacing.",
        "Partial rather than total character change accepted as the honest deal of the short format.",
      ],
      duration: "Typically 16–40 weekly sessions: agreed at the start, not discovered at session sixty.",
      indianNote: "In the therapy desert, selection is triage: the few referral slots go to the patients who both need and can use the work; psychoeducation and brief focal work through government and NGO channels carry the rest.",
    },
  ],
  severityScales: [
    {
      name: "The defence ladder",
      fullName: "Primitive-to-mature defence hierarchy",
      measures: "The rung a patient habitually uses: diagnostic of personality organisation, not a moral grade.",
      ranges: [],
      indianNote: "Taught by example, not by score: the saucepan thrown at the maid (displacement), the transmitter-systems questions at the father's bedside (intellectualisation), the Tuesday-doctor idealisation that Thursday devalues (splitting); the viva examiner's favourite format.",
    },
    {
      name: "Psychological-mindedness screen",
      fullName: "The one-question assessment",
      measures: "The capacity to sketch one's own recurring relational pattern: the strongest predictor of use of any therapy.",
      ranges: [],
      indianNote: "Asked without jargon in any language: 'when things go wrong between you and someone you love, what is your part in it, usually?': the answer in terms of others' faults alone means psychoeducation and structure first.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Circumscribed phobia or first-episode panic", distinguishingFeatures: "A focal, symptom-defined presentation with a protocol treatment that is faster and better targeted.", keyDifferentiator: "Dynamic therapy is not the default here. CBT's protocols own this territory; the dynamic concepts remain usable as clinical optics while the protocol does the work." },
    { condition: "A clear depressive episode", distinguishingFeatures: "A discrete episode in a patient with intact relational patterns and no repetition history.", keyDifferentiator: "The medicine plus the patient's own resources may well carry it: treat the episode in front of you; dynamic therapy is not a substitute for it and not a punishment alongside it." },
    { condition: "Psychosis (schizophrenia)", distinguishingFeatures: "The patient or family asks whether 'talking treatment' will fix it.", keyDifferentiator: "Not as the primary treatment: psychosis needs medication-based care and family intervention; dynamic ideas may still guide the clinician's understanding: that is different from prescribing the therapy." },
    { condition: "Autism spectrum presentations", distinguishingFeatures: "The family seeking a deeper explanation for social difficulty.", keyDifferentiator: "Structured support, not dynamic therapy; the distinction between a neurodevelopmental pattern and a defended one is the assessment's first job." },
    { condition: "Borderline personality with active self-harm", distinguishingFeatures: "Splitting and projective identification at the first meeting; crises, idealisation, abandonment terror.", keyDifferentiator: "Structured dynamic treatment (MBT or TFP) with a sturdy frame and a team behind it (standing alongside DBT in guidelines) not unstructured open-ended individual work." },
    { condition: "The 'non-compliant' label", distinguishingFeatures: "The referral made in frustration: 'not taking medicines, refer for psychotherapy'.", keyDifferentiator: "Psychotherapy prescribed as punishment satisfies nobody: referral discipline means the therapy is earned by pattern, chronicity and organisation, never used as a sanction." },
  ],
  management: [
    { category: "psychotherapy", name: "The frame", description: "Same time, same room, same duration, cancellations spoken about, not bureaucracy but the experimental constant against which the patient's automatic pattern will show itself, including in how the frame itself is treated: the late-comer, the gift-bringer, the bill-ignorer.", whenToUse: "From the first session, held by the therapist; every deviation from it is material, not administration.", indianContext: "Online delivery since the pandemic contracts the frame differently (same time, private room, headphones) and works acceptably for many; severe instability is better seen in person." },
    { category: "psychotherapy", name: "Free association and the resistances", description: "The invitation to say whatever comes, uncensored: impossible to achieve perfectly, and not meant to be: the resistances to it (the sudden blankness, the topic-swerve, the arrival of the prepared speech) are themselves the material.", whenToUse: "Every session; the resistance is read, not corrected.", indianContext: "Needs no equipment and no jargon, but needs minutes, which the Indian OPD rarely has; it belongs to the therapy room, while its diagnostic cousins (the somatic screen, the prepared speech) appear free in any consultation." },
    { category: "psychotherapy", name: "Interpretation — Malan's triangles in one sentence", description: "The offered link that names the running pattern aloud, tentatively, at the moment it is running; a good interpretation connects feeling, defence and history: the triangle of conflict and the triangle of person in one sentence.", whenToUse: "When the pattern is live in the room, not in the abstract; premature interpretation teaches the patient to perform insight.", indianContext: "The viva-examiner's favourite: the impulse-anxiety-defence chain given for one real consultation, in the patient's words." },
    { category: "psychotherapy", name: "Working through", description: "The unglamorous truth: one correct interpretation changes almost nothing; the pattern must be met, named and answered dozens of times in dozens of moods before the procedural learning actually updates; the honest reason dynamic therapy has a duration, not a course length.", whenToUse: "The whole middle of the therapy; families are told this at the start to prevent the week's-miracle abandonment.", indianContext: "The expectation-setting script delivered at referral: improvement measured across months of weekly work, not sessions counted like tablets." },
    { category: "psychotherapy", name: "Brief dynamic therapy (the compression)", description: "Typically 16–40 weekly sessions built on Malan's compression logic: one core conflict pattern agreed early, every session tied to it, the transference worked actively as it arises, partial rather than total character change accepted; Davanloo's intensive format and the time-limited models used in public services descend from it.", whenToUse: "The circumscribed conflict with adequate ego strength and a workable relationship: selection is the engineering.", indianContext: "The realistic format for India's scarce therapists: time-limited, focal, deliverable inside NGO and institute clinics rather than the open-ended metro private suite." },
    { category: "psychotherapy", name: "The manualised offshoots", description: "Mentalization-based treatment (Bateman & Fonagy) for borderline personality: the skill of holding minds in mind, with a sturdy frame and a team behind it; transference-focused psychotherapy (Kernberg's line) for borderline and narcissistic organisation; dynamic-interpersonal therapy, the 16-session depression protocol used in Britain's national service: the engine (pattern, relationship, defence, the past in the present) with a manual gearbox.", whenToUse: "Borderline and narcissistic organisation (MBT, TFP); depression in stepped-care systems (DIT): increasingly familiar in exam syllabi.", indianContext: "The models most Indian residents will actually meet in journals and exams; the full trial detail lives in the Treating Personality Disorders course." },
    { category: "psychotherapy", name: "Rupture repair (the treatment moment)", description: "The patient will eventually reproduce the core pattern on the therapist: missed sessions, boundary-testing, provocation of the abandonment; ordinary clinical reflex treats rupture as failure, the dynamic frame treats it as the most valuable session of the year, provided it is repaired rather than retaliated against.", whenToUse: "Every rupture, in every therapy, and in every doctor-patient relationship in the building: the first time the test is answered with neither retaliation nor flight, treatment has begun.", indianContext: "Exports to the OPD: the angry letter about waiting times answered with a routine, warm reschedule; the rupture repaired rather than confirmed, at no cost the system cannot afford." },
    { category: "lifestyle", name: "Referral discipline", description: "Dynamic therapy earns its place for relational-repeat presentations, chronicity after adequate protocol therapy, and personality-level difficulties, not as a default, not as a punishment ('non-compliant, refer for psychotherapy'), and not as a substitute for treating the episode in front of you.", whenToUse: "At the moment of asking 'what else can we offer?', after the episode is treated and the pattern, not the symptom, is what keeps presenting.", indianContext: "The referral question is triage, not preference: metro private dynamic therapy at ₹800–3,000 per session (approx 2026), NGO and institute clinics sliding from ₹100–500, a few supervised training-clinic seats free. The honest tiering being psychoeducation and brief focal work through government and NGO channels first." },
  ],
  safety: {
    redFlags: [
      "Acting out as the active defence: the self-harm after the breakup, the drink after the insult: risk assessment comes before interpretation, always; the feeling discharged in behaviour is a safety event, not only a communication",
      "Rupture met with retaliation or flight: the cold discharge, the rescue-prescription, the punishing silence: the abandonment re-enacted by the system itself, in the exact week the treatment could have begun",
      "Severe instability treated online, since the pandemic much of the work happens on screens, and it works acceptably for many, but severe instability is better seen in person",
      "One clinician prescribing AND running open-ended therapy with a dependent, fragile patient: the outside eye is lost; the ideal is a team, and in most of India the honest compromise is supervision, whoever provides it",
      "Psychosis or autism carrying the referral: dynamic therapy is not the primary treatment for either: medication-based care and family intervention for psychosis, structured support for autism; the ideas may guide understanding, the therapy is not prescribed",
      "Uncontracted confidentiality in a family-embedded system: everything drifting to the uncle by default; the seam worked explicitly: 'what, exactly, may I tell your husband?'",
    ],
    urgentGuidance:
      "The order of operations: (1) treat the episode in front of you first; dynamic therapy is never a substitute for the depressive episode, the psychosis or the crisis; (2) when acting out is the defence, assess risk before interpreting motive: behaviour first, meaning second; (3) the rupture answered with neither retaliation nor flight: the first repaired test is the treatment moment, and the chart's steady documentation is what survives the devaluation cycle; (4) the dependent, fragile patient in long-term work needs the outside eye: team where it exists, supervision where it does not; (5) confidentiality contracted explicitly at the start in family-embedded care, in writing, with the summary the usual share.",
  },
  drugLinks: [],
  contentGaps: [
    "No drug lessons are linked: the source note assigns no medication a clinical role in dynamic psychotherapy itself. Its own position is that no tablet yet made teaches a new way of relating; the comorbid-episode pharmacotherapy tier (SSRIs and the rest) belongs to the mood- and anxiety-disorder courses, and the route is never invented here.",
    "The therapy formats most Indian patients will actually receive (protocol CBT, behavioural activation, counselling) have no stand-alone KYP lessons yet; the honest comparison band (dynamic roughly on par with CBT in the common disorders) is taught inside this course.",
    "The manualised dynamic offshoots (MBT, TFP, DIT) have no dedicated KYP lessons; their selection criteria, frames and trial detail are taught here and cross-referenced to the Treating Personality Disorders course.",
    "The psychodynamic assessment interview (including the psychological-mindedness screen) has no dedicated KYP lesson; the one-question method is taught here rather than linked.",
  ],
  patientGuide: {
    whatIsIt:
      "Dynamic therapy is a talking treatment built on one observation: the patterns that hurt your life (the partners you keep choosing, the anger you cannot feel, the closeness you flee) were learned so early and so deeply that they now run by themselves, outside awareness. The therapy makes these patterns visible inside a real relationship with a trained guide, and reworks them slowly. Almost nobody in India today lies on a couch: most dynamic therapy is face-to-face, seated, weekly, and often time-limited; roughly four months to a year. The couch belongs to classical analysis, a rare speciality.",
    whatCausesIt:
      "Nothing is broken in the machinery of your mind. A child learns how relationships work (how closeness feels, what happens after anger, whether needs get met) years before words exist to record it. That knowledge is stored the way bicycle-riding is stored: the body and the emotions know how to do it, and there is no sentence anywhere that says it. That is why sincere promises to change so often fail: the promise lives in the word-part of the mind while the pattern lives in the doing-part. Painful feelings do not vanish either. They get converted: into body symptoms ('gas'), into endless reading, into the wrong target for the anger. These conversions are the mind's defences, and they were the best solutions available when they were built.",
    symptoms:
      "The reasons people come: the same relationship twice; the same job crisis repeating; a chronic emptiness no achievement fills; body complaints ('gas and burning') that survive every scan; anger that only arrives in the body, never in words. Inside the therapy you will notice the pattern appear toward the therapist too: the need to please, the fear of being a burden, the waiting for the trap. That is expected, and it is the material the therapy works with, not a sign it is going wrong.",
    treatment:
      "Sessions happen at the same time, in the same place, for the same length: this reliability is itself part of the cure, because old relational learning only updates inside a relationship that behaves differently. You are invited to say whatever comes, uncensored; the blocks and swerves that appear are not failures but the very material. Over the weeks the therapist will gently name the pattern as it runs (including when it runs on the therapist) and the pattern gets met, named and answered many times before it actually changes. That repetition is called working through, and it is why the therapy has a length rather than a quick fix. Brief versions (often 16–40 sessions) focus on ONE agreed pattern; longer work suits deeper, more tangled difficulties.",
    selfHelp: [
      "The two training questions before starting with any therapist: 'What is your training in this specific method?' and 'Are you currently in supervision?': a confident answer to both is a good sign anywhere, and the habit protects you in every kind of therapy.",
      "The family question, settled at the start: decide together what may be shared; usually a summary serves everyone; the rule is written down at the beginning, so family involvement stays high without breaking confidentiality.",
      "The expectation, written on the wall: this work improves things across months, not sessions; the family that expects a week's miracle abandons the treatment exactly when the curve turns.",
      "The rupture, expected rather than dreaded: there will come a session you want to miss, a boundary you want to test, a sudden irritation with the therapist. That moment (brought back and talked about) is often where the real change happens.",
      "The defences, treated with respect: the reading, the humour, the busy-ness are not enemies to be attacked; they were the best solutions available when they were built, and they soften when the feeling underneath becomes speakable.",
    ],
    whenToSeekHelp: [
      "Repeated patterns rather than single episodes: the same marriage twice, the same job crisis, the same emptiness after each success: these are the presentations dynamic therapy is built for",
      "Chronicity after adequate protocol therapy: the CBT done well, the medicines taken, the pattern still producing symptoms",
      "Self-harm or a crisis during therapy: tell the therapist or the emergency contact the same day; safety is discussed before depth, always",
      "Severe instability: the therapy should be in person, not online, until things are steadier",
      "Not as the primary treatment for psychosis or autism: medication-based care and family intervention for the first, structured support for the second; ask the treating team what the talking treatment is for",
    ],
    indianResources: [
      "University and institute clinics (NIMHANS, CIP Ranchi, Ambedkar University Delhi, TISS Mumbai and others): psychodynamic-informed therapy at sliding scales from ₹100–500 per session",
      "A few supervised training-clinic seats are free, with trainees working under supervision: the two training questions still worth asking",
      "The Indian Psychoanalytic Society (Kolkata) and its affiliated bodies: the formal analytic training lineage, including online-affiliated options",
      "Government and NGO channels for psychoeducation and brief focal work. The honest first tier when long-term private work (₹800–3,000 per session in the metros, approx 2026) is not affordable",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific dynamic-therapy guideline exists; practice follows the international lineage (Freud's concepts read as concepts, Malan's triangles and brief-therapy focus, Davanloo's ISTDP, the Leichsenring/Abbass equivalence band, Bateman & Fonagy's MBT and Kernberg's-line TFP) delivered through Indian realities. Training routes: the Indian Psychoanalytic Society (Kolkata) and a small number of affiliated bodies offer formal analytic training (personal analysis, supervised cases, curriculum, years, now also online-affiliated); university routes run through applied- and clinical-psychology programmes (NIMHANS, CIP Ranchi, Ambedkar University Delhi, TISS Mumbai and others) where psychodynamic modules sit inside broader psychotherapy training; short courses in dynamic-interpersonal and brief work are increasingly available through private institutes.",
    systemContext: "The desert, described plainly: trained dynamic psychotherapists in India number in the low hundreds against a population whose need is measured in tens of millions, concentrated in the metros (Mumbai, Delhi, Bengaluru, Kolkata, Chennai, Pune) in private practice and a handful of NGO and university clinics. The average Indian patient's realistic psychological treatment will be brief, eclectic, counselling-flavoured, or a psychiatrist's ten minutes plus medication. The referral question is therefore triage, not preference, and the concepts are still clinical optics for every encounter: the ten-minute OPD contains transference (the patient who cannot disagree about a side-effect), defences (the somatic screen) and countertransference (your irritation with the heart-sink list).",
    programmeContext: "Where the concepts actually run: the better family-intervention programmes (the schizophrenia psychoeducation literature is downstream of systems and dynamic thinking), the AA-style cultures of disclosure, and the reflective practice now entering supervision in clinical-psychology programmes. The country that cannot afford the couch is still running on its engineering. Indian postgraduate exams love defence mechanisms, transference and the triangles; viva examiners probe the difference between obsession (a symptom) and the obsessive personality (a structure), a distinction the dynamic tradition built.",
    costConsiderations: "Metro private dynamic therapy runs roughly ₹800–3,000 per session, more in premium practices (approx 2026); NGO and institute clinics slide from ₹100–500; a few training-clinic seats are free with trainees supervised. Long-term work at weekly frequency is therefore a middle-and-upper-class purchase, and the class bias in access is a fact the profession should say aloud. The honest tiering for most patients: psychoeducation and brief focal work through government and NGO channels, protocol therapies where indicated, and dynamic referral for the minority who both need and can use it.",
    culturalConsiderations: "The tradition nobody taught you: psychoanalysis in India is older than the republic's psychiatry infrastructure. Girindrasekhar Bose of Calcutta corresponded with Freud from the 1920s, founded the Indian Psychoanalytic Society (1922, the first psychoanalytic body outside Europe and North America), and famously dissented on the Oedipus complex: arguing from the joint family's dense, multi-caregiver structure that the child's drama is less a single triangle than a crowded stage, with dependence threaded differently through the life-cycle; the first serious non-Western theoretical correction to Freud, whatever one makes of it. The cultural fit, answered without romance: classic technique assumes the individual as the unit of change; Indian selves are more family-embedded, and secrets are family property. The family commonly attends, funds and monitors the therapy; confidentiality needs explicit contracting ('what, exactly, may I tell your husband?'); and the therapist will be asked, legitimately, for guidance on marriage, duty and parents. A rigidly imported technique that pathologises the family-Self misreads the patient; a spineless one that reports everything to the uncle is not therapy. The skilful Indian dynamic therapist works the seam between individual wish and family claim: often the exact conflict the patient is producing symptoms from.",
    patientCounselling: [
      "The couch-myth script: 'Almost nobody in India lies on a couch; the therapy is face-to-face, seated, weekly, often four months to a year; the couch belongs to a rare speciality.'",
      "The medicine script: 'For a clear episode, the medicine plus your own resources may carry it; for repeated patterns (the same marriage twice, the same emptiness) no tablet yet made teaches a new way of relating. That is the work this therapy does.'",
      "The family script: 'What happens in the room is yours; what goes home is decided together at the start, in writing. A summary usually serves everyone.'",
      "The two-question script for choosing a therapist: 'What is your training in this specific method? Are you currently in supervision?': 'psychoanalytically informed' on a visiting-card covers everything from a supervised training to a weekend workshop.",
      "The rupture script: 'The week you want to quit is often the week the pattern is visible. Bring it back and say so; that session is the treatment, not the failure.'",
      "The blame script: 'A bad therapist blames your mother; a good one treats her solutions with respect. They were the best available then. The aim is understanding the pattern, not convicting its origin.'",
    ],
  },
  decisionPath: {
    title: "The referral and technique decision",
    nodes: [
      {
        id: "start",
        question: "The patient with a repeated pattern, a chronic presentation or a 'nothing works' file is in front of you. First: what is the actual question?",
        branches: [
          { label: "Circumscribed symptom, first episode", next: "protocol-first" },
          { label: "The repeated relational pattern", next: "pattern-gate" },
          { label: "Personality-level organisation with self-harm or chaos", next: "structured-dynamic" },
          { label: "Ten minutes, no referral possible", next: "opd-optics" },
        ],
      },
      {
        id: "protocol-first",
        question: "The focal presentation (specific phobia, first-episode panic).",
        recommendation: "Not the dynamic default: CBT's protocols are faster and better targeted here. Treat the episode in front of you; keep the dynamic concepts as optics (the transference and the somatic screen still inform the prescription), and revisit only if chronicity or pattern emerges after adequate protocol therapy.",
      },
      {
        id: "opd-optics",
        question: "No referral is possible; the encounter is the treatment.",
        recommendation: "The concepts as clinical instruments: read the transference (the patient who cannot disagree about a side-effect is running an old programme), the defence (the somatic screen; the workup that will not stop is intellectualisation purchased at radiology rates), and your own countertransference (the heart-sink list). Ask the one-question psychological-mindedness screen, plan the defence into the documentation, and hold the steady frame in miniature: the rupture answered with neither retaliation nor flight.",
      },
      {
        id: "pattern-gate",
        question: "The repeated pattern: the same marriage twice, the same job crisis, the same emptiness after adequate protocol therapy.",
        branches: [
          { label: "Ego strength, relationship capacity, ONE circumscribed conflict", next: "brief-focal" },
          { label: "Multiple comorbidity, fragile organisation", next: "supportive-tier" },
          { label: "The family is in every sentence", next: "seam-gate" },
        ],
      },
      {
        id: "brief-focal",
        question: "The compression candidate.",
        recommendation: "Short-term dynamic therapy, typically 16–40 weekly sessions: one core conflict pattern agreed early, every session tied to it, the transference worked actively as it arises, partial rather than total character change accepted. Selection is the engineering: ego strength, alliance, circumscription; the multiple-comorbid fragile patient is NOT this candidate.",
      },
      {
        id: "supportive-tier",
        question: "The fragile, multiply comorbid presentation.",
        recommendation: "Longer, more supportive pacing: the honest alternative to compression; where the organisation is borderline, the structured dynamic treatments with a team behind them (next node) rather than unstructured open-ended work; the family contracted as monitors with written confidentiality rules.",
      },
      {
        id: "structured-dynamic",
        question: "Borderline or narcissistic organisation with self-harm, hospitalisation or symptom burden.",
        recommendation: "Mentalization-based treatment (Bateman & Fonagy) (the skill of holding minds in mind, with a sturdy frame and a team behind it) or transference-focused psychotherapy (Kernberg's line), both with randomised-trial support and standing alongside DBT in guidelines. The full trial detail and service wrap live in the Treating Personality Disorders course.",
      },
      {
        id: "seam-gate",
        question: "The Indian family-embedded presentation.",
        recommendation: "The seam, worked explicitly: the family attends, funds and monitors, so confidentiality is contracted in writing ('what, exactly, may I tell your husband?'), the therapist answers questions on marriage, duty and parents legitimately, and the conflict between individual wish and family claim is treated as the clinical material itself (the Bose reading of the crowded stage), never as an obstacle to a purely individual technique.",
      },
      {
        id: "therapist-check",
        question: "A name has been found. Before the first session:",
        recommendation: "The two questions the family should ask: what is your training in this specific method, and are you currently in supervision? 'Psychoanalytically informed' on a visiting-card covers everything from a supervised training to a weekend workshop: the habit protects the patient in every kind of therapy, not just this one.",
      },
      {
        id: "rupture-node",
        question: "Week nine: the missed session, the angry letter, the boundary test.",
        recommendation: "The rupture is the core pattern reproduced on the therapist: the most valuable session of the year if it is repaired rather than retaliated against. The routine, warm reschedule (neither retaliation nor flight) is the treatment moment: the first time the test is answered differently, the procedural learning begins to update.",
      },
      {
        id: "cost-node",
        question: "The Indian money-and-access triage.",
        recommendation: "Metro private dynamic therapy at ₹800–3,000 per session (approx 2026); NGO and institute clinics sliding from ₹100–500; a few supervised training-clinic seats free. The honest tiering: psychoeducation and brief focal work through government and NGO channels, protocol therapies where indicated, dynamic referral for the minority who both need and can use it; the class bias in access said aloud rather than hidden.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Attacking the defence head-on ('stop intellectualising!')",
      why: "Defences only change when the underlying feeling becomes speakable; attacking them merely drives the pattern underground, and the defence was the best solution available at the time it was built.",
      correction: "Respect the defence and aim for the feeling underneath; the clinical move is to make the feeling speakable, not to confiscate the reading the relative is doing at his father's bedside.",
    },
    {
      mistake: "Treating the rupture as failure (or retaliating against it)",
      why: "The rupture (missed sessions, boundary-testing, sudden hostility) is the core pattern appearing live on the therapist; ordinary clinical reflex reads it as non-compliance and answers with the cold discharge or the rescue-prescription, the abandonment re-enacted by the system.",
      correction: "Repair rather than retaliation: the rupture handled as the most valuable session of the year, the first answered test being the moment treatment begins.",
    },
    {
      mistake: "Acting out the countertransference",
      why: "The clinician's feelings toward the patient (rescue-longing, dread, contempt, sleepiness) are data induced by the patient's procedures, not orders; enacted, they destroy the alliance and re-enact the original injury.",
      correction: "Feel them, own them, use them: the discipline that works in a three-minute OPD interaction as well as a fifty-minute hour; supervision as the container, whoever provides it in the Indian system.",
    },
    {
      mistake: "Prescribing psychotherapy as punishment ('non-compliant, refer for psychotherapy')",
      why: "The therapy earns its place by pattern, chronicity and organisation, never by failure; the punitive referral guarantees a hostile engagement and a wasted scarce slot.",
      correction: "Referral discipline: treat the episode in front of you first; refer the repeated relational pattern, the chronicity after adequate protocol therapy, the personality-level difficulty, and say why, to the patient and the family.",
    },
    {
      mistake: "Accepting 'psychoanalytically informed' on a visiting-card",
      why: "The phrase covers everything from a supervised training to a weekend workshop, and the family paying ₹800–3,000 per session (approx 2026) has a right to know which.",
      correction: "Ask the two questions on the patient's behalf and teach the family to ask them: what is your training in this specific method, and are you currently in supervision?",
    },
    {
      mistake: "Importing a rigidly individual technique (or its spineless opposite)",
      why: "A technique that pathologises the family-Self misreads the Indian patient, whose secrets are family property and whose family attends, funds and monitors; but the therapist who reports everything to the uncle is not doing therapy either.",
      correction: "Work the seam: confidentiality explicitly contracted, the family's questions on marriage, duty and parents answered legitimately, and the individual-wish-versus-family-claim conflict treated as the exact clinical material it is.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define transference and countertransference with one clinical example each, and spot both in a five-minute outpatient encounter.",
        "Name six defence mechanisms with a one-line clinical vignette for each (displacement: the son shouted at, the saucepan thrown at the maid).",
        "Draw Malan's two triangles: the triangle of conflict (impulse – anxiety – defence) and the triangle of person (current figure – therapist – original figure).",
        "Distinguish obsession (a symptom) from the obsessive personality (a structure): the viva distinction the dynamic tradition built.",
        "Define working through, and explain why one correct interpretation changes almost nothing.",
      ],
      practical: [
        "Take the one-question psychological-mindedness screen: 'when things go wrong between you and someone you love, what is your part in it, usually?', and grade the answer honestly.",
        "Give the impulse-anxiety-defence chain for one patient on the ward round, in the patient's own words.",
      ],
      longAnswer: [
        "Principles and technique of psychodynamic psychotherapy: the frame, free association, transference, interpretation and working through (the evergreen essay).",
        "Defence mechanisms: classification from primitive to mature with clinical examples and their diagnostic value in personality organisation.",
      ],
    },
    neetPg: {
      highYield: [
        "MALAN'S TRIANGLES: triangle of conflict = impulse – anxiety – defence; triangle of person = current figure – therapist – original figure: the one drawing that answers five different questions.",
        "THE PRIMITIVE PAIR: splitting and projective identification announce borderline-level organisation; the idealised doctor of Tuesday is the villain of Thursday; the ward's unexplained fury is the induced feeling.",
        "THE EVERYDAY SET with exam vignettes: repression ('I wasn't angry, just tired'), displacement (the saucepan thrown at the maid), somatisation (the 'gas' with the arranged marriage), intellectualisation (transmitter systems at the father's bedside), reaction formation (sweetness where hatred sits), acting out (the drink after the insult).",
        "THE MATURE TRIAD: altruism, sublimation, humour; the conversions that build; the defence ladder grades organisation, not character.",
        "THE MODERN UNCONSCIOUS: early relational learning stored procedurally; why advice cannot retrain it and why the re-learning needs a live relationship.",
        "THE BRIEF FORMAT: 16–40 weekly sessions, one core conflict, partial change. Davanloo's ISTDP is the intensive descendant.",
        "THE OFFSHOOTS: MBT (Bateman & Fonagy, borderline personality), TFP (Kernberg's line, borderline and narcissistic organisation), DIT (16 sessions, depression, Britain's national service).",
        "THE EVIDENCE, HONESTLY: short-term dynamic therapy roughly on par with CBT in meta-analyses of the common disorders; same band, no consistent winner, sleeper effect of continued gains; MBT/TFP randomised-trial support in BPD; classical analysis proper remains case-series.",
        "THE INDIAN ANCHOR: Indian Psychoanalytic Society founded 1922 by Girindrasekhar Bose of Calcutta (the first psychoanalytic body outside Europe and North America) and the joint-family dissent on the Oedipal triangle.",
        "THE INSTRUMENT: countertransference; the one instrument that never runs out of batteries; the feeling the patient reliably produces in staff is diagnostic information.",
      ],
      pyqConcepts: [
        "Defence-mechanism matching questions: the vignette-to-label format every exam tier recycles.",
        "Transference versus countertransference discrimination (whose feeling, whose history).",
        "Obsession versus obsessive personality: the symptom-structure distinction Indian viva examiners probe.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 28-year-old software engineer in Bengaluru with a moderate depressive episode opens every follow-up with extravagant praise, reports each new antidepressant 'useless' within days, and declares you the only doctor who understands her: two previous psychiatrists already abandoned: the dynamic reading is splitting with idealisation; the prescriber plans for the devaluation cycle (steady documentation, no new prescriptions at moments of idealisation, the swing predicted kindly when the alliance can hold it), continues the antidepressant for the episode, and considers personality-level work in the plan: the all-good doctor being the same machinery as the future all-bad doctor.",
        "A 62-year-old retired schoolteacher in Kolkata with two years of 'gas and burning', three normal scans and two clean endoscopies, the symptoms flaring with every mention of the daughter's arranged marriage: the dynamic reading is somatisation defending an unspoken conflict; the management respects the defence (the scans already bought prove the body was believed), commissions no new investigation, and makes the feeling speakable: the workup that will not stop being intellectualisation purchased at radiology rates.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Displacement: the emotion lands on a safer target.",
        "Intellectualisation: vocabulary standing where the feeling should be.",
        "Splitting: all-good or all-bad, no middle; borderline organisation.",
        "Transference: the patient's earliest relationships displaced onto the present figure, doctors included.",
        "Brief dynamic therapy: typically 16–40 sessions, one core conflict.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Countertransference is the one instrument that never runs out of batteries. It works in a three-minute OPD interaction as well as a fifty-minute hour; the discipline is to feel, own and use it, never to act it out.",
        "The rupture is the treatment moment: the first time the patient's test is answered with neither retaliation nor flight, treatment has begun, and this principle exports to every doctor-patient relationship in the building.",
        "Reading the defence correctly is the most cost-effective investigation in the room: the workup that will not stop on the 'gas and burning' patient is intellectualisation purchased at radiology rates.",
        "The evidence answer that earns full marks: dynamic therapy roughly on par with CBT in the common disorders, MBT/TFP randomised-trial support in borderline personality, a particular role for complex, chronic, relational presentations where symptom-protocol therapies thin out, and classical analysis proper stated honestly as case-series.",
        "The Indian seam: work the conflict between individual wish and family claim as the clinical material itself; the Bose reading of the crowded joint-family stage, with confidentiality contracted explicitly and the family's questions on marriage, duty and parents answered legitimately.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The gas that rose with the marriage",
      presentation: "Three normal scans, two clean endoscopies, and the symptom that spoke every time the wedding was mentioned.",
      initialPresentation: "A 62-year-old retired schoolteacher in Kolkata was brought by her husband and eldest son for two years of upper abdominal 'gas and burning' that had survived three abdominal ultrasounds, two endoscopies and a contrast CT; the son opened by asking whether a 'stronger stomach tablet' existed, and the husband completed her sentences.",
      history: "The symptoms began around the months the family started negotiating the younger daughter's arranged marriage; each flare coincided with an alliance discussion, a horoscope exchange or a visit from the prospective in-laws. No weight loss, no alarm features, no relief from two proton-pump inhibitor courses. Previous consultations had ended with the family requesting 'one more test'; none had asked her opinion of the match.",
      examination: "Abdominal examination normal; the previous imaging reviewed and confirmed unremarkable. Mental status: polite and deferential, unable to disagree with the son in the room; the one-question psychological-mindedness screen answered entirely in terms of others ('the gas comes when they stress me'); alone with the clinician, slower to answer, and the wish about the marriage approached only by its edge.",
      diagnosis: "Somatic symptom presentation on a somatisation defence: the conflict (her unheard wish regarding her daughter's marriage versus the family's plan) transcribed into the body; no primary gastrointestinal disease.",
      management: "The defence respected, not confronted: the normal scans reframed as evidence her body had been believed, no further investigation commissioned; the feeling made speakable in brief focal sessions; one family session contracting what would be discussed with whom; the son engaged as ally rather than interrogator; psychoeducation about the body's transcription of conflict.",
      outcome: "The 'gas' flared once more at the wedding-date announcement, then settled over the following months as her voice entered the family's planning: no further scans in the year of follow-up, the proton-pump inhibitor tapered, and the family's requests shifting from tests to sessions.",
      teachingPoints: [
        "Defences are clinical data, read like a fever pattern. The somatic screen was the diagnosis's front door, not an exclusion to be repeated.",
        "The workup that will not stop is intellectualisation purchased at radiology rates: reading the defence correctly is the most cost-effective investigation in the room.",
        "Respect the defence, aim for the feeling underneath: attacking the somatisation would have driven the conflict further underground.",
        "The Indian family-embedded self worked at the seam: the conflict itself was the family's plan meeting her unheard wish; the Bose reading of the crowded stage.",
      ],
    },
    {
      title: "The only doctor who understands her",
      presentation: "Every visit opens with extravagant praise and ends with 'the tablet is useless'. The Tuesday doctor about to become the Thursday villain.",
      initialPresentation: "A 28-year-old software engineer in Bengaluru attended a corporate-clinic OPD for a moderate depressive episode; across six weekly follow-ups she began each visit praising the psychiatrist extravagantly, reported every new antidepressant 'useless' within days of starting it, and declared this doctor 'the only one who understands me': the discharge summaries of two previous psychiatrists already in her file.",
      history: "Both previous psychiatric relationships had ended after perceived slights, one 'rushed' her, one 'only wanted to give tablets'; a parallel string of idealised-then-cut-off managers and one cyclical close friendship; no psychotic symptoms; no self-harm at presentation; a roommate's collateral obtained with consent describing the same swing at home.",
      examination: "Mental status consistent with a moderate depressive episode riding on personality-level organisation; the extravagant idealisation noted at the first interview as data rather than compliment; splitting anticipated from the exit pattern; documentation kept factual and steady from day one.",
      diagnosis: "Depressive episode on borderline-level personality organisation: the splitting defence (all-good doctor today, all-bad tomorrow) announcing itself in the transference.",
      management: "The antidepressant held constant for the episode (a clear episode may be carried by the medicine plus her own resources); no new prescriptions at moments of idealisation; the devaluation predicted kindly to herself when the alliance could hold it; scheduled reviews kept firm through the missed appointment; an MBT-informed referral discussed for when the episode lifted; supervision used for the countertransference her idealisation induced.",
      outcome: "At week nine the swing arrived on schedule: a missed appointment and an angry letter about waiting times; the clinic's reply was a routine, warm reschedule (neither retaliation nor flight), and she kept the next appointment. The first time in three clinics a rupture was repaired rather than confirmed; the depressive episode itself improved over four months with the medication unchanged.",
      teachingPoints: [
        "The all-good doctor is the same machinery as the future all-bad doctor. The prescriber who plans for the swing keeps the alliance and the chart intact.",
        "Transference is visible in a ten-minute OPD, no couch required. The pattern of exits was the history that mattered.",
        "The rupture answered with neither retaliation nor flight is the treatment moment: the first repaired test.",
        "Documentation steady from day one: the factual chart survives the devaluation cycle that the relationship must ride out.",
        "Treat the episode in front of you AND consider personality-level work in the plan. The medicine and the referral are not rivals.",
      ],
    },
  ],
  clinicalPearls: [
    "Defences are clinical data. Read the way a physician reads a fever pattern: not oddities, but information about the underlying condition.",
    "The rung on the defence ladder is diagnostic of personality organisation, not a moral grade, splitting and projective identification announce borderline-level organisation at the first meeting.",
    "Insight delivered as advice speaks to the wrong system: the pledge lives in the verbal system while the pattern lives in the procedural one.",
    "Respect the defence: it was the best solution available at the time it was built; aim for the feeling underneath.",
    "Malan's triangles in one sentence: the triangle of conflict (impulse – anxiety – defence) meets the triangle of person (current figure – therapist – original figure) inside one good interpretation.",
    "Countertransference is the one instrument that never runs out of batteries, rescue-longing, dread, contempt and sleepiness are data the patient's procedures induce.",
    "The rupture is the treatment moment: the first time the test is answered with neither retaliation nor flight, treatment has begun.",
    "One correct interpretation changes almost nothing: working through is the honest reason dynamic therapy has a duration, not a course length.",
    "Brief dynamic therapy compresses by focus, not by speed: one core conflict, 16–40 weekly sessions, partial change accepted.",
    "The honest evidence position: roughly on par with CBT in the common disorders (sleeper effect of continued gains); MBT and TFP randomised-trial support in borderline personality; classical analysis proper remains case-series.",
    "Bose of Calcutta, 1922: the Indian Psychoanalytic Society (the first psychoanalytic body outside Europe and North America) and the joint-family dissent on the single-triangle Oedipal stage.",
    "The reading that never should have stopped was intellectualisation purchased at radiology rates: reading the defence correctly is the most cost-effective investigation in the room.",
    "The country that cannot afford the couch is still running on its engineering: family intervention, disclosure cultures and reflective supervision are dynamic ideas working anonymously.",
  ],
  highYieldSummary: [
    "The idea: dynamic therapy treats the patterns that hurt a life (the partners repeatedly chosen, the anger that cannot be felt, the closeness that always flees) on the observation that they were learned so early and so deeply they now run automatically, outside awareness; the therapy makes them visible inside a live relationship and reworks them, slowly, with a trained guide. Every school of psychotherapy descends from psychoanalysis, directly or in reaction, and its founding ideas run everyday clinical medicine: the unconscious (reframed as automatic habits), the conversion of painful feelings into symptoms and defences, transference, and the corrective power of a reliable relationship.",
    "The modern unconscious: not a locked basement of forbidden wishes but an autopilot; early relational knowledge stored as procedures, the way bicycle-riding is stored, with no sentence anywhere that says it. The clinical consequence: a person can sincerely pledge to change and then produce the identical pattern again; dynamic therapy's wager is that procedural learning can only be re-learned procedurally, inside a live relationship, over time, with the old pattern activated and answered differently. Why it is slow, and why it is not replaceable by a lecture.",
    "The defences: the mind's immune system (conversions as individual as fingerprints, on a ladder from primitive (splitting, projective identification) borderline organisation) through the everyday neurotic set (repression, denial, projection, displacement, reaction formation, somatisation, intellectualisation, rationalisation, acting out) to mature (altruism, sublimation, humour). Two disciplines: read them like a fever pattern (diagnostic data, never trivia), and never attack them head-on; defences only change when the underlying feeling becomes speakable.",
    "Transference and countertransference: patients meet doctors through their template; the deferential patient who cannot report the diarrhoea, the hostile patient who 'knew you would dismiss me', the gift-bringer who needs delight. The feeling a patient reliably produces in staff is a sample of what every relationship in their life produces. The clinician's own feelings are induced by the patient's procedures and are therefore data: feel them, own them, use them, never act them out; the instrument works in a three-minute OPD interaction as well as a fifty-minute hour.",
    "The technique: the frame (same time, same room, same duration, the experimental constant, showing its hand in the late-comer, the gift-bringer, the bill-ignorer), free association (imperfect by design; the resistances (sudden blankness, topic-swerve, the prepared speech) are the material), the here-and-now pattern (the core conflict appearing toward the therapist), interpretation (tentative, at the moment it runs, connecting feeling, defence and history: Malan's two triangles in one sentence), and working through (the pattern met, named and answered dozens of times in dozens of moods before the procedural learning updates. The honest reason the therapy has a duration).",
    "The versions and the evidence: classical psychoanalysis (three-to-five sessions weekly, years, the couch) is a small specialised corner; the workhorses are the short-term dynamic therapies (typically 16–40 sessions, one core conflict, active transference work, partial change (Davanloo's ISTDP the intensive descendant)) and the manualised offshoots: mentalization-based treatment (Bateman & Fonagy) and transference-focused psychotherapy (Kernberg's line) for borderline and narcissistic organisation, and dynamic-interpersonal therapy, the 16-session depression protocol used in Britain's national service. The honest position: short-term dynamic therapy performs roughly on par with CBT in meta-analyses of the common disorders; same band, no consistent winner, a sleeper effect of continued gains; MBT and TFP have randomised-trial support in borderline personality; long-term work rests on the Oslo LPP cohort and cognate studies with honest caveats about control conditions; classical analysis proper remains evidence-by-case-series, and exam answers crediting 'insight' as the sole mechanism earn half marks at best, the relationship now understood as a co-equal engine.",
    "The Indian layer: the desert (trained dynamic therapists in the low hundreds against need in tens of millions, concentrated in the metros; the referral question is triage, not preference); the money (₹800–3,000 per session metro private, ₹100–500 NGO and institute sliding, a few free supervised seats, approx 2026; class bias in access said aloud); the tradition (Bose of Calcutta corresponding with Freud from the 1920s, the Indian Psychoanalytic Society founded 1922 (the first psychoanalytic body outside Europe and North America) and the joint-family dissent: the child's drama a crowded multi-caregiver stage, not a single triangle, with dependence threaded differently: the first serious non-Western correction to Freud); the seam (family-embedded selves, secrets as family property, confidentiality contracted explicitly, the skilful therapist working the seam between individual wish and family claim, often the exact conflict producing the symptoms); and the quiet presence of the ideas (family intervention, AA-style disclosure, reflective supervision, the country that cannot afford the couch still running on its engineering).",
    "The clinical bottom line: you already do psychodynamics, or you do it badly; the ten-minute OPD contains transference, defences and countertransference; the defence profile at first consultation changes the next prescription, the documentation and the follow-up plan; psychological-mindedness is assessable in one question; referral discipline earns the therapy its place for relational-repeat presentations, chronicity after adequate protocol therapy and personality-level difficulties, never as default, never as punishment, never as a substitute for treating the episode in front of you; and the rupture, repaired rather than retaliated against, is the most valuable session of the year in any therapy in the building.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "dp-quiz-1",
      question: "The modern, plain-language definition of the unconscious best suited to clinical teaching:",
      options: ["A basement of forbidden sexual wishes", "Dream-content only", "Early relational learning stored procedurally: automatic pattern-knowledge that runs without words", "Everything the patient chooses not to disclose"],
      correctIndex: 2,
      explanation: "The procedural version explains why advice alone fails to change patterned behaviour, and why live relational learning is the corrective.",
      afterSectionId: "mechanism",
    },
    {
      id: "dp-quiz-2",
      question: "A man responds to his wife's illness by researching journal articles on her tumour markers day and night. The defence, and what it defends against:",
      options: ["Displacement onto the doctors", "Intellectualisation, defending against grief and helplessness", "Projection onto the wife", "Acting out"],
      correctIndex: 1,
      explanation: "The vocabulary stands where the feeling should be; the clinical move is to make the feeling speakable, not to confiscate the reading.",
      afterSectionId: "symptoms",
    },
    {
      id: "dp-quiz-3",
      question: "A depressed patient praises you extravagantly every visit, calls the medicine useless, and says you are the only one who understands her. The reading most useful to the prescriber:",
      options: ["Flattery: request a different doctor", "Splitting with idealisation: expect the devaluation cycle, keep documentation steady, and consider personality-level work in the plan", "Hypomania: reduce the antidepressant", "Poor insight: refer for ECT"],
      correctIndex: 1,
      explanation: "The all-good doctor is the same machinery as the future all-bad doctor; the prescriber who plans for the swing keeps the alliance and the chart intact.",
      afterSectionId: "diagnosis",
    },
    {
      id: "dp-quiz-4",
      question: "Short-term dynamic therapy versus CBT for uncomplicated major depression — the honest evidence statement:",
      options: ["Dynamic therapy clearly superior", "CBT clearly superior", "Broadly comparable outcomes in meta-analyses, with CBT more protocolised and faster to deploy; dynamic gains reported to continue post-therapy in some syntheses", "Neither beats placebo"],
      correctIndex: 2,
      explanation: "Equivalence-band findings — the choice turns on pattern-depth, patient preference and availability, not on a league table.",
      afterSectionId: "differential",
    },
    {
      id: "dp-quiz-5",
      question: "The 'rupture' in dynamic therapy refers to:",
      options: ["The termination date arriving", "A break in the frame — missed sessions, boundary-testing, sudden hostility — reproducing the core pattern in the therapy relationship", "A psychotic relapse", "A change of therapist"],
      correctIndex: 1,
      explanation: "Handled with repair rather than retaliation, the rupture becomes the highest-yield material of the treatment.",
      afterSectionId: "management",
    },
    {
      id: "dp-quiz-6",
      question: "Bose's historical dissent from Freud, and its practical Indian echo:",
      options: ["Denied the unconscious exists; hence Indian therapy should be advice-based", "Argued from the joint-family stage that the child's relational world is multi-caregiver, with dependence threaded differently — echoed today in contracting family involvement rather than pathologising it", "Proved Oedipal theory correct in Bengal", "Founded behaviour therapy"],
      correctIndex: 1,
      explanation: "The first non-Western structural critique of the triangle — and a live lesson: the family-Self is the clinical material, not an obstacle to it.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State the procedural-learning version of the unconscious in four sentences, and explain why advice cannot retrain it.", answer: "(1) Most of what the mind does never reaches words: a child learns how relationships work (how closeness feels, what happens after anger, whether needs get met) years before language is available to record it. (2) This early knowledge is stored as procedures, the way bicycle-riding is stored: the body and the emotions know how to do it, and there is no sentence anywhere that says it. (3) A person can therefore sincerely pledge to change ('I will never again fall for someone who needs saving') and then produce the identical pattern again, because the pledge lives in the verbal system while the pattern lives in the procedural one. (4) Dynamic therapy's wager is that procedural learning can only be re-learned procedurally: inside a live relationship, over time, with the old pattern activated and answered differently. Advice cannot retrain it because advice speaks to the wrong system: a lecture updates the narrator, not the autopilot.", topic: "The unconscious" },
    { question: "Give the impulse-anxiety-defence chain for one of your own recent consultations, in the patient's words.", answer: "The structure (Malan's triangle of conflict): the impulse; the unbearable feeling (rage at a dying parent, envy of a sibling, dependence the world will not allow); the anxiety: the signal that it approaches expression; the defence: the conversion that mutes it. Worked example from the teaching set: the retired teacher's 'gas and burning'; the impulse is her unheard objection to her daughter's arranged marriage (in her words, 'what can I say now, everything is fixed'); the anxiety is the flare of 'gas' whenever the alliance is discussed; the defence is somatisation, the conflict transcribed into the body. The exam discipline: name all three vertices in the patient's own words, then say what the chronic deployment of that defence produces as a symptom shape; here, the three scans and two endoscopies nobody needed.", topic: "Defences" },
    { question: "Which two primitive defences announce borderline-level organisation at the first meeting, and what do they look like on a ward round?", answer: "Splitting and projective identification. SPLITTING: people are all-good or all-bad with no middle. The idealised doctor of Tuesday is the villain of Thursday; on the ward, staff are sorted into saviours and saboteurs, and the sorting reverses without warning. PROJECTIVE IDENTIFICATION: the feeling is induced in the other until they carry it; the patient leaves each nurse quietly furious and nobody can say why; on the ward, the signature is a team divided (some staff protective, some staff contemptuous) about one patient whose behaviour seems too small to explain the temperature. The discipline: these are diagnostic of personality organisation, not moral grades, recognising them at the first consultation changes the next prescription, the documentation and the expectation of the medication follow-up: you will plan for the idealisation-to-devaluation cycle instead of being ambushed by it.", topic: "Diagnosis" },
    { question: "Name the three vertices of Malan's triangle of person, and link them to one sentence of an interpretation you could actually say.", answer: "THE VERTICES: the current figure (the person in the patient's life the pattern is running on now, or the therapist in the room), the therapist (the live relationship where the pattern is appearing), and the original figure (the past relationship that supplied the template). THE INTERPRETATION, built to run through all three: 'I notice each time you start to feel something here, you make a joke and turn to my pen. The joking arrived in your life around the same years as your father's illness, and it is the same move your colleagues watch you make when anyone gets close.' One sentence, three vertices: the here-and-now (the joke in this room), the transference (toward the therapist), the history (the father), with the triangle of conflict riding inside it (the feeling, the defence that mutes it, the anxiety that announced it).", topic: "Technique" },
    { question: "What is a 'rupture', and why do dynamic therapists value it rather than dread it?", answer: "DEFINITION: a break in the frame (missed sessions, boundary-testing, sudden hostility) that reproduces the patient's core pattern inside the therapy relationship itself. WHY IT IS VALUED: the pattern that runs automatically, outside awareness, cannot be reworked in the abstract; it has to appear live before it can be answered differently; the rupture is the pattern's live appearance, the most valuable session of the year PROVIDED it is repaired rather than retaliated against. The man who tests every caregiver until they abandon him will test the therapist, and the first time the test is answered with neither retaliation nor flight (the routine, warm reschedule after the angry letter), treatment has begun: the procedural system registers an answered pattern, which no interpretation alone can teach. The clinical trap: ordinary reflex treats rupture as failure and answers with the cold discharge or the rescue-prescription; the abandonment re-enacted by the system in exactly the week the treatment could have begun.", topic: "Technique" },
    { question: "State the honest evidence position for short-term dynamic therapy versus CBT in depression, in two sentences.", answer: "SENTENCE ONE: for the common disorders (depression, anxiety, somatic symptom presentations), bona fide short-term dynamic therapy performs roughly on par with CBT in meta-analyses (effect sizes in the same band, no consistent winner across trials) with CBT more protocolised and faster to deploy, and with some evidence of dynamic gains continuing after therapy ends (the sleeper effect reported in several meta-analytic discussions). SENTENCE TWO: the choice between them turns on pattern-depth, patient preference and availability; dynamic therapy earning its particular place for presentations that are about relationships themselves (repeated destructive patterns, chronic emptiness, personality-level problems) where symptom-protocol therapies thin out, not for circumscribed phobias or first-episode panic, where CBT's protocols are faster and better targeted.", topic: "Evidence" },
    { question: "Give the Bose-Freud disagreement in three lines, and the Indian clinical implication you draw from it.", answer: "LINE ONE: Girindrasekhar Bose of Calcutta corresponded with Freud from the 1920s and founded the Indian Psychoanalytic Society in 1922; the first psychoanalytic body outside Europe and North America. LINE TWO: he dissented from the Oedipus complex, arguing from the Indian joint family's dense, multi-caregiver structure that the child's drama is less a single triangle than a crowded stage, with dependence threaded differently through the life-cycle; the first serious non-Western theoretical correction to Freud. LINE THREE: the clinical implication; the Indian self is family-embedded and secrets are family property, so the skilful therapist works the seam between individual wish and family claim (confidentiality explicitly contracted: 'what, exactly, may I tell your husband?') rather than pathologising the family-Self with a rigidly imported technique, or dissolving the therapy into whatever the uncle is told.", topic: "Indian context" },
  ],
  faqs: [
    { question: "Will I have to lie on a couch and talk about my childhood for ten years?", answer: "Almost never in India today. Most dynamic therapy is face-to-face, seated, weekly, and often time-limited: roughly four months to a year. The couch belongs to classical analysis, a rare speciality practised by few." },
    { question: "Is it not just expensive talking? The medicine does the real work.", answer: "For a clear depressive episode, the medicine plus your own resources may indeed carry it. For repeated patterns (the same marriage twice, the same job crisis, the same emptiness) no tablet yet made teaches a new way of relating. That is the work this therapy does." },
    { question: "My family wants to know what I say in sessions.", answer: "They will be told, with your written consent, only what you agree to share, and usually a summary serves everyone. The rule is contracted at the start, so family involvement can stay high without breaking confidentiality; decide together what goes out." },
    { question: "How do I know my therapist is properly trained?", answer: "Ask two questions: what is your training in this specific method, and are you currently in supervision? A confident answer to both is a good sign anywhere, and the habit protects you in every kind of therapy, not just this one." },
    { question: "Is it suitable for my schizophrenia? For my son's autism?", answer: "Not as the primary treatment: psychosis needs medication-based care and family intervention, and autism needs structured support. Dynamic ideas may still guide the clinician's understanding, but that is different from prescribing the therapy itself." },
    { question: "Will the therapist just blame my mother?", answer: "A bad one might; a good one treats defences and parents' solutions with respect. They were the best available then. The aim is understanding the pattern, not convicting its origin." },
    { question: "Can it be done online?", answer: "Since the pandemic, much of it is, and it works acceptably for many; the frame is just contracted differently: same time, a private room, headphones. Severe instability is better seen in person." },
    { question: "Doctor, you are my only counsellor: is that a problem?", answer: "For brief focal work, no. For long-term therapy with a dependent, fragile patient, one clinician doing both the prescribing and the open-ended therapy loses the outside eye. The ideal is a team, and in most of India the realistic compromise is honest supervision, whoever provides it." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The dynamic-interpersonal therapy (DIT) 16-session protocol — Britain's national service adoption for depression, the stepped-care lineage" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.5 (Part 8) — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Bateman A & Fonagy P — mentalization-based treatment randomised trials and texts for borderline personality (2000s–2020s)" },
      { source: "Kernberg O, Clarkin J & Yeomans F — transference-focused psychotherapy for borderline and narcissistic organisation" },
      { source: "Ulvenes P et al. and the Oslo LPP cohort (Høglend and colleagues) — longitudinal randomised and naturalistic follow-up of long-term dynamic therapy" },
      { source: "Davanloo H — the intensive short-term dynamic psychotherapy (ISTDP) literature from the 1970s–80s onward" },
    ],
    reviews: [
      { source: "Malan D — Toward the Validation of Dynamic Psychotherapy (1973) and the brief-therapy texts: the two triangles, focus, follow-up outcomes" },
      { source: "Leichsenring F, Abbass A et al. — Cochrane and journal meta-analyses of short-term psychodynamic therapy for common mental disorders (the equivalence band with CBT)" },
      { source: "Shedler J — 'The efficacy of psychodynamic psychotherapy' (American Psychologist, 2010), the widely cited synthesis, read with its critics" },
      { source: "Leichsenring F & Rabung S (2008) and later updates — the long-term psychotherapy meta-analyses and the debate they triggered (read as contested, not settled)" },
      { source: "Freud S — the foundational papers on repression, the clinical theory and technique (1900s–1920s), read as the source of concepts, not as current evidence; Bose G — the early Indian psychoanalytic correspondence and dissent on the Oedipal triangle (Indian Psychoanalytic Society records)" },
      { source: "Fonagy P (ed.) — Affect Regulation and the Development of the Self and the contemporary relational-developmental synthesis with the allied infant-research literature" },
    ],
    patientResources: [
      { source: "The two training questions — what is your training in this specific method; are you currently in supervision — the instrument this course hands to every patient and family" },
      { source: "The Indian sliding-scale tier — NGO and institute clinics (from ₹100–500 per session) and supervised training-clinic seats; the Indian Psychoanalytic Society (Kolkata) and the university clinic routes (NIMHANS, CIP Ranchi, Ambedkar University Delhi, TISS Mumbai)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: what the therapy is, the couch myth, the two training questions, the family rules, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The procedural unconscious, the defence list with vignettes, the two triangles, the technique architecture, the honest evidence.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "32 min",
      description: "Full course with the decision path, the Indian layer, the Bose story and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "40 min",
      description: "Everything: the rupture craft, the countertransference discipline, the referral triage, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The procedural unconscious, the defence ladder, the triangles, the evidence band.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the procedural unconscious in four sentences and draw both of Malan's triangles cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Why live relationship re-trains what advice cannot: the implicit-learning architecture and the history of the method.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can run the impulse-anxiety-defence chain for a real patient and say why working through needs repetition." },
    { number: 3, title: "Clinical Practice", description: "Reading defences, assessing psychological-mindedness, the technique, the honest differential and the referral discipline.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can spot splitting and projective identification at the first meeting and write the plan that survives the swing." },
    { number: 4, title: "Indian Context", description: "The therapy desert, the Bose tradition, the family seam, the fees and the training routes.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the two-question training script and work the seam between individual wish and family claim." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the defence-mechanism and triangles questions cold, and state the honest evidence position in two sentences." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.5 (Part 8) — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Freud S — the foundational papers on repression, the clinical theory and technique (1900s–1920s), read as the source of the concepts, not as current evidence", sourceType: "primary", year: "1900s–1920s", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Bose G — the early Indian psychoanalytic correspondence and dissent on the Oedipal triangle (1920s–30s); Indian Psychoanalytic Society records", sourceType: "primary", year: "1920s–1930s", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Malan D — Toward the Validation of Dynamic Psychotherapy (1973) and the brief-therapy texts: the two triangles, focus, follow-up outcomes", sourceType: "primary", year: "1973 onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Davanloo H — the intensive short-term dynamic psychotherapy (ISTDP) literature from the 1970s–80s onward", sourceType: "primary", year: "1970s–1980s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Leichsenring F, Abbass A et al. — Cochrane and journal meta-analyses of short-term psychodynamic therapy for common mental disorders (2010s; the equivalence-band findings with CBT)", sourceType: "meta-analysis", year: "2010s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Shedler J — 'The efficacy of psychodynamic psychotherapy' (American Psychologist, 2010), the widely cited synthesis, read with its critics", sourceType: "review", year: "2010", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Bateman A & Fonagy P — randomised trials and texts on mentalization-based treatment for borderline personality (2000s–2020s)", sourceType: "trial", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Kernberg O, Clarkin J, Yeomans F — transference-focused psychotherapy for borderline and narcissistic organisation", sourceType: "trial", year: "1999–2020s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Leichsenring F & Rabung S (2008) and later updates — the long-term psychotherapy meta-analyses and the debate they triggered (read as contested, not settled)", sourceType: "meta-analysis", year: "2008 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Ulvenes P et al. and the Oslo LPP cohort (Høglend and colleagues) — longitudinal randomised and naturalistic follow-up of long-term dynamic therapy", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Fonagy P (ed.) — Affect Regulation and the Development of the Self and the contemporary relational-developmental synthesis, with the allied infant-research literature", sourceType: "review", year: "2002 onward", dateReviewed: "2026-09-29" },
    { id: "S13", source: "NHRC–NIMHANS and NMHS 2015–16 materials for the Indian treatment-gap context; Ambedkar University / IAPS and Indian journal sources on therapy access and fees — the context tier", sourceType: "government", year: "2015–16 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The modern unconscious: early relational learning stored procedurally (the way bicycle-riding is stored) so that a sincere verbal pledge cannot reach the pattern it addresses; re-learning requires live relational experience over time.", grade: "supported", sources: ["S1", "S2", "S12"] },
    { text: "The defence mechanisms as clinical data: the conversions (repression, denial, projection, projective identification, splitting, displacement, reaction formation, somatisation, intellectualisation, rationalisation, acting out; mature: altruism, sublimation, humour) are as individual as fingerprints, on a ladder from primitive (borderline organisation) to mature; the rung habitually used is diagnostic of personality organisation, not a moral grade.", grade: "supported", sources: ["S1", "S2"] },
    { text: "Transference: the displacement of early relational patterns onto the present figure, doctors included; the deferential patient, the hostile patient, the gift-bringer; the feeling a patient reliably produces in staff is a sample of what every relationship in their life produces.", grade: "supported", sources: ["S1", "S2"] },
    { text: "Countertransference: the clinician's own feelings toward the patient (rescue-longing, dread, contempt, sleepiness) are induced by the patient's procedures and are therefore data; the discipline is to feel, own and use them, never to act them out, never to pretend them absent; usable in a three-minute OPD interaction.", grade: "supported", sources: ["S1", "S4"] },
    { text: "The session architecture: the frame (same time, room, duration, the experimental constant), free association with its resistances as material, the here-and-now pattern, interpretation connecting feeling, defence and history, and working through, one interpretation changing almost nothing, the pattern needing to be met and answered dozens of times before procedural learning updates.", grade: "supported", sources: ["S1", "S4"] },
    { text: "Malan's two triangles: the triangle of conflict (impulse – anxiety – defence) and the triangle of person (current figure – therapist – original figure); brief dynamic therapy compresses the work by focus on a single core pattern with active technique, typically 16–40 weekly sessions, accepting partial rather than total character change. Davanloo's ISTDP the intensive descendant.", grade: "supported", sources: ["S4", "S5"] },
    { text: "The manualised offshoots: mentalization-based treatment (Bateman & Fonagy) for borderline personality with a sturdy frame and a team; transference-focused psychotherapy (Kernberg's line) for borderline and narcissistic organisation; dynamic-interpersonal therapy, the 16-session protocol used in Britain's national service for depression.", grade: "established", sources: ["S8", "S9"] },
    { text: "The honest evidence position: bona fide short-term dynamic therapy performs roughly on par with CBT in meta-analyses of the common disorders (effect sizes in the same band, no consistent winner) with a sleeper effect of gains continuing after therapy ends; MBT and TFP have randomised-trial support for reducing self-harm, hospitalisation and symptom burden in borderline personality, standing alongside DBT in guidelines.", grade: "established", sources: ["S6", "S7", "S8", "S9"] },
    { text: "Long-term dynamic therapy for complex, comorbid, chronic presentations shows benefit in observational and some randomised follow-ups (the Oslo LPP longitudinal cohort the best-known), with honest caveats about control conditions; the Leichsenring & Rabung long-term meta-analyses and their debate are read as contested, not settled; classical psychoanalysis proper remains largely evidence-by-case-series and process research.", grade: "uncertain", sources: ["S10", "S11"] },
    { text: "The rupture as the treatment moment: the break in the frame (missed sessions, boundary-testing, sudden hostility) reproduces the core pattern on the therapist; handled with repair rather than retaliation it is the highest-yield material of the treatment: the first test answered with neither retaliation nor flight being the moment treatment begins.", grade: "supported", sources: ["S1", "S4", "S8"] },
    { text: "The Bose–Freud story: Girindrasekhar Bose of Calcutta corresponded with Freud from the 1920s, founded the Indian Psychoanalytic Society in 1922 (the first psychoanalytic body outside Europe and North America), and dissented from the Oedipus complex on joint-family grounds; the child's drama a crowded multi-caregiver stage with dependence threaded differently; the first serious non-Western theoretical correction to Freud.", grade: "established", sources: ["S3"] },
    { text: "The Indian delivery reality: trained dynamic psychotherapists in the low hundreds against need measured in tens of millions, concentrated in the metros; metro private fees roughly ₹800–3,000 per session, NGO and institute clinics sliding from ₹100–500, a few supervised training-clinic seats free (approx 2026): the referral question being triage, not preference, and class bias in access a fact to be said aloud.", grade: "supported", sources: ["S13"] },
    { text: "The Indian cultural fit: family-embedded selves and family-property secrets; the family commonly attends, funds and monitors the therapy; confidentiality needs explicit contracting; the skilful therapist works the seam between individual wish and family claim (often the exact conflict producing the symptoms) rather than pathologising the family-Self or dissolving into the uncle's report.", grade: "supported", sources: ["S3", "S13"] },
  ],
};
