import type { PsychiatryCourse } from "./types";

/**
 * THE VOLUNTARY SECTOR — canonical Psychiatry concept course
 * (migration batch 16, Group R — social psychiatry & services).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/voluntary-sector.md — untouched foundation),
 * whose own source_map: NOTP 2e (2009) ch 7.9 (Part 8) — original
 * rewrite (Pinfold & Teasdale); the Rethink experience as the model,
 * the sector's characteristics, functions and partnerships.
 * Re-researched against the lineages the note itself cites (the
 * Rethink organisational documentation; the New Zealand like minds,
 * like mine campaign; WFSAD's 2003 East-African workshop; EUFAMI and
 * SANE Australia; NAMI's Peer-to-Peer course and Canada's
 * family-to-family network; India's ACMI entitlement victories; the
 * Mental Health Alliance's eight-year Act-reform campaign; the BME
 * network and the National Council of La Raza; the Scottish Recovery
 * Network) with per-claim provenance.
 *
 * Neuroscience honesty: the note grounds no brain region and no
 * neurotransmitter — the sector's engine is organisational and
 * social in this lineage, so brainRegions and neurotransmitters are
 * empty by design and the gap is recorded in contentGaps, never
 * papered over with decorative circuitry.
 *
 * Drug routes: the note assigns no medication any role — the sector
 * delivers housing, advocacy, employment, carer support and peer
 * education, none of them pharmacological — so drugLinks is empty
 * by design; the disorders met in the cases (schizophrenia, the
 * bereavement aftermath) carry their own pharmacology in their own
 * courses, never invented here.
 */
