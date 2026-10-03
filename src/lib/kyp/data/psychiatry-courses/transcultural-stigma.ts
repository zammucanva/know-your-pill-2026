import type { PsychiatryCourse } from "./types";

/**
 * TRANSCULTURAL PSYCHIATRY & STIGMA — canonical Psychiatry concept
 * course (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/transcultural-stigma.md — untouched
 * foundation), whose own source_map: NOTP 2e (2009) ch 1.2 +
 * 1.3.2 (Part 1) — Thornicroft, Brohan & Kassam's synthesis (the
 * stigmatising mark, the knowledge-attitude-behaviour structure,
 * the global patterns, the discrimination reframing) plus the
 * transcultural clinical companion (form-content discipline,
 * idioms of distress, the pathway's cultural shaping).
 * Re-researched against the lineages the note itself cites
 * (Goffman's spoiled identity; Gilman's visual stereotypes;
 * Corrigan's cascade; Link & Phelan's conceptual structure;
 * Angermeyer & Matschinger's stigma process; Crisp's
 * changing-minds follow-up; Shibre's Ethiopia; the chapter's
 * Southern India study; the Zenkaren renaming; Sartorius's WPA
 * global programme; Thornicroft's Shunned) with per-claim
 * provenance.
 *
 * Neuroscience honesty: the note grounds no brain region and no
 * neurotransmitter — stigma's engine is social-psychological in
 * this lineage, so brainRegions and neurotransmitters are empty
 * by design and the gap is recorded in contentGaps, never
 * papered over with decorative neuroscience.
 *
 * Drug routes: the note assigns no medication any role in stigma
 * or transcultural practice — drugLinks is empty by design; the
 * disorders met in the cases (psychosis, depression) carry their
 * own pharmacology in their own courses, never invented here.
 */
