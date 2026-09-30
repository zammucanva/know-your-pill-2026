import type { PsychiatryCourse } from "./types";

/**
 * PSYCHODYNAMIC THEORIES (psychodynamic-theories) — canonical Psychiatry
 * concept course (migration batch 15, Group Q — Foundations &
 * sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/psychodynamic-theories.md — untouched
 * foundation, itself an original rewrite of the Oxford chs 3.1-3.3
 * (Part 2): Freud's theories and their contemporary development,
 * object relations / attachment / self-psychology, and current
 * psychodynamic approaches). Re-researched against the lineages the
 * note itself cites (Freud's The Ego and the Id, Inhibition,
 * Symptoms and Anxiety and Mourning and Melancholia; Anna Freud's
 * defence catalogue; Hartmann's conflict-free ego sphere; Klein's
 * schizoid-mechanisms notes and Envy and Gratitude; Winnicott's
 * true/false-self and transitional-objects papers; Bowlby's
 * Attachment and Loss with Ainsworth's strange situation; Mahler's
 * symbiosis-individuation work; Kohut's two self books; Kernberg's
 * borderline-narcissism text; Fonagy and Bateman's mentalization
 * synthesis; Leichsenring's trial meta-analytic tradition) with
 * per-claim provenance.
 *
 * BOUNDARY — THEORIES, NOT PRACTICE: this course teaches the
 * theoretical engine the note teaches (the unconscious, conflict,
 * defence, internalised objects, transference, development); the
 * PRACTICE — the frame, technique, formats, evidence tiers, fees and
 * the Indian delivery reality — lives in dynamic-psychotherapy (the
 * note's own pointer: the dynamic-psychotherapy note carries the
 * fuller treatment account). The two courses cross-reference and
 * never duplicate.
 *
 * Neuroscience honesty: the note makes no neurobiological claims
 * ("whatever the neurobiology" is its own phrase for the melancholia
 * model) — brainRegions and neurotransmitters are thin teaching
 * bridges, graded proposed and labelled as the models' functional
 * addresses, never the note's claims; the neuropsychoanalytic
 * literature has no note coverage and no KYP lesson — recorded in
 * contentGaps, never invented.
 *
 * Drug routes: NONE — the note assigns no medication any role in
 * psychodynamic theory; the comorbid-episode tier (the depression of
 * the melancholia model, the borderline crisis) is treated in its own
 * courses; drugLinks is empty by design and the boundary is
 * recorded in contentGaps.
 *
 * Born-normalized metadata: title "Psychodynamic Theories"
 * (topic only, no em-dash subtitle), tagline under 90 characters,
 * summary under 45 words — this course meets the final curriculum
 * normalization rules on arrival.
 */
