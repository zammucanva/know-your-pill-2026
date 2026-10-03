import type { PsychiatryCourse } from "./types";

/**
 * PSYCHIATRIC REHABILITATION — canonical Psychiatry course
 * (migration batch 14, Group P — treatment methods).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/psychiatric-rehabilitation.md — untouched
 * foundation), re-researched against the Rössler Oxford-chapter
 * synthesis and the lineages the note itself cites: the WHO
 * ICIDH/ICF functioning framework, Lamb's well-part-of-the-ego
 * and Bachrach's hope tradition, Anthony's recovery concept,
 * Miller-Rollnick motivational interviewing, the Liberman
 * social-skills modules, the Falloon-Leff family trials, the
 * Szmukler caregiving-burden literature, the Link-Phelan stigma
 * work, the Becker-Drake supported-employment and Corrigan
 * supported-housing evidence — with per-claim provenance.
 *
 * Drug routes: NONE — the note assigns no drug a clinical role
 * (the psychiatrist's medication task is a trade-off
 * conversation, not a prescription tier); drugLinks is empty and
 * the honest pharmacotherapy boundaries are recorded in
 * contentGaps, never invented.
 */
export const psychiatricRehabilitationCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "psychiatric-rehabilitation",
  title: "Psychiatric Rehabilitation",
  shortName: "Psychiatric rehab",
  kind: "concept",
  category: "Treatment Methods",
  groupLetter: "P",
  groupName: "Treatment methods",
  learningPath: ["Psychiatry", "Treatment Methods", "Psychiatric Rehabilitation"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Working with the well part of the ego to restore housing, work, relationships and rights",

  summary:
    "Psychiatric rehabilitation shifts the clinical focus from symptoms to functioning, engineering person and environment together. It matters because outcomes are measured in housing, work, relationships and rights rather than symptom counts.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the goal definition (the emotional, social and intellectual skills to live, learn and work in the community with the least professional support) and the illness-to-disability paradigm shift with its new outcome set (social-role functioning, quality of life, family burden).",
    "Use the ICF: the three levels (body structure and function, activity, participation) plus environmental factors as barriers or facilitators, with the intervention logic each level carries.",
    "Define the target population: persistent psychopathology, marked instability with frequent relapse, social maladaptation; the definitional triad (diagnosis, prolonged duration, role incapacity); the up-to-50% dual-diagnosis reality.",
    "Explain the psychiatrist's role: medication monitoring with the rehabilitation caveat; symptom control is not necessarily the priority, and side effects can wreck social-role performance and vocational rehabilitation.",
    "Run the process: real-life conditions; personal goals via motivational interviewing; readiness staging; strengths-based planning on the well part of the ego; hope restoration; the recovery concept; the alliance; network building.",
    "Compare the two strategies (individual-centred skill development and ecological environmental resource development) and justify why most patients need both.",
    "Recite the four ordinary aspirations and treat each with its evidence: the residential continuum and its supported-housing successor; the vocational ladder's dead ends and the supported-employment reversal; the skills modules with their honest speed; the family evidence with its honest gaps; the stigma cycle with its integration evidence.",
    "Work the Indian realities: the family as the rehabilitation system, the day-care centre as the hub, the home-based ICF environmental audit, the supported-employment import, and the local stigma circuit.",
  ],
  quickFacts: [
    { label: "The goal", value: "Least professional support", detail: "The founding sentence: helping disabled individuals establish the emotional, social and intellectual skills to live, learn and work in the community with the least professional support; the person's own community as the explicit endpoint, not the ward" },
    { label: "The frame", value: "The ICF", detail: "International Classification of Functioning, Disability and Health: neutral descriptions of body structure and function (impairments), activities (limitations) and participation (restrictions); plus the environmental-factors section, because environments create or undo disability" },
    { label: "The population", value: "Instability defines them", detail: "Persistent psychopathology, marked instability with frequent relapse, social maladaptation, with 'chronically mentally ill' defined by diagnosis, prolonged duration and role incapacity; up to 50% of people with severe mental illness carry dual diagnoses, especially with substance abuse" },
    { label: "The philosophy", value: "The well part of the ego", detail: "Lamb (1984): there is always an intact portion of the ego to which treatment and rehabilitation efforts can be directed; strengths-based work, hope restoration, self-determination (the recovery concept) and the alliance as the engagement engine" },
    { label: "The housing verdict", value: "Supported housing", detail: "Independent housing plus flexible, individualised support: now demonstrably a realistic goal for the majority: once in it, most stay housed and are less likely to be hospitalised; the residential continuum (24-hour staffed homes downward) its criticised predecessor" },
    { label: "The work verdict", value: "Place, then train", detail: "Supported employment: the competitive job of the person's choosing as soon as possible, with all needed support continued indefinitely, reversing the failed 'train, then place' ladder whose transitional and sheltered rungs too often ended in dead ends" },
    { label: "The family evidence", value: "Relapse reduction", detail: "Family intervention programmes lower relapse rates, improve psychosocial functioning, possibly reduce burden, with stable treatment gains, among the most robust findings in psychiatry; the effective components and minimum doses unknown; 50–90% of disabled persons live with relatives after acute treatment" },
    { label: "The stigma cycle", value: "Demoralisation's engine", detail: "Labelling produces demoralisation, low quality of life, unemployment, reduced social networks: the labelled person expects rejection and devaluation, a vicious cycle decreasing recovery chances; the exit is real participation: well-integrated people show better psychopathology and quality-of-life outcomes" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The dominant diagnosis of the rehabilitation population: held loosely, because the field's insistence is that non-psychotic disorders qualify equally" },
    { label: "Family Therapy", type: "condition", href: "/psychiatry/family-therapy/", note: "The working-partner discipline: the relapse-reducing family interventions this course prescribes, and the systems lens the India family-as-system builds on" },
    { label: "Group Therapy", type: "condition", href: "/psychiatry/group-therapy/", note: "The group vehicle the skills modules ride: role play and interpersonal learning rehearsed before the real-life setting demands them" },
    { label: "Therapeutic Communities", type: "condition", href: "/psychiatry/therapeutic-communities/", note: "The residential-rehabilitation ancestor: the milieu tradition the supported-housing successor replaced for the majority" },
    { label: "Memory Rehabilitation", type: "condition", href: "/psychiatry/memory-rehabilitation/", note: "The parallel engineering discipline for the cognitive disabilities: the same person-plus-environment logic in the neurocognitive tier" },
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The dual-diagnosis reality: up to 50% of severe mental illness; the destabiliser every rehabilitation plan must hold" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The reward-and-motivation chemistry the goal-pursuit and the hope restoration ride on" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The goal-setting and executive seat: the well part of the ego's address, the planning the modules train" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The threat circuit the stigma expectation rides: the anticipated rejection that keeps the labelled person at home" },
    { label: "Basal ganglia", type: "brain-region", href: "#brain", note: "The habit engine the skills training builds on: practice hardening conversation and medication routines into procedure" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The mechanism story of psychiatric rehabilitation is the story of how disability is PRODUCED, and therefore how it is reversed. A health condition sits at the centre of the ICF, but the disability the clinician treats is manufactured at three separable levels: impairments of body structure and function (the symptoms and cognitive deficits), activity limitations (what the person cannot do), and participation restrictions (the roles that have withdrawn, work, relationships, community). Each level carries its own theoretical foundation for intervention, which is why symptom control alone so often fails to return a life: the participation restriction survives the quietened hallucinations. The fourth actor is the decisive one: environmental factors (barriers or facilitators) that turn a health condition into disability or restore functioning; the family that exhausts itself, the employer who refuses, the marriage market that discounts, the day centre that opens. Rehabilitation's two strategies attack the two sides of this machine: individual-centred (develop the person's skills for interacting with a stressful environment) and ecological (develop the environmental resources that reduce the stressors), most people need both. And the engagement engine that drives both is psychological: the well part of the ego (Lamb's intact portion, always present), the restoration of hope (Bachrach's acceptance-and-proceeding), the person's own goals elicited and staged (motivational interviewing, readiness for change), self-determination honoured as the recovery concept, and the alliance built into a network, because most patients have lost their close, stable relationships to the illness, and social support predicts recovery, life satisfaction and stress-coping. Underneath runs the field's honest, unsettled question (whether rehabilitation compensates for impairments or helps people recover) and the field's equally honest answer: it does not need to settle it to work.",
    steps: [
      "The paradigm shift: from an illness model to a model of functional disability; the outcome set changes from symptom counts to social-role functioning (relationships, work, leisure), quality of life and family burden.",
      "The ICF engine: neutral descriptions of body structure and function (impairments), activities (limitations) and participation (restrictions); each level carrying its own theoretical foundation for intervention.",
      "The environment as cause and cure: the environmental-factors section treats environments as barriers or facilitators. They turn a health condition into disability or restore functioning; the intervention target moves off the person alone.",
      "The two strategies: individual-centred skill development for interacting with a stressful environment, and ecological environmental resource development to reduce the stressors, most people need both.",
      "The engagement engine: the well part of the ego (Lamb), the restoration of hope (Bachrach), personal goals elicited by motivational interviewing and staged by readiness, self-determination (the recovery concept), the alliance and network building.",
      "The honest question underneath: whether rehabilitation compensates for impairments or helps people recover; unsettled by the field, and not needing settlement to work.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the well part's address)", role: "The goal-setting, planning and executive seat: the intact portion the strengths-based work addresses, and the machinery the problem-solving and workplace modules train.", grade: "supported" },
    { id: "temporoparietal-junction", name: "Temporoparietal junction and social-brain nodes", role: "The social-cognition substrate the conversation, friendship and family-involvement modules build on, perspective-taking rehearsed into habit.", grade: "supported" },
    { id: "basal-ganglia", name: "Basal ganglia (the habit engine)", role: "The procedural learning the skills modules exploit, which is why benefits accumulate slowly and need long-term training, hardening into routine rather than arriving as a drug-effect peak.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (the stigma circuit's alarm)", role: "The threat-anticipation machinery the labelled person's expected rejection rides: the withdrawal that starves the very networks rehabilitation rebuilds.", grade: "proposed" },
    { id: "ventral-striatum", name: "Ventral striatum (the goal engine)", role: "The reward-and-motivation circuitry the hope restoration and the personally-chosen goals engage: the reason the person's OWN goals, not the timetable's, drive the programme.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The reward-and-motivation chemistry of goal pursuit: the engagement the skills accumulation and the job tenure demonstrably ride on.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The mood-and-engagement substrate: the demoralisation the stigma cycle manufactures, and the reason participation itself lifts it.", grade: "proposed" },
    { name: "Noradrenaline", symbol: "NE", role: "The arousal-and-attention substrate of learning and workplace performance: the cognitive budget the medication side effects can quietly spend.", grade: "supported" },
    { name: "Oxytocin", symbol: "OT", role: "The affiliative chemistry the alliance and the network building ride on: the relationship restoration this field prescribes.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "icf-disablement-pathway",
      name: "The ICF chain (how disability is produced — and reversed)",
      steps: [
        { label: "The health condition", detail: "Schizophrenia dominating, non-psychotic disorders qualifying: up to 50% carrying a dual diagnosis with substance abuse" },
        { label: "Impairments", detail: "Body structure and function: the symptoms, the cognitive deficits; the level the prescription pad addresses" },
        { label: "Activity limitations", detail: "What the person cannot do: the conversation, the medication management, the problem-solving; the level the skills modules address" },
        { label: "Participation restrictions", detail: "The roles withdrawn: work, relationships, community; the level housing, employment, family and rights address; environmental factors barring or facilitating at every step" },
      ],
      clinicalManifestation: "The person whose hallucinations quietened years ago and whose life never followed: the participation restriction the symptom chart never plots.",
      grade: "established",
    },
    {
      id: "stigma-cycle-pathway",
      name: "The stigma vicious cycle (the label that shrinks the life)",
      steps: [
        { label: "The label applied", detail: "The diagnosis made public: by disclosure, by the neighbourhood, by the records" },
        { label: "The stereotypes known", detail: "The labelled person is aware of the stereotypes and expects rejection and devaluation" },
        { label: "The losses compound", detail: "Demoralisation, low quality of life, unemployment, reduced social networks: each loss feeding the next" },
        { label: "The recovery chances fall", detail: "The vicious cycle decreasing recovery chances: withdrawal confirming the stereotype; the exit is real participation, because well-integrated people show better psychopathology and quality-of-life outcomes" },
      ],
      clinicalManifestation: "The young man who stopped leaving the house after the job refusal and the collapsed marriage negotiation: the cycle spinning on engagement's absence.",
      grade: "established",
    },
    {
      id: "place-then-train-pathway",
      name: "The place-then-train reversal (the supported-employment engine)",
      steps: [
        { label: "The failed ladder", detail: "Train, then place: transitional employment and sheltered workshops as pre-vocational waiting rooms; too often dead ends, the gap to competitive employment unbridgeable" },
        { label: "The reversal", detail: "Place, then train: the competitive job of the person's choosing, as soon as possible; readiness demonstrated in the doing, not certified in the waiting" },
        { label: "The support wrapped around", detail: "All needed support, continued indefinitely: the job coach, the employer liaison, the disclosure counselling" },
        { label: "The non-vocational gains accrue", detail: "Job tenure linked with self-esteem, social integration, relationships and substance control; long-term supported employment associated with improved cognition, quality of life and symptom control" },
      ],
      clinicalManifestation: "The woman who kept the job because the job came first: the honest riders being the unskilled part-time nature of many placements, the 12–18-month follow-up window, and the unanswered who-benefits question.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "referral-stage", time: "The referral", title: "The disabled life, not the acutely ill one", description: "Persistent psychopathology, marked instability with frequent relapse, social maladaptation: the triad that says rehabilitation whatever the diagnosis; up to half carrying a dual diagnosis with substance use; the definitional elements of diagnosis, prolonged duration and role incapacity all present.", phase: "onset" },
    { id: "engagement-stage", time: "The first weeks", title: "The alliance and the person's own goals", description: "The person understood in the context of their specific environment; goals identified through motivational interviewing (personal costs and benefits weighed), readiness for change assessed and the work staged: the well part of the ego addressed, hope restored, self-determination honoured.", phase: "onset" },
    { id: "assessment-stage", time: "The same weeks", title: "The ICF assessment across four levels", description: "Impairments, activity limitations, participation restrictions and the environmental audit: functional assessment and individual goal-setting repeated at different stages as the person's goals and illness move.", phase: "onset" },
    { id: "programme-stage", time: "Months 1–6", title: "The programme assembled to the four aspirations", description: "Housing (supported housing, or the family home engineered), work (supported employment's place-then-train), the skills modules begun, the family intervention booked: the two strategies, individual-centred and ecological, deployed together.", phase: "peak" },
    { id: "accumulation-stage", time: "Months 6–18", title: "The slow accumulation", description: "Skills benefits accruing at training speed, not drug speed: relevance and environmental reinforcement required; job tenure linked with non-vocational gains; family relapse gains stabilising. The 12–18-month window where most of the evidence's follow-ups end.", phase: "duration" },
    { id: "recovery-stage", time: "The long term", title: "Indefinite support, self-defined recovery", description: "Support continued indefinitely where the model says so; social integration predicting better psychopathology and quality of life; the person's own definition of recovery presiding over the chart's.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "All patients with severe mental illness need rehabilitation; the core population is defined by three features (persistent psychopathology, marked instability with frequent relapse, and social maladaptation) with the shared definitional elements of 'chronically mentally ill' being diagnosis, prolonged duration and role incapacity. Schizophrenia dominates the population but non-psychotic disorders qualify fully. Up to 50% of people with severe mental illness carry dual diagnoses, especially with substance abuse: the destabiliser every programme must hold. After acute treatment, 50–90% of disabled persons live with relatives: deinstitutionalisation shifted the burden of care to families, a task they did not choose.",
    indianPrevalence: "The Indian reality inverts the Western assumption: the 50–90% living-with-relatives figure is the norm, not a policy outcome; the family IS the rehabilitation system. Formal supported housing is nascent (NGO-run, metropolitan); no formal supported-employment infrastructure exists, though its logic imports through employer liaison, the disability quota and NGO job-support programmes; the district-level DD/DMHP day centres are the reachable hub, able to deliver the manualised skills modules with existing staff.",
    lifetimeRisk: "Not applicable as a risk: the course's population is every severe, persistent, role-restricting mental illness the clinic meets; the question is never whether to rehabilitate, only which ICF level the disability occupies and which aspiration leads.",
    ageOfOnset: "Defined by disability rather than by age: the young person whose role trajectory is salvageable early and the long-stay elder whose roles were lost decades ago both belong; the programme's tempo, not its eligibility, changes.",
    indianNotes: "The NIMHANS family-intervention tradition is the Indian evidence base; the caregiver literature's adverse health effects (higher stress and depression; lower wellbeing, physical health and self-efficacy) map onto Indian caregiver realities with the content adapted: psychoeducation in the family idiom, crisis plans, the burden acknowledged.",
  },
  etiology: [
    { category: "biological", factor: "The disorders themselves", details: "Persistent psychopathology and marked instability with frequent relapse: schizophrenia dominant, non-psychotic disorders qualifying; the up-to-50% dual diagnosis with substance abuse the quiet destabiliser of otherwise sound plans." },
    { category: "psychological", factor: "The demoralisation engine", details: "The label internalised, the expectation of rejection and devaluation, the hopelessness of the repeated-relapse biography: the vicious cycle that decreases recovery chances and that the hope restoration and the participation prescription exist to interrupt." },
    { category: "social", factor: "The deinstitutionalised environment", details: "Reform resettled most long-stay patients into communities whose services did not follow: the burden shifted to relatives (50–90% living with families after acute treatment), a task families do not choose, carried with adverse health effects: higher stress and depression, lower wellbeing, physical health and self-efficacy." },
    { category: "environmental", factor: "The barrier environment", details: "The ICF's environmental factors as disability's manufacturer: housing that is unavailable or mismatched to fluctuating needs, employers who refuse on disclosure, the marriage-alliance market's discount, the temple-circuit journeys that substitute for care. Each a modifiable barrier, each an intervention target." },
    { category: "social", factor: "Stigma as a disablement mechanism", details: "Labelling's documented consequences (demoralisation, low quality of life, unemployment, reduced social networks) operating as a social cause of disability with the same standing as any symptom; well-integrated people with mental illness showing the converse: better psychopathology and quality-of-life outcomes." },
  ],
  symptomClusters: [
    {
      category: "1. The activity limitations (what the person cannot do)",
      symptoms: ["Conversation and interpersonal problem-solving that will not start or hold: the social skills the modules retrain", "Medication and symptom self-management beyond the person's unaided grasp: the modules' first two targets", "Workplace fundamentals and recreation absent from the repertoire: the participation skills nobody taught", "Community re-entry as a skill gap, not a symptom: the bus route, the form, the landlord's question"],
    },
    {
      category: "2. The participation restrictions (what the roles have withdrawn)",
      symptoms: ["Housing precarious or institutional: the first aspiration lost", "Work and education careers interrupted or never begun: the second aspiration lost", "Social and intimate relationships thinned; the close, stable relationships lost to the illness: the third aspiration lost", "Community participation and the exercise of full rights suspended: the fourth aspiration lost"],
    },
    {
      category: "3. The system's signs (what the family and the society show)",
      symptoms: ["The caregiver's burden: higher stress and depression, lower wellbeing, physical health and self-efficacy; the relatives feeling ignored, insufficiently informed, unappreciated, and afraid of blame", "The family's relapse calendar running the household: the emergency becoming the routine", "The neighbourhood's label at work: demoralisation, low quality of life, unemployment, reduced social networks; the vicious cycle visible from the doorstep", "The Indian signature: marriage-alliance discrimination, employment lost on disclosure, the temple-circuit journeys; the local form of the global cycle"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The rehabilitation assessment",
      code: "The ICF as the instrument",
      criteria: [
        "Is this the population? Persistent psychopathology, marked instability with frequent relapse, social maladaptation, with the definitional triad of diagnosis, prolonged duration and role incapacity; schizophrenia dominating, non-psychotic disorders qualifying; the dual-diagnosis screen (substance abuse, up to 50%) never omitted.",
        "The three levels described neutrally: impairments of body structure and function, activity limitations, participation restrictions; each level carrying its own theoretical foundation for intervention, so the assessment names which level each treatment targets.",
        "The environmental audit: barriers and facilitators listed; the family's capacity and exhaustion, the housing, the employer, the neighbourhood, the money; environments turn a health condition into disability or restore functioning.",
        "The person's own goals elicited (motivational interviewing weighing personal costs and benefits) and staged (readiness for change): the goals, not the ward timetable, setting the programme's direction.",
        "The assessment repeated at different stages: functional assessment and individual goal-setting as a loop, not a form.",
      ],
      duration: "A process, not a visit: the goals and the functioning re-assessed at each stage of the illness's and the person's movement.",
      indianNote: "The Indian skill: the home-based rehabilitation assessment; the ICF environmental audit of the house itself (space, role, stimulation), because the family home is the base for the great majority and the house is the treatment unit.",
    },
    {
      system: "The goal-setting consultation",
      code: "The four aspirations as the menu",
      criteria: [
        "The four universal aspirations laid out as the legitimate wants they are: a home of one's own; education and a meaningful work career; satisfying social and intimate relationships; participation in community life with full rights.",
        "Personal costs and benefits of each listed need weighed with the person (motivational interviewing): the goal chosen being the person's, not the service's.",
        "The two strategies matched to the goal: individual-centred (skills) where the person-side limits, ecological (environmental resources) where the environment limits, most plans needing both.",
        "The strengths inventory taken: the well part of the ego named and addressed; what remains intact, what the person still does, whom they still trust.",
        "The alliance and the network audited: who is left, who could return, who joins the plan; rehabilitation as network building.",
      ],
      duration: "One structured consultation to begin, revisited at each programme stage: goals change as hope returns.",
      indianNote: "The family in the room as the default, psychoeducation in the family idiom, and the caregiver's burden acknowledged in the first session: the Indian consultation starts with the household, not the individual alone.",
    },
  ],
  severityScales: [
    {
      name: "The ICF functioning profile",
      fullName: "International Classification of Functioning, Disability and Health (WHO)",
      measures: "Impairments of body structure and function, activity limitations, participation restrictions, and environmental barriers and facilitators: the neutral four-level description rehabilitation assesses by.",
      ranges: [],
      indianNote: "The ICF's environmental section is India's instrument: the audit of the house itself (space, role, stimulation) the home-based rehabilitation assessment.",
    },
    {
      name: "The rehabilitation readiness assessment",
      fullName: "Readiness-for-change staging in psychiatric rehabilitation",
      measures: "Where the person stands on engaging with each goal: the staging that decides whether to work on readiness first or to begin the programme now.",
      ranges: [],
      indianNote: "Readiness is assessed per goal, not per person. The man ready for work and not yet for medication management; the programme follows the staging, not the diagnosis.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The medication load itself (side effects as 'rehabilitation failure')", distinguishingFeatures: "Social-role performance weakened and vocational rehabilitation impaired by sedation and side effects: the person who cannot hold a conversation or a morning shift however well the symptoms are controlled.", keyDifferentiator: "The prescription audited against the life goals, not the symptom chart alone: symptom control is not necessarily the highest priority in this population." },
    { condition: "Demoralisation masquerading as negative symptoms", distinguishingFeatures: "The flat withdrawal of the labelled person expecting rejection and devaluation: the stigma cycle's clinical face, distinguishable from the deficit state by its responsiveness to real participation.", keyDifferentiator: "The integration trial: engagement in real roles lifts demoralisation where it does not cure deficit; participation as the diagnostic and the treatment." },
    { condition: "The untreated dual diagnosis", distinguishingFeatures: "Relapse and instability driven by the comorbid substance use (up to 50% of the population): the rehabilitation plan that cannot hold because the second illness was never asked about.", keyDifferentiator: "The substance history taken in both directions at every relapse review; the substance-abuse-management module in the plan, not an afterthought." },
    { condition: "The environment as the patient (barriers masquerading as limitations)", distinguishingFeatures: "The 'non-responder' whose impairment is stable but whose environment (the refusing employer, the exhausted family, the mismatched housing) manufactures the disability at the participation level.", keyDifferentiator: "The ecological strategy: modify the environmental resources (employer liaison, family intervention, the housing move) rather than intensifying the person-side treatment." },
    { condition: "The unstable illness itself (instability as the limiter)", distinguishingFeatures: "Marked instability with frequent relapse (the population's defining feature) repeatedly dismantling programmes; a medical stabilisation problem, not a motivational one.", keyDifferentiator: "Stabilisation pursued alongside (rehabilitation happens under real-life conditions), with the crisis plan written between episodes rather than after them." },
  ],
  management: [
    { category: "psychotherapy", name: "The rehabilitation process: goals, readiness and the alliance", description: "Understand the person in the context of their specific environment; identify personal goals by motivational interviewing (personal costs and benefits of each listed need weighed); stage the work by readiness for change; run functional assessment and individual goal-setting, repeated at different stages. The philosophy underneath: strengths-based. Lamb's 'there is always an intact portion of the ego to which treatment and rehabilitation efforts can be directed'; the restoration of hope (Bachrach: the hope that comes with learning to accept the fact of one's illness and one's limitations, and proceeding from there); rights, partnership and self-determination as the recovery concept; the therapeutic alliance as the engagement engine; rehabilitation as network building, most patients have lost their close, stable relationships to the illness, and social support predicts recovery, life satisfaction and stress-coping.", whenToUse: "Every rehabilitation plan begins here, before any programme is chosen, the goals and the readiness are the person's own.", indianContext: "The family in the room as the default; psychoeducation delivered in the family idiom; the caregiver's burden acknowledged in the first session; the NIMHANS family-intervention tradition the Indian evidence base to build on." },
    { category: "psychotherapy", name: "The medication trade-off (the psychiatrist's particular task)", description: "Medication monitoring with the rehabilitation caveat: symptom control does not necessarily have the highest priority, because side effects can weaken social-role performance and impair vocational rehabilitation. The sedation that abolishes symptoms and employability together is a bad trade. And the self-management principle: community-living patients want medication responsibility, including varying it within limits without consultation; the rehabilitation psychiatrist respects and plans for that, building the agreed margins into the plan rather than policing the silence.", whenToUse: "At every review: the prescription judged against the life goals, not the symptom chart alone.", indianContext: "The trade-off conversation held early and explicitly: what the tablets buy in symptoms versus what they cost in work, conversation and marriage-market functioning; the family present, the margins agreed in writing where literacy allows." },
    { category: "lifestyle", name: "Housing: from the residential continuum to supported housing", description: "The reform objective since the mid-1950s: resettlement from custodial institutions; most long-stay patients can live in community settings. The residential continuum (24-hour staffed homes, through less-staffed apartments, to independent housing) criticised as rarely available, mismatched to fluctuating needs and deaf to preferences. The successor: supported housing; independent housing plus flexible, individualised support services; now demonstrably a realistic goal for the majority: once in it, most stay housed and are less likely to be hospitalised.", whenToUse: "From the first housing conversation: the preference asked, the support designed around the person, not the slot.", indianContext: "Supported housing is nascent (NGO-run, metropolitan); the realistic Indian ladder runs family home → day-care centre → half-way home → supported living, with the family home the base for the great majority, making the home-based rehabilitation assessment (the ICF environmental audit of the house: space, role, stimulation) the Indian clinical skill." },
    { category: "lifestyle", name: "Work: supported employment, place then train", description: "Work has been beneficial for mental health for centuries, and vocational rehabilitation predates medication (occupational and work therapy for institutional apathy). The graded ladder and its dead ends: transitional employment (temporary environments teaching vocational skills, too often a dead end, the gap to competitive employment unbridgeable) and sheltered workshops (pre-vocational, also often a dead end); cooperatives the alternative (commercial operations, disabled and non-disabled staff on equal terms sharing management, professionals in the background). Supported employment, the most promising model: placement in competitive employment of the person's choosing as soon as possible, with all needed support, continued indefinitely. The evidence: increased ability to find and keep jobs; job tenure linked with non-vocational gains (self-esteem, social integration, relationships, substance control); long-term supported employment associated with improved cognition, quality of life and symptom control. The honest questions: many obtain unskilled part-time jobs; follow-ups mostly 12–18 months; we do not yet know who benefits and who does not; and labour-market integration depends finally on society's willingness to integrate its most disabled members.", whenToUse: "Whenever work is wanted: the assumption reversed from 'prove readiness first' to 'the job is the assessment'.", indianContext: "No formal supported-employment infrastructure exists; the logic imports (place-then-train, support indefinite) through employer liaison, the disability quota, workplace disclosure counselling and NGO job-support programmes." },
    { category: "lifestyle", name: "Social skills training: the module programme", description: "Modular packages: medication management, symptom management, substance-abuse management, conversation, interpersonal problem-solving, friendship and intimacy, recreation, workplace fundamentals, community re-entry, family involvement; each skill area taught through demonstration videos, role play, problem-solving, in-vivo and homework assignments. The evidence: disabled individuals can learn a wide range of social skills; functioning improves when the trained skills are relevant to daily life and the environment perceives and reinforces the changed behaviour; unlike medication effects, benefits accumulate slowly and need long-term training. The overall verdict: effective for acquisition, maintenance and transfer to community life.", whenToUse: "Where the activity limitations are the barrier: matched to the person's own goals and followed into the environments that must reinforce them.", indianContext: "The district-level DD/DMHP day centres can deliver the modules (medication management, conversation, community re-entry) with existing staff: module training is cheap and manualised; the day-care centre is the rehabilitation hub." },
    { category: "psychotherapy", name: "Family intervention: the evidence and its cultural caveat", description: "Deinstitutionalisation made families the de-facto service system: 50–90% of disabled persons live with relatives after acute treatment; a task the families did not choose, carrying adverse health effects (higher stress and depression; lower wellbeing, physical health, self-efficacy), and families are also natural settings for context-dependent learning and recovery. Relatives feel ignored, insufficiently informed, unappreciated, and fear blame; hence the frustration. Family intervention programmes: effective in lowering relapse rates, improving psychosocial functioning, possibly reducing burden, with stable treatment gains, among the most robust findings in psychiatry. The honest gaps: the effective components are unclear; programmes differ in frequency and length; no minimum-dose criteria exist; and most were developed in Western deinstitutionalisation contexts: family caregiving may differ substantially in other cultures and in minority groups within Western societies.", whenToUse: "Early and routinely: the family is both the co-therapist and a patient of the system; the caregiver's exhaustion a target, not an assumed duty.", indianContext: "Indian delivery, not Western import: psychoeducation in the family idiom, crisis plans written for the next relapse, the caregiver burden acknowledged and the caregiver's own treatment booked where the health effects have arrived." },
    { category: "lifestyle", name: "The participation prescription (fighting the stigma cycle)", description: "Practitioners meet the label's deleterious effects daily: demoralisation, low quality of life, unemployment, reduced social networks; the labelled person, aware of the stereotypes, expecting rejection and devaluation, the vicious cycle decreasing recovery chances. The converse evidence: well-integrated people with mental illness show better psychopathology and quality-of-life outcomes, and the subjective availability of support matters. The treatment follows the evidence: real participation (the real role, the real work, the visible membership) as both the outcome and the intervention; integration a two-way street that the programme engineers from both ends.", whenToUse: "Always: the stigma cycle is a clinical variable, and demoralisation from the label is treatable by engagement in real roles.", indianContext: "The local vicious cycle named without euphemism: marriage-alliance discrimination, employment loss, the temple-circuit journeys; the participation prescription universal, the anti-stigma messaging local, delivered inside the family psychoeducation." },
  ],
  safety: {
    redFlags: [
      "Marked instability with frequent relapse: the population's defining feature and its risk: the programme cannot outrun the untreated illness; stabilisation rides alongside, with the crisis plan written between episodes",
      "The dual diagnosis unmasked: up to 50% with substance abuse, the quiet destabiliser; every relapse review asks about it in both directions",
      "The medication load wrecking the roles: sedation abolishing symptoms and employability together; the side-effect audit as urgent as any investigation",
      "The caregiver's collapse: higher stress and depression, lower wellbeing, physical health and self-efficacy; the system's load-bearing wall failing takes the programme with it",
      "The demoralisation of the stigma cycle: the expectation of rejection shrinking the life to the house; an urgent indication for the participation prescription, not a character trait to be noted",
      "Housing loss approaching: the family home's exhaustion or the supported tenancy at risk; the re-settling conversation held before the exit, not after",
    ],
    urgentGuidance:
      "The order of operations: (1) the instability treated; frequent relapse is the population's defining risk and no programme outruns it (the crisis plan written, the relapse signature reviewed with the family); (2) the dual diagnosis asked about at every relapse; (3) the prescription audited against the life goals: symptom control not necessarily the priority, side effects that wreck roles counted as failures; (4) the family intervention booked early: relapse reduction is among the most robust findings in psychiatry and the caregiver's exhaustion is a target, not an assumed duty; (5) the medication self-variation discussed openly: the community-living patient's wish to vary within limits respected and planned for, not policed; (6) the participation prescribed: the real role, the real work, the visible membership as the anti-stigma intervention that demoralisation cannot survive.",
  },
  drugLinks: [],
  contentGaps: [
    "No pharmacology is this course's territory: the maintenance antipsychotic tier belongs to the disease courses (Schizophrenia and the psychoses). Here the medication content is a trade-off conversation between symptom control and social-role performance, taught, route never invented.",
    "The substance-use treatment tier for the up-to-50% dual-diagnosis reality has its KYP courses in the substance-use family: referenced, not duplicated, here.",
    "The comorbid-depression tier (the SSRIs with KYP drug lessons) is assigned no clinical role by the source note; it stays in the disease courses: no drugLinks invented on this course's behalf.",
    "Supported employment and supported housing (this course's two flagship programmes) have no KYP lessons of their own; both are taught here in full, and the absence is pedagogical, not an oversight.",
    "Motivational interviewing appears here as the goal-identification instrument; no standalone KYP MI lesson exists. The technique is taught inside this course and within the psychotherapy-courses' lineage.",
  ],
  patientGuide: {
    whatIsIt:
      "Psychiatric rehabilitation is the branch of psychiatry that works on the LIFE, not only the illness: helping a person with a serious mental illness build the emotional, social and intellectual skills to live, learn and work in their own community with the least professional support. It works on what is WELL (there is always an intact part of the person to build on) and it changes the environment around the person (the home, the family, the workplace, the neighbourhood) as much as it trains the person. Its four ordinary goals, the same ones anyone wants: a home of one's own, education and meaningful work, satisfying relationships, and a full place in community life with full rights.",
    whatCausesIt:
      "Nothing here is anyone's fault. The illness itself, the side effects of medicines that trade alertness for symptom control, the lost years that lost skills and confidence, the family's exhaustion from carrying the care, and the discrimination that follows the label: each contributes its share to the disability, and each is workable. The environment can create disability or remove it; that is the practical hope this field is built on.",
    symptoms:
      "The problems rehabilitation addresses are the life problems: the day with nothing in it; the skills gaps (starting conversations, managing one's own medicines, handling a workplace); the roles that have fallen away (work, study, friendships, marriage prospects); the family running on relapse-alarms; and the discrimination: the job refused after the diagnosis became known, the marriage negotiation that collapsed, the pointed distance in the neighbourhood. None of these is a symptom in the pill's sense; all of them are treatable.",
    treatment:
      "The programme is built around YOUR goals, in your words, at your pace. First the goals are drawn out honestly (what you want, what it will cost and give you) and your readiness is respected: nothing is imposed. Then the pieces: housing support matched to what you can hold (in India, usually strengthening the family home first, with the day-care centre, half-way home or supported living as the ladder); work support on the place-then-train model (the real job of your choosing first, the support continuing as long as needed, not years of 'training' first); the skills classes (conversation, medication management, workplace fundamentals, short modules with role play and homework, run at day centres); the family sessions that lower relapse and teach everyone the same facts in the family's own language; and the anti-discrimination work: disclosure counselling, employer education, the disability quota route. The medicine conversation changes too: the aim is the life you want, so if the tablets' side effects are costing you your work or your alertness, that is a reason to adjust them, not to endure.",
    selfHelp: [
      "Say your goals in your own words (a room of one's own, a job, a friend, a place in the temple committee) and bring them to the appointment; the programme's direction is yours to set.",
      "Ask about your medicines' trade-offs openly, including the wish to vary the dose around work or functions; an agreed margin is safety, a silent variation is risk.",
      "Take the small real role this week (the household's vegetable account, the shop's evening hour, the day centre's attendance) participation is the treatment, not the reward for it.",
      "Send one family member to the family sessions: the evidence for lower relapse is among the strongest in psychiatry, and the sessions teach the household, not just the patient.",
      "Do the skills homework between sessions (the conversation practice, the in-vivo assignments): the benefits come slowly, by training, not by tablet; the ones who keep at it keep them.",
      "Use the day-care centre if one is reachable: the modules, the routine and the company in one place, at near-zero cost.",
      "Refuse the temple-circuit-only answer respectfully: prayer may accompany, but the participation prescription (real roles, real work, real membership) is the medicine this course can name.",
    ],
    whenToSeekHelp: [
      "Relapse signs returning (sleeplessness, withdrawal, the old beliefs): the crisis plan opened early, not the emergency waited out at home",
      "The side effects costing work, study or alertness. The trade-off review is as urgent as any blood test",
      "The family's exhaustion arriving (the caregiver's own low mood, weight or sleep loss): her treatment is part of the patient's plan",
      "The discrimination moment (the job refused, the negotiation collapsed) disclosure counselling and the quota route exist; ask before withdrawing",
      "The housing at risk: the family home straining or the tenancy wobbling; the re-settling conversation held before the exit",
      "The substance use creeping alongside the illness: up to half of people with severe mental illness carry this second burden; it is asked about routinely and treated without blame",
    ],
    indianResources: [
      "The district-level DD/DMHP day-care centre: the skills modules, the routine and the company, delivered with existing staff",
      "NGO half-way homes and supported-living programmes (metropolitan): the ladder above the family home where it is needed",
      "The disability quota and NGO job-support programmes. The employment route that does not wait for perfect health",
      "Tele-MANAS 14416 (24×7, free), for the family's distress, the relapse crises and the caregiver's own exhaustion",
      "The family-intervention ask. The NIMHANS tradition runs in many district hospitals; ask the treating team for the family sessions by name",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific psychiatric-rehabilitation guideline exists; practice follows the international synthesis (the ICF frame, the supported-employment and supported-housing evidence, the Liberman modules, the family-intervention lineage) adapted through the NIMHANS family-intervention tradition (the Indian evidence base) with the DMHP's district infrastructure as the delivery spine.",
    systemContext: "The patient meets the system late and mostly in crisis: the district hospital or the DMHP psychiatric tier for the relapse, the family for everything between. The 50–90% living-with-relatives figure is the Indian norm, not a policy outcome. The family is the de-facto ward, the day-care centre the reachable hub, and the home itself the assessment's object (the ICF environmental audit of the house: space, role, stimulation).",
    programmeContext: "The district-level DD/DMHP day centres can deliver the manualised skills modules (medication management, conversation, community re-entry) with existing staff: module training is cheap and manualised; supported housing is nascent (NGO-run, metropolitan); supported employment has no formal infrastructure, but its logic (place-then-train, support indefinite) imports through employer liaison, the disability quota, workplace disclosure counselling and NGO job-support programmes.",
    costConsiderations: "Approx 2026: family intervention and skills modules cost professional time only; day-care is modest; supported employment costs wage subsidies and job-coach time; the expensive Indian failure is the untreated relapse cycle: rehabilitation is the cost-saving layer, not the cost-adding one.",
    culturalConsiderations: "The family is the rehabilitation system, but the family-intervention evidence was mostly built in Western deinstitutionalisation contexts, and family caregiving may differ substantially across cultures and in minority groups: Indian delivery, not Western import; psychoeducation in the family idiom, crisis plans, the caregiver-burden acknowledgement. The stigma cycle takes local forms: marriage-alliance discrimination, employment loss, the temple-circuit journeys. The participation prescription (real roles, real work, real membership) is universal, and the anti-stigma messaging is local, delivered inside the family psychoeducation.",
    patientCounselling: [
      "The one-line philosophy: 'We work on what is well (there is always an intact part to build on) and we change the house, the workplace and the family around you as much as we train you.'",
      "The goals script: 'Tell me the life you want (the room, the work, the people, the place in the community) in your own words; the programme's direction is yours to set.'",
      "The medicine trade-off script: 'If the tablets are costing you your alertness, your work or the marriage talks, that is a reason to adjust them, not to endure, and varying them within the agreed margins is your right, not your disobedience.'",
      "The family script: 'Your exhaustion is a treatment target, not a duty. The sessions lower relapse, and we run them in your language, at your hours, with the whole household hearing the same facts.'",
      "The work script: 'The job comes first and the training happens in the job. We do not ask you to prove readiness for years in a sheltered setting first.'",
      "The stigma script: 'The label's losses (the job refusal, the marriage negotiation, the distance) are treatable by a real life visible to the neighbourhood: we counsel the disclosure, educate the employer, and use the quota route.'",
      "The day-centre script: 'The centre is not passing time. It is the modules, the routine and the company in one place; the skills come slowly, by training, and they stay.'",
    ],
  },
  decisionPath: {
    title: "The disabled life that needs engineering, not only prescriptions",
    nodes: [
      {
        id: "start",
        question: "A person with severe mental illness, stabilised enough to plan beyond symptoms, and a life that has shrunk. First: which aspiration leads?",
        branches: [
          { label: "Everything flat: no goals voiced, no skills used, no voice", next: "programme-gate" },
          { label: "Housing is the crisis", next: "housing-path" },
          { label: "Work is the wish", next: "work-gate" },
          { label: "The family is breaking", next: "family-gate" },
        ],
      },
      {
        id: "programme-gate",
        question: "The flat presentation: the day with nothing in it, the goals unvoiced.",
        branches: [
          { label: "No goals yet: readiness unknown", next: "goals-path" },
          { label: "Skills gaps the obvious barrier", next: "skills-path" },
          { label: "The person asks about varying their own medicines", next: "medication-path" },
          { label: "Discrimination the presenting complaint", next: "stigma-path" },
        ],
      },
      {
        id: "goals-path",
        question: "The engagement engine, before any programme.",
        recommendation: "Motivational interviewing: the personal costs and benefits of each listed need weighed, in the person's own words; readiness for change assessed and the work staged; the well part of the ego addressed (Lamb: there is always an intact portion); hope restored (Bachrach: accepting the illness and its limitations, and proceeding from there); self-determination honoured as the recovery concept; the alliance built into a network, most patients have lost their close, stable relationships to the illness, and social support predicts recovery, life satisfaction and stress-coping.",
      },
      {
        id: "skills-path",
        question: "The modules: what is taught, and at what honest speed.",
        recommendation: "The module programme matched to the person's goals: medication management, symptom management, substance-abuse management, conversation, interpersonal problem-solving, friendship and intimacy, recreation, workplace fundamentals, community re-entry, family involvement; taught through demonstration videos, role play, problem-solving, in-vivo and homework assignments. The caveats scripted: the skills must be relevant to the person's daily life; the environment must perceive and reinforce the changed behaviour; and the benefits accumulate slowly, needing long-term training, unlike medication effects: acquisition, maintenance and transfer to community life all demonstrated.",
      },
      {
        id: "medication-path",
        question: "The psychiatrist's particular task: the trade-off conversation.",
        recommendation: "The prescription audited against the life goals, not the symptom chart alone: symptom control does not necessarily have the highest priority, because side effects can weaken social-role performance and impair vocational rehabilitation. The self-management principle honoured: the community-living patient's wish to vary medication within limits (without consultation) respected and planned for, the agreed margins written into the plan rather than policed.",
      },
      {
        id: "stigma-path",
        question: "The label's losses presented as the chief complaint.",
        recommendation: "The vicious cycle named: the labelled person, aware of the stereotypes, expects rejection and devaluation; demoralisation, low quality of life, unemployment, reduced social networks, each feeding the next, the recovery chances falling. The participation prescription written: disclosure counselling, employer education, the quota route, the real role made visible to the neighbourhood; integration the outcome AND the treatment (well-integrated people showing better psychopathology and quality-of-life outcomes); the Indian circuit named locally (marriage-alliance discrimination, employment loss, the temple-circuit journeys) with the anti-stigma messaging delivered inside the family psychoeducation.",
      },
      {
        id: "housing-path",
        question: "The housing question, from the continuum to its successor.",
        recommendation: "The residential continuum (24-hour staffed homes, through less-staffed apartments, to independent housing) held honestly: rarely available, mismatched to fluctuating needs, deaf to preferences. The successor prescribed: supported housing; independent housing plus flexible, individualised support services; now demonstrably a realistic goal for the majority (once in it, most stay housed and are less likely to be hospitalised). The Indian rider: supported housing is nascent (NGO-run, metropolitan); the realistic ladder runs family home → day-care centre → half-way home → supported living: the family home remaining the base for the great majority, making the home-based ICF environmental audit (space, role, stimulation) the decisive Indian skill.",
      },
      {
        id: "work-gate",
        question: "The work wish, and the ladder's fork.",
        branches: [
          { label: "A sheltered or transitional placement offered", next: "ladder-path" },
          { label: "Competitive work wanted (or previously refused on disclosure)", next: "se-path" },
        ],
      },
      {
        id: "ladder-path",
        question: "The train-then-place ladder, and its dead ends.",
        recommendation: "Transitional employment (temporary environments teaching vocational skills) and sheltered workshops (pre-vocational) too often end as dead ends: the gap to competitive employment unbridgeable. The alternatives held open: cooperatives (disabled and non-disabled staff on equal terms sharing management, professionals in the background) and brief focused job-finding techniques for the less disabled, but the ladder's destination should be the reversal, not the waiting room.",
      },
      {
        id: "se-path",
        question: "Supported employment: the place-then-train reversal.",
        recommendation: "Placement in competitive employment of the person's choosing, as soon as possible, with all needed support, continued indefinitely. The evidence stated: increased ability to find and keep jobs; job tenure linked with non-vocational gains (self-esteem, social integration, relationships, substance control); long-term supported employment associated with improved cognition, quality of life and symptom control. The honest riders scripted: many obtain unskilled part-time jobs; follow-ups mostly 12–18 months; who benefits remains unknown; labour-market integration depends finally on society's willingness to integrate its most disabled members. The Indian import: employer liaison, the disability quota, workplace disclosure counselling, NGO job-support programmes.",
      },
      {
        id: "family-gate",
        question: "The family: co-therapist, patient, or both.",
        branches: [
          { label: "Relatives exhausted, critical or misinformed: relapse the recurring crisis", next: "family-intervention-path" },
          { label: "The marriage negotiation collapsed on the diagnosis", next: "stigma-path" },
        ],
      },
      {
        id: "family-intervention-path",
        question: "Family intervention: the evidence, the gaps, the culture.",
        recommendation: "The programme booked: effective in lowering relapse rates, improving psychosocial functioning, possibly reducing burden, with stable treatment gains, among the most robust findings in psychiatry. The gaps held honestly: the effective components unclear; programmes differing in frequency and length; no minimum-dose criteria. The cultural caveat decisive in India: most programmes were developed in Western deinstitutionalisation contexts, and family caregiving may differ substantially across cultures. Indian delivery, not Western import (psychoeducation in the family idiom, crisis plans, the caregiver-burden acknowledgement, the NIMHANS tradition). The caregiver's own health treated as clinical work: higher stress and depression, lower wellbeing, physical health and self-efficacy are the documented costs of the 50–90% arrangement. Her exhaustion a target, not an assumed duty.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Deferring rehabilitation until the patient is 'fully stable'",
      why: "The population is DEFINED by marked instability with frequent relapse, waiting for perfect stability waits forever, and the lost years lose the roles, the skills and the networks the programme exists to protect.",
      correction: "Rehabilitation happens under real-life conditions, alongside stabilisation: the crisis plan written between episodes, the goals elicited early, the programme built to survive relapses rather than to await their absence.",
    },
    {
      mistake: "Running the train-then-place ladder as the destination",
      why: "Transitional employment and sheltered workshops too often end as dead ends: the gap to competitive employment unbridgeable after years of pre-vocational waiting, and the person's own choosing never consulted.",
      correction: "The supported-employment reversal: the competitive job of the person's choosing first, as soon as possible, with all needed support continued indefinitely. The job is the assessment and the training ground.",
    },
    {
      mistake: "Prescribing for the symptom chart while the side effects wreck the roles",
      why: "Sedation that abolishes symptoms and employability together is a bad trade; social-role performance weakened and vocational rehabilitation impaired by side effects are rehabilitation failures however clean the chart.",
      correction: "The trade-off audit at every review: symptom control is not necessarily the highest priority; the community-living patient's wish to vary medication within limits respected and planned for, not policed.",
    },
    {
      mistake: "Teaching social skills in the abstract",
      why: "Module drills without environmental relevance and reinforcement improve worksheets, not lives: the trained skill must matter to the person's day, and the environment must perceive and reward the changed behaviour.",
      correction: "Skills matched to the person's own goals, followed in-vivo, with the family and workplace recruited to notice and reinforce, and the honest expectation set: benefits accumulate slowly and need long-term training, unlike medication effects.",
    },
    {
      mistake: "Importing the Western family-intervention package unchanged",
      why: "Most programmes were developed in Western deinstitutionalisation contexts, and family caregiving may differ substantially in other cultures and in minority groups within Western societies: the imported format misfires on the Indian joint family's structure and idiom.",
      correction: "Indian delivery: psychoeducation in the family idiom, crisis plans, the caregiver-burden acknowledged; the NIMHANS family-intervention tradition as the local evidence base, with the same relapse-reduction target.",
    },
    {
      mistake: "Measuring success in symptoms",
      why: "The illness model's outcome set is the one thing rehabilitation replaced: symptom counts miss the housing held, the job kept, the relationship sustained, the rights exercised; the outcomes the patient actually lives by.",
      correction: "The disability model's outcome set adopted: social-role functioning, quality of life, family burden; the four aspirations as the audit, and the person's own definition of recovery presiding.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define the goal of psychiatric rehabilitation in one sentence: the emotional, social and intellectual skills to live, learn and work in the community with the least professional support.",
        "The paradigm shift and its new outcome set: from the illness model to the model of functional disability; social-role functioning, quality of life and family burden replacing symptom counts.",
        "The ICF: three levels plus the environmental section; impairments, activity limitations, participation restrictions, and environments as barriers or facilitators.",
        "The target population: three features (persistent psychopathology, marked instability with frequent relapse, social maladaptation), the definitional triad (diagnosis, prolonged duration, role incapacity), the up-to-50% dual diagnosis.",
        "The two strategies: individual-centred skill development versus ecological environmental resource development, and why most people need both.",
      ],
      practical: [
        "Take a rehabilitation history: the person's own goals (elicited by motivational interviewing), the readiness staging, and the environmental audit; the family, the housing, the work, the neighbourhood.",
        "Demonstrate the goal-setting consultation with the four aspirations as the menu, and the caregiver interview (burden acknowledged, her health audited).",
      ],
      longAnswer: [
        "Psychiatric rehabilitation: definition, philosophy (the well part of the ego, hope, recovery), programme areas (housing, work, skills, family, stigma) and the psychiatrist's role; the evergreen essay.",
        "The role of the family in the rehabilitation of the mentally ill: the 50–90% reality, the intervention evidence with its gaps, and the cultural caveat in the Indian setting.",
      ],
    },
    neetPg: {
      highYield: [
        "THE GOAL SENTENCE: live, learn and work in the community with the least professional support; the founding definition, asked verbatim.",
        "THE FRAME: ICF; impairments (body structure and function), activity limitations, participation restrictions, PLUS environmental factors as barriers/facilitators; each level its own intervention logic.",
        "THE TARGET POPULATION: persistent psychopathology + marked instability with frequent relapse + social maladaptation; chronic mentally ill = diagnosis + prolonged duration + role incapacity; up to 50% dual-diagnosed.",
        "SUPPORTED EMPLOYMENT: competitive job of the person's choosing, as soon as possible, all needed support, continued indefinitely; 'place, then train'; the most promising vocational model; the honest riders (unskilled part-time jobs, 12–18-month follow-ups, who-benefits unknown, society's willingness).",
        "THE VOCATIONAL LADDER'S DEAD ENDS: transitional employment and sheltered workshops; too often unbridgeable gaps to competitive employment; cooperatives as the equal-terms alternative.",
        "SUPPORTED HOUSING: independent housing + flexible individualised support; a realistic goal for the majority, once in it, most stay housed and are less likely to be hospitalised; the residential continuum's three criticisms.",
        "THE SKILLS MODULES: the ten named modules (medication management to family involvement); demonstration videos, role play, problem-solving, in-vivo, homework; acquisition, maintenance and transfer demonstrated, but benefits accumulate slowly and need long-term training, unlike medication effects.",
        "FAMILY INTERVENTION: lowers relapse, improves psychosocial functioning, possibly reduces burden, stable gains; the effective components and minimum doses UNKNOWN; the cultural caveat.",
        "THE STIGMA CYCLE: label → expected rejection and devaluation → demoralisation, low quality of life, unemployment, reduced social networks → falling recovery chances; the converse: well-integrated people show better psychopathology and quality-of-life outcomes.",
        "THE MEDICATION CAVEAT: symptom control is not necessarily the highest priority; side effects can weaken social-role performance and impair vocational rehabilitation; patients may responsibly self-vary within limits.",
        "LAMB (1984): the well part of the ego; 'there is always an intact portion to which treatment and rehabilitation efforts can be directed'; BACHRACH: hope; ANTHONY: the recovery concept.",
      ],
      pyqConcepts: [
        "The ICF's environmental-factors section: the recurring question on why functioning, not diagnosis, determines the intervention.",
        "Supported employment versus sheltered workshops: the place-then-train reversal as the one-line answer.",
        "Family intervention's evidence standing, among the most robust findings in psychiatry, with the components-unknown twist.",
        "The 'well part of the ego' attribution. Lamb; the recurring who-said-it item.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 26-year-old Pune man with schizophrenia, three admissions in five years, lost his data-entry job when the employer learned the diagnosis; the family has since kept him at home 'away from stress', and a sheltered-workshop placement has been offered and refused; he asks for 'any real work' and shows mild morning sedation on the current regimen. The plan that follows: the medication trade-off audited against the job rather than the chart (the self-variation margin agreed in writing), the sheltered offer declined in favour of supported employment through an NGO job-support programme with employer liaison and the disability quota route, disclosure counselling from the previous employer's lesson, the workplace-fundamentals and conversation modules at the DD day centre, and the family session reframing protection as participation; the reasoning tested: place-then-train over train-then-place, the role-preserving prescription, and the honest riders (the part-time unskilled reality, the 12–18-month evidence window, the unanswered who-benefits question).",
        "A 34-year-old Nagpur woman with schizophrenia, four admissions, living with her parents: the mother presenting herself ('I cannot do this again'), her own sleep gone and her own tablets begun; the daughter's day is one room, the television and no household role; the elder daughter's marriage negotiation collapsed when the neighbourhood learned of the illness; the temple circuit has run for years. The plan that follows: the family intervention in the family idiom with the father present (psychoeducation, the crisis plan for the next relapse, the caregiver's burden acknowledged and HER treatment booked), the home-based ICF environmental audit acted on (the room returned to her, space; the kitchen and the vegetable account: role; the day-care centre twice weekly (stimulation), and the medication plan rewritten with the self-variation margin she had been exercising silently) the reasoning tested: the 50–90% norm as system, the caregiver's health as clinical work, and the participation prescription as the anti-stigma treatment (the visible life the neighbourhood can no longer discount).",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Supported employment = place, then train: competitive job first, support continued indefinitely.",
        "The ICF adds environmental factors to impairments, activity and participation: environments as barriers or facilitators.",
        "Family intervention lowers relapse rates: effective components unknown, cultural caveat essential.",
        "The well part of the ego. Lamb; the recovery concept. Anthony.",
        "Stigma's vicious cycle: demoralisation, unemployment, reduced social networks; interrupted by integration.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The prescription is judged against the life goals, not the symptom chart alone, and the community-living patient who varies the dose within limits is exercising the self-determination the field exists to build; write the margin, do not police it.",
        "The environmental audit is the Indian examination that matters: the house itself (space, role, stimulation) because the family home is the base for the great majority and the treatment unit the clinic rarely sees.",
        "Book the family intervention early and adapt it or waste it: the relapse-reduction evidence is among psychiatry's most robust, but the components are unknown and the Western package misfires on the joint family; the idiom, the crisis plan and the burden acknowledgement are the Indian delivery.",
        "Say the honest riders of supported employment out loud (the unskilled part-time jobs, the 12–18-month follow-ups, the unknown who-benefits): the family that hears them from you trusts the tenure when it comes.",
        "Treat the caregiver's collapse as the emergency it is: the 50–90% arrangement runs on her health, and the programme that audits her sleep, her mood and her own tablets outlasts the one that audits only the patient's.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The job that came first",
      presentation: "Three relapses, a sheltered-workshop offer nobody wanted, and a bookstore dispatch job kept, because the job came first and the support never left.",
      initialPresentation: "A 26-year-old man in Pune with schizophrenia, three admissions in five years, was brought by his father with the flat complaint that there was 'nothing to do all day'. He had lost a data-entry job two years earlier when the employer learned the diagnosis; the family, warned against 'stress', had since kept him at home; a sheltered-workshop placement had been offered and quietly refused. He asked for 'any real work'.",
      history: "Persistent low-intensity symptomatology between relapses (the instability-and-persistence pattern); cannabis use had accompanied the second relapse: the dual-diagnosis consideration, currently quiet; no alcohol; the father protective to the point of containment, the mother in favour of 'some work'; the elder brother paying for the repeated admissions.",
      examination: "Mentally stable with mild blunting; no active psychosis; noticeable morning sedation attributed to the current regimen; goal talk emerging once the conversation turned to work; the ICF picture: impairment level quiet, activity and participation levels in ruins.",
      diagnosis: "Schizophrenia in the community: the rehabilitation diagnosis: severe vocational participation restriction with an iatrogenic contributor (the sedating regimen) and a system problem (the train-then-place offer).",
      management: "The medication trade-off audited against the job rather than the chart: the morning sedation reduced, an agreed margin for self-variation around shift changes written into the plan; the sheltered offer declined in favour of supported employment: a bookstore dispatch role (his choosing) placed as soon as possible through an NGO job-support programme with employer liaison, a job coach's support continued indefinitely, and the disability quota route and disclosure counselling worked through from the previous employer's lesson; the workplace-fundamentals and conversation modules run at the DD day centre; a family session reframing protection as participation.",
      outcome: "The dispatch job held past the first year: into and beyond the 12–18-month window where most of the evidence's follow-ups end; the honest riders said aloud at the outset (the unskilled part-time nature, the unknown who-benefits answer); one further relapse managed at home on the written crisis plan without admission; the father's phrase changed from 'he is not ready' to 'he was ready before we were'.",
      teachingPoints: [
        "Place, then train: the competitive job of the person's choosing, as soon as possible, with support continued indefinitely; the reversal of the ladder whose rungs (transitional employment, sheltered workshops) too often dead-end.",
        "The prescription audited against the life goals: symptom control is not necessarily the priority, and the sedation that costs the shift is a rehabilitation failure.",
        "The self-variation margin agreed and written, not policed: self-determination as the engine, not the threat.",
        "The honest riders scripted from the start: many obtain unskilled part-time jobs; we do not yet know who benefits: the family that hears this trusts the tenure when it comes.",
        "The stigma work is clinical: disclosure counselling, employer education and the quota route. The job lost to the label is recoverable by engineering.",
      ],
    },
    {
      title: "The household that was the ward",
      presentation: "A relapse calendar that ran the household, a mother who had begun her own tablets, and one room with no role in it: the family intervention that lowered the first count without a single new prescription for the daughter.",
      initialPresentation: "A 34-year-old woman in Nagpur with schizophrenia, four admissions, living with her parents between each one, was brought in by her mother, who presented herself as the patient: 'I cannot do this again.' The daughter's relapses had arrived roughly yearly; the mother's sleep had gone and her own tablets had begun; the elder daughter's marriage negotiation had collapsed when the neighbourhood learned of the illness; the family had run the temple circuit for years before psychiatry.",
      history: "The daughter's day reduced to one room, the television and no household role; the father refusing clinic attendance 'unless needed' and fearing blame at every session he missed; the mother's exhaustion carrying the 50–90% arrangement the family never chose; the daughter quietly skipping the sedating doses before family functions: the silent self-variation nobody had agreed.",
      examination: "The daughter between relapses: blunted, under-occupied, no active psychosis. The mother: tearful, weight down, the caregiver's adverse-health picture (stress, low mood, failing sleep) in the open. The home (audited at a home visit): the daughter's room doubling as the household's storage; space, role and stimulation all absent.",
      diagnosis: "Schizophrenia in the community: the rehabilitation diagnoses: severe participation restriction (the roleless room), the family system burdened and misinformed, and the caregiver's own illness beginning.",
      management: "Family intervention in the family idiom, at home where the father would attend: psychoeducation with the whole household hearing the same facts, the crisis plan written for the next relapse, the caregiver's burden acknowledged and HER treatment booked; the home-based ICF audit acted on: the room returned to her (space), the kitchen and the vegetable account assigned (role), the DD day-care centre twice weekly for the conversation and medication-management modules (stimulation); the medication plan rewritten with the self-variation margin made explicit and agreed; the marriage-alliance stigma addressed inside the psychoeducation with the participation prescription for the elder daughter too.",
      outcome: "At one year the relapse calendar had lengthened: the family-intervention evidence made local: lowered relapse, improved functioning, the mother's own treatment continuing, the gains stable; the daughter held two household roles and the day-centre attendance; the second daughter's negotiations proceeded with a disclosure the family chose and timed themselves; the temple visits continued as devotion rather than as treatment.",
      teachingPoints: [
        "The 50–90% figure is the Indian norm, not a policy outcome: the family IS the rehabilitation system, and the intervention's evidence (relapse reduction, stable gains, possibly reduced burden) maps onto it directly.",
        "The caregiver's exhaustion is a treatment target, not an assumed duty. Her adverse-health picture (stress, depression, lower wellbeing and physical health) is clinical data.",
        "The home-based rehabilitation assessment (the ICF environmental audit of the house itself: space, role, stimulation) is the Indian skill this case demonstrates.",
        "The honest gaps held: the effective components and minimum doses of family intervention are unknown. The delivery (idiom, hours, burden acknowledgement) is where the Indian adaptation earns its effect.",
        "The self-variation margin made explicit: the patient who varies medication within limits is exercising self-determination; agreed margins convert a risk into a plan.",
      ],
    },
  ],
  clinicalPearls: [
    "The founding sentence: the emotional, social and intellectual skills to live, learn and work in the community with the least professional support; the person's own community as the explicit endpoint.",
    "The paradigm shift: outcomes become social-role functioning, quality of life and family burden, asking only 'how are the symptoms?' misses everything this field treats.",
    "The ICF: impairments, activity limitations, participation restrictions (each level its own intervention logic) plus environmental factors that create or undo disability.",
    "Lamb (1984): there is always an intact portion of the ego to which treatment and rehabilitation efforts can be directed. The well part is the working address.",
    "Bachrach: hope is the acceptance of the illness and its limitations, and proceeding from there, not the promise of the life before it.",
    "Place, then train: supported employment reverses the failed ladder; the competitive job of the person's choosing first, support continued indefinitely.",
    "Supported housing (independent housing plus flexible support) is a realistic goal for the majority: once in it, most stay housed and are less likely to be hospitalised.",
    "The medication caveat: symptom control is not necessarily the priority; the side effects that wreck social-role performance are rehabilitation failures.",
    "Skills benefits accumulate slowly and need long-term training, unlike medication effects, but acquisition, maintenance and transfer to community life are all demonstrated.",
    "Family intervention: relapse reduction among the most robust findings in psychiatry, with the effective components, the minimum dose and the cultural adaptation all honestly unresolved.",
    "The stigma cycle (demoralisation, low quality of life, unemployment, reduced social networks) is interrupted by real participation, not by waiting for the label to fade.",
    "The dual-diagnosis reality: up to 50% of people with severe mental illness; the destabiliser every rehabilitation plan must ask about at every relapse.",
    "In India the ecological strategy is not the poor cousin. It is the system: the family, the workplace, the community resources ARE the service.",
  ],
  highYieldSummary: [
    "Definition and paradigm: psychiatric rehabilitation helps disabled individuals establish the emotional, social and intellectual skills to live, learn and work in the community with the least professional support, moving the clinician's perception from an illness model to a model of functional disability, with the outcome set changed to social-role functioning (relationships, work, leisure), quality of life and family burden. The honest question underneath (compensation of impairments or true recovery) remains unsettled, and does not need settling to work.",
    "The frame: the ICF (International Classification of Functioning, Disability and Health) supplies neutral descriptions of body structure and function (impairments), activities (limitations) and participation (restrictions), each level carrying its own theoretical foundation for intervention; plus the environmental-factors section treating environments as barriers or facilitators that turn a health condition into disability or restore functioning. The target population: persistent psychopathology, marked instability with frequent relapse, social maladaptation; 'chronically mentally ill' = diagnosis + prolonged duration + role incapacity; schizophrenia dominating, non-psychotic disorders qualifying; up to 50% of people with severe mental illness carry dual diagnoses, especially with substance abuse.",
    "The process and the psychiatrist: rehabilitation happens under real-life conditions; goals identified by motivational interviewing (personal costs and benefits weighed), staged by readiness for change; functional assessment and goal-setting repeated at different stages. The philosophy: strengths-based work with the well part of the ego (Lamb), hope restoration (Bachrach), self-determination as the recovery concept (Anthony), the alliance as the engagement engine, rehabilitation as network building, most patients have lost their close, stable relationships to the illness, and social support predicts recovery, life satisfaction and stress-coping. The psychiatrist's particular task: medication monitoring with the caveat that symptom control is not necessarily the highest priority (side effects can wreck social-role performance and vocational rehabilitation), and that community-living patients want medication responsibility (varying within limits without consultation) which the rehabilitation psychiatrist respects and plans for.",
    "Housing: the reform objective since the mid-1950s (resettlement from custodial institutions; most long-stay patients can live in community settings). The residential continuum (24-hour staffed homes through less-staffed apartments to independent housing) criticised as rarely available, mismatched to fluctuating needs and deaf to preferences. The successor, supported housing: independent housing plus flexible, individualised support; now demonstrably a realistic goal for the majority, who once in it mostly stay housed and are less likely to be hospitalised.",
    "Work: vocational rehabilitation predates medication (the occupational and work therapy for institutional apathy). The ladder and its dead ends: brief focused job-finding techniques (the less disabled); transitional employment and sheltered workshops (too often dead ends, the gap to competitive employment unbridgeable); cooperatives (disabled and non-disabled staff on equal terms sharing management, professionals in the background). Supported employment, the most promising model: competitive employment of the person's choosing, as soon as possible, with all needed support, continued indefinitely. Evidence: increased ability to find and keep jobs; job tenure linked with non-vocational gains (self-esteem, social integration, relationships, substance control); long-term SE associated with improved cognition, quality of life and symptom control. Honest questions: many obtain unskilled part-time jobs; follow-ups mostly 12–18 months; who benefits remains unknown; labour-market integration depends finally on society's willingness to integrate its most disabled members.",
    "Skills and family: the module programme; medication management, symptom management, substance-abuse management, conversation, interpersonal problem-solving, friendship and intimacy, recreation, workplace fundamentals, community re-entry, family involvement: taught through demonstration videos, role play, problem-solving, in-vivo and homework. The evidence: wide-range learnability; functioning improving where the skills are relevant to daily life and the environment perceives and reinforces the change; benefits accumulating slowly and needing long-term training (unlike medication); overall effective for acquisition, maintenance and transfer to community life. The family: 50–90% of disabled persons live with relatives after acute treatment; a task not chosen, carrying adverse health effects (higher stress and depression; lower wellbeing, physical health, self-efficacy), and families remain natural settings for context-dependent learning and recovery. Family intervention programmes: lowered relapse rates, improved psychosocial functioning, possibly reduced burden, stable treatment gains; effective components unclear, no minimum-dose criteria, and a cultural caveat: family caregiving may differ substantially across cultures and in minority groups within Western societies.",
    "Stigma and the outcome set: labelling's documented consequences; demoralisation, low quality of life, unemployment, reduced social networks; the labelled person, aware of the stereotypes, expects rejection and devaluation: the vicious cycle decreasing recovery chances. The converse: well-integrated people with mental illness show better psychopathology and quality-of-life outcomes, and the subjective availability of support matters. The four ordinary aspirations stand as both the goal set and the audit: own housing; education and a meaningful work career; satisfying social and intimate relationships; participation in community life with full rights.",
    "The Indian tier: the family IS the rehabilitation system (the 50–90% is the norm, not a policy outcome); the NIMHANS family-intervention tradition the Indian evidence base, with psychoeducation in the family idiom, crisis plans and the burden acknowledged. Supported housing nascent (NGO-run, metropolitan); the realistic ladder family home → day-care centre → half-way home → supported living, with the home-based rehabilitation assessment (the ICF audit of the house: space, role, stimulation) the Indian skill. The district-level DD/DMHP day centres deliver the manualised modules with existing staff: cheap, and the hub. Supported employment imports through employer liaison, the disability quota, disclosure counselling and NGO job-support. The local stigma circuit (marriage-alliance discrimination, employment loss, the temple-circuit journeys) fought with the universal participation prescription and local messaging. Costs (approx 2026): family intervention and modules cost professional time only, day-care modest, supported employment costs wage subsidies and job-coach time, and the expensive Indian failure is the untreated relapse cycle; rehabilitation is the cost-saving layer.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "psychrehab-quiz-1",
      question: "The goal of psychiatric rehabilitation is best stated as:",
      options: ["Complete symptom remission in the community", "Helping disabled individuals establish the emotional, social and intellectual skills to live, learn and work in the community with the least professional support", "Permanent supervised institutional care", "Medication adherence as the precondition for discharge"],
      correctIndex: 1,
      explanation: "The field's founding sentence: least professional support, in the person's own community, as the explicit endpoint.",
      afterSectionId: "mechanism",
    },
    {
      id: "psychrehab-quiz-2",
      question: "The ICF contributed to rehabilitation primarily by:",
      options: ["Listing psychiatric diagnoses by code", "Providing neutral descriptions of body function, activity and participation, plus an environmental-factors section treating environments as barriers or facilitators", "Replacing clinical judgement with algorithms", "Standardising symptom severity scoring"],
      correctIndex: 1,
      explanation: "The shift to functioning-neutral levels — each with its own intervention logic — with environment as a first-class determinant of disability.",
      afterSectionId: "diagnosis",
    },
    {
      id: "psychrehab-quiz-3",
      question: "The target population of psychiatric rehabilitation is defined by:",
      options: ["Schizophrenia diagnosis only", "Persistent psychopathology, marked instability with frequent relapse, and social maladaptation — with up to 50% carrying dual diagnoses", "Any first-episode psychosis", "Treatment-resistant depression alone"],
      correctIndex: 1,
      explanation: "The three features plus the definitional triad (diagnosis, prolonged duration, role incapacity); schizophrenia dominates but non-psychotic disorders qualify — and the dual-diagnosis screen is never omitted.",
      afterSectionId: "symptoms",
    },
    {
      id: "psychrehab-quiz-4",
      question: "The most promising current model of vocational rehabilitation:",
      options: ["Sheltered workshops", "Transitional employment", "Supported employment: immediate competitive placement of the person's choosing with support continued indefinitely", "Waiting for full symptom remission before placement"],
      correctIndex: 2,
      explanation: "Place, then train reverses the failed ladder — support indefinite, the evidence covering job finding and keeping plus non-vocational gains, with the honest unanswered questions about who benefits.",
      afterSectionId: "management",
    },
    {
      id: "psychrehab-quiz-5",
      question: "Compared with medication effects, benefits from social skills training:",
      options: ["Appear faster and last longer", "Occur more slowly, require long-term training, and depend on the environment perceiving and reinforcing the change", "Never occur at all", "Are pharmacokinetically identical"],
      correctIndex: 1,
      explanation: "Acquisition, maintenance and transfer to community life are all demonstrated — but at training speed, not drug speed, and only where the skills matter to the person's day.",
      afterSectionId: "management",
    },
    {
      id: "psychrehab-quiz-6",
      question: "The best-supported Indian delivery channel for the skills modules at district scale:",
      options: ["Metro private rehabilitation packages for all", "The DD/DMHP day-care centres delivering the manualised modules with existing staff — with the family home as the base and the home audit as the assessment", "Imported residential continua in every district", "Mandatory inpatient vocational units"],
      correctIndex: 1,
      explanation: "Module training is cheap and manualised; the day-care centre is the hub; and because the family home remains the base for the great majority, the ICF audit of the house itself — space, role, stimulation — is the Indian clinical skill.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State the goal definition, name the three outcome-set changes the disability model brings, and define the target population.", answer: "THE GOAL: helping disabled individuals establish the emotional, social and intellectual skills to live, learn and work in the community with the least professional support; the person's own community as the explicit endpoint. THE THREE OUTCOME CHANGES: (1) from symptom counts to SOCIAL-ROLE FUNCTIONING (relationships, work, leisure); (2) QUALITY OF LIFE as a first-class outcome; (3) FAMILY BURDEN measured rather than assumed: the illness model's single axis replaced by the disability model's three. THE TARGET POPULATION: all patients with severe mental illness need rehabilitation; the core group is defined by three features (PERSISTENT PSYCHOPATHOLOGY, MARKED INSTABILITY WITH FREQUENT RELAPSE, and SOCIAL MALADAPTATION) with 'chronically mentally ill' defined by the triad of diagnosis, prolonged duration and role incapacity; schizophrenia dominating but non-psychotic disorders qualifying; and up to 50% of people with severe mental illness carrying dual diagnoses, especially with substance abuse: the screen that is never omitted.", topic: "Foundations" },
    { question: "Walk the ICF: the three levels, the environmental dimension, and one intervention example per level.", answer: "THE THREE LEVELS: body structure and function (IMPAIRMENTS, the symptoms and cognitive deficits; intervention example: the medication review that trades sedation against role performance), activities (LIMITATIONS; what the person cannot do; intervention example: the medication-management or conversation module), and participation (RESTRICTIONS; the roles withdrawn: work, relationships, community; intervention example: supported employment restoring the worker role). Each level carries its own theoretical foundation for intervention, which is why symptom control alone so often fails to return a life. THE ENVIRONMENTAL DIMENSION: the dedicated environmental-factors section treats environments as BARRIERS OR FACILITATORS (they turn a health condition into disability or restore functioning (intervention example: the ecological strategy) employer liaison, family intervention, the housing move, modifying the environment rather than the person). The name itself matters: International Classification of Functioning, Disability and Health; the successor to the ICIDH's impairment-disability-handicap negatives, functioning described neutrally.", topic: "The frame" },
    { question: "The psychiatrist's medication caveat in one sentence, and the self-management principle it implies.", answer: "THE CAVEAT IN ONE SENTENCE: symptom control does not necessarily have the highest priority in rehabilitation, because side effects can weaken social-role performance and impair vocational rehabilitation. The sedation that abolishes symptoms and employability together is a bad trade. THE SELF-MANAGEMENT PRINCIPLE: community-living patients want medication responsibility, including varying it within limits without consultation, and the rehabilitation psychiatrist respects and plans for that: the agreed margins written into the plan, the variation discussed openly at review, the self-determination cultivated rather than policed. The prescription is judged against the life goals, not the symptom chart alone, and the patient who manages her own medicines well is the programme succeeding, not misbehaving.", topic: "Clinical practice" },
    { question: "Name the four ordinary aspirations and the evidence-backed model for housing and for work.", answer: "THE FOUR ASPIRATIONS: (1) a home of one's own; (2) education and a meaningful work career; (3) satisfying social and intimate relationships; (4) participation in community life with full rights. HOUSING: supported housing (independent housing plus flexible, individualised support services) is now demonstrably a realistic goal for the majority: once in it, most stay housed and are less likely to be hospitalised; the residential continuum (24-hour staffed homes → less-staffed apartments → independent housing) its criticised predecessor (rarely available, mismatched to fluctuating needs, ignoring preferences). WORK: supported employment (placement in competitive employment of the person's choosing, as soon as possible, with all needed support, continued indefinitely) the most promising model, reversing the failed 'train, then place' ladder; evidence covers finding and keeping jobs plus non-vocational gains (self-esteem, social integration, relationships, substance control) and, long-term, improved cognition, quality of life and symptom control, with the honest riders (unskilled part-time jobs; 12–18-month follow-ups; who-benefits unknown; society's willingness).", topic: "Programme areas" },
    { question: "Why did transitional employment and sheltered workshops fail, and what does supported employment do differently?", answer: "WHY THE LADDER FAILED: transitional employment offered temporary environments teaching vocational skills; too often a dead end, the gap to competitive employment unbridgeable; sheltered workshops kept the pre-vocational waiting room permanent, also often a dead end; both reversed the person's own choosing and kept readiness a test to be passed rather than a capacity to be demonstrated. WHAT SE DOES DIFFERENTLY: 'place, then train'; the competitive job of the person's choosing comes FIRST, as soon as possible, with all needed support wrapped around and continued INDEFINITELY; the job is the assessment and the training ground. THE EVIDENCE: increased ability to find and keep jobs; job tenure linked with non-vocational gains (self-esteem, social integration, relationships, substance control); long-term SE employment associated with improved cognition, quality of life and symptom control. THE HONEST QUESTIONS STILL OPEN: many obtain unskilled part-time jobs; follow-ups mostly 12–18 months; we do not yet know who benefits and who does not; and labour-market integration depends finally on society's willingness to integrate its most disabled members.", topic: "Vocational" },
    { question: "Name six social-skills modules and the three evidence caveats.", answer: "SIX MODULES (any six of the ten): medication management; symptom management; substance-abuse management; conversation; interpersonal problem-solving; friendship and intimacy; recreation; workplace fundamentals; community re-entry; family involvement. The teaching method matters as much as the list: demonstration videos, role play, problem-solving, in-vivo and homework assignments. THE THREE CAVEATS: (1) RELEVANCE; functioning improves only when the trained skills are relevant to the person's daily life and their own goals; (2) REINFORCEMENT: the environment must perceive and reinforce the changed behaviour, or the skill dies in the classroom; (3) SLOW ACCUMULATION, unlike medication effects, benefits accumulate slowly and need long-term training; the programmes that endure, deliver. The overall verdict stands despite the caveats: effective for acquisition, maintenance and transfer to community life.", topic: "Skills" },
    { question: "The family-intervention evidence quartet, its two honest gaps, and the cultural caveat.", answer: "THE QUARTET: family intervention programmes are effective in (1) LOWERING RELAPSE RATES, among the most robust findings in psychiatry; (2) IMPROVING PSYCHOSOCIAL FUNCTIONING; (3) POSSIBLY REDUCING BURDEN; (4) with STABLE TREATMENT GAINS over time. THE TWO HONEST GAPS: the EFFECTIVE COMPONENTS are unclear (the programmes differ in frequency and length, and no one knows which ingredient carries the effect), and there are NO MINIMUM-DOSE CRITERIA; nothing to tell the district clinic how much is enough. THE CULTURAL CAVEAT: most programmes were developed in Western deinstitutionalisation contexts, and family caregiving may differ substantially in other cultures and in minority groups within Western societies. Indian delivery, not Western import: psychoeducation in the family idiom, crisis plans, the caregiver-burden acknowledged, the NIMHANS tradition as the local evidence base. The context that makes it urgent: 50–90% of disabled persons live with relatives after acute treatment. A task the families did not choose, carrying adverse health effects (higher stress and depression; lower wellbeing, physical health, self-efficacy), and the relatives' frustration (ignored, insufficiently informed, unappreciated, afraid of blame) is the engagement problem the first session must solve.", topic: "Family" },
    { question: "The stigma vicious cycle, the integration evidence, and how rehabilitation interrupts the cycle.", answer: "THE CYCLE: the label applied → the labelled person, aware of the stereotypes, EXPECTS rejection and devaluation → the documented consequences follow. DEMORALISATION, low quality of life, UNEMPLOYMENT, REDUCED SOCIAL NETWORKS → each loss shrinking the arena in which recovery can happen → the vicious cycle DECREASING RECOVERY CHANCES, withdrawal confirming the stereotype. THE INTEGRATION EVIDENCE: well-integrated people with mental illness show better psychopathology and quality-of-life outcomes, and the subjective availability of support matters in its own right. HOW REHABILITATION INTERRUPTS IT: with real participation (the real role, the real work, the visible membership) prescribed as both outcome and treatment; the engineering from both ends of the two-way street: disclosure counselling and employer education on the society's side, the supported job and the day-centre attendance on the person's, the quota route where the law gives it. The Indian circuit named locally: marriage-alliance discrimination, employment loss, the temple-circuit journeys; the participation prescription universal, the anti-stigma messaging local, delivered inside the family psychoeducation.", topic: "Stigma" },
  ],
  faqs: [
    { question: "Isn't rehabilitation just occupational therapy?", answer: "No: it is a whole framework: a disability model of outcomes, an ICF assessment across body, activity, participation and environment, personal goal-setting by motivational interviewing, and programmes across housing, work, relationships, families and rights, with the person's own life, not the ward timetable, as the setting. Occupational therapy is one pair of hands inside it." },
    { question: "She wants to adjust her own medicines: shouldn't the doctor decide?", answer: "Rehabilitation's premise is self-determination: patients managing medication within agreed limits is success, not insubordination. The plan is built WITH her goals (keeping the job matters as much as silencing the voices) and the agreed margin is written down, discussed at review, and respected." },
    { question: "Can he really work?", answer: "The most promising model (supported employment) begins with that assumption: a competitive placement of his choosing, immediate, with support continued indefinitely. The honest riders: many obtain unskilled part-time jobs, the follow-up evidence runs 12–18 months, and we cannot yet predict who benefits, but the waiting-until-ready alternative has been the measured failure for decades." },
    { question: "Won't training social skills just wear off?", answer: "Slower than drug effects, and needing long-term training, but acquisition, transfer to community life and maintenance are all demonstrated when the skills matter to the person's day and the environment notices and rewards the change. The wear-off happens when the classroom ends and nobody at home or work reinforces the new behaviour, which is why the family and the workplace are part of the prescription." },
    { question: "We are exhausted, and now you want us in family sessions too?", answer: "The family evidence is exactly for you: the interventions lower relapse and support functioning, and your exhaustion is a target, not an assumed duty. The sessions run in your language, at your hours, with the crisis plan written so the next relapse stops running the household, and your own health is monitored as part of the patient's plan." },
    { question: "He was refused the job when they learned his diagnosis. What can rehabilitation do?", answer: "Fight the label's vicious cycle with real participation: disclosure counselling (what to say, to whom, when), employer education, the disability quota route where it applies, and the visible working life that the neighbourhood cannot discount. Integration is both the outcome and the treatment; the discrimination is a clinical variable, not a fact of nature." },
    { question: "What is a day-care centre actually for?", answer: "It is the rehabilitation hub: the manualised skills modules (medication management, conversation, community re-entry) delivered by existing staff, plus the routine and the company that a shrunk day is missing. It is not passing time. It is the cheapest effective programme layer the district has, and the family home's partner rather than its replacement." },
    { question: "The marriage negotiation collapsed when they learnt the diagnosis: what do we do?", answer: "That is the local face of the global stigma cycle, and it is treated with the participation prescription: the real role, the visible work, the family's own chosen timing of disclosure; plus the anti-stigma messaging inside the family psychoeducation. The cycle weakens when the life is visible; the alliance that negotiates next time should meet a person with a job, a role and a household that functions." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — ICIDH (1980) and the International Classification of Functioning, Disability and Health: the functioning-disability framework rehabilitation assesses by" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 6.4.1 (Rössler) — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Falloon I et al. and Leff J et al. — the family-intervention relapse evidence lineage" },
      { source: "Bond G et al., Becker D and Drake R — the supported-employment evaluations (job finding and keeping, non-vocational gains)" },
      { source: "Liberman R P et al. — the social-skills module trials: acquisition, transfer and maintenance" },
      { source: "Corrigan P et al. — the supported-housing evidence: the majority stay housed, less hospitalisation" },
    ],
    reviews: [
      { source: "Rössler W — Psychiatric rehabilitation today: an overview (2006)" },
      { source: "Lamb H R (1984) — the well part of the ego; Bachrach L — hope, system fit and the rehabilitation philosophy" },
      { source: "Anthony W A — the recovery concept; Miller W and Rollnick S — motivational interviewing for goal identification" },
      { source: "Szmukler G et al. — the caregiving-burden literature: the 50–90% figure and the caregiver health effects" },
      { source: "Link B and Phelan J — labelling and the stigma consequences lineage" },
      { source: "The Indian tier — the NIMHANS family-intervention tradition, DD/DMHP day-centre programme documentation, NGO rehabilitation-sector reports; cost realities (approx 2026)" },
    ],
    patientResources: [
      { source: "The four-aspiration plan (housing, work, relationships, participation) — the frame this course hands to every Indian family" },
      { source: "Tele-MANAS 14416 and the district day-care centre — the two reachable channels at district scale" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the life goals this field works on, the programmes (housing, work, skills, family sessions), the medicine trade-off, the local stigma answers.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The goal sentence, the ICF, the target population, the two strategies, the four aspirations with their evidence.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "43 min",
      description: "Everything: the goal-setting craft, the medication trade-off, the family delivery, the home audit, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The goal sentence, the paradigm shift, the ICF, the target population.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the goal definition and walk the ICF's three levels plus the environment cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "How disability is produced and reversed; the two strategies; the engagement engine.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the participation restriction survives the quietened symptoms and why the person's own goals drive the programme." },
    { number: 3, title: "Clinical Practice", description: "The assessment, the goal-setting, the programme areas, the medication trade-off.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the ICF assessment, the four-aspiration consultation and the honest riding-script for supported employment." },
    { number: 4, title: "Indian Context", description: "The family as the system, the day-care hub, the home audit, the local stigma circuit.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the family intervention in the family idiom and audit the house (space, role, stimulation)." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the rehabilitation essay cold and recite the programme-evidence pairs without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 6.4.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Rössler W — Psychiatric rehabilitation today: an overview (the chapter's own synthesis companion)", sourceType: "review", year: "2006", dateReviewed: "2026-09-29" },
    { id: "S3", source: "WHO — ICIDH (1980) and the International Classification of Functioning, Disability and Health: the functioning-disability framework", sourceType: "classification", year: "1980 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Lamb H R (1984) — the well part of the ego; and Bachrach L — hope, system fit and the rehabilitation philosophy", sourceType: "primary", year: "1970s–1990s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Anthony W A — the recovery concept (rights, partnership, self-determination)", sourceType: "primary", year: "1990s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Miller W, Rollnick S — motivational interviewing for goal identification and readiness staging", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Liberman R P et al. — the social-skills modules: content, method, and the acquisition-transfer-maintenance evidence", sourceType: "primary", year: "1980s–2000s", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Falloon I et al. and Leff J et al. — the family-intervention relapse-evidence trials", sourceType: "trial", year: "1980s–1990s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Szmukler G et al. — the caregiving-burden literature: the 50–90% living-with-relatives figure and the caregiver health effects", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Link B and Phelan J — labelling and the stigma consequences lineage (demoralisation, unemployment, reduced networks; the integration evidence)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Bond G et al., Becker D and Drake R — the supported-employment evidence (job finding and keeping; non-vocational gains; the honest unanswered questions)", sourceType: "systematic-review", year: "1990s–2010s", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Corrigan P et al. — the supported-housing evidence: the majority stay housed, less hospitalisation", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S13", source: "The Indian tier — the NIMHANS family-intervention tradition, DD/DMHP day-centre programme documentation, NGO rehabilitation-sector reports; cost realities (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The goal and the paradigm shift: helping disabled individuals establish the emotional, social and intellectual skills to live, learn and work in the community with the least professional support, with outcomes measured as social-role functioning (relationships, work, leisure), quality of life and family burden rather than symptom counts; the honest question of compensation versus recovery unsettled and not needing settlement.", grade: "established", sources: ["S1", "S2"] },
    { text: "The ICF frame: neutral descriptions of body structure and function (impairments), activities (limitations) and participation (restrictions), each level carrying its own theoretical foundation for intervention, plus the environmental-factors section treating environments as barriers or facilitators that turn a health condition into disability or restore functioning.", grade: "established", sources: ["S1", "S3"] },
    { text: "The target population: persistent psychopathology, marked instability with frequent relapse, and social maladaptation; 'chronically mentally ill' defined by diagnosis, prolonged duration and role incapacity; schizophrenia dominating with non-psychotic disorders qualifying; up to 50% of people with severe mental illness carrying dual diagnoses, especially with substance abuse.", grade: "established", sources: ["S1"] },
    { text: "The engagement engine: the well part of the ego (Lamb (an intact portion always present to direct efforts at), the restoration of hope (Bachrach) accepting the illness and its limitations and proceeding from there), self-determination as the recovery concept (Anthony), the therapeutic alliance, and rehabilitation as network building, most patients having lost close, stable relationships to the illness, social support predicting recovery, life satisfaction and stress-coping.", grade: "established", sources: ["S1", "S4", "S5"] },
    { text: "The goal-identification process: personal goals elicited by motivational interviewing (personal costs and benefits of the listed needs weighed), readiness-for-change assessment staging the work, and functional assessment with individual goal-setting repeated at different stages; rehabilitation carried out under real-life conditions.", grade: "supported", sources: ["S1", "S6"] },
    { text: "The medication caveat: symptom control does not necessarily have the highest priority; side effects can weaken social-role performance and impair vocational rehabilitation; community-living patients want medication responsibility including varying it within limits without consultation, which the rehabilitation psychiatrist respects and plans for.", grade: "established", sources: ["S1"] },
    { text: "Supported housing: independent housing plus flexible, individualised support services; now demonstrably a realistic goal for the majority of disabled people, who once in it mostly stay housed and are less likely to be hospitalised; the residential continuum (24-hour staffed homes through less-staffed apartments to independent housing) criticised as rarely available, mismatched to fluctuating needs and ignoring preferences.", grade: "established", sources: ["S1", "S12"] },
    { text: "Supported employment: placement in competitive employment of the person's choosing as soon as possible, with all needed support continued indefinitely; the most promising vocational model, reversing the 'train, then place' ladder whose transitional employment and sheltered workshop rungs too often dead-end; evidence for job finding and keeping plus non-vocational gains (self-esteem, social integration, relationships, substance control), and long-term improvements in cognition, quality of life and symptom control, with the honest riders (unskilled part-time jobs; 12–18-month follow-ups; who-benefits unknown; society's willingness to integrate its most disabled members).", grade: "established", sources: ["S1", "S11"] },
    { text: "The skills modules: the ten-module programme (medication management, symptom management, substance-abuse management, conversation, interpersonal problem-solving, friendship and intimacy, recreation, workplace fundamentals, community re-entry, family involvement) taught by demonstration videos, role play, problem-solving, in-vivo and homework; effective for acquisition, maintenance and transfer to community life when relevant to the person's day and reinforced by the environment; benefits accumulating slowly and needing long-term training, unlike medication effects.", grade: "established", sources: ["S1", "S7"] },
    { text: "The family tier: 50–90% of disabled persons living with relatives after acute treatment (a task not chosen, with adverse caregiver health effects, higher stress and depression, lower wellbeing, physical health and self-efficacy); family intervention programmes effective in lowering relapse rates, improving psychosocial functioning, possibly reducing burden, with stable treatment gains: the effective components unclear, no minimum-dose criteria, and family caregiving possibly differing substantially across cultures and in minority groups within Western societies.", grade: "established", sources: ["S1", "S8", "S9"] },
    { text: "The stigma cycle: labelling's documented consequences (demoralisation, low quality of life, unemployment, reduced social networks) with the labelled person expecting rejection and devaluation, a vicious cycle decreasing recovery chances; the converse integration evidence: well-integrated people with mental illness showing better psychopathology and quality-of-life outcomes, the subjective availability of support mattering.", grade: "established", sources: ["S1", "S10"] },
    { text: "The Indian tier: the family as the rehabilitation system (the 50–90% as norm, not policy outcome; the NIMHANS family-intervention tradition as the local evidence base; psychoeducation in the family idiom, crisis plans, the burden acknowledged); the day-care centre (DD/DMHP district tier) as the manualised-module hub with existing staff; the realistic housing ladder (family home → day-care centre → half-way home → supported living) with the home-based ICF environmental audit (space, role, stimulation) as the Indian skill; the supported-employment logic imported through employer liaison, the disability quota, disclosure counselling and NGO job-support; the local stigma circuit (marriage-alliance discrimination, employment loss, temple-circuit journeys); costs approx 2026 (family intervention and modules professional time only; day-care modest; supported employment wage subsidies and job-coach time; the untreated relapse cycle the expensive failure).", grade: "supported", sources: ["S13"] },
  ],
};
