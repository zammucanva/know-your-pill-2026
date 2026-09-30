import type { PsychiatryCourse } from "./types";

/**
 * PSYCHIATRIC ASSESSMENT — canonical Psychiatry concept course
 * (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/psychiatric-assessment.md — untouched
 * foundation; source_map: NOTP 2e (2009) ch 1.8.1, Part 1 — the
 * Cooper & Oates synthesis on which the note is an original
 * rewrite: the disease/illness/sickness trio, formulation,
 * multidisciplinary teamwork, instruments, prognosis and
 * reports), re-researched against the lineages the note itself
 * cites (Scadding's diagnostic dictum, the WHO ICD-10 and ICF
 * frameworks with Nagi's US counterpart, Taylor's trio account,
 * the Lewis-Wootton definitional debates, Brown & Harris's LEDS
 * methodology, Burns's community-care reviews, Kendell & Cooper
 * on the importance of diagnosis, Menninger's anti-diagnosis
 * position, Goldberg's primary-care interface, the Wing/SCAN/
 * PSE instrument lineage, Sartorius & Janca's cross-cultural
 * standardisation) with per-claim provenance.
 *
 * Drug routes: the note assigns no medication any role in the
 * assessment method — drugLinks is empty by design; medication
 * appears only as one of the doctor's reserved domains inside
 * the multi-disciplinary architecture, and every pharmacological
 * route belongs to the disorder courses. The structured-instrument
 * (SCAN/CIDI/PSE), behavioural-assessment, LEDS-methodology and
 * report-writing tiers the note references have no KYP lessons
 * and are recorded in contentGaps, never invented.
 */