export const psychodynamicTheoriesCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "psychodynamic-theories",
  title: "Psychodynamic Theories",
  shortName: "Psychodynamics",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Psychodynamic Theories"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Core ideas from Freud to the present — the unconscious, defence, development",

  summary:
    "The psychodynamic tradition supplies psychiatry's developmental grammar: unconscious conflict, defence, transference, internalised objects and the therapeutic relationship as the instrument of change. This course teaches the core ideas from Freud's models to object relations, attachment, self-psychology and mentalization.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Outline Freud's two models — the topographic (conscious, preconscious, unconscious) and the structural (id, ego, superego) — with their clinical logic: the unconscious as the founding discovery, the ego arising in conflict and developing through defence.",
    "Define defence mechanisms with the ego-psychology reading — defences as clinical data, Anna Freud's catalogue (repression, denial, projection, reaction formation, rationalisation, displacement, sublimation, splitting) and the hierarchy from psychotic through neurotic to mature as psychiatry's severity signpost.",
    "Recite the psychoanalytic contributions to psychiatry — the character tradition (the oral-anal-genital characters; the obsessive-compulsive personality as reaction formation against anal drive derivatives), the narcissistic-personality lineage from Freud through Kernberg, and the superego-depression (mourning and melancholia) model.",
    "Describe the object-relations core — internal objects, splitting, projective identification, the paranoid-schizoid and depressive positions; Fairbairn's object-seeking infant, Winnicott's good-enough mother, true/false self, transitional objects and holding, and Mahler's separation-individuation.",
    "State attachment theory's basics — the patterns (secure, anxious-avoidant, anxious-resistant, Main's disorganised addition), the internal working model, separation and loss as developmental risk (protest-despair-detachment), and the clinical implications for the consultation relationship.",
    "Explain self-psychology — the selfobject, the mirroring, idealising and twinship transferences as developmental needs re-emerging, empathic attunement as the instrument, optimal frustration as the mechanism, and the reframing of narcissism from defence to deficit.",
    "Summarise the modern position — the evidence maturation (short-term psychodynamic psychotherapy's trial literature, the common-factors convergence), mentalization as the contemporary integration, and the psychodynamic presence throughout general psychiatry.",
    "Connect each tradition to its clinical present — the personality-disorder trio, dynamic psychotherapy and the couples/family foundations — and hold the boundary between the theories (this course) and the practice (the treatment courses).",
  ],
  quickFacts: [
    { label: "The founding discovery", value: "The unconscious", detail: "The topographic model's third level — repressed material exerting influence without awareness, its royal roads the dream, the slip and the symptom; the 1923 structural model (id, ego, superego) the second model built on it" },
    { label: "The clinical instrument", value: "Defences as data", detail: "Anna Freud's catalogue — repression, denial, projection, reaction formation, rationalisation, displacement, sublimation, splitting — read as clinical data; the level habitually used (psychotic through neurotic to mature) a severity signpost, never a moral grade" },
    { label: "The classical sentence", value: "The anal triad", detail: "Orderliness, parsimony, obstinacy — the obsessive-compulsive character as reaction formation against anal drive derivatives; the character-pathology tradition's most-quoted line" },
    { label: "The narcissism fork", value: "Defence vs deficit", detail: "Kernberg: the pathological grandiose self defending against unbearable aggressive conflict and primitive envy; Kohut: the self built without adequate selfobject experience — the two readings the personality-disorder notes inherit" },
    { label: "The depression model", value: "Mourning and melancholia", detail: "The internalised ambivalently-loved-hated lost object; the ego identifying with the introject; the object-directed hatred now attacking the self — the self-reproaches of melancholia as displaced accusations" },
    { label: "The positions rule", value: "Positions, not stages", detail: "Klein's paranoid-schizoid (part-objects, persecutory anxiety, splitting as survival operation) and depressive (whole objects, the capacity to harm the loved object, guilt and reparation) — maturational positions, not chronological stages, and the depressive position is an achievement, not an illness" },
    { label: "The attachment bridge", value: "The internal working model", detail: "Bowlby's patterns (secure, anxious-avoidant, anxious-resistant — Main's disorganised added) become internalised expectations shaping adult relationships and consultation behaviour; separation runs protest-despair-detachment; operationalised in the strange situation and the Adult Attachment Interview" },
    { label: "The contemporary integration", value: "Mentalization", detail: "Fonagy and Bateman's synthesis — the capacity to hold mind in mind, rooted in attachment, collapsing under attachment stress (the borderline mechanism), restorable as the treatment aim; the present-day integration of object relations, attachment and developmental science" },
  ],
  knowledgeGraph: [
    { label: "Dynamic Psychotherapy", type: "condition", href: "/psychiatry/dynamic-psychotherapy/", note: "The PRACTICE course this theory course feeds — the note's own pointer that the fuller treatment account lives there; the theories here, the treatment there" },
    { label: "Specific Personality Disorder Types", type: "condition", href: "/psychiatry/personality-disorder-types/", note: "J2 — the diagnostic inheritance: the narcissistic lineage from Freud to Kernberg, the obsessive-compulsive character, the splitting-projective-identification engine of borderline organisation" },
    { label: "Treating Personality Disorders", type: "condition", href: "/psychiatry/personality-disorder-treatment/", note: "J3 — the trial tier: transference-focused psychotherapy's evidence and the mentalization-based programme the note's contemporary integration points to" },
    { label: "Family Therapy", type: "condition", href: "/psychiatry/family-therapy/", note: "The India lens's extended-internal-family — the plural, hierarchical object world of the joint family read through the systems frame" },
    { label: "Couples Therapy", type: "condition", href: "/psychiatry/couples-therapy/", note: "The cultural-negotiation discipline the guru-disciple caution invokes — therapy relationships read through Indian relational idioms, never imported wholesale" },
    { label: "Descriptive Phenomenology", type: "condition", href: "/psychiatry/psychiatric-phenomenology/", note: "The form-content discipline the India lens needs for possessive attributions — and Jaspers' boundary line: the descriptive method this explanatory tradition stands against" },
    { label: "Personality Assessment", type: "condition", href: "/psychiatry/personality-assessment/", note: "The psychometric descendant of the character-pathology tradition — the oral-anal-genital characters flowing into the modern personality spectrum and its measurement" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The melancholia model's clinical home — the internalised-object account of self-reproach read alongside the disorder's own course and treatment" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "Mourning against melancholia — the India lens's unritualised deaths and anniversary grief read through the internalised-lost-object model" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The moral-injury presentations — the superego-depression model's reach into trauma's self-directed anger and guilt" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The psychodynamic engine is a story about where symptoms come from. The founding discovery is the unconscious — repressed material exerting influence without awareness, its royal roads the dream, the slip and the symptom. Conflict follows: the id presses for expression, reality and the internalised morality of the superego forbid it, and the ego — the executive that arises in conflict and develops through defence — faces the resulting anxiety. Defence is the conversion: repression, denial, projection, reaction formation, splitting and the rest each convert unbearable conflict into a characteristic shape, and the level of defence (psychotic through neurotic to mature) becomes psychiatry's severity signpost. Development supplies the second engine: stages and the caregiving environment fix where conflict settles — the oral, anal and genital characters; the internalised objects of early relations; the attachment patterns that become the internal working model running on every later relationship, doctors included. Loss supplies the third: in melancholia the ambivalently-loved-hated object is internalised, the ego identifies with the introject, and the hatred once directed at the object attacks the self — the self-reproaches of depression as object-directed accusations, displaced. The therapeutic relationship is the instrument that reads and reworks all three: transference (the internal world running live in the room), countertransference (the clinician's induced feelings as information), and — in the contemporary integration — mentalization, the capacity to hold mind in mind, collapsible under attachment stress and restorable by treatment. What the engine produces is a formulation, not a competing nosology: the lens that converts management problems into understanding, with the trial-tested treatments and the fuller technique account living in the dynamic-psychotherapy course.",
    steps: [
      "The unconscious: repressed material influencing behaviour without awareness — the topographic model's founding discovery, with dreams, slips and symptoms as its royal roads and the conscious and preconscious as the levels above it.",
      "The structural model: the id (the drive-repressed instinctual reservoir), the ego (the executive mediating drive, reality and morality — arising in conflict, developing through defence) and the superego (the internalised parental prohibition and ideal, the unconscious morality of Oedipal identification).",
      "Conflict and its conversion: drive presses, prohibition forbids, anxiety signals — and the ego defends: repression, denial, projection, reaction formation, rationalisation, displacement, sublimation, splitting — Anna Freud's catalogue as the clinical reading of psychopathology, the defence hierarchy (psychotic through neurotic to mature) as the severity signpost, Hartmann's conflict-free sphere as the autonomous-functions caveat.",
      "Development fixes the pattern: the oral, anal and genital characters on the drive line; Mahler's separation-individuation (symbiosis, practising, rapprochement) and Winnicott's good-enough mothering, holding environment and true/false self on the relational line; Kohut's selfobject experiences — the mirroring gleam, the idealisable figure, the twinship kinship — building or failing the self.",
      "Objects internalised: internal representations of self and others structure experience — Klein's splitting (the good and bad breast kept apart) and projective identification (parts of the self located in the other, who is pressured to experience them) in the paranoid-schizoid position; whole objects, guilt and reparation in the depressive position; Fairbairn's object-seeking infant; Bowlby's attachment patterns becoming the internal working model.",
      "Loss and the superego: the mourning-and-melancholia mechanism — the internalisation of the ambivalently-loved-hated lost object, the ego's identification with the introject, the self attacked in place of the hated object; unconscious guilt driving self-attack and self-sabotage (the negative therapeutic reaction).",
      "The relationship as instrument: transference and countertransference as diagnostic and management information; empathic attunement as Kohut's instrument; mentalization — the capacity to hold mind in mind, its developmental roots in attachment, its collapse under attachment stress and its restoration as the treatment aim — as the present-day integration.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "prefrontal-ego", name: "Prefrontal cortex (the ego's office)", role: "The executive mediator of the structural model — the ego standing between drive, reality and morality, and the address of the autonomous functions (perception, memory, motor development) Hartmann freed from conflict. A teaching bridge between the model's functions and the machinery that performs them, graded as such — the note claims functions, not anatomy.", grade: "proposed" },
    { id: "amygdala-signal", name: "Amygdala (the anxiety signal)", role: "The threat response standing where the conflict model puts signal anxiety — the affect the defence exists to mute — and the alarm behind Bowlby's proximity-maintenance attachment system. The bridge between the theories' functional claims and their neural counterparts, honestly graded.", grade: "proposed" },
    { id: "mentalizing-network", name: "Mentalizing network (the mind-in-mind machinery)", role: "The medial prefrontal-temporoparietal system the capacity to hold mind in mind runs on — mentalization's functional address in the contemporary integration, whose collapse under attachment stress is the borderline mechanism the note teaches. The note names the capacity, not the circuit — the grade records the distance.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Oxytocin", symbol: "OT", role: "The attachment system's chemistry — the proximity-maintenance bond Bowlby's ethological grounding describes and the trust the therapy-as-attachment-relationship recruits. A teaching bridge the note's attachment material licenses, graded as such.", grade: "proposed" },
    { name: "Serotonin", symbol: "5-HT", role: "The affect-regulation counterpart to the melancholia model — the depression whose self-reproach the internalised-object mechanism explains, 'whatever the neurobiology' in the note's own words. The chemistry is the explaining layer the theory deliberately does not need — the route lives in the Depressive Disorders course, never here.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "conflict-pathway",
      name: "The conflict pathway (drive to symptom shape)",
      steps: [
        { label: "The unconscious drive derivative", detail: "The instinctual press — the id's demand, repressed from awareness but exerting influence without it" },
        { label: "Signal anxiety", detail: "The ego's alarm as the drive approaches expression — Inhibition, Symptoms and Anxiety's conversion of the older trauma model" },
        { label: "The defence deployed", detail: "The conversion: repression, denial, projection, reaction formation, displacement, splitting — as individual as fingerprints, the level used diagnostic of organisation" },
        { label: "The chronic deployment", detail: "The defence fixed as character — reaction formation against anal derivatives becoming the orderliness-parsimony-obstinacy of the obsessive-compulsive personality" },
        { label: "The symptom shape", detail: "The presentation the clinic meets — the character disorder, the inhibited life, the psychosomatic transcription" },
      ],
      clinicalManifestation: "The obsessive character's orderliness, parsimony and obstinacy — the anal derivatives converted by reaction formation into a life.",
      grade: "supported",
    },
    {
      id: "development-pathway",
      name: "The developmental pathway (stage and caregiving to adult pattern)",
      steps: [
        { label: "The developmental moment", detail: "The stage or the caregiving environment — oral, anal, genital; or the mirroring, idealising and twinship selfobject milieu; or the attachment figure's availability" },
        { label: "Fixation or failure", detail: "The conflict settling at a stage; the empathic failure (the parents' unavailability); the separation-individuation disturbance at rapprochement; the not-good-enough mothering producing the compliant false self" },
        { label: "The internalised pattern", detail: "The character (the anal triad), the deficient self with its grandiose compensation, or the attachment pattern becoming the internal working model" },
        { label: "The adult presentation", detail: "The personality constellation; the narcissistic emptiness behind the grandiosity; the dismissing 'I'm fine', the ambivalent clinging-devaluing, the disorganised approach-and-avoidance of the consultation room" },
      ],
      clinicalManifestation: "The narcissistic patient's grandiose self — Kohut's reading (the selfobject deficit compensated) against Kernberg's (the defence against unbearable aggression and envy).",
      grade: "supported",
    },
    {
      id: "melancholia-pathway",
      name: "The melancholia pathway (ambivalent loss to self-attack)",
      steps: [
        { label: "The ambivalent object lost", detail: "The loved-and-hated object — the tie that mourning would gradually withdraw" },
        { label: "The internalisation", detail: "The lost object taken inside — the introject that cannot be left, in the melancholic, as the mourner leaves the grave" },
        { label: "The identification", detail: "The ego identifying with the introjected object — the self now standing where the object stood" },
        { label: "The hatred redirected", detail: "The object-directed accusations displaced onto the self — the hatred once aimed at the ambivalently-held object now attacking the ego that wears it" },
        { label: "The depressive self-reproach", detail: "The self-attack and guilt of severe depression, reinforced by the superego's strictness — the internalised critic patients can be shown and used" },
      ],
      clinicalManifestation: "The widow whose self-reproaches itemise her husband's faults — the accusations meant for him, displaced onto herself.",
      grade: "proposed",
    },
  ],
  timeline: [
    { id: "founding-decades", time: "1900–1926", title: "Freud's models", description: "The topographic model (conscious, preconscious, unconscious — dreams, slips and symptoms as the unconscious's royal roads); Mourning and Melancholia (1917) supplying the depression model; the structural model of The Ego and the Id (1923) — id, ego, superego; Inhibition, Symptoms and Anxiety (1926) converting anxiety from trauma to signal.", phase: "onset" },
    { id: "ego-psychology-era", time: "1936–1939", title: "Ego psychology", description: "Anna Freud's The Ego and the Mechanisms of Defence (1936) — the defence catalogue as the clinical reading of psychopathology; Hartmann's Ego Psychology and the Problem of Adaptation (1939) — the conflict-free ego sphere and the autonomous functions (perception, memory, motor development).", phase: "onset" },
    { id: "object-relations-era", time: "1946–1968", title: "The object-relations turn", description: "Klein's Notes on Some Schizoid Mechanisms (1946) — splitting, projective identification and the positions; Fairbairn's object-seeking (not pleasure-seeking) infant; Winnicott's transitional objects (1953), true/false self and good-enough mothering; Mahler's On Human Symbiosis and the Vicissitudes of Individuation (1968) — the separation-individuation map.", phase: "peak" },
    { id: "attachment-era", time: "1969–1980", title: "Attachment theory", description: "Bowlby's Attachment and Loss trilogy (1969, 1973, 1980) — the ethologically grounded attachment system, the patterns, the internal working model, separation and loss; Ainsworth's strange situation operationalising the patterns, with the Adult Attachment Interview later bridging theory to measurement.", phase: "peak" },
    { id: "self-psychology-era", time: "1971–1977", title: "Self-psychology and the narcissistic crystallisation", description: "Kohut's The Analysis of the Self (1971) and The Restoration of the Self (1977) — the selfobject, the mirroring-idealising-twinship transferences, empathic attunement; Kernberg's Borderline Conditions and Pathological Narcissism (1975) — the grandiose self as defence, the diagnostic crystallisation the personality-disorder notes inherit.", phase: "duration" },
    { id: "contemporary-era", time: "1990s–now", title: "The current position", description: "The evidence base's maturation — short-term psychodynamic psychotherapy's trial literature and the Leichsenring meta-analytic tradition; the common-factors convergence; Fonagy and Bateman's mentalization synthesis as the contemporary integration; the psychodynamic presence throughout general psychiatry — defences, transference and countertransference as the clinical-read discipline.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the theory as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "Structural, not numerical — the note's lineage records no survey counts, and the honest epidemiology of a theory is its reach. Every school of psychotherapy descends from psychoanalysis, directly or in reaction; the concepts run general psychiatry daily (the defence-reading of behaviour, the transference-reading of the consultation, the mentalization response to the borderline crisis); and the trial-tested forms (short-term psychodynamic psychotherapy, the manualised offshoots) carry the tradition into evidence-based care. Numbers for the therapy's availability and cost belong to the dynamic-psychotherapy course, never invented here.",
    indianPrevalence: "The concept-level imports are free — the internal critic, the good-enough parent, the mind-minded conversation — deliverable in any Indian OPD without a school allegiance, as the note's India lens states plainly. The Indian theoretical reception runs from the joint family's reshaping of the object world to the plural-hierarchical internalised objects of extended-family patients; the therapy-delivery layer (who can actually offer dynamic treatment, at what cost) is the dynamic-psychotherapy course's account.",
    lifetimeRisk: "Not applicable as a risk — a theory carries no incidence. The structural variable the note does teach: developmental risk itself — separation and loss (Bowlby's protest-despair-detachment), the empathic-failure environment (Kohut), and the not-good-enough caregiving (Winnicott) are the exposures the tradition identifies.",
    genderRatio: "Not applicable — though the tradition's own history carries the caution: classical drive theory's Oedipal centre is Western-family-specific, and the Indian joint-family material (the extended object world, the father's distance, the mother-in-law's authority) reshapes the object-relations reading for every patient in front of you.",
    ageOfOnset: "Not applicable — the patterns the theories describe are laid down developmentally and surface across adult life; the ego psychology reading (the defence level as severity signpost) rather than any demographic dates the clinical timetable.",
    indianNotes: "The Indian layer is conceptual, not statistical: the mourning-and-melancholia fit with Indian bereavement presentations (the unritualised deaths, the anniversary grief, the 13-day rites and yearly shraddha functioning as collective reparation work); somatisation as the culturally-sanctioned defence; and the guru-disciple caution for transference concepts meeting hierarchical, devotion-shaped authority relations — all taught in the Indian Context lesson.",
  },
  etiology: [
    { category: "psychological", factor: "The conflict model", details: "Unconscious conflict between drive, reality and internalised morality producing signal anxiety, converted by defence into symptom and character — the topographic and structural engine; the symptom as the compromise the ego could reach." },
    { category: "psychological", factor: "The developmental-fixation model", details: "The stages and their conflicts fixing the pattern — the oral, anal and genital characters (the anal triad as reaction formation against anal drive derivatives); Mahler's separation-individuation disturbances; Winnicott's not-good-enough mothering producing the compliant false self protecting the unrealised true self." },
    { category: "psychological", factor: "The object-relations and deficit model", details: "Internalised representations of self and others structuring experience — splitting and projective identification as the primitive operations; the failure of the depressive position (whole objects, guilt, reparation) underlying the borderline picture; Kohut's selfobject failures producing the deficient self with its grandiose compensation." },
    { category: "psychological", factor: "The attachment model", details: "The internal working model — internalised relational expectations from the early patterns (secure, avoidant, resistant, disorganised) shaping adult relationships and treatment relationships; separation and loss as developmental risk, running protest-despair-detachment." },
    { category: "psychological", factor: "The superego model", details: "The internalised prohibition and ideal as aetiology — unconscious guilt driving self-attack and self-sabotage (the negative therapeutic reaction), and the melancholia mechanism: the internalised ambivalently-loved-hated lost object attacked through the ego that identified with it." },
  ],
  symptomClusters: [
    {
      category: "1. The defence-level signals",
      symptoms: ["Splitting — people all-good or all-bad, the incapable-of-grey perception under stress; a level of organisation, never an insult", "Projective identification — parts of the self located in the other until the other carries them: the ward divided about one patient, some staff protective, some contemptuous", "Projection and denial at the psychotic end; repression, reaction formation, displacement, intellectualisation at the neurotic level; sublimation and the mature conversions at the top of the ladder", "The hierarchy itself as the datum: the rung habitually used is the severity signpost — psychotic defences through neurotic to mature"],
    },
    {
      category: "2. The character presentations",
      symptoms: ["The anal triad — orderliness, parsimony, obstinacy — as reaction formation against anal drive derivatives (the obsessive-compulsive character)", "The oral and genital characters of the classical tradition; Abraham's hysterical personality; the character-constellation literature flowing into the modern personality-disorder spectrum", "The narcissistic presentation — the grandiose self, the emptiness beneath it, the empathy-deficit reading against the defence reading", "The false-self presentation — the compliant, imitative life protecting an unrealised true self (Winnicott)"],
    },
    {
      category: "3. The self-attack presentations",
      symptoms: ["The self-reproaches of melancholia — itemised, relentless, tracking the lost object's faults: the object-directed accusations, displaced", "Unconscious guilt as self-sabotage — the negative therapeutic reaction, the deterioration after the well-meant success", "The moral-injury shape — trauma's self-directed anger and guilt (the PTSD note's presentations read through the superego model)"],
    },
    {
      category: "4. The attachment-relational signals",
      symptoms: ["The dismissing consultation — the anxious-avoidant patient's 'I'm fine', the help declined; the ambivalent patient's clinging-devaluing; the disorganised patient's simultaneous approach-and-avoidance", "The internal working models driving consultation behaviour — expectations, not symptoms, predicting the therapy relationship's power and its crashes", "Mentalization collapse under attachment stress — the borderline crisis: impulse and self-harm where thinking about minds should be", "Somatisation as the culturally-sanctioned defence — the body speaking the unspeakable in the conversion-spectrum presentations that reach Indian clinics"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "Freud's two models",
      code: "The definitional apparatus",
      criteria: [
        "The topographic model (the first): conscious, preconscious, unconscious — the levels of the mind, with the unconscious (repressed material exerting influence without awareness) as the founding discovery and dreams, slips and symptoms as its royal roads.",
        "The structural model (the second, 1923): the id (the drive-repressed instinctual reservoir), the ego (the executive mediating drive, reality and morality — arising in conflict, developing through defence) and the superego (the internalised parental prohibition and ideal, the unconscious morality of Oedipal identification).",
        "The exam discipline: conscious/preconscious/unconscious answers the topographic question; id/ego/superego answers the structural question — the two lists are never interchangeable.",
      ],
      duration: "The apparatus of the whole tradition — every later school (ego psychology, object relations, self-psychology) modifies the second model's ego, not the first model's discovery.",
      indianNote: "Indian postgraduate vivas open with exactly this discrimination — the candidate who answers 'id, ego, superego' to a topographic question has failed the first question.",
    },
    {
      system: "The levels-of-defence taxonomy",
      code: "Ego psychology's severity ladder",
      criteria: [
        "Psychotic-level defences: splitting, projective identification, denial — the part-object world of the paranoid-schizoid position, announcing borderline-level organisation.",
        "Neurotic-level defences: repression, reaction formation, displacement, intellectualisation, rationalisation — the compromise formations of the classical model.",
        "Mature defences: sublimation and the conversions that build — the ladder's top rung, the severity signpost read downward.",
        "The reading rule: defences are clinical data — the rung habitually used is diagnostic of organisation and prognosis, never a moral grade; the catalogue (Anna Freud) is the instrument.",
      ],
      duration: "Assessable at first contact — the defence profile changes the next prescription, the documentation and the follow-up plan.",
      indianNote: "The Indian viva format: one vignette, one defence, one line — the saucepan thrown at the maid (displacement), the transmitter-systems questions at the father's bedside (intellectualisation), the Tuesday-doctor idealisation that Thursday devalues (splitting).",
    },
    {
      system: "The object-relations apparatus",
      code: "Positions, selves and objects",
      criteria: [
        "The paranoid-schizoid position: part-objects, persecutory anxiety, splitting as the survival operation — the good and bad breast kept apart in the all-good/all-bad world.",
        "The depressive position: whole objects, the capacity to harm the loved object, guilt and reparation — the maturational achievement, its failure the borderline picture. Positions, not stages — and not clinical depression.",
        "Projective identification: parts of the self located in the other, who is then pressured to experience them — the clinical engine of borderline organisation.",
        "Winnicott's additions: the good-enough mother whose calibrated failures build the child's reality-sense; the holding environment; the true/false self; the transitional object and the capacity to be alone.",
        "Kohut's selfobject: the other's functions (the mirroring parent's gleam, the idealisable figure, the twinship kinship) experienced as part of the self — failure producing the deficient self.",
      ],
      duration: "The apparatus organises the personality-disorder examinations — borderline and narcissistic organisation are read through it.",
      indianNote: "The internalised objects of Indian patients are plural and hierarchical — the extended-internal-family of the joint family — which the systems reading of the family-therapy course carries.",
    },
    {
      system: "The attachment-pattern taxonomy",
      code: "Bowlby's patterns and their operationalisation",
      criteria: [
        "Secure: the confident explorer — the attachment figure as the safe base from which the world is approached.",
        "Anxious-avoidant: the defended, dismissing pattern — proximity forgone, need disowned, the 'I'm fine' of the consultation room.",
        "Anxious-resistant: the ambivalent, clinging pattern — the simultaneous demand for and anger at care, the clinging-devaluing swing.",
        "Main's disorganised addition: the simultaneous approach-and-avoidance — the frightened and frightening caregiver producing the unresolved pattern.",
        "The operationalisation: Ainsworth's strange situation for the infant patterns; the Adult Attachment Interview as the bridge from theory to measurement; the internal working model as the adult residue shaping every relationship including the therapeutic one.",
      ],
      duration: "The patterns are laid down early and run as expectations — the consultation relationship is itself an attachment relationship.",
      indianNote: "The joint family's distributed caregiving (multiple attachment figures, the grandmother's centrality) fits the selfobject and good-enough-caregiver concepts better than the single-mother model — the Indian teaching version of 'empathic attunement' is plural.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Topographic versus structural model", distinguishingFeatures: "The two lists the examinations endlessly confuse: conscious, preconscious, unconscious (the levels of awareness — the first model) against id, ego, superego (the agencies — the second, 1923).", keyDifferentiator: "Answer the question asked: 'parts of the mind's awareness' takes the topographic list; 'the structural trio' takes the agencies — the candidate who mixes them has failed the discrimination the exam exists to test." },
    { condition: "Mourning versus melancholia", distinguishingFeatures: "Freud's own boundary: mourning — the gradual, unambivalent withdrawal of libido from the lost object, painful but world-consistent; melancholia — the ambivalent object internalised, the ego identified with the introject, the hatred attacking the self.", keyDifferentiator: "The self-reproach content: the mourner grieves the loss; the melancholic itemises the lost object's faults through the self that now wears it — the accusations' content belongs to the object, not to the person voicing them." },
    { condition: "Narcissism as defence versus narcissism as deficit", distinguishingFeatures: "Kernberg: the pathological grandiose self as defence against unbearable aggressive conflict, particularly primitive envy — confrontation viable, the devaluation expected. Kohut: the self built without adequate selfobject experience — the grandiosity a compensation for deficit, the transferences developmental needs re-emerging, empathy the instrument.", keyDifferentiator: "The treatment logic follows the reading: defence — the grandiosity interpreted, the aggression worked; deficit — the selfobject needs met through attunement with optimal frustration. The personality-disorder notes carry both readings; the exam wants the fork named with its two authors." },
    { condition: "The paranoid-schizoid versus the depressive position", distinguishingFeatures: "Klein's positions: paranoid-schizoid — part-objects, persecutory anxiety, splitting; depressive — whole objects, the capacity to harm the loved object, guilt and reparation, the maturational achievement whose failure underlies the borderline picture.", keyDifferentiator: "Neither is an illness and neither is a stage: they are positions the mind moves between under stress — and 'depressive position' never means clinical depression, the single most-marked confusion in this territory." },
    { condition: "The attachment patterns against each other", distinguishingFeatures: "Secure (the confident explorer), anxious-avoidant (the defended dismissing), anxious-resistant (the ambivalent clinging), disorganised (Main's addition — the simultaneous approach-and-avoidance).", keyDifferentiator: "The consultation signature: the dismissing 'I'm fine', the ambivalent testing-and-devaluing, the disorganised approach that cannot settle — the pattern visible in the first ten minutes of any relationship, the doctor's included." },
    { condition: "Dynamic theory versus dynamic therapy (this course versus the practice)", distinguishingFeatures: "The theories (this course): the models, the defences, the positions, the patterns — the grammar of formulation. The practice (dynamic-psychotherapy): the frame, free association, interpretation, working through, the brief and manualised formats, the evidence tiers, the fees.", keyDifferentiator: "The referral question: understanding runs on the theories; treatment runs on the practice — the note's own boundary, with the fuller treatment account deliberately living in the dynamic-psychotherapy course." },
  ],
  management: [
    { category: "psychotherapy", name: "Write the psychodynamic formulation", description: "The theories' practical output: the conflict-anxiety-defence chain, the developmental history that set it, and the object-relational present that runs it — written for the patient in front of you. The defence-reading of behaviour converts management problems into formulation: the splitting patient, the projecting paranoiac, the reaction-forming obsessive.", whenToUse: "Every presentation whose repetition is the datum — the same marriage twice, the same job crisis, the difficult patient the ward cannot name.", indianContext: "The formulation is deliverable in the Indian OPD without a school allegiance — the concepts free, the writing discipline portable, the mental status and phenomenology carrying the descriptive half." },
    { category: "psychotherapy", name: "The mentalization response — the borderline crisis protocol", description: "The note's emergency teaching: attachment stress collapses mentalization, producing impulse and self-harm; the treatment is the calm, mind-minded response — naming states, slowing the collapse, the mind-in-mind conversation — before any interpretation, after safety.", whenToUse: "Every borderline crisis: the self-harm in casualty, the rage on the ward, the phone call after the rupture.", indianContext: "A zero-cost Indian clinical skill, as the note states — the J3 programme in its smallest unit, usable by any clinician in any setting with no allegiance and no equipment." },
    { category: "psychotherapy", name: "Empathic attunement as the management instrument", description: "Kohut's gift to the general psychiatrist: the narcissistic patient managed through attunement rather than confrontation — the mirroring, idealising and twinship needs acknowledged, survivable disappointments (optimal frustration) building structure where confrontation would shatter the grandiose self.", whenToUse: "The narcissistic presentation — the devaluing patient, the special-pleading patient, the grandiose compliance failure.", indianContext: "The countertransference discipline rides with it: the clinician's induced feelings (dread, contempt, rescue-longing) are data, felt, owned, used — never acted out." },
    { category: "psychotherapy", name: "The relationship-reading of compliance, hostility and dependency", description: "Transference and countertransference as diagnostic and management information: the therapy relationship as an attachment relationship whose expectations (the dismissing, the ambivalent, the disorganised signatures) predict the consultation's power and its crashes — and whose induced feelings map the patient's procedures.", whenToUse: "Every follow-up that is going wrong without a clinical reason — the missed appointments, the side-effect battles, the hostile dependence.", indianContext: "The guru-disciple caution applies: authority relations in Indian contexts are hierarchical and devotion-shaped — read the therapy relationship through Indian relational idioms rather than imported wholesale." },
    { category: "psychotherapy", name: "The superego-depression model, patient-usable", description: "The internalised-critic explanation of severe depression: the lost-object anger turned inward, the self-attack as displaced accusation — an account patients can use, and one that explains the moral-injury shape of trauma presentations without replacing the medical treatment of the episode.", whenToUse: "The severe depressive episode with relentless self-reproach; the grieving patient whose guilt itemises the dead.", indianContext: "Indian bereavement presentations read naturally through the internalised-lost-object model — the culture's ritual architecture (the 13-day rites, the yearly shraddha) functioning as collective reparation work the formulation can honour rather than pathologise." },
    { category: "service-design", name: "Hold the honest boundary — lens, not nosology", description: "The note's own closing discipline: dynamic theory as a lens inside general psychiatry, not a competing classification — formulations alongside diagnoses, never instead of them; the episode treated medically; the practice referred properly.", whenToUse: "Every formulation written — the diagnostic half carried by the descriptive method, the treatment half by the therapy courses.", indianContext: "The Indian OPD's honest tiering: the concepts free and universal; the therapy scarce and priced (the dynamic-psychotherapy course's account); the referral question always triage, never fashion." },
  ],
  safety: {
    redFlags: [
      "Mentalization collapse with active self-harm — impulse where thinking about minds should be: safety first, the mind-minded response second, interpretation never",
      "The self-attack escalating — the melancholic self-reproach hardening into suicidal planning: the object-directed accusations are lethal in their displacement, and the depressive episode's own risk assessment governs",
      "The negative therapeutic reaction — the patient deteriorating after the well-meant success or the good session: unconscious guilt and self-sabotage are clinical events, not surprises",
      "Somatisation concealing medical disease — the body speaking the unspeakable is a reading, never a diagnosis: the unexplained symptom is unexplained, not 'functional', until the medical workup is genuinely done",
      "The ward divided about one patient — the projective-identification signature (some staff protective, some contemptuous): a team split is clinical information about the patient, and an escalation risk to be managed by the team, not in it",
    ],
    urgentGuidance:
      "The order of operations: (1) risk before meaning — assess self-harm and suicide in the crisis before formulating it; the mentalization response is the emergency treatment after safety, never instead of it; (2) the calm, mind-minded response — name states, slow the collapse, keep the conversation about minds: the mind-in-mind discipline works in casualty as well as the consulting room; (3) treat the episode — the depression of the melancholia model is a depressive episode with its own medical management (the Depressive Disorders course's route); the formulation runs alongside, never instead; (4) the somatic presentation gets its medical workup — the somatisation reading explains the presentation, it never replaces the investigation; (5) the team split is brought to the team meeting — the projective identification named in supervision, not enacted on the ward round.",
  },
  drugLinks: [],
  contentGaps: [
    "No drug lessons are linked: the note assigns no medication any role in psychodynamic theory — the comorbid-episode tier (the depression of the melancholia model, the borderline crisis) is treated in its own courses and the routes are never invented here.",
    "The neuropsychoanalytic bridge (the Solms-Panksepp line seeking neural correlates of the dynamic constructs) has neither note coverage nor a KYP lesson — the note makes no neurobiological claims and none are invented; the brainRegions and neurotransmitters here are labelled teaching bridges, graded proposed.",
    "The conversion-spectrum presentations the India lens invokes (the body speaking the unspeakable) have no dedicated KYP lesson — the somatisation defence is taught here and in dynamic-psychotherapy; the somatic-presentation course itself is awaited.",
    "The full psychosexual stage account (the oral, anal, phallic, genital sequence as stages, beyond the character derivatives the note teaches) has no KYP lesson — the characters and their classical sentence are taught here at theory level.",
    "The guru-disciple and devotional-framework material the India lens gestures toward (the couples note's cultural-negotiation discipline) has no dedicated lesson — the caution and its clinical discipline are taught in the Indian Context lesson here.",
  ],
  patientGuide: {
    whatIsIt:
      "A way of understanding minds, not an illness: the family of ideas that began with Freud and grew through object relations, attachment theory and self-psychology to today's mentalization approach. Its core claims in plain words: important parts of mental life run without awareness; painful feelings get converted — into body complaints, into habits of character, into the way we treat people; the patterns were learned early, in relationships, and they show up again in every new relationship — including the one with your doctor. When doctors use this thinking, they are reading your situation more deeply, not diagnosing you with a theory.",
    whatCausesIt:
      "Nothing is broken. The ideas say that early experiences teach each of us what to expect from people, and that some feelings — anger at those we depend on, grief, envy — are too risky to feel openly, so the mind converts them into other things: the 'gas' that rises at tense times, the excessive politeness that sits on resentment, the self-blame that belongs elsewhere. The conversions were the best solutions available when they were built.",
    symptoms:
      "Not applicable as an illness. The patterns this thinking explains: the same relationship repeating; self-criticism that itemises someone else's faults; body complaints that survive every scan; sudden swings between idealising and devaluing people (the doctor who was perfect last week is useless this week — that is 'splitting', a recognised pattern under stress, not an insult); getting worse after good news; and self-harm when feelings overflow thinking.",
    treatment:
      "This thinking itself is not a treatment — it is how your doctor understands you. It shows up as a formulation (the story connecting your symptoms to your history), as calmer, more 'mind-minded' responses in a crisis, and as psychotherapy when it is indicated — the therapy's own account (what it is like, how long, what it costs) is a separate lesson your doctor can point you to. The medicines, when an episode like depression is present, are prescribed on their own grounds and continue alongside.",
    selfHelp: [
      "The internal-critic check: when the self-blame starts, ask whose voice it sounds like and what it accuses you of — the accusations often belong to someone or something else, displaced.",
      "The expectation check: notice what you expect from doctors — that they will dismiss you, that you must please them, that needing them is shameful. Those expectations were learned, and telling the doctor about them helps.",
      "The body check: keep the medical appointments and the scan results — 'the body speaking' is a reading of the complaint, never a reason to skip the workup.",
      "The rites and routines of grieving, where your family keeps them, are not superstition to apologise for — collective mourning is reparation work, and it works alongside medical care.",
      "When feelings overflow thinking — self-harm urges, rage, despair — the emergency skill is slowing down: name the state ('I am overwhelmed'), tell someone safe, let thinking about the situation return before acting on it.",
    ],
    whenToSeekHelp: [
      "Any self-harm or thoughts of self-harm — immediately; safety comes first and the understanding comes after",
      "Self-blame after a loss that itemises the dead person's faults and will not soften — the grief has turned inward and needs help",
      "The same painful relationship pattern a third time — that repetition is exactly what this thinking and the therapy built on it treat",
      "Body complaints surviving a completed workup — ask the doctor directly whether the body could be carrying what is hard to say",
      "Getting worse after good news or good sessions — say so at the next visit; it is a known, treatable pattern, not a failure",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — for distress, crises and guidance on where to go",
      "The district hospital psychiatry OPD under the DMHP — where the formulation, the medicines and the follow-up live for most families",
      "The treating team's family session — ask for the visit where the pattern, not only the prescription, is discussed with everyone who matters present",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs psychodynamic theory — it arrives through the textbooks, the postgraduate curriculum and the viva tradition, not through a service framework. The note's own position is the honest one for Indian practice: the concept-level imports (the internal critic, the good-enough parent, the mind-minded conversation) are free and deliverable in any Indian OPD without a school allegiance — the theories as clinical optics, never a membership requirement.",
    systemContext: "The Indian patient meets these ideas inside the district OPD or the DMHP psychiatric tier, in a ten-minute consultation where the full apparatus cannot run but its grammar can: the defence-reading of the presenting behaviour, the attachment-expectation reading of the consultation itself, and the mind-minded response to the borderline crisis — the zero-cost skill the note names as the J3 programme in its smallest unit. The therapy-delivery layer (who can offer dynamic treatment, at what cost, in which cities) is the dynamic-psychotherapy course's account, deliberately not duplicated here.",
    programmeContext: "The DMHP district tier and Tele-MANAS 14416 are the orthodox channel; the psychodynamic contribution to that channel is conceptual — the difficult-patient formulation, the relationship-reading of compliance and hostility, and the crisis discipline — rather than a programme of its own. The mentalization frame travels perfectly, as the note states: naming states, slowing the collapse, the mind-in-mind conversation are deliverable at every tier of the Indian system.",
    costConsiderations: "The theories cost nothing to use — the note's own point about the concept-level imports. What carries cost is the therapy built on them, whose Indian prices, sliding scales and scarcity the dynamic-psychotherapy course records (the referral question always triage, never preference); this course teaches what the referring psychiatrist must know to make that triage intelligently.",
    culturalConsiderations: "The cultural-grammar caution comes first: classical drive theory's Oedipal centre is Western-family-specific — the Indian joint-family material (the extended object world, the father's distance, the mother-in-law's authority) reshapes the object-relations reading, and internalised objects in Indian patients are plural and hierarchical. The mourning-and-melancholia clinical fit is the strongest bridge: Indian bereavement presentations (the unritualised deaths, the anniversary grief of the widow) read naturally through the internalised-lost-object model, with the culture's ritual architecture — the 13-day rites, the yearly shraddha — functioning as collective reparation work. The attachment teaching fits distributed caregiving (multiple attachment figures, the grandmother's centrality) better than the single-mother model — the Indian teaching version of empathic attunement is plural. The defence-reading of Indian presentations names somatisation as the culturally-sanctioned defence — the body speaking the unspeakable — and the possessive-attribution idiom ('someone has done something') as projection-shaped content requiring the form-content discipline of the phenomenology course. And the guru-disciple caution: transference concepts meet Indian contexts where authority relations are explicitly hierarchical and devotion-shaped — the therapy relationship read through Indian relational idioms rather than imported wholesale.",
    patientCounselling: [
      "The internal-critic script: 'The voice calling you worthless was not born in you — it is the anger that belonged elsewhere, turned inward. Naming that is the first step out of it.'",
      "The grief script: 'Your rites are not superstition — the thirteen days and the yearly shraddha are your culture's way of doing the repair work grief needs. We treat alongside them, never instead of them.'",
      "The splitting script: 'When stress rises you may see people as all-good or all-bad — including us. It is a recognised pattern, not a verdict on anyone, and it settles as the stress does.'",
      "The body script: 'The scans were right to do — and now that they are clear, we can ask what the body might be saying that words have not.'",
      "The mind-minded script for the crisis: 'Right now feelings are running faster than thinking. Let us slow down together — name what is happening, and let the thinking about it come back before anything is acted on.'",
    ],
  },
  decisionPath: {
    title: "When the psychodynamic formulation adds value in the live pathway",
    nodes: [
      {
        id: "start",
        question: "The clinical picture is in front of you. Which difficulty is actually presenting?",
        branches: [
          { label: "A management problem — the difficult patient, the compliance battle, the hostile dependence", next: "defence-gate" },
          { label: "Severe depression with relentless self-reproach and guilt", next: "melancholia-gate" },
          { label: "The borderline crisis — impulse or self-harm under attachment stress", next: "crisis-gate" },
          { label: "The narcissistic presentation — grandiosity, devaluation, special pleading", next: "narcissism-gate" },
          { label: "The repeated pattern after the episode is treated", next: "referral-gate" },
        ],
      },
      {
        id: "defence-gate",
        question: "Read the behaviour as data: which level of defence is running?",
        branches: [
          { label: "Splitting, projective identification — the team divided about one patient", next: "organisation-path" },
          { label: "Repression, reaction formation, displacement — the neurotic set", next: "formulation-path" },
        ],
      },
      {
        id: "organisation-path",
        question: "Primitive defences announcing borderline-level organisation.",
        recommendation: "The formulation names the organisation (splitting, projective identification) and the plan changes accordingly: steady documentation, no new prescriptions at moments of idealisation, the devaluation swing predicted kindly when the alliance can hold it — the full structured-treatment route (MBT, TFP) lives in the Treating Personality Disorders course, with the mentalization response (next gate) as the crisis discipline.",
      },
      {
        id: "formulation-path",
        question: "Neurotic-level defences — the classical engine.",
        recommendation: "Write the conflict-anxiety-defence chain for this patient: the impulse the behaviour mutes, the anxiety that announced it, the defence that converted it — the formulation that converts the management problem into understanding, and the basis of any therapy referral.",
      },
      {
        id: "melancholia-gate",
        question: "The self-reproach of depression — whose accusations are these?",
        branches: [
          { label: "Content tracks a lost, ambivalently-held object — the widow itemising the husband's faults against herself", next: "melancholia-path" },
          { label: "Content tracks the illness itself — the remorse of a treated episode lifting", next: "episode-path" },
        ],
      },
      {
        id: "melancholia-path",
        question: "The internalised-object reading fits.",
        recommendation: "Treat the depressive episode on its own medical grounds (the Depressive Disorders course's route — no pharmacology duplicated here), and give the patient the usable account: the anger that belonged to the lost one, turned inward — the internalised critic named, the grief's ritual architecture honoured rather than pathologised, the formulation running alongside the treatment.",
      },
      {
        id: "episode-path",
        question: "The self-reproach is depressive, not object-directed.",
        recommendation: "The standard episode management carries it; the psychodynamic layer adds the follow-up discipline — watch the negative therapeutic reaction (deterioration after the well-meant success) as unconscious guilt's signature, and treat it as a clinical event, not a surprise.",
      },
      {
        id: "crisis-gate",
        question: "The borderline crisis: safety assessed first. Then —",
        recommendation: "The mentalization response: attachment stress has collapsed the capacity to hold mind in mind, and impulse stands where thinking should be — the treatment is the calm, mind-minded reply: name states, slow the collapse, keep the conversation about minds; interpretation never, and only after safety. The zero-cost Indian clinical skill — the programme in its smallest unit — with the structured follow-up (MBT-informed services) routed through the personality-disorder courses.",
      },
      {
        id: "narcissism-gate",
        question: "The grandiose self in the room — which reading will you work?",
        branches: [
          { label: "Kohut's deficit reading — the empathic route", next: "attunement-path" },
          { label: "Kernberg's defence reading — the structured confrontational route", next: "defence-work-path" },
        ],
      },
      {
        id: "attunement-path",
        question: "The self built without adequate selfobject experience.",
        recommendation: "Empathic attunement as the instrument: the mirroring, idealising and twinship needs acknowledged rather than shamed; optimal frustration — small, survivable disappointments — building structure; confrontation withheld where it would shatter the grandiose self. The general psychiatrist's version; the full therapy belongs to the specialist tier.",
      },
      {
        id: "defence-work-path",
        question: "The grandiose self as defence against unbearable aggression and envy.",
        recommendation: "The structured route: the grandiosity interpreted within a boundaried frame, the devaluation expected and survived, the aggression worked rather than appeased — the transference-focused tradition whose trial detail and service wrap live in the Treating Personality Disorders course.",
      },
      {
        id: "referral-gate",
        question: "The episode treated, the pattern still presenting — the same marriage twice, the same job crisis, the chronic emptiness.",
        recommendation: "The referral decision the theories exist to inform: the repeated pattern after adequate episode treatment is the dynamic therapy indication — and the practice (formats, evidence tiers, fees, the Indian therapy-desert triage) is the dynamic-psychotherapy course's account. This course's job ends at the formulation that makes the referral intelligible: understanding here, treatment there.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Confusing the topographic and structural models",
      why: "The two lists are quoted interchangeably and the examiner's question goes unanswered: conscious-preconscious-unconscious is the first model's levels of awareness; id-ego-superego is the second model's agencies — mixing them fails the discrimination every exam in this territory opens with.",
      correction: "Answer the question asked: levels of awareness take the topographic trio; the structural trio answers 'the agencies of the mind' — and the second model (1923) is built on the first model's discovery, not a replacement of it.",
    },
    {
      mistake: "Reading 'depressive position' as clinical depression",
      why: "Klein's depressive position is a maturational achievement — whole objects, the capacity to harm the loved object, guilt and reparation — not an illness and not a stage; reading it as depression produces both a wrong answer and a wrong clinical posture toward the concept.",
      correction: "Positions, not stages: the mind moves between paranoid-schizoid and depressive organisation under stress — the achievement named, the failure (the borderline picture) recognised, and neither medicalised.",
    },
    {
      mistake: "Using 'splitting' as an insult or a character verdict",
      why: "The term describes a level of organisation — the incapable-of-grey perception under stress — and it signals a treatment approach, not a moral failing; the insulted patient disengages and the clinical information is lost with them.",
      correction: "Deliver it as information about organisation and approach: 'under stress you may see people as all-good or all-bad — including us; it settles as the stress does, and we plan for it.'",
    },
    {
      mistake: "Reading defences morally — attacking them head-on",
      why: "'Stop intellectualising' drives the pattern underground: defences are the best solutions available when they were built, and the moral reading (defensive as a put-down) confuses character judgement with clinical data.",
      correction: "Defences as data, read like a fever pattern: the rung used is the severity signpost; the clinical move is making the feeling underneath speakable, never confiscating the solution the patient still needs.",
    },
    {
      mistake: "Applying the Oedipal-superego model as universal",
      why: "Classical drive theory's Oedipal centre is Western-family-specific — the Indian joint family's extended object world, the father's distance and the mother-in-law's authority reshape the object-relations reading; the imported triangle misses the plural, hierarchical internalised objects of the patient actually in front of you.",
      correction: "The cultural-grammar discipline: internalised objects in Indian patients are plural and hierarchical — the extended-internal-family read through the systems frame, the transference concepts negotiated through Indian relational idioms rather than applied wholesale.",
    },
    {
      mistake: "Treating this course as the therapy course — teaching theory where a referral is needed",
      why: "The theories are the grammar of formulation; the practice (frame, technique, formats, evidence tiers, fees) is a different discipline — the clinician who prescribes 'psychodynamic thinking' instead of a properly selected therapy has given neither the treatment nor the understanding.",
      correction: "The note's own boundary: the formulation here, the referral there — understanding runs on the theories; treatment runs on the practice whose fuller account lives in the dynamic-psychotherapy course.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "State Freud's two models with their three parts each — the topographic (conscious, preconscious, unconscious; the unconscious as the founding discovery, dreams, slips and symptoms as its royal roads) and the structural (id, ego, superego; the 1923 model) — and their clinical logic.",
        "Name five defence mechanisms with one clinical vignette each, and recite the hierarchy from psychotic through neurotic to mature as a severity signpost — defences as clinical data, never trivia.",
        "Give the mourning-and-melancholia mechanism in four steps — the ambivalent object lost, the internalisation, the identification, the self-attack — and say what the self-reproaches are (object-directed accusations, displaced).",
        "Explain Klein's two positions and why they are positions, not stages — and why the depressive position is an achievement rather than an illness.",
        "State Bowlby's three attachment patterns with Main's disorganised addition, define the internal working model, and give separation's sequence (protest-despair-detachment).",
      ],
      practical: [
        "Take one difficult behaviour from your ward and give its defence reading — the impulse muted, the anxiety that announced it, the defence that converted it — in the patient's own words.",
        "Watch one consultation and give its attachment-expectation reading — the dismissing, ambivalent or disorganised signature the patient brings to the doctor relationship — with the management implication.",
      ],
      longAnswer: [
        "Freud's structural model and its development through ego psychology — with the psychiatric contributions: the character tradition, the narcissistic-personality lineage and the superego-depression model.",
        "Object relations, attachment theory and self-psychology — the internal world each proposes, and their clinical uses in modern psychiatry (the evergreen theory essay).",
      ],
    },
    neetPg: {
      highYield: [
        "THE STRUCTURAL TRIO: id (the drive-repressed instinctual reservoir), ego (the executive, arising in conflict, developing through defence), superego (the internalised parental prohibition and ideal) — the 1923 model; the topographic trio (conscious/preconscious/unconscious) is the FIRST model and never interchangeable with it.",
        "ANNA FREUD'S CATALOGUE: repression, denial, projection, reaction formation, rationalisation, displacement, sublimation, splitting — the clinical reading of psychopathology; HARTMANN's conflict-free ego sphere (perception, memory, motor development) as the autonomous-functions caveat.",
        "THE ANAL TRIAD SENTENCE: orderliness, parsimony, obstinacy — the obsessive-compulsive personality as reaction formation against anal drive derivatives; the oral and genital characters complete the classical set.",
        "THE NARCISSISTIC LINEAGE: Freud (the libidinal-investment model) through Abraham, Klein (envy), Rosenfeld, Grunberger, Kohut (the empathic-deficit self) to Kernberg (the pathological grandiose self as defence against unbearable aggressive conflict) — the diagnostic crystallisation the personality-disorder notes inherit.",
        "THE TWO READINGS: Kernberg — defence (confrontation viable, devaluation expected); Kohut — deficit (selfobject failures, empathic attunement as instrument, optimal frustration as mechanism).",
        "THE MELANCHOLIA MECHANISM: internalised ambivalently-loved-hated lost object — the ego identifies with the introject — the object-directed hatred attacks the self — the self-reproaches of depression as displaced accusations, the superego's strictness reinforcing.",
        "KLEIN'S APPARATUS: splitting (the good and bad breast kept apart), projective identification (parts of the self located in the other, who is pressured to experience them), the paranoid-schizoid position (part-objects, persecutory anxiety) and the depressive position (whole objects, guilt, reparation — the maturational achievement whose failure is the borderline picture).",
        "WINNICOTT'S SET: the good-enough mother (calibrated failures), the holding environment, the true/false self, transitional objects; MAHLER's separation-individuation (symbiosis, practising, rapprochement) — the developmental map the borderline literature borrowed.",
        "BOWLBY'S SET: secure (the confident explorer), anxious-avoidant (the defended dismissing), anxious-resistant (the ambivalent clinging), Main's disorganised addition; the internal working model; protest-despair-detachment; the strange situation and the Adult Attachment Interview.",
        "KOHUT'S SET: the selfobject; the mirroring, idealising and twinship transferences as developmental needs re-emerging, not resistance; empathic attunement as the therapeutic instrument; optimal frustration as the mechanism.",
        "MENTALIZATION: the capacity to hold mind in mind, developmentally rooted in attachment, collapsing under attachment stress (the borderline mechanism), restorable as the treatment aim — Fonagy and Bateman's contemporary integration of object relations, attachment and developmental science.",
      ],
      pyqConcepts: [
        "Defence-mechanism vignette matching — reaction formation (the OC character), projection (the paranoiac), splitting (the all-good/all-bad staff) — the format every tier recycles.",
        "The structural-versus-topographic discrimination — the one-mark question that separates the prepared from the rote.",
        "The melancholia mechanism — the four-step chain asked as 'the self-reproaches of depression arise from'.",
        "The attachment-pattern classification — strange-situation vignettes matched to secure, avoidant, resistant and disorganised.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 26-year-old woman is brought to the casualty after cutting her forearm following her partner's abrupt departure; the ward staff split within days — some protective after her warmth, some contemptuous after her rage at the night nurse — and she tells the new duty psychiatrist the previous one 'never understood me anyway': the formulation reads splitting and projective identification (the team carrying the located feelings), the crisis as mentalization collapse under attachment stress; the management is safety first, then the calm mind-minded response (naming states, slowing the collapse), the steady documentation that survives the swing, and the MBT-informed follow-up routed through the personality-disorder services — the theories converting a management disaster into a treatable organisation.",
        "A 63-year-old widow, eight months after her husband's sudden unritualised death, presents with a severe depressive episode whose self-reproaches itemise his drinking, his debts and the years she 'wasted' on him; the family, distressed, asks whether she is 'blaming herself for surviving': the formulation reads the melancholia mechanism — the ambivalently-held object internalised, the ego identified with the introject, the object-directed accusations displaced onto the self; the management treats the episode on its own medical grounds while giving the family the usable account (the anger that belonged to him, turned inward), honouring rather than pathologising the pending rites — the superego-depression model as clinical instrument, not speculative history.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The structural model: id, ego, superego — the 1923 second model.",
        "The obsessive-compulsive character: orderliness, parsimony, obstinacy — reaction formation against anal drive derivatives.",
        "Splitting: all-good or all-bad, no middle — borderline organisation.",
        "The melancholia mechanism: hatred directed at the ambivalently-loved lost object, attacking the self that identified with the introject.",
        "The internal working model: internalised relational expectations shaping subsequent relationships, the therapeutic one included.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The defence profile is the cheapest formulation in medicine — readable at first contact, it changes the next prescription, the documentation and the follow-up plan: the rung used is the severity signpost, and the reading is data, never morality.",
        "The mentalization response is the emergency treatment the note hands every clinician: attachment stress collapses the holding of mind in mind, and the calm, mind-minded reply — states named, collapse slowed, conversation kept about minds — is deliverable in any Indian casualty with no equipment and no allegiance.",
        "The narcissism fork is a live clinical decision, not an exam antique: Kohut's attunement against Kernberg's structured confrontation — and the general psychiatrist's honest version is attunement first, confrontation rationed, optimal frustration (survivable disappointments) doing the building.",
        "The cultural-grammar discipline for the Indian object world: internalised objects plural and hierarchical, caregiving distributed, the Oedipal triangle Western-family-specific — the formulation that imports the single triangle whole misreads the patient in front of you.",
        "The theories-practice boundary earns the referral: this tradition's grammar (defence, transference, mentalization) makes the referral intelligible; the treatment itself — selection, frame, formats, evidence tiers, Indian delivery reality — is the dynamic-psychotherapy course's account, and confusing the two courses confuses the clinic.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The widow who itemised his faults against herself",
      presentation: "Eight months after an unritualised death, the self-reproaches itemised the husband's faults — and the formulation recognised whose accusations they were.",
      initialPresentation: "A 63-year-old woman was brought to the district psychiatric OPD by her son and daughter-in-law, eight months after her husband's sudden death in a road accident far from home; the cremation had been conducted under COVID-era restrictions, the 13-day rites curtailed, and she had since developed a severe depressive episode whose hallmark was relentless self-reproach.",
      history: "The marriage had been long and difficult — his drinking, his debts, his contempt for her family — and she had stayed; her complaints in the OPD were not of grief but of her own worthlessness: she 'wasted the best years badly', 'failed to manage the household money', 'deserved to have gone first'. Sleep and appetite were destroyed; two courses of antidepressants at the health centre had been abandoned as 'useless'. The son volunteered, distressed, that she had begun refusing the yearly shraddha preparations.",
      examination: "A severely depressed woman: psychomotor retardation, early-morning waking, weight loss; the self-reproach fluent, itemised and relentless — and on close listening, each item a fault of his (the drinking, the debts, the contempt) converted into a failure of hers. No psychotic features; no prior episodes; risk assessed and engaged.",
      diagnosis: "A severe depressive episode, the melancholic self-reproach tracking the internalised ambivalently-loved-hated lost object — the object-directed accusations, displaced onto the self.",
      management: "The episode treated on its own medical grounds — antidepressant reinstated properly and monitored, nutrition and sleep addressed, the Depressive Disorders course's programme carrying the pharmacology; the psychodynamic formulation given to the family in their words: 'the anger that belonged to him, with nowhere to go, has turned inward — the accusations you hear are meant for him, not for her'; the pending rites honoured as treatment rather than superstition — the family supported in completing the shraddha; weekly supportive follow-up with the son coached to answer the self-accusations without arguing them.",
      outcome: "The episode lifted over the following two months — the antidepressant held, and the self-reproach softened as the family stopped contesting it and started containing it; the shraddha was performed at the year's turning with the daughter-in-law's help, the patient reporting the first unburdened night's sleep afterwards; follow-up continued through the anniversary, the known risk window.",
      teachingPoints: [
        "The melancholia mechanism as bedside instrument: the content of the self-reproach itemised the lost object's faults — the accusations' owner identified, the depression's psychological logic shown without one word of metapsychology.",
        "The mourning-melancholia boundary: the unritualised death had left the ambivalent tie unresolved — and the culture's ritual architecture (the curtailed rites, the pending shraddha) was reparation work to be honoured, not superstition to be tolerated.",
        "Theories and treatment run alongside: the antidepressant carried the episode while the formulation carried the family — neither substituted for the other.",
        "The anniversary as risk window: the follow-up calendar was built around the grief's clock, not the clinic's.",
      ],
    },
    {
      title: "The ward that split down the middle",
      presentation: "One admission, two staff factions and a casualty of feelings — the ward itself as the diagnostic instrument.",
      initialPresentation: "A 26-year-old woman was admitted after cutting her forearm the night her partner of four months left abruptly; within a week the ward had divided — the day staff protective of her warmth and her 'genuine attempts', the night staff contemptuous of her 'drama' — and she informed the duty psychiatrist that the admitting doctor had 'never understood me anyway', three days after telling him he was the only one who had.",
      history: "A pattern since late adolescence: intense relationships idealised then abandoned, each exit triggered by a perceived slight; two previous short admissions for overdoses labelled 'impulsive'; no psychotic symptoms; the family, when contacted, described the same swing at home — the grandmother adored on Monday, accused of favouritism by Friday.",
      examination: "Between crises: warm, engaging, quick to attach; under the smallest perceived slight (a delayed call-back, a discharged roommate) — the abrupt switch to contempt and the all-bad reading of whoever had disappointed her; the self-harm followed the ruptures rather than preceding them; the mentalizing collapse visible in the room: asked what her partner might have been feeling when he left, she could only repeat what he had done.",
      diagnosis: "Borderline-level personality organisation — splitting and projective identification announcing themselves in the transference and the team respectively; the self-harm as mentalization collapse under attachment stress.",
      management: "Safety first, always; then the mentalization response — the calm, mind-minded conversation (states named, the collapse slowed, minds kept in view) rather than interpretation or confrontation; the ward split taken to the team meeting as clinical information about the patient, the split named and de-escalated — the projective identification worked in supervision, not enacted on the round; documentation steady from day one to survive the devaluation cycle; a consistent primary nurse; the structured follow-up (an MBT-informed programme) planned with the patient before discharge through the personality-disorder services.",
      outcome: "The admission stabilised without further self-harm once the team's response became uniform — the same limits delivered by everyone, the warmth not withdrawn after the rage; she engaged the MBT-informed follow-up, two further ruptures in the first months survived without an overdose, and the ward's own post-take note recorded the teaching: the team that splits is holding the patient's located feelings, and the uniform response is the treatment.",
      teachingPoints: [
        "Projective identification read where it happens: the ward divided about one patient is the defence working in real time — parts of the self located in the staff until they carry them.",
        "Splitting as organisation, not insult: the all-good doctor of Tuesday and the all-bad of Thursday were the same machinery — and the plan (steady documentation, no new measures at moments of idealisation, the swing predicted kindly) was built for the swing.",
        "The mentalization frame as the emergency treatment: attachment stress collapsed the holding of mind in mind, and the mind-minded response restored it — the crisis protocol the note teaches, in the smallest unit.",
        "The theories-practice boundary held: the formulation and the crisis discipline here; the structured programme and its trial evidence in the personality-disorder courses; the therapy technique in dynamic-psychotherapy.",
      ],
    },
  ],
  clinicalPearls: [
    "The structural model is the 1923 model — id, ego, superego; the topographic (conscious, preconscious, unconscious) is the first; the exam's favourite trap is the two lists exchanged.",
    "Defences are clinical data, read like a fever pattern: the rung habitually used — psychotic through neurotic to mature — is the severity signpost, never a moral grade.",
    "The obsessive-compulsive character's classical sentence: orderliness, parsimony and obstinacy as reaction formation against anal drive derivatives.",
    "The narcissistic lineage in one breath: Freud's libidinal-investment model through Abraham, Klein (envy), Rosenfeld, Grunberger, Kohut (the empathic-deficit self) and Kernberg (the grandiose self as defence against unbearable aggressive conflict).",
    "Mourning and melancholia in one line: the ambivalently-loved-hated lost object internalised, the ego identified with the introject, and the object-directed hatred attacking the self — the self-reproaches of depression as displaced accusations.",
    "Positions, not stages: the paranoid-schizoid (part-objects, persecutory anxiety, splitting) and the depressive (whole objects, guilt, reparation) — and the depressive position is a maturational achievement, never an illness.",
    "Projective identification is the defence you feel rather than see: the ward divided about one patient is holding located parts of that patient's self.",
    "Winnicott's clinical triad: the good-enough mother (whose calibrated failures build reality-sense), the holding environment, and the true/false self — the compliant false self protecting the unrealised true self.",
    "Bowlby's bridge: the patterns become the internal working model, the internal working model runs on every later relationship including the consultation — and separation runs protest-despair-detachment.",
    "Kohut's reframing: the mirroring, idealising and twinship transferences are developmental needs re-emerging, not resistances — empathic attunement the instrument, optimal frustration the mechanism.",
    "Mentalization is the contemporary integration: the capacity to hold mind in mind, rooted in attachment, collapsing under attachment stress (the borderline mechanism), restorable as the treatment aim — the mind-minded crisis response its smallest clinical unit.",
    "The concept-level imports are free and the practice is a separate course: the internal critic, the good-enough parent and the mind-minded conversation deliverable in any Indian OPD without a school allegiance — and the treatment selection, technique and delivery reality belonging to the dynamic-psychotherapy course, the boundary the note itself draws.",
  ],
  highYieldSummary: [
    "The founding apparatus: Freud's TOPOGRAPHIC discovery — the unconscious (repressed material exerting influence without awareness; dreams, slips and symptoms its royal roads) in the three-level topographic model — and his STRUCTURAL model built upon it (1923): the id (the drive-repressed instinctual reservoir), the ego (the executive mediating drive, reality and morality — arising in conflict, developing through defence) and the superego (the internalised parental prohibition and ideal, the unconscious morality of Oedipal identification). Ego psychology developed the second model: Anna Freud's defence catalogue (repression, denial, projection, reaction formation, rationalisation, displacement, sublimation, splitting) as the clinical reading of psychopathology, the defence hierarchy (psychotic through neurotic to mature) as severity signpost; Hartmann's conflict-free ego sphere (perception, memory, motor development) freeing the ego's autonomous functions from conflict.",
    "The psychiatric contributions the note assigns the tradition: the CHARACTER tradition — Freud's oral, anal and genital characters (the anal triad of orderliness, parsimony and obstinacy as reaction formation against anal drive derivatives; the obsessive-compulsive personality), Abraham's hysterical personality, and the character-constellation literature flowing into the modern personality-disorder spectrum. NARCISSISTIC PERSONALITY DISORDER's lineage — Freud's libidinal-investment model (narcissism as investment of self versus objects) through Abraham, Klein (envy), Rosenfeld, Grunberger, Kohut (the empathic-deficit self) to Kernberg's diagnostic crystallisation: the pathological grandiose self as defence against unbearable aggressive conflict. The SUPEREGO-DEPRESSION model — unconscious guilt driving self-attack and self-sabotage (the negative therapeutic reaction), and the mourning-and-melancholia mechanism: the internalised ambivalently-loved-hated lost object, the ego's identification with the introject, the object-directed hatred attacking the self.",
    "Object relations (Klein and successors): the internal world of OBJECTS — internalised representations of self and others structuring experience. The infant's primitive operations: SPLITTING (the good and bad breast kept apart, the all-good/all-bad world) and PROJECTIVE IDENTIFICATION (parts of the self located in the other, who is then pressured to experience them — the clinical engine of the borderline-organisation account). The POSITIONS (not stages): paranoid-schizoid (part-objects, persecutory anxiety, splitting as the survival operation) and depressive (whole objects, the capacity to harm the loved object, guilt and reparation — the maturational achievement whose failure underlies the borderline picture). FAIRBAIRN's object-seeking, not pleasure-seeking, infant with schizoid withdrawal from frustrating objects; WINNICOTT's good-enough mother, holding environment, true/false self and transitional objects; MAHLER's separation-individuation (symbiosis, practising, rapprochement) — the developmental map the borderline literature borrowed.",
    "Attachment theory (Bowlby): the ethological grounding — the attachment system as protection-seeking, the infant's proximity maintenance; the PATTERNS (secure: the confident explorer; anxious-avoidant: the defended dismissing; anxious-resistant: the ambivalent clinging; Main's disorganised addition — the simultaneous approach-and-avoidance); the INTERNAL WORKING MODEL — the internalised relational expectations shaping adult and treatment relationships; SEPARATION AND LOSS as developmental risk (the protest-despair-detachment sequence); the Ainsworth strange situation and the Adult Attachment Interview as the bridge from theory to measurement, and into clinical practice — the therapy relationship as an attachment relationship.",
    "Self-psychology (Kohut) and the current position: the self developing through SELFOBJECT experience — the other's functions (the mirroring parent's gleam, the idealisable figure, the twinship kinship) experienced as part of the self; empathic failures producing the deficient self (the narcissistic emptiness with its grandiose compensation); the TRANSFERENCES (mirroring, idealising, twinship) as developmental needs re-emerging rather than resistance; empathic attunement as the instrument, optimal frustration as the mechanism — narcissism reframed from defence to deficit. The CONTEMPORARY INTEGRATION: mentalization (Fonagy and Bateman) — the capacity to hold mind in mind, developmentally rooted in attachment, collapsing under attachment stress (the borderline mechanism), restorable as the treatment aim; the evidence maturation (short-term psychodynamic psychotherapy's trial literature and meta-analytic tradition, the common-factors convergence, the RCTs of longer therapies for personality disorder); and the psychodynamic presence throughout general psychiatry — defences, transference and countertransference as the clinical-read discipline, with dynamic theory an honest lens, not a competing nosology.",
    "The Indian layer: the cultural-grammar caution (the Oedipal centre is Western-family-specific; the joint family's extended object world — the father's distance, the mother-in-law's authority — makes Indian internalised objects plural and hierarchical); the mourning-and-melancholia clinical fit (unritualised deaths and anniversary grief read through the internalised-lost-object model, the 13-day rites and yearly shraddha functioning as collective reparation work); the attachment teaching fitting distributed caregiving (multiple attachment figures, the grandmother's centrality — the plural Indian version of empathic attunement); somatisation as the culturally-sanctioned defence (the body speaking the unspeakable) with the possessive-attribution idiom requiring the form-content discipline; the guru-disciple caution (transference concepts meeting hierarchical, devotion-shaped authority relations — read through Indian relational idioms, never imported wholesale); and the free concept-level imports — the internal critic, the good-enough parent, the mind-minded conversation — deliverable in any Indian OPD without a school allegiance.",
    "The clinical bottom line: the defence-reading converts management problems into formulation; the superego-depression model explains severe self-attack in words patients can use (and the moral-injury presentations of trauma); attachment thinking explains the consultation's power and its crashes; the mentalization frame gives the general psychiatrist the borderline-crisis protocol (attachment stress — mentalization collapse — impulse and self-harm — the calm, mind-minded response as the emergency treatment); and empathy, Kohut's gift, manages the narcissistic patient where confrontation shatters. The theories supply the grammar; the treatment is a separate discipline whose fuller account — selection, technique, formats, evidence, Indian delivery — lives in the dynamic-psychotherapy course.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pdt-quiz-1",
      question: "Freud's structural model comprises:",
      options: ["Conscious, preconscious, unconscious", "Id, ego and superego", "Oral, anal and genital stages", "Transference, resistance and defence"],
      correctIndex: 1,
      explanation: "The second (1923) model: drives (id), mediation (ego) and internalised morality (superego) — the topographic trio (conscious/preconscious/unconscious) being the first model, the classic exam trap.",
      afterSectionId: "mechanism",
    },
    {
      id: "pdt-quiz-2",
      question: "In Freud's model of melancholia, the self-reproaches of depression arise from:",
      options: ["A chemical imbalance", "Hatred originally directed at an ambivalently-loved lost object, now attacking the self that has identified with the introjected object", "A learned helplessness pattern", "Genetic loading"],
      correctIndex: 1,
      explanation: "The internalisation-identification mechanism of Mourning and Melancholia: the object-directed accusations displaced onto the self, with the superego's strictness reinforcing.",
      afterSectionId: "symptoms",
    },
    {
      id: "pdt-quiz-3",
      question: "Klein's 'depressive position' refers to:",
      options: ["Clinical depression", "The developmental achievement of whole-object perception, with the capacity to harm the loved object, guilt and reparation", "The paranoid-schizoid position", "Anal fixation"],
      correctIndex: 1,
      explanation: "Not an illness but a maturational position: the integration of good-and-bad into whole objects with its guilt and reparation — its failure underlying the splitting picture of borderline organisation.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pdt-quiz-4",
      question: "Bowlby's 'internal working model' is:",
      options: ["A therapy manual", "The internalised set of relational expectations (from early attachment experience) shaping subsequent relationships, including the therapeutic one", "A statistical model", "A defence mechanism"],
      correctIndex: 1,
      explanation: "The attachment-theory bridge from early experience to adult relational patterns — the clinical expectation-reading of consultation behaviour.",
      afterSectionId: "differential",
    },
    {
      id: "pdt-quiz-5",
      question: "Kohut's self-psychology reframes narcissism as:",
      options: ["Excessive id drive", "A deficit state: the self built without adequate selfobject (mirroring/idealising/twinship) experience, treated through empathic attunement", "Superego excess", "An unresolvable character flaw"],
      correctIndex: 1,
      explanation: "The deficit reading (against Kernberg's defence reading): the transferences as developmental needs re-emerging, empathy as instrument, optimal frustration as mechanism.",
      afterSectionId: "management",
    },
    {
      id: "pdt-quiz-6",
      question: "The note's India lens reads the 13-day rites and the yearly shraddha of Indian bereavement as:",
      options: ["Cultural obstacles to grief work that treatment should replace", "Collective reparation work — the culture's own apparatus for the mourning-melancholia task, honoured alongside treatment", "Evidence of somatisation", "Attachment avoidance"],
      correctIndex: 1,
      explanation: "The mourning-and-melancholia clinical fit: unritualised deaths and anniversary grief read through the internalised-lost-object model, with the ritual architecture functioning as collective reparation — treated alongside, never instead.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State Freud's two models with their three parts each, and their clinical logic.", answer: "THE TOPOGRAPHIC MODEL (the first): conscious, preconscious, unconscious — the levels of the mind, with the unconscious (repressed material exerting influence without awareness) as the founding discovery and dreams, slips and symptoms as its royal roads. THE STRUCTURAL MODEL (the second, 1923): the id (the drive-repressed instinctual reservoir), the ego (the executive mediating drive, reality and morality — arising in conflict, developing through defence) and the superego (the internalised parental prohibition and ideal, the unconscious morality of Oedipal identification). THE CLINICAL LOGIC: the first model discovered the territory (mental life running beneath awareness), the second supplied the agencies whose interactions produce the clinical picture — conflict between them generating anxiety, the ego's conversions generating defence, the superego's severity generating self-attack; and the two lists are never interchangeable in an examination answer.", topic: "Freud's models" },
    { question: "Name five defence mechanisms with one clinical example each, and state the hierarchy's clinical use.", answer: "THE FIVE, WORKED: (1) Repression — the feeling shelved and its existence denied: 'I wasn't angry, just tired.' (2) Reaction formation — the unacceptable feeling over-reversed: the orderliness, parsimony and obstinacy of the obsessive-compulsive character as reaction formation against anal drive derivatives. (3) Projection — the feeling relocated into another: the paranoiac's accusation carrying his own hostility. (4) Splitting — people all-good or all-bad with no middle: the idealised doctor of Tuesday the villain of Thursday. (5) Projective identification — parts of the self located in the other until the other carries them: the ward quietly furious with one patient and unable to say why. THE HIERARCHY: psychotic defences (splitting, projective identification, denial) through neurotic (repression, reaction formation, displacement, intellectualisation) to mature (sublimation and the conversions that build) — the rung habitually used is the severity signpost, diagnostic of personality organisation, never a moral grade; the reading is Anna Freud's clinical reading of psychopathology, with Hartmann's conflict-free sphere (perception, memory, motor development) the autonomous-functions caveat.", topic: "Defences" },
    { question: "Give the mourning-and-melancholia mechanism in four steps, and say what the self-reproaches of depression are.", answer: "THE FOUR STEPS: (1) The ambivalent object is lost — loved and hated at once, the tie that mourning would gradually withdraw. (2) The object is internalised — the lost one taken inside as an introject, in the melancholic, where the mourner leaves the grave. (3) The ego identifies with the introject — the self now standing where the object stood. (4) The object-directed hatred attacks the self — the anger that belonged to the ambivalently-held lost one, now turned on the ego that wears it, with the superego's strictness reinforcing. THE SELF-REPROACHES: object-directed accusations, displaced — each item of self-blame itemising the lost object's faults through the person voicing them. THE CLINICAL USE: the account explains the self-attack and guilt of severe depression in words patients can use — the internalised critic, the lost-object anger turned inward — and extends to the moral-injury presentations of trauma, whatever the neurobiology.", topic: "Melancholia" },
    { question: "Recite Klein's apparatus: splitting, projective identification, and the two positions.", answer: "SPLITTING: the good and bad breast kept apart — the all-good/all-bad world of early organisation, the survival operation that keeps the good object uncontaminated by the bad; clinically, the incapable-of-grey perception under stress that announces borderline-level organisation (a level of organisation, never an insult). PROJECTIVE IDENTIFICATION: parts of the self located in the other, who is then pressured to experience them — the clinical engine of the borderline-organisation account, and the defence the team feels rather than sees (the ward divided about one patient). THE POSITIONS (not stages): the paranoid-schizoid position — part-objects, persecutory anxiety, splitting as the survival operation; and the depressive position — whole objects, the capacity to harm the loved object, guilt and reparation: the maturational achievement, whose failure underlies the borderline picture. The exam discipline: 'depressive position' never means clinical depression — it is an achievement, not an illness, and the mind moves between positions under stress rather than climbing stages in order.", topic: "Object relations" },
    { question: "State Bowlby's attachment patterns, the internal working model, and separation's sequence.", answer: "THE PATTERNS: secure — the confident explorer, the attachment figure as the safe base; anxious-avoidant — the defended dismissing pattern (proximity forgone, need disowned, the consultation-room 'I'm fine'); anxious-resistant — the ambivalent clinging pattern (the simultaneous demand for and anger at care, the clinging-devaluing swing); and Main's disorganised addition — the simultaneous approach-and-avoidance of the frightened and frightening caregiving experience. THE INTERNAL WORKING MODEL: the internalised set of relational expectations from early attachment experience, shaping subsequent relationships — including the therapeutic one, which is why attachment thinking explains the consultation's power and its crashes. THE SEQUENCE: separation and loss run protest-despair-detachment — the developmental risk Bowlby's ethology grounded; operationalised by Ainsworth's strange situation for the infant patterns and the Adult Attachment Interview for adults, the bridge from theory to measurement and into clinical practice.", topic: "Attachment" },
    { question: "Give Winnicott's set (with Fairbairn and Mahler in the frame).", answer: "FAIRBAIRN: the object-seeking (not pleasure-seeking) infant — relatedness the primary drive — with schizoid withdrawal from frustrating objects. WINNICOTT: the good-enough mother, whose calibrated failures build the child's reality-sense (perfect care failing to teach the difference between wish and world); the holding environment — the reliable surround within which the immature self can be; the true and false self — the compliant, imitative false self protecting the unrealised true self when the environment demands compliance; the transitional object (the blanket, the teddy — the first not-me possession, the bridge between inner and outer); and the capacity to be alone (in the presence of another) as its maturational endpoint. MAHLER: separation-individuation — symbiosis, practising, rapprochement — the developmental map the borderline literature borrowed, with the rapprochement crisis the classic locus of that borrowing.", topic: "The middle school" },
    { question: "Give Kohut's set, and the two readings of narcissism.", answer: "THE SELFOBJECT: the other's functions — the mirroring parent's gleam, the idealisable figure, the twinship kinship — experienced as part of the self; the self develops through selfobject experience. THE THREE TRANSFERENCES: mirroring, idealising and twinship — developmental needs re-emerging in treatment, not resistances to be interpreted away. THE INSTRUMENT AND THE MECHANISM: empathic attunement as the therapeutic instrument; optimal frustration — small, survivable disappointments — as the mechanism building structure. THE TWO READINGS OF NARCISSISM: Kohut's deficit reading — the self built without adequate selfobject experience, the grandiosity a compensation, treated through attunement; against Kernberg's defence reading — the pathological grandiose self defending against unbearable aggressive conflict, particularly primitive envy, treated through structured confrontation. The lineage runs Freud (libidinal investment of self versus objects) through Abraham, Klein (envy), Rosenfeld, Grunberger, Kohut to Kernberg's diagnostic crystallisation — the inheritance the personality-disorder notes carry.", topic: "Self-psychology" },
    { question: "Define mentalization, and give the capacity, the collapse mechanism and the treatment aim.", answer: "DEFINITION: the capacity to hold mind in mind — to see behaviour (one's own and others') as driven by thoughts, feelings and intentions. THE DEVELOPMENTAL ROOTS: attachment — the capacity grows inside secure attachment relationships (Fonagy and Bateman's synthesis of object relations, attachment and developmental science: the tradition's contemporary integration). THE COLLAPSE MECHANISM: under intense attachment stress the capacity fails — the borderline crisis, where impulse and self-harm stand where thinking about minds should be. THE TREATMENT AIM: the capacity's restoration — the calm, mind-minded response (naming states, slowing the collapse, the mind-in-mind conversation) as the emergency treatment, and the structured programmes (the personality-disorder courses' account) as the follow-through. THE EXAM LINE: mentalization is the contemporary psychodynamic integration most relevant to general psychiatry — trial-tested, developmentally grounded, and deliverable in any clinic at no cost.", topic: "Mentalization" },
  ],
  faqs: [
    { question: "Is psychoanalysis still scientific?", answer: "Its modern forms are trial-tested — short-term psychodynamic psychotherapy's trial literature, the manualised treatments for personality disorder — and conceptually integrated with developmental science (attachment, mentalization). The old dichotomy of dynamic-versus-evidence has given way to tested dynamic treatments and psychodynamic concepts working inside evidence-based care." },
    { question: "What is the unconscious, practically?", answer: "The parts of mental life influencing behaviour without awareness: the patterned repetitions, the symptom's hidden logic, the expectations the therapy relationship runs on. These are readable clinically without accepting every speculative detail of the classical theory." },
    { question: "Why did my therapist say I was 'splitting'?", answer: "It is the object-relations term for keeping people all-good or all-bad — the incapable-of-grey perception, usually under stress. It signals a level of organisation and a treatment approach, not a character insult; the pattern settles as the stress does." },
    { question: "Was Freud right about depression?", answer: "The mechanism he described — internalised anger at an ambivalently-loved lost object attacking the self that identified with it — captures the self-reproach and guilt of severe depression phenomenologically, whatever the neurobiology turns out to be. The clinical insight survives its speculative origins." },
    { question: "What does attachment theory add to my clinic?", answer: "The expectation-reading: patients bring their internal working models — their attachment patterns — into every relationship including yours. The dismissing patient's 'I'm fine', the ambivalent patient's testing, the disorganised patient's simultaneous approach-and-avoidance: the pattern is visible in the first ten minutes of any consultation." },
    { question: "Can empathy treat narcissism?", answer: "Kohut's claim: the narcissistic patterns reflect a self built without adequate mirroring, and empathic attunement — with survivable frustrations — provides the developmental experience the self missed. Kernberg's rival reading (the grandiosity as defence) is the structured-confrontation alternative; the personality-disorder courses carry the fuller account of both." },
    { question: "What is mentalization?", answer: "Holding mind in mind: the capacity to see behaviour — yours and other people's — as driven by thoughts, feelings and intentions. It collapses under intense attachment stress (the borderline crisis) and its restoration is the treatment's aim; the calm, mind-minded response is its smallest clinical unit." },
    { question: "Do Freud's ideas apply in India?", answer: "Selectively, and with the cultural-grammar caution: the Oedipal centre is Western-family-specific, and Indian internalised objects are plural and hierarchical — the joint family reshapes the object world. But the concept-level imports travel free: the internal critic, the good-enough parent, the mind-minded conversation — deliverable in any Indian OPD without a school allegiance." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Oxford chs 3.1-3.3 teaching position — psychodynamic concepts inside general psychiatry as a lens, never a competing nosology (paraphrased from the source chapters)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, chs 3.1-3.3 (Part 2) — source chapters mapped; content rewritten and updated beyond them (2009)" },
      { source: "Hartmann H — Ego Psychology and the Problem of Adaptation: the conflict-free sphere and the autonomous functions (1939)" },
      { source: "Mahler M — On Human Symbiosis and the Vicissitudes of Individuation: the separation-individuation map (1968)" },
      { source: "Kohut H — The Analysis of the Self (1971) and The Restoration of the Self (1977): the selfobject, the transferences, empathic attunement" },
      { source: "Kernberg O — Borderline Conditions and Pathological Narcissism: the grandiose self as defence (1975)" },
    ],
    trials: [
      { source: "Fonagy P & Bateman A — the mentalization synthesis and trials, with the personality-disorder trial literature (the manualised programmes' evidence base)" },
      { source: "Leichsenring F et al. — the psychodynamic-therapy trial meta-analytic tradition (the equivalence and superiority findings the note's current position cites)" },
    ],
    reviews: [
      { source: "Freud S — The Ego and the Id (1923) and Inhibition, Symptoms and Anxiety (1926): the structural model and signal anxiety, read as the source of concepts, not as current evidence" },
      { source: "Freud S — Mourning and Melancholia (1917): the internalised-object model of depression" },
      { source: "Freud A — The Ego and the Mechanisms of Defence (1936): the defence catalogue as clinical data" },
      { source: "Klein M — Notes on Some Schizoid Mechanisms (1946) and Envy and Gratitude (1957): splitting, projective identification, the positions, envy" },
      { source: "Winnicott D W — Transitional Objects and Transitional Phenomena (1953) and Ego Distortion in Terms of True and False Self (1960)" },
      { source: "Bowlby J — Attachment and Loss, Vols 1-3 (1969/1973/1980), with Ainsworth M et al.: the strange situation and the patterns" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, for distress, crises and pathway guidance" },
      { source: "The internal-critic and mind-minded-conversation scripts — the zero-cost instruments this course hands to every Indian clinician and family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what this way of thinking is, why feelings get converted, what the patterns mean, what helps.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The two models, the defence catalogue, the psychiatric contributions, the object-relations core, the attachment basics.",
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
      description: "Everything — the formulation craft, the crisis discipline, the cultural grammar, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The founding apparatus: two models, the defence catalogue, the psychiatric contributions.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state both of Freud's models with their three parts each and name the tradition's three contributions to psychiatry." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The theoretical engine and its history: conflict, defence, development, loss — Freud to mentalization.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the conflict, developmental and melancholia pathways and place each school on the timeline." },
    { number: 3, title: "Clinical Practice", description: "The theory as clinical work: defence signals, the apparatus as criteria, the distinctions, the formulation.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can read a defence level at first contact and write the conflict-anxiety-defence chain for a real patient." },
    { number: 4, title: "Indian Context", description: "The cultural grammar, the bereavement fit, the plural caregiving, the decision path.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the internal-critic and mind-minded scripts and run the crisis decision path cold." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the models question, the melancholia chain and the positions question cold — without mixing the lists." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, chs 3.1-3.3 (Part 2) — source chapters mapped (Freud's theories and their contemporary development; object relations, attachment theory, self-psychology; current psychodynamic approaches); content rewritten and updated beyond them", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Freud S — The Ego and the Id (1923) and Inhibition, Symptoms and Anxiety (1926): the structural model and signal anxiety, read as the source of concepts, not as current evidence", sourceType: "primary", year: "1923 / 1926", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Freud S — Mourning and Melancholia (1917): the internalised ambivalent object and the self-attack model of depression", sourceType: "primary", year: "1917", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Freud A — The Ego and the Mechanisms of Defence: the defence catalogue as the clinical reading of psychopathology", sourceType: "primary", year: "1936", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Hartmann H — Ego Psychology and the Problem of Adaptation: the conflict-free ego sphere and the autonomous functions", sourceType: "textbook", year: "1939", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Klein M — Notes on Some Schizoid Mechanisms (1946) and Envy and Gratitude (1957): splitting, projective identification, the positions, primitive envy", sourceType: "primary", year: "1946 / 1957", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Winnicott D W — Transitional Objects and Transitional Phenomena (1953) and Ego Distortion in Terms of True and False Self (1960): the good-enough mother, the holding environment, the true/false self", sourceType: "primary", year: "1953 / 1960", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Bowlby J — Attachment and Loss, Vols 1-3 (1969/1973/1980), with Ainsworth M et al.: the strange situation and the attachment patterns", sourceType: "primary", year: "1969–1980", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Mahler M — On Human Symbiosis and the Vicissitudes of Individuation: separation-individuation, the developmental map the borderline literature borrowed", sourceType: "textbook", year: "1968", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Kohut H — The Analysis of the Self (1971) and The Restoration of the Self (1977): the selfobject, the mirroring-idealising-twinship transferences, empathic attunement, optimal frustration", sourceType: "textbook", year: "1971 / 1977", dateReviewed: "2026-09-30" },
    { id: "S11", source: "Kernberg O — Borderline Conditions and Pathological Narcissism: the pathological grandiose self as defence against unbearable aggressive conflict", sourceType: "textbook", year: "1975", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Fonagy P & Bateman A — the mentalization synthesis and trials: the capacity to hold mind in mind, its developmental roots, its collapse and restoration", sourceType: "trial", year: "1990s–2020s", dateReviewed: "2026-09-30" },
    { id: "S13", source: "Leichsenring F et al. — the psychodynamic-therapy trial meta-analytic tradition: short-term psychodynamic psychotherapy's evidence position", sourceType: "meta-analysis", year: "2000s onward", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The two founding models: the topographic (conscious, preconscious, unconscious — the unconscious as repressed material exerting influence without awareness, dreams, slips and symptoms its royal roads) and the structural (id, ego, superego — the ego arising in conflict and developing through defence; the superego as internalised parental prohibition and ideal of Oedipal identification).", grade: "established", sources: ["S1", "S2"] },
    { text: "The defence mechanisms as clinical data: Anna Freud's catalogue (repression, denial, projection, reaction formation, rationalisation, displacement, sublimation, splitting) read as the clinical reading of psychopathology, with the defence hierarchy — psychotic through neurotic to mature — as severity signpost; Hartmann's conflict-free ego sphere (perception, memory, motor development) as the autonomous-functions caveat.", grade: "supported", sources: ["S1", "S4", "S5"] },
    { text: "The character tradition: Freud's oral, anal and genital characters — the obsessive-compulsive personality as reaction formation against anal drive derivatives (orderliness, parsimony, obstinacy) — and the character-constellation literature flowing into the modern personality-disorder spectrum.", grade: "established", sources: ["S1", "S2"] },
    { text: "The narcissistic-personality lineage: Freud's libidinal-investment model through Abraham, Klein (envy), Rosenfeld, Grunberger, Kohut (the empathic-deficit self) to Kernberg — the pathological grandiose self as defence against unbearable aggressive conflict, particularly primitive envy; the diagnostic crystallisation the personality-disorder courses inherit.", grade: "established", sources: ["S1", "S10", "S11"] },
    { text: "The superego-depression model: unconscious guilt driving self-attack and self-sabotage (the negative therapeutic reaction), and the mourning-and-melancholia mechanism — the internalised ambivalently-loved-hated lost object, the ego's identification with the introject, the object-directed hatred attacking the self, the self-reproaches as displaced accusations.", grade: "proposed", note: "The mechanism is metapsychological; the note's own position is that it captures the phenomenology of severe depression 'whatever the neurobiology' — the clinical insight survives its speculative origins.", sources: ["S1", "S3"] },
    { text: "The object-relations core: internal objects structuring experience; splitting and projective identification as the primitive operations; the paranoid-schizoid position (part-objects, persecutory anxiety) and the depressive position (whole objects, guilt, reparation — the maturational achievement whose failure underlies the borderline picture); positions, not stages.", grade: "established", sources: ["S1", "S6"] },
    { text: "The British and American developmental additions: Fairbairn's object-seeking infant; Winnicott's good-enough mother (calibrated failures), holding environment, true/false self and transitional objects; Mahler's separation-individuation (symbiosis, practising, rapprochement) — the developmental map the borderline literature borrowed.", grade: "established", sources: ["S1", "S7", "S9"] },
    { text: "Attachment theory: the ethologically grounded attachment system as protection-seeking; the patterns (secure, anxious-avoidant, anxious-resistant, Main's disorganised addition); the internal working model shaping adult and treatment relationships; separation and loss as developmental risk (protest-despair-detachment); the strange situation and the Adult Attachment Interview as the operationalisation and the bridge into clinical practice.", grade: "established", sources: ["S1", "S8"] },
    { text: "Self-psychology: the selfobject (the mirroring parent's gleam, the idealisable figure, the twinship kinship) experienced as part of the self; empathic failures producing the deficient self with its grandiose compensation; the mirroring, idealising and twinship transferences as developmental needs re-emerging; empathic attunement as the instrument and optimal frustration as the mechanism — narcissism reframed from defence to deficit.", grade: "established", sources: ["S1", "S10"] },
    { text: "Mentalization as the contemporary integration: the capacity to hold mind in mind, its developmental roots in attachment, its collapse under attachment stress (the borderline mechanism), and its restoration as the treatment aim — Fonagy and Bateman's synthesis of object relations, attachment and developmental science.", grade: "supported", sources: ["S1", "S12"] },
    { text: "The evidence maturation: short-term psychodynamic psychotherapy's trial literature and meta-analytic tradition, the common-factors convergence, and the randomised trials of longer therapies for personality disorder — the dynamic-versus-evidence dichotomy superseded by tested dynamic treatments and psychodynamic concepts inside evidence-based care.", grade: "established", sources: ["S1", "S12", "S13"] },
    { text: "The psychodynamic presence in general psychiatry: defences, transference and countertransference as the clinical-read discipline; the relationship-reading of compliance, hostility and dependency; the mentalization frame's borderline-crisis protocol (attachment stress — collapse — impulse and self-harm — the calm, mind-minded response as the emergency treatment); the honest boundary — dynamic theory as a lens, not a competing nosology.", grade: "supported", sources: ["S1", "S12"] },
    { text: "The Indian layer: the cultural-grammar caution (the Oedipal centre Western-family-specific; joint-family internalised objects plural and hierarchical); the mourning-and-melancholia fit with Indian bereavement presentations (the 13-day rites and yearly shraddha as collective reparation work); distributed caregiving fitting the selfobject and good-enough-caregiver concepts; somatisation as the culturally-sanctioned defence; the guru-disciple caution for transference concepts — practice-pattern description from the note's India lens, honestly labelled.", grade: "supported", sources: ["S1"] },
  ],
};
