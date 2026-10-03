import type { PsychiatryCourse } from "./types";

/**
 * ID TREATMENT & SERVICES — canonical Psychiatry course
 * (migration batch 11, Group N — intellectual disability, the
 * treatment/services architecture of the life course).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/id-treatment-services.md — untouched
 * foundation), re-researched against the note's cited lineage
 * (Dosen & Day's treatment-methods base, Emerson's behavioural
 * foundation, the Novaco anger-management adaptations and the UK
 * Training Package, Cooper's health-screening outcomes, Hollins'
 * family work and Beyond Words, Gath & McCarthy's families
 * synthesis, Bouras & Holt's South London service with the Moss
 * Matrix Model, Valuing People, DC-LD) with per-claim provenance.
 *
 * Drug routes: drugLinks is empty by design — the note's
 * pharmacological audit runs on risperidone, lithium, naltrexone,
 * propranolol, fluphenazine, clozapine and antilibidinal agents,
 * none of which has a KYP drug lesson, and no specific SSRI is
 * assigned a clinical role in ID itself; the audit is taught
 * here and recorded in contentGaps, never routed to an invented
 * page.
 */
export const idTreatmentServicesCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "id-treatment-services",
  title: "ID Treatment & Services",
  shortName: "ID Services",
  kind: "concept",
  category: "Intellectual Disability",
  groupLetter: "N",
  groupName: "Intellectual disability",
  learningPath: ["Psychiatry", "Intellectual Disability", "ID Treatment & Services"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Treatment, services and family support across the life course of intellectual disability",

  summary:
    "This course maps the treatment methods, service models and family support that carry intellectual disability across the life course. A person with intellectual disability may develop mental illness like anyone else, and services must stay accessible through transition and ageing.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Structure the treatment toolkit: behavioural (the two complementary areas), cognitive-behavioural (the anger-management three levels), psychodynamic (the six ID-specific adaptations) and pharmacological (start low, go slow, expect paradox).",
    "Apply the drug-class audit with its tiered honesty: neuroleptics (risperidone's RCT evidence), antidepressants, beta-blockers, stimulants, mood stabilisers, opioid antagonists (the naltrexone U-curve) and antilibidinal agents.",
    "Explain the transition cliff from children's to adult services, and name which young people fare worst.",
    "Describe ageing with ID: the mortality pattern, the respiratory excess, the Down syndrome–Alzheimer link and the double-ageing problem.",
    "Map the family needs: the grief sequence at diagnosis, the primacy of informal support and the ageing-parent crisis point.",
    "Compare the two service models for dual diagnosis, recite the three service phases and use the Matrix Model to evaluate outcomes.",
    "State the residential and vocational principles: ordinary housing, supported living vs group homes, integrated supported employment.",
    "Teach the staff-training core (awareness that a person with ID may suffer mental illness) and the commissioning checklist.",
    "Operate the Indian architecture: the National Trust Act's guardianship, RPwD entitlements, Anganwadi early detection and the family-plus-NGO scaling path.",
  ],
  quickFacts: [
    { label: "The governing law", value: "Teamwork, not technique", detail: "The four methods (behavioural, cognitive-behavioural, psychodynamic, pharmacological) complement and never isolate each other; the psychiatrist monitors medication against social-role outcomes, not just symptoms" },
    { label: "The behavioural core", value: "Teach + unlearn", detail: "Teaching appropriate skills and unlearning maladaptive behaviour; replacement more effective than removal alone, among the most research-based treatments in psychiatry, producing profound and rapid change" },
    { label: "The anger ladder", value: "Three levels", detail: "(1) General clinical care: feel well, suitable environment, occupation and recreation; (2) anger management: didactic group psychoeducation; (3) anger treatment: individualised work on cognitive perception, autonomic arousal and behaviour" },
    { label: "The drug audit", value: "Tiered honesty", detail: "Risperidone: RCT evidence for behavioural disturbance, metabolic-syndrome concern; lithium for explosive aggressive outbursts; propranolol 50–960 mg/day for panic-driven aggression; the naltrexone U-curve: 5–20 mg for autism, 100–200 mg for self-injury" },
    { label: "The transition cliff", value: "Challenging behaviour fares worst", detail: "School-leaving moves the young person abruptly from the protective single-agency children's world to the bewildering multi-agency adult world: those with mental health problems or aggressive challenging behaviour are the least likely to receive support for independent lives" },
    { label: "The ageing numbers", value: "<50% vs 83%", detail: "Under half of deaths in people with ID occur at 65+ versus 83% in the general population; respiratory disease leads (pneumonia, swallowing, reflux, suggesting lack of effective care); epilepsy + ID mortality up to 5×" },
    { label: "The family finding", value: "Informal beats formal", detail: "The diagnosis triggers a grief sequence: shock, numb disbelief, then mourning of the expected normal child; informal support from family and neighbours is more efficacious than formal services for many families" },
    { label: "The service architecture", value: "Two models, three phases", detail: "Generic ID community teams vs specialist mental health services for people with ID (the South London model since 1982); assessment, intervention, follow-up: evaluated by the Matrix Model (system level × input-process-outcome)" },
    { label: "The rate-limiter", value: "Staff training", detail: "First-level care workers receive little or no training in the psychiatric aspects of ID, so illness goes unrecognised; the core curriculum: a person with ID may suffer mental illness like anyone else, the therapeutic options, and the dispelling of myths (medication-is-failure)" },
  ],
  knowledgeGraph: [
    { label: "Intellectual Disability", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The condition this architecture serves. The supports paradigm the services exist to deliver" },
    { label: "Genetic Syndromes in ID", type: "condition", href: "/psychiatry/id-syndromes/", note: "The syndrome-specific psychiatry (Down syndrome's Alzheimer risk, Prader–Willi's compulsive food-seeking) the treatment tiers must know" },
    { label: "Dual Diagnosis in ID", type: "condition", href: "/psychiatry/id-dual-diagnosis/", note: "The planning problem the two service models grew to answer: illness hiding behind the disability" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The capacity and consent frame the ID prescriber works inside, and the National Trust guardianship layer's legal cousin" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The middle-age dementia risk of Down syndrome: neuropathology universal, clinical dementia not inevitable" },
    { label: "Managing Dementia", type: "condition", href: "/psychiatry/dementia-management/", note: "The symptomatic planning tier for the ageing person with ID: night-lights, single-step instructions, the restructured routine" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The serotonergic tier's cleanest signal. OCD symptoms in ID responding to serotonergic drugs" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The compulsive-routine and depression rider's chemistry, with the paradoxical anxiety increase as partial serotonin syndrome" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The under-built executive tier: behavioural programmes and structured environments acting as the external frontal lobe" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The arousal accelerator: crowding in autism lighting the alarm that presents as 'aggression'" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The mechanism tier of this course is the mechanism of the machinery. Why each treatment method works on this population, and why the service architecture is part of the treatment rather than its container. The learning mechanism: the communication barrier pushes treatment toward observable behaviour, and operant programmes exploit it; a behaviour that achieves a function gets repeated, so the programme teaches a replacement skill that achieves the same function and removes the audience for the maladaptive one; replacement beats removal because the behaviour was doing a job. The arousal mechanism: anger in this population is an excessive rather than a deviant response, its threshold lowered by organic factors (brain damage, epilepsy, medication) and in autism the 'aggression' is often panic, the crowded hall exceeding the sensory budget; the three-level model targets cognitive perception, autonomic arousal and behaviour in ascending order of individualisation. The grief mechanism: adjustment to disability runs as a series of mourning crises (diagnosis, failed early treatments, school assessment, specialised placement, puberty, leaving home) and every effective intervention works with the grief, not against it. The vulnerability mechanism: cerebral dysfunction produces frequent atypical and paradoxical drug responses, so the pharmacology runs counterintuitively precise in a brain that responds unpredictably; the naltrexone U-curve (5–20 mg for autistic disturbance, 100–200 mg for self-injury) is its emblem. The delivery mechanism: first-level carers receive little or no training in the psychiatric aspects of ID, so illness goes unrecognised until the behaviour breaks; staff training is the rate-limiter of the whole system, and the Matrix Model's input-process-outcome logic is how a commissioner sees the machine at once.",
    steps: [
      "The learning mechanism: functional analysis identifies what the behaviour achieves; a replacement skill is taught to achieve the same function; the maladaptive behaviour loses its job. The programme is education, not correction.",
      "The arousal mechanism: anger as an excessive (not deviant) response with an organic floor; brain damage, epilepsy, medication; the three levels (general clinical care → anger management → anger treatment) targeting perception, autonomic arousal and behaviour in turn.",
      "The panic mechanism: in autism the 'aggression' is often excessive anxiety amounting to panic, crowding exceeding the sensory budget; the environmental change treats what no tablet reaches.",
      "The grief mechanism: adjustment as a series of grief-like crises from diagnosis to leaving home; the family's mourning of the expected normal child is the treatment's first reality.",
      "The vulnerability mechanism: cerebral dysfunction producing frequent atypical and paradoxical responses; start lower, increase slower, expect the unexpected, one change at a time.",
      "The delivery mechanism: untrained first-level carers mean unrecognised illness; staff training the rate-limiter; the core curriculum the awareness that a person with ID may suffer mental illness like anyone else.",
      "The architecture mechanism: the Matrix Model (system level crossed with input-process-outcome) the framework that shows whether the machinery is actually delivering what the population needs.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "frontal-executive", name: "Frontal lobes (the under-built executive tier)", role: "Planning, inhibition and flexible problem-solving: the functions most commonly under-functioning in ID; behavioural programmes and structured environments act as an external frontal lobe, teaching and cueing the skills the disability withholds.", grade: "supported" },
    { id: "amygdala-arousal", name: "Amygdala and the limbic arousal system", role: "The anger-panic tier's accelerator: crowding in autism lighting the alarm that presents as 'aggression'; the autonomic target of the three-level model's relaxation and arousal-recognition tiers.", grade: "supported" },
    { id: "temporal-epilepsy", name: "Temporal lobes (the epilepsy address)", role: "Epilepsy's residence and the possible base of episodic dyscontrol: the reason the drug audit keeps mood stabilisers close and the reason an EEG question precedes an anger label.", grade: "supported" },
    { id: "hippocampus-down", name: "Hippocampus and the Down syndrome Alzheimer tier", role: "The amyloid pathology universal by middle age in Down syndrome with clinical dementia NOT inevitable: the memory-clinic question every ageing person with ID eventually brings.", grade: "established" },
    { id: "diffuse-cerebral", name: "Diffuse cerebral dysfunction (the paradox substrate)", role: "The distributed injury that makes drug responses atypical and paradoxical. The biological reason the prescribing rules (start low, go slow) exist at all.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The serotonergic tier: OCD symptoms in ID responding to serotonergic drugs, with the paradoxical anxiety increase read as partial serotonin syndrome; the population's characteristic double-edge.", grade: "supported", drugConnection: "The note assigns no specific SSRI a clinical role in ID itself: the audit's antidepressant tier stays unlinked; the ID drug audit lives in contentGaps, never in borrowed routes." },
    { name: "Dopamine", symbol: "DA", role: "The neuroleptic tier: risperidone's RCT evidence for behavioural disturbance with the metabolic-syndrome caution; haloperidol's variable response areas in autism: the D2 lever pulled carefully or not at all.", grade: "supported", drugConnection: "Risperidone, fluphenazine and clozapine have no KYP drug lessons. The neuroleptic audit is taught here, the route never invented." },
    { name: "Endogenous opioids", symbol: "β-End", role: "The self-injury tier: naltrexone's dosage U-curve (5–20 mg for autistic disturbance, 100–200 mg for self-injury) the opioid antagonist's counterintuitive precision.", grade: "proposed", drugConnection: "Naltrexone has no KYP lesson; the U-curve is taught in this course's pharmacology audit." },
    { name: "Noradrenaline", symbol: "NA", role: "The beta-blocker tier: propranolol 50–960 mg/day for panic-driven aggression; the crowded-hall signature; non-sedating but can depress.", grade: "proposed", drugConnection: "Propranolol has no KYP lesson; the panic-aggression tier is taught here." },
    { name: "Acetylcholine", symbol: "ACh", role: "The Down syndrome Alzheimer tier: the cholinergic deficit beneath the middle-age dementia risk; neuropathology universal, clinical dementia not inevitable.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "replacement-pathway",
      name: "The replacement pathway (why behavioural programmes work)",
      steps: [
        { label: "Functional analysis", detail: "The ABC chart (antecedent-behaviour-consequence) identifies what the behaviour achieves: attention, escape, sensory relief" },
        { label: "The function named", detail: "The scream is a request; the hitting is an exit; the behaviour is communication under constraint" },
        { label: "The replacement taught", detail: "A skill that achieves the same function: the communication card, the request sign, the walk-away permission" },
        { label: "The maladaptive behaviour unemployed", detail: "Removal alone leaves the need unfilled and the behaviour returns; replacement removes both the behaviour and its reason" },
      ],
      clinicalManifestation: "The day-centre resident who stopped screaming when the card arrived: the education that outperformed every prescription considered.",
      grade: "established",
    },
    {
      id: "anger-pathway",
      name: "The three-level anger pathway (from environment to individual work)",
      steps: [
        { label: "Level one: general clinical care", detail: "Feel well, a suitable environment, occupation and recreation: the base that resolves many 'behaviour problems' alone" },
        { label: "Level two: anger management", detail: "Didactic group instruction, psychoeducation about anger's nature and its signs: the recognisable-arousal curriculum" },
        { label: "Level three: anger treatment", detail: "Individualised programme targeting cognitive perception, autonomic arousal and behaviour: engagement essential, transference evocative" },
        { label: "The obstacles priced in", detail: "Anger excessive not deviant; organic factors frequent; limited communication; entrenched habitual use, and in autism, panic read as aggression" },
      ],
      clinicalManifestation: "The crowded hall managed by staggered arrival and a quiet ante-room: the panic-aggression that never needed a tablet.",
      grade: "supported",
    },
    {
      id: "lifecourse-pathway",
      name: "The life-course pathway (input-process-outcome across the cliff)",
      steps: [
        { label: "Input", detail: "Trained staff, commissioned joint services, the family supported: the machinery the Matrix Model's first axis measures" },
        { label: "Process", detail: "Assessment (structured, instrument-backed), intervention (medication, environmental manipulation, psychological treatment), follow-up (crisis-prevention plans, quarterly-to-half-yearly contact)" },
        { label: "Outcome", detail: "Symptom and functioning improvement, sustained where the specialist architecture holds: the Matrix Model's third axis" },
        { label: "The cliff crossed or fallen", detail: "Planned two years ahead with the school's multidisciplinary handover, the transition is a step; unplanned, it is a fall, and the challenging-behaviour group falls furthest" },
      ],
      clinicalManifestation: "The school-leaver registered with adult services before the last day versus the one who leaves school on Friday and meets nothing on Monday.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "diagnosis-grief", time: "At diagnosis (often pregnancy or birth)", title: "The grief sequence begins", description: "Shock or numb disbelief, then the mourning of the expected normal child. Down syndrome the most commonly recognised at-birth cause, with the early genetic-counselling need.", phase: "onset" },
    { id: "school-years", time: "The school years", title: "Skills taught, families partnered", description: "Behavioural programmes teach dressing, continence, communication and sleep; the family lives the series of adjustment crises: school assessment, statementing, specialised placement, puberty.", phase: "duration" },
    { id: "transition-cliff", time: "School leaving", title: "The transition cliff", description: "The abrupt, imposed, traumatic move from the protective single-agency children's world to the bewildering multi-agency adult world: parents often told their opinion no longer counts; the last school years consumed by the choice of adult provision.", phase: "peak" },
    { id: "adult-years", time: "The working years", title: "Housing, work, mental health", description: "Ordinary housing, supported living or group homes; the vocational ladder; dual-diagnosis needs met or missed: anxiety and depression rising with age; administrative prevalence fallen, only the severe and complex still on any register.", phase: "duration" },
    { id: "middle-age-risks", time: "Middle age", title: "The Down syndrome Alzheimer question", description: "Rising longevity (especially Down syndrome) bringing the normal-ageing causes of death atop the persistent respiratory excess; mental ill-health rising with age: deprived areas, no daytime occupation, single status and epilepsy the added risks.", phase: "peak" },
    { id: "double-ageing-era", time: "The carer's later years", title: "Double ageing", description: "Elderly carers caring for ageing 'children', both vulnerable, needs not always compatible, informal networks declining; forward planning negotiated as a process, not an emergency, with the transition to supported living agreed while the parent can still participate.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The UK planning numbers: ~210,000 people with severe/profound intellectual disabilities (65,000 children, 120,000 working-age adults, 25,000 older people) plus ~1.2 million with mild/moderate ID; ~20 million worldwide. Administrative prevalence falls sharply in adulthood: only the severe and complex reach adult services, so the true population is far larger than the registered one. Dual diagnosis: figures around 10–30%+ of people with ID having psychiatric disorders, higher than the general population, with anxiety and depression increasing with age. Mortality: <50% of deaths occur at 65+ versus 83% in the general population; respiratory disease the leading cause (pneumonia, swallowing problems, reflux, the pattern suggesting lack of effective care); epilepsy + ID mortality up to 5× the general population. Abuse prevalence is high across all ages, producing PTSD and behavioural disorders.",
    indianPrevalence: "Administrative prevalence is the whole Indian story: RPwD census-based registration undercounts intellectual disability massively; the National Trust Act, DD schemes and Anganwadi-based early detection are the delivery reality; the family (usually the mother) is the de facto service system for the vast majority. The clinical implication: the Indian 'prevalence' is a map of registration offices, not of need.",
    lifetimeRisk: "Two predictable crises await every family: the transition cliff at school-leaving and the double-ageing era if carer and cared-for both live long enough; the entire architecture exists to catch these two falls.",
    genderRatio: "The planning numbers are not sex-split in the source; the clinical constant is the mother as the primary carer. The double-ageing encounter is typically a household of two people ageing together.",
    ageOfOnset: "The service perspective begins at antenatal or birth diagnosis (Down syndrome most commonly recognised at birth) and runs the whole life course: the school years, the transition cliff, the working years and the double-ageing decades this course maps.",
    indianNotes: "The realistic Indian scaling path is family-plus-NGO with Tele-MANAS-style professional backbones; disability pension amounts and certification processes vary by state; special schooling and therapies are out-of-pocket for most.",
  },
  etiology: [
    { category: "biological", factor: "The communication barrier", details: "Unable to say where it hurts, the person with ID behaves: the barrier that pushes treatment toward observable behaviour and made behavioural programmes the field's research core." },
    { category: "biological", factor: "The comorbid load", details: "Epilepsy, constipation, cerebral palsy, sensory impairment and thyroid disease riding the disability: each a behaviour-change trigger, each treatable, each easily missed behind the behaviour." },
    { category: "psychological", factor: "The grief-and-adjustment cycle", details: "Adjustment as a series of grief-like crises: diagnosis, failure of early treatments, school assessment, specialised placement, puberty, leaving home; the psychological engine of the family tier." },
    { category: "psychological", factor: "The arousal diathesis", details: "Brain damage, epilepsy and medication lowering the anger threshold; panic in the autism sensory system converting crowding into 'aggression': the two psychological floors beneath most referred behaviour." },
    { category: "social", factor: "Deinstitutionalisation and its seams", details: "Group homes succeeding the institutions; prescribing no less in the community than in institutions, reduced only by determined rationalisation programmes; the weak links with mainstream mental health that the specialist model grew to fill." },
    { category: "social", factor: "The family as the backbone", details: "Informal support more efficacious than formal services for many families; the ageing-parent crisis; minority-ethnic needs less often met: the social facts the service architecture must respect rather than replace." },
  ],
  symptomClusters: [
    {
      category: "1. What actually gets referred (the dual-diagnosis presentation)",
      symptoms: ["Aggression, self-injury, distress, compulsive routines and withdrawal: the drug audit's non-diagnostic targets, and the behavioural programme's referral reasons", "Anger: an excessive rather than deviant response, frequently organic (brain damage, epilepsy, medication), entrenched by habitual use, communication-limited", "In autism, 'aggression' that is panic: excessive anxiety amounting to flight, read by the environment as fight", "Depression and anxiety rising with age: the quiet majority that never reaches the referral letter", "Psychiatric disorder at 10–30%+ prevalence, higher than the general population and commonly unrecognised behind the disability"],
    },
    {
      category: "2. The life-course crisis points (what the family meets and when)",
      symptoms: ["Diagnosis: the grief sequence; shock, numb disbelief, mourning the expected normal child", "The school years: assessment, statementing, specialised placement, each its own mini-crisis; the last years consumed by the choice of adult provision", "The transition cliff: abrupt, imposed, traumatic; parents told their opinion no longer counts", "Adulthood: sexuality discouraged and privacy withheld; parenthood doubted (the Norwegian cohort: 40% of children of parents with ID had care failures; English research: successful parenting possible with effective support)", "Double ageing: the elderly carer's failing health presenting as the patient's worsening behaviour"],
    },
    {
      category: "3. The system-failure signatures (how the machinery breaks and shows it)",
      symptoms: ["Illness unrecognised: patient and carer both fail to read the signs; behaviour changes misattributed to the disability itself", "Eye infections and tooth decay: the carer-breakdown signals written on the patient's body", "Health screening underused; aetiology undetermined even late in life; the respiratory mortality excess as the accumulated receipt", "Non-compliance that is usually formulation or carer prejudice, not forgetfulness: the prescribing trap", "The young person with challenging behaviour leaving school into nothing: the least supported precisely when most in need"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The comprehensive assessment (the first service phase)",
      code: "Structured, instrument-backed, aetiology-hunting",
      criteria: [
        "Structured clinical assessment with instruments where available (the Aberrant Behaviour Checklist and its kin) not a corridor impression.",
        "Determine aetiology even late in life: the Down syndrome checklist (thyroid, hearing, the congenital consequences), the epilepsy question, the sensory screen.",
        "Physical illness excluded first: pain, constipation, dental disease, reflux; the behaviour-misattribution trap audited before any psychiatric label.",
        "Psychiatric illness sought behind the disability (diagnostic overshadowing reduced but not gone) using DC-LD criteria for adults with learning disabilities.",
        "The carer and environment assessed as deliberately as the patient: carer breakdown presents as patient behaviour.",
      ],
      duration: "The assessment phase is the first of three. It precedes intervention and never fully ends, feeding every review.",
      indianNote: "The Anganwadi worker and the ASHA are the Indian assessment front line; the DD rehabilitation centre and the medical-college OPD the second; the note's warning holds verbatim: determine aetiology even late, because the family has usually already decided it is 'just the disability'.",
    },
    {
      system: "The 'why is the behaviour worse' rule",
      code: "Three checks before accepting progression",
      criteria: [
        "Check ONE: physical illness: pain, constipation, dental, reflux; the respiratory-mortality lesson demands the body be examined before the mind is blamed.",
        "Check TWO: psychiatric illness: depression and anxiety rise with age in ID and treat as well as in the general population once noticed.",
        "Check THREE: carer and environment change: staff turnover, the ageing mother's failing health, the day-centre that doubled its intake.",
        "Only then accept progression of the disability itself, and even then, treat what is treatable alongside it.",
      ],
      duration: "The rule applies at every review, for life: the single most reusable diagnostic instrument in this whole course.",
      indianNote: "In the Indian OPD the rule saves the family the polypharmacy spiral: the behaviour blamed on progression is usually pain, constipation or an exhausted mother; each cheaper to fix than a new tablet.",
    },
  ],
  severityScales: [
    {
      name: "The three-level anger staircase",
      fullName: "The anger model's ascending intervention ladder",
      measures: "Where the anger presentation sits between environmental care and individualised treatment: the tier that decides who needs nothing more than a quieter hall.",
      ranges: [
        { min: 0, max: 0, severity: "Level 1: general clinical care", action: "Feel well, suitable environment, occupation and recreation: the base that alone resolves many referred 'behaviour problems'; staggered arrival, the quiet ante-room, the visual timetable" },
        { min: 1, max: 1, severity: "Level 2: anger management", action: "Didactic group instruction, psychoeducation about anger's nature and signs: the recognisable-arousal curriculum, group-friendly and deliverable by trained staff" },
        { min: 2, max: 2, severity: "Level 3: anger treatment", action: "Individualised programme targeting cognitive perception, autonomic arousal and behaviour: engagement essential, transference evocative; the specialist tier" },
      ],
      indianNote: "Level one is the Indian majority tier: deliverable by trained parents and teachers; level two by the special-education and NGO workforce; level three needs the DMHP psychiatric tier or Tele-MANAS-linked specialists.",
    },
    {
      name: "Aberrant Behaviour Checklist",
      fullName: "The structured-assessment instrument of the service's first phase",
      measures: "Structured behavioural assessment in the assessment phase of the specialist service: the instrument-backed alternative to the corridor impression.",
      ranges: [],
      indianNote: "Named here as the exemplar of the structured-instruments discipline; scores and cut-offs are not reproduced. The principle (instrument over impression) is what transfers to every Indian setting.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Physical illness masquerading as behaviour change", distinguishingFeatures: "Pain, constipation, dental disease, reflux, infection: the body speaking the only language the communication barrier permits.", keyDifferentiator: "The examination and the checklist: the respiratory-mortality lesson is what happens when this differential is skipped. Treat it before any label hardens." },
    { condition: "Psychiatric illness behind the disability (diagnostic overshadowing)", distinguishingFeatures: "Depression, anxiety, OCD symptoms, psychosis: present at 10–30%+ and rising with age, yet attributed to 'the ID'.", keyDifferentiator: "DC-LD criteria and the dual-diagnosis discipline: treatable as in the general population once noticed; the noticing is the treatment's bottleneck." },
    { condition: "Environmental or carer change", distinguishingFeatures: "Staff turnover, the day centre's new intake, the ageing mother's failing health, the move between settings.", keyDifferentiator: "The timeline and the carer's own assessment: eye infections and tooth decay as the carer-breakdown signals; treat the system, not the patient." },
    { condition: "Panic-driven 'aggression' in autism", distinguishingFeatures: "Hitting that occurs exclusively in crowding, preceded by agitation, ear-covering and escape attempts.", keyDifferentiator: "The ABC functional analysis: panic-aggression resolves with environmental change (staggered arrival, the quiet room) where oppositional readings would have reached the prescription pad." },
    { condition: "Epileptic-based episodic dyscontrol", distinguishingFeatures: "Explosive outbursts with a possible epileptic basis: abrupt, stereotyped, post-ictal fog.", keyDifferentiator: "The EEG question before the anger label: the epilepsy + ID mortality (up to 5×) makes the seizure question a safety question, not a formality." },
    { condition: "Medication-induced or paradoxical drug reaction", distinguishingFeatures: "The behaviour that began after the prescription, including the paradoxical anxiety increase of the serotonergic tier read as partial serotonin syndrome.", keyDifferentiator: "The single-change discipline: one drug at a time, started lower, increased slower; the reaction attributed to the tablet it actually belongs to." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Behavioural programmes: teaching and unlearning",
      description: "The historical core, forced by the communication barrier toward observable behaviour: more research-based than most psychiatric treatments and capable of profound, rapid change. Two complementary areas: teaching appropriate skills (dressing, continence, communication, sleep, rising through social skills, dating skills and assertiveness) and unlearning maladaptive behaviour, with replacement more effective than removal alone, because the behaviour was doing a job. Operant incentive programmes dominate institutional and offender work. Punishment techniques can work but raise ethical concern for trainer and patient alike: close ethical control, unusual situations only.",
      whenToUse: "First, always: the behavioural analysis precedes every other tier, and its gains carry every other method.",
      indianContext: "Deliverable by trained parents and teachers: the note's explicit transfer; the Indian family is not a barrier to behavioural programmes but their largest workforce.",
    },
    {
      category: "psychotherapy",
      name: "CBT and the three-level anger model (with the psychodynamic adaptations)",
      description: "CBT targets the polarised all-good/all-bad perception typical of ID cognition, usually in the mild/borderline range, with particular importance in sex-offender treatment; problem-solving gains can be GREATER in moderate than mild ID (a ceiling effect). Rational emotive therapy (educational, didactic, group-friendly) decreases irrationality and anxiety and increases internal control and self-esteem in open studies. Anger management, now well-established in ID, runs the three levels (general clinical care → group psychoeducation → individualised anger treatment on perception, arousal and behaviour), priced against its obstacles: anger excessive not deviant; organic factors; limited communication; entrenched habitual use; autism's panic. Anxiety reduction spans formal relaxation to physical activity: each treatment an individual therapeutic trial. Psychodynamic therapy contributes the six ID-specific adaptations: loss-and-disability themes; concrete, simple, colloquial, unhurried communication (music, art, play, drama); learning their world (the patient assumes the therapist already knows it); repetition of information as if never said; readiness to disengage; and confidentiality barely established (dependency discourages privacy, carers expect disclosure, content may include poor care or frank abuse), with efficacy evidence honestly weak and psychotherapy positioned as the complement to education, not its rival.",
      whenToUse: "CBT for the mild/borderline tier and the referred anger; psychodynamic work for the grief-and-adjustment crises and the relational injuries the behaviour carries.",
      indianContext: "Group didactic formats fit the Indian school and day-centre structure; the six adaptations translate verbatim to the Indian family's closeness: confidentiality barely established is an Indian daily reality, and the disclosure-of-abuse duty it carries must be taught with it.",
    },
    {
      category: "pharmacotherapy",
      name: "The audited drug classes: start low, go slow, expect paradox",
      description: "Drugs are used beyond epilepsy, Tourette and ADHD (for aggression, self-injury, distress, compulsive routines and withdrawal) and the recurrent criticism stands: off-label use for non-diagnostic purposes, prescribing prevalence tracking degree of disability and autism, no less in the community than in institutions, reduced only by determined rationalisation programmes. The ID prescribing rules: non-compliance is usually formulation or carer prejudice, not forgetfulness; coexistent disorders (epilepsy, constipation, cerebral palsy) increase vulnerability; cerebral dysfunction produces frequent atypical and paradoxical responses; start lower, increase slower, expect the unexpected, give carers a contact; the evidence base is largely anecdote and small open trials; and the prescriber carries greater responsibility precisely because the patient's capacity to decide is reduced. The class audit: NEUROLEPTICS; risperidone with RCT evidence for behavioural disturbance but metabolic-syndrome concern; haloperidol's variable response areas in autism; violence possibly responsive to fluphenazine or clozapine. ANTIDEPRESSANTS: depression as treatable as in the general population once noticed; OCD symptoms respond to serotonergic drugs; paradoxical anxiety increase as partial serotonin syndrome; Prader–Willi compulsive food-seeking a speculative target. BETA-BLOCKERS: propranolol 50–960 mg/day for panic-driven aggression (the crowded autistic patient), non-sedating but can depress. STIMULANTS. ADHD now recognised with ID; global improvement when effective. MOOD STABILISERS: episodic dyscontrol with possible epileptic basis; lithium effective for aggressive outbursts, particularly with irritability and explosiveness. OPIOID ANTAGONISTS: naltrexone's U-curve: 5–20 mg for autism, 100–200 mg for self-injury, many trials falling between. ANTILIBIDINAL AGENTS: a supplement to teaching when the drive overrides everything, with patient, family and carers all part of the decision. Above all: change ONE treatment at a time; treatments complement, never isolate.",
      whenToUse: "After the non-drug tiers have been genuinely tried; one change at a time; every prescription an individual therapeutic trial with a review date and a named purpose.",
      indianContext: "Indian ID prescribing culture is polypharmacy-prone: the single-change discipline and paradox-response vigilance apply verbatim; risperidone and antiepileptics are inexpensive, which makes the rationalisation conversation (stopping drugs) the harder and more necessary one.",
    },
    {
      category: "lifestyle",
      name: "The service architecture: two models, three phases, the Matrix",
      description: "Dual diagnosis is the planning problem: generic psychiatric services long assumed they would cope, and the numbers (10–30%+ psychiatric morbidity, severe behaviour disorders) proved otherwise. Model A: generic ID community multidisciplinary teams (psychiatry, psychology, functional-analysis and behavioural input), the deinstitutionalisation workforce; their weakness: weak links with mainstream mental health, especially for mild ID with mental illness, forensic problems, autism and borderline functioning. Model B: specialist mental health services for people with ID (the South London model since 1982): outpatient clinics, outreach, inpatient assessment and treatment, consultation; psychiatrists, community nurses, psychologists, OT, speech and language, social work; three phases. ASSESSMENT (structured, instrument-backed: the Aberrant Behaviour Checklist), INTERVENTION (medication, environmental manipulation, psychological treatments, crisis-prevention plans, training as an integrated function), FOLLOW-UP (quarterly-to-half-yearly maintenance contact); admission to generic beds with consultative support plus a small specialist unit for comprehensive assessment, with person-centred Care Programme Approach coordination. Outcomes: the Matrix Model (system level × input-process-outcome) the best available framework; the specialist-unit advantage over generic admission (symptom and functioning improvement sustained at 6 and 12 months); assertive vs standard community treatment showed no difference in one RCT. Residential principles: ordinary housing, acceptable community setting, needs-responsive design, affordable, safe, comfortable; group homes (3–8 people) succeeded the institutions, with supported living (the person rents or owns; the support agency does not control the accommodation) the newer layer; no one model suits all: the full range of alternatives with maximal comfort, ownership and autonomy. Vocational principles: integrated settings, manageable productivity, adequate pay; individual placement raises wages most; people with mental health problems plus ID are under-represented in both sheltered and supported employment. Staff training, the rate-limiter: first-level care workers receive little or no training in the psychiatric aspects of ID; the core curriculum (awareness that a person with ID may suffer mental illness like anyone, the range of therapeutic options, the dispelling of myths (medication-is-failure)) built around real clients, embedded in organisational culture, with managers included. Commissioning: joint health-social commissioning; client and carer participation; statutory and voluntary agencies involved; baseline needs assessment; local and national policy into vision; desired local outcomes into service specifications; purchase of the necessary skills.",
      whenToUse: "Always: the service design is part of the treatment, not its container; every plan-review asks who is trained, who coordinates, and what the outcomes show.",
      indianContext: "The district mental health programme meets the disability sector through exactly the joint-planning, baseline-assessment and participation principles the model teaches; the Indian version of the two models is the DD centre and NGO sector (generic) with the DMHP psychiatric tier as the specialist input, with Tele-MANAS as the outreach spine the South London model never had.",
    },
    {
      category: "lifestyle",
      name: "The family and life-course programme",
      description: "The family tier: diagnosis now often in pregnancy or at birth, the parents' reactions a grief sequence; shock or numb disbelief first, then the mourning of the expected normal child (Down syndrome carrying the early genetic-counselling need); informal support (family, neighbours) more efficacious than formal services for many families, with not all parents benefiting from parent discussion groups; family functioning shaped by partnership with services, school choices, statementing and transitions; siblings growing with their own adaptations (positive and lonely variants); ageing parents facing the who-continues-care crisis, with the transition to supported living or group homes negotiated as a process, not an emergency. The transition cliff: plan two years ahead, visit and trial placements, hold the school's multidisciplinary handover, register with adult services before the last day, and use every entitlement early. The double-ageing programme: guardianship arrangements, supported-living options, sibling involvement, respite services; planned now as a process, decided by no one in an emergency. Cultural competence: minority-ethnic needs less often met; planners must know how beliefs conflict or coincide with service assumptions.",
      whenToUse: "From diagnosis for life: the grief-and-adjustment cycle is the treatment's constant, and the forward planning begins long before frailty.",
      indianContext: "The National Trust Act (1999) (covering autism, cerebral palsy, mental retardation and multiple disabilities) provides the legal guardianship framework for adults with ID; RPwD entitlements and disability certificates, DD rehabilitation schemes and Anganwadi-based early detection are the delivery reality; the ageing mother of a 50-year-old with Down syndrome is a standard OPD encounter with almost no respite infrastructure behind her.",
    },
  ],
  safety: {
    redFlags: [
      "A behaviour change accepted as 'the disability progressing': the misattribution trap: physical illness (pain, constipation, dental, reflux), psychiatric illness and carer change checked BEFORE the label hardens",
      "Eye infections and tooth decay in the person with ID: carer breakdown presenting as the patient's hygiene; the carer assessed as deliberately as the patient",
      "Respiratory disease leading the mortality table (pneumonia, swallowing problems, reflux, the pattern suggesting lack of effective care); every chest infection a care audit, not just an antibiotic",
      "Epilepsy + ID: mortality up to 5× the general population; the seizure history treated as a standing safety variable",
      "Frank abuse disclosed in therapy or in behaviour: abuse prevalence high across all ages, producing PTSD and behavioural disorders; confidentiality barely established never means silence",
      "The transition cliff arriving unmet: the young person with mental health problems or aggressive challenging behaviour the least likely to receive support for an independent life",
    ],
    urgentGuidance:
      "The order of operations: (1) the three-check rule before accepting any 'progression'; physical illness, psychiatric illness, carer change, in that order; (2) suspected abuse escalated through safeguarding whatever form the disclosure takes; (3) the carer examined as deliberately as the patient: the 72-year-old mother's hypertension is the daughter's prognosis; (4) one treatment change at a time, with the carers holding a contact number and the prescriber consciously carrying the consent responsibility the patient cannot; (5) the transition planned two years before the last school day, with adult services registered before school ends; (6) the double-ageing household offered respite before the crisis, not after it.",
  },
  /* Drug routes: none — the note's audit runs on risperidone, lithium,
     naltrexone, propranolol, fluphenazine, clozapine and antilibidinal
     agents, none of which has a KYP drug lesson, and no specific SSRI
     is assigned a role in ID itself. The audit is recorded honestly
     in contentGaps and taught in the management tier above. */
  drugLinks: [],
  contentGaps: [
    "The neuroleptic tier of the ID drug audit (risperidone (RCT evidence for behavioural disturbance, metabolic-syndrome caution), fluphenazine and clozapine) has no KYP drug lessons; the audit is taught here, the route never invented.",
    "Lithium (effective for aggressive outbursts, particularly with irritability and explosiveness) and the mood-stabiliser tier for episodic dyscontrol have no KYP lessons; taught here, never routed.",
    "Naltrexone: the dosage U-curve's owner (5–20 mg for autism, 100–200 mg for self-injury); has no KYP lesson; taught here.",
    "Propranolol (50–960 mg/day for panic-driven aggression) and the antilibidinal-agent tier have no KYP lessons; taught here.",
    "The antidepressant tier: the note assigns no specific SSRI a clinical role in ID itself (the serotonergic evidence is class-level, for OCD symptoms and depression once noticed), so none of the twelve KYP antidepressant lessons is linked; the ID-specific audit lives in this course, not in borrowed routes.",
  ],
  patientGuide: {
    whatIsIt:
      "This course is about everything around the person with intellectual disability that makes life work: the treatment methods (behaviour programmes, talking therapies adapted for ID, and carefully audited medicines), the services that deliver them (community teams, specialist mental health input, housing, work, trained staff), and the family; the backbone of the whole system. Its single most important message: a person with intellectual disability can have a mental illness too, just like anyone else, and it is treatable once noticed.",
    whatCausesIt:
      "Nothing 'caused' the needs this course manages, but several things shape them. The communication barrier means distress shows as behaviour, because saying 'it hurts' is not always possible. Health problems that are easy to treat (constipation, toothache, reflux, thyroid trouble) hide behind changed behaviour. Life itself brings predictable hard moments: the diagnosis (a grief for parents, like mourning), school changes, leaving school (the 'transition cliff' (an abrupt jump from children's services to the adult world), and later the 'double ageing' problem) the elderly parent caring for a middle-aged son or daughter, both of them needing help at the same time.",
    symptoms:
      "Signs that the system needs to step in: behaviour that has changed (aggression, self-injury, withdrawal, distress, new routines); mood and worry problems that rise with age and hide behind the disability; a carer who is visibly failing (the person's eye infections and dental decay are often the first signs); and the school-leaving date approaching with no adult plan behind it. None of these means the disability is 'getting worse'. Each means something in the person, the body, or the environment needs attention.",
    treatment:
      "Treatment is a team effort in layers. Behaviour programmes come first: teaching useful skills and replacing difficult behaviours with better ones (replacement works better than removal). Talking therapies adapted for ID help with anger (three levels: getting the environment right first, then group education about anger, then individual work) and with the grief and adjustment every family meets. Medicines have a real but carefully audited role (started lower, increased slower, one change at a time, watching for paradoxical responses) and the doctor carries the consent responsibility for someone who may not be able to. Services deliver it all: assessment, intervention and follow-up, ordinary housing, supported living or group homes, work in integrated settings, and (the foundation of everything) trained staff who know that mental illness happens in ID too.",
    selfHelp: [
      "The three-check rule at home: before accepting 'it is the disability', check for physical illness (pain, constipation, teeth, reflux), then mood and worry, then changes at home or among carers, in that order.",
      "Ask for the functional analysis: what happens just before the behaviour, and what does the behaviour achieve? The answer usually points to the fix.",
      "Plan the school transition two years ahead: visit and trial placements, hold the handover meeting, register with adult services before the last day, and use every entitlement (RPwD, the National Trust) as early as possible.",
      "Start the guardianship and future-planning conversation under the National Trust framework while the parent can still fully participate: it is a process, not an emergency decision.",
      "Ask for respite before the crisis: in the double-ageing years, the day-care place and the respite plan are the family's survival equipment.",
      "Keep the medicine list short and honest: one change at a time, every tablet with a reason and a review date, and always ask what can be STOPPED.",
      "The carer's own health is the patient's health: the mother's blood pressure and memory are clinical facts about the person with ID too.",
    ],
    whenToSeekHelp: [
      "Any sudden behaviour change: suspect pain, constipation, dental or reflux first, and say so to the doctor",
      "Chest infections, swallowing trouble or repeated pneumonias: the care audit the respiratory mortality table demands",
      "Seizures or any episode of abrupt unresponsiveness with confusion afterwards: epilepsy with ID carries higher risk",
      "Signs of abuse: any disclosure, in any form, is escalated through safeguarding",
      "The carer's own collapse: exhaustion, illness, memory lapses: the family needs the service system the moment the informal system fails",
      "The last school year approaching with no adult placement arranged. Treat the unplanned transition as the emergency it is",
    ],
    indianResources: [
      "The National Trust Act framework (for autism, cerebral palsy, mental retardation and multiple disabilities): legal guardianship and the schemes that flow from it",
      "RPwD disability certification and entitlements, DD (District Disability) rehabilitation centres, and Anganwadi-based early detection",
      "The district mental health programme (DMHP) psychiatric tier and Tele-MANAS 14416 (24×7, free): the professional backbone behind the family-plus-NGO reality",
      "The disability pension (amounts and certification vary by state): ask the DD centre or the treating team for the current state process",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No dedicated Indian ID-treatment guideline exists; the architecture is statutory: the National Trust Act (1999) for autism, cerebral palsy, mental retardation and multiple disabilities (guardianship and legal capacity for adults who cannot decide for themselves) with RPwD entitlements, disability certificates and the DD (District Disability) rehabilitation schemes as the delivery reality, Anganwadi and the school system as the early-detection front line, and the DMHP psychiatric tier as the specialist input. Clinical practice follows the Oxford/DC-LD evidence this course teaches, delivered through that frame.",
    systemContext: "The mother is the de facto service system for the vast majority: the note's words, and the Indian clinic's daily truth. The family meets the system at the Anganwadi (early detection), the school (statementing's closest cousin), the DD rehabilitation centre, and the medical-college or district OPD when behaviour or health breaks. RPwD census-based registration undercounts intellectual disability massively, so the clinician's denominator is the waiting room, not the register.",
    programmeContext: "The National Trust Act's guardianship provisions (for adults with autism, cerebral palsy, mental retardation and multiple disabilities); RPwD entitlements and the disability certificate; DD rehabilitation schemes; Anganwadi-based early detection; the district mental health programme; Tele-MANAS 14416 as the 24×7 free backbone; the NGO sector carrying the group homes, day-care centres and sheltered workshops that exist at all.",
    costConsiderations: "Approx 2026: disability pension amounts and certification processes vary by state; special schooling and therapies are out-of-pocket for most; risperidone and antiepileptics are inexpensive (the rationalisation conversation (stopping drugs) is the harder one); group homes and supported living are scarce NGO-led models with almost no respite infrastructure; the realistic Indian scaling path is family-plus-NGO with Tele-MANAS-style professional backbones.",
    culturalConsiderations: "The family as the primary service is not a cultural failing. It is exactly what the informal-support finding predicts (informal care more efficacious than formal services for many families), and the Indian design question is how to strengthen it, not replace it. Indian ID prescribing culture is polypharmacy-prone: the single-change discipline and paradox-response vigilance apply verbatim. The double-ageing encounter (the ageing mother of a 50-year-old with Down syndrome) is a standard OPD pattern with almost no respite infrastructure behind it. The Indian school-leaver with ID faces a nearly bottomless transition cliff: day-care centres and sheltered workshops are scarce, so the last school years' planning conversation is the service the family will remember. Minority-ethnic unmet needs translate locally: language, caste and poverty decide which families reach the register at all.",
    patientCounselling: [
      "The one-line philosophy: 'The treatment is a team; the programme at home, the talking therapy, the carefully audited medicine, and the people around him all working the same plan; no single one of them alone is the treatment.'",
      "The three-check script: 'Before we say the disability is progressing, we check three things; his body (pain, constipation, teeth, reflux), his mood and worry, and what has changed at home. Usually one of those is the answer.'",
      "The medicine script: 'Tablets here start lower, go slower, and change one at a time, if something unexpected happens, that is information, not failure; call us.'",
      "The transition script: 'We start planning two years before school ends; placements visited, the handover held, adult services registered before the last day, and every certificate (RPwD, National Trust) applied for early, because the queue is part of the cliff.'",
      "The guardianship script: 'The National Trust guardianship conversation is not paperwork for its own sake. It is who signs, who decides, and who is protected when you cannot; we hold it while you are well, not in the emergency.'",
      "The carer script: 'Your blood pressure, your joints, your memory; these are facts about her care too. The day-care place and the respite plan are not luxuries; they are the treatment's other half.'",
    ],
  },
  decisionPath: {
    title: "The behaviour that changed in a person with intellectual disability",
    nodes: [
      {
        id: "start",
        question: "A person with ID presents with new or worsening behaviour. Before anything else, the screen:",
        branches: [
          { label: "Physical illness suspected (pain, bowels, teeth, reflux)", next: "physical-path" },
          { label: "Mood, anxiety or psychosis suspected behind the disability", next: "psychiatric-path" },
          { label: "Environment or carer has changed", next: "carer-path" },
          { label: "Crowding-triggered pattern in autism", next: "panic-path" },
        ],
      },
      {
        id: "physical-path",
        question: "The body first: the misattribution trap.",
        recommendation: "Examine and investigate: pain, constipation, dental disease, reflux, infection; the Down syndrome checklist where it applies (thyroid, hearing, the congenital consequences). Treat what is found before any psychiatric label. The respiratory mortality excess is the receipt for skipping this step.",
      },
      {
        id: "psychiatric-path",
        question: "The illness hiding behind the disability.",
        recommendation: "Apply the DC-LD discipline: depression and anxiety rise with age and treat as well as in the general population once noticed; OCD symptoms respond to serotonergic drugs; diagnostic overshadowing consciously set aside. Treat as in any patient, with the ID prescribing rules riding along (start lower, increase slower, one change at a time).",
      },
      {
        id: "carer-path",
        question: "The system speaking through the patient.",
        recommendation: "Assess the carer as deliberately as the patient: eye infections and tooth decay as the carer-breakdown signals; the ageing mother's own health audited (the double-ageing formulation); staff turnover and setting changes mapped. Strengthen the informal network rather than replacing it: respite and day care, not reprimand.",
      },
      {
        id: "panic-path",
        question: "The 'aggression' that is panic.",
        recommendation: "Run the ABC functional analysis: if the hitting is exclusively in crowding, preceded by agitation, ear-covering and escape attempts, treat it as panic-aggression; general clinical care first (staggered arrival, quiet ante-room, visual timetable on a lanyard), then group anger management teaching arousal signs. No medication as the first move.",
      },
      {
        id: "treatment-gate",
        question: "The screen is clear and the environmental tier optimised. The treatment ladder now:",
        branches: [
          { label: "Skills to teach, behaviours to replace", next: "behavioural-path" },
          { label: "Anger and irritability dominate", next: "anger-path" },
          { label: "Comorbid disorder persists after the non-drug tiers", next: "drug-path" },
          { label: "A life-course task is pressing (school-leaving, ageing carer)", next: "planning-gate" },
        ],
      },
      {
        id: "behavioural-path",
        question: "The behavioural programme.",
        recommendation: "Teaching appropriate skills and unlearning maladaptive behaviour: replacement over removal, because the behaviour was doing a job; delivered consistently by everyone around the person (parents and teachers can run it); punishment techniques only under close ethical control in unusual situations.",
      },
      {
        id: "anger-path",
        question: "The three-level anger model.",
        recommendation: "Level one: general clinical care; feel well, suitable environment, occupation and recreation. Level two: anger management; didactic group psychoeducation about anger's nature and signs. Level three: anger treatment; individualised work on cognitive perception, autonomic arousal and behaviour, engagement essential. Anxiety work from formal relaxation to physical activity, each an individual therapeutic trial.",
      },
      {
        id: "drug-path",
        question: "The audited prescription.",
        recommendation: "One change at a time; start lower, increase slower, expect the unexpected; carers given a contact; the prescriber carrying the consent responsibility the patient cannot. Class pearls: risperidone (RCT evidence, metabolic caution) for behavioural disturbance; lithium for explosive aggressive outbursts; propranolol 50–960 mg/day for panic-driven aggression; the naltrexone U-curve (5–20 mg autism, 100–200 mg self-injury) if the opioid-antagonist route is justified. Every prescription reviewed against social-role outcomes, not just symptoms.",
      },
      {
        id: "planning-gate",
        question: "Which life-course task is pressing?",
        branches: [
          { label: "School-leaving within two years", next: "transition-path" },
          { label: "The ageing-carer question (double ageing)", next: "double-ageing-path" },
        ],
      },
      {
        id: "transition-path",
        question: "The transition cliff, crossed by plan.",
        recommendation: "Two years ahead: placements visited and trialled, the school's multidisciplinary handover held, adult services registered before the last day, every entitlement used early (RPwD certificates, the National Trust framework). The young person with challenging behaviour needs this plan most, and is the least likely to receive it otherwise.",
      },
      {
        id: "double-ageing-path",
        question: "The double-ageing household.",
        recommendation: "Guardianship arrangements under the National Trust framework; supported-living or group-home transition negotiated as a process, not an emergency; sibling involvement; respite planned before the crisis; a day-care placement relieving the daytime load; and the carer's own health assessed: the mother's hypertension, arthritis and memory are the daughter's prognosis.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Accepting 'the disability is progressing' as the explanation for behaviour change",
      why: "The misattribution trap: pain, constipation, dental disease, reflux, depression and carer breakdown all present as behaviour change, and each is treatable when found.",
      correction: "The three-check rule, in order, every time: physical illness, psychiatric illness, carer or environment change; only then the disability itself, and even then treat what is treatable alongside it.",
    },
    {
      mistake: "Prescribing before the functional analysis",
      why: "The audit's standing criticism: off-label, non-diagnostic prescribing that tracks degree of disability rather than diagnosis; the panic-aggression that needed a quieter hall gets a neuroleptic instead.",
      correction: "The toolkit order: behavioural programme first (the research core), CBT and the anger levels second, the environmental tier genuinely tried; the prescription last, one change at a time.",
    },
    {
      mistake: "Changing two treatments at once",
      why: "Two simultaneous changes make both results uninterpretable: the team can never know what worked, and the paradox-response population punishes the ambiguity hardest.",
      correction: "The single-change discipline: one treatment at a time, with a review date and a named purpose; the outpatient's only instrument of knowledge.",
    },
    {
      mistake: "Treating the patient and forgetting the carer",
      why: "Carer breakdown presents as patient behaviour: the eye infections, the tooth decay, the 'worsening behaviour' in the 45-year-old whose 72-year-old mother is the whole care system.",
      correction: "The carer assessed as deliberately as the patient: her health, her exhaustion, her own cognitive lapses; respite and day care planned before the crisis: the double-ageing formulation made at the first visit, not the emergency.",
    },
    {
      mistake: "Leaving the transition to the last school day",
      why: "The cliff is abrupt, imposed and traumatic precisely because it is unplanned, and the young person with mental health problems or aggressive challenging behaviour falls furthest.",
      correction: "Two years ahead: placements visited, handover held, adult services registered, entitlements applied for; the last school years consumed productively by the choice of adult provision.",
    },
    {
      mistake: "Assuming a person with ID cannot also have mental illness",
      why: "Diagnostic overshadowing: the illness hides behind the disability and behind behaviour the carers read as 'just how he is'; psychiatric morbidity of 10–30%+ goes unrecognised and untreated.",
      correction: "The staff-training core message: a person with ID may suffer mental illness like anyone else; taught to every first-level carer (ASHA workers, teachers, NGO staff), with the myths (medication-is-failure) dispelled alongside it.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The treatment toolkit order: behavioural first (the research core), cognitive-behavioural with the anger-management flagship, psychodynamic (the six adaptations), pharmacological (the audited tier), and why they complement rather than compete.",
        "The anger model's three levels and the obstacles ID adds: an excessive rather than deviant response; organic factors (brain damage, epilepsy, medication); limited communication; entrenched habitual use, with autism's panic reading as the standing caution.",
        "The six psychodynamic adaptations for ID: loss-and-disability themes; concrete, simple, colloquial, unhurried communication (music, art, play, drama); learning their world; repetition of information as if never said; readiness to disengage; confidentiality barely established.",
        "The prescribing cautions: start lower, increase slower, expect the unexpected, give carers a contact, change one thing at a time, and the prescriber's greater responsibility precisely because the patient's capacity to decide is reduced.",
        "The transition cliff: why the move to adult services is abrupt, imposed and traumatic, and which young people fare worst (those with mental health problems or aggressive challenging behaviour).",
      ],
      practical: [
        "Demonstrate an ABC (antecedent-behaviour-consequence) functional analysis of a presented behaviour: the chart that precedes every prescription in this population.",
        "Take the family interview: the grief-sequence history (shock, numb disbelief, mourning the expected normal child) and the double-ageing carer assessment in one consultation.",
      ],
      longAnswer: [
        "Discuss the treatment of behavioural and psychiatric disturbance in a person with intellectual disability: the multi-method toolkit, the drug-class audit and the single-change discipline (the evergreen essay).",
        "Describe the service architecture for people with intellectual disability and mental illness: the two models, the three phases, staff training and the commissioning checklist.",
      ],
    },
    neetPg: {
      highYield: [
        "THE TOOLKIT LAW: behavioural, cognitive-behavioural, psychodynamic and pharmacological complement, never isolate; the psychiatrist monitors medication against SOCIAL-ROLE outcomes, not just symptoms.",
        "THE BEHAVIOURAL CORE: teaching appropriate skills + unlearning maladaptive behaviour; replacement beats removal; more research-based than most psychiatric treatments, capable of profound rapid change.",
        "THE ANGER LADDER: (1) general clinical care (feel well, environment, occupation, recreation); (2) anger management (didactic group psychoeducation); (3) anger treatment (individualised, cognitive perception, autonomic arousal, behaviour).",
        "THE PHARMACOLOGY RULES: start lower, increase slower, expect the unexpected, one change at a time; non-compliance is usually formulation or carer prejudice, NOT forgetfulness.",
        "THE CLASS PEARLS: risperidone (RCT evidence, metabolic-syndrome caution); lithium (aggressive outbursts with irritability and explosiveness); propranolol 50–960 mg/day (panic-driven aggression); the naltrexone U-curve (5–20 mg autism; 100–200 mg self-injury).",
        "THE TRANSITION CLIFF: administrative prevalence falls sharply in adulthood; those with mental health problems or aggressive challenging behaviour are the LEAST likely to receive support for independent lives.",
        "THE AGEING NUMBERS: <50% of ID deaths at 65+ (vs 83% in the general population); respiratory disease the leading cause; epilepsy + ID mortality up to 5×; Down syndrome–Alzheimer: neuropathology universal, clinical dementia NOT inevitable.",
        "DOUBLE AGEING: elderly carers caring for ageing 'children', both vulnerable, needs not always compatible, declining informal networks, service input essential as the informal system fails.",
        "THE FAMILY SEQUENCE: a grief-like response to diagnosis (shock, numb disbelief, mourning the expected normal child); informal support MORE efficacious than formal services for many families; adjustment as a series of crises (diagnosis, school assessment, placement, puberty, leaving home).",
        "THE SERVICE MODELS: generic ID community teams (weak links with mainstream mental health for mild ID, forensic problems, autism, borderline functioning) vs specialist mental health services for people with ID (the South London model since 1982); the three phases: assessment, intervention, follow-up.",
        "THE MATRIX MODEL: system level × input-process-outcome; the best available outcomes-evaluation framework; the specialist-unit advantage over generic admission sustained at 6 and 12 months; assertive vs standard community treatment: no difference (one RCT).",
        "THE STAFF-TRAINING CORE: awareness that a person with ID may suffer mental illness like anyone else; the most basic and vital role in the system; the myths (medication-is-failure) dispelled with it.",
      ],
      pyqConcepts: [
        "The naltrexone dosage U-curve: the one-line pharmacology answer that appears in every exam tier.",
        "The double-ageing definition: the social-psychiatry short note.",
        "The two service models and the generic team's interface weakness: the service-design discussion question.",
        "The staff-training core message: the community-psychiatry viva staple.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 16-year-old boy with autism and moderate ID is referred for 'aggression at the day centre', hitting peers when the hall fills. The functional analysis finds the hitting exclusively under crowding, each episode preceded by agitation, ear-covering and escape attempts. The reasoning chain: panic-aggression, not oppositional behaviour (autism's crowding panic, the chapter's explicit caution); the three-level anger model from its base: general clinical care first (staggered arrival, a quiet ante-room, a visual timetable on a lanyard), then didactic group anger management of arousal signs; individual anger treatment not needed; no medication; the single-change discipline letting the team see what worked: the pattern resolving with the environmental change alone. The lesson: the ABC analysis preceded any prescription, and the environment treated what no tablet reaches.",
        "A 72-year-old widow brings her 45-year-old daughter (Down syndrome with early Alzheimer changes) for 'worsening behaviour': night wandering, misplacing belongings, screaming at bath time; the mother's own health failing (hypertension, arthritis, early cognitive lapses of her own). The reasoning chain: the double-ageing formulation (escalating dementia in the daughter, degrading carer capacity in the mother, no other support system); dementia workup and symptomatic planning (night-lights, single-step instructions, bath-time restructure); aetiology-specific surveillance (thyroid, hearing, the Down syndrome checklist: determine aetiology even late); the guardianship and future-planning conversation under the National Trust framework; a day-care placement relieving the daytime load; respite planned BEFORE crisis; the mother's own cognitive assessment scheduled. The lesson: carer breakdown presents as patient behaviour, and future-planning is a clinical task, not a formality.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Behavioural treatment: teach skills + unlearn behaviours; replacement beats removal.",
        "Start low, go slow, expect paradox: the ID prescribing rule, one change at a time.",
        "The transition cliff: those with challenging behaviour fare worst.",
        "Double ageing: the elderly carer and the ageing person with ID, both vulnerable.",
        "The Matrix Model: the outcomes-evaluation framework for ID mental health services; staff training the rate-limiter.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The referred behaviour is a message in the only language the communication barrier permits: run the three-check rule (physical illness, psychiatric illness, carer change) before any formulation hardens; the respiratory mortality excess is what skipping it accumulates into.",
        "Prescribing in ID is a consent problem before it is a pharmacology problem: the prescriber consciously carries the responsibility the patient's reduced capacity cannot; documented, reviewed, and rationed to one change at a time.",
        "The single-change discipline is the outpatient's only instrument of knowledge: two simultaneous changes make both results uninterpretable, and the rationalisation programme (stopping drugs) is itself a treatment with an evidence base.",
        "The double-ageing OPD encounter (the ageing mother of a 50-year-old with Down syndrome) is a standard Indian pattern with almost no respite infrastructure: the respite conversation held BEFORE the crisis is the consultation's highest-value sentence, and the mother's own cognitive assessment is part of the daughter's management plan.",
        "Guardianship and future planning under the National Trust framework are clinical tasks, not paperwork: the family that plans while the parent can still participate converts an emergency into a transition; the difference between a placement and an abandonment.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The crowd that hurt",
      presentation: "A 16-year-old boy with autism and moderate ID, referred for 'aggression at the day centre': hitting peers only when the hall fills, ear-covering before every strike.",
      initialPresentation: "A 16-year-old boy with autism and moderate intellectual disability was referred by his day centre for 'aggression', hitting peers when the hall filled. The referral described daily incidents; the functional analysis found the hitting occurred exclusively under crowding, each episode preceded by agitation, ear-covering and attempts to escape: a panic-aggression pattern, not oppositional behaviour.",
      history: "Autism with moderate ID from early childhood; no epilepsy; no recent medication changes; the day centre had recently doubled its afternoon intake: the crowding trigger arriving with the new admissions.",
      examination: "Calm and engaged in a quiet room; the arousal signs (agitation, ear-covering, escape attempts) reproduced as the observation space filled: the ABC (antecedent-behaviour-consequence) chart mapping the whole pattern in a single morning.",
      diagnosis: "Panic-driven aggression in autism: the 'aggression' reading of excessive anxiety amounting to panic, not a behavioural disorder.",
      management: "The anger model from its base: general clinical care first; staggered arrival, a quiet ante-room, a visual timetable carried on a lanyard; then anger management: didactic group teaching of arousal signs; individual anger treatment not needed. No medication: the single-change discipline letting the team see exactly what worked.",
      outcome: "The pattern resolved with the environmental change alone: the crowd managed, the hitting gone, no prescription ever written.",
      teachingPoints: [
        "Autism's 'aggression' is often excessive anxiety amounting to panic: the chapter's explicit caution before any behavioural label.",
        "The ABC functional-analysis route preceded any prescription: the toolkit's order respected.",
        "The single-change discipline let the team see what worked: one environmental change, measured clean.",
        "General clinical care (feel well, suitable environment, occupation) is level one of the anger model, not a preamble to it.",
      ],
    },
    {
      title: "The mother who could not answer",
      presentation: "A 72-year-old widow brings her 45-year-old daughter (Down syndrome with early Alzheimer changes) for 'worsening behaviour'; behind every answer sits the question of who will care when she cannot.",
      initialPresentation: "A 72-year-old widow presented with her 45-year-old daughter, who has Down syndrome with early Alzheimer changes, for 'worsening behaviour': wandering at night, misplacing belongings, and screaming at bath time. The mother's own health was failing (hypertension, arthritis, and early cognitive lapses of her own) and no other support system existed.",
      history: "Down syndrome from birth; the mother the sole carer for four decades; recent months of nocturnal wandering and bath-time distress; the daughter's daytime routine previously stable; the mother's arthritis and hypertension worsening, her own memory lapses noticed first by the neighbours.",
      examination: "The daughter: disorientation to time, misplaced belongings re-located by the mother, distress through the bathroom sequence; the Down syndrome checklist applied: thyroid status and hearing checked before 'dementia' was accepted as the whole answer. The mother: exhausted, arthritic, her own cognitive screening scheduled.",
      diagnosis: "Double ageing: escalating dementia in a woman with Down syndrome, degrading carer capacity in her 72-year-old mother; two people ageing on one diagnosis.",
      management: "Dementia workup and symptomatic planning: night-lights, single-step instructions, a restructured bath time; aetiology-specific surveillance (thyroid, hearing, the Down syndrome health implications); the guardianship and future-planning conversation under the National Trust framework; a day-care placement relieving the daytime load; respite planned before crisis; the mother's own cognitive assessment scheduled.",
      outcome: "The daytime placement held the weekdays and the night-lights held the nights; the guardianship application began while the mother could still participate; the respite plan preceded the crisis, with the mother's own cognitive assessment kept as the family's next fixed appointment.",
      teachingPoints: [
        "Determine aetiology even late in life: the Down syndrome checklist (thyroid, hearing) audited before 'dementia' is accepted as the whole answer.",
        "Carer breakdown presents as the patient's behaviour: the mother's hypertension is part of the daughter's diagnosis.",
        "Future-planning is a clinical task, not a formality: the National Trust guardianship conversation belongs inside the consultation.",
        "The family needs the service system the moment the informal system fails: the double-ageing law, operative in every OPD.",
      ],
    },
  ],
  clinicalPearls: [
    "No other psychiatric field depends so completely on teamwork: the four methods complement and never isolate, and the psychiatrist monitors medication against social-role outcomes, not just symptoms.",
    "Behavioural programmes are among the most research-backed treatments in psychiatry: teach the skill, unlearn the behaviour; replacement beats removal, because the behaviour was doing a job.",
    "Anger in ID is an excessive response, not a deviant one: often organic (brain damage, epilepsy, medication), sometimes panic in autism: run the three levels before reaching for the prescription pad.",
    "Start lower, increase slower, expect the unexpected, and change ONE treatment at a time; the single-change discipline is what lets the team see what worked.",
    "The naltrexone U-curve: 5–20 mg for autistic disturbance, 100–200 mg for self-injury; the emblem of ID pharmacology's counterintuitive precision.",
    "Risperidone carries RCT evidence for behavioural disturbance, and the metabolic-syndrome concern rides with it; lithium earns its place for explosive aggressive outbursts with irritability.",
    "Propranolol 50–960 mg/day for panic-driven aggression: the crowded-hall signature; non-sedating, but it can depress.",
    "Before accepting 'the disability is progressing': physical illness, psychiatric illness, carer change, in that order, every time.",
    "<50% of deaths in people with ID occur at 65+ versus 83% in the general population; respiratory disease leads (pneumonia, swallowing, reflux) the pattern that indicts unrecognised need.",
    "Down syndrome and Alzheimer's disease: the neuropathology is universal by middle age; the clinical dementia is not inevitable.",
    "Informal support is more efficacious than formal services for many families: services should strengthen the natural network, never replace it.",
    "Staff training is the rate-limiter: the core message (a person with ID may suffer mental illness like anyone else) is the most basic and vital role in the whole system.",
  ],
  highYieldSummary: [
    "The architecture: treatment in ID is a multi-method toolkit (behavioural, cognitive-behavioural, psychodynamic, pharmacological) whose methods complement and never isolate each other; delivered by a service machinery (community teams, specialist mental health input, housing, work, trained staff); carried by families who grieve, adjust and age alongside the person: the psychiatrist's job being to hold the whole system together and monitor medication against social-role outcomes, not just symptoms.",
    "The toolkit: behavioural programmes (teaching skills + unlearning maladaptive behaviour; replacement beats removal; the research core, capable of profound rapid change; punishment only under close ethical control); CBT adapted for the mild/borderline range (anger management the flagship, three levels: general clinical care, didactic group psychoeducation, individualised anger treatment on perception, arousal and behaviour; rational emotive therapy; problem-solving gains sometimes GREATER in moderate than mild ID); psychodynamic therapy with the six ID-specific adaptations (loss themes, concrete communication, learning their world, repetition, readiness to disengage, barely-established confidentiality, efficacy honestly weak); and the pharmacological audit.",
    "The pharmacology: off-label non-diagnostic prescribing tracks degree of disability and autism, no less in the community than in institutions, reduced only by determined rationalisation; the rules: start lower, increase slower, expect the unexpected, one change at a time, carers given a contact, the prescriber carrying the consent responsibility; the class audit: risperidone (RCT evidence, metabolic caution), antidepressants (depression treatable once noticed; OCD symptoms respond to serotonergic drugs; paradoxical anxiety as partial serotonin syndrome), propranolol 50–960 mg/day (panic-aggression), stimulants (ADHD with ID), lithium (explosive aggressive outbursts), the naltrexone U-curve (5–20 mg autism, 100–200 mg self-injury), antilibidinal agents (a supplement to teaching, decided with patient, family and carers).",
    "The life course: the transition cliff at school-leaving; abrupt, imposed, traumatic, the single-agency children's world giving way to the multi-agency adult world, with the challenging-behaviour group least likely to receive support; the ageing tier: rising longevity (especially Down syndrome), the normal-ageing causes of death atop the persistent respiratory excess (<50% of deaths at 65+ vs 83%; epilepsy + ID mortality up to 5×), Down syndrome's middle-age Alzheimer risk (neuropathology universal, clinical dementia not inevitable) and the health needs poorly accessed because illness goes unrecognised; and double ageing: the elderly carer caring for the ageing 'child', both vulnerable, needs not always compatible, service input essential as the informal system fails.",
    "The family: diagnosis as a grief sequence; shock or numb disbelief, then the mourning of the expected normal child; informal support more efficacious than formal services for many families (with parent discussion groups helping some, not all); adjustment as a series of crises (diagnosis, failed treatments, school assessment, specialised placement, puberty, leaving home); the ageing parents' who-continues-care crisis, with forward planning begun long before frailty and the transition to supported living negotiated as a process, not an emergency.",
    "The services: dual diagnosis (10–30%+ psychiatric morbidity) as the planning problem; the two models: generic ID community multidisciplinary teams (weak links with mainstream mental health for mild ID, forensic problems, autism, borderline functioning) and specialist mental health services for people with ID (the South London model since 1982: outpatient clinics, outreach, inpatient assessment and treatment, consultation; three phases: assessment with instruments like the Aberrant Behaviour Checklist, intervention with crisis-prevention plans and integrated training, follow-up at quarterly-to-half-yearly contact; person-centred Care Programme Approach coordination); the Matrix Model (system level × input-process-outcome) as the best available evaluation framework; the specialist-unit advantage over generic admission sustained at 6 and 12 months, with assertive vs standard community treatment showing no difference in one RCT.",
    "The delivery principles and the Indian tier: residential; ordinary housing, group homes (3–8 people) succeeded by supported living, no one model suiting all; vocational: integrated settings, manageable productivity, adequate pay, individual placement raising wages most; staff training the rate-limiter, its core message that a person with ID may suffer mental illness like anyone else; commissioning: joint health-social commissioning, client and carer participation, baseline needs assessment, outcomes into specifications. India: the National Trust Act (1999) providing legal guardianship for adults with autism, cerebral palsy, mental retardation and multiple disabilities; RPwD entitlements and certificates, DD schemes and Anganwadi early detection; the family (usually the mother) as the de facto service system; the transition cliff nearly bottomless for Indian school-leavers; the double-ageing OPD encounter standard; and the family-plus-NGO scaling path with Tele-MANAS-style backbones as the realistic future.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "idts-quiz-1",
      question: "The two complementary areas of behavioural treatment in intellectual disability are:",
      options: ["Punishment and restraint", "Teaching appropriate skills and unlearning maladaptive behaviour — replacement beating removal", "Medication and psychotherapy", "Vocational training only"],
      correctIndex: 1,
      explanation: "The complementary pair: a behaviour doing a job is replaced by a skill doing the same job — removal alone leaves the need unfilled and the behaviour returns.",
      afterSectionId: "mechanism",
    },
    {
      id: "idts-quiz-2",
      question: "The naltrexone 'dosage U-curve' in intellectual disability refers to:",
      options: ["The same dose for all indications", "Autism responding at very low doses (5–20 mg/day) while self-injury, if it responds, needs 100–200 mg/day — many trials falling between", "Dose increasing with age", "Effect independent of dose"],
      correctIndex: 1,
      explanation: "Two therapeutic windows — an exam-ready example of ID pharmacology's counterintuitive precision in a brain that responds unpredictably.",
      afterSectionId: "management",
    },
    {
      id: "idts-quiz-3",
      question: "The 'double ageing' problem refers to:",
      options: ["Twins with intellectual disability", "Elderly carers (typically parents) caring for ageing relatives with ID — both vulnerable, needs potentially incompatible", "Premature dementia in all people with ID", "Two services managing one person"],
      correctIndex: 1,
      explanation: "The household where carer and cared-for age together; service input becomes essential precisely as the informal system fails.",
      afterSectionId: "timeline",
    },
    {
      id: "idts-quiz-4",
      question: "The most basic and vital role of first-level support staff in ID mental health is:",
      options: ["Diagnosing schizophrenia", "Awareness that a person with intellectual disability may suffer a mental illness, like anyone else", "Adjusting medication doses", "Conducting psychotherapy"],
      correctIndex: 1,
      explanation: "The training core from which recognition, the knowledge of therapeutic options and the dispelling of myths follow — the ASHA worker, the teacher and the NGO carer are this tier in India.",
      afterSectionId: "indian-practice",
    },
    {
      id: "idts-quiz-5",
      question: "The main weakness of generic ID community multidisciplinary teams is:",
      options: ["Too many psychiatrists", "Weak links with mainstream mental health services — especially for mild ID, forensic needs, autism and borderline functioning", "Excessive funding", "Over-admission to specialist units"],
      correctIndex: 1,
      explanation: "The interface gap — the reason the specialist mental health service model for people with ID evolved alongside.",
      afterSectionId: "diagnosis",
    },
    {
      id: "idts-quiz-6",
      question: "Family research on intellectual disability consistently finds that for many families:",
      options: ["Formal professional services are more efficacious than informal support", "Informal support from family and neighbours is more efficacious", "Support makes no difference", "Parent discussion groups help all parents equally"],
      correctIndex: 1,
      explanation: "Informal support's primacy — the planning implication being that services should strengthen natural networks, not replace them; discussion groups help some, not all.",
      afterSectionId: "symptoms",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the two complementary areas of behavioural treatment, and explain why replacement beats removal.", answer: "AREA ONE: teaching appropriate skills: dressing, continence, communication and sleep at the base, rising through social skills, dating skills and assertiveness. AREA TWO: unlearning maladaptive behaviour. WHY REPLACEMENT BEATS REMOVAL: the behaviour exists because it achieves a function (attention, escape, sensory relief) in a person whose communication barrier blocks the ordinary routes to those functions; removal alone leaves the need unfilled, so the behaviour returns or mutates; a taught replacement skill achieves the same function legitimately, and the maladaptive behaviour loses its job. The supporting evidence: behavioural programmes are more research-based than most psychiatric treatments and produce profound, rapid change, with operant incentive programmes dominating institutional and offender work, and punishment techniques working but raised only under close ethical control, in unusual situations." , topic: "Treatment toolkit" },
    { question: "Recite the three levels of the anger model and the obstacles ID adds to anger work.", answer: "LEVEL ONE: general clinical care: the person feels well, lives in a suitable environment, and has occupation and recreation (this level alone resolves many referred 'behaviour problems'). LEVEL TWO: anger management: didactic group instruction, psychoeducation about anger's nature and its early signs. LEVEL THREE (anger treatment: an individualised programme targeting cognitive perception, autonomic arousal and behaviour) engagement essential, transference evocative. THE OBSTACLES: (1) anger in ID is an EXCESSIVE rather than a deviant response; (2) organic factors are frequent: brain damage, epilepsy, medication; (3) limited communication hampers engagement; (4) entrenched habitual use. The fifth caution: in autism, 'aggression' may be panic; excessive anxiety, not opposition." , topic: "Treatment toolkit" },
    { question: "List the six ID-specific adaptations of psychodynamic therapy, with the honesty note on efficacy.", answer: "(1) CORE THEMES ARE LOSS AND DISABILITY: the field moved from blaming parents to treating the emotional factors that reduce adaptive functioning; adjustment is a series of grief-like crises (diagnosis, failed early treatments, school assessment, specialised placement, puberty, leaving home). (2) CONCRETE, SIMPLE, COLLOQUIAL, UNHURRIED COMMUNICATION: music, art, play and drama as the media. (3) THE PATIENT ASSUMES THE THERAPIST KNOWS THEIR WORLD, so the therapist must learn their background. (4) REPETITION of information as if never said: the memory and executive problems demand it. (5) READINESS TO DISENGAGE: lives of nomadic, short relationships. (6) CONFIDENTIALITY BARELY ESTABLISHED: dependency discourages privacy, carers expect disclosure, and content may include poor care or frank abuse. THE HONESTY NOTE: efficacy evidence is weak; psychotherapy complements education into a more emotionally mature, better-coping person: it does not compete with the behavioural core." , topic: "Treatment toolkit" },
    { question: "State the ID prescribing cautions, then give one drug-class pearl each for risperidone, lithium, the opioid antagonists and the beta-blockers.", answer: "THE CAUTIONS: drugs are used off-label for non-diagnostic purposes; prescribing prevalence tracks degree of disability and autism and is no less in the community than in institutions, reduced only by determined rationalisation programmes; non-compliance is usually formulation or carer prejudice, not forgetfulness; coexistent disorders (epilepsy, constipation, cerebral palsy) increase vulnerability; cerebral dysfunction produces frequent atypical and paradoxical responses; the evidence is largely anecdotal and small open trials; the prescriber carries greater responsibility precisely because the patient's capacity to decide is reduced. Start lower, increase slower, expect the unexpected, give carers a contact, change ONE treatment at a time. THE PEARLS: RISPERIDONE; the RCT evidence for behavioural disturbance, with the metabolic-syndrome concern riding along. LITHIUM: effective for aggressive outbursts, particularly with irritability and explosiveness (episodic dyscontrol with possible epileptic basis). OPIOID ANTAGONISTS: naltrexone's U-curve: 5–20 mg for autism, 100–200 mg for self-injury, many trials falling between. BETA-BLOCKERS: propranolol 50–960 mg/day for panic-driven aggression, as in the crowded autistic patient; non-sedating, but can depress." , topic: "Pharmacology" },
    { question: "What happens at the transition cliff, and which young people fare worst?", answer: "WHAT HAPPENS: the school-leaver moves abruptly from the protective, single-agency world of children's services into the bewildering multi-agency adult world; a transition that is imposed, abrupt and traumatic for the young person and the parents alike, who are often told their opinion no longer counts; administrative prevalence falls sharply in adulthood (only the severe and complex reach adult services), and the last school years are consumed by the choice of adult provision. WHO FARES WORST: successful adult transition (job, independence, leaving home) is less likely the more severe the disability, and those with mental health problems or aggressive challenging behaviour are the LEAST likely to receive support for independent lives. The health needs that must be carried across the cliff: epilepsy, psychiatric disorder, sensory impairments, autism, with Health Action Plans (the Valuing People initiative) as the attempt to close the information gap. The clinical rule: plan two years ahead, hold the multidisciplinary handover, register with adult services before the last day." , topic: "Life course" },
    { question: "Recite the ageing quartet: the mortality pattern, the respiratory finding, the Down syndrome risks and the double-ageing problem.", answer: "MORTALITY PATTERN: <50% of deaths in people with ID occur at 65+ versus 83% in the general population; premature mortality, with epilepsy + ID carrying mortality up to 5× the general population. RESPIRATORY FINDING: respiratory disease remains the leading cause of death (pneumonia, swallowing problems, reflux); the pattern suggesting lack of effective care; rising longevity (especially in Down syndrome) adds the normal-ageing causes (stroke, heart disease, cancer) on top. DOWN SYNDROME RISKS: sensory impairment, thyroid disease, leukaemia, atlanto-axial instability, congenital-heart consequences, and the Alzheimer's disease risk in middle age, with the neuropathology universal but clinical dementia NOT inevitable; health needs are significant and poorly accessed (illness unrecognised by patient and carer, behaviour changes misattributed to the disability, health screening underused, eye infections and tooth decay signalling carer breakdown). DOUBLE AGEING: elderly carers caring for ageing 'children', both vulnerable, needs not always compatible, informal networks declining, and service input becoming essential precisely as the informal system fails; the forward planning must begin long before frailty, with the transition to supported living negotiated as a process, not an emergency." , topic: "Life course" },
    { question: "Compare the two service models for dual diagnosis, name the three service phases, and describe the Matrix Model.", answer: "MODEL A (generic ID community multidisciplinary teams: psychiatry, psychology, functional-analysis and behavioural input) the deinstitutionalisation workforce; their weakness: weak links with mainstream mental health, especially for mild ID with mental illness, forensic problems, autism and borderline functioning. MODEL B (specialist mental health services for people with ID (the South London model since 1982): outpatient clinics, outreach, inpatient assessment and treatment, consultation) staffed by psychiatrists, community nurses, psychologists, occupational therapists, speech and language therapists and social workers; admission to generic beds with consultative support plus a small specialist unit for comprehensive assessment, coordinated through the person-centred Care Programme Approach. THE THREE PHASES: (1) ASSESSMENT; structured clinical assessment with instruments like the Aberrant Behaviour Checklist; (2) INTERVENTION: medication, environmental manipulation, psychological treatments, crisis-prevention plans, with training as an integrated function; (3) FOLLOW-UP: quarterly-to-half-yearly maintenance contact. THE MATRIX MODEL: the outcomes-evaluation framework crossing system level with input-process-outcome; the best available; the specialist-unit advantage over generic admission (symptom and functioning improvement sustained at 6 and 12 months), while assertive vs standard community treatment showed no difference in one RCT." , topic: "Services" },
    { question: "Describe the family grief sequence and the informal-support finding, and give the staff-training core message with the commissioning checklist.", answer: "THE GRIEF SEQUENCE: diagnosis now often happens in pregnancy or at birth; the parents' reactions run as grief: shock or numb disbelief first, then the mourning of the expected normal child (Down syndrome, the most commonly recognised at-birth cause, carrying the early genetic-counselling need); adjustment continues as a series of crises through school assessment, placement, puberty and leaving home. THE INFORMAL-SUPPORT FINDING: informal support (family, neighbours) is more efficacious than formal services for many families; the planning implication being that services should strengthen natural networks, not replace them; not all parents benefit from parent discussion groups. THE STAFF-TRAINING CORE: first-level care workers receive little or no training in the psychiatric aspects of ID, so illness goes unrecognised; the core curriculum is the awareness that a person with ID may suffer mental illness like anyone else, the range of therapeutic options, and the dispelling of myths (medication-is-failure): training built around real clients, embedded in organisational culture, managers included. THE COMMISSIONING CHECKLIST: joint health-social commissioning; client and carer participation; statutory and voluntary agencies involved; baseline needs assessment; local and national policy into vision; desired local outcomes into service specifications; purchase of the necessary skills." , topic: "Families and services" },
  ],
  faqs: [
    { question: "Can people with intellectual disability really have mental illness too?", answer: "Yes, at rates higher than the general population (figures around 10–30%+), and often unrecognised: the illness hides behind the disability (diagnostic overshadowing) and behind behaviour that carers read as 'just how he is'. Treating it is the whole point of dual-diagnosis services, and of the staff-training message this course exists to spread." },
    { question: "Are medicines appropriate for someone who cannot understand them?", answer: "Sometimes, but under the tightest discipline in psychiatry: everything else genuinely tried first, one change at a time, lower starting doses, slower increases, alertness to paradoxical responses, and the prescriber consciously carrying the consent responsibility the patient cannot. Every prescription is an individual therapeutic trial with a named purpose and a review date." },
    { question: "Why is her behaviour worse: is the disability progressing?", answer: "Check three things first, in order: physical illness (pain, constipation, dental problems, reflux, the behaviour-misattribution trap), psychiatric illness (depression and anxiety rise with age in ID), and carer or environment change. Only then accept progression, and even then, treat what is treatable alongside it." },
    { question: "Our son is leaving school next year. What will he do?", answer: "You are standing at the transition cliff. Plan two years ahead where you can: visit and trial placements, hold the school's multidisciplinary handover, register with adult services before the last school day, and use every entitlement (RPwD and the National Trust framework in India) as early as possible. The young person with challenging behaviour is the least likely to receive support otherwise. The plan is the protection." },
    { question: "I am 68. Who will care for him when I cannot?", answer: "This is the double-ageing question, and it deserves an answer built as a process, not an emergency: guardianship arrangements (the National Trust framework in India), supported-living options, sibling involvement, respite services; planned now, while you can still participate fully. The family needs the service system in place before the informal system fails, not after." },
    { question: "Do behaviour programmes actually work?", answer: "Among the most research-backed treatments in psychiatry, capable of profound and rapid change: provided they replace behaviours with skills that do the same job, run on a good functional analysis, and are delivered consistently by everyone around the person. Punishment-based techniques are a different matter: they can work, but only under close ethical control, in unusual situations." },
    { question: "What is the National Trust, and do we need guardianship?", answer: "The National Trust Act (1999) is India's legal framework for people with autism, cerebral palsy, mental retardation and multiple disabilities: it provides for guardianship and legal capacity where an adult cannot decide for themselves. If your son or daughter cannot manage money, safety or consent decisions alone, the guardianship conversation belongs in the consultation, not the courthouse corridor: held early, with the RPwD certificate and the DD-scheme entitlements applied for alongside." },
    { question: "Can he ever work?", answer: "The vocational ladder exists: integrated settings, manageable productivity, adequate pay, and individual placement (a job in the ordinary workplace with support) raises wages the most. The honest Indian reality: sheltered and supported employment are both scarce, and people with mental health problems as well as ID are under-represented in both, so the day-care centre, the NGO workshop and the family business's adapted role are the rungs most Indian families actually climb." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Royal College of Psychiatrists (2001) — DC-LD: diagnostic criteria for psychiatric disorders for use with adults with learning disabilities" },
      { source: "Valuing People (2001) White Paper — Health Action Plans and the person-centred framework; the Disability Rights Commission/Mencap inequality reports" },
      { source: "The National Trust Act (1999) and the RPwD entitlement architecture — the Indian legal layer (guardianship, certification, DD schemes)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 10.6–10.9 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Dosen A & Day K (eds.) — Treating mental illness and behavior disorders in children and adults with mental retardation (the treatment-methods base, as cited)" },
      { source: "Emerson E — Challenging behaviour: analysis and intervention (the behavioural foundation)" },
    ],
    trials: [
      { source: "Cooper SA et al. (2006) — Improving the health of people with intellectual disabilities: outcomes of a health screening programme" },
      { source: "The Bouras & Holt outcome lineage — the specialist-unit vs generic-admission studies (improvement sustained at 6 and 12 months) and the assertive-vs-standard community treatment RCT" },
    ],
    reviews: [
      { source: "Benson BA & Valenti-Hein D (2001) — cognitive and social learning treatments in intellectual disability" },
      { source: "The Novaco anger-management adaptations and the UK Training Package in the Mental Health of Learning Disabilities (as cited)" },
      { source: "Hollins S et al. — Beyond Words pictorial health education and family work; Hubert J & Hollins S — the adolescence and ageing synthesis" },
      { source: "Gath A & McCarthy J — the families synthesis (with the Nottingham and Newson studies)" },
      { source: "Bouras N & Holt G — the South London Community Mental Health in ID Service (since 1982), including the Matrix Model (Moss et al.)" },
      { source: "Menolascino F — service recommendations for dual diagnosis (as cited)" },
      { source: "Inclusion International — the 80-country carers' report" },
    ],
    patientResources: [
      { source: "Beyond Words — pictorial health-education materials for people with intellectual disabilities and their families" },
      { source: "The National Trust, DD rehabilitation centres and Anganwadi early detection — the Indian delivery reality; Tele-MANAS 14416 (24×7, free) for the family's distress and the carer's exhaustion" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the team treatment, the three-check rule, the transition and guardianship plans, the carer's own health.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The toolkit order, the anger ladder, the prescribing cautions, the service models.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything: the drug-class audit, the Matrix architecture, the National Trust layer, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The toolkit law, the life-course map, the population arithmetic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the four toolkit methods and the three service phases cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Why each method works: learning, arousal, grief, vulnerability, delivery.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why replacement beats removal and why drug responses run paradoxical." },
    { number: 3, title: "Clinical Practice", description: "The referral, the assessment discipline, the audited treatment tiers.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the three-check rule and the single-change discipline." },
    { number: 4, title: "Indian Context", description: "The National Trust layer, the family as the service, the Indian transition and double-ageing reality.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the guardianship-and-future-planning conversation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the services essay cold and recite the class pearls without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 10.6–10.9 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Dosen A & Day K (eds.) — Treating mental illness and behavior disorders in children and adults with mental retardation (the treatment-methods base, as cited by the source chapter)", sourceType: "textbook", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Royal College of Psychiatrists — DC-LD: diagnostic criteria for psychiatric disorders for use with adults with learning disabilities", sourceType: "guideline", year: "2001", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Emerson E — Challenging behaviour: analysis and intervention (the behavioural foundation)", sourceType: "textbook", year: "1995", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Benson BA & Valenti-Hein D — cognitive and social learning treatments in intellectual disability", sourceType: "review", year: "2001", dateReviewed: "2026-09-29" },
    { id: "S6", source: "The Novaco anger-management adaptations and the UK Training Package in the Mental Health of Learning Disabilities (as cited)", sourceType: "review", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Cooper SA et al. — Improving the health of people with intellectual disabilities: outcomes of a health screening programme", sourceType: "primary", year: "2006", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Hollins S et al. — Beyond Words pictorial health education and family work; Hubert J & Hollins S — the adolescence and ageing synthesis (ch 10.7)", sourceType: "review", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Gath A & McCarthy J — the families synthesis (ch 10.8, with the Nottingham and Newson studies)", sourceType: "review", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Bouras N & Holt G — the South London Community Mental Health in ID Service (ch 10.9), including the Matrix Model (Moss et al.) and the outcome studies", sourceType: "primary", year: "1982 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Menolascino F — service recommendations for dual diagnosis (as cited)", sourceType: "review", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Valuing People (2001) White Paper and the Disability Rights Commission/Mencap inequality reports; Inclusion International — the 80-country carers' report", sourceType: "government", year: "2001 onward", dateReviewed: "2026-09-29" },
    { id: "S13", source: "The Indian legal and programme layer — the National Trust Act (1999), RPwD entitlements, DD rehabilitation schemes, Anganwadi-based early detection, the DMHP and Tele-MANAS", sourceType: "indian-guideline", year: "1999 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The governing law: no other psychiatric field depends so completely on teamwork; behavioural, cognitive-behavioural, psychodynamic and pharmacological treatments complement and never isolate each other; the psychiatrist monitors medication against social-role outcomes; the patient depends on teamwork between therapists, disciplines and agencies.", grade: "established", sources: ["S1", "S2", "S4"] },
    { text: "Behavioural programmes: the two complementary areas (teaching appropriate skills; unlearning maladaptive behaviour) with replacement more effective than removal; more research-based than most psychiatric treatments and capable of profound, rapid change; punishment techniques work but require close ethical control in unusual situations only.", grade: "established", sources: ["S1", "S4"] },
    { text: "CBT in ID: the anger-management three levels (general clinical care; didactic group psychoeducation; individualised anger treatment on cognitive perception, autonomic arousal and behaviour) now well-established, against the obstacles of an excessive-not-deviant response, organic factors, limited communication, entrenched habitual use and autism's panic; rational emotive therapy's open-study gains; problem-solving gains sometimes greater in moderate than mild ID (a ceiling effect).", grade: "supported", sources: ["S1", "S5", "S6"] },
    { text: "Psychodynamic therapy in ID: the six adaptations (loss themes; concrete communication; learning their world; repetition; readiness to disengage; barely-established confidentiality) with efficacy evidence honestly weak: psychotherapy positioned as the complement to education.", grade: "supported", sources: ["S1", "S2", "S8"] },
    { text: "The pharmacological audit: off-label non-diagnostic prescribing tracking degree of disability and autism, no less in the community than in institutions, reduced only by determined rationalisation programmes; the rules: start lower, increase slower, expect the unexpected, one change at a time, carers given a contact, the prescriber carrying the consent responsibility the patient's reduced capacity cannot.", grade: "established", sources: ["S1", "S2"] },
    { text: "The class pearls: risperidone with RCT evidence for behavioural disturbance (metabolic-syndrome concern); depression as treatable as in the general population once noticed with OCD symptoms responding to serotonergic drugs (paradoxical anxiety increase as partial serotonin syndrome); propranolol 50–960 mg/day for panic-driven aggression; lithium effective for aggressive outbursts with irritability and explosiveness; the naltrexone U-curve (5–20 mg for autism, 100–200 mg for self-injury, trials falling between); antilibidinal agents as a supplement to teaching, decided with patient, family and carers.", grade: "supported", sources: ["S1", "S2"] },
    { text: "The transition cliff: the abrupt, imposed and traumatic move from children's to adult services; successful adult transition less likely the more severe the disability, with those having mental health problems or aggressive challenging behaviour the least likely to receive support for independent lives; depression in adolescents with ID demonstrably more common than in peers; Health Action Plans (Valuing People) as the information-gap response.", grade: "supported", sources: ["S1", "S8", "S12"] },
    { text: "Ageing with ID: <50% of deaths occurring at 65+ versus 83% in the general population; respiratory disease the leading cause (pneumonia, swallowing, reflux, suggesting lack of effective care); epilepsy + ID mortality up to 5×; Down syndrome's middle-age Alzheimer risk with neuropathology universal but clinical dementia not inevitable; health needs poorly accessed (unrecognised illness, misattributed behaviour change, underused screening, eye infections and tooth decay signalling carer breakdown).", grade: "established", sources: ["S1", "S7", "S8"] },
    { text: "Double ageing: elderly carers caring for ageing 'children', both vulnerable, needs not always compatible, informal networks declining, service input becoming essential; the forward planning to begin long before frailty, with the transition to supported living or group homes negotiated as a process, not an emergency.", grade: "established", sources: ["S1", "S8"] },
    { text: "Families: the grief sequence at diagnosis (shock or numb disbelief, then mourning of the expected normal child); informal support more efficacious than formal services for many families, with parent discussion groups helping some, not all; adjustment as a series of crises (diagnosis, failed early treatments, school assessment, specialised placement, puberty, leaving home).", grade: "established", sources: ["S1", "S9", "S12"] },
    { text: "The service architecture: dual diagnosis (10–30%+ psychiatric morbidity) as the planning problem; the two models (generic ID community teams with weak mainstream-mental-health links for mild ID, forensic problems, autism and borderline functioning; specialist mental health services for people with ID since 1982) with the three phases (assessment with instruments like the Aberrant Behaviour Checklist; intervention with crisis-prevention plans and integrated training; follow-up at quarterly-to-half-yearly contact) and person-centred Care Programme Approach coordination; the Matrix Model (system level × input-process-outcome) as the best available outcomes framework, the specialist-unit advantage sustained at 6 and 12 months, and assertive vs standard community treatment showing no difference in one RCT.", grade: "supported", sources: ["S1", "S10", "S11"] },
    { text: "The delivery principles: residential; ordinary housing, group homes (3–8 people), supported living (the person rents or owns; the agency does not control the accommodation), no one model suiting all; vocational: integrated settings, manageable productivity, adequate pay, individual placement raising wages most, with mental-health-plus-ID under-represented; staff training as the rate-limiter, its core the awareness that a person with ID may suffer mental illness like anyone else; commissioning: joint health-social commissioning, participation, baseline needs assessment, outcomes into specifications.", grade: "supported", sources: ["S1", "S10"] },
    { text: "The Indian layer: the National Trust Act (1999) providing guardianship and legal capacity for adults with autism, cerebral palsy, mental retardation and multiple disabilities; RPwD census-based registration undercounting ID massively; the family (usually the mother) as the de facto service system; polypharmacy-prone prescribing culture; the transition cliff nearly bottomless for school-leavers; the double-ageing OPD encounter with almost no respite infrastructure; the family-plus-NGO scaling path with Tele-MANAS-style backbones.", grade: "supported", sources: ["S13"] },
  ],
};
