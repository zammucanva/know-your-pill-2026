import type { PsychiatryCourse } from "./types";

/**
 * COMMUNITY MENTAL HEALTH SERVICES — canonical Psychiatry concept
 * course (migration batch 16, Group R — social psychiatry &
 * services).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/mh-services.md — untouched foundation),
 * whose own source_map: NOTP 2e (2009) ch 7.5 + 7.2 (Part 8)
 * — Burns' community-services synthesis with the Slade,
 * Tansella & Thornicroft service-needs companion —
 * re-researched against the lineages the note itself cites
 * (Stein & Test's original assertive community treatment
 * trial; Burns' UK AO evaluations and the balance-of-care
 * tradition; the UK Department of Health's Care Programme
 * Approach guidance; Tyrer's case-management trials; Muijen's
 * home-treatment evaluations; Thornicroft & Tansella's matrix
 * model; Goldberg's primary-care interface; Leff & Trieman's
 * reprovision studies; Harding's longitudinal outcome
 * tradition; the Goffman/Barton institutionalisation critique)
 * with per-claim provenance.
 *
 * Neuroscience honesty: the note grounds no brain region and
 * no neurotransmitter — service architecture is organisational
 * science in this lineage, so brainRegions and neurotransmitters
 * are empty by design and the gap is recorded in contentGaps,
 * never papered over with decorative circuitry.
 *
 * Drug routes: the note assigns no medication a planning role —
 * the daily clozapine visit appears as service-delivery logic
 * (the delivered treatment that makes outreach work), not as a
 * pharmacology route; drugLinks is empty by design and the
 * boundary is recorded, never invented.
 */
