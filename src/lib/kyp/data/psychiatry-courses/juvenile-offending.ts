import type { PsychiatryCourse } from "./types";

/**
 * JUVENILE OFFENDING — canonical Psychiatry course (batch 11,
 * Group O — forensic psychiatry). Built ON the canonical note
 * (download/kyp-notes/juvenile-offending.md — untouched foundation),
 * re-researched against the note's evidence lineage: Farrington's
 * Cambridge Study architecture, McCord's Cambridge–Somerville, the
 * YJB statistics, Moffitt's developmental taxonomy, the NSF CAMHS
 * vision — with per-claim provenance.
 *
 * PARTIAL-SOURCE HONESTY (the note's own flag, preserved): the
 * uploaded chapter ends mid-way — its introduction, YJS data and
 * service-access conclusions are available; its prevalence tables,
 * screening instruments and intervention trials are NOT. The risk
 * architecture is drawn from the fully-available ch 11.2; nothing
 * missing is invented.
 *
 * Drug routes: the note assigns no psychotropic drug a clinical role —
 * drugLinks is honestly empty, the comorbidity tiers recorded in
 * contentGaps, never invented here.
 */
export const juvenileOffendingCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "juvenile-offending",
  title: "Juvenile Offending — The Risk-Overlap Principle",
  shortName: "Juvenile offending",
  kind: "concept",
  category: "Forensic Psychiatry",
  groupLetter: "O",
  groupName: "Forensic psychiatry",
  learningPath: ["Psychiatry", "Forensic Psychiatry", "Juvenile Offending — The Risk-Overlap Principle"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "30 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Delinquency is behaviour that could end in conviction — and behind it sits a stack of treatable risk factors shared with mental disorder and substance misuse, so densely shared that every step deeper into the youth justice system is itself a mental-health risk marker.",

  summary:
    "This is the course for the age band where crime and psychiatry overlap most densely. Delinquency is antisocial behaviour — conduct problems, aggression, the failure to conform to authority, norms or others' rights — that could result in conviction, though most of it never does; the juvenile band runs from the age of criminal responsibility to the adult-court age, both varying by jurisdiction; and both mental disorder and offending peak inside it. The chapter's central epidemiological fact is the risk-overlap principle: the risk factors for offending, poor mental health and substance misuse overlap substantially, and the number of assessed risk factors increases as a young person moves deeper into the youth justice system — so every deep-end community case, and every custodial entrant, is a high-need mental-health case by definition, and screening is epidemiology rather than luxury. The risk architecture taught here (individual, family, social, peer, school, neighbourhood — with poor supervision the strongest and most replicable predictor) comes with the longitudinal numbers that make it stick, drawn from the fully-available juvenile data of the offending chapter (ch 11.2). The service message is the chapter's core instruction: many young offenders are disengaged from mainstream education and health services, and the critical task is maintaining access through supervision and custody, because sentence-end detachment predicts deterioration and adult offending — register, treat and hand over before the gate opens. The India layer runs on the Juvenile Justice Act: Juvenile Justice Boards, observation and special homes, the 16–18 assessment layer, aftercare provisions as the written answer to detachment — with the honest reframe that since only 3% of disposals are custodial, the highest-yield mental-health work belongs in the community, not the institution. Documented limitation, preserved from the note itself: the uploaded source chapter ends mid-way — its introduction, Youth Justice System statistics and service-access conclusions are available, while its middle sections (prevalence tables of mental disorder in young offenders, screening instruments, intervention trial data) are not; the risk-factor architecture is therefore drawn from the chapter's fully-available juvenile companion and cross-referenced to the conduct-disorder note's clinical programme, and nothing missing has been invented. The clinical programme for the conduct spectrum (ODD vs CD, DMDD, the multimodal treatment evidence) is the L6 cross-reference; no drug is assigned a clinical role by this note — the comorbidity pharmacotherapy lives in the sibling courses and in contentGaps, never fabricated here.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define delinquency and the juvenile band — and place the range of antisocial behaviour from authority conflict to violation of others' rights.",
    "Describe adolescence as the health-risk stage: the mortality pattern (accidents and self-harm), the greater health needs, the immediacy-focused concerns.",
    "Quote the Youth Justice System structure and statistics: YOTs, custody places, offence distribution, the 16–17 concentration, sex and ethnicity, the 80/17/3 disposal split.",
    "State the risk-overlap principle precisely and explain the system-depth gradient — more assessed risk factors the deeper the young person goes.",
    "Reproduce the juvenile risk-factor architecture: supervision, discipline, warmth, abuse, broken homes, criminal parents, family size, socio-economic status, low IQ, peers.",
    "Outline the service-disengagement problem and the critical role of YOT- and custody-period health access — the sentence-end danger point.",
    "State the comprehensive CAMHS vision (the Children's National Service Framework) and the tiers of young-offender mental-health need.",
    "Cross-reference the conduct-disorder clinical programme (ODD vs CD; DMDD; treatment evidence) for the psychiatric management of the spectrum.",
  ],
  quickFacts: [
    { label: "The definition", value: "Acts that could result in conviction", detail: "Delinquency spans the conviction-capable range of antisocial behaviour — most never convicted; the juvenile band runs from criminal-responsibility age to adult-court age, both varying by jurisdiction" },
    { label: "The disposal arithmetic", value: "80 / 17 / 3", detail: "80% of juvenile disposals pre-court or first-tier, 17% community sentences, 3% custodial — the great majority of juvenile offending never reaches an institution, locating prevention in the community" },
    { label: "The age concentration", value: "16–17-year-olds: 49.6%", detail: "Of 301,860 recorded offences (England and Wales, 2005–2006) — theft and handling 18.5%, violence against the person 18.1%, motoring 16.6%, criminal damage 12.9%; males 80.6%" },
    { label: "The system machinery", value: "157 YOTs, ~3,000 custodial places", detail: "Youth Offending Teams with the principal aim of preventing offending by under-18s; places commissioned across Young Offender Institutions, Local Authority Secure Children's Homes and private Secure Training Centres" },
    { label: "The mortality paradox", value: "Accidents and self-harm", detail: "Adolescent mortality — uniquely among age groups — did not fall in the late twentieth century; 7.5 million UK 10–19-year-olds with health needs greater than middle childhood or young adulthood: the custody-screening rationale" },
    { label: "The strongest predictor", value: "Poor parental supervision", detail: "The most replicable juvenile risk factor in the longitudinal data — parents not knowing where their children are; the finding that puts supervision-focused parenting programmes at the top of the prevention ladder" },
    { label: "The core principle", value: "Risk factors overlap", detail: "The risks for offending, poor mental health and substance misuse are substantially the same risks — and the assessed count rises with depth in the youth justice system: system progression is itself a mental-health risk marker" },
    { label: "The danger point", value: "Sentence-end detachment", detail: "When statutory supervision ends, service links snap and deterioration with adult offending follows; the intervention window is the supervision period itself — register, treat, hand over before the gate opens" },
  ],
  knowledgeGraph: [
    { label: "Psychiatric Disorder & Offending — The Formulation", type: "condition", href: "/psychiatry/psychiatry-offending/", note: "The sibling forensic course: the full risk-factor and disorder-association chapters this juvenile frame is built on" },
    { label: "Conduct Disorders — The Empathy Specifier", type: "condition", href: "/psychiatry/conduct-disorder/", note: "The L6 cross-reference — the clinical programme: ODD vs CD, callous-unemotional traits, DMDD, the multimodal treatment evidence" },
    { label: "ADHD — The Brakes and the Engine", type: "condition", href: "/psychiatry/adhd/", note: "The unrecognised engine — the attention disorder driving the school-failure bridge and the third board appearance" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The abuse-history layer — the trauma-focused work the delayed disclosure unlocks" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The accidents-and-self-harm mortality pattern — and its custody-screening corollary" },
    { label: "Substance Use — The Reward Hijack", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The overlap principle's third arm — the substance misuse that shares the risk architecture" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The undisclosed depression beneath the conduct presentation — treatable, and treating it treats the offending risk" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The adolescent reward gain — the risk-taking chemistry of the age band" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The control machinery maturing last — the impulsivity and executive deficits of the individual risk tier" },
    { label: "Ventral striatum", type: "brain-region", href: "#brain", note: "The reward dial of the dual-systems read — why adolescence is the accident-and-self-harm stage" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two mechanism stories carry this course, and both are about sorting, not sinning. The gradient story: picture the young person's journey through the system — first caution, first panel, first remand, first custody — and at every step the assessed count of risk factors rises. The system is not manufacturing risk; it is acting as a sieve, concentrating the young people who carry the most stacked disadvantage (unsupervised, harshly disciplined, school-failed, substance-involved, mentally unwell, previously abused) at its deep end — which is why the custody population is the highest-mental-health-need paediatric population in the country, and why screening every entrant is epidemiology rather than bureaucracy. The detachment story: the sentence ends, the statutory supervision ends with it, and the young person who had been tenuously connected — through YOT and custody — to some clinic, some counsellor, some prescription, detaches; once detached, circumstances deteriorate, offending continues, and adult services inherit a harder case. Underneath both stories sits the developmental frame: both mental disorder and offending peak in adolescence; most juvenile offending is adolescence-limited and ages out with maturation and context change, while a smaller life-course-persistent subgroup carries the stacked risk architecture into adulthood; and the risk factors for offending, poor mental health and substance misuse overlap so substantially that they are best taught as one architecture with one clinical consequence — treating the disorder is treating the offending risk.",
    steps: [
      "The developmental frame: Moffitt's taxonomy — adolescence-limited antisocial behaviour (the majority, desisting with maturation and changed context) against the life-course-persistent subgroup carrying stacked risk; both mental disorder and offending peak inside the band.",
      "The architecture stacks: individual (low IQ via school failure and executive deficits; impulsivity), family (supervision, discipline, warmth, abuse, broken homes, criminal parents, family size), social (deprivation), peer and school (delinquent exposure, failure, exclusion), neighbourhood and situational factors.",
      "The overlap principle: the same factors predict offending, poor mental health and substance misuse — one architecture, three outcomes, and a single clinical consequence: treating disorder is treating offending risk.",
      "The gradient: system depth as a risk marker — the number of assessed risk factors increases as the young person moves deeper (caution to panel to remand to custody); the deep-end population is the highest-need population.",
      "The sieve reading: the custody population as the highest-mental-health-need paediatric population in the country — screening every entrant is epidemiology, not luxury.",
      "The disengagement engine: school failure and service disengagement precede the court; sentence-end detachment follows the order — the young person is lost to services at exactly the moments of maximum need.",
      "The countermeasure window: the supervision period itself — register, treat and hand over before the gate opens; engagement converted from compulsory to voluntary while the compulsion still holds it.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the control machinery maturing last)", role: "The biological backdrop of the adolescent impulsivity and executive deficits the risk architecture names at the individual tier — the frontier of the accident-and-risk-taking mortality pattern; re-researched framing, graded honestly below 'established'.", grade: "supported" },
    { id: "ventral-striatum", name: "Ventral striatum (the reward dial)", role: "The dual-systems read: reward sensitivity running ahead of control — why adolescence is the stage of accidents, risk-taking and self-harm; the timing details of the model remain debated.", grade: "proposed" },
    { id: "amygdala", name: "Amygdala (the threat reader)", role: "Shaped by the abuse histories inside the architecture — the maltreated young person's threat-biased reading of the world as the bridge from abuse to reactive aggression.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus (the stress-sensitive recorder)", role: "The trauma layer's memory machinery — the PTSD comorbidity's anatomy in the abused subgroup; findings in young populations more mixed than the adult literature.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The adolescent reward system's gain — novelty-seeking and risk-taking as the mortality pattern's chemistry; taught as framing, not as the note's claim (the note's construct is the behaviour).", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The impulsivity–aggression modulation line — the classic low-serotonin impulsivity literature with the honest caveat that juvenile findings are indirect.", grade: "proposed" },
    { name: "Noradrenaline", symbol: "NA", role: "The arousal-attention system behind the ADHD comorbidity — the unrecognised attention disorder driving the school-failure bridge.", grade: "proposed" },
    { name: "Glutamate", symbol: "Glu", role: "The synaptic-pruning machinery of adolescent cortical maturation — the plasticity window that makes the band both the risk peak and the treatment opportunity.", grade: "supported" },
  ],
  pathways: [
    {
      id: "gradient-pathway",
      name: "The gradient (risk architecture to the deep-end population)",
      steps: [
        { label: "The stack assembles", detail: "Supervision, discipline, warmth, abuse, school failure, low IQ, peers — accumulating across the individual, family, social and school tiers" },
        { label: "School failure and disengagement", detail: "The low-IQ bridge and the disengagement engine — education and health services both lost before any court is involved" },
        { label: "System contact deepens", detail: "Caution, panel, remand, custody — each step selecting for more stacked disadvantage" },
        { label: "The deep-end concentration", detail: "The number of assessed risk factors rises with system depth — the custody population becomes the highest-need paediatric population" },
        { label: "The screening corollary", detail: "Mental state, self-harm risk, substance misuse, neurodevelopment and abuse history — every entrant, every time" },
      ],
      clinicalManifestation: "The 15-year-old third-time attender before the board with unrecognised ADHD, borderline literacy and an undisclosed abuse history.",
      grade: "established",
    },
    {
      id: "detachment-pathway",
      name: "The detachment pathway (sentence-end to adult offending)",
      steps: [
        { label: "The tenuous hold", detail: "Through YOT or custody supervision the young person is marginally connected — a clinic, a counsellor, a prescription" },
        { label: "The order ends", detail: "Statutory supervision ends with the sentence; the machinery holding the links switches off" },
        { label: "The snap", detail: "Service links detach at the gate; the young person exits with an appointment that exists only as an intention" },
        { label: "The deterioration", detail: "Circumstances worsen, offending continues, and adult services inherit the harder case" },
        { label: "The countermeasure", detail: "Bookings, consents and transfers completed inside the supervision window — engagement converted to voluntary before the compulsion ends" },
      ],
      clinicalManifestation: "The 17-year-old released with a four-month waiting list between him and his SSRI — the release-date case.",
      grade: "supported",
    },
    {
      id: "prevention-pathway",
      name: "The prevention lever (the family tier)",
      steps: [
        { label: "The strongest predictor named", detail: "Poor parental supervision — the most replicable juvenile risk factor in the longitudinal data" },
        { label: "The programme targets it", detail: "Supervision- and discipline-focused parenting programmes — the highest-evidence prevention lever" },
        { label: "The school reconnected", detail: "Education engagement as offending-prevention — the failure bridge rebuilt" },
        { label: "The community arithmetic", detail: "80% of disposals pre-court or first-tier — prevention belongs where the young people are, not in the 3% custody end" },
      ],
      clinicalManifestation: "The overwhelmed but warm mother engaged by a parenting programme before the third board appearance — the supervision her son was missing.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "band-opens", time: "Age of criminal responsibility", title: "The juvenile band opens", description: "The band runs to the adult-court age — both ages jurisdictionally variable; inside it, adolescence is the developmental stage of greatest health need, its mortality (uniquely) driven by accidents and self-harm.", phase: "onset" },
    { id: "risk-stacking", time: "Childhood into early adolescence", title: "The architecture stacks", description: "Supervision deficits, harsh or cold discipline, abuse, school failure, delinquent peers — accumulating quietly, the mental-disorder and substance-misuse risks stacking on the same scaffolding.", phase: "onset" },
    { id: "offence-peak", time: "16–17 years", title: "The offence peak", description: "16–17-year-olds commit 49.6% of recorded juvenile offences; both mental disorder and offending peak in adolescence — the two curves are one population.", phase: "peak" },
    { id: "system-depth", time: "Each system contact", title: "The risk-factor gradient", description: "First caution, first panel, first remand, first custody — the assessed count of risk factors rises at every step: the sieve concentrating stacked disadvantage at the deep end.", phase: "duration" },
    { id: "sentence-end", time: "The release date", title: "The sentence-end cliff", description: "The order ends, the statutory supervision ends with it, and the tenuously-held service links snap — the predictable crisis point of the whole journey.", phase: "peak" },
    { id: "aftercare", time: "The aftercare window", title: "Register, treat, hand over — before the gate opens", description: "The intervention is the supervision period itself: bookings made, consents signed, transfers completed, the adult-services handover planned — engagement converted to voluntary while the compulsion still holds it.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "England and Wales, the chapter's reference data (2005–2006): 301,860 recorded juvenile offences — theft and handling 18.5%, violence against the person 18.1%, motoring offences 16.6%, criminal damage 12.9%; 16–17-year-olds responsible for 49.6%; males 80.6%, females 19.4%; white 85.2%, Black and minority ethnic 14.8%. Of 212,242 disposals: 80% pre-court or first-tier, 17% community sentences, 3% custodial. The machinery: 157 Youth Offending Teams with the principal aim of preventing offending by under-18s, and ~3,000 custodial places commissioned at any time across Young Offender Institutions, Local Authority Secure Children's Homes and private Secure Training Centres. The adolescent-health context: 7.5 million 10–19-year-olds in the UK (half the child population), with health needs greater than middle childhood or young adulthood — and adolescent mortality, uniquely, did not fall in the late twentieth century, accidents and self-harm leading.",
    indianPrevalence: "No equivalent national youth-justice mental-health dataset exists for India; the JJ Act's structure — Juvenile Justice Boards, observation homes, the 16–18 assessment layer — parallels the YOT architecture, and Indian young-offender mental-health needs (substance misuse, conduct problems, abuse histories, school dropout) are documented in prison studies, but systematic service links remain aspirational — making the chapter's service-access lesson the transferable core.",
    lifetimeRisk: "Most juvenile offenders age out — the adolescence-limited majority desisting with maturation and context change; the stacked-risk minority persists into adult offending, which is what the rising risk-factor count at system depth predicts.",
    genderRatio: "Males 80.6%, females 19.4% of recorded offences (2005–2006); white 85.2%, Black and minority ethnic 14.8%.",
    ageOfOnset: "The juvenile band runs from the age of criminal responsibility to the adult-court age — both jurisdictionally variable; the offence peak sits at 16–17 (49.6% of recorded offences).",
    indianNotes: "The JJ Act's 16–18 assessment layer and the age-assessment disputes are the Indian jurisdiction's live edge; observation and special homes are where screening happens or does not; the aftercare provisions exist on paper as the written answer to detachment.",
  },
  etiology: [
    { category: "biological", factor: "The individual tier", details: "Low IQ operating through school failure and executive deficits (the Lynam low-verbal-IQ bridge); impulsivity — the traits that make the adolescent band the risk peak." },
    { category: "social", factor: "The family tier (the architecture's core)", details: "Poor parental supervision — the strongest and most replicable juvenile predictor; harsh, erratic or cold discipline, with the warmth buffer (warm punitive mothers' sons convicted at 21% versus cold punitive 51%); teenage motherhood; child abuse (half of the Cambridge–Somerville abused/neglected boys dead, ill or convicted before 35); broken homes as conflict vehicles, not structure (united-with-conflict 52% versus broken-with-affectionate-mother 22%); criminal parents (6% of families producing half of convictions; 63% of sons with convicted parents convicted by 40 — the mediating chain being supervision, not criminal teaching); large family size (4+ siblings doubling juvenile conviction risk, via attention dilution and delinquent-sibling exposure)." },
    { category: "social", factor: "The deprivation tier", details: "Socio-economic deprivation — low income and poor housing predicting most consistently in the longitudinal data." },
    { category: "environmental", factor: "The peer, school and neighbourhood tier", details: "Delinquent sibling and peer exposure (20% of boys with near-age brothers co-offending); school failure and exclusion — the low-IQ bridge and the disengagement engine; neighbourhood and situational factors." },
    { category: "psychological", factor: "The trauma tier", details: "Abuse histories with their PTSD, depression and self-harm sequels — riding the same architecture and largely undisclosed at first contact; the treatable layer the screening is designed to find." },
  ],
  symptomClusters: [
    {
      category: "1. The conduct-disorder spectrum (the presenting behaviour)",
      symptoms: ["Defiance and authority conflict at the milder end; aggression, destruction, deceit-theft and serious rule violation at the severe end", "Callous-unemotional traits in a subgroup — the specifier that changes the plan (the conduct-disorder course's clinical programme)", "ADHD comorbidity driving much of the impulsive offending — the unrecognised engine", "Substance misuse riding the same risk architecture — the overlap principle's third arm"],
    },
    {
      category: "2. The hidden-comorbidity layer (what the behaviour hides)",
      symptoms: ["Undisclosed depression and anxiety beneath the conduct presentation", "PTSD from abuse histories — the child-abuse risk chain in reverse, disclosure often delayed to the third interview", "Self-harm and suicidality — the adolescent mortality pattern (accidents and self-harm) operating inside custody", "Neurodevelopmental disorders: learning difficulty, ADHD, communication disorder — the school-failure bridge's undiagnosed sources"],
    },
    {
      category: "3. The engagement problem (the meta-symptom)",
      symptoms: ["Disengagement from mainstream education and health services — the case arriving at the deep end unserved", "Services reached through compulsion only — the task of converting compulsory contact into voluntary engagement before the compulsion ends", "The sentence-end cliff: whoever holds the links at release, the plan lives or dies there"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The screening discipline",
      code: "Every custodial entrant, every deep-end community case",
      criteria: [
        "Mental state examination — the depression, anxiety and psychosis the conduct presentation hides.",
        "Self-harm and suicide risk — the adolescent mortality pattern operating inside custody; the evening pattern asked about specifically.",
        "Substance misuse history — the overlap principle's third arm.",
        "Neurodevelopmental history — learning difficulty, ADHD, communication disorder: the school-failure bridge's undiagnosed sources.",
        "Abuse history — asked gently and more than once: disclosure at the third interview is normal, not failure.",
      ],
      duration: "At entry — screening is epidemiology at the point of concentration, not a sentence-stage ritual.",
      indianNote: "The observation-home entry screen is the Indian habit to build; the social enquiry report's 'bad company' is a formulation waiting to be written.",
    },
    {
      system: "The assessment repertoire",
      code: "The standard CAMHS repertoire, performed in justice settings",
      criteria: [
        "Developmental history — school trajectory, literacy, attention, language.",
        "Family-system assessment — supervision, discipline, warmth, conflict: the treatable architecture, not a moral inventory.",
        "Service-engagement mapping — who this young person is connected to, and what happens to each connection at sentence-end.",
        "The conduct spectrum read accurately (the conduct-disorder course, the L6 cross-reference): childhood- versus adolescent-onset; callous-unemotional traits sought; DMDD as the irritability differential against a misread 'bipolar'.",
      ],
      duration: "Across the supervision period — the window the order opens.",
      indianNote: "The board is a clinical ally when handed readable assessment: the difference between escalation and a rehabilitative disposition.",
    },
  ],
  severityScales: [
    {
      name: "Structured risk-and-need assessment",
      fullName: "Youth-justice risk/need instruments",
      measures: "The assessed risk-factor count and its rise with system depth — the gradient itself as the severity axis.",
      ranges: [],
      indianNote: "The chapter's own instrument and prevalence sections fall beyond the uploaded source pages (the note's partial-source flag): names, items and cut-offs are NOT reproduced here — never invented; the honest instrument in the Indian observation home is the five-domain screen above, performed at entry and repeated at depth.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Adolescence-limited antisocial behaviour (the majority)", distinguishingFeatures: "Peer-group and situation-driven offending that begins and stays within the teenage band, desisting as the group and the stakes change.", keyDifferentiator: "Moffitt's taxonomy: no childhood-onset stack, no callous-unemotional depth — the prognosis that ages out without adult services inheriting a case." },
    { condition: "Life-course-persistent antisocial development", distinguishingFeatures: "Childhood-onset with the stacked architecture — supervision deficits, harsh discipline, school failure, ADHD, abuse — with callous-unemotional traits possible.", keyDifferentiator: "The depth of the stack and the age of onset: the formulation that demands early, intensive, family-level intervention (the conduct-disorder course's clinical programme)." },
    { condition: "ADHD-driven offending (the unrecognised engine)", distinguishingFeatures: "Impulsive, situation-light offending with lifelong attention symptoms, school failure and borderline literacy — the low-IQ bridge's undiagnosed source.", keyDifferentiator: "The developmental history: treatment of the attention disorder changes the trajectory — the case the third board appearance finally diagnoses." },
    { condition: "Abuse-driven reactive aggression (the trauma layer)", distinguishingFeatures: "Aggression under perceived threat, hypervigilance, disclosure delayed — the abuse-to-conduct chain in reverse.", keyDifferentiator: "The trauma-focused formulation and the protection pathway — treating the origin, not only the behaviour." },
    { condition: "Disruptive mood dysregulation (the misread 'bipolar')", distinguishingFeatures: "Chronic severe irritability with explosive outbursts — the presentation that gets called paediatric bipolar and treated as such.", keyDifferentiator: "DMDD as the irritability differential (the L6 cross-reference): no episodicity, no clear cycles — the misreading that changes everything downstream." },
    { condition: "Substance-misuse-driven offending", distinguishingFeatures: "Offending that tracks acquisition, intoxication and the using peer group — the overlap principle's third arm in the driving seat.", keyDifferentiator: "The substance history taken seriously at entry: treating the misuse is treating the offending risk — and the relapse plan is the release plan." },
  ],
  management: [
    { category: "social", name: "Maintain mainstream and specialist access through supervision and custody", description: "The chapter's central instruction: support access to education and health services while the YOT or custody order holds the young person — because post-sentence detachment is the deterioration pathway into adult offending. The engagement must convert from compulsory to voluntary before the compulsion ends.", whenToUse: "From first system contact, with the release-date plan written from the day the order begins.", indianContext: "The JJ Act's aftercare provisions are the statutory vehicle; the observation home is the clinic; the named clinic appointment at release is a booking, not a hope." },
    { category: "psychotherapy", name: "Treat the psychiatric disorders (the L6 cross-reference)", description: "The multimodal conduct programmes, ADHD treatment, depression and anxiety interventions and trauma-focused work of the conduct-disorder clinical programme, delivered in justice settings — treating disorder is treating offending risk, the overlap principle's clinical face.", whenToUse: "Diagnosed at screening, treated through the order, handed over before release.", indianContext: "No pharmacological route is invented in this course — the comorbidity tiers (stimulant-class ADHD treatment, the SSRI tier for custody depression) are taught in the conduct-disorder, ADHD and depressive-disorders courses; this note's chapter assigns no drug of its own." },
    { category: "psychotherapy", name: "Work the family risk factors — supervision first", description: "Parenting programmes targeting supervision and discipline, the strongest-evidence prevention lever in the longitudinal data; the parent engaged as the delivery channel, not dismissed as the cause.", whenToUse: "Prevention at the community tier; treatment-amplitude at the deep end.", indianContext: "The overwhelmed-but-warm parent is the Indian programme's best ally; the Anganwadi–school–NGO triangle is the delivery network for the stacked-risk child." },
    { category: "social", name: "Engage education", description: "School reconnection as offending-prevention — the failure bridge rebuilt: literacy support, re-entry certificates, teachers who expect the young person back.", whenToUse: "From the first system contact, before exclusion hardens into identity.", indianContext: "School dropout is the Indian social enquiry report's constant; the re-entry paperwork processed before release, not after." },
    { category: "social", name: "The comprehensive CAMHS vision (the Children's NSF)", description: "The full tiered service for young offenders — from primary-tier consultation through YOT-embedded clinicians to secure forensic adolescent provision — the framework that turns the observation-home screen into a system.", whenToUse: "The commissioning argument made wherever the service gap is named.", indianContext: "India's equivalent machinery is the JJ Act's boards and homes; mental-health input into both is the service-development frontier — aspirational, not yet systematic." },
    { category: "social", name: "Plan the transition before the gate opens", description: "The adult-services handover for those approaching 18, completed while the youth system still holds the case — or the detachment story gets an adult sequel; the release-date discipline applied to the age boundary.", whenToUse: "From the 17th birthday onward in any case with treatment running.", indianContext: "The Indian transition cliff is the observation-home release without follow-up; the aftercare provision is the written answer, its implementation the clinical task." },
  ],
  safety: {
    redFlags: [
      "Self-harm or suicidality in custody — the adolescent mortality pattern (accidents and self-harm) operating inside the institution; every entrant screened, the evening pattern watched.",
      "Disclosure or strong suspicion of abuse — the protection pathway engaged alongside treatment; expect disclosure to take three interviews, not one.",
      "A rising risk-factor count with system depth — the young person moving from pre-court to remand to custody is the deep-end, highest-need case whether or not anyone has called it that.",
      "The approaching release date with no booked appointment and no named appointment-keeper — the predictable crisis, unprevented.",
      "Untreated depression or PTSD behind the conduct presentation — the undisclosed layer that changes both the care and the disposal.",
      "Substance misuse identified at entry — assessment and engagement while the order still holds the young person, because the relapse plan is the release plan.",
    ],
    urgentGuidance:
      "The order of operations: (1) screen every custodial entrant — mental state, self-harm risk, substance misuse, neurodevelopmental history, abuse history; (2) treat the treatable immediately (depression, anxiety, PTSD, ADHD, psychosis) — treating disorder is treating offending risk; (3) engage child protection where abuse is disclosed; (4) complete the release plan before the gate opens — transfer paperwork with consent, the first appointment booked inside the supervision window, the family's nearest adult named as appointment-keeper, the crisis card with Tele-MANAS 14416; (5) name the follow-up for the missed first appointment — because detachment, not relapse, is the default; (6) plan the adult-services handover before the youth system releases the case.",
  },
  drugLinks: [],
  contentGaps: [
    "The comorbidity pharmacotherapy tiers — stimulant-class ADHD treatment, the SSRI tier for custody depression, trauma-focused medication — are assigned no role by this note: drugLinks is honestly empty; the clinical programmes live in the conduct-disorder, ADHD and depressive-disorders courses, the route never invented here.",
    "The source chapter's middle sections — prevalence tables of mental disorder in young offenders, screening instruments and intervention trial data — fall beyond the uploaded pages (the note's own partial-source flag); they are not reconstructed and never invented; the risk architecture is taught from the fully-available ch 11.2 instead.",
    "Juvenile structured risk-assessment instruments have no KYP lessons — and the chapter's own instrument sections are among the unavailable material; names, items and cut-offs are not reproduced (ranges left deliberately empty).",
    "The conduct-disorder clinical programme (ODD vs CD, DMDD, multimodal treatment evidence) is cross-referenced rather than taught here; a canonical migrated course for it does not yet exist in the registry — the link points to the note's live page, never fabricated content.",
  ],
  patientGuide: {
    whatIsIt:
      "Juvenile offending (delinquency) is antisocial behaviour by a young person that could result in conviction — although most of it never reaches a conviction, and most young offenders grow out of it. Behind the behaviour sits a stack of circumstances that can be changed: how well the child is supervised, how discipline is delivered at home, whether school is working, and whether there is untreated abuse, mental illness, learning difficulty or substance misuse. The single most important fact: the risks for offending, for poor mental health and for substance misuse are largely the same risks — so getting help for the mind is getting help for the behaviour.",
    whatCausesIt:
      "No single cause — a stack. The strongest single factor is poor parental supervision (parents not knowing where their child is). Around it: harsh, erratic or cold discipline without warmth; teenage motherhood; abuse; homes broken by conflict rather than by structure; parents with their own convictions; large families; poverty and poor housing; low IQ meeting school failure; delinquent siblings and friends; school exclusion; difficult neighbourhoods. The deeper a young person goes into the justice system, the more of these they carry.",
    symptoms:
      "The behaviour: defiance, fighting, theft, serious rule-breaking (the conduct spectrum). What it hides: depression, anxiety, post-traumatic stress from abuse, self-harm and suicidal thoughts, learning difficulty, ADHD, substance misuse. Warning signs needing urgent attention: talk of suicide, fresh self-harm marks (often in the evenings), sudden deterioration around a release date, or a disclosure of abuse.",
    treatment:
      "The treatable parts are treated directly — depression, anxiety, PTSD, ADHD, substance misuse (the full clinical programme lives in the conduct-disorder course). The system's job is keeping the young person connected to services while the supervision or custody period holds them, because the danger point is the release date — when statutory supervision ends and links snap. The prevention that works is unglamorous: parenting programmes focused on supervision and discipline, school reconnection, early treatment — in the community, where 97% of the caseload actually is.",
    selfHelp: [
      "Keep the appointment-keeper role: one named adult who owns the next clinic date and the transport to it.",
      "Ask about abuse gently, and more than once — three conversations before disclosure is normal, not failure.",
      "Treat the release date as a medical event, not just a legal one: the appointment booked before the gate opens, not after.",
      "Watch the evenings: self-harm in this age group has hours, and supervision has hours too.",
      "Keep the school thread alive: re-entry certificates, a teacher who expects the young person back.",
      "Keep the crisis card: Tele-MANAS 14416 (24×7, free) — for the young person and for the family's own exhaustion.",
    ],
    whenToSeekHelp: [
      "Any talk of suicide or self-harm, or fresh marks — help the same day.",
      "A disclosure of abuse — protection pathway plus treatment, immediately.",
      "The weeks around release from an observation home or custody — the predictable deterioration window; act ahead of it, not after it.",
      "Deteriorating mood or withdrawal hiding behind the 'behaviour problem' front.",
      "An 18th birthday approaching with no adult-service handover in sight.",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free) — the crisis-card channel for young person and family alike",
      "The district child guidance clinic and the school counselling tier — the pre-court population's services",
      "The JJ Act's aftercare machinery — the statutory route to post-release support; ask the board's welfare officer, in writing",
      "Anganwadi workers, school counsellors and NGO workers — the screening workforce closest to the stacked-risk child",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific youth-justice mental-health guideline exists; the Juvenile Justice (Care and Protection of Children) Act, 2015 is the statutory frame — Juvenile Justice Boards, observation and special homes, the 16–18 assessment layer, aftercare provisions — with NIMHANS young-offender studies documenting the need (substance misuse, conduct problems, abuse histories, school dropout) that the machinery is asked to serve.",
    systemContext: "The young offender meets the system at the Juvenile Justice Board, where the social enquiry report is the nearest thing to an assessment and nobody clinical is in the room unless someone insists; observation homes are where screening can happen and usually does not; the 3% custody figure reframes the fear — the overwhelming majority of juvenile offending is handled pre-court, so the highest-yield mental-health interventions belong in the community (child guidance, school counselling, district early-intervention), not the institution.",
    programmeContext: "The JJ Act's aftercare provisions are the written answer to the detachment story — observation-home release without follow-up is the Indian version of the sentence-end cliff, and their implementation is the clinical task; Anganwadi workers, school counsellors and NGO workers are the realistic screening workforce for the stacked-risk Indian child (migrant-labour families, street children, school dropout, child labour, substance misuse).",
    costConsiderations: "Costs (approx 2026): custody and detention are the expensive end everywhere; the community risk-factor programmes — parenting groups, school engagement, brief interventions — are the cheap end; and the JJ system's own statutory machinery already exists to attach them to. The scarce commodity is not money but the follow-up structure and the mental-health input into boards and homes — the service-development frontier.",
    culturalConsiderations: "The stacked-risk Indian child reproduces every element of the risk architecture — migrant-labour families, street children, school dropout, child labour and substance misuse — under conditions where 'bad company' in a social enquiry report substitutes for a formulation; the cultural task is converting a moral reading into a risk-architecture reading (the chapter's transferable core), with the family engaged as the treatment's delivery channel rather than its villain.",
    patientCounselling: [
      "The reframe: 'Delinquency means acts that could result in conviction — most never do, and most young offenders age out of it; the clinical question is not the label but the risk stack underneath.'",
      "The overlap script: 'The same factors that push a young person toward offending also push toward poor mental health and substance use — treating one treats the other.'",
      "The observation-home script: 'The doctor wants to assess him where he is because that is where the highest-need, least-served group gathers — screening at entry is epidemiology, not bureaucracy, and it changes both the care and the disposal.'",
      "The release script: 'The danger point is the day the order ends — the plan is made before release, the appointment booked inside the window, a named appointment-keeper in the family, and a crisis card with Tele-MANAS 14416.'",
      "The prevention script: 'What works is unglamorous: supervision-focused parenting programmes, school reconnection, early treatment of ADHD and of abuse after-effects — aimed at the risk architecture, not at the individual sentence.'",
      "The 18th-birthday script: 'The handover to adult services is planned before the youth system lets go — or the same story continues with an adult cast.'",
    ],
  },
  decisionPath: {
    title: "The young person in the justice system — where the mental-health work happens",
    nodes: [
      {
        id: "start",
        question: "A young person surfaces in the juvenile justice system — board hearing, observation home, supervision order. First: how deep is the system contact, and what does the pattern say?",
        branches: [
          { label: "First contact, pre-court", next: "community-path" },
          { label: "Repeat attender before the board", next: "screen-gate" },
          { label: "Custody or remand entry", next: "custody-path" },
          { label: "Release date approaching", next: "release-path" },
        ],
      },
      {
        id: "community-path",
        question: "The pre-court majority — the 97%.",
        recommendation: "The 80/17/3 arithmetic: the overwhelming majority of juvenile offending is handled pre-court — the highest-yield mental-health work belongs here: child guidance, school counselling, district early-intervention, the risk architecture addressed before any institution exists in the story.",
      },
      {
        id: "screen-gate",
        question: "The repeated attender — the screening trigger the system keeps ignoring.",
        branches: [
          { label: "Abuse suspected or hinted", next: "abuse-path" },
          { label: "School failure or dropout dominant", next: "school-path" },
          { label: "No assessment ever performed", next: "assess-node" },
        ],
      },
      {
        id: "abuse-path",
        question: "The abuse layer beneath the behaviour.",
        recommendation: "The protection pathway alongside treatment: the abuse enquiry continued gently across interviews (three before disclosure is normal), child-protection procedures engaged, trauma-focused work planned — the abuse-to-conduct chain treated at its origin.",
      },
      {
        id: "school-path",
        question: "The failure bridge.",
        recommendation: "The low-IQ bridge rebuilt: literacy and psychoeducational assessment, the unrecognised ADHD sought, school reconnection as offending-prevention — education engagement is clinical work here.",
      },
      {
        id: "assess-node",
        question: "The comprehensive screen, performed at last.",
        recommendation: "The five-domain screen — mental state, self-harm risk, substance misuse, neurodevelopmental history, abuse history — plus the family system (supervision, discipline, warmth, conflict) and the engagement map; diagnose and treat the treatable (depression, anxiety, PTSD, ADHD, psychosis): treating disorder is treating offending risk (the clinical programme: the conduct-disorder course, the L6 cross-reference).",
      },
      {
        id: "custody-path",
        question: "The custody entrant — the deep end.",
        recommendation: "Every entrant screened: the custody population is the highest-mental-health-need paediatric population; mental state, self-harm risk, substance misuse, neurodevelopment, abuse history — the adolescent mortality pattern (accidents and self-harm) operating inside the institution.",
      },
      {
        id: "release-path",
        question: "The sentence-end cliff approaches — the predictable crisis.",
        branches: [
          { label: "Treatment running, links held by the order", next: "handover-node" },
          { label: "Nearly 18", next: "transition-node" },
        ],
      },
      {
        id: "handover-node",
        question: "The chapter's core service instruction, executed before the gate opens.",
        recommendation: "Transfer paperwork completed with consent; the first clinic appointment booked INSIDE the supervision window; the family's nearest adult named as appointment-keeper; the crisis card with Tele-MANAS 14416; the school re-entry certificate processed; the named follow-up when the first appointment is missed — because detachment, not relapse, is the default.",
      },
      {
        id: "transition-node",
        question: "The 18th birthday as a clinical event.",
        recommendation: "The transition cliff: the adult-services handover planned before the youth system releases the case — or the detachment story gets an adult sequel.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Locating juvenile mental-health work in the custody estate",
      why: "The 80/17/3 disposal split means only 3% of disposals are custodial — the overwhelming majority of juvenile offending is handled pre-court, so the deep end is where the need concentrates and the money goes, not where the caseload lives.",
      correction: "The service plan built around the community tier — child guidance, school counselling, district early-intervention — with the custody screen as the epidemiological backstop, not the programme.",
    },
    {
      mistake: "Reading the risk-factor stack as moral failure",
      why: "The overlap principle is the chapter's whole point: the risks for offending, poor mental health and substance misuse are substantially the same risks — a moral reading misses every treatable component (ADHD, abuse, depression, supervision, school).",
      correction: "The formulation written as an architecture, not a verdict — and treating the disorder treated as treating the offending risk.",
    },
    {
      mistake: "Treating assessment as the court's job, not the clinic's",
      why: "The repeat attender accumulates appearances while nobody assesses — 'bad company' in a social enquiry report standing in for a formulation, and the treatable disorders staying untreated through appearance after appearance.",
      correction: "The repeated attender is the screening trigger: the five-domain screen performed in the observation home or at the panel, with the readable assessment handed to the board as the clinical ally.",
    },
    {
      mistake: "Ending the service plan at the release date",
      why: "Sentence-end detachment predicts deterioration and adult offending — the links the order held snap the day it ends, and the young person exits with an appointment that exists only as an intention.",
      correction: "Bookings, consents and transfers completed inside the supervision window; the family's nearest adult named as appointment-keeper; the follow-up-if-missed named and live.",
    },
    {
      mistake: "Misreading chronic irritability as paediatric bipolar disorder",
      why: "The explosive, irritable young offender collects a bipolar label that neither fits the non-episodic course nor licenses the treatment that follows.",
      correction: "DMDD as the irritability differential and the conduct spectrum read accurately (the L6 cross-reference — childhood- versus adolescent-onset, callous-unemotional traits sought).",
    },
    {
      mistake: "Treating the 18th birthday as someone else's problem",
      why: "The youth system releases the case at majority with the treatment running and no handover — the detachment story continuing with an adult cast and a harder case for adult services to inherit.",
      correction: "The transition planned while the youth system still holds the case — the same release-date discipline applied to the age boundary.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The definition pair: delinquency (acts that could result in conviction, although most never are) and the juvenile band (criminal-responsibility age to adult-court age, both jurisdiction-specific).",
        "The YJS quartet: 157 Youth Offending Teams; ~3,000 custodial places; 301,860 recorded offences (2005–2006) with the 16–17 concentration at 49.6%; the 80/17/3 disposal split.",
        "The adolescent-mortality paradox: the only age group whose mortality did not fall in the late twentieth century — accidents and self-harm leading; the custody-screening rationale in one sentence.",
        "The risk-overlap principle stated precisely: the risk factors for offending, poor mental health and substance misuse overlap substantially, and the assessed count rises with system depth.",
        "The strongest juvenile predictor: poor parental supervision — and the parenting-programme lever it licenses.",
      ],
      practical: [
        "Demonstrate the five-domain custody screen (mental state, self-harm risk, substance misuse, neurodevelopmental history, abuse history) on a case summary — including the three-interview disclosure expectation.",
        "Take the family risk history — supervision, discipline, warmth, conflict — and map the service-connections list with what happens to each at sentence-end.",
      ],
      longAnswer: [
        "A 15-year-old produced before the Juvenile Justice Board for the third time in a year: assessment and management (the stacked-risk essay — screen, treat the treatable, work the family, plan the release).",
        "Juvenile offending and mental health: the risk-overlap principle, the system-depth gradient and their implications for youth justice services.",
      ],
    },
    neetPg: {
      highYield: [
        "THE DEFINITION: delinquency = acts that could result in conviction (most never are); the juvenile band = criminal responsibility to adult-court age, both varying by jurisdiction.",
        "THE STATISTICS QUARTET: 157 YOTs; ~3,000 custodial places; 301,860 offences (2005–2006 — theft 18.5%, violence 18.1%, motoring 16.6%, criminal damage 12.9%); 16–17-year-olds 49.6%; males 80.6%; white 85.2%, Black and minority ethnic 14.8%.",
        "THE DISPOSAL SPLIT: 80% pre-court or first-tier, 17% community, 3% custodial — prevention belongs in the community.",
        "THE OVERLAP PRINCIPLE: risk factors for offending, poor mental health and substance misuse overlap substantially; the assessed count rises with system depth — the chapter's thesis.",
        "THE MORTALITY PARADOX: adolescent mortality alone did not fall in the late twentieth century; accidents and self-harm leading — the basis of universal custody screening.",
        "THE ARCHITECTURE: supervision the strongest predictor; the warmth buffer (the discipline–warmth quartet 51/21/23); broken home as conflict, not structure (62/52/26/22); criminal parents (6% of families producing half of convictions; 63% of sons convicted by 40); 4+ siblings doubling risk; 20% of boys with near-age brothers co-offending.",
        "THE CAMBRIDGE–SOMERVILLE ABUSE OUTCOME: half of abused/neglected boys dead, ill or convicted before 35.",
        "MOFFITT'S TAXONOMY: adolescence-limited (the majority, desists) versus life-course-persistent (the stacked-risk minority) — the frame behind every 'will he grow out of it?' question.",
        "THE SERVICE PRINCIPLE: access maintained through YOT and custody; sentence-end detachment predicts deterioration and adult offending.",
        "THE NSF VISION: the comprehensive CAMHS tiered service for young offenders, from primary-tier consultation to secure forensic adolescent provision.",
        "THE INDIAN CORNER: JJ Act boards and homes; the 16–18 assessment layer; the 3% reframe; aftercare as the written answer to detachment; the observation-home screening habit.",
      ],
      pyqConcepts: [
        "The 3% custodial figure — the MCQ that relocates prevention to the community.",
        "Poor parental supervision as the single strongest predictor — the classic one-best-answer.",
        "The risk-overlap statement — the 'central epidemiological finding' question.",
        "The release-date priority — the clinical-decision MCQ (bookings and consents before the gate opens).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 15-year-old before the Juvenile Justice Board for the third time in twelve months — petty theft, then fighting, now a scooter theft — with a social enquiry report reading 'school dropout, bad company' and no assessment ever performed: the screening in the observation home finds marked ADHD symptoms since childhood, borderline literacy, evening self-harm scratches and, at the third interview only, physical abuse by a stepfather; the formulation is the stacked-risk case (abuse, the low-IQ bridge with unrecognised ADHD, conduct deterioration with depressive features beneath); the management is the risk-factor stack as the treatment plan — ADHD treatment, literacy support, trauma-focused work, the warm-but-overwhelmed mother engaged with a parenting programme, the board handed a readable assessment and disposing to a rehabilitative order rather than escalation, with a named clinic appointment booked for release: the repeated attender as screening trigger, the three-interview disclosure norm, and the board as clinical ally.",
        "A 17-year-old completing a custody order — stabilised on an SSRI for depression, engaged with the home's counsellor, attending classes for the first time — approaches his release date to find the statutory supervision ending with the order and a four-month district-clinic waiting list beyond it: the moves are the chapter's core service instruction — transfer paperwork completed before release with consent, the first appointment booked inside the supervision window, the family's nearest adult named as appointment-keeper, the crisis card with Tele-MANAS 14416, the school re-entry certificate processed, and a named follow-up if the first appointment is missed, because detachment, not relapse, is the default: the sentence-end cliff as the predictable crisis, the intervention administrative as much as clinical, and the compulsory-to-voluntary conversion completed while the compulsion still holds.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Delinquency: conviction-capable acts, mostly unconvicted.",
        "Poor parental supervision: the strongest juvenile risk factor.",
        "Adolescent mortality: accidents and self-harm — the age group whose mortality did not fall.",
        "3% custodial: the community is the caseload.",
        "Sentence-end: the detachment danger point.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The custody population is the highest-mental-health-need paediatric population in the country — screening every entrant is epidemiology, not luxury.",
        "Disclosure of abuse takes three interviews, not one — the clinician who asks once and writes 'no abuse' has not asked.",
        "The board is a clinical ally when handed readable assessment — the difference between escalation and a rehabilitative disposition is often a well-written formulation.",
        "The release-date intervention is administrative as much as clinical: bookings, consents, transfers, the named appointment-keeper — the paperwork IS the treatment.",
        "The 80/17/3 arithmetic should discipline every service plan: the deep end is where the need concentrates and the money goes, but the caseload lives in the community.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The boy the board keeps seeing",
      presentation: "Third time before the Juvenile Justice Board in a year — petty theft, then fighting, now a scooter — and nobody had ever assessed him.",
      initialPresentation:
        "A 15-year-old boy was produced before the Juvenile Justice Board for the third time in twelve months: petty theft at the first appearance, fighting at the second, a scooter theft now. The social enquiry report recorded school dropout and 'bad company'; no medical, psychological or educational assessment had ever been performed. Screening was arranged in the observation home where he waited.",
      history:
        "No prior contact with any health service; school attendance lapsed two years earlier with no educational assessment; no known psychiatric history — because nobody had ever asked. At screening (third interview), physical abuse by a stepfather was disclosed; the mother was described as warm but overwhelmed.",
      examination:
        "Mental state: conduct presentation with depressive features beneath; marked ADHD symptoms elicited from the developmental history (present since childhood, never assessed); borderline literacy on informal testing; superficial healed scratches on the forearm with an evening pattern reported by the home's staff.",
      diagnosis:
        "Stacked-risk juvenile offending — unrecognised ADHD with the low-IQ-to-school-failure bridge, physical abuse with traumatic and depressive features, conduct deterioration on the conduct-disorder spectrum (the L6 cross-reference for the full clinical programme).",
      management:
        "ADHD treatment and literacy support through the home's teacher; trauma-focused work begun; the mother engaged with a parenting programme; the assessment handed to the board in readable form — the disposition shaped toward a rehabilitative order rather than escalation; an aftercare plan with a named clinic appointment booked for the release date.",
      outcome:
        "The board's disposition was shaped by the assessment — a rehabilitative order rather than escalation — with the aftercare plan holding a named clinic appointment at release: a booking, not a hope.",
      teachingPoints: [
        "The repeated attender is the screening trigger — the third appearance is the diagnosis, not the escalation.",
        "Three interviews before disclosure is normal, not failure — the abuse question asked once answers nothing.",
        "The risk-factor stack IS the treatment plan: abuse, ADHD, literacy, the overwhelmed mother — each layer has its intervention.",
        "The board is a clinical ally when handed readable assessment — the disposition follows the formulation.",
      ],
    },
    {
      title: "The release date",
      presentation: "Stabilised on an SSRI, counselled, attending classes for the first time — and a four-month waiting list standing between him and the outside.",
      initialPresentation:
        "A 17-year-old completing a custody order had been stabilised on an SSRI for depression diagnosed during the order, was engaged with the home's counsellor and — for the first time — was attending classes. As the release date approached, the statutory supervision that held these gains was scheduled to end with the order itself, and the district clinic carried a four-month waiting list.",
      history:
        "Depression diagnosed and treated during custody; the SSRI tolerated and effective; counsellor engagement steady; school re-engagement new but real; family supportive at a distance; substance misuse assessed and addressed at entry.",
      examination:
        "Pre-release review: mood stable on the SSRI, no current self-harm ideation, insight into relapse risk present, engagement with the counsellor intact — a recovery held together entirely by structures that end with the order.",
      diagnosis:
        "The pre-release window: recovering custody depression with the sentence-end detachment risk approaching — the predictable crisis point of the whole trajectory.",
      management:
        "The chapter's core service instruction: transfer paperwork completed before release, with the young person's consent; the first clinic appointment booked inside the supervision window; the family's nearest adult identified as the appointment-keeper; a crisis card with Tele-MANAS 14416; the school re-entry certificate processed; a named follow-up if the first appointment is missed.",
      outcome:
        "The plan was executed in full while the order still held him — engagement converted from compulsory to voluntary before the compulsion ended, with the follow-up-if-missed named and live, because detachment, not relapse, is the default the plan guards against.",
      teachingPoints: [
        "The sentence-end cliff is the predictable crisis — the one date on the calendar the clinician knows years in advance.",
        "The intervention is administrative as much as clinical: bookings, consents, transfers, the certificate — the paperwork IS the treatment.",
        "Engagement must convert from compulsory to voluntary while the compulsion still holds it.",
        "The district waiting list is the adversary the inside-the-window booking beats.",
      ],
    },
  ],
  clinicalPearls: [
    "Delinquency is behaviour that could result in conviction — most never does; the juvenile band runs between two jurisdictionally variable ages: criminal responsibility and the adult court.",
    "Both mental disorder and offending peak in adolescence — the two curves are one population.",
    "The risk factors for offending, poor mental health and substance misuse overlap substantially — treating the disorder is treating the offending risk.",
    "The number of assessed risk factors rises as a young person moves deeper into the justice system — system depth is itself a mental-health risk marker.",
    "80% pre-court or first-tier, 17% community, 3% custodial — prevention belongs in the community, where the young offenders actually are.",
    "Poor parental supervision is the strongest and most replicable juvenile predictor — the finding that puts parenting programmes at the top of the prevention ladder.",
    "The warmth buffer: warm punitive mothers' sons convicted at 21%, cold punitive at 51% — discipline travels with warmth or turns toxic.",
    "Broken homes work as conflict vehicles, not structure: united-with-conflict 52% versus broken-with-affectionate-mother 22%.",
    "Criminal parents: 6% of families produce half of convictions; 63% of sons with convicted parents are convicted by 40 — the mediating chain is supervision, not criminal teaching.",
    "Four or more siblings doubles juvenile conviction risk — attention dilution and delinquent-sibling exposure.",
    "Adolescent mortality, uniquely, did not fall in the late twentieth century — accidents and self-harm leading: the custody-screening rationale in one sentence.",
    "Sentence-end detachment predicts deterioration and adult offending — the intervention window is the supervision period itself.",
    "The JJ Act's aftercare provisions are the written answer to detachment; their implementation is the clinical task.",
  ],
  highYieldSummary: [
    "Definition: delinquency = antisocial behaviour (conduct problems, aggression, the failure to conform to authority, norms or others' rights) that could result in conviction, although most never is; the juvenile band = criminal-responsibility age to adult-court age, both jurisdictionally variable; adolescence is the developmental stage of greatest health need — mortality driven (uniquely) by accidents and self-harm, concerns immediate and skin-weight-emotions-sexuality-shaped; and both mental disorder and offending peak inside the band.",
    "Epidemiology (England and Wales, 2005–2006): 157 Youth Offending Teams with the principal aim of preventing offending by under-18s; ~3,000 custodial places commissioned across Young Offender Institutions, Local Authority Secure Children's Homes and private Secure Training Centres; 301,860 recorded offences (theft and handling 18.5%, violence 18.1%, motoring 16.6%, criminal damage 12.9%); 16–17-year-olds 49.6%; males 80.6%, females 19.4%; white 85.2%, Black and minority ethnic 14.8%; of 212,242 disposals — 80% pre-court or first-tier, 17% community, 3% custodial. India: no equivalent national dataset; the JJ Act's boards, homes and 16–18 assessment layer parallel the YOT architecture; needs documented in prison studies; service links aspirational.",
    "Mechanism: the gradient story (the system as a sieve — assessed risk-factor counts rising with depth, the custody population the highest-need paediatric population) and the detachment story (sentence-end, the links snap, deterioration and adult offending follow); the Moffitt frame beneath (adolescence-limited majority desisting; life-course-persistent minority stacked); and the risk-overlap principle as the thesis: the risk factors for offending, poor mental health and substance misuse overlap substantially.",
    "The risk architecture (ch 11.2): poor parental supervision the strongest predictor; harsh, erratic or cold discipline with the warmth buffer (21% warm-punitive versus 51% cold-punitive conviction); teenage motherhood; child abuse (half of Cambridge–Somerville abused/neglected boys dead, ill or convicted before 35); broken homes as conflict (52% united-with-conflict versus 22% broken-with-affectionate-mother); criminal parents (6% of families producing half of convictions; 63% of sons convicted by 40, supervision the mediating chain); 4+ siblings doubling risk; socio-economic deprivation (low income and poor housing the most consistent); low IQ via school failure (the Lynam bridge) and impulsivity; delinquent peers (20% of boys with near-age brothers co-offending); school failure and exclusion; neighbourhood factors.",
    "Clinical: the presentation is the conduct spectrum (the conduct-disorder course's programme — ODD vs CD, callous-unemotional traits, DMDD against misread 'bipolar') hiding depression, anxiety, PTSD from abuse, self-harm and suicidality, neurodevelopmental disorders and substance misuse; the discipline is the five-domain screen of every custodial entrant and deep-end community case — mental state, self-harm risk, substance misuse, neurodevelopmental history, abuse history (three interviews before disclosure is normal) — plus the family system (supervision, discipline, warmth, conflict) and the engagement map.",
    "Management: the chapter's central instruction — maintain mainstream and specialist service access through supervision and custody, because sentence-end detachment is the deterioration pathway; treat the psychiatric disorders (treating disorder is treating offending risk); work the family risk factors (supervision-focused parenting programmes, the strongest-evidence lever); engage education; deliver the comprehensive CAMHS vision (the Children's NSF tiered service, primary-tier consultation to secure forensic adolescent provision); plan the transition to adult services before the youth system releases the case.",
    "India: the JJ Act architecture (Juvenile Justice Boards, observation and special homes, the 16–18 assessment layer, aftercare provisions); the 3% custody reframe (the highest-yield interventions belong in the community — child guidance, school counselling, district early-intervention); the observation-home release without follow-up as detachment Indian-style, with aftercare the written answer and its implementation the clinical task; the stacked-risk Indian child (migrant-labour families, street children, school dropout, child labour, substance misuse) with Anganwadi, school and NGO workers as the screening workforce; costs (approx 2026): custody the expensive end, community risk-factor programmes the cheap end, the JJ machinery already existing to attach them to.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "jo-quiz-1",
      question: "The defining characteristic of 'delinquency' is:",
      options: ["Conviction for a crime", "Acts that could result in conviction, although most never are", "Any childhood misbehaviour", "Adult criminality beginning late"],
      correctIndex: 1,
      explanation: "The concept spans the conviction-capable range; the juvenile band runs from criminal-responsibility age to adult-court age, both varying by jurisdiction.",
      afterSectionId: "diagnosis",
    },
    {
      id: "jo-quiz-2",
      question: "In England and Wales (2005–2006), the proportion of juvenile disposals that was custodial:",
      options: ["One-third", "Half", "3%", "25%"],
      correctIndex: 2,
      explanation: "80% pre-court or first-tier, 17% community, 3% custodial — the majority of juvenile offending never reaches an institution, locating prevention in the community.",
      afterSectionId: "management",
    },
    {
      id: "jo-quiz-3",
      question: "The chapter's central epidemiological statement about risk factors is:",
      options: ["Offending and mental-health risks are unrelated", "Risk factors for offending, poor mental health and substance misuse overlap substantially, and the number of assessed risk factors increases with depth in the youth justice system", "Risk factors decline with system involvement", "Only genetics matters"],
      correctIndex: 1,
      explanation: "The overlap principle: the deep-end population is the highest-need population, and system progression is itself a risk marker.",
      afterSectionId: "symptoms",
    },
    {
      id: "jo-quiz-4",
      question: "Adolescent mortality in the second half of the twentieth century:",
      options: ["Fell like all other age groups", "Did not fall — accidents and self-harm leading", "Rose tenfold", "Was eliminated"],
      correctIndex: 1,
      explanation: "The unique adolescent pattern — the clinical basis for custody self-harm screening and mental-state assessment of every entrant.",
      afterSectionId: "diagnosis",
    },
    {
      id: "jo-quiz-5",
      question: "The single strongest and most replicable predictor of juvenile offending, per the longitudinal studies:",
      options: ["Birth order", "Poor parental supervision", "Television", "Height"],
      correctIndex: 1,
      explanation: "Parents who do not know where their children are — the finding that makes supervision-focused parenting programmes the highest-yield prevention.",
      afterSectionId: "mechanism",
    },
    {
      id: "jo-quiz-6",
      question: "A young offender stabilised during custody approaches his release date. Per the chapter's core service instruction, the priority is:",
      options: ["Waiting to see if he self-refers", "Supporting access to mainstream and specialist services during supervision so that engagement survives sentence-end", "Terminating all services on release", "Referring only if he reoffends"],
      correctIndex: 1,
      explanation: "Sentence-end detachment predicts deterioration and further offending; the bookings, consents and transfers are completed while the statutory window still holds the young person in the system.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Define delinquency and the juvenile band, naming the two jurisdictionally variable ages.", answer: "DELINQUENCY: antisocial behaviour — conduct problems, aggression, the failure to conform to authority, norms or others' rights — that COULD result in conviction, although most of it never does; the concept spans the conviction-capable range rather than the convicted population. THE JUVENILE BAND: it runs from the AGE OF CRIMINAL RESPONSIBILITY (the lower bound — below it, no prosecution) to the ADULT-COURT AGE (the upper bound — beyond it, the adult system applies); BOTH ages vary by jurisdiction, which is why comparative youth-justice statistics need the band defined before they mean anything. The clinical reading: the band is a legal construction laid over a developmental stage — adolescence — that is itself the stage of greatest health need, with mortality driven (uniquely) by accidents and self-harm; the legal band and the developmental peak coincide, which is the whole problem.", topic: "Definitions" },
    { question: "Quote the Youth Justice System quartet: the team structure, the custodial estate, the offence volume with the age concentration, and the disposal split.", answer: "THE TEAMS: 157 Youth Offending Teams, with the system's principal aim the prevention of offending by under-18s. THE CUSTODIAL ESTATE: ~3,000 custodial places commissioned at any time, across Young Offender Institutions, Local Authority Secure Children's Homes and private Secure Training Centres. THE VOLUME: 301,860 recorded offences in 2005–2006 (theft and handling 18.5%, violence against the person 18.1%, motoring offences 16.6%, criminal damage 12.9%), with 16–17-year-olds responsible for 49.6% — roughly half committed by the two oldest juvenile years; males 80.6%; white 85.2%, Black and minority ethnic 14.8%. THE DISPOSALS: of 212,242 disposals, 80% pre-court or first-tier, 17% community sentences, 3% custodial — the figure that relocates prevention to the community, because that is where the caseload lives.", topic: "Epidemiology" },
    { question: "What makes adolescent mortality unique among age groups, and what does that mean for custody screening?", answer: "THE UNIQUENESS: adolescence is the only age band whose mortality did NOT fall in the late twentieth century — while every other age group's fell, adolescent deaths held, led by ACCIDENTS and SELF-HARM (with 7.5 million UK 10–19-year-olds — half the child population — carrying health needs greater than middle childhood or young adulthood). THE MEANING FOR CUSTODY: the self-harm arm of that mortality pattern operates INSIDE institutions — the custody population concentrates the age band's risk into a supervised setting where it is detectable and preventable; therefore every entrant gets the mental-state and self-harm screen, with the evening pattern asked about specifically. Screening every custodial entrant is not luxury or bureaucracy — it is epidemiology performed at the point of concentration, and it is the clinical corollary of the gradient: the custody population is the highest-mental-health-need paediatric population in the country.", topic: "Clinical practice" },
    { question: "State the risk-overlap principle and the system-depth gradient, and give the clinical consequence of each.", answer: "THE PRINCIPLE: the risk factors for offending, poor mental health and substance misuse overlap substantially — supervision, discipline, warmth, abuse, school failure, low IQ, peers and deprivation form ONE architecture predicting three outcomes, not three separate stories. CONSEQUENCE: treating the disorder IS treating the offending risk — the depression, the PTSD, the ADHD and the substance misuse are not comorbidity riding alongside the delinquency; they are the same architecture expressing itself. THE GRADIENT: the number of assessed risk factors increases as a young person moves deeper into the youth justice system — caution to panel to remand to custody; the system acts as a sieve concentrating stacked disadvantage at its deep end. CONSEQUENCE: system depth is itself a mental-health risk marker — the deep-end community case and every custodial entrant are high-need by definition, and universal screening at entry is the epidemiological duty that follows.", topic: "Mechanism" },
    { question: "List the juvenile risk-factor architecture by tier, with its numbers.", answer: "INDIVIDUAL: low IQ operating through school failure and executive deficits (the Lynam low-verbal-IQ bridge); impulsivity. FAMILY: poor parental SUPERVISION — the strongest and most replicable predictor; harsh, erratic or cold discipline with the warmth buffer (warm punitive mothers' sons convicted at 21% versus cold punitive 51%); teenage motherhood; child ABUSE (half of the Cambridge–Somerville abused/neglected boys dead, ill or convicted before 35); BROKEN HOMES as conflict vehicles rather than structure (united-with-conflict 52% versus broken-with-affectionate-mother 22%); CRIMINAL PARENTS (6% of families producing half of convictions; 63% of sons with convicted parents convicted by 40 — the mediating chain being supervision, not criminal teaching); FAMILY SIZE (4+ siblings doubling juvenile conviction risk, via attention dilution and delinquent-sibling exposure). SOCIAL: socio-economic deprivation — low income and poor housing predicting most consistently. PEER: delinquent sibling and peer exposure (20% of boys with near-age brothers co-offending). SCHOOL: failure and exclusion — the low-IQ bridge and the disengagement engine. Plus neighbourhood and situational factors. The clinical synthesis: these are simultaneously the risk factors for mental disorder and substance misuse — the chapter's fundamental point.", topic: "Mechanism" },
    { question: "Why is sentence-end detachment the danger point, and what is the countermeasure?", answer: "THE DANGER: while the order runs, the statutory supervision tenuously holds the young person's service links — some clinic, some counsellor, some prescription; when the sentence ends, the supervision ends with it, and the links snap: the young person exits with an appointment that exists only as an intention. Once detached, circumstances deteriorate, offending continues, and adult services inherit a harder case — the chapter's warning that detention-versus-development is decided at the gate, not in the courtroom. THE COUNTERMEASURE: use the supervision period itself as the intervention window — transfer paperwork completed BEFORE release with the young person's consent; the first clinic appointment booked INSIDE the supervision window (a booking, not a hope); the family's nearest adult named as appointment-keeper; the crisis card (Tele-MANAS 14416 in India); the school re-entry certificate processed; and a named follow-up if the first appointment is missed — because detachment, not relapse, is the default the plan guards against. The administrative IS the clinical.", topic: "Management" },
    { question: "What is the NSF/CAMHS vision for young offenders, and what does the tiered service actually promise?", answer: "THE VISION: the Children's National Service Framework for Children, Young People and Maternity Services set out the comprehensive CAMHS service for young offenders — a TIERED system running from primary-tier consultation (the child guidance and school counselling layer serving the pre-court majority) through YOT-embedded clinicians (specialist mental health delivered where the justice system already holds the young person) to secure forensic adolescent provision (the specialist tier for the deep end). WHAT IT PROMISES: that the mental-health need identified by screening has somewhere to go — the framework that turns the observation-home screen into a system rather than a finding with no follow-through; and that the service follows the young person through the supervision period rather than ending at the office door. THE INDIAN TRANSLATION: the JJ Act's boards and homes are the equivalent machinery; mental-health input into both is the service-development frontier — aspirational, not yet systematic — and the 3% custody figure says the tiers that matter most in India are the community ones.", topic: "Services" },
    { question: "Which sibling course holds the clinical programme for the conduct spectrum, and what are its two headline distinctions?", answer: "THE COURSE: the conduct-disorder course (Conduct Disorders — The Empathy Specifier — the note's L6 cross-reference, holding the full clinical programme: ODD versus CD, the callous-unemotional specifier, DMDD, and the multimodal treatment evidence). THE TWO HEADLINE DISTINCTIONS: first, ODD versus CD on the single axis that matters — defiance and authority conflict WITHOUT rights violation (ODD, the lower rung) against aggression, destruction, deceit-theft and serious rule violation that VIOLATES others' rights (CD, the upper rung); second, childhood-onset versus adolescent-onset CD — the childhood-onset form (before 10, typically with harsh parenting, ADHD, impulsivity) running the higher risk of adult antisocial personality disorder, the adolescent-onset form (peer-group and situation driven) mostly desisting as the group and the stakes change; within this second distinction the genetics-versus-environment weighting shifts, childhood-onset carrying the heavier loading. The exam rider: DMDD as the irritability differential against a misread 'bipolar' — the misdiagnosis that changes everything downstream.", topic: "Cross-references" },
  ],
  faqs: [
    { question: "Is my child a criminal?", answer: "Delinquency means acts that could result in conviction — most never do; the great majority of juvenile offending is handled pre-court, and most young offenders age out of it. The clinical question is not the label but the risk stack underneath: supervision, school, mood, trauma, substance use — the things that can change." },
    { question: "Does he have a mental disorder, or is he just bad?", answer: "Both questions are usually wrong separately and right together: the risk factors for offending and for poor mental health overlap heavily, and the deeper a young person goes into the justice system, the more of both he carries. Treating the disorder is treating the behaviour — that is the whole principle of this field." },
    { question: "Why does the doctor want to assess him in the observation home?", answer: "Because that is where the highest-need, least-served population gathers. Screening at entry is epidemiology, not bureaucracy — and what it finds (depression, trauma, ADHD, learning difficulty) changes both the care and the disposal the board reaches for." },
    { question: "What happens when he is released?", answer: "That is the danger point: statutory supervision ends, service links snap, and deterioration follows. The plan is made before release — appointments booked inside the window, consents signed, a named appointment-keeper in the family, a crisis card in the pocket, and a follow-up named for the missed first appointment." },
    { question: "Can anything actually prevent this?", answer: "Yes, at the population level: supervision-focused parenting programmes, school engagement, and early treatment of ADHD and of abuse after-effects are the evidence-backed levers — aimed at the risk architecture, not at the individual sentence. And because only 3% of cases are custodial, the prevention belongs in the community, where the caseload actually lives." },
    { question: "He is almost 18 — what then?", answer: "The transition cliff: the handover to adult services is planned before the youth system releases the case — or the detachment story gets an adult sequel, with adult services inheriting the harder case everyone worked to prevent." },
    { question: "Will he be sent to custody?", answer: "Almost certainly not, statistically: 80% of juvenile disposals are pre-court or first-tier, 17% community sentences, and only 3% custodial. The fear-driven image of the institution is the wrong place to aim the help — the community tier is where 97% of the work is." },
    { question: "His father was the same — is it in the blood?", answer: "The numbers say the inheritance is mostly the household, not the blood: 63% of sons with convicted parents are themselves convicted by 40, but the mediating chain is supervision — parents who do not know where their children are — not criminal teaching. That is the hopeful part: the household is the treatable part." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Children's National Service Framework for Children, Young People and Maternity Services — the comprehensive CAMHS vision for young offenders (the tiered service)" },
      { source: "Juvenile Justice (Care and Protection of Children) Act, 2015 — Juvenile Justice Boards, observation and special homes, the 16–18 assessment layer, aftercare provisions" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 11.7 — source chapter mapped; content rewritten and updated beyond it (the uploaded chapter ends mid-way — the note's documented partial-source flag is preserved throughout this course)" },
      { source: "New Oxford Textbook of Psychiatry 2e, ch 11.2 (Farrington) — the fully-available juvenile risk-factor architecture supplying the risk-factor core" },
    ],
    trials: [
      { source: "Farrington D P — the Cambridge Study in Delinquent Development: the longitudinal juvenile risk-factor architecture with its conviction percentages" },
      { source: "McCord J — the Cambridge–Somerville Study: supervision, the warmth buffer, and the abuse-outcome data (half dead, ill or convicted before 35)" },
    ],
    reviews: [
      { source: "Youth Justice Board / Home Office statistics, 2005–2006 — the YJS machinery and offence distribution as cited in the source chapter" },
      { source: "Moffitt T E — adolescence-limited versus life-course-persistent antisocial behaviour (the developmental taxonomy)" },
      { source: "Lynam D et al. — low verbal IQ, school failure and delinquency (the low-IQ bridge)" },
      { source: "UK adolescent-health epidemiology as cited in the source chapter — the 7.5 million 10–19-year-olds and the mortality pattern" },
      { source: "NIMHANS young-offender studies and Indian prison research — the India lens, flagged as non-Oxford in the note's evidence list" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 (24×7, free) — the crisis-card channel for the young person and the family alike" },
      { source: "The JJ Act's aftercare machinery and the district child guidance tier — the community channels where 97% of the caseload lives" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: what delinquency means, the risk stack underneath, why the doctor wants to assess in the observation home, and what happens at release.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The definition pair, the YJS statistics, the risk-overlap principle, the supervision finding, the screening discipline.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with the decision path, the JJ Act layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything — the screening craft, the release-date plan, the board as clinical ally, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definition, the band, the YJS machinery, the risk-overlap principle.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define delinquency, quote the 80/17/3 split and state the overlap principle cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The gradient story, the detachment story, the adolescent brain backdrop.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why system depth is a risk marker and why the sentence-end is the danger point." },
    { number: 3, title: "Clinical Practice", description: "The presentation clusters, the screening discipline, the service-access management.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the five-domain screen and map what happens to service engagement at sentence-end." },
    { number: 4, title: "Indian Context", description: "The JJ Act architecture, the 3% reframe, the aftercare task.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the observation-home screening habit and the release-date plan in Indian conditions." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the juvenile-offending essay cold and recite the statistics quartet without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 11.7 — source chapter mapped; content rewritten and updated beyond it (the uploaded chapter ends mid-way: introduction, YJS statistics and service-access conclusions available; prevalence tables, screening instruments and intervention trials beyond the uploaded pages — never fabricated)", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Farrington D P — the Cambridge Study in Delinquent Development: the juvenile risk-factor architecture, as set out in New Oxford Textbook of Psychiatry 2e ch 11.2 (fully available; supplying the risk-factor core where the partial ch 11.7 upload could not)", sourceType: "primary", year: "1961 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "McCord J — the Cambridge–Somerville Study: supervision, the warmth buffer and the abuse-outcome data (half of abused/neglected boys dead, ill or convicted before 35)", sourceType: "primary", year: "1939 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Youth Justice Board / Home Office statistics, 2005–2006 — the YJS machinery and offence distribution (157 Youth Offending Teams, ~3,000 custodial places, 301,860 recorded offences, the 80/17/3 disposal split), as cited in the source chapter", sourceType: "government", year: "2005–2006", dateReviewed: "2026-09-29" },
    { id: "S5", source: "The Children's National Service Framework for Children, Young People and Maternity Services — the comprehensive CAMHS vision for young offenders (the tiered service)", sourceType: "guideline", year: "2004", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Lynam D et al. — low verbal IQ, school failure and delinquency (the low-IQ bridge)", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Moffitt T E — adolescence-limited versus life-course-persistent antisocial behaviour (the developmental taxonomy underlying the juvenile/adult distinction)", sourceType: "review", year: "1993 onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "UK adolescent-health epidemiology as cited in the source chapter — 7.5 million 10–19-year-olds (half the child population); adolescent mortality the only age-band not to fall in the late twentieth century, accidents and self-harm leading", sourceType: "review", year: "2009 (as cited)", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Juvenile Justice (Care and Protection of Children) Act, 2015 — Juvenile Justice Boards, observation and special homes, the 16–18 assessment layer, aftercare provisions (the India lens, flagged as non-Oxford in the note's evidence list)", sourceType: "government", year: "2015", dateReviewed: "2026-09-29" },
    { id: "S10", source: "NIMHANS young-offender studies and Indian prison research — substance misuse, conduct problems, abuse histories and school dropout in Indian young offenders (flagged as non-Oxford)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "KYP sibling notes cross-referenced by the source note's evidence list: conduct-disorder — the full clinical programme (ODD vs CD, DMDD, treatment evidence); psychiatry-offending (O2) — the full risk-factor and disorder-association chapters", sourceType: "review", year: "2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The definition pair: delinquency is antisocial behaviour that could result in conviction (although most never is), and the juvenile band runs from the age of criminal responsibility to the adult-court age, both varying by jurisdiction; adolescence is the developmental stage of greatest health need, and both mental disorder and offending peak inside the band.", grade: "established", sources: ["S1"] },
    { text: "The Youth Justice System data (England and Wales, 2005–2006): 157 Youth Offending Teams with the principal aim of preventing offending by under-18s; ~3,000 custodial places commissioned across Young Offender Institutions, Local Authority Secure Children's Homes and private Secure Training Centres; 301,860 recorded offences (theft and handling 18.5%, violence 18.1%, motoring 16.6%, criminal damage 12.9%); 16–17-year-olds 49.6%; males 80.6%; white 85.2%, Black and minority ethnic 14.8%; of 212,242 disposals — 80% pre-court or first-tier, 17% community sentences, 3% custodial.", grade: "established", sources: ["S1", "S4"] },
    { text: "The adolescent-health context: 7.5 million 10–19-year-olds in the UK (half the child population); health needs greater than middle childhood or young adulthood; adolescent mortality, uniquely, did not fall in the late twentieth century — accidents and self-harm leading — the clinical basis for custody self-harm screening and mental-state assessment of every entrant.", grade: "established", sources: ["S1", "S8"] },
    { text: "The risk-overlap principle and the system-depth gradient: the risk factors for offending, poor mental health and substance misuse overlap substantially, and the number of assessed risk factors increases as a young person moves deeper into the youth justice system — treating disorder is treating offending risk, and system progression is itself a mental-health risk marker.", grade: "established", sources: ["S1"] },
    { text: "The juvenile risk-factor architecture: poor parental supervision the strongest and most replicable predictor; harsh, erratic or cold discipline with the warmth buffer (warm punitive 21% versus cold punitive 51%); teenage motherhood; child abuse (half of Cambridge–Somerville abused/neglected boys dead, ill or convicted before 35); broken homes as conflict vehicles (united-with-conflict 52% versus broken-with-affectionate-mother 22%); criminal parents (6% of families producing half of convictions; 63% of sons convicted by 40, supervision the mediating chain); family size (4+ siblings doubling risk); deprivation (low income and poor housing most consistent); delinquent peers (20% of boys with near-age brothers co-offending); school failure and exclusion; neighbourhood factors.", grade: "established", sources: ["S2", "S3"], note: "The chapter's own prevalence tables and instrument sections fall beyond the uploaded pages — the architecture is drawn from the fully-available ch 11.2 (the note's documented limitation, preserved; nothing missing invented)." },
    { text: "The low-IQ bridge: low verbal IQ operating through school failure and executive deficits to delinquency — the Lynam line; with impulsivity as the individual-tier companion.", grade: "supported", sources: ["S2", "S6"] },
    { text: "The developmental taxonomy: adolescence-limited antisocial behaviour (the majority, desisting with maturation and context change) versus life-course-persistent (the stacked-risk minority persisting into adult antisociality) — the frame beneath the juvenile/adult distinction.", grade: "established", sources: ["S7"] },
    { text: "The custody-screening corollary: the custody population is the highest-mental-health-need paediatric population in the country — screening every entrant (mental state, self-harm risk, substance misuse, neurodevelopmental history, abuse history) is epidemiology, not luxury; disclosure of abuse commonly requires three interviews.", grade: "established", sources: ["S1", "S8"] },
    { text: "The service-access principle: many young offenders are disengaged from mainstream education and health services; access must be maintained through supervision and custody, because sentence-end detachment predicts deterioration and adult offending — register, treat and hand over before the gate opens, converting compulsory engagement to voluntary while the compulsion holds.", grade: "established", sources: ["S1"] },
    { text: "The comprehensive CAMHS vision: the Children's National Service Framework's tiered service for young offenders — primary-tier consultation, YOT-embedded clinicians, secure forensic adolescent provision.", grade: "established", sources: ["S1", "S5"] },
    { text: "The India lens: the JJ Act's Juvenile Justice Boards, observation and special homes, the 16–18 assessment layer and aftercare provisions; no equivalent national youth-justice mental-health dataset, with needs documented in prison studies and service links aspirational; the 3% custody figure relocating the highest-yield work to the community tier; costs (approx 2026): custody the expensive end, community risk-factor programmes the cheap end, the JJ machinery already existing to attach them to.", grade: "supported", sources: ["S9", "S10"] },
    { text: "The cross-reference discipline: the conduct spectrum's clinical programme (ODD vs CD, callous-unemotional traits, DMDD as the irritability differential against misread 'bipolar', the multimodal treatment evidence) is taught in the conduct-disorder note — the L6 cross-reference — and the full risk-factor and disorder-association chapters in the psychiatry-offending note (O2); neither is duplicated here.", grade: "supported", sources: ["S1", "S11"] },
  ],
};