export const psychiatricAssessmentCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "psychiatric-assessment",
  title: "Psychiatric Assessment",
  shortName: "Psych Assessment",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Psychiatric Assessment"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "History, examination, risk, formulation — the plan, not the label, is the product",

  summary:
    "The initial psychiatric assessment sorts complaints into form, content and effects on functioning, and ends in a formulation, a prognosis and a written plan rather than a label alone. It covers the interview, the multi-disciplinary team and the Indian consultation.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the aim of the initial psychiatric assessment — a comprehensive plan for treatment and management with both short-term and longer-term components — and the chapter's three areas of special emphasis: multi-disciplinary assessment, the disease/illness/sickness trio, and structured instruments.",
    "Use the disease/illness/sickness trio — the doctor's pathological entity, the patient's experience of symptoms and distress, the social recognition of role-interference — to resolve team disagreements and the family's 'is it a real illness?' question.",
    "Sort assessment information: form versus content versus effects on functioning; subjective versus objective; symptoms versus impairments — with the disorientation-to-time example that is both symptom and impairment.",
    "Explain the disorders-not-diagnoses position of ICD-10 and DSM-IV (Scadding's dictum: 'may' becomes 'usually'), its consequences for terminology and patient expectations, and why the anti-diagnosis position fails.",
    "Use the ICF and Nagi disablement frameworks as team checklists that map disciplines to concepts — social workers to work and relationships, occupational therapists to daily activities, psychologists to cognitive functions.",
    "Run the assessment sequence — collection, analysis, synthesis, review — and build the formulation from complaints through symptoms and impairments to an ordered plan.",
    "Apply the contextual rules: home and primary-care assessment; the privacy and confidentiality procedure; interpreter selection (professional, same-sex, not family); the cultural framing of the private interview; multiple information sources with conflicts resolved by more information, never early confrontation.",
    "Distinguish multi-disciplinary practice from teamwork; describe leadership including 'leading from behind', key workers, and the doctor's reserved domains — physical illness, medication, investigations, risk, formulation; and make prognoses, run reviews and write reports that serve the reader.",
  ],
  quickFacts: [
    { label: "The aim", value: "The plan, not the label", detail: "The initial assessment aims at a comprehensive plan for treatment and management with both short-term and longer-term components — the diagnostic term is only one part of what it produces" },
    { label: "The trio", value: "Disease, illness, sickness", detail: "Disease — the doctor's pathological entity; illness — the patient's experience of symptoms and distress; sickness — the social recognition of role-interference. When the team argues, ask which of the three is being discussed: the disagreement usually dissolves into legitimate differences of emphasis" },
    { label: "The sort", value: "Form, content, effects", detail: "The form (phobia, delusion) identifies the disorder; the content reveals current concerns; the effects on functioning determine management and grade severity — the presenting complaint is usually the functional interference" },
    { label: "The honest label", value: "Disorders, not diagnoses", detail: "Scadding's dictum: a diagnosis may state no more than the resemblance of symptoms and signs to a previously recognized pattern — in psychiatry 'may' becomes 'usually', acknowledged by ICD-10 and DSM-IV presenting classifications of disorders" },
    { label: "The disablement frameworks", value: "ICF and Nagi", detail: "Functioning, disability and contextual factors — descriptive conceptual frameworks, best used as team checklists ensuring all effects have been considered, with disciplines mapped to concepts" },
    { label: "The interpreter rule", value: "Professional, same-sex, not family", detail: "Always sought when fluency is absent; a professional of the same sex as the patient is always preferred to family members — a confidentiality matter, not a convenience" },
    { label: "The reserved domains", value: "The medical five", detail: "Decisions about physical illness, medication and laboratory investigations can only be made by a medically qualified person — with risk and dangerousness assessment and the formulation the psychiatrist's team-specific expertise" },
    { label: "The Indian trio", value: "Sickness asked, disease answered", detail: "The family asks sickness questions (will she marry, can he work, what will people say), the doctor answers disease, the shrine answers meaning — naming the three levels openly converts the classic Indian consultation-cross-purposes into a coherent conversation" },
  ],
  knowledgeGraph: [
    { label: "Descriptive Phenomenology", type: "condition", href: "/psychiatry/psychiatric-phenomenology/", note: "The technical vocabulary the form/content/effects sort runs on — the symptoms only close questioning by someone who knows what to ask uncovers" },
    { label: "Diagnosis & Classification", type: "condition", href: "/psychiatry/psychiatric-classification/", note: "The disorders-not-diagnoses position this course depends on — classifications of disorders, 'criteria for the identification of disorders' as the honest label" },
    { label: "Cognitive Assessment", type: "condition", href: "/psychiatry/cognitive-assessment/", note: "The objective examination's structured cousin — the disorientation-to-time example that is both symptom and impairment lives here" },
    { label: "Psychiatry in Primary Care", type: "condition", href: "/psychiatry/primary-care-psychiatry/", note: "Goldberg's interface — the primary-care premises as assessment venue, and the consultant-liaison style spreading through it" },
    { label: "Community Mental Health Services", type: "condition", href: "/psychiatry/mh-services/", note: "The reorganisations the multi-disciplinary chapter rides on — driven by administrative and financial rather than evidential forces" },
    { label: "Bereavement", type: "condition", href: "/psychiatry/bereavement/", note: "The lost relationship causing disability and emotional impairment — the ICF's bidirectional causality in one example" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Risk and dangerousness assessment — the psychiatrist's team-specific reserved domain inside every initial assessment" },
    { label: "Transcultural Psychiatry & Stigma", type: "condition", href: "/psychiatry/transcultural-stigma/", note: "The private interview as a middle-class Western construct; recovered patients refused work by prejudiced employers — the cultural frame around disclosure and disablement" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The expectation engine of the official pronouncement — the universal relief at a named cause" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "Appraisal, narrative and meaning-making — the machinery that converts the collected story into the formulation's priorities" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The engine of the psychiatric assessment is not a technology but a disciplined conversation with a fixed output contract: it must end in a plan. The sequence the Oxford chapter teaches — collection, analysis, synthesis, review — turns the complaints of a life (relationships, work, housing, money) into an ordered treatment programme. Collection is governed by context: where the interview happens (clinic, home, primary-care premises — each elicits what the others suppress), who is present (the privacy and confidentiality procedure explained from the start, because families fear each other's reactions more than they fear doctors), what language it runs in (a professional, same-sex interpreter when fluency is absent, never a family member by default), and how many sources are heard (always an advantage for objective topics, with conflicts resolved by more information, not early confrontation). Analysis is the sorting discipline: the form of a symptom identifies the disorder, the content reveals current concerns, the effects on functioning determine management and grade severity; the doctor's pathological entity, the patient's lived experience and the social role-interference are kept separately visible as disease, illness and sickness — and all informants' accounts are treated as constructions. Synthesis is the formulation — the summarising skill that reflects team-agreed policy and orders attributes, problems, disorders and context into priorities — with the prognosis stated in confidence-graded outcome terms and the ICF's functioning line (impairment, activity, participation) audited alongside the diagnostic one; the assessment is incomplete until both lines are considered. Review converts the assessment from event to process: interval re-assessment of progress, added interventions, and toward episode-end global statements of improvement and quality of life from the patient's viewpoint. The written report is the assessment's public face — the formulation in the lead, the evidence behind it, the plan — and its clarity is a clinical duty.",
    steps: [
      "The output contract: the initial assessment aims at a comprehensive plan for treatment and management with both short-term and longer-term components — the plan, not the label, is the product.",
      "Collection under context rules: venue chosen deliberately (home and primary-care premises are serious options, not compromises); the privacy procedure explained from the start; interpreters professional and same-sex; multiple informants heard with conflicts parked, not confronted.",
      "Analysis — the sort: form (the technical term identifying a recurring pattern known to matter) versus content (current concerns) versus effects on functioning (management and severity); symptoms versus impairments; subjective accounts treated as constructions, events corroborated across sources.",
      "Synthesis — the formulation: the disease, illness and sickness threads drawn together with the life story and the context into an ordered statement of what is wrong and what to do first, reflecting team-agreed policy; the ICF line audited beside the diagnostic line.",
      "The risk gate: risk and dangerousness assessment is the psychiatrist's team-specific expertise — the assessment is incomplete until it has been run.",
      "The ending skills: prognosis formulated with explicit uncertainty and confidence-graded outcome statements; reviews converting assessment from event to process; the report written for its readers — the formulation in the lead, the evidence behind it, the plan.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal", name: "Prefrontal cortex (the narrative's office)", role: "Appraisal, sequencing and meaning-making — the machinery that turns a life told in complaints into an ordered formulation, and the seat of the expectations the official pronouncement engages.", grade: "proposed" },
    { id: "hippocampus", name: "Hippocampus (the life chart's substrate)", role: "Autobiographical memory — the temporal record the life chart maps events onto; its impairment is why disorientation disrupts both recognition and daily routine.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (disclosure's alarm)", role: "The threat response that gates intimate disclosure — the biology of why the privacy procedure and the trusted setting come before the questions that identify symptoms.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The expectation chemistry of the official pronouncement — the universal relief at a named cause, and the reason the explanatory terms must be understandable to carry that power.", grade: "proposed" },
    { name: "Oxytocin", symbol: "OT", role: "The trust channel of the interview — the biology the privacy procedure and the interpreter discipline serve; disclosure runs on felt safety, not on the question list.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "complaints-to-formulation-pathway",
      name: "The complaints-to-formulation cascade",
      steps: [
        { label: "The complaints", detail: "Unpleasant symptoms, inability to do everyday things, relationship problems — arriving embedded in matters of relationships, work, housing and money" },
        { label: "The sort", detail: "Symptoms and impairments separated — some are both: disorientation to time contributes to dementia recognition and disrupts the daily routine" },
        { label: "The diagnostic line", detail: "Toward disorder and possible diagnosis — the form of symptoms identifying the pattern, treatments and outcomes following" },
        { label: "The disablement line", detail: "From impairment through disability to participation restriction — the ICF audit that often matters more to the patient than the symptoms" },
        { label: "The formulation", detail: "Both lines drawn together with the life story and the context into an ordered statement of priorities — the plan made legible" },
      ],
      clinicalManifestation: "The consultation that ends with the family knowing what is wrong, what will be done first and what to expect — instead of a label and a prescription.",
      grade: "established",
    },
    {
      id: "privacy-disclosure-pathway",
      name: "The privacy-to-disclosure pathway",
      steps: [
        { label: "The procedure explained", detail: "From the start: each party may speak to the doctor in private; nothing reaches the other unless requested" },
        { label: "The mutual undertaking", detail: "The patient agrees not to interrogate family members about their sessions, and vice versa; relatives' secret interviews refused" },
        { label: "The fear quiets", detail: "Families are in fear of each other's reactions to 'critical' statements more than they fear doctors — the trust architecture holds" },
        { label: "Disclosure opens", detail: "Intimate and unpleasant matter spoken freely — the private interview working even where one-to-one disclosure is culturally unfamiliar, by negotiated sequence" },
      ],
      clinicalManifestation: "The relative who finally says what everyone in the household has been managing around for months — the information no clinic form elicits.",
      grade: "supported",
    },
    {
      id: "trio-resolution-pathway",
      name: "The team-disagreement resolution pathway",
      steps: [
        { label: "The row", detail: "Team members disagree about the case — physical cause, personal distress or social interference each defended by a different discipline" },
        { label: "The trio question", detail: "'Is this about disease, illness or sickness?' — the central diagnostic question for team disagreements" },
        { label: "The level named", detail: "Disease (the doctor's pathological entity), illness (the patient's experience of symptoms and distress), sickness (the social recognition of role-interference)" },
        { label: "The argument dissolves", detail: "Into legitimate differences of emphasis — two disciplines answering different questions, neither wrong" },
      ],
      clinicalManifestation: "The team meeting that ends in a plan instead of a quarrel — the single most practically useful sentence in the chapter.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "definitional-debates", time: "Mid-20th century", title: "The definitional debates", description: "Lewis and Wootton work what psychiatric diagnosis can honestly claim; the multi-dimensional resolutions follow — more than one aspect, the disease level not always the best explanatory level (Taylor's account of symptoms and distress) — and Susser's dimensions carry the lineage that becomes the disease/illness/sickness trio.", phase: "onset" },
    { id: "anti-diagnosis-challenge", time: "1950s–60s", title: "Menninger's anti-diagnosis challenge", description: "The dismissal of classification at its most influential — answered by the chapter on two counts: the diagnostic term is only one part of an assessment that also produces a personal formulation, and any assessment of a person is unavoidably an act of classification.", phase: "onset" },
    { id: "leds-era", time: "The 1970s", title: "Brown & Harris and the LEDS", description: "The Life Events and Difficulties Schedule becomes the research gold standard for tying life events to onset — its very length illustrating the technical difficulty of the temporal history the clinical life chart approximates.", phase: "duration" },
    { id: "disorders-not-diagnoses", time: "The 1990s", title: "ICD-10 and DSM-IV: disorders, not diagnoses", description: "Both systems present classifications of disorders — clinically recognizable syndromes with distress and interference with personal functions, causes usually unknown — and Scadding's 'may' becomes 'usually'; Sartorius & Janca (1996) cross-culturally standardise the assessment instruments the tradition builds.", phase: "peak" },
    { id: "icf-era", time: "2001", title: "The ICF gives disablement its framework", description: "WHO's International Classification of Functioning, Disability and Health — with Nagi's similar US scheme — supplies the functioning, disability and contextual-factor levels the assessment audits as team checklists, mapping disciplines to concepts.", phase: "peak" },
    { id: "oxford-synthesis", time: "2009", title: "The Oxford chapter consolidates the discipline", description: "Cooper & Oates' ch 1.8.1 in NOTP 2e codifies the principles for the general adult clinician: the trio, the sequence, the contextual rules, the multi-disciplinary architecture, the instruments, and the ending skills — prognosis, reviews, reports.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the apparatus as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "The note's lineage records no survey numbers — the honest epidemiology is structural. The initial psychiatric assessment is the universal entry point of psychiatric care: every pathway into treatment passes through it, whatever the disorder, and its quality shapes everything downstream. Its three areas of special attention (multi-disciplinary assessment, the trio, structured instruments) are practice-level claims, not prevalence claims; the structured-instrument tradition behind most clinical research is the field's measurement layer, and the note's insistence that clinicians understand it is a literacy demand, not an epidemiological finding.",
    indianPrevalence: "The Indian assessment is usually the family-accompanied district OPD consultation — several patients an hour, the family speaking first, the patient's own account the scarcest resource in the room. The trio the chapter teaches is the Indian consultation's missing instrument: the family's question is usually about sickness (will she marry, can he work, what will people say), the doctor's answer is about disease, and the shrine's answer is about meaning; the consultation-cross-purposes is the default the method corrects.",
    lifetimeRisk: "Structural: every psychiatric career begins with an initial assessment and runs through its reviews — the assessment as process, not event; the prognosis graded by confidence and revised at each interval re-assessment.",
    indianNotes: "Venue economics: the OPD minute is the scarce resource; the home visit costs clinician time in short-staffed districts but is the textbook's own recommendation where behaviour in context is needed — with particular value in puerperal disorders; the written plan is the cheapest continuity technology in the system (records lost between clinics, follow-ups unbooked — the problems it solves). No cost figures are recorded in the note and none are invented here.",
  },
  etiology: [
    { category: "social", factor: "The family and social context", details: "Good psychiatric practice is whole-person medicine: the patient seen both as an individual with attributes, abilities, problems and experiences and as a member of a group subject to family, social and cultural influences — analysis and synthesis alternating, the context a determinant of what the assessment finds, not a background to it." },
    { category: "psychological", factor: "Lay illness models and illness behaviour", details: "The family's question 'is it a real illness?', asked in the patient's own terms, should be anticipated in every initial assessment; culturally-shaped illness behaviour and the lay concepts ('mental illness', 'nervous breakdown') belong to the standard information set and shape what is reported, withheld and expected." },
    { category: "social", factor: "Venue and information source", details: "Home interviews (patient and family at ease, richer circumstances, behaviour different from clinic — privacy harder) and primary-care premises (less threatening, GP-adjacent) change what patient and family reveal; all informants' accounts are constructions, and the number and kind of sources heard is a design decision of the assessment." },
    { category: "biological", factor: "Physical disease and comorbidity", details: "The disease level — the doctor's search for a pathological entity — demands the medical history, physical examination and laboratory investigations reserved to the medically qualified member; physical-cause disturbances demand diagnostic accuracy before anything else in the plan." },
    { category: "psychological", factor: "Life events and the life story", details: "Temporal relationships between events and onset (particularly if repeated) inform management and prognosis; patients' and families' causal attributions — the universal human assumption that illness follows unpleasant experience — are heard with respect while the clinician concludes by experience, common sense and research acquaintance; in some patients the psychodynamic interactions of events, relationships and personality are the paramount finding." },
  ],
  symptomClusters: [
    {
      category: "1. The complaints as they arrive",
      symptoms: ["Relationship problems, work failure, housing and money difficulties — the everyday matter the disorder arrives embedded in, which may cause, result from, or merely accompany it", "The presenting complaint is usually the functional interference, not the symptom", "The unvoiced fear of long-term dependence — interference with activities often matters more to the patient than the symptoms", "Lay illness language: 'mental illness', 'nervous breakdown', the family's 'is it a real illness?' asked in the patient's own terms"],
    },
    {
      category: "2. The signals of form",
      symptoms: ["Phobia, delusion, disorientation — the technical terms whose recognition identifies the disorder", "Disorientation to time: both symptom (contributing to dementia recognition) and impairment (disrupting the daily routine)", "Symptoms of form uncovered only by close questioning by someone who knows what to ask", "The interview's built-in tension: acknowledging distress while pursuing the questions that identify symptoms — a conflict of interest whose balancing is a core clinical skill"],
    },
    {
      category: "3. The disablement signals",
      symptoms: ["Inability to do everyday things — the activity restrictions of the ICF line", "Participation restrictions: work, relationships and community roles withdrawn", "Causality running both directions: bereavement, a lost relationship, causing disability and emotional impairment — and recovered patients refused work by prejudiced employers", "Terminological vigilance: impairment, disability and handicap are used interchangeably by different authors"],
    },
    {
      category: "4. The source and context signals",
      symptoms: ["Conflicting informants' accounts — expected, since all accounts are constructions; events corroborate across sources, subjective experiences differ", "Relatives attempting to arrange secret interviews — the privacy procedure tested at its weakest joint", "Absent fluency — the interpreter need the professional, same-sex rule serves", "Discomfort with one-to-one disclosure — the private interview between two strangers discussing intimate matters is a middle-class Western construct, not shared by all cultures"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The initial assessment (the Oxford chapter)",
      code: "The working apparatus",
      criteria: [
        "The aim stated first: a comprehensive plan for treatment and management with both short-term and longer-term components — not a diagnosis chased for its own sake.",
        "The three areas of special emphasis carried through: multi-disciplinary assessment (with its central diagnostic question for team disagreements — disease, illness or sickness?); the disease/illness/sickness trio; structured instruments (the schedules behind most clinical research, which clinicians must understand).",
        "The sequence run in order: collection (context-governed — venue, privacy, interpreters, sources), analysis (form/content/effects; subjective/objective; symptoms/impairments), synthesis (the formulation with the ICF line audited), review (the process that converts the assessment from event to continuing care).",
        "The products delivered: the formulation, the prognosis (outcome statements graded by confidence), and the written report (the formulation in the lead, the evidence behind it, the plan).",
        "Risk and dangerousness assessment completed — the psychiatrist's team-specific expertise; the plan is not written before it.",
      ],
      duration: "The initial assessment plus its reviews — assessment as process, not event: interval re-assessment of progress, added interventions, and toward episode-end global statements of improvement and quality of life from the patient's viewpoint.",
      indianNote: "In the district OPD the full sequence is compressed into minutes; the Indian survival set is the trio question (which converts the family's sickness agenda into the consultation's structure), the written plan (the continuity technology), and the home visit for the cases the OPD cannot see.",
    },
    {
      system: "The information rules",
      code: "Context, confidentiality, sources",
      criteria: [
        "Venue chosen deliberately: the clinic is not automatic — home interviews (patient and family at ease, richer information about circumstances, behaviour different from clinic, privacy harder, particular value in puerperal disorders) and primary-care premises (hospital aversion, GP consultation ease, the spreading consultant-liaison style) are serious options.",
        "The privacy and confidentiality procedure explained from the start: each party entitled to speak in private with confidence that nothing reaches the other unless requested; no interrogation of family members about their sessions (either direction); relatives' secret interviews firmly resisted.",
        "The interpreter rule: always sought when fluency is absent; a professional of the same sex as the patient, ideally a mental-health professional, always preferred to family members.",
        "Multiple sources heard: always an advantage for objective topics (events); clinical experience guides which account to use; serious conflicts resolved by obtaining more information, not early confrontation.",
        "Cultural framing respected: the private interview between two strangers discussing intimate and unpleasant matters freely is a middle-class Western construct; pre-interview consultation with a professional familiar with the patient's background clarifies what to aim for in intimate enquiry.",
      ],
      duration: "Applied throughout — the procedure explained at the start, not discovered at the breach.",
      indianNote: "The Indian sequence: family present, then the patient alone, then the family again for the plan — the culturally intelligent adaptation; the joint-family privacy problem solved by the negotiated private-room rule; bilingual professionals and Tele-MANAS's language-matching as the interpreter solutions.",
    },
    {
      system: "The multi-disciplinary apparatus",
      code: "Practice, teamwork and the reserved domains",
      criteria: [
        "The distinction held: multi-disciplinary practice (the consultant leads clinical meetings, decisions clearly the doctors' responsibility, other professionals welcomed but not necessary members) versus multi-disciplinary teamwork (significant time-commitment to team meetings, sharing of responsibilities, blurring of roles — most obvious in information-gathering and programme-planning — each member retaining parent-discipline skills).",
        "Leadership recognised: a leader keeps discussions brief and practical, facilitates decisions between reasonable alternatives and arbitrates insoluble disagreements — need not be a dominant speaker ('leading from behind'); in crisis, rehabilitation and ID teams the everyday leader need not be a doctor; acute-ward teams must accept free medical and nursing access to patients.",
        "The reserved domains kept medical: decisions about physical illness, medication and laboratory investigations can only be made by a medically qualified person; risk and dangerousness assessment and the formulation are the psychiatrist's team-specific expertise.",
        "Key workers/case managers allocated per patient, matching needs to skills — carrying the agreed programme's contacts and reporting progress and problems back to the team.",
        "Written care plans kept — a statutory responsibility in the UK, and the answer to the Indian continuity problem.",
        "Team maintenance run: tolerance of different viewpoints; meetings about policy, referrals, interpersonal problems and work-related stress (especially in crisis teams with rapid turnover); the line-management balance; students as observers, not members.",
      ],
      duration: "The team's standing architecture, not a meeting's agenda.",
      indianNote: "The DMHP district team (psychiatrist, social worker, nurse, community officer) is a young multidisciplinary team — the practice-versus-teamwork distinction, key-worker allocation and doctor-reserved domains map directly onto its teething problems.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Disease versus illness versus sickness (the trio as a working differential)", distinguishingFeatures: "Disease — the doctor's pathological entity; illness — the patient's subjective experience of symptoms and distress; sickness — the social recognition of role-interference by others. Team disagreements and family questions usually turn out to be two parties discussing different levels.", keyDifferentiator: "The clarifying question asked aloud: 'is this about disease, illness or sickness?' — the disagreement typically dissolves into legitimate differences of emphasis once the level is named: physical disease versus personal distress versus social interference." },
    { condition: "Symptom versus impairment (with disorientation as the double)", distinguishingFeatures: "Symptoms belong to the diagnostic line (disorder recognition); impairments belong to the ICF line (activity, participation). The presenting complaint is usually the functional interference; enquiry reveals the contents; close questioning uncovers the form.", keyDifferentiator: "Some findings are both: disorientation to time contributes to dementia recognition AND disrupts the daily routine — the assessment is incomplete until both lines are considered, with variable emphasis by patient and phase." },
    { condition: "Disorder versus diagnosis (Scadding's line)", distinguishingFeatures: "ICD-10 and DSM-IV present classifications of disorders — clinically recognizable sets of symptoms or behaviour associated in most cases with distress and interference with personal functions — because underlying causes are usually unknown; a diagnosis, strictly, indicates knowledge of something underlying.", keyDifferentiator: "'Criteria for the identification of disorders' is the honest label for diagnostic criteria; 'diagnosis' is reserved for the minority of instances — terminological honesty that protects against overclaiming while the formulation carries the person." },
    { condition: "Multi-disciplinary practice versus teamwork (the organisational differential)", distinguishingFeatures: "Practice: the consultant leads, decisions clearly the doctors' responsibility, other professionals welcomed but not necessary. Teamwork: time-committed team meetings, shared responsibilities, blurred roles in information-gathering and programme-planning, parent-discipline skills retained.", keyDifferentiator: "Decision ownership: physical illness, medication and investigations stay medical whatever the model; risk and the formulation are the psychiatrist's team-specific expertise; the everyday leadership (crisis, rehabilitation, ID teams) need not be a doctor." },
  ],
  management: [
    { category: "psychotherapy", name: "The interview craft — distress acknowledged, symptoms pursued", description: "Psychiatric key information arrives embedded in complaints about relationships, work, housing and money, which may cause, result from, or merely accompany the disorder. The interview's built-in tension is acknowledging distress while pursuing the questions that identify symptoms; learning to balance this conflict of interest is a core clinical skill. The discipline in practice: the presenting complaint is usually the functional interference; enquiry reveals the contents; close questioning by someone who knows what to ask uncovers the symptoms of form.", whenToUse: "Every assessment — the tension never resolves, only gets managed.", indianContext: "The OPD five-minute compression demands the trio question early: naming the disease/illness/sickness levels openly converts the family's agenda into the consultation's structure — the sickness questions asked aloud because they are the family's real questions." },
    { category: "psychotherapy", name: "The privacy and confidentiality procedure", description: "Explained from the start: patient and family members are each entitled to speak to the doctor in private, with confidence that nothing reaches the other unless requested; the patient agrees not to interrogate family members about their sessions and vice versa; relatives' attempts to arrange secret interviews are firmly resisted. These elementary-sounding points build the trust on which everything else runs — families may be in fear of each other's reactions to 'critical' statements more than they fear doctors.", whenToUse: "Every family-inclusive assessment, from the first minute.", indianContext: "The negotiated sequence — family present, then the patient alone, then the family again for the plan — is the culturally intelligent adaptation where private one-to-one disclosure is unfamiliar; the joint-family privacy problem is solved by the negotiated private-room rule." },
    { category: "service-design", name: "Venue selection — home and primary-care assessment", description: "The assessment is not automatically fixed in the clinic. Home interviews: patient and family at ease, richer information about circumstances, behaviour different from clinic — but privacy harder; particular value in puerperal disorders. Primary-care premises: for patients who dislike hospitals, with GP consultation ease and the spreading consultant-liaison style.", whenToUse: "Considered at every referral — the venue is a clinical decision, not a default.", indianContext: "Indian practice already home-assesses much of the time (families bring the clinic to the home; home visits in community programmes); the chapter's rationale applies verbatim — more revealing, less performative behaviour, privacy harder — and the Indian house call is the textbook's recommendation, not a compromise." },
    { category: "service-design", name: "The interpreter discipline", description: "Always sought when fluency is absent; mental-health professionals who can interpret are increasingly available in multi-minority services; a professional of the same sex as the patient is always preferred to family members — the confidentiality requirement, not a convenience. The companion caution: the private interview itself is a middle-class Western construct — pre-interview consultation with a professional familiar with the patient's background clarifies what to aim for in intimate enquiry.", whenToUse: "Whenever fluency is absent — no exceptions by seniority or time pressure.", indianContext: "In multilingual India the discipline is a real service constraint: professional interpreters are scarce and family translation is the default it warns against, with the confidentiality risks spelled out; bilingual professionals and Tele-MANAS's language-matching are the Indian solutions." },
    { category: "service-design", name: "The multi-disciplinary architecture — leadership, key workers, reserved domains", description: "Multi-disciplinary teamwork: significant time-commitment to team meetings, sharing of responsibilities and blurring of roles (most obvious in information-gathering and programme-planning), each member retaining parent-discipline skills. The recognised leader keeps discussions brief and practical, facilitates decisions between reasonable alternatives and arbitrates insoluble disagreements — leading from behind. Key workers carry the agreed programme's contacts and report back. The reserved domains stay medical: physical illness, medication and laboratory investigations; the psychiatrist's team-specific expertise is risk and dangerousness assessment and the formulation — the summarising skill that reflects team-agreed policy. Team maintenance: tolerance of different viewpoints; meetings about policy, referrals, interpersonal problems and work-related stress; the line-management balance (professional supervision versus team decision-making, minimised when members are senior); students as observers, not members.", whenToUse: "The standing architecture of every service; the doctor's reserved domains exercised at every decision point.", indianContext: "The DMHP district team (psychiatrist, social worker, nurse, community officer) is a young multidisciplinary team — the practice-versus-teamwork distinction, key-worker allocation and the doctor-reserved domains map directly onto its teething problems." },
    { category: "psychotherapy", name: "The ending skills — prognosis, reviews, reports", description: "The prognosis is formulated from the collected material with explicit uncertainty — outcome statements graded by confidence. Reviews convert assessment from event to process: interval re-assessment of progress, added interventions, and toward episode-end global statements of improvement and quality of life from the patient's viewpoint. Reports are written for their readers (referrers, courts, teams) — the formulation in the lead, the evidence behind it, the plan; the report is the assessment's public face, and its clarity is a clinical duty. The instrument literacy underneath: the structured interviews and rating schedules (the SCAN/CIDI/PSE lineage) behind most clinical research — their design logic and reliability disciplines understood, not administered.", whenToUse: "The closing movement of every assessment and every episode of care.", indianContext: "The written plan the family carries is the answer to the Indian continuity problem — records lost between clinics, follow-ups unbooked; the technology that never fails." },
  ],
  safety: {
    redFlags: [
      "Risk or dangerousness surfacing in any account — the psychiatrist's team-specific expertise and a medical decision; the plan waits for the risk statement",
      "Physical-cause disturbance suspected — the medical history, examination and investigations belong to the doctor's reserved domain; the disease line cannot be delegated",
      "Relatives attempting to arrange secret interviews — firmly resisted; the privacy procedure is the trust the whole assessment runs on",
      "A family member offered as the interpreter where fluency is absent — the confidentiality breach the professional, same-sex rule exists to prevent",
      "Serious conflicts between informants — resolved by obtaining more information, never early confrontation; confrontation belongs, if ever, to planned later interventions",
      "The unvoiced fear of long-term dependence — interference with activities often matters more to the patient than the symptoms; unasked, it stays unmanaged",
    ],
    urgentGuidance:
      "The risk-gated order of operations: (1) risk and dangerousness assessed first — the doctor-led statement the plan is not written without; (2) physical disease excluded within the reserved domain — medication and investigations decided by the medically qualified member alone; (3) the privacy procedure held — secret interviews refused, the interpreter discipline kept, because the trust architecture is the instrument the information runs through; (4) informant conflicts parked and more information sought — the accounts are constructions, corroboration is for events, and early confrontation sacrifices the assessment's later stages; (5) the formulation written before the plan — the synthesis that orders the disease, the illness, the sickness and the functioning into priorities is what makes the plan safe to follow.",
  },
  drugLinks: [],
  contentGaps: [
    "The structured-instrument tradition the note requires clinicians to be literate in — SCAN, CIDI, PSE: the design logic and reliability disciplines behind most clinical research — has no dedicated KYP lesson; the literacy is taught here.",
    "The behavioural-assessment chapter the note cross-references (its questionnaires and ratings) has no KYP counterpart — referenced, not duplicated.",
    "The Life Events and Difficulties Schedule methodology (Brown & Harris) — the research gold standard for tying events to onset, whose length illustrates the technical difficulty — has no KYP lesson; the clinical life chart is taught here as the approximation.",
    "Report-writing and the psychiatric record have no KYP lesson; the chapter's writing counsel (reports written for their readers, the formulation in the lead) is taught here.",
    "No medication is assigned a role by the note — drugLinks is empty by design; the medication decision appears only as one of the doctor's reserved domains, and every pharmacological route belongs to the disorder courses, never invented here.",
  ],
  patientGuide: {
    whatIsIt:
      "A psychiatric assessment is a set of careful conversations — with you, and usually with your family — through which a doctor works out what is wrong and what should be done. It is not a test you can pass or fail, nothing is 'wrong' to admit, and it does not end in a label alone: it ends in a plan — for the near future and the longer term — usually written down and explained to everyone you choose to have there.",
    whatCausesIt:
      "Assessments happen because something is interfering with life — mood, sleep, worries, drinking, memories, or behaviour others are frightened by — or because the family is worried and has questions the ordinary clinic could not answer. Often a life event sits behind it: a loss, a failure, a birth, a move. None of this means weakness; it means the picture needs mapping before anything is treated.",
    symptoms:
      "Expect to be asked about: how the trouble began and what has happened since; sleep, appetite, mood, worries and fears; your own account alone, and your family's account; the physical side (a check-up and any tests); what you can still do and what has stopped (work, study, relationships); medicines and any other remedies being taken; and — always, and asked of everyone — whether there has been any thought of harm. If language is a barrier, a professional interpreter of your own sex is arranged, not a relative.",
    treatment:
      "The output is the plan: what is happening (explained in words you can use), what will be done first (any treatment and medicines, and why), who is responsible for what (your named key worker where a team is involved), what the family should do, when the review is, and what to watch for meanwhile. The plan is reviewed — improved, changed or confirmed — at every follow-up: assessment is a process, not a one-day event.",
    selfHelp: [
      "Say it in your own words — the account only you can give changes the plan; the doctor's questions are the map, your words are the road.",
      "Ask for your time alone with the doctor if something is hard to say in front of the family — and let your family have theirs; nothing crosses between you unless you ask.",
      "Bring every remedy you are taking — tablets, tonics, temple or healer preparations — to be recorded, not judged; interactions are medical facts.",
      "Keep the written plan and carry it to every clinic — it is the record that survives lost files and unbooked follow-ups.",
      "Ask the sickness questions out loud — work, marriage, what people will say — they are as much part of the plan as the diagnosis.",
    ],
    whenToSeekHelp: [
      "Any thought of harming yourself, the baby after a birth, or anyone else — say it at the next contact or sooner; it is asked of everyone, and it is treatable",
      "The interference growing — stopping work or study, not eating, not sleeping, withdrawing from everyone",
      "The family frightened by behaviour they cannot name — an assessment sooner rather than after the rounds of rituals",
      "Confusion, disorientation or new physical signs alongside the mental ones — the physical examination is part of the same assessment",
      "The plan not working at review — reviews exist to change plans; that is not failure, it is the design",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — for distress, guidance on where to go, and language-matched first contact",
      "The district hospital psychiatry OPD under the DMHP — the assessment venue with a team behind it; the home visit can be requested where coming in is impossible",
      "The treating team's family session — ask for the visit where the plan is written and explained to everyone who cares for you",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs assessment conduct; practice follows the Oxford chapter's principles — the trio question, the privacy procedure, the interpreter rule, the written plan — with the DMHP's district-team architecture and Tele-MANAS's language-matching as the delivery spine the note itself names; the statutory written-plan discipline (UK) reads in India as the continuity solution, not a formality.",
    systemContext: "The Indian assessment is usually the family-accompanied district OPD consultation, compressed into minutes, with the family's first questions about sickness (will she marry, can he work, what will people say) and the doctor's answers about disease — the classic consultation-cross-purposes the trio names and resolves. Home assessment is already Indian practice (families bring the clinic to the home; home visits in community programmes), with the chapter's rationale applying verbatim: more revealing, less performative behaviour, privacy harder — solved by the negotiated private-room rule.",
    programmeContext: "The DMHP district team (psychiatrist, social worker, nurse, community officer) is a young multidisciplinary team — the chapter's practice-versus-teamwork distinction, key-worker allocation and doctor-reserved domains map directly onto its teething problems; Tele-MANAS 14416 provides the language-matched first contact the interpreter constraint needs.",
    costConsiderations: "Structural honesty: professional interpreters are scarce and their cost sits on services built without them; the home visit costs clinician time in short-staffed districts but saves the assessment the clinic cannot take; the written plan is the cheapest continuity technology in the system — the answer to records lost between clinics and follow-ups unbooked, the technology that never fails. The note records no cost figures and none are invented here.",
    culturalConsiderations: "The private one-to-one interview discussing intimate and unpleasant matters freely is a middle-class Western construct — unfamiliar to many Indian patients; the negotiated sequence (family present, then alone, then family again for the plan) is the culturally intelligent adaptation. The family's sickness question, the doctor's disease answer and the shrine's meaning answer are all real levels of one consultation once named; the lay illness vocabulary ('mental illness', 'nervous breakdown', the possession idioms) belongs to the standard information set, elicited respectfully.",
    patientCounselling: [
      "The trio script: 'Your family is asking about marriage and work — that is the sickness question, and it is as real as the disease I treat. The plan will answer both.'",
      "The privacy script: 'Each of you can speak to me alone, and nothing reaches the other unless you ask. Please don't question each other about your sessions — this is how everyone gets to speak honestly.'",
      "The alone-time script: 'We will talk with the family here, then you and I alone, then the family again for the plan — this order suits most households.'",
      "The interpreter script: 'We will arrange a professional interpreter of your own sex; your son is welcome in the room, but not as the voice of the conversation — what you say must stay between us.'",
      "The written-plan script: 'This paper carries the plan — the medicines, the next visit, what to watch for. Keep it and bring it to every clinic; it is the record that never gets lost.'",
      "The real-illness script: 'Is it a real illness? — the suffering is real, the disturbance has a name we treat, and the work and marriage questions are the sickness side we plan for too.'",
    ],
  },
  decisionPath: {
    title: "The risk-gated initial assessment — from first contact to the written plan",
    nodes: [
      {
        id: "start",
        question: "The initial assessment is under way — complaints collected from patient and family. What does the picture demand first?",
        branches: [
          { label: "The team disagrees about the case", next: "trio-gate" },
          { label: "Informants' accounts conflict seriously", next: "conflict-gate" },
          { label: "Risk or dangerousness surfaces", next: "risk-path" },
          { label: "None of these — the ordinary cascade", next: "cascade-gate" },
        ],
      },
      {
        id: "trio-gate",
        question: "The team disagreement. Ask the central diagnostic question: is this about disease, illness or sickness?",
        branches: [
          { label: "The row is about what is physically wrong", next: "disease-level" },
          { label: "The row is about what the patient suffers", next: "illness-level" },
          { label: "The row is about what she cannot do socially", next: "sickness-level" },
        ],
      },
      {
        id: "disease-level",
        question: "The disease level named.",
        recommendation: "The team is arguing about DISEASE — the doctor's pathological entity, is there something physical? The medical history, physical examination and laboratory investigations belong to the doctor's reserved domain, and the answer may be a treatable physical condition or its exclusion. Named as the level in play, the disagreement usually dissolves into legitimate differences of emphasis; the formulation then holds all three levels.",
      },
      {
        id: "illness-level",
        question: "The illness level named.",
        recommendation: "The team is arguing about ILLNESS — the patient's subjective experience of symptoms and distress. The psychological and nursing disciplines own this question, and the patient's own account — elicited under the privacy procedure — is the evidence. Named aloud, the disagreement dissolves into legitimate differences of emphasis; the formulation holds all three levels.",
      },
      {
        id: "sickness-level",
        question: "The sickness level named.",
        recommendation: "The team is arguing about SICKNESS — the social recognition of role-interference: what she cannot do socially — work, marriage, role. The social worker's question and the ICF's participation line — and in India the family's own first question. Named aloud, the disagreement dissolves into legitimate differences of emphasis; the formulation holds all three levels.",
      },
      {
        id: "conflict-gate",
        question: "Serious conflicts between informants' accounts. What now?",
        branches: [
          { label: "More sources reachable (another relative, the records, the GP or ASHA worker)", next: "more-info-path" },
          { label: "No further source available now", next: "park-it-path" },
        ],
      },
      {
        id: "more-info-path",
        question: "More information obtained.",
        recommendation: "The chapter's rule: conflicts are resolved by obtaining more information, not early confrontation. Objective topics (events) corroborate across sources; subjective accounts are constructions expected to differ; clinical experience guides which account to use meanwhile — and the conflict is recorded in the formulation until it resolves.",
      },
      {
        id: "park-it-path",
        question: "No further source available.",
        recommendation: "Park it: use clinical judgement on which account to weigh now, record the conflict openly, and keep collecting — confrontation, if ever, belongs to planned later interventions, never to the initial assessment. The accounts are constructions; the events will corroborate when the sources arrive.",
      },
      {
        id: "risk-path",
        question: "Risk or dangerousness has surfaced.",
        recommendation: "Risk first: the risk and dangerousness assessment runs now — the psychiatrist's team-specific expertise and a decision only the medically qualified member makes. The plan is not written until the risk statement is; safety arrangements (for the patient, and where relevant for others including children) precede every other priority.",
      },
      {
        id: "cascade-gate",
        question: "The ordinary cascade: complaints sorted into symptoms and impairments. Which line dominates?",
        branches: [
          { label: "Physical-cause disturbance dominates", next: "diagnostic-emphasis" },
          { label: "Socially-imposed disturbance dominates", next: "network-emphasis" },
          { label: "Mixed or unclear", next: "full-cascade" },
        ],
      },
      {
        id: "diagnostic-emphasis",
        question: "The diagnostic line leads.",
        recommendation: "The left pathway — toward disorder and possible diagnosis: diagnostic accuracy demanded; the form of the symptoms identified by close questioning by someone who knows what to ask; treatments and outcomes following; the physical side excluded within the doctor's reserved domain; the disablement line still audited before the plan is written.",
      },
      {
        id: "network-emphasis",
        question: "The disablement line leads.",
        recommendation: "The right pathway — from impairment through disability to participation restriction: network and relationship assessment, the ICF and Nagi frameworks as the team's checklists, disciplines mapped to concepts. The diagnostic label adds little here — the socially-imposed disturbance is the target, and the plan is written on the participation line.",
      },
      {
        id: "full-cascade",
        question: "Both lines in play.",
        recommendation: "Both considered with variable emphasis by patient and phase — the assessment incomplete until diagnostic and disablement sides are both in the formulation. Then the ending skills: prognosis stated with explicit uncertainty and confidence-graded outcome statements; the written plan (the Indian family's continuity technology); the review that converts assessment from event to process; the report written for its readers — the formulation in the lead.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Chasing the label — treating diagnosis as the assessment's product",
      why: "In psychiatry the diagnosis usually states no more than the resemblance to a previously recognized pattern (Scadding: 'may' becomes 'usually'); ICD-10 and DSM-IV classify disorders, not underlying diseases — a label chased for its own sake overclaims and leaves the person unexplained.",
      correction: "The formulation as the fuller truth: the synthetic summary ordering attributes, problems, disorders and context into the plan — the diagnostic term is one part of what the assessment produces.",
    },
    {
      mistake: "Skipping the privacy and confidentiality procedure",
      why: "Families are in fear of each other's reactions to 'critical' statements more than they fear doctors; without the procedure the alone-time never happens and the most important information stays unsaid.",
      correction: "Explain from the start: each party may speak in private, nothing crosses unless requested, neither interrogates the other, and relatives' secret-interview attempts are firmly refused.",
    },
    {
      mistake: "Letting a family member interpret",
      why: "The interpreter is inside the family dynamics the privacy procedure exists to protect against; the translation is filtered and the disclosure curtailed — a confidentiality matter, not a convenience.",
      correction: "A professional of the same sex as the patient, ideally a mental-health professional; bilingual professionals and Tele-MANAS language-matching where professionals are scarce; the family welcomed in the room but never as the voice.",
    },
    {
      mistake: "Confronting conflicting accounts early",
      why: "All informants' accounts are constructions; early confrontation sacrifices trust and the assessment's later stages for a premature resolution nobody owns.",
      correction: "Obtain more information — another relative, the records, the GP or the community worker; clinical experience guides which account to use meanwhile; confrontation, if ever, belongs to planned later interventions.",
    },
    {
      mistake: "Stopping at the diagnostic line — ignoring disablement",
      why: "Interference with activities often matters more to the patient than the symptoms — the unvoiced fear of long-term dependence; and causality runs both directions, so the untreated participation restriction feeds back into the disorder.",
      correction: "The ICF and Nagi frameworks as team checklists: impairments, activity limitations and participation restrictions described at every assessment, disciplines mapped to concepts, both lines in the formulation.",
    },
    {
      mistake: "Blurring the medical domain in the name of teamwork",
      why: "Shared responsibilities and role-blurring apply to information-gathering and programme-planning — not to physical illness, medication, laboratory investigations or risk; the blunder is both an ethical and a legal exposure.",
      correction: "The reserved domains kept medical: the medically qualified member decides; risk and dangerousness assessment and the formulation are the psychiatrist's team-specific expertise; leadership need not be a doctor, but these decisions are.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "State the aim of the initial psychiatric assessment, and the chapter's three areas of special emphasis — multi-disciplinary assessment, the disease/illness/sickness trio, and structured instruments.",
        "Define disease, illness and sickness; give the team-disagreement question verbatim and explain why the disagreement dissolves once the level is named.",
        "The form/content/effects sort — with the disorientation-to-time example that is both symptom and impairment.",
        "Scadding's dictum and the disorders-not-diagnoses position of ICD-10 and DSM-IV — and the two counts on which the anti-diagnosis position fails.",
        "The privacy procedure's three rules; the interpreter rule; the cultural caution about the private interview.",
      ],
      practical: [
        "Conduct and present an initial psychiatric assessment: the privacy procedure explained, the complaints sorted into form/content/effects, and a formulation with short- and longer-term plan and a confidence-graded prognosis.",
        "Present a conflicting-informants case: which account is used meanwhile, why early confrontation is avoided, and how more information resolves the conflict.",
      ],
      longAnswer: [
        "The initial psychiatric assessment: aim, the sequence (collection, analysis, synthesis, review), the components of the formulation — with the disease/illness/sickness trio as the organising frame.",
        "Multi-disciplinary teamwork in psychiatry: practice versus teamwork, leadership, key workers, the doctor's reserved domains — and the contextual rules of assessment (venue, privacy, interpreters, cultural framing, multiple sources).",
      ],
    },
    neetPg: {
      highYield: [
        "THE AIM: a comprehensive plan for treatment and management with both short-term and longer-term components — not a diagnosis chased for its own sake.",
        "THE TRIO: disease (the doctor's pathological entity), illness (the patient's experience of symptoms and distress), sickness (the social recognition of role-interference) — with the team-disagreement question verbatim: 'is this about disease, illness or sickness?'",
        "THE SORT: form identifies the disorder; content reveals current concerns; effects on functioning determine management and grade severity — the presenting complaint is usually the functional interference.",
        "SCADDING'S DICTUM: a diagnosis may state no more than the resemblance of symptoms and signs to a previously recognized pattern — in psychiatry 'may' becomes 'usually'; ICD-10 and DSM-IV are classifications of DISORDERS (clinically recognizable syndromes with distress and interference with personal functions), not of diagnoses.",
        "THE HONEST TERMINOLOGY: 'diagnostic criteria' are better labelled 'criteria for the identification of disorders'; 'diagnosis' is reserved for the minority of instances indicating knowledge of something underlying.",
        "THE TWO FRAMEWORKS: the ICF (functioning, disability, contextual factors — environmental and personal) and Nagi's similar US scheme — descriptive conceptual frameworks used as team checklists, mapping social workers to work and relationships, occupational therapists to daily activities, psychologists to cognitive functions.",
        "THE SEQUENCE: collection, analysis, synthesis, review — complaints sorted into symptoms and impairments, then the two pathways (toward disorder and possible diagnosis; from impairment through disability to participation restriction); the assessment is incomplete until both sides are considered.",
        "THE VENUES: home interviews (patient and family at ease, richer circumstances, behaviour different from clinic, privacy harder, particular value in puerperal disorders) and primary-care premises (hospital aversion, GP-adjacency, the consultant-liaison style).",
        "THE THREE PRIVACY RULES: each party may speak to the doctor in private with confidence nothing reaches the other unless requested; no interrogation of family members about their sessions (either direction); relatives' secret interviews firmly resisted.",
        "THE INTERPRETER RULE: a professional of the same sex as the patient, ideally a mental-health professional — never a family member by default (confidentiality).",
        "THE RESERVED DOMAINS: physical illness, medication and laboratory investigations decided only by a medically qualified person; risk and dangerousness assessment and the formulation the psychiatrist's team-specific expertise — while information-gathering and programme-planning blur.",
      ],
      pyqConcepts: [
        "The disease/illness/sickness trio as the team-disagreement question — the single most examined line of this territory.",
        "ICD-10 and DSM-IV as classifications of disorders — the Scadding 'may becomes usually' consequence and the honest terminology that follows.",
        "Multi-disciplinary practice versus teamwork — decision ownership, role blurring and the doctor's reserved domains.",
        "The interpreter of choice — professional and same-sex — with the confidentiality reasoning behind it.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 45-year-old man with a fifteen-year psychotic illness attends the district OPD with his brother: the social worker's notes emphasise the lost job and the marriage that never happened, the nurse's notes the stopped medication and the disturbed nights, and the resident presents the case as treatment-resistant schizophrenia; the consultant asks one question — 'is this about disease, illness or sickness?' — and the meeting reorganises. The disease question (is the medication adequate, is there a physical contributor?) belongs to the doctor's reserved domain; the illness question (what does he suffer — the voices, the demoralisation) to the psychological and nursing disciplines with the patient's own account; the sickness question (the job, the marriage, what the village says) to the social worker and the family. The disagreement dissolves into legitimate differences of emphasis — two disciplines answering different questions — the formulation holds all three levels, and the plan that follows orders a medication review, a sleep intervention and a vocational referral in one document. The teaching: the trio is not philosophy; it is the fastest case-management instrument in general psychiatry, and the formulation is what makes it a plan.",
        "A 28-year-old woman, three weeks postpartum, is reported by the family as 'not bonding' and 'saying strange things at night'; the mother-in-law's account is possession ('my own daughter had the same after her first child, and the pujari fixed it'), the husband's is failure and guilt. The district psychiatrist makes a home visit rather than insisting on the OPD — patient and family at ease, the behaviour visible in context (she sits facing away from the cradle, checks the door twice), the joint-family privacy problem solved by the negotiated private-room rule. Alone with her, the intrusive thoughts of the baby coming to harm at her own hands surface — denied urges, wept over, 'unsayable in front of them'; the conflicting accounts are parked and more information sought from the ASHA worker rather than confronted; the risk assessment runs before the plan (mother-baby safety arranged, the doctor's domain); the formulation — postpartum depression with intrusive harm thoughts on a substrate of the husband's absence and the household's verdict — is delivered with the mother-in-law's model respected rather than ridiculed, and the written plan is left in the family's hands with the review date. The teaching: the venue, the privacy procedure, the conflict rule and the risk gate are one method — and the home visit in the puerperium is the textbook's own recommendation, not a compromise.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The aim of the initial assessment = the comprehensive treatment and management plan, short-term and longer-term components.",
        "ICD-10 and DSM-IV classify disorders — clinically recognizable syndromes with distress and dysfunction, causes usually unknown.",
        "The interpreter of choice: a professional of the same sex as the patient — not a family member.",
        "Decisions on physical illness, medication and investigations: the medically qualified person only.",
        "The formulation = the synthetic summary, reflecting team-agreed policy — the psychiatrist's signature contribution to the multi-disciplinary assessment.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The trio is the Indian consultation's missing instrument: the family asks sickness (marriage, work, what people say), you answer disease, the shrine has answered meaning — name all three levels aloud and the cross-purposes become one conversation; it is also the fastest team-meeting instrument you own.",
        "The formulation is your signature contribution — the synthetic summary reflecting team-agreed policy that orders attributes, problems, disorders and context into a plan; the label identifies a pattern, the formulation explains the person, and the team can only share what you make legible.",
        "Leadership is a function, not a personality: keep the discussion brief and practical, facilitate the decision between reasonable alternatives, arbitrate the insoluble — and lead from behind; in crisis, rehabilitation and ID teams the everyday leader need not be a doctor, but physical illness, medication, investigations and risk stay medical, always.",
        "Reports are the assessment's public face: written for their readers — referrer, court, team — the formulation in the lead, the evidence behind it, the plan; clarity is a clinical duty, and the written plan the family carries is the Indian continuity technology that never fails.",
        "Instrument literacy without administration: the SCAN/CIDI/PSE lineage stands behind most of the research you read — know the design logic and the reliability disciplines (with Sartorius & Janca's cross-cultural standardisation caveat) so that the shortest sentence in a paper does not pass you by.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The OPD five minutes and the three questions",
      presentation: "A five-minute district OPD slot, a family asking sickness questions, a doctor answering disease — and the trio question that turned the consultation-cross-purposes into a plan.",
      initialPresentation: "A 26-year-old engineering graduate brought to the district psychiatric OPD by his father and uncle, six weeks after he stopped attending his coaching classes, stopped eating with the family and began talking to himself at night. The father's opening question was not about symptoms: 'Doctor, will he be able to sit the exam in March? What will people say if this comes out?' The uncle had already consulted a temple and an astrologer.",
      history: "No prior psychiatric contact. Sleep disturbed with late-night talking; withdrawal from friends; a close attachment to a coaching-class peer the family had disapproved of had ended two months before onset (the life event recorded for the chart). Cannabis use denied both with the father present and alone; the ended attachment was disclosed only when the patient was seen alone (the privacy procedure's yield). No physical complaints; no past medical history of note; family history of an uncle treated for a 'nervous breakdown' in the mother's telling — the lay illness model noted as part of the standard information set.",
      examination: "Mental state between the family's account and the patient's own. Form — auditory hallucinations in the second and third person at night, referential thinking about the coaching class (close questioning by someone who knew what to ask); content — the voices spoke of the failed friendship and the exam; effects — classes abandoned, meals taken alone, weight down; insight partial; no disorientation. Physical examination normal; no investigations indicated beyond baseline.",
      diagnosis: "First-episode psychotic disorder (the form identified), formulated on the impairment line as exam participation restriction and on the sickness line as the marriage-and-work question the family actually asked — the formulation holding all three levels.",
      management: "The trio named openly at the family meeting: your questions are about sickness — will he work, will people say; my answer is about disease — the pattern I treat; the shrine's answer was about meaning; all three are real, and the plan answers all three. Short-term plan: antipsychotic treatment initiation, sleep restoration, family psychoeducation session booked. Longer-term plan: graded return to study, review at two weeks, the key worker named (the community officer), and the written plan handed to the father — the medicines, the next visit, what to watch for — the record that does not get lost between clinics.",
      outcome: "Symptoms settling over the following weeks with medication; the family, having had the sickness question answered inside the plan, kept every appointment; the exam was deferred by choice rather than by illness at the March review — the participation line re-assessed, not assumed.",
      teachingPoints: [
        "The trio converts the Indian consultation-cross-purposes: the family asked sickness, the doctor answered disease, the shrine had answered meaning — naming the three levels openly made one conversation of three.",
        "The presenting complaint was the functional interference (classes abandoned); the contents came out in enquiry; the form came out only under close questioning by someone who knew what to ask.",
        "The privacy procedure paid inside five minutes: the ended attachment and the true sleep pattern surfaced only when the patient was seen alone.",
        "The written plan was the continuity technology — the family carried the record between clinics, and the follow-up was never lost.",
      ],
    },
    {
      title: "The home visit that changed the formulation",
      presentation: "A puerperal home assessment in a joint family — the venue that let the behaviour be seen, the privacy rule that let it be spoken of, and the conflict resolved by more information instead of a quarrel.",
      initialPresentation: "A 28-year-old woman, three weeks after her first delivery, referred by the ASHA worker because she 'was not bonding' with the baby and 'said strange things' at night. The district psychiatrist's home visit was arranged because the family would not bring her to the hospital — the chapter's own rationale: home interviews for patient and family at ease, with particular value in puerperal disorders.",
      history: "Sleepless since the delivery, refusing to hand the baby to the mother-in-law, heard speaking to no one at night. The mother-in-law's account ('she is possessed — my own daughter had the same after her first child and the pujari fixed it') and the husband's account ('she keeps saying she has failed everyone') conflicted from the first minute. First pregnancy; arranged marriage of two years; the husband away for work in the city for the month before the delivery (the life event recorded for the chart); no past psychiatric history; the baby healthy.",
      examination: "At home the behaviour the OPD would never have shown: she sat facing away from the baby's cradle, answered in short sentences, checked the door twice during the interview. Alone with the psychiatrist — the negotiated private-room rule solving the joint family's privacy problem — she disclosed intrusive thoughts of the baby coming to harm at her own hands, denied any urges to act, and wept that she could not say this in front of them. No delusions elicited; mood low; insight into the thoughts being her own. Risk assessed before leaving the house.",
      diagnosis: "Postpartum depressive disorder with intrusive harm thoughts (the form), formulated on the illness line with the mother-in-law's possession model noted respectfully as the family's explanatory frame, the sickness line (the household's verdict on a mother who 'does not bond') and the risk line (intrusive thoughts without urges — mother and baby safety planned, not assumed).",
      management: "The conflicting accounts parked, not confronted: the ASHA worker and the anganwadi teacher approached for more information over the following week (the chapter's rule — conflicts are resolved by obtaining more information, not early confrontation); the mother-in-law engaged through her own daughter's history rather than against her belief; antidepressant treatment started after physical causes were excluded within the doctor's reserved domain; the husband brought back for the plan; the key worker (the community officer) assigned for the weekly home reviews; the written plan left with the family — the baby-safety arrangements and the date of the psychiatrist's return visit included.",
      outcome: "The intrusive thoughts faded over six weeks as the depression lifted under treatment and the home reviews continued; the mother-in-law became the appointment-keeper once the plan acknowledged her experience rather than ridiculing it; the formulation — not the label — was what the family said they had been given.",
      teachingPoints: [
        "The venue earned the diagnosis: the door-checking, the seat facing away from the cradle and the alone-room disclosure are behaviours the clinic suppresses — the home interview's documented advantage, at its particular value in puerperal disorders.",
        "The negotiated private-room rule solved the joint family's privacy problem — the Western private interview adapted, not imposed.",
        "The informant conflict (possession versus failure) resolved by more information — the ASHA and anganwadi sources — and by respecting the mother-in-law's model while treating the disorder; confrontation was never needed.",
        "The risk gate ran inside the home visit: intrusive harm thoughts without urges still got a safety plan — the doctor's reserved domain exercised at the door.",
      ],
    },
  ],
  clinicalPearls: [
    "The plan, not the label, is the product: the initial assessment aims at a comprehensive treatment and management plan with short- and longer-term components.",
    "Disease, illness, sickness — the doctor's entity, the patient's experience, the social role-interference; when the team argues, ask which of the three is being discussed and the disagreement dissolves into legitimate differences of emphasis.",
    "Form identifies the disorder, content reveals current concerns, effects on functioning determine management — the presenting complaint is usually the functional interference, not the symptom.",
    "Disorientation to time is both symptom and impairment — contributing to dementia recognition and disrupting the daily routine; the two lines of the cascade in one sign.",
    "Scadding's dictum, psychiatric edition: 'may' becomes 'usually' — ICD-10 and DSM-IV are classifications of disorders, and 'criteria for the identification of disorders' is the honest label for what we call diagnostic criteria.",
    "All human groups expect healers to discover causes and provide remedies — the relief at an official pronouncement is universal, and it grows when the terms are understandable.",
    "The privacy procedure is the trust architecture: each party speaks in confidence, neither interrogates the other, and secret interviews are firmly resisted — families fear each other's reactions more than they fear doctors.",
    "The interpreter rule: professional, same sex as the patient, never a family member by default — a confidentiality matter, not a convenience.",
    "The private interview between two strangers discussing intimate matters freely is a middle-class Western construct — pre-interview consultation with someone who knows the culture clarifies what to aim for.",
    "Conflicting accounts are resolved by obtaining more information, never early confrontation — confrontation belongs, if ever, to planned later interventions.",
    "Leadership need not be the loudest voice: a recognised leader keeps discussions brief and practical, facilitates decisions between reasonable alternatives and arbitrates the insoluble — leading from behind.",
    "Decisions about physical illness, medication and investigations can only be made by a medically qualified person; risk and dangerousness assessment and the formulation are the psychiatrist's team-specific expertise.",
  ],
  highYieldSummary: [
    "THE AIM AND THE ARCHITECTURE: the initial psychiatric assessment aims at a comprehensive plan for treatment and management with both short-term and longer-term components — the plan, not the label, is the product. The chapter's three areas of special attention: multi-disciplinary assessment (with its central diagnostic question for team disagreements — is this about disease, illness or sickness?); the disease/illness/sickness trio (the doctor's pathological entity, the patient's subjective experience of symptoms and distress, the social role-interference recognised by others); and structured instruments (the schedules behind most clinical research and service development, which clinicians must understand). The sequence: collection, analysis, synthesis, review — the from-complaints-to-formulation cascade; the products: the formulation, the prognosis and the written report.",
    "THE CONCEPTS: form/content/effects — the form (phobia, delusion) identifies the disorder, the content reveals current concerns, the effects on functioning determine management and grade severity; the presenting complaint is usually the functional interference. Subjective and objective information — events (potentially corroborable across multiple sources), subjective experience, observation, interpretation — with the reminder that all informants' accounts are constructions. The trio in daily use and in history: Lewis and Wootton's definitional debates; the multi-dimensional resolutions (more than one aspect, the disease level not always the best explanatory level — Taylor's account of symptoms and distress); the lineage through Susser's dimensions. The family's 'is it a real illness?', asked in the patient's own terms, anticipated in every initial assessment; lay illness models and culturally-shaped illness behaviour belong to the standard information set.",
    "THE DIAGNOSTIC PROCESS, HONESTLY: Scadding's dictum — a diagnosis may state no more than the resemblance of the symptoms and signs to a previously recognized pattern; in psychiatry 'may' becomes 'usually'. ICD-10 ('clinically recognizable set of symptoms or behaviour associated in most cases with distress and interference with personal functions') and DSM-IV ('clinically significant behavioural or psychological syndrome... associated with present distress or disability') are classifications of disorders, not of diagnoses; 'criteria for the identification of disorders' is the honest label, 'diagnosis' reserved for the minority of instances indicating knowledge of something underlying. The patient expectation stands — all human groups expect healers to discover causes and provide remedies, the relief at an official pronouncement is universal, and its explanatory power grows when the terms are understandable (a major reason for the survival of ethnic and complementary healers, who provide a meaning-rich diagnosis). Menninger's anti-diagnosis position fails on two counts: the diagnostic term is only one part of an assessment that also produces a personal formulation; and any assessment of a person is unavoidably an act of classification.",
    "DISABLEMENT AND THE CASCADE: interference with activities often matters more to the patient than the symptoms — the unvoiced fear of long-term dependence. Two frameworks: the ICF (functioning, disability, contextual factors — environmental and personal) and Nagi's similar US scheme — descriptive conceptual frameworks rather than classifications, best used as team checklists mapping disciplines to concepts (social workers to work and relationships, occupational therapists to daily activities, psychologists to cognitive functions); causality runs both directions (bereavement causing disability and emotional impairment; recovered patients refused work by prejudiced employers); impairment, disability and handicap are used interchangeably by different authors — terminological vigilance. The cascade: complaints sorted into symptoms and impairments (disorientation to time is both) — the left pathway toward disorder and possible diagnosis (treatments, outcomes) and the right pathway from impairment through disability to participation restriction; the assessment is incomplete until both sides are considered, with physical-cause disturbances demanding diagnostic accuracy and socially-imposed disturbances demanding network and relationship assessment, the label adding little. Life events and the life chart (Brown & Harris's LEDS the research gold standard, its length illustrating the technical difficulty); causal attributions heard with respect; psychodynamics and the life story — in some patients the paramount finding, indicating specialist psychotherapy referral.",
    "CONTEXT, CONFIDENTIALITY, CULTURE: the assessment is not automatically fixed in the clinic — home interviews (patient and family at ease, richer information about circumstances, behaviour different from clinic; privacy harder; particular value in puerperal disorders) and primary-care premises (patients who dislike hospitals; GP consultation ease; the spreading consultant-liaison style). The privacy and confidentiality procedure explained from the start: each party entitled to speak in private, confidence that nothing reaches the other unless requested, no interrogation of family members about sessions (either direction), relatives' secret interviews firmly resisted — families may be in fear of each other's reactions to 'critical' statements, and these elementary-sounding points build the trust everything else runs on. Interpreters: always sought when fluency is absent; a professional of the same sex as the patient, ideally a mental-health professional, always preferred to family members. Cultural framing: the private interview between two strangers discussing intimate and unpleasant matters freely is a middle-class Western construct — pre-interview consultation with a professional familiar with the background clarifies what to aim for. Multiple sources are always an advantage for objective topics; serious conflicts are resolved by obtaining more information, not early confrontation.",
    "THE MULTI-DISCIPLINARY ARCHITECTURE AND THE ENDING SKILLS: practice (the consultant leads, decisions clearly the doctors' responsibility, other professionals welcomed but not necessary members) versus teamwork (significant time-commitment to meetings, sharing of responsibilities, blurring of roles — most obvious in information-gathering and programme-planning — each member retaining parent-discipline skills; evolved with the growth of social workers, OTs and psychologists). Leadership: a recognised leader keeps discussions brief and practical, facilitates decisions between reasonable alternatives, arbitrates insoluble disagreements — need not be a dominant speaker ('leading from behind'); in crisis, rehabilitation and ID teams the everyday leader need not be a doctor, and acute-ward teams must accept free medical and nursing access. Key workers/case managers: allocated per patient, matching needs to skills, carrying the agreed programme's contacts, reporting progress and problems back. Written care plans: a statutory responsibility (UK). The doctor's reserved domains: physical illness, medication and laboratory investigations — only the medically qualified; the psychiatrist's team-specific expertise: risk and dangerousness assessment and the formulation. Team maintenance: tolerance of different viewpoints; meetings about policy, referrals, interpersonal problems and work-related stress; students as observers, not members. Then the ending skills: prognosis formulated with explicit uncertainty, outcome statements graded by confidence; reviews converting assessment from event to process (interval re-assessment, added interventions, episode-end global statements of improvement and quality of life from the patient's viewpoint); reports written for their readers — the formulation in the lead, the evidence behind it, the plan — with clinician literacy in the structured-instrument tradition (SCAN/CIDI/PSE; Sartorius & Janca's cross-cultural standardisation) required.",
    "THE INDIA LAYER: the trio is THE Indian consultation tool — the family asks sickness questions (will she marry? can he work? what will people say?), the doctor answers disease, the shrine answers meaning; naming the three levels openly converts the classic consultation-cross-purposes into a coherent conversation. Home assessment is already Indian practice (families bring the clinic to the home; home visits in community programmes), with the joint-family privacy problem solved by the negotiated private-room rule. The interpreter rule is a real service constraint in multilingual India — professional interpreters scarce, family translation the default it warns against; bilingual professionals and Tele-MANAS's language-matching are the Indian solutions. The private-interview cultural caution is the Indian clinic's daily reality — the negotiated sequence (family present, then alone, then family again for the plan) the intelligent adaptation. The DMHP district team (psychiatrist, social worker, nurse, community officer) is a young multidisciplinary team the chapter's distinctions map directly onto. The statutory care-plan discipline is the answer to the Indian continuity problem (records lost between clinics, follow-ups unbooked) — a written plan the family carries is the technology that never fails.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pa-quiz-1",
      question: "The aim of the initial psychiatric assessment is:",
      options: ["A definitive diagnosis only", "A comprehensive plan for treatment and management with both short-term and longer-term components", "A research dataset", "A prescription"],
      correctIndex: 1,
      explanation: "The chapter's opening statement: the plan, not the label, is the product — the diagnostic term is only one part of what the assessment produces.",
      afterSectionId: "mechanism",
    },
    {
      id: "pa-quiz-2",
      question: "In the form/content/effects sort, which element identifies the disorder?",
      options: ["The content — what the delusion is about", "The effects on functioning", "The form — the technical term for the recurring pattern", "The presenting complaint"],
      correctIndex: 2,
      explanation: "The form (phobia, delusion) identifies the disorder; the content reveals current concerns; the effects on functioning determine management and grade severity — and the presenting complaint is usually the functional interference.",
      afterSectionId: "symptoms",
    },
    {
      id: "pa-quiz-3",
      question: "In team disagreements, the recommended clarifying question is whether the discussion concerns:",
      options: ["The budget, the roster or the menu", "The patient's possible physical disease, the patient's experience of symptoms and distress, or the interference with social activities", "The doctor's preference", "The referral letter's wording"],
      correctIndex: 1,
      explanation: "The disease/illness/sickness trio — disagreements typically dissolve into legitimate differences of emphasis once the level is named: physical disease versus personal distress versus social interference.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pa-quiz-4",
      question: "ICD-10 and DSM-IV are, strictly, classifications of:",
      options: ["Diseases with known causes", "Disorders — clinically recognizable syndromes with distress and dysfunction, causes usually unknown", "Personality types", "Treatments"],
      correctIndex: 1,
      explanation: "Scadding's dictum applied: in psychiatry the diagnosis usually states no more than the resemblance to a previously recognized pattern — hence 'criteria for the identification of disorders' as the honest label.",
      afterSectionId: "differential",
    },
    {
      id: "pa-quiz-5",
      question: "For a patient who lacks fluency in the interviewer's language, the preferred interpreter is:",
      options: ["The patient's husband", "A professional of the same sex as the patient, ideally a mental health professional", "The youngest available relative", "Another patient"],
      correctIndex: 1,
      explanation: "Confidentiality requires a professional outside the family, and the same-sex preference follows from the same protection — in multilingual India, where professionals are scarce, bilingual professionals and Tele-MANAS's language-matching are the solutions; family translation is the default the rule warns against.",
      afterSectionId: "indian-practice",
    },
    {
      id: "pa-quiz-6",
      question: "In multi-disciplinary teamwork (as opposed to practice), decisions about the presence of physical illness and the need for medication or investigations:",
      options: ["Are voted on by all members equally", "Can only be made by a medically qualified person, owing to unique ethical and legal responsibilities", "Are delegated to the key worker", "Are decided by the social worker"],
      correctIndex: 1,
      explanation: "Role-blurring notwithstanding, the medical domain stays medical — one of the chapter's structural rules of teamwork; risk and the formulation are the psychiatrist's team-specific expertise.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "State the aim of the initial psychiatric assessment and the chapter's three areas of special emphasis.", answer: "THE AIM: a comprehensive plan for treatment and management with both short-term and longer-term components — the plan, not the label, is the product. THE THREE EMPHASES: (1) multi-disciplinary assessment, whose central diagnostic question for team disagreements is 'is this about disease, illness or sickness?'; (2) the disease/illness/sickness trio — disease the doctor's pathological entity, illness the patient's subjective experience of symptoms and distress, sickness the social role-interference recognised by others; (3) structured instruments — the schedules behind most clinical research and service development, whose design logic and reliability disciplines clinicians must understand.", topic: "Foundations" },
    { question: "Define disease, illness and sickness, and give the team-disagreement question verbatim.", answer: "DISEASE: the doctor's pathological entity. ILLNESS: the patient's subjective experience of symptoms and distress. SICKNESS: the social recognition of role-interference. THE QUESTION: 'Is this about disease, illness or sickness?' — when team members disagree, asking which of the three is being discussed usually dissolves the disagreement into legitimate differences of emphasis (physical disease versus personal distress versus social interference). HISTORICAL WEIGHT: the definitional debates of Lewis and Wootton; the multi-dimensional resolutions — more than one aspect, the disease level not always the best explanatory level (Taylor's account of symptoms and distress); the lineage through Susser's dimensions.", topic: "The trio" },
    { question: "Explain the form/content/effects sort, with the disorientation example.", answer: "FORM: the technical term (phobia, delusion) identifying a recurring pattern known to matter — it identifies the disorder. CONTENT: what the phobia is of, what the delusion says — it reveals current concerns. EFFECTS ON FUNCTIONING: they determine management and grade severity. THE PRESENTING COMPLAINT is usually the functional interference; enquiry reveals the contents; close questioning by someone who knows what to ask uncovers the symptoms of form. THE DISORIENTATION EXAMPLE: disorientation to time is a symptom (contributing to dementia recognition) AND an impairment (disrupting the daily routine) — some findings serve both lines of the cascade, which is why the assessment is incomplete until both are considered.", topic: "The sort" },
    { question: "State Scadding's dictum and the disorders-not-diagnoses consequence — and why the anti-diagnosis position fails.", answer: "SCADDING (from general medicine): a diagnosis 'may state no more than the resemblance of the symptoms and signs to a previously recognized pattern'. IN PSYCHIATRY 'may' BECOMES 'usually' — acknowledged by ICD-10 ('clinically recognizable set of symptoms or behaviour associated in most cases with distress and interference with personal functions') and DSM-IV ('clinically significant behavioural or psychological syndrome... associated with present distress or disability'), which present classifications of DISORDERS, not of diagnoses. TERMINOLOGY: 'diagnostic criteria' are better labelled 'criteria for the identification of disorders'; 'diagnosis' is reserved for the minority of instances indicating knowledge of something underlying. WHY THE PATIENT EXPECTATION STANDS: all human groups expect healers to discover causes and provide remedies — the relief at an official pronouncement is universal, and its explanatory power grows when the terms are understandable (a major reason for the survival of ethnic and complementary healers, who provide a meaning-rich diagnosis). WHY MENNINGER'S ANTI-DIAGNOSIS POSITION FAILS: (1) the diagnostic term is only one part of the assessment, which also produces a personal formulation; (2) any assessment of a person is unavoidably an act of classification.", topic: "The diagnostic process" },
    { question: "Recite the ICF/Nagi levels and the discipline mapping.", answer: "THE ICF: functioning, disability and contextual factors (environmental and personal); NAGI's similar US scheme runs parallel. Both are descriptive conceptual frameworks rather than classifications, best used as TEAM CHECKLISTS ensuring all effects have been considered. THE DISCIPLINE MAPPING: social workers to work and relationships; occupational therapists to daily activities; psychologists to cognitive functions. CAUSALITY RUNS BOTH DIRECTIONS: bereavement, a lost relationship, causing disability and emotional impairment — and recovered patients refused work by prejudiced employers. TERMINOLOGICAL VIGILANCE: impairment, disability and handicap are used interchangeably by different authors.", topic: "Disablement" },
    { question: "Walk the complaints-to-formulation cascade, and say which patients need which side emphasised.", answer: "THE CASCADE: complaints (unpleasant symptoms, inability to do everyday things, relationship problems) — sorted into symptoms and impairments (some both, like disorientation to time) — then the left pathway toward disorder and possible diagnosis (treatments, outcomes) and the right pathway from impairment through disability to participation restriction (the ICF line). THE ASSESSMENT IS INCOMPLETE UNTIL BOTH SIDES ARE CONSIDERED. EMPHASIS: physical-cause disturbances demand diagnostic accuracy; socially-imposed disturbances demand network and relationship assessment, the diagnostic label adding little. THE LIFE-EVENTS LAYER: temporal relationships between events and onset (particularly if repeated) inform management and prognosis — Brown & Harris's LEDS the research gold standard whose length illustrates the technical difficulty; patients' and families' causal attributions heard with respect while the clinician concludes by experience, common sense and research acquaintance. PSYCHODYNAMICS AND THE LIFE STORY: the interactions of events, relationships and personality attributes (plus defences and coping) — in some patients the paramount finding, indicating specialist psychotherapy referral; the formulation draws the threads together.", topic: "The sequence" },
    { question: "State the confidentiality procedure's three rules, the interpreter rule, and the cultural caution about private interviews.", answer: "THE THREE RULES: (1) patient and family members are each entitled to speak to the doctor in private, with confidence that nothing reaches the other unless requested; (2) the patient agrees not to interrogate family members about their sessions, and vice versa; (3) relatives' attempts to arrange secret interviews are firmly resisted. WHY: families may be in fear of each other's reactions to 'critical' statements — these elementary-sounding points build the trust on which everything else runs. THE INTERPRETER RULE: always sought when fluency is absent; a professional of the same sex as the patient, ideally a mental-health professional, is always preferred to family members — a confidentiality matter, not a convenience. THE CULTURAL CAUTION: the private interview between two strangers discussing intimate and unpleasant matters freely is a middle-class Western construct, not shared by all cultures; pre-interview consultation with a professional familiar with the patient's background clarifies what to aim for in intimate enquiry.", topic: "Context rules" },
    { question: "Distinguish practice from teamwork; describe leadership functions, the key worker, and the doctor's reserved domains.", answer: "PRACTICE: the consultant leads clinical meetings, depends on senior nurses' and others' views, but decisions are clearly the doctors' responsibility — other professionals welcomed but not necessary members. TEAMWORK (evolved with the growth of social workers, OTs and psychologists in services where multiple needs are the rule): significant time-commitment to team meetings, sharing of responsibilities and blurring of roles — most obvious in information-gathering and programme-planning — each member retaining parent-discipline skills. LEADERSHIP: a recognised leader keeps discussions brief and practical, facilitates decisions between reasonable alternatives, arbitrates insoluble disagreements, and need not be a dominant speaker ('leading from behind'); in crisis, rehabilitation and ID teams the everyday leader need not be a doctor, but acute-ward teams must accept free medical and nursing access to patients. KEY WORKER/CASE MANAGER: allocated per patient, matching needs to skills; carries the agreed programme's contacts; reports progress and problems back to the team. THE DOCTOR'S RESERVED DOMAINS: physical illness, medication and laboratory investigations — only the medically qualified; the psychiatrist's team-specific expertise: risk and dangerousness assessment, and the formulation — the summarising skill that reflects team-agreed policy.", topic: "The multi-disciplinary architecture" },
  ],
  faqs: [
    { question: "What is the assessment actually for?", answer: "A comprehensive treatment and management plan with short- and longer-term components: not a diagnosis chased for its own sake, but a formulation — the person, the disorder, the functioning, the context — that orders what to do first." },
    { question: "The team meeting descended into argument — what went wrong?", answer: "Ask which level is being discussed: the disease (is there something physical?), the illness (what does the patient suffer?) or the sickness (what can't she do socially?). The arguments are usually two disciplines answering different questions — the disagreement dissolves into legitimate differences of emphasis once the level is named." },
    { question: "Isn't a diagnosis the point?", answer: "In psychiatry, mostly we identify disorders — recognisable patterns with distress and dysfunction, because underlying causes are usually unknown. The diagnosis-language survives because patients and families need causes named, but the formulation is the fuller truth: the label identifies a pattern, the formulation explains the person." },
    { question: "Should I interview the patient alone or with the family?", answer: "Both, in sequence, with the privacy procedure explained first: each party can speak in confidence, neither will interrogate the other about it, and secret interviews are refused. Families fear each other's reactions — the procedure is what lets everyone speak." },
    { question: "Can't her son translate?", answer: "Preferably not: use a professional, same-sex interpreter; the son is inside the family dynamics the privacy procedure exists to protect against." },
    { question: "Where should the assessment happen?", answer: "Not automatically the clinic: home (more revealing, behaviour in context, privacy harder — particular value in puerperal disorders) and primary-care premises (less threatening, GP-adjacent) are serious options; the Indian house call is the textbook's recommendation, not a compromise." },
    { question: "What exactly is a formulation?", answer: "The synthetic summary, reflecting team-agreed policy, that orders the patient's attributes, problems, disorders and context into a treatment plan — a special psychiatric skill and the psychiatrist's signature contribution to the multi-disciplinary assessment: analysis converted into an ordered, shared plan." },
    { question: "Why must clinicians understand structured instruments they never administer?", answer: "Because the schedules (the SCAN/CIDI/PSE lineage) stand behind most clinical research and service development; their design logic and reliability disciplines are what the research reports assume — the shortest mention in the reports conceals the machinery every clinician reads over. Clinician literacy, not administration, is the requirement." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — ICD-10: the disorder definitions ('clinically recognizable set of symptoms or behaviour associated in most cases with distress and interference with personal functions')" },
      { source: "WHO — International Classification of Functioning, Disability and Health, short and long versions; with Nagi's framework as the parallel US scheme" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 1.8.1 — Cooper & Oates: principles of clinical assessment in general psychiatry; source chapter mapped and rewritten (2009)" },
      { source: "Menninger K — the anti-diagnosis position of the 1950s–60s, engaged and answered (the classification critique)" },
    ],
    trials: [
      { source: "Brown G & Harris T — the Life Events and Difficulties Schedule methodology: the research gold standard for event-onset timing" },
    ],
    reviews: [
      { source: "Scadding JG — Principles of definition in disease: the diagnostic-process dictum ('may' becomes 'usually' in psychiatry)" },
      { source: "Taylor D — the disease/illness/sickness trilogy account cited in the chapter (symptoms and distress)" },
      { source: "Lewis A & Wootton B — the historical definitional debates" },
      { source: "Kendell R & Cooper J E — the importance-of-diagnosis discussions" },
      { source: "Burns T — reviews of the UK community-care reorganisations (the changing service context)" },
      { source: "Goldberg D et al. — the primary-care interface (the Oxford ch 7.8 cross-reference)" },
      { source: "Wing J et al. — the SCAN/PSE structured-instrument lineage (with the CIDI)" },
      { source: "Sartorius N & Janca A (1996) — psychiatric assessment instruments: cross-cultural standardisation" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline (24×7, free, multiple Indian languages)" },
      { source: "The written-plan script — the one-page record this course hands to every Indian family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what a psychiatric assessment is, the plan it ends in, family, privacy and where to go.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The aim, the trio, the sort, the sequence, the contextual rules and the team.",
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
      description: "Everything — the interview craft, the team architecture, the reports, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The aim, the three emphases, the trio and the knowledge map.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the assessment's aim and ask the trio question verbatim — 'is this about disease, illness or sickness?'" },
    { number: 2, title: "Mechanism & Neuroscience", description: "The assessment's engine: the sequence, the sort, the privacy-to-disclosure and resolution pathways, the intellectual timeline.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the complaints-to-formulation cascade and say what each step produces." },
    { number: 3, title: "Clinical Practice", description: "The working apparatus as criteria, the differentials the note teaches, and the practical conduct of the assessment.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the sequence, hold the information rules and audit both lines of the cascade." },
    { number: 4, title: "Indian Context", description: "The trio in the Indian consultation, the venue and interpreter realities, the DMHP team, the written plan.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the trio script, the privacy script and the written-plan decision in an Indian OPD." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the aim question and recite the trio, the interpreter rule and the reserved domains cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 1.8.1 — Cooper & Oates: principles of clinical assessment in general psychiatry; source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Scadding JG — Principles of definition in disease: the diagnostic-process dictum ('may' becomes 'usually' in psychiatry)", sourceType: "review", year: "1959", dateReviewed: "2026-09-30" },
    { id: "S3", source: "WHO — ICD-10 (the disorder definitions) and the International Classification of Functioning, Disability and Health, short and long versions; Nagi's framework as the parallel US scheme", sourceType: "who", year: "1992 / 2001", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Taylor D — the disease/illness/sickness trilogy account cited in the chapter (symptoms and distress; the disease level not always the best explanatory level)", sourceType: "review", year: "cited 2009", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Lewis A & Wootton B — the historical definitional debates", sourceType: "review", year: "cited 2009", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Brown G & Harris T — the Life Events and Difficulties Schedule methodology: the research gold standard for event-onset timing", sourceType: "primary", year: "1978", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Burns T — reviews of the UK community-care reorganisations (the changing service context behind the multi-disciplinary chapter)", sourceType: "review", year: "cited 2009", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Kendell R & Cooper J E — the importance-of-diagnosis discussions", sourceType: "review", year: "1975", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Menninger K — the anti-diagnosis position (the 1950s–60s dismissal of classification), engaged and answered", sourceType: "textbook", year: "1950s–60s", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Goldberg D et al. — the primary-care interface (the Oxford ch 7.8 cross-reference)", sourceType: "review", year: "cited 2009", dateReviewed: "2026-09-30" },
    { id: "S11", source: "Wing J et al. — the SCAN and PSE structured-instrument lineage, with the CIDI as the composite cousin", sourceType: "review", year: "1974 / 1992", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Sartorius N & Janca A — psychiatric assessment instruments: cross-cultural standardisation", sourceType: "review", year: "1996", dateReviewed: "2026-09-30" },
    { id: "S13", source: "The note's India lens — the Indian practice pattern (the trio in the Indian consultation, home assessment, the interpreter constraint and Tele-MANAS language-matching, the DMHP district team, the written plan), context honestly labelled", sourceType: "review", year: "2026 context", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The aim: the initial psychiatric assessment aims at a comprehensive plan for treatment and management with both short-term and longer-term components — the plan, not the label, is the product; the diagnostic term is only one part of what it produces.", grade: "established", sources: ["S1"] },
    { text: "The trio: disease (the doctor's pathological entity), illness (the patient's subjective experience of symptoms and distress), sickness (the social recognition of role-interference) — when team members disagree, asking which of the three is being discussed usually dissolves the disagreement into legitimate differences of emphasis.", grade: "established", sources: ["S1", "S4"] },
    { text: "The sort: the form (phobia, delusion) identifies the disorder; the content reveals current concerns; the effects on functioning determine management and grade severity — the presenting complaint is usually the functional interference; close questioning by someone who knows what to ask uncovers the symptoms of form.", grade: "established", sources: ["S1"] },
    { text: "The disorders-not-diagnoses position: Scadding's dictum (a diagnosis 'may state no more than the resemblance of the symptoms and signs to a previously recognized pattern') hardens in psychiatry — 'may' becomes 'usually' — acknowledged by ICD-10 and DSM-IV presenting classifications of disorders; 'criteria for the identification of disorders' is the honest label, 'diagnosis' reserved for the minority of instances indicating knowledge of something underlying.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "The anti-diagnosis answer: Menninger's dismissal of classification fails on two counts — the diagnostic term is only one part of an assessment that also produces a personal formulation, and any assessment of a person is unavoidably an act of classification; meanwhile the patient expectation stands (all human groups expect healers to discover causes and provide remedies; the relief at an official pronouncement is universal, growing when the terms are understandable).", grade: "established", sources: ["S1", "S8", "S9"] },
    { text: "The disablement frameworks: the ICF (functioning, disability, contextual factors — environmental and personal) and Nagi's similar US scheme are descriptive conceptual frameworks rather than classifications, best used as team checklists mapping disciplines to concepts (social workers to work and relationships, occupational therapists to daily activities, psychologists to cognitive functions); causality runs both directions.", grade: "established", sources: ["S1", "S3"] },
    { text: "The sequence: collection, analysis, synthesis, review — complaints sorted into symptoms and impairments (disorientation to time being both), the left pathway toward disorder and possible diagnosis and the right pathway from impairment through disability to participation restriction; the assessment is incomplete until both sides are considered, with physical-cause disturbances demanding diagnostic accuracy and socially-imposed disturbances demanding network and relationship assessment.", grade: "established", sources: ["S1"] },
    { text: "The venue rules: home interviews (patient and family at ease, richer information about circumstances, behaviour different from clinic, privacy harder, particular value in puerperal disorders) and primary-care premises (patients who dislike hospitals, GP consultation ease, the spreading consultant-liaison style) are serious options — the assessment is not automatically fixed in the clinic.", grade: "established", sources: ["S1", "S10"] },
    { text: "The privacy and confidentiality procedure: each party entitled to speak to the doctor in private with confidence that nothing reaches the other unless requested; no interrogation of family members about sessions (either direction); relatives' secret interviews firmly resisted — families may be in fear of each other's reactions to 'critical' statements, and this trust architecture is what everything else runs on.", grade: "established", sources: ["S1"] },
    { text: "The interpreter rule and the cultural caution: always sought when fluency is absent; a professional of the same sex as the patient, ideally a mental-health professional, always preferred to family members — a confidentiality matter, not a convenience; and the private interview between two strangers discussing intimate and unpleasant matters freely is a middle-class Western construct requiring cultural framing and pre-interview consultation.", grade: "established", sources: ["S1"] },
    { text: "The multi-disciplinary architecture: practice (decisions clearly the doctors' responsibility) versus teamwork (sharing of responsibilities, blurred roles in information-gathering and programme-planning, parent-discipline skills retained); leadership that facilitates and arbitrates ('leading from behind'); key workers carrying the agreed programme; the reserved domains — physical illness, medication and laboratory investigations — decided only by the medically qualified, with risk and dangerousness assessment and the formulation the psychiatrist's team-specific expertise.", grade: "established", sources: ["S1", "S7"] },
    { text: "The ending skills: prognosis formulated with explicit uncertainty and confidence-graded outcome statements; reviews converting assessment from event to process (interval re-assessment, added interventions, episode-end global statements of improvement and quality of life from the patient's viewpoint); reports written for their readers with the formulation in the lead — and clinician literacy in the structured-instrument tradition (SCAN/CIDI/PSE; Sartorius & Janca's cross-cultural standardisation) required.", grade: "established", sources: ["S1", "S11", "S12"] },
    { text: "The Indian layer: the trio as the Indian consultation tool (the family asks sickness, the doctor answers disease, the shrine answers meaning); home assessment as existing Indian practice with the negotiated private-room rule; the interpreter constraint with bilingual professionals and Tele-MANAS language-matching; the DMHP district team as a young multidisciplinary team; the written plan as the continuity technology — practice-pattern description from the note's India lens, context honestly labelled.", grade: "supported", sources: ["S1", "S13"] },
  ],
};