export const voluntarySectorCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "voluntary-sector",
  title: "The Voluntary Sector",
  shortName: "Voluntary Sector",
  kind: "concept",
  category: "Social Psychiatry & Services",
  groupLetter: "R",
  groupName: "Social psychiatry & services",
  learningPath: ["Psychiatry", "Social Psychiatry & Services", "The Voluntary Sector"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "low",
  primaryAudience: "medical",

  tagline:
    "Experts by experience: services, campaigns and critical friendship for psychiatry",

  summary:
    "The voluntary sector is the independent, values-driven tier of mental-health organisations rooted in service-user and carer experience. It delivers front-line services, campaigns, advocacy and critical friendship, and psychiatry needs its members, campaigners and educators.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define the mental-health voluntary sector and recite its seven key characteristics: the independent position, the strong values base, empowerment principles, non-profit distribution, passionate commitment, rootedness in service-user and carer experience, and the constant striving for change.",
    "Place organisations on the four-part typology (mental-health-specific, social-problem, campaign-educate-advocate, developing-world humanitarian) with one example each, including the Armenia-CAFOD case.",
    "Recite the Rethink model: the 1972 National Schizophrenia Fellowship origin, the 7,500-member structure, the recovery-oriented mission, the two role descriptions (bridging; ensuring service users are heard and needs met holistically) and the activity inventory with its front-line services.",
    "Quote the evidence of difference (the New Zealand like minds, like mine campaign, the WFSAD East-African workshop, the 2002 English clinical-guideline influence and India's ACMI entitlement victories) and the four common campaign themes.",
    "Explain the critical-friend function with the Rethink examples: second-opinion support in misdiagnosis, complaints procedures, legal representation at inquests and the systemic-problem focus.",
    "Describe the Mental Health Alliance (80 organisations including the Royal College of Psychiatrists) opposing and amending the Mental Health Act reform for eight years.",
    "State the sector's fragility (state-funding dependence threatening autonomy) and the mutual-dependency conclusion: psychiatrists joining as members, campaigners and educators; 'we do need each other'.",
    "Map the Indian voluntary landscape (the family-organisation tradition, the schizophrenia-care societies, the disability-rights networks, the helpline tier) and the district psychiatrist's referral-map partnership discipline.",
  ],
  quickFacts: [
    { label: "The definition", value: "The third sector", detail: "The tier between the statutory and the private: independent, values-driven organisations originally volunteer-run, motivated by improving lives differently, working alongside service users and families, from all-volunteer charities to large contracted service providers" },
    { label: "The identity", value: "Seven key characteristics", detail: "An independent position; a strong values base; empowerment principles; non-profit distribution; passionate commitment to the work focus; rootedness in service-user and carer experience; always striving for better provision and opportunities" },
    { label: "The typology", value: "Four organisational types", detail: "Mental-health-specific (the Finnish Association for Mental Health); social-problem organisations whose populations include the mentally ill (homeless, refugee, domestic-violence, young-offender charities); campaign-educate-advocate (EUFAMI, SANE Australia); developing-world humanitarian (Armenia: CAFOD with the Association of Child Psychiatrists and Psychologists)" },
    { label: "The model organisation", value: "Rethink (ex-NSF)", detail: "The National Schizophrenia Fellowship founded 1972 by families concerned that relatives of people with schizophrenia had no support for themselves: grown into a 7,500-member charity with the recovery-oriented mission: supporting everyone affected by severe mental illness to recover a better quality of life" },
    { label: "The delivery arm", value: "350 services, 1,300 staff (2007)", detail: "Supported housing schemes, advocacy projects, community resource centres, carer support services, employment and training programmes, school education projects and young-people mentoring: delivered in partnership with the NHS and social services" },
    { label: "The campaign agenda", value: "Four common themes", detail: "Earlier intervention, better crisis response, more family support, less physical restraint: shared across countries at every wealth and development stage; the community-treatment-order controversies producing the voluntary-clinical alliances" },
    { label: "The political power", value: "80 organisations, eight years", detail: "The Mental Health Alliance (the Royal College of Psychiatrists prominent) opposed and amended the government's Mental Health Act reform proposals for eight years, achieving both legislative change and delay" },
    { label: "The Indian precedent", value: "ACMI's entitlements", detail: "Action for Mental Illness achieved tax concessions for the mentally ill and their carers, and maintenance allowances equivalent to physical disabilities: the statutory-entitlement victory the chapter itself cites as its Indian evidence" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The model organisation's founding disorder: the 1972 families concerned that relatives of people with schizophrenia had no support for themselves; the recovery mission's population" },
    { label: "Psychiatric Rehabilitation", type: "condition", href: "/psychiatry/psychiatric-rehabilitation/", note: "The recovery model's clinical home: the orientation the sector pioneered and the statutory services adopted; the housing, employment and day-structure services the sector delivers" },
    { label: "Community Mental Health Services", type: "condition", href: "/psychiatry/mh-services/", note: "The statutory partner tier: the front-line services delivered in partnership with the NHS and social services (in-batch lesson)" },
    { label: "Psychiatry in Primary Care", type: "condition", href: "/psychiatry/primary-care-psychiatry/", note: "The referral map's first mile: the GP who must know the local organisations before the psychiatrist ever sees the family (in-batch lesson)" },
    { label: "Refugees & Mental Health", type: "condition", href: "/psychiatry/refugee-mental-health/", note: "The social-problem typology tier in action: refugee organisations whose populations include the mentally ill (in-batch lesson)" },
    { label: "Transcultural Psychiatry & Stigma", type: "condition", href: "/psychiatry/transcultural-stigma/", note: "The campaigns' territory: stigma and discrimination; the like minds, like mine evidence taught there, delivered here as the sector's function" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The Mental Health Alliance's eight-year campaign against the Act reform: the sector's collective legislative influence on the law this course's partner discipline" },
    { label: "Family Therapy", type: "condition", href: "/psychiatry/family-therapy/", note: "The family movement's clinical counterpart: the carer organisations as the de facto family-treatment infrastructure; the joint family-education sessions" },
    { label: "Group Therapy", type: "condition", href: "/psychiatry/group-therapy/", note: "The mutual-support group's clinical engine: the founding function (families meeting families) as group therapy before the referral exists" },
    { label: "Therapeutic Communities", type: "condition", href: "/psychiatry/therapeutic-communities/", note: "The residential tradition inside the sector: the supported housing and residential facilities the organisations run, the Richmond Fellowship lineage" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The voluntary sector's engine is the conversion of lived experience into organised services and influence, and it starts with a deficit. The founding scene repeats wherever the sector appears: families and service users discover that the people the illness touches have no support of their own (the 1972 families concerned that relatives of people with schizophrenia had no support for themselves) and mutual support becomes the first function. The organisation then crystallises on its seven characteristics (independence, a strong values base, empowerment principles, non-profit distribution, passionate commitment, rootedness in service-user and carer experience, striving for change), which position it in the third sector between the statutory and the private: doing things differently because the prime motivation is improving lives, never distributing profit. The typology sorts the players: mental-health-specific organisations, social-problem organisations whose populations include the mentally ill, campaign-educate-advocate organisations, and the developing-world humanitarian response. The activity inventory is the output shaft: mutual support, information resources, advocacy, policy development from the user-and-carer evidence base, campaigns, research and surveys, guidance and professional training, media activity and internet dissemination, and front-line services delivered in partnership with the statutory tier; 350 services and approximately 1,300 staff at the model organisation alone (2007). The bridging roles are the human transmission: linking the person with non-judgemental service delivery connected to lived experience, and ensuring service users are heard and needs met more holistically. The critical-friend function is the governor: independence (the essential characteristic) licenses the sector to monitor both statutory and private provision, praising the positive and highlighting the wrong: second opinions where misdiagnosis has produced inappropriate care with tragic consequences, complaints procedures, legal representation at inquests, and the persuading of ombudsmen and coroners to recommend local policy improvements. The whole machine runs on mutual dependency while remaining fragile: state-funding dependence threatens the autonomy the engine runs on, and the psychiatrists the sector needs as members, campaigners and educators are the same clinicians whose public image and workforce pipeline it transforms; 'we do need each other'.",
    steps: [
      "The founding deficit: families and users organising because the system offered them nothing; the 1972 origin, mutual support the first function and the root that grows into an organisation with political leverage.",
      "The organisation on seven characteristics: independence, values base, empowerment principles, non-profit distribution, passionate commitment, user-and-carer rootedness, striving for change; the third sector defined against both the statutory and the private.",
      "The typology positions the player: mental-health-specific; social-problem; campaign-educate-advocate; developing-world humanitarian: each with its own remit, stakeholder group, trustee and membership structures, governance and activities portfolio.",
      "The activity inventory delivers: mutual support, information, advocacy, policy development, campaigns, research and surveys, guidance and training, media and internet dissemination, and the front-line services in partnership with the statutory tier (350 services, approximately 1,300 staff, 2007).",
      "The bridging roles carry it to the person: linking the individual with non-judgemental service delivery connected to lived experience; ensuring service users are heard and needs met more holistically.",
      "The critical-friend function governs it: independence licensing monitored criticism of statutory and private provision alike; praising the positive, highlighting the wrong; second opinions, complaints, inquests, the systemic focus.",
      "The mutual dependency closes it: the sector fragile in state-funding dependence, psychiatry fragile in public image and workforce pipeline; 'we do need each other in order to deliver better outcomes for mental health service users and their families'.",
    ],
    grade: "supported",
  },
  brainRegions: [],
  neurotransmitters: [],
  pathways: [
    {
      id: "founding-to-services-pathway",
      name: "The founding-to-services chain (the Rethink trajectory)",
      steps: [
        { label: "The unmet need", detail: "Relatives of people with schizophrenia had no support for themselves. The families' deficit the statutory system did not see" },
        { label: "The mutual-support group", detail: "Families meeting families: the original function, hope never given up, the lived experience pooled" },
        { label: "The organisation", detail: "The membership charity on seven characteristics: trustees, members (7,500, service users, carers, professionals, the public), governance, remit" },
        { label: "The recovery mission", detail: "Supporting everyone affected by severe mental illness to recover a better quality of life: the lived-experience perspective the staff carry" },
        { label: "The delivery arm", detail: "350 services and approximately 1,300 staff (2007): supported housing, advocacy projects, community resource centres, carer support, employment and training, school education, mentoring, in partnership with the NHS and social services" },
      ],
      clinicalManifestation: "The family that arrives at the OPD already connected to housing, advocacy and carer support, because a kitchen-table fellowship grew into the service the prescription alone cannot write.",
      grade: "supported",
    },
    {
      id: "evidence-to-policy-pathway",
      name: "The mutual-support-to-policy chain (the ACMI and Alliance trajectory)",
      steps: [
        { label: "The user-and-carer evidence base", detail: "The struggles documented: the reports, the surveys, the treatment preferences the statutory machinery never collected" },
        { label: "Policy development", detail: "The evidence turned into positions: what needs to change, in whose interest, on what scale" },
        { label: "The campaigns", detail: "Stigma and discrimination fought publicly; the common themes carried: earlier intervention, better crisis response, more family support, less physical restraint" },
        { label: "The coalition", detail: "80 organisations with the Royal College prominent: the voluntary-clinical alliance that lobbies more effectively than either side alone" },
        { label: "The statutory change", detail: "The Mental Health Act reform opposed and amended for eight years (change and delay); the 2002 schizophrenia guidelines carrying user-and-carer preferences; ACMI's tax concessions and maintenance allowances" },
      ],
      clinicalManifestation: "The clinical guideline whose treatment preferences were written by the people who take the treatment: the sector's collective influence entering the statutory machinery.",
      grade: "supported",
    },
    {
      id: "critical-friend-pathway",
      name: "The critical-friend chain (independence to systemic correction)",
      steps: [
        { label: "Independence maintained", detail: "The essential characteristic: the organisation that can criticise funders and partners alike because it does not depend on either's favour" },
        { label: "The monitoring stance", detail: "Watching both statutory and private provision: praising the positive, highlighting the wrong" },
        { label: "The case-level triggers", detail: "Second-opinion support in misdiagnosis (inappropriate care with tragic consequences, imprisonment, suicide, homicide); complaints procedures; legal representation at inquest hearings" },
        { label: "The systemic focus", detail: "Persuading ombudsmen and coroners to recommend local policy improvements: the failure pattern, not the individual, the target" },
        { label: "The system corrected", detail: "The risk-assessment change, the family-information policy: the corrections insiders may be too close to trigger, delivered back into the alliance" },
      ],
      clinicalManifestation: "The inquest that recommends the risk-assessment change no internal audit would have made: the critical friend protecting patients from inside the system's blind spots.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "nsf-founding", time: "1972", title: "The family fellowship", description: "The National Schizophrenia Fellowship founded by families concerned that relatives of people with schizophrenia had no support for themselves. The family-mutual-support root that grows into the national organisation with political leverage.", phase: "onset" },
    { id: "rethink-growth", time: "1972 to 2007", title: "From fellowship to Rethink", description: "The fellowship becomes Rethink, a membership charity of 7,500 members (service users, carers, professionals, the public) with the recovery-oriented mission (support everyone affected by severe mental illness to recover a better quality of life) and a front-line delivery arm of 350 services and approximately 1,300 staff (2007).", phase: "duration" },
    { id: "guidelines-2002", time: "2002", title: "The guidelines carry user preferences", description: "England's voluntary sector collectively ensures the schizophrenia clinical guidelines incorporate user-and-carer treatment preferences: the sector's evidence base entering the statutory guidance machinery.", phase: "peak" },
    { id: "wfsad-2003", time: "2003", title: "The East-African workshop", description: "The World Fellowship for Schizophrenia supports the workshop where users and families met government ministers and professionals to plan care delivery. The developing-world tier of the sector's international work.", phase: "peak" },
    { id: "alliance-years", time: "The reform years: eight years of opposition", title: "The Mental Health Alliance's campaign", description: "The coalition of 80 organisations (the Royal College of Psychiatrists prominent) opposes and amends the government's Mental Health Act reform proposals for eight years, achieving both legislative change and delay: the sector's collective political power demonstrated.", phase: "peak" },
    { id: "india-tier", time: "Now (the Indian tier)", title: "India's sector: from ACMI to the RPwD era", description: "ACMI's tax concessions and maintenance allowances (the chapter's own India citation); the family-founded schizophrenia-care societies, SCARF, the Richmond Fellowship Society and NAMI-India; the RPwD Act's passage driven by the sector's advocacy; the CSR-funding autonomy question arriving with the contracts.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the partnership as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "The chapter carries no survey of the sector's size (the honest epidemiology is structural, and the note's own numbers define the model organisation rather than the field: Rethink) 7,500 members (service users, carers, professionals, the public); 350 front-line services and approximately 1,300 staff (2007), delivered in partnership with the NHS and social services; and the Mental Health Alliance (80 organisations including the Royal College of Psychiatrists) as the coalition evidence of collective scale. The organisational range runs from large contracted service businesses to entirely-volunteer charities relying on donations to stay fiercely independent; the sector is explicitly not a cohesive group.",
    indianPrevalence: "India's landscape is large and under-recognised, unsurveyed by this lineage: the family-founded schizophrenia-care societies (the ARDSI-parallel tradition across Indian cities, day-care centres, family-support groups, residential facilities); the disability-rights organisations (the RPwD Act's passage driven by the sector's advocacy; the Amrit and Parivaar networks); the mental-health-specific NGOs (the Schizophrenias Care Foundation; SCARF's research-and-services tradition; NAMI-India; the Richmond Fellowship Society's residential services); the crisis and helpline tier (Tele-MANAS as the government backstop with the legacy iCall and Vandrevala traditions); and the self-help and consumer movement emerging.",
    lifetimeRisk: "Not applicable as a risk: the sector is a property of the service system, not a disorder with an incidence of its own; the question that matters clinically is whether the local referral map has been drawn.",
    indianNotes: "Costs (approx 2026): the voluntary services' fee-scales are sliding, donation-based or free against the private sector's; the state-funding dependence question arrives in India with CSR funding and government-NGO contracts: the chapter's autonomy warning applying directly to the Indian funding ecology.",
  },
  etiology: [
    { category: "social", factor: "The unmet-need gap", details: "The founding deficit: relatives of people with schizophrenia had no support for themselves (1972); families and users organising because the statutory system offered them nothing; the same gap recurring wherever the sector appears, in wealthy and developing systems alike." },
    { category: "psychological", factor: "The doing-things-differently motivation", details: "The prime motivation: improving the lives of people affected by mental-health problems by doing things differently; tirelessly pushing for change, never giving up hope; the values base and empowerment principles the statutory sector cannot replicate because it was never built on them." },
    { category: "social", factor: "The experience-rooted competence", details: "Rooted in service-user and carer experience: the lived-experience perspective clinicians and statutory providers lack; the bridging roles (non-judgemental service delivery connected to lived experience) exist because of this root, and the recovery mission is credible because of it." },
    { category: "environmental", factor: "The statutory service gap", details: "Housing, advocacy, employment programmes, carer support, peer education: the services the prescription cannot provide; the community-care transition problems and the needs they leave stranded generating the demand the sector answers." },
    { category: "social", factor: "The collective-voice demand", details: "Policy development from the evidence base of user and carer struggles; campaigns against stigma and discrimination; the legislative machinery (the Mental Health Act reform) requiring organised opposition: the sector as the vehicle for the voice the statutory system never gathered." },
  ],
  symptomClusters: [
    {
      category: "1. The referral map (what the sector delivers that the prescription cannot)",
      symptoms: ["Supported housing schemes and residential placements", "Advocacy projects for individuals and families whose needs are unmet", "Community resource centres and the day-care tier", "Carer support services and family-to-family networks", "Employment and training programmes, school education projects, young-people mentoring"],
    },
    {
      category: "2. The information and voice functions",
      symptoms: ["Information resources addressing the commonly encountered problems: access to services, funding for care, with the solutions-focused emphasis", "User-and-carer-view reports and surveys: the evidence base policy is built from", "Media activity publicising campaigns; internet dissemination: the cheaper channel", "Good-practice guidance and professional training offered to the statutory workforce"],
    },
    {
      category: "3. The campaign signals",
      symptoms: ["Stigma and discrimination campaigns (the like minds, like mine model, ten years of transforming public engagement)", "The four common themes: earlier intervention, better crisis response, more family support, less physical restraint", "Community-treatment-order controversies producing the voluntary-clinical alliances", "Peer-to-peer and family-to-family recovery networks. NAMI's nine-week experiential course; Canada's first-episode-psychosis network"],
    },
    {
      category: "4. The critical-friend signals (the monitoring psychiatry sees)",
      symptoms: ["Requests for expert second opinions where misdiagnosis has produced inappropriate care: the tragic consequences being imprisonment, suicide, homicide", "Complaints procedures supported or facilitated on behalf of users and families", "Legal representation at inquest hearings: care deficiencies, poor risk assessment and refused family information brought to light", "Inequality and race-equality critiques of legislation and services (the BME voluntary-organisations network; the National Council of La Raza parallel)"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The definition",
      code: "The seven key characteristics",
      criteria: [
        "An independent position: the essential characteristic, licensing the critical-friend function against statutory and private provision alike.",
        "A strong values base: the founding commitments carried through governance and service design.",
        "Empowerment principles: users and carers as the authority on their own lives.",
        "Non-profit distribution: surpluses return to the mission, never to shareholders.",
        "Passionate commitment to the work focus: tirelessly pushing for change, never giving up hope.",
        "Rooted in service-user and carer experience: the distinctive competence the statutory sector lacks.",
        "Always striving for better provision and opportunities: the change orientation that never settles.",
      ],
      duration: "Constant: the characteristics define membership of the sector; an organisation that loses them has left it.",
      indianNote: "Indian application: the family organisations founded on carer experience qualify immediately; the CSR-funded contractor tier needs the independence check applied before the label is trusted.",
    },
    {
      system: "The typology",
      code: "The four organisational types",
      criteria: [
        "Mental-health-specific organisations: mental illness is the remit (the Finnish Association for Mental Health).",
        "Social-problem organisations whose populations include the mentally ill: homeless, refugee, domestic-violence and young-offender charities meeting mental illness among their populations without it being their focus.",
        "Campaign-educate-advocate-lobby organisations with self-help promotion. EUFAMI, the European families' association; SANE Australia.",
        "The developing-world humanitarian response. Armenia: no mental-health services, CAFOD with the Association of Child Psychiatrists and Psychologists providing therapy and awareness to overcome prejudice.",
      ],
      duration: "An assessment of position, not time: large organisations occupy several types at once (Rethink: mental-health-specific, campaigner and front-line provider simultaneously).",
      indianNote: "India maps cleanly onto all four: the schizophrenia-care societies (mental-health-specific); the homeless and violence-response NGOs (social-problem); the disability-rights networks (campaign-advocate); and the developing-country humanitarian tier.",
    },
    {
      system: "The referral-map assessment",
      code: "The clinician's local audit",
      criteria: [
        "Housing and residential: supported housing schemes, residential facilities, the community resource centres.",
        "Day structure and employment: the day-care centre, the employment and training programmes.",
        "Carers: the family organisation, the carer support services, the family-support group.",
        "Voice and advocacy: the advocacy projects, the helpline card, the information resources.",
        "The critical-friend route: the second-opinion support, the complaints procedure, the inquest representation. How a family reaches them when the system fails.",
      ],
      duration: "One district audit, refreshed annually and after every service change: the map decays as funding moves.",
      indianNote: "The district psychiatrist's referral map as the note frames it: the local family organisation, the day-care centre, the carer group, the helpline card; the practical bridge, written into every plan.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The statutory sector", distinguishingFeatures: "Public, tax-funded, government-directed provision: the NHS and social services; the partner the voluntary sector contracts with rather than competes against.", keyDifferentiator: "Independence: the statutory sector answers to government; the voluntary sector's independent position is the essential characteristic that makes the critical-friend function possible at all." },
    { condition: "The private sector", distinguishingFeatures: "For-profit providers distributing surplus to owners and shareholders: the second of the three sectors the definition distinguishes itself from.", keyDifferentiator: "Non-profit distribution: the voluntary sector's surpluses return to the mission; the distinction is structural, not a judgement about quality." },
    { condition: "The social-problem organisation (typology tier 2)", distinguishingFeatures: "Homeless, refugee, domestic-violence and young-offender charities whose populations include the mentally ill without mental illness being their primary remit.", keyDifferentiator: "The primary focus: mental-health-specific organisations exist for mental illness; the social-problem organisations meet it among their populations, both belong to the sector, each with its own stakeholder group and remit." },
    { condition: "The state-dependent contractor (the fragile variant)", distinguishingFeatures: "A voluntary organisation whose funding is predominantly state contracts, delivering front-line services at scale while its autonomy quietly erodes.", keyDifferentiator: "The fragility test: the chapter's own warning: state-funding dependence threatening autonomy and independence; the organisation that cannot risk criticising its funder has left the critical-friend territory even while its service record stays excellent." },
  ],
  management: [
    { category: "service-design", name: "Know the referral map — the local organisation audit", description: "The clinician who knows the local organisations multiplies the treatment plan's reach: housing, advocacy, employment, carer support, peer education; the services the prescription cannot provide. The audit lists each service line with its organisation, and the map is refreshed as funding moves.", whenToUse: "Every care plan for severe mental illness, and every discharge, where the missing service line is the readmission.", indianContext: "The district referral map as the note frames it: the local family organisation, the day-care centre, the carer group, the helpline card; by name, in the plan, at every review." },
    { category: "service-design", name: "Join the organisations — the membership posture", description: "The chapter's own recommendation: psychiatrists should join the sector, as members, as campaigners, as educators. The professional-in-solidarity posture that transforms psychiatry's public image and attracts young people to the field; the organisation's training day as two-way education.", whenToUse: "Once, at the start of a posting, and continuously thereafter: the membership is the relationship the referral depends on.", indianContext: "The organisation-as-colleague posture: the joint family-education sessions, the shared campaigns; the district psychiatrist known to the family organisation by name is the one whose referrals arrive and hold." },
    { category: "psychotherapy", name: "Work the partnership tier — joint services and family education", description: "The front-line services are delivered in partnership with the NHS and social services: supported housing, advocacy projects, community resource centres, carer support, employment and training programmes, school education, mentoring (350 services, approximately 1,300 staff, 2007). The clinical team's counterparts inside these services are colleagues, and the joint family-education session is the partnership's clinical face.", whenToUse: "Wherever the plan needs a service line the clinic cannot staff, which is most plans for severe mental illness.", indianContext: "In India the partnership is the sector as the plan's community arm: the day-care centre delivering structure, the family organisation delivering carer support, the NGO residential facility where the family cannot continue." },
    { category: "psychotherapy", name: "Accept the critical friend: the second opinion, the complaint, the inquest", description: "The independence essential: the sector monitors both statutory and private provision, praising the positive and highlighting the wrong. The clinician's posture is cooperation: the second-opinion request treated as legitimate (misdiagnosis producing inappropriate care with tragic consequences (imprisonment, suicide, homicide) is what the function exists to prevent), the complaints procedure supported, the inquest representation engaged without defensiveness; the systemic corrections delivered back into the service.", whenToUse: "Whenever the sector's vigilance arrives at the door: a misdiagnosis query, a supported complaint, a bereaved family, an inequality critique.", indianContext: "Indian-style: the sector's vigilance functions (the Erwadi-type institutional scandals exposed, the human-rights reports, the legal-aid and PIL tradition) the alliance and the tension both live; the professional-body tradition engaging the organisations as the Mental Health Alliance engaged the legislature." },
    { category: "service-design", name: "Campaign together — the common themes", description: "The campaign agenda shared across wealth and development stages: earlier intervention, better crisis response, more family support, less physical restraint, with the community-care transition problems and the community-treatment-order controversies producing the alliances. The collective lesson: in alliance, the sector, clinicians and professionals lobby more effectively for better law and resources.", whenToUse: "The joint campaign joined wherever the clinical evidence and the sector's user evidence point the same way, which is the common case.", indianContext: "The Indian shared campaigns: the entitlement routes (the disability certificate, the maintenance allowances ACMI won), the anti-stigma work with the family organisations, the service-development lobbying the district tier needs." },
    { category: "service-design", name: "Protect the sector's independence — the fragility watch", description: "The chapter's warning held in view: the sector is fragile, state-funding dependence threatening autonomy and independence. The clinician who benefits from the sector's services also watches its funding base: the donation-funded charity and the contracted business behave differently when the failure is the funder's, and the critical-friend function dies quietly when it cannot risk its funder.", whenToUse: "At every partnership negotiation, and whenever a formerly outspoken organisation goes quiet.", indianContext: "The Indian funding ecology version: CSR funding and government-NGO contracts bringing the same autonomy risk the chapter names; the independence check part of the referral map, not an optional extra." },
  ],
  safety: {
    redFlags: [
      "The family carrying the whole illness alone: no carer organisation in the plan while the household exhausts itself; with 50-90% co-residence, the carer organisations are the de facto family-treatment infrastructure",
      "The discharge with nowhere to go: housing, day structure and employment absent from the plan because the sector's service lines were never mapped",
      "A misdiagnosis trajectory running unchallenged: inappropriate care with the tragic consequences (imprisonment, suicide, homicide) the second-opinion function exists to prevent",
      "A death in the service with the family unsupported at the inquest: legal representation is the sector's function, and its absence leaves the systemic failure uncorrected",
      "The 'voluntary' service that cannot criticise its funder: the state-funding dependence the chapter warns of, hollowing the critical-friend function from inside",
      "An Erwadi-type institution operating in the district with no clinical-sector response: the human-rights exposure the Indian vigilance tier exists to trigger",
    ],
    urgentGuidance:
      "The order of operations: (1) the carer crisis treated as clinical work; the exhaustion audited like any vital sign, the organisation referral made in the family's presence and followed up; (2) the discharge gaps closed before the discharge: the housing and day-structure service lines named to a named organisation; (3) the misdiagnosis query met with cooperation: the second opinion supported, never resisted, because the tragic-consequence trajectory is what both sides are preventing; (4) the bereaved family connected to the representation functions (complaints procedures, inquest support) immediately; (5) the institutional-harm picture (the Erwadi-type) escalated through the sector's human-rights and legal-aid tier alongside the clinical protection duty; (6) the fragile independence watched: the partnership that costs the organisation its voice is the partnership the whole system loses.",
  },
  drugLinks: [],
  contentGaps: [
    "No medication role: the note assigns no drug any place in the voluntary sector's functions; drugLinks is empty by design; the disorders met in this course's cases (schizophrenia, the bereavement aftermath) carry their own pharmacology in their own courses, never invented here.",
    "No neuroscience grounding: the note names no brain region and no neurotransmitter; the sector's engine is organisational and social in this lineage, so brainRegions and neurotransmitters are empty by design; the neuroscience of recovery and caregiving belongs to the courses that ground it.",
    "The social-problem organisational tier's populations (homelessness and mental health, domestic violence and mental health) have no KYP lessons of their own; the tier is taught here as typology and referral awareness.",
    "The peer-support and consumer-movement tier (NAMI's Peer-to-Peer Education Course, the users' organisations emerging in India) has no KYP lesson; the peer-network principle is taught here and inside the rehabilitation and group-therapy courses.",
    "The charity-funding and governance question (the CSR and government-contract autonomy risk) has no KYP lesson. The fragility watch is taught here as the clinical reading of the funding ecology.",
  ],
  patientGuide: {
    whatIsIt:
      "The voluntary sector is the tier of mental-health organisations that belongs neither to government nor to private business: charities and trusts founded by families, service users and supporters; independent, value-driven, and rooted in the experience of people who have lived with mental illness and cared for those who have. They run real services your doctor cannot prescribe: supported housing, day centres, carer support groups, employment programmes, helplines. They publish information families can actually read, campaign for better laws and against stigma, and they watch the care system and speak up when it fails: the critical friend.",
    whatCausesIt:
      "Not an illness: an answer to a gap. Families and patients found that the hospital treated the patient but nobody supported the relatives; the organisations were founded by the people the system left out, and they run on that lived experience, which is exactly why they understand things clinical services alone cannot supply.",
    symptoms:
      "Nothing clinical: the signs this course teaches are the life gaps the sector fills: a household exhausted by caregiving with no support group; a discharge with nowhere to go; a family without readable information; a person with no work, no day, no peers in recovery; and, when the system fails, a family facing a complaint or an inquest alone.",
    treatment:
      "The clinical move is the referral map: your treating team should know the local organisations and connect you. The family-support group and carer organisation, the day centre, the helpline number, the employment scheme, the advocacy service when needs go unmet. The sector's own programmes do the rest: mutual support, information, recovery-oriented services, peer education. And the chapter's own advice to clinicians is to join the organisations as members, campaigners and educators, because 'we do need each other' to deliver better outcomes for service users and families.",
    selfHelp: [
      "Ask the treating team directly about the local organisations: the family-support group, the day centre, the carer group, the helpline; the referral is a legitimate part of the treatment plan.",
      "Attend the family organisation's support group at least three times before deciding. The families who stay are the ones who went back.",
      "Use the helpline card (Tele-MANAS 14416) at the bad hours: the organisations exist partly because crises do not keep clinic timings.",
      "Pursue the entitlements: the disability certificate, the maintenance allowances and tax concessions the family organisations' own campaigns won; legal rights, not favours.",
      "Let the recovered members be seen: the peer contact and the family-to-family meetings are the strongest answer to hopelessness the sector offers.",
    ],
    whenToSeekHelp: [
      "The caregiving family exhausting itself (sleep, weight or mood failing in the carer) the carer organisation's support is a clinical need, not a luxury",
      "A discharge with housing or day structure unresolved: the sector's residential and day tiers exist for exactly this gap",
      "Suspected misdiagnosis or treatment going wrong: the organisations' second-opinion support route exists; asking for it is legitimate",
      "A death or serious incident in the service: the family is entitled to the complaints procedure and to representation at the inquest; the sector provides both",
      "A young person in the family asking about the illness: the school education projects and mentoring programmes answer the questions the clinic rarely has time for",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24x7, free, multiple Indian languages): the national helpline backstop",
      "The district family organisation: the schizophrenia-care society or family-support group (SCARF, the Richmond Fellowship Society and the ARDSI-parallel societies run city branches and day-care centres)",
      "The district hospital psychiatry OPD under the DMHP: the treating team's joint family-education session and referral map",
      "The RPwD Act disability certificate and entitlements: the maintenance-allowance and tax-concession route the sector's own campaigns (ACMI's precedent) won",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs the voluntary-sector interface; the practice apparatus is the partnership discipline itself: the district referral map (the local family organisation, the day-care centre, the carer group, the helpline card); under the RPwD Act's entitlements framework that the sector's own advocacy produced: ACMI's tax concessions and maintenance allowances, with the RPwD and the IRDAI parity rulings as the movement's later wins.",
    systemContext: "The Indian district meets the sector as the system's spine rather than its appendage: with the 50-90% co-residence family-burden epidemiology, the carer organisations are the de facto family-treatment infrastructure. The respite, the counselling and the mutual support the state system has never provided. The family-founded schizophrenia-care societies, SCARF, the Richmond Fellowship Society, NAMI-India and the disability-rights networks deliver what the state cannot; the clinician's referral relationship with them is the practical bridge.",
    programmeContext: "The tiers mapped: the family-founded schizophrenia-care societies (the ARDSI-parallel tradition across Indian cities, day-care centres, family-support groups, residential facilities); the disability-rights organisations (the RPwD Act's passage driven by the sector's advocacy; the Amrit and Parivaar networks); the mental-health-specific NGOs (the Schizophrenias Care Foundation; SCARF's research-and-services tradition; NAMI-India; the Richmond Fellowship Society's residential services); the crisis and helpline tier (Tele-MANAS as the government backstop with the legacy iCall and Vandrevala traditions); and the self-help and consumer movement emerging. The chapter's typology maps onto all of them.",
    costConsiderations: "Approx 2026: the voluntary tier runs on sliding, donation-based and free fee-scales against the private sector's; the state-funding dependence question arrives with CSR funding and government-NGO contracts: the autonomy risk the chapter warns of, applying directly to the Indian funding ecology.",
    culturalConsiderations: "The Indian family organisation is the system's spine: the 50-90% co-residence figure makes the carer organisations the de facto family-treatment infrastructure, and the carer-support gap they fill is the clinical variable to audit. The critical friend Indian-style: the sector's vigilance functions (the Erwadi-type institutional scandals exposed, the human-rights reports, the legal-aid and PIL tradition) the alliance and the tension both live; the professional-body tradition engaging the organisations as the Mental Health Alliance engaged the legislature.",
    patientCounselling: [
      "The referral script: 'There is an organisation in this district run by families like yours. I want you to meet them; the day centre and the support group are part of the treatment, not a substitute for it.'",
      "The carer script: 'Your exhaustion is not a character flaw. It is the predictable burden of the arrangement most Indian families carry; the carer group is where the others who carry it will meet you.'",
      "The entitlement script: 'The maintenance allowance and the tax concessions exist because families organised and won them. That campaign is why the certificate in your hand is worth money; let us complete it.'",
      "The helpline script: 'Keep this card. Tele-MANAS 14416, any hour, any language; the organisations exist so that the 2 a.m. crisis has somewhere to call.'",
      "The critical-friend script: 'If we ever fail you (a wrong diagnosis, a refusal to answer you, a death) the organisation will help you ask; that is their job, and I would rather they asked than that it stayed silent.'",
      "The membership script: 'I have joined the family organisation myself, as a member and an educator for their training days; the chapter's own advice, and the best CPD the district offers.'",
    ],
  },
  decisionPath: {
    title: "Connecting the patient and the family to the voluntary sector",
    nodes: [
      {
        id: "start",
        question: "A patient with severe mental illness (and a family) sits in the district clinic. What does the plan's voluntary-sector audit show?",
        branches: [
          { label: "The family carries it alone: no organisation contact", next: "family-gate" },
          { label: "Life domains missing: housing, work, day structure", next: "services-gate" },
          { label: "The system has failed them: misdiagnosis, a complaint, a death", next: "critical-friend-gate" },
          { label: "The clinician asks what they themselves should do for the sector", next: "membership-path" },
        ],
      },
      {
        id: "family-gate",
        question: "The family alone, which need leads?",
        branches: [
          { label: "Carers exhausted; the illness runs the household", next: "carer-path" },
          { label: "Information, peer contact, someone who has been there", next: "family-org-path" },
        ],
      },
      {
        id: "carer-path",
        question: "The caregiver's collapse: the household's load-bearing wall.",
        recommendation: "The carer organisation referral made by name: the family-support group and the respite, counselling and mutual support the state system has never provided; the 50-90% co-residence reality making the carer organisations the de facto family-treatment infrastructure; the caregiver's own health followed as a clinical variable, and the joint family-education session booked so the whole household hears the same facts.",
      },
      {
        id: "family-org-path",
        question: "The information and peer-contact need.",
        recommendation: "The local organisation connected: the family-founded schizophrenia-care society or family-support group; the helpline card (Tele-MANAS 14416 and the legacy iCall and Vandrevala traditions); the user-and-carer-view information resources; and the peer contact no clinical consultation supplies, with the recovery orientation (never giving up hope) the organisations carry by constitution.",
      },
      {
        id: "services-gate",
        question: "The missing life domains, which one leads?",
        branches: [
          { label: "Housing and day structure", next: "housing-path" },
          { label: "Work, skills, education", next: "employment-path" },
        ],
      },
      {
        id: "housing-path",
        question: "Housing and the day.",
        recommendation: "The sector's residential and day tiers mapped: the supported housing schemes and residential facilities (in India, the family home first per the co-residence norm, the day-care centre as the reachable hub, the NGO residential facility where the family cannot continue); the community resource centres; the school education projects and young-people mentoring for the early-course family: the services delivered in partnership with the statutory tier, 350 of them at the model organisation (2007).",
      },
      {
        id: "employment-path",
        question: "Work and skills.",
        recommendation: "The employment and training programmes referred (the front-line tier of the activity inventory) with the recovery orientation honoured: the person's own goals, the peer-to-peer education model (NAMI's nine-week experiential course), the family-to-family networks for the first-episode family; the voluntary organisation worked with as colleague, not contractor.",
      },
      {
        id: "critical-friend-gate",
        question: "The system has failed: what happened?",
        branches: [
          { label: "Misdiagnosis suspected; care inappropriate or harmful", next: "second-opinion-path" },
          { label: "A death; the inquest ahead", next: "inquest-path" },
          { label: "Institutional harm exposed: the Erwadi-type picture", next: "rights-path" },
        ],
      },
      {
        id: "second-opinion-path",
        question: "The second-opinion request.",
        recommendation: "The critical friend engaged, not resented: the organisation's second-opinion support arranged with the treating team's cooperation; misdiagnosis producing inappropriate care with tragic consequences (imprisonment, suicide, homicide) being exactly what the function exists to prevent; the family supported through the complaints procedure where one is needed; the alliance kept, because the same organisation will deliver the family-education sessions next year.",
      },
      {
        id: "inquest-path",
        question: "The inquest.",
        recommendation: "The legal representation the sector provides: the organisation supporting the family at the inquest hearing; the care deficiencies, the poor risk assessment, the refusal of family information brought to light; the systemic focus honoured: ombudsmen and coroners persuaded to recommend local policy improvements, the correction no internal audit would have made; the clinical team's posture: cooperation, not defence; 'we do need each other'.",
      },
      {
        id: "rights-path",
        question: "The institutional harm: the Indian critical-friend tier.",
        recommendation: "The Indian-style critical friend joined: the human-rights reports, the legal-aid and PIL tradition, the organisation's exposure of the Erwadi-type institution; the clinician's professional-body tradition engaging the organisations as the Mental Health Alliance engaged the legislature; the protection duty and the alliance both live at once.",
      },
      {
        id: "membership-path",
        question: "The clinician's own move.",
        recommendation: "The chapter's own answer: join, as a member, as a campaigner, as an educator; the sector reciprocates by transforming psychiatry's public image and attracting young people to the field; the mutual dependency stated plainly ('we do need each other in order to deliver better outcomes for mental health service users and their families') and the fragility watched: state-funding dependence threatening the autonomy the whole relationship runs on.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Prescribing without the referral map",
      why: "The plan lists medication and follow-up while housing, day structure, employment, carer support and peer contact (the services the prescription cannot provide) remain unaddressed; the family exhausts itself carrying what the sector would have shared.",
      correction: "The district audit: the local organisations named by service line (housing, advocacy, employment, carers, helpline) in every care plan; the referral made in the family's presence and followed up.",
    },
    {
      mistake: "Treating the sector as either a lobby or a charity tier, never a service provider",
      why: "The organisation that campaigns against stigma on Monday runs 350 supported housing schemes on Tuesday (the model organisation's own inventory); misreading it as pure advocacy wastes the delivery arm, and misreading it as pure services wastes the influence.",
      correction: "The activity inventory recited in full: mutual support, information, advocacy, policy development, campaigns, research, guidance and training, media and internet dissemination AND front-line services; each organisation choosing its own mix.",
    },
    {
      mistake: "Resenting the critical friend",
      why: "The second-opinion request, the supported complaint and the inquest representation read as attacks; the defensiveness destroys the alliance and discards the systemic corrections (the risk-assessment changes, the family-information policies) that insiders rarely trigger.",
      correction: "The critical-friend reading: independence monitoring both statutory and private provision (praising the positive, highlighting the wrong) and the cooperation that converts monitoring into change.",
    },
    {
      mistake: "Assuming independence from the label rather than the funding",
      why: "The state-contracted provider may deliver excellent services while its autonomy has quietly eroded: the chapter's fragility warning: state-funding dependence threatening the independence the whole function runs on.",
      correction: "The funding question asked before the partnership: who funds this organisation, and can it still criticise its funder? The donation-funded charity and the contracted business behave differently when the failure is the funder's.",
    },
    {
      mistake: "Referring the family cold",
      why: "A name and a phone number on a discharge summary is not a referral: the family arrives at the organisation's door uncertain and often does not return; the bridging function (the non-judgemental, lived-experience connection) wasted.",
      correction: "The organisation-as-colleague posture: the telephone call made in the family's presence, the joint family-education session booked, the shared campaigns joined; the relationship built between clinicians, never delegated to a letter.",
    },
    {
      mistake: "In India, ignoring the family organisations as the system's spine",
      why: "With 50-90% of patients co-resident with relatives, the carer organisations ARE the family-treatment infrastructure: the respite, counselling and mutual support the state has never provided; the plan that omits them leaves the treatment's load-bearing wall unsupported.",
      correction: "The Indian referral map: the local family organisation (the schizophrenia-care society), the day-care centre, the carer group, the helpline card; by name, in the plan, at every review.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define the mental-health voluntary sector and list its seven key characteristics, with independence as the essential one and user-and-carer rootedness as the distinctive competence.",
        "The four-part typology with one example each: mental-health-specific (the Finnish Association for Mental Health); social-problem (the homeless, refugee, domestic-violence and young-offender charities); campaign-educate-advocate (EUFAMI, SANE Australia); developing-world humanitarian (Armenia. CAFOD with the Association of Child Psychiatrists and Psychologists).",
        "The Rethink model: the 1972 origin, the 7,500 members, the recovery-oriented mission, and the two role descriptions; bridging, and ensuring service users are heard with needs met more holistically.",
        "The activity inventory: the ten functions from mutual support through front-line services, with the 350 services and approximately 1,300 staff (2007).",
        "The critical-friend function with the Rethink examples, and the chapter's conclusion on the psychiatrist's membership.",
      ],
      practical: [
        "Draw the local voluntary-sector referral map for a discharged patient with schizophrenia: housing, day structure, employment, carer support and the helpline, naming at least one organisation per service line.",
        "Counsel a family on joining the carer organisation: demonstrate the referral conversation and the joint family-education session booking.",
      ],
      longAnswer: [
        "The voluntary sector in mental health: definition, characteristics, typology, functions and the psychiatrist's role; the evergreen essay.",
        "The voluntary sector as critical friend: the monitoring functions, the campaign evidence, and the mutual dependency between the sector and psychiatry.",
      ],
    },
    neetPg: {
      highYield: [
        "THE SEVEN CHARACTERISTICS: an independent position; a strong values base; empowerment principles; non-profit distribution; passionate commitment; rooted in service-user and carer experience; always striving for change.",
        "THE TYPOLOGY FOUR: mental-health-specific; social-problem (homeless, refugee, domestic-violence, young-offender charities); campaign-educate-advocate-lobby with self-help promotion (EUFAMI, SANE); developing-world humanitarian (Armenia: no mental-health services, CAFOD with the child-psychiatry association providing therapy and fighting prejudice).",
        "RETHINK: the National Schizophrenia Fellowship founded 1972 by families concerned that relatives of people with schizophrenia had no support for themselves; 7,500 members; the recovery mission (support everyone affected by severe mental illness to recover a better quality of life); 350 services and approximately 1,300 staff (2007).",
        "THE ROLE PAIR: bridging (linking the person with non-judgemental service delivery connected with user and carer experience); ensuring service users are heard and needs met more holistically.",
        "THE ACTIVITY INVENTORY: mutual support; information resources (access to services, funding for care); advocacy; policy development; campaigns; research and surveys; guidance and professional training; media activity and internet dissemination; front-line services (supported housing, advocacy projects, community resource centres, carer support, employment and training, school education, mentoring).",
        "THE FOUR DIFFERENCE-EXAMPLES: New Zealand's like minds, like mine (ten years, the Mental Health Foundation partnering the Ministry of Health); WFSAD's 2003 East-African workshop; England's 2002 schizophrenia guidelines carrying user-and-carer treatment preferences; India's ACMI.",
        "ACMI: Action for Mental Illness achieved tax concessions for the mentally ill and their carers, and maintenance allowances equivalent to physical disabilities; the Indian statutory-entitlement precedent.",
        "THE FOUR COMMON CAMPAIGN THEMES: earlier intervention, better crisis response, more family support, less physical restraint; shared across wealth and development stages.",
        "THE CRITICAL FRIEND: independence essential; praising the positive, highlighting the wrong; the examples: second-opinion support in misdiagnosis (the tragic consequences being imprisonment, suicide, homicide), complaints procedures, legal representation at inquests, the systemic focus (persuading ombudsmen and coroners).",
        "THE MENTAL HEALTH ALLIANCE: 80 organisations including the Royal College of Psychiatrists; eight years opposing and amending the Mental Health Act reform, both legislative change and delay achieved.",
        "THE CONCLUSION: the sector fragile (state-funding dependence threatening autonomy); psychiatrists joining as members, campaigners and educators; the sector transforming psychiatry's public image and attracting the workforce: 'we do need each other'.",
      ],
      pyqConcepts: [
        "The seven characteristics: the recurring list question (independence the essential; experience-rootedness the distinctive).",
        "The Rethink origin story: the who-founded-what item (1972, the families, the National Schizophrenia Fellowship).",
        "The Mental Health Alliance's numbers and achievement: the legislative-influence item (80 organisations, eight years, change plus delay).",
        "ACMI: the India-specific item (tax concessions, maintenance allowances at physical-disability equivalence).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 24-year-old man with schizophrenia, second relapse, lives with his parents in a district town; the mother's sleep is gone, the savings are spent, no support-group contact, and the team's plan lists medication and follow-up only: the audit that follows; the carer organisation named and telephoned in the family's presence, the mother's health followed as a clinical variable (the 50-90% co-residence reality making the carer organisations the de facto family-treatment infrastructure), the day-care centre and employment scheme linked, the helpline card left, the joint family-education session booked, the entitlement route (the disability certificate, the maintenance-allowance precedent the ACMI campaigns won) explained; the teaching: the sector holds the services the prescription cannot provide, and the clinician who knows the local organisations multiplies the treatment plan's reach.",
        "A bereaved family arrives after a discharge-related suicide: their information requests had been declined; the organisation that once ran their carer group now supports the complaint and represents them at the inquest, and the coroner's recommendation rewrites the trust's family-information and risk-assessment policy; the treating consultant cooperates and later co-delivers the family-education sessions with the same branch: the teaching: the critical-friend functions (second opinions, complaints, inquests, the systemic focus) correct failures insiders may be too close to trigger, and the mutual dependency ('we do need each other') is a working relationship, not a sentimental one.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "1972: the National Schizophrenia Fellowship founded by families; later Rethink.",
        "The seven characteristics: independence, values base, empowerment, non-profit distribution, passionate commitment, user-and-carer rootedness, striving for change.",
        "The Mental Health Alliance: 80 organisations, eight years of opposition, legislative change and delay.",
        "ACMI (India): tax concessions and maintenance allowances equivalent to physical disabilities.",
        "The critical friend: praising the positive, highlighting the wrong; independence the essential characteristic.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The referral map is the district psychiatrist's multiplier: housing, advocacy, employment, carer support, peer education; the services the prescription cannot write; the clinician who knows the local organisations by name doubles the plan's reach.",
        "Accept the critical friend as a safety system: the second-opinion request, the supported complaint and the inquest representation correct failures internal audit rarely triggers; the consultant who cooperates converts monitoring into change, and the organisation that criticised your service will deliver its family education next year.",
        "Read the funding before trusting the label 'voluntary': the state-contracted provider delivering excellent services may have lost the independence the critical-friend function requires; the chapter's own fragility warning (state-funding dependence threatening autonomy), arriving in India with CSR money and NGO contracts.",
        "Join in all three registers the chapter names (member, campaigner, educator) the membership posture that transforms psychiatry's public image and recruits the future workforce; the organisation's training day is the best CPD the district offers.",
        "In India the family organisations are the system's spine: the 50-90% co-residence epidemiology makes the carer organisations the de facto family-treatment infrastructure. The referral relationship with them is the practical bridge, and their vigilance (the Erwadi exposures, the human-rights reports, the PIL tradition) is the system's conscience.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The family who found the fellowship",
      presentation: "Two years of relapses, a household running on emergency, and a father who found (three towns away) the room where the other families sat.",
      initialPresentation: "A 52-year-old clerk and his wife brought their 24-year-old son to the district psychiatric OPD after his second relapse in two years: schizophrenia, first episode at 22, two admissions; the mother's sleep gone, the household's savings spent on the crises, and the father's opening words to the consultant: 'We have no one else to talk to about this.'",
      history: "The son's illness had consumed the family's world: the elder daughter's marriage deferred, the father's leave exhausted, the mother supervising medication and watching for the relapse signature nightly. No carer support, no family organisation contact, no information source beyond the prescription counter; the OPD's three-minute reviews the family's only professional contact. The treating team knew none of this: nobody had asked.",
      examination: "The son: partial remission, mild negative symptoms, insight present but fragile. The mother: exhausted, tearful in the corridor, her own sleep and weight loss unasked about. The father: composed and organised; the family's coordinator and its most under-used resource.",
      diagnosis: "Schizophrenia in partial remission on a substrate of unaddressed family burden: no disorder in the carers, but a household at the edge of its endurance with no voluntary-sector contact in the record.",
      management: "The referral map drawn at last: the local family organisation (the schizophrenia-care society with its family-support group and day-care centre) named to the family and telephoned in their presence; the carer organisation's respite and counselling for the mother, her sleep and weight followed as clinical variables; the joint family-education session booked through the organisation's trained carers; the helpline card (Tele-MANAS 14416) left with the father; the son linked to the day-care centre's structured programme and, later, the employment scheme; the entitlement route explained: the disability certificate, the maintenance-allowance precedent the ACMI campaigns won, the tax concessions for the family.",
      outcome: "Six months on: the mother attending the support group fortnightly ('the room where the other families sit') her sleep recovered; the son at the day centre four days a week and talking of the employment scheme; the father the family organisation's newest volunteer, coordinating two other families' first visits; one relapse in the period, managed at home with the crisis plan the group had helped write.",
      teachingPoints: [
        "The 1972 founding story replayed in an Indian district: families who found no support for themselves; the sector's origin and its continuing clinical function in one consultation.",
        "The carer-support gap as the clinical variable: the 50-90% co-residence epidemiology makes the carer organisations the de facto family-treatment infrastructure; the caregiver's health audited like the patient's.",
        "The referral-map discipline: the organisation named, telephoned in the family's presence, and followed up; the difference between a referral and a mention.",
        "The mutual dependency beginning exactly as the chapter describes: the father's volunteering is the sector's recruitment arm and psychiatry's public-image transformation at work.",
      ],
    },
    {
      title: "The inquest and the partnership",
      presentation: "A death in the service, a family alone before the coroner, and twelve months later, the same organisation running the team's family-education sessions.",
      initialPresentation: "A 31-year-old man with schizophrenia under an English community mental health team died by suicide four weeks after discharge, his family's repeated requests for information about his risk status having been declined; the parents, in their sixties, arrived at the voluntary organisation's office with the discharge summary and a question: 'Who will speak for him at the inquest?'",
      history: "Two admissions in three years; the index discharge followed a brief stay with a risk assessment the family later described as a form they were never shown; the parents had asked twice about leave and relapse risk and been told confidentiality applied. The organisation's local branch had supported the family since the first admission (the carer group, the information sheets) and now the second-opinion and complaints functions were about to be needed.",
      examination: "The organisation's worker documented the sequence: the poor risk assessment, the refused family information, the discharge into an unsupported flat; the family's exhaustion and their wish, not for blame, but for the inquest to establish what had failed and for it not to fail the next family.",
      diagnosis: "Not a clinical diagnosis but the critical-friend scenario: a service failure (risk assessment and family communication) with a bereaved family needing representation; the sector's monitoring function engaged.",
      management: "The organisation's functions deployed in sequence: the complaints procedure supported first (the internal review acknowledging the family-information failures); legal representation arranged at the inquest: the family's questions asked by counsel, the care deficiencies and the poor risk assessment established in evidence; the systemic focus honoured: the organisation's policy team persuading the coroner to recommend the trust's risk-assessment and family-communication changes, with the ombudsman engaged for the wider practice; the treating consultant cooperating throughout and accepting, at the inquest's close, the invitation to co-write the revised family-information protocol.",
      outcome: "The coroner's recommendation adopted trust-wide: the family-information policy rewritten, the risk-assessment template revised; the family (supported, represented and heard) later joined the organisation's carer council; the same branch, twelve months on, delivering the family-education sessions for the team's new referrals and running the employment programme alongside. The consultant's reflection at the joint training day: the sector had done what no internal audit would have, and the service was better for it.",
      teachingPoints: [
        "The critical-friend functions in sequence: the complaint supported, the inquest representation, the systemic focus (ombudsmen and coroners persuaded to recommend local policy improvements); the chapter's exact list.",
        "The tragic-consequences context the note names (misdiagnosis and service failure producing imprisonment, suicide, homicide) is why the vigilance functions exist.",
        "The mutual dependency demonstrated, not asserted: the organisation improves the service it criticises, then partners with it, and the clinician's cooperation is what converts monitoring into change.",
        "The independence that makes it possible: the organisation could represent the family against the trust because it does not depend on the trust's favour; the fragility warning's positive face.",
      ],
    },
  ],
  clinicalPearls: [
    "The seven key characteristics: an independent position, a strong values base, empowerment principles, non-profit distribution, passionate commitment, rootedness in service-user and carer experience, and always striving for change; independence the essential, experience-rootedness the distinctive.",
    "1972: the National Schizophrenia Fellowship founded by families concerned that relatives of people with schizophrenia had no support for themselves. The mutual-support root that grew into Rethink, a 7,500-member charity with political leverage.",
    "Rethink's delivery arm: 350 services and approximately 1,300 staff (2007); supported housing, advocacy projects, community resource centres, carer support, employment and training, school education, mentoring, all in partnership with the NHS and social services.",
    "The role pair: bridging; linking the person with non-judgemental service delivery connected with lived experience; and ensuring service users are heard and needs met more holistically.",
    "The four common campaign themes across wealth and development stages: earlier intervention, better crisis response, more family support, less physical restraint.",
    "The Mental Health Alliance: 80 organisations including the Royal College of Psychiatrists, opposing and amending the Mental Health Act reform for eight years; legislative change and delay both achieved.",
    "ACMI (India): tax concessions for the mentally ill and their carers, and maintenance allowances equivalent to physical disabilities; the statutory-entitlement victory the chapter itself cites.",
    "The critical friend in one line: praising the positive, highlighting the wrong; independence the essential characteristic, monitoring both statutory and private sectors.",
    "The inquest function: legal representation for families, drawing attention to care deficiencies, poor risk assessment and refused family information, with ombudsmen and coroners persuaded to recommend local policy improvements.",
    "The fragility: state-funding dependence threatens the sector's autonomy and independence; the funding question is part of reading any 'voluntary' service.",
    "The chapter's last word: 'we do need each other in order to deliver better outcomes for mental health service users and their families'; psychiatrists joining as members, campaigners and educators.",
    "The Indian spine: 50-90% co-residence makes the carer organisations the de facto family-treatment infrastructure. The respite, counselling and mutual support the state system has never provided.",
  ],
  highYieldSummary: [
    "Definition and character: the voluntary (third) sector; the tier between the statutory and the private, originally volunteer-run, motivated by improving the lives of people affected by mental-health problems by DOING THINGS DIFFERENTLY: tirelessly pushing for change, never giving up hope, working alongside service users (patients, consumers) and families. The seven key characteristics: an INDEPENDENT POSITION; a STRONG VALUES BASE; EMPOWERMENT PRINCIPLES; NON-PROFIT DISTRIBUTION; PASSIONATE COMMITMENT to the work focus; ROOTEDNESS IN SERVICE-USER AND CARER EXPERIENCE; and ALWAYS STRIVING FOR BETTER PROVISION AND OPPORTUNITIES. Not a cohesive group: from large contracted service businesses to entirely-volunteer charities relying on donations to stay fiercely independent; each with its own remit, stakeholder group, trustee and membership structures, governance and activities portfolio.",
    "The typology: (1) MENTAL-HEALTH-SPECIFIC organisations (the Finnish Association for Mental Health); (2) SOCIAL-PROBLEM organisations whose populations include the mentally ill: the homeless, refugee, domestic-violence and young-offender charities; (3) the CAMPAIGN-EDUCATE-ADVOCATE-LOBBY organisations with self-help promotion (EUFAMI, the European families' association; SANE Australia); (4) the DEVELOPING-WORLD humanitarian response. Armenia: no mental-health services, CAFOD with the Association of Child Psychiatrists and Psychologists providing therapy and awareness to overcome prejudice.",
    "The Rethink model: the National Schizophrenia Fellowship founded 1972 by families concerned that relatives of people with schizophrenia had no support for themselves. The family-mutual-support root growing into the national organisation with political leverage; a membership charity of 7,500 members (service users, carers, professionals, the public) with the mission to support everyone affected by severe mental illness to recover a better quality of life. The RECOVERY ORIENTATION significant precisely because the staff bring the lived-experience perspective clinicians and statutory providers lack. The two role descriptions: BRIDGING (linking the person with non-judgemental service delivery connected with user and carer experience) and ENSURING SERVICE USERS ARE HEARD AND NEEDS MET MORE HOLISTICALLY. The activity inventory: mutual support (the original function); information resources (access to services, funding for care); advocacy; policy development from the user-and-carer evidence base; campaigns on stigma and discrimination; research and surveys; good-practice guidance and professional training; media activity and internet dissemination; and the front-line services in partnership with the NHS and social services: 350 services and approximately 1,300 staff (2007): supported housing, advocacy projects, community resource centres, carer support, employment and training programmes, school education, young-people mentoring.",
    "The evidence of difference: New Zealand's Mental Health Foundation partnering the Ministry of Health in the LIKE MINDS, LIKE MINE anti-discrimination campaign; ten years of transforming public engagement; the World Fellowship for Schizophrenia (WFSAD) supporting the 2003 EAST-AFRICAN WORKSHOP where users and families met government ministers and professionals to plan care delivery; England's voluntary sector collectively ensuring the 2002 SCHIZOPHRENIA CLINICAL GUIDELINES incorporated user-and-carer treatment preferences; India's ACTION FOR MENTAL ILLNESS (ACMI) achieving tax concessions for the mentally ill and their carers and maintenance allowances equivalent to physical disabilities; NAMI's PEER-TO-PEER EDUCATION COURSE (the nine-week experiential recovery course); Canada's family-to-family first-episode-psychosis network; and the RECOVERY MODEL pioneered and embraced across the sector (the Scottish Recovery Network, with the attitude-change requirement honestly noted).",
    "The campaign agenda: the common themes across wealth and development stages (EARLIER INTERVENTION, BETTER CRISIS RESPONSE, MORE FAMILY SUPPORT, LESS PHYSICAL RESTRAINT) with the community-care transition problems and the community-treatment-order controversies producing the voluntary-clinical alliances; the collective lesson: in alliance, the sector, clinicians and professionals lobby more effectively for better law and resources.",
    "The critical friend and the legislative power: INDEPENDENCE as the essential characteristic, occupying the territory of monitored criticism toward both statutory and private sectors. PRAISING THE POSITIVE, HIGHLIGHTING THE WRONG. The Rethink examples: misdiagnosis support (the expert second opinions, misdiagnosis producing inappropriate care with tragic consequences: imprisonment, suicide, homicide); the complaints procedures; LEGAL REPRESENTATION AT INQUEST HEARINGS (drawing attention to care deficiencies, the poor risk assessment, the refusal of family information); the systemic focus (persuading ombudsmen and coroners to recommend local policy improvements); the BME voluntary-organisations network's inequality and race-equality critique; the US parallel (the National Council of La Raza, the Hispanic depression-and-access disparities). The MENTAL HEALTH ALLIANCE: 80 organisations (the Royal College of Psychiatrists prominent) opposing the government's Mental Health Act reform proposals for eight years, achieving both legislative change and delay: the sector's collective political power demonstrated.",
    "The fragility, the mutual dependency, the Indian layer: the sector is dynamic, vital and user-rooted, and FRAGILE: state-funding dependence threatening autonomy and independence. The psychiatrist's supports: JOINING the organisations as members, campaigners and educators; the sector's reciprocation: transforming psychiatry's public image and attracting young people to the field; 'we do need each other in order to deliver better outcomes for mental health service users and their families.' India: the family-founded schizophrenia-care societies (the ARDSI-parallel tradition, day-care centres, family-support groups, residential facilities); the disability-rights organisations (the RPwD Act's passage driven by the sector's advocacy; the Amrit and Parivaar networks); the mental-health NGOs (the Schizophrenias Care Foundation, SCARF, NAMI-India, the Richmond Fellowship Society); the helpline tier (Tele-MANAS with the iCall and Vandrevala traditions); the emerging consumer movement; the 50-90% co-residence epidemiology making the carer organisations the de facto family-treatment infrastructure; the CSR-funding autonomy question; and the critical friend Indian-style: the Erwadi-type scandals exposed, the human-rights reports, the legal-aid and PIL tradition.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "vs-quiz-1",
      question: "The defining characteristics of the mental-health voluntary sector are:",
      options: ["Profit distribution to shareholders and government control", "An independent position, a strong values base, empowerment principles, non-profit distribution, passionate commitment, and rootedness in service-user and carer experience", "Exclusion of professionals and families from membership", "Statutory authority under the Ministry of Health"],
      correctIndex: 1,
      explanation: "The chapter's seven-item list — with independence as the essential characteristic and experience-rootedness as the distinctive competence.",
      afterSectionId: "mechanism",
    },
    {
      id: "vs-quiz-2",
      question: "Which of the following is NOT part of the voluntary sector's activity inventory as the chapter lists it?",
      options: ["Mutual support and information resources", "Advocacy and policy development from the user-and-carer evidence base", "Compulsory detention and treatment under the Mental Health Act", "Front-line services such as supported housing and carer support"],
      correctIndex: 2,
      explanation: "The inventory runs from mutual support through front-line services delivered in partnership with the statutory tier — compulsion belongs to the statutory sector alone.",
      afterSectionId: "symptoms",
    },
    {
      id: "vs-quiz-3",
      question: "In a country with no mental-health services, CAFOD works with the Association of Child Psychiatrists and Psychologists to provide therapy and fight prejudice. In the chapter's typology this is:",
      options: ["A mental-health-specific organisation", "A social-problem organisation", "A campaign-educate-advocate organisation", "The developing-world humanitarian response"],
      correctIndex: 3,
      explanation: "The fourth typology tier — the Armenia example: the developing-country humanitarian response to the absence of services.",
      afterSectionId: "diagnosis",
    },
    {
      id: "vs-quiz-4",
      question: "A large 'voluntary' provider delivers excellent front-line services but is funded almost entirely by government contracts and has stopped criticising the local health authority. The chapter's term for the underlying problem:",
      options: ["Typology drift", "State-funding dependence threatening autonomy and independence — the sector's fragility", "A private-sector takeover", "A governance scandal"],
      correctIndex: 1,
      explanation: "The chapter's own warning: the sector is fragile because state-funding dependence threatens the very autonomy the critical-friend function — and the sector's identity — run on.",
      afterSectionId: "differential",
    },
    {
      id: "vs-quiz-5",
      question: "The chapter's own answer to what psychiatrists should do for the voluntary sector is:",
      options: ["Donate money and remain at arm's length", "Join the organisations as members, campaigners and educators", "Wait for referral requests only", "Regulate them professionally"],
      correctIndex: 1,
      explanation: "The mutual dependency: psychiatrists joining in all three registers, the sector transforming psychiatry's public image and attracting the workforce — 'we do need each other'.",
      afterSectionId: "management",
    },
    {
      id: "vs-quiz-6",
      question: "The chapter's own Indian example of voluntary-sector achievement is:",
      options: ["Building the first asylum", "Action for Mental Illness (ACMI) achieving tax concessions and maintenance allowances equivalent to physical-disability provisions", "Writing the Mental Health Act", "Running the medical colleges"],
      correctIndex: 1,
      explanation: "ACMI's statutory-entitlement victory — the advocacy model the sector replicates; the RPwD Act's entitlements and the IRDAI parity rulings stand as the movement's later wins.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the seven key characteristics of the voluntary sector, and say which is the essential one and which the distinctive competence.", answer: "THE SEVEN: (1) an INDEPENDENT POSITION; the essential characteristic, licensing the critical-friend function against statutory and private provision alike; (2) a STRONG VALUES BASE; (3) EMPOWERMENT PRINCIPLES: users and carers as the authority on their own lives; (4) NON-PROFIT DISTRIBUTION: surpluses return to the mission; (5) PASSIONATE COMMITMENT to the work focus: tirelessly pushing for change, never giving up hope; (6) ROOTEDNESS IN SERVICE-USER AND CARER EXPERIENCE: the distinctive competence the statutory sector lacks, and the reason the bridging roles and the recovery mission are credible; (7) ALWAYS STRIVING FOR BETTER PROVISION AND OPPORTUNITIES. The sector they define sits in the third position between the statutory and the private: originally volunteer-run, motivated by improving lives by doing things differently, from large contracted service businesses to entirely-volunteer charities relying on donations to stay fiercely independent.", topic: "The definition" },
    { question: "Give the four-part typology with one example each, including the Armenia case.", answer: "(1) MENTAL-HEALTH-SPECIFIC organisations: mental illness the remit: the Finnish Association for Mental Health. (2) SOCIAL-PROBLEM organisations whose populations include the mentally ill: the homeless, refugee, domestic-violence and young-offender charities meeting mental illness among their populations without it being their focus. (3) The CAMPAIGN-EDUCATE-ADVOCATE-LOBBY organisations with self-help promotion. EUFAMI, the European families' association; SANE Australia. (4) The DEVELOPING-WORLD humanitarian response. Armenia: no mental-health services, CAFOD with the Association of Child Psychiatrists and Psychologists providing therapy and awareness to overcome prejudice. The typology is a map, not a set of boxes: large organisations occupy several tiers at once. Rethink is mental-health-specific, campaigner and front-line provider simultaneously.", topic: "The typology" },
    { question: "Recite the Rethink model: the origin, the membership, the mission, and the two role descriptions.", answer: "THE ORIGIN: the National Schizophrenia Fellowship founded 1972 by families concerned that relatives of people with schizophrenia had no support for themselves. The family-mutual-support root that grew into the national organisation with political leverage. THE MEMBERSHIP: a membership charity of 7,500 members; service users, carers, professionals, the public. THE MISSION: to support everyone affected by severe mental illness to recover a better quality of life. The recovery orientation significant precisely because the staff bring the lived-experience perspective that clinicians and statutory providers lack. THE TWO ROLE DESCRIPTIONS: (1) BRIDGING; linking the person with non-judgemental service delivery connected with user and carer experience; (2) ENSURING SERVICE USERS ARE HEARD AND NEEDS MET MORE HOLISTICALLY. The delivery arm behind the roles: 350 services and approximately 1,300 staff (2007), in partnership with the NHS and social services.", topic: "The model organisation" },
    { question: "List the activity inventory: the ten functions the chapter names.", answer: "(1) MUTUAL SUPPORT: the original function; (2) INFORMATION RESOURCES addressing the commonly encountered problems: access to services, funding for care, with the solutions-focused emphasis; (3) ADVOCACY for individuals and families whose needs are unmet; (4) POLICY DEVELOPMENT from the evidence base of user and carer struggles; (5) CAMPAIGNS on stigma and discrimination; (6) RESEARCH AND SURVEYS: the user-and-carer-view reports, the carer-information guidance with privacy-and-autonomy respect; (7) GOOD-PRACTICE GUIDANCE AND PROFESSIONAL TRAINING; (8) MEDIA ACTIVITY publicising the campaigns; (9) THE INTERNET's cheaper dissemination; (10) THE FRONT-LINE SERVICES in partnership with the NHS and social services: supported housing schemes, advocacy projects, community resource centres, carer support services, employment and training programmes, school education projects, young-people mentoring: 350 services and approximately 1,300 staff (2007).", topic: "The inventory" },
    { question: "Quote the four international examples of the sector making a difference, including India's.", answer: "(1) NEW ZEALAND: the Mental Health Foundation partnering the Ministry of Health in the like minds, like mine anti-discrimination campaign; ten years of transforming public engagement. (2) WFSAD (the World Fellowship for Schizophrenia): supporting the 2003 East-African workshop where users and families met government ministers and professionals to plan care delivery. (3) ENGLAND: the voluntary sector collectively ensuring the 2002 schizophrenia clinical guidelines incorporated user-and-carer treatment preferences. (4) INDIA: Action for Mental Illness (ACMI); the advocacy initiative achieving tax concessions for the mentally ill and their carers, and maintenance allowances equivalent to physical disabilities: the Indian statutory-entitlement precedent. Alongside: NAMI's Peer-to-Peer Education Course (the nine-week experiential recovery course), Canada's family-to-family first-episode-psychosis network, and the recovery model pioneered and embraced across the sector; the Scottish Recovery Network, with the attitude-change requirement honestly noted.", topic: "The evidence of difference" },
    { question: "State the four common campaign themes, and the collective lesson they carry.", answer: "THE FOUR THEMES, shared across wealth and development stages: (1) EARLIER INTERVENTION; (2) BETTER CRISIS RESPONSE; (3) MORE FAMILY SUPPORT; (4) LESS PHYSICAL RESTRAINT. The context: the community-care transition problems and the community-treatment-order controversies producing the voluntary-clinical alliances. THE COLLECTIVE LESSON: in alliance, the sector, clinicians and professionals lobby more effectively for better law and resources; the Mental Health Alliance (80 organisations including the Royal College of Psychiatrists) being the demonstration: eight years of opposing and amending the Mental Health Act reform, achieving both legislative change and delay.", topic: "The campaign agenda" },
    { question: "Explain the critical-friend function and recite the Rethink examples.", answer: "THE FUNCTION: independence (the essential characteristic) occupying the territory of monitored criticism toward both statutory and private sectors: PRAISING THE POSITIVE, HIGHLIGHTING THE WRONG. THE RETHINK EXAMPLES: (1) MISDIAGNOSIS SUPPORT; the expert second opinions, misdiagnosis producing inappropriate care with tragic consequences: imprisonment, suicide, homicide; (2) the COMPLAINTS PROCEDURES supported on behalf of users and families; (3) LEGAL REPRESENTATION AT INQUEST HEARINGS: drawing attention to the care deficiencies, the poor risk assessment, the refusal of family information; (4) THE SYSTEMIC FOCUS: persuading ombudsmen and coroners to recommend local policy improvements. The wider net: the BME voluntary-organisations network's inequality and race-equality critique of both legislation and services; the US parallel, the National Council of La Raza's Hispanic depression-and-access disparity work.", topic: "The critical friend" },
    { question: "State the Mental Health Alliance's numbers and achievement, the sector's fragility, and the mutual-dependency conclusion.", answer: "THE ALLIANCE: a coalition of 80 organisations (the Royal College of Psychiatrists prominent) opposing the government's Mental Health Act reform proposals for eight years; achieving LEGISLATIVE CHANGE AND DELAY: the sector's collective political power demonstrated. THE FRAGILITY: the sector is dynamic, vital and user-rooted, and fragile: STATE-FUNDING DEPENDENCE THREATENING AUTONOMY AND INDEPENDENCE, the vulnerability inside every partnership. THE MUTUAL DEPENDENCY: the psychiatrist's supports, joining the organisations, as MEMBERS, as CAMPAIGNERS, as EDUCATORS; the sector's reciprocation. TRANSFORMING PSYCHIATRY'S PUBLIC IMAGE and ATTRACTING YOUNG PEOPLE TO THE FIELD; the chapter's closing sentence: 'we do need each other in order to deliver better outcomes for mental health service users and their families.'", topic: "The conclusion" },
  ],
  faqs: [
    { question: "What is the voluntary sector, actually?", answer: "The third sector between government and private enterprise: independent, values-driven organisations rooted in the experience of service users and carers (from all-volunteer charities to large contracted service providers) unified by independence, empowerment principles and the commitment to better lives, doing things differently because improving lives, not profit, is the prime motivation." },
    { question: "Why should a doctor know about these organisations?", answer: "Because they hold what your prescription cannot: housing, advocacy, employment programmes, carer support, peer education; the referral map to the sector multiplies the treatment plan's reach; and because their evidence and campaigns improve the services you work in, from the clinical guidelines to the law itself." },
    { question: "What did India's voluntary sector achieve?", answer: "The chapter's own example: Action for Mental Illness (ACMI) won tax concessions for the mentally ill and their carers, and maintenance allowances equivalent to physical-disability provisions, and the broader movement's work runs through the RPwD Act's entitlements and the disability-inclusion machinery, with the IRDAI parity rulings as the later wins." },
    { question: "Can these organisations criticise doctors?", answer: "Yes, and that is the point: the critical-friend function (monitoring services, supporting complaints and inquests, demanding second opinions where misdiagnosis has harmed) is the independence that improves the whole system, including its clinicians; the corrections insiders may be too close to trigger." },
    { question: "Is the recovery model theirs?", answer: "Largely: the sector pioneered and embraced the recovery orientation; the user-led courses, the mutual support, the hope-never-given-up stance (the Scottish Recovery Network; NAMI's nine-week Peer-to-Peer course), with the statutory services adopting it thereafter; the lived-experience perspective is the distinctive competence the statutory providers lack." },
    { question: "How can I support them?", answer: "The chapter's own answer: join, as a member, as a campaigner, as an educator; the alliance transforms psychiatry's public image and attracts the future workforce; the mutual dependency is real, and the fragility (state-funding dependence threatening autonomy) means your membership is protection as well as solidarity." },
    { question: "Are they a lobby or a service provider?", answer: "Both, and more: front-line services (350 at the model organisation, with approximately 1,300 staff), advocacy, research, campaigns, training and policy influence; the diversity is deliberate, with each organisation choosing its own mix. The mistake is reading one function as the whole." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The 2002 English schizophrenia clinical guidelines — the user-and-carer treatment preferences the voluntary sector collectively ensured were incorporated (the chapter's guideline-influence evidence)" },
      { source: "Rethink's organisational documentation (www.rethink.org) — the model organisation's own membership, mission and service materials" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 7.9 (Pinfold & Teasdale) — the source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "The like minds, like mine campaign (New Zealand) — the Mental Health Foundation-Ministry of Health partnership evidence, ten years of transforming public engagement" },
      { source: "NAMI's Peer-to-Peer Education Course — the nine-week experiential recovery programme; with Canada's family-to-family first-episode-psychosis network" },
    ],
    reviews: [
      { source: "WFSAD (the World Fellowship for Schizophrenia and Allied Disorders) — the 2003 East-African workshop where users and families met government ministers and professionals" },
      { source: "EUFAMI (the European families' association) and SANE Australia — the campaign-educate-advocate-lobby typology examples" },
      { source: "The Mental Health Alliance (England and Wales) — the 80-organisation coalition and the eight-year Act-reform influence" },
      { source: "The BME voluntary-mental-health network (England) and the National Council of La Raza (US) — the inequality and access-disparity critiques" },
      { source: "The Scottish Recovery Network — the recovery-model pioneering, with the attitude-change requirement honestly noted" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, 24x7, in multiple Indian languages" },
      { source: "The referral-map script and the chapter's own advice — join as member, campaigner and educator: the two instruments this course hands to every clinician" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what these organisations are, what they offer your family, and how to connect.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The definition, the typology, the Rethink model, the inventory, the critical friend.",
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
      description: "Everything: the referral-map craft, the partnership discipline, the fragility watch, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The third sector, the seven characteristics, the typology.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define the sector, recite the seven characteristics and place an organisation on the typology cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The engine: founding deficit to front-line delivery, and the critical-friend governor.", sectionIds: ["mechanism", "pathways", "timeline"], checkpoint: "You can walk the founding-to-services chain and the mutual-support-to-policy chain, and state the mutual-dependency conclusion." },
    { number: 3, title: "Clinical Practice", description: "The referral map, the characteristics as criteria, the sector differentials, the partnership management.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can audit a district's voluntary sector and write the referral map into a treatment plan." },
    { number: 4, title: "Indian Context", description: "The family organisations as the system's spine, the decision path, the common mistakes.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the carer referral, the entitlement script and the critical-friend acceptance in the Indian district." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the seven-characteristics question and the Mental Health Alliance question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 7.9 (Pinfold & Teasdale) — the source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Rethink (the National Schizophrenia Fellowship) — the organisational model and its documentation (www.rethink.org): the 1972 origin, the 7,500 members, the recovery mission, the 350 services and approximately 1,300 staff (2007)", sourceType: "primary", year: "2007 (the note's figures)", dateReviewed: "2026-09-30" },
    { id: "S3", source: "The like minds, like mine campaign (New Zealand) — the Mental Health Foundation partnering the Ministry of Health, ten years of transforming public engagement", sourceType: "primary", year: "the decade, per the note", dateReviewed: "2026-09-30" },
    { id: "S4", source: "WFSAD (the World Fellowship for Schizophrenia and Allied Disorders) — the 2003 East-African workshop where users and families met government ministers and professionals to plan care delivery", sourceType: "primary", year: "2003", dateReviewed: "2026-09-30" },
    { id: "S5", source: "EUFAMI (the European families' association) and SANE Australia — the campaign-educate-advocate-lobby typology examples", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S6", source: "NAMI — the campaign-advocacy example and the Peer-to-Peer Education Course (the nine-week experiential recovery course)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Action for Mental Illness (ACMI, India) — the tax concessions for the mentally ill and their carers, and the maintenance allowances equivalent to physical disabilities (the chapter's own India citation)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S8", source: "The Canadian family-to-family first-episode-psychosis network — the peer-network example", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S9", source: "The Mental Health Alliance (England and Wales) — the 80-organisation coalition (the Royal College of Psychiatrists prominent) opposing and amending the Mental Health Act reform for eight years", sourceType: "primary", year: "the eight-year campaign, per the note", dateReviewed: "2026-09-30" },
    { id: "S10", source: "The BME voluntary-mental-health network (England) and the National Council of La Raza (US) — the inequality, race-equality and access-disparity critiques", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S11", source: "The Scottish Recovery Network — the recovery-model pioneering, with the attitude-change requirement honestly noted", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S12", source: "The Indian tier (flagged by the note) — the RPwD Act advocacy lineage; the schizophrenia-care-society tradition (ARDSI and peers); SCARF; the Richmond Fellowship Society India; NAMI-India; the Tele-MANAS-voluntary interface with the iCall and Vandrevala traditions; the Amrit and Parivaar networks; the 50-90% co-residence family-burden epidemiology (the note's P6 reference); the CSR-funding autonomy question (approx 2026)", sourceType: "review", year: "2026 context", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The definition and the seven key characteristics: the voluntary (third) sector; distinct from the private/industry and the public/statutory, originally volunteer-run, motivated by improving the lives of people affected by mental-health problems by doing things differently, tirelessly pushing for change, never giving up hope: characterised by an independent position, a strong values base, empowerment principles, non-profit distribution, passionate commitment, rootedness in service-user and carer experience, and always striving for better provision and opportunities; the organisational range running from large contracted service businesses to entirely-volunteer charities relying on donations to stay fiercely independent.", grade: "established", sources: ["S1"] },
    { text: "The typology: mental-health-specific organisations (the Finnish Association for Mental Health); social-problem organisations whose populations include the mentally ill (the homeless, refugee, domestic-violence and young-offender charities); the campaign-educate-advocate-lobby organisations with self-help promotion (EUFAMI, the European families' association; SANE Australia); and the developing-world humanitarian response (Armenia: no mental-health services, CAFOD with the Association of Child Psychiatrists and Psychologists providing therapy and awareness to overcome prejudice).", grade: "established", sources: ["S1", "S5"] },
    { text: "The Rethink model: the National Schizophrenia Fellowship founded 1972 by families concerned that relatives of people with schizophrenia had no support for themselves, growing into the national organisation with political leverage; a membership charity of 7,500 members (service users, carers, professionals, the public) with the mission to support everyone affected by severe mental illness to recover a better quality of life, the recovery orientation significant because the staff bring the lived-experience perspective clinicians and statutory providers lack.", grade: "established", sources: ["S1", "S2"] },
    { text: "The role pair and the activity inventory: bridging (linking the person with non-judgemental service delivery connected with user and carer experience) and ensuring service users are heard and needs met more holistically; the inventory: mutual support, information resources (access to services, funding for care), advocacy, policy development from the user-and-carer evidence base, campaigns on stigma and discrimination, research and surveys, good-practice guidance and professional training, media activity and internet dissemination, and the front-line services in partnership with the NHS and social services: 350 services and approximately 1,300 staff (2007); supported housing, advocacy projects, community resource centres, carer support, employment and training programmes, school education, young-people mentoring.", grade: "established", sources: ["S1", "S2"] },
    { text: "The international evidence of difference: New Zealand's Mental Health Foundation partnering the Ministry of Health in the like minds, like mine anti-discrimination campaign; ten years of transforming public engagement; WFSAD supporting the 2003 East-African workshop where users and families met government ministers and professionals to plan care delivery; England's voluntary sector collectively ensuring the 2002 schizophrenia clinical guidelines incorporated user-and-carer treatment preferences.", grade: "established", sources: ["S1", "S3", "S4"] },
    { text: "India's Action for Mental Illness (ACMI): the advocacy initiative achieving tax concessions for the mentally ill and their carers, and maintenance allowances equivalent to physical disabilities; the Indian statutory-entitlement precedent, with the RPwD Act's entitlements and the IRDAI parity rulings standing as the movement's later wins.", grade: "established", sources: ["S1", "S7"] },
    { text: "The peer-network and recovery pioneering: NAMI's Peer-to-Peer Education Course (the nine-week experiential recovery course); Canada's family-to-family first-episode-psychosis network; the recovery model pioneered and embraced across the sector (the Scottish Recovery Network), with the attitude-change requirement honestly noted.", grade: "established", sources: ["S1", "S6", "S8", "S11"] },
    { text: "The common campaign themes and the alliance lesson: earlier intervention, better crisis response, more family support, less physical restraint; shared across wealth and development stages, with the community-care transition problems and the community-treatment-order controversies producing the voluntary-clinical alliances; in alliance, the sector, clinicians and professionals lobby more effectively for better law and resources.", grade: "established", sources: ["S1"] },
    { text: "The critical-friend function: independence as the essential characteristic, occupying the territory of monitored criticism toward both statutory and private sectors; praising the positive, highlighting the wrong; the Rethink examples: expert second opinions in misdiagnosis (inappropriate care with tragic consequences, imprisonment, suicide, homicide), complaints procedures, legal representation at inquest hearings (care deficiencies, poor risk assessment, the refusal of family information), and the systemic focus (persuading ombudsmen and coroners to recommend local policy improvements); with the BME voluntary-organisations network's inequality and race-equality critique and the US parallel (the National Council of La Raza's Hispanic depression-and-access disparities).", grade: "established", sources: ["S1", "S2", "S10"] },
    { text: "The Mental Health Alliance: the coalition of 80 organisations (the Royal College of Psychiatrists prominent) opposing the government's Mental Health Act reform proposals for eight years, achieving legislative change and delay: the sector's collective political power demonstrated.", grade: "established", sources: ["S1", "S9"] },
    { text: "The fragility and the mutual dependency: the sector dynamic, vital and user-rooted, and fragile, state-funding dependence threatening autonomy and independence; the psychiatrist's supports: joining the organisations as members, campaigners and educators; the sector's reciprocation: transforming psychiatry's public image and attracting young people to the field; the conclusion: 'we do need each other in order to deliver better outcomes for mental health service users and their families.'", grade: "established", sources: ["S1"] },
    { text: "The Indian landscape: the family-founded schizophrenia-care societies (the ARDSI-parallel tradition, day-care centres, family-support groups, residential facilities); the disability-rights organisations (the RPwD Act's passage driven by the sector's advocacy; the Amrit and Parivaar networks); the mental-health NGOs (the Schizophrenias Care Foundation, SCARF, NAMI-India, the Richmond Fellowship Society); the crisis and helpline tier (Tele-MANAS with the iCall and Vandrevala traditions); the self-help and consumer movement emerging; and the clinical partnership discipline (the district referral map, the organisation-as-colleague posture) practice-pattern description from the note's India lens, context honestly labelled.", grade: "supported", sources: ["S1", "S12"] },
    { text: "The Indian critical-friend tier and the carer infrastructure: the sector's vigilance functions (the Erwadi-type institutional scandals exposed, the human-rights reports, the legal-aid and PIL tradition) with the alliance and the tension both live; and the carer-support gap the sector fills, on the 50-90% co-residence family-burden epidemiology, making the carer organisations the de facto family-treatment infrastructure the state system has never provided; costs approx 2026: sliding, donation-based and free fee-scales against the private sector, with the CSR-funding and government-NGO-contract autonomy risk applying the chapter's warning to the Indian funding ecology.", grade: "supported", sources: ["S1", "S12"] },
  ],
};
