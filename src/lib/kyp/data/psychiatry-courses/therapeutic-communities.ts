import type { PsychiatryCourse } from "./types";

/**
 * THERAPEUTIC COMMUNITIES — canonical Psychiatry course
 * (migration batch 14, Group P — treatment methods).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/therapeutic-communities.md — untouched
 * foundation), re-researched against the source chapter's
 * own lineage (Main 1946, Jones 1968, Rapoport's Henderson
 * study, the Community of Communities Core Standards, the
 * Lees CRD-17 review, the Warren severe-PD verdict, the
 * Grendon prison data, the Soteria trials, Haigh's
 * quintessence) with per-claim provenance.
 *
 * Drug routes: NONE — the treatment is an institution, not
 * a molecule; the Soteria minimal-neuroleptic tier and the
 * comorbid-depression rider have no KYP routes from this
 * course and are recorded in contentGaps, never invented.
 */
export const therapeuticCommunitiesCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "therapeutic-communities",
  title: "Therapeutic Communities",
  shortName: "TCs",
  kind: "concept",
  category: "Treatment Methods",
  groupLetter: "P",
  groupName: "Treatment methods",
  learningPath: ["Psychiatry", "Treatment Methods", "Therapeutic Communities"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "30 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The institution is the treatment: daily life itself run on the four Henderson principles",

  summary:
    "A therapeutic community treats through structured shared daily life rather than delivered therapy, guided by the four Henderson principles. The model serves personality disorder and offending populations, and its community-meeting elements transfer to Indian services at little cost.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Quote Main's and Jones's definitions and explain what 'the community is the treatment' means: resocialisation through full participation, and the change in the usual status of patients.",
    "State the three defining beliefs and Rapoport's four Henderson principles (democratisation, permissiveness, communalism, reality confrontation), operationalising each in a Core-Standards practice.",
    "Recite the Core-Standards sample: the whole community meets regularly; all members, staff included, work alongside each other; share meals; can discuss any aspect of community life; create emotional safety; participate in a new member's joining; tolerate disturbed behaviour and emotional expression; treat positive risk-taking as essential to change.",
    "Trace the history: Geel → York Retreat (1796, moral treatment) → therapeutic education → Northfield (Bion's failed 1943 attempt, then Main, Foulkes and Bridger; Maxwell Jones at Mill Hill; the 1946 papers) → the Cassel and the Henderson (1958) → the 1970s–80s decline → the 1990s–2000s revival: plus the parallel streams: Synanon (1958) → Phoenix House and Daytop; Soteria.",
    "Explain the change mechanism: the living-learning situation, the culture of enquiry, and the replication of outside difficulties inside, with small-group and community meetings as the examination hall.",
    "Use Haigh's five essential experiences (attachment, containment, communication, inclusion, agency) as the developmental model: primary emotional development re-worked through secondary development.",
    "Run the four-phase journey (engagement, assessment and preparation, the main treatment, leaving) with the resident-participation rule at each gate, and recite the indications and contraindications with the 'particular community at a particular time' caveat.",
    "Quote the evidence honestly (the Lees meta-analysis, the PD verdict, the Grendon data, Soteria's trials, the addiction-TC caveat), and apply the Indian import: the day-centre Core-Standards adoption at zero cost, the deaddiction-centre fit, the trained-staff scarcity, and the Erwadi lesson.",
  ],
  quickFacts: [
    { label: "The four principles", value: "Democratisation · permissiveness · communalism · reality confrontation", detail: "Rapoport's quartet from the Henderson Hospital study: equal decision-making power over community affairs; wide tolerance of distressing or seemingly deviant behaviour; the tight-knit shared life (first names, shared amenities, free communication); and the continuous interpersonal feedback that counters distortion, denial and withdrawal" },
    { label: "The one-line difference", value: "Residents, clients or members, never patients", detail: "Main 1946: the hospital as a community for full participation and eventual resocialisation; Jones: the total pooling of the institution's resources, staff, patients and their relatives; 'above all, a change in the usual status of patients'" },
    { label: "The evidence headline", value: "8,000 references → 29 studies, log odds ratio −0.567", detail: "The Lees systematic review (CRD Report 17, York): from over 8,000 references across 38 countries to 29 conservative-outcome studies in personality disorder and mentally disordered offenders; 19 showing positive effects at 95% confidence and none negative" },
    { label: "The PD verdict", value: "'The most promising evidence base in this poor field'", detail: "The Home Office review of treatments for severe personality disorder (Warren et al 2003): the TC model's standing verdict, and the treatment of last resort for the cases individual therapy struggles to hold" },
    { label: "The prison dose", value: "Beyond 18 months", detail: "Grendon's reconviction data: lower reconviction, fewer custodial sentences and fewer violent reconvictions for prisoners staying longer than 18 months versus waiting-list controls; the dose-response finding of prison-TC research" },
    { label: "The five essential experiences", value: "Attachment · containment · communication · inclusion · agency", detail: "Haigh's developmental model: disturbed primary emotional development re-worked through secondary emotional development in the community; the experiences the person did not have, supplied as the treatment" },
    { label: "The two essence-phrases", value: "The living-learning situation; the culture of enquiry", detail: "Everything that happens between members in the course of living together (especially the crises) is the learning material; and the staff culture of honest enquiry into difficulty, deliberately challenging dogma and accepted wisdom" },
    { label: "The Indian import", value: "The Core-Standards sample at zero cost", detail: "Whole-group meetings, shared work, discussable everything and positive risk-taking import into any day-care centre, halfway home or ward routine, with the 2001 Erwadi fire as the standing warning: unregulated 'community care' without enquiry, standards or oversight kills" },
  ],
  knowledgeGraph: [
    { label: "Group Therapy", type: "condition", href: "/psychiatry/group-therapy/", note: "The small-group meeting as the TC's examination hall: the group dynamics the community wraps around its shared life" },
    { label: "Treating Personality Disorders", type: "condition", href: "/psychiatry/personality-disorder-treatment/", note: "The population the democratic TC chiefly treats, and the structured-therapy alternatives it sits beside" },
    { label: "Psychiatric Rehabilitation", type: "condition", href: "/psychiatry/psychiatric-rehabilitation/", note: "The 1990s community-rehabilitation revival the TC rode, and the shared rehabilitation logic" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "Soteria's first-episode psychosis population: the low-stress, minimal-medication alternative stream" },
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The concept-based addiction TCs (Synanon → Phoenix House, Daytop) and their dependence population" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The self-harm indication: the crisis-driven admissions the TC's living-learning discipline re-routes into meetings" },
    { label: "Dynamic Psychotherapy", type: "condition", href: "/psychiatry/dynamic-psychotherapy/", note: "The Northfield lineage: Bion, Main and Foulkes; the group-analytic ancestry of the community meeting" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The reflective tier the community trains by repetition: hundreds of lived feedback episodes practising self-observation" },
    { label: "Oxytocin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The attachment chemistry Haigh's first essential experience rides on: the proposed substrate of lived belonging" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "How does living in an institution treat anyone? The TC's answer has three moving parts. The first is the re-enactment engine: the community supplies lifelike situations (shared meals, domestic decisions, close quarters, rivalries) in which the member's outside relational difficulties are re-experienced, and the small-group and community meetings act as the regular examination-and-learning forum where the material is looked at rather than acted out; the crisis is not an interruption of treatment but its densest single learning opportunity (the living-learning situation). The second is the status reversal: shared work, shared meals, first names and shared decision-power dismantle the institutional hierarchy that itself maintains the sick role (Jones's change in the usual status of patients) so that the resident practises being a member of a society rather than a specimen in one. The third is the developmental repair: Haigh's five essential experiences (attachment, containment, communication, inclusion, agency) mapped across psychological theories and TC structures, proposing that disturbed primary emotional development can be re-worked through secondary emotional development in the community. Two operating disciplines keep the engine honest: the culture of enquiry (a staff culture of honest enquiry into difficulty, deliberately challenging dogma and accepted wisdom) and the double bookkeeping of treatment management: each resident's progress AND the community's own effective functioning, with responsibility genuinely shared with residents when it works well. The transmission system completes the design: new members adopt the values (openness, responsibility, active participation) and later pass them on; the community reproducing its own culture, with residents participating in selection and in each new member's joining.",
    steps: [
      "The re-enactment engine: lifelike communal situations re-produce the member's outside relational difficulties, with the small-group and community meetings as the regular examination-and-learning forum.",
      "The living-learning situation: everything that happens between members in the course of living together, ESPECIALLY the crises, is treated as learning material. The evening the community nearly breaks is the curriculum's densest seminar.",
      "The culture of enquiry: the staff culture of honest enquiry into difficulty, deliberately challenging dogma and accepted wisdom; the antidote to the institution that runs on unexamined habit.",
      "The status reversal: shared work, shared meals, first names and shared decisions dismantle the institutional hierarchy that maintains the sick role. Jones's change in the usual status of patients.",
      "The developmental repair: Haigh's five essential experiences (attachment, containment, communication, inclusion, agency) re-working disturbed primary emotional development through secondary development.",
      "The transmission system: new members adopt the values (openness, responsibility, active participation) and later pass them on; residents participate in selection and in each new member's joining: the community reproducing its own culture.",
      "The double management: each resident's progress AND the community's own effective functioning, with responsibility genuinely shared with residents; the parallel process that makes staff members-who-monitor rather than experts-who-manage.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "prefrontal-reflective", name: "Prefrontal reflective circuitry", role: "The self-observation tier the community trains by repetition: hundreds of lived feedback episodes (reality confrontation) practising exactly the reflective capacity the individual therapy hour can only sample. The honest framing: this is the proposed translation layer. The TC's own evidence is behavioural and social-science, not imaging.", grade: "proposed" },
    { id: "attachment-circuitry", name: "Limbic attachment circuitry", role: "The system Haigh's first two essential experiences (attachment, containment) imply: the lived, repeated experience of being held and thought about by a group proposed as the substrate of secondary emotional development.", grade: "proposed" },
    { id: "threat-system", name: "The social-threat system (amygdala tier)", role: "The alarm that permissiveness plus emotional safety is designed to re-train: the member whose distress is tolerated without exclusion learning, at the body's own level, that proximity does not equal danger.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Oxytocin", symbol: "OT", role: "The attachment chemistry Haigh's first essential experience rides on: the proposed substrate of the lived belonging that begins the secondary developmental sequence.", grade: "proposed" },
    { name: "Serotonin", symbol: "5-HT", role: "The boundary marker: the comorbid depression riding with severe personality disorder has its SSRI tier taught in the disease courses. The TC treats the relational layer, and the two are prescribed separately.", grade: "supported", drugConnection: "No route from this course: the depression rider's SSRI lessons (sertraline and relatives) belong to the disease courses; the boundary is documented in contentGaps." },
    { name: "Dopamine", symbol: "DA", role: "The social-reward chemistry of participation: the member's earned roles, responsibilities and peer status proposed as the reinforcement engine that makes the communal life worth learning.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "living-learning-pathway",
      name: "The change pathway (outside difficulty re-enacted inside)",
      steps: [
        { label: "The lifelike situation supplied", detail: "Shared meals, domestic decisions, close quarters, rivalries: the community engineered so that ordinary life, not staged exercises, provides the material" },
        { label: "The outside difficulty re-appears", detail: "Authority conflicts re-emerging against staff-coordinators; abandonment fears re-emerging at every leaving: the relational pathology in vivo" },
        { label: "The meeting examines it", detail: "The small-group and community meetings as the regular examination-and-learning forum: the re-enactment recognised, named and understood rather than acted out" },
        { label: "The feedback lands (reality confrontation)", detail: "The member continuously presented with others' interpretations of their behaviour: countering distortion, denial and withdrawal; the crisis documented as treatment, because it is" },
      ],
      clinicalManifestation: "The resident whose furious confrontation after a community decision becomes, the same evening, the meeting's material: the pathology examined instead of expelled.",
      grade: "supported",
    },
    {
      id: "developmental-repair-pathway",
      name: "The developmental repair pathway (Haigh's five)",
      steps: [
        { label: "Attachment", detail: "The lived experience of belonging: the community as the reliable human environment the early development did not supply" },
        { label: "Containment", detail: "Being held and thought about: distress tolerated, meaning made of it; the experience that gradually installs self-containment" },
        { label: "Communication", detail: "Speech that is heard in the meetings. The member learning that saying the difficulty works better than enacting it" },
        { label: "Inclusion and agency", detail: "Real membership with real decisions and real consequences: the experiences of mattering and of acting that convert powerlessness into participation" },
      ],
      clinicalManifestation: "The resident reliably contained over months gradually able to contain herself: secondary emotional development visible as the falling-away of the crisis pattern.",
      grade: "supported",
    },
    {
      id: "status-reversal-pathway",
      name: "The institutionalisation-reversal pathway",
      steps: [
        { label: "The total institution's hierarchy", detail: "Barton's institutional neurosis, Goffman's total institution: passivity, learned helplessness and the sick role maintained by status itself" },
        { label: "The communalism installed", detail: "First names, shared amenities, shared work and meals, free communication: the tight-knit shared life that dissolves the hierarchy brick by brick" },
        { label: "The democratisation practised", detail: "Members decide day-to-day and domestic matters (rotas, elections) and participate in therapeutic decisions: responsibility shared, not conferred as reward" },
        { label: "The resocialisation delivered", detail: "Main's eventual aim: the member prepared for life in ordinary society by having practised being a member of this one" },
      ],
      clinicalManifestation: "The long-stay patient who arrived docile and institutionalised, leaving as the person who showed three new arrivals round and chaired the leaving meeting.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "geel-york-era", time: "Fourteenth century & 1796", title: "Geel and the York Retreat", description: "Geel's sanctuary community in Belgium: boarders living among families, the oldest ancestor; the York Retreat (1796, Quaker): moral treatment; personal relationships and social expectations in a family-like atmosphere enabling previously dangerous individuals to control their behaviour.", phase: "onset" },
    { id: "northfield-era", time: "1943–1946", title: "The Northfield crucible", description: "Bion's brief failed 1943 attempt at Northfield Military Hospital, then Main, Foulkes and Bridger; Maxwell Jones at Mill Hill; the 1946 papers coining the term: the wartime origin of the modern model.", phase: "onset" },
    { id: "henderson-era", time: "1948–1960s", title: "The Cassel, the Henderson and the ascendancy", description: "Main at the Cassel (the continuing inpatient psychotherapy hospital); Jones at Belmont, renamed the Henderson (1958), replicating into Main House and Webb House (2000) for national severe-PD provision; the NHS-era TC approach against institutionalisation in the large mental hospitals.", phase: "peak" },
    { id: "decline-era", time: "1970s–1980s", title: "The individualist decline", description: "The turn to individual psychotherapy and psychopharmacology; TCs closing as the social-psychiatry wave recedes: the model surviving in pockets (the Cassel, the Henderson, the addiction stream Synanon had seeded in 1958).", phase: "duration" },
    { id: "revival-era", time: "1990s–2000s", title: "The revival", description: "Prisons (Grendon and the German Social Therapeutic Institutions), PD services and community rehabilitation; the Community of Communities standards (2006); today's 'therapeutic environments' movement in acute wards as the direct echo; Soteria surviving mainly in Europe.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The movement's reach: concept-based addiction TCs running in 50+ countries (the Synanon → Phoenix House and Daytop lineage); the Lees review's evidence net drawn from 8,000 references across 38 countries; staff-training courses in the UK, Finland, Norway, the Netherlands and Greece, with no set standard between them; Soteria houses mainly in Europe. The treated spectrum: severe personality disorder above all (the treatment of last resort for the cases individual therapy struggles to hold), self-harm, adjustment, recurrent depressive, bipolar, anxiety and eating disorders, offending populations, addictions in the modified form, severe and enduring illness, and first-episode psychosis in Soteria form.",
    indianPrevalence: "India's natural homes: the 84+ government-funded deaddiction centres and a large NGO network largely running the hierarchical/concept-based model; the addiction-TC evidence and its motivation caveat applying directly; the democratic model suiting the PD and rehabilitation populations but surviving only as scarce teaching-institution programmes; NIMHANS-style day hospitals and the district DMHP rehabilitation tier as the natural import sites for the principle level.",
    lifetimeRisk: "The honest demand-side framing: the TC population is defined not by prevalence but by failure elsewhere (the revolving-door severe-PD patient, the self-harmer the ward cannot hold, the prisoner the prison cannot manage) which is why the selection discipline, not the referral volume, is the clinical skill.",
    genderRatio: "The setting decides the demographics: the democratic TC's PD-and-self-harm cohorts against the prison TC's offender cohorts; the model itself serving both identically (staff and residents as equal-ish humans).",
    ageOfOnset: "The age span runs from the adolescent TCs (the Peper Harow outcome study's population) to the adult PD services and offender units: the four-phase journey the same at every age.",
    indianNotes: "The Indian relatives are not imports but ancestors: temple healing communities, ashrams, Soteria-like spiritual communes and Gandhian intentional communities (the l'Arche and Camphill analogues). India has always run community-based care; the TC formalises what these do intuitively and adds the enquiry culture and evidence discipline.",
  },
  etiology: [
    { category: "psychological", factor: "The relational hypothesis", details: "The second defining belief: whatever the symptoms, the difficulties are primarily in relationships with other people; the aetiological claim that justifies treating the milieu rather than (only) the individual." },
    { category: "psychological", factor: "The developmental deficit Haigh maps", details: "Disturbed primary emotional development (the missing or damaged experiences of attachment, containment, communication, inclusion and agency) as what the TC's secondary emotional development re-works; a developmental model, not a defect model." },
    { category: "social", factor: "Institutionalisation itself", details: "The sickness the institution adds: Barton's institutional neurosis and Goffman's total institution; the status hierarchy, passivity and learned helplessness that communalism and democratisation are designed to reverse; the sociological critique the TC movement answered." },
    { category: "social", factor: "The transmission system", details: "Communities reproduce their own culture: new members adopt the values (openness, responsibility, active participation) and later pass them on; the mechanism by which the model scales, and by which a toxic culture also replicates; why the community's own functioning is clinical work." },
    { category: "environmental", factor: "The healing-community ancestry", details: "Geel's sanctuary, the York Retreat's moral treatment, the therapeutic-education schools (Christian love plus Freud), l'Arche and Camphill: the environmental insight that a structured community heals, which the TC formalised and then added the enquiry culture and the evidence discipline." },
  ],
  symptomClusters: [
    {
      category: "1. The disorders-of-relationship presentations (the democratic TC's population)",
      symptoms: [
        "Severe personality disorder above all: the treatment of last resort for the cases individual therapy struggles to hold",
        "Recurrent self-harm and the crisis-driven pattern of brief admissions the ward cannot interrupt",
        "Adjustment, recurrent depressive, bipolar, anxiety and eating disorders, where the relational layer dominates the presentation",
        "Severe and enduring mental illness in rehabilitation form: the community as the resocialisation route",
      ],
    },
    {
      category: "2. The offending and addiction presentations (the modified TCs)",
      symptoms: [
        "Disruptive, violent prisoners and the underlying antisocial PD: the prison TC treating what prisons punish",
        "Drug dependence in the hierarchical, concept-based form: the Synanon → Phoenix House and Daytop lineage, running in 50+ countries",
        "First-episode psychosis in the Soteria form: small, low-stress, family-like environments with intensive support and minimal medication",
      ],
    },
    {
      category: "3. The unsuitable presentations (the contraindication list)",
      symptoms: [
        "Current mania or severe depressive retardation: the state treated first, the community considered after recovery",
        "Current physical dependence: the detoxification that must precede any communal placement",
        "Learning disability, dementia, and anyone with no capacity for social involvement: the communal intensity experienced as intrusion, not treatment",
        "Sexual-abuse perpetration and dangerously low weight: the risks no permissiveness can hold",
        "Antisocial PD with a history of intimidation and deception; the conviction that only experts can help: the member the democratic model cannot carry",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The selection assessment",
      code: "Suitability against a particular community at a particular time",
      criteria: [
        "The indication weighed: personality disorder above all; self-harm; adjustment, recurrent depressive, bipolar, anxiety and eating disorders; offending; addictions; severe and enduring illness; first-episode psychosis (Soteria form).",
        "The contraindication sweep: current mania, severe retardation, current physical dependence, learning disability, dementia, sexual-abuse perpetration, dangerously low weight, antisocial PD with intimidation and deception, no capacity for social involvement, the 'only experts can help' belief.",
        "The motivation and capacity read: the ability to relate informally and intimately; the caveat that selects in every TC evidence line (motivation selects; longer stays do better).",
        "The practical planning: childcare, accommodation, medication and risk plans; the assessment phase's concrete deliverables.",
        "The foretaste: the time-limited assessment and preparation group, and the treatment contract; the community showing itself before the commitment is asked for.",
      ],
      duration: "The four-phase journey opens with engagement and formalises at assessment and preparation: often through a time-limited preparation group before any commitment is made.",
      indianNote: "In the Indian district reality the selection discipline is the difference between a therapeutic community and Erwadi: enquiry, standards and oversight, never just a building and good intentions.",
    },
    {
      system: "The institution audit",
      code: "The Core-Standards sample as a facility check",
      criteria: [
        "Does the whole community meet regularly: staff and residents together, not the ward round's hierarchy?",
        "Do all members, staff included, work alongside each other on the day-to-day tasks, and share meals?",
        "Can any aspect of community life be discussed: the discussable-everything rule?",
        "Is emotional safety created, and disturbed behaviour and emotional expression tolerated within it?",
        "Do members participate in a new member's joining: the community reproducing itself at the door?",
        "Is positive risk-taking treated as essential to change: the standard that separates therapeutic tolerance from negligence?",
      ],
      duration: "A standards review cycle: the Community of Communities quality-network method (16 Core Standards, 2006).",
      indianNote: "The same questions asked of a district day-care centre cost nothing: the zero-cost quality framework for NIMHANS-style day hospitals and DMHP district rehabilitation.",
    },
  ],
  severityScales: [
    {
      name: "The selection ladder",
      fullName: "Indication-to-contraindication staging",
      measures: "Whether the person in front of you belongs in a therapeutic community, and which one.",
      ranges: [
        { min: 0, max: 0, severity: "Indicated: the relational presentations", action: "The democratic TC: severe personality disorder, self-harm, the disorders of relationship; suitability judged against a particular community at a particular time, motivation and capacity for social involvement confirmed" },
        { min: 1, max: 1, severity: "Conditional: the modified models", action: "The prison TC for the disruptive, violent inmate with underlying antisocial PD; the concept-based addiction TC for drug dependence (detoxification first); the Soteria house for first-episode psychosis: each a different instrument, not a lesser version of the same one" },
        { min: 2, max: 2, severity: "Contraindicated: currently or altogether", action: "Treat the state first (mania, retardation, physical dependence, dangerously low weight); exclude where the model cannot hold (sexual perpetration, antisocial PD with intimidation and deception, no capacity for social involvement, 'only experts can help'). The list that protects the community and the non-indicated patient alike" },
      ],
      indianNote: "The ladder travels: the same three-step judgement made in an Indian district OPD, with the modified-model middle rung (the deaddiction network's concept-based communities) the one most Indian patients actually meet.",
    },
    {
      name: "The journey ladder",
      fullName: "The four-phase staging",
      measures: "Where the resident stands in the TC journey: the phase that decides the community's task.",
      ranges: [
        { min: 0, max: 0, severity: "Engagement", action: "Referral or self-referral; the wary prospective supported: often by current or ex-members via voluntary agencies or internet groups; existing mental-health support explicitly continued" },
        { min: 1, max: 1, severity: "Assessment and preparation", action: "The formal assessment, the practical planning (childcare, accommodation, medication and risk plans), the treatment contract: often through a time-limited assessment and preparation group as a foretaste" },
        { min: 2, max: 2, severity: "The main treatment", action: "The living-learning engine at full power: the meetings, the shared work and meals, the roles (members explaining the community to new arrivals, noticing and including the isolated; staff working alongside and monitoring each other's emotional involvement in supervision)" },
        { min: 3, max: 3, severity: "Leaving", action: "The graduation into the culture-carrier role: the ex-member who supports the next wary prospective; the community reproducing itself on the way out; follow-on support arranged before the door" },
      ],
      indianNote: "The gates travel too: even a ward-based import can run engagement-through-leaving rather than an open-ended 'stay' with no culture-carrier graduation.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The nice ward (the pleasant environment)", distinguishingFeatures: "A humane, friendly institution with no community meeting, no shared work, no participation and no enquiry: pleasant, but not therapeutic.", keyDifferentiator: "Deliberateness: the TC is a treatment method with a theory (relational difficulty, learning), a structure, standards and an evidence base; the Core-Standards audit separating the two in eight questions." },
    { condition: "The unregulated healing institution", distinguishingFeatures: "The faith-healing 'community care' setting: communal, sometimes genuinely caring, but without enquiry, standards or oversight.", keyDifferentiator: "The Erwadi test (2001): chained mentally ill patients dying in a fire; the category that must be named and reported, not endorsed; regulation is the public-health demand." },
    { condition: "The concept-based addiction TC", distinguishingFeatures: "The hierarchical, confrontational programme of the Synanon → Phoenix House and Daytop lineage: a different operating system, not a lesser version of the democratic model.", keyDifferentiator: "Decision-power: hierarchical and programme-structured rather than democratised; effective for drug dependence with the motivation caveat: the model-matching question the referral must answer." },
    { condition: "The acute-ward therapeutic environment", distinguishingFeatures: "The scaled-down import: whole-community meetings, shared activity and the enquiry culture in an ordinary acute ward.", keyDifferentiator: "Depth and duration: the ward import is the model's most scalable echo (the antidote to toxic institutions), not the full treatment. The residential TC's four-phase journey is the difference." },
    { condition: "The intentional community", distinguishingFeatures: "l'Arche, Camphill, the Gandhian communes: shared life, shared work and belonging, deliberately avoiding clinical language.", keyDifferentiator: "The treatment contract and the enquiry culture: the TC formalises what the intentional community does intuitively, and adds the evidence discipline; kinship, not identity." },
  ],
  management: [
    { category: "psychotherapy", name: "The democratic therapeutic community (the main treatment)", description: "The four principles operationalised daily: the whole community meeting (democratisation, members decide day-to-day and domestic matters through rotas and elections, and participate in therapeutic decisions); permissiveness (wide tolerance of distressing or deviant behaviour within emotional safety); communalism (first names, shared amenities, shared meals and free communication); reality confrontation (the continuous interpersonal feedback of the small-group and community meetings). The roles carry it: members explain the community to visitors and new arrivals, take responsibility for tasks and extras (teaching, research), notice and include the isolated, use identification to challenge or support peers, and support those in crisis, including out of hours; staff spend informal time (the aloof get challenged), work alongside members, use group interventions across modalities (group-analytic, psychodrama, art therapy, CBT), maintain the structures, and monitor each other's emotional involvement in supervision. The four-phase journey (engagement, assessment and preparation, the main treatment, leaving) runs the arc.", whenToUse: "The severe personality disorders, self-harm and disorders of relationship that individual therapy struggles to hold: suitability judged against a particular community at a particular time.", indianContext: "Scarce teaching-institution programmes only; the district's realistic access is the principle-level import (below), but the full model's selection discipline and standards travel even where the residential unit cannot." },
    { category: "psychotherapy", name: "The concept-based addiction TC", description: "The hierarchical variant: the Synanon (1958) → Phoenix House and Daytop lineage, running in 50+ countries; structured programmes of confrontational education, shared work, seniority hierarchies and community sanctions, treating drug dependence. The honest evidence line: effective within its indications, with the motivation caveat (motivation selects; longer stays do better) and the rule that current physical dependence detoxifies BEFORE entry. The contraindication is sequencing, not the population.", whenToUse: "Drug dependence after detoxification, where the motivation read is genuine: the caveat quoted to every family as the honest frame.", indianContext: "This is the form India already runs: the 84+ government-funded DD centres and the NGO network; the evidence and its caveat applying directly; the democratic model reserved for the PD and rehabilitation populations it suits." },
    { category: "psychotherapy", name: "The prison therapeutic community", description: "Treating what prisons punish: the accredited core model for disruptive, violent inmates with underlying antisocial PD; the structured variant built for the population the democratic contraindication list excludes. The evidence: Grendon's reconviction data; lower reconviction, fewer custodial sentences and fewer violent reconvictions for stays beyond 18 months versus waiting-list controls; the German Social Therapeutic Institution data in the same direction; Wexler's American prison-TC RCTs adding the aftercare lesson: the gains riding on planned continuation after release.", whenToUse: "The disruptive, violent prisoner volunteering for the community: the self-selection that is itself prognostic.", indianContext: "No Indian equivalent exists; the relevance is the principle (the structured community as the answer to the population custody only punishes) and the honest reading that the antisocial-PD exclusion belongs to the democratic model alone." },
    { category: "psychotherapy", name: "The Soteria house (the psychosis alternative)", description: "The anti-psychiatry lineage's surviving contribution: small, low-stress, family-like environments for first-episode psychosis; intensive interpersonal support, minimal neuroleptic medication, the crisis worked with rather than sedated. The trials' verdict: at two years, outcomes at least as good as usual hospital treatment with less antipsychotic medication prescribed; the provocative finding that keeps Soteria in the conversation; the houses surviving mainly in Europe.", whenToUse: "First-episode psychosis where the family and the team seek a low-medication environment, with the honest caveat that the Indian import is the principle (low-stress, family-like, minimal-medication), not the institution.", indianContext: "The kinship is indigenous: India's spiritual communes and ashrams ran Soteria-like environments long before the term. The formal version's evidence discipline is the addition the import carries." },
    { category: "lifestyle", name: "The ward and day-centre import (the therapeutic environment)", description: "The model's most scalable form: the 'therapeutic environments' movement importing whole-community meetings, shared activity and the enquiry culture into ordinary acute wards; the antidote to toxic institutions. The zero-cost package for any facility: the whole-group meeting (staff and residents together), the shared work and meals, the discussable-everything rule, emotional safety, participation in joining, tolerance of disturbance, and positive risk-taking; the Core-Standards sample as the quality framework.", whenToUse: "Every setting that cannot mount the residential model but can mount its principles: day-care centres, halfway homes, deaddiction facilities, ward routines.", indianContext: "The note's India answer: NIMHANS-style day hospitals and district DMHP rehabilitation adopting the Core-Standards sample at zero cost; no new technology, only the meeting, the shared work and the discipline." },
  ],
  safety: {
    redFlags: [
      "The currently physically dependent resident admitted without detoxification: the medical emergency the communal day cannot safely hold; the sequencing decided before the referral letter is written",
      "Current mania or severe depressive retardation arriving as a TC referral: the state treated first; the placement re-asked after recovery (a second look that often succeeds where the first would have failed)",
      "Dangerously low weight: a medical emergency, not a communal one; the eating-disorder admission belongs to the medical unit first",
      "The sexual perpetrator in a permissive community: the risk to other residents that no tolerance can justify; the exclusion that protects the treatment itself",
      "Antisocial PD with a history of intimidation and deception: the member who weaponises the community's openness; the democratic model's clearest exclusion (the prison TC being the modified exception)",
      "The Erwadi pattern: unregulated 'community care' without enquiry, standards or oversight; the 2001 fire that killed chained mentally ill patients is the category's name: report it, do not refer to it",
    ],
    urgentGuidance:
      "The order of operations: (1) the contraindication sweep before any placement decision; the state treated first, the dependence detoxified first, the risk categories excluded; (2) suitability judged against a particular community at a particular time, never against 'therapeutic communities' in the abstract; (3) the crisis inside the programme treated as learning material: the meeting called, the reality confrontation delivered, the permissiveness held within emotional safety, positive risk-taking distinguished from negligence; (4) the community's own functioning monitored as clinical work (the parallel process); (5) any communal setting failing the three tests (enquiry, standards, oversight) named as the Erwadi category and reported; (6) the leaving phase planned from entry: the culture-carrier role, the follow-on support, the alumni link; the community reproducing itself safely on the way out.",
  },
  drugLinks: [],
  contentGaps: [
    "No pharmacology is this course's territory: the treatment is an institution, not a molecule. The prescription pad for this course is a meeting schedule, not a tablet.",
    "Soteria's minimal-neuroleptic discipline (antipsychotics used sparingly, deliberately) has no KYP drug lessons. The medication-sparing philosophy is taught here, the route never invented.",
    "The comorbid-depression rider tier that travels with severe personality disorder has its KYP lessons (sertraline and relatives) taught in the disease courses: the boundary documented so this course invents no routes.",
    "The detoxification that must precede addiction-TC entry (the physically dependent contraindication) belongs to the substance-use courses: referenced, not duplicated, here.",
    "TC staff-training curricula (including the simulated TC, 20–30 professionals living together as residents) have no KYP lesson. The training model is taught within this course.",
  ],
  patientGuide: {
    whatIsIt:
      "A therapeutic community is a place where the treatment is the community itself: everyone (staff and residents together) meets regularly, works and eats side by side, uses first names, shares the decisions, and treats the difficulties of living together as the very material of the therapy. It runs on four principles worked out at the Henderson Hospital in England: democratisation (everyone shares the decision-making), permissiveness (distressing and difficult behaviour is tolerated, within safety), communalism (the tight-knit shared life) and reality confrontation (people tell you, honestly but kindly, how your behaviour lands on them). It is chiefly for severe personality disorder, self-harm and the disorders of relationship; modified forms treat offending, addictions and (in the Soteria houses) first-episode psychosis.",
    whatCausesIt:
      "Nothing is being 'fixed' by medicine here (the idea it runs on is simple: (1) staff are not completely well and residents are not completely sick) people are people; (2) whatever the symptoms, the difficulties are mainly difficulties in relationships; and (3) therapy is essentially learning. So the community arranges for the learning to happen where the difficulties happen, in the shared life itself. The deepest version is Haigh's: the five essential experiences (attachment, containment, communication, inclusion, agency) that healthy development normally supplies; re-supplied by the community, and re-learned as an adult.",
    symptoms:
      "What the programme asks of the resident: attending the community meetings (the whole community together), joining the shared work (kitchen, garden, cleaning (alongside the staff), keeping the daily routine, giving and receiving honest feedback, supporting peers through crises (sometimes out of hours), and) over time, taking responsibility for new members and for the community's decisions. Crises are not failures of the programme; they are its raw material. And the leaving phase is part of the treatment: becoming one of the people who explains the community to newcomers.",
    treatment:
      "The journey has four phases: engagement (meeting the community, often with help from current or former members); assessment and preparation (the practical planning (childcare, accommodation, medication and risk plans) and the contract, often through a time-limited preparation group); the main treatment (the meetings, the shared life, the roles); and leaving (the graduation into the culture-carrier role). The honest evidence: the largest systematic review found a significant pooled benefit; reviewers judged the model 'the most promising evidence base' for severe personality disorder; prison communities cut reconviction for stays beyond 18 months; Soteria matched hospital care with less medication. The caveats: motivation matters, longer stays do better, and the selection list (who should NOT go) is as much a part of the treatment as the programme.",
    selfHelp: [
      "Ask the questions the Core-Standards sample asks of any facility: does the whole community meet? do staff and residents work and eat together? can anything be discussed? is distress tolerated? do members participate in joining? is positive risk-taking allowed?",
      "The family's role in the practical planning (childcare, accommodation, the medication plan) is part of the treatment, not paperwork; hold up your end of it.",
      "Expect crises to be worked with, not punished: the meeting called after the storm is the treatment working, not failing.",
      "The longer-stay truth: the evidence rewards stays that get past the difficult middle; ask what the community's own typical stay is, and what its leaving phase looks like.",
      "The selection honesty: this model is not for everyone and not for every week; the mania treated first, the dependence detoxified first, the question re-asked later.",
    ],
    whenToSeekHelp: [
      "Rising distress in the first weeks that the community cannot contain: reviewed at the contract's terms, not endured",
      "Any return of physical dependence during the stay: medical management first, the communal phase after",
      "Weight falling dangerously: a medical emergency the communal setting cannot hold",
      "Any intimidation, exploitation or abuse: reported immediately; permissiveness never extends to danger",
      "A 'community care' setting failing the three tests: nothing discussable, no standards, no oversight: the Erwadi category; leave and report",
    ],
    indianResources: [
      "The district deaddiction centres (84+ government-funded) and the NGO network: the concept-based tier that exists today",
      "NIMHANS-style day hospitals and the DMHP district rehabilitation tier: the natural homes of the principle-level import",
      "Tele-MANAS 14416 (24×7, free), for the family's distress and the referral conversation",
      "The Core-Standards sample checklist: ask the treating team for the eight-question version at the next visit",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific therapeutic-community standard exists; the reference framework is the Community of Communities' Core Standards (Royal College of Psychiatrists, 2006): the 16 standards and their eight-question sample serving as both quality machinery and the zero-cost audit for Indian facilities. The regulation of healing institutions remains the public-health demand, with the Erwadi fire (2001) its standing justification.",
    systemContext: "The referral reality: the 84+ government-funded deaddiction centres and a large NGO network largely run the hierarchical, concept-based model; democratic TCs for personality disorder survive only as scarce teaching-institution programmes; the district DMHP tier and NIMHANS-style day hospitals are the natural import sites for the principle level; families arrive carrying the practical planning (childcare, accommodation, medication) that the assessment phase formalises.",
    programmeContext: "The import hierarchy: (1) the day-centre adoption of the Core-Standards sample (whole-group meetings, shared work, discussable everything, positive risk-taking) at zero cost; (2) the deaddiction network's existing concept-based communities, run honestly with their evidence and the motivation caveat; (3) the scarce residential democratic TC, staffing-intensive and urban. The trained-staff scarcity (the binding constraint) addressed through the simulated-TC training model (20–30 professionals living together for days as residents), the most relevant import for Indian teaching institutions.",
    costConsiderations: "Residential TCs are the expensive form: staffing-intensive (approx 2026: the staff-to-responent ratio is the cost, not the building); the principle-level import costs nothing; government TC-type addiction beds already exist in the DD network; the scarce resource is trained staff, which is why the training model matters more than the construction budget.",
    culturalConsiderations: "India has always run community-based care: temple healing communities, ashrams, Soteria-like spiritual communes and Gandhian intentional communities; the l'Arche and Camphill analogues; the TC formalises what these do intuitively (community as the treatment, shared work, participation) and adds the enquiry culture and the evidence discipline. The Erwadi warning runs alongside: the 2001 fire that killed chained mentally ill patients in a faith-healing institution; unregulated 'community care' without enquiry, standards or oversight kills; the regulation conversation is the clinical conversation, and endorsing a communal setting without the three tests (enquiry, standards, oversight) is the referral error the course exists to prevent.",
    patientCounselling: [
      "The one-line definition: 'The treatment here is not a tablet and not a room. It is the community itself: the meetings, the shared work, the honest feedback, and the decisions you will help make.'",
      "The expectations script: 'The first weeks are the hardest, and the crises are the curriculum. The meeting called after the storm is the treatment working, not failing.'",
      "The selection honesty: 'This model is not for everyone and not for every week; the mania treated first, the dependence detoxified first, the question re-asked later, against this community at this time.'",
      "The day-centre script: 'Your centre already has the people and the building; we are adding the meeting, the shared work and the rules that make them therapeutic: the standards cost nothing.'",
      "The Erwadi script: 'Community care without standards is not kindness. Ask the three questions: can anything be discussed here, are there standards, and who oversees?'",
      "The family's part: 'The practical planning (who cares for the children, where he stays, what the medication plan is) is not paperwork; it is the treatment's front door.'",
    ],
  },
  decisionPath: {
    title: "The therapeutic-community referral: the selection discipline",
    nodes: [
      {
        id: "start",
        question: "A difficult, treatment-resistant presentation, and someone proposes a therapeutic community. First: which model, which population?",
        branches: [
          { label: "Severe personality disorder, self-harm, disorders of relationship", next: "pd-gate" },
          { label: "Disruptive or violent prisoner", next: "prison-path" },
          { label: "Drug dependence, currently using", next: "addiction-path" },
          { label: "First-episode psychosis, family asking about minimal medication", next: "soteria-path" },
        ],
      },
      {
        id: "pd-gate",
        question: "The democratic TC's chief population, but before anything: the contraindication sweep.",
        branches: [
          { label: "Sweep clear (euthymic, abstinent, socially capable)", next: "engagement-path" },
          { label: "Red flags on the sweep", next: "contra-gate" },
          { label: "No residential TC exists here", next: "principles-path" },
        ],
      },
      {
        id: "contra-gate",
        question: "The list that protects the community and the non-indicated patient alike.",
        recommendation: "Current mania or severe retardation: treat the state first, reconsider after recovery. Current physical dependence: detoxification first. Learning disability, dementia or no capacity for social involvement: the communal intensity will be experienced as intrusion, not treatment. Sexual-abuse perpetration: the risk to other residents no permissiveness can justify. Dangerously low weight: a medical emergency, not a communal one. Antisocial PD with intimidation and deception: the member who weaponises the community's openness. The 'only experts can help' conviction: wait; the model runs on members, not experts.",
      },
      {
        id: "engagement-path",
        question: "The four-phase journey opens: engagement, not admission.",
        recommendation: "Referral or self-referral; the wary prospective member supported: often by current or ex-members through voluntary agencies or internet groups; existing mental-health support explicitly continued; the family engaged at the practical-planning tier (childcare, accommodation, medication and risk plans); the time-limited assessment and preparation group attended as a foretaste, the treatment contract drawn from it.",
        branches: [
          { label: "Contract agreed, the preparation group completed", next: "treatment-path" },
          { label: "The planning fails (childcare, accommodation, distance)", next: "principles-path" },
        ],
      },
      {
        id: "treatment-path",
        question: "The main treatment phase: the living-learning engine at full power.",
        branches: [
          { label: "A crisis erupts", next: "crisis-path" },
          { label: "The months pass; the ending approaches", next: "leaving-path" },
        ],
      },
      {
        id: "crisis-path",
        question: "The crisis as the curriculum's densest seminar.",
        recommendation: "The community meeting called the same day; the events examined, not punished: reality confrontation (the members' interpretations delivered and received), permissiveness held within emotional safety (distress tolerated, danger bounded), the learning named in the small group afterwards; positive risk-taking essential to change, distinguished from negligence by the risk plans and the review. The episode documented as treatment, because it is.",
      },
      {
        id: "leaving-path",
        question: "The leaving phase: the graduation into culture-carrier.",
        recommendation: "The responsibilities handed over: explaining the community to new arrivals and visitors, the out-of-hours peer support role, participation in selecting the next member; the follow-on support and alumni link arranged before the door; the leaving meeting chaired by the leaver: the community reproducing itself on the way out.",
      },
      {
        id: "prison-path",
        question: "The prison TC: treating what prisons punish.",
        recommendation: "The accredited core model for disruptive, violent inmates with underlying antisocial PD: the structured, hierarchical variant built for the population the democratic contraindication list excludes (confusing the two models is the commonest senior-level error). The dose finding quoted at selection: stays beyond 18 months delivering lower reconviction, fewer custodial sentences and fewer violent reconvictions versus waiting-list controls; Wexler's American lineage: the aftercare planned from entry, not at exit.",
      },
      {
        id: "addiction-path",
        question: "The concept-based addiction TC (the hierarchical form).",
        recommendation: "The Synanon → Phoenix House and Daytop lineage, running in 50+ countries. India's 84+ government-funded deaddiction centres and NGO network largely run this form. The sequencing rule first: current physical dependence detoxifies BEFORE entry. The motivation caveat quoted honestly: motivation selects, longer stays do better; the self-referred resident outperforming the conscripted one, and the family told so.",
      },
      {
        id: "soteria-path",
        question: "The Soteria form: the first-episode psychosis alternative.",
        recommendation: "Small, low-stress, family-like; intensive interpersonal support with minimal neuroleptic medication. The trials' finding quoted to the family: at two years, outcomes at least as good as usual hospital treatment with less antipsychotic prescribed, with the honest note that the model survives mainly in Europe; the Indian import is the principle (low-stress, family-like, minimal-medication environments), not the institution.",
      },
      {
        id: "principles-path",
        question: "No TC available, or none suitable. Import the principles.",
        recommendation: "The whole-community meeting (staff and residents together), the shared work and meals, the discussable-everything rule, emotional safety, participation in joining, tolerance of disturbance, positive risk-taking: the Core-Standards sample as a zero-cost quality framework for a district day-care centre, halfway home or ward routine; the simulated-TC course (20–30 professionals living together for days as residents) as the staff-training route where the trained-staff scarcity binds.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating the therapeutic community as 'just a nice ward'",
      why: "A pleasant environment is not a therapeutic one: the TC is a treatment method with a theory (relational difficulty, learning), a structure (meetings, shared life, participation, enquiry), standards and an evidence base, and the difference is deliberateness.",
      correction: "Audit the facility against the Core-Standards sample: whole-community meetings, shared work and meals, discussable everything, emotional safety, participation in joining, tolerance of disturbance, positive risk-taking. An institution that cannot show them is pleasant, not therapeutic.",
    },
    {
      mistake: "Sending the acutely manic or severely retarded-depressed patient",
      why: "The acute state cannot participate; the community's permissiveness becomes a stage for the illness; and the placement fails both the member and the group.",
      correction: "Treat the state first; the TC question reopens at recovery: suitability judged against a particular community at a particular time, and the second look often succeeding where the first would have failed.",
    },
    {
      mistake: "Admitting the currently physically dependent resident",
      why: "Withdrawal needs medical management the communal day cannot safely hold: the clearest contraindication on the list.",
      correction: "Detoxification first, the community second: the sequencing decided before the referral letter is written, not after the first crisis on the ward.",
    },
    {
      mistake: "Forgetting the second parallel process: the community's own functioning",
      why: "Managing treatment means two processes: each resident's progress AND the community's effective functioning; the staff who track only individuals miss the group that has quietly turned toxic. The institutional dynamics the model exists to answer.",
      correction: "The community's functioning on every agenda: staff monitoring each other's emotional involvement in supervision, and the meetings' attendance and quality reviewed as clinical signs, not administration.",
    },
    {
      mistake: "Staff keeping the professional distance",
      why: "The aloof get challenged: the literature says so directly; a staff group that will not work alongside, eat with or informally spend time with members re-erects the status hierarchy the treatment dismantles.",
      correction: "The shared task as the rule: staff and members working side by side on the day-to-day jobs; informal time counted as clinical work, because in this model it is.",
    },
    {
      mistake: "Mistaking any community-based care for a therapeutic community",
      why: "The Erwadi lesson: the 2001 fire that killed chained mentally ill patients in a faith-healing institution; 'community care' without enquiry, standards or oversight is not the soft option but the lethal one.",
      correction: "The three tests before endorsing any communal setting: is difficulty discussable (the enquiry culture), are there standards (the Core-Standards sample), is there oversight (the quality network); three no's, and the place is Erwadi waiting.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define the therapeutic community in Main's and Jones's words, and explain 'the community is the treatment'.",
        "The three defining beliefs and Rapoport's four Henderson principles, with one operational example of each principle.",
        "The Core-Standards sample (eight of the 16) as the modern practice of the four principles.",
        "The historical chain: Geel → York Retreat → Northfield → Cassel and Henderson → decline → revival, with the parallel Synanon and Soteria streams.",
        "Five contraindications and the 'particular community at a particular time' caveat.",
      ],
      practical: [
        "Audit a local facility against the Core-Standards sample: the eight-question exercise this course's Indian tier is built on.",
        "Construct a four-phase journey plan (engagement → assessment and preparation → main treatment → leaving) for a given referral, naming the resident-participation rule at each gate.",
      ],
      longAnswer: [
        "The therapeutic community: definition, principles, technique and evidence; the evergreen essay.",
        "'The community is the treatment': discuss with reference to the Henderson principles, the prison therapeutic communities and the Indian day-centre import.",
      ],
    },
    neetPg: {
      highYield: [
        "THE FOUR PRINCIPLES: democratisation, permissiveness, communalism, reality confrontation (Rapoport, the Henderson Hospital); the one-line answer to the commonest MCQ.",
        "THE THREE BELIEFS: staff not completely well / residents not completely sick; difficulties primarily relational; therapy is learning.",
        "THE ESSENCE-PHRASES: the living-learning situation (especially crises) and the culture of enquiry; the technique in two phrases.",
        "HAIGH'S FIVE: attachment, containment, communication, inclusion, agency; the developmental model (primary re-worked through secondary development).",
        "THE LEES REVIEW: 8,000 references across 38 countries → 29 studies; significant pooled effect, summary log odds ratio −0.567; 19 of 29 positive at 95% confidence, none negative.",
        "THE PD VERDICT: 'the TC model currently has the most promising evidence base in this poor field' (the Home Office severe-PD review).",
        "GRENDON: stays beyond 18 months → lower reconviction, fewer custodial sentences, fewer violent reconvictions versus waiting-list controls.",
        "SOTERIA: 2-year outcomes at least as good as hospital treatment with less antipsychotic medication; the first-episode psychosis alternative.",
        "THE CONTRAINDICATION LIST: current physical dependence, current mania, severe retardation, learning disability, dementia, sexual perpetration, dangerously low weight, antisocial PD with intimidation and deception, no capacity for social involvement, 'only experts can help'.",
        "THE HISTORY CHAIN: Geel (fourteenth century) → York Retreat (1796) → Northfield (1943–46: Bion, Main, Foulkes, Bridger; Maxwell Jones at Mill Hill) → the Cassel and the Henderson (1958; Webb House 2000) → decline → revival; Synanon (1958) → Phoenix House and Daytop in 50+ countries.",
        "THE SIMULATED TC: 20–30 professionals living together for days as residents; the most popular short training format.",
      ],
      pyqConcepts: [
        "The four-principles MCQ: the answer pattern that repeats across every exam tier.",
        "The evidence-numbers question: the Lees log odds ratio (−0.567) and the Grendon 18-month finding as the two most quotable figures.",
        "The contraindication stem: 'which of the following is a contraindication'; antisocial PD with a history of intimidation and deception as the classic answer.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 27-year-old woman with severe emotionally unstable personality disorder, recurrent self-harm and twelve admissions in three years, referred after two breakdowns of individual therapy with the letter proposing 'a therapeutic community': the sweep first: no mania, no retardation, no current physical dependence, capacity for social involvement present; the engagement arranged with an ex-member's support and the existing outpatient care explicitly continued; the assessment-and-preparation group attended as a foretaste, with her son's childcare, her accommodation and the medication and risk plans forming the contract; the main treatment's middle-month crisis (a furious confrontation after a community decision) handled as the living-learning material: the meeting called the same evening, the reality confrontation delivered and received, the permissiveness held within emotional safety; the leaving phase: the culture-carrier role, with two new arrivals shown round in her final month. The examination points: the contraindication sweep, the four-phase gates, the crisis as curriculum, the participation rules at every gate.",
        "A district programme officer with a DMHP day-care centre and a deaddiction facility under one roof, asked by a family about 'community treatment' for their son, and the Erwadi memory in the room: the answer built on the three tests (enquiry, standards, oversight): the day centre adopting the Core-Standards sample (the whole-group meeting, shared work, discussable everything, positive risk-taking) at zero cost; the deaddiction centre's concept-based model run honestly with the motivation caveat and the detoxification-first rule; and the unregulated faith-healing 'community care' the family had also been considering named as the Erwadi category (community care without enquiry, standards or oversight) and reported rather than endorsed. The simulated-TC training (20–30 professionals living together for days as residents) proposed for the district's staff as the scarce-resource answer.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The four Henderson principles: democratisation, permissiveness, communalism, reality confrontation.",
        "The Lees verdict: a significant pooled effect for TC treatment in personality disorder and mentally disordered offenders.",
        "Grendon: the beyond-18-month dose; Soteria: equal-or-better 2-year outcomes with less medication.",
        "Contraindications: current physical dependence, mania, severe retardation, dangerously low weight, antisocial PD with intimidation and deception.",
        "Geel (fourteenth-century Belgium) as the oldest ancestor; Erwadi (2001) as the modern warning.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The convergence question: the TC's outcomes ride on a structure the trials cannot fractionate (meetings, shared life, participation, enquiry) which is why the 'therapeutic environments' movement (importing the same elements into ordinary acute wards) is the model's most scalable form, not its diluted one.",
        "The contraindication list is a clinical instrument, not a legal text: the same patient can be contraindicated this year and indicated next; and the antisocial-PD exclusion is the DEMOCRATIC model's. The prison TC was built for exactly that population, and confusing the two models is the commonest senior-level error.",
        "The motivation mathematics: every TC evidence line carries the self-selection caveat (motivation selects, longer stays do better) so the engagement phase (the ex-member support, the preparation group) is not administrative padding but an effect-size variable.",
        "The staff-group work IS the treatment's maintenance: monitoring each other's emotional involvement in supervision, the aloof challenged, the informal time counted as clinical; the parallel process (each resident's progress AND the community's functioning) that separates a therapeutic community from a well-meaning one.",
        "The Indian scaling logic: the building and the staffing are the constraints, never the principles; the whole-community meeting imports into any ward round; the eight-question Core-Standards audit costs nothing; and the trained-staff scarcity is answered by the simulated TC, the cheapest training format the field owns.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The ward that became a community",
      presentation: "Twelve admissions in three years for self-harm, and what finally held her was a rota, a shared kitchen, and a meeting.",
      initialPresentation: "A 27-year-old woman with severe emotionally unstable personality disorder and recurrent self-harm (twelve admissions in three years, two breakdowns of individual therapy) was referred to a democratic therapeutic community attached to a teaching hospital's personality-disorder service. The referral followed the pattern the model exists for: the crises had outgrown every one-to-one containment the service could offer, and the therapy itself had twice broken on therapist changes that re-enacted the loss they were meant to repair.",
      history: "Self-harm from the mid-teens; comorbid depressive episodes treated in parallel; no psychotic episodes; no current physical dependence; the capacity to relate informally and intimately demonstrated in fragments: a best friendship held for years, an alliance with one nurse through every admission. The contraindication sweep at referral: clear. The practical planning: her son's childcare arranged through the grandmother, accommodation held, medication and risk plans written into the contract. The time-limited assessment and preparation group attended as a foretaste.",
      examination: "At assessment: guarded, testing, openly sceptical ('another programme that will leave'); self-harm scars of several vintages; no active ideation at the interview; the engagement supported by an ex-member of the community through the voluntary-agency link, and the existing outpatient support explicitly continued rather than withdrawn.",
      diagnosis: "Severe personality disorder with recurrent self-harm: the democratic therapeutic community's chief indication, suitability judged against this community at this time.",
      management: "The four-phase journey: engagement (the ex-member support, the existing care continued); assessment and preparation (the childcare, accommodation, medication and risk plans; the contract drawn from the preparation group); the main treatment: the small-group and community meetings, the shared work (the kitchen rota, the garden), first names, the member roles (showing a new arrival round, noticing and including the isolated); a middle-month crisis (a furious confrontation after a community decision) handled as the living-learning material: the meeting called the same evening, the reality confrontation delivered and received, the permissiveness held within emotional safety; leaving: the graduation into the culture-carrier role.",
      outcome: "The crisis pattern migrated over the treatment year: from the casualty department to the community meeting; the self-harm events thinning as the meetings took the load, the difficulties increasingly spoken before they were enacted. At leaving, she chaired her own leaving meeting and had shown two new arrivals round in her final month; the individual therapy taken up afterwards held, this time, past the first rupture.",
      teachingPoints: [
        "The community is the treatment: the crises moved from casualty to the community meeting; the living-learning situation in action.",
        "The four principles operationalised: she voted on the domestic rota (democratisation); her worst evenings were tolerated without exclusion (permissiveness); first names and shared meals dismantled the hierarchy (communalism); the feedback after the confrontation was delivered and received (reality confrontation).",
        "The selection discipline did the work before the treatment began: the contraindication sweep clear, the suitability judged against a particular community at a particular time, the practical planning (childcare, accommodation, medication) treated as the treatment's front door.",
        "The leaving phase is treatment too: the culture-carrier role; the member who explains the community to the next wary prospective is the community reproducing itself.",
      ],
    },
    {
      title: "The prison that treated what it punished",
      presentation: "The prison's most disruptive inmate, and the reconviction data that vindicated the community that took him.",
      initialPresentation: "A 32-year-old repeat-violent prisoner in England (repeatedly segregated for assaults on staff and inmates, his custody defined by the segregation unit's revolving door) was accepted into the prison's therapeutic community, the Grendon model, after the ordinary channels of custody had failed on both sides: the prison could not manage him, and he could not stop. The referral the prison TC exists to receive: the disruptive, violent inmate with the underlying antisocial personality disorder that mainstream custody only punishes.",
      history: "Violence-driven sentences since the late teens with escalating institutional misconduct; underlying antisocial personality disorder never formally treated; no psychotic illness; the capacity for social involvement demonstrated in fragments (a work detail held for a year, a literacy mentorship taken seriously); the self-referral to the community voluntary: the motivation read that the prison-TC evidence itself flags as prognostic.",
      examination: "The community's assessment: capacity for social involvement present; no active mental illness; motivation genuine by its only available test: the volunteering. The model-matching note recorded explicitly: the democratic hospital TC's contraindication (antisocial PD with intimidation and deception) does not apply here. The prison TC is the structured, hierarchical variant built for exactly this population.",
      diagnosis: "Antisocial personality disorder with recurrent violent offending: the prison therapeutic community's population.",
      management: "The accredited prison-TC core model: the small-group and community meeting programme, the shared work, the structured day with clear expectations, the confrontation delivered inside a hierarchy that holds rather than excludes; the stay extending beyond 18 months (the dose the reconviction data rewards) against waiting-list controls; the aftercare planned from entry rather than at the gate.",
      outcome: "Against the waiting-list comparison the programme's own research had established: lower reconviction, fewer custodial sentences, fewer violent reconvictions for the beyond-18-month stay; the dose-response finding quoted at his own review; the discipline reports thinning in the community's middle months, the literacy mentorship resumed and kept, the aftercare taken up at release.",
      teachingPoints: [
        "Prison TCs treat what prisons punish: disruptive, violent inmates and the underlying antisocial PD; the accredited core model with reconviction data behind it.",
        "The dose finding: stays beyond 18 months deliver the reductions. Lower reconviction, fewer custodial sentences, fewer violent reconvictions versus waiting-list controls; the shorter stay is the wasted placement.",
        "The contraindication list is model-specific: antisocial PD with intimidation and deception excludes from the DEMOCRATIC TC. The prison TC is the modified, structured exception, and confusing the two is the commonest senior-level error.",
        "Motivation selects: the volunteering is itself prognostic. The engagement phase is an effect-size variable, not paperwork.",
      ],
    },
  ],
  clinicalPearls: [
    "The community is the treatment: Main's full-participation-and-resocialisation definition and Jones's 'change in the usual status of patients'; the two sentences every exam answer opens with.",
    "The four Henderson principles: democratisation, permissiveness, communalism, reality confrontation. Rapoport's quartet from the Henderson Hospital study.",
    "Three defining beliefs: staff are not completely well and residents are not completely sick; the difficulties are primarily relational; therapy is essentially learning.",
    "The two essence-phrases: the living-learning situation (crises especially) and the culture of enquiry; the technique in eight words.",
    "Haigh's five essential experiences: attachment, containment, communication, inclusion, agency; primary emotional development re-worked through secondary.",
    "The Lees review: 8,000 references across 38 countries to 29 studies; a significant pooled effect, log odds ratio −0.567; 19 of 29 positive at 95% confidence, none negative.",
    "'The TC model currently has the most promising evidence base in this poor field': the Home Office severe-PD review's verdict, qualifier and all.",
    "Grendon: stays beyond 18 months. Lower reconviction, fewer custodial sentences, fewer violent reconvictions versus waiting-list controls.",
    "Soteria: first-episode psychosis at two years, at least as good as hospital treatment, with less antipsychotic medication.",
    "The contraindication shortlist: current mania, severe retardation, current physical dependence, learning disability, dementia, sexual perpetration, dangerously low weight, antisocial PD with intimidation and deception, no capacity for social involvement, 'only experts can help'.",
    "The history chain in one breath: Geel → York Retreat → Northfield → the Cassel and the Henderson (1958) → decline → revival; Synanon (1958) → Phoenix House and Daytop in 50+ countries.",
    "The simulated TC: 20–30 professionals living together for days as residents; the most popular short training format, and the cheapest answer to the trained-staff scarcity.",
    "Erwadi 2001: chained patients dying in an unregulated faith-healing institution; community care without enquiry, standards or oversight kills; the Indian lesson and the regulation argument.",
  ],
  highYieldSummary: [
    "Definition and beliefs: Main (1946); the hospital as a community with full participation as the immediate aim and resocialisation as the eventual one; Jones: the total pooling of the institution's resources, 'above all, a change in the usual status of patients'; residents, clients or members, never patients. Three defining beliefs: staff are not completely well nor residents completely sick; the difficulties are primarily in relationships; therapy is essentially a learning process.",
    "The principles and the standards: Rapoport's four from the Henderson Hospital (democratisation, permissiveness, communalism, reality confrontation); operationalised today through the Community of Communities' 16 Core Standards (2006), the eight-standards sample: whole-community meetings; staff working alongside members; shared meals; discussable everything; emotional safety; participation in joining; tolerance of disturbed behaviour and emotional expression; positive risk-taking as essential to change.",
    "The history: Geel (fourteenth-century Belgium) → the York Retreat (1796, moral treatment) → therapeutic education → Northfield (Bion's failed 1943 attempt, then Main, Foulkes and Bridger; Maxwell Jones at Mill Hill; the 1946 papers) → the Cassel and the Henderson (1958; Main House and Webb House 2000) → the 1970s–80s individualist decline → the 1990s–2000s revival (prisons, PD services, community rehabilitation; the 'therapeutic environments' movement the direct echo), with the parallel streams: Synanon (1958) → Phoenix House and Daytop (50+ countries), and Soteria.",
    "The technique: the living-learning situation (everything between members, especially crises, as learning material) and the culture of enquiry (dogma challenged); the re-enactment of outside difficulties inside, with the small-group and community meetings as the examination hall; Haigh's five essential experiences (attachment, containment, communication, inclusion, agency) re-working primary through secondary emotional development; the four-phase journey (engagement, assessment and preparation, main treatment, leaving) with residents participating in selection and joining.",
    "The evidence: Lees et al (1999, CRD Report 17); 8,000 references across 38 countries distilled to 29 studies; a significant pooled effect (log odds ratio −0.567), 19 positive at 95% confidence, none negative. Warren et al (2003): 'the most promising evidence base in this poor field' for severe personality disorder. Grendon: lower reconviction, fewer custodial sentences, fewer violent reconvictions for stays beyond 18 months versus waiting-list controls; Wexler's American prison-TC RCTs and the aftercare lesson. Soteria: 2-year outcomes at least as good as hospital with less antipsychotic medication. The addiction-TC evidence with the motivation caveat (motivation selects; longer stays do better). The honest gap: no direct comparisons against other intensive models.",
    "The selection discipline: indications; personality disorder above all, self-harm, adjustment, recurrent depressive, bipolar, anxiety and eating disorders, offending, addictions, severe and enduring illness, first-episode psychosis (Soteria form). Contraindications: current physical dependence, current mania, severe retardation, learning disability, dementia, sexual-abuse perpetration, dangerously low weight, antisocial PD with intimidation and deception, no capacity for social involvement, the 'only experts can help' belief. Every judgement against a particular community at a particular time. Staffing: the skill argument won; high knowledge plus well-developed reflective capacity; courses in the UK, Finland, Norway, the Netherlands and Greece without a set standard; the simulated TC (20–30 professionals living together for days as residents) the most popular short format.",
    "The Indian tier: the model's cheapest export (whole-community meetings, shared work and meals, resident participation in decisions) imports into day-care centres, halfway homes, deaddiction facilities and ward routines without any new technology; the 84+ government-funded DD centres and the NGO network already run the concept-based form with its evidence and motivation caveat; NIMHANS-style day hospitals and DMHP rehabilitation can adopt the Core-Standards sample as a zero-cost quality framework; the trained staff, not the building, is the binding constraint (the simulated-TC training the answer); and the 2001 Erwadi fire (chained mentally ill patients dying in an unregulated faith-healing institution) the standing warning: community care without enquiry, standards or oversight kills.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "tc-quiz-1",
      question: "The four principles of therapeutic community treatment identified at the Henderson Hospital are:",
      options: ["Safety, sedation, segregation, staffing", "Democratisation, permissiveness, communalism, reality confrontation", "Medication, psychotherapy, occupational therapy, family therapy", "Admission, assessment, treatment, discharge"],
      correctIndex: 1,
      explanation: "Rapoport's quartet: equal decision-making power, wide behavioural tolerance, the tight-knit shared life, and the continuous interpersonal feedback that counters distortion, denial and withdrawal.",
      afterSectionId: "mechanism",
    },
    {
      id: "tc-quiz-2",
      question: "The systematic review by Lees and colleagues (1999) of TC treatment for personality disorder and mentally disordered offenders found:",
      options: ["No usable studies", "A significant positive pooled effect — summary log odds ratio −0.567 — across 29 qualifying studies", "Strongly negative effects overall", "Effects only for the concept-based addiction communities"],
      correctIndex: 1,
      explanation: "From over 8,000 references across 38 countries to 29 conservative-outcome studies, with 19 showing positive effects at 95% confidence and none negative.",
      afterSectionId: "diagnosis",
    },
    {
      id: "tc-quiz-3",
      question: "The Grendon prison therapeutic community reconviction studies found the greatest reductions among prisoners who:",
      options: ["Stayed less than three months", "Stayed longer than 18 months", "Refused treatment throughout", "Were transferred out within weeks"],
      correctIndex: 1,
      explanation: "The dose-response finding: lower reconviction, fewer custodial sentences, fewer violent reconvictions for stays beyond 18 months versus waiting-list controls.",
      afterSectionId: "management",
    },
    {
      id: "tc-quiz-4",
      question: "In the Soteria model trials for first-episode psychosis, the outcomes at two years were:",
      options: ["Worse than hospital treatment on all measures", "At least as good as usual hospital treatment, with less antipsychotic medication prescribed", "Identical in every respect including the medication", "Better only for affective disorders"],
      correctIndex: 1,
      explanation: "The low-stress, family-like, minimal-medication communities matched or beat hospital care — the provocative finding that keeps Soteria in the conversation.",
      afterSectionId: "management",
    },
    {
      id: "tc-quiz-5",
      question: "Which of the following is a recognised contraindication to therapeutic community treatment?",
      options: ["Personality disorder", "Self-harm", "Antisocial personality disorder with a history of intimidation and deception", "Recurrent depressive disorder"],
      correctIndex: 2,
      explanation: "With current mania, severe retardation, current physical dependence, dangerous low weight, sexual perpetration, and incapacity for social involvement — the selection list that protects the community and the non-indicated patient alike.",
      afterSectionId: "symptoms",
    },
    {
      id: "tc-quiz-6",
      question: "The phrase 'living-learning situation' refers to:",
      options: ["Classroom-based relapse prevention", "Using everything that happens in communal living, particularly crises, as the therapeutic learning material", "Vocational training only", "Distance education for residents"],
      correctIndex: 1,
      explanation: "Together with the culture of enquiry, the two essence-phrases of TC technique — the crisis is the curriculum's densest seminar.",
      afterSectionId: "mechanism",
    },
  ],
  activeRecallQuestions: [
    { question: "Quote Main's definition of the therapeutic institution and Jones's 'change in the status of patients', and explain what the two definitions share.", answer: "MAIN (1946): the hospital used 'not as an organization run by doctors in the interests of their own greater technical efficiency, but as a community with the immediate aim of full participation of all its members in its daily life and the eventual aim of the resocialization of the neurotic individual for life in ordinary society'. JONES: the way the institution's total resources (staff, patients, and their relatives) are self-consciously pooled in furthering treatment, implying above all a change in the usual status of patients. WHAT THEY SHARE: the treatment is not a technique delivered inside the institution but the institution's own daily life re-organised; full participation as the immediate aim, resocialisation as the eventual one, and the demotion of the patient role itself (residents, clients or members, never patients) as the operating condition. Every later element (the four principles, the Core Standards, the shared work and meals) is machinery for delivering those two sentences.", topic: "Definitions" },
    { question: "State the three defining beliefs and Rapoport's four Henderson principles, with one Core-Standards practice that operationalises each principle.", answer: "BELIEFS: (1) staff are not completely well and residents are not completely sick; basic human equality with shared psychological processes; (2) whatever the symptoms, the difficulties are primarily in relationships with other people; (3) therapy is essentially a learning process: skills for relating and managing distress, and understanding of self and others. PRINCIPLES (Rapoport, from the Henderson Hospital): democratisation; every member shares equally in decision-making power over community affairs, operationalised in the rotas and elections the members run; permissiveness: wide tolerance of distressing or seemingly deviant behaviour, operationalised in the Core Standard that disturbed behaviour and emotional expression are tolerated; communalism: the tight-knit shared life of first names, shared amenities and free communication, operationalised in the shared meals and shared work; reality confrontation: residents continuously presented with others' interpretations of their behaviour, operationalised in the community meeting's feedback, countering distortion, denial and withdrawal.", topic: "The model" },
    { question: "Recite the historical chain with dates and names.", answer: "GEEL (fourteenth-century Belgium): the sanctuary community; the oldest ancestor. YORK RETREAT (1796, Quaker): moral treatment; personal relationships and social expectations in a family-like atmosphere enabling previously dangerous individuals to control their behaviour. THERAPEUTIC EDUCATION: the Christian-love-plus-Freud residential schools for maladjusted children; their modern inheritors the intentional communities (l'Arche, Camphill). NORTHFIELD MILITARY HOSPITAL: Bion's brief failed 1943 attempt, then Main, Foulkes and Bridger; Maxwell Jones at Mill Hill; the 1946 papers coining the term. POST-WAR: Main at the Cassel (the continuing inpatient psychotherapy hospital); Jones at Belmont, renamed the HENDERSON (1958), which replicated into Main House and Webb House (2000) for national severe-PD provision. NHS ERA (1948): the TC approach against institutionalisation in the large mental hospitals. Barton's institutional neurosis and Goffman's total institution answered. DECLINE (1970s–80s): the individualist turn. REVIVAL (1990s–2000s): prisons, PD services and community rehabilitation; today's 'therapeutic environments' movement in acute wards the direct echo. PARALLEL STREAMS: Synanon (1958) → Phoenix House and Daytop, the concept-based addiction TCs in 50+ countries; and Soteria: small, low-stress, family-like psychosis communities, mainly in Europe.", topic: "History" },
    { question: "Explain the change mechanism: the two essence-phrases and how outside difficulties become inside treatment.", answer: "THE LIVING-LEARNING SITUATION: everything that happens between members in the course of living together (especially the crises) is treated as learning material: the quarrel over the kitchen rota is the pathology in vivo, and the community meeting called afterwards is its examination. THE CULTURE OF ENQUIRY: a staff culture of honest enquiry into difficulty, deliberately challenging dogma and accepted wisdom; the institution examining itself as routinely as it examines its members. THE MECHANISM: the TC supplies lifelike situations in which the member's outside relational difficulties are re-experienced (authority conflicts re-appearing against staff-coordinators; abandonment fears re-appearing at every leaving); the small-group and community meetings are the regular examination-and-learning forum where the re-enactment is recognised, named and understood rather than acted out. Two supports: the transmission system (new members adopt the values (openness, responsibility, active participation) and later pass them on, so the community reproduces its own culture) and the double management (each resident's progress AND the community's own effective functioning, with responsibility shared with residents when it works well).", topic: "Mechanism" },
    { question: "Haigh's five essential experiences: name them and explain the primary/secondary development model.", answer: "THE FIVE: attachment, containment, communication, inclusion, agency; mapped by Haigh across psychological theories and TC structures. THE MODEL: the proposal that disturbed PRIMARY emotional development (the early experiences that normally build the capacity to belong, be soothed, speak, matter and act) can be re-worked through SECONDARY emotional development in the community: the TC deliberately supplies the experiences the original development did not, belonging before attachment can grow; containment (being held and thought about) before self-containment; communication that is heard; inclusion in the group's actual decisions; and agency: real responsibility with real consequences. The sequence is the treatment's logic: a resident who has been reliably contained over months becomes gradually able to contain herself; a resident given real agency gradually stops proving powerlessness. It is a developmental model, not a defect model. The community is structured as the developmental environment the person did not have.", topic: "Mechanism" },
    { question: "Walk the four-phase journey, naming the resident-participation rule at each gate.", answer: "ENGAGEMENT: referral or self-referral; wary prospective members supported: often by current or ex-members through voluntary agencies or internet groups; existing mental-health support continues (the first participation rule: contact with people who have lived it, not only professionals). ASSESSMENT AND PREPARATION: the formal assessment plus practical planning (childcare, accommodation, medication and risk plans) and the treatment contract, often through a time-limited assessment and preparation group as a foretaste (the second rule: the community shows itself before the commitment is asked). THE MAIN TREATMENT: the living-learning engine at full power; the meetings, the shared work and meals, the roles (members explaining the community to visitors and new arrivals, noticing and including the isolated; staff working alongside, spending informal time (the aloof get challenged) and monitoring each other's emotional involvement in supervision; members supporting those in crisis, including out of hours). LEAVING: the graduation into the culture-carrier role; the ex-member who supports the next wary prospective, the alumni who explain the community: the community reproduces itself at the door on the way out.", topic: "Clinical practice" },
    { question: "Quote the evidence honestly: the Lees review, the PD verdict, the Grendon data.", answer: "LEES ET AL (1999, CRD Report 17, University of York): from over 8,000 references across 38 countries to 29 conservative-outcome studies of TC treatment for personality disorder and mentally disordered offenders; a significant positive pooled effect (summary log odds ratio −0.567), with 19 of the 29 studies showing positive effects at 95% confidence and none negative. THE PD VERDICT (Warren et al 2003, the Home Office review of treatments for severe personality disorder): 'the TC model currently has the most promising evidence base in this poor field'; the honest qualifier carried with the boast. GRENDON AND THE PRISON TCs: lower reconviction, fewer custodial sentences and fewer violent reconvictions for prisoners staying longer than 18 months versus waiting-list controls; the dose-response finding; Wexler's American RCTs adding the aftercare lesson. THE HONEST CAVEATS: motivation selects (the self-referred do better. The addiction-TC finding that generalises), longer stays do better, and no direct comparisons against other intensive models exist.", topic: "Evidence" },
    { question: "Recite five contraindications and explain the 'particular community at a particular time' caveat.", answer: "FIVE (any five of): current physical dependence (detoxification first); current mania; severe depressive retardation; learning disability; dementia; sexual-abuse perpetration; dangerously low weight; antisocial PD with a history of intimidation and deception; no capacity for social involvement; the conviction that 'only experts can help'. THE CAVEAT: suitability is never judged against 'therapeutic communities' in the abstract but against a PARTICULAR community at a PARTICULAR time; the PD unit's democratic TC, the prison's structured TC, the concept-based deaddiction community and the Soteria house are different instruments with different populations and different tolerance envelopes; the same person can be contraindicated for one and indicated for another, and contraindicated this year (in mania) yet indicated next year (recovered, still disordered). The selection list protects the community AND the non-indicated patient: the wasted placement and the harmful one.", topic: "Selection" },
  ],
  faqs: [
    { question: "Is this just a nice ward?", answer: "No: it is a treatment method with a theory (relational difficulty, learning), a structure (meetings, shared life, participation, enquiry), standards (the Core Standards) and an evidence base (the Lees review, the Grendon data, Soteria). The difference between a pleasant environment and a therapeutic one is deliberateness." },
    { question: "Who is it for?", answer: "Chiefly severe personality disorder, self-harm and the disorders of relationship; also offending populations, addictions (in the modified concept-based form) and, in Soteria form, first-episode psychosis. Suitability is always judged against a particular community at a particular time." },
    { question: "Who should NOT go?", answer: "The acutely manic, the severely retarded-depressed, currently physically dependent addicts, dangerously low-weight anorexics, sexual perpetrators, and antisocial PD with a history of intimidation and deception: plus anyone unable or unwilling to relate informally and intimately, or convinced only experts can help." },
    { question: "Does it work?", answer: "Within its indications, yes: the systematic review found a significant pooled effect (log odds ratio −0.567), and reviewers judged the TC model the most promising evidence base for personality disorder; prison TCs cut reconviction; Soteria matched hospital care with less medication. The honest caveats: motivation selects, longer stays do better, and no direct comparisons against other intensive models exist." },
    { question: "Why does everyone eat and work together?", answer: "Because communalism is the treatment: shared meals, shared tasks, first names and shared decisions dismantle the institutional status hierarchy that itself maintains the sick role." },
    { question: "Can our Indian day centre do this?", answer: "At the principle level, yes: the whole-community meeting, the shared work, the discussable-everything rule and positive risk-taking import into any facility; the full residential model needs staffing, training and selection discipline." },
    { question: "What is the difference between a democratic TC and a concept-based addiction TC?", answer: "The democratic model (the Henderson lineage) runs on shared decision-making and the four principles; the concept-based addiction TCs (the Synanon → Phoenix House and Daytop lineage, in 50+ countries) are hierarchical programmes of confrontational education: effective for drug dependence with the motivation caveat, and a different operating system, not a lesser version of the same one." },
    { question: "What happened at Erwadi?", answer: "In 2001, chained mentally ill patients died in a fire in a faith-healing institution at Erwadi: the warning that unregulated 'community care' without enquiry, standards or oversight kills; the regulation of healing institutions is the public-health demand, with modern Indian urgency." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Community of Communities (2006) — Service standards for therapeutic communities, Royal College of Psychiatrists: the 16 Core Standards" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.9 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Ciompi & Hoffman — Soteria Berne, World Psychiatry (2004): the psychosis trials" },
      { source: "Wexler — therapeutic communities in American prisons (1997): the prison-TC RCTs and aftercare" },
    ],
    reviews: [
      { source: "Main — The hospital as a therapeutic institution, Bull Menninger Clin (1946); Jones — Social psychiatry in practice (1968): the founding definitions" },
      { source: "Rapoport — Community as doctor (1960): the Henderson four-principle study" },
      { source: "Lees, Manning & Rawlings — Therapeutic community effectiveness: systematic international review, CRD Report 17, University of York (1999)" },
      { source: "Warren et al — Review of treatments for severe personality disorder, Home Office Online Report 30/03 (2003)" },
      { source: "Rawlings — Therapeutic communities in prisons: a research review (1999): the Grendon data" },
      { source: "Rawlings & Yates — Therapeutic communities for the treatment of drug users (2001); Rose — Transforming hate to love (1997): the Peper Harow outcome study" },
      { source: "Haigh — The quintessence of a therapeutic environment (1999): the five essential experiences" },
      { source: "Goffman — Asylums (1961); Barton — Institutional neurosis (1959); Tuke — Description of the Retreat (1813): the institutionalisation critique and the moral-treatment ancestor" },
    ],
    patientResources: [
      { source: "The Core-Standards sample checklist — the eight questions any family can ask of any facility" },
      { source: "The district deaddiction centres, NIMHANS-style day hospitals and the DMHP rehabilitation tier — the Indian import sites; Tele-MANAS 14416 for the referral conversation" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the community as the treatment, the four principles, who it is for, the honest evidence, the Erwadi warning.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The definitions, the four principles, the history chain, the contraindication list, the evidence headlines.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything: the selection craft, the community-functioning discipline, the Indian import, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definitions, the beliefs, the four principles, the evidence headlines.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite Main's and Jones's definitions and the four Henderson principles cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The living-learning engine, Haigh's five experiences, the status reversal, the history.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain how an institution treats: the two essence-phrases and the developmental repair." },
    { number: 3, title: "Clinical Practice", description: "The selection discipline, the institution audit, the programme variants, the contraindication list.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the contraindication sweep and the eight-question Core-Standards audit." },
    { number: 4, title: "Indian Context", description: "The day-centre import, the deaddiction fit, the trained-staff scarcity, the Erwadi lesson.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the day-centre script and the three-tests Erwadi conversation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the TC essay cold and recite the evidence numbers without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.9 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Main T — The hospital as a therapeutic institution, Bull Menninger Clin (1946): the founding definition", sourceType: "primary", year: "1946", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Jones M — Social psychiatry in practice (1968): the pooled-resources definition and the change in the status of patients", sourceType: "primary", year: "1968", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Rapoport RN — Community as doctor (1960): the Henderson Hospital four-principle study", sourceType: "primary", year: "1960", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Community of Communities — Service standards for therapeutic communities, Royal College of Psychiatrists: the 16 Core Standards", sourceType: "guideline", year: "2006", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Lees J, Manning N & Rawlings B — Therapeutic community effectiveness: systematic international review, CRD Report 17, University of York", sourceType: "systematic-review", year: "1999", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Warren F et al — Review of treatments for severe personality disorder, Home Office Online Report 30/03", sourceType: "review", year: "2003", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Rawlings B — Therapeutic communities in prisons: a research review (the Grendon data); Wexler H — the American prison-TC RCTs and aftercare", sourceType: "review", year: "1997–1999", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Ciompi L & Hoffman H — Soteria Berne, World Psychiatry: the psychosis trials", sourceType: "trial", year: "2004", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Haigh R — The quintessence of a therapeutic environment: the five essential experiences", sourceType: "primary", year: "1999", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Goffman I — Asylums (1961); Barton R — Institutional neurosis (1959); Tuke S — Description of the Retreat (1813): the institutionalisation critique and the moral-treatment ancestor", sourceType: "primary", year: "1813–1961", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Rawlings B & Yates R — Therapeutic communities for the treatment of drug users; Rose M — Transforming hate to love (the Peper Harow adolescent outcome study)", sourceType: "review", year: "1997–2001", dateReviewed: "2026-09-29" },
    { id: "S13", source: "The India lens as carried in the source note: the Erwadi fire (2001) and its regulatory aftermath; the 84+ government-funded DD-centre network and the DMHP day-care tier", sourceType: "government", year: "2001 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The founding definitions: Main (1946); the hospital used as a community with the immediate aim of full participation of all its members in its daily life and the eventual aim of the resocialisation of the neurotic individual for life in ordinary society; Jones: the total pooling of the institution's resources (staff, patients, their relatives), implying above all a change in the usual status of patients; admitted people are residents, clients or members, never patients.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "The model's anatomy: three defining beliefs (staff are not completely well nor residents completely sick; the difficulties are primarily relational; therapy is essentially a learning process) and Rapoport's four principles from the Henderson Hospital: democratisation, permissiveness, communalism, reality confrontation.", grade: "established", sources: ["S1", "S4"] },
    { text: "The modern quality machinery: the Community of Communities quality network and its 16 Core Standards (2006), the eight-standards sample; regular whole-community meetings; all members (staff included) working alongside each other; shared meals; discussable everything; emotional safety; participation in a new member's joining; tolerance of disturbed behaviour and emotional expression; positive risk-taking as essential to change.", grade: "established", sources: ["S1", "S5"] },
    { text: "The history: Geel (fourteenth-century sanctuary); the York Retreat (1796, moral treatment); the therapeutic-education schools and the intentional-community inheritors (l'Arche, Camphill); Northfield Military Hospital (Bion's failed 1943 attempt, then Main, Foulkes and Bridger; Maxwell Jones at Mill Hill; the 1946 papers); Main at the Cassel and Jones at Belmont: renamed the Henderson (1958), replicating into Main House and Webb House (2000); the NHS-era use against institutionalisation; the 1970s–80s decline and the 1990s–2000s revival (prisons, PD services, community rehabilitation; the 'therapeutic environments' movement).", grade: "established", sources: ["S1", "S2", "S3", "S11"] },
    { text: "The technique: the living-learning situation (everything between members in the course of living together, especially crises, as learning material) and the culture of enquiry (honest enquiry into difficulty, dogma challenged); the re-enactment of outside relational difficulties inside, with the small-group and community meetings as the examination-and-learning forum; the transmission system (new members adopt the values and later pass them on).", grade: "supported", sources: ["S1", "S10"] },
    { text: "Haigh's developmental model: the five essential experiences (attachment, containment, communication, inclusion, agency) mapped across psychological theories and TC structures; disturbed primary emotional development re-worked through secondary emotional development in the community.", grade: "supported", sources: ["S1", "S10"] },
    { text: "The four-phase journey: engagement (referral or self-referral, wary prospectives supported by current or ex-members, existing support continuing); assessment and preparation (formal assessment, practical planning of childcare, accommodation, medication and risk, the treatment contract, often through a time-limited assessment and preparation group); the main treatment; and leaving (the graduation into the culture-carrier role), with residents participating in selection and joining.", grade: "supported", sources: ["S1"] },
    { text: "The Lees systematic review (CRD Report 17, University of York, 1999): from over 8,000 references across 38 countries to 29 conservative-outcome studies of TC treatment for personality disorder and mentally disordered offenders; a significant positive pooled effect (summary log odds ratio −0.567), with 19 of the 29 studies showing positive effects at 95% confidence and none negative.", grade: "established", sources: ["S6"] },
    { text: "The severe-PD verdict and the prison data: the Home Office review judging that 'the TC model currently has the most promising evidence base in this poor field'; Grendon's reconviction studies: lower reconviction, fewer custodial sentences and fewer violent reconvictions for prisoners staying longer than 18 months versus waiting-list controls; Wexler's American prison-TC RCTs with the aftercare lesson; Soteria's trials: 2-year outcomes at least as good as usual hospital treatment with less antipsychotic medication; the addiction-TC evidence with the motivation caveat (motivation selects, longer stays do better); and the honest gap: no direct comparisons against other intensive models.", grade: "established", sources: ["S7", "S8", "S9", "S12"] },
    { text: "The contraindication list: current physical dependence; current mania; severe retardation; learning disability; dementia; sexual-abuse perpetration; dangerously low weight; antisocial PD with a history of intimidation and deception; no capacity for social involvement; the 'only experts can help' belief, with every suitability judgement made against a particular community at a particular time.", grade: "supported", sources: ["S1"] },
    { text: "The staffing and training tier: the egalitarian argument (unqualified 'social therapists' just being themselves) against the now-accepted skill argument (a high level of knowledge and skill plus well-developed reflective capacity); courses in the UK, Finland, Norway, the Netherlands and Greece without a set standard; the case for TC placements within psychiatry and psychotherapy training; the simulated TC (20–30 professionals living together for days as residents with a staff group) as the most popular short training format.", grade: "supported", sources: ["S1"] },
    { text: "The India layer: the indigenous relatives (temple healing communities, ashrams, Soteria-like spiritual communes, Gandhian intentional communities, the l'Arche/Camphill analogues); the 84+ government-funded DD centres and NGO network largely running the hierarchical concept-based model; the day-centre adoption of the Core-Standards sample at zero cost (NIMHANS-style day hospitals, DMHP district rehabilitation); the trained-staff scarcity answered by the simulated-TC training model; and the 2001 Erwadi fire (chained mentally ill patients dying in a faith-healing institution) the warning that unregulated 'community care' without enquiry, standards or oversight kills.", grade: "supported", sources: ["S1", "S13"] },
  ],
};