export const mhServicesCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "mh-services",
  title: "Community Mental Health Services",
  shortName: "MH Services",
  kind: "concept",
  category: "Social Psychiatry & Services",
  groupLetter: "R",
  groupName: "Social psychiatry & services",
  learningPath: ["Psychiatry", "Social Psychiatry & Services", "Community Mental Health Services"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The architecture of care: beds, teams, tiers and the planning discipline behind them",

  summary:
    "Community mental health services are the planned architecture of care outside the hospital: sectorised multidisciplinary teams, case management, assertive outreach and supported accommodation. This course teaches the planning discipline. The numbers, the documents and the interfaces that hold it together.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "List the service components of a comprehensive community service with their functions: the inpatient unit and its alternatives, the community mental health team, outpatient and office care, assertive outreach, supported accommodation and the specialised teams.",
    "Describe the CMHT in full: sector size (20-50,000 population), the team-size logic (under 6 ineffective, over 12-15 unwieldy), the caseload ceiling (200-250 patients), the clinical-leadership problem, and the assessments with the home-assessment dividends.",
    "Use the care-plan document's structure: the ten consideration domains, the needs-interventions-responsibility-review format, and the risk assessment with crisis and contingency plans.",
    "Run the waiting-list arithmetic: routine within 2-4 weeks, the 3-week failed-appointment cliff, urgent within days, emergency same-day, and the 20%-surplus formula.",
    "Describe the GP-liaison models (the link-worker and the monthly shared-care meetings) with the boundary-clarity warning.",
    "Explain assertive outreach: the original Stein and Test evidence, the target population, the method, and the honest limits; no slavish model fidelity, and the verdict that it is not outreach itself that is therapeutic.",
    "Recite the four supported-accommodation levels with their resident numbers and populations, with the voluntary-agency efficiency finding.",
    "Apply the planning logic (needs assessment, the balance of care, integration and the sector arithmetic) and state the ethics questions of community care.",
  ],
  quickFacts: [
    { label: "The CMHT quartet", value: "20-50k / 6-15 / 200-250", detail: "Sector of 20-50,000 population (current Western European sizes); team of 6-15 members; team caseload maximum of 200-250 patients, fewer for complex populations, with sectors shrinking as investment grows and expanding as specialised teams take functions, the caseload kept fairly constant by the moving boundary" },
    { label: "The team-size logic", value: "The 6-15 band", detail: "Under 6 staff cannot provide comprehensive care or cross-cover; over 12-15 becomes unwieldy with management and information transfer, skill-sharing and generic working inside the band" },
    { label: "The case-management ceiling", value: "15-30 patients", detail: "Explicitly limited caseloads: enough for a relationship, few enough for systematic and recorded review; caseloads beyond this become crisis-response rather than care" },
    { label: "The access discipline", value: "Routine 2-4 weeks", detail: "Sooner is unproductive; beyond 3 weeks the failed-appointment rate rises steeply; urgent (most psychotic episodes) within days; emergencies (immediate risk) same-day" },
    { label: "The surplus formula", value: "Last year + 20%", detail: "The practical approach: last year's assessment count plus 20% allocated, leaving weekly emergency capacity; the 400-assessment example yielding nine slots weekly, one kept emergency-free" },
    { label: "The AO verdict", value: "Not outreach itself", detail: "Stein and Test's original: improved clinical and social outcomes with substantially reduced hospitalisation at slightly lower cost. The honest reading being that improved outcomes follow only from additional effective treatments; the relationships and the delivered treatments, not the outreach ritual" },
    { label: "The residential continuum", value: "Four levels", detail: "Group homes (unstaffed, visited by community teams) through day-staffed hostels (1-2 staff daily, typically 4-8 residents) and night-staffed hostels (sleeping-in staff, 10-20 residents) to the 24-hour staffed/nursed hostel: expensive, serving populations of 500,000-1,000,000" },
    { label: "The voluntary-agency finding", value: "Efficient but risk-selective", detail: "Voluntary agencies more efficient at long-term residential care but reluctant with violence or substance histories: a mixed economy working best, with shared adapted houses preferred over purpose-built units (integration and stigma-reduction)" },
  ],
  knowledgeGraph: [
    { label: "Psychiatric Rehabilitation", type: "condition", href: "/psychiatry/psychiatric-rehabilitation/", note: "The partner discipline: the CMHT delivers the case management and the planning; rehabilitation supplies the goals and the functioning outcomes the machinery exists to deliver" },
    { label: "Psychiatry in Primary Care", type: "condition", href: "/psychiatry/primary-care-psychiatry/", note: "The interface this course's liaison discipline serves: the link-worker, the timetabled joint meetings and the shared care, with the boundary-clarity warning (in-batch lesson)" },
    { label: "The Voluntary Sector", type: "condition", href: "/psychiatry/voluntary-sector/", note: "The more efficient long-term residential provider (risk-selective) whose mixed economy with the statutory tier this course's accommodation levels run on (in-batch lesson)" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The CMHT's core caseload and the assertive-outreach target population. The severe mental illness priority the sector arithmetic serves" },
    { label: "Therapeutic Communities", type: "condition", href: "/psychiatry/therapeutic-communities/", note: "The institutionalisation critique's lineage (Goffman, Barton): the tradition whose asylum failure motivated this whole architecture" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The compulsion questions: community treatment orders and the migration of compulsion from the asylum building to the community" },
    { label: "ID Treatment & Services", type: "condition", href: "/psychiatry/id-treatment-services/", note: "The parallel service-architecture course: the same planning logic (sectors, teams, tiers) in the intellectual-disability system" },
    { label: "Delirium in the Elderly", type: "condition", href: "/psychiatry/elderly-delirium/", note: "The physical-health domain of the care plan's ten: the comorbid medical emergency the community team must not misread as psychiatry" },
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The revolving-door population's destabiliser: poor compliance and substance misuse among the assertive-outreach criteria, and one of the ten consideration domains" },
    { label: "Refugees & Mental Health", type: "condition", href: "/psychiatry/refugee-mental-health/", note: "The specialised service tier: a population whose service design tests the planning discipline's flexibility and the resource realism underneath it (in-batch lesson)" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Community mental health services are an architecture, and their engine is a planning discipline rather than a treatment: the population is counted first. The sector (20-50,000 in Western Europe) defines the team, the team defines the caseload (200-250 maximum), and the caseload defines the case manager's list (15-30, explicitly limited). The component inventory assembles around this hub: the inpatient unit and its alternatives (crisis houses, home treatment, the balance-of-care logic deciding the mixture), the community mental health team itself with its sectorisation and multidisciplinary staffing, the outpatient and office tier, assertive outreach for the un-stabilisable, and supported accommodation across four levels up to the 24-hour-staffed hostel that only 500,000-1,000,000 populations justify. The multidisciplinary team makes it function: 6-15 members with skill-sharing and generic working, held together by the clinical-leadership settlement; clear leadership established without inhibiting initiative, leadership and management separated with defined roles and good relationships. Case management converts the structure into individual care: the Care Programme Approach document; identified problems across the ten consideration domains, each with interventions, responsible staff and a review date, plus the risk assessment with crisis and contingency plans: coordinating the multi-agency machinery that complex care fails without. The access discipline keeps the front door honest: routine within 2-4 weeks (sooner unproductive, beyond 3 weeks failed appointments climb steeply), urgent within days, emergency same-day, and last year's count plus 20% keeping the emergency capacity free. The balance of care and the integration requirement close the system: beds versus community components held in their inverse relationship, the CMHT as the service's hub-and-spoke centre, the GP interface run by timetabled joint meetings or the link-worker, with the resource realism underneath it all, the balance between comprehensive planning's appeal and the pragmatic incrementalism that fits most systems' actual development.",
    steps: [
      "The population-need assessment: the planning discipline begins with the population, not the building. The sector arithmetic, the treated-cases targets and the component inventory that follows from them.",
      "Sectorisation: the CMHT responsible for a defined geographic sector (20-50,000 population in Western Europe), sectors shrinking with investment and expanding as specialised teams take functions; the caseload kept fairly constant by the moving boundary.",
      "The multidisciplinary staffing: 6-15 members with skill-sharing and generic working; under 6 unable to provide comprehensive care or cross-cover, over 12-15 unwieldy with management and information transfer; clear clinical leadership established without inhibiting initiative.",
      "Case management as the delivery engine: staff carrying explicitly limited caseloads (15-30), the needs-interventions-responsibility-review cycle, and the CPA document with its crisis and contingency plans coordinating the multi-agency machinery.",
      "The balance of hospital and community: beds versus community components in their inverse relationships, the alternatives-to-admission inventory; the deinstitutionalisation lessons deciding the mixture.",
      "The integration requirement: the CMHT as the service's hub-and-spoke centre, the timetabled GP interface, and the wider agencies met by the same showing-up discipline; meeting people pays dividends even once.",
      "The resource realism: the balance between comprehensive planning's appeal and the pragmatic incrementalism that fits most systems' actual development; budgets, not blueprints, setting the pace.",
    ],
    grade: "supported",
  },
  brainRegions: [],
  neurotransmitters: [],
  pathways: [
    {
      id: "referral-allocation-pathway",
      name: "The referral-to-allocation pathway (how a patient enters the team)",
      steps: [
        { label: "The referral arrives", detail: "GP, self, hospital or agency: into the sector team's allocation meeting" },
        { label: "The allocation discipline", detail: "Delegated to the manager or senior clinician: pre-assessment discussion unprofitable; the classification, not the debate, is the task" },
        { label: "The urgency decision", detail: "Routine (2-4 weeks), urgent (most psychotic episodes) within days, or emergency (immediate risk) same-day" },
        { label: "The assessment", detail: "Psychiatric-led in most services, home-based where the patient is severely ill: the home assessment's considerable dividends" },
        { label: "The new-patient review", detail: "The team's broad, experienced overview allocating the patient fairly among the case managers" },
        { label: "Case management begins", detail: "The 15-30 caseload, the ten-domain care plan with interventions, responsible staff and review dates, the crisis and contingency plans written" },
      ],
      clinicalManifestation: "The patient who enters a system rather than a queue: seen at the right speed, held by a named professional, and discharged only when the routine review finds them ready.",
      grade: "supported",
    },
    {
      id: "crisis-pathway",
      name: "The crisis pathway (immediate risk to treatment)",
      steps: [
        { label: "The emergency recognised", detail: "Immediate risk: the same-day assessment the surplus calculation exists to keep possible" },
        { label: "The bed-versus-alternative fork", detail: "Admission, or the alternatives: home treatment and the crisis house; the balance-of-care arithmetic at the front door" },
        { label: "The admission-avoidance option", detail: "Crisis resolution and home treatment as the admission-avoidance teams: intensive community support holding what a bed once held" },
        { label: "The admission taken", detail: "Where required, with the discharge planning begun at once: the post-discharge care the CMHT exists to provide" },
        { label: "The contingency written", detail: "The crisis and contingency plans in the care plan: the written response to the NEXT one, agreed with patient and family between episodes" },
      ],
      clinicalManifestation: "The relapse that meets a system rather than a scramble: same-day assessment, the least restrictive effective option, and the next crisis already planned for.",
      grade: "supported",
    },
    {
      id: "revolving-door-pathway",
      name: "The revolving-door pathway (the hard-to-engage patient)",
      steps: [
        { label: "The pattern declared", detail: "Frequent dangerous relapses, poor compliance, substance misuse, personality difficulties, offending: the revolving door" },
        { label: "The standard team fails to hold", detail: "Missed appointments, the unmonitored relapse, the admission calendar: the CMHT's standard case management insufficient" },
        { label: "The AO allocation", detail: "Where CMHTs function well, assertive outreach takes only the un-stabilisable: the explicit decision the team must own" },
        { label: "The AO method", detail: "Proactive visiting at home even when reluctant; daily team meetings; several members per patient (safety and extensive needs); the practical culture: shopping, accommodation, daily medicine delivery" },
        { label: "The honest outcome", detail: "Improved outcomes follow only from additional effective treatments delivered (the daily clozapine visit's logic) not from outreach itself; local adjustment sensible, caseloads often exceeding the recommended 1:10" },
      ],
      clinicalManifestation: "The admission calendar lengthening, not because the team visited more, but because the visits delivered more: the treatments and relationships doing the work.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "institutionalisation-critique", time: "1950s-1960s", title: "The institutionalisation critique", description: "Goffman and Barton's critique of the total institution: the asylum's iatrogenic deficits motivating the whole architecture that follows (the therapeutic-communities lineage the note cites).", phase: "onset" },
    { id: "stein-test", time: "1980", title: "Stein and Test: the community movement's trial", description: "Alternatives to mental hospital treatment: the original assertive community treatment trial in the US tradition; improved clinical and social outcomes with substantially reduced hospitalisation at slightly lower cost, becoming the most replicated and researched specialist team model.", phase: "onset" },
    { id: "reprovision-studies", time: "1980s-1990s", title: "The reprovision studies", description: "Leff and Trieman's reprovision studies deliver the deinstitutionalisation lesson base: resettlement working where the services followed, failing where they did not; the balance-of-care logic born from the difference.", phase: "peak" },
    { id: "cmht-cpa-consolidation", time: "1990s", title: "The CMHT and the CPA consolidate", description: "The sectorised multidisciplinary team becomes the service's hub in Western Europe; the UK Department of Health's Care Programme Approach gives the care-plan document its structure: identified problems, interventions, responsible staff, review dates, crisis and contingency plans; Tyrer's case-management trials set the intensive-versus-standard questions.", phase: "peak" },
    { id: "specialised-teams", time: "1990s-2000s", title: "The specialised developments", description: "Assertive outreach evaluated in the UK (Burns et al.); home treatment and crisis resolution (Muijen et al.); early intervention in psychosis on the duration-untreated-psychosis rationale: the generic team's functions progressively offloaded to specialists, sectors expanding as they offload.", phase: "duration" },
    { id: "indian-present", time: "The Indian present", title: "The district model reads through the chapter", description: "The District Mental Health Programme's mobile teams and community OPD outreach map onto the sector-teams logic, with the resource reality producing smaller teams, larger sectors and medical-officer-led staffing; NMHS 2015-16 the needs-assessment base; the family home the accommodation continuum's default.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the planning discipline as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "Structural, not a prevalence figure: the note's epidemiology is the service arithmetic itself: Western European sectors of 20-50,000 population; teams of 6-15 members; team caseload maxima of 200-250 patients (fewer for complex populations); case-management caseloads of 15-30; team meetings 1-2 weekly of 1.5-2 hours; day-staffed hostels of typically 4-8 residents and night-staffed hostels of 10-20; the 24-hour staffed level-4 hostel serving populations of 500,000-1,000,000. The remit the numbers serve: post-discharge care and primary-care-and-private-sector overflow, the severe mental illness priority (psychoses and severe affective disorders), with the honesty that diagnosis is not all: social adversity, personality difficulty and substance complications can make secondary care necessary for 'minor' disorders, threshold tools of limited use, clinical assessment deciding; and in systems with little private care, CMHTs also treat the mild and transient.",
    indianPrevalence: "The DMHP as the Indian CMHT: the district programme's mobile teams, the community OPD outreach and the treated-cases targets map to the sector-teams logic, with the resource reality producing smaller teams, larger sectors and medical-officer-led rather than multidisciplinary staffing, the 200-250 caseload translating to the district mental health unit's realistic load. The accommodation continuum's Indian default is the family home (level 0-1 functioning), the halfway-home and group-home sector NGO-scarce: the NGO-family mixed economy (the NIMHANS family-ward tradition, the day-care centres) the actual continuum. NMHS 2015-16 is the needs-assessment base.",
    lifetimeRisk: "Not applicable as a risk: this is a service-architecture course; the 'exposure' is every severe mental illness the sector contains, and the question is never whether components exist but whether the balance between them is planned.",
    genderRatio: "Not applicable in this lineage: the note's arithmetic is ungendered; the populations it sizes (sectors, teams, caseloads, hostels) carry no gender ratio.",
    ageOfOnset: "Not applicable as an onset: the one age datum the note carries is the community-treatment-order population: mandated community treatment, largely for young psychotic individuals, with its contested evidence.",
    indianNotes: "Costs (approx 2026): the DMHP's per-district budgets and the rupee-costs of the components (the staffed hostel the expensive end, the family-delivered care the subsidy-dependent end) the chapter's resource-realism reading Indian budgets honestly.",
  },
  etiology: [
    { category: "social", factor: "Deinstitutionalisation's unfinished business", details: "The reprovision studies' lesson: resettlement without the following services fails. The architecture this course teaches is the answer to that failure, its balance-of-care decisions and component inventory the machinery that makes community care real rather than nominal." },
    { category: "social", factor: "The caseload primary care cannot hold", details: "Post-discharge care and primary-care-and-private-sector overflow define the CMHT's remit: the severe mental illness priority (psychoses and severe affective disorders), with the honesty that social adversity, personality difficulty and substance complications can make secondary care necessary for 'minor' disorders; threshold tools of limited use, clinical assessment deciding." },
    { category: "psychological", factor: "The hard-to-engage revolving-door population", details: "Frequent dangerous relapses, poor compliance, substance misuse, personality difficulties, offending: the population that drives assertive outreach: proactive visiting of the reluctant, daily team meetings, several members per patient, the practical culture beyond professional boundaries." },
    { category: "environmental", factor: "The support-dependent population", details: "Many patients remain well only with adequate support: the fact that generates the four-level accommodation continuum, the voluntary-agency mixed economy and the balance between residential cost and clinical need." },
    { category: "environmental", factor: "Resource realism", details: "The balance between comprehensive planning's appeal and the pragmatic incrementalism that fits most systems' actual development: budgets, not blueprints, setting the pace; the inverse relationships between beds and community components the planner's constant." },
  ],
  symptomClusters: [
    {
      category: "1. The access signals (what the waiting list shows)",
      symptoms: ["Routine waits drifting beyond the 2-4 week window: the failed-appointment rate rising steeply past three weeks", "Emergencies arriving to find no same-day capacity: the surplus never calculated, the emergency slots consumed by routine backlog", "Urgent referrals (most psychotic episodes) queuing as routine: the urgency classification never delegated, never audited", "The allocation meeting spent on pre-assessment discussion: unprofitable business crowding out the classification the meeting exists to make"],
    },
    {
      category: "2. The team-function signals",
      symptoms: ["A team under 6 unable to cross-cover: leave, illness and vacancy stopping the service", "A team over 12-15 losing information: management and information transfer failing at the seams", "The clinical-leadership confusion: nobody knowing who sets clinical priorities; the informal democratic style without its settlement", "Routine monitoring absent: reviews running only on crisis, the discharge-ready patients never identified"],
    },
    {
      category: "3. The residential-need signals",
      symptoms: ["The level-1 picture: independent living sustained by community-team visits alone", "The level-2 picture: cooking, cleaning and daily structure needing the day-staffed hostel's encouragement; liaison, not treatment", "The level-3 picture: night cover needed; the sleeping-in staff of the 10-20-resident hostel", "The level-4 picture: the long-term severely ill, including compulsorily detained patients, needing on-site clinical staff; the 500,000-1,000,000 catchment's rare, expensive provision"],
    },
    {
      category: "4. The engagement signals (the AO population)",
      symptoms: ["Frequent dangerous relapses with poor compliance: the admission calendar running the household", "Substance misuse and personality difficulties complicating the psychosis", "Missed appointments and the reluctant doorstep: the patient who will not come to the team", "Offending and risk drift: the multi-agency machinery the standard team cannot alone coordinate"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The CMHT specification",
      code: "The hub's operating specification",
      criteria: [
        "Sector: a defined geographic population of 20-50,000 (current Western European sizes); sectors shrinking with investment and expanding as specialised teams take functions, the team caseload kept fairly constant by the moving boundary.",
        "Staffing: 6-15 members, multidisciplinary; under 6 cannot provide comprehensive care or cross-cover; over 12-15 becomes unwieldy with management and information transfer.",
        "Caseload: a team maximum of 200-250 patients, fewer for complex populations.",
        "Remit: post-discharge care and primary-care-and-private-sector overflow, the severe mental illness priority (psychoses and severe affective disorders); diagnosis not all: social adversity, personality difficulty and substance complications can make secondary care necessary for 'minor' disorders, threshold tools of limited use, clinical assessment deciding; in systems with little private care, CMHTs also treat the mild and transient.",
        "Assessments: psychiatrists conducting most initial assessments (the non-medical-assessment debate turning on primary care's development, effective there, otherwise medical time prioritising assessments); home-based assessments paying considerable dividends for the severely ill.",
        "Meetings: 1-2 weekly, of 1.5-2 hours: allocation (delegated to the manager or senior clinician, pre-assessment discussion unprofitable), patient reviews (new, routine, discharge) and the liaison business.",
      ],
      duration: "The specification is continuous. The sector's arithmetic audited whenever a component is added, offloaded or invested in.",
      indianNote: "The DMHP district reads through this specification with the resource reality stated: smaller teams, larger sectors, medical-officer-led rather than multidisciplinary staffing; the 200-250 caseload translating to the district mental health unit's realistic load.",
    },
    {
      system: "The CPA care plan",
      code: "The ten consideration domains",
      criteria: [
        "The patient's identified problems recorded across the ten domains: mental health (with relapse indicators), physical health, medication, daytime activity, personal care and living skills, carers-family-children-network, forensic history, substance misuse, cultural factors, housing-finances-legal.",
        "Each problem paired with its interventions, the responsible staff member and an agreed review date: the needs-interventions-responsibility-review cycle the complex patient's care runs on.",
        "The risk assessment with its crisis and contingency plans: the written response to the next relapse, agreed with patient and family.",
        "The documentation level clinically, not managerially, determined: the plan the treatment's spine, not its decoration.",
      ],
      duration: "Reviewed systematically and recorded, at the routine team review, and at every relapse-signature change.",
      indianNote: "The discipline travels free: the single-clinic-note version (the written plan the family carries, with the crisis and contingency structure) documentation being the technology India lacks least.",
    },
    {
      system: "The tiered accommodation logic",
      code: "The four levels",
      criteria: [
        "Level 1: group homes: unstaffed, visited by community teams, for the relatively independent.",
        "Level 2: day-staffed hostels: 1-2 staff daily; cooking and cleaning encouraged; liaison rather than treatment; typically 4-8 residents.",
        "Level 3: night-staffed hostels: sleeping-in staff; larger units of 10-20 residents.",
        "Level 4: 24-hour staffed/nursed hostels: on-site clinical staff; expensive; for the long-term severely ill including compulsorily detained: serving populations of 500,000-1,000,000.",
        "The provision reality: most comprehensive services provide levels 1-2; social services level 3; level 4 rare, with shared adapted houses preferred over purpose-built units (integration and stigma-reduction).",
      ],
      duration: "The placement reviewed as functioning changes: the continuum stepped up and down, never treated as one-way.",
      indianNote: "India's four levels are largely the family home (level 0-1 functioning as the default); the halfway-home and group-home sector is NGO-scarce: the NGO-family mixed economy (the NIMHANS family-ward tradition, the day-care centres) the actual accommodation continuum.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Assertive outreach versus the standard CMHT", distinguishingFeatures: "AO: proactive visiting at home even when reluctant; daily meetings; several members per patient (safety and extensive needs); the practical culture (shopping, accommodation, daily medicine delivery) beyond professional boundaries; for the hard-to-engage revolving-door psychotic patients the standard team cannot stabilise.", keyDifferentiator: "The honest allocation rule: where CMHTs function well, AO takes only the un-stabilisable, and improved outcomes follow only from the additional effective treatments delivered (the daily clozapine visit's logic), not from outreach itself." },
    { condition: "Crisis resolution and home treatment versus admission", distinguishingFeatures: "The admission-avoidance teams: assessment and intensive home treatment as the alternative to the bed, with the balance-of-care arithmetic (the inverse relationship between community components and beds) deciding at the front door.", keyDifferentiator: "The alternative chosen where it can hold: home treatment and the crisis house converting the admission into intensive community support, with the crisis and contingency plans written for the next one." },
    { condition: "The CMHT versus office-based practice", distinguishingFeatures: "The insurance-system office practice: narrow in remit (psychotherapy or pharmacotherapy), poorly equipped for severe disorder, neglected in the literature, against the sectorised team's comprehensive functions (assessment, case management, liaison, outreach).", keyDifferentiator: "The state-system clinic (polyclinic, dispensary) as the essential modern platform: psychiatrists and psychologists working within it with enhanced resources, CMHT co-location or integration the direction of travel." },
    { condition: "Voluntary-agency versus statutory residential provision", distinguishingFeatures: "Voluntary agencies more efficient at long-term residential care, but risk-selective, reluctant with violence or substance histories the statutory tier cannot refuse.", keyDifferentiator: "The mixed economy working best: the statutory system holding the risk-heavy cases the voluntary sector declines, the voluntary sector's efficiency purchased for the rest, with shared adapted houses over purpose-built units." },
    { condition: "Supported engagement versus compulsion (the CTO question)", distinguishingFeatures: "The regularly-visited patient who vigorously rejects the visits: intensive support approaching intrusion; professional persistence approaching coercion.", keyDifferentiator: "The formal community treatment order (mandated community treatment, largely for young psychotic individuals, contested evidence) reached for only after the engagement discipline: the ethics question asked before the legal instrument." },
  ],
  management: [
    { category: "service-design", name: "The waiting-list arithmetic — the access discipline", description: "Routine assessments within 2-4 weeks: sooner is unproductive, and beyond 3 weeks the failed-appointment rate rises steeply. Urgent referrals (most psychotic episodes) within days; emergencies (immediate risk) same-day. The practical surplus approach: last year's assessment count plus 20% allocated, leaving weekly emergency capacity; the 400-assessment example yielding nine slots weekly, one kept emergency-free.", whenToUse: "Continuously: the arithmetic audited against the referral diary, the failed-appointment rate and the emergency log.", indianContext: "The district OPD's slot arithmetic: the DMHP unit's clinic days and camp schedules run on the same logic; last year's count plus a fifth, the emergency capacity explicitly fenced, the routine window protected from the queue's pressure." },
    { category: "service-design", name: "The balance of care — beds against components", description: "The population-need assessment first, then the mixture: the inpatient unit and its alternatives (crisis houses, home treatment), the community components in their inverse relationship with beds; the alternatives-to-admission inventory worked through before the bed count is set. The deinstitutionalisation lessons hold the pen: resettlement without the following services fails, and the balance, not the blueprint, is the planning act.", whenToUse: "At every service review, every budget round, every bed crisis: the arithmetic, not the ideology, deciding.", indianContext: "The Indian district's balance: the DMHP's community components against the district hospital's beds; the mobile camp and the OPD outreach purchasing bed-nights with professional time, the family home absorbing what neither can hold." },
    { category: "psychotherapy", name: "The routine-monitoring discipline — the team's hidden engine", description: "The most-overlooked function is probably the most important for team efficiency: routine reviews systematic rather than crisis-responsive, shaping and redirecting treatment, identifying the discharge-ready patients, and discharging them. The new-patient review gives the broad, experienced overview and the fair allocation; the discharge review gives the audit and learning; the routine review between them keeps the caseload honest: the legal CPA requirement making it the spine, not the ornament.", whenToUse: "Every team meeting: the routine list reviewed before the crisis business crowds it out.", indianContext: "The district review meeting's routine agenda: the monthly joint review the note's GP-liaison discipline transposed: the stable patients seen systematically, the discharge-ready identified, the quiet work no camp can do." },
    { category: "psychotherapy", name: "The clinical-leadership settlement", description: "The multidisciplinary team's informal democratic style creates the clinical-leadership confusion: originally senior-medical informality, now team managers whose roles vary from administrative to clinical-priorities. The essential task: establishing clear clinical leadership without inhibiting initiative. The solution: the leadership-and-management separation, with defined roles and good relationships between them.", whenToUse: "At team formation and at every leadership change, and continuously, in the allocation meeting where the settlement is tested daily.", indianContext: "The Indian district's version: the medical officer leading by default rather than by design; the settlement's task being to make the informal hierarchy explicit without flattening the nurse's, the psychologist's and the social worker's initiative." },
    { category: "service-design", name: "The GP-liaison and the wider-agency discipline", description: "The interface with primary care runs from informal contact through shared care to co-location: the effective system being regular timetabled joint meetings or a link-worker attending the health centre: monthly shared-patient discussions, highly time-efficient for prompt problem-solving and crisis anticipation. The warning carried verbatim: be clear about responsibilities; fudging boundaries is risky. The other agencies (social services, housing, voluntary) are met by the same principles, showing up and meeting people pays dividends even once.", whenToUse: "From the team's first day: the timetable built before the first referral arrives.", indianContext: "The CHC-PHC-ASHA layer is the Indian primary care of the interface: the DMHP's community nurse or the Tele-MANAS callback as the link-worker, the monthly district review meetings as the timetabled joint meeting; the implementable versions of the discipline." },
    { category: "service-design", name: "The integration requirement — the CMHT as hub", description: "The CMHT as the service's hub-and-spoke centre: the outpatient and office tier co-located or integrated, the specialised teams (crisis resolution, home treatment, early intervention, assertive outreach) orbiting the generic team, the accommodation continuum and the voluntary sector accessed through its case managers. The ethics questions carried with the integration: when support becomes intrusion, when persistence becomes coercion; compulsion migrating from the asylum building to the community (the community treatment orders, contested evidence), and the resource realism deciding the pace of all of it.", whenToUse: "At the design stage of any new component: the hub question asked before the spoke is bought.", indianContext: "The Indian integration runs through the district hospital and the DMHP unit: the hub the note's logic builds from; the family, the NGO and the day-care centre the spokes the case management reaches." },
  ],
  safety: {
    redFlags: [
      "An emergency arriving with no same-day capacity: the 20%-surplus calculation absent, the emergency slots consumed by routine backlog",
      "The failed-appointment cliff: routine assessments beyond three weeks, attendance collapsing exactly as the sickest patients need the contact",
      "The unallocated revolving-door patient: frequent dangerous relapses with no assertive-outreach decision made",
      "The crisis and contingency plans missing from the care plan: the next relapse arriving with no written response for patient, family or team",
      "The fudged GP boundary: responsibilities left unclear between team and surgery, the risky patient falling between the two",
      "The unsupported level-4 need: the long-term severely ill, including compulsorily detained patients, with no 24-hour-staffed provision in a half-million catchment",
    ],
    urgentGuidance:
      "The access discipline's order of operations: (1) emergencies (immediate risk) seen the same day, the surplus calculation guaranteeing the slot exists; (2) urgent referrals (most psychotic episodes) within days, never queued as routine; (3) routine held inside the 2-4 week window: sooner is unproductive, beyond three weeks the failed-appointment rate climbs steeply; (4) the crisis and contingency plans written with patient and family between episodes, not after them; (5) the revolving-door patient given the assertive-outreach decision explicitly: proactive outreach where the standard team cannot hold, with the honest expectation that the delivered treatments, not the visiting itself, will do the work.",
  },
  drugLinks: [],
  contentGaps: [
    "No medication role: the note assigns no drug a place in service planning; drugLinks is empty by design; the daily clozapine visit appears as service-delivery logic (the delivered treatment that makes outreach work), not as a pharmacology route, and no KYP clozapine page exists to link: none invented.",
    "No neuroscience grounding: the note names no brain region and no neurotransmitter; service architecture is organisational science in this lineage, so brainRegions and neurotransmitters are empty by design; no decorative neuroscience is improvised.",
    "Crisis resolution and home treatment teams (the note's admission-avoidance component with the Muijen evaluation lineage) have no KYP lesson of their own; the component is taught here.",
    "Early intervention in psychosis has no standalone KYP lesson; its duration-untreated-psychosis rationale belongs to the schizophrenia course: referenced, not duplicated.",
    "The matrix model (Thornicroft and Tansella's input-process-outcome planning framework) has no KYP lesson; the planning discipline is taught here directly.",
    "The District Mental Health Programme's full programme machinery (budgets, indicators, the district mental health unit) has no dedicated KYP lesson; the India lens here carries what clinical teaching needs.",
  ],
  patientGuide: {
    whatIsIt:
      "Community mental health services are the system of care that treats mental illness outside hospital: a team of professionals (psychiatrists, nurses, psychologists, social workers and others) responsible for the people of a defined area, seeing patients at clinics and at home, working with your family doctor, and arranging the support needed to stay well (day centres, supported housing, crisis help). One named professional (a case manager) holds your care, with a small enough list of patients to know you well, and a written plan that says what will be done, by whom, and when it will be reviewed.",
    whatCausesIt:
      "Not an illness but the answer to one: these services exist because hospitals alone cannot treat mental illness. Long admissions can harm as well as help, most people do better in their own homes and communities, and severe illness needs continuing, coordinated care that no single clinic visit can provide. The service is deliberately built (sectors, teams, caseloads and plans) so that this care actually reaches people.",
    symptoms:
      "Not applicable as an illness. The reasons people meet the service: a first psychosis, a relapse, an illness the family doctor cannot manage alone, discharge from hospital, or the long-term support a severe illness needs. Warning signs that need the service urgently: talk of suicide, refusing food or medicines, not sleeping, beliefs that frighten the family, or the household no longer able to cope.",
    treatment:
      "The team's offer: an assessment (at home if that tells them more), a named case manager, and a written care plan; your problems listed with the help planned for each one, who is responsible, and the review date. Regular reviews; medicines prescribed and monitored; help with work, housing, money and family issues through the team's links; and in a crisis either admission or intensive treatment at home, whichever is safer and better for you. The plan also says what everyone should do if things get bad again: the crisis plan written before the crisis.",
    selfHelp: [
      "Ask for your written care plan and keep it: the problems, the help, the responsible person, the review date, and the crisis plan; carry it to every consultation.",
      "Know your case manager's name and how to reach the team, one named person is the system's design, not an accident.",
      "Keep the appointments: if you cannot come, tell the team rather than staying away; they can visit you at home.",
      "If things worsen (not sleeping, stopping medicines, the old beliefs returning) contact the team the same day; do not wait for the routine appointment.",
      "Bring the family to the planning conversations: the plan covers carers, children, housing, money and culture, not only medicines.",
      "Ask directly what the GP looks after and what the team looks after: clear boundaries protect you; vague ones leave you stranded between services.",
    ],
    whenToSeekHelp: [
      "Any talk of suicide or self-harm: same-day contact, not the next routine appointment",
      "Stopping medicines or refusing food: the relapse signature the crisis plan exists for",
      "Not sleeping, escalating beliefs, or frightening behaviour: urgent, within days",
      "The family no longer able to cope at home: the team's home treatment or admission decision made with you",
      "A crisis plan that no longer fits: ask for the review rather than improvising",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24x7, free, multiple Indian languages), for distress, family crises and guidance on where to go",
      "The district hospital psychiatry OPD under the DMHP: the sector team's Indian equivalent, with mobile camps and outreach where clinics are distant",
      "The written care plan: the single-clinic-note version the family carries: the document this course asks every Indian team to give",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific community-services guideline of the Oxford chapter's kind exists; the planning apparatus is the DMHP itself: the District Mental Health Programme's framework (mobile teams, community OPD outreach, treated-cases targets) read through the chapter's logic, with the Mental Healthcare Act 2017's rights-provisions as the formal counterweight to the family-delivered compulsion the India lens names.",
    systemContext: "The district programme is the Indian CMHT: mobile teams and community OPD outreach mapping onto the sector-teams logic, with the resource reality producing smaller teams, larger sectors and medical-officer-led rather than multidisciplinary staffing; the 200-250 caseload translating to the district mental health unit's realistic load. The accommodation continuum runs through the family home (level 0-1 as the Indian default), the halfway-home and group-home sector NGO-scarce; the CHC-PHC-ASHA layer is the Indian primary care the liaison discipline addresses.",
    programmeContext: "The DMHP's community components: the mobile camps, the community OPD outreach, the Tele-MANAS callback as the link-worker version, the monthly district review meetings as the timetabled-joint-meeting discipline. The care-plan discipline travels free: the ten-domain consideration list and the crisis-contingency structure fit Indian practice directly as the single-clinic-note version; the written plan the family carries, documentation being the technology India lacks least.",
    costConsiderations: "Approx 2026: the DMHP's per-district budgets and the rupee-costs of the components; the staffed hostel the expensive end, the family-delivered care the subsidy-dependent end; the chapter's resource-realism reading Indian budgets honestly: the balance between comprehensive planning's appeal and the pragmatic incrementalism that fits most systems' actual development is the Indian district's daily arithmetic.",
    culturalConsiderations: "The family is the Indian service's load-bearing wall, and its informal community treatment order: the family-delivered community compulsion (medication in the food, the house-bound patient) asks the chapter's intrusion-versus-support questions of Indian households, with the MHA 2017's rights-provisions as the formal counterweight. The NGO-family mixed economy (the NIMHANS family-ward tradition, the day-care centres) is the actual accommodation continuum the voluntary-agency efficiency finding directs. India's default is outreach-by-necessity (the mobile camps, the home visits where clinics are distant) and the chapter's honest verdict reassures the Indian service designer: relationships plus delivered treatments (the clozapine-visit logic) matter, not team-formal fidelity.",
    patientCounselling: [
      "The entry script: 'Your area has its own mental health team. Every family in this sector is theirs to serve; the appointment comes within a few weeks unless the problem is urgent.'",
      "The care-plan script: 'This written plan (the problems, the treatments, who is responsible, the review date, and what we all do in a crisis) is the family's document; carry it to every consultation, here and anywhere else you take him.'",
      "The urgency script: 'If things worsen (not sleeping, stopping the medicines, the old beliefs returning) do not wait for the routine appointment; call the team the same day.'",
      "The medication-in-the-food script: 'Hiding the tablet in the food may feel kinder, but it is coercion no one licensed the family to give; let us solve the refusal openly, together.'",
      "The home-visit script: 'The team can see you at home, for many patients the home assessment tells more than the clinic ever could.'",
      "The discharge script: 'The team that met you in hospital follows you home; the same case manager, the written plan, the review dates; the hospital ends, the care does not.'",
    ],
  },
  decisionPath: {
    title: "The referral and the urgency arithmetic: the allocation discipline",
    nodes: [
      {
        id: "start",
        question: "A referral arrives at the sectorised team's allocation meeting: delegated to the manager or senior clinician. First: the urgency classification (where the assessment is already made (a discharge or a transfer) the new-patient review follows directly).",
        branches: [
          { label: "Routine: no immediate risk, stable circumstances", next: "routine-path" },
          { label: "Urgent, most psychotic episodes, acute deterioration without immediate danger", next: "urgent-path" },
          { label: "Emergency: immediate risk", next: "emergency-path" },
          { label: "The assessment already made: the new-patient review follows", next: "assessment-gate" },
        ],
      },
      {
        id: "routine-path",
        question: "The routine referral: when should it be seen?",
        recommendation: "Within 2-4 weeks: sooner is unproductive, and beyond 3 weeks the failed-appointment rate rises steeply. The slot drawn from the surplus discipline: last year's assessment count plus 20%, leaving weekly emergency capacity (the 400-assessment example: nine slots weekly, one kept emergency-free). Pre-assessment discussion before the meeting is unprofitable: the classification, not the debate, is the task.",
      },
      {
        id: "urgent-path",
        question: "The urgent referral: the psychotic episode, the acute deterioration.",
        recommendation: "Seen within days: the deterioration held before it becomes the emergency. The classification reviewed at the next allocation meeting if the picture changes, and the referrer told the decision: the urgency discipline the waiting list runs on.",
      },
      {
        id: "emergency-path",
        question: "Immediate risk: same-day assessment. The fork: admission or the alternatives?",
        branches: [
          { label: "The alternatives can hold: home treatment, the crisis house", next: "alternatives-path" },
          { label: "Admission required", next: "admission-path" },
        ],
      },
      {
        id: "alternatives-path",
        question: "The admission-avoidance option holds.",
        recommendation: "The balance-of-care logic applied at the front door: crisis resolution and home treatment as the admission-avoidance teams, intensive community support holding what a bed once held, with the crisis and contingency plans written into the care plan for the next one, and the inverse relationship between community components and beds doing its work.",
      },
      {
        id: "admission-path",
        question: "Admission arranged same-day.",
        recommendation: "The discharge planning begun at once: the post-discharge care the CMHT exists to provide, the ten-domain care plan drafted before the patient leaves the ward, and the case manager already named; the admission a component of the service, never its centre.",
      },
      {
        id: "assessment-gate",
        question: "The assessment made: psychiatric-led, home-based where the patient is severely ill (the home assessment's considerable dividends). The team's new-patient review follows: the broad, experienced overview and the fair allocation. What does the picture show?",
        branches: [
          { label: "Severe mental illness the CMHT can hold", next: "cpa-path" },
          { label: "The hard-to-engage revolving-door pattern", next: "ao-gate" },
        ],
      },
      {
        id: "cpa-path",
        question: "Case management begins.",
        recommendation: "The explicitly limited caseload (15-30); the ten-domain care plan with interventions, responsible staff and review dates; the risk assessment with crisis and contingency plans: the documentation level clinically, not managerially, determined. Routine monitoring scheduled from the start: systematic, not crisis-responsive; the team's most important efficiency, and the legal CPA requirement.",
      },
      {
        id: "ao-gate",
        question: "Frequent dangerous relapses, poor compliance, substance misuse, personality difficulties, offending: can the functioning CMHT stabilise this patient?",
        branches: [
          { label: "Yes, with intensive standard case management", next: "cpa-path" },
          { label: "No: the un-stabilisable revolving door", next: "ao-path" },
        ],
      },
      {
        id: "ao-path",
        question: "Assertive outreach allocated.",
        recommendation: "The method: proactive visiting at home even when reluctant; daily team meetings; several members per patient (safety and extensive needs); the practical culture: shopping, accommodation, daily medicine delivery. The honest riders carried: no slavish model fidelity, local adjustment sensible, caseloads often exceeding the recommended 1:10; and the outcome following the additional effective treatments delivered (the daily clozapine visit's logic): it is not outreach itself that is therapeutic.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Building the team at the wrong size",
      why: "Under 6 staff cannot provide comprehensive care or cross-cover: leave and vacancy stop the service; over 12-15 becomes unwieldy, with management and information transfer failing at the seams, both sizes failing the sector they serve.",
      correction: "The 6-15 band with skill-sharing and generic working, audited whenever a component is added or offloaded; the size follows the sector's functions, never the org chart's ambitions.",
    },
    {
      mistake: "Leaving clinical leadership undefined",
      why: "The informal democratic style creates the clinical-leadership confusion: nobody knowing who sets clinical priorities, the team manager's role varying from administrative to clinical by default rather than design.",
      correction: "The settlement made explicit: clear clinical leadership established without inhibiting initiative, leadership and management separated with defined roles and good relationships.",
    },
    {
      mistake: "Running the team as a crisis-response service",
      why: "Routine monitoring (often overlooked, probably the most important function for team efficiency) is crowded out by the emergency business; the caseload fills with patients nobody reviews and nobody discharges.",
      correction: "The routine review scheduled and protected: systematic, not crisis-responsive; shaping and redirecting treatment, identifying the discharge-ready patients, and discharging them.",
    },
    {
      mistake: "Seeing routine referrals too quickly or too slowly",
      why: "Sooner than 2-4 weeks is unproductive: the problem not yet declaring itself, the assessment wasted; beyond 3 weeks the failed-appointment rate rises steeply: the sickest patients lost exactly when contact matters most.",
      correction: "The window held by the surplus arithmetic: last year's count plus 20% allocated, the emergency capacity fenced; the referral diary audited against the failed-appointment rate.",
    },
    {
      mistake: "Fudging the boundary with the GP",
      why: "Responsibilities left unclear between team and surgery are risky: the deteriorating patient falling between two services each assuming the other holds them.",
      correction: "Be clear about responsibilities, in writing: the timetabled joint meeting or the link-worker attending the health centre, with the shared-patient list reviewed monthly; goodwill, not structure, is what fails.",
    },
    {
      mistake: "The assertive-outreach fidelity cult",
      why: "No evidence exists that teams must slavishly follow the original model, and improved outcomes follow only from additional effective treatments; treating outreach ritual as the active ingredient wastes the resource on visiting without delivering.",
      correction: "Local adjustment sensible: no 24-hour service needed in comprehensive systems, relationships matter more than fidelity, caseloads often exceed the recommended 1:10, and where CMHTs function well, AO takes only the un-stabilisable.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define the community mental health team and give the quartet: sector size (20-50,000 population), team size (6-15 members), caseload ceiling (200-250 patients, fewer for complex populations), and the multidisciplinary staffing.",
        "The team-size logic: why under 6 is ineffective and over 12-15 unwieldy, and the clinical-leadership problem with its solution (clear leadership without inhibiting initiative; the leadership-management separation).",
        "The Care Programme Approach care plan: the ten consideration domains, the needs-interventions-responsibility-review format, and the risk assessment with crisis and contingency plans.",
        "The waiting-list arithmetic: routine 2-4 weeks with the 3-week cliff, urgent within days, emergency same-day, and the 20%-surplus formula with the 400-assessment example.",
        "The four levels of supported accommodation with resident numbers, and the level-4 catchment of 500,000-1,000,000.",
      ],
      practical: [
        "Allocate three written referrals (routine, urgent and emergency) with the arithmetic stated for each, and justify one reclassification.",
        "Draft a CPA care plan for a discharged patient: the ten domains, the interventions, the responsible staff, the review date, and the crisis and contingency plans.",
      ],
      longAnswer: [
        "Community mental health services: the components, the community mental health team in detail, and the planning discipline that balances them; the evergreen essay.",
        "Assertive outreach and the specialised teams: the original evidence, the target populations, the honest verdicts, and the balance of hospital and community care.",
      ],
    },
    neetPg: {
      highYield: [
        "THE CMHT QUARTET: sector 20-50,000 population; team 6-15 members (under 6 cannot provide comprehensive care or cross-cover; over 12-15 becomes unwieldy with management and information transfer); caseload maximum 200-250 patients, fewer for complex populations, with sectors shrinking as investment grows and expanding as specialised teams take functions, the caseload fairly constant.",
        "THE CASE-MANAGEMENT CEILING: 15-30 patients per case manager; the chapter's explicit limit; caseloads beyond this are crisis-response, not care.",
        "THE CPA STRUCTURE: identified problems across the ten domains (mental health with relapse indicators, physical health, medication, daytime activity, personal care and living skills, carers-family-children-network, forensic history, substance misuse, cultural factors, housing-finances-legal), each with interventions, responsible staff and review date; plus the risk assessment with crisis and contingency plans.",
        "THE ACCESS ARITHMETIC: routine 2-4 weeks (sooner unproductive; beyond 3 weeks failed appointments climb steeply); urgent (most psychotic episodes) within days; emergency (immediate risk) same-day; the 20%-surplus calculation: the 400-assessment example: nine slots weekly, one emergency-free.",
        "THE ROUTINE-REVIEW LESSON: often overlooked, probably the most important function for team efficiency; systematic, not crisis-responsive; shaping and redirecting treatment, identifying the discharge-ready; the legal CPA requirement.",
        "THE GP LIAISON: regular timetabled joint meetings or a link-worker attending the health centre (monthly shared-patient discussions, highly time-efficient (prompt problem-solving, crisis anticipation)) with the warning: be clear about responsibilities; fudging boundaries is risky.",
        "THE AO EVIDENCE: Stein and Test (1980); improved clinical and social outcomes with substantially reduced hospitalisation at slightly lower cost; the most replicated and researched specialist team.",
        "THE AO HONESTY: no evidence of needed slavish fidelity; relationships matter more; caseloads often exceed the recommended 1:10; where CMHTs function well, AO takes only the un-stabilisable: improved outcomes follow only from additional effective treatments: it is not outreach itself that is therapeutic.",
        "THE FOUR ACCOMMODATION LEVELS: group homes (unstaffed); day-staffed hostels (1-2 staff daily, typically 4-8 residents); night-staffed hostels (sleeping-in staff, 10-20 residents); 24-hour staffed/nursed hostels (on-site clinical staff, expensive, serving 500,000-1,000,000 populations), most comprehensive services provide levels 1-2; social services level 3; level 4 rare.",
        "THE VOLUNTARY-SECTOR FINDING: voluntary agencies more efficient at long-term residential care but risk-selective (reluctant with violence or substance histories); the mixed economy works best; shared adapted houses over purpose-built units.",
        "THE ETHICS QUESTIONS: when does support become intrusion, professional persistence coercion; compulsion migrating from the asylum building to the community: the community treatment orders, mandated community treatment largely for young psychotic individuals, with contested evidence.",
      ],
      pyqConcepts: [
        "The CMHT sector and caseload numbers: the recurring short-question pair (20-50,000; 200-250; the 15-30 case-management limit).",
        "Assertive outreach's honest verdict: the 'not outreach itself that is therapeutic' line as the single most examined sentence in this territory.",
        "The four accommodation levels with the level-4 catchment: the ordering question with the 500,000-1,000,000 figure.",
        "The 20%-surplus formula with the 400-assessment example: the arithmetic item.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A sector team of five staff serves 45,000 people: routine assessments wait six weeks, the failed-appointment rate is climbing, every Friday's emergency consumes the following week's slots, and the GPs complain of no reply; the reasoning tested: the team-size logic (under 6 cannot provide comprehensive care or cross-cover, recruitment the structural answer); the waiting-list arithmetic (routine 2-4 weeks, sooner unproductive, the 3-week failed-appointment cliff) restored by the surplus calculation (last year's count plus one-fifth, the 400-assessment example's nine slots weekly, one emergency-free); the routine-monitoring discipline rebuilt (systematic, not crisis-responsive, the most important function for team efficiency); and the clinical-leadership settlement made explicit as the condition of all three.",
        "A 27-year-old man with schizophrenia: four admissions in three years, poor compliance, cannabis use, missed appointments, the family exhausted and now hiding the tablets in his food; the reasoning tested: the AO target population recognised (frequent dangerous relapses, poor compliance, substance misuse, personality difficulties, offending); the allocation rule applied (where CMHTs function well, AO takes only the un-stabilisable, the standard team's failure first made explicit); the method deployed (proactive visiting even when reluctant, daily meetings, several members per patient, the practical culture, shopping, accommodation, daily medicine delivery); the honest verdicts carried (no slavish fidelity, caseloads often exceeding 1:10, and improved outcomes following only the additional effective treatments delivered, the daily clozapine visit's logic, not outreach itself); and, for the Indian district, the mobile camp as outreach-by-necessity with the family's medication-in-the-food converted to the open, written plan.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "CMHT sector size: 20-50,000 population (Western Europe); team caseload maximum 200-250.",
        "Case-management caseload: 15-30 patients per case manager.",
        "Stein and Test (1980): assertive community treatment; improved outcomes, substantially reduced hospitalisation, slightly lower cost.",
        "It is not outreach itself that is therapeutic. The delivered treatments and the relationships are.",
        "Level-4 (24-hour staffed/nursed) hostels serve populations of 500,000-1,000,000.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Routine monitoring is the team's real engine: the most-overlooked, most-efficient function: systematic reviews shape and redirect treatment, identify the discharge-ready patients, and keep the caseload honest; protect the routine agenda from the crisis business or the service quietly becomes an emergency department.",
        "The 20% surplus is the district's instrument, not the textbook's: last year's count plus one-fifth, the emergency capacity fenced, in the Indian DMHP unit, the same arithmetic fences the camp and OPD slots against the queue's pressure.",
        "The clinical-leadership settlement is a design act, not a personality trait: clear leadership established without inhibiting initiative, leadership and management separated with defined roles; the settlement tested daily in the allocation meeting.",
        "AO deployment is a statement about the CMHT, not a badge: whether AO helps depends on the existing local services; an AO team bought to compensate for a failing generic team delivers visiting without delivering treatment.",
        "The care-plan discipline is the cheapest technology in the system: documentation is the technology India lacks least. The written plan the family carries, with the crisis and contingency structure, coordinating the multi-agency machinery that complex care fails without.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The waiting list that failed the arithmetic",
      presentation: "A team of five, a six-week routine wait, and the Friday emergencies eating next week's slots: the arithmetic rebuilt before any new component was bought.",
      initialPresentation: "A newly appointed consultant inherited a sector team of five staff serving 45,000 people. The referral diary showed routine assessments waiting six weeks; the failed-appointment rate had been climbing for two quarters; GPs wrote asking whether anyone read their letters; the year's notes recorded roughly 400 assessments.",
      history: "The sector's demand stable for three years; one vacant post unfilled for eight months; the team meetings spent almost entirely on the week's crises; no surplus calculation in use: the routine list simply grew until the emergency assessments displaced it; no routine-monitoring agenda: patients reviewed only at relapse; the GP relationship run on ad-hoc phone calls with no named link and no stated responsibilities.",
      examination: "The team's own numbers examined: five staff (below the 6-member floor for comprehensive care and cross-cover); meetings of 2 hours running on crisis allocation alone; routine monitoring absent: the most important function for team efficiency crowded out; the failed-appointment cliff well taken (routine waits at six weeks, twice the 3-week boundary); the emergency slots consumed week on week; no one clear who held clinical priorities: the informal democratic style never settled.",
      diagnosis: "A service-architecture failure, not a staff-effort failure: the team undersized (under 6), the access discipline unrun (routine beyond the 2-4 week window with the 3-week cliff taken), the emergency capacity unfenced (no 20%-surplus calculation), and the clinical-leadership settlement never made.",
      management: "Recruitment begun to the 6-15 band; the waiting-list arithmetic installed: last year's 400 assessments plus 20% (480) yielding nine weekly assessment slots with one kept emergency-free; the routine window held at 2-4 weeks with the 3-week cliff stated to the referrers in writing; allocation delegated to the team manager with pre-assessment discussion stopped as unprofitable; the routine-monitoring agenda scheduled and protected (systematic reviews, not crisis response); the clinical-leadership settlement made explicit: the consultant holding clinical priorities, the manager holding administration, defined roles stated to the team; the link-worker model begun with the health centre: monthly shared-patient discussions, responsibilities written down rather than fudged.",
      outcome: "Waits returned to the 2-4 week window within a quarter; the failed-appointment rate fell from the cliff; the Friday emergency found its slot free again; the routine reviews began identifying discharge-ready patients: the team's efficiency measure nobody had been counting; one recruitment completed and a second post approved once the arithmetic showed the sector's load.",
      teachingPoints: [
        "The team-size law in practice: five staff cannot cross-cover; the vacancy did not slow the service, it broke it; the 6-15 band is an operating floor, not a preference.",
        "The waiting-list arithmetic as diagnosis and treatment both: the 3-week cliff identified the failure, the 20%-surplus calculation (last year's count plus one-fifth, nine slots weekly from 400 assessments, one emergency-free) restored the window.",
        "The routine-monitoring discipline is the team's hidden engine. The efficiency it released was already in the caseload, waiting for the agenda that found it.",
        "The GP liaison needs structure, not goodwill: the link-worker, the monthly shared-patient discussions, and the responsibilities written down; fudging boundaries was the risk the letters were complaining about.",
        "The clinical-leadership settlement is a condition of everything else: nobody runs an arithmetic they do not own.",
      ],
    },
    {
      title: "The mobile camp and the hidden tablet",
      presentation: "Four admissions in three years, a family hiding the tablets in his food, and a district with no assertive outreach team: the chapter's honest verdict delivered through a mobile camp instead.",
      initialPresentation: "A 27-year-old man in a southern Indian district, diagnosed with schizophrenia, was brought to the DMHP unit's attention again: four admissions in three years, the last discharge's medicines long finished, cannabis use on and off, and the district OPD appointments missed for six months. The family, exhausted, had taken to hiding the tablets in his food.",
      history: "The revolving-door pattern the note names precisely: frequent relapses, poor compliance, substance misuse complicating the psychosis; the family's own solution: medication concealed in meals, the patient largely house-bound, the threat of the next admission running the household; no crisis plan anywhere in writing; the nearest psychiatric care a day's travel away, the mobile camp the only psychiatry that reliably reached the village.",
      examination: "Seen at home by the mobile team (the home-based assessment's considerable dividends): no active psychosis; guarded and unenthusiastic about the district hospital, which he associates with restraint during the third admission; the concealed medicines discovered on direct questioning of the family; the camp register showing missed visit dates tracking the relapse calendar almost exactly.",
      diagnosis: "The hard-to-engage revolving-door patient: the assertive-outreach target population delivered in a system with no AO team; the family-delivered community compulsion (the medication in the food, the house-bound patient) standing as the Indian ethics question the note asks of households rather than of law.",
      management: "Outreach by necessity rather than by model: the camp's home-visit schedule made proactive (visiting even when reluctant); daily supervised medicine delivery arranged through the camp nurse on visit days with the ASHA worker checking between: the practical culture the note describes, shopping and accommodation problems referred alongside; the family counselled out of the medication-in-the-food explicitly, the MHA 2017's rights-provisions stated as the formal counterweight and the open plan offered in its place; the written care plan built as the single-clinic-note version: the ten domains compressed to one page the family carries, with the crisis and contingency plan for the next relapse agreed with the patient present; the cannabis use addressed as one domain among ten rather than as the family's blame; the monthly district review meeting used as the team's routine-monitoring agenda.",
      outcome: "No admission in the following year, against the previous pattern of one every nine months; the family stopped concealing the medicines once the delivery was visible and the plan was open; the written plan carried to every consultation, including a subsequent medical admission where it prevented an antipsychotic interaction being missed; the camp register's missed-visit dates thinned as the visits became the patient's own arrangement rather than the family's chore.",
      teachingPoints: [
        "The AO population exists wherever the AO team does not: the note's target criteria (frequent dangerous relapses, poor compliance, substance misuse) name this patient exactly, and the district answers with outreach-by-necessity, the mobile camp.",
        "The honest verdict is the design brief: relationships plus delivered treatments (the clozapine-visit logic. The daily supervised medicine, the visible delivery) do the work; it is not outreach itself that is therapeutic, and the camp that only visits without delivering would have failed identically.",
        "The family-delivered compulsion is the Indian face of the intrusion-versus-support question: medication in the food is coercion no one licensed the family to give; named, counselled against, and replaced by the open plan.",
        "The care-plan discipline travels free: the single-clinic-note version (one page, ten domains, the crisis and contingency plan) is documentation, the technology India lacks least.",
        "The home-based assessment's dividends in full: the restraint history, the concealed medicines and the missed-visit pattern were all invisible at the district OPD the patient never reached.",
      ],
    },
  ],
  clinicalPearls: [
    "The CMHT quartet: sector 20-50,000, team 6-15, caseload 200-250, multidisciplinary staffing, with sectors shrinking as investment grows and expanding as specialised teams take functions: the caseload stays fairly constant.",
    "Under 6 staff, no comprehensive care and no cross-cover; over 12-15, unwieldy management and information transfer.",
    "Establish clear clinical leadership without inhibiting initiative: the essential task of team management, run through the leadership-and-management separation with defined roles and good relationships.",
    "Home-based assessments pay considerable dividends for the severely ill.",
    "The case-management ceiling: 15-30 patients; enough for a relationship, few enough for systematic and recorded review.",
    "Routine monitoring: often overlooked, probably the most important function for team efficiency: systematic, not crisis-responsive; shaping and redirecting treatment, identifying the discharge-ready.",
    "Routine within 2-4 weeks: sooner unproductive, beyond 3 weeks the failed-appointment rate rises steeply; urgent (most psychotic episodes) within days; emergency same-day, and last year's count plus 20% keeps the emergency slots free.",
    "It is not outreach itself that is therapeutic: improved outcomes follow only from additional effective treatments. The daily clozapine visit treats; the visit merely delivers.",
    "Where CMHTs function well, assertive outreach takes only the un-stabilisable, whether AO helps depends on the existing local services.",
    "The four levels: unstaffed group homes; day-staffed hostels (1-2 staff daily, typically 4-8 residents); night-staffed hostels (sleeping-in staff, 10-20 residents); 24-hour staffed/nursed hostels: expensive, rare, serving 500,000-1,000,000 populations.",
    "Voluntary agencies are the more efficient long-term residential providers, but risk-selective; the mixed economy works best, with shared adapted houses over purpose-built units.",
    "Be clear about responsibilities with the GP; fudging boundaries is risky: the timetabled joint meeting or the link-worker, not goodwill alone.",
  ],
  highYieldSummary: [
    "The architecture: community mental health services are the planned assembly of components around a population; the inpatient unit and its alternatives (crisis houses, home treatment), the community mental health team, outpatient and office care, assertive outreach, supported accommodation in four tiers, and the specialised teams (crisis resolution, early intervention). The planning discipline holding them: population-need assessment, the balance of hospital and community (beds versus components, the inverse relationships), the integration requirement (the CMHT as hub-and-spoke centre), the ethics of community care, and the resource realism throughout.",
    "The CMHT: the hub: sectorised to 20-50,000 population (Western European sizes), staffed by 6-15 multidisciplinary members (under 6 ineffective; over 12-15 unwieldy), carrying a team caseload maximum of 200-250 patients (fewer for complex populations). The remit: post-discharge care and primary-care-and-private-sector overflow, the severe mental illness priority, with the honesty that diagnosis is not all: social adversity, personality difficulty and substance complications can make secondary care necessary for 'minor' disorders, threshold tools of limited use, clinical assessment deciding. The leadership problem and its settlement: the informal democratic style creating the clinical-leadership confusion, answered by establishing clear clinical leadership without inhibiting initiative; leadership and management separated, defined roles, good relationships. The assessments: psychiatrists conducting most, home-based assessments paying considerable dividends for the severely ill.",
    "Case management and the CPA: staff as case managers with explicitly limited caseloads (15-30), reviews systematic and recorded. The Care Programme Approach document: the patient's identified problems across the ten consideration domains; mental health (with relapse indicators), physical health, medication, daytime activity, personal care and living skills, carers-family-children-network, forensic history, substance misuse, cultural factors, housing-finances-legal: each with interventions, responsible staff and a review date, plus the risk assessment with crisis and contingency plans; the documentation level clinically, not managerially, determined. The team meetings: 1-2 weekly, 1.5-2 hours: allocation (delegated, pre-assessment discussion unprofitable), the three review types (new-patient: the broad experienced overview and fair allocation; routine: the overlooked efficiency engine, systematic not crisis-responsive, shaping treatment, identifying the discharge-ready; discharge: the audit and learning), and the waiting-list arithmetic: routine 2-4 weeks (sooner unproductive; beyond 3 weeks failed appointments rise steeply), urgent within days, emergency same-day, the 20%-surplus calculation: last year's count plus one-fifth, the 400-assessment example's nine slots weekly with one kept emergency-free.",
    "Assertive outreach: the evidence and the honesty: Stein and Test's original (1980, US tradition) (improved clinical and social outcomes with substantially reduced hospitalisation at slightly lower cost) the most replicated and researched specialist team. Target: the most difficult hard-to-engage or revolving-door psychotic patients (frequent dangerous relapses, poor compliance, substance misuse, personality difficulties, offending). Method: proactive outreach (visiting at home even when reluctant), enhanced team-working (daily meetings; several members per patient: safety and extensive needs), the practical culture (shopping, accommodation, daily medicine delivery). The honest verdicts: no evidence of required slavish fidelity; local adjustment sensible (no 24-hour service needed in comprehensive systems; relationships matter more; caseloads often exceed the recommended 1:10); where CMHTs function well, AO takes only the un-stabilisable; improved outcomes follow only from additional effective treatments. It is not outreach itself that is therapeutic; whether AO helps depends on existing local services.",
    "The wider components: supported accommodation in four levels; group homes (unstaffed, visited by community teams); day-staffed hostels (1-2 staff daily; cooking and cleaning encouraged; liaison not treatment; typically 4-8 residents); night-staffed hostels (sleeping-in staff; larger, 10-20 residents); 24-hour staffed/nursed hostels (on-site clinical staff; expensive; the long-term severely ill including compulsorily detained; serving 500,000-1,000,000 populations), most comprehensive services provide levels 1-2, social services level 3, level 4 rare. The voluntary-agency finding: more efficient at long-term residential care but risk-selective (reluctant with violence or substance histories); the mixed economy works best, with shared adapted houses preferred to purpose-built units (integration and stigma-reduction). The outpatient tier: the insurance-system office practice (narrow, psychotherapy or pharmacotherapy, poorly equipped for severe disorder, neglected in the literature) against the state-system clinics (polyclinics, dispensaries); the essential modern platform, with CMHT co-location or integration. The specialised developments: crisis resolution and home treatment (the admission-avoidance teams) and early intervention in psychosis (the duration-untreated-psychosis rationale).",
    "The planning discipline and its ethics: the balance of care; beds versus community components in their inverse relationships, the alternatives-to-admission inventory, the deinstitutionalisation lessons (Leff and Trieman's reprovision studies) deciding the mixture; the integration requirement: the CMHT as the service's hub-and-spoke centre with the GP interface run by timetabled joint meetings or the link-worker (monthly shared-patient discussions, highly time-efficient; be clear about responsibilities: fudging boundaries is risky), the wider agencies met by the same showing-up discipline. The ethics questions: when does support become intrusion, professional persistence coercion; compulsion migrating from the asylum building to the community, the community treatment orders (mandated community treatment, largely for young psychotic individuals, contested evidence); and the resource realism: the balance between comprehensive planning's appeal and the pragmatic incrementalism that fits most systems' actual development.",
    "The Indian tier: the DMHP as the Indian CMHT; mobile teams, community OPD outreach and treated-cases targets mapping onto the sector-teams logic, with the resource reality producing smaller teams, larger sectors and medical-officer-led staffing; the 200-250 caseload translating to the district mental health unit's realistic load. The accommodation gap: the family home as the default (level 0-1), the halfway-home sector NGO-scarce, the NGO-family mixed economy (the NIMHANS family-ward tradition, the day-care centres) the actual continuum. The care-plan discipline travels free (the single-clinic-note version, the written plan the family carries); the CHC-PHC-ASHA layer as the Indian primary care of the liaison discipline (the DMHP community nurse or the Tele-MANAS callback as the link-worker; the district review meetings as the timetabled joint review); outreach-by-necessity as the Indian AO (the mobile camps, the home visits where clinics are distant, the clozapine-visit logic, not team-formal fidelity); and the ethics questions arriving early: the family-delivered community compulsion (medication in the food, the house-bound patient) with the MHA 2017's rights-provisions as the formal counterweight. Costs approx 2026: the DMHP's per-district budgets; the staffed hostel the expensive end, the family-delivered care the subsidy-dependent end.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "mhs-quiz-1",
      question: "The standard Western European CMHT sector size and team caseload maximum are:",
      options: ["5,000 population; 50 patients", "20-50,000 population; 200-250 patients maximum (fewer for complex populations)", "500,000 population; unlimited patients", "1 million population; 20 patients"],
      correctIndex: 1,
      explanation: "The sector logic, with the dynamic honesty: sectors shrink with investment and grow as specialised teams offload functions — keeping team caseloads fairly constant at the 200-250 ceiling.",
      afterSectionId: "mechanism",
    },
    {
      id: "mhs-quiz-2",
      question: "Routine assessments are held at the 2-4 week window because:",
      options: ["Patients prefer waiting", "Sooner is unproductive, and delays beyond 3 weeks result in a rapidly rising rate of failed appointments", "There is no evidence about timing", "Six months is optimal"],
      correctIndex: 1,
      explanation: "The access discipline's arithmetic: the window has two edges — the unproductive one and the cliff — and the 20%-surplus calculation keeps the emergency capacity free inside it.",
      afterSectionId: "symptoms",
    },
    {
      id: "mhs-quiz-3",
      question: "Under the Care Programme Approach, a structured care plan specifies:",
      options: ["Only the diagnosis and medication", "The identified problems across the consideration domains, the interventions proposed, the responsible staff, and an agreed review date — plus risk assessment with crisis and contingency plans", "The budget only", "The staff roster only"],
      correctIndex: 1,
      explanation: "The needs-interventions-responsibility-review structure — the coordinating document the complex patient's care runs on, its level clinically, not managerially, determined.",
      afterSectionId: "diagnosis",
    },
    {
      id: "mhs-quiz-4",
      question: "The honest verdict on assertive outreach teams' mechanism:",
      options: ["Outreach itself is therapeutic", "Improved outcomes follow only from additional effective treatments and relationships — it is not outreach itself that is therapeutic", "Fidelity to the original model is essential", "AO teams are ineffective everywhere"],
      correctIndex: 1,
      explanation: "The mechanism honesty preventing the fidelity cult: local adjustment sensible, and where CMHTs function well AO takes only the un-stabilisable — the daily clozapine visit delivers the treatment; the visiting does not.",
      afterSectionId: "differential",
    },
    {
      id: "mhs-quiz-5",
      question: "The 20%-surplus calculation for assessment capacity means:",
      options: ["Add 20% to each clinician's caseload", "Allocate last year's assessment count plus 20%, leaving weekly emergency capacity — the 400-assessment example yielding nine slots weekly, one emergency-free", "Reserve 20% of beds for emergencies", "Increase failed-appointment tolerance by 20%"],
      correctIndex: 1,
      explanation: "The practical surplus approach that keeps a functioning waiting list: the emergency capacity fenced before the routine demand takes it.",
      afterSectionId: "management",
    },
    {
      id: "mhs-quiz-6",
      question: "In the Indian district, the CMHT's functions most often rest with:",
      options: ["Private office psychiatrists practising psychotherapy", "The DMHP's mobile teams and community OPD outreach — smaller teams, larger sectors, medical-officer-led staffing — with the family home as the accommodation continuum's default", "Regional 24-hour staffed hostels", "The insurance-system outpatient clinics"],
      correctIndex: 1,
      explanation: "The DMHP as the Indian CMHT: the resource reality reshaping the chapter's model without changing its logic — and the care-plan discipline travelling free as the written plan the family carries.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Give the CMHT quartet (sector size, team size, caseload maximum, staffing) with the team-size logic stated.", answer: "THE QUARTET: (1) SECTOR; a defined geographic population of 20-50,000 (current Western European sizes), shrinking with investment and expanding as specialised teams take functions, the caseload kept fairly constant by the moving boundary; (2) TEAM SIZE: 6-15 members; (3) CASELOAD MAXIMUM: 200-250 patients for the team, fewer for complex populations; (4) STAFFING: multidisciplinary (psychiatrists, community nurses, psychologists, social workers and others) with skill-sharing and generic working. THE TEAM-SIZE LOGIC: under 6 staff cannot provide comprehensive care or cross-cover; over 12-15 becomes unwieldy with management and information transfer: the two boundaries that bracket every safe design.", topic: "The CMHT" },
    { question: "State the clinical-leadership problem: its origin and its solution.", answer: "THE PROBLEM: the multidisciplinary team's skill-sharing and generic working run on an informal democratic style, which creates the clinical-leadership confusion; originally an informality of senior medical staff, now the era of team managers whose roles vary from purely administrative to setting clinical priorities; nobody unambiguously holds the clinical decision. THE SOLUTION: establishing clear clinical leadership without inhibiting initiative; the essential task of team management; achieved through the leadership-and-management separation, with defined roles and good relationships between the two, so that the manager administers and the clinical leader leads without the team's initiative being stamped out.", topic: "Team management" },
    { question: "Walk the CPA document's structure: the ten consideration domains, the format, and the crisis-contingency pair.", answer: "THE TEN DOMAINS: mental health (with relapse indicators), physical health, medication, daytime activity, personal care and living skills, carers-family-children-network, forensic history, substance misuse, cultural factors, housing-finances-legal. THE FORMAT: each identified problem paired with its interventions, the responsible staff member, and an agreed review date; the needs-interventions-responsibility-review cycle; the documentation level clinically, not managerially, determined. THE CRISIS-CONTINGENCY PAIR: the risk assessment with its crisis plan (the response to the relapse) and contingency plan (what everyone does if the first response fails or the responsible person is unavailable); the written answer to the next emergency, agreed with patient and family.", topic: "The CPA" },
    { question: "Name the three review types with their functions, and state the routine-monitoring lesson.", answer: "THE THREE TYPES: (1) NEW-PATIENT REVIEW; the broad, experienced overview that allocates the patient fairly among the team; (2) ROUTINE MONITORING: the legal CPA requirement, systematic rather than crisis-responsive; (3) DISCHARGE REVIEW: the audit and learning opportunity. THE ROUTINE-MONITORING LESSON: often overlooked, probably the most important function for team efficiency; systematic review beats crisis-response for shaping and redirecting treatment, and for identifying the discharge-ready patients; the team that only reviews at crisis never discharges anyone, and the caseload silently closes to new patients.", topic: "Team meetings" },
    { question: "Run the waiting-list arithmetic in full: the routine window, the cliff, the urgent and emergency definitions, and the surplus formula with its worked example.", answer: "THE ROUTINE WINDOW: routine assessments within 2-4 weeks; sooner is unproductive, and beyond 3 weeks the failed-appointment rate rises steeply. THE URGENT DEFINITION: most psychotic episodes; seen within days (within a week at the outside). THE EMERGENCY DEFINITION: immediate risk; seen the same day. THE SURPLUS FORMULA: last year's assessment count plus 20% allocated, leaving weekly emergency capacity. The worked example: 400 assessments last year, plus one-fifth (480), yields nine assessment slots weekly with one kept emergency-free; the calculation is the fence that keeps the Friday emergency from eating the following week's routine list.", topic: "The access discipline" },
    { question: "Describe the GP-liaison models and state the boundary warning.", answer: "THE MODELS: the spectrum from informal contact through shared care to co-location; the effective system being regular timetabled joint meetings, or a link-worker attending the health centre: monthly shared-patient discussions, highly time-efficient (prompt problem-solving and crisis anticipation). The same principles meet the wider agencies (social services, housing, voluntary): showing up and meeting people pays dividends even once. THE WARNING: be clear about responsibilities; fudging boundaries is risky: the deteriorating patient falls between team and surgery when each assumes the other is holding them.", topic: "The liaison discipline" },
    { question: "Assertive outreach: the original evidence, the target population, the method, and the two honest verdicts.", answer: "THE EVIDENCE: Stein and Test (1980, the US tradition); improved clinical and social outcomes with substantially reduced hospitalisation at slightly lower cost; the most replicated and researched specialist team. THE TARGET POPULATION: the most difficult hard-to-engage or revolving-door psychotic patients; frequent dangerous relapses, poor compliance, substance misuse, personality difficulties, offending. THE METHOD: proactive outreach (visiting at home even when reluctant); enhanced team-working (daily meetings; several members per patient: safety and extensive needs); the practical culture (shopping, accommodation, daily medicine delivery) beyond professional boundaries. THE TWO HONEST VERDICTS: (1) no evidence that teams must slavishly follow the original model; local adjustment sensible (no 24-hour service needed in comprehensive systems; relationships matter more than fidelity; caseloads often exceed the recommended 1:10; where CMHTs function well, AO takes only the un-stabilisable); (2) improved outcomes follow only from additional effective treatments (the daily clozapine visit's logic) it is not outreach itself that is therapeutic, and whether AO helps depends on the existing local services.", topic: "Assertive outreach" },
    { question: "Recite the four supported-accommodation levels with their staffing and resident numbers, the level-4 catchment, and the voluntary-agency finding.", answer: "THE FOUR LEVELS: (1) GROUP HOMES; unstaffed, visited by community teams, for the relatively independent; (2) DAY-STAFFED HOSTELS: 1-2 staff daily, cooking and cleaning encouraged, liaison rather than treatment, typically 4-8 residents; (3) NIGHT-STAFFED HOSTELS: sleeping-in staff, larger units of 10-20 residents; (4) 24-HOUR STAFFED/NURSED HOSTELS: on-site clinical staff, expensive, for the long-term severely ill including compulsorily detained, serving populations of 500,000-1,000,000. THE PROVISION REALITY: most comprehensive services provide levels 1-2, social services level 3, level 4 rare. THE VOLUNTARY-AGENCY FINDING: voluntary agencies more efficient at long-term residential care but risk-selective (reluctant with violence or substance histories) so the mixed economy works best, with shared adapted houses preferred over purpose-built units for integration and stigma-reduction.", topic: "Supported accommodation" },
  ],
  faqs: [
    { question: "What is a community mental health team?", answer: "The sector's multidisciplinary hub: a defined population (20-50,000), a defined staffing (six to fifteen professionals), and defined functions (assessment, treatment, case management and liaison) for the severe mental illness caseload that primary care cannot manage." },
    { question: "How many patients should one case manager carry?", answer: "Fifteen to thirty: the chapter's explicit ceiling: enough for a relationship, few enough for systematic review. Caseloads beyond this become crisis-response rather than care." },
    { question: "Why all the paperwork?", answer: "Because complex care fails on the gaps: the structured care plan (needs, interventions, responsibilities, review dates, crisis plans) coordinates the multi-agency machinery; the document is the treatment's spine, not its decoration." },
    { question: "How fast should new patients be seen?", answer: "Routine within two to four weeks (sooner is unproductive; beyond three weeks failed appointments climb steeply); urgent (most psychoses) within days; emergencies same-day, with the 20%-surplus calculation keeping emergency capacity free." },
    { question: "Do assertive outreach teams work?", answer: "For their population (the revolving-door, hard-to-engage) yes: reduced hospitalisation and improved outcomes in the original trials. But the honest reading: it is the relationships and the delivered treatments that work, not outreach as ritual; good basic teams may make AO redundant." },
    { question: "Where do the long-term ill live?", answer: "Along the four levels: unstaffed group homes, day-staffed, night-staffed and 24-hour-staffed hostels (the expensive level serving populations of half a million to a million), with voluntary agencies the efficient long-term providers (if risk-selective) and the mixed economy the answer." },
    { question: "When does community support become coercion?", answer: "The field's live ethics question: intensive visiting of the reluctant patient, informal pressure and formal community treatment orders; the migration of compulsion from the asylum to the doorstep, demanding legal scrutiny and the autonomy balance." },
    { question: "How does any of this apply in India?", answer: "The DMHP district is the Indian CMHT: mobile teams and community OPD outreach, medical-officer-led, with the family home as the accommodation continuum's default; the care-plan discipline travels free (the written plan the family carries), the mobile camp is outreach-by-necessity, and the family-delivered compulsion (medication in the food) is the intrusion-versus-support question asked of households, with the MHA 2017's rights-provisions as the formal counterweight." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "UK Department of Health — the Care Programme Approach guidance: the care-plan structure (identified problems, interventions, responsible staff, review dates, crisis and contingency plans)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 7.5 (Burns) with ch 7.2 (Slade, Tansella & Thornicroft) — the source chapters mapped; content rewritten and updated beyond them (2009)" },
      { source: "Goffman E and Barton R — the institutionalisation critique motivating the whole architecture (via the therapeutic-communities lineage)" },
    ],
    trials: [
      { source: "Stein LI & Test MA — Alternatives to mental hospital treatment: the original assertive community treatment trial (1980)" },
      { source: "Burns T et al. — the UK assertive-outreach team evaluations and the balance-of-care tradition" },
      { source: "Muijen M et al. — the home-treatment and crisis-resolution evaluations (the alternatives-to-admission tradition)" },
      { source: "Tyrer P — the case-management evolution and the intensive-versus-standard trials" },
      { source: "Leff J & Trieman N — the reprovision studies: the deinstitutionalisation lesson base" },
    ],
    reviews: [
      { source: "Thornicroft G & Tansella M — the matrix model of community mental health: the input-process-outcome planning framework" },
      { source: "Goldberg D et al. — the primary-care interface (the Oxford ch 7.8 companion)" },
      { source: "Harding CM — the longitudinal severe-illness outcome tradition underlying community optimism" },
      { source: "National Mental Health Survey of India 2015–16 (NIMHANS) — the needs-assessment base for district services (2016)", url: "https://indianmhs.nimhans.ac.in/" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, 24x7, for distress and guidance on where to go" },
      { source: "The written care plan — the one-page document (problems, help, responsibility, review date, crisis plan) this course hands to every patient and family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what the community team is, how you enter it, what a care plan is, and what to do in a crisis.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The component inventory, the CMHT specification, the CPA, the waiting-list arithmetic and the accommodation levels.",
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
      description: "Everything: the planning discipline, the honest AO verdicts, the India translation, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The architecture in one view: the components and the planning discipline.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can list the service components and recite the CMHT quartet cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The planning engine; the referral, crisis and revolving-door pathways; the movement's history.", sectionIds: ["mechanism", "pathways", "timeline"], checkpoint: "You can walk the planning engine and run the referral-to-allocation pathway with the urgency arithmetic." },
    { number: 3, title: "Clinical Practice", description: "The specification, the CPA document, the team-model differentials and the planning discipline as management.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can draft the ten-domain care plan and run the waiting-list arithmetic with the 20% surplus." },
    { number: 4, title: "Indian Context", description: "The DMHP as the Indian CMHT, the family as the accommodation continuum, the decision path and the common mistakes.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can translate the sector arithmetic to the Indian district and name the family-CTO ethics question." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the CMHT quartet and the AO verdict questions cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 7.5 (Burns) — the source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "NOTP 2e, ch 7.2 (Slade, Tansella & Thornicroft) — the service-needs companion framework the note's planning logic is built on", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Stein LI & Test MA — Alternatives to mental hospital treatment: the original assertive community treatment trial (the AO evidence and the US community movement)", sourceType: "trial", year: "1980", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Burns T et al. — the UK assertive-outreach team evaluations and the balance-of-care tradition", sourceType: "trial", year: "1990s-2000s", dateReviewed: "2026-09-30" },
    { id: "S5", source: "UK Department of Health — the Care Programme Approach guidance (the care-plan structure)", sourceType: "guideline", year: "1990s onward", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Tyrer P — the case-management evolution and the intensive-versus-standard trials", sourceType: "trial", year: "1990s", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Muijen M et al. — the home-treatment and crisis-resolution evaluations (the alternatives-to-admission tradition)", sourceType: "trial", year: "1990s", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Thornicroft G & Tansella M — the matrix model of community mental health: the input-process-outcome planning framework", sourceType: "review", year: "1990s-2000s", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Goldberg D et al. — the primary-care interface (the Oxford ch 7.8 companion)", sourceType: "review", year: "1990s-2000s", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Leff J & Trieman N — the reprovision studies: the deinstitutionalisation lesson base", sourceType: "primary", year: "1990s", dateReviewed: "2026-09-30" },
    { id: "S11", source: "Harding CM — the longitudinal severe-illness outcome tradition underlying community optimism", sourceType: "review", year: "1980s onward", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Goffman E / Barton R — the institutionalisation critique motivating the whole architecture (via the therapeutic-communities lineage)", sourceType: "textbook", year: "1950s-1960s", dateReviewed: "2026-09-30" },
    { id: "S13", source: "The Indian tier — the District Mental Health Programme framework, NIMHANS community-psychiatry evaluations, NMHS 2015-16 as the needs-assessment base; the Tele-MANAS layer; cost realities (approx 2026) — practice-pattern description from the note's India lens, context honestly labelled", sourceType: "review", year: "2026 context", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The architecture: community mental health services are the planned assembly of components around a population; the inpatient unit and its alternatives (crisis houses, home treatment), the community mental health team, outpatient and office care, assertive outreach, supported accommodation in four tiers, and the specialised teams (crisis resolution, early intervention): held together by a planning discipline of population-need assessment, balance of care, integration and resource realism.", grade: "established", sources: ["S1", "S2"] },
    { text: "The CMHT specification: a sectorised team responsible for 20-50,000 population (current Western European sizes, shrinking with investment and expanding as specialised teams take functions), staffed by 6-15 multidisciplinary members (under 6 unable to provide comprehensive care or cross-cover; over 12-15 unwieldy with management and information transfer), carrying a team caseload maximum of 200-250 patients, fewer for complex populations.", grade: "established", sources: ["S1", "S2"] },
    { text: "The CMHT remit: post-discharge care and primary-care-and-private-sector overflow with the severe mental illness priority (psychoses and severe affective disorders), with the honesty that diagnosis is not all: social adversity, personality difficulty and substance complications can make secondary care necessary for 'minor' disorders, threshold tools of limited use, clinical assessment deciding; in systems with little private care, CMHTs also treat the mild and transient. Psychiatrists conduct most initial assessments (non-medical assessment effective only with developed primary care); home-based assessments pay considerable dividends for the severely ill.", grade: "established", sources: ["S1", "S9"] },
    { text: "Case management and the CPA: staff as case managers with explicitly limited caseloads of 15-30 and systematic recorded reviews; the Care Programme Approach structured care plan recording the patient's identified problems across ten consideration domains (mental health with relapse indicators, physical health, medication, daytime activity, personal care and living skills, carers-family-children-network, forensic history, substance misuse, cultural factors, housing-finances-legal), each with interventions, responsible staff and a review date, plus risk assessment with crisis and contingency plans: the documentation level clinically, not managerially, determined.", grade: "established", sources: ["S1", "S5", "S6"] },
    { text: "The team meetings and the access discipline: 1-2 weekly meetings of 1.5-2 hours with allocation delegated (pre-assessment discussion unprofitable) and three review types: new-patient (the broad experienced overview, fair allocation), routine monitoring (often overlooked, probably the most important function for team efficiency: systematic, not crisis-responsive, shaping and redirecting treatment, identifying the discharge-ready; the legal CPA requirement) and discharge (audit and learning); routine assessments within 2-4 weeks (sooner unproductive; beyond 3 weeks the failed-appointment rate rises steeply), urgent (most psychotic episodes) within days, emergencies (immediate risk) same-day: the 20%-surplus calculation (last year's count plus one-fifth) leaving weekly emergency capacity, the 400-assessment example yielding nine slots weekly, one emergency-free.", grade: "established", sources: ["S1"] },
    { text: "The liaison discipline: with primary care, the effective systems being regular timetabled joint meetings or a link-worker attending the health centre (monthly shared-patient discussions, highly time-efficient for prompt problem-solving and crisis anticipation) with the warning that responsibilities must be clear because fudging boundaries is risky; the wider agencies (social services, housing, voluntary) met by the same principles, showing up and meeting people paying dividends even once.", grade: "established", sources: ["S1", "S9"] },
    { text: "Assertive outreach: the original model (Stein and Test, the US tradition) delivered improved clinical and social outcomes with substantially reduced hospitalisation at slightly lower cost. The most replicated and researched specialist team; the target population being the most difficult hard-to-engage or revolving-door psychotic patients (frequent dangerous relapses, poor compliance, substance misuse, personality difficulties, offending); the method: proactive outreach (visiting at home even when reluctant), enhanced team-working (daily meetings; several members per patient), the practical culture (shopping, accommodation, daily medicine delivery) beyond professional boundaries.", grade: "established", sources: ["S3", "S1"] },
    { text: "The AO honest verdicts: no evidence that teams must slavishly follow the original model; local adjustment sensible (no 24-hour service needed in comprehensive systems; relationships matter more than fidelity; caseloads often exceeding the recommended 1:10); where CMHTs function well, AO takes only the un-stabilisable; improved outcomes follow only from additional effective treatments (the daily clozapine visit's logic). It is not outreach itself that is therapeutic, and whether AO helps depends on existing local services.", grade: "established", sources: ["S4", "S1"] },
    { text: "Supported accommodation: the four levels; group homes (unstaffed, visited by community teams); day-staffed hostels (1-2 staff daily, cooking and cleaning encouraged, liaison not treatment, typically 4-8 residents); night-staffed hostels (sleeping-in staff, larger units of 10-20 residents); 24-hour staffed/nursed hostels (on-site clinical staff, expensive, for the long-term severely ill including compulsorily detained, serving 500,000-1,000,000 populations), most comprehensive services providing levels 1-2, social services level 3, level 4 rare. Voluntary agencies more efficient at long-term residential care but risk-selective (reluctant with violence or substance histories): the mixed economy working best, with shared adapted houses preferred over purpose-built units.", grade: "established", sources: ["S1"] },
    { text: "The outpatient tier: the insurance-system office practice narrow in remit (psychotherapy or pharmacotherapy), poorly equipped for severe disorder and neglected in the literature; the state-system clinics (polyclinics, dispensaries) as the essential modern platform with psychiatrists and psychologists working within them under enhanced resources, CMHT co-location or integration the direction.", grade: "established", sources: ["S1"] },
    { text: "The specialised developments and the planning discipline: crisis resolution and home treatment as the admission-avoidance teams (the home-treatment evaluations); early intervention in psychosis on the duration-untreated-psychosis rationale; the balance of care: beds versus community components in their inverse relationships, the alternatives-to-admission inventory, and the deinstitutionalisation lessons (the reprovision studies) deciding the mixture; the CMHT as the service's hub-and-spoke centre.", grade: "established", sources: ["S1", "S7", "S10", "S8"] },
    { text: "The ethics of community care: the questions of when support becomes intrusion and professional persistence becomes coercion; compulsion migrating from the asylum building to the community, formalised as community treatment orders (mandated community treatment, largely for young psychotic individuals) with contested evidence; and the resource realism (the balance between comprehensive planning's appeal and the pragmatic incrementalism that fits most systems' actual development) with the community-optimism tradition (the longitudinal outcome evidence) as the movement's founding confidence.", grade: "supported", sources: ["S1", "S11"] },
    { text: "The Indian tier: the DMHP as the Indian CMHT (mobile teams, community OPD outreach, treated-cases targets mapping onto the sector-teams logic, smaller teams, larger sectors, medical-officer-led staffing; the 200-250 caseload translating to the district mental health unit's realistic load); the family home as the accommodation continuum's default with the NGO-family mixed economy (the NIMHANS family-ward tradition, day-care centres) the actual continuum; the care-plan discipline travelling free as the single-clinic-note version; the CHC-PHC-ASHA layer as the liaison's Indian primary care (the DMHP community nurse or Tele-MANAS callback as the link-worker; the district review meetings as the timetabled joint review); outreach-by-necessity as the Indian AO (the mobile camps, the home visits, the clozapine-visit logic, not team-formal fidelity); the family-delivered community compulsion (medication in the food, the house-bound patient) with the MHA 2017's rights-provisions as the formal counterweight; costs approx 2026 (the DMHP's per-district budgets; the staffed hostel the expensive end, family-delivered care the subsidy-dependent end): practice-pattern description, context honestly labelled.", grade: "supported", sources: ["S1", "S13"] },
  ],
};
