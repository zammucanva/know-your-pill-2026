import type { PsychiatryCourse } from "./types";

/**
 * FAMILY THERAPY — canonical Psychiatry course
 * (migration batch 8, Group P — treatment methods).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/family-therapy.md — untouched foundation),
 * re-researched against the Brown-Birley-Wing and Vaughn-Leff
 * expressed-emotion lineage, the Leff-Kuipers and Falloon
 * reduction trials, the Minuchin-Haley-Milan-Bowen canon and
 * the Chennai/SCARF-Vellore-Goa community-trial tier, with
 * per-claim provenance. A CONCEPT course: the discipline that
 * treats the relationship system around the patient — circular
 * causality, the EE arithmetic honestly stated, the schools in
 * one breath, and the four-rung ladder every clinician can run.
 *
 * Drug routes: NONE — the note assigns no drug a clinical role;
 * the caregiver-depression SSRI tier has KYP lessons but belongs
 * to the Depressive Disorders course (recorded in contentGaps,
 * never invented here).
 */
export const familyTherapyCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "family-therapy",
  title: "Family Therapy",
  shortName: "Family therapy",
  kind: "concept",
  category: "Treatment Methods",
  groupLetter: "P",
  groupName: "Treatment methods",
  learningPath: ["Psychiatry", "Treatment Methods", "Family Therapy"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The relationship system around the patient — circular causality, not family blame",

  summary:
    "Family therapy treats the relationship system around the patient rather than the patient alone. This course covers circular causality, expressed emotion, the major schools, and a four-rung ladder of family work any clinician can run.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Make the systems shift: from linear causality ('the family caused the illness') to circular causality (the pattern maintains and is maintained by the illness) — and hold the de-blame discipline that keeps the two apart.",
    "Use the structural vocabulary on Indian joint-family material: boundaries, enmeshment, disengagement, subsystems, hierarchy, triangulation.",
    "Describe the major schools in one breath each: structural (Minuchin), strategic (Haley), Milan systemic, transgenerational (Bowen and the genogram), behavioural couples/family work, and psychoeducation-based family intervention (Falloon, Anderson-Hogarty).",
    "Define expressed emotion (EE) and state its relapse arithmetic in schizophrenia — with the honest Indian interpretation of the cross-cultural findings.",
    "State the evidence tiers: family intervention in psychosis (guideline-recommended, relapse roughly halved), family-based treatment of adolescent anorexia (first-line), behavioural parent training for ADHD and conduct problems (first-line), couples therapy for depression with relationship distress.",
    "Run the four-rung ladder every clinician can use without a referral: single-session family meeting, structured family psychoeducation, formal family therapy, the family's own institutions.",
    "Work the Indian realities: the NIMHANS family-ward tradition, the joint family as resource and risk, caregiver burden and its organisations, wedding-alliance secrecy, the blaming-family trap and its antidote.",
  ],
  quickFacts: [
    { label: "The shift", value: "Circular, not linear, causality", detail: "What does each person's response do to the next person's response, and back — the pattern maintains and is maintained by the illness; the family is the disease's climate, never its cause" },
    { label: "The arithmetic", value: "High EE: relapse 2–3×", detail: "Schizophrenia in high-EE households relapses roughly two to three times as often over nine months to two years, amplified by face-to-face contact hours; multi-session practical family intervention roughly halves it" },
    { label: "The instrument", value: "Critical comments, hostility, over-involvement", detail: "Expressed emotion is the measured quality of a household's emotional speech about the patient — the Camberwell relative's interview, named here and never reproduced" },
    { label: "The anatomy", value: "Boundaries, hierarchy, triangulation", detail: "Enmeshment (diffuse boundaries) and disengagement (rigid boundaries) bracket the healthy semi-permeable middle; the cross-generational coalition makes a child the symptom-bearer — the pressure-relief valve with a casualty" },
    { label: "The schools", value: "Six in one breath", detail: "Structural (Minuchin), strategic (Haley), Milan systemic (circular questioning), transgenerational (Bowen and the genogram), behavioural couples/family work, psychoeducation-based family intervention (Falloon, Anderson-Hogarty)" },
    { label: "The first-line packages", value: "Psychosis FI, FBT, parent training", detail: "Family intervention in psychosis (9-plus months of sessions, relapse halved); family-based treatment first-line in adolescent anorexia (weight restoration → handover → adolescent issues); behavioural parent training the first-line of child behavioural management" },
    { label: "The ladder", value: "Four rungs, the bottom ones universal", detail: "Single-session family meeting (any clinician, 30–45 minutes) → structured psychoeducation (6–12 sessions) → formal family therapy (specialist, usually metro) → the family's own institutions (SCARF/ARDSI/Al-Anon circles)" },
    { label: "The India facts", value: "The family IS the system of care", detail: "The NIMHANS family ward admits the patient WITH the caregiver and trains the caregiver directly; the Chennai/SCARF and Vellore trials showed trained lay workers can deliver the relapse reduction — the treatment survives the absence of psychiatrists" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The EE arithmetic's home ground — the household as a dose-level variable in relapse, and family intervention among the most replicated results in the illness's management" },
    { label: "Anorexia Nervosa", type: "condition", href: "/psychiatry/anorexia-nervosa/", note: "Family-based treatment (the Maudsley/FBT model) is first-line in adolescent anorexia — parents empowered as the refeeding team" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "Behavioural parent training: the non-pharmacological first-line, the parent as the patient-who-delivers" },
    { label: "Conduct Disorders", type: "condition", href: "/psychiatry/conduct-disorder/", note: "The parent-training tier again — the family work that travels with the childhood behavioural disorders" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Family-focused therapy (Miklowitz) — the adjacent strong tier of family intervention evidence" },
    { label: "Managing Dementia", type: "condition", href: "/psychiatry/dementia-management/", note: "Caregiver psychoeducation for dementia and chronic illness — burden reduction, delayed institutionalisation, BPSD management" },
    { label: "Couples Therapy", type: "condition", href: "/psychiatry/couples-therapy/", note: "The sister discipline — the couples stream (behavioural and emotionally-focused) carrying the evidence for depression with relationship distress" },
    { label: "Group Therapy", type: "condition", href: "/psychiatry/group-therapy/", note: "Rung 4's engine — the SHG-logic caregiver circles and multi-family groups on which India's family-work hopes realistically scale" },
    { label: "Psychiatric Rehabilitation", type: "condition", href: "/psychiatry/psychiatric-rehabilitation/", note: "The community-delivery frame — home-based family intervention by trained lay workers as the rehabilitation tier's Indian evidence" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The Mental Healthcare Act 2017 consent rule — the ethical spine of every multi-stakeholder family session" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The mechanism of family therapy is the mechanism of the room, not of the receptor. The founding shift: medicine asks linear questions (what agent caused this disease?), and the family teaches the circular one — what does each person's response do to the next person's response, and back? A father criticises because the son lies idle; the son withdraws further because of the criticism; the withdrawal terrifies the mother, who scolds the father and over-protects the son; the son's improvement would dissolve several purposes at once — so the illness becomes the household's solution to its own tension while nobody in it is insincere. That is circular causality, and it is emphatically NOT the claim that families cause schizophrenia: the genetic and neurodevelopmental causation stands; what the systems lens adds is the maintenance layer — the pattern is the disease's climate, not its origin, and climates are treatable even when origins are not. The measurable edge of the climate is expressed emotion (EE): the density of critical comments, hostility and emotional over-involvement in a standard relative's interview (the Camberwell instrument — named here, never reproduced). High-EE households with schizophrenia relapse roughly two to three times as often over nine months to two years, the risk multiplied by face-to-face contact hours; and the reduction trials (Leff and Kuipers, Hogarty, Falloon and colleagues, replicated widely) converge on the standing finding: multi-session family intervention that is practical in method and includes communication and problem-solving practice roughly halves one-to-two-year relapse — while lowering caregiver depression, the health of the only workforce the patient has. The Indian rendering is the deepest layer: the NIMHANS family ward builds the caregiver into the admission itself, and the Chennai/SCARF and Vellore community trials showed home-based family intervention by supervised trained lay workers delivering comparable relapse and disability gains — the treatment survives the absence of psychiatrists, which is why the bottom rungs of the ladder, not the referral, are the Indian programme.",
    steps: [
      "The linear-to-circular shift: the question becomes what each person's response does to the next person's response, and back — the pattern, not a culprit, maintains the illness.",
      "The identified-patient audit: who was sent to you, by whom, and what changes in that house if this person gets well — 'nothing much' means individual care; 'everything' means the symptom will defend itself.",
      "The anatomy: subsystems separated by boundaries (clear ones semi-permeable); enmeshment and disengagement as the two failure shapes; hierarchy pathologies both ways; triangulation as the pressure-relief valve with a child as casualty.",
      "The climate measured: EE as the density of critical comments, hostility and emotional over-involvement in a standard relative's interview — the Camberwell instrument; high EE carries a two-to-threefold relapse risk over nine months to two years, multiplied by face-to-face contact hours.",
      "The honest boundary: NOT family causation — the genetic and neurodevelopmental causation of psychosis stands; the systems lens contributes the maintenance layer only, and the de-blame discipline protects families from the discredited claim's residue.",
      "The intervention logic: duration (more than a few sessions; 9-plus months in the classic packages) plus skills practice (communication drills and structured problem-solving) — the EE lowered, the relapse roughly halved, the caregiver depression lowered in the same motion.",
      "The Indian rendering: the NIMHANS family ward (patient admitted WITH the caregiver, treatment training the caregiver directly) and the lay-worker community trials — the bottom rungs universal by design.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala (the threat-read)", role: "Critical and hostile speech is processed as social threat — the alarm circuitry that keeps the household's arousal lit; the EE-as-stress-metric reading's neural face.", grade: "supported" },
    { id: "hypothalamic-axis", name: "Hypothalamic–pituitary–adrenal axis (the stress engine room)", role: "The measurable stress machinery that a hostile or anxiously over-managed climate keeps running — the bodily route by which household weather is thought to reach the illness's threshold.", grade: "supported" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the regulation seat)", role: "The planning and regulation that arousal floods — in the patient under criticism and in the couple mid-quarrel; the executive capacity the communication drills are designed to de-heat.", grade: "proposed" },
    { id: "hippocampus", name: "Hippocampal formation (the stress-vulnerability terrain)", role: "The chronic-stress exposure terrain of relapse vulnerability — the structure whose function a sustained hostile climate is hypothesised to tax; the caregiver's own depression is read on the same terrain.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Noradrenaline", symbol: "NE", role: "The alarm chemistry of the critical confrontation — the arousal that keeps the high-EE household's climate lit; the stress-metric read in the body.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The caregiver depression's chemistry — the treatable disorder in the workforce that carries the patient; treating it is family work by pharmacological means.", grade: "supported", drugConnection: "The SSRI tier (sertraline, escitalopram and relatives) has KYP lessons — taught in the Depressive Disorders course; this course assigns no drug route of its own." },
    { name: "Dopamine", symbol: "DA", role: "The stress-sensitivity terrain of psychosis itself — the diathesis the household climate is hypothesised to moderate; the family affects the weather around the seed, never the seed.", grade: "proposed" },
    { name: "Oxytocin", symbol: "OT", role: "The affiliation chemistry the systemic work recruits — the alliance, the warmth, the trusted appointment; the biology of the warm structured involvement the EE trials found protective.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "circular-causality-loop",
      name: "The circular loop (criticism → withdrawal → over-protection)",
      steps: [
        { label: "The father criticises", detail: "Fear wearing a rough coat: the son lies idle, and the father's anxiety exits as critical comments" },
        { label: "The son withdraws", detail: "The criticism confirms the withdrawal — each response training the next" },
        { label: "The mother rescues", detail: "The withdrawal terrifies her: she scolds the father and over-protects the son, feeding the pattern she is calming" },
        { label: "The symptom settles the house", detail: "The son's illness has become the household's solution to its own tension — nobody insincere, everybody anxious" },
        { label: "The loop tightens into relapse", detail: "The anxiety organised into the pattern psychiatry measures as high expressed emotion — the climate the illness relapses in" },
      ],
      clinicalManifestation: "The young man with schizophrenia who relapses each time his father criticises him and recovers each time his mother quietly over-protects him.",
      grade: "supported",
    },
    {
      id: "ee-relapse-pathway",
      name: "The EE pathway (measured speech to relapse to intervention)",
      steps: [
        { label: "The household's speech measured", detail: "Critical comments, hostility and emotional over-involvement — the Camberwell relative's interview's three components" },
        { label: "High EE meets contact hours", detail: "The effect amplified by the quantity of face-to-face contact — the logic that first produced the since-discarded 'reduce contact' advice" },
        { label: "The climate acts", detail: "Relapse roughly two to three times as often over nine months to two years in high-EE schizophrenia households" },
        { label: "The intervention reverses it", detail: "Multi-session, practical family intervention with communication and problem-solving practice — the EE itself lowered" },
        { label: "The standing finding", detail: "One-to-two-year relapse roughly halved — the reason every guideline from NICE onward recommends it" },
      ],
      clinicalManifestation: "The psychosis household whose relapse rate falls by half when the criticism reflex is replaced by the relapse drill — the most replicated family finding in psychiatry.",
      grade: "established",
    },
    {
      id: "triangulation-pathway",
      name: "The triangulation pathway (couple conflict to the child's symptom)",
      steps: [
        { label: "The couple channel jams", detail: "The direct couple channel becomes unusable — the tension must route somewhere" },
        { label: "The third party recruited", detail: "Most commonly a child: the cross-generational coalition or the messenger role" },
        { label: "The symptom earns the appointment", detail: "School refusal, abdominal pain, fainting on school mornings, tics, self-harm — the presentation that finally brings the family in" },
        { label: "The migration rule", detail: "Treat only the child and the symptom migrates (school refusal becoming abdominal pain); treat the system and it resolves" },
      ],
      clinicalManifestation: "The fourteen-year-old who faints on every exam morning and is, unknown to everyone, holding a parental marriage together by the symptoms nobody wants to be too busy to treat.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "ip-arrival", time: "Day 0", title: "The identified patient arrives", description: "Who was sent, by whom — and the circular pattern already running at home, unexamined; the caregiver's own state visible at the counter if looked for.", phase: "onset" },
    { id: "meeting-one", time: "Session 1 (30–45 minutes)", title: "The single-session family meeting", description: "Two-to-four key members; plain-language illness education; the heredity and marriage questions answered honestly; ONE crisis plan; a closing task — and the de-blame statement in the first minute.", phase: "onset" },
    { id: "psychoeducation-block", time: "Weeks 2–12 (6–12 sessions)", title: "The structured psychoeducation programme", description: "Fixed modules: illness model, medication rationale, early-warning signs and the relapse drill, communication practice replacing the criticism reflex, problem-solving training, caregiver self-care, the crisis card.", phase: "peak" },
    { id: "climate-shift", time: "Months 3–9", title: "The climate changes", description: "Criticism-with-hostility lowered, anxious over-management replaced by warm structured involvement; the caregiver's depression screened and treated; the classic packages run 9-plus months.", phase: "peak" },
    { id: "evidence-window", time: "Months 9–24", title: "The arithmetic's window", description: "The trials' one-to-two-year horizon: relapse roughly halved against routine care — the window over which the finding is measured and the follow-up held.", phase: "duration" },
    { id: "maintenance-era", time: "The long term", title: "The maintained household", description: "Booster sessions as needed; the caregiver circle and the family's own institutions carrying the endurance tier; the anatomy re-drawn whenever the household's cast changes.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The population family work serves is defined by evidence, not preference: every household carrying schizophrenia or another psychosis (the guideline tier — family intervention recommended from NICE onward, relapse roughly halved); adolescent anorexia (family-based treatment first-line); childhood ADHD and conduct problems (behavioural parent training the non-pharmacological first-line); couples where depression and relationship distress are braided (behavioural and emotionally-focused couples therapy carrying the evidence); and the dementia caregiving household (burden reduction, delayed institutionalisation, BPSD management). The honest frame: 'family therapy' the specialist art is scarce everywhere; 'family intervention' the evidence-based package is among the most replicated treatments psychiatry owns.",
    indianPrevalence: "The Indian reality inverts the Western difficulty: where high-income systems must invite families in, the Indian clinician's problem is that the family is already in the room, uncontracted — the de facto multidisciplinary team usually being one psychiatrist plus a family. The NIMHANS family-ward tradition formalised this decades ago: the caregiver stays, and treatment trains the caregiver directly. The Chennai/SCARF and Vellore community trials then exported the Indian finding to the world: home-based family intervention by supervised trained lay workers reduced relapse and re-hospitalisation in schizophrenia, and community-delivered lay counselling in Goa reduced common-disorder burden — the delivery model that seeded WHO community-psychiatry guidance.",
    lifetimeRisk: "Not a risk construct: the household carrying any major mental illness is the population; the clinical question is never whether to do family work but which rung of the ladder to run.",
    genderRatio: "Caregiving falls predominantly on women — detection usually mothers first, the daughters-in-law of the joint system next; the caregiver-economy layer of the Indian tier is largely a women's workload.",
    ageOfOnset: "All ages — the symptom-bearer child at one end, the dementia-caring elder at the other; the rung chosen by the problem, not by the age.",
    indianNotes: "The marriage-alliance reality shapes the presentation itself: concealment pressures drive late presentation, treatment discontinuation at matchmaking time, and family resistance to the diagnosis — the clinician who addresses the alliance question honestly keeps more patients on treatment than one who only escalates the prescription.",
  },
  etiology: [
    { category: "biological", factor: "The illness's own causation stands", details: "Genetic and neurodevelopmental in psychosis, and unaffected by the family's behaviour — the systems lens contributes the maintenance layer only (the climate, never the origin); the de-blame discipline is the clinical form of this fact." },
    { category: "psychological", factor: "The circular pattern itself", details: "Anxiety organising itself into criticism, over-protection or both — nobody behaving badly, everybody behaving anxiously; the high-EE household as fear wearing a rough coat, the household's tension finding its relief valve through a symptom-bearer." },
    { category: "social", factor: "Caregiver burden without respite", details: "The Indian family saving the state a sum no budget could print, priced in the carers' own health, employment and lifespan — the uncontracted multidisciplinary team running on one psychiatrist plus exhausted relatives." },
    { category: "environmental", factor: "Architecture and migration", details: "The urban single-room household reproducing enmeshment by design; the migrant-remittance family managing the patient by phone across a gulf; the single-son care system collapsing under NRI migration; the reverse-flow elder disintegrating in the son's city." },
    { category: "social", factor: "The blame history", details: "The 1970s 'schizophrenogenic parent' doctrine blighted a generation of parents with false guilt — producing the guilt, secrecy and service-avoidance that the explicit first-session de-blame now repairs." },
  ],
  symptomClusters: [
    {
      category: "1. The relapse-pattern household (the high-EE presentation)",
      symptoms: ["Relapses tracking the household's emotional weather — criticism storms and over-protection phases in alternating sequence", "Medication stopped by a relative ('these tablets are addiction') — what looks like non-compliance is unaddressed family fear", "Well in hospital, relapsing home on schedule — the admission that returns the patient to an unchanged pattern", "The 'difficult family' reading dissolving once the fear underneath is addressed"],
    },
    {
      category: "2. The symptom-bearer child (the triangulation presentation)",
      symptoms: ["School refusal, abdominal pain with normal work-up, fainting on school mornings, tics, self-harm", "Symptoms flaring exactly when the parental marriage is in the news — the timing map", "The child not manipulating but holding — the system's pressure-relief valve with a casualty", "Treat only the child and the symptom migrates; see the system and it resolves"],
    },
    {
      category: "3. The caregiver-as-patient presentation",
      symptoms: ["The carer pouring out her own depression at the OPD counter, one year into the psychosis", "One in a few close caregivers of a psychosis or dementia patient running a treatable depression", "Exhaustion, sleeplessness, weepiness, the collapsing endurance of the household's load-bearing wall", "The family-work appointment as the caregiver's likeliest point of entry into care"],
    },
    {
      category: "4. The stuck system",
      symptoms: ["The multi-generation knot and the impossible couple — the direct channel unusable for years", "The elder veto-holder stopping the 'madness medicine' against the prescriber's plan", "The family that cannot convene without a casualty — every meeting producing a patient", "Rungs 1–2 already run and the pattern holding — the specialist tier's indication"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The family assessment",
      code: "Genogram + IP question + EE read + caregiver screen",
      criteria: [
        "The identified-patient audit: who was sent, by whom, and what changes in that house if this person gets well — 'nothing much' closes the audit and individual care proceeds; 'everything' means the system is the patient too.",
        "The genogram across three generations — in India a document the family already keeps (the family tree with its migrations, debts, marriages and illnesses); drawing it together is often the fastest alliance instrument of the first session.",
        "The boundary map: enmeshment, disengagement, the cross-generational coalition, the hierarchy audit — drawn, not diagnosed as villains; the map once visible is negotiable.",
        "The clinical EE read: who criticises, who over-protects, how many face-to-face hours — the criticism-with-hostility and anxious over-management patterns named.",
        "The caregiver screen: the carer assessed as a patient in her own right — mood, sleep, burden — because one in a few runs a treatable depression.",
      ],
      duration: "One consultation for the map; the timing map (when did the symptom start, and what was happening in the house that month) often outperforms the investigation.",
      indianNote: "Two to four key members suffice — whoever holds the medicine, whoever notices relapse first, whoever decides money; the map of the house can be drawn on paper without the house attending.",
    },
    {
      system: "The timing map",
      code: "Onset and course against the household calendar",
      criteria: [
        "The symptom's onset dated against the family's events — the separation made public, the migration, the loss.",
        "The course read against the household's rhythms — school mornings against summer holidays, the matchmaking season against the rest of the year.",
        "The migration rule applied: a symptom that moves when the system is untreated (school refusal becoming abdominal pain) is a system symptom until proven otherwise.",
      ],
      duration: "Minutes at the first consultation — the highest-yield instrument that costs nothing.",
      indianNote: "The exam-season and wedding-season calendars of Indian practice make the timing map unusually legible here — the two calendars that decide both onset and relapse.",
    },
  ],
  severityScales: [
    {
      name: "The EE assessment",
      fullName: "Camberwell expressed-emotion interview (named, not reproduced)",
      measures: "The density of critical comments, hostility and emotional over-involvement in a standard relative's interview — the construct's instrument.",
      ranges: [],
      indianNote: "The Indian replication story is instructive: several Indian samples read low-EE despite high face-to-face contact hours — the joint family diluting one couple's intensity across many carers; the wise reading is a stress-metric, never an Indian-family defect.",
    },
    {
      name: "The four-rung ladder",
      fullName: "Family-work intensity staging",
      measures: "Which tier of family work the household and the local system can run.",
      ranges: [
        { min: 0, max: 0, severity: "Rung 1 — the single-session family meeting", action: "Any clinician, 30–45 minutes, two-to-four key members; plain-language education; the heredity and marriage questions answered honestly; ONE crisis plan; a closing task" },
        { min: 1, max: 1, severity: "Rung 2 — structured family psychoeducation", action: "A trained clinician or counsellor, 6–12 sessions of fixed modules: illness model, medication rationale, early-warning signs and the relapse drill, communication practice, problem-solving training, caregiver self-care, the crisis card" },
        { min: 2, max: 2, severity: "Rung 3 — formal family/systemic therapy", action: "Specialist referral for the stuck system, the symptom-bearer child, the impossible couple, the multi-generation knot; usually metro-only in India — never the precondition for running rungs 1–2" },
        { min: 3, max: 3, severity: "Rung 4 — the family's own institutions", action: "Patient and caregiver groups on the SCARF/ARDSI/bipolar-network model, Al-Anon for the addiction household, SHG-logic caregiver circles — the tier on which India's family-work hopes realistically scale" },
      ],
      indianNote: "The referral fantasy ('family therapy is not available here') should never become the reason a district runs zero family meetings; the bottom rungs are universal by design.",
    },
    {
      name: "The boundary map",
      fullName: "Structural staging of the household",
      measures: "Where each boundary sits between diffuse and rigid.",
      ranges: [
        { min: 0, max: 0, severity: "Enmeshment — diffuse boundaries", action: "The couple subsystem cannot disagree privately; the grandmother arbitrates and the twelve-year-old votes; boundary-making returns the couple's conflict to the couple's room" },
        { min: 1, max: 1, severity: "Clear (semi-permeable) boundaries", action: "Information passes, decisions stay where they belong — the healthy middle the structural work restores and defends" },
        { min: 2, max: 2, severity: "Disengagement — rigid boundaries", action: "A member medically ill for a month before the household registers it; the connection rebuilt deliberately" },
      ],
      indianNote: "Urban single-room households can reproduce enmeshment by architecture — the anatomy drawn fresh for each family, never assumed from its shape.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The 'family caused it' reading (linear causality)", distinguishingFeatures: "The reflexive misreading of circular causality as blame — the residue of the discredited schizophrenogenic-parent doctrine.", keyDifferentiator: "The maintenance-layer language: the family is the disease's climate, not its origin; the genetic and neurodevelopmental causation stands, and the first-session de-blame delivers the correction." },
    { condition: "Malingering in the symptom-bearer child", distinguishingFeatures: "The school-morning faints with normal investigations read as manipulation for school avoidance.", keyDifferentiator: "The timing map: onset the month the separation became public, remission during the summer holidays — the child is holding, not manipulating; the symptom announces what it holds together." },
    { condition: "'Non-compliance'", distinguishingFeatures: "Medication stopped and appointments missed, read as the patient's defiance.", keyDifferentiator: "Unaddressed family fear — the relative who stopped the tablets believing them addiction; the single-session meeting resolves more of these than three extra follow-ups of exhortation to the patient alone." },
    { condition: "Admission as the answer", distinguishingFeatures: "The house that cannot manage, requesting the ward as the treatment.", keyDifferentiator: "Admission that sends the patient home to an unchanged pattern relapses on schedule; the admission plus family sessions is the one that holds." },
    { condition: "Individual-therapy-only planning", distinguishingFeatures: "The competent individual treatment plan built for a system-borne problem.", keyDifferentiator: "The identified-patient audit: when nothing much changes if the person gets well, individual care proceeds; when everything changes, individual-only treatment fights the system's gravity — the symptom defends itself." },
  ],
  management: [
    { category: "psychotherapy", name: "Rung 1 — the single-session family meeting", description: "Any clinician, 30–45 minutes: invite two-to-four key members (whoever holds the medicine, notices relapse first, decides money); conduct the illness education in plain language; answer the heredity and marriage questions honestly; give ONE crisis plan; end with a task — and deliver the de-blame statement in the first minute. Enormous measurable value for one OPD slot.", whenToUse: "Every first presentation of a major mental illness with a family in reach; every 'difficult family' reading; every relapse that tracks the household's weather.", indianContext: "The Indian OPD family is already assembled — the meeting costs one slot and no referral; the DMHP training day and the Tele-MANAS counsellor can be taught to run it in weeks." },
    { category: "psychotherapy", name: "Rung 2 — structured family psychoeducation", description: "A trained clinician or counsellor, 6–12 sessions of fixed modules: the illness model; the medication rationale; early-warning signs and the relapse drill; communication practice replacing the criticism reflex; problem-solving training; caregiver self-care; the crisis card. Delivered with the whole household's map on the table — the rung the psychosis evidence rests on, in its Falloon behavioural and Anderson-Hogarty psychoeducational forms (9-plus months of sessions in the classic packages; relapse roughly halved).", whenToUse: "Schizophrenia and recurrent-mood households; the persistent 'non-compliance' pattern; the caregiver running her own depression.", indianContext: "Home-based delivery by trained lay supervisors is the Indian evidence tier — the Chennai/SCARF and Vellore finding that the treatment survives the absence of psychiatrists." },
    { category: "psychotherapy", name: "The evidence-based packages to order by problem", description: "Family-based treatment (the Maudsley/FBT model) for adolescent anorexia — parents empowered as the refeeding team across three phases (weight restoration, handover, adolescent issues), first-line; behavioural parent training for ADHD and conduct problems — the parent as the patient-who-delivers; couples therapy (behavioural and emotionally-focused) for depression braided with relationship distress; caregiver psychoeducation in dementia and chronic illness — burden reduction, delayed institutionalisation, BPSD management.", whenToUse: "Matched to the index condition — the evidence tiers are condition-specific, and the ordering clinician must know them all.", indianContext: "Each package has its disease-course home in the KYP library (the Anorexia Nervosa, ADHD, Conduct Disorder, Couples Therapy and dementia courses); the family work travels with the illness." },
    { category: "psychotherapy", name: "Rung 3 — formal family/systemic therapy", description: "Specialist referral for the stuck system: the symptom-bearer child, the impossible couple, the multi-generation knot, the cross-generational coalition. The schools' techniques applied by a trained systemic therapist — boundary-making and enactment (Minuchin); directives and the symptom's function (Haley); hypothesising, circular questioning, neutrality and positive connotation (Milan); the genogram and differentiation of self (Bowen).", whenToUse: "When rungs 1–2 have been run and the pattern holds; usually metro-only in India — never the precondition for starting family work.", indianContext: "Formal systemic training is thin and metro-concentrated; the waiting-list period is used for rungs 1–2, never for waiting." },
    { category: "lifestyle", name: "Rung 4 — the family's own institutions", description: "Patient and caregiver groups (the SCARF/ARDSI/bipolar-network model; Al-Anon for the addiction household); SHG-logic caregiver circles; respite options; disability and caregiver-benefit navigation (RPwD Act entitlements).", whenToUse: "From diagnosis onward — the endurance tier on which the professional rungs lean.", indianContext: "The tier India's family-work hopes realistically scale on — the Group Therapy course's circles and the community programmes that already exist in the districts." },
    { category: "lifestyle", name: "The consent contract and the safeguarding spine", description: "Under the Mental Healthcare Act 2017 the adult patient's consent governs disclosure — contracting explicitly who hears what, in which session, is the ethical spine of the work; the caregiver screened and treated as a patient in her own right; the de-blame discipline held at every session's opening.", whenToUse: "From the first family meeting, and at every change in the household's cast.", indianContext: "The Indian collision — the paying, escorting family's claim to information against the competent patient's privacy — is resolved by contracting, never by hierarchy." },
  ],
  safety: {
    redFlags: [
      "The blame trap closing: a family reading the illness as their fault (or being told so) — the guilt-and-secrecy spiral that drives families from services; de-blame explicitly in the first session",
      "The caregiver's own depression: one in a few close caregivers of a psychosis or dementia patient runs a treatable depression — screen them like patients, because they are",
      "Treatment stopped at matchmaking time — the commonest relapse trigger in the Indian calendar; plan the words that protect both the alliance and the medicine before the season",
      "The elder veto-holder stopping the 'madness medicine' — correctable in one session with the education, the relapse record and the elder's own respected role in the drill",
      "A consent collision: the family demanding details the competent adult patient has asked to keep private — under the Mental Healthcare Act 2017 the patient's consent governs disclosure",
      "Admission that sends the patient home to an unchanged pattern — it relapses on schedule; the admission plus family sessions is the one that holds",
    ],
    urgentGuidance:
      "The order of operations: (1) de-blame first — no family leaves the first session believing they caused the illness; (2) screen and treat the caregiver as a patient in her own right; (3) run the single-session family meeting before escalating any 'non-compliance' reading; (4) contract explicitly who hears what, under the Mental Healthcare Act 2017; (5) plan the marriage-alliance conversation before the season, not after the relapse; (6) treat the symptom-bearer child's system, not the child alone — the symptom migrates when the system is missed.",
  },
  drugLinks: [],
  contentGaps: [
    "No pharmacotherapy is this course's route: the note assigns no drug a clinical role in family work — the caregiver-depression SSRI tier (sertraline, escitalopram and relatives) has KYP lessons but belongs to the Depressive Disorders course; the route is never invented here.",
    "The antipsychotic and mood-stabiliser pharmacotherapy that family intervention accompanies lives in the Schizophrenia and Bipolar Disorders courses — referenced, not duplicated.",
    "The EE measurement instrument (the Camberwell Family Interview) is named and never reproduced — no KYP lesson exists and none is implied.",
    "Formal systemic-therapy training (the specialist rung 3) is thin and metro-concentrated in India — this course deliberately teaches the universal rungs instead, and records the scarcity.",
  ],
  patientGuide: {
    whatIsIt:
      "Family therapy treats the pattern around the patient, not just the patient — who worries, who rescues, who is silent, who is sent to the clinic. It is NOT the claim that your family caused the illness: research left that idea behind decades ago. What families genuinely affect is the climate of recovery — like a garden's soil, not the seed's genetics — and the evidence is strong that improving that climate roughly halves the risk of relapse in schizophrenia.",
    whatCausesIt:
      "The illness itself has genetic and developmental roots that no one in the house caused. But symptoms live, breathe and relapse inside households: shouting matches, anxious over-management and long silences each shape the weather the illness recovers in. Everybody in a strained household is behaving anxiously, not badly — the work changes the pattern, not the people.",
    symptoms:
      "Family work is indicated when: relapses track the household's emotional weather; a child's symptoms (school refusal, stomach aches, faints, self-harm) flare exactly when the marriage struggles; or the carer is breaking — low mood, sleeplessness, weeping, exhaustion a year into the illness.",
    treatment:
      "The ladder: a single family meeting (30–45 minutes with two-to-four key people — the medicine-holder, the first relapse-noticer, the money-decider) at which the illness is explained plainly, your questions (including the heredity and marriage ones) are answered honestly, and one crisis plan is written; then, where needed, a structured psychoeducation programme of 6–12 sessions — relapse drills, communication practice, problem-solving; specialist family therapy for the stuck patterns; and the family groups and caregiver circles that carry the long term.",
    selfHelp: [
      "Two to four key people attend — not all fifty: whoever holds the medicine, whoever notices relapse first, whoever decides the money",
      "Learn the early-warning list and the relapse drill — panic shrinks when the plan already exists",
      "Hold one crisis card: who calls whom, which medicine, which ward",
      "Bring the marriage-alliance question to the doctor early — treatment stopped at matchmaking time is the commonest relapse trigger we see",
      "The carer takes her own appointments — carer depression is common and treatable; you are also the patient",
      "Ask for the family programme your district runs — the rungs that carry most of the benefit can run where you live",
    ],
    whenToSeekHelp: [
      "The early-warning signs on your written list appearing — call before the crisis, not after",
      "The carer's own low mood, hopelessness or sleeplessness lasting weeks — an appointment for her, not only for the patient",
      "Any self-harm or talk of dying — same-day contact",
      "Medication stopped by a family elder — one session with the elder changes more than months of exhorting the patient",
    ],
    indianResources: [
      "SCARF-model family programmes and caregiver groups (Chennai and the district chapters)",
      "ARDSI for dementia caregivers; bipolar-caregiver networks; Al-Anon for the addiction household",
      "Tele-MANAS — the national tele-mental-health service for caregiver distress and crisis triage",
      "DMHP district mental-health services — ask for the family psychoeducation programme by name",
      "RPwD Act entitlements — disability benefits and caregiver support navigation",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No dedicated India-specific family-therapy guideline exists; practice runs on the international psychosis tier (family intervention recommended from NICE onward, relapse roughly halved) with family psychoeducation already present in DMHP training materials — and the Mental Healthcare Act 2017 consent rule as the legal spine of every multi-stakeholder session.",
    systemContext: "The family is the system of care, to be designed for, not around: the Indian family conducts detection (usually mothers first), escort, payment, medication supervision, the ward stay (the NIMHANS family-ward tradition: the admitting unit expects the caregiver to stay, and treatment trains the caregiver directly) and long-term custody. Whatever the textbook said, the Indian multidisciplinary team is usually one psychiatrist plus a family — family work in India is not added value; it is the operating system.",
    programmeContext: "The delivery tier: DMHP district services and Tele-MANAS counsellors (rungs 1–2 teachable in weeks); SCARF-model family programmes and caregiver psychoeducation groups; ARDSI and bipolar-caregiver networks; Al-Anon for the addiction household; RPwD Act entitlements navigation.",
    costConsiderations: "The cost gradient is honest and steep in the right direction: rung 1 costs one OPD slot and no referral; rung 2 needs a trained counsellor and 6–12 sessions within existing district programmes; rung 3 (the specialist tier) is metro-concentrated and priced accordingly. Indian family caregiving saves the state a sum no budget could print — and is priced in the carers' own health, employment and lifespan; the practical programme invests where the burden actually falls.",
    culturalConsiderations: "The joint-family gradient: a large household multiplies carers (diluting burnout), watchers (early-warning detection) and mediators — and also multiplies critics, secret-keepers and treatment veto-holders; the work maps the actual lines (who holds the medication key, who signals relapse first, who decides money, who can overrule whom) rather than idealising or demonising the structure. The marriage-alliance reality drives late presentation, treatment discontinuation at matchmaking time and resistance to diagnosis itself. The EE cross-cultural story read honestly: WHO-era studies found some non-Western centres lower than London, the Indian replications ran mixed with several samples low-EE despite high contact hours — a stress-metric, never an Indian-family defect. The migrating patterns — remittance families managing the patient by phone, the single-son system collapsing under NRI migration, the reverse-flow elder, the single-room household reproducing enmeshment by architecture — mean the anatomy is drawn fresh for each family.",
    patientCounselling: [
      "The de-blame script, first minute of the first session: 'Nobody in this house caused this illness — it is a brain illness with genetic and developmental roots. What families affect is the climate of recovery, like a garden's soil, not the seed's genetics — and soil can be improved. That is exactly what we will do together.'",
      "The attendance script: 'We are fifty members in this house — do we all need to come? No: two to four key people — whoever holds the medicine, whoever notices the relapse first, whoever decides the money. The map of the house can be drawn on paper without the house attending.'",
      "The shouting script: 'His father shouts at him — is that why he relapsed? Shouting alone does not cause psychosis, but hostility riding on illness raises relapse risk — and the shouting is usually fear wearing a rough coat. We treat the fear, and the shouting dissolves with it; blaming him will not.'",
      "The admission script: 'Sometimes admission is right — for crisis, adjustment or respite. But an admission that returns her to an unchanged house relapses on schedule; the admission plus family sessions is the one that holds.'",
      "The alliance script: 'The stakes are real and we will plan together what is said, to whom and when — but treatment stopped at matchmaking time is the commonest relapse trigger we see; let us find the words that protect both the alliance and the medicine.'",
      "The carer script: 'You are the treatment team, and teams need care — psychoeducation groups, a relapse drill so that panic shrinks, your own review appointments. Carer depression is common and treatable; you are also my patient today.'",
    ],
  },
  decisionPath: {
    title: "The family already in the room — what to run",
    nodes: [
      {
        id: "start",
        question: "A patient arrives with a family in tow — or a family arrives with a patient. First: the identified-patient audit. Who was sent, by whom, and what changes in that house if this person gets well?",
        branches: [
          { label: "Nothing much changes", next: "individual-path" },
          { label: "The relapse pattern (criticism, over-protection, stops and starts)", next: "ee-gate" },
          { label: "The symptom-bearer child", next: "child-gate" },
          { label: "The caregiver breaking", next: "caregiver-gate" },
        ],
      },
      {
        id: "individual-path",
        question: "The honest answer is 'nothing much'.",
        recommendation: "Proceed with straightforward individual care — the system audit closes; the family kept informed with the patient's consent; the audit re-opened if the pattern announces itself later (a relapse that tracks the household's weather).",
      },
      {
        id: "ee-gate",
        question: "The relapse-pattern household: psychosis or recurrent mood disorder, each episode tracking criticism, over-management or treatment stops.",
        branches: [
          { label: "No family session ever held", next: "rung1-path" },
          { label: "Education given, no skills practice", next: "rung2-path" },
          { label: "Rungs 1–2 run, the pattern holds", next: "rung3-path" },
        ],
      },
      {
        id: "rung1-path",
        question: "Rung 1 — the single-session family meeting.",
        recommendation: "Any clinician, 30–45 minutes: two-to-four key members (the medicine-holder, the first relapse-noticer, the money-decider); plain-language illness education; the heredity and marriage questions answered honestly; ONE crisis plan; a closing task — and the de-blame statement in the first minute.",
      },
      {
        id: "rung2-path",
        question: "Rung 2 — structured family psychoeducation.",
        recommendation: "A trained clinician or counsellor, 6–12 fixed-module sessions: illness model, medication rationale, early-warning signs and the relapse drill, communication practice replacing the criticism reflex, problem-solving training, caregiver self-care, the crisis card — the rung the halving evidence rests on.",
      },
      {
        id: "rung3-path",
        question: "The stuck system after rungs 1–2.",
        recommendation: "Formal family/systemic therapy referral (usually metro-only) — boundary work for the cross-generational coalition, the impossible couple, the multi-generation knot; rungs 1–2 continued meanwhile; the waiting list never a reason to stop family meetings.",
      },
      {
        id: "child-gate",
        question: "The symptom-bearer child: school refusal, abdominal pain, faints, tics or self-harm — flaring when the parental marriage is in the news.",
        branches: [
          { label: "Medical work-up incomplete", next: "medical-clear-path" },
          { label: "Work-up normal, timing positive", next: "triangulation-path" },
        ],
      },
      {
        id: "medical-clear-path",
        question: "The somatic presentation.",
        recommendation: "Complete the medical work-up first (the EEG, the bloods) — then read the timing map against it: onset dated to the family event, remission during the holidays; both the investigations and the pattern, never either alone.",
      },
      {
        id: "triangulation-path",
        question: "The timing map positive: the symptom binds the parental conflict.",
        recommendation: "Treat the system: the couple channel addressed directly; the child returned to the child subsystem (no longer the messenger or the ballot); the symptom explained without blame; brief family sessions alongside. Treat only the child and the symptom migrates — school refusal becoming abdominal pain.",
      },
      {
        id: "caregiver-gate",
        question: "The caregiver at the counter: one year in, pouring out her own depression.",
        branches: [
          { label: "Depression present", next: "caregiver-treat-path" },
          { label: "Burden without depression", next: "caregiver-support-path" },
        ],
      },
      {
        id: "caregiver-treat-path",
        question: "The caregiver as patient.",
        recommendation: "Screened like a patient because she is one: her depression diagnosed and treated in its own right (the antidepressant decision belongs to the Depressive Disorders course); her appointments written, not implied. The same family package that lowers relapse also lowers caregiver depression.",
      },
      {
        id: "caregiver-support-path",
        question: "The burdened but not depressed carer.",
        recommendation: "The endurance tier: caregiver psychoeducation groups (the SCARF model), respite options, RPwD Act entitlements navigation, the caregiver circle on SHG logic — the family's own institutions carrying what the profession cannot staff.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading circular causality as 'the family caused the illness'",
      why: "The reflexive misreading revives the discredited schizophrenogenic-parent doctrine — producing guilt, secrecy and families driven from services, the exact opposite of the systems lens's maintenance-layer claim.",
      correction: "The language disciplined: the pattern is the disease's climate, not its origin; the genetic and neurodevelopmental causation stands; the de-blame statement delivered explicitly in the first session.",
    },
    {
      mistake: "Advising the family to 'reduce contact' as the intervention",
      why: "The historical relic of the contact-hours finding — separating patient and relatives treats the amplifier while leaving the signal (the criticism-with-hostility and anxious over-management) untouched.",
      correction: "The modern target: lower the EE itself — multi-session, practical family intervention with communication and problem-solving practice, the package that roughly halves relapse.",
    },
    {
      mistake: "Treating only the symptom-bearer child",
      why: "The school refusal, the abdominal pain or the faints resolve or migrate — the system that produced the symptom-bearer remains, and the pressure finds a new valve.",
      correction: "The timing map read first (onset with the family event, remission in the holidays); the system treated: the couple channel addressed, the child returned to the child subsystem, the symptom explained without blame.",
    },
    {
      mistake: "Missing the caregiver's own depression",
      why: "The carer is treated as an informant, not a patient — although one in a few close caregivers of a psychosis or dementia patient runs a treatable depression, and her collapse ends the treatment for both.",
      correction: "Screen the caregiver like a patient (mood, sleep, burden) at the family-work appointment — her likeliest point of entry into care — and treat her like one.",
    },
    {
      mistake: "The referral fantasy: 'family therapy is not available here' as a reason to run zero family meetings",
      why: "Formal systemic therapy is metro-concentrated, but the evidence tier (rungs 1–2) needs no specialist: the single-session meeting and the psychoeducation programme carry most of the benefit.",
      correction: "The four-rung ladder run from the bottom: the meeting any clinician can hold in 30–45 minutes; the programme a trained counsellor or Tele-MANAS worker can deliver after weeks of training.",
    },
    {
      mistake: "Disclosing to the family without the competent adult patient's consent",
      why: "The paying, escorting family's claim feels natural in Indian practice — but under the Mental Healthcare Act 2017 the adult patient's consent governs disclosure, and uncontracted disclosure breaks both the law and the alliance.",
      correction: "Contracting explicitly who hears what, in which session — the collision converted into the work itself, the consented middle path pursued.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Circular vs linear causality — with the criticise-withdraw-overprotect triangle of the psychosis household worked through.",
        "Expressed emotion: definition, the three components, the Camberwell instrument, and the relapse arithmetic.",
        "The structural vocabulary: boundaries, enmeshment, disengagement, hierarchy, triangulation — one clinical example each.",
        "The schools in one breath: structural (Minuchin), strategic (Haley), Milan systemic, transgenerational (Bowen), the behavioural/psychoeducational stream (Falloon, Anderson-Hogarty).",
        "The identified patient: who is sent, by whom, and what changes in that house if this person gets well.",
      ],
      practical: [
        "Draw a three-generation genogram from a vignette — label one enmeshment, one cross-generational coalition and one disengaged member.",
        "Demonstrate the structure of the single-session family meeting (30–45 minutes) — including the heredity and marriage questions answered honestly, and the closing task.",
      ],
      longAnswer: [
        "Family intervention in schizophrenia: the evidence, the shared ingredients of the effective trials, and the Indian delivery models.",
        "Family therapy: the systems model, the major schools, and the indications for each rung of the practical ladder.",
      ],
    },
    neetPg: {
      highYield: [
        "EE = critical comments + hostility + emotional over-involvement — measured in the Camberwell relative's interview.",
        "High EE: schizophrenia relapse roughly two to three times as often over nine months to two years; the effect amplified by face-to-face contact hours.",
        "Multi-session family intervention with communication and problem-solving practice roughly halves one-to-two-year relapse — the NICE-onward guideline tier.",
        "'Reduce contact' is the historical relic; the modern target is lowering the EE itself.",
        "Minuchin: structural — boundary-making, enactment, the psychosomatic-families line (enmeshed, over-protective, conflict-avoidant).",
        "Haley: strategic — directives, paradox, the symptom's function; allergic to insight.",
        "Milan school: hypothesising, circular questioning, neutrality, positive connotation.",
        "Bowen: the genogram and differentiation of self — the transgenerational lens.",
        "Triangulation: the child as symptom-bearer — school refusal, abdominal pain, fainting, self-harm.",
        "FBT (Maudsley model): first-line in adolescent anorexia — three phases: weight restoration → handover → adolescent issues.",
        "Behavioural parent training: the non-pharmacological first-line for ADHD and conduct problems.",
        "NIMHANS family ward: the patient admitted WITH the caregiver; treatment trains the caregiver directly.",
        "Chennai/SCARF and Vellore: home-based family intervention by trained lay workers reduced relapse — the tier that seeded WHO community guidance.",
        "MHA 2017: the adult patient's consent governs disclosure to the family.",
      ],
      pyqConcepts: [
        "Circular questioning (the Milan vignette stem) — the most-exported technique question.",
        "Expressed emotion components — the repeated one-liner.",
        "The genogram and differentiation of self (Bowen).",
        "The first-line status of family-based treatment in adolescent anorexia.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 15-year-old with school-morning faints, normal investigations, onset the month the parents' separation became public and remission every summer holiday — the timing map, not the EEG, is diagnostic: probable triangulation; treat the system or the symptom migrates.",
        "The father of a competent adult in-patient with first-episode psychosis demands the full diagnosis and relapse-risk details that the patient, present and competent, has asked to keep private: under the Mental Healthcare Act 2017 the patient's consent governs disclosure — the collision contracted explicitly (who hears what, in which session), the consented middle path pursued, the alliance kept.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "EE components: critical comments, hostility, emotional over-involvement.",
        "High EE raises schizophrenia relapse roughly two-to-threefold; multi-session family intervention halves it.",
        "Minuchin = structural; Haley = strategic; Bowen = genogram and differentiation of self; Milan = circular questioning.",
        "Family-based treatment is first-line in adolescent anorexia nervosa.",
        "The identified patient is the system's appointed symptom-bearer.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The first-session de-blame is risk management, not courtesy — the schizophrenogenic-parent doctrine's residue still drives Indian families into concealment; the medical model delivered warmly, with the parents explicitly de-blamed, keeps households in services.",
        "The Indian EE footnotes read honestly: WHO-era centres found lower high-EE rates outside London; the Indian replications ran mixed with several samples low-EE despite high contact hours — a stress-metric, not an Indian-family defect; the clinical implication (reduce criticism-with-hostility, replace anxious over-management with warm structured involvement) survives every cultural caveat.",
        "The lay-worker delivery evidence licenses the DMHP-scale architecture — the district that 'has no family therapy' can still run rungs 1–2 with trained counsellors and Tele-MANAS workers in weeks.",
        "Contracting who hears what converts the consent collision into the work itself — the MHA 2017 spine of every multi-stakeholder family session.",
        "The caregiver is the Indian system's load-bearing wall: screen her like a patient (one in a few runs a treatable depression), treat her like one — and the same package that lowers relapse also lowers her depression.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The faints that held the marriage",
      presentation: "Fifteen years old, fainting on every school morning of exam season, every investigation normal — and the episodes began the month the parents' separation became public.",
      initialPresentation: "A 15-year-old class-ten student was brought to the district psychiatry OPD by both parents after a fourth faint on a school morning; the episodes had begun roughly a month after the parents' marital separation became public in the household, and had vanished completely during the summer holidays that fell in between.",
      history: "Four months of school-morning fainting episodes, never on Sundays or holidays; onset the month the separation became public; investigations elsewhere — general examination, haemoglobin, ECG, EEG — all normal; both parents attending but speaking to and through the child, never to each other.",
      examination: "Normal between episodes; no orthostatic or cardiac signs; the family observed in the waiting area: the child mediating every parental exchange, the parents routing their conflict through her — the triangle performed live before the consultation began.",
      diagnosis: "Probable triangulation — a functional (dissociative-type) fainting presentation riding on the parental conflict; the timing map, not the EEG, is diagnostic.",
      management: "The system treated: the parents seen together with the couple channel addressed directly; the child returned to the child subsystem (no longer the messenger or the ballot); the symptom explained without blame to anyone; brief family sessions alongside; the school asked to hold the minimum necessary adjustment rather than excuse her from education.",
      outcome: "The episodes resolved as the couple channel opened — the summer-holiday remission had predicted it; no recurrence through the following school year; the rule held in reverse: treated at the system level, the symptom did not migrate.",
      teachingPoints: [
        "Symptom-bearers announce themselves by what the symptom holds together — the timing map (onset with the separation, remission in the holidays) outperforms the EEG.",
        "The child is not manipulating; the child is holding — the system's pressure-relief valve with a casualty.",
        "Treat only the child and the symptom migrates (school refusal becoming abdominal pain); treat the system and it resolves.",
        "The genogram of the separated household, drawn in one consultation, is the assessment — no imaging required.",
      ],
    },
    {
      title: "The house that relapsed on schedule",
      presentation: "A young man with schizophrenia relapses each time his father criticises him and steadies each time his mother quietly over-protects him — and the mother is now pouring out her own depression at the OPD counter, one year into his illness.",
      initialPresentation: "A 24-year-old man with a two-year history of schizophrenia, maintained on antipsychotics, was brought by his parents after his second relapse in twelve months; both admissions had followed weeks of escalating criticism from the father about the son 'lying idle', and each recovery had coincided with the mother taking over his medicines, his meals and his decisions.",
      history: "Two relapses in twelve months, each tracking the household's weather — the father's criticism storms and the mother's over-protection phases in sequence; the mother describing a year of low mood, broken sleep and weepiness since the psychosis began; the father dismissing 'mind doctors' while checking the medicine bottle each night.",
      examination: "Partial remission on review; the triad observed live at the counter — the father's critical comments, the mother's over-involvement, the patient's withdrawal — the circular loop performed in public; the mother's mood screen positive for a depressive episode.",
      diagnosis: "Schizophrenia in a high-EE household — the identified-patient audit positive, the caregiver's depression positive; the household, not only the man, the clinical unit.",
      management: "Rung 1 run first: a single-session family meeting (30–45 minutes) with both parents — plain-language education, the heredity and marriage questions answered honestly, the de-blame statement in the first minute, ONE crisis plan, one closing task. Then rung 2: the structured psychoeducation programme (6–12 sessions — illness model, medication rationale, early-warning signs and the relapse drill, communication practice replacing the criticism reflex, problem-solving training, caregiver self-care). The mother screened and treated for her depression as a patient in her own right.",
      outcome: "One brief relapse in the following year — half the previous year's rate, the honest arithmetic of the trials; the father running the early-warning drill he had once scorned; the mother's depression treated, her over-protection loosening into the warm structured involvement the package teaches; the household's climate, not its people, the thing that changed.",
      teachingPoints: [
        "The household is a dose-level variable in relapse — as evidence-based a target as the prescription written before lunch.",
        "Nobody in that house was behaving badly; everybody was behaving anxiously — high EE is fear wearing a rough coat, not fault.",
        "The caregiver is a patient: screen her like one, treat her like one — the family-work appointment is her likeliest entry into care.",
        "The single-session meeting resolves more 'non-compliance' than three extra follow-ups of exhortation to the patient alone.",
      ],
    },
  ],
  clinicalPearls: [
    "Circular causality: the pattern maintains and is maintained by the illness — the family is the disease's climate, never its cause; the genetic and neurodevelopmental causation of psychosis stands.",
    "The identified-patient question: who was sent, by whom, and what changes in that house if this person gets well — sometimes 'nothing much', sometimes 'everything'; knowing which room you are standing in is half the craft.",
    "Expressed emotion = the density of critical comments, hostility and emotional over-involvement in a standard relative's interview (the Camberwell instrument — named, never reproduced).",
    "High-EE households: schizophrenia relapse roughly two to three times as often over nine months to two years, amplified by face-to-face contact hours.",
    "Multi-session family intervention that is practical and includes communication and problem-solving practice roughly halves one-to-two-year relapse — the reason every guideline from NICE onward recommends it; 'reduce contact' is the historical relic, the target being the EE itself.",
    "Enmeshment = diffuse boundaries (the grandmother arbitrating, the twelve-year-old voting); disengagement = rigid boundaries (ill a month before the household registers it); the healthy middle is semi-permeable.",
    "Triangulation: the child as the system's symptom-bearer — school refusal, abdominal pain, tics, fainting, self-harm; treat only the child and the symptom migrates.",
    "Circular questioning — the most exportable technique of the whole tradition: ten minutes of ordinary-sounding questions converting the family's linear blame-story into a systems-map.",
    "The genogram in India is not an import; it is a document the family already keeps — often the fastest alliance instrument of the first session.",
    "Family-based treatment (the Maudsley/FBT model, three phases) is first-line in adolescent anorexia; behavioural parent training is the first-line non-pharmacological management of ADHD and conduct problems.",
    "The NIMHANS family ward admits the patient WITH the caregiver and trains the caregiver directly; whatever the textbook said, the Indian multidisciplinary team is usually one psychiatrist plus a family.",
    "Home-based family intervention by supervised trained lay workers reduced relapse and re-hospitalisation in the Chennai/SCARF and Vellore trials — the treatment survives the absence of psychiatrists.",
    "The caregiver is a patient: one in a few close caregivers of a psychosis or dementia patient runs a treatable depression — and the same package that lowers relapse also lowers caregiver depression.",
  ],
  highYieldSummary: [
    "The model: circular causality — each person's response trains the next, the pattern maintaining and maintained by the illness; NOT the discredited claim that families cause schizophrenia (the genetic and neurodevelopmental causation stands — the pattern is the disease's climate, not its origin, and climates are treatable even when origins are not). The clinical instrument the shift supplies: the identified-patient question — who was sent, by whom, and what changes in that house if this person gets well ('nothing much' → individual care; 'everything' → the symptom will defend itself).",
    "The anatomy: subsystems (couple, parents, siblings, the in-law line) separated by boundaries — clear ones semi-permeable (information passes, decisions stay where they belong); enmeshment (diffuse) and disengagement (rigid) bracketing the middle. Hierarchy pathologies both ways: the parentified child running the house; the executive couple overthrown by a grandparent-plus-grandson coalition. Triangulation: the pressure-relief valve with a casualty — the child as symptom-bearer. The structural clinician's signature moves: boundary-making and enactment (the pattern performed live in session, re-arranged on the spot).",
    "The schools in one breath: structural (Minuchin — boundary-making, enactment, the psychosomatic-families line); strategic (Haley and the MRI group — directives, paradox, the symptom's function; allergic to insight); Milan systemic (Selvini Palazzoli and colleagues — hypothesising, circular questioning, neutrality, positive connotation); transgenerational (Bowen — the genogram, differentiation of self); behavioural couples/family work (communication drills, problem-solving, EE reduction as the explicit target — the stream that merged with psychoeducation); and the solution-focused/narrative offshoots (brief, non-blaming, externalising). Circular questioning is the single most exportable technique of the whole tradition.",
    "The EE arithmetic, honestly stated: expressed emotion is the density of critical comments, hostility and emotional over-involvement in a standard relative's interview (the Camberwell instrument). High-EE households with schizophrenia relapse roughly two to three times as often over nine months to two years, amplified by face-to-face contact hours. The reduction trials' standing finding: multi-session, practical family intervention with communication and problem-solving practice roughly halves one-to-two-year relapse — every guideline from NICE onward recommends it. The honest Indian footnotes: WHO-era non-Western centres reading lower than London; Indian replications mixed, several samples low-EE despite high contact hours; the joint family diluting one couple's intensity — a stress-metric, never an Indian-family defect.",
    "The evidence-based packages to order: family intervention in psychosis (Falloon's behavioural family intervention, Anderson and Hogarty's psychoeducational model — 9-plus months of education, communication drills, problem-solving, crisis planning; relapse halved; among the most replicated results in psychiatry). Family-based treatment (Maudsley/FBT) for adolescent anorexia — parents as the refeeding team, three phases (weight restoration, handover, adolescent issues), first-line. Behavioural parent training for ADHD and conduct problems. Couples therapy (behavioural and emotionally-focused) for depression with relationship distress. Caregiver psychoeducation in dementia and chronic illness — burden reduction, delayed institutionalisation, BPSD management.",
    "The four-rung ladder every clinician can run: rung 1 the single-session family meeting (any clinician, 30–45 minutes, two-to-four key members, plain-language education, the heredity and marriage questions answered honestly, ONE crisis plan, a closing task); rung 2 structured family psychoeducation (6–12 sessions of fixed modules — illness model, medication rationale, early-warning signs and the relapse drill, communication practice, problem-solving, caregiver self-care, the crisis card); rung 3 formal family/systemic therapy (the stuck system, the symptom-bearer child, the impossible couple, the multi-generation knot — usually metro-only); rung 4 the family's own institutions (SCARF/ARDSI/bipolar-network groups, Al-Anon, SHG-logic caregiver circles — the tier India's family-work hopes scale on).",
    "The India layer: the family is the system of care — detection (mothers first), escort, payment, medication supervision, the ward stay (the NIMHANS family ward: the admitting unit expects the caregiver to stay, and treatment trains the caregiver directly) and long-term custody; the Indian multidisciplinary team is usually one psychiatrist plus a family. The joint-family gradient: more carers, watchers and mediators AND more critics, secret-keepers and treatment veto-holders — map the actual lines (who holds the medication key, who signals relapse first, who decides money). The marriage-alliance reality: concealment pressures driving late presentation, treatment discontinuation at matchmaking time and resistance to the diagnosis. The caregiver economy: the state saved a sum no budget could print, priced in the carers' own health — psychoeducation groups, respite, RPwD Act entitlements, caregiver circles. The training gap's honest fix: rungs 1–2 teachable to DMHP training days and Tele-MANAS counsellors in weeks.",
    "The ethical spine and the traps: under the Mental Healthcare Act 2017 the adult patient's consent governs disclosure — contracting explicitly who hears what, in which session. The blame trap is a clinical error, not only a discourtesy: the 1970s 'schizophrenogenic parent' doctrine produced guilt, secrecy and families driven from services — de-blame explicitly in the first session. The differential of the 'difficult' family: what looks like non-compliance is often unaddressed family fear (the medication stopped by the relative who believes the tablets are addiction). The caregivers are patients: one in a few close caregivers of a psychosis or dementia patient runs a treatable depression — the family-work appointment is her likeliest entry into care.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ft-quiz-1",
      question: "The father criticises because the son lies idle; the son withdraws further because of the criticism; the withdrawal terrifies the mother, who scolds the father and over-protects the son. The systems reading of this sequence:",
      options: [
        "The father is the cause: treat his criticism first",
        "The son is the cause: intensify his individual therapy",
        "Circular causality: each response trains the next — the pattern, not a person, maintains the illness",
        "The mother is the cause: separate her from the household",
      ],
      correctIndex: 2,
      explanation: "Nobody in the loop is insincere and nobody is the culprit — the anxiety has organised itself into a pattern; the systems lens adds the maintenance layer, never the discredited causation claim.",
      afterSectionId: "mechanism",
    },
    {
      id: "ft-quiz-2",
      question: "A 15-year-old faints on school mornings; investigations are normal; the episodes began the month the parents' separation became public and vanish during the summer holidays. The reading most useful:",
      options: [
        "Malingering for school avoidance: confront",
        "Conversion disorder: treat individually with CBT",
        "Probable triangulation: the symptom binds the parental conflict — treat the system, else the symptom migrates",
        "Absence epilepsy: repeat the EEG",
      ],
      correctIndex: 2,
      explanation: "The timing map, not the EEG, is diagnostic; symptom-bearers announce themselves by what the symptom holds together.",
      afterSectionId: "symptoms",
    },
    {
      id: "ft-quiz-3",
      question: "In session you ask the brother: 'When your sister stays in her room, who in the house worries most, and who does your mother turn to when she is worried?' The technique and its purpose:",
      options: [
        "Interrogation: establishing the culprit",
        "Circular questioning: converting the family's linear blame-story into a systems-map",
        "Supportive counselling: rapport-building",
        "Psychoeducation: teaching the diagnosis",
      ],
      correctIndex: 1,
      explanation: "The Milan-school question sends attention around the circuit of interactions, revealing pattern where the family had seen only persons — the most exportable technique of the whole tradition.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ft-quiz-4",
      question: "The robust finding across the EE-reduction trials in schizophrenia:",
      options: [
        "Antipsychotic doses can be halved in all families",
        "Multi-session family intervention (education + communication + problem-solving practice) roughly halves relapse over one to two years",
        "Reducing contact time is the most effective single ingredient",
        "Effects fade completely by ten years, so family work is optional",
      ],
      correctIndex: 1,
      explanation: "Duration and practice are the ingredients; contact reduction is the historical relic; long-term benefit persists though booster sessions help.",
      afterSectionId: "management",
    },
    {
      id: "ft-quiz-5",
      question: "A grandmother covertly funds her grandson's cannabis use against the father's rules. The structural diagnosis and intervention:",
      options: [
        "The son is the pathology: intensify his individual therapy",
        "The grandmother is the pathology: exclude her from treatment",
        "Cross-generational coalition disrupting the executive hierarchy — boundary work: the parents' decisions return to the parents' subsystem, the coalition named without blame",
        "The father is the pathology: family scapegoat",
      ],
      correctIndex: 2,
      explanation: "Coalitions are drawn, not diagnosed as villains; the map, once visible and respectfully named, is negotiable.",
      afterSectionId: "differential",
    },
    {
      id: "ft-quiz-6",
      question: "The Indian community-trial lineage (Chennai/SCARF, Vellore, Goa) matters to this subject because it demonstrated:",
      options: [
        "Family therapy requires a generation of specialist training",
        "Home-based family intervention by supervised trained lay workers can reduce psychosis relapse and disability — the treatment survives the absence of specialists",
        "Indian families are too enmeshed for family work",
        "Only caregivers, not patients, benefit",
      ],
      correctIndex: 1,
      explanation: "The finding licenses the DMHP-scale family-psychoeducation architecture and is among India's chief exports to global guidance.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State circular causality, and apply it to the criticise-withdraw-overprotect triangle of psychosis households.", answer: "DEFINITION: circular causality is the model in which each person's response trains the next person's response and is trained by it — the pattern participates in maintaining the illness and is maintained by it, with no originating culprit inside the house. THE TRIANGLE: the father criticises because the son lies idle (his criticism is fear wearing a rough coat); the son withdraws further because of the criticism; the withdrawal terrifies the mother, who scolds the father and over-protects the son; the son's improvement would dissolve the mother's purpose and the household's armistice — so the illness becomes the family's solution to its own tension while nobody in it is insincere. THE DISCIPLINE: this is NOT the claim that families cause schizophrenia — the genetic and neurodevelopmental causation stands, the blaming version rejected decades ago; the pattern is the disease's CLIMATE, not its origin, and climates are treatable even when origins are not. The clinical instrument the shift supplies: the identified-patient question — who was sent to you, by whom, and what changes in that house if this person gets well?", topic: "Mechanism" },
    { question: "Describe a joint-family genogram carrying one enmeshment, one cross-generational coalition and one disengaged member — and label each boundary type.", answer: "THE GENOGRAM: three generations on one page — the grandparents' line, the parents' couple subsystem with the in-law line, the sibling subsystem below; migrations, debts, marriages and illnesses marked (in India the family already keeps this document; drawing it together is often the fastest alliance instrument of the first session). THE ENMESHMENT: the eldest son's marriage drawn with diffuse boundaries — the grandmother arbitrating every couple disagreement and the twelve-year-old voting in decisions that belong to the parents; boundary-making returns the couple's conflict to the couple's room. THE COALITION: the grandmother-plus-grandson line drawn across generations, bypassing the executive couple — triangulation proper, the system's pressure-relief valve with the child as casualty. THE DISENGAGED MEMBER: the widowed uncle in the same house whose month of illness went unregistered — rigid boundaries, the connection rebuilt deliberately. THE LABELS: clear boundaries are semi-permeable (information passes, decisions stay where they belong); enmeshment is the diffuse failure, disengagement the rigid one — the structural clinician's signature moves being boundary-making and enactment (the pattern performed live in session, where it can be re-arranged on the spot).", topic: "Diagnosis" },
    { question: "Give the EE relapse arithmetic and the two intervention ingredients the effective trials share.", answer: "THE ARITHMETIC: expressed emotion — the density of critical comments, hostility and emotional over-involvement in a standard relative's interview (the Camberwell instrument, named never reproduced) — predicts relapse in schizophrenia: patients in high-EE households relapse roughly TWO TO THREE TIMES as often over NINE MONTHS TO TWO YEARS as those in low-EE households, the effect amplified by the quantity of face-to-face contact (the logic that first produced the since-discarded 'reduce contact' advice). THE INTERVENTION FINDING: multi-session family intervention roughly halves one-to-two-year relapse — the reason every guideline from NICE onward recommends it and the reason family psychoeducation appears in Indian DMHP training materials. THE TWO SHARED INGREDIENTS: (1) DURATION — more than a few sessions, the classic packages running 9-plus months; and (2) SKILLS PRACTICE — communication drills and structured problem-solving, education alone being insufficient. THE HONEST INDIAN FOOTNOTES: the WHO studies found some non-Western centres reading lower high-EE than London, the Indian replications ran mixed with several samples low-EE despite high contact hours — the wise reading being a stress-metric, not an Indian-family defect, with the clinical implication (reduce criticism-with-hostility, replace anxious over-management with warm structured involvement) surviving every cultural caveat.", topic: "Evidence" },
    { question: "Walk the four-rung ladder: what happens in a single-session family meeting, minute by minute?", answer: "THE LADDER: rung 1 the single-session family meeting (any clinician, 30–45 minutes); rung 2 structured family psychoeducation (a trained clinician or counsellor, 6–12 sessions of fixed modules); rung 3 formal family/systemic therapy (specialist referral — usually metro-only in India); rung 4 the family's own institutions (patient and caregiver groups — the SCARF/ARDSI/bipolar-network model, Al-Anon for the addiction household — the SHG and caregiver circles on which India's family-work hopes realistically scale). THE MEETING ITSELF: invite two-to-four key members — whoever holds the medicine, whoever notices relapse first, whoever decides money; conduct the illness education in plain language; answer the questions honestly, including the heredity and marriage questions; give ONE crisis plan (not three); end with a task. The de-blame statement lands in the first minute ('nobody in this house caused this illness'), and the meeting costs one OPD slot — enormous measurable value, no referral required. WHY IT MATTERS: most Indian psychiatry will never have a referral family therapist in the district; what it has is the family already in the room — the ladder exists precisely so the bottom rungs are universal.", topic: "Management" },
    { question: "What is triangulation, and which childhood presentations most often ride on it?", answer: "DEFINITION: triangulation is the system's pressure-relief valve with a casualty — when the direct couple channel is unusable, the tension routes through a third party, most commonly a child, who develops the symptom that finally earns the family an appointment; the child is not manipulating, the child is HOLDING. THE PRESENTATIONS: school refusal; abdominal pain with normal work-up; fainting on school mornings; tics; self-harm — each flaring when the parental marriage is in the news and settling when it is not (the timing map: onset dated to the family event, remission during the holidays). THE RULE: treat only the child and the symptom migrates (school refusal becoming abdominal pain becoming something else); see the system and it resolves. THE INDIAN COROLLARY: the joint family supplies many triangulating lines — the grandmother-plus-grandson coalition against the father's authority being the archetypal cross-generational coalition; the structural work names the map without naming villains and returns the decisions to the parents' subsystem.", topic: "Clinical practice" },
    { question: "State the Indian community-trial finding on home-based family intervention, and the policy idea it licenses.", answer: "THE FINDING: home-based family intervention delivered by supervised trained lay workers reduced relapse and re-hospitalisation in schizophrenia in the Chennai/SCARF and Vellore community trials, with community-delivered lay counselling in Goa reducing common-disorder burden — the trials that seeded the WHO's global community-psychiatry guidance (mhGAP). Indian family work, delivered by supervised non-specialists, is evidence-exported to the world: the irony worth telling. THE POLICY IDEA IT LICENSES: the DMHP-scale family-psychoeducation architecture — rungs 1 and 2 (the single-session meeting and the structured programme) are exactly what DMHP training days and Tele-MANAS counsellors can be taught in weeks; the referral fantasy ('family therapy is not available here') should never become the reason a district runs zero family meetings. The single most important India-relevant fact in the subject: the treatment survives the absence of psychiatrists.", topic: "Indian context" },
    { question: "Name the consent rule under the Mental Healthcare Act 2017 that governs what the family is told about an adult in-patient, and the contracting phrase that operationalises it.", answer: "THE RULE: under the Mental Healthcare Act 2017, the adult patient's consent governs disclosure — the paying, escorting family's claim to information does not outrank the competent patient's privacy. THE CONTRACTING PHRASE: 'contracting explicitly who hears what, in which session' — the multiple stakeholders' divergent wishes (privacy against surveillance, the patient's autonomy against the family's protective claims) converted from a collision into the work itself. THE PRACTICE: the consented middle path pursued (what the family may be told for the treatment's sake, what remains the patient's own), the contract revisited whenever the household's cast changes — the ethical spine of every family session, and the answer to the examination stem of the father demanding the full diagnosis the competent patient has asked to keep private.", topic: "Ethics and law" },
  ],
  faqs: [
    { question: "Doctor, are you saying this is our fault — that we made him mad?", answer: "The opposite, and it matters that you hear it in the first minute: research left the blaming idea behind decades ago — this is a brain illness with genetic and developmental roots. What families affect is the climate of recovery, the soil rather than the seed, and soil can be improved. That is precisely the work we will do together." },
    { question: "We are fifty members in this house. Do we all need to come?", answer: "No — two to four key people: whoever holds the medicine, whoever notices the relapse first, whoever decides the money. The map of the house can be drawn on paper without the house attending." },
    { question: "His father shouts at him — is that why he relapsed?", answer: "Shouting alone does not cause psychosis, but hostility riding on illness raises relapse risk — and the shouting is usually fear wearing a rough coat. We treat the fear, and the shouting dissolves with it; blaming him will not." },
    { question: "Can we just admit her? The house cannot manage.", answer: "Sometimes admission is right — for crisis, adjustment or respite. But an admission that returns her to an unchanged household relapses on schedule; the admission plus family sessions is the one that holds." },
    { question: "Nobody outside should know he takes medicine — it will spoil the marriage proposals.", answer: "The stakes are real, and we will plan together what is said, to whom and when. But treatment stopped at matchmaking time is the commonest relapse trigger we see — let us find the words that protect both the alliance and the medicine." },
    { question: "What do WE get? We are the ones breaking.", answer: "You are the treatment team, and teams need care: family psychoeducation groups, a relapse drill so that panic shrinks, your own review appointments, respite options. Carer depression is common and treatable — you are also my patient today." },
    { question: "Is this 'family therapy' available here, or only in the metros?", answer: "The full formal version, mostly the metros. But the family meeting and the psychoeducation programme — the rungs that carry most of the benefit — can run in this district, and I will run them with you." },
    { question: "My mother-in-law stopped his tablets, saying they are addiction.", answer: "Common, and correctable: she is protecting him by her own lights. One session with her — the education, the relapse record, and her own respected role in the drill — changes more than three months of exhorting the patient." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "NICE-lineage clinical guideline recommendations — family intervention in psychosis (the 'every guideline from NICE onward' tier), with the recommendations assembled across anorexia, ADHD and couples work" },
      { source: "WHO mhGAP intervention guide — the family and psychoeducation materials the Indian community trials informed" },
      { source: "Mental Healthcare Act 2017 (India) — the consent provisions governing disclosure to families" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.8 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Brown G, Birley J, Wing J — the founding expressed-emotion studies (1972)" },
      { source: "Vaughn C, Leff J — EE measurement across cultures (1976 onward)" },
      { source: "Leff J, Kuipers L et al. — the first EE-reduction trials (1980s)" },
      { source: "Falloon I et al. — the behavioural family management trials and practitioner manuals (1982–85 onward)" },
      { source: "Hogarty G, Anderson C, Reiss D et al. — the Pittsburgh psychoeducation trials; McFarlane W — the multi-family psychoeducation groups" },
      { source: "Padmavati R, Srinivasan T, Tirupati S — the Chennai/SCARF home-based family intervention and community-care trials; Patel V et al. — the Goa lay-counselling trials" },
      { source: "Lock J, Le Grange D — the family-based treatment trials and manuals for adolescent eating disorders" },
      { source: "Miklowitz D — family-focused therapy for bipolar disorder (the adjacent strong tier)" },
    ],
    reviews: [
      { source: "Minuchin S — Families and Family Therapy (1974); Minuchin, Rosman & Baker — the psychosomatic-families line (1978)" },
      { source: "Haley J — Problem-Solving Therapy (1976); Madanes C — the directives tradition" },
      { source: "Selvini Palazzoli M, Boscolo L, Cecchin G, Prata G — the Milan school papers (paradox and counterparadox; the post-Milan turn)" },
      { source: "Bowen M — Family Therapy in Clinical Practice (the transgenerational and genogram canon)" },
      { source: "Parker G, Johnston P, Hayward L — the EE critique and cross-cultural review; Bhugra D, Wig N et al. — the Indian EE replication studies" },
      { source: "The DMHP training tier and Tele-MANAS — the rungs-1-and-2 teaching channels this course's Indian layer leans on" },
    ],
    patientResources: [
      { source: "SCARF-model family programmes and caregiver groups; ARDSI for dementia caregivers; Al-Anon for the addiction household" },
      { source: "Tele-MANAS — the national tele-mental-health service for caregiver distress and crisis triage" },
      { source: "The relapse drill and the crisis card — the two instruments this course hands to every household" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: not your fault, the climate that can improve, the meeting your family can attend, the carer's own care.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "Circular causality, the structural vocabulary, the schools in one breath, the EE arithmetic, the four-rung ladder.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "32 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "40 min",
      description: "Everything — the family-assessment craft, the ladder, the Indian delivery evidence, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "Circular causality, the anatomy of households, the identified patient.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the systems shift in one sentence and defend it against the blame reading." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The pattern engine, the EE climate, the stress route, the triangulation valve.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the criticise-withdraw-overprotect loop and recite the EE arithmetic cold." },
    { number: 3, title: "Clinical Practice", description: "The family assessment, the four presentations, the packages and the ladder.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the family map (genogram, IP question, EE read, caregiver screen) and order the right package." },
    { number: 4, title: "Indian Context", description: "The family as the system of care, the NIMHANS ward, the lay-worker evidence, the consent spine.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the de-blame, the marriage-alliance plan and the rungs-1-and-2 commitment in a district OPD." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the family-intervention essay and the circular-questioning one-liner cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.8 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Brown G, Birley J, Wing J — the founding expressed-emotion studies: relapse and household emotion in schizophrenia", sourceType: "primary", year: "1972", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Vaughn C, Leff J — EE measurement and the cross-cultural replications (1976 onward), including the WHO international studies", sourceType: "primary", year: "1976 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Leff J, Kuipers L et al. — the first EE-reduction trials (social intervention plus family sessions)", sourceType: "trial", year: "1980s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Falloon I et al. — the behavioural family management trials (1982–85 onward) and the family-care practitioner manuals", sourceType: "trial", year: "1982 onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Hogarty G, Anderson C, Reiss D et al. — family psychoeducation vs supportive therapy (the Pittsburgh trials); McFarlane W — the multi-family psychoeducation groups; with the Glick-Clarkin inpatient line and Miklowitz's FFT for bipolar disorder (the adjacent strong tier)", sourceType: "trial", year: "1980s–2000s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Minuchin S — Families and Family Therapy (1974) and the psychosomatic-families line (Minuchin, Rosman & Baker 1978): the structural canon", sourceType: "primary", year: "1974–1978", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Haley J — Problem-Solving Therapy (1976) and the strategic lineage; Madanes C — the directives tradition", sourceType: "primary", year: "1976 onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Selvini Palazzoli M, Boscolo L, Cecchin G, Prata G — the Milan school papers (paradox and counterparadox era, the post-Milan turn)", sourceType: "primary", year: "1970s–1980s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Bowen M — Family Therapy in Clinical Practice: the transgenerational and genogram canon", sourceType: "primary", year: "1978 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Lock J, Le Grange D — family-based treatment trials and manuals for adolescent eating disorders; with the NICE-lineage guideline recommendations assembled across psychosis, anorexia, ADHD and couples work", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Parker G, Johnston P, Hayward L — the EE critique and cross-cultural review; Bhugra D, Wig N et al. — the Indian EE replication studies (the honest mixed findings)", sourceType: "review", year: "1980s–1990s", dateReviewed: "2026-09-29" },
    { id: "S13", source: "The India tier: Padmavati R, Srinivasan T, Tirupati S — the Chennai/SCARF home-based family intervention and Vellore community-care trials; Patel V et al. — the Goa lay-counselling trials; the WHO mhGAP family materials they informed; with the Indian practice frame (DMHP training materials, Tele-MANAS, the Mental Healthcare Act 2017 consent rule)", sourceType: "trial", year: "1990s–2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Circular causality: the family's interaction pattern participates in maintaining (and is maintained by) the illness — NOT the discredited claim that families cause schizophrenia; the genetic and neurodevelopmental causation of psychosis stands; the pattern is the disease's climate, not its origin.", grade: "established", sources: ["S1", "S12"] },
    { text: "Expressed emotion (EE) — the density of critical comments, hostility and emotional over-involvement in a standard relative's interview (the Camberwell instrument) — predicts relapse: patients with schizophrenia in high-EE households relapse roughly two to three times as often over nine months to two years, the effect amplified by face-to-face contact hours.", grade: "established", sources: ["S2", "S3"] },
    { text: "The reduction trials' standing finding: family intervention roughly halves one-to-two-year relapse in schizophrenia when it is more than a few sessions, practical in method, and includes communication and problem-solving practice — the reason every guideline from NICE onward recommends it, and the reason family psychoeducation appears in Indian DMHP training materials.", grade: "established", sources: ["S4", "S5", "S11"] },
    { text: "The shared ingredients of the effective packages: duration (the classic psychosis programmes run 9-plus months of sessions) and skills practice (communication drills and structured problem-solving) — with 'reduce contact' identified as the historical relic; the modern target is lowering the EE itself.", grade: "established", sources: ["S5", "S6"] },
    { text: "The cross-cultural honesty: the WHO international studies found high-EE rates in some non-Western centres lower than London's, and the Indian replication studies ran mixed — several Indian samples reading low-EE despite high face-to-face contact, the joint family diluting one couple's intensity across many carers. The wise reading: EE is a stress-metric, not an Indian-family defect; the clinical implication (reduce criticism-with-hostility, replace anxious over-management with warm structured involvement) survives every cultural caveat.", grade: "uncertain", sources: ["S3", "S12"] },
    { text: "The structural model: subsystems separated by boundaries (clear ones semi-permeable); enmeshment (diffuse boundaries) and disengagement (rigid boundaries) as the two failure shapes; hierarchy pathologies in both directions; triangulation — the cross-generational coalition that makes the child the symptom-bearer, with the structural moves of boundary-making and enactment.", grade: "supported", sources: ["S1", "S7"] },
    { text: "The schools and their signature techniques: structural (Minuchin — boundary-making, enactment, the psychosomatic-families line); strategic (Haley — directives, paradox, the symptom's function); Milan systemic (Selvini Palazzoli and colleagues — hypothesising, circular questioning, neutrality, positive connotation); transgenerational (Bowen — the genogram, differentiation of self); behavioural couples/family work merging with psychoeducation (Falloon, Anderson-Hogarty).", grade: "supported", sources: ["S5", "S7", "S8", "S9", "S10"] },
    { text: "Family-based treatment (the Maudsley/FBT model) — parents empowered as the refeeding team across three phases (weight restoration, handover, adolescent issues) — is first-line in adolescent anorexia in major guidelines.", grade: "established", sources: ["S11"] },
    { text: "Behavioural parent training is the non-pharmacological first-line of child behavioural management in ADHD and conduct problems; couples therapy (behavioural and emotionally-focused) carries the evidence for depression with relationship distress; caregiver psychoeducation in dementia and chronic illness reduces burden, delays institutionalisation and supports BPSD management.", grade: "established", sources: ["S1", "S11"] },
    { text: "The Indian evidence tier: home-based family intervention by supervised trained lay workers reduced relapse and re-hospitalisation in schizophrenia (the Chennai/SCARF and Vellore community trials); community-delivered lay counselling in Goa reduced common-disorder burden; the findings seeded WHO community-psychiatry guidance — Indian family work, delivered by non-specialists, is evidence-exported to the world.", grade: "established", sources: ["S13"] },
    { text: "The NIMHANS family-ward tradition: the admitting unit expects the caregiver to stay, and treatment trains the caregiver directly — the Indian family formalised as the system of care (detection, escort, payment, medication supervision, the ward stay, custody); the Indian multidisciplinary team is usually one psychiatrist plus a family.", grade: "supported", sources: ["S1", "S13"] },
    { text: "The caregiver as patient: one in a few close caregivers of a psychosis or dementia patient runs a treatable depression; the family-work appointment is the caregiver's likeliest point of entry into care — and the same package that lowers relapse also lowers caregiver depression, the health of the only workforce the patient has.", grade: "supported", sources: ["S5", "S13"] },
    { text: "Under the Mental Healthcare Act 2017, the adult patient's consent governs disclosure to the family; the multi-stakeholder collision (the paying family's claims against the competent patient's privacy) is resolved by contracting explicitly who hears what, in which session — the ethical spine of Indian family work.", grade: "supported", sources: ["S13"] },
  ],
};