export const transculturalStigmaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "transcultural-stigma",
  title: "Transcultural Psychiatry & Stigma",
  shortName: "Culture & Stigma",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Transcultural Psychiatry & Stigma"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Culture's shaping hand and the mark of mental illness: idioms, pathways and stigma.",

  summary:
    "Stigma runs on a three-part engine (ignorance, prejudice and discrimination) and no known culture accepts its mentally ill as equals. This course teaches the triad, the global findings, the two proven anti-stigma ingredients and the shift from stigma to discrimination.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define stigma from its etymology (the Greek stizein, the indelible dot of the slave and the vagabond) and state Goffman's spoiled-identity analysis with its defining sentence.",
    "Use the ignorance-prejudice-discrimination triad (the knowledge-attitude-behaviour structure in its British psychiatric synthesis) as the working analysis, with Corrigan's stereotype-prejudice-discrimination cascade as the parallel.",
    "Describe the public stereotypes of mental disorders (dangerousness the most researched and the media-amplified) and state the prejudice finding: emotional prejudice predicting discrimination more strongly than stereotypes, with the fear-of-violence literature gap.",
    "Recite the methodological critique of social-distance research (the five failings and the verdict sentence) and name the corrective: the discrimination actually experienced.",
    "Give the global findings exactly as the chapter reports them: the Southern Indian study's three concerns and its higher-stigma groups; Ethiopia's four figures; Japan's shame-logic, the renaming (both terms) and the 20% disclosure figure; the Bali-Japan contrast; the Islamic-community data.",
    "State the five universal conclusions the chapter draws, including the phrase 'the ultimate stigma'.",
    "Name the two intervention ingredients and the three successful national campaigns with their evidence, and explain the stigma-to-discrimination reframe with its four advantages.",
    "Apply the transcultural clinical layer (the form-content discipline, the idioms of distress, the culture-bound caution and the culturally-shaped help-seeking pathway) as the daily craft of the consultation that is itself a stigma event.",
  ],
  quickFacts: [
    { label: "The etymology", value: "Stizein: the prick", detail: "Greek 'to prick': the indelible dot tattooed on slaves and vagabonds; the visible mark of inferior status; the term's migration into medicine gave the field its name for the discrediting mark" },
    { label: "The working structure", value: "Ignorance, prejudice, discrimination", detail: "The knowledge-attitude-behaviour triad in its British psychiatric synthesis (Thornicroft): problems of knowledge, problems of attitude, problems of behaviour; the behavioural element the damaging outcome and the modern intervention target" },
    { label: "The central finding", value: "Emotion beats cognition", detail: "Prejudice: the emotional component (fear, hostility, distaste); predicts discrimination more strongly than stereotypes do; and apart from the fear-of-violence literature, almost nothing is published on emotional reactions to the mentally ill" },
    { label: "The verdict", value: "'Beside the point'", detail: "The social-distance tradition examined: hypotheticals not real situations, attitudes assumed congruent with unmeasured behaviour, the ill's own experiences unexplored; 'in short, most work on stigma has been beside the point'" },
    { label: "The global finding", value: "No culture accepts", detail: "No known country, society or culture considers its mentally ill as of equal value and acceptability; shame and blame common everywhere studied; mental illness 'the ultimate stigma' among compared conditions" },
    { label: "The renaming lesson", value: "Split-mind to loss-of-co-ordination", detail: "Japan, after a decade of Zenkaren family-organisation pressure: seishi buntetsu byo (split-mind disorder, violating culturally-valued personal autonomy) became togo shiccho sho, with only 20% of patients told their diagnosis before the change" },
    { label: "The two ingredients", value: "Contact + social marketing", detail: "Direct social contact with people with mental illness at the local level, social marketing techniques at the national level: the campaigns: New Zealand's like minds like mine (ten years), Scotland's see me, Australia's beyondblue" },
    { label: "The Indian paragraph", value: "Marriage, neighbours, concealment", detail: "The Southern Indian study: effects on marital prospects, fear of rejection by neighbours, the need to hide the condition, with higher stigma among women and younger patients, and the divorced woman's compounded disadvantage" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The dangerousness stereotype's principal target and the renaming's disorder: the media-amplified homicide distortion answered by the epidemiological reality" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Beyondblue's depression-knowledge initiative; the Bali contrast's finding: depression less acceptable in Bali than Japan" },
    { label: "Indigenous & Folk Healing", type: "condition", href: "/psychiatry/indigenous-healing/", note: "The help-seeking pathway's cultural shaping: the healer first contact, and the collaboration-not-competition stance this course prescribes" },
    { label: "Descriptive Phenomenology", type: "condition", href: "/psychiatry/psychiatric-phenomenology/", note: "The form-content discipline's home: constant psychopathological form with culturally-variable content, the companion rule this course applies" },
    { label: "Psychiatric Assessment", type: "condition", href: "/psychiatry/psychiatric-assessment/", note: "The confidentiality discipline: the clinical answer to the consultation that is itself a stigma event" },
    { label: "Family Therapy", type: "condition", href: "/psychiatry/family-therapy/", note: "The marriage-questions counselling and the family's disclosure decisions: the system in which the Indian stigma findings live" },
    { label: "Group Therapy", type: "condition", href: "/psychiatry/group-therapy/", note: "The SHG-AA-NA self-help-group architecture: the contact ingredient's Indian vehicle" },
    { label: "Psychiatric Disorder & Offending", type: "condition", href: "/psychiatry/psychiatry-offending/", note: "The forensic numbers' honest use: the 99.97% annual non-violence of schizophrenia against the homicide-coverage distortion" },
    { label: "The Voluntary Sector", type: "condition", href: "/psychiatry/voluntary-sector/", note: "The consumer-movement insight: contact works, and the recovered speaker is the intervention (in-batch lesson)" },
    { label: "Community Mental Health Services", type: "condition", href: "/psychiatry/mh-services/", note: "The Tele-MANAS-style national layer. India's beyondblue-equivalent where social marketing meets contact in the public system (in-batch lesson)" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Stigma's engine is a cascade with three separable stages, and culture works on every one of them. The mark is applied first. The label that reduces the bearer, in Goffman's sentence, 'from a whole and usual person to a tainted, discounted one': the ancient stizein, the slave's indelible dot, migrated into medicine's vocabulary. The stereotype then does the cognitive work (dangerousness (the most researched, the media-amplified), unpredictability, blame) the shorthand a public applies to disorders it recognizes poorly, its causation models psychosocial and moral rather than biomedical. The prejudice step is the decisive one: the emotional endorsement (fear, anger, resentment, distaste, disgust) and the chapter's central empirical finding that these emotions predict discrimination more strongly than the stereotypes do, which is why information campaigns alone change so little and why the fear-of-violence literature matters so much. The discrimination stage then does the damage (avoidance, work and housing withheld, coercion, relationships and healthcare refused) the behaviour the modern reframe makes the target, measured not by whether an employer would hire but whether he does. Culture enters at every stage as the shaping hand: the cascade's FORM is universal (no known culture accepts its mentally ill as equals) while its CONTENTS vary. Japan's loss-of-control shame-logic, Southern India's marriage-alliance economics, Morocco's sorcery attributions, Ethiopia's prayer pathway. The same shaping hand governs the clinic: distress presents through the culture's idioms (somatisation, possession, nerves, 'gas', the somatic front door), the help-seeking pathway runs through the healer and the shrine before the hospital, and the consultation itself becomes a stigma event in which concealment and disclosure-fear decide what the clinician is told. The exits are correspondingly two-tracked: direct social contact with recovered people at the local level and sustained social marketing at the national level, and the reframe that moves the whole target from attitudes to behaviour, making interventions testable, claiming anti-discrimination law's parity, and turning the spotlight from the stigmatised to the stigmatiser.",
    steps: [
      "The mark applied: the label that discredits; stizein, the indelible dot of the slave and the vagabond, migrated into medicine; Goffman's spoiled identity, the attribute deeply discrediting.",
      "The stereotype engaged: the cognitive shorthand (dangerousness (the most researched, the media-amplified), unpredictability, blame, incompetence) the public's poor disorder recognition and non-biomedical causation models supplying the raw material.",
      "The prejudice endorsed: the emotional layer (fear, anger, resentment, distaste, disgust) with the chapter's finding that emotional prejudice predicts discrimination more strongly than stereotypes do, and the literature gap: apart from fear-of-violence, almost nothing published on emotional reactions.",
      "The discrimination enacted: the behavioural consequence (avoidance, work and housing withheld, coercion, relationships and healthcare refused) the stage that damages lives and the modern reframe's target.",
      "The cultural shaping: universal form, variable content; no known culture accepts its mentally ill as equals, but each supplies its own engine: Japan's loss-of-control shame, Southern India's marriage-alliance economics, Morocco's sorcery attributions, Ethiopia's prayer preference.",
      "The clinical layer shaped in turn: the idioms of distress (somatisation, possession, nerves, 'gas' (the somatic front door), the healer-first help-seeking pathway, and the consultation as stigma event) concealment and disclosure-fear deciding what the clinician is told.",
      "The exits: direct social contact (local) and social marketing (national), and the stigma-to-discrimination reframe: behaviour made the target, interventions made testable, anti-discrimination law's parity claimed, the stigmatiser put in the spotlight.",
    ],
    grade: "supported",
  },
  brainRegions: [],
  neurotransmitters: [],
  pathways: [
    {
      id: "stigma-cascade-pathway",
      name: "The stigma cascade (mark to discrimination)",
      steps: [
        { label: "The label applied", detail: "The diagnosis made visible: by disclosure, the neighbourhood, the records; Goffman's deeply discrediting attribute" },
        { label: "The stereotype activated", detail: "The cognitive shorthand: dangerousness (most researched, media-amplified), unpredictability, blame; the public's poor recognition supplying it" },
        { label: "The prejudice endorsed", detail: "The emotional layer (fear, anger, resentment, distaste, disgust) the strongest predictor of what follows" },
        { label: "The discrimination enacted", detail: "Avoidance; work and housing withheld; coercion; relationships and healthcare refused: the behaviour that damages lives" },
        { label: "The loop closed", detail: "Popular understandings linked to help-seeking and disclosure: anticipated rejection producing concealment and delay" },
      ],
      clinicalManifestation: "The job refused, the marriage negotiation collapsed, the house denied: the acts the reframe makes the intervention's target.",
      grade: "supported",
    },
    {
      id: "pathway-to-care-pathway",
      name: "The pathway to care (illness to clinic, culturally shaped)",
      steps: [
        { label: "The illness experienced", detail: "Distress speaking the culture's idiom: somatisation, possession, nerves, 'gas': the somatic front door" },
        { label: "The family's explanatory model", detail: "The popular understanding: bodily, spiritual or moral attribution (Morocco's sorcery figures; Ethiopia's 65% preferring prayer)" },
        { label: "The first consultations", detail: "The healer and the shrine before the hospital: the pathway's cultural shaping; prayer preferred, the illness concealed (Ethiopia's 37%)" },
        { label: "The concealment tax", detail: "Hiding the condition (for marital prospects, against neighbours' rejection) help delayed, treatment interrupted" },
        { label: "The clinic reached late", detail: "The diagnosis-disclosure decision now the family's crisis: what to tell the patient, the marriage party, the neighbours" },
      ],
      clinicalManifestation: "The farmer with nine months of 'gas', two shrine visits and a healer's amulet before the word depression was ever spoken.",
      grade: "supported",
    },
    {
      id: "concealment-spiral-pathway",
      name: "The concealment spiral (anticipated rejection to interrupted treatment)",
      steps: [
        { label: "The anticipation", detail: "The family's forecast of the mark's costs: the marriage prospects, the neighbours' rejection, the employment" },
        { label: "The concealment decision", detail: "The illness hidden, from relatives, employers, the marriage party; the clinic visits themselves disguised" },
        { label: "The treatment tax", detail: "Help delayed and treatment interrupted: every hidden month untreated illness (the Ethiopian 37% pattern, the Indian daily variant)" },
        { label: "The worsening", detail: "The episode progressing unmedicated and unmonitored: the compounded burdens arriving; the divorced woman's position the extreme" },
        { label: "The exit offered", detail: "The family-education session that reframes ('a treatable medical condition, not a family stain') and the destigmatising diagnosis-conversation" },
      ],
      clinicalManifestation: "The relapse that arrives through the door the family kept hidden: the concealment spiral's bill presented at the emergency.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "stizein-origin", time: "Ancient Greece", title: "The stigmatising mark", description: "The Greek stizein (to prick): the indelible dot tattooed on slaves and vagabonds, the visible mark of inferior status; the term's later migration into medicine gives psychiatry its name for the discrediting mark.", phase: "onset" },
    { id: "goffman-gilman", time: "1963-1985", title: "The concept assembled", description: "Goffman's Stigma: Notes on the Management of Spoiled Identity (1963); the attribute deeply discrediting, reducing the bearer 'from a whole and usual person to a tainted, discounted one'; Gilman's Seeing the Insane (1982) and Difference and Pathology (1985) documenting the visual stereotypes of madness across centuries.", phase: "onset" },
    { id: "comparative-evidence", time: "2001", title: "The comparative evidence lands", description: "Shibre's rural-Ethiopia study (75% of families stigmatised; 37% concealing; 65% preferring prayer) joins the chapter's Southern-Indian marital-prospects findings and Morocco's family figures: the patchy but decisive comparative picture the Oxford chapter assembles.", phase: "peak" },
    { id: "japanese-renaming", time: "After a decade of Zenkaren pressure", title: "Japan renames schizophrenia", description: "Seishi buntetsu byo (split-mind disorder) becomes togo shiccho sho (loss-of-co-ordination disorder): the old term violating culturally-valued personal autonomy, only 20% of patients told their diagnosis; the new term less stigmatising and more openly discussed: terminology itself an anti-stigma instrument.", phase: "peak" },
    { id: "campaign-decade", time: "2004-2005", title: "The campaign evidence", description: "New Zealand's like minds, like mine (ten years, internationally renowned, transforming public engagement); Scotland's see me; Australia's beyondblue (state-by-state evaluation: improved recognition, help-seeking and treatment acceptance where the programme ran); England's changing-minds follow-up showing attitude change.", phase: "peak" },
    { id: "discrimination-reframe", time: "2006-2007", title: "The stigma-to-discrimination reframe", description: "Thornicroft's Shunned (2006) and the triad's own synthesis (Thornicroft, Rose & Kassam, 2007): attention to actual behaviour, testable interventions, anti-discrimination law's parity with physical disability, and the stigmatiser; human rights, injustice, discrimination as experienced.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the stance as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "Structural and comparative rather than a single survey number: the evidence base is patchy (few comparative, few longitudinal studies) but decisive in direction: no known country, society or culture considers its mentally ill as of equal value and acceptability; shame and blame are common everywhere studied, to differing extents; rejection and avoidance appear universal; mental illness is 'the ultimate stigma' among compared conditions. The figures the chapter carries: rural Ethiopia; 75% of families of schizophrenia and mood-disorder patients stigmatised, 37% concealing the illness, 65% preferring prayer as treatment, the general population judging schizophrenia more severe than mental retardation; Morocco: 76% of families with no knowledge of the illness, 80% calling it chronic, 48% handicapping, 39% incurable, 25% sorcery-linked; Japan: only 20% of patients told their diagnosis before the renaming.",
    indianPrevalence: "The chapter's own Southern-Indian study: people with mental illness's main concerns; effects on marital prospects, fear of rejection by neighbours, and the need to hide the condition; higher stigma among women and younger patients; the divorced woman's compounded position: divorce sometimes related to heredity fears, no financial support from former husbands, the additional stigma of separation.",
    lifetimeRisk: "Not applicable as a risk: stigma is a social process attached to illness, not a condition with an incidence of its own; its 'exposure' is universal wherever mental illness meets society.",
    genderRatio: "Women and younger patients report higher stigma in the Southern-Indian study; the divorced woman's position is the compounded extreme: heredity-blamed divorce, no financial support from the former husband, separation's additional stigma.",
    ageOfOnset: "Not applicable as an onset: the one age datum the lineage carries is the Southern-Indian finding of higher stigma among younger patients.",
    indianNotes: "The chapter's Indian paragraph makes this a domestic note: marriage-alliance dynamics, women's compounded stigma, concealment and the family's disclosure decisions are the Indian clinic's daily materials, and the Ethiopian concealment (37%) and prayer-preference (65%) figures map directly onto Indian practice patterns.",
  },
  etiology: [
    { category: "psychological", factor: "Ignorance: problems of knowledge", details: "The public's poor recognition of disorders; causation models psychosocial and moral rather than biomedical; treatability misconceptions: the myths-and-misinformation layer the information campaigns target and the reason they alone underperform." },
    { category: "psychological", factor: "Prejudice: problems of attitude", details: "The negative evaluations and emotional reactions (fear, anger, resentment, distaste, disgust) with the fear-of-violence literature the one emotional territory studied; emotional prejudice predicting discrimination more strongly than stereotypes do." },
    { category: "social", factor: "Discrimination: problems of behaviour", details: "The rejecting and avoidant actions: avoidance, work and housing withheld, coercion, relationships and healthcare refused; the behaviour that damages lives and the modern intervention target." },
    { category: "social", factor: "The cultural shaping of the mark", details: "Universal form, locally-variable content: Japan's loss-of-control shame-logic (mental illness not subject to willpower); Southern India's marriage-alliance economics; Morocco's sorcery attributions; Ethiopia's prayer pathway: each culture supplying its own engine for the same cascade." },
    { category: "environmental", factor: "Media amplification", details: "The homicide-coverage distortion building the dangerousness stereotype (the most researched stereotype and the most media-amplified) against the epidemiological reality the forensic literature quantifies (the 99.97% annual non-violence of schizophrenia); the stereotype's manufactured source." },
  ],
  symptomClusters: [
    {
      category: "1. The stigma signals in the consultation",
      symptoms: ["Concealment: the illness hidden from relatives, employers and neighbours; the family's disclosure decisions as the presenting material", "Disclosure-fear shaping the history: symptoms under-reported, clinic visits disguised, treatment interrupted when discovery threatens", "The marriage questions raised obliquely (heredity, prospects, the alliance's survival) before any symptom is discussed", "The diagnosis-disclosure impasse: the family requesting silence, the patient unasked (the Japanese 20% pattern)"],
    },
    {
      category: "2. The idioms of distress (the culture's language)",
      symptoms: ["Somatisation: the body carrying what the culture will not let the mind say; the somatic front door", "'Nerves' and 'gas': the local names for chronic distress across continents", "Possession talk: the affliction framed as spirit work, the healer the first consultant", "The idiom's double function: the distress expressed AND the stigma deflected (a bodily cause shames less than a 'mad' one)"],
    },
    {
      category: "3. The cultural presentation patterns",
      symptoms: ["Form constant, content cultural: the same depressive or psychotic form wearing each culture's explanatory clothing", "Shame-logic presentations (Japan): the illness as loss of control not subject to willpower; the family's face lost", "Marriage-alliance presentations (Southern India): the prognosis measured in alliance survival, not symptoms", "Religious-moral presentations (Morocco, Ethiopia): sorcery attributions, prayer as the preferred treatment"],
    },
    {
      category: "4. The discrimination marks (the behaviour the reframe targets)",
      symptoms: ["Employment refused or lost on disclosure; work withheld from the recovered", "Housing denied; the neighbours' rejection: the fear the Southern-Indian families named", "Relationships withdrawn: the marriage negotiation collapsed; the divorced woman's compounded losses", "Healthcare rejection: the VIEW-survey territory: the actual experiences of the ill, not the hypotheticals of the public"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The stigma assessment",
      code: "The consultation as a stigma event",
      criteria: [
        "Concealment asked about directly: who knows, who must never know, what the family is hiding from whom; the answer shapes the treatment's survival.",
        "The disclosure-fear mapped: marital prospects, neighbours, employment; the Southern-Indian triad of concerns asked about, not awaited.",
        "The family's disclosure decisions documented: what the patient has been told, by whom, in what words; the Japanese 20% lesson made a routine audit.",
        "The confidentiality discipline stated explicitly to patient and family: the clinical answer to the consultation's being a stigma event.",
        "The compounded disadvantages flagged: the woman's, the younger patient's, the divorced woman's; stigma's uneven distribution treated as a clinical variable.",
      ],
      duration: "One structured minute inside every assessment: the stigma questions ride with the psychosocial history.",
      indianNote: "In Indian practice the marriage calendar is in the consulting room: the heredity question, the alliance's survival and the concealment decision are the visit's real agenda. The clinician who names them respectfully gets the real history.",
    },
    {
      system: "The transcultural clinical layer",
      code: "The 1.3.2 companion disciplines",
      criteria: [
        "The form-content discipline: psychopathological form assessed as constant, content read as culturally variable; the phenomenological rule that separates disorder from idiom.",
        "The idioms of distress elicited: somatisation, possession, nerves, 'gas'; the somatic front door opened respectfully, never corrected.",
        "The culture-bound caution applied: diagnosing what the culture normalises is the error; the community's own norms asked about before the label is written.",
        "The help-seeking pathway mapped: the healer first contact, the shrine circuit, the prayer preference; the pathway's cultural shaping recorded as rigorously as the drug history.",
      ],
      duration: "The disciplines run through the whole assessment: they are the transcultural layer of every element, not a separate interview.",
      indianNote: "The Indian OPD meets the full spectrum in a week: the somatic front door, the healer's amulet, the shrine circuit, the family's explanatory model; the four disciplines are the daily craft.",
    },
    {
      system: "The anti-stigma intervention criteria",
      code: "The two ingredients and their tests",
      criteria: [
        "Direct social contact with people with mental illness at the local level: the contact ingredient: recovered speakers, families meeting families.",
        "Social marketing techniques at the national level: the campaign ingredient: sustained, evaluated, multi-year.",
        "The outcome measured at the behaviour level: employment, housing and healthcare access, never attitudes alone.",
        "The reframe's four advantages stated: behaviour over attitudes, testability, anti-discrimination law's parity, the stigmatiser in the spotlight.",
        "What does not qualify: information leaflets alone, one-off events, attitude measurement without behaviour measurement; the social-distance critique's lesson.",
      ],
      duration: "Campaigns run for years (like minds like mine's decade) the duration itself part of the mechanism.",
      indianNote: "India's levers: the self-help-group movement (the SHG-AA-NA architecture), families speaking to families (the ARDSI, NAMI-India models), school and college programmes; the contact principle; the Tele-MANAS-style architecture as the national layer where social marketing meets contact in the public system.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The culture-bound presentation (what the culture normalises)", distinguishingFeatures: "The state or experience is one the culture itself sanctions or normalises (possession trance in its ritual context, the sanctioned somatic complaint pattern) with no independent distress or dysfunction beyond the cultural frame.", keyDifferentiator: "The form-content discipline plus the community's own norms: constant psychopathological form with culturally-variable content defines the disorder; what the culture normalises is not the disorder: the caution against diagnosing the culture-bound." },
    { condition: "The idiom of distress (expression, not disorder)", distinguishingFeatures: "'Gas', nerves, somatisation and possession talk as the culture's language of suffering: the distress is real and the idiom is its vehicle, not a separate disease.", keyDifferentiator: "The idiom elicited and worked with (the somatic front door) while the underlying disorder is diagnosed by its form (the depression behind the 'gas'); dismissing the idiom as ignorance is itself the ignorance." },
    { condition: "Stigma-shaped concealment masquerading as absence or mildness", distinguishingFeatures: "The guarded history, the under-reported symptoms, the interrupted treatment: the information the consultation receives is itself shaped by the stigma event.", keyDifferentiator: "The confidentiality discipline and the stigma assessment: the history retaken once the family's disclosure fears are addressed; the clinical picture often changes when concealment lifts." },
    { condition: "The stigmatiser's problem (discrimination as the diagnosis)", distinguishingFeatures: "The employer who does not hire, the landlord who does not let, the family that rejects: the presenting problem located in the discriminator's behaviour, not the patient's condition.", keyDifferentiator: "The reframe's diagnostic move: the intervention's target is the act (employment, housing, healthcare access) and the clinician's tools are advocacy, certification and the anti-discrimination law's parity, not the patient's further treatment." },
  ],
  management: [
    { category: "psychotherapy", name: "The destigmatising diagnosis-conversation", description: "The diagnosis-disclosure decision every clinic faces: the Japanese pre-renaming practice (only 20% of patients told) is the cost of silence; no treatment partnership without naming. The compromise is the careful, destigmatising explanation, not silence: the condition named as treatable ('a treatable condition of the brain's chemistry, like diabetes of the pancreas'), the language chosen with dignity, the treatability stated.", whenToUse: "Every diagnosis conversation: the label's social cost acknowledged and managed, never ignored; the family's request for silence negotiated, never obeyed.", indianContext: "The marriage-questions counselling with heredity fears addressed probabilistically (an affected relative raises risk; most relatives stay well: no deterministic sentence); the dignified regional term chosen: pagal and unmad carry their load; 'mann ki bimari' positioned carefully." },
    { category: "psychotherapy", name: "The confidentiality discipline", description: "The consultation is a stigma event: concealment, shame and disclosure-fear shape what patients and families tell the clinician, and the first instrument is the confidentiality discipline stated explicitly. What is said stays in the room, the family and the marriage party hear only what the patient chooses to tell them.", whenToUse: "Every assessment in which concealment or marriage stakes are in the room: stated first, because the alliance depends on it.", indianContext: "The family's disclosure decisions treated as clinical material: who knows, who must never know, what the marriage negotiation requires; the Southern-Indian concerns arriving as the visit's opening agenda." },
    { category: "psychotherapy", name: "The transcultural clinical layer applied", description: "The four companion disciplines as daily practice: the form-content discipline (constant form, cultural content) separating disorder from idiom; the idioms of distress elicited and worked through (the somatic front door); the culture-bound caution (not diagnosing what the culture normalises); the help-seeking pathway mapped (the healer first contact) and met with collaboration-not-competition.", whenToUse: "Every presentation in which distress speaks an idiom or the pathway has run through the traditional sector.", indianContext: "The shrine-temple circuit and the prayer preference map onto the Ethiopian figures (65% preferring prayer; 37% concealing): the practical response is collaboration with healers and religious-leader psychoeducation, never competition." },
    { category: "service-design", name: "Contact and social marketing — the two active ingredients", description: "The intervention evidence names exactly two active ingredients: direct social contact with people with mental illness at the local level, and social marketing techniques at the national level. The campaign evidence: New Zealand's like minds, like mine (ten years, internationally renowned, transforming public engagement); Scotland's see me; Australia's beyondblue (state-by-state evaluation: improved recognition, help-seeking and treatment acceptance where the programme ran); England's changing-minds follow-up showing attitude change. Leaflets alone do not work.", whenToUse: "Every anti-stigma effort the clinician joins or builds. The ingredients checked before the money is spent.", indianContext: "The self-help-group movement (the SHG-AA-NA architecture), families speaking to families (the ARDSI, NAMI-India models) and school and college programmes: the contact principle; the Tele-MANAS-style national layer as India's beyondblue-equivalent." },
    { category: "service-design", name: "The behaviour focus: advocacy and certification as anti-discrimination practice", description: "The reframe's clinical translation: the testable outcomes are employment, housing and healthcare access, and the clinician's role includes advocacy and certification (disability, fitness) as anti-discrimination practice; the focus shifted from the stigmatised to the stigmatiser, with human rights, injustice and discrimination-as-experienced as the frame.", whenToUse: "Whenever discrimination is the presenting problem, or the hidden one beneath a non-attender.", indianContext: "The RPwD Act's entitlements and anti-discrimination provisions (the disability certificate, the reservation) and the IRDAI mental-health-parity mandate: the clinician as certification-and-rights facilitator enacting the reframe's fourth advantage." },
    { category: "psychotherapy", name: "The emotional target — the prejudice finding applied", description: "Anti-stigma work redirected from information campaigns to emotional-attitude change: because emotional prejudice (fear, hostility, distaste) predicts discrimination more strongly than stereotypes, the fear-violence link is the target, and the media's homicide-coverage distortion is answered with the forensic numbers' honest use; the epidemiological reality (the 99.97% annual non-violence of schizophrenia) against the amplified rare event.", whenToUse: "Whenever an information campaign is proposed as the whole answer, and whenever dangerousness talk enters the consultation or the staff room.", indianContext: "The dangerousness stereotype named and answered with its own denominator at every family-education session: the fear confronted with the actual risk, not dismissed." },
  ],
  safety: {
    redFlags: [
      "Concealment with treatment interrupted: the family hiding the illness while the episode progresses (the Ethiopian 37% pattern's clinical cost)",
      "The diagnosis never disclosed: no treatment partnership, adherence built on a name the patient was never given (the Japanese 20% lesson's daily danger)",
      "The divorced woman's compounded crisis: heredity-blamed separation, no financial support, no custodial plan, the additional stigma of separation unaddressed",
      "Anticipated rejection producing disengagement: the patient who stops attending rather than be seen at the psychiatric clinic",
      "The family's life-savings spent on non-medical circuits while the treatable illness runs unmedicated",
    ],
    urgentGuidance:
      "The order of operations: (1) the confidentiality discipline stated first; the consultation is a stigma event and the alliance depends on saying so; (2) the destigmatising diagnosis-conversation held early: the careful explanation, not silence; (3) the family-education session booked ('a treatable medical condition, not a family stain') the concealment's cost named honestly, every hidden month untreated illness; (4) the compounded disadvantages (the woman's, the younger patient's, the divorced woman's) flagged and followed as clinical variables; (5) the relapse risk of interrupted treatment addressed directly: the crisis plan written for the concealment scenario, not only the clinical one.",
  },
  drugLinks: [],
  contentGaps: [
    "No medication role: the note assigns no drug any place in stigma or transcultural practice; drugLinks is empty by design; the disorders met in this course's cases (psychosis, depression) carry their own pharmacology in their own courses, never invented here.",
    "No neuroscience grounding: the note names no brain region and no neurotransmitter; stigma's engine is social-psychological in this lineage, so brainRegions and neurotransmitters are empty by design; a stereotype-and-prejudice neuroscience lesson has no KYP home and is not improvised.",
    "The cultural-formulation interview's full apparatus (the structured elicitation instrument) has no KYP lesson. The four disciplines are taught here as the working layer.",
    "The anti-stigma campaign programmes (like minds, like mine; see me; beyondblue) have no KYP lessons of their own. The evidence is taught here, the programme design left to public-health territory.",
    "The transcultural-services tier (interpreter-mediated practice, refugee and migrant service design) belongs to the in-batch refugee-mental-health and mh-services lessons: referenced, not duplicated.",
  ],
  patientGuide: {
    whatIsIt:
      "Stigma is the mark mental illness carries in every society studied: originally a physical brand (the tattoo pricked into slaves and vagabonds in ancient Greece) and now the whole process by which mental illness discredits a person. It has three parts: ignorance (the wrong ideas (that mental illness means danger, weakness or no hope of treatment), prejudice (the negative feelings) fear, distaste, blame), and discrimination (the rejecting behaviour, the job refused, the marriage broken, the house denied). No culture studied accepts its mentally ill as equals. The part that damages lives is the behaviour, which is also the part that can be measured, fought and changed.",
    whatCausesIt:
      "Fear of what is unfamiliar, amplified by media coverage that links mental illness with rare violent events; cultural beliefs about causes (weakness of will, heredity, sorcery); the family's fear of social and marriage consequences; and simple lack of knowledge about how treatable these conditions are. None of this is anyone's fault, all of it is changeable.",
    symptoms:
      "Stigma is not an illness and has no symptoms, but its effects are visible: the family hiding the illness from relatives and neighbours; the patient afraid to be seen at the clinic; the diagnosis never spoken at home; the marriage negotiation collapsing; the employer's questions. Doctors now ask about these directly, because they shape the history you give and the treatment you take.",
    treatment:
      "Two things work, and only two carry the evidence: direct social contact with people who have recovered from mental illness (locally, recovered speakers, families meeting families), and sustained national campaigns (New Zealand's like minds, like mine, Scotland's see me, Australia's beyondblue). Leaflets alone do not work. In the clinic, the treatment is the destigmatising explanation (naming the condition as treatable, like diabetes of the pancreas) and strict confidentiality. The law adds its part: anti-discrimination protection with parity to physical disability, in India, the RPwD Act's entitlements and insurance parity.",
    selfHelp: [
      "Ask the doctor directly what can be shared and with whom: selective, dignified disclosure protects better than total hiding.",
      "Meet recovered patients and their families: contact is the strongest known anti-stigma experience; self-help groups exist in most districts.",
      "Learn the treatability facts: the condition named and explained loses half its fear at the first consultation.",
      "Keep the appointments even while keeping the illness private: interrupted treatment is concealment's real cost.",
      "Use dignified words for the condition: the term chosen inside the family shapes the family's own attitude.",
      "Bring the marriage or employment questions to the clinician: these are counselling questions, not fate.",
    ],
    whenToSeekHelp: [
      "The family hiding the illness while the person is getting worse. The concealment cost has become clinical",
      "Treatment being interrupted to avoid discovery: the relapse risk is rising",
      "The diagnosis never told to the patient: there is no partnership without naming",
      "Marriage, employment or housing collapsing on disclosure: counselling and certification routes exist",
      "The patient's own shame producing withdrawal from all care: this is treatable",
      "A divorced or separated woman carrying the illness alone: her compounded burden is a clinical variable the team should know",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24x7, free, multiple Indian languages), for distress, family crises and guidance on where to go",
      "District hospital psychiatry OPD under the DMHP: the confidential channel, no referral needed",
      "The RPwD Act disability certificate and entitlements: the legal-parity route; the treating team can start it",
      "The district self-help group and families-speaking-to-families programmes (the SHG, ARDSI and NAMI-India models): the contact ingredient in person",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific anti-stigma guideline exists; the practice apparatus is legal rather than clinical: the RPwD Act's entitlements and anti-discrimination provisions (the disability certificate, the reservation), the IRDAI mental-health-parity mandate for insurance, following the Oxford chapter's synthesis and the note's India lens, the clinician enacts the reframe's fourth advantage (anti-discrimination law's parity) as certification-and-rights facilitator.",
    systemContext: "The consultation is a stigma event in India by default: marriage-alliance dynamics, women's compounded stigma, concealment and the family's disclosure decisions are the daily materials; the Southern-Indian study's three concerns (marital prospects, neighbours' rejection, the need to hide) arrive as the family's opening agenda, before any symptom history. The district OPD is where the concealment decision meets the treatment decision; the confidentiality discipline is stated there or the family does not return.",
    programmeContext: "India's levers map the two ingredients exactly: the contact principle; the self-help-group movement (the SHG-AA-NA architecture), families speaking to families (the ARDSI, NAMI-India models), school and college programmes (the youth-contact evidence); and the social-marketing ingredient: the Tele-MANAS-style national layer, the helpline and campaign architecture as India's beyondblue-equivalent, where social marketing meets contact in the public system.",
    costConsiderations: "The cost the note quantifies is stigma's own, not the programme's: concealment delays and interrupts treatment (the untreated episode the expensive outcome), the divorced woman's financial abandonment (no support from former husbands), the family's savings spent on non-medical circuits; against these, contact programmes cost professional time and the campaign layer public programme money: the anti-stigma spend is the cost-saving layer.",
    culturalConsiderations: "The chapter's Indian paragraph is the clinical brief: marital prospects, neighbour-rejection, concealment, women and the divorced at particular disadvantage. The language carries its own load (pagal, paagalpan, unmad) and the clinical term chosen (medical, dignified Hindi/regional terms; 'mann ki bimari' positioned carefully) is the daily micro-intervention, the renaming lesson Indian-style. The shrine-temple circuit and the prayer preference map directly onto the Ethiopian figures (65% preferring prayer; 37% concealing): collaboration-not-competition with healers and religious-leader psychoeducation the practical response.",
    patientCounselling: [
      "The confidentiality script: 'What you tell me stays in this room; the family, the neighbours, the marriage party hear only what you choose to tell them. Your treatment does not depend on disclosure.'",
      "The marriage script: 'An affected relative raises the risk above average; most relatives stay well. There is no certainty in either direction. Let us plan together what to share, when, and with whom.'",
      "The naming script: 'This is a treatable condition of the brain's chemistry, like diabetes of the pancreas: it has medical treatment, and people recover, work and marry.'",
      "The family-stain script: 'This is a treatable medical condition, not a family stain, hiding it delays the treatment; selective, dignified disclosure protects better than total secrecy.'",
      "The healer script: 'The temple visits and the medicine can both continue; keep both doors open; if the illness grows, come to us first.'",
      "The contact script: 'Meet the recovered patients and their families in the district group; hearing them is the strongest medicine against the fear; families who meet families cope best.'",
    ],
  },
  decisionPath: {
    title: "The consultation as a stigma event: the cultural and disclosure decisions",
    nodes: [
      {
        id: "start",
        question: "A patient with possible mental illness, the family guarded, the marriage calendar in the room. What does the consultation show?",
        branches: [
          { label: "The family is hiding the illness; treatment delayed or interrupted", next: "concealment-gate" },
          { label: "Distress speaks a cultural idiom: 'gas', nerves, possession", next: "idiom-gate" },
          { label: "The disclosure question: what to tell the patient, the marriage party, the neighbours", next: "disclosure-gate" },
          { label: "The pathway ran through a healer or shrine first", next: "pathway-gate" },
          { label: "Discrimination is the presenting problem: job, housing, marriage", next: "discrimination-path" },
        ],
      },
      {
        id: "concealment-gate",
        question: "Who is hiding what from whom, and what is the concealment costing?",
        branches: [
          { label: "The family hiding from the community; treatment continuing", next: "family-education-path" },
          { label: "A divorced woman: financial, custodial and social crisis compounding the illness", next: "compounded-path" },
        ],
      },
      {
        id: "family-education-path",
        question: "Concealment without direct crisis.",
        recommendation: "The family-education session that reframes: 'a treatable medical condition, not a family stain': concealment delays help and interrupts treatment (the Ethiopian 37% pattern, the Indian daily variant); the countermeasure is dignified, selective disclosure to the circle that matters, planned with the clinician, never forced; the confidentiality discipline restated so the family knows the clinic is not another leak.",
      },
      {
        id: "compounded-path",
        question: "The divorced woman's compounded burden.",
        recommendation: "The compounded position treated as a clinical variable, exactly as the note instructs: divorce sometimes related to heredity fears, no financial support from the former husband, the additional stigma of separation; the financial, custodial and social crisis documented, addressed and followed like any other prognostic factor; the women's-higher-stigma finding remembered in every plan.",
      },
      {
        id: "idiom-gate",
        question: "The form-content discipline begins: is the psychopathological FORM constant with culturally-variable content?",
        branches: [
          { label: "Form constant; the content speaks the culture (the idiom)", next: "idiom-path" },
          { label: "Distress and dysfunction beyond the idiom; disorder present", next: "disorder-path" },
        ],
      },
      {
        id: "idiom-path",
        question: "The idiom of distress: expression, not disease.",
        recommendation: "The idiom respected, not corrected: somatisation, possession, nerves and 'gas' are the culture's distress language. The somatic front door; the culture-bound caution applies (do not diagnose what the culture normalises); the explanatory model elicited and used for the alliance, and the underlying disorder diagnosed by its form, never by dismissing the idiom.",
      },
      {
        id: "disorder-path",
        question: "Disorder presenting through the idiom.",
        recommendation: "The disorder treated through the idiom, not against it: the destigmatising explanation delivered in the family's language; the treatment programme belonging to the disorder's own course (no pharmacology duplicated here); the pathway shaped culturally: the healer consulted with collaboration-not-competition, the religious leader the family trusts engaged for psychoeducation.",
      },
      {
        id: "disclosure-gate",
        question: "The diagnosis-disclosure decision: the Japanese 20% lesson in the room.",
        branches: [
          { label: "The family asks for silence", next: "negotiate-path" },
          { label: "Disclosure agreed: patient and family ready", next: "destigmatising-path" },
        ],
      },
      {
        id: "negotiate-path",
        question: "The family requests silence.",
        recommendation: "Silence has a price: no treatment partnership without naming. The Japanese pre-renaming practice (only 20% told) is every clinic's problem. The compromise is the careful, destigmatising explanation, not collusion with silence: the patient told; the wider circle's disclosure planned selectively and honestly with the family: what the marriage party hears, and when, decided deliberately rather than by panic.",
      },
      {
        id: "destigmatising-path",
        question: "Disclosure agreed.",
        recommendation: "The destigmatising explanation delivered: 'a treatable condition of the brain's chemistry, like diabetes of the pancreas'; the name made workable, the treatability stated, the language chosen with dignity (the renaming lesson Indian-style: pagal and unmad carry their load; medical, dignified regional terms chosen; 'mann ki bimari' positioned carefully).",
      },
      {
        id: "pathway-gate",
        question: "The help-seeking pathway's cultural shaping: the healer was first.",
        branches: [
          { label: "The healer or shrine parallel and benign", next: "collaboration-path" },
          { label: "The religious authority has turned against the family", next: "religious-leader-path" },
        ],
      },
      {
        id: "collaboration-path",
        question: "The healer parallel to medical care.",
        recommendation: "Collaboration-not-competition: the healer acknowledged, the shrine visits neither endorsed nor forbidden; the 65%-preferring-prayer finding mapped onto the Indian circuit means the pathway is met where it runs, not fought, both doors open, the medical one used; the drug and substance history still taken directly (the healer's remedies recorded).",
      },
      {
        id: "religious-leader-path",
        question: "The religious authority turned against the family.",
        recommendation: "Religious-leader psychoeducation: the imam, priest or guru the family trusts engaged respectfully; the chapter's finding that contact fails where behaviour threatens the social fabric is the reason the authority's stance matters; the leader converted to the treatment's ally is the anti-stigma intervention the community accepts.",
      },
      {
        id: "discrimination-path",
        question: "Discrimination as the presenting problem.",
        recommendation: "The reframe applied: the act, not the attitude, is the target; the job refused, the house denied, the marriage rejected are the testable outcomes; the clinician's role includes advocacy and certification (the disability certificate, fitness assessments) as anti-discrimination practice, and the RPwD Act's entitlements with the IRDAI parity mandate are the Indian legal-parity tools: the stigmatiser, not the stigmatised, in the spotlight.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating stigma as an attitude problem: measuring attitudes and assuming behaviour",
      why: "The social-distance tradition's failing repeated at the bedside: attitudinal statements assumed congruent with unmeasured behaviour, hypotheticals rather than real situations; 'most work on stigma has been beside the point', and the clinic that copies it targets the wrong variable.",
      correction: "The behaviour focus: the testable outcomes are employment, housing and healthcare access. Ask what was done (the job, the house, the marriage), not only what was felt; the reframe's first advantage applied to individual care.",
    },
    {
      mistake: "Running information campaigns alone",
      why: "The leaflet fallacy ignores the central finding: emotional prejudice predicts discrimination more strongly than stereotypes do, correcting ignorance leaves the fear intact, and fear is the engine.",
      correction: "The two ingredients: direct social contact with recovered people at the local level, sustained social marketing at the national level; contact first, information riding on it; leaflets alone do not work.",
    },
    {
      mistake: "Diagnosing what the culture normalises: the culture-bound error",
      why: "The form-content discipline skipped: a sanctioned possession state or a culturally-shaped somatic presentation acquires a psychiatric label, the family is insulted, and the culture's own healing frame is pathologised.",
      correction: "The companion disciplines: psychopathological form constant with culturally-variable content defines the disorder; the community's own norms asked about before the label is written; the idiom elicited, never corrected.",
    },
    {
      mistake: "Colluding with the family's request for silence on the diagnosis",
      why: "The Japanese 20% lesson: no treatment partnership without naming; adherence built on an unnamed illness collapses at the first side effect, and the patient's own agency is never enlisted.",
      correction: "The careful, destigmatising explanation, not silence: the name given with its treatability stated ('like diabetes of the pancreas'); the wider circle's disclosure planned selectively with the family: honesty with the patient, discretion with the world.",
    },
    {
      mistake: "Talking past the idiom: the somatic front door ignored",
      why: "The 'gas', nerves and weakness presentation read as mere non-specificity: the explanatory model never elicited, the alliance never built, and the patient returns to the sector that speaks the language; the healer.",
      correction: "The idiom elicited and used: the explanation delivered in the family's language, the disorder diagnosed by its form behind the idiom, the pathway mapped (healer first contact) and met with collaboration-not-competition.",
    },
    {
      mistake: "Locating the problem in the stigmatised person",
      why: "The unexamined habit: more treatment for the patient who was rejected; the employer, the landlord and the marriage market left untouched, and the discrimination that produced the relapse continues.",
      correction: "The reframe's fourth advantage: the stigmatiser in the spotlight; advocacy and certification as clinical work, the anti-discrimination law's parity invoked, the RPwD Act's entitlements and the IRDAI parity mandate used as treatment instruments.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define stigma from its Greek etymology (stizein, the indelible dot of the slave and the vagabond) and Goffman's 1963 analysis: the attribute deeply discrediting, reducing the bearer 'from a whole and usual person to a tainted, discounted one'.",
        "The ignorance-prejudice-discrimination triad (the knowledge-attitude-behaviour structure in Thornicroft's British synthesis) with Corrigan's stereotype-prejudice-discrimination cascade as the parallel.",
        "The prejudice finding: emotional prejudice (fear, hostility, distaste) predicts discrimination more strongly than stereotypes do, and the literature gap apart from fear-of-violence.",
        "The five universal conclusions from the global evidence, including the phrase 'the ultimate stigma'.",
        "The two intervention ingredients and the three national campaigns with their evidence, and why information leaflets alone fail.",
      ],
      practical: [
        "Demonstrate the destigmatising diagnosis-conversation: deliver the explanation ('a treatable condition of the brain's chemistry, like diabetes of the pancreas') to a standardized patient with the family present, and negotiate a request for silence.",
        "Take a stigma-sensitive history: concealment, the marriage questions, the healer pathway, with the confidentiality discipline stated explicitly at the start.",
      ],
      longAnswer: [
        "Stigma in mental illness: the concept's history, the ignorance-prejudice-discrimination structure, the evidence on attitudes and behaviour, and the interventions with their campaign evidence.",
        "Transcultural psychiatry in clinical practice: the form-content discipline, the idioms of distress, the culture-bound caution, and the cultural shaping of the help-seeking pathway, with the stigma findings that make the consultation a stigma event.",
      ],
    },
    neetPg: {
      highYield: [
        "THE TRIAD: ignorance (problems of knowledge), prejudice (problems of attitude), discrimination (problems of behaviour). Thornicroft's synthesis of the knowledge-attitude-behaviour structure; the behavioural element the damaging outcome and the modern target.",
        "THE PREJUDICE FINDING: emotional prejudice (fear, hostility, distaste) predicts discrimination more strongly than stereotypes do; apart from the fear-of-violence literature, almost nothing published on emotional reactions.",
        "THE VERDICT: 'most work on stigma has been beside the point'; the social-distance critique: hypotheticals not real situations; attitudes assumed congruent with unmeasured behaviour; the ill's own experiences unexplored; emotions and context neglected.",
        "SOUTHERN INDIA (the chapter's own reference): marital prospects, neighbours' rejection and concealment the main concerns; higher stigma among women and younger patients; the divorced woman's compounded position: divorce sometimes related to heredity fears, no financial support from former husbands, the additional stigma of separation.",
        "ETHIOPIA'S FOUR FIGURES: 75% of families of schizophrenia and mood-disorder patients stigmatised; 37% concealing the illness; 65% preferring prayer; the general population judging schizophrenia more severe than mental retardation.",
        "JAPAN: mental illness as loss of control not subject to willpower, producing shame; teachers' poor recognition with a Western-parallel profile and greater social rejection; the renaming after a decade of Zenkaren pressure: seishi buntetsu byo (split-mind disorder, violating culturally-valued personal autonomy) to togo shiccho sho (loss-of-co-ordination disorder); only 20% of patients told their diagnosis.",
        "THE BALI-JAPAN CONTRAST: schizophrenia viewed less favourably in Japan, depression and OCD less acceptable in Bali; disorder-specificity cautioning against cultural generalisation.",
        "ISLAMIC COMMUNITIES: stigma no less than elsewhere despite earlier suggestions; Morocco's families: 76% no knowledge, 80% chronic, 48% handicapping, 39% incurable, 25% sorcery-linked; the religious-authority turning; contact failing where behaviour threatens the social fabric.",
        "THE FIVE CONCLUSIONS: (1) no known country, society or culture considers its mentally ill of equal value and acceptability; (2) poor information quality, few comparative, few longitudinal studies; (3) clear links between popular understandings, help-seeking and disclosure; (4) shame and blame common everywhere studied, mental illness 'the ultimate stigma' among compared conditions; (5) rejection and avoidance universal.",
        "THE TWO INGREDIENTS: direct social contact with people with mental illness (local) and social marketing techniques (national), like minds, like mine (New Zealand, ten years, internationally renowned); see me (Scotland); beyondblue (Australia, state-by-state evaluation: improved recognition, help-seeking and treatment acceptance where the programme ran); England's changing-minds showing attitude change.",
        "THE REFRAME'S FOUR ADVANTAGES: attention to actual behaviour (whether the employer hires, not whether he would); interventions testable at the behaviour level; anti-discrimination law's parity with physical disability; the focus shifted from the stigmatised to the stigmatiser: human rights, injustice, discrimination as experienced.",
      ],
      pyqConcepts: [
        "The ignorance-prejudice-discrimination triad: the recurring list question across viva and PG formats.",
        "The prejudice-predicts-discrimination finding: the single most examined line in this territory.",
        "The Japanese renaming: the cross-cultural short-note favourite (both terms, the 20% figure, the autonomy violation).",
        "The two anti-stigma ingredients and their campaigns: the intervention question that recurs.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 23-year-old woman is brought to the district OPD after six months of social withdrawal and muttered speech; the referral was made only when the engagement negotiation began to wobble, and the parents open with 'Will this spoil her marriage: can we keep it between us?': the stigma assessment named (concealment, neighbours' rejection, marital prospects, the Southern-Indian triad as the presenting agenda); the confidentiality discipline stated before the history; the destigmatising diagnosis-conversation held (the careful explanation, not silence, the Japanese 20% lesson); the heredity question (an affected maternal uncle) answered probabilistically, never deterministically; the teaching: the consultation is a stigma event, and the clinician who treats it as one gets the history, the alliance and the adherence.",
        "A 46-year-old farmer presents with nine months of 'gas', weakness and sleeplessness; three physician consultations and a normal endoscopy; two shrine visits, a healer's amulet, and the brother asking whether prayer alone will do, with the addendum that 'if people know, who will marry his daughter?': the form-content discipline applied (the depressive form constant, the somatic content cultural); the idiom respected as the somatic front door; the pathway mapped (healer first, prayer preferred (the Ethiopian 65% figure's Indian map)) and met with collaboration-not-competition; the concealment addressed with the marriage-market fear named; the contact lever deployed (a recovered patient from the district group); the teaching: the disorder treated through the idiom, and the strongest anti-stigma instrument in Indian practice is the recovered voice.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The triad: ignorance (knowledge), prejudice (attitude), discrimination (behaviour).",
        "Japan: seishi buntetsu byo renamed togo shiccho sho; only 20% told their diagnosis before.",
        "Ethiopia: 75% of families stigmatised, 37% concealing, 65% preferring prayer.",
        "Emotional prejudice predicts discrimination more strongly than stereotypes.",
        "The two ingredients: direct social contact (local) + social marketing (national).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The consultation is a stigma event: concealment, shame and disclosure-fear shape the history you get; the confidentiality discipline stated first is the alliance's foundation, and the stigma questions (who knows, who must never know, what the marriage party hears) are as routine as the drug history.",
        "The reframe as daily practice: certification and advocacy (the disability certificate, fitness assessments, the RPwD Act's entitlements and the IRDAI parity mandate) are anti-discrimination clinical work, the fourth reframe advantage with an Indian address.",
        "The language micro-intervention: pagal, paagalpan and unmad carry their load; the dignified medical term chosen at every consultation is the renaming lesson Indian-style: terminology is an instrument, and the clinician holds it daily.",
        "The contact principle as the strongest Indian lever: recovered patients speaking, families meeting families (the ARDSI and NAMI-India models), the SHG-AA-NA architecture; prescribed by name in the plan, not merely praised in the abstract.",
        "The forensic numbers used honestly: the media's homicide-coverage distortion answered with the epidemiological reality; the 99.97% annual non-violence of schizophrenia: the dangerousness stereotype confronted with its own denominator at every family-education session.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The marriage calendar in the consulting room",
      presentation: "The family's first question was not about the symptoms. It was about the wedding.",
      initialPresentation: "A 23-year-old woman was brought to the district psychiatric OPD by her parents after six months of declining function: social withdrawal, muttered speech, her college courses abandoned. The referral had been made only when an engagement negotiation began to wobble; the parents' opening words, before any history: 'Will this spoil her marriage? Can we keep it between us?'",
      history: "First episode, insidious over six months; no substance use. A maternal uncle had a similar illness in his twenties: the heredity fear the family itself raised first. The family had concealed the episode from relatives, attributing her withdrawal to 'weakness'; a temple visit had already been made. The engagement negotiation under way, the boy's family beginning to ask questions.",
      examination: "Guarded and blunted; mild formal thought disorder; second-person auditory hallucinations; poor insight. No risk features. Between the parents' questions (heredity, prospects, disclosure) the mental state itself was almost incidental to the family's agenda.",
      diagnosis: "First-episode schizophrenia-spectrum psychotic disorder, presenting through the marriage-alliance frame: the family's chief concern being the stigma consequences, not the symptoms.",
      management: "The confidentiality discipline stated first: the consultation as a stigma event acknowledged in words; the destigmatising diagnosis-conversation held with the parents and, at the next visit, the patient: 'a treatable condition of the brain's chemistry, like diabetes of the pancreas'; the heredity question answered probabilistically (an affected uncle raises the risk above average; most relatives stay well: no certainty either way); the family-education session reframing 'a treatable medical condition, not a family stain'; the antipsychotic programme routed to the schizophrenia course's own protocol (no pharmacology duplicated here); the disclosure plan built selectively: what the marriage party is told, by whom, when, decided deliberately with the family rather than under panic.",
      outcome: "Adherence held through the first six months of treatment; the family continued follow-up, the mother becoming the appointment-keeper; the engagement negotiation concluded with a managed-disclosure decision the family reached with counselling rather than concealment panic; the patient's insight grew with the naming: the explanation, not the silence, made her a partner.",
      teachingPoints: [
        "The Southern-Indian findings live: marital prospects, neighbours' rejection and concealment presented as the family's opening agenda, the woman's disadvantage in the room before the first symptom.",
        "The consultation is a stigma event: the confidentiality discipline came before the history, and got the history.",
        "The heredity counselling probabilistic, never deterministic: the marriage question answered with its own arithmetic, honestly.",
        "The destigmatising explanation, not silence: the Japanese 20% lesson applied; no treatment partnership without naming.",
      ],
    },
    {
      title: "The somatic front door",
      presentation: "Nine months of 'gas', nerves and shrine visits before the word depression was ever spoken.",
      initialPresentation: "A 46-year-old farmer was brought to the district OPD by his brother, reporting nine months of abdominal complaints ('gas'), weakness, sleeplessness and weight loss. Three physician consultations; an endoscopy reported normal; two shrine visits and a healer's amulet already purchased; the brother's own suggestion had been prayer alone. The family had noticed the mood change but never named it.",
      history: "The idioms were the illness's clothing: 'gas', 'nerves', weakness; the somatic front door. The pathway: the healer first, the shrines, then the physicians, the psychiatric referral last and reluctantly accepted. The family's explanatory model bodily and spiritual. And the concealment arithmetic the brother stated plainly: 'If people know, who will marry his daughter?'",
      examination: "Depressed mood, anhedonia, biological symptoms, somatic preoccupation; no psychotic features; passive suicidal ideation. The form: a depressive disorder; the content: the somatic and spiritual idiom it wore.",
      diagnosis: "Depressive disorder presenting through the somatic idiom of distress, on a help-seeking pathway shaped by healer-first consultation, prayer preference and concealment.",
      management: "The idiom respected, the disorder treated: the explanation delivered in the family's language ('the weakness and the gas are the body's way of carrying a treatable illness of the mood, like diabetes of the pancreas, it has medical treatment'); the healer and shrine met with collaboration-not-competition: the visits neither endorsed nor forbidden, both doors kept open; the religious leader the family trusted engaged for psychoeducation; the contact lever deployed: a recovered patient from the district self-help group spoke with the family; the daughter's marriage-market fear named and counselled directly rather than left to operate silently; the antidepressant programme routed to the depressive-disorders course's own protocol (no drug route invented here).",
      outcome: "The somatic complaints receded as the mood lifted over the following months; the family kept both doors open: the shrine visits continuing alongside the appointments, the brother attending the family-education session and later speaking to another family himself; the daughter's marriage proceeded with a managed-disclosure decision; the healer's amulet retired by the patient, not confiscated by the doctor.",
      teachingPoints: [
        "The idiom of distress: somatisation, 'gas', nerves; the somatic front door the clinician works through, never against.",
        "The form-content discipline: the depressive form constant, the content cultural; the diagnosis made behind the idiom, not by dismissing it.",
        "The pathway's cultural shaping: healer first, prayer preferred (the Ethiopian 65% figure mapped onto the Indian circuit), the clinic last; met with collaboration, not competition.",
        "The contact principle: the recovered patient's voice moved the family further in one conversation than months of explanation; the strongest local anti-stigma instrument.",
        "The concealment-marriage nexus as the Indian clinical variable: the daughter's prospects inside the father's consultation, named and counselled.",
      ],
    },
  ],
  clinicalPearls: [
    "The triad: ignorance (problems of knowledge), prejudice (problems of attitude), discrimination (problems of behaviour); the behavioural element damages lives and is the modern intervention target.",
    "Stizein: the Greek prick: the indelible dot of the slave and the vagabond; Goffman's reduction 'from a whole and usual person to a tainted, discounted one'.",
    "Emotional prejudice (fear, hostility, distaste) predicts discrimination more strongly than stereotypes do; apart from fear-of-violence, almost nothing is published on emotional reactions.",
    "'In short, most work on stigma has been beside the point': the social-distance critique: hypotheticals, assumed attitude-behaviour congruence, the ill's own experiences unmeasured.",
    "No known country, society or culture considers its mentally ill of equal value and acceptability, and mental illness is 'the ultimate stigma' among compared conditions.",
    "Southern India's three concerns: marital prospects, neighbours' rejection, concealment; women, younger patients and the divorced at particular disadvantage.",
    "Japan's renaming: seishi buntetsu byo (split-mind disorder) to togo shiccho sho (loss-of-co-ordination disorder), after a decade of Zenkaren pressure; terminology carries stigma, and only 20% were told their diagnosis before.",
    "The Bali-Japan caution: schizophrenia less favoured in Japan, depression and OCD less acceptable in Bali; disorder-specificity forbids cultural generalisation.",
    "Ethiopia: 75% of families stigmatised, 37% concealing, 65% preferring prayer; the concealment and pathway figures that map onto Indian practice.",
    "The two active ingredients: direct social contact (local) and social marketing (national), like minds like mine, see me, beyondblue; leaflets alone do not work.",
    "The reframe: from stigma to discrimination; behaviour not attitudes, testable interventions, anti-discrimination law's parity, the stigmatiser in the spotlight.",
    "The form-content discipline: psychopathological form constant, content culturally variable; the idioms of distress (somatisation, possession, nerves, 'gas') are the culture's language, not a separate disease.",
  ],
  highYieldSummary: [
    "Definition and anatomy: stigma; the Greek stizein (to prick), the indelible dot tattooed on slaves and vagabonds, the visible mark of inferior status that migrated into medicine's vocabulary; Goffman's Stigma (1963), the attribute deeply discrediting, reducing the bearer 'from a whole and usual person to a tainted, discounted one'; Gilman's Seeing the Insane (1982) and Difference and Pathology (1985), the visual stereotypes of madness across centuries. The working structure: the knowledge-attitude-behaviour triad in its British psychiatric synthesis: IGNORANCE (problems of knowledge: the myths and misinformation), PREJUDICE (problems of attitude: the negative evaluations and emotional reactions), DISCRIMINATION (problems of behaviour: the rejecting and avoidant actions) (with Corrigan's parallel cascade: stereotypes (the cognitive shorthand) dangerousness, incompetence, blame), prejudice (the emotional endorsement (fear, anger, resentment, distaste, disgust), discrimination (the behavioural consequence) avoidance, withheld work and housing, coercion).",
    "The evidence on attitudes and behaviour: the public's poor disorder recognition, the psychosocial and moral causation models against biomedical, the treatability misconceptions; the attitude surveys across Europe and the Royal College's changing-minds before-and-after data; DANGEROUSNESS the most researched stereotype and the media-amplified: the homicide-coverage distortion. The prejudice finding, the chapter's central empirical line: emotional prejudice (fear, hostility, distaste) PREDICTS DISCRIMINATION MORE STRONGLY THAN STEREOTYPES DO, with the striking literature gap: apart from fear-of-violence, almost nothing published on emotional reactions. The methodological critique of the social-distance tradition: hypothetical neighbours and colleagues, 'what normal people say' without the ill's own experiences, attitudinal statements assumed congruent with unmeasured behaviour, emotions and context neglected, little intervention guidance: 'in short, most work on stigma has been BESIDE THE POINT'; the corrective being the discrimination actually experienced (the VIEW surveys of service users' actual experiences: employment, housing, relationships, healthcare rejection).",
    "The global patterns: patchy but decisive: SOUTHERN INDIA (the chapter's own reference): marital prospects, neighbours' rejection and concealment the main concerns; higher stigma among women and younger patients; the divorced woman's compounded position: divorce sometimes related to heredity fears, no financial support from former husbands, the additional stigma of separation. ETHIOPIA: 75% of families of schizophrenia and mood-disorder patients stigmatised; 37% concealing; 65% preferring prayer; schizophrenia judged more severe than mental retardation. JAPAN: mental illness as loss of control, not subject to willpower, producing shame; teachers' poor recognition of schizophrenia's features with a Western-parallel profile and greater social rejection; the renaming after a decade of Zenkaren pressure: seishi buntetsu byo (split-mind disorder, violating culturally-valued personal autonomy) to togo shiccho sho (loss-of-co-ordination disorder); only 20% of patients told their diagnosis; the new term less stigmatising and more openly discussed. BALI vs JAPAN: schizophrenia less favourable in Japan, depression and OCD less acceptable in Bali; disorder-specificity cautioning against cultural generalisation. ISLAMIC COMMUNITIES: stigma no less than elsewhere despite earlier suggestions; Morocco's families (76% no knowledge; 80% chronic, 48% handicapping, 39% incurable, 25% sorcery-linked), the religious-authority turning, contact failing where behaviour threatens the social fabric.",
    "The five universal conclusions: (1) no known country, society or culture considers its mentally ill as of equal value and acceptability; (2) the information quality is poor, few comparative, few longitudinal studies; (3) clear links between popular understandings, help-seeking and disclosure; (4) shame and blame are common everywhere studied, to differing extents, with mental illness 'the ULTIMATE STIGMA' among compared conditions; (5) rejection and avoidance appear universal.",
    "Interventions: the two active ingredients: (i) DIRECT SOCIAL CONTACT with people with mental illness at the local level; (ii) SOCIAL MARKETING TECHNIQUES at the national level. The campaign evidence: New Zealand's like minds, like mine (ten years, internationally renowned, transforming public engagement); Scotland's see me; Australia's beyondblue (the depression-knowledge initiative with state-by-state evaluation, improved recognition, help-seeking and treatment acceptance where the programme ran); England's changing-minds (the Royal College's follow-up showing attitude change). The honest negative: information leaflets alone do not work; the prejudice finding explains why.",
    "The reframe, from stigma to discrimination, four advantages: (1) attention moves from attitudes to ACTUAL BEHAVIOUR) not whether an employer would hire, but whether he does; (2) interventions become TESTABLE at the behaviour level, without waiting for knowledge or feelings to change; (3) the mentally ill claim ANTI-DISCRIMINATION LAW'S PARITY with physical disability; (4) the focus shifts from the stigmatised to the STIGMATISER: human rights, injustice, and discrimination as experienced. The clinical translation: the testable outcomes are employment, housing and healthcare access, and the clinician's role includes advocacy and certification (disability, fitness) as anti-discrimination practice.",
    "The transcultural clinical layer and the Indian translation: the form-content discipline (constant psychopathological forms, culturally-variable contents, the phenomenological companion rule); the idioms of distress (somatisation, possession, nerves, 'gas', the somatic front door); the culture-bound caution (diagnosing what the culture normalises is the error); the help-seeking pathway's cultural shaping (the healer first contact). India: the chapter's own Southern-Indian findings make this a domestic note; marriage-alliance dynamics, women's compounded stigma, concealment and the family's disclosure decisions; the language micro-intervention (pagal, paagalpan, unmad carry their load, dignified medical terms chosen; 'mann ki bimari' positioned carefully); the contact principle as the strongest lever (the SHG-AA-NA architecture; families to families. ARDSI, NAMI-India; school and college programmes); the legal-parity tools (the RPwD Act's disability certificate and reservation; the IRDAI mental-health-parity mandate); the Tele-MANAS-style national layer as the beyondblue-equivalent where social marketing meets contact in the public system.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "tcs-quiz-1",
      question: "The three-part working structure of stigma (the Thornicroft synthesis) is:",
      options: ["Id, ego, superego", "Ignorance (knowledge), prejudice (attitude), discrimination (behaviour)", "Heredity, environment, chance", "Doctor, patient, family"],
      correctIndex: 1,
      explanation: "The knowledge-attitude-behaviour cascade — with the behavioural element (discrimination) as the damaging outcome and the modern intervention target.",
      afterSectionId: "mechanism",
    },
    {
      id: "tcs-quiz-2",
      question: "A patient describes the illness as 'gas', nerves and weakness, and the family consulted a healer first. The transcultural reading is:",
      options: ["A somatic delusional disorder requiring antipsychotics", "The idiom of distress — the somatic front door; the form-content discipline decides the diagnosis behind it", "Malingering until proved otherwise", "A culture-bound syndrome by definition — no diagnosis needed"],
      correctIndex: 1,
      explanation: "Somatisation, possession, nerves and 'gas' are the culture's distress language; the psychopathological form is assessed as constant with culturally-variable content — the culture-bound caution warns against diagnosing what the culture normalises, not against diagnosing at all.",
      afterSectionId: "symptoms",
    },
    {
      id: "tcs-quiz-3",
      question: "The Southern Indian study cited in the chapter found the main stigma concerns to be:",
      options: ["Employment and taxation", "Marital prospects, fear of rejection by neighbours, and the need to hide the condition, with women and younger patients reporting higher stigma", "Sports participation", "Travel documents"],
      correctIndex: 1,
      explanation: "The Indian findings quoted in the Oxford chapter itself — with the divorced woman's compounded disadvantage: heredity-linked divorce, no financial support from former husbands, the additional stigma of separation.",
      afterSectionId: "diagnosis",
    },
    {
      id: "tcs-quiz-4",
      question: "Which finding most strongly suggests a disorder rather than a culturally sanctioned presentation?",
      options: ["The patient speaks of 'gas' and nerves", "Possession talk inside the sanctioned ritual context", "Distress and dysfunction accumulating beyond the cultural frame, with the psychopathological form constant", "The family consulted a healer first"],
      correctIndex: 2,
      explanation: "The form-content discipline plus the caseness question: constant form with culturally-variable content defines the disorder; what the culture normalises is not one — distress and dysfunction beyond the frame decide.",
      afterSectionId: "differential",
    },
    {
      id: "tcs-quiz-5",
      question: "The two active ingredients for reducing stigma, per the intervention evidence, are:",
      options: ["Coercion and hospitalisation", "Direct social contact with people with mental illness (locally) and social marketing (nationally)", "Medication and psychotherapy", "Legislation alone"],
      correctIndex: 1,
      explanation: "The campaign evidence — New Zealand's decade-long like minds like mine, Scotland's see me, Australia's evaluated beyondblue — contact plus sustained marketing; information leaflets alone do not work.",
      afterSectionId: "management",
    },
    {
      id: "tcs-quiz-6",
      question: "Japan's renaming of schizophrenia (seishi buntetsu byo to togo shiccho sho) followed what pre-change practice?",
      options: ["Full disclosure to all patients", "Only about 20% of patients were told their diagnosis — the old term violating culturally-valued personal autonomy", "Mandatory reporting of all diagnoses", "No diagnosis existed"],
      correctIndex: 1,
      explanation: "The renaming lesson: terminology carries stigma, and terminology change (after a decade of Zenkaren family-organisation pressure) improves disclosure — the new term less stigmatising and more openly discussed.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Give the etymology of stigma and Goffman's definition, then the ignorance-prejudice-discrimination triad.", answer: "ETYMOLOGY: the Greek stizein (to prick); the indelible dot tattooed on slaves and vagabonds, the visible mark of inferior status; the term migrated into medicine's vocabulary. GOFFMAN (1963, Stigma: Notes on the Management of Spoiled Identity): the attribute deeply discrediting, reducing the bearer 'from a whole and usual person to a tainted, discounted one', with Gilman's Seeing the Insane and Difference and Pathology documenting the visual stereotypes of madness across centuries. THE TRIAD (the knowledge-attitude-behaviour structure in its British psychiatric synthesis): IGNORANCE; problems of knowledge, the myths and misinformation; PREJUDICE: problems of attitude, the negative evaluations and emotional reactions; DISCRIMINATION: problems of behaviour, the rejecting and avoidant actions. Corrigan's parallel cascade: stereotypes (cognitive shorthand (dangerousness, incompetence, blame) to prejudice (emotional endorsement) fear, anger, resentment, distaste, disgust) to discrimination (avoidance, withheld work and housing, coercion).", topic: "Definition & structure" },
    { question: "State the prejudice finding and the literature gap that accompanies it.", answer: "THE FINDING: prejudice; the emotional component (fear, hostility, distaste). PREDICTS DISCRIMINATION MORE STRONGLY THAN STEREOTYPES DO; the emotional layer, not the cognitive shorthand, is the behavioural engine. THE GAP: apart from the fear-of-violence literature, almost nothing has been published on emotional reactions to people with mental illness; the research effort went to knowledge and stereotypes, the weaker predictors. THE CONSEQUENCE: information campaigns alone change little; the target must be the emotional attitude, and contact (which works on emotion directly) outperforms instruction.", topic: "The evidence" },
    { question: "Recite the social-distance critique's five failings and its verdict sentence.", answer: "THE FIVE FAILINGS: (1) hypotheticals rather than real situations; students and the public asked about imagined neighbours and colleagues; (2) 'what normal people say': the actual experiences of the ill themselves never explored; (3) attitudinal statements assumed congruent with behaviour without ever measuring the behaviour; (4) emotions and context neglected; (5) little intervention guidance produced. THE VERDICT: 'in short, most work on stigma has been beside the point.' THE CORRECTIVE: the discrimination actually experienced; the VIEW surveys of service users' actual experiences (employment, housing, relationships, healthcare rejection), and the reframe that makes behaviour the target.", topic: "The critique" },
    { question: "Give the Southern-Indian findings exactly: the three concerns, the two higher-stigma groups, and the divorced woman's position.", answer: "THE THREE MAIN CONCERNS of people with mental illness: effects on MARITAL PROSPECTS, fear of REJECTION BY NEIGHBOURS, and the need to HIDE THE CONDITION. THE TWO HIGHER-STIGMA GROUPS: women and younger patients. THE DIVORCED WOMAN'S COMPOUNDED POSITION: divorce sometimes related to HEREDITY FEARS (the illness blamed for the marriage's failure, the heredity then blamed again for the next), NO FINANCIAL SUPPORT from former husbands, and the ADDITIONAL STIGMA OF SEPARATION; the compounded disadvantage the clinician treats as a clinical variable, exactly as the note instructs.", topic: "Southern India" },
    { question: "Ethiopia's four figures, and Japan's shame-logic with the renaming, both terms, the 20% figure.", answer: "ETHIOPIA (rural, Shibre et al.): 75% of families of schizophrenia and mood-disorder patients stigmatised; 37% concealing the illness; 65% preferring prayer as treatment; the general population judging schizophrenia MORE SEVERE THAN MENTAL RETARDATION. JAPAN'S SHAME-LOGIC: mental illness read as LOSS OF CONTROL, NOT SUBJECT TO WILLPOWER; producing shame; teachers' poor recognition of schizophrenia's features, the general profile paralleling Western countries with GREATER SOCIAL REJECTION. THE RENAMING: after a decade of family-organisation pressure (Zenkaren), SEISHI BUNTETSU BYO (split-mind disorder, violating culturally-valued personal autonomy) became TOGO SHICCHO SHO (loss-of-co-ordination disorder); only 20% of patients had been told their diagnosis; the new term is less stigmatising and more openly discussed: terminology itself an anti-stigma instrument.", topic: "Global patterns" },
    { question: "The Bali-Japan contrast and the Islamic-community data, and the cautionary lesson each carries.", answer: "BALI vs JAPAN: schizophrenia viewed LESS favourably in Japan; DEPRESSION and OCD LESS ACCEPTABLE in Bali: the disorder-specificity finding cautioning against cultural generalisation: cultures are not uniformly more or less stigmatising, they stigmatise different disorders differently. ISLAMIC COMMUNITIES: stigma NO LESS than elsewhere (despite earlier suggestions otherwise); Morocco's families: 76% with no knowledge of the illness, 80% calling it chronic, 48% handicapping, 39% incurable, 25% sorcery-linked, and hard lives; the RELIGIOUS AUTHORITY TURNING (the leader's stance decisive); and CONTACT'S FAILURE where behaviour threatens the social fabric: the lesson that contact interventions must reckon with the community's own coherence, not only the individual's attitude.", topic: "Global patterns" },
    { question: "State the five universal conclusions, with the exact phrase for mental illness's rank among compared conditions.", answer: "(1) No known country, society or culture considers its mentally ill as of equal value and acceptability: the finding every comparative study reproduced. (2) The information quality is POOR, few comparative, few longitudinal studies. (3) There are CLEAR LINKS between popular understandings, help-seeking and disclosure. The causal hinge the clinic works on. (4) SHAME AND BLAME are common everywhere studied, to differing extents, with mental illness 'the ULTIMATE STIGMA' among compared conditions. (5) REJECTION AND AVOIDANCE appear universal.", topic: "The conclusions" },
    { question: "The two intervention ingredients, the three national campaigns with their evidence, and the reframe's four advantages.", answer: "THE INGREDIENTS: (i) DIRECT SOCIAL CONTACT with people with mental illness at the local level; (ii) SOCIAL MARKETING TECHNIQUES at the national level. THE CAMPAIGNS: New Zealand's LIKE MINDS, LIKE MINE; ten years, internationally renowned, transforming public engagement; Scotland's SEE ME; Australia's BEYONDBLUE: the depression-knowledge initiative with state-by-state evaluation showing improved recognition, help-seeking and treatment acceptance where the programme ran; (England's changing-minds, the Royal College's follow-up, showing attitude change.) THE REFRAME'S FOUR ADVANTAGES (from stigma to DISCRIMINATION: (1) attention moves from attitudes to ACTUAL BEHAVIOUR) not whether an employer would hire, but whether he does; (2) interventions become TESTABLE at the behaviour level without waiting for knowledge or feelings to change; (3) the mentally ill claim ANTI-DISCRIMINATION LAW'S PARITY with physical disability; (4) the focus shifts from the stigmatised to the STIGMATISER: human rights, injustice, and discrimination as experienced.", topic: "Interventions & reframe" },
  ],
  faqs: [
    { question: "What exactly is stigma?", answer: "Originally a physical mark of shame: the slave's tattoo (the Greek stizein, the pricked dot); now the whole process by which mental illness discredits: ignorance (the wrong ideas), prejudice (the negative feelings) and discrimination (the rejecting behaviour). The behavioural part is the one that damages lives, and the one modern work targets." },
    { question: "What are idioms of distress?", answer: "The culture's language for suffering: somatisation, possession, nerves, 'gas'; the somatic front door through which distress so often presents. The psychopathological form is constant across cultures while the content varies; the clinician's craft is to work through the idiom (elicit it, explain in it) while diagnosing the disorder behind it by its form, never to dismiss the idiom as ignorance." },
    { question: "Is stigma worse in India than elsewhere?", answer: "The honest comparative answer: no known culture accepts its mentally ill as equals. India's specific patterns (marriage-alliance damage, women's compounded burden, concealment) differ in shape from Japan's shame-logic or Ethiopia's concealment and prayer preference, not in underlying force; the shame-and-blame core is universal." },
    { question: "Should I tell the patient the diagnosis?", answer: "Yes, with care. The Japanese experience (only 20% told, before the renaming) shows the cost of silence: no treatment partnership without naming. The destigmatising explanation ('a treatable condition of the brain's chemistry, like diabetes of the pancreas') makes the name workable; the wider circle's disclosure is planned selectively with the family, not conceded to silence." },
    { question: "Do anti-stigma campaigns actually work?", answer: "Yes, where they use the two proven ingredients: direct contact with recovered people (local) and sustained social marketing (national). New Zealand's decade-long like minds like mine, Scotland's see me and Australia's evaluated beyondblue changed attitudes and behaviour; leaflets alone do not, because emotional prejudice, not ignorance, drives the discrimination." },
    { question: "Why do people fear the mentally ill?", answer: "Mostly the amplified rare event: media homicide coverage builds the dangerousness stereotype against the epidemiological reality; the forensic literature's 99.97% annual non-violence of schizophrenia. And the chapter's finding completes the answer: fear (the emotional prejudice) predicts rejection better than the wrong ideas do, which is why correcting facts alone changes so little." },
    { question: "What is discrimination rather than stigma?", answer: "The behaviour reframing: not the attitude but the act; the job refused, the marriage rejected, the house denied. Naming it discrimination makes intervention testable, invokes anti-discrimination law, and moves the spotlight from the sufferer to the discriminator: human rights, injustice, and the experience as lived." },
    { question: "Can the family hide it?", answer: "They try (over a third of Ethiopian families concealed the illness, and the Indian concealment patterns match) but concealment delays treatment and taxes the family. The clinical alternative is selective, dignified disclosure with psychoeducation of the circle that matters: 'a treatable medical condition, not a family stain'." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Sartorius N & Schulze H — Reducing the Stigma of Mental Illness: the WPA global programme (2005)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 1.2 (Thornicroft, Brohan & Kassam) — the source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Goffman E — Stigma: Notes on the Management of Spoiled Identity: the founding analysis (1963)" },
      { source: "Gilman SL — Seeing the Insane; Difference and Pathology: the visual-stereotype history (1982, 1985)" },
      { source: "Thornicroft G — Shunned: Discrimination against People with Mental Illness: the discrimination reframing (2006)" },
      { source: "Corrigan P — On the Stigma of Mental Illness: the cascade and the intervention literature (2005)" },
    ],
    trials: [
      { source: "Crisp A, Gelder M, Goddard E et al. — the stigmatization of people with mental illnesses: the changing-minds follow-up (World Psychiatry 4:106-13, 2005)" },
      { source: "Shibre T et al. — perception of stigma among family members of people with schizophrenia and mood disorders: rural Ethiopia (Soc Psychiatry Psychiatr Epidemiol 36:299-303, 2001)" },
      { source: "The Southern India study (the chapter's reference 58) — the marital-prospects, women's-stigma and concealment findings" },
      { source: "The Japanese renaming literature (the chapter's references 66-70) — Zenkaren, the terminology change from seishi buntetsu byo to togo shiccho sho and its effects" },
    ],
    reviews: [
      { source: "Link BG & Phelan JC — Conceptualizing stigma (Annu Rev Sociol 27:363-85, 2001): the conceptual structure" },
      { source: "Angermeyer MC & Matschinger H — the stigma process: labelling, stereotype, discrimination (Soc Psychiatry Psychiatr Epidemiol 40:391-5, 2005)" },
      { source: "Thornicroft G, Rose D & Kassam A — Stigma: ignorance, prejudice or discrimination? (Br J Psychiatry 190:192-3, 2007): the triad's own synthesis" },
      { source: "Vaughn G — like minds, like mine (New Zealand, 2004); Dunion L & Gordon L — Scotland's 'see me' (2005); Jorm AF et al. — beyondblue's evaluation (2005): the campaign evidence" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, 24x7, in multiple Indian languages" },
      { source: "The destigmatising explanation script — 'a treatable condition of the brain's chemistry, like diabetes of the pancreas': the disclosure instrument this course hands to every clinician and family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what stigma is, why it is not your fault, what actually reduces it, and how the clinic protects you.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The mark, the triad, the global findings, the two ingredients and the reframe.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "37 min",
      description: "Everything: the disclosure craft, the transcultural disciplines, the advocacy and certification practice, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The mark, the triad, the global picture.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define stigma from stizein to Goffman and recite the ignorance-prejudice-discrimination triad with Corrigan's cascade." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The stigma engine and the pathway chains; the stizein-to-Shunned history.", sectionIds: ["mechanism", "pathways", "timeline"], checkpoint: "You can walk mark to stereotype to prejudice to discrimination, and say why emotions beat cognition as the predictor." },
    { number: 3, title: "Clinical Practice", description: "The stigma assessment, the transcultural disciplines, the two-ingredient management.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the stigma assessment, apply the form-content discipline to an idiom, and state the two ingredients and the reframe's four advantages cold." },
    { number: 4, title: "Indian Context", description: "The marriage calendar, the language micro-intervention, the legal-parity tools, the decision path.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the confidentiality, marriage and naming scripts, and route the discrimination case to advocacy and certification." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the triad question, the Japan renaming question and the five-conclusions question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 1.2 (Thornicroft, Brohan & Kassam) — the source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Goffman E — Stigma: Notes on the Management of Spoiled Identity (the founding analysis); with Gilman SL — Seeing the Insane and Difference and Pathology (the visual-stereotype history)", sourceType: "textbook", year: "1963 / 1982-1985", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Crisp A, Gelder M, Goddard E et al. — the stigmatization of people with mental illnesses: the changing-minds follow-up (World Psychiatry 4:106-13)", sourceType: "primary", year: "2005", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Link BG & Phelan JC — Conceptualizing stigma (Annu Rev Sociol 27:363-85): the conceptual structure", sourceType: "review", year: "2001", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Angermeyer MC & Matschinger H — the stigma process: labelling, stereotype, discrimination (Soc Psychiatry Psychiatr Epidemiol 40:391-5)", sourceType: "primary", year: "2005", dateReviewed: "2026-09-30" },
    { id: "S6", source: "The campaign evidence — Vaughn G (like minds, like mine, New Zealand); Dunion L & Gordon L (Scotland's see me); Jorm AF et al. (beyondblue's evaluation)", sourceType: "primary", year: "2004-2005", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Shibre T et al. — perception of stigma among family members of people with schizophrenia and mood disorders: rural Ethiopia (Soc Psychiatry Psychiatr Epidemiol 36:299-303)", sourceType: "primary", year: "2001", dateReviewed: "2026-09-30" },
    { id: "S8", source: "The Southern India study (the chapter's reference 58) — the marital-prospects, women's-stigma and concealment findings", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Sartorius N & Schulze H — Reducing the Stigma of Mental Illness: the WPA global programme", sourceType: "guideline", year: "2005", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Thornicroft G — Shunned: Discrimination against People with Mental Illness; with Rose D & Kassam A — Stigma: ignorance, prejudice or discrimination? (Br J Psychiatry 190:192-3): the discrimination reframe and the triad's own synthesis", sourceType: "textbook", year: "2006-2007", dateReviewed: "2026-09-30" },
    { id: "S11", source: "Corrigan P — On the Stigma of Mental Illness: the stereotype-prejudice-discrimination cascade and the intervention literature", sourceType: "textbook", year: "2005", dateReviewed: "2026-09-30" },
    { id: "S12", source: "The Japanese renaming literature (the chapter's references 66-70) — Zenkaren, the terminology change from seishi buntetsu byo to togo shiccho sho and its effects on disclosure", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S13", source: "The Indian tier — the chapter's Southern-Indian findings as the clinical brief; the RPwD Act's entitlements, the IRDAI mental-health-parity mandate, Tele-MANAS, the SHG-AA-NA and ARDSI/NAMI-India models: practice-pattern description from the note's India lens, context honestly labelled", sourceType: "review", year: "2026 context", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The etymology and the founding definition: stigma from the Greek stizein (to prick); the indelible dot tattooed on slaves and vagabonds, the visible mark of inferior status, the term migrating into medicine; Goffman's Stigma (1963): the attribute deeply discrediting, reducing the bearer 'from a whole and usual person to a tainted, discounted one'; Gilman's Seeing the Insane (1982) and Difference and Pathology (1985) documenting the visual stereotypes of madness across centuries.", grade: "established", sources: ["S1", "S2"] },
    { text: "The working structure: the knowledge-attitude-behaviour triad in its British psychiatric synthesis (ignorance (problems of knowledge), prejudice (problems of attitude), discrimination (problems of behaviour)) with Corrigan's parallel cascade: stereotypes (the cognitive shorthand (dangerousness, incompetence, blame), prejudice (the emotional endorsement) fear, anger, resentment, distaste, disgust), discrimination (the behavioural consequence, avoidance, withheld work and housing, coercion).", grade: "established", sources: ["S1", "S10", "S11"] },
    { text: "The prejudice finding: prejudice; the emotional component (fear, hostility, distaste): predicts discrimination more strongly than stereotypes do; the public's disorder stereotypes led by dangerousness (the most researched, the media-amplified, the homicide-coverage distortion); and the literature gap: apart from the fear-of-violence literature, almost nothing published on emotional reactions to the mentally ill.", grade: "established", sources: ["S1", "S5", "S10"] },
    { text: "The methodological critique of social-distance research: students and the public asked about hypothetical neighbours and colleagues; 'what normal people say' without exploring the actual experiences of the ill; attitudinal statements assumed congruent with behaviour without measuring it; hypotheticals rather than real situations; emotions and context neglected: 'in short, most work on stigma has been beside the point'; the corrective being the discrimination actually experienced (the VIEW surveys of service users' actual experiences, employment, housing, relationships, healthcare rejection).", grade: "established", sources: ["S1", "S10"] },
    { text: "The Southern-Indian findings: people with mental illness's main concerns; effects on marital prospects, fear of rejection by neighbours, and the need to hide the condition; higher stigma among women and younger patients; the divorced woman's compounded position: divorce sometimes related to heredity fears, no financial support from former husbands, the additional stigma of separation.", grade: "supported", sources: ["S1", "S8"] },
    { text: "The Ethiopian findings: 75% of families of schizophrenia and mood-disorder patients stigmatised; 37% concealing the illness; 65% preferring prayer as treatment; the general population judging schizophrenia as more severe than mental retardation.", grade: "established", sources: ["S7", "S1"] },
    { text: "The Japanese findings: mental illness read as loss of control, not subject to willpower, producing shame; teachers' poor recognition of schizophrenia's features with a Western-parallel profile and greater social rejection; the renaming after a decade of Zenkaren family-organisation pressure: seishi buntetsu byo (split-mind disorder, violating culturally-valued personal autonomy) becoming togo shiccho sho (loss-of-co-ordination disorder); only 20% of patients told their diagnosis; the new term less stigmatising and more openly discussed.", grade: "established", sources: ["S1", "S12"] },
    { text: "The Bali-Japan contrast and the Islamic-community data: schizophrenia viewed less favourably in Japan while depression and OCD are less acceptable in Bali; disorder-specificity cautioning against cultural generalisation; stigma in Islamic communities no less than elsewhere despite earlier suggestions; Morocco's families (76% no knowledge, 80% chronic, 48% handicapping, 39% incurable, 25% sorcery-linked) with hard lives; the religious-authority turning; contact failing to improve attitudes where behaviour threatens the social fabric.", grade: "supported", sources: ["S1"] },
    { text: "The five universal conclusions: (1) no known country, society or culture considers its mentally ill as of equal value and acceptability; (2) the information quality is poor, few comparative, few longitudinal studies; (3) clear links between popular understandings, help-seeking and disclosure; (4) shame and blame common everywhere studied, to differing extents, with mental illness 'the ultimate stigma' among compared conditions; (5) rejection and avoidance appear universal.", grade: "established", sources: ["S1", "S9"] },
    { text: "The interventions: the two active ingredients; direct social contact with people with mental illness at the local level and social marketing techniques at the national level; the campaign evidence. New Zealand's like minds, like mine (ten years, internationally renowned, transforming public engagement), Scotland's see me, Australia's beyondblue (state-by-state evaluation: improved recognition, help-seeking and treatment acceptance where the programme ran), England's changing-minds follow-up showing attitude change; information leaflets alone do not work.", grade: "established", sources: ["S1", "S6", "S9"] },
    { text: "The reframe, from stigma to discrimination, with four advantages: attention moves from attitudes to actual behaviour (not whether an employer would hire, but whether he does); interventions become testable at the behaviour level; the mentally ill claim anti-discrimination law's parity with physical disability; the focus shifts from the stigmatised to the stigmatiser: human rights, injustice, and discrimination as experienced.", grade: "established", sources: ["S10", "S1"] },
    { text: "The transcultural clinical layer (the 1.3.2 companion): the form-content discipline; psychopathological forms constant with culturally-variable contents; the idioms of distress: somatisation, possession, nerves, 'gas' (the somatic front door); the culture-bound caution: diagnosing what the culture normalises; and the help-seeking pathway's cultural shaping: the traditional-healer first contact.", grade: "supported", sources: ["S1"] },
    { text: "The Indian layer: the chapter's Southern-Indian findings as the domestic clinical brief (marriage-alliance dynamics, women's compounded stigma, concealment, the family's disclosure decisions); the language micro-intervention (pagal, paagalpan, unmad carry their load; dignified medical terms; 'mann ki bimari' positioned carefully); the contact principle as the strongest lever (the SHG-AA-NA architecture; families to families. ARDSI, NAMI-India; school and college programmes); the legal-parity tools (the RPwD Act's disability certificate and reservation; the IRDAI mental-health-parity mandate); the Tele-MANAS-style national layer as the beyondblue-equivalent: practice-pattern description, context honestly labelled.", grade: "supported", sources: ["S1", "S13"] },
  ],
};
